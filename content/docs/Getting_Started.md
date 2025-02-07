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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466737W75UB%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T031256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCZee18DS7raq7yyAdmwhAav15V9%2BuXXOZbP8cuFR0HRwIhALzfoSu40JGh439D82Iu9cMauFSJ6nCVGxsAXG4gBKO%2FKv8DCGkQABoMNjM3NDIzMTgzODA1IgwImd5Kwbev14SsnVAq3AMj4G%2FqoRel8AKQ2fYVgBOzLRXmcNFjiKZg65%2Fv6YQEmcebuIHlpycjRokEvfyXii%2BKf5seUjmFSFw7o%2B%2FezM5iPvQZDXC1lNW7eM6lOrL6bbuoVXT%2B7Dn3tlX0Vsmq8cnfJwD2uiMayum48jpqdPoP49VYbMCY5ouUoAf2Whkq%2BVWahUspa7wQMjl6oX2wiObUBEc8Z%2B9T0dObuPZa7GBfnP5Ke8lVhOintlJ4EMdyMuJvW9swMI1uTsk5U8ZmCmBy%2Fif2wq3nvkvXe7PJWrAgOFEEGhEhLIJFaj6DZJ6z3%2F0%2B%2B1NNqr8w80gT3lmpZwD4RChLz6Ipf7WB67oCTzhyMdfgaCKChfF%2BBb1DSYiap3aTmLNrNn8Xi8e4bRLvCMDRq3%2BV2HeeAamDVZ7WJMg%2Bz%2FedIPyUQ3lqtij56MFOF426u2k%2BD3FKBd2A7cMlyo3XiQT9IZZ19FsJiYqS%2Bd4QtLd490G%2BwgIGhe%2BbE8KClj%2FND3Vu5aENgyfOis%2FF0dYRRu%2Fw7695zGvOESfUZ%2BJrFVIj%2BqVFLA6Fjj3XHb6Mzc8BrXlfq2GkFtm0TDjzO3T0979WmBd1BMU1HWQ0AyxwIaaaGTtznhN40pS8qOmyv4saXV6gohB3f1k2GjCom5W9BjqkAeiGS2fNhtyMklvTXxnSPgazQXGw4F9%2F68fOPDXbyplNcX9%2B1j9jpkeeE8VDCQzQ4AkeNJUpwzExt1Dx3mLbIOv%2BeMyig3gioNMDixtNVH132LpLoXFzNwWAn9rtExpq8gJB57AdoWJBQ7hkCqt55Np2yYENZJgQwBFnr2c9kc0Vjn1jvgpWWiSRy%2BtJzT%2F1a3B2rRMyMrr2ZMt0t9UIYu5gNin2&X-Amz-Signature=3385f019022dc554157ec6dd1840d705fdd5a747a897a378f3385748b54f977c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466737W75UB%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T031256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCZee18DS7raq7yyAdmwhAav15V9%2BuXXOZbP8cuFR0HRwIhALzfoSu40JGh439D82Iu9cMauFSJ6nCVGxsAXG4gBKO%2FKv8DCGkQABoMNjM3NDIzMTgzODA1IgwImd5Kwbev14SsnVAq3AMj4G%2FqoRel8AKQ2fYVgBOzLRXmcNFjiKZg65%2Fv6YQEmcebuIHlpycjRokEvfyXii%2BKf5seUjmFSFw7o%2B%2FezM5iPvQZDXC1lNW7eM6lOrL6bbuoVXT%2B7Dn3tlX0Vsmq8cnfJwD2uiMayum48jpqdPoP49VYbMCY5ouUoAf2Whkq%2BVWahUspa7wQMjl6oX2wiObUBEc8Z%2B9T0dObuPZa7GBfnP5Ke8lVhOintlJ4EMdyMuJvW9swMI1uTsk5U8ZmCmBy%2Fif2wq3nvkvXe7PJWrAgOFEEGhEhLIJFaj6DZJ6z3%2F0%2B%2B1NNqr8w80gT3lmpZwD4RChLz6Ipf7WB67oCTzhyMdfgaCKChfF%2BBb1DSYiap3aTmLNrNn8Xi8e4bRLvCMDRq3%2BV2HeeAamDVZ7WJMg%2Bz%2FedIPyUQ3lqtij56MFOF426u2k%2BD3FKBd2A7cMlyo3XiQT9IZZ19FsJiYqS%2Bd4QtLd490G%2BwgIGhe%2BbE8KClj%2FND3Vu5aENgyfOis%2FF0dYRRu%2Fw7695zGvOESfUZ%2BJrFVIj%2BqVFLA6Fjj3XHb6Mzc8BrXlfq2GkFtm0TDjzO3T0979WmBd1BMU1HWQ0AyxwIaaaGTtznhN40pS8qOmyv4saXV6gohB3f1k2GjCom5W9BjqkAeiGS2fNhtyMklvTXxnSPgazQXGw4F9%2F68fOPDXbyplNcX9%2B1j9jpkeeE8VDCQzQ4AkeNJUpwzExt1Dx3mLbIOv%2BeMyig3gioNMDixtNVH132LpLoXFzNwWAn9rtExpq8gJB57AdoWJBQ7hkCqt55Np2yYENZJgQwBFnr2c9kc0Vjn1jvgpWWiSRy%2BtJzT%2F1a3B2rRMyMrr2ZMt0t9UIYu5gNin2&X-Amz-Signature=67d6925505d36a3aa1b0419aeefd88f8077eeb45f8a151cb7f4aa482f8689e17&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW4E7YHS%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T031259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDZL4rJ%2FYA%2FYjqxX%2FMZRgmhgAxJZ7IHJ4mj%2Fy2bHlNLCQIhAKjnjq3Egj1SETl%2Bgx7Y7luIsp9SF2eIV1vvIgNo%2BzGbKv8DCGkQABoMNjM3NDIzMTgzODA1Igz9Ol06VHMbybuXqkIq3ANaJntK8Xtf3er8zRbzxExeO0bxaDxg%2BmPrimiG6%2Br6pozTUuJLxom0sbim7J1rlmDyDA09Dof%2BNeIVLeMb9sAKprilfKCF6XsjKZRdfUM6bdP0upWWMOQ6oAYqggHKakaGFctRH%2BkykM9o6%2B4UMJgG7k4A42arlEZ99tLC27isYlNmOv2bD1fBuapBWrz%2F%2BZUYERsir1XX3HGhz3%2BiweVIioMa%2Fepdd6gBgVHc4X2u%2F0EZ35rkFxMU70GnrgKFGoCRAQt1sxe%2FsAskz3SIEb4JcgtzgT6sfHsIx8rJIidbXwKedxmmug2gQfJMtsqHBRDMJVb%2BTu4H0PBuS4qbzk4%2FR%2BVuukK5utsAXkqWwpEwd4c85tiRts2many1hQtnqyHG6Qxq6iUzPLXdU%2BcQvOzMLdkaWZsNzTnE4eOoXU4a96yw%2BBHWikiAu27KF1H05VmJ5ahFq6GEvKR7RjHO7G4S0ClNLTuKgGrXS8p6DEMpgVhjM8%2F6052dTpSu%2BJk83iuhYNHFPUyJEpFxeQquvpMZSqE2%2Bk64l2R2C90AXtTxCdGBQGKJz9PaCKAXmBCFjLSrqe37Jg6TToLxp%2FOaGNJfQSgYnYOvNiDbGTLom6LlATwhTnRA8FxXhqXgAzCzm5W9BjqkAZT2OYJrE67Rsv2vjSrZkimb26N7sHTpuz87t3Lg%2F3TqRqzn2oykuF8AYxihXKGHF5PoYkT%2BpHMQrjU8zeWCEFeL63AqHzy2CK%2FfstOTpGRQt04wg7sc2KYE0HgEyLb3E07PHbxp0395te8iGsXRvWeXxzmGI2c7tQJiBZv0ZlNq96SWKXQ%2FZVEtLPlEvOlPydfQHrPHyYgU2KHMAiF3jZfdb8HE&X-Amz-Signature=d9fa80241a2bf915ca56e36e956e13d0ec7d18a414e5cba26b3f09be4db88cc9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRKB3Q4F%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T031300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIBqcL%2FZXWp1ISwnwWCJp32k8wgQwQisDcH07kxyRxV5sAiA%2FNERT7Gwurf44HwJo4f%2BQFzbUpAxyYSDjWCsiTY8N2Cr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMgxXg88CyPSCVI0BAKtwDpma2QnwRFARlwpUXs5jiXRDHDOMNZgPJ6OBmsNiIdX5gZyDXraVmh6qajP2QgY5yh5WvQ64jUEuWZHDOSmiIkaqAovn6ra6hq5ZfmXZFmzZp%2F%2FEI2ZJK6Lj7zj0pXyP7ek8wpGOjejqs0NVobFwPovYp6ZAP7EB4ZiTLqBxg2tz9iJidjhsFAtwn9EiaUMt7XwYMcl713OIYaKhVQDxTc0lgSE2%2FqSfODxYzgQgp2nj%2BtNYn3PughERNjTJkuM%2BsyC0lr4knnyAWNAXsLwm4LA5Ka7JoS4b8RpmUo8iZgki4FCN3lfNeo3YR96dCqqrtpE%2FOvEqOysK%2BPkBxZQtQynXgo3IOlDnZvJITNlKcDyFUlKcUXjHlVCD7VjRa93CXqbf5ipWDIn5Xm%2FlAokORhvkfB5%2B%2FNpCel%2BiEZoMrptwSzU72S7yW8FVuMbusYLA%2BylO8SUDjnTzLxkz%2FfpdsthO%2BEMBKB1teV9StPWovN%2BlSWSscmhk3Fm2l4To9nKy9tFXkmcGdebPJ4UULSAwPH5eCtsDao9dNA%2FjqxPCmLIlIC9tj4jZZiG9FqOpLp%2FsCC98tTtBqh%2BsLr4RhkGkG%2FEaUHJK%2BiNtUaMvoAqRPiLLHY0bZVibxfBsdkLIwnpuVvQY6pgG3RFSWe14K%2BbQ3ogqdIaWzY2xcxWauj18GIXZVbb7fn%2FEVO0vPepIPUMlG68BcFFA%2FYgcNHtt45AqJcLo5JBoH3Sx9Gf27Gt%2Fr974YORQnXZuoTqdh0YrwxGbtgtIjLxxzZFuKRUDqdSJ7OXFFf8A3QPvmZyOPEMkdF7h1gZhPsEnZGxshXvDUXM5iR38QTB3lwEPGCJ%2FlUz3MNyisoMJPjZFUdAZ1&X-Amz-Signature=533c243b914ad2d45b20be0d3cc75a25456be88252eb95e6a15e16cd3ac27e93&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466737W75UB%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T031256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCZee18DS7raq7yyAdmwhAav15V9%2BuXXOZbP8cuFR0HRwIhALzfoSu40JGh439D82Iu9cMauFSJ6nCVGxsAXG4gBKO%2FKv8DCGkQABoMNjM3NDIzMTgzODA1IgwImd5Kwbev14SsnVAq3AMj4G%2FqoRel8AKQ2fYVgBOzLRXmcNFjiKZg65%2Fv6YQEmcebuIHlpycjRokEvfyXii%2BKf5seUjmFSFw7o%2B%2FezM5iPvQZDXC1lNW7eM6lOrL6bbuoVXT%2B7Dn3tlX0Vsmq8cnfJwD2uiMayum48jpqdPoP49VYbMCY5ouUoAf2Whkq%2BVWahUspa7wQMjl6oX2wiObUBEc8Z%2B9T0dObuPZa7GBfnP5Ke8lVhOintlJ4EMdyMuJvW9swMI1uTsk5U8ZmCmBy%2Fif2wq3nvkvXe7PJWrAgOFEEGhEhLIJFaj6DZJ6z3%2F0%2B%2B1NNqr8w80gT3lmpZwD4RChLz6Ipf7WB67oCTzhyMdfgaCKChfF%2BBb1DSYiap3aTmLNrNn8Xi8e4bRLvCMDRq3%2BV2HeeAamDVZ7WJMg%2Bz%2FedIPyUQ3lqtij56MFOF426u2k%2BD3FKBd2A7cMlyo3XiQT9IZZ19FsJiYqS%2Bd4QtLd490G%2BwgIGhe%2BbE8KClj%2FND3Vu5aENgyfOis%2FF0dYRRu%2Fw7695zGvOESfUZ%2BJrFVIj%2BqVFLA6Fjj3XHb6Mzc8BrXlfq2GkFtm0TDjzO3T0979WmBd1BMU1HWQ0AyxwIaaaGTtznhN40pS8qOmyv4saXV6gohB3f1k2GjCom5W9BjqkAeiGS2fNhtyMklvTXxnSPgazQXGw4F9%2F68fOPDXbyplNcX9%2B1j9jpkeeE8VDCQzQ4AkeNJUpwzExt1Dx3mLbIOv%2BeMyig3gioNMDixtNVH132LpLoXFzNwWAn9rtExpq8gJB57AdoWJBQ7hkCqt55Np2yYENZJgQwBFnr2c9kc0Vjn1jvgpWWiSRy%2BtJzT%2F1a3B2rRMyMrr2ZMt0t9UIYu5gNin2&X-Amz-Signature=8755f5d186bba9830043ddb08380fa3c456895219cf48c7e077f8d80f830b659&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
