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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FEHGJHH%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T024957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQDyBZmOD9JWhCOxWWs51TWnRkPhecuBb534bLcMRpIxcAIhAOrKk0ccZ%2FXVOZd%2FX9C%2BBBFeKRVTKHPGtAjacVjJo6lWKv8DCE8QABoMNjM3NDIzMTgzODA1IgzMaTCthI4%2FzO9Y6g0q3AOhq2QMbi%2FPJXaelPVfVaoiOPssvydrkC2g6Rnz4Ybdq1i0rWFl3GBcc4686vmOokAEH0I14iRtG21ejP2W3W9IKtIc7B6B9YnSvvKXgMGrR9VQtYx3yYtMGQptfqQwF7nqnl%2Fah7Vq5cjgQAcaycb4EjxlqJkatc36WNCiwzw%2FjWUCHzrkCLL77%2BVYCGIcjpbFxcKb3BRt5ClZE1iAuLsmMtv9Ynj4eWIbM7Mz2AM2TK7zRAkPEdCatuhFtfINXmLTHFKcP8j2TciJIPTfy6PXltKSoZuVEfoSSaVUuTWiUKhRzt9UmvDd9v%2FL6XPvXkKq42gRNQ8osGYst7b9vuJn4j%2BWzKjLmSJWBl2tbT2p%2FRpScOLsu7DFqypT2dIIOCayVDmaTKWY%2Bk1w%2BBFkvMj%2FKisTk6U2UQGAdge9S0KgRoA38AfFxO%2FNo20bdheUAlyhtSWqWJmJV54Ko0d%2FGKPxx8bcUpf4jsn4VlnOh9S%2FrW3OHxgxWPwYsvdo3KSVdTriAnMWyCZjebhwXbbKAcExzrgE2xseFTYHFuSoBe4%2FuhXbZqMzTUAj3S1V6BNOUd1BaOysgOAmHtqca%2F3iVnJcTc1aFOBpCSySRtvfcAkl90SjVQGxlpAosEq5tTDwvqbDBjqkAWua5ije5fdLatWKb66XlNv3hqIdi%2FflP9LbdN642z6eeHx%2BRO5PUQ%2BsUbEKywTP01M6eL2kUYRBkCwqoysW0YEwI%2B42hiqQ%2FDt7Kr3CLE5OkRucIAKwBvRYiuMtgiTnv2uO84eEKVkKjkHVea5zmLntyhoRft75C8AQDnBXCLr3Fu46kqcYbXBjOQScXv3a%2FqsQx4uSc6Ph5f8VVgoEd17pfHYv&X-Amz-Signature=8875d71969bfa1fe350e26744824653ad598548ae2c20214e8d71c869ced4771&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FEHGJHH%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T024957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQDyBZmOD9JWhCOxWWs51TWnRkPhecuBb534bLcMRpIxcAIhAOrKk0ccZ%2FXVOZd%2FX9C%2BBBFeKRVTKHPGtAjacVjJo6lWKv8DCE8QABoMNjM3NDIzMTgzODA1IgzMaTCthI4%2FzO9Y6g0q3AOhq2QMbi%2FPJXaelPVfVaoiOPssvydrkC2g6Rnz4Ybdq1i0rWFl3GBcc4686vmOokAEH0I14iRtG21ejP2W3W9IKtIc7B6B9YnSvvKXgMGrR9VQtYx3yYtMGQptfqQwF7nqnl%2Fah7Vq5cjgQAcaycb4EjxlqJkatc36WNCiwzw%2FjWUCHzrkCLL77%2BVYCGIcjpbFxcKb3BRt5ClZE1iAuLsmMtv9Ynj4eWIbM7Mz2AM2TK7zRAkPEdCatuhFtfINXmLTHFKcP8j2TciJIPTfy6PXltKSoZuVEfoSSaVUuTWiUKhRzt9UmvDd9v%2FL6XPvXkKq42gRNQ8osGYst7b9vuJn4j%2BWzKjLmSJWBl2tbT2p%2FRpScOLsu7DFqypT2dIIOCayVDmaTKWY%2Bk1w%2BBFkvMj%2FKisTk6U2UQGAdge9S0KgRoA38AfFxO%2FNo20bdheUAlyhtSWqWJmJV54Ko0d%2FGKPxx8bcUpf4jsn4VlnOh9S%2FrW3OHxgxWPwYsvdo3KSVdTriAnMWyCZjebhwXbbKAcExzrgE2xseFTYHFuSoBe4%2FuhXbZqMzTUAj3S1V6BNOUd1BaOysgOAmHtqca%2F3iVnJcTc1aFOBpCSySRtvfcAkl90SjVQGxlpAosEq5tTDwvqbDBjqkAWua5ije5fdLatWKb66XlNv3hqIdi%2FflP9LbdN642z6eeHx%2BRO5PUQ%2BsUbEKywTP01M6eL2kUYRBkCwqoysW0YEwI%2B42hiqQ%2FDt7Kr3CLE5OkRucIAKwBvRYiuMtgiTnv2uO84eEKVkKjkHVea5zmLntyhoRft75C8AQDnBXCLr3Fu46kqcYbXBjOQScXv3a%2FqsQx4uSc6Ph5f8VVgoEd17pfHYv&X-Amz-Signature=a94c819f43f1b0314de8462099c9d1efaa7b29b240dabd35daf657267e938a42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FEHGJHH%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T024957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQDyBZmOD9JWhCOxWWs51TWnRkPhecuBb534bLcMRpIxcAIhAOrKk0ccZ%2FXVOZd%2FX9C%2BBBFeKRVTKHPGtAjacVjJo6lWKv8DCE8QABoMNjM3NDIzMTgzODA1IgzMaTCthI4%2FzO9Y6g0q3AOhq2QMbi%2FPJXaelPVfVaoiOPssvydrkC2g6Rnz4Ybdq1i0rWFl3GBcc4686vmOokAEH0I14iRtG21ejP2W3W9IKtIc7B6B9YnSvvKXgMGrR9VQtYx3yYtMGQptfqQwF7nqnl%2Fah7Vq5cjgQAcaycb4EjxlqJkatc36WNCiwzw%2FjWUCHzrkCLL77%2BVYCGIcjpbFxcKb3BRt5ClZE1iAuLsmMtv9Ynj4eWIbM7Mz2AM2TK7zRAkPEdCatuhFtfINXmLTHFKcP8j2TciJIPTfy6PXltKSoZuVEfoSSaVUuTWiUKhRzt9UmvDd9v%2FL6XPvXkKq42gRNQ8osGYst7b9vuJn4j%2BWzKjLmSJWBl2tbT2p%2FRpScOLsu7DFqypT2dIIOCayVDmaTKWY%2Bk1w%2BBFkvMj%2FKisTk6U2UQGAdge9S0KgRoA38AfFxO%2FNo20bdheUAlyhtSWqWJmJV54Ko0d%2FGKPxx8bcUpf4jsn4VlnOh9S%2FrW3OHxgxWPwYsvdo3KSVdTriAnMWyCZjebhwXbbKAcExzrgE2xseFTYHFuSoBe4%2FuhXbZqMzTUAj3S1V6BNOUd1BaOysgOAmHtqca%2F3iVnJcTc1aFOBpCSySRtvfcAkl90SjVQGxlpAosEq5tTDwvqbDBjqkAWua5ije5fdLatWKb66XlNv3hqIdi%2FflP9LbdN642z6eeHx%2BRO5PUQ%2BsUbEKywTP01M6eL2kUYRBkCwqoysW0YEwI%2B42hiqQ%2FDt7Kr3CLE5OkRucIAKwBvRYiuMtgiTnv2uO84eEKVkKjkHVea5zmLntyhoRft75C8AQDnBXCLr3Fu46kqcYbXBjOQScXv3a%2FqsQx4uSc6Ph5f8VVgoEd17pfHYv&X-Amz-Signature=8739e780a7e581cb2487e711f917a66efddd9e9b814896e3702aecd0bba24e7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NIFY77E%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T024959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIGpO5fJAy2zKYqlKgqlowMJ%2FrcZjofc6mDM3La5srtBVAiAzGkZYMVfr7Wvzfx8RrQhGj0YxtlAhslx9Q3lZwswgpSr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMBEKtt%2BAz8h9VYe%2F5KtwDI%2BHXaAF6g8km1uC17yk%2BUoeGYbTbZmbTRyzHbnzFVg5KFUVMoQJAbFhBt%2FW%2BOH2gYCHeKZwDfwyXqpnxGOnzEafSiwi0B0CpSsyscFEvc5nzawb0sFlx02McW4FhYT9GW%2FXUICvBKo%2FLQp61OfpK2BA1JwnLdx%2FxTiBAVY1muVhJyfYqFl9rl35Y4mhMZ1kUFaz%2F2IIBbMMywwoO3O6lE9FaeluojN0LkoAN%2BnMW4o94KH6qp0WMOmeQjW5UGRXSyBWPGQxcQhwVakkUN5XQml0CwATy2ZReLhO6DjH1EEtbUkXwlH9ixEV9fhSnOoA7QfaYeQWKROwG1jHyFRiUTzUuZ9qmMP9sfSUj2mCV0TGlvMAjldQOk3qRlrcKsIFmUr%2FJ4051ygzezcgDiIGL7XQshTfXnrluAbryHWC%2Fy4q6hlFh4Kph6nx38MHFBmwV5p6laa%2BnCZ70DEmjP8DI1DAKTmm0z0IWZgeCNBD4AqVXWExPSSweoYNmOhMuOuFU17USzyPuOD84s8cwIsDOoaAsfZIT1sHVwHo%2BpJR8baVSdvQVtxNjW6mzIP1ce%2F3unGHVad%2F4usSJKkmjh2fNsWe%2Fa1BsT34KTGWkuxTAsr1hS2%2B%2FLwLzsahYJDMwvoanwwY6pgGxHsDM00uDJgjO4wHX47%2B0eQuP6hOQwNMJzmwXV%2Bn%2FIHdSo0Vv2UL0OBSqiv04QPXpcF%2BrbMHnS1QM%2Fj665hadrdzRMiiNWvUZDgg%2Bka854t%2FiiTNzb977ymNTE%2F%2BGJR%2FXUFWhKCY1gbF%2Fl%2BjbCEmdgevLvk1fN9mxpshb0zpstzGF%2FwsW8iRhYF34Ybr%2FxiqI4te1fVhHboh1DC1AhA6xWYFvNzOR&X-Amz-Signature=869e54efcd9f430839cb964a33dd196b26cae95c11b6b5e9aff499a8bc36510a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SQ3SIX5%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T025000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIA1faiRWnB%2FC3mSnqYlZok%2FdSKYpNg1iSS5zurdPeK7hAiAwBHUFkseAGU8ni2zbhHLJl4gO6XwmnhX41tRHYDc5Hyr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMru2wOBzl7g0cUjlsKtwD0%2BvuT6X%2FNz321226TjVyJZB6T88mkv2rNjgzoADIjmXSgxZEFTXJ%2Fkpl3ZXYT6jWFO2vT0JbGDndHjLgTPnb1u5ll62Ms5JMh%2Fda8V9dmJ0aLkqECJFsy%2BlfGuvZ1W%2Fp3OvJeWf6DuZLDsiv6S7mcvyCJyOkxXYxWUt%2FlzTMJY1NUTwwfkqG84wj6lnuc%2Ffgl44ViUBtqly2ZS5GKXnbqM7dS9YuJgFcu%2BHPuZrRNW7hXzVhNO7WZhfQdTnqEruLrbDi6ofz5t1CRlj2Xi%2FTMa0QYze20gAlmkbX1PtrHD36dbvIdtakn7Mvz0U17uUo96ErngkIGDZ%2B7xfy7P8ozvL%2Fpn8%2BmPfxFqlyuwxXg6BUHq8xwf2scxhhmJMOS5fA7g9hWHFNxMXWVaL9KdrphT78Dg0WFQr%2FfkPpa5VOrPOabWb6WdhdfF%2Fu8eqNKJSCXRaPtwu%2FAlFRf4i7zWv%2FtgAj7%2FRJltgs9xr9ujYirvSYehHDgUetoC1NB96qA4Z0%2Fp1o00jsGMH4CwEeBE%2F4ntHoyEyaapg6mwYddQELfKrPhKtUeBvqkOUcQTNr0jWsKuFRUx78azmX3Zjo3xrs8HgIArnUwV4zhpqR3BFktWpmtPWlr6cdkWpfcWkw2ICnwwY6pgFCr%2B9GKwfyD20%2B4mTcAi2eKb8uU1%2FnxBvvu3D6mUK%2FzL1CBwnMAf3YZA3ShKwhjFpjYoStVfB4fqRcXXWZS6NfC1mYGrPyqeYTBV1SyNwCjk15GCWxErJSBTJVucnMu%2FfbK0S0l%2BZSmHTUOtizPi24rmyKiIJNI4HBSNxja0l8QrP%2FL7bmNDOZgULVtpRiiNfZ5IMHJ%2BIKP5Pbf5sBZm2L320IQZVP&X-Amz-Signature=99c42bd6ad472312ac8a368d0adb03174d3c087f6c79fd5aae9fb76940c0d420&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FEHGJHH%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T024957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQDyBZmOD9JWhCOxWWs51TWnRkPhecuBb534bLcMRpIxcAIhAOrKk0ccZ%2FXVOZd%2FX9C%2BBBFeKRVTKHPGtAjacVjJo6lWKv8DCE8QABoMNjM3NDIzMTgzODA1IgzMaTCthI4%2FzO9Y6g0q3AOhq2QMbi%2FPJXaelPVfVaoiOPssvydrkC2g6Rnz4Ybdq1i0rWFl3GBcc4686vmOokAEH0I14iRtG21ejP2W3W9IKtIc7B6B9YnSvvKXgMGrR9VQtYx3yYtMGQptfqQwF7nqnl%2Fah7Vq5cjgQAcaycb4EjxlqJkatc36WNCiwzw%2FjWUCHzrkCLL77%2BVYCGIcjpbFxcKb3BRt5ClZE1iAuLsmMtv9Ynj4eWIbM7Mz2AM2TK7zRAkPEdCatuhFtfINXmLTHFKcP8j2TciJIPTfy6PXltKSoZuVEfoSSaVUuTWiUKhRzt9UmvDd9v%2FL6XPvXkKq42gRNQ8osGYst7b9vuJn4j%2BWzKjLmSJWBl2tbT2p%2FRpScOLsu7DFqypT2dIIOCayVDmaTKWY%2Bk1w%2BBFkvMj%2FKisTk6U2UQGAdge9S0KgRoA38AfFxO%2FNo20bdheUAlyhtSWqWJmJV54Ko0d%2FGKPxx8bcUpf4jsn4VlnOh9S%2FrW3OHxgxWPwYsvdo3KSVdTriAnMWyCZjebhwXbbKAcExzrgE2xseFTYHFuSoBe4%2FuhXbZqMzTUAj3S1V6BNOUd1BaOysgOAmHtqca%2F3iVnJcTc1aFOBpCSySRtvfcAkl90SjVQGxlpAosEq5tTDwvqbDBjqkAWua5ije5fdLatWKb66XlNv3hqIdi%2FflP9LbdN642z6eeHx%2BRO5PUQ%2BsUbEKywTP01M6eL2kUYRBkCwqoysW0YEwI%2B42hiqQ%2FDt7Kr3CLE5OkRucIAKwBvRYiuMtgiTnv2uO84eEKVkKjkHVea5zmLntyhoRft75C8AQDnBXCLr3Fu46kqcYbXBjOQScXv3a%2FqsQx4uSc6Ph5f8VVgoEd17pfHYv&X-Amz-Signature=a311889279e945d42b290070636dc1ea95295783dd8eb3a8296e347a2c189117&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
