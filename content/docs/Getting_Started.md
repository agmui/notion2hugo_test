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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FCZCDQF%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T181010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAi15ryMYH9nWdyj51CJzqNJJ03MvEMx42kFu5PEXKmjAiEA42XjeXHaCiu83lsDq9Q0PVyip6ZlOMBsDeOm38qGWHgqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BlioImDNloZrWGuyrcA7kPJnxm4OEJv%2FeBn%2BlXuyVF7%2FaSV2jAF7ADYutcWNz%2Fu%2Br864t%2BfJdUZtlLByp2bpxgj6oOTz%2FN9xmwN2jkTJPOwlYnJGRxp3lGhDqRtrH7cTawd3xZt3lLJCMAJ3EFk0LCWo%2BjPlLFAvzUfRyKmdx4E06xdCA7TWYgyDGIXYyaUDvg4pzjLJHnq9chtsHwOqoOwENStEHxHJPl79fzaLJ6rEdmQcC8SBnqf78snrcDedyJOIknEfvonRp1ISCSXaimEXcjrEe4GOao1kTnW8xI3yqfSbCUjPWEgcGkiqkRkXGk5ORRhvBGFkPsMF1Mibg8aNhJJkKFvM3VoJIsprlSKHlvVP9fJUw7osBeSpHV3%2BHCmVr7C7TOwZN22GLmq2%2FCSvB%2BvMLjsisDUlG7oniS%2BSMJtg4lC4XVZUBFBNlypAd3behdgStO3r6Er8oLsBoo5p3SvHhgPACZMcUxbtoOXJITBQAgjfUFzTSJlkGq7cwnLKuNt5r0nPuaMMOewlA0o%2FOv1Yzc9CV%2FVIo5zuvQsWh%2FFvBHsmd2ZPe94x4qWP77nb8ROvMOWCMl4UkGlE3P7sNvTs78GrL8t6Qzym8xPOYN2yYDDEuEjBWiwxH7OCiqWNRLBy%2FCLdAQMLeA470GOqUBHXUIKHC2eVukT8XEmOO1es8ckEJhLNY2US45J9FDkED3xNOB4qdDYgR7OlhFn9glkZz26ab5QO0gOPGR1HnLE66IuWTYYNnXy95sfvp4ja9SF5OvvWogwUI8Qoy5JDFgSuvivxgSSfEYqkTclMkyW6V%2BvS7dEECtKXROWst2f6nZvKJBJqINRiOS59I5gqH9NILEwpXduCewabpdVqWg8e8JQIsu&X-Amz-Signature=50b4d42abe9e30e42a5f0dbdbade30a7014d87b58165d5aef6071de698ffe0db&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FCZCDQF%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T181010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAi15ryMYH9nWdyj51CJzqNJJ03MvEMx42kFu5PEXKmjAiEA42XjeXHaCiu83lsDq9Q0PVyip6ZlOMBsDeOm38qGWHgqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BlioImDNloZrWGuyrcA7kPJnxm4OEJv%2FeBn%2BlXuyVF7%2FaSV2jAF7ADYutcWNz%2Fu%2Br864t%2BfJdUZtlLByp2bpxgj6oOTz%2FN9xmwN2jkTJPOwlYnJGRxp3lGhDqRtrH7cTawd3xZt3lLJCMAJ3EFk0LCWo%2BjPlLFAvzUfRyKmdx4E06xdCA7TWYgyDGIXYyaUDvg4pzjLJHnq9chtsHwOqoOwENStEHxHJPl79fzaLJ6rEdmQcC8SBnqf78snrcDedyJOIknEfvonRp1ISCSXaimEXcjrEe4GOao1kTnW8xI3yqfSbCUjPWEgcGkiqkRkXGk5ORRhvBGFkPsMF1Mibg8aNhJJkKFvM3VoJIsprlSKHlvVP9fJUw7osBeSpHV3%2BHCmVr7C7TOwZN22GLmq2%2FCSvB%2BvMLjsisDUlG7oniS%2BSMJtg4lC4XVZUBFBNlypAd3behdgStO3r6Er8oLsBoo5p3SvHhgPACZMcUxbtoOXJITBQAgjfUFzTSJlkGq7cwnLKuNt5r0nPuaMMOewlA0o%2FOv1Yzc9CV%2FVIo5zuvQsWh%2FFvBHsmd2ZPe94x4qWP77nb8ROvMOWCMl4UkGlE3P7sNvTs78GrL8t6Qzym8xPOYN2yYDDEuEjBWiwxH7OCiqWNRLBy%2FCLdAQMLeA470GOqUBHXUIKHC2eVukT8XEmOO1es8ckEJhLNY2US45J9FDkED3xNOB4qdDYgR7OlhFn9glkZz26ab5QO0gOPGR1HnLE66IuWTYYNnXy95sfvp4ja9SF5OvvWogwUI8Qoy5JDFgSuvivxgSSfEYqkTclMkyW6V%2BvS7dEECtKXROWst2f6nZvKJBJqINRiOS59I5gqH9NILEwpXduCewabpdVqWg8e8JQIsu&X-Amz-Signature=dc9f94316afe156833abcef916451092c2d812ca28a08d1a14d6552741c764f0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S35CRRZB%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T181012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7TScwEp4NaIXJjegGFgexAYLbDjv8LIJsXmvSl8uJHAIgCpf553nf6HMb%2BM3RJP17hMbKLQjt7odoyQ8teMWWFFMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCJ4w2FCwsz5MGapircAwFBojwE35EF0AQ1%2FmJb4RCQbbHVgANRBLhmtS9hh1LYsi6UHCutazdGstWkcxjClWiJjgoCJ2eIsFIgbCslLe1lXBqe3ZpzZmU%2BO0RDPK%2F%2FgLkvBQF0m%2BeDRkgixSjDaG1zmqN6ifo1YI1yHZjMCzG%2BIq56Bxa9Y%2BP82CzO6oLpu%2BxvBae3oslmm69%2FT1zmde6%2BcmsWOSWEBEURL8xSP%2F5dzAN0VXtlEYhx71zbSPSvcgc%2BH0i%2FdionFJjmXCeOZS4bfX5e9R3EaZs7mji1QrpqtZON0%2Fjk1ONnVfvLancccJlm4KaAdTTjeS03yYoTprGBr0QTq7kHH5Wg1PcrYELcKhBkSvJPwfZEfebaWiUzFvlc1SO%2BSpmKBbCl7brp2tJIjq5baSNWc3o36nBlcETTCAM8o4X9T3HrGwlzUDk6ITIk3rJKM03qBAwxW02OeEIR41h0J9Vq0GnKsqAoOSIDZAPihlzarr%2B0f42vH09VDzEOoFhkFy8Dp79omyYF8LLrr7KaajpNPSLdW8ueXyOaxA4uV%2F8zIQM9HhAgO446D8wnhq%2BFF6%2BcoW5u%2Bwr4Q2ftFHuEK5v6mHQ0pdG5Hmbovif4U8jJuNpPs6xL9TRjGnpETvrkDyqsmfqfMOeA470GOqUBv%2BEyFfZIGKsjKM%2FlEBQlvKUFzUVA%2BXRi8Hie5GAoebGXtKxGCRC2FD5Ar4vvXXyKeZmGrAKuUOLKYiNNpeqxigGP%2BNgc78MbNh%2FPUVfZnC8bwf4wfauREvnKxZgCkMnnPtFzYvwlPcX%2FA32upoUtIUCzeBKEQ47JRxjCqLdzSQrYTAJakNf5wPqmNtuh2M7mIMeZ%2B5wE9nLf1I3nX93JOIQtwktE&X-Amz-Signature=a619d84ed30a8121028744333a42d32302b295a960e86995a0723e0d2c0278a6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3TAFCJ7%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T181012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAKgFriXC2a0tEso4D4qQM%2BrGljM7hI8BprVxkznQ2sAiEApTgTp8GykmF2KZc5%2FEhz6Vq8%2FVw5%2FNGJKyra3BFzeZ8qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGy6wMGz%2FpdoJlGGtCrcA3fbu7TMlqR4CEQTCq7l%2BUiz%2FmV0ShrAjg1ayL5xfVAfVhY0kNsGAswl7E4Hoy5pl%2FoF0mIY5%2FARrms3UYHL5V%2FWLoulvHc7rSSVNbHHkPoqPRWU%2BjQIRwPGHKWbTP42x0dQ%2BeZMIchRodwqAUFpkaYghDNJAtwBHk1ByJJqifUtMRb204XmOJ3hppAIBa%2BSu1jYMmqbh3m72znnsoyFv3Or00epzNQ56iSL1Xvv7P%2BkPVz3hKPHaYkgSjmcn%2Fxns8Tr%2BGZyzNIAthsTQjzXfT%2Fe%2BBKR4MUi%2BmkHVWZASkcxVv3xZUfTmNcj8Wwy2NFxEojpF4TBJiF%2BqCCARygwc3L3k11s6EvUDFsQy8XGd%2B03j%2FW6MPwJ8Wi4LAhO52Z5sgtFVdxRD09fuY8O63UvDTAoVxXUJg6TLN%2B4e5%2BHP7enBR2pjcU%2BNNTOfd1sbpq3iUXU9flviRc%2BLQJnyc%2FIQwiXRwNd%2FuFSh3xb7okFyhuThPHNvF9tb4wbpdDvH1zLvRNudF%2BZSELpOCW%2FbD6TxZTuhflzzCsH1ynb0HqT4PvU3jy52wc9zKig%2Fk7TjejQH5%2F27pYiNedPgK3AtVBp099caBUdQFBHDJjy1Acd%2FHNt1%2FcJ7ThqXbq9jLIPMOaA470GOqUBmyLHk6OKGXAWd%2F5JS7b4UEdMzPCv%2FJIvCGSoushKSnWxMj78Rou3vZV9GgyaRCMmQQzkXNOmmJXh6%2FPkT61qbaCs9%2BxZ53qwh%2FoD3gfb9wpmEu4ib%2FwWKi30u1agvghb0jLPyqsjHiWUkiT0Rsl8DUGPqS5kjZ0Ue0a8ped6QonLuvydSzg3%2Fdax9suvIUo1BqIMQlFnAkHoIoLFfNxCMgd2rJkU&X-Amz-Signature=287551468824b91c87aab576c0c5765583c4b93be2dece7fdba137f09896a54e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FCZCDQF%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T181010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAi15ryMYH9nWdyj51CJzqNJJ03MvEMx42kFu5PEXKmjAiEA42XjeXHaCiu83lsDq9Q0PVyip6ZlOMBsDeOm38qGWHgqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BlioImDNloZrWGuyrcA7kPJnxm4OEJv%2FeBn%2BlXuyVF7%2FaSV2jAF7ADYutcWNz%2Fu%2Br864t%2BfJdUZtlLByp2bpxgj6oOTz%2FN9xmwN2jkTJPOwlYnJGRxp3lGhDqRtrH7cTawd3xZt3lLJCMAJ3EFk0LCWo%2BjPlLFAvzUfRyKmdx4E06xdCA7TWYgyDGIXYyaUDvg4pzjLJHnq9chtsHwOqoOwENStEHxHJPl79fzaLJ6rEdmQcC8SBnqf78snrcDedyJOIknEfvonRp1ISCSXaimEXcjrEe4GOao1kTnW8xI3yqfSbCUjPWEgcGkiqkRkXGk5ORRhvBGFkPsMF1Mibg8aNhJJkKFvM3VoJIsprlSKHlvVP9fJUw7osBeSpHV3%2BHCmVr7C7TOwZN22GLmq2%2FCSvB%2BvMLjsisDUlG7oniS%2BSMJtg4lC4XVZUBFBNlypAd3behdgStO3r6Er8oLsBoo5p3SvHhgPACZMcUxbtoOXJITBQAgjfUFzTSJlkGq7cwnLKuNt5r0nPuaMMOewlA0o%2FOv1Yzc9CV%2FVIo5zuvQsWh%2FFvBHsmd2ZPe94x4qWP77nb8ROvMOWCMl4UkGlE3P7sNvTs78GrL8t6Qzym8xPOYN2yYDDEuEjBWiwxH7OCiqWNRLBy%2FCLdAQMLeA470GOqUBHXUIKHC2eVukT8XEmOO1es8ckEJhLNY2US45J9FDkED3xNOB4qdDYgR7OlhFn9glkZz26ab5QO0gOPGR1HnLE66IuWTYYNnXy95sfvp4ja9SF5OvvWogwUI8Qoy5JDFgSuvivxgSSfEYqkTclMkyW6V%2BvS7dEECtKXROWst2f6nZvKJBJqINRiOS59I5gqH9NILEwpXduCewabpdVqWg8e8JQIsu&X-Amz-Signature=971f73bf7cd591d09db6ebf4fd79bcac1e98c9be6d54ca296278fb32e6947928&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
