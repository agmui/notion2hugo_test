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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GUOEPJL%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T022740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxgWr%2B8or5VEdoxprqu79PIzJUV4Pyn04FgcjRcc86TAiAjDtZuswJYvOxxUV45OXR695EHMVkRdQUYFjBQli4cIir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMeqG1ankAODll4x%2BbKtwD5x0CDe2awv5WiFsi8BQMa5dEfvPSPA8h0nMrw2IzoEQKy0shwjeyK7%2FT%2B5GUg9QBfgXF6iaZ90AdLCFUvD5ga56Cy%2BqvAYdhYPV8RFFLfJ9jWYCvh70doNuo5WUr90fDJVKkwCbEPqafEC5gW3lBIl%2F8W1ZkaZEqEg6uM01hVa%2F1zcvDnAd%2BuL%2FQRoIZX6EmtD%2BNrSxGg%2BJgqxA3aU5xpcwjlKQLS9kpZFXGu%2Bw5ww6dOwPWkkl0AReekI%2BL%2FxwmqfJ9w2o7iCH1aaf8xx%2FAAHmqBLPhTXWBESL2depGDTc9xkM9sWLfeEjOtgjdK%2BS2b947ax0vDR004IM1UPl7iAa1af%2BPkN2SgqJW5uFhD16DLJ5lXNWEqWOKBRCJQyqKOnOfpC8tNeikjoOue7qvXgXkw7rGHAFntnkECI1BhC7cBb3WcdUG7xTqpRbRl%2B7HgVX9B932dst66usaENfTErfvtnwHDhW%2Bu1QYvolf5j04mfJGA5t%2F1%2BwDvrkrQQOEJq0Jqo47%2FTYDcmt09vvxa0epVIBE%2BWYGb%2Bs5UVDQsfiTnb80GQuWqFu%2F%2B0D%2FeM%2B57Q6JP2nH%2Bq8FtJovMklBAoDHhviqZn7KxzSfQE1ioRlh%2FcNwPecgioHjru8w9f2ZwQY6pgFe2U3naWzYnuQiGiHSZXh2qJhceg4hT3JrbwBVSiB6W6DGNvyFBmcC8l2TkWgnCffk7sEkY%2Ftb4BRO3sfmBmLGZJuYDk6SC6XyYpjxAlgP5MOpbHVvT4Q5acwTyEBpGUL4Cxo6cmS0z04Z%2BPq0h0%2F25EP95FM9cLw4qtfopUIWHDpB1iwPYOvdIxKx33ZPzgDWxjg9pa20b8XWmylpBsdC0SgE%2FqJ4&X-Amz-Signature=e2ad2e729b20611862d8a0dbb43be50631f2002b10e0bc3e06fc9ce37384b0ad&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GUOEPJL%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T022740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxgWr%2B8or5VEdoxprqu79PIzJUV4Pyn04FgcjRcc86TAiAjDtZuswJYvOxxUV45OXR695EHMVkRdQUYFjBQli4cIir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMeqG1ankAODll4x%2BbKtwD5x0CDe2awv5WiFsi8BQMa5dEfvPSPA8h0nMrw2IzoEQKy0shwjeyK7%2FT%2B5GUg9QBfgXF6iaZ90AdLCFUvD5ga56Cy%2BqvAYdhYPV8RFFLfJ9jWYCvh70doNuo5WUr90fDJVKkwCbEPqafEC5gW3lBIl%2F8W1ZkaZEqEg6uM01hVa%2F1zcvDnAd%2BuL%2FQRoIZX6EmtD%2BNrSxGg%2BJgqxA3aU5xpcwjlKQLS9kpZFXGu%2Bw5ww6dOwPWkkl0AReekI%2BL%2FxwmqfJ9w2o7iCH1aaf8xx%2FAAHmqBLPhTXWBESL2depGDTc9xkM9sWLfeEjOtgjdK%2BS2b947ax0vDR004IM1UPl7iAa1af%2BPkN2SgqJW5uFhD16DLJ5lXNWEqWOKBRCJQyqKOnOfpC8tNeikjoOue7qvXgXkw7rGHAFntnkECI1BhC7cBb3WcdUG7xTqpRbRl%2B7HgVX9B932dst66usaENfTErfvtnwHDhW%2Bu1QYvolf5j04mfJGA5t%2F1%2BwDvrkrQQOEJq0Jqo47%2FTYDcmt09vvxa0epVIBE%2BWYGb%2Bs5UVDQsfiTnb80GQuWqFu%2F%2B0D%2FeM%2B57Q6JP2nH%2Bq8FtJovMklBAoDHhviqZn7KxzSfQE1ioRlh%2FcNwPecgioHjru8w9f2ZwQY6pgFe2U3naWzYnuQiGiHSZXh2qJhceg4hT3JrbwBVSiB6W6DGNvyFBmcC8l2TkWgnCffk7sEkY%2Ftb4BRO3sfmBmLGZJuYDk6SC6XyYpjxAlgP5MOpbHVvT4Q5acwTyEBpGUL4Cxo6cmS0z04Z%2BPq0h0%2F25EP95FM9cLw4qtfopUIWHDpB1iwPYOvdIxKx33ZPzgDWxjg9pa20b8XWmylpBsdC0SgE%2FqJ4&X-Amz-Signature=f7a00d1b7dbdecfd8293253ce9c974bb9c17acb6f9ebaf4b80025e1e13e46518&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GUOEPJL%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T022740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxgWr%2B8or5VEdoxprqu79PIzJUV4Pyn04FgcjRcc86TAiAjDtZuswJYvOxxUV45OXR695EHMVkRdQUYFjBQli4cIir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMeqG1ankAODll4x%2BbKtwD5x0CDe2awv5WiFsi8BQMa5dEfvPSPA8h0nMrw2IzoEQKy0shwjeyK7%2FT%2B5GUg9QBfgXF6iaZ90AdLCFUvD5ga56Cy%2BqvAYdhYPV8RFFLfJ9jWYCvh70doNuo5WUr90fDJVKkwCbEPqafEC5gW3lBIl%2F8W1ZkaZEqEg6uM01hVa%2F1zcvDnAd%2BuL%2FQRoIZX6EmtD%2BNrSxGg%2BJgqxA3aU5xpcwjlKQLS9kpZFXGu%2Bw5ww6dOwPWkkl0AReekI%2BL%2FxwmqfJ9w2o7iCH1aaf8xx%2FAAHmqBLPhTXWBESL2depGDTc9xkM9sWLfeEjOtgjdK%2BS2b947ax0vDR004IM1UPl7iAa1af%2BPkN2SgqJW5uFhD16DLJ5lXNWEqWOKBRCJQyqKOnOfpC8tNeikjoOue7qvXgXkw7rGHAFntnkECI1BhC7cBb3WcdUG7xTqpRbRl%2B7HgVX9B932dst66usaENfTErfvtnwHDhW%2Bu1QYvolf5j04mfJGA5t%2F1%2BwDvrkrQQOEJq0Jqo47%2FTYDcmt09vvxa0epVIBE%2BWYGb%2Bs5UVDQsfiTnb80GQuWqFu%2F%2B0D%2FeM%2B57Q6JP2nH%2Bq8FtJovMklBAoDHhviqZn7KxzSfQE1ioRlh%2FcNwPecgioHjru8w9f2ZwQY6pgFe2U3naWzYnuQiGiHSZXh2qJhceg4hT3JrbwBVSiB6W6DGNvyFBmcC8l2TkWgnCffk7sEkY%2Ftb4BRO3sfmBmLGZJuYDk6SC6XyYpjxAlgP5MOpbHVvT4Q5acwTyEBpGUL4Cxo6cmS0z04Z%2BPq0h0%2F25EP95FM9cLw4qtfopUIWHDpB1iwPYOvdIxKx33ZPzgDWxjg9pa20b8XWmylpBsdC0SgE%2FqJ4&X-Amz-Signature=f48ee30664de4ead42a90aed2757211658112706b772b2e9a30011cb033deed6&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XRXXMZG%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T022751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5vSjifvrZ4XqBBsGRDiNm8ZCrjoPxTYSeDvog6f1YYAiAFjlAMgVdhLN8TySZcZ1LnPnPQQNu5WSf7xjNKUFg0xir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMSsMmlCRwNV46%2F%2BXsKtwDk6GHtEf5OBIR42IWI5oHzwcg2HAW4aGyVdpxsIkOREv5efa4EOyeIpVf3oJO4qz%2BKkQcvMGdYnC38hdlbrIIW0yk7mcc%2Bcw%2Bb20EcyltNdnai%2FJ0EVPRoJ3rpjngsggPHWg4lKMILm6kVRA7EKUlTmFDr%2BvB5vcZvkZeDkQfC8P1xKAwUswIDBwfjQW8Le0asyK4pOGGzLmZwOqg10MmlolK17O3KnQX%2B2sMv%2Fk3WQKApALdYh%2Ffh8HmXrJMsgCvxGIuYZI3SMtSjpuVsPT8VR86qHiid8z8AazubUNgDnkbvXMW8l42ASiXPwRe1awc1O1489997CR59ZU21lHaoTie1uwLjktDGxO2MtYBH0LQFkw2MRlT5QNcl%2BoNt2orQfF9Zk%2FgRM7g%2B6vH8EBlpqSVvqpC%2F2vw6MAes6oGmKMvSHksW8%2BtfH6fqccEbzN8yn7GKV0F7kxerYT1weOqylduQdSPf%2FeWNzjp7EnLwNz8MWQqRnj8uqxlJkZmlLDAPJlbVbzx614laFkVFPbBpsBTRHuZLV4hniyMTpbiwq2huhBPgiRKPlZyU4Tf7q2xtEMjvuFxXFp5z6zlY2JTQinkIiVCG%2FOm26Fa9GJ6PWbbWq8DwuaMhrQLAz8wvv2ZwQY6pgEjs8JQ1%2FhZasgaF4simVBUo20xfXZYct1RHzuh3jzY00XCKMguNieaXiEyEK2TF9k55ft3q%2FxgbicLxL7Gkf1Cpw7kuTHJoc1RlFHsJgFiYJy386UJxiyCdL0xvniwxCMUdr28DZ6TsKwQWHFbP3G8QInUdAAaH3rJQUCkVWKnvJ8HmKTzKUMWF6DDEKxwOFAVNgb0Vw5yWkw4pUqR39480RWTR3yD&X-Amz-Signature=a85256e745ebb4f6518773d3e9b15ce84e2b578cfa0d4666c84e14917c77ef40&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z62WGR6P%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T022752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChov6%2Bds1i%2Fca6AqkfzEKNMEqDGMNQp2LLht1b416gfAIhAME63zTDG3JpC%2F021r5Gi7SwGaNlnCLoE28I9%2FOszRxoKv8DCDkQABoMNjM3NDIzMTgzODA1IgyimGhimao99LV8d%2Bcq3AOe%2FfPdZ0AEV1NpQueEIa1up%2FgMMA4RtfhyvW6osgbC%2FbtqgNjMqCYfiEVCfsFXFdrEEKVp%2BAHh5eUIwRreIjXXddrmReRhojAsHhnjOcJJxkEX77kqLdpsFE87bzurTrnpbg36Qm7uvsSHmtoFKMPSYbWY%2FtesztG1RPq2Ihq9kWrt67uPHz65vTu79QDf5oolAym1jHLVaexMy99j1839PKGdY6duNYgDwYjajbLy5yP4VNGooG4yMkaO6M3%2BRyLiNwYoVK8UlDAthplFKGTpjIhpYRHuqqd4VHsPfE0vhrYGsnLWvYqDJoFI4QKKB%2BHl6bll8lmW6DpJH93Bv3FchblEjr%2Bek6K6%2BDUiBPxaxF0fEm%2Ffh6jEz7B7c4u61mOwGu73xMpQzmIXgncgzBHuC8jqWquxhCYkeIjJRf3S8OVrLSx6A86ObuFiUCY6JuaNXZbkTiHDrql6k24QFTx63hjekVjhWBz9oPZ3bS15H4jUIUjv5ZveDfktLyY%2FPgrx73490Hx3%2F6%2F6V4JCP3M1lIfag2HGqlwHlXQAWqtskzPr4dEwtwZMood2Uxs1NRG78WpU%2BqZamEZay6AAUmRXRgJaxdKruIcaZGwOeUpJpeZUJAN%2FBHCwtw8ZNjCB%2FpnBBjqkAf%2F%2BjBu81LhuLsRSJifoPXi3lbdkLO5KeogzXWdtdxgzod97Z9O92YADGVEwHXFTwcyy6e1YW%2F9%2F%2Feou8bfHIWp8Qjam39kDdqyGsPOAHmHysOT2hZKuXR5F0GYEFMStLUDYkPuftNPU4zQ5c9kgO%2FPABH5mHPoQh1NfUHpufqZWKxGeCc%2FH%2BPGBB7e2xiIJhdQjzkgpk5uRk24Iw6%2FIpA4NAjIv&X-Amz-Signature=5631d394253667efb1671a8705751e99f0ed079d0ead91dc5893a8b774ad4d55&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GUOEPJL%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T022740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxgWr%2B8or5VEdoxprqu79PIzJUV4Pyn04FgcjRcc86TAiAjDtZuswJYvOxxUV45OXR695EHMVkRdQUYFjBQli4cIir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMeqG1ankAODll4x%2BbKtwD5x0CDe2awv5WiFsi8BQMa5dEfvPSPA8h0nMrw2IzoEQKy0shwjeyK7%2FT%2B5GUg9QBfgXF6iaZ90AdLCFUvD5ga56Cy%2BqvAYdhYPV8RFFLfJ9jWYCvh70doNuo5WUr90fDJVKkwCbEPqafEC5gW3lBIl%2F8W1ZkaZEqEg6uM01hVa%2F1zcvDnAd%2BuL%2FQRoIZX6EmtD%2BNrSxGg%2BJgqxA3aU5xpcwjlKQLS9kpZFXGu%2Bw5ww6dOwPWkkl0AReekI%2BL%2FxwmqfJ9w2o7iCH1aaf8xx%2FAAHmqBLPhTXWBESL2depGDTc9xkM9sWLfeEjOtgjdK%2BS2b947ax0vDR004IM1UPl7iAa1af%2BPkN2SgqJW5uFhD16DLJ5lXNWEqWOKBRCJQyqKOnOfpC8tNeikjoOue7qvXgXkw7rGHAFntnkECI1BhC7cBb3WcdUG7xTqpRbRl%2B7HgVX9B932dst66usaENfTErfvtnwHDhW%2Bu1QYvolf5j04mfJGA5t%2F1%2BwDvrkrQQOEJq0Jqo47%2FTYDcmt09vvxa0epVIBE%2BWYGb%2Bs5UVDQsfiTnb80GQuWqFu%2F%2B0D%2FeM%2B57Q6JP2nH%2Bq8FtJovMklBAoDHhviqZn7KxzSfQE1ioRlh%2FcNwPecgioHjru8w9f2ZwQY6pgFe2U3naWzYnuQiGiHSZXh2qJhceg4hT3JrbwBVSiB6W6DGNvyFBmcC8l2TkWgnCffk7sEkY%2Ftb4BRO3sfmBmLGZJuYDk6SC6XyYpjxAlgP5MOpbHVvT4Q5acwTyEBpGUL4Cxo6cmS0z04Z%2BPq0h0%2F25EP95FM9cLw4qtfopUIWHDpB1iwPYOvdIxKx33ZPzgDWxjg9pa20b8XWmylpBsdC0SgE%2FqJ4&X-Amz-Signature=a41fac1e80354305708eec26065420e7522e2777e7ed00191cf37f5d841a1c06&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
