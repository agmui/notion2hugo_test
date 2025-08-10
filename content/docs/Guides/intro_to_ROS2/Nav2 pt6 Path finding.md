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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH5BLLJD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhFuDUeII90R2XS%2FMDEX%2FTVROtymKSqvD1g4oMkny9cAiAgb8Wgz4zK7eLQM2g%2FNXHOAVMdntXpUjsMrydzZ2lhbiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBzCNsvXJN2%2BNpx58KtwDbWyJWVyBlQT148mJEulaDmLI7b%2Bs5by4cK8R4tBtfS9slvE%2FchNXP6maBuV8BL6kNV12thyvzribn8S1q%2BKOrm%2By0IyFbCtYsRrLfg288Y24KDJ69RNjFizLHpVBrM3D0B%2FUfcsGUMMG7bfxCp6L5qFVaxYRE2c7fUClwlAeU5zqwMWCnRm2VpcVdpTap%2BlrnAzmLBbPjp3rFnLZXxnIDAv5uxXuIhyhdokJDZd0ALVwX5ykxPyE60pW4qNLGCT0cm1e1pGQy7GPr8obWpgdMRYx67mo1OwgQmwytIQEH100d6HmSGtoo%2BFIJXTQj1K8%2BqekN0W65jInkNOPhdL9Epf3RKYb2R81xS7p1Ozs3jmThfzTB%2BYD2x%2FdXOCL1yRpjQx3BeNP4AZ98BzRLET5l2DD%2FtEyXu6iyNq1s%2FHWmmGs7KIvpzw7zBTCS1oklFbn1xBIgTZkn20V3AqVGxlytIpaxgCCuHkq6lHZfsGy4edgkQD9NfxYEBdYsc5wCNZUZ6XDsPnWWGybbvcINuQHfOlbP3XKn5VFFS6qKaOvXxMoRGnybuAxjtYL4rVLfbPserLp5s%2B5HF9TrHtTVzWaXthdleTYZ%2Bo0MV1%2B5ZGaPo7JJHT7kMUCSsw8GVMwwdHgxAY6pgEWCuBXBxEawCr6N1%2F4C4EyKPhFKmmnb0%2FMQtafpczD%2ByaecM0uCf1Bkvt%2F05U1ZWYkFIlIUrw0FvtJZdW0MGfTSls4tWpdBue4TFJ0Ab0l4x4WjN9J3RItycRUGf5ncsjUXL80G%2FNGtnb3wU%2BDE9IXFcb5%2F8rZEbztmjk%2Bozbx%2BPx%2ByesiQ0wYvv5%2FM6PJrg7LUH42mFpvSyXbZ6jptX8KLyOjew07&X-Amz-Signature=ca395055d91d781ec3e0ad61498f7256af908b97a25fd9b543659fff32dfa69b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH5BLLJD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhFuDUeII90R2XS%2FMDEX%2FTVROtymKSqvD1g4oMkny9cAiAgb8Wgz4zK7eLQM2g%2FNXHOAVMdntXpUjsMrydzZ2lhbiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBzCNsvXJN2%2BNpx58KtwDbWyJWVyBlQT148mJEulaDmLI7b%2Bs5by4cK8R4tBtfS9slvE%2FchNXP6maBuV8BL6kNV12thyvzribn8S1q%2BKOrm%2By0IyFbCtYsRrLfg288Y24KDJ69RNjFizLHpVBrM3D0B%2FUfcsGUMMG7bfxCp6L5qFVaxYRE2c7fUClwlAeU5zqwMWCnRm2VpcVdpTap%2BlrnAzmLBbPjp3rFnLZXxnIDAv5uxXuIhyhdokJDZd0ALVwX5ykxPyE60pW4qNLGCT0cm1e1pGQy7GPr8obWpgdMRYx67mo1OwgQmwytIQEH100d6HmSGtoo%2BFIJXTQj1K8%2BqekN0W65jInkNOPhdL9Epf3RKYb2R81xS7p1Ozs3jmThfzTB%2BYD2x%2FdXOCL1yRpjQx3BeNP4AZ98BzRLET5l2DD%2FtEyXu6iyNq1s%2FHWmmGs7KIvpzw7zBTCS1oklFbn1xBIgTZkn20V3AqVGxlytIpaxgCCuHkq6lHZfsGy4edgkQD9NfxYEBdYsc5wCNZUZ6XDsPnWWGybbvcINuQHfOlbP3XKn5VFFS6qKaOvXxMoRGnybuAxjtYL4rVLfbPserLp5s%2B5HF9TrHtTVzWaXthdleTYZ%2Bo0MV1%2B5ZGaPo7JJHT7kMUCSsw8GVMwwdHgxAY6pgEWCuBXBxEawCr6N1%2F4C4EyKPhFKmmnb0%2FMQtafpczD%2ByaecM0uCf1Bkvt%2F05U1ZWYkFIlIUrw0FvtJZdW0MGfTSls4tWpdBue4TFJ0Ab0l4x4WjN9J3RItycRUGf5ncsjUXL80G%2FNGtnb3wU%2BDE9IXFcb5%2F8rZEbztmjk%2Bozbx%2BPx%2ByesiQ0wYvv5%2FM6PJrg7LUH42mFpvSyXbZ6jptX8KLyOjew07&X-Amz-Signature=2cff83e901dad5b7dc0a9cc0b5595bbb4f65222e241791a6928d37f42ed07dda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH5BLLJD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhFuDUeII90R2XS%2FMDEX%2FTVROtymKSqvD1g4oMkny9cAiAgb8Wgz4zK7eLQM2g%2FNXHOAVMdntXpUjsMrydzZ2lhbiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBzCNsvXJN2%2BNpx58KtwDbWyJWVyBlQT148mJEulaDmLI7b%2Bs5by4cK8R4tBtfS9slvE%2FchNXP6maBuV8BL6kNV12thyvzribn8S1q%2BKOrm%2By0IyFbCtYsRrLfg288Y24KDJ69RNjFizLHpVBrM3D0B%2FUfcsGUMMG7bfxCp6L5qFVaxYRE2c7fUClwlAeU5zqwMWCnRm2VpcVdpTap%2BlrnAzmLBbPjp3rFnLZXxnIDAv5uxXuIhyhdokJDZd0ALVwX5ykxPyE60pW4qNLGCT0cm1e1pGQy7GPr8obWpgdMRYx67mo1OwgQmwytIQEH100d6HmSGtoo%2BFIJXTQj1K8%2BqekN0W65jInkNOPhdL9Epf3RKYb2R81xS7p1Ozs3jmThfzTB%2BYD2x%2FdXOCL1yRpjQx3BeNP4AZ98BzRLET5l2DD%2FtEyXu6iyNq1s%2FHWmmGs7KIvpzw7zBTCS1oklFbn1xBIgTZkn20V3AqVGxlytIpaxgCCuHkq6lHZfsGy4edgkQD9NfxYEBdYsc5wCNZUZ6XDsPnWWGybbvcINuQHfOlbP3XKn5VFFS6qKaOvXxMoRGnybuAxjtYL4rVLfbPserLp5s%2B5HF9TrHtTVzWaXthdleTYZ%2Bo0MV1%2B5ZGaPo7JJHT7kMUCSsw8GVMwwdHgxAY6pgEWCuBXBxEawCr6N1%2F4C4EyKPhFKmmnb0%2FMQtafpczD%2ByaecM0uCf1Bkvt%2F05U1ZWYkFIlIUrw0FvtJZdW0MGfTSls4tWpdBue4TFJ0Ab0l4x4WjN9J3RItycRUGf5ncsjUXL80G%2FNGtnb3wU%2BDE9IXFcb5%2F8rZEbztmjk%2Bozbx%2BPx%2ByesiQ0wYvv5%2FM6PJrg7LUH42mFpvSyXbZ6jptX8KLyOjew07&X-Amz-Signature=1f1e730c63710ff453da3e75cf020806f7e5d9133811e1e93fd3be550c57ccf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH5BLLJD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhFuDUeII90R2XS%2FMDEX%2FTVROtymKSqvD1g4oMkny9cAiAgb8Wgz4zK7eLQM2g%2FNXHOAVMdntXpUjsMrydzZ2lhbiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBzCNsvXJN2%2BNpx58KtwDbWyJWVyBlQT148mJEulaDmLI7b%2Bs5by4cK8R4tBtfS9slvE%2FchNXP6maBuV8BL6kNV12thyvzribn8S1q%2BKOrm%2By0IyFbCtYsRrLfg288Y24KDJ69RNjFizLHpVBrM3D0B%2FUfcsGUMMG7bfxCp6L5qFVaxYRE2c7fUClwlAeU5zqwMWCnRm2VpcVdpTap%2BlrnAzmLBbPjp3rFnLZXxnIDAv5uxXuIhyhdokJDZd0ALVwX5ykxPyE60pW4qNLGCT0cm1e1pGQy7GPr8obWpgdMRYx67mo1OwgQmwytIQEH100d6HmSGtoo%2BFIJXTQj1K8%2BqekN0W65jInkNOPhdL9Epf3RKYb2R81xS7p1Ozs3jmThfzTB%2BYD2x%2FdXOCL1yRpjQx3BeNP4AZ98BzRLET5l2DD%2FtEyXu6iyNq1s%2FHWmmGs7KIvpzw7zBTCS1oklFbn1xBIgTZkn20V3AqVGxlytIpaxgCCuHkq6lHZfsGy4edgkQD9NfxYEBdYsc5wCNZUZ6XDsPnWWGybbvcINuQHfOlbP3XKn5VFFS6qKaOvXxMoRGnybuAxjtYL4rVLfbPserLp5s%2B5HF9TrHtTVzWaXthdleTYZ%2Bo0MV1%2B5ZGaPo7JJHT7kMUCSsw8GVMwwdHgxAY6pgEWCuBXBxEawCr6N1%2F4C4EyKPhFKmmnb0%2FMQtafpczD%2ByaecM0uCf1Bkvt%2F05U1ZWYkFIlIUrw0FvtJZdW0MGfTSls4tWpdBue4TFJ0Ab0l4x4WjN9J3RItycRUGf5ncsjUXL80G%2FNGtnb3wU%2BDE9IXFcb5%2F8rZEbztmjk%2Bozbx%2BPx%2ByesiQ0wYvv5%2FM6PJrg7LUH42mFpvSyXbZ6jptX8KLyOjew07&X-Amz-Signature=fd93ca41177a43c9a2aed3cfce2883c7c5bc419550b2546409ebfd9a61134ec6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH5BLLJD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhFuDUeII90R2XS%2FMDEX%2FTVROtymKSqvD1g4oMkny9cAiAgb8Wgz4zK7eLQM2g%2FNXHOAVMdntXpUjsMrydzZ2lhbiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBzCNsvXJN2%2BNpx58KtwDbWyJWVyBlQT148mJEulaDmLI7b%2Bs5by4cK8R4tBtfS9slvE%2FchNXP6maBuV8BL6kNV12thyvzribn8S1q%2BKOrm%2By0IyFbCtYsRrLfg288Y24KDJ69RNjFizLHpVBrM3D0B%2FUfcsGUMMG7bfxCp6L5qFVaxYRE2c7fUClwlAeU5zqwMWCnRm2VpcVdpTap%2BlrnAzmLBbPjp3rFnLZXxnIDAv5uxXuIhyhdokJDZd0ALVwX5ykxPyE60pW4qNLGCT0cm1e1pGQy7GPr8obWpgdMRYx67mo1OwgQmwytIQEH100d6HmSGtoo%2BFIJXTQj1K8%2BqekN0W65jInkNOPhdL9Epf3RKYb2R81xS7p1Ozs3jmThfzTB%2BYD2x%2FdXOCL1yRpjQx3BeNP4AZ98BzRLET5l2DD%2FtEyXu6iyNq1s%2FHWmmGs7KIvpzw7zBTCS1oklFbn1xBIgTZkn20V3AqVGxlytIpaxgCCuHkq6lHZfsGy4edgkQD9NfxYEBdYsc5wCNZUZ6XDsPnWWGybbvcINuQHfOlbP3XKn5VFFS6qKaOvXxMoRGnybuAxjtYL4rVLfbPserLp5s%2B5HF9TrHtTVzWaXthdleTYZ%2Bo0MV1%2B5ZGaPo7JJHT7kMUCSsw8GVMwwdHgxAY6pgEWCuBXBxEawCr6N1%2F4C4EyKPhFKmmnb0%2FMQtafpczD%2ByaecM0uCf1Bkvt%2F05U1ZWYkFIlIUrw0FvtJZdW0MGfTSls4tWpdBue4TFJ0Ab0l4x4WjN9J3RItycRUGf5ncsjUXL80G%2FNGtnb3wU%2BDE9IXFcb5%2F8rZEbztmjk%2Bozbx%2BPx%2ByesiQ0wYvv5%2FM6PJrg7LUH42mFpvSyXbZ6jptX8KLyOjew07&X-Amz-Signature=afcf13d313fe3b4a674cc8d7211cb4058455e6b4922d53dd61febb7da90ff931&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH5BLLJD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhFuDUeII90R2XS%2FMDEX%2FTVROtymKSqvD1g4oMkny9cAiAgb8Wgz4zK7eLQM2g%2FNXHOAVMdntXpUjsMrydzZ2lhbiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBzCNsvXJN2%2BNpx58KtwDbWyJWVyBlQT148mJEulaDmLI7b%2Bs5by4cK8R4tBtfS9slvE%2FchNXP6maBuV8BL6kNV12thyvzribn8S1q%2BKOrm%2By0IyFbCtYsRrLfg288Y24KDJ69RNjFizLHpVBrM3D0B%2FUfcsGUMMG7bfxCp6L5qFVaxYRE2c7fUClwlAeU5zqwMWCnRm2VpcVdpTap%2BlrnAzmLBbPjp3rFnLZXxnIDAv5uxXuIhyhdokJDZd0ALVwX5ykxPyE60pW4qNLGCT0cm1e1pGQy7GPr8obWpgdMRYx67mo1OwgQmwytIQEH100d6HmSGtoo%2BFIJXTQj1K8%2BqekN0W65jInkNOPhdL9Epf3RKYb2R81xS7p1Ozs3jmThfzTB%2BYD2x%2FdXOCL1yRpjQx3BeNP4AZ98BzRLET5l2DD%2FtEyXu6iyNq1s%2FHWmmGs7KIvpzw7zBTCS1oklFbn1xBIgTZkn20V3AqVGxlytIpaxgCCuHkq6lHZfsGy4edgkQD9NfxYEBdYsc5wCNZUZ6XDsPnWWGybbvcINuQHfOlbP3XKn5VFFS6qKaOvXxMoRGnybuAxjtYL4rVLfbPserLp5s%2B5HF9TrHtTVzWaXthdleTYZ%2Bo0MV1%2B5ZGaPo7JJHT7kMUCSsw8GVMwwdHgxAY6pgEWCuBXBxEawCr6N1%2F4C4EyKPhFKmmnb0%2FMQtafpczD%2ByaecM0uCf1Bkvt%2F05U1ZWYkFIlIUrw0FvtJZdW0MGfTSls4tWpdBue4TFJ0Ab0l4x4WjN9J3RItycRUGf5ncsjUXL80G%2FNGtnb3wU%2BDE9IXFcb5%2F8rZEbztmjk%2Bozbx%2BPx%2ByesiQ0wYvv5%2FM6PJrg7LUH42mFpvSyXbZ6jptX8KLyOjew07&X-Amz-Signature=503c7f03ee983735170b8b3eb02836edf305ed594f5d1e950aced851af7a9400&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH5BLLJD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhFuDUeII90R2XS%2FMDEX%2FTVROtymKSqvD1g4oMkny9cAiAgb8Wgz4zK7eLQM2g%2FNXHOAVMdntXpUjsMrydzZ2lhbiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBzCNsvXJN2%2BNpx58KtwDbWyJWVyBlQT148mJEulaDmLI7b%2Bs5by4cK8R4tBtfS9slvE%2FchNXP6maBuV8BL6kNV12thyvzribn8S1q%2BKOrm%2By0IyFbCtYsRrLfg288Y24KDJ69RNjFizLHpVBrM3D0B%2FUfcsGUMMG7bfxCp6L5qFVaxYRE2c7fUClwlAeU5zqwMWCnRm2VpcVdpTap%2BlrnAzmLBbPjp3rFnLZXxnIDAv5uxXuIhyhdokJDZd0ALVwX5ykxPyE60pW4qNLGCT0cm1e1pGQy7GPr8obWpgdMRYx67mo1OwgQmwytIQEH100d6HmSGtoo%2BFIJXTQj1K8%2BqekN0W65jInkNOPhdL9Epf3RKYb2R81xS7p1Ozs3jmThfzTB%2BYD2x%2FdXOCL1yRpjQx3BeNP4AZ98BzRLET5l2DD%2FtEyXu6iyNq1s%2FHWmmGs7KIvpzw7zBTCS1oklFbn1xBIgTZkn20V3AqVGxlytIpaxgCCuHkq6lHZfsGy4edgkQD9NfxYEBdYsc5wCNZUZ6XDsPnWWGybbvcINuQHfOlbP3XKn5VFFS6qKaOvXxMoRGnybuAxjtYL4rVLfbPserLp5s%2B5HF9TrHtTVzWaXthdleTYZ%2Bo0MV1%2B5ZGaPo7JJHT7kMUCSsw8GVMwwdHgxAY6pgEWCuBXBxEawCr6N1%2F4C4EyKPhFKmmnb0%2FMQtafpczD%2ByaecM0uCf1Bkvt%2F05U1ZWYkFIlIUrw0FvtJZdW0MGfTSls4tWpdBue4TFJ0Ab0l4x4WjN9J3RItycRUGf5ncsjUXL80G%2FNGtnb3wU%2BDE9IXFcb5%2F8rZEbztmjk%2Bozbx%2BPx%2ByesiQ0wYvv5%2FM6PJrg7LUH42mFpvSyXbZ6jptX8KLyOjew07&X-Amz-Signature=41cb414394d08adb4243af8b1fec6a3b59d5828617a42d7fe93a402829f1793a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH5BLLJD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhFuDUeII90R2XS%2FMDEX%2FTVROtymKSqvD1g4oMkny9cAiAgb8Wgz4zK7eLQM2g%2FNXHOAVMdntXpUjsMrydzZ2lhbiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBzCNsvXJN2%2BNpx58KtwDbWyJWVyBlQT148mJEulaDmLI7b%2Bs5by4cK8R4tBtfS9slvE%2FchNXP6maBuV8BL6kNV12thyvzribn8S1q%2BKOrm%2By0IyFbCtYsRrLfg288Y24KDJ69RNjFizLHpVBrM3D0B%2FUfcsGUMMG7bfxCp6L5qFVaxYRE2c7fUClwlAeU5zqwMWCnRm2VpcVdpTap%2BlrnAzmLBbPjp3rFnLZXxnIDAv5uxXuIhyhdokJDZd0ALVwX5ykxPyE60pW4qNLGCT0cm1e1pGQy7GPr8obWpgdMRYx67mo1OwgQmwytIQEH100d6HmSGtoo%2BFIJXTQj1K8%2BqekN0W65jInkNOPhdL9Epf3RKYb2R81xS7p1Ozs3jmThfzTB%2BYD2x%2FdXOCL1yRpjQx3BeNP4AZ98BzRLET5l2DD%2FtEyXu6iyNq1s%2FHWmmGs7KIvpzw7zBTCS1oklFbn1xBIgTZkn20V3AqVGxlytIpaxgCCuHkq6lHZfsGy4edgkQD9NfxYEBdYsc5wCNZUZ6XDsPnWWGybbvcINuQHfOlbP3XKn5VFFS6qKaOvXxMoRGnybuAxjtYL4rVLfbPserLp5s%2B5HF9TrHtTVzWaXthdleTYZ%2Bo0MV1%2B5ZGaPo7JJHT7kMUCSsw8GVMwwdHgxAY6pgEWCuBXBxEawCr6N1%2F4C4EyKPhFKmmnb0%2FMQtafpczD%2ByaecM0uCf1Bkvt%2F05U1ZWYkFIlIUrw0FvtJZdW0MGfTSls4tWpdBue4TFJ0Ab0l4x4WjN9J3RItycRUGf5ncsjUXL80G%2FNGtnb3wU%2BDE9IXFcb5%2F8rZEbztmjk%2Bozbx%2BPx%2ByesiQ0wYvv5%2FM6PJrg7LUH42mFpvSyXbZ6jptX8KLyOjew07&X-Amz-Signature=98b164719e99f28dbf08d0d925ad76fdfd0ef4044983069d744a825e197575cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH5BLLJD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhFuDUeII90R2XS%2FMDEX%2FTVROtymKSqvD1g4oMkny9cAiAgb8Wgz4zK7eLQM2g%2FNXHOAVMdntXpUjsMrydzZ2lhbiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBzCNsvXJN2%2BNpx58KtwDbWyJWVyBlQT148mJEulaDmLI7b%2Bs5by4cK8R4tBtfS9slvE%2FchNXP6maBuV8BL6kNV12thyvzribn8S1q%2BKOrm%2By0IyFbCtYsRrLfg288Y24KDJ69RNjFizLHpVBrM3D0B%2FUfcsGUMMG7bfxCp6L5qFVaxYRE2c7fUClwlAeU5zqwMWCnRm2VpcVdpTap%2BlrnAzmLBbPjp3rFnLZXxnIDAv5uxXuIhyhdokJDZd0ALVwX5ykxPyE60pW4qNLGCT0cm1e1pGQy7GPr8obWpgdMRYx67mo1OwgQmwytIQEH100d6HmSGtoo%2BFIJXTQj1K8%2BqekN0W65jInkNOPhdL9Epf3RKYb2R81xS7p1Ozs3jmThfzTB%2BYD2x%2FdXOCL1yRpjQx3BeNP4AZ98BzRLET5l2DD%2FtEyXu6iyNq1s%2FHWmmGs7KIvpzw7zBTCS1oklFbn1xBIgTZkn20V3AqVGxlytIpaxgCCuHkq6lHZfsGy4edgkQD9NfxYEBdYsc5wCNZUZ6XDsPnWWGybbvcINuQHfOlbP3XKn5VFFS6qKaOvXxMoRGnybuAxjtYL4rVLfbPserLp5s%2B5HF9TrHtTVzWaXthdleTYZ%2Bo0MV1%2B5ZGaPo7JJHT7kMUCSsw8GVMwwdHgxAY6pgEWCuBXBxEawCr6N1%2F4C4EyKPhFKmmnb0%2FMQtafpczD%2ByaecM0uCf1Bkvt%2F05U1ZWYkFIlIUrw0FvtJZdW0MGfTSls4tWpdBue4TFJ0Ab0l4x4WjN9J3RItycRUGf5ncsjUXL80G%2FNGtnb3wU%2BDE9IXFcb5%2F8rZEbztmjk%2Bozbx%2BPx%2ByesiQ0wYvv5%2FM6PJrg7LUH42mFpvSyXbZ6jptX8KLyOjew07&X-Amz-Signature=b3fbf5e497c3090c78ca760329d8143ea89319b500aa8212a11804993aa9bcbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH5BLLJD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhFuDUeII90R2XS%2FMDEX%2FTVROtymKSqvD1g4oMkny9cAiAgb8Wgz4zK7eLQM2g%2FNXHOAVMdntXpUjsMrydzZ2lhbiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBzCNsvXJN2%2BNpx58KtwDbWyJWVyBlQT148mJEulaDmLI7b%2Bs5by4cK8R4tBtfS9slvE%2FchNXP6maBuV8BL6kNV12thyvzribn8S1q%2BKOrm%2By0IyFbCtYsRrLfg288Y24KDJ69RNjFizLHpVBrM3D0B%2FUfcsGUMMG7bfxCp6L5qFVaxYRE2c7fUClwlAeU5zqwMWCnRm2VpcVdpTap%2BlrnAzmLBbPjp3rFnLZXxnIDAv5uxXuIhyhdokJDZd0ALVwX5ykxPyE60pW4qNLGCT0cm1e1pGQy7GPr8obWpgdMRYx67mo1OwgQmwytIQEH100d6HmSGtoo%2BFIJXTQj1K8%2BqekN0W65jInkNOPhdL9Epf3RKYb2R81xS7p1Ozs3jmThfzTB%2BYD2x%2FdXOCL1yRpjQx3BeNP4AZ98BzRLET5l2DD%2FtEyXu6iyNq1s%2FHWmmGs7KIvpzw7zBTCS1oklFbn1xBIgTZkn20V3AqVGxlytIpaxgCCuHkq6lHZfsGy4edgkQD9NfxYEBdYsc5wCNZUZ6XDsPnWWGybbvcINuQHfOlbP3XKn5VFFS6qKaOvXxMoRGnybuAxjtYL4rVLfbPserLp5s%2B5HF9TrHtTVzWaXthdleTYZ%2Bo0MV1%2B5ZGaPo7JJHT7kMUCSsw8GVMwwdHgxAY6pgEWCuBXBxEawCr6N1%2F4C4EyKPhFKmmnb0%2FMQtafpczD%2ByaecM0uCf1Bkvt%2F05U1ZWYkFIlIUrw0FvtJZdW0MGfTSls4tWpdBue4TFJ0Ab0l4x4WjN9J3RItycRUGf5ncsjUXL80G%2FNGtnb3wU%2BDE9IXFcb5%2F8rZEbztmjk%2Bozbx%2BPx%2ByesiQ0wYvv5%2FM6PJrg7LUH42mFpvSyXbZ6jptX8KLyOjew07&X-Amz-Signature=6ba43a31e4a70e8b0702a82889c6f73a216d61c51429f18ef8f9a8f4ba4b4724&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH5BLLJD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhFuDUeII90R2XS%2FMDEX%2FTVROtymKSqvD1g4oMkny9cAiAgb8Wgz4zK7eLQM2g%2FNXHOAVMdntXpUjsMrydzZ2lhbiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBzCNsvXJN2%2BNpx58KtwDbWyJWVyBlQT148mJEulaDmLI7b%2Bs5by4cK8R4tBtfS9slvE%2FchNXP6maBuV8BL6kNV12thyvzribn8S1q%2BKOrm%2By0IyFbCtYsRrLfg288Y24KDJ69RNjFizLHpVBrM3D0B%2FUfcsGUMMG7bfxCp6L5qFVaxYRE2c7fUClwlAeU5zqwMWCnRm2VpcVdpTap%2BlrnAzmLBbPjp3rFnLZXxnIDAv5uxXuIhyhdokJDZd0ALVwX5ykxPyE60pW4qNLGCT0cm1e1pGQy7GPr8obWpgdMRYx67mo1OwgQmwytIQEH100d6HmSGtoo%2BFIJXTQj1K8%2BqekN0W65jInkNOPhdL9Epf3RKYb2R81xS7p1Ozs3jmThfzTB%2BYD2x%2FdXOCL1yRpjQx3BeNP4AZ98BzRLET5l2DD%2FtEyXu6iyNq1s%2FHWmmGs7KIvpzw7zBTCS1oklFbn1xBIgTZkn20V3AqVGxlytIpaxgCCuHkq6lHZfsGy4edgkQD9NfxYEBdYsc5wCNZUZ6XDsPnWWGybbvcINuQHfOlbP3XKn5VFFS6qKaOvXxMoRGnybuAxjtYL4rVLfbPserLp5s%2B5HF9TrHtTVzWaXthdleTYZ%2Bo0MV1%2B5ZGaPo7JJHT7kMUCSsw8GVMwwdHgxAY6pgEWCuBXBxEawCr6N1%2F4C4EyKPhFKmmnb0%2FMQtafpczD%2ByaecM0uCf1Bkvt%2F05U1ZWYkFIlIUrw0FvtJZdW0MGfTSls4tWpdBue4TFJ0Ab0l4x4WjN9J3RItycRUGf5ncsjUXL80G%2FNGtnb3wU%2BDE9IXFcb5%2F8rZEbztmjk%2Bozbx%2BPx%2ByesiQ0wYvv5%2FM6PJrg7LUH42mFpvSyXbZ6jptX8KLyOjew07&X-Amz-Signature=795cd37ceabc46e35662857b468965e7cd2b12f6c415b5d91b615e824a5b1ca0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH5BLLJD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhFuDUeII90R2XS%2FMDEX%2FTVROtymKSqvD1g4oMkny9cAiAgb8Wgz4zK7eLQM2g%2FNXHOAVMdntXpUjsMrydzZ2lhbiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBzCNsvXJN2%2BNpx58KtwDbWyJWVyBlQT148mJEulaDmLI7b%2Bs5by4cK8R4tBtfS9slvE%2FchNXP6maBuV8BL6kNV12thyvzribn8S1q%2BKOrm%2By0IyFbCtYsRrLfg288Y24KDJ69RNjFizLHpVBrM3D0B%2FUfcsGUMMG7bfxCp6L5qFVaxYRE2c7fUClwlAeU5zqwMWCnRm2VpcVdpTap%2BlrnAzmLBbPjp3rFnLZXxnIDAv5uxXuIhyhdokJDZd0ALVwX5ykxPyE60pW4qNLGCT0cm1e1pGQy7GPr8obWpgdMRYx67mo1OwgQmwytIQEH100d6HmSGtoo%2BFIJXTQj1K8%2BqekN0W65jInkNOPhdL9Epf3RKYb2R81xS7p1Ozs3jmThfzTB%2BYD2x%2FdXOCL1yRpjQx3BeNP4AZ98BzRLET5l2DD%2FtEyXu6iyNq1s%2FHWmmGs7KIvpzw7zBTCS1oklFbn1xBIgTZkn20V3AqVGxlytIpaxgCCuHkq6lHZfsGy4edgkQD9NfxYEBdYsc5wCNZUZ6XDsPnWWGybbvcINuQHfOlbP3XKn5VFFS6qKaOvXxMoRGnybuAxjtYL4rVLfbPserLp5s%2B5HF9TrHtTVzWaXthdleTYZ%2Bo0MV1%2B5ZGaPo7JJHT7kMUCSsw8GVMwwdHgxAY6pgEWCuBXBxEawCr6N1%2F4C4EyKPhFKmmnb0%2FMQtafpczD%2ByaecM0uCf1Bkvt%2F05U1ZWYkFIlIUrw0FvtJZdW0MGfTSls4tWpdBue4TFJ0Ab0l4x4WjN9J3RItycRUGf5ncsjUXL80G%2FNGtnb3wU%2BDE9IXFcb5%2F8rZEbztmjk%2Bozbx%2BPx%2ByesiQ0wYvv5%2FM6PJrg7LUH42mFpvSyXbZ6jptX8KLyOjew07&X-Amz-Signature=576192a40e45ccd76fd59dce1b4f04d3398e1e363c93d3086406931dccc309d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH5BLLJD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhFuDUeII90R2XS%2FMDEX%2FTVROtymKSqvD1g4oMkny9cAiAgb8Wgz4zK7eLQM2g%2FNXHOAVMdntXpUjsMrydzZ2lhbiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBzCNsvXJN2%2BNpx58KtwDbWyJWVyBlQT148mJEulaDmLI7b%2Bs5by4cK8R4tBtfS9slvE%2FchNXP6maBuV8BL6kNV12thyvzribn8S1q%2BKOrm%2By0IyFbCtYsRrLfg288Y24KDJ69RNjFizLHpVBrM3D0B%2FUfcsGUMMG7bfxCp6L5qFVaxYRE2c7fUClwlAeU5zqwMWCnRm2VpcVdpTap%2BlrnAzmLBbPjp3rFnLZXxnIDAv5uxXuIhyhdokJDZd0ALVwX5ykxPyE60pW4qNLGCT0cm1e1pGQy7GPr8obWpgdMRYx67mo1OwgQmwytIQEH100d6HmSGtoo%2BFIJXTQj1K8%2BqekN0W65jInkNOPhdL9Epf3RKYb2R81xS7p1Ozs3jmThfzTB%2BYD2x%2FdXOCL1yRpjQx3BeNP4AZ98BzRLET5l2DD%2FtEyXu6iyNq1s%2FHWmmGs7KIvpzw7zBTCS1oklFbn1xBIgTZkn20V3AqVGxlytIpaxgCCuHkq6lHZfsGy4edgkQD9NfxYEBdYsc5wCNZUZ6XDsPnWWGybbvcINuQHfOlbP3XKn5VFFS6qKaOvXxMoRGnybuAxjtYL4rVLfbPserLp5s%2B5HF9TrHtTVzWaXthdleTYZ%2Bo0MV1%2B5ZGaPo7JJHT7kMUCSsw8GVMwwdHgxAY6pgEWCuBXBxEawCr6N1%2F4C4EyKPhFKmmnb0%2FMQtafpczD%2ByaecM0uCf1Bkvt%2F05U1ZWYkFIlIUrw0FvtJZdW0MGfTSls4tWpdBue4TFJ0Ab0l4x4WjN9J3RItycRUGf5ncsjUXL80G%2FNGtnb3wU%2BDE9IXFcb5%2F8rZEbztmjk%2Bozbx%2BPx%2ByesiQ0wYvv5%2FM6PJrg7LUH42mFpvSyXbZ6jptX8KLyOjew07&X-Amz-Signature=2d0c39b988b02fc01b9ee25794edef1b51e8e2022f4081c6ad006dbb777bdad5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
