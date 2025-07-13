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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDU3IH5C%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T042730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxptfTrRuHRymQkLsbS9CwZFwRITUKEz3LVo20ckFGywIgaqyQE4y0thD%2Bo%2By4ufumRu8hZGJhQGDit1ml7Gfb%2BewqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEpgJdIa9x5JZzbCYSrcAwJQ3sWLMCl7T5rVa7gEGie8PITaYU22mMHAWnQG3GyCgRL5z73cPCn8b4jBhrwE8OsZchWBCcffjB4%2FUiJXSprc6qwleeSF96Udn2Z4FFkwxLzWwdVswBwrmUeW8wcC6cWKBLDHMMNNpYJDkleX1YjwLtrhErL4XfAcBfxWH4kTLgkUSEDQWPqdc0aE9WtVkpnzI7bNQ4xsTnKO6YnEYLHxN%2B%2FKCsFpJ5mesPEsmCqme2GcfA4lrmDEb6oVw1P3wwwIqVwuydbxH3WdKOaH7weOdqkHR06mrq10HBOKmjj77dN8xdMDrc9n4NwW6Rw4kMfWS%2BJIUygw9ji9fLMxH8oDlZQfocokglnwJ3jlqvoS3Olfib1J6C2qsEs4aysdPMTLcHMjEqO862ksA2hiuO9KtTiYqHC%2BIkEGoDZAJCMa5JSwBUoQ1dbxmlYC9eAotRUX7fCACfFSdoefj%2BdnLr2jDAKffAZSz2rF35UBA7nwJyY759qBL8o1h25oF31WKeke5WzkWIhLH%2BGEfIzesk770J3ZGqW23KSxh48vOFMdm4ACntHtIaKWy%2FU29bQLTHuAJ4jasNB4v9bKBFzPJhD%2F8q%2BZkV6JPVERmHIpbc33aYnwJA0TZhnQMESIML3ZzMMGOqUBgQE5Pr5jbHMzC3YWItX8VGzUeFNwDKCVGxQLCdrPQ4SWM42vXISgXTuxW9rk5ML6W%2FeQPQ3NT%2F3CcXFnr8KspWp5Oi7AS%2BBlCiEZlFn4xzbmoN54mKMyxNL9G3DKhSKUlUkJU8pecZUErsvPtjlDmvlyuehuq5KuNIwS92yx3Qq9kWcn059ctDI%2BFiFHHizJUPhj4DErmM3GGyyjXIUPtIFewEsN&X-Amz-Signature=7304a7144d612c350e67834d55e7f0d8b3aa1a39e27b9c17ac99d45891f10b13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDU3IH5C%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T042730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxptfTrRuHRymQkLsbS9CwZFwRITUKEz3LVo20ckFGywIgaqyQE4y0thD%2Bo%2By4ufumRu8hZGJhQGDit1ml7Gfb%2BewqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEpgJdIa9x5JZzbCYSrcAwJQ3sWLMCl7T5rVa7gEGie8PITaYU22mMHAWnQG3GyCgRL5z73cPCn8b4jBhrwE8OsZchWBCcffjB4%2FUiJXSprc6qwleeSF96Udn2Z4FFkwxLzWwdVswBwrmUeW8wcC6cWKBLDHMMNNpYJDkleX1YjwLtrhErL4XfAcBfxWH4kTLgkUSEDQWPqdc0aE9WtVkpnzI7bNQ4xsTnKO6YnEYLHxN%2B%2FKCsFpJ5mesPEsmCqme2GcfA4lrmDEb6oVw1P3wwwIqVwuydbxH3WdKOaH7weOdqkHR06mrq10HBOKmjj77dN8xdMDrc9n4NwW6Rw4kMfWS%2BJIUygw9ji9fLMxH8oDlZQfocokglnwJ3jlqvoS3Olfib1J6C2qsEs4aysdPMTLcHMjEqO862ksA2hiuO9KtTiYqHC%2BIkEGoDZAJCMa5JSwBUoQ1dbxmlYC9eAotRUX7fCACfFSdoefj%2BdnLr2jDAKffAZSz2rF35UBA7nwJyY759qBL8o1h25oF31WKeke5WzkWIhLH%2BGEfIzesk770J3ZGqW23KSxh48vOFMdm4ACntHtIaKWy%2FU29bQLTHuAJ4jasNB4v9bKBFzPJhD%2F8q%2BZkV6JPVERmHIpbc33aYnwJA0TZhnQMESIML3ZzMMGOqUBgQE5Pr5jbHMzC3YWItX8VGzUeFNwDKCVGxQLCdrPQ4SWM42vXISgXTuxW9rk5ML6W%2FeQPQ3NT%2F3CcXFnr8KspWp5Oi7AS%2BBlCiEZlFn4xzbmoN54mKMyxNL9G3DKhSKUlUkJU8pecZUErsvPtjlDmvlyuehuq5KuNIwS92yx3Qq9kWcn059ctDI%2BFiFHHizJUPhj4DErmM3GGyyjXIUPtIFewEsN&X-Amz-Signature=88b94b105130e7b8c2736720a13fa943cb4b584abe9cf91caf85315071479df8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDU3IH5C%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T042730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxptfTrRuHRymQkLsbS9CwZFwRITUKEz3LVo20ckFGywIgaqyQE4y0thD%2Bo%2By4ufumRu8hZGJhQGDit1ml7Gfb%2BewqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEpgJdIa9x5JZzbCYSrcAwJQ3sWLMCl7T5rVa7gEGie8PITaYU22mMHAWnQG3GyCgRL5z73cPCn8b4jBhrwE8OsZchWBCcffjB4%2FUiJXSprc6qwleeSF96Udn2Z4FFkwxLzWwdVswBwrmUeW8wcC6cWKBLDHMMNNpYJDkleX1YjwLtrhErL4XfAcBfxWH4kTLgkUSEDQWPqdc0aE9WtVkpnzI7bNQ4xsTnKO6YnEYLHxN%2B%2FKCsFpJ5mesPEsmCqme2GcfA4lrmDEb6oVw1P3wwwIqVwuydbxH3WdKOaH7weOdqkHR06mrq10HBOKmjj77dN8xdMDrc9n4NwW6Rw4kMfWS%2BJIUygw9ji9fLMxH8oDlZQfocokglnwJ3jlqvoS3Olfib1J6C2qsEs4aysdPMTLcHMjEqO862ksA2hiuO9KtTiYqHC%2BIkEGoDZAJCMa5JSwBUoQ1dbxmlYC9eAotRUX7fCACfFSdoefj%2BdnLr2jDAKffAZSz2rF35UBA7nwJyY759qBL8o1h25oF31WKeke5WzkWIhLH%2BGEfIzesk770J3ZGqW23KSxh48vOFMdm4ACntHtIaKWy%2FU29bQLTHuAJ4jasNB4v9bKBFzPJhD%2F8q%2BZkV6JPVERmHIpbc33aYnwJA0TZhnQMESIML3ZzMMGOqUBgQE5Pr5jbHMzC3YWItX8VGzUeFNwDKCVGxQLCdrPQ4SWM42vXISgXTuxW9rk5ML6W%2FeQPQ3NT%2F3CcXFnr8KspWp5Oi7AS%2BBlCiEZlFn4xzbmoN54mKMyxNL9G3DKhSKUlUkJU8pecZUErsvPtjlDmvlyuehuq5KuNIwS92yx3Qq9kWcn059ctDI%2BFiFHHizJUPhj4DErmM3GGyyjXIUPtIFewEsN&X-Amz-Signature=3459ad2634b7ae4394a634ba4af55661d7aa4842fafe7b61961205a2311a1362&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM4LSN6W%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T042732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdlctQsD8FtTaK%2BfR0WTduwVCM%2FlOTDHBXLIyaLv0XQAiBuzrotR965Ui406dm5lExXe%2FRuvmUr2TC4rQl8L9PgESqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FemCbtOuAv%2BWnoYgKtwD%2F0WclEg%2FTDebCs1nR2q9zXyNnPZzwWcCCC9IEzg4fiL%2FYbJTLnJ9lM1jZOcjNZwoSVNwturuIHx%2BRMAJEB2VWk43VcWaUKwINsEsbEvEXDqhwjD%2FhbICyhAZ7fCQ%2BJMteU9k1pD3uQOI%2BZLMWXXrokeuAHrbA7g9GFUOYaUzGdaYohgbcq0rZfiiLkYoJgiStpJQ3SZoQPU92dLstn1BfSJoyOBdrzkiehnVyxpV5m%2FcYZr2AJC0tu70Ov1WKwb5f%2FY9F329cSnVaBlpRvzuOKGBCPmJtVw%2BSb%2BDl7%2BvespUlpEOq7%2FBTaNUnKzDabhPcyWjAycsvi9FIb3f3jL0Ri8bQjESHbUrDGPuc8%2FtipWE2tyJDAOlFV%2Blq4Sd7C2DKpnzYacHlBmSTOPwBEDRw%2F63mF82sGwXcJ47Dwu%2Fo6V4Fd52FInkFVjuGaH7H1bUELb68QDF%2FTPSCEc0m%2FsqvOg7G50mqd9FnOYJoGjRkt2ZHfBrOVOQwrP6ZEAiaeuM3PjdvRTGMptjZfttdItSfI6HQsPDyvh6uMSDeI3il5P%2BrA68udW12QCibbULOyaGHZ1FV0uv30VpoftpAUWziTjo%2Bj9LyuSqwFnASxxCL5gbVxE6xpzd6ObhQtIwidnMwwY6pgGx6rSwTv3SoB8ATQ0uagZC4AZ6v3Nkm%2FaMZCTGNB%2B%2BiqSix%2BmzF6AWqgAVJeWBMA6L07UE4gX9oRWc7Wo880uwajpodAlVv%2FDIT%2Bde1gO%2FRII%2FlXYeBUrqY8Gi3hxMqcmlRIoBF2kkOljk0rWqe%2FRMtAWOwIAns7NW6Yu3fGn%2Fyl5b%2BlzW%2BP935YXdJC7WcJoB6g2ZkzPNzrN6FHAVglPR7cBRGjez&X-Amz-Signature=8566201ffbaec8536a152975c5ddd272703ca78b3210c29b206c0216285f3713&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NJXOV3I%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T042732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyZkc3m3AXI7ki7fWBHmjKEymH7OpZCE%2BpKxeVYrrx8AIhANJqKAVmIIljGGB%2Buto1pqN%2Bl2B94k2%2Bqs2QTU%2FE0S3TKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkWNTD1bHWdTguFJYq3AP9fd%2BR%2BBGUtAQlAgNICkrUBw7uUeeRCInKxf8GDnUJIZod48Fp%2FoQHBVHfqRnP52QjEqeye7Os%2BTDCexyNZhnKAdRh7Z%2FVIbCoDoeirmDaZydEoF%2Fcd4L0IRue8tjHRz7C%2F5418WKP5JkgIWEoyNDymrO5MUSR9GdcrAScc4WzJHNTyaznH%2BS3xAeSZs4DWgZ3JxO9gDiYsZjeJBNsFwNGvfmD0sR8BKn3cMmc1fjduGtNvR7Id%2F9WcCRSm%2FcQKJm7PY5Tbvm4NVlLGsv1r5xaxr%2FqZEY7Gum3ZDsBMC8DnNPNor3JVdM5sOCKOIAWHWTsArh%2BDrGFIO5TMAsil3UgbyXqNkxUQ0xs7ldRTs96z3LJKg%2FKqzgrQStDKXZIJFL%2Bv7kt8AvWITGSurqtu6G%2F%2BDBAsQ7k%2FprYJkIX%2Fm0DFTaEVrvxWkgsRrypU9eFcipCSVtLOA0XkuT67RzQE0ED8rCcBRZPdlA20f2SX3fZUP9%2BxoxLOmtl%2FsfpzhpAS3JljBkoVHF9jwRF4Wax%2Fr0hEgmNq8KfuAe%2FHJKSyEaAxgZYKNXwl8OVidXevUFH5k2XAwXRb5%2BdsNAKZ%2Fiylo372Odu3dKN14lLs7wVs%2BM%2Fih%2BNqkEsr0RJlVk%2F4jCI2czDBjqkAYxuyw4iqAbR5FzLLU9i7cn7Yd1tDf8%2BiTfNzfVJB2wPEp1MNDeWXS4LS%2Fc4fQvKUdlJD2uAjN99d05s2AoivBU5noHgY01nDW9YOz0vB4d6m%2FrNOYs2RrUa9rwbH5koVJcZoARusfTOJHrpHXbR1aHgmQ0relN%2BatiGi8EXVJ76IG44AgPm%2BmZ%2BG9RchiB0rNLcf2iZoWyaP9ShwBqMKb2mrlS4&X-Amz-Signature=40939097c153c96fbc2a15f17553c823fdd171439bde6fd292c1cb8f3c9f97ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDU3IH5C%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T042730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxptfTrRuHRymQkLsbS9CwZFwRITUKEz3LVo20ckFGywIgaqyQE4y0thD%2Bo%2By4ufumRu8hZGJhQGDit1ml7Gfb%2BewqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEpgJdIa9x5JZzbCYSrcAwJQ3sWLMCl7T5rVa7gEGie8PITaYU22mMHAWnQG3GyCgRL5z73cPCn8b4jBhrwE8OsZchWBCcffjB4%2FUiJXSprc6qwleeSF96Udn2Z4FFkwxLzWwdVswBwrmUeW8wcC6cWKBLDHMMNNpYJDkleX1YjwLtrhErL4XfAcBfxWH4kTLgkUSEDQWPqdc0aE9WtVkpnzI7bNQ4xsTnKO6YnEYLHxN%2B%2FKCsFpJ5mesPEsmCqme2GcfA4lrmDEb6oVw1P3wwwIqVwuydbxH3WdKOaH7weOdqkHR06mrq10HBOKmjj77dN8xdMDrc9n4NwW6Rw4kMfWS%2BJIUygw9ji9fLMxH8oDlZQfocokglnwJ3jlqvoS3Olfib1J6C2qsEs4aysdPMTLcHMjEqO862ksA2hiuO9KtTiYqHC%2BIkEGoDZAJCMa5JSwBUoQ1dbxmlYC9eAotRUX7fCACfFSdoefj%2BdnLr2jDAKffAZSz2rF35UBA7nwJyY759qBL8o1h25oF31WKeke5WzkWIhLH%2BGEfIzesk770J3ZGqW23KSxh48vOFMdm4ACntHtIaKWy%2FU29bQLTHuAJ4jasNB4v9bKBFzPJhD%2F8q%2BZkV6JPVERmHIpbc33aYnwJA0TZhnQMESIML3ZzMMGOqUBgQE5Pr5jbHMzC3YWItX8VGzUeFNwDKCVGxQLCdrPQ4SWM42vXISgXTuxW9rk5ML6W%2FeQPQ3NT%2F3CcXFnr8KspWp5Oi7AS%2BBlCiEZlFn4xzbmoN54mKMyxNL9G3DKhSKUlUkJU8pecZUErsvPtjlDmvlyuehuq5KuNIwS92yx3Qq9kWcn059ctDI%2BFiFHHizJUPhj4DErmM3GGyyjXIUPtIFewEsN&X-Amz-Signature=785a75c7b6f0167143b4305b385e764d6fdfd5d2a8c22d33dcf3e51887154d58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
