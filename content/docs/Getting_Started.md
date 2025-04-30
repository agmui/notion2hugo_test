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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIN4XTVY%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T033029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIBKYr22Ko1VMhxMAAXWwY7ICICMOMWkcS6JrvB5DDJkJAiEAgS5VuuOEPbX4IRl%2Bde4UZ530IRvFdRslLkdwbJXe0KgqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBg5gW8Av0mDrGafzircA0VdeQZgyioTEDOnKIJ72qo754N6SurUmsV%2FnACUOXUG4vZ3QZzwLPChrxbylS%2BqEd4GA89RCk4C6Oyc2UtGgtyd9v8ZiVqJsCvBT6LtL%2B5qvr7IyoDZCZxXrNIdMEDmroZR8KpJ0mF%2Bnbp466zAo7IZvY%2Fw5VtKSZkERTrUQXrwf%2FOouXoQXJc%2Bu0FwWTCMOKAHR0Vzsy%2FFJ2Gc0e7nFa26QjKYtFPqdCAQn3N9RT9R%2BjVXjSWdilA9umhl1m5W3xD8rWopmytXnD1uSTCSDxYuHjF5yA6aui761ji7lJP71EIbzLvHRlGt8V4%2BSUtcDwDMyrgaRT%2Fai9FYE%2F5e44fS7nadV%2F9ITCnI2voGdirwx%2Fu3ryOaIpGwLef0maHeQU3up2IWXjkKqAX7hQXv9t1IM4jCnCvs%2BTgDaDr1DwvC8Bho%2Fhr9LBzw4nLnRSK%2BOYytWgk3dCg5g3fH6wWpPDaQItMtivlwL%2FCxKTnpsGqYVKXYqbY%2B80aOUc46R9LtkoElY%2F2aFXamb6zKJmMa6vUKqM8dS0OZ5ga7Vfx8NVN6kdrtD%2FdndhKQjrqn9AxDe06iGTu09n50078mcRkpC1LHRNpw5vGB04FQDBZAIKs3XrUMgrbwhgb7LlZWMJqkxsAGOqUBhFrlA5cEpy6pb8rOzs2RRoL5pvi5gLP9JCtKALBHbb61Xon5Ek0cBNVocp1eRF2bSzFoimL41QfFgGyUrl8c3X6s%2BqVm3uRbO9hlX3TQAYCiiKU37PytctqTggzmMbLg7tPLL0RPu3eMlTfElyHDt%2FqT6yTexR1G%2B7ZjcbMbzryBFmc%2Fi13x3ZaGsumX9182sWyum4o5ptk1Q5YvySMzdpMAv%2FUY&X-Amz-Signature=702642721be7166e432332207d995d93056427e1885e0144aa0fd971b57dce4a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIN4XTVY%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T033029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIBKYr22Ko1VMhxMAAXWwY7ICICMOMWkcS6JrvB5DDJkJAiEAgS5VuuOEPbX4IRl%2Bde4UZ530IRvFdRslLkdwbJXe0KgqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBg5gW8Av0mDrGafzircA0VdeQZgyioTEDOnKIJ72qo754N6SurUmsV%2FnACUOXUG4vZ3QZzwLPChrxbylS%2BqEd4GA89RCk4C6Oyc2UtGgtyd9v8ZiVqJsCvBT6LtL%2B5qvr7IyoDZCZxXrNIdMEDmroZR8KpJ0mF%2Bnbp466zAo7IZvY%2Fw5VtKSZkERTrUQXrwf%2FOouXoQXJc%2Bu0FwWTCMOKAHR0Vzsy%2FFJ2Gc0e7nFa26QjKYtFPqdCAQn3N9RT9R%2BjVXjSWdilA9umhl1m5W3xD8rWopmytXnD1uSTCSDxYuHjF5yA6aui761ji7lJP71EIbzLvHRlGt8V4%2BSUtcDwDMyrgaRT%2Fai9FYE%2F5e44fS7nadV%2F9ITCnI2voGdirwx%2Fu3ryOaIpGwLef0maHeQU3up2IWXjkKqAX7hQXv9t1IM4jCnCvs%2BTgDaDr1DwvC8Bho%2Fhr9LBzw4nLnRSK%2BOYytWgk3dCg5g3fH6wWpPDaQItMtivlwL%2FCxKTnpsGqYVKXYqbY%2B80aOUc46R9LtkoElY%2F2aFXamb6zKJmMa6vUKqM8dS0OZ5ga7Vfx8NVN6kdrtD%2FdndhKQjrqn9AxDe06iGTu09n50078mcRkpC1LHRNpw5vGB04FQDBZAIKs3XrUMgrbwhgb7LlZWMJqkxsAGOqUBhFrlA5cEpy6pb8rOzs2RRoL5pvi5gLP9JCtKALBHbb61Xon5Ek0cBNVocp1eRF2bSzFoimL41QfFgGyUrl8c3X6s%2BqVm3uRbO9hlX3TQAYCiiKU37PytctqTggzmMbLg7tPLL0RPu3eMlTfElyHDt%2FqT6yTexR1G%2B7ZjcbMbzryBFmc%2Fi13x3ZaGsumX9182sWyum4o5ptk1Q5YvySMzdpMAv%2FUY&X-Amz-Signature=2cd3dbc1839b6d4ec9c9556d029f5cbd3c8af1a43987b508c616b1c2286cf725&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIN4XTVY%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T033029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIBKYr22Ko1VMhxMAAXWwY7ICICMOMWkcS6JrvB5DDJkJAiEAgS5VuuOEPbX4IRl%2Bde4UZ530IRvFdRslLkdwbJXe0KgqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBg5gW8Av0mDrGafzircA0VdeQZgyioTEDOnKIJ72qo754N6SurUmsV%2FnACUOXUG4vZ3QZzwLPChrxbylS%2BqEd4GA89RCk4C6Oyc2UtGgtyd9v8ZiVqJsCvBT6LtL%2B5qvr7IyoDZCZxXrNIdMEDmroZR8KpJ0mF%2Bnbp466zAo7IZvY%2Fw5VtKSZkERTrUQXrwf%2FOouXoQXJc%2Bu0FwWTCMOKAHR0Vzsy%2FFJ2Gc0e7nFa26QjKYtFPqdCAQn3N9RT9R%2BjVXjSWdilA9umhl1m5W3xD8rWopmytXnD1uSTCSDxYuHjF5yA6aui761ji7lJP71EIbzLvHRlGt8V4%2BSUtcDwDMyrgaRT%2Fai9FYE%2F5e44fS7nadV%2F9ITCnI2voGdirwx%2Fu3ryOaIpGwLef0maHeQU3up2IWXjkKqAX7hQXv9t1IM4jCnCvs%2BTgDaDr1DwvC8Bho%2Fhr9LBzw4nLnRSK%2BOYytWgk3dCg5g3fH6wWpPDaQItMtivlwL%2FCxKTnpsGqYVKXYqbY%2B80aOUc46R9LtkoElY%2F2aFXamb6zKJmMa6vUKqM8dS0OZ5ga7Vfx8NVN6kdrtD%2FdndhKQjrqn9AxDe06iGTu09n50078mcRkpC1LHRNpw5vGB04FQDBZAIKs3XrUMgrbwhgb7LlZWMJqkxsAGOqUBhFrlA5cEpy6pb8rOzs2RRoL5pvi5gLP9JCtKALBHbb61Xon5Ek0cBNVocp1eRF2bSzFoimL41QfFgGyUrl8c3X6s%2BqVm3uRbO9hlX3TQAYCiiKU37PytctqTggzmMbLg7tPLL0RPu3eMlTfElyHDt%2FqT6yTexR1G%2B7ZjcbMbzryBFmc%2Fi13x3ZaGsumX9182sWyum4o5ptk1Q5YvySMzdpMAv%2FUY&X-Amz-Signature=0dcd237f592adffec0ab36cb31129c30a88d25198e74606071ea763822cc70ec&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN4JTWIV%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T033033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCPJjAYjocXvb%2BdV4VLBdGYZSxtJduRyNaIrXf5KvL%2FJQIhAMY5PTHiXCFaAnoDAVqfpMxzkqY0EzMDFnl7H4SirarCKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4pMSLrWrgsIooJsgq3ANzy%2F8BEMp9w%2FHl2hXh75J220ydLbqav3IjL9QQA3dYm2wY7UtwyrpFrPAkyiIL9BpNEoqVm32uneoOqymcp9tFK%2Fiy8Z771rKqNhX1n8EXIdZMJxGd%2FgWUfi9P9mGffmc%2BP4lDUF%2F%2BlOwb9VgxU0imThagrF5EYE6pdofuXMN%2B3hh%2BQ2H6utT%2FOVIrmXKhDX1WSmolXNfvHRad7INAbSX7avbs3qPVlfBvsuuPaw6fZ6f4SJUmqgM2x2iNOUsUVrYghw2nKSb4ibbBUWEPUxrNw%2BnG9Jxd2ehP6sUMEJifR7LFEyeW46yUFop6OJhi2iwdMurXm1CbNyCDaTiUnluJo1tvFvrNiT6ueBYNyj4MjiGt%2F49h38Nld62lcYBQOFBWtd%2FhHvIR1pw440NeB%2BouBZrgigYbNrU2xZxnGL62XPCj6pu7p1QCN8xiG90a50Co2p5iME2ef9ZB2uBrRfU1T6C90SxmRLy5SfSmqItoigzb0i113pUKUmGfKmSRu%2FwFJftEKWGd9iMz92cmwHMFNJbSknpTHo46wwb9UsEt8Rzc4VRl%2BB2EJcqJPxorqR7VTCdkATzn2rVhJK28Jn%2BnijiqFGI8%2B31efzjfiQsC4oYiH%2FJDFlcD%2BfZIYjDwo8bABjqkAbDImzTQG8HsL2IcOAdFZeJ5EKM14SnIOJ1L6O8qGp%2FW4KNS9D3ljIelWydVBJgEan41Ik%2Bhia307MlBdzAcDNiz%2BeXAHPGcSinoLpe0px929FMCLXtRXOCQbswwD0570FceQXCClq8JE%2FzTr4BkqiMEy4UrDTmDLGyr70NdJNIfq5Mf1yypoXmZPw08GXmMsQJNjZOGnpAFMV4N1H6i7h1wc383&X-Amz-Signature=9a36bcb0cfb5d0554ee7d2b1d94e5a21a4f5e0fc90117fa7cc51d9b4924f783c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HTVTEXM%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T033034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIGvhaT3L9O5QVVtW1Ger%2Fb0MReL7YXMShYuGk7tgL%2FwjAiEAo2M0Kt6ueoKRaZIz6cKFK6kzoUNW9jYMLRaxLYBw4nMqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYQ1MQ8aiER1bNQ7ircA4HXjRE6McKm2s646rJLDWpoDyX8hXVM3EWLmO8LxsS18YhL1QvVuYRFyL%2Beb33pwfcaW7vASOIjwY31Y9UscU6bxwjDUSrB6Jjk3Utd30rFJ1fsmih42XiPcYgmdWM28nJIUgP69l%2BEW1eMy6YyAJXSExCg4%2FMk8PkBqkSM4NjnbryHP5gXwE7LmqPamnfydU6PKMIz3DMuf7BCZ9oiQ%2B6TaiUjRImoNeTxI8%2BUkA6aKD9wX60Rj6vDF9ambKoUAvuTLRpe20WZFZ2Di%2BvWzbOTKeW2%2F42Md9W%2B5biKgzci0F8LmZZEAdZl0rw0tngSlmgXFIKGcnfTKAdiqFy1k%2BuOya7V896c5c6bvyWVCCe74eKUKKQ1MOCCGDH545P6yjNLUsxSHfAqxetW6DFMFXZxc9dwVf1ixNwToW2aV7%2Fvj8caGoT9Xty8hr2Ld6cY4626EJrOu1EvFoekn5MrZF79pIcD4%2FgatNHZ8L2%2BOwyISmOt8sceQoXKwYS6JjmxFktkw2ymYxqnU8Q%2FK06eAGcmsNiD3uy44ku3GY%2F8RtG2XAlnNs12RAQHD9Tm3NOko2qt8t3KWChyeDCnwMShiEwsHQ7HdMOPGFbpcudVwZygZyCuKUfUU5j8K8h5MJqkxsAGOqUBHaL9sPO3b%2FUGYwyy2dkiA9VEur%2BA7huectcOKOq9dVThKKmmhTOwEhWcZieFEbaiYPTFotgERJl%2Be073eR242dmAqTsMsdXl02ac6jLIIkPMkfEqqOHIeVnk4YcREABcK4Ee1NfjqXnc%2BkX38VkvVuYbSqJAzXefKBQW%2F55D6qICv%2BE4EqtJw6MKCx%2BL7NlsQldG%2F8hRFxO5nyXBlXDzckoDUCGD&X-Amz-Signature=4571252a7a3e59b785014a27f4c90df2e9b2bd566f00477d50c85792186b9c51&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIN4XTVY%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T033029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIBKYr22Ko1VMhxMAAXWwY7ICICMOMWkcS6JrvB5DDJkJAiEAgS5VuuOEPbX4IRl%2Bde4UZ530IRvFdRslLkdwbJXe0KgqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBg5gW8Av0mDrGafzircA0VdeQZgyioTEDOnKIJ72qo754N6SurUmsV%2FnACUOXUG4vZ3QZzwLPChrxbylS%2BqEd4GA89RCk4C6Oyc2UtGgtyd9v8ZiVqJsCvBT6LtL%2B5qvr7IyoDZCZxXrNIdMEDmroZR8KpJ0mF%2Bnbp466zAo7IZvY%2Fw5VtKSZkERTrUQXrwf%2FOouXoQXJc%2Bu0FwWTCMOKAHR0Vzsy%2FFJ2Gc0e7nFa26QjKYtFPqdCAQn3N9RT9R%2BjVXjSWdilA9umhl1m5W3xD8rWopmytXnD1uSTCSDxYuHjF5yA6aui761ji7lJP71EIbzLvHRlGt8V4%2BSUtcDwDMyrgaRT%2Fai9FYE%2F5e44fS7nadV%2F9ITCnI2voGdirwx%2Fu3ryOaIpGwLef0maHeQU3up2IWXjkKqAX7hQXv9t1IM4jCnCvs%2BTgDaDr1DwvC8Bho%2Fhr9LBzw4nLnRSK%2BOYytWgk3dCg5g3fH6wWpPDaQItMtivlwL%2FCxKTnpsGqYVKXYqbY%2B80aOUc46R9LtkoElY%2F2aFXamb6zKJmMa6vUKqM8dS0OZ5ga7Vfx8NVN6kdrtD%2FdndhKQjrqn9AxDe06iGTu09n50078mcRkpC1LHRNpw5vGB04FQDBZAIKs3XrUMgrbwhgb7LlZWMJqkxsAGOqUBhFrlA5cEpy6pb8rOzs2RRoL5pvi5gLP9JCtKALBHbb61Xon5Ek0cBNVocp1eRF2bSzFoimL41QfFgGyUrl8c3X6s%2BqVm3uRbO9hlX3TQAYCiiKU37PytctqTggzmMbLg7tPLL0RPu3eMlTfElyHDt%2FqT6yTexR1G%2B7ZjcbMbzryBFmc%2Fi13x3ZaGsumX9182sWyum4o5ptk1Q5YvySMzdpMAv%2FUY&X-Amz-Signature=1414106295f732edc2fdcb253859efa61da619a351885a664239b690569d8e3b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
