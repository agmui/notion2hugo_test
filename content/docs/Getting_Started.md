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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BFIDPM3%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDibgwUJrWPEOwEZYrh33ooowHJOK0qGMRUr%2BAFu9asJgIgQVZpEo78osjgx3LwUBzp8B%2BqAgYHsLjX%2FmY3z8ZczUIq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDNldR%2B%2FfobHO5ExQ0ircAxtZvgUp4xqR7C29AP73VhZFYQm6u%2BGk8ZHSm0HcL09VtKI7NUNVy5WrTmdb5%2FBDoWQCw9x3837b28Tj0vwxzostty240krC6nmtWb6kA3gNdoIMvMuQqqwZmmHpTB08JMrSjfnTxSsYZOzYbiYrvazLdWQfWhrrTZs9sFLHVVkJoWrZ7gCmJwGj24yOnbpeuB%2FTGkvrRRNATTqVLLQ3QiYMhtloloC6xrWWWzaah6M5QxI%2B6t1npRiu3TIjV%2BoZigtt4hfMRrpbT4rmLQ1Vw%2BVXaYvWwtsmnsjQQf%2BqLb26z4sWtQeqBsQoaB5idFjDxZ9q2iqRSGu5rU%2BT%2BJcasZhDxKv%2FV96pVbKqRo7C8Yui%2BWXHVb3zkwGBjPFwY2%2BNS5hCvIjMO5X4H54GFGO1jGnLxxyZ%2Fna%2FwvfS7dwH3Ey8PtV4CGRO6G2wjTGLUoRLMlkLlsc%2BaWaVFBFl3eTDcurfk4gbQyvjiy%2BYO0rpk8tQnW6JBbicNw%2FQj%2BqNfIVu70QBSghdVgKMvqRHbLTxRLdD3RRolrKCAC2mxraH2PgxleV1er9kJCPGhAVdn5CvA%2Fc1ZBa7YbBoOYlJE%2FkGKquYVwYOtirHmsjlWDEuenAzIQiOf83xkiJUXl1lMK6UuMQGOqUBp6qbJ3O7bjd%2FkFuc6iXEAVo48DFfvq07nNlt35pKmCHjzosX6mLN9yoaG8ILfwyOVVD8K07g2OznMv%2FYhKqJr%2F1e%2BvUrzd%2F0Tx9xcn24m6HWyiDBAla5PJxQrAcJowiAx9YjswWOK1oZgmqPRiJCAvIfROBzeGmhwk0Xf%2FVi1aM8%2BXlUNSGzBwl3hlOnsrDCbaTQh5jqnIMgKASMywKCZXt%2FPV%2BA&X-Amz-Signature=ccf92aeefb9f6e755c46e42758c784fb3721d7d6c172b9dcfa2cc9c239eefe11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BFIDPM3%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDibgwUJrWPEOwEZYrh33ooowHJOK0qGMRUr%2BAFu9asJgIgQVZpEo78osjgx3LwUBzp8B%2BqAgYHsLjX%2FmY3z8ZczUIq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDNldR%2B%2FfobHO5ExQ0ircAxtZvgUp4xqR7C29AP73VhZFYQm6u%2BGk8ZHSm0HcL09VtKI7NUNVy5WrTmdb5%2FBDoWQCw9x3837b28Tj0vwxzostty240krC6nmtWb6kA3gNdoIMvMuQqqwZmmHpTB08JMrSjfnTxSsYZOzYbiYrvazLdWQfWhrrTZs9sFLHVVkJoWrZ7gCmJwGj24yOnbpeuB%2FTGkvrRRNATTqVLLQ3QiYMhtloloC6xrWWWzaah6M5QxI%2B6t1npRiu3TIjV%2BoZigtt4hfMRrpbT4rmLQ1Vw%2BVXaYvWwtsmnsjQQf%2BqLb26z4sWtQeqBsQoaB5idFjDxZ9q2iqRSGu5rU%2BT%2BJcasZhDxKv%2FV96pVbKqRo7C8Yui%2BWXHVb3zkwGBjPFwY2%2BNS5hCvIjMO5X4H54GFGO1jGnLxxyZ%2Fna%2FwvfS7dwH3Ey8PtV4CGRO6G2wjTGLUoRLMlkLlsc%2BaWaVFBFl3eTDcurfk4gbQyvjiy%2BYO0rpk8tQnW6JBbicNw%2FQj%2BqNfIVu70QBSghdVgKMvqRHbLTxRLdD3RRolrKCAC2mxraH2PgxleV1er9kJCPGhAVdn5CvA%2Fc1ZBa7YbBoOYlJE%2FkGKquYVwYOtirHmsjlWDEuenAzIQiOf83xkiJUXl1lMK6UuMQGOqUBp6qbJ3O7bjd%2FkFuc6iXEAVo48DFfvq07nNlt35pKmCHjzosX6mLN9yoaG8ILfwyOVVD8K07g2OznMv%2FYhKqJr%2F1e%2BvUrzd%2F0Tx9xcn24m6HWyiDBAla5PJxQrAcJowiAx9YjswWOK1oZgmqPRiJCAvIfROBzeGmhwk0Xf%2FVi1aM8%2BXlUNSGzBwl3hlOnsrDCbaTQh5jqnIMgKASMywKCZXt%2FPV%2BA&X-Amz-Signature=ed82f4da57af0bc7f99fb5479f821dda0c1dc768e1e37f099b446716704bd0c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BFIDPM3%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDibgwUJrWPEOwEZYrh33ooowHJOK0qGMRUr%2BAFu9asJgIgQVZpEo78osjgx3LwUBzp8B%2BqAgYHsLjX%2FmY3z8ZczUIq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDNldR%2B%2FfobHO5ExQ0ircAxtZvgUp4xqR7C29AP73VhZFYQm6u%2BGk8ZHSm0HcL09VtKI7NUNVy5WrTmdb5%2FBDoWQCw9x3837b28Tj0vwxzostty240krC6nmtWb6kA3gNdoIMvMuQqqwZmmHpTB08JMrSjfnTxSsYZOzYbiYrvazLdWQfWhrrTZs9sFLHVVkJoWrZ7gCmJwGj24yOnbpeuB%2FTGkvrRRNATTqVLLQ3QiYMhtloloC6xrWWWzaah6M5QxI%2B6t1npRiu3TIjV%2BoZigtt4hfMRrpbT4rmLQ1Vw%2BVXaYvWwtsmnsjQQf%2BqLb26z4sWtQeqBsQoaB5idFjDxZ9q2iqRSGu5rU%2BT%2BJcasZhDxKv%2FV96pVbKqRo7C8Yui%2BWXHVb3zkwGBjPFwY2%2BNS5hCvIjMO5X4H54GFGO1jGnLxxyZ%2Fna%2FwvfS7dwH3Ey8PtV4CGRO6G2wjTGLUoRLMlkLlsc%2BaWaVFBFl3eTDcurfk4gbQyvjiy%2BYO0rpk8tQnW6JBbicNw%2FQj%2BqNfIVu70QBSghdVgKMvqRHbLTxRLdD3RRolrKCAC2mxraH2PgxleV1er9kJCPGhAVdn5CvA%2Fc1ZBa7YbBoOYlJE%2FkGKquYVwYOtirHmsjlWDEuenAzIQiOf83xkiJUXl1lMK6UuMQGOqUBp6qbJ3O7bjd%2FkFuc6iXEAVo48DFfvq07nNlt35pKmCHjzosX6mLN9yoaG8ILfwyOVVD8K07g2OznMv%2FYhKqJr%2F1e%2BvUrzd%2F0Tx9xcn24m6HWyiDBAla5PJxQrAcJowiAx9YjswWOK1oZgmqPRiJCAvIfROBzeGmhwk0Xf%2FVi1aM8%2BXlUNSGzBwl3hlOnsrDCbaTQh5jqnIMgKASMywKCZXt%2FPV%2BA&X-Amz-Signature=f746f3e48f7ddc4c164922d6921ead6f76e97809d2f5d4c95a614f471ffe528e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHIBJ5P5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCphxir%2B5dqZHUw9DLKAlFG%2B0P3kRn0E7rFTQT5L8O%2BwIgda2Tbek9b1gQan8k2lElhMCwwd4ErNl7YNkx78ZlYLcq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDBgOSRyePo4zFREUtyrcA6H89XjOAIw5aLFndtDN0sufg1VMCBkJZZU5fRg%2FsRKXXcR8uZC6qatC3o%2FesVl5fbseTQlFfoTKNHzk%2FVu9a0VJbLRfJpD3YMXFM7xyA%2BFNcO%2FesmLmnYi%2F70iZZ7JSGOXC03dEQJcG3w%2BcWe76Vsgqr6U5JizQtVMSlosr8FmbpwvBpkyff67vwWmT4mcmFHhZLgRb6EEs5UEn%2BQZtwcLVbHl211C5E4B4YCNagGKGp9O1ppVJDNtFMoz1NGUngdRH%2Bohazl3m5Ahok4WOocd%2FWC4ZuYj4CQl1gGkzN9tIvBlixdWAzSE0uS3Dz80uMFuEmmt7i0SW5nVpHsFFMD6fEVg7TrUDTEdkzQfp%2FO91lYP4Qu4EsoVH5hdyeDJVRBZ8TxJHTV7YdVYU3lZUL08kAFoi0zRL1cRPtqAPXv0IciIfU%2B0abjvwKCvvyq%2BhkKf603LhYQ7JPdvKGnP6eAOj43wuOggYIA8G9S0WV6CVrGw551Y6zKru2f5S4ZgL1ZkcvdIss4o4SC2dSzjoWjqn%2FKCPysj%2FgkQwwUzhRBnokw16Ct%2FO4c%2F0fp%2FQOpuwdnfhzCQxpJatRKLfc8GEradYasAujB4N0dHKIc0oZYbZoHn73uix1%2Bh%2FNLooMNWOuMQGOqUBTaEn7haozHyjEGu2DfaYM6b3ijG%2B8Bk9U%2FKFjbPfm4OI9xYyYNI8oz73D9tVZvBpTkUSTDijA%2FoSWRC%2BP4zx8%2Biky3N82J1DjU%2BqigZ1ioKrEHkVQjrwfo6jTVcssbrfPPYrcO3FiruvXOf2Yo68X00xNd4OBQBO0UcwqmeZbb7d8LTM0UelTSY%2FomKT%2ByGSgUob1t1DCXZrf96rrq%2BUsW%2BtoZKN&X-Amz-Signature=e81e67b59a93d22db253e2aff3be46d3bf34993a5bfc247fa3a890427df24ad6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI23EOWW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChVjiAh7w8%2FY4jbkgon%2Bmn9BDYGTbjl7ZYExG4H7O2EwIhAPHaPkDhqVZNXLmgbxQcgSPuc0K9Pt7T31zn2VUwU0iCKv8DCBYQABoMNjM3NDIzMTgzODA1Igz2AUWWk1LaY0QRuLcq3AO%2Be%2FazNOpJrsalI%2BR3gVMz60HvYlhleOt3A1r%2B0dajMpEXwbkandfO9KZWwpEDJWLngylvjCXsAGaB%2FnAOl%2BW09tCOE921zX%2BiyDE7v6bhAfHhqG59yIFRK5oCRvRoNXu5giQ5mhq2ClLYIWqkRiNgiyHZIRfkAhGx36lESkbG1LnNf1cOMOS6mGypzl51fw4VMO1MlImnoLoCpclsnePzMD87JYqmPZ3MNE3dsgitcEKEcDjeU3p65P%2BTZqWr%2FJJouod3WbLf7yTbiQIcBn%2B97ZY7RNupPGyBl8NDsz%2FJ3ZR4GOcRgonexkNPLHjIxPJX1neSSTWQj0wezGjnoMPpYqivfGF9OiOToEwUwv4WNgNk0rbOzvmaFtngR5Pi1tD04VDJf2FVqsDJ8%2Bvehh35TaZ%2FYycbvU2hDce1fm7xTYrfsHue%2Fuq7A4Q9HBSA5Vo97IAUXlGWRWtzPbURSjelJrVx7ETXXzFFEHGHDm1nTTEgeRzErvQwlbfyv1GYHWybPZti2ciG67vR2LdjJPO%2FwIpRLWzSTQKtflgS77uaUxbm2HkExpq0A2b9k201pW7wqIjaL1FNlPkwX9ub869FXBrvOUyAiIIp9DiMVzLqcjtW2lqbx%2ByYCgUprzDwjrjEBjqkAStQ3Riw04Ky5L%2FzM%2B1MoOwSyYpBlS4u1bZKq5d0IRLR%2FSiYkLf6Ezv8Cviqd6k8cIUnas54zFPmJ9AVomD3x%2BgY92Drtr4yVKT1HIc0dWpNgCtMzGMZgujHtq2Co9CvXZDuC%2Fy1BFzdh1V9H%2FqEsCZyfJ%2BMiNTlQvifK6AIwtU%2BGY17ge7R%2F0C%2FCgSpceOaWlCd3OMaUt7ZjNeIw97qdkDR5nIQ&X-Amz-Signature=2596d8f063f89a18e58176647f6e8756432cfb8fe416c763d0e04776385b86d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BFIDPM3%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDibgwUJrWPEOwEZYrh33ooowHJOK0qGMRUr%2BAFu9asJgIgQVZpEo78osjgx3LwUBzp8B%2BqAgYHsLjX%2FmY3z8ZczUIq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDNldR%2B%2FfobHO5ExQ0ircAxtZvgUp4xqR7C29AP73VhZFYQm6u%2BGk8ZHSm0HcL09VtKI7NUNVy5WrTmdb5%2FBDoWQCw9x3837b28Tj0vwxzostty240krC6nmtWb6kA3gNdoIMvMuQqqwZmmHpTB08JMrSjfnTxSsYZOzYbiYrvazLdWQfWhrrTZs9sFLHVVkJoWrZ7gCmJwGj24yOnbpeuB%2FTGkvrRRNATTqVLLQ3QiYMhtloloC6xrWWWzaah6M5QxI%2B6t1npRiu3TIjV%2BoZigtt4hfMRrpbT4rmLQ1Vw%2BVXaYvWwtsmnsjQQf%2BqLb26z4sWtQeqBsQoaB5idFjDxZ9q2iqRSGu5rU%2BT%2BJcasZhDxKv%2FV96pVbKqRo7C8Yui%2BWXHVb3zkwGBjPFwY2%2BNS5hCvIjMO5X4H54GFGO1jGnLxxyZ%2Fna%2FwvfS7dwH3Ey8PtV4CGRO6G2wjTGLUoRLMlkLlsc%2BaWaVFBFl3eTDcurfk4gbQyvjiy%2BYO0rpk8tQnW6JBbicNw%2FQj%2BqNfIVu70QBSghdVgKMvqRHbLTxRLdD3RRolrKCAC2mxraH2PgxleV1er9kJCPGhAVdn5CvA%2Fc1ZBa7YbBoOYlJE%2FkGKquYVwYOtirHmsjlWDEuenAzIQiOf83xkiJUXl1lMK6UuMQGOqUBp6qbJ3O7bjd%2FkFuc6iXEAVo48DFfvq07nNlt35pKmCHjzosX6mLN9yoaG8ILfwyOVVD8K07g2OznMv%2FYhKqJr%2F1e%2BvUrzd%2F0Tx9xcn24m6HWyiDBAla5PJxQrAcJowiAx9YjswWOK1oZgmqPRiJCAvIfROBzeGmhwk0Xf%2FVi1aM8%2BXlUNSGzBwl3hlOnsrDCbaTQh5jqnIMgKASMywKCZXt%2FPV%2BA&X-Amz-Signature=ee1911b62ee1f1e94d2e30ae52187b41232aa597d223f14a2b388b81046fdd22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
