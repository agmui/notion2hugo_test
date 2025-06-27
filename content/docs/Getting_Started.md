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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQUCMD7K%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEe889SKzwOMSvWShXBkHmckQCu%2FOFzzPYrUIfthUs2WAiEArY%2BbBq1ceuL9iSDHRAgc1WBxVht1BqAkr%2FEMo5kZoIUq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDKgmBpK3Kd5ZOhZkgCrcA%2B5S%2BbqKDHiQKb9Jz%2F0Ta99n2p5etqsaLcWLWThMwI6DhFRwsbx3roHaxEFgtvc%2F4b6he3lYdOz8NPnZQnYda5ulqF40FLE2VfyZrFBmLhdAmTeDcskcspnN1MQMVg%2B%2FJk%2F6gem5AfK3fIAWuEo9YCHDSVYv8ZEN%2BZv9vR8eFekYXGXWSkGMPD3RsV2%2F2D4cO4xq0MUO7QMOJCIRwDFQFm8YkYdA%2Bc8ZE8y5iVa69oDxUb5gmJysQvV99KwHmb7%2BhpymCsjMjGTZTf2Ll7Qj%2FvFvEpwS3FSTIwY9WOtRk8GnEvx3Q0HBB52zbWvwGzGic2s2guNaI0zFWG0ElNAiTvkuv3NyTSYhAtMc7hfs5umG2uEYIQ1spGSUI6IQOe23tuKxu2bA0po8CtEg%2BVO9yuI0CL3iehSpbVQK%2FLhECtQjR07EGzuWfr%2FjBFHHOejGCR73QNxpdu5sHEsP2tzecggg44hiEgLn1jbre5E5Df28gvCKB%2F%2BTt1B6xdAnjkaP2gX0go7VPz2FLHCICGtX0ibFmq1GNV%2FOqbJt0pFQ7aIAPzLWDThjIjftSYQvrK7214G%2BCmOoFse2eD1u%2FAYKU2va8HFZ8GZHdsilm1dH%2B4HaIQJ6iD0Aa6isg1jAMML3%2BsIGOqUBA8%2BZiLOsQRgeUbQirjPQjTLGmJ80zMjOQ5kk88QnyU%2FiaWP4UqkRelLz1z5OAjbW7J3Fk5JMcyzPNvfwlhNMZqiOPhKoq4qKm%2B8yfqDRdo8UafO2EIXbbhmvtY0x3O3v9sPqJU9WiMU6OdXOsoVU5pQpYsj1NwEf%2Bgs0UmWzSX1bMAk1xb%2BJgbjmPM3pyyizM80NbSObZsqj%2FbqRTOZXKj3EPoY5&X-Amz-Signature=02f592f103d20fda7503670c9691096ce01e7b4d5eeea65f2fc346d398c2bfa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQUCMD7K%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEe889SKzwOMSvWShXBkHmckQCu%2FOFzzPYrUIfthUs2WAiEArY%2BbBq1ceuL9iSDHRAgc1WBxVht1BqAkr%2FEMo5kZoIUq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDKgmBpK3Kd5ZOhZkgCrcA%2B5S%2BbqKDHiQKb9Jz%2F0Ta99n2p5etqsaLcWLWThMwI6DhFRwsbx3roHaxEFgtvc%2F4b6he3lYdOz8NPnZQnYda5ulqF40FLE2VfyZrFBmLhdAmTeDcskcspnN1MQMVg%2B%2FJk%2F6gem5AfK3fIAWuEo9YCHDSVYv8ZEN%2BZv9vR8eFekYXGXWSkGMPD3RsV2%2F2D4cO4xq0MUO7QMOJCIRwDFQFm8YkYdA%2Bc8ZE8y5iVa69oDxUb5gmJysQvV99KwHmb7%2BhpymCsjMjGTZTf2Ll7Qj%2FvFvEpwS3FSTIwY9WOtRk8GnEvx3Q0HBB52zbWvwGzGic2s2guNaI0zFWG0ElNAiTvkuv3NyTSYhAtMc7hfs5umG2uEYIQ1spGSUI6IQOe23tuKxu2bA0po8CtEg%2BVO9yuI0CL3iehSpbVQK%2FLhECtQjR07EGzuWfr%2FjBFHHOejGCR73QNxpdu5sHEsP2tzecggg44hiEgLn1jbre5E5Df28gvCKB%2F%2BTt1B6xdAnjkaP2gX0go7VPz2FLHCICGtX0ibFmq1GNV%2FOqbJt0pFQ7aIAPzLWDThjIjftSYQvrK7214G%2BCmOoFse2eD1u%2FAYKU2va8HFZ8GZHdsilm1dH%2B4HaIQJ6iD0Aa6isg1jAMML3%2BsIGOqUBA8%2BZiLOsQRgeUbQirjPQjTLGmJ80zMjOQ5kk88QnyU%2FiaWP4UqkRelLz1z5OAjbW7J3Fk5JMcyzPNvfwlhNMZqiOPhKoq4qKm%2B8yfqDRdo8UafO2EIXbbhmvtY0x3O3v9sPqJU9WiMU6OdXOsoVU5pQpYsj1NwEf%2Bgs0UmWzSX1bMAk1xb%2BJgbjmPM3pyyizM80NbSObZsqj%2FbqRTOZXKj3EPoY5&X-Amz-Signature=666fba7e10b2404f01a85ec314db2eb974ced44131cb06c4e5ca495cb2aedf8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQUCMD7K%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEe889SKzwOMSvWShXBkHmckQCu%2FOFzzPYrUIfthUs2WAiEArY%2BbBq1ceuL9iSDHRAgc1WBxVht1BqAkr%2FEMo5kZoIUq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDKgmBpK3Kd5ZOhZkgCrcA%2B5S%2BbqKDHiQKb9Jz%2F0Ta99n2p5etqsaLcWLWThMwI6DhFRwsbx3roHaxEFgtvc%2F4b6he3lYdOz8NPnZQnYda5ulqF40FLE2VfyZrFBmLhdAmTeDcskcspnN1MQMVg%2B%2FJk%2F6gem5AfK3fIAWuEo9YCHDSVYv8ZEN%2BZv9vR8eFekYXGXWSkGMPD3RsV2%2F2D4cO4xq0MUO7QMOJCIRwDFQFm8YkYdA%2Bc8ZE8y5iVa69oDxUb5gmJysQvV99KwHmb7%2BhpymCsjMjGTZTf2Ll7Qj%2FvFvEpwS3FSTIwY9WOtRk8GnEvx3Q0HBB52zbWvwGzGic2s2guNaI0zFWG0ElNAiTvkuv3NyTSYhAtMc7hfs5umG2uEYIQ1spGSUI6IQOe23tuKxu2bA0po8CtEg%2BVO9yuI0CL3iehSpbVQK%2FLhECtQjR07EGzuWfr%2FjBFHHOejGCR73QNxpdu5sHEsP2tzecggg44hiEgLn1jbre5E5Df28gvCKB%2F%2BTt1B6xdAnjkaP2gX0go7VPz2FLHCICGtX0ibFmq1GNV%2FOqbJt0pFQ7aIAPzLWDThjIjftSYQvrK7214G%2BCmOoFse2eD1u%2FAYKU2va8HFZ8GZHdsilm1dH%2B4HaIQJ6iD0Aa6isg1jAMML3%2BsIGOqUBA8%2BZiLOsQRgeUbQirjPQjTLGmJ80zMjOQ5kk88QnyU%2FiaWP4UqkRelLz1z5OAjbW7J3Fk5JMcyzPNvfwlhNMZqiOPhKoq4qKm%2B8yfqDRdo8UafO2EIXbbhmvtY0x3O3v9sPqJU9WiMU6OdXOsoVU5pQpYsj1NwEf%2Bgs0UmWzSX1bMAk1xb%2BJgbjmPM3pyyizM80NbSObZsqj%2FbqRTOZXKj3EPoY5&X-Amz-Signature=843a317c81252feb7cd8d3b21cb6132b009dc9a967c39ef7ad627950756b196f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJALDI4D%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T170739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqIkIw7BScD%2BlYYL7vg89IuquTwxlBl4J%2BlMTreWt0BQIhAKb%2FNzICvWe1crvZKr1uewSPN%2B8M8TwhwgV16hCCWj3wKv8DCHkQABoMNjM3NDIzMTgzODA1Igw1FHdzZMQuuSpsYFcq3AMQacZFZZ6gxvU2An8PtlHdjOmML8PQPgOebAypHD5YERg0V3dLCbCkO0OXl3TgTiIH1MXo0bHSYQclZGSNuN23PsFF02%2F%2BGq74m9ZFtoWtFkq5dWkEblSfVmk2WORzs0NoERjdU%2Bm7cU7EYfJ3z6JvEimG36R9D1thxMA8s9aBzuqrRkMfqJyhbe8rh88YhY3R8JRGnD33QmrpL0Dau6IahoDaOTD4fVL%2FUlOtfzvEYSZwlUtnIJRqVEpZ6ki68WMAFbv3g7yMEWyZQWNQZTEPL5Mp3s7044xsARRt0%2FtjWQsAH9%2F0xG36alxWvsHIGWGJOTch7fUv7anxAewKJ2UL7M3rmLpWxbAgDmdkGfaEdh8hV%2BHYzdMHS8dzQC9UGpzFZ0hHOgvK0nSlDDbIVvMbxku1fz9oFiwydYJIFk%2F2Lzu6tvREWUMxmal%2BuFlOnBE47z0jWEaLiDjC4ZZFIzyo3EoPI7Ym5tNHvEeDpLqqX764OfPI7jnT8psk4EG0fCT9nd2dR0uW30E1yNG%2Bh7oiVf9w6SQ7KIg4TTZPU7Sjx5iuW5AL5j65WrMIAiSL0ZGYYUSG4d3kOmwi41sYt6aW3XzIkCNShK8NtB8yd3kgulPdiN1OEhw%2Fj5riyjCM9%2FrCBjqkAU6vabu2t3Hba%2FJJbTlWu3w6%2BtD7%2B0jJZhNVosPYtxf3EKVnI81N61%2FWqUxVg9dN8InZY9kslvYLefWk5Ff%2Fs46mIZntQ%2BBgqWJbperykwGOMIRa%2FfKOfHQafSqnSeTjNAUH8bDhKN9MyJwyN7Zfr966pnAQx6wpwCfIg%2BunX%2FICz0eJWadie6%2BaOtZLuhRRv54NaeLVtlgBmOPfCI4ibn%2BSEKF6&X-Amz-Signature=2d81d1ae91e30712fdb99986fbf85c40752995e55fa04a2997f2a94bdf1033cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IBKVF44%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T170739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpEHCjurQvOSeSFqS3CGZWNH8DUGZ6zr%2BfGtcwNSMzjAiEA%2B%2F7PjrbtQOW6k3NU6HW5lnzTn9zJzSsW%2FHW660Ray9Qq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDHlzHLULytmhRE7xASrcA72oB4mxt%2BqS0THJ7jyoznfpIX334ym%2B%2FvQ7xp9GcGnT%2FGsvtqoNObwsnMehOZrls%2For%2BEEDifFR2PYefEWm0mXWepRywRaWnH0eA3w3KJsu4yecAG%2F8cIaCBasyMkvKkhuvFi7AVDyYYvN%2BGLml8gIb0KTqMy6PZFq81QiUQOAyXrf%2FZimcBcQK3xZFQtubppmaNBaIOSND9mIMBnOW5rFcHzd6s7nqD0j6mHggNVhVdcjU11P8q3SLXAaKfKZbNlNBibbfml%2FxaSNopi4FYczhYNvqBY6sYO2VzV4NDy1C6PTna1aDj5RYYA5feRFEBu3i%2BNpS%2Bne8FnCAeDC5stHFQFit7QXLlOFx39XoUcyHslHfX1WX%2FHOVaeeUndR22C%2B1%2FX1FxGbnCUpW5qik8DgeowSPdowKlkQkdgIyzXIghvYSjiOtbITT3yITpU2aAhBp5DVhZOcgLDT7CNj%2FsVrC3ya69ZJxIXyP9H4ju6wuh919moP5VwSlmHvtMgrUuchgh2FAk5CXILfp39fGF4wskqhPmlrfJgaF1D3uApeAugfd8OoMewJ1TaXoqMymlqajkE7WlRDdphgd8ZpHbY910P9Qs%2B9I9PIwynrwNQVN4psGyaKi3I3tLN38MNz3%2BsIGOqUB7s4oyE%2BddpPYV0LRfKMUUXK0GjzdxX%2BDR2AvaRK9qZBTVAOhASCWiSbp8vMKYj0E3He4Biu%2F2bt9UH3yXNAyBtiRwHsPf5m4ddHK8YCv0xfUfjgALIM7oWBznG%2FsqWNlIa4QwTfMi61snIHjvx6%2FaXAzBKaEqAq%2BzagqMzocQfcZ%2Bu%2BrlRwfQwknhgrNsdMfr1EoPXVehC4Vp8zaKaO4UBe3wOre&X-Amz-Signature=f555a185ae86da69a99ca9fa055f82b7117beea85ab6b9a8e122844cb7430199&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQUCMD7K%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEe889SKzwOMSvWShXBkHmckQCu%2FOFzzPYrUIfthUs2WAiEArY%2BbBq1ceuL9iSDHRAgc1WBxVht1BqAkr%2FEMo5kZoIUq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDKgmBpK3Kd5ZOhZkgCrcA%2B5S%2BbqKDHiQKb9Jz%2F0Ta99n2p5etqsaLcWLWThMwI6DhFRwsbx3roHaxEFgtvc%2F4b6he3lYdOz8NPnZQnYda5ulqF40FLE2VfyZrFBmLhdAmTeDcskcspnN1MQMVg%2B%2FJk%2F6gem5AfK3fIAWuEo9YCHDSVYv8ZEN%2BZv9vR8eFekYXGXWSkGMPD3RsV2%2F2D4cO4xq0MUO7QMOJCIRwDFQFm8YkYdA%2Bc8ZE8y5iVa69oDxUb5gmJysQvV99KwHmb7%2BhpymCsjMjGTZTf2Ll7Qj%2FvFvEpwS3FSTIwY9WOtRk8GnEvx3Q0HBB52zbWvwGzGic2s2guNaI0zFWG0ElNAiTvkuv3NyTSYhAtMc7hfs5umG2uEYIQ1spGSUI6IQOe23tuKxu2bA0po8CtEg%2BVO9yuI0CL3iehSpbVQK%2FLhECtQjR07EGzuWfr%2FjBFHHOejGCR73QNxpdu5sHEsP2tzecggg44hiEgLn1jbre5E5Df28gvCKB%2F%2BTt1B6xdAnjkaP2gX0go7VPz2FLHCICGtX0ibFmq1GNV%2FOqbJt0pFQ7aIAPzLWDThjIjftSYQvrK7214G%2BCmOoFse2eD1u%2FAYKU2va8HFZ8GZHdsilm1dH%2B4HaIQJ6iD0Aa6isg1jAMML3%2BsIGOqUBA8%2BZiLOsQRgeUbQirjPQjTLGmJ80zMjOQ5kk88QnyU%2FiaWP4UqkRelLz1z5OAjbW7J3Fk5JMcyzPNvfwlhNMZqiOPhKoq4qKm%2B8yfqDRdo8UafO2EIXbbhmvtY0x3O3v9sPqJU9WiMU6OdXOsoVU5pQpYsj1NwEf%2Bgs0UmWzSX1bMAk1xb%2BJgbjmPM3pyyizM80NbSObZsqj%2FbqRTOZXKj3EPoY5&X-Amz-Signature=8fd9ea6b6c45f51e84b7a2188d1ac5eb45c7d74d3a7fdd720907b3c58f51fb1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
