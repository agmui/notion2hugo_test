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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJYWJ3QJ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T041231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCICqgsO5uXglZGK7pdetFDdLiA4yllkKHiglwoGcDBA7yAiAO8a23ToxvS7c%2F1MtJ%2BzSu0fZnUeHq2iVLGC2G%2Fs52NSr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMAGFAATZ4q%2FASPT79KtwDoGJzMWkgKOCOzfDkJ278uvV2gCWT0%2FIcSuBeV6f%2BSY88q%2FH8KdWf1S3D%2F0EcB5IG5TNajJVvlX%2BEJq%2BbavZWXXVbWXeOoxFePdmabosKii80%2FCGBtB4IIuJGLXHFDg1UTGD99stbacH9M24mwPxrgNHi4P7qb3lEPjeUSKtPa3XwMK%2Bd9QUdg8PXPvCc1Ql4d1Iop0HObhhdRw4GUv62L6kmJkN65gz0l9bqrmHnK6fqTfqDEJJelp0uQMUdM%2FzZDDHH74LZS4zPwXvwUHcEj%2F6MfyfOK1SEKAZLQ4NS0WQW0J91SS9ml977v4duMau9%2BxfNz4IjNO3wnljKI3LT6P1Bn9NulM3sThAg2YdWYnY23VoPgDb3e2R3MfxlkOVTnoq15Ac2uFILA5zI8fXVIAXxcYlaERReYe7SrAqXrJUG5yE%2BNd%2BXHKi703GHvnufbp7DOC7KHWw8LWvv7ohSWKER4jwes9ho5zak6FlOB8zdYwzU%2BzKGgGjYpbonrERVLoQd9%2FmWsEkZe4URohYnODw9FLWz%2FjiEtX4m28fPbU9TUzjb3sE3cVbBJe4NsdeGGDQYugcRZecpqg7aa9uKMv%2F2aYBhxQV%2BAMK%2F3CMjProTEzwxiq2ZOwjGaX0w%2F%2BngwAY6pgHdbkphMnAKcGsnNbmFfZLyzpvzzJ6VsRT84OGiKxkCgODUIvci7Nnen%2FnCU6Lj7PbL78HtK5q%2Bd22L4oOoFshFEn1Qk4A64DQb8JWDkRsM0me1qbcGDTfiJ4IVwpU%2FMdgPXEpFrTzhAjrlr5%2FJ50LWSbVG1HZYtyfgQuE%2BHvAlUp5MXi16e834GpOh%2Bd%2BHwFWADDKYDIDEDUyuZjQViOBfZ3WvgczC&X-Amz-Signature=b251b0a34baf4bd292fbc784cf2dd030b50e4bce632fbac7a56497906abf1cda&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJYWJ3QJ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T041231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCICqgsO5uXglZGK7pdetFDdLiA4yllkKHiglwoGcDBA7yAiAO8a23ToxvS7c%2F1MtJ%2BzSu0fZnUeHq2iVLGC2G%2Fs52NSr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMAGFAATZ4q%2FASPT79KtwDoGJzMWkgKOCOzfDkJ278uvV2gCWT0%2FIcSuBeV6f%2BSY88q%2FH8KdWf1S3D%2F0EcB5IG5TNajJVvlX%2BEJq%2BbavZWXXVbWXeOoxFePdmabosKii80%2FCGBtB4IIuJGLXHFDg1UTGD99stbacH9M24mwPxrgNHi4P7qb3lEPjeUSKtPa3XwMK%2Bd9QUdg8PXPvCc1Ql4d1Iop0HObhhdRw4GUv62L6kmJkN65gz0l9bqrmHnK6fqTfqDEJJelp0uQMUdM%2FzZDDHH74LZS4zPwXvwUHcEj%2F6MfyfOK1SEKAZLQ4NS0WQW0J91SS9ml977v4duMau9%2BxfNz4IjNO3wnljKI3LT6P1Bn9NulM3sThAg2YdWYnY23VoPgDb3e2R3MfxlkOVTnoq15Ac2uFILA5zI8fXVIAXxcYlaERReYe7SrAqXrJUG5yE%2BNd%2BXHKi703GHvnufbp7DOC7KHWw8LWvv7ohSWKER4jwes9ho5zak6FlOB8zdYwzU%2BzKGgGjYpbonrERVLoQd9%2FmWsEkZe4URohYnODw9FLWz%2FjiEtX4m28fPbU9TUzjb3sE3cVbBJe4NsdeGGDQYugcRZecpqg7aa9uKMv%2F2aYBhxQV%2BAMK%2F3CMjProTEzwxiq2ZOwjGaX0w%2F%2BngwAY6pgHdbkphMnAKcGsnNbmFfZLyzpvzzJ6VsRT84OGiKxkCgODUIvci7Nnen%2FnCU6Lj7PbL78HtK5q%2Bd22L4oOoFshFEn1Qk4A64DQb8JWDkRsM0me1qbcGDTfiJ4IVwpU%2FMdgPXEpFrTzhAjrlr5%2FJ50LWSbVG1HZYtyfgQuE%2BHvAlUp5MXi16e834GpOh%2Bd%2BHwFWADDKYDIDEDUyuZjQViOBfZ3WvgczC&X-Amz-Signature=f1348fd097a3bbd73d055755f2c95a1b0b7f52898f86d46719203296c8deec69&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJYWJ3QJ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T041231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCICqgsO5uXglZGK7pdetFDdLiA4yllkKHiglwoGcDBA7yAiAO8a23ToxvS7c%2F1MtJ%2BzSu0fZnUeHq2iVLGC2G%2Fs52NSr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMAGFAATZ4q%2FASPT79KtwDoGJzMWkgKOCOzfDkJ278uvV2gCWT0%2FIcSuBeV6f%2BSY88q%2FH8KdWf1S3D%2F0EcB5IG5TNajJVvlX%2BEJq%2BbavZWXXVbWXeOoxFePdmabosKii80%2FCGBtB4IIuJGLXHFDg1UTGD99stbacH9M24mwPxrgNHi4P7qb3lEPjeUSKtPa3XwMK%2Bd9QUdg8PXPvCc1Ql4d1Iop0HObhhdRw4GUv62L6kmJkN65gz0l9bqrmHnK6fqTfqDEJJelp0uQMUdM%2FzZDDHH74LZS4zPwXvwUHcEj%2F6MfyfOK1SEKAZLQ4NS0WQW0J91SS9ml977v4duMau9%2BxfNz4IjNO3wnljKI3LT6P1Bn9NulM3sThAg2YdWYnY23VoPgDb3e2R3MfxlkOVTnoq15Ac2uFILA5zI8fXVIAXxcYlaERReYe7SrAqXrJUG5yE%2BNd%2BXHKi703GHvnufbp7DOC7KHWw8LWvv7ohSWKER4jwes9ho5zak6FlOB8zdYwzU%2BzKGgGjYpbonrERVLoQd9%2FmWsEkZe4URohYnODw9FLWz%2FjiEtX4m28fPbU9TUzjb3sE3cVbBJe4NsdeGGDQYugcRZecpqg7aa9uKMv%2F2aYBhxQV%2BAMK%2F3CMjProTEzwxiq2ZOwjGaX0w%2F%2BngwAY6pgHdbkphMnAKcGsnNbmFfZLyzpvzzJ6VsRT84OGiKxkCgODUIvci7Nnen%2FnCU6Lj7PbL78HtK5q%2Bd22L4oOoFshFEn1Qk4A64DQb8JWDkRsM0me1qbcGDTfiJ4IVwpU%2FMdgPXEpFrTzhAjrlr5%2FJ50LWSbVG1HZYtyfgQuE%2BHvAlUp5MXi16e834GpOh%2Bd%2BHwFWADDKYDIDEDUyuZjQViOBfZ3WvgczC&X-Amz-Signature=b36cc8dffa4ea96bffc9f6f83ef74041440fb1bd88e9ed5f7e325d6bfacd6a29&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W35Q5Q4E%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T041236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIFDQdiUNotUevVa6zCoWvTGtmvfasNqNQ72VbsK4Mnc7AiEAyHpMEsJtPNi%2BjgUT4Zn3mX%2BfpOJZF6qy%2Fbo2g3DJKP0q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDLmXmtL%2BkvYeSqUy1yrcAzD%2BFCQRHEVXADdXcBzih%2FepKXh4vZ1YkA7UqLVEMf36EN2lTOogas%2BbFQKDSrwuuLk2GpBoP242ynQ6Xan3Bll87HM02WA0ofzVpKJZ%2B4rdaASheLnUaQn%2F92y3%2FY%2Fy%2BGxgi3InMIHxCG%2BiPZurvhLIoDqGkx8tvV%2FLgNGdcKHfVEaQiWR%2F%2Fat8X05PyZ25VE12oIVLbVWMH7zgF33yesyzQfyluLmaebJriobnJxPRMH5T%2BL7K3WHacDhpUgWg7kFX7pj4JLL8IW4FmMoVHuNJDXMhJgGg5VmzHeL3rYuCD%2Fz6z6zUqs9Ek7dDLd5YtZV3kQB1A%2B7JAen%2FYFegXW3V69hNJcyn4EQoxZVPw%2B7A5W4Ngv7ekENIAaQnKYXECYZrX7KksiDcnsHZun0snM8STo0qtciCN1Kwg0rM2Sjp0mZpu124UosjaaJFerLwQxRqBTvXFsPeMwduhvbYe9W1r3rfn3miDX4TeTJMfQ51t1NeT7R3QyFITgtdJfpsNX5wwPT%2BVGCcOJvfoFvUjxKdU8D1yx%2FjbYTPSaH4XoTpS%2FO8oqJ8I%2BPW%2BdVYhuAz1eYeR%2Frac9AaAOnvpL6SVQ2n9v66GB5dNns3v49DcykpC5xxzWpd0q51EX8oMMzp4MAGOqUBpkQGyYW4QPkVr2oN50ZIvnbSn3WNUu0BqOhx2B68nIZnkOrtN%2BO73vGEenwC5afaSl6Q%2B1p6pxFAL7e6xQndyD5jL%2B%2F4X8K8CQzENDwoj4GUN4zbly2cV5AsT%2BC8fpgj6O%2F2EZ9u%2FERCKtGm5awDQPo1VTNw%2FfLbEmHjvF8ZPeUZHK%2Fklspk%2BJjV%2FG1gtk%2BCy5m6yMkGVw4VRYvJyQyt5lqc2MvU&X-Amz-Signature=1414b69940a18e9f83504554f7c5441100982e813d1ec044dc42d80f71eead3b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FST3POF%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T041236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIFcrIL9DGU1spih3WmElxjHLETbKp%2BOwqZvqJgaBY8D1AiAX%2BER%2FBNt368p%2BwmOYXcpdjjUKjTD5Eg9k4ifyWxXUcSr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMdd5VNDisNDmde3i5KtwDatK7xdnGkafkDK16Uq%2B%2F%2BcU4Qqz%2B8JvESyBCPmE%2Bvi2%2FIt0wArBQR34A3JqOmZSwryXqUbgBt9m%2BstPiFWP4y4W8tsGTQyTQJfrraGZZHb%2FgAHUeW539%2BIpsnkeWSGFfZuP5XqCxbYIAew16oaRorv%2FT2J9kz9KpiGDbKeDceFb7YqmVl%2FytYCWaui5%2F8tn8MbMae9LkDXDHRKU67Cgdjif90YfFNelrcGVMoI65xUj%2BKrZqHcaYV5Pv%2Fbx8NedoDXvCqZPQHv414nfnGFpQQQzpLLc3m9rmur4p%2FU2lqI0elQ8Tqz1FxGSF8puvj3MuTmv9MdIxa5mbDO%2BBixbMbATWsp4RRWDGXvA0wemeqn4nCcnxi9jF5MG2cvD%2BtVWgcDtFgnn8h7W3HZXwpuO3HuHCj9Hp5Tzp7sKloy6W6qvbhNUUj7rEaEutPCQEyQnsCR%2FREu9Z5WvrP1UzTT8u8AI%2BnsJ7Th297MkAfqOkscYwr1AIN0vkJ2XqZJKUbpwDMUGptsdNTsCIhQODQlvNCaeox6cMTTstsme3n3Nk2bphBT0fLDpIsu9ZqWOVMKs37nvN7uY29Oz7qn4I0Wy8jPRTOewxyvgvERKfMhSp1j9ZMXyQUTlC01YU9w8w7engwAY6pgGzzqkz5F7gBR5uFXlCQFJPKv3Rf1Dg9XV91pwd0SkUEQ9l2czys1iZpooeIe0BHaKauA%2BgCl61ja5c5IOs18lANGfTguRVzkuTS44AZCDm3WpvtG7HkYO15UBUKmaCDtmkXVwRcSA1afvNxLLodyq36aci7Y7sFh7y7LQAXvX%2FhpflANUT1Qj53IGhgpHJN3QiTdA5K%2F9jHdwIwaA%2FL1uvBouK6acE&X-Amz-Signature=b0eededcd52128489625520813a1d42c5ff95cb36177e52696c263755283481d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJYWJ3QJ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T041231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCICqgsO5uXglZGK7pdetFDdLiA4yllkKHiglwoGcDBA7yAiAO8a23ToxvS7c%2F1MtJ%2BzSu0fZnUeHq2iVLGC2G%2Fs52NSr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMAGFAATZ4q%2FASPT79KtwDoGJzMWkgKOCOzfDkJ278uvV2gCWT0%2FIcSuBeV6f%2BSY88q%2FH8KdWf1S3D%2F0EcB5IG5TNajJVvlX%2BEJq%2BbavZWXXVbWXeOoxFePdmabosKii80%2FCGBtB4IIuJGLXHFDg1UTGD99stbacH9M24mwPxrgNHi4P7qb3lEPjeUSKtPa3XwMK%2Bd9QUdg8PXPvCc1Ql4d1Iop0HObhhdRw4GUv62L6kmJkN65gz0l9bqrmHnK6fqTfqDEJJelp0uQMUdM%2FzZDDHH74LZS4zPwXvwUHcEj%2F6MfyfOK1SEKAZLQ4NS0WQW0J91SS9ml977v4duMau9%2BxfNz4IjNO3wnljKI3LT6P1Bn9NulM3sThAg2YdWYnY23VoPgDb3e2R3MfxlkOVTnoq15Ac2uFILA5zI8fXVIAXxcYlaERReYe7SrAqXrJUG5yE%2BNd%2BXHKi703GHvnufbp7DOC7KHWw8LWvv7ohSWKER4jwes9ho5zak6FlOB8zdYwzU%2BzKGgGjYpbonrERVLoQd9%2FmWsEkZe4URohYnODw9FLWz%2FjiEtX4m28fPbU9TUzjb3sE3cVbBJe4NsdeGGDQYugcRZecpqg7aa9uKMv%2F2aYBhxQV%2BAMK%2F3CMjProTEzwxiq2ZOwjGaX0w%2F%2BngwAY6pgHdbkphMnAKcGsnNbmFfZLyzpvzzJ6VsRT84OGiKxkCgODUIvci7Nnen%2FnCU6Lj7PbL78HtK5q%2Bd22L4oOoFshFEn1Qk4A64DQb8JWDkRsM0me1qbcGDTfiJ4IVwpU%2FMdgPXEpFrTzhAjrlr5%2FJ50LWSbVG1HZYtyfgQuE%2BHvAlUp5MXi16e834GpOh%2Bd%2BHwFWADDKYDIDEDUyuZjQViOBfZ3WvgczC&X-Amz-Signature=0919c373a7117a2b6b3d20d8275933d5fbddfbccb823d22e150e88aee43a4e39&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
