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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FDFS22W%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEhnpMzFe1MhnwfcgjxGiElW%2F9GekchXXjKOw922uaOQIhAOXw9pMGjrThER8sOiGjg8cEukLu%2B1J0oS08hOdLvg5zKv8DCEkQABoMNjM3NDIzMTgzODA1IgxqO5L%2FaQaIWeN5Tg8q3ANoktl%2BFlbLvz%2F422Pn6jXrBiJrzx7agaBF3SP9e2iNOQJmgQv9G%2BmtnW4Fsu%2BS32JvEPfC5ZbmEf7hlHPTa5IThgxKbDAGsr5O4dMtUwp1rGVvzIffmD7uMxQgUb1Kud%2B2OnucVz3XRWR%2F2PrUs%2FCcWJ8ECE4r0XnEJKE47qcJpSZSKRFPixXU8rCwzMZNsZNeIbkFeUqfLym00n4DETpjWTjWUeSAnNosd%2B3ThHyw9acHLxiYDzPtVWD1Cikjxk9r%2FXwdiWdUFi6CHwV%2FFH3T1VWu4YA%2FOUAsY050SJpweFR%2B9ALzzcwJX3ndEyfQRSVNuXtSCIeDRmZjOrnViRA6V1xAvE%2BIUCD9Fz3zl%2F6VTkYoFsett54cEgmo767WBwF3YzQxj8R29QZZOu8F%2BzG633dvHEO7OHsUeAqbWxmqrGZELcAHOs%2FQ1HPnemjpAUv8iVvLOWJEuvHS0oHfaVk3FB6MWAar7A6gSWuo%2B4LQhIdGmSoKvRVAivPWbKdS2SA7jh8XJex3TV9z7YP1CrZXUHBPg1MNAcH335j4U4KppIhWNukQRsyr89hMWXNoZfpQC4kjbAN2gTGPshMvWI%2FKq1SwNycODjP9ogZwfbPN5GDhgD8XawV49YJ9QDDAqv%2B%2FBjqkASi8m%2BDd6Cr%2F4fGaH8Zi8YkUu865eJN2TUngnoh3gsYDENMgv0OOIMKr8yn1trx443lqtWeOiE3MbssHfxiluezWjUM%2BSyKPF5BEzyFrto1B6EmbAsLXoQodrXUzAKP7Ykb4i03PXJF0m7xX5TT1ZYk4Vz4wAM0REfBZ8u6ao1Ck8Smt7M9zuX67eP5bZ5F6qBCpVzp8RaeLdA04gA5CxXUGp907&X-Amz-Signature=2ba228eae3ad972af0a27620d4107830f9272140b90fa03433da64208d8eb581&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FDFS22W%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEhnpMzFe1MhnwfcgjxGiElW%2F9GekchXXjKOw922uaOQIhAOXw9pMGjrThER8sOiGjg8cEukLu%2B1J0oS08hOdLvg5zKv8DCEkQABoMNjM3NDIzMTgzODA1IgxqO5L%2FaQaIWeN5Tg8q3ANoktl%2BFlbLvz%2F422Pn6jXrBiJrzx7agaBF3SP9e2iNOQJmgQv9G%2BmtnW4Fsu%2BS32JvEPfC5ZbmEf7hlHPTa5IThgxKbDAGsr5O4dMtUwp1rGVvzIffmD7uMxQgUb1Kud%2B2OnucVz3XRWR%2F2PrUs%2FCcWJ8ECE4r0XnEJKE47qcJpSZSKRFPixXU8rCwzMZNsZNeIbkFeUqfLym00n4DETpjWTjWUeSAnNosd%2B3ThHyw9acHLxiYDzPtVWD1Cikjxk9r%2FXwdiWdUFi6CHwV%2FFH3T1VWu4YA%2FOUAsY050SJpweFR%2B9ALzzcwJX3ndEyfQRSVNuXtSCIeDRmZjOrnViRA6V1xAvE%2BIUCD9Fz3zl%2F6VTkYoFsett54cEgmo767WBwF3YzQxj8R29QZZOu8F%2BzG633dvHEO7OHsUeAqbWxmqrGZELcAHOs%2FQ1HPnemjpAUv8iVvLOWJEuvHS0oHfaVk3FB6MWAar7A6gSWuo%2B4LQhIdGmSoKvRVAivPWbKdS2SA7jh8XJex3TV9z7YP1CrZXUHBPg1MNAcH335j4U4KppIhWNukQRsyr89hMWXNoZfpQC4kjbAN2gTGPshMvWI%2FKq1SwNycODjP9ogZwfbPN5GDhgD8XawV49YJ9QDDAqv%2B%2FBjqkASi8m%2BDd6Cr%2F4fGaH8Zi8YkUu865eJN2TUngnoh3gsYDENMgv0OOIMKr8yn1trx443lqtWeOiE3MbssHfxiluezWjUM%2BSyKPF5BEzyFrto1B6EmbAsLXoQodrXUzAKP7Ykb4i03PXJF0m7xX5TT1ZYk4Vz4wAM0REfBZ8u6ao1Ck8Smt7M9zuX67eP5bZ5F6qBCpVzp8RaeLdA04gA5CxXUGp907&X-Amz-Signature=44d694d319abca019bb304fb8eda3e34642de09a8f98a77be3d17c7432a4efba&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653I5DYNZ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKFAgLHtgF%2BQG1zt%2BdIUaiU7fIF62sicSxGXyAEs5b2QIhANL0t4XgqGzJTAZ0hit0cJNCKhtTJVZevap1TiNwE7oRKv8DCEkQABoMNjM3NDIzMTgzODA1IgzqRsZI26XUzBJDkKYq3AOeobzfV71WkNiBkSFrqaxbb%2B3CTjjDbfJVj63ZEmEYxcbeNpvBQOQHsQjiV8uD%2FCJS4cB8gTI1VKAwNhStkNvDr15cXlLD%2BD6xUQqyxmKfEaiwhsVGVRb4lWQTGxctiNU6%2FZAWzpd3pxwkNkQwXdL8ZBOj57QfvshTUapqtFyIm4USv5H8tFjJyLlAhwh%2FWYLo6Xcr8BExX9GM9g201iAnTC%2BO9zWNKyGlGRCh83QZySln2Q4wOzwCjkqOcpcZylrUFxwiBVIoH985sAISpiMDmdlmQn3MsMSr8HifhFB1xP3%2F75hzYzPTYiFEb2yJ59RZzSEBN8iAiY3tWa91bTOFiWSpvyqOc5MAlhX8oQrJNApMnubjFqg38dLOZq0tY9F%2BMLCaH12BNBMFysEbfe5hCVqCUCBALXhYy8HWYOxsd1YG49pjyxYzRh8%2FKEzpGAjcIbLTg9q9u%2F9ZTKjTGGKZWJTr2w6fWUZnSQUb5eComJnyEaktKFfnc9eSQhMB16I3NaQFfaeBzWLxusf4fvAlyd9lXGPc8G0xR%2FcMHhcj7rJ5Jd8b%2FoX1ns%2B9LAU0VLfcgi%2FGB69hKXrNyx3pAQSYgDQjfWeCSF9zIlulJsvLtcZeNIoJWcTzWk1KCzDdq%2F%2B%2FBjqkAdFAhLaxOFeepgWU5pTtnSigI68IxChn7iZJ02H5%2FV987GxZ0PfzblaR80CRrmxOi8B8uVkZL1tGZgct8mqr5jNw1N0T6Dn43%2FLApYGNHMSJpShwoBOPl3qp4JhvoNvRnPVmzh2dsMC0xethEi%2BIVIePQqKT%2BrFk51USU0DuRxnMXAg4XL4QYOyDUpFiUGryj7stnq0jqVm60MAUg6E5bMYsjvsx&X-Amz-Signature=83b8ba19cd0a991a783fff18a661c2ccc17c2ab66480371aaad56d8db11c8eaf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIHS67E2%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T161037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICD%2BXpI0euQB6bImCCeI24B12USLwk%2FhKJWuOceVfondAiEAzoBovy9wmefkVk3bY5o6uiLJ09pNTxu2pgmrmTalBQAq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDPcXWf%2BpilXQS1EMGSrcA7l%2Bov6l7M7qfv66yyu3j7MqeQR41UwvGQN6fY7YHcPLpswNfFsrhyeuOSip6vSO5g7KEZSJlnV0bRkDjaNT12gxIXA4LMazAl8Y%2Bn725nMkzKBHC0CQo0Wan%2FhfNRBsigajLqPYsZofOK3XM0QW9oZiuw6C3qnuCD1XxJ4Jqi9T2jAWNX7rUZvuIH%2BgMhEgIP3SiSfUmvXHbeLqAZKcKZD2f%2BuXyCIdx5i3%2FMOsX0hNOF2o8MlQXlxWVNiRS2N9AtKfhb8rn2OlUpWEFFdDiehEalJV4tD0c04g25kZj5clghBXiIXGj%2BKPUkGvaZuEBE7ugAxUCSYLqdlVdcecg9AQ%2Fzgrd3HjGIVFFj2Dd40zuff3R6MArNGBLUTM%2BNhYbwkgidCMbCC3stqBeqpwSG9afvOl%2FSDRh3483M3tRgqB2FtligiDZAtBwCgpqDW%2FMqT621RQBx94ojL%2BJKCHnyLuOFmPngNfOmiZuPLGR9xgxQKXZi4U5lPwC9vGwD%2FhXS79cCbJwb%2BwT782MESq1NBzAHE1fCwTydCb9EsZh7mwHe5wgqyp4WAIuqVeTqwgEjOlAtn3aQEji18TsUUOvQX7JEDnoXKuaG%2FzNYgRh8JJbEkVc6ATz%2B7%2BUrdcMM6q%2F78GOqUBy1%2Bg1pEg7OEVQigVLW0Q1aGvXXp4xA7QXZrcAfeyNzVrxTfq2dYsv7zdBnjUcz7sC8ohMGwrOk3Uvt5lks5peoI%2Biokt8nhQWY7RmfA3IgD9kCYzhUoTwWvEeOMiNcDOPl2%2Fj0YS8AgNUTOMwwedAijj7Z2kKwVAQ1yXr2Mf5NrOPvDt%2FZDNosoQIoZ%2BbUNTFw%2FhoTP%2FJXRvW7tc%2FsPaK0lGwawp&X-Amz-Signature=efe130961e783119ffeafdce47e4fb2f535df2881111bac9d56f7428e19bd430&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FDFS22W%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEhnpMzFe1MhnwfcgjxGiElW%2F9GekchXXjKOw922uaOQIhAOXw9pMGjrThER8sOiGjg8cEukLu%2B1J0oS08hOdLvg5zKv8DCEkQABoMNjM3NDIzMTgzODA1IgxqO5L%2FaQaIWeN5Tg8q3ANoktl%2BFlbLvz%2F422Pn6jXrBiJrzx7agaBF3SP9e2iNOQJmgQv9G%2BmtnW4Fsu%2BS32JvEPfC5ZbmEf7hlHPTa5IThgxKbDAGsr5O4dMtUwp1rGVvzIffmD7uMxQgUb1Kud%2B2OnucVz3XRWR%2F2PrUs%2FCcWJ8ECE4r0XnEJKE47qcJpSZSKRFPixXU8rCwzMZNsZNeIbkFeUqfLym00n4DETpjWTjWUeSAnNosd%2B3ThHyw9acHLxiYDzPtVWD1Cikjxk9r%2FXwdiWdUFi6CHwV%2FFH3T1VWu4YA%2FOUAsY050SJpweFR%2B9ALzzcwJX3ndEyfQRSVNuXtSCIeDRmZjOrnViRA6V1xAvE%2BIUCD9Fz3zl%2F6VTkYoFsett54cEgmo767WBwF3YzQxj8R29QZZOu8F%2BzG633dvHEO7OHsUeAqbWxmqrGZELcAHOs%2FQ1HPnemjpAUv8iVvLOWJEuvHS0oHfaVk3FB6MWAar7A6gSWuo%2B4LQhIdGmSoKvRVAivPWbKdS2SA7jh8XJex3TV9z7YP1CrZXUHBPg1MNAcH335j4U4KppIhWNukQRsyr89hMWXNoZfpQC4kjbAN2gTGPshMvWI%2FKq1SwNycODjP9ogZwfbPN5GDhgD8XawV49YJ9QDDAqv%2B%2FBjqkASi8m%2BDd6Cr%2F4fGaH8Zi8YkUu865eJN2TUngnoh3gsYDENMgv0OOIMKr8yn1trx443lqtWeOiE3MbssHfxiluezWjUM%2BSyKPF5BEzyFrto1B6EmbAsLXoQodrXUzAKP7Ykb4i03PXJF0m7xX5TT1ZYk4Vz4wAM0REfBZ8u6ao1Ck8Smt7M9zuX67eP5bZ5F6qBCpVzp8RaeLdA04gA5CxXUGp907&X-Amz-Signature=8288f90e1862786d8a6ac0a59d3da448a202c0e5e2fd96042b2a8479cf177ccf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
