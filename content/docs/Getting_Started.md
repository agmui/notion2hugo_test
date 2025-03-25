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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TM2PWJX%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T050846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGz1Fh3TBp9FUTt%2FHHJ%2BpV%2Fll0YSg1BTz8thHWpp%2BeFbAiBU2ckFcVK0g8qp2Qdi4dv6vSOtKlkuR9pSngozBYw9VCqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNiehIit0i9TNiDI7KtwDh0uT%2F5nqnuxCyaNPDoqScZivKJ4Nv%2Fs320NvrTe95hLwkl9gp5YjkUBobHCrRVbMyLgtaGrlO%2F4gvdQKWw%2BUUSXSwHoubxGDRbtTYz8B%2BwuApMgeoQVGMZfJiHIa0FrdbYpT8PXipEwczZSmC26PQ9gEaYXUVOrBvDzXt0YXbT%2Bt2yi3v50dzk08AnHxOMFVwOC0c2cPLtcaCacc%2FZoiYg1rCj9svRP4pugJm90Y2RQEVwd0uKg2%2FSNxVFcER9qHo%2FlSMtuW5De%2F%2BmyA%2BlYHBZde8lMBmMdWopvCcmHlMOwXruf8zbkQKcwdt9N0%2BgRYFaQpIOFRe7lYNjjIrXQpBaYOeukZUafZaXcQBuf5VdTlDiv8j1aUcWqEs1H8cd5fu1v2fTVP0ZknAWseSgpYVCWGZiD4MUMfrSdpcDm%2BZS2HzxSl4ww0IR3jj2eGyDDwhNNKcusen8FU1CZCVxW%2FJNdBsTDB410WWRxSXz6%2FDjgNj8CcsCCJeTFDch6i1bF1jo75RjgvxcZV%2FZAOUN1D2HrDBoojlvmIFsuK6n2zpY5Jkc1E6uM5fkfqXZ%2B9IC%2BsqUiglKihtTEyf8%2FBiolSDOiPnU13gx50VM3Q3savf9m8pFfv5trj0cjAMwEwhvKIvwY6pgG5sh9Q6eCaPQ2YTaqdOyl5otMzHyzTzFXF1XTdqmOSqhdFU1fVEMkZocQ8i4cchAEGce2Ogk3zQNoHeUQ6ujSmQuRvn9sQA1N%2Fgs%2BR0wX%2B3oW3dJRk7tkLqRsBbuDPy41%2FhPs753Ymgoxgu1Ly3CPaEWR2s81GrnHyIpHXlVImf5blGHrbFCGVOASe3e9kgAYrhf6D6ODsXAwr%2Bljnv6ZYbDcNc%2BBm&X-Amz-Signature=856229dc5e7501c356686db3afb1984f29e14ba898e4e0164adeca10aa2e38be&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TM2PWJX%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T050846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGz1Fh3TBp9FUTt%2FHHJ%2BpV%2Fll0YSg1BTz8thHWpp%2BeFbAiBU2ckFcVK0g8qp2Qdi4dv6vSOtKlkuR9pSngozBYw9VCqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNiehIit0i9TNiDI7KtwDh0uT%2F5nqnuxCyaNPDoqScZivKJ4Nv%2Fs320NvrTe95hLwkl9gp5YjkUBobHCrRVbMyLgtaGrlO%2F4gvdQKWw%2BUUSXSwHoubxGDRbtTYz8B%2BwuApMgeoQVGMZfJiHIa0FrdbYpT8PXipEwczZSmC26PQ9gEaYXUVOrBvDzXt0YXbT%2Bt2yi3v50dzk08AnHxOMFVwOC0c2cPLtcaCacc%2FZoiYg1rCj9svRP4pugJm90Y2RQEVwd0uKg2%2FSNxVFcER9qHo%2FlSMtuW5De%2F%2BmyA%2BlYHBZde8lMBmMdWopvCcmHlMOwXruf8zbkQKcwdt9N0%2BgRYFaQpIOFRe7lYNjjIrXQpBaYOeukZUafZaXcQBuf5VdTlDiv8j1aUcWqEs1H8cd5fu1v2fTVP0ZknAWseSgpYVCWGZiD4MUMfrSdpcDm%2BZS2HzxSl4ww0IR3jj2eGyDDwhNNKcusen8FU1CZCVxW%2FJNdBsTDB410WWRxSXz6%2FDjgNj8CcsCCJeTFDch6i1bF1jo75RjgvxcZV%2FZAOUN1D2HrDBoojlvmIFsuK6n2zpY5Jkc1E6uM5fkfqXZ%2B9IC%2BsqUiglKihtTEyf8%2FBiolSDOiPnU13gx50VM3Q3savf9m8pFfv5trj0cjAMwEwhvKIvwY6pgG5sh9Q6eCaPQ2YTaqdOyl5otMzHyzTzFXF1XTdqmOSqhdFU1fVEMkZocQ8i4cchAEGce2Ogk3zQNoHeUQ6ujSmQuRvn9sQA1N%2Fgs%2BR0wX%2B3oW3dJRk7tkLqRsBbuDPy41%2FhPs753Ymgoxgu1Ly3CPaEWR2s81GrnHyIpHXlVImf5blGHrbFCGVOASe3e9kgAYrhf6D6ODsXAwr%2Bljnv6ZYbDcNc%2BBm&X-Amz-Signature=fee0b14f9cec10045e97f239eda217c45352c45e4167886a46639f69ca5f6a3c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CF4MOHP%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T050847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCicYBryAZWGPk0R94Q1EdLe%2B4MalG6YIRwIHZeUvCIIgIgEyd%2FS4OYhLMgUovk5WaYF0UPexqPVOKO7MKkjGqs%2BW4qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWJ7LijWSxjEkYXnircA2tvTNvSR0thOHWfaOXBjRGLKhOxDnz5uEvyP8a66D6U4%2FARGJAkD1xSIGHms6F8bZ3QrSMEbLuGCAbXIXQZbustK6dXlYBuo8iQBAyJx8pJIGNuwekUfo8RXjLlYQaaNiNhMVvRQSGTJG4PJfN6%2FC2NzlN8Ky3GNJG1VgoxZ1ZJ6YUyCs37IJ3g65pRxEl7CN2D7mZLF1zGtocUP%2BIFQiwTMlbjQwyxrS3SewwBPFD%2BeazZPx59XV1WXIUDM%2FyisU3weC5aZFQ0wTiLl75zsbAvXmCe9CmWLk2fa03mDjMMBqO1g7mxyLVuSfQeYgYnbi7ELY5aQ26L5mUOWohYvJOKstNr6zt6cgoA4ShsH7%2BY2yWIrM2E9djCcvS1IqECK5njTN%2Fs0oaL7ILORXyPg5vLG6cW%2FeSCzlrZWXQ5ajB2ZBOQR6t09qRD8IuaJsVJYfBEX737mojRsqvVdigBTUxAvNkm4k7bxEQ2uiwM9bj8DtanHAypbLZUVaS6uqM0siN8cCcKMXvwEtdplfeQh1UwZ8WRUo9SbISjTKsS%2BtV1IVzTLV5OGOaDC0a2vxdfdgXn7ph04%2BjMpeGOP5LzbjqbxISRBD%2F%2BXuBgMRAJJ8RuwHJcssP8blsbQzCXMPjxiL8GOqUB6tUAfPT0cqt8POE1Fr96FJzy7QjQCyl1oDCdyDpCg%2Bebd74qCEGoNe6sUoLqwlNHaQHI%2B0qSoBqFykIzb%2Br1YZdBSzKBetwkvqJ9FBQmwdKarnm2T8hNTJPLIDqcFXZIdZudcxTY5qoe43rjk6O2u6leAJSaKtEtZ9JZZxSXFsZYTZTI1NtiuafuqNK6GEZuqat%2BN3lj1TA4cS%2BkW2EsdFlyHGBg&X-Amz-Signature=52b0024ea43532aa509bfbcf55077360105b550bb7db72529343685876c7cc52&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLK4RUVT%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCvgSXj2%2FLtC2mS1jr9corkZtNqG2Yyq9u6gVryQLeJAiATnzgRbMyON5bA9r561%2BvxZW8RiyH25pk%2FMBtvyGr%2BESqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3xsUwG%2BYdyYBpMRpKtwD8xm%2FyWJXwA2rO5dw1DhZZB77wajoAkrMwX8EGYXTn5HeE6701hUoxOEAyOuwtXb0Lho68tHu5icnYvNsSc3Z4zlywl5UsvcCJHhZJwmQvM8qJDXLBj9hkL%2B3Zu90HFXRryJFZw0WNMjWnqTEovn3eICBMLOD%2B2Sz%2FEsZueyiX%2FEgc8Da%2B%2Bw8LmAD9vrewL8xn%2F%2BTLsRCRL92hUvGa3ikM7YG3jkuo8v2raK8vMNwq%2F9r1F1vlY0L3OiaPg4oaiuaxCOh8VhtIsWinr2P7lHkNQoXgjePCkOwERVlz%2F4HAJRfEffwQe7AAME2jxgjfNDU6ZhtPnbhNkuQat%2FGfnCJmgbZK9joQXSTNERYniYT7jJOTAp3N7fulLSQz6NGMD1YUrk2jrjsN4P02hLgVTvoOswRox8gHvSGPMQApONrNBJuqXKSoc%2FM8YjuZb58QdUpNV3jKjKFy3ABKtznnPjVfuK%2FdkAJUTqI5sfSUyT6IH6YjQDt6kqNTuD5A37o3vs%2BSVxiOMVMFw2tz8brahps48ajRabVuKrwAtnNMiZzBCKs%2BbeJJSSHaWkUaGkrJUwaRhzzkOU05GlS3czKNRM4PgRHLt5qxEQMJywDk6EcmCwhovkgzpA3O%2BiKEAAwxfGIvwY6pgGFG%2Fd194YKPPXTt%2BAwki91FBjVwJlgnJon40DvZcnkHclrQrzbnxwyJPsiTAJzKDlmkxETBQyOkJDSngMllbGs7LLxtSNMK93hxC5vf4bzPhmusFpOtV3BUNBnqzcxV3Ob6U1PhPsU%2Fm4N%2FWUpWqA1LeyobOjmdMplh67kSIYE36KFYUSeE6nP%2FWrX85s%2BKip9Cmd6Rl3YG1BFvo3eIjD7bMzzLnhV&X-Amz-Signature=0ec55217c7f67cf4e67fefea219ee1661a30723fa5af444bb6e43c41abe9c260&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TM2PWJX%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T050846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGz1Fh3TBp9FUTt%2FHHJ%2BpV%2Fll0YSg1BTz8thHWpp%2BeFbAiBU2ckFcVK0g8qp2Qdi4dv6vSOtKlkuR9pSngozBYw9VCqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNiehIit0i9TNiDI7KtwDh0uT%2F5nqnuxCyaNPDoqScZivKJ4Nv%2Fs320NvrTe95hLwkl9gp5YjkUBobHCrRVbMyLgtaGrlO%2F4gvdQKWw%2BUUSXSwHoubxGDRbtTYz8B%2BwuApMgeoQVGMZfJiHIa0FrdbYpT8PXipEwczZSmC26PQ9gEaYXUVOrBvDzXt0YXbT%2Bt2yi3v50dzk08AnHxOMFVwOC0c2cPLtcaCacc%2FZoiYg1rCj9svRP4pugJm90Y2RQEVwd0uKg2%2FSNxVFcER9qHo%2FlSMtuW5De%2F%2BmyA%2BlYHBZde8lMBmMdWopvCcmHlMOwXruf8zbkQKcwdt9N0%2BgRYFaQpIOFRe7lYNjjIrXQpBaYOeukZUafZaXcQBuf5VdTlDiv8j1aUcWqEs1H8cd5fu1v2fTVP0ZknAWseSgpYVCWGZiD4MUMfrSdpcDm%2BZS2HzxSl4ww0IR3jj2eGyDDwhNNKcusen8FU1CZCVxW%2FJNdBsTDB410WWRxSXz6%2FDjgNj8CcsCCJeTFDch6i1bF1jo75RjgvxcZV%2FZAOUN1D2HrDBoojlvmIFsuK6n2zpY5Jkc1E6uM5fkfqXZ%2B9IC%2BsqUiglKihtTEyf8%2FBiolSDOiPnU13gx50VM3Q3savf9m8pFfv5trj0cjAMwEwhvKIvwY6pgG5sh9Q6eCaPQ2YTaqdOyl5otMzHyzTzFXF1XTdqmOSqhdFU1fVEMkZocQ8i4cchAEGce2Ogk3zQNoHeUQ6ujSmQuRvn9sQA1N%2Fgs%2BR0wX%2B3oW3dJRk7tkLqRsBbuDPy41%2FhPs753Ymgoxgu1Ly3CPaEWR2s81GrnHyIpHXlVImf5blGHrbFCGVOASe3e9kgAYrhf6D6ODsXAwr%2Bljnv6ZYbDcNc%2BBm&X-Amz-Signature=42d879d1359da7ac90dbe209df4eec550e525cb758adbfa8fa5ca3b22ffc609b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
