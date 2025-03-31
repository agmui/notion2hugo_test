---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHHZJ7V2%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIEK%2BibSQSwtjiPRWJkoN2%2FiMsFqVek0x4S%2FhPNNa24s3AiB74GwGnrYQmI1NWzbyMxlcqbIsJ4n3k4R34%2FvJSq0YFSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFG0UeFeo6%2FjAOjd7KtwDe1kjHnpUlVWntzaG2%2FtOQHT8DRluIwlWsN4dtVMqkag6nE83jUYDA1xi38G4i0CfQY02y2Knz6LLK3uy5bDGRDFjTyjd%2FgaY2XRBznFchccKpvG7HNQWBETD53oLWmKIxgOroxLOgKnWkqyDclnGWt1VBxYl07VLCQVoWVEiEsv1q1qRz9hZ%2Fv0B0TuNX5SMBdc9ngLBElpnfCqlkJiKVYeMP3I0inUPko4TOf7AneVGa0fQsbAtfjlfxx050iHt9CkrVz8Gzafraw4Zu%2Fxq9N5bsH54s2be3Jq6tiDY9bXoMfPzx6OL2SxkKIjraySEYBYlNJe5mzvFYWP4qzlNQa6XA4m4y8vCdrrQCrouTJxjsTMsn2al5duZq4VpE2EAV4NvQdp4285vO3UBEO8diXZ3h%2BHIFSMIQqoAZ83GlTefxgq2Dyt9oWt1irOJWvUQc%2BzBbksRyJxgnTXpnoU32WteVmlIjFM14HmUCyBwQLoGAgX6wHou312BakdmL4d5REE2PDwDxyA5WKUPg8cLoF94QXRTWdHqd1A6wRJOdgor8BK9GAZ78W3M8MQlBWFNb3u%2FA0LuTBCW1d%2Fbzm3UEATdUzGmffXlDxtTSgd5kxt9XrPUxO%2FGr66hiOww3LmrvwY6pgFIR47lJwYRKxLm8OvPBEc%2B%2BJBhGcfxHwLxfSCuw8vwlpH9wPy5Ox2HYfwR0n%2FHxM57CzD9h13zhp3%2Fze993puSvZFmTNHci5EQUAmquu5gKQq%2Fyx3HVz%2FACyObpzNjYvz4%2BMH2yxhYPCnKl5JLJ%2BfANdgwaNFMKTtUJ%2BAU5JaVu0BXpGAtD8J4ufb1nNmf801GBOyZ0uHaLSmKaiMqQnVtKTpL%2Bcqi&X-Amz-Signature=ff765f7ecabba6746c7375719bdc8c2d6527a48bdf6a9ebcbbd9de90f0f852bd&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHHZJ7V2%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIEK%2BibSQSwtjiPRWJkoN2%2FiMsFqVek0x4S%2FhPNNa24s3AiB74GwGnrYQmI1NWzbyMxlcqbIsJ4n3k4R34%2FvJSq0YFSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFG0UeFeo6%2FjAOjd7KtwDe1kjHnpUlVWntzaG2%2FtOQHT8DRluIwlWsN4dtVMqkag6nE83jUYDA1xi38G4i0CfQY02y2Knz6LLK3uy5bDGRDFjTyjd%2FgaY2XRBznFchccKpvG7HNQWBETD53oLWmKIxgOroxLOgKnWkqyDclnGWt1VBxYl07VLCQVoWVEiEsv1q1qRz9hZ%2Fv0B0TuNX5SMBdc9ngLBElpnfCqlkJiKVYeMP3I0inUPko4TOf7AneVGa0fQsbAtfjlfxx050iHt9CkrVz8Gzafraw4Zu%2Fxq9N5bsH54s2be3Jq6tiDY9bXoMfPzx6OL2SxkKIjraySEYBYlNJe5mzvFYWP4qzlNQa6XA4m4y8vCdrrQCrouTJxjsTMsn2al5duZq4VpE2EAV4NvQdp4285vO3UBEO8diXZ3h%2BHIFSMIQqoAZ83GlTefxgq2Dyt9oWt1irOJWvUQc%2BzBbksRyJxgnTXpnoU32WteVmlIjFM14HmUCyBwQLoGAgX6wHou312BakdmL4d5REE2PDwDxyA5WKUPg8cLoF94QXRTWdHqd1A6wRJOdgor8BK9GAZ78W3M8MQlBWFNb3u%2FA0LuTBCW1d%2Fbzm3UEATdUzGmffXlDxtTSgd5kxt9XrPUxO%2FGr66hiOww3LmrvwY6pgFIR47lJwYRKxLm8OvPBEc%2B%2BJBhGcfxHwLxfSCuw8vwlpH9wPy5Ox2HYfwR0n%2FHxM57CzD9h13zhp3%2Fze993puSvZFmTNHci5EQUAmquu5gKQq%2Fyx3HVz%2FACyObpzNjYvz4%2BMH2yxhYPCnKl5JLJ%2BfANdgwaNFMKTtUJ%2BAU5JaVu0BXpGAtD8J4ufb1nNmf801GBOyZ0uHaLSmKaiMqQnVtKTpL%2Bcqi&X-Amz-Signature=826ba7ffb90f1b5ef942d7e18fe77a517589aafb60460808c170b70fe5abbf40&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYNK45FG%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIGLtghH8y0Hky7D4Y3ZeihjNyp0i9D3VzEvL3obQSwqAAiEAp8gufiqHRs2t6fdfJI1uQfc6%2Fny7LjtPXcqI1zDKT6gqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGgeAL3Rbw2ffnF7zSrcA%2B0TBFPAWs2J2o6PPbFq3C7KVdLUh8aLVje6sU%2FK5WX6lU505K10RpEmsv2HtANF4VFT8pw8BZR%2FrVJQrZ6ibLFdUd5PcDSH1FMyLn%2BuOd9QL66gIuY08M9R63lSz8l%2Fi%2FVksmnDdPaL%2FEidItXpfi87iRajmUMfDjDOyADu1Fo25l7B5MfW8l249%2B2YVBOQPHh6z0tEqk2P9qFInmnafCXdX%2Bl%2F2HLs4ODYv2E46jM0Yw4vSlKVKvYxpxpg%2FHmFUdHf7BgcMP4UzjeL%2FMbxD2mMT7H2ove0G81Fku1zFDzthQB47EGXqdpMdJupXDqqNMK5DIMa2stYJNvDJeJOeo9YM6f6B%2BhEGsh49xI89KZZKqY7U3lynzdLp%2BkDTroYE8hr6yQVNTrI4Epm4sF0iElXryCTyxSiL4z6SbAn6lQiyYuKaYHdtoA05Sv01ntkNMz5kJgzwypIHFLDgBCil2%2BTMgLVmnasCup9FuDk2KporZqMrmB0wiY8j67p57A9z9T8gBrue4RsyMbfiF25x16HigNSZNmPm2h1qwOdGzfn%2FcNKnY3swWoFkDsBBkGvnGxAkAa7Dx%2FIEeA2jh3zItD8WoMtlsxbAZNsiBn83XTt6g3rhxjmIpy5UtDlML%2B4q78GOqUBEx16CfrjQKIQGCMz90wNaDGXkYYfmz%2FuMF9F%2Fxl6RsJujIO36zwLfnnidjJM5e0tZ3wQOEuO0i11ukuo00WLv0f4K69mgNvSXt88aP72%2F704TG8Am%2F2yMErQx3Oxz75nZAPLmqUVnT%2FlGVlR84l6GXt%2F1IM8ts9C50JWpSF1GL585Bzw0TT2uZli%2BPyv1F8GToW%2F9VtIFOjKbwU0Fetr0o3szVqv&X-Amz-Signature=be12bf8c2dd659dc1daa7958744ac5bd47f30d50e9d1326f5df70446711d6754&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IP4PIAM%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIGnL9HpIxWThGCs%2FAca9lU2qX6hQkMz7SYe13jjQ3Zb0AiAFsrDZxWg7UyhoDZakIUhrdwhuiJF6mHeEDkP8kTuKzCqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuZ89qyCNzEiyO6oWKtwDiCkhGVluJe0Y%2BxHgSB62aUMNcjdsw6KfwQlev%2FoEikHJPpBnCLyUp2UGRUEbNzEPlVE6lt1kHhDUcGxlmDvwOZYkUQvNDcVXXA6E9BzAXMkdRg0V7glVxzailbv5J8wwR1ZPERxuSyw3DR0vQlhBVjmbEBeqkNrQdwIIXg3th2lPU%2FDtauYKTOBSe2JiffPuGTX6tso%2Fxsldm%2BY23%2FCLj%2F%2FoOGLUEp0YjO9iw4NYgIXl7wavyo6GOaEGFGP7EIsjV55s3K7ptvnDrqKDxLNs6GBvgjpuGFyW9v1NX2d4Y7fvHpA17M9Zn4muClIPmQm7zRJ9Z4WQf6ZiQm3VgIAhJyrzs3W2Jii9xga7MoYWScMSkg7AUpuf0f9rmory%2F%2B9d7iNuKR31YWzmUjJS9Kw8Xl%2F7nDsbkB%2BENAh5pCwFcczZlHUEBrI8LBjgORDotjxrsTBWgRLa6C3XBHpfmiHrfUPtlY%2FFewTYlxe%2Bv7Z%2F4UmWQSNmnMbcTvfeDLRJEAUqAIjA8DGtiFfB6KMVtvRcWqzrvWaQgchBuo5YnyVONPtanLwuK0P0hdncTXJq5zId%2BD3dlS33IiaJeT6QPn2E7%2FNcgk2hRT3gIGgtg2CyS0IIcpLUlZD84aT1YWQwwLirvwY6pgFrFA%2BRmzXcdDWcJN6Dex9XXIYZM%2FzYloCnKXR0wHZ66NMwkMY29%2Fz3KqT9fVPgbbVAj4%2BYqp81ixxe2t8sxv2B5aDNNs271QIrxYa0Z10XaGbjjK5%2B1Bid6OBR41QV%2Bd%2F3kdtnjkUVrYWzFHSVWzCSFqW4Rp67HUMsETVZtvIPjWqhuPbR3HvbinC9FdmSbiG4Yvq%2BcA2VpnMuXhyjRGysuwzDNTH%2F&X-Amz-Signature=52fb952903be01ea4cc492a1c23d6e66a595be0dbd3c7707bc4588721d8bd527&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHHZJ7V2%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIEK%2BibSQSwtjiPRWJkoN2%2FiMsFqVek0x4S%2FhPNNa24s3AiB74GwGnrYQmI1NWzbyMxlcqbIsJ4n3k4R34%2FvJSq0YFSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFG0UeFeo6%2FjAOjd7KtwDe1kjHnpUlVWntzaG2%2FtOQHT8DRluIwlWsN4dtVMqkag6nE83jUYDA1xi38G4i0CfQY02y2Knz6LLK3uy5bDGRDFjTyjd%2FgaY2XRBznFchccKpvG7HNQWBETD53oLWmKIxgOroxLOgKnWkqyDclnGWt1VBxYl07VLCQVoWVEiEsv1q1qRz9hZ%2Fv0B0TuNX5SMBdc9ngLBElpnfCqlkJiKVYeMP3I0inUPko4TOf7AneVGa0fQsbAtfjlfxx050iHt9CkrVz8Gzafraw4Zu%2Fxq9N5bsH54s2be3Jq6tiDY9bXoMfPzx6OL2SxkKIjraySEYBYlNJe5mzvFYWP4qzlNQa6XA4m4y8vCdrrQCrouTJxjsTMsn2al5duZq4VpE2EAV4NvQdp4285vO3UBEO8diXZ3h%2BHIFSMIQqoAZ83GlTefxgq2Dyt9oWt1irOJWvUQc%2BzBbksRyJxgnTXpnoU32WteVmlIjFM14HmUCyBwQLoGAgX6wHou312BakdmL4d5REE2PDwDxyA5WKUPg8cLoF94QXRTWdHqd1A6wRJOdgor8BK9GAZ78W3M8MQlBWFNb3u%2FA0LuTBCW1d%2Fbzm3UEATdUzGmffXlDxtTSgd5kxt9XrPUxO%2FGr66hiOww3LmrvwY6pgFIR47lJwYRKxLm8OvPBEc%2B%2BJBhGcfxHwLxfSCuw8vwlpH9wPy5Ox2HYfwR0n%2FHxM57CzD9h13zhp3%2Fze993puSvZFmTNHci5EQUAmquu5gKQq%2Fyx3HVz%2FACyObpzNjYvz4%2BMH2yxhYPCnKl5JLJ%2BfANdgwaNFMKTtUJ%2BAU5JaVu0BXpGAtD8J4ufb1nNmf801GBOyZ0uHaLSmKaiMqQnVtKTpL%2Bcqi&X-Amz-Signature=79235198cf9601396c9c98ef48f0c7e0c757d64aefd195b329e0fa133ff79a21&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
