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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623WPAJ64%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T050806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTLzQ7BuYwhNHyxYtFO%2BD1gOolOUBScP7XgONuyjfePgIgdl%2FuE4ad1EC9tTtCRQyXCpRgWP0idxIAqkO6h7mCt5kqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7zCPnQbh2tFsY7JyrcA8enEoRbi2jjMorJ85lZRgUT5GXQlvO0t89pOPs3sskaLnrXMgtNd7PAgCBdHWkPK1pJIwunjPUNmV7pYkeCdXCdBPtdFTyq5EAGo8XrH8DEr9EGxewSin8HLbrLNNN4Xx33yf6QANms9IDgj%2FaKaD3yriycfcI02YwHU92AKUtyNZGIoiEPQPh7Yn39bAK8UgaX9FFzdmJqwBfB9iWbbVKimnLliKxVUTExYOFh0KcS1RknbCPu8V2PFpRgZdYPF6BYWn1NhbdL8%2FAl77%2FOuoiL6%2FqrTxxg0JvdpM78ZZX7zmz7piNUvo5XbrLzT68Pzyrc%2B%2BGd8cqzxLVLlhk5KZ7C7mCwSMYzrjQXjn8TfpBBJSmwYL7HQyz9EAgwpdplRnKP%2BigoE8vJXgYrR91mCSegkRhbkHEPeQrWL%2F3Vm%2FWBRy4k7c%2BRKHKyOA0XVkyfaqR62uZlANb313DPkQoUE4DLsr4zr%2FCoUJCDl%2BXCIisiGZL0uJXMv82JgdcGJGThdzfyKLeA3l%2FCjEm92xr7EGZyGYrop6PvUjI%2Fh%2FyX%2FlqEGYFIJeVPLPaOFZ7P9t3mSduMrC8VZ6tvwhv2gkgmCYietyPjtqYS1b3yrcwJyQu2wQkWr3UIGSDSRgsRMIv6pb0GOqUBa%2BFApTKTBlkfBB7fQLgfltkDEajS42dw4E78bGN%2FhykzCC3qo0UuZ6WiWJzZJNDP9N9HROq2Y4HyjbGmWw6IKfQto1Yy3HQLjz5oubI%2BYMY%2BjiPRcbCdMPfQVtckft1n9yDAqHU3E1%2BTcT0LK%2Bbe0hyqIX0CwRJEM03dCL7Kjkd0%2FiESxV7yqUWnfxYTUTq2dDU5%2FiYa7kJjyu2eRwMOvBcY8nN1&X-Amz-Signature=626383bd62e386ed8815cc6cae5dce0b321644902d8586719cbb0573d201bf9f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623WPAJ64%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T050806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTLzQ7BuYwhNHyxYtFO%2BD1gOolOUBScP7XgONuyjfePgIgdl%2FuE4ad1EC9tTtCRQyXCpRgWP0idxIAqkO6h7mCt5kqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7zCPnQbh2tFsY7JyrcA8enEoRbi2jjMorJ85lZRgUT5GXQlvO0t89pOPs3sskaLnrXMgtNd7PAgCBdHWkPK1pJIwunjPUNmV7pYkeCdXCdBPtdFTyq5EAGo8XrH8DEr9EGxewSin8HLbrLNNN4Xx33yf6QANms9IDgj%2FaKaD3yriycfcI02YwHU92AKUtyNZGIoiEPQPh7Yn39bAK8UgaX9FFzdmJqwBfB9iWbbVKimnLliKxVUTExYOFh0KcS1RknbCPu8V2PFpRgZdYPF6BYWn1NhbdL8%2FAl77%2FOuoiL6%2FqrTxxg0JvdpM78ZZX7zmz7piNUvo5XbrLzT68Pzyrc%2B%2BGd8cqzxLVLlhk5KZ7C7mCwSMYzrjQXjn8TfpBBJSmwYL7HQyz9EAgwpdplRnKP%2BigoE8vJXgYrR91mCSegkRhbkHEPeQrWL%2F3Vm%2FWBRy4k7c%2BRKHKyOA0XVkyfaqR62uZlANb313DPkQoUE4DLsr4zr%2FCoUJCDl%2BXCIisiGZL0uJXMv82JgdcGJGThdzfyKLeA3l%2FCjEm92xr7EGZyGYrop6PvUjI%2Fh%2FyX%2FlqEGYFIJeVPLPaOFZ7P9t3mSduMrC8VZ6tvwhv2gkgmCYietyPjtqYS1b3yrcwJyQu2wQkWr3UIGSDSRgsRMIv6pb0GOqUBa%2BFApTKTBlkfBB7fQLgfltkDEajS42dw4E78bGN%2FhykzCC3qo0UuZ6WiWJzZJNDP9N9HROq2Y4HyjbGmWw6IKfQto1Yy3HQLjz5oubI%2BYMY%2BjiPRcbCdMPfQVtckft1n9yDAqHU3E1%2BTcT0LK%2Bbe0hyqIX0CwRJEM03dCL7Kjkd0%2FiESxV7yqUWnfxYTUTq2dDU5%2FiYa7kJjyu2eRwMOvBcY8nN1&X-Amz-Signature=9d08aa01d436f207fa656f66d6645938b3db3a9c83aa3d38c2dbf0c84f655fff&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZRAX72Y%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T050811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM4xdL82rzzb6KqQoLI4oxCemrLMAvGboFFdqYp2EpnwIgHxlW4n0Mw4A1%2BqTy%2BEE3YE8G0ti5GfeU7HvfNRa9D3AqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMmyKIHZu2MYuIk0qircA%2B6uRGGZzzErT7v4QY5%2FnK3jLT9Z%2F241nQ%2FFdLxMC6hTPYXceNbVDy8misWhlLBihuK9O0iIa9fqmk7AdXppDj8mC%2F0hgp%2FwRN71CF4W8iyiIpbYJojctds8EoxBdbT6oGuhE8TGtlaDuJm%2F5mK1HU3F1TC8xGH7EDcKhzcjZmK2HxIm8DOMtGoJstotE%2F3LVRA9kGYUVwsk9DqzuNvs6gnKBb5k7CcLhCLT9xHwfjQjvW%2BDQ4WQgxYLoGw%2Fb6cA0HB7HpK%2Fmch1F04Lgl6mbbYyH8bcdRlHWkDtxRFQw5okqhuV02uyBp8c4xeyHYqM05fd2eW6OR992AgtHqqVzDnhV9NUCqCZA%2F5%2Fk8o%2FZo2o0BAwEQZDazpLgE5LcdbLNGY5intxkbx1fUsNLW3tcALPZ8Kq%2BRt0vO2cUNlyghVRgoxby0oWYJePCKrCs1TMMgsNIkbibyFTmALAvI9mSLaezGnYFODQFTTyGb6dE%2FQr6MlnZECwVUJZBTGYrdfMU%2Bnq8hox4DSbuXtuowbJOVqDOo%2BTTAQ%2F%2F%2B%2B7axgkg9OS5essyJqr6pwptpp%2BGDGAf4LTgubUNzfjOLfvQ0dcxJ%2B6aHUwLRLxn%2FWQV729egkX%2FqZRYJn7No0UXAkrMKH6pb0GOqUBM0ZHzz42emt1Dkle8ooE%2FCMdfsRB1085Q2FPQF4p3j%2Ff53u3EftfwaegBJQP6iobvKFom3JHeITvmLD2zCfsFGipMsoKMUfc4rxysE3c1TgoVsk0Gfno%2F%2F%2Bp6oO0aGuHhVglXJSmv4Dz50K7bZX15umk8rIbOSLG4boqRRMIwQICiKBmWnbeEhZcDbCyy%2FUQ9d%2FufqaSGh13isIGqJc6dcM83mwM&X-Amz-Signature=59cb601c496bd3754dd78c21d5fec453c840298e4666182890b20279ef55617a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLQQRZKB%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T050811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDgH5mPJ%2BoaQIGXlbv94JsnXyRP1yUSXaKRdojui52FzAiEAo4FhIGl6uq8vU2lk2soHjbM47TCkH2yGFxDMkpwq0bYqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJlO8FUdn1sE9KT6bCrcA539lJ0m77bP1T1qwnmNTucTUmYqVMQB%2BDIAP3yHiAECQ6gddJiPLNAvFAWdmQmJDYBN658CFYccXeagvPOq0qJs7Ufonl6uoUZlzvEXtbue7tNeS71kb%2FFiPdT2nDtRXQjFufFAiFTJ%2BEQ0gZVGk6%2FdbHIfNAZrs%2FPnvuLavOL5c6pCF7cBLEkBaRpLC4ZFVURU790YTUzuPNXewV6sYbvQ4BNcvacI8g1HvfjDml7%2FWrn%2BQNaMFCa4%2BI5D%2BSOVX9Vm7i8LEmLkbVN3eD3jlNOSJ28ZtATegNkyVB%2BbM70FmqBrANneFvdSZGT6zGn0q406Tc7cNBZFBFQ3i7YdvPPCbyw1NqsOT%2FJ5S5wgEWebKwhG9xwbRyDercHWUxlPAJHVyX4PZ4sx3WBvkzXB55hE76GncIRTNicYgp9IKzWIWvCEgxZQaFCLDY%2BhBE5TQB22LNhm7hBHJu9JzwELdpah%2B%2BoePQnBe3bA%2FAJHadbpxJxeOvHE4T7IShZTOsEmqYw06y1ySbF%2BhjGTSfyhar6heiB8%2FffCaZmZNSuSOv%2BXuBjy5cHLej1IZIcnJOwQRS8sWXGXwokps%2FIslRzbor2jnFia%2F68eWFRKhMCFg16YfmBDdrMSKQ1h9WfKMPn5pb0GOqUBqAqzNV0LFPGKc8Xbv%2Ftx3n%2FZmXw226czZ%2BV6QEbogqCApZLFhPl3MPKc04KbfgaBCq70dZPBFheKexjPGMK8cVPNc6FCYZzxdgZQaC%2BZx%2BDN8nZAt1cOpHl9oED%2Fc%2B1UfkfXgUzqfo1bV3Crr6MG8gA0LaW1GFcgbxn1FoM3jxnTTttSvYiwht4oRyk9nzB8Axu%2Fl%2Fe3o5NXXwuQ65CUI84w9mpP&X-Amz-Signature=4f6a2a3c6b3096f6602d64a0251089c1073da27ba3c19e2ee0eaaf979946758f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623WPAJ64%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T050806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTLzQ7BuYwhNHyxYtFO%2BD1gOolOUBScP7XgONuyjfePgIgdl%2FuE4ad1EC9tTtCRQyXCpRgWP0idxIAqkO6h7mCt5kqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7zCPnQbh2tFsY7JyrcA8enEoRbi2jjMorJ85lZRgUT5GXQlvO0t89pOPs3sskaLnrXMgtNd7PAgCBdHWkPK1pJIwunjPUNmV7pYkeCdXCdBPtdFTyq5EAGo8XrH8DEr9EGxewSin8HLbrLNNN4Xx33yf6QANms9IDgj%2FaKaD3yriycfcI02YwHU92AKUtyNZGIoiEPQPh7Yn39bAK8UgaX9FFzdmJqwBfB9iWbbVKimnLliKxVUTExYOFh0KcS1RknbCPu8V2PFpRgZdYPF6BYWn1NhbdL8%2FAl77%2FOuoiL6%2FqrTxxg0JvdpM78ZZX7zmz7piNUvo5XbrLzT68Pzyrc%2B%2BGd8cqzxLVLlhk5KZ7C7mCwSMYzrjQXjn8TfpBBJSmwYL7HQyz9EAgwpdplRnKP%2BigoE8vJXgYrR91mCSegkRhbkHEPeQrWL%2F3Vm%2FWBRy4k7c%2BRKHKyOA0XVkyfaqR62uZlANb313DPkQoUE4DLsr4zr%2FCoUJCDl%2BXCIisiGZL0uJXMv82JgdcGJGThdzfyKLeA3l%2FCjEm92xr7EGZyGYrop6PvUjI%2Fh%2FyX%2FlqEGYFIJeVPLPaOFZ7P9t3mSduMrC8VZ6tvwhv2gkgmCYietyPjtqYS1b3yrcwJyQu2wQkWr3UIGSDSRgsRMIv6pb0GOqUBa%2BFApTKTBlkfBB7fQLgfltkDEajS42dw4E78bGN%2FhykzCC3qo0UuZ6WiWJzZJNDP9N9HROq2Y4HyjbGmWw6IKfQto1Yy3HQLjz5oubI%2BYMY%2BjiPRcbCdMPfQVtckft1n9yDAqHU3E1%2BTcT0LK%2Bbe0hyqIX0CwRJEM03dCL7Kjkd0%2FiESxV7yqUWnfxYTUTq2dDU5%2FiYa7kJjyu2eRwMOvBcY8nN1&X-Amz-Signature=79929bf841d8fc1e39b96e3b1be087b1fa33f1e59b02bf6b729c3d706235ca8c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
