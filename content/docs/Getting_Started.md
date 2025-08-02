---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-04-30T00:36:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-04-30T00:36:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYQC3Y2Y%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEruPCmRJZquPjyrygnCJtLLZ3LZolzfrfpCysaCfUlUAiBowooRTFjR5z2KJ5m8rxVlPXtw7uBEVBfPBQ45iDdpeyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMB5G79R5qU9pQz6sNKtwD83vfgAKutVDMJTJw2sWJBvHq9kQKt3r7FPhavALcV9GdzB3bdLOFLpx4l5kOODj9s%2BTquhrdvIY7veS%2FweLMmXI6Bo5NcSJshDh88nYD50If%2FGx6%2F9VaP5ZH5pQgGbx07cbZyorKSmiU%2BkEYT%2F%2FiSPNfyZjVOYpvesCh9ch94%2BlBXasEdxpAxwuPFxQm6u5Rc6S4dIJybgFaG7GiS4qs7HLkoIzURKkVxid75AohzyjoGFXczWEz21IfD5ZCoTSsfSoQP4vcphvtFbHjFLZXbRe8uS1lvyuDa%2Bu5zhOx3XUTUrEfvDSxTMH8grjIODC4QO3CFW10CtUBnDnx5b3Ro8mN16ke7B0a0w1HBfH%2BtaqGog13oBsAQ8xyERKtyxApcRtt0ej6dR4PsDgXzFXt6Yj8jRaK6cGMbLZ8oyKiEwvhtQarv%2FXtXiAW16mwL26BZSd3%2BNJmHwwMv4oyxzFbJhVk1Gk3mPsgBGPYJOpvVMS367kNMZu%2Be6aawsymkCxSio%2FeAGV0EcgIHYxx2%2BwPGvABRBVKaucHM9UC3aD6ASBlUP7WccuA6zBl7y8dHLE2TtuCrx7cI2VhZ3yj0j2OA42cJYKl49UrdfpnKQhSA3aaUhf%2BgfKdpvkJ83ow9u%2B2xAY6pgHIFIrzGGL3w5tXVXj3biRqz9NN26ATAZiyaCiCaijHQnqtorYu54k4yqO4mZu7AR6MKMF72bmtjNe%2B9MTNCkdSlGuPsLKcOv1q%2BAp51ZduTc5tDu1gPrNu3ph1%2B%2FjwM1lI%2Fpc5ir4Gs02E6UVjV9r1sL4j8x0NPQ8f1P%2FnyU5e3KZc5vOHEOizbaihSkJsAj7RtqY0meAJ0NfjAjEUzRv%2BiEaa9zhz&X-Amz-Signature=93188e31bd727c4cf0b66a995dde3e2a964f820d152aab05a892f409f7753529&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYQC3Y2Y%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEruPCmRJZquPjyrygnCJtLLZ3LZolzfrfpCysaCfUlUAiBowooRTFjR5z2KJ5m8rxVlPXtw7uBEVBfPBQ45iDdpeyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMB5G79R5qU9pQz6sNKtwD83vfgAKutVDMJTJw2sWJBvHq9kQKt3r7FPhavALcV9GdzB3bdLOFLpx4l5kOODj9s%2BTquhrdvIY7veS%2FweLMmXI6Bo5NcSJshDh88nYD50If%2FGx6%2F9VaP5ZH5pQgGbx07cbZyorKSmiU%2BkEYT%2F%2FiSPNfyZjVOYpvesCh9ch94%2BlBXasEdxpAxwuPFxQm6u5Rc6S4dIJybgFaG7GiS4qs7HLkoIzURKkVxid75AohzyjoGFXczWEz21IfD5ZCoTSsfSoQP4vcphvtFbHjFLZXbRe8uS1lvyuDa%2Bu5zhOx3XUTUrEfvDSxTMH8grjIODC4QO3CFW10CtUBnDnx5b3Ro8mN16ke7B0a0w1HBfH%2BtaqGog13oBsAQ8xyERKtyxApcRtt0ej6dR4PsDgXzFXt6Yj8jRaK6cGMbLZ8oyKiEwvhtQarv%2FXtXiAW16mwL26BZSd3%2BNJmHwwMv4oyxzFbJhVk1Gk3mPsgBGPYJOpvVMS367kNMZu%2Be6aawsymkCxSio%2FeAGV0EcgIHYxx2%2BwPGvABRBVKaucHM9UC3aD6ASBlUP7WccuA6zBl7y8dHLE2TtuCrx7cI2VhZ3yj0j2OA42cJYKl49UrdfpnKQhSA3aaUhf%2BgfKdpvkJ83ow9u%2B2xAY6pgHIFIrzGGL3w5tXVXj3biRqz9NN26ATAZiyaCiCaijHQnqtorYu54k4yqO4mZu7AR6MKMF72bmtjNe%2B9MTNCkdSlGuPsLKcOv1q%2BAp51ZduTc5tDu1gPrNu3ph1%2B%2FjwM1lI%2Fpc5ir4Gs02E6UVjV9r1sL4j8x0NPQ8f1P%2FnyU5e3KZc5vOHEOizbaihSkJsAj7RtqY0meAJ0NfjAjEUzRv%2BiEaa9zhz&X-Amz-Signature=ccf1372bf864ecd803f2a49558527b4fd1b73932d85cb7175dad8304a66a44db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYQC3Y2Y%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEruPCmRJZquPjyrygnCJtLLZ3LZolzfrfpCysaCfUlUAiBowooRTFjR5z2KJ5m8rxVlPXtw7uBEVBfPBQ45iDdpeyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMB5G79R5qU9pQz6sNKtwD83vfgAKutVDMJTJw2sWJBvHq9kQKt3r7FPhavALcV9GdzB3bdLOFLpx4l5kOODj9s%2BTquhrdvIY7veS%2FweLMmXI6Bo5NcSJshDh88nYD50If%2FGx6%2F9VaP5ZH5pQgGbx07cbZyorKSmiU%2BkEYT%2F%2FiSPNfyZjVOYpvesCh9ch94%2BlBXasEdxpAxwuPFxQm6u5Rc6S4dIJybgFaG7GiS4qs7HLkoIzURKkVxid75AohzyjoGFXczWEz21IfD5ZCoTSsfSoQP4vcphvtFbHjFLZXbRe8uS1lvyuDa%2Bu5zhOx3XUTUrEfvDSxTMH8grjIODC4QO3CFW10CtUBnDnx5b3Ro8mN16ke7B0a0w1HBfH%2BtaqGog13oBsAQ8xyERKtyxApcRtt0ej6dR4PsDgXzFXt6Yj8jRaK6cGMbLZ8oyKiEwvhtQarv%2FXtXiAW16mwL26BZSd3%2BNJmHwwMv4oyxzFbJhVk1Gk3mPsgBGPYJOpvVMS367kNMZu%2Be6aawsymkCxSio%2FeAGV0EcgIHYxx2%2BwPGvABRBVKaucHM9UC3aD6ASBlUP7WccuA6zBl7y8dHLE2TtuCrx7cI2VhZ3yj0j2OA42cJYKl49UrdfpnKQhSA3aaUhf%2BgfKdpvkJ83ow9u%2B2xAY6pgHIFIrzGGL3w5tXVXj3biRqz9NN26ATAZiyaCiCaijHQnqtorYu54k4yqO4mZu7AR6MKMF72bmtjNe%2B9MTNCkdSlGuPsLKcOv1q%2BAp51ZduTc5tDu1gPrNu3ph1%2B%2FjwM1lI%2Fpc5ir4Gs02E6UVjV9r1sL4j8x0NPQ8f1P%2FnyU5e3KZc5vOHEOizbaihSkJsAj7RtqY0meAJ0NfjAjEUzRv%2BiEaa9zhz&X-Amz-Signature=1fce585b2ad6804cabd99569f324f6ac8af5c6971f18cd4c381b6bc45673540a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS2BRRSW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXbvbe6GJjjIPoaVJN54EN%2FQO32v4fPRe8qtdlsiu0DQIhAL9gR1V8FMn5cwtHrRwAVqD3WaWYJcaY%2BItLFbla%2FQ4HKv8DCBAQABoMNjM3NDIzMTgzODA1IgxQS66H2V%2BXcS%2BT%2FmEq3AM5Y1G8LDRV8Sj8ji4EQ8JhOF9uoFg08dsrAUbxk2Ff29KRTkyMXWg1G15ZEiyIcYIcZqTM3YtdhoGga1%2BwBS8TptiQmQziG%2B2iHIcYbdoUPAO4P1lrXaSSjvBI%2F7l6yTtqVrlbNs5lawNgjYegr1wYUnP4ziVL2AezHURVhqXuXZpKk8j4CjNb1431GCvGu3qK7lgaHYdeYjArsgPlCiS4OoAXCfJovJSPM%2Bbqt1ao9kH9LmgGtkMk%2BnRz1CmKMD74epm5RKVayMCEaOnLxLbJlKxvxxu5JJu4AxYUXxRG8GSuTO43yyVzxUNKwI5ns%2FwwlXkqha019vOy8TKTj0mF8FBmi3goKado2I1kYyVLeBl6fqcxxiX9yJoix%2F5VNPb3cgGqBNRaeDIetwhKOhpv5z3RcRGKKFe7%2F8Go%2FINBl%2FxL%2Bc8N9N8ldK%2FGLbDp9mH154J2VrrlO2K9VJn%2BTByyJX1Ydire%2F8Jdv7H7tlPl43LDpLGWMYH5a1%2BXUPBSf8KuRiibvxUYyBJRl%2BOa9frJZyzjpppU4c9N%2FLGi0EAajO%2BtgoB57s3PMRVcyiOgBajm%2Btbz8qVLG1e%2Bbm9ZzhxFfzodHhlVy%2BEw33Ki%2BxKp4Fm9GKpJDjBB2UKnezDb77bEBjqkAZM5ZDd2LtVQtx1VO4v7ZtEyEUMEP1GyXcHD0fd5T9tA%2BMY748KV%2Fn%2B7vqO%2B4JX%2BjhFHSC1%2FN7FIXlfRKM2wKM6saooITvDWp71EcLsHIVfOBMiUt8PuTGBkAA92qEa9gHAi2pb72Ml%2FA%2FELo74uxytBK2xTNBTQfJeHKwRN%2BKKryUVZHG9wL7Oybg8dzsXxgc5aE9zwmyUSwqVyWvV30gOkPT84&X-Amz-Signature=571dde8ec378c0937b9cc17936a6c3697381b415d70656d3da821ed2871fc580&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQXB3U55%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjneaW7jZoIu%2B1zw6trW7s%2ByI%2B6U5i747uLyT1liMeXAiEA%2FvsjxdZdrPHr6Qsmci89jd3xx7ebnlCroGX6Qg8FqDsq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDOqqa6pa6StfutYIwSrcA2kQBqSYRF%2FpkWMX4J5D1hLt%2B56oAjqqv8CfKT3ZgzKVCw7Q1r8tjcvEUTjkv8jsRuDXEto%2FyihYoiaaHu%2F8XZ3IsWX7PaJ2wRL5H0YjpT4ssvCK%2BoCcwiI2%2BWsi5g%2FE0IYZOZQNWrLIdkduNiYfCZjvIGiRc5%2BjwpgEnTvrwGE7CwwnP804iOIVvCYt1vxzofxk1D321Uw%2FtQCOrgoFjyNAAKb5bNlGvdc4WsRe6C2Q02o2CwPkx5ns4BscLnOO0QtnP9vHYY4n%2FNnOPn73XbDy5jdKk58qR1rbkds0%2FUkO2xDHCJGYCCVppjRKpQxPd1qXP%2B5mzf3wvL6%2FA2OXLWKjZ9E9Naeyc4dd4sjpGEDrXhMXTVfbMOq5ReaeTbX5FjzYen%2Fiyie82FGEASI9d2vSDk4GNNAHJm0Rg5v1qMqri1OPMb0X6u40PTVfbIIf%2BNobLl3Lbz3mVOrP3jru0LtRNZegmrQjIMHdbE%2FRdjhEJ3ErTEtgTlzxvCUs7skL0c9mMZYFm28piQHXsbccDTK2A3IzoDk%2B2Osx3F4EBj4vNc1BoI1HFc8%2Byfiu2TKI4vrCN%2BCk4hggfHcKU7a9Kxm6Cbx57y10ZzMU2k2GlDbvv2hfZesBiSnDbH5HMN7vtsQGOqUB346BI8qT62mPOkEzt2zCjuxBLwDsJ4J2jmJ0htn4FrF2RuGsJJoL6p%2FglpSleCvYPOoRnpIBO9NQq0p2RwzUWhMWumlWk8yMm9NkS%2B0TYXiuQOSK%2F3En8gqXZ%2BcWtY%2Fb7oM5TvyxLWm2nlnKIoP%2BTrKGbCiIocDCjgJzHeo%2FvelOFexAnh8fLZh9Ijvws4jUshkETIZLPanYcEkbeyAwkVOfFuvm&X-Amz-Signature=cc8b7fc233de7260ebda9f084a044fa79399b689959da826506a6b44fade5a44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYQC3Y2Y%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEruPCmRJZquPjyrygnCJtLLZ3LZolzfrfpCysaCfUlUAiBowooRTFjR5z2KJ5m8rxVlPXtw7uBEVBfPBQ45iDdpeyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMB5G79R5qU9pQz6sNKtwD83vfgAKutVDMJTJw2sWJBvHq9kQKt3r7FPhavALcV9GdzB3bdLOFLpx4l5kOODj9s%2BTquhrdvIY7veS%2FweLMmXI6Bo5NcSJshDh88nYD50If%2FGx6%2F9VaP5ZH5pQgGbx07cbZyorKSmiU%2BkEYT%2F%2FiSPNfyZjVOYpvesCh9ch94%2BlBXasEdxpAxwuPFxQm6u5Rc6S4dIJybgFaG7GiS4qs7HLkoIzURKkVxid75AohzyjoGFXczWEz21IfD5ZCoTSsfSoQP4vcphvtFbHjFLZXbRe8uS1lvyuDa%2Bu5zhOx3XUTUrEfvDSxTMH8grjIODC4QO3CFW10CtUBnDnx5b3Ro8mN16ke7B0a0w1HBfH%2BtaqGog13oBsAQ8xyERKtyxApcRtt0ej6dR4PsDgXzFXt6Yj8jRaK6cGMbLZ8oyKiEwvhtQarv%2FXtXiAW16mwL26BZSd3%2BNJmHwwMv4oyxzFbJhVk1Gk3mPsgBGPYJOpvVMS367kNMZu%2Be6aawsymkCxSio%2FeAGV0EcgIHYxx2%2BwPGvABRBVKaucHM9UC3aD6ASBlUP7WccuA6zBl7y8dHLE2TtuCrx7cI2VhZ3yj0j2OA42cJYKl49UrdfpnKQhSA3aaUhf%2BgfKdpvkJ83ow9u%2B2xAY6pgHIFIrzGGL3w5tXVXj3biRqz9NN26ATAZiyaCiCaijHQnqtorYu54k4yqO4mZu7AR6MKMF72bmtjNe%2B9MTNCkdSlGuPsLKcOv1q%2BAp51ZduTc5tDu1gPrNu3ph1%2B%2FjwM1lI%2Fpc5ir4Gs02E6UVjV9r1sL4j8x0NPQ8f1P%2FnyU5e3KZc5vOHEOizbaihSkJsAj7RtqY0meAJ0NfjAjEUzRv%2BiEaa9zhz&X-Amz-Signature=22547a74e64ad71e132c87a78d9156c57084c9f69453250d9b4da2bf5469f7ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
