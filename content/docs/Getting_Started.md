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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZPAIE4U%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQClQe5GBq2v4%2BVHEC6DLtgclwBM9rApyhyXQD%2Fz1wmppAIhAK1mVwHQFfjnwMUTZSLWWQ84ycdmpHveYLUIZ7RFjUFzKv8DCGgQABoMNjM3NDIzMTgzODA1Igy9gaoMtIhz4metFjQq3ANvLheuv%2BM4xlOrS4CqAVKc4iOD5%2Bb6bguO%2BxsSaaqkbfhIedlk%2BhQRcSrDjsC8FeVa%2BDsIEwCKFTEEBU4a%2FGHqGxBA2fAeGiXouwZ6sxzCRUHCYJlmaUk7cQ3yhT1MUsjHxcQI%2Be4sQbT75G8kJC%2FNrwNw%2FXIVKHimuAMPHys%2FpGXbYqcFU3TnCTmVFI40fMIaJR9fLaFcKCD0bFTawEcZJFKaUr%2Fs4U2ySpRVuLNzYFwiXPDYwTESgFxMC21uMGLjOZGUk9cNZMyGGjt%2FEk8bN2L5vEE6qvMt1BMeFSMS%2BFI1zPRIPDQGsJodUOAE2z6qbFKf9RYusRJ%2FYWMiTI0ADpiP4UvoHUUdyQhHH9jdGU6v4VtOgOEzk2SGPqQu6m4g6iTD18bgU7SR2QMS62HLr%2BmSRB4jkD%2FnnjifJTtzZ9gpv1YQRhdMCwJ3uF5FEQtSbpROh5ZRZErmHFWdb8Cm8r6bE%2FR9RWdrmeqL8nzlKQzphgXHYSSjyig38yvxVud32uUYaqQAjy%2FSsaml8iO18MhJi%2BjQtKHcYYriWlcwcOAddfPcDmtgr7GgPWVNOKHvl%2FyT6IBVun57UCnKneAHix1Vryfi%2BRjf86TPFRAGruTHyhVrLNd3d%2B2WtTC1wpXEBjqkAfkIniuj%2BizIQ95FxMz9yxWZjZO9BDHDhpqYHKrOHpG4%2BqEZMc%2FqcMx62Tybyh4gPdyuX4dHQW2VRbTH0QK6K2yFSMkm7LM74iC0lppuyP2YSY36JFVZD4dVkLBWjshxARNk%2BcaSZnklnKP6L0HI8jtHPUyGLC6PGVsrdZzOSQKaaxhBIyQTkc%2FvJXUA2wWhl%2FLdwYIEtecnbZkGJmAGxdRJmY7D&X-Amz-Signature=65a15e29c1e61669830602849cf038ded0b5eb956b55dcb867fc9db1496e6731&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZPAIE4U%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQClQe5GBq2v4%2BVHEC6DLtgclwBM9rApyhyXQD%2Fz1wmppAIhAK1mVwHQFfjnwMUTZSLWWQ84ycdmpHveYLUIZ7RFjUFzKv8DCGgQABoMNjM3NDIzMTgzODA1Igy9gaoMtIhz4metFjQq3ANvLheuv%2BM4xlOrS4CqAVKc4iOD5%2Bb6bguO%2BxsSaaqkbfhIedlk%2BhQRcSrDjsC8FeVa%2BDsIEwCKFTEEBU4a%2FGHqGxBA2fAeGiXouwZ6sxzCRUHCYJlmaUk7cQ3yhT1MUsjHxcQI%2Be4sQbT75G8kJC%2FNrwNw%2FXIVKHimuAMPHys%2FpGXbYqcFU3TnCTmVFI40fMIaJR9fLaFcKCD0bFTawEcZJFKaUr%2Fs4U2ySpRVuLNzYFwiXPDYwTESgFxMC21uMGLjOZGUk9cNZMyGGjt%2FEk8bN2L5vEE6qvMt1BMeFSMS%2BFI1zPRIPDQGsJodUOAE2z6qbFKf9RYusRJ%2FYWMiTI0ADpiP4UvoHUUdyQhHH9jdGU6v4VtOgOEzk2SGPqQu6m4g6iTD18bgU7SR2QMS62HLr%2BmSRB4jkD%2FnnjifJTtzZ9gpv1YQRhdMCwJ3uF5FEQtSbpROh5ZRZErmHFWdb8Cm8r6bE%2FR9RWdrmeqL8nzlKQzphgXHYSSjyig38yvxVud32uUYaqQAjy%2FSsaml8iO18MhJi%2BjQtKHcYYriWlcwcOAddfPcDmtgr7GgPWVNOKHvl%2FyT6IBVun57UCnKneAHix1Vryfi%2BRjf86TPFRAGruTHyhVrLNd3d%2B2WtTC1wpXEBjqkAfkIniuj%2BizIQ95FxMz9yxWZjZO9BDHDhpqYHKrOHpG4%2BqEZMc%2FqcMx62Tybyh4gPdyuX4dHQW2VRbTH0QK6K2yFSMkm7LM74iC0lppuyP2YSY36JFVZD4dVkLBWjshxARNk%2BcaSZnklnKP6L0HI8jtHPUyGLC6PGVsrdZzOSQKaaxhBIyQTkc%2FvJXUA2wWhl%2FLdwYIEtecnbZkGJmAGxdRJmY7D&X-Amz-Signature=e0a7d185b4b1de228f6705eece1be35da09ec447e394555bb6c9b8346ebe172d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZPAIE4U%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQClQe5GBq2v4%2BVHEC6DLtgclwBM9rApyhyXQD%2Fz1wmppAIhAK1mVwHQFfjnwMUTZSLWWQ84ycdmpHveYLUIZ7RFjUFzKv8DCGgQABoMNjM3NDIzMTgzODA1Igy9gaoMtIhz4metFjQq3ANvLheuv%2BM4xlOrS4CqAVKc4iOD5%2Bb6bguO%2BxsSaaqkbfhIedlk%2BhQRcSrDjsC8FeVa%2BDsIEwCKFTEEBU4a%2FGHqGxBA2fAeGiXouwZ6sxzCRUHCYJlmaUk7cQ3yhT1MUsjHxcQI%2Be4sQbT75G8kJC%2FNrwNw%2FXIVKHimuAMPHys%2FpGXbYqcFU3TnCTmVFI40fMIaJR9fLaFcKCD0bFTawEcZJFKaUr%2Fs4U2ySpRVuLNzYFwiXPDYwTESgFxMC21uMGLjOZGUk9cNZMyGGjt%2FEk8bN2L5vEE6qvMt1BMeFSMS%2BFI1zPRIPDQGsJodUOAE2z6qbFKf9RYusRJ%2FYWMiTI0ADpiP4UvoHUUdyQhHH9jdGU6v4VtOgOEzk2SGPqQu6m4g6iTD18bgU7SR2QMS62HLr%2BmSRB4jkD%2FnnjifJTtzZ9gpv1YQRhdMCwJ3uF5FEQtSbpROh5ZRZErmHFWdb8Cm8r6bE%2FR9RWdrmeqL8nzlKQzphgXHYSSjyig38yvxVud32uUYaqQAjy%2FSsaml8iO18MhJi%2BjQtKHcYYriWlcwcOAddfPcDmtgr7GgPWVNOKHvl%2FyT6IBVun57UCnKneAHix1Vryfi%2BRjf86TPFRAGruTHyhVrLNd3d%2B2WtTC1wpXEBjqkAfkIniuj%2BizIQ95FxMz9yxWZjZO9BDHDhpqYHKrOHpG4%2BqEZMc%2FqcMx62Tybyh4gPdyuX4dHQW2VRbTH0QK6K2yFSMkm7LM74iC0lppuyP2YSY36JFVZD4dVkLBWjshxARNk%2BcaSZnklnKP6L0HI8jtHPUyGLC6PGVsrdZzOSQKaaxhBIyQTkc%2FvJXUA2wWhl%2FLdwYIEtecnbZkGJmAGxdRJmY7D&X-Amz-Signature=b9de23ce86ad3a9edb0a0c0f4fabb540997649696bcbdd5e6b89e81185cbac2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBJP2KKN%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCJZiy2ImAFLgLphkTilxQAtzYtYv7s8O9vVWxWjfx6CwIgTY3xekFhGATZbMXMpIm4seBKBdUtPrsR9lrOjnRK9gMq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDCyvqMPQipaStDqq%2BSrcA6F4MPRcOuMk3oGvDiwVf5cHxjhRY0uJvEomHpZcUb9KRg56pGYDHCE7qPyHNfZvMskUym7tVn7KCj5yoEQnd8FDigSWWT5RbYBn0S4A2zKshpcPxYAOPE14q3ZGLAK5SMN4N70wDTephPW4hhdh4dgYmEmNtoKEmGTYtTt2BSG3W6FJaperpzxc7iZbbYIvlV2w%2FL7%2FYh7VeRDyPZ0lCPttCmEFeXsVq03%2BcC5CC4Q3RaqdZMe5KxOEZs0shgZM6GxHXeqlIVLKDkOZWITuBz%2BzeH8tPNa6kMAK%2BWwuZmYZ%2FYRI%2FlC4PyPAde9JG3x%2BiAkZBN7n%2FKxVOB%2BtZneycsT7ySQp6WxfZfJkOQSsiHrYGq3I66OQPFmcdgaTSwM7WK3LwGKsRAAZv8KUXVZBLdNjLIuJ5RIkX%2FPdffgXK%2BYV2ib3gO4Hk6U2NPNDt4IDAs78moasYKgI7IxYF9xjvsp65qLk2ArxXf7SIvdReoqGJ7Pf9Cp30ikH2Rb5h6oIook6X6NsfoJIIq0mQ3BBcSJPs%2BYiGyJqZ9rbJrJFPzrIHEnRb4r2XbXGxVKQuSsQHW7wiX30vVlurJf38m0LKlKmfccJ2ok37ehHPOtt5FOqPdIMQnWI5lxLkAA%2FMPvClcQGOqUBTBOjgC5lV2499r5XzeYop4X5TVsCZeFzuCNGEytgirdB3oNNCIi86Q8saoP3Gon1FkAMHMkgjqGX79024wnT1o0paJs4Ah714caS2aPqKAgyhH9pMbU72gvYB%2Fx5n9R2FL%2Bd3%2B8n7FNKIJLHTfEpBtZB9HrTDmuedGIgu0plSPrnFW3zOMV8dJsyd0m%2BCgGo3NZkmNsPAqhi%2FsMtRgc6mR56OXdh&X-Amz-Signature=5ded80c82cfa99d2cade7fdf7be6138dfb3acb977b958609e7d53cd7a145929f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJKHGA5C%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIDj%2Fal7YAEoqb675wXrtrHVMfqOw7jj5gzrjZStSw3I3AiBtgVLKJLGNUPAEkeuejL7IMLhFTkcc8mhEtVOjqceGJir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMyj%2B0LJWoy1GQ0gYJKtwDPekMAw1yAN1o9L0vP9eSA6brtlWIDRc4KlwXVccQGRZ%2FQ84EqEG6M6wkXsIDUP0GLtSJc6kXCrbvZ9vikqxdlWY3dbt%2B22pvwirbYhMNPlWyKj2YRbAoGr5h5O%2BhA0nUiRsbNK3djfsNkifULI5mMmlNF0ZgURFwMFf7pJcc5BPiC8%2F7navCu6v0JgD8Nmo5iaSy5yKLANYaiKlRGLrt6bA7MMvcXhJ0eHNd%2BV61MkuzYSLntOJl5Jitsj9CK1%2F%2B%2F23ec2EfFpqIOa6XvfCn%2Fy2slP95RgAMZBG5T2dUVxDlFy8JjF7b8ADDJXHgnF0kDoMnNi4ZGZsanh0hKvVoAKGruigX0uFL2X0L5ryAXCBjzmoR39G0LgW40fwzV0zzB8D6Zb7SaRrSQNXm5YQ0NkUrFB8jTjHO6hgYhXlnEDEatCyeKdkNrTnHtEvhFxD0j16qAxy5LI8lRxqLRmGfNnYhrc%2FF1eQfvo4qLOBR4QcL%2BnIKybjuVbmZeT3kNrikh83yWzrISy6Qc1yfDXBPAY23MhTbTzDT16Ad8pZZsO8UKWLvRq9m4I6suLmjanUxcwAipVpSxAMy8uepXn2coqgG43scQTQYWDhHmY1l66SltF%2F0RFhzGorjKJswpMKVxAY6pgEoMrka8tNcLAntIUuM0tXj6Kb5isXK7HpoYDiLxUsKDNEp55hBB6YXKmOwCxa8TZFyTs1KG8kB%2FzB1z3V%2BddrdSf6xcUtVildEbyRz5e2wtzKEOradbJ5ByX%2FW04nqeOsWdZ4El54ilyjdRS5fnt2l47a6MSSNhLFujkGMu4y%2BWMG2C7n%2FqVUd6A7PsN6hMX34BhHheiX3%2B40f4HyGO8xXDDuCVQ2r&X-Amz-Signature=37d630efb02548aba1af52da569be7b3adda2565be3d405cccb8450a2109e6e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZPAIE4U%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQClQe5GBq2v4%2BVHEC6DLtgclwBM9rApyhyXQD%2Fz1wmppAIhAK1mVwHQFfjnwMUTZSLWWQ84ycdmpHveYLUIZ7RFjUFzKv8DCGgQABoMNjM3NDIzMTgzODA1Igy9gaoMtIhz4metFjQq3ANvLheuv%2BM4xlOrS4CqAVKc4iOD5%2Bb6bguO%2BxsSaaqkbfhIedlk%2BhQRcSrDjsC8FeVa%2BDsIEwCKFTEEBU4a%2FGHqGxBA2fAeGiXouwZ6sxzCRUHCYJlmaUk7cQ3yhT1MUsjHxcQI%2Be4sQbT75G8kJC%2FNrwNw%2FXIVKHimuAMPHys%2FpGXbYqcFU3TnCTmVFI40fMIaJR9fLaFcKCD0bFTawEcZJFKaUr%2Fs4U2ySpRVuLNzYFwiXPDYwTESgFxMC21uMGLjOZGUk9cNZMyGGjt%2FEk8bN2L5vEE6qvMt1BMeFSMS%2BFI1zPRIPDQGsJodUOAE2z6qbFKf9RYusRJ%2FYWMiTI0ADpiP4UvoHUUdyQhHH9jdGU6v4VtOgOEzk2SGPqQu6m4g6iTD18bgU7SR2QMS62HLr%2BmSRB4jkD%2FnnjifJTtzZ9gpv1YQRhdMCwJ3uF5FEQtSbpROh5ZRZErmHFWdb8Cm8r6bE%2FR9RWdrmeqL8nzlKQzphgXHYSSjyig38yvxVud32uUYaqQAjy%2FSsaml8iO18MhJi%2BjQtKHcYYriWlcwcOAddfPcDmtgr7GgPWVNOKHvl%2FyT6IBVun57UCnKneAHix1Vryfi%2BRjf86TPFRAGruTHyhVrLNd3d%2B2WtTC1wpXEBjqkAfkIniuj%2BizIQ95FxMz9yxWZjZO9BDHDhpqYHKrOHpG4%2BqEZMc%2FqcMx62Tybyh4gPdyuX4dHQW2VRbTH0QK6K2yFSMkm7LM74iC0lppuyP2YSY36JFVZD4dVkLBWjshxARNk%2BcaSZnklnKP6L0HI8jtHPUyGLC6PGVsrdZzOSQKaaxhBIyQTkc%2FvJXUA2wWhl%2FLdwYIEtecnbZkGJmAGxdRJmY7D&X-Amz-Signature=c0ab2839feef32c2bdad5ae1864990b7b134dd7bc54de82b80763ccdd054a342&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
