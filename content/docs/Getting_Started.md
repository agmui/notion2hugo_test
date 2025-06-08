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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNPKTCBG%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T024635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICg0oUfvj31c7FYHTxGV53rIs3pOEhxiDQoSsIuR2QvgAiEA42gIEPLeHJPytyj12RXfWG%2Bvco1Oc5QOmDNqYmjTf2QqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHsdwFcct%2BtO5bK6zircA%2FfCGayns5BJjMvPp%2FsF7nByl44avZiMMWO%2B%2FZsjaUMWKHG4%2FUuXV5ABZJfTsrErAHBdwLv9rXg3nbShwsnAtAjz7vCgQursZx%2B1ZPsN5lGQEt5aX2PfqO9EgGemeySNqlWYF9GXK%2Bjgkh63i%2BnwZPgY%2BkpG1TDdVt7t7zYMjcNBvodAXKmFHwiUzusnRYLtz7%2BVVDEtfzMAnESp%2BaUMWtAKDMexg6cVI5rRaQVYEZ2U4Hqy7g3Mt37S%2FJmVseAcKesyq62FLsDgfQVQCENQ0%2BUu%2Fya1PkBqjO2NazrvMDiFOSuDvOzWjtwlsOmtTWvbx2qe2618Q9M3QBXXhGfW%2BNvnuejHum%2FpEbmwY9v16Dx3nkpn%2FNsylN58s48TLIREnguM9XKv389gd4RA%2Fo42ariZlIYH7eJvC0UVIbnxDX4iy1bGzZjXh7ZMoLbGsoRkF0FVltV3Iv1Lwf9GkiRjAZzz%2F9qotl5nMUkjlPy5Usf2FA8b5AZ%2BqukCnlNM1VGqP4DGDoKFscAtBj%2BMF%2F0kiv%2FtUi8RZTzMLV5GEOD185guPLk%2BisKW6GswQ3p7OsoxZxseE78KQ1XkzBpohpkedQv3HirEepnaQEKXFht%2BymssyUY4HSWv6%2Bcm6tX3MIudk8IGOqUBr9zj2bHx0yej9SwbR3JpNqoktEaNXtUxD2tLc5HrjJ562B2khU3tylJf7ZcYzxyNAuApxCpMyuoHInMlwLvmiXC5%2BLnmhLuqfcj7Grr4XeYsoKSa8RWKXgnueI%2F3U%2Fcb0dvg%2FE2%2F7eZFU%2Buxvy80Im79KH7ruF5SC43YWstc1NC%2BvfEonQXExboshGOfhQBVcTfl5qvJhVLYQcm7wMncEquLxD8z&X-Amz-Signature=de7f2f1c37f1d7469061d3dc7128cb2469919d81b42323a522b68b6f106c419b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNPKTCBG%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T024635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICg0oUfvj31c7FYHTxGV53rIs3pOEhxiDQoSsIuR2QvgAiEA42gIEPLeHJPytyj12RXfWG%2Bvco1Oc5QOmDNqYmjTf2QqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHsdwFcct%2BtO5bK6zircA%2FfCGayns5BJjMvPp%2FsF7nByl44avZiMMWO%2B%2FZsjaUMWKHG4%2FUuXV5ABZJfTsrErAHBdwLv9rXg3nbShwsnAtAjz7vCgQursZx%2B1ZPsN5lGQEt5aX2PfqO9EgGemeySNqlWYF9GXK%2Bjgkh63i%2BnwZPgY%2BkpG1TDdVt7t7zYMjcNBvodAXKmFHwiUzusnRYLtz7%2BVVDEtfzMAnESp%2BaUMWtAKDMexg6cVI5rRaQVYEZ2U4Hqy7g3Mt37S%2FJmVseAcKesyq62FLsDgfQVQCENQ0%2BUu%2Fya1PkBqjO2NazrvMDiFOSuDvOzWjtwlsOmtTWvbx2qe2618Q9M3QBXXhGfW%2BNvnuejHum%2FpEbmwY9v16Dx3nkpn%2FNsylN58s48TLIREnguM9XKv389gd4RA%2Fo42ariZlIYH7eJvC0UVIbnxDX4iy1bGzZjXh7ZMoLbGsoRkF0FVltV3Iv1Lwf9GkiRjAZzz%2F9qotl5nMUkjlPy5Usf2FA8b5AZ%2BqukCnlNM1VGqP4DGDoKFscAtBj%2BMF%2F0kiv%2FtUi8RZTzMLV5GEOD185guPLk%2BisKW6GswQ3p7OsoxZxseE78KQ1XkzBpohpkedQv3HirEepnaQEKXFht%2BymssyUY4HSWv6%2Bcm6tX3MIudk8IGOqUBr9zj2bHx0yej9SwbR3JpNqoktEaNXtUxD2tLc5HrjJ562B2khU3tylJf7ZcYzxyNAuApxCpMyuoHInMlwLvmiXC5%2BLnmhLuqfcj7Grr4XeYsoKSa8RWKXgnueI%2F3U%2Fcb0dvg%2FE2%2F7eZFU%2Buxvy80Im79KH7ruF5SC43YWstc1NC%2BvfEonQXExboshGOfhQBVcTfl5qvJhVLYQcm7wMncEquLxD8z&X-Amz-Signature=7c2231e2b9d80c1e0f9ec0eefa8d2f7d373016fa51c82bf1968990f65bb2238b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNPKTCBG%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T024635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICg0oUfvj31c7FYHTxGV53rIs3pOEhxiDQoSsIuR2QvgAiEA42gIEPLeHJPytyj12RXfWG%2Bvco1Oc5QOmDNqYmjTf2QqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHsdwFcct%2BtO5bK6zircA%2FfCGayns5BJjMvPp%2FsF7nByl44avZiMMWO%2B%2FZsjaUMWKHG4%2FUuXV5ABZJfTsrErAHBdwLv9rXg3nbShwsnAtAjz7vCgQursZx%2B1ZPsN5lGQEt5aX2PfqO9EgGemeySNqlWYF9GXK%2Bjgkh63i%2BnwZPgY%2BkpG1TDdVt7t7zYMjcNBvodAXKmFHwiUzusnRYLtz7%2BVVDEtfzMAnESp%2BaUMWtAKDMexg6cVI5rRaQVYEZ2U4Hqy7g3Mt37S%2FJmVseAcKesyq62FLsDgfQVQCENQ0%2BUu%2Fya1PkBqjO2NazrvMDiFOSuDvOzWjtwlsOmtTWvbx2qe2618Q9M3QBXXhGfW%2BNvnuejHum%2FpEbmwY9v16Dx3nkpn%2FNsylN58s48TLIREnguM9XKv389gd4RA%2Fo42ariZlIYH7eJvC0UVIbnxDX4iy1bGzZjXh7ZMoLbGsoRkF0FVltV3Iv1Lwf9GkiRjAZzz%2F9qotl5nMUkjlPy5Usf2FA8b5AZ%2BqukCnlNM1VGqP4DGDoKFscAtBj%2BMF%2F0kiv%2FtUi8RZTzMLV5GEOD185guPLk%2BisKW6GswQ3p7OsoxZxseE78KQ1XkzBpohpkedQv3HirEepnaQEKXFht%2BymssyUY4HSWv6%2Bcm6tX3MIudk8IGOqUBr9zj2bHx0yej9SwbR3JpNqoktEaNXtUxD2tLc5HrjJ562B2khU3tylJf7ZcYzxyNAuApxCpMyuoHInMlwLvmiXC5%2BLnmhLuqfcj7Grr4XeYsoKSa8RWKXgnueI%2F3U%2Fcb0dvg%2FE2%2F7eZFU%2Buxvy80Im79KH7ruF5SC43YWstc1NC%2BvfEonQXExboshGOfhQBVcTfl5qvJhVLYQcm7wMncEquLxD8z&X-Amz-Signature=eac6578d06434956b252529cd8179941dee7b0b3aa1a43f2c9de9e3843b15a7b&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4PDNPUK%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T024638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDu9869AbN4V5y7YuH%2Bua0w5%2B6TCSoR9Ud%2FINKYZDfzAIhAMD9a52XfnUSZv9eQbp1kVkVZ2pAoyuNf75n3UZfwRJcKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2TVcDmDIclGAxCeUq3AM3OkzdCMIAeUAJYjniafctxoct77UBtTSAHsXsr2Yddv5VQRkCLmOldmxehglkfZ3FZirXQsRf8JC0NY1VeiI03dot2sL6ROySw25iyJeavBMpLXdCYhrVsrfHQO2m8ADQl4o%2Fv86EEKvhOQe%2BbR0EVRCce7UFr2i%2FbQXxTrpDgmpl%2BKC8R32QTzNQqAencmAqsE1a%2FuFHt2SVCUF0Opduia8Qf5hAQihl0q1e2umxJZkszboRIxER8BR6o%2B71Lt7YJlA6TgHZu1tYhKvDOE8TjbMeiaIaGOGxS%2B1Rzd1ksRaRm3VVeF7rRNH4mBl66qu4HwGN8dI75I8RfKHrK8T%2FMlrXjtcat0chuvW%2FlkH0Rgy670IwydeTIeVKBmq51gHuw4HF9wnQGvxeZVfdPWz%2F8HfPNxTdPsYQznVTiOLIDZRHjy3u42PHhdUmOB2crKJkJL5q3a%2F2O3kWEe856cyBkqdTUJhE0sra%2FGIX7V%2FQvJP3Vs8bbuk9klfQ710OgGuSlk9HUVuv2FQgQB6qdQwNYEU2mYL%2FwFOaup3Xg9z%2BjiCPmTsJhk5ovpmtT2IqTMMEq6ac3QQrOKKUn2jsw5m9B%2BHODbTfN7OHSruQDXxavUKPAQsh6ncX0%2FePtjCCnZPCBjqkAV9EJ%2Fn%2BteP00M2yTO53LFh5V4A0NP3cCEJ1i%2FvqKHSTc1gTFTDDhXSSWIcVEDUzZJAYA%2FIyrejHVjB9yjSKEiLrDpnjGlc4S7B9HByy%2BKkkI%2FvdWydwSbypy%2BwymLKz5u2cCZVmx%2FxtFIS3yqiD6GHS0Ti9q1o0RNdT4ZCee88%2BeIMnJSKhon3ffFjO1YmmNabu%2BFscMwcvRuTDSLCh2cVtD9o7&X-Amz-Signature=63cad28976dea95282bb32714bb7bfca2d14017e9106922b5d566add30d95742&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBBX6SCC%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T024638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALKEC%2BaiB6UgQ8biTTynLYcbElU78asz7urNU5U2ckrAiBy4x6fyRgeUpN6gu6L7InnIMoe4iNtzyYdfohRWvFS0yqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM6Ppt7svZTC7UKBTKtwD%2FeLRQcjSV9VnyakEqIXvkrjBPBFmTPWgYLJxfA7YdYNOx2twTp0nvQlkcHUcHQ01RSRlvVIPkpBOz2Dpu%2B8WWbz7J2zVYNKXSnJvReA3SZgoraIY%2FfafC9FCf41Y12QAcfgFDagOKRU1t1LEFmPi6XAl%2FCdIyLUAwNN9lml1RhHnM%2BZ6xpMNVTWwba%2BqedEAjrRIwZhgSoU8X7GDF%2B%2F7QgELbMCjhMl0OXHldqegIRRUQ5%2BOftNmozah2FdKEMkQ%2FDzZz674mh%2BBoCENODqXWuj0QLZ1SWv9dDXXfP5cIv%2BjfOCc8%2BJPhzA9thNFYPaK6iHK4RasQZNyy1ARpX%2BrVRDyb17n%2FcPS7qscI%2Fx2h6nJCqdQRhDPhPBCiu8R9wXBqIucQznz7ulD2rmJjTs1UOtIjrs2WFz3HcKplUlVwvqonws4BzCFnNqQhoTuSI%2FTqhcGnZSR8ZelOwcw%2BUUrzlAZcFDi4rCgZ8743ZKTPo%2FEQpcxwsQd9JWmSX3okhW63CLKUT94yDKMW3bXSccpUsPjRAJuxO%2FRRe48q57w4FFImEiA5HGmjlTl2vpG1DxbXq1mjcEXCacC7yTBflT8rABJv0Xonmhz7OPmidcmful3Cx0%2BJ3T6Q0ecLIYwx%2FGTwgY6pgEQ638DuyMbhICGLdnFMrQa%2F7nKpGL9%2FoSfbISvHZmv85XL5gMjuXGXIIRoJSLCqHrnJ69Yuw9dIBZ5bbF2cNnzm8M3tBkgfMrP7uIXPNjImVxhL709a3xVyPFhFqQ1Bn6EQYVMJAeNYWVWN3uXE2gJwJg%2Fsfc5WwGOs8%2BU29Y%2BXzUq5kGmobNRkWcwonm%2FVLk2%2BsRJ%2Fn6jOV%2Fj9H5JCxqoOSDoKTo7&X-Amz-Signature=fd8b5757e00a6b0d00a9e794d72e9adcba70fc541dfc0c409e6b9f22a9b2f339&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNPKTCBG%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T024635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICg0oUfvj31c7FYHTxGV53rIs3pOEhxiDQoSsIuR2QvgAiEA42gIEPLeHJPytyj12RXfWG%2Bvco1Oc5QOmDNqYmjTf2QqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHsdwFcct%2BtO5bK6zircA%2FfCGayns5BJjMvPp%2FsF7nByl44avZiMMWO%2B%2FZsjaUMWKHG4%2FUuXV5ABZJfTsrErAHBdwLv9rXg3nbShwsnAtAjz7vCgQursZx%2B1ZPsN5lGQEt5aX2PfqO9EgGemeySNqlWYF9GXK%2Bjgkh63i%2BnwZPgY%2BkpG1TDdVt7t7zYMjcNBvodAXKmFHwiUzusnRYLtz7%2BVVDEtfzMAnESp%2BaUMWtAKDMexg6cVI5rRaQVYEZ2U4Hqy7g3Mt37S%2FJmVseAcKesyq62FLsDgfQVQCENQ0%2BUu%2Fya1PkBqjO2NazrvMDiFOSuDvOzWjtwlsOmtTWvbx2qe2618Q9M3QBXXhGfW%2BNvnuejHum%2FpEbmwY9v16Dx3nkpn%2FNsylN58s48TLIREnguM9XKv389gd4RA%2Fo42ariZlIYH7eJvC0UVIbnxDX4iy1bGzZjXh7ZMoLbGsoRkF0FVltV3Iv1Lwf9GkiRjAZzz%2F9qotl5nMUkjlPy5Usf2FA8b5AZ%2BqukCnlNM1VGqP4DGDoKFscAtBj%2BMF%2F0kiv%2FtUi8RZTzMLV5GEOD185guPLk%2BisKW6GswQ3p7OsoxZxseE78KQ1XkzBpohpkedQv3HirEepnaQEKXFht%2BymssyUY4HSWv6%2Bcm6tX3MIudk8IGOqUBr9zj2bHx0yej9SwbR3JpNqoktEaNXtUxD2tLc5HrjJ562B2khU3tylJf7ZcYzxyNAuApxCpMyuoHInMlwLvmiXC5%2BLnmhLuqfcj7Grr4XeYsoKSa8RWKXgnueI%2F3U%2Fcb0dvg%2FE2%2F7eZFU%2Buxvy80Im79KH7ruF5SC43YWstc1NC%2BvfEonQXExboshGOfhQBVcTfl5qvJhVLYQcm7wMncEquLxD8z&X-Amz-Signature=3d37681736877e8783588a82b785eac0c3344f39c1cee6d7632ed279911a1eef&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
