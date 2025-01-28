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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLZHWXMF%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T200817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCLJcMU%2FWFmXZ8nPMmEqp45UrqhJz%2F8fx1LcToW5Le5WAIhAIrF7Hbwmq8qYmHTluY8%2FPYGYrY57b11%2BE6%2BP9Rt7g5TKv8DCH0QABoMNjM3NDIzMTgzODA1IgwHRp%2BvRaLflAfmWGAq3AMjrGn7nsY75CuSu1hFCfrPF5QvxP9cJ3j79fhLS5CTfDsg%2FMXzh%2FrfMIL73XGtbjiD1PNAe2jQ%2BxSh7yD6ZNpUZdXcbiUOY2fcCUTvcKIH6%2FPniyd8P5AwMBpI%2FKCQrLR0c%2FluwFA4bBzNKpqjxUAF%2FsK75mzxficTxj62krtGdN755ValE7pUqNL%2Fv%2FFmYfka3JcOiyV3lK%2B7u1l%2B2wdyY2rAMxNU%2F%2B%2BFqMWsdSgeKQ9mjhKJr0dzFWIsweQpD%2FPkTVEaE4vfy9AnX91bu2RmOhPGGAosOtfWNaP29NyZVgo1uXC0AlGIY2DcZMB42N1%2FqLSsRAd4YsFoCEXYQbVx9%2Bur58LUt6UhTbitsIakOn52cEI%2BYxZ8SIaiF6IHCkalzrJBiEBPrEbO1RODZafz2s%2B8aA%2BIo%2Bx2Fi26gXZMuLfvZ9tppExaiJos0HPr5hNtTHN4JIb5kEApVh3eTtwaXC5HyBN87LIcJxJkh4OV6qQLpcBeaQrULOtNFsmBXUIpWmEW36oDdnPDK%2BMbBwwzgcZRd2ge0XoUeuuuL8Bwtwy58aNMjE%2BcTdmXs%2BIow1JWvJOm7zmogAuZEe%2BuFstQHxrIJCp%2BNVhXmRbB0X6QekuiA6sdw0KkOArHDjDk6uS8BjqkAcoNZkk1mEXBoAJgiMCqIWzAc4Hg%2B92cESB3JrlXM0BhgJNTAAKaSVjf0aJS6N7HbAtgbWZ9noOcMp%2FNL0xeIUdDzwP6BlUM%2FmWP3corAFrlKVDgXkkSxmRYm4FbmR2O3fzpRFoSiCcBgk%2FuUuSLbXNqh3mcT2nyVPSb6g8haqYwWzcUQ66Dq4Lq7aET0SbskBaXwtkFNvHsxJV1cuOd6cZ%2BPCXA&X-Amz-Signature=9f62c8d1fb6d6f4590392510581dd8e538d5aef91f134effb3aa5c0838a0b51d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLZHWXMF%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T200817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCLJcMU%2FWFmXZ8nPMmEqp45UrqhJz%2F8fx1LcToW5Le5WAIhAIrF7Hbwmq8qYmHTluY8%2FPYGYrY57b11%2BE6%2BP9Rt7g5TKv8DCH0QABoMNjM3NDIzMTgzODA1IgwHRp%2BvRaLflAfmWGAq3AMjrGn7nsY75CuSu1hFCfrPF5QvxP9cJ3j79fhLS5CTfDsg%2FMXzh%2FrfMIL73XGtbjiD1PNAe2jQ%2BxSh7yD6ZNpUZdXcbiUOY2fcCUTvcKIH6%2FPniyd8P5AwMBpI%2FKCQrLR0c%2FluwFA4bBzNKpqjxUAF%2FsK75mzxficTxj62krtGdN755ValE7pUqNL%2Fv%2FFmYfka3JcOiyV3lK%2B7u1l%2B2wdyY2rAMxNU%2F%2B%2BFqMWsdSgeKQ9mjhKJr0dzFWIsweQpD%2FPkTVEaE4vfy9AnX91bu2RmOhPGGAosOtfWNaP29NyZVgo1uXC0AlGIY2DcZMB42N1%2FqLSsRAd4YsFoCEXYQbVx9%2Bur58LUt6UhTbitsIakOn52cEI%2BYxZ8SIaiF6IHCkalzrJBiEBPrEbO1RODZafz2s%2B8aA%2BIo%2Bx2Fi26gXZMuLfvZ9tppExaiJos0HPr5hNtTHN4JIb5kEApVh3eTtwaXC5HyBN87LIcJxJkh4OV6qQLpcBeaQrULOtNFsmBXUIpWmEW36oDdnPDK%2BMbBwwzgcZRd2ge0XoUeuuuL8Bwtwy58aNMjE%2BcTdmXs%2BIow1JWvJOm7zmogAuZEe%2BuFstQHxrIJCp%2BNVhXmRbB0X6QekuiA6sdw0KkOArHDjDk6uS8BjqkAcoNZkk1mEXBoAJgiMCqIWzAc4Hg%2B92cESB3JrlXM0BhgJNTAAKaSVjf0aJS6N7HbAtgbWZ9noOcMp%2FNL0xeIUdDzwP6BlUM%2FmWP3corAFrlKVDgXkkSxmRYm4FbmR2O3fzpRFoSiCcBgk%2FuUuSLbXNqh3mcT2nyVPSb6g8haqYwWzcUQ66Dq4Lq7aET0SbskBaXwtkFNvHsxJV1cuOd6cZ%2BPCXA&X-Amz-Signature=13d23b3554abdc34007edeabfa56c1c0bd3ab8cd9833a52838ad266e438f4ec4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLZHWXMF%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T200820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCLJcMU%2FWFmXZ8nPMmEqp45UrqhJz%2F8fx1LcToW5Le5WAIhAIrF7Hbwmq8qYmHTluY8%2FPYGYrY57b11%2BE6%2BP9Rt7g5TKv8DCH0QABoMNjM3NDIzMTgzODA1IgwHRp%2BvRaLflAfmWGAq3AMjrGn7nsY75CuSu1hFCfrPF5QvxP9cJ3j79fhLS5CTfDsg%2FMXzh%2FrfMIL73XGtbjiD1PNAe2jQ%2BxSh7yD6ZNpUZdXcbiUOY2fcCUTvcKIH6%2FPniyd8P5AwMBpI%2FKCQrLR0c%2FluwFA4bBzNKpqjxUAF%2FsK75mzxficTxj62krtGdN755ValE7pUqNL%2Fv%2FFmYfka3JcOiyV3lK%2B7u1l%2B2wdyY2rAMxNU%2F%2B%2BFqMWsdSgeKQ9mjhKJr0dzFWIsweQpD%2FPkTVEaE4vfy9AnX91bu2RmOhPGGAosOtfWNaP29NyZVgo1uXC0AlGIY2DcZMB42N1%2FqLSsRAd4YsFoCEXYQbVx9%2Bur58LUt6UhTbitsIakOn52cEI%2BYxZ8SIaiF6IHCkalzrJBiEBPrEbO1RODZafz2s%2B8aA%2BIo%2Bx2Fi26gXZMuLfvZ9tppExaiJos0HPr5hNtTHN4JIb5kEApVh3eTtwaXC5HyBN87LIcJxJkh4OV6qQLpcBeaQrULOtNFsmBXUIpWmEW36oDdnPDK%2BMbBwwzgcZRd2ge0XoUeuuuL8Bwtwy58aNMjE%2BcTdmXs%2BIow1JWvJOm7zmogAuZEe%2BuFstQHxrIJCp%2BNVhXmRbB0X6QekuiA6sdw0KkOArHDjDk6uS8BjqkAcoNZkk1mEXBoAJgiMCqIWzAc4Hg%2B92cESB3JrlXM0BhgJNTAAKaSVjf0aJS6N7HbAtgbWZ9noOcMp%2FNL0xeIUdDzwP6BlUM%2FmWP3corAFrlKVDgXkkSxmRYm4FbmR2O3fzpRFoSiCcBgk%2FuUuSLbXNqh3mcT2nyVPSb6g8haqYwWzcUQ66Dq4Lq7aET0SbskBaXwtkFNvHsxJV1cuOd6cZ%2BPCXA&X-Amz-Signature=42e796b81ddd9b79bec8476afb2c3b01b2feb4fe0d1a188054bfd5f34cd5ad87&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZLLIHJW%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T200820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCOJAbdxs5y20GQR8ho0Ehkw5e2rPGGUZFHMIeCa6Vr8AIgb3oyzNyRlO6gZGrPp2aQElzRRfE0auWi93kNvlIiqMsq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDCX7gzHCC4UVqfnMeircA13%2BB4fDnSXnAQwAzRhT0vk3eIaqpEwekP%2F7A7CI0o3m3%2Ftu8HCr1FehQMEUdtyL4dvo%2FAzbLhfFuTQkwLDNkkQL4IsqTWGMPjlpsFt6kKmM1M9biBzzNTn7jatKBNxAqwgDJ5Xme7ls0aS9KyAZz6iI%2BYOeY9LpjI4yxO%2BlPEdJptyUXrfkRV7Vn96oJEf1FBSg9RxHsfayy8DQud8yA6Pt8RBVdg%2F8knEsyxsw2Kuo%2FlMA18MXzhcjvIP27oRLEPAwj5HoKeY7CDq%2BnegE0%2BiZv9yKNghS79VSLZVUErzn2HdIK0rZRuiEIub8uew6eNXIIl6h8gIq3FD9KlZRHpWfjq27xR1WVGVmBhZVYddZaQ5DjG3PCEeHYZQrudgTsPORr7LUr%2FL4nfFxafUJP1ErkewA3%2BBj9Mt%2Fnct%2FWvpLytCMlxKbUgiNyFjt6HLFqfJHDP1rSNyAc%2BlVIv0BdTUUga0VgtF5XXm4g9zRF1xtGyL8%2BImZOp0KxAuzweukGzLpdLQydrcOeoN1Trl8%2FFLkbkS7wPR%2Bub57TPYjPt3%2BR%2F3w2oFcmH80oudWh3Krkkc5rWZ21Fcxrugn%2FfZRyohbnbh8MFuZEH1X5qpD2d7uRLctqQHUP02AhCYPMI3j5LwGOqUBg7Btuog28JiXXATQoTLVlZJl5GqccsqIhvU3P4u%2FyTeZbmgSv7ONb0IQGDG2v6XKlUgDx1tXgb2W5SAX07Iisk6fnU0%2FGnIXyq%2F8CQo9CLZNVEcN%2BpNxAbWkwlT2d5m9TtbLKuMSKJAu35NaEQckVOCDoNqWSwLH2%2FFgR50%2Fr2f2XHupyGNMaHlueWCSmEfnxVZnaa4wnv14jilBcp0ARoRuXeGY&X-Amz-Signature=478da510e8973628694cfd365d1299ee8881aa38cce44486ccebef8cb186d8ad&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLZHWXMF%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T200817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCLJcMU%2FWFmXZ8nPMmEqp45UrqhJz%2F8fx1LcToW5Le5WAIhAIrF7Hbwmq8qYmHTluY8%2FPYGYrY57b11%2BE6%2BP9Rt7g5TKv8DCH0QABoMNjM3NDIzMTgzODA1IgwHRp%2BvRaLflAfmWGAq3AMjrGn7nsY75CuSu1hFCfrPF5QvxP9cJ3j79fhLS5CTfDsg%2FMXzh%2FrfMIL73XGtbjiD1PNAe2jQ%2BxSh7yD6ZNpUZdXcbiUOY2fcCUTvcKIH6%2FPniyd8P5AwMBpI%2FKCQrLR0c%2FluwFA4bBzNKpqjxUAF%2FsK75mzxficTxj62krtGdN755ValE7pUqNL%2Fv%2FFmYfka3JcOiyV3lK%2B7u1l%2B2wdyY2rAMxNU%2F%2B%2BFqMWsdSgeKQ9mjhKJr0dzFWIsweQpD%2FPkTVEaE4vfy9AnX91bu2RmOhPGGAosOtfWNaP29NyZVgo1uXC0AlGIY2DcZMB42N1%2FqLSsRAd4YsFoCEXYQbVx9%2Bur58LUt6UhTbitsIakOn52cEI%2BYxZ8SIaiF6IHCkalzrJBiEBPrEbO1RODZafz2s%2B8aA%2BIo%2Bx2Fi26gXZMuLfvZ9tppExaiJos0HPr5hNtTHN4JIb5kEApVh3eTtwaXC5HyBN87LIcJxJkh4OV6qQLpcBeaQrULOtNFsmBXUIpWmEW36oDdnPDK%2BMbBwwzgcZRd2ge0XoUeuuuL8Bwtwy58aNMjE%2BcTdmXs%2BIow1JWvJOm7zmogAuZEe%2BuFstQHxrIJCp%2BNVhXmRbB0X6QekuiA6sdw0KkOArHDjDk6uS8BjqkAcoNZkk1mEXBoAJgiMCqIWzAc4Hg%2B92cESB3JrlXM0BhgJNTAAKaSVjf0aJS6N7HbAtgbWZ9noOcMp%2FNL0xeIUdDzwP6BlUM%2FmWP3corAFrlKVDgXkkSxmRYm4FbmR2O3fzpRFoSiCcBgk%2FuUuSLbXNqh3mcT2nyVPSb6g8haqYwWzcUQ66Dq4Lq7aET0SbskBaXwtkFNvHsxJV1cuOd6cZ%2BPCXA&X-Amz-Signature=c130818fdb9062cd039b0ea5b8f2da151d72af5388c1818b94cb6aed4ade467d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
