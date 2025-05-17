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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNOX56P4%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T121326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBH85v9k1JZmU9i9zNa6%2FCBFExRk4v%2BZb26iSSSYQ3uwIgRav3b5lQFfUhl8bXPt7d9sppOLCq%2FvAyVtEh1sGQYFEq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDvfsv%2BVAzHb%2BDc8TircA%2FauAe6w8gbrO1OsbDw3nP7Yyt5i0zmIk543OOgM5CoXl1xKTPG8OrFixYEa3Gg%2F8K%2BZ%2FwikC8%2FD3Wn5dpm1At2A0Z8METhvNDiavUKMrecT%2Fabx47GKdkkUwzqBV1o6zgYoloIByOrJSoM1FR%2FtRNoNvBluiyEN697zrvWToXVV2ZyC%2F0Y6YPYsFNpYI8r3BRq7vlNv54V%2FOd%2Fth9kxfkPXyjRS12gQHVlkeuLYmpeLq%2BDifk5%2Bv5aMFN7eLZE3yGEFM53NicR7Y%2FMuG8NSYZ%2FEtcqBEGLTI4l%2F3uk7pnOzC4l7np9putN9D95cMs3UBPYrlrTP23RVxn%2BICwJq%2FBVansA1nTVYEkez1kN9ywHNn6RQDH2XpOSPkESHFK0DkM00cINiJYyJvUpT0HPHWCpleO2LI46ajlehEM3EZYUCXZB9zI6ecwCn4RWLXCi8jmfEI0oWurMO5pgxgg0YsXOE9kw%2BrSZhvwlTyNUqIIZtK1ndVnI7vQczY5ipnZ7MsmSCLKO0uTYns4iWd%2FBcv5gvmwix%2BCHSAdGVgpznIWL4BkqjzVhNS%2F9d1T99pKCoSQTxC5%2FZ8Bx4%2B6euNao621XJY3%2FrTlAdJ47ADwa3mA2N9us2gLrGuRgjWiM9MOm8ocEGOqUBZOkGlOSRl%2BnMZEOPKbIHzXmFLzRaFLfx2xbs1LTv8eu4m9lV2H%2BRLn%2BPIgz5dsGfCbcN%2BBXg%2FeUjMzN2phJFIgMhZuPt9NbJNIaZJPFGP5y2RO%2FrCl7yRqxNxhMq0mVh946RVtXlAlRvw%2FxZffNlJaPypJao9aUD3blK9tI6KPa6b3Tzf6OSTx0fqvZuYoYbkQsM3PtwLT%2FsaUMDJFwlb3J4OmVS&X-Amz-Signature=dc64a656dd1acec067d2136d6da9ece2f238d2dd9dc4211933d24029dc625747&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNOX56P4%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T121326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBH85v9k1JZmU9i9zNa6%2FCBFExRk4v%2BZb26iSSSYQ3uwIgRav3b5lQFfUhl8bXPt7d9sppOLCq%2FvAyVtEh1sGQYFEq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDvfsv%2BVAzHb%2BDc8TircA%2FauAe6w8gbrO1OsbDw3nP7Yyt5i0zmIk543OOgM5CoXl1xKTPG8OrFixYEa3Gg%2F8K%2BZ%2FwikC8%2FD3Wn5dpm1At2A0Z8METhvNDiavUKMrecT%2Fabx47GKdkkUwzqBV1o6zgYoloIByOrJSoM1FR%2FtRNoNvBluiyEN697zrvWToXVV2ZyC%2F0Y6YPYsFNpYI8r3BRq7vlNv54V%2FOd%2Fth9kxfkPXyjRS12gQHVlkeuLYmpeLq%2BDifk5%2Bv5aMFN7eLZE3yGEFM53NicR7Y%2FMuG8NSYZ%2FEtcqBEGLTI4l%2F3uk7pnOzC4l7np9putN9D95cMs3UBPYrlrTP23RVxn%2BICwJq%2FBVansA1nTVYEkez1kN9ywHNn6RQDH2XpOSPkESHFK0DkM00cINiJYyJvUpT0HPHWCpleO2LI46ajlehEM3EZYUCXZB9zI6ecwCn4RWLXCi8jmfEI0oWurMO5pgxgg0YsXOE9kw%2BrSZhvwlTyNUqIIZtK1ndVnI7vQczY5ipnZ7MsmSCLKO0uTYns4iWd%2FBcv5gvmwix%2BCHSAdGVgpznIWL4BkqjzVhNS%2F9d1T99pKCoSQTxC5%2FZ8Bx4%2B6euNao621XJY3%2FrTlAdJ47ADwa3mA2N9us2gLrGuRgjWiM9MOm8ocEGOqUBZOkGlOSRl%2BnMZEOPKbIHzXmFLzRaFLfx2xbs1LTv8eu4m9lV2H%2BRLn%2BPIgz5dsGfCbcN%2BBXg%2FeUjMzN2phJFIgMhZuPt9NbJNIaZJPFGP5y2RO%2FrCl7yRqxNxhMq0mVh946RVtXlAlRvw%2FxZffNlJaPypJao9aUD3blK9tI6KPa6b3Tzf6OSTx0fqvZuYoYbkQsM3PtwLT%2FsaUMDJFwlb3J4OmVS&X-Amz-Signature=8f3e708042329c1aac0f1bf20378ef20d90a5a81b8c3422b1d232337c132dc39&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNOX56P4%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T121326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBH85v9k1JZmU9i9zNa6%2FCBFExRk4v%2BZb26iSSSYQ3uwIgRav3b5lQFfUhl8bXPt7d9sppOLCq%2FvAyVtEh1sGQYFEq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDvfsv%2BVAzHb%2BDc8TircA%2FauAe6w8gbrO1OsbDw3nP7Yyt5i0zmIk543OOgM5CoXl1xKTPG8OrFixYEa3Gg%2F8K%2BZ%2FwikC8%2FD3Wn5dpm1At2A0Z8METhvNDiavUKMrecT%2Fabx47GKdkkUwzqBV1o6zgYoloIByOrJSoM1FR%2FtRNoNvBluiyEN697zrvWToXVV2ZyC%2F0Y6YPYsFNpYI8r3BRq7vlNv54V%2FOd%2Fth9kxfkPXyjRS12gQHVlkeuLYmpeLq%2BDifk5%2Bv5aMFN7eLZE3yGEFM53NicR7Y%2FMuG8NSYZ%2FEtcqBEGLTI4l%2F3uk7pnOzC4l7np9putN9D95cMs3UBPYrlrTP23RVxn%2BICwJq%2FBVansA1nTVYEkez1kN9ywHNn6RQDH2XpOSPkESHFK0DkM00cINiJYyJvUpT0HPHWCpleO2LI46ajlehEM3EZYUCXZB9zI6ecwCn4RWLXCi8jmfEI0oWurMO5pgxgg0YsXOE9kw%2BrSZhvwlTyNUqIIZtK1ndVnI7vQczY5ipnZ7MsmSCLKO0uTYns4iWd%2FBcv5gvmwix%2BCHSAdGVgpznIWL4BkqjzVhNS%2F9d1T99pKCoSQTxC5%2FZ8Bx4%2B6euNao621XJY3%2FrTlAdJ47ADwa3mA2N9us2gLrGuRgjWiM9MOm8ocEGOqUBZOkGlOSRl%2BnMZEOPKbIHzXmFLzRaFLfx2xbs1LTv8eu4m9lV2H%2BRLn%2BPIgz5dsGfCbcN%2BBXg%2FeUjMzN2phJFIgMhZuPt9NbJNIaZJPFGP5y2RO%2FrCl7yRqxNxhMq0mVh946RVtXlAlRvw%2FxZffNlJaPypJao9aUD3blK9tI6KPa6b3Tzf6OSTx0fqvZuYoYbkQsM3PtwLT%2FsaUMDJFwlb3J4OmVS&X-Amz-Signature=9231dffea24a9fd5e8f27b5f426cf3b499683175b3544bdaecfd267a964d4fb4&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4THMRST%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T121330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQzjinKZc7uKmzys8DPjcqB7O4e7%2B0XXAD3T656CcnPAIgNaA22NzSogJTCu0bLheqZLkzwEW3tz2aqgLIUcc7hrQq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCboqfj1f3UD1GUfwSrcA8NE4Tb13ma98ES2MLlInpprFuKE4SIFycXV1tZzexSMXYy0V1TyFN78RLPgBJnbfFcFredc7auuxzji9BaDoIQ4TqNOehkAf3M6QyBUBe7eGf2usglcUpqj1mPiur%2FQjtgSw0Hj6gs06oh10nl%2BcAWEOAtq6Xv0aH1eVxYlGPtQgc6Jyfh%2B5l38Qq0AZhfySn2w2wf6k0bzrlQLOG6356INynARCWfiu67hwFaEtp7UKkkkG6w81d0GgS6fSVt7YfkMIns%2BZYjhSPsAAQOmW%2B3nLEtzCQedytOwUjaJIQV1M%2BLlAoUuisFPFcriDswuaPwn6HzqqHnc42QKf%2BMlw%2B4c63kTwjccj9N5bCrLQs9JRZjC6VM3m2l2bD0THe6ElqEj5iYv6ZSO0gXNXJyc8ox5ukXNwSbehpIQVHXiZ7ZoOpRWTjC0siG7wgzWlCQifbCLO7fW9Mn%2F5MFfRGyKQgR4ek3CUx%2BLOAL0bUoUJQHST9ced1WIYStOuT5U2ikzeGvRlmXG6PVf2JHPb%2B0jEqSRkHzmZS8Ee4jFtHABKD1shZDtHSj%2FsxhecfeMfKvG3alXJReeHtJkKTPyMd78IyclsGvyAhyP3ZVhdg%2B6CVs86a1lndG6%2BW1f3kRmMLO9ocEGOqUBII%2Ff8OLFwAqxr3IDTOeUDc7pBYO2ujgIBS1zGOewTLE0NJB2UoD%2Bzk4MDA6PDv4xgBoZCG1BcAWO3tRfZcFnI8wQIVWRGpqu694RlV60REn6JOPCerlDSKXP7fJHtxd1TQ0S4%2Ftc3HKaeBdLMpVJqETxLKmCfKONycNo5MaEnHhGDGaX4httR4vF2Vy0iiYNX84oor17V1N9nLbeZb0TioqHxMpg&X-Amz-Signature=c5bd7fcfd11f7984fc7271c9f02f78cec494b409fc524e91f08f8c5e5ce4efdd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV4QLFPJ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T121332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHHO2TNzejygrCzv%2F%2Fc1StXqAnMZOxg3KeHOBph6yNCAiAiGJiOGRSwB%2B5%2FpRJDEYKCliCyD1X4S9fwd484jix3ICr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMboWjUdwxA3KT2HzSKtwDpfLub4tFlOp6Nj%2FsMVcXl9FU6rjd3oVL1H2QwMHJc%2Fq0BEBKgtCc3oWrM4AyaiDl8mGBwkynVIm%2FUQsWTboYXnBzGV9IodnSE3YWQjFA35NZ7O2LkmznOl0mxvCw4OOjXoEoi48b4DNFDLxzodWXu0A2svZkn0Q5p9Q2fmX%2FjD5qJwlvFz6ephw2B9A9MH%2FHYZJqdOoEFXHby8lKgEshGvKsX%2B9OLu%2F4SxqUvcgTB79Lsu8qwoVBVK1PoDVcmEZBzx0jGug9vTiHHic8PyP2OwFk4Uju93OqxcISNpUqzieXvJE6IYwBgatgsoc3AKqFT%2BsBKXZUbDCgX0CQJ%2B2n5PeE6UZRjWQgnzp6wrjigkRqMzzUMUVpWYUszQ4hF0by5BIHvhrswIr2I0hzjvoaQ3WCUOyZ6ao2Z0mz%2FvwExCWGV7BKlKKpcbszsh6pekY5fVNyby%2FVuCExPJWYyyIlm9Yarmy1YkmT7Li5ZYCA%2F6aP66LfCuoAww4tefmIOXxNfMjpETG9GDArXwv%2FGwXwYcdHsFhBtlgNUDBk7K02asgyT37HTtD85BAZe9NXYA8qfX7Iw6wtHPIfT7r1TOPiO3E3aHSAenxN00sjFZRjnAkSsdj3kKIm91yF0x4w37yhwQY6pgGV4QUQbVM03dSbr7sFlkXVmarUi3NU7FZJDHMYWkp0jbI%2Bz3IsNilDJ7Kr%2B5P%2FfuCTORYGHL1qW%2FDOAf1c6PGfKB9eEmlYGkWc7FQDxsseMiOz1iEn6UBIBcr3IQaC2eGxvMC5vC5sZH9tz4SChRyEle7quHGpHlPDJz0e%2FSxG56FqvwGwCjtrkQEYNgQYN%2BiQrUtZdiPI87Lwy8QGgeT74fnRWLrH&X-Amz-Signature=39d31863a37e599be2bf5dc9775dd11ee3b3009891e95e49ae4212ae84ab9ae8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNOX56P4%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T121326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBH85v9k1JZmU9i9zNa6%2FCBFExRk4v%2BZb26iSSSYQ3uwIgRav3b5lQFfUhl8bXPt7d9sppOLCq%2FvAyVtEh1sGQYFEq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDvfsv%2BVAzHb%2BDc8TircA%2FauAe6w8gbrO1OsbDw3nP7Yyt5i0zmIk543OOgM5CoXl1xKTPG8OrFixYEa3Gg%2F8K%2BZ%2FwikC8%2FD3Wn5dpm1At2A0Z8METhvNDiavUKMrecT%2Fabx47GKdkkUwzqBV1o6zgYoloIByOrJSoM1FR%2FtRNoNvBluiyEN697zrvWToXVV2ZyC%2F0Y6YPYsFNpYI8r3BRq7vlNv54V%2FOd%2Fth9kxfkPXyjRS12gQHVlkeuLYmpeLq%2BDifk5%2Bv5aMFN7eLZE3yGEFM53NicR7Y%2FMuG8NSYZ%2FEtcqBEGLTI4l%2F3uk7pnOzC4l7np9putN9D95cMs3UBPYrlrTP23RVxn%2BICwJq%2FBVansA1nTVYEkez1kN9ywHNn6RQDH2XpOSPkESHFK0DkM00cINiJYyJvUpT0HPHWCpleO2LI46ajlehEM3EZYUCXZB9zI6ecwCn4RWLXCi8jmfEI0oWurMO5pgxgg0YsXOE9kw%2BrSZhvwlTyNUqIIZtK1ndVnI7vQczY5ipnZ7MsmSCLKO0uTYns4iWd%2FBcv5gvmwix%2BCHSAdGVgpznIWL4BkqjzVhNS%2F9d1T99pKCoSQTxC5%2FZ8Bx4%2B6euNao621XJY3%2FrTlAdJ47ADwa3mA2N9us2gLrGuRgjWiM9MOm8ocEGOqUBZOkGlOSRl%2BnMZEOPKbIHzXmFLzRaFLfx2xbs1LTv8eu4m9lV2H%2BRLn%2BPIgz5dsGfCbcN%2BBXg%2FeUjMzN2phJFIgMhZuPt9NbJNIaZJPFGP5y2RO%2FrCl7yRqxNxhMq0mVh946RVtXlAlRvw%2FxZffNlJaPypJao9aUD3blK9tI6KPa6b3Tzf6OSTx0fqvZuYoYbkQsM3PtwLT%2FsaUMDJFwlb3J4OmVS&X-Amz-Signature=905b0a65150b9b156ef05b82df644f3cc8237cd65aa2999d2c9ad1fbc5bf7026&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
