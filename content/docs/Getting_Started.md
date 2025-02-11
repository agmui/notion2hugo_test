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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD6MG6FI%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T040936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHzHd7QT4GSX5LfyyGAnosC4w5%2BRmxTnUgK2FXiDzNLaAiBzQH5Rtw3KLtHT60E3oEQdatfTrkVuanKWEk2BP0LRdyqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEdBJr%2FIcugMAJ7IrKtwDByub8axcx9fbtrJy3T1HsO%2BL3neRp8t7WsGOkbiZTK8UlR7RP5UEq1LIGtvvXD9FGSZrG5lVA6lMLdRrw%2BB%2FCT7IFHfis8xCksV0sQr2lETOJYdvvL%2BvjAQK7Obi8qqVwpSbgZttvErAIRTYkFh%2FmZvwOEVkj8VKH6fnJ4JWgyPqaUYzPINlNozBkyiNu7%2FvR6H4LnbThy4VasTKB4sHf6QpKQsStqudBtEdtc1ZLTVGcwCBh67HyzHIVl47%2Bgtdx%2BzOpVy%2FCupgl6cQpPP2FRm1Qm%2BJWkDwFfFUqM8JQJ7LUIxdrS1ERO0QHne5r2Yed8464C7%2BwkrGhRu1WkAfaU0GYt%2FDG6DqLlpGGWa5XBLA%2BOycScPjSwQQSYM%2BYTsGR6LWEPQkBi6KNmz3upqnHPgsU%2Fj8OFHN9fP%2BJ%2FY%2FiugTbz98uS%2By3IPK6ewdiylv2f2GBbbKWGeUODrqVqGTABUfz3Lz%2FIGgCGpwZKo%2FHLb%2FeA5NytpwFurdrTEWoLFmRwYkUBhZZ7F2K8FZ8m0Sy4sOFYKvFxekArGp6T93d5WkhAzOaXw7L1PAeCtJwI%2F9D7s1AhELNajOZLx3Z1%2BNkhk20nN%2FuzjHEA06Ju8F923Z%2BD20mRKTSOnupjEw%2FJKrvQY6pgH7%2F79qYr9B7nd1FhAAIYgPgCduUnNLBfA%2BQBd12x7taCmGLM4YOcsgFEehEfsu677W%2FHlFpKNJc9zxEhw2436KkHCpJBpYb4XiaNR5KLOo9%2FBxCzfSUse5EJ%2F6DX2nSWH2wnB2uWZ81mtOikP5ToYjCVsjcLxhS0nvulUBwPqRdmyjHlWlGLCaZLon9sI2XgZzzgcKRAnSQWGEO4SZQKklxFw4mmgm&X-Amz-Signature=e309e6cb493b324c4ec646716034183d5d1f7b4eec98b321261f7f0ac96bb0d7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD6MG6FI%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T040936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHzHd7QT4GSX5LfyyGAnosC4w5%2BRmxTnUgK2FXiDzNLaAiBzQH5Rtw3KLtHT60E3oEQdatfTrkVuanKWEk2BP0LRdyqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEdBJr%2FIcugMAJ7IrKtwDByub8axcx9fbtrJy3T1HsO%2BL3neRp8t7WsGOkbiZTK8UlR7RP5UEq1LIGtvvXD9FGSZrG5lVA6lMLdRrw%2BB%2FCT7IFHfis8xCksV0sQr2lETOJYdvvL%2BvjAQK7Obi8qqVwpSbgZttvErAIRTYkFh%2FmZvwOEVkj8VKH6fnJ4JWgyPqaUYzPINlNozBkyiNu7%2FvR6H4LnbThy4VasTKB4sHf6QpKQsStqudBtEdtc1ZLTVGcwCBh67HyzHIVl47%2Bgtdx%2BzOpVy%2FCupgl6cQpPP2FRm1Qm%2BJWkDwFfFUqM8JQJ7LUIxdrS1ERO0QHne5r2Yed8464C7%2BwkrGhRu1WkAfaU0GYt%2FDG6DqLlpGGWa5XBLA%2BOycScPjSwQQSYM%2BYTsGR6LWEPQkBi6KNmz3upqnHPgsU%2Fj8OFHN9fP%2BJ%2FY%2FiugTbz98uS%2By3IPK6ewdiylv2f2GBbbKWGeUODrqVqGTABUfz3Lz%2FIGgCGpwZKo%2FHLb%2FeA5NytpwFurdrTEWoLFmRwYkUBhZZ7F2K8FZ8m0Sy4sOFYKvFxekArGp6T93d5WkhAzOaXw7L1PAeCtJwI%2F9D7s1AhELNajOZLx3Z1%2BNkhk20nN%2FuzjHEA06Ju8F923Z%2BD20mRKTSOnupjEw%2FJKrvQY6pgH7%2F79qYr9B7nd1FhAAIYgPgCduUnNLBfA%2BQBd12x7taCmGLM4YOcsgFEehEfsu677W%2FHlFpKNJc9zxEhw2436KkHCpJBpYb4XiaNR5KLOo9%2FBxCzfSUse5EJ%2F6DX2nSWH2wnB2uWZ81mtOikP5ToYjCVsjcLxhS0nvulUBwPqRdmyjHlWlGLCaZLon9sI2XgZzzgcKRAnSQWGEO4SZQKklxFw4mmgm&X-Amz-Signature=8279e1023a2caf6233666c161b9bda5d7694cc7be8a8f9dadb89973dfb64ee7b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REK5JEQ2%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T040938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChcQsHO4ULvvEfp%2BNgO3ntV0Oa9r21ir8Y4%2BPngzYyHAIgH7vWtuz3KxcjlGNuOdcyvvkqMOb6oqOGCv306xinRdEqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBAx%2ByESC4tOEyk19yrcA7yET%2BFIbCZO6wMZpjLAwjgRreKMhipKouIL3jrb9wgbyzGQq%2FT%2F5jynZnP5r92kYMUS%2FGnR6Jwh6lGEtjS5vT6Tsvj1i%2BpGGzjOeGt4lfD%2Fwf4oCshEqskky9uZ8bsIBnSBtFe4BAXTUGqjgHBDpOTBMmqHu7mUrOe1pejsdnXq33zibkJmgsyMGMi35ZKNJkg2k4q3Bj3ESJZ5S0Krmz2lAd%2BNIZfgR2Jtpm7S7lRyozPTGryD8vQi%2BaHqMoKBQ1b0hNw6A27hpT7na47kdK7sXiHFTWNJZHozRNq2duVdRgoytaI%2B9DsjWXRcX75ew2L2aac%2FesaGa5ZHRhGfP71OvzmUvR%2BO6KHM5bFYRVGt8cgaCE9xAcXVy6YIjL74CRQ9OBWEB8JK1rO%2BnEZDfxPjNiF6TPh42e8woK41xD0Byhk2ltv%2BbB4BRksFfdNedAuBYE1ermLlrvYUMvQdqu3UevaAzaLO%2B0qax4MYXb7fjS5QHW%2B4QazEH5IYw5rn%2F%2Bt3IkJDJz16VX%2Fy7t1PYQdaI0Zbp73sHwRHbZ0wE%2BbAz8ZsjNwX7JdQISm%2BZCB4n0zY0IecVVjNCK7TqDYbXP3bvowi9lhzqKDe8Z0M77g05D3ETdsbq%2FEDDGLeMJeTq70GOqUBBKJ2JyEsUU8fOsinqmLjHaTRHEWfGbtMNXQ3IoaFrEqVx%2FXWn%2FE%2FJXXr7M6WBkFeiIZWSHwygd6FBfFZli2%2FOetXAYoYt6mKhW5aNDPdkAPn4MdYDrj7AknP%2BGki5GH6P4vso5Oy5gDZR45Q9GsTrqJqRtdU5XCWV4QfgfnrGKN8EywD%2BPQDuE4V6MrcwPPtgwTEmgv3KjF4hdshIVdSNOAelQKz&X-Amz-Signature=fb66a3a6fc30972278fcc400d6a03f78daf9537f34d47799eea3728f0cefa023&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFSOOBIS%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T040938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCJL6YdEs9%2FJldUMcrSqI2QssXJnPV27os0a0Kf%2BMmOgIgLAf5MMYUewfOJYw7UhpxgVstaSyZ8g%2BXR3BtWsCjQYkqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpOwJ8jEG6YV%2FCVFSrcA14yAEirn0EbzzHiv%2FbNH5DgOQ7d1SHKxLrX%2Fe8%2Fp0uxz0as7su3dXnloHVMnbvrETLV9snCkI9LYbWJqKG94H4pSWAJDO3sQvhRCl0sciXRCCl57uh4kPpNwkTYMhd38E%2FPvoALZmZhO82RNxEh7XnosQsNWfMmdyTxnW7%2FOAiGGdcG3CLPvyZwE1UwoSpwnX6Ld3oapC%2FmAsDoO2v8%2FNoY75d9pI2%2BLP8ljEpfwz7YoxpG7VsijQRtodj3g03nlOtJTl4DD4gb4wt0OxwLgpiBvAFiQiC9w7IOWxvfezHCRqn7glx0q5e2%2F2ieNYYHiNPEMMFrimpHIIetKgIofbzlw5C6ZOeiSsiJfmrcfVNHhTHkGLJW%2Ff5QW0Wl6yPGtM9t5ylCS15fZCua1XV7E1lEOWrKbQvjPXESIpNiHV65hKyC90QR%2B%2FA5JTatUzAx9SpX%2BHg9RU8Xck178HFl9mFrAWSQ2rHdmFv71HAYkBWRUxIWtEO%2BIfAq9p6rmdBZhioZ2QFYLtTTObJ1Sp4i2T0bLZcmCfvcctKv0A2K5nZhgv4zVTnJTlrhHQ1oYWoHxMk6nfeexcaoOl4sTNu4atleYM%2Fs2lFNcyv94oc68Ltvj9i8nlKhT8WlDKBcMLySq70GOqUBxKiBBkOOkvxWfgGqbndrRRtvqCmXLmNCqlRyx7yrL9PU82WT9uv3eHLvy5xrCnUkItrSEZaVZQekChJiYHoyPPahG3j3elj5tKbGR9XTVCNj9iG9vmQQDeOj4aGvvxXQX6gA%2FaApvUl60KJJe2%2Bn78lK4LgAPD1NZbPSHN%2BKcUxNGd7QIBafp7DrbmGmugkbwuJLdyQJRuZf49%2BT1XWhEN8TuR3X&X-Amz-Signature=c64997d4fe32023f94628b760e35febcd121877a06cdf32549cdec11eb059dc5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD6MG6FI%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T040936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHzHd7QT4GSX5LfyyGAnosC4w5%2BRmxTnUgK2FXiDzNLaAiBzQH5Rtw3KLtHT60E3oEQdatfTrkVuanKWEk2BP0LRdyqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEdBJr%2FIcugMAJ7IrKtwDByub8axcx9fbtrJy3T1HsO%2BL3neRp8t7WsGOkbiZTK8UlR7RP5UEq1LIGtvvXD9FGSZrG5lVA6lMLdRrw%2BB%2FCT7IFHfis8xCksV0sQr2lETOJYdvvL%2BvjAQK7Obi8qqVwpSbgZttvErAIRTYkFh%2FmZvwOEVkj8VKH6fnJ4JWgyPqaUYzPINlNozBkyiNu7%2FvR6H4LnbThy4VasTKB4sHf6QpKQsStqudBtEdtc1ZLTVGcwCBh67HyzHIVl47%2Bgtdx%2BzOpVy%2FCupgl6cQpPP2FRm1Qm%2BJWkDwFfFUqM8JQJ7LUIxdrS1ERO0QHne5r2Yed8464C7%2BwkrGhRu1WkAfaU0GYt%2FDG6DqLlpGGWa5XBLA%2BOycScPjSwQQSYM%2BYTsGR6LWEPQkBi6KNmz3upqnHPgsU%2Fj8OFHN9fP%2BJ%2FY%2FiugTbz98uS%2By3IPK6ewdiylv2f2GBbbKWGeUODrqVqGTABUfz3Lz%2FIGgCGpwZKo%2FHLb%2FeA5NytpwFurdrTEWoLFmRwYkUBhZZ7F2K8FZ8m0Sy4sOFYKvFxekArGp6T93d5WkhAzOaXw7L1PAeCtJwI%2F9D7s1AhELNajOZLx3Z1%2BNkhk20nN%2FuzjHEA06Ju8F923Z%2BD20mRKTSOnupjEw%2FJKrvQY6pgH7%2F79qYr9B7nd1FhAAIYgPgCduUnNLBfA%2BQBd12x7taCmGLM4YOcsgFEehEfsu677W%2FHlFpKNJc9zxEhw2436KkHCpJBpYb4XiaNR5KLOo9%2FBxCzfSUse5EJ%2F6DX2nSWH2wnB2uWZ81mtOikP5ToYjCVsjcLxhS0nvulUBwPqRdmyjHlWlGLCaZLon9sI2XgZzzgcKRAnSQWGEO4SZQKklxFw4mmgm&X-Amz-Signature=4f6f65eaa6d4173a829657ddb645b9657009d8299e27fa6f5b1688e0b0cbc7ce&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
