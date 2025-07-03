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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF4AHWHS%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T140904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCUIdvEKk94SsFoDIka1UjAmBFYLkhAE4KKmlZsNWIQ5gIhAOZp4mQAuG8RetfqCssBjcwSRgQ%2B4oKMGOBdd33752qKKv8DCBcQABoMNjM3NDIzMTgzODA1IgyM%2Bn%2Fx5PJaWDRZcSAq3APmwDrmz2FK7%2BjW0J65Nizd42X4QcDDqqNyjkD4tBq%2FKHB7sqY5kAbbDysStQDLB3yJbrZh5TbsdVJHbxuMik5jAzP07BAYn77t3PiKt%2FCsm81u%2BUlfHhcScTLykm19D%2FVU8pCj2E3ENM5u75nBGP94cekovcQ44iciPvXsqfgyq62KAjwsE5swLGEap3i6hvOt7aiEqZBPxZMQe4Fgb0AvYNc728lLmxCGbyPdQffPA%2FYwkfqc7WsNWxZe29VI8tzUryUMO9aOBkZwliamrbsPcGhbr7KPem0e1%2FS6WerF7l49DCkPiqjWujOQpIgWC8gfFMLsdjZLwG1m%2BA7%2FiQHb9aO2OP16FMta2Uo8uvKdc0byvRB8lfapUbOwxgeyeGHdPYOGzvqsE9N46JxnjHaK3CAnPHlH7O5jtvd45no2o7zRfjF29i%2FTEzdEhMhpqfP0gAKoPtW5z%2BFwkAFuvJB%2F4ypowWJHaVBGa18D1SHi%2FAKY1%2Fgd6xuU2fdjnhMj1HSnmajAluB7lSkJN%2B4gsPGJs1P271Urnigf4e2jJLg%2FXi6ZfXI6B2f1iQYsC8e2S%2FzYS4A%2FWxWWK%2BDXw8q8THPA0AFwmlVMY2tHhIxnk7KVp84lxqEwPzTQGuyh9jDWjprDBjqkAZZdirx3XFQNawcEDC%2FztU1SNGebkR9r7mBcGV%2FGxl8%2FssBgB2QdVU2fJtznZUYtdLOqzmucX2Kbr8B5kaE%2B4n4eiZD%2Ffzlv8bCess%2FgQe9fKcPXEQt0ssXJkaOqgDfqZT%2FnyfG2b%2F5%2BTxQfgit1eWi%2Bk%2FFGJ4bv4%2BuUXWIn0lAt%2BB3XX1EU9hdfDj4LLpdAOOccI%2FhgBli2vz6bweGzyVLtXI%2B8&X-Amz-Signature=7654a7712b38d43011e6371199d2cabe34b04725fc0f5aeb192a65b74fb05f2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF4AHWHS%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T140904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCUIdvEKk94SsFoDIka1UjAmBFYLkhAE4KKmlZsNWIQ5gIhAOZp4mQAuG8RetfqCssBjcwSRgQ%2B4oKMGOBdd33752qKKv8DCBcQABoMNjM3NDIzMTgzODA1IgyM%2Bn%2Fx5PJaWDRZcSAq3APmwDrmz2FK7%2BjW0J65Nizd42X4QcDDqqNyjkD4tBq%2FKHB7sqY5kAbbDysStQDLB3yJbrZh5TbsdVJHbxuMik5jAzP07BAYn77t3PiKt%2FCsm81u%2BUlfHhcScTLykm19D%2FVU8pCj2E3ENM5u75nBGP94cekovcQ44iciPvXsqfgyq62KAjwsE5swLGEap3i6hvOt7aiEqZBPxZMQe4Fgb0AvYNc728lLmxCGbyPdQffPA%2FYwkfqc7WsNWxZe29VI8tzUryUMO9aOBkZwliamrbsPcGhbr7KPem0e1%2FS6WerF7l49DCkPiqjWujOQpIgWC8gfFMLsdjZLwG1m%2BA7%2FiQHb9aO2OP16FMta2Uo8uvKdc0byvRB8lfapUbOwxgeyeGHdPYOGzvqsE9N46JxnjHaK3CAnPHlH7O5jtvd45no2o7zRfjF29i%2FTEzdEhMhpqfP0gAKoPtW5z%2BFwkAFuvJB%2F4ypowWJHaVBGa18D1SHi%2FAKY1%2Fgd6xuU2fdjnhMj1HSnmajAluB7lSkJN%2B4gsPGJs1P271Urnigf4e2jJLg%2FXi6ZfXI6B2f1iQYsC8e2S%2FzYS4A%2FWxWWK%2BDXw8q8THPA0AFwmlVMY2tHhIxnk7KVp84lxqEwPzTQGuyh9jDWjprDBjqkAZZdirx3XFQNawcEDC%2FztU1SNGebkR9r7mBcGV%2FGxl8%2FssBgB2QdVU2fJtznZUYtdLOqzmucX2Kbr8B5kaE%2B4n4eiZD%2Ffzlv8bCess%2FgQe9fKcPXEQt0ssXJkaOqgDfqZT%2FnyfG2b%2F5%2BTxQfgit1eWi%2Bk%2FFGJ4bv4%2BuUXWIn0lAt%2BB3XX1EU9hdfDj4LLpdAOOccI%2FhgBli2vz6bweGzyVLtXI%2B8&X-Amz-Signature=e7a6aa87a502e275ed828ada8fd2b5cd30665876828a81421dfddf28fb0f0f49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF4AHWHS%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T140904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCUIdvEKk94SsFoDIka1UjAmBFYLkhAE4KKmlZsNWIQ5gIhAOZp4mQAuG8RetfqCssBjcwSRgQ%2B4oKMGOBdd33752qKKv8DCBcQABoMNjM3NDIzMTgzODA1IgyM%2Bn%2Fx5PJaWDRZcSAq3APmwDrmz2FK7%2BjW0J65Nizd42X4QcDDqqNyjkD4tBq%2FKHB7sqY5kAbbDysStQDLB3yJbrZh5TbsdVJHbxuMik5jAzP07BAYn77t3PiKt%2FCsm81u%2BUlfHhcScTLykm19D%2FVU8pCj2E3ENM5u75nBGP94cekovcQ44iciPvXsqfgyq62KAjwsE5swLGEap3i6hvOt7aiEqZBPxZMQe4Fgb0AvYNc728lLmxCGbyPdQffPA%2FYwkfqc7WsNWxZe29VI8tzUryUMO9aOBkZwliamrbsPcGhbr7KPem0e1%2FS6WerF7l49DCkPiqjWujOQpIgWC8gfFMLsdjZLwG1m%2BA7%2FiQHb9aO2OP16FMta2Uo8uvKdc0byvRB8lfapUbOwxgeyeGHdPYOGzvqsE9N46JxnjHaK3CAnPHlH7O5jtvd45no2o7zRfjF29i%2FTEzdEhMhpqfP0gAKoPtW5z%2BFwkAFuvJB%2F4ypowWJHaVBGa18D1SHi%2FAKY1%2Fgd6xuU2fdjnhMj1HSnmajAluB7lSkJN%2B4gsPGJs1P271Urnigf4e2jJLg%2FXi6ZfXI6B2f1iQYsC8e2S%2FzYS4A%2FWxWWK%2BDXw8q8THPA0AFwmlVMY2tHhIxnk7KVp84lxqEwPzTQGuyh9jDWjprDBjqkAZZdirx3XFQNawcEDC%2FztU1SNGebkR9r7mBcGV%2FGxl8%2FssBgB2QdVU2fJtznZUYtdLOqzmucX2Kbr8B5kaE%2B4n4eiZD%2Ffzlv8bCess%2FgQe9fKcPXEQt0ssXJkaOqgDfqZT%2FnyfG2b%2F5%2BTxQfgit1eWi%2Bk%2FFGJ4bv4%2BuUXWIn0lAt%2BB3XX1EU9hdfDj4LLpdAOOccI%2FhgBli2vz6bweGzyVLtXI%2B8&X-Amz-Signature=8bf19dcdbcaaa6ed66798226e66747d0e1513379cb5b43300bba970ba28916cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2ATG2PX%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T140905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCFZ70TNXo8iFOoK%2BlrjaWvabKhUsjQYdSc6DpQNpouHAIhAKp1YY4NgCA57tk81j38KckD6MHQACNgTyggOzv3SXUdKv8DCBcQABoMNjM3NDIzMTgzODA1Igy8jp3CwIzrG1U%2Fo7oq3APNHmLqD2EFwWofQxm9Jn0qkfFkbeOxkRH2wnSEST%2B1CubO5BQa3NDvO7AdJtpjHa54%2FTDr6D2%2FuovHIhhvaoGS06c2qlGzXOCWHelECfajcQYbW9Cyz%2FCZcG3TBjpN7HgbmRzSULKYT6TJmH%2F9I9B54FdvFzq%2FT72ceaMz7YhCC9HSy68J9aczuf%2BHg0QiJXSnTHzPIh0GgaoKsl5gBgFez%2B6aogt2F%2FicY0c%2FE5JVgViUFK9nPvEa6Lb1CpOiIk1rBZMPbRb%2FKv%2BsU8%2B%2B4J%2BGUGf8Co75aJi8EuGx4nFnx%2B6IvlwG5%2FbeWP8XXj66a5F0JIUIKnsFzyZ0L2Uow4i6r45dFyNPCPSR7Dx7tndz441eXcyB%2BSXgp1z5TNq2zO4mmAYFF0mSPauIKY11kKctM3F7EpaZuRrZG2qWwJ5t%2B48tzrIGdLM6lJFfs1DvEbZ6AC20%2BLhbMN20OMWhaMbm6ZC2EIbBQBEtd%2Fk8NGBseeEYl%2F8HlX6YB5IymfDUQMSlYzAwth8q73sJ9EcvSMLxZt9uuMeBwjLn9zj0dMe9OPjN0K0BEPm7vSNvAa1pzRuDnlTMkL4PvL4z8u7iNeiV0rKAitW6K1wBPyYhoczLp2nhmpnbDSfGPfEI6DD6jZrDBjqkAdxLSYVTlc8mP4s441daU86NWJszrGyUdgcJRl%2FIV5IJRDPr3OtWtA1Ux0bgO6FE4O9lA2Em0AvnvMhXU1pdVYdYGIklw%2FuZHcW%2FZI6QH6UklN%2FP9QuiMcCLEEGs1%2BLZLp%2FzQcM0t1buVFJUVbVtCQJaqedCny0262GAQZNEX9BAY2VzOYf4JErefZytl2VdGWeG2HFRyAjypeqS9Dkm6p1gnsnl&X-Amz-Signature=55c43ecd8bfde6969b853c6b57a3213ab5de3a1f51796d49a405547322ec8b46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WTJKFLT%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T140905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCOXGFlC6DRZdnStNTRx1xwtgoDh6F32gDSSivEs40XIwIgIy6fHJmwc%2FQ74zbxjk5BDW7Yk6Ot2qnOtoUyDeIZYiIq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDG1FpWEp7KXxPEdvHircA5rIFirIkFDVmGVny4Pl2mkuhsuAbsTekQgUtypFbI5tejeq8%2FN38TF4sa7r1eoDtJ8FClME6NU6P1ZPOW8dMBBEsQfeaLbwJjPGd%2Bs2CnHvg9XOtW%2FKgzTqQFfN%2BUZBwpjrFJehXcJNXL0mLI65%2FSaVj4WH1zOGgSmmhfvIAF50UImAbGBBIDVeMCaoK9mr%2B4fY78UMHBmZpQUrtaw7zDsSODvgMjIOIWIQ1%2B7fp31GR03egqmhkhwNOpf7S2Tv%2BbJaZqeckscj5jqRMy3w7ztErfccxjAye01lBhwwf3xVnhysyTJQ9wwPn%2Fw8GP1lfz51eH5jovrRDtDXSlXZdtrNDQOnrkqzyxk9e95PrC3Yz0thNL7ZaMW1gxbFQ4okTGHTjXtwt0BnI4d0087zaEM3Eid%2BkGbYiUUQXBjNBszbO7lZ%2BxJH5%2B0u9wBBnRnJQD6c3K0LiiVIxFtgUalR44VjJfRihTl82cJttZpIr3o5Xs5U2fbBohyWGhXlCOAcyrKMDSqif3J4HwZO5zboig1kOFCyyXhJq58ab6%2BS0XIYRlYzR5%2BcZyq9zR5wgINWK3WIxphig5%2Bu%2F%2FhtB%2FXCMGTbAvXQc6tQgcsUsIOHTE6PyeANcXVBObv%2BFsVTMJKNmsMGOqUBuPrUIy0myId6Bm6dymnoJ5jBBc7cyipyrux1AKL7vKkCw1bb3YOKIH8S3tuBa1AXiXlZB6vMHimcbcPfAByPTVt3fXQg7OLqfA%2B5nzDAZPtXdib5CYPQHmj8b9kseogxU3Kk2bqes%2FxlO0idxE2lu%2Be21psT6o6H5J7dNpaFDJNQmQBmEe51gD2XGnZw1fwzVpk5CxZvtVF393mTkzTnSfLWriX2&X-Amz-Signature=b4ead0d0abbde1699072db1bab614fd5b4b952f562a7ba8fe52bec06192b05d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF4AHWHS%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T140904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCUIdvEKk94SsFoDIka1UjAmBFYLkhAE4KKmlZsNWIQ5gIhAOZp4mQAuG8RetfqCssBjcwSRgQ%2B4oKMGOBdd33752qKKv8DCBcQABoMNjM3NDIzMTgzODA1IgyM%2Bn%2Fx5PJaWDRZcSAq3APmwDrmz2FK7%2BjW0J65Nizd42X4QcDDqqNyjkD4tBq%2FKHB7sqY5kAbbDysStQDLB3yJbrZh5TbsdVJHbxuMik5jAzP07BAYn77t3PiKt%2FCsm81u%2BUlfHhcScTLykm19D%2FVU8pCj2E3ENM5u75nBGP94cekovcQ44iciPvXsqfgyq62KAjwsE5swLGEap3i6hvOt7aiEqZBPxZMQe4Fgb0AvYNc728lLmxCGbyPdQffPA%2FYwkfqc7WsNWxZe29VI8tzUryUMO9aOBkZwliamrbsPcGhbr7KPem0e1%2FS6WerF7l49DCkPiqjWujOQpIgWC8gfFMLsdjZLwG1m%2BA7%2FiQHb9aO2OP16FMta2Uo8uvKdc0byvRB8lfapUbOwxgeyeGHdPYOGzvqsE9N46JxnjHaK3CAnPHlH7O5jtvd45no2o7zRfjF29i%2FTEzdEhMhpqfP0gAKoPtW5z%2BFwkAFuvJB%2F4ypowWJHaVBGa18D1SHi%2FAKY1%2Fgd6xuU2fdjnhMj1HSnmajAluB7lSkJN%2B4gsPGJs1P271Urnigf4e2jJLg%2FXi6ZfXI6B2f1iQYsC8e2S%2FzYS4A%2FWxWWK%2BDXw8q8THPA0AFwmlVMY2tHhIxnk7KVp84lxqEwPzTQGuyh9jDWjprDBjqkAZZdirx3XFQNawcEDC%2FztU1SNGebkR9r7mBcGV%2FGxl8%2FssBgB2QdVU2fJtznZUYtdLOqzmucX2Kbr8B5kaE%2B4n4eiZD%2Ffzlv8bCess%2FgQe9fKcPXEQt0ssXJkaOqgDfqZT%2FnyfG2b%2F5%2BTxQfgit1eWi%2Bk%2FFGJ4bv4%2BuUXWIn0lAt%2BB3XX1EU9hdfDj4LLpdAOOccI%2FhgBli2vz6bweGzyVLtXI%2B8&X-Amz-Signature=de85bc00a768caef467b8f4fe77f106daae7d578aa472e39d9858100ef8bedc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
