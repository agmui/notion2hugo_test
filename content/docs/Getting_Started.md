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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NPXCPND%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T004629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNAXqDA5EBX63MS6uR0fXJPpdB1eeG46ZgZsBjRMhUvgIhAK6krvfZaEQ3zrnoTtikA%2B4CXUYCSgxT2hw4Jklx5D9ZKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKtB9nVeid3tXclugq3APTVM3NO0ONYpw5NFS%2FMWwiTJ3%2FrYDIbtaIE6iYgDfkz6qS%2Fr1LEoLkpc%2B0lTKHKbeL7zhQWc2M3F0Uax4d2QbDtaxLZ05eCRPe7P1M%2F4HWfyj36%2BJM3GAw%2FRvk%2F%2BCmVDH4L1BCFWVVEmzYn7aHTITTlzb2zuGdLcItDFFPxfAPnuzLkMebb%2Fw8RIsx0dWGpVPtAHKQ8WicL7GwSeicSKtH7%2F06bykNGy8XO2Vx1XEr7hYxhIcNidqDHsCycY%2Bp2LFdIDajsln8p4B4Q4scw8mafIDt281TeVA7EOVUUj1fk2iea6%2By8ew7y95BB3vuVTsBH%2FYniTKn2hz%2FbjZgL%2BrGCMqh5ouhp0f2Yz2%2BUdHuyB9g2z8r5tncpIus9HjlNdMr61aOJstRusAX6CnW07ysAZnFS1vwko%2B%2FDi6Fdk2UvHAEDWF%2BkkIBMmmDpwt%2F5lwdZI0fvFhQoS%2B9GhjZRIRJYBt4WJdYUY5SKkEJs9DGM84dLVd4OhxRxFIAt3RjYQzqrpJDOaxQLHJTpWFlSArGJ03soCZCTUEW3K1HGyi1gSAnofqOZwTNPDgG23urbmZcyqZtyA%2BXa0uRQgsmNK1wGJKgn4jpOe9dMDxOCeaczrRnmB%2FnYxjN%2FpUxyDDnzIbDBjqkAeZTPskIDlcVIC%2Ftk3qqa%2BwYWFNbLH2WHEhXCQR8rRMeZawshcwmg%2BOhz9OgElIsRapo2IL9xcnkANQYHMmfzn7qXGzxCVn1mjeLW%2FFnLwB%2B0zZUhxdhwXP4HbLtNQmtY1ErXqFy3XO9jnFJDzp539P%2B%2BDiKfZdGGbvEyG%2FMaNpYp%2BA7t%2FvlgLV6L8Y8DFgOfqHyhNgjI7fi5045MRbvkQtDXg5E&X-Amz-Signature=a0f4a7486874fe63fd148c3dcf3aeb0e4e5fbc548c8d431aaafe24074e45dd9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NPXCPND%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T004629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNAXqDA5EBX63MS6uR0fXJPpdB1eeG46ZgZsBjRMhUvgIhAK6krvfZaEQ3zrnoTtikA%2B4CXUYCSgxT2hw4Jklx5D9ZKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKtB9nVeid3tXclugq3APTVM3NO0ONYpw5NFS%2FMWwiTJ3%2FrYDIbtaIE6iYgDfkz6qS%2Fr1LEoLkpc%2B0lTKHKbeL7zhQWc2M3F0Uax4d2QbDtaxLZ05eCRPe7P1M%2F4HWfyj36%2BJM3GAw%2FRvk%2F%2BCmVDH4L1BCFWVVEmzYn7aHTITTlzb2zuGdLcItDFFPxfAPnuzLkMebb%2Fw8RIsx0dWGpVPtAHKQ8WicL7GwSeicSKtH7%2F06bykNGy8XO2Vx1XEr7hYxhIcNidqDHsCycY%2Bp2LFdIDajsln8p4B4Q4scw8mafIDt281TeVA7EOVUUj1fk2iea6%2By8ew7y95BB3vuVTsBH%2FYniTKn2hz%2FbjZgL%2BrGCMqh5ouhp0f2Yz2%2BUdHuyB9g2z8r5tncpIus9HjlNdMr61aOJstRusAX6CnW07ysAZnFS1vwko%2B%2FDi6Fdk2UvHAEDWF%2BkkIBMmmDpwt%2F5lwdZI0fvFhQoS%2B9GhjZRIRJYBt4WJdYUY5SKkEJs9DGM84dLVd4OhxRxFIAt3RjYQzqrpJDOaxQLHJTpWFlSArGJ03soCZCTUEW3K1HGyi1gSAnofqOZwTNPDgG23urbmZcyqZtyA%2BXa0uRQgsmNK1wGJKgn4jpOe9dMDxOCeaczrRnmB%2FnYxjN%2FpUxyDDnzIbDBjqkAeZTPskIDlcVIC%2Ftk3qqa%2BwYWFNbLH2WHEhXCQR8rRMeZawshcwmg%2BOhz9OgElIsRapo2IL9xcnkANQYHMmfzn7qXGzxCVn1mjeLW%2FFnLwB%2B0zZUhxdhwXP4HbLtNQmtY1ErXqFy3XO9jnFJDzp539P%2B%2BDiKfZdGGbvEyG%2FMaNpYp%2BA7t%2FvlgLV6L8Y8DFgOfqHyhNgjI7fi5045MRbvkQtDXg5E&X-Amz-Signature=d59c587a146353b8cbef023be31ee9715b3b0d0261a6d9f7fbb1fe38eb543e99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NPXCPND%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T004629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNAXqDA5EBX63MS6uR0fXJPpdB1eeG46ZgZsBjRMhUvgIhAK6krvfZaEQ3zrnoTtikA%2B4CXUYCSgxT2hw4Jklx5D9ZKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKtB9nVeid3tXclugq3APTVM3NO0ONYpw5NFS%2FMWwiTJ3%2FrYDIbtaIE6iYgDfkz6qS%2Fr1LEoLkpc%2B0lTKHKbeL7zhQWc2M3F0Uax4d2QbDtaxLZ05eCRPe7P1M%2F4HWfyj36%2BJM3GAw%2FRvk%2F%2BCmVDH4L1BCFWVVEmzYn7aHTITTlzb2zuGdLcItDFFPxfAPnuzLkMebb%2Fw8RIsx0dWGpVPtAHKQ8WicL7GwSeicSKtH7%2F06bykNGy8XO2Vx1XEr7hYxhIcNidqDHsCycY%2Bp2LFdIDajsln8p4B4Q4scw8mafIDt281TeVA7EOVUUj1fk2iea6%2By8ew7y95BB3vuVTsBH%2FYniTKn2hz%2FbjZgL%2BrGCMqh5ouhp0f2Yz2%2BUdHuyB9g2z8r5tncpIus9HjlNdMr61aOJstRusAX6CnW07ysAZnFS1vwko%2B%2FDi6Fdk2UvHAEDWF%2BkkIBMmmDpwt%2F5lwdZI0fvFhQoS%2B9GhjZRIRJYBt4WJdYUY5SKkEJs9DGM84dLVd4OhxRxFIAt3RjYQzqrpJDOaxQLHJTpWFlSArGJ03soCZCTUEW3K1HGyi1gSAnofqOZwTNPDgG23urbmZcyqZtyA%2BXa0uRQgsmNK1wGJKgn4jpOe9dMDxOCeaczrRnmB%2FnYxjN%2FpUxyDDnzIbDBjqkAeZTPskIDlcVIC%2Ftk3qqa%2BwYWFNbLH2WHEhXCQR8rRMeZawshcwmg%2BOhz9OgElIsRapo2IL9xcnkANQYHMmfzn7qXGzxCVn1mjeLW%2FFnLwB%2B0zZUhxdhwXP4HbLtNQmtY1ErXqFy3XO9jnFJDzp539P%2B%2BDiKfZdGGbvEyG%2FMaNpYp%2BA7t%2FvlgLV6L8Y8DFgOfqHyhNgjI7fi5045MRbvkQtDXg5E&X-Amz-Signature=d1e2e65f0f4215b379d0ff6045e04698d4e264a9acb8ff8f3f58be0273f219ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HA3BS2Z%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T004630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6ld0KGdCjIkVwNGjwoG5Z1I%2Bnwn5KmBdDmhIdhr5mFgIgZVTWxtUmR6CYYnORslc8xDCBpvFN%2BFEyM6VkJBDjIG8qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2TX5M2vGeZY%2BcsUSrcAyq8pT3jYoVVDoAwc5uXywau84zjg8y4yAn8z4TdEjZZFhhI7nZysYwe6LNt71LGZVHl2Y4io9Hnd%2F94hHI5sgWMhiNE2NPrjPfuvE5uP64tKtwzkOwt%2B4OMPKfaAVk%2BU%2FPXJIxjR9ggFChMKL05HsCXV0smwakFnt6BSI0WoSJQUQ2yso3OISjbGP8VCT%2FmoW%2Bd%2B%2BJiZeHjzYOPswTI0gM01D3WVCBIYEbTqKzzex0hfUCPh9WJGv5pDtyiRKUVqN5KNS3WaKS09kel9eVFVV39jts8Cx%2BNhR3j0576dA%2FTZmaYshEm0ch%2Bt2J3ZeYxTkQ23BegVdw%2FlswxUj5RrVNpcMa5%2B61HEw%2BgrBfdWLWlXEr%2BCSGHZ%2BpHRvxO30nd0G9KxczpbIEZSQqLQFH9xFfxCBmN7EMjf8I3fw7N4dd0oIyNYI6TWybYvorFcRES%2FoUbr73abzNBbmmJpbqqA2ozeI2ccMFGhiEFzCD%2BvrQ69K%2Bve3Mzi3GdaTA%2BOy6laa3jAyeSgGFxqRozWgZvXCOAz%2BQ3%2FLEJOne5iyqDrEaCYWB5V4lZBanV%2BPx%2FMt1dVGGFYOpG7hIB2fdqBeAnrk3d0zPWoSesG0FWF5QSuBiKlX%2F6ffkcYx2ajqhkMNvMhsMGOqUBq7zZAymun%2Bw%2FezE41vIzSOGdSazzfIo70j4Bbi1RLGWp91iOqNChdBHGjsAzsaJuAQ%2B3wD7qyEKqmrpwMPBlsepuO4%2BfFacVzwgVb24e4WGI990aU9sw7XqNxs7G4vz5DKHiX0iQBs4rEnRsTWwXk02dAxGToFwTePMOltsyX0jpWzeVS174HamjvTYBHZL40nrlx9SOIvcwGFdRqfNTwAiziZpo&X-Amz-Signature=78bfa6b6da1ba3d0ae6e6f2d29f67ee7956582d0eb4166f02d9949c7687ee627&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFXW5XIY%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T004631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAs7nYp8FNioxYTAo2LEVv8suAOlUTVjyH0qT1tbQZYWAiEAxBE11wvXFv%2B%2BmSlIOO39cIW5xgFydEW5GfmdwcXiaToqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKdk4S9LZ9Ho%2FwZyfircA3UVPkK6ZL1oJy6MxUVch2oM7jYyTPecEw8CdLabBd1gBoyUEhPJt5GTzhuPN6Ze4hgYYkvCs5H6z7N9Zvi9PTifePtIKnDOHotKhLRHjYmn0UL4Vpwka%2FRQtWGUki%2Fp1%2FghBI5yYTTASFmebdX9EM%2FmVtPk7lz7XmQcEHKUflXDd2Uqk838cQ4LZ3sbXKvF5pWuf2RErYvdnamPBt5jhKI%2BAILNIAKuhqrWaLCgXYJ2%2FCtalFsh59%2FN0ZXr%2B4w7xABsCKUv%2BDC%2FpGCr5qUvtfln0g%2BJEBhunI52tyAWU6lLnplaKUjgeCWz1D0iTe9x6eV%2FAbAJkVPEBpOu%2FM8BHVvdGqlfU6x8kOSo4khqmQUxR5XZKf09nMl2pq%2BWafJVW8csl8pRWoD%2FthyuXU9r1ibrj27lYz8WhOnbdaakLTwwjQuUo3BYE825%2F5km%2FOGcseSh%2FtcZdIiH4IX0t7rypP0L6Yact9uj%2FLBI%2Fp6BWQux%2F7VRygu5ECLY%2BWxvvPFI0pQ7JtweGnAfaV6aJXC09IvvlI0sfLFziRWziy84Aov%2Fi2Xs5UrhpLFXA%2Bs30YNI2J0BLefIzca16rXBgC7Gyc1asdn2gtzhI6QgfP23hPB1HwvrPu8FD1eWayAiMPHMhsMGOqUB3KQbO1APVyv3LA6XZEU1R4rB1h8C3VblfgK3jZxS2VkYrbEbyg5WMeSd0dROUTHVSjhEtcdjyOLHk7d1vfZEVKEy%2F6xpYjOBorc76%2FPOu7x7ZEi%2BzmcLu2X0qoTNdNfAbo6IhEk7ZmZExb1roljF9IdN0okM5uznU29ev0%2F%2BVldJleffyBZuXLAW5SWghZLDZFkI7UaSKh9rtoqo62baGq2TclXx&X-Amz-Signature=7235a6eb2c9d30993dcef8181eb67ccb2a3107f56af5469271aa04abde76a2d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NPXCPND%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T004629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNAXqDA5EBX63MS6uR0fXJPpdB1eeG46ZgZsBjRMhUvgIhAK6krvfZaEQ3zrnoTtikA%2B4CXUYCSgxT2hw4Jklx5D9ZKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKtB9nVeid3tXclugq3APTVM3NO0ONYpw5NFS%2FMWwiTJ3%2FrYDIbtaIE6iYgDfkz6qS%2Fr1LEoLkpc%2B0lTKHKbeL7zhQWc2M3F0Uax4d2QbDtaxLZ05eCRPe7P1M%2F4HWfyj36%2BJM3GAw%2FRvk%2F%2BCmVDH4L1BCFWVVEmzYn7aHTITTlzb2zuGdLcItDFFPxfAPnuzLkMebb%2Fw8RIsx0dWGpVPtAHKQ8WicL7GwSeicSKtH7%2F06bykNGy8XO2Vx1XEr7hYxhIcNidqDHsCycY%2Bp2LFdIDajsln8p4B4Q4scw8mafIDt281TeVA7EOVUUj1fk2iea6%2By8ew7y95BB3vuVTsBH%2FYniTKn2hz%2FbjZgL%2BrGCMqh5ouhp0f2Yz2%2BUdHuyB9g2z8r5tncpIus9HjlNdMr61aOJstRusAX6CnW07ysAZnFS1vwko%2B%2FDi6Fdk2UvHAEDWF%2BkkIBMmmDpwt%2F5lwdZI0fvFhQoS%2B9GhjZRIRJYBt4WJdYUY5SKkEJs9DGM84dLVd4OhxRxFIAt3RjYQzqrpJDOaxQLHJTpWFlSArGJ03soCZCTUEW3K1HGyi1gSAnofqOZwTNPDgG23urbmZcyqZtyA%2BXa0uRQgsmNK1wGJKgn4jpOe9dMDxOCeaczrRnmB%2FnYxjN%2FpUxyDDnzIbDBjqkAeZTPskIDlcVIC%2Ftk3qqa%2BwYWFNbLH2WHEhXCQR8rRMeZawshcwmg%2BOhz9OgElIsRapo2IL9xcnkANQYHMmfzn7qXGzxCVn1mjeLW%2FFnLwB%2B0zZUhxdhwXP4HbLtNQmtY1ErXqFy3XO9jnFJDzp539P%2B%2BDiKfZdGGbvEyG%2FMaNpYp%2BA7t%2FvlgLV6L8Y8DFgOfqHyhNgjI7fi5045MRbvkQtDXg5E&X-Amz-Signature=117d3ec9673fd1d7553ad5a1962690a168f6c2ca506705e13ed69c236effec8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
