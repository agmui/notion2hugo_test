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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623CM7S7T%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIFjMcmiNt2RQH3m3L%2BJSW8UR%2Bj%2FuivVmsChCbrvoQJ6rAiBXSOuvnb2TdfehvQMu8GOtoQl4Qchtv22ykVKkwBpLHCr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM3jA6zJBmClWVd4YXKtwDaqpEn1JingVqHKnFzy3aJP7Ct%2BRKCJBehgFkQXvVWOe94MIOQGPOCObUy6gMoKeqx32Fpv4NMCO48P86b0q6yvWtxle51t3pKnYh7g4KpZEC5X0cslEtSUaSYGB6bBLf5tc4WIJPupMJzVgcEeZv%2F%2BE74dYPKXvDasvQwAHXfiqxWIBQOiGwzDFvgz1SnWiyXyiiacIqqCtMrgKBbYwO5mzSq1LQwRxNH3NC1y27mysKNwPZXyMSYw9B%2Fsbjbp2QqaJ2AWBJPqDc0A5PmbNMBA2B2oaGl%2FUATZ9%2F2WBC0%2BxS9edknN6cbkBM2HlHp0uo1CGVNrOXLQErI4TfJImJ5obm9Q1RLBFBqd6%2FUPT2nzHgnDiv9HmY%2BSN1KDCnpzbSiWQYnp9TGjpMn%2BKrSLbX5eOx%2FqXVVvw%2BmURdR7vsGnS%2BI433elDpY8D8PEhjdSevY4RFH2Zvv5GMnDodvzhtzZyKJIZOMhdg%2Be5QjJBqo%2BJOGA4XXRREbd7JZDJ4TExJ7hDcabA81Z5cdDZKCCQiC0p3UDt0v7W5iuNjyetJhK6G4HaL8TP9FjKijOqSMs9rDClnaK0xIES7rqYjewNP9xm0lQzP1zGbBCTc6jlCFDW%2B70Gp%2FtYDMUrWi1QwwpyMxAY6pgEIahIRObZsc%2F%2B69x1YQ%2BMUNaCmpJh8ppxgDKu9L1%2FJgGubzFTfIhehcMvquZ%2FP6dKSK0LTiuxya%2FMSHUP1RAs8lxVEEMw7Un9T8%2BasPvMEFUzcZ9FElfsGn2bDuX66frFy%2BUkEzRyueiGg3zkhXYYOwWS7HVO4Pu9fDtryz%2BR63Zm1PJMh1mn%2Bj6HHjmJZEF%2FVm8p5GPpjwuplydy3TaNdvqdd8tmW&X-Amz-Signature=334ed9a82485e11e76b40998e07f25496b2bc0811316f45418c92a41c61aeaa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623CM7S7T%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIFjMcmiNt2RQH3m3L%2BJSW8UR%2Bj%2FuivVmsChCbrvoQJ6rAiBXSOuvnb2TdfehvQMu8GOtoQl4Qchtv22ykVKkwBpLHCr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM3jA6zJBmClWVd4YXKtwDaqpEn1JingVqHKnFzy3aJP7Ct%2BRKCJBehgFkQXvVWOe94MIOQGPOCObUy6gMoKeqx32Fpv4NMCO48P86b0q6yvWtxle51t3pKnYh7g4KpZEC5X0cslEtSUaSYGB6bBLf5tc4WIJPupMJzVgcEeZv%2F%2BE74dYPKXvDasvQwAHXfiqxWIBQOiGwzDFvgz1SnWiyXyiiacIqqCtMrgKBbYwO5mzSq1LQwRxNH3NC1y27mysKNwPZXyMSYw9B%2Fsbjbp2QqaJ2AWBJPqDc0A5PmbNMBA2B2oaGl%2FUATZ9%2F2WBC0%2BxS9edknN6cbkBM2HlHp0uo1CGVNrOXLQErI4TfJImJ5obm9Q1RLBFBqd6%2FUPT2nzHgnDiv9HmY%2BSN1KDCnpzbSiWQYnp9TGjpMn%2BKrSLbX5eOx%2FqXVVvw%2BmURdR7vsGnS%2BI433elDpY8D8PEhjdSevY4RFH2Zvv5GMnDodvzhtzZyKJIZOMhdg%2Be5QjJBqo%2BJOGA4XXRREbd7JZDJ4TExJ7hDcabA81Z5cdDZKCCQiC0p3UDt0v7W5iuNjyetJhK6G4HaL8TP9FjKijOqSMs9rDClnaK0xIES7rqYjewNP9xm0lQzP1zGbBCTc6jlCFDW%2B70Gp%2FtYDMUrWi1QwwpyMxAY6pgEIahIRObZsc%2F%2B69x1YQ%2BMUNaCmpJh8ppxgDKu9L1%2FJgGubzFTfIhehcMvquZ%2FP6dKSK0LTiuxya%2FMSHUP1RAs8lxVEEMw7Un9T8%2BasPvMEFUzcZ9FElfsGn2bDuX66frFy%2BUkEzRyueiGg3zkhXYYOwWS7HVO4Pu9fDtryz%2BR63Zm1PJMh1mn%2Bj6HHjmJZEF%2FVm8p5GPpjwuplydy3TaNdvqdd8tmW&X-Amz-Signature=6b0a4286fbafd1fc84de8e6ea64f188f55b9a12817abe033b83df7e6014cc9f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623CM7S7T%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIFjMcmiNt2RQH3m3L%2BJSW8UR%2Bj%2FuivVmsChCbrvoQJ6rAiBXSOuvnb2TdfehvQMu8GOtoQl4Qchtv22ykVKkwBpLHCr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM3jA6zJBmClWVd4YXKtwDaqpEn1JingVqHKnFzy3aJP7Ct%2BRKCJBehgFkQXvVWOe94MIOQGPOCObUy6gMoKeqx32Fpv4NMCO48P86b0q6yvWtxle51t3pKnYh7g4KpZEC5X0cslEtSUaSYGB6bBLf5tc4WIJPupMJzVgcEeZv%2F%2BE74dYPKXvDasvQwAHXfiqxWIBQOiGwzDFvgz1SnWiyXyiiacIqqCtMrgKBbYwO5mzSq1LQwRxNH3NC1y27mysKNwPZXyMSYw9B%2Fsbjbp2QqaJ2AWBJPqDc0A5PmbNMBA2B2oaGl%2FUATZ9%2F2WBC0%2BxS9edknN6cbkBM2HlHp0uo1CGVNrOXLQErI4TfJImJ5obm9Q1RLBFBqd6%2FUPT2nzHgnDiv9HmY%2BSN1KDCnpzbSiWQYnp9TGjpMn%2BKrSLbX5eOx%2FqXVVvw%2BmURdR7vsGnS%2BI433elDpY8D8PEhjdSevY4RFH2Zvv5GMnDodvzhtzZyKJIZOMhdg%2Be5QjJBqo%2BJOGA4XXRREbd7JZDJ4TExJ7hDcabA81Z5cdDZKCCQiC0p3UDt0v7W5iuNjyetJhK6G4HaL8TP9FjKijOqSMs9rDClnaK0xIES7rqYjewNP9xm0lQzP1zGbBCTc6jlCFDW%2B70Gp%2FtYDMUrWi1QwwpyMxAY6pgEIahIRObZsc%2F%2B69x1YQ%2BMUNaCmpJh8ppxgDKu9L1%2FJgGubzFTfIhehcMvquZ%2FP6dKSK0LTiuxya%2FMSHUP1RAs8lxVEEMw7Un9T8%2BasPvMEFUzcZ9FElfsGn2bDuX66frFy%2BUkEzRyueiGg3zkhXYYOwWS7HVO4Pu9fDtryz%2BR63Zm1PJMh1mn%2Bj6HHjmJZEF%2FVm8p5GPpjwuplydy3TaNdvqdd8tmW&X-Amz-Signature=e5f6399516ae05392b97dd8e39a3a7ca3f7da46c5a5231aa73e1dbf41ab35349&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623CM7S7T%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIFjMcmiNt2RQH3m3L%2BJSW8UR%2Bj%2FuivVmsChCbrvoQJ6rAiBXSOuvnb2TdfehvQMu8GOtoQl4Qchtv22ykVKkwBpLHCr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM3jA6zJBmClWVd4YXKtwDaqpEn1JingVqHKnFzy3aJP7Ct%2BRKCJBehgFkQXvVWOe94MIOQGPOCObUy6gMoKeqx32Fpv4NMCO48P86b0q6yvWtxle51t3pKnYh7g4KpZEC5X0cslEtSUaSYGB6bBLf5tc4WIJPupMJzVgcEeZv%2F%2BE74dYPKXvDasvQwAHXfiqxWIBQOiGwzDFvgz1SnWiyXyiiacIqqCtMrgKBbYwO5mzSq1LQwRxNH3NC1y27mysKNwPZXyMSYw9B%2Fsbjbp2QqaJ2AWBJPqDc0A5PmbNMBA2B2oaGl%2FUATZ9%2F2WBC0%2BxS9edknN6cbkBM2HlHp0uo1CGVNrOXLQErI4TfJImJ5obm9Q1RLBFBqd6%2FUPT2nzHgnDiv9HmY%2BSN1KDCnpzbSiWQYnp9TGjpMn%2BKrSLbX5eOx%2FqXVVvw%2BmURdR7vsGnS%2BI433elDpY8D8PEhjdSevY4RFH2Zvv5GMnDodvzhtzZyKJIZOMhdg%2Be5QjJBqo%2BJOGA4XXRREbd7JZDJ4TExJ7hDcabA81Z5cdDZKCCQiC0p3UDt0v7W5iuNjyetJhK6G4HaL8TP9FjKijOqSMs9rDClnaK0xIES7rqYjewNP9xm0lQzP1zGbBCTc6jlCFDW%2B70Gp%2FtYDMUrWi1QwwpyMxAY6pgEIahIRObZsc%2F%2B69x1YQ%2BMUNaCmpJh8ppxgDKu9L1%2FJgGubzFTfIhehcMvquZ%2FP6dKSK0LTiuxya%2FMSHUP1RAs8lxVEEMw7Un9T8%2BasPvMEFUzcZ9FElfsGn2bDuX66frFy%2BUkEzRyueiGg3zkhXYYOwWS7HVO4Pu9fDtryz%2BR63Zm1PJMh1mn%2Bj6HHjmJZEF%2FVm8p5GPpjwuplydy3TaNdvqdd8tmW&X-Amz-Signature=f63b4c77c29deaf3069acb73eb422320999b8e1e76c2726a1a5794d481ca8141&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623CM7S7T%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIFjMcmiNt2RQH3m3L%2BJSW8UR%2Bj%2FuivVmsChCbrvoQJ6rAiBXSOuvnb2TdfehvQMu8GOtoQl4Qchtv22ykVKkwBpLHCr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM3jA6zJBmClWVd4YXKtwDaqpEn1JingVqHKnFzy3aJP7Ct%2BRKCJBehgFkQXvVWOe94MIOQGPOCObUy6gMoKeqx32Fpv4NMCO48P86b0q6yvWtxle51t3pKnYh7g4KpZEC5X0cslEtSUaSYGB6bBLf5tc4WIJPupMJzVgcEeZv%2F%2BE74dYPKXvDasvQwAHXfiqxWIBQOiGwzDFvgz1SnWiyXyiiacIqqCtMrgKBbYwO5mzSq1LQwRxNH3NC1y27mysKNwPZXyMSYw9B%2Fsbjbp2QqaJ2AWBJPqDc0A5PmbNMBA2B2oaGl%2FUATZ9%2F2WBC0%2BxS9edknN6cbkBM2HlHp0uo1CGVNrOXLQErI4TfJImJ5obm9Q1RLBFBqd6%2FUPT2nzHgnDiv9HmY%2BSN1KDCnpzbSiWQYnp9TGjpMn%2BKrSLbX5eOx%2FqXVVvw%2BmURdR7vsGnS%2BI433elDpY8D8PEhjdSevY4RFH2Zvv5GMnDodvzhtzZyKJIZOMhdg%2Be5QjJBqo%2BJOGA4XXRREbd7JZDJ4TExJ7hDcabA81Z5cdDZKCCQiC0p3UDt0v7W5iuNjyetJhK6G4HaL8TP9FjKijOqSMs9rDClnaK0xIES7rqYjewNP9xm0lQzP1zGbBCTc6jlCFDW%2B70Gp%2FtYDMUrWi1QwwpyMxAY6pgEIahIRObZsc%2F%2B69x1YQ%2BMUNaCmpJh8ppxgDKu9L1%2FJgGubzFTfIhehcMvquZ%2FP6dKSK0LTiuxya%2FMSHUP1RAs8lxVEEMw7Un9T8%2BasPvMEFUzcZ9FElfsGn2bDuX66frFy%2BUkEzRyueiGg3zkhXYYOwWS7HVO4Pu9fDtryz%2BR63Zm1PJMh1mn%2Bj6HHjmJZEF%2FVm8p5GPpjwuplydy3TaNdvqdd8tmW&X-Amz-Signature=ce998d2be80fa4d5999d427c6e8c5ffe7317c6dda932cbc38c25fcecf587492c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623CM7S7T%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIFjMcmiNt2RQH3m3L%2BJSW8UR%2Bj%2FuivVmsChCbrvoQJ6rAiBXSOuvnb2TdfehvQMu8GOtoQl4Qchtv22ykVKkwBpLHCr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM3jA6zJBmClWVd4YXKtwDaqpEn1JingVqHKnFzy3aJP7Ct%2BRKCJBehgFkQXvVWOe94MIOQGPOCObUy6gMoKeqx32Fpv4NMCO48P86b0q6yvWtxle51t3pKnYh7g4KpZEC5X0cslEtSUaSYGB6bBLf5tc4WIJPupMJzVgcEeZv%2F%2BE74dYPKXvDasvQwAHXfiqxWIBQOiGwzDFvgz1SnWiyXyiiacIqqCtMrgKBbYwO5mzSq1LQwRxNH3NC1y27mysKNwPZXyMSYw9B%2Fsbjbp2QqaJ2AWBJPqDc0A5PmbNMBA2B2oaGl%2FUATZ9%2F2WBC0%2BxS9edknN6cbkBM2HlHp0uo1CGVNrOXLQErI4TfJImJ5obm9Q1RLBFBqd6%2FUPT2nzHgnDiv9HmY%2BSN1KDCnpzbSiWQYnp9TGjpMn%2BKrSLbX5eOx%2FqXVVvw%2BmURdR7vsGnS%2BI433elDpY8D8PEhjdSevY4RFH2Zvv5GMnDodvzhtzZyKJIZOMhdg%2Be5QjJBqo%2BJOGA4XXRREbd7JZDJ4TExJ7hDcabA81Z5cdDZKCCQiC0p3UDt0v7W5iuNjyetJhK6G4HaL8TP9FjKijOqSMs9rDClnaK0xIES7rqYjewNP9xm0lQzP1zGbBCTc6jlCFDW%2B70Gp%2FtYDMUrWi1QwwpyMxAY6pgEIahIRObZsc%2F%2B69x1YQ%2BMUNaCmpJh8ppxgDKu9L1%2FJgGubzFTfIhehcMvquZ%2FP6dKSK0LTiuxya%2FMSHUP1RAs8lxVEEMw7Un9T8%2BasPvMEFUzcZ9FElfsGn2bDuX66frFy%2BUkEzRyueiGg3zkhXYYOwWS7HVO4Pu9fDtryz%2BR63Zm1PJMh1mn%2Bj6HHjmJZEF%2FVm8p5GPpjwuplydy3TaNdvqdd8tmW&X-Amz-Signature=e2e2c359b9e5e3c0b5578204049626e6c6e5ad822af9b243b5c9a15ceedc55e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
