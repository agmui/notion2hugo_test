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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM46A7JB%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T132440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFeRhYUmPWGDI%2BuWDUr3ixrjKUD2R5s6x%2FlXnx9ZNrvAIgPC5BeaAD%2Fd09lRWHCxAepwDoNue4EDjlsXLi3KKajNUqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP93qlHHOsdEM4yE%2BSrcA%2BfwTXa96eto4IPG63iM%2Fp0Ez6JDzMwder20FZ6x2N9jwLl%2F7DIggIYuRxwDl%2BKuU%2FnXbC8xHVw4mjihLxl11Q8m7yg90rOxhQy6tZMJ2XcuEJT8VFCZ5myDMeIN5qANtsER%2B5QGqcx%2FBNuipNeTi3miAxlZYqlI9Km3cTQNa34tejmwfaC1I1zQzvEgbohm1MKM4UJ%2Bt0Ee%2Bo3%2BT53XEnpdOlKrw1vrpHF7nMTBfL3LurCrGOCOBfTGsJ%2B874pgvpGDIbz4k0nqrpOTSq9JH4y%2FSC2MJlNQ%2FL4v7lHDfHfoPubF1Pr3apxZZaoQAYSUIZjCzMO9JTFb1UREvIAuypZVnW7%2BbHWpGmDTd0QeoDvR9H1YXm1Wd3D8%2BXKUdvScUiMNwXnAD1FEVown8LArkuE54wX6%2BGQ4HRfwKTN0zBS%2BhPimbhW%2Blr45SmBAlGMcCeItTDRUvyHCiAJTEKrz4x6Lm%2FwM%2FnoaDlRLrljM6TdUm2efPLQ7awFaw1Sfx2ucA5qTpvVBQCGCqP6ADem%2F1yr00WBy4pad595SliyeQBKIOjZFvB4YAU%2FMJAFipg2DCNq%2F%2FKeEPKWIaI2lxhoN7cE9Dz0xJdvDw0Zpz5SMT79R0pNfDpmoLs4Q%2BV2IMOadm8IGOqUBHPmHFJcdXZtZM2x6P%2F47YaGYCb%2FTyeDW5tDhpFMUOD3lUdioLxxdj4ffvpiH7dyVewy9jqJyzlPZD5pxZCpMxqRTNPkAkyQqEd1nKHw2iX84YW21mKPTvk%2FOE6PfLryNE2YBB1gg2nxEoaiDgWGPg8etcE19WGhqh4nFaTKE5I7qZ9UehyVyYsfaN3n1yLwIsQiiMQ5HIM%2Bvwcn8xrIMF1MACPFo&X-Amz-Signature=77579d453a6f3618fc3c966716bff0becac18fe0b257d1d9aed5d2d3f56e8204&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM46A7JB%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T132440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFeRhYUmPWGDI%2BuWDUr3ixrjKUD2R5s6x%2FlXnx9ZNrvAIgPC5BeaAD%2Fd09lRWHCxAepwDoNue4EDjlsXLi3KKajNUqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP93qlHHOsdEM4yE%2BSrcA%2BfwTXa96eto4IPG63iM%2Fp0Ez6JDzMwder20FZ6x2N9jwLl%2F7DIggIYuRxwDl%2BKuU%2FnXbC8xHVw4mjihLxl11Q8m7yg90rOxhQy6tZMJ2XcuEJT8VFCZ5myDMeIN5qANtsER%2B5QGqcx%2FBNuipNeTi3miAxlZYqlI9Km3cTQNa34tejmwfaC1I1zQzvEgbohm1MKM4UJ%2Bt0Ee%2Bo3%2BT53XEnpdOlKrw1vrpHF7nMTBfL3LurCrGOCOBfTGsJ%2B874pgvpGDIbz4k0nqrpOTSq9JH4y%2FSC2MJlNQ%2FL4v7lHDfHfoPubF1Pr3apxZZaoQAYSUIZjCzMO9JTFb1UREvIAuypZVnW7%2BbHWpGmDTd0QeoDvR9H1YXm1Wd3D8%2BXKUdvScUiMNwXnAD1FEVown8LArkuE54wX6%2BGQ4HRfwKTN0zBS%2BhPimbhW%2Blr45SmBAlGMcCeItTDRUvyHCiAJTEKrz4x6Lm%2FwM%2FnoaDlRLrljM6TdUm2efPLQ7awFaw1Sfx2ucA5qTpvVBQCGCqP6ADem%2F1yr00WBy4pad595SliyeQBKIOjZFvB4YAU%2FMJAFipg2DCNq%2F%2FKeEPKWIaI2lxhoN7cE9Dz0xJdvDw0Zpz5SMT79R0pNfDpmoLs4Q%2BV2IMOadm8IGOqUBHPmHFJcdXZtZM2x6P%2F47YaGYCb%2FTyeDW5tDhpFMUOD3lUdioLxxdj4ffvpiH7dyVewy9jqJyzlPZD5pxZCpMxqRTNPkAkyQqEd1nKHw2iX84YW21mKPTvk%2FOE6PfLryNE2YBB1gg2nxEoaiDgWGPg8etcE19WGhqh4nFaTKE5I7qZ9UehyVyYsfaN3n1yLwIsQiiMQ5HIM%2Bvwcn8xrIMF1MACPFo&X-Amz-Signature=cf3e27bdc9db60f80fa22ec4dad21e2c5b6d0e543c5cbb5daf71812b45647132&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM46A7JB%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T132440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFeRhYUmPWGDI%2BuWDUr3ixrjKUD2R5s6x%2FlXnx9ZNrvAIgPC5BeaAD%2Fd09lRWHCxAepwDoNue4EDjlsXLi3KKajNUqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP93qlHHOsdEM4yE%2BSrcA%2BfwTXa96eto4IPG63iM%2Fp0Ez6JDzMwder20FZ6x2N9jwLl%2F7DIggIYuRxwDl%2BKuU%2FnXbC8xHVw4mjihLxl11Q8m7yg90rOxhQy6tZMJ2XcuEJT8VFCZ5myDMeIN5qANtsER%2B5QGqcx%2FBNuipNeTi3miAxlZYqlI9Km3cTQNa34tejmwfaC1I1zQzvEgbohm1MKM4UJ%2Bt0Ee%2Bo3%2BT53XEnpdOlKrw1vrpHF7nMTBfL3LurCrGOCOBfTGsJ%2B874pgvpGDIbz4k0nqrpOTSq9JH4y%2FSC2MJlNQ%2FL4v7lHDfHfoPubF1Pr3apxZZaoQAYSUIZjCzMO9JTFb1UREvIAuypZVnW7%2BbHWpGmDTd0QeoDvR9H1YXm1Wd3D8%2BXKUdvScUiMNwXnAD1FEVown8LArkuE54wX6%2BGQ4HRfwKTN0zBS%2BhPimbhW%2Blr45SmBAlGMcCeItTDRUvyHCiAJTEKrz4x6Lm%2FwM%2FnoaDlRLrljM6TdUm2efPLQ7awFaw1Sfx2ucA5qTpvVBQCGCqP6ADem%2F1yr00WBy4pad595SliyeQBKIOjZFvB4YAU%2FMJAFipg2DCNq%2F%2FKeEPKWIaI2lxhoN7cE9Dz0xJdvDw0Zpz5SMT79R0pNfDpmoLs4Q%2BV2IMOadm8IGOqUBHPmHFJcdXZtZM2x6P%2F47YaGYCb%2FTyeDW5tDhpFMUOD3lUdioLxxdj4ffvpiH7dyVewy9jqJyzlPZD5pxZCpMxqRTNPkAkyQqEd1nKHw2iX84YW21mKPTvk%2FOE6PfLryNE2YBB1gg2nxEoaiDgWGPg8etcE19WGhqh4nFaTKE5I7qZ9UehyVyYsfaN3n1yLwIsQiiMQ5HIM%2Bvwcn8xrIMF1MACPFo&X-Amz-Signature=3cd9855adac12b78b4c2faec2022d7e03e6864d65bdeccaa159c669a3d42b2bb&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AUCTRNQ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T132445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAmvm3urbgjPNaI4O5hkeP4gtIUyRr3H6pWc%2BqGGRmlxAiAswIV2ZXtzEJdWOjCOrOlbZP4l2kQQ%2BI4lKc9HNoAxHiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BEhpy4YaPdQFa8qBKtwDge57L9JeTaqfXSM4khIPbhqacgTGKZBuLjPQf%2F4i0YEvlBQeB4M%2B1Gnr3bBpLQdKJgd6J6wmAWBP%2B02Hq4XsMfCWkhyZajDEUqY7L2WOaMgNXTcAME4HnytLwRMc0TCMDYSepI48gJgIfmugEGGlrBInjjBaDN6n24ipHhZl49Gny0JMTYyCd4ORuc443dry0wtno8whD5amaoUrLz%2BRbH0BlEHPD31A86ckU4NETywPF5R5KGRZjmolXmdB%2FR2AvWl1TO3N87iPFPZW%2BYSsTabdhxOSZn6R40hxDMl6gmGcd2cfO%2BrqAncA1hxB5dhO0F4vfgPnw24hDj4uUYoofZcjiXOp7amOnwurvBONkqVzgvh8Ulb1bEbkyTGYgqnjm3GwFn3EThCdZ6HXNnnGkrn0T%2Bkd6ON%2Fk3Odoj8bkswwh2bTPCWAwWYXgB30Vc9SR8mBY6O9Qw9aSQ3GMEuSXzOiModGq8dS1Ue1lWvZk1%2BMiPsz2LkivjMHTf53iGbomRS%2B5rLVeTGvRSgIGfP10ugVOY8vngG33uVqYcUL2LKey5Qh9oaZahZT70rOG6qq3Cagr7eVJi9TWx9x2nLlSfp%2FLoX0KFBpA1%2BqIzkkp5E7fMOu1H7%2FRXF4HiEwg56bwgY6pgHKfRGGZuj8yaxbr%2FtCMVRkLaDn7otarePIjdleIzWz%2FY51b1K6Qexy03Vyy7se4EZfmijXidrawI46PGNxE10v83e%2Brzj3iJ7iFHqitHLe5RnPXX009e50skpZ0%2BVaqx83N3oXnSD7QXuQuqiZnhOSYbVs5%2BEOcH%2FSDhukhRr3ivyjYUGhU0Vawrz2zG8dhNs%2BEL9cRItxKRySR871nm%2BNoG4mnaKf&X-Amz-Signature=1bf471e175b228a8bdfb851a745928f5104d65392308bf24540f228f45f042e7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REQQMJCI%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T132445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD08pAyVKNPSylKqplt6G94%2F4d6j4VvTmnBpqcOJmlKGAIhAMPWJA9RrtGt%2F4c9Uoi8MXrU9gLvmm8%2Fns%2FMSQ%2BJPvHYKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwNRWVBluBgdYFLvMq3APxlMXJiMfPdiTdl1OQapZ8322Sh%2Fz7ZJZxHvBGhX5981Y19j3jpfUErQdeXlMuvYG94ZKvZcy%2Ba85Vgu2j8H%2FllDltfbPWZWL58yCCCxzaHcf0P8EoB%2BctK9GJnv%2FM9exw5B5Gv3Ihe1CuYSkE2ZC4FNzINcYuIjL9xGvbAurqRtaY9J8RF%2BxlYG0MUooiNu79KP0ZDqaCFRhOPJqr0s8dJcpFxKsz2vEJykbQ1CJa31hsDeQT1jltk20JnMmweCFuG2Hnf0rXWe1VScwZ2qOh%2Fbvsc1SxEfQJDArIKMEZInIuahbOEuYAhyaEqTp5SLn6mVogOdNzVuFH5ezo6%2B5uX8UlCHfxu%2B0qp2sZ%2BGy8NHo6XoZRIbura2qN3aQ3WBCQDk5McOEgqVfzzbiVr%2BzRNB%2BGq4umG0xlQ2qzJ1TsgEaVD3g0epIbaTis7ewm4HYjZ7SzIgr1ubdyjawoebEjEsOzX6lGUfupPaAvuczLDWNVuqUe2wcUzz2H6OqLVWsXht%2BbZo0r3s%2FjlF8dPIpyKQUBrhD27cejT8uIvRzhX6dzdo6L7zBlEo%2B%2BH2Zea%2BjTo0dyt%2F3PEqFiy9XsL1awzHEGWJmlum0MP3gKXQyv4QMV%2BE2AUf4pCDEmYjCdnpvCBjqkAYrDJbrBldJL2iv7lr%2FAEnCQxnjNaPrL6SZyrWZ4qSPNx5O071l5g9ZDIgd079r1fmo1TJK9iT8OYXSY7lqe9aveacyC2gR8njrWXLqXxsatdvUOH6sYF7uVXwu%2BOAz9P3nZx5eOJlDLc4QzXrvewUOtOJM%2F6%2F5MGpYetz1452QGnnlRFdOR9KyjsCW5AUFg5BlSPwXaDVre9i%2BHCTrbglqd5mCL&X-Amz-Signature=9161ad365ea466a6975cc67d25b92fffd1cad87b8788d161cc8a1ea3993473c1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM46A7JB%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T132440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFeRhYUmPWGDI%2BuWDUr3ixrjKUD2R5s6x%2FlXnx9ZNrvAIgPC5BeaAD%2Fd09lRWHCxAepwDoNue4EDjlsXLi3KKajNUqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP93qlHHOsdEM4yE%2BSrcA%2BfwTXa96eto4IPG63iM%2Fp0Ez6JDzMwder20FZ6x2N9jwLl%2F7DIggIYuRxwDl%2BKuU%2FnXbC8xHVw4mjihLxl11Q8m7yg90rOxhQy6tZMJ2XcuEJT8VFCZ5myDMeIN5qANtsER%2B5QGqcx%2FBNuipNeTi3miAxlZYqlI9Km3cTQNa34tejmwfaC1I1zQzvEgbohm1MKM4UJ%2Bt0Ee%2Bo3%2BT53XEnpdOlKrw1vrpHF7nMTBfL3LurCrGOCOBfTGsJ%2B874pgvpGDIbz4k0nqrpOTSq9JH4y%2FSC2MJlNQ%2FL4v7lHDfHfoPubF1Pr3apxZZaoQAYSUIZjCzMO9JTFb1UREvIAuypZVnW7%2BbHWpGmDTd0QeoDvR9H1YXm1Wd3D8%2BXKUdvScUiMNwXnAD1FEVown8LArkuE54wX6%2BGQ4HRfwKTN0zBS%2BhPimbhW%2Blr45SmBAlGMcCeItTDRUvyHCiAJTEKrz4x6Lm%2FwM%2FnoaDlRLrljM6TdUm2efPLQ7awFaw1Sfx2ucA5qTpvVBQCGCqP6ADem%2F1yr00WBy4pad595SliyeQBKIOjZFvB4YAU%2FMJAFipg2DCNq%2F%2FKeEPKWIaI2lxhoN7cE9Dz0xJdvDw0Zpz5SMT79R0pNfDpmoLs4Q%2BV2IMOadm8IGOqUBHPmHFJcdXZtZM2x6P%2F47YaGYCb%2FTyeDW5tDhpFMUOD3lUdioLxxdj4ffvpiH7dyVewy9jqJyzlPZD5pxZCpMxqRTNPkAkyQqEd1nKHw2iX84YW21mKPTvk%2FOE6PfLryNE2YBB1gg2nxEoaiDgWGPg8etcE19WGhqh4nFaTKE5I7qZ9UehyVyYsfaN3n1yLwIsQiiMQ5HIM%2Bvwcn8xrIMF1MACPFo&X-Amz-Signature=08572134559cf5470a6328217ee5fbc987589509fe87e191d5b2cbbf3b416171&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
