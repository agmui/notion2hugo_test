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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5OXGTPU%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T220754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUKctgazSKOsOaLXqubDT%2FW%2FzEDemnOy9oC1JLLkZhFAiBsu2pozuXw1DfdVixXMdEdV6wxj9YzrMoM7il872Vbfyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMpCbi8XBE3wp3fgoWKtwDFBBD%2BC%2FJmV%2FQJqASKEiKbIJxmzBfe23jkgCGEoqAFnKuukGAm2LLO3p%2F37f9RnjDENlcsEzchirJRNrfVVoJQS%2Bs6pXTDTQPe3CTEnDOVI70D4g4TR80NyxhDpEDBiYVgvP3TGFXZWKd1fx9DLhmsXjAHPXCWnwYjZg6snZIao3Ny0Mx6B2jS5PR%2FDJSXn0%2FXtWjKXfEA2iLzm0jHEZIGScUvIoIduCPZH01n%2Fxa6nDwIJJCktrw8N%2B60D2ZxUQwDu%2BfeyKeuKGiSCBHvs%2BVqwToksif7h20fpxXjexQXEqWy%2FVSIOumcATN%2FWsrhX0bNKp5GM7muUtqszrNsIZx6m0HkIZCD3fQixVXmRtbGcjb0C%2BVWFR1CtDQRuIqJCyABArJd5hwjd6BdxSu8u9xlVh5VeksVA0IgbxTPDatCYFwT4uX51cBPowYIU9JOyqdju0VIszSnG3ZCAvKlZ08C%2FZZ0nRZuK2rqHDoksavp9D5qMkJP28B%2BjPM5LqRdgP5PZ3vKtnIbHlsyc%2F9EcDqjlL53qRebMY3tZZMSivwjCwc%2BxRiWTfla5h69rjWzr6pOmdbigmJvA8zItgHqgpHrWAAC0%2F3TX94vZYP8RcgzyclpEx3riz7EBv8OPUwoYewwAY6pgG2QMNdTiIbzt0pDX5Sp1EKl6G0iLUnQFnfCqgFfcrBcbIWY5qFnyasvD0fbvyjhh9%2Ba5g6wfKJhthjAgUmZf44%2Bc5Q%2B8F7YBUW2J29x6KqywRpdvqjEH0xvA9dhEBwXeaJoqJp4rPHAFXKkcsaBcExfUpaDr5rmZZM96Qj2HjYnFVvt9RUlzAbbGZyltHANWJ5S690RBcJgG6UUADfXOxP%2BIlyCMT8&X-Amz-Signature=4da7b475722b47fb3e91a873f07c915e1f1400581007813389117fb055bd3441&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5OXGTPU%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T220754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUKctgazSKOsOaLXqubDT%2FW%2FzEDemnOy9oC1JLLkZhFAiBsu2pozuXw1DfdVixXMdEdV6wxj9YzrMoM7il872Vbfyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMpCbi8XBE3wp3fgoWKtwDFBBD%2BC%2FJmV%2FQJqASKEiKbIJxmzBfe23jkgCGEoqAFnKuukGAm2LLO3p%2F37f9RnjDENlcsEzchirJRNrfVVoJQS%2Bs6pXTDTQPe3CTEnDOVI70D4g4TR80NyxhDpEDBiYVgvP3TGFXZWKd1fx9DLhmsXjAHPXCWnwYjZg6snZIao3Ny0Mx6B2jS5PR%2FDJSXn0%2FXtWjKXfEA2iLzm0jHEZIGScUvIoIduCPZH01n%2Fxa6nDwIJJCktrw8N%2B60D2ZxUQwDu%2BfeyKeuKGiSCBHvs%2BVqwToksif7h20fpxXjexQXEqWy%2FVSIOumcATN%2FWsrhX0bNKp5GM7muUtqszrNsIZx6m0HkIZCD3fQixVXmRtbGcjb0C%2BVWFR1CtDQRuIqJCyABArJd5hwjd6BdxSu8u9xlVh5VeksVA0IgbxTPDatCYFwT4uX51cBPowYIU9JOyqdju0VIszSnG3ZCAvKlZ08C%2FZZ0nRZuK2rqHDoksavp9D5qMkJP28B%2BjPM5LqRdgP5PZ3vKtnIbHlsyc%2F9EcDqjlL53qRebMY3tZZMSivwjCwc%2BxRiWTfla5h69rjWzr6pOmdbigmJvA8zItgHqgpHrWAAC0%2F3TX94vZYP8RcgzyclpEx3riz7EBv8OPUwoYewwAY6pgG2QMNdTiIbzt0pDX5Sp1EKl6G0iLUnQFnfCqgFfcrBcbIWY5qFnyasvD0fbvyjhh9%2Ba5g6wfKJhthjAgUmZf44%2Bc5Q%2B8F7YBUW2J29x6KqywRpdvqjEH0xvA9dhEBwXeaJoqJp4rPHAFXKkcsaBcExfUpaDr5rmZZM96Qj2HjYnFVvt9RUlzAbbGZyltHANWJ5S690RBcJgG6UUADfXOxP%2BIlyCMT8&X-Amz-Signature=2b3d85ed206b563d29aff2d081a660f81fd7dba9f43dd6eab2d2e51abde75f2e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RYKZOMC%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T220756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPmg%2BgBI5xmN7TLHi5JE1v8mnhWmNqPkkW2MD9IiKkvAIhALlWCwbo6oxl875VCKpyEUzK5zdE7Z0pEjRwmmEmXEqrKv8DCDcQABoMNjM3NDIzMTgzODA1Igyz8Kd0zzYHOwkpPEwq3AOgsQtPnFHdYPuoE57j%2BckUjxNpNO1hcSYZ%2FDiO2NOOBB9IpKVD8I166dt2KuIv5vnVlICJnR%2Bj5geGkwIiMcvPVD5TivClh0vzsXaLgnppw9svp8mtsU67fR3LowcxKZn3qfxZKFefg0JXb%2BIL1Tm9hZtlLF2ubQgzERv5k%2BkpqgfYMQ9Y5KjFVzRax2hmRA2susDINiVQ7FHtYuau4Oc6%2BWQ7lW6Rma%2BalQ5U7tIZPSQsldjs7t%2F3h38cErSGB2oyJE4LNlEG6PTlDCpX7trlTplHDSK2ARcKMOYjhWHMGFfNiAPzY1N9UccR7r6xA%2FDmkbQRizdFRL3Ntmnfy7ymEZLCGQsVMd99cQzr7b7YEnuRNpaWJO0WvAiVSDklfLP%2Fh53bbfXhFmDYkQiWmtjusionrc1iAac2e5sNwDoYFzusz487oX7RvW2%2BWee1AmjUnW0jUx4vTsAti9aoTskkWkdUyNPRtYpqsh%2FlKmEjJSp6Jh4y19EDmOHhLAmpYnS6YX3LJY3e08MgJ4znd8rxYYkZntpl0F92ngiwVCFo8MRYLgyK5hsmjJtaQun3x1BoiCjUPxtLo0YUN%2FfuwCV%2FfV3Rszl5MtXXhS8nbGkRVxPtmMSl74Kaas3%2BpDDNh7DABjqkAe0bble9tuWjAl50t6G%2BeHz8RFuQBBTTPHaTdZ4GYtyv5SMPlpaBoxYQhJE6wlHVDFTNAFK0V3c1bYfD25o4WgbLdRJ3QbpPSpDaIQG0d8tVq66mQRcUWiiYcJA0v0XyFlSmwtuj7%2B0Lxko4WQ6uwHYQmyGmEHqBPi4iAJLqmFRPm4lkKvUpBVrJtXGrzkkrVe08Qo7Z6s7UW67DBtKiu6bgOFZk&X-Amz-Signature=3f3971f8570faceef440fa23895b5beedc9b3efb8c916bd084ce1330ebd03e64&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC3G43KN%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T220757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2FatUETQCH6jciJv2Qk6aSBT%2FycdgdlsXrxTSiQgyd7AiEAjh7Aqt7kE1OWEOWVJ%2F5vVbjjK2fRjoUtYzY6b%2FffT4Aq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDHkP%2F4ahTOTMpLrSdircA0GDX4n00BgRHiKIl2ZSb8Ow%2BMDprgs2uSMqokMr5BeDbJtRsggRMrV8YSJsJEKpJtJz66TT0fFNsC0etD4dqOZwm98DxwYCXzvUrihB%2Bd6sKXFsIMbP5IO30liAmEljl4IIeCxSEpmXWFS%2Bkh2oCX3BKZOvb4zXbuH5X%2FYTA5QQiJEPqlEoQm7%2FnlX5wyXt3jXr0n6MzM1h%2FZ6bGunFUWtxayzbtykK6jiGANA9dJBVnnknIpOnp83DtlpS3gqqAvqlr%2FnVUiDoIjGGvtswfY1%2BzypkpK11ySkBWyJzxo%2B5G0ju1x2Mc4fjXqyXxPSOZQ8k0NjH4JVUCn8ffctwtkaW7M%2BTF%2BOmGCaln%2FI4s4p2JA5C4pLMW3chTexs3d55ywCrsfl125c6ADyKw1UgwfvvwCYOSDtP%2Be1SyiY%2BNwurVAems5YD%2BpkPCJRGAXaxnOF0h%2B7C7JEg8I4DoT8AtLzOB6gn4xlCHCBRszwKU7rJmh%2FQezb7gyLiRv0Vb36xefjDUIbXQCgNAVs7g%2BucB7H5XQn7YyIJVzPWHwjEFmqpGWouZDibTpGOcDZRXARts6h86r5MsNkOGoIDEdW%2BUweb7H%2BIfMM0WTS7KZy9dlXoHkWfIQ3Yt5L6iLqQMKKHsMAGOqUBojNZLQ4MRdrg2V3rvrH0f6FVD0tCtXW5nq%2FhIBKGTct8VHsSgnGtAifBzaQv1nRbsz8wqvPtVS%2FzAHeyrD5srP8WIzmn%2FJjffDtzEMFF%2BUPWXuYoN41Np6juoJmpESAwJ2YMP5bXpOvfySLa4GsRb7W3XBS1deXIPp1uVrMqWxKMOdSImuwFbBLZ2%2Fccq60eIbwLd2D1l9BU%2F1DwVDb%2By0ybaPWM&X-Amz-Signature=4f0e3dcd9c89e5307b489f54ed268e0865a4d48a77524cf6aa584cf5be7906fc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5OXGTPU%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T220754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUKctgazSKOsOaLXqubDT%2FW%2FzEDemnOy9oC1JLLkZhFAiBsu2pozuXw1DfdVixXMdEdV6wxj9YzrMoM7il872Vbfyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMpCbi8XBE3wp3fgoWKtwDFBBD%2BC%2FJmV%2FQJqASKEiKbIJxmzBfe23jkgCGEoqAFnKuukGAm2LLO3p%2F37f9RnjDENlcsEzchirJRNrfVVoJQS%2Bs6pXTDTQPe3CTEnDOVI70D4g4TR80NyxhDpEDBiYVgvP3TGFXZWKd1fx9DLhmsXjAHPXCWnwYjZg6snZIao3Ny0Mx6B2jS5PR%2FDJSXn0%2FXtWjKXfEA2iLzm0jHEZIGScUvIoIduCPZH01n%2Fxa6nDwIJJCktrw8N%2B60D2ZxUQwDu%2BfeyKeuKGiSCBHvs%2BVqwToksif7h20fpxXjexQXEqWy%2FVSIOumcATN%2FWsrhX0bNKp5GM7muUtqszrNsIZx6m0HkIZCD3fQixVXmRtbGcjb0C%2BVWFR1CtDQRuIqJCyABArJd5hwjd6BdxSu8u9xlVh5VeksVA0IgbxTPDatCYFwT4uX51cBPowYIU9JOyqdju0VIszSnG3ZCAvKlZ08C%2FZZ0nRZuK2rqHDoksavp9D5qMkJP28B%2BjPM5LqRdgP5PZ3vKtnIbHlsyc%2F9EcDqjlL53qRebMY3tZZMSivwjCwc%2BxRiWTfla5h69rjWzr6pOmdbigmJvA8zItgHqgpHrWAAC0%2F3TX94vZYP8RcgzyclpEx3riz7EBv8OPUwoYewwAY6pgG2QMNdTiIbzt0pDX5Sp1EKl6G0iLUnQFnfCqgFfcrBcbIWY5qFnyasvD0fbvyjhh9%2Ba5g6wfKJhthjAgUmZf44%2Bc5Q%2B8F7YBUW2J29x6KqywRpdvqjEH0xvA9dhEBwXeaJoqJp4rPHAFXKkcsaBcExfUpaDr5rmZZM96Qj2HjYnFVvt9RUlzAbbGZyltHANWJ5S690RBcJgG6UUADfXOxP%2BIlyCMT8&X-Amz-Signature=de4a45d64a8f2f0dbf984d761be8743127d890eaa22f003e869582cd29904750&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
