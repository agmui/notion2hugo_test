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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CNATFRC%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T140833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcCsj5VkocJylyEbwdUCma3iUqE7NhxAFXJgLFSe4XnAIgXCLH5Njdec1HhBI5sd35OKwZq6ZGDl3LId24NQznqC0qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM5G4VOqBitHospRdircA3HjceWbyAsmMZPlKUGHfPpukgA9kQXSj4pGebP0Pi%2FOkbgAnTx4Bc0%2F%2B7HXzLZdkz1i7l6m7tkDNqB2KhGU7tB%2BBsyqSn%2FSW5PJa%2F6TpAEvd2vqL74eUWN%2B6C%2B%2Bq%2F2py1mo3ZQ1w6qzFVkyM8NIWm%2BXDqbOW%2BezOe04oV8dV8kQldlrUSofib3g1LAeZ4yK6YYadn5v5toSK0SiKHQs6xo61RiYXIL6%2B9dUWvSSzgczFN5iCsfei%2Bg2OdyMNCkqgLJBIUI67ygF79Ww88z6dFVmoIN5PpgVYrq0xBclydj8Em3YIYBGpVf1rSHztNtoACydTWSOCrtFsjfMhaF0tJ3aH5oSwLSN7QyTmve0E9DTWPPgrCisyBmahULLnKrWkeg1joH80JQ0dWcTibfROxFXb3BclZO1tGJi6930PDHmw4akgEk6JBTyRjknW3R%2FjyGkX4U%2Bd%2F1YAe7F%2FWR6iEpdipopMhhFCqrU%2FvMjxiyc6l9vHRqqqWnBaTtPPPjSLYKZya7T7mz6ebmfyXAsrJ32foJZz5NeSFuydzRAjGAuU%2BW3sBaUlz0NmfVChQgT5M%2FRf4iaI8zML%2Fi9%2F0QrLrG1H36UTOXAUI8t6zwNjEBTPEJV30IRUrts70MEMImy4cEGOqUBFZ9pMQrg82u2fEwsoBS3nzYFrIu4DajVQj7zeU5w6s%2FOQo7DjveTviUs5QcYMEcXxBOJFgzm%2BdF9Wg%2FcB6IThaeOtChrFuhEhc1tuE5Yb%2BtZ0ZAccOodwC8dVa53eEcSSl0XGlrjA6Gusx7kAUH3C84BRJf%2FiuxgRxS3Bb7RG4MQK4KStzXxplUJeuFPHXQO0%2FWyvYrJ6Vz%2B8aQHJ8CCNgawoYoW&X-Amz-Signature=426d42685583f7108664de7758e171d321620009c0cd5e0ed25aba1b2c06bcef&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CNATFRC%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T140834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcCsj5VkocJylyEbwdUCma3iUqE7NhxAFXJgLFSe4XnAIgXCLH5Njdec1HhBI5sd35OKwZq6ZGDl3LId24NQznqC0qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM5G4VOqBitHospRdircA3HjceWbyAsmMZPlKUGHfPpukgA9kQXSj4pGebP0Pi%2FOkbgAnTx4Bc0%2F%2B7HXzLZdkz1i7l6m7tkDNqB2KhGU7tB%2BBsyqSn%2FSW5PJa%2F6TpAEvd2vqL74eUWN%2B6C%2B%2Bq%2F2py1mo3ZQ1w6qzFVkyM8NIWm%2BXDqbOW%2BezOe04oV8dV8kQldlrUSofib3g1LAeZ4yK6YYadn5v5toSK0SiKHQs6xo61RiYXIL6%2B9dUWvSSzgczFN5iCsfei%2Bg2OdyMNCkqgLJBIUI67ygF79Ww88z6dFVmoIN5PpgVYrq0xBclydj8Em3YIYBGpVf1rSHztNtoACydTWSOCrtFsjfMhaF0tJ3aH5oSwLSN7QyTmve0E9DTWPPgrCisyBmahULLnKrWkeg1joH80JQ0dWcTibfROxFXb3BclZO1tGJi6930PDHmw4akgEk6JBTyRjknW3R%2FjyGkX4U%2Bd%2F1YAe7F%2FWR6iEpdipopMhhFCqrU%2FvMjxiyc6l9vHRqqqWnBaTtPPPjSLYKZya7T7mz6ebmfyXAsrJ32foJZz5NeSFuydzRAjGAuU%2BW3sBaUlz0NmfVChQgT5M%2FRf4iaI8zML%2Fi9%2F0QrLrG1H36UTOXAUI8t6zwNjEBTPEJV30IRUrts70MEMImy4cEGOqUBFZ9pMQrg82u2fEwsoBS3nzYFrIu4DajVQj7zeU5w6s%2FOQo7DjveTviUs5QcYMEcXxBOJFgzm%2BdF9Wg%2FcB6IThaeOtChrFuhEhc1tuE5Yb%2BtZ0ZAccOodwC8dVa53eEcSSl0XGlrjA6Gusx7kAUH3C84BRJf%2FiuxgRxS3Bb7RG4MQK4KStzXxplUJeuFPHXQO0%2FWyvYrJ6Vz%2B8aQHJ8CCNgawoYoW&X-Amz-Signature=792a12fc1ad25ed6f8ccee7380931885b02bdca4679c77107d1ea10c22d13c98&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CNATFRC%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T140834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcCsj5VkocJylyEbwdUCma3iUqE7NhxAFXJgLFSe4XnAIgXCLH5Njdec1HhBI5sd35OKwZq6ZGDl3LId24NQznqC0qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM5G4VOqBitHospRdircA3HjceWbyAsmMZPlKUGHfPpukgA9kQXSj4pGebP0Pi%2FOkbgAnTx4Bc0%2F%2B7HXzLZdkz1i7l6m7tkDNqB2KhGU7tB%2BBsyqSn%2FSW5PJa%2F6TpAEvd2vqL74eUWN%2B6C%2B%2Bq%2F2py1mo3ZQ1w6qzFVkyM8NIWm%2BXDqbOW%2BezOe04oV8dV8kQldlrUSofib3g1LAeZ4yK6YYadn5v5toSK0SiKHQs6xo61RiYXIL6%2B9dUWvSSzgczFN5iCsfei%2Bg2OdyMNCkqgLJBIUI67ygF79Ww88z6dFVmoIN5PpgVYrq0xBclydj8Em3YIYBGpVf1rSHztNtoACydTWSOCrtFsjfMhaF0tJ3aH5oSwLSN7QyTmve0E9DTWPPgrCisyBmahULLnKrWkeg1joH80JQ0dWcTibfROxFXb3BclZO1tGJi6930PDHmw4akgEk6JBTyRjknW3R%2FjyGkX4U%2Bd%2F1YAe7F%2FWR6iEpdipopMhhFCqrU%2FvMjxiyc6l9vHRqqqWnBaTtPPPjSLYKZya7T7mz6ebmfyXAsrJ32foJZz5NeSFuydzRAjGAuU%2BW3sBaUlz0NmfVChQgT5M%2FRf4iaI8zML%2Fi9%2F0QrLrG1H36UTOXAUI8t6zwNjEBTPEJV30IRUrts70MEMImy4cEGOqUBFZ9pMQrg82u2fEwsoBS3nzYFrIu4DajVQj7zeU5w6s%2FOQo7DjveTviUs5QcYMEcXxBOJFgzm%2BdF9Wg%2FcB6IThaeOtChrFuhEhc1tuE5Yb%2BtZ0ZAccOodwC8dVa53eEcSSl0XGlrjA6Gusx7kAUH3C84BRJf%2FiuxgRxS3Bb7RG4MQK4KStzXxplUJeuFPHXQO0%2FWyvYrJ6Vz%2B8aQHJ8CCNgawoYoW&X-Amz-Signature=b7b50097229ddf6a3205c1d659e5ae9a25ddf2b6eda7290c39b1ea5c73b337f2&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNCMK5QZ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T140838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDdM92M7wZy5eC7VsdO9SHuAzSfbwyCdruHjRiRNY0%2BAIgTC3L1rprUSjLkhtN9nfoEVSQ17A7wUCkX8mXt70VdPwqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMP2leSf1Zdl%2FqOfUircA4YP4NQkkZAIenBz63qZ4rPdYi%2BSoLGw4sAvFHZ9E9qnc0s50RJidhyZVDPBnau1VV62tTTjD%2BBMCGXf3dzDENFppiQgn8hqVtY%2F4eb38Fnebtj%2BGvhppB%2BTvgYDey9ut1EO7UD7JEU%2BcudLjocn7Jj0gR%2BwQOcFgLIWfvkyoXOAuh%2BBTp%2BknLyNQFQhi2%2Btpl8ILHwSGDd0O%2Bu4J9fsEiooVV2kNGi9hvL5bypJcBUG6GRnQaF9fpCxJq7IzJEE8JxX2fFVncSW%2BWpD9KTns92ymhb0ibOOAbPoUl9uQL%2BpMbTCOvZ9h8cLfyjo1UtFdXhS1NOgpDkKd0Bla9v%2F%2BwkhLvfDswc%2BA5sKiwokiB7tJXZitvQajTXHxwG3qf3kk3u8fpo8eVoVaEP5zgmOK4Ix5RcGDxX%2FFgdaA6nt7uZJRCJFyX8G%2BaB49HLOZoZW0ddCyfyMVAfNSD%2Fq0tE1aBjY8Mtt9ptfHm%2BitdcQyr2lMlmfSIOcL4Yt5H2ukTK35Am61ibNipfcSZ0GWGcTk6ETyoXcaV4qyVS6JI1FOjfARDH26pOUyc7t7cnq9QyIHmuZCIi7CAGSZZ7aJTUYdzbtEbeqM9v%2Fn0RS6UzM002wKahRCFNSZs%2FZ0mLvMMyy4cEGOqUBkwO27HXtKPIp3q3WN3LxOu5LDYoXJIQDdbOLbSxWoId9ddtODuGvjGtHtqyBt0hwg0AnF26FGhDj80rUBo%2FENmmmP2uURvLGeA84S%2F5jm8MEU8fTHjk3%2FDc9HJ7toXVpiEuxWSY8Jz8Coq7Iux4xqK489QiqU2%2FMC8IkhFiU1cTw%2BRUYgM7rqPGfE22zUi5MeNSRNVv99qxThjhoXZLBl%2F%2FLSqoQ&X-Amz-Signature=af77fc33f770947a4e4ec0638d7c4b1d2ac852b428912ac23589dd4993c02059&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KK7NRFB%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T140838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyVBRGdrsgUwAskBH4xW6F3bF0pXTngkmvcmuMIHhjqAiEA7Fp7i32X1T4tJxHlgU66xKOz%2BhQSt4J6e%2BIx422Zo4kqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2Fr7N29u9uZx%2BpkWCrcA4x1adqKWjy2DWDYiPbYkLyh0lkzUXQe8c1xvqpkXKHpmtp%2FciLSt0cGqUGeNOH2jSF5i4m1nY4V%2FioRGH3Dz%2BjJKV0LgVPl%2BtFGKw6IozDGP9l%2FkzpgpBqpdh1Nm%2BlMP9mcPmd4hqgPzdkKLES66H0hC5XoZ5oc1%2FnnewYYdrvoDdSm8vGym6knAN8oQlSl5xuj59%2BMD5JjWdVcp%2BA3MvJfWN9J3ApAdSxGnaDVgH0mv2%2FXSEoY4RSOrUiFWpvF2iZdy%2FEv0Zd%2BQnUZ6gEmckuzjkENcOpNDaSrI59uCb%2BcbWwKihDKB7MS75YdeqixqEac0eqlLzKsC25qXVGiuVRe2GzRLAtnPP1bQgNDIUKhmng7yi6JODfbEEsgTquJcFymljHXs6KRpwQzDfZ5t1C7HUU5x2oJ9dggGViI6zJQGslE0quSI578VHujT9JoAdFVeSgBmS5d3gepzs9OKYJBoRAwFic7YQC3wRnHFZkhCQSxFxQleTWLNoyk2BSijjH2l0RF9SBcm8aBXjsSZmTEd5L%2BMuvx4nYbR80xc%2FoPSh%2BR2NrbTaAYC8pmgEHFmJfrGE4hNI7ABXTVQtIzITwUJYp4WcnOZkVUBKW9Eea3HIcu5wDCgfLLCaTCMKKy4cEGOqUBEThyUoOk22dzH9pHDHp4by2J7B4mUUGD3lNFqguJoxiTvmzYR9T%2B3QJ1MNCGUwSkrfVry1ra08zktvkGzxDc4hH054P7VsaVtHbQF82SZVVbyDUxyeJ%2BnH8V6PK%2F2qaY1EtJJ5uuqkdsg0sM%2BWNXWf5Hf83LjMmoMiMLDf%2FPfXJR%2Fo%2FiXltLYxhebR%2F9FSTV2NDuMy5pUsIwhrLC%2BwA8EeWKUa4T&X-Amz-Signature=60206c83a78014c689c8272bf3f6a59e11e98fc2a541abe08806c2bfa5dd5b00&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CNATFRC%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T140833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcCsj5VkocJylyEbwdUCma3iUqE7NhxAFXJgLFSe4XnAIgXCLH5Njdec1HhBI5sd35OKwZq6ZGDl3LId24NQznqC0qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM5G4VOqBitHospRdircA3HjceWbyAsmMZPlKUGHfPpukgA9kQXSj4pGebP0Pi%2FOkbgAnTx4Bc0%2F%2B7HXzLZdkz1i7l6m7tkDNqB2KhGU7tB%2BBsyqSn%2FSW5PJa%2F6TpAEvd2vqL74eUWN%2B6C%2B%2Bq%2F2py1mo3ZQ1w6qzFVkyM8NIWm%2BXDqbOW%2BezOe04oV8dV8kQldlrUSofib3g1LAeZ4yK6YYadn5v5toSK0SiKHQs6xo61RiYXIL6%2B9dUWvSSzgczFN5iCsfei%2Bg2OdyMNCkqgLJBIUI67ygF79Ww88z6dFVmoIN5PpgVYrq0xBclydj8Em3YIYBGpVf1rSHztNtoACydTWSOCrtFsjfMhaF0tJ3aH5oSwLSN7QyTmve0E9DTWPPgrCisyBmahULLnKrWkeg1joH80JQ0dWcTibfROxFXb3BclZO1tGJi6930PDHmw4akgEk6JBTyRjknW3R%2FjyGkX4U%2Bd%2F1YAe7F%2FWR6iEpdipopMhhFCqrU%2FvMjxiyc6l9vHRqqqWnBaTtPPPjSLYKZya7T7mz6ebmfyXAsrJ32foJZz5NeSFuydzRAjGAuU%2BW3sBaUlz0NmfVChQgT5M%2FRf4iaI8zML%2Fi9%2F0QrLrG1H36UTOXAUI8t6zwNjEBTPEJV30IRUrts70MEMImy4cEGOqUBFZ9pMQrg82u2fEwsoBS3nzYFrIu4DajVQj7zeU5w6s%2FOQo7DjveTviUs5QcYMEcXxBOJFgzm%2BdF9Wg%2FcB6IThaeOtChrFuhEhc1tuE5Yb%2BtZ0ZAccOodwC8dVa53eEcSSl0XGlrjA6Gusx7kAUH3C84BRJf%2FiuxgRxS3Bb7RG4MQK4KStzXxplUJeuFPHXQO0%2FWyvYrJ6Vz%2B8aQHJ8CCNgawoYoW&X-Amz-Signature=13d8967113758d5cdd32d15e4569b5add30a7f22d7d7031fc2b5584625a09bc3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
