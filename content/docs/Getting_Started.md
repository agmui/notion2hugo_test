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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJNBDXSL%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T090742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDDRi%2Fyv14YZ4HjvHwsqQpYK0%2BFXTrEIVUjwuUec8276QIhAMB2epC4kuuSnA%2Fe2ZPgxW9V4BsR6ZmuToKr4sDMayoBKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjHvJat%2BKWCSXIdY8q3ANyspVUnxzmKmUvSPXBTCAFvUEBj9defCdcVu0jrvUrbwgCrkMWADLA6QIWDgrl4PU3hMXixxYpERh2RrPeQJBsxdPRwBS50vpLjUUe2SehFcdhVx%2BmqKzi8Hs4GKHMhZGN0RfQrIbZUgceYoQTwNKJT9b1N86ALvpt6cG5qviHHQK8os5FjSMJQkXb9w9ZW5Waa9mobSiGiozkY8X%2FhprW%2B6kh%2FUiJFx0mXT2WULzbD%2FzuVg1EZJNjNqmMsQCkiulI7njPMTJsLBYGofqDmMwPffHMYPlXfS6GNIJCsCNz342wauUkHZ9G1KW5CcSkHSnR%2FZBP%2FKGjhc6hn24U6YBTayMvz%2Fc4k9%2Bi9%2F4u8EPEVNamyjFfIaQZWBo%2BGceAT%2FEumSyGYYVXYF3al26Uchmzj6b4PIZdTqDqiNqzJmEAaFg4emsTcQeE15puwaamq9YroRSC4HxUyLQnWzIHxaxN4FWftykdWa51vnnHqvB7fl56%2BLa1KlJFZjYpeyLDbg2RO64dVzjEQidlvxlJx8UPOJJ6ksK4sho079%2FSAekj5NomhqE8fMXEiaRczTd9C4e%2BZFjDpbHJydr8ssztBNuhEcZ3HwMB0gZIgAm%2BZn47ybA86rGpr2anMxmogzCSybq%2BBjqkAegK06TnP6DgfdHWge9LcI%2BCoIM%2FEon4PSKkuShksLhpRZK26SalfrNGmnFHRO%2F9AqOLFGEmucfz2qrGgqYrnW%2BlqNz%2FJPw7LORy4CdQn%2BEYKiSWQpWRfeGs4ZrnUlzNbrwYrLXzIdzpM5o2Zd%2F6fkhXr%2B40S%2BExPiImaHTNkPmeh%2Bgr7t%2Bv%2Bv8XLUEaNjOKarKC8d2dZNpCP95bU3eNpdume%2Byh&X-Amz-Signature=a604031946164420773fa1ef4a50b8078c26c9cb98232432b2e316407fc5d82c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJNBDXSL%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T090742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDDRi%2Fyv14YZ4HjvHwsqQpYK0%2BFXTrEIVUjwuUec8276QIhAMB2epC4kuuSnA%2Fe2ZPgxW9V4BsR6ZmuToKr4sDMayoBKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjHvJat%2BKWCSXIdY8q3ANyspVUnxzmKmUvSPXBTCAFvUEBj9defCdcVu0jrvUrbwgCrkMWADLA6QIWDgrl4PU3hMXixxYpERh2RrPeQJBsxdPRwBS50vpLjUUe2SehFcdhVx%2BmqKzi8Hs4GKHMhZGN0RfQrIbZUgceYoQTwNKJT9b1N86ALvpt6cG5qviHHQK8os5FjSMJQkXb9w9ZW5Waa9mobSiGiozkY8X%2FhprW%2B6kh%2FUiJFx0mXT2WULzbD%2FzuVg1EZJNjNqmMsQCkiulI7njPMTJsLBYGofqDmMwPffHMYPlXfS6GNIJCsCNz342wauUkHZ9G1KW5CcSkHSnR%2FZBP%2FKGjhc6hn24U6YBTayMvz%2Fc4k9%2Bi9%2F4u8EPEVNamyjFfIaQZWBo%2BGceAT%2FEumSyGYYVXYF3al26Uchmzj6b4PIZdTqDqiNqzJmEAaFg4emsTcQeE15puwaamq9YroRSC4HxUyLQnWzIHxaxN4FWftykdWa51vnnHqvB7fl56%2BLa1KlJFZjYpeyLDbg2RO64dVzjEQidlvxlJx8UPOJJ6ksK4sho079%2FSAekj5NomhqE8fMXEiaRczTd9C4e%2BZFjDpbHJydr8ssztBNuhEcZ3HwMB0gZIgAm%2BZn47ybA86rGpr2anMxmogzCSybq%2BBjqkAegK06TnP6DgfdHWge9LcI%2BCoIM%2FEon4PSKkuShksLhpRZK26SalfrNGmnFHRO%2F9AqOLFGEmucfz2qrGgqYrnW%2BlqNz%2FJPw7LORy4CdQn%2BEYKiSWQpWRfeGs4ZrnUlzNbrwYrLXzIdzpM5o2Zd%2F6fkhXr%2B40S%2BExPiImaHTNkPmeh%2Bgr7t%2Bv%2Bv8XLUEaNjOKarKC8d2dZNpCP95bU3eNpdume%2Byh&X-Amz-Signature=17335ae3c0e2e2a88ba1a2d81c364e99d48fea265ac00076f10bbdd50234f9f8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBDXJNSM%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T090746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCHIu6eDq4ATrnD6AMdjHWZZU7kHP%2F%2FJKlkYkoNXaJTigIhAO7n4EgS0FT2wbHj2wo9kLAfueSTUsZk3FVPQhybi5LVKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwlhv1WUPDWSamAN%2FIq3AMIOF9RPmM1NolNhh3eSmdiF1wY%2FzOVuzNw5nJdQ8TLvs6xY8RVcfMcgqY8keTy%2FVlCbzzJtpZ5h8w7LuiOANvL6cAva62NObrlGC6KNh0K4vVQx8gQkggct%2FYeEnFlEz9zd2f9vDfP%2Fcfg0NZsB2nbaNjEZ2CgwPW4RznrMzx813jV2ioY%2B5WZpcAGsm5Sd5w7g1Mfbht0qp30%2FTQgQHbOP9w3SFoMv53xE2qeM2%2Fg7JWhRTlOyNI3EppQgxZ5ULaDaqnF6NM8WRWSgoQKbvQsXLMoq8ohgXN2XPGybOfFnuZzA%2FTm1D%2B%2F3CWsnBVy40CJaSd8HnugYuFYTuGrmpiekGDmqNgjDJZS1X5iRpxTu9U6IEc2OmpylS52Wz1%2F7bnNOKVFZVKYwiRt7uhv9ck8OrK%2BgP%2BvBGF%2BjopyE5ZbVSyiurXvtWDqBnJDZGDV6evnR%2BGVhP6J517et6kt9DLyulVNcefJQ5Oqh%2FaeuVXvounoXkPg%2BSrhulpxq1e2P3uftiNmxd5krkNuGOCjpshjA6gvyjuy%2BRMDAmOVXM20swTtN5YG%2BCQfJ3yq8WBnz9m5iGk7BfUbn4m4nqPBPIDUE%2FftjsaOeoHowVsutgvn2IUV42Sb4dgXMXhTUjCmyLq%2BBjqkAc4hELwdGC0E3ukqOqn3Y9wda%2FUkP4GgRM%2Ffeu%2BHzwo52MCVxHJwMi4A90ON4%2FYhMBo2o7K1R%2B%2Fq2zMQkbIJHxzfej5BemZYe4qmzbmyKCGug4fZypg5t7aCwWwBvS6RZTWlhDR5r9KlVUwx5XBbts3ZVPgoPoxtL2NDFNkP6U909Jf2xVMTMglwYCUd0%2F%2F7H3KbFzy3%2B0EBvoWcU8aIHZvDSc16&X-Amz-Signature=770803da8ce75a9e587f51825e0654f6c86d7fd9b134f3a0e1fe54a4d8456b63&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SOHUQ6O%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T090746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCJQUKMc43DGJKwKgKI7qa6UqtNLpgE4GZ8m7BsuLONbAIgTyGv4IgQvu6kA51RjgwvXxAMTzDzjUSzbrkSqBf0Mw4qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ9AXE3lEpAegTkaIircA8C6b5A2Nno0p2y4ooOey4eI0clheam1xAmCzLjH%2BVUcOmCtAParC4h5oKdwmk7Rtmyq6DNsI3qvvMR2z8bMX2Gvj5XmcWkZHWjazZ%2BMS5XN%2FjabQ%2F4ywIBO1nhY%2BBrgrLv2V%2BmBOPe7RtduN2SqfGOxs1HhAh7vuO%2FH6SORAyxOGyZ2B0scvCHFWjt6zt4%2FADJQsi8zzney5E1xCbi8uVt1NvCCEQBU67xPy63UwPfFVuKPnyTBkFIePpLhez4XL6aNWqoMbmvYTo0wgQ3M3jPMEZ5YdIzC98sRwkLaA%2BxRYj6PuHZJ2xdCwsbAP1d%2BVCfKVqKUwxEbV3TmGUEzCOhnyfF6QKnnwJp29Tq%2Ffhls%2BE7tF7FqPTCq32E6SORkcrbE9LTDks5dvVYVKCKk9GFhC41qZvnBQHcU5RyUpl4rq%2FtqRIx%2B0%2FeDkpfPzAMW1HDO5qnhudB01%2FDI45RU%2BH7YRILl%2Fic5gXeE%2BLj5f6QAjLCv6vdF%2BZf3Ckpgn1dl3Kbm4hdyIOsa6D0FhHIJpW9o3O6LL5UI4lBvqySkNfs0MpimEmpVXIk1hnJplzNksuIZqjvhZUeTbAuLqmpgoezxk1z7f7XrMPRF5Kqab15FJ1eByoU%2B8fMudYVpMLXIur4GOqUBrQVBYB1GPfyj4v4EJxgqZAHFKDl2wpK%2BhXLM55qKvApPCT43AaUQKbDwJai69j%2BRjQe87hREXTr%2B%2BEDYKjGwI9C%2F%2FihxbFoqsexalVPtCSnCvGZiZJ1rVzlzxHbGmy5YmhREp3nQhEq9BcTctOf4Q%2F8ihb8L6sWXV5vZ0vtVsgInidV7x7E4kURGTlhwTUGIAeHKywTIzfJQv4dsjueGZq3jl9hB&X-Amz-Signature=7d800616a61f1cede6b41f8af9f0ab59ec3638cad9db76ed803da9e4ef3a05c6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJNBDXSL%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T090742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDDRi%2Fyv14YZ4HjvHwsqQpYK0%2BFXTrEIVUjwuUec8276QIhAMB2epC4kuuSnA%2Fe2ZPgxW9V4BsR6ZmuToKr4sDMayoBKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjHvJat%2BKWCSXIdY8q3ANyspVUnxzmKmUvSPXBTCAFvUEBj9defCdcVu0jrvUrbwgCrkMWADLA6QIWDgrl4PU3hMXixxYpERh2RrPeQJBsxdPRwBS50vpLjUUe2SehFcdhVx%2BmqKzi8Hs4GKHMhZGN0RfQrIbZUgceYoQTwNKJT9b1N86ALvpt6cG5qviHHQK8os5FjSMJQkXb9w9ZW5Waa9mobSiGiozkY8X%2FhprW%2B6kh%2FUiJFx0mXT2WULzbD%2FzuVg1EZJNjNqmMsQCkiulI7njPMTJsLBYGofqDmMwPffHMYPlXfS6GNIJCsCNz342wauUkHZ9G1KW5CcSkHSnR%2FZBP%2FKGjhc6hn24U6YBTayMvz%2Fc4k9%2Bi9%2F4u8EPEVNamyjFfIaQZWBo%2BGceAT%2FEumSyGYYVXYF3al26Uchmzj6b4PIZdTqDqiNqzJmEAaFg4emsTcQeE15puwaamq9YroRSC4HxUyLQnWzIHxaxN4FWftykdWa51vnnHqvB7fl56%2BLa1KlJFZjYpeyLDbg2RO64dVzjEQidlvxlJx8UPOJJ6ksK4sho079%2FSAekj5NomhqE8fMXEiaRczTd9C4e%2BZFjDpbHJydr8ssztBNuhEcZ3HwMB0gZIgAm%2BZn47ybA86rGpr2anMxmogzCSybq%2BBjqkAegK06TnP6DgfdHWge9LcI%2BCoIM%2FEon4PSKkuShksLhpRZK26SalfrNGmnFHRO%2F9AqOLFGEmucfz2qrGgqYrnW%2BlqNz%2FJPw7LORy4CdQn%2BEYKiSWQpWRfeGs4ZrnUlzNbrwYrLXzIdzpM5o2Zd%2F6fkhXr%2B40S%2BExPiImaHTNkPmeh%2Bgr7t%2Bv%2Bv8XLUEaNjOKarKC8d2dZNpCP95bU3eNpdume%2Byh&X-Amz-Signature=179544f199703aafd3d5b1600c9a7abda771749fd4070d3adf898d150d6caa7a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
