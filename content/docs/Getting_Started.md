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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPYPMWDJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFEGGE18%2BoAUmk0AqHGzNaBX4rcAF%2F8kPhjq1tMIxQIAIhAJR%2Box28E7jFswDzSvoqc%2FEKasjI23ZcXOZKmE8hbY2mKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOR849MGIr%2BMuGNI4q3APtUQeJa0Bb93oQYY6N2eZE0%2BADbFR0zuTVsdu3bdp4b9z46wo5PkfkxG%2FeAOoGn72YBf3p45REkKxb%2FRIQX08hFx6g7jugTZhRoZZebmFrxE194DxeTZg06Z8%2FU%2FvojFLsI7%2FNZ%2FgYvuuy5qy6PdHlQ3eyg9XdPRTLDFMnMSB%2BYeLtl7VX4CqjLfG3kNaP0JsRjSCyLgB%2BS3%2F0HDhybxDO1ZZWKFW5cre9i4amQ7DEhITc2MUihRKkMOtyqQney%2Bdrwz0t8bf4VGmHnsuQhKyrSHqjjRZnuY31wE5B6NwicBorT1KxwKClNtpxEawGO0H9N7shc09MXuxV1RasLhVOKKj6lfUDC19hbBUld16WDQOa6PwWMEEa31tWi3CR5nrSddkH05pOJTETUAT6dQOXQjjITTfLnOF9yFzd7SuJqwI%2BSB1uVZ0vaIy6abZ55uap9wR4vhR9Gsoa8ZaNsm36CEU4O1E%2BwZUf%2BaocDn4cZoMIPuDtx8NLnu0LDkPyGKHF7IJLxfCvgxqb7ixiDuQaSvnQnveZhqa0m96IcAVLcgkaIOVebCvK9ijbvAWeLu9eXpMDz7D82vRNMMkn%2B5yveiIs4tERxH5f5tPcv5JXPJVC1Yr5Iya3hB%2BKYTCXs9%2FEBjqkAUWFXKjegBmCLJkfa%2F%2F0KqFugqlh9t6XF5PhtI2hwlC%2BC1uc9WCp%2B3mB1ZA%2FEvjq%2FdBzOjTsep7ZMbTroUdMrFs42fSxFlpsWMhPMW3N41ovCEGidvJWztOWbUQ%2FVSOlySvkX%2FgJBXo9H8YL%2Bd63%2FjCoqsmF%2F8mTjYCt%2Ftn9cwSb7ldW7%2BSGxr3XhA0FhsYKwX8vYAZDQ3RQzDIa%2FPHxmMU4Jlyd&X-Amz-Signature=b519d4b1a636e1e6989db9a4cf5b929c0d9ceb1e05fa6060021ccbe55c25da82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPYPMWDJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFEGGE18%2BoAUmk0AqHGzNaBX4rcAF%2F8kPhjq1tMIxQIAIhAJR%2Box28E7jFswDzSvoqc%2FEKasjI23ZcXOZKmE8hbY2mKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOR849MGIr%2BMuGNI4q3APtUQeJa0Bb93oQYY6N2eZE0%2BADbFR0zuTVsdu3bdp4b9z46wo5PkfkxG%2FeAOoGn72YBf3p45REkKxb%2FRIQX08hFx6g7jugTZhRoZZebmFrxE194DxeTZg06Z8%2FU%2FvojFLsI7%2FNZ%2FgYvuuy5qy6PdHlQ3eyg9XdPRTLDFMnMSB%2BYeLtl7VX4CqjLfG3kNaP0JsRjSCyLgB%2BS3%2F0HDhybxDO1ZZWKFW5cre9i4amQ7DEhITc2MUihRKkMOtyqQney%2Bdrwz0t8bf4VGmHnsuQhKyrSHqjjRZnuY31wE5B6NwicBorT1KxwKClNtpxEawGO0H9N7shc09MXuxV1RasLhVOKKj6lfUDC19hbBUld16WDQOa6PwWMEEa31tWi3CR5nrSddkH05pOJTETUAT6dQOXQjjITTfLnOF9yFzd7SuJqwI%2BSB1uVZ0vaIy6abZ55uap9wR4vhR9Gsoa8ZaNsm36CEU4O1E%2BwZUf%2BaocDn4cZoMIPuDtx8NLnu0LDkPyGKHF7IJLxfCvgxqb7ixiDuQaSvnQnveZhqa0m96IcAVLcgkaIOVebCvK9ijbvAWeLu9eXpMDz7D82vRNMMkn%2B5yveiIs4tERxH5f5tPcv5JXPJVC1Yr5Iya3hB%2BKYTCXs9%2FEBjqkAUWFXKjegBmCLJkfa%2F%2F0KqFugqlh9t6XF5PhtI2hwlC%2BC1uc9WCp%2B3mB1ZA%2FEvjq%2FdBzOjTsep7ZMbTroUdMrFs42fSxFlpsWMhPMW3N41ovCEGidvJWztOWbUQ%2FVSOlySvkX%2FgJBXo9H8YL%2Bd63%2FjCoqsmF%2F8mTjYCt%2Ftn9cwSb7ldW7%2BSGxr3XhA0FhsYKwX8vYAZDQ3RQzDIa%2FPHxmMU4Jlyd&X-Amz-Signature=316594092372dc0c1fda120d881fba51e154d801ac82acc444ad3afb48f22957&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPYPMWDJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFEGGE18%2BoAUmk0AqHGzNaBX4rcAF%2F8kPhjq1tMIxQIAIhAJR%2Box28E7jFswDzSvoqc%2FEKasjI23ZcXOZKmE8hbY2mKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOR849MGIr%2BMuGNI4q3APtUQeJa0Bb93oQYY6N2eZE0%2BADbFR0zuTVsdu3bdp4b9z46wo5PkfkxG%2FeAOoGn72YBf3p45REkKxb%2FRIQX08hFx6g7jugTZhRoZZebmFrxE194DxeTZg06Z8%2FU%2FvojFLsI7%2FNZ%2FgYvuuy5qy6PdHlQ3eyg9XdPRTLDFMnMSB%2BYeLtl7VX4CqjLfG3kNaP0JsRjSCyLgB%2BS3%2F0HDhybxDO1ZZWKFW5cre9i4amQ7DEhITc2MUihRKkMOtyqQney%2Bdrwz0t8bf4VGmHnsuQhKyrSHqjjRZnuY31wE5B6NwicBorT1KxwKClNtpxEawGO0H9N7shc09MXuxV1RasLhVOKKj6lfUDC19hbBUld16WDQOa6PwWMEEa31tWi3CR5nrSddkH05pOJTETUAT6dQOXQjjITTfLnOF9yFzd7SuJqwI%2BSB1uVZ0vaIy6abZ55uap9wR4vhR9Gsoa8ZaNsm36CEU4O1E%2BwZUf%2BaocDn4cZoMIPuDtx8NLnu0LDkPyGKHF7IJLxfCvgxqb7ixiDuQaSvnQnveZhqa0m96IcAVLcgkaIOVebCvK9ijbvAWeLu9eXpMDz7D82vRNMMkn%2B5yveiIs4tERxH5f5tPcv5JXPJVC1Yr5Iya3hB%2BKYTCXs9%2FEBjqkAUWFXKjegBmCLJkfa%2F%2F0KqFugqlh9t6XF5PhtI2hwlC%2BC1uc9WCp%2B3mB1ZA%2FEvjq%2FdBzOjTsep7ZMbTroUdMrFs42fSxFlpsWMhPMW3N41ovCEGidvJWztOWbUQ%2FVSOlySvkX%2FgJBXo9H8YL%2Bd63%2FjCoqsmF%2F8mTjYCt%2Ftn9cwSb7ldW7%2BSGxr3XhA0FhsYKwX8vYAZDQ3RQzDIa%2FPHxmMU4Jlyd&X-Amz-Signature=85b375eb7648ed36b229d122474839b05fb4d070d0645686900da214d2fc75c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JMF3ZGH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFHefLorqdBE8czDwgR1gG3mqu8cBH9x57Ft2XTt7bwpAiBSim%2B4fR8rkvgb%2FfSrzhZxReAt6icAvvFHNKnuWgOmyCqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFNMNTAJruHYFNyoLKtwDg0vXRXvtYvphpiDFcyzG99G0u63MVVKFRKaaue8E8cTh9%2BZxs21JbJyGV%2FXXc5k7c5Q%2BPdL5dujrdVlPwmnsQbYdjn5ktsO1l%2FnD9jC5YMLKz62QNEOjRJZOMnmtuEzfptnfx7DjwJQ7KTxi8jfv%2F7vWqvk68l9am3R%2Fk3%2F5l3u5fZ3MAQkWpsOqt4aeBVZyCz2NST8kiw90kLBqSlFzMMSO%2FGRMbsdMg21IoadhTziE6xuM4ZUsdU%2FmFT9I56lc37UYm8EsAbYA7vzas%2Ba7qYkpuV7oLsUlCUsjv%2BeMLCB1BX9OxjOpUT1qYlVmL6DfHD2aYrw30HEMxjDTLl4GSOq7WByYZ34OkZ7Z3Sws77HrUIXh9y3IT2z%2FKvNR8a404lNtyKkSCvycgKcpVWj2hU4JnVDuVOudm1QhEmAZ5Xy83j2wdHvBosx8wuWSnMvdjgwopnnfVC%2BmolFuHtV4vmp5xK1Rw7knFY%2FsuR0xYYkhIEhHAHenu1S18MYpoc3I2y7Vx2uZhAWCogMgpBQgHU%2Fn7SdWoSoYotso4IbL4%2FiMfOhIU0mGK6Ug45SQ1tV%2BbJZdZWYpQePzQcgm95hHM5uf3U%2Fryujqj6VphuBVOAcYqdwUAJu7Int%2FPgMwmrPfxAY6pgGJBtNhPXjt5DHpdhszQSf86tyb%2FNR3ZOi3JUVTTYQeQRxoKKrqH%2Fq90h4I3bUggSRO2YmYlCoKBhkq%2FaWxLFa%2ByDC5fkhnuruLltYteClGcMkV1LR61ByLGq3FIcmkcUYOTtgB5p%2FUOG81pWCd%2B2OYoxri4ydZuYSTB%2Fd4GXFjJXV18k75UB2RWveI1naL5ssXLoUKVGN7%2BsxhpU57POj0vYb8ZxTr&X-Amz-Signature=7211dbbe21380b8edd779c71b7713885b6fd72f290907c89bc67a7bbc729aa7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4GJRNFK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHdjVZTrFZd3pSAkH3rnPc%2BPIeHEuyceZBltRKzbENE%2FAiBSgAMSQ80XHdT%2FzSczWNLG7z1vl7jowPE9z2SLxpo2kiqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx2YoKA3eUSN8CSdvKtwDZUfveYRsRg3WzON1JLwOh0wKQ9nq10ieK878XEvLuASHT5xwItS68zqObuboet9w6tlvVq58kSVhX9gPNCp1yPcKhyPz47WKU5r4vsHKUslDeF0gukcT1xu1mNNvS8iYFGYxMh0CwmZhUKm5OKd%2BnXe%2BZss2Xq4mjnhu3CN83R5uvTas%2FPFixYPS2sZxbLVR8Lq2qx6euHIbFr3B7XegtuAhVpGpnKziLcQLmeHWHNGZrpKIq%2B3SoVGOMtrIaG9hhh3Z00BKGwPkEXVlNT7HlUtntROq9skLzP7bjxvYYldPrbgTwT4T51wyTYsn%2Flhl6MHeSttwEbZOSBBcO%2FlsGCsgi8ksIpr%2FoYzqN9ViYmn2mn2P0AzgDNwAaDAS5QPpSK1xuXTe7TdxzVqmcttdg2mk%2Bj2x0ue%2FOcKUzK3Z7jA%2FcmUUhZMd%2BbQKz4myCXUIN9taXyfa8vzwDFEaGKOLjl1pq%2Bm8dF8IY%2FkKI0jAyvJx26hqY%2F2S7%2FDp9NJccl0bnjwzVHTc6DDUuM%2FURwbOT4BRk76oAIq69x7ypjiKrpOMM0%2F%2FPX178vZJRLacG7syPTfdiyUa2ecvpgdDgoIpb%2BJZ9Y%2FmLVySRR8tBc7hXcuzvPqZsNpBuwX%2F%2FVAwobPfxAY6pgFV6Ox%2B9HruWmnjCi3hZVgox1ITSIDN8XZfIRQGnsIEObUl9IF27wWPFbnwn5IlcXS73d6wBE1D5wT8fQflZcPxAbIqV1eJLEGkC%2FIl9C5hNng83NBd%2BlNIp15gnS9ppSIfyKSXnuJD8O0YZu2oWArjKxWheq9q194WGWamySpUKTjYLYlwo9qS4WS3OiHrzjIo8dW2U3DYnuAFzUh6NDN54Vl9V8ru&X-Amz-Signature=bf846216dfbf109922a8ecafc0dcaecc8d8c7647de8c25941eff27b15520c286&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPYPMWDJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFEGGE18%2BoAUmk0AqHGzNaBX4rcAF%2F8kPhjq1tMIxQIAIhAJR%2Box28E7jFswDzSvoqc%2FEKasjI23ZcXOZKmE8hbY2mKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOR849MGIr%2BMuGNI4q3APtUQeJa0Bb93oQYY6N2eZE0%2BADbFR0zuTVsdu3bdp4b9z46wo5PkfkxG%2FeAOoGn72YBf3p45REkKxb%2FRIQX08hFx6g7jugTZhRoZZebmFrxE194DxeTZg06Z8%2FU%2FvojFLsI7%2FNZ%2FgYvuuy5qy6PdHlQ3eyg9XdPRTLDFMnMSB%2BYeLtl7VX4CqjLfG3kNaP0JsRjSCyLgB%2BS3%2F0HDhybxDO1ZZWKFW5cre9i4amQ7DEhITc2MUihRKkMOtyqQney%2Bdrwz0t8bf4VGmHnsuQhKyrSHqjjRZnuY31wE5B6NwicBorT1KxwKClNtpxEawGO0H9N7shc09MXuxV1RasLhVOKKj6lfUDC19hbBUld16WDQOa6PwWMEEa31tWi3CR5nrSddkH05pOJTETUAT6dQOXQjjITTfLnOF9yFzd7SuJqwI%2BSB1uVZ0vaIy6abZ55uap9wR4vhR9Gsoa8ZaNsm36CEU4O1E%2BwZUf%2BaocDn4cZoMIPuDtx8NLnu0LDkPyGKHF7IJLxfCvgxqb7ixiDuQaSvnQnveZhqa0m96IcAVLcgkaIOVebCvK9ijbvAWeLu9eXpMDz7D82vRNMMkn%2B5yveiIs4tERxH5f5tPcv5JXPJVC1Yr5Iya3hB%2BKYTCXs9%2FEBjqkAUWFXKjegBmCLJkfa%2F%2F0KqFugqlh9t6XF5PhtI2hwlC%2BC1uc9WCp%2B3mB1ZA%2FEvjq%2FdBzOjTsep7ZMbTroUdMrFs42fSxFlpsWMhPMW3N41ovCEGidvJWztOWbUQ%2FVSOlySvkX%2FgJBXo9H8YL%2Bd63%2FjCoqsmF%2F8mTjYCt%2Ftn9cwSb7ldW7%2BSGxr3XhA0FhsYKwX8vYAZDQ3RQzDIa%2FPHxmMU4Jlyd&X-Amz-Signature=4d61bc9aebf960140fd9ffc86a9427fae85faf3081141b28b0806ff16a7d8fd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
