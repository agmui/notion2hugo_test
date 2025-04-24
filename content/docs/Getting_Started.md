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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUYQEQOX%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T033051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCICDR5yawnZx0pvuxe3anItupZhzWkvX3iW%2FM%2BKAIBQoQAiASZZiiTG9voWbqZA5TvaBg1ATly%2F16RVhijzM3LPWgbiqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0w28tmm1id%2Fy2gL5KtwDxR4ItkYO%2BW00vAPqDwtJu9ReeIunJmZAc8FH0lvh1%2Bfmf1TzrD0vkrlcn2CovJ6wkRf56Io66UpyVgSKioeO03TfNR0eb6uNy39EAqWMWCadsDoWkT5Hs7P6kEeOw3EHDAxTwVUJgYi48qBrRrYNTtA3pHaN8E7%2FsBYkpWCqJbYEW7eVuU%2FkN3P2mMVkOlSk%2FqOq7uJgo53J1ozrIw8gac0OitspvGwSNcCVoV2wy12We3j5hKo2q1ypYi3C8X5FzYFhCiuPky%2FEpQO%2BqtzK0uTsJYAlMq8tV4Ko0MuiHS1997LAlLD9NAlTzRpE8%2BY35A73rDblU4vaNyIBQn7X%2FEDD2CNyMeYBh%2FiwOjbaBiQZKNJqgJJ8ienwhl8Pt0zrxkEL2q9KYGth21SGBsVvQypoVSN1XllFiFmz6BbwRtW8vrBYyB8NmwI7NBESqrDro0DqBJeHOLYB3LhfFQYAY7%2F2w0L4XZ7yfDRnpHna4PfSFcLa1gLnMPjk%2FBsI1yZumCB2tnGHOF9GMBAcH%2BAeVoQw5nDuQ%2F7elKJyHDoRrTpl4Oi%2B3U6jLbukXkE9WYt1iTQ3NJRml2cq2WQD%2FbwMxHGVN%2BFy8CLRlQaqEVRzhGxkQUMZ%2FKIF4FaXr%2Bwwu8ymwAY6pgFXzNwOATTGGKtUR3jxfoHv10I0pCur%2FPE3EUn1EkZ44ByB%2FZP6uIE%2BZpD1vvZjEFMPRFN12YKyVpFT%2FAu0KNH3JrT6Tl5%2FsmGkPb0DFkYSu3Pb84n4RUrEveJlc6IdVXKu9wHg9bQit0E7c%2B5ufjVKFuTULCo6uKSQMjY5AzV3aMThGpQtYugvUFaBbrPxsaEb4w95ouLKQHiyS%2FuZ606rqqhfWyfA&X-Amz-Signature=7c7c0084cb55f867055c6a7902ec33ac75c3d2b8a39501cfba0ef05ed809f39a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUYQEQOX%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T033051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCICDR5yawnZx0pvuxe3anItupZhzWkvX3iW%2FM%2BKAIBQoQAiASZZiiTG9voWbqZA5TvaBg1ATly%2F16RVhijzM3LPWgbiqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0w28tmm1id%2Fy2gL5KtwDxR4ItkYO%2BW00vAPqDwtJu9ReeIunJmZAc8FH0lvh1%2Bfmf1TzrD0vkrlcn2CovJ6wkRf56Io66UpyVgSKioeO03TfNR0eb6uNy39EAqWMWCadsDoWkT5Hs7P6kEeOw3EHDAxTwVUJgYi48qBrRrYNTtA3pHaN8E7%2FsBYkpWCqJbYEW7eVuU%2FkN3P2mMVkOlSk%2FqOq7uJgo53J1ozrIw8gac0OitspvGwSNcCVoV2wy12We3j5hKo2q1ypYi3C8X5FzYFhCiuPky%2FEpQO%2BqtzK0uTsJYAlMq8tV4Ko0MuiHS1997LAlLD9NAlTzRpE8%2BY35A73rDblU4vaNyIBQn7X%2FEDD2CNyMeYBh%2FiwOjbaBiQZKNJqgJJ8ienwhl8Pt0zrxkEL2q9KYGth21SGBsVvQypoVSN1XllFiFmz6BbwRtW8vrBYyB8NmwI7NBESqrDro0DqBJeHOLYB3LhfFQYAY7%2F2w0L4XZ7yfDRnpHna4PfSFcLa1gLnMPjk%2FBsI1yZumCB2tnGHOF9GMBAcH%2BAeVoQw5nDuQ%2F7elKJyHDoRrTpl4Oi%2B3U6jLbukXkE9WYt1iTQ3NJRml2cq2WQD%2FbwMxHGVN%2BFy8CLRlQaqEVRzhGxkQUMZ%2FKIF4FaXr%2Bwwu8ymwAY6pgFXzNwOATTGGKtUR3jxfoHv10I0pCur%2FPE3EUn1EkZ44ByB%2FZP6uIE%2BZpD1vvZjEFMPRFN12YKyVpFT%2FAu0KNH3JrT6Tl5%2FsmGkPb0DFkYSu3Pb84n4RUrEveJlc6IdVXKu9wHg9bQit0E7c%2B5ufjVKFuTULCo6uKSQMjY5AzV3aMThGpQtYugvUFaBbrPxsaEb4w95ouLKQHiyS%2FuZ606rqqhfWyfA&X-Amz-Signature=238c1ba98b52fca4e5fb72eef545f5ead6bbb291a2fbb8a631b06d9246e75e77&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZYYFLFI%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T033109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIBnWMp77bbcPMZ33EXeVDMRsZ8TbR5Ki%2FV8FQvbd68SwAiEA%2BB4JMY6ANlEKWtVoONkCp%2BMzOyHfTil%2FTVpGwclJtr4qiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8DkfN6v1WC5eXF9CrcAwn74i9aNwgVN3RBF8ZFk91QFkAETqBl4qfYEdx9uM6AvdfcocTBeQQRxtg7pqLQALCHAjl9gPpQwp0eiaaIJQ8KBNRoLLokg9CRtnbkSOAPT6JEf4VxSohVGDKhoJ3WsYNGVtMRW5RqZKcLuV2YGqyJ8TKMpBEGKCvcvyT0PU9J7LdZfx8j8aG%2F3gvKD03Tu6ycQ9Ig8CRWJQ42jsLbCbpYSyxr09vFjXESxqiw83TK3Dmp16XSI0K27oaaD0sn0rhyj1gPcffOzBtqgleNAfVSm9JL%2F2CkiCbkqCcegIhBEzTvllsTMiqqM2U5HR7UZdiFN6zFb1L4sUWvkBmHxkAkdTuAMcn846uUr8DrZQ%2BKBaYH9LHKVdh1Sf8SVClv51qXc6XJc2uPVcLhkN6tUshTsK6y0klY%2FDCUOI9ULLGPDzpeKMOJ%2BqsXeuIY7lu26wpe6IDNVNHZA1yCQtUoIDQ4Ok9mTGSeW1MC1jsgb86hCV8yHJViWcplT%2BzWbqjOY59AG0DygHZLB2egI02MWeXE%2B128wtTxEF8%2FOUnNKONR37IprDYHkN%2FJNijhZopKZAjerEUGbwYR86rlqExZYShc46zMAelObVqlLtIBh7nZtDBlb7RMGVXYNBBAMJjMpsAGOqUBwzy2QMu9nfFxGHfgJB7%2Ba0MnFRGOmNHhXkrSmIIHncGrnWlpP5%2FqBJEvR6m80ccGH1JDFiXLtt7NOiyRMdySkpbYjOCvl%2BYhGg3kMXzdarH12uSzQYyisr4LXlPxDbiv7RJD41YHz6%2BS4AHQsEQBNflunfJyQR7IKbRJF8YSLNIlWtR5Qh3vQ0oklviykG3p1VcGVh4bspJJpl0xVxCh2Q61hs7C&X-Amz-Signature=d9cb13ef7cec674716c05977b070e3a6d692ffb604e146af296681bfccd27f67&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642PLAC45%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T033110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIHhQfCnDEw6MqI1F5J3dd72%2BfJw1JCsHkOkbFqiZ1v8FAiBLLqt9hPDSfhvkpwh2pmjHHn8Qmons%2BYY8A%2BXCbW0MSSqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BbQKwNRBM3zcuMf%2BKtwDPm3dtLlJq%2B6w%2FSDzGVjtmoxvLctbXWGFP6IcqLnO35mO6YA%2B3fNYl3rJP2WPYPqOAOnlzbpyFDnTlus845VTMN3GrC9aQtjBDwf5JlkuF2NMfWNVcT8UoKLrY7eazuYU3gk1gPPzbjlNWWwnvbDY4dVVVhnlK%2FA%2FS2la1QCwOnOn9e61Gzhlj5LziDVEESiBxQ5rao7Z7LpNZWfrLKFyGTlwzSSHldoa0GVa8HmK8tCsZDJQlvc6OrBXGw9n6coDBsWrSdpo1ngw3UZINZjDGhF38yP5J%2FJAAX4biEWDPnenFPdZBk%2Bs84rwUVbcfmlJPPBd9RO4isjkVybdlQKkeiu1RNUBN1oFVLKADU881BOJ0nsh7JIRWJKz75ilJ%2FD%2F7Jm0eV2JYHw2xMKFwV7Z0ocLJanbQz7Ps8ngpOTWS0gdV3JTKolYPZT0Tr6UUIb%2B2YHXalheP%2BBE39D%2FzGaqjr5fB4NuQV%2FeR8K4hJs0c2XJobmtnULGoUBpxocv6U3T8Y98j1v0e8cXYcr8CJ49ewFxEQ0iOdh13DCxDWOsuAnGaq6oOM5jpalW5mSvYBWCjUqZ0V4vn%2BlVBkZ6qaneRm0Dp2tmT4YvMyeE2xhk%2FgKGRczh4bCoeXdQUsUw88umwAY6pgHQa86kQc%2FbJMp9cZy6%2BaPrYnurfZWTwWQ%2BI3J8sNyBRDCFC2hb2eGgs5AtymnE4QL5bdw6s8w9BYhUalcH0dYkG5a00HPvv1DNfd7Zw0Xyf%2BEiO%2FTEggy5xF8IWgqiK%2B97VBY91DCdmQ4slrCgqZRxnFLnNj8%2F%2BtP0aAPY6df4GuQQgO9DSrOF9qCbNIOd6nRJ%2F%2BfnunlLS1KZr0Xt2O%2Ba25Cx89hB&X-Amz-Signature=6c150fed2f4403389fdee488edc1d7e1442c4b1261133f3f4516184c60c8fa35&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUYQEQOX%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T033051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCICDR5yawnZx0pvuxe3anItupZhzWkvX3iW%2FM%2BKAIBQoQAiASZZiiTG9voWbqZA5TvaBg1ATly%2F16RVhijzM3LPWgbiqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0w28tmm1id%2Fy2gL5KtwDxR4ItkYO%2BW00vAPqDwtJu9ReeIunJmZAc8FH0lvh1%2Bfmf1TzrD0vkrlcn2CovJ6wkRf56Io66UpyVgSKioeO03TfNR0eb6uNy39EAqWMWCadsDoWkT5Hs7P6kEeOw3EHDAxTwVUJgYi48qBrRrYNTtA3pHaN8E7%2FsBYkpWCqJbYEW7eVuU%2FkN3P2mMVkOlSk%2FqOq7uJgo53J1ozrIw8gac0OitspvGwSNcCVoV2wy12We3j5hKo2q1ypYi3C8X5FzYFhCiuPky%2FEpQO%2BqtzK0uTsJYAlMq8tV4Ko0MuiHS1997LAlLD9NAlTzRpE8%2BY35A73rDblU4vaNyIBQn7X%2FEDD2CNyMeYBh%2FiwOjbaBiQZKNJqgJJ8ienwhl8Pt0zrxkEL2q9KYGth21SGBsVvQypoVSN1XllFiFmz6BbwRtW8vrBYyB8NmwI7NBESqrDro0DqBJeHOLYB3LhfFQYAY7%2F2w0L4XZ7yfDRnpHna4PfSFcLa1gLnMPjk%2FBsI1yZumCB2tnGHOF9GMBAcH%2BAeVoQw5nDuQ%2F7elKJyHDoRrTpl4Oi%2B3U6jLbukXkE9WYt1iTQ3NJRml2cq2WQD%2FbwMxHGVN%2BFy8CLRlQaqEVRzhGxkQUMZ%2FKIF4FaXr%2Bwwu8ymwAY6pgFXzNwOATTGGKtUR3jxfoHv10I0pCur%2FPE3EUn1EkZ44ByB%2FZP6uIE%2BZpD1vvZjEFMPRFN12YKyVpFT%2FAu0KNH3JrT6Tl5%2FsmGkPb0DFkYSu3Pb84n4RUrEveJlc6IdVXKu9wHg9bQit0E7c%2B5ufjVKFuTULCo6uKSQMjY5AzV3aMThGpQtYugvUFaBbrPxsaEb4w95ouLKQHiyS%2FuZ606rqqhfWyfA&X-Amz-Signature=e49d04d2b2f796afbe07bc7a7957655a552e736655f79b8c3158fb003af510e1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
