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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR7QT3Z3%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T150908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFAMFbAckjYkCYnKeaNfwmz2wNiD7ZTwN0S9pjUdJGxZAiEAw7Bz2MadIpwM4a3a1yAAC%2B5KJ2IMk0CzW4Ra2Zy5RZUq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGOPsk3OPi8eQTfXUircA3l0glWSjY9lU5nwqxRjVqnStOatjgIWFc4LkTbRPAOJzH%2FjD6M5SM%2Ft5THz2Hm%2Fyk7sCGB%2FYQloGVAPyOabcOhfhy0HLULmBaI5wK2wok9SAKd6RBWjGAZrBGREzGPB%2B4QHQePS01vnIIVQWTAJIK1NpSVaFWCIxf%2B8Vb%2FDUQGBiR0RqLoyKgkenf1g4xAh3H294LHqJiz%2FKq70qvJ3mjIP13JSLGe47vwtm5gRruvdAM1Jl%2Bz0czkW09TGryjkfghmZWUmjOgWUjJHcFFht2DVzpNylx5BXIEmnw4zQ5zUoer75l0BKO0sr3DvKzhBCBS2%2F4Fkj64ZmWFvJ1TztEEeGFi%2F74ti4a7Jcfigkh154GePPqQAjMjoPEuHfnCSvpz53QrYEPCExhwVezUCwKGNkVolXuGjpkjWMhuEiK7wfEbF%2B%2BcUw%2FmxlWuaOHTyXEnalLNkCEnqpRx1JBEpagPk144lHC8VeesgHuIbkZ5MSORrUzaolS7TwWi%2Bqb36jqei2YtXZaeJ9b%2BLW9PqCH%2Fehf3euijq9lwMPDok6x%2FU5ljhwn00E12wfDfwRC2zNZjz84trZkj3yuWEwgxnsD11Maq3XZf2x3rlA1SGjO11a9ZvY%2B23271%2FgxB7MJDM%2BsIGOqUBM4%2FUHBZpOBgr92QTxrF8PfVYSlM7atkhWjersNFEDL2QpesaO1JAkMR9jJNgY0RCYWEFgV6hHqDp69R%2B34z4miDOQQkmbjzXgliiWBuRxO1sIoLppAZAzLSpgqmShH15MlU23WMCnAIplhFdSI%2BlhLWFfaEAqCLD5b9CDqhHwORyNjj5%2B4RmFnY5nTU0PJ7JrxjbbkzeUVibZFDy%2BtkrU1OsA%2BCL&X-Amz-Signature=370e6be7128909fe71dc0e3b800e490089b49700c8d63275adfbdc8025fb5816&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR7QT3Z3%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T150908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFAMFbAckjYkCYnKeaNfwmz2wNiD7ZTwN0S9pjUdJGxZAiEAw7Bz2MadIpwM4a3a1yAAC%2B5KJ2IMk0CzW4Ra2Zy5RZUq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGOPsk3OPi8eQTfXUircA3l0glWSjY9lU5nwqxRjVqnStOatjgIWFc4LkTbRPAOJzH%2FjD6M5SM%2Ft5THz2Hm%2Fyk7sCGB%2FYQloGVAPyOabcOhfhy0HLULmBaI5wK2wok9SAKd6RBWjGAZrBGREzGPB%2B4QHQePS01vnIIVQWTAJIK1NpSVaFWCIxf%2B8Vb%2FDUQGBiR0RqLoyKgkenf1g4xAh3H294LHqJiz%2FKq70qvJ3mjIP13JSLGe47vwtm5gRruvdAM1Jl%2Bz0czkW09TGryjkfghmZWUmjOgWUjJHcFFht2DVzpNylx5BXIEmnw4zQ5zUoer75l0BKO0sr3DvKzhBCBS2%2F4Fkj64ZmWFvJ1TztEEeGFi%2F74ti4a7Jcfigkh154GePPqQAjMjoPEuHfnCSvpz53QrYEPCExhwVezUCwKGNkVolXuGjpkjWMhuEiK7wfEbF%2B%2BcUw%2FmxlWuaOHTyXEnalLNkCEnqpRx1JBEpagPk144lHC8VeesgHuIbkZ5MSORrUzaolS7TwWi%2Bqb36jqei2YtXZaeJ9b%2BLW9PqCH%2Fehf3euijq9lwMPDok6x%2FU5ljhwn00E12wfDfwRC2zNZjz84trZkj3yuWEwgxnsD11Maq3XZf2x3rlA1SGjO11a9ZvY%2B23271%2FgxB7MJDM%2BsIGOqUBM4%2FUHBZpOBgr92QTxrF8PfVYSlM7atkhWjersNFEDL2QpesaO1JAkMR9jJNgY0RCYWEFgV6hHqDp69R%2B34z4miDOQQkmbjzXgliiWBuRxO1sIoLppAZAzLSpgqmShH15MlU23WMCnAIplhFdSI%2BlhLWFfaEAqCLD5b9CDqhHwORyNjj5%2B4RmFnY5nTU0PJ7JrxjbbkzeUVibZFDy%2BtkrU1OsA%2BCL&X-Amz-Signature=8d72c49141aea22cfd645e4d122b3b00c28627620f71dec903f0d588ecb7c40f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR7QT3Z3%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T150908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFAMFbAckjYkCYnKeaNfwmz2wNiD7ZTwN0S9pjUdJGxZAiEAw7Bz2MadIpwM4a3a1yAAC%2B5KJ2IMk0CzW4Ra2Zy5RZUq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGOPsk3OPi8eQTfXUircA3l0glWSjY9lU5nwqxRjVqnStOatjgIWFc4LkTbRPAOJzH%2FjD6M5SM%2Ft5THz2Hm%2Fyk7sCGB%2FYQloGVAPyOabcOhfhy0HLULmBaI5wK2wok9SAKd6RBWjGAZrBGREzGPB%2B4QHQePS01vnIIVQWTAJIK1NpSVaFWCIxf%2B8Vb%2FDUQGBiR0RqLoyKgkenf1g4xAh3H294LHqJiz%2FKq70qvJ3mjIP13JSLGe47vwtm5gRruvdAM1Jl%2Bz0czkW09TGryjkfghmZWUmjOgWUjJHcFFht2DVzpNylx5BXIEmnw4zQ5zUoer75l0BKO0sr3DvKzhBCBS2%2F4Fkj64ZmWFvJ1TztEEeGFi%2F74ti4a7Jcfigkh154GePPqQAjMjoPEuHfnCSvpz53QrYEPCExhwVezUCwKGNkVolXuGjpkjWMhuEiK7wfEbF%2B%2BcUw%2FmxlWuaOHTyXEnalLNkCEnqpRx1JBEpagPk144lHC8VeesgHuIbkZ5MSORrUzaolS7TwWi%2Bqb36jqei2YtXZaeJ9b%2BLW9PqCH%2Fehf3euijq9lwMPDok6x%2FU5ljhwn00E12wfDfwRC2zNZjz84trZkj3yuWEwgxnsD11Maq3XZf2x3rlA1SGjO11a9ZvY%2B23271%2FgxB7MJDM%2BsIGOqUBM4%2FUHBZpOBgr92QTxrF8PfVYSlM7atkhWjersNFEDL2QpesaO1JAkMR9jJNgY0RCYWEFgV6hHqDp69R%2B34z4miDOQQkmbjzXgliiWBuRxO1sIoLppAZAzLSpgqmShH15MlU23WMCnAIplhFdSI%2BlhLWFfaEAqCLD5b9CDqhHwORyNjj5%2B4RmFnY5nTU0PJ7JrxjbbkzeUVibZFDy%2BtkrU1OsA%2BCL&X-Amz-Signature=39cdd20c32ab250a79a6403e24a7f5ece131be854de0e474e8572136460ff10d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TTESNIW%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T150909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIBdjUTijI15xfIJDayyXjNETbME01Fgi6qDQdVKwPXTEAiB6vxcNM9Y37jNqyuNKh3uoOZShTLmJaowsidm%2FLJTrAyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMZwpbbcI1xSvF4xo%2FKtwDk0yMEcQGg7apyRy1reEYkoirH5g9yrBA4XaId0iVfBAJSjeHF8RkGMRGcfb%2FIW47OCWpz8yDhbtjTK5hm%2FtgWhdwG0DxgyjW2Pa3wDlRG5E%2BJG2l6aW9Cdoy3zd9%2FfAWpYk7Q%2FBxjZ7AcdP4v4x%2BBXoqw79ivHV%2FfwJ9BAztml0eS1IWOOjwfHLjuouHgW1K15PP9N2UnwOfUBPgKw2H2hiS1IxpJf8cTz%2F7Q51csfccQ97BRupV%2BIwfCYO%2Bjo%2BcT3khUWaJbOI7rbrZWTtMXHh0M5glv4SQfXuMgwrfLriNxP1pe9FMta3rtfU6l0vvL8fs7SeWnYQIAWd%2FqlAwo%2FKUfBicxVB4ONTQq%2BIng5%2BJH67f5nQdk4fevHqgCz%2BuSfHxMX%2BMm%2F6AczTTxdXBvCYYjumoJAPm6k%2BIA08TN%2B9kGfS6IH%2FaicJNB%2F6TeGs4oOG86QFhinigsXjzOdalikiSmycdmlC61r3O0rTl7Ks6prGhCqRDIAy%2FSQGlA74T8oioNocLkjf0X70lOzWFDTKrxMBQv0m3b5UTMytcUqakNPBPceSpUnD2XRGp53fZ4C3F5XNLuQ5z6JPaqQjCmaK3wnNhtFx2KXs9Jqd2MAQyiQ%2BMpkVOVrVhK6wwi836wgY6pgG0gLs51CXHd6y1ndUe46xyuXzNlZE0%2BfvGUFg8uCd4qX9Isuc3p2CPgjqUTfVEiGFmn4sE%2BU2ykiItxZs0qgYyr2NZAcKHzm%2F0FjAjBJFN7BTn416ymknYo3L7zokNIs%2FhXBHdhkyZjKrWSfA7Ue%2F6DoBL3ys42PVlnoRoGFZmzv17X8hDYL5TSsShTu1jZIwRPVaaWs4bt%2FeHfwJ5%2FW2UXsZGn%2F27&X-Amz-Signature=ee20f3ab95690a7580c316079760eee3104e04acdab1ea294862573c4b80deca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S36AY3SF%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T150909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHBesCXsgGcCNxTiWxNtreR9bsQ33z3vzOMICypsS87bAiEA5aYO%2BTj6gTsNrV07sxe6luZ5BTva1pjMv%2BjtARraxp0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDO2t8EyKfOHWggZfeyrcA%2BolYESQzBl928SHnWEsNdFkfU2h3KjOYpYBzuo8wd%2FMU1P8Oe2f48iQkzmjp%2FaBFM0PHIXpvAe%2FcSFavTIx2xdrMCEhWxsby56NC9wfgp8Xum2NmFqyV%2F%2FKTz3VwwYqcYi5yDZXQyY8prGTvY495KT5Cu8gx%2BsEVpnP%2BVmHYQnChfucc448EWdOCUni47FNrIQjVnWxr%2B4J6VefQzJNe%2BLx4YhbfW51Y8aSaJnIHWPheR%2BmFzggYXTSQZDlL3IjY8Tu9hbtMeQZTvxyc3%2Fc2ucjfTzylUHZpMmANcfEnY3I6B9KYBhHQ%2FENsy14kPShaCdW9ptLXab5EIU629VJH2i%2Fsmstvwug30Jr6L9%2BGPIfQyAc%2F3yDY8q1wxmQUindCIgOE3oZPpZbgWaOxdWS4s6NpEwaF6dQI9Kdr98ASesSExqDlZHJuLv8Xr%2Bw3BiIoBqGAa%2Fhfv0R0KbNrjjl9t3W268tmt1Lzw9JhNsrHlzkWNAF0L9oXZNDKnWtIwgeFbWsx7pRbYGLfm3RIiOn33%2FEiK61B4uz%2FWL0qdKUlak89XkyJ5raJxF5g82D5JfkPrPWp%2ByMdpvOWWMmygbYLUFp%2BW%2Ba%2F%2FEbHazH8OReIrr4y3D9RMUEUkbVB53RMJDM%2BsIGOqUBRUT6LCYB2dQH0xAB%2BR9j1r73Vj0rLYlJbulIUmaFBY7pFUP1EcQmmjYKBm0D4Trg6N8fjCLWukBphTPncmt3ak76JAR2B3hgEI2r%2FS3fBodgMwTGmOBSJB%2BQrk6JNqp%2BLl9YbJqKvvSwj9G%2BQQAMmX47LxLNOrtA0ACrs6RtvglWqpMt5NAw9zAT703MMRE012doE4ss5s3tnfw69Rta%2Bs2E8YnX&X-Amz-Signature=4cd25b2d698bf6a230d970e098fc18d2e71e29ef742fb00351a93dee0fb70882&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR7QT3Z3%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T150908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFAMFbAckjYkCYnKeaNfwmz2wNiD7ZTwN0S9pjUdJGxZAiEAw7Bz2MadIpwM4a3a1yAAC%2B5KJ2IMk0CzW4Ra2Zy5RZUq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGOPsk3OPi8eQTfXUircA3l0glWSjY9lU5nwqxRjVqnStOatjgIWFc4LkTbRPAOJzH%2FjD6M5SM%2Ft5THz2Hm%2Fyk7sCGB%2FYQloGVAPyOabcOhfhy0HLULmBaI5wK2wok9SAKd6RBWjGAZrBGREzGPB%2B4QHQePS01vnIIVQWTAJIK1NpSVaFWCIxf%2B8Vb%2FDUQGBiR0RqLoyKgkenf1g4xAh3H294LHqJiz%2FKq70qvJ3mjIP13JSLGe47vwtm5gRruvdAM1Jl%2Bz0czkW09TGryjkfghmZWUmjOgWUjJHcFFht2DVzpNylx5BXIEmnw4zQ5zUoer75l0BKO0sr3DvKzhBCBS2%2F4Fkj64ZmWFvJ1TztEEeGFi%2F74ti4a7Jcfigkh154GePPqQAjMjoPEuHfnCSvpz53QrYEPCExhwVezUCwKGNkVolXuGjpkjWMhuEiK7wfEbF%2B%2BcUw%2FmxlWuaOHTyXEnalLNkCEnqpRx1JBEpagPk144lHC8VeesgHuIbkZ5MSORrUzaolS7TwWi%2Bqb36jqei2YtXZaeJ9b%2BLW9PqCH%2Fehf3euijq9lwMPDok6x%2FU5ljhwn00E12wfDfwRC2zNZjz84trZkj3yuWEwgxnsD11Maq3XZf2x3rlA1SGjO11a9ZvY%2B23271%2FgxB7MJDM%2BsIGOqUBM4%2FUHBZpOBgr92QTxrF8PfVYSlM7atkhWjersNFEDL2QpesaO1JAkMR9jJNgY0RCYWEFgV6hHqDp69R%2B34z4miDOQQkmbjzXgliiWBuRxO1sIoLppAZAzLSpgqmShH15MlU23WMCnAIplhFdSI%2BlhLWFfaEAqCLD5b9CDqhHwORyNjj5%2B4RmFnY5nTU0PJ7JrxjbbkzeUVibZFDy%2BtkrU1OsA%2BCL&X-Amz-Signature=2b95a3dc9eba49e4ba20eb8092414b7ad86c483c94abf6d9c249985c1f7d56bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
