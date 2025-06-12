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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PJZMCTL%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T050939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCvQ88fwJdpdHVecPL%2Fe8bdQK3xW3a5pev90bLnWMvFhgIhAP1G0EBMKJW8EDma2bed3eHmr4bh7Z7nipZ0mR8q%2FhhyKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDHsZseKN9RA5cUjIq3AOQ1xLuRLM9RNvIodwaQrRXGFd5LUwB1XgMYZrUmZwXTUa3KtdHZefidOqIs0Y6QkCJzf%2BFQPAOoDErd%2FpWyOEVnWcbuwclMrWfr7DnjxMmSaZYroO%2FApLQtiFrUYgZNLLQin3narbcBxYlaFgwPiywKcinn25bwORYfAEuYCpW4z1a%2BHPbLQoZfMOk%2FT4BRrY2bf6iGc0LFemd1ROwvTneofniUMOxZpWWaEY2%2FUbWLJa%2FsNYAf9eadihkNqxfNTVZqCikBe6%2FP48Cm6%2FOzvvGD6JQzEb%2BE82qJfvwygf8OtAFkTEbDnS%2BhwZ6FTgyLNvFgrBmx16xg%2FyANIaTkBJ5jPcBK9GVdjr0dGJHzUzJKmDGt0l5fvNrWnBRDfWgJqq%2BnKZE1DNNKb6G36e0MfT9J%2Bj2%2BseNo7hVLdkvSlx3bJU4hPcx%2B%2B9x6Gd5RAHU3Hiq5STElcwAUXMtB0t8zzVU5Nv4FM%2BgvACQO1KU7JNr4RGQemf7%2BF7av9jDvHNO9e8sUIuAuT2ob2ykEEMrItvk8r%2BmeX1r5XsrwH444lna5KyAVftIXhn37eRwCVcwJEaMv3w%2FTUzNF6g7bx%2FpIYwnyIKrmMfZR8z7NRnbAbAG%2Bx4vOrGRZiTg3Nq52DCLlKnCBjqkASFvlUwA3ZbvXGD7K1FUvMhzV68pNJk%2BurkRkUezIB6lggCIeLtLsdWrEFy5WLSxhhqDFvGYEgv4J9aTQzRLxyuQWfrS6sNjail90xjQEhIsWleJD2Xy0PQODSdiZ0LSFkki6%2FShgBdrk64KHCmeZP%2FNSX8Wb%2FJMEhZ7yiXR0OY2VKpUw%2FHQlsDV4zykWfmwoX7urvxVzER0VLicEYoCMPIZJyjl&X-Amz-Signature=fde4448ea4e0f1642e09359e7d258b8cd5a1b14a258bc39a451f81f1163bfa85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PJZMCTL%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T050939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCvQ88fwJdpdHVecPL%2Fe8bdQK3xW3a5pev90bLnWMvFhgIhAP1G0EBMKJW8EDma2bed3eHmr4bh7Z7nipZ0mR8q%2FhhyKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDHsZseKN9RA5cUjIq3AOQ1xLuRLM9RNvIodwaQrRXGFd5LUwB1XgMYZrUmZwXTUa3KtdHZefidOqIs0Y6QkCJzf%2BFQPAOoDErd%2FpWyOEVnWcbuwclMrWfr7DnjxMmSaZYroO%2FApLQtiFrUYgZNLLQin3narbcBxYlaFgwPiywKcinn25bwORYfAEuYCpW4z1a%2BHPbLQoZfMOk%2FT4BRrY2bf6iGc0LFemd1ROwvTneofniUMOxZpWWaEY2%2FUbWLJa%2FsNYAf9eadihkNqxfNTVZqCikBe6%2FP48Cm6%2FOzvvGD6JQzEb%2BE82qJfvwygf8OtAFkTEbDnS%2BhwZ6FTgyLNvFgrBmx16xg%2FyANIaTkBJ5jPcBK9GVdjr0dGJHzUzJKmDGt0l5fvNrWnBRDfWgJqq%2BnKZE1DNNKb6G36e0MfT9J%2Bj2%2BseNo7hVLdkvSlx3bJU4hPcx%2B%2B9x6Gd5RAHU3Hiq5STElcwAUXMtB0t8zzVU5Nv4FM%2BgvACQO1KU7JNr4RGQemf7%2BF7av9jDvHNO9e8sUIuAuT2ob2ykEEMrItvk8r%2BmeX1r5XsrwH444lna5KyAVftIXhn37eRwCVcwJEaMv3w%2FTUzNF6g7bx%2FpIYwnyIKrmMfZR8z7NRnbAbAG%2Bx4vOrGRZiTg3Nq52DCLlKnCBjqkASFvlUwA3ZbvXGD7K1FUvMhzV68pNJk%2BurkRkUezIB6lggCIeLtLsdWrEFy5WLSxhhqDFvGYEgv4J9aTQzRLxyuQWfrS6sNjail90xjQEhIsWleJD2Xy0PQODSdiZ0LSFkki6%2FShgBdrk64KHCmeZP%2FNSX8Wb%2FJMEhZ7yiXR0OY2VKpUw%2FHQlsDV4zykWfmwoX7urvxVzER0VLicEYoCMPIZJyjl&X-Amz-Signature=3cb7580aeb481fa8514ba1de88f2fcb6bca0d8c065e23e2fdd000ba7e42d6698&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PJZMCTL%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T050939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCvQ88fwJdpdHVecPL%2Fe8bdQK3xW3a5pev90bLnWMvFhgIhAP1G0EBMKJW8EDma2bed3eHmr4bh7Z7nipZ0mR8q%2FhhyKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDHsZseKN9RA5cUjIq3AOQ1xLuRLM9RNvIodwaQrRXGFd5LUwB1XgMYZrUmZwXTUa3KtdHZefidOqIs0Y6QkCJzf%2BFQPAOoDErd%2FpWyOEVnWcbuwclMrWfr7DnjxMmSaZYroO%2FApLQtiFrUYgZNLLQin3narbcBxYlaFgwPiywKcinn25bwORYfAEuYCpW4z1a%2BHPbLQoZfMOk%2FT4BRrY2bf6iGc0LFemd1ROwvTneofniUMOxZpWWaEY2%2FUbWLJa%2FsNYAf9eadihkNqxfNTVZqCikBe6%2FP48Cm6%2FOzvvGD6JQzEb%2BE82qJfvwygf8OtAFkTEbDnS%2BhwZ6FTgyLNvFgrBmx16xg%2FyANIaTkBJ5jPcBK9GVdjr0dGJHzUzJKmDGt0l5fvNrWnBRDfWgJqq%2BnKZE1DNNKb6G36e0MfT9J%2Bj2%2BseNo7hVLdkvSlx3bJU4hPcx%2B%2B9x6Gd5RAHU3Hiq5STElcwAUXMtB0t8zzVU5Nv4FM%2BgvACQO1KU7JNr4RGQemf7%2BF7av9jDvHNO9e8sUIuAuT2ob2ykEEMrItvk8r%2BmeX1r5XsrwH444lna5KyAVftIXhn37eRwCVcwJEaMv3w%2FTUzNF6g7bx%2FpIYwnyIKrmMfZR8z7NRnbAbAG%2Bx4vOrGRZiTg3Nq52DCLlKnCBjqkASFvlUwA3ZbvXGD7K1FUvMhzV68pNJk%2BurkRkUezIB6lggCIeLtLsdWrEFy5WLSxhhqDFvGYEgv4J9aTQzRLxyuQWfrS6sNjail90xjQEhIsWleJD2Xy0PQODSdiZ0LSFkki6%2FShgBdrk64KHCmeZP%2FNSX8Wb%2FJMEhZ7yiXR0OY2VKpUw%2FHQlsDV4zykWfmwoX7urvxVzER0VLicEYoCMPIZJyjl&X-Amz-Signature=0d3902d4f182cecd708f59a131d882f967b6ebf197efaa6ef0bc79857af977a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XCLJBUP%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCele2UInzUa0SGJCQ6d5s5%2F1u36uSHHSU4ySXfUdrGUQIhAOQlh42fmLirg6W2zzW00bFF5Q8m3V2wQl%2FS0iSHXs3kKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyX3IqwLSMLVmp8%2F1kq3APxgtonlepqrgJunbbAVblZEx1IUcRhmxabgKiyxAibkylWLnrH%2BIKEhpvaL47zt3gyFCB1j2dwyjv5iXgLSMgjEpg4psVdjovd764plpA%2FcGJLIqzODIOZjBq6KYLQoQLwm9xvCJGJjNmv5d%2BHwZ645b4gzBrTDWiD8Vs1JEphhV5F3LK58yq0saQpzkPPMsPlyQeydQ3rWmd2NF2q5%2BSXukasVJzZMfb9MrX08zCYK921adD%2BcIxGYGr9E6Z1iWg0%2FdbsYZ9nMXJVw8aWHqJyBChdAgpQgCavDGWlIDk8O7g5pELNyCquN0%2FJ0vjhCpB92jUvf3stvkmhUSo%2Bv51Q8rX0XPiR%2BhHfctwZ8RqfjT05fx66kM3mnuLqWISdBSbaRwqN5e4NEilUYQKq0H4%2FVad72hUU8cVeQioIOvx5ciClkc%2FOrJfPDAJNRakpazQqEDcdCCvbokqtwUc757u%2BmHf6oQh5iCu%2F9elhIdo4O91UxvBun8sEnFvFN%2BzsdaULdFpAGdoHhh%2Fe9Cbfywg%2BMXEPp3ZvJh%2BrEvffYtHObgLugdSR7dDtnBto31%2Fqgr3%2FuDYTf316hzcYsFlMOcdncbZmFBwN5jlKh7LcEvkFI58uRA%2BcrQXHn9rZUjDck6nCBjqkAdhv9Z1rgc%2FpAc6%2Bjgw83JJpo6aQPCNFAtwichgWHPaG%2BPhOgDj%2F1vTV6YZj%2BuFtmrZf%2BLtO58R0UMuXu2cbUpmSAOgHuqj%2Ba%2BvXZJVoFP88ajD3Y6GP%2B6adeUVtkRbcM1ac2AvLnf%2FO2E59qplsLPmp7z%2BxMijZWIEn1CN1hq5MA5EMtVgwJae9oCi6D4yM3r5VsaCQ5wtSDe68g0Hl%2BZyJRx4K&X-Amz-Signature=a301e86024718b620a1c954cbc40ca813fa526dda93c081b282ecc0fdb1364fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUOVZ5WE%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDLHRf2IwOEhOOLl9O8SnwYFxP6Sz6SnMMUVeGWm6BMYAIhAOA%2BvSb8cZGFuWKjEzsrZ95bQZ0nvSrvy2noOrmk1L1RKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnD0J0LXXww84MOH0q3APQsnXoFtMa1%2BWZGEbRJIxg8vKpBzw%2F5TliNoK4cWn1Wsjl3Lo6x9hd7Ne%2BtJ1UQab2DXP66KHfTDlDKcSbwvQ7FQyJEQ4u%2FvwXQldfg4paEIk1PPTGRXK3QxLp5AXCbhcUrrNj2N8L7ZaKyKpu6igjykeUS64MQZhTgSHfOA4YYpYUcLSA%2Bkn6lBThyHl5TqgrFPqDFQ3qGhKIyMwd0wnNyerkHPy4egyo6w03ljH021VH9Ua2Hgz8tHO3cSNzODqbarQSjD%2BeX8LZRC26Ck2%2FJ95VFbXClHDlXlJtAm6MFYkh13baJNLh9PNvXiw5DZylu0A04J6LVbBdoh9NOmvIvmYf7bCJTIUrOl%2FNfPDSat%2F8LKHhczbvYE8oY1P%2B1rItLJBJX2yyf%2BQMAszgAAQiMjACMdSGM6I1G3koUsi1%2FP5CpmDo9EGOj9cGxOR%2F%2FnnQ8aubO1iea2eYkLWmdYXP3CoQs1ljDrcUGHJ65kfjVXUwVgX0uET0b6MHyMXVpXwp7wYveaeqUy6oTfnI37Zc48BIfcBLVWEnOUXDMGoO3MtJIi30i1LJigVe7JIG9h7cT7tloddzpfPzamMrRoHKB0w%2FQlFtV6jiIo3zPvGa99nbNzKDjmb22yj0rjDlk6nCBjqkARXh%2F8GkY%2FbuS83mI6l8foQULMcxRuHi2enXQiBJIA34cOUuDKHLLlMvZendBuSRa6qLtPyg7y1GSP0X2O3RruPsgbO75w%2BUtQ4VGqG46ekfE%2FXsNBNBwQh5qBfXhON11bQlvvbc%2Bke5xchn%2BU8UYj5ML0f65OWN9DzBluky6a89CPYGDBP0gWu5XtzHizaTtb86bUB8VWBE4vmI%2BV%2FTf4EH3fip&X-Amz-Signature=d733ddfdc0a0cfd214f6a025d0a3bc8cb16769a934f279132c0c902bd2088b70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PJZMCTL%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T050939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCvQ88fwJdpdHVecPL%2Fe8bdQK3xW3a5pev90bLnWMvFhgIhAP1G0EBMKJW8EDma2bed3eHmr4bh7Z7nipZ0mR8q%2FhhyKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDHsZseKN9RA5cUjIq3AOQ1xLuRLM9RNvIodwaQrRXGFd5LUwB1XgMYZrUmZwXTUa3KtdHZefidOqIs0Y6QkCJzf%2BFQPAOoDErd%2FpWyOEVnWcbuwclMrWfr7DnjxMmSaZYroO%2FApLQtiFrUYgZNLLQin3narbcBxYlaFgwPiywKcinn25bwORYfAEuYCpW4z1a%2BHPbLQoZfMOk%2FT4BRrY2bf6iGc0LFemd1ROwvTneofniUMOxZpWWaEY2%2FUbWLJa%2FsNYAf9eadihkNqxfNTVZqCikBe6%2FP48Cm6%2FOzvvGD6JQzEb%2BE82qJfvwygf8OtAFkTEbDnS%2BhwZ6FTgyLNvFgrBmx16xg%2FyANIaTkBJ5jPcBK9GVdjr0dGJHzUzJKmDGt0l5fvNrWnBRDfWgJqq%2BnKZE1DNNKb6G36e0MfT9J%2Bj2%2BseNo7hVLdkvSlx3bJU4hPcx%2B%2B9x6Gd5RAHU3Hiq5STElcwAUXMtB0t8zzVU5Nv4FM%2BgvACQO1KU7JNr4RGQemf7%2BF7av9jDvHNO9e8sUIuAuT2ob2ykEEMrItvk8r%2BmeX1r5XsrwH444lna5KyAVftIXhn37eRwCVcwJEaMv3w%2FTUzNF6g7bx%2FpIYwnyIKrmMfZR8z7NRnbAbAG%2Bx4vOrGRZiTg3Nq52DCLlKnCBjqkASFvlUwA3ZbvXGD7K1FUvMhzV68pNJk%2BurkRkUezIB6lggCIeLtLsdWrEFy5WLSxhhqDFvGYEgv4J9aTQzRLxyuQWfrS6sNjail90xjQEhIsWleJD2Xy0PQODSdiZ0LSFkki6%2FShgBdrk64KHCmeZP%2FNSX8Wb%2FJMEhZ7yiXR0OY2VKpUw%2FHQlsDV4zykWfmwoX7urvxVzER0VLicEYoCMPIZJyjl&X-Amz-Signature=0a3f1c91c533727e3b9e30c55687f35ba9655ec14a244141400871569b45b049&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
