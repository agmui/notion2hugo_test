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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EAIBE74%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIC7gfJZT4va6ji9QOTl3V4NJ8WJOSTVCFJcmpJx9TpP%2FAiEA67R9UtD8S0VCT5Y4nNthuAOJAdJFWRr5WTyMIkgVbaMqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpIvfJ7T7ZrgVtqmSrcA97r%2FDyBMghPDSGO5C91%2FAb1e9N8SRz01he2UWOxeUhguYCq9GTMgChYNNcidwfVRjyUUeqMv%2FrPBNmKXn6hwlNclHYRJNSH911L4Nt3GVgAvO6nbTsLo2k%2FU%2FjJA21Iibw1iYLBlBaAdULa1anpwpei9FV87MG%2FeBXfFWRnu7YjDkx6Bb7QkMEX3PbdlKU4xaeFIy6JsTiUUf39X9TlK6txRN6gfldWcyQsydbPMUnLScsgJbi6xFGc4YNqLUB6GxoO8Q8jMeCAD1GfwWujjoySu3SDZwp6dAmxNfg5QH%2FQdXmDbhGMfdZDdv3COZvRIVqsWZQcr%2FNeq4it7pMpPRiY1YjJFP46Y78y98Bc%2FE%2B%2B9TYscArR3f%2Fui%2BbVtKVgr%2FkXXDA%2B8Nda6lfX8Uuou5s1vhg9N0HD9IYIvx%2ByHjAIAqFC9Yhm4GbjShQe6WSuF3gS84hT9ZrOWYBmvTr%2Fw8JSGCq9ShSUlACdLyAczlq6NyQ8Rhp7k6unacD9E0xatqshrOoxxFBSaKBetnd%2FIeJhFOEYnssuPak8sn%2BJksvBRLIYWC5g1Uh88mC8SxjuCiPlMQdZZueDgx1Vp2Vi3DI6rfFX63trI7%2BBNrDXv%2FzfOKE6MD0ZxXbzyeRuMMDRnsQGOqUBTMFrX2bJJBAkmcOU8NkJ3T%2FbuEhcgP9GL98TzdemxMr5vHHDmVQwl9Ww1JgWK%2B9GbsGePwk5eG9brKjnujFivw19k9gquqjYgmFtiW3pk1tagRiBTNYzhZTDnbucrSQKgJuvskBABReAiB%2BNWC1t%2F8NH%2F%2BMRBSZ8worpcTALiZ5FR5uwIb%2BtPVdW3ns6dJLUzOoigj52NW2QWgAS%2F%2FPqE%2F%2FZkXGx&X-Amz-Signature=47058438aa299503f113b043a7fe4f7190a1fe1ae84e44e2f36b67d9acec10d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EAIBE74%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIC7gfJZT4va6ji9QOTl3V4NJ8WJOSTVCFJcmpJx9TpP%2FAiEA67R9UtD8S0VCT5Y4nNthuAOJAdJFWRr5WTyMIkgVbaMqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpIvfJ7T7ZrgVtqmSrcA97r%2FDyBMghPDSGO5C91%2FAb1e9N8SRz01he2UWOxeUhguYCq9GTMgChYNNcidwfVRjyUUeqMv%2FrPBNmKXn6hwlNclHYRJNSH911L4Nt3GVgAvO6nbTsLo2k%2FU%2FjJA21Iibw1iYLBlBaAdULa1anpwpei9FV87MG%2FeBXfFWRnu7YjDkx6Bb7QkMEX3PbdlKU4xaeFIy6JsTiUUf39X9TlK6txRN6gfldWcyQsydbPMUnLScsgJbi6xFGc4YNqLUB6GxoO8Q8jMeCAD1GfwWujjoySu3SDZwp6dAmxNfg5QH%2FQdXmDbhGMfdZDdv3COZvRIVqsWZQcr%2FNeq4it7pMpPRiY1YjJFP46Y78y98Bc%2FE%2B%2B9TYscArR3f%2Fui%2BbVtKVgr%2FkXXDA%2B8Nda6lfX8Uuou5s1vhg9N0HD9IYIvx%2ByHjAIAqFC9Yhm4GbjShQe6WSuF3gS84hT9ZrOWYBmvTr%2Fw8JSGCq9ShSUlACdLyAczlq6NyQ8Rhp7k6unacD9E0xatqshrOoxxFBSaKBetnd%2FIeJhFOEYnssuPak8sn%2BJksvBRLIYWC5g1Uh88mC8SxjuCiPlMQdZZueDgx1Vp2Vi3DI6rfFX63trI7%2BBNrDXv%2FzfOKE6MD0ZxXbzyeRuMMDRnsQGOqUBTMFrX2bJJBAkmcOU8NkJ3T%2FbuEhcgP9GL98TzdemxMr5vHHDmVQwl9Ww1JgWK%2B9GbsGePwk5eG9brKjnujFivw19k9gquqjYgmFtiW3pk1tagRiBTNYzhZTDnbucrSQKgJuvskBABReAiB%2BNWC1t%2F8NH%2F%2BMRBSZ8worpcTALiZ5FR5uwIb%2BtPVdW3ns6dJLUzOoigj52NW2QWgAS%2F%2FPqE%2F%2FZkXGx&X-Amz-Signature=158ceddaef72f1b2099a8eefbf31f0dc6baa7e81aed3a2f2dd1d2cf362004866&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EAIBE74%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIC7gfJZT4va6ji9QOTl3V4NJ8WJOSTVCFJcmpJx9TpP%2FAiEA67R9UtD8S0VCT5Y4nNthuAOJAdJFWRr5WTyMIkgVbaMqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpIvfJ7T7ZrgVtqmSrcA97r%2FDyBMghPDSGO5C91%2FAb1e9N8SRz01he2UWOxeUhguYCq9GTMgChYNNcidwfVRjyUUeqMv%2FrPBNmKXn6hwlNclHYRJNSH911L4Nt3GVgAvO6nbTsLo2k%2FU%2FjJA21Iibw1iYLBlBaAdULa1anpwpei9FV87MG%2FeBXfFWRnu7YjDkx6Bb7QkMEX3PbdlKU4xaeFIy6JsTiUUf39X9TlK6txRN6gfldWcyQsydbPMUnLScsgJbi6xFGc4YNqLUB6GxoO8Q8jMeCAD1GfwWujjoySu3SDZwp6dAmxNfg5QH%2FQdXmDbhGMfdZDdv3COZvRIVqsWZQcr%2FNeq4it7pMpPRiY1YjJFP46Y78y98Bc%2FE%2B%2B9TYscArR3f%2Fui%2BbVtKVgr%2FkXXDA%2B8Nda6lfX8Uuou5s1vhg9N0HD9IYIvx%2ByHjAIAqFC9Yhm4GbjShQe6WSuF3gS84hT9ZrOWYBmvTr%2Fw8JSGCq9ShSUlACdLyAczlq6NyQ8Rhp7k6unacD9E0xatqshrOoxxFBSaKBetnd%2FIeJhFOEYnssuPak8sn%2BJksvBRLIYWC5g1Uh88mC8SxjuCiPlMQdZZueDgx1Vp2Vi3DI6rfFX63trI7%2BBNrDXv%2FzfOKE6MD0ZxXbzyeRuMMDRnsQGOqUBTMFrX2bJJBAkmcOU8NkJ3T%2FbuEhcgP9GL98TzdemxMr5vHHDmVQwl9Ww1JgWK%2B9GbsGePwk5eG9brKjnujFivw19k9gquqjYgmFtiW3pk1tagRiBTNYzhZTDnbucrSQKgJuvskBABReAiB%2BNWC1t%2F8NH%2F%2BMRBSZ8worpcTALiZ5FR5uwIb%2BtPVdW3ns6dJLUzOoigj52NW2QWgAS%2F%2FPqE%2F%2FZkXGx&X-Amz-Signature=4e2ec5df8f6cdd647e6324ba91b2acb9183f4f195bf5dbdeb6459150f01c0296&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EAIBE74%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIC7gfJZT4va6ji9QOTl3V4NJ8WJOSTVCFJcmpJx9TpP%2FAiEA67R9UtD8S0VCT5Y4nNthuAOJAdJFWRr5WTyMIkgVbaMqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpIvfJ7T7ZrgVtqmSrcA97r%2FDyBMghPDSGO5C91%2FAb1e9N8SRz01he2UWOxeUhguYCq9GTMgChYNNcidwfVRjyUUeqMv%2FrPBNmKXn6hwlNclHYRJNSH911L4Nt3GVgAvO6nbTsLo2k%2FU%2FjJA21Iibw1iYLBlBaAdULa1anpwpei9FV87MG%2FeBXfFWRnu7YjDkx6Bb7QkMEX3PbdlKU4xaeFIy6JsTiUUf39X9TlK6txRN6gfldWcyQsydbPMUnLScsgJbi6xFGc4YNqLUB6GxoO8Q8jMeCAD1GfwWujjoySu3SDZwp6dAmxNfg5QH%2FQdXmDbhGMfdZDdv3COZvRIVqsWZQcr%2FNeq4it7pMpPRiY1YjJFP46Y78y98Bc%2FE%2B%2B9TYscArR3f%2Fui%2BbVtKVgr%2FkXXDA%2B8Nda6lfX8Uuou5s1vhg9N0HD9IYIvx%2ByHjAIAqFC9Yhm4GbjShQe6WSuF3gS84hT9ZrOWYBmvTr%2Fw8JSGCq9ShSUlACdLyAczlq6NyQ8Rhp7k6unacD9E0xatqshrOoxxFBSaKBetnd%2FIeJhFOEYnssuPak8sn%2BJksvBRLIYWC5g1Uh88mC8SxjuCiPlMQdZZueDgx1Vp2Vi3DI6rfFX63trI7%2BBNrDXv%2FzfOKE6MD0ZxXbzyeRuMMDRnsQGOqUBTMFrX2bJJBAkmcOU8NkJ3T%2FbuEhcgP9GL98TzdemxMr5vHHDmVQwl9Ww1JgWK%2B9GbsGePwk5eG9brKjnujFivw19k9gquqjYgmFtiW3pk1tagRiBTNYzhZTDnbucrSQKgJuvskBABReAiB%2BNWC1t%2F8NH%2F%2BMRBSZ8worpcTALiZ5FR5uwIb%2BtPVdW3ns6dJLUzOoigj52NW2QWgAS%2F%2FPqE%2F%2FZkXGx&X-Amz-Signature=a9083c1ecb2d4aabf1322b0009a226c125841bfd2bc10c81a9177ff946ad2b97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EAIBE74%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIC7gfJZT4va6ji9QOTl3V4NJ8WJOSTVCFJcmpJx9TpP%2FAiEA67R9UtD8S0VCT5Y4nNthuAOJAdJFWRr5WTyMIkgVbaMqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpIvfJ7T7ZrgVtqmSrcA97r%2FDyBMghPDSGO5C91%2FAb1e9N8SRz01he2UWOxeUhguYCq9GTMgChYNNcidwfVRjyUUeqMv%2FrPBNmKXn6hwlNclHYRJNSH911L4Nt3GVgAvO6nbTsLo2k%2FU%2FjJA21Iibw1iYLBlBaAdULa1anpwpei9FV87MG%2FeBXfFWRnu7YjDkx6Bb7QkMEX3PbdlKU4xaeFIy6JsTiUUf39X9TlK6txRN6gfldWcyQsydbPMUnLScsgJbi6xFGc4YNqLUB6GxoO8Q8jMeCAD1GfwWujjoySu3SDZwp6dAmxNfg5QH%2FQdXmDbhGMfdZDdv3COZvRIVqsWZQcr%2FNeq4it7pMpPRiY1YjJFP46Y78y98Bc%2FE%2B%2B9TYscArR3f%2Fui%2BbVtKVgr%2FkXXDA%2B8Nda6lfX8Uuou5s1vhg9N0HD9IYIvx%2ByHjAIAqFC9Yhm4GbjShQe6WSuF3gS84hT9ZrOWYBmvTr%2Fw8JSGCq9ShSUlACdLyAczlq6NyQ8Rhp7k6unacD9E0xatqshrOoxxFBSaKBetnd%2FIeJhFOEYnssuPak8sn%2BJksvBRLIYWC5g1Uh88mC8SxjuCiPlMQdZZueDgx1Vp2Vi3DI6rfFX63trI7%2BBNrDXv%2FzfOKE6MD0ZxXbzyeRuMMDRnsQGOqUBTMFrX2bJJBAkmcOU8NkJ3T%2FbuEhcgP9GL98TzdemxMr5vHHDmVQwl9Ww1JgWK%2B9GbsGePwk5eG9brKjnujFivw19k9gquqjYgmFtiW3pk1tagRiBTNYzhZTDnbucrSQKgJuvskBABReAiB%2BNWC1t%2F8NH%2F%2BMRBSZ8worpcTALiZ5FR5uwIb%2BtPVdW3ns6dJLUzOoigj52NW2QWgAS%2F%2FPqE%2F%2FZkXGx&X-Amz-Signature=ef138901c201a6a9f0f4771edf88d6251718249b0230a277edce594269bd00b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EAIBE74%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIC7gfJZT4va6ji9QOTl3V4NJ8WJOSTVCFJcmpJx9TpP%2FAiEA67R9UtD8S0VCT5Y4nNthuAOJAdJFWRr5WTyMIkgVbaMqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpIvfJ7T7ZrgVtqmSrcA97r%2FDyBMghPDSGO5C91%2FAb1e9N8SRz01he2UWOxeUhguYCq9GTMgChYNNcidwfVRjyUUeqMv%2FrPBNmKXn6hwlNclHYRJNSH911L4Nt3GVgAvO6nbTsLo2k%2FU%2FjJA21Iibw1iYLBlBaAdULa1anpwpei9FV87MG%2FeBXfFWRnu7YjDkx6Bb7QkMEX3PbdlKU4xaeFIy6JsTiUUf39X9TlK6txRN6gfldWcyQsydbPMUnLScsgJbi6xFGc4YNqLUB6GxoO8Q8jMeCAD1GfwWujjoySu3SDZwp6dAmxNfg5QH%2FQdXmDbhGMfdZDdv3COZvRIVqsWZQcr%2FNeq4it7pMpPRiY1YjJFP46Y78y98Bc%2FE%2B%2B9TYscArR3f%2Fui%2BbVtKVgr%2FkXXDA%2B8Nda6lfX8Uuou5s1vhg9N0HD9IYIvx%2ByHjAIAqFC9Yhm4GbjShQe6WSuF3gS84hT9ZrOWYBmvTr%2Fw8JSGCq9ShSUlACdLyAczlq6NyQ8Rhp7k6unacD9E0xatqshrOoxxFBSaKBetnd%2FIeJhFOEYnssuPak8sn%2BJksvBRLIYWC5g1Uh88mC8SxjuCiPlMQdZZueDgx1Vp2Vi3DI6rfFX63trI7%2BBNrDXv%2FzfOKE6MD0ZxXbzyeRuMMDRnsQGOqUBTMFrX2bJJBAkmcOU8NkJ3T%2FbuEhcgP9GL98TzdemxMr5vHHDmVQwl9Ww1JgWK%2B9GbsGePwk5eG9brKjnujFivw19k9gquqjYgmFtiW3pk1tagRiBTNYzhZTDnbucrSQKgJuvskBABReAiB%2BNWC1t%2F8NH%2F%2BMRBSZ8worpcTALiZ5FR5uwIb%2BtPVdW3ns6dJLUzOoigj52NW2QWgAS%2F%2FPqE%2F%2FZkXGx&X-Amz-Signature=c32c8fb7f42db90adb1903bbbbec86bcba1f3ea2b1eb62905afaa8e4e2db37c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
