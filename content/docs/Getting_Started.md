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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C3L7QBV%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T150728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLDfcj4a9DMH3JD7Z0OUIZUWdCdBHZI4jbQAUddrABXAiEA%2FJgqE4swDgY13iyRRWjoN%2FBh8%2FflJw8CMjrErXSpu1Iq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDJmcJKQeHdmbojqpOCrcA3Oq%2FfwJaUpGmY1oNWMrbxmAkiiQ0HVKoOG0skMx2%2Ff%2BY2GH9oRROsg2PB3Hdgq%2BxEQPGd1jugn5fTSKUN47SP%2FNtDGiREOkEVaO7ZGiiiuWva7Z%2BYBG3uEnzg803kjQxxU7gOKkmOJsD2zs%2BF0JDFzge15q4VI2BCT1B68YzUmFtHjiIYryu%2F0dD8ZhMXulxj7b6jeyH7tG5vTyOupNs8p45S5DYL5L9QNOfdw0NMa%2FJOSZjYtlzNASU7nV%2Bga9BfVwG9BQuR5Hd6a%2BkEOkFu%2Fi%2BxLNnwrmCW2FkOY5kxXV2m5GUq4aplCSryC%2Bo8cFac69tpfMDfE9Fx%2BQf7EPluFTLZMFMiBJNgPMln%2B6%2BwA5vMV4V2NI%2FdBSyjbGNL8L6pR8TlLSxWX%2FWzS%2FlAMp7hjiwG8fDINd7PGomRCG90AOHWMqzJXbDu8d0735C%2FP3QUcesf8agl9D15y4rVBVqnPGOKV5kkifybyFEvYSJqCiC2k3qiOVIpfManD78K6h5y6tQM69%2B2qZtwxam8w9nyYlenjX9p7jZrBS59aFpUFC22oo2TJRwAO5kY0DkUAcDCKtqdkuut1lALO1TOf84hyFLgkpkesxKfkC1m6AGProWemQQVmw8gsGl%2F14MO%2BOg70GOqUBFxwlmDwnZdBjLArTG%2B8njzJCIrtS%2FutnHPjJeDGNY7fIoDbdaAzy%2B66juALyHyH0BebtvzWNJeeys6owi0hDchrcCS%2BQ4nVPrevqppDZ1goEHixIGJJxgEwKKeEisBHUWufc77bMp8SnA%2BV5FImHkwx9umSgP%2BhLb6DKZgZ2JyirXmRE5i63GtsRicI3EGHjzAkRqTTE93AuguiAgdpywFtbjih%2F&X-Amz-Signature=1569a0299a03c2bfe99fa973af2736ebef7e8393da5ed9a8d124c0eb11b5068a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C3L7QBV%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T150728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLDfcj4a9DMH3JD7Z0OUIZUWdCdBHZI4jbQAUddrABXAiEA%2FJgqE4swDgY13iyRRWjoN%2FBh8%2FflJw8CMjrErXSpu1Iq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDJmcJKQeHdmbojqpOCrcA3Oq%2FfwJaUpGmY1oNWMrbxmAkiiQ0HVKoOG0skMx2%2Ff%2BY2GH9oRROsg2PB3Hdgq%2BxEQPGd1jugn5fTSKUN47SP%2FNtDGiREOkEVaO7ZGiiiuWva7Z%2BYBG3uEnzg803kjQxxU7gOKkmOJsD2zs%2BF0JDFzge15q4VI2BCT1B68YzUmFtHjiIYryu%2F0dD8ZhMXulxj7b6jeyH7tG5vTyOupNs8p45S5DYL5L9QNOfdw0NMa%2FJOSZjYtlzNASU7nV%2Bga9BfVwG9BQuR5Hd6a%2BkEOkFu%2Fi%2BxLNnwrmCW2FkOY5kxXV2m5GUq4aplCSryC%2Bo8cFac69tpfMDfE9Fx%2BQf7EPluFTLZMFMiBJNgPMln%2B6%2BwA5vMV4V2NI%2FdBSyjbGNL8L6pR8TlLSxWX%2FWzS%2FlAMp7hjiwG8fDINd7PGomRCG90AOHWMqzJXbDu8d0735C%2FP3QUcesf8agl9D15y4rVBVqnPGOKV5kkifybyFEvYSJqCiC2k3qiOVIpfManD78K6h5y6tQM69%2B2qZtwxam8w9nyYlenjX9p7jZrBS59aFpUFC22oo2TJRwAO5kY0DkUAcDCKtqdkuut1lALO1TOf84hyFLgkpkesxKfkC1m6AGProWemQQVmw8gsGl%2F14MO%2BOg70GOqUBFxwlmDwnZdBjLArTG%2B8njzJCIrtS%2FutnHPjJeDGNY7fIoDbdaAzy%2B66juALyHyH0BebtvzWNJeeys6owi0hDchrcCS%2BQ4nVPrevqppDZ1goEHixIGJJxgEwKKeEisBHUWufc77bMp8SnA%2BV5FImHkwx9umSgP%2BhLb6DKZgZ2JyirXmRE5i63GtsRicI3EGHjzAkRqTTE93AuguiAgdpywFtbjih%2F&X-Amz-Signature=b86255e4df2ea4ab91bf428420263afc55c32f3b43bc7ed758ce2593ffb4e036&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SMFDQ5S%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T150730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCukgdAP2r8I2QpCYNa6UEw1JoSPMBZ1dtDlVl6ikxJLgIhALef%2FxonYu46DTFyQFxi3Vx6OKof0%2Fy46XR8WKykMOpBKv8DCBcQABoMNjM3NDIzMTgzODA1Igw%2FoXBigZ2soA%2Fn%2B%2FIq3AMp5PiM5yjx5xsloMqIETObQP9eyL6KUJm3HpgnS%2BRoaHA1p%2BCdIdYcn1bfz%2F2IK8YEvlFJa3%2BFWRGZeQ6P4mAlXjrukOXefAY7cTBkv8Am2Ia7rrEX25162EqxcUpN3o6gnoF4T0pGnfcpX5hMSdPAHHMnYwS%2BOelp5pTMW3VsCgN5s5sSQfK2qos5bQXw2h3B8OaJtpF%2BH23zO6imQxqnrJ0TwpF0CtOt4PIAduPbGuYu5qJqNe%2BJmMrbsG%2BZbOLFA%2B3pXV1yaWvjzrOoxqpERCjCleXzl9PjjOIZDesdRfSXH3TO36JhnkzykgwHSEHRzI%2BUlmlMIDDRV9j6On5ob4GsMwpIWvzj7NCzWXUEPEmvcErzBB5QfVACfc97qkVv2YWLP7Xf%2BuNEsCvnKiSjtZHiFd%2FNgVcrjhliDR18Lrhgxl3XQmdvhMZO9D%2F%2B5TTRHYU6MPV17O4KnvJWBsE1vnplM12BaaOaAB8eiRPCsWBVJiZO4fJg0cBiOwgtKDCct1pwmnAmuSMDGmhSOeCZnYgEkhx5vcCxacwg4hMkpznasHd6mUEsSbujSxVXgEELsjTmF1hZFsidiIj44WjGToOyC1R7bmnt%2FONtIua%2FpHbvzkTKO5GoVo1bgDDMj4O9BjqkAYUVBb%2Fh9VUA%2BkkNZG4yhbNj7rvlbSiwWlOFV4WKoPj%2BfkQI9hd02Ygv3hqk5KyKu5Q%2FSpruunzzMkpqbl5j1TFtTu2L2GiF2%2B9sE9AEbNULmUn3FnHAj%2B3XDY3SACP%2FysxT%2Fzdn54jGRqaXL7B0mg3W6jAinijryXTVDEveIs8h5MDASWPuFV1xNKSp1F91Kb5QHV8gYvbEzgthQToa1qrrq9C5&X-Amz-Signature=66039bbc65210e8764e58b700b26bbe02387b6bad476a5fed4a1969bfb9f3dd7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRUQ7C6R%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T150732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkPmU9UCieWw5UjLt21cvdSIWJWV5TS9gVI73222PP%2FgIgEbM3%2FQX7KM7hvzAkjoqu7baXjK6rK4jnGLqjUmrGqREq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDG522M1L7gsdjwpZ0ircA4NotABKCzGa7bXCTWiLdLKrNKU1tHSi8Igo459R%2FtdLbaVK%2FBAnqtjjVqIgZhnujvC1QDujb0hy1GPgjbXeBKwoyYEcCUi5CpTtDI0dEgbJncr9F3k3t8e7TPHJ22%2F8hgpNtVthdCM580qSqkP0Y8OIBsi06AcEX3mwfuJIaUbFEt7mQRE8jmtG%2BccfnKLQRssVqBV9R%2FiEVB4nV8Yc%2FRbykRUsohKf0cx3TqvDvMxq5T1Mzrl1jVVlqG7XkzwyvNZ9dPnvLWGJ2II2yNiINI41H50D%2ByHFn8cYmK9ZmlW8TO375qg7jCqENFtFucElGAZdXKf0EGsub8ISnpSXCf%2FMSu%2FcnikD3pI02soRqC%2BzYJdPeu7MeTZ6OdmJcWbKNqpuy4mja8G3%2FYqEyj%2Fu9IfIgVaJ%2Bprz4V76Nm3fUDWfEUDna9zDws8rEGF5QlvGaXzTDckjo6xbtycpsm2A3wWCjOJ7oLWWXzX7VLUTNB0HDCqJ3QUEzwEOFwsDBzVivJJ0zFKPPdyI%2B4p7vVVN1KgZsskEkMsBaxkxl%2B4%2Bvzy0pqpUa3qTXbjb6ZyeIGyLs%2FVGcuHY5UDVvILFhTuB96SscUXIePI1HRbSteD0ltUyJJ1vDOd7IVODa%2FaiMN%2BPg70GOqUBE3vDEgJrjgKWFB2pc1OiA1HNPP1yPVhe2Y%2FLzuKkycAqU3G6MXXKBt%2Fj3%2BSFNLBkFta52IauXB77Y7FUIOvkEbqLoTFGV6vxomOY9enVRK9aO%2BOZxgex9lUutZPYKQim%2FiTwPeLKipIilbCEAd7YoXb8TJ2yU%2FJH54f7bwdHwT1xF1F8Ia%2FHGubpmpYPLfDMM43dwAbn6x6F44cUPkVStCH6VTCu&X-Amz-Signature=b61736cfcc00aacb0993a211fa88b7a3fae838ced53fbacf3c71d4497870cb64&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C3L7QBV%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T150728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLDfcj4a9DMH3JD7Z0OUIZUWdCdBHZI4jbQAUddrABXAiEA%2FJgqE4swDgY13iyRRWjoN%2FBh8%2FflJw8CMjrErXSpu1Iq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDJmcJKQeHdmbojqpOCrcA3Oq%2FfwJaUpGmY1oNWMrbxmAkiiQ0HVKoOG0skMx2%2Ff%2BY2GH9oRROsg2PB3Hdgq%2BxEQPGd1jugn5fTSKUN47SP%2FNtDGiREOkEVaO7ZGiiiuWva7Z%2BYBG3uEnzg803kjQxxU7gOKkmOJsD2zs%2BF0JDFzge15q4VI2BCT1B68YzUmFtHjiIYryu%2F0dD8ZhMXulxj7b6jeyH7tG5vTyOupNs8p45S5DYL5L9QNOfdw0NMa%2FJOSZjYtlzNASU7nV%2Bga9BfVwG9BQuR5Hd6a%2BkEOkFu%2Fi%2BxLNnwrmCW2FkOY5kxXV2m5GUq4aplCSryC%2Bo8cFac69tpfMDfE9Fx%2BQf7EPluFTLZMFMiBJNgPMln%2B6%2BwA5vMV4V2NI%2FdBSyjbGNL8L6pR8TlLSxWX%2FWzS%2FlAMp7hjiwG8fDINd7PGomRCG90AOHWMqzJXbDu8d0735C%2FP3QUcesf8agl9D15y4rVBVqnPGOKV5kkifybyFEvYSJqCiC2k3qiOVIpfManD78K6h5y6tQM69%2B2qZtwxam8w9nyYlenjX9p7jZrBS59aFpUFC22oo2TJRwAO5kY0DkUAcDCKtqdkuut1lALO1TOf84hyFLgkpkesxKfkC1m6AGProWemQQVmw8gsGl%2F14MO%2BOg70GOqUBFxwlmDwnZdBjLArTG%2B8njzJCIrtS%2FutnHPjJeDGNY7fIoDbdaAzy%2B66juALyHyH0BebtvzWNJeeys6owi0hDchrcCS%2BQ4nVPrevqppDZ1goEHixIGJJxgEwKKeEisBHUWufc77bMp8SnA%2BV5FImHkwx9umSgP%2BhLb6DKZgZ2JyirXmRE5i63GtsRicI3EGHjzAkRqTTE93AuguiAgdpywFtbjih%2F&X-Amz-Signature=e623f390ca01ba8dca0a2278094422a8dd694702a7ae3f88155404d540663ff6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
