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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYQQRHUG%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDPhAo0meTW7JXfQvCe%2FE48nMMJo7hixxj9xvWFL%2BjchwIhAOsxZT4Pyfr0kK0NKQD1k1SW%2FU7W%2F50YMiuXKXJ2X%2BiNKv8DCDEQABoMNjM3NDIzMTgzODA1Igyo3xSC5nye0DwusNEq3AMqLp8dtEII9ntKeEOZN8F%2FQ1FsHdVx5BvjNtJ5eN4tnNfCehEWimeygfatmPidl2hM757n%2FExsGqX4ncdF%2FI3gZiFyW48vXJxmPL9eEkbOPzKRZP8nem4gRvgwsfV54AX6jZkxPY6eiBEHpo6Rm8lIN5iPa2LQyQAi%2B8667y3y9MjdtQ0dJhPm1HKyY%2Fa2yU%2BVPUN0yG%2B%2FZ6%2F%2BwoWc9qUsFu3NsQHpHikO4Hsv%2FZ%2FOy3AZ2fYfMz%2BScVBcdTFBefteuxj8U0aGGslEjr%2BNrl%2B1Xggf%2BUcvPr%2F%2BEUvjRzNtMbIlN0RoWFgwWUukPk39Vb7yahTyhQrdJ8y4%2FNLMefdmOaYIkNTlo00Zeb24XWWwrSfNwNSvJ97r4nJwuuWwakbAObo%2Fkbq9%2BULgAYVotoiSTwLkHqFpRopRHIRl40FP7%2BJXwRFM%2Bm8pT5InsYX8CPOzooPRkQJDThoB7fXLSMrTbBsJQSScXCl9lx6t7zebboEGvxDnlAraCKYHrj0Bxfi%2Flhmgp8JdbIJFIn4hdIw0UUP2kLkAHTPNxqpn4LIi9fnEbhxezP1zTbH%2B1apE8WaV%2BsTHhA5Fq%2Bn6hcKLLBgcmO1HL0t4IYH4P3J%2B2hnp%2Be3pS4OlJn1O6wIDGzDj6Ii9BjqkAfvskiS6MmI3cfK3FmESCqjtLFi6yvrz5hGOHgoufGORKhY%2BIjtPAUvH3wdEwpaEX3n7wwrf%2BdzgtPyBAeloTJy%2FE1EpWGZ6KxfRZYdTH4IeeoKKx545wvHYf2%2ByZjliT5tiIXUfRGMOKgtVSHemf8vSMRFSs7bvtkk0vg3pLdt14DWUhFY%2F6mzThrKi9ns%2BPUpAZxpjHyiHJwNNhh3h3GTPIWgb&X-Amz-Signature=f69395cd405455e9f04bd21b04f24395621f2855b7418e3841ab1ee7a40028a0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYQQRHUG%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDPhAo0meTW7JXfQvCe%2FE48nMMJo7hixxj9xvWFL%2BjchwIhAOsxZT4Pyfr0kK0NKQD1k1SW%2FU7W%2F50YMiuXKXJ2X%2BiNKv8DCDEQABoMNjM3NDIzMTgzODA1Igyo3xSC5nye0DwusNEq3AMqLp8dtEII9ntKeEOZN8F%2FQ1FsHdVx5BvjNtJ5eN4tnNfCehEWimeygfatmPidl2hM757n%2FExsGqX4ncdF%2FI3gZiFyW48vXJxmPL9eEkbOPzKRZP8nem4gRvgwsfV54AX6jZkxPY6eiBEHpo6Rm8lIN5iPa2LQyQAi%2B8667y3y9MjdtQ0dJhPm1HKyY%2Fa2yU%2BVPUN0yG%2B%2FZ6%2F%2BwoWc9qUsFu3NsQHpHikO4Hsv%2FZ%2FOy3AZ2fYfMz%2BScVBcdTFBefteuxj8U0aGGslEjr%2BNrl%2B1Xggf%2BUcvPr%2F%2BEUvjRzNtMbIlN0RoWFgwWUukPk39Vb7yahTyhQrdJ8y4%2FNLMefdmOaYIkNTlo00Zeb24XWWwrSfNwNSvJ97r4nJwuuWwakbAObo%2Fkbq9%2BULgAYVotoiSTwLkHqFpRopRHIRl40FP7%2BJXwRFM%2Bm8pT5InsYX8CPOzooPRkQJDThoB7fXLSMrTbBsJQSScXCl9lx6t7zebboEGvxDnlAraCKYHrj0Bxfi%2Flhmgp8JdbIJFIn4hdIw0UUP2kLkAHTPNxqpn4LIi9fnEbhxezP1zTbH%2B1apE8WaV%2BsTHhA5Fq%2Bn6hcKLLBgcmO1HL0t4IYH4P3J%2B2hnp%2Be3pS4OlJn1O6wIDGzDj6Ii9BjqkAfvskiS6MmI3cfK3FmESCqjtLFi6yvrz5hGOHgoufGORKhY%2BIjtPAUvH3wdEwpaEX3n7wwrf%2BdzgtPyBAeloTJy%2FE1EpWGZ6KxfRZYdTH4IeeoKKx545wvHYf2%2ByZjliT5tiIXUfRGMOKgtVSHemf8vSMRFSs7bvtkk0vg3pLdt14DWUhFY%2F6mzThrKi9ns%2BPUpAZxpjHyiHJwNNhh3h3GTPIWgb&X-Amz-Signature=425375382c409b2722de954e949c1faf807e64fe32c62e96349d19dd30792f76&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MRZVLRV%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T160854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDMkjDAEATlfIam7cczHzPwiBN5q3HHQEcuCfU%2B6bFtvAIgProk6fOa5eeLVHBENFMXLkQMZJEuIrA%2FzmuB%2F3smbAoq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDHKdaVNkRqeXW%2BC6kircAweW3crj3DBnPGIrVMzyhKS830eQ7G1s4kzWVFfl%2FnG6rMfo1ompmAK2v8y6wk%2FRDLfAQ3Wd8EAr7eT7aI7XftjocuiyPIU9MEP1s6GBxHlRdgoQGk2InLAY43FiH%2BDGwF1juq10ku9J2M5FPCdAJagMVmqOd1PFN7L47EFQ0ioRozzCHtE58DKPYUkTgcax8HQFpyABdstVH5zin3K0k4fMqC6cmLIEvR2tR9Cjzgq55U7VC%2FVAfEsd8c6QicYsXukxCoD4UNxV3iMCnvu%2Bc78CP82QJeiOWzEkxvYo%2BJhmIkXiJUa7DvOS2WDIdtA70YzTxLE3oz%2BqeqcTzTkIAj1nRfUf1PEm34tvAgON1mP%2FujHV2LLTyxc9LO%2BrgB5MytDQ41VBezgljznVW%2Fhr96Q1%2BobAo3ZfklbMSFEENJRFDrtlSXfmqxnT5HMCvYrgCAoATxMmnyaNgIf2Ff3yY7ZJfi4TlHSxlJwyi0rhOj%2FlTcpMlvcSnIs4z4mbsnnvmLIPGMurDpTlXwzlUJO3lK2NvBAXGiR4X0l4XBHN1RqcgHx6CwgkC6r5iIkxjkrq%2BTumTLrhN7wQrPwK517j7Nu4%2BwVRt%2BnFYxyG3LwDGV6i%2BhrFlDM%2BgvqoUESnMIvoiL0GOqUBm0498wTOSZp44Wo%2BRdvwV1aw6cT3ri2bwKeU0tpuPCX5iluz0GaydVNhXHlAUh%2Fp4ulCO3kmdvobF8ZkHkJ4kvXKG6LMrY5Nk4%2BQbDyr%2BZ%2FStqiwF5m1m5YSlhADGOWydzvQTXaU0ljEqQ%2FRL0VDUOMAlV5cUCjUJ%2F%2FbhmPND81WfLNxI0JuMBu3psFBxrAmBnBCUAUrIbqZpBIQA%2B8LbtFw3CyA&X-Amz-Signature=c193533741668709e99428ce4adb7a79e6bb72ea6e7c751d026508c4bdd7bc6b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS3GTAHC%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T160854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDzBH906DAKY%2FRKD0yYvN0eR0UAF0Hiim55xewLDyZWCwIhAL56Zv177KCbTleCC5%2FBaoRn1gF1VLE0i6kqzVgiw%2Fp4Kv8DCDEQABoMNjM3NDIzMTgzODA1IgyxbfZRGHxzjFnUmk4q3AMBvht5FvacYSGGVLQvapwr3NLDi37qnFk8vv7FaZ6wwM%2FXjihPz2SjRQlKnpirVQuRmAyfw3wdZa1lZF4W13A7KNSX3OerKI78LLuuD6uoFy7P7SWTwwKvIz9KbL%2FO6Y1DOlfzFcn%2BheE0zxI1VxjyyQDdYHISwZhcs%2BPd2FueF5U1lqPaBzcXUtmxJS36RViHy8DK%2FEIBL9L8jwe112pbFbLMUDP%2FInNdjzJTuejmVxXzyfzgTE2JbXLB5E6oWM2sKezOavS7xmo3Tw6tMgkchJvRKVzmPnb80fX8eJWXDH%2Fq448V5wZW%2FEAHOi5uo1Kwd%2FCopYgFQRNmAJVW0lynSuKrxqtswteOsYAf0mCNy80Q5RFywF2KuhdvIr5jWDLNj3402gzn58RwSsAGXTfz6qbkG2Pj0hfe232bto%2B35qRm8aDXT4mzy8XhH%2F38grD8U1j99Mf46dB6ODMPfX1UmgCZyIYWqPoFBP6zLB1DTVFU51MwzhyMzMFRc1yU9n49PXXFdafFSyY4bRJ6QoVUo6oyod8AKwbw1zyOlB%2BAiKnMW7nS4hrVUzQ8W%2FtGHvOcbYdI5R30ZRhnLFEKrGL%2FUXFeKduI9kRWPgbPeYIs%2B7PyqmZJX7y58ydWszCD6Ii9BjqkAfhgO1JbR8Xs5yAB%2BUAH%2Brq7H%2FXFcspRwUeCboNnwTQIirS7xXWL3ELbHz1vnvM5wt7k8aoaYNytH%2FFCeOfPaiz1RAhg9ci9wEH085DH4OvNxNn9wB89zNCv5BTpTJv4vqf0xt8m7mtg1p71k1FSTiHSERhSKSW%2FME%2FwUmLv5O4Pln9AW9tKaLN7ycQHFhf9MGWQhAvYvHdZBErxd3mNp%2Bqyf%2FZ2&X-Amz-Signature=e8f670d0727ca9f242c8b483db15099a4f2e22c0ea9a01e36d0540e8b33427ed&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYQQRHUG%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDPhAo0meTW7JXfQvCe%2FE48nMMJo7hixxj9xvWFL%2BjchwIhAOsxZT4Pyfr0kK0NKQD1k1SW%2FU7W%2F50YMiuXKXJ2X%2BiNKv8DCDEQABoMNjM3NDIzMTgzODA1Igyo3xSC5nye0DwusNEq3AMqLp8dtEII9ntKeEOZN8F%2FQ1FsHdVx5BvjNtJ5eN4tnNfCehEWimeygfatmPidl2hM757n%2FExsGqX4ncdF%2FI3gZiFyW48vXJxmPL9eEkbOPzKRZP8nem4gRvgwsfV54AX6jZkxPY6eiBEHpo6Rm8lIN5iPa2LQyQAi%2B8667y3y9MjdtQ0dJhPm1HKyY%2Fa2yU%2BVPUN0yG%2B%2FZ6%2F%2BwoWc9qUsFu3NsQHpHikO4Hsv%2FZ%2FOy3AZ2fYfMz%2BScVBcdTFBefteuxj8U0aGGslEjr%2BNrl%2B1Xggf%2BUcvPr%2F%2BEUvjRzNtMbIlN0RoWFgwWUukPk39Vb7yahTyhQrdJ8y4%2FNLMefdmOaYIkNTlo00Zeb24XWWwrSfNwNSvJ97r4nJwuuWwakbAObo%2Fkbq9%2BULgAYVotoiSTwLkHqFpRopRHIRl40FP7%2BJXwRFM%2Bm8pT5InsYX8CPOzooPRkQJDThoB7fXLSMrTbBsJQSScXCl9lx6t7zebboEGvxDnlAraCKYHrj0Bxfi%2Flhmgp8JdbIJFIn4hdIw0UUP2kLkAHTPNxqpn4LIi9fnEbhxezP1zTbH%2B1apE8WaV%2BsTHhA5Fq%2Bn6hcKLLBgcmO1HL0t4IYH4P3J%2B2hnp%2Be3pS4OlJn1O6wIDGzDj6Ii9BjqkAfvskiS6MmI3cfK3FmESCqjtLFi6yvrz5hGOHgoufGORKhY%2BIjtPAUvH3wdEwpaEX3n7wwrf%2BdzgtPyBAeloTJy%2FE1EpWGZ6KxfRZYdTH4IeeoKKx545wvHYf2%2ByZjliT5tiIXUfRGMOKgtVSHemf8vSMRFSs7bvtkk0vg3pLdt14DWUhFY%2F6mzThrKi9ns%2BPUpAZxpjHyiHJwNNhh3h3GTPIWgb&X-Amz-Signature=f5a38b331929471a2901ee29c6bb99e356458e99be66071de07f668e35c94514&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
