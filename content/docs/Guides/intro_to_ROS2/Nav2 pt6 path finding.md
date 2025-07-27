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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JRE2VS5%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDgdkEeKpi55%2FAmLuxyAr2%2BJm7oz%2B00OtK%2Fzh3yrIDeGQIgLcHCLAj3hdQ%2FOn31%2BM7BwwqBXOsj5LDW0TUAPuj7QuIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDEMDtVNT4zppbCllryrcA32G0B8qqNWs7bnO82DrpSDxeIRmvg%2BYM6%2F9EFVMHKsXeYrtsu4ay6s2G34cn0UZIzvc3UKrM4wildbsyZAUfBtaYsIh9FlTTR1Iz2xNgrK2t4uTzHdWZ5%2BzN1WkaVOw3TEt1jzS0N2nDzeOxGQ0zHWf9Bx2gLNPKMBHcL6nYGlKzfnbUbeWpi8jTL4fSxAPgrO622l6TQyWxk9rx9lhz8pu8%2BVKqqmyOzBkyVBK48XUmiO29O4X2BQCOgg9dOnj%2BrZb8KxRKMSm3SrYLUD9PPv9GOjmqZWiXuLEB4HrRCwFTcfQO4OV8gYt4BX7BZaRRQzbVuLtUILLGF3qaZTRSkEfwktCYt1G2d7fA2VOtXAQr6hRbzV1tt4Y3qZRHlPTYGQJHtG%2BuLnGkMtL28GTQ9XME0MhY1anM4%2BTlrkZ5X%2FamkaRlE8Nsx3fMoZYr2rjSsWzQ5aihpPeovqgzHA9tbKXRKTKq2TQhroo%2BxIWYeTSjsEXgjiXIrJGFzffxb8ZzHHSOECHXeiQzEgJ2gQMW3xkaBbPRKpF%2FFCEouPQf08HQ%2B2UslxChh17seqCffhuyMOT2IpVAgA1v7L0ykkom0ubB9YEkQe%2FU9f8GZhkAnnY3lkvavspz%2FHfxBAzMNC6lsQGOqUB9El5oyrTAyMcdeQs1MzQ4tCKk0%2B1e2s8hPAtNCDyDC2GNDPYSF%2Fz4shQtHbx1jeoxKm6V1Eswiu3NptNIH0p0Z5yYirCTsP68uCdf%2BeXi%2F%2FWsR7F2nH6UZesZtlMsVZdQRgeUj2qm2OUv2GWxSZGADxjawGLe1bGRA5Dlc5vY%2Bk4vRsDmkPXwdCfeMMsbImbFP%2FzfB%2B2RgL7z%2F3T727K3M44yV7w&X-Amz-Signature=0a6a21dfaf1f01e729e66461e23997802d7da73107e07136aad1c4f81fda9924&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JRE2VS5%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDgdkEeKpi55%2FAmLuxyAr2%2BJm7oz%2B00OtK%2Fzh3yrIDeGQIgLcHCLAj3hdQ%2FOn31%2BM7BwwqBXOsj5LDW0TUAPuj7QuIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDEMDtVNT4zppbCllryrcA32G0B8qqNWs7bnO82DrpSDxeIRmvg%2BYM6%2F9EFVMHKsXeYrtsu4ay6s2G34cn0UZIzvc3UKrM4wildbsyZAUfBtaYsIh9FlTTR1Iz2xNgrK2t4uTzHdWZ5%2BzN1WkaVOw3TEt1jzS0N2nDzeOxGQ0zHWf9Bx2gLNPKMBHcL6nYGlKzfnbUbeWpi8jTL4fSxAPgrO622l6TQyWxk9rx9lhz8pu8%2BVKqqmyOzBkyVBK48XUmiO29O4X2BQCOgg9dOnj%2BrZb8KxRKMSm3SrYLUD9PPv9GOjmqZWiXuLEB4HrRCwFTcfQO4OV8gYt4BX7BZaRRQzbVuLtUILLGF3qaZTRSkEfwktCYt1G2d7fA2VOtXAQr6hRbzV1tt4Y3qZRHlPTYGQJHtG%2BuLnGkMtL28GTQ9XME0MhY1anM4%2BTlrkZ5X%2FamkaRlE8Nsx3fMoZYr2rjSsWzQ5aihpPeovqgzHA9tbKXRKTKq2TQhroo%2BxIWYeTSjsEXgjiXIrJGFzffxb8ZzHHSOECHXeiQzEgJ2gQMW3xkaBbPRKpF%2FFCEouPQf08HQ%2B2UslxChh17seqCffhuyMOT2IpVAgA1v7L0ykkom0ubB9YEkQe%2FU9f8GZhkAnnY3lkvavspz%2FHfxBAzMNC6lsQGOqUB9El5oyrTAyMcdeQs1MzQ4tCKk0%2B1e2s8hPAtNCDyDC2GNDPYSF%2Fz4shQtHbx1jeoxKm6V1Eswiu3NptNIH0p0Z5yYirCTsP68uCdf%2BeXi%2F%2FWsR7F2nH6UZesZtlMsVZdQRgeUj2qm2OUv2GWxSZGADxjawGLe1bGRA5Dlc5vY%2Bk4vRsDmkPXwdCfeMMsbImbFP%2FzfB%2B2RgL7z%2F3T727K3M44yV7w&X-Amz-Signature=92ae3ec7361d03a02871c84680e4e0d5f483fa43d32b6dddaf61026a5a3c1af3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JRE2VS5%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDgdkEeKpi55%2FAmLuxyAr2%2BJm7oz%2B00OtK%2Fzh3yrIDeGQIgLcHCLAj3hdQ%2FOn31%2BM7BwwqBXOsj5LDW0TUAPuj7QuIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDEMDtVNT4zppbCllryrcA32G0B8qqNWs7bnO82DrpSDxeIRmvg%2BYM6%2F9EFVMHKsXeYrtsu4ay6s2G34cn0UZIzvc3UKrM4wildbsyZAUfBtaYsIh9FlTTR1Iz2xNgrK2t4uTzHdWZ5%2BzN1WkaVOw3TEt1jzS0N2nDzeOxGQ0zHWf9Bx2gLNPKMBHcL6nYGlKzfnbUbeWpi8jTL4fSxAPgrO622l6TQyWxk9rx9lhz8pu8%2BVKqqmyOzBkyVBK48XUmiO29O4X2BQCOgg9dOnj%2BrZb8KxRKMSm3SrYLUD9PPv9GOjmqZWiXuLEB4HrRCwFTcfQO4OV8gYt4BX7BZaRRQzbVuLtUILLGF3qaZTRSkEfwktCYt1G2d7fA2VOtXAQr6hRbzV1tt4Y3qZRHlPTYGQJHtG%2BuLnGkMtL28GTQ9XME0MhY1anM4%2BTlrkZ5X%2FamkaRlE8Nsx3fMoZYr2rjSsWzQ5aihpPeovqgzHA9tbKXRKTKq2TQhroo%2BxIWYeTSjsEXgjiXIrJGFzffxb8ZzHHSOECHXeiQzEgJ2gQMW3xkaBbPRKpF%2FFCEouPQf08HQ%2B2UslxChh17seqCffhuyMOT2IpVAgA1v7L0ykkom0ubB9YEkQe%2FU9f8GZhkAnnY3lkvavspz%2FHfxBAzMNC6lsQGOqUB9El5oyrTAyMcdeQs1MzQ4tCKk0%2B1e2s8hPAtNCDyDC2GNDPYSF%2Fz4shQtHbx1jeoxKm6V1Eswiu3NptNIH0p0Z5yYirCTsP68uCdf%2BeXi%2F%2FWsR7F2nH6UZesZtlMsVZdQRgeUj2qm2OUv2GWxSZGADxjawGLe1bGRA5Dlc5vY%2Bk4vRsDmkPXwdCfeMMsbImbFP%2FzfB%2B2RgL7z%2F3T727K3M44yV7w&X-Amz-Signature=d38d7a7be6668653e4cbae98bc573830a4354fe896e4dcf29b0bf707199fc9cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JRE2VS5%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDgdkEeKpi55%2FAmLuxyAr2%2BJm7oz%2B00OtK%2Fzh3yrIDeGQIgLcHCLAj3hdQ%2FOn31%2BM7BwwqBXOsj5LDW0TUAPuj7QuIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDEMDtVNT4zppbCllryrcA32G0B8qqNWs7bnO82DrpSDxeIRmvg%2BYM6%2F9EFVMHKsXeYrtsu4ay6s2G34cn0UZIzvc3UKrM4wildbsyZAUfBtaYsIh9FlTTR1Iz2xNgrK2t4uTzHdWZ5%2BzN1WkaVOw3TEt1jzS0N2nDzeOxGQ0zHWf9Bx2gLNPKMBHcL6nYGlKzfnbUbeWpi8jTL4fSxAPgrO622l6TQyWxk9rx9lhz8pu8%2BVKqqmyOzBkyVBK48XUmiO29O4X2BQCOgg9dOnj%2BrZb8KxRKMSm3SrYLUD9PPv9GOjmqZWiXuLEB4HrRCwFTcfQO4OV8gYt4BX7BZaRRQzbVuLtUILLGF3qaZTRSkEfwktCYt1G2d7fA2VOtXAQr6hRbzV1tt4Y3qZRHlPTYGQJHtG%2BuLnGkMtL28GTQ9XME0MhY1anM4%2BTlrkZ5X%2FamkaRlE8Nsx3fMoZYr2rjSsWzQ5aihpPeovqgzHA9tbKXRKTKq2TQhroo%2BxIWYeTSjsEXgjiXIrJGFzffxb8ZzHHSOECHXeiQzEgJ2gQMW3xkaBbPRKpF%2FFCEouPQf08HQ%2B2UslxChh17seqCffhuyMOT2IpVAgA1v7L0ykkom0ubB9YEkQe%2FU9f8GZhkAnnY3lkvavspz%2FHfxBAzMNC6lsQGOqUB9El5oyrTAyMcdeQs1MzQ4tCKk0%2B1e2s8hPAtNCDyDC2GNDPYSF%2Fz4shQtHbx1jeoxKm6V1Eswiu3NptNIH0p0Z5yYirCTsP68uCdf%2BeXi%2F%2FWsR7F2nH6UZesZtlMsVZdQRgeUj2qm2OUv2GWxSZGADxjawGLe1bGRA5Dlc5vY%2Bk4vRsDmkPXwdCfeMMsbImbFP%2FzfB%2B2RgL7z%2F3T727K3M44yV7w&X-Amz-Signature=87d0534859e0b8f88fd11112b0f33a4e0f97a96e05ed23006b9069a4e40e914d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JRE2VS5%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDgdkEeKpi55%2FAmLuxyAr2%2BJm7oz%2B00OtK%2Fzh3yrIDeGQIgLcHCLAj3hdQ%2FOn31%2BM7BwwqBXOsj5LDW0TUAPuj7QuIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDEMDtVNT4zppbCllryrcA32G0B8qqNWs7bnO82DrpSDxeIRmvg%2BYM6%2F9EFVMHKsXeYrtsu4ay6s2G34cn0UZIzvc3UKrM4wildbsyZAUfBtaYsIh9FlTTR1Iz2xNgrK2t4uTzHdWZ5%2BzN1WkaVOw3TEt1jzS0N2nDzeOxGQ0zHWf9Bx2gLNPKMBHcL6nYGlKzfnbUbeWpi8jTL4fSxAPgrO622l6TQyWxk9rx9lhz8pu8%2BVKqqmyOzBkyVBK48XUmiO29O4X2BQCOgg9dOnj%2BrZb8KxRKMSm3SrYLUD9PPv9GOjmqZWiXuLEB4HrRCwFTcfQO4OV8gYt4BX7BZaRRQzbVuLtUILLGF3qaZTRSkEfwktCYt1G2d7fA2VOtXAQr6hRbzV1tt4Y3qZRHlPTYGQJHtG%2BuLnGkMtL28GTQ9XME0MhY1anM4%2BTlrkZ5X%2FamkaRlE8Nsx3fMoZYr2rjSsWzQ5aihpPeovqgzHA9tbKXRKTKq2TQhroo%2BxIWYeTSjsEXgjiXIrJGFzffxb8ZzHHSOECHXeiQzEgJ2gQMW3xkaBbPRKpF%2FFCEouPQf08HQ%2B2UslxChh17seqCffhuyMOT2IpVAgA1v7L0ykkom0ubB9YEkQe%2FU9f8GZhkAnnY3lkvavspz%2FHfxBAzMNC6lsQGOqUB9El5oyrTAyMcdeQs1MzQ4tCKk0%2B1e2s8hPAtNCDyDC2GNDPYSF%2Fz4shQtHbx1jeoxKm6V1Eswiu3NptNIH0p0Z5yYirCTsP68uCdf%2BeXi%2F%2FWsR7F2nH6UZesZtlMsVZdQRgeUj2qm2OUv2GWxSZGADxjawGLe1bGRA5Dlc5vY%2Bk4vRsDmkPXwdCfeMMsbImbFP%2FzfB%2B2RgL7z%2F3T727K3M44yV7w&X-Amz-Signature=dda8b37aaaed442a63b7eb2cbcd77c9a09a242b7799fdfd23a9e36ace4ffc1f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JRE2VS5%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDgdkEeKpi55%2FAmLuxyAr2%2BJm7oz%2B00OtK%2Fzh3yrIDeGQIgLcHCLAj3hdQ%2FOn31%2BM7BwwqBXOsj5LDW0TUAPuj7QuIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDEMDtVNT4zppbCllryrcA32G0B8qqNWs7bnO82DrpSDxeIRmvg%2BYM6%2F9EFVMHKsXeYrtsu4ay6s2G34cn0UZIzvc3UKrM4wildbsyZAUfBtaYsIh9FlTTR1Iz2xNgrK2t4uTzHdWZ5%2BzN1WkaVOw3TEt1jzS0N2nDzeOxGQ0zHWf9Bx2gLNPKMBHcL6nYGlKzfnbUbeWpi8jTL4fSxAPgrO622l6TQyWxk9rx9lhz8pu8%2BVKqqmyOzBkyVBK48XUmiO29O4X2BQCOgg9dOnj%2BrZb8KxRKMSm3SrYLUD9PPv9GOjmqZWiXuLEB4HrRCwFTcfQO4OV8gYt4BX7BZaRRQzbVuLtUILLGF3qaZTRSkEfwktCYt1G2d7fA2VOtXAQr6hRbzV1tt4Y3qZRHlPTYGQJHtG%2BuLnGkMtL28GTQ9XME0MhY1anM4%2BTlrkZ5X%2FamkaRlE8Nsx3fMoZYr2rjSsWzQ5aihpPeovqgzHA9tbKXRKTKq2TQhroo%2BxIWYeTSjsEXgjiXIrJGFzffxb8ZzHHSOECHXeiQzEgJ2gQMW3xkaBbPRKpF%2FFCEouPQf08HQ%2B2UslxChh17seqCffhuyMOT2IpVAgA1v7L0ykkom0ubB9YEkQe%2FU9f8GZhkAnnY3lkvavspz%2FHfxBAzMNC6lsQGOqUB9El5oyrTAyMcdeQs1MzQ4tCKk0%2B1e2s8hPAtNCDyDC2GNDPYSF%2Fz4shQtHbx1jeoxKm6V1Eswiu3NptNIH0p0Z5yYirCTsP68uCdf%2BeXi%2F%2FWsR7F2nH6UZesZtlMsVZdQRgeUj2qm2OUv2GWxSZGADxjawGLe1bGRA5Dlc5vY%2Bk4vRsDmkPXwdCfeMMsbImbFP%2FzfB%2B2RgL7z%2F3T727K3M44yV7w&X-Amz-Signature=75d44ddfab32ac0cede3ec1f485778986a6192d49f69c87938a99106724cf2d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
