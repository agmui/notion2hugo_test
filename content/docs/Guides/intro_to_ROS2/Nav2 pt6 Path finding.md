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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGJ6KEJU%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ4gycIdJ9lyp7dCm%2BXE2c%2FfAmzptz%2FAKGqs68Wjq%2BKQIgQnHPIPGf5SNQXSKfdJXWiPfef9pkk4onbvXA4djAZX0qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDuMzDXX9luz5g%2F8dCrcA4MUg3%2FBHWuiLFuWciyZpzS682%2BrJEZ2keq7cvaGxow8AMFnoAApKlhcY%2F9cQMDe6YrRyGGDfgOUGKpSyFNHwcxO9%2BazweiXvpsfmIU0%2BZaZgyRqO2gpyhm%2FY2r6CSAa%2B81%2FhD9ONaxZpJHJN4%2FRB%2FJpYvDAoxliIBisV9plcfdRymhtQgvXu%2BB%2F4uUxciCc5Zkpu4tZgyZBhW3R5HBkVbn8tcvcpEVfAPwefZa1FRziaqpLEcqLsLxBF2rsunyPV1DDAbU7bvSp7AO5BkHaHI4sVMRmqe5emwH%2BZtouNYhcHKenUDaIOurcIo1fr%2FsBcE%2BFm9AnXe3ZQy7jsBY%2F8u1J0izGrv2D08CbvQo%2BSju39IFQuWgnLp%2FYP4HZ%2FwwwGsLjibKrbW0dkriF45ko6tt9CaKKX506cmTfZyXp3EuEXldTXGcWotmqPGAhTRg7xFkQHERmUxvj8PYNEM4MbYMW79ID6pVD4Cqg44OZHw2kueq3HI0mQ%2BQiLMZTRZJbe4tDGzsMSMdqCPTkGyX6dnkcmL9Hfn0CuKGximC3MRaUhMo3tNU%2FVtUR9n3qE9yMrDr8kPKBg4whIzDCtTPbKHf7HokLmNzBx0bhYabzU5j4YtvfrM1lJpC7dMaTMLSvzM4GOqUBl2fH7BSIQ2raPNzNIFLgO9IiT4yoATGlimU2AyYA0GR9cbSU%2Ffp7Hd8ZNYuydDBFawRjTWosEq8BVfc2q7ZAAkAazPb4vj%2FSJAFWo54eK716BCpnRi6wmedIf7Uz8yNQ90tneB6SuKkQOPPht8aEGSLT%2Fg5S2eTZls5RpUIcW%2FOyoUopVhAFjjhZe4DnB65w9xLD3OXUq8NJ%2Bwwd%2FFOHo0fDqrsh&X-Amz-Signature=351508311c7c8e2a424829f2a7d88c55db98b6847975c50f4bf2b643f3d6ad7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGJ6KEJU%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ4gycIdJ9lyp7dCm%2BXE2c%2FfAmzptz%2FAKGqs68Wjq%2BKQIgQnHPIPGf5SNQXSKfdJXWiPfef9pkk4onbvXA4djAZX0qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDuMzDXX9luz5g%2F8dCrcA4MUg3%2FBHWuiLFuWciyZpzS682%2BrJEZ2keq7cvaGxow8AMFnoAApKlhcY%2F9cQMDe6YrRyGGDfgOUGKpSyFNHwcxO9%2BazweiXvpsfmIU0%2BZaZgyRqO2gpyhm%2FY2r6CSAa%2B81%2FhD9ONaxZpJHJN4%2FRB%2FJpYvDAoxliIBisV9plcfdRymhtQgvXu%2BB%2F4uUxciCc5Zkpu4tZgyZBhW3R5HBkVbn8tcvcpEVfAPwefZa1FRziaqpLEcqLsLxBF2rsunyPV1DDAbU7bvSp7AO5BkHaHI4sVMRmqe5emwH%2BZtouNYhcHKenUDaIOurcIo1fr%2FsBcE%2BFm9AnXe3ZQy7jsBY%2F8u1J0izGrv2D08CbvQo%2BSju39IFQuWgnLp%2FYP4HZ%2FwwwGsLjibKrbW0dkriF45ko6tt9CaKKX506cmTfZyXp3EuEXldTXGcWotmqPGAhTRg7xFkQHERmUxvj8PYNEM4MbYMW79ID6pVD4Cqg44OZHw2kueq3HI0mQ%2BQiLMZTRZJbe4tDGzsMSMdqCPTkGyX6dnkcmL9Hfn0CuKGximC3MRaUhMo3tNU%2FVtUR9n3qE9yMrDr8kPKBg4whIzDCtTPbKHf7HokLmNzBx0bhYabzU5j4YtvfrM1lJpC7dMaTMLSvzM4GOqUBl2fH7BSIQ2raPNzNIFLgO9IiT4yoATGlimU2AyYA0GR9cbSU%2Ffp7Hd8ZNYuydDBFawRjTWosEq8BVfc2q7ZAAkAazPb4vj%2FSJAFWo54eK716BCpnRi6wmedIf7Uz8yNQ90tneB6SuKkQOPPht8aEGSLT%2Fg5S2eTZls5RpUIcW%2FOyoUopVhAFjjhZe4DnB65w9xLD3OXUq8NJ%2Bwwd%2FFOHo0fDqrsh&X-Amz-Signature=97454655d2620416c0afbb0e8382aec547255277f95dedd963f41038b78a312d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGJ6KEJU%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ4gycIdJ9lyp7dCm%2BXE2c%2FfAmzptz%2FAKGqs68Wjq%2BKQIgQnHPIPGf5SNQXSKfdJXWiPfef9pkk4onbvXA4djAZX0qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDuMzDXX9luz5g%2F8dCrcA4MUg3%2FBHWuiLFuWciyZpzS682%2BrJEZ2keq7cvaGxow8AMFnoAApKlhcY%2F9cQMDe6YrRyGGDfgOUGKpSyFNHwcxO9%2BazweiXvpsfmIU0%2BZaZgyRqO2gpyhm%2FY2r6CSAa%2B81%2FhD9ONaxZpJHJN4%2FRB%2FJpYvDAoxliIBisV9plcfdRymhtQgvXu%2BB%2F4uUxciCc5Zkpu4tZgyZBhW3R5HBkVbn8tcvcpEVfAPwefZa1FRziaqpLEcqLsLxBF2rsunyPV1DDAbU7bvSp7AO5BkHaHI4sVMRmqe5emwH%2BZtouNYhcHKenUDaIOurcIo1fr%2FsBcE%2BFm9AnXe3ZQy7jsBY%2F8u1J0izGrv2D08CbvQo%2BSju39IFQuWgnLp%2FYP4HZ%2FwwwGsLjibKrbW0dkriF45ko6tt9CaKKX506cmTfZyXp3EuEXldTXGcWotmqPGAhTRg7xFkQHERmUxvj8PYNEM4MbYMW79ID6pVD4Cqg44OZHw2kueq3HI0mQ%2BQiLMZTRZJbe4tDGzsMSMdqCPTkGyX6dnkcmL9Hfn0CuKGximC3MRaUhMo3tNU%2FVtUR9n3qE9yMrDr8kPKBg4whIzDCtTPbKHf7HokLmNzBx0bhYabzU5j4YtvfrM1lJpC7dMaTMLSvzM4GOqUBl2fH7BSIQ2raPNzNIFLgO9IiT4yoATGlimU2AyYA0GR9cbSU%2Ffp7Hd8ZNYuydDBFawRjTWosEq8BVfc2q7ZAAkAazPb4vj%2FSJAFWo54eK716BCpnRi6wmedIf7Uz8yNQ90tneB6SuKkQOPPht8aEGSLT%2Fg5S2eTZls5RpUIcW%2FOyoUopVhAFjjhZe4DnB65w9xLD3OXUq8NJ%2Bwwd%2FFOHo0fDqrsh&X-Amz-Signature=db2f7c74d13e40b7e6372b64031a989598c6f081fe20e1a495a21b49c0cc9ee2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGJ6KEJU%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ4gycIdJ9lyp7dCm%2BXE2c%2FfAmzptz%2FAKGqs68Wjq%2BKQIgQnHPIPGf5SNQXSKfdJXWiPfef9pkk4onbvXA4djAZX0qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDuMzDXX9luz5g%2F8dCrcA4MUg3%2FBHWuiLFuWciyZpzS682%2BrJEZ2keq7cvaGxow8AMFnoAApKlhcY%2F9cQMDe6YrRyGGDfgOUGKpSyFNHwcxO9%2BazweiXvpsfmIU0%2BZaZgyRqO2gpyhm%2FY2r6CSAa%2B81%2FhD9ONaxZpJHJN4%2FRB%2FJpYvDAoxliIBisV9plcfdRymhtQgvXu%2BB%2F4uUxciCc5Zkpu4tZgyZBhW3R5HBkVbn8tcvcpEVfAPwefZa1FRziaqpLEcqLsLxBF2rsunyPV1DDAbU7bvSp7AO5BkHaHI4sVMRmqe5emwH%2BZtouNYhcHKenUDaIOurcIo1fr%2FsBcE%2BFm9AnXe3ZQy7jsBY%2F8u1J0izGrv2D08CbvQo%2BSju39IFQuWgnLp%2FYP4HZ%2FwwwGsLjibKrbW0dkriF45ko6tt9CaKKX506cmTfZyXp3EuEXldTXGcWotmqPGAhTRg7xFkQHERmUxvj8PYNEM4MbYMW79ID6pVD4Cqg44OZHw2kueq3HI0mQ%2BQiLMZTRZJbe4tDGzsMSMdqCPTkGyX6dnkcmL9Hfn0CuKGximC3MRaUhMo3tNU%2FVtUR9n3qE9yMrDr8kPKBg4whIzDCtTPbKHf7HokLmNzBx0bhYabzU5j4YtvfrM1lJpC7dMaTMLSvzM4GOqUBl2fH7BSIQ2raPNzNIFLgO9IiT4yoATGlimU2AyYA0GR9cbSU%2Ffp7Hd8ZNYuydDBFawRjTWosEq8BVfc2q7ZAAkAazPb4vj%2FSJAFWo54eK716BCpnRi6wmedIf7Uz8yNQ90tneB6SuKkQOPPht8aEGSLT%2Fg5S2eTZls5RpUIcW%2FOyoUopVhAFjjhZe4DnB65w9xLD3OXUq8NJ%2Bwwd%2FFOHo0fDqrsh&X-Amz-Signature=43cf105f8522a7eb98273d9daa9f6b1d5524c364b34a1b1d8ae4984fe45a3431&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGJ6KEJU%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ4gycIdJ9lyp7dCm%2BXE2c%2FfAmzptz%2FAKGqs68Wjq%2BKQIgQnHPIPGf5SNQXSKfdJXWiPfef9pkk4onbvXA4djAZX0qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDuMzDXX9luz5g%2F8dCrcA4MUg3%2FBHWuiLFuWciyZpzS682%2BrJEZ2keq7cvaGxow8AMFnoAApKlhcY%2F9cQMDe6YrRyGGDfgOUGKpSyFNHwcxO9%2BazweiXvpsfmIU0%2BZaZgyRqO2gpyhm%2FY2r6CSAa%2B81%2FhD9ONaxZpJHJN4%2FRB%2FJpYvDAoxliIBisV9plcfdRymhtQgvXu%2BB%2F4uUxciCc5Zkpu4tZgyZBhW3R5HBkVbn8tcvcpEVfAPwefZa1FRziaqpLEcqLsLxBF2rsunyPV1DDAbU7bvSp7AO5BkHaHI4sVMRmqe5emwH%2BZtouNYhcHKenUDaIOurcIo1fr%2FsBcE%2BFm9AnXe3ZQy7jsBY%2F8u1J0izGrv2D08CbvQo%2BSju39IFQuWgnLp%2FYP4HZ%2FwwwGsLjibKrbW0dkriF45ko6tt9CaKKX506cmTfZyXp3EuEXldTXGcWotmqPGAhTRg7xFkQHERmUxvj8PYNEM4MbYMW79ID6pVD4Cqg44OZHw2kueq3HI0mQ%2BQiLMZTRZJbe4tDGzsMSMdqCPTkGyX6dnkcmL9Hfn0CuKGximC3MRaUhMo3tNU%2FVtUR9n3qE9yMrDr8kPKBg4whIzDCtTPbKHf7HokLmNzBx0bhYabzU5j4YtvfrM1lJpC7dMaTMLSvzM4GOqUBl2fH7BSIQ2raPNzNIFLgO9IiT4yoATGlimU2AyYA0GR9cbSU%2Ffp7Hd8ZNYuydDBFawRjTWosEq8BVfc2q7ZAAkAazPb4vj%2FSJAFWo54eK716BCpnRi6wmedIf7Uz8yNQ90tneB6SuKkQOPPht8aEGSLT%2Fg5S2eTZls5RpUIcW%2FOyoUopVhAFjjhZe4DnB65w9xLD3OXUq8NJ%2Bwwd%2FFOHo0fDqrsh&X-Amz-Signature=a6baf9327cbbe9b2eb97c255b305e86fdc1f5b6c9197675a7e21709028d723bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGJ6KEJU%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ4gycIdJ9lyp7dCm%2BXE2c%2FfAmzptz%2FAKGqs68Wjq%2BKQIgQnHPIPGf5SNQXSKfdJXWiPfef9pkk4onbvXA4djAZX0qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDuMzDXX9luz5g%2F8dCrcA4MUg3%2FBHWuiLFuWciyZpzS682%2BrJEZ2keq7cvaGxow8AMFnoAApKlhcY%2F9cQMDe6YrRyGGDfgOUGKpSyFNHwcxO9%2BazweiXvpsfmIU0%2BZaZgyRqO2gpyhm%2FY2r6CSAa%2B81%2FhD9ONaxZpJHJN4%2FRB%2FJpYvDAoxliIBisV9plcfdRymhtQgvXu%2BB%2F4uUxciCc5Zkpu4tZgyZBhW3R5HBkVbn8tcvcpEVfAPwefZa1FRziaqpLEcqLsLxBF2rsunyPV1DDAbU7bvSp7AO5BkHaHI4sVMRmqe5emwH%2BZtouNYhcHKenUDaIOurcIo1fr%2FsBcE%2BFm9AnXe3ZQy7jsBY%2F8u1J0izGrv2D08CbvQo%2BSju39IFQuWgnLp%2FYP4HZ%2FwwwGsLjibKrbW0dkriF45ko6tt9CaKKX506cmTfZyXp3EuEXldTXGcWotmqPGAhTRg7xFkQHERmUxvj8PYNEM4MbYMW79ID6pVD4Cqg44OZHw2kueq3HI0mQ%2BQiLMZTRZJbe4tDGzsMSMdqCPTkGyX6dnkcmL9Hfn0CuKGximC3MRaUhMo3tNU%2FVtUR9n3qE9yMrDr8kPKBg4whIzDCtTPbKHf7HokLmNzBx0bhYabzU5j4YtvfrM1lJpC7dMaTMLSvzM4GOqUBl2fH7BSIQ2raPNzNIFLgO9IiT4yoATGlimU2AyYA0GR9cbSU%2Ffp7Hd8ZNYuydDBFawRjTWosEq8BVfc2q7ZAAkAazPb4vj%2FSJAFWo54eK716BCpnRi6wmedIf7Uz8yNQ90tneB6SuKkQOPPht8aEGSLT%2Fg5S2eTZls5RpUIcW%2FOyoUopVhAFjjhZe4DnB65w9xLD3OXUq8NJ%2Bwwd%2FFOHo0fDqrsh&X-Amz-Signature=a7ab1a8f9402a63e4214035a8eca446085c7cf1440dd500e36f1405ba4b6a2f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGJ6KEJU%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ4gycIdJ9lyp7dCm%2BXE2c%2FfAmzptz%2FAKGqs68Wjq%2BKQIgQnHPIPGf5SNQXSKfdJXWiPfef9pkk4onbvXA4djAZX0qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDuMzDXX9luz5g%2F8dCrcA4MUg3%2FBHWuiLFuWciyZpzS682%2BrJEZ2keq7cvaGxow8AMFnoAApKlhcY%2F9cQMDe6YrRyGGDfgOUGKpSyFNHwcxO9%2BazweiXvpsfmIU0%2BZaZgyRqO2gpyhm%2FY2r6CSAa%2B81%2FhD9ONaxZpJHJN4%2FRB%2FJpYvDAoxliIBisV9plcfdRymhtQgvXu%2BB%2F4uUxciCc5Zkpu4tZgyZBhW3R5HBkVbn8tcvcpEVfAPwefZa1FRziaqpLEcqLsLxBF2rsunyPV1DDAbU7bvSp7AO5BkHaHI4sVMRmqe5emwH%2BZtouNYhcHKenUDaIOurcIo1fr%2FsBcE%2BFm9AnXe3ZQy7jsBY%2F8u1J0izGrv2D08CbvQo%2BSju39IFQuWgnLp%2FYP4HZ%2FwwwGsLjibKrbW0dkriF45ko6tt9CaKKX506cmTfZyXp3EuEXldTXGcWotmqPGAhTRg7xFkQHERmUxvj8PYNEM4MbYMW79ID6pVD4Cqg44OZHw2kueq3HI0mQ%2BQiLMZTRZJbe4tDGzsMSMdqCPTkGyX6dnkcmL9Hfn0CuKGximC3MRaUhMo3tNU%2FVtUR9n3qE9yMrDr8kPKBg4whIzDCtTPbKHf7HokLmNzBx0bhYabzU5j4YtvfrM1lJpC7dMaTMLSvzM4GOqUBl2fH7BSIQ2raPNzNIFLgO9IiT4yoATGlimU2AyYA0GR9cbSU%2Ffp7Hd8ZNYuydDBFawRjTWosEq8BVfc2q7ZAAkAazPb4vj%2FSJAFWo54eK716BCpnRi6wmedIf7Uz8yNQ90tneB6SuKkQOPPht8aEGSLT%2Fg5S2eTZls5RpUIcW%2FOyoUopVhAFjjhZe4DnB65w9xLD3OXUq8NJ%2Bwwd%2FFOHo0fDqrsh&X-Amz-Signature=caf4a5e0a06b7d6e104d8184bae64fc1347999c9caff595fef60f321dc02a40a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGJ6KEJU%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ4gycIdJ9lyp7dCm%2BXE2c%2FfAmzptz%2FAKGqs68Wjq%2BKQIgQnHPIPGf5SNQXSKfdJXWiPfef9pkk4onbvXA4djAZX0qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDuMzDXX9luz5g%2F8dCrcA4MUg3%2FBHWuiLFuWciyZpzS682%2BrJEZ2keq7cvaGxow8AMFnoAApKlhcY%2F9cQMDe6YrRyGGDfgOUGKpSyFNHwcxO9%2BazweiXvpsfmIU0%2BZaZgyRqO2gpyhm%2FY2r6CSAa%2B81%2FhD9ONaxZpJHJN4%2FRB%2FJpYvDAoxliIBisV9plcfdRymhtQgvXu%2BB%2F4uUxciCc5Zkpu4tZgyZBhW3R5HBkVbn8tcvcpEVfAPwefZa1FRziaqpLEcqLsLxBF2rsunyPV1DDAbU7bvSp7AO5BkHaHI4sVMRmqe5emwH%2BZtouNYhcHKenUDaIOurcIo1fr%2FsBcE%2BFm9AnXe3ZQy7jsBY%2F8u1J0izGrv2D08CbvQo%2BSju39IFQuWgnLp%2FYP4HZ%2FwwwGsLjibKrbW0dkriF45ko6tt9CaKKX506cmTfZyXp3EuEXldTXGcWotmqPGAhTRg7xFkQHERmUxvj8PYNEM4MbYMW79ID6pVD4Cqg44OZHw2kueq3HI0mQ%2BQiLMZTRZJbe4tDGzsMSMdqCPTkGyX6dnkcmL9Hfn0CuKGximC3MRaUhMo3tNU%2FVtUR9n3qE9yMrDr8kPKBg4whIzDCtTPbKHf7HokLmNzBx0bhYabzU5j4YtvfrM1lJpC7dMaTMLSvzM4GOqUBl2fH7BSIQ2raPNzNIFLgO9IiT4yoATGlimU2AyYA0GR9cbSU%2Ffp7Hd8ZNYuydDBFawRjTWosEq8BVfc2q7ZAAkAazPb4vj%2FSJAFWo54eK716BCpnRi6wmedIf7Uz8yNQ90tneB6SuKkQOPPht8aEGSLT%2Fg5S2eTZls5RpUIcW%2FOyoUopVhAFjjhZe4DnB65w9xLD3OXUq8NJ%2Bwwd%2FFOHo0fDqrsh&X-Amz-Signature=dc31f8de4cf96ab6d7c09a2cf31ccb44a40d25755d624a3b18f938d526e907f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGJ6KEJU%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ4gycIdJ9lyp7dCm%2BXE2c%2FfAmzptz%2FAKGqs68Wjq%2BKQIgQnHPIPGf5SNQXSKfdJXWiPfef9pkk4onbvXA4djAZX0qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDuMzDXX9luz5g%2F8dCrcA4MUg3%2FBHWuiLFuWciyZpzS682%2BrJEZ2keq7cvaGxow8AMFnoAApKlhcY%2F9cQMDe6YrRyGGDfgOUGKpSyFNHwcxO9%2BazweiXvpsfmIU0%2BZaZgyRqO2gpyhm%2FY2r6CSAa%2B81%2FhD9ONaxZpJHJN4%2FRB%2FJpYvDAoxliIBisV9plcfdRymhtQgvXu%2BB%2F4uUxciCc5Zkpu4tZgyZBhW3R5HBkVbn8tcvcpEVfAPwefZa1FRziaqpLEcqLsLxBF2rsunyPV1DDAbU7bvSp7AO5BkHaHI4sVMRmqe5emwH%2BZtouNYhcHKenUDaIOurcIo1fr%2FsBcE%2BFm9AnXe3ZQy7jsBY%2F8u1J0izGrv2D08CbvQo%2BSju39IFQuWgnLp%2FYP4HZ%2FwwwGsLjibKrbW0dkriF45ko6tt9CaKKX506cmTfZyXp3EuEXldTXGcWotmqPGAhTRg7xFkQHERmUxvj8PYNEM4MbYMW79ID6pVD4Cqg44OZHw2kueq3HI0mQ%2BQiLMZTRZJbe4tDGzsMSMdqCPTkGyX6dnkcmL9Hfn0CuKGximC3MRaUhMo3tNU%2FVtUR9n3qE9yMrDr8kPKBg4whIzDCtTPbKHf7HokLmNzBx0bhYabzU5j4YtvfrM1lJpC7dMaTMLSvzM4GOqUBl2fH7BSIQ2raPNzNIFLgO9IiT4yoATGlimU2AyYA0GR9cbSU%2Ffp7Hd8ZNYuydDBFawRjTWosEq8BVfc2q7ZAAkAazPb4vj%2FSJAFWo54eK716BCpnRi6wmedIf7Uz8yNQ90tneB6SuKkQOPPht8aEGSLT%2Fg5S2eTZls5RpUIcW%2FOyoUopVhAFjjhZe4DnB65w9xLD3OXUq8NJ%2Bwwd%2FFOHo0fDqrsh&X-Amz-Signature=2cfac88a5eba4f0bd6bf571e16831ad377be643a291f531e21a554ce75e7486e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGJ6KEJU%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ4gycIdJ9lyp7dCm%2BXE2c%2FfAmzptz%2FAKGqs68Wjq%2BKQIgQnHPIPGf5SNQXSKfdJXWiPfef9pkk4onbvXA4djAZX0qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDuMzDXX9luz5g%2F8dCrcA4MUg3%2FBHWuiLFuWciyZpzS682%2BrJEZ2keq7cvaGxow8AMFnoAApKlhcY%2F9cQMDe6YrRyGGDfgOUGKpSyFNHwcxO9%2BazweiXvpsfmIU0%2BZaZgyRqO2gpyhm%2FY2r6CSAa%2B81%2FhD9ONaxZpJHJN4%2FRB%2FJpYvDAoxliIBisV9plcfdRymhtQgvXu%2BB%2F4uUxciCc5Zkpu4tZgyZBhW3R5HBkVbn8tcvcpEVfAPwefZa1FRziaqpLEcqLsLxBF2rsunyPV1DDAbU7bvSp7AO5BkHaHI4sVMRmqe5emwH%2BZtouNYhcHKenUDaIOurcIo1fr%2FsBcE%2BFm9AnXe3ZQy7jsBY%2F8u1J0izGrv2D08CbvQo%2BSju39IFQuWgnLp%2FYP4HZ%2FwwwGsLjibKrbW0dkriF45ko6tt9CaKKX506cmTfZyXp3EuEXldTXGcWotmqPGAhTRg7xFkQHERmUxvj8PYNEM4MbYMW79ID6pVD4Cqg44OZHw2kueq3HI0mQ%2BQiLMZTRZJbe4tDGzsMSMdqCPTkGyX6dnkcmL9Hfn0CuKGximC3MRaUhMo3tNU%2FVtUR9n3qE9yMrDr8kPKBg4whIzDCtTPbKHf7HokLmNzBx0bhYabzU5j4YtvfrM1lJpC7dMaTMLSvzM4GOqUBl2fH7BSIQ2raPNzNIFLgO9IiT4yoATGlimU2AyYA0GR9cbSU%2Ffp7Hd8ZNYuydDBFawRjTWosEq8BVfc2q7ZAAkAazPb4vj%2FSJAFWo54eK716BCpnRi6wmedIf7Uz8yNQ90tneB6SuKkQOPPht8aEGSLT%2Fg5S2eTZls5RpUIcW%2FOyoUopVhAFjjhZe4DnB65w9xLD3OXUq8NJ%2Bwwd%2FFOHo0fDqrsh&X-Amz-Signature=e9fc439ac68bfc48558805050e200418d398a0fff1605d049713edb1e20ce24c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGJ6KEJU%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ4gycIdJ9lyp7dCm%2BXE2c%2FfAmzptz%2FAKGqs68Wjq%2BKQIgQnHPIPGf5SNQXSKfdJXWiPfef9pkk4onbvXA4djAZX0qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDuMzDXX9luz5g%2F8dCrcA4MUg3%2FBHWuiLFuWciyZpzS682%2BrJEZ2keq7cvaGxow8AMFnoAApKlhcY%2F9cQMDe6YrRyGGDfgOUGKpSyFNHwcxO9%2BazweiXvpsfmIU0%2BZaZgyRqO2gpyhm%2FY2r6CSAa%2B81%2FhD9ONaxZpJHJN4%2FRB%2FJpYvDAoxliIBisV9plcfdRymhtQgvXu%2BB%2F4uUxciCc5Zkpu4tZgyZBhW3R5HBkVbn8tcvcpEVfAPwefZa1FRziaqpLEcqLsLxBF2rsunyPV1DDAbU7bvSp7AO5BkHaHI4sVMRmqe5emwH%2BZtouNYhcHKenUDaIOurcIo1fr%2FsBcE%2BFm9AnXe3ZQy7jsBY%2F8u1J0izGrv2D08CbvQo%2BSju39IFQuWgnLp%2FYP4HZ%2FwwwGsLjibKrbW0dkriF45ko6tt9CaKKX506cmTfZyXp3EuEXldTXGcWotmqPGAhTRg7xFkQHERmUxvj8PYNEM4MbYMW79ID6pVD4Cqg44OZHw2kueq3HI0mQ%2BQiLMZTRZJbe4tDGzsMSMdqCPTkGyX6dnkcmL9Hfn0CuKGximC3MRaUhMo3tNU%2FVtUR9n3qE9yMrDr8kPKBg4whIzDCtTPbKHf7HokLmNzBx0bhYabzU5j4YtvfrM1lJpC7dMaTMLSvzM4GOqUBl2fH7BSIQ2raPNzNIFLgO9IiT4yoATGlimU2AyYA0GR9cbSU%2Ffp7Hd8ZNYuydDBFawRjTWosEq8BVfc2q7ZAAkAazPb4vj%2FSJAFWo54eK716BCpnRi6wmedIf7Uz8yNQ90tneB6SuKkQOPPht8aEGSLT%2Fg5S2eTZls5RpUIcW%2FOyoUopVhAFjjhZe4DnB65w9xLD3OXUq8NJ%2Bwwd%2FFOHo0fDqrsh&X-Amz-Signature=bdda0d3f1c9d9b03ffcac10c0366120f09e44e9729d5adfaa7dd4d85ed07f863&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGJ6KEJU%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ4gycIdJ9lyp7dCm%2BXE2c%2FfAmzptz%2FAKGqs68Wjq%2BKQIgQnHPIPGf5SNQXSKfdJXWiPfef9pkk4onbvXA4djAZX0qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDuMzDXX9luz5g%2F8dCrcA4MUg3%2FBHWuiLFuWciyZpzS682%2BrJEZ2keq7cvaGxow8AMFnoAApKlhcY%2F9cQMDe6YrRyGGDfgOUGKpSyFNHwcxO9%2BazweiXvpsfmIU0%2BZaZgyRqO2gpyhm%2FY2r6CSAa%2B81%2FhD9ONaxZpJHJN4%2FRB%2FJpYvDAoxliIBisV9plcfdRymhtQgvXu%2BB%2F4uUxciCc5Zkpu4tZgyZBhW3R5HBkVbn8tcvcpEVfAPwefZa1FRziaqpLEcqLsLxBF2rsunyPV1DDAbU7bvSp7AO5BkHaHI4sVMRmqe5emwH%2BZtouNYhcHKenUDaIOurcIo1fr%2FsBcE%2BFm9AnXe3ZQy7jsBY%2F8u1J0izGrv2D08CbvQo%2BSju39IFQuWgnLp%2FYP4HZ%2FwwwGsLjibKrbW0dkriF45ko6tt9CaKKX506cmTfZyXp3EuEXldTXGcWotmqPGAhTRg7xFkQHERmUxvj8PYNEM4MbYMW79ID6pVD4Cqg44OZHw2kueq3HI0mQ%2BQiLMZTRZJbe4tDGzsMSMdqCPTkGyX6dnkcmL9Hfn0CuKGximC3MRaUhMo3tNU%2FVtUR9n3qE9yMrDr8kPKBg4whIzDCtTPbKHf7HokLmNzBx0bhYabzU5j4YtvfrM1lJpC7dMaTMLSvzM4GOqUBl2fH7BSIQ2raPNzNIFLgO9IiT4yoATGlimU2AyYA0GR9cbSU%2Ffp7Hd8ZNYuydDBFawRjTWosEq8BVfc2q7ZAAkAazPb4vj%2FSJAFWo54eK716BCpnRi6wmedIf7Uz8yNQ90tneB6SuKkQOPPht8aEGSLT%2Fg5S2eTZls5RpUIcW%2FOyoUopVhAFjjhZe4DnB65w9xLD3OXUq8NJ%2Bwwd%2FFOHo0fDqrsh&X-Amz-Signature=cdcd4d3aa1a2602d8c310e3b496aa936ad491bd0aa52cad374777d6f9cfcde27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGJ6KEJU%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ4gycIdJ9lyp7dCm%2BXE2c%2FfAmzptz%2FAKGqs68Wjq%2BKQIgQnHPIPGf5SNQXSKfdJXWiPfef9pkk4onbvXA4djAZX0qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDuMzDXX9luz5g%2F8dCrcA4MUg3%2FBHWuiLFuWciyZpzS682%2BrJEZ2keq7cvaGxow8AMFnoAApKlhcY%2F9cQMDe6YrRyGGDfgOUGKpSyFNHwcxO9%2BazweiXvpsfmIU0%2BZaZgyRqO2gpyhm%2FY2r6CSAa%2B81%2FhD9ONaxZpJHJN4%2FRB%2FJpYvDAoxliIBisV9plcfdRymhtQgvXu%2BB%2F4uUxciCc5Zkpu4tZgyZBhW3R5HBkVbn8tcvcpEVfAPwefZa1FRziaqpLEcqLsLxBF2rsunyPV1DDAbU7bvSp7AO5BkHaHI4sVMRmqe5emwH%2BZtouNYhcHKenUDaIOurcIo1fr%2FsBcE%2BFm9AnXe3ZQy7jsBY%2F8u1J0izGrv2D08CbvQo%2BSju39IFQuWgnLp%2FYP4HZ%2FwwwGsLjibKrbW0dkriF45ko6tt9CaKKX506cmTfZyXp3EuEXldTXGcWotmqPGAhTRg7xFkQHERmUxvj8PYNEM4MbYMW79ID6pVD4Cqg44OZHw2kueq3HI0mQ%2BQiLMZTRZJbe4tDGzsMSMdqCPTkGyX6dnkcmL9Hfn0CuKGximC3MRaUhMo3tNU%2FVtUR9n3qE9yMrDr8kPKBg4whIzDCtTPbKHf7HokLmNzBx0bhYabzU5j4YtvfrM1lJpC7dMaTMLSvzM4GOqUBl2fH7BSIQ2raPNzNIFLgO9IiT4yoATGlimU2AyYA0GR9cbSU%2Ffp7Hd8ZNYuydDBFawRjTWosEq8BVfc2q7ZAAkAazPb4vj%2FSJAFWo54eK716BCpnRi6wmedIf7Uz8yNQ90tneB6SuKkQOPPht8aEGSLT%2Fg5S2eTZls5RpUIcW%2FOyoUopVhAFjjhZe4DnB65w9xLD3OXUq8NJ%2Bwwd%2FFOHo0fDqrsh&X-Amz-Signature=21e064a4ff11ab70c70286c3974d55996a792990c132c8752868510059d9cd99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
