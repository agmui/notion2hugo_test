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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVR4ZCWD%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T050926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvkMweo2ttB5XRq3qRi%2FkjbrYDhDlj8JS19ILYmNsLwgIhALNRgcL1oX%2FTpdOAcDxSeUnH9EGdKRo%2FAjels3XlT20EKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCIjheBehcBMxhM24q3AO40oYfLKIWDIsv21oSkTEeklrxUSnv2GLEL9A3CaRwoY2bgtYGQegWIO0%2FGbBGTam0yXcPljanYRqzS62nzade644kei6vDSNIFXWSpql0StNXIJqzGmdTrhoEPyUeat2kvsz2fvwO6RCBumz25RQXOR3XVSh2ILoIlBGiJ8Fw6Sd5fn2hdru6RJ%2FT0z0FBSxQLQZ61yzHajQZBQrblrVYYaKoQbx5JMOSn6kK87qcFCvuQe1d4mRGIalKQV7NFn20VZlObHRl1kUZ7e27R20wrnJ6u6NZRCAZk0GM1NnbL1TdC2T33JgVWvvdWuvHeeu1d9fxa2wF55P6jxST8kJwf%2FS34CBMDv5VFBAYPBIRHKPp4r2Myv7JDqtZUAdPRuWTETWkm4b1dwnFApk74JHdgM%2F2wKAjxvi8A1g4uSI9VvpKeWPnvDRLdzZ76L9Jpu93gGJ7tFvuqVaqXeCO0uuhrCUV%2BHya35X6cVHjtv4B9R1%2FjK%2F2svhMFhZVnw7QXME3ZhAr7o0rxWAZXFplCFosxsYVcXeGtNJTq8FOzEczKRdgUH6zfNDaqf8rd0kKWFJZJA%2F3aOOE1eWfLbSP1bE%2BqVuNUyAByoNxSdj8zzMHbMVS2t5ru1iU95ksxTC3rrXBBjqkAdUU53E4uHhT0uwZfQ71cRnOx%2F%2FmM%2FlBrwbRmf3lqYQZdkGTZ3ZBivlcgsiBJMyDz0fJhNJ8fP%2FmsYan%2FLJ0dWQdTafdwxNnEv05ldX%2BT5TCSAQ4jNFEFbekFb4An32wT584FWbULuvWc29uz6U8tZ3G%2FwGr8k6Z56UyDBQcYVcSesMKQFdkDNwWArKrM%2FaSGwKYe%2BZk0xvqvu1CEpLBil2FM77Y&X-Amz-Signature=1c917fb0764d1ef6761d4004739bb35cb5f5ad6a36590d8edbcbd3732d4a2f43&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVR4ZCWD%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T050926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvkMweo2ttB5XRq3qRi%2FkjbrYDhDlj8JS19ILYmNsLwgIhALNRgcL1oX%2FTpdOAcDxSeUnH9EGdKRo%2FAjels3XlT20EKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCIjheBehcBMxhM24q3AO40oYfLKIWDIsv21oSkTEeklrxUSnv2GLEL9A3CaRwoY2bgtYGQegWIO0%2FGbBGTam0yXcPljanYRqzS62nzade644kei6vDSNIFXWSpql0StNXIJqzGmdTrhoEPyUeat2kvsz2fvwO6RCBumz25RQXOR3XVSh2ILoIlBGiJ8Fw6Sd5fn2hdru6RJ%2FT0z0FBSxQLQZ61yzHajQZBQrblrVYYaKoQbx5JMOSn6kK87qcFCvuQe1d4mRGIalKQV7NFn20VZlObHRl1kUZ7e27R20wrnJ6u6NZRCAZk0GM1NnbL1TdC2T33JgVWvvdWuvHeeu1d9fxa2wF55P6jxST8kJwf%2FS34CBMDv5VFBAYPBIRHKPp4r2Myv7JDqtZUAdPRuWTETWkm4b1dwnFApk74JHdgM%2F2wKAjxvi8A1g4uSI9VvpKeWPnvDRLdzZ76L9Jpu93gGJ7tFvuqVaqXeCO0uuhrCUV%2BHya35X6cVHjtv4B9R1%2FjK%2F2svhMFhZVnw7QXME3ZhAr7o0rxWAZXFplCFosxsYVcXeGtNJTq8FOzEczKRdgUH6zfNDaqf8rd0kKWFJZJA%2F3aOOE1eWfLbSP1bE%2BqVuNUyAByoNxSdj8zzMHbMVS2t5ru1iU95ksxTC3rrXBBjqkAdUU53E4uHhT0uwZfQ71cRnOx%2F%2FmM%2FlBrwbRmf3lqYQZdkGTZ3ZBivlcgsiBJMyDz0fJhNJ8fP%2FmsYan%2FLJ0dWQdTafdwxNnEv05ldX%2BT5TCSAQ4jNFEFbekFb4An32wT584FWbULuvWc29uz6U8tZ3G%2FwGr8k6Z56UyDBQcYVcSesMKQFdkDNwWArKrM%2FaSGwKYe%2BZk0xvqvu1CEpLBil2FM77Y&X-Amz-Signature=42538c56d2a8ec86cc1625ce52c895f002d02b6ec12fa2302a9731db128998eb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVR4ZCWD%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T050926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvkMweo2ttB5XRq3qRi%2FkjbrYDhDlj8JS19ILYmNsLwgIhALNRgcL1oX%2FTpdOAcDxSeUnH9EGdKRo%2FAjels3XlT20EKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCIjheBehcBMxhM24q3AO40oYfLKIWDIsv21oSkTEeklrxUSnv2GLEL9A3CaRwoY2bgtYGQegWIO0%2FGbBGTam0yXcPljanYRqzS62nzade644kei6vDSNIFXWSpql0StNXIJqzGmdTrhoEPyUeat2kvsz2fvwO6RCBumz25RQXOR3XVSh2ILoIlBGiJ8Fw6Sd5fn2hdru6RJ%2FT0z0FBSxQLQZ61yzHajQZBQrblrVYYaKoQbx5JMOSn6kK87qcFCvuQe1d4mRGIalKQV7NFn20VZlObHRl1kUZ7e27R20wrnJ6u6NZRCAZk0GM1NnbL1TdC2T33JgVWvvdWuvHeeu1d9fxa2wF55P6jxST8kJwf%2FS34CBMDv5VFBAYPBIRHKPp4r2Myv7JDqtZUAdPRuWTETWkm4b1dwnFApk74JHdgM%2F2wKAjxvi8A1g4uSI9VvpKeWPnvDRLdzZ76L9Jpu93gGJ7tFvuqVaqXeCO0uuhrCUV%2BHya35X6cVHjtv4B9R1%2FjK%2F2svhMFhZVnw7QXME3ZhAr7o0rxWAZXFplCFosxsYVcXeGtNJTq8FOzEczKRdgUH6zfNDaqf8rd0kKWFJZJA%2F3aOOE1eWfLbSP1bE%2BqVuNUyAByoNxSdj8zzMHbMVS2t5ru1iU95ksxTC3rrXBBjqkAdUU53E4uHhT0uwZfQ71cRnOx%2F%2FmM%2FlBrwbRmf3lqYQZdkGTZ3ZBivlcgsiBJMyDz0fJhNJ8fP%2FmsYan%2FLJ0dWQdTafdwxNnEv05ldX%2BT5TCSAQ4jNFEFbekFb4An32wT584FWbULuvWc29uz6U8tZ3G%2FwGr8k6Z56UyDBQcYVcSesMKQFdkDNwWArKrM%2FaSGwKYe%2BZk0xvqvu1CEpLBil2FM77Y&X-Amz-Signature=435795b1b5e23bcd7868aee026866310d12115734d486baaa8fd7f4a45b1591c&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV2ZFJTF%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T050930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp8QVRJq3UOqkUBsYn9ECTJFrAEy30yH8qqPZQIgTK1gIhAPwt%2FnpK35J8BuFtW33F4iqvXcdXJsUd0omR%2Fh6Q98B1KogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6uUJ2uk2xGaCy9fwq3AMRmMwp6TkQZmuOLTygFOkBqkYp6Myvz2%2BhAC%2FVdeQzWlbh1sEUa4UBy%2BOhxrcKOuxr6aW0gktnFBBr2IYrzb3ciBABTMRvAOJAGNF3xYvkPXdJQvg0hYD7dmc8DhuBxW6f43k3Bi9q4XRD%2BjedNWBRG3aGEmeaA5JNp4Wt0LpfMrNOlrem7IN0xmjhaM2hsk3iVGjNPAg7pUn%2FjI1gs51V7J0yBGa11I55N5%2B3CezUg8aRsYKlOdlTbiOcIfE4S2EVIkHxbX3k%2FrlsSNeaFLoBSKVCNbe1%2BQH0FRI2qveaQV2bNBhLZKn6FlbWmyH7jJ6tVD38lTVDNtlJ2WeyXC3iE%2FQWKx1oyNn9J7VPrmqTwa%2FeN2fg5f%2FIGkUxOKLUWnuATB32WE4emiwZv3StHtIG3tafzxtz1peTpZU7rEWgWkoGbW5PuwCX4U7A5KISvA10XlSddVacwzeCMVpOgswYrZekM0xSbKlwAh%2FgioqeZ4LUS42Rp03kEs04RU0NjFf929Q2qAhFOBrRLwfq4FtzjL13NIAUdVg%2BZM2XlL75eRJLZ2D7iS%2FRmW%2Fd0rcCFi34FGKctovDHseh3mvPbLEikFnSAIGpdzjPsEvFLs5V1S1zh%2Bt%2FQceQ3xRyEzCcr7XBBjqkARLirG%2Bod6pOQutKMG0hcupLh3O0ZTko9yhav7XvT%2FWT9DjKBlY1FbqhUOLvlcAGWpCi7vElismOc9jW9kbMGo%2BuVdIhNJcHydxq7bmNeJjlq1BmA6vESkNhffDINE%2FqrNQUuyZlf2ocf1JKpew6EfQ1otmzngkms9DC8aT5bm%2F2lucH1PQNI1xoFQuc8NbxwWkFnqLDY4QkY0NbI6%2BrE%2FZpWgaM&X-Amz-Signature=ef7a2dbf6c6eb8365642150b154a2b9c6e1fe6dabfa1611b091cb399b00c36de&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L6EBYJH%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T050930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVuDxKu%2B7%2B8g0cbKBC7yNpu%2BFvRH%2FSDWO5WMdUBnhcrgIhAMR1HrJrZCa4YkBYBfCjweQVT%2BmTD0tX6LvKNFovG2TsKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdXnft1%2Bj9wQYUgzgq3APZJq9nGCf3jF%2F7VyneXRYSNS5bowgVd7iMf1adMbZgqbgj5FXuk3PSMuaG9YYam48zYpectlQMZbe%2BfkDBCloAPiCalOEM87vfM01h8c5HJwgRYCbbR%2Bn0AOGT179y1HW9l9EOQ%2Bzqp1A9Yl2DTrKY9U75OkVACRGNNzg5uJ5q8j%2BwbgccQY%2FA%2BAnyNI1yCtY3%2FuH0vChxQcc9DPsj8a%2BFDpEWappAs2kIjpOuo%2BqkIVGxZLW3Kxfe0L77QYzQtFsA4o0ya7gfrPklCL7VFSF6uKQGgka0o%2FWW8qEms5%2Bdtz2oniiQOScpm2lZZIJ0Ytf4HmJafMr0JSO9d0JEFmFqcwjqY513lv8%2FLdhkygMBQ8UJCmC76x9ynibZacXzyKsDdOqIvS2Tf%2Fh43xWi6378%2BZNBSmBnDJI%2FWY9zFMefdbZ%2B9Q4iAFN%2FhIBzP6HVz2BHp3IxuKTyN4YX0BfuAXRBWjBrBqNWLonuH%2FnqiqIfnAuzrj0sifNbML7Dpms%2BWUmUpPiRKTjm62gfJ%2BaUNz1ojRWA0aD9eZ3nIlVYwwNmzUKxXiRsH793OKxYUr390l%2B6v6B%2FetWEGh%2F67MDk%2FX094fiUXCwdp1YOBPou2F%2FMkfgknBVTS2R5JLmxUTDsr7XBBjqkAW6BoKBTYlx7%2FO%2Bry6fr2LVzuH1648s6gpZdnObZo%2BaGKwTYOkI5FbPY2mbJW%2FwEeu49cKk%2B9SxJOeEBcS9AgqHKasTMDluKNNsl410dwB61ADZ37IWZUApnscVOO7fgdaHA3TxjOAMFXhHeJSJh1szbUnfetWXtV7vrsru53PQHO%2BxWzLjvM30wlxl5vWY7PnG53%2FZmHRgP2JNBcDX5XeV1ZFVr&X-Amz-Signature=5f6c52192eecd6b8fada7abbdb5ae35e32bcbd2a0438ee1d991cbe77b4e4d264&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVR4ZCWD%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T050926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvkMweo2ttB5XRq3qRi%2FkjbrYDhDlj8JS19ILYmNsLwgIhALNRgcL1oX%2FTpdOAcDxSeUnH9EGdKRo%2FAjels3XlT20EKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCIjheBehcBMxhM24q3AO40oYfLKIWDIsv21oSkTEeklrxUSnv2GLEL9A3CaRwoY2bgtYGQegWIO0%2FGbBGTam0yXcPljanYRqzS62nzade644kei6vDSNIFXWSpql0StNXIJqzGmdTrhoEPyUeat2kvsz2fvwO6RCBumz25RQXOR3XVSh2ILoIlBGiJ8Fw6Sd5fn2hdru6RJ%2FT0z0FBSxQLQZ61yzHajQZBQrblrVYYaKoQbx5JMOSn6kK87qcFCvuQe1d4mRGIalKQV7NFn20VZlObHRl1kUZ7e27R20wrnJ6u6NZRCAZk0GM1NnbL1TdC2T33JgVWvvdWuvHeeu1d9fxa2wF55P6jxST8kJwf%2FS34CBMDv5VFBAYPBIRHKPp4r2Myv7JDqtZUAdPRuWTETWkm4b1dwnFApk74JHdgM%2F2wKAjxvi8A1g4uSI9VvpKeWPnvDRLdzZ76L9Jpu93gGJ7tFvuqVaqXeCO0uuhrCUV%2BHya35X6cVHjtv4B9R1%2FjK%2F2svhMFhZVnw7QXME3ZhAr7o0rxWAZXFplCFosxsYVcXeGtNJTq8FOzEczKRdgUH6zfNDaqf8rd0kKWFJZJA%2F3aOOE1eWfLbSP1bE%2BqVuNUyAByoNxSdj8zzMHbMVS2t5ru1iU95ksxTC3rrXBBjqkAdUU53E4uHhT0uwZfQ71cRnOx%2F%2FmM%2FlBrwbRmf3lqYQZdkGTZ3ZBivlcgsiBJMyDz0fJhNJ8fP%2FmsYan%2FLJ0dWQdTafdwxNnEv05ldX%2BT5TCSAQ4jNFEFbekFb4An32wT584FWbULuvWc29uz6U8tZ3G%2FwGr8k6Z56UyDBQcYVcSesMKQFdkDNwWArKrM%2FaSGwKYe%2BZk0xvqvu1CEpLBil2FM77Y&X-Amz-Signature=d2e2a0ecdda181e098d95e208ac413b139f617bbe91fcfb8bf97cad90cb3284d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
