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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCHGKHKP%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T090742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwpzoQQnlahhARd0JDCpeUMgS%2BHFjh8Ac15OVWKprsdwIgZwTAfDotOIr6Zded923aX41fm9st6o0%2BsPnA763Jsecq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJp9iihQYs0KIbiBbCrcA2Fy94Tj13Qw0JDafgAtKC7qBzY%2Fulw1%2FU7aV5DofncsKheblD9oJE9%2FNUPrxKZpQ4iE0WMDV6K1wwFpF0RR5HRraMIryGChsu%2FoRLkEnSmRVt5DQqk5dtf74t3zgMcDC0aBbyB4vCbV8TQ50PFxPbkxQ6%2B2c9tSMS8wVF%2BYnf1Sh5dH0jkchQahUIEAcuyXy4PuLjsJawUbRkXcK%2FGsiHR1YUpjGYUloJZcn8Xkg4dhHE%2BCcvVnFlD2lBaMUmH0eoImFmdXPwy%2FIHpaqEwenCEZYm35bcCy%2F0Foqorwj5NbxvnxeHbBulbYQHxJZ8OuhbTefsfcyOiFHmNRoJxJ5oTeIR%2FtQRIYfAorTOlXNNZ53B2Sz%2FsnDmH1FZgxo09zHlYdSl%2BA2NuB8T8xzXT47%2BICLQUnMgofMqIRY2PXSFOyUgDerE4w8T3EfYumn960q71X1MIHvFIFHmC%2F7wwC%2B%2BrjECDv%2BhSygp2sAUJcKB9YWdCqVVy7VnbVsJSS6FVUyz8Klrm93Qjd0SYOVBTjjrqnVh804%2BwIBOD7EpaFU4yCQ9TC2T9mLRooaOhoUVSd4EmlwTJ13%2FlMdJjiL6FeI4%2B1VplUFi7ONdZmr7bZeuKL7%2BFK%2F6JH3dYIiDW%2FMIHkw78GOqUBb%2B7WUDYublNxmil2nnHWlUCH1xwrmomy%2Fc4JLXcGw5mfpgRLimscHJAtdl%2Bp4UL1fF%2B6rLbFxRI4Mg%2Fe7p7c9Kk%2FoxZ%2ByHv%2FSrW%2BGCQAWRnWYFkgGawO8%2Fi9mtYqcxCYpXnLMl35Yli%2FZR8uE4NSZEVKCY5ZXbCWLuMtA6ysMJUtz19ioqHJ%2BYhAzpKoHuE24zS5ekx3Ixh9YruGKtO9TtWoSuXC&X-Amz-Signature=5e5724720642fe67e0aff75107b3eb2f6fb24655c94c488dd7eec2acb191894c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCHGKHKP%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T090742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwpzoQQnlahhARd0JDCpeUMgS%2BHFjh8Ac15OVWKprsdwIgZwTAfDotOIr6Zded923aX41fm9st6o0%2BsPnA763Jsecq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJp9iihQYs0KIbiBbCrcA2Fy94Tj13Qw0JDafgAtKC7qBzY%2Fulw1%2FU7aV5DofncsKheblD9oJE9%2FNUPrxKZpQ4iE0WMDV6K1wwFpF0RR5HRraMIryGChsu%2FoRLkEnSmRVt5DQqk5dtf74t3zgMcDC0aBbyB4vCbV8TQ50PFxPbkxQ6%2B2c9tSMS8wVF%2BYnf1Sh5dH0jkchQahUIEAcuyXy4PuLjsJawUbRkXcK%2FGsiHR1YUpjGYUloJZcn8Xkg4dhHE%2BCcvVnFlD2lBaMUmH0eoImFmdXPwy%2FIHpaqEwenCEZYm35bcCy%2F0Foqorwj5NbxvnxeHbBulbYQHxJZ8OuhbTefsfcyOiFHmNRoJxJ5oTeIR%2FtQRIYfAorTOlXNNZ53B2Sz%2FsnDmH1FZgxo09zHlYdSl%2BA2NuB8T8xzXT47%2BICLQUnMgofMqIRY2PXSFOyUgDerE4w8T3EfYumn960q71X1MIHvFIFHmC%2F7wwC%2B%2BrjECDv%2BhSygp2sAUJcKB9YWdCqVVy7VnbVsJSS6FVUyz8Klrm93Qjd0SYOVBTjjrqnVh804%2BwIBOD7EpaFU4yCQ9TC2T9mLRooaOhoUVSd4EmlwTJ13%2FlMdJjiL6FeI4%2B1VplUFi7ONdZmr7bZeuKL7%2BFK%2F6JH3dYIiDW%2FMIHkw78GOqUBb%2B7WUDYublNxmil2nnHWlUCH1xwrmomy%2Fc4JLXcGw5mfpgRLimscHJAtdl%2Bp4UL1fF%2B6rLbFxRI4Mg%2Fe7p7c9Kk%2FoxZ%2ByHv%2FSrW%2BGCQAWRnWYFkgGawO8%2Fi9mtYqcxCYpXnLMl35Yli%2FZR8uE4NSZEVKCY5ZXbCWLuMtA6ysMJUtz19ioqHJ%2BYhAzpKoHuE24zS5ekx3Ixh9YruGKtO9TtWoSuXC&X-Amz-Signature=8e19fe80c08e82c737098638337a1ea8a3e0594c571bc662ae79e3758b692d01&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJFBPZZ5%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T090747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1H6KEHVfBprVnojDXbHQLvfuy9kgHYNxxfK6GYIsfYAiAJAurYnllscTKqGvOthKUyPnNUiof9oos7BkVzblyu7Cr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMTfRmMcPSdS3k4taBKtwDplR5qFnKoSNc6DwqG5Kqlbhk4DvtNF3WpXfHW1%2BBFRUO16nTxMKUjf5fy%2FWmjk7dP3vvc3geyeFOco08omdEN%2F8orCwyJwHuFwIP9yjSUNIbGyuhCzYjqz12Q%2F7NawlC%2FIEelcV0J7Hk1bpqnazuDTPqlVY4wC2mzRZQkQbPwhln0eUPJN7OX%2FAdZ8fJRGX8UwFryx3Imou8Q7JLeJ%2FrUZZrR46m4O90sNchRmc3ufF9jjDj8f%2B%2FDSh9JhOTSlCG6XBKzP4gHIAzsQl8EBhmdgs1XSPKYBJpsv9COSa967dTlYcQl22djbQM%2BDcptlv8i%2Bx9uRk8eTzCaCRPH10vyMqhi6LboHBvEFvubu9KLjQA%2FViuTZgA7%2FF6Qm0Tr4tfnmBpYNPym%2Fw6H%2BoY%2BgLkZjKb%2BnmaU4T9v2626QbaMXzRYQKLJ7Ps%2BWg0wZ%2FYwzrV7nwaLUFOT6BjWP8c9vXbmo%2Bbht%2BPV9k3qFLPZtQ6ysQeRGJNImXnp4nxL78y9k58zUftxWOYJZO155Bm%2BaI5UZV%2F%2BkIaAiVGn%2B864dx%2F13u%2BCcjvzR4euOl3eTFOVYvT%2FbXNiVdx61b0PLyiKz6UjeeHMrXi1O1248XoRMeBkX0b0qAea5mYBQSOEwkwwbzDvwY6pgGJqLD01nhN8TduZ%2B8ZGMQ4V6qo8dQzmn1%2F4dteKd2jxQjYdbRYkjs8iFD01RjpKQ83z80t%2B6uEukESIDxQlfMW9UdZ84KH7dCmmlUsHHH7fY37ff63b5qRBPm%2BCNLZrgBjOGGOu%2BYKweaWHI9SwK9jpHI%2FMripDs9LmPENSuEaFGyHHY4eRoqWu4YXaENUyKrskrERDfWx3Ysl6CKlL4d0rlyB6%2Bf4&X-Amz-Signature=d638d3323a44bd84ae2c39486b5e6b5b6159132f227e83132ab2028b35a8ed2a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK44E2DB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T090748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9c5vI9%2F9a60SevV96IXuEOzRL7BYR%2BWIRHLqQjoeqDgIhAM7RLU3XNV%2FspM9mpomWcgQbxGlu6WIbe02TlGRtiQoTKv8DCCoQABoMNjM3NDIzMTgzODA1IgxB2cWTYwCMZuuWpxwq3AMS6RMfI3wwb6Ds57ZVqoRLOU0aaPJ1zLo8KJZ%2FfD24QGNB3yvOgCMf8P9HiH%2BgWyvfxgK%2FmswjWdJKgySblZAY%2FHMugZl7CMmdXnqIYkd7pSHtOKYG3NxwMOX1yatgb7HmukTK5Qjc6%2FNewzBW%2BbAlbbkZy2OoI1qSROf1W%2B%2B%2FMCVPHVsyrCJKIb%2B%2FSvaYUI42oIwNAVvE2qxvcj6%2FtydWOJ6QgmRDpETYQvgTCGGvcuVa0hGAGMsEcfCdtn8C7uLFFxEQgXHfe4ydmj%2BMe8LMoXVOOI%2BfCAurWNiYjY%2FYexx6KO8GiYKKmGwXLZ845Y9u%2B9OggigR%2BACam2eSf0n1HiJFRNIT0pDMi49848jyMFOurIfWwcLsG%2BhaJ4uwKlydQtjBWsP5DdVzu98iOam8Jj7oveGLEWOiGnQQWrHRdRq30XfbVsAhva2FfMG%2BojOuw0NcoCXyqnxL84FHehwf8fJbZRJELFK1Nly6ihOhhhf2lkRfHyvtzt3iFujIaKNnS6Ll4AyD0wRXMxtK6IKB8uOR8wFPdvukzAoPyI6v3vcWXEEbtEbDXZX89cMqUqsdG%2Fca6ZG8IY5BR2WzkVdly0katrdTPaJu%2B02CxQsOi5Ht4s1ceBGOBoLhhDCU5MO%2FBjqkAfljvGa6oVng8btUSo6as74bTT0evHmdWUFWJ5rOpbOSwi8YJtI%2Fb008iiph%2FzGsBb9o3uRDhrsVPbtqIGM9y%2BIridDU%2B435uOXuUTJf4z%2F978lDW1PWqRPfYM0m79Eh6y6pfrhV2Kv1qKiNtg1sKi6a%2Fj7ISkHiZUYfx6bbesvlXquhp%2BqpOQFBFkfJz1F1NXqTdwH7yCutJ%2Bm6ejB%2Fm9ZBbTb9&X-Amz-Signature=a4fdf56a9fb9c06052f0f733cfc904779bf9b1b7490e6ef1d80e29ee17f0855d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCHGKHKP%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T090742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwpzoQQnlahhARd0JDCpeUMgS%2BHFjh8Ac15OVWKprsdwIgZwTAfDotOIr6Zded923aX41fm9st6o0%2BsPnA763Jsecq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJp9iihQYs0KIbiBbCrcA2Fy94Tj13Qw0JDafgAtKC7qBzY%2Fulw1%2FU7aV5DofncsKheblD9oJE9%2FNUPrxKZpQ4iE0WMDV6K1wwFpF0RR5HRraMIryGChsu%2FoRLkEnSmRVt5DQqk5dtf74t3zgMcDC0aBbyB4vCbV8TQ50PFxPbkxQ6%2B2c9tSMS8wVF%2BYnf1Sh5dH0jkchQahUIEAcuyXy4PuLjsJawUbRkXcK%2FGsiHR1YUpjGYUloJZcn8Xkg4dhHE%2BCcvVnFlD2lBaMUmH0eoImFmdXPwy%2FIHpaqEwenCEZYm35bcCy%2F0Foqorwj5NbxvnxeHbBulbYQHxJZ8OuhbTefsfcyOiFHmNRoJxJ5oTeIR%2FtQRIYfAorTOlXNNZ53B2Sz%2FsnDmH1FZgxo09zHlYdSl%2BA2NuB8T8xzXT47%2BICLQUnMgofMqIRY2PXSFOyUgDerE4w8T3EfYumn960q71X1MIHvFIFHmC%2F7wwC%2B%2BrjECDv%2BhSygp2sAUJcKB9YWdCqVVy7VnbVsJSS6FVUyz8Klrm93Qjd0SYOVBTjjrqnVh804%2BwIBOD7EpaFU4yCQ9TC2T9mLRooaOhoUVSd4EmlwTJ13%2FlMdJjiL6FeI4%2B1VplUFi7ONdZmr7bZeuKL7%2BFK%2F6JH3dYIiDW%2FMIHkw78GOqUBb%2B7WUDYublNxmil2nnHWlUCH1xwrmomy%2Fc4JLXcGw5mfpgRLimscHJAtdl%2Bp4UL1fF%2B6rLbFxRI4Mg%2Fe7p7c9Kk%2FoxZ%2ByHv%2FSrW%2BGCQAWRnWYFkgGawO8%2Fi9mtYqcxCYpXnLMl35Yli%2FZR8uE4NSZEVKCY5ZXbCWLuMtA6ysMJUtz19ioqHJ%2BYhAzpKoHuE24zS5ekx3Ixh9YruGKtO9TtWoSuXC&X-Amz-Signature=9b70a01ae15f61bd74d0b4bc8dd3cd769baac421d0fcf094dadf96636a0aac26&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
