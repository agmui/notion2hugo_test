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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q25VG4V%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T025113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCaVYJakFv%2Bk19dJ%2BtTxqDPWmysDeLwCSE5F4TREuTUQgIhANtg9c4nQ08Q%2FYseoBlu7Skmqwfyn5svpj1eGsYuskLhKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqaP%2FqFnC0pJJUy%2BYq3AMyrY78A0lF8hHyWOaKfwMOXubCykD%2BQR416n5McnCjOyJYP9VSNHFdVlfc8gU5Jb1y6%2FKavqZYh60%2F4vr0k52cnMDra2OurXoFFqLU03JrQvCjzOYihwPNDZa52rOol4%2BsZ0HBkG4StQLZyp9Ddcttr8xsjn1WKAGvr1Fn964BOMgMH2ixSz0W18fyPOabOxZOVnBRmHF%2FC5CjfOR%2FKLYK3GLZO1uibkuhfa%2BbqagJyE3qU07HfmZZBdP2lINquCA1BoeWSUOUsimlLOMkLqEBLGe1Cxe%2B7koW8FYDXhA59ScO%2Ba%2FZboZlaQ%2BPlkwI8puNrePeiHM8ZPKySYOJZsE2hiAcErfjyAG6kKDhAC9Q73voNvlBnk%2FWLilJLOpOnMtdKs6spDL4uByvfJ6KctylDLneMRCsBky%2Fx7Ea7ScGPxZqSLLaixILBWvX8df49nYb4DlCXzCvo1VBcuUjgWeg429mymfhtgpOobXSb9cGb%2BOb3pobhAlA5ecDvNyyImMnr4e9YcFqzO0iuRsaFyzEo4vDEUsq5ZGGHcPhcY2muOXCKBf2pAXvBxDnDNZvqRzaOx8GQUzAtFxPNm%2BkJgcBIIzIRVQfe%2BZKdoQFzn0jOy979i92Qz0ybqg0XjDG4ObDBjqkAZYgVPfL8hMOG1D4430W1e1PfaRmr1fSY3eW8ZMgj5H%2BMc8%2Fzq%2FLXJcgA9h6jOIDpg2Z7fHL6s8kqFKSO4f4AHjULIDaXzuSXal3nqUShpCDK%2FJJmVvY19q05j3fdOb90YyMxLzAGcbVCi4erhsR4%2BjWhH%2B0PxbVx2dJoqDiqkCV%2FdZDWyc%2FEUao7G58%2FosXgzKZqag%2BlbVIPYQis6%2B2ZMh2yqwZ&X-Amz-Signature=c8fd28dcbaba7a846170e054dd10a696642bfde246c43108e4a43f2d981b79d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q25VG4V%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T025113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCaVYJakFv%2Bk19dJ%2BtTxqDPWmysDeLwCSE5F4TREuTUQgIhANtg9c4nQ08Q%2FYseoBlu7Skmqwfyn5svpj1eGsYuskLhKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqaP%2FqFnC0pJJUy%2BYq3AMyrY78A0lF8hHyWOaKfwMOXubCykD%2BQR416n5McnCjOyJYP9VSNHFdVlfc8gU5Jb1y6%2FKavqZYh60%2F4vr0k52cnMDra2OurXoFFqLU03JrQvCjzOYihwPNDZa52rOol4%2BsZ0HBkG4StQLZyp9Ddcttr8xsjn1WKAGvr1Fn964BOMgMH2ixSz0W18fyPOabOxZOVnBRmHF%2FC5CjfOR%2FKLYK3GLZO1uibkuhfa%2BbqagJyE3qU07HfmZZBdP2lINquCA1BoeWSUOUsimlLOMkLqEBLGe1Cxe%2B7koW8FYDXhA59ScO%2Ba%2FZboZlaQ%2BPlkwI8puNrePeiHM8ZPKySYOJZsE2hiAcErfjyAG6kKDhAC9Q73voNvlBnk%2FWLilJLOpOnMtdKs6spDL4uByvfJ6KctylDLneMRCsBky%2Fx7Ea7ScGPxZqSLLaixILBWvX8df49nYb4DlCXzCvo1VBcuUjgWeg429mymfhtgpOobXSb9cGb%2BOb3pobhAlA5ecDvNyyImMnr4e9YcFqzO0iuRsaFyzEo4vDEUsq5ZGGHcPhcY2muOXCKBf2pAXvBxDnDNZvqRzaOx8GQUzAtFxPNm%2BkJgcBIIzIRVQfe%2BZKdoQFzn0jOy979i92Qz0ybqg0XjDG4ObDBjqkAZYgVPfL8hMOG1D4430W1e1PfaRmr1fSY3eW8ZMgj5H%2BMc8%2Fzq%2FLXJcgA9h6jOIDpg2Z7fHL6s8kqFKSO4f4AHjULIDaXzuSXal3nqUShpCDK%2FJJmVvY19q05j3fdOb90YyMxLzAGcbVCi4erhsR4%2BjWhH%2B0PxbVx2dJoqDiqkCV%2FdZDWyc%2FEUao7G58%2FosXgzKZqag%2BlbVIPYQis6%2B2ZMh2yqwZ&X-Amz-Signature=347455439e23c6d1a1b21b4db32718aae9f48fca44533f4c03bac12aae3b470b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q25VG4V%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T025113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCaVYJakFv%2Bk19dJ%2BtTxqDPWmysDeLwCSE5F4TREuTUQgIhANtg9c4nQ08Q%2FYseoBlu7Skmqwfyn5svpj1eGsYuskLhKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqaP%2FqFnC0pJJUy%2BYq3AMyrY78A0lF8hHyWOaKfwMOXubCykD%2BQR416n5McnCjOyJYP9VSNHFdVlfc8gU5Jb1y6%2FKavqZYh60%2F4vr0k52cnMDra2OurXoFFqLU03JrQvCjzOYihwPNDZa52rOol4%2BsZ0HBkG4StQLZyp9Ddcttr8xsjn1WKAGvr1Fn964BOMgMH2ixSz0W18fyPOabOxZOVnBRmHF%2FC5CjfOR%2FKLYK3GLZO1uibkuhfa%2BbqagJyE3qU07HfmZZBdP2lINquCA1BoeWSUOUsimlLOMkLqEBLGe1Cxe%2B7koW8FYDXhA59ScO%2Ba%2FZboZlaQ%2BPlkwI8puNrePeiHM8ZPKySYOJZsE2hiAcErfjyAG6kKDhAC9Q73voNvlBnk%2FWLilJLOpOnMtdKs6spDL4uByvfJ6KctylDLneMRCsBky%2Fx7Ea7ScGPxZqSLLaixILBWvX8df49nYb4DlCXzCvo1VBcuUjgWeg429mymfhtgpOobXSb9cGb%2BOb3pobhAlA5ecDvNyyImMnr4e9YcFqzO0iuRsaFyzEo4vDEUsq5ZGGHcPhcY2muOXCKBf2pAXvBxDnDNZvqRzaOx8GQUzAtFxPNm%2BkJgcBIIzIRVQfe%2BZKdoQFzn0jOy979i92Qz0ybqg0XjDG4ObDBjqkAZYgVPfL8hMOG1D4430W1e1PfaRmr1fSY3eW8ZMgj5H%2BMc8%2Fzq%2FLXJcgA9h6jOIDpg2Z7fHL6s8kqFKSO4f4AHjULIDaXzuSXal3nqUShpCDK%2FJJmVvY19q05j3fdOb90YyMxLzAGcbVCi4erhsR4%2BjWhH%2B0PxbVx2dJoqDiqkCV%2FdZDWyc%2FEUao7G58%2FosXgzKZqag%2BlbVIPYQis6%2B2ZMh2yqwZ&X-Amz-Signature=c0cf67fb38242270c56436b217475ee3b763d8046b2bacbd5c17e6a53349d7db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PDXUNGQ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T025115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCYdBjEOiFGPHfNtXmh3NzWW23ERQLTBwG3zp11DG034QIgW6wwswbZV4HpACLf16NrreiX3sKVvczA8w9LLMPldaAqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7uuk4LBBu8TX4R8CrcAwFkHB96hlYTzOiERlutlrCyKe72N%2FrTuTMsFFhJuMSmTH61t171M6wwTaDDWHNmSP2DmAjcp1xtCDl8n%2Fct9FEGBPN9avE2tSnCtoWmSUsJnv6NLbp8FKezypXQRveUL7qTz0i13sEaPL773erYtJQfVEV1XNSboLPA%2BzZSmpwKTy5BUyD7kfHWxpD3AQ%2BK%2Bj2UKZ0wha7eFeGjeefuWwY%2FWY63v8HVQzEsSwEwTKHdag%2BwODi5KyOuh6lJy9Cs%2BJDq%2FN2RYafjkq6O9MLVeFHPOhmO2bjjzQo4ja%2F5OyyCq1oFExPocEE3VKc4729gIr3cpws6SHyAhabuK4l0xQfUqOxJQrgc4YGm9NzfLzV%2B%2Ff7I%2Bx4%2FeNSKDA7PkUIscwhCbeMnogbGmkG%2Fa7CD%2F14eh1LqgWa0s256r02FfrBCmiYBSN7Q7Mrzqrk4MfiHVlRjg1pUnNMxIRGUk1uFuj8EF8pHQ9TGcsYoedw3G94OLk%2FOHAgkHOudqcY16DQAgBt1%2FOfFX8qAr8yVHJSZ9M6cMGAFAEXRK2fRX5EZucv%2Bb0BYy1ClpK6zw4C%2BSe3I4oM3%2B47BMudMVLh%2BlQvuFB4pN4EWlo0ZA4BgWJhRGNRJ9ZedCgk%2BDyGsxI9FMJzg5sMGOqUBISWpJBr8q%2BdzLoQWCAu8fik1cyVTkOSCYjic5w7%2BN0VMPWHo01vaJp12evpbEfIN3OJMEiXLI7NxwADr6iXy%2FnmGPx%2FtTvd26tAd%2FNy9maz5gXWzLek3TuWl4Wjtt5c6kCBZcm5tiACmRkyCQX2McDys3TJdkYIHXnf310VXYw2gScW1zidU3AjvFI90awLhGazD3a668FzuOZrG84pcAvl9F32L&X-Amz-Signature=a7c610e614d0fc4d94f3ea7e263f8308957dea60af6671bd36ddbc3cfba1653b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYUU7FJ2%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T025116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQD6rmwFWHAufOkjMT%2F5ay7r0CmeRbI3qRMyyB6011a7CgIhAPksQS8papC3FsN49Db0jO1PZ7JXcVONq9tjbObvudjrKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2Bgfio4%2B3KFpht9ycq3APCnOae%2BmeoifeaGPL0ILh8c%2BCLnlmJ%2BqdKC5F3bYNgoMVSUJfQy7UkvjoeZFHRwQea0sXhCcEbF%2FTZ6GEppxpXDh1aIQOAyie%2BdZQfyyUqnXhlAAJYmNdD3u3pQGibTEFmQEACy1c%2FlZg18Unus%2FqpBuCuJF0zmdnJu8SJCRK877v9U85O0DnGEfU76%2Fxox0scJZzswIpUly3M2QONeYrJo8TFmE4N1KvnZwS0lj%2B0zTby2P7mgBp67A7J%2BTLEx3vzfEECLwynurQY7q2MWQOxeIOh3B1YlCjp3ndmZdbYtoE7RPR%2F%2B1fwoEVep8TMhtbh06jBI1xcKkOTsLcVA9qMtjJzB4M2wwSsMex7QEn6jh7s%2F2ploMJAkU2ly1xCKIVJiPiAMXk%2F5fdar8wRNcjTkeR8im2gM5MMcf1hsBdLDrCN34%2F8HmjMlUuLvRFRQCRGK9E%2BtLpb%2FfdICghu4kBQJTPp3pJNkGOgMuS4vXjJS%2FdDtI2OHgMyYzLq1Xbgs7Rlsi0Air25YSKIrf9Z8sdusPACWJqILfAHJDehyZ%2BUU3SgHa9YM%2FdNXpADxSjozG%2FLk2k%2FNbceD0L%2Bg2XYYVhcp%2BYCPdhmfSZRe9k9MnuoEqXWQETd9rBFkx%2FlVTCS4ebDBjqkAXfUe3upZy7wNoDhh3ZfnPUih4ZPN32NsMVsJaWtNvm2zf3pNFkBRrTsTprQOMlwAm9QbradZhVqGSs5%2F%2FocGe5qQmdvg2ybFSyMeoNn5EJXkNQEgcQ4w4iT%2Bplswo4M57qLomcWCNXw9oC3m6qzuP8y8hZyC2dKPRRhivkJ3fTG254hMmdplF3om7zTvRW2wDP5iGEtyu2kCnZfeHQI8ZxzPPaV&X-Amz-Signature=a4a9b09c53a0c4a6ff1b9dbdab35f87a085e75dfbb92d6e165c9a969651ebba9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q25VG4V%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T025113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCaVYJakFv%2Bk19dJ%2BtTxqDPWmysDeLwCSE5F4TREuTUQgIhANtg9c4nQ08Q%2FYseoBlu7Skmqwfyn5svpj1eGsYuskLhKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqaP%2FqFnC0pJJUy%2BYq3AMyrY78A0lF8hHyWOaKfwMOXubCykD%2BQR416n5McnCjOyJYP9VSNHFdVlfc8gU5Jb1y6%2FKavqZYh60%2F4vr0k52cnMDra2OurXoFFqLU03JrQvCjzOYihwPNDZa52rOol4%2BsZ0HBkG4StQLZyp9Ddcttr8xsjn1WKAGvr1Fn964BOMgMH2ixSz0W18fyPOabOxZOVnBRmHF%2FC5CjfOR%2FKLYK3GLZO1uibkuhfa%2BbqagJyE3qU07HfmZZBdP2lINquCA1BoeWSUOUsimlLOMkLqEBLGe1Cxe%2B7koW8FYDXhA59ScO%2Ba%2FZboZlaQ%2BPlkwI8puNrePeiHM8ZPKySYOJZsE2hiAcErfjyAG6kKDhAC9Q73voNvlBnk%2FWLilJLOpOnMtdKs6spDL4uByvfJ6KctylDLneMRCsBky%2Fx7Ea7ScGPxZqSLLaixILBWvX8df49nYb4DlCXzCvo1VBcuUjgWeg429mymfhtgpOobXSb9cGb%2BOb3pobhAlA5ecDvNyyImMnr4e9YcFqzO0iuRsaFyzEo4vDEUsq5ZGGHcPhcY2muOXCKBf2pAXvBxDnDNZvqRzaOx8GQUzAtFxPNm%2BkJgcBIIzIRVQfe%2BZKdoQFzn0jOy979i92Qz0ybqg0XjDG4ObDBjqkAZYgVPfL8hMOG1D4430W1e1PfaRmr1fSY3eW8ZMgj5H%2BMc8%2Fzq%2FLXJcgA9h6jOIDpg2Z7fHL6s8kqFKSO4f4AHjULIDaXzuSXal3nqUShpCDK%2FJJmVvY19q05j3fdOb90YyMxLzAGcbVCi4erhsR4%2BjWhH%2B0PxbVx2dJoqDiqkCV%2FdZDWyc%2FEUao7G58%2FosXgzKZqag%2BlbVIPYQis6%2B2ZMh2yqwZ&X-Amz-Signature=aded2954b4dc6d0edaa960adc460d999068dd336f736602edb3cfd591af9955c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
