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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XUYTODU%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T140857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsX66BYP8wLL4t536u16XY%2Fn%2BW7LMVsZFlE%2BWvJ5WT%2FAIgCzh%2BrpbtSgxhjvmAv%2B8CEenLCEOnl%2FkjXhpEZ6JGzFAqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIIvBAsJqcZ2VyDsCircAyHCLNfehKwDDqQAorZlVKDWdRvEv3YyvLuhzyl9ltmRkJlrxkkdlhsA5x0GhYUnAzVnoAfINDXEV2H7lm1mBgGsSCQFis6Er5XGK508ptYrR%2FyrhjRhX3wD5M0H0Nfd0%2F8svWwzvpmx6YE5%2BOz0jdszP5j74MW9cX27fVuIGEElulV26pVzvP1U9s1AsSbYT6vsnQNsUf3Y5InlJX1xdme4FATgwc9Pf70PwFThju6qiEGZlD5qnfJoOLJFNCK1WjMa0lN7cGxAEVVuo0f3s41cdBBc1AQxhbkvv5MwIJu0v%2BWVeHq4%2BjPcM9hpgZyFXP%2FuoFje99f0yP7QZwtuim7alzO2XfnwbJF57qgY7%2Bmr92wPGtoMrDoyelco%2FGsyUN01ISOFMPMxbELf%2FrkQLXN9NnkT%2BKlKjKUP%2Fs%2FozmMZKlmtO1jMpI8TylsQxPVN1OoGfgliSHPPUtrdnMPyrd6gO6W%2FsOuY4pYFDauwGpT3%2FE3dYl1N7hDeI8hD8tQaFcptSDNn4PndnIUmKJlmikuki%2F6LpSGuH23coOKwJb1vwWKOCl96u0CjkROHGcoTjpFA8brYuiNWaBuxNGzNwMjSTg65PpJnc91qWhdIKf2zc93Uad4wZXvfj2RNMNDy5sEGOqUBZRBjXdJkOk05c0sLW9LUxJiKaPFgTpKUdyrUBrh6CngvUG8fEgY0rUpUA1spSZfUCs4ImPLPkv%2B%2FpiFMevCbAC7aarX6gOGG88qK9aiuZpQpw%2F0W5PW9UVIJM8nG1b3AWE4uQidyUUogvjfCDsuPyELpSBo4HmhBBZ5TYQ5BanbeP4jbo8x3Kacvv13Gm5Aug9zkIfElQQRulnRK9ne7MTb3Lm2N&X-Amz-Signature=312aada3524f58d0246142996b5af1166ec8ce5d1f2f9e723a5d44894c7662ef&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XUYTODU%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T140857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsX66BYP8wLL4t536u16XY%2Fn%2BW7LMVsZFlE%2BWvJ5WT%2FAIgCzh%2BrpbtSgxhjvmAv%2B8CEenLCEOnl%2FkjXhpEZ6JGzFAqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIIvBAsJqcZ2VyDsCircAyHCLNfehKwDDqQAorZlVKDWdRvEv3YyvLuhzyl9ltmRkJlrxkkdlhsA5x0GhYUnAzVnoAfINDXEV2H7lm1mBgGsSCQFis6Er5XGK508ptYrR%2FyrhjRhX3wD5M0H0Nfd0%2F8svWwzvpmx6YE5%2BOz0jdszP5j74MW9cX27fVuIGEElulV26pVzvP1U9s1AsSbYT6vsnQNsUf3Y5InlJX1xdme4FATgwc9Pf70PwFThju6qiEGZlD5qnfJoOLJFNCK1WjMa0lN7cGxAEVVuo0f3s41cdBBc1AQxhbkvv5MwIJu0v%2BWVeHq4%2BjPcM9hpgZyFXP%2FuoFje99f0yP7QZwtuim7alzO2XfnwbJF57qgY7%2Bmr92wPGtoMrDoyelco%2FGsyUN01ISOFMPMxbELf%2FrkQLXN9NnkT%2BKlKjKUP%2Fs%2FozmMZKlmtO1jMpI8TylsQxPVN1OoGfgliSHPPUtrdnMPyrd6gO6W%2FsOuY4pYFDauwGpT3%2FE3dYl1N7hDeI8hD8tQaFcptSDNn4PndnIUmKJlmikuki%2F6LpSGuH23coOKwJb1vwWKOCl96u0CjkROHGcoTjpFA8brYuiNWaBuxNGzNwMjSTg65PpJnc91qWhdIKf2zc93Uad4wZXvfj2RNMNDy5sEGOqUBZRBjXdJkOk05c0sLW9LUxJiKaPFgTpKUdyrUBrh6CngvUG8fEgY0rUpUA1spSZfUCs4ImPLPkv%2B%2FpiFMevCbAC7aarX6gOGG88qK9aiuZpQpw%2F0W5PW9UVIJM8nG1b3AWE4uQidyUUogvjfCDsuPyELpSBo4HmhBBZ5TYQ5BanbeP4jbo8x3Kacvv13Gm5Aug9zkIfElQQRulnRK9ne7MTb3Lm2N&X-Amz-Signature=f2286d476834662a224f7d868c30eb1d5d8101279c9458c80a873d7f8c2386d0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XUYTODU%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T140857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsX66BYP8wLL4t536u16XY%2Fn%2BW7LMVsZFlE%2BWvJ5WT%2FAIgCzh%2BrpbtSgxhjvmAv%2B8CEenLCEOnl%2FkjXhpEZ6JGzFAqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIIvBAsJqcZ2VyDsCircAyHCLNfehKwDDqQAorZlVKDWdRvEv3YyvLuhzyl9ltmRkJlrxkkdlhsA5x0GhYUnAzVnoAfINDXEV2H7lm1mBgGsSCQFis6Er5XGK508ptYrR%2FyrhjRhX3wD5M0H0Nfd0%2F8svWwzvpmx6YE5%2BOz0jdszP5j74MW9cX27fVuIGEElulV26pVzvP1U9s1AsSbYT6vsnQNsUf3Y5InlJX1xdme4FATgwc9Pf70PwFThju6qiEGZlD5qnfJoOLJFNCK1WjMa0lN7cGxAEVVuo0f3s41cdBBc1AQxhbkvv5MwIJu0v%2BWVeHq4%2BjPcM9hpgZyFXP%2FuoFje99f0yP7QZwtuim7alzO2XfnwbJF57qgY7%2Bmr92wPGtoMrDoyelco%2FGsyUN01ISOFMPMxbELf%2FrkQLXN9NnkT%2BKlKjKUP%2Fs%2FozmMZKlmtO1jMpI8TylsQxPVN1OoGfgliSHPPUtrdnMPyrd6gO6W%2FsOuY4pYFDauwGpT3%2FE3dYl1N7hDeI8hD8tQaFcptSDNn4PndnIUmKJlmikuki%2F6LpSGuH23coOKwJb1vwWKOCl96u0CjkROHGcoTjpFA8brYuiNWaBuxNGzNwMjSTg65PpJnc91qWhdIKf2zc93Uad4wZXvfj2RNMNDy5sEGOqUBZRBjXdJkOk05c0sLW9LUxJiKaPFgTpKUdyrUBrh6CngvUG8fEgY0rUpUA1spSZfUCs4ImPLPkv%2B%2FpiFMevCbAC7aarX6gOGG88qK9aiuZpQpw%2F0W5PW9UVIJM8nG1b3AWE4uQidyUUogvjfCDsuPyELpSBo4HmhBBZ5TYQ5BanbeP4jbo8x3Kacvv13Gm5Aug9zkIfElQQRulnRK9ne7MTb3Lm2N&X-Amz-Signature=5de00d2b1b66cc3bf6557ebbc8c8382b73fdd9fd675ad08ea597281ff9608579&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCJF5DQH%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T140859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFwRM98nMXuiS8cmVhLtAZcvt3zwyp2PJUFEw9Z9hQITAiAPwF7WdgTqz4AKvy8ExB1Mwkf6ifqgOvEgFh%2FsyX3qByqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeD0QcyJNzycvu08FKtwD%2Fkokc%2FD03mx3p6UJRG6wBWtW5akTptWVg4rooDyxwU4od4Q3%2BpBUNS%2B1T1coWYXWADnVMSXdMnxy%2FHlaMwI2Z7T39l5PoWpQTLqDphNUk5btcjnW7XEbgJfXFSlUvub7vjbAnVg%2Fu6cRpBlzSB%2FUvm6ixMPclNiW2tJ6KITzOotqYVN%2BKv8gojKs6I17Q86BbK6PXDTr59R6oOaijyxsBD1Ev7Tpev%2F1aa14095l%2FvMBSrxasFDEy8on3Nnj8kxGm1eNyWtGQtSZgmSQZtTN5ywDkYOz3ebXHnCmja2uoJsieD1r98hDeS09dv9nr%2FAPVyXYV2QTGw8%2BL7nl5aNcpiXQLr%2FPysXWs80JZef3jRZO6TMZi29kHHdR59LlHYNcX6%2BwtXcanA6VMLV9YEAz5wpC2z5KWgqy6tNYaAmkKJ92%2FHKVZlMSGiDG5Hsll5EcfI1tMxy1khsx1RFJh3uOk%2F8aWQIGaeVqev8TsvUWRNsIGrdT8b5%2FOBdP0YsRqGS7%2BkqHMiynNizhvFUtP00Q6JaIghC6HoG5rVOIH5pscNDY4k24WM8S2icYqDvotFnJW%2B0ugx8t57XuxnbNG3MDdVU9bx4VW1c1eLdLwzfWNkWpiIqfXLXOnE5GAGIwzvHmwQY6pgHnFRHSuTujpNlMVogA9BG8rhFmYAfPCsGq9qVpxDYE2fac4Jfg878OdSB3HFWqWCPfEuk3CzfrxRsVEMXq7pymouPNfWi1IPQ1yxP%2BDWpLnuROgdGo7iwJzZJ9VvqBFspNiB4q1bAqlmR17SOuASiQeubBoGtmsGgYz9LAN6M0HPzBpag0FewTa9ghYWgPPAHCra8fEchFnV4dGqHssUtz6SQ%2FTK8d&X-Amz-Signature=e415e88df235d6971e3642f1138f8347a847f221508ad892354901f8ae5926c9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3WXZ2UE%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T140859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5UGqhcSwlQYaOaB9xSSrBGH%2FRfNZvEQau1dKw39s%2FyAiBafWmuhhVG6hJlu5MyE3Qv%2BhH1ciTIlVNLVN6rggZz%2BCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoW1yN0rZvNlNPSDTKtwDcRsaVOOGryutObMgsdA3BfX3mkIYEDx6D3QVR21QGSjyXWlhcvhjpshb3hJQElv1yEgRWboTJnka5Lc9NqOIAEFIHlph8lx%2BwcVI0MpPbtmK%2BLhwZlQUKEuvdEXcdxotgCUfQ91OU1XqQblxhxO6MLNFp%2Br%2B2lGGekMYknFrfVK5IQeixzF3z4zWCxZtDhY52%2F0MOBsdIeGSAnf2flu%2F7bIrXQVDhkR1A1sAc8imqAO0kJ1BFLMiB%2FnAS74cAgZRAM6QLNFPKN9UkX7k3wAD%2B%2BOK6H8T0aMWd%2BKa8euQ8CTZQs5W3OwDVIN3MhZfZh4pVTBcdo6doI19iiTXPV12a8Nt9gmlGtyg1CBJvR0Ja1o1VN%2BNUOfnXhNxf67Jg8uasdBfyIZDd3g3xTDSRk8ejZ9of4ZQt1VnXz1C0h2tdkH54XCJWKTmCVEjhqlBKq0KGm37D0xY81hVaJNxULFeOtI4AR4wxYRNtAUIEtdSZ1PU0WhtzSdXsn7udPqV%2FFz4xWXmxvLAYUuh4JO6haQ55HG%2BY5DjaXgAwWTe%2BpczKTt9gN2g1%2FWzpuPzER6SpON9TdZkREawyRGDzTgMrFbX5bFd0Ke3zFNwPuYOl6OSSQ1y4RCeEfgvA1u%2FKigwxfHmwQY6pgG0asIxcBwF9VCVHasYO831B6AF2%2Bakx%2FWmlX%2FzuWy9cB2rQWgXAXysFJoT%2FR9qfJk1tbBbmTRcYH0zTzWgVyp4wGZyCZpQZYxfhuCLPb8FCQTJ0omxC5%2BrdInuV68eKsuioxRTyjSReAxYZTfn5MBYC5laY7Ls37EkWpYlQnHhnFfY5SmN4RkRYGOlTfK9bb%2FT8F1XJkCuAsfntY7%2BgJefQkZSkcBg&X-Amz-Signature=f0727dbee57874c706f2a0e168528f5eb6270a04c1e6489368f760b8c803f55f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XUYTODU%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T140857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsX66BYP8wLL4t536u16XY%2Fn%2BW7LMVsZFlE%2BWvJ5WT%2FAIgCzh%2BrpbtSgxhjvmAv%2B8CEenLCEOnl%2FkjXhpEZ6JGzFAqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIIvBAsJqcZ2VyDsCircAyHCLNfehKwDDqQAorZlVKDWdRvEv3YyvLuhzyl9ltmRkJlrxkkdlhsA5x0GhYUnAzVnoAfINDXEV2H7lm1mBgGsSCQFis6Er5XGK508ptYrR%2FyrhjRhX3wD5M0H0Nfd0%2F8svWwzvpmx6YE5%2BOz0jdszP5j74MW9cX27fVuIGEElulV26pVzvP1U9s1AsSbYT6vsnQNsUf3Y5InlJX1xdme4FATgwc9Pf70PwFThju6qiEGZlD5qnfJoOLJFNCK1WjMa0lN7cGxAEVVuo0f3s41cdBBc1AQxhbkvv5MwIJu0v%2BWVeHq4%2BjPcM9hpgZyFXP%2FuoFje99f0yP7QZwtuim7alzO2XfnwbJF57qgY7%2Bmr92wPGtoMrDoyelco%2FGsyUN01ISOFMPMxbELf%2FrkQLXN9NnkT%2BKlKjKUP%2Fs%2FozmMZKlmtO1jMpI8TylsQxPVN1OoGfgliSHPPUtrdnMPyrd6gO6W%2FsOuY4pYFDauwGpT3%2FE3dYl1N7hDeI8hD8tQaFcptSDNn4PndnIUmKJlmikuki%2F6LpSGuH23coOKwJb1vwWKOCl96u0CjkROHGcoTjpFA8brYuiNWaBuxNGzNwMjSTg65PpJnc91qWhdIKf2zc93Uad4wZXvfj2RNMNDy5sEGOqUBZRBjXdJkOk05c0sLW9LUxJiKaPFgTpKUdyrUBrh6CngvUG8fEgY0rUpUA1spSZfUCs4ImPLPkv%2B%2FpiFMevCbAC7aarX6gOGG88qK9aiuZpQpw%2F0W5PW9UVIJM8nG1b3AWE4uQidyUUogvjfCDsuPyELpSBo4HmhBBZ5TYQ5BanbeP4jbo8x3Kacvv13Gm5Aug9zkIfElQQRulnRK9ne7MTb3Lm2N&X-Amz-Signature=dd893ed2af1dc064ae2ae4d2b1b2d7ae25b8e8246f809cfdaabddaf9e26e2e72&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
