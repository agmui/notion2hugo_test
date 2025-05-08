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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVSA4FZJ%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUtN0wX%2BGI90wwf8uVBr%2BHp8Pgj%2FqwpHbfQRCbZjv2EQIgJfK9J4b11Q%2B%2FmCBN%2BFeYaMNuR6u%2FyFOdmTlyNoPB%2FwUq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDH0bpKDTo91owAWxnSrcA1OC7UcWjHvjmd2JXcstOLgy%2F9L9xv%2FKZFvQ%2FzkfWMTyRsqcdwRm6FvurTr50Tm%2BoQDAvClDBGFqHW0EqPfimigJ8MJIDDJaq6uYu%2BPFrU98ByI4SepK2OHdeG4prkOOm%2Ft2RC1wzUWXVaNnxmHy%2FWrI6Q7ub%2BXtUbSJRlszDa4WoVe2VR02S%2Bq4PEHW4tWIRNubLSfK8YhWH2jpKd7vqlQx9g0D0bV84kodJ70iMm%2BuykWET1hXXQlbuZN45caIm42pJyQ1VojIhafOMcsXHZI%2F%2BVvMGrXrx9j1xrjmjnPDDM8ljtRzqkImo1tSYrgCvOmC1h2dgf8w6eJN5rkGBeE0pC71tw9PfzSb4NnlCJJH8gUmxexmTh9EoIRBimAq09WTnUmzZ4AE3dSoKcis%2Fwq5WMhYImlKHRQwOHLH%2FJ0GqIqQhNPgzKMK7mOkseVlExE6SnCmPE3aCo8T8OvgcG%2BX8OCi3zMVAw9EjDfcm7gUdev1Mfa0TDKcbnTkDDen9F4mboS4frTZNbwGM0yjGfpInZsKeS0YU1Y%2BYAGCXPkQoHbVx3rkI%2F5U%2BLhQgnVo9s%2FSsA83hkTxOoMDuur99L0aNDvpapmOfMhXCdIv5gLhVVZg%2FnB9lWX2s1tHMIiB88AGOqUBgOBhim5VN%2FBr8pVG%2BAqFDtW9OEzXJPZvYKJgx77PAO%2F1Mkw%2FrrLIpi%2FUfQ35HwhtOygBv8en2zwwYUZlYyPK7gTh8Cu3hFVObV357ufPT0VW3gkg1TYxQDy%2FKhrskbixuR216rWHKndW8AOt163Idh4uwOIL8m7lB2qFUIMyOOXbuww5ACxtcC429UlL84HEUKaf2VywO1BU2dfEuEqgwaca%2FNBz&X-Amz-Signature=e40f46ea72618993b9658c08fb895343d655f7dea78176a284ca003a7316c313&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVSA4FZJ%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUtN0wX%2BGI90wwf8uVBr%2BHp8Pgj%2FqwpHbfQRCbZjv2EQIgJfK9J4b11Q%2B%2FmCBN%2BFeYaMNuR6u%2FyFOdmTlyNoPB%2FwUq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDH0bpKDTo91owAWxnSrcA1OC7UcWjHvjmd2JXcstOLgy%2F9L9xv%2FKZFvQ%2FzkfWMTyRsqcdwRm6FvurTr50Tm%2BoQDAvClDBGFqHW0EqPfimigJ8MJIDDJaq6uYu%2BPFrU98ByI4SepK2OHdeG4prkOOm%2Ft2RC1wzUWXVaNnxmHy%2FWrI6Q7ub%2BXtUbSJRlszDa4WoVe2VR02S%2Bq4PEHW4tWIRNubLSfK8YhWH2jpKd7vqlQx9g0D0bV84kodJ70iMm%2BuykWET1hXXQlbuZN45caIm42pJyQ1VojIhafOMcsXHZI%2F%2BVvMGrXrx9j1xrjmjnPDDM8ljtRzqkImo1tSYrgCvOmC1h2dgf8w6eJN5rkGBeE0pC71tw9PfzSb4NnlCJJH8gUmxexmTh9EoIRBimAq09WTnUmzZ4AE3dSoKcis%2Fwq5WMhYImlKHRQwOHLH%2FJ0GqIqQhNPgzKMK7mOkseVlExE6SnCmPE3aCo8T8OvgcG%2BX8OCi3zMVAw9EjDfcm7gUdev1Mfa0TDKcbnTkDDen9F4mboS4frTZNbwGM0yjGfpInZsKeS0YU1Y%2BYAGCXPkQoHbVx3rkI%2F5U%2BLhQgnVo9s%2FSsA83hkTxOoMDuur99L0aNDvpapmOfMhXCdIv5gLhVVZg%2FnB9lWX2s1tHMIiB88AGOqUBgOBhim5VN%2FBr8pVG%2BAqFDtW9OEzXJPZvYKJgx77PAO%2F1Mkw%2FrrLIpi%2FUfQ35HwhtOygBv8en2zwwYUZlYyPK7gTh8Cu3hFVObV357ufPT0VW3gkg1TYxQDy%2FKhrskbixuR216rWHKndW8AOt163Idh4uwOIL8m7lB2qFUIMyOOXbuww5ACxtcC429UlL84HEUKaf2VywO1BU2dfEuEqgwaca%2FNBz&X-Amz-Signature=ed703b94fd7827b0b3f189e467e19f8c4c2ba0ba8ec2809d416f9b6d834f172b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVSA4FZJ%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUtN0wX%2BGI90wwf8uVBr%2BHp8Pgj%2FqwpHbfQRCbZjv2EQIgJfK9J4b11Q%2B%2FmCBN%2BFeYaMNuR6u%2FyFOdmTlyNoPB%2FwUq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDH0bpKDTo91owAWxnSrcA1OC7UcWjHvjmd2JXcstOLgy%2F9L9xv%2FKZFvQ%2FzkfWMTyRsqcdwRm6FvurTr50Tm%2BoQDAvClDBGFqHW0EqPfimigJ8MJIDDJaq6uYu%2BPFrU98ByI4SepK2OHdeG4prkOOm%2Ft2RC1wzUWXVaNnxmHy%2FWrI6Q7ub%2BXtUbSJRlszDa4WoVe2VR02S%2Bq4PEHW4tWIRNubLSfK8YhWH2jpKd7vqlQx9g0D0bV84kodJ70iMm%2BuykWET1hXXQlbuZN45caIm42pJyQ1VojIhafOMcsXHZI%2F%2BVvMGrXrx9j1xrjmjnPDDM8ljtRzqkImo1tSYrgCvOmC1h2dgf8w6eJN5rkGBeE0pC71tw9PfzSb4NnlCJJH8gUmxexmTh9EoIRBimAq09WTnUmzZ4AE3dSoKcis%2Fwq5WMhYImlKHRQwOHLH%2FJ0GqIqQhNPgzKMK7mOkseVlExE6SnCmPE3aCo8T8OvgcG%2BX8OCi3zMVAw9EjDfcm7gUdev1Mfa0TDKcbnTkDDen9F4mboS4frTZNbwGM0yjGfpInZsKeS0YU1Y%2BYAGCXPkQoHbVx3rkI%2F5U%2BLhQgnVo9s%2FSsA83hkTxOoMDuur99L0aNDvpapmOfMhXCdIv5gLhVVZg%2FnB9lWX2s1tHMIiB88AGOqUBgOBhim5VN%2FBr8pVG%2BAqFDtW9OEzXJPZvYKJgx77PAO%2F1Mkw%2FrrLIpi%2FUfQ35HwhtOygBv8en2zwwYUZlYyPK7gTh8Cu3hFVObV357ufPT0VW3gkg1TYxQDy%2FKhrskbixuR216rWHKndW8AOt163Idh4uwOIL8m7lB2qFUIMyOOXbuww5ACxtcC429UlL84HEUKaf2VywO1BU2dfEuEqgwaca%2FNBz&X-Amz-Signature=c7e8d4f457418aae8c37f77e53a1c7e8910c6823293f879597fa7a496e3d1905&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMU6K6OP%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T150900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDE1NmlmSDZjHixCsUTIuvEomMrXDVDOBI%2B9W%2FHNIZQAAIgK6vbLtclbxMbJnIZhJjeeuBeYw56lAffw9Pq3ARzqv0q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDBZNm1HeE1vE2irOYCrcA7q0CKuZ2py1SLVazV3ApCG20UQ2HwitmUoJS7rdSiJLjB71i%2BSlFwAmv3TMRSQggsWlk%2B4lqdVEdSmZ0Y0dCSqH1F7jHdf0Xeiy5jeAgUKPSUiIwBHST6WyT9jXvWArn%2FXYZBBQ9XN1n%2B9S7fhmZwHe%2FURCX0HVlH0MTdtN9wdDOJo4gDA%2FpV05JGZXKeMIEFCRYBDIXMgQj3Lx6ho0F2IZ%2BVp0UocSH2qD0VHLraqcmbs5VvVSmFz5kujIoR6uzQr4xGtUxydwgkx2KbA3%2BFoKE22MUQqkG5UlW%2FMmc9sEtc1EGSXWWPZbaxCiO9AH1ecPBifffG9rF7%2FSx%2FVyohLT23Uc0gEpcYsGOLtgRMPvFL1O2Jgrref0a7vCYkd7gyTUQab5mPXTxLIEXpS7sU3SRYreA3nnblMwBxaiz4H%2BygP3kseolgWSU80xEu3w3d%2BuXA8YPW6YzkMpYhTrYgl1TXYRHgffKSIev7w9N6jNL9FGc%2Fy0D7KFrLrp7JlEL23WsmC4oaDbn42c2A6BJbNg4scBi1lrtVURs0GjStGreOmWv905N8j8aWfXzJ1F6v8QBIm6FvADalk2Zk8t3vOxP0ML%2FY1cJ7%2F%2FEoDA7qmsQanT6l4AeWp7IppfMP6A88AGOqUB9yfdlcZz04gil1vpCDoQmk%2FKD4Y%2BkZxj9byOCFUkYYxfHfQaAuDv%2B3s5Kx7TzfxGtgFm7EXrJ9oaJNif%2F3NVEI3xCPBhYMIARbr%2Fxyt%2FU%2FZDSRGBE%2BXBwex9%2BpA1w9JLF7vOEf%2F9%2Bbj9mfeouusk8Do1jvlgMhN4PRj29mR8q3Uf3KB1%2FFa0SSpVXxm8x8JIOQRlMmpEh7m8CLhm0w3zowRXtgho&X-Amz-Signature=275d57133c8e410de8c63873ef89e72e1b3483b10eb1b6bbf355fe374c634c02&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PUR4U3H%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T150900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEw%2B3M598vWMWG9dirqryE3GFbkTghKn3UR7DlDh%2BFMQIgdmkyQL9pGg9j0ATjg11FO7MSrEs%2F4IJ2MewiWfj1%2Bq4q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHbFHA3YTxnKg9fwxCrcAwJNK8bOVC48g7FIcChXZz29n%2BQ2O7bETW%2BHG9vUoaVM%2BxyIuEJQ0kutlYcJG%2F0wb2X%2B7%2BY%2FZBsYIQpFmWS7Geqf%2FD2WlMvDzCE6O5wUEQwLBhkKbVPmPBfW4387DFu4PL3CdxSg%2Fzh4o0rUWLt9CbskyaOAi6GBvwzC7CrxJqK34dkCzbHdjsVOS6p%2FaGvTRJtKL2onugN3ci9OHG4NVOwGCyvnzo7Q7GlGnx0N4uipICGnhX%2BCe60UoAQ4NT6rtdU7sRFBwgxXmAYrGYly408bjj48eyNQVz3TyD9jKxvgCLnUX03plhfP2qGS3EieoAy2%2BgKWl1kn9JHRi8oVdwPVJ3%2BNcml%2BnZU%2FZJWJrtxAS6PgdaH691RAOrsgpixehGom6Y2VhlG8NpGEADr5tdVLdfEVJgymLzVlpiof493KtoT4NukW%2F%2FpVn3IpXhjCC531jEeJxHZ5S%2BNsien8WGuhQ1%2B9eRLdVJr%2F3F9CHc7PBlxmD94aEVIydriIUK4fRRO9r5KsVV7o09idLXbll66A4Q95Cqrl%2BOwVYUUELLiaoEehSfOslXLG5y81FFq9SiyvXOt5VUfpgp%2B0qEs2hHd%2B4tYzd8eOH41wETRISeLa06VgqT3ykP9rdfu3MNWA88AGOqUB1HxsWZhU%2BlDewhAxX6j2kv8s6GyzjeKZqFtC7%2FwgCBvwe0TxIVEA%2FMUzuIezhjEe7pfvmY91qkXRcZfW%2Fy5U0R%2FPeMIlvOUP59YfX7N5%2FEvSQneOh1F0IHEEJJ6hv0A4RXATQH49ZMGndY79yhfbEopexaA6ymlLgRtnmZ5tJgoEu0whUoZSWr9CCVblMXj97tcsVRIq%2FEKInLsK5SZEX8L%2FARh4&X-Amz-Signature=b3c9c27ee084b37eb1f0bdb0dfdcb4df5d899c35b9bcd42ea727172f2f04f49a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVSA4FZJ%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUtN0wX%2BGI90wwf8uVBr%2BHp8Pgj%2FqwpHbfQRCbZjv2EQIgJfK9J4b11Q%2B%2FmCBN%2BFeYaMNuR6u%2FyFOdmTlyNoPB%2FwUq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDH0bpKDTo91owAWxnSrcA1OC7UcWjHvjmd2JXcstOLgy%2F9L9xv%2FKZFvQ%2FzkfWMTyRsqcdwRm6FvurTr50Tm%2BoQDAvClDBGFqHW0EqPfimigJ8MJIDDJaq6uYu%2BPFrU98ByI4SepK2OHdeG4prkOOm%2Ft2RC1wzUWXVaNnxmHy%2FWrI6Q7ub%2BXtUbSJRlszDa4WoVe2VR02S%2Bq4PEHW4tWIRNubLSfK8YhWH2jpKd7vqlQx9g0D0bV84kodJ70iMm%2BuykWET1hXXQlbuZN45caIm42pJyQ1VojIhafOMcsXHZI%2F%2BVvMGrXrx9j1xrjmjnPDDM8ljtRzqkImo1tSYrgCvOmC1h2dgf8w6eJN5rkGBeE0pC71tw9PfzSb4NnlCJJH8gUmxexmTh9EoIRBimAq09WTnUmzZ4AE3dSoKcis%2Fwq5WMhYImlKHRQwOHLH%2FJ0GqIqQhNPgzKMK7mOkseVlExE6SnCmPE3aCo8T8OvgcG%2BX8OCi3zMVAw9EjDfcm7gUdev1Mfa0TDKcbnTkDDen9F4mboS4frTZNbwGM0yjGfpInZsKeS0YU1Y%2BYAGCXPkQoHbVx3rkI%2F5U%2BLhQgnVo9s%2FSsA83hkTxOoMDuur99L0aNDvpapmOfMhXCdIv5gLhVVZg%2FnB9lWX2s1tHMIiB88AGOqUBgOBhim5VN%2FBr8pVG%2BAqFDtW9OEzXJPZvYKJgx77PAO%2F1Mkw%2FrrLIpi%2FUfQ35HwhtOygBv8en2zwwYUZlYyPK7gTh8Cu3hFVObV357ufPT0VW3gkg1TYxQDy%2FKhrskbixuR216rWHKndW8AOt163Idh4uwOIL8m7lB2qFUIMyOOXbuww5ACxtcC429UlL84HEUKaf2VywO1BU2dfEuEqgwaca%2FNBz&X-Amz-Signature=2749ba1464c81cae1347e5a823e0bf5594783a17d0e593bf15856d5c48869a42&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
