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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FDMN2LN%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T061332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQD7ZfHaLkR6CUtMIahVaR7o3S0MMhrjhWqRVF0XJaeuBgIgDHjdVvsRuF3EjPo%2FrYvHZtUPpJHCW%2F4sE6LvX4bQ3AsqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuUyU1jmEJ85SPpQCrcA7vVi5Nropt8IX1ry5hs%2BtkWXZf1sR6TzP5VNSutWHTqlRIFVOIRpQxtWd5y2fAO0p%2FHMOZZ5hUZfp0Qm%2BmgRXK8W%2BdLIZJoq8645fuPhV%2BGID%2BbmJ9tC4HLw273%2FJpVmG2FfF2BzrNEw7TlxeRMbZCOCIAQ%2FHozYdGO5UYjkRPcvHVR6Tne8cZ1qsmkJC%2Bi8dpCsFCO5WT6gHxbWH7o77WFl6cOxxJj%2FJQdCckYPLNqP0NYD5iLOWfCA831%2FKi4lV3%2Bkn6Q26Yalu%2BfN%2FJaat3j%2FW5%2BTVWTnJ7d3nj7aBsbGHyQZ8yPdGqiH81fcdicnUlEpPjq7MwRVOtmLmm%2Fpu5Qo7SlVZ38Ui2hKaa4k16Z0YUFT0Ztn0Eqd%2FaMFkaUkC9kwoCYpdvLtPr6wPjR7CaFso0kkNKo5icsQOKjQA4ECfWf3JOlszmw%2FuMt8rA00p2SaUVcVqaIXC5VQ%2Biufmxyqx8GjSZaLBwaG3vXHst9vCk729zU6OdO5bZ7Pb4vnqCfCRqcpNrrk1lLRSwoT7EFYT%2BFyieyw2ELPUrpBs5%2BKaGu2R84IfjUwm78vUHTkXhyZmv9KJGqdJskxqzmIZk9GSUnngUBTnasAga2MNLLSaMZeQP9tPvHw2QnMKiC%2BsEGOqUB%2B48jW92QzUOdgp0uMHe%2FisfHNUTj%2FxXLJHZQ0Jth8Oyjaq4lvqjgFv2rRQZfUfroDfMa2NF7nc3HlFGD2kjLQldAFAfJB07cRIMi%2BReNe1rXTSEiw0Rbm9xIB8Btv42Z7aO9dMIngk1pWNRiw1eapuICPJWNL1xY0fVfE7JN9tyEzvGvKgXCwVG3n028zimZUT2sfveGvr8dUSiEvxMMEXmmpPY3&X-Amz-Signature=6f67541ffb2615c7444377fe320c83eddfb70ce396168f637a998451e1dc58db&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FDMN2LN%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T061332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQD7ZfHaLkR6CUtMIahVaR7o3S0MMhrjhWqRVF0XJaeuBgIgDHjdVvsRuF3EjPo%2FrYvHZtUPpJHCW%2F4sE6LvX4bQ3AsqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuUyU1jmEJ85SPpQCrcA7vVi5Nropt8IX1ry5hs%2BtkWXZf1sR6TzP5VNSutWHTqlRIFVOIRpQxtWd5y2fAO0p%2FHMOZZ5hUZfp0Qm%2BmgRXK8W%2BdLIZJoq8645fuPhV%2BGID%2BbmJ9tC4HLw273%2FJpVmG2FfF2BzrNEw7TlxeRMbZCOCIAQ%2FHozYdGO5UYjkRPcvHVR6Tne8cZ1qsmkJC%2Bi8dpCsFCO5WT6gHxbWH7o77WFl6cOxxJj%2FJQdCckYPLNqP0NYD5iLOWfCA831%2FKi4lV3%2Bkn6Q26Yalu%2BfN%2FJaat3j%2FW5%2BTVWTnJ7d3nj7aBsbGHyQZ8yPdGqiH81fcdicnUlEpPjq7MwRVOtmLmm%2Fpu5Qo7SlVZ38Ui2hKaa4k16Z0YUFT0Ztn0Eqd%2FaMFkaUkC9kwoCYpdvLtPr6wPjR7CaFso0kkNKo5icsQOKjQA4ECfWf3JOlszmw%2FuMt8rA00p2SaUVcVqaIXC5VQ%2Biufmxyqx8GjSZaLBwaG3vXHst9vCk729zU6OdO5bZ7Pb4vnqCfCRqcpNrrk1lLRSwoT7EFYT%2BFyieyw2ELPUrpBs5%2BKaGu2R84IfjUwm78vUHTkXhyZmv9KJGqdJskxqzmIZk9GSUnngUBTnasAga2MNLLSaMZeQP9tPvHw2QnMKiC%2BsEGOqUB%2B48jW92QzUOdgp0uMHe%2FisfHNUTj%2FxXLJHZQ0Jth8Oyjaq4lvqjgFv2rRQZfUfroDfMa2NF7nc3HlFGD2kjLQldAFAfJB07cRIMi%2BReNe1rXTSEiw0Rbm9xIB8Btv42Z7aO9dMIngk1pWNRiw1eapuICPJWNL1xY0fVfE7JN9tyEzvGvKgXCwVG3n028zimZUT2sfveGvr8dUSiEvxMMEXmmpPY3&X-Amz-Signature=ab09ff9e862fe5d2603a1ec2b596533750440cff921ed09889937f27a0e4cf5d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FDMN2LN%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T061331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQD7ZfHaLkR6CUtMIahVaR7o3S0MMhrjhWqRVF0XJaeuBgIgDHjdVvsRuF3EjPo%2FrYvHZtUPpJHCW%2F4sE6LvX4bQ3AsqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuUyU1jmEJ85SPpQCrcA7vVi5Nropt8IX1ry5hs%2BtkWXZf1sR6TzP5VNSutWHTqlRIFVOIRpQxtWd5y2fAO0p%2FHMOZZ5hUZfp0Qm%2BmgRXK8W%2BdLIZJoq8645fuPhV%2BGID%2BbmJ9tC4HLw273%2FJpVmG2FfF2BzrNEw7TlxeRMbZCOCIAQ%2FHozYdGO5UYjkRPcvHVR6Tne8cZ1qsmkJC%2Bi8dpCsFCO5WT6gHxbWH7o77WFl6cOxxJj%2FJQdCckYPLNqP0NYD5iLOWfCA831%2FKi4lV3%2Bkn6Q26Yalu%2BfN%2FJaat3j%2FW5%2BTVWTnJ7d3nj7aBsbGHyQZ8yPdGqiH81fcdicnUlEpPjq7MwRVOtmLmm%2Fpu5Qo7SlVZ38Ui2hKaa4k16Z0YUFT0Ztn0Eqd%2FaMFkaUkC9kwoCYpdvLtPr6wPjR7CaFso0kkNKo5icsQOKjQA4ECfWf3JOlszmw%2FuMt8rA00p2SaUVcVqaIXC5VQ%2Biufmxyqx8GjSZaLBwaG3vXHst9vCk729zU6OdO5bZ7Pb4vnqCfCRqcpNrrk1lLRSwoT7EFYT%2BFyieyw2ELPUrpBs5%2BKaGu2R84IfjUwm78vUHTkXhyZmv9KJGqdJskxqzmIZk9GSUnngUBTnasAga2MNLLSaMZeQP9tPvHw2QnMKiC%2BsEGOqUB%2B48jW92QzUOdgp0uMHe%2FisfHNUTj%2FxXLJHZQ0Jth8Oyjaq4lvqjgFv2rRQZfUfroDfMa2NF7nc3HlFGD2kjLQldAFAfJB07cRIMi%2BReNe1rXTSEiw0Rbm9xIB8Btv42Z7aO9dMIngk1pWNRiw1eapuICPJWNL1xY0fVfE7JN9tyEzvGvKgXCwVG3n028zimZUT2sfveGvr8dUSiEvxMMEXmmpPY3&X-Amz-Signature=2aafbbd6520e6b123f056da8cc6f0a3289bd8bc0aa45349bf35275b171be9bae&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSVHQUR3%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T061335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIEhMfEhHc3Yf%2F1D3rzs2gShxuLfEiO8zyRwjWaCUYjvOAiB32m0Un4G7xzgtlaaA80QFjamRU2%2B2GPtc5%2BSjJj7OqCqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJObGIERKSz8vSEkkKtwDS2iWCLJ05gRT8xrKXLsnu%2FQ2xVkt6TwJEhdggl2Kd3VD5te3MAc%2BEkt90XtXToMsPlqFyQhxxYADSZuxY6u%2Fp1AGti2M7rFt5j%2FrYJ2wXM1l7DTswbe10WzCcKcFPxHJdWu7OjXZ8w0MRxiXS9Owch%2F%2BY3ditJjFP0DgjAPOnoso2t3oqQ4J9%2BbqcgiLYIgRkzfKvHZqGTZm%2F68qZWsI%2FSiVrmTm0xvKOAstr6UJt4%2FNBvXRNp7ustqjPdskOg0BOJdRFuXG5qi5aefBIkEIL9meOJ7u%2Fr5F0MhLjYQWjqxGMiwp84vNv8PpiRgZd8LeoGgyM%2BIrnsWKQVUzHDg9mGGuSGt7zNr523ypeCgIdPAd98ehbJxklUijPdGNwE6uISs4KCy7YwrWpkH1LfUFnX%2BJE9fHYthp1xKRkGGv%2BtAImHDtS2iGGvcg5VSJUkV39Pu0T%2Be3sRi%2B1EODQwlv%2BD2vYB2NEb%2Fk%2FwSM9QJCxyPqFatf83Ih9IRJMFQ1Sw0iGMeuJ97M8VeJ9rhqkM0UHnFHHnPIicYbqm%2FB26oAoxWr6xOukXk0Xd6ZTwMt1K9aKzb9Rd1JMV98X3Ik9fXim%2BieA%2BX96Q%2FJdMgMmm1qcbvdXpxVA4w51pV5YLkw34H6wQY6pgFbxW7NZjwOEa2FlyXT2EQLik9sWJzq827cS%2FN6HuBglOGpLy9SiU0KPrkJ4PD2fbNmsoPOQAssH%2BbuaJ%2FSgP11OhqypViH0fm8fIj6qoxYWXWsiV0vDHyGYdUiuvu3gzKUe5OF67KVJw64z3PNK5pP6L5ScRK19i5l4nrtWl4iu8%2FhZc8DtSQ7U0YLJ0YVxTDu9x00kG9sSK7Lszw9fYeWp%2FbbqbOJ&X-Amz-Signature=5f22a6256ebbcf8c35f9292686a64a5d86380b3492909eeb1c322d4b98cbd6a2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAINSNKR%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T061335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIEx0nSMJef8j6okgpTILloaVcJu7lB32pSKFjuPlMr3sAiA3aFXVH8ddEa4yCE5r4chg%2FuptJJ%2Bh0N%2F0l1ZZttX8DyqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsKNhcmx6CBnZ1REjKtwDQ0FpAS5abScMErP4IE7laQwSVSLGiQRqqRpfpLiprw1BObVe4C0jUKQ5jEjfV3GUp6vNMNqyBRDWSBO6lRciKvUYctPpyEF5Ht1F%2Be0VFVcHRwjrACZjDl2FnLysYE46pifci%2BiymAC%2BjVQcYffyMPB1HePmQHyySLR48wpkZMN6IjjC9%2BvrTHXFQvu8y1CfUyc0Czq%2BNfaeHIMUaUvkuEVtYjOkEMYT5R1tIkc7uPY%2F5LzHAkUzcjAYR3kwZMuOrG929bhSluK3cTC8qUEwVvxdgyIjH3OIT%2BSoJGDB2635aM5F%2B07fmGjg7yQWHoSFNLkX1ZuTfz7pvYc3XRHu5i8aPzSiUuClXemy0j3vurl5QTxn7S%2Bp8AjRzBawpJhoNXUhlKlU6Y0awEXjWgYtk%2FEvME%2F5YCKsSpIAPIu0bnttRflLvKLWFSF4UFj2wdkohzYhbPKufO5w2UZ%2FM0hHlS3G2a1qrBEupWO2bKEx7sVH1%2FWZKEScREG4F2TToQLTITVmpJ9mgzSbd1IUnrLkIKC0r4KlyWSQom%2B84QH6hosFuJaBzpiMqNRVzkAFXP469O7q7EfoILY%2BfUWl9pdLj1of7toDsTknt%2F%2FKN7OvJhUhUTHspsxGB0Z0IkcwgIL6wQY6pgERbQc4JwhCsigertzO8BJhEI6EilBzplJFPibJbM6USehlrOeHFxOwmVBbkJX6iRB3vXuzgUlY332IZBLSXpuF%2BCRXNumbeCbJapST5WQ50PeLwOq6UMWJEpS%2BHUgWvenc4KnEYx3%2FPRQDutitEsOZudORBRwn9ZOKI3AAMa0W8ucnYZRTeEdyqAgKncFwsxHOftjWMG9hAE4vT2ShuOjzHrMdGAie&X-Amz-Signature=554d011924ba757904e0c58555ad19f6124fea7a2d16d36236fbfbd5c0bc3a20&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FDMN2LN%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T061332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQD7ZfHaLkR6CUtMIahVaR7o3S0MMhrjhWqRVF0XJaeuBgIgDHjdVvsRuF3EjPo%2FrYvHZtUPpJHCW%2F4sE6LvX4bQ3AsqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuUyU1jmEJ85SPpQCrcA7vVi5Nropt8IX1ry5hs%2BtkWXZf1sR6TzP5VNSutWHTqlRIFVOIRpQxtWd5y2fAO0p%2FHMOZZ5hUZfp0Qm%2BmgRXK8W%2BdLIZJoq8645fuPhV%2BGID%2BbmJ9tC4HLw273%2FJpVmG2FfF2BzrNEw7TlxeRMbZCOCIAQ%2FHozYdGO5UYjkRPcvHVR6Tne8cZ1qsmkJC%2Bi8dpCsFCO5WT6gHxbWH7o77WFl6cOxxJj%2FJQdCckYPLNqP0NYD5iLOWfCA831%2FKi4lV3%2Bkn6Q26Yalu%2BfN%2FJaat3j%2FW5%2BTVWTnJ7d3nj7aBsbGHyQZ8yPdGqiH81fcdicnUlEpPjq7MwRVOtmLmm%2Fpu5Qo7SlVZ38Ui2hKaa4k16Z0YUFT0Ztn0Eqd%2FaMFkaUkC9kwoCYpdvLtPr6wPjR7CaFso0kkNKo5icsQOKjQA4ECfWf3JOlszmw%2FuMt8rA00p2SaUVcVqaIXC5VQ%2Biufmxyqx8GjSZaLBwaG3vXHst9vCk729zU6OdO5bZ7Pb4vnqCfCRqcpNrrk1lLRSwoT7EFYT%2BFyieyw2ELPUrpBs5%2BKaGu2R84IfjUwm78vUHTkXhyZmv9KJGqdJskxqzmIZk9GSUnngUBTnasAga2MNLLSaMZeQP9tPvHw2QnMKiC%2BsEGOqUB%2B48jW92QzUOdgp0uMHe%2FisfHNUTj%2FxXLJHZQ0Jth8Oyjaq4lvqjgFv2rRQZfUfroDfMa2NF7nc3HlFGD2kjLQldAFAfJB07cRIMi%2BReNe1rXTSEiw0Rbm9xIB8Btv42Z7aO9dMIngk1pWNRiw1eapuICPJWNL1xY0fVfE7JN9tyEzvGvKgXCwVG3n028zimZUT2sfveGvr8dUSiEvxMMEXmmpPY3&X-Amz-Signature=8abcfda72924585f3a94191861a80f4b2ea668ad9ab6b5d10630f04b9bb0f936&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
