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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667COFZN5O%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T170146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEpd2%2B7jFh8ZMkob3FDJiIQ%2Fwj6zVjUa9qclh%2F4SQHioAiAK0FLZK4JosR82Nm6iivOTdgcO%2BQz63K%2B2oqAxzHW0%2FSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMj5VR6hJ9ooOvjux3KtwDUfKIMpF3oYmeW3RXif0xw2W1qXeuxKF%2B0vDt%2Bmp4%2BqsSJCGqoU85kWs5R%2BpdHIebaL77W376WbUI00NRxxr191w9AyhdNhREY%2F63Sv4NERpSPpEK8v0fwXY9Z0dlha%2B9NLda3mO33hFK7T0AFr0suAcwWyyJqsYOivYzul9oZ%2F7kJX5A65zDI1sWbRjQqYIvJuDshc2NrCbwRhXO5n9hYuHBYDo140lvKd9yo%2F2T%2FIbAS%2Bpp3AvGp5rOdGqrbQOIANO0gSgLQcC4vb4j4cIMzugDkrX3JbuLC8pCcgpCVx5J5B%2BQxD7E2zjD%2BC%2BDU1SiYZpvmSYYvGue4tiBQ2lKdIVehKFpAJ%2Bhenwh16d6hZglMYmyMUqvmVidfh4BTRhQozKyWDuxvuy1Dzh4%2FdnhR6YXq4GM9%2FW9gDzbWHZgJKEc8HJsniqiD9XwNppRP1PRjLjR8wllbK6mx5uLHtwSlQMY8PMJ9u0kdKnUmcgJi0iHflYO05ijhC4pOrKCVn4u1MwJwavvSGSsJPlDrUIiSnaUb8vffI6z07grQVM9Hi3H8Utbrf%2Bv%2Flft%2FwCRxldBnUhoSzhGAUG7YpcqDDk6qjoGLkWWDNcX%2BrkKfmVxxBIh%2BVP3%2FJ%2FCoxUl%2ByMwrO%2FVvgY6pgHIl1b2iQkdaWpQtBdLhfRAR5QyytD4D7g4fsr6FGDB9uFMrcuJ7HBZ7Sm8ZE4SXrTT1rHXgV8nPETO9GcyKdwGebteneqgFsSc%2BXgK2h2WVuTLXRdMCKkNv9xPcLx77lWymX%2Fuq4B0Uhqehm8BwN1IfmexVct96seDNyL0eKm1YbMtAIumEbEMuxZwhrSjvEIjh%2FWkVLswwBPHzY3WUn8owOUawBm8&X-Amz-Signature=bc47cf5ffbd4ab5b69f3107d37b5e6b36fcbb7550cfd9f7d07030ee5126ad884&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667COFZN5O%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T170146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEpd2%2B7jFh8ZMkob3FDJiIQ%2Fwj6zVjUa9qclh%2F4SQHioAiAK0FLZK4JosR82Nm6iivOTdgcO%2BQz63K%2B2oqAxzHW0%2FSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMj5VR6hJ9ooOvjux3KtwDUfKIMpF3oYmeW3RXif0xw2W1qXeuxKF%2B0vDt%2Bmp4%2BqsSJCGqoU85kWs5R%2BpdHIebaL77W376WbUI00NRxxr191w9AyhdNhREY%2F63Sv4NERpSPpEK8v0fwXY9Z0dlha%2B9NLda3mO33hFK7T0AFr0suAcwWyyJqsYOivYzul9oZ%2F7kJX5A65zDI1sWbRjQqYIvJuDshc2NrCbwRhXO5n9hYuHBYDo140lvKd9yo%2F2T%2FIbAS%2Bpp3AvGp5rOdGqrbQOIANO0gSgLQcC4vb4j4cIMzugDkrX3JbuLC8pCcgpCVx5J5B%2BQxD7E2zjD%2BC%2BDU1SiYZpvmSYYvGue4tiBQ2lKdIVehKFpAJ%2Bhenwh16d6hZglMYmyMUqvmVidfh4BTRhQozKyWDuxvuy1Dzh4%2FdnhR6YXq4GM9%2FW9gDzbWHZgJKEc8HJsniqiD9XwNppRP1PRjLjR8wllbK6mx5uLHtwSlQMY8PMJ9u0kdKnUmcgJi0iHflYO05ijhC4pOrKCVn4u1MwJwavvSGSsJPlDrUIiSnaUb8vffI6z07grQVM9Hi3H8Utbrf%2Bv%2Flft%2FwCRxldBnUhoSzhGAUG7YpcqDDk6qjoGLkWWDNcX%2BrkKfmVxxBIh%2BVP3%2FJ%2FCoxUl%2ByMwrO%2FVvgY6pgHIl1b2iQkdaWpQtBdLhfRAR5QyytD4D7g4fsr6FGDB9uFMrcuJ7HBZ7Sm8ZE4SXrTT1rHXgV8nPETO9GcyKdwGebteneqgFsSc%2BXgK2h2WVuTLXRdMCKkNv9xPcLx77lWymX%2Fuq4B0Uhqehm8BwN1IfmexVct96seDNyL0eKm1YbMtAIumEbEMuxZwhrSjvEIjh%2FWkVLswwBPHzY3WUn8owOUawBm8&X-Amz-Signature=4142809062653f2272446b25cd8997846a68c97e5ebb08f04e59aead93a5aed9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y77C3LLR%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T170148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIK0l3gKS1DTXmONKYTV3V0%2Fn2Qm1x9vPNFG7j0IhnGAiAOAE3LuSySKculrAuHC5PWSOIk%2BUrxSkLesnSUMGi8ZSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMnm23rPcTLI68w1%2BdKtwDJDSY94XJkGsS2%2BsMDWu5jv9TMLMfLMzkFr9yvC2pVsL4wP0MeGa2iDIfuJ%2BfjxYDSethbqMXFs37N305qlCOhbzxOISlyC%2Fd%2BkX4Ocp17Tk4D31vXTPWZyrw8YQ7WXBA198yZ%2B5Ob6JOkX2tY3ZywOUUX4IzXF9NDSInJMunkjTirZXSwZ8zLnxAyT8hZXj%2BIWi9KS5t9ev4qa%2F9h2cWE1AjUUUFERccAqgofjD1GbJ8QEnt%2Be1djk0JdNWWToalgTbYwuStg9%2FykN7VVanzYpojxi0zp4RIL6axMU22Ck80iPyHifDQqBM1Vswem%2BcFPlOOQus2XkZuCIfOhv2BYkDFL3jilS5i3id98cTkJoy%2FJbq%2BCxSubwb1%2FlzQQXWaB1oLOT9IA0X40L72zqUkKoOTa45n%2BgdDyEHbmhSRFdoYvzLOMjhI1DJxNPOtjc4LSWHinRaIB4vdbTLS9UJ%2FCHeP9PIBoqdSn67SIGzcMbyyR6G07%2FrwsMs6oysKWkq%2BYKjLm7PiJKUcny9%2F4JuMkeNbdqMxPafgQofiOWZJ4qF1NZDXy6OIoocWzL3XrBOX5czgSIMcV1a3ryJcaISgKWp1XzkMrUk%2FO%2Bws8bfqQpiovqXNarAaRtXOwWIw5u7VvgY6pgFjKbX5GJGwHPgMrUd77oXi8zub2Uo9eP9vlVYWm4yPQQehjc0iheRYzOCIc0DgOGz%2B8tzynNUYpqx43OhC0uBP1QJ5nZgzU%2FvKc%2B95iQR%2BquR7Aije5lr6aiptw7FcfGksm1jMqGvA0kxB0EUJDMlsI4NivjRyqPiiD%2Bp3Hy3Ilj8GE5cgHGsQPIlrjSYbpH1%2Bxc5id79dcoN2YdrWsT47vCkcUXaK&X-Amz-Signature=9b032a23b46cdd2cc6a38f157b9939c0547acae97d01597d39bf9f0d8183a8f9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N3NKJIG%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T170148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC04Sbcwq1LiUZiYfGtXJSW2TG41jUk12aCUNdgdtV7UgIgRBmmtOppXeOEmVOMzb%2B3nIfmu4vWrRl3IQ%2FyPZ1F3Wkq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDIazPHs6PuGP1%2FcBrircA%2B9l%2Fev9AnWotpeXd11%2BN5YoZH%2FYnRG8mqfLY7LMkWRpK7YMzdE5Ht%2FRFEyRd8AmwqB60tzqWuQ9yOvsmZ0ce%2BXLqtA1MlSJqY4YERW%2FnVT0jFd4GMTeDWoA9SIO5Xwb0dAcMbKUCv8AAj7IH2nEEPF1SH3KPVyjeeG9AZDPYyVXEHn7%2BTCtgyIdDhv%2BuiJn1dlU%2FxjW4ClRMl0zmUgywVafRCqZPGZ3%2BsYbJz6woFPjpHEkmuQULN4QK%2Bfs6dOrLeuECbbBNTJgPiUgXoAnAeH%2Bcot%2FTIs4oDUfWrPZFYddje2Z2VNzgp19AQkxzvCXEKYfC%2By5IJOylYb19wvYMI1pepUl2512zR1eB0xski5%2BZNOA8%2Fsh2hTD7jJdc4Qw9L4lDrC74DHcB0KEGDU18Inh9VfwFMSDH6rodeZOnxEqkMRVk8IWs%2F2LqK233Pluo2J%2Be02j6AuvMJe%2Fzy4SdyblHe9qiXUsacuaQ6JS1LAjZtvFa4ZqZVFglj%2BJnVRainijxneD4p86l%2B796gbN04GeKdsex2pFFzvyBOrdIlpV7GBAn3aewNRM1NQqW%2BJXsX%2BIqzGAx7qBuelPFJmsit5Zo4gVu6t77N9Kegg6n570%2BzRO8cdDnXThSuZBMJDv1b4GOqUBoPJ2L9hRqt446AyjquyHSUZXLSZkPIPN6RJ%2BoChkRrzCOoDDHuVb9sD%2BPo3L%2BurPgxCjsxS0M%2BPZaMjnIJluN3uUUQPRBepW%2BMMde6AWi%2F6CxSK7bYPz7NWlj1d4PWNGnIF0j5OfUIMfm2dcEQbvIbRH2jupjz1LVmaqTKhcFvlcUOSWEs%2B36M%2Bu%2FmKhNR93tSJUVKxhrNiJoM0haUGfMsqMouD%2F&X-Amz-Signature=444eaf776240d8c647ce325c073aadca1437c3a32d9ebc02be67178838994d4d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667COFZN5O%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T170146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEpd2%2B7jFh8ZMkob3FDJiIQ%2Fwj6zVjUa9qclh%2F4SQHioAiAK0FLZK4JosR82Nm6iivOTdgcO%2BQz63K%2B2oqAxzHW0%2FSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMj5VR6hJ9ooOvjux3KtwDUfKIMpF3oYmeW3RXif0xw2W1qXeuxKF%2B0vDt%2Bmp4%2BqsSJCGqoU85kWs5R%2BpdHIebaL77W376WbUI00NRxxr191w9AyhdNhREY%2F63Sv4NERpSPpEK8v0fwXY9Z0dlha%2B9NLda3mO33hFK7T0AFr0suAcwWyyJqsYOivYzul9oZ%2F7kJX5A65zDI1sWbRjQqYIvJuDshc2NrCbwRhXO5n9hYuHBYDo140lvKd9yo%2F2T%2FIbAS%2Bpp3AvGp5rOdGqrbQOIANO0gSgLQcC4vb4j4cIMzugDkrX3JbuLC8pCcgpCVx5J5B%2BQxD7E2zjD%2BC%2BDU1SiYZpvmSYYvGue4tiBQ2lKdIVehKFpAJ%2Bhenwh16d6hZglMYmyMUqvmVidfh4BTRhQozKyWDuxvuy1Dzh4%2FdnhR6YXq4GM9%2FW9gDzbWHZgJKEc8HJsniqiD9XwNppRP1PRjLjR8wllbK6mx5uLHtwSlQMY8PMJ9u0kdKnUmcgJi0iHflYO05ijhC4pOrKCVn4u1MwJwavvSGSsJPlDrUIiSnaUb8vffI6z07grQVM9Hi3H8Utbrf%2Bv%2Flft%2FwCRxldBnUhoSzhGAUG7YpcqDDk6qjoGLkWWDNcX%2BrkKfmVxxBIh%2BVP3%2FJ%2FCoxUl%2ByMwrO%2FVvgY6pgHIl1b2iQkdaWpQtBdLhfRAR5QyytD4D7g4fsr6FGDB9uFMrcuJ7HBZ7Sm8ZE4SXrTT1rHXgV8nPETO9GcyKdwGebteneqgFsSc%2BXgK2h2WVuTLXRdMCKkNv9xPcLx77lWymX%2Fuq4B0Uhqehm8BwN1IfmexVct96seDNyL0eKm1YbMtAIumEbEMuxZwhrSjvEIjh%2FWkVLswwBPHzY3WUn8owOUawBm8&X-Amz-Signature=52b2b00d40cb643b43de880bcc9d261b6de04c0ff3245fe40ffb672159513a1b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
