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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGZYLSCP%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T032804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIBgj%2FCpiLwnc0I5U9Vk9a38mrh814R3DtYCeMv78XFD3AiBUYzw9%2FsRdXaJILJ%2FJc96vx7AJZpFQazXJMCVYRXhSDiqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuQhPWk3ZX2j7fNE0KtwDxJjpq2sR4zWTZWLWJsk3JlUDToHc77pj58ktp5F8VIJ8tDSfiSwf8%2Fo46y4XclDMGSMnluGNS96DstOuBvv5jpTxLx2WhYl0Xyz1DSpp0vqoWSW%2F0X9pHP1WZGdwF%2B8cKTAmd7vaJ6D%2BZbfwz3hqdNUkAL%2BF%2Fq2RBzEuelp5PUmQpCU1WVJbbbShuQfsbmSuMiGifxKU3n2PGIAWqe51n5YcCa4ByaUIe9tP1wbJEKyaOyv2QWN9DuedNl6NPaEkSE5MjvdiXpnJLEJJN9JeoJBNTh91zZk9czRJE9AdECYyUU0Ck5oP%2FvoSggSGXEv7RH8YRBUK21OaWaGaV5g91G9%2FmDmaKC307W6lQb%2B2K6ch05%2BnCHtX6UpdjxpQJxnoCvLc%2FwlELgifBf0QrsKOG1apo1Ty4%2BzPXCncF7dqTt%2FXfhwFI7%2FfCP%2FeEJJPNs3Wewv5vesZQuf7cgi0qYaVByq5M4hNRjSt7U4ZkdlQAr5oLPwqTMkru6PDnVYFMUUWjQM0TJlQSXzOXFA36W77bkxgq%2BA7pC8T7EH3zBVyM7WKkKnF8V5XtHszIs6qlXnCWh4162DHaTDso%2FydDf6q4g1CKQGC1sTnGaemC6dopAl%2FtpmA7JPqtaduMY4w%2FYmcwAY6pgEp2bRBEH1f%2Bk%2B37vVvT5shwH0DeIEMBaHj6u8qY%2BxyNkxpHmZfqjJmqGSP6P25ono6SYaCIOgPYniWCBdblKsZvxwbtQ9UeAiv61jyfWmyE44MiDsLcVX%2FYLX5fJ4ICvm29uHtgifd%2BMNfXzn9OosUJLvilmi28zL8AEIO6GlxEtrJL4B6DTaUViAXMmXgpwPdDiykB%2BWJFg9taIMbGeTKkuDpW9jI&X-Amz-Signature=3bd4e09f627c407d584e3697357df9fa6228224efe6dd42fb94a4fd21b93fb91&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGZYLSCP%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T032804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIBgj%2FCpiLwnc0I5U9Vk9a38mrh814R3DtYCeMv78XFD3AiBUYzw9%2FsRdXaJILJ%2FJc96vx7AJZpFQazXJMCVYRXhSDiqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuQhPWk3ZX2j7fNE0KtwDxJjpq2sR4zWTZWLWJsk3JlUDToHc77pj58ktp5F8VIJ8tDSfiSwf8%2Fo46y4XclDMGSMnluGNS96DstOuBvv5jpTxLx2WhYl0Xyz1DSpp0vqoWSW%2F0X9pHP1WZGdwF%2B8cKTAmd7vaJ6D%2BZbfwz3hqdNUkAL%2BF%2Fq2RBzEuelp5PUmQpCU1WVJbbbShuQfsbmSuMiGifxKU3n2PGIAWqe51n5YcCa4ByaUIe9tP1wbJEKyaOyv2QWN9DuedNl6NPaEkSE5MjvdiXpnJLEJJN9JeoJBNTh91zZk9czRJE9AdECYyUU0Ck5oP%2FvoSggSGXEv7RH8YRBUK21OaWaGaV5g91G9%2FmDmaKC307W6lQb%2B2K6ch05%2BnCHtX6UpdjxpQJxnoCvLc%2FwlELgifBf0QrsKOG1apo1Ty4%2BzPXCncF7dqTt%2FXfhwFI7%2FfCP%2FeEJJPNs3Wewv5vesZQuf7cgi0qYaVByq5M4hNRjSt7U4ZkdlQAr5oLPwqTMkru6PDnVYFMUUWjQM0TJlQSXzOXFA36W77bkxgq%2BA7pC8T7EH3zBVyM7WKkKnF8V5XtHszIs6qlXnCWh4162DHaTDso%2FydDf6q4g1CKQGC1sTnGaemC6dopAl%2FtpmA7JPqtaduMY4w%2FYmcwAY6pgEp2bRBEH1f%2Bk%2B37vVvT5shwH0DeIEMBaHj6u8qY%2BxyNkxpHmZfqjJmqGSP6P25ono6SYaCIOgPYniWCBdblKsZvxwbtQ9UeAiv61jyfWmyE44MiDsLcVX%2FYLX5fJ4ICvm29uHtgifd%2BMNfXzn9OosUJLvilmi28zL8AEIO6GlxEtrJL4B6DTaUViAXMmXgpwPdDiykB%2BWJFg9taIMbGeTKkuDpW9jI&X-Amz-Signature=d5fd108776623c6aac3202ac25d40460039606db4ce5a56fa2d0fdad57b56254&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QPLVJL7%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T032805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIGy503bc%2FWsRtdWEMt3Tgwu%2FaNk52Q%2FY%2FfjahUGXZqE%2BAiEA%2FMNSIkzsOXr7%2FXIykabEMciklSpH6%2BUKnXaD7n4xVEYqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVBqkXXZgqNh0nATyrcA49FGzlVlG9wLwcEwU%2Bjk0DPcCRHiBqVLTdZHj3RlsBDchlMED6NOM%2BsZaSix8EEO6o4ZHUKXLbPf%2BNy%2BMWuIjzRd8wS3OP4sbBEYkOqPUbMHNvEFkmhPwMeOxcDjwrmAp2JIxpp%2BiMMiS6Bt50BdaCPVOgvtdXxjkfouc29K8GRx9PzpVtCWlCmKXngl1oG0fpTQB20vM3Kg3g8G1mBZUGuUfeuZLJTG%2BK4mlTqc8LV4VHzaiC4Qx9aekK98Dgtfp9h6krSy2KcHw90L1u7khZ8viSRz1g%2B1dn2jWE4U%2BcDd7wJwIwRCYqGRhcClLxMsdXBOLvv17rni6y7wKuqYiOzrjrHZpg8EKCeU2Mdf0dNyT9RpSQocj8S1LqZgxiHubgPISZkl6nyLwwlmc4W9iZR0%2BB4fIwagpLS0SFPnpQwoIDkoloYdZ2kSmr5KE1uSly78v5tY5u46BnXsoSKXcKcxuuOf3Yv0ZFqP4Q3bzB6dx9ef5eq%2F4Y2sbrY4SPNo8bMGUjOyC4a4OdIdbfoDkKjnZiP%2BTb%2BX57gvLENVQhjjVhJyl5RtT1H%2B23jf61OjPAtDJPhd%2BiIqF0X7Be1%2FmqsD%2F7MluugjLKzl%2B8W5IiDSokSiTTi3eC1j8snMKCKnMAGOqUBFV4%2FgwQcaoM3QG%2FREC3%2F22ItVemWFAZ6IqCQnS0G1sYFZZX8aybMehpOj5s3d29oFL1fluHgMhKoxl%2FSaZmFBgFhHaWwx%2BUVbHdmaO36ce%2BCXqoKmCBBeptLUz9u1P6NGmJ4sUh326VES5%2FQ7R5MX9ZB%2FzBFgZePwNW0ofw0ltFSJAC9U2xTmVmsmIEMQqG75%2BVlQ%2BBzIzyDoV6qNO1IpEaKSUnx&X-Amz-Signature=e32b40891a6a86e629108cf58b5fa42f8ca03e8e870060b56033cabfc03e64a5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQLW7E32%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T032805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDEok4ln%2FFWV079SJFtJ01OcM5sgxPIVUCtCxBtmcL%2FbQIgHq9a%2B0GZa3KbnpEWIVuRfAreoAv%2FqpPmdmatYIBni7kqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA15RvhYwBoqlI0cTircA%2BZwAu8aZ5OxT3sf8vatDMA4O3GehKhjyUqEKp4SmC5HL738k8JOv%2B%2BU7%2FSGq0cQWMzEosuwe5vtk45a43haVu4RutXG9Ua60HIxZQIQiKmpczPEObcoZA4O0ExlX%2BAeuaZ%2BldsruOM39xsn57NWt1VWlcahBX3e6Pnm%2B63l82uHjnlDQyG76RSPz%2Bk5uKdBgqUntC%2BX4U1WOo5ql9Re1JFpVpppc%2BJ0eohXxfE8ZoxJAWdgxznAFvKKNq%2B%2FIVWtthJCl790G2kOaxnIFnE1d8tn3HwDoYlWnnOPl590opq8y5yKO5GL%2FmfrD5L6rBIphtrZ0vjiggXgTas1jqah%2BmTi9JyA%2B3IAjLxI%2BNPBUY6eZD8IRFBVXzON4B4iyExbTUawt5tvboXc5FNymBlvbdK2GFiXMyTe29uZgIQutY58smxfQclwY2SqhnQbv3vk5bdOjd7lsuDApE6SZt349LfZn7djuZtO%2BmhmuFwy5ujFai9tc3hxFATheFeg%2FFTsNjKBhzr1mQ%2BH4TKAY1anwE4u1fr3ewIWv%2BonnsthaZX4uKfkhRrdyT2duYSK%2FC4vJTvKx58EZQ5LoYjEkdNd4YTVf5ShxxOR7EgGnjYXT04hwvBYpsKUxz34s%2BXpMIGKnMAGOqUB2PZ6A7QwvkMQGbUWdV2r375uE51ZbnZobSCxVxjh9WxCG5HYYHeomGZLKk7fh3ZXZu2NsCIvg6pPTSQlRd4oTgGIlVM9wMLQtLl9MOwuIYmxRgRtmBSXgD%2FmESBbKjKlWkkKdpY2qjDozn2%2Bol4VItJTqmZtjYBvvJhUn43EXPgfRm2uE%2F4XLdrvaMoiDjntZCyYJ%2FGbfN067ih0jVmkGIk3gCpW&X-Amz-Signature=6be3b808e68bbe0a40e63ad0bb717900ddcbb7b84128f06201a8a0b0d4062194&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGZYLSCP%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T032804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIBgj%2FCpiLwnc0I5U9Vk9a38mrh814R3DtYCeMv78XFD3AiBUYzw9%2FsRdXaJILJ%2FJc96vx7AJZpFQazXJMCVYRXhSDiqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuQhPWk3ZX2j7fNE0KtwDxJjpq2sR4zWTZWLWJsk3JlUDToHc77pj58ktp5F8VIJ8tDSfiSwf8%2Fo46y4XclDMGSMnluGNS96DstOuBvv5jpTxLx2WhYl0Xyz1DSpp0vqoWSW%2F0X9pHP1WZGdwF%2B8cKTAmd7vaJ6D%2BZbfwz3hqdNUkAL%2BF%2Fq2RBzEuelp5PUmQpCU1WVJbbbShuQfsbmSuMiGifxKU3n2PGIAWqe51n5YcCa4ByaUIe9tP1wbJEKyaOyv2QWN9DuedNl6NPaEkSE5MjvdiXpnJLEJJN9JeoJBNTh91zZk9czRJE9AdECYyUU0Ck5oP%2FvoSggSGXEv7RH8YRBUK21OaWaGaV5g91G9%2FmDmaKC307W6lQb%2B2K6ch05%2BnCHtX6UpdjxpQJxnoCvLc%2FwlELgifBf0QrsKOG1apo1Ty4%2BzPXCncF7dqTt%2FXfhwFI7%2FfCP%2FeEJJPNs3Wewv5vesZQuf7cgi0qYaVByq5M4hNRjSt7U4ZkdlQAr5oLPwqTMkru6PDnVYFMUUWjQM0TJlQSXzOXFA36W77bkxgq%2BA7pC8T7EH3zBVyM7WKkKnF8V5XtHszIs6qlXnCWh4162DHaTDso%2FydDf6q4g1CKQGC1sTnGaemC6dopAl%2FtpmA7JPqtaduMY4w%2FYmcwAY6pgEp2bRBEH1f%2Bk%2B37vVvT5shwH0DeIEMBaHj6u8qY%2BxyNkxpHmZfqjJmqGSP6P25ono6SYaCIOgPYniWCBdblKsZvxwbtQ9UeAiv61jyfWmyE44MiDsLcVX%2FYLX5fJ4ICvm29uHtgifd%2BMNfXzn9OosUJLvilmi28zL8AEIO6GlxEtrJL4B6DTaUViAXMmXgpwPdDiykB%2BWJFg9taIMbGeTKkuDpW9jI&X-Amz-Signature=8a657319d984bc099e1dfee22fcf618789f16732509cce3d99e29f42a82d8f1e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
