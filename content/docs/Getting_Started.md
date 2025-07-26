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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMUUEBIO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIDYq5Q8mFPnTXHuo%2B7XaqnuEd1i0Ar3crF0kCEfqWZpzAiEAob%2FP40ykGhf7SgCyPVegxSJn9lb%2BKR%2FKAD00YsbbRBwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDHWw8k26G4wiAapx8CrcA0BqbcbxPvJM6IIVZFKDzpKo%2FL4HbA72r6rHWIxoZxHjggC08xtnfuOfi2vApV4f5Aqz0jVSP9AFA3XguuF57yhCO368MPi5is5EgCaAt2N1cle4%2BXtzdLNiT68%2F%2Frb2McfGCzccPbAbyTQajb0p0oWrak7X1inaVEG4lrovIP3EN7vrJ55GS7OuxrUVtLmqGWs4gIbs%2FYI3uXtq25vI15XAVydPYk%2BPxbyUTBJZmZ2i3ZpzmVICuRfgrwf0T%2Fg41a%2BppChqjxc2xgoiXwMDuAjMtDLVeM4FvVcDaX%2FSfQivnFfxTNf0OPN8BEz2mhjluet0ohLAAoIFcDdwI0whsMdPjbUOpcPLkA1QOOc6dMkUP0l79jxPlq955VaCHRqdMgUzatlcL2cmZOBd2WNZOyRZwYcUAby8wTB%2BkeOnDmFKJWhAD26Uw0aWoGPlbjpVD0se1O81Kj%2FlKsxDr6HGJphX55FKmKoH2o1zXyFXY4HIqxkeixtihEIGCHqUS0ioVpyyJ2zIwp1IgYNRWDjPgdieqA6snDi2Ms2pGpMzpoyNetYE%2FLfjqhCO1XGysr8zbRUvvmAamZOP13akbdcb7obdfW9ngWyBgIpfdQqLSI8pjHrwbUEW1c9o8tWRMOj%2FlMQGOqUBJ6YAv2tdUvKm7Jj6S4JM%2BaDh40%2BpDROCQaTH7nVBN9pXqOpGfZ%2Fjx9WLitY4vmjIgDBDf%2FOxCqZoWKILq9yB0rv32RrUCleXSdKZIcLIhGuh93BwI7py%2BQMG2hrXjPWgVbuRQ3QEcJgycGqtgTvAJ5T2u8qQNGn2pM5SV1ZNAftIpa5wCxVu6HGKtiYbtMNd0Os2blRHJCGYM8T5rSQ%2BlPn%2Ff33A&X-Amz-Signature=efd34d15df29331c2e6b740f24f5a8c23fc7612906d2023fe6ecddd2828d5452&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMUUEBIO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIDYq5Q8mFPnTXHuo%2B7XaqnuEd1i0Ar3crF0kCEfqWZpzAiEAob%2FP40ykGhf7SgCyPVegxSJn9lb%2BKR%2FKAD00YsbbRBwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDHWw8k26G4wiAapx8CrcA0BqbcbxPvJM6IIVZFKDzpKo%2FL4HbA72r6rHWIxoZxHjggC08xtnfuOfi2vApV4f5Aqz0jVSP9AFA3XguuF57yhCO368MPi5is5EgCaAt2N1cle4%2BXtzdLNiT68%2F%2Frb2McfGCzccPbAbyTQajb0p0oWrak7X1inaVEG4lrovIP3EN7vrJ55GS7OuxrUVtLmqGWs4gIbs%2FYI3uXtq25vI15XAVydPYk%2BPxbyUTBJZmZ2i3ZpzmVICuRfgrwf0T%2Fg41a%2BppChqjxc2xgoiXwMDuAjMtDLVeM4FvVcDaX%2FSfQivnFfxTNf0OPN8BEz2mhjluet0ohLAAoIFcDdwI0whsMdPjbUOpcPLkA1QOOc6dMkUP0l79jxPlq955VaCHRqdMgUzatlcL2cmZOBd2WNZOyRZwYcUAby8wTB%2BkeOnDmFKJWhAD26Uw0aWoGPlbjpVD0se1O81Kj%2FlKsxDr6HGJphX55FKmKoH2o1zXyFXY4HIqxkeixtihEIGCHqUS0ioVpyyJ2zIwp1IgYNRWDjPgdieqA6snDi2Ms2pGpMzpoyNetYE%2FLfjqhCO1XGysr8zbRUvvmAamZOP13akbdcb7obdfW9ngWyBgIpfdQqLSI8pjHrwbUEW1c9o8tWRMOj%2FlMQGOqUBJ6YAv2tdUvKm7Jj6S4JM%2BaDh40%2BpDROCQaTH7nVBN9pXqOpGfZ%2Fjx9WLitY4vmjIgDBDf%2FOxCqZoWKILq9yB0rv32RrUCleXSdKZIcLIhGuh93BwI7py%2BQMG2hrXjPWgVbuRQ3QEcJgycGqtgTvAJ5T2u8qQNGn2pM5SV1ZNAftIpa5wCxVu6HGKtiYbtMNd0Os2blRHJCGYM8T5rSQ%2BlPn%2Ff33A&X-Amz-Signature=59f8569e70156dc8c0a01d614bba975e47ddda0865dab39779e509d8eff44e24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMUUEBIO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIDYq5Q8mFPnTXHuo%2B7XaqnuEd1i0Ar3crF0kCEfqWZpzAiEAob%2FP40ykGhf7SgCyPVegxSJn9lb%2BKR%2FKAD00YsbbRBwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDHWw8k26G4wiAapx8CrcA0BqbcbxPvJM6IIVZFKDzpKo%2FL4HbA72r6rHWIxoZxHjggC08xtnfuOfi2vApV4f5Aqz0jVSP9AFA3XguuF57yhCO368MPi5is5EgCaAt2N1cle4%2BXtzdLNiT68%2F%2Frb2McfGCzccPbAbyTQajb0p0oWrak7X1inaVEG4lrovIP3EN7vrJ55GS7OuxrUVtLmqGWs4gIbs%2FYI3uXtq25vI15XAVydPYk%2BPxbyUTBJZmZ2i3ZpzmVICuRfgrwf0T%2Fg41a%2BppChqjxc2xgoiXwMDuAjMtDLVeM4FvVcDaX%2FSfQivnFfxTNf0OPN8BEz2mhjluet0ohLAAoIFcDdwI0whsMdPjbUOpcPLkA1QOOc6dMkUP0l79jxPlq955VaCHRqdMgUzatlcL2cmZOBd2WNZOyRZwYcUAby8wTB%2BkeOnDmFKJWhAD26Uw0aWoGPlbjpVD0se1O81Kj%2FlKsxDr6HGJphX55FKmKoH2o1zXyFXY4HIqxkeixtihEIGCHqUS0ioVpyyJ2zIwp1IgYNRWDjPgdieqA6snDi2Ms2pGpMzpoyNetYE%2FLfjqhCO1XGysr8zbRUvvmAamZOP13akbdcb7obdfW9ngWyBgIpfdQqLSI8pjHrwbUEW1c9o8tWRMOj%2FlMQGOqUBJ6YAv2tdUvKm7Jj6S4JM%2BaDh40%2BpDROCQaTH7nVBN9pXqOpGfZ%2Fjx9WLitY4vmjIgDBDf%2FOxCqZoWKILq9yB0rv32RrUCleXSdKZIcLIhGuh93BwI7py%2BQMG2hrXjPWgVbuRQ3QEcJgycGqtgTvAJ5T2u8qQNGn2pM5SV1ZNAftIpa5wCxVu6HGKtiYbtMNd0Os2blRHJCGYM8T5rSQ%2BlPn%2Ff33A&X-Amz-Signature=3b87b19da8e236bb64ec67ae1f9ad16030127282b23a37980fb1c3c458fa23db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674HDP4KR%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDU9vooZS8CQZAPS35sRQ%2B68G5EywxCc%2BUVExmO7%2F9%2BpAIgQhiz2RHJAO436YaBe5Xbt9DF2elFj5J52GHVKeL5qy8q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDLQcl79yKtNUF241mCrcA4ZG5hIwB4AV9mWF12vAFrXTeICytCN4Bw%2FEWz4H5IbqvqfpY3XtgLAS2IlKHslRgCJDx0h1PBDrFmqDV2DZNSaH1BLzkWIIFrTCB52WH3gWeXXGRdthbqL0iVpOe%2Flgto3s5c8iVnjj%2FZe3i965VetHlVyMoyL7C2e%2B06cJ5Pt6bQqKg8Zp0p6iz4Ci2H8YLjtbXsIYOnfOJG7JvCeETxZabs1VO6YuzlbnuAkJrV0c9gEzxiMoVHwoU0xU%2BBiOedH6DmJrfGW8UOBcA2o0RVm12y28EL6kOHGqcXqmZEDn7wkluRIflRQVUIM%2BYFaydEKTSH%2BRSx%2FzEUQnKSLaiaiAUf5PgbFRRHyyUzuT76Fy%2BTT47CwwfPl8iNbbsUGQa955aUbzBM4X%2B01rTZtjE5%2BzOa2%2Fn6O3GLECvtbaPAuWiSGD0btvJ8mVkTDS7Fv6cU8VUUfLhJ9R%2BOYQDRVyTN37jQRRkBu7NP5mtg2Nn5UmvARd2rRI%2BdwYj76AcWCeL6xo6EdWmzCwAlLLPaWYtqCqz9YQLHNSWAyAjptR96X8OaZVqE3wvDJFMZvmH%2F4%2Bl61JE6ufhLT58poVbUUbpARx9%2BDAaQPDNH9RJCosUw7FxAoCNGy2cKVFoiDnMPf%2BlMQGOqUBupwMYVjdqNOr1j6I%2FePXwAmlzvD472%2BOmdxQMZSdvU%2FB%2FKt7ilmtdgDbMnJjgIJwEUJ33AbC%2BV2T5lc6bDCxSxotVT3OI9r5hho5dkk4ocoaRrg2PJtdlyOLqbHzdsNLtWxH4jc0syud3juOGhIn61UTPCjJ3oJ7FFFn3e6IaoMEF5JnbDQB65Z2zbVrTZsoxAzYexSTU0WOP6NwjhCWKKuzsXcp&X-Amz-Signature=a79ea34f286bd647e29066c411d7ea5406ed7d8772670e9d27942924165efa63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q65GA3T%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIDB7wGeFrpGs6t3WD8Up79LVCWTBv%2FoUJqZSPfUuucRXAiAxQo7BxrvuuX%2FbIvyfFg9iHvNuGSb%2FbR1J%2BtVYRf3n4Sr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMqfrB0UIhyPDS2oFpKtwDGi3cGxdOQdtzg9jJFbQcqwdnSTjxnQi4MNx0zmAKuGWZM1KyEFdxG%2B61g15mRiTNx1jUeaxAYNVh6xy4%2F16%2FsxIHAdKNxtNn5BCi2%2Bu9dC1mVNTDtqt6m1kE2gw40qjyNwIRyKrDvQK0YkeXIOBO98TqQoEF1JkoBHo%2FGj6MYOfuWPTtAxXfmYX%2BiZoqIr6RG0RrEbAKKc5NlmHqLEM%2BOUxpZwbj1F%2F0C4rpYC0WaekV56T8Ra%2F6AZQlieNnVdFrdk3Lvn2dsD7NUur76UuzQ7nGeGE1LJv4ltHeOOdWuF8hGv8%2BupJ5ILT7VxksAXtMA3YZLFkESUhs2xOv7B6pCQ%2FW6cpnjlSyvNoMzJqk1jN6FSsJqMMIKs6IvMv%2BVmw7AQYTa0lr3JvGwbAbt34gKuImujbTHlBBZeWxN7uVitqKa%2BWGn2K13J%2Fz83pC7M20PYe261qapVrC85Vv42YwRdLK6HqDcfWSAENR6rrJsqoI55uUiXd1RiKLIPelZdWOjerC0r%2BslrQ0ppuKj5%2F35QBZRRM35QCf0EQx1V4Pcp%2BF9vMO%2Fp7k5UJ%2BbYgRmLmSbpIhJmwkgTXX4hB4ph4fj7NHORupm2Hj25yTjbiMBk3uA2ZtzHEi6uVsJ6Ywm%2F%2BUxAY6pgFix1TgPNIkIY0dHBkqnG%2F11mz6mkQ4wS4MFxR%2FNhyACT8SPTEWuPQGfhid8XQwNDihSvIPusRzofN%2FQ2Wyp4n8aJIApfZpdmTuSsSvF1hifWQDu9pR7euUyerz10SkIcNBN1xEacFYf%2FoPHrFVdm1aSbZ21Ft%2BJ9AcN7GgBiEN5RcUaETlM2asi4eN1gWZlfjMAva82CDl3rMEIPHGcCma5vXuW0yG&X-Amz-Signature=5dd95db51ffcd08ed6e68943c2db37517cf73add8a4698ad27dc4743e7bd6721&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMUUEBIO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIDYq5Q8mFPnTXHuo%2B7XaqnuEd1i0Ar3crF0kCEfqWZpzAiEAob%2FP40ykGhf7SgCyPVegxSJn9lb%2BKR%2FKAD00YsbbRBwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDHWw8k26G4wiAapx8CrcA0BqbcbxPvJM6IIVZFKDzpKo%2FL4HbA72r6rHWIxoZxHjggC08xtnfuOfi2vApV4f5Aqz0jVSP9AFA3XguuF57yhCO368MPi5is5EgCaAt2N1cle4%2BXtzdLNiT68%2F%2Frb2McfGCzccPbAbyTQajb0p0oWrak7X1inaVEG4lrovIP3EN7vrJ55GS7OuxrUVtLmqGWs4gIbs%2FYI3uXtq25vI15XAVydPYk%2BPxbyUTBJZmZ2i3ZpzmVICuRfgrwf0T%2Fg41a%2BppChqjxc2xgoiXwMDuAjMtDLVeM4FvVcDaX%2FSfQivnFfxTNf0OPN8BEz2mhjluet0ohLAAoIFcDdwI0whsMdPjbUOpcPLkA1QOOc6dMkUP0l79jxPlq955VaCHRqdMgUzatlcL2cmZOBd2WNZOyRZwYcUAby8wTB%2BkeOnDmFKJWhAD26Uw0aWoGPlbjpVD0se1O81Kj%2FlKsxDr6HGJphX55FKmKoH2o1zXyFXY4HIqxkeixtihEIGCHqUS0ioVpyyJ2zIwp1IgYNRWDjPgdieqA6snDi2Ms2pGpMzpoyNetYE%2FLfjqhCO1XGysr8zbRUvvmAamZOP13akbdcb7obdfW9ngWyBgIpfdQqLSI8pjHrwbUEW1c9o8tWRMOj%2FlMQGOqUBJ6YAv2tdUvKm7Jj6S4JM%2BaDh40%2BpDROCQaTH7nVBN9pXqOpGfZ%2Fjx9WLitY4vmjIgDBDf%2FOxCqZoWKILq9yB0rv32RrUCleXSdKZIcLIhGuh93BwI7py%2BQMG2hrXjPWgVbuRQ3QEcJgycGqtgTvAJ5T2u8qQNGn2pM5SV1ZNAftIpa5wCxVu6HGKtiYbtMNd0Os2blRHJCGYM8T5rSQ%2BlPn%2Ff33A&X-Amz-Signature=82b7da45ac23f30c244b687cf661943baa241650b7a58530a419cbaca560cb10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
