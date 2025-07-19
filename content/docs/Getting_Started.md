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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPC3PRI2%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T004359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHjbaHYN56kvX4Bny5o4F37Ph%2F7gE%2FeWMT0AcTwpYhuAiAR8mhTxcVY1LMYAR9%2Bo9AZsDlqzEQ11LtBUphQfY5jCiqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmDN1ma6Vjd0iXO2oKtwDegPD0zuuHIzcbhNmmb3Ux9cisPjWLd4%2Fd%2BYUCUfZv37cm%2B45YCMCTFvBKDoEosbZw38cO1uskJcQZceqVvkskTeRGUlA4t4ae%2BOeiY4Ti2J3sftxYAbu%2Bn7xnLWyXY6Vvjj53Cnww6nIrQuSk%2BF7ZWEFTC%2BspwQHTKlpzNrBNNeFlqQMJNxWQrwI6sLfjLS0JrgDgK931KzlWMEH52GfRvEQ945VPqmoM%2BhbRJE7d0r2esIdzx6R5kJjMk0A9SeMnxp1q3c9laTsYws8SvazIacCzwerrAnG6790ctojsd7nyB6Oz3IM8nOV%2BBxh5O87SqRAOec3nR94h2Kgj%2B3r%2FZtsRjSgIcZlAn8At817HDW09P97TxxXWBgbAQ2KrcR4j98QFu%2FLScK9Io0%2FrELypf8xITU2opny1%2FZ%2BX9xWzoEA8EDzucZ0eL9vi3Tv1VGp2tA%2BkEG3wuG5U9Nd5pN3Z7xS2ooH53slUNwDqd9zX0qWhh65PUg6vOiyq1q7pfyyKVu42UuK89vcY%2BWRcoUM8FjXs1G%2Fj%2FY%2BKvKXfWNu5dXjzryNinL2iC%2Feqkvcj2INvgQpBONUayVvUxL8evC3yJPKIDm2b1RvrlMhb0ud%2BqckTK268jp8ltUtWjAw16%2FrwwY6pgGtfjtkfBawtJD1k2i49N1rvtPisCJlR9wM3xdMXVk2iEq7%2BPYHXY4GTy7tCPW%2FAtdhrnGn4AQFtr6C9KBBZIUYDDlLEDzr9CULPjPX9Q9duubgvYXntANbe8gaSAJZ9TcpXTfFdxKZc7WuhLUZbjgvLi1pLLp1h6l1%2BU6UxpATw3zvc2gY4mPUUuZ8WjgtQwogIij4nVJP7S2K2X9cZ1h0K8N07Ztv&X-Amz-Signature=c1da6b1eb3e14a509c6578840325c15d7d9ee6c698e04f12566528ce007afd38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPC3PRI2%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T004359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHjbaHYN56kvX4Bny5o4F37Ph%2F7gE%2FeWMT0AcTwpYhuAiAR8mhTxcVY1LMYAR9%2Bo9AZsDlqzEQ11LtBUphQfY5jCiqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmDN1ma6Vjd0iXO2oKtwDegPD0zuuHIzcbhNmmb3Ux9cisPjWLd4%2Fd%2BYUCUfZv37cm%2B45YCMCTFvBKDoEosbZw38cO1uskJcQZceqVvkskTeRGUlA4t4ae%2BOeiY4Ti2J3sftxYAbu%2Bn7xnLWyXY6Vvjj53Cnww6nIrQuSk%2BF7ZWEFTC%2BspwQHTKlpzNrBNNeFlqQMJNxWQrwI6sLfjLS0JrgDgK931KzlWMEH52GfRvEQ945VPqmoM%2BhbRJE7d0r2esIdzx6R5kJjMk0A9SeMnxp1q3c9laTsYws8SvazIacCzwerrAnG6790ctojsd7nyB6Oz3IM8nOV%2BBxh5O87SqRAOec3nR94h2Kgj%2B3r%2FZtsRjSgIcZlAn8At817HDW09P97TxxXWBgbAQ2KrcR4j98QFu%2FLScK9Io0%2FrELypf8xITU2opny1%2FZ%2BX9xWzoEA8EDzucZ0eL9vi3Tv1VGp2tA%2BkEG3wuG5U9Nd5pN3Z7xS2ooH53slUNwDqd9zX0qWhh65PUg6vOiyq1q7pfyyKVu42UuK89vcY%2BWRcoUM8FjXs1G%2Fj%2FY%2BKvKXfWNu5dXjzryNinL2iC%2Feqkvcj2INvgQpBONUayVvUxL8evC3yJPKIDm2b1RvrlMhb0ud%2BqckTK268jp8ltUtWjAw16%2FrwwY6pgGtfjtkfBawtJD1k2i49N1rvtPisCJlR9wM3xdMXVk2iEq7%2BPYHXY4GTy7tCPW%2FAtdhrnGn4AQFtr6C9KBBZIUYDDlLEDzr9CULPjPX9Q9duubgvYXntANbe8gaSAJZ9TcpXTfFdxKZc7WuhLUZbjgvLi1pLLp1h6l1%2BU6UxpATw3zvc2gY4mPUUuZ8WjgtQwogIij4nVJP7S2K2X9cZ1h0K8N07Ztv&X-Amz-Signature=933ec901a421e451443a249ff0f6434f25f6f1cba19617fe763547f1892b94d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPC3PRI2%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T004359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHjbaHYN56kvX4Bny5o4F37Ph%2F7gE%2FeWMT0AcTwpYhuAiAR8mhTxcVY1LMYAR9%2Bo9AZsDlqzEQ11LtBUphQfY5jCiqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmDN1ma6Vjd0iXO2oKtwDegPD0zuuHIzcbhNmmb3Ux9cisPjWLd4%2Fd%2BYUCUfZv37cm%2B45YCMCTFvBKDoEosbZw38cO1uskJcQZceqVvkskTeRGUlA4t4ae%2BOeiY4Ti2J3sftxYAbu%2Bn7xnLWyXY6Vvjj53Cnww6nIrQuSk%2BF7ZWEFTC%2BspwQHTKlpzNrBNNeFlqQMJNxWQrwI6sLfjLS0JrgDgK931KzlWMEH52GfRvEQ945VPqmoM%2BhbRJE7d0r2esIdzx6R5kJjMk0A9SeMnxp1q3c9laTsYws8SvazIacCzwerrAnG6790ctojsd7nyB6Oz3IM8nOV%2BBxh5O87SqRAOec3nR94h2Kgj%2B3r%2FZtsRjSgIcZlAn8At817HDW09P97TxxXWBgbAQ2KrcR4j98QFu%2FLScK9Io0%2FrELypf8xITU2opny1%2FZ%2BX9xWzoEA8EDzucZ0eL9vi3Tv1VGp2tA%2BkEG3wuG5U9Nd5pN3Z7xS2ooH53slUNwDqd9zX0qWhh65PUg6vOiyq1q7pfyyKVu42UuK89vcY%2BWRcoUM8FjXs1G%2Fj%2FY%2BKvKXfWNu5dXjzryNinL2iC%2Feqkvcj2INvgQpBONUayVvUxL8evC3yJPKIDm2b1RvrlMhb0ud%2BqckTK268jp8ltUtWjAw16%2FrwwY6pgGtfjtkfBawtJD1k2i49N1rvtPisCJlR9wM3xdMXVk2iEq7%2BPYHXY4GTy7tCPW%2FAtdhrnGn4AQFtr6C9KBBZIUYDDlLEDzr9CULPjPX9Q9duubgvYXntANbe8gaSAJZ9TcpXTfFdxKZc7WuhLUZbjgvLi1pLLp1h6l1%2BU6UxpATw3zvc2gY4mPUUuZ8WjgtQwogIij4nVJP7S2K2X9cZ1h0K8N07Ztv&X-Amz-Signature=bf757823bc6b73b288d14f3fc9cc3931781740af180ee0adb545d245636bf51c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDY3WGUU%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T004401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHz5XjL9%2F9fSWK%2B7SRmXUHgOMcgaMpPUhkD%2Fkq07bid%2BAiEA0T1j%2By4ui64I9TB04uMaQNowYrKMZde3TxwK4aKSMzoqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIwkwpbmxtVlaCWYtircA43k5XgtSi%2Bef2w0%2FCfAuyIkjZQlnZm58RnGBdJcHRtYSttAr06QhWqtEbEyiNMUUI0CC%2B46Ua1XxZMNGqjlzzGTpw9mUD7FF5AGEbxZSfLkoKnSKcei%2BKEPFK8o42zCHo%2FwlKQ65N%2BHCgSD3O32wgRHhthx7csT1yYmQ3QbblNGQtR0tiVaoqbR1bT6VdKQCOoP7Y6RWZ5OE%2BzFdNpW%2FW7cpo4qfdoD4wT2uUYR3KdLdHwGLxzBtWmtrOvwxuqXNq1Fm1zWyXf5Z2owUvZnUGzfPhr1XyY%2F6CnIAEWOnkp%2Bimu7CMM8jflTSl5ONsBzbHXhwJEFIAzJ2SsdG4ufjPPeptvM0oHkVSlw3g9P1174mzaNf%2Fjh7vENE0vYT0Jtly6Vnar4pzvfSLe85lU0We95%2FcdJjGgoVrxnLtfbbXM0JqcNPT0Z4HKrp0b5lRjfD1APAiZFegAllRbdddyvz79xyvwSwnx8tswXkpwsRBRd%2FEQ7uYgDQdQUzoJ4hI%2FN21TaiPL%2BmNmt9FLew8SAUbiT9KruHoY%2FBHOnZFCC3akMCGz1Et8LipmrjlvZ18z62Y2n1BouBO1UegzK6rQ4aKZ8D4Zy5fTbxckOsMrHDZXqguXripBZVKGl5W5XMOKv68MGOqUBHMlkF3Ni2V6Lm3Rdsefy1MlcAvkJ0Vgm9u0H%2FR2kMjIHroShHEZkjvKmjl8%2FLhepmCMh8IFOe6E0HFBDtNytpoDuG78Ja1h0qNwQai5mbwdid3iXAY0IVPGUqcaXP80GvV3eY%2Fkw1rj1S4D4eG4pPZOm30amh%2BM3s1R%2BTdtY0%2FWrvSaO43FuEpP4GwhwQQFJ74z8fnnfU9v5vkKfyGXB%2BsB0ODM2&X-Amz-Signature=c006c6f0631867aaf4bdc4df6abde336fba254a671736f31d41e5210af7972b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IE2WB6M%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T004401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCb8ZaIXLyQmYXYF44JmyYqPORxLVabQHh8ED2gAbOuaQIhAOTj9wWJlY%2F%2Fyf%2BhiJBagfaKoO3qvnftnPB830Bv9Q5pKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgIeWGyoa7ab8i7N4q3ANnF9cjQiBE236yulclotIh8ey8JmD0OeKJClGqZ93XCUVixU4R7fz8zyL%2BALmNeWk9kh4mWN2JaQ9eSwtHMMo%2FrLGMSU%2BtcVj9%2BKRyUg59NTvg1WrLAvqa9oUVhuEB8Mui%2F1lVE5DlgoypqgZ39veg3WJmkz9jErw8rZuveozNU0N3CUPoJJm0TdX17LolI70Zy2%2Bgm8DbcjmnV51sGh2MsEnAbVzS2toeayaqfcYdWvnx5FL%2BBE8oecDolaHxtEcwDzsAI7N2RiGhtIRVuwxDIYPmtGRzB3jsIHSb3g%2Fy53pXScIYMw0MbDeSJZb8wQmGJCc7FkC%2FJaJhDp%2BuAXwWUvYj5Rt%2Fz8GBbnN0hZ59dtcyAHBs9tWcuAelRSAQzHO2ukYqJxeUYaBrCK9XEEM9cHcMFVgaEpypOfIYCFepGXoRlLb3XWlr8qdzku8NRT8xqY2J%2FMCCJ8%2BpSrGpKjnQZ3OwL3ohFbw30pLj66mTZPPcx1d82cOje2D%2FOZzpIJMICXzXu1Z02Moo33IbRVpDnQJNR6%2FGj%2F7L9YxpzEKG95VT%2B1dtXn3vrAz%2FPDR8AglJHs4VnW%2BKbsJj0HviX2z1VjIKJlYzOYjpodsyJAWh1Ll0cNXviAjtnLvdtjDXr%2BvDBjqkAaLYOJIQGcqgRaKp6LQmrGUJO84oItmEv3LCCIFkkldwP7bjz6hVzdNSREyPiLeRgnZ459DtAgdzFXCmta4oIzWmQjuREoJqUZsxtnTcymaLSqCpY%2FQ2nffNbgJ1Oh%2BXAab%2BMWoAc9XkM8xrrLXznYrfM2p6eh1qKml7AsPEMffgqqNCPNK2uCvj9YCdAUsjoqSBJxj2VaWIpCVdRmdMG3tPAck5&X-Amz-Signature=ee7d9ba97694bcb7af294676b46aff6ed5dad74317a63f83a521f3a255c18b79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPC3PRI2%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T004359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHjbaHYN56kvX4Bny5o4F37Ph%2F7gE%2FeWMT0AcTwpYhuAiAR8mhTxcVY1LMYAR9%2Bo9AZsDlqzEQ11LtBUphQfY5jCiqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmDN1ma6Vjd0iXO2oKtwDegPD0zuuHIzcbhNmmb3Ux9cisPjWLd4%2Fd%2BYUCUfZv37cm%2B45YCMCTFvBKDoEosbZw38cO1uskJcQZceqVvkskTeRGUlA4t4ae%2BOeiY4Ti2J3sftxYAbu%2Bn7xnLWyXY6Vvjj53Cnww6nIrQuSk%2BF7ZWEFTC%2BspwQHTKlpzNrBNNeFlqQMJNxWQrwI6sLfjLS0JrgDgK931KzlWMEH52GfRvEQ945VPqmoM%2BhbRJE7d0r2esIdzx6R5kJjMk0A9SeMnxp1q3c9laTsYws8SvazIacCzwerrAnG6790ctojsd7nyB6Oz3IM8nOV%2BBxh5O87SqRAOec3nR94h2Kgj%2B3r%2FZtsRjSgIcZlAn8At817HDW09P97TxxXWBgbAQ2KrcR4j98QFu%2FLScK9Io0%2FrELypf8xITU2opny1%2FZ%2BX9xWzoEA8EDzucZ0eL9vi3Tv1VGp2tA%2BkEG3wuG5U9Nd5pN3Z7xS2ooH53slUNwDqd9zX0qWhh65PUg6vOiyq1q7pfyyKVu42UuK89vcY%2BWRcoUM8FjXs1G%2Fj%2FY%2BKvKXfWNu5dXjzryNinL2iC%2Feqkvcj2INvgQpBONUayVvUxL8evC3yJPKIDm2b1RvrlMhb0ud%2BqckTK268jp8ltUtWjAw16%2FrwwY6pgGtfjtkfBawtJD1k2i49N1rvtPisCJlR9wM3xdMXVk2iEq7%2BPYHXY4GTy7tCPW%2FAtdhrnGn4AQFtr6C9KBBZIUYDDlLEDzr9CULPjPX9Q9duubgvYXntANbe8gaSAJZ9TcpXTfFdxKZc7WuhLUZbjgvLi1pLLp1h6l1%2BU6UxpATw3zvc2gY4mPUUuZ8WjgtQwogIij4nVJP7S2K2X9cZ1h0K8N07Ztv&X-Amz-Signature=fd598a229a56f98c92ac052ddd3779914ca4abe70e085ec0e21ba17929ecf47a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
