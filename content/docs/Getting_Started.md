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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6HWURHW%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQChCPyYTuA7h%2FgR4tJ5VA%2BA5gmcrzlsYJUeh03PnBCG%2FAIhAMcIlPERyOFlTBd3%2FaHbHq8Ol5OSZvRGbyHxJoNwFmzEKv8DCEoQABoMNjM3NDIzMTgzODA1IgyIUVNW5vSov%2BnEIJ4q3AOREm1va5nAcq%2F9pjgE%2FAT6xvUpbrNR7V1cVBQAYO44y7XOcBwgAr8JmAhMsJHHLGdR0FU337DB4I47Y6yUAB8QL0Xnjl5u7j%2BIBYGD8qnMsby8pmTo4BXXmb8C08CM64eLXrAKsr8E0fFChNOollf5mQCB4iXTwVIqA2MS56UGPZZqpjiqhOjm8dnHy2v6WH%2FXOd1M%2BP1TqpDDLUf35CO%2FrU7T4cnIylIIBWjQvW2B9qLRPMLxC2p9qi%2BlDWgakGUlBiJTVz1yEkZnYGPI4M36Vr6eE9bMCMuesS9miCVj4wFRPt15n4p64prRC1Vfx4H9GXZTHeJujSslO377n886y2%2F4YTtojllG3yKcBOZF9ELK1bLXDuT5H1zK3PrppzDy4%2F2qHoK%2FPoV2wZxLmwRsZsBD4XeqI2%2FGOO8p92mjQpmOzed2mwWrGNLjjKp02TpDIA1FWXLb8OPFq8eyTNw5eeJglHNcn2B%2BHHFXObfmKrzoU3G1wIloWBpwIKnTmI%2BEu31nqjppz6LPvS2Q8gCfxZjTzBe5FJbW3Bvm7sgUpXseqg5UbSFAGGVL08Ap5rgOhcJh4XPE3QaPpNLcvS9byjC%2BRxkGNAQu0zD4R6Lvogu3dIFRbIL%2FCQB8DDCLvI69BjqkAQJ7tIpoQA6Szll13sr6MDYhrH4WlXMTw7Ki5AOjzxF6oYNmHXulnsN32GT%2Fd1quUgoYg%2FRdiqapB3icmY7aP11J6fChPnmf0Te9aHjTrhoOgU7iA8xUkhHRkuQRvHRXBTsQzR8U1wHNoNdpIrVjbpwo4Q%2FCICpcFHmUImkDiaO7IMLyZgoeAzZ%2FesYTUW8d88mlHsibl7TvdtGqr%2FySo6VxYVVA&X-Amz-Signature=2bcda2ad2d14015ec5a1cca30f6b0fb16bbafa42e24a18b5da504811ccadf3c6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6HWURHW%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQChCPyYTuA7h%2FgR4tJ5VA%2BA5gmcrzlsYJUeh03PnBCG%2FAIhAMcIlPERyOFlTBd3%2FaHbHq8Ol5OSZvRGbyHxJoNwFmzEKv8DCEoQABoMNjM3NDIzMTgzODA1IgyIUVNW5vSov%2BnEIJ4q3AOREm1va5nAcq%2F9pjgE%2FAT6xvUpbrNR7V1cVBQAYO44y7XOcBwgAr8JmAhMsJHHLGdR0FU337DB4I47Y6yUAB8QL0Xnjl5u7j%2BIBYGD8qnMsby8pmTo4BXXmb8C08CM64eLXrAKsr8E0fFChNOollf5mQCB4iXTwVIqA2MS56UGPZZqpjiqhOjm8dnHy2v6WH%2FXOd1M%2BP1TqpDDLUf35CO%2FrU7T4cnIylIIBWjQvW2B9qLRPMLxC2p9qi%2BlDWgakGUlBiJTVz1yEkZnYGPI4M36Vr6eE9bMCMuesS9miCVj4wFRPt15n4p64prRC1Vfx4H9GXZTHeJujSslO377n886y2%2F4YTtojllG3yKcBOZF9ELK1bLXDuT5H1zK3PrppzDy4%2F2qHoK%2FPoV2wZxLmwRsZsBD4XeqI2%2FGOO8p92mjQpmOzed2mwWrGNLjjKp02TpDIA1FWXLb8OPFq8eyTNw5eeJglHNcn2B%2BHHFXObfmKrzoU3G1wIloWBpwIKnTmI%2BEu31nqjppz6LPvS2Q8gCfxZjTzBe5FJbW3Bvm7sgUpXseqg5UbSFAGGVL08Ap5rgOhcJh4XPE3QaPpNLcvS9byjC%2BRxkGNAQu0zD4R6Lvogu3dIFRbIL%2FCQB8DDCLvI69BjqkAQJ7tIpoQA6Szll13sr6MDYhrH4WlXMTw7Ki5AOjzxF6oYNmHXulnsN32GT%2Fd1quUgoYg%2FRdiqapB3icmY7aP11J6fChPnmf0Te9aHjTrhoOgU7iA8xUkhHRkuQRvHRXBTsQzR8U1wHNoNdpIrVjbpwo4Q%2FCICpcFHmUImkDiaO7IMLyZgoeAzZ%2FesYTUW8d88mlHsibl7TvdtGqr%2FySo6VxYVVA&X-Amz-Signature=a69908dc7db334e998f7d86903e50102cfd9ff73e747aac972aec3eaabcb36b5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIL63RKL%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T190106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCWuna3af4gesjWSFWOjHyyzLVBAqVsjTpNr8T%2F7S5rXgIhANVTw%2Fr6MMjOnpazuiOo2U7ISQioHYr%2BuCgojZzV%2B%2FroKv8DCEoQABoMNjM3NDIzMTgzODA1IgzA1UtXvUPfOcDwjZUq3AMCf43b3lAL9ATxZCG30bJlGN2Gz2yIVHCjOM9U3dvCcVdoLK8Yrav%2F6vftT68klE%2F9l59vU2uGM94qIP7adk7aZsNeWjQMIUotcYONF3NiDSK11zlrND8FIINh2xkq3J3igPeZcIN9FJr4BoDUv3sCLJgc9ayaGuH7shVOQYARGeeY5WV7dUF5J6vjLBaw%2FP6on3LK00hct1KIxYH%2FdbgDE6KktsZgf9D9fKxberd2%2BqA73GO9shOvTLqGvH6GxWFuGdqRF69Rd%2FawgYbginoRwkpxz13BU8YVHfSTaOcC4Ncw8PgiIo6%2BOS%2FE9hhhTVqm7v%2BwSI%2BEGd6pfxQLWHVK3WjC%2BFnjBRQJ0WFxaS17zdH7dTI%2FPgLVUHcFkNiNYb2thoNsnOzzg%2BwYTncHWKV7CaEKfxwxyIMLP58ZLkNfQov1EjU6OfJ%2FmyzwvO3XkwqfuE4EoRpMrFpVuXeAd4nIFIaWOJawNZEumVhs4LfuoMiITgXlTOuDfuD81nstdAnr8kG8yd4ttmVBAjGQhvay9TJhYKoCNr7yWCCCrnE%2BC3HaVYZcTDBdXkHFOAChH3OaItx%2F5XbSQwxbg3%2Beh3e3bKkCWwaEJJQjJmYuXxG%2BrOWwQJFUStnaLUPWAzDgu469BjqkAWWsB8kyYRk4iy61ik%2FLAH4iTJA5R4S8orFKLFU%2Br2Msr6Pf0WdkRuotfm0dp9VewUouwNkmXI8mR0BvfUlw5oMKwj19D%2BP24rRJNHLhYGmjWo79UsL1O2kep8Z7DjKX5obK9R%2B3U90XChBu7fIzlNuR8X2mFimG%2F4Y7UqQvIO%2BHdBGVSzQ7ryje9tfryq96AiVOlzdmWriIeystuFUobm7C%2F53s&X-Amz-Signature=2a8af0cedd212c1766e618fe9617bd10aca60a6489d4eaf72f435f386a4ddfb2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPJBZK3C%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T190106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIFmgQ1Pdy64V43W5b9X91uYZ9tKZWmH5fO%2F%2Fd6c28CMpAiEAzwonTfgxIahGNYQ74J0G73wBGT3kps1Uidw8HCFhNlUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDIlg2u9I1PpjRlMnqircA26Fjvu9Pm9BXMrWcstAYab1SO%2BAiVwF3kaptGYQ0XapprFSVULzb8lsZt9Tx9p1huLgn81y7TQVao5JI900TeZgQlgPa1WCfk3YQT40C8zcce6ec5Q5K%2BXKXOT39Budml02sK8BdKX1bNWP%2BLK8mVVt3IFIepznAAAOQ2hoDWkn2UtdzFhsg%2FO4KUFU62oq9RS6VNKRefIF9wLWdi37uPDWvO7IFg9xHa5ok8jSDyree8%2BHMXZHvoLa4VBu%2BTTBH%2BA%2BBKksIqd%2BnLnWPnkT3kjz%2FbY4Qtkx0tSm2Qf%2BbmuGrweTWLEZritevejbo8O2o84yJZECA8mxmBEi%2BogGtvqeqok%2Fto8gF3CmD%2BRZFNQ4PkhuSP3iUCUy2LlPuVA5gPrKt1rwemyJoPdO1zDDbebZA4A67KMubCf9bOpz0ctZQZzKTXJAtDXdNbnJFeouPTiP2ZcDHH5oYBRZsWTdzdcfRlmvlXXNCrJRGK59Qrr9jt4BMZ%2FhdEHcalSVLTIywuMrcmHq5tU5bEi4WGw67CTzY4E57jjc5TmPloSZ76ldeHztHg9OzJgnUn%2F7JHZlsmfTjVqpfKyAWxBEpAovUARvwygglJ6EwMRlUMiP8gxtIYXAp1kIsZlEzBW5MIO8jr0GOqUB65eRkg10UiL1NxMHv7exN34EsoY9zagYfh1Kls78Cylsw%2FcbXPipRbADrd9oSGsleJYoAr3bdnXTUmzP7M0qAcYfi7SL1TPGDDrkVQGVpFpEcYq2NhsTcpAX1vAIJLY1tQPrtgLSVEMpP4ls4W%2BTeInbvtz5PROAJLZY29x8pVFE4%2Fu%2FQVWsLW7rkZmcW%2BXl1StgPA5DI%2B14sawHWBDvCZrPMXJJ&X-Amz-Signature=0a9d0b8cdfc14794c69874a08581ba6c80b9e8160e4558334494fd3ccdc12d9a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6HWURHW%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQChCPyYTuA7h%2FgR4tJ5VA%2BA5gmcrzlsYJUeh03PnBCG%2FAIhAMcIlPERyOFlTBd3%2FaHbHq8Ol5OSZvRGbyHxJoNwFmzEKv8DCEoQABoMNjM3NDIzMTgzODA1IgyIUVNW5vSov%2BnEIJ4q3AOREm1va5nAcq%2F9pjgE%2FAT6xvUpbrNR7V1cVBQAYO44y7XOcBwgAr8JmAhMsJHHLGdR0FU337DB4I47Y6yUAB8QL0Xnjl5u7j%2BIBYGD8qnMsby8pmTo4BXXmb8C08CM64eLXrAKsr8E0fFChNOollf5mQCB4iXTwVIqA2MS56UGPZZqpjiqhOjm8dnHy2v6WH%2FXOd1M%2BP1TqpDDLUf35CO%2FrU7T4cnIylIIBWjQvW2B9qLRPMLxC2p9qi%2BlDWgakGUlBiJTVz1yEkZnYGPI4M36Vr6eE9bMCMuesS9miCVj4wFRPt15n4p64prRC1Vfx4H9GXZTHeJujSslO377n886y2%2F4YTtojllG3yKcBOZF9ELK1bLXDuT5H1zK3PrppzDy4%2F2qHoK%2FPoV2wZxLmwRsZsBD4XeqI2%2FGOO8p92mjQpmOzed2mwWrGNLjjKp02TpDIA1FWXLb8OPFq8eyTNw5eeJglHNcn2B%2BHHFXObfmKrzoU3G1wIloWBpwIKnTmI%2BEu31nqjppz6LPvS2Q8gCfxZjTzBe5FJbW3Bvm7sgUpXseqg5UbSFAGGVL08Ap5rgOhcJh4XPE3QaPpNLcvS9byjC%2BRxkGNAQu0zD4R6Lvogu3dIFRbIL%2FCQB8DDCLvI69BjqkAQJ7tIpoQA6Szll13sr6MDYhrH4WlXMTw7Ki5AOjzxF6oYNmHXulnsN32GT%2Fd1quUgoYg%2FRdiqapB3icmY7aP11J6fChPnmf0Te9aHjTrhoOgU7iA8xUkhHRkuQRvHRXBTsQzR8U1wHNoNdpIrVjbpwo4Q%2FCICpcFHmUImkDiaO7IMLyZgoeAzZ%2FesYTUW8d88mlHsibl7TvdtGqr%2FySo6VxYVVA&X-Amz-Signature=6089aa263948ff6e3767cde364309952a35e32a8658b00673b3f620374c1b3a1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
