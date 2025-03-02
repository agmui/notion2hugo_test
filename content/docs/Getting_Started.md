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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5NQMP2Q%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T160751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBpVJpSlwFT1eN%2FQ65l2lIODGoXL5MdvQhGX1w7jViyQIgYtz0pa%2F2yc%2BmUvNNHLFwN0ESTaHurwUtni9BT7Ep7O0qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdRTDn6KgiYGpPryCrcA743FN9xk7rOW7BWbTsjQTZyKbOBzziealjCc0hNiPe3eos3WXZ8JSqEMox3jnllpynsVaKV557ONtOIqVFvMMmzptVtrM5ZFmR9M%2BnXThC8xNlTksDGNeITIRizcRlL42olZEmMuMH8%2B9qmvHW4%2BGP27%2BzqbheZGoXlNnOZQV%2BJD2q0Uzp0Ti3GyzzbyKz2MeZaD9PISmbPfSdb3r%2Fyd%2BDivx1ZLkpsbmVKT6voN%2FRJCg%2BOZQsD2MDorpetn65eKVemmzoVZDQzEMyOKn7I1DUlafihvcg62eOIRG7RKkMAAIDodZKg56bdCD%2FIu%2BKmTMxN5OyHim2%2Fx5nGHCb3nJ9iHWLNdM471DiVfaac9JTts%2FwOI1VoUzeiaSYRd189QBCQvFAbrqyU2etqvclcZOxhvclrnL%2FdBbtq%2BCHkFrTA08XpClAq9SdycXGz%2FEqqSkAYTfSIP%2BiCUc640A6fdPrqQKuhjxBYoi8sIePEWJ752G8tRzz%2FzLpwEtOioKolAW%2B3QjRPyrdCy9oPer%2FkE9wqHRVzSAMUMWy5WO6xXbCGkqUYJSObguOpCrPIh04OOjX2JJgERN52%2BXANV08vcKJRmsGxnsdu9S%2BG1%2BHnItCTbbcgUygFjnKYhGkDMJn0kL4GOqUBeOj9ItIsUqYnja5GD5bqc4CBARBrjcwFrCyouM2uvmpX4hrTN8WwN7Zb0QtfIjRcP81hj0umXB%2F8kewKn1jWcd0%2ByFwdz9GiBrfL3czzkLKg9wIbFts293R2WckR%2B8%2FUer1ZdjU4UmvHGjxHKPlxHIcKbhtaNBwA6B6LXkJjXF5RjFSn78pvWdLHb64KfA8ERBH4PQHdtTILOaxI%2BOlgGQEQo7Tu&X-Amz-Signature=cbb197f49b38c6d942d9770acc4de828a490433d3db3a864a6931b9f3813fa42&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5NQMP2Q%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T160751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBpVJpSlwFT1eN%2FQ65l2lIODGoXL5MdvQhGX1w7jViyQIgYtz0pa%2F2yc%2BmUvNNHLFwN0ESTaHurwUtni9BT7Ep7O0qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdRTDn6KgiYGpPryCrcA743FN9xk7rOW7BWbTsjQTZyKbOBzziealjCc0hNiPe3eos3WXZ8JSqEMox3jnllpynsVaKV557ONtOIqVFvMMmzptVtrM5ZFmR9M%2BnXThC8xNlTksDGNeITIRizcRlL42olZEmMuMH8%2B9qmvHW4%2BGP27%2BzqbheZGoXlNnOZQV%2BJD2q0Uzp0Ti3GyzzbyKz2MeZaD9PISmbPfSdb3r%2Fyd%2BDivx1ZLkpsbmVKT6voN%2FRJCg%2BOZQsD2MDorpetn65eKVemmzoVZDQzEMyOKn7I1DUlafihvcg62eOIRG7RKkMAAIDodZKg56bdCD%2FIu%2BKmTMxN5OyHim2%2Fx5nGHCb3nJ9iHWLNdM471DiVfaac9JTts%2FwOI1VoUzeiaSYRd189QBCQvFAbrqyU2etqvclcZOxhvclrnL%2FdBbtq%2BCHkFrTA08XpClAq9SdycXGz%2FEqqSkAYTfSIP%2BiCUc640A6fdPrqQKuhjxBYoi8sIePEWJ752G8tRzz%2FzLpwEtOioKolAW%2B3QjRPyrdCy9oPer%2FkE9wqHRVzSAMUMWy5WO6xXbCGkqUYJSObguOpCrPIh04OOjX2JJgERN52%2BXANV08vcKJRmsGxnsdu9S%2BG1%2BHnItCTbbcgUygFjnKYhGkDMJn0kL4GOqUBeOj9ItIsUqYnja5GD5bqc4CBARBrjcwFrCyouM2uvmpX4hrTN8WwN7Zb0QtfIjRcP81hj0umXB%2F8kewKn1jWcd0%2ByFwdz9GiBrfL3czzkLKg9wIbFts293R2WckR%2B8%2FUer1ZdjU4UmvHGjxHKPlxHIcKbhtaNBwA6B6LXkJjXF5RjFSn78pvWdLHb64KfA8ERBH4PQHdtTILOaxI%2BOlgGQEQo7Tu&X-Amz-Signature=bca884cc1991c5a1c3be818073b1f7918bdd92676fca19d974cb50a0d2b9f7ba&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE7GAXRJ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T160753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC92Fyr2Uggemmehobeddkj6YinCVjpwDiiJzYjJ1UDTgIgQgJd0aRD2REenUz4e4MJOFcFeS0CoKLR4T38WaDvE9YqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKz6AORd5aSYJdwlircA09lnSPdikT5S35KE73y6B9%2FM66kQM91L0TwLWuBfQmm1%2BgWl9DXje%2F3KCcoN0%2BUyt28creOrWI7ZqV0Gv67WZkyITMQAvcqeUBYushZAi6%2F5iaBFh2a8muo%2BNoB5leB%2BXCrAvXwkyOBizJ4HnOuJ1E5ft%2FX4JUyNw686btwklHn2lEnbD1JbYNt%2BduND23RkksLSEt%2BLI9e%2FZ6DIkobB%2FVvmkasp7ZOExUdZbCLO9T2GZePo98Om1A98nGXz%2FnOeC4siBAZTSVt2DzPphSalnggoYCa4KrPuLC9mCtyEUw%2BIw0qvKMed1pGtCOMPxoIkcVX6fKWlE4%2Ftih9pjoVXiut%2FoOfVeRHjRn7wHce%2BfEOivVcdppsbSfaOdVCq97kdDGfM1X73H9XiAwAYNN84Ux91cTi9yIjbKG7oO3JFjFWqOJjOdfl74EUxX9HsZdAQBYWsErfOowVDWgDJt5S0IcuNSt9MUZ0Sk2xBu7N3jjAfCnuy40e6k0AzROLOHe1mKpWDogogKgxIr3nK0S7MLvWBY%2FL0fsq4B1cndOQj3Rj3ue8qYTHIKu68tnhfFd9rZlEE9iFnjHNcnJkdb1R%2BAAUFtSWVbRMZNWHYyNg5o1FF%2F5TLvBW71Ivaaa0MPv9kL4GOqUB8Tn5IXwQK%2FFxYGhKa%2Fy7NbTgzXxZPdMN3Cju%2FVvbLZ9WaQQ4%2Fyv3E1f6a%2BAvUguGVU9SNmXO7ikxxmX2XK%2Bu0pUsVdcWpc6JJwg3AQ1irBoFPMCfwq9w86VFzTOfHDYur0KFzWC45fEGveYkCaGgCqZC1OEATa7hwNNdrGm0eFPzDxHXQwmO9IyDmhL9G%2FA2%2BpVfDQSunj7h3PTeaYShHCKYk3G%2F&X-Amz-Signature=eb924354f34e07f3452a6f3d067d3b973284fb997a238fbb01740bca1e55fc7c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZGVWN73%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T160753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDDaWu7htUbP0OXxXv3zxOMdCh4tpi%2FA7eS0MugnBncrAiEAkicBV3ArP3z6EFMAuj%2F2BJerXnuldAZHGvHECBiMdsoqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDUfFibr4fG33rkGbSrcA414p6vzBzaxqtrbB6noD%2F1hP9ax6AClND5AsOhQOwVi2WMPfDV3s9QXCu95WKypWOv5Zm6l8WlhISqBQMwS92XJip%2B8pZYcaL9dAgj%2BFufkElltQ9QTv8M3VnGXj56r86GQwgv01qayiCEgil0%2BISUXRCqs1FaHCvmpTqzrGsk72o1iTg8kK1pi9sxLe47CFhtgrpF14fDwWxZl6N0S2FUt%2F3UgBl%2BhjdAo5PMChQgjXAkoBEGFydzQDlnq618kKqvcMYjjBkGRuySHHhPjBkCqnIZqZNvEY%2FgLcyij1Y81%2FSAfGz%2FKfBHsjSEcVszLkWW1j8KrmNPmrwR17TLpqmrUqWE0w7%2FfmQ2M7RNikB%2BNzRk4HKfdTsD5yYe7%2Bs7Oc3vA3AIbnvC7bUisov5tXe%2FMV9SALdT%2F5AL6Coa7PP9ItGx99njHx5U8XKJQWhrS53XgZ5ZKWUKiTCbI%2Fh6N%2FQr7olhR64XB3dTG2GZw5mJlSmtVmDBq3yiqWayO0vbWjVrcGKXTdcGnfUdv4WoYluIEcRyv%2BO9ux58TlXI8BxhMI7hN6QK9RPgtGOMQBAehSEHH0fFZjrs2DHXliYjLaR%2FfMgNENlyV2w236Pf%2BbGdjkCVzn%2FNI1fcIRWrGMPP4kL4GOqUB0Z1%2BnMgLC5OLOVvlfXuFlTaxOl%2FappCPZcH%2FcKEWA1Z5zJvIUdiHtmA3STx%2FjZkULH%2Blt3fVYiHVZ8aFM5ZkGyDGxBtEb73CO8NOFKf0RgoZGkRE5Us6wzzO%2ByP3vkQ1xwxO0ZrLU7yLXDKpcFdhnwe6fihhMAVDYA8M%2FGJX2PJqtjMr5NLLfdk5FD831MFbxbYrFxoipe4ms3EqiZI72sK4O8zD&X-Amz-Signature=efd004aaf4b75d1665cf616a7cf652815f790665f844e207c945e3d7b5fa42ed&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5NQMP2Q%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T160751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBpVJpSlwFT1eN%2FQ65l2lIODGoXL5MdvQhGX1w7jViyQIgYtz0pa%2F2yc%2BmUvNNHLFwN0ESTaHurwUtni9BT7Ep7O0qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdRTDn6KgiYGpPryCrcA743FN9xk7rOW7BWbTsjQTZyKbOBzziealjCc0hNiPe3eos3WXZ8JSqEMox3jnllpynsVaKV557ONtOIqVFvMMmzptVtrM5ZFmR9M%2BnXThC8xNlTksDGNeITIRizcRlL42olZEmMuMH8%2B9qmvHW4%2BGP27%2BzqbheZGoXlNnOZQV%2BJD2q0Uzp0Ti3GyzzbyKz2MeZaD9PISmbPfSdb3r%2Fyd%2BDivx1ZLkpsbmVKT6voN%2FRJCg%2BOZQsD2MDorpetn65eKVemmzoVZDQzEMyOKn7I1DUlafihvcg62eOIRG7RKkMAAIDodZKg56bdCD%2FIu%2BKmTMxN5OyHim2%2Fx5nGHCb3nJ9iHWLNdM471DiVfaac9JTts%2FwOI1VoUzeiaSYRd189QBCQvFAbrqyU2etqvclcZOxhvclrnL%2FdBbtq%2BCHkFrTA08XpClAq9SdycXGz%2FEqqSkAYTfSIP%2BiCUc640A6fdPrqQKuhjxBYoi8sIePEWJ752G8tRzz%2FzLpwEtOioKolAW%2B3QjRPyrdCy9oPer%2FkE9wqHRVzSAMUMWy5WO6xXbCGkqUYJSObguOpCrPIh04OOjX2JJgERN52%2BXANV08vcKJRmsGxnsdu9S%2BG1%2BHnItCTbbcgUygFjnKYhGkDMJn0kL4GOqUBeOj9ItIsUqYnja5GD5bqc4CBARBrjcwFrCyouM2uvmpX4hrTN8WwN7Zb0QtfIjRcP81hj0umXB%2F8kewKn1jWcd0%2ByFwdz9GiBrfL3czzkLKg9wIbFts293R2WckR%2B8%2FUer1ZdjU4UmvHGjxHKPlxHIcKbhtaNBwA6B6LXkJjXF5RjFSn78pvWdLHb64KfA8ERBH4PQHdtTILOaxI%2BOlgGQEQo7Tu&X-Amz-Signature=2a0de04e5bde854cddcdee78244db51ce53f62bedc05d690fe53fee40a1c2620&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
