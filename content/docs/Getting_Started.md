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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QMU67VE%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDcj6Q6fqeS8GMItJVigTeCVkAF2z7tAC1R6f4W99usLgIgQ2pEAS%2FSp%2B5jHf3AG%2FoyPFsoFUy045PrkNltvK%2F0VA4qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGujdGvclwiyxnnd0SrcA3ujhSBSEXsvgRpjHxeU%2FbJ77249YXugePvKdOYHE%2BaPGwlw7o1F6qwHgjze7sEv0ou7qPSuQ3MlEMt1eA2SFkEt7Bh%2BP9FMkzdPEKSBpW0yp87dfDEKVEsK2BqF2dNHuh0WHjQFmZ71houKUm4cU3%2B9oNDoGwe6ilGMZNxam7eX7a%2FVFO2YfuoTdD4H63bab5XHdO7Xb0hQ1moDwPohK0lm2V8%2FJbo5ttcjeJkX24Z26z2UkytIEHJS20%2FL7bd3ad3IgTU3skZgKNs8LQ3jmxD8eGx1gw21VstK0FaflAVAyxytxe1J3UecoMQIb4SPFO%2F6PYp2CBVTtBe4c7mzG5Vpb9F8rDKbtOkcbf4NI5C1zW1WPASe6mLCPPStxv3Eel%2Fqo3hsNoPUMkJ2lIarUFEHGAOEld96jtGhcJeowWRqBliJ29QTPb2I1aP45vfjkxmSGtweouGvz56Q1HVuRCgWP9JlzxgXp1b1V%2FCG3liPQKRLGUOFzHEUOZRZmXkqHLBB%2F7LGXRRgFIczSlZ6Xx7kHdO9DxRrXA4kJb%2B%2FJnNzf7%2FKfZ8aziKboyj%2F1GgNrHqkzoE4CZBGxDYf668o5mQjw1dUMj717JEILl92vuBTWngkav03mggazzktMO7H4cIGOqUBxUM79mJuhsZVqWXxePXJFZe1TdqRHPbGDOU57cXCQ2e2Ka2DYoY6rgojtqP7Vfsee5jpn%2Ftd%2BVjsdjIvXQF8cIFSN6tgbo5Ft0y1t6ZkvN9999EADRTlzRsqDf9Ye3gVfqytxY2EUeu581CbCE3bjgifk5ay2%2BeKCnOXD%2BF4wODZ9nXx9LA%2FEuSoSxJYwTk69gfaLWbijfIT91UwTh21g%2BSt%2FxCQ&X-Amz-Signature=f0409345bc07870fe797a7080fc4154b05ca695ff896a14dcadbc5f918cd9f31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QMU67VE%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDcj6Q6fqeS8GMItJVigTeCVkAF2z7tAC1R6f4W99usLgIgQ2pEAS%2FSp%2B5jHf3AG%2FoyPFsoFUy045PrkNltvK%2F0VA4qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGujdGvclwiyxnnd0SrcA3ujhSBSEXsvgRpjHxeU%2FbJ77249YXugePvKdOYHE%2BaPGwlw7o1F6qwHgjze7sEv0ou7qPSuQ3MlEMt1eA2SFkEt7Bh%2BP9FMkzdPEKSBpW0yp87dfDEKVEsK2BqF2dNHuh0WHjQFmZ71houKUm4cU3%2B9oNDoGwe6ilGMZNxam7eX7a%2FVFO2YfuoTdD4H63bab5XHdO7Xb0hQ1moDwPohK0lm2V8%2FJbo5ttcjeJkX24Z26z2UkytIEHJS20%2FL7bd3ad3IgTU3skZgKNs8LQ3jmxD8eGx1gw21VstK0FaflAVAyxytxe1J3UecoMQIb4SPFO%2F6PYp2CBVTtBe4c7mzG5Vpb9F8rDKbtOkcbf4NI5C1zW1WPASe6mLCPPStxv3Eel%2Fqo3hsNoPUMkJ2lIarUFEHGAOEld96jtGhcJeowWRqBliJ29QTPb2I1aP45vfjkxmSGtweouGvz56Q1HVuRCgWP9JlzxgXp1b1V%2FCG3liPQKRLGUOFzHEUOZRZmXkqHLBB%2F7LGXRRgFIczSlZ6Xx7kHdO9DxRrXA4kJb%2B%2FJnNzf7%2FKfZ8aziKboyj%2F1GgNrHqkzoE4CZBGxDYf668o5mQjw1dUMj717JEILl92vuBTWngkav03mggazzktMO7H4cIGOqUBxUM79mJuhsZVqWXxePXJFZe1TdqRHPbGDOU57cXCQ2e2Ka2DYoY6rgojtqP7Vfsee5jpn%2Ftd%2BVjsdjIvXQF8cIFSN6tgbo5Ft0y1t6ZkvN9999EADRTlzRsqDf9Ye3gVfqytxY2EUeu581CbCE3bjgifk5ay2%2BeKCnOXD%2BF4wODZ9nXx9LA%2FEuSoSxJYwTk69gfaLWbijfIT91UwTh21g%2BSt%2FxCQ&X-Amz-Signature=5576c5ed9ea942673f8b8a77da24cc4b3c61d088c9fc79acc9f29b295760db29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QMU67VE%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDcj6Q6fqeS8GMItJVigTeCVkAF2z7tAC1R6f4W99usLgIgQ2pEAS%2FSp%2B5jHf3AG%2FoyPFsoFUy045PrkNltvK%2F0VA4qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGujdGvclwiyxnnd0SrcA3ujhSBSEXsvgRpjHxeU%2FbJ77249YXugePvKdOYHE%2BaPGwlw7o1F6qwHgjze7sEv0ou7qPSuQ3MlEMt1eA2SFkEt7Bh%2BP9FMkzdPEKSBpW0yp87dfDEKVEsK2BqF2dNHuh0WHjQFmZ71houKUm4cU3%2B9oNDoGwe6ilGMZNxam7eX7a%2FVFO2YfuoTdD4H63bab5XHdO7Xb0hQ1moDwPohK0lm2V8%2FJbo5ttcjeJkX24Z26z2UkytIEHJS20%2FL7bd3ad3IgTU3skZgKNs8LQ3jmxD8eGx1gw21VstK0FaflAVAyxytxe1J3UecoMQIb4SPFO%2F6PYp2CBVTtBe4c7mzG5Vpb9F8rDKbtOkcbf4NI5C1zW1WPASe6mLCPPStxv3Eel%2Fqo3hsNoPUMkJ2lIarUFEHGAOEld96jtGhcJeowWRqBliJ29QTPb2I1aP45vfjkxmSGtweouGvz56Q1HVuRCgWP9JlzxgXp1b1V%2FCG3liPQKRLGUOFzHEUOZRZmXkqHLBB%2F7LGXRRgFIczSlZ6Xx7kHdO9DxRrXA4kJb%2B%2FJnNzf7%2FKfZ8aziKboyj%2F1GgNrHqkzoE4CZBGxDYf668o5mQjw1dUMj717JEILl92vuBTWngkav03mggazzktMO7H4cIGOqUBxUM79mJuhsZVqWXxePXJFZe1TdqRHPbGDOU57cXCQ2e2Ka2DYoY6rgojtqP7Vfsee5jpn%2Ftd%2BVjsdjIvXQF8cIFSN6tgbo5Ft0y1t6ZkvN9999EADRTlzRsqDf9Ye3gVfqytxY2EUeu581CbCE3bjgifk5ay2%2BeKCnOXD%2BF4wODZ9nXx9LA%2FEuSoSxJYwTk69gfaLWbijfIT91UwTh21g%2BSt%2FxCQ&X-Amz-Signature=4b9857e62b6023012d29e0d88b72e69aacaa43e20fe007e1f3ae286bcb717f08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3VYF7OO%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T230818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDrZUBhmPaiJYhNIwwP7XestF2NBzndy77ap8CWH2bHTwIhANMA9IO8MMETQg%2BMJipHaJvQxybhhw62iOyG478Pn%2BxTKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpfreMSWvII9Salegq3AODYzJneBbudWz4I%2BCL%2BmYHZkZOuuHnY65dq0yseMiJ1%2FtS4gHrTni4ARFIS1jzdlXhRPQdVijyxVHL0582JGlu%2BZ0TpV7JBem2XA%2BmhCu1H5%2BFrKHf1tNrVRozPXtEzo3jQwpj2LqMkYMRXntJtHFeICsIVcsJ%2BWohB%2FeOSsZlEXwtBKv7vE8bAlwGJ6HUq%2FvdhwRqTkF34LWUeVsrpA8wVgg64bGyktWhH2qDEuxEqAeoMqVBT1eABf%2FtgrnXNGjDXKXRQWy%2FZ236Vj%2FZYkcoA1Q51V9Kbe80xg6gm4pjtC5SF9RIgS7jbfZ7Xl65dLuuEVGIG5EWbGsVOLHpIdnJAp72G3f%2BhLQoOf6rG8nyQIqJNPtcXWJlV8QKxg%2Bmz4FIsA91bgdg4Ffwzd7qzquM2iRGiNXEgIL766OYQ3L29Ev65DHfBZfE3uehKGKtLNJ4Bv4gTkxVX20DhM3SfZpYJKwPvafU%2B%2BM5AdDyIR9M4%2FM%2F3Vwq8MH4x76qyXaifCGcrGH4RBhPyySgt4HrL2Y1VUEIn7RQfBHCRhJujKsdlt046BnW27TM36R4EggJepP6H7qgQX8X%2Bmc0DtGHEZ4dMeQ8rLOznpYoT95CXLslzKfZfp%2BVOMG%2BRdRkRzDIx%2BHCBjqkAYY4fDr8Z5k20Efumozu8IZGC730WPKrMkakpiPuUQvrVXLdRhtYr4Og6%2FkX9XMhQ%2FjTTukES4uVdZCqnYMeap6hVVUfxU%2Bu4z76X0pw8fOvEALWymybXeiWa1Jb%2FdVwFlYPpDpIK1ZYQFIt0NkAHJmF6akIWBGt3txc%2FNBDyVmSspSn81Vub64H8WBu5Ei30%2BM2DgcFVxRS2AGLp68Q72IzlSGN&X-Amz-Signature=9a30728b82ca8701bc8ff5bc77c9a38ed36a53bb210c2065374c4a65bae0190b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWZLM6YG%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T230818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCT6GNl3NFP%2FME1aqoiJImv%2FhY9c6dFdjJi%2FKcq6ZBqigIhANv8WjDqDDNJIJA4TQWgON7wWtN0ehbawB%2FhkRaqiaAmKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQ3nYZ%2B6MJ72AOaQYq3AN%2BLhEw02KJhJXA4hAQO9J8%2F8iR9PudVza%2BqhbAWrH8dbvCE37BNfAnXGqFAxVeTzbsjF7ai0CNy4z59TueQ1rYLMxrUJGaa4GbgLw50lwTo8Vu0lw%2FjyZVppeFEx8yUKtFMq%2Bczbw2itejKFTwdINp2AwY064BtmKhFVFip4neS7I94xzySyMUKKyYBdZG8fHJokeXdOWNljX8JDZ778ZCy96t5EvZ4OXbbt5Bji5yQcmF3PjAhSPiUtpTY97ZZ7qKnIJXyw6ok5348jSpwQkvQTdh2PU2vNT8szwegeIoGLCocbpuoqAZvRaSTX6JROgUuZCWKm75iqura0oJffshyd9aLtUH7wan9TGolmEtBvNb93ts%2FwId9snSicp0sIgD5GNC38haUHIGj2Q4UZJCngUfQ4CMFqXXbKrWILzH1IMRK3gw4i6UnN%2BW%2Fmz4ztMyXs1iWMMbij91cMGs2UElavZ2rgiySFG5a10cvHbKwLvzUWNgYKdeYfR61EOxCqoB9pUz2WZb6weSDib1LKP8%2FKXOGvKAhILmRhKk5q9QLqJbQ6AOn5PuSRS0DQTKGKW1%2BDbVVlDHt%2FtU4LJMSYPS%2FExsZCjRH8ttxUr3vLvi7o6o4TZ9eDiC0vyxhTCXx%2BHCBjqkAdzpAx4GoaGOV3%2BwW%2Br0%2BtWN9ezEQlS%2BGXXbZhDrN7HJvVO%2BdhhBjm7WDzYOlDt6N%2BkuKY8M%2FRi1wGmsDjufzaHvmdQ6rZvCy%2BW4W5p7zotieUEbcVQzNS8DO5xhyLDYxzTIXFYD3zjSo7G4m9Dp4H6J%2BV1e8wMaZHZ2qbsvJBLoZIY2eSF9zLRmo584uEEBvJROretXm3UlJUIdNOXNROPJIIgR&X-Amz-Signature=5c98ec98443c6edca564b196083c57017418f66d41f2304b31841d7104608768&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QMU67VE%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDcj6Q6fqeS8GMItJVigTeCVkAF2z7tAC1R6f4W99usLgIgQ2pEAS%2FSp%2B5jHf3AG%2FoyPFsoFUy045PrkNltvK%2F0VA4qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGujdGvclwiyxnnd0SrcA3ujhSBSEXsvgRpjHxeU%2FbJ77249YXugePvKdOYHE%2BaPGwlw7o1F6qwHgjze7sEv0ou7qPSuQ3MlEMt1eA2SFkEt7Bh%2BP9FMkzdPEKSBpW0yp87dfDEKVEsK2BqF2dNHuh0WHjQFmZ71houKUm4cU3%2B9oNDoGwe6ilGMZNxam7eX7a%2FVFO2YfuoTdD4H63bab5XHdO7Xb0hQ1moDwPohK0lm2V8%2FJbo5ttcjeJkX24Z26z2UkytIEHJS20%2FL7bd3ad3IgTU3skZgKNs8LQ3jmxD8eGx1gw21VstK0FaflAVAyxytxe1J3UecoMQIb4SPFO%2F6PYp2CBVTtBe4c7mzG5Vpb9F8rDKbtOkcbf4NI5C1zW1WPASe6mLCPPStxv3Eel%2Fqo3hsNoPUMkJ2lIarUFEHGAOEld96jtGhcJeowWRqBliJ29QTPb2I1aP45vfjkxmSGtweouGvz56Q1HVuRCgWP9JlzxgXp1b1V%2FCG3liPQKRLGUOFzHEUOZRZmXkqHLBB%2F7LGXRRgFIczSlZ6Xx7kHdO9DxRrXA4kJb%2B%2FJnNzf7%2FKfZ8aziKboyj%2F1GgNrHqkzoE4CZBGxDYf668o5mQjw1dUMj717JEILl92vuBTWngkav03mggazzktMO7H4cIGOqUBxUM79mJuhsZVqWXxePXJFZe1TdqRHPbGDOU57cXCQ2e2Ka2DYoY6rgojtqP7Vfsee5jpn%2Ftd%2BVjsdjIvXQF8cIFSN6tgbo5Ft0y1t6ZkvN9999EADRTlzRsqDf9Ye3gVfqytxY2EUeu581CbCE3bjgifk5ay2%2BeKCnOXD%2BF4wODZ9nXx9LA%2FEuSoSxJYwTk69gfaLWbijfIT91UwTh21g%2BSt%2FxCQ&X-Amz-Signature=71ff8d834f199a799b69a40aafae167f93a21cbd268b69caaf69fa2c26fc88ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
