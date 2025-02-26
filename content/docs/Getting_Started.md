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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFMVAUK2%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T090837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQD9RADMgoR2%2BpWI5jefMD3gwQ%2FgXchXVzu2spOUkoxlmQIgDT9KAs6omfza7fDs3PMzgOIDpVNCt57qCpvbk%2FUt5U0q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDG3KwX4Q%2FM6oijtY%2FyrcA%2BfZgZ2%2FenUlGYLZg11e7LaP0z5kBJrxe2W9k%2BPyl6gjw5bUJyRflXevKp%2BfjBBACSCmDaeSqcW17BNwuK13u%2BHGU2GEwI8%2BNPhVdYcDnyCkeKXzW9QhQRVlewSyp520NGJSde8tPD3Xhbk6%2BlcosRPVyvm%2FQPy5l3uW4bCe08feLuBsznHtOif2sBch4z04a%2BxanPC2s9D1kDSANgzFlLRNED5cn7VDlQH%2FmUbjCR1nT5wtnGJtyRVhCliRZ12L0u%2FbYHscrQW%2B8BA2KMfey87mMz7DWIj3o3xVibkARUwp6YiahoTnHA1t4uN0amLtTL963CYoPHhXOgO8HyXrjM%2BHE%2F7AWnGXpD8T8xtQfN1NwrEImf7VF6NDev2dIExSc7x4v9jo16O%2BGg0o3l0xLvU1322b1yMF208GnZeQNfIYd64emUWXBMYCgYT8mzm7pueQEjw9P3QJqArCsaAaCry0aO6q748S8unQnHbg28qp4QMFlCkofwOzzvrLxA8zKuhIEsQkjfgTxr1vhd68coSPbjN%2FgaOa9iKycVIMEGzJQ%2BlHUo90hwhhsc4a%2BFA4A5%2Fz%2Bq%2BJThwvzpmea77UiBhPWPjvhOXae1f9cJiYM2GZqQR46Ng%2BjhREp9BLMMj%2F%2Br0GOqUBNVaOahgWUomrtezoBdAxtAXRnYMG7dFpP4MCzvXVHicjH0vDViFQXXwczxvwFWPZkTFAWYXb4ZZIFTDRnBNQ7DFhbONU69AThTZR8SILZu8jhyjuS4QlHts%2Bi8GnQ%2B7bZTgpns61pGWN0kx9KLjzNh1GZ1evZKOLpfc23gQ6AoSMq5GwoxhWBp2mCNm1Yyb%2Bh8TP3rm9FiCFvRqu9W4gH%2F414FKY&X-Amz-Signature=73aae8077c32f23c1b36bf3957ed03c79645a8aabffb98957b6c07c0c46ddf78&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFMVAUK2%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T090837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQD9RADMgoR2%2BpWI5jefMD3gwQ%2FgXchXVzu2spOUkoxlmQIgDT9KAs6omfza7fDs3PMzgOIDpVNCt57qCpvbk%2FUt5U0q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDG3KwX4Q%2FM6oijtY%2FyrcA%2BfZgZ2%2FenUlGYLZg11e7LaP0z5kBJrxe2W9k%2BPyl6gjw5bUJyRflXevKp%2BfjBBACSCmDaeSqcW17BNwuK13u%2BHGU2GEwI8%2BNPhVdYcDnyCkeKXzW9QhQRVlewSyp520NGJSde8tPD3Xhbk6%2BlcosRPVyvm%2FQPy5l3uW4bCe08feLuBsznHtOif2sBch4z04a%2BxanPC2s9D1kDSANgzFlLRNED5cn7VDlQH%2FmUbjCR1nT5wtnGJtyRVhCliRZ12L0u%2FbYHscrQW%2B8BA2KMfey87mMz7DWIj3o3xVibkARUwp6YiahoTnHA1t4uN0amLtTL963CYoPHhXOgO8HyXrjM%2BHE%2F7AWnGXpD8T8xtQfN1NwrEImf7VF6NDev2dIExSc7x4v9jo16O%2BGg0o3l0xLvU1322b1yMF208GnZeQNfIYd64emUWXBMYCgYT8mzm7pueQEjw9P3QJqArCsaAaCry0aO6q748S8unQnHbg28qp4QMFlCkofwOzzvrLxA8zKuhIEsQkjfgTxr1vhd68coSPbjN%2FgaOa9iKycVIMEGzJQ%2BlHUo90hwhhsc4a%2BFA4A5%2Fz%2Bq%2BJThwvzpmea77UiBhPWPjvhOXae1f9cJiYM2GZqQR46Ng%2BjhREp9BLMMj%2F%2Br0GOqUBNVaOahgWUomrtezoBdAxtAXRnYMG7dFpP4MCzvXVHicjH0vDViFQXXwczxvwFWPZkTFAWYXb4ZZIFTDRnBNQ7DFhbONU69AThTZR8SILZu8jhyjuS4QlHts%2Bi8GnQ%2B7bZTgpns61pGWN0kx9KLjzNh1GZ1evZKOLpfc23gQ6AoSMq5GwoxhWBp2mCNm1Yyb%2Bh8TP3rm9FiCFvRqu9W4gH%2F414FKY&X-Amz-Signature=707c82a2c1f00a0120ab971803050272195c0056f8d448f4af7daf73aaec4cfb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WS2QVYW%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T090839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQD5q3Cp%2FNlxXZ%2Fi1QKw6HO9EFPvUD3Zj5QggB5NZMeVHgIgNTT3%2FI20hH1xWF8xh0sGY2nlzyknaA8cWNAGKyZ1H%2B0q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDMjlx83mIjeSUpoHkyrcA5%2FqlwCmGpjJ0V%2B%2Bq7iNcmEVITxVBLo7A5L9V9680zAzbpkz6gNNflTbLU1R28AsgfnVFlgJ%2F5NK9EVi4AX48ci8xaoUHWfgn94IkdJpfIoKTWIH68ocyZcsP8r%2FY8U1s0uK4iIuQKkOh2igtwgSYC2TLOsKotRknYCQZuZYCrklXjC5IeytUdTmNG8z3dYRfYbHkg7GYH7jJqGuDz28AxIFicaW%2FaONnRN20STYRtldg3dsEC6tZDXqF6AxOWcfI1LXkcdnrrArne13OHkuBLh%2BJW9NvHnM5s11MvIaawCuNurLfdxux7MAsaj%2BipEfPCG3N9saDeDYxFPG664xKttZMBeCgxgI%2FderkkEY4GGsr4qpavGtoadrBlgxpbYLNkoybd2tBv1dglJgGudZtSKno0XlB6iZS22NsZQfhVRJBybSNFU%2BGLLakBMRTuTfl9%2BDAv7B%2BO9%2B%2Fe6voE5oj8gr1scCltPZ0AY062V%2BdQHuqI6gzqtRRo%2BpLr%2F8gqcsMkWpgiXu7RsrP56AHem1szORTJdaAQEMIrxwepoWc0HWEHwTjMhc1kbjzt8pXvzPVP%2Bb7uqia7DdHjz%2BgpwuGYNDoBLu7sMCyW%2B5wy2gfAkuny8ppoTxXI5JyVCdMM2A%2B70GOqUB%2FtkVzRzYPar3Jd2J3g9rJGvyeiT3sTT%2BqSWkAEYAS6dR2EgPyxidOTckxWvxp9DImIHjB85PWSzEriQUqVle1BkivlFLZPvfWETnCaO4x68pM0HtTcIh5ECtjWozWRvbdsPTL%2B1rRr01sTgTZtZDkmZBWEP5prB9MgtV953K5o1NUMGv6goDGumrDA3mXR5CGG6g4Z2T4Yp%2Bp%2F%2BedfWaR6INIagU&X-Amz-Signature=ff23ae307a36569cc63341f815797b0dfb175e76229a2504aacfa36bb02b272a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSJPHQQM%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T090839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDcxx92BIRf6AnqV%2BnecNAmpSC63L3aBXdGM26m6SqjwgIhAM8kbH1x2%2FzUz4tivcJAqIem3HyOG5VdXXsiVBcLaS%2BWKv8DCFkQABoMNjM3NDIzMTgzODA1IgzEZgMsafXXeoblv7Yq3AORX6etGF8%2FB6F%2FaZ%2BvrjO3V2WU7Sk0e81gj6srqb%2BSpn9tXBll5ScVPKbvP9EqUP85u0s9EG0%2F52Woq%2BZncTmobkAAPHrzM4FKVYr4Fd89Duvq2SneZbD95WoTFnd%2FWfyao5%2Bt0itLDw%2F2ZEW0URumRwLSBOXbMJlm5y8qyQRQAs%2BozWYjPNaZXGCUVL4ZNX0MegkNDnh0RdNEuqwk1Lh8jEHHuR9eWkeha9NRpZhYVadXevrP03Nf8FX0AJsxxuqsloR5wDlb60u335cmrSWmnpBGei4DHz7QHxu0wpCkGE%2BkHm9V6o%2Ba0ysgdDQXasKIqMgrieRgGC2jMxivslezfRmftu5Xx055dqev3v5WGgIv3U09C4IjHBijlVLZtDHUIg7Gl7WAae4osOdxxXZHJ8Kudy7%2BeKn00dv59OzyJzFq6JnzYgi5oggyBFiu9UXp6qBVKWENY5k3LaEszpAeSagMZ09rk4m2z%2BfgV4Qx%2BCczyENnf4QRL5oSAa%2FV6AlOej6mjf3O22M2T%2FFdfkJeSKadF83Hr6brUXPpurcHebHiqPFQ15ah4zYQ%2FC3rSFKQlf95YQdbZ3W0qpTvfp%2FWpbizh4jdGogibz%2FKi5YllxGUrd4bG9%2B4Mv19iDDZjvu9BjqkATl7Gik6HsYTgc2cPkLsLWdXAPoWShYJVFtPtmNPmLcmguEVo6DOFeH3%2Bu3SRQD1T%2FXrmpiIpWtd7Hvim1Eq8a14Ghwe5Mmkfmx1yOs3%2FbSdUGacOkuMxYlTLFN3gIaHLwk7oxnvWwhEqgtE09FCXP7RSS9QvopBoz1pEyemhHd%2BqGKTAXYhmB%2Bf5HYQzjoWkHrAgawrEP0zUAdZeDUyvWe2Ax05&X-Amz-Signature=3f2172d84ce6b4a27739ef66440c3e0b359193427f50049800931d40e6838329&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFMVAUK2%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T090837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQD9RADMgoR2%2BpWI5jefMD3gwQ%2FgXchXVzu2spOUkoxlmQIgDT9KAs6omfza7fDs3PMzgOIDpVNCt57qCpvbk%2FUt5U0q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDG3KwX4Q%2FM6oijtY%2FyrcA%2BfZgZ2%2FenUlGYLZg11e7LaP0z5kBJrxe2W9k%2BPyl6gjw5bUJyRflXevKp%2BfjBBACSCmDaeSqcW17BNwuK13u%2BHGU2GEwI8%2BNPhVdYcDnyCkeKXzW9QhQRVlewSyp520NGJSde8tPD3Xhbk6%2BlcosRPVyvm%2FQPy5l3uW4bCe08feLuBsznHtOif2sBch4z04a%2BxanPC2s9D1kDSANgzFlLRNED5cn7VDlQH%2FmUbjCR1nT5wtnGJtyRVhCliRZ12L0u%2FbYHscrQW%2B8BA2KMfey87mMz7DWIj3o3xVibkARUwp6YiahoTnHA1t4uN0amLtTL963CYoPHhXOgO8HyXrjM%2BHE%2F7AWnGXpD8T8xtQfN1NwrEImf7VF6NDev2dIExSc7x4v9jo16O%2BGg0o3l0xLvU1322b1yMF208GnZeQNfIYd64emUWXBMYCgYT8mzm7pueQEjw9P3QJqArCsaAaCry0aO6q748S8unQnHbg28qp4QMFlCkofwOzzvrLxA8zKuhIEsQkjfgTxr1vhd68coSPbjN%2FgaOa9iKycVIMEGzJQ%2BlHUo90hwhhsc4a%2BFA4A5%2Fz%2Bq%2BJThwvzpmea77UiBhPWPjvhOXae1f9cJiYM2GZqQR46Ng%2BjhREp9BLMMj%2F%2Br0GOqUBNVaOahgWUomrtezoBdAxtAXRnYMG7dFpP4MCzvXVHicjH0vDViFQXXwczxvwFWPZkTFAWYXb4ZZIFTDRnBNQ7DFhbONU69AThTZR8SILZu8jhyjuS4QlHts%2Bi8GnQ%2B7bZTgpns61pGWN0kx9KLjzNh1GZ1evZKOLpfc23gQ6AoSMq5GwoxhWBp2mCNm1Yyb%2Bh8TP3rm9FiCFvRqu9W4gH%2F414FKY&X-Amz-Signature=84839954e05c2a84c83ab5d4e949746571098d04e0dd12672feed77af3ba1f5e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
