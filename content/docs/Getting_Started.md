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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2H3FQI6%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T230759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxf%2FrkMhFd%2FkhADtgDNtY%2FB%2BzNp89W1HlCKCONfJ3fVwIhAIlrAWxlrVStngnmtj17Ux734O4xi8HNhx9ay1dYfgJ6KogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5q0NAWu8isNVBpqcq3AP30CotDbKBUNbgrCXZ3o4K4C1O3mkdILOfX6hk0ked1uRGK%2FPSF34b%2Bk0SOT9yAdLUekFDJy%2BBwLa5lOqz%2FFeEaXyt2WWaQ8a0uWj3FqBAD%2BvcX7zfKV6JzzCuc7tI35NwTNrW9w%2Fgyw24kun%2Fl%2BnCYAb7639gKpOIHJpHQDknXL8XTcSo5Jhel2SyBqZpQiILTwUBE8i%2FXZrtYerIhIDanP0hZr9A0vMBzP%2BAM0TKzrZ%2BKRn6NRY3nZeabVfRgZngwKUUWiwpvGxmddEnSQ3TE2uTdCwthxi0F2Tm4D670nPDvAp7%2Bfc6yozm4NyiujT1o85aax%2BZgOKBoDM1JaM2dvhhGuLR%2Bz%2FJOykMlbd%2BwiNInwu4NSRd16VLW6l1GDpt2Un1zxMr0giQjh6iQGMmYZOK8nEhSH3Kloc8UTyDdcBH%2FCdqZPed1Kj2Du6Tc12e8KRx2tvTFYV2af92qS2A%2Bg283QFhTZEYUIs5J8ojrBEIJO2zHH80UfzNX7mqAoLB52g6TN5O5Apfn4NcrwBMexNCIzsY%2BArPhykTl5nye1DQnGHFwnAzsIxjZ6atG3kigutTqIHZTSxODLwFGNUsO1FdXmObuGhHGXw7R6ZjsHHKNJUGJGmN%2BpbaXzCype3BBjqkAU3d8GvICDJsqJkPGtCNskhzYsX0Egplqx3xqIvJf9yecRkHBraMI%2Ftu5Pc58EQfjRg%2FXSwXDuUK4WroSW4Tk2Nk4M0sLn6Ls7YmOUmDY6FKnDLloLMkdgjpQmtAYK8asSMBvT60JlCt1dvjH04HagTXPJq8F%2FF1NPUTQiiWugVTtfe2%2Fnkncwfz2S3jCRnPyqQjCJbsjCP0oJvf7toWsM8WfMgK&X-Amz-Signature=abff23b4069fca0991b61d6f749624e9f6742830a3f2000bb21d56b79488d293&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2H3FQI6%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T230759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxf%2FrkMhFd%2FkhADtgDNtY%2FB%2BzNp89W1HlCKCONfJ3fVwIhAIlrAWxlrVStngnmtj17Ux734O4xi8HNhx9ay1dYfgJ6KogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5q0NAWu8isNVBpqcq3AP30CotDbKBUNbgrCXZ3o4K4C1O3mkdILOfX6hk0ked1uRGK%2FPSF34b%2Bk0SOT9yAdLUekFDJy%2BBwLa5lOqz%2FFeEaXyt2WWaQ8a0uWj3FqBAD%2BvcX7zfKV6JzzCuc7tI35NwTNrW9w%2Fgyw24kun%2Fl%2BnCYAb7639gKpOIHJpHQDknXL8XTcSo5Jhel2SyBqZpQiILTwUBE8i%2FXZrtYerIhIDanP0hZr9A0vMBzP%2BAM0TKzrZ%2BKRn6NRY3nZeabVfRgZngwKUUWiwpvGxmddEnSQ3TE2uTdCwthxi0F2Tm4D670nPDvAp7%2Bfc6yozm4NyiujT1o85aax%2BZgOKBoDM1JaM2dvhhGuLR%2Bz%2FJOykMlbd%2BwiNInwu4NSRd16VLW6l1GDpt2Un1zxMr0giQjh6iQGMmYZOK8nEhSH3Kloc8UTyDdcBH%2FCdqZPed1Kj2Du6Tc12e8KRx2tvTFYV2af92qS2A%2Bg283QFhTZEYUIs5J8ojrBEIJO2zHH80UfzNX7mqAoLB52g6TN5O5Apfn4NcrwBMexNCIzsY%2BArPhykTl5nye1DQnGHFwnAzsIxjZ6atG3kigutTqIHZTSxODLwFGNUsO1FdXmObuGhHGXw7R6ZjsHHKNJUGJGmN%2BpbaXzCype3BBjqkAU3d8GvICDJsqJkPGtCNskhzYsX0Egplqx3xqIvJf9yecRkHBraMI%2Ftu5Pc58EQfjRg%2FXSwXDuUK4WroSW4Tk2Nk4M0sLn6Ls7YmOUmDY6FKnDLloLMkdgjpQmtAYK8asSMBvT60JlCt1dvjH04HagTXPJq8F%2FF1NPUTQiiWugVTtfe2%2Fnkncwfz2S3jCRnPyqQjCJbsjCP0oJvf7toWsM8WfMgK&X-Amz-Signature=f197fbb8094675b07bc95b4bc25c1e8727fb2c8b6416ec3c3cd4bc90b16f4847&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2H3FQI6%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T230759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxf%2FrkMhFd%2FkhADtgDNtY%2FB%2BzNp89W1HlCKCONfJ3fVwIhAIlrAWxlrVStngnmtj17Ux734O4xi8HNhx9ay1dYfgJ6KogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5q0NAWu8isNVBpqcq3AP30CotDbKBUNbgrCXZ3o4K4C1O3mkdILOfX6hk0ked1uRGK%2FPSF34b%2Bk0SOT9yAdLUekFDJy%2BBwLa5lOqz%2FFeEaXyt2WWaQ8a0uWj3FqBAD%2BvcX7zfKV6JzzCuc7tI35NwTNrW9w%2Fgyw24kun%2Fl%2BnCYAb7639gKpOIHJpHQDknXL8XTcSo5Jhel2SyBqZpQiILTwUBE8i%2FXZrtYerIhIDanP0hZr9A0vMBzP%2BAM0TKzrZ%2BKRn6NRY3nZeabVfRgZngwKUUWiwpvGxmddEnSQ3TE2uTdCwthxi0F2Tm4D670nPDvAp7%2Bfc6yozm4NyiujT1o85aax%2BZgOKBoDM1JaM2dvhhGuLR%2Bz%2FJOykMlbd%2BwiNInwu4NSRd16VLW6l1GDpt2Un1zxMr0giQjh6iQGMmYZOK8nEhSH3Kloc8UTyDdcBH%2FCdqZPed1Kj2Du6Tc12e8KRx2tvTFYV2af92qS2A%2Bg283QFhTZEYUIs5J8ojrBEIJO2zHH80UfzNX7mqAoLB52g6TN5O5Apfn4NcrwBMexNCIzsY%2BArPhykTl5nye1DQnGHFwnAzsIxjZ6atG3kigutTqIHZTSxODLwFGNUsO1FdXmObuGhHGXw7R6ZjsHHKNJUGJGmN%2BpbaXzCype3BBjqkAU3d8GvICDJsqJkPGtCNskhzYsX0Egplqx3xqIvJf9yecRkHBraMI%2Ftu5Pc58EQfjRg%2FXSwXDuUK4WroSW4Tk2Nk4M0sLn6Ls7YmOUmDY6FKnDLloLMkdgjpQmtAYK8asSMBvT60JlCt1dvjH04HagTXPJq8F%2FF1NPUTQiiWugVTtfe2%2Fnkncwfz2S3jCRnPyqQjCJbsjCP0oJvf7toWsM8WfMgK&X-Amz-Signature=3684545ad2c4bd9ed0bf2c363981df26e3f5d8b82c042c2b260a70229853a059&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6RCR3LX%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXLmAKjEeE17q8ntiIO574%2F8MURwOzE%2FTbJZRzdHwl9AiEA%2FTvHVpPbSHXTdA%2BcZyejYPiHeYNMc0FawIBc6rAhxOwqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHSDtHL6GE7hDeDrbircAx4zsvyMhrfSwhg6KC3VJOiQivC%2BpDixCUxJ6SfozfBJp49%2BzxGBNMEGNASYOVa8%2Fs6vkf37G7Cj0iqxyL%2FWdgmiOVXA%2BQd4T6RTjpNA1linkwFhsK%2Bt3KPClG7cy%2FK9sAdJOyZcP5dtwD5OMP5G0XpsqFj460B3c%2BE5BI7s9exDTCQe6VofvbOnWIdMkZ3E7BoW2Ma8tDrc9sqZkNIwIsfE4SzeVQyBxp3LX75jFKt49yFn5ylB5cKpTPOEaUqOfYRE7y7yxMYDQVswwm8gPozdq%2BIXXiYHT1MAdBMPyT1nJ9%2B%2B%2Fj5NsKKRNeZHyI%2Ba2RFnawkEJ0AJI0nTvXKUy7KS%2BpVpKNzbef8dUl%2BfGMy9yKHx%2BswhLNsCcGZ87ycnOZa199me9GB4mQZHQjt%2FMPiZJ6IjYeqGoF9SeHuenjDJO3fXamsx8WfJPvuX2DY%2BLTnyiruSQzEPptsLSVLmzpzQXDtihkXF3onpEneXNV8wGQaoHAYKy%2FYRqsU8xK8KZF6YIlqgspyb1mLy8i8MzsnPdbCK3vxd6HedAM7%2FR4CobmARTA9dpyxNAaUqZLdSHIKRKQZutId16B4sEVANxWBtaoeYA%2BU4BKWL9gtZS%2F%2FvHqBcGn1R3vvGrTcoMOz07MEGOqUBLZExICTc%2BCFsfTuNKn3t5JuvNhRHlurQ8Bv84bBwSVagn5GoNlV%2BGyfX78xPZWUr6%2FSwSV2q22g%2Bk%2FFduHmRePiy24804D19r0wlwQT2PWGaQghNraErTKwZHXRrK7qE7XF%2Ffu7sZCLmJEu1UfJv5QOi1nOvnWkUzqb83AXq29dUGRU%2FJ1yr0gz5fNXjMM2M7g1ZersQpzZ8ilhO9yVlSUhkNzLd&X-Amz-Signature=d77cfd1e8a227baa4cfeeaff1f568e90fb23a451dc9a545bfd6f5af51ccec6ef&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLV46GMO%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOMT7rnDIhBe24bZn7Ag2R7VVHPqlsxU9%2F0xYehII4ZAiEAjW56lAkQR1N%2B7XFGA9EicDTm3KEj2rXKmIVJY0x86pMqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2BQ6%2Fr0EKIJ59xfVyrcA1LvyAdsT8TUO8ZoUk9niKe9b7iFxf30Jpq0wMcsuUzX6ls2vn56H9%2BlKfzXnS6VC7qhQ69Uai5m2MK5NqhgANJLtrqE%2Fm9muUNOd%2FIHFthrrLZlpIJX1O5Zq6F03F0YWjtX%2Bzjy9Ioy62Wd8RIU%2BGfctBX432s0E%2FtS%2F%2FlQVUyiomCPUXhWIgmKG6cMVv3Mx8yx%2B6NQ%2BviyPGZiXLIrYBwXUW2tZ7d4Iu0ByJUWAFoW9Nz%2BUMuWY6JFdaXdoBBBt70pIGPY16%2BK56YgRaOsZHK2yZNrpDilfx5fcMfKEDtyXj3MAhOIii970ADKTIrG4jmMevXQC%2FeKYP3r25JKrR4B40%2BpmuJAqYCYiaUFO4FpC3p3dYDGAzbiYWl8JKMPfh40EayeYR86nE3gNmvu8gmVYWvxtAcRZpCG8vpEgRVhMjO3ny%2FBpYfYseRhdOS7359fJIJCpm%2Bhf8M9M5H6peo90KpOmUssEclkTZiByYk7Za%2FbYjf7YxbmB9379AiJbXBCzEcyPctKQP3ZFy7O9uyeo73O2G4kXob44NmRoAo8nVLNaafUlAohH2JtpUw8%2FcNvQlNaVdeBjx9skZNqi0ariJqtLc%2FQtU8kI8I94wnw7DDckeJmob1ZJR8qMJKG7sEGOqUB8IE1%2F7Qi9GwDm1G%2Fgqqexe7VOhe2%2BvD45jEpe4DIWH21JCLGTZUjGCmEtWo6hb%2Fc7pThLhQ9LbKl99NSPWL0WwfT%2BJFYEJWU1C0RHU7WMS9q7n9DxArKV%2B6XibQ9PiBwQL8J0Tjl%2FQAZnlTpAuwkaFq7IYML8MN2%2FMCPzw1f8GrcoBBXcczoPnpSgIQCP3un1SxlPZZNUyey7J57KeomqDaDAawJ&X-Amz-Signature=ee17b8dd23c8947f6bd9d2eaae6735b5e20f6c7d97fa9ae064dc71921e0a86c4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2H3FQI6%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T230759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxf%2FrkMhFd%2FkhADtgDNtY%2FB%2BzNp89W1HlCKCONfJ3fVwIhAIlrAWxlrVStngnmtj17Ux734O4xi8HNhx9ay1dYfgJ6KogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5q0NAWu8isNVBpqcq3AP30CotDbKBUNbgrCXZ3o4K4C1O3mkdILOfX6hk0ked1uRGK%2FPSF34b%2Bk0SOT9yAdLUekFDJy%2BBwLa5lOqz%2FFeEaXyt2WWaQ8a0uWj3FqBAD%2BvcX7zfKV6JzzCuc7tI35NwTNrW9w%2Fgyw24kun%2Fl%2BnCYAb7639gKpOIHJpHQDknXL8XTcSo5Jhel2SyBqZpQiILTwUBE8i%2FXZrtYerIhIDanP0hZr9A0vMBzP%2BAM0TKzrZ%2BKRn6NRY3nZeabVfRgZngwKUUWiwpvGxmddEnSQ3TE2uTdCwthxi0F2Tm4D670nPDvAp7%2Bfc6yozm4NyiujT1o85aax%2BZgOKBoDM1JaM2dvhhGuLR%2Bz%2FJOykMlbd%2BwiNInwu4NSRd16VLW6l1GDpt2Un1zxMr0giQjh6iQGMmYZOK8nEhSH3Kloc8UTyDdcBH%2FCdqZPed1Kj2Du6Tc12e8KRx2tvTFYV2af92qS2A%2Bg283QFhTZEYUIs5J8ojrBEIJO2zHH80UfzNX7mqAoLB52g6TN5O5Apfn4NcrwBMexNCIzsY%2BArPhykTl5nye1DQnGHFwnAzsIxjZ6atG3kigutTqIHZTSxODLwFGNUsO1FdXmObuGhHGXw7R6ZjsHHKNJUGJGmN%2BpbaXzCype3BBjqkAU3d8GvICDJsqJkPGtCNskhzYsX0Egplqx3xqIvJf9yecRkHBraMI%2Ftu5Pc58EQfjRg%2FXSwXDuUK4WroSW4Tk2Nk4M0sLn6Ls7YmOUmDY6FKnDLloLMkdgjpQmtAYK8asSMBvT60JlCt1dvjH04HagTXPJq8F%2FF1NPUTQiiWugVTtfe2%2Fnkncwfz2S3jCRnPyqQjCJbsjCP0oJvf7toWsM8WfMgK&X-Amz-Signature=6817960c8ec81ae3dc95c866098a57aad7cb26fcae191df1a9d2bde67eff7624&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
