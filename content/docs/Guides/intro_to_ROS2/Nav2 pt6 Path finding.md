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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUIWYHRV%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGlrUmAuEdX0OvyN8JwvpAvcU1M%2Ftg5O9YV75NjXR%2BTeAiAC9Pc0ppCPcKOIyXZXWW7ea4DJxu%2BB90aoWGlsXBTwzir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMg38HAkbxeyCdn%2FBCKtwD%2B5%2Fh9cp3DEC5hVSAc%2BB9eXRdfCR3tSfYN5aa3TEpOQp1WkzV0IL9h5e3a9FiNEhQzKFvoJKQ0fFF1tet6wAOMDKz5sVfS59b9gjUcik0LygikcqecwG805OPmYQ1vJKWw7gnft8MtwF%2FFmPYyWvsk%2BSnkzac9zjSHh9uZAxSsLl2BH5X6VMqT1Ii4XyLoeyJ9JQhk6kipEg9H8%2BH1mjDRGQrYu0JftkTXK%2FJprtqPoBKp9UmKTzAsgR1KzXOQFUToJrpZFSe%2FotUMpPm8IwT5cUJB9j25jgSVAESMFJuxrat%2BMDyPbKBGxCIpWFHo8cwegJsLFtOqjtSipgyTM01pSkhvU0ut2bTT7sWFX7PFGsL9md8lPOEMshrmHaAWE%2Fq2ke%2Bb5zlsMiRNfsJQF0M%2FRuOhj7I0aXyxguyRme5QJRKMIUeyfaD1eZUEznMbYq1OmdS6mvHZLN3Jui76yCeI3MkfuooTGkH7t5rijBKkDtxNsUNV89Ar%2F49ujjPHv%2F94F%2BWiYlMHHz5R3AdJWR0872QKCwGwmCCsFT1oLY9rtNbvUD5eu97yzNgzNSVUBZHIizVtZRLvS3Lpqc31IwZVx0neS0dzoBdmKkctrmy9W38%2BEwxG5Bw615gOXUw1%2FeAxQY6pgEutwNat1m%2Fsn5cCHwrUXsCbVLJlin4iBBc%2Bm1jCRFIAF64SjJDZB7pVFgpB91r4NCposvdWlCLDfZt%2FgYDLug6Iics0c%2FqoUFXxo48ns4%2Ba9on6IFgSblgJvYcyR6D3weLf6x8L%2FjyPyt4lxGbHNDfHCE%2Fo019CzEMMAejJuk6r8V%2FQF0%2FCetc3bsDUd4oPOq1Bw2VuPa2m803KcxTf7Jx9fqvpIxB&X-Amz-Signature=e68fa37b4cbc747276d5e29a635ad2d4c0ec24ed949f37e2178cb8ad80616e97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUIWYHRV%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGlrUmAuEdX0OvyN8JwvpAvcU1M%2Ftg5O9YV75NjXR%2BTeAiAC9Pc0ppCPcKOIyXZXWW7ea4DJxu%2BB90aoWGlsXBTwzir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMg38HAkbxeyCdn%2FBCKtwD%2B5%2Fh9cp3DEC5hVSAc%2BB9eXRdfCR3tSfYN5aa3TEpOQp1WkzV0IL9h5e3a9FiNEhQzKFvoJKQ0fFF1tet6wAOMDKz5sVfS59b9gjUcik0LygikcqecwG805OPmYQ1vJKWw7gnft8MtwF%2FFmPYyWvsk%2BSnkzac9zjSHh9uZAxSsLl2BH5X6VMqT1Ii4XyLoeyJ9JQhk6kipEg9H8%2BH1mjDRGQrYu0JftkTXK%2FJprtqPoBKp9UmKTzAsgR1KzXOQFUToJrpZFSe%2FotUMpPm8IwT5cUJB9j25jgSVAESMFJuxrat%2BMDyPbKBGxCIpWFHo8cwegJsLFtOqjtSipgyTM01pSkhvU0ut2bTT7sWFX7PFGsL9md8lPOEMshrmHaAWE%2Fq2ke%2Bb5zlsMiRNfsJQF0M%2FRuOhj7I0aXyxguyRme5QJRKMIUeyfaD1eZUEznMbYq1OmdS6mvHZLN3Jui76yCeI3MkfuooTGkH7t5rijBKkDtxNsUNV89Ar%2F49ujjPHv%2F94F%2BWiYlMHHz5R3AdJWR0872QKCwGwmCCsFT1oLY9rtNbvUD5eu97yzNgzNSVUBZHIizVtZRLvS3Lpqc31IwZVx0neS0dzoBdmKkctrmy9W38%2BEwxG5Bw615gOXUw1%2FeAxQY6pgEutwNat1m%2Fsn5cCHwrUXsCbVLJlin4iBBc%2Bm1jCRFIAF64SjJDZB7pVFgpB91r4NCposvdWlCLDfZt%2FgYDLug6Iics0c%2FqoUFXxo48ns4%2Ba9on6IFgSblgJvYcyR6D3weLf6x8L%2FjyPyt4lxGbHNDfHCE%2Fo019CzEMMAejJuk6r8V%2FQF0%2FCetc3bsDUd4oPOq1Bw2VuPa2m803KcxTf7Jx9fqvpIxB&X-Amz-Signature=9d516a8babf06f385d832114e7896363549cd1bba6b8c653d58f502827b77452&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUIWYHRV%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGlrUmAuEdX0OvyN8JwvpAvcU1M%2Ftg5O9YV75NjXR%2BTeAiAC9Pc0ppCPcKOIyXZXWW7ea4DJxu%2BB90aoWGlsXBTwzir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMg38HAkbxeyCdn%2FBCKtwD%2B5%2Fh9cp3DEC5hVSAc%2BB9eXRdfCR3tSfYN5aa3TEpOQp1WkzV0IL9h5e3a9FiNEhQzKFvoJKQ0fFF1tet6wAOMDKz5sVfS59b9gjUcik0LygikcqecwG805OPmYQ1vJKWw7gnft8MtwF%2FFmPYyWvsk%2BSnkzac9zjSHh9uZAxSsLl2BH5X6VMqT1Ii4XyLoeyJ9JQhk6kipEg9H8%2BH1mjDRGQrYu0JftkTXK%2FJprtqPoBKp9UmKTzAsgR1KzXOQFUToJrpZFSe%2FotUMpPm8IwT5cUJB9j25jgSVAESMFJuxrat%2BMDyPbKBGxCIpWFHo8cwegJsLFtOqjtSipgyTM01pSkhvU0ut2bTT7sWFX7PFGsL9md8lPOEMshrmHaAWE%2Fq2ke%2Bb5zlsMiRNfsJQF0M%2FRuOhj7I0aXyxguyRme5QJRKMIUeyfaD1eZUEznMbYq1OmdS6mvHZLN3Jui76yCeI3MkfuooTGkH7t5rijBKkDtxNsUNV89Ar%2F49ujjPHv%2F94F%2BWiYlMHHz5R3AdJWR0872QKCwGwmCCsFT1oLY9rtNbvUD5eu97yzNgzNSVUBZHIizVtZRLvS3Lpqc31IwZVx0neS0dzoBdmKkctrmy9W38%2BEwxG5Bw615gOXUw1%2FeAxQY6pgEutwNat1m%2Fsn5cCHwrUXsCbVLJlin4iBBc%2Bm1jCRFIAF64SjJDZB7pVFgpB91r4NCposvdWlCLDfZt%2FgYDLug6Iics0c%2FqoUFXxo48ns4%2Ba9on6IFgSblgJvYcyR6D3weLf6x8L%2FjyPyt4lxGbHNDfHCE%2Fo019CzEMMAejJuk6r8V%2FQF0%2FCetc3bsDUd4oPOq1Bw2VuPa2m803KcxTf7Jx9fqvpIxB&X-Amz-Signature=c93dc2d807a3938a283bf398e5aeeb87ceea2e8499f3c5e02223c60f2b030916&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUIWYHRV%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGlrUmAuEdX0OvyN8JwvpAvcU1M%2Ftg5O9YV75NjXR%2BTeAiAC9Pc0ppCPcKOIyXZXWW7ea4DJxu%2BB90aoWGlsXBTwzir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMg38HAkbxeyCdn%2FBCKtwD%2B5%2Fh9cp3DEC5hVSAc%2BB9eXRdfCR3tSfYN5aa3TEpOQp1WkzV0IL9h5e3a9FiNEhQzKFvoJKQ0fFF1tet6wAOMDKz5sVfS59b9gjUcik0LygikcqecwG805OPmYQ1vJKWw7gnft8MtwF%2FFmPYyWvsk%2BSnkzac9zjSHh9uZAxSsLl2BH5X6VMqT1Ii4XyLoeyJ9JQhk6kipEg9H8%2BH1mjDRGQrYu0JftkTXK%2FJprtqPoBKp9UmKTzAsgR1KzXOQFUToJrpZFSe%2FotUMpPm8IwT5cUJB9j25jgSVAESMFJuxrat%2BMDyPbKBGxCIpWFHo8cwegJsLFtOqjtSipgyTM01pSkhvU0ut2bTT7sWFX7PFGsL9md8lPOEMshrmHaAWE%2Fq2ke%2Bb5zlsMiRNfsJQF0M%2FRuOhj7I0aXyxguyRme5QJRKMIUeyfaD1eZUEznMbYq1OmdS6mvHZLN3Jui76yCeI3MkfuooTGkH7t5rijBKkDtxNsUNV89Ar%2F49ujjPHv%2F94F%2BWiYlMHHz5R3AdJWR0872QKCwGwmCCsFT1oLY9rtNbvUD5eu97yzNgzNSVUBZHIizVtZRLvS3Lpqc31IwZVx0neS0dzoBdmKkctrmy9W38%2BEwxG5Bw615gOXUw1%2FeAxQY6pgEutwNat1m%2Fsn5cCHwrUXsCbVLJlin4iBBc%2Bm1jCRFIAF64SjJDZB7pVFgpB91r4NCposvdWlCLDfZt%2FgYDLug6Iics0c%2FqoUFXxo48ns4%2Ba9on6IFgSblgJvYcyR6D3weLf6x8L%2FjyPyt4lxGbHNDfHCE%2Fo019CzEMMAejJuk6r8V%2FQF0%2FCetc3bsDUd4oPOq1Bw2VuPa2m803KcxTf7Jx9fqvpIxB&X-Amz-Signature=fdb74a4600b2dbee6c3f699c6305b834b4358d8b7aeb067f6020c88349336d61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUIWYHRV%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGlrUmAuEdX0OvyN8JwvpAvcU1M%2Ftg5O9YV75NjXR%2BTeAiAC9Pc0ppCPcKOIyXZXWW7ea4DJxu%2BB90aoWGlsXBTwzir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMg38HAkbxeyCdn%2FBCKtwD%2B5%2Fh9cp3DEC5hVSAc%2BB9eXRdfCR3tSfYN5aa3TEpOQp1WkzV0IL9h5e3a9FiNEhQzKFvoJKQ0fFF1tet6wAOMDKz5sVfS59b9gjUcik0LygikcqecwG805OPmYQ1vJKWw7gnft8MtwF%2FFmPYyWvsk%2BSnkzac9zjSHh9uZAxSsLl2BH5X6VMqT1Ii4XyLoeyJ9JQhk6kipEg9H8%2BH1mjDRGQrYu0JftkTXK%2FJprtqPoBKp9UmKTzAsgR1KzXOQFUToJrpZFSe%2FotUMpPm8IwT5cUJB9j25jgSVAESMFJuxrat%2BMDyPbKBGxCIpWFHo8cwegJsLFtOqjtSipgyTM01pSkhvU0ut2bTT7sWFX7PFGsL9md8lPOEMshrmHaAWE%2Fq2ke%2Bb5zlsMiRNfsJQF0M%2FRuOhj7I0aXyxguyRme5QJRKMIUeyfaD1eZUEznMbYq1OmdS6mvHZLN3Jui76yCeI3MkfuooTGkH7t5rijBKkDtxNsUNV89Ar%2F49ujjPHv%2F94F%2BWiYlMHHz5R3AdJWR0872QKCwGwmCCsFT1oLY9rtNbvUD5eu97yzNgzNSVUBZHIizVtZRLvS3Lpqc31IwZVx0neS0dzoBdmKkctrmy9W38%2BEwxG5Bw615gOXUw1%2FeAxQY6pgEutwNat1m%2Fsn5cCHwrUXsCbVLJlin4iBBc%2Bm1jCRFIAF64SjJDZB7pVFgpB91r4NCposvdWlCLDfZt%2FgYDLug6Iics0c%2FqoUFXxo48ns4%2Ba9on6IFgSblgJvYcyR6D3weLf6x8L%2FjyPyt4lxGbHNDfHCE%2Fo019CzEMMAejJuk6r8V%2FQF0%2FCetc3bsDUd4oPOq1Bw2VuPa2m803KcxTf7Jx9fqvpIxB&X-Amz-Signature=1b99fbee966aa1cc4a2352dbacdfe89491e930bd5a26eacf59cc9b5edfa7b183&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUIWYHRV%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGlrUmAuEdX0OvyN8JwvpAvcU1M%2Ftg5O9YV75NjXR%2BTeAiAC9Pc0ppCPcKOIyXZXWW7ea4DJxu%2BB90aoWGlsXBTwzir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMg38HAkbxeyCdn%2FBCKtwD%2B5%2Fh9cp3DEC5hVSAc%2BB9eXRdfCR3tSfYN5aa3TEpOQp1WkzV0IL9h5e3a9FiNEhQzKFvoJKQ0fFF1tet6wAOMDKz5sVfS59b9gjUcik0LygikcqecwG805OPmYQ1vJKWw7gnft8MtwF%2FFmPYyWvsk%2BSnkzac9zjSHh9uZAxSsLl2BH5X6VMqT1Ii4XyLoeyJ9JQhk6kipEg9H8%2BH1mjDRGQrYu0JftkTXK%2FJprtqPoBKp9UmKTzAsgR1KzXOQFUToJrpZFSe%2FotUMpPm8IwT5cUJB9j25jgSVAESMFJuxrat%2BMDyPbKBGxCIpWFHo8cwegJsLFtOqjtSipgyTM01pSkhvU0ut2bTT7sWFX7PFGsL9md8lPOEMshrmHaAWE%2Fq2ke%2Bb5zlsMiRNfsJQF0M%2FRuOhj7I0aXyxguyRme5QJRKMIUeyfaD1eZUEznMbYq1OmdS6mvHZLN3Jui76yCeI3MkfuooTGkH7t5rijBKkDtxNsUNV89Ar%2F49ujjPHv%2F94F%2BWiYlMHHz5R3AdJWR0872QKCwGwmCCsFT1oLY9rtNbvUD5eu97yzNgzNSVUBZHIizVtZRLvS3Lpqc31IwZVx0neS0dzoBdmKkctrmy9W38%2BEwxG5Bw615gOXUw1%2FeAxQY6pgEutwNat1m%2Fsn5cCHwrUXsCbVLJlin4iBBc%2Bm1jCRFIAF64SjJDZB7pVFgpB91r4NCposvdWlCLDfZt%2FgYDLug6Iics0c%2FqoUFXxo48ns4%2Ba9on6IFgSblgJvYcyR6D3weLf6x8L%2FjyPyt4lxGbHNDfHCE%2Fo019CzEMMAejJuk6r8V%2FQF0%2FCetc3bsDUd4oPOq1Bw2VuPa2m803KcxTf7Jx9fqvpIxB&X-Amz-Signature=16e4f889aeaa1dce8bf43bad8b808176a93115ed9e81e058b63a2fea75118922&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUIWYHRV%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGlrUmAuEdX0OvyN8JwvpAvcU1M%2Ftg5O9YV75NjXR%2BTeAiAC9Pc0ppCPcKOIyXZXWW7ea4DJxu%2BB90aoWGlsXBTwzir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMg38HAkbxeyCdn%2FBCKtwD%2B5%2Fh9cp3DEC5hVSAc%2BB9eXRdfCR3tSfYN5aa3TEpOQp1WkzV0IL9h5e3a9FiNEhQzKFvoJKQ0fFF1tet6wAOMDKz5sVfS59b9gjUcik0LygikcqecwG805OPmYQ1vJKWw7gnft8MtwF%2FFmPYyWvsk%2BSnkzac9zjSHh9uZAxSsLl2BH5X6VMqT1Ii4XyLoeyJ9JQhk6kipEg9H8%2BH1mjDRGQrYu0JftkTXK%2FJprtqPoBKp9UmKTzAsgR1KzXOQFUToJrpZFSe%2FotUMpPm8IwT5cUJB9j25jgSVAESMFJuxrat%2BMDyPbKBGxCIpWFHo8cwegJsLFtOqjtSipgyTM01pSkhvU0ut2bTT7sWFX7PFGsL9md8lPOEMshrmHaAWE%2Fq2ke%2Bb5zlsMiRNfsJQF0M%2FRuOhj7I0aXyxguyRme5QJRKMIUeyfaD1eZUEznMbYq1OmdS6mvHZLN3Jui76yCeI3MkfuooTGkH7t5rijBKkDtxNsUNV89Ar%2F49ujjPHv%2F94F%2BWiYlMHHz5R3AdJWR0872QKCwGwmCCsFT1oLY9rtNbvUD5eu97yzNgzNSVUBZHIizVtZRLvS3Lpqc31IwZVx0neS0dzoBdmKkctrmy9W38%2BEwxG5Bw615gOXUw1%2FeAxQY6pgEutwNat1m%2Fsn5cCHwrUXsCbVLJlin4iBBc%2Bm1jCRFIAF64SjJDZB7pVFgpB91r4NCposvdWlCLDfZt%2FgYDLug6Iics0c%2FqoUFXxo48ns4%2Ba9on6IFgSblgJvYcyR6D3weLf6x8L%2FjyPyt4lxGbHNDfHCE%2Fo019CzEMMAejJuk6r8V%2FQF0%2FCetc3bsDUd4oPOq1Bw2VuPa2m803KcxTf7Jx9fqvpIxB&X-Amz-Signature=db1f3c718bdffa4f87c089aca3484b4867221e166406f0321be7d3da422740f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUIWYHRV%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGlrUmAuEdX0OvyN8JwvpAvcU1M%2Ftg5O9YV75NjXR%2BTeAiAC9Pc0ppCPcKOIyXZXWW7ea4DJxu%2BB90aoWGlsXBTwzir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMg38HAkbxeyCdn%2FBCKtwD%2B5%2Fh9cp3DEC5hVSAc%2BB9eXRdfCR3tSfYN5aa3TEpOQp1WkzV0IL9h5e3a9FiNEhQzKFvoJKQ0fFF1tet6wAOMDKz5sVfS59b9gjUcik0LygikcqecwG805OPmYQ1vJKWw7gnft8MtwF%2FFmPYyWvsk%2BSnkzac9zjSHh9uZAxSsLl2BH5X6VMqT1Ii4XyLoeyJ9JQhk6kipEg9H8%2BH1mjDRGQrYu0JftkTXK%2FJprtqPoBKp9UmKTzAsgR1KzXOQFUToJrpZFSe%2FotUMpPm8IwT5cUJB9j25jgSVAESMFJuxrat%2BMDyPbKBGxCIpWFHo8cwegJsLFtOqjtSipgyTM01pSkhvU0ut2bTT7sWFX7PFGsL9md8lPOEMshrmHaAWE%2Fq2ke%2Bb5zlsMiRNfsJQF0M%2FRuOhj7I0aXyxguyRme5QJRKMIUeyfaD1eZUEznMbYq1OmdS6mvHZLN3Jui76yCeI3MkfuooTGkH7t5rijBKkDtxNsUNV89Ar%2F49ujjPHv%2F94F%2BWiYlMHHz5R3AdJWR0872QKCwGwmCCsFT1oLY9rtNbvUD5eu97yzNgzNSVUBZHIizVtZRLvS3Lpqc31IwZVx0neS0dzoBdmKkctrmy9W38%2BEwxG5Bw615gOXUw1%2FeAxQY6pgEutwNat1m%2Fsn5cCHwrUXsCbVLJlin4iBBc%2Bm1jCRFIAF64SjJDZB7pVFgpB91r4NCposvdWlCLDfZt%2FgYDLug6Iics0c%2FqoUFXxo48ns4%2Ba9on6IFgSblgJvYcyR6D3weLf6x8L%2FjyPyt4lxGbHNDfHCE%2Fo019CzEMMAejJuk6r8V%2FQF0%2FCetc3bsDUd4oPOq1Bw2VuPa2m803KcxTf7Jx9fqvpIxB&X-Amz-Signature=293bf252a2e41d53dff0967b33b9099a90b7442f15e0fc6bdf9c835abd354968&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUIWYHRV%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGlrUmAuEdX0OvyN8JwvpAvcU1M%2Ftg5O9YV75NjXR%2BTeAiAC9Pc0ppCPcKOIyXZXWW7ea4DJxu%2BB90aoWGlsXBTwzir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMg38HAkbxeyCdn%2FBCKtwD%2B5%2Fh9cp3DEC5hVSAc%2BB9eXRdfCR3tSfYN5aa3TEpOQp1WkzV0IL9h5e3a9FiNEhQzKFvoJKQ0fFF1tet6wAOMDKz5sVfS59b9gjUcik0LygikcqecwG805OPmYQ1vJKWw7gnft8MtwF%2FFmPYyWvsk%2BSnkzac9zjSHh9uZAxSsLl2BH5X6VMqT1Ii4XyLoeyJ9JQhk6kipEg9H8%2BH1mjDRGQrYu0JftkTXK%2FJprtqPoBKp9UmKTzAsgR1KzXOQFUToJrpZFSe%2FotUMpPm8IwT5cUJB9j25jgSVAESMFJuxrat%2BMDyPbKBGxCIpWFHo8cwegJsLFtOqjtSipgyTM01pSkhvU0ut2bTT7sWFX7PFGsL9md8lPOEMshrmHaAWE%2Fq2ke%2Bb5zlsMiRNfsJQF0M%2FRuOhj7I0aXyxguyRme5QJRKMIUeyfaD1eZUEznMbYq1OmdS6mvHZLN3Jui76yCeI3MkfuooTGkH7t5rijBKkDtxNsUNV89Ar%2F49ujjPHv%2F94F%2BWiYlMHHz5R3AdJWR0872QKCwGwmCCsFT1oLY9rtNbvUD5eu97yzNgzNSVUBZHIizVtZRLvS3Lpqc31IwZVx0neS0dzoBdmKkctrmy9W38%2BEwxG5Bw615gOXUw1%2FeAxQY6pgEutwNat1m%2Fsn5cCHwrUXsCbVLJlin4iBBc%2Bm1jCRFIAF64SjJDZB7pVFgpB91r4NCposvdWlCLDfZt%2FgYDLug6Iics0c%2FqoUFXxo48ns4%2Ba9on6IFgSblgJvYcyR6D3weLf6x8L%2FjyPyt4lxGbHNDfHCE%2Fo019CzEMMAejJuk6r8V%2FQF0%2FCetc3bsDUd4oPOq1Bw2VuPa2m803KcxTf7Jx9fqvpIxB&X-Amz-Signature=8aaf77216677a77f4508af196e4d68fc54e921a9e62ab7a83aff5b3e6ee6c38a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUIWYHRV%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGlrUmAuEdX0OvyN8JwvpAvcU1M%2Ftg5O9YV75NjXR%2BTeAiAC9Pc0ppCPcKOIyXZXWW7ea4DJxu%2BB90aoWGlsXBTwzir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMg38HAkbxeyCdn%2FBCKtwD%2B5%2Fh9cp3DEC5hVSAc%2BB9eXRdfCR3tSfYN5aa3TEpOQp1WkzV0IL9h5e3a9FiNEhQzKFvoJKQ0fFF1tet6wAOMDKz5sVfS59b9gjUcik0LygikcqecwG805OPmYQ1vJKWw7gnft8MtwF%2FFmPYyWvsk%2BSnkzac9zjSHh9uZAxSsLl2BH5X6VMqT1Ii4XyLoeyJ9JQhk6kipEg9H8%2BH1mjDRGQrYu0JftkTXK%2FJprtqPoBKp9UmKTzAsgR1KzXOQFUToJrpZFSe%2FotUMpPm8IwT5cUJB9j25jgSVAESMFJuxrat%2BMDyPbKBGxCIpWFHo8cwegJsLFtOqjtSipgyTM01pSkhvU0ut2bTT7sWFX7PFGsL9md8lPOEMshrmHaAWE%2Fq2ke%2Bb5zlsMiRNfsJQF0M%2FRuOhj7I0aXyxguyRme5QJRKMIUeyfaD1eZUEznMbYq1OmdS6mvHZLN3Jui76yCeI3MkfuooTGkH7t5rijBKkDtxNsUNV89Ar%2F49ujjPHv%2F94F%2BWiYlMHHz5R3AdJWR0872QKCwGwmCCsFT1oLY9rtNbvUD5eu97yzNgzNSVUBZHIizVtZRLvS3Lpqc31IwZVx0neS0dzoBdmKkctrmy9W38%2BEwxG5Bw615gOXUw1%2FeAxQY6pgEutwNat1m%2Fsn5cCHwrUXsCbVLJlin4iBBc%2Bm1jCRFIAF64SjJDZB7pVFgpB91r4NCposvdWlCLDfZt%2FgYDLug6Iics0c%2FqoUFXxo48ns4%2Ba9on6IFgSblgJvYcyR6D3weLf6x8L%2FjyPyt4lxGbHNDfHCE%2Fo019CzEMMAejJuk6r8V%2FQF0%2FCetc3bsDUd4oPOq1Bw2VuPa2m803KcxTf7Jx9fqvpIxB&X-Amz-Signature=1c8e55ffcc4f9c84d7b3c3f3d4f6e79449fdce57f629e06d20f9f874cd793e4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUIWYHRV%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGlrUmAuEdX0OvyN8JwvpAvcU1M%2Ftg5O9YV75NjXR%2BTeAiAC9Pc0ppCPcKOIyXZXWW7ea4DJxu%2BB90aoWGlsXBTwzir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMg38HAkbxeyCdn%2FBCKtwD%2B5%2Fh9cp3DEC5hVSAc%2BB9eXRdfCR3tSfYN5aa3TEpOQp1WkzV0IL9h5e3a9FiNEhQzKFvoJKQ0fFF1tet6wAOMDKz5sVfS59b9gjUcik0LygikcqecwG805OPmYQ1vJKWw7gnft8MtwF%2FFmPYyWvsk%2BSnkzac9zjSHh9uZAxSsLl2BH5X6VMqT1Ii4XyLoeyJ9JQhk6kipEg9H8%2BH1mjDRGQrYu0JftkTXK%2FJprtqPoBKp9UmKTzAsgR1KzXOQFUToJrpZFSe%2FotUMpPm8IwT5cUJB9j25jgSVAESMFJuxrat%2BMDyPbKBGxCIpWFHo8cwegJsLFtOqjtSipgyTM01pSkhvU0ut2bTT7sWFX7PFGsL9md8lPOEMshrmHaAWE%2Fq2ke%2Bb5zlsMiRNfsJQF0M%2FRuOhj7I0aXyxguyRme5QJRKMIUeyfaD1eZUEznMbYq1OmdS6mvHZLN3Jui76yCeI3MkfuooTGkH7t5rijBKkDtxNsUNV89Ar%2F49ujjPHv%2F94F%2BWiYlMHHz5R3AdJWR0872QKCwGwmCCsFT1oLY9rtNbvUD5eu97yzNgzNSVUBZHIizVtZRLvS3Lpqc31IwZVx0neS0dzoBdmKkctrmy9W38%2BEwxG5Bw615gOXUw1%2FeAxQY6pgEutwNat1m%2Fsn5cCHwrUXsCbVLJlin4iBBc%2Bm1jCRFIAF64SjJDZB7pVFgpB91r4NCposvdWlCLDfZt%2FgYDLug6Iics0c%2FqoUFXxo48ns4%2Ba9on6IFgSblgJvYcyR6D3weLf6x8L%2FjyPyt4lxGbHNDfHCE%2Fo019CzEMMAejJuk6r8V%2FQF0%2FCetc3bsDUd4oPOq1Bw2VuPa2m803KcxTf7Jx9fqvpIxB&X-Amz-Signature=3fac5f92657154f526cb818dc35a23895642c07b4c2543e4fad4bf18da88977b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUIWYHRV%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGlrUmAuEdX0OvyN8JwvpAvcU1M%2Ftg5O9YV75NjXR%2BTeAiAC9Pc0ppCPcKOIyXZXWW7ea4DJxu%2BB90aoWGlsXBTwzir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMg38HAkbxeyCdn%2FBCKtwD%2B5%2Fh9cp3DEC5hVSAc%2BB9eXRdfCR3tSfYN5aa3TEpOQp1WkzV0IL9h5e3a9FiNEhQzKFvoJKQ0fFF1tet6wAOMDKz5sVfS59b9gjUcik0LygikcqecwG805OPmYQ1vJKWw7gnft8MtwF%2FFmPYyWvsk%2BSnkzac9zjSHh9uZAxSsLl2BH5X6VMqT1Ii4XyLoeyJ9JQhk6kipEg9H8%2BH1mjDRGQrYu0JftkTXK%2FJprtqPoBKp9UmKTzAsgR1KzXOQFUToJrpZFSe%2FotUMpPm8IwT5cUJB9j25jgSVAESMFJuxrat%2BMDyPbKBGxCIpWFHo8cwegJsLFtOqjtSipgyTM01pSkhvU0ut2bTT7sWFX7PFGsL9md8lPOEMshrmHaAWE%2Fq2ke%2Bb5zlsMiRNfsJQF0M%2FRuOhj7I0aXyxguyRme5QJRKMIUeyfaD1eZUEznMbYq1OmdS6mvHZLN3Jui76yCeI3MkfuooTGkH7t5rijBKkDtxNsUNV89Ar%2F49ujjPHv%2F94F%2BWiYlMHHz5R3AdJWR0872QKCwGwmCCsFT1oLY9rtNbvUD5eu97yzNgzNSVUBZHIizVtZRLvS3Lpqc31IwZVx0neS0dzoBdmKkctrmy9W38%2BEwxG5Bw615gOXUw1%2FeAxQY6pgEutwNat1m%2Fsn5cCHwrUXsCbVLJlin4iBBc%2Bm1jCRFIAF64SjJDZB7pVFgpB91r4NCposvdWlCLDfZt%2FgYDLug6Iics0c%2FqoUFXxo48ns4%2Ba9on6IFgSblgJvYcyR6D3weLf6x8L%2FjyPyt4lxGbHNDfHCE%2Fo019CzEMMAejJuk6r8V%2FQF0%2FCetc3bsDUd4oPOq1Bw2VuPa2m803KcxTf7Jx9fqvpIxB&X-Amz-Signature=f62e3fb189ee13bbbe5c11b53877b4adcedc1d5b3f22c1107ade5d67206e32c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUIWYHRV%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGlrUmAuEdX0OvyN8JwvpAvcU1M%2Ftg5O9YV75NjXR%2BTeAiAC9Pc0ppCPcKOIyXZXWW7ea4DJxu%2BB90aoWGlsXBTwzir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMg38HAkbxeyCdn%2FBCKtwD%2B5%2Fh9cp3DEC5hVSAc%2BB9eXRdfCR3tSfYN5aa3TEpOQp1WkzV0IL9h5e3a9FiNEhQzKFvoJKQ0fFF1tet6wAOMDKz5sVfS59b9gjUcik0LygikcqecwG805OPmYQ1vJKWw7gnft8MtwF%2FFmPYyWvsk%2BSnkzac9zjSHh9uZAxSsLl2BH5X6VMqT1Ii4XyLoeyJ9JQhk6kipEg9H8%2BH1mjDRGQrYu0JftkTXK%2FJprtqPoBKp9UmKTzAsgR1KzXOQFUToJrpZFSe%2FotUMpPm8IwT5cUJB9j25jgSVAESMFJuxrat%2BMDyPbKBGxCIpWFHo8cwegJsLFtOqjtSipgyTM01pSkhvU0ut2bTT7sWFX7PFGsL9md8lPOEMshrmHaAWE%2Fq2ke%2Bb5zlsMiRNfsJQF0M%2FRuOhj7I0aXyxguyRme5QJRKMIUeyfaD1eZUEznMbYq1OmdS6mvHZLN3Jui76yCeI3MkfuooTGkH7t5rijBKkDtxNsUNV89Ar%2F49ujjPHv%2F94F%2BWiYlMHHz5R3AdJWR0872QKCwGwmCCsFT1oLY9rtNbvUD5eu97yzNgzNSVUBZHIizVtZRLvS3Lpqc31IwZVx0neS0dzoBdmKkctrmy9W38%2BEwxG5Bw615gOXUw1%2FeAxQY6pgEutwNat1m%2Fsn5cCHwrUXsCbVLJlin4iBBc%2Bm1jCRFIAF64SjJDZB7pVFgpB91r4NCposvdWlCLDfZt%2FgYDLug6Iics0c%2FqoUFXxo48ns4%2Ba9on6IFgSblgJvYcyR6D3weLf6x8L%2FjyPyt4lxGbHNDfHCE%2Fo019CzEMMAejJuk6r8V%2FQF0%2FCetc3bsDUd4oPOq1Bw2VuPa2m803KcxTf7Jx9fqvpIxB&X-Amz-Signature=b9dc563699f1261338f939655ca9fb3540847c9695a1ec6c8891331cebeaabdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
