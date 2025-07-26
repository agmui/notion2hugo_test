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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUG5JZ2Q%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDioirw5D%2FwGsovJQ1xv3au%2FtonPQd14zvJlSpjoSgHAAIge0zfGhucpyJZ%2FSXBsPc5yA%2FzLzbWCcdrDiQ1Gj4GapUq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDN8gUTOZ1zGCxWmGRCrcA7XkbTV8mqPJqOmDi1Rozkm5zvaOIYzYGZCfJWrD0mw%2FJXmeqse%2F%2Fa7HNlz2I4UMjkkgYiIJkVLP2pApKC3B7vDUYyPXpbVwsoF7Fv5srvFlEMPcTVgt6x66uOPFqoBXQSRN4aTuEa2%2F1nRpz3JhXmUILlJnmjjN0ugKt6HCdF1zrFkCp8ku4YYaJAhovx%2BDmkh0xRWu5tYxE%2FL5fCXxNldn9yvJeXFanq6zm%2FMLbEZEppEruzuhpjVrxaa0tr9jPTSf6LFEAIbiVdOO%2B6AQX7eRvRucNKqWxWFM%2B240Ry7b%2FfkKhLnlBsvL114oyEKSRa%2B5R5ShITeWs4zPAD6BVIqT%2FbfTrJ8ycIjw871OdPB0RT%2Fw660iJtEnDIP2xy%2FK7OtOWEJz9vagNbDZ1HEVIpjwxEgYc5mr58rzD%2FL4TockYjRlnJo%2Bi93anMtg1kg%2Bn01nAJGMt3Ti4CSIblNzet%2F1zQ8ieDk0aC7%2FFZF3cvuFUp020adS31CkbDc3t03d2tiK9QLzUyWAn9JIdQ9E7rOMFjw0H3wvQOVeG%2FiAL9SNaQz%2FBQXvo1Vflp37EupgGo4tC8G6ToPZbD1i5iV7WS5%2F2JH%2FdhF9a%2BuoPlkrTERh426rSqASCRWRtWGFMM%2BrksQGOqUBTtXIkTv1m3OMe8NMCGwPZ8tU0ZMNUSYrfSOX%2F7SulThzXHt16%2Fj2r%2BHQq3lebEcGbU%2F6MMzyXxIbY3G2B4Tqqu2QZcxKXtN09s6CFl%2BsqDK3oCHFewLVKcFhe210X3uxRokA5tuOJyh%2B195asglKKq6OddDTwe1nSTRf%2BIaTNX%2BWkznXP8sZ8r9EPIJ9VSOtXdT52JLxduRoyibWDThkgEOUqTu0&X-Amz-Signature=b81087359eb932011893299cb7e25a45e62f45f4b3c451e5be52ee005834d62e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUG5JZ2Q%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDioirw5D%2FwGsovJQ1xv3au%2FtonPQd14zvJlSpjoSgHAAIge0zfGhucpyJZ%2FSXBsPc5yA%2FzLzbWCcdrDiQ1Gj4GapUq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDN8gUTOZ1zGCxWmGRCrcA7XkbTV8mqPJqOmDi1Rozkm5zvaOIYzYGZCfJWrD0mw%2FJXmeqse%2F%2Fa7HNlz2I4UMjkkgYiIJkVLP2pApKC3B7vDUYyPXpbVwsoF7Fv5srvFlEMPcTVgt6x66uOPFqoBXQSRN4aTuEa2%2F1nRpz3JhXmUILlJnmjjN0ugKt6HCdF1zrFkCp8ku4YYaJAhovx%2BDmkh0xRWu5tYxE%2FL5fCXxNldn9yvJeXFanq6zm%2FMLbEZEppEruzuhpjVrxaa0tr9jPTSf6LFEAIbiVdOO%2B6AQX7eRvRucNKqWxWFM%2B240Ry7b%2FfkKhLnlBsvL114oyEKSRa%2B5R5ShITeWs4zPAD6BVIqT%2FbfTrJ8ycIjw871OdPB0RT%2Fw660iJtEnDIP2xy%2FK7OtOWEJz9vagNbDZ1HEVIpjwxEgYc5mr58rzD%2FL4TockYjRlnJo%2Bi93anMtg1kg%2Bn01nAJGMt3Ti4CSIblNzet%2F1zQ8ieDk0aC7%2FFZF3cvuFUp020adS31CkbDc3t03d2tiK9QLzUyWAn9JIdQ9E7rOMFjw0H3wvQOVeG%2FiAL9SNaQz%2FBQXvo1Vflp37EupgGo4tC8G6ToPZbD1i5iV7WS5%2F2JH%2FdhF9a%2BuoPlkrTERh426rSqASCRWRtWGFMM%2BrksQGOqUBTtXIkTv1m3OMe8NMCGwPZ8tU0ZMNUSYrfSOX%2F7SulThzXHt16%2Fj2r%2BHQq3lebEcGbU%2F6MMzyXxIbY3G2B4Tqqu2QZcxKXtN09s6CFl%2BsqDK3oCHFewLVKcFhe210X3uxRokA5tuOJyh%2B195asglKKq6OddDTwe1nSTRf%2BIaTNX%2BWkznXP8sZ8r9EPIJ9VSOtXdT52JLxduRoyibWDThkgEOUqTu0&X-Amz-Signature=4573944e840e35a75dd64653df4ffc9b37544cd4fb82bc6bbc3fb3c09b89e5e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUG5JZ2Q%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDioirw5D%2FwGsovJQ1xv3au%2FtonPQd14zvJlSpjoSgHAAIge0zfGhucpyJZ%2FSXBsPc5yA%2FzLzbWCcdrDiQ1Gj4GapUq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDN8gUTOZ1zGCxWmGRCrcA7XkbTV8mqPJqOmDi1Rozkm5zvaOIYzYGZCfJWrD0mw%2FJXmeqse%2F%2Fa7HNlz2I4UMjkkgYiIJkVLP2pApKC3B7vDUYyPXpbVwsoF7Fv5srvFlEMPcTVgt6x66uOPFqoBXQSRN4aTuEa2%2F1nRpz3JhXmUILlJnmjjN0ugKt6HCdF1zrFkCp8ku4YYaJAhovx%2BDmkh0xRWu5tYxE%2FL5fCXxNldn9yvJeXFanq6zm%2FMLbEZEppEruzuhpjVrxaa0tr9jPTSf6LFEAIbiVdOO%2B6AQX7eRvRucNKqWxWFM%2B240Ry7b%2FfkKhLnlBsvL114oyEKSRa%2B5R5ShITeWs4zPAD6BVIqT%2FbfTrJ8ycIjw871OdPB0RT%2Fw660iJtEnDIP2xy%2FK7OtOWEJz9vagNbDZ1HEVIpjwxEgYc5mr58rzD%2FL4TockYjRlnJo%2Bi93anMtg1kg%2Bn01nAJGMt3Ti4CSIblNzet%2F1zQ8ieDk0aC7%2FFZF3cvuFUp020adS31CkbDc3t03d2tiK9QLzUyWAn9JIdQ9E7rOMFjw0H3wvQOVeG%2FiAL9SNaQz%2FBQXvo1Vflp37EupgGo4tC8G6ToPZbD1i5iV7WS5%2F2JH%2FdhF9a%2BuoPlkrTERh426rSqASCRWRtWGFMM%2BrksQGOqUBTtXIkTv1m3OMe8NMCGwPZ8tU0ZMNUSYrfSOX%2F7SulThzXHt16%2Fj2r%2BHQq3lebEcGbU%2F6MMzyXxIbY3G2B4Tqqu2QZcxKXtN09s6CFl%2BsqDK3oCHFewLVKcFhe210X3uxRokA5tuOJyh%2B195asglKKq6OddDTwe1nSTRf%2BIaTNX%2BWkznXP8sZ8r9EPIJ9VSOtXdT52JLxduRoyibWDThkgEOUqTu0&X-Amz-Signature=2e72e18a71ecf9f980cde1f6412f5d4ec5403aefa1937e47bfe5b9eaac884373&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FUTF7ZC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDpPC17HQeTYackCUVCZBwvj0Lw84G3uAg8cYpCYxm%2BSwIgHLPctgPrgvbIcKZfG6t7Ir%2FhT9GHmxKeFkTDf60Ll48q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDN3lnGiKNqgzhIXwXCrcA94o68FzbaA%2Bd9HHE4%2FFp9fPbZGqvw8dFYn8rAvKwEn%2Bzezt3oJaIZ5iaY3vLT3rxDqN3ZfaDLYDUb5JCaP%2BZQJ3yx0fuIVpwqkTOt%2FbJxqXYNWwQA7PdSn0KQlTtNUx5GT3eSLu0rpOBin90s0wUnUOH5Ws1qUerEuZT%2BwEbUxGyIeELUlLuX8X3A4rOMOWHkou6AusNM5HYKXbX7zROgcNfgpuj0StVgceZaRygSrH3r2eLSNheXAEMOWwE3IoKiL9%2Foj%2BJny5cBTeYmXUGLAqcC8%2F0CnfsV0Kr03hUUdAaEdEWjWmA%2FVozLXWTFuiN8KI4fnhPMeVDGrZw05iKjsqrCqUvpOsf5ordLfUZVqLjFAN9IgI9UkyZ9z4y8b5NsM7aYTM5r8djihV4wYZW5kDOMIyRs4VNBK2v6Uxyw%2B8PpU2Dl6luL5yjDuQgLi2TQ7I6eJ9a3qNHDifP4NV6AOPg5yaaZQa10hiOZYJ2HxW4H%2FwZEFFET%2Fi77Z8EWRgNUSucSclP0e2x3%2FGAxhrNvYOU5QU1NsMfu4hhHU66FfFK1czLWIosAtSbXOesEkxzqv7cl6rlVOR08mdjxIwu8qhye4X4%2BtVjMGeu9NUKsR%2BFz3mWMOJpVaS7c1WMJSrksQGOqUBlgPJFl1WSDfuQvlg%2FuCHlg%2FGfEkO9gnWV7ZUxIdwby%2FgUZMXEcT29fsBgpx5yJwC%2BDILInNIxDhUdakMTOommStwC7HMXY9xbSm7wtIyjb1iizNsH8OMMPPBgqq9P%2FWQwFr7iYe6GlcBPd%2FtEaE0F9CTbQxvV2RU4gl8FCZHHpFPyCUzQr6hCXE%2Bc672SUE4GZnIgmsFM27PelmrdM8Z3ZOtq%2FAY&X-Amz-Signature=50dbe6d6a17657c8f2614a7eedb7df2bb3fd7ef7885de3f8c43ef6c7bde96ef3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF2FANTN%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIBNj0exanNW72UN6%2Fjw9MnacOOm6%2FTZeg1%2FNDyViynM1AiEAqIU3MOnchGJY9K6vGZTy4neeIMBBq%2F5Ur3oHoyojeGYq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDBKuttwM%2FCq2%2BCpIRircA%2FN95PyLOqr4AJCHnyoSVGRLP%2FdltA4yXEElK0nnD6uHXzv9sT3h9A6yiySSxZjwjxm5Vs5eqwYlZCff%2B%2BAdlfxZ5NTyKpI7uft7u5mT0xmf237FV%2FCvXb0nK1tSPv8lNE2bm%2FPjOLty32L7vC8DwZ2SI2RqNK5ncxeWVG0bjRHrIUBBU0E%2FYwom5K%2BA%2FafspqklEcirwm4DG12Xf5xCzP%2BcWRDvRuP5R6MgD1VqEf8nolxy%2BYruCcxXJODyTsO3gknfJjzqSTNyG09a%2BdoXFVoxmyhDSWjpiG7xRPTpMKvgEJQ2pdwId35KRwoE%2BAoWyY1AEgwti8SlEGD2mNov9I3AW8ETPxCUCqXFHdwo0KwMrdm8XVjDuicQR%2Baq98qc9mnbY7RDDv%2FRkq%2F7Owv04S91MhWi12%2FdYYzgk5Ovt2Vgy3hlRAXt19ozb5KFlZJ%2F0fjGZ1KcvaUn7emcobO1pLQHCkdZWnMLgBGADXMO0I6y%2FTkEXzvFHODpHwOPob7Jq0D6IaOtKAgcBXlrjEi5iphGnPuZ1iwYdLuK09X0ULjYUYsngF4AhLGR1ztpf5qOV%2FtTFXbh8Xg5QYEpf9i3iUgiQwbvnr9s5FTVCXNF04dU464rVzxSgZhbs%2FJfMMSrksQGOqUBGWFUQq1WYfS9%2BS%2F1Fq3%2BE%2FnH%2BR6EBJrndbPZ9oxJLdqEQfUwrR903YhSMD9NcZsJnxxCL3eI1FCUWB7QYdC33X9ILliwQmrdVoxrGO5tDcc5AjnSYT6%2BhiVLw328I261uBrx1f1x9iDmMHhlw19%2Fy24TqKd1%2FgaBA38vVRw6PKB0nYmO8EFH0k3osvOmCdjdSTU9qVMC4bwLcTAjtAzgoto16m64&X-Amz-Signature=18b4fd01c586d2ad23a96173e020734a163c52f3601990384fb9716eda1cb0dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUG5JZ2Q%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDioirw5D%2FwGsovJQ1xv3au%2FtonPQd14zvJlSpjoSgHAAIge0zfGhucpyJZ%2FSXBsPc5yA%2FzLzbWCcdrDiQ1Gj4GapUq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDN8gUTOZ1zGCxWmGRCrcA7XkbTV8mqPJqOmDi1Rozkm5zvaOIYzYGZCfJWrD0mw%2FJXmeqse%2F%2Fa7HNlz2I4UMjkkgYiIJkVLP2pApKC3B7vDUYyPXpbVwsoF7Fv5srvFlEMPcTVgt6x66uOPFqoBXQSRN4aTuEa2%2F1nRpz3JhXmUILlJnmjjN0ugKt6HCdF1zrFkCp8ku4YYaJAhovx%2BDmkh0xRWu5tYxE%2FL5fCXxNldn9yvJeXFanq6zm%2FMLbEZEppEruzuhpjVrxaa0tr9jPTSf6LFEAIbiVdOO%2B6AQX7eRvRucNKqWxWFM%2B240Ry7b%2FfkKhLnlBsvL114oyEKSRa%2B5R5ShITeWs4zPAD6BVIqT%2FbfTrJ8ycIjw871OdPB0RT%2Fw660iJtEnDIP2xy%2FK7OtOWEJz9vagNbDZ1HEVIpjwxEgYc5mr58rzD%2FL4TockYjRlnJo%2Bi93anMtg1kg%2Bn01nAJGMt3Ti4CSIblNzet%2F1zQ8ieDk0aC7%2FFZF3cvuFUp020adS31CkbDc3t03d2tiK9QLzUyWAn9JIdQ9E7rOMFjw0H3wvQOVeG%2FiAL9SNaQz%2FBQXvo1Vflp37EupgGo4tC8G6ToPZbD1i5iV7WS5%2F2JH%2FdhF9a%2BuoPlkrTERh426rSqASCRWRtWGFMM%2BrksQGOqUBTtXIkTv1m3OMe8NMCGwPZ8tU0ZMNUSYrfSOX%2F7SulThzXHt16%2Fj2r%2BHQq3lebEcGbU%2F6MMzyXxIbY3G2B4Tqqu2QZcxKXtN09s6CFl%2BsqDK3oCHFewLVKcFhe210X3uxRokA5tuOJyh%2B195asglKKq6OddDTwe1nSTRf%2BIaTNX%2BWkznXP8sZ8r9EPIJ9VSOtXdT52JLxduRoyibWDThkgEOUqTu0&X-Amz-Signature=b8dbc21e97d8536c15d3a35b95d653da114b797185d611aa73feb422f4f57258&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
