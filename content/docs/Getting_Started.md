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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NKP7BQB%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T210246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDYTnlJzCND%2Bht2xzaZybrtmAJXBnG2haUVOvbmK2lsFQIgMLz6hF0TP1a%2FL0FgGIGHcm0GDBMfaUBF2Lm0%2F3tQZs0q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDGBVJARxZ6hHq0CI0ircA1WAi4KYRQC21TL3OLNv1NPy4nzjC65cs75cjS0RGALCApQINE42CLRJzifR2pVtiBeADyBcZffj2Isub0FmFSy3z2yf8bV4wXRvCAiJiuDiUxEn7n5kvPljsp%2FRcZ3tmSsBiVO571TeBgsk6FY5dzW1mky92RotwXhRwMmoVCWXOvezae5pu76JOxiabNkefOu1ZwDjHskMWankKZEDg2Nyx9VtxPDG60IQF0PREk50kXrr7CSXn5NmdTOxwawaAjTUqS6WFhoOxtDLdI%2Fo4m18DdsFvoxxlmGzhqm27Rc0Tmv8nDVG9TceYQ4U4ZOsDBvxBOBfqHGqnfIh3RhWMpDVkzZmojh3fxLaY6Rcb86oVCzuA4e2Gm82%2FRx8J9mEuUHBNe%2BUvx1ilAh1tyYwFrI3tst6V60LAPe7I6uZ5hprZG4uH7ktipCYTNEODQ3dFA%2FwbA0PbGpFMK4xPIMZjtM5haempRxtpZqAVVMsxpHjf32%2BYvST1QvbcK1IL9Wcb9vzFTPnje8DVKBtkChU%2FcUgGYt3UTUJdZUGW9rxM6gOStOSGqkV7GyqzZI8hOtJVxXND%2BmE9WqLyYuI%2BopUIBsevDhRf51Ea1hQUm0QPlxNeKctoi2x63UnLEIzMObRvr0GOqUB8OX9%2BFcv8Qiflw4ovcTSYkE%2FxkI4nK5QdPq07TeyGuYMrYScY51%2BEUKb3eNQWVIIS0gk3jxGbvtETaWJRuPlzXlL7xQry417Lwa8YMgdEyYyy5S0o0CNlFbdoqAp%2F5FCEIfQAA%2BbzJWvl0r2rtGg5NEg7RnIgeuWZOgtx0fzif05DsBMvG42wKrEZu5Swt%2FkPIxVBMSFXoflF0ZZccFnBgPMirT1&X-Amz-Signature=942e5dbc9e82823bbaec247c8dc4265305339ee1c7151962a775c08ca1366695&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NKP7BQB%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T210246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDYTnlJzCND%2Bht2xzaZybrtmAJXBnG2haUVOvbmK2lsFQIgMLz6hF0TP1a%2FL0FgGIGHcm0GDBMfaUBF2Lm0%2F3tQZs0q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDGBVJARxZ6hHq0CI0ircA1WAi4KYRQC21TL3OLNv1NPy4nzjC65cs75cjS0RGALCApQINE42CLRJzifR2pVtiBeADyBcZffj2Isub0FmFSy3z2yf8bV4wXRvCAiJiuDiUxEn7n5kvPljsp%2FRcZ3tmSsBiVO571TeBgsk6FY5dzW1mky92RotwXhRwMmoVCWXOvezae5pu76JOxiabNkefOu1ZwDjHskMWankKZEDg2Nyx9VtxPDG60IQF0PREk50kXrr7CSXn5NmdTOxwawaAjTUqS6WFhoOxtDLdI%2Fo4m18DdsFvoxxlmGzhqm27Rc0Tmv8nDVG9TceYQ4U4ZOsDBvxBOBfqHGqnfIh3RhWMpDVkzZmojh3fxLaY6Rcb86oVCzuA4e2Gm82%2FRx8J9mEuUHBNe%2BUvx1ilAh1tyYwFrI3tst6V60LAPe7I6uZ5hprZG4uH7ktipCYTNEODQ3dFA%2FwbA0PbGpFMK4xPIMZjtM5haempRxtpZqAVVMsxpHjf32%2BYvST1QvbcK1IL9Wcb9vzFTPnje8DVKBtkChU%2FcUgGYt3UTUJdZUGW9rxM6gOStOSGqkV7GyqzZI8hOtJVxXND%2BmE9WqLyYuI%2BopUIBsevDhRf51Ea1hQUm0QPlxNeKctoi2x63UnLEIzMObRvr0GOqUB8OX9%2BFcv8Qiflw4ovcTSYkE%2FxkI4nK5QdPq07TeyGuYMrYScY51%2BEUKb3eNQWVIIS0gk3jxGbvtETaWJRuPlzXlL7xQry417Lwa8YMgdEyYyy5S0o0CNlFbdoqAp%2F5FCEIfQAA%2BbzJWvl0r2rtGg5NEg7RnIgeuWZOgtx0fzif05DsBMvG42wKrEZu5Swt%2FkPIxVBMSFXoflF0ZZccFnBgPMirT1&X-Amz-Signature=4a9b712ef5f0334ed301942f742cc347a951ce6e48b875a9a8008518123001e8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UINS73IO%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T210248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIHCjTez3cnoiwFefoyp8XNIrnFeCAvFJ0JTOSBrrrO35AiBOZuY2ttOKemYC%2Fswu0odwwD4T825tkmMgPb5ntypiWCr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMDWSlsMPnk5VCfRzcKtwDOdYoF0D87WGNTZIorW8w6eT%2BPyZFgEPPFuWvhhZIDWx6bnwf39%2FHTQir71xnypYyBv6iXPmBG98JxIOJCYY6K142gwc3RRj5hYsrHCcBLUkEzYZs1zrb7DvhH%2Fv%2FFnUb8sguWBXmDRcRNitbKg7BY8wSWeyEIVc7FFYk7pXWOTJx5ewzqBQaci7boJj7Jwot8PiuQdpT%2BFul3jnUUTs6w2l1xN%2FcTgVovroQtvS7H1DXERwy%2Bjk5A4t4mt23oXjrHL4p8%2F8jgBasq6VIJ7EkVkOHMfzSFe1JJmwBYEPPbSrQ95Ec9QX4Ep4PiYBoSF76DY50oTgwokUswEvbIwGH4S0kXgLN98VS%2FE%2F5yhD2vRezFzNeSMnGjl8BKRzWIuQtVkMruIP59vpAq75p6tyA7OMmCq76TxkeBRW36lAwqen7VLznePGfTsgmPbR2bg2ISSzA71Rz3RqvZo2tcLtFNqM6SNHlevfbcNspNDSrxuCzK20AvN7SRju5l96K6AjHEkWBFgPepX32woHNsuBoljNUN6JJ7ZCRUZGl%2FI3ge67Dh5czgeZztHUmxfK8stu5qKugE3unInTxWPYwGuURpU9q918gBax4XIYYbsslb6pXEEi6q6fjSsjN340w5NG%2BvQY6pgFmEYnrP5dWsjnZf3YrWNWPrvCif9jCvMVG4qkcZFbCIQ9jLsKvqRV%2B0xKBwZGGjnWUgVFUhesHh5yRKFRqxTT7pF2SPSONxvftTik6kHaWcvVTL%2BmuWLo20F6%2Bg55PJB2fIoVET1crWar1lyiUgN0hs1%2Bmu1JKoBfGJHYaxp0NNUJ0xCKC55Nu%2BfEe59APLOSpvvXAp25ToHVCdUIBcWnwNDJ%2BoF62&X-Amz-Signature=63bd19cf0a8b1c510e0dffa3ea15c239fc71cf1c4c1cb019de08456690f3b386&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D3YG4FP%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T210248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIFIA8qOgM5mADTdXNBaKEzHBvwQUOIRqOctSJJD%2BMEDXAiBLj748xOr7m1ITriTZ9Oflovc7NSq4piA5RpE7i0e9Zyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMuXNe8Y9SPldbZ12TKtwD9IM64V5mxNvMPwhE5loFsQ%2F6Os46Oz1zi%2FeNWR3GMb18xdjPOG0QF6ZmPgDDejBNGYvn7%2BjP1bxD9G58d2MUF9TpbZhjqQLRpSgtUaDfBwWVy51Zt5bffM1N3hA%2BzDE9Cp15af49iwO3kGjNWVBMYhZfQWSXRPCmAd0MB4tYX2n8hpj6GL4ZjfHb80W0tJqXu9r7ixjkyWPj%2Bi2pGmmRLaeLs6ecfJikCb9uZXX91h1K30UFv4re1URYlrM9%2Fcgr%2FWYb4xp9kWZqL3P4eWcVMK0X76EC6Wf58pOpILzFV8dmm82P06xcnGD8Q9b6t2gkTWoUrhKEf7PhrEWjXJ1AzrHwnJ2Lk2FNjclXj8lSUEvj9%2BB17Pbgq9bteQBAYciOh0SFON2trUew1LGguNiuKRf4ZGFJhMWDz1s2X5o4rUt%2FnyVai%2FodWCW753Isa%2FrRVcVQ4Z5V%2Br7o12HO6a9LCQxHf69GJI6oO8v4Y3t9mFzMc2V%2FYiqvZYtr3%2BT8TEphbxcZg8Bcf7m0iLh9juWUMaPw%2Fo1q65siKo3L1KRPZj%2FGDhMuulYJo7LlSJ4dbXHZVo7VxoEc%2FI%2FfV9rzRH%2FFdZJ34V7tqbbFbJLilf6WhVHScymqNh2pdW7T7qIw0NG%2BvQY6pgEMhAScCA6JfzPLxHZ0tjZ5oBWVkmxqSg3UliOOYzyPQqsYp6QZEETkVaHUyZauRrImrtCJFh2MeNp8niabWqHaiv1I4sgqE6pMqQXU1hYC1XBU4BZTxCeIwdPUp7j5bEyPfDJjrHv4SJOrmj75bKWBDUT6ISgVq90WSZ3I1Wi4WJ0sZj3%2BMdqCigPnm%2BGJFrSS9BE9F04AU36Gw0Fu1gBeJEo8koRc&X-Amz-Signature=d36c91cee06f8dd9f75c6b13c1360c4e56ee114b8f4c2cef6d7862f598acb4da&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NKP7BQB%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T210246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDYTnlJzCND%2Bht2xzaZybrtmAJXBnG2haUVOvbmK2lsFQIgMLz6hF0TP1a%2FL0FgGIGHcm0GDBMfaUBF2Lm0%2F3tQZs0q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDGBVJARxZ6hHq0CI0ircA1WAi4KYRQC21TL3OLNv1NPy4nzjC65cs75cjS0RGALCApQINE42CLRJzifR2pVtiBeADyBcZffj2Isub0FmFSy3z2yf8bV4wXRvCAiJiuDiUxEn7n5kvPljsp%2FRcZ3tmSsBiVO571TeBgsk6FY5dzW1mky92RotwXhRwMmoVCWXOvezae5pu76JOxiabNkefOu1ZwDjHskMWankKZEDg2Nyx9VtxPDG60IQF0PREk50kXrr7CSXn5NmdTOxwawaAjTUqS6WFhoOxtDLdI%2Fo4m18DdsFvoxxlmGzhqm27Rc0Tmv8nDVG9TceYQ4U4ZOsDBvxBOBfqHGqnfIh3RhWMpDVkzZmojh3fxLaY6Rcb86oVCzuA4e2Gm82%2FRx8J9mEuUHBNe%2BUvx1ilAh1tyYwFrI3tst6V60LAPe7I6uZ5hprZG4uH7ktipCYTNEODQ3dFA%2FwbA0PbGpFMK4xPIMZjtM5haempRxtpZqAVVMsxpHjf32%2BYvST1QvbcK1IL9Wcb9vzFTPnje8DVKBtkChU%2FcUgGYt3UTUJdZUGW9rxM6gOStOSGqkV7GyqzZI8hOtJVxXND%2BmE9WqLyYuI%2BopUIBsevDhRf51Ea1hQUm0QPlxNeKctoi2x63UnLEIzMObRvr0GOqUB8OX9%2BFcv8Qiflw4ovcTSYkE%2FxkI4nK5QdPq07TeyGuYMrYScY51%2BEUKb3eNQWVIIS0gk3jxGbvtETaWJRuPlzXlL7xQry417Lwa8YMgdEyYyy5S0o0CNlFbdoqAp%2F5FCEIfQAA%2BbzJWvl0r2rtGg5NEg7RnIgeuWZOgtx0fzif05DsBMvG42wKrEZu5Swt%2FkPIxVBMSFXoflF0ZZccFnBgPMirT1&X-Amz-Signature=cf14708f3436e84eb906324a912d330792b6c7a5d3cb66f7a2cb45177e5acc5c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
