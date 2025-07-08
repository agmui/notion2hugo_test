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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAZNNXYM%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T210837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAGrdL9bdK0vG3elmMPnfjXbOHIuWiUFyz47ByFA96yXAiEA8d9GBME6FJY2tfZ4a7pvIHRKho%2BdvYaicC0h%2BEkRqY0qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKX4bbgondh7ERxBnyrcA0Un5KN6%2FqbB6JGB%2FL7DR8aUII%2F0kdWogaIiuYVJJeqA2RvkT%2Fq16GGgJ%2FV5P75c5hfjUAh8hA0bXzdONg1KHVRMtIa6jBwyUM43jXTJSht2iJhgKiwwZLb1cMjntAB2l6cza0ny1RYvKc%2FnZI2MTGBhRDeY9AiRmLh1%2FvhdQOL0uyd4Wlxo1GHrasUjjwAG7I%2FSJnRnN7sosIk04Zskgxz9gcnNC2ATMMxqnCWoGiSZKc75IsbvwtJQ8BoJ95E8C8Rgn7Aps5r88BbNKicCV9MO8PjxvtXzITQUNVvn1%2FT2rcCvLQs7aGniAgyoRY69KSpn7nVkgDmBi5d%2Bldy0u5A5wqSZVbeCuZszQxHSdTX8BM9X9t44HEZ9XPASi70Kw911G8dG1RMnBd0Qbr1P0gPigLy4%2B0I6H7R%2FCzEZFTMsqZ2Erpyw5pnDTu2xP3oOR9Yfa5q5ymQkD%2BsdHS7IvobpKxbY8JgbiLrb0H7VdIXlj38PP1TmAphRkRWQvvJ3P26BestqqbxndemWyjDXkAaViaIZquYn2A5py9dvEfsMhBWSM2OwAGbRvWFSiUx4CY6BQYLaBAW2cjxHa90EmrxRc%2Bpc6Gpc40aUWX06Y9tR9qSOyyWXGt2UkkyxMNiDtsMGOqUBZgpMQLBqQtMR4QQwoi2QM%2BIH2hnUXqrOy%2F3ZeVcLZSlWcSDgGr7IJfxdc5Erm20n0TSGNZTsVq1gylECg74oqmkBLIf86SMdt2xk10NvwRtWpCI4a6HRsMViyYtChjxnHQ2iWc3j5kWBPqZyz6LLcdZpqr1F%2BEUgxlv%2F4%2Bae8ti855LYHsvA4egINsFSCyAOapUID4TTn8BDdp7gCRpchyMyHmxi&X-Amz-Signature=c83748e6cc1cfd2983872af4b2d4b2c9857050882dc1deb4c5e0289a6b3db31b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAZNNXYM%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T210837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAGrdL9bdK0vG3elmMPnfjXbOHIuWiUFyz47ByFA96yXAiEA8d9GBME6FJY2tfZ4a7pvIHRKho%2BdvYaicC0h%2BEkRqY0qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKX4bbgondh7ERxBnyrcA0Un5KN6%2FqbB6JGB%2FL7DR8aUII%2F0kdWogaIiuYVJJeqA2RvkT%2Fq16GGgJ%2FV5P75c5hfjUAh8hA0bXzdONg1KHVRMtIa6jBwyUM43jXTJSht2iJhgKiwwZLb1cMjntAB2l6cza0ny1RYvKc%2FnZI2MTGBhRDeY9AiRmLh1%2FvhdQOL0uyd4Wlxo1GHrasUjjwAG7I%2FSJnRnN7sosIk04Zskgxz9gcnNC2ATMMxqnCWoGiSZKc75IsbvwtJQ8BoJ95E8C8Rgn7Aps5r88BbNKicCV9MO8PjxvtXzITQUNVvn1%2FT2rcCvLQs7aGniAgyoRY69KSpn7nVkgDmBi5d%2Bldy0u5A5wqSZVbeCuZszQxHSdTX8BM9X9t44HEZ9XPASi70Kw911G8dG1RMnBd0Qbr1P0gPigLy4%2B0I6H7R%2FCzEZFTMsqZ2Erpyw5pnDTu2xP3oOR9Yfa5q5ymQkD%2BsdHS7IvobpKxbY8JgbiLrb0H7VdIXlj38PP1TmAphRkRWQvvJ3P26BestqqbxndemWyjDXkAaViaIZquYn2A5py9dvEfsMhBWSM2OwAGbRvWFSiUx4CY6BQYLaBAW2cjxHa90EmrxRc%2Bpc6Gpc40aUWX06Y9tR9qSOyyWXGt2UkkyxMNiDtsMGOqUBZgpMQLBqQtMR4QQwoi2QM%2BIH2hnUXqrOy%2F3ZeVcLZSlWcSDgGr7IJfxdc5Erm20n0TSGNZTsVq1gylECg74oqmkBLIf86SMdt2xk10NvwRtWpCI4a6HRsMViyYtChjxnHQ2iWc3j5kWBPqZyz6LLcdZpqr1F%2BEUgxlv%2F4%2Bae8ti855LYHsvA4egINsFSCyAOapUID4TTn8BDdp7gCRpchyMyHmxi&X-Amz-Signature=c2a91142e3acb395e0e0aaeaebcada292d035af2d360b953ad92ac5498c6aab2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAZNNXYM%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T210837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAGrdL9bdK0vG3elmMPnfjXbOHIuWiUFyz47ByFA96yXAiEA8d9GBME6FJY2tfZ4a7pvIHRKho%2BdvYaicC0h%2BEkRqY0qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKX4bbgondh7ERxBnyrcA0Un5KN6%2FqbB6JGB%2FL7DR8aUII%2F0kdWogaIiuYVJJeqA2RvkT%2Fq16GGgJ%2FV5P75c5hfjUAh8hA0bXzdONg1KHVRMtIa6jBwyUM43jXTJSht2iJhgKiwwZLb1cMjntAB2l6cza0ny1RYvKc%2FnZI2MTGBhRDeY9AiRmLh1%2FvhdQOL0uyd4Wlxo1GHrasUjjwAG7I%2FSJnRnN7sosIk04Zskgxz9gcnNC2ATMMxqnCWoGiSZKc75IsbvwtJQ8BoJ95E8C8Rgn7Aps5r88BbNKicCV9MO8PjxvtXzITQUNVvn1%2FT2rcCvLQs7aGniAgyoRY69KSpn7nVkgDmBi5d%2Bldy0u5A5wqSZVbeCuZszQxHSdTX8BM9X9t44HEZ9XPASi70Kw911G8dG1RMnBd0Qbr1P0gPigLy4%2B0I6H7R%2FCzEZFTMsqZ2Erpyw5pnDTu2xP3oOR9Yfa5q5ymQkD%2BsdHS7IvobpKxbY8JgbiLrb0H7VdIXlj38PP1TmAphRkRWQvvJ3P26BestqqbxndemWyjDXkAaViaIZquYn2A5py9dvEfsMhBWSM2OwAGbRvWFSiUx4CY6BQYLaBAW2cjxHa90EmrxRc%2Bpc6Gpc40aUWX06Y9tR9qSOyyWXGt2UkkyxMNiDtsMGOqUBZgpMQLBqQtMR4QQwoi2QM%2BIH2hnUXqrOy%2F3ZeVcLZSlWcSDgGr7IJfxdc5Erm20n0TSGNZTsVq1gylECg74oqmkBLIf86SMdt2xk10NvwRtWpCI4a6HRsMViyYtChjxnHQ2iWc3j5kWBPqZyz6LLcdZpqr1F%2BEUgxlv%2F4%2Bae8ti855LYHsvA4egINsFSCyAOapUID4TTn8BDdp7gCRpchyMyHmxi&X-Amz-Signature=bbc7e37fc28c6d5847c0ad811cddb9f929fc2ed034b867b72d4233fd07e08ba9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SZDTQKY%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T210841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUyfvAa9vCH1lYe4OVDCYh%2FfZFvWvPRYCqDldOMk1myAIhAMkjodVMbbPbp7lEvVVL%2BWBWHJUc%2FbNt7zqQF9sGuQurKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCnWhjJUDQKryJERsq3AOP6cbDjKnaRjMFqCTwEH2iGTrncPZ0Oqd79imCEoPRFv0Gwhc8oJ3bOZcWndDu9%2FHBgdvFvmhw5WxBRRuZqzp3f6VgSDfCFVWuZyeIALsu4mGBK%2BCr%2BG5nK52LsoE6O%2BW6RFx7Uc0fdWxrwMzc3%2FRrfQvFeQhTemd4ykxXNTxVSFgaP3IU%2BQJ7SX0ElsP52bg2bxOhaDtLxgSvfOkwuCpJ07o1VgtJfXi5JcPZmGigEBOUPXJIV%2B9uHH0jQgOXDOP%2BKbHOzc%2FHE78IIoATF9KTvFdI%2B5AtXt%2FGIgGmC13CfG1GLgDHjWHJeLxoVHQl4mv87SzYoJA2kASStts1M8OR7y7J95dyiHs3NDnZHj9QvVDK65e3833XZZI%2FaFq1OyCWJC59tkBnz77eFAXUg3ExNem8FPBAGgwIJZSiaMqnnabdcqIrj8eUhjFNtgPKLI%2B%2Fi1FbKswZ6Je%2B1HZLhHKYZ%2F%2BaIiBp5aC%2BgfCq70DZ1rCjXbpfckqXNeykGj8oOtYHjmC34WAMdwFOGBRJWugrqlziogdQmwNJl3M6qEmUh4ZmU4CxlVFb%2Bti7FKrr5bVeNYcoFw3elquVAb3JweSn7lvdv9T73l%2F4F7ouzuVTX2T5%2FWoin1Oo7AB1gzCRhLbDBjqkAZ7OzlgE8Y1x4aK7sceqTC2vYft85nbxxmgn%2B%2Fq1AFfujrJGyUOaG%2BRyBUP6WEDDpAjZuKYioc%2BUOzStOsufiF3Lt2OKfn3qNug0Ug9ThGTiNuuCx5uzgFWjU5zU8UdtutfuC%2Bu5Xx0e5itS3N2X255vhcjcXE0j7EYhAAXKqlRxAAcYUh%2BcN1Xt1pgN8bgz%2FNwGRJFPNQoesfwdNypWc2yQOK7s&X-Amz-Signature=73f6cf2c32f44b8111e60036d197e1b49ec0c16c31bf1cc6b359df0f959600b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5OKVSUT%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T210841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVHV8YF8iha1pnjimG3CfYYGYLxT4RvT5Z2g89gwREhAiBDWYcDPDWoAx4RtETxASIA9RZcsnBRk8EXdTZ9C%2FFI%2FSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FMljHjHswATAWor%2FKtwDu3qN663slvOnG29VWttbGIhCC9zQrA82gn85zJlkZVjIgQ9mw1DoporUE%2BphrX8lwh3jbnHTXK6E14wGtCaVlD0AfITzZKT3MVyUm1bQ0EC465oxdGl8dQKAQtyk2PkST6JKnkFL1I8FR%2Fa8%2BWqvcITuOnc7ERx25jn81Kymi36mvpWyBV%2B%2Fztb6F9MI77s79PWNWDwK6GQSA0guew0mjgBXxNYIkgkw%2FPQqTQkKFmBWzkqXd3U8vENp2s9az31MZO7e7vZyEAy9D2OCEOw28YsWVL%2F3wuOG%2Fm6X63%2F7%2BK7oNvkpM27xmiLp%2BvhagQ9ci2VFeDjrG0T9xzRRNmUdQ8XIsjAInSopUPFRZpjyc6KVcQ1L6nADGIpvXvbPGzpfh%2BxBr4IwPzmzI2JP7qsaheK%2Bd%2FYTH8zr7Aefoh3cUJ3eRXUPjQgfmTSj0sxowesi1p8R39dQvpd3oKieMNmaA0rmRDO6zrdLscm17IyHxCTm1%2B29807z7rNLMDoevTRgzVkztyc2trPvAzv4NcNOeCpiEV3HD9QxolMge45PQDWJqlbiVXKtQ7Ea6mEUtDAs%2F93AI2Rnrefp0YtNvwo7zgg3h75s7%2FiiSP7XpwDK0fQCyVoMBFiiVM5S4oQwhoS2wwY6pgGpHCVM3YMpEyRTrVLS%2F6B4SlFWTLk%2BN7FZm78ublZxjhJN%2F8N0MLmm1M3mhIAOzmtTrvknEveSZg5Yhe%2FOobwKrULJMPEv1W6h5WDCY2x%2Fa%2F8EZdfc6btzRSGyGSdXBCaR295Bso8ePE59CHAFlu9qFWPtRXwuxpaF2dPm4Rc1KjoTL6L1usGuFuGde4kiqgukkHBZ4vwYzAx6v0F7rTV%2FHFcHNSrU&X-Amz-Signature=e9f9278e6b77a27bf9fada86fc979342d1a9be4c47931a22526241e285cb182d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAZNNXYM%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T210837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAGrdL9bdK0vG3elmMPnfjXbOHIuWiUFyz47ByFA96yXAiEA8d9GBME6FJY2tfZ4a7pvIHRKho%2BdvYaicC0h%2BEkRqY0qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKX4bbgondh7ERxBnyrcA0Un5KN6%2FqbB6JGB%2FL7DR8aUII%2F0kdWogaIiuYVJJeqA2RvkT%2Fq16GGgJ%2FV5P75c5hfjUAh8hA0bXzdONg1KHVRMtIa6jBwyUM43jXTJSht2iJhgKiwwZLb1cMjntAB2l6cza0ny1RYvKc%2FnZI2MTGBhRDeY9AiRmLh1%2FvhdQOL0uyd4Wlxo1GHrasUjjwAG7I%2FSJnRnN7sosIk04Zskgxz9gcnNC2ATMMxqnCWoGiSZKc75IsbvwtJQ8BoJ95E8C8Rgn7Aps5r88BbNKicCV9MO8PjxvtXzITQUNVvn1%2FT2rcCvLQs7aGniAgyoRY69KSpn7nVkgDmBi5d%2Bldy0u5A5wqSZVbeCuZszQxHSdTX8BM9X9t44HEZ9XPASi70Kw911G8dG1RMnBd0Qbr1P0gPigLy4%2B0I6H7R%2FCzEZFTMsqZ2Erpyw5pnDTu2xP3oOR9Yfa5q5ymQkD%2BsdHS7IvobpKxbY8JgbiLrb0H7VdIXlj38PP1TmAphRkRWQvvJ3P26BestqqbxndemWyjDXkAaViaIZquYn2A5py9dvEfsMhBWSM2OwAGbRvWFSiUx4CY6BQYLaBAW2cjxHa90EmrxRc%2Bpc6Gpc40aUWX06Y9tR9qSOyyWXGt2UkkyxMNiDtsMGOqUBZgpMQLBqQtMR4QQwoi2QM%2BIH2hnUXqrOy%2F3ZeVcLZSlWcSDgGr7IJfxdc5Erm20n0TSGNZTsVq1gylECg74oqmkBLIf86SMdt2xk10NvwRtWpCI4a6HRsMViyYtChjxnHQ2iWc3j5kWBPqZyz6LLcdZpqr1F%2BEUgxlv%2F4%2Bae8ti855LYHsvA4egINsFSCyAOapUID4TTn8BDdp7gCRpchyMyHmxi&X-Amz-Signature=54fcb97f2c39c681632dae5d7fbf5a687cd3921a118a52e8fab1f9ab8b8bfd57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
