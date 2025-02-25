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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656ECGXBM%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T031623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIHzMV10GriDrVuGEaigVGH8DRi8wY7JsROGXkulWfOBCAiAlkbZQh0QAsbuHECKeh28gtXPz9Wfh675JkG52RkkKkir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMlDya4S5vN7r7NZYDKtwDe3tVTpzAd0qXNwC17QdcQW9QLC6%2FldzX0ChaPVkKP%2Bg2Ft6tF3ZPxLIftZGMo%2BCxVhvBxq1q9iVG8YMIKQc3WLT98JxFWYxUwSslxacWzCLdQ9dSmPEBcpYPzRWbugrtu8fpXy%2FXM99TKe6miM5OtsP%2F0AH9KlYeOKQ68JjqEJ4d5sX1HKdbyEdETjHV2wDMFz836Zy4WCOtrQkxjly4ejSJXdtCXq9v9a8gCZuFAPs5VIc9jjG8gw3bKq6moK74HIlo0EIE8t72YdJ%2BpRThH32rBxVif9eZvpk0aY2FYCbRe22M2PX8tqSWE2bq2%2BoYTlocCAA2ZArBHqKEMMg%2FY%2F6PxkhUsM7ddYGp1EMSACJwqypIcKOSA0tOHW6ZQM26QF2RzNhRB3HiHrvAWkBeI%2FVbBNiE8LQND%2BVVjor%2FNZKARVQQG5ddrrK2R7iVXVz2cCXcfrQht3mpE56GPEcHztNvQuKl1ZCAtGWzNmaglH9MQQVIpgj%2B497qqNiwA%2FD23z7%2B29whJ5%2BpUe9AEmekG9W8ee81WsbP2sTmx9uR0SNUv1fVZNWRRQlCW69Mh3YzMdsFWQKsJAn%2BWyTmTNzJINPEx6xV%2BLCqeXI%2BQlRfCvYgN0DXBcEQSS48EsMw0oL0vQY6pgEB3dgVg9WjH8d30DoJ6y1EI%2F0v1c3Hu1l1IYyEHAlwc0AldsogkzayY%2BQv0dPXZYaxdhJSTsiFhVCPbfF7ZFAE7WmefLJeMDQjHqmoamPe6JPwra%2BKzparUMRJ9Z5Xm%2BxzYaxHxJH1F28FzustbjYeqeb9prwa%2BzQg35L%2By6ucILuwVt7suc0ITHnd7lHJEUYnbVvWJKEKjdOvhcdr8lR3s3btrU1y&X-Amz-Signature=e447a3c58ad783220e328dda8917efd14ac72f875fdc124746a9f76d24dc102c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656ECGXBM%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T031623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIHzMV10GriDrVuGEaigVGH8DRi8wY7JsROGXkulWfOBCAiAlkbZQh0QAsbuHECKeh28gtXPz9Wfh675JkG52RkkKkir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMlDya4S5vN7r7NZYDKtwDe3tVTpzAd0qXNwC17QdcQW9QLC6%2FldzX0ChaPVkKP%2Bg2Ft6tF3ZPxLIftZGMo%2BCxVhvBxq1q9iVG8YMIKQc3WLT98JxFWYxUwSslxacWzCLdQ9dSmPEBcpYPzRWbugrtu8fpXy%2FXM99TKe6miM5OtsP%2F0AH9KlYeOKQ68JjqEJ4d5sX1HKdbyEdETjHV2wDMFz836Zy4WCOtrQkxjly4ejSJXdtCXq9v9a8gCZuFAPs5VIc9jjG8gw3bKq6moK74HIlo0EIE8t72YdJ%2BpRThH32rBxVif9eZvpk0aY2FYCbRe22M2PX8tqSWE2bq2%2BoYTlocCAA2ZArBHqKEMMg%2FY%2F6PxkhUsM7ddYGp1EMSACJwqypIcKOSA0tOHW6ZQM26QF2RzNhRB3HiHrvAWkBeI%2FVbBNiE8LQND%2BVVjor%2FNZKARVQQG5ddrrK2R7iVXVz2cCXcfrQht3mpE56GPEcHztNvQuKl1ZCAtGWzNmaglH9MQQVIpgj%2B497qqNiwA%2FD23z7%2B29whJ5%2BpUe9AEmekG9W8ee81WsbP2sTmx9uR0SNUv1fVZNWRRQlCW69Mh3YzMdsFWQKsJAn%2BWyTmTNzJINPEx6xV%2BLCqeXI%2BQlRfCvYgN0DXBcEQSS48EsMw0oL0vQY6pgEB3dgVg9WjH8d30DoJ6y1EI%2F0v1c3Hu1l1IYyEHAlwc0AldsogkzayY%2BQv0dPXZYaxdhJSTsiFhVCPbfF7ZFAE7WmefLJeMDQjHqmoamPe6JPwra%2BKzparUMRJ9Z5Xm%2BxzYaxHxJH1F28FzustbjYeqeb9prwa%2BzQg35L%2By6ucILuwVt7suc0ITHnd7lHJEUYnbVvWJKEKjdOvhcdr8lR3s3btrU1y&X-Amz-Signature=12ca2f4b7b14b1064de700cc2f05a5537b81c2df8838a118d3cd4b54c9aaa0af&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677WYHXHD%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T031625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIGfFzCLN4LhEQOYF7GsR%2B%2B8pQOZ9bw7zpiWZa7H2LUznAiBJxw7MwhXTlJyDjirI7SbOfPaMmzQfEQ1PQPnqhfKiGCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMorNYWPV%2FBrM1IJ2WKtwD50uwawpD3BXthlzsf8M9X5zWMC0S5eoNFzBtH0tyLXdF6XTkE7Ymvv3kC%2BdPvQ8iFXA3wL4eRxRzgZWJqdVRK6yzuvHHwQk9SB1Z1uAbSerUCNeEy9BHQDZlpVi7xwFM2nZavCA7zoK%2BM%2FvocEhYhWc%2BfQXwssufoAvziBcggZhgoUcRXqmvjDbisQAZqNOgsLC7gHEe2MnmlQ3IWIzmOz0ieBIlOYYHC2u3CxnevQJocobow7%2FtDlWif%2F4XOa2TzOpMGF95juQnJVHAMtYMabY5lEe0bFbJwZcHHtrA5vpeNlXyIzAXdBmlGSZYcQ%2ByqBpWeCfLJXNrKnCNw6NvjtWP3eZt0BLVI1C8l8W5sZYHF3OstfPsQIXZengs%2B%2FZQuc%2BnWYRzXcPpfGccL91LukHZF6u3SRr%2BB4s7BPhOjXi%2FuDXN76v4DMRbh31JwA%2Fep1AeoxjJ4mTP36vnDqK0ZlJaWg3f7U4Ho8nPUyo5Ap0tUIEcnwivsd6%2F80Wgs5dtKV2I3w4mb5Bb1%2BGgoyb8HEKXlKS%2FsvnhQth8t32E5baNGhYrUjXAIyfkByMs2eTCe66bKE7F8QEF8QD%2BWIwzxoynKhnRWTcMTkL7Mkkm5cK8JxtHoovosv7IP5cwxIL0vQY6pgFkdYQxOCw2hhsbnHGDO2ElWoO43tG1QrH2O9CSDObH6dqGpMagFrElGleopQrTrn4MQjWa%2Brwegq2Y4VxJ1H8tFzzWn3PScqL09DlxATPkj9QsEXKmRUlbn9iY7J8Dk9XPFsGj07J7gAUq4xHXQYOnmNaLpOGgjthM8maONnMxzQUQryO%2B1PcfRGm516hjzfWtXoYyw9FsX%2Fk5IrX6bhudgPKrVAng&X-Amz-Signature=81bb547ad37e7cc1318e56f2b42321e9cedc0a41d8c65904979abe3489fa0b86&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHRC6STK%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T031625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIDEiJtnY%2BYywyFq3fzp4uH7hM09gVQCNB9%2F93nYSE4LFAiBXG%2FS%2Fa3oUiSGW%2BeGwDxstcoIhthgral9N%2BirP0qn2kSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMrU8cUJ4p5OeIaeR7KtwDyJSjumRgMpcW5rB%2B6ta2okfYqQemmHgQGLpc04jXMYQEugz1TE79olsejohKHBQeLTdW%2BqOLryT%2BzLi3xCYBtXWOl1VsByfa3N6xak%2BqCfHKkhFlVB1MQPLnUzTr%2BcFXaphKHmd5cGH7RiBGTQk22KMRCYNogG6ePVHy%2BPRNuSdoXO%2FOcG3qQVdrlmWw9IONQE4zKqbcG71%2BZOJmenoEbk1fL%2F6cJyYiJFOvqzZrmnvN%2Bstc%2BL4Yyr%2BBQkVz2akNpEM4oQ6uvseix9FTNn9mOCG725PhmhhbMV5JhGq1LzbRvOxUQsxs3pbkCEydy9HWnJnOVPV1HB1d%2BerowqVi72HKsu1nM2gRugtUZ1Cq3U64RASbxPudBkan%2BHDysquoa%2B%2B1086pxFmkgyN09bnDQrsrI%2BIGqFUauugBtjIXSf%2F0J3Ig%2BsF2AwrmBEObOLO661mdVDH%2BmZ6RZ5bel2K5XYr%2BYY4RMXpOlbLxPA3SNExix%2BjC4%2Be%2Ff2%2BRfZMoACTNJ0FPVEWXzFrzAYDSZZDGx9UvEcfWZ%2BPtzQssJCcCvmKrt2k4fVGjUd2eAFsRlkUpUmg3SmaWv4xukJ5cwsFuQOTZRm%2FbkKR9PbWJIBAnh2hN2fIBBJxUe0bopX4wzYL0vQY6pgHVUySZmPMi4fRSJxVw2mqSTSEqvGFHMFfZjUqz%2Bl%2BFwkxG%2Bh8xfnuM6fZgHBSVdUZrmWUyrcQydIzye6QM1bUMKdVzrMYE%2FfQ08hx0x%2FdXoO9JyShalHUE3YcX4T%2BTQm9jBBIwgtypasjd9ZQqQhBdytZtbfKkiKXI8gilrOKejzBKJcvhcLKNbji64Ir3yp7itcXNVd2UxokKk4mskQY28X3575RT&X-Amz-Signature=1c50eb8bbeb1cc92e6a3ca474d39c49d41bc29f6e35444f2742accb82ed30ee7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656ECGXBM%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T031623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIHzMV10GriDrVuGEaigVGH8DRi8wY7JsROGXkulWfOBCAiAlkbZQh0QAsbuHECKeh28gtXPz9Wfh675JkG52RkkKkir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMlDya4S5vN7r7NZYDKtwDe3tVTpzAd0qXNwC17QdcQW9QLC6%2FldzX0ChaPVkKP%2Bg2Ft6tF3ZPxLIftZGMo%2BCxVhvBxq1q9iVG8YMIKQc3WLT98JxFWYxUwSslxacWzCLdQ9dSmPEBcpYPzRWbugrtu8fpXy%2FXM99TKe6miM5OtsP%2F0AH9KlYeOKQ68JjqEJ4d5sX1HKdbyEdETjHV2wDMFz836Zy4WCOtrQkxjly4ejSJXdtCXq9v9a8gCZuFAPs5VIc9jjG8gw3bKq6moK74HIlo0EIE8t72YdJ%2BpRThH32rBxVif9eZvpk0aY2FYCbRe22M2PX8tqSWE2bq2%2BoYTlocCAA2ZArBHqKEMMg%2FY%2F6PxkhUsM7ddYGp1EMSACJwqypIcKOSA0tOHW6ZQM26QF2RzNhRB3HiHrvAWkBeI%2FVbBNiE8LQND%2BVVjor%2FNZKARVQQG5ddrrK2R7iVXVz2cCXcfrQht3mpE56GPEcHztNvQuKl1ZCAtGWzNmaglH9MQQVIpgj%2B497qqNiwA%2FD23z7%2B29whJ5%2BpUe9AEmekG9W8ee81WsbP2sTmx9uR0SNUv1fVZNWRRQlCW69Mh3YzMdsFWQKsJAn%2BWyTmTNzJINPEx6xV%2BLCqeXI%2BQlRfCvYgN0DXBcEQSS48EsMw0oL0vQY6pgEB3dgVg9WjH8d30DoJ6y1EI%2F0v1c3Hu1l1IYyEHAlwc0AldsogkzayY%2BQv0dPXZYaxdhJSTsiFhVCPbfF7ZFAE7WmefLJeMDQjHqmoamPe6JPwra%2BKzparUMRJ9Z5Xm%2BxzYaxHxJH1F28FzustbjYeqeb9prwa%2BzQg35L%2By6ucILuwVt7suc0ITHnd7lHJEUYnbVvWJKEKjdOvhcdr8lR3s3btrU1y&X-Amz-Signature=c1823bc0b476b95c7ed1dde5f21593dbbbc14a2b0884c56a1985eb772ad6466a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
