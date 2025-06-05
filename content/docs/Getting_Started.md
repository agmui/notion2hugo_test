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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIJLFZL6%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T140856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIG2KQliO5bdbAWxuhvbUXfd9Z5rEAow2dNDq7wp9fxEAAiBOHgD1lWLarr6Rkf6f7u3SPJOM%2FAb7hH9f6bIYorin0Sr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMXAR9gL%2Fj%2BDTglkuDKtwD4MWGI%2FelIy8a2WfTjs4xu1LXvPNHF4pYGZpS0Mydj3HZzThTJDxvfoaIDcgABC8O9yNIfabpPJca4s33jCnHewG4YJ6cSGtcYzZtFeeAZmkm12zLel4FLspEPSW4DIN6teY8Sj3vpvMccXCH1H6q199iNN%2B8SBSovBLj0tzBaCLMrT9NenyyWLaTMwdtnJNbiWDkxShzv8Kj6WOkBSk9A73vmV1ULOMT08n26NvNGVXE1u2YqRCOoaqUaKtZRtcotwxZYLUZ98BLFzF0fAmsA%2Ff3A3igB0MfoT8KyAp%2BzP6NwTcl05B1lBVLKuS9CT0lnfLOqnfPVzCiywSKiPMdGAvq%2BHG5nIszCa59yvXYI1T7gcO9Y9gQUrngACuMaOGtZbwX%2F2E7Ra%2FwxijZKBLRkMrImnaikupzcjyK0CaBQ3YYu13Ts02LV8odUTiRnq93DDzNSSWtNL%2BeUxcrgo4mctOXm6Jgc9YzzxXw4wwF%2Bj5BThF%2BOcE901eQbA9CrQtWBhBNgzkQLfNLIS6i8dbusnB8tuFAkknLKJQ7kdQc1DsolgYCR4skzS8kCGhVm5bpyqwIUhx%2B5F4dvSo6MuBkmtelvDgknS5ar5gjI1m0WUJydjJCODuezzsKqOIwwsSGwgY6pgHH3YEyTJVxcg7NHK8Lzpn%2BSdbt3J5lDHaTz5rbIwYSZtIvqGFtmp1NqAGhb6MgffiqF9UhO9rDiBB1SOtZi7dfV3KkLUevRyytE2P%2BOq7Zbtslvl9Uryr2wnShAnMa%2FuiRaSbgVPGoU2GcFt%2BC409qesMNODPX6hfcLIN2bwEBTeeSOkzvmipeaZeVNqS2P1RXYzgxgs6aAqsahAdWEDphNuxS8fZF&X-Amz-Signature=a94fefee695f485a79c93668eed6ef3578e05e5b1ab914d4e46ac746ef63da39&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIJLFZL6%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T140856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIG2KQliO5bdbAWxuhvbUXfd9Z5rEAow2dNDq7wp9fxEAAiBOHgD1lWLarr6Rkf6f7u3SPJOM%2FAb7hH9f6bIYorin0Sr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMXAR9gL%2Fj%2BDTglkuDKtwD4MWGI%2FelIy8a2WfTjs4xu1LXvPNHF4pYGZpS0Mydj3HZzThTJDxvfoaIDcgABC8O9yNIfabpPJca4s33jCnHewG4YJ6cSGtcYzZtFeeAZmkm12zLel4FLspEPSW4DIN6teY8Sj3vpvMccXCH1H6q199iNN%2B8SBSovBLj0tzBaCLMrT9NenyyWLaTMwdtnJNbiWDkxShzv8Kj6WOkBSk9A73vmV1ULOMT08n26NvNGVXE1u2YqRCOoaqUaKtZRtcotwxZYLUZ98BLFzF0fAmsA%2Ff3A3igB0MfoT8KyAp%2BzP6NwTcl05B1lBVLKuS9CT0lnfLOqnfPVzCiywSKiPMdGAvq%2BHG5nIszCa59yvXYI1T7gcO9Y9gQUrngACuMaOGtZbwX%2F2E7Ra%2FwxijZKBLRkMrImnaikupzcjyK0CaBQ3YYu13Ts02LV8odUTiRnq93DDzNSSWtNL%2BeUxcrgo4mctOXm6Jgc9YzzxXw4wwF%2Bj5BThF%2BOcE901eQbA9CrQtWBhBNgzkQLfNLIS6i8dbusnB8tuFAkknLKJQ7kdQc1DsolgYCR4skzS8kCGhVm5bpyqwIUhx%2B5F4dvSo6MuBkmtelvDgknS5ar5gjI1m0WUJydjJCODuezzsKqOIwwsSGwgY6pgHH3YEyTJVxcg7NHK8Lzpn%2BSdbt3J5lDHaTz5rbIwYSZtIvqGFtmp1NqAGhb6MgffiqF9UhO9rDiBB1SOtZi7dfV3KkLUevRyytE2P%2BOq7Zbtslvl9Uryr2wnShAnMa%2FuiRaSbgVPGoU2GcFt%2BC409qesMNODPX6hfcLIN2bwEBTeeSOkzvmipeaZeVNqS2P1RXYzgxgs6aAqsahAdWEDphNuxS8fZF&X-Amz-Signature=588eeccbbc7955bae4aa9ef727d958264e95941a19981472a2a34506e68a5bb8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIJLFZL6%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T140856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIG2KQliO5bdbAWxuhvbUXfd9Z5rEAow2dNDq7wp9fxEAAiBOHgD1lWLarr6Rkf6f7u3SPJOM%2FAb7hH9f6bIYorin0Sr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMXAR9gL%2Fj%2BDTglkuDKtwD4MWGI%2FelIy8a2WfTjs4xu1LXvPNHF4pYGZpS0Mydj3HZzThTJDxvfoaIDcgABC8O9yNIfabpPJca4s33jCnHewG4YJ6cSGtcYzZtFeeAZmkm12zLel4FLspEPSW4DIN6teY8Sj3vpvMccXCH1H6q199iNN%2B8SBSovBLj0tzBaCLMrT9NenyyWLaTMwdtnJNbiWDkxShzv8Kj6WOkBSk9A73vmV1ULOMT08n26NvNGVXE1u2YqRCOoaqUaKtZRtcotwxZYLUZ98BLFzF0fAmsA%2Ff3A3igB0MfoT8KyAp%2BzP6NwTcl05B1lBVLKuS9CT0lnfLOqnfPVzCiywSKiPMdGAvq%2BHG5nIszCa59yvXYI1T7gcO9Y9gQUrngACuMaOGtZbwX%2F2E7Ra%2FwxijZKBLRkMrImnaikupzcjyK0CaBQ3YYu13Ts02LV8odUTiRnq93DDzNSSWtNL%2BeUxcrgo4mctOXm6Jgc9YzzxXw4wwF%2Bj5BThF%2BOcE901eQbA9CrQtWBhBNgzkQLfNLIS6i8dbusnB8tuFAkknLKJQ7kdQc1DsolgYCR4skzS8kCGhVm5bpyqwIUhx%2B5F4dvSo6MuBkmtelvDgknS5ar5gjI1m0WUJydjJCODuezzsKqOIwwsSGwgY6pgHH3YEyTJVxcg7NHK8Lzpn%2BSdbt3J5lDHaTz5rbIwYSZtIvqGFtmp1NqAGhb6MgffiqF9UhO9rDiBB1SOtZi7dfV3KkLUevRyytE2P%2BOq7Zbtslvl9Uryr2wnShAnMa%2FuiRaSbgVPGoU2GcFt%2BC409qesMNODPX6hfcLIN2bwEBTeeSOkzvmipeaZeVNqS2P1RXYzgxgs6aAqsahAdWEDphNuxS8fZF&X-Amz-Signature=aa6a2b37e6d35dbbd85c41d2bfb782c2f9d548c93fc84c54e517e0ef78537182&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J5DVE34%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T140900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIH4TIBzuH8xwMwS42NtSWLZ5PFhLKmY7yGBUwt36eFylAiBX5oZKOL4E2Q10qoOhDoA8Odw2ubac11dF9BfNOMS8nSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMuwoQqr4ZZsXwr7TBKtwD3U3%2FCQkg6%2BXe%2B60Zg7yZOWIyWaopKUO1tx6ZGfxrGfxlHTE%2B3jlScLbQbsdkpQZq%2FqYyBocqW3EQLha%2FhMNf7C%2BtRLqbpQCqX%2BIli0wMfPDBWuI%2By46xQTUD7N%2BRLH7LdACXYfvZScaxyv7V5PpaY9gK%2FXaOmPgCvF882Ws2ys9v867c7gjBJnDp2T%2FZH4M%2FSAPndZJ%2BHocruhkcZ9UjiKHmS%2Bm6GanGcLUIkJFTCs8X%2BdtXaW%2B6mM5zAXAnjMB4hL%2FtZhY4cLspkkYi6RkWDXC%2BzVK6sdvToOgZ%2FekwnXM0OdiBPv%2FffjIfa06m42hmLQza%2FvesLKwV6QEouStNQt1gHVs3clucW9iSvaPOoyr8CCs2fWPDJ%2FnRd5vfaJu6dhmOtBzPY4EXTl4y%2BXV5YklOkDjQ1NXd6US5ykUYdUohUE1hfm8t5YFFTbZMpinADzLlfmJNKWbgLOEZvg5m3wIco1LA6zeYcS044qhDrzGiVX411L0OSPTwQQVl7CgR5ZDwLC5tNKkOhO5Uc7tSfFwMwk6M5vVA8K2T98d8mRckjmyaZpiPD0YguGr%2F8ltT0qE8PA5XLdfEsudFAtSAlZUc0DoZtKVRdEY7e31Hy7n47vPUNWbx%2BRp1OHww48SGwgY6pgHN5K1UDlJaxBA3878tZBWBt4ikK41%2Fds7XwYj72kCSA2zOq%2Boq5XtxxVzJD49EySYhK1EPow7%2F393pjOW0Li1WK57i2Be7%2BJh6EwG1yA%2FsU8DCENAhgtmwn6jEK7aqF51cwFFsWupbEDiyW1sB6js8CpJvuxwyg8tclAP80lBSo6rvkpua7f7PxMOmAObhKYew08vMP07FKQOtUqFwjHIGLVYkWsBu&X-Amz-Signature=14bdc6e9c889a939d1120863d45b3da6fdcd9116f589aae6ee701746925fdd81&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDGAVS3A%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T140901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIDRNquEpU9wYh3%2Bmj31SY4ZIalAcSBpRQoHA16w2Q6vwAiBmNwA1e6dWU1Etarc9r7YGvtg2jW%2BAMgjQE%2FCadFUwkSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMpPSrk7grcwFRN79iKtwDvFH5yCgvmYfgn9VF5gyY6E9k6%2BKMFtmPKOEx%2Fk7GvbEcGKxwrMkX%2F%2BspPxw8JYp2qWdrqd6D%2FPGEt0Vp3eJ1OkegaL04sNlGRRz6q6qZ6rdeQlIV%2BctLiQ9nl%2F1K7daGnOWpMbzoXEfcZpnueiummmETLsYM6laMbtqB1Bhee6z7XBvfBI1G0Se7NI%2F6My8yKdPSStytVYQITCYuC94Sgj2gsctqFMHsdMO4i2gzCg6zFl5mCSwO5Y0bEV0qAU%2FM98DOrrF1VZo2zf%2BIeH1VN%2B4zCUBONqEpdMClnFakEzmXOBZ3wlFwHIyQnZZ4dFLM%2FSwegKzUMMIhB%2BUOKTFOEP6duPacq6gYNpUFRyFB0s3H7NQmWiPDowT3cMlexxck2hvejCpSsGoLfJxEgflTt6dHVRp0fWb3aWYv1ig%2Fj1GdgtQHlX5O9NkNM11f3%2BE150K49DaINHeRoXIrW5IG%2FEx66jo5K0os3G%2FzEom6%2F8lBbP7vIn8nD%2BXdSOtbKhfgvSaf9S1E9raPHWZ2HFbzwTMEimDHsPahmZdqzvlpDcgJeyETdOm1SkiwTuPfLAxKfnKd%2BHoAm1e1Cs1k%2BKbAki0yTvitCYmpzzTllO4l860Lgiic3tpUM1GR2XMw1sSGwgY6pgFJMHn3pWN4kywWHyffCYTAgjD79AGVBuQpas2FjBWJv0jJGKnd%2FEmUTffRM6hjiXolrCYbJufNq2QbrhYeqbEJjfq3RgnsOwtplv2lSmMvI%2Bk48XKokIhfwq4fEbuDZeGM5piky%2FEAyxdPxXZqWar0N8RjamBg8uvflWItVbiEdMNtF0Uz5Fgefk%2BRSebMdb8UauBlUeQmF99ywExnD9ZzKmGHRMbq&X-Amz-Signature=5ced2991e3e34ea56b73f1a2605fba519283edb80c74b052cfb5c55ca31ece6a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIJLFZL6%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T140856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIG2KQliO5bdbAWxuhvbUXfd9Z5rEAow2dNDq7wp9fxEAAiBOHgD1lWLarr6Rkf6f7u3SPJOM%2FAb7hH9f6bIYorin0Sr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMXAR9gL%2Fj%2BDTglkuDKtwD4MWGI%2FelIy8a2WfTjs4xu1LXvPNHF4pYGZpS0Mydj3HZzThTJDxvfoaIDcgABC8O9yNIfabpPJca4s33jCnHewG4YJ6cSGtcYzZtFeeAZmkm12zLel4FLspEPSW4DIN6teY8Sj3vpvMccXCH1H6q199iNN%2B8SBSovBLj0tzBaCLMrT9NenyyWLaTMwdtnJNbiWDkxShzv8Kj6WOkBSk9A73vmV1ULOMT08n26NvNGVXE1u2YqRCOoaqUaKtZRtcotwxZYLUZ98BLFzF0fAmsA%2Ff3A3igB0MfoT8KyAp%2BzP6NwTcl05B1lBVLKuS9CT0lnfLOqnfPVzCiywSKiPMdGAvq%2BHG5nIszCa59yvXYI1T7gcO9Y9gQUrngACuMaOGtZbwX%2F2E7Ra%2FwxijZKBLRkMrImnaikupzcjyK0CaBQ3YYu13Ts02LV8odUTiRnq93DDzNSSWtNL%2BeUxcrgo4mctOXm6Jgc9YzzxXw4wwF%2Bj5BThF%2BOcE901eQbA9CrQtWBhBNgzkQLfNLIS6i8dbusnB8tuFAkknLKJQ7kdQc1DsolgYCR4skzS8kCGhVm5bpyqwIUhx%2B5F4dvSo6MuBkmtelvDgknS5ar5gjI1m0WUJydjJCODuezzsKqOIwwsSGwgY6pgHH3YEyTJVxcg7NHK8Lzpn%2BSdbt3J5lDHaTz5rbIwYSZtIvqGFtmp1NqAGhb6MgffiqF9UhO9rDiBB1SOtZi7dfV3KkLUevRyytE2P%2BOq7Zbtslvl9Uryr2wnShAnMa%2FuiRaSbgVPGoU2GcFt%2BC409qesMNODPX6hfcLIN2bwEBTeeSOkzvmipeaZeVNqS2P1RXYzgxgs6aAqsahAdWEDphNuxS8fZF&X-Amz-Signature=801987699f5e441499913364e0062788f7536f5a25531aaf8487edecd576bd12&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
