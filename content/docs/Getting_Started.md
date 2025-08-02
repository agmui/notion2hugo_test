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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI4FXMQJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDflLr78P4TPEASQbOdIKHpdsuXwKvDQClwB0tlSumWHgIgerYiWsgqflWgFtngD4Tiv2PlKb8UvDKsUDIMHTQJXOMq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDBeD%2BRaAOQDbTLNHISrcA3MfX7JUoGvXbx7fXOoO%2FGtyyixXLrkzss7aMULaaOlRb1iC5bI2gWlQMVFNfPPN%2FR8j6yE2uwPhW1k5pSQeJZ%2B8lpENb%2B6eo7DSoEfTL3qn4vzUDcyqhPYSEaRHzrBIloTqz%2FfRUgAa%2Bdh%2Fp%2BIgcQDXHflepIft9ss6WHxwwFojxCYWeS%2BFr6UbvvSYUzcY4NQpiYRfBcJ5Qnu5w8ldGpVo4uNYktto5ZshsclTgcbTE%2FQZ0SeNe2VE9VvgiQdAcztooYgwI6yyUuuK49A8hKvMGda7om6mFyDUKFkKplFvFh3GlKWVz5i4J45XJcnf5NDbFgA%2FaNCU2hQlpVl1G%2FLHBDty1l1qv2dfTBxz6s89%2B51r9LoqniLQnxTRaZhGjPHkXP8PeDXixLlQzWIkaguFUXtmOr7kyekHPpUy6D5%2FviHd3%2F32SHX5JzCuzD6brTHZ1z8tYOmmOKTlFn85tHP5Yswx3mZPopP6pXfA3iKlSDAaSJjX07i7nkGGS90M3B7xRuvJyjRxTPyQMc6iWkLxRjZ6Gpz4xVKawycdBt3i1OrPncmsnUuZvXTkQyfMyyLjKKcmhsyp4oAzroDgHsqZA69tgDVPRttdKTmbMrB7VsM0F%2BiWe9D4NDB1MNmeucQGOqUB%2Fy4cYWvP663uZYN9ifYwri8IVvfS%2F6LzsACM7cRcV1tnlDBbE%2BGGJchY6O5J83bqA%2BuK%2FjB7ez13i2fVtnPMUhWjtGTUaxm01HwcOuyFLxIprOH5C2vEQArjUU3k3lyArTu9ZJU%2F5eixmhMvnmvKU86nTH9g86yqg5lYn2OakFI%2FBhy%2F6Z9fSMHP7pT30NYSgYHoWBt3oZptqE8rzbCqoBgnNS9s&X-Amz-Signature=7cf799e21a25c3f62daf66d424f21d261136be06689e50cdf55dddc55c67aa11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI4FXMQJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDflLr78P4TPEASQbOdIKHpdsuXwKvDQClwB0tlSumWHgIgerYiWsgqflWgFtngD4Tiv2PlKb8UvDKsUDIMHTQJXOMq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDBeD%2BRaAOQDbTLNHISrcA3MfX7JUoGvXbx7fXOoO%2FGtyyixXLrkzss7aMULaaOlRb1iC5bI2gWlQMVFNfPPN%2FR8j6yE2uwPhW1k5pSQeJZ%2B8lpENb%2B6eo7DSoEfTL3qn4vzUDcyqhPYSEaRHzrBIloTqz%2FfRUgAa%2Bdh%2Fp%2BIgcQDXHflepIft9ss6WHxwwFojxCYWeS%2BFr6UbvvSYUzcY4NQpiYRfBcJ5Qnu5w8ldGpVo4uNYktto5ZshsclTgcbTE%2FQZ0SeNe2VE9VvgiQdAcztooYgwI6yyUuuK49A8hKvMGda7om6mFyDUKFkKplFvFh3GlKWVz5i4J45XJcnf5NDbFgA%2FaNCU2hQlpVl1G%2FLHBDty1l1qv2dfTBxz6s89%2B51r9LoqniLQnxTRaZhGjPHkXP8PeDXixLlQzWIkaguFUXtmOr7kyekHPpUy6D5%2FviHd3%2F32SHX5JzCuzD6brTHZ1z8tYOmmOKTlFn85tHP5Yswx3mZPopP6pXfA3iKlSDAaSJjX07i7nkGGS90M3B7xRuvJyjRxTPyQMc6iWkLxRjZ6Gpz4xVKawycdBt3i1OrPncmsnUuZvXTkQyfMyyLjKKcmhsyp4oAzroDgHsqZA69tgDVPRttdKTmbMrB7VsM0F%2BiWe9D4NDB1MNmeucQGOqUB%2Fy4cYWvP663uZYN9ifYwri8IVvfS%2F6LzsACM7cRcV1tnlDBbE%2BGGJchY6O5J83bqA%2BuK%2FjB7ez13i2fVtnPMUhWjtGTUaxm01HwcOuyFLxIprOH5C2vEQArjUU3k3lyArTu9ZJU%2F5eixmhMvnmvKU86nTH9g86yqg5lYn2OakFI%2FBhy%2F6Z9fSMHP7pT30NYSgYHoWBt3oZptqE8rzbCqoBgnNS9s&X-Amz-Signature=f13d388fd15caef692c0f92da3f0dfcf77c9b94461bde4110bffcd854f1d095c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI4FXMQJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDflLr78P4TPEASQbOdIKHpdsuXwKvDQClwB0tlSumWHgIgerYiWsgqflWgFtngD4Tiv2PlKb8UvDKsUDIMHTQJXOMq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDBeD%2BRaAOQDbTLNHISrcA3MfX7JUoGvXbx7fXOoO%2FGtyyixXLrkzss7aMULaaOlRb1iC5bI2gWlQMVFNfPPN%2FR8j6yE2uwPhW1k5pSQeJZ%2B8lpENb%2B6eo7DSoEfTL3qn4vzUDcyqhPYSEaRHzrBIloTqz%2FfRUgAa%2Bdh%2Fp%2BIgcQDXHflepIft9ss6WHxwwFojxCYWeS%2BFr6UbvvSYUzcY4NQpiYRfBcJ5Qnu5w8ldGpVo4uNYktto5ZshsclTgcbTE%2FQZ0SeNe2VE9VvgiQdAcztooYgwI6yyUuuK49A8hKvMGda7om6mFyDUKFkKplFvFh3GlKWVz5i4J45XJcnf5NDbFgA%2FaNCU2hQlpVl1G%2FLHBDty1l1qv2dfTBxz6s89%2B51r9LoqniLQnxTRaZhGjPHkXP8PeDXixLlQzWIkaguFUXtmOr7kyekHPpUy6D5%2FviHd3%2F32SHX5JzCuzD6brTHZ1z8tYOmmOKTlFn85tHP5Yswx3mZPopP6pXfA3iKlSDAaSJjX07i7nkGGS90M3B7xRuvJyjRxTPyQMc6iWkLxRjZ6Gpz4xVKawycdBt3i1OrPncmsnUuZvXTkQyfMyyLjKKcmhsyp4oAzroDgHsqZA69tgDVPRttdKTmbMrB7VsM0F%2BiWe9D4NDB1MNmeucQGOqUB%2Fy4cYWvP663uZYN9ifYwri8IVvfS%2F6LzsACM7cRcV1tnlDBbE%2BGGJchY6O5J83bqA%2BuK%2FjB7ez13i2fVtnPMUhWjtGTUaxm01HwcOuyFLxIprOH5C2vEQArjUU3k3lyArTu9ZJU%2F5eixmhMvnmvKU86nTH9g86yqg5lYn2OakFI%2FBhy%2F6Z9fSMHP7pT30NYSgYHoWBt3oZptqE8rzbCqoBgnNS9s&X-Amz-Signature=423b10e19bdf16d36bf43973e95d0b97f3e5c273e292bba104ffb5de5f836955&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FSZKVIF%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICwIOYBTrn66ynDCKivjFDSbsebRPXDSvwnHGV1W9uJ1AiEApmAYgCu2QBckr07gkPsP67QZAMNTaAXE8dtDHCLzJiEq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDDaPU2YI0Qub%2FuwZvCrcA%2BZL55%2FvaJ9tERd%2B48WXS%2FHWqZue6g8HD3WEHc1rQ%2FF8%2B8zL0BpxboQ3QUYNhrjAw7WexvEe%2B8%2BhlvQ%2FhPgQYk5lg68IdWw%2BdS3avU2x4W5Ask3wjJt4BsyhNaaw36fRN9%2BJcUouJ5sHL2Ukg7r5dBtNZ5SXjmdYRh4tI5U603XmawrSVWs1ot%2Fs62v7zyGPdCO7GsnGQPFj%2Fz1BovhNSjSH50wlP8rIMnsiah8rcy33ycq52Blz%2F%2FpOto1UUQlxGkJYHxZI77J2gEJMd7pZ7YJq4g9Hu58LILgAaMAxqPSjkTLmySZlso1X2LeOq454ACR1dGiublmz15FXXzDLcJiUjWXOGAx2pzNXslLjeC%2FnH7SXzAu40SaGWH1n1ka4RqmT9VN3yNzCu9VWas5mWbhaVI8%2FUWsTYv1htEqOPzFwikRgDw5GH4M%2B8XD9x2Qy7j%2BaqNVkEytQSBxZEZfUVmkrhWzIPRIXVvB1XQkrFG8w7VU4cjIMVWMQw5PV%2BJ76neZeAtNkcyxR9wnsvR8nI13OXilNJztM2wUy94VVfNpUS9y22tr%2FhBWYF0mBMOOI09umbtxSInETebxrufXbIbCSpSLthh8GFJ5wTqxkSJBzf8cXl7to1TNnhoW%2FMPCducQGOqUBOTIkCRUfTIDHAMjgG7e13fpuhgjQz2j%2Bc9t1uRhixuITANmAF3lavA0GNyYDAjPSxzT4w3LAyuTTp5isiNdAciqsoujTmqFEYSspJ9Apd2ZolM8uPPxylPG8wNgY4FyAIIF7eThgbbXAm%2BvgFo%2B4%2FpcD8GxWPmL7y1nHcV09BwWuzj10OlW2is6jPNv8iXxZI2yfwd0odlcRs%2BA6XV6IAQhHzP%2Fa&X-Amz-Signature=864bd7eae5e7d9381589b14f0ba31aaf26831b89ec9737eec018adcb408528c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627RUGKA6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAu%2FeRpmSYhnCtND2mGrCpep%2Ft93qHvfe9h1AYjATrgVAiEA6LD2EmUoKfxqUQuA6ZwIXxww%2BxUCi3xRosp9CobifDAq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDLGVdG20AEhIdGq%2BsSrcA71WQtnYLV62GdX5EgoKMcfMtXlrgb3NCYbPJQLUDSEFDTmAcSTAvi9h7m7O2el65OjN%2B3LncyRzjE0thgcmB3rQhiB%2BSbk9DYyKVSXkE%2FPpScL12a9sShhl2NqbQNWPNqHyCIMd01VtgZKNeqwG5xwq9GE9U%2BsNWOSsY%2Bb5Tk3E%2FWKm%2B6C52kbtkmS4sIZE6cLnS%2BonzBAN8QhexCwQiOb0cRggNL3AVgFqUFb4ZlnRjUKEMt76QMqRuEHbiXm5InfbsZRDv48o%2FlOOrKGQZkx2BBsfoiKC9RwuzN5QxnSvkY%2B9Zdcbj1CsINQ9TEbUrR%2BSAmhfkRz7ZCvNw7l%2FsLf0MaEVLVZ3LkeXYX6s%2FC6xaRyzQlQP0ehJqGN1q80MexC5ltk4BprqArlSYH2kNT9ywwhj8yHp1gwnj7WQDpWZru0syAGjSXs5jYBRZ%2BS79BjowBVAKt8rD%2Bml%2F8fEU%2BE7fUKprWT39RNCWsywg5Q08BeVHcce9nNSaAY7tqLIldFCjBMGGvFzBOKpgmFB9ojkHfD66kgI6S%2FhNs3uPsjaoOds5asjlOlynSh%2FNum8OU1DcZXt0Uihk4iQDQmKChwF4bKMKeu2iPAgDQrLXid3D0NbydU5Wri4DabfMPqducQGOqUBeJNytTh9II1erdgGzbHJnUPwd%2Fk8YWYuYG66jUrRgnFlIkc2CnKa%2Bt5qs4LSfRKWczB0dwnxlSjsASRvwhEWhqhhG11q%2FFCVGbQ3sERxHyXX8F2FeXAS8zf2cF9edo5bBiN%2BDFM18SXTl9k7wdtBL6JCz9WuKfpPxyGR05gywYcnkBTuGot9OTsiZm0itdnmt%2FLVJw4umzEpA1pU0UlGAdTZzjua&X-Amz-Signature=da38b3df763029800c01e4e50b74da88098acb7c02d1ea538c7fd1c6d934d09b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI4FXMQJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDflLr78P4TPEASQbOdIKHpdsuXwKvDQClwB0tlSumWHgIgerYiWsgqflWgFtngD4Tiv2PlKb8UvDKsUDIMHTQJXOMq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDBeD%2BRaAOQDbTLNHISrcA3MfX7JUoGvXbx7fXOoO%2FGtyyixXLrkzss7aMULaaOlRb1iC5bI2gWlQMVFNfPPN%2FR8j6yE2uwPhW1k5pSQeJZ%2B8lpENb%2B6eo7DSoEfTL3qn4vzUDcyqhPYSEaRHzrBIloTqz%2FfRUgAa%2Bdh%2Fp%2BIgcQDXHflepIft9ss6WHxwwFojxCYWeS%2BFr6UbvvSYUzcY4NQpiYRfBcJ5Qnu5w8ldGpVo4uNYktto5ZshsclTgcbTE%2FQZ0SeNe2VE9VvgiQdAcztooYgwI6yyUuuK49A8hKvMGda7om6mFyDUKFkKplFvFh3GlKWVz5i4J45XJcnf5NDbFgA%2FaNCU2hQlpVl1G%2FLHBDty1l1qv2dfTBxz6s89%2B51r9LoqniLQnxTRaZhGjPHkXP8PeDXixLlQzWIkaguFUXtmOr7kyekHPpUy6D5%2FviHd3%2F32SHX5JzCuzD6brTHZ1z8tYOmmOKTlFn85tHP5Yswx3mZPopP6pXfA3iKlSDAaSJjX07i7nkGGS90M3B7xRuvJyjRxTPyQMc6iWkLxRjZ6Gpz4xVKawycdBt3i1OrPncmsnUuZvXTkQyfMyyLjKKcmhsyp4oAzroDgHsqZA69tgDVPRttdKTmbMrB7VsM0F%2BiWe9D4NDB1MNmeucQGOqUB%2Fy4cYWvP663uZYN9ifYwri8IVvfS%2F6LzsACM7cRcV1tnlDBbE%2BGGJchY6O5J83bqA%2BuK%2FjB7ez13i2fVtnPMUhWjtGTUaxm01HwcOuyFLxIprOH5C2vEQArjUU3k3lyArTu9ZJU%2F5eixmhMvnmvKU86nTH9g86yqg5lYn2OakFI%2FBhy%2F6Z9fSMHP7pT30NYSgYHoWBt3oZptqE8rzbCqoBgnNS9s&X-Amz-Signature=62a48033db3e68e2b60e8b864d30c310635d43c89d34d716342966af9ceb276c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
