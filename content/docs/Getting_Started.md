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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZHU7KLH%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T132028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFHtSlb%2FA%2B2BtBYW%2FhLzmDNxpYEhdlPdy2ZmWAKdyFyeAiAoxVC3mljwbNfjQ2gqkoXQB1R4zhR9nAPQQcF1D3MEUCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIM7sHiYQGl9D3IR%2F%2FYKtwDQLu2A8fz%2FsNt2HsrSE7f75lLIJ3c6Xc5GlUHrynccwXRR53aAoyd%2Bu%2BmfsdRNY3uTM5QZ%2Bn4hwEkiiPP8Y0gKLqbp5Pna6jD4ZsWEGY0N9udRhqGPHp7pmddl080itFgMBZGsf7KOi%2F%2BRzdgQplDMx%2FBkausJGzVHzYhthdckX3Q0270ppLwEu7bHhpYY0XVHON%2F%2BU6JCNSxA8d1wNl45jRTwSP2PBE6VDtE4TMoy30M67Mlm6hnwH0jbfH64pkZWWztHKC%2BdZZsS4EJ5a92dzkywbi199GdFVtNxH3rqH24b%2BRg3VGbQVYpmC89esa4mSTitEiOreZupC0eu1QG3Ah%2BKnwbjklaO20oJVv7gls1oD2jYWBaUqpsIBOp8y7TABZ2oYAJuMrs%2FbCBr3zFYtfeuEMO5Cdmx6OEFyXvzhNhqprJDSMRKACS70Jf3kfTHckWu%2BZq6THjkYQ1ugnQzFzSIloH%2FlVWKNrgpz8kNF5JHaq72WcIXiQikxzamSVljkJvmT5gmmj%2BhXDvCd2sreEHrmku51sXEfrNjnBimy%2BXu8FiEkRg4A10%2FQ5T6vti3tFD9VnshnUCubseSnc0ZZREu%2FFZO8NTkEOuLd4V8KP%2BpAkuXSBcLu2EiLkw4r3UvwY6pgFQB5IG0EMUAXDEWwJqGtYq8hgCCSXjjpp1FdBZIgLZR%2F4ls2skzcnHk2ZQd0JXL%2F7w9WmoLfJkUryATnKqv87uBDoiVf92MKpkeTJSLby1pVpWUkr2flGSGZ8yWBEbQ9bByyGJkIuX1Se9OBXHBrT%2BR4pRTwK%2BGeN3CW46SQN0PoCaTqC253t1vdsdVvdMCVyMVcE3xNXde%2FLe1e8Y9dkmKdqpNRXH&X-Amz-Signature=dda60ed18674930dd52cc253d74a063f3e6f81babbdfb8f0fada1018d22bcaa5&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZHU7KLH%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T132028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFHtSlb%2FA%2B2BtBYW%2FhLzmDNxpYEhdlPdy2ZmWAKdyFyeAiAoxVC3mljwbNfjQ2gqkoXQB1R4zhR9nAPQQcF1D3MEUCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIM7sHiYQGl9D3IR%2F%2FYKtwDQLu2A8fz%2FsNt2HsrSE7f75lLIJ3c6Xc5GlUHrynccwXRR53aAoyd%2Bu%2BmfsdRNY3uTM5QZ%2Bn4hwEkiiPP8Y0gKLqbp5Pna6jD4ZsWEGY0N9udRhqGPHp7pmddl080itFgMBZGsf7KOi%2F%2BRzdgQplDMx%2FBkausJGzVHzYhthdckX3Q0270ppLwEu7bHhpYY0XVHON%2F%2BU6JCNSxA8d1wNl45jRTwSP2PBE6VDtE4TMoy30M67Mlm6hnwH0jbfH64pkZWWztHKC%2BdZZsS4EJ5a92dzkywbi199GdFVtNxH3rqH24b%2BRg3VGbQVYpmC89esa4mSTitEiOreZupC0eu1QG3Ah%2BKnwbjklaO20oJVv7gls1oD2jYWBaUqpsIBOp8y7TABZ2oYAJuMrs%2FbCBr3zFYtfeuEMO5Cdmx6OEFyXvzhNhqprJDSMRKACS70Jf3kfTHckWu%2BZq6THjkYQ1ugnQzFzSIloH%2FlVWKNrgpz8kNF5JHaq72WcIXiQikxzamSVljkJvmT5gmmj%2BhXDvCd2sreEHrmku51sXEfrNjnBimy%2BXu8FiEkRg4A10%2FQ5T6vti3tFD9VnshnUCubseSnc0ZZREu%2FFZO8NTkEOuLd4V8KP%2BpAkuXSBcLu2EiLkw4r3UvwY6pgFQB5IG0EMUAXDEWwJqGtYq8hgCCSXjjpp1FdBZIgLZR%2F4ls2skzcnHk2ZQd0JXL%2F7w9WmoLfJkUryATnKqv87uBDoiVf92MKpkeTJSLby1pVpWUkr2flGSGZ8yWBEbQ9bByyGJkIuX1Se9OBXHBrT%2BR4pRTwK%2BGeN3CW46SQN0PoCaTqC253t1vdsdVvdMCVyMVcE3xNXde%2FLe1e8Y9dkmKdqpNRXH&X-Amz-Signature=532f0fd33cdb16ed03b451ece5379e2784b0e83c73f532dfb9d5efe69dbcd4b3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXIP3WJD%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T132029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCb0hxnFPJ5juXXMtdvOUE9kv52CiuGf67khg4wZL5VtAIhAMzqWQsWvWguauc1T0AW7ik94fqbwZAvQieGOy7cRrXOKv8DCHYQABoMNjM3NDIzMTgzODA1Igw90fPw6Wm3Q%2Bupp2cq3ANit3EiDhUA%2FluzHudsjwRd%2Furbg4auV1l3t5PL2FkR4SH%2FZTNl%2BFxuKkysbarx5EDZAit7QbNhd%2B8iP719JJ%2FTcidYm%2FzAAG6U8iwSsdbbXV2q5I6s%2BDnpqqY83WjvWbFKvfRzm2LDcPTc6VQ4SkQuzB9XpLBIc9qOTAdIZ6Hjp8d7nx7XhaacP5EPFdNm0AxI5zdT5PJ%2FwT8uK%2BnRb7fFy2er6dy6TWdYXyq6P4cObiwgK1TWPh36l6hwEmPqZMWF2pcP4mJq5ZnUHvAgua1p%2BeehjZ8HxuUbyVQ9oosZIFf94ZCoZ4ANBEhCN%2FZ1kXJqLCgTsoIIPeLJsjTk1xfwst851c%2BWiP7fdNsiuIN2v3Kf00hKeMMCUlFHVDK%2FiGMSTXRxuPa1t%2BCquv5tSPBuapMCwH0nBYTs14RxzamZNXPISsKbZeoehJjbS09wKNboUCKi9v3hiBYLvwY6Pa85TnX5vVSoVVONFv8l7rOCRADgpC1eUoEtscZV3ZyQ6msGp9YmMLn%2Fo1YHw%2BZfFVmySXgPTnV3vepmQo%2BlLy27eyqbZf1sPflTsoxxbwDJsOnbXc%2FsBiDYPmRa2yj2mVTCUVXiwapsK27yZM8iNWgojQBr710IItmnwMEs0TDvvtS%2FBjqkAUgv8lzqPaeYvS7bJj9SB%2Bz3xY7lHvOp7Xyfj4F2gHfOnsd6Vr7%2B%2FmTuh2Lr5cdsTQz8lJ0cLXA9pBXxYuOHYA16oZNUO6eh7%2ByE6JH3hw3oIA%2B8UwqbX8dxmVGQBDla2uTYUfY4C73fiYZhpg7%2FOwqnKRjgpwX9HR0LibOdeHizlZx%2FSKB1QCpaYEP321pbwNkieg4G2K2qAr5J2MYoLSho6vWB&X-Amz-Signature=3174fdd0da4af0d5858611155e3ad71531b0099345e01218010950e83c30f701&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C6QRKQL%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T132029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCQvwBMXeiFLr7%2F5Jd%2FyOHbSJ%2BkwcbQ39AbHaT2%2FIuzAiAfo5MHoSGS25y24rarfKNRTld7H%2F%2FPY1vgHXKUPinLHir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMIwB9peHOKo%2Fo%2FgBuKtwDpxZj4L5XDZhLJs%2FKUedxDSa9zx5%2FiU9Q0YKyrvPlpUc9VL9JFXUiIRD%2BXL0T4iM3XFRK%2FC8uqmc73rm4CeHBRUvJBZGf9mSn3NfMlglb0FXy%2Foti8XPxH9ak2UBSd%2FGJmb76urYGMLjHv3ookdvLWFThpgEDpKhvCsmlZQbAVHScLNO2Zq1v9WvCYwCL6NflPlbrqyuU77EtvoY9bZ9gwIstQDUj74T6Ny74iJiTTGpKkgcnODF2d%2F08Hmd02rEADAfvRnl1BZ9ZT3unQ6TrUF%2Fixe7PhLjJ%2B08YzOZYr%2F3Pz3Nb6fdsHN7%2BglB5589%2FG%2BuS3N95LM%2F7AtQjzd2KTCu%2B3ogmLljUPBWAud%2BqyMmha2Lk6WHXZQJ4koGgqq1GHoVPvlZ55H2viLy3FaiBEWKZhjQ%2FuL4S%2FnQRjGylCj31lG9mMYFGCP8DMvy4A2zDA0dPGW5sK7eTJDZgliW8um1hdgxnjYyLgcTtv6qFo1xeGiW%2BkzymIwt6Ie0j8bDX8Ol%2FZf1veiwrA7ozBbxYpRmCTGMJ%2FubLBWqn7cO2DmVGm0Br5UPlnZKgklquRRyh4kPoZj3dBGBuHw7TfbsVbNOjH65GgpGRDTdZekxDp5XTJFailhPBOGhNjl0wy73UvwY6pgGBU8dRWdcdl6nw%2FKTNFBiqO6dDlbPSk4FYw0ZtDtrwA7JaENnbewKrcNX4ofi%2Bya2XFagtuAhNLLlzaDzR0OTu24FT5sMrrI%2F7Ky0U5Y%2FgFOC%2BcwPsKSQOTxKJjEN4xmcv8v2i3X58Xq0AjxFzFN823jGejGWfbhwXEee9u6hP4RSvtqUTAeMhkKZdu7Yrn%2F918vQki8dPTY3iwnzrN6iN5OMX9Hdq&X-Amz-Signature=ceb99e2e5e0b40462425c47cca2183f26b4f91e63c524e3fbd423eb11b9d4dd2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZHU7KLH%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T132028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFHtSlb%2FA%2B2BtBYW%2FhLzmDNxpYEhdlPdy2ZmWAKdyFyeAiAoxVC3mljwbNfjQ2gqkoXQB1R4zhR9nAPQQcF1D3MEUCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIM7sHiYQGl9D3IR%2F%2FYKtwDQLu2A8fz%2FsNt2HsrSE7f75lLIJ3c6Xc5GlUHrynccwXRR53aAoyd%2Bu%2BmfsdRNY3uTM5QZ%2Bn4hwEkiiPP8Y0gKLqbp5Pna6jD4ZsWEGY0N9udRhqGPHp7pmddl080itFgMBZGsf7KOi%2F%2BRzdgQplDMx%2FBkausJGzVHzYhthdckX3Q0270ppLwEu7bHhpYY0XVHON%2F%2BU6JCNSxA8d1wNl45jRTwSP2PBE6VDtE4TMoy30M67Mlm6hnwH0jbfH64pkZWWztHKC%2BdZZsS4EJ5a92dzkywbi199GdFVtNxH3rqH24b%2BRg3VGbQVYpmC89esa4mSTitEiOreZupC0eu1QG3Ah%2BKnwbjklaO20oJVv7gls1oD2jYWBaUqpsIBOp8y7TABZ2oYAJuMrs%2FbCBr3zFYtfeuEMO5Cdmx6OEFyXvzhNhqprJDSMRKACS70Jf3kfTHckWu%2BZq6THjkYQ1ugnQzFzSIloH%2FlVWKNrgpz8kNF5JHaq72WcIXiQikxzamSVljkJvmT5gmmj%2BhXDvCd2sreEHrmku51sXEfrNjnBimy%2BXu8FiEkRg4A10%2FQ5T6vti3tFD9VnshnUCubseSnc0ZZREu%2FFZO8NTkEOuLd4V8KP%2BpAkuXSBcLu2EiLkw4r3UvwY6pgFQB5IG0EMUAXDEWwJqGtYq8hgCCSXjjpp1FdBZIgLZR%2F4ls2skzcnHk2ZQd0JXL%2F7w9WmoLfJkUryATnKqv87uBDoiVf92MKpkeTJSLby1pVpWUkr2flGSGZ8yWBEbQ9bByyGJkIuX1Se9OBXHBrT%2BR4pRTwK%2BGeN3CW46SQN0PoCaTqC253t1vdsdVvdMCVyMVcE3xNXde%2FLe1e8Y9dkmKdqpNRXH&X-Amz-Signature=e188c0572a3e48dadef96ea583e299f74cf3c9459bfaac4c79b0b8f241b95a05&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
