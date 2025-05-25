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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635LEINJK%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T110151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDfR4e1z9zbIjUR%2FxkL4%2BOInka096VC9zp9r6jwl2T7lgIhAP1zdbxcz3C4pZkLvSnmj1dfe4sSCvqgkEGqR4fqF1fXKv8DCCwQABoMNjM3NDIzMTgzODA1Igzlto2dWC0f%2B6U%2BAJcq3ANQimHi3Q8Bxu0E3y%2B%2FNzX%2BqUvDK8aQh5sDNi1zpnOctQM0CkbzqZnlwEoKkVmCBcG%2FsdJvLlAM034%2F1exQL5Km60IOsjbDZjAo%2BXzW%2Bvlzv6%2Fi8i2ADrDU5wx8jxFWEznmoh9USiat84BOPWignd4HjRuUeZCVm4nW6jwtronU1%2BNXYystOol8th%2B54dgNZpjM8IJP1MgN6ajZQHNG%2F5UqfdmC50DArftt0RsOv4FCdcQxWAQLECWniyNySF8GHdRGlVY4sTLQHzrat71A0EiQN52Cydtdi1YGIsKAU2aNJguIauvqIFq3HyqRBqSNcZXdTtK3tS%2BFkaQAB9043Cizf2NM3YawnAsKsjOMBSupw10ZzFba2OBPW5reV4QdSDVBteXufp%2BgpZpSOkjM5VcrzYg4IOOkl83jUxy3RcpNrPfn2h%2F8J6fr3VrWfAjrKKKEdEBd5VXGY0iEP%2Bw9xFeRKcLJtRQivnJhc%2Bae%2B4FZXnAQnr3zZkY85052lMNOhBzNJkD71pOLyTSffwOUdc6zB0tIc6xTNcZ5OEuoi4w6cPrTUDzRKlVNsEbP9IRRj5LgxJt4K8o8eMvYxDpXs0fb7ERh%2FfYcHwLlVRVfmm9%2BfpXgesPR8S%2BYuprApTC25cvBBjqkAStUlB%2FIKFAmE7hBhsf0j0qdlSX6d0w33buk20K0N90PujojRUr5MDRTVES5emuQkmSLjNddh7KQciOumh%2BWOI9T8dNtKK9Hr%2BgiXC9yApXTl3F1ba44u0s5CyBrZaqWOsN95ybMY6MVBtCMrgzbX65PoowkhClyJgk%2BTLA%2BzCtnqrZaBGcnFW6T01ncfZUK7d9f4zaD7Sgcik4JJ3jJN%2BohDAwE&X-Amz-Signature=48531161f31e983672c22f1a298a04c9709cc85203df306c8cc69dc0dabf1011&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635LEINJK%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T110151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDfR4e1z9zbIjUR%2FxkL4%2BOInka096VC9zp9r6jwl2T7lgIhAP1zdbxcz3C4pZkLvSnmj1dfe4sSCvqgkEGqR4fqF1fXKv8DCCwQABoMNjM3NDIzMTgzODA1Igzlto2dWC0f%2B6U%2BAJcq3ANQimHi3Q8Bxu0E3y%2B%2FNzX%2BqUvDK8aQh5sDNi1zpnOctQM0CkbzqZnlwEoKkVmCBcG%2FsdJvLlAM034%2F1exQL5Km60IOsjbDZjAo%2BXzW%2Bvlzv6%2Fi8i2ADrDU5wx8jxFWEznmoh9USiat84BOPWignd4HjRuUeZCVm4nW6jwtronU1%2BNXYystOol8th%2B54dgNZpjM8IJP1MgN6ajZQHNG%2F5UqfdmC50DArftt0RsOv4FCdcQxWAQLECWniyNySF8GHdRGlVY4sTLQHzrat71A0EiQN52Cydtdi1YGIsKAU2aNJguIauvqIFq3HyqRBqSNcZXdTtK3tS%2BFkaQAB9043Cizf2NM3YawnAsKsjOMBSupw10ZzFba2OBPW5reV4QdSDVBteXufp%2BgpZpSOkjM5VcrzYg4IOOkl83jUxy3RcpNrPfn2h%2F8J6fr3VrWfAjrKKKEdEBd5VXGY0iEP%2Bw9xFeRKcLJtRQivnJhc%2Bae%2B4FZXnAQnr3zZkY85052lMNOhBzNJkD71pOLyTSffwOUdc6zB0tIc6xTNcZ5OEuoi4w6cPrTUDzRKlVNsEbP9IRRj5LgxJt4K8o8eMvYxDpXs0fb7ERh%2FfYcHwLlVRVfmm9%2BfpXgesPR8S%2BYuprApTC25cvBBjqkAStUlB%2FIKFAmE7hBhsf0j0qdlSX6d0w33buk20K0N90PujojRUr5MDRTVES5emuQkmSLjNddh7KQciOumh%2BWOI9T8dNtKK9Hr%2BgiXC9yApXTl3F1ba44u0s5CyBrZaqWOsN95ybMY6MVBtCMrgzbX65PoowkhClyJgk%2BTLA%2BzCtnqrZaBGcnFW6T01ncfZUK7d9f4zaD7Sgcik4JJ3jJN%2BohDAwE&X-Amz-Signature=0857646f6368c7dc9ffa268ba2c7629a72f266b1ab8a1103e09bb81e3576f98f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635LEINJK%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T110151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDfR4e1z9zbIjUR%2FxkL4%2BOInka096VC9zp9r6jwl2T7lgIhAP1zdbxcz3C4pZkLvSnmj1dfe4sSCvqgkEGqR4fqF1fXKv8DCCwQABoMNjM3NDIzMTgzODA1Igzlto2dWC0f%2B6U%2BAJcq3ANQimHi3Q8Bxu0E3y%2B%2FNzX%2BqUvDK8aQh5sDNi1zpnOctQM0CkbzqZnlwEoKkVmCBcG%2FsdJvLlAM034%2F1exQL5Km60IOsjbDZjAo%2BXzW%2Bvlzv6%2Fi8i2ADrDU5wx8jxFWEznmoh9USiat84BOPWignd4HjRuUeZCVm4nW6jwtronU1%2BNXYystOol8th%2B54dgNZpjM8IJP1MgN6ajZQHNG%2F5UqfdmC50DArftt0RsOv4FCdcQxWAQLECWniyNySF8GHdRGlVY4sTLQHzrat71A0EiQN52Cydtdi1YGIsKAU2aNJguIauvqIFq3HyqRBqSNcZXdTtK3tS%2BFkaQAB9043Cizf2NM3YawnAsKsjOMBSupw10ZzFba2OBPW5reV4QdSDVBteXufp%2BgpZpSOkjM5VcrzYg4IOOkl83jUxy3RcpNrPfn2h%2F8J6fr3VrWfAjrKKKEdEBd5VXGY0iEP%2Bw9xFeRKcLJtRQivnJhc%2Bae%2B4FZXnAQnr3zZkY85052lMNOhBzNJkD71pOLyTSffwOUdc6zB0tIc6xTNcZ5OEuoi4w6cPrTUDzRKlVNsEbP9IRRj5LgxJt4K8o8eMvYxDpXs0fb7ERh%2FfYcHwLlVRVfmm9%2BfpXgesPR8S%2BYuprApTC25cvBBjqkAStUlB%2FIKFAmE7hBhsf0j0qdlSX6d0w33buk20K0N90PujojRUr5MDRTVES5emuQkmSLjNddh7KQciOumh%2BWOI9T8dNtKK9Hr%2BgiXC9yApXTl3F1ba44u0s5CyBrZaqWOsN95ybMY6MVBtCMrgzbX65PoowkhClyJgk%2BTLA%2BzCtnqrZaBGcnFW6T01ncfZUK7d9f4zaD7Sgcik4JJ3jJN%2BohDAwE&X-Amz-Signature=a0605f1a138c24adc48404334e40283321c568f209db72403fe315e26cf3860f&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE4LLYLB%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T110156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIEkphHpklgWt%2FKR5Xa%2BtsABUGtQxq4I1nmhGjeUVBqblAiEA7uwc9TESRFAjN%2BEKpIQ%2FbHblQXVDVKDC8VkqRE4OXMgq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDGYUwKsipLSTGcWKwCrcA3NcGx4ynGqeYBsK8%2BnHkB3c6zLa%2F%2BYjKF0bF6j3kl1lJVyVtW%2B9nIl1FOkQzad4pqC7tuwMh0TrXJiPNRAgjxG2jn2%2F%2F5h1LA8Vhzcu8Xa8CYUER4Avc5B5RZGqOLt%2F%2F21DxBp7ZEp0uwg%2FU6djB%2F%2BNEMgU1wtH8A4hFVLBRQGSHYYAmUviNCdKcbw9sL%2FWgd65LoSZRZeP45EhpUOr2NOUbrkwTjdDQyA93sLPce%2BkGhYjsMPYqZjyLuORnN5V7aur17%2BTsDMBgl%2Fd9h6iPD5%2BORIVqKyyhta4bEGZJl67ouQdttMm4f41v09FzQ%2Frscp9zO3ts4XjacOIrixWbFwTcbWHJUq18arKfJKtOnJdmvTuZQYrvqKLULb%2BqvLdrDT6l7puYlzeD%2FAHcvKZ%2FyQUca03pCZbhR3VEPlKlL6a6ywXw9%2Fe6BiLeXRwbBPVfyPMRdf17Iyy5VkVPjHYa0EayG%2B6g4uMazibJH3NvialzUTxhdmcUMtPyX87tzUM6fuDd0bb9ak%2FfMiHL7fT8BvnH6rvinVRTaTcdICoJ1kcO3m0RpIAd8qgyVIQMRQXFwNYMHhydHBC5ScmdnKt%2BapIBYdtW%2B1O3nsDxL42QCdP0l3XhWA6oeLZABniMNSJy8EGOqUBjun6wYUBK3ZoMalkA4UXvijmgwuefBDUto9sIETN1f%2F9uuMfaB1p6%2FHeD%2BEXF0Jk262YJrorXxNy7Q5qv2f5FYFAUDUMV2jHJ2RKdbd9aWTXRJxEPq6Q75ea4LEu9H9WITm0q8LG1m9bkViCcsn7ffley4Rma1loS0mkhZxvnVnRHgLtICh9%2FBoOZ5JZZaOUfsC0%2BpxyUlJ3QwuaTLP27STwpdJB&X-Amz-Signature=90a7527765d462d9b146cd5d4c689c95ae124fe8a5af03bc77f249183da03225&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHLZHZYB%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T110157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIH%2BccKaNUiuYCQrrAuM0a2oUL4QyCusneC%2BzQKVMwJjyAiAPcpMH%2FfCYNDC2Mt%2F1uq%2BtHEHYo%2B%2FjyK6dM91mAyKbfCr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMo1AhExqQB07gza59KtwDGoalAMBojTsYz%2BLJzOOs2T8J1fCc8DLmKOPVdZr38fa%2BgIaFrx0Ia3eL1Tb7iT7iZHu8%2FyOKa26ZUP6Nj92ljLcq%2FurTmeZ4O%2FU2%2FkPvaFDTYs6xt%2FefahZh8mDu%2B7f9%2BvBfNBpBI1XtIJq4k9CgTQS1RlAs%2FflNW3D%2FpZA82888vFo0T3YFz%2BHrbzyz7tOgHSDqvYUXoNd%2FiCP4luTlwl1mcALI%2BmUD%2BzMiOEjnlLtmsw%2FnwJ%2BzWX69RZsNek3oknaW3wl9TjUd3kd1qOBhdr2lQuoou3sWwRMhYSUUDjGJa38WCSF9FJCRvI5KHeVbzRPJNW%2FtliIoEzdTvBq5X6VqWpS6wr2EVQOYTGGLUElHffYJ4fcvAdaFymfqwqrj%2BOTQg%2FO7bfISrDKEbNcSC54fzeS%2BlAE0YKeiIDK06ShRwQZ8yuZyQynDwdcGuYnFPlyn5nHBSNvHVteYrNxgH6ZtCDayIDqVfIHdc%2Fn9SBJP49g1M5wKs6ft9oPY7jlu%2F%2BSZeggh09o1wd8hekvWOZXxb4NhsAXaIDG2fuCygDY30QN%2Bg8GJxx6pb20UqDWHXpOQXktuRh7uCO9GL4uREDVwux0NitIyZ0hI5tWm43Bnzwt9iYCEr0MLDTow8NbLwQY6pgGS96vbRueShOrlp2t7sCDR8CYJvQBe2rG6Dxdz3%2F5k2Tb07apnJUhp9SIO0vINyrbsi6e01aG3MGdZ7FrEwxrvfzhqMquq2EZq81bjFZsQSOAedCqrOmxypYSkDeemdb7A8DbKkEvVAcLq7V%2FW1qZBRumOVdlhxmPmuDIAKRL8sYcB23MW1KLQpupcQR0rYUPxVQRix%2Fik4JQdP4siopeGWxSpEEEM&X-Amz-Signature=dca401366b16ee6f08511a5503948ea537ac7bd0c9d3f15ff142a26efab382cf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635LEINJK%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T110151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDfR4e1z9zbIjUR%2FxkL4%2BOInka096VC9zp9r6jwl2T7lgIhAP1zdbxcz3C4pZkLvSnmj1dfe4sSCvqgkEGqR4fqF1fXKv8DCCwQABoMNjM3NDIzMTgzODA1Igzlto2dWC0f%2B6U%2BAJcq3ANQimHi3Q8Bxu0E3y%2B%2FNzX%2BqUvDK8aQh5sDNi1zpnOctQM0CkbzqZnlwEoKkVmCBcG%2FsdJvLlAM034%2F1exQL5Km60IOsjbDZjAo%2BXzW%2Bvlzv6%2Fi8i2ADrDU5wx8jxFWEznmoh9USiat84BOPWignd4HjRuUeZCVm4nW6jwtronU1%2BNXYystOol8th%2B54dgNZpjM8IJP1MgN6ajZQHNG%2F5UqfdmC50DArftt0RsOv4FCdcQxWAQLECWniyNySF8GHdRGlVY4sTLQHzrat71A0EiQN52Cydtdi1YGIsKAU2aNJguIauvqIFq3HyqRBqSNcZXdTtK3tS%2BFkaQAB9043Cizf2NM3YawnAsKsjOMBSupw10ZzFba2OBPW5reV4QdSDVBteXufp%2BgpZpSOkjM5VcrzYg4IOOkl83jUxy3RcpNrPfn2h%2F8J6fr3VrWfAjrKKKEdEBd5VXGY0iEP%2Bw9xFeRKcLJtRQivnJhc%2Bae%2B4FZXnAQnr3zZkY85052lMNOhBzNJkD71pOLyTSffwOUdc6zB0tIc6xTNcZ5OEuoi4w6cPrTUDzRKlVNsEbP9IRRj5LgxJt4K8o8eMvYxDpXs0fb7ERh%2FfYcHwLlVRVfmm9%2BfpXgesPR8S%2BYuprApTC25cvBBjqkAStUlB%2FIKFAmE7hBhsf0j0qdlSX6d0w33buk20K0N90PujojRUr5MDRTVES5emuQkmSLjNddh7KQciOumh%2BWOI9T8dNtKK9Hr%2BgiXC9yApXTl3F1ba44u0s5CyBrZaqWOsN95ybMY6MVBtCMrgzbX65PoowkhClyJgk%2BTLA%2BzCtnqrZaBGcnFW6T01ncfZUK7d9f4zaD7Sgcik4JJ3jJN%2BohDAwE&X-Amz-Signature=4ff09089fc9b850032019545ba4c0955faa1c5d2e9a2b93f3c755c3982020f0d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
