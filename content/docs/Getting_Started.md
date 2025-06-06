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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TOUWQGF%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIEGQbkNuj%2FHmrzeOwNtKgr8ggjdP5AzfGpb%2FLOagDXz1AiEAnCvFcp2CdJ5PzL5%2B5RlW4j%2F2WCYW8E6pTlsJnInWwrkq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBpYt6xR5Bjkup03NyrcA4P0veLUKVUIWYtRHAyL19%2BF88pc4%2BJmIbTfAobGSOaPmIdtftNwE1tOERoPzLOFDh39Z4AzQon5%2F1HoQsAzY2D7cZ45zKDIbFLITjhqhownOjgEf1ip9BgT4g4lOz%2FL5xT33N1rMcbxyOdD%2BwuBC%2BqnNczZGOE7PLr3WHfGKgVlcTCzdqiU6xJqRXUdybS%2FzM%2FW8DjoVMxh8k1wUMcyZb64M607FVPzXXY4shTvH25ftdiO8iV6hhvxbagfLC5QZXGdPn4yxMpaC57Caj4AA48l6s8HtfoV%2BuHz0VSUE8M1W3zWxg69tsxGrwCjNv36OoC6VYy%2FsMBDg%2FzHmWT%2F0aOM%2BiyCFK2TxczjoLOve2BTio1%2FxLZEqDt9sJiD9Sbfu5jI6cec8mmPFJcVzXwM7nVOnpSr9fbtseYAj2XAG1gyrbJmF2P1EvJsvb1GG7Gu86db%2FU4SFhsYhdyaaYbZkPD%2FRjPqkW9CrjjnXdz5Uut2NuE2DR28adWGuQjrq5FTqaow9otVepH%2BDT0iVIfXuMoey9VgqHU9a6X50dhySBs2oO1H2H1S7BYPrYULQYlSe%2BfkTxvUFnOr0a00N6gNa%2BhFBJCoHOn9szwc2z0GB6MXDhzNQO6mlGRXMqsLMNuCisIGOqUB%2B6y48KM8LX5cJDKfZ05G20kf1XCSTTkiWOQjTETX8j%2Bl1kXrRVDWznbiya66%2B9yFfK482eEHTcCIKc6W1A0HE22hhDZ4%2BNeyBugyh%2FePVok6R5QUbrrjwqcOLrnopv0nn3GulHK4SLqcpWcvnBxvclu0c2D1TqS93JTm2EFfuD2Lb56QlCbPfYeLFpj19U1pWPglpb2T0559iS6id3RvlPzZNFmR&X-Amz-Signature=191b3b2249d76225432ab6e7e2de624c113f3bc1fb5677ae3f8f55faaed2d9e1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TOUWQGF%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIEGQbkNuj%2FHmrzeOwNtKgr8ggjdP5AzfGpb%2FLOagDXz1AiEAnCvFcp2CdJ5PzL5%2B5RlW4j%2F2WCYW8E6pTlsJnInWwrkq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBpYt6xR5Bjkup03NyrcA4P0veLUKVUIWYtRHAyL19%2BF88pc4%2BJmIbTfAobGSOaPmIdtftNwE1tOERoPzLOFDh39Z4AzQon5%2F1HoQsAzY2D7cZ45zKDIbFLITjhqhownOjgEf1ip9BgT4g4lOz%2FL5xT33N1rMcbxyOdD%2BwuBC%2BqnNczZGOE7PLr3WHfGKgVlcTCzdqiU6xJqRXUdybS%2FzM%2FW8DjoVMxh8k1wUMcyZb64M607FVPzXXY4shTvH25ftdiO8iV6hhvxbagfLC5QZXGdPn4yxMpaC57Caj4AA48l6s8HtfoV%2BuHz0VSUE8M1W3zWxg69tsxGrwCjNv36OoC6VYy%2FsMBDg%2FzHmWT%2F0aOM%2BiyCFK2TxczjoLOve2BTio1%2FxLZEqDt9sJiD9Sbfu5jI6cec8mmPFJcVzXwM7nVOnpSr9fbtseYAj2XAG1gyrbJmF2P1EvJsvb1GG7Gu86db%2FU4SFhsYhdyaaYbZkPD%2FRjPqkW9CrjjnXdz5Uut2NuE2DR28adWGuQjrq5FTqaow9otVepH%2BDT0iVIfXuMoey9VgqHU9a6X50dhySBs2oO1H2H1S7BYPrYULQYlSe%2BfkTxvUFnOr0a00N6gNa%2BhFBJCoHOn9szwc2z0GB6MXDhzNQO6mlGRXMqsLMNuCisIGOqUB%2B6y48KM8LX5cJDKfZ05G20kf1XCSTTkiWOQjTETX8j%2Bl1kXrRVDWznbiya66%2B9yFfK482eEHTcCIKc6W1A0HE22hhDZ4%2BNeyBugyh%2FePVok6R5QUbrrjwqcOLrnopv0nn3GulHK4SLqcpWcvnBxvclu0c2D1TqS93JTm2EFfuD2Lb56QlCbPfYeLFpj19U1pWPglpb2T0559iS6id3RvlPzZNFmR&X-Amz-Signature=2082cf27b9eeab079f02549fda32643e69543fe2c833d91877d731c6c8c85319&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TOUWQGF%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIEGQbkNuj%2FHmrzeOwNtKgr8ggjdP5AzfGpb%2FLOagDXz1AiEAnCvFcp2CdJ5PzL5%2B5RlW4j%2F2WCYW8E6pTlsJnInWwrkq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBpYt6xR5Bjkup03NyrcA4P0veLUKVUIWYtRHAyL19%2BF88pc4%2BJmIbTfAobGSOaPmIdtftNwE1tOERoPzLOFDh39Z4AzQon5%2F1HoQsAzY2D7cZ45zKDIbFLITjhqhownOjgEf1ip9BgT4g4lOz%2FL5xT33N1rMcbxyOdD%2BwuBC%2BqnNczZGOE7PLr3WHfGKgVlcTCzdqiU6xJqRXUdybS%2FzM%2FW8DjoVMxh8k1wUMcyZb64M607FVPzXXY4shTvH25ftdiO8iV6hhvxbagfLC5QZXGdPn4yxMpaC57Caj4AA48l6s8HtfoV%2BuHz0VSUE8M1W3zWxg69tsxGrwCjNv36OoC6VYy%2FsMBDg%2FzHmWT%2F0aOM%2BiyCFK2TxczjoLOve2BTio1%2FxLZEqDt9sJiD9Sbfu5jI6cec8mmPFJcVzXwM7nVOnpSr9fbtseYAj2XAG1gyrbJmF2P1EvJsvb1GG7Gu86db%2FU4SFhsYhdyaaYbZkPD%2FRjPqkW9CrjjnXdz5Uut2NuE2DR28adWGuQjrq5FTqaow9otVepH%2BDT0iVIfXuMoey9VgqHU9a6X50dhySBs2oO1H2H1S7BYPrYULQYlSe%2BfkTxvUFnOr0a00N6gNa%2BhFBJCoHOn9szwc2z0GB6MXDhzNQO6mlGRXMqsLMNuCisIGOqUB%2B6y48KM8LX5cJDKfZ05G20kf1XCSTTkiWOQjTETX8j%2Bl1kXrRVDWznbiya66%2B9yFfK482eEHTcCIKc6W1A0HE22hhDZ4%2BNeyBugyh%2FePVok6R5QUbrrjwqcOLrnopv0nn3GulHK4SLqcpWcvnBxvclu0c2D1TqS93JTm2EFfuD2Lb56QlCbPfYeLFpj19U1pWPglpb2T0559iS6id3RvlPzZNFmR&X-Amz-Signature=c2f46b639b474dc453ff167132df6beccd84ab66a61d6fe850f2feb5fe5bc0f1&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXBASQBO%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDJ28OOXwUDtzCoc4kOUyMp%2F2yGYiBGWuNGw1y84n4RYQIhALYdckH2ALOeipfnDfMadQ4PKBVRZZwFe83aqCgg3BPfKv8DCFcQABoMNjM3NDIzMTgzODA1IgxvpdK3SD0%2BrEngUa4q3AOB%2By6jSWPQM5z01V1Vh55BiH0YOvPJugPtMhGcTb9YWCHlCBonsqx9dmTto6BRc1RPvMgCPnZlVCNCveZ5KxtI2J11TgbVjTTKHZsY7d0rM9V%2Ff4SWkmvHEvX6Iy2eLn1efBtKpG7IFXgo1rhxcc6qZoE3XeY5jnV8xe%2BGJDjUdaLxL%2BtucVM%2BKm52MFPTfREa8t2Ad19cNuAEZS5dsmvz%2B166kaNHHyZZcRoBL1eji4gOjJ3w6krbTesZgFt68ksgbrpJsK%2BoOPjFN26wvgnk6Y0LwXYeoA2QbUykYleZVdHd0zJjrxu0a0wJaoWTL4C2nCwpqCrGCWn35Lspst8nmssxkFD8%2BbYp4zn%2F7oA1VsMtgaeZxMkCQ0Iie9ClggAUF2mqhvGvqinBInwc0QNyH8BJ%2FpS%2FxT9z%2Fm1kfmHM%2Fb5EXJVZAdhSQmq%2Bz7Dsp9nkBi%2FfGbK3Qk5VEwmLvmMRoVU6qfolWHoMkTWqH2ElD66PeN7Qy82LgIPr%2BK6PZ66OsmmNQAe%2Fm1Q51TEXJtug3J4qoMlwXj8lYAba%2Fmnd5IYEvkCrtjQr7D5wLeyAHrbTpNhw8cBXIvKwZaUxDOdMjTjrcb1TOFhtUdoNLNiSDcAo2iKdXw7CehNtAjCcl4rCBjqkAaR4DpjBGALCrEf94Kn1X6hh0guE3ZHsyRetFEEQjaV1yck9lTTFWoqWnnT92Bx0eJZ2MjNrcVbqq%2FwRkKFBcFrDiUTZCjQmrX2cO46Kcpm3bQUqcwCJeGxjoHTfhYKQ0vRubZGQts0J16tnZliBWXsCR0y6hetCRzl1UGunCcOxe7CjgMRNt8tpzgjVY0nXRVACHPNf%2Fe3Xhd6hVeUcAKNYEgDv&X-Amz-Signature=218da9f2f6e72691b82e4de246f8e7160de74df3ead2774b0c2a62fee3db0f6e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T7XCPRT%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIC89SdTF8Fwm0EUOzzaIy19HkL4R5GmdhykS7%2Bbe3ecnAiBb%2FLyEKNTes4ZrHleTSJw85JSjqZVICxygu71hguPSySr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMBuxuuWFCQF89OfAxKtwDFU0f0ZBYxSr3Z73uPfrEeo7h1DsoX8nH6hbL30MLF9uYAR0huc7u2hbRO%2BCouyL7B%2F171oedO5MRnsA2%2FDB2F%2BrAeZRaycGk%2BrfoRKRmpdskItr%2BlC6AgvH%2FSn8iuF0%2BaW6gCIUNiU7SmflbGGpFc8u6Pt9r%2FskrJTGsZF4rUcNThstVuqV6YnzJfCs3Xus3pebY7nnNGvF%2FJ9oySXIgm5W0cCH%2BPWTat3rBsjxaBwOANm6u3z5WpQBM%2BZehfb7ssJute4Fws3HWwz5ikJtZZzdLeb5qpVLIfem2qSYoBJ8rMSSycAe78KbeO5kNd%2BWVj6Lf%2BwOW9eFiBI%2B0TN0JROjzJXmoUddtF%2FAgb8zJuv01d%2BiUJ3kYk%2FYaVoZbZJdQANc6Y3uDHdQwJ5iZCBMjphyvEIFxZ9fq4tYsXQ2T5FCHmPbjkdIol9VkrOzegpxXmvlm602vojblznE9181%2BPoTHS44twXERMLPVm%2F42LIbpt7DIP%2B%2BfgxoL5gqW%2BdpJ9DJqVIDy%2BF5JpeulgbEACS6EVJzanVu87TY4Gh2GEahwNF1C1uZR7%2F5Xntjg9IQohTlrj1on7U%2FprztZiU8T81490X1wMPtV0oxTxGDIIG9FPA6KODIbdiV1D10wnuyJwgY6pgEZIKyu7fjnfwmo9lK%2F7vbJnwGUxOdb5l9%2BUByIMjErCwiRcWChu8MljpPr0bW%2BfAhc3pM6%2BehmIb%2BWtkDQmptHG%2BRvvdZb8RNMZ%2B6U263bevFx4CPL5bKKgrc3%2BC3WlDGk%2FWfRdcYSAfyIJYd%2BJSGogIClvEbAqsvyalCb48zBkche1rVHdR3jXOSbk92dUtk4Axu9E1NQ5TW8AXgb6pVJhKZdF25d&X-Amz-Signature=4908fe418778a6c683c8817ee01a4e46bc5372f16570cb75b5f7a3042ce8e262&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TOUWQGF%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIEGQbkNuj%2FHmrzeOwNtKgr8ggjdP5AzfGpb%2FLOagDXz1AiEAnCvFcp2CdJ5PzL5%2B5RlW4j%2F2WCYW8E6pTlsJnInWwrkq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBpYt6xR5Bjkup03NyrcA4P0veLUKVUIWYtRHAyL19%2BF88pc4%2BJmIbTfAobGSOaPmIdtftNwE1tOERoPzLOFDh39Z4AzQon5%2F1HoQsAzY2D7cZ45zKDIbFLITjhqhownOjgEf1ip9BgT4g4lOz%2FL5xT33N1rMcbxyOdD%2BwuBC%2BqnNczZGOE7PLr3WHfGKgVlcTCzdqiU6xJqRXUdybS%2FzM%2FW8DjoVMxh8k1wUMcyZb64M607FVPzXXY4shTvH25ftdiO8iV6hhvxbagfLC5QZXGdPn4yxMpaC57Caj4AA48l6s8HtfoV%2BuHz0VSUE8M1W3zWxg69tsxGrwCjNv36OoC6VYy%2FsMBDg%2FzHmWT%2F0aOM%2BiyCFK2TxczjoLOve2BTio1%2FxLZEqDt9sJiD9Sbfu5jI6cec8mmPFJcVzXwM7nVOnpSr9fbtseYAj2XAG1gyrbJmF2P1EvJsvb1GG7Gu86db%2FU4SFhsYhdyaaYbZkPD%2FRjPqkW9CrjjnXdz5Uut2NuE2DR28adWGuQjrq5FTqaow9otVepH%2BDT0iVIfXuMoey9VgqHU9a6X50dhySBs2oO1H2H1S7BYPrYULQYlSe%2BfkTxvUFnOr0a00N6gNa%2BhFBJCoHOn9szwc2z0GB6MXDhzNQO6mlGRXMqsLMNuCisIGOqUB%2B6y48KM8LX5cJDKfZ05G20kf1XCSTTkiWOQjTETX8j%2Bl1kXrRVDWznbiya66%2B9yFfK482eEHTcCIKc6W1A0HE22hhDZ4%2BNeyBugyh%2FePVok6R5QUbrrjwqcOLrnopv0nn3GulHK4SLqcpWcvnBxvclu0c2D1TqS93JTm2EFfuD2Lb56QlCbPfYeLFpj19U1pWPglpb2T0559iS6id3RvlPzZNFmR&X-Amz-Signature=360d3a29c648c8e188df16d126b9a9382929852b495a1994c213b6b738e3a849&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
