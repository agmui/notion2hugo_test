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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNIXNBHE%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T121447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtCJ0INmxXKNCm76ICy7VfS%2FI2W5%2BqK0xMrXs%2BGnfCfAiEAxSTi%2BYkz5t88HAgBSSz8vw%2BUhh3F4SOucwN8bqcWrLsq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDEiYeFoBtagGQbaDkyrcAx153VatUw3f98fExkSKl5U753OjmOTyet0I8vQn%2ByN10uUadNoi%2FAGTVCF3rscWmg%2BRMIWMWR9hdq8YLvbsvdaeREGP2wFQtj4XLpIED2JHNFNC96%2BDnelRzvTX9J7UrFyuVaR6oc%2F2hLY2gmg9IslhPXM3bUCWmLcLcK04zWAIvDH2ePskmQIeg0WeWYgukRp9YHKQXh6CAx%2F%2BqtiVUwH9aktsRd0GaSVVHglSzvqU5Zjq%2BVdjEK3fX4CornIXfv9IsYv5lK8wJgvvWKKk%2FDRqQ7zMhLENHmPWAr1t4Dgs%2FCwvv43HT2jvAYuQns1lT9xIB7f%2BzFQoJ%2F9aT1IDRSmpBcSCye5z79I1XSdSZVpwpVCTTj4zPvIYc31pdL9iPBfipuGuitWiED6IKsNvI8n%2FRvQkIiD7CRAQf%2BwPoTqKtd3htD6M8K%2Flb%2F1ty7Eec3yxFS2ugWfMHkQOAqPKFuQ9SU%2FNx7Cy1fUa0i%2FpUw4n0zpu24zgx2M6tL4OEYVK3uHq86v5Tac6h9xPl16T9qBkSmEcfGkfobAyZi7311cYyMSxTinj5cLQ1dWV2PXGsCWnoe1lWzCwUHZOdO2tyWMLFd4AGS7GqLUQ2EDgkcLaeKBJbyporGS3WSnAMPi%2F878GOqUBC8xM7jvRiaVe7z2g0Bi%2FkHiGkOQZuCYtTLvNESNXsw2y7lC2GkrQUtPbCMApwkcJ0ebW3Q%2F2Wl7Lh7pXwMyXQML27TiODJpjW8hju0FF2I5F3MWoB1FPCrP21pb%2BuJNnwpoBUNn5HUgcHvatrPUdqZRqZgDiyvarSV7o7C0ZxhyCu8Y1Cc8%2BpT9hBYgnpREB2BoFAph%2BUHaYb09reIzfP8HiRixq&X-Amz-Signature=c0bf6d19e70c2fdbec5dde9791fb3da12d156d377cf31ebfe4e580e9af35a563&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNIXNBHE%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T121447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtCJ0INmxXKNCm76ICy7VfS%2FI2W5%2BqK0xMrXs%2BGnfCfAiEAxSTi%2BYkz5t88HAgBSSz8vw%2BUhh3F4SOucwN8bqcWrLsq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDEiYeFoBtagGQbaDkyrcAx153VatUw3f98fExkSKl5U753OjmOTyet0I8vQn%2ByN10uUadNoi%2FAGTVCF3rscWmg%2BRMIWMWR9hdq8YLvbsvdaeREGP2wFQtj4XLpIED2JHNFNC96%2BDnelRzvTX9J7UrFyuVaR6oc%2F2hLY2gmg9IslhPXM3bUCWmLcLcK04zWAIvDH2ePskmQIeg0WeWYgukRp9YHKQXh6CAx%2F%2BqtiVUwH9aktsRd0GaSVVHglSzvqU5Zjq%2BVdjEK3fX4CornIXfv9IsYv5lK8wJgvvWKKk%2FDRqQ7zMhLENHmPWAr1t4Dgs%2FCwvv43HT2jvAYuQns1lT9xIB7f%2BzFQoJ%2F9aT1IDRSmpBcSCye5z79I1XSdSZVpwpVCTTj4zPvIYc31pdL9iPBfipuGuitWiED6IKsNvI8n%2FRvQkIiD7CRAQf%2BwPoTqKtd3htD6M8K%2Flb%2F1ty7Eec3yxFS2ugWfMHkQOAqPKFuQ9SU%2FNx7Cy1fUa0i%2FpUw4n0zpu24zgx2M6tL4OEYVK3uHq86v5Tac6h9xPl16T9qBkSmEcfGkfobAyZi7311cYyMSxTinj5cLQ1dWV2PXGsCWnoe1lWzCwUHZOdO2tyWMLFd4AGS7GqLUQ2EDgkcLaeKBJbyporGS3WSnAMPi%2F878GOqUBC8xM7jvRiaVe7z2g0Bi%2FkHiGkOQZuCYtTLvNESNXsw2y7lC2GkrQUtPbCMApwkcJ0ebW3Q%2F2Wl7Lh7pXwMyXQML27TiODJpjW8hju0FF2I5F3MWoB1FPCrP21pb%2BuJNnwpoBUNn5HUgcHvatrPUdqZRqZgDiyvarSV7o7C0ZxhyCu8Y1Cc8%2BpT9hBYgnpREB2BoFAph%2BUHaYb09reIzfP8HiRixq&X-Amz-Signature=b52345c6bd1ff4cd4215fb604882f12f61cb8ec6f0cc5f5c09b7f466558fd615&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AFWRK5M%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdr5x80UtuKWiXSLGbJ7POCJCaInKIh1fMN%2BXkzEzBXAIgeA0AJK4UU5Mss9ev13shHuUfU6p33PE7%2FmUb5MD69sQq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDCd9rD6PaFREEmY32CrcA1CLzmUNA8RozgCI9XD8MW9hsjah%2FAOwDxumNK7uSqqFsb3leCZJvHWCqRLnP%2BAiUhU4R4HLmhP77v60YJFjw0BeIGjN0Aayduzmn5xGxoZdXe6c5KcU8Ua%2BcHhde0%2B1FlGpvWYBNcXJYYnAvgVlGeW62dCm9%2BLmA%2Ftmo7qJ68qbTkgY0lPaG619AtL%2FxIZkPYed0nkWj5FQ1c5nDEAIZPmVaFHHbzd%2B0E7IMtwIdze5gtBLxZ5wr7hv3%2BBbLkphGD%2BiPms2sTIJMjhkt5RquseRCqIlpLbvDgMxq2FZc%2BknkirOa7H5eAwZ6BGaGiq%2FEGuNTfY1%2Bp2KsvGe1%2B5biGDNMIJgHoOLIQ784EtjCRI0ipP1qgUq7jkyH4JVkeod426GZMoK%2FbiLuOAPWoStEwOdtCozCGs0Qt%2BrIDL6Bwr%2FDjGncGlYoVEYAByLCNPMdGt99ayRcotBg04dFtLm0ezgmxBjxRXksAcLvWw%2Ba0hRKxPy6V6IHV9%2ByTRq8dAqw%2B7zn450pSCDA45H4sK30VXS7rnS58t5HRR9LVL0qLQUmO3SEaIutccfaRxqnViEGSAQp6Eo8jt%2FmQ8Bnz9gG2RyPc%2BxSkSn8RuHEZnIDJlElxM5hCC9JWP%2B75%2BpMIfA878GOqUBbizXxZwW9n8cWR2ACXwWJqeqMZ5a6royBVfusdAm6srbfjRKGm6iki7rclu9lHZbNvx9qaF8RwF9Tnzt%2BfwYZqFqnPlcLLHy0YpPWTM0GLvEapDs9BdCmYe7VhYXGqp%2BG7AkW%2FkU1JjGE6iA3fdtABXMeTOgEfizjLu9JTY3BSICjyFtoLLcgAPh2yXUCBrsSnW7CpNcxNxQ5u1lcb8Bp7NlvFs1&X-Amz-Signature=3999dba1dffccb19a19a1134dabefec3db7fcda3211e8c7ccb3e1175c054838e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIKNNDYK%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGdNo%2FsHnh85Aiy%2FnDg8KDoZS0wQFbM2m4mL5Y%2FXztrOAiEA1KBGhMDWVATC9rl%2Fb%2FQobiBtffBiwZEDYXNvcEUBJXsq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDMXuwNDUMbGAO4bKjircA5zQ7IdcZO8eKJNVF%2FbiSYoQzc5Fhza%2BMOqdgsYZjfnVyvl9HDxx0tiAlLMDdWU3GH%2B3r%2Brm5KuGttds0NSWzobzjT7LX97rsLtDrM9VPLY5Lfn1cqz4lHYJoRPX2u76U%2B0d8foa1AsDZ%2FeOBzmZuy0s7R%2B71SzgPpcSNaqbw%2B2M09QA%2FkfeSBfyENayFQHSPp3V9gOueUZlnb6XetWISA0FQo%2BxY67JYO0y5uh0WF8cWnEX%2Fpuhv%2FjvtVsD5JGHzCX367vb%2FEZdbK9Xwx1kZOw0rQ9jLxqW7TVPqYRnV%2BNw0tqJ1mP2hcIzzJQH8xYWdBR74oUidyv2T5j8JbY1J4fKcOc8d6BASa%2FdhIfzqfYqlVffeuKLH8DuYcBqUnRzSrp9ilVUvA1Nx4o%2B0AkKAbPnlqWieLDg%2Bh42E%2F2tZbZde0bYOAWfm6r96tIMPX5AbVK9jrtEp64xaWTLhby%2BELgO3ULU40LbCByrudDj5Dm9cVl13OYBWwKUFDBTJbOWG9Fu0lP%2FjO6lTu70zWveQMer4aWujPyVo0JNwnJbX2GVkmcezfIWLrg3MLgBbA7jJdWPtP4GwG1tbc%2Fz%2BkZDY3t0%2FBdEQWmSS8k6cLsUW6a5jolvnrFezYUryRIAMPvA878GOqUBHqETus5vMhnYVUIyZXDJe8ioCaRCm%2BZ3lsLfusklQhnLH%2FImIziU8Zw9qLRZ%2B3kvrm4t1XCccKoiWWgiSGSuOvZ8uHhutrRmrVRQ6eKcNomP9BVfw5GS0hoorN6FFidUAKjr%2Bo5ELovWBfT%2BR4%2FQm%2F7rL9RPJFqewvBXcqdQlyV2VU2un6BmTxyNRb%2BbPv%2FdtAD8fNp9G7IQwsHS%2BE9pvTG7L5LY&X-Amz-Signature=cc95ce16c6250178c5d0b802b0a914e4060659c4adcc4e6c32d1d04a7acd0128&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNIXNBHE%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T121447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtCJ0INmxXKNCm76ICy7VfS%2FI2W5%2BqK0xMrXs%2BGnfCfAiEAxSTi%2BYkz5t88HAgBSSz8vw%2BUhh3F4SOucwN8bqcWrLsq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDEiYeFoBtagGQbaDkyrcAx153VatUw3f98fExkSKl5U753OjmOTyet0I8vQn%2ByN10uUadNoi%2FAGTVCF3rscWmg%2BRMIWMWR9hdq8YLvbsvdaeREGP2wFQtj4XLpIED2JHNFNC96%2BDnelRzvTX9J7UrFyuVaR6oc%2F2hLY2gmg9IslhPXM3bUCWmLcLcK04zWAIvDH2ePskmQIeg0WeWYgukRp9YHKQXh6CAx%2F%2BqtiVUwH9aktsRd0GaSVVHglSzvqU5Zjq%2BVdjEK3fX4CornIXfv9IsYv5lK8wJgvvWKKk%2FDRqQ7zMhLENHmPWAr1t4Dgs%2FCwvv43HT2jvAYuQns1lT9xIB7f%2BzFQoJ%2F9aT1IDRSmpBcSCye5z79I1XSdSZVpwpVCTTj4zPvIYc31pdL9iPBfipuGuitWiED6IKsNvI8n%2FRvQkIiD7CRAQf%2BwPoTqKtd3htD6M8K%2Flb%2F1ty7Eec3yxFS2ugWfMHkQOAqPKFuQ9SU%2FNx7Cy1fUa0i%2FpUw4n0zpu24zgx2M6tL4OEYVK3uHq86v5Tac6h9xPl16T9qBkSmEcfGkfobAyZi7311cYyMSxTinj5cLQ1dWV2PXGsCWnoe1lWzCwUHZOdO2tyWMLFd4AGS7GqLUQ2EDgkcLaeKBJbyporGS3WSnAMPi%2F878GOqUBC8xM7jvRiaVe7z2g0Bi%2FkHiGkOQZuCYtTLvNESNXsw2y7lC2GkrQUtPbCMApwkcJ0ebW3Q%2F2Wl7Lh7pXwMyXQML27TiODJpjW8hju0FF2I5F3MWoB1FPCrP21pb%2BuJNnwpoBUNn5HUgcHvatrPUdqZRqZgDiyvarSV7o7C0ZxhyCu8Y1Cc8%2BpT9hBYgnpREB2BoFAph%2BUHaYb09reIzfP8HiRixq&X-Amz-Signature=45e8393e6515a3f8acfdd3c824850399b274011db9d8fdeee0ad21914e5e4fa4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
