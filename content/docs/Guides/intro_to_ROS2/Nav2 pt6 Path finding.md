---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-08-11T14:55:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-08-11T14:55:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SEO7QUX%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCl643AqPzhIzW5ao7q5CHdto1O80yvCpJsXbgUBVOExgIhANo0HpOF%2BgBbxVxdbJc5uDtjlDfqLum3VvS1eVc2jaDvKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxu35Tb8ANYyuB1Fjoq3AN5TBahZL%2B7lAHt5BtGQT7NWNXgQF5KS0wWAhXSIGE%2Bv57oXd2Dt%2BSjVteiiox5vnF%2BcNvXp9Y8XCnLHcy0kaa2d%2Fv%2FR0E34OPqR2YSvFiN8FbbrkeMZIUj89SdRhIGGp%2FraqBT%2F4SB%2F8yfqot6lVnakS7NlR45UIZLrtPJizaqvo803fllVdmYr5N7WxqkUHBe97eOW02AqXxWle2NI6EGPrYzLfOBBU4a8ITSwplvlu%2FdjwEMRSVfR5E%2Fs33CxAT9vPZM0RCvruiw3NOivONpG4p%2Fnp8rA44HHPdVmgsuaoWWazgpzDAYCsBJkoc%2BlUVthgJbcZ6KitG7HN3Yix%2FVtkMq8Xnq5qEPJf4WyhwkPjJXqHRCDijyMwtzyzXSYBMsIZdLS3pAM1OOvFHJJA6MV6FZ9kJxQixQn2Jvw1oYB094GureNLrn4BuXCNp4P3M2JmeYgB3xXvTaf5MDO%2FmjezvWD9qrGtEQkc248QiMe%2FKbk2CeTSyQQnqGVOaj0JSkPN588%2BsymKDfR%2FvhFwgPtysSF9R%2FbffVh8%2Bjt1YNvFD0MI635lWdecmZd3CL37y%2BuAOniQgs9FPgxqqZc8IP4SinLMeS4973vYfsapR1G3lzBgs95dicpOawMTDtw%2FLFBjqkASFtKInvDbB8SPN9dZb7XpGH6Cyo7f4KbMS2S6%2FByyCQXBKhGFo5iF%2BsL%2Bj0CaBrxeUn%2Fel5lHuKaL6sBzMUOVONRX369XmzPDuu7dn4BBf8SKmjTfzKNfy%2BO3kWB3b%2BRIfhsk1fPGDGLrjeqtvRRKlU782LJ6vDLHLWdnQOBX6koSuiQj%2BhzybiNuFNETp5GGPuUcG8Rv2mw6Ia7P5EA7jFmKwz&X-Amz-Signature=0b6fa2ac0a04ba96fc5073bea42f215986d3e64d0929e155421288970e634dad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**     | **Type**                  |
| ------------ | ------------------------- |
| `/tf`        | map ⇒ odom ⇒ base_link    |
| `/odom`      | nav_msgs/Odometry         |
| `/map`       | nav_mesgs/OccupancyGrid   |
| `/goal_pose` | geometry_msgs/PoseStamped |

{{< /table >}}


#### Outputs:

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/plan`    | nav_msgs/msgPath    |
| `/cmd_vel` | geometry_msgs/Twist |

#### Params:

| **Name**       | **Type** |
| -------------- | -------- |
| `params_file`  | file     |
| `use_sim_time` | bool     |

#### description:

`/odom`, `/map`, and `map => odom => base_link` tells Nav2 where the robot is

`/goal_pose` is where the robot wants to go

`/plan` is the path generated to get to that point

`/cmd_vel` actual moves the robot’s wheels 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SEO7QUX%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCl643AqPzhIzW5ao7q5CHdto1O80yvCpJsXbgUBVOExgIhANo0HpOF%2BgBbxVxdbJc5uDtjlDfqLum3VvS1eVc2jaDvKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxu35Tb8ANYyuB1Fjoq3AN5TBahZL%2B7lAHt5BtGQT7NWNXgQF5KS0wWAhXSIGE%2Bv57oXd2Dt%2BSjVteiiox5vnF%2BcNvXp9Y8XCnLHcy0kaa2d%2Fv%2FR0E34OPqR2YSvFiN8FbbrkeMZIUj89SdRhIGGp%2FraqBT%2F4SB%2F8yfqot6lVnakS7NlR45UIZLrtPJizaqvo803fllVdmYr5N7WxqkUHBe97eOW02AqXxWle2NI6EGPrYzLfOBBU4a8ITSwplvlu%2FdjwEMRSVfR5E%2Fs33CxAT9vPZM0RCvruiw3NOivONpG4p%2Fnp8rA44HHPdVmgsuaoWWazgpzDAYCsBJkoc%2BlUVthgJbcZ6KitG7HN3Yix%2FVtkMq8Xnq5qEPJf4WyhwkPjJXqHRCDijyMwtzyzXSYBMsIZdLS3pAM1OOvFHJJA6MV6FZ9kJxQixQn2Jvw1oYB094GureNLrn4BuXCNp4P3M2JmeYgB3xXvTaf5MDO%2FmjezvWD9qrGtEQkc248QiMe%2FKbk2CeTSyQQnqGVOaj0JSkPN588%2BsymKDfR%2FvhFwgPtysSF9R%2FbffVh8%2Bjt1YNvFD0MI635lWdecmZd3CL37y%2BuAOniQgs9FPgxqqZc8IP4SinLMeS4973vYfsapR1G3lzBgs95dicpOawMTDtw%2FLFBjqkASFtKInvDbB8SPN9dZb7XpGH6Cyo7f4KbMS2S6%2FByyCQXBKhGFo5iF%2BsL%2Bj0CaBrxeUn%2Fel5lHuKaL6sBzMUOVONRX369XmzPDuu7dn4BBf8SKmjTfzKNfy%2BO3kWB3b%2BRIfhsk1fPGDGLrjeqtvRRKlU782LJ6vDLHLWdnQOBX6koSuiQj%2BhzybiNuFNETp5GGPuUcG8Rv2mw6Ia7P5EA7jFmKwz&X-Amz-Signature=25e31a6c1226d1e6d0b931b5b316c442c32eb40cbb9aeb3640225bff53b0e7ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SEO7QUX%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCl643AqPzhIzW5ao7q5CHdto1O80yvCpJsXbgUBVOExgIhANo0HpOF%2BgBbxVxdbJc5uDtjlDfqLum3VvS1eVc2jaDvKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxu35Tb8ANYyuB1Fjoq3AN5TBahZL%2B7lAHt5BtGQT7NWNXgQF5KS0wWAhXSIGE%2Bv57oXd2Dt%2BSjVteiiox5vnF%2BcNvXp9Y8XCnLHcy0kaa2d%2Fv%2FR0E34OPqR2YSvFiN8FbbrkeMZIUj89SdRhIGGp%2FraqBT%2F4SB%2F8yfqot6lVnakS7NlR45UIZLrtPJizaqvo803fllVdmYr5N7WxqkUHBe97eOW02AqXxWle2NI6EGPrYzLfOBBU4a8ITSwplvlu%2FdjwEMRSVfR5E%2Fs33CxAT9vPZM0RCvruiw3NOivONpG4p%2Fnp8rA44HHPdVmgsuaoWWazgpzDAYCsBJkoc%2BlUVthgJbcZ6KitG7HN3Yix%2FVtkMq8Xnq5qEPJf4WyhwkPjJXqHRCDijyMwtzyzXSYBMsIZdLS3pAM1OOvFHJJA6MV6FZ9kJxQixQn2Jvw1oYB094GureNLrn4BuXCNp4P3M2JmeYgB3xXvTaf5MDO%2FmjezvWD9qrGtEQkc248QiMe%2FKbk2CeTSyQQnqGVOaj0JSkPN588%2BsymKDfR%2FvhFwgPtysSF9R%2FbffVh8%2Bjt1YNvFD0MI635lWdecmZd3CL37y%2BuAOniQgs9FPgxqqZc8IP4SinLMeS4973vYfsapR1G3lzBgs95dicpOawMTDtw%2FLFBjqkASFtKInvDbB8SPN9dZb7XpGH6Cyo7f4KbMS2S6%2FByyCQXBKhGFo5iF%2BsL%2Bj0CaBrxeUn%2Fel5lHuKaL6sBzMUOVONRX369XmzPDuu7dn4BBf8SKmjTfzKNfy%2BO3kWB3b%2BRIfhsk1fPGDGLrjeqtvRRKlU782LJ6vDLHLWdnQOBX6koSuiQj%2BhzybiNuFNETp5GGPuUcG8Rv2mw6Ia7P5EA7jFmKwz&X-Amz-Signature=81453daa31ade7d48f56ef5aae26dfb96dc60416c0a3840300b3e5e2c3bb16ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SEO7QUX%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCl643AqPzhIzW5ao7q5CHdto1O80yvCpJsXbgUBVOExgIhANo0HpOF%2BgBbxVxdbJc5uDtjlDfqLum3VvS1eVc2jaDvKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxu35Tb8ANYyuB1Fjoq3AN5TBahZL%2B7lAHt5BtGQT7NWNXgQF5KS0wWAhXSIGE%2Bv57oXd2Dt%2BSjVteiiox5vnF%2BcNvXp9Y8XCnLHcy0kaa2d%2Fv%2FR0E34OPqR2YSvFiN8FbbrkeMZIUj89SdRhIGGp%2FraqBT%2F4SB%2F8yfqot6lVnakS7NlR45UIZLrtPJizaqvo803fllVdmYr5N7WxqkUHBe97eOW02AqXxWle2NI6EGPrYzLfOBBU4a8ITSwplvlu%2FdjwEMRSVfR5E%2Fs33CxAT9vPZM0RCvruiw3NOivONpG4p%2Fnp8rA44HHPdVmgsuaoWWazgpzDAYCsBJkoc%2BlUVthgJbcZ6KitG7HN3Yix%2FVtkMq8Xnq5qEPJf4WyhwkPjJXqHRCDijyMwtzyzXSYBMsIZdLS3pAM1OOvFHJJA6MV6FZ9kJxQixQn2Jvw1oYB094GureNLrn4BuXCNp4P3M2JmeYgB3xXvTaf5MDO%2FmjezvWD9qrGtEQkc248QiMe%2FKbk2CeTSyQQnqGVOaj0JSkPN588%2BsymKDfR%2FvhFwgPtysSF9R%2FbffVh8%2Bjt1YNvFD0MI635lWdecmZd3CL37y%2BuAOniQgs9FPgxqqZc8IP4SinLMeS4973vYfsapR1G3lzBgs95dicpOawMTDtw%2FLFBjqkASFtKInvDbB8SPN9dZb7XpGH6Cyo7f4KbMS2S6%2FByyCQXBKhGFo5iF%2BsL%2Bj0CaBrxeUn%2Fel5lHuKaL6sBzMUOVONRX369XmzPDuu7dn4BBf8SKmjTfzKNfy%2BO3kWB3b%2BRIfhsk1fPGDGLrjeqtvRRKlU782LJ6vDLHLWdnQOBX6koSuiQj%2BhzybiNuFNETp5GGPuUcG8Rv2mw6Ia7P5EA7jFmKwz&X-Amz-Signature=d3a5c6b00465e48c692c70e4d80b475678485eb0b3ad1aa74d73537f685ed137&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

{{% alert context="warning" %}}

Remember to **enable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```shell "1-1"
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=<path/to/nav2_params.yaml>
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert context="danger" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SEO7QUX%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCl643AqPzhIzW5ao7q5CHdto1O80yvCpJsXbgUBVOExgIhANo0HpOF%2BgBbxVxdbJc5uDtjlDfqLum3VvS1eVc2jaDvKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxu35Tb8ANYyuB1Fjoq3AN5TBahZL%2B7lAHt5BtGQT7NWNXgQF5KS0wWAhXSIGE%2Bv57oXd2Dt%2BSjVteiiox5vnF%2BcNvXp9Y8XCnLHcy0kaa2d%2Fv%2FR0E34OPqR2YSvFiN8FbbrkeMZIUj89SdRhIGGp%2FraqBT%2F4SB%2F8yfqot6lVnakS7NlR45UIZLrtPJizaqvo803fllVdmYr5N7WxqkUHBe97eOW02AqXxWle2NI6EGPrYzLfOBBU4a8ITSwplvlu%2FdjwEMRSVfR5E%2Fs33CxAT9vPZM0RCvruiw3NOivONpG4p%2Fnp8rA44HHPdVmgsuaoWWazgpzDAYCsBJkoc%2BlUVthgJbcZ6KitG7HN3Yix%2FVtkMq8Xnq5qEPJf4WyhwkPjJXqHRCDijyMwtzyzXSYBMsIZdLS3pAM1OOvFHJJA6MV6FZ9kJxQixQn2Jvw1oYB094GureNLrn4BuXCNp4P3M2JmeYgB3xXvTaf5MDO%2FmjezvWD9qrGtEQkc248QiMe%2FKbk2CeTSyQQnqGVOaj0JSkPN588%2BsymKDfR%2FvhFwgPtysSF9R%2FbffVh8%2Bjt1YNvFD0MI635lWdecmZd3CL37y%2BuAOniQgs9FPgxqqZc8IP4SinLMeS4973vYfsapR1G3lzBgs95dicpOawMTDtw%2FLFBjqkASFtKInvDbB8SPN9dZb7XpGH6Cyo7f4KbMS2S6%2FByyCQXBKhGFo5iF%2BsL%2Bj0CaBrxeUn%2Fel5lHuKaL6sBzMUOVONRX369XmzPDuu7dn4BBf8SKmjTfzKNfy%2BO3kWB3b%2BRIfhsk1fPGDGLrjeqtvRRKlU782LJ6vDLHLWdnQOBX6koSuiQj%2BhzybiNuFNETp5GGPuUcG8Rv2mw6Ia7P5EA7jFmKwz&X-Amz-Signature=18e0f1fd2fb40ecc41a7ae6d1f9a094d4f128aa562e123bd33bc98f559613536&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SEO7QUX%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCl643AqPzhIzW5ao7q5CHdto1O80yvCpJsXbgUBVOExgIhANo0HpOF%2BgBbxVxdbJc5uDtjlDfqLum3VvS1eVc2jaDvKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxu35Tb8ANYyuB1Fjoq3AN5TBahZL%2B7lAHt5BtGQT7NWNXgQF5KS0wWAhXSIGE%2Bv57oXd2Dt%2BSjVteiiox5vnF%2BcNvXp9Y8XCnLHcy0kaa2d%2Fv%2FR0E34OPqR2YSvFiN8FbbrkeMZIUj89SdRhIGGp%2FraqBT%2F4SB%2F8yfqot6lVnakS7NlR45UIZLrtPJizaqvo803fllVdmYr5N7WxqkUHBe97eOW02AqXxWle2NI6EGPrYzLfOBBU4a8ITSwplvlu%2FdjwEMRSVfR5E%2Fs33CxAT9vPZM0RCvruiw3NOivONpG4p%2Fnp8rA44HHPdVmgsuaoWWazgpzDAYCsBJkoc%2BlUVthgJbcZ6KitG7HN3Yix%2FVtkMq8Xnq5qEPJf4WyhwkPjJXqHRCDijyMwtzyzXSYBMsIZdLS3pAM1OOvFHJJA6MV6FZ9kJxQixQn2Jvw1oYB094GureNLrn4BuXCNp4P3M2JmeYgB3xXvTaf5MDO%2FmjezvWD9qrGtEQkc248QiMe%2FKbk2CeTSyQQnqGVOaj0JSkPN588%2BsymKDfR%2FvhFwgPtysSF9R%2FbffVh8%2Bjt1YNvFD0MI635lWdecmZd3CL37y%2BuAOniQgs9FPgxqqZc8IP4SinLMeS4973vYfsapR1G3lzBgs95dicpOawMTDtw%2FLFBjqkASFtKInvDbB8SPN9dZb7XpGH6Cyo7f4KbMS2S6%2FByyCQXBKhGFo5iF%2BsL%2Bj0CaBrxeUn%2Fel5lHuKaL6sBzMUOVONRX369XmzPDuu7dn4BBf8SKmjTfzKNfy%2BO3kWB3b%2BRIfhsk1fPGDGLrjeqtvRRKlU782LJ6vDLHLWdnQOBX6koSuiQj%2BhzybiNuFNETp5GGPuUcG8Rv2mw6Ia7P5EA7jFmKwz&X-Amz-Signature=87b0caf97e157722269770af03cf3ef07844ff8a20281d0ab04de82dad8c5f29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SEO7QUX%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCl643AqPzhIzW5ao7q5CHdto1O80yvCpJsXbgUBVOExgIhANo0HpOF%2BgBbxVxdbJc5uDtjlDfqLum3VvS1eVc2jaDvKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxu35Tb8ANYyuB1Fjoq3AN5TBahZL%2B7lAHt5BtGQT7NWNXgQF5KS0wWAhXSIGE%2Bv57oXd2Dt%2BSjVteiiox5vnF%2BcNvXp9Y8XCnLHcy0kaa2d%2Fv%2FR0E34OPqR2YSvFiN8FbbrkeMZIUj89SdRhIGGp%2FraqBT%2F4SB%2F8yfqot6lVnakS7NlR45UIZLrtPJizaqvo803fllVdmYr5N7WxqkUHBe97eOW02AqXxWle2NI6EGPrYzLfOBBU4a8ITSwplvlu%2FdjwEMRSVfR5E%2Fs33CxAT9vPZM0RCvruiw3NOivONpG4p%2Fnp8rA44HHPdVmgsuaoWWazgpzDAYCsBJkoc%2BlUVthgJbcZ6KitG7HN3Yix%2FVtkMq8Xnq5qEPJf4WyhwkPjJXqHRCDijyMwtzyzXSYBMsIZdLS3pAM1OOvFHJJA6MV6FZ9kJxQixQn2Jvw1oYB094GureNLrn4BuXCNp4P3M2JmeYgB3xXvTaf5MDO%2FmjezvWD9qrGtEQkc248QiMe%2FKbk2CeTSyQQnqGVOaj0JSkPN588%2BsymKDfR%2FvhFwgPtysSF9R%2FbffVh8%2Bjt1YNvFD0MI635lWdecmZd3CL37y%2BuAOniQgs9FPgxqqZc8IP4SinLMeS4973vYfsapR1G3lzBgs95dicpOawMTDtw%2FLFBjqkASFtKInvDbB8SPN9dZb7XpGH6Cyo7f4KbMS2S6%2FByyCQXBKhGFo5iF%2BsL%2Bj0CaBrxeUn%2Fel5lHuKaL6sBzMUOVONRX369XmzPDuu7dn4BBf8SKmjTfzKNfy%2BO3kWB3b%2BRIfhsk1fPGDGLrjeqtvRRKlU782LJ6vDLHLWdnQOBX6koSuiQj%2BhzybiNuFNETp5GGPuUcG8Rv2mw6Ia7P5EA7jFmKwz&X-Amz-Signature=56bd3d250b2b224cc83e7fb3e0e945c24f4c093b05068b1241fd4f1e004b0cd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SEO7QUX%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCl643AqPzhIzW5ao7q5CHdto1O80yvCpJsXbgUBVOExgIhANo0HpOF%2BgBbxVxdbJc5uDtjlDfqLum3VvS1eVc2jaDvKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxu35Tb8ANYyuB1Fjoq3AN5TBahZL%2B7lAHt5BtGQT7NWNXgQF5KS0wWAhXSIGE%2Bv57oXd2Dt%2BSjVteiiox5vnF%2BcNvXp9Y8XCnLHcy0kaa2d%2Fv%2FR0E34OPqR2YSvFiN8FbbrkeMZIUj89SdRhIGGp%2FraqBT%2F4SB%2F8yfqot6lVnakS7NlR45UIZLrtPJizaqvo803fllVdmYr5N7WxqkUHBe97eOW02AqXxWle2NI6EGPrYzLfOBBU4a8ITSwplvlu%2FdjwEMRSVfR5E%2Fs33CxAT9vPZM0RCvruiw3NOivONpG4p%2Fnp8rA44HHPdVmgsuaoWWazgpzDAYCsBJkoc%2BlUVthgJbcZ6KitG7HN3Yix%2FVtkMq8Xnq5qEPJf4WyhwkPjJXqHRCDijyMwtzyzXSYBMsIZdLS3pAM1OOvFHJJA6MV6FZ9kJxQixQn2Jvw1oYB094GureNLrn4BuXCNp4P3M2JmeYgB3xXvTaf5MDO%2FmjezvWD9qrGtEQkc248QiMe%2FKbk2CeTSyQQnqGVOaj0JSkPN588%2BsymKDfR%2FvhFwgPtysSF9R%2FbffVh8%2Bjt1YNvFD0MI635lWdecmZd3CL37y%2BuAOniQgs9FPgxqqZc8IP4SinLMeS4973vYfsapR1G3lzBgs95dicpOawMTDtw%2FLFBjqkASFtKInvDbB8SPN9dZb7XpGH6Cyo7f4KbMS2S6%2FByyCQXBKhGFo5iF%2BsL%2Bj0CaBrxeUn%2Fel5lHuKaL6sBzMUOVONRX369XmzPDuu7dn4BBf8SKmjTfzKNfy%2BO3kWB3b%2BRIfhsk1fPGDGLrjeqtvRRKlU782LJ6vDLHLWdnQOBX6koSuiQj%2BhzybiNuFNETp5GGPuUcG8Rv2mw6Ia7P5EA7jFmKwz&X-Amz-Signature=6478e931be6bb4363146b5cff22ab19bb2ca1e254070873929d4833f6855a974&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SEO7QUX%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCl643AqPzhIzW5ao7q5CHdto1O80yvCpJsXbgUBVOExgIhANo0HpOF%2BgBbxVxdbJc5uDtjlDfqLum3VvS1eVc2jaDvKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxu35Tb8ANYyuB1Fjoq3AN5TBahZL%2B7lAHt5BtGQT7NWNXgQF5KS0wWAhXSIGE%2Bv57oXd2Dt%2BSjVteiiox5vnF%2BcNvXp9Y8XCnLHcy0kaa2d%2Fv%2FR0E34OPqR2YSvFiN8FbbrkeMZIUj89SdRhIGGp%2FraqBT%2F4SB%2F8yfqot6lVnakS7NlR45UIZLrtPJizaqvo803fllVdmYr5N7WxqkUHBe97eOW02AqXxWle2NI6EGPrYzLfOBBU4a8ITSwplvlu%2FdjwEMRSVfR5E%2Fs33CxAT9vPZM0RCvruiw3NOivONpG4p%2Fnp8rA44HHPdVmgsuaoWWazgpzDAYCsBJkoc%2BlUVthgJbcZ6KitG7HN3Yix%2FVtkMq8Xnq5qEPJf4WyhwkPjJXqHRCDijyMwtzyzXSYBMsIZdLS3pAM1OOvFHJJA6MV6FZ9kJxQixQn2Jvw1oYB094GureNLrn4BuXCNp4P3M2JmeYgB3xXvTaf5MDO%2FmjezvWD9qrGtEQkc248QiMe%2FKbk2CeTSyQQnqGVOaj0JSkPN588%2BsymKDfR%2FvhFwgPtysSF9R%2FbffVh8%2Bjt1YNvFD0MI635lWdecmZd3CL37y%2BuAOniQgs9FPgxqqZc8IP4SinLMeS4973vYfsapR1G3lzBgs95dicpOawMTDtw%2FLFBjqkASFtKInvDbB8SPN9dZb7XpGH6Cyo7f4KbMS2S6%2FByyCQXBKhGFo5iF%2BsL%2Bj0CaBrxeUn%2Fel5lHuKaL6sBzMUOVONRX369XmzPDuu7dn4BBf8SKmjTfzKNfy%2BO3kWB3b%2BRIfhsk1fPGDGLrjeqtvRRKlU782LJ6vDLHLWdnQOBX6koSuiQj%2BhzybiNuFNETp5GGPuUcG8Rv2mw6Ia7P5EA7jFmKwz&X-Amz-Signature=91f647a8640d6e1820d8e0c31f6fe7c6f5e267cf88ad97eca28fad9493a2b272&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SEO7QUX%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCl643AqPzhIzW5ao7q5CHdto1O80yvCpJsXbgUBVOExgIhANo0HpOF%2BgBbxVxdbJc5uDtjlDfqLum3VvS1eVc2jaDvKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxu35Tb8ANYyuB1Fjoq3AN5TBahZL%2B7lAHt5BtGQT7NWNXgQF5KS0wWAhXSIGE%2Bv57oXd2Dt%2BSjVteiiox5vnF%2BcNvXp9Y8XCnLHcy0kaa2d%2Fv%2FR0E34OPqR2YSvFiN8FbbrkeMZIUj89SdRhIGGp%2FraqBT%2F4SB%2F8yfqot6lVnakS7NlR45UIZLrtPJizaqvo803fllVdmYr5N7WxqkUHBe97eOW02AqXxWle2NI6EGPrYzLfOBBU4a8ITSwplvlu%2FdjwEMRSVfR5E%2Fs33CxAT9vPZM0RCvruiw3NOivONpG4p%2Fnp8rA44HHPdVmgsuaoWWazgpzDAYCsBJkoc%2BlUVthgJbcZ6KitG7HN3Yix%2FVtkMq8Xnq5qEPJf4WyhwkPjJXqHRCDijyMwtzyzXSYBMsIZdLS3pAM1OOvFHJJA6MV6FZ9kJxQixQn2Jvw1oYB094GureNLrn4BuXCNp4P3M2JmeYgB3xXvTaf5MDO%2FmjezvWD9qrGtEQkc248QiMe%2FKbk2CeTSyQQnqGVOaj0JSkPN588%2BsymKDfR%2FvhFwgPtysSF9R%2FbffVh8%2Bjt1YNvFD0MI635lWdecmZd3CL37y%2BuAOniQgs9FPgxqqZc8IP4SinLMeS4973vYfsapR1G3lzBgs95dicpOawMTDtw%2FLFBjqkASFtKInvDbB8SPN9dZb7XpGH6Cyo7f4KbMS2S6%2FByyCQXBKhGFo5iF%2BsL%2Bj0CaBrxeUn%2Fel5lHuKaL6sBzMUOVONRX369XmzPDuu7dn4BBf8SKmjTfzKNfy%2BO3kWB3b%2BRIfhsk1fPGDGLrjeqtvRRKlU782LJ6vDLHLWdnQOBX6koSuiQj%2BhzybiNuFNETp5GGPuUcG8Rv2mw6Ia7P5EA7jFmKwz&X-Amz-Signature=62f0318567e213226e4232b37148ac411a29a75f1625fb141e1430b93e216954&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SEO7QUX%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCl643AqPzhIzW5ao7q5CHdto1O80yvCpJsXbgUBVOExgIhANo0HpOF%2BgBbxVxdbJc5uDtjlDfqLum3VvS1eVc2jaDvKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxu35Tb8ANYyuB1Fjoq3AN5TBahZL%2B7lAHt5BtGQT7NWNXgQF5KS0wWAhXSIGE%2Bv57oXd2Dt%2BSjVteiiox5vnF%2BcNvXp9Y8XCnLHcy0kaa2d%2Fv%2FR0E34OPqR2YSvFiN8FbbrkeMZIUj89SdRhIGGp%2FraqBT%2F4SB%2F8yfqot6lVnakS7NlR45UIZLrtPJizaqvo803fllVdmYr5N7WxqkUHBe97eOW02AqXxWle2NI6EGPrYzLfOBBU4a8ITSwplvlu%2FdjwEMRSVfR5E%2Fs33CxAT9vPZM0RCvruiw3NOivONpG4p%2Fnp8rA44HHPdVmgsuaoWWazgpzDAYCsBJkoc%2BlUVthgJbcZ6KitG7HN3Yix%2FVtkMq8Xnq5qEPJf4WyhwkPjJXqHRCDijyMwtzyzXSYBMsIZdLS3pAM1OOvFHJJA6MV6FZ9kJxQixQn2Jvw1oYB094GureNLrn4BuXCNp4P3M2JmeYgB3xXvTaf5MDO%2FmjezvWD9qrGtEQkc248QiMe%2FKbk2CeTSyQQnqGVOaj0JSkPN588%2BsymKDfR%2FvhFwgPtysSF9R%2FbffVh8%2Bjt1YNvFD0MI635lWdecmZd3CL37y%2BuAOniQgs9FPgxqqZc8IP4SinLMeS4973vYfsapR1G3lzBgs95dicpOawMTDtw%2FLFBjqkASFtKInvDbB8SPN9dZb7XpGH6Cyo7f4KbMS2S6%2FByyCQXBKhGFo5iF%2BsL%2Bj0CaBrxeUn%2Fel5lHuKaL6sBzMUOVONRX369XmzPDuu7dn4BBf8SKmjTfzKNfy%2BO3kWB3b%2BRIfhsk1fPGDGLrjeqtvRRKlU782LJ6vDLHLWdnQOBX6koSuiQj%2BhzybiNuFNETp5GGPuUcG8Rv2mw6Ia7P5EA7jFmKwz&X-Amz-Signature=fd1cc30366e5501da5363bca624f3c35802ccb67026d339f30b6332d2685013d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SEO7QUX%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCl643AqPzhIzW5ao7q5CHdto1O80yvCpJsXbgUBVOExgIhANo0HpOF%2BgBbxVxdbJc5uDtjlDfqLum3VvS1eVc2jaDvKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxu35Tb8ANYyuB1Fjoq3AN5TBahZL%2B7lAHt5BtGQT7NWNXgQF5KS0wWAhXSIGE%2Bv57oXd2Dt%2BSjVteiiox5vnF%2BcNvXp9Y8XCnLHcy0kaa2d%2Fv%2FR0E34OPqR2YSvFiN8FbbrkeMZIUj89SdRhIGGp%2FraqBT%2F4SB%2F8yfqot6lVnakS7NlR45UIZLrtPJizaqvo803fllVdmYr5N7WxqkUHBe97eOW02AqXxWle2NI6EGPrYzLfOBBU4a8ITSwplvlu%2FdjwEMRSVfR5E%2Fs33CxAT9vPZM0RCvruiw3NOivONpG4p%2Fnp8rA44HHPdVmgsuaoWWazgpzDAYCsBJkoc%2BlUVthgJbcZ6KitG7HN3Yix%2FVtkMq8Xnq5qEPJf4WyhwkPjJXqHRCDijyMwtzyzXSYBMsIZdLS3pAM1OOvFHJJA6MV6FZ9kJxQixQn2Jvw1oYB094GureNLrn4BuXCNp4P3M2JmeYgB3xXvTaf5MDO%2FmjezvWD9qrGtEQkc248QiMe%2FKbk2CeTSyQQnqGVOaj0JSkPN588%2BsymKDfR%2FvhFwgPtysSF9R%2FbffVh8%2Bjt1YNvFD0MI635lWdecmZd3CL37y%2BuAOniQgs9FPgxqqZc8IP4SinLMeS4973vYfsapR1G3lzBgs95dicpOawMTDtw%2FLFBjqkASFtKInvDbB8SPN9dZb7XpGH6Cyo7f4KbMS2S6%2FByyCQXBKhGFo5iF%2BsL%2Bj0CaBrxeUn%2Fel5lHuKaL6sBzMUOVONRX369XmzPDuu7dn4BBf8SKmjTfzKNfy%2BO3kWB3b%2BRIfhsk1fPGDGLrjeqtvRRKlU782LJ6vDLHLWdnQOBX6koSuiQj%2BhzybiNuFNETp5GGPuUcG8Rv2mw6Ia7P5EA7jFmKwz&X-Amz-Signature=fc0abb168624dfb3009ae3d8f70b844e3991c2be4ea307668955594e627c735f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SEO7QUX%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCl643AqPzhIzW5ao7q5CHdto1O80yvCpJsXbgUBVOExgIhANo0HpOF%2BgBbxVxdbJc5uDtjlDfqLum3VvS1eVc2jaDvKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxu35Tb8ANYyuB1Fjoq3AN5TBahZL%2B7lAHt5BtGQT7NWNXgQF5KS0wWAhXSIGE%2Bv57oXd2Dt%2BSjVteiiox5vnF%2BcNvXp9Y8XCnLHcy0kaa2d%2Fv%2FR0E34OPqR2YSvFiN8FbbrkeMZIUj89SdRhIGGp%2FraqBT%2F4SB%2F8yfqot6lVnakS7NlR45UIZLrtPJizaqvo803fllVdmYr5N7WxqkUHBe97eOW02AqXxWle2NI6EGPrYzLfOBBU4a8ITSwplvlu%2FdjwEMRSVfR5E%2Fs33CxAT9vPZM0RCvruiw3NOivONpG4p%2Fnp8rA44HHPdVmgsuaoWWazgpzDAYCsBJkoc%2BlUVthgJbcZ6KitG7HN3Yix%2FVtkMq8Xnq5qEPJf4WyhwkPjJXqHRCDijyMwtzyzXSYBMsIZdLS3pAM1OOvFHJJA6MV6FZ9kJxQixQn2Jvw1oYB094GureNLrn4BuXCNp4P3M2JmeYgB3xXvTaf5MDO%2FmjezvWD9qrGtEQkc248QiMe%2FKbk2CeTSyQQnqGVOaj0JSkPN588%2BsymKDfR%2FvhFwgPtysSF9R%2FbffVh8%2Bjt1YNvFD0MI635lWdecmZd3CL37y%2BuAOniQgs9FPgxqqZc8IP4SinLMeS4973vYfsapR1G3lzBgs95dicpOawMTDtw%2FLFBjqkASFtKInvDbB8SPN9dZb7XpGH6Cyo7f4KbMS2S6%2FByyCQXBKhGFo5iF%2BsL%2Bj0CaBrxeUn%2Fel5lHuKaL6sBzMUOVONRX369XmzPDuu7dn4BBf8SKmjTfzKNfy%2BO3kWB3b%2BRIfhsk1fPGDGLrjeqtvRRKlU782LJ6vDLHLWdnQOBX6koSuiQj%2BhzybiNuFNETp5GGPuUcG8Rv2mw6Ia7P5EA7jFmKwz&X-Amz-Signature=789405c4da00eb5098ecc16a9be242e31aa47ecfb190730c83ded3eb23d25654&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```shell
ros2 launch mbot_pkg display.launch.py
```

```bash "1-1"
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

You should be able to publish a goal pose in rviz like in the section above

If you need your robot to autonomously put goal poses down, such as a match start in Robomasters, you just need to publish `geometry_msgs/PoseStamped` on `/goal_pose` inside of `my_node`

## Adding `nav2_bringup` to launch file

```python "1-9","9-9","9-12","12-21","40-40"
  
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
            'params_file': nav2_yaml,
            'use_sim_time': LaunchConfiguration('use_sim_time')

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

If you have gotten to this part of the guide:

## 🎉CONGRATS YOU GOT NAV2 WORKING 🎉

However, now there is a lot more tuning that needs to be done

# Tuning Nav2 settings

Depending on what your final robot looks like you should change the `footprint` and `robot_radius` parameter. These were the green outline in rviz around the robot and are used to calculate the path finding on the 2D map.

[Guide for footprint tuning](https://docs.nav2.org/setup_guides/algorithm/select_algorithm.html)

All the other settings in the `nav2_params.yaml` also need to be tuned because the `nav2_bringup_node` launches multiple nodes each with many parameters. Here is a general [guide from the official nav2 docs](https://docs.nav2.org/setup_guides/algorithm/select_algorithm.html) that goes over what each node does and how to tune them. However, the next guide will go a little more indepth on how to better turn the `nav2_param.yaml` file.
