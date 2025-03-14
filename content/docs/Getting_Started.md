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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3KI6T5Y%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T220657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZWCLqzrLaqPIlxSQhGVD0H%2BNff9rGE4Y8qzbonbZaFAIgbVsr44wLEyBgXpgB2X1wRkIHEkzmjkIulceJC8351iQqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQmZjgE6837uLe7CCrcA0HtpKGvuRb%2BK8Y4vuwRfFFiV6cwxn0tauW67hs3OgyKMKEgUOxxbECfSwsK1swfkRIKlwC6dOp4tLD4TFFC%2FtCUX%2FvDft48luC4nfy5HclewMijIPAsw%2BznabT9pBbIv3b%2FUjTrCNtzjtTGrmBwnHSg7yEv%2BXW7W0Mzn2P0xhmeqAGLyk0zsJvJNiQHyyhkRYZzKPDc2NmjdqUoYoqk6qRQiuUsivWXLwgVrdMSNk1lgLX3XUG%2BHzmNRJqVnn4C1MD8qov%2B86Xz5fWvIVFJYBz9viPO%2BYKyWwbHcy%2BJFarBai6xuvxyWqhyfVdkP9fpVUbYJ1fJDyfbHgGenFMKx5IpFTzXKknHc9YWviMaYirtiPtRZ69KLIUqEmBO%2B%2FKTlqfcA6vsrmnz3I6QfUoX4izUzzvHoYL9USApNK64Scg9il2aNtqVr02oVsA7GwbeS9iX%2B1dmVrRQ5MKHOKr8GwMTSTIsTRbPVGMBB8mz%2Fr4A%2BzuzJnb2MJ1ZIF9KDkD5zQP9ZQlnHIcecX19gD1QJc86uFQz8ToUfnKrgsi%2F5ehhe85559u1X1xSUS6adpf7DdYE9uZ96Aw2NOu%2B8AjWPjW8oaKhALe1R5vD04wJRiQkoM35x9Ud7jryc2%2FsMIyy0r4GOqUBEm37JFICDaOnz3uUfro9SSYB1NffeFwbrTfA87wsKAYU40aXLIHN3yzsTpXw1J0qzYNNmALsCnZryosV6805pssTtW%2BGPam6l9KDMt5q0%2FP17gz6lGJ6tMDz%2B8DM21mNhuXCHOe%2BTdj3HgfYSj%2Bn2Jw%2FgSKLN0qtsjiiOE44Nv0h%2BdsBVa32B9iijp1X2jrjoDP2FniUzbemn9jZduOlcVRUZT13&X-Amz-Signature=dbca303423155875575070e57978e2e480c6f9524d6d44c97d4d24adae068417&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3KI6T5Y%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T220657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZWCLqzrLaqPIlxSQhGVD0H%2BNff9rGE4Y8qzbonbZaFAIgbVsr44wLEyBgXpgB2X1wRkIHEkzmjkIulceJC8351iQqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQmZjgE6837uLe7CCrcA0HtpKGvuRb%2BK8Y4vuwRfFFiV6cwxn0tauW67hs3OgyKMKEgUOxxbECfSwsK1swfkRIKlwC6dOp4tLD4TFFC%2FtCUX%2FvDft48luC4nfy5HclewMijIPAsw%2BznabT9pBbIv3b%2FUjTrCNtzjtTGrmBwnHSg7yEv%2BXW7W0Mzn2P0xhmeqAGLyk0zsJvJNiQHyyhkRYZzKPDc2NmjdqUoYoqk6qRQiuUsivWXLwgVrdMSNk1lgLX3XUG%2BHzmNRJqVnn4C1MD8qov%2B86Xz5fWvIVFJYBz9viPO%2BYKyWwbHcy%2BJFarBai6xuvxyWqhyfVdkP9fpVUbYJ1fJDyfbHgGenFMKx5IpFTzXKknHc9YWviMaYirtiPtRZ69KLIUqEmBO%2B%2FKTlqfcA6vsrmnz3I6QfUoX4izUzzvHoYL9USApNK64Scg9il2aNtqVr02oVsA7GwbeS9iX%2B1dmVrRQ5MKHOKr8GwMTSTIsTRbPVGMBB8mz%2Fr4A%2BzuzJnb2MJ1ZIF9KDkD5zQP9ZQlnHIcecX19gD1QJc86uFQz8ToUfnKrgsi%2F5ehhe85559u1X1xSUS6adpf7DdYE9uZ96Aw2NOu%2B8AjWPjW8oaKhALe1R5vD04wJRiQkoM35x9Ud7jryc2%2FsMIyy0r4GOqUBEm37JFICDaOnz3uUfro9SSYB1NffeFwbrTfA87wsKAYU40aXLIHN3yzsTpXw1J0qzYNNmALsCnZryosV6805pssTtW%2BGPam6l9KDMt5q0%2FP17gz6lGJ6tMDz%2B8DM21mNhuXCHOe%2BTdj3HgfYSj%2Bn2Jw%2FgSKLN0qtsjiiOE44Nv0h%2BdsBVa32B9iijp1X2jrjoDP2FniUzbemn9jZduOlcVRUZT13&X-Amz-Signature=4376c3b1ddf16c8cc044312b2fac3576aad6f1b654316e18abb62002d434f3ad&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAT5F5RU%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T220659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJJgppRDJG7QKRvFj0%2B0vClk4C4pDui9CRPZXzb3BgfAIhAM3jvB5ZgIFSBP7UmGTeR9cg5Q7hFT9UIq3ANVZefSUXKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjcPAlTZCTLi3CVEoq3AP53MDRm%2FJ%2FlLA3crtbRiJHyzk9EQbyPTPMmal7O4FQwZk6mDRbqltARnv7RG9ZxiXabrisFP1o3%2F%2FD5pJkz11%2FAVJbe7xsmTRCtCTR00ZxtCEwhfSruM2RfrBpuyTNdPNknLk9DIrsQ%2B4%2BBP%2BhdX8D1mpU9jmyyGuLh8W%2FMeVxgum7zytmfZUvQTjubK%2BMlpQEcSGgHeVQqvm7OZEbTXSpqwaKQUXp18vfG491ihFJLdqEYqutlqEebefNbqoCdQCToArZdltxsXM8%2B4K6n6x0oi0wXPZ8xwt4jjue97Ajecr9VdnXvNgvyq7LqvnqLIs0KdSGqKak5v79QkV7AkOTW4IvLjUTyDuAT%2FsLI%2BCHr5zGRu%2Faof%2BgQXYtJtnH8epw3qB2TGjjydRSqYCxr2Tj7NVMru7P5rtrwRj4jKM3nv12xU2tV43kIUz0MyFe99gRH8ZlPYInwDAmTSKHrjDYtX2OUVKXkEc4iXHwsrDJDJNIIdKg8YD%2F2h9%2FI53uXSsxeWq6zRh3a8VlQZbUVxWqCU5iDfjpp1v4%2BZMXTQjgHvqfO9YA8UvZCwmzwMNd7xg8fdd%2BMYl9k3MAUJNqcKrdVxT13E32Knk4M0s9duuKYJxhd5z%2F4VDqJEiGsDDPstK%2BBjqkAcKdW5wD6a%2BSmkIM5%2B3G43OEwBpM2ffSC4Hd1iWIYxZec2rbeNOTL%2Bn4K%2FKlz%2FpvShSkmUMYkrxsPDKgIXr0E4OTStZ62FikltZKE36bucy3jyG77Bxpdy1dW7hK6XOo%2FcczBK7oehMBgXEUZj3yEvVpoS5QqnE5cfe%2FepQA2CWkYF8F5%2F2%2F7JX6F6Lqi2j0JXLJ4MyQixCOUy4QDQhiSMHExEWZ&X-Amz-Signature=84c53a145644d541ebfc0c57e2eb6d8beb7bacb951a4ced9ae1a4bf3416d1948&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBFMK2SH%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T220659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTXrbRY9YR3zT3B7HbX3SX3M89BeCcDqh4%2BCWwSlxnzAiEAzaXM1%2BAt6kUGC3T1pd5h9Cgyk5SsLc1Jbw8vPGbcMnUqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMwN9425VibQ%2B4LvMircAxHvd%2F7vsaZZ2At6aPAexErKyna%2FQHc7LFBtRlgJ5ybXF50VqqI7MbCGhoLWVE0X%2BdobbXzLxCMiwL%2FY2kog6VphQqxLUth1w23Qz1bz7eWl3djcv9Hc5tv8qo7YCOppTwXRlLZ9tlYJAvTQ7ou6WaLPxaKRyUMnqZj5UozRIfM4wIO1vI2ZejKWMdoXrxPDtGghe2bkogzQIm88yyE9BL%2BmOgED%2Bq1vQZJx10lCUMYi%2Bf9B%2Fjs3GkY5Rzfu18Nc4D71wOC%2FWD%2BdN2dsaN%2BP13LUAvagazOh%2B6ujMGpCdxK%2FgSJh5IRvuEEZIcBd%2FeQ9iIbbfG%2BHwBECLvFq3kg5ULcjztI1mnsU5vydI65k49qGGbhhn%2BV41ibbAm5ufjalPqdOp%2FoZE2e%2Fffif0aCAUc%2FIWL5SBdob3lkB0ydZvLzvCNvguO2N%2B0onB7Zw5YYXGiHMHSYSGXRmrNnKoJPlsgzPd7ahusIcGXIXYsz0EHE34yr1t4oYB0WA9QOUyGto1WjbTvTIBQ3ladnnN4USpYtfd9tGqVT%2F2lGbIRBd5lLHZO4DHWDwinXD9asdHpVUaYyyRZUQUaCgacD%2Faso6IZj1678p%2F6Md2b1zWPizbiheekgmP58lA6O02rREMNuy0r4GOqUBGy5GmjD1ntEARh4w4Wo9W6ISBmClajPMa8CC%2BavM9H8fMGycIjmavWG%2FjIg8oMBYdPlzW6Hj1bhoLi6TWhEPFL7hOtJAACnXyRCsqEuLUSjN3jQfKGD20P57roEzQKIlcJ3tUULENKoFXFHBm75ZqVGGdB5uWqrSYoIYaLutH%2B09b579HSg9pIu77CS07ZJVG6VZA49VKfA2w9GSPkVtiFbmNyTP&X-Amz-Signature=d178db08437a0c8ba3249444ff025a64892bc72c2ca726a27d420c3090fb3223&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3KI6T5Y%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T220657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZWCLqzrLaqPIlxSQhGVD0H%2BNff9rGE4Y8qzbonbZaFAIgbVsr44wLEyBgXpgB2X1wRkIHEkzmjkIulceJC8351iQqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQmZjgE6837uLe7CCrcA0HtpKGvuRb%2BK8Y4vuwRfFFiV6cwxn0tauW67hs3OgyKMKEgUOxxbECfSwsK1swfkRIKlwC6dOp4tLD4TFFC%2FtCUX%2FvDft48luC4nfy5HclewMijIPAsw%2BznabT9pBbIv3b%2FUjTrCNtzjtTGrmBwnHSg7yEv%2BXW7W0Mzn2P0xhmeqAGLyk0zsJvJNiQHyyhkRYZzKPDc2NmjdqUoYoqk6qRQiuUsivWXLwgVrdMSNk1lgLX3XUG%2BHzmNRJqVnn4C1MD8qov%2B86Xz5fWvIVFJYBz9viPO%2BYKyWwbHcy%2BJFarBai6xuvxyWqhyfVdkP9fpVUbYJ1fJDyfbHgGenFMKx5IpFTzXKknHc9YWviMaYirtiPtRZ69KLIUqEmBO%2B%2FKTlqfcA6vsrmnz3I6QfUoX4izUzzvHoYL9USApNK64Scg9il2aNtqVr02oVsA7GwbeS9iX%2B1dmVrRQ5MKHOKr8GwMTSTIsTRbPVGMBB8mz%2Fr4A%2BzuzJnb2MJ1ZIF9KDkD5zQP9ZQlnHIcecX19gD1QJc86uFQz8ToUfnKrgsi%2F5ehhe85559u1X1xSUS6adpf7DdYE9uZ96Aw2NOu%2B8AjWPjW8oaKhALe1R5vD04wJRiQkoM35x9Ud7jryc2%2FsMIyy0r4GOqUBEm37JFICDaOnz3uUfro9SSYB1NffeFwbrTfA87wsKAYU40aXLIHN3yzsTpXw1J0qzYNNmALsCnZryosV6805pssTtW%2BGPam6l9KDMt5q0%2FP17gz6lGJ6tMDz%2B8DM21mNhuXCHOe%2BTdj3HgfYSj%2Bn2Jw%2FgSKLN0qtsjiiOE44Nv0h%2BdsBVa32B9iijp1X2jrjoDP2FniUzbemn9jZduOlcVRUZT13&X-Amz-Signature=9166bd2588dbce49d8099816fe2c167862465c6817639466910da5a6140b27db&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
