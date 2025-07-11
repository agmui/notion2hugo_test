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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OIULNBS%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T071147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZdjBIRukzm%2BU3CksE0YCSOp09Mi5Wftz06nMNGZbJ7AiEA1VNI1qEIXf7WGGW%2FHQlSoZtfh%2FsDYT%2BCEKYVY1HyI%2FQqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxf1MxyrasyZN8EuircA2asNtrWpCr1AI0yuy7BGKY4DgmWCMRQ2jBdWSwyLPFGMDsbkJ1euK1Hok3f6g4XdguvUH9e43VtQnr3fWu7KugYGm0U1vlIH171o99DlrpDiEwIBCbtoHG1hq4pvENoONKUPz0VUY7U5GHQpP1UhcpfrbkzqllfQbePTF0CTIxT8aqhN3sAM%2FSv9aQQTPL3eWzPdRvi%2BdAh4lUu0bRkJ7qjOwUnLfrcbco2XkGjjeb9srTCSH5xBC97UlUQAwP6HmRWxWEZkHBJryogHEixx3abvJ%2B8yZ%2B5BfKBGyOzHoms%2BzEI0LbTCxaxpiwasxGYotWuxRevkl58iyagPn5U2VVm%2F99W5hiemEf%2FmNsK9m6cniztApvjfnkkMw2zKOmwIEBKYhfnBRS2TN6fzXURaUfJjCtHm8v7L1L5%2FkO7P1WvW6G8SP90PWdYzFma9mQgK%2FxfUpKRKy0hewGGkJ2xKQXyGloAYz%2BrW5%2FmhUsn2x73x4xFICgzEflDrxnu91jy3jAuc4HHVU%2Bsl2dBG9OpKL4AS531UQefdSWELVHx%2B0y%2BqI%2F5gkX6djT5ki3df8MRfHmu5C30MJagWccavDwSSbF87hdFrtARNt1G6I94IRGJomfvhswKgEa6zRgvMNjSwsMGOqUBb3qSN7EQrNNPiehNQ0ewfaZPg0m7u2HIv7zSqD1mpNCuNpkcYwFYC2VnYjKXbGXS2qZKIW1cHQraCqQcbHPyl4GavFYc%2BGwDVMYgMjWsQt1pMVa%2Bi%2FoIF0rydb9ofv%2FLJ5hu8Wiu8PNmW6YEss8svsTpj7A1ahMrY9p5%2FO%2F1HS0D%2BK%2Fx4QFINYA3SsNpdn85CIdocptqwYU62VLwtsnZ9IYbLisl&X-Amz-Signature=bba04c4960d18502e326b3e42bd4a0cc2d6662cf6b6c5c8b036e33675b4dde67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OIULNBS%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T071147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZdjBIRukzm%2BU3CksE0YCSOp09Mi5Wftz06nMNGZbJ7AiEA1VNI1qEIXf7WGGW%2FHQlSoZtfh%2FsDYT%2BCEKYVY1HyI%2FQqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxf1MxyrasyZN8EuircA2asNtrWpCr1AI0yuy7BGKY4DgmWCMRQ2jBdWSwyLPFGMDsbkJ1euK1Hok3f6g4XdguvUH9e43VtQnr3fWu7KugYGm0U1vlIH171o99DlrpDiEwIBCbtoHG1hq4pvENoONKUPz0VUY7U5GHQpP1UhcpfrbkzqllfQbePTF0CTIxT8aqhN3sAM%2FSv9aQQTPL3eWzPdRvi%2BdAh4lUu0bRkJ7qjOwUnLfrcbco2XkGjjeb9srTCSH5xBC97UlUQAwP6HmRWxWEZkHBJryogHEixx3abvJ%2B8yZ%2B5BfKBGyOzHoms%2BzEI0LbTCxaxpiwasxGYotWuxRevkl58iyagPn5U2VVm%2F99W5hiemEf%2FmNsK9m6cniztApvjfnkkMw2zKOmwIEBKYhfnBRS2TN6fzXURaUfJjCtHm8v7L1L5%2FkO7P1WvW6G8SP90PWdYzFma9mQgK%2FxfUpKRKy0hewGGkJ2xKQXyGloAYz%2BrW5%2FmhUsn2x73x4xFICgzEflDrxnu91jy3jAuc4HHVU%2Bsl2dBG9OpKL4AS531UQefdSWELVHx%2B0y%2BqI%2F5gkX6djT5ki3df8MRfHmu5C30MJagWccavDwSSbF87hdFrtARNt1G6I94IRGJomfvhswKgEa6zRgvMNjSwsMGOqUBb3qSN7EQrNNPiehNQ0ewfaZPg0m7u2HIv7zSqD1mpNCuNpkcYwFYC2VnYjKXbGXS2qZKIW1cHQraCqQcbHPyl4GavFYc%2BGwDVMYgMjWsQt1pMVa%2Bi%2FoIF0rydb9ofv%2FLJ5hu8Wiu8PNmW6YEss8svsTpj7A1ahMrY9p5%2FO%2F1HS0D%2BK%2Fx4QFINYA3SsNpdn85CIdocptqwYU62VLwtsnZ9IYbLisl&X-Amz-Signature=802954d9c9a92ee5f2349877769790e9c7b0a41b03e115394acee8cfa27a15f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OIULNBS%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T071147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZdjBIRukzm%2BU3CksE0YCSOp09Mi5Wftz06nMNGZbJ7AiEA1VNI1qEIXf7WGGW%2FHQlSoZtfh%2FsDYT%2BCEKYVY1HyI%2FQqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxf1MxyrasyZN8EuircA2asNtrWpCr1AI0yuy7BGKY4DgmWCMRQ2jBdWSwyLPFGMDsbkJ1euK1Hok3f6g4XdguvUH9e43VtQnr3fWu7KugYGm0U1vlIH171o99DlrpDiEwIBCbtoHG1hq4pvENoONKUPz0VUY7U5GHQpP1UhcpfrbkzqllfQbePTF0CTIxT8aqhN3sAM%2FSv9aQQTPL3eWzPdRvi%2BdAh4lUu0bRkJ7qjOwUnLfrcbco2XkGjjeb9srTCSH5xBC97UlUQAwP6HmRWxWEZkHBJryogHEixx3abvJ%2B8yZ%2B5BfKBGyOzHoms%2BzEI0LbTCxaxpiwasxGYotWuxRevkl58iyagPn5U2VVm%2F99W5hiemEf%2FmNsK9m6cniztApvjfnkkMw2zKOmwIEBKYhfnBRS2TN6fzXURaUfJjCtHm8v7L1L5%2FkO7P1WvW6G8SP90PWdYzFma9mQgK%2FxfUpKRKy0hewGGkJ2xKQXyGloAYz%2BrW5%2FmhUsn2x73x4xFICgzEflDrxnu91jy3jAuc4HHVU%2Bsl2dBG9OpKL4AS531UQefdSWELVHx%2B0y%2BqI%2F5gkX6djT5ki3df8MRfHmu5C30MJagWccavDwSSbF87hdFrtARNt1G6I94IRGJomfvhswKgEa6zRgvMNjSwsMGOqUBb3qSN7EQrNNPiehNQ0ewfaZPg0m7u2HIv7zSqD1mpNCuNpkcYwFYC2VnYjKXbGXS2qZKIW1cHQraCqQcbHPyl4GavFYc%2BGwDVMYgMjWsQt1pMVa%2Bi%2FoIF0rydb9ofv%2FLJ5hu8Wiu8PNmW6YEss8svsTpj7A1ahMrY9p5%2FO%2F1HS0D%2BK%2Fx4QFINYA3SsNpdn85CIdocptqwYU62VLwtsnZ9IYbLisl&X-Amz-Signature=f7ef9ac6d0674268abf71d34556e8a09d1b1735db1f2f87f3847c959cafe0db6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGZK2TSX%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T071152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGHDFDjL%2BtBTeg2G0R8jBAZjh0yaJUcID00khm7BXjfkAiBO5Ny%2FexUsXdaNxyDHkVRMX81wEsOFcWsVh2feBRpvsiqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyQj6%2B1s5pn%2FQPHS9KtwDpmiXIWJEh9vkHhp5rWLhtkNUWVfyJ%2F260pqvKAIU7EHJXghGZ4T%2BS67hi50AyuIxlM1gNJqnXoxk3rr4EKPN7xqE5ZDOCtTrC0ObyuUxKfpN%2Fb7RK4DRu4jJ%2FtROy9XhO0y5B%2B5VUMwk5BFYc9Rem21iTN1MA0wUBocTLSgpJVdmyQqTtWoW3FTrvFtGkiwKcccoprvK6ANu0CSXmkxqrzqD6yeR4AqRGK%2F2sAYri4AiJheTZmJVh%2BKq5AT4r7%2FnoxHbjDDKVMfFwSrnygSzcVCwSPhBqJDwHDUT5HglsyyN2WkJa99RV5w3WZBuUUwof9Gsxn1ThAbrsZ2jnrnYvgWqnpqCEWtkb8S6R%2FwIcbOlHMVqvtio%2BHlzPbEgxtDdabWHUMFw6uS9tHBLDHY5r8toNY5aHn2LUS7Do64xfRqBhXDnxKwE2PpKSCuJujhwrRt8iG2kGoQmVInerdQDHXF8tPhIdJOokxUftl%2FJUtxTFt21HIS%2FcKQBETBMup7eMO5sAAc4ZamwOrBTlZIUNJfKYWA4TPfYl8FpHBKB1lgSEEdGIEcP9KUfhJct6gjxkAAXmquo8Khi06%2BV7gQ8tJK320wyRZctvF3zuumgdpatevZCGhDxKZ9EbIEww9LCwwY6pgGWJiqnfpLZTx4tALKlyEk5d58%2Bzwc1ZIGAQeVOGb1i0iOrDEaHt90IlOU6jFZUf1e3znntje4iITHUw68fopbfRik%2FCl0V7So4n%2FU%2BqQJnu0FYr9UuxNL4H1UjgOEJHB2EQY64GgYDiTE0b4bweQ68LWHYxJ%2Bdhw6%2F2KYaOtzZyYyNMjhgYogXhL29rk1XjsxS3rnyyMbqfn1HNfSOJNAEYzloWvhM&X-Amz-Signature=31baf4bc1841f856983fa5465d3f3cde62b0c0633b95df09e589e8f98072c863&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE6TJ7F4%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T071153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWve6hwIKkr0eVXMoerIK91G9mI1u6nDLllnUkao2iDAIgR30Z5q6Wogm4hIcHTomNtsr8racTefdfnZaFdnrka5sqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbUsmgL6WwcpxBsICrcA%2FVld5flAS6C3hi2L%2Biw87OVMCeJIZU5bk27Nt2OXL6UN2KC8Rk%2FYlRi6h%2BO%2F%2Bcjd3YZCJusL0x6g2EYLHVETWr9Oe0dfTxq1R1EHPTYQdFH4uS1l4UZXK4lAMt5XyWnEhVjTkwUnrmauoMuwx4QD%2BtPBhMrRt7vuJnlHyzvNpZ9U4up21HmrYxkTExXHkF2mREKxGr1vagHeNfpaejclYqbDefICQPVrc1h4EkUB%2FVN%2FhbqiG%2Bi%2BtsGdqL4PwRQvtSVB78EsfwkxXT6sxFoHUs2dX8mbRxwXplhTvS11uDInv8XY9R0USeFKv0ZRP5najtJTLG1ChI3EquSfpDkQ%2FrpSVSg%2BZAuWk4RVcgbFcMCnPhmwATQ14y5Gb%2FBEkvdGy8zKAZ0cUkNaJWN5zVHB11ZABUCSd%2BmdPUG7jcN81%2FY0XoyGoM1fGOpQtNXsTGEIItaoXOsojSeoyrBeEyz2fQ3b5CTLpOSqLGbDBcd%2FSFppZePBwWeSmFv6ZfGZ32SdCfh2XAH00w3TPAFMQSQCv5iM5oCfpTcxbKVtd5OVLzHLt4AP%2BBl7lbzEzoDQpsP5jYQWR4A1xATTytljUsSrVw9Ae86JEPwx2ysGlz2aqPMT%2FanfUkQ5LeK%2BmR2MLbSwsMGOqUBAIWL8p2obLlKabBCzf3HH30biLLghcjofvlKxpgKxUI%2FJ3NCYSa8HIw1Rrac%2FvpVIelp14Pu%2FmISamd10Mea%2BsPtE25L8a%2BGfpEC6mk8smZNtEdAYT7owVvCfRNvip8oitIdS%2FbjnVSkPlgAudi30oGwymzgqARipVVCKfYf5G4piuTWI6uHKu7X0Vr1qKcbaTrSvfl1bUbJ80JwfwXJrQbVkQ53&X-Amz-Signature=4ce4ebbf3d282a42611a3100bbfb644093f041556e17939b3b1b9f6df4fb11e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OIULNBS%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T071147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZdjBIRukzm%2BU3CksE0YCSOp09Mi5Wftz06nMNGZbJ7AiEA1VNI1qEIXf7WGGW%2FHQlSoZtfh%2FsDYT%2BCEKYVY1HyI%2FQqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxf1MxyrasyZN8EuircA2asNtrWpCr1AI0yuy7BGKY4DgmWCMRQ2jBdWSwyLPFGMDsbkJ1euK1Hok3f6g4XdguvUH9e43VtQnr3fWu7KugYGm0U1vlIH171o99DlrpDiEwIBCbtoHG1hq4pvENoONKUPz0VUY7U5GHQpP1UhcpfrbkzqllfQbePTF0CTIxT8aqhN3sAM%2FSv9aQQTPL3eWzPdRvi%2BdAh4lUu0bRkJ7qjOwUnLfrcbco2XkGjjeb9srTCSH5xBC97UlUQAwP6HmRWxWEZkHBJryogHEixx3abvJ%2B8yZ%2B5BfKBGyOzHoms%2BzEI0LbTCxaxpiwasxGYotWuxRevkl58iyagPn5U2VVm%2F99W5hiemEf%2FmNsK9m6cniztApvjfnkkMw2zKOmwIEBKYhfnBRS2TN6fzXURaUfJjCtHm8v7L1L5%2FkO7P1WvW6G8SP90PWdYzFma9mQgK%2FxfUpKRKy0hewGGkJ2xKQXyGloAYz%2BrW5%2FmhUsn2x73x4xFICgzEflDrxnu91jy3jAuc4HHVU%2Bsl2dBG9OpKL4AS531UQefdSWELVHx%2B0y%2BqI%2F5gkX6djT5ki3df8MRfHmu5C30MJagWccavDwSSbF87hdFrtARNt1G6I94IRGJomfvhswKgEa6zRgvMNjSwsMGOqUBb3qSN7EQrNNPiehNQ0ewfaZPg0m7u2HIv7zSqD1mpNCuNpkcYwFYC2VnYjKXbGXS2qZKIW1cHQraCqQcbHPyl4GavFYc%2BGwDVMYgMjWsQt1pMVa%2Bi%2FoIF0rydb9ofv%2FLJ5hu8Wiu8PNmW6YEss8svsTpj7A1ahMrY9p5%2FO%2F1HS0D%2BK%2Fx4QFINYA3SsNpdn85CIdocptqwYU62VLwtsnZ9IYbLisl&X-Amz-Signature=8e5b7dd4c20b4b009204d22aa36cd429308c8aa3804fa10bd089999fdc4d4b4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
