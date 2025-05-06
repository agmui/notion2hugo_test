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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMCZNMDK%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T110726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC05sZC7EmKdAuytP0t%2BCuHK9YOJoKWltPyLyakkU0E%2FgIgeN9xTVAwADzMyt6qdNXLjQIBIuCBGGOj1Bf5FQ5MsIIq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDCqHPWd7Vs9hCzwhPyrcA9A9gevFIC2X5258lhC2u%2BJPbsAHvLhTqaxFmuidZjgFKNEoWaGca2yQ1SOMIZqTrYHt%2Fh%2FxWO5RATdjzGOlg7hF5MncOeYJrf4W2MnEIOMbIHhXGyRlCsWdlK50fbVDSblwEv%2BjuK2IhpibxLw4co37I%2FT5%2BpsXslXHpMEto1kB7rhM63%2BNS7Hw04puapJ6rJrTVdZEcYeF%2FR7nJupkCEAW73njsvkENOOgCJis9SKHMYeMLVYlc%2Fr4Hpxps8uXJsAqyo4UVOOqdWN21cNrENVzLVDs8vPI6ehzfiyxmpcG4EY%2FQHyYBAGufqke%2FG5WsAW5pgcbsnOTa%2FqWtDVlcNU2oitdOoaa0UnWyzp0OrDGZrNRsrmu8CxwXmG%2Bcnxc4n%2F8Uqxkk6wbwzPY8ztVFyp4HI%2FCVjDn50gZRF3Cu2kalNrOqujahbZiNhTvFoqQDAkTXQqVff%2BihC3AWBCEgLgmx13FsrgSnJH3SGgInw2GGU%2BknvKFPcCSHJir7CCRxQqBtsLq%2FHY4xlmIzoz%2Bryro2EaWbXRXCDMs4e5QEKAF8jiqDAGiC%2B9CB14di0Br9J9YQdupUdEdppvnzfFEKO1kq0jXcX3Khb8IGQ0mqXmsm1FB7TXSdlEnkHLDMPLC58AGOqUBLSZcVreJotE1cH0sKYgOMV6AUFbKks1RnXzcLrMpSghW%2FSgvipAQ2sF3wGg3sTn1aK%2F1ixPqPe6vGXO1UrFe0g9OBhE9vp955ZIx8OgVUa3ScqYrPm1ZnJkXTqq08E8uoGkEW36amwA%2BHLUGVGoKHnEk9nADggDAkQQTNAC7FuakRgrC1TUMu7%2Fd5ZN3RvXRvpURDvyPAtPwm1JR%2Fm16F2UNAcuA&X-Amz-Signature=c283e844cd648e0265c79def325d2a9b7df0eeb3666ce2d483f2c179dc39a168&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMCZNMDK%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T110726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC05sZC7EmKdAuytP0t%2BCuHK9YOJoKWltPyLyakkU0E%2FgIgeN9xTVAwADzMyt6qdNXLjQIBIuCBGGOj1Bf5FQ5MsIIq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDCqHPWd7Vs9hCzwhPyrcA9A9gevFIC2X5258lhC2u%2BJPbsAHvLhTqaxFmuidZjgFKNEoWaGca2yQ1SOMIZqTrYHt%2Fh%2FxWO5RATdjzGOlg7hF5MncOeYJrf4W2MnEIOMbIHhXGyRlCsWdlK50fbVDSblwEv%2BjuK2IhpibxLw4co37I%2FT5%2BpsXslXHpMEto1kB7rhM63%2BNS7Hw04puapJ6rJrTVdZEcYeF%2FR7nJupkCEAW73njsvkENOOgCJis9SKHMYeMLVYlc%2Fr4Hpxps8uXJsAqyo4UVOOqdWN21cNrENVzLVDs8vPI6ehzfiyxmpcG4EY%2FQHyYBAGufqke%2FG5WsAW5pgcbsnOTa%2FqWtDVlcNU2oitdOoaa0UnWyzp0OrDGZrNRsrmu8CxwXmG%2Bcnxc4n%2F8Uqxkk6wbwzPY8ztVFyp4HI%2FCVjDn50gZRF3Cu2kalNrOqujahbZiNhTvFoqQDAkTXQqVff%2BihC3AWBCEgLgmx13FsrgSnJH3SGgInw2GGU%2BknvKFPcCSHJir7CCRxQqBtsLq%2FHY4xlmIzoz%2Bryro2EaWbXRXCDMs4e5QEKAF8jiqDAGiC%2B9CB14di0Br9J9YQdupUdEdppvnzfFEKO1kq0jXcX3Khb8IGQ0mqXmsm1FB7TXSdlEnkHLDMPLC58AGOqUBLSZcVreJotE1cH0sKYgOMV6AUFbKks1RnXzcLrMpSghW%2FSgvipAQ2sF3wGg3sTn1aK%2F1ixPqPe6vGXO1UrFe0g9OBhE9vp955ZIx8OgVUa3ScqYrPm1ZnJkXTqq08E8uoGkEW36amwA%2BHLUGVGoKHnEk9nADggDAkQQTNAC7FuakRgrC1TUMu7%2Fd5ZN3RvXRvpURDvyPAtPwm1JR%2Fm16F2UNAcuA&X-Amz-Signature=59021d2866d4ba976c3871abb7a45cd88876037a6f591aae7eed3a3d23b0005d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMCZNMDK%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T110726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC05sZC7EmKdAuytP0t%2BCuHK9YOJoKWltPyLyakkU0E%2FgIgeN9xTVAwADzMyt6qdNXLjQIBIuCBGGOj1Bf5FQ5MsIIq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDCqHPWd7Vs9hCzwhPyrcA9A9gevFIC2X5258lhC2u%2BJPbsAHvLhTqaxFmuidZjgFKNEoWaGca2yQ1SOMIZqTrYHt%2Fh%2FxWO5RATdjzGOlg7hF5MncOeYJrf4W2MnEIOMbIHhXGyRlCsWdlK50fbVDSblwEv%2BjuK2IhpibxLw4co37I%2FT5%2BpsXslXHpMEto1kB7rhM63%2BNS7Hw04puapJ6rJrTVdZEcYeF%2FR7nJupkCEAW73njsvkENOOgCJis9SKHMYeMLVYlc%2Fr4Hpxps8uXJsAqyo4UVOOqdWN21cNrENVzLVDs8vPI6ehzfiyxmpcG4EY%2FQHyYBAGufqke%2FG5WsAW5pgcbsnOTa%2FqWtDVlcNU2oitdOoaa0UnWyzp0OrDGZrNRsrmu8CxwXmG%2Bcnxc4n%2F8Uqxkk6wbwzPY8ztVFyp4HI%2FCVjDn50gZRF3Cu2kalNrOqujahbZiNhTvFoqQDAkTXQqVff%2BihC3AWBCEgLgmx13FsrgSnJH3SGgInw2GGU%2BknvKFPcCSHJir7CCRxQqBtsLq%2FHY4xlmIzoz%2Bryro2EaWbXRXCDMs4e5QEKAF8jiqDAGiC%2B9CB14di0Br9J9YQdupUdEdppvnzfFEKO1kq0jXcX3Khb8IGQ0mqXmsm1FB7TXSdlEnkHLDMPLC58AGOqUBLSZcVreJotE1cH0sKYgOMV6AUFbKks1RnXzcLrMpSghW%2FSgvipAQ2sF3wGg3sTn1aK%2F1ixPqPe6vGXO1UrFe0g9OBhE9vp955ZIx8OgVUa3ScqYrPm1ZnJkXTqq08E8uoGkEW36amwA%2BHLUGVGoKHnEk9nADggDAkQQTNAC7FuakRgrC1TUMu7%2Fd5ZN3RvXRvpURDvyPAtPwm1JR%2Fm16F2UNAcuA&X-Amz-Signature=b41dfc67048fed36c9d2f3d2b8f2b51a34e12908c9ebd390461e87748a3381e9&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EX56FCU%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8E9AKoElnE3eYuMha63wCPmVGKk%2FYQsLCnHLsl52bmAiEAut5%2ByTkGcCLBZnfwn97ta42VoukduBjDivaYJdk2%2FHUq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDAuB28F1CzNiLF450yrcAxbkoBsKT9J4fIh5WMZWNTii10gxu4zdjYXdRHthlvt4jyaHf3fCduDKK40j8kVqJbletQk0uLQHjzsm2B0SRLiWq9gDSIBL0GSdQS%2BkpjgBSl3NTE3Qh05u%2FOEz8FLhhG1TxZM4In2BOUgx%2BUrgoj8AXzzRN0q%2BFtFfSsS3jqRgFvsP3qsZgtfBMEJceN%2BG3MGLmvLiDKEdpUTaPi%2BLvqUaIvC%2FDfZeV%2Fy1dZdSh89cuJlkWc0qUQDGqfToTpUK2%2B0JgkJcW7EQLUby4BcnpEK5UTQeM%2FwzSG1iXL3ezrYXTgqBXQC0R%2FKD22348wLsjQn%2FHnbSLYqJQuksH79JFcistME9tpHwNnssW4GdO94qU%2FZdshoK0brPnST%2BH2bK36JXUjiw4hNlBbAOlPU3aGHqW%2FZxA%2Bb5QbSI7oYw4l8eflJF0AABK4TonPiephiOvq1RNiorkp9D8T%2FS65nl7i1hkK76UyO5WnwxWR%2BK7gQaJGrsrMjVsxhAM6ddgieplcUaj02b6Iqk6%2B5jbRbG%2BCT1%2FG%2FzbpGniXQhDdufX97TiAUdPrsb88FKjnNiMZL2NWSwEgbI0F8WzH0s6EcCL9JjoZnNK5aDTqXSqnhLQQjhjJO%2FF7KKQamZ0p7uMOrV58AGOqUBmTQyLqYwARqtlabPqUqHnJARSt2ZlHoizxLrkk3GdjwZv2jC2Hou3lQU4eeSEpdQd82fWt2TSCdMS8jWMAX1eqwgZ7X3UhZgJRkMbeu9Ps8v4Nc%2BPsM0Mm4H%2Fg7GcpetqfceeSVsg1I5IZm8AfGGUKz%2B9jNTAkbAvrZjBv9C8eLR4rMdm%2Fpcf3OhE6uSkQPJH3pnEPUp0pkQe1T9LeXBOkSFSwc0&X-Amz-Signature=e470e4e6b479094647a0c2b82c6c9c793140d38787c2b8334cbf9a176b5013ce&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GNFZRCZ%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BEojLt1kxrSHS5FgetOXbOb%2FW6kioCLsikmGquzN5fQIhAKkB22tHZGpXXa5Xu80hMvoYin8NUvhtpeOF8zHq2yFzKv8DCEMQABoMNjM3NDIzMTgzODA1IgxdiL9iDvu%2BLhSfUhkq3ANEatR2WcSUYevXSCEJr2j5%2BR4rXp3jYh1rfPi%2BNZMrzyIKyvThRh3oALwpncL2JnnIblgB7VuCG6K4NvKKhhwG3zQahWX17e4AuyYkurRjdSW60pi6a9XzX5tzqtZgNKXQ48g9MnAeDYZT2%2FYQpSWkigybRSoZCwYl771AWfXDxUob845UBdGrcgJBkYtQQcBdUNMxaSyIAcyWVLL3%2BLimjJauF7lcumYnFs%2F4Dh88i8Kt0KbMPAjQrLC3b782Is0bDn3SfLIoY18KPdFBu0XvbmJhy2OkWAUcKo1xKDtAvS2K32ZvRC1662hYESc5vFZ0ybafCjmQZqwSPUj6xJedoOxG2pgldOC8nL%2Bz7dTBTlLnCELvL%2BMc5BAYpjpsmfBoQINqDGFkQ4lyVbyn%2BZiMU9rhh8PhbM%2BWJoOcHT%2BQcX0y%2F7ARpEFZ1ESFFupPBqcEKJKxqZ0N6FtGcp3e3JONJopoXNWub%2BreeaoowfFTogecniIUHsfyC%2FiHO2qvTFXwogndrNb0ufZhLLh4I4ZQeRKHHoudRF05w6sb4YHEyKZVPv5vY75hSn6RZqVpfYr2Vpavqti736ZmsbtnCQLn9%2FWlKTfZfBfqWzNvQkvM2gwmKxNLVjM%2FS18qETDQwufABjqkAdapYRDAK9vZptY%2BpWhJ1m%2BB21rDojzYA37N7IymWcYJanF%2BIe46Q8j50cS0%2F74QCMhvf%2BTLwAUUp0PHBrc%2FhdJz1MZ82X3BOhqSnIDuZ3%2FWfsctCkq8%2B%2BIrHoxKIrLhKB9R9iFsfAgS6D0QOxIZ6I0BLhD6u1fYeNIqKf4Ds3ut3hQBD%2BJ%2BC%2B8FWhpy5f8oanfe3SXl8hrUCiNGyppc5oJcfXAw&X-Amz-Signature=eaadb7f9d3498430ff662d81d4a460d4a3325177834cfb67534a1f89d6b5bbd5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMCZNMDK%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T110726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC05sZC7EmKdAuytP0t%2BCuHK9YOJoKWltPyLyakkU0E%2FgIgeN9xTVAwADzMyt6qdNXLjQIBIuCBGGOj1Bf5FQ5MsIIq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDCqHPWd7Vs9hCzwhPyrcA9A9gevFIC2X5258lhC2u%2BJPbsAHvLhTqaxFmuidZjgFKNEoWaGca2yQ1SOMIZqTrYHt%2Fh%2FxWO5RATdjzGOlg7hF5MncOeYJrf4W2MnEIOMbIHhXGyRlCsWdlK50fbVDSblwEv%2BjuK2IhpibxLw4co37I%2FT5%2BpsXslXHpMEto1kB7rhM63%2BNS7Hw04puapJ6rJrTVdZEcYeF%2FR7nJupkCEAW73njsvkENOOgCJis9SKHMYeMLVYlc%2Fr4Hpxps8uXJsAqyo4UVOOqdWN21cNrENVzLVDs8vPI6ehzfiyxmpcG4EY%2FQHyYBAGufqke%2FG5WsAW5pgcbsnOTa%2FqWtDVlcNU2oitdOoaa0UnWyzp0OrDGZrNRsrmu8CxwXmG%2Bcnxc4n%2F8Uqxkk6wbwzPY8ztVFyp4HI%2FCVjDn50gZRF3Cu2kalNrOqujahbZiNhTvFoqQDAkTXQqVff%2BihC3AWBCEgLgmx13FsrgSnJH3SGgInw2GGU%2BknvKFPcCSHJir7CCRxQqBtsLq%2FHY4xlmIzoz%2Bryro2EaWbXRXCDMs4e5QEKAF8jiqDAGiC%2B9CB14di0Br9J9YQdupUdEdppvnzfFEKO1kq0jXcX3Khb8IGQ0mqXmsm1FB7TXSdlEnkHLDMPLC58AGOqUBLSZcVreJotE1cH0sKYgOMV6AUFbKks1RnXzcLrMpSghW%2FSgvipAQ2sF3wGg3sTn1aK%2F1ixPqPe6vGXO1UrFe0g9OBhE9vp955ZIx8OgVUa3ScqYrPm1ZnJkXTqq08E8uoGkEW36amwA%2BHLUGVGoKHnEk9nADggDAkQQTNAC7FuakRgrC1TUMu7%2Fd5ZN3RvXRvpURDvyPAtPwm1JR%2Fm16F2UNAcuA&X-Amz-Signature=e95d98fd93193f272fe93bbec1c117efdc0f69ef7aae2dcb3860a0b6e221709e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
