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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PE7TEYQ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T090834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAybjwJ%2B4Q%2ByDakiTNS2kZC%2FQEtSbwndxsTp1yvcTWsDAiBRNRvrV%2FkWCLcE2OuOqYgj8TsBSHtowg%2FXc9RPF6H5UyqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIoKGXp74gJ0OhVUtKtwD0OatEEDnned5Qi8mSwZ0qfRpk0TpyGkmOqf7vDFSRa%2B%2FBIyeLg5KVCFZRVpDY7IuFUjD8MjHxGnLPxtTZM7I1Oz4S13jq6fom4lOTNL6YrXbGBn9PTK4gC0MiWE53jvbxwawZFUjOlymL9EVv9bdm3%2FdQKazIAw3It9GpMCVKn9eDIBYGVy99K665%2BGmW8t8lrJQB68yaJCLwkFn8FOtPjhRSEu4Y7vQgu2nMHEDF2%2BmJFEP7daLTxE5VIOFtxz14qItYD6dphwxpZiLuREjMRt4rRQ9rpzOyFkytbjwK5ZuI3L%2FW4b%2ByrnJ5Uw2GrDPIlM%2FFSPiAjeiDqfeQkVsBtnlbPb3%2BklfDi9A%2BZdyUro%2BzP6UmqH70cL1qP7ryTFRsCfHE0FSs3fjfEMfXKZzzi%2BZHypMrfv9IW60b8pqkxLUm6dA2um1imuE8va7sgtoJyD0ZLs8jNh5I0mlg2oEVrxG9RnaghiCHijvig0YKlbEwAst9jbPGaUxuMr9Yl33QeUJRLH0RSYN0ERoogQ0YU8OXTcBKi19ieDfaUC%2BrMLYoQmx4zJJKCZKqXcVwCrGRycQ6CP3gFaBI9%2B8Z8kU8eRX5ZBow7seuly0rlzh%2F6YCMyYm%2BLpTch2DNsIwrMvIwwY6pgGmR0fmCsOyY1XHYTLCFVBCXZ5poBwjtSYj3aT0oPDqvgq4dORO2Lujk6S8O1Uv%2B8doBLQ%2BSQDfv3XmTI2Tvrm8vunB8y%2FIIQ8qrbeVkdFdNrmSuwkS%2FGgjNXwwf12jPTYKmwRN1wO%2Fz%2Ftgub%2BM%2FfAMscR5K3W4uFOOQUlkqCMJyYFRZAjMYJT%2F1gLKXfQbu7j%2Bn48RY31rbu2WlCj33ok%2FglUbWJfc&X-Amz-Signature=25d650719e1cf4d0083e49b49fb9e5072312ac851d02dd02cf42f12aab68cd62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PE7TEYQ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T090834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAybjwJ%2B4Q%2ByDakiTNS2kZC%2FQEtSbwndxsTp1yvcTWsDAiBRNRvrV%2FkWCLcE2OuOqYgj8TsBSHtowg%2FXc9RPF6H5UyqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIoKGXp74gJ0OhVUtKtwD0OatEEDnned5Qi8mSwZ0qfRpk0TpyGkmOqf7vDFSRa%2B%2FBIyeLg5KVCFZRVpDY7IuFUjD8MjHxGnLPxtTZM7I1Oz4S13jq6fom4lOTNL6YrXbGBn9PTK4gC0MiWE53jvbxwawZFUjOlymL9EVv9bdm3%2FdQKazIAw3It9GpMCVKn9eDIBYGVy99K665%2BGmW8t8lrJQB68yaJCLwkFn8FOtPjhRSEu4Y7vQgu2nMHEDF2%2BmJFEP7daLTxE5VIOFtxz14qItYD6dphwxpZiLuREjMRt4rRQ9rpzOyFkytbjwK5ZuI3L%2FW4b%2ByrnJ5Uw2GrDPIlM%2FFSPiAjeiDqfeQkVsBtnlbPb3%2BklfDi9A%2BZdyUro%2BzP6UmqH70cL1qP7ryTFRsCfHE0FSs3fjfEMfXKZzzi%2BZHypMrfv9IW60b8pqkxLUm6dA2um1imuE8va7sgtoJyD0ZLs8jNh5I0mlg2oEVrxG9RnaghiCHijvig0YKlbEwAst9jbPGaUxuMr9Yl33QeUJRLH0RSYN0ERoogQ0YU8OXTcBKi19ieDfaUC%2BrMLYoQmx4zJJKCZKqXcVwCrGRycQ6CP3gFaBI9%2B8Z8kU8eRX5ZBow7seuly0rlzh%2F6YCMyYm%2BLpTch2DNsIwrMvIwwY6pgGmR0fmCsOyY1XHYTLCFVBCXZ5poBwjtSYj3aT0oPDqvgq4dORO2Lujk6S8O1Uv%2B8doBLQ%2BSQDfv3XmTI2Tvrm8vunB8y%2FIIQ8qrbeVkdFdNrmSuwkS%2FGgjNXwwf12jPTYKmwRN1wO%2Fz%2Ftgub%2BM%2FfAMscR5K3W4uFOOQUlkqCMJyYFRZAjMYJT%2F1gLKXfQbu7j%2Bn48RY31rbu2WlCj33ok%2FglUbWJfc&X-Amz-Signature=0ccba3da81f61420d55661b5944deaab0edc02e371d2ac1e6ebe93b4d7af8f41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PE7TEYQ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T090834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAybjwJ%2B4Q%2ByDakiTNS2kZC%2FQEtSbwndxsTp1yvcTWsDAiBRNRvrV%2FkWCLcE2OuOqYgj8TsBSHtowg%2FXc9RPF6H5UyqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIoKGXp74gJ0OhVUtKtwD0OatEEDnned5Qi8mSwZ0qfRpk0TpyGkmOqf7vDFSRa%2B%2FBIyeLg5KVCFZRVpDY7IuFUjD8MjHxGnLPxtTZM7I1Oz4S13jq6fom4lOTNL6YrXbGBn9PTK4gC0MiWE53jvbxwawZFUjOlymL9EVv9bdm3%2FdQKazIAw3It9GpMCVKn9eDIBYGVy99K665%2BGmW8t8lrJQB68yaJCLwkFn8FOtPjhRSEu4Y7vQgu2nMHEDF2%2BmJFEP7daLTxE5VIOFtxz14qItYD6dphwxpZiLuREjMRt4rRQ9rpzOyFkytbjwK5ZuI3L%2FW4b%2ByrnJ5Uw2GrDPIlM%2FFSPiAjeiDqfeQkVsBtnlbPb3%2BklfDi9A%2BZdyUro%2BzP6UmqH70cL1qP7ryTFRsCfHE0FSs3fjfEMfXKZzzi%2BZHypMrfv9IW60b8pqkxLUm6dA2um1imuE8va7sgtoJyD0ZLs8jNh5I0mlg2oEVrxG9RnaghiCHijvig0YKlbEwAst9jbPGaUxuMr9Yl33QeUJRLH0RSYN0ERoogQ0YU8OXTcBKi19ieDfaUC%2BrMLYoQmx4zJJKCZKqXcVwCrGRycQ6CP3gFaBI9%2B8Z8kU8eRX5ZBow7seuly0rlzh%2F6YCMyYm%2BLpTch2DNsIwrMvIwwY6pgGmR0fmCsOyY1XHYTLCFVBCXZ5poBwjtSYj3aT0oPDqvgq4dORO2Lujk6S8O1Uv%2B8doBLQ%2BSQDfv3XmTI2Tvrm8vunB8y%2FIIQ8qrbeVkdFdNrmSuwkS%2FGgjNXwwf12jPTYKmwRN1wO%2Fz%2Ftgub%2BM%2FfAMscR5K3W4uFOOQUlkqCMJyYFRZAjMYJT%2F1gLKXfQbu7j%2Bn48RY31rbu2WlCj33ok%2FglUbWJfc&X-Amz-Signature=731ef6361cebbe6093821e5fbd499751570af36f13fd509e86c1d69a5e41238c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W47ZTTHR%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T090837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMywi%2BqDgfYNRiObtgXfExTYFDrUrSHbVNmARErT%2FK1wIhAPLb6Hdp1Hx9gKzYzubWYPzJAwpjTywQgFlPBJHbYIjXKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPyRSi%2Bp0VDKh2AT8q3AMvvqbt14ioy6DHd%2BMk1eXBKYJILRL4BF38DpjdNUEraJ2ueLh%2F2ioxDGWNXnb1ssSAVYzxvADw7lSQlNAKACYFTT9DfBCD7L%2FPgahNmI0Je8Bs%2FDSVprv1FTZNibIISndMgYDiS%2BxhlKHfC3OjDor9sFhXj%2FDjEQfHRA4n%2FZeAAIAiRWwVtZ%2BfGaFFM4ym3RIumL4raD%2BIthsvbjIUqm1f8irc20quI2fS88mwxhCdK2IPK4M598p3CPapBrlV9VivAzYnJ%2FUIvWUAjlNbF21%2F0mAMOsi%2FY6TeCW6p636307ceg9mJ6ZlV3G0t1BtFpQBKWGgj3mlf1g8bCdbHrftX1Ptm1EA%2FiWYEY6Zi7IIvwRuP%2BEwd16h1cMHB33LmbB41igKcNPLLcocZzZxhNeq%2Bt1%2FBTnf7tA%2BzG8k3EAulw3cG43ZjC1mI5pWjiOOjxmgitOh9akCBkCFlEtxjVMp6RQxzNis4zgxdaPwzfmeRx9Q%2BEmBU2V%2BnPSSIlGsae8cJ1%2BHsg8JaUPH7M3ALsQCTu8m0oZ0pI6XiiQNM7PzEEtWSaRwjA2jEdxnGjJtjsl201%2FKJfzCQ1WpbUXTu2j5tccNJ33joAi%2BA6hOT2PKswGIEubvHW9F9BsVt0TCOosjDBjqkAU%2F9KlZx2E5FB7jcTe260yZfCTVhJcZod3MM%2FIlaWV7AdGo2JuqhghAlW6LBA2LPaDYuX8NGAt6j3rG%2BCYbbswKl2BVTzMhgXClSYMARmNZ0siXVg6Iq3BOVkJ6XUeFV6vWAGGLvUSgUymYhSUJKQMoH2Xwov4FyU9LiiHipQw788fe%2BF3qARVxiGfFY9wJ7%2FOQIcDBljvVvnjdXqtp7rUaR1WzE&X-Amz-Signature=a7d798c5351cb73c3c8799dd104ce356b9b8b2e52b471f65f282f8aa0ff7e5a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLEATRQB%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T090837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4hHRuF%2BWrBdZlYSWH3I%2FuzgOuBNqysnctLPbLqlS9PgIgPGh4Qex6wvAReRTE9C%2BS4eac49znE%2B2xoHKnLa6whD0qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpTWRJALEiqYnRLZyrcA7skdZVOpcmnYClkU2s%2BReQBkjySdKjrDeYDsLP27b4XnZtMm2a%2BpZaMTL5e7ZSlopZmcmI%2BFqd53rnNzcwJW2pV5lPsE11rfhmFEdFL0HzYQ4fl88qEPzA2mgDkvNEzfrYCPGOwSauICQdDTjEIMR2V0M3XmwMKUS5sO7nZOyh5uH%2B7ZElr%2B9pWfg3fRq1lIs4%2BSD9WBI840HtZ5Pu3p9Gs%2B3pZC7m4GvxAjy1xevzR6BwlvISWuxGCVZ%2F0gmqtFecc6rJLyl3k8T6zHd%2FUHFKwO4Ej1jx7%2FxLcxrwjxZkVqbNm6eTrx5%2FM4kTzDiM5SS1w7xHuLXPeof%2FyfE%2BUZJx4KYTXRNWxra9WwduKG0NIQIs4o0PneEfWTmHfiUBBXyWwJZE91R5cAF9rqfeNNjOTsuHYHhIWi5nklpXTyfKaGF%2FZ5U8qwWOTNVlp5HgCTmTBACjRsvvK5maAhiGE307K79M0YtpDvyHk218B%2BWqti4aq%2BYGVKtLccTIO6nL5mVuYFVKA0Wviex170gLN9I%2BCsx2wYuv1lR%2FfK%2BggXgA%2BlcJzWztCaw67RIDmTHGjlemDvMJ1oS1WesZ6vpru0CM57V4O%2BjArSTNJodmW936R5Hg92NaNz%2BtjRhkaMKPLyMMGOqUB6XrKAdZjaa%2BEVbD99Mo6gxuTOPSj%2F%2BP52GOyZYfv18Bf7AsojL0jAGxzAP3wAFVoQSBwvCaN1wK2xrQWl%2FRqup0NNooYNHi6IKOYuoBmTknkETbHGFsnvurM5MWlAvHI6aU6DhhNBBCImW0k1jUAWvn10LepmCOlhBYNPIJK2tHsuwGFKn%2F%2FTAoLRh48acoYkvuoavYplTPeIJFzsnIQht3zWw5H&X-Amz-Signature=8e8dafe0340b4df11d31229f8f015bc71be3035a7a4acf56bc43fbe3a80c6aaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PE7TEYQ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T090834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAybjwJ%2B4Q%2ByDakiTNS2kZC%2FQEtSbwndxsTp1yvcTWsDAiBRNRvrV%2FkWCLcE2OuOqYgj8TsBSHtowg%2FXc9RPF6H5UyqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIoKGXp74gJ0OhVUtKtwD0OatEEDnned5Qi8mSwZ0qfRpk0TpyGkmOqf7vDFSRa%2B%2FBIyeLg5KVCFZRVpDY7IuFUjD8MjHxGnLPxtTZM7I1Oz4S13jq6fom4lOTNL6YrXbGBn9PTK4gC0MiWE53jvbxwawZFUjOlymL9EVv9bdm3%2FdQKazIAw3It9GpMCVKn9eDIBYGVy99K665%2BGmW8t8lrJQB68yaJCLwkFn8FOtPjhRSEu4Y7vQgu2nMHEDF2%2BmJFEP7daLTxE5VIOFtxz14qItYD6dphwxpZiLuREjMRt4rRQ9rpzOyFkytbjwK5ZuI3L%2FW4b%2ByrnJ5Uw2GrDPIlM%2FFSPiAjeiDqfeQkVsBtnlbPb3%2BklfDi9A%2BZdyUro%2BzP6UmqH70cL1qP7ryTFRsCfHE0FSs3fjfEMfXKZzzi%2BZHypMrfv9IW60b8pqkxLUm6dA2um1imuE8va7sgtoJyD0ZLs8jNh5I0mlg2oEVrxG9RnaghiCHijvig0YKlbEwAst9jbPGaUxuMr9Yl33QeUJRLH0RSYN0ERoogQ0YU8OXTcBKi19ieDfaUC%2BrMLYoQmx4zJJKCZKqXcVwCrGRycQ6CP3gFaBI9%2B8Z8kU8eRX5ZBow7seuly0rlzh%2F6YCMyYm%2BLpTch2DNsIwrMvIwwY6pgGmR0fmCsOyY1XHYTLCFVBCXZ5poBwjtSYj3aT0oPDqvgq4dORO2Lujk6S8O1Uv%2B8doBLQ%2BSQDfv3XmTI2Tvrm8vunB8y%2FIIQ8qrbeVkdFdNrmSuwkS%2FGgjNXwwf12jPTYKmwRN1wO%2Fz%2Ftgub%2BM%2FfAMscR5K3W4uFOOQUlkqCMJyYFRZAjMYJT%2F1gLKXfQbu7j%2Bn48RY31rbu2WlCj33ok%2FglUbWJfc&X-Amz-Signature=962845648aa8172e3e9f9b06299f47bb5e7dfbe14460cca3b1f137e710b686ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
