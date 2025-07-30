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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDTVRU3H%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FoG5w7aRUbWWwlMkIRF0FZorvLlTkmMPXLS60QaRCvAiB%2FpZ2gWjb21xHn4y71lV1ODXUZGQiS0Ri%2FnqNK1KfavCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPPlX9Ks1tQvFZiEPKtwDBPDJ8IZS9hBLW83PhAkFC4kygvAqM93RLRn%2BTltBVnjxVARa147j10frbI6Kxrwr9awmHUegA2lVDR3ylc%2Ftrbj8WlRqKkaFstYrQ%2FwXuhffT9WACVlKu5dsNvN%2FQ%2FiDsmbdk8ykieHvGuCwn%2B0cCsf9jQ036f6Qy6Z4mmvV4wmYZNlM0qfr%2BBQbQj8k5FiX%2FUZLSxwfGcKPWsDxfRQ6yaxM0sKUeLDuyd%2FqySKjhf7LFYPPGi8PsJHTZVd00o%2B9y%2F9R1kOs8%2Fw4QDwl6g7qEhf2A%2BxOxQS01JA%2FIuBx7N3lflk85HIe%2BF9LbNN%2B%2FNcwHfsVCSIIS4cr4Y2hkuEAtJ2gtsOWc7rFNP9sWQd7mo523ko6MXkkpiWxsxpTxqxhhp9FGmGKVwGaTjGMKOFAkqA2swiqjbXAZh8Z3uCblLqyoZbLpHAIwkdQ36zoPHAZXSqjTR1W%2BoRjewoEypsrmBHS8MuSm7%2Bh2477acTn%2B0bqkyfCxGqrPqvu2YZplol4Jzz5Q%2B%2F8YFOYcfLDQgaVIQMatyqfzCw0QlqnmPTGMq4EwqD48lpYqqX%2FOTbqt6krJZaNSMtWEv4UsE6JbgW195UXd463MXrudZKmVg4SC17VKGZ1iVMj0nZx%2B6QwsMCnxAY6pgEjap5jDnvNvvpse1HrKRKeuEUgwE8W9FLdgRBo0PRqOWnucD9xAbnxVu5on8EKT2A42LDeh2Uu%2BDCpsIwErLk0OJex%2FXyJRJIYs5W%2Be2G2Lx4rHpPS%2FSrSAWuL9bw8vxAXGgnLRJwQUHZO0cqWUE1PEiRZ8hYCdfn%2BbxZS%2BXKqf%2FsX0IBbwwBM%2BjDuWefLloiEN%2FceU%2B4l2wk9c75FxnApTdLj4Uxw&X-Amz-Signature=7c8d0ccc6efcc0494e6d454a359ea1d62f4d4434547649be0282b381d9f76597&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDTVRU3H%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FoG5w7aRUbWWwlMkIRF0FZorvLlTkmMPXLS60QaRCvAiB%2FpZ2gWjb21xHn4y71lV1ODXUZGQiS0Ri%2FnqNK1KfavCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPPlX9Ks1tQvFZiEPKtwDBPDJ8IZS9hBLW83PhAkFC4kygvAqM93RLRn%2BTltBVnjxVARa147j10frbI6Kxrwr9awmHUegA2lVDR3ylc%2Ftrbj8WlRqKkaFstYrQ%2FwXuhffT9WACVlKu5dsNvN%2FQ%2FiDsmbdk8ykieHvGuCwn%2B0cCsf9jQ036f6Qy6Z4mmvV4wmYZNlM0qfr%2BBQbQj8k5FiX%2FUZLSxwfGcKPWsDxfRQ6yaxM0sKUeLDuyd%2FqySKjhf7LFYPPGi8PsJHTZVd00o%2B9y%2F9R1kOs8%2Fw4QDwl6g7qEhf2A%2BxOxQS01JA%2FIuBx7N3lflk85HIe%2BF9LbNN%2B%2FNcwHfsVCSIIS4cr4Y2hkuEAtJ2gtsOWc7rFNP9sWQd7mo523ko6MXkkpiWxsxpTxqxhhp9FGmGKVwGaTjGMKOFAkqA2swiqjbXAZh8Z3uCblLqyoZbLpHAIwkdQ36zoPHAZXSqjTR1W%2BoRjewoEypsrmBHS8MuSm7%2Bh2477acTn%2B0bqkyfCxGqrPqvu2YZplol4Jzz5Q%2B%2F8YFOYcfLDQgaVIQMatyqfzCw0QlqnmPTGMq4EwqD48lpYqqX%2FOTbqt6krJZaNSMtWEv4UsE6JbgW195UXd463MXrudZKmVg4SC17VKGZ1iVMj0nZx%2B6QwsMCnxAY6pgEjap5jDnvNvvpse1HrKRKeuEUgwE8W9FLdgRBo0PRqOWnucD9xAbnxVu5on8EKT2A42LDeh2Uu%2BDCpsIwErLk0OJex%2FXyJRJIYs5W%2Be2G2Lx4rHpPS%2FSrSAWuL9bw8vxAXGgnLRJwQUHZO0cqWUE1PEiRZ8hYCdfn%2BbxZS%2BXKqf%2FsX0IBbwwBM%2BjDuWefLloiEN%2FceU%2B4l2wk9c75FxnApTdLj4Uxw&X-Amz-Signature=63e15686cc34ce8a169d58e1fe9bbd19813b13c3c53477c74e2905b048132019&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDTVRU3H%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FoG5w7aRUbWWwlMkIRF0FZorvLlTkmMPXLS60QaRCvAiB%2FpZ2gWjb21xHn4y71lV1ODXUZGQiS0Ri%2FnqNK1KfavCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPPlX9Ks1tQvFZiEPKtwDBPDJ8IZS9hBLW83PhAkFC4kygvAqM93RLRn%2BTltBVnjxVARa147j10frbI6Kxrwr9awmHUegA2lVDR3ylc%2Ftrbj8WlRqKkaFstYrQ%2FwXuhffT9WACVlKu5dsNvN%2FQ%2FiDsmbdk8ykieHvGuCwn%2B0cCsf9jQ036f6Qy6Z4mmvV4wmYZNlM0qfr%2BBQbQj8k5FiX%2FUZLSxwfGcKPWsDxfRQ6yaxM0sKUeLDuyd%2FqySKjhf7LFYPPGi8PsJHTZVd00o%2B9y%2F9R1kOs8%2Fw4QDwl6g7qEhf2A%2BxOxQS01JA%2FIuBx7N3lflk85HIe%2BF9LbNN%2B%2FNcwHfsVCSIIS4cr4Y2hkuEAtJ2gtsOWc7rFNP9sWQd7mo523ko6MXkkpiWxsxpTxqxhhp9FGmGKVwGaTjGMKOFAkqA2swiqjbXAZh8Z3uCblLqyoZbLpHAIwkdQ36zoPHAZXSqjTR1W%2BoRjewoEypsrmBHS8MuSm7%2Bh2477acTn%2B0bqkyfCxGqrPqvu2YZplol4Jzz5Q%2B%2F8YFOYcfLDQgaVIQMatyqfzCw0QlqnmPTGMq4EwqD48lpYqqX%2FOTbqt6krJZaNSMtWEv4UsE6JbgW195UXd463MXrudZKmVg4SC17VKGZ1iVMj0nZx%2B6QwsMCnxAY6pgEjap5jDnvNvvpse1HrKRKeuEUgwE8W9FLdgRBo0PRqOWnucD9xAbnxVu5on8EKT2A42LDeh2Uu%2BDCpsIwErLk0OJex%2FXyJRJIYs5W%2Be2G2Lx4rHpPS%2FSrSAWuL9bw8vxAXGgnLRJwQUHZO0cqWUE1PEiRZ8hYCdfn%2BbxZS%2BXKqf%2FsX0IBbwwBM%2BjDuWefLloiEN%2FceU%2B4l2wk9c75FxnApTdLj4Uxw&X-Amz-Signature=8ee847c0778015439fd70ad6647a2b38523e8c7bc6b22de435745fb1fbb751d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDTVRU3H%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FoG5w7aRUbWWwlMkIRF0FZorvLlTkmMPXLS60QaRCvAiB%2FpZ2gWjb21xHn4y71lV1ODXUZGQiS0Ri%2FnqNK1KfavCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPPlX9Ks1tQvFZiEPKtwDBPDJ8IZS9hBLW83PhAkFC4kygvAqM93RLRn%2BTltBVnjxVARa147j10frbI6Kxrwr9awmHUegA2lVDR3ylc%2Ftrbj8WlRqKkaFstYrQ%2FwXuhffT9WACVlKu5dsNvN%2FQ%2FiDsmbdk8ykieHvGuCwn%2B0cCsf9jQ036f6Qy6Z4mmvV4wmYZNlM0qfr%2BBQbQj8k5FiX%2FUZLSxwfGcKPWsDxfRQ6yaxM0sKUeLDuyd%2FqySKjhf7LFYPPGi8PsJHTZVd00o%2B9y%2F9R1kOs8%2Fw4QDwl6g7qEhf2A%2BxOxQS01JA%2FIuBx7N3lflk85HIe%2BF9LbNN%2B%2FNcwHfsVCSIIS4cr4Y2hkuEAtJ2gtsOWc7rFNP9sWQd7mo523ko6MXkkpiWxsxpTxqxhhp9FGmGKVwGaTjGMKOFAkqA2swiqjbXAZh8Z3uCblLqyoZbLpHAIwkdQ36zoPHAZXSqjTR1W%2BoRjewoEypsrmBHS8MuSm7%2Bh2477acTn%2B0bqkyfCxGqrPqvu2YZplol4Jzz5Q%2B%2F8YFOYcfLDQgaVIQMatyqfzCw0QlqnmPTGMq4EwqD48lpYqqX%2FOTbqt6krJZaNSMtWEv4UsE6JbgW195UXd463MXrudZKmVg4SC17VKGZ1iVMj0nZx%2B6QwsMCnxAY6pgEjap5jDnvNvvpse1HrKRKeuEUgwE8W9FLdgRBo0PRqOWnucD9xAbnxVu5on8EKT2A42LDeh2Uu%2BDCpsIwErLk0OJex%2FXyJRJIYs5W%2Be2G2Lx4rHpPS%2FSrSAWuL9bw8vxAXGgnLRJwQUHZO0cqWUE1PEiRZ8hYCdfn%2BbxZS%2BXKqf%2FsX0IBbwwBM%2BjDuWefLloiEN%2FceU%2B4l2wk9c75FxnApTdLj4Uxw&X-Amz-Signature=6ee0affbd3942006a440fe068a0b3abb67b7326b301578c050b5b971423fc589&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDTVRU3H%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FoG5w7aRUbWWwlMkIRF0FZorvLlTkmMPXLS60QaRCvAiB%2FpZ2gWjb21xHn4y71lV1ODXUZGQiS0Ri%2FnqNK1KfavCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPPlX9Ks1tQvFZiEPKtwDBPDJ8IZS9hBLW83PhAkFC4kygvAqM93RLRn%2BTltBVnjxVARa147j10frbI6Kxrwr9awmHUegA2lVDR3ylc%2Ftrbj8WlRqKkaFstYrQ%2FwXuhffT9WACVlKu5dsNvN%2FQ%2FiDsmbdk8ykieHvGuCwn%2B0cCsf9jQ036f6Qy6Z4mmvV4wmYZNlM0qfr%2BBQbQj8k5FiX%2FUZLSxwfGcKPWsDxfRQ6yaxM0sKUeLDuyd%2FqySKjhf7LFYPPGi8PsJHTZVd00o%2B9y%2F9R1kOs8%2Fw4QDwl6g7qEhf2A%2BxOxQS01JA%2FIuBx7N3lflk85HIe%2BF9LbNN%2B%2FNcwHfsVCSIIS4cr4Y2hkuEAtJ2gtsOWc7rFNP9sWQd7mo523ko6MXkkpiWxsxpTxqxhhp9FGmGKVwGaTjGMKOFAkqA2swiqjbXAZh8Z3uCblLqyoZbLpHAIwkdQ36zoPHAZXSqjTR1W%2BoRjewoEypsrmBHS8MuSm7%2Bh2477acTn%2B0bqkyfCxGqrPqvu2YZplol4Jzz5Q%2B%2F8YFOYcfLDQgaVIQMatyqfzCw0QlqnmPTGMq4EwqD48lpYqqX%2FOTbqt6krJZaNSMtWEv4UsE6JbgW195UXd463MXrudZKmVg4SC17VKGZ1iVMj0nZx%2B6QwsMCnxAY6pgEjap5jDnvNvvpse1HrKRKeuEUgwE8W9FLdgRBo0PRqOWnucD9xAbnxVu5on8EKT2A42LDeh2Uu%2BDCpsIwErLk0OJex%2FXyJRJIYs5W%2Be2G2Lx4rHpPS%2FSrSAWuL9bw8vxAXGgnLRJwQUHZO0cqWUE1PEiRZ8hYCdfn%2BbxZS%2BXKqf%2FsX0IBbwwBM%2BjDuWefLloiEN%2FceU%2B4l2wk9c75FxnApTdLj4Uxw&X-Amz-Signature=384aa80812624cd571621bee2b80c946ea645b0f911b848e9272e0d4461ebc70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDTVRU3H%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FoG5w7aRUbWWwlMkIRF0FZorvLlTkmMPXLS60QaRCvAiB%2FpZ2gWjb21xHn4y71lV1ODXUZGQiS0Ri%2FnqNK1KfavCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPPlX9Ks1tQvFZiEPKtwDBPDJ8IZS9hBLW83PhAkFC4kygvAqM93RLRn%2BTltBVnjxVARa147j10frbI6Kxrwr9awmHUegA2lVDR3ylc%2Ftrbj8WlRqKkaFstYrQ%2FwXuhffT9WACVlKu5dsNvN%2FQ%2FiDsmbdk8ykieHvGuCwn%2B0cCsf9jQ036f6Qy6Z4mmvV4wmYZNlM0qfr%2BBQbQj8k5FiX%2FUZLSxwfGcKPWsDxfRQ6yaxM0sKUeLDuyd%2FqySKjhf7LFYPPGi8PsJHTZVd00o%2B9y%2F9R1kOs8%2Fw4QDwl6g7qEhf2A%2BxOxQS01JA%2FIuBx7N3lflk85HIe%2BF9LbNN%2B%2FNcwHfsVCSIIS4cr4Y2hkuEAtJ2gtsOWc7rFNP9sWQd7mo523ko6MXkkpiWxsxpTxqxhhp9FGmGKVwGaTjGMKOFAkqA2swiqjbXAZh8Z3uCblLqyoZbLpHAIwkdQ36zoPHAZXSqjTR1W%2BoRjewoEypsrmBHS8MuSm7%2Bh2477acTn%2B0bqkyfCxGqrPqvu2YZplol4Jzz5Q%2B%2F8YFOYcfLDQgaVIQMatyqfzCw0QlqnmPTGMq4EwqD48lpYqqX%2FOTbqt6krJZaNSMtWEv4UsE6JbgW195UXd463MXrudZKmVg4SC17VKGZ1iVMj0nZx%2B6QwsMCnxAY6pgEjap5jDnvNvvpse1HrKRKeuEUgwE8W9FLdgRBo0PRqOWnucD9xAbnxVu5on8EKT2A42LDeh2Uu%2BDCpsIwErLk0OJex%2FXyJRJIYs5W%2Be2G2Lx4rHpPS%2FSrSAWuL9bw8vxAXGgnLRJwQUHZO0cqWUE1PEiRZ8hYCdfn%2BbxZS%2BXKqf%2FsX0IBbwwBM%2BjDuWefLloiEN%2FceU%2B4l2wk9c75FxnApTdLj4Uxw&X-Amz-Signature=c732c5732ee7c0e906900cec98c076ff725a9f7caa8fe2a49ebf36a64e1e43a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDTVRU3H%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FoG5w7aRUbWWwlMkIRF0FZorvLlTkmMPXLS60QaRCvAiB%2FpZ2gWjb21xHn4y71lV1ODXUZGQiS0Ri%2FnqNK1KfavCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPPlX9Ks1tQvFZiEPKtwDBPDJ8IZS9hBLW83PhAkFC4kygvAqM93RLRn%2BTltBVnjxVARa147j10frbI6Kxrwr9awmHUegA2lVDR3ylc%2Ftrbj8WlRqKkaFstYrQ%2FwXuhffT9WACVlKu5dsNvN%2FQ%2FiDsmbdk8ykieHvGuCwn%2B0cCsf9jQ036f6Qy6Z4mmvV4wmYZNlM0qfr%2BBQbQj8k5FiX%2FUZLSxwfGcKPWsDxfRQ6yaxM0sKUeLDuyd%2FqySKjhf7LFYPPGi8PsJHTZVd00o%2B9y%2F9R1kOs8%2Fw4QDwl6g7qEhf2A%2BxOxQS01JA%2FIuBx7N3lflk85HIe%2BF9LbNN%2B%2FNcwHfsVCSIIS4cr4Y2hkuEAtJ2gtsOWc7rFNP9sWQd7mo523ko6MXkkpiWxsxpTxqxhhp9FGmGKVwGaTjGMKOFAkqA2swiqjbXAZh8Z3uCblLqyoZbLpHAIwkdQ36zoPHAZXSqjTR1W%2BoRjewoEypsrmBHS8MuSm7%2Bh2477acTn%2B0bqkyfCxGqrPqvu2YZplol4Jzz5Q%2B%2F8YFOYcfLDQgaVIQMatyqfzCw0QlqnmPTGMq4EwqD48lpYqqX%2FOTbqt6krJZaNSMtWEv4UsE6JbgW195UXd463MXrudZKmVg4SC17VKGZ1iVMj0nZx%2B6QwsMCnxAY6pgEjap5jDnvNvvpse1HrKRKeuEUgwE8W9FLdgRBo0PRqOWnucD9xAbnxVu5on8EKT2A42LDeh2Uu%2BDCpsIwErLk0OJex%2FXyJRJIYs5W%2Be2G2Lx4rHpPS%2FSrSAWuL9bw8vxAXGgnLRJwQUHZO0cqWUE1PEiRZ8hYCdfn%2BbxZS%2BXKqf%2FsX0IBbwwBM%2BjDuWefLloiEN%2FceU%2B4l2wk9c75FxnApTdLj4Uxw&X-Amz-Signature=33da6bb15f7978218940de8890fcb1e88a3ceacd8dcc63ff9c9734d4ef376923&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDTVRU3H%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FoG5w7aRUbWWwlMkIRF0FZorvLlTkmMPXLS60QaRCvAiB%2FpZ2gWjb21xHn4y71lV1ODXUZGQiS0Ri%2FnqNK1KfavCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPPlX9Ks1tQvFZiEPKtwDBPDJ8IZS9hBLW83PhAkFC4kygvAqM93RLRn%2BTltBVnjxVARa147j10frbI6Kxrwr9awmHUegA2lVDR3ylc%2Ftrbj8WlRqKkaFstYrQ%2FwXuhffT9WACVlKu5dsNvN%2FQ%2FiDsmbdk8ykieHvGuCwn%2B0cCsf9jQ036f6Qy6Z4mmvV4wmYZNlM0qfr%2BBQbQj8k5FiX%2FUZLSxwfGcKPWsDxfRQ6yaxM0sKUeLDuyd%2FqySKjhf7LFYPPGi8PsJHTZVd00o%2B9y%2F9R1kOs8%2Fw4QDwl6g7qEhf2A%2BxOxQS01JA%2FIuBx7N3lflk85HIe%2BF9LbNN%2B%2FNcwHfsVCSIIS4cr4Y2hkuEAtJ2gtsOWc7rFNP9sWQd7mo523ko6MXkkpiWxsxpTxqxhhp9FGmGKVwGaTjGMKOFAkqA2swiqjbXAZh8Z3uCblLqyoZbLpHAIwkdQ36zoPHAZXSqjTR1W%2BoRjewoEypsrmBHS8MuSm7%2Bh2477acTn%2B0bqkyfCxGqrPqvu2YZplol4Jzz5Q%2B%2F8YFOYcfLDQgaVIQMatyqfzCw0QlqnmPTGMq4EwqD48lpYqqX%2FOTbqt6krJZaNSMtWEv4UsE6JbgW195UXd463MXrudZKmVg4SC17VKGZ1iVMj0nZx%2B6QwsMCnxAY6pgEjap5jDnvNvvpse1HrKRKeuEUgwE8W9FLdgRBo0PRqOWnucD9xAbnxVu5on8EKT2A42LDeh2Uu%2BDCpsIwErLk0OJex%2FXyJRJIYs5W%2Be2G2Lx4rHpPS%2FSrSAWuL9bw8vxAXGgnLRJwQUHZO0cqWUE1PEiRZ8hYCdfn%2BbxZS%2BXKqf%2FsX0IBbwwBM%2BjDuWefLloiEN%2FceU%2B4l2wk9c75FxnApTdLj4Uxw&X-Amz-Signature=1f7b78c175e18edaa0f70d261aa6a57288264c05ac38b653749f38ccff2a8033&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDTVRU3H%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FoG5w7aRUbWWwlMkIRF0FZorvLlTkmMPXLS60QaRCvAiB%2FpZ2gWjb21xHn4y71lV1ODXUZGQiS0Ri%2FnqNK1KfavCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPPlX9Ks1tQvFZiEPKtwDBPDJ8IZS9hBLW83PhAkFC4kygvAqM93RLRn%2BTltBVnjxVARa147j10frbI6Kxrwr9awmHUegA2lVDR3ylc%2Ftrbj8WlRqKkaFstYrQ%2FwXuhffT9WACVlKu5dsNvN%2FQ%2FiDsmbdk8ykieHvGuCwn%2B0cCsf9jQ036f6Qy6Z4mmvV4wmYZNlM0qfr%2BBQbQj8k5FiX%2FUZLSxwfGcKPWsDxfRQ6yaxM0sKUeLDuyd%2FqySKjhf7LFYPPGi8PsJHTZVd00o%2B9y%2F9R1kOs8%2Fw4QDwl6g7qEhf2A%2BxOxQS01JA%2FIuBx7N3lflk85HIe%2BF9LbNN%2B%2FNcwHfsVCSIIS4cr4Y2hkuEAtJ2gtsOWc7rFNP9sWQd7mo523ko6MXkkpiWxsxpTxqxhhp9FGmGKVwGaTjGMKOFAkqA2swiqjbXAZh8Z3uCblLqyoZbLpHAIwkdQ36zoPHAZXSqjTR1W%2BoRjewoEypsrmBHS8MuSm7%2Bh2477acTn%2B0bqkyfCxGqrPqvu2YZplol4Jzz5Q%2B%2F8YFOYcfLDQgaVIQMatyqfzCw0QlqnmPTGMq4EwqD48lpYqqX%2FOTbqt6krJZaNSMtWEv4UsE6JbgW195UXd463MXrudZKmVg4SC17VKGZ1iVMj0nZx%2B6QwsMCnxAY6pgEjap5jDnvNvvpse1HrKRKeuEUgwE8W9FLdgRBo0PRqOWnucD9xAbnxVu5on8EKT2A42LDeh2Uu%2BDCpsIwErLk0OJex%2FXyJRJIYs5W%2Be2G2Lx4rHpPS%2FSrSAWuL9bw8vxAXGgnLRJwQUHZO0cqWUE1PEiRZ8hYCdfn%2BbxZS%2BXKqf%2FsX0IBbwwBM%2BjDuWefLloiEN%2FceU%2B4l2wk9c75FxnApTdLj4Uxw&X-Amz-Signature=e4996de44d6744580ddfbdc90bf0d4fc5dac406eb82b7bd110e418ae56545626&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDTVRU3H%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FoG5w7aRUbWWwlMkIRF0FZorvLlTkmMPXLS60QaRCvAiB%2FpZ2gWjb21xHn4y71lV1ODXUZGQiS0Ri%2FnqNK1KfavCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPPlX9Ks1tQvFZiEPKtwDBPDJ8IZS9hBLW83PhAkFC4kygvAqM93RLRn%2BTltBVnjxVARa147j10frbI6Kxrwr9awmHUegA2lVDR3ylc%2Ftrbj8WlRqKkaFstYrQ%2FwXuhffT9WACVlKu5dsNvN%2FQ%2FiDsmbdk8ykieHvGuCwn%2B0cCsf9jQ036f6Qy6Z4mmvV4wmYZNlM0qfr%2BBQbQj8k5FiX%2FUZLSxwfGcKPWsDxfRQ6yaxM0sKUeLDuyd%2FqySKjhf7LFYPPGi8PsJHTZVd00o%2B9y%2F9R1kOs8%2Fw4QDwl6g7qEhf2A%2BxOxQS01JA%2FIuBx7N3lflk85HIe%2BF9LbNN%2B%2FNcwHfsVCSIIS4cr4Y2hkuEAtJ2gtsOWc7rFNP9sWQd7mo523ko6MXkkpiWxsxpTxqxhhp9FGmGKVwGaTjGMKOFAkqA2swiqjbXAZh8Z3uCblLqyoZbLpHAIwkdQ36zoPHAZXSqjTR1W%2BoRjewoEypsrmBHS8MuSm7%2Bh2477acTn%2B0bqkyfCxGqrPqvu2YZplol4Jzz5Q%2B%2F8YFOYcfLDQgaVIQMatyqfzCw0QlqnmPTGMq4EwqD48lpYqqX%2FOTbqt6krJZaNSMtWEv4UsE6JbgW195UXd463MXrudZKmVg4SC17VKGZ1iVMj0nZx%2B6QwsMCnxAY6pgEjap5jDnvNvvpse1HrKRKeuEUgwE8W9FLdgRBo0PRqOWnucD9xAbnxVu5on8EKT2A42LDeh2Uu%2BDCpsIwErLk0OJex%2FXyJRJIYs5W%2Be2G2Lx4rHpPS%2FSrSAWuL9bw8vxAXGgnLRJwQUHZO0cqWUE1PEiRZ8hYCdfn%2BbxZS%2BXKqf%2FsX0IBbwwBM%2BjDuWefLloiEN%2FceU%2B4l2wk9c75FxnApTdLj4Uxw&X-Amz-Signature=190e5a553742c3a128ef35fe1b6423198b0fd781d9e37403448ea796bc94518e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDTVRU3H%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FoG5w7aRUbWWwlMkIRF0FZorvLlTkmMPXLS60QaRCvAiB%2FpZ2gWjb21xHn4y71lV1ODXUZGQiS0Ri%2FnqNK1KfavCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPPlX9Ks1tQvFZiEPKtwDBPDJ8IZS9hBLW83PhAkFC4kygvAqM93RLRn%2BTltBVnjxVARa147j10frbI6Kxrwr9awmHUegA2lVDR3ylc%2Ftrbj8WlRqKkaFstYrQ%2FwXuhffT9WACVlKu5dsNvN%2FQ%2FiDsmbdk8ykieHvGuCwn%2B0cCsf9jQ036f6Qy6Z4mmvV4wmYZNlM0qfr%2BBQbQj8k5FiX%2FUZLSxwfGcKPWsDxfRQ6yaxM0sKUeLDuyd%2FqySKjhf7LFYPPGi8PsJHTZVd00o%2B9y%2F9R1kOs8%2Fw4QDwl6g7qEhf2A%2BxOxQS01JA%2FIuBx7N3lflk85HIe%2BF9LbNN%2B%2FNcwHfsVCSIIS4cr4Y2hkuEAtJ2gtsOWc7rFNP9sWQd7mo523ko6MXkkpiWxsxpTxqxhhp9FGmGKVwGaTjGMKOFAkqA2swiqjbXAZh8Z3uCblLqyoZbLpHAIwkdQ36zoPHAZXSqjTR1W%2BoRjewoEypsrmBHS8MuSm7%2Bh2477acTn%2B0bqkyfCxGqrPqvu2YZplol4Jzz5Q%2B%2F8YFOYcfLDQgaVIQMatyqfzCw0QlqnmPTGMq4EwqD48lpYqqX%2FOTbqt6krJZaNSMtWEv4UsE6JbgW195UXd463MXrudZKmVg4SC17VKGZ1iVMj0nZx%2B6QwsMCnxAY6pgEjap5jDnvNvvpse1HrKRKeuEUgwE8W9FLdgRBo0PRqOWnucD9xAbnxVu5on8EKT2A42LDeh2Uu%2BDCpsIwErLk0OJex%2FXyJRJIYs5W%2Be2G2Lx4rHpPS%2FSrSAWuL9bw8vxAXGgnLRJwQUHZO0cqWUE1PEiRZ8hYCdfn%2BbxZS%2BXKqf%2FsX0IBbwwBM%2BjDuWefLloiEN%2FceU%2B4l2wk9c75FxnApTdLj4Uxw&X-Amz-Signature=39930af3fefa0a081b8638d1ddefa4d557e89ac8012eb654f3bb1780cb4f2d61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDTVRU3H%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FoG5w7aRUbWWwlMkIRF0FZorvLlTkmMPXLS60QaRCvAiB%2FpZ2gWjb21xHn4y71lV1ODXUZGQiS0Ri%2FnqNK1KfavCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPPlX9Ks1tQvFZiEPKtwDBPDJ8IZS9hBLW83PhAkFC4kygvAqM93RLRn%2BTltBVnjxVARa147j10frbI6Kxrwr9awmHUegA2lVDR3ylc%2Ftrbj8WlRqKkaFstYrQ%2FwXuhffT9WACVlKu5dsNvN%2FQ%2FiDsmbdk8ykieHvGuCwn%2B0cCsf9jQ036f6Qy6Z4mmvV4wmYZNlM0qfr%2BBQbQj8k5FiX%2FUZLSxwfGcKPWsDxfRQ6yaxM0sKUeLDuyd%2FqySKjhf7LFYPPGi8PsJHTZVd00o%2B9y%2F9R1kOs8%2Fw4QDwl6g7qEhf2A%2BxOxQS01JA%2FIuBx7N3lflk85HIe%2BF9LbNN%2B%2FNcwHfsVCSIIS4cr4Y2hkuEAtJ2gtsOWc7rFNP9sWQd7mo523ko6MXkkpiWxsxpTxqxhhp9FGmGKVwGaTjGMKOFAkqA2swiqjbXAZh8Z3uCblLqyoZbLpHAIwkdQ36zoPHAZXSqjTR1W%2BoRjewoEypsrmBHS8MuSm7%2Bh2477acTn%2B0bqkyfCxGqrPqvu2YZplol4Jzz5Q%2B%2F8YFOYcfLDQgaVIQMatyqfzCw0QlqnmPTGMq4EwqD48lpYqqX%2FOTbqt6krJZaNSMtWEv4UsE6JbgW195UXd463MXrudZKmVg4SC17VKGZ1iVMj0nZx%2B6QwsMCnxAY6pgEjap5jDnvNvvpse1HrKRKeuEUgwE8W9FLdgRBo0PRqOWnucD9xAbnxVu5on8EKT2A42LDeh2Uu%2BDCpsIwErLk0OJex%2FXyJRJIYs5W%2Be2G2Lx4rHpPS%2FSrSAWuL9bw8vxAXGgnLRJwQUHZO0cqWUE1PEiRZ8hYCdfn%2BbxZS%2BXKqf%2FsX0IBbwwBM%2BjDuWefLloiEN%2FceU%2B4l2wk9c75FxnApTdLj4Uxw&X-Amz-Signature=533049350488ecaa6d62bafb78c42a1732d53fe2a5ed2d937f9bc06f1f2b6b00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDTVRU3H%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FoG5w7aRUbWWwlMkIRF0FZorvLlTkmMPXLS60QaRCvAiB%2FpZ2gWjb21xHn4y71lV1ODXUZGQiS0Ri%2FnqNK1KfavCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPPlX9Ks1tQvFZiEPKtwDBPDJ8IZS9hBLW83PhAkFC4kygvAqM93RLRn%2BTltBVnjxVARa147j10frbI6Kxrwr9awmHUegA2lVDR3ylc%2Ftrbj8WlRqKkaFstYrQ%2FwXuhffT9WACVlKu5dsNvN%2FQ%2FiDsmbdk8ykieHvGuCwn%2B0cCsf9jQ036f6Qy6Z4mmvV4wmYZNlM0qfr%2BBQbQj8k5FiX%2FUZLSxwfGcKPWsDxfRQ6yaxM0sKUeLDuyd%2FqySKjhf7LFYPPGi8PsJHTZVd00o%2B9y%2F9R1kOs8%2Fw4QDwl6g7qEhf2A%2BxOxQS01JA%2FIuBx7N3lflk85HIe%2BF9LbNN%2B%2FNcwHfsVCSIIS4cr4Y2hkuEAtJ2gtsOWc7rFNP9sWQd7mo523ko6MXkkpiWxsxpTxqxhhp9FGmGKVwGaTjGMKOFAkqA2swiqjbXAZh8Z3uCblLqyoZbLpHAIwkdQ36zoPHAZXSqjTR1W%2BoRjewoEypsrmBHS8MuSm7%2Bh2477acTn%2B0bqkyfCxGqrPqvu2YZplol4Jzz5Q%2B%2F8YFOYcfLDQgaVIQMatyqfzCw0QlqnmPTGMq4EwqD48lpYqqX%2FOTbqt6krJZaNSMtWEv4UsE6JbgW195UXd463MXrudZKmVg4SC17VKGZ1iVMj0nZx%2B6QwsMCnxAY6pgEjap5jDnvNvvpse1HrKRKeuEUgwE8W9FLdgRBo0PRqOWnucD9xAbnxVu5on8EKT2A42LDeh2Uu%2BDCpsIwErLk0OJex%2FXyJRJIYs5W%2Be2G2Lx4rHpPS%2FSrSAWuL9bw8vxAXGgnLRJwQUHZO0cqWUE1PEiRZ8hYCdfn%2BbxZS%2BXKqf%2FsX0IBbwwBM%2BjDuWefLloiEN%2FceU%2B4l2wk9c75FxnApTdLj4Uxw&X-Amz-Signature=048ad9d60c30f96313a6460b5e002c318ff79c5f003f4c6847f0e64b74b27f46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
