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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOXGX6RJ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T091011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIAoAMWcWPpOpNYSvoO9sbZhItAyo6O0NxyncsqJ%2BjyYUAiAzxwtYN7abjXpToZBZmeKrcomT2LsixCqiTqyg1YUwaCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMwgNesp8B%2F0f%2B8pviKtwDJ%2B%2BwlTC8y%2BPCGhaSu2b6A1xsI%2Bg9NGBCWdfZBGa0ns1HyEvt9u97mDV%2BhMIwAVCKPIQJGX63qO4n5%2ByY732tLPtntOs9Qm%2B54qJeXof2eRmbYXVHDkcAGfAdb6DbD%2FqgXY7%2F2Y%2FjZiV79%2BhmDXjbuxxobNm8%2B6%2BxzwLzk8QxtVf8Az8usAsV73ISUgIsUzlHezxqIoNG6suA%2FowNVcBOqs8qv9eygWcN0M3MHS6TQKTMhVNCeN%2BopPbC6go7VrNn5JKAAcsholwb4muvGuNjSYUev5TXWu7oqD1JrpE4H5O%2BWNIHI0s%2FoGbtfKjFBFuKXlAJF5RFkoSbKZXS2yPeSSLPQ3TABMdOk3G8LiupOxHDceg%2B3kGgrIAIh4LJdCJt2xaH2Uh46hTNea%2Byd9%2Bitvu14q%2Bp3oW46eyq4GnxIecfa%2BkhtjJ%2FxGvzTPWfB7n%2FZQa5vvlaUwmPPorY2jOl8Hir%2Fuur2Q2QQfeZ4jv2vIWACzg5GSIm0EUaPAVaLv0JRJinGqVK3odIxfcV3WKM8ZmTgVvET%2FpkM%2BoJ5jjCObyoSWu7AsHEYHxqPgXq%2FvTrSPGqfEmRFRRjbKud4iQgeTuCz3Qa0t54qR6zf1V%2BCU7DK%2FBmBIjacLI0EPEwxY2ewwY6pgE2GiznLQO%2F%2FcY0yUA%2B1npHCroszVHskpTEhOXLXVNQ6b%2FsDbTT2hhjaitXqq%2FdDwHK%2BOlFrcJ84t%2FdaNn%2Bk4yJxJRgnx2uCHWS4LTRxyQ%2Fy4OuBLrxanV1%2B40UrPIwYix8bwxEoqw6kTCwvQmzTBG4YIbb4Tr%2BqOWwj3wwFaI0q%2B0KiZqtK0wQFLw0M9Lu3ccty%2BtRbzpFpF47kZdnDAPESJGuBzHT&X-Amz-Signature=8e2aa6175e8e711727ab94554a529c201f18bddcb7d103acc009afe9722b28e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOXGX6RJ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T091011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIAoAMWcWPpOpNYSvoO9sbZhItAyo6O0NxyncsqJ%2BjyYUAiAzxwtYN7abjXpToZBZmeKrcomT2LsixCqiTqyg1YUwaCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMwgNesp8B%2F0f%2B8pviKtwDJ%2B%2BwlTC8y%2BPCGhaSu2b6A1xsI%2Bg9NGBCWdfZBGa0ns1HyEvt9u97mDV%2BhMIwAVCKPIQJGX63qO4n5%2ByY732tLPtntOs9Qm%2B54qJeXof2eRmbYXVHDkcAGfAdb6DbD%2FqgXY7%2F2Y%2FjZiV79%2BhmDXjbuxxobNm8%2B6%2BxzwLzk8QxtVf8Az8usAsV73ISUgIsUzlHezxqIoNG6suA%2FowNVcBOqs8qv9eygWcN0M3MHS6TQKTMhVNCeN%2BopPbC6go7VrNn5JKAAcsholwb4muvGuNjSYUev5TXWu7oqD1JrpE4H5O%2BWNIHI0s%2FoGbtfKjFBFuKXlAJF5RFkoSbKZXS2yPeSSLPQ3TABMdOk3G8LiupOxHDceg%2B3kGgrIAIh4LJdCJt2xaH2Uh46hTNea%2Byd9%2Bitvu14q%2Bp3oW46eyq4GnxIecfa%2BkhtjJ%2FxGvzTPWfB7n%2FZQa5vvlaUwmPPorY2jOl8Hir%2Fuur2Q2QQfeZ4jv2vIWACzg5GSIm0EUaPAVaLv0JRJinGqVK3odIxfcV3WKM8ZmTgVvET%2FpkM%2BoJ5jjCObyoSWu7AsHEYHxqPgXq%2FvTrSPGqfEmRFRRjbKud4iQgeTuCz3Qa0t54qR6zf1V%2BCU7DK%2FBmBIjacLI0EPEwxY2ewwY6pgE2GiznLQO%2F%2FcY0yUA%2B1npHCroszVHskpTEhOXLXVNQ6b%2FsDbTT2hhjaitXqq%2FdDwHK%2BOlFrcJ84t%2FdaNn%2Bk4yJxJRgnx2uCHWS4LTRxyQ%2Fy4OuBLrxanV1%2B40UrPIwYix8bwxEoqw6kTCwvQmzTBG4YIbb4Tr%2BqOWwj3wwFaI0q%2B0KiZqtK0wQFLw0M9Lu3ccty%2BtRbzpFpF47kZdnDAPESJGuBzHT&X-Amz-Signature=6e3b97bb9bb48f3dd29eeb7a9f65b3d0f3364ac78022b5ea0339cbbc4ac88c8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOXGX6RJ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T091011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIAoAMWcWPpOpNYSvoO9sbZhItAyo6O0NxyncsqJ%2BjyYUAiAzxwtYN7abjXpToZBZmeKrcomT2LsixCqiTqyg1YUwaCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMwgNesp8B%2F0f%2B8pviKtwDJ%2B%2BwlTC8y%2BPCGhaSu2b6A1xsI%2Bg9NGBCWdfZBGa0ns1HyEvt9u97mDV%2BhMIwAVCKPIQJGX63qO4n5%2ByY732tLPtntOs9Qm%2B54qJeXof2eRmbYXVHDkcAGfAdb6DbD%2FqgXY7%2F2Y%2FjZiV79%2BhmDXjbuxxobNm8%2B6%2BxzwLzk8QxtVf8Az8usAsV73ISUgIsUzlHezxqIoNG6suA%2FowNVcBOqs8qv9eygWcN0M3MHS6TQKTMhVNCeN%2BopPbC6go7VrNn5JKAAcsholwb4muvGuNjSYUev5TXWu7oqD1JrpE4H5O%2BWNIHI0s%2FoGbtfKjFBFuKXlAJF5RFkoSbKZXS2yPeSSLPQ3TABMdOk3G8LiupOxHDceg%2B3kGgrIAIh4LJdCJt2xaH2Uh46hTNea%2Byd9%2Bitvu14q%2Bp3oW46eyq4GnxIecfa%2BkhtjJ%2FxGvzTPWfB7n%2FZQa5vvlaUwmPPorY2jOl8Hir%2Fuur2Q2QQfeZ4jv2vIWACzg5GSIm0EUaPAVaLv0JRJinGqVK3odIxfcV3WKM8ZmTgVvET%2FpkM%2BoJ5jjCObyoSWu7AsHEYHxqPgXq%2FvTrSPGqfEmRFRRjbKud4iQgeTuCz3Qa0t54qR6zf1V%2BCU7DK%2FBmBIjacLI0EPEwxY2ewwY6pgE2GiznLQO%2F%2FcY0yUA%2B1npHCroszVHskpTEhOXLXVNQ6b%2FsDbTT2hhjaitXqq%2FdDwHK%2BOlFrcJ84t%2FdaNn%2Bk4yJxJRgnx2uCHWS4LTRxyQ%2Fy4OuBLrxanV1%2B40UrPIwYix8bwxEoqw6kTCwvQmzTBG4YIbb4Tr%2BqOWwj3wwFaI0q%2B0KiZqtK0wQFLw0M9Lu3ccty%2BtRbzpFpF47kZdnDAPESJGuBzHT&X-Amz-Signature=dd4149bddda7cc237b6c2e915a21ad9cc5e78257f06bd73e38571c47add7a44f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RKUIPYE%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T091014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCuOVbaCsrPy5okDpGnMiErofctdGGMRh51fZ251ZgT5QIhAKGYsICQOy54VEIeRWZN36JbusEYi%2F4pLpOnJYifUk5OKv8DCCkQABoMNjM3NDIzMTgzODA1IgyH4t7tUEc6Wg%2F6Yr8q3AO0k%2BbDTaM6ONL8xagk16dHM0kiTZ3lErfrRu5yeY9dV%2BJeGpVrJmqsfjxFmDY7TAQ9jy2%2FH1DRH4TIafxuLul%2BcAIdg77fZywkSE46qXPr%2F5UmzxuIN1cHUGx2d4kfCFJNS%2FWkvUf1hRSAZu4514T80qo84AGjUsVu3uZe2obir1IbhZWwFeShaaX7jja%2FKneKIqltPwILMTFl8cibfLBAXBqeOrRTUsvCwy9quczziLrVvh3QDX%2BfYpCNFW8XwYxcYEiugBzrX77t1V8Tazy2p%2Fq98Egkqau04yKTTqtmQL%2B35EKpLNCf6C0dCcFe4A%2FXYun09f%2FdyG4KrQi0mMXtPglPFvyFFyhQm%2BTEG%2Fx28P0ODb7xIOyhI9VJghH8eBkvlhRdmTm5NzAtjiydQ%2BlpQwq7nAOfC79lrtbGiU1%2FWzrl%2BCXA%2F3KDmL2GlTqwAx6PehqyErH2eHYtQPJJIT5u1TbOdCZKxAm4I3R5L%2FFenOmQGSBXFQSBa8y9MKqL%2BltNQJPuwJg6jBXVa3X9%2Fh7SyIe2ujLcDkt9hm6Vk2DRQmdykpvTYzoHIrxRjvkWmfbndO5EsAifnOJvCMkKTkOIjrq2lhfvrs8Bvgdz2gpGhnIeSPo8Dxg4GwQ%2FQTCUjZ7DBjqkAf9tW%2BwI4PcvUfJVijezOwBnDCkMeD2jgCYtTNGqgRddQqpwt3K%2B%2FRuVfM8VDRxnoGA0N82uXD2zJDK5M4%2BY3tp01HaBDRo0USX6rabVm77KezDG2Gdb5xMZICdbIZ73KYZvkScSJCmlhzMtE6GnYlxkrmazmOOh4X8VaYO20GRUmvbCT9I8x1vu7MGwwoRIWHJsiuXbYiB2h0Wg2fck%2F66OvMmD&X-Amz-Signature=87b5d7cf57b63ef53f61e3d59f2d3b07cf7bafd238a262665d75091dceebd525&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZQFECE6%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T091014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCxqL4Imy707kbVSQIntTbwRAfHZdKHNEfR5L9Hcq2NdAIhAKM4TxICLq61DWVDaznxEos5kA1%2BqWIvG%2FEuX3hmgitgKv8DCCkQABoMNjM3NDIzMTgzODA1IgxTWIBruA7XbC3F09cq3AN7Hy%2FB%2FZQDWK%2FmG2iBzY%2FybxTkzOdr4xAyx%2F5XJ2DgiK%2F0x%2B6SJ%2FH4of7dFQZePlo1hVN2oCZuory1H1lS6fnoiIuCmnL%2FkExXnvThnKWLhggK85icwhw3Y6raW4yw1bwPKJNYhtLNbEQ6LwpLK4I3tj%2BSoQtnsog6ViXt9XWXRk26JErt4lL3%2BBwRfSkUi0qnFBIGJ%2FtaEdltM7q6Dd8lftL1iRZUN0iKhTS7Ib3F7W1PjUprL01lyqMiTMSpe%2F8YdTzvJwh3d%2BYGT0POqNNvhXXhlkjK9gOU3D%2BFvE%2F8Kna4Bfa8d1kDOT3KbhVWaWUNY67S8vyJwfJLWMYwNEXQq4U0ba6f%2Fz9xss6u9gTw8ZftRlLTBK2z6kdPDWtaATCBQNjHxCNEFH9xP6OFRa577u2bWlyS7mF74EOE%2B47ViqOipPCjYCcO4ID13L8ooIS6DbQNZLbUyhnsk5Y7Zt2KJ1ZqlNpX%2BomhY8e4NmtT00aAShJ4cAbMXl7BlutgMNhby0TNKLSgp0oJwjHUyJUy5aovuqyELTdbBxgVuhHWUI8v0c4I5YLaCYmYNJ%2FkJWgwe9k8WZwJQoUVJYCTiEqY22tQed1BBs111IiwjsIxvWd%2F8nTY4tgXpv6xszC4jZ7DBjqkAcL8qdjbApghcjZmZT2V5SOnWvdDcG%2B7dAnrwLyJmtqYUA8bXSG9TGF%2FT05PtQBNnTLW7K5FGbGgrRmsCDOH8oDgBuzeyWZ3HQGcXvIeXYdCHJyalpbxNcLyBi5dtxyLMwS%2F6%2FjKjN5a3Yqpd2EbmD9mCE5VfrsLHCicd%2BO7ZIBp%2FBg5Cd%2FZAz1Oz7SiLHfum5oXxqQ4GJiQ8p4co8e%2FH3RiaaMX&X-Amz-Signature=c14948a7eba204e47b5ccb7fb8d3829f7bfcf6ef477023ee0795b3814a0a56cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOXGX6RJ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T091011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIAoAMWcWPpOpNYSvoO9sbZhItAyo6O0NxyncsqJ%2BjyYUAiAzxwtYN7abjXpToZBZmeKrcomT2LsixCqiTqyg1YUwaCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMwgNesp8B%2F0f%2B8pviKtwDJ%2B%2BwlTC8y%2BPCGhaSu2b6A1xsI%2Bg9NGBCWdfZBGa0ns1HyEvt9u97mDV%2BhMIwAVCKPIQJGX63qO4n5%2ByY732tLPtntOs9Qm%2B54qJeXof2eRmbYXVHDkcAGfAdb6DbD%2FqgXY7%2F2Y%2FjZiV79%2BhmDXjbuxxobNm8%2B6%2BxzwLzk8QxtVf8Az8usAsV73ISUgIsUzlHezxqIoNG6suA%2FowNVcBOqs8qv9eygWcN0M3MHS6TQKTMhVNCeN%2BopPbC6go7VrNn5JKAAcsholwb4muvGuNjSYUev5TXWu7oqD1JrpE4H5O%2BWNIHI0s%2FoGbtfKjFBFuKXlAJF5RFkoSbKZXS2yPeSSLPQ3TABMdOk3G8LiupOxHDceg%2B3kGgrIAIh4LJdCJt2xaH2Uh46hTNea%2Byd9%2Bitvu14q%2Bp3oW46eyq4GnxIecfa%2BkhtjJ%2FxGvzTPWfB7n%2FZQa5vvlaUwmPPorY2jOl8Hir%2Fuur2Q2QQfeZ4jv2vIWACzg5GSIm0EUaPAVaLv0JRJinGqVK3odIxfcV3WKM8ZmTgVvET%2FpkM%2BoJ5jjCObyoSWu7AsHEYHxqPgXq%2FvTrSPGqfEmRFRRjbKud4iQgeTuCz3Qa0t54qR6zf1V%2BCU7DK%2FBmBIjacLI0EPEwxY2ewwY6pgE2GiznLQO%2F%2FcY0yUA%2B1npHCroszVHskpTEhOXLXVNQ6b%2FsDbTT2hhjaitXqq%2FdDwHK%2BOlFrcJ84t%2FdaNn%2Bk4yJxJRgnx2uCHWS4LTRxyQ%2Fy4OuBLrxanV1%2B40UrPIwYix8bwxEoqw6kTCwvQmzTBG4YIbb4Tr%2BqOWwj3wwFaI0q%2B0KiZqtK0wQFLw0M9Lu3ccty%2BtRbzpFpF47kZdnDAPESJGuBzHT&X-Amz-Signature=6691635510d80ef8f7cb17204ab0eb12a303af7543f8b120394bc5d876858ad9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
