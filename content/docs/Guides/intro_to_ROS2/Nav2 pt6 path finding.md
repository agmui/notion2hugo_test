---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-24T23:11:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 path finding.md"
title: "Nav2 pt6 path finding"
date: "2025-07-24T23:11:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 156
toc: false
icon: ""
---

This part of the guide shows how to finally add Nav2 to our setup.

## Install

```bash
sudo apt install ros-$ROS_DISTRO-navigation2
sudo apt install ros-$ROS_DISTRO-nav2-bringup
```

{{% alert icon=”👾” context="success" %}}

### **New Node** **`nav2_bringup`**

nav2_bring up actual spawns a lot of nodes and topics but I have just shown a few of the important ones.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URUATVAI%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIGWdwkfuDhvv02aGzhikx7sf7Q4yZ1qdhvqCE5xVids9AiBBTiz%2FVtsukTEvYhe0riSdpBECuQFSSW6hqLp3HM5uoCqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2ZjpBivo7ryrCyYOKtwDq4f3098%2BhU3jbJDQH9NUY7ZnYVSz%2BMi11mUZE3lV1DIQyRs%2FWPhcDM5uxGvXNTLfAEfEiPqkqc9FWfT5hef6gywOkvh7%2F%2FOgzNn3gm9dFSjpq%2FtZ8JDzkYcO1GZuFRdNLtX0DmBkrZTbDFu%2FaS0mlJ3MwUe1HbhrtYnViIcwXh02VnPbq3Q6iuXeVONzC0rwyYIDgHx9kBaK9EIc%2F73su0A%2BXyWv%2FHBEkuEA4Kj%2FlVrRuxmqyoJcSJmOkmh57IqbSqhNjNjZ1PvWL2Q50OBLeo92ZVFIFTcoQOo9bg60EcuYolcZ8tSY%2FUHBjKBbnYoDebhjzv0%2FV9uQTKaVDTuk303jKGlHHoRdYUaTBknnnFCaZuSK%2Fab%2FFhkgA28Ds3EC2qUl%2Bh0rmtmg%2BWoExxIVYJY7MCzSUDqsMyytCRmFEMzdLijIX8%2Fn3oW641T5U6tNupaZTt8a2iiWGr60uiOtVopJTvLxDV6BnBrmp19cDlu26rkjKW40HiS4DbbQApRI4wGWAGtigg%2FSkF0D9NXCfltTaA8fnIN2bPIZIgIrpwqiJC%2FQiQiPVcPm8j0%2BTEHOkBZ9Hi1Z7lD2edhueE08%2BFnOp%2F%2FJ3hCNjMVtIVON3YsnqtTPxGlhVOOeJTMwsLmfxAY6pgEbHKGxFbfAuPpVe2ts0WwRRMXGxbqs4SPzyZa2y1Ud6J%2BWkcubm%2BKUd7H4YgNc%2B%2FSxI%2FJnYQz9j7xQ%2FpTmDFetFcW3tvdP4WFQqmrhHtmK9%2FneknCa3K1ni%2BsYgRSqW6MZnbmt%2FMEiv9v01XtUbby%2FrDIGhmoYwoDK%2BTaMLqEV5EX6dJZkM0wZ%2FmK2PkL%2FY2Sj%2BVrKQjZXojRlplRUVnUVll5FnTPK&X-Amz-Signature=53b639780284a0efed2de196c690662a531fa1292efb3ebda744358f73bbe0cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**                |
| -------- | ----------------------- |
| `/tf`    | map ⇒ odom ⇒ base_link  |
| `/odom`  | nav_msgs/Odometry       |
| `/map`   | nav_mesgs/OccupancyGrid |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/plan`    | nav_msgs/msgPath    |
| `/cmd_vel` | geometry_msgs/Twist |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**       | **Type** |
| -------------- | -------- |
| `params_file`  | file     |
| `use_sim_time` | bool     |

{{< /table >}}

#### description:

Given `/odom`, `/map`, and `map => odom => base_link` outputs a path to the destination given in rviz on `/plan` and collision avoidance on `/cmd_vel` 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URUATVAI%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIGWdwkfuDhvv02aGzhikx7sf7Q4yZ1qdhvqCE5xVids9AiBBTiz%2FVtsukTEvYhe0riSdpBECuQFSSW6hqLp3HM5uoCqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2ZjpBivo7ryrCyYOKtwDq4f3098%2BhU3jbJDQH9NUY7ZnYVSz%2BMi11mUZE3lV1DIQyRs%2FWPhcDM5uxGvXNTLfAEfEiPqkqc9FWfT5hef6gywOkvh7%2F%2FOgzNn3gm9dFSjpq%2FtZ8JDzkYcO1GZuFRdNLtX0DmBkrZTbDFu%2FaS0mlJ3MwUe1HbhrtYnViIcwXh02VnPbq3Q6iuXeVONzC0rwyYIDgHx9kBaK9EIc%2F73su0A%2BXyWv%2FHBEkuEA4Kj%2FlVrRuxmqyoJcSJmOkmh57IqbSqhNjNjZ1PvWL2Q50OBLeo92ZVFIFTcoQOo9bg60EcuYolcZ8tSY%2FUHBjKBbnYoDebhjzv0%2FV9uQTKaVDTuk303jKGlHHoRdYUaTBknnnFCaZuSK%2Fab%2FFhkgA28Ds3EC2qUl%2Bh0rmtmg%2BWoExxIVYJY7MCzSUDqsMyytCRmFEMzdLijIX8%2Fn3oW641T5U6tNupaZTt8a2iiWGr60uiOtVopJTvLxDV6BnBrmp19cDlu26rkjKW40HiS4DbbQApRI4wGWAGtigg%2FSkF0D9NXCfltTaA8fnIN2bPIZIgIrpwqiJC%2FQiQiPVcPm8j0%2BTEHOkBZ9Hi1Z7lD2edhueE08%2BFnOp%2F%2FJ3hCNjMVtIVON3YsnqtTPxGlhVOOeJTMwsLmfxAY6pgEbHKGxFbfAuPpVe2ts0WwRRMXGxbqs4SPzyZa2y1Ud6J%2BWkcubm%2BKUd7H4YgNc%2B%2FSxI%2FJnYQz9j7xQ%2FpTmDFetFcW3tvdP4WFQqmrhHtmK9%2FneknCa3K1ni%2BsYgRSqW6MZnbmt%2FMEiv9v01XtUbby%2FrDIGhmoYwoDK%2BTaMLqEV5EX6dJZkM0wZ%2FmK2PkL%2FY2Sj%2BVrKQjZXojRlplRUVnUVll5FnTPK&X-Amz-Signature=c4e5666890239cc48845d8510e41931d83b969c80bd90a39416f4cac36ad3931&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URUATVAI%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIGWdwkfuDhvv02aGzhikx7sf7Q4yZ1qdhvqCE5xVids9AiBBTiz%2FVtsukTEvYhe0riSdpBECuQFSSW6hqLp3HM5uoCqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2ZjpBivo7ryrCyYOKtwDq4f3098%2BhU3jbJDQH9NUY7ZnYVSz%2BMi11mUZE3lV1DIQyRs%2FWPhcDM5uxGvXNTLfAEfEiPqkqc9FWfT5hef6gywOkvh7%2F%2FOgzNn3gm9dFSjpq%2FtZ8JDzkYcO1GZuFRdNLtX0DmBkrZTbDFu%2FaS0mlJ3MwUe1HbhrtYnViIcwXh02VnPbq3Q6iuXeVONzC0rwyYIDgHx9kBaK9EIc%2F73su0A%2BXyWv%2FHBEkuEA4Kj%2FlVrRuxmqyoJcSJmOkmh57IqbSqhNjNjZ1PvWL2Q50OBLeo92ZVFIFTcoQOo9bg60EcuYolcZ8tSY%2FUHBjKBbnYoDebhjzv0%2FV9uQTKaVDTuk303jKGlHHoRdYUaTBknnnFCaZuSK%2Fab%2FFhkgA28Ds3EC2qUl%2Bh0rmtmg%2BWoExxIVYJY7MCzSUDqsMyytCRmFEMzdLijIX8%2Fn3oW641T5U6tNupaZTt8a2iiWGr60uiOtVopJTvLxDV6BnBrmp19cDlu26rkjKW40HiS4DbbQApRI4wGWAGtigg%2FSkF0D9NXCfltTaA8fnIN2bPIZIgIrpwqiJC%2FQiQiPVcPm8j0%2BTEHOkBZ9Hi1Z7lD2edhueE08%2BFnOp%2F%2FJ3hCNjMVtIVON3YsnqtTPxGlhVOOeJTMwsLmfxAY6pgEbHKGxFbfAuPpVe2ts0WwRRMXGxbqs4SPzyZa2y1Ud6J%2BWkcubm%2BKUd7H4YgNc%2B%2FSxI%2FJnYQz9j7xQ%2FpTmDFetFcW3tvdP4WFQqmrhHtmK9%2FneknCa3K1ni%2BsYgRSqW6MZnbmt%2FMEiv9v01XtUbby%2FrDIGhmoYwoDK%2BTaMLqEV5EX6dJZkM0wZ%2FmK2PkL%2FY2Sj%2BVrKQjZXojRlplRUVnUVll5FnTPK&X-Amz-Signature=d98820675c75755371c1e729ea4f387e260f1d29c00862940f552a23b2e7afd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URUATVAI%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIGWdwkfuDhvv02aGzhikx7sf7Q4yZ1qdhvqCE5xVids9AiBBTiz%2FVtsukTEvYhe0riSdpBECuQFSSW6hqLp3HM5uoCqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2ZjpBivo7ryrCyYOKtwDq4f3098%2BhU3jbJDQH9NUY7ZnYVSz%2BMi11mUZE3lV1DIQyRs%2FWPhcDM5uxGvXNTLfAEfEiPqkqc9FWfT5hef6gywOkvh7%2F%2FOgzNn3gm9dFSjpq%2FtZ8JDzkYcO1GZuFRdNLtX0DmBkrZTbDFu%2FaS0mlJ3MwUe1HbhrtYnViIcwXh02VnPbq3Q6iuXeVONzC0rwyYIDgHx9kBaK9EIc%2F73su0A%2BXyWv%2FHBEkuEA4Kj%2FlVrRuxmqyoJcSJmOkmh57IqbSqhNjNjZ1PvWL2Q50OBLeo92ZVFIFTcoQOo9bg60EcuYolcZ8tSY%2FUHBjKBbnYoDebhjzv0%2FV9uQTKaVDTuk303jKGlHHoRdYUaTBknnnFCaZuSK%2Fab%2FFhkgA28Ds3EC2qUl%2Bh0rmtmg%2BWoExxIVYJY7MCzSUDqsMyytCRmFEMzdLijIX8%2Fn3oW641T5U6tNupaZTt8a2iiWGr60uiOtVopJTvLxDV6BnBrmp19cDlu26rkjKW40HiS4DbbQApRI4wGWAGtigg%2FSkF0D9NXCfltTaA8fnIN2bPIZIgIrpwqiJC%2FQiQiPVcPm8j0%2BTEHOkBZ9Hi1Z7lD2edhueE08%2BFnOp%2F%2FJ3hCNjMVtIVON3YsnqtTPxGlhVOOeJTMwsLmfxAY6pgEbHKGxFbfAuPpVe2ts0WwRRMXGxbqs4SPzyZa2y1Ud6J%2BWkcubm%2BKUd7H4YgNc%2B%2FSxI%2FJnYQz9j7xQ%2FpTmDFetFcW3tvdP4WFQqmrhHtmK9%2FneknCa3K1ni%2BsYgRSqW6MZnbmt%2FMEiv9v01XtUbby%2FrDIGhmoYwoDK%2BTaMLqEV5EX6dJZkM0wZ%2FmK2PkL%2FY2Sj%2BVrKQjZXojRlplRUVnUVll5FnTPK&X-Amz-Signature=1d0695c8fe0d3c52bac315a8d0f4ecb6363e9fa83883c6bccc5b5b2e3ecc075b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

{{% alert context="warning" %}}

Remember to **enable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert icon=”👾” context="info" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URUATVAI%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIGWdwkfuDhvv02aGzhikx7sf7Q4yZ1qdhvqCE5xVids9AiBBTiz%2FVtsukTEvYhe0riSdpBECuQFSSW6hqLp3HM5uoCqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2ZjpBivo7ryrCyYOKtwDq4f3098%2BhU3jbJDQH9NUY7ZnYVSz%2BMi11mUZE3lV1DIQyRs%2FWPhcDM5uxGvXNTLfAEfEiPqkqc9FWfT5hef6gywOkvh7%2F%2FOgzNn3gm9dFSjpq%2FtZ8JDzkYcO1GZuFRdNLtX0DmBkrZTbDFu%2FaS0mlJ3MwUe1HbhrtYnViIcwXh02VnPbq3Q6iuXeVONzC0rwyYIDgHx9kBaK9EIc%2F73su0A%2BXyWv%2FHBEkuEA4Kj%2FlVrRuxmqyoJcSJmOkmh57IqbSqhNjNjZ1PvWL2Q50OBLeo92ZVFIFTcoQOo9bg60EcuYolcZ8tSY%2FUHBjKBbnYoDebhjzv0%2FV9uQTKaVDTuk303jKGlHHoRdYUaTBknnnFCaZuSK%2Fab%2FFhkgA28Ds3EC2qUl%2Bh0rmtmg%2BWoExxIVYJY7MCzSUDqsMyytCRmFEMzdLijIX8%2Fn3oW641T5U6tNupaZTt8a2iiWGr60uiOtVopJTvLxDV6BnBrmp19cDlu26rkjKW40HiS4DbbQApRI4wGWAGtigg%2FSkF0D9NXCfltTaA8fnIN2bPIZIgIrpwqiJC%2FQiQiPVcPm8j0%2BTEHOkBZ9Hi1Z7lD2edhueE08%2BFnOp%2F%2FJ3hCNjMVtIVON3YsnqtTPxGlhVOOeJTMwsLmfxAY6pgEbHKGxFbfAuPpVe2ts0WwRRMXGxbqs4SPzyZa2y1Ud6J%2BWkcubm%2BKUd7H4YgNc%2B%2FSxI%2FJnYQz9j7xQ%2FpTmDFetFcW3tvdP4WFQqmrhHtmK9%2FneknCa3K1ni%2BsYgRSqW6MZnbmt%2FMEiv9v01XtUbby%2FrDIGhmoYwoDK%2BTaMLqEV5EX6dJZkM0wZ%2FmK2PkL%2FY2Sj%2BVrKQjZXojRlplRUVnUVll5FnTPK&X-Amz-Signature=d78ba653fc6a9a2f6b68057c91e8161082072f767220d7d867b3af036432bd80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:
TODO get img

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

TODO: add rviz guide showing 

- view robot footprint
- how to view local and global cost map layers
- publish point to go to
- view path of going to that point in rviz
- publishing point when receive ref serial msg

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URUATVAI%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIGWdwkfuDhvv02aGzhikx7sf7Q4yZ1qdhvqCE5xVids9AiBBTiz%2FVtsukTEvYhe0riSdpBECuQFSSW6hqLp3HM5uoCqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2ZjpBivo7ryrCyYOKtwDq4f3098%2BhU3jbJDQH9NUY7ZnYVSz%2BMi11mUZE3lV1DIQyRs%2FWPhcDM5uxGvXNTLfAEfEiPqkqc9FWfT5hef6gywOkvh7%2F%2FOgzNn3gm9dFSjpq%2FtZ8JDzkYcO1GZuFRdNLtX0DmBkrZTbDFu%2FaS0mlJ3MwUe1HbhrtYnViIcwXh02VnPbq3Q6iuXeVONzC0rwyYIDgHx9kBaK9EIc%2F73su0A%2BXyWv%2FHBEkuEA4Kj%2FlVrRuxmqyoJcSJmOkmh57IqbSqhNjNjZ1PvWL2Q50OBLeo92ZVFIFTcoQOo9bg60EcuYolcZ8tSY%2FUHBjKBbnYoDebhjzv0%2FV9uQTKaVDTuk303jKGlHHoRdYUaTBknnnFCaZuSK%2Fab%2FFhkgA28Ds3EC2qUl%2Bh0rmtmg%2BWoExxIVYJY7MCzSUDqsMyytCRmFEMzdLijIX8%2Fn3oW641T5U6tNupaZTt8a2iiWGr60uiOtVopJTvLxDV6BnBrmp19cDlu26rkjKW40HiS4DbbQApRI4wGWAGtigg%2FSkF0D9NXCfltTaA8fnIN2bPIZIgIrpwqiJC%2FQiQiPVcPm8j0%2BTEHOkBZ9Hi1Z7lD2edhueE08%2BFnOp%2F%2FJ3hCNjMVtIVON3YsnqtTPxGlhVOOeJTMwsLmfxAY6pgEbHKGxFbfAuPpVe2ts0WwRRMXGxbqs4SPzyZa2y1Ud6J%2BWkcubm%2BKUd7H4YgNc%2B%2FSxI%2FJnYQz9j7xQ%2FpTmDFetFcW3tvdP4WFQqmrhHtmK9%2FneknCa3K1ni%2BsYgRSqW6MZnbmt%2FMEiv9v01XtUbby%2FrDIGhmoYwoDK%2BTaMLqEV5EX6dJZkM0wZ%2FmK2PkL%2FY2Sj%2BVrKQjZXojRlplRUVnUVll5FnTPK&X-Amz-Signature=09bbe4ab44339d9bb14a96b86218a5897f3a2acb9490c0871809288b6ee1be76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

## updating launch file

```python
  
def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config
    bridge_config_path = os.path.join(pkg_share, 'config', 'bridge_config.yaml') # gets location of gazebo config
    world_path = os.path.join(pkg_share, 'world', 'my_world.sdf') # gets the gazebo world file
    slam_yaml_path = os.path.join(pkg_share, 'config', 'slam.yaml') # gets the slam config file 
    nav2_yaml = os.path.join(pkg_share, 'config', 'nav2_params.yaml') # gets the nav2 config file
     
     ...
     
    nav2_bringup_node = IncludeLaunchDescription(
        PythonLaunchDescriptionSource([
            FindPackageShare("nav2_bringup"), '/launch', '/navigation_launch.py']),
        launch_arguments={
            'use_sim_time': LaunchConfiguration('use_sim_time')
            'params_file': nav2_yaml,
        }.items()
    )
    
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        # ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        # gz_server,
        # ros_gz_bridge,
        # spawn_entity,
        
        lidar_node # lidar for physical setup 
        
        slam_toolbox_node, # providing the map => odom transform.

        nav2_bringup_node, # starts nav2

    ])
```

# Nav2 settings

TODO: change footprint?
