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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNML6M2L%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T061025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIA%2FxCGMJtS7ZR4zaBP3bUW1oIqFnUcj8PKmCoVHucQnMAiAdOGnSN%2B4xiDdxfOL6nPDMjv0IDcChhELbS9ykHmZXLiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7XQnPkUPSe%2BMn%2BOMKtwDgis6%2Fk7eYlQetWL7NrB5xaqntF4nRDWlddh8dH7zAn%2BGz%2F%2FPS0WlRNyGEtHBjk1B4YNNWLbP2F4%2FgegNzG3zbnCVzaq%2FHgOfYVwg2ki18AvbfB%2FOBc88l9oDFud8CZOFbI5EAX7kQ7QcKiYESSEpODi6FxsPTJ3BJyIH7J4TQNO%2FeEcwFRlbsnMRpTgaA55Bqt1CUeizH4HaFAo8FgXcVcrfIsmA%2BWbsaI2cUXdNYy9Tflx5ZB%2BsZxYxa9%2B1W4fcouRFH61%2FpV2hQWuBvq3e2OxDB4RXvdcDjL6oqXlfnF1dse28XjPrltHSFdvQDU4JVvceO0qFX0yeeyap1%2BmbUP%2BaBUyxjw5TEA5kHncrZeRLmSJwkA3yykQmJosxi1rrQueyCD%2BkGQ1t2PdW%2FBR70zmGhuyRSutfn%2BosK%2By8Mp0nhGPzGBEbBGLf1BSljiFk0lFR9dYy7eVtKeYE0JW0LesxJvp425DHWiRgufMeh%2BYAIunAqFbj3kx0FBTmiO%2BOR1Me37a9ZdWUFMBlTLaPIbd1XcqNCyL9%2FkY2AG%2B0LBbo5FZBORdw%2BDwyakQ1Dc92f8H28gFH2kGp1mibZ6egK2uZsi%2FFftHcrwfi9qXoZfc3LD8dx%2BuCD2TPI9cwye3nvwY6pgGxqANYzOSJ0Ij9abNqdQ6Is6mgkvcSCP1tetlEevWMGpIXQg9Tnx%2F2cueVP0DCNFnWK0ECk3EBtBwZsiJRbGfZBOVMF%2FsERmlUJyZSFP%2FlxDiaz5dph4BgcePZ5K%2FG9HslcOdPFCPgU3LCjpAd7Lukr0fmXE8%2B35CK%2BVIxTnlpWJspm6M%2BjKy2omv8ievpsQBOLTS%2BnDzV6QoxSpmjBUklABD2Cwf%2B&X-Amz-Signature=642125a49269d135d68b7315a6276c46c5fc4c321a865ebb4cb6619603408f74&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNML6M2L%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T061025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIA%2FxCGMJtS7ZR4zaBP3bUW1oIqFnUcj8PKmCoVHucQnMAiAdOGnSN%2B4xiDdxfOL6nPDMjv0IDcChhELbS9ykHmZXLiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7XQnPkUPSe%2BMn%2BOMKtwDgis6%2Fk7eYlQetWL7NrB5xaqntF4nRDWlddh8dH7zAn%2BGz%2F%2FPS0WlRNyGEtHBjk1B4YNNWLbP2F4%2FgegNzG3zbnCVzaq%2FHgOfYVwg2ki18AvbfB%2FOBc88l9oDFud8CZOFbI5EAX7kQ7QcKiYESSEpODi6FxsPTJ3BJyIH7J4TQNO%2FeEcwFRlbsnMRpTgaA55Bqt1CUeizH4HaFAo8FgXcVcrfIsmA%2BWbsaI2cUXdNYy9Tflx5ZB%2BsZxYxa9%2B1W4fcouRFH61%2FpV2hQWuBvq3e2OxDB4RXvdcDjL6oqXlfnF1dse28XjPrltHSFdvQDU4JVvceO0qFX0yeeyap1%2BmbUP%2BaBUyxjw5TEA5kHncrZeRLmSJwkA3yykQmJosxi1rrQueyCD%2BkGQ1t2PdW%2FBR70zmGhuyRSutfn%2BosK%2By8Mp0nhGPzGBEbBGLf1BSljiFk0lFR9dYy7eVtKeYE0JW0LesxJvp425DHWiRgufMeh%2BYAIunAqFbj3kx0FBTmiO%2BOR1Me37a9ZdWUFMBlTLaPIbd1XcqNCyL9%2FkY2AG%2B0LBbo5FZBORdw%2BDwyakQ1Dc92f8H28gFH2kGp1mibZ6egK2uZsi%2FFftHcrwfi9qXoZfc3LD8dx%2BuCD2TPI9cwye3nvwY6pgGxqANYzOSJ0Ij9abNqdQ6Is6mgkvcSCP1tetlEevWMGpIXQg9Tnx%2F2cueVP0DCNFnWK0ECk3EBtBwZsiJRbGfZBOVMF%2FsERmlUJyZSFP%2FlxDiaz5dph4BgcePZ5K%2FG9HslcOdPFCPgU3LCjpAd7Lukr0fmXE8%2B35CK%2BVIxTnlpWJspm6M%2BjKy2omv8ievpsQBOLTS%2BnDzV6QoxSpmjBUklABD2Cwf%2B&X-Amz-Signature=31d4547725fb1eecfcb04e342ae0dd8610feb2a5b1c7d8e6f5fb9adf2470fea3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667EASRX2%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T061027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIHb6ybAMqX3dDovCe9wdjR6X763y3UhfA%2BI0ZM2MrghaAiAlEzArwukLEER%2FGAiMDHDmLGmq%2Fjt5mI%2F%2BI8LmlYBQMyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeL4qk3A%2BoaA5urY%2BKtwDL%2BWzcMJBtOIDoDgHB5H9K206R0lOKnqfvZTx4ByVLqkMu%2BZbVBtf3EULgG6CMyGImNBuXEWgmLL6vehGqY1sMmJrahLIxSU0gJFI64I4ifZ0wQRiPkQ7mseg33P4oMfwIVtzIs3Xr9zOPD2Rl6ezeEfp7DSFWzJrOljPjmSLLKmZPgXu9WfNKe%2BGTTFCWCkaiTy0HKqVUKQv9sy7st2tFRdUZ0ATJQM%2BEpv98JdNKJ8Z0g4dMTDbC5kMDXCkV0%2BzbBMDvNNkPuGyp0F2oOjQh7qYl1MRoReC4BBcTSEgAEdAlcNR1aomKCpSFE3ydfBI%2BILqVxUkzmOyURFoyqqyvRhavUKoVXAbEy%2FXl2K6a%2FGRim5Z1afoWV2eIVX78Zb%2BnKKS4WGbWKEKy2lTdgmtzIsT49UQDPLBZj0KUR%2Bq5tIk%2FzQBRCzekoPM1N3HaXn3gMzNkJC2Hj1T%2BXcKvsSb7N6tKnTYvMEf9R06nUZT1zMLej5n1WmMIlrOQebI9qyatUKnmeXjG4Y8oNI%2Fl6bZwWG8t20Nj1nLIP8P8lmb1hWadNk5sU%2BwHxAhn33m6s3FCf3gtYRKlb2mEtF1YpG4O%2FAbloOzGPKhi6oQoaSN7gTnSv29DHiS3YaTBAEwse3nvwY6pgFl7zS9XylWFC47XkI9JvOyLJml00Fkxy7FAqLar%2FWIvDttgu5wiGE1%2Fc7bYUgMGVAjV3iQTb6dwYbVhijJswoSS1AMx%2BSBzaVTRecxMDqxXiWT1%2FsrpxT62jwHS%2BmX%2Fqutl5K36vcMyYafyXYa260lpEV378Mt7j5KmpkDv796AElbY9yEAbWVwGwPH56FCBGzu1ZlHPND7vL6rMi65OkVQY5c%2FKr0&X-Amz-Signature=83c592c188a508a8d08d901acb5e649d08ec920960e3829947f8e2e6f4a7eaa7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GAZZJWX%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T061029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIE9qNH0eSrZERxahJQNK6ukjAV1cakRp0Nd%2B6BXNee54AiBMaMbERs%2Bv5YollbQeUV3gVoKTGiz3qialhUgV4UZ1iCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaFZd6sEn4eX7DpLhKtwDNdSqeD231%2Fugkij6lYo%2FcG8Bm4g1yRZNJHhM4CqKE%2FJzYz45OL6kHq7RIBUauRXZDSawmBkm%2B1dzuIzCD2WE%2F5w1Zfdonq%2BtYfahR%2BY6UzFdJLRnI0qUcBiRmJVPb82sozxwgJCiPgerfPaUsiuM5b3FQPE6S9A%2FKDYYozb36xn7kN7k8WXPumTwKPzEsjO2stJEl%2FEwC4CEeZbF6dVcVNsDvHJFH88G1CglMUTfGvQkNnIsx7CEshC72UUbFPRqIOklCbZJYqm7zotDa5L5u4I1Pohs10C28%2B3DlQUP84YOALyREE%2BcxmjotwkWjvJD5NwI0n9RwNvxUfUmOyZJasOymLhQfEtuPONSobQqMkqapvb8Tgtvk4%2BP57VGdapI39gUE6luLV2DtU7zwzfTg8ZYXFDTW9CueNmx1r%2BTIT2xEQ6kFCWu4Thwqt%2Bs3pjWgHD3zpXkXbqOG8AZigtONiYj%2FWJ3xXg104Z5JVSXswwOZ7zVIKTEWM5uTTp3wOZ8h15WGMGZ8EmnxURtd%2BO5o2ablQcpniBOxS%2F2%2Fsf8FqB0tIzIV%2F%2BEEQFb7OKv0bh%2Fh1pO7FmDBWccUYPVr3iS0Q2g1M%2Bllrkaqmr%2BXCPLEdV4OmG%2FGDkMxDwnOP8wzOznvwY6pgG2WkFWIurL2eyuX7rBheBcXYqk7X%2FvBjS9SEUZf%2Fdj9ldT2MasW4UOkMtuxxSEp674wO0D8iAhEI1fbde6WKPGaiNQh3swvKqgR4WJhP19LtyBIZh6b2zgTFtw4gCOogX35OpjP9mAO0SpTmM4Ysa1i16lM5tciQeS6VsqJI8XwKQSg4ZXMd9ybFVqFM5Bh%2Fu%2FLxJXQcszT6Cmgox6dYO8QlCZk6Pc&X-Amz-Signature=bee20a70459f426a88cfced0b6213aa6052c3105023ebb6510cbb1cc25b0b6e9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNML6M2L%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T061025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIA%2FxCGMJtS7ZR4zaBP3bUW1oIqFnUcj8PKmCoVHucQnMAiAdOGnSN%2B4xiDdxfOL6nPDMjv0IDcChhELbS9ykHmZXLiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7XQnPkUPSe%2BMn%2BOMKtwDgis6%2Fk7eYlQetWL7NrB5xaqntF4nRDWlddh8dH7zAn%2BGz%2F%2FPS0WlRNyGEtHBjk1B4YNNWLbP2F4%2FgegNzG3zbnCVzaq%2FHgOfYVwg2ki18AvbfB%2FOBc88l9oDFud8CZOFbI5EAX7kQ7QcKiYESSEpODi6FxsPTJ3BJyIH7J4TQNO%2FeEcwFRlbsnMRpTgaA55Bqt1CUeizH4HaFAo8FgXcVcrfIsmA%2BWbsaI2cUXdNYy9Tflx5ZB%2BsZxYxa9%2B1W4fcouRFH61%2FpV2hQWuBvq3e2OxDB4RXvdcDjL6oqXlfnF1dse28XjPrltHSFdvQDU4JVvceO0qFX0yeeyap1%2BmbUP%2BaBUyxjw5TEA5kHncrZeRLmSJwkA3yykQmJosxi1rrQueyCD%2BkGQ1t2PdW%2FBR70zmGhuyRSutfn%2BosK%2By8Mp0nhGPzGBEbBGLf1BSljiFk0lFR9dYy7eVtKeYE0JW0LesxJvp425DHWiRgufMeh%2BYAIunAqFbj3kx0FBTmiO%2BOR1Me37a9ZdWUFMBlTLaPIbd1XcqNCyL9%2FkY2AG%2B0LBbo5FZBORdw%2BDwyakQ1Dc92f8H28gFH2kGp1mibZ6egK2uZsi%2FFftHcrwfi9qXoZfc3LD8dx%2BuCD2TPI9cwye3nvwY6pgGxqANYzOSJ0Ij9abNqdQ6Is6mgkvcSCP1tetlEevWMGpIXQg9Tnx%2F2cueVP0DCNFnWK0ECk3EBtBwZsiJRbGfZBOVMF%2FsERmlUJyZSFP%2FlxDiaz5dph4BgcePZ5K%2FG9HslcOdPFCPgU3LCjpAd7Lukr0fmXE8%2B35CK%2BVIxTnlpWJspm6M%2BjKy2omv8ievpsQBOLTS%2BnDzV6QoxSpmjBUklABD2Cwf%2B&X-Amz-Signature=0cc13d973ea5e977627ecfe055c6f5514b5eecdb546f7579a0ede8576da95507&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
