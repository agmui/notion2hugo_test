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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYF7HKCW%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T190707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDFCHzrpmAia33y%2BLJ8Onx8wRQM%2FQ7djbY1j7aE5g7hogIgOA4VdIrW%2BjZdkmKbFIPyOzmNlmvinvb2xKz1oRDxk0cqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPML2VdQBvUKissLiircA%2Bt1lYgeyCmveMS8tlzyIWRimU1AjC4JyiS9tvultIKnPCrLKnS4r8g6%2BEN7m6vtc1FKqwh4cYZbbQlwhjMoMiZ%2BYbb69qgFvFl65HZBh4b86zPF437PBlnTf2yeMjFmNy8f%2Fq88jwQzIdKj%2F2VOFIhZsJ1U3%2Bdxs4vEq3RddZot74lqCDtVJvwIHixrHzwFqgSONZ4p0ckuArB72XPRi%2F2qS7onsY0xjM%2FDcUg3t%2BR5lyIiPA2k39QyE5%2FzJz1xXPwX7FpIrwR%2BE%2BKFwgUihhvMQp6g79HicmQ4oIAms7Xcw4wK0pHUV62loRlG7J51OS1amjXdlkrPcYflpivIIzzDctEHsGl2JVkBM8WOl5OxJAtc7wuuBx4%2Fukx6rt%2BQFfi0VmQFlm9dvOzWSo6vxmEPO7uY%2BlzCC7S4ukX8SNmlKxHYmJlHWBqhpLph56aRoSr1QkjUREFbfPJpDSUslQgLCI9VESr3JkEOwWqQDqtoVAABWNEx5eM%2FenDB5vPXBYmdLI%2BFQxS%2FkLBV18tfNhEOfU6CLJx%2B2CWkgoZf7VhR84LVyiGap5QM4u9F32X1TemnxYmHINTfnD9gizkGxXrH%2B5oKUXdjwOmYQUxofFwjXhC1NVFso2QGf5JiMOfAuMEGOqUBD0tyVnmB%2F36%2FPWdbAuGFqspZMqjmw1s7VIPKyqCPVcS7FJcYAtStTQd2RUH55vnYOOwC9r%2FtUAGXPzPpkSi8aatIK3zi%2BSj9YC11hUua48SCyEmvKrfUyqJewVdivWqrHJ%2FFqaQDwAKFBvld37KYwKhz2rGR96G9onGfxbZmldHyaR9RvUGm6T6ppx%2BjdcMPca2TxJQGEoMMHB%2BtR4eeRCISrJVK&X-Amz-Signature=ca76693f562571cb18775239175cd69317df0e6b7fa2b008b33373f4389fe4e4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYF7HKCW%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T190707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDFCHzrpmAia33y%2BLJ8Onx8wRQM%2FQ7djbY1j7aE5g7hogIgOA4VdIrW%2BjZdkmKbFIPyOzmNlmvinvb2xKz1oRDxk0cqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPML2VdQBvUKissLiircA%2Bt1lYgeyCmveMS8tlzyIWRimU1AjC4JyiS9tvultIKnPCrLKnS4r8g6%2BEN7m6vtc1FKqwh4cYZbbQlwhjMoMiZ%2BYbb69qgFvFl65HZBh4b86zPF437PBlnTf2yeMjFmNy8f%2Fq88jwQzIdKj%2F2VOFIhZsJ1U3%2Bdxs4vEq3RddZot74lqCDtVJvwIHixrHzwFqgSONZ4p0ckuArB72XPRi%2F2qS7onsY0xjM%2FDcUg3t%2BR5lyIiPA2k39QyE5%2FzJz1xXPwX7FpIrwR%2BE%2BKFwgUihhvMQp6g79HicmQ4oIAms7Xcw4wK0pHUV62loRlG7J51OS1amjXdlkrPcYflpivIIzzDctEHsGl2JVkBM8WOl5OxJAtc7wuuBx4%2Fukx6rt%2BQFfi0VmQFlm9dvOzWSo6vxmEPO7uY%2BlzCC7S4ukX8SNmlKxHYmJlHWBqhpLph56aRoSr1QkjUREFbfPJpDSUslQgLCI9VESr3JkEOwWqQDqtoVAABWNEx5eM%2FenDB5vPXBYmdLI%2BFQxS%2FkLBV18tfNhEOfU6CLJx%2B2CWkgoZf7VhR84LVyiGap5QM4u9F32X1TemnxYmHINTfnD9gizkGxXrH%2B5oKUXdjwOmYQUxofFwjXhC1NVFso2QGf5JiMOfAuMEGOqUBD0tyVnmB%2F36%2FPWdbAuGFqspZMqjmw1s7VIPKyqCPVcS7FJcYAtStTQd2RUH55vnYOOwC9r%2FtUAGXPzPpkSi8aatIK3zi%2BSj9YC11hUua48SCyEmvKrfUyqJewVdivWqrHJ%2FFqaQDwAKFBvld37KYwKhz2rGR96G9onGfxbZmldHyaR9RvUGm6T6ppx%2BjdcMPca2TxJQGEoMMHB%2BtR4eeRCISrJVK&X-Amz-Signature=b74bdeb485c094673dcb5047bf19184e7d1257ba4edbb71229b78e077acda0e2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYF7HKCW%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T190707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDFCHzrpmAia33y%2BLJ8Onx8wRQM%2FQ7djbY1j7aE5g7hogIgOA4VdIrW%2BjZdkmKbFIPyOzmNlmvinvb2xKz1oRDxk0cqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPML2VdQBvUKissLiircA%2Bt1lYgeyCmveMS8tlzyIWRimU1AjC4JyiS9tvultIKnPCrLKnS4r8g6%2BEN7m6vtc1FKqwh4cYZbbQlwhjMoMiZ%2BYbb69qgFvFl65HZBh4b86zPF437PBlnTf2yeMjFmNy8f%2Fq88jwQzIdKj%2F2VOFIhZsJ1U3%2Bdxs4vEq3RddZot74lqCDtVJvwIHixrHzwFqgSONZ4p0ckuArB72XPRi%2F2qS7onsY0xjM%2FDcUg3t%2BR5lyIiPA2k39QyE5%2FzJz1xXPwX7FpIrwR%2BE%2BKFwgUihhvMQp6g79HicmQ4oIAms7Xcw4wK0pHUV62loRlG7J51OS1amjXdlkrPcYflpivIIzzDctEHsGl2JVkBM8WOl5OxJAtc7wuuBx4%2Fukx6rt%2BQFfi0VmQFlm9dvOzWSo6vxmEPO7uY%2BlzCC7S4ukX8SNmlKxHYmJlHWBqhpLph56aRoSr1QkjUREFbfPJpDSUslQgLCI9VESr3JkEOwWqQDqtoVAABWNEx5eM%2FenDB5vPXBYmdLI%2BFQxS%2FkLBV18tfNhEOfU6CLJx%2B2CWkgoZf7VhR84LVyiGap5QM4u9F32X1TemnxYmHINTfnD9gizkGxXrH%2B5oKUXdjwOmYQUxofFwjXhC1NVFso2QGf5JiMOfAuMEGOqUBD0tyVnmB%2F36%2FPWdbAuGFqspZMqjmw1s7VIPKyqCPVcS7FJcYAtStTQd2RUH55vnYOOwC9r%2FtUAGXPzPpkSi8aatIK3zi%2BSj9YC11hUua48SCyEmvKrfUyqJewVdivWqrHJ%2FFqaQDwAKFBvld37KYwKhz2rGR96G9onGfxbZmldHyaR9RvUGm6T6ppx%2BjdcMPca2TxJQGEoMMHB%2BtR4eeRCISrJVK&X-Amz-Signature=a796a1f6c2e27fe918e148c2d7f12664b22f8a49ed357d3a4c98c2e80adb142a&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWD64XTY%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIBfEsaZKaYNCbf%2BmGBHwh%2FWZzzDh%2BaVYveeSo%2BsT%2FaEZAiEAhQrk3exNYo3f6aXpP0iyXPOjcGZxROn%2FoXGvnlskmwcqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCXBwDTRn%2Bdcw3aI3SrcA6c3F8wB4NhLB6cYwvnhqnNHjNFzlATAGhCPTbN0rkqjzCeqLaV3rMXUL2S5wRL%2BtPWnS8%2Fo5fQgJ5RAXZkQtcNMNtCUUq%2Byr4uDDJsmQZ2UPvQpua3SuUfjyVvoAAfrkVFEqGZP6FMAbp%2BoTRmfTazjB2chORFFM%2BEPRLzSUbMqaopzpMgoUCAD%2FD7EnKgiQIuactRXCmsf%2FdJBOS0frB9z%2FiGIw2kRgNqUddVAhyt%2FZ7QRjmnyG%2BeSN%2Bq937U47eBIgL1zkcSckK6LRwpl5TPDNav1O7PegqCY2E95wtE54zX9pw5fdHFn3DjeZPPTMLAJVxdSjC%2F8KaOls8jD%2BvslsgsjGDoT%2B8JDvU83dCu8EyMUyUoj94cKWqWL0vzBsDICNM0Bu5rvtNCH5319wV9GuWagqRxANZaPMbG%2BJ8WM91B9K%2FDooTPMVUxzbLyeyUXsdby4NTE%2BIbPY2Df0qPyeG49RglmxLbs43FpOnOtBrE6nVdHaUt3yziIGEceFoKraUi%2FX%2Bx%2FSwTDhOfd%2FOQY9AG%2F%2FsynD3EAn3S3dPWMlJHOyXx5LOFpgL692TiyMGdSmVHnDI4U523wZCb68rNsL8RJIxcLPUIfo3McfC1%2FFNIEjbqG8jN1nijmfMJzBuMEGOqUBsu2962Sr0FpWqkCcMJea4a65PVKCA7uEDMtV%2Fktxf7oJZe%2BBtIqCEOWppkBvvL%2Fmm2aknIkr%2BH1dY2Td10vf%2Blh%2B1WGU2NApfAK85pZOmJ16WSfVH9KkJ%2FTz0%2BEvWYl%2BzGQBWmEPdYbk5VhDIWJ03KIRl1T%2Bra%2FCGg7CJl%2F3bDhfiK8gOswjfMdDhcbr76DPyAHesVUHU5gSYJrIbPZrrweGFSsJ&X-Amz-Signature=7e3130786f8e21fb98c4e66e93b93720d539985473fb2cc49ff635ffaccd1b7d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KYVS4DG%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDICxsCkcG4ppK9ZBiSRDeKcqtM2%2FigUHh%2BdmHD%2BJTJ5QIhALnCRwiCgvgfnaeYeO4p9d8%2FHbuVZNOvXlZLs%2FIVBtahKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdPZOfUt18uURsyVUq3AO0dAutkhGftujEvQbT6nPhLbhNtYPGcyJDd%2FdKGACHLuG0DArh3LnXewaEmrbUge9HRd5mI6SGOfckm1%2B%2B3ElVLLaw9%2BOUaL2rq0GNsCB0XK6LmXnYX3owrkxeNaX4jbRJ2Nv672uluu%2BeMrVFo50UBuRs9Mbs6byzPYhsPeKiSfoNTjIOifAdVca9sHMe5dH2TbN3Wr8KScN1yLt5BMGkgJ%2F37ZS%2FBorI4dN8lNiScw2Vh2wth%2FwclIDuXx5bpYKUoYLp61e5Rne7d0bYZn7jDh2xs9nLu2bPjl5Bm7GQkdTSqI6XN3VGYl3fq3W8oT%2Bz6YvHdlsWNUjZQbqo8SwHY91WB6oAWNiSVaJ9k580WsmJ6RjXIcmoXDbVMKe2PcfK8mEhfepLtvPp6I%2F%2BfqCr9KBhpzT2r0GKq7XAV5zbpUq7O%2FWm7%2FgQTdUIxeP3sjZwlKZPIKgxBHz8RAsEuMouo31elU5Upv%2FftMWr53t8Xkg1D%2B01tEVv%2BYUxGB3HEPPcgEnbHJNETBy0wL1j5hKEFcN5pQUje3T8NNsZzdxfO%2Bov8EP2nBl0kH7r%2FTJv8CKC4MECjYS1pAzAI3TJ98ABdbTnkV7%2BpEfJ8rKRcHxOThUzbb3sDKcsh1wmNDDCwLjBBjqkAcTxhawMnJj4QDFODL5kdCzbx20AbB98vXS0%2B%2FhI1kkz%2BX%2FT9xxyzjkDC8BXfhOYQpcsCloK9416bXx%2Blo8U8cMCGKS%2BN6uFMa5qass0VuFy29ci7GgPS7lvD2l0efOOOk4h2cLN%2B6eio6MN7XiLFJZASrEBEZpGWH1nOi66h72AiIFP9wcMmVUXwBYPABSpknA4YCD8AdopBfCERMFpl%2FU6YKzO&X-Amz-Signature=952b4569f29358f5bfe416bab1eacb83efb1231c5b076da29fdc1880a8769e46&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYF7HKCW%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T190707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDFCHzrpmAia33y%2BLJ8Onx8wRQM%2FQ7djbY1j7aE5g7hogIgOA4VdIrW%2BjZdkmKbFIPyOzmNlmvinvb2xKz1oRDxk0cqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPML2VdQBvUKissLiircA%2Bt1lYgeyCmveMS8tlzyIWRimU1AjC4JyiS9tvultIKnPCrLKnS4r8g6%2BEN7m6vtc1FKqwh4cYZbbQlwhjMoMiZ%2BYbb69qgFvFl65HZBh4b86zPF437PBlnTf2yeMjFmNy8f%2Fq88jwQzIdKj%2F2VOFIhZsJ1U3%2Bdxs4vEq3RddZot74lqCDtVJvwIHixrHzwFqgSONZ4p0ckuArB72XPRi%2F2qS7onsY0xjM%2FDcUg3t%2BR5lyIiPA2k39QyE5%2FzJz1xXPwX7FpIrwR%2BE%2BKFwgUihhvMQp6g79HicmQ4oIAms7Xcw4wK0pHUV62loRlG7J51OS1amjXdlkrPcYflpivIIzzDctEHsGl2JVkBM8WOl5OxJAtc7wuuBx4%2Fukx6rt%2BQFfi0VmQFlm9dvOzWSo6vxmEPO7uY%2BlzCC7S4ukX8SNmlKxHYmJlHWBqhpLph56aRoSr1QkjUREFbfPJpDSUslQgLCI9VESr3JkEOwWqQDqtoVAABWNEx5eM%2FenDB5vPXBYmdLI%2BFQxS%2FkLBV18tfNhEOfU6CLJx%2B2CWkgoZf7VhR84LVyiGap5QM4u9F32X1TemnxYmHINTfnD9gizkGxXrH%2B5oKUXdjwOmYQUxofFwjXhC1NVFso2QGf5JiMOfAuMEGOqUBD0tyVnmB%2F36%2FPWdbAuGFqspZMqjmw1s7VIPKyqCPVcS7FJcYAtStTQd2RUH55vnYOOwC9r%2FtUAGXPzPpkSi8aatIK3zi%2BSj9YC11hUua48SCyEmvKrfUyqJewVdivWqrHJ%2FFqaQDwAKFBvld37KYwKhz2rGR96G9onGfxbZmldHyaR9RvUGm6T6ppx%2BjdcMPca2TxJQGEoMMHB%2BtR4eeRCISrJVK&X-Amz-Signature=eada4e5d6f3a4b165749f49c241c91bcda3da7cbee9522739c24f4b1787200a5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
