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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S36C7RSN%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCICPNHRH4yz13VkjrDc9MIR80TQGWGt9NngLwRELuoLnaAiBymqONGIXLIkSu2gCzKB%2BF%2BlJc6LeD4YHxj36Ls%2FNv8yr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM60IJspYPEqcr3jRbKtwDhmP5v0I%2FtHFmZ84Z5kTzBXPkhmFTG2gwzHR4veAoP%2FJVZjkDCj4qy1U3cdR3593D0TnwBlM33T2RuUISgDAiQZaUKtrE8rlxU1Y0hGyynypDUf0TQapwel8T%2F0%2Be5m1jnfjuQJq7iDacLEOYxT14zzGUN%2Bd6%2Fl8SFZylzTaPlbssfCqh%2B1uvAzbA2SxZiwu6Hn0ReHAEED9uRSFlhwoWRhq0nZe2EeDBcsvV%2BhhIGiNZ%2F8BSMjPdf34j3jCZDOeq60ltl5K6Snwz76aypgQBYVP678NKjJwJP5WzPFeDCoMV6CLHvAzKZVVhNNmiftDmOb83pgaDuM%2FZwfdvxwJuUPXE242tw%2FIrybSLTZ86JMvW7AesqdfMIYlSOk7gvxOAHBAz1VjDzQgRBelu%2B3Er%2BHCvhtgQ%2FEQAkkJiWM3WcVD4WqSD8ecGHNd7VSLJyFmEaHZMETUI5dN8IEVvkH61VXbYskyK16z0HmP%2BUKTU7Eh%2BPR1l%2B3eIcC5rmFmJ7NGzp717rJC66S%2BUPo8IdQAGzCDFBSzhzu%2BdRpMKTcAyIGNu%2BnFfai%2BD%2FvjT0fxmn8b3DLRzm463sNo0q%2FHFTQoFCw9cwggda4zjRVzLgEzGSQnwgxjIDZdkJiCJfJ0wtveAxQY6pgGyq%2FlW1I9SjPDoEOgFfD8UHq5L2hkeP37jDEp3IwQg9rdNbEaHd0INpp77nkWD7LLheFbhnDnx7HBuRsH6u%2Bjd%2BBg5k%2F4fxeARTLp%2FftsqcF05qs6MHr%2BC5WYGWnHMwaQMcgQSKwjN0IlWLext%2FdpdaRjRHyNeO6oeI7VVi6ciTk6LrhaNk0c8GNUZ2vZX0zd91TEkFhtzI51hIKAfFkubpBSMJQq9&X-Amz-Signature=0d5be0ba74219c6737d13926215c5216109730df84937b51144502bbd8bec6db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S36C7RSN%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCICPNHRH4yz13VkjrDc9MIR80TQGWGt9NngLwRELuoLnaAiBymqONGIXLIkSu2gCzKB%2BF%2BlJc6LeD4YHxj36Ls%2FNv8yr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM60IJspYPEqcr3jRbKtwDhmP5v0I%2FtHFmZ84Z5kTzBXPkhmFTG2gwzHR4veAoP%2FJVZjkDCj4qy1U3cdR3593D0TnwBlM33T2RuUISgDAiQZaUKtrE8rlxU1Y0hGyynypDUf0TQapwel8T%2F0%2Be5m1jnfjuQJq7iDacLEOYxT14zzGUN%2Bd6%2Fl8SFZylzTaPlbssfCqh%2B1uvAzbA2SxZiwu6Hn0ReHAEED9uRSFlhwoWRhq0nZe2EeDBcsvV%2BhhIGiNZ%2F8BSMjPdf34j3jCZDOeq60ltl5K6Snwz76aypgQBYVP678NKjJwJP5WzPFeDCoMV6CLHvAzKZVVhNNmiftDmOb83pgaDuM%2FZwfdvxwJuUPXE242tw%2FIrybSLTZ86JMvW7AesqdfMIYlSOk7gvxOAHBAz1VjDzQgRBelu%2B3Er%2BHCvhtgQ%2FEQAkkJiWM3WcVD4WqSD8ecGHNd7VSLJyFmEaHZMETUI5dN8IEVvkH61VXbYskyK16z0HmP%2BUKTU7Eh%2BPR1l%2B3eIcC5rmFmJ7NGzp717rJC66S%2BUPo8IdQAGzCDFBSzhzu%2BdRpMKTcAyIGNu%2BnFfai%2BD%2FvjT0fxmn8b3DLRzm463sNo0q%2FHFTQoFCw9cwggda4zjRVzLgEzGSQnwgxjIDZdkJiCJfJ0wtveAxQY6pgGyq%2FlW1I9SjPDoEOgFfD8UHq5L2hkeP37jDEp3IwQg9rdNbEaHd0INpp77nkWD7LLheFbhnDnx7HBuRsH6u%2Bjd%2BBg5k%2F4fxeARTLp%2FftsqcF05qs6MHr%2BC5WYGWnHMwaQMcgQSKwjN0IlWLext%2FdpdaRjRHyNeO6oeI7VVi6ciTk6LrhaNk0c8GNUZ2vZX0zd91TEkFhtzI51hIKAfFkubpBSMJQq9&X-Amz-Signature=99fd0856d26b1c6378ba631d8b2e4c2dba5ac0a21eac513949e34eb7e00b39af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S36C7RSN%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCICPNHRH4yz13VkjrDc9MIR80TQGWGt9NngLwRELuoLnaAiBymqONGIXLIkSu2gCzKB%2BF%2BlJc6LeD4YHxj36Ls%2FNv8yr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM60IJspYPEqcr3jRbKtwDhmP5v0I%2FtHFmZ84Z5kTzBXPkhmFTG2gwzHR4veAoP%2FJVZjkDCj4qy1U3cdR3593D0TnwBlM33T2RuUISgDAiQZaUKtrE8rlxU1Y0hGyynypDUf0TQapwel8T%2F0%2Be5m1jnfjuQJq7iDacLEOYxT14zzGUN%2Bd6%2Fl8SFZylzTaPlbssfCqh%2B1uvAzbA2SxZiwu6Hn0ReHAEED9uRSFlhwoWRhq0nZe2EeDBcsvV%2BhhIGiNZ%2F8BSMjPdf34j3jCZDOeq60ltl5K6Snwz76aypgQBYVP678NKjJwJP5WzPFeDCoMV6CLHvAzKZVVhNNmiftDmOb83pgaDuM%2FZwfdvxwJuUPXE242tw%2FIrybSLTZ86JMvW7AesqdfMIYlSOk7gvxOAHBAz1VjDzQgRBelu%2B3Er%2BHCvhtgQ%2FEQAkkJiWM3WcVD4WqSD8ecGHNd7VSLJyFmEaHZMETUI5dN8IEVvkH61VXbYskyK16z0HmP%2BUKTU7Eh%2BPR1l%2B3eIcC5rmFmJ7NGzp717rJC66S%2BUPo8IdQAGzCDFBSzhzu%2BdRpMKTcAyIGNu%2BnFfai%2BD%2FvjT0fxmn8b3DLRzm463sNo0q%2FHFTQoFCw9cwggda4zjRVzLgEzGSQnwgxjIDZdkJiCJfJ0wtveAxQY6pgGyq%2FlW1I9SjPDoEOgFfD8UHq5L2hkeP37jDEp3IwQg9rdNbEaHd0INpp77nkWD7LLheFbhnDnx7HBuRsH6u%2Bjd%2BBg5k%2F4fxeARTLp%2FftsqcF05qs6MHr%2BC5WYGWnHMwaQMcgQSKwjN0IlWLext%2FdpdaRjRHyNeO6oeI7VVi6ciTk6LrhaNk0c8GNUZ2vZX0zd91TEkFhtzI51hIKAfFkubpBSMJQq9&X-Amz-Signature=4fce9e228eeac6ba96ce87fe3df736ffa1830be36d98e5ac2c41b30990dbc0f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RJHHKO4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIBDwCSKDFzo0KF1FAr2sAXZ2EMtbHHKE9%2BiUVVJtEMTkAiEA%2BNJiEbfvu%2F4%2FyvL5bFJXSccTJAL5V4Ty5YlhzVy5MwMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDB28kY%2BB42oWLwLQICrcA1e8%2FQzUgWcP%2F%2Fyp7nBsO8zPNF7mQU4WYXCg%2BLLiEIwcJc7bKbcw5ZRs%2FEaSsDz3bzWRTcIg4ZAdlf2DZMlyduJDtQQL9pzTjm4%2Fss7%2BNvTuQjLN4jx%2FkZHiML4YpT7Qrc7k20zRKZBzcEp0Z9XTUDQT5X67tQgFMOfBEDnadCO2htByD8qgq%2ByGIQ8n4UIMbvGu%2FjUCjQ01ZIIENo3C%2FcNt4ZlGV8puhjERpuVCwOar5BBBVodr7GBjVaNYucCnXXemhsrUXC9yZnnJ5%2F%2BSWN1DV8HB1CAFkoNzx9Lle1ezEmHCO7plCgZ%2BjkTdl%2BCpOvapE67N5sO1YFPIeAAID2uv1P1obuGZ6UMES%2BCAtc7QXjNbVR2vbKWC5V2MYHPj%2FMAQ1Pi%2FfG91rLt1QOsaqMpquMTwg7gQSYLCQ3oc0NmaPVo1VPpwC7dNYo2mOJptHNWxWpq69XhiG9Gtw1fEQpPFOASRriaC476gcC%2FI4XzUk8a6qYP0d4U775GhhjlWla7CL1%2Bbp7DYC%2B8Tl6B2LOHKwvyOFmVekVKub1%2BP3qvx%2FioVLk7QnlFbIXGoYH2j9mPuqO%2FAFar74WPeNWqOlSaH82M1Q6H2UXWkx6kuInnkMlLsii%2F%2B3z7kZmKoMIn4gMUGOqUBZO9qTGl%2BIsj3asgoKL48T2YzFlqhNz9gBSizB1W4WhidTo4F2uPWxL6OjbIhmNzMvqqpo36R6PucpRQzcsS2%2FjTxMm6ZouXxL7Z3dlSYyJOWc54S0TZPpcPPQDjTA0nXu0gxN0pLlpvz9D2lxaPPQfnXV4p%2B7L22OUCdikaNfwNzp2igp3BSZw58ldAp0gInGex%2FyuHCGRUxPbRDjFxw5kEWofsA&X-Amz-Signature=95e3144f9ae44f7132a5150d1c71be066cb7b05a795f6af12e5586a461ed5c2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T3EWXQY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIB%2FL6gdwflNEQXnGiL8%2F5zR0zwa5q50DpZyJ38yKbBtPAiBU4mUxJJx0NK2YDCBEGgG9MkeB4wT2F6uzMpD%2FbnnCNir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMOe3F3UoQLkut2YY0KtwD0ps7G2ARq8omO1kvU890ASjoqdnbmh0uyi4DrVcit7LT8PNqsWmLYq0ovMIK33gKeQHYclqzOv4RnuagdHrRDoBNVe9okELRtapqvtdPN4Myj2OLAexODCpdWjhU3R70Sg1F2kjlv147hAiOf%2Bb%2FoiPf%2FrKXQtQtYbqLNFfAqD%2Brw8hpPWDo5IuHI0y32GpDLxUWitSlMsJbYVUDjEvN4K4atKQU1qvu%2BxmQZUpYWaP4VZlyBF0ulgxx9YOC8CZneXOFzG0wPzbEGFYnj5Krj6NalErBk3klKMtUxKYqR9OmS8QMlPFaKLLI7SENTuzdvyI0qAIu3mgqDrv2LQPc4F9DwNfaZXvTVv8qaelIkwxfQwyfmixH3fhqexyyLP0%2B%2BztDNmRGXO0o7nsxkIRoYZEu5e0i3odT8keaHNtPiZ8Bz9DgR%2BM%2FCV%2F9vlSYbXJAnLzCw40C6RPW0irrIWGON6e%2Bh1WoACE%2BI7rTaHzRxIHZueNM15mywnTD7zqYUjIA7e4BAotbGh3Mi5xnWA0tbM3KIC55u5BEgwps6TmI5C5oaMAjIONrcDR4foB2I57zud1FTD6dUwjiCzZmVncqJYZbcttWu5niyk0mMD86V1FPhgYyZooLDm6S3V0w1feAxQY6pgGnq%2Bn5au0GIcGp%2BuWo%2FgrY0k2%2F2SYIqkYTmLdJdFVJO%2BNoxkEYRdBekyIx6keOUsrSDlgh6ujtjeum8aWVDeDFPS2rSL7wxx6GPCnSl%2B2rhByyspg5j7i8233VWYErQTGHzflGIS%2BnL3yiqqXPxqotK0cH9buZ6CoOtNUunFPlFUzlDSEEBxjran9lC0R6lJeNPJN4U1Snm4sa1b6syeDRt0VjS4fP&X-Amz-Signature=13055f5d1936e265d2c76391ea082fb735e142b0cf083c9ceff5f32fa6752cb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S36C7RSN%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCICPNHRH4yz13VkjrDc9MIR80TQGWGt9NngLwRELuoLnaAiBymqONGIXLIkSu2gCzKB%2BF%2BlJc6LeD4YHxj36Ls%2FNv8yr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM60IJspYPEqcr3jRbKtwDhmP5v0I%2FtHFmZ84Z5kTzBXPkhmFTG2gwzHR4veAoP%2FJVZjkDCj4qy1U3cdR3593D0TnwBlM33T2RuUISgDAiQZaUKtrE8rlxU1Y0hGyynypDUf0TQapwel8T%2F0%2Be5m1jnfjuQJq7iDacLEOYxT14zzGUN%2Bd6%2Fl8SFZylzTaPlbssfCqh%2B1uvAzbA2SxZiwu6Hn0ReHAEED9uRSFlhwoWRhq0nZe2EeDBcsvV%2BhhIGiNZ%2F8BSMjPdf34j3jCZDOeq60ltl5K6Snwz76aypgQBYVP678NKjJwJP5WzPFeDCoMV6CLHvAzKZVVhNNmiftDmOb83pgaDuM%2FZwfdvxwJuUPXE242tw%2FIrybSLTZ86JMvW7AesqdfMIYlSOk7gvxOAHBAz1VjDzQgRBelu%2B3Er%2BHCvhtgQ%2FEQAkkJiWM3WcVD4WqSD8ecGHNd7VSLJyFmEaHZMETUI5dN8IEVvkH61VXbYskyK16z0HmP%2BUKTU7Eh%2BPR1l%2B3eIcC5rmFmJ7NGzp717rJC66S%2BUPo8IdQAGzCDFBSzhzu%2BdRpMKTcAyIGNu%2BnFfai%2BD%2FvjT0fxmn8b3DLRzm463sNo0q%2FHFTQoFCw9cwggda4zjRVzLgEzGSQnwgxjIDZdkJiCJfJ0wtveAxQY6pgGyq%2FlW1I9SjPDoEOgFfD8UHq5L2hkeP37jDEp3IwQg9rdNbEaHd0INpp77nkWD7LLheFbhnDnx7HBuRsH6u%2Bjd%2BBg5k%2F4fxeARTLp%2FftsqcF05qs6MHr%2BC5WYGWnHMwaQMcgQSKwjN0IlWLext%2FdpdaRjRHyNeO6oeI7VVi6ciTk6LrhaNk0c8GNUZ2vZX0zd91TEkFhtzI51hIKAfFkubpBSMJQq9&X-Amz-Signature=1eb1ceeb2d5626cda5843636d3c3f54d36a01af56cf14f6c0828fa17ded09c7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
