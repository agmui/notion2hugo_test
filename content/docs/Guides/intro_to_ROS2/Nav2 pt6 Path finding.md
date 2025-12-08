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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPPMUMOW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtMWRlejjCl2noeorigYvgPTbOrmCWVfNxLvHpmsyqZAiAmKrxfyGUafLHv%2FSoOxyBqe6FCclVW5pKO13UNTXxhISqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpyPNhXey%2BQKknAhaKtwDWbu5wFlEP8memQoc0rmIrasSs4ZUhJip%2B5zNIt0BptZvbyHaM4LpLYRnYWZht82lfjQv%2BLmC91guKqFPWqjLcJE%2FgDI0El5qzfftmZEFMXZFaPwUZkMMB%2FFWLa42tO0LUTsgn4vvRw7tc8D2F%2BT4%2B1he4QBdK%2FeNqaxJ3qxyE4C6EW%2Fb%2FRL4JtpJOwpUayM5EOjDk3PNHSUnwEdWhC2FrfAtdiPIynYiByfZYX3pbwaHyvn4f5yAMI6HtDiJWYII38Kz0tjxWHVBhhqFKzG7npjkLVp%2BzAIrzfwpOh2XtGXL5b6i3PJmq1ASXChByNoXYqfu9sgUN1csgxRX%2BYL6zY%2B7yv8AoiS0LSG%2BtTuoGDxh8nN%2BSialftS8cRjykvdb5CWSWvvM%2Bwms8DeQ0NfpIV7aSobnpatoS2CematK6LEWqmGk7KP8T5Dy70FIIDpJCF8tV1YLdq9ZF9xOleVLC6bUNQMPJBZ3syiLu%2F96FgepMRt7nl92BE5ziXlg7AhRJc7gS5f3fyK74xzBRel61wMken7pAQUEN3HfQQEcCIl05OO1Md2ABEe204NlP8%2F3ZcSEoHhjFFyqUmRLc6%2FoVCX%2FdZeStqbwl4SEkiK%2FhAr8jq22NJR2MJNWb6sw9tDYyQY6pgG%2Fw6%2Fyyxl4sqjJexypaWLVPDUNk0XtNBBEE%2Ftu4oWgw0Um%2F1cD82%2FPufgzdIkGKIjBnHmc3DGjqizwf3YnXYY7rsqGbuhqOadGDm%2BsX6JcyjAabAFHl9c%2F7nD2cMnOm6clZY3asWruLQR8Aw%2BwUYvcvUSOp6F53qyA3tgFO95YNaKXBKQelsMvRHXgrjHVc4p1tCI34sC4Y%2B4%2Fj2Lg9%2BYb4tLueUq9&X-Amz-Signature=8b74bf72ae4d04cdeee14eea02ac1ab6a91ad07141c7f861c7bbf94ad4091aba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPPMUMOW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtMWRlejjCl2noeorigYvgPTbOrmCWVfNxLvHpmsyqZAiAmKrxfyGUafLHv%2FSoOxyBqe6FCclVW5pKO13UNTXxhISqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpyPNhXey%2BQKknAhaKtwDWbu5wFlEP8memQoc0rmIrasSs4ZUhJip%2B5zNIt0BptZvbyHaM4LpLYRnYWZht82lfjQv%2BLmC91guKqFPWqjLcJE%2FgDI0El5qzfftmZEFMXZFaPwUZkMMB%2FFWLa42tO0LUTsgn4vvRw7tc8D2F%2BT4%2B1he4QBdK%2FeNqaxJ3qxyE4C6EW%2Fb%2FRL4JtpJOwpUayM5EOjDk3PNHSUnwEdWhC2FrfAtdiPIynYiByfZYX3pbwaHyvn4f5yAMI6HtDiJWYII38Kz0tjxWHVBhhqFKzG7npjkLVp%2BzAIrzfwpOh2XtGXL5b6i3PJmq1ASXChByNoXYqfu9sgUN1csgxRX%2BYL6zY%2B7yv8AoiS0LSG%2BtTuoGDxh8nN%2BSialftS8cRjykvdb5CWSWvvM%2Bwms8DeQ0NfpIV7aSobnpatoS2CematK6LEWqmGk7KP8T5Dy70FIIDpJCF8tV1YLdq9ZF9xOleVLC6bUNQMPJBZ3syiLu%2F96FgepMRt7nl92BE5ziXlg7AhRJc7gS5f3fyK74xzBRel61wMken7pAQUEN3HfQQEcCIl05OO1Md2ABEe204NlP8%2F3ZcSEoHhjFFyqUmRLc6%2FoVCX%2FdZeStqbwl4SEkiK%2FhAr8jq22NJR2MJNWb6sw9tDYyQY6pgG%2Fw6%2Fyyxl4sqjJexypaWLVPDUNk0XtNBBEE%2Ftu4oWgw0Um%2F1cD82%2FPufgzdIkGKIjBnHmc3DGjqizwf3YnXYY7rsqGbuhqOadGDm%2BsX6JcyjAabAFHl9c%2F7nD2cMnOm6clZY3asWruLQR8Aw%2BwUYvcvUSOp6F53qyA3tgFO95YNaKXBKQelsMvRHXgrjHVc4p1tCI34sC4Y%2B4%2Fj2Lg9%2BYb4tLueUq9&X-Amz-Signature=09782abe4a23db3c27469cd1959bf0bd9f0200f337b1ba71246e252e3f4fa5f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPPMUMOW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtMWRlejjCl2noeorigYvgPTbOrmCWVfNxLvHpmsyqZAiAmKrxfyGUafLHv%2FSoOxyBqe6FCclVW5pKO13UNTXxhISqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpyPNhXey%2BQKknAhaKtwDWbu5wFlEP8memQoc0rmIrasSs4ZUhJip%2B5zNIt0BptZvbyHaM4LpLYRnYWZht82lfjQv%2BLmC91guKqFPWqjLcJE%2FgDI0El5qzfftmZEFMXZFaPwUZkMMB%2FFWLa42tO0LUTsgn4vvRw7tc8D2F%2BT4%2B1he4QBdK%2FeNqaxJ3qxyE4C6EW%2Fb%2FRL4JtpJOwpUayM5EOjDk3PNHSUnwEdWhC2FrfAtdiPIynYiByfZYX3pbwaHyvn4f5yAMI6HtDiJWYII38Kz0tjxWHVBhhqFKzG7npjkLVp%2BzAIrzfwpOh2XtGXL5b6i3PJmq1ASXChByNoXYqfu9sgUN1csgxRX%2BYL6zY%2B7yv8AoiS0LSG%2BtTuoGDxh8nN%2BSialftS8cRjykvdb5CWSWvvM%2Bwms8DeQ0NfpIV7aSobnpatoS2CematK6LEWqmGk7KP8T5Dy70FIIDpJCF8tV1YLdq9ZF9xOleVLC6bUNQMPJBZ3syiLu%2F96FgepMRt7nl92BE5ziXlg7AhRJc7gS5f3fyK74xzBRel61wMken7pAQUEN3HfQQEcCIl05OO1Md2ABEe204NlP8%2F3ZcSEoHhjFFyqUmRLc6%2FoVCX%2FdZeStqbwl4SEkiK%2FhAr8jq22NJR2MJNWb6sw9tDYyQY6pgG%2Fw6%2Fyyxl4sqjJexypaWLVPDUNk0XtNBBEE%2Ftu4oWgw0Um%2F1cD82%2FPufgzdIkGKIjBnHmc3DGjqizwf3YnXYY7rsqGbuhqOadGDm%2BsX6JcyjAabAFHl9c%2F7nD2cMnOm6clZY3asWruLQR8Aw%2BwUYvcvUSOp6F53qyA3tgFO95YNaKXBKQelsMvRHXgrjHVc4p1tCI34sC4Y%2B4%2Fj2Lg9%2BYb4tLueUq9&X-Amz-Signature=bf78ecc5d61dca1b51969744d84d949ce2464f51153da0db63e64f0532a282a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPPMUMOW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtMWRlejjCl2noeorigYvgPTbOrmCWVfNxLvHpmsyqZAiAmKrxfyGUafLHv%2FSoOxyBqe6FCclVW5pKO13UNTXxhISqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpyPNhXey%2BQKknAhaKtwDWbu5wFlEP8memQoc0rmIrasSs4ZUhJip%2B5zNIt0BptZvbyHaM4LpLYRnYWZht82lfjQv%2BLmC91guKqFPWqjLcJE%2FgDI0El5qzfftmZEFMXZFaPwUZkMMB%2FFWLa42tO0LUTsgn4vvRw7tc8D2F%2BT4%2B1he4QBdK%2FeNqaxJ3qxyE4C6EW%2Fb%2FRL4JtpJOwpUayM5EOjDk3PNHSUnwEdWhC2FrfAtdiPIynYiByfZYX3pbwaHyvn4f5yAMI6HtDiJWYII38Kz0tjxWHVBhhqFKzG7npjkLVp%2BzAIrzfwpOh2XtGXL5b6i3PJmq1ASXChByNoXYqfu9sgUN1csgxRX%2BYL6zY%2B7yv8AoiS0LSG%2BtTuoGDxh8nN%2BSialftS8cRjykvdb5CWSWvvM%2Bwms8DeQ0NfpIV7aSobnpatoS2CematK6LEWqmGk7KP8T5Dy70FIIDpJCF8tV1YLdq9ZF9xOleVLC6bUNQMPJBZ3syiLu%2F96FgepMRt7nl92BE5ziXlg7AhRJc7gS5f3fyK74xzBRel61wMken7pAQUEN3HfQQEcCIl05OO1Md2ABEe204NlP8%2F3ZcSEoHhjFFyqUmRLc6%2FoVCX%2FdZeStqbwl4SEkiK%2FhAr8jq22NJR2MJNWb6sw9tDYyQY6pgG%2Fw6%2Fyyxl4sqjJexypaWLVPDUNk0XtNBBEE%2Ftu4oWgw0Um%2F1cD82%2FPufgzdIkGKIjBnHmc3DGjqizwf3YnXYY7rsqGbuhqOadGDm%2BsX6JcyjAabAFHl9c%2F7nD2cMnOm6clZY3asWruLQR8Aw%2BwUYvcvUSOp6F53qyA3tgFO95YNaKXBKQelsMvRHXgrjHVc4p1tCI34sC4Y%2B4%2Fj2Lg9%2BYb4tLueUq9&X-Amz-Signature=28400d03b6859c9eba671fc8d67dd0dad82865e5ae985ef9b37fb8c8c596fc4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPPMUMOW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtMWRlejjCl2noeorigYvgPTbOrmCWVfNxLvHpmsyqZAiAmKrxfyGUafLHv%2FSoOxyBqe6FCclVW5pKO13UNTXxhISqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpyPNhXey%2BQKknAhaKtwDWbu5wFlEP8memQoc0rmIrasSs4ZUhJip%2B5zNIt0BptZvbyHaM4LpLYRnYWZht82lfjQv%2BLmC91guKqFPWqjLcJE%2FgDI0El5qzfftmZEFMXZFaPwUZkMMB%2FFWLa42tO0LUTsgn4vvRw7tc8D2F%2BT4%2B1he4QBdK%2FeNqaxJ3qxyE4C6EW%2Fb%2FRL4JtpJOwpUayM5EOjDk3PNHSUnwEdWhC2FrfAtdiPIynYiByfZYX3pbwaHyvn4f5yAMI6HtDiJWYII38Kz0tjxWHVBhhqFKzG7npjkLVp%2BzAIrzfwpOh2XtGXL5b6i3PJmq1ASXChByNoXYqfu9sgUN1csgxRX%2BYL6zY%2B7yv8AoiS0LSG%2BtTuoGDxh8nN%2BSialftS8cRjykvdb5CWSWvvM%2Bwms8DeQ0NfpIV7aSobnpatoS2CematK6LEWqmGk7KP8T5Dy70FIIDpJCF8tV1YLdq9ZF9xOleVLC6bUNQMPJBZ3syiLu%2F96FgepMRt7nl92BE5ziXlg7AhRJc7gS5f3fyK74xzBRel61wMken7pAQUEN3HfQQEcCIl05OO1Md2ABEe204NlP8%2F3ZcSEoHhjFFyqUmRLc6%2FoVCX%2FdZeStqbwl4SEkiK%2FhAr8jq22NJR2MJNWb6sw9tDYyQY6pgG%2Fw6%2Fyyxl4sqjJexypaWLVPDUNk0XtNBBEE%2Ftu4oWgw0Um%2F1cD82%2FPufgzdIkGKIjBnHmc3DGjqizwf3YnXYY7rsqGbuhqOadGDm%2BsX6JcyjAabAFHl9c%2F7nD2cMnOm6clZY3asWruLQR8Aw%2BwUYvcvUSOp6F53qyA3tgFO95YNaKXBKQelsMvRHXgrjHVc4p1tCI34sC4Y%2B4%2Fj2Lg9%2BYb4tLueUq9&X-Amz-Signature=ab13417f50538edd4a0a254b842dd70dc9973c5ac33738e555b96416bed930b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPPMUMOW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtMWRlejjCl2noeorigYvgPTbOrmCWVfNxLvHpmsyqZAiAmKrxfyGUafLHv%2FSoOxyBqe6FCclVW5pKO13UNTXxhISqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpyPNhXey%2BQKknAhaKtwDWbu5wFlEP8memQoc0rmIrasSs4ZUhJip%2B5zNIt0BptZvbyHaM4LpLYRnYWZht82lfjQv%2BLmC91guKqFPWqjLcJE%2FgDI0El5qzfftmZEFMXZFaPwUZkMMB%2FFWLa42tO0LUTsgn4vvRw7tc8D2F%2BT4%2B1he4QBdK%2FeNqaxJ3qxyE4C6EW%2Fb%2FRL4JtpJOwpUayM5EOjDk3PNHSUnwEdWhC2FrfAtdiPIynYiByfZYX3pbwaHyvn4f5yAMI6HtDiJWYII38Kz0tjxWHVBhhqFKzG7npjkLVp%2BzAIrzfwpOh2XtGXL5b6i3PJmq1ASXChByNoXYqfu9sgUN1csgxRX%2BYL6zY%2B7yv8AoiS0LSG%2BtTuoGDxh8nN%2BSialftS8cRjykvdb5CWSWvvM%2Bwms8DeQ0NfpIV7aSobnpatoS2CematK6LEWqmGk7KP8T5Dy70FIIDpJCF8tV1YLdq9ZF9xOleVLC6bUNQMPJBZ3syiLu%2F96FgepMRt7nl92BE5ziXlg7AhRJc7gS5f3fyK74xzBRel61wMken7pAQUEN3HfQQEcCIl05OO1Md2ABEe204NlP8%2F3ZcSEoHhjFFyqUmRLc6%2FoVCX%2FdZeStqbwl4SEkiK%2FhAr8jq22NJR2MJNWb6sw9tDYyQY6pgG%2Fw6%2Fyyxl4sqjJexypaWLVPDUNk0XtNBBEE%2Ftu4oWgw0Um%2F1cD82%2FPufgzdIkGKIjBnHmc3DGjqizwf3YnXYY7rsqGbuhqOadGDm%2BsX6JcyjAabAFHl9c%2F7nD2cMnOm6clZY3asWruLQR8Aw%2BwUYvcvUSOp6F53qyA3tgFO95YNaKXBKQelsMvRHXgrjHVc4p1tCI34sC4Y%2B4%2Fj2Lg9%2BYb4tLueUq9&X-Amz-Signature=fca5eebe63e882d14decf4519d552abc36ad1800a778e33cda3a423cd25683a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPPMUMOW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtMWRlejjCl2noeorigYvgPTbOrmCWVfNxLvHpmsyqZAiAmKrxfyGUafLHv%2FSoOxyBqe6FCclVW5pKO13UNTXxhISqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpyPNhXey%2BQKknAhaKtwDWbu5wFlEP8memQoc0rmIrasSs4ZUhJip%2B5zNIt0BptZvbyHaM4LpLYRnYWZht82lfjQv%2BLmC91guKqFPWqjLcJE%2FgDI0El5qzfftmZEFMXZFaPwUZkMMB%2FFWLa42tO0LUTsgn4vvRw7tc8D2F%2BT4%2B1he4QBdK%2FeNqaxJ3qxyE4C6EW%2Fb%2FRL4JtpJOwpUayM5EOjDk3PNHSUnwEdWhC2FrfAtdiPIynYiByfZYX3pbwaHyvn4f5yAMI6HtDiJWYII38Kz0tjxWHVBhhqFKzG7npjkLVp%2BzAIrzfwpOh2XtGXL5b6i3PJmq1ASXChByNoXYqfu9sgUN1csgxRX%2BYL6zY%2B7yv8AoiS0LSG%2BtTuoGDxh8nN%2BSialftS8cRjykvdb5CWSWvvM%2Bwms8DeQ0NfpIV7aSobnpatoS2CematK6LEWqmGk7KP8T5Dy70FIIDpJCF8tV1YLdq9ZF9xOleVLC6bUNQMPJBZ3syiLu%2F96FgepMRt7nl92BE5ziXlg7AhRJc7gS5f3fyK74xzBRel61wMken7pAQUEN3HfQQEcCIl05OO1Md2ABEe204NlP8%2F3ZcSEoHhjFFyqUmRLc6%2FoVCX%2FdZeStqbwl4SEkiK%2FhAr8jq22NJR2MJNWb6sw9tDYyQY6pgG%2Fw6%2Fyyxl4sqjJexypaWLVPDUNk0XtNBBEE%2Ftu4oWgw0Um%2F1cD82%2FPufgzdIkGKIjBnHmc3DGjqizwf3YnXYY7rsqGbuhqOadGDm%2BsX6JcyjAabAFHl9c%2F7nD2cMnOm6clZY3asWruLQR8Aw%2BwUYvcvUSOp6F53qyA3tgFO95YNaKXBKQelsMvRHXgrjHVc4p1tCI34sC4Y%2B4%2Fj2Lg9%2BYb4tLueUq9&X-Amz-Signature=62e2f973ffc03642049abe65f3cad2681186cb04fa8880efaf7ea2861ab56a0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPPMUMOW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtMWRlejjCl2noeorigYvgPTbOrmCWVfNxLvHpmsyqZAiAmKrxfyGUafLHv%2FSoOxyBqe6FCclVW5pKO13UNTXxhISqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpyPNhXey%2BQKknAhaKtwDWbu5wFlEP8memQoc0rmIrasSs4ZUhJip%2B5zNIt0BptZvbyHaM4LpLYRnYWZht82lfjQv%2BLmC91guKqFPWqjLcJE%2FgDI0El5qzfftmZEFMXZFaPwUZkMMB%2FFWLa42tO0LUTsgn4vvRw7tc8D2F%2BT4%2B1he4QBdK%2FeNqaxJ3qxyE4C6EW%2Fb%2FRL4JtpJOwpUayM5EOjDk3PNHSUnwEdWhC2FrfAtdiPIynYiByfZYX3pbwaHyvn4f5yAMI6HtDiJWYII38Kz0tjxWHVBhhqFKzG7npjkLVp%2BzAIrzfwpOh2XtGXL5b6i3PJmq1ASXChByNoXYqfu9sgUN1csgxRX%2BYL6zY%2B7yv8AoiS0LSG%2BtTuoGDxh8nN%2BSialftS8cRjykvdb5CWSWvvM%2Bwms8DeQ0NfpIV7aSobnpatoS2CematK6LEWqmGk7KP8T5Dy70FIIDpJCF8tV1YLdq9ZF9xOleVLC6bUNQMPJBZ3syiLu%2F96FgepMRt7nl92BE5ziXlg7AhRJc7gS5f3fyK74xzBRel61wMken7pAQUEN3HfQQEcCIl05OO1Md2ABEe204NlP8%2F3ZcSEoHhjFFyqUmRLc6%2FoVCX%2FdZeStqbwl4SEkiK%2FhAr8jq22NJR2MJNWb6sw9tDYyQY6pgG%2Fw6%2Fyyxl4sqjJexypaWLVPDUNk0XtNBBEE%2Ftu4oWgw0Um%2F1cD82%2FPufgzdIkGKIjBnHmc3DGjqizwf3YnXYY7rsqGbuhqOadGDm%2BsX6JcyjAabAFHl9c%2F7nD2cMnOm6clZY3asWruLQR8Aw%2BwUYvcvUSOp6F53qyA3tgFO95YNaKXBKQelsMvRHXgrjHVc4p1tCI34sC4Y%2B4%2Fj2Lg9%2BYb4tLueUq9&X-Amz-Signature=61431b76eb4c1b5b94b62222e723f38edc9803a525a41668757b545997fc56b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPPMUMOW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtMWRlejjCl2noeorigYvgPTbOrmCWVfNxLvHpmsyqZAiAmKrxfyGUafLHv%2FSoOxyBqe6FCclVW5pKO13UNTXxhISqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpyPNhXey%2BQKknAhaKtwDWbu5wFlEP8memQoc0rmIrasSs4ZUhJip%2B5zNIt0BptZvbyHaM4LpLYRnYWZht82lfjQv%2BLmC91guKqFPWqjLcJE%2FgDI0El5qzfftmZEFMXZFaPwUZkMMB%2FFWLa42tO0LUTsgn4vvRw7tc8D2F%2BT4%2B1he4QBdK%2FeNqaxJ3qxyE4C6EW%2Fb%2FRL4JtpJOwpUayM5EOjDk3PNHSUnwEdWhC2FrfAtdiPIynYiByfZYX3pbwaHyvn4f5yAMI6HtDiJWYII38Kz0tjxWHVBhhqFKzG7npjkLVp%2BzAIrzfwpOh2XtGXL5b6i3PJmq1ASXChByNoXYqfu9sgUN1csgxRX%2BYL6zY%2B7yv8AoiS0LSG%2BtTuoGDxh8nN%2BSialftS8cRjykvdb5CWSWvvM%2Bwms8DeQ0NfpIV7aSobnpatoS2CematK6LEWqmGk7KP8T5Dy70FIIDpJCF8tV1YLdq9ZF9xOleVLC6bUNQMPJBZ3syiLu%2F96FgepMRt7nl92BE5ziXlg7AhRJc7gS5f3fyK74xzBRel61wMken7pAQUEN3HfQQEcCIl05OO1Md2ABEe204NlP8%2F3ZcSEoHhjFFyqUmRLc6%2FoVCX%2FdZeStqbwl4SEkiK%2FhAr8jq22NJR2MJNWb6sw9tDYyQY6pgG%2Fw6%2Fyyxl4sqjJexypaWLVPDUNk0XtNBBEE%2Ftu4oWgw0Um%2F1cD82%2FPufgzdIkGKIjBnHmc3DGjqizwf3YnXYY7rsqGbuhqOadGDm%2BsX6JcyjAabAFHl9c%2F7nD2cMnOm6clZY3asWruLQR8Aw%2BwUYvcvUSOp6F53qyA3tgFO95YNaKXBKQelsMvRHXgrjHVc4p1tCI34sC4Y%2B4%2Fj2Lg9%2BYb4tLueUq9&X-Amz-Signature=ce03727e7437db97d568de8c28a1c6aa8199e313e3908d2cb8e976a5fa46400f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPPMUMOW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtMWRlejjCl2noeorigYvgPTbOrmCWVfNxLvHpmsyqZAiAmKrxfyGUafLHv%2FSoOxyBqe6FCclVW5pKO13UNTXxhISqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpyPNhXey%2BQKknAhaKtwDWbu5wFlEP8memQoc0rmIrasSs4ZUhJip%2B5zNIt0BptZvbyHaM4LpLYRnYWZht82lfjQv%2BLmC91guKqFPWqjLcJE%2FgDI0El5qzfftmZEFMXZFaPwUZkMMB%2FFWLa42tO0LUTsgn4vvRw7tc8D2F%2BT4%2B1he4QBdK%2FeNqaxJ3qxyE4C6EW%2Fb%2FRL4JtpJOwpUayM5EOjDk3PNHSUnwEdWhC2FrfAtdiPIynYiByfZYX3pbwaHyvn4f5yAMI6HtDiJWYII38Kz0tjxWHVBhhqFKzG7npjkLVp%2BzAIrzfwpOh2XtGXL5b6i3PJmq1ASXChByNoXYqfu9sgUN1csgxRX%2BYL6zY%2B7yv8AoiS0LSG%2BtTuoGDxh8nN%2BSialftS8cRjykvdb5CWSWvvM%2Bwms8DeQ0NfpIV7aSobnpatoS2CematK6LEWqmGk7KP8T5Dy70FIIDpJCF8tV1YLdq9ZF9xOleVLC6bUNQMPJBZ3syiLu%2F96FgepMRt7nl92BE5ziXlg7AhRJc7gS5f3fyK74xzBRel61wMken7pAQUEN3HfQQEcCIl05OO1Md2ABEe204NlP8%2F3ZcSEoHhjFFyqUmRLc6%2FoVCX%2FdZeStqbwl4SEkiK%2FhAr8jq22NJR2MJNWb6sw9tDYyQY6pgG%2Fw6%2Fyyxl4sqjJexypaWLVPDUNk0XtNBBEE%2Ftu4oWgw0Um%2F1cD82%2FPufgzdIkGKIjBnHmc3DGjqizwf3YnXYY7rsqGbuhqOadGDm%2BsX6JcyjAabAFHl9c%2F7nD2cMnOm6clZY3asWruLQR8Aw%2BwUYvcvUSOp6F53qyA3tgFO95YNaKXBKQelsMvRHXgrjHVc4p1tCI34sC4Y%2B4%2Fj2Lg9%2BYb4tLueUq9&X-Amz-Signature=1e444ce4e03210081340255290b7d1ce44f1e4a11ceb381ca9b795a93a731c7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPPMUMOW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtMWRlejjCl2noeorigYvgPTbOrmCWVfNxLvHpmsyqZAiAmKrxfyGUafLHv%2FSoOxyBqe6FCclVW5pKO13UNTXxhISqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpyPNhXey%2BQKknAhaKtwDWbu5wFlEP8memQoc0rmIrasSs4ZUhJip%2B5zNIt0BptZvbyHaM4LpLYRnYWZht82lfjQv%2BLmC91guKqFPWqjLcJE%2FgDI0El5qzfftmZEFMXZFaPwUZkMMB%2FFWLa42tO0LUTsgn4vvRw7tc8D2F%2BT4%2B1he4QBdK%2FeNqaxJ3qxyE4C6EW%2Fb%2FRL4JtpJOwpUayM5EOjDk3PNHSUnwEdWhC2FrfAtdiPIynYiByfZYX3pbwaHyvn4f5yAMI6HtDiJWYII38Kz0tjxWHVBhhqFKzG7npjkLVp%2BzAIrzfwpOh2XtGXL5b6i3PJmq1ASXChByNoXYqfu9sgUN1csgxRX%2BYL6zY%2B7yv8AoiS0LSG%2BtTuoGDxh8nN%2BSialftS8cRjykvdb5CWSWvvM%2Bwms8DeQ0NfpIV7aSobnpatoS2CematK6LEWqmGk7KP8T5Dy70FIIDpJCF8tV1YLdq9ZF9xOleVLC6bUNQMPJBZ3syiLu%2F96FgepMRt7nl92BE5ziXlg7AhRJc7gS5f3fyK74xzBRel61wMken7pAQUEN3HfQQEcCIl05OO1Md2ABEe204NlP8%2F3ZcSEoHhjFFyqUmRLc6%2FoVCX%2FdZeStqbwl4SEkiK%2FhAr8jq22NJR2MJNWb6sw9tDYyQY6pgG%2Fw6%2Fyyxl4sqjJexypaWLVPDUNk0XtNBBEE%2Ftu4oWgw0Um%2F1cD82%2FPufgzdIkGKIjBnHmc3DGjqizwf3YnXYY7rsqGbuhqOadGDm%2BsX6JcyjAabAFHl9c%2F7nD2cMnOm6clZY3asWruLQR8Aw%2BwUYvcvUSOp6F53qyA3tgFO95YNaKXBKQelsMvRHXgrjHVc4p1tCI34sC4Y%2B4%2Fj2Lg9%2BYb4tLueUq9&X-Amz-Signature=8a6122ed837c01753a9d758ed5a363fde96b1e06b9f99039f5fb6b2c2da44104&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPPMUMOW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtMWRlejjCl2noeorigYvgPTbOrmCWVfNxLvHpmsyqZAiAmKrxfyGUafLHv%2FSoOxyBqe6FCclVW5pKO13UNTXxhISqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpyPNhXey%2BQKknAhaKtwDWbu5wFlEP8memQoc0rmIrasSs4ZUhJip%2B5zNIt0BptZvbyHaM4LpLYRnYWZht82lfjQv%2BLmC91guKqFPWqjLcJE%2FgDI0El5qzfftmZEFMXZFaPwUZkMMB%2FFWLa42tO0LUTsgn4vvRw7tc8D2F%2BT4%2B1he4QBdK%2FeNqaxJ3qxyE4C6EW%2Fb%2FRL4JtpJOwpUayM5EOjDk3PNHSUnwEdWhC2FrfAtdiPIynYiByfZYX3pbwaHyvn4f5yAMI6HtDiJWYII38Kz0tjxWHVBhhqFKzG7npjkLVp%2BzAIrzfwpOh2XtGXL5b6i3PJmq1ASXChByNoXYqfu9sgUN1csgxRX%2BYL6zY%2B7yv8AoiS0LSG%2BtTuoGDxh8nN%2BSialftS8cRjykvdb5CWSWvvM%2Bwms8DeQ0NfpIV7aSobnpatoS2CematK6LEWqmGk7KP8T5Dy70FIIDpJCF8tV1YLdq9ZF9xOleVLC6bUNQMPJBZ3syiLu%2F96FgepMRt7nl92BE5ziXlg7AhRJc7gS5f3fyK74xzBRel61wMken7pAQUEN3HfQQEcCIl05OO1Md2ABEe204NlP8%2F3ZcSEoHhjFFyqUmRLc6%2FoVCX%2FdZeStqbwl4SEkiK%2FhAr8jq22NJR2MJNWb6sw9tDYyQY6pgG%2Fw6%2Fyyxl4sqjJexypaWLVPDUNk0XtNBBEE%2Ftu4oWgw0Um%2F1cD82%2FPufgzdIkGKIjBnHmc3DGjqizwf3YnXYY7rsqGbuhqOadGDm%2BsX6JcyjAabAFHl9c%2F7nD2cMnOm6clZY3asWruLQR8Aw%2BwUYvcvUSOp6F53qyA3tgFO95YNaKXBKQelsMvRHXgrjHVc4p1tCI34sC4Y%2B4%2Fj2Lg9%2BYb4tLueUq9&X-Amz-Signature=60517ab5a207913a0a320926fba2b5f05c0e8afe86f6634d9844711cd092e040&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPPMUMOW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtMWRlejjCl2noeorigYvgPTbOrmCWVfNxLvHpmsyqZAiAmKrxfyGUafLHv%2FSoOxyBqe6FCclVW5pKO13UNTXxhISqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpyPNhXey%2BQKknAhaKtwDWbu5wFlEP8memQoc0rmIrasSs4ZUhJip%2B5zNIt0BptZvbyHaM4LpLYRnYWZht82lfjQv%2BLmC91guKqFPWqjLcJE%2FgDI0El5qzfftmZEFMXZFaPwUZkMMB%2FFWLa42tO0LUTsgn4vvRw7tc8D2F%2BT4%2B1he4QBdK%2FeNqaxJ3qxyE4C6EW%2Fb%2FRL4JtpJOwpUayM5EOjDk3PNHSUnwEdWhC2FrfAtdiPIynYiByfZYX3pbwaHyvn4f5yAMI6HtDiJWYII38Kz0tjxWHVBhhqFKzG7npjkLVp%2BzAIrzfwpOh2XtGXL5b6i3PJmq1ASXChByNoXYqfu9sgUN1csgxRX%2BYL6zY%2B7yv8AoiS0LSG%2BtTuoGDxh8nN%2BSialftS8cRjykvdb5CWSWvvM%2Bwms8DeQ0NfpIV7aSobnpatoS2CematK6LEWqmGk7KP8T5Dy70FIIDpJCF8tV1YLdq9ZF9xOleVLC6bUNQMPJBZ3syiLu%2F96FgepMRt7nl92BE5ziXlg7AhRJc7gS5f3fyK74xzBRel61wMken7pAQUEN3HfQQEcCIl05OO1Md2ABEe204NlP8%2F3ZcSEoHhjFFyqUmRLc6%2FoVCX%2FdZeStqbwl4SEkiK%2FhAr8jq22NJR2MJNWb6sw9tDYyQY6pgG%2Fw6%2Fyyxl4sqjJexypaWLVPDUNk0XtNBBEE%2Ftu4oWgw0Um%2F1cD82%2FPufgzdIkGKIjBnHmc3DGjqizwf3YnXYY7rsqGbuhqOadGDm%2BsX6JcyjAabAFHl9c%2F7nD2cMnOm6clZY3asWruLQR8Aw%2BwUYvcvUSOp6F53qyA3tgFO95YNaKXBKQelsMvRHXgrjHVc4p1tCI34sC4Y%2B4%2Fj2Lg9%2BYb4tLueUq9&X-Amz-Signature=7b9cc70241731f523cbd132c775995425a8fda3e574ca8a72b5a935d10ed8ee8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
