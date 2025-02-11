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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXPSGK2M%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T081032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICTZ1bwDy9ZceTKRYd68RHnAxWJI6wCc27m%2BM5boQdRsAiARG0VF5rgrBaZhBOmTZTS8aoaQIbfn7bFg7vbBOReRmyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv512ESZk8%2FI3ovTzKtwD9w8Vjmd0d%2Bslc0tOaQtwdD%2BPum7VFcmmkCfu3OziDEw0CNEtrov0JQjnD7xdfLny5MBczIxg854PTTvwidmgXIiugQVDQBFDElB2ogbsigk9KwpRza%2FATSTKYDOzwhbkWMVp8ndO%2BoVdv%2Bdocx8l1ylDgorntxlOuPsvI0jMQzIlPz9uMHbS1tXU44ckXXlAdbMrz3aq3uf6ewcQizP8C%2B6j78TSQxeHJqlj6Gc%2FntfjyJgfwAHad85W0KEoOvH3SHt%2B%2FHVfRNIE9YK9MxC1hKRVxj8RncZfbg%2BXHE4TNRGDfcdmLXI0wpEXiztY41xvcnJISf69O%2Bie03AjiVmNIfCcUyVL9DKHP1pcymh%2B%2FELRfsIXA1nDNQanzFjzLSEbTKehdw4qtU%2Ff08u4MZ7fAOc4UZcOx3ohIu27%2BbNyLV9X%2BlvbR5lePdMEfeD2mBkKx8DdEUrI42bTLqUZ9dj967355O5A43AkSVhSZp%2FkeVleZu8uoiNL5feuRgbM6qSQG1%2B8GWlT5J67mgJ7by5mhNpTjzvVmyQ7SpFvmbWv3%2FOqbwHrBmLlyxqo7I3qVay4z9r5mgI7osYSvGFYJoGVrOLAwXeE1PEq5iYslieQsex39D3svqj5%2F67a7B4w2ICsvQY6pgFtU95J6BRPPt4YS8YFNEm%2BN0buIxMvBLGZRI0QlIrZr1de0i11TAW3C5Zu%2FwCgTFXc311Dw0r2ITWuqKF9WvhUaXbRJ6ZVdOjdJP7l%2Bcruzs%2BNA83tkiawF2hAtktTWGt6Tvxk2Rs9tuMBhPdaPJ3wpDKDmZIkUgDxgInaGlVYY6GDl5sb88BAf0%2BsZwvj2q23rldldtK0eMJTOdEG7%2FYn7Xg5B4aU&X-Amz-Signature=a5894da01ae9089b4a607b20e7854358aee79fe05d2a58ce52e46078968860c4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXPSGK2M%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T081032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICTZ1bwDy9ZceTKRYd68RHnAxWJI6wCc27m%2BM5boQdRsAiARG0VF5rgrBaZhBOmTZTS8aoaQIbfn7bFg7vbBOReRmyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv512ESZk8%2FI3ovTzKtwD9w8Vjmd0d%2Bslc0tOaQtwdD%2BPum7VFcmmkCfu3OziDEw0CNEtrov0JQjnD7xdfLny5MBczIxg854PTTvwidmgXIiugQVDQBFDElB2ogbsigk9KwpRza%2FATSTKYDOzwhbkWMVp8ndO%2BoVdv%2Bdocx8l1ylDgorntxlOuPsvI0jMQzIlPz9uMHbS1tXU44ckXXlAdbMrz3aq3uf6ewcQizP8C%2B6j78TSQxeHJqlj6Gc%2FntfjyJgfwAHad85W0KEoOvH3SHt%2B%2FHVfRNIE9YK9MxC1hKRVxj8RncZfbg%2BXHE4TNRGDfcdmLXI0wpEXiztY41xvcnJISf69O%2Bie03AjiVmNIfCcUyVL9DKHP1pcymh%2B%2FELRfsIXA1nDNQanzFjzLSEbTKehdw4qtU%2Ff08u4MZ7fAOc4UZcOx3ohIu27%2BbNyLV9X%2BlvbR5lePdMEfeD2mBkKx8DdEUrI42bTLqUZ9dj967355O5A43AkSVhSZp%2FkeVleZu8uoiNL5feuRgbM6qSQG1%2B8GWlT5J67mgJ7by5mhNpTjzvVmyQ7SpFvmbWv3%2FOqbwHrBmLlyxqo7I3qVay4z9r5mgI7osYSvGFYJoGVrOLAwXeE1PEq5iYslieQsex39D3svqj5%2F67a7B4w2ICsvQY6pgFtU95J6BRPPt4YS8YFNEm%2BN0buIxMvBLGZRI0QlIrZr1de0i11TAW3C5Zu%2FwCgTFXc311Dw0r2ITWuqKF9WvhUaXbRJ6ZVdOjdJP7l%2Bcruzs%2BNA83tkiawF2hAtktTWGt6Tvxk2Rs9tuMBhPdaPJ3wpDKDmZIkUgDxgInaGlVYY6GDl5sb88BAf0%2BsZwvj2q23rldldtK0eMJTOdEG7%2FYn7Xg5B4aU&X-Amz-Signature=ba2721fe963416d7f27f7bd021ffd385c719d13f343a26d47c478028b2ed6652&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFPKFGZM%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T081034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBcvrqj%2F5VFImeurOuwWPaHTYeh0Cgfd%2B5EpEgutfrh2AiAZdYgUC2f%2B3pLGAPiXQPPWFfqzibYX8xgxSbTSnr7ekyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZvW%2BWFUO3AmMnYkOKtwDlUl26L46qa5MjfMBq%2Bn%2Fv21I0UcIqCOPZld%2F45sZA1%2Fjz916gFhRCF21GV4iB2bYcHp4f3yY3nOGMxVz%2FZVW49bbF1K%2Bk1jMM7M6WPVxKci3LyAcagyNgbr02PsftiytMDB4BHLO8dEjxUhOV4oYBYp4vxOqxPLi5bGAHkIPYtlNAbo12QwYajwZ8xTA3rEi0FNjX0nWPuyVSvfACWmayLdoEq%2FfXhX7ll7r83PVtnnUYTBEFuDCXlOqZx6w8bYSwrLUVXD3GpJAUsXNwyu2Rl635NdHDGvy%2BLydBitNvXh2cjuoEZmc4WJBYmTpjzwj17uX%2B%2B4wZhzycwzI3K3SYiRg%2BNxbozDI%2Bkn2BIkfQ8f8bopzUDu80TpHrcrhWumRreloqPbXXMi9A%2B%2FonZ8sDths0TqY9Da64gXtOerBZEYYt%2BzjL1vZuLihfiO6nKUm5yu053XLu0BXT%2Fqtt0v%2BXmNbOipfGQJcE9fMPUTYTp%2BmREN%2FgxAIYlRDfNtKF2poYW4pG4vmTwYEDPclVr68gKDWzx7PYUMRyOEtR93YJSLOsch71dTmLJMaupnzh8aU5mIIH6zvXLldo6dVEI9WWYvvicsp%2BDgG550vVjB6QmbM5Xa76MMLKYey44gwjICsvQY6pgHZMQ8ujjRHU%2BxfpdSQwZSlaZLMn%2FE%2BKlSIYLRvxOaE3mV0FRjDCS387UVOX7P351d%2FsjZBBmQh1veEPCw6eaMHPYyeMcf8YSm1KDpd95HSds9kCWr5bARF4AX6ALF8Dwz%2FpjLXe8udxaCFsjj%2BYUZODiMI%2Fp%2F237i8rgtrtlbp6iyDwdHncuUBNUrPJ8%2F2fp8r%2FpS1vARfqxeygUu2jZUg66qCmw52&X-Amz-Signature=6f456f88505c4c3c63d446dc753c4c8c863a6777340e9996da5a9ad688e8adda&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCQNT6LY%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T081034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCva5OolJrrdZp0%2FReQet61lnpN9Y3YMAPAGgMiDt5kTgIhALCAjJgUlZBIaGK4E3Dy%2FmLbzE5u9X2iTSuKhKRiUlvUKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtUWdOkG8PtEAO1c8q3ANxKiGjX2t%2BWvLzJ6HmCbo09DeizWZgL%2Frt%2FT6x%2BzEmSn%2BQBTo%2B1Fzn4rgEf8fqyCSr0Njp6X3V9oPYSOgL1sQ2E7vEiGKw%2FOttbPz1Fu3fMVwDlXXG%2BvYIWDNUcDx9qzREh5bpfE%2BAGxUrih77YQUDEOnxbqVFdcQf4qD9gYJC%2Boq8oYT6fj%2FpFcf3rv6ks3%2BrdXQCdq7TXWOoYqC%2FkvBrcNyM5vCUm8NdCAUyH3dOGcfIQNj9wVcxBChtLQrMNPrSqi2gMZqNJO%2BOeaVy2MbN1OmoYXy8z0qYdz4KtuMXFEoTobI7UerQxGUQq6UcrHYcARt8Tsyo%2BVMzo5jv4PRu%2B0sTsbUbiVr1lsvuZ3PVdqAhKMRiD%2F5oGF%2BW94oG%2B0CS1oB%2BHW94V6M60qGx4REW7Fj1KwFUfR8a37kYiH%2By5bwGu6jbbfVCkj21FRG6hZ7pFjyg9N2ejabATG5qOl7tWzLOqyzhVl8G8I7kbXU4tfwZubwePZwK5KHRd8RUdpxNzQOgxFZJdjCNxVHWh5%2FDApBrkah3ERpk7eOhDnERqqH%2BigOOLKIPG990e3dWH0gvFyUU8ElPO8ghrbkP4T8WjUNinxjjlwDwCKb%2Bj7kzkEUULdSBChpggPbxKzCbgay9BjqkAU8VOmorkXMI54GbKeIbA%2Bg5R1JFCdOTlhFbRBO%2BtTXkDuABbj7FQI63%2FGXDZCnuPRqv1pRFwDqWLfWwB8yKNRu9Jrh6xj4pxVYgwr7avap%2Bq5I7Myi3elZpWMJ1Z3UxLHgqSWcLG88C8T3NrfslNBIOKAEUASeHqAOGodvE1iIwSrS8%2FiuPiBRtKsUNHt59h6OhiNagCmrf3DvBbCChp9Z90e3%2B&X-Amz-Signature=b1fa6ca35dc579b917277ef2f75029402e22ce30050ba60174623c1a0e20c82a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXPSGK2M%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T081032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICTZ1bwDy9ZceTKRYd68RHnAxWJI6wCc27m%2BM5boQdRsAiARG0VF5rgrBaZhBOmTZTS8aoaQIbfn7bFg7vbBOReRmyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv512ESZk8%2FI3ovTzKtwD9w8Vjmd0d%2Bslc0tOaQtwdD%2BPum7VFcmmkCfu3OziDEw0CNEtrov0JQjnD7xdfLny5MBczIxg854PTTvwidmgXIiugQVDQBFDElB2ogbsigk9KwpRza%2FATSTKYDOzwhbkWMVp8ndO%2BoVdv%2Bdocx8l1ylDgorntxlOuPsvI0jMQzIlPz9uMHbS1tXU44ckXXlAdbMrz3aq3uf6ewcQizP8C%2B6j78TSQxeHJqlj6Gc%2FntfjyJgfwAHad85W0KEoOvH3SHt%2B%2FHVfRNIE9YK9MxC1hKRVxj8RncZfbg%2BXHE4TNRGDfcdmLXI0wpEXiztY41xvcnJISf69O%2Bie03AjiVmNIfCcUyVL9DKHP1pcymh%2B%2FELRfsIXA1nDNQanzFjzLSEbTKehdw4qtU%2Ff08u4MZ7fAOc4UZcOx3ohIu27%2BbNyLV9X%2BlvbR5lePdMEfeD2mBkKx8DdEUrI42bTLqUZ9dj967355O5A43AkSVhSZp%2FkeVleZu8uoiNL5feuRgbM6qSQG1%2B8GWlT5J67mgJ7by5mhNpTjzvVmyQ7SpFvmbWv3%2FOqbwHrBmLlyxqo7I3qVay4z9r5mgI7osYSvGFYJoGVrOLAwXeE1PEq5iYslieQsex39D3svqj5%2F67a7B4w2ICsvQY6pgFtU95J6BRPPt4YS8YFNEm%2BN0buIxMvBLGZRI0QlIrZr1de0i11TAW3C5Zu%2FwCgTFXc311Dw0r2ITWuqKF9WvhUaXbRJ6ZVdOjdJP7l%2Bcruzs%2BNA83tkiawF2hAtktTWGt6Tvxk2Rs9tuMBhPdaPJ3wpDKDmZIkUgDxgInaGlVYY6GDl5sb88BAf0%2BsZwvj2q23rldldtK0eMJTOdEG7%2FYn7Xg5B4aU&X-Amz-Signature=d3fcd21939ab279730dcd3f399a238bb7ebc989921c504be12a83935f18aa161&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
