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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRUIKNOQ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T090830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIEdDfjHJdDCiVj4ZLNg7jdMSptPdRq0gY22i6938MoQNAiEA0myLwKeN8HJT6cyDBc7ratmqvenv7lJRqg5pwmDLEkAq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDNyhUPKpWcJ%2F%2BF6IvyrcA2LQRkH%2BbBxsjsvrzktiANL0TUxVRcC%2BUACcL7gIHgJTVheOzBLjmgVecXHYKqWLv9UmTPWjMOKNTu6GgG%2FSPJ3OAuxcrV9%2Bnqk%2Fr%2B%2FJqfIIVlS9X8yFkpDUm29OoIkKOR8hEcRv3ghUfaQga0UqfuLE0Kh3MS%2BYEGLON1EgkPtZDYNF2gqxhiBtxcTKzSG6Fr6%2FStWR2%2BAfwCKHPHCJTdmuK8SoyusGQrv93yQEvk7EL675UQNlp06txKsfpSgu4r6pcKAJHuLWWKCfpskRPrqAa%2B1Urpn%2By03BQTaJzrm03Ra3lqanzAREG87g6afXO7HGctuvsYCXBd1NIlq5Zry%2B6ZDLdBbp0vVj2tl0Ei5vwkNuPcRZhg%2Ba3konfNDLTw5dmV9H62xOceKRQzB6Xn55WLfk%2FbN4fCQjA4df267wqwQ1zKT25k53%2BNxBsbVIftNRzNpi%2Fa4S4Y917AX5tXBgjGNz37pxV1tFA3kZKGynulrUNqnErljGthlG8WAcclCGm9ZkM336oKGoYDl8NFCHmnW21Ze7zQOI7TOWsEQZ34f8PDH82eMrwIQ6Bi%2BCOBlGJo8thH5%2BU864T3O9f5d83d35nuS4tMvfFGQLP1RHpVTZLvJMAq13tp32MIjo9b0GOqUBEMhe5N7MYVCcL74Ffnamc3ALnvzCmxK2WyqFNdqktfm6DASt%2Bqt%2BNQx8nwPnuWv91crTU0qRptJ4bEekeC8wbEn5KBFFyndburoS8sz8oOLKovYv5QAWMwa%2BXOZp%2FRgvv0f%2BUh6gBbe2vscgX8RXtt9sDE5h5jSGnEPULyFgqGTmqkrzWrY3xsSmwv9rovAKjoN3ARdGZzou0f1g2kqUpJb0sbHO&X-Amz-Signature=730cf8ae0c695ffadbe19692f4d74580f7cdb3bcd8612531e82b050fef683d94&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRUIKNOQ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T090830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIEdDfjHJdDCiVj4ZLNg7jdMSptPdRq0gY22i6938MoQNAiEA0myLwKeN8HJT6cyDBc7ratmqvenv7lJRqg5pwmDLEkAq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDNyhUPKpWcJ%2F%2BF6IvyrcA2LQRkH%2BbBxsjsvrzktiANL0TUxVRcC%2BUACcL7gIHgJTVheOzBLjmgVecXHYKqWLv9UmTPWjMOKNTu6GgG%2FSPJ3OAuxcrV9%2Bnqk%2Fr%2B%2FJqfIIVlS9X8yFkpDUm29OoIkKOR8hEcRv3ghUfaQga0UqfuLE0Kh3MS%2BYEGLON1EgkPtZDYNF2gqxhiBtxcTKzSG6Fr6%2FStWR2%2BAfwCKHPHCJTdmuK8SoyusGQrv93yQEvk7EL675UQNlp06txKsfpSgu4r6pcKAJHuLWWKCfpskRPrqAa%2B1Urpn%2By03BQTaJzrm03Ra3lqanzAREG87g6afXO7HGctuvsYCXBd1NIlq5Zry%2B6ZDLdBbp0vVj2tl0Ei5vwkNuPcRZhg%2Ba3konfNDLTw5dmV9H62xOceKRQzB6Xn55WLfk%2FbN4fCQjA4df267wqwQ1zKT25k53%2BNxBsbVIftNRzNpi%2Fa4S4Y917AX5tXBgjGNz37pxV1tFA3kZKGynulrUNqnErljGthlG8WAcclCGm9ZkM336oKGoYDl8NFCHmnW21Ze7zQOI7TOWsEQZ34f8PDH82eMrwIQ6Bi%2BCOBlGJo8thH5%2BU864T3O9f5d83d35nuS4tMvfFGQLP1RHpVTZLvJMAq13tp32MIjo9b0GOqUBEMhe5N7MYVCcL74Ffnamc3ALnvzCmxK2WyqFNdqktfm6DASt%2Bqt%2BNQx8nwPnuWv91crTU0qRptJ4bEekeC8wbEn5KBFFyndburoS8sz8oOLKovYv5QAWMwa%2BXOZp%2FRgvv0f%2BUh6gBbe2vscgX8RXtt9sDE5h5jSGnEPULyFgqGTmqkrzWrY3xsSmwv9rovAKjoN3ARdGZzou0f1g2kqUpJb0sbHO&X-Amz-Signature=1e15419572b5e9dea89ca9ac237c8fcd55e35cff82905540a85d0a48aae00948&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SHH6AOH%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T090832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDPYXNe7LTk9dF1HzkySWqsIGUdyA5kz0MraWxHXS8ijgIgNm8NGDsms%2BMt4iz9jOf5Evyrd4PunM477GHPx%2Fm3muAq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDEEuJDOd%2FdYXiRGXKyrcA0nLCfI2Ev3veRe08745mLWBSztKe4gE8KfFb%2FvZVnXaWuZC8yk2kC4OpnjmJp2P1W47X%2BdEh6CJdCNbWjNVHs9Oaq8Z7uoFmBHW8IvkrJFtkyjxvq2rxbaNbhALi4sW2G4cjb53WjZLFRPzMNjJFzwoyDDhEtgYKj%2Bb5Qx3rslb32sRd3hfdGEqMMut%2F1IlA8CR1loPDJJ1rdPQKdzA4sCY9MGXOM0%2Fvgyywip4hjLbSGhe1owEN8klFL7of%2B4C8BqN5aAJ%2Bd9aebSt10kUizfwBOFIA73EkCc790hzP6PlIzHyiIDiDPmjYvS%2F%2BqzCrYAK8xqfiR1Npa%2FseguLTuyE9R8DXvznLOmxiyPezZXwdeSvA6fMQ0ssE0SZQcOKI1B8LPBnWGe2xwedPvN%2Fyo3eCfwhCDi5eL8R9nQZiK%2BV7DVutG1%2BvAxxBkMPP4E9otZ6YYl0xB49aggojas5oJHU68dCy7hkJ8hHVXCOd0ODvqTrIApxuwete4RjO2rKVyzfYYyBZKNPl5wZFdTmE4xBB40g2yUkxtaBn%2BI%2B5HWiR2ulmKJUpFy8JTsdztapruzZy2rABbja5Qf20%2BqyAPAwLmbvDpUEu4Hc1HANefrNB2%2F3%2FO8GG%2Bvq7Iq0MNmC9r0GOqUBMe%2Fp3gxut1EXX9zKb0SntSrfep1GzmirLgmi7mKOnKXE69PV%2FFbBOISQDnGJj7VRqvcumQQUKkVAfB7juU16IQ1%2B5trauGnxR7L1hmjPCBznIQ0BIng%2BcirPNuJ6H8F5iTxkxm%2BoLrbpuO16QIrHbllKpBf7Blv2jRK3EmTikNHjiW9EzK0y%2F%2FVU%2FSnoq2ZE5ti9piKrRIp0KV8HOxhFEkJKdTyF&X-Amz-Signature=3f2f87bea8ed99e7a7030d991987417305b226dd1dd25c1f24565fec3b40c1f6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7GJ6W3M%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T090833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDoNme%2B6Y0UD4MHI9c%2F3wmEbORyKekrejDjzDTjWs4QQwIhALDnZO7oX5XOcSJQUs4k3Ym2PQaE3klTEDLEO8o1tl%2BJKv8DCEEQABoMNjM3NDIzMTgzODA1Igxq%2Fnc19fF7buMXvkQq3AOmMJZqPaLF05E0GJOa2HP1qucE%2FZ6qgi%2FmndYE%2Bjvlonkp6WBxpszstJWkLf4ioVEhzs0f4ad59VdpSz0b7aABsF3XvcfLOAmhsJm8yHIVPgwZTVRJd%2BsZDh30xjEWN9rHdIO9e%2FBlezAncs%2Ffm2pMXS%2F8pDxJglZ4tlBep1M3P1UQ3hY7QRp1Ac3EPtY9lk3lqhfcKIdH%2FjAqlGMHRytPPYupGVq7k%2Bxmg63MqlEWs9nHtUV%2BvrKmHGPz4LoPI4q4X%2BFn%2Bi1R5q%2BnY6kffAhz9yi0VC6Y2zjIrNpLLg5yGvBjDNYqgnFyF%2B%2B%2BVdLdKOea8D07Q4IYDhiYZlJAVxx%2FGvFpuufJvgncVCKYoEFuMlewyhrF7lLk64iTa80XzJ3mpnOzaUmN6Br%2BZN%2FFpVkNyda09CrmN49DPYJ7SiIVo9BWk7S%2FoUYVCzpGq3qMtykqlTM1j%2FVJ4jsQwUafvV3z4oZs6FFt7OyYN8sDr8U8ymvH5sWwKGK9%2FSST34wdhIFJzFsY1lfiln8geHsw0towg66XOZR7YHlvRv2a8kVTUojYqURc7NDefYX3rVHCq%2FNDjulpiqYpgymTvVaDP76n%2FUaAlAiE24USIkQttt1Z1m9ZGbGe32q%2Fxu72VzCI6PW9BjqkASHf0K1SFQIgDgdwohYcgUuYdGWOmCx1oIyp8rR%2FOTc5Qa1PHKCcFo7Iw3MrtdE8YiOyARbv2DWgl8R2AWPVkrVGvfHg3%2Bfpt5hnBfwuA5Hbx5bi8XkkR2%2BhZfE8an%2FqzRoJPQ%2BCvSxMxwNTRyYhawXojGZqh4MgMM%2FvP9itPiMlDPMcKzvmCHGXvkKq%2BimHn%2FXEmnXUup5rjP%2Be9kSoOOnfkd9o&X-Amz-Signature=6a2316c5a94ba56a8b6dd8b9703b1189ec5a2adc6d966fdd7dacdf45a5e8038c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRUIKNOQ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T090830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIEdDfjHJdDCiVj4ZLNg7jdMSptPdRq0gY22i6938MoQNAiEA0myLwKeN8HJT6cyDBc7ratmqvenv7lJRqg5pwmDLEkAq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDNyhUPKpWcJ%2F%2BF6IvyrcA2LQRkH%2BbBxsjsvrzktiANL0TUxVRcC%2BUACcL7gIHgJTVheOzBLjmgVecXHYKqWLv9UmTPWjMOKNTu6GgG%2FSPJ3OAuxcrV9%2Bnqk%2Fr%2B%2FJqfIIVlS9X8yFkpDUm29OoIkKOR8hEcRv3ghUfaQga0UqfuLE0Kh3MS%2BYEGLON1EgkPtZDYNF2gqxhiBtxcTKzSG6Fr6%2FStWR2%2BAfwCKHPHCJTdmuK8SoyusGQrv93yQEvk7EL675UQNlp06txKsfpSgu4r6pcKAJHuLWWKCfpskRPrqAa%2B1Urpn%2By03BQTaJzrm03Ra3lqanzAREG87g6afXO7HGctuvsYCXBd1NIlq5Zry%2B6ZDLdBbp0vVj2tl0Ei5vwkNuPcRZhg%2Ba3konfNDLTw5dmV9H62xOceKRQzB6Xn55WLfk%2FbN4fCQjA4df267wqwQ1zKT25k53%2BNxBsbVIftNRzNpi%2Fa4S4Y917AX5tXBgjGNz37pxV1tFA3kZKGynulrUNqnErljGthlG8WAcclCGm9ZkM336oKGoYDl8NFCHmnW21Ze7zQOI7TOWsEQZ34f8PDH82eMrwIQ6Bi%2BCOBlGJo8thH5%2BU864T3O9f5d83d35nuS4tMvfFGQLP1RHpVTZLvJMAq13tp32MIjo9b0GOqUBEMhe5N7MYVCcL74Ffnamc3ALnvzCmxK2WyqFNdqktfm6DASt%2Bqt%2BNQx8nwPnuWv91crTU0qRptJ4bEekeC8wbEn5KBFFyndburoS8sz8oOLKovYv5QAWMwa%2BXOZp%2FRgvv0f%2BUh6gBbe2vscgX8RXtt9sDE5h5jSGnEPULyFgqGTmqkrzWrY3xsSmwv9rovAKjoN3ARdGZzou0f1g2kqUpJb0sbHO&X-Amz-Signature=21059839991bc570de03facda43391fb9cae73cf5de5135e662e1eae782ee924&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
