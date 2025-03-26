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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE2TR5JW%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T161027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6Z9hOg3NNqde76ug0r7SHSrxsIx%2Brk7rfX7MQzAsfcAiA1X7o2%2FwyFzAzSHzWuvnUvsnP8vgJsE6W27k%2BRBm6UqCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM7LWct6MaOoo0WMG6KtwDYEeqEW0FGES41aG%2F9vhMoVObJnBMNdIbqni9hdyzYWavPRnKLZMVdyJb%2B6y6NJ6lIDRlgcMG5Xv8X6H9JLsXzEGuBlNJ%2B%2Bl%2FIdcyqp8a4HZKoh3yR8nPMpheOsCgPLzgDFlHfjxWboSBjiUUjx%2F1BfqqAdxP3GE%2Bi%2Fx9rSHBFDzgV4nWKWBmn%2BIPP7P3NHNNuefOiQkpJLWGf514xN%2B2fTk1pQQW6CoJprmzikNazRcYf1t2nK1W0ApUGl8hOAWpjMPyyDsrsNCqBVRH0lYahIvvXIpO2pjT7lENwu1YS8aV0MQXJhTdcQ1yFkE0sKDnV%2BlOEfq0VQvOD4gMrunHvCCNNsVaAkyWfh4hj%2BhyAUaHYOmwuHKx6CfoJFGDeTpAAMvZuVAGwPGDzv72jYSL4MsLt1ldqkMDTVt6fpIZ8JdFEoB1c%2BIppmtuknpMaPXDNzk8dIOB%2B99k1ETD2jSE%2BMP17%2FyzC0TFNkBi%2B75ZZ8DvWU%2FxqemTpPHewP7Aj82j53EcxwFCsSTET6kn5bxbGumYKp5QisX8TomE4Il9YdrFyy5a1IRiRnYZGCcQsTAwkEvy6lRlUWTaRRtRlbubYUuPubgugUtebFOOcijZ261cfjL%2BjqGyV10vq0YwvbmQvwY6pgFCcGETYnkSRrChmXEL283vAmK34ZNp8v2hQChwZrhJ1Krf%2BxjVYoIr7Brbdz5vv3hN5RIahiqq6NmSnlODRs79wqxJ%2FGO57JCV%2B17BcieKB67MaXSDqeainQQa7xVaZVGlv3%2BIr8UoNBgMWEfc6fxf7iU9wMNa%2BlQ2eGAwSW%2BLRJU0VDgc1ehlOVl3DjA2LbL2diHZ9wu%2Bgh3IhDbm5%2FCzoOxbj2FI&X-Amz-Signature=eba9fe150cb91a73d7c4e0e8960ef3b847e9f81932772b14bdf781ea9c49ece0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE2TR5JW%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T161027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6Z9hOg3NNqde76ug0r7SHSrxsIx%2Brk7rfX7MQzAsfcAiA1X7o2%2FwyFzAzSHzWuvnUvsnP8vgJsE6W27k%2BRBm6UqCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM7LWct6MaOoo0WMG6KtwDYEeqEW0FGES41aG%2F9vhMoVObJnBMNdIbqni9hdyzYWavPRnKLZMVdyJb%2B6y6NJ6lIDRlgcMG5Xv8X6H9JLsXzEGuBlNJ%2B%2Bl%2FIdcyqp8a4HZKoh3yR8nPMpheOsCgPLzgDFlHfjxWboSBjiUUjx%2F1BfqqAdxP3GE%2Bi%2Fx9rSHBFDzgV4nWKWBmn%2BIPP7P3NHNNuefOiQkpJLWGf514xN%2B2fTk1pQQW6CoJprmzikNazRcYf1t2nK1W0ApUGl8hOAWpjMPyyDsrsNCqBVRH0lYahIvvXIpO2pjT7lENwu1YS8aV0MQXJhTdcQ1yFkE0sKDnV%2BlOEfq0VQvOD4gMrunHvCCNNsVaAkyWfh4hj%2BhyAUaHYOmwuHKx6CfoJFGDeTpAAMvZuVAGwPGDzv72jYSL4MsLt1ldqkMDTVt6fpIZ8JdFEoB1c%2BIppmtuknpMaPXDNzk8dIOB%2B99k1ETD2jSE%2BMP17%2FyzC0TFNkBi%2B75ZZ8DvWU%2FxqemTpPHewP7Aj82j53EcxwFCsSTET6kn5bxbGumYKp5QisX8TomE4Il9YdrFyy5a1IRiRnYZGCcQsTAwkEvy6lRlUWTaRRtRlbubYUuPubgugUtebFOOcijZ261cfjL%2BjqGyV10vq0YwvbmQvwY6pgFCcGETYnkSRrChmXEL283vAmK34ZNp8v2hQChwZrhJ1Krf%2BxjVYoIr7Brbdz5vv3hN5RIahiqq6NmSnlODRs79wqxJ%2FGO57JCV%2B17BcieKB67MaXSDqeainQQa7xVaZVGlv3%2BIr8UoNBgMWEfc6fxf7iU9wMNa%2BlQ2eGAwSW%2BLRJU0VDgc1ehlOVl3DjA2LbL2diHZ9wu%2Bgh3IhDbm5%2FCzoOxbj2FI&X-Amz-Signature=639a191b08fa40e37b76da79d190a4086224d501b4003d94b9990daa082e8d37&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIHBGOMO%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiibJ%2BvP%2BNXbCVpxQELYoD23TVCx72Gvo3o%2FUZp7wP7gIhAMJaMXCz7Sg%2F2a7bN6alF%2FQHPoDUYyAIhDW0C%2B44MhEMKv8DCDEQABoMNjM3NDIzMTgzODA1Igzjai2LWNyehGkomZEq3APMdAJEPacl10qTqdRbAtGK3ON4yjlo26KkeCCOpuxJXKEQU1iv2TXGG7VVNtX4tozjLlo7bcoSA6gzgjb4YqXsfVXl%2BcloVxBmNDCcc4bAhrUco1IXV0RdA7DsQZ1PkNRXQ8jDacUdp8nlmssi%2BF9x1tk9pLDbUxo4tGFz%2F%2FnHkDAzTdrUw6nwXrVEeujaPnYguCPEbKKEPQhhyF6vf5CwEMb2HQ3PQ0EXF9PYZTvN9AyU1etNghGaEv%2BL20bEIYU78NZ72OyvjxC1myVxlJ%2F9Qd2if81PWdJgTFCE%2FYP9mT7oDvDw1DWQ3pzm5HfwUqqD%2FChZqbntzRxcHnS%2BVU7rYSwdekX38ntyijpluM7WUlNokAA3j4Vfg%2BY%2FoGOQl3wAbFjmSbqw%2BNxpGYVwZ2ttxPgvGCaXxQ2vOHyfHjC%2FyhFOkRk2XIdTNrIhKoDCTI2lub8fSd7PZauPepSX%2FJ1mZi%2FSi2NV9%2FjCTFoZ9C4r5QuCQhbcro4pY7HYpJONuyuF0n8ymVb4Pzv6dZUGHU4pGVKRkp71E0D%2BN6SbraoHgfV%2F0YOCWn7QYQ0vNSoSEH%2FIZtRO0y%2FNJOEP709fO6Fx7PV7qVjy0iSkOTtqhQYyYAoMl%2BZeVww7lj3vrTDsuJC%2FBjqkAQgbdfeePQZ39NY%2F1DEAoKSVq4QFIcm0ELbpmPr6kh5X2roN8su5MbX0bebJIvyBG4fHIOopwpibRJLJCfhpU%2Bq2pnD8yaFO27BkDbSPNu%2Fquu9LQCdbj1oyRxvNpQwWaBODVYk6i5QIfHI0KW4pzJCrg4lvUTtdjGDyjF3aGhO94iEuj0yZKZ1ASwbS4pAoYn%2FZDO7P%2FDDrX091SxmqB%2BWDbr6h&X-Amz-Signature=b37ea8fad228831e8196125edd69998a497814dbaa5def6395a1ec966691ecf2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQW3Z2X4%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxhqIBvA%2BTkJUxwnn1zLtYzzTgz1JJ2M4VeNqf2GJfOAIgWkCouNCZj8u4EYt7bXG72QVS7B7Ak3qaRGLE7FeNmesq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDAdODxFPnodJN1%2FUKircAz9uKxWo2ABVLcBdXlfPPkciXvs6Nr6pQGgWgWbmQhE7J5Ai13mS%2FgjcOi8wU0Zt5mKNbdJF09ggsaSQLuC8RK2cJtOfSUYPuJWlZwiXJ0oiUUtLkPAygyE3VNBDZFsR8Ri1jN8MLiahlE2%2FqRZnzFQ7jp3OoTwDGPdrgW4VKG45lJ%2BxIfBmXg5i%2FM7TAiajr4vDAxebmqVRCaTfQUrcuxmsB24k4AXY71Esmnw3FX%2B3uRrxH0%2FpjIVn4OVr%2B%2Fvy5OvTTRlESzeDc91qhWIQn4Af9WKJX%2B3ReRHwv8AL6AKTy%2FKNUqHrQ%2BpB8w2LqjYV7CxCgZ1Si1F8rX5pq3ylUdqRwmeS3czawC3bfaji350XvfA4aZf7OjXI%2FuRl9oKmljJ17JMwrmIF8uMT6E8cEltuxdq2SnygEKo%2B2%2Bqy3jHagHEc9zmXIl4g5HpFKih0B99E%2FQAshO80v7oClMZLYirTsrJRo158MTBqPtB8mbCVYSvIs0ULCd2%2Bnq0KfWBNfT5EZ9pxjU%2F%2Fg4w%2Bo7lrwpCX4e6Ww0x1HUg4ONJcAGcGHX63lTJa9sMC7O5oc2QQAvrohbWYuVPXSYioLdT%2F5VhGG2fClVzhRTQSDI%2BmCHYdBahOd1bHS1ywABUtMLe5kL8GOqUBzlhcKyzVouxGFTbXzKUZjsQVvqJyVzq4N1M6iaYQACzjhlRhP1NaBSrNpU26JKO06WlfusZv43vZ7MkcB13w5TYvmLFWZYwomNx7DqWIGd4iGtGK9Jev84GcZIclaB6oqiBBYFqDrdehnmaDIon6rSFTltvy0BDaaE68ffuEkv1XlwjMrygKRIq4SG4C4RpExGq1qeMc6SDMQSNRFUN%2FIwobAcby&X-Amz-Signature=61e003a144cb24d4939778d8234be6ce73d21128666cca2ac064f65bc49f71a3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE2TR5JW%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T161027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6Z9hOg3NNqde76ug0r7SHSrxsIx%2Brk7rfX7MQzAsfcAiA1X7o2%2FwyFzAzSHzWuvnUvsnP8vgJsE6W27k%2BRBm6UqCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM7LWct6MaOoo0WMG6KtwDYEeqEW0FGES41aG%2F9vhMoVObJnBMNdIbqni9hdyzYWavPRnKLZMVdyJb%2B6y6NJ6lIDRlgcMG5Xv8X6H9JLsXzEGuBlNJ%2B%2Bl%2FIdcyqp8a4HZKoh3yR8nPMpheOsCgPLzgDFlHfjxWboSBjiUUjx%2F1BfqqAdxP3GE%2Bi%2Fx9rSHBFDzgV4nWKWBmn%2BIPP7P3NHNNuefOiQkpJLWGf514xN%2B2fTk1pQQW6CoJprmzikNazRcYf1t2nK1W0ApUGl8hOAWpjMPyyDsrsNCqBVRH0lYahIvvXIpO2pjT7lENwu1YS8aV0MQXJhTdcQ1yFkE0sKDnV%2BlOEfq0VQvOD4gMrunHvCCNNsVaAkyWfh4hj%2BhyAUaHYOmwuHKx6CfoJFGDeTpAAMvZuVAGwPGDzv72jYSL4MsLt1ldqkMDTVt6fpIZ8JdFEoB1c%2BIppmtuknpMaPXDNzk8dIOB%2B99k1ETD2jSE%2BMP17%2FyzC0TFNkBi%2B75ZZ8DvWU%2FxqemTpPHewP7Aj82j53EcxwFCsSTET6kn5bxbGumYKp5QisX8TomE4Il9YdrFyy5a1IRiRnYZGCcQsTAwkEvy6lRlUWTaRRtRlbubYUuPubgugUtebFOOcijZ261cfjL%2BjqGyV10vq0YwvbmQvwY6pgFCcGETYnkSRrChmXEL283vAmK34ZNp8v2hQChwZrhJ1Krf%2BxjVYoIr7Brbdz5vv3hN5RIahiqq6NmSnlODRs79wqxJ%2FGO57JCV%2B17BcieKB67MaXSDqeainQQa7xVaZVGlv3%2BIr8UoNBgMWEfc6fxf7iU9wMNa%2BlQ2eGAwSW%2BLRJU0VDgc1ehlOVl3DjA2LbL2diHZ9wu%2Bgh3IhDbm5%2FCzoOxbj2FI&X-Amz-Signature=f535255a939befb1fabccd0ad44f70d548982fec35b45c94aea289829359fa65&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
