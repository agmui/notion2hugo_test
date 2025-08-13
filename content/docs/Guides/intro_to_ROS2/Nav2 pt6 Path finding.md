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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MTCZQCK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJeICijEm%2FJmq2OHWPrLdtSMID%2B2vg%2B1MuuH5Y1ivIIgIgPKIjslmmZCig80EPVRDEEWdwvWiJmZg2Mx96sU2m4Swq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKHNq6AxAnDn%2FE6GBSrcAxvzX4rw1yDca%2BZAt7t%2BVngq8XCp1c5UQo5AkyetNEunjGEzcVA7rzXuqtfC9DjFwPuMQW%2B2omd%2BbnxpcA6iP%2FwKMFXnHTHr1twU%2Fjv2ufRbm9gZpcTqP5Nc0mSEWrsnVnEp1YJkV646ULMPGPjzhv6iOqwzwRnlbgSnTkuiA%2BVHKj5YhCNB0ntACVU79qiBbxpjn4JUvtG35znIv%2BLs4xwS8f4J9ugxlEssgBRUjUZzAj28wgV%2BcJP0brNzOMbB9harueKELNAR0AcSuCKK4PfZnm%2FpOuBYhz6nOVBCLiMBU8uMcNAq%2B3TJEI6tbzeeKmzm5MNNtJp%2F2WOXnC7MsEzTxIJ2dXNz6ZRB5%2Fz%2Fn0oVpSqjSfqlu24QOjAPlW8A1stVcrZeZNLGn%2FZTxS%2B5WyFMnF%2Fylm%2BJz9FWiKl1TIhaBp%2BQLb2DYh1wRmGiABnP2%2BS7LkqHUdf6cVZSWoRXgsB57Zrv9eLDDdLXOUMO7sQsMzdMr8Gg23jZRSk0Q4HTX1iJ0XUf4a8LXNZ2WTv7s09CqoMEuxjgJ5vXtyQ8D%2F4sPAFrNko1e9gmiM%2FXCjq1mOV8h9Kl06WnJ4hL7i%2BuyKn1U5jEO3ZjbdRiU6Eq1esW%2B4Uuw%2Flc5hPClbHZMMLG8cQGOqUBMGc7EYiVF2Tq05uN5Vo0IgAH7BoEHJjoZHZKdO%2F8hmRUdJeeExyFuCz8A383S%2BLqYGl3XjPYIrsHEshl9rcpKjidHVMZe0NfEJmbpE%2FwsNRjFaLuUU0y1aDymvPSHHid0a%2FHv5MDFXdlM5DqxJE0WnghJdurYF2w4xYSdUKmbfEuVtCKs%2BBIK%2B%2FG3sAnzd0LeUACL4Rh1ab8D2%2FaatEGPM4BJ7Qc&X-Amz-Signature=a8f627d023dc6a8c40e6bbaa042c6f644a7670867da733fea386bf6bcf511554&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MTCZQCK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJeICijEm%2FJmq2OHWPrLdtSMID%2B2vg%2B1MuuH5Y1ivIIgIgPKIjslmmZCig80EPVRDEEWdwvWiJmZg2Mx96sU2m4Swq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKHNq6AxAnDn%2FE6GBSrcAxvzX4rw1yDca%2BZAt7t%2BVngq8XCp1c5UQo5AkyetNEunjGEzcVA7rzXuqtfC9DjFwPuMQW%2B2omd%2BbnxpcA6iP%2FwKMFXnHTHr1twU%2Fjv2ufRbm9gZpcTqP5Nc0mSEWrsnVnEp1YJkV646ULMPGPjzhv6iOqwzwRnlbgSnTkuiA%2BVHKj5YhCNB0ntACVU79qiBbxpjn4JUvtG35znIv%2BLs4xwS8f4J9ugxlEssgBRUjUZzAj28wgV%2BcJP0brNzOMbB9harueKELNAR0AcSuCKK4PfZnm%2FpOuBYhz6nOVBCLiMBU8uMcNAq%2B3TJEI6tbzeeKmzm5MNNtJp%2F2WOXnC7MsEzTxIJ2dXNz6ZRB5%2Fz%2Fn0oVpSqjSfqlu24QOjAPlW8A1stVcrZeZNLGn%2FZTxS%2B5WyFMnF%2Fylm%2BJz9FWiKl1TIhaBp%2BQLb2DYh1wRmGiABnP2%2BS7LkqHUdf6cVZSWoRXgsB57Zrv9eLDDdLXOUMO7sQsMzdMr8Gg23jZRSk0Q4HTX1iJ0XUf4a8LXNZ2WTv7s09CqoMEuxjgJ5vXtyQ8D%2F4sPAFrNko1e9gmiM%2FXCjq1mOV8h9Kl06WnJ4hL7i%2BuyKn1U5jEO3ZjbdRiU6Eq1esW%2B4Uuw%2Flc5hPClbHZMMLG8cQGOqUBMGc7EYiVF2Tq05uN5Vo0IgAH7BoEHJjoZHZKdO%2F8hmRUdJeeExyFuCz8A383S%2BLqYGl3XjPYIrsHEshl9rcpKjidHVMZe0NfEJmbpE%2FwsNRjFaLuUU0y1aDymvPSHHid0a%2FHv5MDFXdlM5DqxJE0WnghJdurYF2w4xYSdUKmbfEuVtCKs%2BBIK%2B%2FG3sAnzd0LeUACL4Rh1ab8D2%2FaatEGPM4BJ7Qc&X-Amz-Signature=51810168afd04785d2a1dc362eded0fb9e26cbcc252e5538eaaea12380d635b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MTCZQCK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJeICijEm%2FJmq2OHWPrLdtSMID%2B2vg%2B1MuuH5Y1ivIIgIgPKIjslmmZCig80EPVRDEEWdwvWiJmZg2Mx96sU2m4Swq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKHNq6AxAnDn%2FE6GBSrcAxvzX4rw1yDca%2BZAt7t%2BVngq8XCp1c5UQo5AkyetNEunjGEzcVA7rzXuqtfC9DjFwPuMQW%2B2omd%2BbnxpcA6iP%2FwKMFXnHTHr1twU%2Fjv2ufRbm9gZpcTqP5Nc0mSEWrsnVnEp1YJkV646ULMPGPjzhv6iOqwzwRnlbgSnTkuiA%2BVHKj5YhCNB0ntACVU79qiBbxpjn4JUvtG35znIv%2BLs4xwS8f4J9ugxlEssgBRUjUZzAj28wgV%2BcJP0brNzOMbB9harueKELNAR0AcSuCKK4PfZnm%2FpOuBYhz6nOVBCLiMBU8uMcNAq%2B3TJEI6tbzeeKmzm5MNNtJp%2F2WOXnC7MsEzTxIJ2dXNz6ZRB5%2Fz%2Fn0oVpSqjSfqlu24QOjAPlW8A1stVcrZeZNLGn%2FZTxS%2B5WyFMnF%2Fylm%2BJz9FWiKl1TIhaBp%2BQLb2DYh1wRmGiABnP2%2BS7LkqHUdf6cVZSWoRXgsB57Zrv9eLDDdLXOUMO7sQsMzdMr8Gg23jZRSk0Q4HTX1iJ0XUf4a8LXNZ2WTv7s09CqoMEuxjgJ5vXtyQ8D%2F4sPAFrNko1e9gmiM%2FXCjq1mOV8h9Kl06WnJ4hL7i%2BuyKn1U5jEO3ZjbdRiU6Eq1esW%2B4Uuw%2Flc5hPClbHZMMLG8cQGOqUBMGc7EYiVF2Tq05uN5Vo0IgAH7BoEHJjoZHZKdO%2F8hmRUdJeeExyFuCz8A383S%2BLqYGl3XjPYIrsHEshl9rcpKjidHVMZe0NfEJmbpE%2FwsNRjFaLuUU0y1aDymvPSHHid0a%2FHv5MDFXdlM5DqxJE0WnghJdurYF2w4xYSdUKmbfEuVtCKs%2BBIK%2B%2FG3sAnzd0LeUACL4Rh1ab8D2%2FaatEGPM4BJ7Qc&X-Amz-Signature=b2d21f216dfc0c5a2bf0c517faa082dcb17c1e2a8fc476e07b9ab93f41051d0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MTCZQCK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJeICijEm%2FJmq2OHWPrLdtSMID%2B2vg%2B1MuuH5Y1ivIIgIgPKIjslmmZCig80EPVRDEEWdwvWiJmZg2Mx96sU2m4Swq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKHNq6AxAnDn%2FE6GBSrcAxvzX4rw1yDca%2BZAt7t%2BVngq8XCp1c5UQo5AkyetNEunjGEzcVA7rzXuqtfC9DjFwPuMQW%2B2omd%2BbnxpcA6iP%2FwKMFXnHTHr1twU%2Fjv2ufRbm9gZpcTqP5Nc0mSEWrsnVnEp1YJkV646ULMPGPjzhv6iOqwzwRnlbgSnTkuiA%2BVHKj5YhCNB0ntACVU79qiBbxpjn4JUvtG35znIv%2BLs4xwS8f4J9ugxlEssgBRUjUZzAj28wgV%2BcJP0brNzOMbB9harueKELNAR0AcSuCKK4PfZnm%2FpOuBYhz6nOVBCLiMBU8uMcNAq%2B3TJEI6tbzeeKmzm5MNNtJp%2F2WOXnC7MsEzTxIJ2dXNz6ZRB5%2Fz%2Fn0oVpSqjSfqlu24QOjAPlW8A1stVcrZeZNLGn%2FZTxS%2B5WyFMnF%2Fylm%2BJz9FWiKl1TIhaBp%2BQLb2DYh1wRmGiABnP2%2BS7LkqHUdf6cVZSWoRXgsB57Zrv9eLDDdLXOUMO7sQsMzdMr8Gg23jZRSk0Q4HTX1iJ0XUf4a8LXNZ2WTv7s09CqoMEuxjgJ5vXtyQ8D%2F4sPAFrNko1e9gmiM%2FXCjq1mOV8h9Kl06WnJ4hL7i%2BuyKn1U5jEO3ZjbdRiU6Eq1esW%2B4Uuw%2Flc5hPClbHZMMLG8cQGOqUBMGc7EYiVF2Tq05uN5Vo0IgAH7BoEHJjoZHZKdO%2F8hmRUdJeeExyFuCz8A383S%2BLqYGl3XjPYIrsHEshl9rcpKjidHVMZe0NfEJmbpE%2FwsNRjFaLuUU0y1aDymvPSHHid0a%2FHv5MDFXdlM5DqxJE0WnghJdurYF2w4xYSdUKmbfEuVtCKs%2BBIK%2B%2FG3sAnzd0LeUACL4Rh1ab8D2%2FaatEGPM4BJ7Qc&X-Amz-Signature=f1c54bf9d593d7bed17b89ae97770b02e2a727caa568a43e5beeca9fbc47a3c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MTCZQCK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJeICijEm%2FJmq2OHWPrLdtSMID%2B2vg%2B1MuuH5Y1ivIIgIgPKIjslmmZCig80EPVRDEEWdwvWiJmZg2Mx96sU2m4Swq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKHNq6AxAnDn%2FE6GBSrcAxvzX4rw1yDca%2BZAt7t%2BVngq8XCp1c5UQo5AkyetNEunjGEzcVA7rzXuqtfC9DjFwPuMQW%2B2omd%2BbnxpcA6iP%2FwKMFXnHTHr1twU%2Fjv2ufRbm9gZpcTqP5Nc0mSEWrsnVnEp1YJkV646ULMPGPjzhv6iOqwzwRnlbgSnTkuiA%2BVHKj5YhCNB0ntACVU79qiBbxpjn4JUvtG35znIv%2BLs4xwS8f4J9ugxlEssgBRUjUZzAj28wgV%2BcJP0brNzOMbB9harueKELNAR0AcSuCKK4PfZnm%2FpOuBYhz6nOVBCLiMBU8uMcNAq%2B3TJEI6tbzeeKmzm5MNNtJp%2F2WOXnC7MsEzTxIJ2dXNz6ZRB5%2Fz%2Fn0oVpSqjSfqlu24QOjAPlW8A1stVcrZeZNLGn%2FZTxS%2B5WyFMnF%2Fylm%2BJz9FWiKl1TIhaBp%2BQLb2DYh1wRmGiABnP2%2BS7LkqHUdf6cVZSWoRXgsB57Zrv9eLDDdLXOUMO7sQsMzdMr8Gg23jZRSk0Q4HTX1iJ0XUf4a8LXNZ2WTv7s09CqoMEuxjgJ5vXtyQ8D%2F4sPAFrNko1e9gmiM%2FXCjq1mOV8h9Kl06WnJ4hL7i%2BuyKn1U5jEO3ZjbdRiU6Eq1esW%2B4Uuw%2Flc5hPClbHZMMLG8cQGOqUBMGc7EYiVF2Tq05uN5Vo0IgAH7BoEHJjoZHZKdO%2F8hmRUdJeeExyFuCz8A383S%2BLqYGl3XjPYIrsHEshl9rcpKjidHVMZe0NfEJmbpE%2FwsNRjFaLuUU0y1aDymvPSHHid0a%2FHv5MDFXdlM5DqxJE0WnghJdurYF2w4xYSdUKmbfEuVtCKs%2BBIK%2B%2FG3sAnzd0LeUACL4Rh1ab8D2%2FaatEGPM4BJ7Qc&X-Amz-Signature=e987a3977d7b56baa6586d084f9a99f563b23d286ce7966f93ac12108e7911d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MTCZQCK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJeICijEm%2FJmq2OHWPrLdtSMID%2B2vg%2B1MuuH5Y1ivIIgIgPKIjslmmZCig80EPVRDEEWdwvWiJmZg2Mx96sU2m4Swq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKHNq6AxAnDn%2FE6GBSrcAxvzX4rw1yDca%2BZAt7t%2BVngq8XCp1c5UQo5AkyetNEunjGEzcVA7rzXuqtfC9DjFwPuMQW%2B2omd%2BbnxpcA6iP%2FwKMFXnHTHr1twU%2Fjv2ufRbm9gZpcTqP5Nc0mSEWrsnVnEp1YJkV646ULMPGPjzhv6iOqwzwRnlbgSnTkuiA%2BVHKj5YhCNB0ntACVU79qiBbxpjn4JUvtG35znIv%2BLs4xwS8f4J9ugxlEssgBRUjUZzAj28wgV%2BcJP0brNzOMbB9harueKELNAR0AcSuCKK4PfZnm%2FpOuBYhz6nOVBCLiMBU8uMcNAq%2B3TJEI6tbzeeKmzm5MNNtJp%2F2WOXnC7MsEzTxIJ2dXNz6ZRB5%2Fz%2Fn0oVpSqjSfqlu24QOjAPlW8A1stVcrZeZNLGn%2FZTxS%2B5WyFMnF%2Fylm%2BJz9FWiKl1TIhaBp%2BQLb2DYh1wRmGiABnP2%2BS7LkqHUdf6cVZSWoRXgsB57Zrv9eLDDdLXOUMO7sQsMzdMr8Gg23jZRSk0Q4HTX1iJ0XUf4a8LXNZ2WTv7s09CqoMEuxjgJ5vXtyQ8D%2F4sPAFrNko1e9gmiM%2FXCjq1mOV8h9Kl06WnJ4hL7i%2BuyKn1U5jEO3ZjbdRiU6Eq1esW%2B4Uuw%2Flc5hPClbHZMMLG8cQGOqUBMGc7EYiVF2Tq05uN5Vo0IgAH7BoEHJjoZHZKdO%2F8hmRUdJeeExyFuCz8A383S%2BLqYGl3XjPYIrsHEshl9rcpKjidHVMZe0NfEJmbpE%2FwsNRjFaLuUU0y1aDymvPSHHid0a%2FHv5MDFXdlM5DqxJE0WnghJdurYF2w4xYSdUKmbfEuVtCKs%2BBIK%2B%2FG3sAnzd0LeUACL4Rh1ab8D2%2FaatEGPM4BJ7Qc&X-Amz-Signature=893540644babb4913ed6204d781125809c8a4aa6323d052b2e515f9ff4f15b59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MTCZQCK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJeICijEm%2FJmq2OHWPrLdtSMID%2B2vg%2B1MuuH5Y1ivIIgIgPKIjslmmZCig80EPVRDEEWdwvWiJmZg2Mx96sU2m4Swq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKHNq6AxAnDn%2FE6GBSrcAxvzX4rw1yDca%2BZAt7t%2BVngq8XCp1c5UQo5AkyetNEunjGEzcVA7rzXuqtfC9DjFwPuMQW%2B2omd%2BbnxpcA6iP%2FwKMFXnHTHr1twU%2Fjv2ufRbm9gZpcTqP5Nc0mSEWrsnVnEp1YJkV646ULMPGPjzhv6iOqwzwRnlbgSnTkuiA%2BVHKj5YhCNB0ntACVU79qiBbxpjn4JUvtG35znIv%2BLs4xwS8f4J9ugxlEssgBRUjUZzAj28wgV%2BcJP0brNzOMbB9harueKELNAR0AcSuCKK4PfZnm%2FpOuBYhz6nOVBCLiMBU8uMcNAq%2B3TJEI6tbzeeKmzm5MNNtJp%2F2WOXnC7MsEzTxIJ2dXNz6ZRB5%2Fz%2Fn0oVpSqjSfqlu24QOjAPlW8A1stVcrZeZNLGn%2FZTxS%2B5WyFMnF%2Fylm%2BJz9FWiKl1TIhaBp%2BQLb2DYh1wRmGiABnP2%2BS7LkqHUdf6cVZSWoRXgsB57Zrv9eLDDdLXOUMO7sQsMzdMr8Gg23jZRSk0Q4HTX1iJ0XUf4a8LXNZ2WTv7s09CqoMEuxjgJ5vXtyQ8D%2F4sPAFrNko1e9gmiM%2FXCjq1mOV8h9Kl06WnJ4hL7i%2BuyKn1U5jEO3ZjbdRiU6Eq1esW%2B4Uuw%2Flc5hPClbHZMMLG8cQGOqUBMGc7EYiVF2Tq05uN5Vo0IgAH7BoEHJjoZHZKdO%2F8hmRUdJeeExyFuCz8A383S%2BLqYGl3XjPYIrsHEshl9rcpKjidHVMZe0NfEJmbpE%2FwsNRjFaLuUU0y1aDymvPSHHid0a%2FHv5MDFXdlM5DqxJE0WnghJdurYF2w4xYSdUKmbfEuVtCKs%2BBIK%2B%2FG3sAnzd0LeUACL4Rh1ab8D2%2FaatEGPM4BJ7Qc&X-Amz-Signature=71df9344b271be91f93d0b0c39e69d2d735259d4372acba75f00a87bc5fce514&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MTCZQCK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJeICijEm%2FJmq2OHWPrLdtSMID%2B2vg%2B1MuuH5Y1ivIIgIgPKIjslmmZCig80EPVRDEEWdwvWiJmZg2Mx96sU2m4Swq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKHNq6AxAnDn%2FE6GBSrcAxvzX4rw1yDca%2BZAt7t%2BVngq8XCp1c5UQo5AkyetNEunjGEzcVA7rzXuqtfC9DjFwPuMQW%2B2omd%2BbnxpcA6iP%2FwKMFXnHTHr1twU%2Fjv2ufRbm9gZpcTqP5Nc0mSEWrsnVnEp1YJkV646ULMPGPjzhv6iOqwzwRnlbgSnTkuiA%2BVHKj5YhCNB0ntACVU79qiBbxpjn4JUvtG35znIv%2BLs4xwS8f4J9ugxlEssgBRUjUZzAj28wgV%2BcJP0brNzOMbB9harueKELNAR0AcSuCKK4PfZnm%2FpOuBYhz6nOVBCLiMBU8uMcNAq%2B3TJEI6tbzeeKmzm5MNNtJp%2F2WOXnC7MsEzTxIJ2dXNz6ZRB5%2Fz%2Fn0oVpSqjSfqlu24QOjAPlW8A1stVcrZeZNLGn%2FZTxS%2B5WyFMnF%2Fylm%2BJz9FWiKl1TIhaBp%2BQLb2DYh1wRmGiABnP2%2BS7LkqHUdf6cVZSWoRXgsB57Zrv9eLDDdLXOUMO7sQsMzdMr8Gg23jZRSk0Q4HTX1iJ0XUf4a8LXNZ2WTv7s09CqoMEuxjgJ5vXtyQ8D%2F4sPAFrNko1e9gmiM%2FXCjq1mOV8h9Kl06WnJ4hL7i%2BuyKn1U5jEO3ZjbdRiU6Eq1esW%2B4Uuw%2Flc5hPClbHZMMLG8cQGOqUBMGc7EYiVF2Tq05uN5Vo0IgAH7BoEHJjoZHZKdO%2F8hmRUdJeeExyFuCz8A383S%2BLqYGl3XjPYIrsHEshl9rcpKjidHVMZe0NfEJmbpE%2FwsNRjFaLuUU0y1aDymvPSHHid0a%2FHv5MDFXdlM5DqxJE0WnghJdurYF2w4xYSdUKmbfEuVtCKs%2BBIK%2B%2FG3sAnzd0LeUACL4Rh1ab8D2%2FaatEGPM4BJ7Qc&X-Amz-Signature=e84f0b7fedd8a2b7d9e89ac522df0bd923e24cc21d7eaf606d7bce39d9bbb8d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MTCZQCK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJeICijEm%2FJmq2OHWPrLdtSMID%2B2vg%2B1MuuH5Y1ivIIgIgPKIjslmmZCig80EPVRDEEWdwvWiJmZg2Mx96sU2m4Swq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKHNq6AxAnDn%2FE6GBSrcAxvzX4rw1yDca%2BZAt7t%2BVngq8XCp1c5UQo5AkyetNEunjGEzcVA7rzXuqtfC9DjFwPuMQW%2B2omd%2BbnxpcA6iP%2FwKMFXnHTHr1twU%2Fjv2ufRbm9gZpcTqP5Nc0mSEWrsnVnEp1YJkV646ULMPGPjzhv6iOqwzwRnlbgSnTkuiA%2BVHKj5YhCNB0ntACVU79qiBbxpjn4JUvtG35znIv%2BLs4xwS8f4J9ugxlEssgBRUjUZzAj28wgV%2BcJP0brNzOMbB9harueKELNAR0AcSuCKK4PfZnm%2FpOuBYhz6nOVBCLiMBU8uMcNAq%2B3TJEI6tbzeeKmzm5MNNtJp%2F2WOXnC7MsEzTxIJ2dXNz6ZRB5%2Fz%2Fn0oVpSqjSfqlu24QOjAPlW8A1stVcrZeZNLGn%2FZTxS%2B5WyFMnF%2Fylm%2BJz9FWiKl1TIhaBp%2BQLb2DYh1wRmGiABnP2%2BS7LkqHUdf6cVZSWoRXgsB57Zrv9eLDDdLXOUMO7sQsMzdMr8Gg23jZRSk0Q4HTX1iJ0XUf4a8LXNZ2WTv7s09CqoMEuxjgJ5vXtyQ8D%2F4sPAFrNko1e9gmiM%2FXCjq1mOV8h9Kl06WnJ4hL7i%2BuyKn1U5jEO3ZjbdRiU6Eq1esW%2B4Uuw%2Flc5hPClbHZMMLG8cQGOqUBMGc7EYiVF2Tq05uN5Vo0IgAH7BoEHJjoZHZKdO%2F8hmRUdJeeExyFuCz8A383S%2BLqYGl3XjPYIrsHEshl9rcpKjidHVMZe0NfEJmbpE%2FwsNRjFaLuUU0y1aDymvPSHHid0a%2FHv5MDFXdlM5DqxJE0WnghJdurYF2w4xYSdUKmbfEuVtCKs%2BBIK%2B%2FG3sAnzd0LeUACL4Rh1ab8D2%2FaatEGPM4BJ7Qc&X-Amz-Signature=9e2f2e7cc0c180b5df6e12f2e6abcea5c159f69923cc45445577deb0f90ef233&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MTCZQCK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJeICijEm%2FJmq2OHWPrLdtSMID%2B2vg%2B1MuuH5Y1ivIIgIgPKIjslmmZCig80EPVRDEEWdwvWiJmZg2Mx96sU2m4Swq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKHNq6AxAnDn%2FE6GBSrcAxvzX4rw1yDca%2BZAt7t%2BVngq8XCp1c5UQo5AkyetNEunjGEzcVA7rzXuqtfC9DjFwPuMQW%2B2omd%2BbnxpcA6iP%2FwKMFXnHTHr1twU%2Fjv2ufRbm9gZpcTqP5Nc0mSEWrsnVnEp1YJkV646ULMPGPjzhv6iOqwzwRnlbgSnTkuiA%2BVHKj5YhCNB0ntACVU79qiBbxpjn4JUvtG35znIv%2BLs4xwS8f4J9ugxlEssgBRUjUZzAj28wgV%2BcJP0brNzOMbB9harueKELNAR0AcSuCKK4PfZnm%2FpOuBYhz6nOVBCLiMBU8uMcNAq%2B3TJEI6tbzeeKmzm5MNNtJp%2F2WOXnC7MsEzTxIJ2dXNz6ZRB5%2Fz%2Fn0oVpSqjSfqlu24QOjAPlW8A1stVcrZeZNLGn%2FZTxS%2B5WyFMnF%2Fylm%2BJz9FWiKl1TIhaBp%2BQLb2DYh1wRmGiABnP2%2BS7LkqHUdf6cVZSWoRXgsB57Zrv9eLDDdLXOUMO7sQsMzdMr8Gg23jZRSk0Q4HTX1iJ0XUf4a8LXNZ2WTv7s09CqoMEuxjgJ5vXtyQ8D%2F4sPAFrNko1e9gmiM%2FXCjq1mOV8h9Kl06WnJ4hL7i%2BuyKn1U5jEO3ZjbdRiU6Eq1esW%2B4Uuw%2Flc5hPClbHZMMLG8cQGOqUBMGc7EYiVF2Tq05uN5Vo0IgAH7BoEHJjoZHZKdO%2F8hmRUdJeeExyFuCz8A383S%2BLqYGl3XjPYIrsHEshl9rcpKjidHVMZe0NfEJmbpE%2FwsNRjFaLuUU0y1aDymvPSHHid0a%2FHv5MDFXdlM5DqxJE0WnghJdurYF2w4xYSdUKmbfEuVtCKs%2BBIK%2B%2FG3sAnzd0LeUACL4Rh1ab8D2%2FaatEGPM4BJ7Qc&X-Amz-Signature=2c6d5ea3ca761fe377941e69184d5e68f404eeef465195540dee094496b7abba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MTCZQCK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJeICijEm%2FJmq2OHWPrLdtSMID%2B2vg%2B1MuuH5Y1ivIIgIgPKIjslmmZCig80EPVRDEEWdwvWiJmZg2Mx96sU2m4Swq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKHNq6AxAnDn%2FE6GBSrcAxvzX4rw1yDca%2BZAt7t%2BVngq8XCp1c5UQo5AkyetNEunjGEzcVA7rzXuqtfC9DjFwPuMQW%2B2omd%2BbnxpcA6iP%2FwKMFXnHTHr1twU%2Fjv2ufRbm9gZpcTqP5Nc0mSEWrsnVnEp1YJkV646ULMPGPjzhv6iOqwzwRnlbgSnTkuiA%2BVHKj5YhCNB0ntACVU79qiBbxpjn4JUvtG35znIv%2BLs4xwS8f4J9ugxlEssgBRUjUZzAj28wgV%2BcJP0brNzOMbB9harueKELNAR0AcSuCKK4PfZnm%2FpOuBYhz6nOVBCLiMBU8uMcNAq%2B3TJEI6tbzeeKmzm5MNNtJp%2F2WOXnC7MsEzTxIJ2dXNz6ZRB5%2Fz%2Fn0oVpSqjSfqlu24QOjAPlW8A1stVcrZeZNLGn%2FZTxS%2B5WyFMnF%2Fylm%2BJz9FWiKl1TIhaBp%2BQLb2DYh1wRmGiABnP2%2BS7LkqHUdf6cVZSWoRXgsB57Zrv9eLDDdLXOUMO7sQsMzdMr8Gg23jZRSk0Q4HTX1iJ0XUf4a8LXNZ2WTv7s09CqoMEuxjgJ5vXtyQ8D%2F4sPAFrNko1e9gmiM%2FXCjq1mOV8h9Kl06WnJ4hL7i%2BuyKn1U5jEO3ZjbdRiU6Eq1esW%2B4Uuw%2Flc5hPClbHZMMLG8cQGOqUBMGc7EYiVF2Tq05uN5Vo0IgAH7BoEHJjoZHZKdO%2F8hmRUdJeeExyFuCz8A383S%2BLqYGl3XjPYIrsHEshl9rcpKjidHVMZe0NfEJmbpE%2FwsNRjFaLuUU0y1aDymvPSHHid0a%2FHv5MDFXdlM5DqxJE0WnghJdurYF2w4xYSdUKmbfEuVtCKs%2BBIK%2B%2FG3sAnzd0LeUACL4Rh1ab8D2%2FaatEGPM4BJ7Qc&X-Amz-Signature=c84c4079c6350dc75af15cf5a4623365bed935e5129f09d3fe74363844d1f7b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MTCZQCK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJeICijEm%2FJmq2OHWPrLdtSMID%2B2vg%2B1MuuH5Y1ivIIgIgPKIjslmmZCig80EPVRDEEWdwvWiJmZg2Mx96sU2m4Swq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKHNq6AxAnDn%2FE6GBSrcAxvzX4rw1yDca%2BZAt7t%2BVngq8XCp1c5UQo5AkyetNEunjGEzcVA7rzXuqtfC9DjFwPuMQW%2B2omd%2BbnxpcA6iP%2FwKMFXnHTHr1twU%2Fjv2ufRbm9gZpcTqP5Nc0mSEWrsnVnEp1YJkV646ULMPGPjzhv6iOqwzwRnlbgSnTkuiA%2BVHKj5YhCNB0ntACVU79qiBbxpjn4JUvtG35znIv%2BLs4xwS8f4J9ugxlEssgBRUjUZzAj28wgV%2BcJP0brNzOMbB9harueKELNAR0AcSuCKK4PfZnm%2FpOuBYhz6nOVBCLiMBU8uMcNAq%2B3TJEI6tbzeeKmzm5MNNtJp%2F2WOXnC7MsEzTxIJ2dXNz6ZRB5%2Fz%2Fn0oVpSqjSfqlu24QOjAPlW8A1stVcrZeZNLGn%2FZTxS%2B5WyFMnF%2Fylm%2BJz9FWiKl1TIhaBp%2BQLb2DYh1wRmGiABnP2%2BS7LkqHUdf6cVZSWoRXgsB57Zrv9eLDDdLXOUMO7sQsMzdMr8Gg23jZRSk0Q4HTX1iJ0XUf4a8LXNZ2WTv7s09CqoMEuxjgJ5vXtyQ8D%2F4sPAFrNko1e9gmiM%2FXCjq1mOV8h9Kl06WnJ4hL7i%2BuyKn1U5jEO3ZjbdRiU6Eq1esW%2B4Uuw%2Flc5hPClbHZMMLG8cQGOqUBMGc7EYiVF2Tq05uN5Vo0IgAH7BoEHJjoZHZKdO%2F8hmRUdJeeExyFuCz8A383S%2BLqYGl3XjPYIrsHEshl9rcpKjidHVMZe0NfEJmbpE%2FwsNRjFaLuUU0y1aDymvPSHHid0a%2FHv5MDFXdlM5DqxJE0WnghJdurYF2w4xYSdUKmbfEuVtCKs%2BBIK%2B%2FG3sAnzd0LeUACL4Rh1ab8D2%2FaatEGPM4BJ7Qc&X-Amz-Signature=f9be23dad71fe3f6d7628fa41cb75b0b1d8bdaaf730416422c532955aa9824fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MTCZQCK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJeICijEm%2FJmq2OHWPrLdtSMID%2B2vg%2B1MuuH5Y1ivIIgIgPKIjslmmZCig80EPVRDEEWdwvWiJmZg2Mx96sU2m4Swq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKHNq6AxAnDn%2FE6GBSrcAxvzX4rw1yDca%2BZAt7t%2BVngq8XCp1c5UQo5AkyetNEunjGEzcVA7rzXuqtfC9DjFwPuMQW%2B2omd%2BbnxpcA6iP%2FwKMFXnHTHr1twU%2Fjv2ufRbm9gZpcTqP5Nc0mSEWrsnVnEp1YJkV646ULMPGPjzhv6iOqwzwRnlbgSnTkuiA%2BVHKj5YhCNB0ntACVU79qiBbxpjn4JUvtG35znIv%2BLs4xwS8f4J9ugxlEssgBRUjUZzAj28wgV%2BcJP0brNzOMbB9harueKELNAR0AcSuCKK4PfZnm%2FpOuBYhz6nOVBCLiMBU8uMcNAq%2B3TJEI6tbzeeKmzm5MNNtJp%2F2WOXnC7MsEzTxIJ2dXNz6ZRB5%2Fz%2Fn0oVpSqjSfqlu24QOjAPlW8A1stVcrZeZNLGn%2FZTxS%2B5WyFMnF%2Fylm%2BJz9FWiKl1TIhaBp%2BQLb2DYh1wRmGiABnP2%2BS7LkqHUdf6cVZSWoRXgsB57Zrv9eLDDdLXOUMO7sQsMzdMr8Gg23jZRSk0Q4HTX1iJ0XUf4a8LXNZ2WTv7s09CqoMEuxjgJ5vXtyQ8D%2F4sPAFrNko1e9gmiM%2FXCjq1mOV8h9Kl06WnJ4hL7i%2BuyKn1U5jEO3ZjbdRiU6Eq1esW%2B4Uuw%2Flc5hPClbHZMMLG8cQGOqUBMGc7EYiVF2Tq05uN5Vo0IgAH7BoEHJjoZHZKdO%2F8hmRUdJeeExyFuCz8A383S%2BLqYGl3XjPYIrsHEshl9rcpKjidHVMZe0NfEJmbpE%2FwsNRjFaLuUU0y1aDymvPSHHid0a%2FHv5MDFXdlM5DqxJE0WnghJdurYF2w4xYSdUKmbfEuVtCKs%2BBIK%2B%2FG3sAnzd0LeUACL4Rh1ab8D2%2FaatEGPM4BJ7Qc&X-Amz-Signature=4880d76bfe3cf6928b98e73ea4799611366cfc9baac50b174535af61638a1892&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
