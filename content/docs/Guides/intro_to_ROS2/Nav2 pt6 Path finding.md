---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-07-30T06:25:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLOEFB7W%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBboFYq3Rxenz%2Fu0KeudGJkexjGbyJimVmuO0fMzdWqEAiEAsapZlygwXDUPeuhEsBZUNaLuReFv%2Bka05D7Xc536cS8qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2BHR%2B978vQCu9V2jSrcAyBCvMopwEstT1wHLY3vPYQjOwQ9PIqCAPLnLGAgnkRMSjeBMoFJrx2yWCntrX0bTP6LE5Ae%2B9Vsd8x649RYOL7f0cyNsBMoVyZ8tPZWm9NpTOdbZCNYVoeZjaZCoI3jHovSyrFbG%2FnQweOM5EVI5ylvXYNorpGjbaBL93G%2FmFu55C0jLoCBpvR8Oc7X41ZWn7Fi%2B4CoRUmO0rNRI4GuVqjeswyyr3x3KTvmRXTtZajc6ePKPiqLFGfeiD%2FtwNGJLWzzPxg2b4N%2FJYSm8bUGoaPlkOWovkolbDVuUVlfLLXcCzhalHwSAGKEk2DYgc%2FfS2fpz7bdUX8xnxkeAzviR6Xg2TJV27VSL6mES3AEhNbddvwKjlRqPHikVitOjqmHcSKHLRqs7qpfdUrrvrttEfp2%2BzQ75LfXop9ZVb0UekCkdpm67wwJ39vgCdP0QnKzC8bmjMov%2FETR%2BiJCPvuOB87k6pxAq4v%2FteyplQcuZaKiZv2zAtD6HWQTYd8fVwQ90O853Tw5wt4a33X56MUPBzKwXG5hWr2DNkFHHG1iXRt1hbtqZtLylDY%2BdoWsFYKvuZW85HdWAC4dl8oShPoborpgagwJfJw2r6gCIy0rtTdYJUnNaMq65JKvI%2FhhMJ2dtsQGOqUBJgw3ypQfrdU9goxjMtticOWp7KvrNoCuZMeO%2B3VmJ6HQZX7JHA6Es9nGHBccm7JHcWHVRM3r0W9cikIHrwvZJeeo4E8ez3%2Ff5pOT4HNe4D%2BnLUAxGAVZqmA5T%2FS9o6jIaj61FRpPeI2CITeUAf49LwxytvvawWhe8snq%2FaXc8tC3r%2FPI18b9fJtXzFfiVXGtmS%2BVdDbu8I3YxMCgh7X3ZFHQ%2B2rV&X-Amz-Signature=22021123be24da5e524517cf91df9e03e490fcde276b42dabad81449a1e7be5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

`/odom`, `/map`, and `map => odom => base_link` tells Nav2 where the robot is

`/goal_pose` is where the robot wants to go

`/plan` is the path generated to get to that point

`/cmd_vel` actual moves the robot’s wheels 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLOEFB7W%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBboFYq3Rxenz%2Fu0KeudGJkexjGbyJimVmuO0fMzdWqEAiEAsapZlygwXDUPeuhEsBZUNaLuReFv%2Bka05D7Xc536cS8qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2BHR%2B978vQCu9V2jSrcAyBCvMopwEstT1wHLY3vPYQjOwQ9PIqCAPLnLGAgnkRMSjeBMoFJrx2yWCntrX0bTP6LE5Ae%2B9Vsd8x649RYOL7f0cyNsBMoVyZ8tPZWm9NpTOdbZCNYVoeZjaZCoI3jHovSyrFbG%2FnQweOM5EVI5ylvXYNorpGjbaBL93G%2FmFu55C0jLoCBpvR8Oc7X41ZWn7Fi%2B4CoRUmO0rNRI4GuVqjeswyyr3x3KTvmRXTtZajc6ePKPiqLFGfeiD%2FtwNGJLWzzPxg2b4N%2FJYSm8bUGoaPlkOWovkolbDVuUVlfLLXcCzhalHwSAGKEk2DYgc%2FfS2fpz7bdUX8xnxkeAzviR6Xg2TJV27VSL6mES3AEhNbddvwKjlRqPHikVitOjqmHcSKHLRqs7qpfdUrrvrttEfp2%2BzQ75LfXop9ZVb0UekCkdpm67wwJ39vgCdP0QnKzC8bmjMov%2FETR%2BiJCPvuOB87k6pxAq4v%2FteyplQcuZaKiZv2zAtD6HWQTYd8fVwQ90O853Tw5wt4a33X56MUPBzKwXG5hWr2DNkFHHG1iXRt1hbtqZtLylDY%2BdoWsFYKvuZW85HdWAC4dl8oShPoborpgagwJfJw2r6gCIy0rtTdYJUnNaMq65JKvI%2FhhMJ2dtsQGOqUBJgw3ypQfrdU9goxjMtticOWp7KvrNoCuZMeO%2B3VmJ6HQZX7JHA6Es9nGHBccm7JHcWHVRM3r0W9cikIHrwvZJeeo4E8ez3%2Ff5pOT4HNe4D%2BnLUAxGAVZqmA5T%2FS9o6jIaj61FRpPeI2CITeUAf49LwxytvvawWhe8snq%2FaXc8tC3r%2FPI18b9fJtXzFfiVXGtmS%2BVdDbu8I3YxMCgh7X3ZFHQ%2B2rV&X-Amz-Signature=0ec55cf85a61f698c5240264557ed5e8cda4fbe5899465c6b412ef927b10d2cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLOEFB7W%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBboFYq3Rxenz%2Fu0KeudGJkexjGbyJimVmuO0fMzdWqEAiEAsapZlygwXDUPeuhEsBZUNaLuReFv%2Bka05D7Xc536cS8qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2BHR%2B978vQCu9V2jSrcAyBCvMopwEstT1wHLY3vPYQjOwQ9PIqCAPLnLGAgnkRMSjeBMoFJrx2yWCntrX0bTP6LE5Ae%2B9Vsd8x649RYOL7f0cyNsBMoVyZ8tPZWm9NpTOdbZCNYVoeZjaZCoI3jHovSyrFbG%2FnQweOM5EVI5ylvXYNorpGjbaBL93G%2FmFu55C0jLoCBpvR8Oc7X41ZWn7Fi%2B4CoRUmO0rNRI4GuVqjeswyyr3x3KTvmRXTtZajc6ePKPiqLFGfeiD%2FtwNGJLWzzPxg2b4N%2FJYSm8bUGoaPlkOWovkolbDVuUVlfLLXcCzhalHwSAGKEk2DYgc%2FfS2fpz7bdUX8xnxkeAzviR6Xg2TJV27VSL6mES3AEhNbddvwKjlRqPHikVitOjqmHcSKHLRqs7qpfdUrrvrttEfp2%2BzQ75LfXop9ZVb0UekCkdpm67wwJ39vgCdP0QnKzC8bmjMov%2FETR%2BiJCPvuOB87k6pxAq4v%2FteyplQcuZaKiZv2zAtD6HWQTYd8fVwQ90O853Tw5wt4a33X56MUPBzKwXG5hWr2DNkFHHG1iXRt1hbtqZtLylDY%2BdoWsFYKvuZW85HdWAC4dl8oShPoborpgagwJfJw2r6gCIy0rtTdYJUnNaMq65JKvI%2FhhMJ2dtsQGOqUBJgw3ypQfrdU9goxjMtticOWp7KvrNoCuZMeO%2B3VmJ6HQZX7JHA6Es9nGHBccm7JHcWHVRM3r0W9cikIHrwvZJeeo4E8ez3%2Ff5pOT4HNe4D%2BnLUAxGAVZqmA5T%2FS9o6jIaj61FRpPeI2CITeUAf49LwxytvvawWhe8snq%2FaXc8tC3r%2FPI18b9fJtXzFfiVXGtmS%2BVdDbu8I3YxMCgh7X3ZFHQ%2B2rV&X-Amz-Signature=8d10f7488d2eaf9b4ea6a4ee4ab01e05359e447f831a82fd2886666499dd1c94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLOEFB7W%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBboFYq3Rxenz%2Fu0KeudGJkexjGbyJimVmuO0fMzdWqEAiEAsapZlygwXDUPeuhEsBZUNaLuReFv%2Bka05D7Xc536cS8qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2BHR%2B978vQCu9V2jSrcAyBCvMopwEstT1wHLY3vPYQjOwQ9PIqCAPLnLGAgnkRMSjeBMoFJrx2yWCntrX0bTP6LE5Ae%2B9Vsd8x649RYOL7f0cyNsBMoVyZ8tPZWm9NpTOdbZCNYVoeZjaZCoI3jHovSyrFbG%2FnQweOM5EVI5ylvXYNorpGjbaBL93G%2FmFu55C0jLoCBpvR8Oc7X41ZWn7Fi%2B4CoRUmO0rNRI4GuVqjeswyyr3x3KTvmRXTtZajc6ePKPiqLFGfeiD%2FtwNGJLWzzPxg2b4N%2FJYSm8bUGoaPlkOWovkolbDVuUVlfLLXcCzhalHwSAGKEk2DYgc%2FfS2fpz7bdUX8xnxkeAzviR6Xg2TJV27VSL6mES3AEhNbddvwKjlRqPHikVitOjqmHcSKHLRqs7qpfdUrrvrttEfp2%2BzQ75LfXop9ZVb0UekCkdpm67wwJ39vgCdP0QnKzC8bmjMov%2FETR%2BiJCPvuOB87k6pxAq4v%2FteyplQcuZaKiZv2zAtD6HWQTYd8fVwQ90O853Tw5wt4a33X56MUPBzKwXG5hWr2DNkFHHG1iXRt1hbtqZtLylDY%2BdoWsFYKvuZW85HdWAC4dl8oShPoborpgagwJfJw2r6gCIy0rtTdYJUnNaMq65JKvI%2FhhMJ2dtsQGOqUBJgw3ypQfrdU9goxjMtticOWp7KvrNoCuZMeO%2B3VmJ6HQZX7JHA6Es9nGHBccm7JHcWHVRM3r0W9cikIHrwvZJeeo4E8ez3%2Ff5pOT4HNe4D%2BnLUAxGAVZqmA5T%2FS9o6jIaj61FRpPeI2CITeUAf49LwxytvvawWhe8snq%2FaXc8tC3r%2FPI18b9fJtXzFfiVXGtmS%2BVdDbu8I3YxMCgh7X3ZFHQ%2B2rV&X-Amz-Signature=6b4f098cdcc776f4804bb5ef69b5738a53ba5c65a46188c169350415396e33ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```shell
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=<path/to/nav2_params.yaml>
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert context="danger" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLOEFB7W%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBboFYq3Rxenz%2Fu0KeudGJkexjGbyJimVmuO0fMzdWqEAiEAsapZlygwXDUPeuhEsBZUNaLuReFv%2Bka05D7Xc536cS8qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2BHR%2B978vQCu9V2jSrcAyBCvMopwEstT1wHLY3vPYQjOwQ9PIqCAPLnLGAgnkRMSjeBMoFJrx2yWCntrX0bTP6LE5Ae%2B9Vsd8x649RYOL7f0cyNsBMoVyZ8tPZWm9NpTOdbZCNYVoeZjaZCoI3jHovSyrFbG%2FnQweOM5EVI5ylvXYNorpGjbaBL93G%2FmFu55C0jLoCBpvR8Oc7X41ZWn7Fi%2B4CoRUmO0rNRI4GuVqjeswyyr3x3KTvmRXTtZajc6ePKPiqLFGfeiD%2FtwNGJLWzzPxg2b4N%2FJYSm8bUGoaPlkOWovkolbDVuUVlfLLXcCzhalHwSAGKEk2DYgc%2FfS2fpz7bdUX8xnxkeAzviR6Xg2TJV27VSL6mES3AEhNbddvwKjlRqPHikVitOjqmHcSKHLRqs7qpfdUrrvrttEfp2%2BzQ75LfXop9ZVb0UekCkdpm67wwJ39vgCdP0QnKzC8bmjMov%2FETR%2BiJCPvuOB87k6pxAq4v%2FteyplQcuZaKiZv2zAtD6HWQTYd8fVwQ90O853Tw5wt4a33X56MUPBzKwXG5hWr2DNkFHHG1iXRt1hbtqZtLylDY%2BdoWsFYKvuZW85HdWAC4dl8oShPoborpgagwJfJw2r6gCIy0rtTdYJUnNaMq65JKvI%2FhhMJ2dtsQGOqUBJgw3ypQfrdU9goxjMtticOWp7KvrNoCuZMeO%2B3VmJ6HQZX7JHA6Es9nGHBccm7JHcWHVRM3r0W9cikIHrwvZJeeo4E8ez3%2Ff5pOT4HNe4D%2BnLUAxGAVZqmA5T%2FS9o6jIaj61FRpPeI2CITeUAf49LwxytvvawWhe8snq%2FaXc8tC3r%2FPI18b9fJtXzFfiVXGtmS%2BVdDbu8I3YxMCgh7X3ZFHQ%2B2rV&X-Amz-Signature=67955bbc00210d087b165290f1edd9ce499e882173919593c258f45876f7b012&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLOEFB7W%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBboFYq3Rxenz%2Fu0KeudGJkexjGbyJimVmuO0fMzdWqEAiEAsapZlygwXDUPeuhEsBZUNaLuReFv%2Bka05D7Xc536cS8qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2BHR%2B978vQCu9V2jSrcAyBCvMopwEstT1wHLY3vPYQjOwQ9PIqCAPLnLGAgnkRMSjeBMoFJrx2yWCntrX0bTP6LE5Ae%2B9Vsd8x649RYOL7f0cyNsBMoVyZ8tPZWm9NpTOdbZCNYVoeZjaZCoI3jHovSyrFbG%2FnQweOM5EVI5ylvXYNorpGjbaBL93G%2FmFu55C0jLoCBpvR8Oc7X41ZWn7Fi%2B4CoRUmO0rNRI4GuVqjeswyyr3x3KTvmRXTtZajc6ePKPiqLFGfeiD%2FtwNGJLWzzPxg2b4N%2FJYSm8bUGoaPlkOWovkolbDVuUVlfLLXcCzhalHwSAGKEk2DYgc%2FfS2fpz7bdUX8xnxkeAzviR6Xg2TJV27VSL6mES3AEhNbddvwKjlRqPHikVitOjqmHcSKHLRqs7qpfdUrrvrttEfp2%2BzQ75LfXop9ZVb0UekCkdpm67wwJ39vgCdP0QnKzC8bmjMov%2FETR%2BiJCPvuOB87k6pxAq4v%2FteyplQcuZaKiZv2zAtD6HWQTYd8fVwQ90O853Tw5wt4a33X56MUPBzKwXG5hWr2DNkFHHG1iXRt1hbtqZtLylDY%2BdoWsFYKvuZW85HdWAC4dl8oShPoborpgagwJfJw2r6gCIy0rtTdYJUnNaMq65JKvI%2FhhMJ2dtsQGOqUBJgw3ypQfrdU9goxjMtticOWp7KvrNoCuZMeO%2B3VmJ6HQZX7JHA6Es9nGHBccm7JHcWHVRM3r0W9cikIHrwvZJeeo4E8ez3%2Ff5pOT4HNe4D%2BnLUAxGAVZqmA5T%2FS9o6jIaj61FRpPeI2CITeUAf49LwxytvvawWhe8snq%2FaXc8tC3r%2FPI18b9fJtXzFfiVXGtmS%2BVdDbu8I3YxMCgh7X3ZFHQ%2B2rV&X-Amz-Signature=fc9d1e08ab7517e04eb47ed52b8ba971acd145221f770b23fc03d64773018fdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLOEFB7W%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBboFYq3Rxenz%2Fu0KeudGJkexjGbyJimVmuO0fMzdWqEAiEAsapZlygwXDUPeuhEsBZUNaLuReFv%2Bka05D7Xc536cS8qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2BHR%2B978vQCu9V2jSrcAyBCvMopwEstT1wHLY3vPYQjOwQ9PIqCAPLnLGAgnkRMSjeBMoFJrx2yWCntrX0bTP6LE5Ae%2B9Vsd8x649RYOL7f0cyNsBMoVyZ8tPZWm9NpTOdbZCNYVoeZjaZCoI3jHovSyrFbG%2FnQweOM5EVI5ylvXYNorpGjbaBL93G%2FmFu55C0jLoCBpvR8Oc7X41ZWn7Fi%2B4CoRUmO0rNRI4GuVqjeswyyr3x3KTvmRXTtZajc6ePKPiqLFGfeiD%2FtwNGJLWzzPxg2b4N%2FJYSm8bUGoaPlkOWovkolbDVuUVlfLLXcCzhalHwSAGKEk2DYgc%2FfS2fpz7bdUX8xnxkeAzviR6Xg2TJV27VSL6mES3AEhNbddvwKjlRqPHikVitOjqmHcSKHLRqs7qpfdUrrvrttEfp2%2BzQ75LfXop9ZVb0UekCkdpm67wwJ39vgCdP0QnKzC8bmjMov%2FETR%2BiJCPvuOB87k6pxAq4v%2FteyplQcuZaKiZv2zAtD6HWQTYd8fVwQ90O853Tw5wt4a33X56MUPBzKwXG5hWr2DNkFHHG1iXRt1hbtqZtLylDY%2BdoWsFYKvuZW85HdWAC4dl8oShPoborpgagwJfJw2r6gCIy0rtTdYJUnNaMq65JKvI%2FhhMJ2dtsQGOqUBJgw3ypQfrdU9goxjMtticOWp7KvrNoCuZMeO%2B3VmJ6HQZX7JHA6Es9nGHBccm7JHcWHVRM3r0W9cikIHrwvZJeeo4E8ez3%2Ff5pOT4HNe4D%2BnLUAxGAVZqmA5T%2FS9o6jIaj61FRpPeI2CITeUAf49LwxytvvawWhe8snq%2FaXc8tC3r%2FPI18b9fJtXzFfiVXGtmS%2BVdDbu8I3YxMCgh7X3ZFHQ%2B2rV&X-Amz-Signature=ec3fd009e075deaba4db4d4925306ff7b12fc70dcfa0a095a1dfeb18ec3dbdec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLOEFB7W%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBboFYq3Rxenz%2Fu0KeudGJkexjGbyJimVmuO0fMzdWqEAiEAsapZlygwXDUPeuhEsBZUNaLuReFv%2Bka05D7Xc536cS8qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2BHR%2B978vQCu9V2jSrcAyBCvMopwEstT1wHLY3vPYQjOwQ9PIqCAPLnLGAgnkRMSjeBMoFJrx2yWCntrX0bTP6LE5Ae%2B9Vsd8x649RYOL7f0cyNsBMoVyZ8tPZWm9NpTOdbZCNYVoeZjaZCoI3jHovSyrFbG%2FnQweOM5EVI5ylvXYNorpGjbaBL93G%2FmFu55C0jLoCBpvR8Oc7X41ZWn7Fi%2B4CoRUmO0rNRI4GuVqjeswyyr3x3KTvmRXTtZajc6ePKPiqLFGfeiD%2FtwNGJLWzzPxg2b4N%2FJYSm8bUGoaPlkOWovkolbDVuUVlfLLXcCzhalHwSAGKEk2DYgc%2FfS2fpz7bdUX8xnxkeAzviR6Xg2TJV27VSL6mES3AEhNbddvwKjlRqPHikVitOjqmHcSKHLRqs7qpfdUrrvrttEfp2%2BzQ75LfXop9ZVb0UekCkdpm67wwJ39vgCdP0QnKzC8bmjMov%2FETR%2BiJCPvuOB87k6pxAq4v%2FteyplQcuZaKiZv2zAtD6HWQTYd8fVwQ90O853Tw5wt4a33X56MUPBzKwXG5hWr2DNkFHHG1iXRt1hbtqZtLylDY%2BdoWsFYKvuZW85HdWAC4dl8oShPoborpgagwJfJw2r6gCIy0rtTdYJUnNaMq65JKvI%2FhhMJ2dtsQGOqUBJgw3ypQfrdU9goxjMtticOWp7KvrNoCuZMeO%2B3VmJ6HQZX7JHA6Es9nGHBccm7JHcWHVRM3r0W9cikIHrwvZJeeo4E8ez3%2Ff5pOT4HNe4D%2BnLUAxGAVZqmA5T%2FS9o6jIaj61FRpPeI2CITeUAf49LwxytvvawWhe8snq%2FaXc8tC3r%2FPI18b9fJtXzFfiVXGtmS%2BVdDbu8I3YxMCgh7X3ZFHQ%2B2rV&X-Amz-Signature=63063a5107ba5f8bb4c35d175409ab836ed7368c404f6ee1e159ac866dab4471&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLOEFB7W%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBboFYq3Rxenz%2Fu0KeudGJkexjGbyJimVmuO0fMzdWqEAiEAsapZlygwXDUPeuhEsBZUNaLuReFv%2Bka05D7Xc536cS8qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2BHR%2B978vQCu9V2jSrcAyBCvMopwEstT1wHLY3vPYQjOwQ9PIqCAPLnLGAgnkRMSjeBMoFJrx2yWCntrX0bTP6LE5Ae%2B9Vsd8x649RYOL7f0cyNsBMoVyZ8tPZWm9NpTOdbZCNYVoeZjaZCoI3jHovSyrFbG%2FnQweOM5EVI5ylvXYNorpGjbaBL93G%2FmFu55C0jLoCBpvR8Oc7X41ZWn7Fi%2B4CoRUmO0rNRI4GuVqjeswyyr3x3KTvmRXTtZajc6ePKPiqLFGfeiD%2FtwNGJLWzzPxg2b4N%2FJYSm8bUGoaPlkOWovkolbDVuUVlfLLXcCzhalHwSAGKEk2DYgc%2FfS2fpz7bdUX8xnxkeAzviR6Xg2TJV27VSL6mES3AEhNbddvwKjlRqPHikVitOjqmHcSKHLRqs7qpfdUrrvrttEfp2%2BzQ75LfXop9ZVb0UekCkdpm67wwJ39vgCdP0QnKzC8bmjMov%2FETR%2BiJCPvuOB87k6pxAq4v%2FteyplQcuZaKiZv2zAtD6HWQTYd8fVwQ90O853Tw5wt4a33X56MUPBzKwXG5hWr2DNkFHHG1iXRt1hbtqZtLylDY%2BdoWsFYKvuZW85HdWAC4dl8oShPoborpgagwJfJw2r6gCIy0rtTdYJUnNaMq65JKvI%2FhhMJ2dtsQGOqUBJgw3ypQfrdU9goxjMtticOWp7KvrNoCuZMeO%2B3VmJ6HQZX7JHA6Es9nGHBccm7JHcWHVRM3r0W9cikIHrwvZJeeo4E8ez3%2Ff5pOT4HNe4D%2BnLUAxGAVZqmA5T%2FS9o6jIaj61FRpPeI2CITeUAf49LwxytvvawWhe8snq%2FaXc8tC3r%2FPI18b9fJtXzFfiVXGtmS%2BVdDbu8I3YxMCgh7X3ZFHQ%2B2rV&X-Amz-Signature=e96b778dece7a677b4bdff459396e714840184b71b1aac58e2ba4acb6bd4a424&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLOEFB7W%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBboFYq3Rxenz%2Fu0KeudGJkexjGbyJimVmuO0fMzdWqEAiEAsapZlygwXDUPeuhEsBZUNaLuReFv%2Bka05D7Xc536cS8qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2BHR%2B978vQCu9V2jSrcAyBCvMopwEstT1wHLY3vPYQjOwQ9PIqCAPLnLGAgnkRMSjeBMoFJrx2yWCntrX0bTP6LE5Ae%2B9Vsd8x649RYOL7f0cyNsBMoVyZ8tPZWm9NpTOdbZCNYVoeZjaZCoI3jHovSyrFbG%2FnQweOM5EVI5ylvXYNorpGjbaBL93G%2FmFu55C0jLoCBpvR8Oc7X41ZWn7Fi%2B4CoRUmO0rNRI4GuVqjeswyyr3x3KTvmRXTtZajc6ePKPiqLFGfeiD%2FtwNGJLWzzPxg2b4N%2FJYSm8bUGoaPlkOWovkolbDVuUVlfLLXcCzhalHwSAGKEk2DYgc%2FfS2fpz7bdUX8xnxkeAzviR6Xg2TJV27VSL6mES3AEhNbddvwKjlRqPHikVitOjqmHcSKHLRqs7qpfdUrrvrttEfp2%2BzQ75LfXop9ZVb0UekCkdpm67wwJ39vgCdP0QnKzC8bmjMov%2FETR%2BiJCPvuOB87k6pxAq4v%2FteyplQcuZaKiZv2zAtD6HWQTYd8fVwQ90O853Tw5wt4a33X56MUPBzKwXG5hWr2DNkFHHG1iXRt1hbtqZtLylDY%2BdoWsFYKvuZW85HdWAC4dl8oShPoborpgagwJfJw2r6gCIy0rtTdYJUnNaMq65JKvI%2FhhMJ2dtsQGOqUBJgw3ypQfrdU9goxjMtticOWp7KvrNoCuZMeO%2B3VmJ6HQZX7JHA6Es9nGHBccm7JHcWHVRM3r0W9cikIHrwvZJeeo4E8ez3%2Ff5pOT4HNe4D%2BnLUAxGAVZqmA5T%2FS9o6jIaj61FRpPeI2CITeUAf49LwxytvvawWhe8snq%2FaXc8tC3r%2FPI18b9fJtXzFfiVXGtmS%2BVdDbu8I3YxMCgh7X3ZFHQ%2B2rV&X-Amz-Signature=9adee665f9d8740e8b3d0df9bac08692fee83429466f7a33359f92da53ac0eb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLOEFB7W%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBboFYq3Rxenz%2Fu0KeudGJkexjGbyJimVmuO0fMzdWqEAiEAsapZlygwXDUPeuhEsBZUNaLuReFv%2Bka05D7Xc536cS8qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2BHR%2B978vQCu9V2jSrcAyBCvMopwEstT1wHLY3vPYQjOwQ9PIqCAPLnLGAgnkRMSjeBMoFJrx2yWCntrX0bTP6LE5Ae%2B9Vsd8x649RYOL7f0cyNsBMoVyZ8tPZWm9NpTOdbZCNYVoeZjaZCoI3jHovSyrFbG%2FnQweOM5EVI5ylvXYNorpGjbaBL93G%2FmFu55C0jLoCBpvR8Oc7X41ZWn7Fi%2B4CoRUmO0rNRI4GuVqjeswyyr3x3KTvmRXTtZajc6ePKPiqLFGfeiD%2FtwNGJLWzzPxg2b4N%2FJYSm8bUGoaPlkOWovkolbDVuUVlfLLXcCzhalHwSAGKEk2DYgc%2FfS2fpz7bdUX8xnxkeAzviR6Xg2TJV27VSL6mES3AEhNbddvwKjlRqPHikVitOjqmHcSKHLRqs7qpfdUrrvrttEfp2%2BzQ75LfXop9ZVb0UekCkdpm67wwJ39vgCdP0QnKzC8bmjMov%2FETR%2BiJCPvuOB87k6pxAq4v%2FteyplQcuZaKiZv2zAtD6HWQTYd8fVwQ90O853Tw5wt4a33X56MUPBzKwXG5hWr2DNkFHHG1iXRt1hbtqZtLylDY%2BdoWsFYKvuZW85HdWAC4dl8oShPoborpgagwJfJw2r6gCIy0rtTdYJUnNaMq65JKvI%2FhhMJ2dtsQGOqUBJgw3ypQfrdU9goxjMtticOWp7KvrNoCuZMeO%2B3VmJ6HQZX7JHA6Es9nGHBccm7JHcWHVRM3r0W9cikIHrwvZJeeo4E8ez3%2Ff5pOT4HNe4D%2BnLUAxGAVZqmA5T%2FS9o6jIaj61FRpPeI2CITeUAf49LwxytvvawWhe8snq%2FaXc8tC3r%2FPI18b9fJtXzFfiVXGtmS%2BVdDbu8I3YxMCgh7X3ZFHQ%2B2rV&X-Amz-Signature=c9d97f9009bb5f54208e1ea39f03c657496982c9a63ee112288a20f2346a09d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLOEFB7W%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBboFYq3Rxenz%2Fu0KeudGJkexjGbyJimVmuO0fMzdWqEAiEAsapZlygwXDUPeuhEsBZUNaLuReFv%2Bka05D7Xc536cS8qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2BHR%2B978vQCu9V2jSrcAyBCvMopwEstT1wHLY3vPYQjOwQ9PIqCAPLnLGAgnkRMSjeBMoFJrx2yWCntrX0bTP6LE5Ae%2B9Vsd8x649RYOL7f0cyNsBMoVyZ8tPZWm9NpTOdbZCNYVoeZjaZCoI3jHovSyrFbG%2FnQweOM5EVI5ylvXYNorpGjbaBL93G%2FmFu55C0jLoCBpvR8Oc7X41ZWn7Fi%2B4CoRUmO0rNRI4GuVqjeswyyr3x3KTvmRXTtZajc6ePKPiqLFGfeiD%2FtwNGJLWzzPxg2b4N%2FJYSm8bUGoaPlkOWovkolbDVuUVlfLLXcCzhalHwSAGKEk2DYgc%2FfS2fpz7bdUX8xnxkeAzviR6Xg2TJV27VSL6mES3AEhNbddvwKjlRqPHikVitOjqmHcSKHLRqs7qpfdUrrvrttEfp2%2BzQ75LfXop9ZVb0UekCkdpm67wwJ39vgCdP0QnKzC8bmjMov%2FETR%2BiJCPvuOB87k6pxAq4v%2FteyplQcuZaKiZv2zAtD6HWQTYd8fVwQ90O853Tw5wt4a33X56MUPBzKwXG5hWr2DNkFHHG1iXRt1hbtqZtLylDY%2BdoWsFYKvuZW85HdWAC4dl8oShPoborpgagwJfJw2r6gCIy0rtTdYJUnNaMq65JKvI%2FhhMJ2dtsQGOqUBJgw3ypQfrdU9goxjMtticOWp7KvrNoCuZMeO%2B3VmJ6HQZX7JHA6Es9nGHBccm7JHcWHVRM3r0W9cikIHrwvZJeeo4E8ez3%2Ff5pOT4HNe4D%2BnLUAxGAVZqmA5T%2FS9o6jIaj61FRpPeI2CITeUAf49LwxytvvawWhe8snq%2FaXc8tC3r%2FPI18b9fJtXzFfiVXGtmS%2BVdDbu8I3YxMCgh7X3ZFHQ%2B2rV&X-Amz-Signature=f5f91fe0b7188284f2e5b0b99b08b194074c81014933564f18eade4df87f28ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLOEFB7W%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBboFYq3Rxenz%2Fu0KeudGJkexjGbyJimVmuO0fMzdWqEAiEAsapZlygwXDUPeuhEsBZUNaLuReFv%2Bka05D7Xc536cS8qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2BHR%2B978vQCu9V2jSrcAyBCvMopwEstT1wHLY3vPYQjOwQ9PIqCAPLnLGAgnkRMSjeBMoFJrx2yWCntrX0bTP6LE5Ae%2B9Vsd8x649RYOL7f0cyNsBMoVyZ8tPZWm9NpTOdbZCNYVoeZjaZCoI3jHovSyrFbG%2FnQweOM5EVI5ylvXYNorpGjbaBL93G%2FmFu55C0jLoCBpvR8Oc7X41ZWn7Fi%2B4CoRUmO0rNRI4GuVqjeswyyr3x3KTvmRXTtZajc6ePKPiqLFGfeiD%2FtwNGJLWzzPxg2b4N%2FJYSm8bUGoaPlkOWovkolbDVuUVlfLLXcCzhalHwSAGKEk2DYgc%2FfS2fpz7bdUX8xnxkeAzviR6Xg2TJV27VSL6mES3AEhNbddvwKjlRqPHikVitOjqmHcSKHLRqs7qpfdUrrvrttEfp2%2BzQ75LfXop9ZVb0UekCkdpm67wwJ39vgCdP0QnKzC8bmjMov%2FETR%2BiJCPvuOB87k6pxAq4v%2FteyplQcuZaKiZv2zAtD6HWQTYd8fVwQ90O853Tw5wt4a33X56MUPBzKwXG5hWr2DNkFHHG1iXRt1hbtqZtLylDY%2BdoWsFYKvuZW85HdWAC4dl8oShPoborpgagwJfJw2r6gCIy0rtTdYJUnNaMq65JKvI%2FhhMJ2dtsQGOqUBJgw3ypQfrdU9goxjMtticOWp7KvrNoCuZMeO%2B3VmJ6HQZX7JHA6Es9nGHBccm7JHcWHVRM3r0W9cikIHrwvZJeeo4E8ez3%2Ff5pOT4HNe4D%2BnLUAxGAVZqmA5T%2FS9o6jIaj61FRpPeI2CITeUAf49LwxytvvawWhe8snq%2FaXc8tC3r%2FPI18b9fJtXzFfiVXGtmS%2BVdDbu8I3YxMCgh7X3ZFHQ%2B2rV&X-Amz-Signature=ce356701a89cc99e83f04e0cc38330e18a494a170a92f77180dfdd2e84a29ba6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```shell
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

You should be able to publish a goal pose in rviz like in the section above

If you need your robot to autonomously put goal poses down, such as a match start in Robomasters, you just need to publish `geometry_msgs/PoseStamped` on `/goal_pose` inside of `my_node`

## Adding `nav2_bringup` to launch file

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

# Nav2 settings

TODO: change footprint?
