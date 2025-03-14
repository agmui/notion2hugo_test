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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJGZGL73%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T031935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD51Ky9faEWseutiozVMhec93bS7gvIDsp7ObZYhdyS3wIgVKn1T%2BnbTKWFu0Ytb48S7pIHAUGYyXDc12vvTJvo3i4qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbwynyYjtAT0VUDoyrcAyykI42WZeShRbx2vpVKOzae9fsEuImBaU%2BVWV%2FLbpL5onRAdHUVQELBzyNeH7sCul%2Bbna57ZNiyfDDLm5xna%2BdD4e1Y%2F1buLX9vcf4P3NaO794HmW2MUDEQRGSk7gaJqUDZLrPrBpptpsqfwwGB1AnNYqbnJ1R3swHph1HGNxbRaaarJsNx3ihsAD86ZHKtd8588%2B%2Fj90T6epaNaA3xGlDha8%2FNzJF2FDS6sM6dI5R7Ti17pp%2Fxr%2B0jUtaHtQwGwtbQt2ZAKOALI76GO6kIY3gR4ArJQYO3lDqS3F5fgTOndheRtzhsCbAgkIkJvSqXtI0T6MyXfxRX3hLOAu7aAW28Amkw3dp3aBj%2FavOoYvcHlDqPkVjeVE53a3WfLwEGO55bxWtw0p36Z0IF4U6RepZVU8qIzx8JD9mNoxo3w%2BaUIEL5rXL72wPcusgIMnmFGJXIAZeYXsPU%2F85%2BqUYi7oIh3Cl2do1uDsAwjYKy%2BngmVQfZWtAOXCh%2B%2BGMmMuMCQq9wjOEiA1rQDoC4nZ%2FFpAgGJJV3e398b9zS%2F4W8H7X7ytdS%2BLbRLMPt5%2FlkLZeWHjkrx6WOmtBwYIoh0cpo%2BYSmdHG6dpKEM0iIF3lwve5Nwrh310F3ryYEU%2FJ4MI6uzr4GOqUBnWkWGhPMmpRiDDudqUWW8juRHMmd8%2F7hHM0Z%2B8HkoaeYzMCKCV4OReqVvMbrI6SmC%2FdBAr42uDYmbeosYyJj5XLlU41oQl30yIWVvaVhGyFedQ0RenesE0440G8TWOXLHzD3gFpJohoIeyilMw7Y8xvWTk4zUIKTy6db37Ct0u19%2BaX%2F4VNWgqxhwURePRJ5sAD8sbYrAE0qm1tZ1yuk6vlxIkcS&X-Amz-Signature=0b1e58e7547f1ffed523aac9b3d90790290fd9fc8776c8453c2a3d93068ed364&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJGZGL73%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T031935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD51Ky9faEWseutiozVMhec93bS7gvIDsp7ObZYhdyS3wIgVKn1T%2BnbTKWFu0Ytb48S7pIHAUGYyXDc12vvTJvo3i4qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbwynyYjtAT0VUDoyrcAyykI42WZeShRbx2vpVKOzae9fsEuImBaU%2BVWV%2FLbpL5onRAdHUVQELBzyNeH7sCul%2Bbna57ZNiyfDDLm5xna%2BdD4e1Y%2F1buLX9vcf4P3NaO794HmW2MUDEQRGSk7gaJqUDZLrPrBpptpsqfwwGB1AnNYqbnJ1R3swHph1HGNxbRaaarJsNx3ihsAD86ZHKtd8588%2B%2Fj90T6epaNaA3xGlDha8%2FNzJF2FDS6sM6dI5R7Ti17pp%2Fxr%2B0jUtaHtQwGwtbQt2ZAKOALI76GO6kIY3gR4ArJQYO3lDqS3F5fgTOndheRtzhsCbAgkIkJvSqXtI0T6MyXfxRX3hLOAu7aAW28Amkw3dp3aBj%2FavOoYvcHlDqPkVjeVE53a3WfLwEGO55bxWtw0p36Z0IF4U6RepZVU8qIzx8JD9mNoxo3w%2BaUIEL5rXL72wPcusgIMnmFGJXIAZeYXsPU%2F85%2BqUYi7oIh3Cl2do1uDsAwjYKy%2BngmVQfZWtAOXCh%2B%2BGMmMuMCQq9wjOEiA1rQDoC4nZ%2FFpAgGJJV3e398b9zS%2F4W8H7X7ytdS%2BLbRLMPt5%2FlkLZeWHjkrx6WOmtBwYIoh0cpo%2BYSmdHG6dpKEM0iIF3lwve5Nwrh310F3ryYEU%2FJ4MI6uzr4GOqUBnWkWGhPMmpRiDDudqUWW8juRHMmd8%2F7hHM0Z%2B8HkoaeYzMCKCV4OReqVvMbrI6SmC%2FdBAr42uDYmbeosYyJj5XLlU41oQl30yIWVvaVhGyFedQ0RenesE0440G8TWOXLHzD3gFpJohoIeyilMw7Y8xvWTk4zUIKTy6db37Ct0u19%2BaX%2F4VNWgqxhwURePRJ5sAD8sbYrAE0qm1tZ1yuk6vlxIkcS&X-Amz-Signature=8efaa4778befa9b2c1f64426caf9bd44b5954adf8a0e13943c0efb48d3824c56&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTMC3F5H%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T031936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHowh61hFt6ZnjDFpyWZ1KWqL91ZDYxqXqchtiYzRlf1AiEAmqR7lzovxqkebw8dFpRBxLMPRwnH%2F8e4DdAKUPC3H9AqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBIrXYNK6brpAfXbSrcA%2F2wqhSWaYo8SZI2w%2F%2BjMv2yj7VbYNHzH74Hdq%2BUe8xZQDDLOod28KXpQesKUP8yUwAuhamdbg0IeZvBmD%2Fe0Ge3ElKZg4wXeNdHD0otMtELW77h3C6zDw%2FBfuMcLVufs33VuV0JMmFTvKiQTj%2BGfThSvoyoYtdWa3QhxYWy1GqN9oE9mYRqsmxU4f9xXubLVJzcl2UzoWCN8JwTGkxdoNXOcjmf%2ByqN88PIhWwxV7C3hBH25q4eYdth7xYgcou3i%2FF8B2TxD%2BljBfTX8FsCmfmuvk%2FWBAx4tdSw6kj8eyG5dgE6WbjJwEzW%2BETtkV%2FauoAoMXPpBG4pf%2FYFKq8kFQ%2Fp9W5jmMDJhVZQDENMhT1f%2FrnN74672Ha0HCWMtWqXbHVASZprrQP3p51PvOS5hSzxeH3cJy3XOHuHGCqOfoX9BgDTAO7R49HJfqNZofwbO2pPAvNeXqssyjcPDjxekXEGnPb2ra4luePh%2Bg%2Bf%2BOvLJ5w%2FnZRk4H1rSmK31Efb5ujPVcHWF3Etfe0RdjpWWuQEmGCsy1fIb0eT6bHWCTI%2BFggvUcbbH8DYooUnDBdt8e4FuA5AYLdDtW0WhFsCrJLCQRY4%2BrUZITJESgjwLNgh65icPRljAuYddi1UMOOtzr4GOqUBR63g75yhVhT7qo3iIs6zudcZLpk34hkoUrq%2BSvn0rMsYcM9xfPK5Hvm9gFe%2FhZCI0HzsHvoAsXpxBkhSz%2B47jrpA%2BLesohr3uvV6MHxpmkvaYInn7RNpjHDw2jR%2FRSr0KawcG3VsTbY7X6TUwP2doqZuLammzEAVK0%2BCRkYH0NDb7QMZnAbKUlJRtgkHGKRHshvzewv3yHuxCRvPx1OHqe21%2Bw3t&X-Amz-Signature=b052b8641cc3fc71212533944ce9a885321bb9c27036df1dc17d5d25c9b5b862&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652BKC3KU%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T031937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2Bq0kXnBevZat7HM%2BcsBs6ltaSr8BYn06WxHxqNvC65AiBSTimaumBMAXmULqHNRpwQ0R%2FGPO68P%2FDBMJkf1qxzxSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BWGVL8yFJQHFNfqIKtwDxMiDDCeBpxDNq7lbthVzgYh%2FR6RZy0iOIApWsNc0lPZfX8VzI7gpWB0wCDNG%2Fib%2Fmkkjm%2F92tRKXZhalzppqnkMpdyu2vJv6VkwX5uAPVq5fRInJRgAj%2FTwvcr4W7GLZsCilqjf%2B%2B54UwKXMy2sVLMpHaBkRO1WNgKjnJrMhaPrwKMwOo2SrexwOaFUAj74jw%2BIaP5m2VDcDZ8vgwih%2BqAY%2BmugqAZVgF9w%2Bvsh%2FisicUxox%2FhEe8l%2FKo4rDl2k76zbVMMoYuEss5lt1O7P%2BMnDvLIw2hjYa6Oi9pWvQRXyd9jPDp8AThS5G%2BrrfE2fCdVCqlIf7xGWGUsnvf2fCBGQ7nRnY6mr7NWICTTtSL9vQV4TPjyUncHdG3%2Bxk4dZbxiGakta%2FG%2F5U79nqhCRE4a80fJuvLKdUaxNW5CD7yFsLfhR4ZhnVZocPnHH0P0Rg8LVZKOVGm61j3D79T%2FJxhWIbD3UsDKB3GtEeVNr1o7YSPe36rlEUMtmKy41iSsQ%2FD9xQrT15wt5pIGEYVeze6QTEY%2FrF2eb7i4Bu2gFdQ8lkEiNCSDJWWE093B9dQUQliz8euXa3RYb%2FWM0FNNYESWIP1DFGK%2Bx83y4vvsiCR28QVPKKnJ9JZW5OQjsw067OvgY6pgFG%2FaW7Mpg3k3CieoW87f9HxZfC%2B3gvGgfFhtAHY8PKJgihZxOdZxuljDgeQtZGCANiEkqmK62WpfqQpO4lLeT6xBfkmxtn5puz6BkFbN%2F88X3WLUFSA2y7YJncA9jau06ISCLtfEikdtQSDHHj2a24HTBh4MmbpUTTrEZQfyBkm4q88qPSF2BmQd0EJvaqvUzc2FVJcsKi112eu81D1WlMQpWG6TRE&X-Amz-Signature=b73e85c43a30954988dab9fcff550b18adc134fe8605212d72e7b19b842184da&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJGZGL73%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T031935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD51Ky9faEWseutiozVMhec93bS7gvIDsp7ObZYhdyS3wIgVKn1T%2BnbTKWFu0Ytb48S7pIHAUGYyXDc12vvTJvo3i4qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbwynyYjtAT0VUDoyrcAyykI42WZeShRbx2vpVKOzae9fsEuImBaU%2BVWV%2FLbpL5onRAdHUVQELBzyNeH7sCul%2Bbna57ZNiyfDDLm5xna%2BdD4e1Y%2F1buLX9vcf4P3NaO794HmW2MUDEQRGSk7gaJqUDZLrPrBpptpsqfwwGB1AnNYqbnJ1R3swHph1HGNxbRaaarJsNx3ihsAD86ZHKtd8588%2B%2Fj90T6epaNaA3xGlDha8%2FNzJF2FDS6sM6dI5R7Ti17pp%2Fxr%2B0jUtaHtQwGwtbQt2ZAKOALI76GO6kIY3gR4ArJQYO3lDqS3F5fgTOndheRtzhsCbAgkIkJvSqXtI0T6MyXfxRX3hLOAu7aAW28Amkw3dp3aBj%2FavOoYvcHlDqPkVjeVE53a3WfLwEGO55bxWtw0p36Z0IF4U6RepZVU8qIzx8JD9mNoxo3w%2BaUIEL5rXL72wPcusgIMnmFGJXIAZeYXsPU%2F85%2BqUYi7oIh3Cl2do1uDsAwjYKy%2BngmVQfZWtAOXCh%2B%2BGMmMuMCQq9wjOEiA1rQDoC4nZ%2FFpAgGJJV3e398b9zS%2F4W8H7X7ytdS%2BLbRLMPt5%2FlkLZeWHjkrx6WOmtBwYIoh0cpo%2BYSmdHG6dpKEM0iIF3lwve5Nwrh310F3ryYEU%2FJ4MI6uzr4GOqUBnWkWGhPMmpRiDDudqUWW8juRHMmd8%2F7hHM0Z%2B8HkoaeYzMCKCV4OReqVvMbrI6SmC%2FdBAr42uDYmbeosYyJj5XLlU41oQl30yIWVvaVhGyFedQ0RenesE0440G8TWOXLHzD3gFpJohoIeyilMw7Y8xvWTk4zUIKTy6db37Ct0u19%2BaX%2F4VNWgqxhwURePRJ5sAD8sbYrAE0qm1tZ1yuk6vlxIkcS&X-Amz-Signature=4dbe5fa107192b593d9eb5e71f9764b963ceb0a00a08bd4fe28ea07f33cf0c9f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
