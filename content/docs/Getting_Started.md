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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B6DE57H%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T132413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCID32trV107z%2FQF5naF%2BZNnfEPYyLGnt7iU21A4ATFCykAiBPfVZGHRss3xLvESrQ1UYKUs7WQ%2F5%2BdWCMRZ9VYroTRSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd7d3uq0mLtzurwOLKtwDkrkx55q2SqNE%2FeZwJdGRY%2BI9pTfM4vwUW00H3SF1imvRfUw8%2BLzGUbhIRZ3i6r9OXIbKYpFeOcLge61FuAmj83fIWeeLfKJGJWgGOUHFzdK3CFsLAFBgQshFt6S0lk0rYcgpUocID9obTMcnkkwNZUJvbSXiwStWEVBLPlD9mXeX0IMC4Y5zPFgJvn1vK11h1HzuKHiLUcD%2BrQUvRljdH3NHdXxTGDc6eqjD%2FHms1dr0D120keY5OvX5gFcqODCccFI44%2Bn5dpGl0r148HoEhFFsb23ZnJ6mqNXmWZYVisVTjmILqmdZradqAdj9DNmYh7d32fJv5cOqWbcWZxfPANo6zR1Ywulq5NCxy7Sl8CAvLUbGgsS7ItVrXnXpriBnUwMWgWLNK2dRXYpfLb%2FKEsLXiG1QokQuOZPvAWgXlOHEWPpS7PBSiwlmNvgqSXWzf8xbF1viN9jvTmlfMEeOx46LmFsCaIftiJ7RbPS3SmVceKV0O1JXdm05jNhv54GCBk87pqZjpjWxHc1V6xyM578lYW%2Fi3VkI8g4dl8ULx0YrtCP2BIKlSai0xN3JsZXWvFrHFCfYWfH7%2BMBrVOj0%2FIdfCsElAiAmxmPyBJOtBlBSCIuSUD13tFSrP0Aw5beHwQY6pgFscXhjrFVAFIZRb3ecSEIbU%2FkTjNaBiv55Bmb%2FB6Td2IXNG3DiRSdVwHEqRASBT%2FOYTJ36jRGJyXaC358Lt1gsmqZ27VQcMQnqAyXa6g3cppfSyAzs%2BjjGo3M7DcPtSuGWLjOhYNhb8UpbasPSF7tXnP6dP7IpeK2pYIe3u9mmjiaH1xUJIyN%2B0FMKU29DD6NcDs3WXsAaE5UZ3MwLzn2RFesE2IzJ&X-Amz-Signature=a6750e0b5f448422803789b7291cac921972fe6ffe4c37585b69a36bfcae0a0e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B6DE57H%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T132413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCID32trV107z%2FQF5naF%2BZNnfEPYyLGnt7iU21A4ATFCykAiBPfVZGHRss3xLvESrQ1UYKUs7WQ%2F5%2BdWCMRZ9VYroTRSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd7d3uq0mLtzurwOLKtwDkrkx55q2SqNE%2FeZwJdGRY%2BI9pTfM4vwUW00H3SF1imvRfUw8%2BLzGUbhIRZ3i6r9OXIbKYpFeOcLge61FuAmj83fIWeeLfKJGJWgGOUHFzdK3CFsLAFBgQshFt6S0lk0rYcgpUocID9obTMcnkkwNZUJvbSXiwStWEVBLPlD9mXeX0IMC4Y5zPFgJvn1vK11h1HzuKHiLUcD%2BrQUvRljdH3NHdXxTGDc6eqjD%2FHms1dr0D120keY5OvX5gFcqODCccFI44%2Bn5dpGl0r148HoEhFFsb23ZnJ6mqNXmWZYVisVTjmILqmdZradqAdj9DNmYh7d32fJv5cOqWbcWZxfPANo6zR1Ywulq5NCxy7Sl8CAvLUbGgsS7ItVrXnXpriBnUwMWgWLNK2dRXYpfLb%2FKEsLXiG1QokQuOZPvAWgXlOHEWPpS7PBSiwlmNvgqSXWzf8xbF1viN9jvTmlfMEeOx46LmFsCaIftiJ7RbPS3SmVceKV0O1JXdm05jNhv54GCBk87pqZjpjWxHc1V6xyM578lYW%2Fi3VkI8g4dl8ULx0YrtCP2BIKlSai0xN3JsZXWvFrHFCfYWfH7%2BMBrVOj0%2FIdfCsElAiAmxmPyBJOtBlBSCIuSUD13tFSrP0Aw5beHwQY6pgFscXhjrFVAFIZRb3ecSEIbU%2FkTjNaBiv55Bmb%2FB6Td2IXNG3DiRSdVwHEqRASBT%2FOYTJ36jRGJyXaC358Lt1gsmqZ27VQcMQnqAyXa6g3cppfSyAzs%2BjjGo3M7DcPtSuGWLjOhYNhb8UpbasPSF7tXnP6dP7IpeK2pYIe3u9mmjiaH1xUJIyN%2B0FMKU29DD6NcDs3WXsAaE5UZ3MwLzn2RFesE2IzJ&X-Amz-Signature=d7a2248f706c4bd6ce5b85fa1f5d67a555ba8e0ab73c6ee20c33e5f57dc85d8b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B6DE57H%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T132413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCID32trV107z%2FQF5naF%2BZNnfEPYyLGnt7iU21A4ATFCykAiBPfVZGHRss3xLvESrQ1UYKUs7WQ%2F5%2BdWCMRZ9VYroTRSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd7d3uq0mLtzurwOLKtwDkrkx55q2SqNE%2FeZwJdGRY%2BI9pTfM4vwUW00H3SF1imvRfUw8%2BLzGUbhIRZ3i6r9OXIbKYpFeOcLge61FuAmj83fIWeeLfKJGJWgGOUHFzdK3CFsLAFBgQshFt6S0lk0rYcgpUocID9obTMcnkkwNZUJvbSXiwStWEVBLPlD9mXeX0IMC4Y5zPFgJvn1vK11h1HzuKHiLUcD%2BrQUvRljdH3NHdXxTGDc6eqjD%2FHms1dr0D120keY5OvX5gFcqODCccFI44%2Bn5dpGl0r148HoEhFFsb23ZnJ6mqNXmWZYVisVTjmILqmdZradqAdj9DNmYh7d32fJv5cOqWbcWZxfPANo6zR1Ywulq5NCxy7Sl8CAvLUbGgsS7ItVrXnXpriBnUwMWgWLNK2dRXYpfLb%2FKEsLXiG1QokQuOZPvAWgXlOHEWPpS7PBSiwlmNvgqSXWzf8xbF1viN9jvTmlfMEeOx46LmFsCaIftiJ7RbPS3SmVceKV0O1JXdm05jNhv54GCBk87pqZjpjWxHc1V6xyM578lYW%2Fi3VkI8g4dl8ULx0YrtCP2BIKlSai0xN3JsZXWvFrHFCfYWfH7%2BMBrVOj0%2FIdfCsElAiAmxmPyBJOtBlBSCIuSUD13tFSrP0Aw5beHwQY6pgFscXhjrFVAFIZRb3ecSEIbU%2FkTjNaBiv55Bmb%2FB6Td2IXNG3DiRSdVwHEqRASBT%2FOYTJ36jRGJyXaC358Lt1gsmqZ27VQcMQnqAyXa6g3cppfSyAzs%2BjjGo3M7DcPtSuGWLjOhYNhb8UpbasPSF7tXnP6dP7IpeK2pYIe3u9mmjiaH1xUJIyN%2B0FMKU29DD6NcDs3WXsAaE5UZ3MwLzn2RFesE2IzJ&X-Amz-Signature=9a474edaaa0726ccbca2ee86b365fe58f6bd1926e53555dd739e7c9d0ac074b8&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQMVAVJG%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T132415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDgn5JpW6HXupeNw%2F2brWfXXN5%2BtNMZb4NWoOstOLXvJAIgapggql7T4iiRhRTCJbkuFZTiYGzHFccisnjJL6OJ5UEqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD60ycoWNqLdTWiW%2FCrcAw%2Fv9P1t3kR8ScgG6J8r7RO4mePBR97B%2BwAHKgxWooFwmWx9WQhLY3IQgRLK29jcvCmjfWvdYs3%2FytFnZron7mZE0ZGGdpY%2FMXN%2BMyhQJ9RIw8D%2FV%2BXWeuuIND679E2DiK0Nq%2FP8HyugKtCruXygY4RsQK1VpPGExtgTbsmZFola15K5Xs21QD%2FwPuptYN8OMrig9AZ5FSFM7XqJ8jZFlo3o%2FdnJNEc6hb%2FZQW%2BFmTme2GDrAEz%2BHZnQ8RPvbqeuetyn%2FTClW66UOUDKEeZIdIK0KXnqsTYptA8nyY2knfQdSttqXSBEwv6Xllwi2fbO5XTvKbc6QPqwvIrTHeF0DGj4qAAGFUKHgzPTI7DQZRQNU7tNjRZ0rhYjpmju16fI0SLB4gJR0v%2FPeBYO2toXt7E53Mvky1HlXzim0jOQ5vaipn02lrpma19YRcthUpv8g2c1lQQjwBuiMZwmG0PycBN8KZLDavtyIMof%2F5p3LMk5653fqPWeFD%2BTvF8TtDRzTznmJ5kAtuV0hMx2kupB0ee%2BwdDpqixPfhOavuT8EsE4kdAvDoZmPyhEqFyxZo9WiBcJMWBfiNqVXc0brh973xDJyLyo8OrRLAF04PPDrtMSvCIM6uSwY3ccavYEML23h8EGOqUBcbmwJcETdBCxtLCXy0knid%2BifIgYBTJlnP7%2BxJMGUlUooJDwysChDoWEGSrsckrsy3eea%2BsEQyB1BGjS2yNEImqPjpnP7054dQiMw3UZjnKYQs5P9Xf9tVrpLS9LJFKbcpOyw%2Fb3c%2BZlYizXEQIt6DrZH0MCLP%2FIQac02JexEjMac3b4XVpAj4mu%2FI1Y%2BP4%2FgXYrfyZAyTFS903d9tcgQnBsQBBg&X-Amz-Signature=e2d6ae4913f8f8bc34a9bea2918e9ad6ed95467ab4664ceb9f07d7fda1eca53c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBM4A7QA%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T132417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQC4It9VFvr2YbR4Lkary%2FrjMtea3sKrcTMMWLWHLhsV%2BQIgYlZK5qK5uFnyQCvqJLI9VltD2o%2FxZiRunfe%2BW9y8NQoqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOnJePVMSTg0nHADircA05fXvfzdkbGv%2Bomp1JO7qO7iMY90WzaFSEgF4itN5GUdIA4ITkXGR1wSfuPAMH7yyht0QeZbmxK9Sc8onw%2FvCHMENvbJaRgMAwhN0sCgQwFuyXO3a2mCQnvSktXW%2FvxmSKwIs8dFtXPfo73CUcRM%2BLU%2Fa7rsnNQCa4sT%2FqLt28lD16i1NnVS500JlCnqvJ6pi6DcMAFLhOQbcEUYqXFUTGc%2FqzghdEA%2Faegh3j5H2lzTW0utDOzPtRGWbthGhVgVcej84yW5h5%2BXqo6lKR6Ra0cAkvC8o0GvSjhYMp3XBK0ZuKL1U7AiX%2F9%2FM7BiKpFDL%2BPw28wpfpG33w5%2Bj%2BNuB14eBYqpIHbA3Ia61eSg2Z0VZ%2FMEKg4iD7C9QeE%2BTzeTg0HW%2FVpTN0iIXToh8x8JLBJsij3OX3D1sGKgLI7FDDnzW66EDrNL66iYuEMq6srLySE1CyPpIyCL2G41NPYWHDCIiO2h%2Foi5wPtEzBei%2Bk%2BkhjfyM2QhiBWg667ZsvP5Ymt7xJ1M%2F4DY%2FWO%2BUbLbXM7O%2FO%2BemHdgMwEUw4RnonvXyEbToZYwZXBqAwLKjVwwn%2FUDlFlRw1sFKoSvoLM%2Fml5KXZi%2FNdkFcnUcwnNXFz6LJtlbaYupKvu6wdYMLq4h8EGOqUBaERuyXRz3NJzX385VgeV%2BkLE%2FzmMgOAV1UrQuoDEBZOtjBINVL%2FdECmUcP6YfcYh41koN%2Ftx90u4QbhQOy5Mf4MOF6%2FaGF7c5d3wT4PDfrsmsbksDTFrX5DoWPJV%2ByRwDzgJ3tN8cUjSmheN6OxODYC0KdJvDkgyGYHwo4dDDafKgUxypZuQz%2BRroxRsFV5sr9GNNMOpCY18UjkBR6jFcQIf86BX&X-Amz-Signature=0355eb1f8a9169b2bc823932b8fa06646f7529599011346dba3923dfee3e9310&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B6DE57H%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T132413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCID32trV107z%2FQF5naF%2BZNnfEPYyLGnt7iU21A4ATFCykAiBPfVZGHRss3xLvESrQ1UYKUs7WQ%2F5%2BdWCMRZ9VYroTRSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd7d3uq0mLtzurwOLKtwDkrkx55q2SqNE%2FeZwJdGRY%2BI9pTfM4vwUW00H3SF1imvRfUw8%2BLzGUbhIRZ3i6r9OXIbKYpFeOcLge61FuAmj83fIWeeLfKJGJWgGOUHFzdK3CFsLAFBgQshFt6S0lk0rYcgpUocID9obTMcnkkwNZUJvbSXiwStWEVBLPlD9mXeX0IMC4Y5zPFgJvn1vK11h1HzuKHiLUcD%2BrQUvRljdH3NHdXxTGDc6eqjD%2FHms1dr0D120keY5OvX5gFcqODCccFI44%2Bn5dpGl0r148HoEhFFsb23ZnJ6mqNXmWZYVisVTjmILqmdZradqAdj9DNmYh7d32fJv5cOqWbcWZxfPANo6zR1Ywulq5NCxy7Sl8CAvLUbGgsS7ItVrXnXpriBnUwMWgWLNK2dRXYpfLb%2FKEsLXiG1QokQuOZPvAWgXlOHEWPpS7PBSiwlmNvgqSXWzf8xbF1viN9jvTmlfMEeOx46LmFsCaIftiJ7RbPS3SmVceKV0O1JXdm05jNhv54GCBk87pqZjpjWxHc1V6xyM578lYW%2Fi3VkI8g4dl8ULx0YrtCP2BIKlSai0xN3JsZXWvFrHFCfYWfH7%2BMBrVOj0%2FIdfCsElAiAmxmPyBJOtBlBSCIuSUD13tFSrP0Aw5beHwQY6pgFscXhjrFVAFIZRb3ecSEIbU%2FkTjNaBiv55Bmb%2FB6Td2IXNG3DiRSdVwHEqRASBT%2FOYTJ36jRGJyXaC358Lt1gsmqZ27VQcMQnqAyXa6g3cppfSyAzs%2BjjGo3M7DcPtSuGWLjOhYNhb8UpbasPSF7tXnP6dP7IpeK2pYIe3u9mmjiaH1xUJIyN%2B0FMKU29DD6NcDs3WXsAaE5UZ3MwLzn2RFesE2IzJ&X-Amz-Signature=2880242d719ff951d7adfc8a12bef59301cb52691d5d6cf0fa7dd7aa92320ad8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
