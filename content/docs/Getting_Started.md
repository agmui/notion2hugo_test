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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV54KMNK%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T025121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBelhrcyVjwH3dyrM09E1FbI7aS0a5XgAfDKZ8OL%2Bf1qAiEAxgBSugZrIgJ%2FKDSucQhBwxtEpt456jg2t2xcjPlRe00qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC54V0FL%2Fd3mSBHrWCrcA%2FgGlR%2BFhtKAf7PmLE8jLBdmk2CCYL62saV8W1jJsEV4vnwr1Oh840ocCgT0mt5GK%2Bk7Y8HOduOPxY8gcBZW3UFld7B%2BqXpSfM%2BxxX5ZlgS%2Fid%2Fvouignt8x5HI0Ed9qaz1XN%2F1b5PgGjMSmDdUeErHFfVgdIfDJUemdSBY5Ymsl3ISkmtfwOIfKbsUJuH7Qe2aWIVjRREXpiaJjMfpalwjq0twDTialTvuUWnGZO0Emu205k%2BpuvlQq7McK6xy6LE9sZkLMkpmvEM%2F7VPSOXHmQKunZ2C6cTx%2BR2QD%2ByZlRBB2xiWUwpJ%2FpL%2FrxdFhRGx9R8ExrJ1J9lo3pqlm4WKXHXQ8VSduqU2SJc9gfaw7Bh1hbiEFbjo4gS7beeYfoQgev7b72TQxohnasBztAGwKVTAeJWVcunW3PqcHCxTeDt9JyIHWRMdNSi28LELHRSJxk%2FuUYDylBqw4bLkSdIYy6Vlhfe%2Bb3Xhcby7HNOAk%2Bs9UENZv3RUdMrDppclTp%2FpXIoi3%2BLAuTB3MCD7aoVBgzL9qTJ%2FugZcS5UlNjniQuqH10b5C92GnhGP4ZDBfUkBRz6Jcq%2FKZsYJfPpVvzM9jZuN1Ymc%2FA%2BUmGhTk2GJDqQRO12t%2FAYI2uMKfBMJ6VgsMGOqUB7lOVgD8WJynQGzkDU9NzK%2B4aTy03A2nFHp%2BgDW7PEzxDVKGGnI8QY26DzxF7%2Bd%2FD9AoJ4ck8Z3xX3Fko%2BCxdzCvUCKnoRn7UquG3%2BpKIMcxT7IygN1CFIZ3sV0PXwQZqV2kypSUo8OzKDCTXRbbYlGDCRLE4%2Fd%2BKFVCoSgfRnR5rSEfSvD5EeyACM2DFapaPGxXsST2qwkZJ%2BvHRtNVmzojKTQ%2BD&X-Amz-Signature=2b22f80482cb973e8d87fb10ac7d640f42b599df8f7cf15217a16935c7e12899&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV54KMNK%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T025121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBelhrcyVjwH3dyrM09E1FbI7aS0a5XgAfDKZ8OL%2Bf1qAiEAxgBSugZrIgJ%2FKDSucQhBwxtEpt456jg2t2xcjPlRe00qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC54V0FL%2Fd3mSBHrWCrcA%2FgGlR%2BFhtKAf7PmLE8jLBdmk2CCYL62saV8W1jJsEV4vnwr1Oh840ocCgT0mt5GK%2Bk7Y8HOduOPxY8gcBZW3UFld7B%2BqXpSfM%2BxxX5ZlgS%2Fid%2Fvouignt8x5HI0Ed9qaz1XN%2F1b5PgGjMSmDdUeErHFfVgdIfDJUemdSBY5Ymsl3ISkmtfwOIfKbsUJuH7Qe2aWIVjRREXpiaJjMfpalwjq0twDTialTvuUWnGZO0Emu205k%2BpuvlQq7McK6xy6LE9sZkLMkpmvEM%2F7VPSOXHmQKunZ2C6cTx%2BR2QD%2ByZlRBB2xiWUwpJ%2FpL%2FrxdFhRGx9R8ExrJ1J9lo3pqlm4WKXHXQ8VSduqU2SJc9gfaw7Bh1hbiEFbjo4gS7beeYfoQgev7b72TQxohnasBztAGwKVTAeJWVcunW3PqcHCxTeDt9JyIHWRMdNSi28LELHRSJxk%2FuUYDylBqw4bLkSdIYy6Vlhfe%2Bb3Xhcby7HNOAk%2Bs9UENZv3RUdMrDppclTp%2FpXIoi3%2BLAuTB3MCD7aoVBgzL9qTJ%2FugZcS5UlNjniQuqH10b5C92GnhGP4ZDBfUkBRz6Jcq%2FKZsYJfPpVvzM9jZuN1Ymc%2FA%2BUmGhTk2GJDqQRO12t%2FAYI2uMKfBMJ6VgsMGOqUB7lOVgD8WJynQGzkDU9NzK%2B4aTy03A2nFHp%2BgDW7PEzxDVKGGnI8QY26DzxF7%2Bd%2FD9AoJ4ck8Z3xX3Fko%2BCxdzCvUCKnoRn7UquG3%2BpKIMcxT7IygN1CFIZ3sV0PXwQZqV2kypSUo8OzKDCTXRbbYlGDCRLE4%2Fd%2BKFVCoSgfRnR5rSEfSvD5EeyACM2DFapaPGxXsST2qwkZJ%2BvHRtNVmzojKTQ%2BD&X-Amz-Signature=995f261bbe72cfa53d0a9b1c22a7685a3a2fc3b76f0b7f2b57ccbaa0c9193803&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV54KMNK%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T025121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBelhrcyVjwH3dyrM09E1FbI7aS0a5XgAfDKZ8OL%2Bf1qAiEAxgBSugZrIgJ%2FKDSucQhBwxtEpt456jg2t2xcjPlRe00qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC54V0FL%2Fd3mSBHrWCrcA%2FgGlR%2BFhtKAf7PmLE8jLBdmk2CCYL62saV8W1jJsEV4vnwr1Oh840ocCgT0mt5GK%2Bk7Y8HOduOPxY8gcBZW3UFld7B%2BqXpSfM%2BxxX5ZlgS%2Fid%2Fvouignt8x5HI0Ed9qaz1XN%2F1b5PgGjMSmDdUeErHFfVgdIfDJUemdSBY5Ymsl3ISkmtfwOIfKbsUJuH7Qe2aWIVjRREXpiaJjMfpalwjq0twDTialTvuUWnGZO0Emu205k%2BpuvlQq7McK6xy6LE9sZkLMkpmvEM%2F7VPSOXHmQKunZ2C6cTx%2BR2QD%2ByZlRBB2xiWUwpJ%2FpL%2FrxdFhRGx9R8ExrJ1J9lo3pqlm4WKXHXQ8VSduqU2SJc9gfaw7Bh1hbiEFbjo4gS7beeYfoQgev7b72TQxohnasBztAGwKVTAeJWVcunW3PqcHCxTeDt9JyIHWRMdNSi28LELHRSJxk%2FuUYDylBqw4bLkSdIYy6Vlhfe%2Bb3Xhcby7HNOAk%2Bs9UENZv3RUdMrDppclTp%2FpXIoi3%2BLAuTB3MCD7aoVBgzL9qTJ%2FugZcS5UlNjniQuqH10b5C92GnhGP4ZDBfUkBRz6Jcq%2FKZsYJfPpVvzM9jZuN1Ymc%2FA%2BUmGhTk2GJDqQRO12t%2FAYI2uMKfBMJ6VgsMGOqUB7lOVgD8WJynQGzkDU9NzK%2B4aTy03A2nFHp%2BgDW7PEzxDVKGGnI8QY26DzxF7%2Bd%2FD9AoJ4ck8Z3xX3Fko%2BCxdzCvUCKnoRn7UquG3%2BpKIMcxT7IygN1CFIZ3sV0PXwQZqV2kypSUo8OzKDCTXRbbYlGDCRLE4%2Fd%2BKFVCoSgfRnR5rSEfSvD5EeyACM2DFapaPGxXsST2qwkZJ%2BvHRtNVmzojKTQ%2BD&X-Amz-Signature=6465b4c4673dac9f8d8603276ce1b7cf78c191ba89a9af1e2f478086cac1ebcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWV5QCWE%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T025122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy%2BQun7CViEJOyo5ppxjM1tQVnUKaHmCkD%2F9WAG2hCAwIgLdoXRnkKKbVYfq%2Fni3kNatDlC2OFpBLFJN0PHK1TDO0qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMYmVoK841yUVXW5SrcA8qViyYIfvuiaHbReTaDK3DIOTDCv18jIr%2FEft5Y6jqkupbUlXOq6TufjZKUDHhtiuqpZQs2tjQAeI9EaWBqpndRuMXKsR7y2nedq%2FMEYsku1p9Jmph1YKPnMyFQ%2Bne5cMbikq159iKSgmO05Dqow9JvP8BnFOMB91lM5YsowSGH2PbH0LqJgjK1TwjSutMhMV23mN5Iksc2XbDfLSm044eOnzoOTpT0vH8QQjXyOdoLceRc4uk8KSgf15HkaflpbXhcMNi4f0%2FL62Lxm7pQdIoS9FTdDgEsdxFkr3lLzRehb8mxr9rGGBW%2F8rBtbqJf%2BzhFTW1DGy0UwLPg1f5%2FjwR1VCDm6k5zUu0E0LcvwOTTD3VcfpjT6aFYIcISQuyAWY3wUUDHwoX9l50BSZci2fqFLvS4jF0R5YaBkQbWyfxu5vsR3OcsxpT9SHgZupNJXXwmqt6oNqlgdcZi2icfCQ1iGrfJOIALzu3yiY5LREt95rrgDUczkatcqOqjUnNy0dAtWaHxj6GwONdQfi6nDBP03U8o0FG0Pt9raZ5kQo%2FhQCB4xA47gYyCZuaWTRMnfD72gExf08xTarDUa%2F%2BUwcAFzmqMD%2BCgwfFXuQCjdrnlp1U4gLMwLJypsX%2FPMOOVgsMGOqUB%2BbXhgLBOmZ021WJHexqJ9OSuqAPa4Lx2aLbyv%2FdVhklOsO06D0%2BmEWP9I9Zap7HU%2F6JZiD%2FH%2BpMHY9geNLLMF3vHwVfXBhke0wq%2FMbn1doYX2mVg6bKYnBXQ8fpRcHqKEj2SaqjJhYe9QLmKfC5Rr1wvBmkch7OStw%2BviQCsWlWw7Bn7WXESor%2BBtP2biSxLTSpAP%2F6Nl%2F4UcNvE1medp12HRcax&X-Amz-Signature=b2713d29cbec8a5f7270803cfb29185be92499dfbfdd06c5236bf5268f79fc27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655Y5HQKP%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T025122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlIzNPyw93%2B9YpGtGWDPHsF6b8IxzWP5qd9miZZpev2AiBxl%2Fy7Jld8YwuEWRLLEDLX5rezxKn8KsdGVmbN4O9DzSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrSP9n55iRoMWFwhiKtwDQ4iwrF6MvRRoz6fEgTngeZ%2F9el6MnYb%2F7a4p5jTsl3c9wLw4vNi5Y07jXDs4tRqlQG7XjwxRk%2B8sfUpJJ1alY%2F5lU5qqEsN27oRQUANKq%2BBLvmcPreGhd625HztEFd%2FuhbwyTWIvrfApry4QgsPW6Y54eUACHWFwTALbrqF5yL2yq0Yjvv%2FRRRrT6J5GT%2BM4AsftK3y1wSoZs3fnBkoezpxkSunk%2FnP4zHDnF0zY4wKdqgYYDxIPYfq9ppVd6KajdnhnRFmP%2FVpvF2h4GDAXm5wnifpK%2BNCzSDeDKpUWPWKCYH9c%2FgEOriNMv5maRDoGzmvcOjrT7rg5XU33as66P1SVuYHr5nkvsxu6GLmrpXaXtWtJVt2zwhlukXg2QyhkRSozTZA3LIwujcpd1OTXaJYOzHulMzk7fHM9qzJszdX84eaiRc6JUpD6tG4efNA0026%2BrHMV4cQI7KcuxXfly4XpIZd2gnGzMpd9zSArImO0Vfax0S4O8BVpnIoG1PZKCahomK83P%2BjjuAuVi2hVmi9JvrbEMybf7b4zy2N2k4M47w8cw%2FmZM1YlK4RYBgKgFfMIedCyI1xg4hfY65kTqEyPXQzzW5tE9kG%2FZ1CAhseoNNuxgsyGeoCSQ%2BEw2ZSCwwY6pgE6olOdUiLOXYgP9Y%2Bp2Zk04mLLu9yvJKQE04Csfs907X6dE%2BeIPbftbWTfqXQw8QxKpTEatTFoXgb8huiG0I9wuvA0bsf1TTgZn7tzkgFTilgwZgqfJb3H8n%2FVyfWocefkilwH0%2F9XpCiW%2BK8Yt7YuqwSOTqnWI34crhFnEvK2voAyNH%2FSmMqBnmcrllmnKsEgokQQceqi4FpfxGCTn5W8RIXI%2B6T1&X-Amz-Signature=4734dd4cdc9ad5074481f5d120dac6b47003b6821b45b8eb88e6567d72926d83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV54KMNK%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T025121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBelhrcyVjwH3dyrM09E1FbI7aS0a5XgAfDKZ8OL%2Bf1qAiEAxgBSugZrIgJ%2FKDSucQhBwxtEpt456jg2t2xcjPlRe00qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC54V0FL%2Fd3mSBHrWCrcA%2FgGlR%2BFhtKAf7PmLE8jLBdmk2CCYL62saV8W1jJsEV4vnwr1Oh840ocCgT0mt5GK%2Bk7Y8HOduOPxY8gcBZW3UFld7B%2BqXpSfM%2BxxX5ZlgS%2Fid%2Fvouignt8x5HI0Ed9qaz1XN%2F1b5PgGjMSmDdUeErHFfVgdIfDJUemdSBY5Ymsl3ISkmtfwOIfKbsUJuH7Qe2aWIVjRREXpiaJjMfpalwjq0twDTialTvuUWnGZO0Emu205k%2BpuvlQq7McK6xy6LE9sZkLMkpmvEM%2F7VPSOXHmQKunZ2C6cTx%2BR2QD%2ByZlRBB2xiWUwpJ%2FpL%2FrxdFhRGx9R8ExrJ1J9lo3pqlm4WKXHXQ8VSduqU2SJc9gfaw7Bh1hbiEFbjo4gS7beeYfoQgev7b72TQxohnasBztAGwKVTAeJWVcunW3PqcHCxTeDt9JyIHWRMdNSi28LELHRSJxk%2FuUYDylBqw4bLkSdIYy6Vlhfe%2Bb3Xhcby7HNOAk%2Bs9UENZv3RUdMrDppclTp%2FpXIoi3%2BLAuTB3MCD7aoVBgzL9qTJ%2FugZcS5UlNjniQuqH10b5C92GnhGP4ZDBfUkBRz6Jcq%2FKZsYJfPpVvzM9jZuN1Ymc%2FA%2BUmGhTk2GJDqQRO12t%2FAYI2uMKfBMJ6VgsMGOqUB7lOVgD8WJynQGzkDU9NzK%2B4aTy03A2nFHp%2BgDW7PEzxDVKGGnI8QY26DzxF7%2Bd%2FD9AoJ4ck8Z3xX3Fko%2BCxdzCvUCKnoRn7UquG3%2BpKIMcxT7IygN1CFIZ3sV0PXwQZqV2kypSUo8OzKDCTXRbbYlGDCRLE4%2Fd%2BKFVCoSgfRnR5rSEfSvD5EeyACM2DFapaPGxXsST2qwkZJ%2BvHRtNVmzojKTQ%2BD&X-Amz-Signature=edc7b26b6a937ebff5dd0f8808ec84becd7446016f8e97df3e2c3e8eb1149330&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
