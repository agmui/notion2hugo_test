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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623Z2BCXC%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T040938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIAOj27r1A8VidINmxams4Eu%2B%2FMFNlHTlynqis1CXF0kyAiEA6JHTERO9JV1q5heRm8B3ND7AX3nENcvSJRkOproGNjAqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPUBwCOHHHZEBIpu9yrcA9xD1LqII6EMtqDsg8CRXsfzteLPRrh0tIST5lfvtrZUt7Lje1OHPOVrgnLDNRIfnjFJ3GS3wjuNmRZM20E6JpfMbHg418OoS3dAG%2FQP08%2FW7eWjsZA9wIDLZO1qTNeDOx7ESwfP1NYm%2Firbq6bdZ%2FIIfdc2M%2BCng8xVzFXUFLBkPGadExj4p4cT9ctSlI4ep19jeq8JZAPOuJhpxpD2YX8H%2BkErnOTEpuxQOZEnnYXUQxnsLoKjU0y%2Bw9S7jeugyniolRXkUtpzMQC7Nak6LJLRUrfBgYD8qBsGdN695Q%2FyE5BV3fXtFOGkRkb8bnZO90NOgYlYzUuDH%2BAiAG6mPHOHq7AsR54%2BGL6eKfJIFADijrCplC1tZn2YQ%2BErSA3nc%2B7mT0py7aaUcu4uSXqPSXLfZj%2F3TC166MljnyBWn6tJjwSUer8kPAyJdZnvoBwefGd1b0voq1bd7YKsfEleVP9d9bphYawudzFkmBsp%2F3e4rDdLIF0xPHLAS1OvtEzZxZ8kQMJW1kVenM0ZTlFo2O6RhXcc7sJeSPquVzVAoqZPcNUFYSRDmd0s8GEXY2LMZDWXS7%2BeedpdyLobyCJwxp3D3uGaszVymg5YOFlON2dd0KnwUzqtwwnI0AgRMNGM0L0GOqUBJw75gweI5KZcMKd9jWgsqbXmDU8WI7NccZ54IxDSJgrzfS6DMtd1BPWXo6BlGdVhn%2BK0wxbK65CBDnlMFqDEHYL%2Bak8UeHip8ajkQt6ld0u1d01uNwEY6emTCk0JM18ha4dKS7NwBLtpYl4apJaedrhOoiupum2B6nHCPpJ3GS8gxQFXf5dI3p2OE9erst7dJkZbU%2Fn%2BOom9ZqAk9wOaakeU1A0j&X-Amz-Signature=eb681f7c88dfd80e2332a857cba21a78065051d16bc9f03596ac7c4bc1cddac0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623Z2BCXC%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T040938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIAOj27r1A8VidINmxams4Eu%2B%2FMFNlHTlynqis1CXF0kyAiEA6JHTERO9JV1q5heRm8B3ND7AX3nENcvSJRkOproGNjAqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPUBwCOHHHZEBIpu9yrcA9xD1LqII6EMtqDsg8CRXsfzteLPRrh0tIST5lfvtrZUt7Lje1OHPOVrgnLDNRIfnjFJ3GS3wjuNmRZM20E6JpfMbHg418OoS3dAG%2FQP08%2FW7eWjsZA9wIDLZO1qTNeDOx7ESwfP1NYm%2Firbq6bdZ%2FIIfdc2M%2BCng8xVzFXUFLBkPGadExj4p4cT9ctSlI4ep19jeq8JZAPOuJhpxpD2YX8H%2BkErnOTEpuxQOZEnnYXUQxnsLoKjU0y%2Bw9S7jeugyniolRXkUtpzMQC7Nak6LJLRUrfBgYD8qBsGdN695Q%2FyE5BV3fXtFOGkRkb8bnZO90NOgYlYzUuDH%2BAiAG6mPHOHq7AsR54%2BGL6eKfJIFADijrCplC1tZn2YQ%2BErSA3nc%2B7mT0py7aaUcu4uSXqPSXLfZj%2F3TC166MljnyBWn6tJjwSUer8kPAyJdZnvoBwefGd1b0voq1bd7YKsfEleVP9d9bphYawudzFkmBsp%2F3e4rDdLIF0xPHLAS1OvtEzZxZ8kQMJW1kVenM0ZTlFo2O6RhXcc7sJeSPquVzVAoqZPcNUFYSRDmd0s8GEXY2LMZDWXS7%2BeedpdyLobyCJwxp3D3uGaszVymg5YOFlON2dd0KnwUzqtwwnI0AgRMNGM0L0GOqUBJw75gweI5KZcMKd9jWgsqbXmDU8WI7NccZ54IxDSJgrzfS6DMtd1BPWXo6BlGdVhn%2BK0wxbK65CBDnlMFqDEHYL%2Bak8UeHip8ajkQt6ld0u1d01uNwEY6emTCk0JM18ha4dKS7NwBLtpYl4apJaedrhOoiupum2B6nHCPpJ3GS8gxQFXf5dI3p2OE9erst7dJkZbU%2Fn%2BOom9ZqAk9wOaakeU1A0j&X-Amz-Signature=e4ac3b01257b0ab038f7aeaecea9ff442e3a1e96ae031696714ddc3a4d1daf20&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA45UVXO%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T040940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIClfrCuLMd0w9njuFak5uCN2aAyR6IL03vRiVkO6QjmzAiAUqc%2FFgNRAHmb9dbrAr7kltRtBskqB%2BnrIAo1RgW2%2BtSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNV3pEPHTRR7DWazZKtwDBYr9gAmx4AgtYGCFf%2BTK3smwqh6SYmS9FkcKuaDxYQQND3AEpz1YAvYkiAjWQBAKaAfSLCuybHhyFembprzL7gBDOufgWCCsTjSNKVDQbt5fYSoBFXrEwMB5bOFGFAYSAPOqdktsFJI1jofGNVhb4naTm92qt9pXt%2B7xGbJGOhaANkyMfRahDlWzf0aHNmyFFvHgmBdOCauE7NrPh2IdwH8IiZkDQsZh5CKNWynKHOoRaK0rBWED7%2FH48hZbZeBs081%2BnHc4V6L1pGe9PktzHtUk7dd0njzi6K%2B2jHX6c009tR3orS2OCfI1vWJ7oLLDZ%2FXEAUSRPxPEDKx%2FiwgrHndo%2FoCTmDC97Wnsf1q%2BXZBcdbY80w0M%2FA9maM646dlsC6zJto9BFVr0NDEyG8fkNAkl8lQmJxRkHYGJYUG5eQpOddHPLdAc0%2B73nMcaMiBK6rigBfMTc9rtGcil7ov1%2BfNyfe1YNiSU4WsyAmgZ%2FSOSPsr2vBoJZx63usgJ40UiFaFFqpxLwsnl1RZkaNPF7BLVAdVcDCI3C6jox9cXqihULsbeAAW%2B4WN2FuqO4YlK0CPqy1esUXJ7OllAxvSaIkhhBdp3Wtmzu4eamOF5IJcptyG2dXVefom%2FXrQww4zQvQY6pgE0aIL4aeYS68xzVU4apn8t0O6pTL1e4Ilr0JGmNM4qLOPRGyAlnk%2Ff2X0XYlJpQ6yJXoAyNCh9Zuq8J4eQoDm%2BpEtQAky9nrwnLjhQxXIUd3aypB3Dj59v0L9aW9dpJsJsPjpL9FGZ6CILrH7394u6C5DELBvTyGGhgbHgtQZLT98LJvCJtRhfeNJM5uzQCH62105026z7VsD2zo1InfhPul%2BwfZVQ&X-Amz-Signature=bd12f5e1aecd0ec1bb80e2d5bb7a2be79e5190809747cc49c6f418cb43351bba&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LOZFIDU%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T040941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDbtKCV5sL8rIUUDzdTdqAlgnmhBgCXG4Ljk2VvC2WgNAIhAKvKpBpG4u1ufGKjIXgH7gp9HRmDwUIxTnPcdeabdGaVKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAFhdxiJUWIaZ4l3gq3ANBw8Tl8ehhX3HxrWjFf6iz34MQGhRYxoaoV%2FazOCuzXdqMog9F7IAbL2zkWfNIRpQvS3odye3DzqVQw3e9mU010lhfRS8Ud5kCBhJgFPi8%2FgWZq6%2F6ArhJq6JYpaGDs4fO%2BbMeEbX5QV4mvytIodDPy56qLRcfsmYdV6FxZsJXhKWElq2XoOcUw9NVx%2F%2BcV6LT3mgmqGuzazW0QTAGdj6p13bUPaeyG%2Fhm8pkkFSYLBaossxeeWS9g1RKGgm2LJ2ei3aXRvxGlk5jHbLtiorpLvONlOwh%2FnPuNbJvQ5f4QAwvmmhEmeTnCDJf9o77RKfcUj18lYa3BQ%2FBbQAj1kLsgBcreiwonFlompGPy42rZHxF9TRUhK5aqNL1hVcrcCKopFTkQx9A3qzhNR%2BKHzP5w6MFLzwEpji%2FbMht%2FrbWXdycjx1KY%2BpHNTAUaIWUEeosHikvaS0FOwGSP3BkvSMDIZSIIyIh69Oy0lPP%2FtStETYOxjM9WK7HBrIXAH2dOQnLUCW5rrFERviYcDMHb%2BmngRTKkiz0FYbPY9K7GB7kL3log8b%2BphUECXkEJiXCGLXpY5Pubh9ERyz2yoL4J%2BISwuTr1SK3nS16JJmqNhIcavLLGjYrrczTFQpwbjzCfjNC9BjqkASElJxa5AGNp3O12lhOR%2FQyKACtxl6B98Fo3Vjb%2BLGFqcPd67uuHTibjwce6Lf7GL0S7Pyi1HKSHGWFHJclYZrO6WbFzZe7%2FpwmqzrBP4Js4QxMiGo%2B2EnP5D5p2MkC%2F%2F6qnEeD4b1vy7zxO0OkssHC2lFMm5auwmZJUsDRTcPysAjxt2AxMTxtksDS8gQ1bccjL44C%2Bsq8RhkllbgFRamKBTl8p&X-Amz-Signature=a4b63d9114d2c0777b894916efe83d8cf42d2b25601ba5cd905c6936f5bd8738&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623Z2BCXC%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T040938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIAOj27r1A8VidINmxams4Eu%2B%2FMFNlHTlynqis1CXF0kyAiEA6JHTERO9JV1q5heRm8B3ND7AX3nENcvSJRkOproGNjAqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPUBwCOHHHZEBIpu9yrcA9xD1LqII6EMtqDsg8CRXsfzteLPRrh0tIST5lfvtrZUt7Lje1OHPOVrgnLDNRIfnjFJ3GS3wjuNmRZM20E6JpfMbHg418OoS3dAG%2FQP08%2FW7eWjsZA9wIDLZO1qTNeDOx7ESwfP1NYm%2Firbq6bdZ%2FIIfdc2M%2BCng8xVzFXUFLBkPGadExj4p4cT9ctSlI4ep19jeq8JZAPOuJhpxpD2YX8H%2BkErnOTEpuxQOZEnnYXUQxnsLoKjU0y%2Bw9S7jeugyniolRXkUtpzMQC7Nak6LJLRUrfBgYD8qBsGdN695Q%2FyE5BV3fXtFOGkRkb8bnZO90NOgYlYzUuDH%2BAiAG6mPHOHq7AsR54%2BGL6eKfJIFADijrCplC1tZn2YQ%2BErSA3nc%2B7mT0py7aaUcu4uSXqPSXLfZj%2F3TC166MljnyBWn6tJjwSUer8kPAyJdZnvoBwefGd1b0voq1bd7YKsfEleVP9d9bphYawudzFkmBsp%2F3e4rDdLIF0xPHLAS1OvtEzZxZ8kQMJW1kVenM0ZTlFo2O6RhXcc7sJeSPquVzVAoqZPcNUFYSRDmd0s8GEXY2LMZDWXS7%2BeedpdyLobyCJwxp3D3uGaszVymg5YOFlON2dd0KnwUzqtwwnI0AgRMNGM0L0GOqUBJw75gweI5KZcMKd9jWgsqbXmDU8WI7NccZ54IxDSJgrzfS6DMtd1BPWXo6BlGdVhn%2BK0wxbK65CBDnlMFqDEHYL%2Bak8UeHip8ajkQt6ld0u1d01uNwEY6emTCk0JM18ha4dKS7NwBLtpYl4apJaedrhOoiupum2B6nHCPpJ3GS8gxQFXf5dI3p2OE9erst7dJkZbU%2Fn%2BOom9ZqAk9wOaakeU1A0j&X-Amz-Signature=c027207807df1a79c54a9a4fca8a281a93381899d7e715b36a8b317217f0c00a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
