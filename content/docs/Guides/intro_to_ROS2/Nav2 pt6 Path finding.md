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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A5HH7SG%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDUQRKS3k8EF47YmYdEW0BDDRCb2fLLj4tYIE3y1QjRRgIhAMrCI5NCtLs5YPuoU36BpohIP8xWBHtHdkEUyXXYKLZ1KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO%2FsmHrmZA2B58N24q3AO%2BxbxfjHj3tBhFn6RIjNCDv2GIlPJGrMxcO9%2BxwFDfhXfMEndULW%2BSznU5Lr53qrQZpKscqLEKP9p5wbxnuBAaghHGcnS%2FQg70jluctjsV3IaFurrYAaay12d2UyrnzO%2B5Fh125LVF5g6qsitvfCa2SOe9SKz89a66oyOr4Mt5ppZHDwEAprA2X2fS3mUt6AgqQUq1NaAxP7%2BlTZUIzeduv9ns4CJkwoBw4%2FHE%2FL29cLmM2uJeVCt2YRAY%2FUhi9uCjvwk58UXGDUzcwEASiKOjzKCUdh6IDCvGB1zXeBcFKSZSZohBDXsutezDCz1rdkfdYtjeL7PdEKqyKly9uSwzLIEW9Oi4XpIq73z3mehufEs7mma77R33wmzgHy%2BkfHlej10eGiqe%2BGnznDqDxb9e2ZYMKmYBtdrdJAvuDinh2kymIR2AqFZ67W5Ar77x4tEp9IlsKAUCkr%2B8s5an5vv1Ym5JASZJLsvtLvzAIXzFLIjs%2BAe1VOiNknW15d9S6hXAyTfQogFGWj65K00vmiOSjF7T3qTZKLEL5gBG1djS7SCgeEWDNhoH5E8q%2F%2BGKNPll2GB2S2k%2B75bWdmuIvqIuwjgvRQ%2Bvvz83k1IPiP90PZFcuJIiprikqqQNUzCgs%2FrPBjqkAQoHh9tBQHirYH5NdSNB4M082GkiyUbLFcSK%2BIsRm%2BgP2blK56pOB0o2%2F33agBOIgxgReVE%2BAkJno8u9Ezh%2Fga9hpvxQnGMdKQ35m3TCQN2NnPL276xSASQx3nAmL2XL4mgyjPz60fpQRwr9u9oz9RMNqcQraMMEG5DZQYnQIDZ%2F3U66FBBDiy2OAVYHe6nZlUEJN8JC6KB7paud4eD9GXjNnbEA&X-Amz-Signature=693e6f3093e969fe1c2d839b6471c34e00040a09131c25b8d2d34bb826f65e86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A5HH7SG%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDUQRKS3k8EF47YmYdEW0BDDRCb2fLLj4tYIE3y1QjRRgIhAMrCI5NCtLs5YPuoU36BpohIP8xWBHtHdkEUyXXYKLZ1KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO%2FsmHrmZA2B58N24q3AO%2BxbxfjHj3tBhFn6RIjNCDv2GIlPJGrMxcO9%2BxwFDfhXfMEndULW%2BSznU5Lr53qrQZpKscqLEKP9p5wbxnuBAaghHGcnS%2FQg70jluctjsV3IaFurrYAaay12d2UyrnzO%2B5Fh125LVF5g6qsitvfCa2SOe9SKz89a66oyOr4Mt5ppZHDwEAprA2X2fS3mUt6AgqQUq1NaAxP7%2BlTZUIzeduv9ns4CJkwoBw4%2FHE%2FL29cLmM2uJeVCt2YRAY%2FUhi9uCjvwk58UXGDUzcwEASiKOjzKCUdh6IDCvGB1zXeBcFKSZSZohBDXsutezDCz1rdkfdYtjeL7PdEKqyKly9uSwzLIEW9Oi4XpIq73z3mehufEs7mma77R33wmzgHy%2BkfHlej10eGiqe%2BGnznDqDxb9e2ZYMKmYBtdrdJAvuDinh2kymIR2AqFZ67W5Ar77x4tEp9IlsKAUCkr%2B8s5an5vv1Ym5JASZJLsvtLvzAIXzFLIjs%2BAe1VOiNknW15d9S6hXAyTfQogFGWj65K00vmiOSjF7T3qTZKLEL5gBG1djS7SCgeEWDNhoH5E8q%2F%2BGKNPll2GB2S2k%2B75bWdmuIvqIuwjgvRQ%2Bvvz83k1IPiP90PZFcuJIiprikqqQNUzCgs%2FrPBjqkAQoHh9tBQHirYH5NdSNB4M082GkiyUbLFcSK%2BIsRm%2BgP2blK56pOB0o2%2F33agBOIgxgReVE%2BAkJno8u9Ezh%2Fga9hpvxQnGMdKQ35m3TCQN2NnPL276xSASQx3nAmL2XL4mgyjPz60fpQRwr9u9oz9RMNqcQraMMEG5DZQYnQIDZ%2F3U66FBBDiy2OAVYHe6nZlUEJN8JC6KB7paud4eD9GXjNnbEA&X-Amz-Signature=03acb22de9b912aebeac8495729c89ee382f4059eb932007c6c4acaeab2346dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A5HH7SG%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDUQRKS3k8EF47YmYdEW0BDDRCb2fLLj4tYIE3y1QjRRgIhAMrCI5NCtLs5YPuoU36BpohIP8xWBHtHdkEUyXXYKLZ1KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO%2FsmHrmZA2B58N24q3AO%2BxbxfjHj3tBhFn6RIjNCDv2GIlPJGrMxcO9%2BxwFDfhXfMEndULW%2BSznU5Lr53qrQZpKscqLEKP9p5wbxnuBAaghHGcnS%2FQg70jluctjsV3IaFurrYAaay12d2UyrnzO%2B5Fh125LVF5g6qsitvfCa2SOe9SKz89a66oyOr4Mt5ppZHDwEAprA2X2fS3mUt6AgqQUq1NaAxP7%2BlTZUIzeduv9ns4CJkwoBw4%2FHE%2FL29cLmM2uJeVCt2YRAY%2FUhi9uCjvwk58UXGDUzcwEASiKOjzKCUdh6IDCvGB1zXeBcFKSZSZohBDXsutezDCz1rdkfdYtjeL7PdEKqyKly9uSwzLIEW9Oi4XpIq73z3mehufEs7mma77R33wmzgHy%2BkfHlej10eGiqe%2BGnznDqDxb9e2ZYMKmYBtdrdJAvuDinh2kymIR2AqFZ67W5Ar77x4tEp9IlsKAUCkr%2B8s5an5vv1Ym5JASZJLsvtLvzAIXzFLIjs%2BAe1VOiNknW15d9S6hXAyTfQogFGWj65K00vmiOSjF7T3qTZKLEL5gBG1djS7SCgeEWDNhoH5E8q%2F%2BGKNPll2GB2S2k%2B75bWdmuIvqIuwjgvRQ%2Bvvz83k1IPiP90PZFcuJIiprikqqQNUzCgs%2FrPBjqkAQoHh9tBQHirYH5NdSNB4M082GkiyUbLFcSK%2BIsRm%2BgP2blK56pOB0o2%2F33agBOIgxgReVE%2BAkJno8u9Ezh%2Fga9hpvxQnGMdKQ35m3TCQN2NnPL276xSASQx3nAmL2XL4mgyjPz60fpQRwr9u9oz9RMNqcQraMMEG5DZQYnQIDZ%2F3U66FBBDiy2OAVYHe6nZlUEJN8JC6KB7paud4eD9GXjNnbEA&X-Amz-Signature=6fb7186d280d498cba44a254df8d274db93f37cf6ad806c89ccf83300b907406&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A5HH7SG%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDUQRKS3k8EF47YmYdEW0BDDRCb2fLLj4tYIE3y1QjRRgIhAMrCI5NCtLs5YPuoU36BpohIP8xWBHtHdkEUyXXYKLZ1KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO%2FsmHrmZA2B58N24q3AO%2BxbxfjHj3tBhFn6RIjNCDv2GIlPJGrMxcO9%2BxwFDfhXfMEndULW%2BSznU5Lr53qrQZpKscqLEKP9p5wbxnuBAaghHGcnS%2FQg70jluctjsV3IaFurrYAaay12d2UyrnzO%2B5Fh125LVF5g6qsitvfCa2SOe9SKz89a66oyOr4Mt5ppZHDwEAprA2X2fS3mUt6AgqQUq1NaAxP7%2BlTZUIzeduv9ns4CJkwoBw4%2FHE%2FL29cLmM2uJeVCt2YRAY%2FUhi9uCjvwk58UXGDUzcwEASiKOjzKCUdh6IDCvGB1zXeBcFKSZSZohBDXsutezDCz1rdkfdYtjeL7PdEKqyKly9uSwzLIEW9Oi4XpIq73z3mehufEs7mma77R33wmzgHy%2BkfHlej10eGiqe%2BGnznDqDxb9e2ZYMKmYBtdrdJAvuDinh2kymIR2AqFZ67W5Ar77x4tEp9IlsKAUCkr%2B8s5an5vv1Ym5JASZJLsvtLvzAIXzFLIjs%2BAe1VOiNknW15d9S6hXAyTfQogFGWj65K00vmiOSjF7T3qTZKLEL5gBG1djS7SCgeEWDNhoH5E8q%2F%2BGKNPll2GB2S2k%2B75bWdmuIvqIuwjgvRQ%2Bvvz83k1IPiP90PZFcuJIiprikqqQNUzCgs%2FrPBjqkAQoHh9tBQHirYH5NdSNB4M082GkiyUbLFcSK%2BIsRm%2BgP2blK56pOB0o2%2F33agBOIgxgReVE%2BAkJno8u9Ezh%2Fga9hpvxQnGMdKQ35m3TCQN2NnPL276xSASQx3nAmL2XL4mgyjPz60fpQRwr9u9oz9RMNqcQraMMEG5DZQYnQIDZ%2F3U66FBBDiy2OAVYHe6nZlUEJN8JC6KB7paud4eD9GXjNnbEA&X-Amz-Signature=35bf4af1782377577904e00e36d17ee2d1b4befa06afb31d91fa3648ab04c3be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A5HH7SG%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDUQRKS3k8EF47YmYdEW0BDDRCb2fLLj4tYIE3y1QjRRgIhAMrCI5NCtLs5YPuoU36BpohIP8xWBHtHdkEUyXXYKLZ1KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO%2FsmHrmZA2B58N24q3AO%2BxbxfjHj3tBhFn6RIjNCDv2GIlPJGrMxcO9%2BxwFDfhXfMEndULW%2BSznU5Lr53qrQZpKscqLEKP9p5wbxnuBAaghHGcnS%2FQg70jluctjsV3IaFurrYAaay12d2UyrnzO%2B5Fh125LVF5g6qsitvfCa2SOe9SKz89a66oyOr4Mt5ppZHDwEAprA2X2fS3mUt6AgqQUq1NaAxP7%2BlTZUIzeduv9ns4CJkwoBw4%2FHE%2FL29cLmM2uJeVCt2YRAY%2FUhi9uCjvwk58UXGDUzcwEASiKOjzKCUdh6IDCvGB1zXeBcFKSZSZohBDXsutezDCz1rdkfdYtjeL7PdEKqyKly9uSwzLIEW9Oi4XpIq73z3mehufEs7mma77R33wmzgHy%2BkfHlej10eGiqe%2BGnznDqDxb9e2ZYMKmYBtdrdJAvuDinh2kymIR2AqFZ67W5Ar77x4tEp9IlsKAUCkr%2B8s5an5vv1Ym5JASZJLsvtLvzAIXzFLIjs%2BAe1VOiNknW15d9S6hXAyTfQogFGWj65K00vmiOSjF7T3qTZKLEL5gBG1djS7SCgeEWDNhoH5E8q%2F%2BGKNPll2GB2S2k%2B75bWdmuIvqIuwjgvRQ%2Bvvz83k1IPiP90PZFcuJIiprikqqQNUzCgs%2FrPBjqkAQoHh9tBQHirYH5NdSNB4M082GkiyUbLFcSK%2BIsRm%2BgP2blK56pOB0o2%2F33agBOIgxgReVE%2BAkJno8u9Ezh%2Fga9hpvxQnGMdKQ35m3TCQN2NnPL276xSASQx3nAmL2XL4mgyjPz60fpQRwr9u9oz9RMNqcQraMMEG5DZQYnQIDZ%2F3U66FBBDiy2OAVYHe6nZlUEJN8JC6KB7paud4eD9GXjNnbEA&X-Amz-Signature=dc65bcd7d03328c564360356d5d2eeb440b156e007e0b889bd0cd3163e8b2653&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A5HH7SG%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDUQRKS3k8EF47YmYdEW0BDDRCb2fLLj4tYIE3y1QjRRgIhAMrCI5NCtLs5YPuoU36BpohIP8xWBHtHdkEUyXXYKLZ1KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO%2FsmHrmZA2B58N24q3AO%2BxbxfjHj3tBhFn6RIjNCDv2GIlPJGrMxcO9%2BxwFDfhXfMEndULW%2BSznU5Lr53qrQZpKscqLEKP9p5wbxnuBAaghHGcnS%2FQg70jluctjsV3IaFurrYAaay12d2UyrnzO%2B5Fh125LVF5g6qsitvfCa2SOe9SKz89a66oyOr4Mt5ppZHDwEAprA2X2fS3mUt6AgqQUq1NaAxP7%2BlTZUIzeduv9ns4CJkwoBw4%2FHE%2FL29cLmM2uJeVCt2YRAY%2FUhi9uCjvwk58UXGDUzcwEASiKOjzKCUdh6IDCvGB1zXeBcFKSZSZohBDXsutezDCz1rdkfdYtjeL7PdEKqyKly9uSwzLIEW9Oi4XpIq73z3mehufEs7mma77R33wmzgHy%2BkfHlej10eGiqe%2BGnznDqDxb9e2ZYMKmYBtdrdJAvuDinh2kymIR2AqFZ67W5Ar77x4tEp9IlsKAUCkr%2B8s5an5vv1Ym5JASZJLsvtLvzAIXzFLIjs%2BAe1VOiNknW15d9S6hXAyTfQogFGWj65K00vmiOSjF7T3qTZKLEL5gBG1djS7SCgeEWDNhoH5E8q%2F%2BGKNPll2GB2S2k%2B75bWdmuIvqIuwjgvRQ%2Bvvz83k1IPiP90PZFcuJIiprikqqQNUzCgs%2FrPBjqkAQoHh9tBQHirYH5NdSNB4M082GkiyUbLFcSK%2BIsRm%2BgP2blK56pOB0o2%2F33agBOIgxgReVE%2BAkJno8u9Ezh%2Fga9hpvxQnGMdKQ35m3TCQN2NnPL276xSASQx3nAmL2XL4mgyjPz60fpQRwr9u9oz9RMNqcQraMMEG5DZQYnQIDZ%2F3U66FBBDiy2OAVYHe6nZlUEJN8JC6KB7paud4eD9GXjNnbEA&X-Amz-Signature=2e64a1846443278a16dedc839652f3006b0ac43fc57fa595f85c061a35aefcc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A5HH7SG%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDUQRKS3k8EF47YmYdEW0BDDRCb2fLLj4tYIE3y1QjRRgIhAMrCI5NCtLs5YPuoU36BpohIP8xWBHtHdkEUyXXYKLZ1KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO%2FsmHrmZA2B58N24q3AO%2BxbxfjHj3tBhFn6RIjNCDv2GIlPJGrMxcO9%2BxwFDfhXfMEndULW%2BSznU5Lr53qrQZpKscqLEKP9p5wbxnuBAaghHGcnS%2FQg70jluctjsV3IaFurrYAaay12d2UyrnzO%2B5Fh125LVF5g6qsitvfCa2SOe9SKz89a66oyOr4Mt5ppZHDwEAprA2X2fS3mUt6AgqQUq1NaAxP7%2BlTZUIzeduv9ns4CJkwoBw4%2FHE%2FL29cLmM2uJeVCt2YRAY%2FUhi9uCjvwk58UXGDUzcwEASiKOjzKCUdh6IDCvGB1zXeBcFKSZSZohBDXsutezDCz1rdkfdYtjeL7PdEKqyKly9uSwzLIEW9Oi4XpIq73z3mehufEs7mma77R33wmzgHy%2BkfHlej10eGiqe%2BGnznDqDxb9e2ZYMKmYBtdrdJAvuDinh2kymIR2AqFZ67W5Ar77x4tEp9IlsKAUCkr%2B8s5an5vv1Ym5JASZJLsvtLvzAIXzFLIjs%2BAe1VOiNknW15d9S6hXAyTfQogFGWj65K00vmiOSjF7T3qTZKLEL5gBG1djS7SCgeEWDNhoH5E8q%2F%2BGKNPll2GB2S2k%2B75bWdmuIvqIuwjgvRQ%2Bvvz83k1IPiP90PZFcuJIiprikqqQNUzCgs%2FrPBjqkAQoHh9tBQHirYH5NdSNB4M082GkiyUbLFcSK%2BIsRm%2BgP2blK56pOB0o2%2F33agBOIgxgReVE%2BAkJno8u9Ezh%2Fga9hpvxQnGMdKQ35m3TCQN2NnPL276xSASQx3nAmL2XL4mgyjPz60fpQRwr9u9oz9RMNqcQraMMEG5DZQYnQIDZ%2F3U66FBBDiy2OAVYHe6nZlUEJN8JC6KB7paud4eD9GXjNnbEA&X-Amz-Signature=5fce232efda6b9e00b051b59d67d1dcab50e476d4eb0f2cd69ad3bd6dfc6c07f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A5HH7SG%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDUQRKS3k8EF47YmYdEW0BDDRCb2fLLj4tYIE3y1QjRRgIhAMrCI5NCtLs5YPuoU36BpohIP8xWBHtHdkEUyXXYKLZ1KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO%2FsmHrmZA2B58N24q3AO%2BxbxfjHj3tBhFn6RIjNCDv2GIlPJGrMxcO9%2BxwFDfhXfMEndULW%2BSznU5Lr53qrQZpKscqLEKP9p5wbxnuBAaghHGcnS%2FQg70jluctjsV3IaFurrYAaay12d2UyrnzO%2B5Fh125LVF5g6qsitvfCa2SOe9SKz89a66oyOr4Mt5ppZHDwEAprA2X2fS3mUt6AgqQUq1NaAxP7%2BlTZUIzeduv9ns4CJkwoBw4%2FHE%2FL29cLmM2uJeVCt2YRAY%2FUhi9uCjvwk58UXGDUzcwEASiKOjzKCUdh6IDCvGB1zXeBcFKSZSZohBDXsutezDCz1rdkfdYtjeL7PdEKqyKly9uSwzLIEW9Oi4XpIq73z3mehufEs7mma77R33wmzgHy%2BkfHlej10eGiqe%2BGnznDqDxb9e2ZYMKmYBtdrdJAvuDinh2kymIR2AqFZ67W5Ar77x4tEp9IlsKAUCkr%2B8s5an5vv1Ym5JASZJLsvtLvzAIXzFLIjs%2BAe1VOiNknW15d9S6hXAyTfQogFGWj65K00vmiOSjF7T3qTZKLEL5gBG1djS7SCgeEWDNhoH5E8q%2F%2BGKNPll2GB2S2k%2B75bWdmuIvqIuwjgvRQ%2Bvvz83k1IPiP90PZFcuJIiprikqqQNUzCgs%2FrPBjqkAQoHh9tBQHirYH5NdSNB4M082GkiyUbLFcSK%2BIsRm%2BgP2blK56pOB0o2%2F33agBOIgxgReVE%2BAkJno8u9Ezh%2Fga9hpvxQnGMdKQ35m3TCQN2NnPL276xSASQx3nAmL2XL4mgyjPz60fpQRwr9u9oz9RMNqcQraMMEG5DZQYnQIDZ%2F3U66FBBDiy2OAVYHe6nZlUEJN8JC6KB7paud4eD9GXjNnbEA&X-Amz-Signature=66673665e3a9d78f0f8bd36e6bc12dab4e161af41e8d9310da78ba13d8f04e4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A5HH7SG%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDUQRKS3k8EF47YmYdEW0BDDRCb2fLLj4tYIE3y1QjRRgIhAMrCI5NCtLs5YPuoU36BpohIP8xWBHtHdkEUyXXYKLZ1KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO%2FsmHrmZA2B58N24q3AO%2BxbxfjHj3tBhFn6RIjNCDv2GIlPJGrMxcO9%2BxwFDfhXfMEndULW%2BSznU5Lr53qrQZpKscqLEKP9p5wbxnuBAaghHGcnS%2FQg70jluctjsV3IaFurrYAaay12d2UyrnzO%2B5Fh125LVF5g6qsitvfCa2SOe9SKz89a66oyOr4Mt5ppZHDwEAprA2X2fS3mUt6AgqQUq1NaAxP7%2BlTZUIzeduv9ns4CJkwoBw4%2FHE%2FL29cLmM2uJeVCt2YRAY%2FUhi9uCjvwk58UXGDUzcwEASiKOjzKCUdh6IDCvGB1zXeBcFKSZSZohBDXsutezDCz1rdkfdYtjeL7PdEKqyKly9uSwzLIEW9Oi4XpIq73z3mehufEs7mma77R33wmzgHy%2BkfHlej10eGiqe%2BGnznDqDxb9e2ZYMKmYBtdrdJAvuDinh2kymIR2AqFZ67W5Ar77x4tEp9IlsKAUCkr%2B8s5an5vv1Ym5JASZJLsvtLvzAIXzFLIjs%2BAe1VOiNknW15d9S6hXAyTfQogFGWj65K00vmiOSjF7T3qTZKLEL5gBG1djS7SCgeEWDNhoH5E8q%2F%2BGKNPll2GB2S2k%2B75bWdmuIvqIuwjgvRQ%2Bvvz83k1IPiP90PZFcuJIiprikqqQNUzCgs%2FrPBjqkAQoHh9tBQHirYH5NdSNB4M082GkiyUbLFcSK%2BIsRm%2BgP2blK56pOB0o2%2F33agBOIgxgReVE%2BAkJno8u9Ezh%2Fga9hpvxQnGMdKQ35m3TCQN2NnPL276xSASQx3nAmL2XL4mgyjPz60fpQRwr9u9oz9RMNqcQraMMEG5DZQYnQIDZ%2F3U66FBBDiy2OAVYHe6nZlUEJN8JC6KB7paud4eD9GXjNnbEA&X-Amz-Signature=47dfd05a06b3e8c3806df23788a31087aacc10279b06a525b51eb8cefe9be9b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A5HH7SG%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDUQRKS3k8EF47YmYdEW0BDDRCb2fLLj4tYIE3y1QjRRgIhAMrCI5NCtLs5YPuoU36BpohIP8xWBHtHdkEUyXXYKLZ1KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO%2FsmHrmZA2B58N24q3AO%2BxbxfjHj3tBhFn6RIjNCDv2GIlPJGrMxcO9%2BxwFDfhXfMEndULW%2BSznU5Lr53qrQZpKscqLEKP9p5wbxnuBAaghHGcnS%2FQg70jluctjsV3IaFurrYAaay12d2UyrnzO%2B5Fh125LVF5g6qsitvfCa2SOe9SKz89a66oyOr4Mt5ppZHDwEAprA2X2fS3mUt6AgqQUq1NaAxP7%2BlTZUIzeduv9ns4CJkwoBw4%2FHE%2FL29cLmM2uJeVCt2YRAY%2FUhi9uCjvwk58UXGDUzcwEASiKOjzKCUdh6IDCvGB1zXeBcFKSZSZohBDXsutezDCz1rdkfdYtjeL7PdEKqyKly9uSwzLIEW9Oi4XpIq73z3mehufEs7mma77R33wmzgHy%2BkfHlej10eGiqe%2BGnznDqDxb9e2ZYMKmYBtdrdJAvuDinh2kymIR2AqFZ67W5Ar77x4tEp9IlsKAUCkr%2B8s5an5vv1Ym5JASZJLsvtLvzAIXzFLIjs%2BAe1VOiNknW15d9S6hXAyTfQogFGWj65K00vmiOSjF7T3qTZKLEL5gBG1djS7SCgeEWDNhoH5E8q%2F%2BGKNPll2GB2S2k%2B75bWdmuIvqIuwjgvRQ%2Bvvz83k1IPiP90PZFcuJIiprikqqQNUzCgs%2FrPBjqkAQoHh9tBQHirYH5NdSNB4M082GkiyUbLFcSK%2BIsRm%2BgP2blK56pOB0o2%2F33agBOIgxgReVE%2BAkJno8u9Ezh%2Fga9hpvxQnGMdKQ35m3TCQN2NnPL276xSASQx3nAmL2XL4mgyjPz60fpQRwr9u9oz9RMNqcQraMMEG5DZQYnQIDZ%2F3U66FBBDiy2OAVYHe6nZlUEJN8JC6KB7paud4eD9GXjNnbEA&X-Amz-Signature=9e3f1adcca1ff8896db69ba064f4353de5b279c54a5ebbef6b4fc07e3b8f874e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A5HH7SG%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDUQRKS3k8EF47YmYdEW0BDDRCb2fLLj4tYIE3y1QjRRgIhAMrCI5NCtLs5YPuoU36BpohIP8xWBHtHdkEUyXXYKLZ1KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO%2FsmHrmZA2B58N24q3AO%2BxbxfjHj3tBhFn6RIjNCDv2GIlPJGrMxcO9%2BxwFDfhXfMEndULW%2BSznU5Lr53qrQZpKscqLEKP9p5wbxnuBAaghHGcnS%2FQg70jluctjsV3IaFurrYAaay12d2UyrnzO%2B5Fh125LVF5g6qsitvfCa2SOe9SKz89a66oyOr4Mt5ppZHDwEAprA2X2fS3mUt6AgqQUq1NaAxP7%2BlTZUIzeduv9ns4CJkwoBw4%2FHE%2FL29cLmM2uJeVCt2YRAY%2FUhi9uCjvwk58UXGDUzcwEASiKOjzKCUdh6IDCvGB1zXeBcFKSZSZohBDXsutezDCz1rdkfdYtjeL7PdEKqyKly9uSwzLIEW9Oi4XpIq73z3mehufEs7mma77R33wmzgHy%2BkfHlej10eGiqe%2BGnznDqDxb9e2ZYMKmYBtdrdJAvuDinh2kymIR2AqFZ67W5Ar77x4tEp9IlsKAUCkr%2B8s5an5vv1Ym5JASZJLsvtLvzAIXzFLIjs%2BAe1VOiNknW15d9S6hXAyTfQogFGWj65K00vmiOSjF7T3qTZKLEL5gBG1djS7SCgeEWDNhoH5E8q%2F%2BGKNPll2GB2S2k%2B75bWdmuIvqIuwjgvRQ%2Bvvz83k1IPiP90PZFcuJIiprikqqQNUzCgs%2FrPBjqkAQoHh9tBQHirYH5NdSNB4M082GkiyUbLFcSK%2BIsRm%2BgP2blK56pOB0o2%2F33agBOIgxgReVE%2BAkJno8u9Ezh%2Fga9hpvxQnGMdKQ35m3TCQN2NnPL276xSASQx3nAmL2XL4mgyjPz60fpQRwr9u9oz9RMNqcQraMMEG5DZQYnQIDZ%2F3U66FBBDiy2OAVYHe6nZlUEJN8JC6KB7paud4eD9GXjNnbEA&X-Amz-Signature=a84e792eba687c68dc746709412cbfa4020fa95a6effefd59eb894a9b9ebd200&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A5HH7SG%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDUQRKS3k8EF47YmYdEW0BDDRCb2fLLj4tYIE3y1QjRRgIhAMrCI5NCtLs5YPuoU36BpohIP8xWBHtHdkEUyXXYKLZ1KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO%2FsmHrmZA2B58N24q3AO%2BxbxfjHj3tBhFn6RIjNCDv2GIlPJGrMxcO9%2BxwFDfhXfMEndULW%2BSznU5Lr53qrQZpKscqLEKP9p5wbxnuBAaghHGcnS%2FQg70jluctjsV3IaFurrYAaay12d2UyrnzO%2B5Fh125LVF5g6qsitvfCa2SOe9SKz89a66oyOr4Mt5ppZHDwEAprA2X2fS3mUt6AgqQUq1NaAxP7%2BlTZUIzeduv9ns4CJkwoBw4%2FHE%2FL29cLmM2uJeVCt2YRAY%2FUhi9uCjvwk58UXGDUzcwEASiKOjzKCUdh6IDCvGB1zXeBcFKSZSZohBDXsutezDCz1rdkfdYtjeL7PdEKqyKly9uSwzLIEW9Oi4XpIq73z3mehufEs7mma77R33wmzgHy%2BkfHlej10eGiqe%2BGnznDqDxb9e2ZYMKmYBtdrdJAvuDinh2kymIR2AqFZ67W5Ar77x4tEp9IlsKAUCkr%2B8s5an5vv1Ym5JASZJLsvtLvzAIXzFLIjs%2BAe1VOiNknW15d9S6hXAyTfQogFGWj65K00vmiOSjF7T3qTZKLEL5gBG1djS7SCgeEWDNhoH5E8q%2F%2BGKNPll2GB2S2k%2B75bWdmuIvqIuwjgvRQ%2Bvvz83k1IPiP90PZFcuJIiprikqqQNUzCgs%2FrPBjqkAQoHh9tBQHirYH5NdSNB4M082GkiyUbLFcSK%2BIsRm%2BgP2blK56pOB0o2%2F33agBOIgxgReVE%2BAkJno8u9Ezh%2Fga9hpvxQnGMdKQ35m3TCQN2NnPL276xSASQx3nAmL2XL4mgyjPz60fpQRwr9u9oz9RMNqcQraMMEG5DZQYnQIDZ%2F3U66FBBDiy2OAVYHe6nZlUEJN8JC6KB7paud4eD9GXjNnbEA&X-Amz-Signature=ad179a2c186a3a31075de985b9d2e2db7c51850d3ccbc759ea9cefacefa22b8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A5HH7SG%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDUQRKS3k8EF47YmYdEW0BDDRCb2fLLj4tYIE3y1QjRRgIhAMrCI5NCtLs5YPuoU36BpohIP8xWBHtHdkEUyXXYKLZ1KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO%2FsmHrmZA2B58N24q3AO%2BxbxfjHj3tBhFn6RIjNCDv2GIlPJGrMxcO9%2BxwFDfhXfMEndULW%2BSznU5Lr53qrQZpKscqLEKP9p5wbxnuBAaghHGcnS%2FQg70jluctjsV3IaFurrYAaay12d2UyrnzO%2B5Fh125LVF5g6qsitvfCa2SOe9SKz89a66oyOr4Mt5ppZHDwEAprA2X2fS3mUt6AgqQUq1NaAxP7%2BlTZUIzeduv9ns4CJkwoBw4%2FHE%2FL29cLmM2uJeVCt2YRAY%2FUhi9uCjvwk58UXGDUzcwEASiKOjzKCUdh6IDCvGB1zXeBcFKSZSZohBDXsutezDCz1rdkfdYtjeL7PdEKqyKly9uSwzLIEW9Oi4XpIq73z3mehufEs7mma77R33wmzgHy%2BkfHlej10eGiqe%2BGnznDqDxb9e2ZYMKmYBtdrdJAvuDinh2kymIR2AqFZ67W5Ar77x4tEp9IlsKAUCkr%2B8s5an5vv1Ym5JASZJLsvtLvzAIXzFLIjs%2BAe1VOiNknW15d9S6hXAyTfQogFGWj65K00vmiOSjF7T3qTZKLEL5gBG1djS7SCgeEWDNhoH5E8q%2F%2BGKNPll2GB2S2k%2B75bWdmuIvqIuwjgvRQ%2Bvvz83k1IPiP90PZFcuJIiprikqqQNUzCgs%2FrPBjqkAQoHh9tBQHirYH5NdSNB4M082GkiyUbLFcSK%2BIsRm%2BgP2blK56pOB0o2%2F33agBOIgxgReVE%2BAkJno8u9Ezh%2Fga9hpvxQnGMdKQ35m3TCQN2NnPL276xSASQx3nAmL2XL4mgyjPz60fpQRwr9u9oz9RMNqcQraMMEG5DZQYnQIDZ%2F3U66FBBDiy2OAVYHe6nZlUEJN8JC6KB7paud4eD9GXjNnbEA&X-Amz-Signature=1a20e6da9ca243089ebc31132facd9e9779027018c36159bd2f464a6792f3a38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
