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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BMZ7545%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T090714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQD1TMmV85GJpa5TTDIbDFFxdINGQtJDtMFf%2F86Y%2FWS%2BygIgTVLYiiQQn9TVR244XsICOxWW5kGFAbUUGnOV8P2E0SwqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKrlpf7R6CB%2B6jpeYyrcA%2Fro6t1CqF5boYIgD0dVkkDftUaWOJm0iFYTLS6K%2BHnP03VRGnATdkPRUYDYOQPDZ13faD%2B0sJ%2B%2FJrCB%2F%2FOno3V82RZ2ksTXt7%2BGGXF%2FpiruDK8XrOsUN2VGIZTTijlcw%2FqdKK3WBRI2OhilaUWdZPKfp0ZQjcX25eLlpbM8ugQP1ejECrB8eQWouLZMKBO1XjZntVU96iCEf%2B3mTdRQwobM7bL1%2Bkvl1xO5pFrWppN84XvoQ7GYV9vbmwhrLPoe8D4FAUyT2lIqHJQJ4n825fouQNSPu7YEh9TLB0EFZnKuRv2Hm%2BwdKScIn2zKRpVlf3N9OaLLBICT%2B6t0D0n6B8d0Mqv8AotF8JHDe7FZjHBrh9gaqS1uxv09cGxE%2FsBP7bdnkDVJhcylrwOwY19vE78NtEyxoANXdh1K9ZnBsG0An%2BB4L76zPh4ca3h1B2s1IVxYNyrp4hJ0KD9GwCPLmYhXwKgODlze6kU1fquJVNGBCxYno0LU1s27AbXqkWC4ugO%2B1brCrKO7Z5PbD%2BpPuUH1oycU1THc1KmkccLxHieiDUrE5ygORKQgazFMRf4SPhSuJsIoN85Yi8zXM22hyy0aRGhsFkEt99Z%2FSUBqE9s1r36esqVjFFWcTd3bML%2Fvo78GOqUBztPyFIWGxrHNXOiTWg7XvDWmtyavQ0PJtaTT%2Bf4RxOw%2B1sCwfvzl82ogzKxpobjcq4YMqmDg1yf%2BGG4lNdQjkXJ2nQaR6MIKhSQkJAfA5Y7MQlPij%2BerOJwfBsVtYr%2Fg1202TLyh%2FXKuvPBS9fP7TOQDGgvbcZyhwUm%2Bb6%2BtupnHKCw4h1DjXOwIBwWvOZhITbDQ0KbUDTY4OdOjJgIlZPWJGf6w&X-Amz-Signature=a75de95af3a1147fc6857069dc4fe0c82ad2e0edfdcd92292d8ecc3d20bb5ad2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BMZ7545%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T090714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQD1TMmV85GJpa5TTDIbDFFxdINGQtJDtMFf%2F86Y%2FWS%2BygIgTVLYiiQQn9TVR244XsICOxWW5kGFAbUUGnOV8P2E0SwqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKrlpf7R6CB%2B6jpeYyrcA%2Fro6t1CqF5boYIgD0dVkkDftUaWOJm0iFYTLS6K%2BHnP03VRGnATdkPRUYDYOQPDZ13faD%2B0sJ%2B%2FJrCB%2F%2FOno3V82RZ2ksTXt7%2BGGXF%2FpiruDK8XrOsUN2VGIZTTijlcw%2FqdKK3WBRI2OhilaUWdZPKfp0ZQjcX25eLlpbM8ugQP1ejECrB8eQWouLZMKBO1XjZntVU96iCEf%2B3mTdRQwobM7bL1%2Bkvl1xO5pFrWppN84XvoQ7GYV9vbmwhrLPoe8D4FAUyT2lIqHJQJ4n825fouQNSPu7YEh9TLB0EFZnKuRv2Hm%2BwdKScIn2zKRpVlf3N9OaLLBICT%2B6t0D0n6B8d0Mqv8AotF8JHDe7FZjHBrh9gaqS1uxv09cGxE%2FsBP7bdnkDVJhcylrwOwY19vE78NtEyxoANXdh1K9ZnBsG0An%2BB4L76zPh4ca3h1B2s1IVxYNyrp4hJ0KD9GwCPLmYhXwKgODlze6kU1fquJVNGBCxYno0LU1s27AbXqkWC4ugO%2B1brCrKO7Z5PbD%2BpPuUH1oycU1THc1KmkccLxHieiDUrE5ygORKQgazFMRf4SPhSuJsIoN85Yi8zXM22hyy0aRGhsFkEt99Z%2FSUBqE9s1r36esqVjFFWcTd3bML%2Fvo78GOqUBztPyFIWGxrHNXOiTWg7XvDWmtyavQ0PJtaTT%2Bf4RxOw%2B1sCwfvzl82ogzKxpobjcq4YMqmDg1yf%2BGG4lNdQjkXJ2nQaR6MIKhSQkJAfA5Y7MQlPij%2BerOJwfBsVtYr%2Fg1202TLyh%2FXKuvPBS9fP7TOQDGgvbcZyhwUm%2Bb6%2BtupnHKCw4h1DjXOwIBwWvOZhITbDQ0KbUDTY4OdOjJgIlZPWJGf6w&X-Amz-Signature=bc17a5bc89a744a4ba0126dda472a622c4bfeb5678f16417ac02aef58cefab7e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SPXRG45%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T090719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIFjNsI%2B%2FlYYPHVXZ4foX1GghmlkVeGq5lOE5W0hwmUiEAiBvEfLvlTOAPa%2BVgsCeHEjgvwVOYYFcd2uviCI%2B9NjyMCqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTMPw4Auj75Uz520ZKtwDQvsFCklsUyfACCaBy7i7SEYzzEBiIz4oty%2BK8M9YS%2BAMCPs3Zj0pYfpXyT%2B2utTcqVPqFgJuvr2lmoO676sXb7%2Fn7ZVrRVQBTQev8g1KscQe9uMAzrtONRNOJx%2FuJI6AnHNYru%2FAMmLBgTJJ2%2BV7xpO0Hj5pILtVOUuW%2BcUmT9h6Hg55zAcXNm0TaythFTe6awtyAioy3RukNXUhw9l8GsLs3T2SqrrEpwr9cZqt%2FLceRd2aljpf7Wz%2Fo2qI7e8PQ3VcM5eUJwMEWOsWSzkCkt9n427tSzepfVBrRVBe9S2H3EaRUkXL0PAqllPdj9yBMyRWYo7CvohObFlFpGB5YiERLZ3TYi74jvwYnJvO%2FQO%2FqehgJT1VC5a28EVIoTZPCKXCaz6Tg%2BcboNtoWdGXnuzFaZQ0XKVkM%2Bo41%2B6BaMFaRjKo85LCz6bAEJuB3ql1K6cLjsXotXtWoCdUwReRtAA%2BPU60d0S8vVG3BBfcSo96Ntm0GXLERZ2Pg2aXYmU8LOeoNlk%2BWUNqtu7hioZO9Lg2Akx5KS1tzktEIeseGv20DXCMbiPkQ5FdBvGBGd2YqL67TkDNGHJfGuJdn0RP%2B%2BRFOwIxp8pdk1QKW%2B%2By8WjH5o26a1WmnneAVVUwxvCjvwY6pgG1Fj%2BkN5OtINd%2BdG3Hd1z7kgWEF3vhPPXNVP3HgnxeA2IR%2BoJJInN%2FtPnHysoL87pk5YUP5thFq5UcJU3vBOD6kqI1T5FJx8pPkf5JXXV0FQO%2F5QKabeVboaZegmasXfPYP7WNMRCe1epUBh3QvGa40Tpnnr%2F4I9jh5ciirywRBt6LmXkvrT8tkPzg9d7BhChyoOYX7uO9naX0oP%2F9oqMuUsnTVWPU&X-Amz-Signature=a99f380c467ef2c1c3533a51e45f998ba90590601d00a8b1bf4dac41b6e49998&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOWNO2TK%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T090719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIHvaEm4xE%2FQWbs8VXzyfW8H110VD1WuYAudSAsEk81r4AiEAw4RGTsog2dNg2EH0UJH5JDDk7Sw%2FAqYbC5mywcVvEdAqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJG%2F%2FomPiGv4j%2FwlNyrcA1zNudZJ71xjJ5tLACWGfujUxx8fsWgm88Sgc5bLNWN8XlGHJOrmD0hKJMykD1Vp9C0lVBCPp4D4WzssLk3EzJ256iu3FBXP7IK7mC6K3SW6baFOdZizusas5TeN9kH8c%2FualdIzsrp%2FGa6lrzgOaPRenhPYtrMdi6hSXsEfglbQVk3buJ0o%2BDGmWbtjredChqOYGr7pFULBqxZFwngMZndJP%2Fz%2FwAjy2nMV%2BBc55VabNg6t5NFJGPNOgwa62zty%2BdmTXwQc%2FrnzMNeAfnajpBn2GXfzrGi4Z4TmuOu6NcPFW9C7mK4aUaQkQwtYGpM8OVPPgBvF0nYK0LIIHRGPWHD%2F8YyCVIjVNSsVnvC64KP%2FnEDRYAZlpGBwC7rqeo1WpgeCtNoOjcU3hHJhSBrNtUhWrFoEZP5NTSxcPQwOPcuKzNadiefBHZRF2ukGpTzkzdvTk6hn7Y%2FHXmGj7pkfUes%2F5uFDfYSbkjq%2BKeB%2BB10h2gNgEXiwfweOE1%2BcQ0t%2F20GAjZadWN7aH0Uw%2BWNHSU%2FgV1cTWjTYTSR8G3nRj6a3hEh6v601FnENFaxNQQDBt%2Fmvz8M3uHPvE6LYQ8hMrHpLmgxT2M0hXbkQzbT4iMNNN9gE0pI4mUFCbruiMMTwo78GOqUBDvKJ%2Bz5vycj5PCG%2BsVlPbo2gm%2B308LA3yr25x31RUwkMhX440NqM2BWpnTIl74SzxiO50fFOJjcTlooDEekA4lveCwK5aF12iGfiZEWfAC1lY%2Fvl143Y2Ub3A6hf2y11cS0WUzimkq8RWlpyM0gIQQQqmiY73oyPRLnpt3Qn60V5KII5iysJbaEZ%2FbXcAHNBnJJy0H4q8lrIj%2B3kTrrAOb%2BwPybe&X-Amz-Signature=41ba23d4394beb5b6f9517e8851c00926e3d1a16de0d472b9e73df0e010707d8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BMZ7545%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T090714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQD1TMmV85GJpa5TTDIbDFFxdINGQtJDtMFf%2F86Y%2FWS%2BygIgTVLYiiQQn9TVR244XsICOxWW5kGFAbUUGnOV8P2E0SwqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKrlpf7R6CB%2B6jpeYyrcA%2Fro6t1CqF5boYIgD0dVkkDftUaWOJm0iFYTLS6K%2BHnP03VRGnATdkPRUYDYOQPDZ13faD%2B0sJ%2B%2FJrCB%2F%2FOno3V82RZ2ksTXt7%2BGGXF%2FpiruDK8XrOsUN2VGIZTTijlcw%2FqdKK3WBRI2OhilaUWdZPKfp0ZQjcX25eLlpbM8ugQP1ejECrB8eQWouLZMKBO1XjZntVU96iCEf%2B3mTdRQwobM7bL1%2Bkvl1xO5pFrWppN84XvoQ7GYV9vbmwhrLPoe8D4FAUyT2lIqHJQJ4n825fouQNSPu7YEh9TLB0EFZnKuRv2Hm%2BwdKScIn2zKRpVlf3N9OaLLBICT%2B6t0D0n6B8d0Mqv8AotF8JHDe7FZjHBrh9gaqS1uxv09cGxE%2FsBP7bdnkDVJhcylrwOwY19vE78NtEyxoANXdh1K9ZnBsG0An%2BB4L76zPh4ca3h1B2s1IVxYNyrp4hJ0KD9GwCPLmYhXwKgODlze6kU1fquJVNGBCxYno0LU1s27AbXqkWC4ugO%2B1brCrKO7Z5PbD%2BpPuUH1oycU1THc1KmkccLxHieiDUrE5ygORKQgazFMRf4SPhSuJsIoN85Yi8zXM22hyy0aRGhsFkEt99Z%2FSUBqE9s1r36esqVjFFWcTd3bML%2Fvo78GOqUBztPyFIWGxrHNXOiTWg7XvDWmtyavQ0PJtaTT%2Bf4RxOw%2B1sCwfvzl82ogzKxpobjcq4YMqmDg1yf%2BGG4lNdQjkXJ2nQaR6MIKhSQkJAfA5Y7MQlPij%2BerOJwfBsVtYr%2Fg1202TLyh%2FXKuvPBS9fP7TOQDGgvbcZyhwUm%2Bb6%2BtupnHKCw4h1DjXOwIBwWvOZhITbDQ0KbUDTY4OdOjJgIlZPWJGf6w&X-Amz-Signature=cad88dfbdfdcfe9fd0c02d423b56b01e3a8b596a9facbf1492c849607c9ffa7b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
