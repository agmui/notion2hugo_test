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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA5LQFNS%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T121430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQC%2B268h9nydYNrzYjRRy7rIplh8Av%2Fo5JsiUkm1t22VAAIhANr7OCNvkAoapCVMN68LlqsJFx8ENX9GaNZ9kpvwEnLPKv8DCFgQABoMNjM3NDIzMTgzODA1IgwZPbTKCEJx6RkrSmAq3ANPRccKKtmOvDw3seCYS4O3Jzi0fimijkDX7ohVaLYy6XNrioHeB4dtHAFtbXII5rLg6HaBBLAPJ6xDebqXvHlaM72UjVPgJq3ao1Sk8iEAvAMAcr8EYm1b1KyFxJBzGb42FZhFCmsMtjhsQkFHWBwIhmU04KpsCyycy9snEMGL7%2BEr9iIeKBNcW1iqXGfXuliEmWr5erC4LiJsuisngqL5XW0W0fajjydsVGR1Deovy1i6eczlAA48ZRoz%2B2pYN3Ad7TnPsFhQ3a4%2FMZIteGUttGlqABP4Ms3mLZ%2Bzg%2BIOjItuRYV5Dsbh%2BxsiZ%2BTBtfMXKL5We81%2FyLAOwzC6QmTK9lN1X0%2FbsT5J0i5OH05YNj3BW%2BZjU5quedGkduyOQERSMHgw5nkdvmNU1AYMdBa7oKoF2nbwJBgFYQ1VpUzCrfht0BPsixPFnPJJnDFsjRTS0GpeHS86KqNmr28c78HiHrMtAejiaxQfb1ZvGk1d3dpG095Bv%2BNtmHD1oMtiuqi%2BTGvM%2FKfKmyNWwWiTgOjpDRy81BhkuWxcfr4E5ZW9o%2FtNrrPfUBTMTQZR%2BBcZ9e0CnyUhCCJ2glfe%2B5E4guVzacoI%2FmaOCI9%2FnscQ5MLXVwCL4hJb9V8xRs38PjCRsKjDBjqkAdqsqA%2B%2FpRoraDAYHxgzlWxdgrbgRMtvQH6TPVwQ07MFwohItlYBRgQrsA1DYEoCJsWN4RBa5drsKyPwz5%2FPsTWlqTq1CfKRQnX4TJikkwIejesRiw6DvNSgNZXyDaedbT5%2FU0Bk8dQqVPBMu43a2d%2B%2FEnCTsCxbXmmTAg5PGTH3%2BEoORKgy1F%2FqFSuhmHS6s5z7rfIaMDat7zjrgH%2BuY54oC9Ig&X-Amz-Signature=03d206e5532aa341a889a748db6655c1020a403ad5b087bf6c9bcef63d3427db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA5LQFNS%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T121430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQC%2B268h9nydYNrzYjRRy7rIplh8Av%2Fo5JsiUkm1t22VAAIhANr7OCNvkAoapCVMN68LlqsJFx8ENX9GaNZ9kpvwEnLPKv8DCFgQABoMNjM3NDIzMTgzODA1IgwZPbTKCEJx6RkrSmAq3ANPRccKKtmOvDw3seCYS4O3Jzi0fimijkDX7ohVaLYy6XNrioHeB4dtHAFtbXII5rLg6HaBBLAPJ6xDebqXvHlaM72UjVPgJq3ao1Sk8iEAvAMAcr8EYm1b1KyFxJBzGb42FZhFCmsMtjhsQkFHWBwIhmU04KpsCyycy9snEMGL7%2BEr9iIeKBNcW1iqXGfXuliEmWr5erC4LiJsuisngqL5XW0W0fajjydsVGR1Deovy1i6eczlAA48ZRoz%2B2pYN3Ad7TnPsFhQ3a4%2FMZIteGUttGlqABP4Ms3mLZ%2Bzg%2BIOjItuRYV5Dsbh%2BxsiZ%2BTBtfMXKL5We81%2FyLAOwzC6QmTK9lN1X0%2FbsT5J0i5OH05YNj3BW%2BZjU5quedGkduyOQERSMHgw5nkdvmNU1AYMdBa7oKoF2nbwJBgFYQ1VpUzCrfht0BPsixPFnPJJnDFsjRTS0GpeHS86KqNmr28c78HiHrMtAejiaxQfb1ZvGk1d3dpG095Bv%2BNtmHD1oMtiuqi%2BTGvM%2FKfKmyNWwWiTgOjpDRy81BhkuWxcfr4E5ZW9o%2FtNrrPfUBTMTQZR%2BBcZ9e0CnyUhCCJ2glfe%2B5E4guVzacoI%2FmaOCI9%2FnscQ5MLXVwCL4hJb9V8xRs38PjCRsKjDBjqkAdqsqA%2B%2FpRoraDAYHxgzlWxdgrbgRMtvQH6TPVwQ07MFwohItlYBRgQrsA1DYEoCJsWN4RBa5drsKyPwz5%2FPsTWlqTq1CfKRQnX4TJikkwIejesRiw6DvNSgNZXyDaedbT5%2FU0Bk8dQqVPBMu43a2d%2B%2FEnCTsCxbXmmTAg5PGTH3%2BEoORKgy1F%2FqFSuhmHS6s5z7rfIaMDat7zjrgH%2BuY54oC9Ig&X-Amz-Signature=fe4924b7c61cf0024d775c1a954c5220d66eccd6866266f75ebc3347e96c62cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA5LQFNS%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T121430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQC%2B268h9nydYNrzYjRRy7rIplh8Av%2Fo5JsiUkm1t22VAAIhANr7OCNvkAoapCVMN68LlqsJFx8ENX9GaNZ9kpvwEnLPKv8DCFgQABoMNjM3NDIzMTgzODA1IgwZPbTKCEJx6RkrSmAq3ANPRccKKtmOvDw3seCYS4O3Jzi0fimijkDX7ohVaLYy6XNrioHeB4dtHAFtbXII5rLg6HaBBLAPJ6xDebqXvHlaM72UjVPgJq3ao1Sk8iEAvAMAcr8EYm1b1KyFxJBzGb42FZhFCmsMtjhsQkFHWBwIhmU04KpsCyycy9snEMGL7%2BEr9iIeKBNcW1iqXGfXuliEmWr5erC4LiJsuisngqL5XW0W0fajjydsVGR1Deovy1i6eczlAA48ZRoz%2B2pYN3Ad7TnPsFhQ3a4%2FMZIteGUttGlqABP4Ms3mLZ%2Bzg%2BIOjItuRYV5Dsbh%2BxsiZ%2BTBtfMXKL5We81%2FyLAOwzC6QmTK9lN1X0%2FbsT5J0i5OH05YNj3BW%2BZjU5quedGkduyOQERSMHgw5nkdvmNU1AYMdBa7oKoF2nbwJBgFYQ1VpUzCrfht0BPsixPFnPJJnDFsjRTS0GpeHS86KqNmr28c78HiHrMtAejiaxQfb1ZvGk1d3dpG095Bv%2BNtmHD1oMtiuqi%2BTGvM%2FKfKmyNWwWiTgOjpDRy81BhkuWxcfr4E5ZW9o%2FtNrrPfUBTMTQZR%2BBcZ9e0CnyUhCCJ2glfe%2B5E4guVzacoI%2FmaOCI9%2FnscQ5MLXVwCL4hJb9V8xRs38PjCRsKjDBjqkAdqsqA%2B%2FpRoraDAYHxgzlWxdgrbgRMtvQH6TPVwQ07MFwohItlYBRgQrsA1DYEoCJsWN4RBa5drsKyPwz5%2FPsTWlqTq1CfKRQnX4TJikkwIejesRiw6DvNSgNZXyDaedbT5%2FU0Bk8dQqVPBMu43a2d%2B%2FEnCTsCxbXmmTAg5PGTH3%2BEoORKgy1F%2FqFSuhmHS6s5z7rfIaMDat7zjrgH%2BuY54oC9Ig&X-Amz-Signature=7d52731b8924ee7105b3bdddeadbad70f5fcba69aa42c2efb718052050812da8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGH6HJI2%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T121434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIBMDB%2Fb3q60pxyc5gyQTsjtMVWHpj0hUIh7xq%2FIeMBkoAiBIbLRvQ45w%2FLXWb5uQUw4ESJO6oZNYvOcEghQHPkpmhir%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMjRvtgpbkjebrmz%2FxKtwDEHG0OQN8Jw30%2FomlysxhvUsfT7avVgErS4pmdD0T0fA2%2Bx0ulTIxRLWShFSae1iCjU%2FUTcbhUZY5sELx5GBE14WVWNhk%2BjagnydPTdb8gEKIwB8JwhHowff%2FhBtqrR2dlIc9ac6CMjgtsf%2FncjE%2FerMXJqnwkxFk6jWDGtAcVfzkvKVug37%2B8%2FKFjDjP7LP93kVnspi5TXHuC4snTNQlIYcK52DuTbmhQ5pgJQ5jGjnvSp5wT7WdH7Zd7KW8u9wI6NQ4l%2FB0vpGz8Ba8WgC%2Fz0q4fOJh8joaUoyZ%2F2mPgkUOAu4eEB5QWa%2BsLVpjwYhjMDc9Fda%2Bpdt4qpJ%2Fv1%2FA4Y2TDB7qEG2n4kEXvM%2BGszmnbJk6XpLZnPZgohI09qyqosC2x43lwocKMCOVBBb%2FalMaHZ0jR5nbgUDyBFZo4l2IjLLo0uRsu%2BFHGKfoYjrMUWKlybiDL4fIUF7DGx9QgRDIPRg%2Ffom64fAAlNKCOHHPFfhRutHTenvyqUSQM7BJ3ZJnwswNd3zE3PXjfEnecgGRAJyx5r06Xqr0dIKLmwKLs8JjQztdMSHSpvv3fSNKHOKY57NPMU%2BhOwDYzhNV8x1OPmMZdw45Lrd1lZ2RCQauVpBDB78EP79E9FQwn9KowwY6pgHl2WesL9vEWAxLL6OcRlTepSnFx2Ze3ArdfKJzcmtkosLhwJ9WRlVvafhdBPLS0PIY3oWig6FTBpZYA4PaNsk51Kb7SYH6KdrHL%2FA%2B1z8c8vqDvijtXKjTRSWsaCqk%2FgEcI4Jc586oWEIzVzSZMNM57DU5HwSxdUI2TJQuJj%2FjHhf9QmKPoWKzOwmG9lxYcFq05FfDZOYER1ArBHvk6l73UK5QGeQy&X-Amz-Signature=6a06ea55c086b2824f444425f97146982cc1bbc3c3a8f85955a1f716e7a31843&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXNSNZF5%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDdQtmQLA%2FyXtJOetSP%2Fo%2Bq6Jkd5qWzIIAvytOfv33U7AIhAKjv5uRac02vbEeJuMt%2FmuuFwPm26bjcpbTuOdbY%2F7xYKv8DCF0QABoMNjM3NDIzMTgzODA1IgweaMr81hLTh%2FNumhQq3ANrupa1OkegVJNBhgfrozuQT%2Bx5DnbZe7vH0%2BtZrgYsS8hPS0bAgkoPsr%2B5juT85Vztbhy3axGFx1%2BOdadCUMDM7PQ7qXwImnNbbh2rnrNTaTeFVhsSsa6NED1cqAEQ0oRqcIJthuy18%2BWhcc6DD4lyrzeT1MJoivdz3Xefau3TOAFtcWM3q9OGsyKVOW9aEDkJNdshYqRTyDIcgipKbHlbwhaEbZ1%2BOQ%2BpoIurZ2OtPZtWJKE%2F3y7SY%2BMae%2FC6xSJ2gsW9ZIPQNxoB8SJ5yadTUEcJpnZytYB9mHIbQBkeRsx538CV9sTwKPMZUgk%2FDLkAuTcvYuyRvJhaieQK3PTZ7Jeh8nDyZXynIxdAOmfOCr9tsb1Ucsxv89jOEXh4r2sfv3NtTI7lVKLIeuyOtZCLbcsZejFcjV4DdHd%2B%2BitLclHNmUqZa8taO4nXayXfzwr%2BjqQmt91F6KWEiByehvMwkJMlVBDe46OeYkCZeiDTknrDGVrWQWbqQeiRBDlGgt7F%2BUCfnFmQWQT0Z8AIWZR7v5vpAC8eCgeQeV7Vkbzq3GYd6A4xVR2Nbkw%2B32LUMT7GNDfqFRj6hFzC6naDRavv4gHuLMhK%2FYiclHkPW1Sbw%2FuFo%2B6rNdvlo4S3ATDgwqnDBjqkAb3%2FV0S0HPu1Ytvmq04FZ%2F3mqOd7LnTo4d%2FePD3qTIQ4fyKqJnhOGF1PqqoQCFj4EhifhrkrYst4E4hjeFCbtm1lfk5pfk0wdfcadFFkbBprPEHOL2lONZf0qnAY4Njai6UgLnoDPKlxw0nqzBay%2Fl4IzasbHGlgZ2CKZ7aZWfy6nkVcdW4E6Dk2EXF7Wcrk3GZSZhaM2dz23w8naAThIlrdEnCU&X-Amz-Signature=ed58ec6ae3cab53046646c98173b9d4e7e4cca22c095bac032edc48a4ef93347&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA5LQFNS%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T121430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQC%2B268h9nydYNrzYjRRy7rIplh8Av%2Fo5JsiUkm1t22VAAIhANr7OCNvkAoapCVMN68LlqsJFx8ENX9GaNZ9kpvwEnLPKv8DCFgQABoMNjM3NDIzMTgzODA1IgwZPbTKCEJx6RkrSmAq3ANPRccKKtmOvDw3seCYS4O3Jzi0fimijkDX7ohVaLYy6XNrioHeB4dtHAFtbXII5rLg6HaBBLAPJ6xDebqXvHlaM72UjVPgJq3ao1Sk8iEAvAMAcr8EYm1b1KyFxJBzGb42FZhFCmsMtjhsQkFHWBwIhmU04KpsCyycy9snEMGL7%2BEr9iIeKBNcW1iqXGfXuliEmWr5erC4LiJsuisngqL5XW0W0fajjydsVGR1Deovy1i6eczlAA48ZRoz%2B2pYN3Ad7TnPsFhQ3a4%2FMZIteGUttGlqABP4Ms3mLZ%2Bzg%2BIOjItuRYV5Dsbh%2BxsiZ%2BTBtfMXKL5We81%2FyLAOwzC6QmTK9lN1X0%2FbsT5J0i5OH05YNj3BW%2BZjU5quedGkduyOQERSMHgw5nkdvmNU1AYMdBa7oKoF2nbwJBgFYQ1VpUzCrfht0BPsixPFnPJJnDFsjRTS0GpeHS86KqNmr28c78HiHrMtAejiaxQfb1ZvGk1d3dpG095Bv%2BNtmHD1oMtiuqi%2BTGvM%2FKfKmyNWwWiTgOjpDRy81BhkuWxcfr4E5ZW9o%2FtNrrPfUBTMTQZR%2BBcZ9e0CnyUhCCJ2glfe%2B5E4guVzacoI%2FmaOCI9%2FnscQ5MLXVwCL4hJb9V8xRs38PjCRsKjDBjqkAdqsqA%2B%2FpRoraDAYHxgzlWxdgrbgRMtvQH6TPVwQ07MFwohItlYBRgQrsA1DYEoCJsWN4RBa5drsKyPwz5%2FPsTWlqTq1CfKRQnX4TJikkwIejesRiw6DvNSgNZXyDaedbT5%2FU0Bk8dQqVPBMu43a2d%2B%2FEnCTsCxbXmmTAg5PGTH3%2BEoORKgy1F%2FqFSuhmHS6s5z7rfIaMDat7zjrgH%2BuY54oC9Ig&X-Amz-Signature=ba612b2282776e9588ef18c1751d5b53c736fa40be8c65ac61eb1a4b0c219e2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
