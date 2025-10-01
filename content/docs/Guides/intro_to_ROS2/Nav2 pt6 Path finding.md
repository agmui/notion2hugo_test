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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6EI4LMB%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCl%2FxV1NgOPMyLAcdNyXgwIwy6tnm30qszenCp15Tct9AIgI33Sc1nLBJHH5U45skjhAAUzwOVK%2BX6XkIviDcG1f%2F4qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwsE5%2F8WGwycW0KMCrcA1fzb2nxWq4VVm8MHBXKymponEExljUFR4wyE%2FnwGL7iiOBZlnQHwQNuOgyQ79%2BzBR3UvWkJteOTfT4K3h07UoOhHplC6yKrRHlR5lt6NBwbpXPouBhUt0ejdAqxID6FPb3i3eop70I2l86tlxKrfbahIJOoP6IsrGbpeTwBpvZLTi%2F8n%2BAXpBpLpiKY5rJaxZiLv89FrORBoa9Pljn0E%2FGBh8u5xc3%2BlQ%2B0aixGwaTtKZNDz30daSw5bGnJZCa0tNy1GPmCswnUgJTbRq7d0RsFXFo8yD9E1UlqEaMzB1IcPto0Kyy1o3EedJCXIoxZ2u99TVJTkz4INpP%2FASaGOJ0AZuH4umJzF%2Ft101I75hvuoQoV7Kx5aTzX73uECiEF%2FbslYspb76YUCVw%2FDshqHeC%2BBc2FCRkk7Fy7u2rZknp%2FOdFOnhxVt7o9U1aBJ9k5JBBcwz87LgSh7uw8AaXOuf3lRE1aYEAgFT%2FFtNoSCpLa7W8%2FVMAF%2BcfB7JAU1cFZstO%2F1LN1Oopv2efW0XYIiBuAAGp3CLQfOZD5ONtGJJuWn%2B8kGWqveJmQwlfjyatQeJa5BphILGD2sEBzhdF1l%2BKktsZcrW1g6Z%2BQPxSWzGpcciRwtr4FNqA3tZOTMNeI8sYGOqUBF7vWEVeDyEjX47pXcdcFfre403wt%2BVg%2FR9CBvzD1N7UAvhpvUf1yDoEFufpVsJgv8SWxa%2FiABpUSSV9X991s%2BWh3JuE515MRi3J42XCo0BKa5H9wnOchOl4D4YEUrg4vzMZrZLxPbeCCvP7JHPZCxeSJwvmBhLSLvroTUoABxpPSeK7zccQeJTlkMa5DE1r76t9lSx9XQ6QyzbhZxe0jAI0ka6T2&X-Amz-Signature=b811f9c04483a204346904a36e98f367fa4085b8d667a7bf89dc6a23474120d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6EI4LMB%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCl%2FxV1NgOPMyLAcdNyXgwIwy6tnm30qszenCp15Tct9AIgI33Sc1nLBJHH5U45skjhAAUzwOVK%2BX6XkIviDcG1f%2F4qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwsE5%2F8WGwycW0KMCrcA1fzb2nxWq4VVm8MHBXKymponEExljUFR4wyE%2FnwGL7iiOBZlnQHwQNuOgyQ79%2BzBR3UvWkJteOTfT4K3h07UoOhHplC6yKrRHlR5lt6NBwbpXPouBhUt0ejdAqxID6FPb3i3eop70I2l86tlxKrfbahIJOoP6IsrGbpeTwBpvZLTi%2F8n%2BAXpBpLpiKY5rJaxZiLv89FrORBoa9Pljn0E%2FGBh8u5xc3%2BlQ%2B0aixGwaTtKZNDz30daSw5bGnJZCa0tNy1GPmCswnUgJTbRq7d0RsFXFo8yD9E1UlqEaMzB1IcPto0Kyy1o3EedJCXIoxZ2u99TVJTkz4INpP%2FASaGOJ0AZuH4umJzF%2Ft101I75hvuoQoV7Kx5aTzX73uECiEF%2FbslYspb76YUCVw%2FDshqHeC%2BBc2FCRkk7Fy7u2rZknp%2FOdFOnhxVt7o9U1aBJ9k5JBBcwz87LgSh7uw8AaXOuf3lRE1aYEAgFT%2FFtNoSCpLa7W8%2FVMAF%2BcfB7JAU1cFZstO%2F1LN1Oopv2efW0XYIiBuAAGp3CLQfOZD5ONtGJJuWn%2B8kGWqveJmQwlfjyatQeJa5BphILGD2sEBzhdF1l%2BKktsZcrW1g6Z%2BQPxSWzGpcciRwtr4FNqA3tZOTMNeI8sYGOqUBF7vWEVeDyEjX47pXcdcFfre403wt%2BVg%2FR9CBvzD1N7UAvhpvUf1yDoEFufpVsJgv8SWxa%2FiABpUSSV9X991s%2BWh3JuE515MRi3J42XCo0BKa5H9wnOchOl4D4YEUrg4vzMZrZLxPbeCCvP7JHPZCxeSJwvmBhLSLvroTUoABxpPSeK7zccQeJTlkMa5DE1r76t9lSx9XQ6QyzbhZxe0jAI0ka6T2&X-Amz-Signature=0bdbb2325e45e982377af4f9d752d538e050f2955a88954a86d5de1663d328e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6EI4LMB%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCl%2FxV1NgOPMyLAcdNyXgwIwy6tnm30qszenCp15Tct9AIgI33Sc1nLBJHH5U45skjhAAUzwOVK%2BX6XkIviDcG1f%2F4qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwsE5%2F8WGwycW0KMCrcA1fzb2nxWq4VVm8MHBXKymponEExljUFR4wyE%2FnwGL7iiOBZlnQHwQNuOgyQ79%2BzBR3UvWkJteOTfT4K3h07UoOhHplC6yKrRHlR5lt6NBwbpXPouBhUt0ejdAqxID6FPb3i3eop70I2l86tlxKrfbahIJOoP6IsrGbpeTwBpvZLTi%2F8n%2BAXpBpLpiKY5rJaxZiLv89FrORBoa9Pljn0E%2FGBh8u5xc3%2BlQ%2B0aixGwaTtKZNDz30daSw5bGnJZCa0tNy1GPmCswnUgJTbRq7d0RsFXFo8yD9E1UlqEaMzB1IcPto0Kyy1o3EedJCXIoxZ2u99TVJTkz4INpP%2FASaGOJ0AZuH4umJzF%2Ft101I75hvuoQoV7Kx5aTzX73uECiEF%2FbslYspb76YUCVw%2FDshqHeC%2BBc2FCRkk7Fy7u2rZknp%2FOdFOnhxVt7o9U1aBJ9k5JBBcwz87LgSh7uw8AaXOuf3lRE1aYEAgFT%2FFtNoSCpLa7W8%2FVMAF%2BcfB7JAU1cFZstO%2F1LN1Oopv2efW0XYIiBuAAGp3CLQfOZD5ONtGJJuWn%2B8kGWqveJmQwlfjyatQeJa5BphILGD2sEBzhdF1l%2BKktsZcrW1g6Z%2BQPxSWzGpcciRwtr4FNqA3tZOTMNeI8sYGOqUBF7vWEVeDyEjX47pXcdcFfre403wt%2BVg%2FR9CBvzD1N7UAvhpvUf1yDoEFufpVsJgv8SWxa%2FiABpUSSV9X991s%2BWh3JuE515MRi3J42XCo0BKa5H9wnOchOl4D4YEUrg4vzMZrZLxPbeCCvP7JHPZCxeSJwvmBhLSLvroTUoABxpPSeK7zccQeJTlkMa5DE1r76t9lSx9XQ6QyzbhZxe0jAI0ka6T2&X-Amz-Signature=5abb8d297e92bb9c3ea26690e73333eae3d6ca1daf8bbcd4b5baf61c80ed9ce3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6EI4LMB%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCl%2FxV1NgOPMyLAcdNyXgwIwy6tnm30qszenCp15Tct9AIgI33Sc1nLBJHH5U45skjhAAUzwOVK%2BX6XkIviDcG1f%2F4qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwsE5%2F8WGwycW0KMCrcA1fzb2nxWq4VVm8MHBXKymponEExljUFR4wyE%2FnwGL7iiOBZlnQHwQNuOgyQ79%2BzBR3UvWkJteOTfT4K3h07UoOhHplC6yKrRHlR5lt6NBwbpXPouBhUt0ejdAqxID6FPb3i3eop70I2l86tlxKrfbahIJOoP6IsrGbpeTwBpvZLTi%2F8n%2BAXpBpLpiKY5rJaxZiLv89FrORBoa9Pljn0E%2FGBh8u5xc3%2BlQ%2B0aixGwaTtKZNDz30daSw5bGnJZCa0tNy1GPmCswnUgJTbRq7d0RsFXFo8yD9E1UlqEaMzB1IcPto0Kyy1o3EedJCXIoxZ2u99TVJTkz4INpP%2FASaGOJ0AZuH4umJzF%2Ft101I75hvuoQoV7Kx5aTzX73uECiEF%2FbslYspb76YUCVw%2FDshqHeC%2BBc2FCRkk7Fy7u2rZknp%2FOdFOnhxVt7o9U1aBJ9k5JBBcwz87LgSh7uw8AaXOuf3lRE1aYEAgFT%2FFtNoSCpLa7W8%2FVMAF%2BcfB7JAU1cFZstO%2F1LN1Oopv2efW0XYIiBuAAGp3CLQfOZD5ONtGJJuWn%2B8kGWqveJmQwlfjyatQeJa5BphILGD2sEBzhdF1l%2BKktsZcrW1g6Z%2BQPxSWzGpcciRwtr4FNqA3tZOTMNeI8sYGOqUBF7vWEVeDyEjX47pXcdcFfre403wt%2BVg%2FR9CBvzD1N7UAvhpvUf1yDoEFufpVsJgv8SWxa%2FiABpUSSV9X991s%2BWh3JuE515MRi3J42XCo0BKa5H9wnOchOl4D4YEUrg4vzMZrZLxPbeCCvP7JHPZCxeSJwvmBhLSLvroTUoABxpPSeK7zccQeJTlkMa5DE1r76t9lSx9XQ6QyzbhZxe0jAI0ka6T2&X-Amz-Signature=eda4d3452e665af82e4812a1732a3ae58dcd7e6f1b294e07aa13e36b7ee249b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6EI4LMB%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCl%2FxV1NgOPMyLAcdNyXgwIwy6tnm30qszenCp15Tct9AIgI33Sc1nLBJHH5U45skjhAAUzwOVK%2BX6XkIviDcG1f%2F4qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwsE5%2F8WGwycW0KMCrcA1fzb2nxWq4VVm8MHBXKymponEExljUFR4wyE%2FnwGL7iiOBZlnQHwQNuOgyQ79%2BzBR3UvWkJteOTfT4K3h07UoOhHplC6yKrRHlR5lt6NBwbpXPouBhUt0ejdAqxID6FPb3i3eop70I2l86tlxKrfbahIJOoP6IsrGbpeTwBpvZLTi%2F8n%2BAXpBpLpiKY5rJaxZiLv89FrORBoa9Pljn0E%2FGBh8u5xc3%2BlQ%2B0aixGwaTtKZNDz30daSw5bGnJZCa0tNy1GPmCswnUgJTbRq7d0RsFXFo8yD9E1UlqEaMzB1IcPto0Kyy1o3EedJCXIoxZ2u99TVJTkz4INpP%2FASaGOJ0AZuH4umJzF%2Ft101I75hvuoQoV7Kx5aTzX73uECiEF%2FbslYspb76YUCVw%2FDshqHeC%2BBc2FCRkk7Fy7u2rZknp%2FOdFOnhxVt7o9U1aBJ9k5JBBcwz87LgSh7uw8AaXOuf3lRE1aYEAgFT%2FFtNoSCpLa7W8%2FVMAF%2BcfB7JAU1cFZstO%2F1LN1Oopv2efW0XYIiBuAAGp3CLQfOZD5ONtGJJuWn%2B8kGWqveJmQwlfjyatQeJa5BphILGD2sEBzhdF1l%2BKktsZcrW1g6Z%2BQPxSWzGpcciRwtr4FNqA3tZOTMNeI8sYGOqUBF7vWEVeDyEjX47pXcdcFfre403wt%2BVg%2FR9CBvzD1N7UAvhpvUf1yDoEFufpVsJgv8SWxa%2FiABpUSSV9X991s%2BWh3JuE515MRi3J42XCo0BKa5H9wnOchOl4D4YEUrg4vzMZrZLxPbeCCvP7JHPZCxeSJwvmBhLSLvroTUoABxpPSeK7zccQeJTlkMa5DE1r76t9lSx9XQ6QyzbhZxe0jAI0ka6T2&X-Amz-Signature=0f9298d247c1be8cee94802fca552a4a0e231f2ee5ef1e1d5c32030885ce429b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6EI4LMB%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCl%2FxV1NgOPMyLAcdNyXgwIwy6tnm30qszenCp15Tct9AIgI33Sc1nLBJHH5U45skjhAAUzwOVK%2BX6XkIviDcG1f%2F4qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwsE5%2F8WGwycW0KMCrcA1fzb2nxWq4VVm8MHBXKymponEExljUFR4wyE%2FnwGL7iiOBZlnQHwQNuOgyQ79%2BzBR3UvWkJteOTfT4K3h07UoOhHplC6yKrRHlR5lt6NBwbpXPouBhUt0ejdAqxID6FPb3i3eop70I2l86tlxKrfbahIJOoP6IsrGbpeTwBpvZLTi%2F8n%2BAXpBpLpiKY5rJaxZiLv89FrORBoa9Pljn0E%2FGBh8u5xc3%2BlQ%2B0aixGwaTtKZNDz30daSw5bGnJZCa0tNy1GPmCswnUgJTbRq7d0RsFXFo8yD9E1UlqEaMzB1IcPto0Kyy1o3EedJCXIoxZ2u99TVJTkz4INpP%2FASaGOJ0AZuH4umJzF%2Ft101I75hvuoQoV7Kx5aTzX73uECiEF%2FbslYspb76YUCVw%2FDshqHeC%2BBc2FCRkk7Fy7u2rZknp%2FOdFOnhxVt7o9U1aBJ9k5JBBcwz87LgSh7uw8AaXOuf3lRE1aYEAgFT%2FFtNoSCpLa7W8%2FVMAF%2BcfB7JAU1cFZstO%2F1LN1Oopv2efW0XYIiBuAAGp3CLQfOZD5ONtGJJuWn%2B8kGWqveJmQwlfjyatQeJa5BphILGD2sEBzhdF1l%2BKktsZcrW1g6Z%2BQPxSWzGpcciRwtr4FNqA3tZOTMNeI8sYGOqUBF7vWEVeDyEjX47pXcdcFfre403wt%2BVg%2FR9CBvzD1N7UAvhpvUf1yDoEFufpVsJgv8SWxa%2FiABpUSSV9X991s%2BWh3JuE515MRi3J42XCo0BKa5H9wnOchOl4D4YEUrg4vzMZrZLxPbeCCvP7JHPZCxeSJwvmBhLSLvroTUoABxpPSeK7zccQeJTlkMa5DE1r76t9lSx9XQ6QyzbhZxe0jAI0ka6T2&X-Amz-Signature=6dabbb4db38e0fb094bd47a69db3dfd113477ae082a0364718f23d4e75a70c41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6EI4LMB%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCl%2FxV1NgOPMyLAcdNyXgwIwy6tnm30qszenCp15Tct9AIgI33Sc1nLBJHH5U45skjhAAUzwOVK%2BX6XkIviDcG1f%2F4qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwsE5%2F8WGwycW0KMCrcA1fzb2nxWq4VVm8MHBXKymponEExljUFR4wyE%2FnwGL7iiOBZlnQHwQNuOgyQ79%2BzBR3UvWkJteOTfT4K3h07UoOhHplC6yKrRHlR5lt6NBwbpXPouBhUt0ejdAqxID6FPb3i3eop70I2l86tlxKrfbahIJOoP6IsrGbpeTwBpvZLTi%2F8n%2BAXpBpLpiKY5rJaxZiLv89FrORBoa9Pljn0E%2FGBh8u5xc3%2BlQ%2B0aixGwaTtKZNDz30daSw5bGnJZCa0tNy1GPmCswnUgJTbRq7d0RsFXFo8yD9E1UlqEaMzB1IcPto0Kyy1o3EedJCXIoxZ2u99TVJTkz4INpP%2FASaGOJ0AZuH4umJzF%2Ft101I75hvuoQoV7Kx5aTzX73uECiEF%2FbslYspb76YUCVw%2FDshqHeC%2BBc2FCRkk7Fy7u2rZknp%2FOdFOnhxVt7o9U1aBJ9k5JBBcwz87LgSh7uw8AaXOuf3lRE1aYEAgFT%2FFtNoSCpLa7W8%2FVMAF%2BcfB7JAU1cFZstO%2F1LN1Oopv2efW0XYIiBuAAGp3CLQfOZD5ONtGJJuWn%2B8kGWqveJmQwlfjyatQeJa5BphILGD2sEBzhdF1l%2BKktsZcrW1g6Z%2BQPxSWzGpcciRwtr4FNqA3tZOTMNeI8sYGOqUBF7vWEVeDyEjX47pXcdcFfre403wt%2BVg%2FR9CBvzD1N7UAvhpvUf1yDoEFufpVsJgv8SWxa%2FiABpUSSV9X991s%2BWh3JuE515MRi3J42XCo0BKa5H9wnOchOl4D4YEUrg4vzMZrZLxPbeCCvP7JHPZCxeSJwvmBhLSLvroTUoABxpPSeK7zccQeJTlkMa5DE1r76t9lSx9XQ6QyzbhZxe0jAI0ka6T2&X-Amz-Signature=400247cc6ddea3645d15b2e9d6943d2cd39947719748564190b54984423a47e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6EI4LMB%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCl%2FxV1NgOPMyLAcdNyXgwIwy6tnm30qszenCp15Tct9AIgI33Sc1nLBJHH5U45skjhAAUzwOVK%2BX6XkIviDcG1f%2F4qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwsE5%2F8WGwycW0KMCrcA1fzb2nxWq4VVm8MHBXKymponEExljUFR4wyE%2FnwGL7iiOBZlnQHwQNuOgyQ79%2BzBR3UvWkJteOTfT4K3h07UoOhHplC6yKrRHlR5lt6NBwbpXPouBhUt0ejdAqxID6FPb3i3eop70I2l86tlxKrfbahIJOoP6IsrGbpeTwBpvZLTi%2F8n%2BAXpBpLpiKY5rJaxZiLv89FrORBoa9Pljn0E%2FGBh8u5xc3%2BlQ%2B0aixGwaTtKZNDz30daSw5bGnJZCa0tNy1GPmCswnUgJTbRq7d0RsFXFo8yD9E1UlqEaMzB1IcPto0Kyy1o3EedJCXIoxZ2u99TVJTkz4INpP%2FASaGOJ0AZuH4umJzF%2Ft101I75hvuoQoV7Kx5aTzX73uECiEF%2FbslYspb76YUCVw%2FDshqHeC%2BBc2FCRkk7Fy7u2rZknp%2FOdFOnhxVt7o9U1aBJ9k5JBBcwz87LgSh7uw8AaXOuf3lRE1aYEAgFT%2FFtNoSCpLa7W8%2FVMAF%2BcfB7JAU1cFZstO%2F1LN1Oopv2efW0XYIiBuAAGp3CLQfOZD5ONtGJJuWn%2B8kGWqveJmQwlfjyatQeJa5BphILGD2sEBzhdF1l%2BKktsZcrW1g6Z%2BQPxSWzGpcciRwtr4FNqA3tZOTMNeI8sYGOqUBF7vWEVeDyEjX47pXcdcFfre403wt%2BVg%2FR9CBvzD1N7UAvhpvUf1yDoEFufpVsJgv8SWxa%2FiABpUSSV9X991s%2BWh3JuE515MRi3J42XCo0BKa5H9wnOchOl4D4YEUrg4vzMZrZLxPbeCCvP7JHPZCxeSJwvmBhLSLvroTUoABxpPSeK7zccQeJTlkMa5DE1r76t9lSx9XQ6QyzbhZxe0jAI0ka6T2&X-Amz-Signature=3936bc5ef96219b8063914039a681511d884e4fb96303673de5664e093a02224&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6EI4LMB%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCl%2FxV1NgOPMyLAcdNyXgwIwy6tnm30qszenCp15Tct9AIgI33Sc1nLBJHH5U45skjhAAUzwOVK%2BX6XkIviDcG1f%2F4qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwsE5%2F8WGwycW0KMCrcA1fzb2nxWq4VVm8MHBXKymponEExljUFR4wyE%2FnwGL7iiOBZlnQHwQNuOgyQ79%2BzBR3UvWkJteOTfT4K3h07UoOhHplC6yKrRHlR5lt6NBwbpXPouBhUt0ejdAqxID6FPb3i3eop70I2l86tlxKrfbahIJOoP6IsrGbpeTwBpvZLTi%2F8n%2BAXpBpLpiKY5rJaxZiLv89FrORBoa9Pljn0E%2FGBh8u5xc3%2BlQ%2B0aixGwaTtKZNDz30daSw5bGnJZCa0tNy1GPmCswnUgJTbRq7d0RsFXFo8yD9E1UlqEaMzB1IcPto0Kyy1o3EedJCXIoxZ2u99TVJTkz4INpP%2FASaGOJ0AZuH4umJzF%2Ft101I75hvuoQoV7Kx5aTzX73uECiEF%2FbslYspb76YUCVw%2FDshqHeC%2BBc2FCRkk7Fy7u2rZknp%2FOdFOnhxVt7o9U1aBJ9k5JBBcwz87LgSh7uw8AaXOuf3lRE1aYEAgFT%2FFtNoSCpLa7W8%2FVMAF%2BcfB7JAU1cFZstO%2F1LN1Oopv2efW0XYIiBuAAGp3CLQfOZD5ONtGJJuWn%2B8kGWqveJmQwlfjyatQeJa5BphILGD2sEBzhdF1l%2BKktsZcrW1g6Z%2BQPxSWzGpcciRwtr4FNqA3tZOTMNeI8sYGOqUBF7vWEVeDyEjX47pXcdcFfre403wt%2BVg%2FR9CBvzD1N7UAvhpvUf1yDoEFufpVsJgv8SWxa%2FiABpUSSV9X991s%2BWh3JuE515MRi3J42XCo0BKa5H9wnOchOl4D4YEUrg4vzMZrZLxPbeCCvP7JHPZCxeSJwvmBhLSLvroTUoABxpPSeK7zccQeJTlkMa5DE1r76t9lSx9XQ6QyzbhZxe0jAI0ka6T2&X-Amz-Signature=949fe82b10f7669d95328fb0e6dd653243ca3c208e853332171abc154d1f3dae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6EI4LMB%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCl%2FxV1NgOPMyLAcdNyXgwIwy6tnm30qszenCp15Tct9AIgI33Sc1nLBJHH5U45skjhAAUzwOVK%2BX6XkIviDcG1f%2F4qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwsE5%2F8WGwycW0KMCrcA1fzb2nxWq4VVm8MHBXKymponEExljUFR4wyE%2FnwGL7iiOBZlnQHwQNuOgyQ79%2BzBR3UvWkJteOTfT4K3h07UoOhHplC6yKrRHlR5lt6NBwbpXPouBhUt0ejdAqxID6FPb3i3eop70I2l86tlxKrfbahIJOoP6IsrGbpeTwBpvZLTi%2F8n%2BAXpBpLpiKY5rJaxZiLv89FrORBoa9Pljn0E%2FGBh8u5xc3%2BlQ%2B0aixGwaTtKZNDz30daSw5bGnJZCa0tNy1GPmCswnUgJTbRq7d0RsFXFo8yD9E1UlqEaMzB1IcPto0Kyy1o3EedJCXIoxZ2u99TVJTkz4INpP%2FASaGOJ0AZuH4umJzF%2Ft101I75hvuoQoV7Kx5aTzX73uECiEF%2FbslYspb76YUCVw%2FDshqHeC%2BBc2FCRkk7Fy7u2rZknp%2FOdFOnhxVt7o9U1aBJ9k5JBBcwz87LgSh7uw8AaXOuf3lRE1aYEAgFT%2FFtNoSCpLa7W8%2FVMAF%2BcfB7JAU1cFZstO%2F1LN1Oopv2efW0XYIiBuAAGp3CLQfOZD5ONtGJJuWn%2B8kGWqveJmQwlfjyatQeJa5BphILGD2sEBzhdF1l%2BKktsZcrW1g6Z%2BQPxSWzGpcciRwtr4FNqA3tZOTMNeI8sYGOqUBF7vWEVeDyEjX47pXcdcFfre403wt%2BVg%2FR9CBvzD1N7UAvhpvUf1yDoEFufpVsJgv8SWxa%2FiABpUSSV9X991s%2BWh3JuE515MRi3J42XCo0BKa5H9wnOchOl4D4YEUrg4vzMZrZLxPbeCCvP7JHPZCxeSJwvmBhLSLvroTUoABxpPSeK7zccQeJTlkMa5DE1r76t9lSx9XQ6QyzbhZxe0jAI0ka6T2&X-Amz-Signature=8c2717c32ae2aa0578ff03120df438a2143d1a797b1090101487e86b8d4763da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6EI4LMB%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCl%2FxV1NgOPMyLAcdNyXgwIwy6tnm30qszenCp15Tct9AIgI33Sc1nLBJHH5U45skjhAAUzwOVK%2BX6XkIviDcG1f%2F4qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwsE5%2F8WGwycW0KMCrcA1fzb2nxWq4VVm8MHBXKymponEExljUFR4wyE%2FnwGL7iiOBZlnQHwQNuOgyQ79%2BzBR3UvWkJteOTfT4K3h07UoOhHplC6yKrRHlR5lt6NBwbpXPouBhUt0ejdAqxID6FPb3i3eop70I2l86tlxKrfbahIJOoP6IsrGbpeTwBpvZLTi%2F8n%2BAXpBpLpiKY5rJaxZiLv89FrORBoa9Pljn0E%2FGBh8u5xc3%2BlQ%2B0aixGwaTtKZNDz30daSw5bGnJZCa0tNy1GPmCswnUgJTbRq7d0RsFXFo8yD9E1UlqEaMzB1IcPto0Kyy1o3EedJCXIoxZ2u99TVJTkz4INpP%2FASaGOJ0AZuH4umJzF%2Ft101I75hvuoQoV7Kx5aTzX73uECiEF%2FbslYspb76YUCVw%2FDshqHeC%2BBc2FCRkk7Fy7u2rZknp%2FOdFOnhxVt7o9U1aBJ9k5JBBcwz87LgSh7uw8AaXOuf3lRE1aYEAgFT%2FFtNoSCpLa7W8%2FVMAF%2BcfB7JAU1cFZstO%2F1LN1Oopv2efW0XYIiBuAAGp3CLQfOZD5ONtGJJuWn%2B8kGWqveJmQwlfjyatQeJa5BphILGD2sEBzhdF1l%2BKktsZcrW1g6Z%2BQPxSWzGpcciRwtr4FNqA3tZOTMNeI8sYGOqUBF7vWEVeDyEjX47pXcdcFfre403wt%2BVg%2FR9CBvzD1N7UAvhpvUf1yDoEFufpVsJgv8SWxa%2FiABpUSSV9X991s%2BWh3JuE515MRi3J42XCo0BKa5H9wnOchOl4D4YEUrg4vzMZrZLxPbeCCvP7JHPZCxeSJwvmBhLSLvroTUoABxpPSeK7zccQeJTlkMa5DE1r76t9lSx9XQ6QyzbhZxe0jAI0ka6T2&X-Amz-Signature=cbf9c600b728c8b8363ee8deabb828b7a35be71b5d27de5ba4910e3579f93b05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6EI4LMB%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCl%2FxV1NgOPMyLAcdNyXgwIwy6tnm30qszenCp15Tct9AIgI33Sc1nLBJHH5U45skjhAAUzwOVK%2BX6XkIviDcG1f%2F4qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwsE5%2F8WGwycW0KMCrcA1fzb2nxWq4VVm8MHBXKymponEExljUFR4wyE%2FnwGL7iiOBZlnQHwQNuOgyQ79%2BzBR3UvWkJteOTfT4K3h07UoOhHplC6yKrRHlR5lt6NBwbpXPouBhUt0ejdAqxID6FPb3i3eop70I2l86tlxKrfbahIJOoP6IsrGbpeTwBpvZLTi%2F8n%2BAXpBpLpiKY5rJaxZiLv89FrORBoa9Pljn0E%2FGBh8u5xc3%2BlQ%2B0aixGwaTtKZNDz30daSw5bGnJZCa0tNy1GPmCswnUgJTbRq7d0RsFXFo8yD9E1UlqEaMzB1IcPto0Kyy1o3EedJCXIoxZ2u99TVJTkz4INpP%2FASaGOJ0AZuH4umJzF%2Ft101I75hvuoQoV7Kx5aTzX73uECiEF%2FbslYspb76YUCVw%2FDshqHeC%2BBc2FCRkk7Fy7u2rZknp%2FOdFOnhxVt7o9U1aBJ9k5JBBcwz87LgSh7uw8AaXOuf3lRE1aYEAgFT%2FFtNoSCpLa7W8%2FVMAF%2BcfB7JAU1cFZstO%2F1LN1Oopv2efW0XYIiBuAAGp3CLQfOZD5ONtGJJuWn%2B8kGWqveJmQwlfjyatQeJa5BphILGD2sEBzhdF1l%2BKktsZcrW1g6Z%2BQPxSWzGpcciRwtr4FNqA3tZOTMNeI8sYGOqUBF7vWEVeDyEjX47pXcdcFfre403wt%2BVg%2FR9CBvzD1N7UAvhpvUf1yDoEFufpVsJgv8SWxa%2FiABpUSSV9X991s%2BWh3JuE515MRi3J42XCo0BKa5H9wnOchOl4D4YEUrg4vzMZrZLxPbeCCvP7JHPZCxeSJwvmBhLSLvroTUoABxpPSeK7zccQeJTlkMa5DE1r76t9lSx9XQ6QyzbhZxe0jAI0ka6T2&X-Amz-Signature=ceda91d63a08efc444763541b72935a6d9df2219ebb0c6d6018a7f9de3d78278&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6EI4LMB%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCl%2FxV1NgOPMyLAcdNyXgwIwy6tnm30qszenCp15Tct9AIgI33Sc1nLBJHH5U45skjhAAUzwOVK%2BX6XkIviDcG1f%2F4qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwsE5%2F8WGwycW0KMCrcA1fzb2nxWq4VVm8MHBXKymponEExljUFR4wyE%2FnwGL7iiOBZlnQHwQNuOgyQ79%2BzBR3UvWkJteOTfT4K3h07UoOhHplC6yKrRHlR5lt6NBwbpXPouBhUt0ejdAqxID6FPb3i3eop70I2l86tlxKrfbahIJOoP6IsrGbpeTwBpvZLTi%2F8n%2BAXpBpLpiKY5rJaxZiLv89FrORBoa9Pljn0E%2FGBh8u5xc3%2BlQ%2B0aixGwaTtKZNDz30daSw5bGnJZCa0tNy1GPmCswnUgJTbRq7d0RsFXFo8yD9E1UlqEaMzB1IcPto0Kyy1o3EedJCXIoxZ2u99TVJTkz4INpP%2FASaGOJ0AZuH4umJzF%2Ft101I75hvuoQoV7Kx5aTzX73uECiEF%2FbslYspb76YUCVw%2FDshqHeC%2BBc2FCRkk7Fy7u2rZknp%2FOdFOnhxVt7o9U1aBJ9k5JBBcwz87LgSh7uw8AaXOuf3lRE1aYEAgFT%2FFtNoSCpLa7W8%2FVMAF%2BcfB7JAU1cFZstO%2F1LN1Oopv2efW0XYIiBuAAGp3CLQfOZD5ONtGJJuWn%2B8kGWqveJmQwlfjyatQeJa5BphILGD2sEBzhdF1l%2BKktsZcrW1g6Z%2BQPxSWzGpcciRwtr4FNqA3tZOTMNeI8sYGOqUBF7vWEVeDyEjX47pXcdcFfre403wt%2BVg%2FR9CBvzD1N7UAvhpvUf1yDoEFufpVsJgv8SWxa%2FiABpUSSV9X991s%2BWh3JuE515MRi3J42XCo0BKa5H9wnOchOl4D4YEUrg4vzMZrZLxPbeCCvP7JHPZCxeSJwvmBhLSLvroTUoABxpPSeK7zccQeJTlkMa5DE1r76t9lSx9XQ6QyzbhZxe0jAI0ka6T2&X-Amz-Signature=140addb66cf6178e56e493de1af4cac2bb1b968b0fa870ba7f92af3496178a54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
