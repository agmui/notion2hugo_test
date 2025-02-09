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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJMSHK3B%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T140058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKkyk5%2BHYMrzyOLT86IymCkefConc9cB16V62edILeiAIhAMyGRUh6ZTF5dmJ9cy3HLbXXFc6ayTADyOs6%2BjIUxkpgKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrfFW2UVzhFwXwNR8q3AOkEeDjwoktJW2Y02Te24iu1bsDFVsV5dt2qO9QwzPMi8%2F61HKKFf4SwdGAS566%2F3OxN38bkb3roJY1rFQpPYSJ7r9vIzOqYw3OBP5z9SFLQU8lyaz689Cal3uTdFnBKDQbnIoGi6NQwCa6lQrBdJIAlsc62EK37CaLjWQhpzTcZt4%2BoLN7lNXCr5Fms5AMy3oPxsZgd9F1BcJyxcP12eS3%2BaqvTN6lboC344LWYGu4DDiyNtXYcUzMaBaxtoDN9NXRuB8qyev%2FCTrOGdGa0C1HxBuFqP5eZOggM%2BEY5EdlFyjq79FGI%2BgxTutG8l937I9MZqlCjgd5tT5cGZQnRjrYrIkc25zPeGgfhBzOm90iAfsGt%2BTOW%2B9F%2F7jSBfJngbDHJFmha2jR8XpPf%2Bt694uVkPvuNydQkj5p3lIVhR9An%2FE%2F%2FuBxTnvPTjEvXvJe76nk8kINB0e6L9GDn4Lz5ojoC%2Bp9%2FwZ%2Bi0vAqdMfULIaMqtGBx9laSYjauY7NcgjY9RMzZoS%2FEYpsEZ%2BqSRdDDut1v%2BETZmsbnS9FcDBUyV4XwHapx1fzcG1%2FLUUtXt9s4KRtlIojpzVa%2BRpuxsThN8KlLm5ZRBtVc9ZCk9c%2BE2%2BvNhp9FgCZfDCj%2BDKgDCu5KG9BjqkAflwtmmeHhpJ5dqGFZ1QMd4G1JGAfijERcinD9Y4FVTCfNGpSdqnL7fbzwYUtPGL1KU4%2FZlWpEcr%2BclQCeq6lujEaiYyXLxVGrnmpTIcDe0pTtX%2FKZ901iYjnRUv48gXd%2Bm0BN1T8y%2BpFCYT1SF1Tg%2FcuE%2FuCFbtWmIqLEY2w2obD8JxuqUlOZn2TJlkjAPhO2msJs1wxs2KvW4LkF23UFJQPK3y&X-Amz-Signature=ce115ff54d720d2ec9bfa63fd5ef02361b29eb80300e9b97ecf7165625a9b32b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJMSHK3B%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T140058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKkyk5%2BHYMrzyOLT86IymCkefConc9cB16V62edILeiAIhAMyGRUh6ZTF5dmJ9cy3HLbXXFc6ayTADyOs6%2BjIUxkpgKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrfFW2UVzhFwXwNR8q3AOkEeDjwoktJW2Y02Te24iu1bsDFVsV5dt2qO9QwzPMi8%2F61HKKFf4SwdGAS566%2F3OxN38bkb3roJY1rFQpPYSJ7r9vIzOqYw3OBP5z9SFLQU8lyaz689Cal3uTdFnBKDQbnIoGi6NQwCa6lQrBdJIAlsc62EK37CaLjWQhpzTcZt4%2BoLN7lNXCr5Fms5AMy3oPxsZgd9F1BcJyxcP12eS3%2BaqvTN6lboC344LWYGu4DDiyNtXYcUzMaBaxtoDN9NXRuB8qyev%2FCTrOGdGa0C1HxBuFqP5eZOggM%2BEY5EdlFyjq79FGI%2BgxTutG8l937I9MZqlCjgd5tT5cGZQnRjrYrIkc25zPeGgfhBzOm90iAfsGt%2BTOW%2B9F%2F7jSBfJngbDHJFmha2jR8XpPf%2Bt694uVkPvuNydQkj5p3lIVhR9An%2FE%2F%2FuBxTnvPTjEvXvJe76nk8kINB0e6L9GDn4Lz5ojoC%2Bp9%2FwZ%2Bi0vAqdMfULIaMqtGBx9laSYjauY7NcgjY9RMzZoS%2FEYpsEZ%2BqSRdDDut1v%2BETZmsbnS9FcDBUyV4XwHapx1fzcG1%2FLUUtXt9s4KRtlIojpzVa%2BRpuxsThN8KlLm5ZRBtVc9ZCk9c%2BE2%2BvNhp9FgCZfDCj%2BDKgDCu5KG9BjqkAflwtmmeHhpJ5dqGFZ1QMd4G1JGAfijERcinD9Y4FVTCfNGpSdqnL7fbzwYUtPGL1KU4%2FZlWpEcr%2BclQCeq6lujEaiYyXLxVGrnmpTIcDe0pTtX%2FKZ901iYjnRUv48gXd%2Bm0BN1T8y%2BpFCYT1SF1Tg%2FcuE%2FuCFbtWmIqLEY2w2obD8JxuqUlOZn2TJlkjAPhO2msJs1wxs2KvW4LkF23UFJQPK3y&X-Amz-Signature=dfd0c2aa8eb4a943d7da3de200810d71f53473e46b8a560e3044bf2335116fce&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZWKZD6B%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T140100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGUiDFWxuGzvwXnCnOD%2FtnkTTmLcrhSN0I9qx4MS5XoZAiBoMnHm0SVbMwUUUMrIYy9dpZwdI70IkPn2W85gqvx2oiqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDxB94RolXTs50nD3KtwDIrS4Jm%2FF%2BODa7n2cMrK%2Bum%2FQ694%2FM24dsyyXynsQJzpk1wJjsFJdXz7dpNBFS6VJp9QCMhT5RvtL3b2GFFlgLxPWuFXx6SNRffelucUI7WSiMnqrFqf2eiNZ8%2FvOqJHsZOGKh%2BGnsXo8Am2%2B3zCrOTOOwRGEl%2BXV93N5nu4TMbE286pKngGOPK1mfYPBuI2ouSoAUiRamo7xLLa5WNzu1Ba1hizvjVUyBxTUjKClWANvZ14SBJmAr8HXIVYmqjPrscZvPSLUr9CVWzQGh1p2l%2BIRwOiWQS46uLBX%2FqAWT1br77IfSSC5U4pbL3Bz5fhJ95Z0EAsfMabUQ1ifHhGuLYz5Nc6YLouEV5blkLk8bjRz7d7hSXQXSIfQn%2BOyYHXn%2B0x%2FDDYES%2FkBhH2bRBiUA6%2FAsajbqhjC61B04%2BLTzuItwnfoPunNGQGJ9U02SeKlLQpug%2FkCOf2cqqyo%2BPVLSintPIoXOTwRJiLT8haKr2DkabmOTIcdBTArpEtqH1FRDo07OS0iC6nUhnyv3REQl9uwmX6%2FHZbRveAb2V4ZuMoOQYKgFi6kX0qvQlE5u4Yx9o895cD%2FqqkFx2dnyQBoU6eSxjt9TbeREeSa%2FRYALM19TfEM5c7HEFAhd1gw4uOhvQY6pgGDjKRK5Ska%2B591lUGZBi4uHrIFw4uPovDQ27f3xT%2FdxL5epTk7SpHA35Z4JkT40aoLAi75ENOR%2F7Eimv16A4vIspRSy%2Fbp8yuIr%2F53%2FKyaVejwllKv5xSj5gxR7lgqjGCdIni7tI3x1xs8hAL84Kln2ok%2BzmW%2FTXtuSJpJKQYGoA1ETtMVoyUERu%2BKELVmruYY6zUv2FcA0QevXMcYGxmb18FiKBOH&X-Amz-Signature=f68cce3b5b2be432b9dbab790f3c7883f7d859ac3793c9e6d6bcb4383529dbf9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UK3FM3I%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T140101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChafbmILyDGfafMF25NtZv0O4tBh2YK%2FlNAGfcnnXlsQIgbmuCRJP6amh8c2aDMktGl5JGAo5aY9qXwIUQHnujo5cqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAjBoXZM5IRrujn3cyrcA%2FnKoK5HifEvPT5DZR7KiOhPub5mZZUbHohGODF%2Bh%2BoKNfIcwJbNPbb2WgYr0x5%2FsjexGPkPATgBnlOMIvO5HywL8digcffC%2FlkRFEWOs1rjOC5ZEFbca5piEc%2Fs%2BigJBJzbGruTUrUH1hcYsT0fr0TOfAkpyb015%2FKpkf8OMS9GCHjXViGsmPGtrvEvDSOEeEMxNiJLCdk%2FuREPzOdjUivwMbLSze147Ai2vZwCDyjaBHHX8KpLBUHFbykM9kZ%2BLOkzibWXgN4A7r4eS4WPibLi9N3FvE4iMHFsisGukTxpPbA%2B61DCUW1UoBQzXO%2FChWeyfd5T7Myqh8QQ3Xv4Ewnjg3dZ0kwY6%2Fli0cB7b8MpirtplDIbLckJfLG5SaZfo7YQS0okrVTauQJio3ZYeGSxsm1jTQZL43TgJvldeTyvhcC6Nb0H27rQapYt%2FXL2t2wajmmxMaJksLaZyEF5slGqFMoB1kUZMbzdjSvYJm89MbrLnvENmFZ1NXksEsR6%2FsBIMmYdmrGJsNcsu4T9JBtVQBr8bZ1%2FZ8eD28KaBfOUbShCxH7A15ItKP6N6AUUdNAE0sEhSUtfVLaqj0nXi5QRt2SeVoIwNB3feFTlLvZnxhUhqtyuutPNkk2bMPTjob0GOqUBzJnGBICigLyiAiOEWmFRFNmlSz3GaplHFUHQrcFrb7dOq90Blxnybe0AF0aKRy3MFuWqnBnzWgQQInUy3pwoPPkzXPdEH9R9etTZUnPli3rKXDuZ5yUbV5dt%2BncopyShOl607Uiw3lXmz%2F7qXjOeO3yxis2AdXAd89YKiIeQ6UmO6EoxnXAshcWphALiTRK0R8dAzKWoneQCieQpzGxyInTvqg9o&X-Amz-Signature=f50a9eb66b154e2d32aad41fb3efe8a46a19c5e55a484e489a18cf0f70c920e7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJMSHK3B%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T140058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKkyk5%2BHYMrzyOLT86IymCkefConc9cB16V62edILeiAIhAMyGRUh6ZTF5dmJ9cy3HLbXXFc6ayTADyOs6%2BjIUxkpgKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrfFW2UVzhFwXwNR8q3AOkEeDjwoktJW2Y02Te24iu1bsDFVsV5dt2qO9QwzPMi8%2F61HKKFf4SwdGAS566%2F3OxN38bkb3roJY1rFQpPYSJ7r9vIzOqYw3OBP5z9SFLQU8lyaz689Cal3uTdFnBKDQbnIoGi6NQwCa6lQrBdJIAlsc62EK37CaLjWQhpzTcZt4%2BoLN7lNXCr5Fms5AMy3oPxsZgd9F1BcJyxcP12eS3%2BaqvTN6lboC344LWYGu4DDiyNtXYcUzMaBaxtoDN9NXRuB8qyev%2FCTrOGdGa0C1HxBuFqP5eZOggM%2BEY5EdlFyjq79FGI%2BgxTutG8l937I9MZqlCjgd5tT5cGZQnRjrYrIkc25zPeGgfhBzOm90iAfsGt%2BTOW%2B9F%2F7jSBfJngbDHJFmha2jR8XpPf%2Bt694uVkPvuNydQkj5p3lIVhR9An%2FE%2F%2FuBxTnvPTjEvXvJe76nk8kINB0e6L9GDn4Lz5ojoC%2Bp9%2FwZ%2Bi0vAqdMfULIaMqtGBx9laSYjauY7NcgjY9RMzZoS%2FEYpsEZ%2BqSRdDDut1v%2BETZmsbnS9FcDBUyV4XwHapx1fzcG1%2FLUUtXt9s4KRtlIojpzVa%2BRpuxsThN8KlLm5ZRBtVc9ZCk9c%2BE2%2BvNhp9FgCZfDCj%2BDKgDCu5KG9BjqkAflwtmmeHhpJ5dqGFZ1QMd4G1JGAfijERcinD9Y4FVTCfNGpSdqnL7fbzwYUtPGL1KU4%2FZlWpEcr%2BclQCeq6lujEaiYyXLxVGrnmpTIcDe0pTtX%2FKZ901iYjnRUv48gXd%2Bm0BN1T8y%2BpFCYT1SF1Tg%2FcuE%2FuCFbtWmIqLEY2w2obD8JxuqUlOZn2TJlkjAPhO2msJs1wxs2KvW4LkF23UFJQPK3y&X-Amz-Signature=142430ffac7baa37b754c302302db6937de75fd689e2f3c2635611d7b008cd7b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
