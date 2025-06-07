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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4YE2L7B%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T041139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwmuECBh0aC%2Ff7bHbh7ZuOPVM5F5e9XvUAeZvZOTU2ogIgJLZNNInkR1PgNzbLw5o%2Furxi2FgwxVXiAtZIxZx0Z2Qq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDCFB7UlhW53%2FvMI6aircA%2B%2FpwrQQje3Fy6lIxdAR1e1DQVsapftt4H%2FqggJL1tS1oJwSHjjBnCzQF7jQnRJqBgnFeM8MrMFvJUi8tVfp3k9Ts%2B1h0va8PfM5JNQVzX%2BvOnVieHGD99KhCPMdfezWupEPMD4lNFB3rEIMBAk1n3QZ%2FirkzsMCSnL%2FCOERTGY%2BLViDrisUQJKlKYbydaHmePCkjtJebMWVMhzjYOGYvyZuc924b6qT06TWl49nQBeZ8w2252J9blQWvM9nKbtvN7T2ycQLuc7%2BOvMFJsSCOg4l4ui3UlOTlQOosDXclv7CBHVUk2oZqabX7RE5SKZXOt3r%2Fq0SuqBP%2BcDV%2FjIWMaeRpXNDKJ2YRmZDyzHyKO4qGr9%2FgeX6tgta%2BV%2BCehZfKL95f1sIqf%2BT4KKDsRcEAQCLse2VnUo9RQnw9xCW0A4j2YAywLPlOb3XqfE1R47lapz62ySjB7YXz2pTOrFt5ja4fEH1sxL%2BtanNesNUK%2BfssGSxYhjZQ0fjRI1pp40Hyim9PFD8QTh%2BtpDJ86w9G7Wjt9nvmQuHjawW0PG%2B%2F1D97rCn%2Fp7xvNKttq8EQpV2rT9DVlsNUJczJHa3kuxMIKXdcvBLO%2F9LZajee%2B%2BBV77U%2BhqRCeqHQ9iwVQlRMLvAjsIGOqUBm5%2BkB2ycvX3zPGm%2FHFGcj0Cmv1TPsgSyUKM3xmHrHG1KbnKaZ%2BR9mgCnkFeZTPNGCn0RO3t4CJgGxHcmNiC8ifIVWozkr5pEuDkLNXVrMYRzTj0ZYTZEbggi%2FQzhEjAzZJdhiVcsRvh67G7vSmvWM9p%2FhJig4x6d%2FC79TfMrZRGdTcR0VzMsA5tiuvpWBF87r0nxT161zEVRCbiSydIKbXEWYgaB&X-Amz-Signature=ca776449374d782b5a1cbf427b9ea64e6413b01f8aa5b056f0016a63b5a020d4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4YE2L7B%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T041139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwmuECBh0aC%2Ff7bHbh7ZuOPVM5F5e9XvUAeZvZOTU2ogIgJLZNNInkR1PgNzbLw5o%2Furxi2FgwxVXiAtZIxZx0Z2Qq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDCFB7UlhW53%2FvMI6aircA%2B%2FpwrQQje3Fy6lIxdAR1e1DQVsapftt4H%2FqggJL1tS1oJwSHjjBnCzQF7jQnRJqBgnFeM8MrMFvJUi8tVfp3k9Ts%2B1h0va8PfM5JNQVzX%2BvOnVieHGD99KhCPMdfezWupEPMD4lNFB3rEIMBAk1n3QZ%2FirkzsMCSnL%2FCOERTGY%2BLViDrisUQJKlKYbydaHmePCkjtJebMWVMhzjYOGYvyZuc924b6qT06TWl49nQBeZ8w2252J9blQWvM9nKbtvN7T2ycQLuc7%2BOvMFJsSCOg4l4ui3UlOTlQOosDXclv7CBHVUk2oZqabX7RE5SKZXOt3r%2Fq0SuqBP%2BcDV%2FjIWMaeRpXNDKJ2YRmZDyzHyKO4qGr9%2FgeX6tgta%2BV%2BCehZfKL95f1sIqf%2BT4KKDsRcEAQCLse2VnUo9RQnw9xCW0A4j2YAywLPlOb3XqfE1R47lapz62ySjB7YXz2pTOrFt5ja4fEH1sxL%2BtanNesNUK%2BfssGSxYhjZQ0fjRI1pp40Hyim9PFD8QTh%2BtpDJ86w9G7Wjt9nvmQuHjawW0PG%2B%2F1D97rCn%2Fp7xvNKttq8EQpV2rT9DVlsNUJczJHa3kuxMIKXdcvBLO%2F9LZajee%2B%2BBV77U%2BhqRCeqHQ9iwVQlRMLvAjsIGOqUBm5%2BkB2ycvX3zPGm%2FHFGcj0Cmv1TPsgSyUKM3xmHrHG1KbnKaZ%2BR9mgCnkFeZTPNGCn0RO3t4CJgGxHcmNiC8ifIVWozkr5pEuDkLNXVrMYRzTj0ZYTZEbggi%2FQzhEjAzZJdhiVcsRvh67G7vSmvWM9p%2FhJig4x6d%2FC79TfMrZRGdTcR0VzMsA5tiuvpWBF87r0nxT161zEVRCbiSydIKbXEWYgaB&X-Amz-Signature=94a2a95b70040d667430a91dc32d4b3753a1a55b91ab1b136e4f115dde21bf58&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4YE2L7B%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T041139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwmuECBh0aC%2Ff7bHbh7ZuOPVM5F5e9XvUAeZvZOTU2ogIgJLZNNInkR1PgNzbLw5o%2Furxi2FgwxVXiAtZIxZx0Z2Qq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDCFB7UlhW53%2FvMI6aircA%2B%2FpwrQQje3Fy6lIxdAR1e1DQVsapftt4H%2FqggJL1tS1oJwSHjjBnCzQF7jQnRJqBgnFeM8MrMFvJUi8tVfp3k9Ts%2B1h0va8PfM5JNQVzX%2BvOnVieHGD99KhCPMdfezWupEPMD4lNFB3rEIMBAk1n3QZ%2FirkzsMCSnL%2FCOERTGY%2BLViDrisUQJKlKYbydaHmePCkjtJebMWVMhzjYOGYvyZuc924b6qT06TWl49nQBeZ8w2252J9blQWvM9nKbtvN7T2ycQLuc7%2BOvMFJsSCOg4l4ui3UlOTlQOosDXclv7CBHVUk2oZqabX7RE5SKZXOt3r%2Fq0SuqBP%2BcDV%2FjIWMaeRpXNDKJ2YRmZDyzHyKO4qGr9%2FgeX6tgta%2BV%2BCehZfKL95f1sIqf%2BT4KKDsRcEAQCLse2VnUo9RQnw9xCW0A4j2YAywLPlOb3XqfE1R47lapz62ySjB7YXz2pTOrFt5ja4fEH1sxL%2BtanNesNUK%2BfssGSxYhjZQ0fjRI1pp40Hyim9PFD8QTh%2BtpDJ86w9G7Wjt9nvmQuHjawW0PG%2B%2F1D97rCn%2Fp7xvNKttq8EQpV2rT9DVlsNUJczJHa3kuxMIKXdcvBLO%2F9LZajee%2B%2BBV77U%2BhqRCeqHQ9iwVQlRMLvAjsIGOqUBm5%2BkB2ycvX3zPGm%2FHFGcj0Cmv1TPsgSyUKM3xmHrHG1KbnKaZ%2BR9mgCnkFeZTPNGCn0RO3t4CJgGxHcmNiC8ifIVWozkr5pEuDkLNXVrMYRzTj0ZYTZEbggi%2FQzhEjAzZJdhiVcsRvh67G7vSmvWM9p%2FhJig4x6d%2FC79TfMrZRGdTcR0VzMsA5tiuvpWBF87r0nxT161zEVRCbiSydIKbXEWYgaB&X-Amz-Signature=8aec41a32fc0528d9f479bd331ac53590917d2ab9ec38834dfc105f9b434c5b2&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PIEK5ZN%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T041142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAUY%2F2JS9k3me4XDD7jbWfobLtH3ymtLdWpnBBPjREbwIhAJnWZBL2XuawCVwVd3WuKt%2BlR22wxKQ0HglBoLpwpB63Kv8DCGsQABoMNjM3NDIzMTgzODA1Igy19ZDT59qiSTdgMMsq3APyDDmBr9B%2F1C5ULj0ly0P4iM%2B3JzEQRYvwS6ovysowh99xpKIG%2FzDZz9UUJpSOXH%2BGIUS6FWUXK%2BXAwQU28jVXMxC33OEFSlfffgTNhSjMpEpNX5xp%2FVB3FYcBv4pROolTG3va4Z5xX%2FuFcanDMDk8FuPBhEqYJW1L0xvjrW9HOqcPsez7J%2FdMoQstJjjxf5sYgwRsnKhLxOS%2Bh7epoSiAu9jCGo62%2F%2F0hu15y4mTrzmDHFGtk08kunxcEmbhBkGuaC%2B6nmtN2rPhgvrCxckMtKSq7%2BF97XBaqTuDo5QsKv6B4xpGijj%2BTAFnEUfqtS%2F%2Bu2Zyh358pFYIYx1oJ6WVc4vHY696bxRnIYkMpo%2FXoweWyiUFfM2nm0UMqDOyB6aDHF7umVUatt%2Bcz5ElSUPi0mSaldvI5oC77%2BIIIW7eAVp7MkqAKWQfk6FmedKm%2BUIhweNQP6LD4Y24joHQtOI%2FcrLUwNLVAS%2FBWqwx9%2Fk%2FjZkiAKb7gMZz4Ykq5IsRKsBnnm8p%2FoUYnAgKNjn5PFae5%2BFKyJmTt2M8KETU%2FGxUr7lO6GRIy6z42uAobL6mbffcIJUSc9MrjnjnPKKh%2FucflUy3jCU11Z7P9FZvAo6Tzf0M7s5T6Zi7kr9zp6DDiwI7CBjqkAUWxd8jLWqvKvOqBXRAwUWWaAP7R2DyKSi9saoNrVdaI1CXIQq0ryPRzTGetvLuL7GX7eA9x1S2JeqMi%2FdxGMutxC3nN4UrgQ%2BOG5Z6M4k8KigOzhATe8ovt3M86bcjuEFYj%2F9ISYI3wz0jJxs9v7GrvDVshmUr1H3Q0UTj0MF4W8RPD7RQp%2FEu55mIUnGRsHn%2BXVwqUHderiqcRD%2BlbVmgykT0M&X-Amz-Signature=a834541e68ecc5c093f1d1bcd48f271be34532ba22f71f479a515f5e97a5924a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PDQWEFR%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T041143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDD4Cz%2BhC6s0K9s6aBbcTxMkjRaZvrMPYzcgJ3ZtKdkJQIhAP2D628tJ1%2BHTgh59rVT%2Fu0TdCQm%2FMD6Z9%2Ba6GTtLJHgKv8DCGsQABoMNjM3NDIzMTgzODA1IgzxdHp7TLyfscQfyJwq3AOQO%2BeQqaqw5q%2F2fNSvsq%2B6IPmKIHAuhXKGWueU62mfRUaXxSDWYlJmA6GroOs9zgQOEcyeRYrhP0nub5kYm1s2E1SCsWWMT0DWAXRPvYBmWODGJ9eqcZ2R01jIvACnx%2BWfW3RAbjZOWyHq24AcF%2FS9CbTPIISCH1WG3v2MVCfu5zcsAjq0kLrCMgRcB%2BfuKEGjSgnHqpB2fTHTRY%2FTTGT%2BZUGj5yN9ZiMBS1SFDCaAU2n%2F6PxDnv6z9TeuLb4mcrWmJ7UkPIymYV9s1iNiaOicshALf4N%2FNCtmCOPB9D3B0nEX6kVvP1IGuFvq2NXYuVheHEEvXDOdbh6DJb1IDudqEFqPXvPXLe8PuQ2hO%2B%2FOqpbrhSyfRhs7JT9Ys57kcIVL6rUH%2BKcxI7zqHp00bIwWcqtjdWrnn6fLflBP5T13SSuP%2FMpjcyBvA9pFR8mKOuUd2owtq4IcqXdsf2mmHakTVyA5QNKtKZB%2BO2Dc%2BXphhx%2F2Y9TUaGqzozVXqlTUAb0a5Ff2mT6b9XtK29zjz6DDBFAAMpv%2BkFp0tGbud%2FvkhsndOPB1JtA%2FdM1GYVwqTmeypdbx0MOjlO%2BeiLK0U2QhLu3eQcGD3qdoAqtKKJoCgWSd%2BTxMIdxP2JDzijDnwI7CBjqkAfajhgfZWrqfLNTtSZdBaBmoZpUyYvN5q6uf%2BcJCJqzNBv6XckETWjLW%2BaSMACIf76PUEGNpyQjPTJj1KIk4PFOeGfkBbZQoMWZh2wluykVnZBWyzd4wgX8t6pRSH1zpY1nxnKP%2FcoxTywHzeioXhKmR%2B05f%2FGxF7fw%2BI83A%2BqVAp4LD%2BxQHWxSKUyZvCLzJsAbNtOmTm0f141ikHLUgUUdS7zXX&X-Amz-Signature=35ec7d767b66d59376d31e149894bc2c7f9db8306644aca8ce77a1f9558e48d6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4YE2L7B%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T041139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwmuECBh0aC%2Ff7bHbh7ZuOPVM5F5e9XvUAeZvZOTU2ogIgJLZNNInkR1PgNzbLw5o%2Furxi2FgwxVXiAtZIxZx0Z2Qq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDCFB7UlhW53%2FvMI6aircA%2B%2FpwrQQje3Fy6lIxdAR1e1DQVsapftt4H%2FqggJL1tS1oJwSHjjBnCzQF7jQnRJqBgnFeM8MrMFvJUi8tVfp3k9Ts%2B1h0va8PfM5JNQVzX%2BvOnVieHGD99KhCPMdfezWupEPMD4lNFB3rEIMBAk1n3QZ%2FirkzsMCSnL%2FCOERTGY%2BLViDrisUQJKlKYbydaHmePCkjtJebMWVMhzjYOGYvyZuc924b6qT06TWl49nQBeZ8w2252J9blQWvM9nKbtvN7T2ycQLuc7%2BOvMFJsSCOg4l4ui3UlOTlQOosDXclv7CBHVUk2oZqabX7RE5SKZXOt3r%2Fq0SuqBP%2BcDV%2FjIWMaeRpXNDKJ2YRmZDyzHyKO4qGr9%2FgeX6tgta%2BV%2BCehZfKL95f1sIqf%2BT4KKDsRcEAQCLse2VnUo9RQnw9xCW0A4j2YAywLPlOb3XqfE1R47lapz62ySjB7YXz2pTOrFt5ja4fEH1sxL%2BtanNesNUK%2BfssGSxYhjZQ0fjRI1pp40Hyim9PFD8QTh%2BtpDJ86w9G7Wjt9nvmQuHjawW0PG%2B%2F1D97rCn%2Fp7xvNKttq8EQpV2rT9DVlsNUJczJHa3kuxMIKXdcvBLO%2F9LZajee%2B%2BBV77U%2BhqRCeqHQ9iwVQlRMLvAjsIGOqUBm5%2BkB2ycvX3zPGm%2FHFGcj0Cmv1TPsgSyUKM3xmHrHG1KbnKaZ%2BR9mgCnkFeZTPNGCn0RO3t4CJgGxHcmNiC8ifIVWozkr5pEuDkLNXVrMYRzTj0ZYTZEbggi%2FQzhEjAzZJdhiVcsRvh67G7vSmvWM9p%2FhJig4x6d%2FC79TfMrZRGdTcR0VzMsA5tiuvpWBF87r0nxT161zEVRCbiSydIKbXEWYgaB&X-Amz-Signature=238cf587c9741e8de833a65be604bfba0d97b9be2a73f8399b6f612b144594d7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
