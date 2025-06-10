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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4BFLEZO%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T100941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAD2n9ngnkqICZJFyvEBVixJPbzBmi9GTicqL74vDmuUAiEAq%2FQ4LElVl53Xk%2Fm6hE3Aaihx44BdqKNt5qgidguWmYwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIz4Schj4ARR9ImmgSrcAyD1fBq%2Fvnh960q%2FGhIm0R0dBdqFCMc9Tx1ZBuZBdtZR4nWpJB1Jpzng1qt1Cz2FIbFouLAC2orSYxixIlJkAHrLCM8jqVVW7A4OMzc0ZteKtXcgNF%2FF5pW2QOSRQ2eILawYp39iodPLaKVZdHAw%2B2F3eQebOci12oB12E5l128glrFU4f0K2gb%2Ba7tA6bXXWGEsZOuoUXXKaru5Y5L5GmjmHOox%2FGj9DeqadBibPyv8g2CYjYBJDADrpmynUTiSNmhu7GmOx7Nhw8bIEM5%2FLYezzAIJLf82rsOatDMTM5kxfrH5XbFqrcKvZweDyISZFBJ7t2wtM6cGELohKb%2FTIuCiR%2F4KnrS1lMSwAdjngQaeUSU2okn2RdJyPwODOfLXXMtV1ZnYteaAmNcGw8ed69hvxXovx8gWOWdnxUl3fBjvFRAlPW7xPYEmOv4Fa1zTCjptA4dUo3YecXWFjUqf%2FJczjg%2BynuXBmmOVXARpK7StxJRmdQ%2FtW%2Fc%2FYnJ%2BuFd9sv5m0mc0%2B54j8wAkDA%2FKXS3bwiI5ILvs5sdNdXIQw2uZG6dkOFY9i%2B8Gp72SdnZt7SID9k49p7f1We93cc2Le4y9ctef8JEqKCbPrvJNFp1P1wuQ7ElN2mjb6VVdMJ3gn8IGOqUBcMzdlYCNq%2FLOYdNWrWtoclODXlHrfhRk9C2tAU8koaMfnr0eFPv4PqHKMfdK8sIg%2BRxBQnlCs5OLbKD8My15%2FRd8QhHOqeDYEzg2A9v9id0DswQL%2BpI%2Bwgswqk02Hiwm48OU0B04wVjKyhxUWxk9zMtsd%2Bs2xUnrXWEz%2BH69M4oh64fg8ohccnAIdy%2By8hBKUi6DmAfZ8QGEUK88zrKwkTCOzInP&X-Amz-Signature=6539b5153b6707f4be88a8ac0d1f94e7f47fc8f060244b7699b1b36ba4a104fa&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4BFLEZO%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T100941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAD2n9ngnkqICZJFyvEBVixJPbzBmi9GTicqL74vDmuUAiEAq%2FQ4LElVl53Xk%2Fm6hE3Aaihx44BdqKNt5qgidguWmYwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIz4Schj4ARR9ImmgSrcAyD1fBq%2Fvnh960q%2FGhIm0R0dBdqFCMc9Tx1ZBuZBdtZR4nWpJB1Jpzng1qt1Cz2FIbFouLAC2orSYxixIlJkAHrLCM8jqVVW7A4OMzc0ZteKtXcgNF%2FF5pW2QOSRQ2eILawYp39iodPLaKVZdHAw%2B2F3eQebOci12oB12E5l128glrFU4f0K2gb%2Ba7tA6bXXWGEsZOuoUXXKaru5Y5L5GmjmHOox%2FGj9DeqadBibPyv8g2CYjYBJDADrpmynUTiSNmhu7GmOx7Nhw8bIEM5%2FLYezzAIJLf82rsOatDMTM5kxfrH5XbFqrcKvZweDyISZFBJ7t2wtM6cGELohKb%2FTIuCiR%2F4KnrS1lMSwAdjngQaeUSU2okn2RdJyPwODOfLXXMtV1ZnYteaAmNcGw8ed69hvxXovx8gWOWdnxUl3fBjvFRAlPW7xPYEmOv4Fa1zTCjptA4dUo3YecXWFjUqf%2FJczjg%2BynuXBmmOVXARpK7StxJRmdQ%2FtW%2Fc%2FYnJ%2BuFd9sv5m0mc0%2B54j8wAkDA%2FKXS3bwiI5ILvs5sdNdXIQw2uZG6dkOFY9i%2B8Gp72SdnZt7SID9k49p7f1We93cc2Le4y9ctef8JEqKCbPrvJNFp1P1wuQ7ElN2mjb6VVdMJ3gn8IGOqUBcMzdlYCNq%2FLOYdNWrWtoclODXlHrfhRk9C2tAU8koaMfnr0eFPv4PqHKMfdK8sIg%2BRxBQnlCs5OLbKD8My15%2FRd8QhHOqeDYEzg2A9v9id0DswQL%2BpI%2Bwgswqk02Hiwm48OU0B04wVjKyhxUWxk9zMtsd%2Bs2xUnrXWEz%2BH69M4oh64fg8ohccnAIdy%2By8hBKUi6DmAfZ8QGEUK88zrKwkTCOzInP&X-Amz-Signature=984202f2121ae419e9e743af74607195c7c93bf91d08ea1d709bd48a962340c9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4BFLEZO%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T100941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAD2n9ngnkqICZJFyvEBVixJPbzBmi9GTicqL74vDmuUAiEAq%2FQ4LElVl53Xk%2Fm6hE3Aaihx44BdqKNt5qgidguWmYwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIz4Schj4ARR9ImmgSrcAyD1fBq%2Fvnh960q%2FGhIm0R0dBdqFCMc9Tx1ZBuZBdtZR4nWpJB1Jpzng1qt1Cz2FIbFouLAC2orSYxixIlJkAHrLCM8jqVVW7A4OMzc0ZteKtXcgNF%2FF5pW2QOSRQ2eILawYp39iodPLaKVZdHAw%2B2F3eQebOci12oB12E5l128glrFU4f0K2gb%2Ba7tA6bXXWGEsZOuoUXXKaru5Y5L5GmjmHOox%2FGj9DeqadBibPyv8g2CYjYBJDADrpmynUTiSNmhu7GmOx7Nhw8bIEM5%2FLYezzAIJLf82rsOatDMTM5kxfrH5XbFqrcKvZweDyISZFBJ7t2wtM6cGELohKb%2FTIuCiR%2F4KnrS1lMSwAdjngQaeUSU2okn2RdJyPwODOfLXXMtV1ZnYteaAmNcGw8ed69hvxXovx8gWOWdnxUl3fBjvFRAlPW7xPYEmOv4Fa1zTCjptA4dUo3YecXWFjUqf%2FJczjg%2BynuXBmmOVXARpK7StxJRmdQ%2FtW%2Fc%2FYnJ%2BuFd9sv5m0mc0%2B54j8wAkDA%2FKXS3bwiI5ILvs5sdNdXIQw2uZG6dkOFY9i%2B8Gp72SdnZt7SID9k49p7f1We93cc2Le4y9ctef8JEqKCbPrvJNFp1P1wuQ7ElN2mjb6VVdMJ3gn8IGOqUBcMzdlYCNq%2FLOYdNWrWtoclODXlHrfhRk9C2tAU8koaMfnr0eFPv4PqHKMfdK8sIg%2BRxBQnlCs5OLbKD8My15%2FRd8QhHOqeDYEzg2A9v9id0DswQL%2BpI%2Bwgswqk02Hiwm48OU0B04wVjKyhxUWxk9zMtsd%2Bs2xUnrXWEz%2BH69M4oh64fg8ohccnAIdy%2By8hBKUi6DmAfZ8QGEUK88zrKwkTCOzInP&X-Amz-Signature=da518e918dc692d68fe3536243dfe491e82af94dff6d5049b8fe4ca2dc9efd6c&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYZOD7TC%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T100946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDf0O0kqsOnBTeVplExOXgN%2FMqRx8ofFg3sxyRYtUuOCgIgQaf37HNyG6HKXqtTB0SUM1Xu7jIH0lEo51izfmUKgKcqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7qyu0rB3W8RpF1XyrcA6F%2Fj%2FsFdcuLsicJ%2FWy5b6anweE4wcABEJfDWO4Mne9YTpteEW%2FBEhbdRvrLFkqMsb8Xdcu5yE%2B2k7IYAji7Dr40M1hQMqxvt%2BysV3eK6rWYYNXN43qZPmPK5geptMMo7IgQnErdMTxGa5X5yhD6tMDnSJJYs8W2CKf5K7xs0Fx2m0wHUsg5XCrqiXdqII9A8hCLhlFCz2Rz6SSaSW7EPzzCeBQnezvSMLf9p0oHz4tloGcrjZdBc4VTo6j%2FRsu%2FPpxQ%2BWcaI41BfPXqqGE%2FRxmfpECoo%2BZ3eb0eHo%2BmGqKq%2BVBWU6k5RpzGgzbcrNgrjnwpMmYMvgtL5LcXlcMjFemcaiASjJE%2B2xr%2BvhRKu0Sul9sTfY2dGDqn2k3ZKAzMcj73QlvZdseNTmzHxJasb3n7DoxENQS0pQCUtF5%2FGuqmd9KjXMJlNmZ3fPNaV16xo8MRyCkRf3wvg%2BROhBLJysUzw7v62J9t85gZIbwHdN7wOAD7da1mTJKK0iJAQS5oz8dMKYsd0oIbv8v1cCup2tarM0TYSqvfZE1ytQO0u9beYo3zcDrKWB0f0Z8FqCjnX9r5jhor%2F6xA5h%2Bs1vqaIGUEm59OOfk7lGmNmWWJdci6aoqE4d1DNMxTAiPbMOXen8IGOqUBIuUZFkfzeiSm4xKYG93jyftyPHnvskuUTaRFPbStPMQe%2B5%2FaVv%2BDXjH5XrdDquYrJ4G1bg3HMBIxUy%2ByWrwsc6rn%2F9IhOg578LvmAmLLvi3oYFJfOW7yrudH%2FTPOsmXHT%2B%2BahWigFHrZHiCmYfB%2FXMPNuTAAmvXL8vJduDR37z%2FwIyQhJJkqFCf1woD2t6bMUtOrlo8YvNJrr%2BhMw8YvhGo%2FSPhe&X-Amz-Signature=dbe041f45a5cf244c96d28ab5745988d3b7ae9bf3dc1889b0dae4eac97f669c7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGKYYDDR%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc%2FMQ4%2BD81DERjxX6G%2BdsyJr6460J6FzkfQE8XMzBc3wIhAOSbGnaps%2FI5PCkIYiR0Z2bItCARzTreBDdwhu1I%2FaIBKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXL2AFes5wF6XfaYgq3AOt6KUa2FVL6N89sNUiAMkdwYFjmdB7FOGBgnG2nHzVVePlQbM1sJ1WxJshsJ6cskp4m%2FA%2FaPMiGiU0qI7RK%2FnCCyW0gQKbPX6LFDPaEkdGuFV90t4Bcb36rvtAUDX5MdIx5VD9Tl1YNDp5%2BrE0JX545i3PuiTpGshXMiK4YaM5g7eyX7oFGiEYvx3HNbQtqO7B1DkEqCrGS78zxTn%2BsMbXjI50SAPORGhle6PKI3Hgjip0mUgtQs4asTkT1uWx3FXdGVGAJjvL9nYb9STwD%2ByUQvst3sAxUPyQHan9GhIJGxN04DHdrtCYg6v23W8VtoilMrVHI8XZR%2Bt8iR%2B3%2F6nh%2BjagmmpnXVPBitztzYLqT7recAEO3goU%2BoCDImGC%2BSBuertVPmI4i9r9sNq7wX5T40MBZLms%2F9l0G6wfHjaeFe9zDL%2BDxHIZ1%2Fz10Ikp9m1wZsQmehgYqxIxL%2BqrGqoilAAd89JSpRRolVLbkzhsPhYIsB0hBnBf6eS4rhVCnw2sCBu%2FhaYZZbuTLIeP97NNAARh2hiYITKXE%2FD8bseJ%2F2%2Be5Is9NK%2F72lEhZMcxV2QtNQveKCkw1tsVP0zWOjn9QLg71iBsjj1YG8IX27cTq1vOvIolhSejtgf6KzCx35%2FCBjqkAVAPn1lY1pcFw52pjpbdEjeL19eS85YPIKPt4QNuPDVbtlsXETan8Yf%2FJUYzj0%2BxZVyQ%2BZJtL0VtozznC0KLnjPFKvlnh%2FesFIfoRJc%2FEiqrprcHgIYbEoZY47ucZcHhpja%2FGOLcoMZQ%2FUfBZBHhYpmH1ItrM9nq73%2Fr7Qw2kBJ0KDT0vfMgxSgvpygOpv7RyNiusplOt5wBpXnUplRXaGVrtKZE&X-Amz-Signature=cdd849a30e457e3371e36b9d1ff01a8cfaa6cb8a2d693c1f4c97d646cc95332f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4BFLEZO%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T100941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAD2n9ngnkqICZJFyvEBVixJPbzBmi9GTicqL74vDmuUAiEAq%2FQ4LElVl53Xk%2Fm6hE3Aaihx44BdqKNt5qgidguWmYwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIz4Schj4ARR9ImmgSrcAyD1fBq%2Fvnh960q%2FGhIm0R0dBdqFCMc9Tx1ZBuZBdtZR4nWpJB1Jpzng1qt1Cz2FIbFouLAC2orSYxixIlJkAHrLCM8jqVVW7A4OMzc0ZteKtXcgNF%2FF5pW2QOSRQ2eILawYp39iodPLaKVZdHAw%2B2F3eQebOci12oB12E5l128glrFU4f0K2gb%2Ba7tA6bXXWGEsZOuoUXXKaru5Y5L5GmjmHOox%2FGj9DeqadBibPyv8g2CYjYBJDADrpmynUTiSNmhu7GmOx7Nhw8bIEM5%2FLYezzAIJLf82rsOatDMTM5kxfrH5XbFqrcKvZweDyISZFBJ7t2wtM6cGELohKb%2FTIuCiR%2F4KnrS1lMSwAdjngQaeUSU2okn2RdJyPwODOfLXXMtV1ZnYteaAmNcGw8ed69hvxXovx8gWOWdnxUl3fBjvFRAlPW7xPYEmOv4Fa1zTCjptA4dUo3YecXWFjUqf%2FJczjg%2BynuXBmmOVXARpK7StxJRmdQ%2FtW%2Fc%2FYnJ%2BuFd9sv5m0mc0%2B54j8wAkDA%2FKXS3bwiI5ILvs5sdNdXIQw2uZG6dkOFY9i%2B8Gp72SdnZt7SID9k49p7f1We93cc2Le4y9ctef8JEqKCbPrvJNFp1P1wuQ7ElN2mjb6VVdMJ3gn8IGOqUBcMzdlYCNq%2FLOYdNWrWtoclODXlHrfhRk9C2tAU8koaMfnr0eFPv4PqHKMfdK8sIg%2BRxBQnlCs5OLbKD8My15%2FRd8QhHOqeDYEzg2A9v9id0DswQL%2BpI%2Bwgswqk02Hiwm48OU0B04wVjKyhxUWxk9zMtsd%2Bs2xUnrXWEz%2BH69M4oh64fg8ohccnAIdy%2By8hBKUi6DmAfZ8QGEUK88zrKwkTCOzInP&X-Amz-Signature=f85586136b96b567bafccaff7b83d7ed8e991ac0fcee1ce6cd835022b626fcdd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
