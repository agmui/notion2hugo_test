---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 1
toc: false
icon: "rocket_launch"
---

## Computer Vision guide:

[link_to_page](86d45bc0-388b-4d26-8848-44f255f73d0e)

## ROS guide:

[link_to_page](3c76c1de-ec8f-46d6-8b0a-294005edc2d5)

## Controls guide:

## Install

{{< tabs tabTotal="4">}}
{{% tab tabName="Windows" %}}

Download and run _**AS ADMINISTRATOR**_: [taproot installer](https://github.com/Thornbots/TeachingFreshies/releases/tag/1.0)

It automatically installs all the tools and vscode.

{{% /tab %}}
{{% tab tabName="WSL" %}}

Follow the linux guide but currently some methods do not work (also ur kinda on ur own hehe)

TODO: make separate guide for vscode section

{{% /tab %}}
{{% tab tabName="MacOS" %}}

TODO: for now just read the [linux_init.sh](https://github.com/agmui/sample_rm_pico_app/blob/main/linux_init.sh)

<details>
<summary>might not work lol</summary>

`brew install libusb pkg-config`

Next install: [vscode](https://code.visualstudio.com/Download)

</details>

{{% /tab %}}
{{% tab tabName="Linux (ubuntu)" %}}

{{% alert context="danger" %}}
**Warning** do not update recursively
<details>
<summary>why tho?</summary>
There are some submodules that may go on for a while (like tinyusb) and I highly
recommend you don't need to get them.
If you want to see what submodules I update just look in `linux_init.sh`
</details>
{{% /alert %}}

```shell
git clone <https://github.com/agmui/sample_rm_pico_app.git>
cd sample_rm_pico_app
./linux_init.sh && source ~/.bashrc
```

## Install VScode

[vscode](https://code.visualstudio.com/Download)

{{% /tab %}}
{{< /tabs >}}

## VScode extensions

Have vscode open this repo
When first opining vscode should ask you to install the plugins

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S26P4OOX%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T190144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIByk0cKV6A5hVTwipUe%2FAEHTnCZCXXwngFjy%2BkleH%2Fr%2FAiEA%2Bla2zt5jepoVVJHqbZRQhxAigNANLF7u52Oyv1ApXtoqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGWaw86037B9Pv3UlCrcA3FSmtK9CKk%2BHNCQB%2Bm%2BvOCOwFj78IN3hLLJ8EUkwRgXpRbpak6fm0FxHg57TeB1B%2BTBuMVwNjf3Y47nv69hWZrega7D8kXHOsXU2HPADQ6hsKWchgIaJmGueoXB%2FNeT95sN1nBB2Tt5lXNmRh%2Fv0UAmJpnDInYtfiaAuqy5ixnbc6rR3TBM6zFbQ1s9I9eWxbpmGVLM68IcDeQK1rPL5KUR3SLayAvh6K16vxS9ugrRmYJA2GvwdnIlEamf8a%2B7CAHskGGzefozAvLdS1CTXBw7wubo8Ey%2FG9TC3e%2Fp3YMA9DvG%2FXDZ5nZNqWdmyM5mpPjBAswe1fYeJpKt3Ljz0QzsJ0qS9AQmfj7eoH%2FOjkBRNFrxxDkxHVpd8Uue5%2Fw2E6ZL%2BMdeNiZjOkXv4OckLZInGkyrXdqhofbVQMChOBxip39y%2BVag4qNImUR0rzNpHEvvphUp61uL6uo%2BdfFz4jBAHnG%2FhapixFcbiwMpGFrZ%2FUriJqPvm9ABHMrcQDLKpZbH%2FOv3OU%2BUQkgO0c1gOEBEneFRouwrTl41DsLtyIMuphV04PL2FfstFUoTF%2Ft4xaWCNVsjMNh%2B7E131nBr%2FFN5pQ69WrxldbmluWW2jl49LRxvc2%2FMUqVacqE9MLebpr8GOqUBuViJFGudjy6%2Fd6R3pdyeUeH4lS6uIk%2BzcuZD96uVHTiIIrcLspqhXCcQV4%2Bhy%2Fy%2Ff%2FsM8hIB0LsLax%2FFpRQtL2AbntpG1MZTipmKYLI1TE%2Bzrk9gHhWaGqKQRktKHiPmNNmEv4LNGBDlpJtGZhIIMVz59CYgJBWqcx5nx4cnAVEDfsY4woTYluGXHYI%2F7td%2F57OExqBT%2Fqoa9yy%2FckqGcLOmbFL5&X-Amz-Signature=a7d1991d943c15b234ccc2eba4065b4a8d6365523688259f357689ef29258def&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S26P4OOX%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T190144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIByk0cKV6A5hVTwipUe%2FAEHTnCZCXXwngFjy%2BkleH%2Fr%2FAiEA%2Bla2zt5jepoVVJHqbZRQhxAigNANLF7u52Oyv1ApXtoqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGWaw86037B9Pv3UlCrcA3FSmtK9CKk%2BHNCQB%2Bm%2BvOCOwFj78IN3hLLJ8EUkwRgXpRbpak6fm0FxHg57TeB1B%2BTBuMVwNjf3Y47nv69hWZrega7D8kXHOsXU2HPADQ6hsKWchgIaJmGueoXB%2FNeT95sN1nBB2Tt5lXNmRh%2Fv0UAmJpnDInYtfiaAuqy5ixnbc6rR3TBM6zFbQ1s9I9eWxbpmGVLM68IcDeQK1rPL5KUR3SLayAvh6K16vxS9ugrRmYJA2GvwdnIlEamf8a%2B7CAHskGGzefozAvLdS1CTXBw7wubo8Ey%2FG9TC3e%2Fp3YMA9DvG%2FXDZ5nZNqWdmyM5mpPjBAswe1fYeJpKt3Ljz0QzsJ0qS9AQmfj7eoH%2FOjkBRNFrxxDkxHVpd8Uue5%2Fw2E6ZL%2BMdeNiZjOkXv4OckLZInGkyrXdqhofbVQMChOBxip39y%2BVag4qNImUR0rzNpHEvvphUp61uL6uo%2BdfFz4jBAHnG%2FhapixFcbiwMpGFrZ%2FUriJqPvm9ABHMrcQDLKpZbH%2FOv3OU%2BUQkgO0c1gOEBEneFRouwrTl41DsLtyIMuphV04PL2FfstFUoTF%2Ft4xaWCNVsjMNh%2B7E131nBr%2FFN5pQ69WrxldbmluWW2jl49LRxvc2%2FMUqVacqE9MLebpr8GOqUBuViJFGudjy6%2Fd6R3pdyeUeH4lS6uIk%2BzcuZD96uVHTiIIrcLspqhXCcQV4%2Bhy%2Fy%2Ff%2FsM8hIB0LsLax%2FFpRQtL2AbntpG1MZTipmKYLI1TE%2Bzrk9gHhWaGqKQRktKHiPmNNmEv4LNGBDlpJtGZhIIMVz59CYgJBWqcx5nx4cnAVEDfsY4woTYluGXHYI%2F7td%2F57OExqBT%2Fqoa9yy%2FckqGcLOmbFL5&X-Amz-Signature=615f9a6a9f765314ca4180a18bae6a39c3140c2e688dc598b17805a0a58437c0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HZVZ5M2%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T190147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQC3ftzHN5QMeVgaq01GjF2e0u93fIwdQuhdkl7hnrujkQIhAP8%2FrKFS3Z5aFcvfQgJ97%2F9g28jcQ9ugC5unEREeaSHJKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUJx1yJZT3vKBqv5Mq3AMFd7%2F67i1VsCz0KScFpe6wSjw5awZ2wo6fhMDdULiFcRPMGGBEb9acTl5vaNCVE90RX1eBh4X%2Bb%2Bwst4BJhj2yzsgQrPYQkgtONPz0Mnb3f0wesEHgNI%2F51YApTfAsH8G2BG9PTEOBSGfY70mluDTOVRU1hVDhBaNKiIqhy0LCZV4ogrKEQeMXY2CIBsjNAk2L00JqCSLTrmuEzeBr9Q7Y06OiN2mjiws%2Bj8FI815cXZpTvXmsDEUcn8I%2BkzuVpBw8HVfgi1jyou1l%2FZ10QvpqtcYfA9sZvHaq7itc0NZqUd5v9nOzUaHnIeezXiReNniT7Xr4bIr%2F6GBejF1lygi6vuqOGZEO%2BZBsWp8xFlW377wEt0Uj88jHlM7PxhkfHQ0rMFUUduLOExhvEQc0YeGCpfg3kdb%2FxsepbeLLPrnMBqP9cFwCj82YNysNo0rf0xf00yJyD5Gx%2FC%2BAbeyFbtswB6y2J5%2FUI%2B7o%2Bij1cYUeVrL2a8R0AGFUpdfSwBnoUPPN3ihNXPMhKKRG%2FZfLDKUXg%2Fsbt9nINds1wUSekuWUjJ5Qwc8LA8RpQjtLtnrZom1fBCDCMbFMvgbkimPjT%2BWqeVJmS36FW0Tr9cedf%2FBXT7D%2BLb931VAygPewezC6m6a%2FBjqkAR4ri7qN4teuiLMpptvogP63Stc4NBxTpJrpv2eYNFy8oTaq1S%2Bo9pHHa41Bt3%2BS6u%2BAgz%2FtLRtrpFcV1ELtJvU%2FKXvYMYud7SN7C1vhcLpWgnuFyKkTIjHBhRUIwVELSfhb5oHm2el8nxUkLZ2Z9EQdfJcQ%2B8yTKhXga8gRifmzLYVdjIqO9Tuw%2F2Pp1BYT8vZHwoj5L9kr1A%2B8Xzsr29aIBWmP&X-Amz-Signature=996452212d19d35ea8874c371221aa76ccdffaa777b50acedd3f2355a2c4fc5c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSQEIK2L%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T190147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIEcWGZ9uxlgzhIbJ56%2BDWYjOnuRlGRnApn90WsC59umYAiEA4Q5HJkp%2FvfyklHz%2BZlBDCU8rnED6K3cZwoZl59TYUtQqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNEyw4oCqkluwbNO4ircA3k1QM1XxrvEJOW9A%2BOx0r%2BQfTDLvtei6lFzuP9ITpGg6p%2Be1xTzQZyNmy8XP1edK3898S26p6T%2FmM%2BzHWWhCyuMe%2Bnqq8pFV%2FvzlS64ZT2RzpNLC0tfONP22I1bJi5kbRWl4vy4bInxYBoKkCQBW8qO%2F%2BZRdK1hGhg4WZB7o46IHmXGh3oI0l7Z%2FGf8BHd5vN29BXFe4vl7wSTkgzKWfKl8wjqKUYlyWwGFJgCqzojgDk3tBf2I2pQcKl6MNJnFm5KdToNjQktA4W5%2F6EPRFNQsWXBP3Mgj%2B03XRKyyd%2Fse1hK%2Bm8vWOv4%2BNSqsaJ98xYWf2il6lN6YVePKREzsJpxrKKc61CTyqJ%2BCqiWrbD5gviVEY5gf8T1tpvik5y4ms5FuCJVtLpSobUl6E5s5Qao3rX1IWmadtxi9kU9m3dB0sTdswbDEFrXTrKipGOf9pFHIltT0WDcCsspdhN7fznM1M13Fw74ZxZMaEfuC%2BsNNvsXI4iasUczSrwBlkhe1t19tXgyN1pQu3nlFN0Nsse564yIqdQxxLRQvhzZkFtKR05dXDVLLo3v9Q3EH0RtOVE4NSnbjh2zicWi1ugbSFREwihjFRQsr5TD75D%2B95QkA%2B89sVLSrN1jyQXdWMNKapr8GOqUB%2Feq2fJsllfDs%2F1373eMK8zJanyotLNKh7Br8S9fh5fZ%2FscBRbyWN8mm55lrQgBntaOb7xaNGatS1JZdGY6ga5KriSyNdx%2FdW9xSXg6rrFVUT5XwPC6LVS%2F54w1gWU2RM%2FeaGiYdz7mzOzSr6QnM%2BZQkkWIRKDo1IVTfZJ%2F%2FpkpfdwZfeoS5mCn%2BQTQNpcF2T7WGMplTUroFJdQ7FAHmw1XGz1bwS&X-Amz-Signature=2b8a296d39653248a030c1534f3911499de6569f77c1b84ce92c0c842fc75e42&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S26P4OOX%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T190144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIByk0cKV6A5hVTwipUe%2FAEHTnCZCXXwngFjy%2BkleH%2Fr%2FAiEA%2Bla2zt5jepoVVJHqbZRQhxAigNANLF7u52Oyv1ApXtoqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGWaw86037B9Pv3UlCrcA3FSmtK9CKk%2BHNCQB%2Bm%2BvOCOwFj78IN3hLLJ8EUkwRgXpRbpak6fm0FxHg57TeB1B%2BTBuMVwNjf3Y47nv69hWZrega7D8kXHOsXU2HPADQ6hsKWchgIaJmGueoXB%2FNeT95sN1nBB2Tt5lXNmRh%2Fv0UAmJpnDInYtfiaAuqy5ixnbc6rR3TBM6zFbQ1s9I9eWxbpmGVLM68IcDeQK1rPL5KUR3SLayAvh6K16vxS9ugrRmYJA2GvwdnIlEamf8a%2B7CAHskGGzefozAvLdS1CTXBw7wubo8Ey%2FG9TC3e%2Fp3YMA9DvG%2FXDZ5nZNqWdmyM5mpPjBAswe1fYeJpKt3Ljz0QzsJ0qS9AQmfj7eoH%2FOjkBRNFrxxDkxHVpd8Uue5%2Fw2E6ZL%2BMdeNiZjOkXv4OckLZInGkyrXdqhofbVQMChOBxip39y%2BVag4qNImUR0rzNpHEvvphUp61uL6uo%2BdfFz4jBAHnG%2FhapixFcbiwMpGFrZ%2FUriJqPvm9ABHMrcQDLKpZbH%2FOv3OU%2BUQkgO0c1gOEBEneFRouwrTl41DsLtyIMuphV04PL2FfstFUoTF%2Ft4xaWCNVsjMNh%2B7E131nBr%2FFN5pQ69WrxldbmluWW2jl49LRxvc2%2FMUqVacqE9MLebpr8GOqUBuViJFGudjy6%2Fd6R3pdyeUeH4lS6uIk%2BzcuZD96uVHTiIIrcLspqhXCcQV4%2Bhy%2Fy%2Ff%2FsM8hIB0LsLax%2FFpRQtL2AbntpG1MZTipmKYLI1TE%2Bzrk9gHhWaGqKQRktKHiPmNNmEv4LNGBDlpJtGZhIIMVz59CYgJBWqcx5nx4cnAVEDfsY4woTYluGXHYI%2F7td%2F57OExqBT%2Fqoa9yy%2FckqGcLOmbFL5&X-Amz-Signature=bf78aaeda5820f413b04444bbf1a575e4959a58ea1717978e2ec26c76b2947b4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
