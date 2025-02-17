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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634YOO7YS%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T100839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDslO34tH0XcKxSbzOA0K63s8TsfS5XTnkGrqzw0v6UoAIgW3YIo5v4wLebVVTxg5ccln9KCo0hyruVOcQsh0XcZCoq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDDY26QwPBZr5w8QmKircAyWiZgYZlJ%2FSXLjuEXWOHQyYqo6RZlTQ7tQknBr5HYS2T54Pih3PDlGCN55ixFxOD8ECzKMYbVARYEqgcx96xnDroFiPqIZERGjO%2FpReRCJmlq6eupWzf9fWJHUrLcvXVoBUl31q%2BPKlaChouvQDWwclUxlL7JP3uRIK6HKeEsycnsowMtYi9xmZGSP%2F8Ajlcqy8KmxFSvShO7hhvUPZGeZP0N%2F5s1BAqauLNTJKnU26G9anLKAoLWpWTpp5jye%2FNBCI%2FkxW64kT58eKJnZaScbzTMRjoBeF6jK5DRr893okZEy8dG96zvCNko5UqS%2Bbpdp0pL8Vp8rQNeNF1h%2B6sWwt4jBvomacEVQ2XbUr6PzzWG0b%2ByB6njfI4gwTWvTN5HFsEowjTPzM5664%2FKBxuURTcmVI%2FuRDj2PyxuUvbTJhyHKmBqQJ8FfrZJZFnT8cChGWvAjizHocH2sj8YL33aSHjwJ33pICMJsFu51G%2B52%2FPydXNJN6iQcvpJW1P3tDqfEeb8ts%2BXkQqQgbaHruJofdnkVlflM4DoWfrL27kIDwhrsHlPdu8KiUG%2FUxvkWh%2Bo8s9prA9EQP%2F3yET2j%2B1n2JkQ3YqOQRoiN%2FX4IqOh1Hkdk8B4sb%2B3XCeRAyML3py70GOqUBoBz%2FSV7p%2FXMvfn8I1zYGlKtf7MTO46c4aNdSjTIvtnFpktIx4eoReCsm%2BaV9mwX8VqQ3zrFKsINy%2BDHYh5IY5d4YHZk0NxfJER0ck8agIeG5bpR%2B77rWxo9md8bkCzIbySSi3ZDvcOGUvdwJNIiMHeqGsWBDMLFeaaLY6AUxOhfi4m%2B00O0MGdRAwRWCeTmLlM1WkedpkEPOyPHV3%2FrKpi33GQjs&X-Amz-Signature=40534da035b68203276440372ac7eb59bd456fc59d4a6ff3f8da49fab5f50ab1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634YOO7YS%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T100839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDslO34tH0XcKxSbzOA0K63s8TsfS5XTnkGrqzw0v6UoAIgW3YIo5v4wLebVVTxg5ccln9KCo0hyruVOcQsh0XcZCoq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDDY26QwPBZr5w8QmKircAyWiZgYZlJ%2FSXLjuEXWOHQyYqo6RZlTQ7tQknBr5HYS2T54Pih3PDlGCN55ixFxOD8ECzKMYbVARYEqgcx96xnDroFiPqIZERGjO%2FpReRCJmlq6eupWzf9fWJHUrLcvXVoBUl31q%2BPKlaChouvQDWwclUxlL7JP3uRIK6HKeEsycnsowMtYi9xmZGSP%2F8Ajlcqy8KmxFSvShO7hhvUPZGeZP0N%2F5s1BAqauLNTJKnU26G9anLKAoLWpWTpp5jye%2FNBCI%2FkxW64kT58eKJnZaScbzTMRjoBeF6jK5DRr893okZEy8dG96zvCNko5UqS%2Bbpdp0pL8Vp8rQNeNF1h%2B6sWwt4jBvomacEVQ2XbUr6PzzWG0b%2ByB6njfI4gwTWvTN5HFsEowjTPzM5664%2FKBxuURTcmVI%2FuRDj2PyxuUvbTJhyHKmBqQJ8FfrZJZFnT8cChGWvAjizHocH2sj8YL33aSHjwJ33pICMJsFu51G%2B52%2FPydXNJN6iQcvpJW1P3tDqfEeb8ts%2BXkQqQgbaHruJofdnkVlflM4DoWfrL27kIDwhrsHlPdu8KiUG%2FUxvkWh%2Bo8s9prA9EQP%2F3yET2j%2B1n2JkQ3YqOQRoiN%2FX4IqOh1Hkdk8B4sb%2B3XCeRAyML3py70GOqUBoBz%2FSV7p%2FXMvfn8I1zYGlKtf7MTO46c4aNdSjTIvtnFpktIx4eoReCsm%2BaV9mwX8VqQ3zrFKsINy%2BDHYh5IY5d4YHZk0NxfJER0ck8agIeG5bpR%2B77rWxo9md8bkCzIbySSi3ZDvcOGUvdwJNIiMHeqGsWBDMLFeaaLY6AUxOhfi4m%2B00O0MGdRAwRWCeTmLlM1WkedpkEPOyPHV3%2FrKpi33GQjs&X-Amz-Signature=45ce16adc35cbe308db1313d940e6db977fb265ddc3ac2913babd0e11f843a8b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJZTQS5Z%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDDmX0MSaKIDLvJmrW6ZnSerYRZyX6AJU8y0k4pkoU8fQIhAIyj4%2BtTpB7nBRGKVv1nxTa39VXsC6tWrcv0Yqtlr2ZYKv8DCHIQABoMNjM3NDIzMTgzODA1IgyNWn6paoUv4%2Bp5J2oq3AOAK%2BKidqiUjG%2BiFDL4%2B35%2F5w%2BcwlrxYVwvY5icWXoMvU80t%2Bfp9d85Fst7RXElO7kPC3iU1LnTVgG6xNZdy1UOoHMpYSdVQTsGfXP62TNc6SJmIoATRWF131oqzS7BFg3xOmxRvTLent7P3Z1UvLAX3fctYVY0%2FZe4CGbXLLTtiRf1R5axvpHU5XgiwbFA4DBJthHFjDspG%2Bqx3coH8szbiQyuhxTXSnHRcvMjAtKm%2B2U1T%2FzkY6BNTGL5303936F0zNm6JamXrA4E3MHL2BT0b%2FaSB8p8AN8ZwVRxguDk1cE3MR40SFXqrk21%2BI7cm6Z%2BODpgcFKiMGafLHy2Ez%2FQRqO4aq4GF9ahPG9YYT0UOHF%2FIg6HUIDDzuzJqxKpYxcai9Q%2F5d4mGZEqURunJOt9SisLOJtjiIEt901kTkw7tIKQeu2vQ%2BGsT3W07Bvo57%2B2seA2SHYlQjXDG7XuPTrfRmqaK%2FlIyxUD2qrYiZShryDZHMMQPc%2FKFKEXmXrqhRObW2vfKxOLro66aNQ%2BS816O1GW6TbKFROaPtL9fMZDd8dTAcJR0u4vNoRgO0Kmee0zV4b%2B3DHqrp3KuhDeIsulR%2FGYKpmwEiiz7BtbiYZOIpohFE7NBj4LlVhPTjDJ6cu9BjqkAQFs9y%2B68CZZLD2CJ%2FZLvuJNEahO4fv9oAvarbmJWCTf0ZeEDaNd%2FtXWGAnXTMDR38ao5JawSZvGxg5mCU2Xvwvo4FltkjwcE1j9%2F%2F7Ye4yrjoXp6t140KXklJtV%2Fk0IgD4HW8nlXeL8ccjckMdRAIC08X7KoYsfow6x1FFcraq7qNtRe%2By6i%2BZ6s1abdEUjECtvcTMXTyrabRwkrspVH5rwAv8r&X-Amz-Signature=9fffdf66a609e123ba3d214a1ba0c6d45ac9907c8f6abbcdca1878f8f1109b08&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMSKXM3M%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCZ94e93MVFfnGgMCWSwBGAPdclxpLDpnVAxI0LCG5uYwIgR%2F6O1LMcU9hNbxzQhqh6JyZjEZ7HJ0Qr%2Fmzqsh3TAEUq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDDkAPptb8M1OB7czHyrcA0MbOc7BTO3DHz1wQkKxU0%2FLIX6z43FNZ%2ByDmYpjbxtn8wK9JGcHDlxkVm9V13xhxiObuujJTpG4CNHpvf1Ezqol%2BsaDKFH%2FSoyQGdNoc%2FBIm5Q9AJdcGIGESOVdAzS7zcDQ%2BaCWMajqbf16HpNnfpHuS6sQYFigHodY4Ng59LHsrMb0JObsQwtWBzmJWaKoHNIHJXfFd%2B0oaONhCyBtIwuOZ6r02FA03copj5ohMOKh%2F%2F1vPgv69mUwfHHHYg%2BmhZYimQiqkFzaoFYRQr2rRrwVa01OAdaebD1kI%2Fk3pVgdmDUpOLlfWEk%2BOYVOyWIRAQn2wRkfjihpdfBDn%2B3UW%2BfFtuKqlVbvv2TiLP4ZkzV2FRVdnxrBFIG7RwuqtXEZUK3nwmbPqka%2FsR%2FNFPy%2FdmPdZVKs0lsucAPQrzmj2wvOxiY4iJTTtPv2DByeXjlZjAPuRuvmWaQb3qKfGvhMa%2B5RjgKz9PVyfaDGquZUFvrXHdIQWyxXigbjmNNtsxKK33OFaAaaKccp0CHjLD8ZIwU9FfiTS9YnJclsArJhiU1GDWKNkGGFVVVmv3mq1%2BqZTTuvWqe5SkogTPLAilMnq94QZCI%2BpvNt2tzHWyspArbCkTDYp3G2lcjS4ywHMI%2Fqy70GOqUBNAM%2FSbFFeIeMqHr5DPy9QLzgar6OdTVfpep9cm21Lc4yGs2H53nOUUDBxJ5Ejw7R0WjYg4PZ2d8WLh6mmtIUZ821XFJi2tf7dcp6PTfsuheswz2tbu5gz2No2IAvcwXV3ODBlwTgrfQLgaCWPNmCPHIByQuydEMvQL9v4etLNoeuPNyB9ElCaZe%2Bx59ljNTWbMoNnTyad4pMm%2FCbm0mR%2BW5QDPec&X-Amz-Signature=e27570c95d8ab464e581aca36ac337479cd52230bdbc40eade799ec3d258587a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634YOO7YS%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T100839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDslO34tH0XcKxSbzOA0K63s8TsfS5XTnkGrqzw0v6UoAIgW3YIo5v4wLebVVTxg5ccln9KCo0hyruVOcQsh0XcZCoq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDDY26QwPBZr5w8QmKircAyWiZgYZlJ%2FSXLjuEXWOHQyYqo6RZlTQ7tQknBr5HYS2T54Pih3PDlGCN55ixFxOD8ECzKMYbVARYEqgcx96xnDroFiPqIZERGjO%2FpReRCJmlq6eupWzf9fWJHUrLcvXVoBUl31q%2BPKlaChouvQDWwclUxlL7JP3uRIK6HKeEsycnsowMtYi9xmZGSP%2F8Ajlcqy8KmxFSvShO7hhvUPZGeZP0N%2F5s1BAqauLNTJKnU26G9anLKAoLWpWTpp5jye%2FNBCI%2FkxW64kT58eKJnZaScbzTMRjoBeF6jK5DRr893okZEy8dG96zvCNko5UqS%2Bbpdp0pL8Vp8rQNeNF1h%2B6sWwt4jBvomacEVQ2XbUr6PzzWG0b%2ByB6njfI4gwTWvTN5HFsEowjTPzM5664%2FKBxuURTcmVI%2FuRDj2PyxuUvbTJhyHKmBqQJ8FfrZJZFnT8cChGWvAjizHocH2sj8YL33aSHjwJ33pICMJsFu51G%2B52%2FPydXNJN6iQcvpJW1P3tDqfEeb8ts%2BXkQqQgbaHruJofdnkVlflM4DoWfrL27kIDwhrsHlPdu8KiUG%2FUxvkWh%2Bo8s9prA9EQP%2F3yET2j%2B1n2JkQ3YqOQRoiN%2FX4IqOh1Hkdk8B4sb%2B3XCeRAyML3py70GOqUBoBz%2FSV7p%2FXMvfn8I1zYGlKtf7MTO46c4aNdSjTIvtnFpktIx4eoReCsm%2BaV9mwX8VqQ3zrFKsINy%2BDHYh5IY5d4YHZk0NxfJER0ck8agIeG5bpR%2B77rWxo9md8bkCzIbySSi3ZDvcOGUvdwJNIiMHeqGsWBDMLFeaaLY6AUxOhfi4m%2B00O0MGdRAwRWCeTmLlM1WkedpkEPOyPHV3%2FrKpi33GQjs&X-Amz-Signature=e528b9ed6445a3b35bc8ec5bfd8b688df7762fdfef4564c6754b0e9905bedf95&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
