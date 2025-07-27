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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGQPJ6EI%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T090906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQC05ijukBbJxKHtCTIJb1b%2F31vCMsKL8zf6R18nsmHgjgIhAJgPfW3Zy%2FXrrS%2BmnT9xYt1yefmWF%2BL2EWxJ6wMePEWeKv8DCG0QABoMNjM3NDIzMTgzODA1Igx%2BLmf6r7eoKW9XNboq3AN7%2BVs94k3LY7Hqwm4KHHYxpqA4iVrE9UgprjXm7b6bQfeKr0WD5c7wJBwKX2Ctav91HEf9iTTmu04mzSuE5PK2IREaZNilE%2BIkK0ZgguFZF18lSDimL9MtRCjeSJipR5DgqkqLwMmS%2FxNoqyU6d%2BbaTI3%2BoKvp%2BYejFfstYW5fX4G%2FjhPeTBPkHwwWKePRZ39Tc06qdXZOOvjQXTe8Cc2kUnCU6DnnDIXKzqVBy%2Fg5XY8pYEBkCwkr3XJgl5%2BThUsndnk0QAUazRwMzBtdcro5pt4zNf6bz29u%2BH2rRcXWs%2Bb2ZmsrTaGqbHe8Rkj5nUQtNoWmSBQq9tn%2FiuSTBDXcKLUvQJGswYSCPvEbsl%2B9W09uZb%2FA0SuA9WqbzhiFjQlGsdiFTgpPSZpdyvGpp59UzpQB1jjp9CSZLtHJ0YfgyHBHC%2BQ4qFF3fgjgit%2FFdLtdJab2RSPkM60ZHe5dzVIELWTCmrK0B0EFX88RceedAYPOiVNjk3LYILG9IaNnyoYdLdWDbP6uNa%2BEo1EugzNoH0m6%2F1HB9SK02WM%2B2ghGOhv7PAa%2FlmBjHwkvYEvUiu5jb9ip3OVrIv7%2FXjqB%2BXB1JSOvEJAhcAWPjKfeNs5%2Fm6An%2Bhchr6lhoWk3LTD5upbEBjqkAc3hsZistxDZv4QmaF1MAHLzfFlgCt2dAPIT5RuE%2Bup362qghDvRsdaPadKGGzslMYRMWsqoWlmYsHnOkK2fbYBZGWCyXKpumylf%2FqsnqEbnZKLBhUiPLDk3lT3fxACak8ijGpXFVJmk%2BJoLvo%2BKW6lJvt2cpKHWpneb1j7DGcF4ZHhUDe8VhLRkG5XzMa%2FAdbW8ig8aq5LOtOtG8Np3WED1Pxle&X-Amz-Signature=7d780051e130360b9ab19525b20140ec2a29c26c15730664122d531eb28c5e1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGQPJ6EI%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T090906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQC05ijukBbJxKHtCTIJb1b%2F31vCMsKL8zf6R18nsmHgjgIhAJgPfW3Zy%2FXrrS%2BmnT9xYt1yefmWF%2BL2EWxJ6wMePEWeKv8DCG0QABoMNjM3NDIzMTgzODA1Igx%2BLmf6r7eoKW9XNboq3AN7%2BVs94k3LY7Hqwm4KHHYxpqA4iVrE9UgprjXm7b6bQfeKr0WD5c7wJBwKX2Ctav91HEf9iTTmu04mzSuE5PK2IREaZNilE%2BIkK0ZgguFZF18lSDimL9MtRCjeSJipR5DgqkqLwMmS%2FxNoqyU6d%2BbaTI3%2BoKvp%2BYejFfstYW5fX4G%2FjhPeTBPkHwwWKePRZ39Tc06qdXZOOvjQXTe8Cc2kUnCU6DnnDIXKzqVBy%2Fg5XY8pYEBkCwkr3XJgl5%2BThUsndnk0QAUazRwMzBtdcro5pt4zNf6bz29u%2BH2rRcXWs%2Bb2ZmsrTaGqbHe8Rkj5nUQtNoWmSBQq9tn%2FiuSTBDXcKLUvQJGswYSCPvEbsl%2B9W09uZb%2FA0SuA9WqbzhiFjQlGsdiFTgpPSZpdyvGpp59UzpQB1jjp9CSZLtHJ0YfgyHBHC%2BQ4qFF3fgjgit%2FFdLtdJab2RSPkM60ZHe5dzVIELWTCmrK0B0EFX88RceedAYPOiVNjk3LYILG9IaNnyoYdLdWDbP6uNa%2BEo1EugzNoH0m6%2F1HB9SK02WM%2B2ghGOhv7PAa%2FlmBjHwkvYEvUiu5jb9ip3OVrIv7%2FXjqB%2BXB1JSOvEJAhcAWPjKfeNs5%2Fm6An%2Bhchr6lhoWk3LTD5upbEBjqkAc3hsZistxDZv4QmaF1MAHLzfFlgCt2dAPIT5RuE%2Bup362qghDvRsdaPadKGGzslMYRMWsqoWlmYsHnOkK2fbYBZGWCyXKpumylf%2FqsnqEbnZKLBhUiPLDk3lT3fxACak8ijGpXFVJmk%2BJoLvo%2BKW6lJvt2cpKHWpneb1j7DGcF4ZHhUDe8VhLRkG5XzMa%2FAdbW8ig8aq5LOtOtG8Np3WED1Pxle&X-Amz-Signature=ebfa071f309cdf1e5724b0666e28cb9272565145f256fd56d7129aed207f970d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGQPJ6EI%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T090906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQC05ijukBbJxKHtCTIJb1b%2F31vCMsKL8zf6R18nsmHgjgIhAJgPfW3Zy%2FXrrS%2BmnT9xYt1yefmWF%2BL2EWxJ6wMePEWeKv8DCG0QABoMNjM3NDIzMTgzODA1Igx%2BLmf6r7eoKW9XNboq3AN7%2BVs94k3LY7Hqwm4KHHYxpqA4iVrE9UgprjXm7b6bQfeKr0WD5c7wJBwKX2Ctav91HEf9iTTmu04mzSuE5PK2IREaZNilE%2BIkK0ZgguFZF18lSDimL9MtRCjeSJipR5DgqkqLwMmS%2FxNoqyU6d%2BbaTI3%2BoKvp%2BYejFfstYW5fX4G%2FjhPeTBPkHwwWKePRZ39Tc06qdXZOOvjQXTe8Cc2kUnCU6DnnDIXKzqVBy%2Fg5XY8pYEBkCwkr3XJgl5%2BThUsndnk0QAUazRwMzBtdcro5pt4zNf6bz29u%2BH2rRcXWs%2Bb2ZmsrTaGqbHe8Rkj5nUQtNoWmSBQq9tn%2FiuSTBDXcKLUvQJGswYSCPvEbsl%2B9W09uZb%2FA0SuA9WqbzhiFjQlGsdiFTgpPSZpdyvGpp59UzpQB1jjp9CSZLtHJ0YfgyHBHC%2BQ4qFF3fgjgit%2FFdLtdJab2RSPkM60ZHe5dzVIELWTCmrK0B0EFX88RceedAYPOiVNjk3LYILG9IaNnyoYdLdWDbP6uNa%2BEo1EugzNoH0m6%2F1HB9SK02WM%2B2ghGOhv7PAa%2FlmBjHwkvYEvUiu5jb9ip3OVrIv7%2FXjqB%2BXB1JSOvEJAhcAWPjKfeNs5%2Fm6An%2Bhchr6lhoWk3LTD5upbEBjqkAc3hsZistxDZv4QmaF1MAHLzfFlgCt2dAPIT5RuE%2Bup362qghDvRsdaPadKGGzslMYRMWsqoWlmYsHnOkK2fbYBZGWCyXKpumylf%2FqsnqEbnZKLBhUiPLDk3lT3fxACak8ijGpXFVJmk%2BJoLvo%2BKW6lJvt2cpKHWpneb1j7DGcF4ZHhUDe8VhLRkG5XzMa%2FAdbW8ig8aq5LOtOtG8Np3WED1Pxle&X-Amz-Signature=675b317b1450d4cf97ee5a10b2da9f05a6c380ce0e5ff1de78446399145a2cf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GPGN5A3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T090914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIHIEC%2Bm1qh%2BGibJu1NDxZXTT0JrSBnAcRK3iKKOvQpY5AiBtqKpMO%2BjAdLsghOmjyFCwTtIz40GXrubFiKAveQsQFyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMU1F5TDBOnxYvTXL%2BKtwDG122Jg8X7DL3JX8xL8IWf48sDush5mNV0xNXXmihMpvJiokJWX%2FuX1ZBAbk34uGpLeWiOgh9fvbyluxPOuTepsK%2FAu0od94vQySP5dyauDP6KAsM44%2BmTXLDORg4TDHschqZR3Reph%2B1fSY5mhgMMN7s%2BC0GhMwp3uZFWXlHuN%2FSWuqKQxDWvYAB9nJ8dyb5Cj6xgc%2FAoPUKPZp4yCVse1hYfR%2F3p2b6kNi8dZU8DghbNzDb3A41QhRLnTYiVaHGrbIlZHybGmxzt3pqmSXemmVLug8wBQB9YUERl7OGyugPBVPoMGHsVaqw0lJOxAGtakjoASNct%2FGhLVpm84Vk0rDibYV9NiGcjd%2FN4yWfVsvwxsQjoaJJSRbBTzQ47kpzbEQ1R4D2Q0dYCEoAuQ6GLk1QauqM4WkfJkcFIQl7VcjWMRmaIGAmOjwQWdGN%2FVsM0hkOt%2FNNyPQHXKiNLJEOexSbHS6mgxBzbeZg2LX%2FvDL81sxQFYU5%2BDvuy2etuC7BlRdXF9hkpbDBxq0JnSLzbX5TK7CH5%2ByftCayWoyM2dwTKLtecv5dxVUjtH%2FC3wPH7mi2e1knHKRmpO6LPBNx7xnO5qji05uKhUcGlRUiS7ti8Dh5kSyIZJbO6q8wx7uWxAY6pgFxEWHmj6du%2BT7MLVCLog5ynqrgUB4nb1Tha9FQdnM4skKnCiN2n3w0NJCsPFyJslvLts447YO33FgAaNpvY0afMtSnD99nBXRb1Wc0Y2pdFv0jc2E1p9MGS2G5FHx2xufXg029d0t0SItWb1dbg%2BWJZNOqiB47Y8heg6rhe0C20bjMO3bi2GzlsOrEaGGEX1FN%2FOwx%2B9sruR%2FQJjNrUqMjDUqXuhT0&X-Amz-Signature=85ba03fdd4962f128550ddf4a6abd2c560cd49cb39350073e995b11101617c47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIDAXDIQ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T090914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCU33ezmlaseomJAy%2BpJhobaP4hFEwfcIG8YZSXpptFIwIgcQwEojJZGwUQQzHt41MiyNMhbIUGTGwtzULSGlYOFNIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDNOhI3bWJHW7cGCeEyrcA0Iy1n6YaZNoLwGUXmFml5xTCpPqjLksnzd5K%2BmhybRjdCtOAQIpaP9Z%2FWpJVbb7%2FSBaa27pFZEUSNASfQru2RO6%2BKmnGBDxeRVfWNm7Cv8R8rZyrTyFXXcjgazNYV6ksgiIItVrhwGYYor8dc9DjSurZO%2FTSVC1KJj%2FWp0MLCSy0qbhdzczs4IKPzpGVbYCDmJDnvu44vDIkWy7607sY4krqT8Vc1raEYlmiKpJ897Vm4t0cM2i3XeBC2En8inhztcZ2GRQUfv8QHapw%2B50LH6qwNQQ97SiBU8pcMHXXu4TUYXmeWaPyVKJW%2FePNj2jYPW3zKWoPMJkDviIXbVMkfhgEsnR4Lzd7eq7ONUBcdLxQhdTry1sHXq3KprGqb1Hsome5u9sQA6Kj3BKMFQ7IF6vJqKf%2BouIRwfyhtLIXN1mtDTpIKxIj1lnX1AU8nyfwgm%2FbJO%2F5ZhfzDUbMVOaArF7cSSib%2FZ%2F4mN8O606W0KsBu4QIq1CLD9UGiQZdraCSUaTm6Ih7SpTvru1U4JffFGZkRZFk7rJ8Shoi6mK9xINeOAOE9pazq5W6q97ocewMJvxwAHnO5CjPg%2FTvWLwiD1jJrnkpKQACwLDRHJiLzvEo5YIhAi89DEMFOSkMIa7lsQGOqUBdQbYEAIfalDSJxtYZN66uTYzKdnf0UcQitvh%2FkH%2B4NAZTjeWzrttJOltMyng2xnmtd1dIsxVM3o8cVpjlCvWMLdx%2FsvQwZqsECJ0ZUVx%2B1Mye%2F6OSOxPCzinblxGnee%2F4v%2BeZLeWYniwzxwiWES%2FQ3Dp%2BR2F%2FfHKmFIqf09FACz9CvIj7znudHDixtH7hci0LvdSpfqGUPODQRF7VCZKerB4Cuie&X-Amz-Signature=eb94bd036f1309a238c3c7b14654889ae2d41beeef77ebf619b9e6c8468dfb6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGQPJ6EI%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T090906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQC05ijukBbJxKHtCTIJb1b%2F31vCMsKL8zf6R18nsmHgjgIhAJgPfW3Zy%2FXrrS%2BmnT9xYt1yefmWF%2BL2EWxJ6wMePEWeKv8DCG0QABoMNjM3NDIzMTgzODA1Igx%2BLmf6r7eoKW9XNboq3AN7%2BVs94k3LY7Hqwm4KHHYxpqA4iVrE9UgprjXm7b6bQfeKr0WD5c7wJBwKX2Ctav91HEf9iTTmu04mzSuE5PK2IREaZNilE%2BIkK0ZgguFZF18lSDimL9MtRCjeSJipR5DgqkqLwMmS%2FxNoqyU6d%2BbaTI3%2BoKvp%2BYejFfstYW5fX4G%2FjhPeTBPkHwwWKePRZ39Tc06qdXZOOvjQXTe8Cc2kUnCU6DnnDIXKzqVBy%2Fg5XY8pYEBkCwkr3XJgl5%2BThUsndnk0QAUazRwMzBtdcro5pt4zNf6bz29u%2BH2rRcXWs%2Bb2ZmsrTaGqbHe8Rkj5nUQtNoWmSBQq9tn%2FiuSTBDXcKLUvQJGswYSCPvEbsl%2B9W09uZb%2FA0SuA9WqbzhiFjQlGsdiFTgpPSZpdyvGpp59UzpQB1jjp9CSZLtHJ0YfgyHBHC%2BQ4qFF3fgjgit%2FFdLtdJab2RSPkM60ZHe5dzVIELWTCmrK0B0EFX88RceedAYPOiVNjk3LYILG9IaNnyoYdLdWDbP6uNa%2BEo1EugzNoH0m6%2F1HB9SK02WM%2B2ghGOhv7PAa%2FlmBjHwkvYEvUiu5jb9ip3OVrIv7%2FXjqB%2BXB1JSOvEJAhcAWPjKfeNs5%2Fm6An%2Bhchr6lhoWk3LTD5upbEBjqkAc3hsZistxDZv4QmaF1MAHLzfFlgCt2dAPIT5RuE%2Bup362qghDvRsdaPadKGGzslMYRMWsqoWlmYsHnOkK2fbYBZGWCyXKpumylf%2FqsnqEbnZKLBhUiPLDk3lT3fxACak8ijGpXFVJmk%2BJoLvo%2BKW6lJvt2cpKHWpneb1j7DGcF4ZHhUDe8VhLRkG5XzMa%2FAdbW8ig8aq5LOtOtG8Np3WED1Pxle&X-Amz-Signature=bd2e58149ddda2334a2f9df30ff24fd779c2d7bab141667f7ebb907335888a49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
