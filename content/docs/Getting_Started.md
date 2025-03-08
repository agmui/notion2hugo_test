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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WO7XPXJ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T080731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIDq4OXIwOVpwBOB4ejnz5gcq7ZeU7xi5GdfMv2WEvaB%2BAiBb16B23iEmW1xJ3hd1cgFxykLi6cmvZuLzhRddsddzair%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIM%2FTsMS%2B83xC4AEjxuKtwDo%2BZl%2FNNgIYS5T245T6eXcXBzup76MWiBgvHbSKip3cU25rUPz%2BupLkA67Ej2E4mEADeJT890x6yCeDnFv3DHccTErbgb0ENpI63kQjhSUrQzBAmikR0srVuXD9as90tm7a%2Bs73pc90Tw1OgLdNBn8%2BDUTRJewJ8d2O0pWhu6VIWW9pOVwQdmH2EbYVcErPoGisyLlFqz8pQSwF%2FpWoCMTXaSo%2Ba5bXR%2BYlkkKH6QkA2Obv90TVWpu64Pf%2BYg0ylhOU82pDt7qkpojdP8wSiljvl8fqFTCySR7kW5yHnwixnPfgTYyPMgctou9RIOVtLc7%2FFclZF2gNBzH5Tff%2BCpzLrpi7yTiiImYKHjbX1Qgz0j4rXfkZgr6%2FD%2BM0XGAZobtzKJfcjb9GM48ikkaQ%2BkSmMcFhgIZXVxKYdTNTqH4SswNXxWVNBgLHszexxi3LGrN%2FJNHfcts7VxHm7cKba6W3A1JPM9YDJCnFHa%2FJ1S2%2FdLCVr9b9uXLFks0e5jiGodflYIIesO5Dg52yx62N0pUeoNuYRfsONeGUgbDtjVDR7rHLtFFJxmiRmY1f%2FBX38OzwhH%2FMcBh%2BlYd6okOsPDUyLJR61IxWF2lSP%2Bc5bleXHjJuzdD8xYkKyApNwwieCvvgY6pgEp2RX9%2BxQqMfCTCxJFKxYS4OUCBU0kGSXozyVzIPVW8dQafOIW2BHmILgo1WYplZEG5Wpxc97KbdlQH2aYKq29d%2FQSD6b0fwoyAMCtVsmCYskuywR67faIt233qKhzFdcik7q8jtD4hr1mMDeoMhOTG1x%2F%2FqzROAN9q9QQNpDraUcyxnAa3AsvkSjjHWUweBmu8bBG5Mfrq4Nipse8rAIj9LNUWscN&X-Amz-Signature=41568895fd781441b76b0f03313b20d3c5c1852af80905436d26785d7169e881&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WO7XPXJ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T080731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIDq4OXIwOVpwBOB4ejnz5gcq7ZeU7xi5GdfMv2WEvaB%2BAiBb16B23iEmW1xJ3hd1cgFxykLi6cmvZuLzhRddsddzair%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIM%2FTsMS%2B83xC4AEjxuKtwDo%2BZl%2FNNgIYS5T245T6eXcXBzup76MWiBgvHbSKip3cU25rUPz%2BupLkA67Ej2E4mEADeJT890x6yCeDnFv3DHccTErbgb0ENpI63kQjhSUrQzBAmikR0srVuXD9as90tm7a%2Bs73pc90Tw1OgLdNBn8%2BDUTRJewJ8d2O0pWhu6VIWW9pOVwQdmH2EbYVcErPoGisyLlFqz8pQSwF%2FpWoCMTXaSo%2Ba5bXR%2BYlkkKH6QkA2Obv90TVWpu64Pf%2BYg0ylhOU82pDt7qkpojdP8wSiljvl8fqFTCySR7kW5yHnwixnPfgTYyPMgctou9RIOVtLc7%2FFclZF2gNBzH5Tff%2BCpzLrpi7yTiiImYKHjbX1Qgz0j4rXfkZgr6%2FD%2BM0XGAZobtzKJfcjb9GM48ikkaQ%2BkSmMcFhgIZXVxKYdTNTqH4SswNXxWVNBgLHszexxi3LGrN%2FJNHfcts7VxHm7cKba6W3A1JPM9YDJCnFHa%2FJ1S2%2FdLCVr9b9uXLFks0e5jiGodflYIIesO5Dg52yx62N0pUeoNuYRfsONeGUgbDtjVDR7rHLtFFJxmiRmY1f%2FBX38OzwhH%2FMcBh%2BlYd6okOsPDUyLJR61IxWF2lSP%2Bc5bleXHjJuzdD8xYkKyApNwwieCvvgY6pgEp2RX9%2BxQqMfCTCxJFKxYS4OUCBU0kGSXozyVzIPVW8dQafOIW2BHmILgo1WYplZEG5Wpxc97KbdlQH2aYKq29d%2FQSD6b0fwoyAMCtVsmCYskuywR67faIt233qKhzFdcik7q8jtD4hr1mMDeoMhOTG1x%2F%2FqzROAN9q9QQNpDraUcyxnAa3AsvkSjjHWUweBmu8bBG5Mfrq4Nipse8rAIj9LNUWscN&X-Amz-Signature=5d53b1e308907f1ce60fb122416ae510c41af9a4264ff68b551565a960f7688c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVEO62HD%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T080733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDhn15KwCrlD%2BZcFyalx9ad5AmtPe4ByVD8oMnu%2FjFkDgIgVhkMhWt6momh2dLvYcytNfssXwp3Th9vH4GR%2FzQaDUUq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDL7%2BSJKGtvZ5t%2BYISyrcA7gJwwfNfihLXouHvrLOwu9t1mu4hY4XtHakFAr%2BSr5z5z5H3pRHo496HNvik%2B%2FKog2x721KjFsgwLSgGHWxDsZ7Pr615pJ51cym8GpJ2%2Bl6886IoNf7o2omYuPQ1iXFKzZBj7uLQeulnScvT9WGeO1p4IOqwjVPtHa9ve%2Bf0jTY6LqfkHgh6f1Y7ZdzNr8Z4Y3JFA%2FFwAAIcoAGlyMlLXvIGocA3mF6PcHFT%2FG9VGdaX4WF0FiWVasrafV9Qm%2BYs%2B2f9NtQGZoUFbMFCD5x5jfhcrzZ5TFSBkcW0lwxmr%2FC%2F6xG9cAE76w2NZpU36Hb5gVMVaWtk5IusxZHeRDh6ENkG4ilYk4m3bN95bpeuu6kPj8xooGdhVv2B4eXKXDvThU7i8mDELBZS1FuZdPdZYpy9ej1cdbFMyi0WpScdn48decz7r96ToP5yX9u4ZMmIp6yZl0GYw27ex56tMTz6BOup46jqnk7XB4gfj8zYbvgWpMUFRNzSYS40ytYQsn0tOBRtOaMBv1LIPO5EPrOl5TPF9%2BTx%2FShCHzsDFXaEe%2Bmj2CWnw8kylYFBPj0Vk9uib0vYyvwGmwlqtyX6StHqtCKqllmp2An4rfM7YN1uZUyfJN9UYfc4tnkxtK8MKngr74GOqUBKRcd2iF59ZCkvVxlDE1QWf5oGizPgZ2zSHDn1bhtBmjKsTcrBUSmchkPdmal%2BC%2Fr0af6Muy2HX5tc5EK7XA8HoKX3YhQWv3JUJPsCqlUD2uW120BvHqImYnOP6ZROnyKq1vJ%2FhICWlFEdaT%2FlEyjP1UvCUrPCvqkyoqTAO6aYqN%2BOb4YYwSKKCVL26xjWoYIsMZ7%2BJUUw7HAXYgiFR%2Ftrjr8j5nx&X-Amz-Signature=986ac98958d829a4de3498be51c51a72e0f46d592c251d5da4f67e05818b94fd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXPUR6FE%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T080733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCGjAykVXa%2BXiM1fJGRs8%2B82Ll6kcNY%2FUxW%2BRHkBXezSwIhAIQHTUXoUiTNa1T6pvQVtnCBataVKVlmjmMBQ5ArkIUgKv8DCFgQABoMNjM3NDIzMTgzODA1IgwvNNMoOLozPalNLeYq3ANASxBFhKk2L5HKdowj5cdvejug04gylQPV9bv%2Bfz7tnJas0z4SpmsHq8tG1FI3wUOnL%2FgZWJaXRWnOEvSsHJZKNDow8f85Oy6jgywLJ1QWKUNeG1yVDnt%2BHEVoqP5WBeeAynpVWCBaqu3rV7vgbrHdjb2pLxfJDU%2FoRQyI%2BnO4gl5zLv2AOrf13DFwjiLNAFYJBDlPY1DuSbJ9skpJ7kFH0x1SewXY4VuCzFjna5xLH8RfEEZIXsnJF8UM3EnMkQer8ecirWu6BwybzmCBxe5ZlRjyQ%2ByjjEva5RtVBNiiKBpcZt%2BiFOd7UG9paM4lZlHpO0T4GW%2F52VjBW9Nu4YBt2fuz9rjpUMb8a03oYWNE5APU2Qw%2FkIl3hXLI%2Bj%2FZNxVhsr1d2Ocaw6f7L%2B8r8orMc8PcH7Hy%2FsEScF1yWR5i08VPgbOi8jyPDo2nO3FwM5qraUuGiAAq8rV5K812DuVkhk%2BFnlbktJq6IHBW%2F9%2Bnq0zuojVkWPsKemPrY088Up3wUIE3pUoR1mDWX8CtxxgCYbAtMLW%2BGlFtjY94gGFqnTl3nnHKt4eeIkiK%2BEoHRDpjHB3ksPZiI5SZtrk9q7JtHLGQ6Md4%2BkXNUIFo910Bd4nHHYdUBlHm%2FXnKZTCy4K%2B%2BBjqkARpG1ZzPPXc6pYBf8PxB1vnWqnvBh59DpgupDPSjxLKNpu63s5sv3292RcY8zVZgXMtm4MoQr4ojrTVh%2BkpZRy%2Bs%2BEobcML2JmdFE%2FphsOzmf0m3nC32d2qASt5IX87fq65xqu%2F2LOxrHXGsvWz38lA48GAB5QNjXk01xsBN%2FKqQAGlsLgl3p1zcadAyZeUYdpx7gNU%2FuUIRhg4rr%2BL9bM8zsbbE&X-Amz-Signature=ce14523bf6669743ebab87cacbdba5448a1bef1605a457b0e07f73084e5249f2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WO7XPXJ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T080731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIDq4OXIwOVpwBOB4ejnz5gcq7ZeU7xi5GdfMv2WEvaB%2BAiBb16B23iEmW1xJ3hd1cgFxykLi6cmvZuLzhRddsddzair%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIM%2FTsMS%2B83xC4AEjxuKtwDo%2BZl%2FNNgIYS5T245T6eXcXBzup76MWiBgvHbSKip3cU25rUPz%2BupLkA67Ej2E4mEADeJT890x6yCeDnFv3DHccTErbgb0ENpI63kQjhSUrQzBAmikR0srVuXD9as90tm7a%2Bs73pc90Tw1OgLdNBn8%2BDUTRJewJ8d2O0pWhu6VIWW9pOVwQdmH2EbYVcErPoGisyLlFqz8pQSwF%2FpWoCMTXaSo%2Ba5bXR%2BYlkkKH6QkA2Obv90TVWpu64Pf%2BYg0ylhOU82pDt7qkpojdP8wSiljvl8fqFTCySR7kW5yHnwixnPfgTYyPMgctou9RIOVtLc7%2FFclZF2gNBzH5Tff%2BCpzLrpi7yTiiImYKHjbX1Qgz0j4rXfkZgr6%2FD%2BM0XGAZobtzKJfcjb9GM48ikkaQ%2BkSmMcFhgIZXVxKYdTNTqH4SswNXxWVNBgLHszexxi3LGrN%2FJNHfcts7VxHm7cKba6W3A1JPM9YDJCnFHa%2FJ1S2%2FdLCVr9b9uXLFks0e5jiGodflYIIesO5Dg52yx62N0pUeoNuYRfsONeGUgbDtjVDR7rHLtFFJxmiRmY1f%2FBX38OzwhH%2FMcBh%2BlYd6okOsPDUyLJR61IxWF2lSP%2Bc5bleXHjJuzdD8xYkKyApNwwieCvvgY6pgEp2RX9%2BxQqMfCTCxJFKxYS4OUCBU0kGSXozyVzIPVW8dQafOIW2BHmILgo1WYplZEG5Wpxc97KbdlQH2aYKq29d%2FQSD6b0fwoyAMCtVsmCYskuywR67faIt233qKhzFdcik7q8jtD4hr1mMDeoMhOTG1x%2F%2FqzROAN9q9QQNpDraUcyxnAa3AsvkSjjHWUweBmu8bBG5Mfrq4Nipse8rAIj9LNUWscN&X-Amz-Signature=a72af9733fa654b498f4360cba2632f812c4340202b9920976a38c7ee0437d62&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
