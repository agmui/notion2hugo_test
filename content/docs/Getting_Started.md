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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLEFVLFO%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T051029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSnudKEM6t6dFthOUCcZBGnkNWqpx7o8tUiYIs0tygSAiEAvWzBiMvV%2BSMzgixAXbbCqyU5piKELmaJ6Ce%2FtkxTWfoqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAUtfPK%2FQS1w8QYu7CrcA57RiTVEGSbiIpOAfwLB9eW6IXDER7b7PtIChNFxdLzl4O%2FsGLmLkZHgJoa8iaYoWcEyku2u2%2FaWUMssfpn6EcxPPGKEVoZo4lKTFF0oDXiOxzsTOphnyEZCboBXua%2FRCSbU0U434funncmC64M9XYumZO%2FLdw6NLgQnXqCekkyRA5cS0UlQ%2Bwi6F1nYti0VBkMorz4fgjavbCZwGZvP%2Fo1picio7Y9qMtG9H6OrJi8iu8c%2FzxCrRp%2ByCqinsrF%2FY8bYQ5trVZL%2BJi0UMNQSvj94vNgm9rF7jSgnjQ2AWIjW3d5i13pnxvPDgLOWlRFQ8wi8X6PKikF4mAJoEnz03pR9hOkzU2xrV%2BCUYOtfFOk4O85ON%2Fg0NjfvBD5%2FToaLnBd9hb%2Fd1aRSmhd4RfMNDeGap74lXP7k6i9nYwJHjswJPwzAAnC9omSQEdRT07cjk8wKZ4SkylV8vfLl5L3i3CQHpmvKaclDLOEKvojIgq2yD07MqWISBbjmWTwUj%2BU8ebrycvBNgJJbBG3w3hGkE6er0wZ%2FQaE5rnVUc3FHfT99hWGC6V4LL5gPfqvBxQejINNTMtCDOnWwZ04VxDzDE2NDKasbzUOnRwSTfNY%2BZfoNvotPRExiV2EOA0tMMJyWpMIGOqUBO6unTLDJaz2FZe2nACrFN1dISa5p%2Fnu2EaMUCDfKwdgwDP8FkfyMAn51jMt8LGNapARAnKC1%2BIUs7eYr58Nkh5xyjW86CHd3XoUh7IJwlS0Q6vVjdBKFHqC8gfgq3ViYzp76LW4k7pR4I8%2BnekfcUp2HrXe5DfJiTc4TnMkvKK9SWCmXHZUV1dsiqdK7BX1o4%2FV0JB%2Fk02ZE76qIym50MSuoF3aY&X-Amz-Signature=f906474eaf27283a311db5876fe1a6d441c6656a45995ae26d16ffbe227d9072&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLEFVLFO%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T051029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSnudKEM6t6dFthOUCcZBGnkNWqpx7o8tUiYIs0tygSAiEAvWzBiMvV%2BSMzgixAXbbCqyU5piKELmaJ6Ce%2FtkxTWfoqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAUtfPK%2FQS1w8QYu7CrcA57RiTVEGSbiIpOAfwLB9eW6IXDER7b7PtIChNFxdLzl4O%2FsGLmLkZHgJoa8iaYoWcEyku2u2%2FaWUMssfpn6EcxPPGKEVoZo4lKTFF0oDXiOxzsTOphnyEZCboBXua%2FRCSbU0U434funncmC64M9XYumZO%2FLdw6NLgQnXqCekkyRA5cS0UlQ%2Bwi6F1nYti0VBkMorz4fgjavbCZwGZvP%2Fo1picio7Y9qMtG9H6OrJi8iu8c%2FzxCrRp%2ByCqinsrF%2FY8bYQ5trVZL%2BJi0UMNQSvj94vNgm9rF7jSgnjQ2AWIjW3d5i13pnxvPDgLOWlRFQ8wi8X6PKikF4mAJoEnz03pR9hOkzU2xrV%2BCUYOtfFOk4O85ON%2Fg0NjfvBD5%2FToaLnBd9hb%2Fd1aRSmhd4RfMNDeGap74lXP7k6i9nYwJHjswJPwzAAnC9omSQEdRT07cjk8wKZ4SkylV8vfLl5L3i3CQHpmvKaclDLOEKvojIgq2yD07MqWISBbjmWTwUj%2BU8ebrycvBNgJJbBG3w3hGkE6er0wZ%2FQaE5rnVUc3FHfT99hWGC6V4LL5gPfqvBxQejINNTMtCDOnWwZ04VxDzDE2NDKasbzUOnRwSTfNY%2BZfoNvotPRExiV2EOA0tMMJyWpMIGOqUBO6unTLDJaz2FZe2nACrFN1dISa5p%2Fnu2EaMUCDfKwdgwDP8FkfyMAn51jMt8LGNapARAnKC1%2BIUs7eYr58Nkh5xyjW86CHd3XoUh7IJwlS0Q6vVjdBKFHqC8gfgq3ViYzp76LW4k7pR4I8%2BnekfcUp2HrXe5DfJiTc4TnMkvKK9SWCmXHZUV1dsiqdK7BX1o4%2FV0JB%2Fk02ZE76qIym50MSuoF3aY&X-Amz-Signature=51b2482bec03d121bcc32148e808c7d680e3128eac9b2134d320e3162faa5133&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLEFVLFO%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T051030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSnudKEM6t6dFthOUCcZBGnkNWqpx7o8tUiYIs0tygSAiEAvWzBiMvV%2BSMzgixAXbbCqyU5piKELmaJ6Ce%2FtkxTWfoqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAUtfPK%2FQS1w8QYu7CrcA57RiTVEGSbiIpOAfwLB9eW6IXDER7b7PtIChNFxdLzl4O%2FsGLmLkZHgJoa8iaYoWcEyku2u2%2FaWUMssfpn6EcxPPGKEVoZo4lKTFF0oDXiOxzsTOphnyEZCboBXua%2FRCSbU0U434funncmC64M9XYumZO%2FLdw6NLgQnXqCekkyRA5cS0UlQ%2Bwi6F1nYti0VBkMorz4fgjavbCZwGZvP%2Fo1picio7Y9qMtG9H6OrJi8iu8c%2FzxCrRp%2ByCqinsrF%2FY8bYQ5trVZL%2BJi0UMNQSvj94vNgm9rF7jSgnjQ2AWIjW3d5i13pnxvPDgLOWlRFQ8wi8X6PKikF4mAJoEnz03pR9hOkzU2xrV%2BCUYOtfFOk4O85ON%2Fg0NjfvBD5%2FToaLnBd9hb%2Fd1aRSmhd4RfMNDeGap74lXP7k6i9nYwJHjswJPwzAAnC9omSQEdRT07cjk8wKZ4SkylV8vfLl5L3i3CQHpmvKaclDLOEKvojIgq2yD07MqWISBbjmWTwUj%2BU8ebrycvBNgJJbBG3w3hGkE6er0wZ%2FQaE5rnVUc3FHfT99hWGC6V4LL5gPfqvBxQejINNTMtCDOnWwZ04VxDzDE2NDKasbzUOnRwSTfNY%2BZfoNvotPRExiV2EOA0tMMJyWpMIGOqUBO6unTLDJaz2FZe2nACrFN1dISa5p%2Fnu2EaMUCDfKwdgwDP8FkfyMAn51jMt8LGNapARAnKC1%2BIUs7eYr58Nkh5xyjW86CHd3XoUh7IJwlS0Q6vVjdBKFHqC8gfgq3ViYzp76LW4k7pR4I8%2BnekfcUp2HrXe5DfJiTc4TnMkvKK9SWCmXHZUV1dsiqdK7BX1o4%2FV0JB%2Fk02ZE76qIym50MSuoF3aY&X-Amz-Signature=202546c360f54f8ee03430e4bad4239d18ca6c5b2b4fb21ac32981992eab3725&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6H6KEVS%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T051031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Fom05DHhwnwjaIUKKOhdePaCU%2FF2jrFmjvXo2ecYckAIgf%2BhipaDcmoxwxpgqJFyZZ4Ou%2Bjqr8%2FIkCYwavyGBV8gqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKa3v8uaRUq96xw8zCrcAxWw3qMGpI7gXStcZaywCA%2BkOD3%2F9lzpBRam8E%2F4VHZgQX%2BK1UAr2zOf8YoX5s63reXpOVmFZ75vPfPJiS5yokKKcmgoBhhAwzVPvMpPPf%2FI0xYB%2FyW7KSMWo%2FR6P7JoXw4sNcW3XtzVVHUjXxHVS2pjfEnWJfYT95WlgkKlTezPgyvtqq1Ln%2Biup5jJfARbMn0Vs4wXoNwojhY56LzD9KQDkW%2B3X6aa85W9vaHc8ElZcs%2FQWfrJVFVWXvXBkiB8F3TLpQBJWYSgKAaWKlMjTG1DtBOxS2SmLTRTZA85vlBRRPpsLp1Kc3mpI8PV%2FFzAcw9OfuIqas9eVzz3dtP4wymHXKRntFZSPLWgz4MmntkLB6KHuFSajEtDNApaKBZPS4qaMFUj9abyHY2q6eM0jSSSIIK7SmAz0HQLOHBPCYj%2FEpsrajsiFuJTR10zkO71A5C1olXogmMvl%2FwxSmRBQXajVJOwJH1EQX0zNpYoNXW5MmBBwimvK0WBGVByqFpcmPcPl0%2BftqMYJ6Qs4K%2Fk%2BdRsndoWFID%2BLZHa%2F1NPIf7TKnz4kEJOWpcv%2FXchXsHSp5sR%2BEY%2B079oUKzDb9lrTZjHfmBnGzK7cAXwjNMbilPG0lcnMx2IYKnqV0r7MP2VpMIGOqUBUvnBVuUlM0gnHkCVY5w74sq72OcorjthGM07%2FBIWJ3KoR%2FMpMr3mV0W1ftpU9SsGHxt7e%2FCudK3oRMC%2BHlA0Tl%2FVjcZf1p7KyNSFPxXYY9kmCzEzeteuILuduLnMubOd5ghzGwvBcYz4fAF8Ep%2BjoJoRcrIObw07DoIsZw%2B2XzW9x4J0ObWzD%2FxgEII3z7PH7cSfhaqFCaGk6W0O%2B9uqzv18DfEq&X-Amz-Signature=e903dc81f35c86ae2f29d9fb1d685dc9a1e20de3235d27a171d36fc22dfada54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLU5AXRP%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T051032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWeLPBSNg%2FPgtYcacVynx7uCOhrV31cW3HN6Fj4j2APAiEAug5%2F9HiUbd7s40ChFC36qEN1ni2C5EtJt24SBSUfEIAqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlvRrzxhYQbtq24circAx%2Bps3b2dU3WArFm1leSboxykzg6CPY%2BQj5hIuE9xIuWYuZorflmIGXboFb0FK6IC%2B47Cyk0LPWbjg16sKf%2BDAE0BDSfsUdW5fBGmYo03DzWu3wuXOuU%2BgIeyHpCeYhrB6qJRgWL46XgO6FuE0uBKPG04XRO7Z2Av1jgOzUN5vDSwK1L37I%2BU0v7EVngVCY7tcwm%2FkFJ4NNeWLJbvghZpm4E9JPIS5vctfvU7hE5qunUsZT%2BUoIAT89rVruE844LfxKoWU%2BY19N5NeYGX9NjW0RaeNRW7%2Bic0WyMk4GECwvatIRFSmlKRF1W9NiIAQcGyonjUYTseOlWeZ715I1Qm%2Fu3lJUvdJasVQITjj0Yy%2FLDq%2FMthoBe2YI6G8tfOsUM0kBjfEgMKUMXk9WGiNpcFacHaxSmZZa4dO%2BOa7KqkJUPfW7SWzvcXOSkUSTZhTtlqSYTcP95RNq9xVQBObFI7Fa1D1m1IJM%2Fi709XFIhZJ076puP39k%2BaExi1EVdrNJiUL4X0sBAfH1rqRNw%2B7Sw4hZ3u6A9o9zmCaI8QPs4S%2BDp7BpG1nj3I7UwW1Wzr45Vv5bTaafO6YqNNkp%2BmF30Rp1Jl04aZpY2Ptstr%2BaGS4zt%2BC0CdL%2B3jNV9m02jMNOWpMIGOqUBSs9qKodkx8q8cgtQoaq94yETJHtEuC3UmBpRELnDYtwaHuCLwnxBjR5DTOxnyXfom8FIbM4limrkq3Y0QQFFozt%2FxwMAYf01YIovzaoiezKYl7QiasYX%2FCAyugI%2BDR2lANkDrXGNQVaNi2IuV8UBoJdQo8oI6q29ZSUuSzoI64Sk8%2F4r7dF2GSrqEqOZDOsw4hiVHTr97sog1lHmg0NsGITZvqZR&X-Amz-Signature=10b2418693c89a4156220e3e94c02fa7d646fc9286435ed4dcb3ffa6bb9df8f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLEFVLFO%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T051029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSnudKEM6t6dFthOUCcZBGnkNWqpx7o8tUiYIs0tygSAiEAvWzBiMvV%2BSMzgixAXbbCqyU5piKELmaJ6Ce%2FtkxTWfoqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAUtfPK%2FQS1w8QYu7CrcA57RiTVEGSbiIpOAfwLB9eW6IXDER7b7PtIChNFxdLzl4O%2FsGLmLkZHgJoa8iaYoWcEyku2u2%2FaWUMssfpn6EcxPPGKEVoZo4lKTFF0oDXiOxzsTOphnyEZCboBXua%2FRCSbU0U434funncmC64M9XYumZO%2FLdw6NLgQnXqCekkyRA5cS0UlQ%2Bwi6F1nYti0VBkMorz4fgjavbCZwGZvP%2Fo1picio7Y9qMtG9H6OrJi8iu8c%2FzxCrRp%2ByCqinsrF%2FY8bYQ5trVZL%2BJi0UMNQSvj94vNgm9rF7jSgnjQ2AWIjW3d5i13pnxvPDgLOWlRFQ8wi8X6PKikF4mAJoEnz03pR9hOkzU2xrV%2BCUYOtfFOk4O85ON%2Fg0NjfvBD5%2FToaLnBd9hb%2Fd1aRSmhd4RfMNDeGap74lXP7k6i9nYwJHjswJPwzAAnC9omSQEdRT07cjk8wKZ4SkylV8vfLl5L3i3CQHpmvKaclDLOEKvojIgq2yD07MqWISBbjmWTwUj%2BU8ebrycvBNgJJbBG3w3hGkE6er0wZ%2FQaE5rnVUc3FHfT99hWGC6V4LL5gPfqvBxQejINNTMtCDOnWwZ04VxDzDE2NDKasbzUOnRwSTfNY%2BZfoNvotPRExiV2EOA0tMMJyWpMIGOqUBO6unTLDJaz2FZe2nACrFN1dISa5p%2Fnu2EaMUCDfKwdgwDP8FkfyMAn51jMt8LGNapARAnKC1%2BIUs7eYr58Nkh5xyjW86CHd3XoUh7IJwlS0Q6vVjdBKFHqC8gfgq3ViYzp76LW4k7pR4I8%2BnekfcUp2HrXe5DfJiTc4TnMkvKK9SWCmXHZUV1dsiqdK7BX1o4%2FV0JB%2Fk02ZE76qIym50MSuoF3aY&X-Amz-Signature=c9b15be47e3dc60b74f64f41c3c4354715585ea6a61ca13b51736eb0c1a71c9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
