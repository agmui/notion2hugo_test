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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645KZZFHN%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCr3LaSeGJfpPSPyo3cQb0qc2MAdUQ1d1N%2F%2FwKoZRod2AIgPgLCbHO%2BrefGhiB%2FKmN3scUVz%2BsMR2UzJuAGVfvadPMqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPkwKomBQBJ4OamOircA67sW7gTyJ3EthlnAgm2h5TBp%2Bp4WMyA2nCpiI7xtTDqBp0Dkx11HoQwRZokilL4KiqNcXeYO9onmRQqmY1rQxV67YkaVP8uWhlDuI5KhzvE4UpJOF8b2CxDfwAaB6HMLyBsX6ifW8dpLNmXBCgwLibC42ZBJivfXxXzaQCkl7vrDC%2BgfD131jYIwwI7jEMIAcJUNsf5slJBNxx97s2Gh0r5nMOhJbyUG566qzL50WtQz14mqe3lBKdgaXXY23C8v29u%2Fhfrs2%2FzYNY00ThTo%2Fi4miPjOICysvsg18aZpemyVtyOtZAc%2Fqi02%2BjjJDBARg3M6BmcgsHDhmGP1om7OdzL1PrRllnBlGpIjOAyjusgjL4xZ7TUK8KiKNyhnUHJgrU0eh0UJS%2FkxkGqLgFNLF2GcNUVwuh90Ug2CI3wyPMgkHe2Vfr56J6o42tBTT6Gx3DfDw18Rj6yf6sUkUM2tkj%2BkSskHCoDW%2FHBefACW1P4tFuLYUXxRZ09ApaAp34zSfSva8vAkE4TW%2BkJryoWd3ZrE610wrzVT8se9125VlUSUBC7Q3F09XbmackriQrHxswuJTJxDoyJGG%2FLctlONbo24UTJkjrEpiHYU%2FC%2FpmEnsqy0LKtXA5hnFRacMIKll9IGOqUBZpkRO4sXBLP9BnTEuRCsgbAFBlX%2BaO5RZgpzEEkFAfupnsLLZj%2BpoFHnoNTWYzbXpgNvCH7YX4OYDCLh7GpbsEc%2B2e9I5zjaOM0rGhRWqcTDWYqaWi%2FpzSNfTE3xnzcuzNjluaLc9gVnb4uOX%2Bt%2B6MVoRjfB3bYf%2FEmZUHrJxhjMtewEF4zcUXTofjFofXlIy%2BT%2FTBoUYK4uXnRKjcV3IA8WRYwO&X-Amz-Signature=d25d78d53e352968f4c64919e253d25d12208ed2f1db8381ffd219d3db095027&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/plan`    | nav_msgs/msgPath    |
| `/cmd_vel` | geometry_msgs/Twist |

#### Params:

| **Name**       | **Type** |
| -------------- | -------- |
| `params_file`  | file     |
| `use_sim_time` | bool     |

#### description:

`/odom`, `/map`, and `map => odom => base_link` tells Nav2 where the robot is

`/goal_pose` is where the robot wants to go

`/plan` is the path generated to get to that point

`/cmd_vel` actual moves the robot’s wheels 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645KZZFHN%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCr3LaSeGJfpPSPyo3cQb0qc2MAdUQ1d1N%2F%2FwKoZRod2AIgPgLCbHO%2BrefGhiB%2FKmN3scUVz%2BsMR2UzJuAGVfvadPMqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPkwKomBQBJ4OamOircA67sW7gTyJ3EthlnAgm2h5TBp%2Bp4WMyA2nCpiI7xtTDqBp0Dkx11HoQwRZokilL4KiqNcXeYO9onmRQqmY1rQxV67YkaVP8uWhlDuI5KhzvE4UpJOF8b2CxDfwAaB6HMLyBsX6ifW8dpLNmXBCgwLibC42ZBJivfXxXzaQCkl7vrDC%2BgfD131jYIwwI7jEMIAcJUNsf5slJBNxx97s2Gh0r5nMOhJbyUG566qzL50WtQz14mqe3lBKdgaXXY23C8v29u%2Fhfrs2%2FzYNY00ThTo%2Fi4miPjOICysvsg18aZpemyVtyOtZAc%2Fqi02%2BjjJDBARg3M6BmcgsHDhmGP1om7OdzL1PrRllnBlGpIjOAyjusgjL4xZ7TUK8KiKNyhnUHJgrU0eh0UJS%2FkxkGqLgFNLF2GcNUVwuh90Ug2CI3wyPMgkHe2Vfr56J6o42tBTT6Gx3DfDw18Rj6yf6sUkUM2tkj%2BkSskHCoDW%2FHBefACW1P4tFuLYUXxRZ09ApaAp34zSfSva8vAkE4TW%2BkJryoWd3ZrE610wrzVT8se9125VlUSUBC7Q3F09XbmackriQrHxswuJTJxDoyJGG%2FLctlONbo24UTJkjrEpiHYU%2FC%2FpmEnsqy0LKtXA5hnFRacMIKll9IGOqUBZpkRO4sXBLP9BnTEuRCsgbAFBlX%2BaO5RZgpzEEkFAfupnsLLZj%2BpoFHnoNTWYzbXpgNvCH7YX4OYDCLh7GpbsEc%2B2e9I5zjaOM0rGhRWqcTDWYqaWi%2FpzSNfTE3xnzcuzNjluaLc9gVnb4uOX%2Bt%2B6MVoRjfB3bYf%2FEmZUHrJxhjMtewEF4zcUXTofjFofXlIy%2BT%2FTBoUYK4uXnRKjcV3IA8WRYwO&X-Amz-Signature=b447a44600b3bfede7ddbb1de1ca0185f0de63186ac9bb3ca6c5a3f14d62712c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645KZZFHN%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCr3LaSeGJfpPSPyo3cQb0qc2MAdUQ1d1N%2F%2FwKoZRod2AIgPgLCbHO%2BrefGhiB%2FKmN3scUVz%2BsMR2UzJuAGVfvadPMqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPkwKomBQBJ4OamOircA67sW7gTyJ3EthlnAgm2h5TBp%2Bp4WMyA2nCpiI7xtTDqBp0Dkx11HoQwRZokilL4KiqNcXeYO9onmRQqmY1rQxV67YkaVP8uWhlDuI5KhzvE4UpJOF8b2CxDfwAaB6HMLyBsX6ifW8dpLNmXBCgwLibC42ZBJivfXxXzaQCkl7vrDC%2BgfD131jYIwwI7jEMIAcJUNsf5slJBNxx97s2Gh0r5nMOhJbyUG566qzL50WtQz14mqe3lBKdgaXXY23C8v29u%2Fhfrs2%2FzYNY00ThTo%2Fi4miPjOICysvsg18aZpemyVtyOtZAc%2Fqi02%2BjjJDBARg3M6BmcgsHDhmGP1om7OdzL1PrRllnBlGpIjOAyjusgjL4xZ7TUK8KiKNyhnUHJgrU0eh0UJS%2FkxkGqLgFNLF2GcNUVwuh90Ug2CI3wyPMgkHe2Vfr56J6o42tBTT6Gx3DfDw18Rj6yf6sUkUM2tkj%2BkSskHCoDW%2FHBefACW1P4tFuLYUXxRZ09ApaAp34zSfSva8vAkE4TW%2BkJryoWd3ZrE610wrzVT8se9125VlUSUBC7Q3F09XbmackriQrHxswuJTJxDoyJGG%2FLctlONbo24UTJkjrEpiHYU%2FC%2FpmEnsqy0LKtXA5hnFRacMIKll9IGOqUBZpkRO4sXBLP9BnTEuRCsgbAFBlX%2BaO5RZgpzEEkFAfupnsLLZj%2BpoFHnoNTWYzbXpgNvCH7YX4OYDCLh7GpbsEc%2B2e9I5zjaOM0rGhRWqcTDWYqaWi%2FpzSNfTE3xnzcuzNjluaLc9gVnb4uOX%2Bt%2B6MVoRjfB3bYf%2FEmZUHrJxhjMtewEF4zcUXTofjFofXlIy%2BT%2FTBoUYK4uXnRKjcV3IA8WRYwO&X-Amz-Signature=bbe66ee585eff93aa1f5c059b09e8c423abcfccdfd7f2f47040013e227e6e99e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645KZZFHN%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCr3LaSeGJfpPSPyo3cQb0qc2MAdUQ1d1N%2F%2FwKoZRod2AIgPgLCbHO%2BrefGhiB%2FKmN3scUVz%2BsMR2UzJuAGVfvadPMqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPkwKomBQBJ4OamOircA67sW7gTyJ3EthlnAgm2h5TBp%2Bp4WMyA2nCpiI7xtTDqBp0Dkx11HoQwRZokilL4KiqNcXeYO9onmRQqmY1rQxV67YkaVP8uWhlDuI5KhzvE4UpJOF8b2CxDfwAaB6HMLyBsX6ifW8dpLNmXBCgwLibC42ZBJivfXxXzaQCkl7vrDC%2BgfD131jYIwwI7jEMIAcJUNsf5slJBNxx97s2Gh0r5nMOhJbyUG566qzL50WtQz14mqe3lBKdgaXXY23C8v29u%2Fhfrs2%2FzYNY00ThTo%2Fi4miPjOICysvsg18aZpemyVtyOtZAc%2Fqi02%2BjjJDBARg3M6BmcgsHDhmGP1om7OdzL1PrRllnBlGpIjOAyjusgjL4xZ7TUK8KiKNyhnUHJgrU0eh0UJS%2FkxkGqLgFNLF2GcNUVwuh90Ug2CI3wyPMgkHe2Vfr56J6o42tBTT6Gx3DfDw18Rj6yf6sUkUM2tkj%2BkSskHCoDW%2FHBefACW1P4tFuLYUXxRZ09ApaAp34zSfSva8vAkE4TW%2BkJryoWd3ZrE610wrzVT8se9125VlUSUBC7Q3F09XbmackriQrHxswuJTJxDoyJGG%2FLctlONbo24UTJkjrEpiHYU%2FC%2FpmEnsqy0LKtXA5hnFRacMIKll9IGOqUBZpkRO4sXBLP9BnTEuRCsgbAFBlX%2BaO5RZgpzEEkFAfupnsLLZj%2BpoFHnoNTWYzbXpgNvCH7YX4OYDCLh7GpbsEc%2B2e9I5zjaOM0rGhRWqcTDWYqaWi%2FpzSNfTE3xnzcuzNjluaLc9gVnb4uOX%2Bt%2B6MVoRjfB3bYf%2FEmZUHrJxhjMtewEF4zcUXTofjFofXlIy%2BT%2FTBoUYK4uXnRKjcV3IA8WRYwO&X-Amz-Signature=c29fc0c5c7df5f3f845ebf8bf61a779d7ee9e0314dce96fa7ea237352eb887b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```shell "1-1"
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=<path/to/nav2_params.yaml>
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert context="danger" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645KZZFHN%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCr3LaSeGJfpPSPyo3cQb0qc2MAdUQ1d1N%2F%2FwKoZRod2AIgPgLCbHO%2BrefGhiB%2FKmN3scUVz%2BsMR2UzJuAGVfvadPMqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPkwKomBQBJ4OamOircA67sW7gTyJ3EthlnAgm2h5TBp%2Bp4WMyA2nCpiI7xtTDqBp0Dkx11HoQwRZokilL4KiqNcXeYO9onmRQqmY1rQxV67YkaVP8uWhlDuI5KhzvE4UpJOF8b2CxDfwAaB6HMLyBsX6ifW8dpLNmXBCgwLibC42ZBJivfXxXzaQCkl7vrDC%2BgfD131jYIwwI7jEMIAcJUNsf5slJBNxx97s2Gh0r5nMOhJbyUG566qzL50WtQz14mqe3lBKdgaXXY23C8v29u%2Fhfrs2%2FzYNY00ThTo%2Fi4miPjOICysvsg18aZpemyVtyOtZAc%2Fqi02%2BjjJDBARg3M6BmcgsHDhmGP1om7OdzL1PrRllnBlGpIjOAyjusgjL4xZ7TUK8KiKNyhnUHJgrU0eh0UJS%2FkxkGqLgFNLF2GcNUVwuh90Ug2CI3wyPMgkHe2Vfr56J6o42tBTT6Gx3DfDw18Rj6yf6sUkUM2tkj%2BkSskHCoDW%2FHBefACW1P4tFuLYUXxRZ09ApaAp34zSfSva8vAkE4TW%2BkJryoWd3ZrE610wrzVT8se9125VlUSUBC7Q3F09XbmackriQrHxswuJTJxDoyJGG%2FLctlONbo24UTJkjrEpiHYU%2FC%2FpmEnsqy0LKtXA5hnFRacMIKll9IGOqUBZpkRO4sXBLP9BnTEuRCsgbAFBlX%2BaO5RZgpzEEkFAfupnsLLZj%2BpoFHnoNTWYzbXpgNvCH7YX4OYDCLh7GpbsEc%2B2e9I5zjaOM0rGhRWqcTDWYqaWi%2FpzSNfTE3xnzcuzNjluaLc9gVnb4uOX%2Bt%2B6MVoRjfB3bYf%2FEmZUHrJxhjMtewEF4zcUXTofjFofXlIy%2BT%2FTBoUYK4uXnRKjcV3IA8WRYwO&X-Amz-Signature=c1d02806d7baa68bbfc320af9b1a56a00d97ea576e5251ec7179ff3e290eda66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645KZZFHN%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCr3LaSeGJfpPSPyo3cQb0qc2MAdUQ1d1N%2F%2FwKoZRod2AIgPgLCbHO%2BrefGhiB%2FKmN3scUVz%2BsMR2UzJuAGVfvadPMqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPkwKomBQBJ4OamOircA67sW7gTyJ3EthlnAgm2h5TBp%2Bp4WMyA2nCpiI7xtTDqBp0Dkx11HoQwRZokilL4KiqNcXeYO9onmRQqmY1rQxV67YkaVP8uWhlDuI5KhzvE4UpJOF8b2CxDfwAaB6HMLyBsX6ifW8dpLNmXBCgwLibC42ZBJivfXxXzaQCkl7vrDC%2BgfD131jYIwwI7jEMIAcJUNsf5slJBNxx97s2Gh0r5nMOhJbyUG566qzL50WtQz14mqe3lBKdgaXXY23C8v29u%2Fhfrs2%2FzYNY00ThTo%2Fi4miPjOICysvsg18aZpemyVtyOtZAc%2Fqi02%2BjjJDBARg3M6BmcgsHDhmGP1om7OdzL1PrRllnBlGpIjOAyjusgjL4xZ7TUK8KiKNyhnUHJgrU0eh0UJS%2FkxkGqLgFNLF2GcNUVwuh90Ug2CI3wyPMgkHe2Vfr56J6o42tBTT6Gx3DfDw18Rj6yf6sUkUM2tkj%2BkSskHCoDW%2FHBefACW1P4tFuLYUXxRZ09ApaAp34zSfSva8vAkE4TW%2BkJryoWd3ZrE610wrzVT8se9125VlUSUBC7Q3F09XbmackriQrHxswuJTJxDoyJGG%2FLctlONbo24UTJkjrEpiHYU%2FC%2FpmEnsqy0LKtXA5hnFRacMIKll9IGOqUBZpkRO4sXBLP9BnTEuRCsgbAFBlX%2BaO5RZgpzEEkFAfupnsLLZj%2BpoFHnoNTWYzbXpgNvCH7YX4OYDCLh7GpbsEc%2B2e9I5zjaOM0rGhRWqcTDWYqaWi%2FpzSNfTE3xnzcuzNjluaLc9gVnb4uOX%2Bt%2B6MVoRjfB3bYf%2FEmZUHrJxhjMtewEF4zcUXTofjFofXlIy%2BT%2FTBoUYK4uXnRKjcV3IA8WRYwO&X-Amz-Signature=b4aa2bfe212695aeb610cf956b62334b1e8547d3c32d8fae0a3da13dcdf04bf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645KZZFHN%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCr3LaSeGJfpPSPyo3cQb0qc2MAdUQ1d1N%2F%2FwKoZRod2AIgPgLCbHO%2BrefGhiB%2FKmN3scUVz%2BsMR2UzJuAGVfvadPMqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPkwKomBQBJ4OamOircA67sW7gTyJ3EthlnAgm2h5TBp%2Bp4WMyA2nCpiI7xtTDqBp0Dkx11HoQwRZokilL4KiqNcXeYO9onmRQqmY1rQxV67YkaVP8uWhlDuI5KhzvE4UpJOF8b2CxDfwAaB6HMLyBsX6ifW8dpLNmXBCgwLibC42ZBJivfXxXzaQCkl7vrDC%2BgfD131jYIwwI7jEMIAcJUNsf5slJBNxx97s2Gh0r5nMOhJbyUG566qzL50WtQz14mqe3lBKdgaXXY23C8v29u%2Fhfrs2%2FzYNY00ThTo%2Fi4miPjOICysvsg18aZpemyVtyOtZAc%2Fqi02%2BjjJDBARg3M6BmcgsHDhmGP1om7OdzL1PrRllnBlGpIjOAyjusgjL4xZ7TUK8KiKNyhnUHJgrU0eh0UJS%2FkxkGqLgFNLF2GcNUVwuh90Ug2CI3wyPMgkHe2Vfr56J6o42tBTT6Gx3DfDw18Rj6yf6sUkUM2tkj%2BkSskHCoDW%2FHBefACW1P4tFuLYUXxRZ09ApaAp34zSfSva8vAkE4TW%2BkJryoWd3ZrE610wrzVT8se9125VlUSUBC7Q3F09XbmackriQrHxswuJTJxDoyJGG%2FLctlONbo24UTJkjrEpiHYU%2FC%2FpmEnsqy0LKtXA5hnFRacMIKll9IGOqUBZpkRO4sXBLP9BnTEuRCsgbAFBlX%2BaO5RZgpzEEkFAfupnsLLZj%2BpoFHnoNTWYzbXpgNvCH7YX4OYDCLh7GpbsEc%2B2e9I5zjaOM0rGhRWqcTDWYqaWi%2FpzSNfTE3xnzcuzNjluaLc9gVnb4uOX%2Bt%2B6MVoRjfB3bYf%2FEmZUHrJxhjMtewEF4zcUXTofjFofXlIy%2BT%2FTBoUYK4uXnRKjcV3IA8WRYwO&X-Amz-Signature=6812d1a411913141f951990f92fdd2983e53caeceb5c953605e03e89baf9fc98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645KZZFHN%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCr3LaSeGJfpPSPyo3cQb0qc2MAdUQ1d1N%2F%2FwKoZRod2AIgPgLCbHO%2BrefGhiB%2FKmN3scUVz%2BsMR2UzJuAGVfvadPMqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPkwKomBQBJ4OamOircA67sW7gTyJ3EthlnAgm2h5TBp%2Bp4WMyA2nCpiI7xtTDqBp0Dkx11HoQwRZokilL4KiqNcXeYO9onmRQqmY1rQxV67YkaVP8uWhlDuI5KhzvE4UpJOF8b2CxDfwAaB6HMLyBsX6ifW8dpLNmXBCgwLibC42ZBJivfXxXzaQCkl7vrDC%2BgfD131jYIwwI7jEMIAcJUNsf5slJBNxx97s2Gh0r5nMOhJbyUG566qzL50WtQz14mqe3lBKdgaXXY23C8v29u%2Fhfrs2%2FzYNY00ThTo%2Fi4miPjOICysvsg18aZpemyVtyOtZAc%2Fqi02%2BjjJDBARg3M6BmcgsHDhmGP1om7OdzL1PrRllnBlGpIjOAyjusgjL4xZ7TUK8KiKNyhnUHJgrU0eh0UJS%2FkxkGqLgFNLF2GcNUVwuh90Ug2CI3wyPMgkHe2Vfr56J6o42tBTT6Gx3DfDw18Rj6yf6sUkUM2tkj%2BkSskHCoDW%2FHBefACW1P4tFuLYUXxRZ09ApaAp34zSfSva8vAkE4TW%2BkJryoWd3ZrE610wrzVT8se9125VlUSUBC7Q3F09XbmackriQrHxswuJTJxDoyJGG%2FLctlONbo24UTJkjrEpiHYU%2FC%2FpmEnsqy0LKtXA5hnFRacMIKll9IGOqUBZpkRO4sXBLP9BnTEuRCsgbAFBlX%2BaO5RZgpzEEkFAfupnsLLZj%2BpoFHnoNTWYzbXpgNvCH7YX4OYDCLh7GpbsEc%2B2e9I5zjaOM0rGhRWqcTDWYqaWi%2FpzSNfTE3xnzcuzNjluaLc9gVnb4uOX%2Bt%2B6MVoRjfB3bYf%2FEmZUHrJxhjMtewEF4zcUXTofjFofXlIy%2BT%2FTBoUYK4uXnRKjcV3IA8WRYwO&X-Amz-Signature=6310e28a804399250d695876fa9d1efa5a02ae0306b37479d9f3a13a2b298d7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645KZZFHN%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCr3LaSeGJfpPSPyo3cQb0qc2MAdUQ1d1N%2F%2FwKoZRod2AIgPgLCbHO%2BrefGhiB%2FKmN3scUVz%2BsMR2UzJuAGVfvadPMqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPkwKomBQBJ4OamOircA67sW7gTyJ3EthlnAgm2h5TBp%2Bp4WMyA2nCpiI7xtTDqBp0Dkx11HoQwRZokilL4KiqNcXeYO9onmRQqmY1rQxV67YkaVP8uWhlDuI5KhzvE4UpJOF8b2CxDfwAaB6HMLyBsX6ifW8dpLNmXBCgwLibC42ZBJivfXxXzaQCkl7vrDC%2BgfD131jYIwwI7jEMIAcJUNsf5slJBNxx97s2Gh0r5nMOhJbyUG566qzL50WtQz14mqe3lBKdgaXXY23C8v29u%2Fhfrs2%2FzYNY00ThTo%2Fi4miPjOICysvsg18aZpemyVtyOtZAc%2Fqi02%2BjjJDBARg3M6BmcgsHDhmGP1om7OdzL1PrRllnBlGpIjOAyjusgjL4xZ7TUK8KiKNyhnUHJgrU0eh0UJS%2FkxkGqLgFNLF2GcNUVwuh90Ug2CI3wyPMgkHe2Vfr56J6o42tBTT6Gx3DfDw18Rj6yf6sUkUM2tkj%2BkSskHCoDW%2FHBefACW1P4tFuLYUXxRZ09ApaAp34zSfSva8vAkE4TW%2BkJryoWd3ZrE610wrzVT8se9125VlUSUBC7Q3F09XbmackriQrHxswuJTJxDoyJGG%2FLctlONbo24UTJkjrEpiHYU%2FC%2FpmEnsqy0LKtXA5hnFRacMIKll9IGOqUBZpkRO4sXBLP9BnTEuRCsgbAFBlX%2BaO5RZgpzEEkFAfupnsLLZj%2BpoFHnoNTWYzbXpgNvCH7YX4OYDCLh7GpbsEc%2B2e9I5zjaOM0rGhRWqcTDWYqaWi%2FpzSNfTE3xnzcuzNjluaLc9gVnb4uOX%2Bt%2B6MVoRjfB3bYf%2FEmZUHrJxhjMtewEF4zcUXTofjFofXlIy%2BT%2FTBoUYK4uXnRKjcV3IA8WRYwO&X-Amz-Signature=a62469daa86c588fc74fc4ba87003c4a4a235a038186447e85a72c8bf10c3bf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645KZZFHN%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCr3LaSeGJfpPSPyo3cQb0qc2MAdUQ1d1N%2F%2FwKoZRod2AIgPgLCbHO%2BrefGhiB%2FKmN3scUVz%2BsMR2UzJuAGVfvadPMqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPkwKomBQBJ4OamOircA67sW7gTyJ3EthlnAgm2h5TBp%2Bp4WMyA2nCpiI7xtTDqBp0Dkx11HoQwRZokilL4KiqNcXeYO9onmRQqmY1rQxV67YkaVP8uWhlDuI5KhzvE4UpJOF8b2CxDfwAaB6HMLyBsX6ifW8dpLNmXBCgwLibC42ZBJivfXxXzaQCkl7vrDC%2BgfD131jYIwwI7jEMIAcJUNsf5slJBNxx97s2Gh0r5nMOhJbyUG566qzL50WtQz14mqe3lBKdgaXXY23C8v29u%2Fhfrs2%2FzYNY00ThTo%2Fi4miPjOICysvsg18aZpemyVtyOtZAc%2Fqi02%2BjjJDBARg3M6BmcgsHDhmGP1om7OdzL1PrRllnBlGpIjOAyjusgjL4xZ7TUK8KiKNyhnUHJgrU0eh0UJS%2FkxkGqLgFNLF2GcNUVwuh90Ug2CI3wyPMgkHe2Vfr56J6o42tBTT6Gx3DfDw18Rj6yf6sUkUM2tkj%2BkSskHCoDW%2FHBefACW1P4tFuLYUXxRZ09ApaAp34zSfSva8vAkE4TW%2BkJryoWd3ZrE610wrzVT8se9125VlUSUBC7Q3F09XbmackriQrHxswuJTJxDoyJGG%2FLctlONbo24UTJkjrEpiHYU%2FC%2FpmEnsqy0LKtXA5hnFRacMIKll9IGOqUBZpkRO4sXBLP9BnTEuRCsgbAFBlX%2BaO5RZgpzEEkFAfupnsLLZj%2BpoFHnoNTWYzbXpgNvCH7YX4OYDCLh7GpbsEc%2B2e9I5zjaOM0rGhRWqcTDWYqaWi%2FpzSNfTE3xnzcuzNjluaLc9gVnb4uOX%2Bt%2B6MVoRjfB3bYf%2FEmZUHrJxhjMtewEF4zcUXTofjFofXlIy%2BT%2FTBoUYK4uXnRKjcV3IA8WRYwO&X-Amz-Signature=f736af9ee1c08452cfc8e05016e88c28c79705447598964e1b7cbe11d621fbd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645KZZFHN%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCr3LaSeGJfpPSPyo3cQb0qc2MAdUQ1d1N%2F%2FwKoZRod2AIgPgLCbHO%2BrefGhiB%2FKmN3scUVz%2BsMR2UzJuAGVfvadPMqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPkwKomBQBJ4OamOircA67sW7gTyJ3EthlnAgm2h5TBp%2Bp4WMyA2nCpiI7xtTDqBp0Dkx11HoQwRZokilL4KiqNcXeYO9onmRQqmY1rQxV67YkaVP8uWhlDuI5KhzvE4UpJOF8b2CxDfwAaB6HMLyBsX6ifW8dpLNmXBCgwLibC42ZBJivfXxXzaQCkl7vrDC%2BgfD131jYIwwI7jEMIAcJUNsf5slJBNxx97s2Gh0r5nMOhJbyUG566qzL50WtQz14mqe3lBKdgaXXY23C8v29u%2Fhfrs2%2FzYNY00ThTo%2Fi4miPjOICysvsg18aZpemyVtyOtZAc%2Fqi02%2BjjJDBARg3M6BmcgsHDhmGP1om7OdzL1PrRllnBlGpIjOAyjusgjL4xZ7TUK8KiKNyhnUHJgrU0eh0UJS%2FkxkGqLgFNLF2GcNUVwuh90Ug2CI3wyPMgkHe2Vfr56J6o42tBTT6Gx3DfDw18Rj6yf6sUkUM2tkj%2BkSskHCoDW%2FHBefACW1P4tFuLYUXxRZ09ApaAp34zSfSva8vAkE4TW%2BkJryoWd3ZrE610wrzVT8se9125VlUSUBC7Q3F09XbmackriQrHxswuJTJxDoyJGG%2FLctlONbo24UTJkjrEpiHYU%2FC%2FpmEnsqy0LKtXA5hnFRacMIKll9IGOqUBZpkRO4sXBLP9BnTEuRCsgbAFBlX%2BaO5RZgpzEEkFAfupnsLLZj%2BpoFHnoNTWYzbXpgNvCH7YX4OYDCLh7GpbsEc%2B2e9I5zjaOM0rGhRWqcTDWYqaWi%2FpzSNfTE3xnzcuzNjluaLc9gVnb4uOX%2Bt%2B6MVoRjfB3bYf%2FEmZUHrJxhjMtewEF4zcUXTofjFofXlIy%2BT%2FTBoUYK4uXnRKjcV3IA8WRYwO&X-Amz-Signature=9da3aadf5d9da0464a4ea2c91625229799c9717260784fe436b97b57db4a3ed0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645KZZFHN%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCr3LaSeGJfpPSPyo3cQb0qc2MAdUQ1d1N%2F%2FwKoZRod2AIgPgLCbHO%2BrefGhiB%2FKmN3scUVz%2BsMR2UzJuAGVfvadPMqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPkwKomBQBJ4OamOircA67sW7gTyJ3EthlnAgm2h5TBp%2Bp4WMyA2nCpiI7xtTDqBp0Dkx11HoQwRZokilL4KiqNcXeYO9onmRQqmY1rQxV67YkaVP8uWhlDuI5KhzvE4UpJOF8b2CxDfwAaB6HMLyBsX6ifW8dpLNmXBCgwLibC42ZBJivfXxXzaQCkl7vrDC%2BgfD131jYIwwI7jEMIAcJUNsf5slJBNxx97s2Gh0r5nMOhJbyUG566qzL50WtQz14mqe3lBKdgaXXY23C8v29u%2Fhfrs2%2FzYNY00ThTo%2Fi4miPjOICysvsg18aZpemyVtyOtZAc%2Fqi02%2BjjJDBARg3M6BmcgsHDhmGP1om7OdzL1PrRllnBlGpIjOAyjusgjL4xZ7TUK8KiKNyhnUHJgrU0eh0UJS%2FkxkGqLgFNLF2GcNUVwuh90Ug2CI3wyPMgkHe2Vfr56J6o42tBTT6Gx3DfDw18Rj6yf6sUkUM2tkj%2BkSskHCoDW%2FHBefACW1P4tFuLYUXxRZ09ApaAp34zSfSva8vAkE4TW%2BkJryoWd3ZrE610wrzVT8se9125VlUSUBC7Q3F09XbmackriQrHxswuJTJxDoyJGG%2FLctlONbo24UTJkjrEpiHYU%2FC%2FpmEnsqy0LKtXA5hnFRacMIKll9IGOqUBZpkRO4sXBLP9BnTEuRCsgbAFBlX%2BaO5RZgpzEEkFAfupnsLLZj%2BpoFHnoNTWYzbXpgNvCH7YX4OYDCLh7GpbsEc%2B2e9I5zjaOM0rGhRWqcTDWYqaWi%2FpzSNfTE3xnzcuzNjluaLc9gVnb4uOX%2Bt%2B6MVoRjfB3bYf%2FEmZUHrJxhjMtewEF4zcUXTofjFofXlIy%2BT%2FTBoUYK4uXnRKjcV3IA8WRYwO&X-Amz-Signature=0075de2c32f6478b889899b4f4024d2de40197d5ce8ec977bd4ba761d7d0bd78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645KZZFHN%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCr3LaSeGJfpPSPyo3cQb0qc2MAdUQ1d1N%2F%2FwKoZRod2AIgPgLCbHO%2BrefGhiB%2FKmN3scUVz%2BsMR2UzJuAGVfvadPMqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPkwKomBQBJ4OamOircA67sW7gTyJ3EthlnAgm2h5TBp%2Bp4WMyA2nCpiI7xtTDqBp0Dkx11HoQwRZokilL4KiqNcXeYO9onmRQqmY1rQxV67YkaVP8uWhlDuI5KhzvE4UpJOF8b2CxDfwAaB6HMLyBsX6ifW8dpLNmXBCgwLibC42ZBJivfXxXzaQCkl7vrDC%2BgfD131jYIwwI7jEMIAcJUNsf5slJBNxx97s2Gh0r5nMOhJbyUG566qzL50WtQz14mqe3lBKdgaXXY23C8v29u%2Fhfrs2%2FzYNY00ThTo%2Fi4miPjOICysvsg18aZpemyVtyOtZAc%2Fqi02%2BjjJDBARg3M6BmcgsHDhmGP1om7OdzL1PrRllnBlGpIjOAyjusgjL4xZ7TUK8KiKNyhnUHJgrU0eh0UJS%2FkxkGqLgFNLF2GcNUVwuh90Ug2CI3wyPMgkHe2Vfr56J6o42tBTT6Gx3DfDw18Rj6yf6sUkUM2tkj%2BkSskHCoDW%2FHBefACW1P4tFuLYUXxRZ09ApaAp34zSfSva8vAkE4TW%2BkJryoWd3ZrE610wrzVT8se9125VlUSUBC7Q3F09XbmackriQrHxswuJTJxDoyJGG%2FLctlONbo24UTJkjrEpiHYU%2FC%2FpmEnsqy0LKtXA5hnFRacMIKll9IGOqUBZpkRO4sXBLP9BnTEuRCsgbAFBlX%2BaO5RZgpzEEkFAfupnsLLZj%2BpoFHnoNTWYzbXpgNvCH7YX4OYDCLh7GpbsEc%2B2e9I5zjaOM0rGhRWqcTDWYqaWi%2FpzSNfTE3xnzcuzNjluaLc9gVnb4uOX%2Bt%2B6MVoRjfB3bYf%2FEmZUHrJxhjMtewEF4zcUXTofjFofXlIy%2BT%2FTBoUYK4uXnRKjcV3IA8WRYwO&X-Amz-Signature=9bf171461bd7495a2d0399021d2462e5736f82b27e113a127630469094e5074d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```shell
ros2 launch mbot_pkg display.launch.py
```

```bash "1-1"
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

You should be able to publish a goal pose in rviz like in the section above

If you need your robot to autonomously put goal poses down, such as a match start in Robomasters, you just need to publish `geometry_msgs/PoseStamped` on `/goal_pose` inside of `my_node`

## Adding `nav2_bringup` to launch file

```python "1-9","9-9","9-12","12-21","40-40"
  
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
