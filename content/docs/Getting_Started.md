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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4ONOC2Z%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIDHwsfy4dEhg7VabFjUw8FV3aGxunCVeMeQhAHTG9VfKAiEAmXwNRImiNeQqrgK5Ud2RTKgZpsp8qlvEFmLMw0OYsysqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWWOfV89k5E5kd0circA6jz5TptYGVXHsV9cjXvLHNHilLKQTrFDYUWrLujqClf39uVORq7RMRhXS79tFgYmzppPXseIetLUVphUFFyk%2BOiNoUUvTZnbbUA0e%2FNaW9H7IL3%2FOt3GJREiKs0HtM3J0g8ngrvNVwtUxwH5gtOZtNKLQAAJeZzeROj5faeoETQQokQUycR9yid5NMM7lZfVxfVfg0%2FTfPhTfshq9C2KbtAnXDrAzi%2FmfnzDzvPRjIamk3PfbDNJGZUSWbpbKZYteBnovcWTilk5bX8F5yUBvOXnqk%2FVd2j%2Bc1UNfp6z00BPjqtX%2By386lWl0A%2FISQpaMM9b0KPA%2F30E5geRUm62Pq9bWmMA%2FnWJmmN28QZIdI7eWHxYfGtkwkZ%2FDpMlPbjnGtJEACIoDQ7RPg8q53U2ZnhLVuY3IkVwvqy8XaQgXvpxG%2FS9ZJNnA1lTzEDI0XuZx2JdY2Dz7OXlrS6d1JxCmsE4t8kSUUAdrPVYhBYoGnmnpL5UhuizQbamgSRePaCytRjWm1kbSFMgtNIw5Hcgg3jFKeILm%2Bz94TnztbciQFuhjme6h88zw7qjTqQg9MXNe6gXtmckXmzBeOA3le8QvLZ%2BVpiEvifB1tqrBXvlCj%2B124%2BNu6Srb5SITiTMLaU1MQGOqUB9HNnicDLmBZMs3zLypriNGCwsJYUypD6ZE%2B%2BQ8HA5CHujjRqvTldY2LwOd7oFqFWwP0U%2Fs%2BbKUUqszMSjEfZ8MMI3RNvIlX8aLVks8MMzuIX5NCAbgK9v%2BO38EKyYwtxZADSUDT8af3QeDbO1qmoazR7Hsd%2BDi6G4dn0TFOCozDaPX95oMiY2VFsEeu8LegyEUa81D7GAAHmbMtj4B07OQnnBf0n&X-Amz-Signature=ddadae37533b3a410a644d775d8a3fad6469e1da3c1b7ddb124547e3070ca4b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4ONOC2Z%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIDHwsfy4dEhg7VabFjUw8FV3aGxunCVeMeQhAHTG9VfKAiEAmXwNRImiNeQqrgK5Ud2RTKgZpsp8qlvEFmLMw0OYsysqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWWOfV89k5E5kd0circA6jz5TptYGVXHsV9cjXvLHNHilLKQTrFDYUWrLujqClf39uVORq7RMRhXS79tFgYmzppPXseIetLUVphUFFyk%2BOiNoUUvTZnbbUA0e%2FNaW9H7IL3%2FOt3GJREiKs0HtM3J0g8ngrvNVwtUxwH5gtOZtNKLQAAJeZzeROj5faeoETQQokQUycR9yid5NMM7lZfVxfVfg0%2FTfPhTfshq9C2KbtAnXDrAzi%2FmfnzDzvPRjIamk3PfbDNJGZUSWbpbKZYteBnovcWTilk5bX8F5yUBvOXnqk%2FVd2j%2Bc1UNfp6z00BPjqtX%2By386lWl0A%2FISQpaMM9b0KPA%2F30E5geRUm62Pq9bWmMA%2FnWJmmN28QZIdI7eWHxYfGtkwkZ%2FDpMlPbjnGtJEACIoDQ7RPg8q53U2ZnhLVuY3IkVwvqy8XaQgXvpxG%2FS9ZJNnA1lTzEDI0XuZx2JdY2Dz7OXlrS6d1JxCmsE4t8kSUUAdrPVYhBYoGnmnpL5UhuizQbamgSRePaCytRjWm1kbSFMgtNIw5Hcgg3jFKeILm%2Bz94TnztbciQFuhjme6h88zw7qjTqQg9MXNe6gXtmckXmzBeOA3le8QvLZ%2BVpiEvifB1tqrBXvlCj%2B124%2BNu6Srb5SITiTMLaU1MQGOqUB9HNnicDLmBZMs3zLypriNGCwsJYUypD6ZE%2B%2BQ8HA5CHujjRqvTldY2LwOd7oFqFWwP0U%2Fs%2BbKUUqszMSjEfZ8MMI3RNvIlX8aLVks8MMzuIX5NCAbgK9v%2BO38EKyYwtxZADSUDT8af3QeDbO1qmoazR7Hsd%2BDi6G4dn0TFOCozDaPX95oMiY2VFsEeu8LegyEUa81D7GAAHmbMtj4B07OQnnBf0n&X-Amz-Signature=e0d3b27ec4e80dd9f79f7e2b4cdf7b7ff823a73bbdcc905a40a49189b064545a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4ONOC2Z%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIDHwsfy4dEhg7VabFjUw8FV3aGxunCVeMeQhAHTG9VfKAiEAmXwNRImiNeQqrgK5Ud2RTKgZpsp8qlvEFmLMw0OYsysqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWWOfV89k5E5kd0circA6jz5TptYGVXHsV9cjXvLHNHilLKQTrFDYUWrLujqClf39uVORq7RMRhXS79tFgYmzppPXseIetLUVphUFFyk%2BOiNoUUvTZnbbUA0e%2FNaW9H7IL3%2FOt3GJREiKs0HtM3J0g8ngrvNVwtUxwH5gtOZtNKLQAAJeZzeROj5faeoETQQokQUycR9yid5NMM7lZfVxfVfg0%2FTfPhTfshq9C2KbtAnXDrAzi%2FmfnzDzvPRjIamk3PfbDNJGZUSWbpbKZYteBnovcWTilk5bX8F5yUBvOXnqk%2FVd2j%2Bc1UNfp6z00BPjqtX%2By386lWl0A%2FISQpaMM9b0KPA%2F30E5geRUm62Pq9bWmMA%2FnWJmmN28QZIdI7eWHxYfGtkwkZ%2FDpMlPbjnGtJEACIoDQ7RPg8q53U2ZnhLVuY3IkVwvqy8XaQgXvpxG%2FS9ZJNnA1lTzEDI0XuZx2JdY2Dz7OXlrS6d1JxCmsE4t8kSUUAdrPVYhBYoGnmnpL5UhuizQbamgSRePaCytRjWm1kbSFMgtNIw5Hcgg3jFKeILm%2Bz94TnztbciQFuhjme6h88zw7qjTqQg9MXNe6gXtmckXmzBeOA3le8QvLZ%2BVpiEvifB1tqrBXvlCj%2B124%2BNu6Srb5SITiTMLaU1MQGOqUB9HNnicDLmBZMs3zLypriNGCwsJYUypD6ZE%2B%2BQ8HA5CHujjRqvTldY2LwOd7oFqFWwP0U%2Fs%2BbKUUqszMSjEfZ8MMI3RNvIlX8aLVks8MMzuIX5NCAbgK9v%2BO38EKyYwtxZADSUDT8af3QeDbO1qmoazR7Hsd%2BDi6G4dn0TFOCozDaPX95oMiY2VFsEeu8LegyEUa81D7GAAHmbMtj4B07OQnnBf0n&X-Amz-Signature=58afa60ea8c8cd108c2ebfd853074bc8c92df6d4c6e8a5f767897fe82f211e8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R273YO5H%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCID%2BhhTO3tb5%2BsWNKPqSGu0oSuIskhxnio6zMbjV0jq1rAiEAsCKaeSqa4hZC68c%2Bg%2FdUpJX0TWw6ZS7tbG789OK4zswqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK6LauAO%2FgYXWxBYgircA2whdoQdKW4Yn7tg%2B3OeRydOt7yeHmW1eRpjAp0dnNdL9PTkGJkHCEYT1PsksSaUP9ugjBkBxRl1oJJd13zBpeG8tIc8PoKTFKnG%2F4DC3IwDjEbCzV4l9ejiHws2XtDApRTYg2Oqwl9BmS5%2B5rsBiJMOjsMuaIzY0ZVRMv5GPAMZdpCDDol08u0tZ1RIVLqNKEwlcX43yTPDLUcbSTEKZj39hdoCJmAT7xUrrIDPfo3Nk%2BGG6Dg8UCk98Ig%2F9im%2FrI8grfF1m90EIdyAhltWPd7OxvAz38ZRFFaW5aXlGdFysurlf950zQ0ednfUV%2B8%2FH7csZdii1bxiueeDbPrci6eGVJ3yCSGXc9Fbg8ezzgpDjALox0%2Bp%2BTwmSrLxjsc5%2BXNg7QMCrH6hfkuha7j2ScT%2BUCFnVXVsbJ2DdJGXfAiCN1xkMJofmj2jTjUCIU4JXOOEO8LYK0hKJx5HM7eEbbvc8iSPwLtQWm3KiE0dd0Ft451G2j4bAIVIpVZHdXO%2FTKe%2BiBhVflnRmC3UeTEjrJDeBzBpYev5M9EFhoo21V38D3jlSvjFtFoxQX0ElcPAn5cOpbVFL8RB4%2B199zDvDbo9K2ZytFS9pB%2BOfpXK7uQavHuvjGjUS%2BNd%2F7mzMNKU1MQGOqUB00s%2BxZB8AJfUHZgdgvFpj2zJ1RZkKfO7OY5zCsgqIJ%2BUH6OG8oJXgV1%2Fuo1hbukZvfQ9TwhkdI78pmCiaUO9AwKPWrX%2Bhq1oVU%2Fi0DgiKjn05o6TFwKDWLyWyaTlD2wtBrXbbr9cTelXSqtp7VJU4AFL01C49CLUByJfnis8aGHQ1VKK7LDFevQpYTf9QH5ZpgTZXTsfv3QoOysTwzez1Rf6NNaV&X-Amz-Signature=0d95225a2be5e6ef55f0ce8d4cc6ae7c13fded95612d75a608bb9d9cee3b5fef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSII6LSL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIA14m7sMOutoMBqbGJg%2BpI9mrPbFDTlNyeuRWnwzAAJzAiAVH5ncO9pt59H%2B4O7ZgVh4AgKePlqhniPVV%2F5Rgsb%2BpCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BvwtcuXy7UyqRk27KtwD%2F6EBqenPD1jUnY9lgHB2GMS%2FsaWMUVs%2BBPOFejejO2qr5AKHnjJQGjzaF2TdKXQsrvhzluf84d1NOim%2F0ZsbLjL0DiMckZrKDtmeePCh%2BkcGGaIWdhCMFT8P0qmaEoryqkFV1u7KvvYflyjUH0JEAIIzhXwmyqCTsv%2BOM8mRnpGn02Q2AZ7vb5fxhOJJI1sJXrNFf%2BPlYujqAleJ9qptH1TFwVf5rylWhRgnPY1uchgcqlgLu01x1pjH0S90FrizL1jbcfg4d8iCmiMqswMShkksf4wv%2B8qwKgMjkRevQ29y0gvTvS4FhBT5wrZMsyTX%2BLAXFhvbljs91kEijVaSj9GaRtHPXZheGslnK3HeGbjgXSJPaUUj0V4BeHiTR79FJkMsE5TYlYJZF979OmpjxmYD9Vk5K4S7KaXhbvvLzvjTFHbhe%2B%2Bfd2jQYuLXtGsqWJKmNuBJMAMOa4%2FlXVkJi1eghEbOmeOVAnfH1o8RmWlYzEbPhDlVsjEMRDcxws2MslIbGugyAQ6b5i5XgIphHq9E1bCua9QanOBhPXAsk5r5jw0l%2Frs%2B%2FbMftCvimkmMBocm%2FxKab1mg2vLgtHrcqRG4nNG0SbZ4rc2y%2F%2FLc1kGx2rDiD76wIMWM0Jww35PUxAY6pgFyzrt2XeAEICl7Ba0s0P4CnYDMdpGpGLMX%2FgrQesUzfh8lPXuOnQPFKMS3Xy0bhqCKbUA7Gkg36M9hRK6swpOhsyhlNDOwk6bUkESEbH0iTJ4MAvc%2BQcs2BoN9INTvZgcgwmmCIrlDsybh74Seympyo3QUfQ4N5nmiWmK4Rb2vJ3UkzwqWihiFlrH1wwu1qMz0c%2BQvBbDsvcjFg6mFkqVbTs%2FRGGZy&X-Amz-Signature=bdde74e086ee7678451ed0f4bc9f02b012a5e01a7b08c48d9c908faea13063cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4ONOC2Z%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIDHwsfy4dEhg7VabFjUw8FV3aGxunCVeMeQhAHTG9VfKAiEAmXwNRImiNeQqrgK5Ud2RTKgZpsp8qlvEFmLMw0OYsysqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWWOfV89k5E5kd0circA6jz5TptYGVXHsV9cjXvLHNHilLKQTrFDYUWrLujqClf39uVORq7RMRhXS79tFgYmzppPXseIetLUVphUFFyk%2BOiNoUUvTZnbbUA0e%2FNaW9H7IL3%2FOt3GJREiKs0HtM3J0g8ngrvNVwtUxwH5gtOZtNKLQAAJeZzeROj5faeoETQQokQUycR9yid5NMM7lZfVxfVfg0%2FTfPhTfshq9C2KbtAnXDrAzi%2FmfnzDzvPRjIamk3PfbDNJGZUSWbpbKZYteBnovcWTilk5bX8F5yUBvOXnqk%2FVd2j%2Bc1UNfp6z00BPjqtX%2By386lWl0A%2FISQpaMM9b0KPA%2F30E5geRUm62Pq9bWmMA%2FnWJmmN28QZIdI7eWHxYfGtkwkZ%2FDpMlPbjnGtJEACIoDQ7RPg8q53U2ZnhLVuY3IkVwvqy8XaQgXvpxG%2FS9ZJNnA1lTzEDI0XuZx2JdY2Dz7OXlrS6d1JxCmsE4t8kSUUAdrPVYhBYoGnmnpL5UhuizQbamgSRePaCytRjWm1kbSFMgtNIw5Hcgg3jFKeILm%2Bz94TnztbciQFuhjme6h88zw7qjTqQg9MXNe6gXtmckXmzBeOA3le8QvLZ%2BVpiEvifB1tqrBXvlCj%2B124%2BNu6Srb5SITiTMLaU1MQGOqUB9HNnicDLmBZMs3zLypriNGCwsJYUypD6ZE%2B%2BQ8HA5CHujjRqvTldY2LwOd7oFqFWwP0U%2Fs%2BbKUUqszMSjEfZ8MMI3RNvIlX8aLVks8MMzuIX5NCAbgK9v%2BO38EKyYwtxZADSUDT8af3QeDbO1qmoazR7Hsd%2BDi6G4dn0TFOCozDaPX95oMiY2VFsEeu8LegyEUa81D7GAAHmbMtj4B07OQnnBf0n&X-Amz-Signature=1b729204263273b043535cb1559d1e0ed108d3775b24943ad8a1fc03c85ab5c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
