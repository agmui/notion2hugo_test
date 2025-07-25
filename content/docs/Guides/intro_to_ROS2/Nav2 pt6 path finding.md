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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665USU77Q4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIEIzPbLMzQ%2FMDFz6XXVJqjH31%2B11z0c6GVh93RtGyxLNAiEArYqjWttA605fuk5EI5Wp9FGeufoW5ApXya9sVP8BLmIq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDHdQIFTtumUnfrPJsSrcA13KFKWaw1%2BNuawI7%2BIwAmHf0ECQiqB%2FU6F2QslRSbgHU74c9Qeo1bAoD8nh%2FbFpJO0wcA2dYKXpkfhCFokD1WSrvYe93%2BplkOAphLVG9Taxquf0osoedbL6QQ%2BWiL4uMLTOvZ03mDqEa4Oabm59PlprYlAk3HOJ9lTfmOXy94YKKLchoCxTOXKOJqoAKlYT1f6CIuBFvpgH%2Bc5%2BuMB03ymPB5TdxWtfhB%2FQDNDL8i9Y5ZOGBvpEruJBHcyGr%2BZIsPDveD0mYHjLJnmrQc3QBzEqA9LvupBsMneuHPphqCi2ExFCk8iWZzy5IBAF2pY0a8mMFIOEmx4QX%2F1dWcn%2BNGG%2FJrrhLK0YwGyKC2LRBM68nfst1bCBsVrmHVTOOhaay%2F40T81yufYm9EdoLwB%2F8mUGdhb7JcIWlecMZKSQJeGxjl%2F7N3y%2FvfDYh2ztFNSeaLxmWPK0TuP9HNiEbtoPfr6IYO3SZy43CxDwCaRUYK6wlnB7ztD8xbCIFGDTkANNK%2FqiBhn474N8JV4H8Ii79bYjqqRCgeaUO%2FA%2F6c384ZeJOXLY2rVmMjtGieP0CW%2Fm8jYOgJwA0S5iWP1N6QamRG3cmayv%2FPn%2FN4PIakz4EdVR4KU%2FlfaedhpXUjzIMNL3i8QGOqUBK22IFLzhOJzfhIof16%2Bg921t1X8umQUnSXPyk%2Bp3KzH2LyrLIhX1V%2FUdIZM0RIk5pTKitTkY7%2FNX4296DXtxg%2BAHloDFko2GMyZgMOlhu1Sbm4FmFFwq8Rgi2x7T5UtXt%2FBz2J4x2Bu%2BA94UFR%2B1plM7RmrBtS%2BrdNdXs2O5LXbdlKKSJZKhQw5I4XBsUElG3CY4k7PgLaNfB7qbRDQanyh1NUmu&X-Amz-Signature=08d70221e9604417c8e4d0c7756b03647cac61a6c048e416e0359c8b69959b50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665USU77Q4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIEIzPbLMzQ%2FMDFz6XXVJqjH31%2B11z0c6GVh93RtGyxLNAiEArYqjWttA605fuk5EI5Wp9FGeufoW5ApXya9sVP8BLmIq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDHdQIFTtumUnfrPJsSrcA13KFKWaw1%2BNuawI7%2BIwAmHf0ECQiqB%2FU6F2QslRSbgHU74c9Qeo1bAoD8nh%2FbFpJO0wcA2dYKXpkfhCFokD1WSrvYe93%2BplkOAphLVG9Taxquf0osoedbL6QQ%2BWiL4uMLTOvZ03mDqEa4Oabm59PlprYlAk3HOJ9lTfmOXy94YKKLchoCxTOXKOJqoAKlYT1f6CIuBFvpgH%2Bc5%2BuMB03ymPB5TdxWtfhB%2FQDNDL8i9Y5ZOGBvpEruJBHcyGr%2BZIsPDveD0mYHjLJnmrQc3QBzEqA9LvupBsMneuHPphqCi2ExFCk8iWZzy5IBAF2pY0a8mMFIOEmx4QX%2F1dWcn%2BNGG%2FJrrhLK0YwGyKC2LRBM68nfst1bCBsVrmHVTOOhaay%2F40T81yufYm9EdoLwB%2F8mUGdhb7JcIWlecMZKSQJeGxjl%2F7N3y%2FvfDYh2ztFNSeaLxmWPK0TuP9HNiEbtoPfr6IYO3SZy43CxDwCaRUYK6wlnB7ztD8xbCIFGDTkANNK%2FqiBhn474N8JV4H8Ii79bYjqqRCgeaUO%2FA%2F6c384ZeJOXLY2rVmMjtGieP0CW%2Fm8jYOgJwA0S5iWP1N6QamRG3cmayv%2FPn%2FN4PIakz4EdVR4KU%2FlfaedhpXUjzIMNL3i8QGOqUBK22IFLzhOJzfhIof16%2Bg921t1X8umQUnSXPyk%2Bp3KzH2LyrLIhX1V%2FUdIZM0RIk5pTKitTkY7%2FNX4296DXtxg%2BAHloDFko2GMyZgMOlhu1Sbm4FmFFwq8Rgi2x7T5UtXt%2FBz2J4x2Bu%2BA94UFR%2B1plM7RmrBtS%2BrdNdXs2O5LXbdlKKSJZKhQw5I4XBsUElG3CY4k7PgLaNfB7qbRDQanyh1NUmu&X-Amz-Signature=1fc6ede7c8793eee0221e8781a8207fe337fafd381087a7708e55b39fa4c0535&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665USU77Q4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIEIzPbLMzQ%2FMDFz6XXVJqjH31%2B11z0c6GVh93RtGyxLNAiEArYqjWttA605fuk5EI5Wp9FGeufoW5ApXya9sVP8BLmIq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDHdQIFTtumUnfrPJsSrcA13KFKWaw1%2BNuawI7%2BIwAmHf0ECQiqB%2FU6F2QslRSbgHU74c9Qeo1bAoD8nh%2FbFpJO0wcA2dYKXpkfhCFokD1WSrvYe93%2BplkOAphLVG9Taxquf0osoedbL6QQ%2BWiL4uMLTOvZ03mDqEa4Oabm59PlprYlAk3HOJ9lTfmOXy94YKKLchoCxTOXKOJqoAKlYT1f6CIuBFvpgH%2Bc5%2BuMB03ymPB5TdxWtfhB%2FQDNDL8i9Y5ZOGBvpEruJBHcyGr%2BZIsPDveD0mYHjLJnmrQc3QBzEqA9LvupBsMneuHPphqCi2ExFCk8iWZzy5IBAF2pY0a8mMFIOEmx4QX%2F1dWcn%2BNGG%2FJrrhLK0YwGyKC2LRBM68nfst1bCBsVrmHVTOOhaay%2F40T81yufYm9EdoLwB%2F8mUGdhb7JcIWlecMZKSQJeGxjl%2F7N3y%2FvfDYh2ztFNSeaLxmWPK0TuP9HNiEbtoPfr6IYO3SZy43CxDwCaRUYK6wlnB7ztD8xbCIFGDTkANNK%2FqiBhn474N8JV4H8Ii79bYjqqRCgeaUO%2FA%2F6c384ZeJOXLY2rVmMjtGieP0CW%2Fm8jYOgJwA0S5iWP1N6QamRG3cmayv%2FPn%2FN4PIakz4EdVR4KU%2FlfaedhpXUjzIMNL3i8QGOqUBK22IFLzhOJzfhIof16%2Bg921t1X8umQUnSXPyk%2Bp3KzH2LyrLIhX1V%2FUdIZM0RIk5pTKitTkY7%2FNX4296DXtxg%2BAHloDFko2GMyZgMOlhu1Sbm4FmFFwq8Rgi2x7T5UtXt%2FBz2J4x2Bu%2BA94UFR%2B1plM7RmrBtS%2BrdNdXs2O5LXbdlKKSJZKhQw5I4XBsUElG3CY4k7PgLaNfB7qbRDQanyh1NUmu&X-Amz-Signature=170573ec78edf9bc57b41cdea7bac46a00db6e165f1f978379b5411f27dca0ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665USU77Q4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIEIzPbLMzQ%2FMDFz6XXVJqjH31%2B11z0c6GVh93RtGyxLNAiEArYqjWttA605fuk5EI5Wp9FGeufoW5ApXya9sVP8BLmIq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDHdQIFTtumUnfrPJsSrcA13KFKWaw1%2BNuawI7%2BIwAmHf0ECQiqB%2FU6F2QslRSbgHU74c9Qeo1bAoD8nh%2FbFpJO0wcA2dYKXpkfhCFokD1WSrvYe93%2BplkOAphLVG9Taxquf0osoedbL6QQ%2BWiL4uMLTOvZ03mDqEa4Oabm59PlprYlAk3HOJ9lTfmOXy94YKKLchoCxTOXKOJqoAKlYT1f6CIuBFvpgH%2Bc5%2BuMB03ymPB5TdxWtfhB%2FQDNDL8i9Y5ZOGBvpEruJBHcyGr%2BZIsPDveD0mYHjLJnmrQc3QBzEqA9LvupBsMneuHPphqCi2ExFCk8iWZzy5IBAF2pY0a8mMFIOEmx4QX%2F1dWcn%2BNGG%2FJrrhLK0YwGyKC2LRBM68nfst1bCBsVrmHVTOOhaay%2F40T81yufYm9EdoLwB%2F8mUGdhb7JcIWlecMZKSQJeGxjl%2F7N3y%2FvfDYh2ztFNSeaLxmWPK0TuP9HNiEbtoPfr6IYO3SZy43CxDwCaRUYK6wlnB7ztD8xbCIFGDTkANNK%2FqiBhn474N8JV4H8Ii79bYjqqRCgeaUO%2FA%2F6c384ZeJOXLY2rVmMjtGieP0CW%2Fm8jYOgJwA0S5iWP1N6QamRG3cmayv%2FPn%2FN4PIakz4EdVR4KU%2FlfaedhpXUjzIMNL3i8QGOqUBK22IFLzhOJzfhIof16%2Bg921t1X8umQUnSXPyk%2Bp3KzH2LyrLIhX1V%2FUdIZM0RIk5pTKitTkY7%2FNX4296DXtxg%2BAHloDFko2GMyZgMOlhu1Sbm4FmFFwq8Rgi2x7T5UtXt%2FBz2J4x2Bu%2BA94UFR%2B1plM7RmrBtS%2BrdNdXs2O5LXbdlKKSJZKhQw5I4XBsUElG3CY4k7PgLaNfB7qbRDQanyh1NUmu&X-Amz-Signature=e65c81b69bb4298957397a637a5e40fd72acacad70efccd1c0db86f1ab483815&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665USU77Q4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIEIzPbLMzQ%2FMDFz6XXVJqjH31%2B11z0c6GVh93RtGyxLNAiEArYqjWttA605fuk5EI5Wp9FGeufoW5ApXya9sVP8BLmIq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDHdQIFTtumUnfrPJsSrcA13KFKWaw1%2BNuawI7%2BIwAmHf0ECQiqB%2FU6F2QslRSbgHU74c9Qeo1bAoD8nh%2FbFpJO0wcA2dYKXpkfhCFokD1WSrvYe93%2BplkOAphLVG9Taxquf0osoedbL6QQ%2BWiL4uMLTOvZ03mDqEa4Oabm59PlprYlAk3HOJ9lTfmOXy94YKKLchoCxTOXKOJqoAKlYT1f6CIuBFvpgH%2Bc5%2BuMB03ymPB5TdxWtfhB%2FQDNDL8i9Y5ZOGBvpEruJBHcyGr%2BZIsPDveD0mYHjLJnmrQc3QBzEqA9LvupBsMneuHPphqCi2ExFCk8iWZzy5IBAF2pY0a8mMFIOEmx4QX%2F1dWcn%2BNGG%2FJrrhLK0YwGyKC2LRBM68nfst1bCBsVrmHVTOOhaay%2F40T81yufYm9EdoLwB%2F8mUGdhb7JcIWlecMZKSQJeGxjl%2F7N3y%2FvfDYh2ztFNSeaLxmWPK0TuP9HNiEbtoPfr6IYO3SZy43CxDwCaRUYK6wlnB7ztD8xbCIFGDTkANNK%2FqiBhn474N8JV4H8Ii79bYjqqRCgeaUO%2FA%2F6c384ZeJOXLY2rVmMjtGieP0CW%2Fm8jYOgJwA0S5iWP1N6QamRG3cmayv%2FPn%2FN4PIakz4EdVR4KU%2FlfaedhpXUjzIMNL3i8QGOqUBK22IFLzhOJzfhIof16%2Bg921t1X8umQUnSXPyk%2Bp3KzH2LyrLIhX1V%2FUdIZM0RIk5pTKitTkY7%2FNX4296DXtxg%2BAHloDFko2GMyZgMOlhu1Sbm4FmFFwq8Rgi2x7T5UtXt%2FBz2J4x2Bu%2BA94UFR%2B1plM7RmrBtS%2BrdNdXs2O5LXbdlKKSJZKhQw5I4XBsUElG3CY4k7PgLaNfB7qbRDQanyh1NUmu&X-Amz-Signature=cd9d66c0171fb4708f7eded25a1aa5abac36ff3cdc6cdb6b2fa3304c05582978&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665USU77Q4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIEIzPbLMzQ%2FMDFz6XXVJqjH31%2B11z0c6GVh93RtGyxLNAiEArYqjWttA605fuk5EI5Wp9FGeufoW5ApXya9sVP8BLmIq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDHdQIFTtumUnfrPJsSrcA13KFKWaw1%2BNuawI7%2BIwAmHf0ECQiqB%2FU6F2QslRSbgHU74c9Qeo1bAoD8nh%2FbFpJO0wcA2dYKXpkfhCFokD1WSrvYe93%2BplkOAphLVG9Taxquf0osoedbL6QQ%2BWiL4uMLTOvZ03mDqEa4Oabm59PlprYlAk3HOJ9lTfmOXy94YKKLchoCxTOXKOJqoAKlYT1f6CIuBFvpgH%2Bc5%2BuMB03ymPB5TdxWtfhB%2FQDNDL8i9Y5ZOGBvpEruJBHcyGr%2BZIsPDveD0mYHjLJnmrQc3QBzEqA9LvupBsMneuHPphqCi2ExFCk8iWZzy5IBAF2pY0a8mMFIOEmx4QX%2F1dWcn%2BNGG%2FJrrhLK0YwGyKC2LRBM68nfst1bCBsVrmHVTOOhaay%2F40T81yufYm9EdoLwB%2F8mUGdhb7JcIWlecMZKSQJeGxjl%2F7N3y%2FvfDYh2ztFNSeaLxmWPK0TuP9HNiEbtoPfr6IYO3SZy43CxDwCaRUYK6wlnB7ztD8xbCIFGDTkANNK%2FqiBhn474N8JV4H8Ii79bYjqqRCgeaUO%2FA%2F6c384ZeJOXLY2rVmMjtGieP0CW%2Fm8jYOgJwA0S5iWP1N6QamRG3cmayv%2FPn%2FN4PIakz4EdVR4KU%2FlfaedhpXUjzIMNL3i8QGOqUBK22IFLzhOJzfhIof16%2Bg921t1X8umQUnSXPyk%2Bp3KzH2LyrLIhX1V%2FUdIZM0RIk5pTKitTkY7%2FNX4296DXtxg%2BAHloDFko2GMyZgMOlhu1Sbm4FmFFwq8Rgi2x7T5UtXt%2FBz2J4x2Bu%2BA94UFR%2B1plM7RmrBtS%2BrdNdXs2O5LXbdlKKSJZKhQw5I4XBsUElG3CY4k7PgLaNfB7qbRDQanyh1NUmu&X-Amz-Signature=74b55e479983626e6d6c4dfc39b08960661aabcb641726d063dc334fc3953b3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
