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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP6QEVNI%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T004305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIFMFQINXN5uncDFEeC%2BPu61paqWdjA22bYDLbmjCI2M7AiBUZarxgnKRMFE2DDh8hqX9W3PAKn%2BYx9p7jWOpmUwX1Sr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMPHcceMfgZ%2FTngOGrKtwDm7C9Nw%2Fy1THMlO%2FQaMJXxguLkkpoidj9BVci1pKzudvGUMR2CCjQaJu6XCI%2B2UPuIUsRX7ONm9p6OXqDImXhy7ZIVDngFkix3X7yR9D3JEkWGi6hQhDioqgfyri6h2sY35RGRw23l3vyyJtSnxRZCsatoYXgo%2Bix7pdPF2scnmckgxnVbnALO%2BbAW2P9WVqjZb%2FIvYVHRyOcBlTt%2F%2ByrcIBC2vVN581dpVDu0LdgKrtGqVkGvJJup6u9PHi%2FHiyxljHqHKgiG71iyMfWw2dQ5ATjA9BV5dKIusSBqlsxXgVkpd0pH%2BQyvVqVM7LgJJDR7NgEy2jT0OK%2B4tiGvOq%2FDGDqmghch%2Fx3H6FZvywCnP%2BTVsP4wi5py8%2FJiKViOJ1BG%2FLb636mimpXqSE0IvoOFX6ZizLRAL9MeE30hf6x1CNgfWtpt9mSfT2QobXu9rz0jOlHCzojkf9DdHW%2BDzseQfDf0xhHgP%2FWBr7qvjgYEwGOCYX4J0k3BLmBrsgnjYlx5ihsWJ6nYi2rmiCk0CVrUJ%2BLxi21kE01kxnarxVeswtofBI%2BLwKmbaZdiwrpzyfoDvKH9W66FU4gc79unK3Hohkntt%2B0H6Xqc5FJiIID8vyd3JXWvrJ5r0sAMsgwpdfnwgY6pgGKLGEIhcossxlGyog9oqO9W7TAGEjyqzb6dz7%2Fq8Dux3RbCteKJvz3%2BwkeuRprblScfIaKrQyMIu654RYnkKv0h%2Bymg%2BncjUmWhN6gH25fa7t2VKhK%2BvTMTPilmoVv%2BHkZmcxtgWVNDSptW%2BIfoKI%2FW6pEHikrGfx%2B9rw1s2rhJB0viYp%2BaBBbWSGZCrJIEK0BZS7ufb%2FBJIAjRByhdYxXLjOeHUBm&X-Amz-Signature=39f4c26dc7de342e13086c2dd4022a79b2aec08f6a24c0bf754fa3f9a26269ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP6QEVNI%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T004305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIFMFQINXN5uncDFEeC%2BPu61paqWdjA22bYDLbmjCI2M7AiBUZarxgnKRMFE2DDh8hqX9W3PAKn%2BYx9p7jWOpmUwX1Sr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMPHcceMfgZ%2FTngOGrKtwDm7C9Nw%2Fy1THMlO%2FQaMJXxguLkkpoidj9BVci1pKzudvGUMR2CCjQaJu6XCI%2B2UPuIUsRX7ONm9p6OXqDImXhy7ZIVDngFkix3X7yR9D3JEkWGi6hQhDioqgfyri6h2sY35RGRw23l3vyyJtSnxRZCsatoYXgo%2Bix7pdPF2scnmckgxnVbnALO%2BbAW2P9WVqjZb%2FIvYVHRyOcBlTt%2F%2ByrcIBC2vVN581dpVDu0LdgKrtGqVkGvJJup6u9PHi%2FHiyxljHqHKgiG71iyMfWw2dQ5ATjA9BV5dKIusSBqlsxXgVkpd0pH%2BQyvVqVM7LgJJDR7NgEy2jT0OK%2B4tiGvOq%2FDGDqmghch%2Fx3H6FZvywCnP%2BTVsP4wi5py8%2FJiKViOJ1BG%2FLb636mimpXqSE0IvoOFX6ZizLRAL9MeE30hf6x1CNgfWtpt9mSfT2QobXu9rz0jOlHCzojkf9DdHW%2BDzseQfDf0xhHgP%2FWBr7qvjgYEwGOCYX4J0k3BLmBrsgnjYlx5ihsWJ6nYi2rmiCk0CVrUJ%2BLxi21kE01kxnarxVeswtofBI%2BLwKmbaZdiwrpzyfoDvKH9W66FU4gc79unK3Hohkntt%2B0H6Xqc5FJiIID8vyd3JXWvrJ5r0sAMsgwpdfnwgY6pgGKLGEIhcossxlGyog9oqO9W7TAGEjyqzb6dz7%2Fq8Dux3RbCteKJvz3%2BwkeuRprblScfIaKrQyMIu654RYnkKv0h%2Bymg%2BncjUmWhN6gH25fa7t2VKhK%2BvTMTPilmoVv%2BHkZmcxtgWVNDSptW%2BIfoKI%2FW6pEHikrGfx%2B9rw1s2rhJB0viYp%2BaBBbWSGZCrJIEK0BZS7ufb%2FBJIAjRByhdYxXLjOeHUBm&X-Amz-Signature=35129fcd20e3a838dee216d9b3db1ab6e03b9cc429e456c34bf454a2f605df49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP6QEVNI%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T004305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIFMFQINXN5uncDFEeC%2BPu61paqWdjA22bYDLbmjCI2M7AiBUZarxgnKRMFE2DDh8hqX9W3PAKn%2BYx9p7jWOpmUwX1Sr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMPHcceMfgZ%2FTngOGrKtwDm7C9Nw%2Fy1THMlO%2FQaMJXxguLkkpoidj9BVci1pKzudvGUMR2CCjQaJu6XCI%2B2UPuIUsRX7ONm9p6OXqDImXhy7ZIVDngFkix3X7yR9D3JEkWGi6hQhDioqgfyri6h2sY35RGRw23l3vyyJtSnxRZCsatoYXgo%2Bix7pdPF2scnmckgxnVbnALO%2BbAW2P9WVqjZb%2FIvYVHRyOcBlTt%2F%2ByrcIBC2vVN581dpVDu0LdgKrtGqVkGvJJup6u9PHi%2FHiyxljHqHKgiG71iyMfWw2dQ5ATjA9BV5dKIusSBqlsxXgVkpd0pH%2BQyvVqVM7LgJJDR7NgEy2jT0OK%2B4tiGvOq%2FDGDqmghch%2Fx3H6FZvywCnP%2BTVsP4wi5py8%2FJiKViOJ1BG%2FLb636mimpXqSE0IvoOFX6ZizLRAL9MeE30hf6x1CNgfWtpt9mSfT2QobXu9rz0jOlHCzojkf9DdHW%2BDzseQfDf0xhHgP%2FWBr7qvjgYEwGOCYX4J0k3BLmBrsgnjYlx5ihsWJ6nYi2rmiCk0CVrUJ%2BLxi21kE01kxnarxVeswtofBI%2BLwKmbaZdiwrpzyfoDvKH9W66FU4gc79unK3Hohkntt%2B0H6Xqc5FJiIID8vyd3JXWvrJ5r0sAMsgwpdfnwgY6pgGKLGEIhcossxlGyog9oqO9W7TAGEjyqzb6dz7%2Fq8Dux3RbCteKJvz3%2BwkeuRprblScfIaKrQyMIu654RYnkKv0h%2Bymg%2BncjUmWhN6gH25fa7t2VKhK%2BvTMTPilmoVv%2BHkZmcxtgWVNDSptW%2BIfoKI%2FW6pEHikrGfx%2B9rw1s2rhJB0viYp%2BaBBbWSGZCrJIEK0BZS7ufb%2FBJIAjRByhdYxXLjOeHUBm&X-Amz-Signature=4f3ac7ed5660b0563ffa0deeb09f2adeb8d988e31adbe40a6ce73fa4f00ed2f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYAB6GOA%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T004306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDZpRX%2BJrZvjpG033FjyJTjqaDiUlG4DpfzG1ipSvHVfQIhAMzxZIYlvAfwg7liZXjJ9gkLezVcC8m6ZldzGYJuGpenKv8DCCEQABoMNjM3NDIzMTgzODA1Igw0Epejy%2BR%2F7zbXPeQq3AMQdXL7JqrSPY%2FCIvs1oou3vNM3VmccEUJeDpO%2BjHxdNml9A633PPquEbN5DmUCa7lOunN7kQbJQUN2r7JnynMs%2BXnzvSN4Ce4xMg1SB%2BwhkdblSSiq4yy6MUVW3BA3rfdmqi44FZvBs6JMvyzc2bVum2n25ccve0xTMaormm7qLG85%2FusDfeEk3KsTmfWY70csOxNb5SmhWob92IlWa8hD6oPGI%2F3ZenfZEIQ3z0nGZ2LHQHQ8lvEwWGCHhD3DoxEvJp0onF1%2FP%2FaLdHKSenSREhU7yYljkUaKU2uKwjkPl2Ih2C5NHBbjEbNJ%2BHISr7fBFdIz6AEwgL%2B1eT0IFaCL39YhgbuBwuoGL6cnLu5ZbHa5jThhRY0ZknXyHD7j1yX068Ii6xr4Hs8YgtuT4APIn1zfkJqvAjuSV0ncTBIKdL8lbgEdOkZpJzFu6WB5%2FL0W7QSIWcOKK6YKlCbCY11Hp9M7TNshOVxBO0YzrVz%2Bb7y25yg3BaYGF0QRE4Qs790pIiRb5yRVINX8Af21Y7uph4Wd7RM%2Bn%2B21lDVQg9FnEMujawtpqwz6Ykb4owQ6PKkZPgIoaNQBwwg8%2F4InABB400y7MG5lifbD6Jni8E038WdPeR3sJP4s5RZH%2FTC61ufCBjqkAfIdaUnZkf7dX%2B18BRQZz%2FiTLjrB4ZPE%2BVR7YBzgw%2B49nh%2FhGUSxl3s1i7J6jet65lzML7hbr3Sf3LRTrgCMboeLi%2BLUcJ8WtDb2D9NIVdKo258%2F0pOekpC74q2gFbCMiIfmUQ8kajV1Gykf%2B6WSWiDUDKmKs4%2FoATJRAzpjNrMGmnFM3MdiJQN%2BUl0n1n1EH%2F4gyDgJ%2FBucKiwyhGM1sSCSHgUr&X-Amz-Signature=146d410f4e3cce44f55cd15ac0e2f3093c2da7337bd2416988fb00ae6f2a2399&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWSHGVE4%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T004307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCZKjRYM%2FcLfkRKZxpuc6EetlUoy%2F1hXe9zUcyHYn4zagIhALiLXSfMWqE6a2HCeBi3WsB83CQhZA82TOUvxMuaRxlDKv8DCCEQABoMNjM3NDIzMTgzODA1IgxN51IZYDWGzAcsf3sq3APSN24oC%2B8txaVgxHRvwHESSlUA22I8buurXgoEyjgqQFe6lnwF%2FY8EvWcolWHB2ID%2Fi%2BzdcqWW7g%2BSflbPTuQHhfav1nzxJgcEtATMV6xiZaavn1QkKX%2FO7UstUjgc%2F0viMdr5I%2BunSKuOhOIOBg%2FMi%2BGBGoq%2BKyRCf3hqNy88U6cRrPecRRcFbd00LQFtZYZkt%2FXN06xmA458y54sKSVO6bqA2bVIRJTwJKBh68Hl7Btbsq0NvohdfFvUUCojqP1qzR6ARgeQJgsZLbePL7eDdErU7lvVURTZWaB%2FrtNaqSnzurd2jfFWGJVDknWPLJZ7pEowDE7mJsA4ZguIXA5pUR0t628tlaynTjMCd2N%2BBHnm3TczPNuZwwdk1Eu%2B4SuwWBYStGR3nuETQaqK0KDT9FjRwcsEs1EWvCtdrmUsnGb3oD4onJKHTcnDL9qZhVyQeZFeOQ1ZLG4vOhzKmoKwKNOqoQ3DAq7xe4X6a6tZa4nhn5TOFiOWw5fkiW4byGlAYqKHDPXSLxT96raCc54R%2FJel3uEYmDH3ucUQGgjsbF2Y5RaAGlHzRGNbUdFWg9UBcqfKmF04fvDjcsNvSbgPPCOvY4qmJhcfIInSSUMbhGXB7EW2eMDN%2BPHq5jCo1%2BfCBjqkAcwCu9jOmHvJE2uSTp98vcrqeMTpnvrJUmhTqwNazex2SrHH%2FAbTtalRxREMr0FQGHB%2B7Vq33VvZriDxa0MkmYMW%2FG71lPLAb2FjQpa2YNUeSUsMcMpXzvOSQer2d0Qg1v9VzEfxh4vgTOyRCiLloex4jjZrNixnLCd816wPFVC8S1GIiOnrIAsuOhxS5XO%2FUhceNGkG12hRrnOmWGTC9i2YBYNt&X-Amz-Signature=154a8579ec426decb412dfd4c8b8f841c705a08d20665a321b99a236abf6e920&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP6QEVNI%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T004305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIFMFQINXN5uncDFEeC%2BPu61paqWdjA22bYDLbmjCI2M7AiBUZarxgnKRMFE2DDh8hqX9W3PAKn%2BYx9p7jWOpmUwX1Sr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMPHcceMfgZ%2FTngOGrKtwDm7C9Nw%2Fy1THMlO%2FQaMJXxguLkkpoidj9BVci1pKzudvGUMR2CCjQaJu6XCI%2B2UPuIUsRX7ONm9p6OXqDImXhy7ZIVDngFkix3X7yR9D3JEkWGi6hQhDioqgfyri6h2sY35RGRw23l3vyyJtSnxRZCsatoYXgo%2Bix7pdPF2scnmckgxnVbnALO%2BbAW2P9WVqjZb%2FIvYVHRyOcBlTt%2F%2ByrcIBC2vVN581dpVDu0LdgKrtGqVkGvJJup6u9PHi%2FHiyxljHqHKgiG71iyMfWw2dQ5ATjA9BV5dKIusSBqlsxXgVkpd0pH%2BQyvVqVM7LgJJDR7NgEy2jT0OK%2B4tiGvOq%2FDGDqmghch%2Fx3H6FZvywCnP%2BTVsP4wi5py8%2FJiKViOJ1BG%2FLb636mimpXqSE0IvoOFX6ZizLRAL9MeE30hf6x1CNgfWtpt9mSfT2QobXu9rz0jOlHCzojkf9DdHW%2BDzseQfDf0xhHgP%2FWBr7qvjgYEwGOCYX4J0k3BLmBrsgnjYlx5ihsWJ6nYi2rmiCk0CVrUJ%2BLxi21kE01kxnarxVeswtofBI%2BLwKmbaZdiwrpzyfoDvKH9W66FU4gc79unK3Hohkntt%2B0H6Xqc5FJiIID8vyd3JXWvrJ5r0sAMsgwpdfnwgY6pgGKLGEIhcossxlGyog9oqO9W7TAGEjyqzb6dz7%2Fq8Dux3RbCteKJvz3%2BwkeuRprblScfIaKrQyMIu654RYnkKv0h%2Bymg%2BncjUmWhN6gH25fa7t2VKhK%2BvTMTPilmoVv%2BHkZmcxtgWVNDSptW%2BIfoKI%2FW6pEHikrGfx%2B9rw1s2rhJB0viYp%2BaBBbWSGZCrJIEK0BZS7ufb%2FBJIAjRByhdYxXLjOeHUBm&X-Amz-Signature=c5809e6979edb7fb7882e3e60139f24009b76def46404552908e98a7a7348fde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
