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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OEDCTVU%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIDdWhr8bH7lV2KPMYBoj4Ax14fuJOZM%2BCvoASVA2vpMGAiA6hxYJRPRm%2FdcvrBHho3CEAY8NSR%2BOdqo4Wo6B7TpzQSr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMWTcnCCAH%2FzOKLkvnKtwD486s%2FPhs4M3uI1QZJ%2FM6DI7X9KZpC77aK%2F5QAQ3RkhtYvqQlGYm8x0DjPpU0caunJDaEznvNvG6PD9RmNFMDmjJ3l1IguVDZRzMgq%2F%2F3lD2jTvKlbL6IkeX2ZYThtDLiJXcHUlKsuPy0pJkfSxrgEw73QIU4JCa5fSs0h01KLnwZQYGL%2FzCxF5AsO8xSZVAOzuQtfI7yz4cVtnUlXbFhhCdFlHdcsmGz3EljW62K3NJNWL0yPnT6gGrAlVE5q6X9WoBiEE1JmD7uMjl77TUVX0ljy7nzDF%2BKJqPAXjL5VjkuVLtm4HX1nCMflNnCSDZFmD7uJ2ctKrarEv1ZfEw9LFfiXTRO3PwQKVaM1BlbEea%2B%2B8qNDZ66ZK7PGvZqSNEPKYj4f7pwnZ0EvnRwDFObfvmt6eQAB7%2BNP34Szxpg3Ild%2BQpM3McprK7z8ey6%2BSNGyiqLxEr3KnRY6U2X%2FcLuqCrMDgUROrbA7DX9wDalpcLxTUEsEsee%2FDI3XQfG2KQXrtEkKmQZ1VHPVelg5GnT8Ksk3iA0tcSt2sOhwJPogUT8B1lbFg1ckCpR7Z%2B59uVQcuTIcjQf1ix2txeNC1Syelt4g%2BmKY1oasmeF9sdsGYzQ4HKI6jVDZFCF3gMw1eP%2FxAY6pgGTJJ3KvjeABSEBI39mCqDWil8M9bNNKMMW3rpvmCwYSGXtplGvmYlTmAQo8eFrULUtqVUMOFQfsc4U0jkmHhg5VjGfOHK5JBx4goQrR6N%2BPZMyrhUuzM2CKIh9xEo5JwUiD6A2%2B5jXFkybOTAzjIzNyDlZKyjmzucC08yBCMHDCDlMDbAtlzw0SZs93vHBuVSJE35LulDy7LUqb6PZO2RCmBODb87Y&X-Amz-Signature=10489670e8abc345db7e63cbf56d08f4d02e67e3a31e7a9c919180ca1550b9ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OEDCTVU%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIDdWhr8bH7lV2KPMYBoj4Ax14fuJOZM%2BCvoASVA2vpMGAiA6hxYJRPRm%2FdcvrBHho3CEAY8NSR%2BOdqo4Wo6B7TpzQSr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMWTcnCCAH%2FzOKLkvnKtwD486s%2FPhs4M3uI1QZJ%2FM6DI7X9KZpC77aK%2F5QAQ3RkhtYvqQlGYm8x0DjPpU0caunJDaEznvNvG6PD9RmNFMDmjJ3l1IguVDZRzMgq%2F%2F3lD2jTvKlbL6IkeX2ZYThtDLiJXcHUlKsuPy0pJkfSxrgEw73QIU4JCa5fSs0h01KLnwZQYGL%2FzCxF5AsO8xSZVAOzuQtfI7yz4cVtnUlXbFhhCdFlHdcsmGz3EljW62K3NJNWL0yPnT6gGrAlVE5q6X9WoBiEE1JmD7uMjl77TUVX0ljy7nzDF%2BKJqPAXjL5VjkuVLtm4HX1nCMflNnCSDZFmD7uJ2ctKrarEv1ZfEw9LFfiXTRO3PwQKVaM1BlbEea%2B%2B8qNDZ66ZK7PGvZqSNEPKYj4f7pwnZ0EvnRwDFObfvmt6eQAB7%2BNP34Szxpg3Ild%2BQpM3McprK7z8ey6%2BSNGyiqLxEr3KnRY6U2X%2FcLuqCrMDgUROrbA7DX9wDalpcLxTUEsEsee%2FDI3XQfG2KQXrtEkKmQZ1VHPVelg5GnT8Ksk3iA0tcSt2sOhwJPogUT8B1lbFg1ckCpR7Z%2B59uVQcuTIcjQf1ix2txeNC1Syelt4g%2BmKY1oasmeF9sdsGYzQ4HKI6jVDZFCF3gMw1eP%2FxAY6pgGTJJ3KvjeABSEBI39mCqDWil8M9bNNKMMW3rpvmCwYSGXtplGvmYlTmAQo8eFrULUtqVUMOFQfsc4U0jkmHhg5VjGfOHK5JBx4goQrR6N%2BPZMyrhUuzM2CKIh9xEo5JwUiD6A2%2B5jXFkybOTAzjIzNyDlZKyjmzucC08yBCMHDCDlMDbAtlzw0SZs93vHBuVSJE35LulDy7LUqb6PZO2RCmBODb87Y&X-Amz-Signature=093162d2b5a41a14a5da788b326581dcc754b5b7e98ec99d72bd88be9e526748&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OEDCTVU%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIDdWhr8bH7lV2KPMYBoj4Ax14fuJOZM%2BCvoASVA2vpMGAiA6hxYJRPRm%2FdcvrBHho3CEAY8NSR%2BOdqo4Wo6B7TpzQSr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMWTcnCCAH%2FzOKLkvnKtwD486s%2FPhs4M3uI1QZJ%2FM6DI7X9KZpC77aK%2F5QAQ3RkhtYvqQlGYm8x0DjPpU0caunJDaEznvNvG6PD9RmNFMDmjJ3l1IguVDZRzMgq%2F%2F3lD2jTvKlbL6IkeX2ZYThtDLiJXcHUlKsuPy0pJkfSxrgEw73QIU4JCa5fSs0h01KLnwZQYGL%2FzCxF5AsO8xSZVAOzuQtfI7yz4cVtnUlXbFhhCdFlHdcsmGz3EljW62K3NJNWL0yPnT6gGrAlVE5q6X9WoBiEE1JmD7uMjl77TUVX0ljy7nzDF%2BKJqPAXjL5VjkuVLtm4HX1nCMflNnCSDZFmD7uJ2ctKrarEv1ZfEw9LFfiXTRO3PwQKVaM1BlbEea%2B%2B8qNDZ66ZK7PGvZqSNEPKYj4f7pwnZ0EvnRwDFObfvmt6eQAB7%2BNP34Szxpg3Ild%2BQpM3McprK7z8ey6%2BSNGyiqLxEr3KnRY6U2X%2FcLuqCrMDgUROrbA7DX9wDalpcLxTUEsEsee%2FDI3XQfG2KQXrtEkKmQZ1VHPVelg5GnT8Ksk3iA0tcSt2sOhwJPogUT8B1lbFg1ckCpR7Z%2B59uVQcuTIcjQf1ix2txeNC1Syelt4g%2BmKY1oasmeF9sdsGYzQ4HKI6jVDZFCF3gMw1eP%2FxAY6pgGTJJ3KvjeABSEBI39mCqDWil8M9bNNKMMW3rpvmCwYSGXtplGvmYlTmAQo8eFrULUtqVUMOFQfsc4U0jkmHhg5VjGfOHK5JBx4goQrR6N%2BPZMyrhUuzM2CKIh9xEo5JwUiD6A2%2B5jXFkybOTAzjIzNyDlZKyjmzucC08yBCMHDCDlMDbAtlzw0SZs93vHBuVSJE35LulDy7LUqb6PZO2RCmBODb87Y&X-Amz-Signature=cbdf324ffe058b846b448eff17d7ff7b73d469e0a010c268561f8fcb92f4bad4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ESNZZ6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQC4QvBsJ3J20LvwDJFcAZhmLF3yZIjlg6Shn1gcc6RYFQIgH7%2FCMaHceU3sVRrKcwvA9wEfxX7WhRB%2Bc8iRLHAeH2cq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDMMlp1a66cAfl01NQircA6VWRQFEPNXC2CGz8qlC7GayclavuPFQ%2BgxJVBzaIdpWenrBUxiUCRJ0MieS5h2b614WER7sG%2FBXaoAhUMT1dstKKzobf6SpLIHaE2pXw6VHnr6Cyfpn%2BSt31CPyHqzpAmWR9n4wmcw4SCyb%2BfZgkMRur7APAOiw3%2BJhW4yh%2BmkaMo93r5YvNUJSKMNHW1p0hwC%2BX1kT%2BdAxk0dHJr8HFC9%2F1a%2FPAgDhYvrCj%2FTb%2F6gD9roXpoxFMTTkwc9pi5icDNZfLZuV7Uv%2FMaja7ehIjMNryimFLFZC%2BlMi0r7OsC2KBXzpd%2FrZffrXHioVxQRdbmN1ofH2arDBp59aY2FiHu0UsjqBCq3fnMnBiZgt96EWuF4f6ZL5q6gAxRKjjYf32m4KXu3Owt0XEUby0Xn1S6iCWWDSdsXfUF05wbVYx9drW0t3CVbV9WxJRd0ytvIcSiyu7NuWLWUWw0CmWDNIY8HrVrimxXl2j9qGoEWvm%2BC8S6q%2BqfFeBBjbRhINR1nnlJkxHZzOLzTcx7klFoRUQ5JMRjobiyEO0DMMGnGfZDtUZWn3m6fQbz7ZuOD18GP4YIcbbBnvLXuKOCPsexeQLpmIm32C3FohbhAuzAYV24tSyIcNKEqoZgbp6RvKMP7j%2F8QGOqUB9WAaEPX1NCpUG4EQR150dhTsfwWFYC1lS0WC5b573iX%2BX8J3QAxoTeKDbNg%2BchcTSZQul%2FvT0Ez72cUsIJSsuntzy4y2cuMJnI1d339BupHPilfki7Azux9FJxZoSq7kdHGfsum%2B38GIgbvYMzyLjgszI%2FDqYskcN%2BbyjHdkipN1qdUYAApHhhteLyTXiEu6JByx1j%2B9o9idZ4itO8pzVwWsWcWN&X-Amz-Signature=772f4e76f2cf7384eb30e9a623571b71bc03e2d0e08580c7f5dc236c568e11b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNTEP7YK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDd%2B%2F2wYvhVWN20dR0MnamRdKuuA200CkUeUHWrZxwYZgIgTyzfZcpX2SiIZ0uDjD0NhKqHEWBxJPx88w0BsxiOp%2Foq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDLSugFaR4M3CTi9xZCrcAy%2B8woBUen3s6U0stFf6ozXEWjvSmabg2j3KUmlj4S7gRMSv%2FoLchfMtIsxRL22td5zVNVxo1gLunnFhsAzHdoALOew%2FqTSbRSizDahDt2lMMvB0OjmM9AugvskF%2FtbSisvwh4anYMJ9v8AolqBHNVeNrgQoMKlUytL6hmof%2BODb7GA3ubXGW%2FljRVBWesyjOB9fy9aN8T6QgcmBTGDTSFl6hBVEVwLBNejjaEbkGH9cw3mWmOau2TyDYDmWP0oUGXBbLRwhIgjEAmLdEOMMHTEau56hDTnsC7q%2FCYMoivF7sHc3p76CJcJDThVIZM4P92afq3SuDuYLJfRnLaVzfSsO4HwmaPeSAzWy44HJm6vsgGVlHpfmKYaYFDufcXR5Y4dr4uUMfZImwTciZkw7kO2WnmMoWX4q8hF5CVycHKqXN0GcijJ%2FQLgWnbn%2BC0Z2gSM76GrymdP9zBW9jbjbxkiPyFLICIrXBXNeH6sGtO6uU5LfrmgFp7adcVFawNxLZlwkiah89NHMUlzd74feLSZcwsE%2FZPUStkn4h4FXp%2BiCR2TPFLIr9mj6phD7bFWy7%2FgdldrvQRbdZj8LBfYb8OZIYm7A0OkkwWqdusP8MHD%2BiKlh4YxbofWD1RxVMOrj%2F8QGOqUBf7qeC0Q21CLFB3txzkEeTyqXNru%2BUFvF49HSPWP%2FbqdVfTwOmX4wd9pry1ezEDhj%2B89tIeeFBzx947rVk8vBR54DaVSWyCDltCJSVcqLSc4OFBjInH2vFr%2BI8EO%2FbRvwLUZ0Go3IXek17mPTfh%2Fw2DIFkhNHTyzfbqlg7arGQlPF7E0V3sBPwjNp9xNwF2iBDHxo3o0Nc%2FgLRmi8gzORo4bM0k59&X-Amz-Signature=90e11e2300c84922f7a11dfa67bf3aa0cf212b912aaca02de0efff61418564f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OEDCTVU%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIDdWhr8bH7lV2KPMYBoj4Ax14fuJOZM%2BCvoASVA2vpMGAiA6hxYJRPRm%2FdcvrBHho3CEAY8NSR%2BOdqo4Wo6B7TpzQSr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMWTcnCCAH%2FzOKLkvnKtwD486s%2FPhs4M3uI1QZJ%2FM6DI7X9KZpC77aK%2F5QAQ3RkhtYvqQlGYm8x0DjPpU0caunJDaEznvNvG6PD9RmNFMDmjJ3l1IguVDZRzMgq%2F%2F3lD2jTvKlbL6IkeX2ZYThtDLiJXcHUlKsuPy0pJkfSxrgEw73QIU4JCa5fSs0h01KLnwZQYGL%2FzCxF5AsO8xSZVAOzuQtfI7yz4cVtnUlXbFhhCdFlHdcsmGz3EljW62K3NJNWL0yPnT6gGrAlVE5q6X9WoBiEE1JmD7uMjl77TUVX0ljy7nzDF%2BKJqPAXjL5VjkuVLtm4HX1nCMflNnCSDZFmD7uJ2ctKrarEv1ZfEw9LFfiXTRO3PwQKVaM1BlbEea%2B%2B8qNDZ66ZK7PGvZqSNEPKYj4f7pwnZ0EvnRwDFObfvmt6eQAB7%2BNP34Szxpg3Ild%2BQpM3McprK7z8ey6%2BSNGyiqLxEr3KnRY6U2X%2FcLuqCrMDgUROrbA7DX9wDalpcLxTUEsEsee%2FDI3XQfG2KQXrtEkKmQZ1VHPVelg5GnT8Ksk3iA0tcSt2sOhwJPogUT8B1lbFg1ckCpR7Z%2B59uVQcuTIcjQf1ix2txeNC1Syelt4g%2BmKY1oasmeF9sdsGYzQ4HKI6jVDZFCF3gMw1eP%2FxAY6pgGTJJ3KvjeABSEBI39mCqDWil8M9bNNKMMW3rpvmCwYSGXtplGvmYlTmAQo8eFrULUtqVUMOFQfsc4U0jkmHhg5VjGfOHK5JBx4goQrR6N%2BPZMyrhUuzM2CKIh9xEo5JwUiD6A2%2B5jXFkybOTAzjIzNyDlZKyjmzucC08yBCMHDCDlMDbAtlzw0SZs93vHBuVSJE35LulDy7LUqb6PZO2RCmBODb87Y&X-Amz-Signature=71d0c9ce9ff24f3b96aef096ebac339fd26c6f6069a0e30550a782ca98791511&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
