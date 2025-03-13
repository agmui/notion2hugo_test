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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAVHA7EW%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FN89GV0IrDbrCs%2FBZ5tDLsgTsIuRmNp%2F92d3QksAz1wIhAPY4nXxLJWb5d6eSdGYtkWE6Tzq1JMVPpYlXLXd8azoCKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQzDf0Vbift%2B9DEJwq3AOI%2BvxbTgPyRz7ATuPmX67A5yDoidLsxorrFxTn8p2gXvBgnKTR8Tr3Pwi8Q3v5etsa3L7nbq%2B2iqVrcjP%2Few7gfT0waGHhPeC7Lk0G8%2FcRJyyqwPaCb7NWeN%2BYB%2FWz45oPrHfFnpl4OPSakslRsmJ8NVg8CsiqsmxF29tizjR8OyhXnpIGefgVnlV3CW1aptylgDrblzgn5yxiKcwYDq54Lo1XHpR4ijCBGQHgYImkhsYrAq%2BuByWOOa7IjbpFEpEFsWizIOty0Yhcv93K94o6admD0J204g6BLdBHp9JyOIuNO7kjGILgtqjWkn6M2EBwF9UUql16mgAyn3MzIg3OumZz3smNmGmTul4CnsJM0HsMu8zeJJiXfgUQBpV%2Bt%2FkYZm3UhDbJhwEWoKGVk7rQx5zmLhSoTRh%2BQjU8Gvo8Qf954XF7kuGEq%2Be7fG%2Fs%2BrHTPyom0cYDcdZWt68TtH8Ceq7H2MY4uOJDlNPd3oaFNWYGFVWEtKZd3VAJZhb5Kyp%2BA%2FMImNztRKzieMEahx5nxMOqY1Nk%2Bu%2FjXCjtqu7gYBXCDgZtaEuGlcjoDlsyMToCGef%2Bk70nXhbYMru7vyqsm5LpUEtaSiI1%2FXKrJT2ctHK8rlbfTECj2RlngTCv9sy%2BBjqkAUOwg%2FIXBjNpGdxpt%2BI0eegeJbeuroixx29GQiKDRAiE84e8FscOGSC99QCaDmuYOANXBtaVo90HVzse8bF5w5Eqvq1O8QFczUsaTv8qM8oqBRSmsZvREGHRC41J1hgeBvQYz9IeSGNtLTKqXfwRtxRIPxjJEcG6K%2Bs3QXQ0uuwvqdvRirYy%2FcU627RvkeCSpBfFzGDPEBOyK1Inbbvn%2FgRni%2Fxc&X-Amz-Signature=a3e3fd93833178141b7e1754af49f8869642ddfbe6c909c3f231f4150d1cafd3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAVHA7EW%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FN89GV0IrDbrCs%2FBZ5tDLsgTsIuRmNp%2F92d3QksAz1wIhAPY4nXxLJWb5d6eSdGYtkWE6Tzq1JMVPpYlXLXd8azoCKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQzDf0Vbift%2B9DEJwq3AOI%2BvxbTgPyRz7ATuPmX67A5yDoidLsxorrFxTn8p2gXvBgnKTR8Tr3Pwi8Q3v5etsa3L7nbq%2B2iqVrcjP%2Few7gfT0waGHhPeC7Lk0G8%2FcRJyyqwPaCb7NWeN%2BYB%2FWz45oPrHfFnpl4OPSakslRsmJ8NVg8CsiqsmxF29tizjR8OyhXnpIGefgVnlV3CW1aptylgDrblzgn5yxiKcwYDq54Lo1XHpR4ijCBGQHgYImkhsYrAq%2BuByWOOa7IjbpFEpEFsWizIOty0Yhcv93K94o6admD0J204g6BLdBHp9JyOIuNO7kjGILgtqjWkn6M2EBwF9UUql16mgAyn3MzIg3OumZz3smNmGmTul4CnsJM0HsMu8zeJJiXfgUQBpV%2Bt%2FkYZm3UhDbJhwEWoKGVk7rQx5zmLhSoTRh%2BQjU8Gvo8Qf954XF7kuGEq%2Be7fG%2Fs%2BrHTPyom0cYDcdZWt68TtH8Ceq7H2MY4uOJDlNPd3oaFNWYGFVWEtKZd3VAJZhb5Kyp%2BA%2FMImNztRKzieMEahx5nxMOqY1Nk%2Bu%2FjXCjtqu7gYBXCDgZtaEuGlcjoDlsyMToCGef%2Bk70nXhbYMru7vyqsm5LpUEtaSiI1%2FXKrJT2ctHK8rlbfTECj2RlngTCv9sy%2BBjqkAUOwg%2FIXBjNpGdxpt%2BI0eegeJbeuroixx29GQiKDRAiE84e8FscOGSC99QCaDmuYOANXBtaVo90HVzse8bF5w5Eqvq1O8QFczUsaTv8qM8oqBRSmsZvREGHRC41J1hgeBvQYz9IeSGNtLTKqXfwRtxRIPxjJEcG6K%2Bs3QXQ0uuwvqdvRirYy%2FcU627RvkeCSpBfFzGDPEBOyK1Inbbvn%2FgRni%2Fxc&X-Amz-Signature=3f1ac371b86ea9af3c57395059bd826d55f3e932e6de90f14c9555de2c24429b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SBGLFZ5%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDr4B6z9nOWJeUYXGq0QDleOe8UgnHiIy1Yf5sUaPr1qAiEAp6gQp1P6FhsrWluN57FniEHi4460rXtD20LW%2FUcWOiwqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFgJAPIZCGRBgknVDCrcA5d%2FD1hjExaysI9PPQ4JWcp2%2FU3VXR47MPqwROjSkRVSCIAir8zosL8pkx01CwQdw556ZzGh%2BkBv93NCow5zrZvO0dctdHO0TfGDoXL8Tk739Hw48cuwFtsuypv25%2FStcUVFp1apra1SsJEVEdZdPFYW8bGZR7QSN9r1pXaDygbFlSefyUY7kMpg6aQkYGtHg17io2PvcC0qjdYgHRxVsUGiVv6h3pZfi3s5mda6SJC6m%2BlfdkIuf%2BsqP7FZnu7Jpx4C8rbkbs427Um%2BpHHGb01Sh0bssbAVrvTyAEHutNWucB6qWT5zdkPzyvm0Srhr00Iv97ygrNqbrZOZUg3Pm7f%2FNG7Dc1na4Pn82qZa9uH86TGG0aLxiqmUqdlZgar4A2Rbdx8lbFHAfP9H5wREsySjjLiM3DqlZ54i9ed9I48wknjhtM8CA6HxgBMDFTKXHySa4Qwa2nIG8iJ2MUpwSCMvzsCKI0DbUi8dIT7Q9pkVQdk%2BnhYj6cxPIH0ylNSDwGjo37rg7FQg1AI7eJkqferbyovcU8jmcUFPVlJ6Qqry0%2Fds80DReSI1MPTb6kmKRD3JwHQdExHCFJoDKfqKxNjAkLLqSfp2HOr5lSLXfi3bujBcfrFqXIu%2BTHSPMJn2zL4GOqUBMUiNLD3l7YaCd8C3WidTHm1kH0jdZCD%2Fhla2Hy6zYcU7HxyR5eX4xqQQdenvi4QqbjAfI%2FnJxFdpn6pPYLuNGJ2EY3tx1VbV25X2gQSaUnFiwUC0sKFdgEhQ0MzfHaysexP56negFHetUXmcm4NcKIslMl5vXhmgDaffSYLgX7HZb0fKyvgItpM9fiOqetKpDyCOWwM0wP2EUQL%2Bx2MDXd2%2BerE9&X-Amz-Signature=cdb0f96f8f0fb1899fa6c1a884c4046c11f1ba39161fc59f327431204f81ed14&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHUK6PMD%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFdDdOTuEXcKgjsTdMT8lkLrRSAlZMYM9LlQl9Le4xr%2FAiEAkn1oe7GIPZejxqqalgXGnHIph%2F9pas3yVQHL%2Fu8e5ZgqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBSCL0dIRuEuzknsASrcA5ywhXxgzAajZLH8EVwxW5rvlmOknEhY1NffyDEpOJAIcHDykrAn3KjUvq7BQFQy83dOkwwqEFLxMvxjus7yCDRw0XvFxWF%2B%2B9a4Gji%2FPv%2FDGJE%2Fyy%2BxHKO5WIFv3cSfSH8JaPz3%2FgtWObQ4VnwGfS3Oy90Y8HwXDlFAf5kXWs8Cnd%2BJk%2B97QMi%2F6sRzmCEbvc0Jl6QTg8FmaiSvj4v1LIzQUvj0AU%2BJBWp6c3PcmG8Ep10CUsn0kwvcmsB1XB3phSxEK5gVigwuZO9h0ktrYcBjB3iNRPvK9P86kyn9mmMUa6FAz7HMN24lqFvJChjFFeGTiPOJ41jNchTSQX9Cjr%2FIYaj5prmPEdsouNYb8jvKk4hiDDnv1fkS4avAeW%2FYIQSKRrWCnLFwPCe8mAOPRSzED8C9hhWbIgT7c83HkEBtr9lHBRdt6dubI4qZajmn0SdDgc0YAksfrSqHNNXszt3HJ7Pw7RwC7EijfJ%2BSR01tMZ719eHb9pRU0GzQOytCyGdfTXA%2ByfWtT3bKRGuMSCo0vNTW68Og8A8ow8h3pjBy1h5P5t6TrzqD5wnTcjjBRJkP52QHYDgf5GbHB%2BpDkVYTgIuJVTSoZzGT1rQrTJ3NPXPMc%2BesTuvgfYn0MNf1zL4GOqUB%2F1m%2FBgq60iROj0awcp59ZgDOpK%2Biba%2BM0zvX%2FweZcZ8LyZkPb2P0FYFxU%2F9zLguoN6vaVIBurfilBOX%2FIs6o4QIuvHiMw9yv6aDnUXhVdZwR0ZtKME2B6Mgd%2FwVC3sTIwBlXj1053IcU7idf%2FloJvZvyYxr2OKAhN%2FlKap6MBKqSajrNd0NFWvbrEeVVJc2yYQrEX5eoHz7JYUNn6iHJcisA%2BGIw&X-Amz-Signature=c6f1312f92bcd494ca1ff7e25c4d57b7e14c5e14ef9c53d58f3366fc4940a61a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAVHA7EW%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FN89GV0IrDbrCs%2FBZ5tDLsgTsIuRmNp%2F92d3QksAz1wIhAPY4nXxLJWb5d6eSdGYtkWE6Tzq1JMVPpYlXLXd8azoCKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQzDf0Vbift%2B9DEJwq3AOI%2BvxbTgPyRz7ATuPmX67A5yDoidLsxorrFxTn8p2gXvBgnKTR8Tr3Pwi8Q3v5etsa3L7nbq%2B2iqVrcjP%2Few7gfT0waGHhPeC7Lk0G8%2FcRJyyqwPaCb7NWeN%2BYB%2FWz45oPrHfFnpl4OPSakslRsmJ8NVg8CsiqsmxF29tizjR8OyhXnpIGefgVnlV3CW1aptylgDrblzgn5yxiKcwYDq54Lo1XHpR4ijCBGQHgYImkhsYrAq%2BuByWOOa7IjbpFEpEFsWizIOty0Yhcv93K94o6admD0J204g6BLdBHp9JyOIuNO7kjGILgtqjWkn6M2EBwF9UUql16mgAyn3MzIg3OumZz3smNmGmTul4CnsJM0HsMu8zeJJiXfgUQBpV%2Bt%2FkYZm3UhDbJhwEWoKGVk7rQx5zmLhSoTRh%2BQjU8Gvo8Qf954XF7kuGEq%2Be7fG%2Fs%2BrHTPyom0cYDcdZWt68TtH8Ceq7H2MY4uOJDlNPd3oaFNWYGFVWEtKZd3VAJZhb5Kyp%2BA%2FMImNztRKzieMEahx5nxMOqY1Nk%2Bu%2FjXCjtqu7gYBXCDgZtaEuGlcjoDlsyMToCGef%2Bk70nXhbYMru7vyqsm5LpUEtaSiI1%2FXKrJT2ctHK8rlbfTECj2RlngTCv9sy%2BBjqkAUOwg%2FIXBjNpGdxpt%2BI0eegeJbeuroixx29GQiKDRAiE84e8FscOGSC99QCaDmuYOANXBtaVo90HVzse8bF5w5Eqvq1O8QFczUsaTv8qM8oqBRSmsZvREGHRC41J1hgeBvQYz9IeSGNtLTKqXfwRtxRIPxjJEcG6K%2Bs3QXQ0uuwvqdvRirYy%2FcU627RvkeCSpBfFzGDPEBOyK1Inbbvn%2FgRni%2Fxc&X-Amz-Signature=e8118d4922314be67d8ac7bbe4548500ce536473aa515902e0bac17adae86849&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
