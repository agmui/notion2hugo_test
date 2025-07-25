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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5BGHPUK%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIC4j7jK82PLZpvx6bh%2FLdDKu84t%2FBUIGUNtdFOHXHgXnAiBM2NjbYM2lVeRC2WsGDhAgyMWOhcWdFSvhr5If%2BNpjcSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMrsRw%2FK%2BPotOrWGltKtwDuWjvlwe4HmKAjxKAiR5eCrAlKw42xDZ57mfTsJ%2FqdLrU31LLxO86Dz93IBfhGrVVGneSsC3beRtI5dzbyaPo5YgCV1H7r0c15lFlvjBMFyXxK1cGpaTLQuaPrz34flmEDXra6ly9aVZWNepgkDjDX3bf5wFurc8eeXf%2B9A6AmSC3ZkrSD31YEZx1u%2FVwhddUuZFnp41nPcqUTsOrzJn2Rsza6Zhz7k1nSUZbYi%2Bqkb40sWjxfPethJu1wej%2Bw5VB3zflXAZ7RI239QCbDbwUaiMKbqIqFTT1s5AX2ppb7j8cCQyIOJhAcR4plHA%2B7Jeax2WQv780mTXDdIq1cJ2g1%2F9ciuIuIW5RAgR5ZO4OrHPppbT2BGI%2FT%2BtORZLiGBb0BIOQvjm6KapL1ZTuguNqacRfxcX4fJX1Kkjxsp5FeZjQRr5OQs24KLI7tgzDqElJ4dlfzhmLUW%2Fl8qTbNkxQ9WNyYFnm2bUmfz0sMfv4FuX5avFntqFV7KmVV14Eq8P92B3mcV4YcWARrEHJuZyIgzXihUtKwtMoV5o6J8gTqr9iTS4Y5wuf5bA%2FlQyjoSRzUnlPQzV2mvDVAEh2FcPmz9QjFPYilioJBXNV5mmCyDioN500DLmwMlONXJgwqr2OxAY6pgEvo6jTc5l%2Bmq6UC8kHcnRgUx2N1wG8G06ahSNQviZ5yYhC5WFw%2BiYm0HtQWTCJHoZqFBJ%2B8RqkqrKJpXfUj7iGZqWDTkqQABqlbeYcrWpGWxCLZagmdQeR7foV3yJ9BWx6E8fSLMbuFdra7EivdiGvG52oDFFyEH054%2Frs4iXIyK2pog2%2FjciRuBiUGn3Z2RTSawRyZ12B96%2BedVV1XlR18nsH0mlP&X-Amz-Signature=9bc20d250909ea4f187589b5b9b7072f5bc88bb68950afbd2214a5f02a2d2bdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5BGHPUK%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIC4j7jK82PLZpvx6bh%2FLdDKu84t%2FBUIGUNtdFOHXHgXnAiBM2NjbYM2lVeRC2WsGDhAgyMWOhcWdFSvhr5If%2BNpjcSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMrsRw%2FK%2BPotOrWGltKtwDuWjvlwe4HmKAjxKAiR5eCrAlKw42xDZ57mfTsJ%2FqdLrU31LLxO86Dz93IBfhGrVVGneSsC3beRtI5dzbyaPo5YgCV1H7r0c15lFlvjBMFyXxK1cGpaTLQuaPrz34flmEDXra6ly9aVZWNepgkDjDX3bf5wFurc8eeXf%2B9A6AmSC3ZkrSD31YEZx1u%2FVwhddUuZFnp41nPcqUTsOrzJn2Rsza6Zhz7k1nSUZbYi%2Bqkb40sWjxfPethJu1wej%2Bw5VB3zflXAZ7RI239QCbDbwUaiMKbqIqFTT1s5AX2ppb7j8cCQyIOJhAcR4plHA%2B7Jeax2WQv780mTXDdIq1cJ2g1%2F9ciuIuIW5RAgR5ZO4OrHPppbT2BGI%2FT%2BtORZLiGBb0BIOQvjm6KapL1ZTuguNqacRfxcX4fJX1Kkjxsp5FeZjQRr5OQs24KLI7tgzDqElJ4dlfzhmLUW%2Fl8qTbNkxQ9WNyYFnm2bUmfz0sMfv4FuX5avFntqFV7KmVV14Eq8P92B3mcV4YcWARrEHJuZyIgzXihUtKwtMoV5o6J8gTqr9iTS4Y5wuf5bA%2FlQyjoSRzUnlPQzV2mvDVAEh2FcPmz9QjFPYilioJBXNV5mmCyDioN500DLmwMlONXJgwqr2OxAY6pgEvo6jTc5l%2Bmq6UC8kHcnRgUx2N1wG8G06ahSNQviZ5yYhC5WFw%2BiYm0HtQWTCJHoZqFBJ%2B8RqkqrKJpXfUj7iGZqWDTkqQABqlbeYcrWpGWxCLZagmdQeR7foV3yJ9BWx6E8fSLMbuFdra7EivdiGvG52oDFFyEH054%2Frs4iXIyK2pog2%2FjciRuBiUGn3Z2RTSawRyZ12B96%2BedVV1XlR18nsH0mlP&X-Amz-Signature=a536081b976d8a4f447163363618cd40db902e5a038b4f43acce922244ad26ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5BGHPUK%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIC4j7jK82PLZpvx6bh%2FLdDKu84t%2FBUIGUNtdFOHXHgXnAiBM2NjbYM2lVeRC2WsGDhAgyMWOhcWdFSvhr5If%2BNpjcSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMrsRw%2FK%2BPotOrWGltKtwDuWjvlwe4HmKAjxKAiR5eCrAlKw42xDZ57mfTsJ%2FqdLrU31LLxO86Dz93IBfhGrVVGneSsC3beRtI5dzbyaPo5YgCV1H7r0c15lFlvjBMFyXxK1cGpaTLQuaPrz34flmEDXra6ly9aVZWNepgkDjDX3bf5wFurc8eeXf%2B9A6AmSC3ZkrSD31YEZx1u%2FVwhddUuZFnp41nPcqUTsOrzJn2Rsza6Zhz7k1nSUZbYi%2Bqkb40sWjxfPethJu1wej%2Bw5VB3zflXAZ7RI239QCbDbwUaiMKbqIqFTT1s5AX2ppb7j8cCQyIOJhAcR4plHA%2B7Jeax2WQv780mTXDdIq1cJ2g1%2F9ciuIuIW5RAgR5ZO4OrHPppbT2BGI%2FT%2BtORZLiGBb0BIOQvjm6KapL1ZTuguNqacRfxcX4fJX1Kkjxsp5FeZjQRr5OQs24KLI7tgzDqElJ4dlfzhmLUW%2Fl8qTbNkxQ9WNyYFnm2bUmfz0sMfv4FuX5avFntqFV7KmVV14Eq8P92B3mcV4YcWARrEHJuZyIgzXihUtKwtMoV5o6J8gTqr9iTS4Y5wuf5bA%2FlQyjoSRzUnlPQzV2mvDVAEh2FcPmz9QjFPYilioJBXNV5mmCyDioN500DLmwMlONXJgwqr2OxAY6pgEvo6jTc5l%2Bmq6UC8kHcnRgUx2N1wG8G06ahSNQviZ5yYhC5WFw%2BiYm0HtQWTCJHoZqFBJ%2B8RqkqrKJpXfUj7iGZqWDTkqQABqlbeYcrWpGWxCLZagmdQeR7foV3yJ9BWx6E8fSLMbuFdra7EivdiGvG52oDFFyEH054%2Frs4iXIyK2pog2%2FjciRuBiUGn3Z2RTSawRyZ12B96%2BedVV1XlR18nsH0mlP&X-Amz-Signature=ab679ece0ff2b93960024fcfb2573dc378ac7d42d4996967b5ef5d810186210e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RMOUR5U%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQC20CPyjqGse4%2Bkkut%2FfyRHZ6h4jWqAMvp%2FCMK9LoVeVAIhAJsv51xIYYTvqu1nYR%2FnycP2rPerkOGQzBt7LA2qQYknKv8DCEgQABoMNjM3NDIzMTgzODA1IgwezJQyqiiXumw5aooq3AN5JXxO6m1%2Fh6VTCMgkLy3fQytqdtyu%2B2JNeiLQTPy%2BHXjlFkFnscVFKfrHQU6fLF5SV5NfYX82Qwau4cUlwPpKBcfTnAukovbXirqj62WJmeHOKR5CxHiHX4nagBiMsMmbBDUvODpPcHb6OUhCR5ZANy1agqRMs2KWkw9HMXdVUhaGZytreK%2F4nRKbD8Mi9N3XJdoiYnQN%2FZM1YTJ8PayRrZ5o2cxr7rDrHzQ7g%2BoEppA25Ic1EizdeAqWXMnldr%2F3y%2BZK%2B%2Bnx5MZsxHKZwkh%2FOPsXcqx58MGlJZJWhDtFgHWVanznsyHSxAcolGVPdaUDMvtqrbZ2M4ayyHSwbw5eiQtzfXu9CFEbaDb85t8b3N4pDmG6xX9wa6JuUnp0Gpfl%2BGRPybnq6CQqVP91EQsqVDAxxTfz9umkMWpzTr7AL4LRiRIcirgjaTBkysyPRrT4dImt%2FS7CpXzpzDPIrvf8ndcKIXhW0gFM4JHwz1YfL09OfDt6UvMXQpjTJVTIZ6ojEazD6WRgyYWfp2CzxsJ1OB0ZR%2BrGwuDIQ7%2BR0%2FGHbBQcWohIjR5NLBBqAYiU051D0mVXbjJDYVwnOPENDupkN6yCjN4NHQxCds8kdSLh1lfuWQq6uvYGC6FwrTDHvI7EBjqkAd%2B4fOVuXCLspK%2F36MxXSiVDyytKT1iWzL3WEUWLvOV8Uym%2Bav2sEMnqNK61uMlX9VVp1nret6Gmxi9IMHg0otH9i61fN00f46u3ON9RjqP4LHCtVsesMxsaH0xq4ksAdzwTPzrrydWXqB2%2B4HUo5It8FSUP75j9XqIiU86htyZv6WKzg65OsB9nsA8BR5YBMmwE69fSeYuC41oQYv6QxyHywOnz&X-Amz-Signature=3dcc8e5718c9adda5c96e1fcf31082a1b0dbfd5acf0249d8feed5ef6b19cc41e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NX6GL3U%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCs3gUY21lvTJ055fOdL%2BNE8v2Iu8jvawGkHbY8GSo%2FiwIgG38wbCU661aVSzDk%2F8T%2BcrI5wVsESeQAvyBCWhQgxcgq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDMX2vwU7bTgClkylPCrcAwQ0qDb7964JjOs6Qw%2FqNalkTXFF%2FvUYClWBYfX7pyK23U6Bz7ql5si%2BQVJ5I4IE52v5eVM23BNMi389cyn0Z3n3khOWpmNBF6T%2B54bIrCP1vwneTtSqCOf5ZjmS0zsEWYpVtcSEkM0T5llfEQtmMTMc%2FaaGBe5uuhSPWztQdVBsIqz7aEfbatZK7XNO84J5mg0f1N8Z2pWStmTP%2Fjzcrp3U4lLKbu1qts8arpZxzDLb30eq4YpDKU6dQUGMINqXwrGKutc9k6hH3k%2F8RLLo5VH%2FANdt0rjnVOo4DSvHmMKZaCUVWYg3Ma0TqBumAzVoPxswUszdQCjXOuJ4pHk8X2o%2BiD4E9TzIGPKtifYcraWkugCaQ%2FesN7kVK03NDxnqOLy6zy6Cj%2F1FXW%2BDLrNeFkHtmRyk%2FmEeubeOT%2BkSHLAMSmwnk7xSM2cMPvse23eirUYbHnfB3LAf6%2FvnfA75pma2TtZNhJhgfDyK7SxnpCXJzaYiD3ueTdvoYwM%2B%2Bh1nOyii1NoBRv93WJ%2Fu9QH6k9aJ0M%2Bqifc7etlHDqzbeVLMxHmk%2BG8P1ndkgo1hJu%2FDEvrj40S3p6svTpV04bb9f6fBIBUSZK%2Ft7ZtXWwo3yXNMcutZD9csWTvZJLmMMNi8jsQGOqUBTTpPIQf4MVyOtV3BEB13KrepYL%2BUp7nWAn1R3mlC6LueHwd1FEda%2Fgc077RapBYyKFZuyyxhGHhmdAumcR%2FnhonLEmZUr2FFJSu8bcyp7AHhkJA12vh%2FUmxU9aWPw2IL0Yp%2BTWIbRVn1BwCqEfX29qiEsnWsGke1t1WzCpjNA4znUN50DFxP4E20MYQIhXySM9IAjvfI9YQphn7knVomBZi4so8K&X-Amz-Signature=84aefb4bf2fa3c46277ad8a147fdcb15c05dd5d7ce300dfe7a2be08aeb4c14da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5BGHPUK%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIC4j7jK82PLZpvx6bh%2FLdDKu84t%2FBUIGUNtdFOHXHgXnAiBM2NjbYM2lVeRC2WsGDhAgyMWOhcWdFSvhr5If%2BNpjcSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMrsRw%2FK%2BPotOrWGltKtwDuWjvlwe4HmKAjxKAiR5eCrAlKw42xDZ57mfTsJ%2FqdLrU31LLxO86Dz93IBfhGrVVGneSsC3beRtI5dzbyaPo5YgCV1H7r0c15lFlvjBMFyXxK1cGpaTLQuaPrz34flmEDXra6ly9aVZWNepgkDjDX3bf5wFurc8eeXf%2B9A6AmSC3ZkrSD31YEZx1u%2FVwhddUuZFnp41nPcqUTsOrzJn2Rsza6Zhz7k1nSUZbYi%2Bqkb40sWjxfPethJu1wej%2Bw5VB3zflXAZ7RI239QCbDbwUaiMKbqIqFTT1s5AX2ppb7j8cCQyIOJhAcR4plHA%2B7Jeax2WQv780mTXDdIq1cJ2g1%2F9ciuIuIW5RAgR5ZO4OrHPppbT2BGI%2FT%2BtORZLiGBb0BIOQvjm6KapL1ZTuguNqacRfxcX4fJX1Kkjxsp5FeZjQRr5OQs24KLI7tgzDqElJ4dlfzhmLUW%2Fl8qTbNkxQ9WNyYFnm2bUmfz0sMfv4FuX5avFntqFV7KmVV14Eq8P92B3mcV4YcWARrEHJuZyIgzXihUtKwtMoV5o6J8gTqr9iTS4Y5wuf5bA%2FlQyjoSRzUnlPQzV2mvDVAEh2FcPmz9QjFPYilioJBXNV5mmCyDioN500DLmwMlONXJgwqr2OxAY6pgEvo6jTc5l%2Bmq6UC8kHcnRgUx2N1wG8G06ahSNQviZ5yYhC5WFw%2BiYm0HtQWTCJHoZqFBJ%2B8RqkqrKJpXfUj7iGZqWDTkqQABqlbeYcrWpGWxCLZagmdQeR7foV3yJ9BWx6E8fSLMbuFdra7EivdiGvG52oDFFyEH054%2Frs4iXIyK2pog2%2FjciRuBiUGn3Z2RTSawRyZ12B96%2BedVV1XlR18nsH0mlP&X-Amz-Signature=87d905721f20620816517aedfd31eda82cc612241098f43a455cb012011e1317&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
