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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDOSOGWN%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T170940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGPvyg6K7QiM1dPavYvmWHaBgV0p%2BnX2aeRStJa5tsKVAiBRj4C0U9TxIBkX55rqNiOYtCbwt8VAd1lhGUGiLUPezyqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLv%2Fe3dwODdTsHoj%2FKtwD0pFTI89elvv1gsSGkohu6iua%2BIRfMvJb%2Fr8qcuRYwxqGnDa3T32XiT6JcF2NEKdQTUIhFqMBs3Y1uNpS4x%2FhkJB3Oh2%2FUnxTQnSW6RqIroJKh0PRvwZ8PIo6faSd%2BZkUVFNq617b3FT3GkqU593zrti%2BQmDA1W2n3gt509jlhFLf63nwiAaMqckVJQGCIr7mg4IiTMY0S6UWvBvwWql%2FvBWq7zhVaRsyqHCRmzPQqGUlQztXw0ovsco8PCe7n4AFpXYjCxz78NCmBjOfXcV66sFp2aOsSJgxr7viEdogO4SCLXD9RwvdwMZF6x0VnHsDhay3bJ8fSAgAHrfGrogL1XlHZHwr04NJw9hRkVe%2FamajR1uynVXeaKGnPywMXbgnfdVtSMY2%2F2aIeipZLZ6gNVfpJvM6ZMMxmZhrcHnxipYqpgC1HayrDmeyWYGAXm8LVmcg4QgzCWLEsEMtBBU2fM%2F6F3zJJr9adRM5E%2FaWMtoR3hziqAc58%2B9DEtdouwl%2B0DG2XPEUAwxHyctVOAK8UhJL47WQ6h6Q92iF8rd8038BY7a11eJizWQxdVtdv6QZjDNiQHfk5iSNe09XUUw3Gs8FjSxZM6aZuEoCSiit6giIHrrkg1XbmpNSkAYw9oC1wwY6pgFxJYRCBfc%2B8Ak0zY%2BaZZ9qXoFll9p3yKG5UMw7p1PridFwIS4P2nzKPTqb%2Bkzoni75lk8P0sLh6%2BndrvdQeIhXWaNXWy3noJrgbuoYdZZ4V4i29oIA0pQRMql8%2FmVqgJsUF2meI3AB70Ld23sjB7hd47UjJaRXThuKljycF0S2jnxO1rxumFj6Natn9aa%2FH%2BnumWESzmctM0hQI9M5UW0%2FMzC6JE3P&X-Amz-Signature=62d191d2d4a53395c31fae62687b61076af1dbb1166ad3608eae0a93c167de6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDOSOGWN%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T170940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGPvyg6K7QiM1dPavYvmWHaBgV0p%2BnX2aeRStJa5tsKVAiBRj4C0U9TxIBkX55rqNiOYtCbwt8VAd1lhGUGiLUPezyqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLv%2Fe3dwODdTsHoj%2FKtwD0pFTI89elvv1gsSGkohu6iua%2BIRfMvJb%2Fr8qcuRYwxqGnDa3T32XiT6JcF2NEKdQTUIhFqMBs3Y1uNpS4x%2FhkJB3Oh2%2FUnxTQnSW6RqIroJKh0PRvwZ8PIo6faSd%2BZkUVFNq617b3FT3GkqU593zrti%2BQmDA1W2n3gt509jlhFLf63nwiAaMqckVJQGCIr7mg4IiTMY0S6UWvBvwWql%2FvBWq7zhVaRsyqHCRmzPQqGUlQztXw0ovsco8PCe7n4AFpXYjCxz78NCmBjOfXcV66sFp2aOsSJgxr7viEdogO4SCLXD9RwvdwMZF6x0VnHsDhay3bJ8fSAgAHrfGrogL1XlHZHwr04NJw9hRkVe%2FamajR1uynVXeaKGnPywMXbgnfdVtSMY2%2F2aIeipZLZ6gNVfpJvM6ZMMxmZhrcHnxipYqpgC1HayrDmeyWYGAXm8LVmcg4QgzCWLEsEMtBBU2fM%2F6F3zJJr9adRM5E%2FaWMtoR3hziqAc58%2B9DEtdouwl%2B0DG2XPEUAwxHyctVOAK8UhJL47WQ6h6Q92iF8rd8038BY7a11eJizWQxdVtdv6QZjDNiQHfk5iSNe09XUUw3Gs8FjSxZM6aZuEoCSiit6giIHrrkg1XbmpNSkAYw9oC1wwY6pgFxJYRCBfc%2B8Ak0zY%2BaZZ9qXoFll9p3yKG5UMw7p1PridFwIS4P2nzKPTqb%2Bkzoni75lk8P0sLh6%2BndrvdQeIhXWaNXWy3noJrgbuoYdZZ4V4i29oIA0pQRMql8%2FmVqgJsUF2meI3AB70Ld23sjB7hd47UjJaRXThuKljycF0S2jnxO1rxumFj6Natn9aa%2FH%2BnumWESzmctM0hQI9M5UW0%2FMzC6JE3P&X-Amz-Signature=e9ef7d467883b70fc712095193989e4cb6ba3c69e1fd52eeac313a2dd71eacdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDOSOGWN%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T170940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGPvyg6K7QiM1dPavYvmWHaBgV0p%2BnX2aeRStJa5tsKVAiBRj4C0U9TxIBkX55rqNiOYtCbwt8VAd1lhGUGiLUPezyqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLv%2Fe3dwODdTsHoj%2FKtwD0pFTI89elvv1gsSGkohu6iua%2BIRfMvJb%2Fr8qcuRYwxqGnDa3T32XiT6JcF2NEKdQTUIhFqMBs3Y1uNpS4x%2FhkJB3Oh2%2FUnxTQnSW6RqIroJKh0PRvwZ8PIo6faSd%2BZkUVFNq617b3FT3GkqU593zrti%2BQmDA1W2n3gt509jlhFLf63nwiAaMqckVJQGCIr7mg4IiTMY0S6UWvBvwWql%2FvBWq7zhVaRsyqHCRmzPQqGUlQztXw0ovsco8PCe7n4AFpXYjCxz78NCmBjOfXcV66sFp2aOsSJgxr7viEdogO4SCLXD9RwvdwMZF6x0VnHsDhay3bJ8fSAgAHrfGrogL1XlHZHwr04NJw9hRkVe%2FamajR1uynVXeaKGnPywMXbgnfdVtSMY2%2F2aIeipZLZ6gNVfpJvM6ZMMxmZhrcHnxipYqpgC1HayrDmeyWYGAXm8LVmcg4QgzCWLEsEMtBBU2fM%2F6F3zJJr9adRM5E%2FaWMtoR3hziqAc58%2B9DEtdouwl%2B0DG2XPEUAwxHyctVOAK8UhJL47WQ6h6Q92iF8rd8038BY7a11eJizWQxdVtdv6QZjDNiQHfk5iSNe09XUUw3Gs8FjSxZM6aZuEoCSiit6giIHrrkg1XbmpNSkAYw9oC1wwY6pgFxJYRCBfc%2B8Ak0zY%2BaZZ9qXoFll9p3yKG5UMw7p1PridFwIS4P2nzKPTqb%2Bkzoni75lk8P0sLh6%2BndrvdQeIhXWaNXWy3noJrgbuoYdZZ4V4i29oIA0pQRMql8%2FmVqgJsUF2meI3AB70Ld23sjB7hd47UjJaRXThuKljycF0S2jnxO1rxumFj6Natn9aa%2FH%2BnumWESzmctM0hQI9M5UW0%2FMzC6JE3P&X-Amz-Signature=c56db3865a041e864b560ebf94a9bf01121f9323221bc92a3f8671959ea8a1b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633O757L5%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T170945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEIGOKobJXOTNq8QEH6E0vlvuqyML49WqlpDBwXjGPXOAiEA%2BtsHJ%2FST7VFsfHYlOhhkDXL1%2FsjtIU5ILJBEV3oTE8sqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2FfbUzvrbU5bC177SrcA0bReDb%2BuljaRe3MBG%2FaQMYtLMi2bZfKTokGNASUEPMxs3YhFSDyqYoTgmDio2S2sXQljQK0WOBChSoRX9iA7zXQmCI0cX7bu1Ib19iI1EQPjEmmUMfDV7NYbWfe8UgJK2eDrjOYXWwP2j%2Fei25FgkVojMVdqJ6YklUy1AUd%2FGFm4kflLus8oZAQQKTtEvsmCeVFNK%2Bfx9YT%2FgiQw6Xgnz1XJHG8YviVa5AUvcseXQM70OdcK0DKUyyPUZVPNUQcBLku8oR8%2BQrRUEoVuS8DY1SXfU%2F2FHAlbppZ1GfoW0LxkLGtKsgf%2BG4zZt078c2XKdOZ0SJMIPpGCsri4UhIt4wAfkuB2tI799QAfVT%2FTSsgRRrArYgJztyd50CIL4V7JfE7UoX8XIWYrMeAqDnk1abDHF16uCy8MhX6jnsjY%2F6Og%2BjQFhGHdZgZY%2Fyt7%2FQBkl2l5GCHFymV0kLQTVgwj2pFUVsYtTUyk2hb26xa6tTbvZXXssLg0pI32kF92nD71M70v%2Bwa2v9X9ETuIqZ%2FLafP3DqnlKlHjd6cB8pzNfTjHGzlUil8bf9i5Le3jb3%2FAQlrJzW%2FcQIcLHhFgIsjxgonYmAb8r1L%2FvnNPs23HJLeaQQCjQjZofQduPXOMJ2AtcMGOqUBS5du9xz44Sd2Acrrx%2Bar8z5BUxpheUlQojSK%2FnRniS5dZrWRy%2F%2B%2F%2BEHx3BC2G%2BjL4beUp3p0e3W8QId67CVx7%2FfHRRD3G61zIK5Spg%2BaBzpbzFgXrOg57tk5I6MCDDWykBvJ%2FxFLPyz1CRIPEL43hh6fGCcZuE1KLffyUqiAM%2F0%2BhInjOByTyC%2BM96DbnHt9FJbNC5XDHWOfruvxX7VZW%2B77RTB4&X-Amz-Signature=f6c4c92888c8a19c924a16d8fd13cf7fe149e7b3951ec60767b10f086cecea50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WV5HRZY%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T170946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnKqxSn%2FBlGWL%2F11LrOci0Vge0fu845aTls0%2FZj%2FrS5QIhAIio%2FhHdpR%2BQY6YG8KiwgdjgFsmRMCz5EOMY0uIxPQDFKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyl7yAYmmvQrixcZ%2BEq3ANY9ubiteo%2BuuVelbuqu16eZVR2UDyJi11s8cg1wIQJXERZHKXHj1xBcedm0rCZB2dZI3McfAsChJXnxSgu%2FXPNchnEOcHXncZ%2FlfrgxbBLW5oY1Dssqq0E1xt6gt9eg9DSU261R%2FWXdUsoRc6UmtVrPz3sfRqTAk8th%2Ff7y08Uku5gnBMqQ9NBC4NEe9ybdwNibUcqgbmNF%2FhOHF9oTEuGmYp2t9hhdKrssPuBtDjqhYT5R4RYs5Bbpdt96Z3f09qcWWv26LTl%2BB3Xgfj7148%2BmrkqK2NC4sXh2FaJ%2FygdxriYCkaNIiZmjCJcMEuLd8MZ3wF9rL%2B%2FxSwlufMrKupR7hosfzyrGNgCZGaltvLP0fNPnNve9ybjAA7RVeiKgooZWJ6iDeEAUDW%2BJ5HkycgHw7zsggjVKL1U50%2F2VQo5rOCZ0%2Bx%2BmEcOQG41Nh8T%2FcRBMub0NZHSaPpXousZarjsDF2Ir3wajdn0RiBcs%2F5qwbe7IzgFdjQHd%2B%2FaZufzn04humpEKH1E9kR%2FGvA7o7ftN9zGLoCM9bGDnLjE%2FOZk657JrhaMvCeDk8ipy8W%2F37ZrUXltdM6E%2BXyCsC5cVuIPTywRgbZe7D07%2FPihrl0vE1p7PTLpNv%2BaJVcUOjDJgLXDBjqkAdJISO%2Bv1bNdWlX2cgzVyKY7LguWBLQQvEXW5phsSpjmERGAP3wFMmdFOjdBrh7Fb%2Fg8YlBtOcOPeasXl%2By4b%2FQHals8VMTjjcfsamHfXWuw8GfJtBquNkLhEtJ2B3YJZVBLmjGr0Sgb%2BX4iDiRAngWmdb2PymDabQQxUjq8%2BPdRLM6H5XW%2BCKkIe9sGjqE1PI8dFwcyIE7DYGrFHosMBa4cP%2BsI&X-Amz-Signature=0baa8e125073ac54dd1d06eba49cc006548494098b9fc1eaf683fc61da8718c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDOSOGWN%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T170940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGPvyg6K7QiM1dPavYvmWHaBgV0p%2BnX2aeRStJa5tsKVAiBRj4C0U9TxIBkX55rqNiOYtCbwt8VAd1lhGUGiLUPezyqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLv%2Fe3dwODdTsHoj%2FKtwD0pFTI89elvv1gsSGkohu6iua%2BIRfMvJb%2Fr8qcuRYwxqGnDa3T32XiT6JcF2NEKdQTUIhFqMBs3Y1uNpS4x%2FhkJB3Oh2%2FUnxTQnSW6RqIroJKh0PRvwZ8PIo6faSd%2BZkUVFNq617b3FT3GkqU593zrti%2BQmDA1W2n3gt509jlhFLf63nwiAaMqckVJQGCIr7mg4IiTMY0S6UWvBvwWql%2FvBWq7zhVaRsyqHCRmzPQqGUlQztXw0ovsco8PCe7n4AFpXYjCxz78NCmBjOfXcV66sFp2aOsSJgxr7viEdogO4SCLXD9RwvdwMZF6x0VnHsDhay3bJ8fSAgAHrfGrogL1XlHZHwr04NJw9hRkVe%2FamajR1uynVXeaKGnPywMXbgnfdVtSMY2%2F2aIeipZLZ6gNVfpJvM6ZMMxmZhrcHnxipYqpgC1HayrDmeyWYGAXm8LVmcg4QgzCWLEsEMtBBU2fM%2F6F3zJJr9adRM5E%2FaWMtoR3hziqAc58%2B9DEtdouwl%2B0DG2XPEUAwxHyctVOAK8UhJL47WQ6h6Q92iF8rd8038BY7a11eJizWQxdVtdv6QZjDNiQHfk5iSNe09XUUw3Gs8FjSxZM6aZuEoCSiit6giIHrrkg1XbmpNSkAYw9oC1wwY6pgFxJYRCBfc%2B8Ak0zY%2BaZZ9qXoFll9p3yKG5UMw7p1PridFwIS4P2nzKPTqb%2Bkzoni75lk8P0sLh6%2BndrvdQeIhXWaNXWy3noJrgbuoYdZZ4V4i29oIA0pQRMql8%2FmVqgJsUF2meI3AB70Ld23sjB7hd47UjJaRXThuKljycF0S2jnxO1rxumFj6Natn9aa%2FH%2BnumWESzmctM0hQI9M5UW0%2FMzC6JE3P&X-Amz-Signature=57bedba75feff20c23d195cfdaa57405a0b6cb76bf1d6863a6ad76c056fe7658&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
