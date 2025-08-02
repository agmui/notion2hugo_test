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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PSEZARL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPJ6IKEvb4QsVe4l9pxs%2BN3TaxuvWthi2bjivfQwHzBAIgWLiHDuAck6QSh5EWfAjwASDbXwYQW16330%2BPpD6Dy3Mq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDKVRwJ85ZmlmmkMqcCrcA6rznMZiZDm4MSGud9di5%2FELob%2BGyGDCSCLx%2B9sfZlNYPJIGMCEwUdEc1ayNM1wNZGwDtfcxx1brRIg2O%2F4LJSCzhXBRNKpwBTAeS9IX1gtm3Q738xzUJrqxQSy18p16vV2AQpPv0fcEmrNlZZ7KF6TZ6yuz7j%2B8pxjaTRqtmSuleE%2BcyNxprOfNZWRofyY6fsTgT%2B%2Fs6SVNd%2BwW%2FE%2B2xbo4QG%2ByOh3%2BJ2po0%2BeTXA223yr3%2BnzD1rJuOaOD1vqwxzWY3U%2FzZE0FElExMKFhKSCqmyxDpS4t%2B4meU07tef5Vuyeo2Cg4jCwwyB3jGozA%2BfafCEiXVFJfOJeG9cPO7k0UtljyuGTV6r9wOreqSnIujSHi%2BCZuBO2Ut7oiH3dYEvS9lQFOQjwMKDGDQjqaVn6xkY57cmssNPJwWQ5CvBKqJJ5FRF6xAl9%2FqE5DCRLhfIgNq2vpE2ah3nqDZzBiOwZvL3oiy6mRKOX7yoCxofqXdMDlAc1ODh6o8jgckSJQBJLcUsox0b4I8KhaBVZWclRf6sUpmcx6Ms1QfkE6SHyZtrJCasOiqLQMGcVTaxZvs3ucD%2Fb1vZML6wZdSBa9Wx6PWS%2BE%2BmaPrzMP19QE%2BnLXBlyDfBqSvA2b9AyzMNnDucQGOqUBenLZGBOUu1T270S%2FMFgeA%2BuIdTK5vpNv3E%2Bq4gVI0F4Mi1F9F3aMurOL%2FWYfVrwB8Aa2YHtK4r6oiGBTvqAGusU299rMwz78A64mRlY3QVDeQI1qb2hA2YqLtNpISdE8pFC7Z58Qt7M3chPcI4VpNvy2hjMxRywZ%2FrbiyMqKoZTvUr5EAUsHwSMdTIgquZYuDYBFfoTZUWFvihtP9Go%2BE4WCeJIz&X-Amz-Signature=1a5c8b0572dfb14d682afccb5e0baabd2bb4f0846f546248d0428fff88b4553a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PSEZARL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPJ6IKEvb4QsVe4l9pxs%2BN3TaxuvWthi2bjivfQwHzBAIgWLiHDuAck6QSh5EWfAjwASDbXwYQW16330%2BPpD6Dy3Mq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDKVRwJ85ZmlmmkMqcCrcA6rznMZiZDm4MSGud9di5%2FELob%2BGyGDCSCLx%2B9sfZlNYPJIGMCEwUdEc1ayNM1wNZGwDtfcxx1brRIg2O%2F4LJSCzhXBRNKpwBTAeS9IX1gtm3Q738xzUJrqxQSy18p16vV2AQpPv0fcEmrNlZZ7KF6TZ6yuz7j%2B8pxjaTRqtmSuleE%2BcyNxprOfNZWRofyY6fsTgT%2B%2Fs6SVNd%2BwW%2FE%2B2xbo4QG%2ByOh3%2BJ2po0%2BeTXA223yr3%2BnzD1rJuOaOD1vqwxzWY3U%2FzZE0FElExMKFhKSCqmyxDpS4t%2B4meU07tef5Vuyeo2Cg4jCwwyB3jGozA%2BfafCEiXVFJfOJeG9cPO7k0UtljyuGTV6r9wOreqSnIujSHi%2BCZuBO2Ut7oiH3dYEvS9lQFOQjwMKDGDQjqaVn6xkY57cmssNPJwWQ5CvBKqJJ5FRF6xAl9%2FqE5DCRLhfIgNq2vpE2ah3nqDZzBiOwZvL3oiy6mRKOX7yoCxofqXdMDlAc1ODh6o8jgckSJQBJLcUsox0b4I8KhaBVZWclRf6sUpmcx6Ms1QfkE6SHyZtrJCasOiqLQMGcVTaxZvs3ucD%2Fb1vZML6wZdSBa9Wx6PWS%2BE%2BmaPrzMP19QE%2BnLXBlyDfBqSvA2b9AyzMNnDucQGOqUBenLZGBOUu1T270S%2FMFgeA%2BuIdTK5vpNv3E%2Bq4gVI0F4Mi1F9F3aMurOL%2FWYfVrwB8Aa2YHtK4r6oiGBTvqAGusU299rMwz78A64mRlY3QVDeQI1qb2hA2YqLtNpISdE8pFC7Z58Qt7M3chPcI4VpNvy2hjMxRywZ%2FrbiyMqKoZTvUr5EAUsHwSMdTIgquZYuDYBFfoTZUWFvihtP9Go%2BE4WCeJIz&X-Amz-Signature=0bba2a03e38487a7ed7f965e3fa9ae8af3405a8750d8eab36ca982d3a334cace&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PSEZARL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPJ6IKEvb4QsVe4l9pxs%2BN3TaxuvWthi2bjivfQwHzBAIgWLiHDuAck6QSh5EWfAjwASDbXwYQW16330%2BPpD6Dy3Mq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDKVRwJ85ZmlmmkMqcCrcA6rznMZiZDm4MSGud9di5%2FELob%2BGyGDCSCLx%2B9sfZlNYPJIGMCEwUdEc1ayNM1wNZGwDtfcxx1brRIg2O%2F4LJSCzhXBRNKpwBTAeS9IX1gtm3Q738xzUJrqxQSy18p16vV2AQpPv0fcEmrNlZZ7KF6TZ6yuz7j%2B8pxjaTRqtmSuleE%2BcyNxprOfNZWRofyY6fsTgT%2B%2Fs6SVNd%2BwW%2FE%2B2xbo4QG%2ByOh3%2BJ2po0%2BeTXA223yr3%2BnzD1rJuOaOD1vqwxzWY3U%2FzZE0FElExMKFhKSCqmyxDpS4t%2B4meU07tef5Vuyeo2Cg4jCwwyB3jGozA%2BfafCEiXVFJfOJeG9cPO7k0UtljyuGTV6r9wOreqSnIujSHi%2BCZuBO2Ut7oiH3dYEvS9lQFOQjwMKDGDQjqaVn6xkY57cmssNPJwWQ5CvBKqJJ5FRF6xAl9%2FqE5DCRLhfIgNq2vpE2ah3nqDZzBiOwZvL3oiy6mRKOX7yoCxofqXdMDlAc1ODh6o8jgckSJQBJLcUsox0b4I8KhaBVZWclRf6sUpmcx6Ms1QfkE6SHyZtrJCasOiqLQMGcVTaxZvs3ucD%2Fb1vZML6wZdSBa9Wx6PWS%2BE%2BmaPrzMP19QE%2BnLXBlyDfBqSvA2b9AyzMNnDucQGOqUBenLZGBOUu1T270S%2FMFgeA%2BuIdTK5vpNv3E%2Bq4gVI0F4Mi1F9F3aMurOL%2FWYfVrwB8Aa2YHtK4r6oiGBTvqAGusU299rMwz78A64mRlY3QVDeQI1qb2hA2YqLtNpISdE8pFC7Z58Qt7M3chPcI4VpNvy2hjMxRywZ%2FrbiyMqKoZTvUr5EAUsHwSMdTIgquZYuDYBFfoTZUWFvihtP9Go%2BE4WCeJIz&X-Amz-Signature=e95d5fbedcc62645b95bae4714f113abefb758ad47c4e7c2a68eae8ee0bb4fc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QREKCZPJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDml7kc1pne4b7jCNLY8WOjRR6h3hDP47t9beCGUBXZHAiBJVGiVpPBESopGfPGxvIyfYz0roqWpAuYZmh%2FXeP%2B7kyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMm4MVPZ75l8KIQJemKtwDaegpRW1MpPtazB%2FNzwIFFkwF9zHszioCle5HYdMtHqwtAc3fWIPADyYHHlrVr%2Bse%2BVHKFwGqSiRXGuUKrgiBzX97lPOkGPXtHVkpUeYoRxWXXSSMWgYOFKhVy969Lhe815GPU8aMiG5KnwR%2BMvaOh%2BmXx5Xyi3vSgv%2FrMUV7f%2B1vp9ofrqILFyrvf9V0TsUXR4Z%2B1%2Fm2BVnHdQ0BAgWVBcE4GEtEyBUwRBQ8S9TL4c9QouWkbt1kei0NJcbatMdhNhe3Z4eh%2F5sTMw6RMlseA2XOfLUuPyAaeLbnGW1pf5uZIA22D4SEtCX%2BGDPwLV%2FjWPupzJw6gtVkMugzWHSj4w4fv7C3JSKMt%2BDt9zgHcEtiJ063nlMPU5puEhU1rsbA0TtDCZg3islLg9AzT%2B5M0u7xTe3o%2Fwy3D5PEMSQO%2BkbSnKS36map8O%2FdOdYdFwHszl29YQsWIO572iOs%2Fve%2FK%2Fd37DLxQ974PILUJ0lnB%2F6nIY5bu1THNqm91Z5Koj505DCNw2RItn3kGt2n384FLm1kPm9%2BVKp84o6UJVzKMQ1OwgH702xNQ5lE6XnYVVUvRr%2FMGrYUghq2rhQfCJu3E1wQqU%2FEgxMaGddncIUp189CvW3n4zTPG5%2FeM38w1cO5xAY6pgEgGPPssBnLfONopfERcRr6LFu8qUHLGhYKU3j29c3hADLhcLrFUSRVmNFD3Ky0jNWPzbuz514xbmM6ld%2FBOJZmmmuY2YL7HuQu4wn6Tjb2%2BkWrsMGT9iUqAeesE0Nwmcko9RYweVAGxFalu5bmDl8TFL1NiFhGji8vXRtYdSFZ7uzG3s9Lr14VD93yHhbhXj2%2F7hptrFc20VaV0BbwcO43smECs3hy&X-Amz-Signature=00a61a4180a7973dda2201caa6dd3c61b773f7eef540fb90c6524615112e0670&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI3ADEFN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOKTMbWhySg5d8Og7V5x0ymqFevaOVTgP9qILypwJ4QAiEAo%2FvUAZW3YXIWZX%2BztWSBvukigt5JU2tAxyc8iUviy9kq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDGLtavIod9p7GvKAXircAwVEY%2BrcZ0vq0QEN5Vn5Y3pJc2bBX4OoalveFduGRK6XyOjggE0IRCZNoJAkNdA5Z%2BE50AicItczdAvBKhowgT8xTEqfvuw5S2n34hygCHw2OS0EHkVXtUFJfc3Mw9keWz%2B1xanFl2IfjNGWM9C20MRhPBBjzihL0XH%2BhG4%2FYRR3nww75cniM1GEbM1gooxOPD0O288%2BMjAIWo75LYiE1%2Bz8HaoPawmiE5mtOaMSjoliP%2BD1yOdCRRT3iE3iq68nhZUlai8RwGIWijadY1hAK%2FZq3YoTO%2BMjCAW1XBTW2RCCia10jl7%2BUVybHTeQ9gqFU7fPQWGIrZ%2Bj%2BmZDTeVo87ToT29a92yHE5CLOFzu%2B7kNviUE6wo3pS%2BJyZ86DYrK8yTb8AHU4K%2FmgplKq101ar7S6cGi7JjZQ8GcE4D7jMXEIelI2Cu3HeyW2cGRP1oy%2B1NJbvSKCSPi5ucq1mb%2FQ0lN4ruFK%2BMwT7EQ4o5QiDJl4evIwondAgrzbgTCPRFXJPlhXrKV%2FSFKVjxxy%2B3YOvbS60vNLiaRC7jCN1ODZt48muhQqgMh8e0s%2BQXop%2Fh0jXSow29tOOn%2Fvt6ocPh%2BnrBwqF%2FOIyfUUOlOuQflUOFKJy2fBxWbQ2wgGjIoMMnDucQGOqUBbIaCsiCvgzvNpUpw1sZy4AJ4NIiBm%2BQjHrSM0EQWLpBcdJwF9ZzX0o40%2BSNordz0qVVHnucPdk%2Bjz1IeRBVUxCn%2Fj2SdKzKppzGFA8B8b1RtanER5525u6Fmwtrc6F1UrI0%2BwZkjo99TzoczxwrKHFOdot7dsmAtUf1tE8VZzs1W7tEIgo9fxZy0shdm7g0LemwfCI0Doqi8Jc7TYguDQ3w1N2rh&X-Amz-Signature=858ae836fabc3c3bc1910f7b480b4b52de03706434b3f845b55dfe8d678c95d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PSEZARL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPJ6IKEvb4QsVe4l9pxs%2BN3TaxuvWthi2bjivfQwHzBAIgWLiHDuAck6QSh5EWfAjwASDbXwYQW16330%2BPpD6Dy3Mq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDKVRwJ85ZmlmmkMqcCrcA6rznMZiZDm4MSGud9di5%2FELob%2BGyGDCSCLx%2B9sfZlNYPJIGMCEwUdEc1ayNM1wNZGwDtfcxx1brRIg2O%2F4LJSCzhXBRNKpwBTAeS9IX1gtm3Q738xzUJrqxQSy18p16vV2AQpPv0fcEmrNlZZ7KF6TZ6yuz7j%2B8pxjaTRqtmSuleE%2BcyNxprOfNZWRofyY6fsTgT%2B%2Fs6SVNd%2BwW%2FE%2B2xbo4QG%2ByOh3%2BJ2po0%2BeTXA223yr3%2BnzD1rJuOaOD1vqwxzWY3U%2FzZE0FElExMKFhKSCqmyxDpS4t%2B4meU07tef5Vuyeo2Cg4jCwwyB3jGozA%2BfafCEiXVFJfOJeG9cPO7k0UtljyuGTV6r9wOreqSnIujSHi%2BCZuBO2Ut7oiH3dYEvS9lQFOQjwMKDGDQjqaVn6xkY57cmssNPJwWQ5CvBKqJJ5FRF6xAl9%2FqE5DCRLhfIgNq2vpE2ah3nqDZzBiOwZvL3oiy6mRKOX7yoCxofqXdMDlAc1ODh6o8jgckSJQBJLcUsox0b4I8KhaBVZWclRf6sUpmcx6Ms1QfkE6SHyZtrJCasOiqLQMGcVTaxZvs3ucD%2Fb1vZML6wZdSBa9Wx6PWS%2BE%2BmaPrzMP19QE%2BnLXBlyDfBqSvA2b9AyzMNnDucQGOqUBenLZGBOUu1T270S%2FMFgeA%2BuIdTK5vpNv3E%2Bq4gVI0F4Mi1F9F3aMurOL%2FWYfVrwB8Aa2YHtK4r6oiGBTvqAGusU299rMwz78A64mRlY3QVDeQI1qb2hA2YqLtNpISdE8pFC7Z58Qt7M3chPcI4VpNvy2hjMxRywZ%2FrbiyMqKoZTvUr5EAUsHwSMdTIgquZYuDYBFfoTZUWFvihtP9Go%2BE4WCeJIz&X-Amz-Signature=86e867d6b54e76b62e7342df8fb2d4e18011b97336c062dda4268f63cf8de0d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
