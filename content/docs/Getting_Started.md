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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7R572LW%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHx2ZBzWUNPFfe%2B%2Fu%2BhPeBhCdgoX0mWVKB%2FJp3iY%2F4FpAiEAth4aqtZVNKZ3uJGOJ8LIMYZi2IDomK%2FbkKmXNIhKCnAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDFYGckWXzw1m%2B0zIcSrcA%2Br2%2B9JdTJBurkDPiA3XOcVn7SAo0Dh2wwRkVSJ6tXuQdeum940U1jkmz52DU6MKawmSxXesxcS%2Fi5mBIV6fSTyxGWstguoPA%2FNTcNdQrLSBMS7BZdD8i67mOPMHN%2FP7bIxybxvDNm%2Fx%2BVDPcX82s1eu8UseHF8RFwsN8hiyadM%2BEj6yJ2PduL%2Bw0uf7OD0DAU0xZ%2Bo810HHe%2FdgVIUqZSVZrZg%2FvObxh4JzHJ2hi%2FJD%2BFafvGOY5mxe22ohHaYNT9%2FhEOn8FiqSpqzyHQy8OSJPTMgNZr7h4Qb7zf5SFsTt8xJP3ei95u3TNaUj%2BD8LHBmYW%2F6POQKPEqQYvMNZtlAhvywQ83qTzmWNWtRMwxLpHfDB4UZB32KYrfjRgxuNgy02EbE7SvTFMKJQrHY8qGmEWsrM4jzxCAQfZIlWSwvng5fZdxmpTS8QZycjXwddKxiWp%2BQk9CEDQRMl3OfgDimBIAbip3Y6yT0ZuX3onmE08dbEU8JktLNTEBA7Uj4tTlK2b1k2JAAcG0pIJ8jtN1sPODW4G0q1EF9ruJ8091c09QOjdNFxTK8MvvXB0aLCfYcwfcOd4vBlDuq359RVIYryJYduIjco4eULbV23FVEQshu8I8%2BQYp3GhHF3MLn81sEGOqUBv5HZnMDbks0yXyacaRGvfn0FptQuKm1fhljUdZyHx6rIDQjoIHFq%2F1xlWorNLpGHBJW7nFH%2B09B2lBKVMeMo5R9cGB9bodDlsPtHx5SenEa7HgDgAgr7A0dCE0rNb9gx0GAGqTnbG3qcrCsVU%2F%2Fh9ITx0VSZUZifTmYUDbpk0ahjFDEeyffabqGJ3lAUnPW5C597mP5ca4788EU3Qwv88%2BcAkLgj&X-Amz-Signature=eed7606c58211c995aa1f991f72f79289b860a4c407382ebaa281d780d6eb4d9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7R572LW%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHx2ZBzWUNPFfe%2B%2Fu%2BhPeBhCdgoX0mWVKB%2FJp3iY%2F4FpAiEAth4aqtZVNKZ3uJGOJ8LIMYZi2IDomK%2FbkKmXNIhKCnAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDFYGckWXzw1m%2B0zIcSrcA%2Br2%2B9JdTJBurkDPiA3XOcVn7SAo0Dh2wwRkVSJ6tXuQdeum940U1jkmz52DU6MKawmSxXesxcS%2Fi5mBIV6fSTyxGWstguoPA%2FNTcNdQrLSBMS7BZdD8i67mOPMHN%2FP7bIxybxvDNm%2Fx%2BVDPcX82s1eu8UseHF8RFwsN8hiyadM%2BEj6yJ2PduL%2Bw0uf7OD0DAU0xZ%2Bo810HHe%2FdgVIUqZSVZrZg%2FvObxh4JzHJ2hi%2FJD%2BFafvGOY5mxe22ohHaYNT9%2FhEOn8FiqSpqzyHQy8OSJPTMgNZr7h4Qb7zf5SFsTt8xJP3ei95u3TNaUj%2BD8LHBmYW%2F6POQKPEqQYvMNZtlAhvywQ83qTzmWNWtRMwxLpHfDB4UZB32KYrfjRgxuNgy02EbE7SvTFMKJQrHY8qGmEWsrM4jzxCAQfZIlWSwvng5fZdxmpTS8QZycjXwddKxiWp%2BQk9CEDQRMl3OfgDimBIAbip3Y6yT0ZuX3onmE08dbEU8JktLNTEBA7Uj4tTlK2b1k2JAAcG0pIJ8jtN1sPODW4G0q1EF9ruJ8091c09QOjdNFxTK8MvvXB0aLCfYcwfcOd4vBlDuq359RVIYryJYduIjco4eULbV23FVEQshu8I8%2BQYp3GhHF3MLn81sEGOqUBv5HZnMDbks0yXyacaRGvfn0FptQuKm1fhljUdZyHx6rIDQjoIHFq%2F1xlWorNLpGHBJW7nFH%2B09B2lBKVMeMo5R9cGB9bodDlsPtHx5SenEa7HgDgAgr7A0dCE0rNb9gx0GAGqTnbG3qcrCsVU%2F%2Fh9ITx0VSZUZifTmYUDbpk0ahjFDEeyffabqGJ3lAUnPW5C597mP5ca4788EU3Qwv88%2BcAkLgj&X-Amz-Signature=9c82f8ade323a8b876dbf29e9282f475d1d9f7ae24c49d6233fef9680cc6f7ed&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7R572LW%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHx2ZBzWUNPFfe%2B%2Fu%2BhPeBhCdgoX0mWVKB%2FJp3iY%2F4FpAiEAth4aqtZVNKZ3uJGOJ8LIMYZi2IDomK%2FbkKmXNIhKCnAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDFYGckWXzw1m%2B0zIcSrcA%2Br2%2B9JdTJBurkDPiA3XOcVn7SAo0Dh2wwRkVSJ6tXuQdeum940U1jkmz52DU6MKawmSxXesxcS%2Fi5mBIV6fSTyxGWstguoPA%2FNTcNdQrLSBMS7BZdD8i67mOPMHN%2FP7bIxybxvDNm%2Fx%2BVDPcX82s1eu8UseHF8RFwsN8hiyadM%2BEj6yJ2PduL%2Bw0uf7OD0DAU0xZ%2Bo810HHe%2FdgVIUqZSVZrZg%2FvObxh4JzHJ2hi%2FJD%2BFafvGOY5mxe22ohHaYNT9%2FhEOn8FiqSpqzyHQy8OSJPTMgNZr7h4Qb7zf5SFsTt8xJP3ei95u3TNaUj%2BD8LHBmYW%2F6POQKPEqQYvMNZtlAhvywQ83qTzmWNWtRMwxLpHfDB4UZB32KYrfjRgxuNgy02EbE7SvTFMKJQrHY8qGmEWsrM4jzxCAQfZIlWSwvng5fZdxmpTS8QZycjXwddKxiWp%2BQk9CEDQRMl3OfgDimBIAbip3Y6yT0ZuX3onmE08dbEU8JktLNTEBA7Uj4tTlK2b1k2JAAcG0pIJ8jtN1sPODW4G0q1EF9ruJ8091c09QOjdNFxTK8MvvXB0aLCfYcwfcOd4vBlDuq359RVIYryJYduIjco4eULbV23FVEQshu8I8%2BQYp3GhHF3MLn81sEGOqUBv5HZnMDbks0yXyacaRGvfn0FptQuKm1fhljUdZyHx6rIDQjoIHFq%2F1xlWorNLpGHBJW7nFH%2B09B2lBKVMeMo5R9cGB9bodDlsPtHx5SenEa7HgDgAgr7A0dCE0rNb9gx0GAGqTnbG3qcrCsVU%2F%2Fh9ITx0VSZUZifTmYUDbpk0ahjFDEeyffabqGJ3lAUnPW5C597mP5ca4788EU3Qwv88%2BcAkLgj&X-Amz-Signature=15d15e990722f195acd3ed331e6a674fdffeebb87c2749b11324117506702880&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNUXNE2N%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICnGYxalgdXqENICefxLsRq9JyqUrnblrSrnpZJDMB9yAiEAolJTuSKs5F3etxcFWGHwDvdmB8KgClcNL9WirchAwhcq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDGY%2FwGpR1JRBrcCN2CrcA7KYSHGA7Ku328qZkx0i0lKBsgP7RPxWHyjeUvBPPzIypfSRkTHC8bDOchfTdb18t8ow1qaAdxyZpoldPdwnx2wG%2FFDAA6Whpgxa5nYwum5nlkqzc6%2B0XEonNmquxzQwNU91lnG3%2F2UPAuS%2B2vnxi7LONYDXtqyr2oDC3%2FIK63DOLhQ668dNN6uBqZjmvb7ywknmbQV16Q06sQMqYtQkwyPgsvaO2iYFVKybXF6F9yMBUCHrVa7EQ1E8xfB90H4eCp15Ad9Fo22EuuqMCeq9IXeYVq%2BdAklUWrtRy%2Fle7vEs%2FJTFkoyVbMiSiba%2Fe%2BkKo5uTDWeOAPqihBJHOpKLXi3i%2FZX%2BPdAuFUo3v5HqgEe80FfPIbtFAurlm1CEBN320V2r0u0eedH6nD19jnENea0y203bSllzny2AVyVvaKjGV8bytuUfHgS%2FstzLln4PvEJo%2BpTFtsAw4tOc3CsPPcSzKanNpq8Ut%2B44v4SXqwk2yMuWZQV8Z5zv4DfPuWGevVEnENrvJ6q%2Fol2p5Ekph7KrcaO0JO74wyucdsF%2FnNzm56we%2B0z7FsUhmZK0CbXjPlWaZCjeTdjCWD4fIC3frgaBFimUTg%2FKBv2FQEHxwQXQUdZ%2FDon8XL67GS2FMLT91sEGOqUBsTL%2Bt18tpPSXAVVtgHnCFVtiPL5Wi7DdeJCg%2FZrNp0GGeQ1%2Bw6Cqq7mUeNAqwbM6teyXSQw3Xfe8Kmo%2BbthlesLxghO6vsXyZTnkXi6ehbGvG8Iy6GYeVJWbzcH7m%2FhCYm05BgeVJ8eXGD6zUOQo8AqvMRQjFa0zrZ8hrHAaRX9hEdJN8o3LLXQ4pA9oqwEF4tjwOhG%2BX0xMJqIK%2BREH92WtwMrX&X-Amz-Signature=1117b5aa2f87177cbee1d1e93f14e4263f3f4198d099fb4e0d300f7e157d24dc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RJIRNOL%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICf%2B2ynQcyrF%2Bf2FXyUMU0qr1zHmZrOQxWZZAanX7EzIAiEA837cFMPZx5UJgBWNVaLy2zrIQ42GnTDzIVtKAMloy%2F0q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMoHqs4bcbNWrxz41ircA8e%2BJErKWtsFRe3OH7PwVEliXZaqlDclN738i6YLhp6jvDj4FyrO4PCQtFYBllOfqhx0kI9Yu7lxXMaTpwTmwNqBWowFtnqaxCqh8w1tlpmXkpT8nHIAVCKlmuhr7leJDlQ3qL%2FPY2kHe6MJ4BB4PIfrKGpoZa4p7UOXfTABf2pT%2Bg6gk%2FecxHeWCPIlIN9E9BCqzBlumcX3UK6Wcri1uWHJEwryvobKfzJo0gK92vDyK9tEa52w92Matf8nIdxqtTSq8vvhLZLPUWJLBdAbz29QqrjK%2BxP2IIW4%2BoAQrqg%2BTiAjyUu4tfAZfrUfzLkcHsMDgqnc3JA1QTKiAjDaKB4Op2hwxCMogS9IR%2Bud1OAxnIe%2FAhxgVGcLfU263F%2BS2HdoMz6KXaXvhboBSsBSJ2bij0R0pu%2FOTRGwMo0HxAPLmN0Ve46ajoZz%2BIPP3PF282GoRNGZG9SbRAumEfTx%2FGqPDNPCdBlITFdHtFD1DI1r8aJZWjXFQieAA2GXmIyCEKIzs7npu7gy2MxXzVZNNsQxr31m1CVSqhVlvoqpTR8SqW2R9T%2BOdnjCzVaOS%2BkCJrc6%2FREjSEaQrqqTDrW4%2B5sap0Y9Cy%2B7Lgin2cqMZQAjwIjXbwznam3Bt1icMMH91sEGOqUBJvFv6heUcK1u6FfN9WHrQ8isR3Ni831FRzL%2FZSB94ZJFQbbwszL7U8en1ffPuKUYOc7YEkM%2BFYPmdQxx65ghKpynidRdvbC%2BjWYZOaWxubGvk75OWeMGYiRlU7lesNAoWkt5HGb6Rwqz%2B0oOnzQ1wN0fyePjl093PzfBP%2Fnxa4PukdpLzqDAwefn%2FwkXissMWasA2rlhpsqwTSnm780SQpmUfZad&X-Amz-Signature=c8b85b2fe6429db1c3aeaae08cdab378f70504731e9f360c1d7878311e847964&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7R572LW%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHx2ZBzWUNPFfe%2B%2Fu%2BhPeBhCdgoX0mWVKB%2FJp3iY%2F4FpAiEAth4aqtZVNKZ3uJGOJ8LIMYZi2IDomK%2FbkKmXNIhKCnAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDFYGckWXzw1m%2B0zIcSrcA%2Br2%2B9JdTJBurkDPiA3XOcVn7SAo0Dh2wwRkVSJ6tXuQdeum940U1jkmz52DU6MKawmSxXesxcS%2Fi5mBIV6fSTyxGWstguoPA%2FNTcNdQrLSBMS7BZdD8i67mOPMHN%2FP7bIxybxvDNm%2Fx%2BVDPcX82s1eu8UseHF8RFwsN8hiyadM%2BEj6yJ2PduL%2Bw0uf7OD0DAU0xZ%2Bo810HHe%2FdgVIUqZSVZrZg%2FvObxh4JzHJ2hi%2FJD%2BFafvGOY5mxe22ohHaYNT9%2FhEOn8FiqSpqzyHQy8OSJPTMgNZr7h4Qb7zf5SFsTt8xJP3ei95u3TNaUj%2BD8LHBmYW%2F6POQKPEqQYvMNZtlAhvywQ83qTzmWNWtRMwxLpHfDB4UZB32KYrfjRgxuNgy02EbE7SvTFMKJQrHY8qGmEWsrM4jzxCAQfZIlWSwvng5fZdxmpTS8QZycjXwddKxiWp%2BQk9CEDQRMl3OfgDimBIAbip3Y6yT0ZuX3onmE08dbEU8JktLNTEBA7Uj4tTlK2b1k2JAAcG0pIJ8jtN1sPODW4G0q1EF9ruJ8091c09QOjdNFxTK8MvvXB0aLCfYcwfcOd4vBlDuq359RVIYryJYduIjco4eULbV23FVEQshu8I8%2BQYp3GhHF3MLn81sEGOqUBv5HZnMDbks0yXyacaRGvfn0FptQuKm1fhljUdZyHx6rIDQjoIHFq%2F1xlWorNLpGHBJW7nFH%2B09B2lBKVMeMo5R9cGB9bodDlsPtHx5SenEa7HgDgAgr7A0dCE0rNb9gx0GAGqTnbG3qcrCsVU%2F%2Fh9ITx0VSZUZifTmYUDbpk0ahjFDEeyffabqGJ3lAUnPW5C597mP5ca4788EU3Qwv88%2BcAkLgj&X-Amz-Signature=fa28bf82780b928e850b069d0fad5ffc503e65d2d2f7100710019fb998b46554&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
