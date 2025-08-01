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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGSAPIUG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQQejiX8hTSzt%2BGGjS3LtwFEBMsKI0IoMQDUKOorWwxgIgZfmxW54RnGrsRvPIlMhi%2BPcj76dUWrTQAh3QVhVs7ZAqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEdFQCrZ37fM5806CrcA2khQkKiYS85B5SKt3PjIIxQIo5nPqtLiq8gdcvVhRv9%2B9DJUc0jaaqB4eruGSpVFea41iIb%2Fy1ZDRpzhXfzlVlTzgSPhYt1YRE2Q2g4cWNX%2FWdEAWqDkCBQlrRqM7etxaZCJWpgE8gi3srDJ1F7nLdMPAYQulS5DNh6fmR8aaiEaNBy%2F6M7i2aH6HeNajInyW66pALJjR7AWth3jU2A5E58XP3xslmz6qmRzliYhx%2BYDfo4NGYSlpD3uQl9w19sW0EdtLZLhW0V%2B%2FN6CHN3iQ3ZIlKUgrMLogLsoCs5StOhfVDUFSROoETwEqRvWf2P3TKQn7KX2MR5chXixaYyzqNaWnCLbmVAmxGuDiKeAkwfVZPr9bK1W%2BieDyopKIbIUmwZ7rs026qhdENjZyIh7lXbmQe9isPLMdQzVkuUyZJ9aLBn%2B1VpA6nvX2OPPkkusG6b5uNj0ew3kZ6kQPkibBnbAVzRPqDx2mN%2Blirj%2BGmdwar579tOn8e4lj0BtGdScZ9SJZiMXvqpasWymeLjKKpkTQZ6MTIry6CrLEYlazTsVF%2BFbtOoH1LrfnIgE0o16BXzKfHOiUOblCiPpjLq9008fDZHjlAuAUXfbOmxK9N7fJAO%2FotB%2Bu%2BEkBoXMKiKs8QGOqUBpqW6oAfXGW%2FeAj%2B2qzmEXOplQ%2BeoNT%2B6eYFZ7jqyLABTdIam0rJYI3TMWxY6a%2BHhQqUZjG0Ik7VGLCNhrc045I2kYH3%2Brx%2Fu0eFba%2BbpvVaE%2BBHfsvHG4pB7DQHRSve%2B2uFfnkJ1nWmLrksQhn5lgzvnC5G4MKX7BCiIlfHsJTMSfkyrwnCrVOL86%2BFy4o4dGejowXTlGCiGMxe0p3X3NnUPU7Y%2B&X-Amz-Signature=2005729424ae2e1b9bec3916462dc58cee9f472ae8ca095870bfed06bc9e6574&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGSAPIUG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQQejiX8hTSzt%2BGGjS3LtwFEBMsKI0IoMQDUKOorWwxgIgZfmxW54RnGrsRvPIlMhi%2BPcj76dUWrTQAh3QVhVs7ZAqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEdFQCrZ37fM5806CrcA2khQkKiYS85B5SKt3PjIIxQIo5nPqtLiq8gdcvVhRv9%2B9DJUc0jaaqB4eruGSpVFea41iIb%2Fy1ZDRpzhXfzlVlTzgSPhYt1YRE2Q2g4cWNX%2FWdEAWqDkCBQlrRqM7etxaZCJWpgE8gi3srDJ1F7nLdMPAYQulS5DNh6fmR8aaiEaNBy%2F6M7i2aH6HeNajInyW66pALJjR7AWth3jU2A5E58XP3xslmz6qmRzliYhx%2BYDfo4NGYSlpD3uQl9w19sW0EdtLZLhW0V%2B%2FN6CHN3iQ3ZIlKUgrMLogLsoCs5StOhfVDUFSROoETwEqRvWf2P3TKQn7KX2MR5chXixaYyzqNaWnCLbmVAmxGuDiKeAkwfVZPr9bK1W%2BieDyopKIbIUmwZ7rs026qhdENjZyIh7lXbmQe9isPLMdQzVkuUyZJ9aLBn%2B1VpA6nvX2OPPkkusG6b5uNj0ew3kZ6kQPkibBnbAVzRPqDx2mN%2Blirj%2BGmdwar579tOn8e4lj0BtGdScZ9SJZiMXvqpasWymeLjKKpkTQZ6MTIry6CrLEYlazTsVF%2BFbtOoH1LrfnIgE0o16BXzKfHOiUOblCiPpjLq9008fDZHjlAuAUXfbOmxK9N7fJAO%2FotB%2Bu%2BEkBoXMKiKs8QGOqUBpqW6oAfXGW%2FeAj%2B2qzmEXOplQ%2BeoNT%2B6eYFZ7jqyLABTdIam0rJYI3TMWxY6a%2BHhQqUZjG0Ik7VGLCNhrc045I2kYH3%2Brx%2Fu0eFba%2BbpvVaE%2BBHfsvHG4pB7DQHRSve%2B2uFfnkJ1nWmLrksQhn5lgzvnC5G4MKX7BCiIlfHsJTMSfkyrwnCrVOL86%2BFy4o4dGejowXTlGCiGMxe0p3X3NnUPU7Y%2B&X-Amz-Signature=69e87cc31a0bd2364ae744c7a8d0217afc1091ba1fef70047383434fcfc08598&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGSAPIUG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQQejiX8hTSzt%2BGGjS3LtwFEBMsKI0IoMQDUKOorWwxgIgZfmxW54RnGrsRvPIlMhi%2BPcj76dUWrTQAh3QVhVs7ZAqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEdFQCrZ37fM5806CrcA2khQkKiYS85B5SKt3PjIIxQIo5nPqtLiq8gdcvVhRv9%2B9DJUc0jaaqB4eruGSpVFea41iIb%2Fy1ZDRpzhXfzlVlTzgSPhYt1YRE2Q2g4cWNX%2FWdEAWqDkCBQlrRqM7etxaZCJWpgE8gi3srDJ1F7nLdMPAYQulS5DNh6fmR8aaiEaNBy%2F6M7i2aH6HeNajInyW66pALJjR7AWth3jU2A5E58XP3xslmz6qmRzliYhx%2BYDfo4NGYSlpD3uQl9w19sW0EdtLZLhW0V%2B%2FN6CHN3iQ3ZIlKUgrMLogLsoCs5StOhfVDUFSROoETwEqRvWf2P3TKQn7KX2MR5chXixaYyzqNaWnCLbmVAmxGuDiKeAkwfVZPr9bK1W%2BieDyopKIbIUmwZ7rs026qhdENjZyIh7lXbmQe9isPLMdQzVkuUyZJ9aLBn%2B1VpA6nvX2OPPkkusG6b5uNj0ew3kZ6kQPkibBnbAVzRPqDx2mN%2Blirj%2BGmdwar579tOn8e4lj0BtGdScZ9SJZiMXvqpasWymeLjKKpkTQZ6MTIry6CrLEYlazTsVF%2BFbtOoH1LrfnIgE0o16BXzKfHOiUOblCiPpjLq9008fDZHjlAuAUXfbOmxK9N7fJAO%2FotB%2Bu%2BEkBoXMKiKs8QGOqUBpqW6oAfXGW%2FeAj%2B2qzmEXOplQ%2BeoNT%2B6eYFZ7jqyLABTdIam0rJYI3TMWxY6a%2BHhQqUZjG0Ik7VGLCNhrc045I2kYH3%2Brx%2Fu0eFba%2BbpvVaE%2BBHfsvHG4pB7DQHRSve%2B2uFfnkJ1nWmLrksQhn5lgzvnC5G4MKX7BCiIlfHsJTMSfkyrwnCrVOL86%2BFy4o4dGejowXTlGCiGMxe0p3X3NnUPU7Y%2B&X-Amz-Signature=9c75f8a8324b66f500efb34cb7684d5449f8ef8a583076ed82b19490eda394bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWQYHDG4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEKHfjsDjudJyR5j6IYqW%2FIZmIyGGjJpuCAvcj4ku1obAiAS0Hr0ioZcQsjiu4KzV47MdTblwStetR54%2B4q4iznfoyqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFxYgOPiWVMCZ2tWwKtwD322ABmEhga8Q846mEBSAc2hpAs3IY%2FxkYq4yZwyLwni17%2BS5A1KHZY3MDSmhv%2FuVpepZLRq8FjYm7sP7dsFDtpLA8Q6FgKePJ9ieGik8rB3D%2FOwrRYiXFuApDFUDmGmyLNnQkiWEUB8lgzkD0ggAghYSMAiWNyUkRdRyiVJLWC%2Fnr0b8T6ZziUhYOf%2FNbzlkFV2Z2FHCmSy4N%2B%2B4V%2Fuoed5EpWDd46666AdMajdufLknkZdqMA5nXMB1h0kOwWuA11IZpoKc5RhgWQmvyrP3V5EpJ57F3DI0lBucswXjrI1IOjF7SB4qb0ureVqhFGM0wnjhXQZT%2FxMjo%2BiqD2izrPYlu3rA58CQa4gmuzX9s87PZuQk2kix0GoaBmJSDJVSZnISOSXr9fng3eJzUIltUFOpjPSGgbN8%2F9tl%2FqBDFKbmEgvDjzHdVTe5cnBuf5p4Q0EAtXJl1%2BvrafAL1Ph5pi4lL9kZPEUHRoKsw24D0ebtdF9BwX09z2nca3yCasIsVN6b6IjBgbUrvtTWhfI66ceyBGuOHOnGsJUyD4827eZAjuPhmHZDQ%2FwRn%2FUGDBc0pxDCyuHp9pqJWNsfi9n1tsK7ESucgu4p1JA1ik7MfUD6DjUcvrmiJK2TslEwo4mzxAY6pgHFo8seTUq4At4hIDF6w5JoAosvE8dT26kDFAMUVD%2BBl8o0fsUlu8GvZPtFet1dyBWoRl91aZ%2BsQKN20lNphoIajTbWCu0nhvyjnb1v0towhD4wyNG%2FTAbcybFnF8To781NBlfGW%2FtYS2MkU6fEKoSrCy9LNf42hGj6Ei2lk%2BX%2F8ZQPotPFGSifdD6aG0eyQD6cZz3umF2dHS%2FL3bOLBM7IMdO1BdRO&X-Amz-Signature=5eb3b0ee6acf60d8b0fe5024ea3c8e86a9fe9e180ab56679b56b2502c670b681&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7ASNU6G%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpoJ7F%2Bmb%2BV1ozwZX%2FLT8QXsEMz7ruAlFXirBNX1GAOAiEAoR3ULh3xcFfVRVAbISlyW6S76AtDWlQVqqDGyCqmEC8qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBEu5hNz67wfo0LjDircA%2Bsn0dVXCeZysdj1tz9jpRW6WX2gFMnWGfIE4tI5PDxaA3%2FLCFtNrJutGcgLg49%2FSzXb1YsULVn4VWJPBmSwyjCCCvLDBLp%2B4nXBmmR4KOpCwvxNX07nitdUPzPZ9GYU0AB%2FZ0gvCqW1dQxIo15XEJ9XCa3%2FxUip3IqMwkxji6jrj5ZGxt9SjmV4GpPvmaxm%2BuRkrGAncdzbHhjECIi1rQUGUP8etSTHcbjJBpymoUQtKZgiBxrF%2FlDfkGokX%2FE5LGw3GpCmupkkG%2F%2BuyaMy8TO14Iyo8VT6ipFVu%2B%2FwuVbmmgBZ1Y24A9vfhHAeTzQqu68NnSHy%2Fn%2B5TxlPm3wJNXdwvz7zgTIkswGYFCWgMF08EYb0YFjGIhzLL%2FTwzJM8ItuIMPn0c2zFA3%2FSRrqY2R5OPIk3GLtm4%2B6SNk0fkQO9ybaY5rgRui623EQwB3vQ1Z1QycRML1WgsR%2FkGTme%2B8EUZn32DovDZGRx1HdCWFGsGUw0USowh69Y3zrjfVLBrH7aa1vBstnDstL9jaaq6FLME%2BMgWPfE5%2FpFLHhCF9W0KqkTFtP8FsbGgG25ZUqbZ663kAVOmq3I9eAxYtxBIdPtO1vUl%2BpewlwN5DHFBPOxWoOwSc0o4%2FD80YGGMMyJs8QGOqUBEVBwzwjMJM4CLSm8SR4I3RqGBpdE90CRFcfysmgpnH8VqhBFODADTSx%2FGWYRsczN1lE2TiMq50NjMa4mh8LccB3hp1q2apdi8NK6NGb2HywizaNSilAwuuA%2BbTa7UhfoQ0QDsDaVdi36qAewHm0lMSBAjynhNBryPznjTt9qay5KZP%2FbrYjuSE3ACrn5NMhV7H1BxTGcx7vmb1J5TgKJ7Vszns0D&X-Amz-Signature=4b1b6a36acd43e0a84ef31c5387cbea035f03823ff246f7566749f2bc84748d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGSAPIUG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQQejiX8hTSzt%2BGGjS3LtwFEBMsKI0IoMQDUKOorWwxgIgZfmxW54RnGrsRvPIlMhi%2BPcj76dUWrTQAh3QVhVs7ZAqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEdFQCrZ37fM5806CrcA2khQkKiYS85B5SKt3PjIIxQIo5nPqtLiq8gdcvVhRv9%2B9DJUc0jaaqB4eruGSpVFea41iIb%2Fy1ZDRpzhXfzlVlTzgSPhYt1YRE2Q2g4cWNX%2FWdEAWqDkCBQlrRqM7etxaZCJWpgE8gi3srDJ1F7nLdMPAYQulS5DNh6fmR8aaiEaNBy%2F6M7i2aH6HeNajInyW66pALJjR7AWth3jU2A5E58XP3xslmz6qmRzliYhx%2BYDfo4NGYSlpD3uQl9w19sW0EdtLZLhW0V%2B%2FN6CHN3iQ3ZIlKUgrMLogLsoCs5StOhfVDUFSROoETwEqRvWf2P3TKQn7KX2MR5chXixaYyzqNaWnCLbmVAmxGuDiKeAkwfVZPr9bK1W%2BieDyopKIbIUmwZ7rs026qhdENjZyIh7lXbmQe9isPLMdQzVkuUyZJ9aLBn%2B1VpA6nvX2OPPkkusG6b5uNj0ew3kZ6kQPkibBnbAVzRPqDx2mN%2Blirj%2BGmdwar579tOn8e4lj0BtGdScZ9SJZiMXvqpasWymeLjKKpkTQZ6MTIry6CrLEYlazTsVF%2BFbtOoH1LrfnIgE0o16BXzKfHOiUOblCiPpjLq9008fDZHjlAuAUXfbOmxK9N7fJAO%2FotB%2Bu%2BEkBoXMKiKs8QGOqUBpqW6oAfXGW%2FeAj%2B2qzmEXOplQ%2BeoNT%2B6eYFZ7jqyLABTdIam0rJYI3TMWxY6a%2BHhQqUZjG0Ik7VGLCNhrc045I2kYH3%2Brx%2Fu0eFba%2BbpvVaE%2BBHfsvHG4pB7DQHRSve%2B2uFfnkJ1nWmLrksQhn5lgzvnC5G4MKX7BCiIlfHsJTMSfkyrwnCrVOL86%2BFy4o4dGejowXTlGCiGMxe0p3X3NnUPU7Y%2B&X-Amz-Signature=20c7e353074838a22722551003dfb908070bfd3c3748aa63c9cfd1f12dc2c33f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
