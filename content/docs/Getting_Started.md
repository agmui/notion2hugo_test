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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466723QIXGE%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T110706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDISddqUeHX3mAQgBtU0eCMF3dojWeCbrKTpu43bfAuHgIhAI%2F2PXjjJIFu%2Bv6ZmPcjEjdClbB%2Fdd53V4wKWy07CZstKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igykopeq8mD2b8Jx6Hsq3AMAG9lRlfiC%2BodfYJVGZkj8lfOu7eZRby7eL%2FAjY3ZOq66D0iheDu%2ByTTTN34l3xy%2Frl%2FDD0%2FIBV%2Bk%2BJoPyz%2FPq8Ho6HGA6Y7L76Q%2FvmYkg4w5u2rz%2BZlCl6xYnfy8Qs60zAFVyFTABirH7drDZEC2cTByQ6OUuuvzOEnYatK62Kwg6kmaB4K151%2BN5aNn9wdAJNSh8YFLxEm2PptI5Krkps1K94ZbqMAAaDO9LeiRg1aiC4KBRy4sHiagJ2JnHKEAy87mytNB4qsRy4ToMALl%2BTdjD8kYfKdokIF4pduZv7fFwItmLpNnbJlmN2o7vwy0LlgBS%2F0UxC6Zz%2BRq9nBIYfoPsM6SJG07ggPmEtu9lj69mOIzz2USnrh2%2BZsY04fEdkY%2BhAS8MBHkAQFK9lK3oafEpqiq%2Bq6B4Rt0xfZ0NBA8FBpXhMPTqNPYKEL5XPZQ%2BEbFo0fyKzH7FZIuTmuD6sX3v87TJPWAxCtZRneRWCG4NIyZxJFVg9IrAl5Z7%2B6b28vkrOZNSEtEPRhFePf9tSM9m5jhS%2FeicpljImkVSheenaMrbBw2Q%2FetD5n1pWLVpZIKJPCmtDTUXZ4YO8QQJ8A7TOEI8B07hTtJ462BDeLRocQFzAJ3mfCYAKDC%2Bvd6%2FBjqkAZy1U52P40nMa1cUseFrQoFQSFB77LOeMpsDLTZtR2kWjYelqHk0%2BfddPJ41CouB0uTWpZfIMIVLk%2FZiQEQ%2B2621uK04ii76F0Z2MDrYsPpu5vDGYr1mcu5s5B%2B%2BkCL91nIXrS8c%2BCf2%2BAynXIzADANvuKrlwm6nPlQa25rdbsGpaguuNOFfsuzZkJjvA%2FzFChKlLLc0RYA5XbyMh2VG%2BDM%2BUBEC&X-Amz-Signature=b13d014132bd8d02b14fbb867677402be464c5246db057a4bc1fa3e4537df8a3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466723QIXGE%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T110706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDISddqUeHX3mAQgBtU0eCMF3dojWeCbrKTpu43bfAuHgIhAI%2F2PXjjJIFu%2Bv6ZmPcjEjdClbB%2Fdd53V4wKWy07CZstKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igykopeq8mD2b8Jx6Hsq3AMAG9lRlfiC%2BodfYJVGZkj8lfOu7eZRby7eL%2FAjY3ZOq66D0iheDu%2ByTTTN34l3xy%2Frl%2FDD0%2FIBV%2Bk%2BJoPyz%2FPq8Ho6HGA6Y7L76Q%2FvmYkg4w5u2rz%2BZlCl6xYnfy8Qs60zAFVyFTABirH7drDZEC2cTByQ6OUuuvzOEnYatK62Kwg6kmaB4K151%2BN5aNn9wdAJNSh8YFLxEm2PptI5Krkps1K94ZbqMAAaDO9LeiRg1aiC4KBRy4sHiagJ2JnHKEAy87mytNB4qsRy4ToMALl%2BTdjD8kYfKdokIF4pduZv7fFwItmLpNnbJlmN2o7vwy0LlgBS%2F0UxC6Zz%2BRq9nBIYfoPsM6SJG07ggPmEtu9lj69mOIzz2USnrh2%2BZsY04fEdkY%2BhAS8MBHkAQFK9lK3oafEpqiq%2Bq6B4Rt0xfZ0NBA8FBpXhMPTqNPYKEL5XPZQ%2BEbFo0fyKzH7FZIuTmuD6sX3v87TJPWAxCtZRneRWCG4NIyZxJFVg9IrAl5Z7%2B6b28vkrOZNSEtEPRhFePf9tSM9m5jhS%2FeicpljImkVSheenaMrbBw2Q%2FetD5n1pWLVpZIKJPCmtDTUXZ4YO8QQJ8A7TOEI8B07hTtJ462BDeLRocQFzAJ3mfCYAKDC%2Bvd6%2FBjqkAZy1U52P40nMa1cUseFrQoFQSFB77LOeMpsDLTZtR2kWjYelqHk0%2BfddPJ41CouB0uTWpZfIMIVLk%2FZiQEQ%2B2621uK04ii76F0Z2MDrYsPpu5vDGYr1mcu5s5B%2B%2BkCL91nIXrS8c%2BCf2%2BAynXIzADANvuKrlwm6nPlQa25rdbsGpaguuNOFfsuzZkJjvA%2FzFChKlLLc0RYA5XbyMh2VG%2BDM%2BUBEC&X-Amz-Signature=9958ada2fc880bfdb027219903a565d252a388935a7e8ac5c08c05b36b20ec7a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIKQX6F4%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T110709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIAQzXz8swQG3y1ejRJgUFMJB%2B7%2B1Al9hq7kDXenETLvrAiEA7fbhvIHqNxXDTW8%2FA2QYIrpsBhzEqxsjYiVBPoFPdA4qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMqqTjAeC0muIkujmCrcA7j82bTIA3OPNozfiJBbnfFjfqileINCGz6MKvUTDr%2FmZOb44nQgNXTDxsfFU0eYPFFMspo1uwNmg4x3DPe6EaPu8YhDRzQWsGShodOPNVinJgTbXDMwI9qIVRns%2FuTu9uznHjDPuTu2J2xMkqv2lo7eQSn8enQ6fVWDNqw%2FRice1uWmoed6uF5SwXNcDYQwcnQXssxqZdDOTIi3%2F5fdy%2F1qt3omNFc6sgFy8HZEVetf2%2BBgDDE6GY9S14i7syBzYpV8H025zwQIfNralw1AL1rafbNvS71OC%2BBQdwtsFf%2B83oIcF6BruMmmSkKH5Yko8Y9SOmX85RRDl6B0xWRUtyPkjunA%2BBgzWosrhoxVcgknHOYdsbNBgF5nYmze9JkbM4ZHmcoK4EE1Bb7W0QyRXQ96zjlylPkKuvsgc3bWRZSV5gN9MwIWzFemrCekUDJMLMiH0vdjjy%2F7xx9BQAvF3VynNk5Wqth%2BCpj2kq2h9%2FY8M3wZonsOrEbxmwNzTMdlfCqBLCD7xiXvAxaVuZw0OMY6gyqzKT9Qtbpuu31G9fdOwJSXBlwFUG6jB7BDKZFJx5GR7Tl4uWDdRLmKeVAOJrOuo95ucAX6C%2Fbjqg9macsbDpRWqNKouMg9yGjoMLC93r8GOqUBpM23M1Y%2BlMbr1fvyXFGHbdE0397UXqGLt5kasrE3QFxgFRdNE4pIckl%2F6yiS05lndN2os6GZ1cPRsj7XOWva9v7v20r4w4YDBBBpqADJnRl%2Bw0ap6WiekpaRnvLJ6s1kfs%2FJDrpgv37J8rL4ZDktdlOMRJNRckHMOjU%2B7qVOyPY5Qee6MbrnJzuf8BoCRXh%2BdH5aAamaPis%2F%2FzDvPRWHkCGSIpgG&X-Amz-Signature=5554b1d6852935c30690baef27ee45d693c60bdeb887c57339e47a6e9ffa911b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWQVGGWQ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T110710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIHi0X1HZzi7NK%2FT4NuGRbVhjd%2FqZToBPUgMtQAZn%2BI8zAiEA%2F1Y5rDIFdG3nYfRk5wVj7I8AdO4CwzkyHdR1w935PWQqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFSZZSMMnyC9CBopaSrcA4KSe4kMmtKxHZohzywf8zDbFKIncgOP9h8%2BqPT%2BvO%2B1AH2XAGWaZX7j9Af2wpfB0%2FBWAn1aLRqxsVZnMUbvhKmWKS1LNoZU69wmvCk8Nw%2F5tOmZEFBwUKU6IHojkulaZoAwZpz%2FybWgH%2BZ6%2B9DiEgCvBGK08nSdx7t6Sp8svVLv5KrK5Jop0%2FahRNd5gomtDO7eivBCw6sHZb4g707K7%2FCPdtXsptpPLjNuAiXRYvWYFxSATSKobmDpugYWW4sTOmP%2Bi8HvmiCF2y4w6UWSFwBzAs8zC6EXQUBqSki6Xo6u3Z%2Bbuxf%2B8rsRcpgteETVWWOeXPGenuwuOGnvcV80gfql1%2BJiM5nP5bIovYA0IHRpkGsg6SRxL8AOU5NuRfoDui0W%2Fkwpprmsyor9vuDW5ACSYz2awMElmPLD3OytRP7NFA%2Bg4SLwpjJmmM3dHE77NH0rIzvwh%2Fh5XP9oxPv3b%2FcNFomRCnMCnU8U251TJmor0Ez%2F1Z5IhclCzeplOLge0VlDK0hwHbmHbyI8kjT%2BKhcsZOgK8oL5kkJBrEmXx63wLrVzxdFpZnBjcT2RlarQjnPk4U0IeTkiIwO3jToKTVLVdi1twMrpMsSyyLcySUuwh%2FbnnF%2FjwEueZDrAML293r8GOqUB%2F2KCRr0kcyeDa3OfGZUzMtjSEKxrPC8EVHATReQbiOvnWmTaFcsOCvEK6vRp%2BAwez1zQtDpMbwLiNhEMIVVUZUdgG4DY9b2ufXd8n65lQbe5%2FxtOd6giFVc7OXfbW7Y8Dz3GfAyGwblUGZ9ze00%2BZX9jlaxgdsKpNhAYaNFMDjGpOUSz8VqiMtsDIBI59LZLqKAkyDIQRhR7nH5Goy0dzMRpzcz5&X-Amz-Signature=3f459e979d88de4690b2334e4efd2066d2bdd33ad651c7d78c80f05368085381&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466723QIXGE%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T110706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDISddqUeHX3mAQgBtU0eCMF3dojWeCbrKTpu43bfAuHgIhAI%2F2PXjjJIFu%2Bv6ZmPcjEjdClbB%2Fdd53V4wKWy07CZstKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igykopeq8mD2b8Jx6Hsq3AMAG9lRlfiC%2BodfYJVGZkj8lfOu7eZRby7eL%2FAjY3ZOq66D0iheDu%2ByTTTN34l3xy%2Frl%2FDD0%2FIBV%2Bk%2BJoPyz%2FPq8Ho6HGA6Y7L76Q%2FvmYkg4w5u2rz%2BZlCl6xYnfy8Qs60zAFVyFTABirH7drDZEC2cTByQ6OUuuvzOEnYatK62Kwg6kmaB4K151%2BN5aNn9wdAJNSh8YFLxEm2PptI5Krkps1K94ZbqMAAaDO9LeiRg1aiC4KBRy4sHiagJ2JnHKEAy87mytNB4qsRy4ToMALl%2BTdjD8kYfKdokIF4pduZv7fFwItmLpNnbJlmN2o7vwy0LlgBS%2F0UxC6Zz%2BRq9nBIYfoPsM6SJG07ggPmEtu9lj69mOIzz2USnrh2%2BZsY04fEdkY%2BhAS8MBHkAQFK9lK3oafEpqiq%2Bq6B4Rt0xfZ0NBA8FBpXhMPTqNPYKEL5XPZQ%2BEbFo0fyKzH7FZIuTmuD6sX3v87TJPWAxCtZRneRWCG4NIyZxJFVg9IrAl5Z7%2B6b28vkrOZNSEtEPRhFePf9tSM9m5jhS%2FeicpljImkVSheenaMrbBw2Q%2FetD5n1pWLVpZIKJPCmtDTUXZ4YO8QQJ8A7TOEI8B07hTtJ462BDeLRocQFzAJ3mfCYAKDC%2Bvd6%2FBjqkAZy1U52P40nMa1cUseFrQoFQSFB77LOeMpsDLTZtR2kWjYelqHk0%2BfddPJ41CouB0uTWpZfIMIVLk%2FZiQEQ%2B2621uK04ii76F0Z2MDrYsPpu5vDGYr1mcu5s5B%2B%2BkCL91nIXrS8c%2BCf2%2BAynXIzADANvuKrlwm6nPlQa25rdbsGpaguuNOFfsuzZkJjvA%2FzFChKlLLc0RYA5XbyMh2VG%2BDM%2BUBEC&X-Amz-Signature=e0863bad669b2130e0fc85596aeb6283be85f0ca29ba8bbf42d0a117561d3b15&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
