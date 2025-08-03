---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-08-02T09:55:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-08-02T09:55:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHOXMAFU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9%2Bsdqz9r1Tw6jNTsRvDFPW3kZ5pelxDo0HQLzQ9YnJAiBeeU9EXDQnSMd%2F8VGfRLzzZpYqV2KOH6rZFuNryCbeICr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMssIdZtGDXx1lIB8dKtwDxZNfGk7GyHlysCm6HUk%2Bb8ff%2BtNFgFoq3IG0mUSbxNDKkw1QelmZ62aAXhUhjej0mUQ1VVxib%2FMWMMWtjo2U%2FRiWF4h8uF%2BfKsx38Pdj9VTmNs15lf8RmxLCyGGqmE%2B4bxhLjwdU7S0OnH2438Vfq%2Byyxkz3OGulFYFgfhqAOM1ZDCuS3fZrTX9Fsp%2B0KS9999kJCCLLG9%2FF167Tr%2BufKMkIeLYoYvsvbQT2YIh3xcesR1Ifg7n0SBYLtS22Upp6UHr8uOO1ELie4wY6LgI%2B4andB%2FHa5sJcp%2Bv35fxK3SDnkJvw7zjhfCDx7tA2TwbjIScta3I3eIqJ4tgKiCX53%2BNFaMQSpRvb8iFEpMIat9MPCB5lOtSqX26O6tkqub%2FZOpI7RLie0ldL7F%2BDyFdKY7VerP%2F83WBSYsccYoAGNK1XHfu1v%2F%2B%2FTXHVjB5g36rZk2MKL5KVCRIw3yW%2B05o1Kz4eAc8pBQNhTCXA2ivmhfX8UkviRvxPHFv1TKdNrszdgtlpZ1g0A5GjryJfiizHgaNxoC9IdzW0fRZn15eRCISTijDk1RawBQyRiBk1qQI4DTTck%2FecRqRFYCn7EBw7IjkTZObXDHXMbb4grJ4%2B9zWPgWD%2F%2B%2FjJOjnhELowt8i8xAY6pgEa%2FGZS5c8pjMJwsP7733KYFfmHg3O9hpjinVqWUwiXXEvIhJqZUnOLbXGJzAkvfY15lPtXZ5%2F%2B3YzqT1qDjetNGSH0ZSNJWpYbjasUT1tSEVZ6UUb%2FghV4LwGVBV6Pgys7CvXHWZW5QpIT2049djWYu2JQUCQqhlf0IErfVj1ak4LJUKkFKunUunWzCp6KKcDa4zZkiV7sZrDiQ3Wv0D5zKXcz31OU&X-Amz-Signature=3adfd8ea55c0601fd3deb3c72d014fd2aa611604146ef8ca6b19502a50036bc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHOXMAFU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9%2Bsdqz9r1Tw6jNTsRvDFPW3kZ5pelxDo0HQLzQ9YnJAiBeeU9EXDQnSMd%2F8VGfRLzzZpYqV2KOH6rZFuNryCbeICr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMssIdZtGDXx1lIB8dKtwDxZNfGk7GyHlysCm6HUk%2Bb8ff%2BtNFgFoq3IG0mUSbxNDKkw1QelmZ62aAXhUhjej0mUQ1VVxib%2FMWMMWtjo2U%2FRiWF4h8uF%2BfKsx38Pdj9VTmNs15lf8RmxLCyGGqmE%2B4bxhLjwdU7S0OnH2438Vfq%2Byyxkz3OGulFYFgfhqAOM1ZDCuS3fZrTX9Fsp%2B0KS9999kJCCLLG9%2FF167Tr%2BufKMkIeLYoYvsvbQT2YIh3xcesR1Ifg7n0SBYLtS22Upp6UHr8uOO1ELie4wY6LgI%2B4andB%2FHa5sJcp%2Bv35fxK3SDnkJvw7zjhfCDx7tA2TwbjIScta3I3eIqJ4tgKiCX53%2BNFaMQSpRvb8iFEpMIat9MPCB5lOtSqX26O6tkqub%2FZOpI7RLie0ldL7F%2BDyFdKY7VerP%2F83WBSYsccYoAGNK1XHfu1v%2F%2B%2FTXHVjB5g36rZk2MKL5KVCRIw3yW%2B05o1Kz4eAc8pBQNhTCXA2ivmhfX8UkviRvxPHFv1TKdNrszdgtlpZ1g0A5GjryJfiizHgaNxoC9IdzW0fRZn15eRCISTijDk1RawBQyRiBk1qQI4DTTck%2FecRqRFYCn7EBw7IjkTZObXDHXMbb4grJ4%2B9zWPgWD%2F%2B%2FjJOjnhELowt8i8xAY6pgEa%2FGZS5c8pjMJwsP7733KYFfmHg3O9hpjinVqWUwiXXEvIhJqZUnOLbXGJzAkvfY15lPtXZ5%2F%2B3YzqT1qDjetNGSH0ZSNJWpYbjasUT1tSEVZ6UUb%2FghV4LwGVBV6Pgys7CvXHWZW5QpIT2049djWYu2JQUCQqhlf0IErfVj1ak4LJUKkFKunUunWzCp6KKcDa4zZkiV7sZrDiQ3Wv0D5zKXcz31OU&X-Amz-Signature=1e0231f2ea2e71d452f254d3158262f29539d5fb15a54d8ca1482db568f1ebea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHOXMAFU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9%2Bsdqz9r1Tw6jNTsRvDFPW3kZ5pelxDo0HQLzQ9YnJAiBeeU9EXDQnSMd%2F8VGfRLzzZpYqV2KOH6rZFuNryCbeICr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMssIdZtGDXx1lIB8dKtwDxZNfGk7GyHlysCm6HUk%2Bb8ff%2BtNFgFoq3IG0mUSbxNDKkw1QelmZ62aAXhUhjej0mUQ1VVxib%2FMWMMWtjo2U%2FRiWF4h8uF%2BfKsx38Pdj9VTmNs15lf8RmxLCyGGqmE%2B4bxhLjwdU7S0OnH2438Vfq%2Byyxkz3OGulFYFgfhqAOM1ZDCuS3fZrTX9Fsp%2B0KS9999kJCCLLG9%2FF167Tr%2BufKMkIeLYoYvsvbQT2YIh3xcesR1Ifg7n0SBYLtS22Upp6UHr8uOO1ELie4wY6LgI%2B4andB%2FHa5sJcp%2Bv35fxK3SDnkJvw7zjhfCDx7tA2TwbjIScta3I3eIqJ4tgKiCX53%2BNFaMQSpRvb8iFEpMIat9MPCB5lOtSqX26O6tkqub%2FZOpI7RLie0ldL7F%2BDyFdKY7VerP%2F83WBSYsccYoAGNK1XHfu1v%2F%2B%2FTXHVjB5g36rZk2MKL5KVCRIw3yW%2B05o1Kz4eAc8pBQNhTCXA2ivmhfX8UkviRvxPHFv1TKdNrszdgtlpZ1g0A5GjryJfiizHgaNxoC9IdzW0fRZn15eRCISTijDk1RawBQyRiBk1qQI4DTTck%2FecRqRFYCn7EBw7IjkTZObXDHXMbb4grJ4%2B9zWPgWD%2F%2B%2FjJOjnhELowt8i8xAY6pgEa%2FGZS5c8pjMJwsP7733KYFfmHg3O9hpjinVqWUwiXXEvIhJqZUnOLbXGJzAkvfY15lPtXZ5%2F%2B3YzqT1qDjetNGSH0ZSNJWpYbjasUT1tSEVZ6UUb%2FghV4LwGVBV6Pgys7CvXHWZW5QpIT2049djWYu2JQUCQqhlf0IErfVj1ak4LJUKkFKunUunWzCp6KKcDa4zZkiV7sZrDiQ3Wv0D5zKXcz31OU&X-Amz-Signature=0cec169b79ca7695e9db52c429affc85bfe77be226a3b86c946480bbdf56edb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHOXMAFU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9%2Bsdqz9r1Tw6jNTsRvDFPW3kZ5pelxDo0HQLzQ9YnJAiBeeU9EXDQnSMd%2F8VGfRLzzZpYqV2KOH6rZFuNryCbeICr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMssIdZtGDXx1lIB8dKtwDxZNfGk7GyHlysCm6HUk%2Bb8ff%2BtNFgFoq3IG0mUSbxNDKkw1QelmZ62aAXhUhjej0mUQ1VVxib%2FMWMMWtjo2U%2FRiWF4h8uF%2BfKsx38Pdj9VTmNs15lf8RmxLCyGGqmE%2B4bxhLjwdU7S0OnH2438Vfq%2Byyxkz3OGulFYFgfhqAOM1ZDCuS3fZrTX9Fsp%2B0KS9999kJCCLLG9%2FF167Tr%2BufKMkIeLYoYvsvbQT2YIh3xcesR1Ifg7n0SBYLtS22Upp6UHr8uOO1ELie4wY6LgI%2B4andB%2FHa5sJcp%2Bv35fxK3SDnkJvw7zjhfCDx7tA2TwbjIScta3I3eIqJ4tgKiCX53%2BNFaMQSpRvb8iFEpMIat9MPCB5lOtSqX26O6tkqub%2FZOpI7RLie0ldL7F%2BDyFdKY7VerP%2F83WBSYsccYoAGNK1XHfu1v%2F%2B%2FTXHVjB5g36rZk2MKL5KVCRIw3yW%2B05o1Kz4eAc8pBQNhTCXA2ivmhfX8UkviRvxPHFv1TKdNrszdgtlpZ1g0A5GjryJfiizHgaNxoC9IdzW0fRZn15eRCISTijDk1RawBQyRiBk1qQI4DTTck%2FecRqRFYCn7EBw7IjkTZObXDHXMbb4grJ4%2B9zWPgWD%2F%2B%2FjJOjnhELowt8i8xAY6pgEa%2FGZS5c8pjMJwsP7733KYFfmHg3O9hpjinVqWUwiXXEvIhJqZUnOLbXGJzAkvfY15lPtXZ5%2F%2B3YzqT1qDjetNGSH0ZSNJWpYbjasUT1tSEVZ6UUb%2FghV4LwGVBV6Pgys7CvXHWZW5QpIT2049djWYu2JQUCQqhlf0IErfVj1ak4LJUKkFKunUunWzCp6KKcDa4zZkiV7sZrDiQ3Wv0D5zKXcz31OU&X-Amz-Signature=6ffa0e13b52940c0c76d628ba777e58885ce1a3753fb84de34c4a61e397e51da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHOXMAFU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9%2Bsdqz9r1Tw6jNTsRvDFPW3kZ5pelxDo0HQLzQ9YnJAiBeeU9EXDQnSMd%2F8VGfRLzzZpYqV2KOH6rZFuNryCbeICr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMssIdZtGDXx1lIB8dKtwDxZNfGk7GyHlysCm6HUk%2Bb8ff%2BtNFgFoq3IG0mUSbxNDKkw1QelmZ62aAXhUhjej0mUQ1VVxib%2FMWMMWtjo2U%2FRiWF4h8uF%2BfKsx38Pdj9VTmNs15lf8RmxLCyGGqmE%2B4bxhLjwdU7S0OnH2438Vfq%2Byyxkz3OGulFYFgfhqAOM1ZDCuS3fZrTX9Fsp%2B0KS9999kJCCLLG9%2FF167Tr%2BufKMkIeLYoYvsvbQT2YIh3xcesR1Ifg7n0SBYLtS22Upp6UHr8uOO1ELie4wY6LgI%2B4andB%2FHa5sJcp%2Bv35fxK3SDnkJvw7zjhfCDx7tA2TwbjIScta3I3eIqJ4tgKiCX53%2BNFaMQSpRvb8iFEpMIat9MPCB5lOtSqX26O6tkqub%2FZOpI7RLie0ldL7F%2BDyFdKY7VerP%2F83WBSYsccYoAGNK1XHfu1v%2F%2B%2FTXHVjB5g36rZk2MKL5KVCRIw3yW%2B05o1Kz4eAc8pBQNhTCXA2ivmhfX8UkviRvxPHFv1TKdNrszdgtlpZ1g0A5GjryJfiizHgaNxoC9IdzW0fRZn15eRCISTijDk1RawBQyRiBk1qQI4DTTck%2FecRqRFYCn7EBw7IjkTZObXDHXMbb4grJ4%2B9zWPgWD%2F%2B%2FjJOjnhELowt8i8xAY6pgEa%2FGZS5c8pjMJwsP7733KYFfmHg3O9hpjinVqWUwiXXEvIhJqZUnOLbXGJzAkvfY15lPtXZ5%2F%2B3YzqT1qDjetNGSH0ZSNJWpYbjasUT1tSEVZ6UUb%2FghV4LwGVBV6Pgys7CvXHWZW5QpIT2049djWYu2JQUCQqhlf0IErfVj1ak4LJUKkFKunUunWzCp6KKcDa4zZkiV7sZrDiQ3Wv0D5zKXcz31OU&X-Amz-Signature=05766f727690ee4d18c6236c3b57691cd0a230c24014553ef8eee5048629f0d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHOXMAFU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9%2Bsdqz9r1Tw6jNTsRvDFPW3kZ5pelxDo0HQLzQ9YnJAiBeeU9EXDQnSMd%2F8VGfRLzzZpYqV2KOH6rZFuNryCbeICr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMssIdZtGDXx1lIB8dKtwDxZNfGk7GyHlysCm6HUk%2Bb8ff%2BtNFgFoq3IG0mUSbxNDKkw1QelmZ62aAXhUhjej0mUQ1VVxib%2FMWMMWtjo2U%2FRiWF4h8uF%2BfKsx38Pdj9VTmNs15lf8RmxLCyGGqmE%2B4bxhLjwdU7S0OnH2438Vfq%2Byyxkz3OGulFYFgfhqAOM1ZDCuS3fZrTX9Fsp%2B0KS9999kJCCLLG9%2FF167Tr%2BufKMkIeLYoYvsvbQT2YIh3xcesR1Ifg7n0SBYLtS22Upp6UHr8uOO1ELie4wY6LgI%2B4andB%2FHa5sJcp%2Bv35fxK3SDnkJvw7zjhfCDx7tA2TwbjIScta3I3eIqJ4tgKiCX53%2BNFaMQSpRvb8iFEpMIat9MPCB5lOtSqX26O6tkqub%2FZOpI7RLie0ldL7F%2BDyFdKY7VerP%2F83WBSYsccYoAGNK1XHfu1v%2F%2B%2FTXHVjB5g36rZk2MKL5KVCRIw3yW%2B05o1Kz4eAc8pBQNhTCXA2ivmhfX8UkviRvxPHFv1TKdNrszdgtlpZ1g0A5GjryJfiizHgaNxoC9IdzW0fRZn15eRCISTijDk1RawBQyRiBk1qQI4DTTck%2FecRqRFYCn7EBw7IjkTZObXDHXMbb4grJ4%2B9zWPgWD%2F%2B%2FjJOjnhELowt8i8xAY6pgEa%2FGZS5c8pjMJwsP7733KYFfmHg3O9hpjinVqWUwiXXEvIhJqZUnOLbXGJzAkvfY15lPtXZ5%2F%2B3YzqT1qDjetNGSH0ZSNJWpYbjasUT1tSEVZ6UUb%2FghV4LwGVBV6Pgys7CvXHWZW5QpIT2049djWYu2JQUCQqhlf0IErfVj1ak4LJUKkFKunUunWzCp6KKcDa4zZkiV7sZrDiQ3Wv0D5zKXcz31OU&X-Amz-Signature=84c195506466c39d0442fc728fe185088a1cf0e7616d98faafbf67f5a571be85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHOXMAFU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9%2Bsdqz9r1Tw6jNTsRvDFPW3kZ5pelxDo0HQLzQ9YnJAiBeeU9EXDQnSMd%2F8VGfRLzzZpYqV2KOH6rZFuNryCbeICr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMssIdZtGDXx1lIB8dKtwDxZNfGk7GyHlysCm6HUk%2Bb8ff%2BtNFgFoq3IG0mUSbxNDKkw1QelmZ62aAXhUhjej0mUQ1VVxib%2FMWMMWtjo2U%2FRiWF4h8uF%2BfKsx38Pdj9VTmNs15lf8RmxLCyGGqmE%2B4bxhLjwdU7S0OnH2438Vfq%2Byyxkz3OGulFYFgfhqAOM1ZDCuS3fZrTX9Fsp%2B0KS9999kJCCLLG9%2FF167Tr%2BufKMkIeLYoYvsvbQT2YIh3xcesR1Ifg7n0SBYLtS22Upp6UHr8uOO1ELie4wY6LgI%2B4andB%2FHa5sJcp%2Bv35fxK3SDnkJvw7zjhfCDx7tA2TwbjIScta3I3eIqJ4tgKiCX53%2BNFaMQSpRvb8iFEpMIat9MPCB5lOtSqX26O6tkqub%2FZOpI7RLie0ldL7F%2BDyFdKY7VerP%2F83WBSYsccYoAGNK1XHfu1v%2F%2B%2FTXHVjB5g36rZk2MKL5KVCRIw3yW%2B05o1Kz4eAc8pBQNhTCXA2ivmhfX8UkviRvxPHFv1TKdNrszdgtlpZ1g0A5GjryJfiizHgaNxoC9IdzW0fRZn15eRCISTijDk1RawBQyRiBk1qQI4DTTck%2FecRqRFYCn7EBw7IjkTZObXDHXMbb4grJ4%2B9zWPgWD%2F%2B%2FjJOjnhELowt8i8xAY6pgEa%2FGZS5c8pjMJwsP7733KYFfmHg3O9hpjinVqWUwiXXEvIhJqZUnOLbXGJzAkvfY15lPtXZ5%2F%2B3YzqT1qDjetNGSH0ZSNJWpYbjasUT1tSEVZ6UUb%2FghV4LwGVBV6Pgys7CvXHWZW5QpIT2049djWYu2JQUCQqhlf0IErfVj1ak4LJUKkFKunUunWzCp6KKcDa4zZkiV7sZrDiQ3Wv0D5zKXcz31OU&X-Amz-Signature=209e24a6bb4a182add82e8ee72fefee04f17a96a81dd3cd2b20401bf93181945&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHOXMAFU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9%2Bsdqz9r1Tw6jNTsRvDFPW3kZ5pelxDo0HQLzQ9YnJAiBeeU9EXDQnSMd%2F8VGfRLzzZpYqV2KOH6rZFuNryCbeICr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMssIdZtGDXx1lIB8dKtwDxZNfGk7GyHlysCm6HUk%2Bb8ff%2BtNFgFoq3IG0mUSbxNDKkw1QelmZ62aAXhUhjej0mUQ1VVxib%2FMWMMWtjo2U%2FRiWF4h8uF%2BfKsx38Pdj9VTmNs15lf8RmxLCyGGqmE%2B4bxhLjwdU7S0OnH2438Vfq%2Byyxkz3OGulFYFgfhqAOM1ZDCuS3fZrTX9Fsp%2B0KS9999kJCCLLG9%2FF167Tr%2BufKMkIeLYoYvsvbQT2YIh3xcesR1Ifg7n0SBYLtS22Upp6UHr8uOO1ELie4wY6LgI%2B4andB%2FHa5sJcp%2Bv35fxK3SDnkJvw7zjhfCDx7tA2TwbjIScta3I3eIqJ4tgKiCX53%2BNFaMQSpRvb8iFEpMIat9MPCB5lOtSqX26O6tkqub%2FZOpI7RLie0ldL7F%2BDyFdKY7VerP%2F83WBSYsccYoAGNK1XHfu1v%2F%2B%2FTXHVjB5g36rZk2MKL5KVCRIw3yW%2B05o1Kz4eAc8pBQNhTCXA2ivmhfX8UkviRvxPHFv1TKdNrszdgtlpZ1g0A5GjryJfiizHgaNxoC9IdzW0fRZn15eRCISTijDk1RawBQyRiBk1qQI4DTTck%2FecRqRFYCn7EBw7IjkTZObXDHXMbb4grJ4%2B9zWPgWD%2F%2B%2FjJOjnhELowt8i8xAY6pgEa%2FGZS5c8pjMJwsP7733KYFfmHg3O9hpjinVqWUwiXXEvIhJqZUnOLbXGJzAkvfY15lPtXZ5%2F%2B3YzqT1qDjetNGSH0ZSNJWpYbjasUT1tSEVZ6UUb%2FghV4LwGVBV6Pgys7CvXHWZW5QpIT2049djWYu2JQUCQqhlf0IErfVj1ak4LJUKkFKunUunWzCp6KKcDa4zZkiV7sZrDiQ3Wv0D5zKXcz31OU&X-Amz-Signature=ba76b3cecca28f482a774d7c1e9e2fb9d4a93f3968d77c5bb68e7db9a3d8a4b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHOXMAFU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9%2Bsdqz9r1Tw6jNTsRvDFPW3kZ5pelxDo0HQLzQ9YnJAiBeeU9EXDQnSMd%2F8VGfRLzzZpYqV2KOH6rZFuNryCbeICr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMssIdZtGDXx1lIB8dKtwDxZNfGk7GyHlysCm6HUk%2Bb8ff%2BtNFgFoq3IG0mUSbxNDKkw1QelmZ62aAXhUhjej0mUQ1VVxib%2FMWMMWtjo2U%2FRiWF4h8uF%2BfKsx38Pdj9VTmNs15lf8RmxLCyGGqmE%2B4bxhLjwdU7S0OnH2438Vfq%2Byyxkz3OGulFYFgfhqAOM1ZDCuS3fZrTX9Fsp%2B0KS9999kJCCLLG9%2FF167Tr%2BufKMkIeLYoYvsvbQT2YIh3xcesR1Ifg7n0SBYLtS22Upp6UHr8uOO1ELie4wY6LgI%2B4andB%2FHa5sJcp%2Bv35fxK3SDnkJvw7zjhfCDx7tA2TwbjIScta3I3eIqJ4tgKiCX53%2BNFaMQSpRvb8iFEpMIat9MPCB5lOtSqX26O6tkqub%2FZOpI7RLie0ldL7F%2BDyFdKY7VerP%2F83WBSYsccYoAGNK1XHfu1v%2F%2B%2FTXHVjB5g36rZk2MKL5KVCRIw3yW%2B05o1Kz4eAc8pBQNhTCXA2ivmhfX8UkviRvxPHFv1TKdNrszdgtlpZ1g0A5GjryJfiizHgaNxoC9IdzW0fRZn15eRCISTijDk1RawBQyRiBk1qQI4DTTck%2FecRqRFYCn7EBw7IjkTZObXDHXMbb4grJ4%2B9zWPgWD%2F%2B%2FjJOjnhELowt8i8xAY6pgEa%2FGZS5c8pjMJwsP7733KYFfmHg3O9hpjinVqWUwiXXEvIhJqZUnOLbXGJzAkvfY15lPtXZ5%2F%2B3YzqT1qDjetNGSH0ZSNJWpYbjasUT1tSEVZ6UUb%2FghV4LwGVBV6Pgys7CvXHWZW5QpIT2049djWYu2JQUCQqhlf0IErfVj1ak4LJUKkFKunUunWzCp6KKcDa4zZkiV7sZrDiQ3Wv0D5zKXcz31OU&X-Amz-Signature=ac0a7000cd848a7be2c8bfd2dba62c46aff1664f2eff1b87a6fc412bee8074b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHOXMAFU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9%2Bsdqz9r1Tw6jNTsRvDFPW3kZ5pelxDo0HQLzQ9YnJAiBeeU9EXDQnSMd%2F8VGfRLzzZpYqV2KOH6rZFuNryCbeICr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMssIdZtGDXx1lIB8dKtwDxZNfGk7GyHlysCm6HUk%2Bb8ff%2BtNFgFoq3IG0mUSbxNDKkw1QelmZ62aAXhUhjej0mUQ1VVxib%2FMWMMWtjo2U%2FRiWF4h8uF%2BfKsx38Pdj9VTmNs15lf8RmxLCyGGqmE%2B4bxhLjwdU7S0OnH2438Vfq%2Byyxkz3OGulFYFgfhqAOM1ZDCuS3fZrTX9Fsp%2B0KS9999kJCCLLG9%2FF167Tr%2BufKMkIeLYoYvsvbQT2YIh3xcesR1Ifg7n0SBYLtS22Upp6UHr8uOO1ELie4wY6LgI%2B4andB%2FHa5sJcp%2Bv35fxK3SDnkJvw7zjhfCDx7tA2TwbjIScta3I3eIqJ4tgKiCX53%2BNFaMQSpRvb8iFEpMIat9MPCB5lOtSqX26O6tkqub%2FZOpI7RLie0ldL7F%2BDyFdKY7VerP%2F83WBSYsccYoAGNK1XHfu1v%2F%2B%2FTXHVjB5g36rZk2MKL5KVCRIw3yW%2B05o1Kz4eAc8pBQNhTCXA2ivmhfX8UkviRvxPHFv1TKdNrszdgtlpZ1g0A5GjryJfiizHgaNxoC9IdzW0fRZn15eRCISTijDk1RawBQyRiBk1qQI4DTTck%2FecRqRFYCn7EBw7IjkTZObXDHXMbb4grJ4%2B9zWPgWD%2F%2B%2FjJOjnhELowt8i8xAY6pgEa%2FGZS5c8pjMJwsP7733KYFfmHg3O9hpjinVqWUwiXXEvIhJqZUnOLbXGJzAkvfY15lPtXZ5%2F%2B3YzqT1qDjetNGSH0ZSNJWpYbjasUT1tSEVZ6UUb%2FghV4LwGVBV6Pgys7CvXHWZW5QpIT2049djWYu2JQUCQqhlf0IErfVj1ak4LJUKkFKunUunWzCp6KKcDa4zZkiV7sZrDiQ3Wv0D5zKXcz31OU&X-Amz-Signature=8684cf9d1ec69e57468aeab9896d8ec7e3a1a5d8717e6bdb94c3f34928eead07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHOXMAFU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9%2Bsdqz9r1Tw6jNTsRvDFPW3kZ5pelxDo0HQLzQ9YnJAiBeeU9EXDQnSMd%2F8VGfRLzzZpYqV2KOH6rZFuNryCbeICr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMssIdZtGDXx1lIB8dKtwDxZNfGk7GyHlysCm6HUk%2Bb8ff%2BtNFgFoq3IG0mUSbxNDKkw1QelmZ62aAXhUhjej0mUQ1VVxib%2FMWMMWtjo2U%2FRiWF4h8uF%2BfKsx38Pdj9VTmNs15lf8RmxLCyGGqmE%2B4bxhLjwdU7S0OnH2438Vfq%2Byyxkz3OGulFYFgfhqAOM1ZDCuS3fZrTX9Fsp%2B0KS9999kJCCLLG9%2FF167Tr%2BufKMkIeLYoYvsvbQT2YIh3xcesR1Ifg7n0SBYLtS22Upp6UHr8uOO1ELie4wY6LgI%2B4andB%2FHa5sJcp%2Bv35fxK3SDnkJvw7zjhfCDx7tA2TwbjIScta3I3eIqJ4tgKiCX53%2BNFaMQSpRvb8iFEpMIat9MPCB5lOtSqX26O6tkqub%2FZOpI7RLie0ldL7F%2BDyFdKY7VerP%2F83WBSYsccYoAGNK1XHfu1v%2F%2B%2FTXHVjB5g36rZk2MKL5KVCRIw3yW%2B05o1Kz4eAc8pBQNhTCXA2ivmhfX8UkviRvxPHFv1TKdNrszdgtlpZ1g0A5GjryJfiizHgaNxoC9IdzW0fRZn15eRCISTijDk1RawBQyRiBk1qQI4DTTck%2FecRqRFYCn7EBw7IjkTZObXDHXMbb4grJ4%2B9zWPgWD%2F%2B%2FjJOjnhELowt8i8xAY6pgEa%2FGZS5c8pjMJwsP7733KYFfmHg3O9hpjinVqWUwiXXEvIhJqZUnOLbXGJzAkvfY15lPtXZ5%2F%2B3YzqT1qDjetNGSH0ZSNJWpYbjasUT1tSEVZ6UUb%2FghV4LwGVBV6Pgys7CvXHWZW5QpIT2049djWYu2JQUCQqhlf0IErfVj1ak4LJUKkFKunUunWzCp6KKcDa4zZkiV7sZrDiQ3Wv0D5zKXcz31OU&X-Amz-Signature=1b0f94d0fb2e9540a8420a949ceee318e708050305f964a2c077f58698486523&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHOXMAFU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9%2Bsdqz9r1Tw6jNTsRvDFPW3kZ5pelxDo0HQLzQ9YnJAiBeeU9EXDQnSMd%2F8VGfRLzzZpYqV2KOH6rZFuNryCbeICr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMssIdZtGDXx1lIB8dKtwDxZNfGk7GyHlysCm6HUk%2Bb8ff%2BtNFgFoq3IG0mUSbxNDKkw1QelmZ62aAXhUhjej0mUQ1VVxib%2FMWMMWtjo2U%2FRiWF4h8uF%2BfKsx38Pdj9VTmNs15lf8RmxLCyGGqmE%2B4bxhLjwdU7S0OnH2438Vfq%2Byyxkz3OGulFYFgfhqAOM1ZDCuS3fZrTX9Fsp%2B0KS9999kJCCLLG9%2FF167Tr%2BufKMkIeLYoYvsvbQT2YIh3xcesR1Ifg7n0SBYLtS22Upp6UHr8uOO1ELie4wY6LgI%2B4andB%2FHa5sJcp%2Bv35fxK3SDnkJvw7zjhfCDx7tA2TwbjIScta3I3eIqJ4tgKiCX53%2BNFaMQSpRvb8iFEpMIat9MPCB5lOtSqX26O6tkqub%2FZOpI7RLie0ldL7F%2BDyFdKY7VerP%2F83WBSYsccYoAGNK1XHfu1v%2F%2B%2FTXHVjB5g36rZk2MKL5KVCRIw3yW%2B05o1Kz4eAc8pBQNhTCXA2ivmhfX8UkviRvxPHFv1TKdNrszdgtlpZ1g0A5GjryJfiizHgaNxoC9IdzW0fRZn15eRCISTijDk1RawBQyRiBk1qQI4DTTck%2FecRqRFYCn7EBw7IjkTZObXDHXMbb4grJ4%2B9zWPgWD%2F%2B%2FjJOjnhELowt8i8xAY6pgEa%2FGZS5c8pjMJwsP7733KYFfmHg3O9hpjinVqWUwiXXEvIhJqZUnOLbXGJzAkvfY15lPtXZ5%2F%2B3YzqT1qDjetNGSH0ZSNJWpYbjasUT1tSEVZ6UUb%2FghV4LwGVBV6Pgys7CvXHWZW5QpIT2049djWYu2JQUCQqhlf0IErfVj1ak4LJUKkFKunUunWzCp6KKcDa4zZkiV7sZrDiQ3Wv0D5zKXcz31OU&X-Amz-Signature=c9a9b7d34b39490f67babed6cd7d593d13ec1b266aecf8eabfff53c0e910bd16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHOXMAFU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9%2Bsdqz9r1Tw6jNTsRvDFPW3kZ5pelxDo0HQLzQ9YnJAiBeeU9EXDQnSMd%2F8VGfRLzzZpYqV2KOH6rZFuNryCbeICr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMssIdZtGDXx1lIB8dKtwDxZNfGk7GyHlysCm6HUk%2Bb8ff%2BtNFgFoq3IG0mUSbxNDKkw1QelmZ62aAXhUhjej0mUQ1VVxib%2FMWMMWtjo2U%2FRiWF4h8uF%2BfKsx38Pdj9VTmNs15lf8RmxLCyGGqmE%2B4bxhLjwdU7S0OnH2438Vfq%2Byyxkz3OGulFYFgfhqAOM1ZDCuS3fZrTX9Fsp%2B0KS9999kJCCLLG9%2FF167Tr%2BufKMkIeLYoYvsvbQT2YIh3xcesR1Ifg7n0SBYLtS22Upp6UHr8uOO1ELie4wY6LgI%2B4andB%2FHa5sJcp%2Bv35fxK3SDnkJvw7zjhfCDx7tA2TwbjIScta3I3eIqJ4tgKiCX53%2BNFaMQSpRvb8iFEpMIat9MPCB5lOtSqX26O6tkqub%2FZOpI7RLie0ldL7F%2BDyFdKY7VerP%2F83WBSYsccYoAGNK1XHfu1v%2F%2B%2FTXHVjB5g36rZk2MKL5KVCRIw3yW%2B05o1Kz4eAc8pBQNhTCXA2ivmhfX8UkviRvxPHFv1TKdNrszdgtlpZ1g0A5GjryJfiizHgaNxoC9IdzW0fRZn15eRCISTijDk1RawBQyRiBk1qQI4DTTck%2FecRqRFYCn7EBw7IjkTZObXDHXMbb4grJ4%2B9zWPgWD%2F%2B%2FjJOjnhELowt8i8xAY6pgEa%2FGZS5c8pjMJwsP7733KYFfmHg3O9hpjinVqWUwiXXEvIhJqZUnOLbXGJzAkvfY15lPtXZ5%2F%2B3YzqT1qDjetNGSH0ZSNJWpYbjasUT1tSEVZ6UUb%2FghV4LwGVBV6Pgys7CvXHWZW5QpIT2049djWYu2JQUCQqhlf0IErfVj1ak4LJUKkFKunUunWzCp6KKcDa4zZkiV7sZrDiQ3Wv0D5zKXcz31OU&X-Amz-Signature=1f166f6c740ba3c0d5037eb5368a98b9d6b85faf5982931ddba243a8ddbccc20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

# Tuning Nav2 settings

Depending on what your final robot looks like you should change the `footprint` and `robot_radius` parameter. These were the green outline in rviz around the robot and are used to calculate the path finding on the 2D map.

[Guide for footprint tuning](https://docs.nav2.org/setup_guides/algorithm/select_algorithm.html)

All the other settings in the `nav2_params.yaml` also need to be tuned because the `nav2_bringup_node` launches multiple nodes each with many parameters. Here is a general [guide from the official nav2 docs](https://docs.nav2.org/setup_guides/algorithm/select_algorithm.html) that goes over what each node does and how to tune them. However, the next guide will go a little more indepth on how to better turn the `nav2_param.yaml` file.
