---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-07-30T06:25:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W2H4HAM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTcH8Cd1tpuze8Tk01Ne2cC4%2BN%2FLp2SVR8bpyXQjHNMgIgcS38LlJ7obFY6Ek83j08xCS5FEmRSP%2Br5GWW63ypC9sqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFbV2Y1fXnc2AYtLpCrcA1ZmkmbDKw3myU8Ds3vsTrp93Hs14AmC%2FEe76vr1g0FsirovpJGr5B6KvO9%2Fye5JEHTsmG18SStfxPih7qPeBudUOUgXAksi7hnxAAjDLW%2BhuKQemndQXs7rgpsSnLu40gU5IqZGnHmaWW4pG55ti2GWTy9LcDCyPgVR7cpoc7y3hMkSDeW11rn4wWTXCdvCwEgWnQfi1XD87ZkZLScjU3B1oLoIOb8F25leRNXdAvjnX5IziTiR%2F2MtvYW3SOU0OoXN9uUIK5xO0eUDt4k3vW5osgZvc1A%2BdiBEng2k0Xf0oYQL%2BdhGWO54wej7ppi%2FYciEfBYBbTXE9o6FGwm18NIN4jtI5wJaNP9bwMb9ZiHX6%2BuQzVbV0FpAh73m2g4Tgg%2FiBgMi3pJWhcv15%2Fnm50F4xlIlfh48ysjPSlZZivoHOA9%2FfpYVCMcfLYDXpyJJvJafcR84LfBzOVNUJOZBPNITBJEXku3DD9xIWwkaKNGJBIj67bPHbgvLNjg76nefOhq6ZvdgQ%2F5q4DXfPK84vMWyNNs145vkHUutyqhFqSiaakSo%2BfZzbRNsAjW4E%2Fj6KL9fYZ9bpTQxicnN5pLm4nn2XM8JtDgDT%2F%2BWWAe1ZSPTxku4Tw4SIx4ZSkC7MNzbrsQGOqUBUWArzfmPsn7%2Fb8OUjAlQpgeoI9GFPjdP7ps84O3e9pKfD0Hv9RAcc7gfsmKcPoA%2FTDkp8VakB94%2BHTvwal4PrK0ybny6UWSjdfslMg6EkU2GForcwPBVeQ05a1wsQRRhjDsbPyta4jWCMS1RR6pHZzQzIdvMxPIgz%2F7Tnd9e4J%2B1nISyon8GqXuimj%2BcGF7VRm7wx4He7pDBlZTW95b%2Fh9CLB%2F8A&X-Amz-Signature=fbac55b9da3de8a934678e0a95c3d7673bc75a7fbb0d8d71d1644a9e81f8b141&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W2H4HAM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTcH8Cd1tpuze8Tk01Ne2cC4%2BN%2FLp2SVR8bpyXQjHNMgIgcS38LlJ7obFY6Ek83j08xCS5FEmRSP%2Br5GWW63ypC9sqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFbV2Y1fXnc2AYtLpCrcA1ZmkmbDKw3myU8Ds3vsTrp93Hs14AmC%2FEe76vr1g0FsirovpJGr5B6KvO9%2Fye5JEHTsmG18SStfxPih7qPeBudUOUgXAksi7hnxAAjDLW%2BhuKQemndQXs7rgpsSnLu40gU5IqZGnHmaWW4pG55ti2GWTy9LcDCyPgVR7cpoc7y3hMkSDeW11rn4wWTXCdvCwEgWnQfi1XD87ZkZLScjU3B1oLoIOb8F25leRNXdAvjnX5IziTiR%2F2MtvYW3SOU0OoXN9uUIK5xO0eUDt4k3vW5osgZvc1A%2BdiBEng2k0Xf0oYQL%2BdhGWO54wej7ppi%2FYciEfBYBbTXE9o6FGwm18NIN4jtI5wJaNP9bwMb9ZiHX6%2BuQzVbV0FpAh73m2g4Tgg%2FiBgMi3pJWhcv15%2Fnm50F4xlIlfh48ysjPSlZZivoHOA9%2FfpYVCMcfLYDXpyJJvJafcR84LfBzOVNUJOZBPNITBJEXku3DD9xIWwkaKNGJBIj67bPHbgvLNjg76nefOhq6ZvdgQ%2F5q4DXfPK84vMWyNNs145vkHUutyqhFqSiaakSo%2BfZzbRNsAjW4E%2Fj6KL9fYZ9bpTQxicnN5pLm4nn2XM8JtDgDT%2F%2BWWAe1ZSPTxku4Tw4SIx4ZSkC7MNzbrsQGOqUBUWArzfmPsn7%2Fb8OUjAlQpgeoI9GFPjdP7ps84O3e9pKfD0Hv9RAcc7gfsmKcPoA%2FTDkp8VakB94%2BHTvwal4PrK0ybny6UWSjdfslMg6EkU2GForcwPBVeQ05a1wsQRRhjDsbPyta4jWCMS1RR6pHZzQzIdvMxPIgz%2F7Tnd9e4J%2B1nISyon8GqXuimj%2BcGF7VRm7wx4He7pDBlZTW95b%2Fh9CLB%2F8A&X-Amz-Signature=e4512e548aef39aec45284f49beb0d8fd2c7e3e6626ec2b45b0020f691ce6836&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W2H4HAM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTcH8Cd1tpuze8Tk01Ne2cC4%2BN%2FLp2SVR8bpyXQjHNMgIgcS38LlJ7obFY6Ek83j08xCS5FEmRSP%2Br5GWW63ypC9sqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFbV2Y1fXnc2AYtLpCrcA1ZmkmbDKw3myU8Ds3vsTrp93Hs14AmC%2FEe76vr1g0FsirovpJGr5B6KvO9%2Fye5JEHTsmG18SStfxPih7qPeBudUOUgXAksi7hnxAAjDLW%2BhuKQemndQXs7rgpsSnLu40gU5IqZGnHmaWW4pG55ti2GWTy9LcDCyPgVR7cpoc7y3hMkSDeW11rn4wWTXCdvCwEgWnQfi1XD87ZkZLScjU3B1oLoIOb8F25leRNXdAvjnX5IziTiR%2F2MtvYW3SOU0OoXN9uUIK5xO0eUDt4k3vW5osgZvc1A%2BdiBEng2k0Xf0oYQL%2BdhGWO54wej7ppi%2FYciEfBYBbTXE9o6FGwm18NIN4jtI5wJaNP9bwMb9ZiHX6%2BuQzVbV0FpAh73m2g4Tgg%2FiBgMi3pJWhcv15%2Fnm50F4xlIlfh48ysjPSlZZivoHOA9%2FfpYVCMcfLYDXpyJJvJafcR84LfBzOVNUJOZBPNITBJEXku3DD9xIWwkaKNGJBIj67bPHbgvLNjg76nefOhq6ZvdgQ%2F5q4DXfPK84vMWyNNs145vkHUutyqhFqSiaakSo%2BfZzbRNsAjW4E%2Fj6KL9fYZ9bpTQxicnN5pLm4nn2XM8JtDgDT%2F%2BWWAe1ZSPTxku4Tw4SIx4ZSkC7MNzbrsQGOqUBUWArzfmPsn7%2Fb8OUjAlQpgeoI9GFPjdP7ps84O3e9pKfD0Hv9RAcc7gfsmKcPoA%2FTDkp8VakB94%2BHTvwal4PrK0ybny6UWSjdfslMg6EkU2GForcwPBVeQ05a1wsQRRhjDsbPyta4jWCMS1RR6pHZzQzIdvMxPIgz%2F7Tnd9e4J%2B1nISyon8GqXuimj%2BcGF7VRm7wx4He7pDBlZTW95b%2Fh9CLB%2F8A&X-Amz-Signature=acda042c1b819e841ed5dab83aca5b7422fc5967f7daf9446d075afe2ceb5ca4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W2H4HAM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTcH8Cd1tpuze8Tk01Ne2cC4%2BN%2FLp2SVR8bpyXQjHNMgIgcS38LlJ7obFY6Ek83j08xCS5FEmRSP%2Br5GWW63ypC9sqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFbV2Y1fXnc2AYtLpCrcA1ZmkmbDKw3myU8Ds3vsTrp93Hs14AmC%2FEe76vr1g0FsirovpJGr5B6KvO9%2Fye5JEHTsmG18SStfxPih7qPeBudUOUgXAksi7hnxAAjDLW%2BhuKQemndQXs7rgpsSnLu40gU5IqZGnHmaWW4pG55ti2GWTy9LcDCyPgVR7cpoc7y3hMkSDeW11rn4wWTXCdvCwEgWnQfi1XD87ZkZLScjU3B1oLoIOb8F25leRNXdAvjnX5IziTiR%2F2MtvYW3SOU0OoXN9uUIK5xO0eUDt4k3vW5osgZvc1A%2BdiBEng2k0Xf0oYQL%2BdhGWO54wej7ppi%2FYciEfBYBbTXE9o6FGwm18NIN4jtI5wJaNP9bwMb9ZiHX6%2BuQzVbV0FpAh73m2g4Tgg%2FiBgMi3pJWhcv15%2Fnm50F4xlIlfh48ysjPSlZZivoHOA9%2FfpYVCMcfLYDXpyJJvJafcR84LfBzOVNUJOZBPNITBJEXku3DD9xIWwkaKNGJBIj67bPHbgvLNjg76nefOhq6ZvdgQ%2F5q4DXfPK84vMWyNNs145vkHUutyqhFqSiaakSo%2BfZzbRNsAjW4E%2Fj6KL9fYZ9bpTQxicnN5pLm4nn2XM8JtDgDT%2F%2BWWAe1ZSPTxku4Tw4SIx4ZSkC7MNzbrsQGOqUBUWArzfmPsn7%2Fb8OUjAlQpgeoI9GFPjdP7ps84O3e9pKfD0Hv9RAcc7gfsmKcPoA%2FTDkp8VakB94%2BHTvwal4PrK0ybny6UWSjdfslMg6EkU2GForcwPBVeQ05a1wsQRRhjDsbPyta4jWCMS1RR6pHZzQzIdvMxPIgz%2F7Tnd9e4J%2B1nISyon8GqXuimj%2BcGF7VRm7wx4He7pDBlZTW95b%2Fh9CLB%2F8A&X-Amz-Signature=54686bc10c8a21c392e2e9e1ca92db31c8096d73462e58ebf0ee48e9368cff0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W2H4HAM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTcH8Cd1tpuze8Tk01Ne2cC4%2BN%2FLp2SVR8bpyXQjHNMgIgcS38LlJ7obFY6Ek83j08xCS5FEmRSP%2Br5GWW63ypC9sqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFbV2Y1fXnc2AYtLpCrcA1ZmkmbDKw3myU8Ds3vsTrp93Hs14AmC%2FEe76vr1g0FsirovpJGr5B6KvO9%2Fye5JEHTsmG18SStfxPih7qPeBudUOUgXAksi7hnxAAjDLW%2BhuKQemndQXs7rgpsSnLu40gU5IqZGnHmaWW4pG55ti2GWTy9LcDCyPgVR7cpoc7y3hMkSDeW11rn4wWTXCdvCwEgWnQfi1XD87ZkZLScjU3B1oLoIOb8F25leRNXdAvjnX5IziTiR%2F2MtvYW3SOU0OoXN9uUIK5xO0eUDt4k3vW5osgZvc1A%2BdiBEng2k0Xf0oYQL%2BdhGWO54wej7ppi%2FYciEfBYBbTXE9o6FGwm18NIN4jtI5wJaNP9bwMb9ZiHX6%2BuQzVbV0FpAh73m2g4Tgg%2FiBgMi3pJWhcv15%2Fnm50F4xlIlfh48ysjPSlZZivoHOA9%2FfpYVCMcfLYDXpyJJvJafcR84LfBzOVNUJOZBPNITBJEXku3DD9xIWwkaKNGJBIj67bPHbgvLNjg76nefOhq6ZvdgQ%2F5q4DXfPK84vMWyNNs145vkHUutyqhFqSiaakSo%2BfZzbRNsAjW4E%2Fj6KL9fYZ9bpTQxicnN5pLm4nn2XM8JtDgDT%2F%2BWWAe1ZSPTxku4Tw4SIx4ZSkC7MNzbrsQGOqUBUWArzfmPsn7%2Fb8OUjAlQpgeoI9GFPjdP7ps84O3e9pKfD0Hv9RAcc7gfsmKcPoA%2FTDkp8VakB94%2BHTvwal4PrK0ybny6UWSjdfslMg6EkU2GForcwPBVeQ05a1wsQRRhjDsbPyta4jWCMS1RR6pHZzQzIdvMxPIgz%2F7Tnd9e4J%2B1nISyon8GqXuimj%2BcGF7VRm7wx4He7pDBlZTW95b%2Fh9CLB%2F8A&X-Amz-Signature=279a973076c6dfe77bae157d71fb8ad1efd8690ed0a03337fd54cadc7ab63691&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W2H4HAM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTcH8Cd1tpuze8Tk01Ne2cC4%2BN%2FLp2SVR8bpyXQjHNMgIgcS38LlJ7obFY6Ek83j08xCS5FEmRSP%2Br5GWW63ypC9sqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFbV2Y1fXnc2AYtLpCrcA1ZmkmbDKw3myU8Ds3vsTrp93Hs14AmC%2FEe76vr1g0FsirovpJGr5B6KvO9%2Fye5JEHTsmG18SStfxPih7qPeBudUOUgXAksi7hnxAAjDLW%2BhuKQemndQXs7rgpsSnLu40gU5IqZGnHmaWW4pG55ti2GWTy9LcDCyPgVR7cpoc7y3hMkSDeW11rn4wWTXCdvCwEgWnQfi1XD87ZkZLScjU3B1oLoIOb8F25leRNXdAvjnX5IziTiR%2F2MtvYW3SOU0OoXN9uUIK5xO0eUDt4k3vW5osgZvc1A%2BdiBEng2k0Xf0oYQL%2BdhGWO54wej7ppi%2FYciEfBYBbTXE9o6FGwm18NIN4jtI5wJaNP9bwMb9ZiHX6%2BuQzVbV0FpAh73m2g4Tgg%2FiBgMi3pJWhcv15%2Fnm50F4xlIlfh48ysjPSlZZivoHOA9%2FfpYVCMcfLYDXpyJJvJafcR84LfBzOVNUJOZBPNITBJEXku3DD9xIWwkaKNGJBIj67bPHbgvLNjg76nefOhq6ZvdgQ%2F5q4DXfPK84vMWyNNs145vkHUutyqhFqSiaakSo%2BfZzbRNsAjW4E%2Fj6KL9fYZ9bpTQxicnN5pLm4nn2XM8JtDgDT%2F%2BWWAe1ZSPTxku4Tw4SIx4ZSkC7MNzbrsQGOqUBUWArzfmPsn7%2Fb8OUjAlQpgeoI9GFPjdP7ps84O3e9pKfD0Hv9RAcc7gfsmKcPoA%2FTDkp8VakB94%2BHTvwal4PrK0ybny6UWSjdfslMg6EkU2GForcwPBVeQ05a1wsQRRhjDsbPyta4jWCMS1RR6pHZzQzIdvMxPIgz%2F7Tnd9e4J%2B1nISyon8GqXuimj%2BcGF7VRm7wx4He7pDBlZTW95b%2Fh9CLB%2F8A&X-Amz-Signature=f8c2a469351602e22b3381548a8b201a3ba80b0185871589d9203e5b8a2b9020&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W2H4HAM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTcH8Cd1tpuze8Tk01Ne2cC4%2BN%2FLp2SVR8bpyXQjHNMgIgcS38LlJ7obFY6Ek83j08xCS5FEmRSP%2Br5GWW63ypC9sqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFbV2Y1fXnc2AYtLpCrcA1ZmkmbDKw3myU8Ds3vsTrp93Hs14AmC%2FEe76vr1g0FsirovpJGr5B6KvO9%2Fye5JEHTsmG18SStfxPih7qPeBudUOUgXAksi7hnxAAjDLW%2BhuKQemndQXs7rgpsSnLu40gU5IqZGnHmaWW4pG55ti2GWTy9LcDCyPgVR7cpoc7y3hMkSDeW11rn4wWTXCdvCwEgWnQfi1XD87ZkZLScjU3B1oLoIOb8F25leRNXdAvjnX5IziTiR%2F2MtvYW3SOU0OoXN9uUIK5xO0eUDt4k3vW5osgZvc1A%2BdiBEng2k0Xf0oYQL%2BdhGWO54wej7ppi%2FYciEfBYBbTXE9o6FGwm18NIN4jtI5wJaNP9bwMb9ZiHX6%2BuQzVbV0FpAh73m2g4Tgg%2FiBgMi3pJWhcv15%2Fnm50F4xlIlfh48ysjPSlZZivoHOA9%2FfpYVCMcfLYDXpyJJvJafcR84LfBzOVNUJOZBPNITBJEXku3DD9xIWwkaKNGJBIj67bPHbgvLNjg76nefOhq6ZvdgQ%2F5q4DXfPK84vMWyNNs145vkHUutyqhFqSiaakSo%2BfZzbRNsAjW4E%2Fj6KL9fYZ9bpTQxicnN5pLm4nn2XM8JtDgDT%2F%2BWWAe1ZSPTxku4Tw4SIx4ZSkC7MNzbrsQGOqUBUWArzfmPsn7%2Fb8OUjAlQpgeoI9GFPjdP7ps84O3e9pKfD0Hv9RAcc7gfsmKcPoA%2FTDkp8VakB94%2BHTvwal4PrK0ybny6UWSjdfslMg6EkU2GForcwPBVeQ05a1wsQRRhjDsbPyta4jWCMS1RR6pHZzQzIdvMxPIgz%2F7Tnd9e4J%2B1nISyon8GqXuimj%2BcGF7VRm7wx4He7pDBlZTW95b%2Fh9CLB%2F8A&X-Amz-Signature=0c8568610547c31529c69e9834c4b9f876702854b5d1dcc3060a1ac9def1cc9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W2H4HAM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTcH8Cd1tpuze8Tk01Ne2cC4%2BN%2FLp2SVR8bpyXQjHNMgIgcS38LlJ7obFY6Ek83j08xCS5FEmRSP%2Br5GWW63ypC9sqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFbV2Y1fXnc2AYtLpCrcA1ZmkmbDKw3myU8Ds3vsTrp93Hs14AmC%2FEe76vr1g0FsirovpJGr5B6KvO9%2Fye5JEHTsmG18SStfxPih7qPeBudUOUgXAksi7hnxAAjDLW%2BhuKQemndQXs7rgpsSnLu40gU5IqZGnHmaWW4pG55ti2GWTy9LcDCyPgVR7cpoc7y3hMkSDeW11rn4wWTXCdvCwEgWnQfi1XD87ZkZLScjU3B1oLoIOb8F25leRNXdAvjnX5IziTiR%2F2MtvYW3SOU0OoXN9uUIK5xO0eUDt4k3vW5osgZvc1A%2BdiBEng2k0Xf0oYQL%2BdhGWO54wej7ppi%2FYciEfBYBbTXE9o6FGwm18NIN4jtI5wJaNP9bwMb9ZiHX6%2BuQzVbV0FpAh73m2g4Tgg%2FiBgMi3pJWhcv15%2Fnm50F4xlIlfh48ysjPSlZZivoHOA9%2FfpYVCMcfLYDXpyJJvJafcR84LfBzOVNUJOZBPNITBJEXku3DD9xIWwkaKNGJBIj67bPHbgvLNjg76nefOhq6ZvdgQ%2F5q4DXfPK84vMWyNNs145vkHUutyqhFqSiaakSo%2BfZzbRNsAjW4E%2Fj6KL9fYZ9bpTQxicnN5pLm4nn2XM8JtDgDT%2F%2BWWAe1ZSPTxku4Tw4SIx4ZSkC7MNzbrsQGOqUBUWArzfmPsn7%2Fb8OUjAlQpgeoI9GFPjdP7ps84O3e9pKfD0Hv9RAcc7gfsmKcPoA%2FTDkp8VakB94%2BHTvwal4PrK0ybny6UWSjdfslMg6EkU2GForcwPBVeQ05a1wsQRRhjDsbPyta4jWCMS1RR6pHZzQzIdvMxPIgz%2F7Tnd9e4J%2B1nISyon8GqXuimj%2BcGF7VRm7wx4He7pDBlZTW95b%2Fh9CLB%2F8A&X-Amz-Signature=c3f9db69c8d1812bb7ddf732473c518a1056553347e21cff9e4cc4dea5d9ddeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W2H4HAM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTcH8Cd1tpuze8Tk01Ne2cC4%2BN%2FLp2SVR8bpyXQjHNMgIgcS38LlJ7obFY6Ek83j08xCS5FEmRSP%2Br5GWW63ypC9sqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFbV2Y1fXnc2AYtLpCrcA1ZmkmbDKw3myU8Ds3vsTrp93Hs14AmC%2FEe76vr1g0FsirovpJGr5B6KvO9%2Fye5JEHTsmG18SStfxPih7qPeBudUOUgXAksi7hnxAAjDLW%2BhuKQemndQXs7rgpsSnLu40gU5IqZGnHmaWW4pG55ti2GWTy9LcDCyPgVR7cpoc7y3hMkSDeW11rn4wWTXCdvCwEgWnQfi1XD87ZkZLScjU3B1oLoIOb8F25leRNXdAvjnX5IziTiR%2F2MtvYW3SOU0OoXN9uUIK5xO0eUDt4k3vW5osgZvc1A%2BdiBEng2k0Xf0oYQL%2BdhGWO54wej7ppi%2FYciEfBYBbTXE9o6FGwm18NIN4jtI5wJaNP9bwMb9ZiHX6%2BuQzVbV0FpAh73m2g4Tgg%2FiBgMi3pJWhcv15%2Fnm50F4xlIlfh48ysjPSlZZivoHOA9%2FfpYVCMcfLYDXpyJJvJafcR84LfBzOVNUJOZBPNITBJEXku3DD9xIWwkaKNGJBIj67bPHbgvLNjg76nefOhq6ZvdgQ%2F5q4DXfPK84vMWyNNs145vkHUutyqhFqSiaakSo%2BfZzbRNsAjW4E%2Fj6KL9fYZ9bpTQxicnN5pLm4nn2XM8JtDgDT%2F%2BWWAe1ZSPTxku4Tw4SIx4ZSkC7MNzbrsQGOqUBUWArzfmPsn7%2Fb8OUjAlQpgeoI9GFPjdP7ps84O3e9pKfD0Hv9RAcc7gfsmKcPoA%2FTDkp8VakB94%2BHTvwal4PrK0ybny6UWSjdfslMg6EkU2GForcwPBVeQ05a1wsQRRhjDsbPyta4jWCMS1RR6pHZzQzIdvMxPIgz%2F7Tnd9e4J%2B1nISyon8GqXuimj%2BcGF7VRm7wx4He7pDBlZTW95b%2Fh9CLB%2F8A&X-Amz-Signature=c256d9292c0ddb8fcb46135a6da1fd092dd62ae47419104ef1838806c5dc7927&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W2H4HAM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTcH8Cd1tpuze8Tk01Ne2cC4%2BN%2FLp2SVR8bpyXQjHNMgIgcS38LlJ7obFY6Ek83j08xCS5FEmRSP%2Br5GWW63ypC9sqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFbV2Y1fXnc2AYtLpCrcA1ZmkmbDKw3myU8Ds3vsTrp93Hs14AmC%2FEe76vr1g0FsirovpJGr5B6KvO9%2Fye5JEHTsmG18SStfxPih7qPeBudUOUgXAksi7hnxAAjDLW%2BhuKQemndQXs7rgpsSnLu40gU5IqZGnHmaWW4pG55ti2GWTy9LcDCyPgVR7cpoc7y3hMkSDeW11rn4wWTXCdvCwEgWnQfi1XD87ZkZLScjU3B1oLoIOb8F25leRNXdAvjnX5IziTiR%2F2MtvYW3SOU0OoXN9uUIK5xO0eUDt4k3vW5osgZvc1A%2BdiBEng2k0Xf0oYQL%2BdhGWO54wej7ppi%2FYciEfBYBbTXE9o6FGwm18NIN4jtI5wJaNP9bwMb9ZiHX6%2BuQzVbV0FpAh73m2g4Tgg%2FiBgMi3pJWhcv15%2Fnm50F4xlIlfh48ysjPSlZZivoHOA9%2FfpYVCMcfLYDXpyJJvJafcR84LfBzOVNUJOZBPNITBJEXku3DD9xIWwkaKNGJBIj67bPHbgvLNjg76nefOhq6ZvdgQ%2F5q4DXfPK84vMWyNNs145vkHUutyqhFqSiaakSo%2BfZzbRNsAjW4E%2Fj6KL9fYZ9bpTQxicnN5pLm4nn2XM8JtDgDT%2F%2BWWAe1ZSPTxku4Tw4SIx4ZSkC7MNzbrsQGOqUBUWArzfmPsn7%2Fb8OUjAlQpgeoI9GFPjdP7ps84O3e9pKfD0Hv9RAcc7gfsmKcPoA%2FTDkp8VakB94%2BHTvwal4PrK0ybny6UWSjdfslMg6EkU2GForcwPBVeQ05a1wsQRRhjDsbPyta4jWCMS1RR6pHZzQzIdvMxPIgz%2F7Tnd9e4J%2B1nISyon8GqXuimj%2BcGF7VRm7wx4He7pDBlZTW95b%2Fh9CLB%2F8A&X-Amz-Signature=8acda142aba11a6e312442deaf0f487f49ddbd5c79f19d7f6a9c7b694d8d67c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W2H4HAM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTcH8Cd1tpuze8Tk01Ne2cC4%2BN%2FLp2SVR8bpyXQjHNMgIgcS38LlJ7obFY6Ek83j08xCS5FEmRSP%2Br5GWW63ypC9sqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFbV2Y1fXnc2AYtLpCrcA1ZmkmbDKw3myU8Ds3vsTrp93Hs14AmC%2FEe76vr1g0FsirovpJGr5B6KvO9%2Fye5JEHTsmG18SStfxPih7qPeBudUOUgXAksi7hnxAAjDLW%2BhuKQemndQXs7rgpsSnLu40gU5IqZGnHmaWW4pG55ti2GWTy9LcDCyPgVR7cpoc7y3hMkSDeW11rn4wWTXCdvCwEgWnQfi1XD87ZkZLScjU3B1oLoIOb8F25leRNXdAvjnX5IziTiR%2F2MtvYW3SOU0OoXN9uUIK5xO0eUDt4k3vW5osgZvc1A%2BdiBEng2k0Xf0oYQL%2BdhGWO54wej7ppi%2FYciEfBYBbTXE9o6FGwm18NIN4jtI5wJaNP9bwMb9ZiHX6%2BuQzVbV0FpAh73m2g4Tgg%2FiBgMi3pJWhcv15%2Fnm50F4xlIlfh48ysjPSlZZivoHOA9%2FfpYVCMcfLYDXpyJJvJafcR84LfBzOVNUJOZBPNITBJEXku3DD9xIWwkaKNGJBIj67bPHbgvLNjg76nefOhq6ZvdgQ%2F5q4DXfPK84vMWyNNs145vkHUutyqhFqSiaakSo%2BfZzbRNsAjW4E%2Fj6KL9fYZ9bpTQxicnN5pLm4nn2XM8JtDgDT%2F%2BWWAe1ZSPTxku4Tw4SIx4ZSkC7MNzbrsQGOqUBUWArzfmPsn7%2Fb8OUjAlQpgeoI9GFPjdP7ps84O3e9pKfD0Hv9RAcc7gfsmKcPoA%2FTDkp8VakB94%2BHTvwal4PrK0ybny6UWSjdfslMg6EkU2GForcwPBVeQ05a1wsQRRhjDsbPyta4jWCMS1RR6pHZzQzIdvMxPIgz%2F7Tnd9e4J%2B1nISyon8GqXuimj%2BcGF7VRm7wx4He7pDBlZTW95b%2Fh9CLB%2F8A&X-Amz-Signature=8aceb97cdf4773fe748ca9f1589faa981e780124c820a760cb55ac1909cf9322&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W2H4HAM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTcH8Cd1tpuze8Tk01Ne2cC4%2BN%2FLp2SVR8bpyXQjHNMgIgcS38LlJ7obFY6Ek83j08xCS5FEmRSP%2Br5GWW63ypC9sqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFbV2Y1fXnc2AYtLpCrcA1ZmkmbDKw3myU8Ds3vsTrp93Hs14AmC%2FEe76vr1g0FsirovpJGr5B6KvO9%2Fye5JEHTsmG18SStfxPih7qPeBudUOUgXAksi7hnxAAjDLW%2BhuKQemndQXs7rgpsSnLu40gU5IqZGnHmaWW4pG55ti2GWTy9LcDCyPgVR7cpoc7y3hMkSDeW11rn4wWTXCdvCwEgWnQfi1XD87ZkZLScjU3B1oLoIOb8F25leRNXdAvjnX5IziTiR%2F2MtvYW3SOU0OoXN9uUIK5xO0eUDt4k3vW5osgZvc1A%2BdiBEng2k0Xf0oYQL%2BdhGWO54wej7ppi%2FYciEfBYBbTXE9o6FGwm18NIN4jtI5wJaNP9bwMb9ZiHX6%2BuQzVbV0FpAh73m2g4Tgg%2FiBgMi3pJWhcv15%2Fnm50F4xlIlfh48ysjPSlZZivoHOA9%2FfpYVCMcfLYDXpyJJvJafcR84LfBzOVNUJOZBPNITBJEXku3DD9xIWwkaKNGJBIj67bPHbgvLNjg76nefOhq6ZvdgQ%2F5q4DXfPK84vMWyNNs145vkHUutyqhFqSiaakSo%2BfZzbRNsAjW4E%2Fj6KL9fYZ9bpTQxicnN5pLm4nn2XM8JtDgDT%2F%2BWWAe1ZSPTxku4Tw4SIx4ZSkC7MNzbrsQGOqUBUWArzfmPsn7%2Fb8OUjAlQpgeoI9GFPjdP7ps84O3e9pKfD0Hv9RAcc7gfsmKcPoA%2FTDkp8VakB94%2BHTvwal4PrK0ybny6UWSjdfslMg6EkU2GForcwPBVeQ05a1wsQRRhjDsbPyta4jWCMS1RR6pHZzQzIdvMxPIgz%2F7Tnd9e4J%2B1nISyon8GqXuimj%2BcGF7VRm7wx4He7pDBlZTW95b%2Fh9CLB%2F8A&X-Amz-Signature=c45673ab0bd273385e70b1066fcfb661e58018a3d8c9fe037f4413412bdcfed1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W2H4HAM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTcH8Cd1tpuze8Tk01Ne2cC4%2BN%2FLp2SVR8bpyXQjHNMgIgcS38LlJ7obFY6Ek83j08xCS5FEmRSP%2Br5GWW63ypC9sqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFbV2Y1fXnc2AYtLpCrcA1ZmkmbDKw3myU8Ds3vsTrp93Hs14AmC%2FEe76vr1g0FsirovpJGr5B6KvO9%2Fye5JEHTsmG18SStfxPih7qPeBudUOUgXAksi7hnxAAjDLW%2BhuKQemndQXs7rgpsSnLu40gU5IqZGnHmaWW4pG55ti2GWTy9LcDCyPgVR7cpoc7y3hMkSDeW11rn4wWTXCdvCwEgWnQfi1XD87ZkZLScjU3B1oLoIOb8F25leRNXdAvjnX5IziTiR%2F2MtvYW3SOU0OoXN9uUIK5xO0eUDt4k3vW5osgZvc1A%2BdiBEng2k0Xf0oYQL%2BdhGWO54wej7ppi%2FYciEfBYBbTXE9o6FGwm18NIN4jtI5wJaNP9bwMb9ZiHX6%2BuQzVbV0FpAh73m2g4Tgg%2FiBgMi3pJWhcv15%2Fnm50F4xlIlfh48ysjPSlZZivoHOA9%2FfpYVCMcfLYDXpyJJvJafcR84LfBzOVNUJOZBPNITBJEXku3DD9xIWwkaKNGJBIj67bPHbgvLNjg76nefOhq6ZvdgQ%2F5q4DXfPK84vMWyNNs145vkHUutyqhFqSiaakSo%2BfZzbRNsAjW4E%2Fj6KL9fYZ9bpTQxicnN5pLm4nn2XM8JtDgDT%2F%2BWWAe1ZSPTxku4Tw4SIx4ZSkC7MNzbrsQGOqUBUWArzfmPsn7%2Fb8OUjAlQpgeoI9GFPjdP7ps84O3e9pKfD0Hv9RAcc7gfsmKcPoA%2FTDkp8VakB94%2BHTvwal4PrK0ybny6UWSjdfslMg6EkU2GForcwPBVeQ05a1wsQRRhjDsbPyta4jWCMS1RR6pHZzQzIdvMxPIgz%2F7Tnd9e4J%2B1nISyon8GqXuimj%2BcGF7VRm7wx4He7pDBlZTW95b%2Fh9CLB%2F8A&X-Amz-Signature=725cc2314d83d23e491f32962b48dc3e96c42a72925b4a7d62054bc9259fae8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

# Nav2 settings

TODO: change footprint?
