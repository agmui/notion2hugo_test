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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUECXVKA%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T004929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCl0VAvZYM4FBLvHmrkOnjght1XKSaZzf1Otd0M7FXJVgIgPX47WpYgAgz29a3Ps9LKXhyjgLNtK%2Bxn51r%2BgnMmgbgqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4LhQk%2FuFlR0fVS%2ByrcA56MYO%2Bxgl%2FUhcBKXSN0v%2FsMY7zTyU5Oox1hoPUOZGQ00mZSmHmgGOnpyOerZUsdUAJpgy8k%2Bot59GOCHk25ZHHJaaLk7AOA4Ku3O0B8FWT9SsUgKpV7ci2sEp5le6EYJl7pW%2FNXflWOwTHnOxmgBLx1ZlHL6BtVJM%2F%2BCC9xVQhodAKv1cti%2FjJ5791bMiAhXHBWrA2yf3h7t%2F406Eun8V5MobnOLKgwSMbSNfZCtEuPGnuJxYH6j5gxJ8Zcz1aAw9iFy4OEoKExrZcrukpmYp9Pq3Y293L91ZC%2BakFkhNXkCyfAD2WtDcqNRRFSez2%2FjtLjQ88DfKYSzKD%2BdsylPoYRgDxlIhVdZRELLExx7pvaBlmx%2BAxh7HD0v7LfUZ4ZXDwNDDgu2C4OZIlxVnw7QXJdECT1bnpuSOxIHKGhJrYcZJRcK5hoT%2BDKLn5aLwjNTntISc70A3QhJUVyB%2Bcsi4uQalVRWCGlCRDuyJWr%2FgcWTs9rSD3mCTsXmvCK%2B7BBzn5SbrYgFgxvyGOwUL4MZFfWXzQM%2ByQN4DsIW1tw0XqgVGdibvf6G4h2BYxeb3dOXjTH%2BSG9WxHIYYAlLWal3rmrfPZltUywA0Y96lG0d%2FS7RfajrRV5iLzfAhyHMN%2BZgsMGOqUBQ4WIemVxznIWlF5bEFR6%2Bws2prxSmBOrrwXkH8UcLIXQa%2F80q3zPN5lIICMcduQwAtOrWPryItHkBoqmTjstpXwTFlQzEWS8wO0UMU4WgFVHin66iMU2r3DIUSKj4rNZUvmlezYXDzSGiqRTzWXTrsYo9zoVkw6fWWzqHOFZzqY68xW7qahRgXm7YKpbj2m8dEm022aofHWb6J5iYDLwD8X7uSy%2B&X-Amz-Signature=334ff4ffbdd101346b604beaaed7848fc817f997f9f5d538de0c63ce973cd050&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUECXVKA%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T004929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCl0VAvZYM4FBLvHmrkOnjght1XKSaZzf1Otd0M7FXJVgIgPX47WpYgAgz29a3Ps9LKXhyjgLNtK%2Bxn51r%2BgnMmgbgqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4LhQk%2FuFlR0fVS%2ByrcA56MYO%2Bxgl%2FUhcBKXSN0v%2FsMY7zTyU5Oox1hoPUOZGQ00mZSmHmgGOnpyOerZUsdUAJpgy8k%2Bot59GOCHk25ZHHJaaLk7AOA4Ku3O0B8FWT9SsUgKpV7ci2sEp5le6EYJl7pW%2FNXflWOwTHnOxmgBLx1ZlHL6BtVJM%2F%2BCC9xVQhodAKv1cti%2FjJ5791bMiAhXHBWrA2yf3h7t%2F406Eun8V5MobnOLKgwSMbSNfZCtEuPGnuJxYH6j5gxJ8Zcz1aAw9iFy4OEoKExrZcrukpmYp9Pq3Y293L91ZC%2BakFkhNXkCyfAD2WtDcqNRRFSez2%2FjtLjQ88DfKYSzKD%2BdsylPoYRgDxlIhVdZRELLExx7pvaBlmx%2BAxh7HD0v7LfUZ4ZXDwNDDgu2C4OZIlxVnw7QXJdECT1bnpuSOxIHKGhJrYcZJRcK5hoT%2BDKLn5aLwjNTntISc70A3QhJUVyB%2Bcsi4uQalVRWCGlCRDuyJWr%2FgcWTs9rSD3mCTsXmvCK%2B7BBzn5SbrYgFgxvyGOwUL4MZFfWXzQM%2ByQN4DsIW1tw0XqgVGdibvf6G4h2BYxeb3dOXjTH%2BSG9WxHIYYAlLWal3rmrfPZltUywA0Y96lG0d%2FS7RfajrRV5iLzfAhyHMN%2BZgsMGOqUBQ4WIemVxznIWlF5bEFR6%2Bws2prxSmBOrrwXkH8UcLIXQa%2F80q3zPN5lIICMcduQwAtOrWPryItHkBoqmTjstpXwTFlQzEWS8wO0UMU4WgFVHin66iMU2r3DIUSKj4rNZUvmlezYXDzSGiqRTzWXTrsYo9zoVkw6fWWzqHOFZzqY68xW7qahRgXm7YKpbj2m8dEm022aofHWb6J5iYDLwD8X7uSy%2B&X-Amz-Signature=91fcd53e3c154bf7fb660dc22fa932f31c63502c6125317c6cecb5b7cbf04f66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUECXVKA%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T004929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCl0VAvZYM4FBLvHmrkOnjght1XKSaZzf1Otd0M7FXJVgIgPX47WpYgAgz29a3Ps9LKXhyjgLNtK%2Bxn51r%2BgnMmgbgqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4LhQk%2FuFlR0fVS%2ByrcA56MYO%2Bxgl%2FUhcBKXSN0v%2FsMY7zTyU5Oox1hoPUOZGQ00mZSmHmgGOnpyOerZUsdUAJpgy8k%2Bot59GOCHk25ZHHJaaLk7AOA4Ku3O0B8FWT9SsUgKpV7ci2sEp5le6EYJl7pW%2FNXflWOwTHnOxmgBLx1ZlHL6BtVJM%2F%2BCC9xVQhodAKv1cti%2FjJ5791bMiAhXHBWrA2yf3h7t%2F406Eun8V5MobnOLKgwSMbSNfZCtEuPGnuJxYH6j5gxJ8Zcz1aAw9iFy4OEoKExrZcrukpmYp9Pq3Y293L91ZC%2BakFkhNXkCyfAD2WtDcqNRRFSez2%2FjtLjQ88DfKYSzKD%2BdsylPoYRgDxlIhVdZRELLExx7pvaBlmx%2BAxh7HD0v7LfUZ4ZXDwNDDgu2C4OZIlxVnw7QXJdECT1bnpuSOxIHKGhJrYcZJRcK5hoT%2BDKLn5aLwjNTntISc70A3QhJUVyB%2Bcsi4uQalVRWCGlCRDuyJWr%2FgcWTs9rSD3mCTsXmvCK%2B7BBzn5SbrYgFgxvyGOwUL4MZFfWXzQM%2ByQN4DsIW1tw0XqgVGdibvf6G4h2BYxeb3dOXjTH%2BSG9WxHIYYAlLWal3rmrfPZltUywA0Y96lG0d%2FS7RfajrRV5iLzfAhyHMN%2BZgsMGOqUBQ4WIemVxznIWlF5bEFR6%2Bws2prxSmBOrrwXkH8UcLIXQa%2F80q3zPN5lIICMcduQwAtOrWPryItHkBoqmTjstpXwTFlQzEWS8wO0UMU4WgFVHin66iMU2r3DIUSKj4rNZUvmlezYXDzSGiqRTzWXTrsYo9zoVkw6fWWzqHOFZzqY68xW7qahRgXm7YKpbj2m8dEm022aofHWb6J5iYDLwD8X7uSy%2B&X-Amz-Signature=df03ddf838fa9a5651203d44a9305eb8af7ce5b596c65459f7ac759e2fe6822c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO2KTF2E%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T004931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmeqLhf6HSQHFZ7vRI56NKedPw0r6AVzcbi04QEqdfewIgEZaM8gwM3AqU2xjjuQaWI29MCRXMNlNvNOP8ntLBozAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvczY1EuqgdLiOr4yrcAyILRpA866Ri82N47SJ6%2Fb7w%2FtWCDwOUkmYT59tpXqfPEbzylbhDPPUoHEXwlelz6vSB%2FkMG0blMd5tdQRlkPY1RTx4CLlb2Jj0hYw1iA13FG7rd3bIul1e7PW%2F%2Bw%2BSaa%2FOD2Hrx%2FC7CdNHEYiRE6KvNoqqLTCxZupTddhqj28%2Bs2EuXSVeDGh3OpZ9gy0%2F%2Bj%2F%2B8%2FD9v5632zfBpllp37sIpzIhCwY1jo19Q1E1gjYwvSH45pAj4XSdzj1IA13Bz8NreOOQmI0%2BPRO%2Fe9l8KZ4wdykAK%2FmfH%2F12z7ZNVRQ3vYFZHZ2Kqs%2BXGrvfyCBfMmNK%2F8aKJGtHzK%2BFIuWsV4sHUikHiAFISx%2FTpKpXx0Wx0Qj5ammA1qzG1DKa990B5bVXNKzmF%2BBwYDfnTOM9HZ0j%2B4fwtY2l%2BtPF%2F09fMIhOMVaJRjphfYOWznJqueQ22txE7d6trZN2IIgYPMH4VDp1XtJGsMOFiwJnje2CXJdaSSSd81b0wV%2FKHnz017yfGlbzyoOrOZkbANrIkQ6XIoMIeszPittVrSP9RtDCMKKjtDsZisCpH%2BZdab9HqkwsBHp778DZRlvBAKJotWlVyP15Jwc18SH6FRSbhmtp4XSimFOlv9BaEMTSDLTopMPOZgsMGOqUBl67w55lbs2Q2WeJfsCHggB0uwRLg%2FlP4QmYBMcBf5IS%2BjTEe4GMlO%2B2i4TvYCJ0Ae0k87BzP%2F8KjI8NV8uISylr0yNThFfmm3BhkKtDl82IWelya6cGOZsuKNgFlZml39LvMnxdq86XCvOKn30eYN1CanIOjj62rvzrZnEvw5CvWLJqOeXZJoFZChDHaiVdcgLpch9apnC%2Bw1xkugjhQEYZuhnRq&X-Amz-Signature=1ef1788eaecd9a193cf9e59c72b7ce024ae44c8bc2d018b0509f99985eb3e13e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDB2QIHD%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T004931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPB8aikzLqohDd4mRW0XpDyX9f3ncxKbG5zp1W1nprNAiB9Z0JP5%2BOXUqIvnvjL5UXWU6Oxl38i%2FtYJfzChRK2QuCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMirraHv9%2F5JO90OlBKtwDVE1oxkDxpevBVjIgytr71u8byw8EZ64eX8TimiQ7KZKDiTPXXQRU9g0BKQeeGiUvRMZulEom3CGqksXb7jq%2BXPqBP0yhVQT6fM6SdpYsZLL0VyI68m5c5cD1wSv7ViwF1ZppL9ga1aKwdctmGW%2FBLcS8wFDn%2FMtsvqcMayxhBmNOAMUsoJYLMRI0YAqu7%2BO%2BRBZmridWRw4ey3f3EBo249oLGzgSrDhvRlkRmq9iEMyFx%2BjvQq5MNI1i9GG939FlSVI7Z2UThQyvKQ0%2BhfojUJHVkxGJP%2BGhOVI2UF0XIA7HaHVVj53IGEMJBtkvDERgLIRTxDflP351A3k9QV%2BemwuNVtmGu%2BEMBeqIm%2BmlNMjNi%2BkN2Yiz1KIWj6ofs4%2FYfXSCAfvmuxAi0flBHHpYrW1hzSxk46KvPCbmyaZs1SsgW6J5SLLDjcf90Nmmd44nsG3wOta3SvWvsdL%2B%2FgdnYLsSemEkIVNzvP1ir3GMlZm4vZ85UbFspBAZxkx9dFeiE%2FjPKKhdgQRxcIi342k8N%2B60f0YjBz0JRGF%2BPlrGLb0lA3VjOJ6nWYZEwTc%2BI5wCggBsXshiAJPDLxSjpfLgNdF3iXM10WS8yvEC7IEuSHkpxmFndCC9PxwCQmkw0ZaCwwY6pgFbyrA%2FuTAR9bptyqARHnnbehcsv3sqOe75oiRo%2FT%2F8ln%2FLOxqVLiNJ8loQGbAdp5PWO%2BFM6zoqYVHCNNZRMhqAI4%2FIY3XgV1aHqnWRZLmci5wPdN8SO22vze44lkH%2FE7WmZfLzj%2F1JFeerA7lLKKVKwqHs1ywF9Zmdt58%2FaACsiSjZ4X18Z67kvS%2Bd1EUim%2BQGTnTXvSBFV34%2FtfD5vFITUCv%2FibTy&X-Amz-Signature=9321f9f3241fede008bbeb9a3d28c23d4d96422d0455f392d8ed6ea651ea75e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUECXVKA%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T004929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCl0VAvZYM4FBLvHmrkOnjght1XKSaZzf1Otd0M7FXJVgIgPX47WpYgAgz29a3Ps9LKXhyjgLNtK%2Bxn51r%2BgnMmgbgqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4LhQk%2FuFlR0fVS%2ByrcA56MYO%2Bxgl%2FUhcBKXSN0v%2FsMY7zTyU5Oox1hoPUOZGQ00mZSmHmgGOnpyOerZUsdUAJpgy8k%2Bot59GOCHk25ZHHJaaLk7AOA4Ku3O0B8FWT9SsUgKpV7ci2sEp5le6EYJl7pW%2FNXflWOwTHnOxmgBLx1ZlHL6BtVJM%2F%2BCC9xVQhodAKv1cti%2FjJ5791bMiAhXHBWrA2yf3h7t%2F406Eun8V5MobnOLKgwSMbSNfZCtEuPGnuJxYH6j5gxJ8Zcz1aAw9iFy4OEoKExrZcrukpmYp9Pq3Y293L91ZC%2BakFkhNXkCyfAD2WtDcqNRRFSez2%2FjtLjQ88DfKYSzKD%2BdsylPoYRgDxlIhVdZRELLExx7pvaBlmx%2BAxh7HD0v7LfUZ4ZXDwNDDgu2C4OZIlxVnw7QXJdECT1bnpuSOxIHKGhJrYcZJRcK5hoT%2BDKLn5aLwjNTntISc70A3QhJUVyB%2Bcsi4uQalVRWCGlCRDuyJWr%2FgcWTs9rSD3mCTsXmvCK%2B7BBzn5SbrYgFgxvyGOwUL4MZFfWXzQM%2ByQN4DsIW1tw0XqgVGdibvf6G4h2BYxeb3dOXjTH%2BSG9WxHIYYAlLWal3rmrfPZltUywA0Y96lG0d%2FS7RfajrRV5iLzfAhyHMN%2BZgsMGOqUBQ4WIemVxznIWlF5bEFR6%2Bws2prxSmBOrrwXkH8UcLIXQa%2F80q3zPN5lIICMcduQwAtOrWPryItHkBoqmTjstpXwTFlQzEWS8wO0UMU4WgFVHin66iMU2r3DIUSKj4rNZUvmlezYXDzSGiqRTzWXTrsYo9zoVkw6fWWzqHOFZzqY68xW7qahRgXm7YKpbj2m8dEm022aofHWb6J5iYDLwD8X7uSy%2B&X-Amz-Signature=daed7408d1b66481ee122b6ef22fa7c2d0f2bbd3a6cc29aa8b9d9cb9a2693b43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
