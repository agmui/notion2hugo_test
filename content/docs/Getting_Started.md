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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ3MN2CD%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T003740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDt4kFswFxgCUo2O0k%2BpG0dju4r1C8usW1OPkwqLYzniQIgYfshH4Q%2FT4xX0kgW5wBvhu33xGtXwt9ExydiNaJ4WcQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOEIhu6J%2Fv%2BiSZgKQircA%2BGThhJ%2FiNadSEdJbC7uXhQs6wAaHLKsnrbGNsUAB%2Bylf06TLyiiB4JX1iHa3C%2Bc6UZIR5PmVAdqvOZtlMHlDIueevdqPRBz3sLmLu%2Bynthbmr%2FQL0EGiH3S%2FNIFoOx5REXLrvdTBMXPW5XzUirdkqrNiib0%2BWy1BQajpQBYmUiHz45bY3ec6LjZcIXY10MLTWZETnlQTFrt2yKS1ZylCU9rNKf9WEh6AtlyWFPmijtXM6Oe0BQQ40eE%2BSa6VCQ1KY36o6rZuSG9DpeuzgoVNiDYW1rUzexPGCxwnM1gfEvr5slWVcDXNtskJjeM7NBGOde%2Be7ft2HstidMOFDmK0HftN%2BYkobEidrXE6cloMb4JczcW098GoJHUSmeKCOsobM5EWCFoD9T%2FlEeXNHgswZDRqe6sTMJo101iKpRJT%2B2mWYSNnkalwqUClqsbpSqNvRLHYwY9BcBbvJM6XWrPf2B2UjQ2G3JiSX4OBJoHZHfVr3D7xAG2e4X96b7Ft8BS5M9zJo9jqb8N2Vbw9D9CgNsTTrZsPWWFuK%2BEllacuFZ8c0Q0yzH%2FEbZxf5XpVkEhF%2Bj4qAC0zGk7sPaXVHTjoNHqzkZXC98WCMJOs94thikltnpKSEqdP9zBLLhzMILOi8AGOqUBXqnReuDmOg6r8p8q4PK4MYetD5d2MUmM3B9lMFawwDpzvFhN6sPxL%2BlWw5lD7inC%2FevNf5Bh8AcQ5EQuusZtti6PZw5j9BWhAe%2FL9rlmG7JJtFbzmQyKrvMVVOdzEesdoarKB1zSpqzrsVJKLBqDfIVXPcYYD5njdH7YLsf0i7%2F6s2hTA98GUjOpiABgVabdTdIZUMtaESqJZw6%2BTez%2FBu%2BwEl1l&X-Amz-Signature=cdb166b8a424f7d7dc6853af40a9084b4e5c3a4d7cdde8f394662a459b5fd346&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ3MN2CD%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T003740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDt4kFswFxgCUo2O0k%2BpG0dju4r1C8usW1OPkwqLYzniQIgYfshH4Q%2FT4xX0kgW5wBvhu33xGtXwt9ExydiNaJ4WcQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOEIhu6J%2Fv%2BiSZgKQircA%2BGThhJ%2FiNadSEdJbC7uXhQs6wAaHLKsnrbGNsUAB%2Bylf06TLyiiB4JX1iHa3C%2Bc6UZIR5PmVAdqvOZtlMHlDIueevdqPRBz3sLmLu%2Bynthbmr%2FQL0EGiH3S%2FNIFoOx5REXLrvdTBMXPW5XzUirdkqrNiib0%2BWy1BQajpQBYmUiHz45bY3ec6LjZcIXY10MLTWZETnlQTFrt2yKS1ZylCU9rNKf9WEh6AtlyWFPmijtXM6Oe0BQQ40eE%2BSa6VCQ1KY36o6rZuSG9DpeuzgoVNiDYW1rUzexPGCxwnM1gfEvr5slWVcDXNtskJjeM7NBGOde%2Be7ft2HstidMOFDmK0HftN%2BYkobEidrXE6cloMb4JczcW098GoJHUSmeKCOsobM5EWCFoD9T%2FlEeXNHgswZDRqe6sTMJo101iKpRJT%2B2mWYSNnkalwqUClqsbpSqNvRLHYwY9BcBbvJM6XWrPf2B2UjQ2G3JiSX4OBJoHZHfVr3D7xAG2e4X96b7Ft8BS5M9zJo9jqb8N2Vbw9D9CgNsTTrZsPWWFuK%2BEllacuFZ8c0Q0yzH%2FEbZxf5XpVkEhF%2Bj4qAC0zGk7sPaXVHTjoNHqzkZXC98WCMJOs94thikltnpKSEqdP9zBLLhzMILOi8AGOqUBXqnReuDmOg6r8p8q4PK4MYetD5d2MUmM3B9lMFawwDpzvFhN6sPxL%2BlWw5lD7inC%2FevNf5Bh8AcQ5EQuusZtti6PZw5j9BWhAe%2FL9rlmG7JJtFbzmQyKrvMVVOdzEesdoarKB1zSpqzrsVJKLBqDfIVXPcYYD5njdH7YLsf0i7%2F6s2hTA98GUjOpiABgVabdTdIZUMtaESqJZw6%2BTez%2FBu%2BwEl1l&X-Amz-Signature=78a63ddd821be3976d06173a4ce964444ab29ac2c0fea3be9e461ce0289ee275&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665YA2T5D%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T003746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOOrC4afSPYUWHZ4Pa1c1S%2FUlzkcos97x3rFhcmFWXOQIgDMpEZ%2FsdQaLwT344cv40bsJodYEO8JIxQ1IhN8wMDiAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITo7Nw%2FKXl5m6tDCyrcAwiNmh95Ihm5%2FK1dqPcY1eJco7TTVjndvcbGvbEg5r%2BJBisAh5NbFi5X6P9ScFmD%2FE6qSmx8rvi9fam25C1cC7lMU%2BwrFO66rA00%2BbkAhq55hEzhJC%2Bf4Y9gm5nlZKszjzlmRioJgmdeVrIPWW%2BYwcUSmT4qW2f8xJEI%2FyfXjWL8tb9LkoczryLBnCGgBkR79Tro%2FRJ9K02YtaqLSZpvOjYwYoXQYxPopNCGjsGf556NmB4XKCRmM94Hodc4iZeJ9Gjww5fo6rckAXcgmrsOUyRtC7Fyb9asAxJwB8JMXHaBk1xFiGwCXlWYUP9PQQq1olfCN1YilcjOhYX7obe0zOK4zU2wl8LoJGKJYGkICel29cWzjI1HWminGUpL44Yu%2FwJ7jsOQvM%2FNLS1P0wBzVgV2wHwcan%2Bgf1mbWpgEMML8xjFZVWN3WhY34GEoi8AjNKctOPYJyIK3YuPhZ5Jwy0kPAQs9rpcSbbEvQzUrKJpJtd%2F2nBig3%2FzDVGwyw%2FMuYvwTG3xzLM44kZZQmiq2c5YRSWMDn7B%2FIWxTjh2lMh4mHm%2Bx481zb0OtAkizpwkLfp%2F7Z6AIH9WpiOuqk79ocN8T5xXIQ2tSqHZyYY857o6x2HiqItlwEHnOHuhEMNjNi8AGOqUB3xlsxrOr%2B7CJhTW%2BAkHP6SKpOyfqGGM2krDrYFGBBTkKzrq7VSJw3th6E26Bxp6N1H4ErDKvs%2BzWccwrv9wxg%2FGQAfwvOv3kFU2e94xj%2BYDCtsZGCwii1paw4hhVWcJx19smR826sl3L3I2gPeSaarhvEfYCQKyRiC%2FnVQqU3CyeH04ag%2FwaUGWmcjBN%2Fg4QQnfRrDCNDgIG4Jky8mCsNVauxXmB&X-Amz-Signature=4a8eeafc71c6406a44446a078871ac88cf8316e0a0f4032da7acbe1dc20358bf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL2LJZZP%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T003749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDfXVYoRLIuXtIEd%2Bqf69mm5nk%2BbS%2FowzjRvcUlQFW%2FPAiEA0a%2BfNxFvFLmxxcMEtH8cgoBvvslxu%2BiOYgedh%2Fo%2F9CQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCoI1cIl%2Bu0l50RhBSrcA%2BaYtoEHHEbG4U0vD%2BLWEYT%2BhHawi3X9aYOqoYY6IgnWDoCULkds1%2B9f50E6ZyBQnKYa5TC8wh1ezH1vn%2BXekXh%2FNayScjPfY3ObZKgf9bEabmfjak4JgCmkNpV1yOnDtPskEY%2BQnO%2FxaOTJH8OTwL%2Fd5IvEO6yAxrbqI3Y4dWbivXi1HXMYjhFgST4IRUcAEL7Le3X9ned2xXwEHRtktmZfFmxnxzPovsjXTjT3b4tPUZPCsJkSFwD3t4HFVoGszL1vecDPhu0UUS%2FVcwE5QRujXIl5vSKC2vGaPac%2BQhJwWQqLhp%2FwgDe%2FIMZOMzpPga25pW2aNZBhM567VCMHl1LFSpW1HazJqH9frM345uXPdkyqJKjSxnEvfOy5LMAPjxmYMuP2rfLcOahuvaTYbzG4rbuatQ7RQWRaEc00UuP3LwsL9MIOxjwCeR5ek0Iqt%2Bm%2Bcx0Scq%2BYlO6VIMneo%2BLQjKAh26TQHKFTIrBI0hgHAPI4thNTZr774q56hkauu1IT6Ru4UckRqYAun7mAeu8y2pQ6svY7BWE4LH5PKuPIlXBPDTdYRBJFfGfKUhMt6tEiFk4o54proKFd4dmVp7fQJBw7RS3aaGBzHUckbC3hkuENHBw4YDlpPliZMKTOi8AGOqUBwld0NlqDnugMDjXPkbK8XeaDLsfOpJdjLgB2pAK2Qsp3DqM4ZUcKSrqPPXAzkpXEixsCpd6inNC7Xuijthvc3khG3ZKDucGMxeqde%2FJYUGpgL4sc4rNm6vL3Rt3XQekdOvoKvYoozvK32X89%2B1piab09byKbenuvUNs%2FctiJxE%2Fl2s7VXLcNWK46bcVlgfEpPNsmv9evUYGeYFPVhTobcIL3ihF%2B&X-Amz-Signature=716801217ec57071b05e4b7e2f6c34a134ff057a400b53944c216ffa3bd96d6d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ3MN2CD%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T003740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDt4kFswFxgCUo2O0k%2BpG0dju4r1C8usW1OPkwqLYzniQIgYfshH4Q%2FT4xX0kgW5wBvhu33xGtXwt9ExydiNaJ4WcQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOEIhu6J%2Fv%2BiSZgKQircA%2BGThhJ%2FiNadSEdJbC7uXhQs6wAaHLKsnrbGNsUAB%2Bylf06TLyiiB4JX1iHa3C%2Bc6UZIR5PmVAdqvOZtlMHlDIueevdqPRBz3sLmLu%2Bynthbmr%2FQL0EGiH3S%2FNIFoOx5REXLrvdTBMXPW5XzUirdkqrNiib0%2BWy1BQajpQBYmUiHz45bY3ec6LjZcIXY10MLTWZETnlQTFrt2yKS1ZylCU9rNKf9WEh6AtlyWFPmijtXM6Oe0BQQ40eE%2BSa6VCQ1KY36o6rZuSG9DpeuzgoVNiDYW1rUzexPGCxwnM1gfEvr5slWVcDXNtskJjeM7NBGOde%2Be7ft2HstidMOFDmK0HftN%2BYkobEidrXE6cloMb4JczcW098GoJHUSmeKCOsobM5EWCFoD9T%2FlEeXNHgswZDRqe6sTMJo101iKpRJT%2B2mWYSNnkalwqUClqsbpSqNvRLHYwY9BcBbvJM6XWrPf2B2UjQ2G3JiSX4OBJoHZHfVr3D7xAG2e4X96b7Ft8BS5M9zJo9jqb8N2Vbw9D9CgNsTTrZsPWWFuK%2BEllacuFZ8c0Q0yzH%2FEbZxf5XpVkEhF%2Bj4qAC0zGk7sPaXVHTjoNHqzkZXC98WCMJOs94thikltnpKSEqdP9zBLLhzMILOi8AGOqUBXqnReuDmOg6r8p8q4PK4MYetD5d2MUmM3B9lMFawwDpzvFhN6sPxL%2BlWw5lD7inC%2FevNf5Bh8AcQ5EQuusZtti6PZw5j9BWhAe%2FL9rlmG7JJtFbzmQyKrvMVVOdzEesdoarKB1zSpqzrsVJKLBqDfIVXPcYYD5njdH7YLsf0i7%2F6s2hTA98GUjOpiABgVabdTdIZUMtaESqJZw6%2BTez%2FBu%2BwEl1l&X-Amz-Signature=d70817a256108632b43d0d1e22bb99fca7dbc8884ab8c921fcb406340438326e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
