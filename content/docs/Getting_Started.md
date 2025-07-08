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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQRKYC5M%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T132647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGM8oqFNrMMA3wEw%2BfwXD9C0cSiCpVTX%2BtRLQmM9FKdIAiBH8g%2BxfAmyhKZdqPiSfBtqTbn8T8f%2Fgkq5IRau5LHuZyqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLj7wtWt4GxQf2V79KtwD9hhstyc1G1gmhCeKnsDS%2Fm7AMNqLn9159gUJ4459g20yH0C4QK%2F37WKBqMRnMfPlmd2vmOcyGVcaUuFXbHzwphEYeY7XAmAV9FpIOBeLZTFBT%2FquAegn%2BCphnYuNdM3qF8gBHxQOHAllqmcZwsA7T3HxYV8PNfaULzCgaLeZKa5m0KBUo81uHxofp%2FouhNRMMYtRtXLcLZ9pkd2ck6eL7KOO7KZ%2BYZO5Nka52E%2BphFjuPyBZPUkKiUZfixryV6kNPDCJYRXHCoc7smrdtEoXzB56MuVk7XyMZVKaYUsP%2FyARz77hTF16oP6tkzcySonmetKuA2%2BH4VTHAjBKeYK1eIml9fslcznGDORBJRH5WhKg0HCBrrCDa0u52eVbtcLC1gXtbi6e4jT2VbL8WFNqqhgmInMisBKYsOE3b%2Bei3vlLA1Q4sC%2BEiFbxc36ebf8IaJIQIq%2FU0AyDBm5Zaj8UcH7DK6xynnCuP8R9HkMwMUqLkucKCHQRn7doyvMdmCctmrSsaLt3R7oj0%2BpTjVSug2OBkrCI6oV5fLl6GXsVxg1qQgngCDESAjkVSZ5JjwoYAHTp%2B%2FzBXXMz63ZD14crfm1ZqGQSZGdghsrachqtKopVYuKCMkRulnYKK7Awp6e0wwY6pgE5iLoQOgvmsX8EsE4NgKBGLMV%2FPdh85h0uXTXrizSb0w6qNqP9JaCLnde1tqoTb%2FZtb9V8GuWq859ee%2FKlWrfOL5OC%2BxZ%2BBnsPuDMzSa8pBlhr%2BEHMvyls%2F5EKb1fqCz92evjTRBXGSOR0%2Fjk%2FXyj9DVQm16Ct3CIHE3etpx2ekDtKg1r4tTRaZ9Gj9zj%2F1tzy492ydCWdC8Ui63A6wtmMlmtKyUtZ&X-Amz-Signature=319300f0bea9bdda782f3b372aebee1a35eb7facfa082cdbbd6b2b0c7252a652&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQRKYC5M%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T132647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGM8oqFNrMMA3wEw%2BfwXD9C0cSiCpVTX%2BtRLQmM9FKdIAiBH8g%2BxfAmyhKZdqPiSfBtqTbn8T8f%2Fgkq5IRau5LHuZyqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLj7wtWt4GxQf2V79KtwD9hhstyc1G1gmhCeKnsDS%2Fm7AMNqLn9159gUJ4459g20yH0C4QK%2F37WKBqMRnMfPlmd2vmOcyGVcaUuFXbHzwphEYeY7XAmAV9FpIOBeLZTFBT%2FquAegn%2BCphnYuNdM3qF8gBHxQOHAllqmcZwsA7T3HxYV8PNfaULzCgaLeZKa5m0KBUo81uHxofp%2FouhNRMMYtRtXLcLZ9pkd2ck6eL7KOO7KZ%2BYZO5Nka52E%2BphFjuPyBZPUkKiUZfixryV6kNPDCJYRXHCoc7smrdtEoXzB56MuVk7XyMZVKaYUsP%2FyARz77hTF16oP6tkzcySonmetKuA2%2BH4VTHAjBKeYK1eIml9fslcznGDORBJRH5WhKg0HCBrrCDa0u52eVbtcLC1gXtbi6e4jT2VbL8WFNqqhgmInMisBKYsOE3b%2Bei3vlLA1Q4sC%2BEiFbxc36ebf8IaJIQIq%2FU0AyDBm5Zaj8UcH7DK6xynnCuP8R9HkMwMUqLkucKCHQRn7doyvMdmCctmrSsaLt3R7oj0%2BpTjVSug2OBkrCI6oV5fLl6GXsVxg1qQgngCDESAjkVSZ5JjwoYAHTp%2B%2FzBXXMz63ZD14crfm1ZqGQSZGdghsrachqtKopVYuKCMkRulnYKK7Awp6e0wwY6pgE5iLoQOgvmsX8EsE4NgKBGLMV%2FPdh85h0uXTXrizSb0w6qNqP9JaCLnde1tqoTb%2FZtb9V8GuWq859ee%2FKlWrfOL5OC%2BxZ%2BBnsPuDMzSa8pBlhr%2BEHMvyls%2F5EKb1fqCz92evjTRBXGSOR0%2Fjk%2FXyj9DVQm16Ct3CIHE3etpx2ekDtKg1r4tTRaZ9Gj9zj%2F1tzy492ydCWdC8Ui63A6wtmMlmtKyUtZ&X-Amz-Signature=a746870589d8f233ed661d27f5a8766d4651156cbb2ccb67e960cbeab333dcc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQRKYC5M%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T132647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGM8oqFNrMMA3wEw%2BfwXD9C0cSiCpVTX%2BtRLQmM9FKdIAiBH8g%2BxfAmyhKZdqPiSfBtqTbn8T8f%2Fgkq5IRau5LHuZyqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLj7wtWt4GxQf2V79KtwD9hhstyc1G1gmhCeKnsDS%2Fm7AMNqLn9159gUJ4459g20yH0C4QK%2F37WKBqMRnMfPlmd2vmOcyGVcaUuFXbHzwphEYeY7XAmAV9FpIOBeLZTFBT%2FquAegn%2BCphnYuNdM3qF8gBHxQOHAllqmcZwsA7T3HxYV8PNfaULzCgaLeZKa5m0KBUo81uHxofp%2FouhNRMMYtRtXLcLZ9pkd2ck6eL7KOO7KZ%2BYZO5Nka52E%2BphFjuPyBZPUkKiUZfixryV6kNPDCJYRXHCoc7smrdtEoXzB56MuVk7XyMZVKaYUsP%2FyARz77hTF16oP6tkzcySonmetKuA2%2BH4VTHAjBKeYK1eIml9fslcznGDORBJRH5WhKg0HCBrrCDa0u52eVbtcLC1gXtbi6e4jT2VbL8WFNqqhgmInMisBKYsOE3b%2Bei3vlLA1Q4sC%2BEiFbxc36ebf8IaJIQIq%2FU0AyDBm5Zaj8UcH7DK6xynnCuP8R9HkMwMUqLkucKCHQRn7doyvMdmCctmrSsaLt3R7oj0%2BpTjVSug2OBkrCI6oV5fLl6GXsVxg1qQgngCDESAjkVSZ5JjwoYAHTp%2B%2FzBXXMz63ZD14crfm1ZqGQSZGdghsrachqtKopVYuKCMkRulnYKK7Awp6e0wwY6pgE5iLoQOgvmsX8EsE4NgKBGLMV%2FPdh85h0uXTXrizSb0w6qNqP9JaCLnde1tqoTb%2FZtb9V8GuWq859ee%2FKlWrfOL5OC%2BxZ%2BBnsPuDMzSa8pBlhr%2BEHMvyls%2F5EKb1fqCz92evjTRBXGSOR0%2Fjk%2FXyj9DVQm16Ct3CIHE3etpx2ekDtKg1r4tTRaZ9Gj9zj%2F1tzy492ydCWdC8Ui63A6wtmMlmtKyUtZ&X-Amz-Signature=123eab41bb512d7144b513d9689abb4a9bb6cd6a3ec088567bc5a600f25c80fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3PEOXAG%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T132649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDneJswXGMmv43bQF4ZNEo01fUtJNJed%2FjOa%2Fmw9WASeQIgZlqlpV%2FOMpXRGQUYDYoOBpqqGa8WEe2HEyL3ZIWiFfAqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFz9oHvfrXwfflQRVyrcA4qWFoBUNYFyIt3n9HTV7N3zWTKvEA1HU%2Bs5Zq3hpdWS5fGhuQwolrJzGpvPM2ceNRzfhZ4bfFNqdEaRXcynF8ljUp1hnbkNQARBJfadpLRTaAWHRB31nxFAziVM6DuaUsMq%2BIAymSRyhukr%2Fci3MBCVUs1paGHmF%2BsPtVnLmc2rHv3SUhamD09pes88%2B%2FnkRMTrizMyFV9LMUdsEx90LhJGegNiE7PWOvrL4bhZwiem%2ByLa7qyaLPL5pD%2FYhHiqDv7FhCibjO5tb2nhbgiBsGe2VX%2FHeofP0EpLiurRD9ciR8S0DhFwkApN0bog5Vn3vQrmy2aczUzs6XmRpR3Alkmcodq77NWUPg3%2F1cY8yB38gMz7QXtPbUigGjn%2BJr4BufhMp24xjxtUcfWr%2BA2eKAmO4HCpVeJ%2FC4bFIjmFfOBFsX5oajZinNtIulkjQqrctavl%2F2EwsiXBvwhKSUuJEdG2PqfWiIdHEHi%2BD%2FNTf5wj%2Bl99ITQeGBTKBc5e6lkqazSg5BaAJJ855SrLzrqsB3QfOgkYu1Q1dfEZBa5tAv7tKBnUbI8OzlAvKG35LYMFL46CqJAz1ZI9WxXLvZzdbxuovHVhdhssa7K0uliYlmQpH5rKw9ZkUUIieXuNMKGmtMMGOqUBwC5jRmyG93RWvn5GAdngIxHkgqXlvY6WttaMMiU3XhMo9on8yvMKosMfvQ63O2lRzvj4hjcOehCzVb6TdM%2FtOanqhGo8kMzpk4YTs6vJK85aeGBHwD8j0U6PeJ79VSz01H9uUqKvBSDmYXvI%2FS7NNZ4KbyYTTV6O6W5lIzZQl%2Biw2LLYfu7HCpGYvUwKIXyvReM5wpkRgrVJN7UYjuePB6gZuYAm&X-Amz-Signature=8b800e054b9755e72f03293474cb44ed5feae854721e5dda6ff5e7a66a0d0cea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TDZNR3M%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T132649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDovUAiR6WXJwsftLN%2B0U4397B7tvKhzWkHvJjnCD34GwIgKLzl%2FeY5NT046zZsqyx1327bEqbnsXFwGibI754w3XIqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA04et82ZK%2BcWL8aNSrcA1pIplAjU7RUK1K7fboZN5VQKaOmej828GH8RQxFYfTVspCF%2F7HmUBDSFE5JK5wOEevQ368fO8KUpuatTG5wRWCNqkoDbOftx1Owh4a9sRNSoIQpJhahSH%2FAGv08G9%2Fn9FApWYHxwjq70fDNKkdpyvqi%2BxP8EEeUM0%2FAFg1swgfO16v%2F2mZAxi3Q10xcFvb9%2BY1ZFUkML%2BVfshPmtN6VoKgi8ftsMGZQUElQzOvr6072lxszrgS8NcbvAMKbShlwjcNk7%2Ba7hPF%2FpV1Wey2A1pOMIIRAEFtgW1nTQoSP8silsDwQDXNsun%2F1uUOmvRcTiJtDqUaMpzjO%2Bv1ukA6K4XVi5A7BgUbkpvrKQzLlCcD1MW845kmzNTpDTOwZLGP49AwWTVR30%2Fh1lUylsdIqV%2FqaGQzBVYO8Xzr1UU1r53ILqEO4VBt%2BpQxZuc%2BrQUK3cDpS%2BLi%2BJx1ZSAhOyFOWEbXyI8AmU%2FxbdlX6Xw8Mr6iigP%2BQCbgdaALL580tzZp0gOD1XdPxoneWshgPHx6qtNJ65JogliQe8W6fqXAun%2FuPVOqzc3bbltKB%2F2AopdKpH5pItR1yR7ORDZ8HhXblq3v%2FLFYYKkCwFGZqHJmmuoPA6B%2B2NvB9CnJOFJFJMO2mtMMGOqUBCa4AkFJsabnhgfURbHxV5qeGYHH%2Fi3dqUTnJBLoGQZs4qgPAzoYQrxkumRz4%2BS6ELDE9c4rs0XLfUsbC%2BRateinodsgrXB81DTMd3%2FMdH2r0gdujxeomwQ%2BKM5XzU5QoPcZiJXOTzou2bRpr8%2BemM0RhFSv5Oq6q%2BEFt5vr7bY%2FDbm6zfdIJU2Jub2kSY4MXNO751ox1WezIr52hWIStL7Msr36K&X-Amz-Signature=6813bec5525a506239632883804f43a2bb477db725f536ce64abfbe7fad98c43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQRKYC5M%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T132647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGM8oqFNrMMA3wEw%2BfwXD9C0cSiCpVTX%2BtRLQmM9FKdIAiBH8g%2BxfAmyhKZdqPiSfBtqTbn8T8f%2Fgkq5IRau5LHuZyqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLj7wtWt4GxQf2V79KtwD9hhstyc1G1gmhCeKnsDS%2Fm7AMNqLn9159gUJ4459g20yH0C4QK%2F37WKBqMRnMfPlmd2vmOcyGVcaUuFXbHzwphEYeY7XAmAV9FpIOBeLZTFBT%2FquAegn%2BCphnYuNdM3qF8gBHxQOHAllqmcZwsA7T3HxYV8PNfaULzCgaLeZKa5m0KBUo81uHxofp%2FouhNRMMYtRtXLcLZ9pkd2ck6eL7KOO7KZ%2BYZO5Nka52E%2BphFjuPyBZPUkKiUZfixryV6kNPDCJYRXHCoc7smrdtEoXzB56MuVk7XyMZVKaYUsP%2FyARz77hTF16oP6tkzcySonmetKuA2%2BH4VTHAjBKeYK1eIml9fslcznGDORBJRH5WhKg0HCBrrCDa0u52eVbtcLC1gXtbi6e4jT2VbL8WFNqqhgmInMisBKYsOE3b%2Bei3vlLA1Q4sC%2BEiFbxc36ebf8IaJIQIq%2FU0AyDBm5Zaj8UcH7DK6xynnCuP8R9HkMwMUqLkucKCHQRn7doyvMdmCctmrSsaLt3R7oj0%2BpTjVSug2OBkrCI6oV5fLl6GXsVxg1qQgngCDESAjkVSZ5JjwoYAHTp%2B%2FzBXXMz63ZD14crfm1ZqGQSZGdghsrachqtKopVYuKCMkRulnYKK7Awp6e0wwY6pgE5iLoQOgvmsX8EsE4NgKBGLMV%2FPdh85h0uXTXrizSb0w6qNqP9JaCLnde1tqoTb%2FZtb9V8GuWq859ee%2FKlWrfOL5OC%2BxZ%2BBnsPuDMzSa8pBlhr%2BEHMvyls%2F5EKb1fqCz92evjTRBXGSOR0%2Fjk%2FXyj9DVQm16Ct3CIHE3etpx2ekDtKg1r4tTRaZ9Gj9zj%2F1tzy492ydCWdC8Ui63A6wtmMlmtKyUtZ&X-Amz-Signature=961b1d9eeae4fdbd05c0753264d044f40d3076a4f4b1e4f3be3e288be2f32d71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
