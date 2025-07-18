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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIFLWZIT%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T051640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIBKDOhhuBjxvZwvmHjk%2FFi1b340KEpWNkKmHKoaAPVfWAiEArw9dfUah3xs1zVel2idu%2FawXGLYJtwijFyiXtzbEEE0qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDARSp7iW7m%2BKBbODbSrcAxJQGXD%2BV6ispOw0UyCBGcmDcsV43%2F0Ydf%2BkclI1bOLFvtQHiHgXj8HgYN8boGpdXxERnfJztyEjOYylEfsRK3%2Fc2qOYYeNL4TXoprACZ3lBnre%2FN463lowOf6yGOjArwkLqGCZs55sMgoGnnqcHMp7vxSyiM3bq2BOYrcS0YeqXqV3Le3PxIN78SNDJHIs%2BeN6KrkiaTdVWd04SvDlcafs%2FoBKvxqq3S7Lt4sA3YWLfTMmhWCByYhuw%2BkIHqICYeq2sgiNzRflyC2xU0cvCaMlZbP7wIebK5xTNBtz%2BLxl9dy6feFaqbjNKKmuum5Rzp%2BqaLKAmAn9X%2BzXZhSwUSjQX2%2BrqL2yWy0ePplVEMFE49HjjyFEbRU3W3ZoCB%2BhRClLeTuC%2FyruLYhvGp1n1v0eCBoeHV1Vh60wkqMT9fODP%2BDgO%2BNrmi906sO%2B6AW35OtdRj0g2pbsVhKqTEb438jRdqUKEgZN1PqzRcGHjDLmjL7m2QeL39teNT2WkyU3jCrOgiuDzJuUcHa9o2a86GE3a5uosvVhNfFFvQRYKllJmgwULDxgXq%2B1Me7JEMplGNWEkG1tmbDM9IpEXEGBBHVaehHFuKVbmV4gs0Dz1iyPZp344L2U%2FjiWWzU2pMOCv58MGOqUB6ZNf5bYekB6BIh5hoJPEeejZwCkSKID%2BVTx%2FKM8nHcL6wOubkoz8JucDKI5WjJJkTSb0WQKaQASuFhT6KdUu6xkyOAC8KNIm2LRV7HftCYnOELSrBjV6DMeQYXzZurRrKUtcurocEAF%2BsZDUJVCTE9g0H6c4mVFbmp0Eksp1geAmlc%2F31SC%2BhJetoVI4IgGlGe1vrPiYYPRmTqeoWyDbOOXfb%2F8R&X-Amz-Signature=f9e11d3e0b1bf58f5a29da3629f86f073f768fcd82178a8f42a4044728a287a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIFLWZIT%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T051640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIBKDOhhuBjxvZwvmHjk%2FFi1b340KEpWNkKmHKoaAPVfWAiEArw9dfUah3xs1zVel2idu%2FawXGLYJtwijFyiXtzbEEE0qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDARSp7iW7m%2BKBbODbSrcAxJQGXD%2BV6ispOw0UyCBGcmDcsV43%2F0Ydf%2BkclI1bOLFvtQHiHgXj8HgYN8boGpdXxERnfJztyEjOYylEfsRK3%2Fc2qOYYeNL4TXoprACZ3lBnre%2FN463lowOf6yGOjArwkLqGCZs55sMgoGnnqcHMp7vxSyiM3bq2BOYrcS0YeqXqV3Le3PxIN78SNDJHIs%2BeN6KrkiaTdVWd04SvDlcafs%2FoBKvxqq3S7Lt4sA3YWLfTMmhWCByYhuw%2BkIHqICYeq2sgiNzRflyC2xU0cvCaMlZbP7wIebK5xTNBtz%2BLxl9dy6feFaqbjNKKmuum5Rzp%2BqaLKAmAn9X%2BzXZhSwUSjQX2%2BrqL2yWy0ePplVEMFE49HjjyFEbRU3W3ZoCB%2BhRClLeTuC%2FyruLYhvGp1n1v0eCBoeHV1Vh60wkqMT9fODP%2BDgO%2BNrmi906sO%2B6AW35OtdRj0g2pbsVhKqTEb438jRdqUKEgZN1PqzRcGHjDLmjL7m2QeL39teNT2WkyU3jCrOgiuDzJuUcHa9o2a86GE3a5uosvVhNfFFvQRYKllJmgwULDxgXq%2B1Me7JEMplGNWEkG1tmbDM9IpEXEGBBHVaehHFuKVbmV4gs0Dz1iyPZp344L2U%2FjiWWzU2pMOCv58MGOqUB6ZNf5bYekB6BIh5hoJPEeejZwCkSKID%2BVTx%2FKM8nHcL6wOubkoz8JucDKI5WjJJkTSb0WQKaQASuFhT6KdUu6xkyOAC8KNIm2LRV7HftCYnOELSrBjV6DMeQYXzZurRrKUtcurocEAF%2BsZDUJVCTE9g0H6c4mVFbmp0Eksp1geAmlc%2F31SC%2BhJetoVI4IgGlGe1vrPiYYPRmTqeoWyDbOOXfb%2F8R&X-Amz-Signature=fc487ff807fadc0b58d07030cb575841db881f42568139e3ea194a861fd625e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIFLWZIT%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T051640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIBKDOhhuBjxvZwvmHjk%2FFi1b340KEpWNkKmHKoaAPVfWAiEArw9dfUah3xs1zVel2idu%2FawXGLYJtwijFyiXtzbEEE0qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDARSp7iW7m%2BKBbODbSrcAxJQGXD%2BV6ispOw0UyCBGcmDcsV43%2F0Ydf%2BkclI1bOLFvtQHiHgXj8HgYN8boGpdXxERnfJztyEjOYylEfsRK3%2Fc2qOYYeNL4TXoprACZ3lBnre%2FN463lowOf6yGOjArwkLqGCZs55sMgoGnnqcHMp7vxSyiM3bq2BOYrcS0YeqXqV3Le3PxIN78SNDJHIs%2BeN6KrkiaTdVWd04SvDlcafs%2FoBKvxqq3S7Lt4sA3YWLfTMmhWCByYhuw%2BkIHqICYeq2sgiNzRflyC2xU0cvCaMlZbP7wIebK5xTNBtz%2BLxl9dy6feFaqbjNKKmuum5Rzp%2BqaLKAmAn9X%2BzXZhSwUSjQX2%2BrqL2yWy0ePplVEMFE49HjjyFEbRU3W3ZoCB%2BhRClLeTuC%2FyruLYhvGp1n1v0eCBoeHV1Vh60wkqMT9fODP%2BDgO%2BNrmi906sO%2B6AW35OtdRj0g2pbsVhKqTEb438jRdqUKEgZN1PqzRcGHjDLmjL7m2QeL39teNT2WkyU3jCrOgiuDzJuUcHa9o2a86GE3a5uosvVhNfFFvQRYKllJmgwULDxgXq%2B1Me7JEMplGNWEkG1tmbDM9IpEXEGBBHVaehHFuKVbmV4gs0Dz1iyPZp344L2U%2FjiWWzU2pMOCv58MGOqUB6ZNf5bYekB6BIh5hoJPEeejZwCkSKID%2BVTx%2FKM8nHcL6wOubkoz8JucDKI5WjJJkTSb0WQKaQASuFhT6KdUu6xkyOAC8KNIm2LRV7HftCYnOELSrBjV6DMeQYXzZurRrKUtcurocEAF%2BsZDUJVCTE9g0H6c4mVFbmp0Eksp1geAmlc%2F31SC%2BhJetoVI4IgGlGe1vrPiYYPRmTqeoWyDbOOXfb%2F8R&X-Amz-Signature=385c262208b77de8864a243fa6384c0d2160ac4bc8b99105593b040b819ba282&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T2IAX7C%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T051644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDyqG%2FfY8XMs41KlcGj%2BbQZO3wGPLVqemUhkN63fy8FDgIgLmxUdMhp5VeqbUIZZFGVwbCMM5m3WIzn%2FuicX%2FNv0LwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJQGBEgQ1mwIe2HJyrcA3%2BGd7yBP%2BYC2GjrBwM7J8C4stwlIGrFpGHRkWWnPB1N7FlOQBv%2BYKjHYBG%2FAOBNyRoCVkVjX1Ii%2FudwZKflWKZYWfXWLZKl5myRiPadnUD7BJj2PqsVEIGgwzulCqfTdH73rfSZviHLyQ%2BS2hync8gH5BiUdWX%2Bh4fNJgHUhZ2dp1M7iyrnXVemgKVDJnKqjujro%2FNqoDT%2BhWK3u2f8UWt%2Bkp0iN53Y%2FlD3gpd%2B%2F4mp%2Blg2vAYOcACpEVlmA8iuu4XZjbblwfFW3WhdZHDI5XGevUG95e60jOFuCphiOYvgsj%2FfWbeNGPczFix69ESD8dBnI8lNsHo6lviHpamCVvT925hUKxevf9HHzeQYNKxk0fRA3aILl4sF0XkBrrfVVyqPw5qzCmkqsMxyzTEA%2FdYBafclTIDXHxfQnmEJYk4JK93KLA0WeedUWpP0uaITUFqqjXV2GpmxC2FwkRRm1Fq4btXEjIgTyx6ihYoPFiGjNW8X7Jx6Qa8opa778dUBzxYBw3VKrFnX3APTPco6yRsb5DKmD9prgY%2BMVl2FuGLobvEgmzv3JkQwudF9baIZ5eZwK2TbgJCtRYMfiZe2MfEJG1bnOYXt6u61F9i6xtUbVx2WiGIBcv1jdt7PMMyv58MGOqUBb%2FTGLmAtabL7%2BInEjhUJU3v5r%2F8MrcDDnFRZkqyVenJeyAuEVBmDZgRgAhFXzv8dP%2Bl3AgCnpcDo6%2BcwihhlXvwS5xfHOsqQl9VYaeYCyzsbpi84qaGiQzJaWgZ2HZ0R9QMIaHsC8uHR1vXUQEHekbQnpTdp%2FWiyuMhtajzJZ4U%2FhdZPIHK%2BAn%2B58i5ongmj97uQArQXbGcW0ASiZkFrYijq%2Fz8b&X-Amz-Signature=0e78141bb778ac16d1fb2c26775022be4ae071b159b5523f7a41fcb18e523609&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RKPTRP2%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T051644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIBttxrW9j0GdKpRRp1pYqsxlO0pY7d1GaROSsou7GdZfAiEA%2By9Dg0H3FTqPIA02hty3HlYvpUJzS7jSFh5B744Zc3kqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAN%2B0Ja%2B%2FneNRRO3oircAw7212XBk2rIw4jHTVbHh%2BeI5Ie3lnW0lVS6L0I9grB408GTbMrYVxN4OgKbQVaPag71MrqebltlVO8tCL3QHXE00hwxxZWq850lbIoX93zP%2BLZcBfjfWYu9nksZhqV18rMzSoymBA1B23mVt7eEY2qvSY3GqfnL4iLeP1LB6iqYvoNvnZxmjDEEe83jbxdORgKleC%2FQXdOtZLyKkb0oIwB5PEUAvytv98BmJuiLTZJbet%2BhYTDFKBB4wERbnXoMSObS2G%2BVwfLrmamf1OUssYX7qdIAAzh2FZXe%2F5E%2Fd3uL7GaWE4MHYwOisJX8EICp30sJLPZvfK3QvLGYhijk5XJsWR6Kp1AVILKQcQ%2F6478%2B0k9kDY6c%2FL1hj6iEbpp3Arjfz%2Foq5sX66hNrAzTksGEFssOypwubmmzOIQOm31vsPVOW%2Feyz9u1IOUIE1mbnQ1ooozE3cxj7lFFa%2Bl2JYVjlkbsBDGaRbsr6ZPR8W4Y7PvAjJ%2FzxJzb1luoDXD3BIU%2FxwUEEeY1kyX0B2yJLlPloCvVgty7BDcgNkX9b5W9M%2BrfIVfXjyIvikAQrDqvKa7vtJtTipMZPjueD2mwDYLY0ftKIMAUOy5p1qerggCuU%2BTvz7gp0MRcBvry5MMav58MGOqUBkd%2FurPhQMmsVt4H%2B9GEm8PH8OH5y6C35W5ebY%2FD54bd1eeTcB7%2BvtWclSUTD3eGGiDcJ38B7FnXhU8nmosSO4Fvz79oK7z3qmd1hh7J3HReY%2BgGpeLm1iA%2F2j0BAVFfOSILo5I6o0OO7%2FNgeh8z0H1kbBy1gmoGxPBM6MNI0R2DibLsrAibaCuF29vaNFRq0umQcNuksOyUXgyYPtaAaIe6PTFZC&X-Amz-Signature=b0c67912b872e26b3a4483db927eadeccd8ca7065275b7bccc9166cc5e612fbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIFLWZIT%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T051640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIBKDOhhuBjxvZwvmHjk%2FFi1b340KEpWNkKmHKoaAPVfWAiEArw9dfUah3xs1zVel2idu%2FawXGLYJtwijFyiXtzbEEE0qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDARSp7iW7m%2BKBbODbSrcAxJQGXD%2BV6ispOw0UyCBGcmDcsV43%2F0Ydf%2BkclI1bOLFvtQHiHgXj8HgYN8boGpdXxERnfJztyEjOYylEfsRK3%2Fc2qOYYeNL4TXoprACZ3lBnre%2FN463lowOf6yGOjArwkLqGCZs55sMgoGnnqcHMp7vxSyiM3bq2BOYrcS0YeqXqV3Le3PxIN78SNDJHIs%2BeN6KrkiaTdVWd04SvDlcafs%2FoBKvxqq3S7Lt4sA3YWLfTMmhWCByYhuw%2BkIHqICYeq2sgiNzRflyC2xU0cvCaMlZbP7wIebK5xTNBtz%2BLxl9dy6feFaqbjNKKmuum5Rzp%2BqaLKAmAn9X%2BzXZhSwUSjQX2%2BrqL2yWy0ePplVEMFE49HjjyFEbRU3W3ZoCB%2BhRClLeTuC%2FyruLYhvGp1n1v0eCBoeHV1Vh60wkqMT9fODP%2BDgO%2BNrmi906sO%2B6AW35OtdRj0g2pbsVhKqTEb438jRdqUKEgZN1PqzRcGHjDLmjL7m2QeL39teNT2WkyU3jCrOgiuDzJuUcHa9o2a86GE3a5uosvVhNfFFvQRYKllJmgwULDxgXq%2B1Me7JEMplGNWEkG1tmbDM9IpEXEGBBHVaehHFuKVbmV4gs0Dz1iyPZp344L2U%2FjiWWzU2pMOCv58MGOqUB6ZNf5bYekB6BIh5hoJPEeejZwCkSKID%2BVTx%2FKM8nHcL6wOubkoz8JucDKI5WjJJkTSb0WQKaQASuFhT6KdUu6xkyOAC8KNIm2LRV7HftCYnOELSrBjV6DMeQYXzZurRrKUtcurocEAF%2BsZDUJVCTE9g0H6c4mVFbmp0Eksp1geAmlc%2F31SC%2BhJetoVI4IgGlGe1vrPiYYPRmTqeoWyDbOOXfb%2F8R&X-Amz-Signature=c12f8acf8d579b898c969b8b836d23c6b8269afd771c6198cb96c5c1119c9bfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
