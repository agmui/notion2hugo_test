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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3YHBJH2%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDIBGEGOvHpfFcun56OowAIrlCR7muorjiMsVfhvU5t5gIhANMj8y23UXx4VwVPH5bPpVArx6JY2GJhd%2B0voCjyQjArKv8DCE4QABoMNjM3NDIzMTgzODA1IgwJ6yUY3joCInNOyOsq3AOuynPwiCQomoC2rWJ4M36bslJ%2FJhx%2B86AAWL%2BIor8J%2BCbbRlp2W8VG5wejpiq4aheJJBys59bsIv1AnDR%2FZr9FRyFJ4crc8d023lOv4Gt3v8Z7kk8vtLv4JapbMovUaycwtdn8k%2BiB9wFXfXyx5w7UuRmzX2xKsDhwsi1fcuxGM4U6lwJkctuUeOW2JQ1hcTDe1GKxdXfu7OcuU9S4TYok2c22L0z%2F185FR2KDqooM5P6IdKbGmFTICwMnm0WEJVVLey4AneP0rTh61231b3Hp5WhLAAgauQB0u8jtR4gFOgiPFYAT9wRUfV42MBZx3545qm0P4CGO2ebrTDZQeKnSO%2F6N66wysrg22kOfbXyUSIWesPnMNv%2BNqTgzSiV9GvfvWmB0Q%2BYuBGUhcuaY96QOi7IdSV9jbz4paaAA8Xbv6A9VThOSuWv0PR%2B4VOfWrD%2BIOvtAfnxzDod5gPMrhwGsZtfCwp8HYrJtX%2FlmThSWB1f4xWHMuhERq2cjpsF5qPRJfRU7YkUvV3EEg1L6o%2Fbl2IMAnH%2FDXoxPzWHQD8D6mGVd67AZoChr51WREYbyqpVSM%2FAKIkZgJPu2unB%2FfF985m8lCq5g1wy%2B1QhaMu6vqgvn0dL%2FsIPO6vZ2vjD40I%2FEBjqkAQHiBmgXqp5FscdaKE6XGrPEGOZNOXkAMz5GY9UXWudkuOlkDR9mIGgjwtcojq%2B6YAiczXzYVKBlVwbleOVDhJu6XOH5cwPWLVMJK04nijHK2qD8x23HKkykxSHMQz%2F84r0GKBoyPsUywibOKDbXnG2HyvXX4ZosRpavgRoVXWuZ5%2Fhq5WQhQXMjc19j7KlcGNKVHhzt%2BEofs9PhNzqipJeGmi42&X-Amz-Signature=1f5bb067ae26bc10828197a22fd7568ddf64bd4c7dd5f33540eaa8ad1879bdfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3YHBJH2%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDIBGEGOvHpfFcun56OowAIrlCR7muorjiMsVfhvU5t5gIhANMj8y23UXx4VwVPH5bPpVArx6JY2GJhd%2B0voCjyQjArKv8DCE4QABoMNjM3NDIzMTgzODA1IgwJ6yUY3joCInNOyOsq3AOuynPwiCQomoC2rWJ4M36bslJ%2FJhx%2B86AAWL%2BIor8J%2BCbbRlp2W8VG5wejpiq4aheJJBys59bsIv1AnDR%2FZr9FRyFJ4crc8d023lOv4Gt3v8Z7kk8vtLv4JapbMovUaycwtdn8k%2BiB9wFXfXyx5w7UuRmzX2xKsDhwsi1fcuxGM4U6lwJkctuUeOW2JQ1hcTDe1GKxdXfu7OcuU9S4TYok2c22L0z%2F185FR2KDqooM5P6IdKbGmFTICwMnm0WEJVVLey4AneP0rTh61231b3Hp5WhLAAgauQB0u8jtR4gFOgiPFYAT9wRUfV42MBZx3545qm0P4CGO2ebrTDZQeKnSO%2F6N66wysrg22kOfbXyUSIWesPnMNv%2BNqTgzSiV9GvfvWmB0Q%2BYuBGUhcuaY96QOi7IdSV9jbz4paaAA8Xbv6A9VThOSuWv0PR%2B4VOfWrD%2BIOvtAfnxzDod5gPMrhwGsZtfCwp8HYrJtX%2FlmThSWB1f4xWHMuhERq2cjpsF5qPRJfRU7YkUvV3EEg1L6o%2Fbl2IMAnH%2FDXoxPzWHQD8D6mGVd67AZoChr51WREYbyqpVSM%2FAKIkZgJPu2unB%2FfF985m8lCq5g1wy%2B1QhaMu6vqgvn0dL%2FsIPO6vZ2vjD40I%2FEBjqkAQHiBmgXqp5FscdaKE6XGrPEGOZNOXkAMz5GY9UXWudkuOlkDR9mIGgjwtcojq%2B6YAiczXzYVKBlVwbleOVDhJu6XOH5cwPWLVMJK04nijHK2qD8x23HKkykxSHMQz%2F84r0GKBoyPsUywibOKDbXnG2HyvXX4ZosRpavgRoVXWuZ5%2Fhq5WQhQXMjc19j7KlcGNKVHhzt%2BEofs9PhNzqipJeGmi42&X-Amz-Signature=6d5814b13df3ae8eccd7320f2820655000832e170e5f2a2b6e399d5a15c0316c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3YHBJH2%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDIBGEGOvHpfFcun56OowAIrlCR7muorjiMsVfhvU5t5gIhANMj8y23UXx4VwVPH5bPpVArx6JY2GJhd%2B0voCjyQjArKv8DCE4QABoMNjM3NDIzMTgzODA1IgwJ6yUY3joCInNOyOsq3AOuynPwiCQomoC2rWJ4M36bslJ%2FJhx%2B86AAWL%2BIor8J%2BCbbRlp2W8VG5wejpiq4aheJJBys59bsIv1AnDR%2FZr9FRyFJ4crc8d023lOv4Gt3v8Z7kk8vtLv4JapbMovUaycwtdn8k%2BiB9wFXfXyx5w7UuRmzX2xKsDhwsi1fcuxGM4U6lwJkctuUeOW2JQ1hcTDe1GKxdXfu7OcuU9S4TYok2c22L0z%2F185FR2KDqooM5P6IdKbGmFTICwMnm0WEJVVLey4AneP0rTh61231b3Hp5WhLAAgauQB0u8jtR4gFOgiPFYAT9wRUfV42MBZx3545qm0P4CGO2ebrTDZQeKnSO%2F6N66wysrg22kOfbXyUSIWesPnMNv%2BNqTgzSiV9GvfvWmB0Q%2BYuBGUhcuaY96QOi7IdSV9jbz4paaAA8Xbv6A9VThOSuWv0PR%2B4VOfWrD%2BIOvtAfnxzDod5gPMrhwGsZtfCwp8HYrJtX%2FlmThSWB1f4xWHMuhERq2cjpsF5qPRJfRU7YkUvV3EEg1L6o%2Fbl2IMAnH%2FDXoxPzWHQD8D6mGVd67AZoChr51WREYbyqpVSM%2FAKIkZgJPu2unB%2FfF985m8lCq5g1wy%2B1QhaMu6vqgvn0dL%2FsIPO6vZ2vjD40I%2FEBjqkAQHiBmgXqp5FscdaKE6XGrPEGOZNOXkAMz5GY9UXWudkuOlkDR9mIGgjwtcojq%2B6YAiczXzYVKBlVwbleOVDhJu6XOH5cwPWLVMJK04nijHK2qD8x23HKkykxSHMQz%2F84r0GKBoyPsUywibOKDbXnG2HyvXX4ZosRpavgRoVXWuZ5%2Fhq5WQhQXMjc19j7KlcGNKVHhzt%2BEofs9PhNzqipJeGmi42&X-Amz-Signature=d3b910787e2bfc7269b7a74da0485182ce299a9c0bba64d73e5230caaf6924f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3YHBJH2%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDIBGEGOvHpfFcun56OowAIrlCR7muorjiMsVfhvU5t5gIhANMj8y23UXx4VwVPH5bPpVArx6JY2GJhd%2B0voCjyQjArKv8DCE4QABoMNjM3NDIzMTgzODA1IgwJ6yUY3joCInNOyOsq3AOuynPwiCQomoC2rWJ4M36bslJ%2FJhx%2B86AAWL%2BIor8J%2BCbbRlp2W8VG5wejpiq4aheJJBys59bsIv1AnDR%2FZr9FRyFJ4crc8d023lOv4Gt3v8Z7kk8vtLv4JapbMovUaycwtdn8k%2BiB9wFXfXyx5w7UuRmzX2xKsDhwsi1fcuxGM4U6lwJkctuUeOW2JQ1hcTDe1GKxdXfu7OcuU9S4TYok2c22L0z%2F185FR2KDqooM5P6IdKbGmFTICwMnm0WEJVVLey4AneP0rTh61231b3Hp5WhLAAgauQB0u8jtR4gFOgiPFYAT9wRUfV42MBZx3545qm0P4CGO2ebrTDZQeKnSO%2F6N66wysrg22kOfbXyUSIWesPnMNv%2BNqTgzSiV9GvfvWmB0Q%2BYuBGUhcuaY96QOi7IdSV9jbz4paaAA8Xbv6A9VThOSuWv0PR%2B4VOfWrD%2BIOvtAfnxzDod5gPMrhwGsZtfCwp8HYrJtX%2FlmThSWB1f4xWHMuhERq2cjpsF5qPRJfRU7YkUvV3EEg1L6o%2Fbl2IMAnH%2FDXoxPzWHQD8D6mGVd67AZoChr51WREYbyqpVSM%2FAKIkZgJPu2unB%2FfF985m8lCq5g1wy%2B1QhaMu6vqgvn0dL%2FsIPO6vZ2vjD40I%2FEBjqkAQHiBmgXqp5FscdaKE6XGrPEGOZNOXkAMz5GY9UXWudkuOlkDR9mIGgjwtcojq%2B6YAiczXzYVKBlVwbleOVDhJu6XOH5cwPWLVMJK04nijHK2qD8x23HKkykxSHMQz%2F84r0GKBoyPsUywibOKDbXnG2HyvXX4ZosRpavgRoVXWuZ5%2Fhq5WQhQXMjc19j7KlcGNKVHhzt%2BEofs9PhNzqipJeGmi42&X-Amz-Signature=87b10c4d9f30e9b50038870cd96b227a6be7f78f5d68901ce9889ea4367b32a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3YHBJH2%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDIBGEGOvHpfFcun56OowAIrlCR7muorjiMsVfhvU5t5gIhANMj8y23UXx4VwVPH5bPpVArx6JY2GJhd%2B0voCjyQjArKv8DCE4QABoMNjM3NDIzMTgzODA1IgwJ6yUY3joCInNOyOsq3AOuynPwiCQomoC2rWJ4M36bslJ%2FJhx%2B86AAWL%2BIor8J%2BCbbRlp2W8VG5wejpiq4aheJJBys59bsIv1AnDR%2FZr9FRyFJ4crc8d023lOv4Gt3v8Z7kk8vtLv4JapbMovUaycwtdn8k%2BiB9wFXfXyx5w7UuRmzX2xKsDhwsi1fcuxGM4U6lwJkctuUeOW2JQ1hcTDe1GKxdXfu7OcuU9S4TYok2c22L0z%2F185FR2KDqooM5P6IdKbGmFTICwMnm0WEJVVLey4AneP0rTh61231b3Hp5WhLAAgauQB0u8jtR4gFOgiPFYAT9wRUfV42MBZx3545qm0P4CGO2ebrTDZQeKnSO%2F6N66wysrg22kOfbXyUSIWesPnMNv%2BNqTgzSiV9GvfvWmB0Q%2BYuBGUhcuaY96QOi7IdSV9jbz4paaAA8Xbv6A9VThOSuWv0PR%2B4VOfWrD%2BIOvtAfnxzDod5gPMrhwGsZtfCwp8HYrJtX%2FlmThSWB1f4xWHMuhERq2cjpsF5qPRJfRU7YkUvV3EEg1L6o%2Fbl2IMAnH%2FDXoxPzWHQD8D6mGVd67AZoChr51WREYbyqpVSM%2FAKIkZgJPu2unB%2FfF985m8lCq5g1wy%2B1QhaMu6vqgvn0dL%2FsIPO6vZ2vjD40I%2FEBjqkAQHiBmgXqp5FscdaKE6XGrPEGOZNOXkAMz5GY9UXWudkuOlkDR9mIGgjwtcojq%2B6YAiczXzYVKBlVwbleOVDhJu6XOH5cwPWLVMJK04nijHK2qD8x23HKkykxSHMQz%2F84r0GKBoyPsUywibOKDbXnG2HyvXX4ZosRpavgRoVXWuZ5%2Fhq5WQhQXMjc19j7KlcGNKVHhzt%2BEofs9PhNzqipJeGmi42&X-Amz-Signature=29e5531f57359783d3d77700def44b227816fc12f2e70a83e361920d5fd71553&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3YHBJH2%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDIBGEGOvHpfFcun56OowAIrlCR7muorjiMsVfhvU5t5gIhANMj8y23UXx4VwVPH5bPpVArx6JY2GJhd%2B0voCjyQjArKv8DCE4QABoMNjM3NDIzMTgzODA1IgwJ6yUY3joCInNOyOsq3AOuynPwiCQomoC2rWJ4M36bslJ%2FJhx%2B86AAWL%2BIor8J%2BCbbRlp2W8VG5wejpiq4aheJJBys59bsIv1AnDR%2FZr9FRyFJ4crc8d023lOv4Gt3v8Z7kk8vtLv4JapbMovUaycwtdn8k%2BiB9wFXfXyx5w7UuRmzX2xKsDhwsi1fcuxGM4U6lwJkctuUeOW2JQ1hcTDe1GKxdXfu7OcuU9S4TYok2c22L0z%2F185FR2KDqooM5P6IdKbGmFTICwMnm0WEJVVLey4AneP0rTh61231b3Hp5WhLAAgauQB0u8jtR4gFOgiPFYAT9wRUfV42MBZx3545qm0P4CGO2ebrTDZQeKnSO%2F6N66wysrg22kOfbXyUSIWesPnMNv%2BNqTgzSiV9GvfvWmB0Q%2BYuBGUhcuaY96QOi7IdSV9jbz4paaAA8Xbv6A9VThOSuWv0PR%2B4VOfWrD%2BIOvtAfnxzDod5gPMrhwGsZtfCwp8HYrJtX%2FlmThSWB1f4xWHMuhERq2cjpsF5qPRJfRU7YkUvV3EEg1L6o%2Fbl2IMAnH%2FDXoxPzWHQD8D6mGVd67AZoChr51WREYbyqpVSM%2FAKIkZgJPu2unB%2FfF985m8lCq5g1wy%2B1QhaMu6vqgvn0dL%2FsIPO6vZ2vjD40I%2FEBjqkAQHiBmgXqp5FscdaKE6XGrPEGOZNOXkAMz5GY9UXWudkuOlkDR9mIGgjwtcojq%2B6YAiczXzYVKBlVwbleOVDhJu6XOH5cwPWLVMJK04nijHK2qD8x23HKkykxSHMQz%2F84r0GKBoyPsUywibOKDbXnG2HyvXX4ZosRpavgRoVXWuZ5%2Fhq5WQhQXMjc19j7KlcGNKVHhzt%2BEofs9PhNzqipJeGmi42&X-Amz-Signature=1c0816e4c02f9cc316e223a6028de1f2d0b9c930fb5dcdcacca4d5b3ef74fb44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
