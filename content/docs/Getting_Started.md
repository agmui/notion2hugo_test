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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VTN3ZII%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T004305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCiQKyUpOamd2zV28ccSmrKjCcH2kFYC5lqtPad%2F5nZXgIgDK5XFpiLTsOI7dA8nXG6AVby%2BOmC3Tegbwu%2BUJNLttkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDODZdVb3k4KNqbhqGyrcA9sF%2BC31x0h8k163GWZAVpTgPBpvQSvpuO8tBX0%2Bq6Plyd4h0RqyWsvRCL2gOcifhQgy9g1GikOwom7euuokvvS7kpQq7AjDWeei6gpoEWYUnWqpEoaTrPJ6zD%2BKAItD%2FL8k8PGgSMyPz7MCPAAJaIPcBL7y5LbSs6DiXAby2nRWFKkdBPO%2FZicIPW8ZGc1hahuOt81zgO3S6OGp%2BWzoUpkeWEW9886z6P5u%2BuCQnqeaf9UCzQkgROPv6kn6o25WLsD7joplepSIx7ovnSS48IPVG8VDTk%2Bwnjg0ho1A3%2BsG8VMK8cMr0xNRNV2uj%2FiyPUROtKk1q4ZS1kiJ%2Fx5r5tscpQ3GXv9FP2wQcpiYiwQJaeTlHRsPh5vjtvB4hJsrFJ9MxH2wSIFY5D0nUgJaRRwAoQM4%2FjjAbxu5WEKfoT8l0K6e%2Bc7uz3B%2FeiiZRQ9YerfrTY%2B1vRmF4G3IprwbqMcXgzWGdQLdOpvR428ZtlzxabCfI0HvQMqxUC%2BYzO87OLuJwEhkZR%2FsoVb9nGu%2FUapAX0%2BOUlIG5X0Xp6TORkInetOdMUohjo2P6uhqH7COh4THk78lHfyvhnT%2BfU%2Fyh5CwYvNWKIQrQfzCSIJUqcLRbSav8VMYs%2F4usi0%2FMP3JscMGOqUBfPFyxrIq3zi2aTqzttYP5MVr7b1xb7c%2FnjpCn8KehTzwaK1itVLIUn1cs%2Fo02qPLRDDsKtSfA1JRVNpXbKy2K%2Fv16SEp01nDSBvC7dCswvb1pl%2Bmmu%2FaOnwn2eAWd341KHS1qOkSiWV3w4qSKy0jN3DDycDZq7CN9C%2Bx673Ubt17ZOE%2F8sGRFrEkBCL4%2FuX2CivaWusKRnta3mW%2BwihKhgPBBmgF&X-Amz-Signature=c0d112a6e632933d200087e0f0729741d9d1b0c59062d8f66db15a19954d8ab0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VTN3ZII%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T004305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCiQKyUpOamd2zV28ccSmrKjCcH2kFYC5lqtPad%2F5nZXgIgDK5XFpiLTsOI7dA8nXG6AVby%2BOmC3Tegbwu%2BUJNLttkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDODZdVb3k4KNqbhqGyrcA9sF%2BC31x0h8k163GWZAVpTgPBpvQSvpuO8tBX0%2Bq6Plyd4h0RqyWsvRCL2gOcifhQgy9g1GikOwom7euuokvvS7kpQq7AjDWeei6gpoEWYUnWqpEoaTrPJ6zD%2BKAItD%2FL8k8PGgSMyPz7MCPAAJaIPcBL7y5LbSs6DiXAby2nRWFKkdBPO%2FZicIPW8ZGc1hahuOt81zgO3S6OGp%2BWzoUpkeWEW9886z6P5u%2BuCQnqeaf9UCzQkgROPv6kn6o25WLsD7joplepSIx7ovnSS48IPVG8VDTk%2Bwnjg0ho1A3%2BsG8VMK8cMr0xNRNV2uj%2FiyPUROtKk1q4ZS1kiJ%2Fx5r5tscpQ3GXv9FP2wQcpiYiwQJaeTlHRsPh5vjtvB4hJsrFJ9MxH2wSIFY5D0nUgJaRRwAoQM4%2FjjAbxu5WEKfoT8l0K6e%2Bc7uz3B%2FeiiZRQ9YerfrTY%2B1vRmF4G3IprwbqMcXgzWGdQLdOpvR428ZtlzxabCfI0HvQMqxUC%2BYzO87OLuJwEhkZR%2FsoVb9nGu%2FUapAX0%2BOUlIG5X0Xp6TORkInetOdMUohjo2P6uhqH7COh4THk78lHfyvhnT%2BfU%2Fyh5CwYvNWKIQrQfzCSIJUqcLRbSav8VMYs%2F4usi0%2FMP3JscMGOqUBfPFyxrIq3zi2aTqzttYP5MVr7b1xb7c%2FnjpCn8KehTzwaK1itVLIUn1cs%2Fo02qPLRDDsKtSfA1JRVNpXbKy2K%2Fv16SEp01nDSBvC7dCswvb1pl%2Bmmu%2FaOnwn2eAWd341KHS1qOkSiWV3w4qSKy0jN3DDycDZq7CN9C%2Bx673Ubt17ZOE%2F8sGRFrEkBCL4%2FuX2CivaWusKRnta3mW%2BwihKhgPBBmgF&X-Amz-Signature=926fc1dc605ad768a3e598ee4fe0f6884f01fbdd921699dd6f6ee2f10d58fe64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VTN3ZII%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T004305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCiQKyUpOamd2zV28ccSmrKjCcH2kFYC5lqtPad%2F5nZXgIgDK5XFpiLTsOI7dA8nXG6AVby%2BOmC3Tegbwu%2BUJNLttkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDODZdVb3k4KNqbhqGyrcA9sF%2BC31x0h8k163GWZAVpTgPBpvQSvpuO8tBX0%2Bq6Plyd4h0RqyWsvRCL2gOcifhQgy9g1GikOwom7euuokvvS7kpQq7AjDWeei6gpoEWYUnWqpEoaTrPJ6zD%2BKAItD%2FL8k8PGgSMyPz7MCPAAJaIPcBL7y5LbSs6DiXAby2nRWFKkdBPO%2FZicIPW8ZGc1hahuOt81zgO3S6OGp%2BWzoUpkeWEW9886z6P5u%2BuCQnqeaf9UCzQkgROPv6kn6o25WLsD7joplepSIx7ovnSS48IPVG8VDTk%2Bwnjg0ho1A3%2BsG8VMK8cMr0xNRNV2uj%2FiyPUROtKk1q4ZS1kiJ%2Fx5r5tscpQ3GXv9FP2wQcpiYiwQJaeTlHRsPh5vjtvB4hJsrFJ9MxH2wSIFY5D0nUgJaRRwAoQM4%2FjjAbxu5WEKfoT8l0K6e%2Bc7uz3B%2FeiiZRQ9YerfrTY%2B1vRmF4G3IprwbqMcXgzWGdQLdOpvR428ZtlzxabCfI0HvQMqxUC%2BYzO87OLuJwEhkZR%2FsoVb9nGu%2FUapAX0%2BOUlIG5X0Xp6TORkInetOdMUohjo2P6uhqH7COh4THk78lHfyvhnT%2BfU%2Fyh5CwYvNWKIQrQfzCSIJUqcLRbSav8VMYs%2F4usi0%2FMP3JscMGOqUBfPFyxrIq3zi2aTqzttYP5MVr7b1xb7c%2FnjpCn8KehTzwaK1itVLIUn1cs%2Fo02qPLRDDsKtSfA1JRVNpXbKy2K%2Fv16SEp01nDSBvC7dCswvb1pl%2Bmmu%2FaOnwn2eAWd341KHS1qOkSiWV3w4qSKy0jN3DDycDZq7CN9C%2Bx673Ubt17ZOE%2F8sGRFrEkBCL4%2FuX2CivaWusKRnta3mW%2BwihKhgPBBmgF&X-Amz-Signature=240008a06d81ca63fe3c34e1def4416622d4348a6ea932c559f61fd051a75e27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UILKFXM7%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T004307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDsOGcLkVnMi8ftUfc9%2FX%2FltVa%2FJ%2Bhd0VMzfVGEr7DvcgIgRUOCsXTmMeD2SlqEdd3BzkptznFdi135MdQR6ACmuoUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKiCH9S4Zy6kP%2BxLOyrcA26cYNIaelpLr%2B%2BqTbIikGBOwnAsStDbzIq9M4H7aNwfNKUTImovEpRaofzu33mGdhziMOeeP7gjD7C2Mbq7CTM4PsY3kgs%2FOVrQ4ecaXiqSxnByvhwuJ1D5UfymazK5kuuU5EDx12Hpyty2A5%2Fk2bBdjoWfOWSfJKHu3Z8n5jz20gnZEmZs6ZQOOVCtPat425LM%2B7SUz7bSQM%2ByO7zsiINWM0ywrhKd7jCRWPqV9qtKTiw3dTRjdlbW0sQyXpchJU01e0XXxS5DGvP%2FRrJiva9oUpUGsiHx7eHZca0DWw733miuwKyLQjepVd1QuSwWpb0SZKBgUCWzj74y7aOxfo2InW2ghkwcKZWicgl0pG%2FY5wPzpgEqxfZHgy%2BpfsKBadXUCZxV8gC3eHHjx1BdCCMrdKFTtdRtZxjmUUTOYnbmm7VZtLHphLDQ3NMhbaiAHC3kziEhsmVEpMix4Xw6pOLFt%2F4xMMyYxC0w3W18gZJ5KbcE0NYEff%2BNKvfe7fpU6h498f0DYgGpqDBwJ%2BeNsat%2B97DRvEo5vbwMnoVq%2B8Gezwo9lLcSnjDwo%2BqeOHinYbw6VN1C6mk5ozbaJaKrYSxhaYCyvlJET0gcQXhUdK0jSsAsMvsYsM%2BtpcqjMMXKscMGOqUB%2BMkLEjbnUYNHZ5bg6tSWctKZx0qvGgtrFSw7TkhxqpYar3p4ZWiA5anxFKbxG0DLJGuhixDSxUOfjU%2Be5fJ6WqwsDeGiHZawjU5ohLQddsJB2%2F53qBdHRuLFi4wmMsxNqPM9IGCrsNXFgbi7QKSVjcfFOTZhN5Z%2BxdIfvd6gsL1S3V4prjqu%2FRIntoMTPdx4Wdsqn5B9KY7OdO61cZepa9MT%2FSK%2B&X-Amz-Signature=9f52f08ae6f95456baa81ad964e7f7ac8238ff1172e8fa927223cf15da02e522&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623RLM3KT%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T004308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIAHuTjVEsVUAL9M3fMO1YGc%2Bf8dhq5e0lsmLpPoPupUWAiB0eodm%2Bq%2BuiQdWlIlJb7zio76lY%2BdWjLjnAcD8kq00ZSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbJB9jVvyv05QJCudKtwDuMnagHxpuNcUVIIRnwtiCGwl9LbeedAL%2FJ61EMIOvAEnJ%2B2m2Htor0lVG69U%2BIWVLLDQJovXbOEGnkFlC03I54WqstrmOY479z4wmghNYFJXfqFs3Nngmd6TgZcArVKeZI1cEQudFJsmt2KCmK0uUJZOKh8jMLKFwTyGPmckRmN%2F9e1S6YbM3oDbiZT9ptVIxbpf8wZbRRSPgq7Tcd7Gut2jatGwhsKloewDKdFUQnrP5Jer2fIioLtcE4h7E8WNqbt%2BM0OBqYVUos8zQjopw%2BksrrOAdQ2m4%2BprLvUEilB4Z77h%2FfO7L1CymxU4j%2F6n1vjlx%2BXvnPnphnnLArSkRxG6bEkjspOGcb6B65EAAaOzogZVrss9JCc3ZUzTDe%2Fsiplc3n1McgX5bqLm6d2%2FMT%2BYKEOCOtThrMCHtOYDCRqgLkZc6FFv%2BX6D2OuOBtSU38lG8YQu44dHstKI1gKncgqydTHoxmyCda6ew2v87KGVyLPPM7JT%2BoXiwk705IE2fhqX1fyl7v5QVE1CItUo%2BtoMFNCXdzDFZ6pJQh%2FASYsgQi4VEYOjua40SDuCSuK9P7%2BFxthReo9xSdTTFp6Ag5jHNFEjBBoS5L9wYfBXto%2Fl7%2B9ydtwtoeb7I5Iw%2BcqxwwY6pgEtxAp%2B%2FIyTWhEL8Snp%2FXqm91EDB9yihgnUEgefaBVt6o1cExUw%2FrhAb3%2FvvT9%2FXUYlDFrvFkV%2FiLctPBPOMZQTJj7BN3cy2BOuvugS1UB7VkPAAOwN40SDsdtlLa%2FPUfY8op7zNf3Je%2FRTmysnOWaWlNu2uVTMCCEIOk%2FMUF%2B9m5hskCARJRJymIlB3P02YG0SURhS6lVeaWVodPnUOZyjPRFSyfHK&X-Amz-Signature=8347425c3e033d8d008366c4fb73a8ace7ce21a4a48650959811f467be7d81b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VTN3ZII%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T004305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCiQKyUpOamd2zV28ccSmrKjCcH2kFYC5lqtPad%2F5nZXgIgDK5XFpiLTsOI7dA8nXG6AVby%2BOmC3Tegbwu%2BUJNLttkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDODZdVb3k4KNqbhqGyrcA9sF%2BC31x0h8k163GWZAVpTgPBpvQSvpuO8tBX0%2Bq6Plyd4h0RqyWsvRCL2gOcifhQgy9g1GikOwom7euuokvvS7kpQq7AjDWeei6gpoEWYUnWqpEoaTrPJ6zD%2BKAItD%2FL8k8PGgSMyPz7MCPAAJaIPcBL7y5LbSs6DiXAby2nRWFKkdBPO%2FZicIPW8ZGc1hahuOt81zgO3S6OGp%2BWzoUpkeWEW9886z6P5u%2BuCQnqeaf9UCzQkgROPv6kn6o25WLsD7joplepSIx7ovnSS48IPVG8VDTk%2Bwnjg0ho1A3%2BsG8VMK8cMr0xNRNV2uj%2FiyPUROtKk1q4ZS1kiJ%2Fx5r5tscpQ3GXv9FP2wQcpiYiwQJaeTlHRsPh5vjtvB4hJsrFJ9MxH2wSIFY5D0nUgJaRRwAoQM4%2FjjAbxu5WEKfoT8l0K6e%2Bc7uz3B%2FeiiZRQ9YerfrTY%2B1vRmF4G3IprwbqMcXgzWGdQLdOpvR428ZtlzxabCfI0HvQMqxUC%2BYzO87OLuJwEhkZR%2FsoVb9nGu%2FUapAX0%2BOUlIG5X0Xp6TORkInetOdMUohjo2P6uhqH7COh4THk78lHfyvhnT%2BfU%2Fyh5CwYvNWKIQrQfzCSIJUqcLRbSav8VMYs%2F4usi0%2FMP3JscMGOqUBfPFyxrIq3zi2aTqzttYP5MVr7b1xb7c%2FnjpCn8KehTzwaK1itVLIUn1cs%2Fo02qPLRDDsKtSfA1JRVNpXbKy2K%2Fv16SEp01nDSBvC7dCswvb1pl%2Bmmu%2FaOnwn2eAWd341KHS1qOkSiWV3w4qSKy0jN3DDycDZq7CN9C%2Bx673Ubt17ZOE%2F8sGRFrEkBCL4%2FuX2CivaWusKRnta3mW%2BwihKhgPBBmgF&X-Amz-Signature=2dad5878736a6327172786bd13f6d015885805bbc90238ca32fd56d888ad245c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
