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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EYCIVQG%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T061211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIBDoRMc0kPPHETPRtNevdrcuSw0Ai%2BL%2FX9d6f8ijrCdTAiBJ4uUUmU%2BzGhh2FGhftOAF2DXqy6asYKFYYKKi0tgBRCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ0FGQZw0K9VCE9mEKtwDwsMfYh%2FS2cHjFXw17nIJHO%2BZJDvYnzqfJRIx5ZBiNrfwuvG%2Fza3hq3MaBo5RLgWoJCeWWSJ0OksV71jQXEZI8mP4HO1RWoVTobJuUBXQKa1uNugmhFOfDfcLFOhYBkY0ldhVKrUahZ%2FkBFCPushjPE3kc10I6uDezfucveeVpbLaeI38oEWB9A6cauKUabpX%2B8CCBFXbIMkkEZcoksdWtcV8DLEFc%2Fl9Z1z3DNf8rXvl1CT%2BgMsqqokAZs4G7pg8Ym0qFxJppVETlGSsrMq1gT584rA7E0qunJHQ3Uva2XY%2FD%2Bb5Wr2zpKtmwwHemFBIXFnVGLLwoWgXelUCZIDQzlPBhLYQNip592T7MDFK4nJfBQsPfe1iUApVv6k7pb%2B%2BjW4nVSOg4At%2F9ZhQMuCzK0bx%2FqQAVJ8iCY%2FIRXb0eOYxVa6bmz1bCHTi%2BJJ0N0GZ7i0uAMlMqQYd0Mj1xfOI2HFw4PC2CSDd0g9IGdJzHJQK55IWyeO78ONLE8GfwwBOE62xmjj2EPv1E9PgaFIaprCABC3GRqS12xFVesemQx1MgIMWCzsb8rWeIYjA%2BPXPfUea%2Fg41dpWSKO4tJAvssGfJ4de82VhS4fIEEu25YB4tu8LVZK93r5sf0TEwyr3RwAY6pgE4lM0rdLJgK6WrQGYgNvNtPmx4MhjosnWO95Yb%2BR3C2%2B2j03W7UzIAA1PXbxDcOPUE08iygIUkkClF2npj2eJJf4fd9chXPrG0EO9pKIgoPbyShUHRQ7h0X7QH9wtkUznlB8Ncb2JftLSNizIoHU7mxpRTZsAvHDBGSo%2Feo6JoR05f3Ps8b6c%2B4cAFqdGUJ7eTkcPaG4jrdqrPzS4BSeHGuTYa9%2Bo8&X-Amz-Signature=7fdd6ec7bca4ffbb5838a13f57702b0172d58d5e206fefcfa13b89ec4befbf4b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EYCIVQG%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T061211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIBDoRMc0kPPHETPRtNevdrcuSw0Ai%2BL%2FX9d6f8ijrCdTAiBJ4uUUmU%2BzGhh2FGhftOAF2DXqy6asYKFYYKKi0tgBRCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ0FGQZw0K9VCE9mEKtwDwsMfYh%2FS2cHjFXw17nIJHO%2BZJDvYnzqfJRIx5ZBiNrfwuvG%2Fza3hq3MaBo5RLgWoJCeWWSJ0OksV71jQXEZI8mP4HO1RWoVTobJuUBXQKa1uNugmhFOfDfcLFOhYBkY0ldhVKrUahZ%2FkBFCPushjPE3kc10I6uDezfucveeVpbLaeI38oEWB9A6cauKUabpX%2B8CCBFXbIMkkEZcoksdWtcV8DLEFc%2Fl9Z1z3DNf8rXvl1CT%2BgMsqqokAZs4G7pg8Ym0qFxJppVETlGSsrMq1gT584rA7E0qunJHQ3Uva2XY%2FD%2Bb5Wr2zpKtmwwHemFBIXFnVGLLwoWgXelUCZIDQzlPBhLYQNip592T7MDFK4nJfBQsPfe1iUApVv6k7pb%2B%2BjW4nVSOg4At%2F9ZhQMuCzK0bx%2FqQAVJ8iCY%2FIRXb0eOYxVa6bmz1bCHTi%2BJJ0N0GZ7i0uAMlMqQYd0Mj1xfOI2HFw4PC2CSDd0g9IGdJzHJQK55IWyeO78ONLE8GfwwBOE62xmjj2EPv1E9PgaFIaprCABC3GRqS12xFVesemQx1MgIMWCzsb8rWeIYjA%2BPXPfUea%2Fg41dpWSKO4tJAvssGfJ4de82VhS4fIEEu25YB4tu8LVZK93r5sf0TEwyr3RwAY6pgE4lM0rdLJgK6WrQGYgNvNtPmx4MhjosnWO95Yb%2BR3C2%2B2j03W7UzIAA1PXbxDcOPUE08iygIUkkClF2npj2eJJf4fd9chXPrG0EO9pKIgoPbyShUHRQ7h0X7QH9wtkUznlB8Ncb2JftLSNizIoHU7mxpRTZsAvHDBGSo%2Feo6JoR05f3Ps8b6c%2B4cAFqdGUJ7eTkcPaG4jrdqrPzS4BSeHGuTYa9%2Bo8&X-Amz-Signature=5bbc5b0629c104d8ebf7eba054d3ffa7361eef47da591805656040f17a7c1046&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EYCIVQG%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T061211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIBDoRMc0kPPHETPRtNevdrcuSw0Ai%2BL%2FX9d6f8ijrCdTAiBJ4uUUmU%2BzGhh2FGhftOAF2DXqy6asYKFYYKKi0tgBRCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ0FGQZw0K9VCE9mEKtwDwsMfYh%2FS2cHjFXw17nIJHO%2BZJDvYnzqfJRIx5ZBiNrfwuvG%2Fza3hq3MaBo5RLgWoJCeWWSJ0OksV71jQXEZI8mP4HO1RWoVTobJuUBXQKa1uNugmhFOfDfcLFOhYBkY0ldhVKrUahZ%2FkBFCPushjPE3kc10I6uDezfucveeVpbLaeI38oEWB9A6cauKUabpX%2B8CCBFXbIMkkEZcoksdWtcV8DLEFc%2Fl9Z1z3DNf8rXvl1CT%2BgMsqqokAZs4G7pg8Ym0qFxJppVETlGSsrMq1gT584rA7E0qunJHQ3Uva2XY%2FD%2Bb5Wr2zpKtmwwHemFBIXFnVGLLwoWgXelUCZIDQzlPBhLYQNip592T7MDFK4nJfBQsPfe1iUApVv6k7pb%2B%2BjW4nVSOg4At%2F9ZhQMuCzK0bx%2FqQAVJ8iCY%2FIRXb0eOYxVa6bmz1bCHTi%2BJJ0N0GZ7i0uAMlMqQYd0Mj1xfOI2HFw4PC2CSDd0g9IGdJzHJQK55IWyeO78ONLE8GfwwBOE62xmjj2EPv1E9PgaFIaprCABC3GRqS12xFVesemQx1MgIMWCzsb8rWeIYjA%2BPXPfUea%2Fg41dpWSKO4tJAvssGfJ4de82VhS4fIEEu25YB4tu8LVZK93r5sf0TEwyr3RwAY6pgE4lM0rdLJgK6WrQGYgNvNtPmx4MhjosnWO95Yb%2BR3C2%2B2j03W7UzIAA1PXbxDcOPUE08iygIUkkClF2npj2eJJf4fd9chXPrG0EO9pKIgoPbyShUHRQ7h0X7QH9wtkUznlB8Ncb2JftLSNizIoHU7mxpRTZsAvHDBGSo%2Feo6JoR05f3Ps8b6c%2B4cAFqdGUJ7eTkcPaG4jrdqrPzS4BSeHGuTYa9%2Bo8&X-Amz-Signature=da62221cac740ee1dbdfb1616ae27773e2c3c5f80465f2741c3c01f230372fdd&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJPCI6B2%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T061215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDkoAbGg4yllSEGMgBSd6rKlaVid08%2BmMH%2BZ%2FNVfyVK3gIhALNN913cGxfJqDkPbf2jcLzFEstZP5zfSmMEcvaFeGt%2FKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4ik3Q%2BPII9vAbSI8q3AODIqEg6qdZQOujtcZD%2FM8cvDxRoan4JvqnsT6Wu7k2sDJHMdtvjLXLF1fxWdkEkW9yy6ZxNxjIsAf2LUU1UJVoL0R3bKNaqXISFHlN3W%2BZOHiSOa13MpVx7lCeKJ91xoU5HRWeZF7GsCCz4MfTL%2BI5r9a8zcsIhLQdyo%2FpGcroIEtwMl26KqcQp0dMhFSNqhrZsAN6A%2FgXWyCGnAsEE1IUkVlHrSm%2FiRqS4kFlZt7CrqZxTx7yJohRWqprFFFzGXEBBFMCFZr3QJ1iaeXlwOrwuZdS%2B%2BMK2wmX6Ya1vnY2goVvP31hx2n%2BH%2BYJ9DF6BXFGAXq51oN4B1aEWE%2BRnBGvQE%2FLezAxlVcVq%2FItsPGXi6eZ3da3%2BXbe33IuNG2l71rrBCufCa0NUVJnZLne1tMEn%2FXRLr5b%2F0E4BwX%2FnVPfd%2BwybCex9T9EiiuOCIt9tKmD9YYVwZvyX7BhW1XjOrJq9j7JEolKvixCHanx04fBsushRhQJPZaQg2VuCRwXSSqhhbwf4Vpe7pTH4gK9QDCo5vBnxJkTQHLqn0z0PMNDx28QD%2BCo%2BpkGaUJ9JnXLxO8Pu5C5wHXRiraQ6Imi1j5VyRtJ%2BBwBsA9t4QbA4WC2UQnd7PqQ%2Bdieo0DtsjDBvdHABjqkASEvN0P1w%2F6frqLS4l3cnHR3W88yc%2Fg1h3MtJriNlHDkonem5exy5zVtBn28K28ruT0pLYcpbn8VkDqkEsg6ETeTmmTslHmtxMVdeydRUki5V7P%2F5lg5k%2BFwGiMWA47%2F%2BBBAyC5ds1KfnP8GgQFELgIQ9YBjA%2BsvIM4nNLB9kAsrte01OO0330xqJC%2BkpeNkfrgtDgQ8%2FQMaQBZ%2FxdfYu6FZ5gS3&X-Amz-Signature=a3f13415113419c9bcb58947f94a75fe7a3129e377dfb59adae58b84f869f0a8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5R7M2W7%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T061215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIDqXFIKa%2B2MOVoNUoE%2BO7NBFyEDVxE8%2B%2Bz%2BcrMJ8at9ZAiEAvKtB8W%2BUfQLmK77AH5VOB24BWFwNsyvJmZ4MLeUci4MqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDsW81gDgZmMV3SjYSrcAxlJTo5CQW9UQr1QKa3H88vZC2G4RiTijeC%2B4shbw%2BmvUEY%2FqWEHjFQb3120GBKVietNzm3O0vx%2Bsopq148fCU1NwFWDUAySSnLzk2n1N2zajNA5ZqOzwkONV072UBDJvXGJ90wzpe7pK0a4Yveb7jEKnnQSVfZSynm8NtrqexZshtsElDu45ASvH%2BokYNvsb01qt6t%2B4T%2FP6Z%2Bh2sOgWcPK1ri8VL28K6a4W0OWNkDXczfEUpngCbVKv%2BEika5cgyzzTpeFhLUe5rjQaoehdE9ihUencBD2L8DEwsnKjwidvLKcl%2FwXrgamA8IbQN5zA3VoAAdTcVoQJBebk%2FKn0IdRkALLI0I0y%2Bm1QVgJ3HImr%2F7sGWXBhozsHb3zAuQHpri4oFfYsnk0HKUIZfBAkBQvnXK0WRpKxlqq1TiWx1nqks%2FGdXf3bp88yETgrZYvabaqWSoLlRhJV4TFQmYL1PFMA%2F1AtvVcspRF6Neiabz3xpzu4haqJ1Qu6MKoPBM4%2BDObn6Dw40Qcr8nyQtb6KAZMT0M%2F1yUdqwmYOwxU%2FqTvqkoObsJWQa9ErSGwzBKVGJeWX2Iucg%2ByfBWkn%2BVCENHqfh9Iyibm%2B72wXnQVmSQzB5qYfalnp1%2BA5StpMIa90cAGOqUBSiq2tHDrkCZectpjy%2BFOYk%2Bh8L9Y598UCV5EvFCIX3JbiuHuQxNfkOT3xndgUbjIPgfBge5Jx%2B91eulvyR70CN2I7IGoe26k3HNfgAMHKiF82jAlKpudRCy5V1ECEcdk7Jw8819D6KS4SegIuWavVae2Tdg%2FDlyX1i93Sni5sr0MUHEyObaf5EM2o%2FlQvuAb61z2vgaew3IrSBcB298wk3WNunTw&X-Amz-Signature=d13622c36e398abd0248ad01154b740cc988518e62ef809775685a173653f8bc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EYCIVQG%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T061211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIBDoRMc0kPPHETPRtNevdrcuSw0Ai%2BL%2FX9d6f8ijrCdTAiBJ4uUUmU%2BzGhh2FGhftOAF2DXqy6asYKFYYKKi0tgBRCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ0FGQZw0K9VCE9mEKtwDwsMfYh%2FS2cHjFXw17nIJHO%2BZJDvYnzqfJRIx5ZBiNrfwuvG%2Fza3hq3MaBo5RLgWoJCeWWSJ0OksV71jQXEZI8mP4HO1RWoVTobJuUBXQKa1uNugmhFOfDfcLFOhYBkY0ldhVKrUahZ%2FkBFCPushjPE3kc10I6uDezfucveeVpbLaeI38oEWB9A6cauKUabpX%2B8CCBFXbIMkkEZcoksdWtcV8DLEFc%2Fl9Z1z3DNf8rXvl1CT%2BgMsqqokAZs4G7pg8Ym0qFxJppVETlGSsrMq1gT584rA7E0qunJHQ3Uva2XY%2FD%2Bb5Wr2zpKtmwwHemFBIXFnVGLLwoWgXelUCZIDQzlPBhLYQNip592T7MDFK4nJfBQsPfe1iUApVv6k7pb%2B%2BjW4nVSOg4At%2F9ZhQMuCzK0bx%2FqQAVJ8iCY%2FIRXb0eOYxVa6bmz1bCHTi%2BJJ0N0GZ7i0uAMlMqQYd0Mj1xfOI2HFw4PC2CSDd0g9IGdJzHJQK55IWyeO78ONLE8GfwwBOE62xmjj2EPv1E9PgaFIaprCABC3GRqS12xFVesemQx1MgIMWCzsb8rWeIYjA%2BPXPfUea%2Fg41dpWSKO4tJAvssGfJ4de82VhS4fIEEu25YB4tu8LVZK93r5sf0TEwyr3RwAY6pgE4lM0rdLJgK6WrQGYgNvNtPmx4MhjosnWO95Yb%2BR3C2%2B2j03W7UzIAA1PXbxDcOPUE08iygIUkkClF2npj2eJJf4fd9chXPrG0EO9pKIgoPbyShUHRQ7h0X7QH9wtkUznlB8Ncb2JftLSNizIoHU7mxpRTZsAvHDBGSo%2Feo6JoR05f3Ps8b6c%2B4cAFqdGUJ7eTkcPaG4jrdqrPzS4BSeHGuTYa9%2Bo8&X-Amz-Signature=ed7afef0f4ccac7f2aa1a1f6d5109a4cf99c4bc08fe227a048dc8072f64a16da&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
