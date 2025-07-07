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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX73HNOB%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T061427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIQCbLXk%2F4SEWMi3BXGtTtaNPW8CK%2FhAzZPb2cBxPKE6JMgIfSlnyQWSGgdJfKqX%2F9Q3h3UiYETl3h%2Br833oyWD4%2BlSr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMi83skSRm1nUoRywQKtwDA24iIzHk1o8T64U1vLdf705Fln0oedQkobqVw4FSKORyATQxiEdgST0H4K7cgKozlLNZbICtw6WQiunS6VmchEaHK44wPSVqHJlmZ5sV2YE6z289Gj36ToyX6VS7NS964b6tSgupVPH751lex0dYOi8AmoIA%2BG%2FJjyJmcR29FjarM6sGz8LY59WXWaaTTBQNZroF%2BJARLHmEvBG8Tk6W9WwG1bDz2XU%2BTHop5EDVRqE5z1g31eqUsOu5rQ33BA28MOp4GSs0U8TlX%2BD9VHvALEkJVk3O6ucNTB%2FQpeCNjxgw4VVT2BNVbFPkff%2Fz1VzFK0%2FbQsz3V4nr1y9AFXM%2Fd28l6dlsHescoQWpS1P3P5OlmdORWgL3KhJ%2BhMOghZMc63DhtGuxkvV6CP9HisuMoac77PGA1Kx18S1ZaTfwcy02%2BYsChBMgtD8%2BztVo5B7ViI9gLlFmHDrh1EW7eDgXcwGNFfS5ttAD0QSEjLaiBjy7zJr0gMVwr5x9hL3ASD5D6i1O%2Ff0AA0nD%2BiT4XJOE7KzrAFNaQg25V0E1sji0sLXp78Y3iu34alT1ECXQwNgsj%2FQ1LNCmjGfU%2BMpuSECfIHMv2JmVG7ex5lH3x57XCIJ54mv5DIE7su4XwaAw3ratwwY6pgHhMPOkGbchY8IKGjf5vWaQzWw2nzs55xaObH9LkOV37PrcMdn7rJt7gA3bZzXad9Id0LHtBSHMLBpm1ZJAHRE9FjRMKt56zuxphRpWnzM6lF4gfiri0qi3K8D1Ye%2FF6kYo9U1RdrQpE1mYiFkikeFgg6CcKvbxcd7QfYu5a3twt5e5upXajAA86D8H%2FErsaGOEYaMBR5gZAoowossrzGa7Djkn6aZI&X-Amz-Signature=a8fa3133aa133d0900fd0238b813e1fef6b5738b45b6ce766810c1c9678ba992&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX73HNOB%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T061427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIQCbLXk%2F4SEWMi3BXGtTtaNPW8CK%2FhAzZPb2cBxPKE6JMgIfSlnyQWSGgdJfKqX%2F9Q3h3UiYETl3h%2Br833oyWD4%2BlSr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMi83skSRm1nUoRywQKtwDA24iIzHk1o8T64U1vLdf705Fln0oedQkobqVw4FSKORyATQxiEdgST0H4K7cgKozlLNZbICtw6WQiunS6VmchEaHK44wPSVqHJlmZ5sV2YE6z289Gj36ToyX6VS7NS964b6tSgupVPH751lex0dYOi8AmoIA%2BG%2FJjyJmcR29FjarM6sGz8LY59WXWaaTTBQNZroF%2BJARLHmEvBG8Tk6W9WwG1bDz2XU%2BTHop5EDVRqE5z1g31eqUsOu5rQ33BA28MOp4GSs0U8TlX%2BD9VHvALEkJVk3O6ucNTB%2FQpeCNjxgw4VVT2BNVbFPkff%2Fz1VzFK0%2FbQsz3V4nr1y9AFXM%2Fd28l6dlsHescoQWpS1P3P5OlmdORWgL3KhJ%2BhMOghZMc63DhtGuxkvV6CP9HisuMoac77PGA1Kx18S1ZaTfwcy02%2BYsChBMgtD8%2BztVo5B7ViI9gLlFmHDrh1EW7eDgXcwGNFfS5ttAD0QSEjLaiBjy7zJr0gMVwr5x9hL3ASD5D6i1O%2Ff0AA0nD%2BiT4XJOE7KzrAFNaQg25V0E1sji0sLXp78Y3iu34alT1ECXQwNgsj%2FQ1LNCmjGfU%2BMpuSECfIHMv2JmVG7ex5lH3x57XCIJ54mv5DIE7su4XwaAw3ratwwY6pgHhMPOkGbchY8IKGjf5vWaQzWw2nzs55xaObH9LkOV37PrcMdn7rJt7gA3bZzXad9Id0LHtBSHMLBpm1ZJAHRE9FjRMKt56zuxphRpWnzM6lF4gfiri0qi3K8D1Ye%2FF6kYo9U1RdrQpE1mYiFkikeFgg6CcKvbxcd7QfYu5a3twt5e5upXajAA86D8H%2FErsaGOEYaMBR5gZAoowossrzGa7Djkn6aZI&X-Amz-Signature=317fd487917d4a41326f8f6d17859ca6138342859ef7b8da0e6bfb7ece4fc488&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX73HNOB%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T061427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIQCbLXk%2F4SEWMi3BXGtTtaNPW8CK%2FhAzZPb2cBxPKE6JMgIfSlnyQWSGgdJfKqX%2F9Q3h3UiYETl3h%2Br833oyWD4%2BlSr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMi83skSRm1nUoRywQKtwDA24iIzHk1o8T64U1vLdf705Fln0oedQkobqVw4FSKORyATQxiEdgST0H4K7cgKozlLNZbICtw6WQiunS6VmchEaHK44wPSVqHJlmZ5sV2YE6z289Gj36ToyX6VS7NS964b6tSgupVPH751lex0dYOi8AmoIA%2BG%2FJjyJmcR29FjarM6sGz8LY59WXWaaTTBQNZroF%2BJARLHmEvBG8Tk6W9WwG1bDz2XU%2BTHop5EDVRqE5z1g31eqUsOu5rQ33BA28MOp4GSs0U8TlX%2BD9VHvALEkJVk3O6ucNTB%2FQpeCNjxgw4VVT2BNVbFPkff%2Fz1VzFK0%2FbQsz3V4nr1y9AFXM%2Fd28l6dlsHescoQWpS1P3P5OlmdORWgL3KhJ%2BhMOghZMc63DhtGuxkvV6CP9HisuMoac77PGA1Kx18S1ZaTfwcy02%2BYsChBMgtD8%2BztVo5B7ViI9gLlFmHDrh1EW7eDgXcwGNFfS5ttAD0QSEjLaiBjy7zJr0gMVwr5x9hL3ASD5D6i1O%2Ff0AA0nD%2BiT4XJOE7KzrAFNaQg25V0E1sji0sLXp78Y3iu34alT1ECXQwNgsj%2FQ1LNCmjGfU%2BMpuSECfIHMv2JmVG7ex5lH3x57XCIJ54mv5DIE7su4XwaAw3ratwwY6pgHhMPOkGbchY8IKGjf5vWaQzWw2nzs55xaObH9LkOV37PrcMdn7rJt7gA3bZzXad9Id0LHtBSHMLBpm1ZJAHRE9FjRMKt56zuxphRpWnzM6lF4gfiri0qi3K8D1Ye%2FF6kYo9U1RdrQpE1mYiFkikeFgg6CcKvbxcd7QfYu5a3twt5e5upXajAA86D8H%2FErsaGOEYaMBR5gZAoowossrzGa7Djkn6aZI&X-Amz-Signature=215d72e3a01b5a49932a1a6665b739972b8922005c2907c126c63e48cfb98f0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGOP25VO%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T061429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCG28cfSfzZ0jzd1l2w0qTt1W6e1swc6XRoi7KWaSzUmwIhAM3CWhVXIA09UOKdIog19jZPijh%2BkguObAApsS5HdtmJKv8DCG4QABoMNjM3NDIzMTgzODA1IgzdiC1J5ZtyCr3xB58q3APgz0aGNcvlgV8Wb81qNVlmBFSMBEqvWNIIIbNiqQBvCv%2Fc70pOP2G3w6yNcepjKfH2VxinKMxU6pFmRM0FRx9eYEXh2ezSePyR4k6jJuM5D2DQVK6Sm10nfyZ1EehkTuU4BxSZz8dI96YQry31N%2BaHQfoERTcUcS%2FpdxkaPp5Bj%2FgNrJtcfLMy5IidmKi2X9z%2F8KDvZa8vLTwAENsCERjeF9sSyoJ8xlz9FhvPmO6Dtfc99OEGDmihiZHHiKz8Q%2FBzdLlUEb05dc9ow6ox%2FHNg8FVqo5x%2Ba4FfPJHCI0wxZW1EPziZeB3bHr0S7M%2FkWmUwbGAbx6PBsgB649R6A%2FIYKdIAufGjBEmWfxeFvSD%2Fu0zlB1%2BsSCZ3ItfsG9VmtF5phJ3YZlRAsktimsuMaNzIFCadX4GtOdzXxFtb4q6x0ZZYuIwG0riEoBD8mbg%2BGMHEu9TTAFuZkWYW6CKtFaTbx0ATge0aMFa%2BntTw7Ne6c%2BsGN%2FYFwrd6M8Fo5YL2n2Y1p1FGv3In%2FmdvwDsqlyoq535yXW3d7GC2pTUz2f8sDcW1S4WWcA1Uhnku8FuC85CrOwR5MLCVn7IDdF6UgsNgFkscIVWsmD0HI9F4FTqBhwMDuXfgO4vJddNYXDDRpq3DBjqkAfu3eYQkev0pU5CfMI8NNAdyUwXmrdfE9JpEH5EuvAX5vkU48iDnIGB8ejfrhl1aPEb9lYmgIlHeUxP%2BnEGuVE4HbpQTf2ApSppvQ8Ek%2BycaiHPej4PKFb%2BeX45YtIT0zocEZh%2ByVp22ZRl0P6Bd6u5Fbc6UGcAtOD%2FEXzDNX3McAPwf25Ol79Fzk7KrN7NGoRBb2%2F7nPp8ttCzbXVIy8aMQwPkT&X-Amz-Signature=c8c6f60c3aa8ce5f647b24a82908f7982da371bcd7191fb9398f62b50c7619a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XQLHFTD%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T061429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIC79yZBl%2FNJW2yGSJIMEkXaX7mPuFzbchvtqzQFP05fMAiAkBTHfWj6vf8KNt%2FJKufQK3xe39g%2FtTiKyttPxF71TJCr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMh5mMuQynQnHFbIsQKtwDqU7vjrrKPZI25h8AkWEjiuBiCsIDE2H8zteNZryDcelmrrykqQlqq%2BPFwT6tV%2FOamJgEPf4CdsVm%2BYu%2Fp6uE%2Bm%2BMjGf8WVbXgBMHdxS63d9MgUdBWCT%2Fl6iHxbXo6fTXo0oLmhq3A4HdQ2oTp2DUGUAe1c0I9QkGJxCm65Moby%2FnrLISK1TmZHndW1fIdxUafAK5ZqPlsOCTZy3x3gtS4ZPm%2Fue0AsbFmJ1QsBMrS1w69h7owfe3jkG0kOcHBHwvZr3DnPGXHsoa%2F0VdQgPfA5tdlX1JI9EG04MQRmGpspJzVcVVfAIAI34xYU%2BMQ3DJmCCiB3taoilErP%2BbBzvOhOOUOEBI947Rumo8LNLB3mzT47ZwjizETwRlQnA3%2BVQG6fMKplWwcdswu13n%2F6x3CoAi7qyPIdDRsvsKmYfBa87ikVQasJEwiayoIKigvM01hJ4fc%2F9FiDJASTnEynEtZSS24xRC%2BGgirgMAyT%2F%2BCxpRcSTqIx7PZQJ2oxwZ7CsE1xtqjHZFHH3gd1xepHodgoE56Q9Kkr1Aci7vCXDUap5CWrfKm%2B8Lk%2FhnKZ8ufzA6SlR4%2BYPhLuaukTXMcVMIfQDHzcpsuJ37%2B8Wtk7fp3%2BUKWVCcIdwXQZv0UHowqratwwY6pgGb2ppSIAFn410EdfjPxv9dperEYcYPcfS63%2Bbecv0Y9S1VuA7L1YgfbgQG9%2FzplY%2F18DTLUNdS2Ehow%2B7xBpIKIrAe6e4tHwdqnv9RSeNfYcdKVfdFDc%2BPolLg6DzMzW8B6oXMAgt4qBrjnmYAKv4JSk3gdH9HBh8W2ZdATe5mqKkUu1%2FfamBh7ZycFn2IiaoceG06fgM6eg0rZn3xReY%2B7miL0mhs&X-Amz-Signature=eb3d44797d664b34aae2066d6523f29db650b4654b123bd98466f72ab3f10d41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX73HNOB%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T061427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIQCbLXk%2F4SEWMi3BXGtTtaNPW8CK%2FhAzZPb2cBxPKE6JMgIfSlnyQWSGgdJfKqX%2F9Q3h3UiYETl3h%2Br833oyWD4%2BlSr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMi83skSRm1nUoRywQKtwDA24iIzHk1o8T64U1vLdf705Fln0oedQkobqVw4FSKORyATQxiEdgST0H4K7cgKozlLNZbICtw6WQiunS6VmchEaHK44wPSVqHJlmZ5sV2YE6z289Gj36ToyX6VS7NS964b6tSgupVPH751lex0dYOi8AmoIA%2BG%2FJjyJmcR29FjarM6sGz8LY59WXWaaTTBQNZroF%2BJARLHmEvBG8Tk6W9WwG1bDz2XU%2BTHop5EDVRqE5z1g31eqUsOu5rQ33BA28MOp4GSs0U8TlX%2BD9VHvALEkJVk3O6ucNTB%2FQpeCNjxgw4VVT2BNVbFPkff%2Fz1VzFK0%2FbQsz3V4nr1y9AFXM%2Fd28l6dlsHescoQWpS1P3P5OlmdORWgL3KhJ%2BhMOghZMc63DhtGuxkvV6CP9HisuMoac77PGA1Kx18S1ZaTfwcy02%2BYsChBMgtD8%2BztVo5B7ViI9gLlFmHDrh1EW7eDgXcwGNFfS5ttAD0QSEjLaiBjy7zJr0gMVwr5x9hL3ASD5D6i1O%2Ff0AA0nD%2BiT4XJOE7KzrAFNaQg25V0E1sji0sLXp78Y3iu34alT1ECXQwNgsj%2FQ1LNCmjGfU%2BMpuSECfIHMv2JmVG7ex5lH3x57XCIJ54mv5DIE7su4XwaAw3ratwwY6pgHhMPOkGbchY8IKGjf5vWaQzWw2nzs55xaObH9LkOV37PrcMdn7rJt7gA3bZzXad9Id0LHtBSHMLBpm1ZJAHRE9FjRMKt56zuxphRpWnzM6lF4gfiri0qi3K8D1Ye%2FF6kYo9U1RdrQpE1mYiFkikeFgg6CcKvbxcd7QfYu5a3twt5e5upXajAA86D8H%2FErsaGOEYaMBR5gZAoowossrzGa7Djkn6aZI&X-Amz-Signature=41292985c7542bdd40c09d814415d919d1a86ff828f6c769489e0cedb9b8e247&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
