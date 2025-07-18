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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T25FZDW%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCRASUawJpsHkcepuDEcDDTRXDMt%2BF1J9J%2B6958dsY3cgIhAMf5ayInqN6jt16QDaqqKY7wgfkXFkBpzFg70jBUCF%2BPKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAXdF2xan4LAB9cJAq3AMlrCEGShjoGWRVEvYaTlx7MFiiVwsZLaz5TTLrJGLetQcy72Vzbse6H%2BBP8SKXBdJoQIQX8QYAgqK7oGtbusCb7Mm6PkqY%2F11nZdsjr9X4ow%2FLKWAu7Uorrl3QAXnMoQkyGRr0j6JO5gtd%2ByhadcFNsRRLy9m6V%2BDdFzNfnt%2B64OAZSIMwL7osajjJYBzxiJ6z66fTMvyZSqpp65m32ly2WoOra0Dcnt0J7brBxL%2Bv8i2WVfyxbB6JiCLfKuUm%2B3E5ehv0S0Mw48aABzLO54MtYgXGa1DsuuDXdichtMTiolu5nxU%2F5GvImRlekYwm%2B0w8uTAhz%2Ftqmt7tE629jbjGD3XBhR7K5xkIrNszPEc0npg9KHYishbzB9n%2F1rgv%2Brsm9UmNaclPrxeSJpNli3zCu9PcFHYInJpmHEB68VmKsgMgRYVnDoYxPEHVvzBn6KZZpxus947mPo%2B77OlVfC6FJg7QSzLsVnTvTaHo6ezh4Ti0yB2usewy1f07LWZhKliHkW9UEQtv%2BGxXfOhRSGxeaikPxzAArbX7CDhboYD5DuWT0cj%2FSvcDur%2FE1ef18oRf4iRINJGLa0A0yhrPD9Tz36byprqOUALJx0P3GlcTt4HgAHRo6YAZsNhEqDDtievDBjqkAcXKTx8cnzNdKVm0jaohmHrqz2Sjv1vKX2nyxrAccFyqbXFd%2F4%2FrLKu4nKmkh2LWq%2Bx5qJhohVLIwXM%2F10TQccYFaWYivWE2Ybbiy7AsD0UYKwAlXzNLX1x10GchdTTwuw7fmUw0Ey%2FNPPOAJnBkWhl08H0g%2B0StHc6uq98s7NoFc6G795QDOzLhCgNdasKRIAQnKRO7MHz2tBY2GO7MQt8Ry7Fc&X-Amz-Signature=4fb820051408b1f377d3711d5f7c1c98f6642be85b2f894abee7225192c785dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T25FZDW%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCRASUawJpsHkcepuDEcDDTRXDMt%2BF1J9J%2B6958dsY3cgIhAMf5ayInqN6jt16QDaqqKY7wgfkXFkBpzFg70jBUCF%2BPKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAXdF2xan4LAB9cJAq3AMlrCEGShjoGWRVEvYaTlx7MFiiVwsZLaz5TTLrJGLetQcy72Vzbse6H%2BBP8SKXBdJoQIQX8QYAgqK7oGtbusCb7Mm6PkqY%2F11nZdsjr9X4ow%2FLKWAu7Uorrl3QAXnMoQkyGRr0j6JO5gtd%2ByhadcFNsRRLy9m6V%2BDdFzNfnt%2B64OAZSIMwL7osajjJYBzxiJ6z66fTMvyZSqpp65m32ly2WoOra0Dcnt0J7brBxL%2Bv8i2WVfyxbB6JiCLfKuUm%2B3E5ehv0S0Mw48aABzLO54MtYgXGa1DsuuDXdichtMTiolu5nxU%2F5GvImRlekYwm%2B0w8uTAhz%2Ftqmt7tE629jbjGD3XBhR7K5xkIrNszPEc0npg9KHYishbzB9n%2F1rgv%2Brsm9UmNaclPrxeSJpNli3zCu9PcFHYInJpmHEB68VmKsgMgRYVnDoYxPEHVvzBn6KZZpxus947mPo%2B77OlVfC6FJg7QSzLsVnTvTaHo6ezh4Ti0yB2usewy1f07LWZhKliHkW9UEQtv%2BGxXfOhRSGxeaikPxzAArbX7CDhboYD5DuWT0cj%2FSvcDur%2FE1ef18oRf4iRINJGLa0A0yhrPD9Tz36byprqOUALJx0P3GlcTt4HgAHRo6YAZsNhEqDDtievDBjqkAcXKTx8cnzNdKVm0jaohmHrqz2Sjv1vKX2nyxrAccFyqbXFd%2F4%2FrLKu4nKmkh2LWq%2Bx5qJhohVLIwXM%2F10TQccYFaWYivWE2Ybbiy7AsD0UYKwAlXzNLX1x10GchdTTwuw7fmUw0Ey%2FNPPOAJnBkWhl08H0g%2B0StHc6uq98s7NoFc6G795QDOzLhCgNdasKRIAQnKRO7MHz2tBY2GO7MQt8Ry7Fc&X-Amz-Signature=a7be1d9740944080c966952f3969bed50982cb7487d4a80a45d5bf53557c0f0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T25FZDW%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCRASUawJpsHkcepuDEcDDTRXDMt%2BF1J9J%2B6958dsY3cgIhAMf5ayInqN6jt16QDaqqKY7wgfkXFkBpzFg70jBUCF%2BPKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAXdF2xan4LAB9cJAq3AMlrCEGShjoGWRVEvYaTlx7MFiiVwsZLaz5TTLrJGLetQcy72Vzbse6H%2BBP8SKXBdJoQIQX8QYAgqK7oGtbusCb7Mm6PkqY%2F11nZdsjr9X4ow%2FLKWAu7Uorrl3QAXnMoQkyGRr0j6JO5gtd%2ByhadcFNsRRLy9m6V%2BDdFzNfnt%2B64OAZSIMwL7osajjJYBzxiJ6z66fTMvyZSqpp65m32ly2WoOra0Dcnt0J7brBxL%2Bv8i2WVfyxbB6JiCLfKuUm%2B3E5ehv0S0Mw48aABzLO54MtYgXGa1DsuuDXdichtMTiolu5nxU%2F5GvImRlekYwm%2B0w8uTAhz%2Ftqmt7tE629jbjGD3XBhR7K5xkIrNszPEc0npg9KHYishbzB9n%2F1rgv%2Brsm9UmNaclPrxeSJpNli3zCu9PcFHYInJpmHEB68VmKsgMgRYVnDoYxPEHVvzBn6KZZpxus947mPo%2B77OlVfC6FJg7QSzLsVnTvTaHo6ezh4Ti0yB2usewy1f07LWZhKliHkW9UEQtv%2BGxXfOhRSGxeaikPxzAArbX7CDhboYD5DuWT0cj%2FSvcDur%2FE1ef18oRf4iRINJGLa0A0yhrPD9Tz36byprqOUALJx0P3GlcTt4HgAHRo6YAZsNhEqDDtievDBjqkAcXKTx8cnzNdKVm0jaohmHrqz2Sjv1vKX2nyxrAccFyqbXFd%2F4%2FrLKu4nKmkh2LWq%2Bx5qJhohVLIwXM%2F10TQccYFaWYivWE2Ybbiy7AsD0UYKwAlXzNLX1x10GchdTTwuw7fmUw0Ey%2FNPPOAJnBkWhl08H0g%2B0StHc6uq98s7NoFc6G795QDOzLhCgNdasKRIAQnKRO7MHz2tBY2GO7MQt8Ry7Fc&X-Amz-Signature=5478d342b5e8370531e3f03e226fa3a253a18b80658c1f03f4a14b83713b3e4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVBDXKWR%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCiul%2BQSWyC%2F9qhuxdnFM4Y0LGv9lN7Y695g20WZzUi6AIgZKIah0duWTDOwZ1wrdZqg6%2Bjhbxb0wVXfFquPYAPoQ0qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFeGzWwhSSMwdZtBjCrcA%2Bkqg4%2FBcAYC0cugCliqapyV6eNLUHzwAHRDXbf4CyCt9f7Xj0MKDIvP642P%2BkbeTDxrfLZRzbS11gykxZ5qT6SewWf5xJhrjO%2BYVvUvwtNfgTxM%2FjR5Rs7sIJbHconhGavC0Cd9pdxbfJq7tgodpkSb631IiKVCSnKLTUk%2FzJRAuxavWc8E%2BR2n6SZWZ6rqLB%2FcPX2FRQtWvh1DR%2BVpJSPh0mMNuv72iBcD%2FPlNpcJOaFrRaMadqkujcjCFau5zsO7GWFVzX%2BBHg6GN%2BzbGrUGSZfhxhTOIVcJn9oTPgeLYc0SJjL%2FKKV0ZnihkVK8MJI0Mh9NXgib2n6lR2v4Hmmul%2FvrtVFpKbdXtS3vAwT7sEx%2BNqbx0GOpY0h%2BrcsTS0MdJ4YqGvf8IsiJytfHF6OUanJJUb6BcAfGA7Ci2YkO01fr2XiZPmuRsS7wUbkQC9d14AEan3FRDrgDUvx78cngc83IOGOr29ki7%2FUJfWfvA5wxdPLHEgrsHZ29nMoFXl6Hda9Bzlq8JnhlCUvoQ0puZhSCBFis%2Fted47ylmhgox93cwJsv6UZfZ2CSmSf9KUxlVl7NbsMEy7lXe9PinEezGn8%2BckX2Xf1hRFGW9VdEotBYEh74%2Fy70%2BNgTMMJ%2BK68MGOqUBajtMIZ5ol1wR8EjtcOXTB%2BuErfob0LcND4t45ciKKC1I8Ezvd0nDOl8Sra8cOZHefSH3b%2F4ULl2LCsaGJR2sZ8b0a1i%2BZz6IGvhd%2F6mFjVVusTDYbeoP%2FHdwGPMgBN%2F6uUUiNFjLdKQ%2BlzLLshSMr7VUPhGx3fBW2fz6wwu6SJxu0G0yshhTttKMZiefe06P8Hcs8UfxDXk11LH3XAS1BKDDRO3O&X-Amz-Signature=003956ebf67cee78a4b5998c95456a2c06bd04f1d8b8dd27800f975899b5c02a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BS66ZD3%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFFvThwfH8jleKi6p1OiQPCKg6Y67H%2BLrpLnonYeTtYTAiBg4ucZrYewBPI3PuC4OdzV7fJei0JMYBue4BViMr2VHCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqij%2FXcggU0c1PRfDKtwDnWYoi60DVwSPBep7HCCRklMel8oL%2FeBI0cfqAUHWR%2B4Z4yw%2Fxzx4T22bwLE5Wv%2Fn60kwxc7ablwV4Tjj%2BncnKHifseuGhpPFPOwiEWz0ckKMCg5rXJPcpT2j06rzqFAJTCOli2CCQijCWZF8KY8wy5F1cQaiLOIQfPs06pYtrExTPp4F%2F0G23iqWxURKgaYzVmVXPX0%2FjeANY4ZtvhX25t3Mt2iJ7AU7EI6A4jtmd4ZGnD%2BJDcEdyfvlxfKnoctB28%2FMkn0Q7hjpm4W2goGguoEYj062S3Z5%2BsLifZNRp7Dlvo1nUt0J25rpGU8%2BphT4jxR9pS76mu2H4da%2FgpTrLYqw%2FT3%2FENMZ9Wnlxb7vG%2F5fcixfBSqK%2FxzFXPCpn69JIA57undM4mBB1Yw%2F8vdKhI395YB2%2BQvAQgT%2BRQIdHeaOPtNXjqwqNB1UC5nqgyE71uRoMmMdyo%2FFzodfnV2Cnwf57meVrPsOQqBMZgIl%2BF20b4sKwqMoCW5NDT9%2B8CY2L5F%2F5u1z%2FyRVMG9VI0%2F%2BsxV2dUt6Y9FSvRIYQ4lbmzy62A%2FSwcfU4c%2BT3m%2B0SOm2T54IPHfDP7JEK6Div%2Fbs2JbXaItsmJF0CBCYRCKPlUPXu4FkdQXSydubzZ4wqIrrwwY6pgFa0ffGxcQYd3I%2F7ZnfRq2IayoHIU%2Bfqss9C4vbAztseN530sL5CFt7zhLuTFF2Itk3iEPjRES9n4VNiaJpUGegFGxC6DMMru%2Fqg%2B0NUKbWRNBKG0cX4HidOIHKUku%2BHXJYlzmV1ZHRlkoUopqxQmyLfOsQ3zVDiJu5iMR9QoHtPrkkKFWo6lL8E%2Fg2sDDYdELzKausAbsGVbuHl8YWxUl14nUyrKpD&X-Amz-Signature=0f9621d037d988298c235fe3d06172625427adb4ca5f3128a616f1aa3431cefa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T25FZDW%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCRASUawJpsHkcepuDEcDDTRXDMt%2BF1J9J%2B6958dsY3cgIhAMf5ayInqN6jt16QDaqqKY7wgfkXFkBpzFg70jBUCF%2BPKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAXdF2xan4LAB9cJAq3AMlrCEGShjoGWRVEvYaTlx7MFiiVwsZLaz5TTLrJGLetQcy72Vzbse6H%2BBP8SKXBdJoQIQX8QYAgqK7oGtbusCb7Mm6PkqY%2F11nZdsjr9X4ow%2FLKWAu7Uorrl3QAXnMoQkyGRr0j6JO5gtd%2ByhadcFNsRRLy9m6V%2BDdFzNfnt%2B64OAZSIMwL7osajjJYBzxiJ6z66fTMvyZSqpp65m32ly2WoOra0Dcnt0J7brBxL%2Bv8i2WVfyxbB6JiCLfKuUm%2B3E5ehv0S0Mw48aABzLO54MtYgXGa1DsuuDXdichtMTiolu5nxU%2F5GvImRlekYwm%2B0w8uTAhz%2Ftqmt7tE629jbjGD3XBhR7K5xkIrNszPEc0npg9KHYishbzB9n%2F1rgv%2Brsm9UmNaclPrxeSJpNli3zCu9PcFHYInJpmHEB68VmKsgMgRYVnDoYxPEHVvzBn6KZZpxus947mPo%2B77OlVfC6FJg7QSzLsVnTvTaHo6ezh4Ti0yB2usewy1f07LWZhKliHkW9UEQtv%2BGxXfOhRSGxeaikPxzAArbX7CDhboYD5DuWT0cj%2FSvcDur%2FE1ef18oRf4iRINJGLa0A0yhrPD9Tz36byprqOUALJx0P3GlcTt4HgAHRo6YAZsNhEqDDtievDBjqkAcXKTx8cnzNdKVm0jaohmHrqz2Sjv1vKX2nyxrAccFyqbXFd%2F4%2FrLKu4nKmkh2LWq%2Bx5qJhohVLIwXM%2F10TQccYFaWYivWE2Ybbiy7AsD0UYKwAlXzNLX1x10GchdTTwuw7fmUw0Ey%2FNPPOAJnBkWhl08H0g%2B0StHc6uq98s7NoFc6G795QDOzLhCgNdasKRIAQnKRO7MHz2tBY2GO7MQt8Ry7Fc&X-Amz-Signature=5997679af8528907544a5e6e29810dc5cea8c9599b7f16d2f4d0003ed9f2f18d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
