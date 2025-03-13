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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYL52CKA%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T121429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEuAaTWoZgNaf1HHh4laCtc%2FSg40emXMgWvjefryqrpdAiEA3gaUiebl6ILHqb7mZ3BVxvPiR3dozGbI1v1RMZdBFywqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWaFUKRlmUuauCPKyrcA8GoElIDFuFVi4R2zLD%2BcKrZzuTIzs6uG8DU3aCoJgamEcHlEttGVKl9rg7cTwCkL%2FZZVpYif1CQwUDmgaQ0nPsHN3D7BDMQJZ0kXRSUMbr9xyfkHbLS2QACr9TOyJ%2Flc%2F6JoK53Ni9EMNDaaiuGZWDF2Cl0vMfdPhffe1eVHCiK2lMZCED%2BrQ%2BdgnQ5uIcV%2B%2FiG2cZUvunB1NqCIOrXQ1DUv0ri8RxUqPufzE7dIgaSWDcyiIdykbaS%2FeIZiIRfhxHec5nTgCqSbgplxrpnvROrZZ1gYfJsHj67b3BDOM2L71e38CUZdY%2FzCY1DAQnjsJbUBZzZ2TkcWsuS6qALb2YVUoe%2FDir%2Ff%2FqIll2SxhX3NMcrtkKZHDACqP9c2c3QHAYBpowwv%2F1LOO34974%2Few1hCHD44vfJxlYqI2K5AXuTLdgNqD7S3g5zYkYXBb7zDXZBJ1fdG%2FAEWGGEp2Rn6kkSbfNZn0vMsgqHAJt34Eq7178uY8q%2BGhlwQpslLZgEZY9LGbbHuppkPZv6WmEF2El25o7HCokn3xyAK%2BeBULdSHawap5Pmev3aU6kRRvk72YEkb%2BoEnP7Fiz6Ordd2dabjE1gkApzoKvCPWLJSi%2Fk8cFvDKlkxr3hhc5ubMMLtyr4GOqUBRhnND3dvASd5cTLD223qUUDlQJsulcmkKXK%2Ft22YixA%2FYZM4ckkQjhsdepl2AWG8WvZ4Rt%2FocP4Xf42qaUQh1um3ZWs64054V%2Br5zct4NHqx1i67pcOC2dfiRaZ47%2Bndbc7fXrqv24DV6svaCDMsRojtke0F1BaMhLJd3%2FO1mHb8q%2FdBX6VdsBbo8ZsCY42acfUIrh2WAu%2FV5j86paqNUYWANc4F&X-Amz-Signature=a03a63a9e53105380e69ca6dce1b3aee8dcb65e4d754d3f511b2c26ab5c9a8a1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYL52CKA%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T121429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEuAaTWoZgNaf1HHh4laCtc%2FSg40emXMgWvjefryqrpdAiEA3gaUiebl6ILHqb7mZ3BVxvPiR3dozGbI1v1RMZdBFywqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWaFUKRlmUuauCPKyrcA8GoElIDFuFVi4R2zLD%2BcKrZzuTIzs6uG8DU3aCoJgamEcHlEttGVKl9rg7cTwCkL%2FZZVpYif1CQwUDmgaQ0nPsHN3D7BDMQJZ0kXRSUMbr9xyfkHbLS2QACr9TOyJ%2Flc%2F6JoK53Ni9EMNDaaiuGZWDF2Cl0vMfdPhffe1eVHCiK2lMZCED%2BrQ%2BdgnQ5uIcV%2B%2FiG2cZUvunB1NqCIOrXQ1DUv0ri8RxUqPufzE7dIgaSWDcyiIdykbaS%2FeIZiIRfhxHec5nTgCqSbgplxrpnvROrZZ1gYfJsHj67b3BDOM2L71e38CUZdY%2FzCY1DAQnjsJbUBZzZ2TkcWsuS6qALb2YVUoe%2FDir%2Ff%2FqIll2SxhX3NMcrtkKZHDACqP9c2c3QHAYBpowwv%2F1LOO34974%2Few1hCHD44vfJxlYqI2K5AXuTLdgNqD7S3g5zYkYXBb7zDXZBJ1fdG%2FAEWGGEp2Rn6kkSbfNZn0vMsgqHAJt34Eq7178uY8q%2BGhlwQpslLZgEZY9LGbbHuppkPZv6WmEF2El25o7HCokn3xyAK%2BeBULdSHawap5Pmev3aU6kRRvk72YEkb%2BoEnP7Fiz6Ordd2dabjE1gkApzoKvCPWLJSi%2Fk8cFvDKlkxr3hhc5ubMMLtyr4GOqUBRhnND3dvASd5cTLD223qUUDlQJsulcmkKXK%2Ft22YixA%2FYZM4ckkQjhsdepl2AWG8WvZ4Rt%2FocP4Xf42qaUQh1um3ZWs64054V%2Br5zct4NHqx1i67pcOC2dfiRaZ47%2Bndbc7fXrqv24DV6svaCDMsRojtke0F1BaMhLJd3%2FO1mHb8q%2FdBX6VdsBbo8ZsCY42acfUIrh2WAu%2FV5j86paqNUYWANc4F&X-Amz-Signature=6d0335c9129fc36896c66188438ba80051f093f5cfec88299d1d6bd0e2c2a13d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466326OZS4V%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T121431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEJm%2FqouSwrFcBj0NrP52sm1G6D4XWUhYfnDqXR0n11xAiEA6%2FSSL0%2F3CsCz2fKpMvGzB%2FxUqpti8vwmQFi1qEEt3kAqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKayOiM4CLjzNFqKiircA4ZvoDLz0GD%2F4kcql0xi3VkOPakVo6sZBcGb3MeswC251Vr%2Bk6AoyUkkjLhDvbAdv%2BCqES61IrpxSXcAieQ%2B%2FM8u%2FHAoqyrzECAeOrefnJdx20ZYtFAUfRMRhbxiXUvqaFK7zB11kAtlh2bDJmxsFc97hI7YNNQO0kWCbBsqmL0DfWEAqesBWlYGs%2B5oFF%2B47su6aCVAbfCMy5HAk7DwaA06RpsukqUQWCNI6Bark0wy4umyfr4iZmLtY8SC%2ByS8GBWyVhhI%2FpAJ%2BnNgvcEC7wev4Qxs21bbJfeYKk%2BrVbgolhrbpkwDQePpNX7n9mYGwLSrznpezuPVYeEB0F89h6vXUSwAY97kT3GLJkvApys6o6fM%2BwAxxODN581QHtibvraj0mFKE7%2BKP1mbKmduZG1G5CE5CKYlrdubCz3k1igXfJmpwGL5onVZEbYaisXwm0s0vLceqiFplqNU8fAxd5RQ%2FHDxNTPvHTwvJ628YoMn7%2BdLQWOeJ%2BEYdSkYdsJ81xu%2FuIOro%2BwR7r0ItQWOXcy86pjbdsd5j%2B6rtW6AT9c32Lw%2Biak8ER5sE%2Bp%2Fb%2FfojYxUKB55eVUpveXtqlKMRVuUH9%2F0Gm6zcfziJDuE%2FyXsa1S8Ot5YOt8cLHAnMO7Syr4GOqUBwKht9W50sxZOdcos%2F%2BI%2FdioJrBuTChX%2FJX9FCgZHC4la9yp4kNH4JBFVFE55N22kijYvjfiX3%2FOxN0S3tP7f2%2BZMD8Yeh36Pt9%2FBvl5YW2ZqonDcqL3pnGdRtQMbv7Y6EFLgV%2BwECRtSR3Mg3PU7ZVm4cR%2FQlcqsy5dJCuIHOPVob1sw3DWKFJ1W%2BK8GncimGVLTu8lL29nhA2tDNmRqeIuo8nm2&X-Amz-Signature=c2f4dc3195b94fb9d4c84b2a0f02c170e19f6a703d69de61714ea1ae693244b0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGFS6MBR%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T121432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClJ%2Bl4FdnN1BO3%2FQ%2BAhovmctk2pk7yraKShXmxZnznbAiEAoqA7mcSCP9sAEKcrMEyDBTNCl9uKbiyaaCERkwTDgfsqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAsjMvxcoix5lVaPCCrcAzMKBigJfVHPl53N6oiB%2BAcdA0diy7M6Ll0e5xctr65UlK%2BR9zjkMD4B5MyfoMO7SwI7CQUXAErvxM7W1I0SL73ukn%2F3EYk%2BXCUps%2FX2b30UiCfqCAfpcYLctSe6unobVwLy0Ma1paa656%2BEGxoGgIEUr1n0TS5ODhZwr2em5XMPRTA4L62tU%2F%2FoM6ExbWCz%2FEzkUC1X7uTKejhVktek2%2Ftl545jZZ3z1B1wM1qAnX0dw1slvLUsoTgLzsL%2F%2B%2FIHNhJh6BdydDdNcFwtjOIImYepzxDvf7eW%2FLjae5zbgoolYI2pdoo%2Fa13diSllYqoKpY%2FtfLQ9StvAsYcCH8elo32uDAdaxXH8YDDpmmMQY9E0ejZPequH4O%2FS3tPhUSuLt6kGTIPAeFmA8%2FSqMoDW33fR%2BEpfiHTdHNa6NbXcjwjnTBXXn4BYW94Jf%2B7L3clsH1vj5y2IYOByRyTIqM99tJcD6CJ9Vc6dL3NWqxLGqA0AkL8DlwxZoTDV77zS3UrcGp3Lv4x7UqGmbIu4n7xf9TnHLdlbg1b%2FYXJHzIn%2BdcCeqHPIal8KRxjysohcuyUcKb7GFnOzFDkqaDNSsHX3eFVoRl59ANI1hyplRLkM4haU6bPH%2BrRS%2BU511bwpMNnByr4GOqUBeY%2BoFDatWHXkU6cY%2BwyIlb84BQDgAFYgdv5sKQpuRqOvhFp5a7rpvS8Cy3ZO2OsmQv0nV1HcxuD28neXztDi3FUQQrSvH278RdAdsyyteURKMSeckrEuZvAchPayQ0dQzZTsBHNJapCGvBMiJGNEgwLWF7YQNAZuZrd6BHXPXKZTnWSwtJqCu6%2FQjTa1XVa1FfBBNOz6n1PT8AuyOZcbn%2FQnVN3D&X-Amz-Signature=afdd04036822f292dcc3daf98542f658d68cc78677018361e7effdddb0a3600f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYL52CKA%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T121429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEuAaTWoZgNaf1HHh4laCtc%2FSg40emXMgWvjefryqrpdAiEA3gaUiebl6ILHqb7mZ3BVxvPiR3dozGbI1v1RMZdBFywqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWaFUKRlmUuauCPKyrcA8GoElIDFuFVi4R2zLD%2BcKrZzuTIzs6uG8DU3aCoJgamEcHlEttGVKl9rg7cTwCkL%2FZZVpYif1CQwUDmgaQ0nPsHN3D7BDMQJZ0kXRSUMbr9xyfkHbLS2QACr9TOyJ%2Flc%2F6JoK53Ni9EMNDaaiuGZWDF2Cl0vMfdPhffe1eVHCiK2lMZCED%2BrQ%2BdgnQ5uIcV%2B%2FiG2cZUvunB1NqCIOrXQ1DUv0ri8RxUqPufzE7dIgaSWDcyiIdykbaS%2FeIZiIRfhxHec5nTgCqSbgplxrpnvROrZZ1gYfJsHj67b3BDOM2L71e38CUZdY%2FzCY1DAQnjsJbUBZzZ2TkcWsuS6qALb2YVUoe%2FDir%2Ff%2FqIll2SxhX3NMcrtkKZHDACqP9c2c3QHAYBpowwv%2F1LOO34974%2Few1hCHD44vfJxlYqI2K5AXuTLdgNqD7S3g5zYkYXBb7zDXZBJ1fdG%2FAEWGGEp2Rn6kkSbfNZn0vMsgqHAJt34Eq7178uY8q%2BGhlwQpslLZgEZY9LGbbHuppkPZv6WmEF2El25o7HCokn3xyAK%2BeBULdSHawap5Pmev3aU6kRRvk72YEkb%2BoEnP7Fiz6Ordd2dabjE1gkApzoKvCPWLJSi%2Fk8cFvDKlkxr3hhc5ubMMLtyr4GOqUBRhnND3dvASd5cTLD223qUUDlQJsulcmkKXK%2Ft22YixA%2FYZM4ckkQjhsdepl2AWG8WvZ4Rt%2FocP4Xf42qaUQh1um3ZWs64054V%2Br5zct4NHqx1i67pcOC2dfiRaZ47%2Bndbc7fXrqv24DV6svaCDMsRojtke0F1BaMhLJd3%2FO1mHb8q%2FdBX6VdsBbo8ZsCY42acfUIrh2WAu%2FV5j86paqNUYWANc4F&X-Amz-Signature=8f60fcab47d0e4a1cb198691ff8978ed5459bae2fe08fabfd1d029990d5ddf23&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
