import { Image } from "@mantine/core";


export interface IclipboardProps {
}

export function Clipboard (props: IclipboardProps) {
  return (
    <div>
    <Image src="./clipboard.png" alt="clipboard" width="100%" height="100%"/>
    </div>
  );
}
