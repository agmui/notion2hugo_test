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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HU6Y4BU%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T160850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIHdn9cvipDA4TtXLZA5DN285djNdPV5gMXoCBbIyKa9kAiEA0K48wT2dZFZxrwo1cYO0ufZWudydYlMprchJew5SMyEq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDATCScDtKvxh1hO5QSrcA5n3DESwnSZr%2F2B11InAb1Ezo2jP4%2FE47RQMNEk8hRdk9mtWb%2Fgss9xN4ZvTUhdjcq0dx2x7o5f7k8J8WpdzmOMcVeSiZSBMhcNTw2rJmtxxqx5OBvtY06yhK1P9OC9Ws7jG2ETET8%2B9Lobvt7aiu%2B%2BhMHAPNZru3lSHOUubBEN10Lbg1fUPYForbNeKCPQrKt0GTHSpLr58H%2FmGBUyRQHzXgxsSCU7r%2BqSel%2FhU7sqB2L1bBuZquUcuPyVIbtbLKjLU63tn9TVa%2F%2Fv4cC7D%2FT%2BfT5wZwCSXIx4CsR9IYZOqNQdK4YVwgFGl%2BADZMHRXk56uevUrvUMjJ%2FnidlaeHS96bEjuXOtWSvW4xLPPJ9aBeJEPVZx%2B7SfRUwHZ2qjJMvUMnPh9%2FKErBHaEouAUV9VFTwtLG4HiPNusvU%2Frbge3FMf3yZeGVrxeT42ke9v2zmwLvRdYbSTr9%2FdiSSmAVDeFVGfhijUbn%2BMd%2FRjGqjq5iGrw1ctjcMoRvOQwB4rbeTtv6HKeZsfAHvAamOR6alvLIigTCWkqfNU6Hf37Je%2F0eNyqfZAuzeucQ%2FqaXQhagi50ymFU8XX8IkW5MDgeXb9gLJPNnE7CTUOJsvHBFejXmkm4qc6a%2FpRMIphNMIKru8IGOqUBi2IzLrolvL3S8MfzoIf2BDOneuyK1%2FN4EhPOu7GyLy8qo5LaVG0xJtxm1aUarUbqTFixQ5pPnfDOcwDZN0JtdkFg47xIBd4EEa%2FOccVfhd8MGZyMavCUoTe2FpoFX5MA2jRxZjrb%2FHd8sN4M9E3skA%2FG4r03HyowZ9nfrbGwuwRH15g7NgQUj7%2Bw0StzvRznBvXHVpvRtsw33C7pAz13SQnX0rzK&X-Amz-Signature=65270b41c040fce9bd9ccbba27e8c9fcf0be22211e7716639964fea104e3287d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HU6Y4BU%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T160850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIHdn9cvipDA4TtXLZA5DN285djNdPV5gMXoCBbIyKa9kAiEA0K48wT2dZFZxrwo1cYO0ufZWudydYlMprchJew5SMyEq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDATCScDtKvxh1hO5QSrcA5n3DESwnSZr%2F2B11InAb1Ezo2jP4%2FE47RQMNEk8hRdk9mtWb%2Fgss9xN4ZvTUhdjcq0dx2x7o5f7k8J8WpdzmOMcVeSiZSBMhcNTw2rJmtxxqx5OBvtY06yhK1P9OC9Ws7jG2ETET8%2B9Lobvt7aiu%2B%2BhMHAPNZru3lSHOUubBEN10Lbg1fUPYForbNeKCPQrKt0GTHSpLr58H%2FmGBUyRQHzXgxsSCU7r%2BqSel%2FhU7sqB2L1bBuZquUcuPyVIbtbLKjLU63tn9TVa%2F%2Fv4cC7D%2FT%2BfT5wZwCSXIx4CsR9IYZOqNQdK4YVwgFGl%2BADZMHRXk56uevUrvUMjJ%2FnidlaeHS96bEjuXOtWSvW4xLPPJ9aBeJEPVZx%2B7SfRUwHZ2qjJMvUMnPh9%2FKErBHaEouAUV9VFTwtLG4HiPNusvU%2Frbge3FMf3yZeGVrxeT42ke9v2zmwLvRdYbSTr9%2FdiSSmAVDeFVGfhijUbn%2BMd%2FRjGqjq5iGrw1ctjcMoRvOQwB4rbeTtv6HKeZsfAHvAamOR6alvLIigTCWkqfNU6Hf37Je%2F0eNyqfZAuzeucQ%2FqaXQhagi50ymFU8XX8IkW5MDgeXb9gLJPNnE7CTUOJsvHBFejXmkm4qc6a%2FpRMIphNMIKru8IGOqUBi2IzLrolvL3S8MfzoIf2BDOneuyK1%2FN4EhPOu7GyLy8qo5LaVG0xJtxm1aUarUbqTFixQ5pPnfDOcwDZN0JtdkFg47xIBd4EEa%2FOccVfhd8MGZyMavCUoTe2FpoFX5MA2jRxZjrb%2FHd8sN4M9E3skA%2FG4r03HyowZ9nfrbGwuwRH15g7NgQUj7%2Bw0StzvRznBvXHVpvRtsw33C7pAz13SQnX0rzK&X-Amz-Signature=ea54bbf32944bf9d11ba3e922c4f19dfdf6a28e8c417354c7e1dda6321770e83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HU6Y4BU%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T160850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIHdn9cvipDA4TtXLZA5DN285djNdPV5gMXoCBbIyKa9kAiEA0K48wT2dZFZxrwo1cYO0ufZWudydYlMprchJew5SMyEq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDATCScDtKvxh1hO5QSrcA5n3DESwnSZr%2F2B11InAb1Ezo2jP4%2FE47RQMNEk8hRdk9mtWb%2Fgss9xN4ZvTUhdjcq0dx2x7o5f7k8J8WpdzmOMcVeSiZSBMhcNTw2rJmtxxqx5OBvtY06yhK1P9OC9Ws7jG2ETET8%2B9Lobvt7aiu%2B%2BhMHAPNZru3lSHOUubBEN10Lbg1fUPYForbNeKCPQrKt0GTHSpLr58H%2FmGBUyRQHzXgxsSCU7r%2BqSel%2FhU7sqB2L1bBuZquUcuPyVIbtbLKjLU63tn9TVa%2F%2Fv4cC7D%2FT%2BfT5wZwCSXIx4CsR9IYZOqNQdK4YVwgFGl%2BADZMHRXk56uevUrvUMjJ%2FnidlaeHS96bEjuXOtWSvW4xLPPJ9aBeJEPVZx%2B7SfRUwHZ2qjJMvUMnPh9%2FKErBHaEouAUV9VFTwtLG4HiPNusvU%2Frbge3FMf3yZeGVrxeT42ke9v2zmwLvRdYbSTr9%2FdiSSmAVDeFVGfhijUbn%2BMd%2FRjGqjq5iGrw1ctjcMoRvOQwB4rbeTtv6HKeZsfAHvAamOR6alvLIigTCWkqfNU6Hf37Je%2F0eNyqfZAuzeucQ%2FqaXQhagi50ymFU8XX8IkW5MDgeXb9gLJPNnE7CTUOJsvHBFejXmkm4qc6a%2FpRMIphNMIKru8IGOqUBi2IzLrolvL3S8MfzoIf2BDOneuyK1%2FN4EhPOu7GyLy8qo5LaVG0xJtxm1aUarUbqTFixQ5pPnfDOcwDZN0JtdkFg47xIBd4EEa%2FOccVfhd8MGZyMavCUoTe2FpoFX5MA2jRxZjrb%2FHd8sN4M9E3skA%2FG4r03HyowZ9nfrbGwuwRH15g7NgQUj7%2Bw0StzvRznBvXHVpvRtsw33C7pAz13SQnX0rzK&X-Amz-Signature=238bab3c95296bddf13e26d33494cf3a92602696424da42bf96824b369f21adc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SUCBU4R%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T160854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCbjos0g8JHdPMGGefffzh5JGtPKoG%2FJxx2ePPaJhA%2BJQIhAPvmtQQaLk4ix7HmsQlsOJWTMthTsDRd7J0p%2Fxlgv4%2BFKv8DCEcQABoMNjM3NDIzMTgzODA1IgyIPA9RLlPgS0GkAqYq3APHblaR857RNzX6VgfjBtnzs32MCiYaSXZn0i9ZBczeNTpILnAKntEEZAQzTICJPl%2FwfER73wgSmuwCd6rzU0fZdZAthSTGaMsyo9KvfxUgq2YweZ4K7gy2JPk3SO8a0Cai4u%2BILV11o6TOKeJBCX%2F6dbgLNcT9XEKBuqD28kDHagci%2BwBr1ubSHIUiOqWTYk32RfT5LkrkhcVEGn3q%2Fu8YL1VGd6nKlPU5ksXMr3eQ9Z8uipucuLRa9p6ZTLmHj0OiyeN35pYH9dyJRSXIenrFzeHu8tP4WcSiZFDVAr2i1tfaSNrOMZtByqelBU0SdaD8obyHMtqeqQ2qnjSWnshQWbh3EoStrFIonWFuj9XGUhWggObbxhZsZ0QGVWxdWRyEMTcJqt7LOKIiGkoH2QcDyn5md5IZnRd1hT%2B2jfRPayjxZrNFKc%2B%2BK1akTDI%2BL7yCYfrAbPlXJU%2BDNhH9xT%2FRImpOdiBtUU2zNIXzHCWzIgutOZ%2B0UfsoLPxErGG9HAxXOF%2FgYaozVpX6ZhlBMj%2BdyNrQfSNpiX4snMzmiyKy111RUxdxe%2B7jozIfE0AZ48AL39JLcD4mCo7RX5Y6D71THN2vVkK4YJ4pcy5zIXUn6TvxyCvC0w0ob%2BvFHzDeo7vCBjqkAfX%2BftVBa1JsbmoM3gZX%2FW0nSlaonf%2F9nz2r6Lb0w%2FM1T0a1VzhY%2B6wUIuxCHmMw01Fgoyqb4Uuxoi0FIJ6BCfKBupUi8B3oTgpXc%2B4Lklj4d7Meo93ZiZL%2BqQBlcIhD%2FHKhgHiwBKg0d40YNc%2FZwpiBIdu%2FmuWQah4sF0U%2BvpfqldWvuizfz226oJ8OyZTuQz4pmIicSgnhgvViv0v6nSuDiqjR&X-Amz-Signature=7d8276183660da9932690c58166885d89179d1adc9111b5a7043e5a7c2e69028&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SELNTW5%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T160855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQC5iiytQEX%2BI0nitF%2BiojR3%2FlEG0HPIVeV6H5v1oLXSRQIgaWBpA2ivAg7mcZZjza9E3LAqRn4B%2FYZa%2FW7u4lJN2qsq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDGSQH4DDo9w3z6hkzCrcA7owJ3Xw6Z%2Bs%2BAzZe9TPWV9NGz6p6m8OjCsNrN9m7SgwtLd0oLm7ff73wMMyaYcA%2FWvO1Q2CH2rVu%2Bfqk0RxiEeeVYjfopfCnHLzbPfpNSS2%2FL%2FaVt6dhvjDpjHzKcz0YM%2F2DDAu9CSKAS5Z6%2BtuS7OFMarqhpeEexaG3KGLxTdQh096wocIqWzuIj9xpwxcj9Gx1h%2BUje8CuG2c7qDxLpADRBRdkeua%2Bd0kGNuMbGs5WUaQrfRblpO7Uki%2FHyGiZgLTKm%2BXVCMHgUNsHKWoLtM%2Fl3Bq0WSkHTKuRYqdHRY2%2B4I4R0p2aUkifYsfMe8WhY%2BOyxbNx7i%2BMQ0aOlmjGvnCDoFAiB6EC8e6QtxWDaAsQvF46C4ZV9g3ziqyR5Pkpgt0puvh3Ndfm7etqeEr9BXC2gd%2BQAX5KjxnEhxHcJvOQPHVznQ768GYAPSW5fIhg4h9uwWtlDgbh%2BJ5zsuQt1rPLEiB7g1eaQehPKvF6tc%2FiqbCbmxYW0%2FrDs8kwjbox0thwMaXqotm44uOvltbAF6DK9svj%2FkUKt85L3Te0GIAkjj4YQi4K5QB2J03CsGpWhoY2%2BoXYOsnEZdrOIxxaCpA9fDXv5znbi1ReanH4NN6%2BEhsr29ctr50N6HeMM6ru8IGOqUBNcKXcPOp%2BshpBQLKX7glZB0mNjvPbn3oMx8wAQZOd7%2FAGb3QrDPyaC0EycAB3l%2BgercF3ukfbPC9hzmuO5sZ7x%2Fwkq3D%2BsasTqgBgkEVAdImA24Pz0V5zZoOZ7frL120nSAy6h1iN%2BrW%2Bp8u13fAYBLSO407bIqmB7mbIUYTwhAso6E6R38vFb%2BNA67%2B0LATjF%2FwMwsSTIU6RyMyKdCCOmP5N%2B1O&X-Amz-Signature=3ccadaa3bc5c776e49acda5be5075fd76a57fafbe54131227e5b193ac046a9a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HU6Y4BU%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T160850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIHdn9cvipDA4TtXLZA5DN285djNdPV5gMXoCBbIyKa9kAiEA0K48wT2dZFZxrwo1cYO0ufZWudydYlMprchJew5SMyEq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDATCScDtKvxh1hO5QSrcA5n3DESwnSZr%2F2B11InAb1Ezo2jP4%2FE47RQMNEk8hRdk9mtWb%2Fgss9xN4ZvTUhdjcq0dx2x7o5f7k8J8WpdzmOMcVeSiZSBMhcNTw2rJmtxxqx5OBvtY06yhK1P9OC9Ws7jG2ETET8%2B9Lobvt7aiu%2B%2BhMHAPNZru3lSHOUubBEN10Lbg1fUPYForbNeKCPQrKt0GTHSpLr58H%2FmGBUyRQHzXgxsSCU7r%2BqSel%2FhU7sqB2L1bBuZquUcuPyVIbtbLKjLU63tn9TVa%2F%2Fv4cC7D%2FT%2BfT5wZwCSXIx4CsR9IYZOqNQdK4YVwgFGl%2BADZMHRXk56uevUrvUMjJ%2FnidlaeHS96bEjuXOtWSvW4xLPPJ9aBeJEPVZx%2B7SfRUwHZ2qjJMvUMnPh9%2FKErBHaEouAUV9VFTwtLG4HiPNusvU%2Frbge3FMf3yZeGVrxeT42ke9v2zmwLvRdYbSTr9%2FdiSSmAVDeFVGfhijUbn%2BMd%2FRjGqjq5iGrw1ctjcMoRvOQwB4rbeTtv6HKeZsfAHvAamOR6alvLIigTCWkqfNU6Hf37Je%2F0eNyqfZAuzeucQ%2FqaXQhagi50ymFU8XX8IkW5MDgeXb9gLJPNnE7CTUOJsvHBFejXmkm4qc6a%2FpRMIphNMIKru8IGOqUBi2IzLrolvL3S8MfzoIf2BDOneuyK1%2FN4EhPOu7GyLy8qo5LaVG0xJtxm1aUarUbqTFixQ5pPnfDOcwDZN0JtdkFg47xIBd4EEa%2FOccVfhd8MGZyMavCUoTe2FpoFX5MA2jRxZjrb%2FHd8sN4M9E3skA%2FG4r03HyowZ9nfrbGwuwRH15g7NgQUj7%2Bw0StzvRznBvXHVpvRtsw33C7pAz13SQnX0rzK&X-Amz-Signature=a10e0d37450867744e4f77e1374c6e57334d0a32bd8f639df9d5c72122c78d02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
