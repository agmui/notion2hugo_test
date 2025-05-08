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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P7PB5E2%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Bh%2FTTbchrNNI1ZGRIbb%2FxyhQAuX6p5s9t%2Bz0pO1vySwIhAKuzTfSmcp5IPhWlV2pFQA25ucWYrIWNzBOwpDNSTbwMKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaOe%2F%2B2lbL5B0gsRYq3AMkL2nupHYZnIzqdGkaz1Je8grfnxym2Ucuqc3HFl234HO2HQSgZICyf%2BDE%2Fo1RwPK9vO%2BjiLQRKlQBwYzurHpicEriKUMzETTzNswQ44zASrAM1w7tSl2HJFGfrpUV%2F4FzwOgITUehzPkUTQaO044cWGDtTalVchkgqzLnfz%2F0xljkYe66AO9xkz5rhalDJzWqlD7Ts0z0n19cNDBvsm7wjqC4N1p9IUnyRkyfxbggGx2xkYOyqB4rVlDuqpXCETq6wy03zPp4tP6iumL2cJTTyQocu7Wh%2BbwosPMXHV9QieLVObPisYbceWemvag0%2FBhVTdNfMLRIK0p5qMeFf1Ls60ebgErXs%2BRICDQWDwFBYP6mLNg5dvhElmfLGH6dXIuD8uQsE%2FetMMFAqFtoWje4J9qOnJ5wgJeg7zho7h2WirNh5aDiJr8w6geyTbg9UkXd%2Bk6clgEPKTix7fkYZhP1hlGXLpKc2pz7sQ0zwzh%2ByQexwJdY%2BD9HW9FU5axG%2BajT7ZAGzCerHNpZtI7WWXqztIgnA3P%2FhiVV5RRl5hOWC44pZxz3x7h2XqfrlfvUxKPSTHAoI10plaD86UvFTd0SVT%2FJcPx4a2oCWWYrlFKJi1%2FVWLtZ7UDF%2FqGrLTCf4%2FTABjqkAcrNgVDZxOvEzjMwiyvmkUNCMaMwdBQYu4ToljilxNMoIO3nQBeZOuvkYF%2FAmWyHhbNl6FzRSN4wKwGarNdY8VS2UFQc41AcDam%2BrVSqGxU24Sh6p5RuJxph5SiOrReOE89TtCWuCZED9iaLpCoImWQEIqpfqB4V9X%2BZgVikvdeQYaY5H9hlJ3NwCz72P6PhaFSyze8EsSNpwJoxIoFjqpqZxuH0&X-Amz-Signature=2d5174c8e99134b332bab918db117114bf970b8fe7118616f85987a51e344be4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P7PB5E2%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Bh%2FTTbchrNNI1ZGRIbb%2FxyhQAuX6p5s9t%2Bz0pO1vySwIhAKuzTfSmcp5IPhWlV2pFQA25ucWYrIWNzBOwpDNSTbwMKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaOe%2F%2B2lbL5B0gsRYq3AMkL2nupHYZnIzqdGkaz1Je8grfnxym2Ucuqc3HFl234HO2HQSgZICyf%2BDE%2Fo1RwPK9vO%2BjiLQRKlQBwYzurHpicEriKUMzETTzNswQ44zASrAM1w7tSl2HJFGfrpUV%2F4FzwOgITUehzPkUTQaO044cWGDtTalVchkgqzLnfz%2F0xljkYe66AO9xkz5rhalDJzWqlD7Ts0z0n19cNDBvsm7wjqC4N1p9IUnyRkyfxbggGx2xkYOyqB4rVlDuqpXCETq6wy03zPp4tP6iumL2cJTTyQocu7Wh%2BbwosPMXHV9QieLVObPisYbceWemvag0%2FBhVTdNfMLRIK0p5qMeFf1Ls60ebgErXs%2BRICDQWDwFBYP6mLNg5dvhElmfLGH6dXIuD8uQsE%2FetMMFAqFtoWje4J9qOnJ5wgJeg7zho7h2WirNh5aDiJr8w6geyTbg9UkXd%2Bk6clgEPKTix7fkYZhP1hlGXLpKc2pz7sQ0zwzh%2ByQexwJdY%2BD9HW9FU5axG%2BajT7ZAGzCerHNpZtI7WWXqztIgnA3P%2FhiVV5RRl5hOWC44pZxz3x7h2XqfrlfvUxKPSTHAoI10plaD86UvFTd0SVT%2FJcPx4a2oCWWYrlFKJi1%2FVWLtZ7UDF%2FqGrLTCf4%2FTABjqkAcrNgVDZxOvEzjMwiyvmkUNCMaMwdBQYu4ToljilxNMoIO3nQBeZOuvkYF%2FAmWyHhbNl6FzRSN4wKwGarNdY8VS2UFQc41AcDam%2BrVSqGxU24Sh6p5RuJxph5SiOrReOE89TtCWuCZED9iaLpCoImWQEIqpfqB4V9X%2BZgVikvdeQYaY5H9hlJ3NwCz72P6PhaFSyze8EsSNpwJoxIoFjqpqZxuH0&X-Amz-Signature=8110b80e014681c88669f69f48425eabf1cfff549cc1720b6ec3ed42b0e88d4b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P7PB5E2%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Bh%2FTTbchrNNI1ZGRIbb%2FxyhQAuX6p5s9t%2Bz0pO1vySwIhAKuzTfSmcp5IPhWlV2pFQA25ucWYrIWNzBOwpDNSTbwMKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaOe%2F%2B2lbL5B0gsRYq3AMkL2nupHYZnIzqdGkaz1Je8grfnxym2Ucuqc3HFl234HO2HQSgZICyf%2BDE%2Fo1RwPK9vO%2BjiLQRKlQBwYzurHpicEriKUMzETTzNswQ44zASrAM1w7tSl2HJFGfrpUV%2F4FzwOgITUehzPkUTQaO044cWGDtTalVchkgqzLnfz%2F0xljkYe66AO9xkz5rhalDJzWqlD7Ts0z0n19cNDBvsm7wjqC4N1p9IUnyRkyfxbggGx2xkYOyqB4rVlDuqpXCETq6wy03zPp4tP6iumL2cJTTyQocu7Wh%2BbwosPMXHV9QieLVObPisYbceWemvag0%2FBhVTdNfMLRIK0p5qMeFf1Ls60ebgErXs%2BRICDQWDwFBYP6mLNg5dvhElmfLGH6dXIuD8uQsE%2FetMMFAqFtoWje4J9qOnJ5wgJeg7zho7h2WirNh5aDiJr8w6geyTbg9UkXd%2Bk6clgEPKTix7fkYZhP1hlGXLpKc2pz7sQ0zwzh%2ByQexwJdY%2BD9HW9FU5axG%2BajT7ZAGzCerHNpZtI7WWXqztIgnA3P%2FhiVV5RRl5hOWC44pZxz3x7h2XqfrlfvUxKPSTHAoI10plaD86UvFTd0SVT%2FJcPx4a2oCWWYrlFKJi1%2FVWLtZ7UDF%2FqGrLTCf4%2FTABjqkAcrNgVDZxOvEzjMwiyvmkUNCMaMwdBQYu4ToljilxNMoIO3nQBeZOuvkYF%2FAmWyHhbNl6FzRSN4wKwGarNdY8VS2UFQc41AcDam%2BrVSqGxU24Sh6p5RuJxph5SiOrReOE89TtCWuCZED9iaLpCoImWQEIqpfqB4V9X%2BZgVikvdeQYaY5H9hlJ3NwCz72P6PhaFSyze8EsSNpwJoxIoFjqpqZxuH0&X-Amz-Signature=c2e28d63aae00a050e6199c5939badb1fe571421faabca9ba8b16f7bd41c56a4&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LGSGZHH%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T230848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAkLi6vCJWk08yuAd6PP3K5ur4CjYaofccvYskhnQyCiAiEAtrcM%2F2Y9COX4AICSN5pvXa4R3EdEs5I%2B%2F0d3xhByyfAqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKXhwRnOt9iMhYUVnCrcA7Y6kD%2BGyRYt0dTby9TKwOTlld4XupDK9L1kopHuF9L7UGFGv1qiRWf7FCTwZDnIop2r8qhrRREm5GcWiaF%2FwczqMpU3poLDscN1v49aPmrcp03uRwKgf3YMVUrQIp0t6iG3fHYo%2BJx2JXo0oHAhPQTznMOGKqmYsepSnlK70ruaLLqzNsrea7xn%2BA20%2FKgtnEedJ%2BdPnIbKubtGcgvudFcd7fMLtwGfnM%2FsFWwNhl6CqIZwJYRoMytOyqFVx1T2nLaU1Fm8%2BqprLx1hakQPna2H7nL1CoiKTkTSemIOw6I0TiNbV9jO1GLWYS%2BtlGT5CPXni1saKKCUuKI7kiXCRrd8%2B88uysObipWwSG%2FmfvU6OEjYUi%2BYb6ot94GN2VYoNB6iYHLeqnwHYJKq%2BtVQKI7nQ13xR0ksC0QdQQYUcg8WiS1B73PeQb7wg3QrqtVp8JhBpUV7z6d%2BtU9Ie3LkYDxOaFyFIgMvTXvulpSi4%2FRD6%2FSnFezlai2ZWnzN022%2BxBcXiYUtiwkovWa%2BMS8ibQ5JDK2WI5S1CeczzjOFVb5i3iDuLVukUPPApGiSmoHMeSfB3DECNuqiCuWedVMsGt69%2BAmzfBY7Hi06G3qhm7GQ9h%2FnFB5wK43uSqsiMLTj9MAGOqUB5Ixzp4Ps2rk%2F6xiKOJ%2BknN7Q%2B2ZVUqA09uBmaAoWv3eDENss18q%2B%2FaeSk1z%2BtCKPMORNOzGlFjmqj8zIv2FMO4lJqBjlgk8YMQptx5dMMrqGropCubPnX9KwI0gnwHDSUafYT6CFWn3fILZiTcxO1SVRZu80%2BFNaK62Xncoz6MdvG7h1JD1Nnepnumid3VzVuD3Um8Mkq22hYnuGCZ5aUuWNwcDO&X-Amz-Signature=64563bbd20f358ef9bb4285127a6ac6f62b77fa89149cf0abbd7a043cc18e581&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632DVLQAM%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T230848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRzFlIVeEvT9ndtVoGhKtUQ%2FN4TN75iZE%2BBjXd7KSsWgIgerBsdbG4CipHkYCGKFDQG4NN5XMwKmnMdXOAMZHXXNUqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH2FPBe%2BLBC8bBClKyrcA53ZTbVr2hRpMFKqDD%2FGn6IFb8%2BChupCnwPMQjsHx2m%2F2erSZ3o2tLx%2BN4909rnHzgYP%2BAXqvX8yObdYUevOkYpStTBFDIPErNLVDSQ49FHqTrmYoINyOwAAyvOv1VjAhYu7xTi4qUlVgCdl6xZhBa6oqRQxPkIKzj3vbypUuiYGpR%2Fb8ytvUeaagfdfiOdlKJ3IOJ2lhmNQNubQy6HuEVvrx6QJo0LXtmtwEgKlkrq%2F7GZ4xjbyFSyNzs0DJM4QK7TTC2BeVAq1vP%2Fk5R2vXNhoT6SufuYFbuWqG%2B3u7M1AS8xWnBJhmvACIYaZOpHqOVCq1zmm1hmyB0FJYwMw4wa9uxfpLcUiU3k%2Bp6OlrtWQ7AOgODSZvC5lj0tHPA25TgcX5cC%2BssqWauHyNHJpOv2gZmD8WrSk6cEkePEmmmYAFMq6zvl8FVVDYUfnCo1nH2Mxi3JBPTlgaLJq7czA%2Bos4OjiEOiVwxJP3mce5Vvh4Y1yIWzbsvkyd9%2FrOpdulDi%2F%2FQg20WowUsqCHdRljDHfiuBVSR%2FxLp8y4RfyVacCiev5XtDaZw5XWpoMdhLHnXd3y86ipa1semuqZ1lNfKQ0rcXEAXwiRkglA8gtHbGbLxs9yxYwBg1gpxY75MKTj9MAGOqUBRwVtkjOh6%2BI0Ney%2BYzNCE0PJapqc3Gfe%2F6fPdfOou9nyfgjv%2BoBBskaGIWb4nO%2F5zUVJjpYAahhlSqiI4wKXEbbntRA8MzSmCy1hhkBHbRj8vXuMkXUsThGz%2BPv4lVHJJE6jbrVdh3J7poOcgKQQ%2Bu3eyUsvDKRBW3sMlr%2Bc0BkCeabRfDJYbO6RrhqP7Zg0YbjV%2Fb2n8MKictIctfxUwloassAy&X-Amz-Signature=4254d9f597f66389cad3dfb5afef56e316ab99e3b11b6d9ce5a09262ac5d9329&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P7PB5E2%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Bh%2FTTbchrNNI1ZGRIbb%2FxyhQAuX6p5s9t%2Bz0pO1vySwIhAKuzTfSmcp5IPhWlV2pFQA25ucWYrIWNzBOwpDNSTbwMKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaOe%2F%2B2lbL5B0gsRYq3AMkL2nupHYZnIzqdGkaz1Je8grfnxym2Ucuqc3HFl234HO2HQSgZICyf%2BDE%2Fo1RwPK9vO%2BjiLQRKlQBwYzurHpicEriKUMzETTzNswQ44zASrAM1w7tSl2HJFGfrpUV%2F4FzwOgITUehzPkUTQaO044cWGDtTalVchkgqzLnfz%2F0xljkYe66AO9xkz5rhalDJzWqlD7Ts0z0n19cNDBvsm7wjqC4N1p9IUnyRkyfxbggGx2xkYOyqB4rVlDuqpXCETq6wy03zPp4tP6iumL2cJTTyQocu7Wh%2BbwosPMXHV9QieLVObPisYbceWemvag0%2FBhVTdNfMLRIK0p5qMeFf1Ls60ebgErXs%2BRICDQWDwFBYP6mLNg5dvhElmfLGH6dXIuD8uQsE%2FetMMFAqFtoWje4J9qOnJ5wgJeg7zho7h2WirNh5aDiJr8w6geyTbg9UkXd%2Bk6clgEPKTix7fkYZhP1hlGXLpKc2pz7sQ0zwzh%2ByQexwJdY%2BD9HW9FU5axG%2BajT7ZAGzCerHNpZtI7WWXqztIgnA3P%2FhiVV5RRl5hOWC44pZxz3x7h2XqfrlfvUxKPSTHAoI10plaD86UvFTd0SVT%2FJcPx4a2oCWWYrlFKJi1%2FVWLtZ7UDF%2FqGrLTCf4%2FTABjqkAcrNgVDZxOvEzjMwiyvmkUNCMaMwdBQYu4ToljilxNMoIO3nQBeZOuvkYF%2FAmWyHhbNl6FzRSN4wKwGarNdY8VS2UFQc41AcDam%2BrVSqGxU24Sh6p5RuJxph5SiOrReOE89TtCWuCZED9iaLpCoImWQEIqpfqB4V9X%2BZgVikvdeQYaY5H9hlJ3NwCz72P6PhaFSyze8EsSNpwJoxIoFjqpqZxuH0&X-Amz-Signature=25345969be26bf2131856c660bb4b037bf24824d64f2bdb3b9acaf941527b2ec&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
