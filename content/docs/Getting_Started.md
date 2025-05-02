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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4KLNDGU%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T050912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDmOqH%2BnzJ%2BPP%2BDqInFkwWhvfdbGF7qDlgsD69Q0rVdpQIhAK1k%2Fi8B03dU%2B0dorMA96L8dSIXxEpeZCW9xRnfYv9N6KogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjM%2BxFZHKK3uF5Qp8q3AP4q9thEfVSFfn1U28Fjd2dIIbPVTnlLE5a3vEoBbfLJtWVnmzJIz7hboN%2B8GUpcBp6dQFnUC8VY94VSN0rPh8PSHc4AGI%2BS10boTt73HRrnn1mBWiC6kYCI%2BfV3rWIc16JCnUihcJPZACHCMq%2FR%2BTuXJYZEZBYI7u95SBoVumhhTM%2FlIIYnS8OWsFVxizx2lSheXC5vKYsSWvNeSPLK0Q6ye%2BfItzfo4SezgOyaUStNtXcDlknSlqf7JuxmeoH7GKs0K3tmABCTwB50COSXON3QDW5JVWaoEtoay6wVwxL2ZnR0PB%2BDukATeEBldJYnKthvRptSoRUh1up24CNkmEb66xT4OBo7FOLduF%2BP%2FbFeSuyRxekPLSWKvxHj%2B1z4nEe23%2FsSYjqhV%2FM%2BNxAzJ50yuooGnm92fDA0vbX%2FlvGHocd%2B0OCaddDxz949l07ipsWxxlciY0c3y88gIdT7zYRDUxOGWNPP4WC%2FrXYcjaIXnj8CuO7kwGE85rRrjPvCgWvuArPR6qAP%2FzaFtu%2FecibjDPUVr6qS9IXS4vbBLe8wkhTNRi4DefUO%2FJIX03omhycbFVvIcIJgYIzPXxU3lS9ZXzKfGkxhiTB06BUG3C6%2F2LmhxKjQQeslxwDkzD%2BodHABjqkAVNtdSlvvwOcemjjQe35gSiDKZh7t%2Fti1BQWiFX%2FQrZDR4sD3kxQAVEAnXFIyBqSUNOo7qMOjUbGx3KR8cjF95qbdjbQcPl83IWHz%2BXVZy08ZvVmfExU3Rdm9Q7EyUikMEfL0z%2FU5PjOYXLnt4fpwFAkJZnKWh7ucGmBaBFPIrK4ZZPGJs5rApoNKbA3Ps0Ls0Z1pUFJOn7cbQbselym1mkBN7ni&X-Amz-Signature=3fd21e4ad4cfdc207f6710d738726ba595c562721f6f6f0ebeb55a3c5cb9ca20&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4KLNDGU%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T050912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDmOqH%2BnzJ%2BPP%2BDqInFkwWhvfdbGF7qDlgsD69Q0rVdpQIhAK1k%2Fi8B03dU%2B0dorMA96L8dSIXxEpeZCW9xRnfYv9N6KogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjM%2BxFZHKK3uF5Qp8q3AP4q9thEfVSFfn1U28Fjd2dIIbPVTnlLE5a3vEoBbfLJtWVnmzJIz7hboN%2B8GUpcBp6dQFnUC8VY94VSN0rPh8PSHc4AGI%2BS10boTt73HRrnn1mBWiC6kYCI%2BfV3rWIc16JCnUihcJPZACHCMq%2FR%2BTuXJYZEZBYI7u95SBoVumhhTM%2FlIIYnS8OWsFVxizx2lSheXC5vKYsSWvNeSPLK0Q6ye%2BfItzfo4SezgOyaUStNtXcDlknSlqf7JuxmeoH7GKs0K3tmABCTwB50COSXON3QDW5JVWaoEtoay6wVwxL2ZnR0PB%2BDukATeEBldJYnKthvRptSoRUh1up24CNkmEb66xT4OBo7FOLduF%2BP%2FbFeSuyRxekPLSWKvxHj%2B1z4nEe23%2FsSYjqhV%2FM%2BNxAzJ50yuooGnm92fDA0vbX%2FlvGHocd%2B0OCaddDxz949l07ipsWxxlciY0c3y88gIdT7zYRDUxOGWNPP4WC%2FrXYcjaIXnj8CuO7kwGE85rRrjPvCgWvuArPR6qAP%2FzaFtu%2FecibjDPUVr6qS9IXS4vbBLe8wkhTNRi4DefUO%2FJIX03omhycbFVvIcIJgYIzPXxU3lS9ZXzKfGkxhiTB06BUG3C6%2F2LmhxKjQQeslxwDkzD%2BodHABjqkAVNtdSlvvwOcemjjQe35gSiDKZh7t%2Fti1BQWiFX%2FQrZDR4sD3kxQAVEAnXFIyBqSUNOo7qMOjUbGx3KR8cjF95qbdjbQcPl83IWHz%2BXVZy08ZvVmfExU3Rdm9Q7EyUikMEfL0z%2FU5PjOYXLnt4fpwFAkJZnKWh7ucGmBaBFPIrK4ZZPGJs5rApoNKbA3Ps0Ls0Z1pUFJOn7cbQbselym1mkBN7ni&X-Amz-Signature=9b23268181e430fdf9fec278d92d700c20e144a07e26e66be0fa3b52658dc959&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4KLNDGU%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T050912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDmOqH%2BnzJ%2BPP%2BDqInFkwWhvfdbGF7qDlgsD69Q0rVdpQIhAK1k%2Fi8B03dU%2B0dorMA96L8dSIXxEpeZCW9xRnfYv9N6KogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjM%2BxFZHKK3uF5Qp8q3AP4q9thEfVSFfn1U28Fjd2dIIbPVTnlLE5a3vEoBbfLJtWVnmzJIz7hboN%2B8GUpcBp6dQFnUC8VY94VSN0rPh8PSHc4AGI%2BS10boTt73HRrnn1mBWiC6kYCI%2BfV3rWIc16JCnUihcJPZACHCMq%2FR%2BTuXJYZEZBYI7u95SBoVumhhTM%2FlIIYnS8OWsFVxizx2lSheXC5vKYsSWvNeSPLK0Q6ye%2BfItzfo4SezgOyaUStNtXcDlknSlqf7JuxmeoH7GKs0K3tmABCTwB50COSXON3QDW5JVWaoEtoay6wVwxL2ZnR0PB%2BDukATeEBldJYnKthvRptSoRUh1up24CNkmEb66xT4OBo7FOLduF%2BP%2FbFeSuyRxekPLSWKvxHj%2B1z4nEe23%2FsSYjqhV%2FM%2BNxAzJ50yuooGnm92fDA0vbX%2FlvGHocd%2B0OCaddDxz949l07ipsWxxlciY0c3y88gIdT7zYRDUxOGWNPP4WC%2FrXYcjaIXnj8CuO7kwGE85rRrjPvCgWvuArPR6qAP%2FzaFtu%2FecibjDPUVr6qS9IXS4vbBLe8wkhTNRi4DefUO%2FJIX03omhycbFVvIcIJgYIzPXxU3lS9ZXzKfGkxhiTB06BUG3C6%2F2LmhxKjQQeslxwDkzD%2BodHABjqkAVNtdSlvvwOcemjjQe35gSiDKZh7t%2Fti1BQWiFX%2FQrZDR4sD3kxQAVEAnXFIyBqSUNOo7qMOjUbGx3KR8cjF95qbdjbQcPl83IWHz%2BXVZy08ZvVmfExU3Rdm9Q7EyUikMEfL0z%2FU5PjOYXLnt4fpwFAkJZnKWh7ucGmBaBFPIrK4ZZPGJs5rApoNKbA3Ps0Ls0Z1pUFJOn7cbQbselym1mkBN7ni&X-Amz-Signature=44a9e58cc4f0166996ad6e0ab13879ef033dfb6ee408f137f4911d00f512e4cb&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H26BKBZ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T050914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCICQXLv8RpyIIK0oZiwJNXoMHUeLgynUKf%2Bm7SSn1Ou7xAiEAgiqjG32aECUCIAXBM61eK9VTdtYaiubNP2RVrjfRDA0qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3cE85P1W8srDkWBCrcAwG1JC9f6bq%2FI7p3NbmE4EONKTOagp6q5mLRAaXAbfKWI%2BkPx23D212s8vIzSf%2B9mk%2B4brTuYyqq3NprJzrLVfmb3JKGGqUoQ1FpjWizOHtzhQh8eXSIHwmYBccsGzlTktFbVNeeoCOhJZUxVrx%2FE6YjZ0JhFgyx9pvuDsGBIZDDQ2Rvo1OqZriPptfGIFOHAzUYVAaRguQCMMDcnkzG5d0E89qzEjagyCWF%2Bx8p8QTDTFYljYQ3GcBK%2B0CnNsFCPYYjAMRJCR76CHo4g9QqaKffUHf01%2BBIWnqthf7bdYtA7AT7T5IlcUeWgOWT%2BqZjMki3ZOpz6LAd1rNbFaYBReSg7cJqpVomV%2FBln52gnTsBSfCn%2BcmAdk0eY6X0UBGM1mmEjz8jgJ4Fy7kuah2shQiaxOJsAs0IrVCDHVRCMBa2PXwAF3vSv0DnW2tSpnheSHwRjYwBGW3aVkXdDrFx%2FXxNgBbJcLy9KiOqOp6spw%2Bl9yLBWwmrUih1cJK4Q6MjxTGtovF2dDEPoYVH%2FWAR1WWQVL8h%2BmsyvkUOAtKQGCeaWnbNGGJ94Ovr%2F1Gktlt35tU1fopMmp77FHUnVdu0qitCkXXln4TiW%2BMcDTytRDJ%2BCph3gsYI7vDzti78ML%2Bh0cAGOqUBDzfOTFiRr6aQIGMbzaidqcCQd81FhIqhJPqHc%2F3MEWcs%2BcKOLsWCETZ%2BA90ziiN862T6UTD9cxgrxyCKbqrKLq6hRRWRyZfwsrZ2dCTEzZuhK5FwHdHxAJfQ0EqorBLn0HDhZqndFMeI1mQXLqCC6126kbD44inaZOA1J8AJj%2FRRTyXh%2F7GdjbZjjhrLEV%2FbhMNh8TGcJ09ky%2F5oBPbAfmLcWGRj&X-Amz-Signature=dfae89f5f74d599634ad1958b083e3e380ec65cdacea13595813b6120dba1ad3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTSAZSBC%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T050914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIG%2FfBZ%2Fpxqyt1AV%2BvZhkioF9f3fzuIDxt1dIj%2B2Ybxd4AiEA4m4cyEwR7oYzeTlEiG1z1YZ3r2Bxv8gjhCK3wCL9OCcqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgY0Hs2rDTiHg4bRCrcA1YcwSBYOlkRXfKz4cmPgYlzocJNlFayNmI20LLo%2B8%2BePU1ln9HJdZQosdFmJ1ixnpT2FlwgDlYo%2B1Z%2B8%2FnC9FIDwk8yGGZZn6Am%2BqcLrvbq9yeYLEwGwzavhBi16kQJ%2BUC%2B2xZ2UqT9%2BgQqC%2F%2Bm8KIeZhGVOxgCzVv7HpGKM7eT76XEHfyO0d3mx5S3jY%2FkXsVhoZ%2BwwTe523je4t2g%2BkEMnbTa%2FIFhj9fZLqvFkm2wL0tjlww0cfqan5DpWMpVxIgCvH%2Foj2qT20AzChiEeds7qSFN2rBtJJ0pMKbWi48Phi%2FpKuPsqRbyPHCr7oxnFw0AeRsR6usqESr3dkq%2Bl1zZY6dLv%2FJjP4RKffwbMmSrCxeWFGK8kb88GBZJAvAo5xIZADaXSXdbtzYyVS9NfarXuq7Vosw618ZoPfvQL9kxW5ajEnmUgLvi6qUawQMEnTzMkhXjDQ9TdWYFagxctUrt6ZTxBTO%2FYxDbuJRZB0dItYy%2F2XavaE498Qgu6l%2FW0QDOOrVGQx1Pad4fgIy2exWcyMFu8UT%2BmCdb7TdxWuwAVIOTsUsmCAaGw3PBXo6OzOkdph65L0n4VoaFfRqT7KL6bYKUDQ5JH5LApb0y%2FFtTXgaHi6kKztbgaxcFMJyi0cAGOqUByQm%2BWHrwBm2fgwHrnDy%2BK18WqPHPJZY%2B%2BucEBwero5nr8uzYwsRMoEiai3rcX%2BZngfW%2F9vZExSO19cKEe52OsLuiREunQP17qZ2lTuxSH0mPqjDQ%2Bo3vnjOpdL02Y4UlM84BQ3OKpaDDHb8Brdkinp0W1%2Bd7MDpzCx2mzxvS%2FheBWbjWu3dZz2HwJXUoZ%2BNvvCtgzrC8zVLRysuOSCWMuBcyMOPX&X-Amz-Signature=29cd1cba8bb909faaaccd5e8a6d772ef3c1b992863c147d0e3f1ccf9b2b931d4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4KLNDGU%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T050912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDmOqH%2BnzJ%2BPP%2BDqInFkwWhvfdbGF7qDlgsD69Q0rVdpQIhAK1k%2Fi8B03dU%2B0dorMA96L8dSIXxEpeZCW9xRnfYv9N6KogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjM%2BxFZHKK3uF5Qp8q3AP4q9thEfVSFfn1U28Fjd2dIIbPVTnlLE5a3vEoBbfLJtWVnmzJIz7hboN%2B8GUpcBp6dQFnUC8VY94VSN0rPh8PSHc4AGI%2BS10boTt73HRrnn1mBWiC6kYCI%2BfV3rWIc16JCnUihcJPZACHCMq%2FR%2BTuXJYZEZBYI7u95SBoVumhhTM%2FlIIYnS8OWsFVxizx2lSheXC5vKYsSWvNeSPLK0Q6ye%2BfItzfo4SezgOyaUStNtXcDlknSlqf7JuxmeoH7GKs0K3tmABCTwB50COSXON3QDW5JVWaoEtoay6wVwxL2ZnR0PB%2BDukATeEBldJYnKthvRptSoRUh1up24CNkmEb66xT4OBo7FOLduF%2BP%2FbFeSuyRxekPLSWKvxHj%2B1z4nEe23%2FsSYjqhV%2FM%2BNxAzJ50yuooGnm92fDA0vbX%2FlvGHocd%2B0OCaddDxz949l07ipsWxxlciY0c3y88gIdT7zYRDUxOGWNPP4WC%2FrXYcjaIXnj8CuO7kwGE85rRrjPvCgWvuArPR6qAP%2FzaFtu%2FecibjDPUVr6qS9IXS4vbBLe8wkhTNRi4DefUO%2FJIX03omhycbFVvIcIJgYIzPXxU3lS9ZXzKfGkxhiTB06BUG3C6%2F2LmhxKjQQeslxwDkzD%2BodHABjqkAVNtdSlvvwOcemjjQe35gSiDKZh7t%2Fti1BQWiFX%2FQrZDR4sD3kxQAVEAnXFIyBqSUNOo7qMOjUbGx3KR8cjF95qbdjbQcPl83IWHz%2BXVZy08ZvVmfExU3Rdm9Q7EyUikMEfL0z%2FU5PjOYXLnt4fpwFAkJZnKWh7ucGmBaBFPIrK4ZZPGJs5rApoNKbA3Ps0Ls0Z1pUFJOn7cbQbselym1mkBN7ni&X-Amz-Signature=e0b235302da99ab9f2913203a7710c1cbc3a99342ebb66698bdc5ac3b2b48c3a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
