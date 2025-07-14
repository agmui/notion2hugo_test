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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q7CHNNG%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T151018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQC3e2K5eFX3a%2F2ONLDIOTpqo828cjRrT4cYsXxBto%2Bg0QIhAPgFsSVqOw0aAk4Mkxi0NAZx7vY7OZJc0VxR8hT6ywadKv8DCC4QABoMNjM3NDIzMTgzODA1IgwoZMFkEBAtI7HnKSUq3AMjUYvVfa9Sz8b664M75OPGfOC7VuVzpiMoWcLy6T4Vi8b1Qutti2se4L3SdDghCrHCGtjtUJBPUTqYErvFkZX%2FlLIj3WMu1XsLKu4fgfCaAqn2uLySRWD%2F%2BpV3AiaGzp%2BiCUpdKh9h5VeT7c1qQL6Y8cskr52HZxLu%2B7OwU4L%2Fz0S6g15C3Ma7M2ziEM4SSRvf29p7EA%2F2iiicUmXRZDNH0m22JM4F5vTyzNpLMJfWocjWLXD3meeVLeh8pZwgn5lNTE3zeREyWH%2Bqk5glNaY5zSvPI4gmfiEEvy7Ks7Jzhf109EijrkePR7Mm2oq7oKNFYIfh7MbQUqGCkGvHTBy4Mq01IiIKGuW85KeYYpb6jZ%2B0NCwsFylCS3EyCK88tvF06n5YOAxuI5kgvXVDF2xJDAgji56y4WivFlgTjC%2B9%2Bc%2FRl%2FvlDUIpagwB5zVO%2FMEJ4ZOQFCcjmWr6AxXCSz4akzUG%2FEyat1C6FOzIZxY46%2BKK3DumxL1H0b6Mad6pCbebd%2FNTSFhxUoZpwKp2IXdCwNV1OsAFeBxZRRNd7czZ2ERPcN9D%2B3YkiQnJXzC54o%2Bt%2FIrpIDIRqlRnf2JKE6znlf1TQCgH%2BNeaJrvYiKFRE3WUt0C3PIpc%2FAL08zCihNTDBjqkAQO%2FUojT7Dm9qGbUawkskDpfWnWR%2BOdWuiWPPXZYpb6meALX9850SX3s94IdtbgLgWdyCpa%2FjJPNZKLvsPCIPQsYB9HvRyNv%2FSALsSKwW05bYFnZ1VnwD8uk%2B3cgtv5UOFbtbiD%2BI9tBVR0gsBACVLbnnPixO4wrgDqhpzlcoRK3FEmB7tlamgx0YCFdDcGJlZEHt%2BsnNjOzIiOF4gbyM2s21XNC&X-Amz-Signature=c6b81fa2a3c25eec47e62462565f0e500e430923bcaa104fa51f9055a9fbb6c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q7CHNNG%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T151018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQC3e2K5eFX3a%2F2ONLDIOTpqo828cjRrT4cYsXxBto%2Bg0QIhAPgFsSVqOw0aAk4Mkxi0NAZx7vY7OZJc0VxR8hT6ywadKv8DCC4QABoMNjM3NDIzMTgzODA1IgwoZMFkEBAtI7HnKSUq3AMjUYvVfa9Sz8b664M75OPGfOC7VuVzpiMoWcLy6T4Vi8b1Qutti2se4L3SdDghCrHCGtjtUJBPUTqYErvFkZX%2FlLIj3WMu1XsLKu4fgfCaAqn2uLySRWD%2F%2BpV3AiaGzp%2BiCUpdKh9h5VeT7c1qQL6Y8cskr52HZxLu%2B7OwU4L%2Fz0S6g15C3Ma7M2ziEM4SSRvf29p7EA%2F2iiicUmXRZDNH0m22JM4F5vTyzNpLMJfWocjWLXD3meeVLeh8pZwgn5lNTE3zeREyWH%2Bqk5glNaY5zSvPI4gmfiEEvy7Ks7Jzhf109EijrkePR7Mm2oq7oKNFYIfh7MbQUqGCkGvHTBy4Mq01IiIKGuW85KeYYpb6jZ%2B0NCwsFylCS3EyCK88tvF06n5YOAxuI5kgvXVDF2xJDAgji56y4WivFlgTjC%2B9%2Bc%2FRl%2FvlDUIpagwB5zVO%2FMEJ4ZOQFCcjmWr6AxXCSz4akzUG%2FEyat1C6FOzIZxY46%2BKK3DumxL1H0b6Mad6pCbebd%2FNTSFhxUoZpwKp2IXdCwNV1OsAFeBxZRRNd7czZ2ERPcN9D%2B3YkiQnJXzC54o%2Bt%2FIrpIDIRqlRnf2JKE6znlf1TQCgH%2BNeaJrvYiKFRE3WUt0C3PIpc%2FAL08zCihNTDBjqkAQO%2FUojT7Dm9qGbUawkskDpfWnWR%2BOdWuiWPPXZYpb6meALX9850SX3s94IdtbgLgWdyCpa%2FjJPNZKLvsPCIPQsYB9HvRyNv%2FSALsSKwW05bYFnZ1VnwD8uk%2B3cgtv5UOFbtbiD%2BI9tBVR0gsBACVLbnnPixO4wrgDqhpzlcoRK3FEmB7tlamgx0YCFdDcGJlZEHt%2BsnNjOzIiOF4gbyM2s21XNC&X-Amz-Signature=7d7facf15ab52d0639e13ae0b956205059dee7ec7e869a80e03daa7789af5076&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q7CHNNG%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T151018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQC3e2K5eFX3a%2F2ONLDIOTpqo828cjRrT4cYsXxBto%2Bg0QIhAPgFsSVqOw0aAk4Mkxi0NAZx7vY7OZJc0VxR8hT6ywadKv8DCC4QABoMNjM3NDIzMTgzODA1IgwoZMFkEBAtI7HnKSUq3AMjUYvVfa9Sz8b664M75OPGfOC7VuVzpiMoWcLy6T4Vi8b1Qutti2se4L3SdDghCrHCGtjtUJBPUTqYErvFkZX%2FlLIj3WMu1XsLKu4fgfCaAqn2uLySRWD%2F%2BpV3AiaGzp%2BiCUpdKh9h5VeT7c1qQL6Y8cskr52HZxLu%2B7OwU4L%2Fz0S6g15C3Ma7M2ziEM4SSRvf29p7EA%2F2iiicUmXRZDNH0m22JM4F5vTyzNpLMJfWocjWLXD3meeVLeh8pZwgn5lNTE3zeREyWH%2Bqk5glNaY5zSvPI4gmfiEEvy7Ks7Jzhf109EijrkePR7Mm2oq7oKNFYIfh7MbQUqGCkGvHTBy4Mq01IiIKGuW85KeYYpb6jZ%2B0NCwsFylCS3EyCK88tvF06n5YOAxuI5kgvXVDF2xJDAgji56y4WivFlgTjC%2B9%2Bc%2FRl%2FvlDUIpagwB5zVO%2FMEJ4ZOQFCcjmWr6AxXCSz4akzUG%2FEyat1C6FOzIZxY46%2BKK3DumxL1H0b6Mad6pCbebd%2FNTSFhxUoZpwKp2IXdCwNV1OsAFeBxZRRNd7czZ2ERPcN9D%2B3YkiQnJXzC54o%2Bt%2FIrpIDIRqlRnf2JKE6znlf1TQCgH%2BNeaJrvYiKFRE3WUt0C3PIpc%2FAL08zCihNTDBjqkAQO%2FUojT7Dm9qGbUawkskDpfWnWR%2BOdWuiWPPXZYpb6meALX9850SX3s94IdtbgLgWdyCpa%2FjJPNZKLvsPCIPQsYB9HvRyNv%2FSALsSKwW05bYFnZ1VnwD8uk%2B3cgtv5UOFbtbiD%2BI9tBVR0gsBACVLbnnPixO4wrgDqhpzlcoRK3FEmB7tlamgx0YCFdDcGJlZEHt%2BsnNjOzIiOF4gbyM2s21XNC&X-Amz-Signature=d7217239fa416dce6d08b6b6aeeb44680ac0d072ba5de34fa7a6f9bb432cd552&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BDUSAKP%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T151020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIDGvRsE8v8QocNusp9atKHcHKqMQOPAAI6h1ljgSxoNYAiEA%2FTottJIyiV3iOSclwSsJ%2Fy6TtFzRTh29NJQtwlxTyH8q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPFm5QjnuR%2BYcCousircA9V%2FSCLO3OEv7MGtB6vfmyCtK%2BRhEK6JSvij%2BVOPBSGKJPxbUUSH3kBk6TLgLJMIyrSeAcC5Pe1RJLKCMHZrHVdsz3oPMS0SRNza9ewQpx5aJFn1r%2BbueUIKNnE%2Bo3mQfgVTL0DRc%2F%2BNtijw3z%2BiKW34l7WMK1Tpq04ZNs2dvAblI5TKsrvn5WVWXIt82N8hBL5ir2tq9h6hJdWf4oK4jj18ycmkrGcjxiBKHRJzA7YHJs8A7KUJx9QfZ1RCy%2F91urQ8BiaJ0YF3ayPW8zB2K0ow1zs9rNRIfCofCc2TmRYqKGrHwiW9F%2FGeLIod%2FcxhX63MNnUwdsHrfLxe1zsW1KSKR6LN%2F9%2FOO3kSPgB24KPYsLw3GHJPZL0Nf1yfBTaDeswEUXABDqK5kKcSTi0DnV6tIwtDypluaf6BSL%2FvECYXJChqAz4intk3B2UQl1JceUq0FrJt949kM3hV8btdSgPrdfsZCsXWRPi5JaH1bPSVW8ZgO3iY5Q8lh0RQtSiJjngvmUgwUGKEAl7zChyOagAVcGxJEf8YYxauzSt16v5MqBGODcaURPs%2FGwtT3bU4ZLSjKdkRC%2Bjd36SuPXqNYissrX4NpDoDtVkcGmdiOiXT%2FRXwFG4iyA7083tfMOKE1MMGOqUBpnYllhGfFp8GEzo1bVp8Y8aqjNTvwXy6JM04nw0Nk6I%2F141LtWyT8rHJvcfkwvwpSurV77wu2O%2BLFvWiN8EM%2FceEd4yiUFuEY%2F5x5w%2FnS4oBRfaAA%2BROrcqnpFygJAYOjofiLXal7o2VtOsW2NZE%2F5PmO%2Fm1ZvE6%2B7S17A%2FdiilQGCCbMOzSeoL4h0uSO4dXD%2BDaLFfPox60YPHdoHzT%2FrEyajio&X-Amz-Signature=33adb823ed1fdf0cbe5b0fb58343993cfcc7af074e08f11dabaf4b5dd4561868&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBRKOPJD%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T151020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIH9skfy45uzJnyL8D4npC2utjMrYPzr%2FRUar%2BHiIHWDGAiEAi2NXhe6Z2jYo3AMYmMMedy37mLdCtV4CTT2lJ0tUItMq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLGxisKsJ%2F4wweF3YSrcA7Uur5pLtGjd9IGsewNAwyqpeQEF8Ul6hdo0IAn9WTXIq9nYYr4QhWT4PZMyPZFswjXS%2FI3NCJHNGMf5OMH65zy4gqYQf5teTh34yr4jPOx9xzeGj11nT6LfJts%2FWeIBXWGvuRRwwX5Cp%2FDn84FRzmOaBBMEN44bv8atmGdQeUuJD6J25lYXcNAj%2Bwq%2Bve9Vm%2F8I%2BfkVPPo40Fk1Zp0V3LTPdqyfAznORTicJNM5AF3M3yffEDF2lSdcyMrcPaQtyNFa73gsM26ZUutkKZCFQpfgbp8tPwQzX2ydHHymTuK1jgexpMTEGqNOPZRjzaa%2Fe0SoplRFCCmGLtnKtO02S0K1UmznS2%2BPQ4XFQ%2BHe8CIu97ZDgE1QNfc%2F8o6bBYYMaWMABP23EHQPBCWLzQ0qd6sRHDz%2FpOBtf4PuYM%2BKMIXao%2BNDvirIhDXrWdPOlmZasYH5pt1u2ww7AGQEMQu9MXiyJObxtmN6kEYyaSe%2F%2FInSD7ivNIJOw8u7myTb%2F2eoeKvOXJvY3daB46G8jKighHqBcfSDCbxCQAXBoPBMwFw0I42vRAHrce5ysdftmIXqWmU14hq%2BnT3aXIWGINAMmvntMFOzBG3UUgf6yXJzDpQP0TXZTk%2Bo81PPj4jCMK6E1MMGOqUBi%2Fr7qHYN2WMhMDUNfVjZuiZ86%2BuHNHGfgjrJareaGK9KM%2BcpLQzbxg%2BGF6md5dsoFdOHAtETGXYb%2BK4vk9ZahO2%2FkAWSgEriTloRPVtD8CbLb1kfJQprI5%2Fi3Y7A%2BxevwpXmpD7EGwG763kuVIJttewKdLzYXcDvHC4S6%2F3SSbXWd%2FAH4xjemx3enlyRgR8PzPlItZcP9vEw1ed5ZPjz6NE4jWx0&X-Amz-Signature=c65c21513c79f8e80cd6a5c2d63c05385610435eb2bf9e9f044c8833d2468f05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q7CHNNG%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T151018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQC3e2K5eFX3a%2F2ONLDIOTpqo828cjRrT4cYsXxBto%2Bg0QIhAPgFsSVqOw0aAk4Mkxi0NAZx7vY7OZJc0VxR8hT6ywadKv8DCC4QABoMNjM3NDIzMTgzODA1IgwoZMFkEBAtI7HnKSUq3AMjUYvVfa9Sz8b664M75OPGfOC7VuVzpiMoWcLy6T4Vi8b1Qutti2se4L3SdDghCrHCGtjtUJBPUTqYErvFkZX%2FlLIj3WMu1XsLKu4fgfCaAqn2uLySRWD%2F%2BpV3AiaGzp%2BiCUpdKh9h5VeT7c1qQL6Y8cskr52HZxLu%2B7OwU4L%2Fz0S6g15C3Ma7M2ziEM4SSRvf29p7EA%2F2iiicUmXRZDNH0m22JM4F5vTyzNpLMJfWocjWLXD3meeVLeh8pZwgn5lNTE3zeREyWH%2Bqk5glNaY5zSvPI4gmfiEEvy7Ks7Jzhf109EijrkePR7Mm2oq7oKNFYIfh7MbQUqGCkGvHTBy4Mq01IiIKGuW85KeYYpb6jZ%2B0NCwsFylCS3EyCK88tvF06n5YOAxuI5kgvXVDF2xJDAgji56y4WivFlgTjC%2B9%2Bc%2FRl%2FvlDUIpagwB5zVO%2FMEJ4ZOQFCcjmWr6AxXCSz4akzUG%2FEyat1C6FOzIZxY46%2BKK3DumxL1H0b6Mad6pCbebd%2FNTSFhxUoZpwKp2IXdCwNV1OsAFeBxZRRNd7czZ2ERPcN9D%2B3YkiQnJXzC54o%2Bt%2FIrpIDIRqlRnf2JKE6znlf1TQCgH%2BNeaJrvYiKFRE3WUt0C3PIpc%2FAL08zCihNTDBjqkAQO%2FUojT7Dm9qGbUawkskDpfWnWR%2BOdWuiWPPXZYpb6meALX9850SX3s94IdtbgLgWdyCpa%2FjJPNZKLvsPCIPQsYB9HvRyNv%2FSALsSKwW05bYFnZ1VnwD8uk%2B3cgtv5UOFbtbiD%2BI9tBVR0gsBACVLbnnPixO4wrgDqhpzlcoRK3FEmB7tlamgx0YCFdDcGJlZEHt%2BsnNjOzIiOF4gbyM2s21XNC&X-Amz-Signature=6f00c5f345f00488a0ba6867cb50964fa1991684317af67b435fa6044c4dbcb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
