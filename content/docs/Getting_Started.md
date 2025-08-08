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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXZBCAQF%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDOW0WuQlcIzApYmmw1%2Bp44XQVcXuPf6jntREgcJLrPqAIhAPj7VyapwCqKz2%2BIjmUyb4zWbbFvdswHG0pflw5bcNpjKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoD%2F%2B1KJD5C71PQcsq3AOVfBfkx0YuL6CkDXvRHkxX%2BzmaOwzVKqZr%2F%2FDqzU24%2BuIeGtFlvQzIgMxAfVES4puRaazbQOB%2FbJUlZdzfQigt%2FvSXAEBYaLicpZ5rgD0PsaprtClDqw%2Bv31nwkK1TbdiknwnY3RLIvGrfOr2BqToorzBAGThY%2BIRRdgbc8r%2BdgI6vCbnjkXqIL5j3EC4aVVQIkzzt0s5tm23YX6RqHhjR9ufS8KThxLj0qUoE8319eDB6h6SuBUp2GLsStbFoVjaXxfq2hN9uYqPe6Aamcn7HKLxntBpuhgbUk69SAxqHxvZJeRaV5qJAD7qBnHeDOp9OzPN5gMNeoYHJrwxxZnPi65NwwuQhv13GLl87RS2f2SYLhml2Wmi%2F3dNzzJKuy7ISF5xyrw9fNteN%2FWfhTOx%2BCwlzplSaKaoT6ZJH73YiEte3owEAERvS8BKJ%2BKDynzy2kInom7KqxgQkDaZwd70832r7z6pyohsONswcZZTt7%2FxIOQ7NXf8zDae3YXHU9FwOK8888BuwSyXX9xWb3oQ5%2FsyUqKmuXlTpK0VTHc2A3925EU6S%2FeBNGNUMl1fnEXW2cyPJl8J2kYKqcwnXPUu7WaEAm3bhkLKps2mWmO3hvH4ADb8OAZ%2FQoJnxgzDiutnEBjqkAX1KXj6wT%2Fvx0Uos74gRKw%2FEOATphrIeVis%2BaNyy9EF0u0cHgnUyOLkaX4mO7E0%2BuPEDOJkaUreQ2c%2FtQjp0OXAYLwJDjpLgJeFdYMUYU4flKnKKq%2BXFibyjI%2FzGoTQWCaSmn8SvIUc9%2FFPUPKdj5KU%2BRTT%2BMBIUUNixx33oPMm4qkD%2FmVlTLiFqvUpHd0ygBNd4sxSLdDvJvsplfqtyojZJWP3R&X-Amz-Signature=5e9f4d6a16b62ce232a3780f29ff79b0fa70ca998e8346495d8d587479fdda8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXZBCAQF%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDOW0WuQlcIzApYmmw1%2Bp44XQVcXuPf6jntREgcJLrPqAIhAPj7VyapwCqKz2%2BIjmUyb4zWbbFvdswHG0pflw5bcNpjKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoD%2F%2B1KJD5C71PQcsq3AOVfBfkx0YuL6CkDXvRHkxX%2BzmaOwzVKqZr%2F%2FDqzU24%2BuIeGtFlvQzIgMxAfVES4puRaazbQOB%2FbJUlZdzfQigt%2FvSXAEBYaLicpZ5rgD0PsaprtClDqw%2Bv31nwkK1TbdiknwnY3RLIvGrfOr2BqToorzBAGThY%2BIRRdgbc8r%2BdgI6vCbnjkXqIL5j3EC4aVVQIkzzt0s5tm23YX6RqHhjR9ufS8KThxLj0qUoE8319eDB6h6SuBUp2GLsStbFoVjaXxfq2hN9uYqPe6Aamcn7HKLxntBpuhgbUk69SAxqHxvZJeRaV5qJAD7qBnHeDOp9OzPN5gMNeoYHJrwxxZnPi65NwwuQhv13GLl87RS2f2SYLhml2Wmi%2F3dNzzJKuy7ISF5xyrw9fNteN%2FWfhTOx%2BCwlzplSaKaoT6ZJH73YiEte3owEAERvS8BKJ%2BKDynzy2kInom7KqxgQkDaZwd70832r7z6pyohsONswcZZTt7%2FxIOQ7NXf8zDae3YXHU9FwOK8888BuwSyXX9xWb3oQ5%2FsyUqKmuXlTpK0VTHc2A3925EU6S%2FeBNGNUMl1fnEXW2cyPJl8J2kYKqcwnXPUu7WaEAm3bhkLKps2mWmO3hvH4ADb8OAZ%2FQoJnxgzDiutnEBjqkAX1KXj6wT%2Fvx0Uos74gRKw%2FEOATphrIeVis%2BaNyy9EF0u0cHgnUyOLkaX4mO7E0%2BuPEDOJkaUreQ2c%2FtQjp0OXAYLwJDjpLgJeFdYMUYU4flKnKKq%2BXFibyjI%2FzGoTQWCaSmn8SvIUc9%2FFPUPKdj5KU%2BRTT%2BMBIUUNixx33oPMm4qkD%2FmVlTLiFqvUpHd0ygBNd4sxSLdDvJvsplfqtyojZJWP3R&X-Amz-Signature=6b72e1d80561e70eb8429023471c6249d06dad64a4f3e4a138b8cf53c8c562b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXZBCAQF%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDOW0WuQlcIzApYmmw1%2Bp44XQVcXuPf6jntREgcJLrPqAIhAPj7VyapwCqKz2%2BIjmUyb4zWbbFvdswHG0pflw5bcNpjKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoD%2F%2B1KJD5C71PQcsq3AOVfBfkx0YuL6CkDXvRHkxX%2BzmaOwzVKqZr%2F%2FDqzU24%2BuIeGtFlvQzIgMxAfVES4puRaazbQOB%2FbJUlZdzfQigt%2FvSXAEBYaLicpZ5rgD0PsaprtClDqw%2Bv31nwkK1TbdiknwnY3RLIvGrfOr2BqToorzBAGThY%2BIRRdgbc8r%2BdgI6vCbnjkXqIL5j3EC4aVVQIkzzt0s5tm23YX6RqHhjR9ufS8KThxLj0qUoE8319eDB6h6SuBUp2GLsStbFoVjaXxfq2hN9uYqPe6Aamcn7HKLxntBpuhgbUk69SAxqHxvZJeRaV5qJAD7qBnHeDOp9OzPN5gMNeoYHJrwxxZnPi65NwwuQhv13GLl87RS2f2SYLhml2Wmi%2F3dNzzJKuy7ISF5xyrw9fNteN%2FWfhTOx%2BCwlzplSaKaoT6ZJH73YiEte3owEAERvS8BKJ%2BKDynzy2kInom7KqxgQkDaZwd70832r7z6pyohsONswcZZTt7%2FxIOQ7NXf8zDae3YXHU9FwOK8888BuwSyXX9xWb3oQ5%2FsyUqKmuXlTpK0VTHc2A3925EU6S%2FeBNGNUMl1fnEXW2cyPJl8J2kYKqcwnXPUu7WaEAm3bhkLKps2mWmO3hvH4ADb8OAZ%2FQoJnxgzDiutnEBjqkAX1KXj6wT%2Fvx0Uos74gRKw%2FEOATphrIeVis%2BaNyy9EF0u0cHgnUyOLkaX4mO7E0%2BuPEDOJkaUreQ2c%2FtQjp0OXAYLwJDjpLgJeFdYMUYU4flKnKKq%2BXFibyjI%2FzGoTQWCaSmn8SvIUc9%2FFPUPKdj5KU%2BRTT%2BMBIUUNixx33oPMm4qkD%2FmVlTLiFqvUpHd0ygBNd4sxSLdDvJvsplfqtyojZJWP3R&X-Amz-Signature=ed03ef53c1b6f3afcab7309b0e34b9f8f3944e7111eed2aaf1bf83b455679b94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIJHR72R%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCICx6fEhpdhbo33lSpngO6tPV4hwaKdZmp9PdmZfbg5K3AiEAzP%2F9f%2BReAYh873L3JyyzSHmyJQaoHrF8IBm9%2FJSSQmQqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhPkSZ37di1nAQHTircA9wS4O2A0643rpfvMli8NTS%2F8uJB770K%2BqijdIwz6eMeMA0AY8AV88%2FAspdfvSzqNtbpk7jk4mE5em3SpF%2BwnOdmyIMkyHWAl%2F0AMIYqUPhjFAfd63ocpLGhFtMK0QM5z2mDyJAsdJj5svQ1MHlB2FZJ0LqlLoEBaeuvXtD5XrEV6mOUOCNOpRJsjcpRk5YKEQtrLW5t2%2FrKv0Tqih2U3vRhGKaO6FQwo9sVZHX279gS7sDgFeLPlb7s8dR%2BaVifPXf8yRJWJjwsWD%2FfLmeYelxF7pg%2Fs2MyIpxz7h1txTTeaT7ROD9SgWnj0FjWQPWC6LHbIPtRi8bNrGCThzUboaqE6%2BZR1t2syyhRWpvBqRCqO3NGkUeI%2BOOb3%2BL7t3zRqi6tc0PBU7Q7lKeoMio1Lli6NbQgUhN7CoxfVaZJEbGysqZlcuY3o%2FcDc9qjsJstg4EEVrMJ66PbK6CneMm79ANsQi96gWVxylEsryBovhMOWcJa99MRt4z0H7%2F4hAqUsCQXBBBQy8Fzlfr2%2Bckaw%2F8F2gUrJ9DGStUXaib6UkYnPccSJSZDe9idxN5ypFGpVBdBvF1ZzrIVptjuZ6nBqREY%2BGtWnwBgYz6pzMvTaUzGsz9zs1bBEerCKRcNMKi72cQGOqUBV3gsPo1Y8SqaDS%2FMZBdnwepfPix7QLH62ztSXiO%2BOwUpusVqa%2BA7RuDpB9OjAI4MOf1Z%2FXV2fSJWKh670hzm7l42LatLz77eFyc3dw7hmqHFdVdwcmPxYKS7c8vPCCEtHhP0JWXIsj6yFOYVPAtuc3U5NpW4Q4LYMqP1lweay%2BF0HNAzctqT7GxtNQTGHTVoQHBuO0A%2BD5qA0F5hIBXf1yg%2Fn7ph&X-Amz-Signature=2512583a17090c6e3cdd26b3aa414bd3cc190b2d1077920fb28c381f78fcf739&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH7QAE5V%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDgPOuHVnClNJusYavqnd13IEiSBLnglGxyqICubHwCzwIgJsJfjR1AI6TKkTE1tdLhDSMskL1l24Nn7HZXDkEFaLUqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAEgChgpg%2FHTJ4uuCrcA00Q9dURn4mjBC6hDDThKt1saw42DulhopwbP8fu3NhRYQGNM5G%2FV0FsnCvV3C3vVrfAW5zvTi0vJUU%2Fx1HcEUj1Xa7h5H5RT5yN0ghSn6bbs7KQ0fb5A7E7h23lRzb82SiY40%2B2tXpMhCc9xb3LEngoGmfANQo%2FD6eWbUW%2BfdhDT49LNQ%2B0qeDBTsI9YMJMWJ2vlLL01tnNiFtmrqBza2Qkiv0A8zVxNFrN10XqRqPSBSdXnf4A8OMpov690Av1Hhx7rqWnV1WtO1rCHH03R1B1K%2FiQHvcr1uNQrp1Dspg3RfDCswAEP%2B62dewEd%2F1TG%2FciSS9c10uszyTukmNs5lyqZTl%2BxmZBdCp7jRvmqj8lb%2FheqUB3KrZHl2ey7A2ZQCqRGXuugTw6yNBoh9neF4Dqx5iYBzOiBHpPhhpXzHrBkWoQvM%2FHY6GomNJVFRI26VFSCXgOpagWLkLYBgn7ADv46CxsRMUZQCSfywO3uoGWCum6RiEz2OPDg2jYrtS%2BUOaZFJMqcg3Yyuo3sygEfnOEMdP8VLwLuIidQNUJAhH7SbP5%2FN2eRKHBFYFjRV0WQGl2BZ3PlAr9yo3VxW%2Fue0dbFkzVvopq2tT4mGyu94sUwHSNoFhLkSZodrQNMJ272cQGOqUB7CsF9y2OIX9q3oAIGNAvH5bXH9%2FeF9caQ2xTlAqLb3uaRdUxZpdqMKrfS7%2BJBhbnhzyduOaOh0flCYOuX%2Bzam5V1rhLw50AzI8FWoMTcdCtTDStfu7tzz4iIh5chDYHdLMyuuUuwkTERBvI8r0f7LxXZ%2BE2UmXb6C86x4Hv2aXtnkKi0z%2BYDgULu7U3byMPPxjtnODd3TvnBzT7sxwui5CRKjh2i&X-Amz-Signature=3157f4c6c37e967d13732b2a77ad0ea8539cb23dc0b60933e0ba277311dcc0d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXZBCAQF%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDOW0WuQlcIzApYmmw1%2Bp44XQVcXuPf6jntREgcJLrPqAIhAPj7VyapwCqKz2%2BIjmUyb4zWbbFvdswHG0pflw5bcNpjKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoD%2F%2B1KJD5C71PQcsq3AOVfBfkx0YuL6CkDXvRHkxX%2BzmaOwzVKqZr%2F%2FDqzU24%2BuIeGtFlvQzIgMxAfVES4puRaazbQOB%2FbJUlZdzfQigt%2FvSXAEBYaLicpZ5rgD0PsaprtClDqw%2Bv31nwkK1TbdiknwnY3RLIvGrfOr2BqToorzBAGThY%2BIRRdgbc8r%2BdgI6vCbnjkXqIL5j3EC4aVVQIkzzt0s5tm23YX6RqHhjR9ufS8KThxLj0qUoE8319eDB6h6SuBUp2GLsStbFoVjaXxfq2hN9uYqPe6Aamcn7HKLxntBpuhgbUk69SAxqHxvZJeRaV5qJAD7qBnHeDOp9OzPN5gMNeoYHJrwxxZnPi65NwwuQhv13GLl87RS2f2SYLhml2Wmi%2F3dNzzJKuy7ISF5xyrw9fNteN%2FWfhTOx%2BCwlzplSaKaoT6ZJH73YiEte3owEAERvS8BKJ%2BKDynzy2kInom7KqxgQkDaZwd70832r7z6pyohsONswcZZTt7%2FxIOQ7NXf8zDae3YXHU9FwOK8888BuwSyXX9xWb3oQ5%2FsyUqKmuXlTpK0VTHc2A3925EU6S%2FeBNGNUMl1fnEXW2cyPJl8J2kYKqcwnXPUu7WaEAm3bhkLKps2mWmO3hvH4ADb8OAZ%2FQoJnxgzDiutnEBjqkAX1KXj6wT%2Fvx0Uos74gRKw%2FEOATphrIeVis%2BaNyy9EF0u0cHgnUyOLkaX4mO7E0%2BuPEDOJkaUreQ2c%2FtQjp0OXAYLwJDjpLgJeFdYMUYU4flKnKKq%2BXFibyjI%2FzGoTQWCaSmn8SvIUc9%2FFPUPKdj5KU%2BRTT%2BMBIUUNixx33oPMm4qkD%2FmVlTLiFqvUpHd0ygBNd4sxSLdDvJvsplfqtyojZJWP3R&X-Amz-Signature=eb7a9c87d229530fea28f85e715a1191d9d19ec5024e8f7b8488b7759e2163dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
