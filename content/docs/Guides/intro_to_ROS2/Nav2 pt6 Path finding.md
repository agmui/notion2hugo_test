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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GTA3BUS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBzdCfRqkM6UOYP6ljv4v2pKB5G4ibObEz2v%2BILqiwPCAiEAwc9sj8OMSTWhTX15DbJcjKW4TRRJFoAvduSXUMFjAm0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOfuHoR4M74bSLcB7SrcA5P4OulacCXtA5F%2BhNFGaMj1nP67ihrtB15OXLJHXHK0AkZwvX90VLhYcSWs%2FGaPSu1tQV42%2BaLqyLL5Xy%2BL5pCVsPxxpuOcODUeRcjM%2FuAPZKXs6RwhPO6%2BlQQF9j7d0ogJCMzwozHSdBb7EdivddH7D9Ws0YIbFk9lWXS31FHT9i0cfVTc62j%2F0rT8tR2u2bK1UcfhKdgrvNauvXaGC%2B%2FXqbmBevPCVZLM0N%2FNyZ55384GW%2F2GYKxYyoDnrFO9w%2FQbwPI%2FpOTvl2SPvn323Loxg8uN2H3UjNKIGrPfgS5f7v%2BDoJ4eFs%2F49grNPT2GrToaogrtUTHgN%2FiRfcCxIZLPTtSmQYppYoVSyk4Vj8gBNOpB%2BZc3DHX8Sqo%2BVJ%2FEckjc5b0%2F4ejVc0g1JWx7XWay2nHiYWh5lYWFCYj6q51kmwl1yX90HN8ziH2tDqOK7UNA%2Fu07qbeedMhSDRsZXgUCtfT000oHCLWfnR0NyrbCQ67zfYwSfPB97CPAZlRqVXDuOJBdRSyEINqylO0NzaM19%2B9XkxekpJ41TGdLO3fOFRIoDWcmVE%2FI14TnWoPTM%2BcsxOK8SjtL%2BwCupKWAyTu9IwtN2i8l3a6Ed3g9c42Q5DS8J6cQ9%2FMGtBaOMISj%2BsQGOqUB27xwU1NFmplUvDdl3G8lAWjV5WzJ73lywmAs5FZqwANVgAo6xyqqh3s7DDeEOzN0WRdlJ71zoL3VSd0qqvH0JqUU%2FLw%2Bjr%2FH3lpD%2Bg4HLHWql8rbU0difeeNPpjPxibK6b5Du%2FQDX5rccTZfbA9THwhnS%2FqDYKLfbDyuRNZBiKAygxUQMDrGXXJtZ3jw9hSCWiDPCKvyfgtwxFtJik6c7RkeTD9r&X-Amz-Signature=6dff44a04c691c2fa2278113a5d85dfb7559ea4f131e63fce8533ba46dda3fe3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GTA3BUS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBzdCfRqkM6UOYP6ljv4v2pKB5G4ibObEz2v%2BILqiwPCAiEAwc9sj8OMSTWhTX15DbJcjKW4TRRJFoAvduSXUMFjAm0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOfuHoR4M74bSLcB7SrcA5P4OulacCXtA5F%2BhNFGaMj1nP67ihrtB15OXLJHXHK0AkZwvX90VLhYcSWs%2FGaPSu1tQV42%2BaLqyLL5Xy%2BL5pCVsPxxpuOcODUeRcjM%2FuAPZKXs6RwhPO6%2BlQQF9j7d0ogJCMzwozHSdBb7EdivddH7D9Ws0YIbFk9lWXS31FHT9i0cfVTc62j%2F0rT8tR2u2bK1UcfhKdgrvNauvXaGC%2B%2FXqbmBevPCVZLM0N%2FNyZ55384GW%2F2GYKxYyoDnrFO9w%2FQbwPI%2FpOTvl2SPvn323Loxg8uN2H3UjNKIGrPfgS5f7v%2BDoJ4eFs%2F49grNPT2GrToaogrtUTHgN%2FiRfcCxIZLPTtSmQYppYoVSyk4Vj8gBNOpB%2BZc3DHX8Sqo%2BVJ%2FEckjc5b0%2F4ejVc0g1JWx7XWay2nHiYWh5lYWFCYj6q51kmwl1yX90HN8ziH2tDqOK7UNA%2Fu07qbeedMhSDRsZXgUCtfT000oHCLWfnR0NyrbCQ67zfYwSfPB97CPAZlRqVXDuOJBdRSyEINqylO0NzaM19%2B9XkxekpJ41TGdLO3fOFRIoDWcmVE%2FI14TnWoPTM%2BcsxOK8SjtL%2BwCupKWAyTu9IwtN2i8l3a6Ed3g9c42Q5DS8J6cQ9%2FMGtBaOMISj%2BsQGOqUB27xwU1NFmplUvDdl3G8lAWjV5WzJ73lywmAs5FZqwANVgAo6xyqqh3s7DDeEOzN0WRdlJ71zoL3VSd0qqvH0JqUU%2FLw%2Bjr%2FH3lpD%2Bg4HLHWql8rbU0difeeNPpjPxibK6b5Du%2FQDX5rccTZfbA9THwhnS%2FqDYKLfbDyuRNZBiKAygxUQMDrGXXJtZ3jw9hSCWiDPCKvyfgtwxFtJik6c7RkeTD9r&X-Amz-Signature=ca74a9a4a02fdb88fe1e408626ff16a5cd7a94f47ca6126dc5c4cd571ed55f87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GTA3BUS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBzdCfRqkM6UOYP6ljv4v2pKB5G4ibObEz2v%2BILqiwPCAiEAwc9sj8OMSTWhTX15DbJcjKW4TRRJFoAvduSXUMFjAm0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOfuHoR4M74bSLcB7SrcA5P4OulacCXtA5F%2BhNFGaMj1nP67ihrtB15OXLJHXHK0AkZwvX90VLhYcSWs%2FGaPSu1tQV42%2BaLqyLL5Xy%2BL5pCVsPxxpuOcODUeRcjM%2FuAPZKXs6RwhPO6%2BlQQF9j7d0ogJCMzwozHSdBb7EdivddH7D9Ws0YIbFk9lWXS31FHT9i0cfVTc62j%2F0rT8tR2u2bK1UcfhKdgrvNauvXaGC%2B%2FXqbmBevPCVZLM0N%2FNyZ55384GW%2F2GYKxYyoDnrFO9w%2FQbwPI%2FpOTvl2SPvn323Loxg8uN2H3UjNKIGrPfgS5f7v%2BDoJ4eFs%2F49grNPT2GrToaogrtUTHgN%2FiRfcCxIZLPTtSmQYppYoVSyk4Vj8gBNOpB%2BZc3DHX8Sqo%2BVJ%2FEckjc5b0%2F4ejVc0g1JWx7XWay2nHiYWh5lYWFCYj6q51kmwl1yX90HN8ziH2tDqOK7UNA%2Fu07qbeedMhSDRsZXgUCtfT000oHCLWfnR0NyrbCQ67zfYwSfPB97CPAZlRqVXDuOJBdRSyEINqylO0NzaM19%2B9XkxekpJ41TGdLO3fOFRIoDWcmVE%2FI14TnWoPTM%2BcsxOK8SjtL%2BwCupKWAyTu9IwtN2i8l3a6Ed3g9c42Q5DS8J6cQ9%2FMGtBaOMISj%2BsQGOqUB27xwU1NFmplUvDdl3G8lAWjV5WzJ73lywmAs5FZqwANVgAo6xyqqh3s7DDeEOzN0WRdlJ71zoL3VSd0qqvH0JqUU%2FLw%2Bjr%2FH3lpD%2Bg4HLHWql8rbU0difeeNPpjPxibK6b5Du%2FQDX5rccTZfbA9THwhnS%2FqDYKLfbDyuRNZBiKAygxUQMDrGXXJtZ3jw9hSCWiDPCKvyfgtwxFtJik6c7RkeTD9r&X-Amz-Signature=46cbfea34967a7c7780131c02527b0bde15ba8f6da0c0fa4dc9cba6d6fee4180&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GTA3BUS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBzdCfRqkM6UOYP6ljv4v2pKB5G4ibObEz2v%2BILqiwPCAiEAwc9sj8OMSTWhTX15DbJcjKW4TRRJFoAvduSXUMFjAm0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOfuHoR4M74bSLcB7SrcA5P4OulacCXtA5F%2BhNFGaMj1nP67ihrtB15OXLJHXHK0AkZwvX90VLhYcSWs%2FGaPSu1tQV42%2BaLqyLL5Xy%2BL5pCVsPxxpuOcODUeRcjM%2FuAPZKXs6RwhPO6%2BlQQF9j7d0ogJCMzwozHSdBb7EdivddH7D9Ws0YIbFk9lWXS31FHT9i0cfVTc62j%2F0rT8tR2u2bK1UcfhKdgrvNauvXaGC%2B%2FXqbmBevPCVZLM0N%2FNyZ55384GW%2F2GYKxYyoDnrFO9w%2FQbwPI%2FpOTvl2SPvn323Loxg8uN2H3UjNKIGrPfgS5f7v%2BDoJ4eFs%2F49grNPT2GrToaogrtUTHgN%2FiRfcCxIZLPTtSmQYppYoVSyk4Vj8gBNOpB%2BZc3DHX8Sqo%2BVJ%2FEckjc5b0%2F4ejVc0g1JWx7XWay2nHiYWh5lYWFCYj6q51kmwl1yX90HN8ziH2tDqOK7UNA%2Fu07qbeedMhSDRsZXgUCtfT000oHCLWfnR0NyrbCQ67zfYwSfPB97CPAZlRqVXDuOJBdRSyEINqylO0NzaM19%2B9XkxekpJ41TGdLO3fOFRIoDWcmVE%2FI14TnWoPTM%2BcsxOK8SjtL%2BwCupKWAyTu9IwtN2i8l3a6Ed3g9c42Q5DS8J6cQ9%2FMGtBaOMISj%2BsQGOqUB27xwU1NFmplUvDdl3G8lAWjV5WzJ73lywmAs5FZqwANVgAo6xyqqh3s7DDeEOzN0WRdlJ71zoL3VSd0qqvH0JqUU%2FLw%2Bjr%2FH3lpD%2Bg4HLHWql8rbU0difeeNPpjPxibK6b5Du%2FQDX5rccTZfbA9THwhnS%2FqDYKLfbDyuRNZBiKAygxUQMDrGXXJtZ3jw9hSCWiDPCKvyfgtwxFtJik6c7RkeTD9r&X-Amz-Signature=fded7b76c97793d9144d7ef2f5a24fbec8b16e4171a0a45fe15e3bd4176a9d3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GTA3BUS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBzdCfRqkM6UOYP6ljv4v2pKB5G4ibObEz2v%2BILqiwPCAiEAwc9sj8OMSTWhTX15DbJcjKW4TRRJFoAvduSXUMFjAm0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOfuHoR4M74bSLcB7SrcA5P4OulacCXtA5F%2BhNFGaMj1nP67ihrtB15OXLJHXHK0AkZwvX90VLhYcSWs%2FGaPSu1tQV42%2BaLqyLL5Xy%2BL5pCVsPxxpuOcODUeRcjM%2FuAPZKXs6RwhPO6%2BlQQF9j7d0ogJCMzwozHSdBb7EdivddH7D9Ws0YIbFk9lWXS31FHT9i0cfVTc62j%2F0rT8tR2u2bK1UcfhKdgrvNauvXaGC%2B%2FXqbmBevPCVZLM0N%2FNyZ55384GW%2F2GYKxYyoDnrFO9w%2FQbwPI%2FpOTvl2SPvn323Loxg8uN2H3UjNKIGrPfgS5f7v%2BDoJ4eFs%2F49grNPT2GrToaogrtUTHgN%2FiRfcCxIZLPTtSmQYppYoVSyk4Vj8gBNOpB%2BZc3DHX8Sqo%2BVJ%2FEckjc5b0%2F4ejVc0g1JWx7XWay2nHiYWh5lYWFCYj6q51kmwl1yX90HN8ziH2tDqOK7UNA%2Fu07qbeedMhSDRsZXgUCtfT000oHCLWfnR0NyrbCQ67zfYwSfPB97CPAZlRqVXDuOJBdRSyEINqylO0NzaM19%2B9XkxekpJ41TGdLO3fOFRIoDWcmVE%2FI14TnWoPTM%2BcsxOK8SjtL%2BwCupKWAyTu9IwtN2i8l3a6Ed3g9c42Q5DS8J6cQ9%2FMGtBaOMISj%2BsQGOqUB27xwU1NFmplUvDdl3G8lAWjV5WzJ73lywmAs5FZqwANVgAo6xyqqh3s7DDeEOzN0WRdlJ71zoL3VSd0qqvH0JqUU%2FLw%2Bjr%2FH3lpD%2Bg4HLHWql8rbU0difeeNPpjPxibK6b5Du%2FQDX5rccTZfbA9THwhnS%2FqDYKLfbDyuRNZBiKAygxUQMDrGXXJtZ3jw9hSCWiDPCKvyfgtwxFtJik6c7RkeTD9r&X-Amz-Signature=d3100a65855ac4f43740c4aca1389be47c9214c5ad39de68f3bd21fbbdda8a01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GTA3BUS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBzdCfRqkM6UOYP6ljv4v2pKB5G4ibObEz2v%2BILqiwPCAiEAwc9sj8OMSTWhTX15DbJcjKW4TRRJFoAvduSXUMFjAm0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOfuHoR4M74bSLcB7SrcA5P4OulacCXtA5F%2BhNFGaMj1nP67ihrtB15OXLJHXHK0AkZwvX90VLhYcSWs%2FGaPSu1tQV42%2BaLqyLL5Xy%2BL5pCVsPxxpuOcODUeRcjM%2FuAPZKXs6RwhPO6%2BlQQF9j7d0ogJCMzwozHSdBb7EdivddH7D9Ws0YIbFk9lWXS31FHT9i0cfVTc62j%2F0rT8tR2u2bK1UcfhKdgrvNauvXaGC%2B%2FXqbmBevPCVZLM0N%2FNyZ55384GW%2F2GYKxYyoDnrFO9w%2FQbwPI%2FpOTvl2SPvn323Loxg8uN2H3UjNKIGrPfgS5f7v%2BDoJ4eFs%2F49grNPT2GrToaogrtUTHgN%2FiRfcCxIZLPTtSmQYppYoVSyk4Vj8gBNOpB%2BZc3DHX8Sqo%2BVJ%2FEckjc5b0%2F4ejVc0g1JWx7XWay2nHiYWh5lYWFCYj6q51kmwl1yX90HN8ziH2tDqOK7UNA%2Fu07qbeedMhSDRsZXgUCtfT000oHCLWfnR0NyrbCQ67zfYwSfPB97CPAZlRqVXDuOJBdRSyEINqylO0NzaM19%2B9XkxekpJ41TGdLO3fOFRIoDWcmVE%2FI14TnWoPTM%2BcsxOK8SjtL%2BwCupKWAyTu9IwtN2i8l3a6Ed3g9c42Q5DS8J6cQ9%2FMGtBaOMISj%2BsQGOqUB27xwU1NFmplUvDdl3G8lAWjV5WzJ73lywmAs5FZqwANVgAo6xyqqh3s7DDeEOzN0WRdlJ71zoL3VSd0qqvH0JqUU%2FLw%2Bjr%2FH3lpD%2Bg4HLHWql8rbU0difeeNPpjPxibK6b5Du%2FQDX5rccTZfbA9THwhnS%2FqDYKLfbDyuRNZBiKAygxUQMDrGXXJtZ3jw9hSCWiDPCKvyfgtwxFtJik6c7RkeTD9r&X-Amz-Signature=557ed6b694e5e9614319d467323f0b75a6a1ae33d33f0620016797817803033c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GTA3BUS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBzdCfRqkM6UOYP6ljv4v2pKB5G4ibObEz2v%2BILqiwPCAiEAwc9sj8OMSTWhTX15DbJcjKW4TRRJFoAvduSXUMFjAm0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOfuHoR4M74bSLcB7SrcA5P4OulacCXtA5F%2BhNFGaMj1nP67ihrtB15OXLJHXHK0AkZwvX90VLhYcSWs%2FGaPSu1tQV42%2BaLqyLL5Xy%2BL5pCVsPxxpuOcODUeRcjM%2FuAPZKXs6RwhPO6%2BlQQF9j7d0ogJCMzwozHSdBb7EdivddH7D9Ws0YIbFk9lWXS31FHT9i0cfVTc62j%2F0rT8tR2u2bK1UcfhKdgrvNauvXaGC%2B%2FXqbmBevPCVZLM0N%2FNyZ55384GW%2F2GYKxYyoDnrFO9w%2FQbwPI%2FpOTvl2SPvn323Loxg8uN2H3UjNKIGrPfgS5f7v%2BDoJ4eFs%2F49grNPT2GrToaogrtUTHgN%2FiRfcCxIZLPTtSmQYppYoVSyk4Vj8gBNOpB%2BZc3DHX8Sqo%2BVJ%2FEckjc5b0%2F4ejVc0g1JWx7XWay2nHiYWh5lYWFCYj6q51kmwl1yX90HN8ziH2tDqOK7UNA%2Fu07qbeedMhSDRsZXgUCtfT000oHCLWfnR0NyrbCQ67zfYwSfPB97CPAZlRqVXDuOJBdRSyEINqylO0NzaM19%2B9XkxekpJ41TGdLO3fOFRIoDWcmVE%2FI14TnWoPTM%2BcsxOK8SjtL%2BwCupKWAyTu9IwtN2i8l3a6Ed3g9c42Q5DS8J6cQ9%2FMGtBaOMISj%2BsQGOqUB27xwU1NFmplUvDdl3G8lAWjV5WzJ73lywmAs5FZqwANVgAo6xyqqh3s7DDeEOzN0WRdlJ71zoL3VSd0qqvH0JqUU%2FLw%2Bjr%2FH3lpD%2Bg4HLHWql8rbU0difeeNPpjPxibK6b5Du%2FQDX5rccTZfbA9THwhnS%2FqDYKLfbDyuRNZBiKAygxUQMDrGXXJtZ3jw9hSCWiDPCKvyfgtwxFtJik6c7RkeTD9r&X-Amz-Signature=78cb9ce6b17142c263c31fa24fd95d03cf0e2e4d2d8fa692926923ec733d7c50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GTA3BUS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBzdCfRqkM6UOYP6ljv4v2pKB5G4ibObEz2v%2BILqiwPCAiEAwc9sj8OMSTWhTX15DbJcjKW4TRRJFoAvduSXUMFjAm0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOfuHoR4M74bSLcB7SrcA5P4OulacCXtA5F%2BhNFGaMj1nP67ihrtB15OXLJHXHK0AkZwvX90VLhYcSWs%2FGaPSu1tQV42%2BaLqyLL5Xy%2BL5pCVsPxxpuOcODUeRcjM%2FuAPZKXs6RwhPO6%2BlQQF9j7d0ogJCMzwozHSdBb7EdivddH7D9Ws0YIbFk9lWXS31FHT9i0cfVTc62j%2F0rT8tR2u2bK1UcfhKdgrvNauvXaGC%2B%2FXqbmBevPCVZLM0N%2FNyZ55384GW%2F2GYKxYyoDnrFO9w%2FQbwPI%2FpOTvl2SPvn323Loxg8uN2H3UjNKIGrPfgS5f7v%2BDoJ4eFs%2F49grNPT2GrToaogrtUTHgN%2FiRfcCxIZLPTtSmQYppYoVSyk4Vj8gBNOpB%2BZc3DHX8Sqo%2BVJ%2FEckjc5b0%2F4ejVc0g1JWx7XWay2nHiYWh5lYWFCYj6q51kmwl1yX90HN8ziH2tDqOK7UNA%2Fu07qbeedMhSDRsZXgUCtfT000oHCLWfnR0NyrbCQ67zfYwSfPB97CPAZlRqVXDuOJBdRSyEINqylO0NzaM19%2B9XkxekpJ41TGdLO3fOFRIoDWcmVE%2FI14TnWoPTM%2BcsxOK8SjtL%2BwCupKWAyTu9IwtN2i8l3a6Ed3g9c42Q5DS8J6cQ9%2FMGtBaOMISj%2BsQGOqUB27xwU1NFmplUvDdl3G8lAWjV5WzJ73lywmAs5FZqwANVgAo6xyqqh3s7DDeEOzN0WRdlJ71zoL3VSd0qqvH0JqUU%2FLw%2Bjr%2FH3lpD%2Bg4HLHWql8rbU0difeeNPpjPxibK6b5Du%2FQDX5rccTZfbA9THwhnS%2FqDYKLfbDyuRNZBiKAygxUQMDrGXXJtZ3jw9hSCWiDPCKvyfgtwxFtJik6c7RkeTD9r&X-Amz-Signature=546c04e98a6324250275a1b3455aa44e148e7e524bd9846f95c961f46aa80863&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GTA3BUS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBzdCfRqkM6UOYP6ljv4v2pKB5G4ibObEz2v%2BILqiwPCAiEAwc9sj8OMSTWhTX15DbJcjKW4TRRJFoAvduSXUMFjAm0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOfuHoR4M74bSLcB7SrcA5P4OulacCXtA5F%2BhNFGaMj1nP67ihrtB15OXLJHXHK0AkZwvX90VLhYcSWs%2FGaPSu1tQV42%2BaLqyLL5Xy%2BL5pCVsPxxpuOcODUeRcjM%2FuAPZKXs6RwhPO6%2BlQQF9j7d0ogJCMzwozHSdBb7EdivddH7D9Ws0YIbFk9lWXS31FHT9i0cfVTc62j%2F0rT8tR2u2bK1UcfhKdgrvNauvXaGC%2B%2FXqbmBevPCVZLM0N%2FNyZ55384GW%2F2GYKxYyoDnrFO9w%2FQbwPI%2FpOTvl2SPvn323Loxg8uN2H3UjNKIGrPfgS5f7v%2BDoJ4eFs%2F49grNPT2GrToaogrtUTHgN%2FiRfcCxIZLPTtSmQYppYoVSyk4Vj8gBNOpB%2BZc3DHX8Sqo%2BVJ%2FEckjc5b0%2F4ejVc0g1JWx7XWay2nHiYWh5lYWFCYj6q51kmwl1yX90HN8ziH2tDqOK7UNA%2Fu07qbeedMhSDRsZXgUCtfT000oHCLWfnR0NyrbCQ67zfYwSfPB97CPAZlRqVXDuOJBdRSyEINqylO0NzaM19%2B9XkxekpJ41TGdLO3fOFRIoDWcmVE%2FI14TnWoPTM%2BcsxOK8SjtL%2BwCupKWAyTu9IwtN2i8l3a6Ed3g9c42Q5DS8J6cQ9%2FMGtBaOMISj%2BsQGOqUB27xwU1NFmplUvDdl3G8lAWjV5WzJ73lywmAs5FZqwANVgAo6xyqqh3s7DDeEOzN0WRdlJ71zoL3VSd0qqvH0JqUU%2FLw%2Bjr%2FH3lpD%2Bg4HLHWql8rbU0difeeNPpjPxibK6b5Du%2FQDX5rccTZfbA9THwhnS%2FqDYKLfbDyuRNZBiKAygxUQMDrGXXJtZ3jw9hSCWiDPCKvyfgtwxFtJik6c7RkeTD9r&X-Amz-Signature=327a213986438291fecb5646f6406a4ead6a30a30762b8f4c9e078c24e914465&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GTA3BUS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBzdCfRqkM6UOYP6ljv4v2pKB5G4ibObEz2v%2BILqiwPCAiEAwc9sj8OMSTWhTX15DbJcjKW4TRRJFoAvduSXUMFjAm0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOfuHoR4M74bSLcB7SrcA5P4OulacCXtA5F%2BhNFGaMj1nP67ihrtB15OXLJHXHK0AkZwvX90VLhYcSWs%2FGaPSu1tQV42%2BaLqyLL5Xy%2BL5pCVsPxxpuOcODUeRcjM%2FuAPZKXs6RwhPO6%2BlQQF9j7d0ogJCMzwozHSdBb7EdivddH7D9Ws0YIbFk9lWXS31FHT9i0cfVTc62j%2F0rT8tR2u2bK1UcfhKdgrvNauvXaGC%2B%2FXqbmBevPCVZLM0N%2FNyZ55384GW%2F2GYKxYyoDnrFO9w%2FQbwPI%2FpOTvl2SPvn323Loxg8uN2H3UjNKIGrPfgS5f7v%2BDoJ4eFs%2F49grNPT2GrToaogrtUTHgN%2FiRfcCxIZLPTtSmQYppYoVSyk4Vj8gBNOpB%2BZc3DHX8Sqo%2BVJ%2FEckjc5b0%2F4ejVc0g1JWx7XWay2nHiYWh5lYWFCYj6q51kmwl1yX90HN8ziH2tDqOK7UNA%2Fu07qbeedMhSDRsZXgUCtfT000oHCLWfnR0NyrbCQ67zfYwSfPB97CPAZlRqVXDuOJBdRSyEINqylO0NzaM19%2B9XkxekpJ41TGdLO3fOFRIoDWcmVE%2FI14TnWoPTM%2BcsxOK8SjtL%2BwCupKWAyTu9IwtN2i8l3a6Ed3g9c42Q5DS8J6cQ9%2FMGtBaOMISj%2BsQGOqUB27xwU1NFmplUvDdl3G8lAWjV5WzJ73lywmAs5FZqwANVgAo6xyqqh3s7DDeEOzN0WRdlJ71zoL3VSd0qqvH0JqUU%2FLw%2Bjr%2FH3lpD%2Bg4HLHWql8rbU0difeeNPpjPxibK6b5Du%2FQDX5rccTZfbA9THwhnS%2FqDYKLfbDyuRNZBiKAygxUQMDrGXXJtZ3jw9hSCWiDPCKvyfgtwxFtJik6c7RkeTD9r&X-Amz-Signature=8eaf38bc03d3b31234bb418008cd8aef766eeabc8b8031f45086353faaf42ea6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GTA3BUS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBzdCfRqkM6UOYP6ljv4v2pKB5G4ibObEz2v%2BILqiwPCAiEAwc9sj8OMSTWhTX15DbJcjKW4TRRJFoAvduSXUMFjAm0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOfuHoR4M74bSLcB7SrcA5P4OulacCXtA5F%2BhNFGaMj1nP67ihrtB15OXLJHXHK0AkZwvX90VLhYcSWs%2FGaPSu1tQV42%2BaLqyLL5Xy%2BL5pCVsPxxpuOcODUeRcjM%2FuAPZKXs6RwhPO6%2BlQQF9j7d0ogJCMzwozHSdBb7EdivddH7D9Ws0YIbFk9lWXS31FHT9i0cfVTc62j%2F0rT8tR2u2bK1UcfhKdgrvNauvXaGC%2B%2FXqbmBevPCVZLM0N%2FNyZ55384GW%2F2GYKxYyoDnrFO9w%2FQbwPI%2FpOTvl2SPvn323Loxg8uN2H3UjNKIGrPfgS5f7v%2BDoJ4eFs%2F49grNPT2GrToaogrtUTHgN%2FiRfcCxIZLPTtSmQYppYoVSyk4Vj8gBNOpB%2BZc3DHX8Sqo%2BVJ%2FEckjc5b0%2F4ejVc0g1JWx7XWay2nHiYWh5lYWFCYj6q51kmwl1yX90HN8ziH2tDqOK7UNA%2Fu07qbeedMhSDRsZXgUCtfT000oHCLWfnR0NyrbCQ67zfYwSfPB97CPAZlRqVXDuOJBdRSyEINqylO0NzaM19%2B9XkxekpJ41TGdLO3fOFRIoDWcmVE%2FI14TnWoPTM%2BcsxOK8SjtL%2BwCupKWAyTu9IwtN2i8l3a6Ed3g9c42Q5DS8J6cQ9%2FMGtBaOMISj%2BsQGOqUB27xwU1NFmplUvDdl3G8lAWjV5WzJ73lywmAs5FZqwANVgAo6xyqqh3s7DDeEOzN0WRdlJ71zoL3VSd0qqvH0JqUU%2FLw%2Bjr%2FH3lpD%2Bg4HLHWql8rbU0difeeNPpjPxibK6b5Du%2FQDX5rccTZfbA9THwhnS%2FqDYKLfbDyuRNZBiKAygxUQMDrGXXJtZ3jw9hSCWiDPCKvyfgtwxFtJik6c7RkeTD9r&X-Amz-Signature=f761a0bd588aa98da5762df56e41901db72cb4bc989f6a17b7974544c9238162&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GTA3BUS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBzdCfRqkM6UOYP6ljv4v2pKB5G4ibObEz2v%2BILqiwPCAiEAwc9sj8OMSTWhTX15DbJcjKW4TRRJFoAvduSXUMFjAm0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOfuHoR4M74bSLcB7SrcA5P4OulacCXtA5F%2BhNFGaMj1nP67ihrtB15OXLJHXHK0AkZwvX90VLhYcSWs%2FGaPSu1tQV42%2BaLqyLL5Xy%2BL5pCVsPxxpuOcODUeRcjM%2FuAPZKXs6RwhPO6%2BlQQF9j7d0ogJCMzwozHSdBb7EdivddH7D9Ws0YIbFk9lWXS31FHT9i0cfVTc62j%2F0rT8tR2u2bK1UcfhKdgrvNauvXaGC%2B%2FXqbmBevPCVZLM0N%2FNyZ55384GW%2F2GYKxYyoDnrFO9w%2FQbwPI%2FpOTvl2SPvn323Loxg8uN2H3UjNKIGrPfgS5f7v%2BDoJ4eFs%2F49grNPT2GrToaogrtUTHgN%2FiRfcCxIZLPTtSmQYppYoVSyk4Vj8gBNOpB%2BZc3DHX8Sqo%2BVJ%2FEckjc5b0%2F4ejVc0g1JWx7XWay2nHiYWh5lYWFCYj6q51kmwl1yX90HN8ziH2tDqOK7UNA%2Fu07qbeedMhSDRsZXgUCtfT000oHCLWfnR0NyrbCQ67zfYwSfPB97CPAZlRqVXDuOJBdRSyEINqylO0NzaM19%2B9XkxekpJ41TGdLO3fOFRIoDWcmVE%2FI14TnWoPTM%2BcsxOK8SjtL%2BwCupKWAyTu9IwtN2i8l3a6Ed3g9c42Q5DS8J6cQ9%2FMGtBaOMISj%2BsQGOqUB27xwU1NFmplUvDdl3G8lAWjV5WzJ73lywmAs5FZqwANVgAo6xyqqh3s7DDeEOzN0WRdlJ71zoL3VSd0qqvH0JqUU%2FLw%2Bjr%2FH3lpD%2Bg4HLHWql8rbU0difeeNPpjPxibK6b5Du%2FQDX5rccTZfbA9THwhnS%2FqDYKLfbDyuRNZBiKAygxUQMDrGXXJtZ3jw9hSCWiDPCKvyfgtwxFtJik6c7RkeTD9r&X-Amz-Signature=8b1e365013d47e106d171c02de56a9c7d209cc755c6b4f7246a3bdd5ef9d9b86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GTA3BUS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBzdCfRqkM6UOYP6ljv4v2pKB5G4ibObEz2v%2BILqiwPCAiEAwc9sj8OMSTWhTX15DbJcjKW4TRRJFoAvduSXUMFjAm0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOfuHoR4M74bSLcB7SrcA5P4OulacCXtA5F%2BhNFGaMj1nP67ihrtB15OXLJHXHK0AkZwvX90VLhYcSWs%2FGaPSu1tQV42%2BaLqyLL5Xy%2BL5pCVsPxxpuOcODUeRcjM%2FuAPZKXs6RwhPO6%2BlQQF9j7d0ogJCMzwozHSdBb7EdivddH7D9Ws0YIbFk9lWXS31FHT9i0cfVTc62j%2F0rT8tR2u2bK1UcfhKdgrvNauvXaGC%2B%2FXqbmBevPCVZLM0N%2FNyZ55384GW%2F2GYKxYyoDnrFO9w%2FQbwPI%2FpOTvl2SPvn323Loxg8uN2H3UjNKIGrPfgS5f7v%2BDoJ4eFs%2F49grNPT2GrToaogrtUTHgN%2FiRfcCxIZLPTtSmQYppYoVSyk4Vj8gBNOpB%2BZc3DHX8Sqo%2BVJ%2FEckjc5b0%2F4ejVc0g1JWx7XWay2nHiYWh5lYWFCYj6q51kmwl1yX90HN8ziH2tDqOK7UNA%2Fu07qbeedMhSDRsZXgUCtfT000oHCLWfnR0NyrbCQ67zfYwSfPB97CPAZlRqVXDuOJBdRSyEINqylO0NzaM19%2B9XkxekpJ41TGdLO3fOFRIoDWcmVE%2FI14TnWoPTM%2BcsxOK8SjtL%2BwCupKWAyTu9IwtN2i8l3a6Ed3g9c42Q5DS8J6cQ9%2FMGtBaOMISj%2BsQGOqUB27xwU1NFmplUvDdl3G8lAWjV5WzJ73lywmAs5FZqwANVgAo6xyqqh3s7DDeEOzN0WRdlJ71zoL3VSd0qqvH0JqUU%2FLw%2Bjr%2FH3lpD%2Bg4HLHWql8rbU0difeeNPpjPxibK6b5Du%2FQDX5rccTZfbA9THwhnS%2FqDYKLfbDyuRNZBiKAygxUQMDrGXXJtZ3jw9hSCWiDPCKvyfgtwxFtJik6c7RkeTD9r&X-Amz-Signature=149a520eea92b3e5ffb2ab4486cf8fa0a67465b9deb70dedebafa4fb40dd234d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
