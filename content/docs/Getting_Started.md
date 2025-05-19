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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QNOS5SD%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3uYnf%2Bd3OZZuEshxZU0hKwACWgud2H2IVsMeE1jBNlAiEArMW3P5hCg5%2BtUItiZhVo7LozZTf1j4%2BGxFVqRA%2FBymEqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJN03LcrscngpaOn%2BircA%2F6WaqqP9JNMQQSSLwUYiP3b9MXcSKnXKzj8ciz545SDfoesVSZGCxbc2%2FAqNRShFjUuyrdAeU0apSq%2FcwdRD3EQ%2BL8oHQiqYjPg%2FTgjAYEp6taZDUWi6zyRAa760oBHlRNdS2ADIEUlMzucd5QCqLRntqQgtjbya9A1p1dAs%2BouXLDKfhSOnsT6OaLN7lSmRXZB12uBUe43tbA4MDaTul1zrjwJGoYM4VrE5IkojxMMkK%2FZn0oiZNvympZTOaaIft7qlqmIRZCE9DbF1mGe7blWfmBUJtunN9hNeG6d4%2BpSUQ8IFmYwmHqN6ePC85ScXX7vZMjNcZeg%2BbmStsgkLZgSFahLS0MI%2FJ9QG3wlEICGyvEeoIetJNEo3ZDtQCGGZkJt5tkrQEDolgJ%2BIJ481CM5%2BPvO%2FCr9nLoY50auMSHEHuy9GtUEoDdUSeKSL%2FUOydvLcOABXGr7yBLqOHIREZYRw3QV52wbp3VRUN%2FT5aVAZOcKwzLb%2B0o%2ByJJoLt3pW9i2pjLX5fIdXGp1MJqIJlzSlR676tLPiSfQTUDY5Gyj06Suh9r8C5vV9CmS9IGTRM6gMVV%2FeJLa8tkkwAGMjCU%2F%2FAvrgG7s26IULD71WhW%2FGrPUNqXuUPISWVSPMLzIrcEGOqUB5by3eAMw46wYc21imlnWITcgOTVu0BPeBW%2FlJAS6WY22HMT%2BvrWquKQWzBSFZjDt6rk1%2B8f4qvTITppllrq3gdSkGfMPV13SRoVmywpu0hccvxQNbdB%2B7VULqTl%2BDIBM2pB%2BFzB2RHpMEBZGVkTHxh%2BBRr0PViaXhVao6ezTaKUYYuCWCjgB2uP%2FNxliFku%2BrWvZaHmByfVxMr%2FQ3hV%2FxvVtpjGs&X-Amz-Signature=4735a16d771379557c0fb1c37ec81049e205e279ff179afb0a49aba8555dee8a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QNOS5SD%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3uYnf%2Bd3OZZuEshxZU0hKwACWgud2H2IVsMeE1jBNlAiEArMW3P5hCg5%2BtUItiZhVo7LozZTf1j4%2BGxFVqRA%2FBymEqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJN03LcrscngpaOn%2BircA%2F6WaqqP9JNMQQSSLwUYiP3b9MXcSKnXKzj8ciz545SDfoesVSZGCxbc2%2FAqNRShFjUuyrdAeU0apSq%2FcwdRD3EQ%2BL8oHQiqYjPg%2FTgjAYEp6taZDUWi6zyRAa760oBHlRNdS2ADIEUlMzucd5QCqLRntqQgtjbya9A1p1dAs%2BouXLDKfhSOnsT6OaLN7lSmRXZB12uBUe43tbA4MDaTul1zrjwJGoYM4VrE5IkojxMMkK%2FZn0oiZNvympZTOaaIft7qlqmIRZCE9DbF1mGe7blWfmBUJtunN9hNeG6d4%2BpSUQ8IFmYwmHqN6ePC85ScXX7vZMjNcZeg%2BbmStsgkLZgSFahLS0MI%2FJ9QG3wlEICGyvEeoIetJNEo3ZDtQCGGZkJt5tkrQEDolgJ%2BIJ481CM5%2BPvO%2FCr9nLoY50auMSHEHuy9GtUEoDdUSeKSL%2FUOydvLcOABXGr7yBLqOHIREZYRw3QV52wbp3VRUN%2FT5aVAZOcKwzLb%2B0o%2ByJJoLt3pW9i2pjLX5fIdXGp1MJqIJlzSlR676tLPiSfQTUDY5Gyj06Suh9r8C5vV9CmS9IGTRM6gMVV%2FeJLa8tkkwAGMjCU%2F%2FAvrgG7s26IULD71WhW%2FGrPUNqXuUPISWVSPMLzIrcEGOqUB5by3eAMw46wYc21imlnWITcgOTVu0BPeBW%2FlJAS6WY22HMT%2BvrWquKQWzBSFZjDt6rk1%2B8f4qvTITppllrq3gdSkGfMPV13SRoVmywpu0hccvxQNbdB%2B7VULqTl%2BDIBM2pB%2BFzB2RHpMEBZGVkTHxh%2BBRr0PViaXhVao6ezTaKUYYuCWCjgB2uP%2FNxliFku%2BrWvZaHmByfVxMr%2FQ3hV%2FxvVtpjGs&X-Amz-Signature=f83975c4b5cecd83e8db7e98b9e4bd4852e289a327ffdedf03ea62d3a9a53ed1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QNOS5SD%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3uYnf%2Bd3OZZuEshxZU0hKwACWgud2H2IVsMeE1jBNlAiEArMW3P5hCg5%2BtUItiZhVo7LozZTf1j4%2BGxFVqRA%2FBymEqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJN03LcrscngpaOn%2BircA%2F6WaqqP9JNMQQSSLwUYiP3b9MXcSKnXKzj8ciz545SDfoesVSZGCxbc2%2FAqNRShFjUuyrdAeU0apSq%2FcwdRD3EQ%2BL8oHQiqYjPg%2FTgjAYEp6taZDUWi6zyRAa760oBHlRNdS2ADIEUlMzucd5QCqLRntqQgtjbya9A1p1dAs%2BouXLDKfhSOnsT6OaLN7lSmRXZB12uBUe43tbA4MDaTul1zrjwJGoYM4VrE5IkojxMMkK%2FZn0oiZNvympZTOaaIft7qlqmIRZCE9DbF1mGe7blWfmBUJtunN9hNeG6d4%2BpSUQ8IFmYwmHqN6ePC85ScXX7vZMjNcZeg%2BbmStsgkLZgSFahLS0MI%2FJ9QG3wlEICGyvEeoIetJNEo3ZDtQCGGZkJt5tkrQEDolgJ%2BIJ481CM5%2BPvO%2FCr9nLoY50auMSHEHuy9GtUEoDdUSeKSL%2FUOydvLcOABXGr7yBLqOHIREZYRw3QV52wbp3VRUN%2FT5aVAZOcKwzLb%2B0o%2ByJJoLt3pW9i2pjLX5fIdXGp1MJqIJlzSlR676tLPiSfQTUDY5Gyj06Suh9r8C5vV9CmS9IGTRM6gMVV%2FeJLa8tkkwAGMjCU%2F%2FAvrgG7s26IULD71WhW%2FGrPUNqXuUPISWVSPMLzIrcEGOqUB5by3eAMw46wYc21imlnWITcgOTVu0BPeBW%2FlJAS6WY22HMT%2BvrWquKQWzBSFZjDt6rk1%2B8f4qvTITppllrq3gdSkGfMPV13SRoVmywpu0hccvxQNbdB%2B7VULqTl%2BDIBM2pB%2BFzB2RHpMEBZGVkTHxh%2BBRr0PViaXhVao6ezTaKUYYuCWCjgB2uP%2FNxliFku%2BrWvZaHmByfVxMr%2FQ3hV%2FxvVtpjGs&X-Amz-Signature=d25f2dac29e3b6fbe4da22100bd7c19745babd3ffc902ea27340c7f439ccad52&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YHYY2ZW%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB861lZe2SN4sU9xwTABZ6qaiBpX4Vm6LUrx7hMUVwP5AiEAgIIFHQjg1mkDulyEtweKq1ENA%2FfdIGHGktT2Hh%2F0i4IqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdw8fpJdCu4%2FPlQwCrcA8EBq4E%2FVdIyXLJ0pSiFrod7jl5SXnSmQa2DB2p8dff18atUfKwqCXL30ZzzeHPmhh6qvhGlLxMcls1mGSWnFlloy60RqYYxfMTwNjE0U8%2FufXu7rXt%2BVM1qm6JpCNiiboFWW0zYdw0ZTijzw9x9QJTvVw50YPUDmoSZKmNFW%2Bj09IhB0573icP6F1Lru6YwqIf8AYlQ2yu5SRBVHBl1IYUtGYipOZ4vUhLwcH%2FMI%2Bzx8m%2FxDcKiVbFZsivLNOIb5r7qYkAuwfEx9u2mXQ0mX95CbrILoDMW63%2B5BhTX1mQP%2Flc%2BLueKzR3pMQzeHqYrWivbPp%2ByzK1QVsc9%2BnbkDNNOaHITOL3hn1bjuKgLFcQXCr4ANoEUenWhrqGfwEI1IgGkmfz4cyi%2FmOlkw2zTZOSAiJEsFWriO2%2FqoB076lox%2FL1K1VuNQBYk%2FifK%2FhR3YjRpDJDXUMfqJPcnpATKbvvDyPl%2FQ%2FfJ7IKRdqu3nfqfMJyGb82TIYSoafq%2FnST3h6Pyi1GRN4hvZzvALbDaWJv68nvyFv1uYMAEtdGPqks%2F41xpvdyrtQj6yL%2FtFryYN8r6kG2Ysf8x4KfhrdYHAY9EpFiyV11b%2B2ao9OAQ1N%2FQWuNTKZQkffYnx1VaMOzIrcEGOqUBYDgbSkllmtmQTwReSqa7t%2F1W86vFdSOH7ZTu26qZHk9MsYeIzJAR1wTpySf0Z62Th%2FOAwdZ4c4aIYIqsBCVxkA3uUKj4rTGC9Dicb0nzGrtH1Czlw7sT%2BHu6G%2F5sBfkj%2BrMsyZ6%2FTHtyANzIgYubFOV5K%2F0cqyjSza%2FMp5%2FyJp4r4C11F7mH7upW%2Bli7NFEC7Lo8nWUOUYW7xoMReRLnrFtqPQm%2F&X-Amz-Signature=60d4a7ac89a7a268412022dd9616083d48dcbfb2f2fb30851afca845557fbe1c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U5YAIKN%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCSwUkUD%2B6CWoSk0HM2BQVwfJoz54rszXLeJBQfaaiIAiBr4bnZ10yv4O%2Fqi4X%2BXUp6isKBVUJvT5u%2BU31FpwTWDiqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9kAtlbFz7M0MdRbgKtwDcHQHLkYblAtNiEYfgTtLmNAqVmZ%2BrYntde6ivjeznsIuR%2F%2BUoxGd6Nq7%2FGIipEc%2FCDnBn39lwLN5XxV3CyTG4CC1KyLLPBMcxMODlVdiuOreCJ2d9hD1OLz8VwcNQrEVuVVxpTGs51EQAbbNYcVb5CkbOSJnQSdoeq9RlIf8kz1JaIqJpf%2F3JdUmtUgDeut0L%2FVYzx8BvfIFcy4wzeu2e9dM5ffTae4ubHmxo9lkzhvlJNlLTDgWt5w24XG6FVR8L9nEj8PCX3XwJRP2wCpoUnTciSR15KJLGmglBOb%2FsuSxQrFvkebylXWgBvj7LxdhzHfv7fYmJIBx5WNJvBg%2BaeR94VqoMcQTbAWSpxNjQwS5uJtChYbXExIVFLfrJr9DUnV%2B7gIQc%2BE%2BnPtguWg%2Fy%2BN1M1In5xFcazlOUt%2BZ9j599VCWjC8I6ZWhbKbDZ9ILnRnh5PU9C9ehZBpKAPzmmrDc%2B%2FJuKEJsBj%2BYRu7XLa%2FoZn18TxBssdC0VRf41fzG3%2F6Mue5SHGVt%2BxAZiVBBX7lAJmucBL9W6evug5g4C7Ji3BMAXMqq20UugIookgTgLI4rSgOdBha1rGQDhw68Fe1bOVd0mYaMI7DBw%2F1RlZvt72NjARbu2ES%2Fj0Ew%2FMitwQY6pgEb5nZQXiizhAPFKmkFg1y%2FIgpYoveEHZM8U7GIPPQimrhRE4BZwBFmPflb5dFG361%2BqjnASH4rXqFXxFdgc01AzdZ8svttgRu2wslflUapAr7gV%2F59vqf2moTbVtYn1faTnRATE4r05oyvfmWCyAZIHDKq7AlahdBDnIJKNTeMNabO4QJGPSJAOrEl7JXdiHlMNFyYW60ikHiUff0F%2BafjWYZbh0w%2B&X-Amz-Signature=80be14648bc0448a26b77df700f11928db49ddd1af55ee44db1d3e905a8a378b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QNOS5SD%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3uYnf%2Bd3OZZuEshxZU0hKwACWgud2H2IVsMeE1jBNlAiEArMW3P5hCg5%2BtUItiZhVo7LozZTf1j4%2BGxFVqRA%2FBymEqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJN03LcrscngpaOn%2BircA%2F6WaqqP9JNMQQSSLwUYiP3b9MXcSKnXKzj8ciz545SDfoesVSZGCxbc2%2FAqNRShFjUuyrdAeU0apSq%2FcwdRD3EQ%2BL8oHQiqYjPg%2FTgjAYEp6taZDUWi6zyRAa760oBHlRNdS2ADIEUlMzucd5QCqLRntqQgtjbya9A1p1dAs%2BouXLDKfhSOnsT6OaLN7lSmRXZB12uBUe43tbA4MDaTul1zrjwJGoYM4VrE5IkojxMMkK%2FZn0oiZNvympZTOaaIft7qlqmIRZCE9DbF1mGe7blWfmBUJtunN9hNeG6d4%2BpSUQ8IFmYwmHqN6ePC85ScXX7vZMjNcZeg%2BbmStsgkLZgSFahLS0MI%2FJ9QG3wlEICGyvEeoIetJNEo3ZDtQCGGZkJt5tkrQEDolgJ%2BIJ481CM5%2BPvO%2FCr9nLoY50auMSHEHuy9GtUEoDdUSeKSL%2FUOydvLcOABXGr7yBLqOHIREZYRw3QV52wbp3VRUN%2FT5aVAZOcKwzLb%2B0o%2ByJJoLt3pW9i2pjLX5fIdXGp1MJqIJlzSlR676tLPiSfQTUDY5Gyj06Suh9r8C5vV9CmS9IGTRM6gMVV%2FeJLa8tkkwAGMjCU%2F%2FAvrgG7s26IULD71WhW%2FGrPUNqXuUPISWVSPMLzIrcEGOqUB5by3eAMw46wYc21imlnWITcgOTVu0BPeBW%2FlJAS6WY22HMT%2BvrWquKQWzBSFZjDt6rk1%2B8f4qvTITppllrq3gdSkGfMPV13SRoVmywpu0hccvxQNbdB%2B7VULqTl%2BDIBM2pB%2BFzB2RHpMEBZGVkTHxh%2BBRr0PViaXhVao6ezTaKUYYuCWCjgB2uP%2FNxliFku%2BrWvZaHmByfVxMr%2FQ3hV%2FxvVtpjGs&X-Amz-Signature=cbd432cee86fed6ce12435774e93af41970f92dc7d14cd3486c1abdb8531a6b1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
