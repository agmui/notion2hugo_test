---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-08-02T09:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-08-02T09:48:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 155
toc: false
icon: ""
---

[Good video explaining slam](https://www.youtube.com/watch?v=ZaiA3hWaRzE&t=979s)

[https://www.youtube.com/watch?v=saVZtgPyyJQ](https://www.youtube.com/watch?v=saVZtgPyyJQ)

<details>
      <summary>What is slam?</summary>
      TODO:
  </details>

ROS has a package for SLAM called `slam toolbox`.

If you have a Lidar and Odometry it is able to scan and map the room out.

---

## Install

```bash
sudo apt install ros-$ROS_DISTRO-slam-toolbox
```

{{% alert icon=”👾” context="success" %}}

### **New Node** **`online_async_launch`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JUUQMSX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvKF60zRaFjfmauVWORQrDZMkJcGvLbBJyEsmQvdjgFAiBhmwpnipgJSYjpjDZ0ZWoMeNZH8JkmwxlzG1B9UZYZwir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMZSrAjtlt%2FFSqRlJ1KtwDUlpSp7eEM15%2FcV3nXl8YSTJHKs%2BYYp8zdhp66l2U4RaV7IXIxmmpPYDFdOlwmZjL4t1yBCACBzT2zuYeyxae8QkaToIxjJRpgL%2Bhw7G15epbmj58qqFIUdZjSXxBZ5kilwn%2FtsrJllqqNcLL%2FiMTH3n8esiZfa5omG9RrtvWzgg6Yq01l53appD%2F7WoTLvNaEDfujsROZkB0SYupiQim276nBnO2CB6UDr9LDssZ%2BiyJyEMLooO2MfSAKXNIa3SO0R%2BK13eV4L3fo3N0kBfKpy4jcpE7WYV6LrSD%2FpM757%2BYUAH%2FmoDKdc2czd982VUHjvxjSLd%2BK%2FaY%2BBGxP5lG3cjGFkoCWkXEPmY1Gl9KIwwp2S78iIdUV%2BqPnHMYFklCvrDQ8xGq00Bgy5HXaU%2FmlJdiuBMn%2FRSiGOmgUQpGQAM%2BMI3%2BN5BdaGKocO%2BxgLv1psmCj5iAsRXQWBaLQn8lZDTBTYl2euOao2SeEXbYpov6ZpV2hPWRpvXxhQ2Xi9PRR7ZZlkjDI5NM7HVeB2iE78iW2C8RgOamdwRuJ0F7cdaoRRFOb%2FZVpG3GyWMIoPzdT7wUsNWI7eO%2Fu7eubX1xf27RBKeqQPQWyZYW7ZnGB8LMwhx2mVeUViNKmlgw%2FvjwxAY6pgFqvhx%2FGeUuDr4VLSpsGUDy94UuFegRwGgEV%2Ff9NXjpK4gv3ve5Y7UqqpHzWbsBYX5YD86EvWnGov8c%2BuAzwkxW5Urp35aBpHDPrbS4ZRBsCZ8LEd9pn%2B%2FUQYIG8CYBEOwfCpwNTS0WWAW912mpFxUZVEJqSHdkgSiYShx8jTDqviHFATiNLtQtADmWZMRhSx4zljwLoaRGQZ1cd1fJgbcQx7mz%2Fazp&X-Amz-Signature=6c97dcb07fa96e8fd577755554ba66b849881998ae985b85457374b835fb50d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**               |
| -------- | ---------------------- |
| `/tf`    | map ⇒ odom             |
| `/map`   | nav_msgs/OccupancyGrid |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**           | **Type** |
| ------------------ | -------- |
| `slam_params_file` | file     |
| `use_sim_time`     | bool     |

{{< /table >}}

#### description:

Given a `/scan` from a Lidar it outputs a map

{{% /alert %}}

# Simulating SLAM in Gazebo

To run slam just run the node: `ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true`

Remember to turn on Gazebo again:

```python
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        # my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        gz_server,
        ros_gz_bridge,
        spawn_entity,
        
        # lidar_node # lidar for physical setup 
    ])
```

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

To know if `slam_toolbox` ran correctly, in logs wait for “Registering sensor”

### Viewing scanned SLAM map

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JUUQMSX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvKF60zRaFjfmauVWORQrDZMkJcGvLbBJyEsmQvdjgFAiBhmwpnipgJSYjpjDZ0ZWoMeNZH8JkmwxlzG1B9UZYZwir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMZSrAjtlt%2FFSqRlJ1KtwDUlpSp7eEM15%2FcV3nXl8YSTJHKs%2BYYp8zdhp66l2U4RaV7IXIxmmpPYDFdOlwmZjL4t1yBCACBzT2zuYeyxae8QkaToIxjJRpgL%2Bhw7G15epbmj58qqFIUdZjSXxBZ5kilwn%2FtsrJllqqNcLL%2FiMTH3n8esiZfa5omG9RrtvWzgg6Yq01l53appD%2F7WoTLvNaEDfujsROZkB0SYupiQim276nBnO2CB6UDr9LDssZ%2BiyJyEMLooO2MfSAKXNIa3SO0R%2BK13eV4L3fo3N0kBfKpy4jcpE7WYV6LrSD%2FpM757%2BYUAH%2FmoDKdc2czd982VUHjvxjSLd%2BK%2FaY%2BBGxP5lG3cjGFkoCWkXEPmY1Gl9KIwwp2S78iIdUV%2BqPnHMYFklCvrDQ8xGq00Bgy5HXaU%2FmlJdiuBMn%2FRSiGOmgUQpGQAM%2BMI3%2BN5BdaGKocO%2BxgLv1psmCj5iAsRXQWBaLQn8lZDTBTYl2euOao2SeEXbYpov6ZpV2hPWRpvXxhQ2Xi9PRR7ZZlkjDI5NM7HVeB2iE78iW2C8RgOamdwRuJ0F7cdaoRRFOb%2FZVpG3GyWMIoPzdT7wUsNWI7eO%2Fu7eubX1xf27RBKeqQPQWyZYW7ZnGB8LMwhx2mVeUViNKmlgw%2FvjwxAY6pgFqvhx%2FGeUuDr4VLSpsGUDy94UuFegRwGgEV%2Ff9NXjpK4gv3ve5Y7UqqpHzWbsBYX5YD86EvWnGov8c%2BuAzwkxW5Urp35aBpHDPrbS4ZRBsCZ8LEd9pn%2B%2FUQYIG8CYBEOwfCpwNTS0WWAW912mpFxUZVEJqSHdkgSiYShx8jTDqviHFATiNLtQtADmWZMRhSx4zljwLoaRGQZ1cd1fJgbcQx7mz%2Fazp&X-Amz-Signature=8a04f039b74f0a90332377b14cf40cb9862873b003fe8696b42428d253117fa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JUUQMSX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvKF60zRaFjfmauVWORQrDZMkJcGvLbBJyEsmQvdjgFAiBhmwpnipgJSYjpjDZ0ZWoMeNZH8JkmwxlzG1B9UZYZwir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMZSrAjtlt%2FFSqRlJ1KtwDUlpSp7eEM15%2FcV3nXl8YSTJHKs%2BYYp8zdhp66l2U4RaV7IXIxmmpPYDFdOlwmZjL4t1yBCACBzT2zuYeyxae8QkaToIxjJRpgL%2Bhw7G15epbmj58qqFIUdZjSXxBZ5kilwn%2FtsrJllqqNcLL%2FiMTH3n8esiZfa5omG9RrtvWzgg6Yq01l53appD%2F7WoTLvNaEDfujsROZkB0SYupiQim276nBnO2CB6UDr9LDssZ%2BiyJyEMLooO2MfSAKXNIa3SO0R%2BK13eV4L3fo3N0kBfKpy4jcpE7WYV6LrSD%2FpM757%2BYUAH%2FmoDKdc2czd982VUHjvxjSLd%2BK%2FaY%2BBGxP5lG3cjGFkoCWkXEPmY1Gl9KIwwp2S78iIdUV%2BqPnHMYFklCvrDQ8xGq00Bgy5HXaU%2FmlJdiuBMn%2FRSiGOmgUQpGQAM%2BMI3%2BN5BdaGKocO%2BxgLv1psmCj5iAsRXQWBaLQn8lZDTBTYl2euOao2SeEXbYpov6ZpV2hPWRpvXxhQ2Xi9PRR7ZZlkjDI5NM7HVeB2iE78iW2C8RgOamdwRuJ0F7cdaoRRFOb%2FZVpG3GyWMIoPzdT7wUsNWI7eO%2Fu7eubX1xf27RBKeqQPQWyZYW7ZnGB8LMwhx2mVeUViNKmlgw%2FvjwxAY6pgFqvhx%2FGeUuDr4VLSpsGUDy94UuFegRwGgEV%2Ff9NXjpK4gv3ve5Y7UqqpHzWbsBYX5YD86EvWnGov8c%2BuAzwkxW5Urp35aBpHDPrbS4ZRBsCZ8LEd9pn%2B%2FUQYIG8CYBEOwfCpwNTS0WWAW912mpFxUZVEJqSHdkgSiYShx8jTDqviHFATiNLtQtADmWZMRhSx4zljwLoaRGQZ1cd1fJgbcQx7mz%2Fazp&X-Amz-Signature=c45a7ced90de874845ba5b84452032ce90173c7460970874ec520374c731312d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JUUQMSX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvKF60zRaFjfmauVWORQrDZMkJcGvLbBJyEsmQvdjgFAiBhmwpnipgJSYjpjDZ0ZWoMeNZH8JkmwxlzG1B9UZYZwir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMZSrAjtlt%2FFSqRlJ1KtwDUlpSp7eEM15%2FcV3nXl8YSTJHKs%2BYYp8zdhp66l2U4RaV7IXIxmmpPYDFdOlwmZjL4t1yBCACBzT2zuYeyxae8QkaToIxjJRpgL%2Bhw7G15epbmj58qqFIUdZjSXxBZ5kilwn%2FtsrJllqqNcLL%2FiMTH3n8esiZfa5omG9RrtvWzgg6Yq01l53appD%2F7WoTLvNaEDfujsROZkB0SYupiQim276nBnO2CB6UDr9LDssZ%2BiyJyEMLooO2MfSAKXNIa3SO0R%2BK13eV4L3fo3N0kBfKpy4jcpE7WYV6LrSD%2FpM757%2BYUAH%2FmoDKdc2czd982VUHjvxjSLd%2BK%2FaY%2BBGxP5lG3cjGFkoCWkXEPmY1Gl9KIwwp2S78iIdUV%2BqPnHMYFklCvrDQ8xGq00Bgy5HXaU%2FmlJdiuBMn%2FRSiGOmgUQpGQAM%2BMI3%2BN5BdaGKocO%2BxgLv1psmCj5iAsRXQWBaLQn8lZDTBTYl2euOao2SeEXbYpov6ZpV2hPWRpvXxhQ2Xi9PRR7ZZlkjDI5NM7HVeB2iE78iW2C8RgOamdwRuJ0F7cdaoRRFOb%2FZVpG3GyWMIoPzdT7wUsNWI7eO%2Fu7eubX1xf27RBKeqQPQWyZYW7ZnGB8LMwhx2mVeUViNKmlgw%2FvjwxAY6pgFqvhx%2FGeUuDr4VLSpsGUDy94UuFegRwGgEV%2Ff9NXjpK4gv3ve5Y7UqqpHzWbsBYX5YD86EvWnGov8c%2BuAzwkxW5Urp35aBpHDPrbS4ZRBsCZ8LEd9pn%2B%2FUQYIG8CYBEOwfCpwNTS0WWAW912mpFxUZVEJqSHdkgSiYShx8jTDqviHFATiNLtQtADmWZMRhSx4zljwLoaRGQZ1cd1fJgbcQx7mz%2Fazp&X-Amz-Signature=ac69497be1b919614f05dbf10b97355b3afa8f6428a354665eddb255964b7c14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JUUQMSX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvKF60zRaFjfmauVWORQrDZMkJcGvLbBJyEsmQvdjgFAiBhmwpnipgJSYjpjDZ0ZWoMeNZH8JkmwxlzG1B9UZYZwir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMZSrAjtlt%2FFSqRlJ1KtwDUlpSp7eEM15%2FcV3nXl8YSTJHKs%2BYYp8zdhp66l2U4RaV7IXIxmmpPYDFdOlwmZjL4t1yBCACBzT2zuYeyxae8QkaToIxjJRpgL%2Bhw7G15epbmj58qqFIUdZjSXxBZ5kilwn%2FtsrJllqqNcLL%2FiMTH3n8esiZfa5omG9RrtvWzgg6Yq01l53appD%2F7WoTLvNaEDfujsROZkB0SYupiQim276nBnO2CB6UDr9LDssZ%2BiyJyEMLooO2MfSAKXNIa3SO0R%2BK13eV4L3fo3N0kBfKpy4jcpE7WYV6LrSD%2FpM757%2BYUAH%2FmoDKdc2czd982VUHjvxjSLd%2BK%2FaY%2BBGxP5lG3cjGFkoCWkXEPmY1Gl9KIwwp2S78iIdUV%2BqPnHMYFklCvrDQ8xGq00Bgy5HXaU%2FmlJdiuBMn%2FRSiGOmgUQpGQAM%2BMI3%2BN5BdaGKocO%2BxgLv1psmCj5iAsRXQWBaLQn8lZDTBTYl2euOao2SeEXbYpov6ZpV2hPWRpvXxhQ2Xi9PRR7ZZlkjDI5NM7HVeB2iE78iW2C8RgOamdwRuJ0F7cdaoRRFOb%2FZVpG3GyWMIoPzdT7wUsNWI7eO%2Fu7eubX1xf27RBKeqQPQWyZYW7ZnGB8LMwhx2mVeUViNKmlgw%2FvjwxAY6pgFqvhx%2FGeUuDr4VLSpsGUDy94UuFegRwGgEV%2Ff9NXjpK4gv3ve5Y7UqqpHzWbsBYX5YD86EvWnGov8c%2BuAzwkxW5Urp35aBpHDPrbS4ZRBsCZ8LEd9pn%2B%2FUQYIG8CYBEOwfCpwNTS0WWAW912mpFxUZVEJqSHdkgSiYShx8jTDqviHFATiNLtQtADmWZMRhSx4zljwLoaRGQZ1cd1fJgbcQx7mz%2Fazp&X-Amz-Signature=6df5446d7deab6545cd986235513a8af2f5003288b1a3284cdaaf7121d9c8133&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JUUQMSX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvKF60zRaFjfmauVWORQrDZMkJcGvLbBJyEsmQvdjgFAiBhmwpnipgJSYjpjDZ0ZWoMeNZH8JkmwxlzG1B9UZYZwir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMZSrAjtlt%2FFSqRlJ1KtwDUlpSp7eEM15%2FcV3nXl8YSTJHKs%2BYYp8zdhp66l2U4RaV7IXIxmmpPYDFdOlwmZjL4t1yBCACBzT2zuYeyxae8QkaToIxjJRpgL%2Bhw7G15epbmj58qqFIUdZjSXxBZ5kilwn%2FtsrJllqqNcLL%2FiMTH3n8esiZfa5omG9RrtvWzgg6Yq01l53appD%2F7WoTLvNaEDfujsROZkB0SYupiQim276nBnO2CB6UDr9LDssZ%2BiyJyEMLooO2MfSAKXNIa3SO0R%2BK13eV4L3fo3N0kBfKpy4jcpE7WYV6LrSD%2FpM757%2BYUAH%2FmoDKdc2czd982VUHjvxjSLd%2BK%2FaY%2BBGxP5lG3cjGFkoCWkXEPmY1Gl9KIwwp2S78iIdUV%2BqPnHMYFklCvrDQ8xGq00Bgy5HXaU%2FmlJdiuBMn%2FRSiGOmgUQpGQAM%2BMI3%2BN5BdaGKocO%2BxgLv1psmCj5iAsRXQWBaLQn8lZDTBTYl2euOao2SeEXbYpov6ZpV2hPWRpvXxhQ2Xi9PRR7ZZlkjDI5NM7HVeB2iE78iW2C8RgOamdwRuJ0F7cdaoRRFOb%2FZVpG3GyWMIoPzdT7wUsNWI7eO%2Fu7eubX1xf27RBKeqQPQWyZYW7ZnGB8LMwhx2mVeUViNKmlgw%2FvjwxAY6pgFqvhx%2FGeUuDr4VLSpsGUDy94UuFegRwGgEV%2Ff9NXjpK4gv3ve5Y7UqqpHzWbsBYX5YD86EvWnGov8c%2BuAzwkxW5Urp35aBpHDPrbS4ZRBsCZ8LEd9pn%2B%2FUQYIG8CYBEOwfCpwNTS0WWAW912mpFxUZVEJqSHdkgSiYShx8jTDqviHFATiNLtQtADmWZMRhSx4zljwLoaRGQZ1cd1fJgbcQx7mz%2Fazp&X-Amz-Signature=c452362c40cda8083e6006fe06a8627dee3ea6dd8dc2547471cc2051ee64c697&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JUUQMSX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvKF60zRaFjfmauVWORQrDZMkJcGvLbBJyEsmQvdjgFAiBhmwpnipgJSYjpjDZ0ZWoMeNZH8JkmwxlzG1B9UZYZwir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMZSrAjtlt%2FFSqRlJ1KtwDUlpSp7eEM15%2FcV3nXl8YSTJHKs%2BYYp8zdhp66l2U4RaV7IXIxmmpPYDFdOlwmZjL4t1yBCACBzT2zuYeyxae8QkaToIxjJRpgL%2Bhw7G15epbmj58qqFIUdZjSXxBZ5kilwn%2FtsrJllqqNcLL%2FiMTH3n8esiZfa5omG9RrtvWzgg6Yq01l53appD%2F7WoTLvNaEDfujsROZkB0SYupiQim276nBnO2CB6UDr9LDssZ%2BiyJyEMLooO2MfSAKXNIa3SO0R%2BK13eV4L3fo3N0kBfKpy4jcpE7WYV6LrSD%2FpM757%2BYUAH%2FmoDKdc2czd982VUHjvxjSLd%2BK%2FaY%2BBGxP5lG3cjGFkoCWkXEPmY1Gl9KIwwp2S78iIdUV%2BqPnHMYFklCvrDQ8xGq00Bgy5HXaU%2FmlJdiuBMn%2FRSiGOmgUQpGQAM%2BMI3%2BN5BdaGKocO%2BxgLv1psmCj5iAsRXQWBaLQn8lZDTBTYl2euOao2SeEXbYpov6ZpV2hPWRpvXxhQ2Xi9PRR7ZZlkjDI5NM7HVeB2iE78iW2C8RgOamdwRuJ0F7cdaoRRFOb%2FZVpG3GyWMIoPzdT7wUsNWI7eO%2Fu7eubX1xf27RBKeqQPQWyZYW7ZnGB8LMwhx2mVeUViNKmlgw%2FvjwxAY6pgFqvhx%2FGeUuDr4VLSpsGUDy94UuFegRwGgEV%2Ff9NXjpK4gv3ve5Y7UqqpHzWbsBYX5YD86EvWnGov8c%2BuAzwkxW5Urp35aBpHDPrbS4ZRBsCZ8LEd9pn%2B%2FUQYIG8CYBEOwfCpwNTS0WWAW912mpFxUZVEJqSHdkgSiYShx8jTDqviHFATiNLtQtADmWZMRhSx4zljwLoaRGQZ1cd1fJgbcQx7mz%2Fazp&X-Amz-Signature=7057fc76e0dadbe3b9864b1c5b8a0919bd7db79d113ba21e97d9314f4ffb4e31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to turn off Gazebo again:

```python
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
    ])
```

in 3 different terminals run:

```xml
ros2 launch mbot_pkg display.launch.py
```

```xml
ros2 launch slam_toolbox online_async_launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

drive around with `teleop_twist_keyboard` to scan more of the map

## Adding `slam_toolbox` to launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JUUQMSX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvKF60zRaFjfmauVWORQrDZMkJcGvLbBJyEsmQvdjgFAiBhmwpnipgJSYjpjDZ0ZWoMeNZH8JkmwxlzG1B9UZYZwir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMZSrAjtlt%2FFSqRlJ1KtwDUlpSp7eEM15%2FcV3nXl8YSTJHKs%2BYYp8zdhp66l2U4RaV7IXIxmmpPYDFdOlwmZjL4t1yBCACBzT2zuYeyxae8QkaToIxjJRpgL%2Bhw7G15epbmj58qqFIUdZjSXxBZ5kilwn%2FtsrJllqqNcLL%2FiMTH3n8esiZfa5omG9RrtvWzgg6Yq01l53appD%2F7WoTLvNaEDfujsROZkB0SYupiQim276nBnO2CB6UDr9LDssZ%2BiyJyEMLooO2MfSAKXNIa3SO0R%2BK13eV4L3fo3N0kBfKpy4jcpE7WYV6LrSD%2FpM757%2BYUAH%2FmoDKdc2czd982VUHjvxjSLd%2BK%2FaY%2BBGxP5lG3cjGFkoCWkXEPmY1Gl9KIwwp2S78iIdUV%2BqPnHMYFklCvrDQ8xGq00Bgy5HXaU%2FmlJdiuBMn%2FRSiGOmgUQpGQAM%2BMI3%2BN5BdaGKocO%2BxgLv1psmCj5iAsRXQWBaLQn8lZDTBTYl2euOao2SeEXbYpov6ZpV2hPWRpvXxhQ2Xi9PRR7ZZlkjDI5NM7HVeB2iE78iW2C8RgOamdwRuJ0F7cdaoRRFOb%2FZVpG3GyWMIoPzdT7wUsNWI7eO%2Fu7eubX1xf27RBKeqQPQWyZYW7ZnGB8LMwhx2mVeUViNKmlgw%2FvjwxAY6pgFqvhx%2FGeUuDr4VLSpsGUDy94UuFegRwGgEV%2Ff9NXjpK4gv3ve5Y7UqqpHzWbsBYX5YD86EvWnGov8c%2BuAzwkxW5Urp35aBpHDPrbS4ZRBsCZ8LEd9pn%2B%2FUQYIG8CYBEOwfCpwNTS0WWAW912mpFxUZVEJqSHdkgSiYShx8jTDqviHFATiNLtQtADmWZMRhSx4zljwLoaRGQZ1cd1fJgbcQx7mz%2Fazp&X-Amz-Signature=9bff1c3b5e5fbe41397ef165f23bc0bfb641f56e4f7165ba671ff9f54df94593&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JUUQMSX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvKF60zRaFjfmauVWORQrDZMkJcGvLbBJyEsmQvdjgFAiBhmwpnipgJSYjpjDZ0ZWoMeNZH8JkmwxlzG1B9UZYZwir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMZSrAjtlt%2FFSqRlJ1KtwDUlpSp7eEM15%2FcV3nXl8YSTJHKs%2BYYp8zdhp66l2U4RaV7IXIxmmpPYDFdOlwmZjL4t1yBCACBzT2zuYeyxae8QkaToIxjJRpgL%2Bhw7G15epbmj58qqFIUdZjSXxBZ5kilwn%2FtsrJllqqNcLL%2FiMTH3n8esiZfa5omG9RrtvWzgg6Yq01l53appD%2F7WoTLvNaEDfujsROZkB0SYupiQim276nBnO2CB6UDr9LDssZ%2BiyJyEMLooO2MfSAKXNIa3SO0R%2BK13eV4L3fo3N0kBfKpy4jcpE7WYV6LrSD%2FpM757%2BYUAH%2FmoDKdc2czd982VUHjvxjSLd%2BK%2FaY%2BBGxP5lG3cjGFkoCWkXEPmY1Gl9KIwwp2S78iIdUV%2BqPnHMYFklCvrDQ8xGq00Bgy5HXaU%2FmlJdiuBMn%2FRSiGOmgUQpGQAM%2BMI3%2BN5BdaGKocO%2BxgLv1psmCj5iAsRXQWBaLQn8lZDTBTYl2euOao2SeEXbYpov6ZpV2hPWRpvXxhQ2Xi9PRR7ZZlkjDI5NM7HVeB2iE78iW2C8RgOamdwRuJ0F7cdaoRRFOb%2FZVpG3GyWMIoPzdT7wUsNWI7eO%2Fu7eubX1xf27RBKeqQPQWyZYW7ZnGB8LMwhx2mVeUViNKmlgw%2FvjwxAY6pgFqvhx%2FGeUuDr4VLSpsGUDy94UuFegRwGgEV%2Ff9NXjpK4gv3ve5Y7UqqpHzWbsBYX5YD86EvWnGov8c%2BuAzwkxW5Urp35aBpHDPrbS4ZRBsCZ8LEd9pn%2B%2FUQYIG8CYBEOwfCpwNTS0WWAW912mpFxUZVEJqSHdkgSiYShx8jTDqviHFATiNLtQtADmWZMRhSx4zljwLoaRGQZ1cd1fJgbcQx7mz%2Fazp&X-Amz-Signature=819bfac4ff929f162fa571a0db5daf8e5fbdb03831d06f7ab49454cae99412dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

```python

   
def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config
    bridge_config_path = os.path.join(pkg_share, 'config', 'bridge_config.yaml') # gets location of gazebo config
    world_path = os.path.join(pkg_share, 'world', 'my_world.sdf') # gets the gazebo world file
    slam_yaml_path = os.path.join(pkg_share, 'config', 'slam.yaml') # gets the slam config file
    
    ...
    
    slam_toolbox_node = IncludeLaunchDescription(
        PythonLaunchDescriptionSource([
            FindPackageShare("slam_toolbox"), '/launch', '/online_async_launch.py']),
        launch_arguments={
            'slam_params_file': slam_yaml_path,
            'use_sim_time': LaunchConfiguration('use_sim_time'),
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
        
        slam_toolbox_node #  providing the map => odom transform.
    ])
```

# Saving map

`slam_toolbox` also has the feature where you can pre scan a map and save it to load it again.

Press on Panels → Add New Panel

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JUUQMSX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvKF60zRaFjfmauVWORQrDZMkJcGvLbBJyEsmQvdjgFAiBhmwpnipgJSYjpjDZ0ZWoMeNZH8JkmwxlzG1B9UZYZwir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMZSrAjtlt%2FFSqRlJ1KtwDUlpSp7eEM15%2FcV3nXl8YSTJHKs%2BYYp8zdhp66l2U4RaV7IXIxmmpPYDFdOlwmZjL4t1yBCACBzT2zuYeyxae8QkaToIxjJRpgL%2Bhw7G15epbmj58qqFIUdZjSXxBZ5kilwn%2FtsrJllqqNcLL%2FiMTH3n8esiZfa5omG9RrtvWzgg6Yq01l53appD%2F7WoTLvNaEDfujsROZkB0SYupiQim276nBnO2CB6UDr9LDssZ%2BiyJyEMLooO2MfSAKXNIa3SO0R%2BK13eV4L3fo3N0kBfKpy4jcpE7WYV6LrSD%2FpM757%2BYUAH%2FmoDKdc2czd982VUHjvxjSLd%2BK%2FaY%2BBGxP5lG3cjGFkoCWkXEPmY1Gl9KIwwp2S78iIdUV%2BqPnHMYFklCvrDQ8xGq00Bgy5HXaU%2FmlJdiuBMn%2FRSiGOmgUQpGQAM%2BMI3%2BN5BdaGKocO%2BxgLv1psmCj5iAsRXQWBaLQn8lZDTBTYl2euOao2SeEXbYpov6ZpV2hPWRpvXxhQ2Xi9PRR7ZZlkjDI5NM7HVeB2iE78iW2C8RgOamdwRuJ0F7cdaoRRFOb%2FZVpG3GyWMIoPzdT7wUsNWI7eO%2Fu7eubX1xf27RBKeqQPQWyZYW7ZnGB8LMwhx2mVeUViNKmlgw%2FvjwxAY6pgFqvhx%2FGeUuDr4VLSpsGUDy94UuFegRwGgEV%2Ff9NXjpK4gv3ve5Y7UqqpHzWbsBYX5YD86EvWnGov8c%2BuAzwkxW5Urp35aBpHDPrbS4ZRBsCZ8LEd9pn%2B%2FUQYIG8CYBEOwfCpwNTS0WWAW912mpFxUZVEJqSHdkgSiYShx8jTDqviHFATiNLtQtADmWZMRhSx4zljwLoaRGQZ1cd1fJgbcQx7mz%2Fazp&X-Amz-Signature=97a5c3dffb4fa90b8b59bc84756498fe8396c1a7d2133b54b1ac417265d87f14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JUUQMSX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvKF60zRaFjfmauVWORQrDZMkJcGvLbBJyEsmQvdjgFAiBhmwpnipgJSYjpjDZ0ZWoMeNZH8JkmwxlzG1B9UZYZwir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMZSrAjtlt%2FFSqRlJ1KtwDUlpSp7eEM15%2FcV3nXl8YSTJHKs%2BYYp8zdhp66l2U4RaV7IXIxmmpPYDFdOlwmZjL4t1yBCACBzT2zuYeyxae8QkaToIxjJRpgL%2Bhw7G15epbmj58qqFIUdZjSXxBZ5kilwn%2FtsrJllqqNcLL%2FiMTH3n8esiZfa5omG9RrtvWzgg6Yq01l53appD%2F7WoTLvNaEDfujsROZkB0SYupiQim276nBnO2CB6UDr9LDssZ%2BiyJyEMLooO2MfSAKXNIa3SO0R%2BK13eV4L3fo3N0kBfKpy4jcpE7WYV6LrSD%2FpM757%2BYUAH%2FmoDKdc2czd982VUHjvxjSLd%2BK%2FaY%2BBGxP5lG3cjGFkoCWkXEPmY1Gl9KIwwp2S78iIdUV%2BqPnHMYFklCvrDQ8xGq00Bgy5HXaU%2FmlJdiuBMn%2FRSiGOmgUQpGQAM%2BMI3%2BN5BdaGKocO%2BxgLv1psmCj5iAsRXQWBaLQn8lZDTBTYl2euOao2SeEXbYpov6ZpV2hPWRpvXxhQ2Xi9PRR7ZZlkjDI5NM7HVeB2iE78iW2C8RgOamdwRuJ0F7cdaoRRFOb%2FZVpG3GyWMIoPzdT7wUsNWI7eO%2Fu7eubX1xf27RBKeqQPQWyZYW7ZnGB8LMwhx2mVeUViNKmlgw%2FvjwxAY6pgFqvhx%2FGeUuDr4VLSpsGUDy94UuFegRwGgEV%2Ff9NXjpK4gv3ve5Y7UqqpHzWbsBYX5YD86EvWnGov8c%2BuAzwkxW5Urp35aBpHDPrbS4ZRBsCZ8LEd9pn%2B%2FUQYIG8CYBEOwfCpwNTS0WWAW912mpFxUZVEJqSHdkgSiYShx8jTDqviHFATiNLtQtADmWZMRhSx4zljwLoaRGQZ1cd1fJgbcQx7mz%2Fazp&X-Amz-Signature=42b3474c6e7b4f82663310908549929ba27df69da64a9fcaee21ca7a559f74e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JUUQMSX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvKF60zRaFjfmauVWORQrDZMkJcGvLbBJyEsmQvdjgFAiBhmwpnipgJSYjpjDZ0ZWoMeNZH8JkmwxlzG1B9UZYZwir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMZSrAjtlt%2FFSqRlJ1KtwDUlpSp7eEM15%2FcV3nXl8YSTJHKs%2BYYp8zdhp66l2U4RaV7IXIxmmpPYDFdOlwmZjL4t1yBCACBzT2zuYeyxae8QkaToIxjJRpgL%2Bhw7G15epbmj58qqFIUdZjSXxBZ5kilwn%2FtsrJllqqNcLL%2FiMTH3n8esiZfa5omG9RrtvWzgg6Yq01l53appD%2F7WoTLvNaEDfujsROZkB0SYupiQim276nBnO2CB6UDr9LDssZ%2BiyJyEMLooO2MfSAKXNIa3SO0R%2BK13eV4L3fo3N0kBfKpy4jcpE7WYV6LrSD%2FpM757%2BYUAH%2FmoDKdc2czd982VUHjvxjSLd%2BK%2FaY%2BBGxP5lG3cjGFkoCWkXEPmY1Gl9KIwwp2S78iIdUV%2BqPnHMYFklCvrDQ8xGq00Bgy5HXaU%2FmlJdiuBMn%2FRSiGOmgUQpGQAM%2BMI3%2BN5BdaGKocO%2BxgLv1psmCj5iAsRXQWBaLQn8lZDTBTYl2euOao2SeEXbYpov6ZpV2hPWRpvXxhQ2Xi9PRR7ZZlkjDI5NM7HVeB2iE78iW2C8RgOamdwRuJ0F7cdaoRRFOb%2FZVpG3GyWMIoPzdT7wUsNWI7eO%2Fu7eubX1xf27RBKeqQPQWyZYW7ZnGB8LMwhx2mVeUViNKmlgw%2FvjwxAY6pgFqvhx%2FGeUuDr4VLSpsGUDy94UuFegRwGgEV%2Ff9NXjpK4gv3ve5Y7UqqpHzWbsBYX5YD86EvWnGov8c%2BuAzwkxW5Urp35aBpHDPrbS4ZRBsCZ8LEd9pn%2B%2FUQYIG8CYBEOwfCpwNTS0WWAW912mpFxUZVEJqSHdkgSiYShx8jTDqviHFATiNLtQtADmWZMRhSx4zljwLoaRGQZ1cd1fJgbcQx7mz%2Fazp&X-Amz-Signature=8a32fa8ebe76a8bdb3fea70eca929a9f8edd1943608e455be166680cf9e195c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JUUQMSX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvKF60zRaFjfmauVWORQrDZMkJcGvLbBJyEsmQvdjgFAiBhmwpnipgJSYjpjDZ0ZWoMeNZH8JkmwxlzG1B9UZYZwir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMZSrAjtlt%2FFSqRlJ1KtwDUlpSp7eEM15%2FcV3nXl8YSTJHKs%2BYYp8zdhp66l2U4RaV7IXIxmmpPYDFdOlwmZjL4t1yBCACBzT2zuYeyxae8QkaToIxjJRpgL%2Bhw7G15epbmj58qqFIUdZjSXxBZ5kilwn%2FtsrJllqqNcLL%2FiMTH3n8esiZfa5omG9RrtvWzgg6Yq01l53appD%2F7WoTLvNaEDfujsROZkB0SYupiQim276nBnO2CB6UDr9LDssZ%2BiyJyEMLooO2MfSAKXNIa3SO0R%2BK13eV4L3fo3N0kBfKpy4jcpE7WYV6LrSD%2FpM757%2BYUAH%2FmoDKdc2czd982VUHjvxjSLd%2BK%2FaY%2BBGxP5lG3cjGFkoCWkXEPmY1Gl9KIwwp2S78iIdUV%2BqPnHMYFklCvrDQ8xGq00Bgy5HXaU%2FmlJdiuBMn%2FRSiGOmgUQpGQAM%2BMI3%2BN5BdaGKocO%2BxgLv1psmCj5iAsRXQWBaLQn8lZDTBTYl2euOao2SeEXbYpov6ZpV2hPWRpvXxhQ2Xi9PRR7ZZlkjDI5NM7HVeB2iE78iW2C8RgOamdwRuJ0F7cdaoRRFOb%2FZVpG3GyWMIoPzdT7wUsNWI7eO%2Fu7eubX1xf27RBKeqQPQWyZYW7ZnGB8LMwhx2mVeUViNKmlgw%2FvjwxAY6pgFqvhx%2FGeUuDr4VLSpsGUDy94UuFegRwGgEV%2Ff9NXjpK4gv3ve5Y7UqqpHzWbsBYX5YD86EvWnGov8c%2BuAzwkxW5Urp35aBpHDPrbS4ZRBsCZ8LEd9pn%2B%2FUQYIG8CYBEOwfCpwNTS0WWAW912mpFxUZVEJqSHdkgSiYShx8jTDqviHFATiNLtQtADmWZMRhSx4zljwLoaRGQZ1cd1fJgbcQx7mz%2Fazp&X-Amz-Signature=dce96e930bf7b946e685ef89254b6b5597fb31a9079b12e7624f5fdac25d619b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored the 4 generated files

```yaml
slam_toolbox:
  ros__parameters:

    # Plugin params
    solver_plugin: solver_plugins::CeresSolver
    ceres_linear_solver: SPARSE_NORMAL_CHOLESKY
    ceres_preconditioner: SCHUR_JACOBI
    ceres_trust_strategy: LEVENBERG_MARQUARDT
    ceres_dogleg_type: TRADITIONAL_DOGLEG
    ceres_loss_function: None

    # ROS Parameters
    odom_frame: odom
    map_frame: map
    base_frame: base_footprint
    scan_topic: /scan
    use_map_saver: true
    # mode: mapping 
    mode: localization 

    # if you'd like to immediately start continuing a map at a given pose
    # or at the dock, but they are mutually exclusive, if pose is given
    # will use pose
    map_file_name: /path/to/map/test # NOTE: no file extension
    # map_start_pose: [0.0, 0.0, 0.0]
    # map_start_at_dock: true

    debug_logging: false
```

Running the launch file again you will see your map preload into rviz

```yaml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JUUQMSX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvKF60zRaFjfmauVWORQrDZMkJcGvLbBJyEsmQvdjgFAiBhmwpnipgJSYjpjDZ0ZWoMeNZH8JkmwxlzG1B9UZYZwir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMZSrAjtlt%2FFSqRlJ1KtwDUlpSp7eEM15%2FcV3nXl8YSTJHKs%2BYYp8zdhp66l2U4RaV7IXIxmmpPYDFdOlwmZjL4t1yBCACBzT2zuYeyxae8QkaToIxjJRpgL%2Bhw7G15epbmj58qqFIUdZjSXxBZ5kilwn%2FtsrJllqqNcLL%2FiMTH3n8esiZfa5omG9RrtvWzgg6Yq01l53appD%2F7WoTLvNaEDfujsROZkB0SYupiQim276nBnO2CB6UDr9LDssZ%2BiyJyEMLooO2MfSAKXNIa3SO0R%2BK13eV4L3fo3N0kBfKpy4jcpE7WYV6LrSD%2FpM757%2BYUAH%2FmoDKdc2czd982VUHjvxjSLd%2BK%2FaY%2BBGxP5lG3cjGFkoCWkXEPmY1Gl9KIwwp2S78iIdUV%2BqPnHMYFklCvrDQ8xGq00Bgy5HXaU%2FmlJdiuBMn%2FRSiGOmgUQpGQAM%2BMI3%2BN5BdaGKocO%2BxgLv1psmCj5iAsRXQWBaLQn8lZDTBTYl2euOao2SeEXbYpov6ZpV2hPWRpvXxhQ2Xi9PRR7ZZlkjDI5NM7HVeB2iE78iW2C8RgOamdwRuJ0F7cdaoRRFOb%2FZVpG3GyWMIoPzdT7wUsNWI7eO%2Fu7eubX1xf27RBKeqQPQWyZYW7ZnGB8LMwhx2mVeUViNKmlgw%2FvjwxAY6pgFqvhx%2FGeUuDr4VLSpsGUDy94UuFegRwGgEV%2Ff9NXjpK4gv3ve5Y7UqqpHzWbsBYX5YD86EvWnGov8c%2BuAzwkxW5Urp35aBpHDPrbS4ZRBsCZ8LEd9pn%2B%2FUQYIG8CYBEOwfCpwNTS0WWAW912mpFxUZVEJqSHdkgSiYShx8jTDqviHFATiNLtQtADmWZMRhSx4zljwLoaRGQZ1cd1fJgbcQx7mz%2Fazp&X-Amz-Signature=77f25e2e3bae5ffe4d7c5c680f54252a74c53d6d6058a61f3a194d9d8b4d5a44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
