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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N5K2VW6%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T200826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIF1%2B9SEbHxb2QGKN%2FYut3eyMBFzvNO3wG%2FygTDxfvEx6AiAWUq0JL41HtneVP10ywxg41q1WWhr9SIFShw%2B4%2BCkUmSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMlnkaOdVXz07CgwBBKtwDGSEvemvWDt4Vqu%2B7VT6kmzpwJDIBRYOpXaVIz%2B2EIaqhpdUYzwv9GHIur754xjNM1qZ8IOwR8VYwX7cqGnPUOJbX60wJstEEjkI2PnYqrcQ%2BnEmedyIgb4iglU7DtLscNyz9OT87MboFy6h8YaJYU%2BbGB1sxEFH6YfE8rH4XZzeCraOOGwDVwCrbyp%2BhHJi4Q%2BA6K4GtwgQYxvN1Fy2fRN7o%2B9TgW68jvebu4P1lLlvqZW37eBnjf3YXMD43RjQMrsoaXrH1katESs%2FOLD8%2FSzadXzKdzJV04s%2BRXnCRi3gHL3D4OWUZFPDZ7X3g3pGYIViABUUcDhHZI4z2xXfwuxc72TIOMoitGh27lC1ASOm%2FgTgL2%2FOp48R9yfKTZjlPCIGm%2Fzscp9aVpgmx%2FxOtCv1HikgdF%2FcfJL0d9rLxvjda2IAr4GIoCprFrc6BMIlGz%2FEtSW7cfdP1ptHeXrqay1MBPqPMV2zMUf72gZ5Edpl5njTbYMYB6Q%2FieOZGlUZ8Vf%2BdhEmwTcPwd%2ByZaPBGdlO2BfEe8S3Mbl%2BPFIWfX69U8gIQaVigagnU17ziKWhBJkheSLmOFSDhMngH2%2FubU%2B04FxMC7E%2BmqDW%2BEwQm13gQQQfmiBsRr%2F2Oe8IwqO%2FVvwY6pgEfCfAFoC2knhmUDM6H1oHBlMNsmIMwQdVd%2FNWEeh1F4aXIBodKHkEPqEgHu2EOxL53lc4x3BOo3AAtE7Px6i48Oz%2FQI93HHyzMc%2FKB%2FpMYVl8mUDVYDyJcd7PTVD3kMgs6bMlc%2ByaDzOF0TanHU7QiWoJnncP6Q%2BkZ5nPu2JRpRI%2B5nbKLtoeh7ucuNqExoeelhhWYo9A%2FYjbDjyaRmEkqTnx8aHI2&X-Amz-Signature=616f503ddd827c31e346ce94d14a0e12e70cf33fe1da6f9e0ecc897db1bb1220&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N5K2VW6%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T200826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIF1%2B9SEbHxb2QGKN%2FYut3eyMBFzvNO3wG%2FygTDxfvEx6AiAWUq0JL41HtneVP10ywxg41q1WWhr9SIFShw%2B4%2BCkUmSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMlnkaOdVXz07CgwBBKtwDGSEvemvWDt4Vqu%2B7VT6kmzpwJDIBRYOpXaVIz%2B2EIaqhpdUYzwv9GHIur754xjNM1qZ8IOwR8VYwX7cqGnPUOJbX60wJstEEjkI2PnYqrcQ%2BnEmedyIgb4iglU7DtLscNyz9OT87MboFy6h8YaJYU%2BbGB1sxEFH6YfE8rH4XZzeCraOOGwDVwCrbyp%2BhHJi4Q%2BA6K4GtwgQYxvN1Fy2fRN7o%2B9TgW68jvebu4P1lLlvqZW37eBnjf3YXMD43RjQMrsoaXrH1katESs%2FOLD8%2FSzadXzKdzJV04s%2BRXnCRi3gHL3D4OWUZFPDZ7X3g3pGYIViABUUcDhHZI4z2xXfwuxc72TIOMoitGh27lC1ASOm%2FgTgL2%2FOp48R9yfKTZjlPCIGm%2Fzscp9aVpgmx%2FxOtCv1HikgdF%2FcfJL0d9rLxvjda2IAr4GIoCprFrc6BMIlGz%2FEtSW7cfdP1ptHeXrqay1MBPqPMV2zMUf72gZ5Edpl5njTbYMYB6Q%2FieOZGlUZ8Vf%2BdhEmwTcPwd%2ByZaPBGdlO2BfEe8S3Mbl%2BPFIWfX69U8gIQaVigagnU17ziKWhBJkheSLmOFSDhMngH2%2FubU%2B04FxMC7E%2BmqDW%2BEwQm13gQQQfmiBsRr%2F2Oe8IwqO%2FVvwY6pgEfCfAFoC2knhmUDM6H1oHBlMNsmIMwQdVd%2FNWEeh1F4aXIBodKHkEPqEgHu2EOxL53lc4x3BOo3AAtE7Px6i48Oz%2FQI93HHyzMc%2FKB%2FpMYVl8mUDVYDyJcd7PTVD3kMgs6bMlc%2ByaDzOF0TanHU7QiWoJnncP6Q%2BkZ5nPu2JRpRI%2B5nbKLtoeh7ucuNqExoeelhhWYo9A%2FYjbDjyaRmEkqTnx8aHI2&X-Amz-Signature=e01c86422090b009f490630071f9b17a3ffd14e0cea7d10a9d47e90f60777cdf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC2RTHEN%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCDWLz8ZWW8wCU0r34T0k%2F4EYQerlu2h39c4z2eUgnxhQIgJcUQ19xnkNhm6n0rklejfCyPnZGrH5AFKh2FQOhf2c4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDPowWgC4gUiUQ9kT%2BircA32Mu1N62vRz2xIPATiVPGwk4M9IJmdv%2F%2F7GEbZBMlmL8l9H8xg%2F9bLJV34dbRPXUeizQevvNPxUkh15mE6v%2FzHx3KZqIlQCtBxb3vMZZx5idYPSRw%2BSf2djQ1DE3RB640ZcWqYVR%2FnDeyNAfPqvE7FlqjrP%2BFmrHnsz29q8stiwsoTUm8f6F9L9n2oIvD5euCftaC9pNz59MO0XD5NoE55FsCFKj0%2BpPrslv1AxlELxhk%2FMThO5ODD3pEmTUDSOWKwqdjoEVwS%2FGgqZ8B08mFqoPJ83pPnAR3WB782Y3RF3r%2BZKhp%2Bv%2BYqr2I27UQ7RfJ2QB7Fgh30rZoxg%2Bw7r9dkfy6H3WRIffw6azbal5VLz2Xk0%2BA8uXPoKZdp7Kjl89wyScJI11OOqYY8r%2BOhsUZyUQs5kVbJIEmvG%2FLJx7lPp%2FX21F97qWvLGFRdOXY0Byob4f8ahW6ziKXXqWQDbhEXSO9qKrdqNExkc%2Bq%2B%2BAtBvtL3jIg4H7BxZLgoZEomQEiz7%2BV3Aua5Rr6epEumbYDJCbMpsem9mdZnVtwisZhpg59pqn63jSQ9Oc%2BO3x%2Fy8ROLuM53Wq%2BDUfFJiCoSyK3PawXKVf38gd1aqwpERrDrmZ4SNVOC%2FLfmTWvDmMPzv1b8GOqUBtxGIBoft8A4j3GbB1vAsOoG9sNLccfkzUg85iIWy6iVnDipm0vzVtgWaSWddncQs6Y0ecYJXbl7%2BQ3k%2FxXRbH3q7fV%2BZ2lAQ%2B%2BUmTQUNWVeu1scmf5eUJd74v45Y6aSBuj8ZgoCDwOmwIe8rRiyTtk3d76FQatl2NJQBZq%2FGHkti17IIn9Ee2X8EW2qiYaSSlui%2BkIhIEDnkguDznkAjefof%2Brcn&X-Amz-Signature=e3fc68db2edbc65a7ca6f8cd167310ae19880ef9005364dbfc5147cba1d811f7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV37BXCI%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCiKUMy5%2BMqr74nEiRTH6htjvweztdWpVZTajw%2B6G36yQIgGTsNuOCvLkoEWjFhx%2BPVnBIXE0zaDGx2q2g9KNQIaoQq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDMJitBE%2FkQEvj62FHircAzDWsIFXDxg0vkF9xsB5cUAn9FeQfuGtdThXib74cMBNmCGvWgTlKMVKp3sUdkR1RvnKcp4w7LRoZt%2BkGQOJYFI9psI5NA9jj1mCnhon%2FguFOdAbjIskO3jgZc8HeTvWeuI%2B456D0qTFznXH8ZuNNSB1bNe61ClywyLzH%2Bv7M%2BJHtq5v6L5UhhR8eJifv0vq66NxqRjZvwskLg0%2BOUC3dezGys%2FoLuc93d72XeoL9z4UzTLVZEe9OIl2aNUZ%2FGQEHsaszWjTymMp7dYQ%2BIw4UcZ5v3ES1nvFRjovEBUjWjUamG0gpZuDsOQjhPuRldxkmTgfzEvUGFqkj2pq6F1%2FMtZSlpcpC8NiI1gH3t291OX5Ofup9uA0o1VZgCOYDnOx9Hs4E0I8FD%2BbU9dmkHzp5pDPe%2F4tFyKgX4OEyHbxYTfPbKDr5P5DUpvCQFSvXzMJIBsrNb8yEm6zKc6Kbp4QdtpHLDWnpkM1ee%2B71qz4wSDvqlXpWNfX9aUtnYiB4JPBW0SairDvdm3mOEqmNmPPGAwi6GWyiIJPGIqgZP%2FMiGO9NUC3gzSBQJi6n4QX4IUhzo6DYF3TKDKhl%2F2skl7qNxsrzGQum7iR2SVrBmBi%2F4CX30woWOB%2B6oYwUHAZMJvv1b8GOqUBzOAwZEfhGm7yB52dT6GcuKN%2BFYNpb0wDp2efxY6XJRy9EsV%2B2E42OK7hZb%2FAw9QI5E19cZe0%2FSxDLHfSPAFSh6Ucx4cOa8UQgarN6fLPVRsOv02OxM4kf7vchZkmEoJCXoEp5K0k%2FKro30mtiMOQuxp9PymRh8RZQGw3t3nmjgOelZ02BNeNoDZe26EGkjjuc5BBpaVHJR0Ah03nDLXTnlOLqGFD&X-Amz-Signature=262d4d29ca0b1fded975c9503012ae1930238b36be4c84aa334a6268f1978aee&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N5K2VW6%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T200826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIF1%2B9SEbHxb2QGKN%2FYut3eyMBFzvNO3wG%2FygTDxfvEx6AiAWUq0JL41HtneVP10ywxg41q1WWhr9SIFShw%2B4%2BCkUmSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMlnkaOdVXz07CgwBBKtwDGSEvemvWDt4Vqu%2B7VT6kmzpwJDIBRYOpXaVIz%2B2EIaqhpdUYzwv9GHIur754xjNM1qZ8IOwR8VYwX7cqGnPUOJbX60wJstEEjkI2PnYqrcQ%2BnEmedyIgb4iglU7DtLscNyz9OT87MboFy6h8YaJYU%2BbGB1sxEFH6YfE8rH4XZzeCraOOGwDVwCrbyp%2BhHJi4Q%2BA6K4GtwgQYxvN1Fy2fRN7o%2B9TgW68jvebu4P1lLlvqZW37eBnjf3YXMD43RjQMrsoaXrH1katESs%2FOLD8%2FSzadXzKdzJV04s%2BRXnCRi3gHL3D4OWUZFPDZ7X3g3pGYIViABUUcDhHZI4z2xXfwuxc72TIOMoitGh27lC1ASOm%2FgTgL2%2FOp48R9yfKTZjlPCIGm%2Fzscp9aVpgmx%2FxOtCv1HikgdF%2FcfJL0d9rLxvjda2IAr4GIoCprFrc6BMIlGz%2FEtSW7cfdP1ptHeXrqay1MBPqPMV2zMUf72gZ5Edpl5njTbYMYB6Q%2FieOZGlUZ8Vf%2BdhEmwTcPwd%2ByZaPBGdlO2BfEe8S3Mbl%2BPFIWfX69U8gIQaVigagnU17ziKWhBJkheSLmOFSDhMngH2%2FubU%2B04FxMC7E%2BmqDW%2BEwQm13gQQQfmiBsRr%2F2Oe8IwqO%2FVvwY6pgEfCfAFoC2knhmUDM6H1oHBlMNsmIMwQdVd%2FNWEeh1F4aXIBodKHkEPqEgHu2EOxL53lc4x3BOo3AAtE7Px6i48Oz%2FQI93HHyzMc%2FKB%2FpMYVl8mUDVYDyJcd7PTVD3kMgs6bMlc%2ByaDzOF0TanHU7QiWoJnncP6Q%2BkZ5nPu2JRpRI%2B5nbKLtoeh7ucuNqExoeelhhWYo9A%2FYjbDjyaRmEkqTnx8aHI2&X-Amz-Signature=09c538ddb4eb2463fb8bd4776b8f3b3e817d15905595a590b20778ac141d7aa6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
