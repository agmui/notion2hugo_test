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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAMTKMDY%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIASO8UtQoOvZzlI1VHLIJ0Qklv0o3yHVMVP2t%2Bf2OfmgAiEAxjJTI1HR96AlcdzF6ytMzT9GumcXWg25qytijEgEhgkq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDPqj50LAlwYUvh37xSrcAwzXf0HEB4G4Wk750kL5wUSyAqObRnd0TM7p4KKNAvhLxEQ9Uq4VQmzMwFibq01yanoj1L7l2qn0qEqL53Kxt8D1vaTjoMddnOEFYWRXuIN7vLuywLEyE9oLKv%2B02hPMlMo%2BEkWdQqLrLEm1%2B%2Bp5hz3xJnGDMtcd6mZ8EdZ%2F%2B711Luj8uCMAjI6%2BzkoIEIWx5mk5kqBgapU33Ys2NJi25sgR1U%2FNNDPUs%2FE%2FKXa8EoQeziMw%2BIvGtCSDchCo6iDEc%2Bj4ZIpULz2K3e%2Fh50kriDhlioCYiMK7EM4IIaFuk8iDnbo9Lg01IH4BOE%2B1Ej8H%2BalWVog%2BL0CADgBTJ6yrrf51BH7FlUO0bu5i6%2B0M%2BWpuep6FUBucX%2BgpsOfLoQX1K56IT%2B0WmNdSRv4fEG1gUiQwtqMzvAhmrU4PvmxiHmwBF%2FiVZiZHMMXWf290zb80f3TeB7ulTuqoO%2BTyVXRWORhDVukvfViDBAjlfWPUYsee6WVnFA%2BP2WQa3%2FgsHPTRd2K2CDOClv6etJWcN8q3%2FfpROIP7PEwU2iVdr4VWVpp4530QVk8tmjEg7AHtyNmG7rkHOaIOzTs%2Fh1u9r98vXUbBntJ%2BIfkXff747a%2BDCLruJiK8eDVHI6So2xFWMNrel8QGOqUBbHavqFsC5BcTfDEj7ccq6fSKC%2FljQxgOzJgnyoeSYQenlJ7ixomEhXxqs1xPsn62jE7bS66jT6QcIjf82gIkLsWxO1Q7PPoSEpcGCPick0izECFsxnGXrxqYukRAM5BJ8skxGCNpoxX5XIn8JKGtjvKdmzGcuqAY9RZpZjtJJOsISqnP87cQSGcUv7UJilEIyvCOH%2FB%2FSjO5MDP0QuB0X8K2x5wd&X-Amz-Signature=abf9199cf95edfa7470232b82b928f18d0a0637a94ae2b6775e82a85c1b0efcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAMTKMDY%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIASO8UtQoOvZzlI1VHLIJ0Qklv0o3yHVMVP2t%2Bf2OfmgAiEAxjJTI1HR96AlcdzF6ytMzT9GumcXWg25qytijEgEhgkq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDPqj50LAlwYUvh37xSrcAwzXf0HEB4G4Wk750kL5wUSyAqObRnd0TM7p4KKNAvhLxEQ9Uq4VQmzMwFibq01yanoj1L7l2qn0qEqL53Kxt8D1vaTjoMddnOEFYWRXuIN7vLuywLEyE9oLKv%2B02hPMlMo%2BEkWdQqLrLEm1%2B%2Bp5hz3xJnGDMtcd6mZ8EdZ%2F%2B711Luj8uCMAjI6%2BzkoIEIWx5mk5kqBgapU33Ys2NJi25sgR1U%2FNNDPUs%2FE%2FKXa8EoQeziMw%2BIvGtCSDchCo6iDEc%2Bj4ZIpULz2K3e%2Fh50kriDhlioCYiMK7EM4IIaFuk8iDnbo9Lg01IH4BOE%2B1Ej8H%2BalWVog%2BL0CADgBTJ6yrrf51BH7FlUO0bu5i6%2B0M%2BWpuep6FUBucX%2BgpsOfLoQX1K56IT%2B0WmNdSRv4fEG1gUiQwtqMzvAhmrU4PvmxiHmwBF%2FiVZiZHMMXWf290zb80f3TeB7ulTuqoO%2BTyVXRWORhDVukvfViDBAjlfWPUYsee6WVnFA%2BP2WQa3%2FgsHPTRd2K2CDOClv6etJWcN8q3%2FfpROIP7PEwU2iVdr4VWVpp4530QVk8tmjEg7AHtyNmG7rkHOaIOzTs%2Fh1u9r98vXUbBntJ%2BIfkXff747a%2BDCLruJiK8eDVHI6So2xFWMNrel8QGOqUBbHavqFsC5BcTfDEj7ccq6fSKC%2FljQxgOzJgnyoeSYQenlJ7ixomEhXxqs1xPsn62jE7bS66jT6QcIjf82gIkLsWxO1Q7PPoSEpcGCPick0izECFsxnGXrxqYukRAM5BJ8skxGCNpoxX5XIn8JKGtjvKdmzGcuqAY9RZpZjtJJOsISqnP87cQSGcUv7UJilEIyvCOH%2FB%2FSjO5MDP0QuB0X8K2x5wd&X-Amz-Signature=9f4d4dc10043cb83ff4a43e3d898eefd0c1453da3bc8deac9c24d70aab46a5cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAMTKMDY%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIASO8UtQoOvZzlI1VHLIJ0Qklv0o3yHVMVP2t%2Bf2OfmgAiEAxjJTI1HR96AlcdzF6ytMzT9GumcXWg25qytijEgEhgkq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDPqj50LAlwYUvh37xSrcAwzXf0HEB4G4Wk750kL5wUSyAqObRnd0TM7p4KKNAvhLxEQ9Uq4VQmzMwFibq01yanoj1L7l2qn0qEqL53Kxt8D1vaTjoMddnOEFYWRXuIN7vLuywLEyE9oLKv%2B02hPMlMo%2BEkWdQqLrLEm1%2B%2Bp5hz3xJnGDMtcd6mZ8EdZ%2F%2B711Luj8uCMAjI6%2BzkoIEIWx5mk5kqBgapU33Ys2NJi25sgR1U%2FNNDPUs%2FE%2FKXa8EoQeziMw%2BIvGtCSDchCo6iDEc%2Bj4ZIpULz2K3e%2Fh50kriDhlioCYiMK7EM4IIaFuk8iDnbo9Lg01IH4BOE%2B1Ej8H%2BalWVog%2BL0CADgBTJ6yrrf51BH7FlUO0bu5i6%2B0M%2BWpuep6FUBucX%2BgpsOfLoQX1K56IT%2B0WmNdSRv4fEG1gUiQwtqMzvAhmrU4PvmxiHmwBF%2FiVZiZHMMXWf290zb80f3TeB7ulTuqoO%2BTyVXRWORhDVukvfViDBAjlfWPUYsee6WVnFA%2BP2WQa3%2FgsHPTRd2K2CDOClv6etJWcN8q3%2FfpROIP7PEwU2iVdr4VWVpp4530QVk8tmjEg7AHtyNmG7rkHOaIOzTs%2Fh1u9r98vXUbBntJ%2BIfkXff747a%2BDCLruJiK8eDVHI6So2xFWMNrel8QGOqUBbHavqFsC5BcTfDEj7ccq6fSKC%2FljQxgOzJgnyoeSYQenlJ7ixomEhXxqs1xPsn62jE7bS66jT6QcIjf82gIkLsWxO1Q7PPoSEpcGCPick0izECFsxnGXrxqYukRAM5BJ8skxGCNpoxX5XIn8JKGtjvKdmzGcuqAY9RZpZjtJJOsISqnP87cQSGcUv7UJilEIyvCOH%2FB%2FSjO5MDP0QuB0X8K2x5wd&X-Amz-Signature=204f09b0a8c7d3743c118499d764efb2ba661f693261f47ef0d6008494e681fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAMTKMDY%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIASO8UtQoOvZzlI1VHLIJ0Qklv0o3yHVMVP2t%2Bf2OfmgAiEAxjJTI1HR96AlcdzF6ytMzT9GumcXWg25qytijEgEhgkq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDPqj50LAlwYUvh37xSrcAwzXf0HEB4G4Wk750kL5wUSyAqObRnd0TM7p4KKNAvhLxEQ9Uq4VQmzMwFibq01yanoj1L7l2qn0qEqL53Kxt8D1vaTjoMddnOEFYWRXuIN7vLuywLEyE9oLKv%2B02hPMlMo%2BEkWdQqLrLEm1%2B%2Bp5hz3xJnGDMtcd6mZ8EdZ%2F%2B711Luj8uCMAjI6%2BzkoIEIWx5mk5kqBgapU33Ys2NJi25sgR1U%2FNNDPUs%2FE%2FKXa8EoQeziMw%2BIvGtCSDchCo6iDEc%2Bj4ZIpULz2K3e%2Fh50kriDhlioCYiMK7EM4IIaFuk8iDnbo9Lg01IH4BOE%2B1Ej8H%2BalWVog%2BL0CADgBTJ6yrrf51BH7FlUO0bu5i6%2B0M%2BWpuep6FUBucX%2BgpsOfLoQX1K56IT%2B0WmNdSRv4fEG1gUiQwtqMzvAhmrU4PvmxiHmwBF%2FiVZiZHMMXWf290zb80f3TeB7ulTuqoO%2BTyVXRWORhDVukvfViDBAjlfWPUYsee6WVnFA%2BP2WQa3%2FgsHPTRd2K2CDOClv6etJWcN8q3%2FfpROIP7PEwU2iVdr4VWVpp4530QVk8tmjEg7AHtyNmG7rkHOaIOzTs%2Fh1u9r98vXUbBntJ%2BIfkXff747a%2BDCLruJiK8eDVHI6So2xFWMNrel8QGOqUBbHavqFsC5BcTfDEj7ccq6fSKC%2FljQxgOzJgnyoeSYQenlJ7ixomEhXxqs1xPsn62jE7bS66jT6QcIjf82gIkLsWxO1Q7PPoSEpcGCPick0izECFsxnGXrxqYukRAM5BJ8skxGCNpoxX5XIn8JKGtjvKdmzGcuqAY9RZpZjtJJOsISqnP87cQSGcUv7UJilEIyvCOH%2FB%2FSjO5MDP0QuB0X8K2x5wd&X-Amz-Signature=f9d0420436c768a7aa381ec270257f2727ec24b1ced4dadffbfc217fbafc1e7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAMTKMDY%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIASO8UtQoOvZzlI1VHLIJ0Qklv0o3yHVMVP2t%2Bf2OfmgAiEAxjJTI1HR96AlcdzF6ytMzT9GumcXWg25qytijEgEhgkq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDPqj50LAlwYUvh37xSrcAwzXf0HEB4G4Wk750kL5wUSyAqObRnd0TM7p4KKNAvhLxEQ9Uq4VQmzMwFibq01yanoj1L7l2qn0qEqL53Kxt8D1vaTjoMddnOEFYWRXuIN7vLuywLEyE9oLKv%2B02hPMlMo%2BEkWdQqLrLEm1%2B%2Bp5hz3xJnGDMtcd6mZ8EdZ%2F%2B711Luj8uCMAjI6%2BzkoIEIWx5mk5kqBgapU33Ys2NJi25sgR1U%2FNNDPUs%2FE%2FKXa8EoQeziMw%2BIvGtCSDchCo6iDEc%2Bj4ZIpULz2K3e%2Fh50kriDhlioCYiMK7EM4IIaFuk8iDnbo9Lg01IH4BOE%2B1Ej8H%2BalWVog%2BL0CADgBTJ6yrrf51BH7FlUO0bu5i6%2B0M%2BWpuep6FUBucX%2BgpsOfLoQX1K56IT%2B0WmNdSRv4fEG1gUiQwtqMzvAhmrU4PvmxiHmwBF%2FiVZiZHMMXWf290zb80f3TeB7ulTuqoO%2BTyVXRWORhDVukvfViDBAjlfWPUYsee6WVnFA%2BP2WQa3%2FgsHPTRd2K2CDOClv6etJWcN8q3%2FfpROIP7PEwU2iVdr4VWVpp4530QVk8tmjEg7AHtyNmG7rkHOaIOzTs%2Fh1u9r98vXUbBntJ%2BIfkXff747a%2BDCLruJiK8eDVHI6So2xFWMNrel8QGOqUBbHavqFsC5BcTfDEj7ccq6fSKC%2FljQxgOzJgnyoeSYQenlJ7ixomEhXxqs1xPsn62jE7bS66jT6QcIjf82gIkLsWxO1Q7PPoSEpcGCPick0izECFsxnGXrxqYukRAM5BJ8skxGCNpoxX5XIn8JKGtjvKdmzGcuqAY9RZpZjtJJOsISqnP87cQSGcUv7UJilEIyvCOH%2FB%2FSjO5MDP0QuB0X8K2x5wd&X-Amz-Signature=2908d84bca7402395b60f0f1fc93eb007b59b7e792c3eda2b686d16671b505f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAMTKMDY%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIASO8UtQoOvZzlI1VHLIJ0Qklv0o3yHVMVP2t%2Bf2OfmgAiEAxjJTI1HR96AlcdzF6ytMzT9GumcXWg25qytijEgEhgkq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDPqj50LAlwYUvh37xSrcAwzXf0HEB4G4Wk750kL5wUSyAqObRnd0TM7p4KKNAvhLxEQ9Uq4VQmzMwFibq01yanoj1L7l2qn0qEqL53Kxt8D1vaTjoMddnOEFYWRXuIN7vLuywLEyE9oLKv%2B02hPMlMo%2BEkWdQqLrLEm1%2B%2Bp5hz3xJnGDMtcd6mZ8EdZ%2F%2B711Luj8uCMAjI6%2BzkoIEIWx5mk5kqBgapU33Ys2NJi25sgR1U%2FNNDPUs%2FE%2FKXa8EoQeziMw%2BIvGtCSDchCo6iDEc%2Bj4ZIpULz2K3e%2Fh50kriDhlioCYiMK7EM4IIaFuk8iDnbo9Lg01IH4BOE%2B1Ej8H%2BalWVog%2BL0CADgBTJ6yrrf51BH7FlUO0bu5i6%2B0M%2BWpuep6FUBucX%2BgpsOfLoQX1K56IT%2B0WmNdSRv4fEG1gUiQwtqMzvAhmrU4PvmxiHmwBF%2FiVZiZHMMXWf290zb80f3TeB7ulTuqoO%2BTyVXRWORhDVukvfViDBAjlfWPUYsee6WVnFA%2BP2WQa3%2FgsHPTRd2K2CDOClv6etJWcN8q3%2FfpROIP7PEwU2iVdr4VWVpp4530QVk8tmjEg7AHtyNmG7rkHOaIOzTs%2Fh1u9r98vXUbBntJ%2BIfkXff747a%2BDCLruJiK8eDVHI6So2xFWMNrel8QGOqUBbHavqFsC5BcTfDEj7ccq6fSKC%2FljQxgOzJgnyoeSYQenlJ7ixomEhXxqs1xPsn62jE7bS66jT6QcIjf82gIkLsWxO1Q7PPoSEpcGCPick0izECFsxnGXrxqYukRAM5BJ8skxGCNpoxX5XIn8JKGtjvKdmzGcuqAY9RZpZjtJJOsISqnP87cQSGcUv7UJilEIyvCOH%2FB%2FSjO5MDP0QuB0X8K2x5wd&X-Amz-Signature=e130e43ebd132d03b97e24a93c51eba0ac7af58876f40abb3f6af1f68489a0eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
