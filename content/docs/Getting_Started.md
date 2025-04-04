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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNK4J6NB%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFKr354oJOFDDp1yau2FCmqnzdB4RJACQn7rL3K0zvJwIhALRv4DW%2BIGyU6Y0avTgIvcPcY%2F7Rc0I9QIQcy09o1BPEKv8DCBUQABoMNjM3NDIzMTgzODA1Igz5O%2BhCy2so12T25yoq3AMRGYIi6CMrL0mA4iP3ph%2FH%2FWYvVNjBLcnfF3Gu%2Bwo6g1tmyas%2B%2BBSBV9yhS%2B2Y6wPH6rT08hTGwf0seKuP621JnI3ZkR6QZehc%2FiMhEija6bmp9RkL%2FUZf%2B52esbHZhAdmyLFkYkaF8QllUEKjEhAj21EomkJ1Xizhol%2Fv1Cs0poyb%2BzqyfjKR8zsihbXgz4B1Ejw6pNdH9aA2KAmWAL1lKMdefDK0ALxHbwVId0SdAn4Wf6G3pfLhEX0rrCSLHepm3qmmXi1oxsSY6Pr3pgG24J0GfxZHKTKsXnPGHVnCL4xQkluhPAba5XuJkVHHVG%2F8vyHvgzMUGwBnTLsa8JX5oxJ%2FYLLccHgXXSyEIDaQ1hvkzG7neBO4ekYz80EJL3pzcQEbVJVuKJnV1VwBqmEIH6TOHMTa4IuNqGBPqEfMRu%2BxI5WalUMcx%2FQQhv6EBQg5t59zNZKUTl5HSBrYpmoTPTspC3qZcJfSHRwyrjAJZrw9%2BVF%2FZ0c03WfRnZ0W3guaBcgzxDDb8q5a4pm3X11G0J3jAoCs6igPlD4JwW8rZsRL5K4lJbwVaG7AESVFriWp4fjeqtpky0Qz6cH6GEoBAiDlFgqSt%2FP%2Fgof9toDkaWG2p3c9AOaijYW5LzCxl7%2B%2FBjqkAU5qbEMhkujQJlQ9CB75INunSEtlwdD0O35ut%2FXVDpEw2dDh8FcAawuFaEdZkKYr2fnXhD%2BoPJxcrCljC1jKGry2TyFLc%2FmmUWQvRxZbW3jPpL3q2m22hq0TDOA%2BFp6PlYNcRFxk0Vfs8j1lgLw%2FBJAu6n%2Fas0FlsbbaWq1t%2B3PyeDoFnrXmRBgZnkP1AuG7l4Acpnc8olVJ5fU7deDINff55BHz&X-Amz-Signature=f7b2c02c72c159fd3510edd63f77d6eba22c4bbd760abf54c8a9a403061928bb&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNK4J6NB%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFKr354oJOFDDp1yau2FCmqnzdB4RJACQn7rL3K0zvJwIhALRv4DW%2BIGyU6Y0avTgIvcPcY%2F7Rc0I9QIQcy09o1BPEKv8DCBUQABoMNjM3NDIzMTgzODA1Igz5O%2BhCy2so12T25yoq3AMRGYIi6CMrL0mA4iP3ph%2FH%2FWYvVNjBLcnfF3Gu%2Bwo6g1tmyas%2B%2BBSBV9yhS%2B2Y6wPH6rT08hTGwf0seKuP621JnI3ZkR6QZehc%2FiMhEija6bmp9RkL%2FUZf%2B52esbHZhAdmyLFkYkaF8QllUEKjEhAj21EomkJ1Xizhol%2Fv1Cs0poyb%2BzqyfjKR8zsihbXgz4B1Ejw6pNdH9aA2KAmWAL1lKMdefDK0ALxHbwVId0SdAn4Wf6G3pfLhEX0rrCSLHepm3qmmXi1oxsSY6Pr3pgG24J0GfxZHKTKsXnPGHVnCL4xQkluhPAba5XuJkVHHVG%2F8vyHvgzMUGwBnTLsa8JX5oxJ%2FYLLccHgXXSyEIDaQ1hvkzG7neBO4ekYz80EJL3pzcQEbVJVuKJnV1VwBqmEIH6TOHMTa4IuNqGBPqEfMRu%2BxI5WalUMcx%2FQQhv6EBQg5t59zNZKUTl5HSBrYpmoTPTspC3qZcJfSHRwyrjAJZrw9%2BVF%2FZ0c03WfRnZ0W3guaBcgzxDDb8q5a4pm3X11G0J3jAoCs6igPlD4JwW8rZsRL5K4lJbwVaG7AESVFriWp4fjeqtpky0Qz6cH6GEoBAiDlFgqSt%2FP%2Fgof9toDkaWG2p3c9AOaijYW5LzCxl7%2B%2FBjqkAU5qbEMhkujQJlQ9CB75INunSEtlwdD0O35ut%2FXVDpEw2dDh8FcAawuFaEdZkKYr2fnXhD%2BoPJxcrCljC1jKGry2TyFLc%2FmmUWQvRxZbW3jPpL3q2m22hq0TDOA%2BFp6PlYNcRFxk0Vfs8j1lgLw%2FBJAu6n%2Fas0FlsbbaWq1t%2B3PyeDoFnrXmRBgZnkP1AuG7l4Acpnc8olVJ5fU7deDINff55BHz&X-Amz-Signature=1371d076580270aa6bc4f931590d3fd04124ad826b263a44927bbcce5d8b4656&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3APWOMM%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T121441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2F9oX9fxVPopgMvkt8McZL%2FC5jVBEt49l%2BVUdvlROgRAiEAwLI2Lp%2BltPLyXA0J39%2F3wyFZysRmdKQYFY6xealPKN4q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDNcOj%2F6GWgrS5JkWXSrcA1snqDBV2Pipa9MxM9kajdFbqzE9wor9WBkD%2Bn6snQJMQoOuxqQK9uKWz%2BQFH8m5UWXBumrReDOBD2qqVMiX7vcezC1OMblbAe5cVOQzN9K26f9Akz8GoWpgLkq8H7pnJP8rWyoEgPjZsZNbas2mLHdixQxKLlzNBTa3ozb%2F5ozR8hNuEXFPu%2BkREifZzJVYtDodR5xwJUz17J5DqqAiKeLNwyy0%2BQEz1w4zBIbNb4WCpCdeEv8DNsy0WLPFe6pfKQoCxuOw%2F0Nyp0BwjM32vw%2BdVjPy%2B95JjClpvHu24beTQR9M36j2XbH9P6WsYGaqFEn2nvZmUcy%2BY2urRTWSigsV%2BVKNp6rFlr51lsijr80Ip7Ei6WVvufycAauaxoU%2BuaOZb2l1fcKC3pzF8fnfc9bDZIzmfOuf7Yhz9QlNQgQ%2F8VOLvaktt9Yk0bOASCa2OYIx2GMqoMpsUuxIyftr3jTJ5ZKOIwoKthh5pPKHkMxdHxX0AOwRDVu%2F7PMlBgE2mnaffTP5gi%2B1sIiMl2UHgw%2FDW5nJQDT1Yid48R%2FHUNRp83V7FTGKNraWesn2CVwkwsrYKgejuwsWESZLGWOY9aY7fMU%2BFhXCNIFd0VJrhuDtilYa7%2FfSnGL%2BIYryMLaXv78GOqUBmkujjHKM%2F%2FGhE0IfvVU4x8pK05CkxSPbrs8UquIsf1RsAcN9dcbJB5musYmo6dqFgdUojdpkKWzmfhEPbFGBWRD3bmjXYBimAumIQR57kMARzd3CfrAzgVPtFWEnXNvj5mgKlhQrUKJ2PORGpowTT6WmlZjcCJN7ldOPVdc%2BUg300epvAbKk59Tt%2BHI4sBAiY2XzG2W3LhmHAbQgUwCvTCYOqVhP&X-Amz-Signature=f33acf41ec5ebde66a39dd144a1b618efff4d70ac1812f6aa8e8fe9630ec1f1c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWFZ2YJJ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T121441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7hdqLYrf7DNWC2lBrqOUnbbRDTF5mBuXQhKzJ%2BOHZoAIhAJT1wxSPNrNbtIb5COk9IodEDH91KoEEvr1TITPsJJ6CKv8DCBUQABoMNjM3NDIzMTgzODA1IgzUAdY8jmxxjipYQGYq3AMfuWOscfj4%2FkT9eTLrDkh130S9bd5t3t0s9MPYt3nAiIDpG8z0fT%2Blqzf%2BoJwMp1XwzBpW2LLKAN2w35%2BEHbows04aJY%2BAb0Y3UCv3TFAVq%2FUpzJt05qu7PanWf%2FMZCoE1hB9jQhxE%2BD3fsN7Mslqz4CAVIOFWSkpeykMhSVFh5Oz0B2WSErbat7uPIDP2lsiohBso6QNWo4fYJSpApO6u6cVQ4ArAm7v%2BuOFfj32HcE0U7mkSzbyMVk%2FyeewroOWKA5Lx6KUiV2043ZCOyubrMsee8fq07as6HHgPZhnuEXmPo8m2yXUJeb%2BZ3cKvMbTh6BZkUb5zXQSCu21VuXLyUVPt65k99JRSzVNbNTvBoI55QnnERsgi%2BQI53n%2FMzjdgNbnJDwJ7baqgiZ1gDoEEODkus7aPFlpkpq8n22y%2BzxpdkQxuBDocdTl8J6xE7D3Sf23pIQcbz%2FjnrUFLH30nzKBh%2BIii6pZhQkN1r0zfmTis1uvSBOoG25YXitYHoraIVfiKOXotu8hGXIm1n2Kkf0kc7POVThU9GbxvT7ndHoMQJwiwiXEGt8Bt7O1aFR4qFz4Ij5M5%2B8pgA1fflh4EGQUvd7bMfeDdmQevJOFeDZDbs8vrfEeupv2euDDll7%2B%2FBjqkAaDap7FMxzbKInttalDwKIBh6Dw0%2F%2FuZ5ygTI9AT6G%2F5dJPF09LfudegwCUsH1rPWSDjp2fV1o4KYFGRTxZYa9%2F33wUyhofv8s5fJdQnTYNYeDkm2OLLN4SZf%2FZSK4wyISjsBo8fmeYZmYOhbCOwu%2ByqMk8zZn1UlGadZlNiknp8blFsv7MQCx4KmxrA0cZVum8sIzgZQfOM%2FFYo%2Fqh%2F93HQppxd&X-Amz-Signature=7997fc0aac3063acfa4de0fc95260db7a28d1f1119a9c478164ab8a1da8ef2fe&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNK4J6NB%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFKr354oJOFDDp1yau2FCmqnzdB4RJACQn7rL3K0zvJwIhALRv4DW%2BIGyU6Y0avTgIvcPcY%2F7Rc0I9QIQcy09o1BPEKv8DCBUQABoMNjM3NDIzMTgzODA1Igz5O%2BhCy2so12T25yoq3AMRGYIi6CMrL0mA4iP3ph%2FH%2FWYvVNjBLcnfF3Gu%2Bwo6g1tmyas%2B%2BBSBV9yhS%2B2Y6wPH6rT08hTGwf0seKuP621JnI3ZkR6QZehc%2FiMhEija6bmp9RkL%2FUZf%2B52esbHZhAdmyLFkYkaF8QllUEKjEhAj21EomkJ1Xizhol%2Fv1Cs0poyb%2BzqyfjKR8zsihbXgz4B1Ejw6pNdH9aA2KAmWAL1lKMdefDK0ALxHbwVId0SdAn4Wf6G3pfLhEX0rrCSLHepm3qmmXi1oxsSY6Pr3pgG24J0GfxZHKTKsXnPGHVnCL4xQkluhPAba5XuJkVHHVG%2F8vyHvgzMUGwBnTLsa8JX5oxJ%2FYLLccHgXXSyEIDaQ1hvkzG7neBO4ekYz80EJL3pzcQEbVJVuKJnV1VwBqmEIH6TOHMTa4IuNqGBPqEfMRu%2BxI5WalUMcx%2FQQhv6EBQg5t59zNZKUTl5HSBrYpmoTPTspC3qZcJfSHRwyrjAJZrw9%2BVF%2FZ0c03WfRnZ0W3guaBcgzxDDb8q5a4pm3X11G0J3jAoCs6igPlD4JwW8rZsRL5K4lJbwVaG7AESVFriWp4fjeqtpky0Qz6cH6GEoBAiDlFgqSt%2FP%2Fgof9toDkaWG2p3c9AOaijYW5LzCxl7%2B%2FBjqkAU5qbEMhkujQJlQ9CB75INunSEtlwdD0O35ut%2FXVDpEw2dDh8FcAawuFaEdZkKYr2fnXhD%2BoPJxcrCljC1jKGry2TyFLc%2FmmUWQvRxZbW3jPpL3q2m22hq0TDOA%2BFp6PlYNcRFxk0Vfs8j1lgLw%2FBJAu6n%2Fas0FlsbbaWq1t%2B3PyeDoFnrXmRBgZnkP1AuG7l4Acpnc8olVJ5fU7deDINff55BHz&X-Amz-Signature=2a86597a08dd4a843eeac28ef4262f73e9ec87d9cfa129460144643989712d12&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
