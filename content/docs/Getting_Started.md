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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIPS3DCP%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T061159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICYuInWC3j5yZXW18RsjePKdpwlFLIl15sDKeRTbhIlWAiAFkKUaOzpppFN6%2F%2FbTJvYyYpaNcLfX9WBa5smf13634SqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1HrWL27wV%2F8MItkZKtwD0MhfJLV5XrFkP4bnqR1mBn5BumYLM0B1KL%2FVLZl7AsjhxXN3llLK%2F3PlDiJfQxqzx8ZLCPbxyj55WajFj7Gv7Bou2gj9LXYJxxCZP7ai1TbeL1qfoq0Ka%2BESzYXwaVmcVikrVXa2SEoVSNwALpnAVTBeYt6nQ7FnhC%2BtRAtolL3%2Fg3yUnA4hkjcGUeqnnfnvhJHNyrZByJtpo%2F85ghUF0OSi%2BF9%2FP18J9%2BVl2GAS8DRoEu9l3Fwf3v5iL6fXd9Sohbu10IWu0JpOCY0OWKV6KnJUK%2B8Oa%2BVFZUDJiwG24smYriNJdmp2rKt7fVti7n4OMuZEcfN7I5hyRhnN6qM9UaByPJn3%2BZX3bEviTDNmO0v%2FP4whw9gFpqmsGh50jHIkww%2BZA9ZLfUui8S2m3xFp3hOJNYA5Jyx%2BgoDI4G8vuAW%2Bxp9Oxr1wbJwImumOMiL0tjRiDyALPN4NcbEDAUybFn0%2F4iWu0W2hvSErTJ0Dk2Ock%2BlhOW7LkfmaSGRPWPQSLdft9Dj1fHnVMOE%2F0SRfgA9Eci0ryFnTC8c8Vu50ansUhAoR%2FjJsHP0N828yd4NZ5yGqUyxJHOCVjlIh9brL%2F7AK4CfDW5Jlv7XfMfR01m2aiy%2F3Uzko%2FfRugXIw2o6CwwY6pgHyath0wHmyarlfChNFRSaZOVIm8Z5uQMiNqcf2RzO9F4%2BdCTHDxZIcPKFkbvG4VHgISM7iQgk0ZY6xV4k2abFVBs88rf2Ofu2yACifzRBIJss7adDHq5hVfLRfxyD%2Bm99yM2t1eG64v8oKODAw6Rae0aCIudwyzCtRB7OchS%2BsBFvoaBI2srCWU6yBPijldCx9fbbd4M7mVRD7a%2BGUJVwHS9KfEmUN&X-Amz-Signature=532f6a7da558feca44f552eedb18bcc09ce017397623dc0f923d8e915f0974a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIPS3DCP%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T061159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICYuInWC3j5yZXW18RsjePKdpwlFLIl15sDKeRTbhIlWAiAFkKUaOzpppFN6%2F%2FbTJvYyYpaNcLfX9WBa5smf13634SqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1HrWL27wV%2F8MItkZKtwD0MhfJLV5XrFkP4bnqR1mBn5BumYLM0B1KL%2FVLZl7AsjhxXN3llLK%2F3PlDiJfQxqzx8ZLCPbxyj55WajFj7Gv7Bou2gj9LXYJxxCZP7ai1TbeL1qfoq0Ka%2BESzYXwaVmcVikrVXa2SEoVSNwALpnAVTBeYt6nQ7FnhC%2BtRAtolL3%2Fg3yUnA4hkjcGUeqnnfnvhJHNyrZByJtpo%2F85ghUF0OSi%2BF9%2FP18J9%2BVl2GAS8DRoEu9l3Fwf3v5iL6fXd9Sohbu10IWu0JpOCY0OWKV6KnJUK%2B8Oa%2BVFZUDJiwG24smYriNJdmp2rKt7fVti7n4OMuZEcfN7I5hyRhnN6qM9UaByPJn3%2BZX3bEviTDNmO0v%2FP4whw9gFpqmsGh50jHIkww%2BZA9ZLfUui8S2m3xFp3hOJNYA5Jyx%2BgoDI4G8vuAW%2Bxp9Oxr1wbJwImumOMiL0tjRiDyALPN4NcbEDAUybFn0%2F4iWu0W2hvSErTJ0Dk2Ock%2BlhOW7LkfmaSGRPWPQSLdft9Dj1fHnVMOE%2F0SRfgA9Eci0ryFnTC8c8Vu50ansUhAoR%2FjJsHP0N828yd4NZ5yGqUyxJHOCVjlIh9brL%2F7AK4CfDW5Jlv7XfMfR01m2aiy%2F3Uzko%2FfRugXIw2o6CwwY6pgHyath0wHmyarlfChNFRSaZOVIm8Z5uQMiNqcf2RzO9F4%2BdCTHDxZIcPKFkbvG4VHgISM7iQgk0ZY6xV4k2abFVBs88rf2Ofu2yACifzRBIJss7adDHq5hVfLRfxyD%2Bm99yM2t1eG64v8oKODAw6Rae0aCIudwyzCtRB7OchS%2BsBFvoaBI2srCWU6yBPijldCx9fbbd4M7mVRD7a%2BGUJVwHS9KfEmUN&X-Amz-Signature=e2a87da0771893e8075629ad178eae65b3d8f8b34a1ffeb228565a0855bceb74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIPS3DCP%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T061159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICYuInWC3j5yZXW18RsjePKdpwlFLIl15sDKeRTbhIlWAiAFkKUaOzpppFN6%2F%2FbTJvYyYpaNcLfX9WBa5smf13634SqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1HrWL27wV%2F8MItkZKtwD0MhfJLV5XrFkP4bnqR1mBn5BumYLM0B1KL%2FVLZl7AsjhxXN3llLK%2F3PlDiJfQxqzx8ZLCPbxyj55WajFj7Gv7Bou2gj9LXYJxxCZP7ai1TbeL1qfoq0Ka%2BESzYXwaVmcVikrVXa2SEoVSNwALpnAVTBeYt6nQ7FnhC%2BtRAtolL3%2Fg3yUnA4hkjcGUeqnnfnvhJHNyrZByJtpo%2F85ghUF0OSi%2BF9%2FP18J9%2BVl2GAS8DRoEu9l3Fwf3v5iL6fXd9Sohbu10IWu0JpOCY0OWKV6KnJUK%2B8Oa%2BVFZUDJiwG24smYriNJdmp2rKt7fVti7n4OMuZEcfN7I5hyRhnN6qM9UaByPJn3%2BZX3bEviTDNmO0v%2FP4whw9gFpqmsGh50jHIkww%2BZA9ZLfUui8S2m3xFp3hOJNYA5Jyx%2BgoDI4G8vuAW%2Bxp9Oxr1wbJwImumOMiL0tjRiDyALPN4NcbEDAUybFn0%2F4iWu0W2hvSErTJ0Dk2Ock%2BlhOW7LkfmaSGRPWPQSLdft9Dj1fHnVMOE%2F0SRfgA9Eci0ryFnTC8c8Vu50ansUhAoR%2FjJsHP0N828yd4NZ5yGqUyxJHOCVjlIh9brL%2F7AK4CfDW5Jlv7XfMfR01m2aiy%2F3Uzko%2FfRugXIw2o6CwwY6pgHyath0wHmyarlfChNFRSaZOVIm8Z5uQMiNqcf2RzO9F4%2BdCTHDxZIcPKFkbvG4VHgISM7iQgk0ZY6xV4k2abFVBs88rf2Ofu2yACifzRBIJss7adDHq5hVfLRfxyD%2Bm99yM2t1eG64v8oKODAw6Rae0aCIudwyzCtRB7OchS%2BsBFvoaBI2srCWU6yBPijldCx9fbbd4M7mVRD7a%2BGUJVwHS9KfEmUN&X-Amz-Signature=2d3b095f267beea42d2d2178faa954039b518a5e3ce04aae48e9669aca7a33a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNIT7UZG%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T061200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9xBv6lvYXsyunqW30gIod4HYXNhInx3x3HxQY1Fa48wIgOMknywE3SAT9YE1K9Jo%2FvV%2FPdDeRByFviYJxNRRGU%2FgqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMYfpyUUTbdTNDr%2BcCrcA6DYTmXtG1fBir0HYzxrILfM%2B%2BBpgWET6PNGXxbl0UBMaQzmNn87DaRNJvNoz0Z%2BJ%2FkSbubFA9EXQB0dO0mz7WJRIxvYaX6ljPYsPhdJ0Cgk8uKQDgYl%2F7X2ltfjghuRDmf0SgDKi1UwyHqzav%2FHLRMcsUXEldIMY91YsELDAVPrGQCmcAzgh%2BKVszOgAMAVMQ52w%2FPNSsz3N3%2FQYEovI4ARiEkGAT3sE1bPUur5COwQNqC5%2BjEN8KtFa1ZEeA93cgdhqTUXF%2BkfahNWPE2NnnzOjl7vnV2LYLULP1mmahmRnX%2Fu8Ltj7wQzqxhfFmqGk5niuMmVzk4NDSfmICOHNyg%2F5gKVWHdvoD%2FLcehWg%2BBUhgJyeFIb3gaT2KJyGlZgMNed0MAxI1QAi23ynLiySw9d43FHsqknq%2FGjTSmeZ7aFn%2FIh%2B6QGHCtVX5bPW5AIvXWFUFCcBJT9zlDJabFqtH4Ag1lblD%2BLupwcM5O9mZ2jQWaYg0ly9ZPwnVvtE29AR7cWwL2h6HsIn825JkV4ULDJpV35y0LF8rbwr95eo0Qr0Cb6ZPFLUMP4Aar6yOa2Lc2Ox7O0hAAk3X1FEQLnoDzNYn1pAPggV4lr%2FBdXpjWmKl8KjhyBxPZC3cNgMOCOgsMGOqUBhtzDR7l3Cjr6S2BkXJWMAFaWBspbH6Gabq6a6ITGMdASKY6%2BozgHdu2cBlIsxT2Of0gMFAAuE7AOx1XpkulLOgU5WYLBtlq5v8bu4qfsEkIMZWwO7KIzA%2BRUVNOgEcFyaOGZNT3CbpZWnAd9uCAM%2FLmuwTwoBkVTLLbsi7cI%2BGBUJnwOvC2kaO9%2FVhH8nAzXUewfyXcMgrn7HO%2FoCEneUxkhlM2Q&X-Amz-Signature=c04c298a7acb8b19c2927d30be1d91bd9404c3e8c3b067761077c656cda4376d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG7C6ENF%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T061201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDpYyljJn1nZrR1g0AQGYV%2BhA%2BFy1HQo2Z4WmKzc%2BAGUAiEA0EST3zkVI5%2BoT4CvZAzUQJqDcfU4W%2FWH9Ud0AsJbmBYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPkCJudpNZFS8xoyLSrcA2zYpozsGLi7euuHSEbumsle29C%2BgmApt2iXrb0KibDj2ZLifG9hDShraxCfpBRkrvNxEYL2WfJjXd2aye3xv8fmr8QmylePa6ik244csIaStnzN7rTcBrg%2FEDd7ZWrDMGiq5DDrsepQF%2B%2BD1lQH1by57pO%2BozV9b2fg5LNSNkLopLxQmlmhkMoX5I7gBHcJkqCWU4JY4CiTx4QLAn%2F67kmqS6wiA52nSgSjK8JQkisqZ5IdszPEcDUt5SWHL3DBN5%2F4jlDt27Cw5J04og10ErUUcWlZ%2BMbJ1WwEwy%2FRpdTaeUkfkwgEWOgwuU0n3Vb3bwOFjhRSqops02wNnF4J5zI6gQ2CVFSqqO5fIPRHckrJnBjJhgpBAggCLyUIgQSRi1Na7avT2dfJ3YAlT8eC9ce9B33OIjovzErFwT5kVLucVuvqcR5OCMuRe6NCNmM0LxBlN%2FRcmaX7g5BngUB5%2BbEl%2F4PDgIkdMF1Y0OUPjflF8dDHfamwXp9x1WFlrMdqWawe2e8unti3iPvlih7NOKdBTriXnAfVuIuN93ZKYx0MdXIo%2B9iHjFj7kRes6AuLjRgR%2B94l2kfxatsdcdhfVv8Xim71XOVrLdmUGTmGlfAvq5vgHNt7xcHdjhJcMPmTgsMGOqUBarLyadykPrXPTDo8HO%2Fryt9spm5%2Ftd2Uao0xEKnPaUIKenrshqdmaemkHm3mLBHXoXgroZnQajMIOEaIiUeWOxBgOyfi2kiUh5LNOlJRXrNtGnciJOW3I7L8skXAhfLLXQ6zg73cDI8zq2FmEKCC8JpKRD4F7iJsLUvwxL7AMtVSoHii8WpVahY3zfo22PcdlcB3D40neqFBjaq6YayPOvr99pwN&X-Amz-Signature=6cd791a1c3140ffac6f2780b0a9ab7d77a94da3a81818fabba15ab46fb195d91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIPS3DCP%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T061159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICYuInWC3j5yZXW18RsjePKdpwlFLIl15sDKeRTbhIlWAiAFkKUaOzpppFN6%2F%2FbTJvYyYpaNcLfX9WBa5smf13634SqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1HrWL27wV%2F8MItkZKtwD0MhfJLV5XrFkP4bnqR1mBn5BumYLM0B1KL%2FVLZl7AsjhxXN3llLK%2F3PlDiJfQxqzx8ZLCPbxyj55WajFj7Gv7Bou2gj9LXYJxxCZP7ai1TbeL1qfoq0Ka%2BESzYXwaVmcVikrVXa2SEoVSNwALpnAVTBeYt6nQ7FnhC%2BtRAtolL3%2Fg3yUnA4hkjcGUeqnnfnvhJHNyrZByJtpo%2F85ghUF0OSi%2BF9%2FP18J9%2BVl2GAS8DRoEu9l3Fwf3v5iL6fXd9Sohbu10IWu0JpOCY0OWKV6KnJUK%2B8Oa%2BVFZUDJiwG24smYriNJdmp2rKt7fVti7n4OMuZEcfN7I5hyRhnN6qM9UaByPJn3%2BZX3bEviTDNmO0v%2FP4whw9gFpqmsGh50jHIkww%2BZA9ZLfUui8S2m3xFp3hOJNYA5Jyx%2BgoDI4G8vuAW%2Bxp9Oxr1wbJwImumOMiL0tjRiDyALPN4NcbEDAUybFn0%2F4iWu0W2hvSErTJ0Dk2Ock%2BlhOW7LkfmaSGRPWPQSLdft9Dj1fHnVMOE%2F0SRfgA9Eci0ryFnTC8c8Vu50ansUhAoR%2FjJsHP0N828yd4NZ5yGqUyxJHOCVjlIh9brL%2F7AK4CfDW5Jlv7XfMfR01m2aiy%2F3Uzko%2FfRugXIw2o6CwwY6pgHyath0wHmyarlfChNFRSaZOVIm8Z5uQMiNqcf2RzO9F4%2BdCTHDxZIcPKFkbvG4VHgISM7iQgk0ZY6xV4k2abFVBs88rf2Ofu2yACifzRBIJss7adDHq5hVfLRfxyD%2Bm99yM2t1eG64v8oKODAw6Rae0aCIudwyzCtRB7OchS%2BsBFvoaBI2srCWU6yBPijldCx9fbbd4M7mVRD7a%2BGUJVwHS9KfEmUN&X-Amz-Signature=052ca986ef63d4643eb351d4497a5c255427eef29b953e10640eddcb56d33af7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
