import { remote } from 'electron';
import * as React from 'react';
import { AvatarWrapper } from './AvatarWrapper';
import { BorderButton } from './BorderButton';
import { Dialog } from './Dialog';

interface Props {
	node?: HTMLDivElement;
	title?: string;
	setPath(path: string): void;
}

interface State {
	url: string;
	fileValid: boolean;
}

export class AvatarChange extends React.Component<Props, State> {
	state = {
		fileValid: false,
		url: ''
	} as State;

	selectFile = () => {
		const extensions = ['jpeg', 'png', 'jpg'];
		remote.dialog.showOpenDialog(remote.getCurrentWindow(), {
			filters: [{ name: 'Bild', extensions }]
		}, fileNames => {
			const fileName = fileNames[0];
			const splitted = fileName.split('.');
			if (extensions.includes(splitted[splitted.length - 1])) {
				this.setState({ fileValid: true, url: 'file://' + fileName.replace(/\\/g, '/') } as State);
			}
			else {
				this.setState({ fileValid: false, url: '' } as State);
			}
		});
	}
	load = () => {
		const { setPath } = this.props;
		const { url } = this.state;
		setPath(url);
	}

	render() {
		const { title } = this.props;
		const { fileValid, url } = this.state;

		return (
			<Dialog
				id="avatar-change"
				title={title || 'Portrait ändern'}
				node={this.props.node}
				buttons={[
					{
						disabled: fileValid === false || url === '',
						label: 'Ändern',
						onClick: this.load,
					},
				]}
				>
				<BorderButton label="Datei auswählen" onClick={this.selectFile} />
				{fileValid === true && url !== '' && <AvatarWrapper src={url} />}
				{fileValid === false && url !== '' && <p>Die Datei ist ungültig! Überprüfe bitte das Dateiformat und die Dateigröße!</p>}
			</Dialog>
		);
	}
}