---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW3BN3PP%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIAEuPB741%2BbNLF3VKVQ55gI9ZwpbGHc9D1bkSyje3iIOAiEAmv2YDBuPrl4eggYy5kTXTOSKwmVzeYmR4B4oTTAZvL4q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDG6tAHn2A2he%2FalaPSrcA0gmIFOKfgJK4tE%2FgXVlGq81mM4deREriCt09%2BlK%2Fn7MlVLEmlhktp%2FiOQFf3rdiGhblbWLHWelb9TbKt0lUvyvFIcMpKKKPax7S0mO4c9q61Pjv7ZK0gDxHrk%2BCbFmRfuZ0riKKQZqVMRR%2BAtXMDEI4AB%2FUcTyOe6WCK4%2FXMzlO5L7sN%2FIw2cBjHQI07%2B7TPqYE%2FwS1LQXkr9u53NxSjRTP9XhTnImpsPpQXlDW0puKU72%2B5lkbj9RXoT7mlViUJCAivDGEZitDifTYeX6aIN60Fr4%2B3SBtHp9bkXNjocp4Z1AB3fcLgYkTvNglj0%2FwBPuBMlJJUsSstBUeYuVNquFUp1Id3nri5GR8SlstUo1AIZ6rM4neguJNZd6uVoyl3TnwS%2FPHCAg%2FX3KseaoZ%2BNeBR5lRUHbT%2FzHjpIvmtJO971CLeWitY3t0kU7GBT6LqDPps1IqCed%2FAJlj1RM3CCLhLi2ln5UzRPGvr%2FDC3qYtB2xa%2FbZQoEtUoM4%2FgFjVAOJ%2F5vTzcbG3MSB1Tr%2FJGSKLVndq6P9Kutu63CkHe7GnVESy8y7uBWpbA17CPJR0%2BQvsJUrV0%2FKZx36dScliKyWz7fXfQ98iAAEzzeLuVALaSIFgfGBVIfUCgo51MMa5q8cGOqUBLOGJLZaJZUmrP%2Fto4HTLgdrmzDwyLZxABzuAPG4TmgCnRDaGB0RMLIlUdIxUo44oCl5ynvPxLC9Bd4ZjwMXZNq5lhoPOh%2B5c27n6QKNC8QwB4p4FTqt3bUjNmch6lylFodPPGK9uVFbD%2FOcOZ%2F2zc7kfOLpsHguxxeGxhESpjQvKK93dyyqHo8bl4w2XBPA0zFsJw6Zb4kIdYpiNEHR6svasTfcH&X-Amz-Signature=3f7a6997e75cef703c1d33cb4987d12f45614ae29edabcafca796ee2fd421fd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW3BN3PP%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIAEuPB741%2BbNLF3VKVQ55gI9ZwpbGHc9D1bkSyje3iIOAiEAmv2YDBuPrl4eggYy5kTXTOSKwmVzeYmR4B4oTTAZvL4q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDG6tAHn2A2he%2FalaPSrcA0gmIFOKfgJK4tE%2FgXVlGq81mM4deREriCt09%2BlK%2Fn7MlVLEmlhktp%2FiOQFf3rdiGhblbWLHWelb9TbKt0lUvyvFIcMpKKKPax7S0mO4c9q61Pjv7ZK0gDxHrk%2BCbFmRfuZ0riKKQZqVMRR%2BAtXMDEI4AB%2FUcTyOe6WCK4%2FXMzlO5L7sN%2FIw2cBjHQI07%2B7TPqYE%2FwS1LQXkr9u53NxSjRTP9XhTnImpsPpQXlDW0puKU72%2B5lkbj9RXoT7mlViUJCAivDGEZitDifTYeX6aIN60Fr4%2B3SBtHp9bkXNjocp4Z1AB3fcLgYkTvNglj0%2FwBPuBMlJJUsSstBUeYuVNquFUp1Id3nri5GR8SlstUo1AIZ6rM4neguJNZd6uVoyl3TnwS%2FPHCAg%2FX3KseaoZ%2BNeBR5lRUHbT%2FzHjpIvmtJO971CLeWitY3t0kU7GBT6LqDPps1IqCed%2FAJlj1RM3CCLhLi2ln5UzRPGvr%2FDC3qYtB2xa%2FbZQoEtUoM4%2FgFjVAOJ%2F5vTzcbG3MSB1Tr%2FJGSKLVndq6P9Kutu63CkHe7GnVESy8y7uBWpbA17CPJR0%2BQvsJUrV0%2FKZx36dScliKyWz7fXfQ98iAAEzzeLuVALaSIFgfGBVIfUCgo51MMa5q8cGOqUBLOGJLZaJZUmrP%2Fto4HTLgdrmzDwyLZxABzuAPG4TmgCnRDaGB0RMLIlUdIxUo44oCl5ynvPxLC9Bd4ZjwMXZNq5lhoPOh%2B5c27n6QKNC8QwB4p4FTqt3bUjNmch6lylFodPPGK9uVFbD%2FOcOZ%2F2zc7kfOLpsHguxxeGxhESpjQvKK93dyyqHo8bl4w2XBPA0zFsJw6Zb4kIdYpiNEHR6svasTfcH&X-Amz-Signature=c1b43fc4b046db6f9a8b7fa0811d5fe2719cb200f4f8bc2e1a8523b5b42c039a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW3BN3PP%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIAEuPB741%2BbNLF3VKVQ55gI9ZwpbGHc9D1bkSyje3iIOAiEAmv2YDBuPrl4eggYy5kTXTOSKwmVzeYmR4B4oTTAZvL4q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDG6tAHn2A2he%2FalaPSrcA0gmIFOKfgJK4tE%2FgXVlGq81mM4deREriCt09%2BlK%2Fn7MlVLEmlhktp%2FiOQFf3rdiGhblbWLHWelb9TbKt0lUvyvFIcMpKKKPax7S0mO4c9q61Pjv7ZK0gDxHrk%2BCbFmRfuZ0riKKQZqVMRR%2BAtXMDEI4AB%2FUcTyOe6WCK4%2FXMzlO5L7sN%2FIw2cBjHQI07%2B7TPqYE%2FwS1LQXkr9u53NxSjRTP9XhTnImpsPpQXlDW0puKU72%2B5lkbj9RXoT7mlViUJCAivDGEZitDifTYeX6aIN60Fr4%2B3SBtHp9bkXNjocp4Z1AB3fcLgYkTvNglj0%2FwBPuBMlJJUsSstBUeYuVNquFUp1Id3nri5GR8SlstUo1AIZ6rM4neguJNZd6uVoyl3TnwS%2FPHCAg%2FX3KseaoZ%2BNeBR5lRUHbT%2FzHjpIvmtJO971CLeWitY3t0kU7GBT6LqDPps1IqCed%2FAJlj1RM3CCLhLi2ln5UzRPGvr%2FDC3qYtB2xa%2FbZQoEtUoM4%2FgFjVAOJ%2F5vTzcbG3MSB1Tr%2FJGSKLVndq6P9Kutu63CkHe7GnVESy8y7uBWpbA17CPJR0%2BQvsJUrV0%2FKZx36dScliKyWz7fXfQ98iAAEzzeLuVALaSIFgfGBVIfUCgo51MMa5q8cGOqUBLOGJLZaJZUmrP%2Fto4HTLgdrmzDwyLZxABzuAPG4TmgCnRDaGB0RMLIlUdIxUo44oCl5ynvPxLC9Bd4ZjwMXZNq5lhoPOh%2B5c27n6QKNC8QwB4p4FTqt3bUjNmch6lylFodPPGK9uVFbD%2FOcOZ%2F2zc7kfOLpsHguxxeGxhESpjQvKK93dyyqHo8bl4w2XBPA0zFsJw6Zb4kIdYpiNEHR6svasTfcH&X-Amz-Signature=e40a3aa9523a8b9a9fb7e389f9e6d379526b8b125659fd0270b86a0b8eade648&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466374DZP7I%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIH6bRjQZGzGqOuX5MFBdHc1rFmzrq8FSzkoV1QKav9XgAiEAzkQGEG3dPOkoySuQYHqWNGira7JE7owdp4Ozp7P9RHkq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJBTrEiwK5qbfWjo4SrcA02%2BbYqyae34uRV2ojhjgyKTrK1a0NktLF4gUyCHtt%2BXwJ4tNaLeBly0JNQjHy%2FhLAXue9Xl9ARjcjQN10FYeKMsWZePLth8dx0JTXQzHe0rc6RlNnhjZqGW4Je29hcb9ZMbr%2BL9YzV5wrx9moMY%2BlY5iwlY4OxsW82Y9jFdsSm%2BoS8hXa79SD2lhwiFUtWqtpO1Qed0LhIcf7na2Sp3qjE4U%2BKJNaPe%2BLN865mampp2Vcj8ETtahMVHSd%2BR%2F7us0%2Fr9bYXm5I74SDLxN%2B1HZCvXdSqHBFLIY%2FzYGsOJNjYmyySoH2azDoyWfXQaliwehyho4oNpyV0lnqMivq92f2QHJLjsOF56WrzozWaO3%2BvDUmM%2FNzBLqMwv61YlX93VjvJrmk46agnl88ZZA7hx4lSIasLkj%2BVw6DIUMOmMSKaI%2B6jJhj4fcT7nI3ouIcz6l3uyrgFp6%2FIhjNUpH7uE05guTqZXVs5RDUTYwwc%2FO5XtLlHpPsKill0DQmSZ%2FkoKQNmohFLseOdbzd8DmbIBKNaFpdQQt%2FmgLzu8lyEUMc138agYfNED5HEeaXaZMa80pZfOD%2ByFH8km3qvtmaxqkCjf8o5Mj2u5GFtmATsaxVuzD5t96ovOjgOnZWW2MKS5q8cGOqUBIMGrWKy9XO6FuzOJsa115fVlypRUs4L7HfzD6WbEC%2FIzLuwrpkA0qusrTUPA4T3FG9k5J6idoJobf256mGy3a5L23ZgPeyRW14kKkKJW%2F1tZQAl8PMiwUSAN10uxTyuMTcT2fM2CrXbIbQ3ONyVZdI6%2BQ4HStUBbpOPHq8s8J6ojJxpBO2Re1GJ6KGF3Ff4lzG1UK%2BI%2F9i7BdMmshteGmg0PcwKp&X-Amz-Signature=2beb20c9f1fbe96b9a3219b207922a95e39d182121e117a80b1fc4137e5bd470&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LRZ3MI6%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCID0PzXp61sIvv7rMwLRrOa4239xcoAYU6pDuKTHfa79IAiB1MHjfbsgD4aupDcfhzKh4bEu0Csbkz1vChteNdavo8Sr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMi3noRMLW3FsSs56OKtwDEWuCBNq4mtx8Nnhzt%2FLy%2BhIMjCUpHjpmfX9UkcsfkcfUYfnO6uelDZKm%2F%2FCrB1BPCixdM1YhliZaL61djvEWIMq2vCI9z1iKDJdS%2FKIdXv5JTI5LI%2BRlzHxGC0%2F8LxYmGOVTD0KuBmai%2FO0KiiCIBc8hYBfLVD9lJ6k8l0eyA%2B2bgoKc9GKFMHrmIMAUGrKD1YbNbwMmkT50rPKswSgatDy1bkMjgOZs9GgCoVuiJL3f8W%2BNBdOoPUXLmnvcvILtSzgjCYMZDH9CZUrOU2nU1tfw48H66vg%2BioeoASLt8%2BbWQ5nCizM8gEiaC6yCDQndiAR5yP2Pr5z3Kd3DuAXzNW158sADQKEVG5g7Y9cf8J5CU8EUaR5eGd7%2FNosEb2pO9vtLwrt7%2FshzXsFpOk13Au2NojDsv81VwGOZbKxmrOjTmRGhhqxMi4dx%2FSr68E8Scsp1uHs9nFfg5oRtg3wj0wCQNC57o2%2BQirQKImYPKcuK6bQF%2FPs%2B4upCzVqpFalLksYXW%2FbYo8PD49tCBoxG%2Ftbto1y%2BJg4YzIKqszLhAroRCuBsR2z3PTHyfpoDKyti4euq%2BVbhz8vC2PY69zNXfjimq3S9wTCrQJViDZPpqL%2Fmo7xaGeRj8Kr2JgAwuLirxwY6pgHz57hqV6%2F15gkifACbgjTSlqwpJtTUJJX%2FU9du%2FppHc8G6PYgwn5FcmJITDvK6vedYsJ8OTc4ZBjdN%2Bv59%2FqUjIUKKvCCLicsVQXQHJyJ8mR5tOD%2BQqyYvf8qsHJPPytcUZ2YpHdn6syXtGCRBUBT737ZsOxTYL6RnmHYMEALU5Yn%2B52K1sV8N0wT7tiDngUFcLj8t4Kv2C0EkZ%2BUpKEaNzXEh9s1i&X-Amz-Signature=e0e432b726b05f92927fa5d6c22e643ab7c2c8014541f368ad1bcf3c75f20392&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW3BN3PP%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIAEuPB741%2BbNLF3VKVQ55gI9ZwpbGHc9D1bkSyje3iIOAiEAmv2YDBuPrl4eggYy5kTXTOSKwmVzeYmR4B4oTTAZvL4q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDG6tAHn2A2he%2FalaPSrcA0gmIFOKfgJK4tE%2FgXVlGq81mM4deREriCt09%2BlK%2Fn7MlVLEmlhktp%2FiOQFf3rdiGhblbWLHWelb9TbKt0lUvyvFIcMpKKKPax7S0mO4c9q61Pjv7ZK0gDxHrk%2BCbFmRfuZ0riKKQZqVMRR%2BAtXMDEI4AB%2FUcTyOe6WCK4%2FXMzlO5L7sN%2FIw2cBjHQI07%2B7TPqYE%2FwS1LQXkr9u53NxSjRTP9XhTnImpsPpQXlDW0puKU72%2B5lkbj9RXoT7mlViUJCAivDGEZitDifTYeX6aIN60Fr4%2B3SBtHp9bkXNjocp4Z1AB3fcLgYkTvNglj0%2FwBPuBMlJJUsSstBUeYuVNquFUp1Id3nri5GR8SlstUo1AIZ6rM4neguJNZd6uVoyl3TnwS%2FPHCAg%2FX3KseaoZ%2BNeBR5lRUHbT%2FzHjpIvmtJO971CLeWitY3t0kU7GBT6LqDPps1IqCed%2FAJlj1RM3CCLhLi2ln5UzRPGvr%2FDC3qYtB2xa%2FbZQoEtUoM4%2FgFjVAOJ%2F5vTzcbG3MSB1Tr%2FJGSKLVndq6P9Kutu63CkHe7GnVESy8y7uBWpbA17CPJR0%2BQvsJUrV0%2FKZx36dScliKyWz7fXfQ98iAAEzzeLuVALaSIFgfGBVIfUCgo51MMa5q8cGOqUBLOGJLZaJZUmrP%2Fto4HTLgdrmzDwyLZxABzuAPG4TmgCnRDaGB0RMLIlUdIxUo44oCl5ynvPxLC9Bd4ZjwMXZNq5lhoPOh%2B5c27n6QKNC8QwB4p4FTqt3bUjNmch6lylFodPPGK9uVFbD%2FOcOZ%2F2zc7kfOLpsHguxxeGxhESpjQvKK93dyyqHo8bl4w2XBPA0zFsJw6Zb4kIdYpiNEHR6svasTfcH&X-Amz-Signature=12fae378647eaf12e9fc759d8fe178c709629d21d829aff952bb0299ce76c48a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
