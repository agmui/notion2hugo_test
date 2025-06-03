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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q77NUBJS%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T071021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCo5VXEqaogSau1pQ8F2V%2BmHLSS9TYoUEFg4KQPkRym5QIgSa1WvM21Ga6n08MFu1pBUvkt6pSJlUYB3uHe2c1yn%2FIqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYyF8lGqpySPdm9mircA9vx7PnDaqUzQrPQGyZMAJS1G%2FZ%2BbaARBZBYsYSDA%2Be3uEpMKPojWofwW4Tly%2F892J2Hq0ssSVPVYSHImR5vYY2vsaEd61E7X%2BgBr3PfLABo7ibSImJnWJViniydcBAGuFZKUeVX5hU3tqPUISuDgkWpbC1eat%2Fq6SmjlzULYAJK6e6vc5Ler5%2FkpLJ%2BnbkmggM5YNItOOjhMvPUbjWNWBr%2FeBc%2FCXQprCe6T4sohhXvCsrN5GTAo9PkOT5rv9pi9TYeMBMBkw6PK7W7dmTXXu%2Bz2H4T3EFe3qTYq4VD8sCn%2BDCF6ekGLy1ydS7Z66SxsptW8P9aFunaVPPMyWtfGUVmH7mvScovlAEXE8tNvmDa0PExMKvJxyJjOzsyUqK9KLb7H7ZqTeEQqB22OsKRFbJwDYVrcocrjhjd8hCPj590zQ1qS8FY%2FMeU0hADAVF6xxOAb3Nhxr6oq%2BQ%2Bq5hE0EFgB8RJ1BDJSPnUp1VSf9Hc20ZA8038wVhN%2Fj3JRJP01wEvrv1uuJxXsTxChlA%2B8dJrd%2FqYXezd40wFWx94pBH5Yiy%2FJ6aAS6YTdxIcjoSqsxl615PG9pFv%2FgHNY1nA5Ew1HFWr2jwiR4vBUUtuCXN0QmgLi7Dkr5QXK4e8MICC%2BsEGOqUBBhLYzpThAchVAtXU3bJxMGXrAqmr5hfn6F4%2FwqVc2PQw6MUr7AX90xsHiMZOkzU2%2FOYuYbYmrslRb8OBB4X9tjYuuNr7F0kAXPoaSQMhzPKlbCj9ury%2BRc%2BqiArx5qjJyxd85UY1X1c7qhQEbgunpFm1nSQm8uL2m%2Ftmd61ZlkxDlO0cRpPm%2FfzL5hDlQgp8yyz3QIYXvA84Em08Q87eQVvq6y1L&X-Amz-Signature=784e48124187a53ce769f8cffffa28f7f17f40755fdefe1e6466873c0f6cd968&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q77NUBJS%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T071021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCo5VXEqaogSau1pQ8F2V%2BmHLSS9TYoUEFg4KQPkRym5QIgSa1WvM21Ga6n08MFu1pBUvkt6pSJlUYB3uHe2c1yn%2FIqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYyF8lGqpySPdm9mircA9vx7PnDaqUzQrPQGyZMAJS1G%2FZ%2BbaARBZBYsYSDA%2Be3uEpMKPojWofwW4Tly%2F892J2Hq0ssSVPVYSHImR5vYY2vsaEd61E7X%2BgBr3PfLABo7ibSImJnWJViniydcBAGuFZKUeVX5hU3tqPUISuDgkWpbC1eat%2Fq6SmjlzULYAJK6e6vc5Ler5%2FkpLJ%2BnbkmggM5YNItOOjhMvPUbjWNWBr%2FeBc%2FCXQprCe6T4sohhXvCsrN5GTAo9PkOT5rv9pi9TYeMBMBkw6PK7W7dmTXXu%2Bz2H4T3EFe3qTYq4VD8sCn%2BDCF6ekGLy1ydS7Z66SxsptW8P9aFunaVPPMyWtfGUVmH7mvScovlAEXE8tNvmDa0PExMKvJxyJjOzsyUqK9KLb7H7ZqTeEQqB22OsKRFbJwDYVrcocrjhjd8hCPj590zQ1qS8FY%2FMeU0hADAVF6xxOAb3Nhxr6oq%2BQ%2Bq5hE0EFgB8RJ1BDJSPnUp1VSf9Hc20ZA8038wVhN%2Fj3JRJP01wEvrv1uuJxXsTxChlA%2B8dJrd%2FqYXezd40wFWx94pBH5Yiy%2FJ6aAS6YTdxIcjoSqsxl615PG9pFv%2FgHNY1nA5Ew1HFWr2jwiR4vBUUtuCXN0QmgLi7Dkr5QXK4e8MICC%2BsEGOqUBBhLYzpThAchVAtXU3bJxMGXrAqmr5hfn6F4%2FwqVc2PQw6MUr7AX90xsHiMZOkzU2%2FOYuYbYmrslRb8OBB4X9tjYuuNr7F0kAXPoaSQMhzPKlbCj9ury%2BRc%2BqiArx5qjJyxd85UY1X1c7qhQEbgunpFm1nSQm8uL2m%2Ftmd61ZlkxDlO0cRpPm%2FfzL5hDlQgp8yyz3QIYXvA84Em08Q87eQVvq6y1L&X-Amz-Signature=28edd0e05745c8645041175c3c3e567753b7d11df9ff7d1d9b10110d9df49872&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q77NUBJS%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T071021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCo5VXEqaogSau1pQ8F2V%2BmHLSS9TYoUEFg4KQPkRym5QIgSa1WvM21Ga6n08MFu1pBUvkt6pSJlUYB3uHe2c1yn%2FIqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYyF8lGqpySPdm9mircA9vx7PnDaqUzQrPQGyZMAJS1G%2FZ%2BbaARBZBYsYSDA%2Be3uEpMKPojWofwW4Tly%2F892J2Hq0ssSVPVYSHImR5vYY2vsaEd61E7X%2BgBr3PfLABo7ibSImJnWJViniydcBAGuFZKUeVX5hU3tqPUISuDgkWpbC1eat%2Fq6SmjlzULYAJK6e6vc5Ler5%2FkpLJ%2BnbkmggM5YNItOOjhMvPUbjWNWBr%2FeBc%2FCXQprCe6T4sohhXvCsrN5GTAo9PkOT5rv9pi9TYeMBMBkw6PK7W7dmTXXu%2Bz2H4T3EFe3qTYq4VD8sCn%2BDCF6ekGLy1ydS7Z66SxsptW8P9aFunaVPPMyWtfGUVmH7mvScovlAEXE8tNvmDa0PExMKvJxyJjOzsyUqK9KLb7H7ZqTeEQqB22OsKRFbJwDYVrcocrjhjd8hCPj590zQ1qS8FY%2FMeU0hADAVF6xxOAb3Nhxr6oq%2BQ%2Bq5hE0EFgB8RJ1BDJSPnUp1VSf9Hc20ZA8038wVhN%2Fj3JRJP01wEvrv1uuJxXsTxChlA%2B8dJrd%2FqYXezd40wFWx94pBH5Yiy%2FJ6aAS6YTdxIcjoSqsxl615PG9pFv%2FgHNY1nA5Ew1HFWr2jwiR4vBUUtuCXN0QmgLi7Dkr5QXK4e8MICC%2BsEGOqUBBhLYzpThAchVAtXU3bJxMGXrAqmr5hfn6F4%2FwqVc2PQw6MUr7AX90xsHiMZOkzU2%2FOYuYbYmrslRb8OBB4X9tjYuuNr7F0kAXPoaSQMhzPKlbCj9ury%2BRc%2BqiArx5qjJyxd85UY1X1c7qhQEbgunpFm1nSQm8uL2m%2Ftmd61ZlkxDlO0cRpPm%2FfzL5hDlQgp8yyz3QIYXvA84Em08Q87eQVvq6y1L&X-Amz-Signature=ca3b26c48d8ac43cdcb0fd235eb0666ebf68c0308da2e3998fd704189c2931ae&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAPJWFXY%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T071028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIDbxJDb5X0IvV8ObCOA6ipj9yYp%2F0HoSysoH1hrR%2Fy7rAiEApIIAUwHKIK9c6Y58lq3PfZRAb%2Bf8TM7iM3IpKBRsrhQqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK9gBzARSaQTv3toYircA2FpibIoO0FQ125paNXmQ9jGD4gUVpFxMVoJ9WO2iJpPonw60P2%2BFf0gS8BZBvWn3YdRQIBjX3NblNRKjV9MmcCqiwEnoNOtbb6XHBIPdEdNaUCtJwmK6lkX1IrPZP7dBpETc6btZ2WONycji9ZL0rGmj0O4qvBQ96iBdtc5baBKrKptTFQyNJDlczqAZPP7Lsa1oiCDaX1uJcGbg4Z31Yx2wcYwscPg0HHC4gjYZYkNX7HxUFoktPnFJLv5RwUC%2FL%2BY6Q3JbmZHs9gbf74W2P%2FvUXNXAlmKh3fL70fWCtEUFzNgMZFqwOGA1QTvAYXbkIzmBqELE5mdjtD3F2RqtGAg99aij340eO263e3Cmv4Vafl9qUrFd%2BoRdrA4sVl6WKUcZuNzCAQ7EOTeSqP2EDLj85MnnLumB%2FWrPVVBAHblECXgSn8ppNo4TctEipalV%2Fr5F46le4Y1cMApriIvrS8qZwp5aefD82%2FWVaFZDVP%2BonoisjOGRRkUnG9uTCREI%2BV89FIDnFpNNfBWyvxUNvXxu2X6OcsZ%2FU7gx%2FJAXYG7Rod4koU01N1HgvXX%2B%2F2tpHJC00RdrbRFEjgkixYsSlnOf4PiUN89i9vzeliyE%2B0zFWWjXMgkMsm30y%2BmMKmC%2BsEGOqUBmbsQ5GTVb5IMW7u07FzkqxiCGX44TQVRDr3h47XrbOjhzjtl6JrRZ5KQpev4xxxOvPhaS28UMjgOm41F1bXpioRb6seGLapO%2B0jwIXaIcpjm6Y9x4ryfykse4iL0v7ymZ2V2KAJcYC2Qe5NjBmkz38hIsaatIMTtjw%2FVnXglPyUBmVAWUL3GHIfirHSPylmYmT8KNZRnA3pScvsbuq5p3j6zW7Wj&X-Amz-Signature=156c7d7bb2340eae9a870d0f5cefcd9e6564700eb987167bcecccc6f25be4400&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466752XTMJM%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T071032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCpyKN1q9ShO8fzihEV9qTtUI1w0XJe7fYGQ4mtmO2%2BgAIgBSgtWCEuxl16niFtFDlu865B6GpFmvk4H8L0fnaZcYIqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwJ%2Fpyd3%2BNzbWEMKyrcA%2BmuI58oUvcWfhnJORnsg5tYNqDvHRfrec8FCkLyQT1gzECqiz0K9U5EA2rueHH33T6fWruK6Ios3ZBFitJF2iInBByr1pGgc%2Fu7%2BizzZqY3lR1c0TGQ6hi4JuuLP3R0MF93qZ%2Fe%2Fk5jcaPex94%2F6mWvK0Da2M37pXs3rUlt2aISYko73lWhoV2eZ18hhakCd0xgEg5Xmy1xsi2%2B99ytZyYvRZW9f0u2P9cvUmMFbb4EHS4o7bO8QJKCyC2FpRUBaFa7ERgYZDQWrjcQMOf4ezPVuWNNKhar1h8olabetkWL8klLZAJUU0JY2v1xL13A058r1kExSZcqyewZ0%2FwM9Z%2BlqbLwtL6sS9cF6OyddtXBu%2FFae3v23OpXPWiSWO0V0vX75HBi7y1ZZgsMEQtHR6ySR%2B%2B9G5ZQWc9lBPn6i34DcsoO2Y7TTV47e86JXQOATw2CTGiXL8TJNAOb4GAzHlsVxcFbqu2DP9h9qCdBLU03nVXFrjt7U2HSBYPzdgLoN2JoSxW4yUEuX7vE2YlrvTdQGXjXhxMpLNin3vWHazJMfx8stiu%2BVcIdMePV8xJsHtMObyb5JCvEjd7olOn2W%2FJBrrcBBqPl3Xnd0XwkZ7%2BiUOX63XMylxRba6oyMICC%2BsEGOqUB4Z6qRs5s4hIOtZFUxLf2HPkQ4c%2FLcRfAigbdVcBjBmjOYUfJtqujjygHO%2FNluSEhrP3U4yjl0nl4mCWXBkHqlY4zCVHp7I9L8jKZ8GgDyu1J0sa5xXqer%2BxXoRJy9nEw3lE2jNIpC%2Bl%2FW533NBBgQYuZ9JauVGxGfAL6fZYtGO6AUONj6DqAGgshjXN1vNk5%2B8t4ihPjfL0SYrmB%2FOzF9XfzEIS6&X-Amz-Signature=dc0c9d562b3581b9874950c7a831c69e831c61362e6b81abec1ce3e06b41b0b2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q77NUBJS%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T071021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCo5VXEqaogSau1pQ8F2V%2BmHLSS9TYoUEFg4KQPkRym5QIgSa1WvM21Ga6n08MFu1pBUvkt6pSJlUYB3uHe2c1yn%2FIqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYyF8lGqpySPdm9mircA9vx7PnDaqUzQrPQGyZMAJS1G%2FZ%2BbaARBZBYsYSDA%2Be3uEpMKPojWofwW4Tly%2F892J2Hq0ssSVPVYSHImR5vYY2vsaEd61E7X%2BgBr3PfLABo7ibSImJnWJViniydcBAGuFZKUeVX5hU3tqPUISuDgkWpbC1eat%2Fq6SmjlzULYAJK6e6vc5Ler5%2FkpLJ%2BnbkmggM5YNItOOjhMvPUbjWNWBr%2FeBc%2FCXQprCe6T4sohhXvCsrN5GTAo9PkOT5rv9pi9TYeMBMBkw6PK7W7dmTXXu%2Bz2H4T3EFe3qTYq4VD8sCn%2BDCF6ekGLy1ydS7Z66SxsptW8P9aFunaVPPMyWtfGUVmH7mvScovlAEXE8tNvmDa0PExMKvJxyJjOzsyUqK9KLb7H7ZqTeEQqB22OsKRFbJwDYVrcocrjhjd8hCPj590zQ1qS8FY%2FMeU0hADAVF6xxOAb3Nhxr6oq%2BQ%2Bq5hE0EFgB8RJ1BDJSPnUp1VSf9Hc20ZA8038wVhN%2Fj3JRJP01wEvrv1uuJxXsTxChlA%2B8dJrd%2FqYXezd40wFWx94pBH5Yiy%2FJ6aAS6YTdxIcjoSqsxl615PG9pFv%2FgHNY1nA5Ew1HFWr2jwiR4vBUUtuCXN0QmgLi7Dkr5QXK4e8MICC%2BsEGOqUBBhLYzpThAchVAtXU3bJxMGXrAqmr5hfn6F4%2FwqVc2PQw6MUr7AX90xsHiMZOkzU2%2FOYuYbYmrslRb8OBB4X9tjYuuNr7F0kAXPoaSQMhzPKlbCj9ury%2BRc%2BqiArx5qjJyxd85UY1X1c7qhQEbgunpFm1nSQm8uL2m%2Ftmd61ZlkxDlO0cRpPm%2FfzL5hDlQgp8yyz3QIYXvA84Em08Q87eQVvq6y1L&X-Amz-Signature=665cea97fa60fbd6a1b181f38f3bbe75297d5753be4acf4deeadebb49fb17546&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
