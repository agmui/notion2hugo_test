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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VPQK6TD%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T160954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA04zlxr%2Bvo0MXPIFv%2Be13sDGSF5rGk2mBEiEMuFYvviAiBZivnizsJ1XrdZNbHPtfMgxFOObE0%2BQxjrkYkV17MBzCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMewOYGDwwoh4qZrNNKtwD9c%2FDWcVZlTe1Q041y3%2FRhOFqV78HEfYc%2FE3YGVlYmN0ZdhnNjzhMc2UyOutxLWuobB4qDWdUHBb7A8UftOs2MCmyXi6QiXG%2Bzpbvgfawi9YpQEhDe05aTwVsSg77%2FW9dMqDPNKwv2szYeOUU4OYzYqtpTdlioW8lBg%2Fm3FphqTjHUUApide82m7UCn5Qn%2BH6x4CBeZRdX3xSreIjOIjiN5n1L2HCDMHZ6%2BqiaL5OeyBzSBox905afhuxKJ0Gfj5uDzIig55H%2FrZNdGTk4En3IGZ2xft0B0nD7lfdyhg9MuleM77gL9ILNMaK%2FcI4DR%2BO2w5COjy39kyeaRWq23wdI6Gg8m7AHX4nZB5h%2F%2FNmFgXVoA%2FMykw%2B21nS%2Fw%2F5nJ7lL0p77V9ybFlIx2d6pOL95849qCzrIGOkjjHNx4XPWSfHoDYkAvub3Ukn3RYYRWCGWHwC8SKtFgkg64GsvaI1XDGtwf36yRqweMkSUanXqSFt%2FMY9kh%2BkeU%2B2C8qAToIO0MWAono5ksI%2BmNbV1QvM9Ve1WqpYMt4quzus3oWLiNeAAcjDx5Rx5yhJmcK24O%2FGqLHeAgs3uP1QaUD4Z5cxCmtotaWgJA1O1v5xgMx0kO%2FkcQDrMm1fnKEoAPMwiMuEwAY6pgG1tnrx71GOr7cUG4Qryqdrlb45DcTk%2FVITfqNiSCAPdU4mA0LfDn1coNEoPILIba83tXcVGAlTQA5PFxYsV5B7UswUv43%2BwzpNy9AmMEdf%2BRZh1wcxlXdm8ncXTvjYb0YRcglI9swpRIaefXmRi76dSBOhKplum2z4TtJCFfXKeMizQ%2BzJQdzxMu7bedL9jfZWUsOFj2rxzscQ%2BHv%2BjvruK8huwOGn&X-Amz-Signature=5939260e82a3dcc4a9437d335abc65efebaf487315f823b60bad2024abc9d329&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VPQK6TD%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T160954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA04zlxr%2Bvo0MXPIFv%2Be13sDGSF5rGk2mBEiEMuFYvviAiBZivnizsJ1XrdZNbHPtfMgxFOObE0%2BQxjrkYkV17MBzCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMewOYGDwwoh4qZrNNKtwD9c%2FDWcVZlTe1Q041y3%2FRhOFqV78HEfYc%2FE3YGVlYmN0ZdhnNjzhMc2UyOutxLWuobB4qDWdUHBb7A8UftOs2MCmyXi6QiXG%2Bzpbvgfawi9YpQEhDe05aTwVsSg77%2FW9dMqDPNKwv2szYeOUU4OYzYqtpTdlioW8lBg%2Fm3FphqTjHUUApide82m7UCn5Qn%2BH6x4CBeZRdX3xSreIjOIjiN5n1L2HCDMHZ6%2BqiaL5OeyBzSBox905afhuxKJ0Gfj5uDzIig55H%2FrZNdGTk4En3IGZ2xft0B0nD7lfdyhg9MuleM77gL9ILNMaK%2FcI4DR%2BO2w5COjy39kyeaRWq23wdI6Gg8m7AHX4nZB5h%2F%2FNmFgXVoA%2FMykw%2B21nS%2Fw%2F5nJ7lL0p77V9ybFlIx2d6pOL95849qCzrIGOkjjHNx4XPWSfHoDYkAvub3Ukn3RYYRWCGWHwC8SKtFgkg64GsvaI1XDGtwf36yRqweMkSUanXqSFt%2FMY9kh%2BkeU%2B2C8qAToIO0MWAono5ksI%2BmNbV1QvM9Ve1WqpYMt4quzus3oWLiNeAAcjDx5Rx5yhJmcK24O%2FGqLHeAgs3uP1QaUD4Z5cxCmtotaWgJA1O1v5xgMx0kO%2FkcQDrMm1fnKEoAPMwiMuEwAY6pgG1tnrx71GOr7cUG4Qryqdrlb45DcTk%2FVITfqNiSCAPdU4mA0LfDn1coNEoPILIba83tXcVGAlTQA5PFxYsV5B7UswUv43%2BwzpNy9AmMEdf%2BRZh1wcxlXdm8ncXTvjYb0YRcglI9swpRIaefXmRi76dSBOhKplum2z4TtJCFfXKeMizQ%2BzJQdzxMu7bedL9jfZWUsOFj2rxzscQ%2BHv%2BjvruK8huwOGn&X-Amz-Signature=b32f1cf3fb576e44f059017d08a7e46aa2d4ca482ef20dec14910eeab5085dcf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MW6A3X3%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzRMlWjv7gJ9pCesMihASAUk%2Bn5c61%2BfGe5UnbHROmNAiAy2pQnzYyhExpHx8befPBDJix3g6JJJWSFtAxJRAGHFyr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMBjsTUb8Cm1Q0I8kVKtwDiEd55IT0x53qC8gfHy75Owj9fyGWohHpaL1b3E6vk%2FtGDEeSFmg6VLOLLNCXHJP9sP49JXRIo8fju1FCtCYx%2Fg5RuhOXjSmjN%2Bx7wOJWU6FMIvghsYV52IFe9wqfjcvlLShcRRhF2Zpk9cPAy%2BQixTbYCYu9IoVaoSKcCkX%2BCuVx4bLqHRURw3OhGeENB3suqmF4VXwotswWrO8VJAQRBmY%2FZVZU05M2mhUacynVlwwDOiB1JBkMzk6rCmYFrdTYxPMNGSr0IncHCPJLSbtAsAUvaz7eRh%2BLPylQH3%2FpJlYDZLPXSHWB6WPUije181ewHf4CODbrcfNBnJamTrbQ5DWSgvWgqR%2BDGTMN0qcTzLhbDTrJDbGhnJiOAcljp6g40wi6TlIdKOPXy7NU9RqGDHB%2Fux4jFUO8zEpodYJUu4cIBEjTlEjPTxbcf7224BUXsaslfeaQ2p2YTWC45mwaAwhGZX4VlJDGcnEFgXaSJgT%2FfGQPvzoHgn3ycZPtyxEoWziCoOPwhRvuUzcz%2Fkx4Rob29HjchZNjd4QchSFfVHtYgpatfZrhBoEst%2B%2BAsEaQnZ%2BCUpm7NC%2B0uBrbJ4Swc%2FnubpGgFpx%2BINCGO47z56IWyHr%2F%2BRw8pAHNcFsw2suEwAY6pgGJXLu%2FeABl5jzXQKhot6Esxe0JPzBo44c2cyvgqafJp4y4VP7v%2FXIp1ETOLSfAahRIZt9dVO%2BjEz%2BcbOxhA9NmruIGF6lY58F46rbmaypVMpVdzp2cL6zUirj0zVl9RLnfQ%2FQXcoXr0a%2B62X8YJoCyESAKeFbklxe%2BY%2FLxAHvVrhfUHHRj48%2BCRvAjhWZ%2FndxX1di3vTbxqOni8CE3bDDjPHxmvSyb&X-Amz-Signature=a9a8f3391e988737f7146b31332976e93a98bdd39366b313ed7a41863fb05bce&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIGND5FS%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T161000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHenEnefMonYWbiUoMY2Vnmqb6EgJ%2B2B41jVknzDQALKAiEAl2LgiPpXY1c6o0eqS1EUaRNSMSs%2B1PU%2FSb73x0cQxrcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDA7Wlaf6aOrTdVpvfCrcA0YgiNFd%2F6hKtxfoFFe5Fc4iQywUFVppWoWyjW7NHsEz2y%2FMvv7RyG4eLZjkIjo4UYrVY4DJARTEhxVh1u08gfs%2B%2Fz3xKDcrAQKidOq9g9BV1G08cjI0zUOEAJ0Q6OBtugzOm5QZwj35gkx7f50KUSo2w4PpUTNdbNw3bXqveEhqxa8DiSwpm7%2B%2BBLsujjdeRJJKffyFFCJZ5Ya5D4AmnWRe5m6Y0a%2B9LqQtRcv%2FPplzBePqLq%2BKOuC%2BC4q2s0RDVcE7kvTcx2TIXtOYuCSmKJgGE4gXOOAMiIA9Vx6cAvEMGRk0tmrNMPUUZ9lf4X9p6fJ6Gv2ZYYCg%2F3bch4QWNdT6R9oSZvEH3F72t28G8diqka4RLraDFzFeB%2B3wB%2B%2FvdhIav1upzQzgd%2FNTo%2FQ0vBpGok12%2F0gIcJ67EMtZdSJfhItoJQaWI2eYm%2Fmbx952p1OMdEkyJqp6Hfg1zGieYfjMwAXWPhQaXyV1ocaltDJ8qZCB%2BNLkfFEfC8HvHtBAT%2FobUWVpX8%2FsQbdG1So3dkxgKsdkMq4ZYn0HoL1qRUY0rQXBVVRJvMKgqBLhoxEmdFi0dKURtPUWLqN25KLeg5AQd%2BfsFReFUNgHP2xVGEqNe851CtGY8lgBUofAMP7LhMAGOqUBxkmeg8pWtmxkgAM%2F3fyNj2HwdU%2BReqA%2F9e%2Boh7ynZLj0lt%2FF66V%2ByRIKRDDu0qjiRHdO%2Fs4UjZUdGMK8mAURkueLE5U1DfC0LHaxnIILOEDm1IOEb%2BibvekU1w1hiuABs5IHRawnGYGObjshUEpEL5l6MvsYWhy9oUYhpFbZoSy1kukQuIuPMZ%2FKoIUfeu0oo2GfGtkQ75IdUSuKohCjsNkWyH%2Fh&X-Amz-Signature=9c802e152bc3dae26833ada08a3a71f94d51352e819ac7a0747a524e660d4cd7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VPQK6TD%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T160954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA04zlxr%2Bvo0MXPIFv%2Be13sDGSF5rGk2mBEiEMuFYvviAiBZivnizsJ1XrdZNbHPtfMgxFOObE0%2BQxjrkYkV17MBzCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMewOYGDwwoh4qZrNNKtwD9c%2FDWcVZlTe1Q041y3%2FRhOFqV78HEfYc%2FE3YGVlYmN0ZdhnNjzhMc2UyOutxLWuobB4qDWdUHBb7A8UftOs2MCmyXi6QiXG%2Bzpbvgfawi9YpQEhDe05aTwVsSg77%2FW9dMqDPNKwv2szYeOUU4OYzYqtpTdlioW8lBg%2Fm3FphqTjHUUApide82m7UCn5Qn%2BH6x4CBeZRdX3xSreIjOIjiN5n1L2HCDMHZ6%2BqiaL5OeyBzSBox905afhuxKJ0Gfj5uDzIig55H%2FrZNdGTk4En3IGZ2xft0B0nD7lfdyhg9MuleM77gL9ILNMaK%2FcI4DR%2BO2w5COjy39kyeaRWq23wdI6Gg8m7AHX4nZB5h%2F%2FNmFgXVoA%2FMykw%2B21nS%2Fw%2F5nJ7lL0p77V9ybFlIx2d6pOL95849qCzrIGOkjjHNx4XPWSfHoDYkAvub3Ukn3RYYRWCGWHwC8SKtFgkg64GsvaI1XDGtwf36yRqweMkSUanXqSFt%2FMY9kh%2BkeU%2B2C8qAToIO0MWAono5ksI%2BmNbV1QvM9Ve1WqpYMt4quzus3oWLiNeAAcjDx5Rx5yhJmcK24O%2FGqLHeAgs3uP1QaUD4Z5cxCmtotaWgJA1O1v5xgMx0kO%2FkcQDrMm1fnKEoAPMwiMuEwAY6pgG1tnrx71GOr7cUG4Qryqdrlb45DcTk%2FVITfqNiSCAPdU4mA0LfDn1coNEoPILIba83tXcVGAlTQA5PFxYsV5B7UswUv43%2BwzpNy9AmMEdf%2BRZh1wcxlXdm8ncXTvjYb0YRcglI9swpRIaefXmRi76dSBOhKplum2z4TtJCFfXKeMizQ%2BzJQdzxMu7bedL9jfZWUsOFj2rxzscQ%2BHv%2BjvruK8huwOGn&X-Amz-Signature=f5b585a846555e5fca1a6d11e4eb1e581aac78c9b19e5de36de772b0b1b911d6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
