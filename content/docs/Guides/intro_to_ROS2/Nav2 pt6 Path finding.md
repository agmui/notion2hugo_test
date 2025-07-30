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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPRZRKQK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeiRk%2F%2F7zTtNJemfaO5OifT2MQ3sjM6L8uiUKPOPj31AIgVzjic0i9%2BuHw7V0qsJBRriiww%2FwVWcLyCeqPJsvGAU8qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPgiR%2Fd1wFS7ehAVSrcA5fUmmE1D6Rjdg2FJPOUaff1gZEbOeeAHmJluHhRCIfrwkgpzTecD0NLgWjA%2BnQ%2Fli3bTqk%2FQQl4MoDB4Iz5Cc7uKpgXrPnY3fDss6kFNHB1BU%2BXY5p11v8ZLdSMKOHXXVpDHQorK9lNV6%2F%2Bd73AKEdWHbvzR5DX4TdRFaMaHPDpmQ9Zh86Da37EGXdVXyP%2FMYWq2P4jeIqQA1HnrSE4FwbKNK8H85CFaGFVmyTBZWEW0YPnQh0dP5B7Hz%2BZ9f1lpIDGaSFnx9qMtyzKEvpeTegqBMHb8reLgk9rK4tY%2FRlN8bzpLYuQN7P4VqI5sCpdsmvxvD9pV%2Fe2emO3sZhPqTL%2FHdXHL7hiyB%2BStF1SEcXpNto8b7I0GKDwRvYw2n8tu2i4w1hwwbDTvHzFfwTkqz4Qw1K0lUBgYihZIbTuNG1VnJaf0Uk7WmI%2FsoaFOYL34ScyKgRmA2hUNuO%2BGNXOJUBmSep0Sxh%2BSxFw0eXcQk2d9Icxf96c5AqLdVwwyR%2BHe4nsS3BzEMKBsMj7l07scEe%2FVmLaqpZPPL9ykIX6vzcLicOty5%2Bjhspzl59jtdL50hnR5UoCEqCJ1mTQD6KFXzq7oissjtpwFAtvF7eFi6OmIxWhMNL1ge7U2XMlMJmiqMQGOqUB9M8rcO1O%2BORD%2BL3K1MVw%2Bld0VV%2FjNZk5JqPyOPx%2BpDlpjeWp1pFb7GqfMZgtxaK%2BOHPsP8gGYCaujhwMnPnTjYz75DobF8LlDbo9Wb%2FuXH2pIM7ee9but%2FbMR30k7QkFMT%2BEPtsX0P2au4Uv5uoSaawEMNAQ6f0F6Sjc7KAKLUottRHGP2r8OCMTumtgPrxhinKlEUar1PIIzFHRoDCktD6zndva&X-Amz-Signature=15748dffb7cecdda2d8fd0ad514d1142624693d34aa9fdf694dd0c9c548b8b17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPRZRKQK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeiRk%2F%2F7zTtNJemfaO5OifT2MQ3sjM6L8uiUKPOPj31AIgVzjic0i9%2BuHw7V0qsJBRriiww%2FwVWcLyCeqPJsvGAU8qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPgiR%2Fd1wFS7ehAVSrcA5fUmmE1D6Rjdg2FJPOUaff1gZEbOeeAHmJluHhRCIfrwkgpzTecD0NLgWjA%2BnQ%2Fli3bTqk%2FQQl4MoDB4Iz5Cc7uKpgXrPnY3fDss6kFNHB1BU%2BXY5p11v8ZLdSMKOHXXVpDHQorK9lNV6%2F%2Bd73AKEdWHbvzR5DX4TdRFaMaHPDpmQ9Zh86Da37EGXdVXyP%2FMYWq2P4jeIqQA1HnrSE4FwbKNK8H85CFaGFVmyTBZWEW0YPnQh0dP5B7Hz%2BZ9f1lpIDGaSFnx9qMtyzKEvpeTegqBMHb8reLgk9rK4tY%2FRlN8bzpLYuQN7P4VqI5sCpdsmvxvD9pV%2Fe2emO3sZhPqTL%2FHdXHL7hiyB%2BStF1SEcXpNto8b7I0GKDwRvYw2n8tu2i4w1hwwbDTvHzFfwTkqz4Qw1K0lUBgYihZIbTuNG1VnJaf0Uk7WmI%2FsoaFOYL34ScyKgRmA2hUNuO%2BGNXOJUBmSep0Sxh%2BSxFw0eXcQk2d9Icxf96c5AqLdVwwyR%2BHe4nsS3BzEMKBsMj7l07scEe%2FVmLaqpZPPL9ykIX6vzcLicOty5%2Bjhspzl59jtdL50hnR5UoCEqCJ1mTQD6KFXzq7oissjtpwFAtvF7eFi6OmIxWhMNL1ge7U2XMlMJmiqMQGOqUB9M8rcO1O%2BORD%2BL3K1MVw%2Bld0VV%2FjNZk5JqPyOPx%2BpDlpjeWp1pFb7GqfMZgtxaK%2BOHPsP8gGYCaujhwMnPnTjYz75DobF8LlDbo9Wb%2FuXH2pIM7ee9but%2FbMR30k7QkFMT%2BEPtsX0P2au4Uv5uoSaawEMNAQ6f0F6Sjc7KAKLUottRHGP2r8OCMTumtgPrxhinKlEUar1PIIzFHRoDCktD6zndva&X-Amz-Signature=2841bafdac6f7f0b7a93ea4d5c7be9d0057ce84353a58e016c3c465d2a811741&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPRZRKQK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeiRk%2F%2F7zTtNJemfaO5OifT2MQ3sjM6L8uiUKPOPj31AIgVzjic0i9%2BuHw7V0qsJBRriiww%2FwVWcLyCeqPJsvGAU8qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPgiR%2Fd1wFS7ehAVSrcA5fUmmE1D6Rjdg2FJPOUaff1gZEbOeeAHmJluHhRCIfrwkgpzTecD0NLgWjA%2BnQ%2Fli3bTqk%2FQQl4MoDB4Iz5Cc7uKpgXrPnY3fDss6kFNHB1BU%2BXY5p11v8ZLdSMKOHXXVpDHQorK9lNV6%2F%2Bd73AKEdWHbvzR5DX4TdRFaMaHPDpmQ9Zh86Da37EGXdVXyP%2FMYWq2P4jeIqQA1HnrSE4FwbKNK8H85CFaGFVmyTBZWEW0YPnQh0dP5B7Hz%2BZ9f1lpIDGaSFnx9qMtyzKEvpeTegqBMHb8reLgk9rK4tY%2FRlN8bzpLYuQN7P4VqI5sCpdsmvxvD9pV%2Fe2emO3sZhPqTL%2FHdXHL7hiyB%2BStF1SEcXpNto8b7I0GKDwRvYw2n8tu2i4w1hwwbDTvHzFfwTkqz4Qw1K0lUBgYihZIbTuNG1VnJaf0Uk7WmI%2FsoaFOYL34ScyKgRmA2hUNuO%2BGNXOJUBmSep0Sxh%2BSxFw0eXcQk2d9Icxf96c5AqLdVwwyR%2BHe4nsS3BzEMKBsMj7l07scEe%2FVmLaqpZPPL9ykIX6vzcLicOty5%2Bjhspzl59jtdL50hnR5UoCEqCJ1mTQD6KFXzq7oissjtpwFAtvF7eFi6OmIxWhMNL1ge7U2XMlMJmiqMQGOqUB9M8rcO1O%2BORD%2BL3K1MVw%2Bld0VV%2FjNZk5JqPyOPx%2BpDlpjeWp1pFb7GqfMZgtxaK%2BOHPsP8gGYCaujhwMnPnTjYz75DobF8LlDbo9Wb%2FuXH2pIM7ee9but%2FbMR30k7QkFMT%2BEPtsX0P2au4Uv5uoSaawEMNAQ6f0F6Sjc7KAKLUottRHGP2r8OCMTumtgPrxhinKlEUar1PIIzFHRoDCktD6zndva&X-Amz-Signature=158f8644f4ee3dcc842513021d0bdeb515cbf4133c5b723da04a66c56121f221&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPRZRKQK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeiRk%2F%2F7zTtNJemfaO5OifT2MQ3sjM6L8uiUKPOPj31AIgVzjic0i9%2BuHw7V0qsJBRriiww%2FwVWcLyCeqPJsvGAU8qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPgiR%2Fd1wFS7ehAVSrcA5fUmmE1D6Rjdg2FJPOUaff1gZEbOeeAHmJluHhRCIfrwkgpzTecD0NLgWjA%2BnQ%2Fli3bTqk%2FQQl4MoDB4Iz5Cc7uKpgXrPnY3fDss6kFNHB1BU%2BXY5p11v8ZLdSMKOHXXVpDHQorK9lNV6%2F%2Bd73AKEdWHbvzR5DX4TdRFaMaHPDpmQ9Zh86Da37EGXdVXyP%2FMYWq2P4jeIqQA1HnrSE4FwbKNK8H85CFaGFVmyTBZWEW0YPnQh0dP5B7Hz%2BZ9f1lpIDGaSFnx9qMtyzKEvpeTegqBMHb8reLgk9rK4tY%2FRlN8bzpLYuQN7P4VqI5sCpdsmvxvD9pV%2Fe2emO3sZhPqTL%2FHdXHL7hiyB%2BStF1SEcXpNto8b7I0GKDwRvYw2n8tu2i4w1hwwbDTvHzFfwTkqz4Qw1K0lUBgYihZIbTuNG1VnJaf0Uk7WmI%2FsoaFOYL34ScyKgRmA2hUNuO%2BGNXOJUBmSep0Sxh%2BSxFw0eXcQk2d9Icxf96c5AqLdVwwyR%2BHe4nsS3BzEMKBsMj7l07scEe%2FVmLaqpZPPL9ykIX6vzcLicOty5%2Bjhspzl59jtdL50hnR5UoCEqCJ1mTQD6KFXzq7oissjtpwFAtvF7eFi6OmIxWhMNL1ge7U2XMlMJmiqMQGOqUB9M8rcO1O%2BORD%2BL3K1MVw%2Bld0VV%2FjNZk5JqPyOPx%2BpDlpjeWp1pFb7GqfMZgtxaK%2BOHPsP8gGYCaujhwMnPnTjYz75DobF8LlDbo9Wb%2FuXH2pIM7ee9but%2FbMR30k7QkFMT%2BEPtsX0P2au4Uv5uoSaawEMNAQ6f0F6Sjc7KAKLUottRHGP2r8OCMTumtgPrxhinKlEUar1PIIzFHRoDCktD6zndva&X-Amz-Signature=fca703a320680e9982743e735192e1b31a70ea9c3b5f419fd923a0a0884dd047&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPRZRKQK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeiRk%2F%2F7zTtNJemfaO5OifT2MQ3sjM6L8uiUKPOPj31AIgVzjic0i9%2BuHw7V0qsJBRriiww%2FwVWcLyCeqPJsvGAU8qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPgiR%2Fd1wFS7ehAVSrcA5fUmmE1D6Rjdg2FJPOUaff1gZEbOeeAHmJluHhRCIfrwkgpzTecD0NLgWjA%2BnQ%2Fli3bTqk%2FQQl4MoDB4Iz5Cc7uKpgXrPnY3fDss6kFNHB1BU%2BXY5p11v8ZLdSMKOHXXVpDHQorK9lNV6%2F%2Bd73AKEdWHbvzR5DX4TdRFaMaHPDpmQ9Zh86Da37EGXdVXyP%2FMYWq2P4jeIqQA1HnrSE4FwbKNK8H85CFaGFVmyTBZWEW0YPnQh0dP5B7Hz%2BZ9f1lpIDGaSFnx9qMtyzKEvpeTegqBMHb8reLgk9rK4tY%2FRlN8bzpLYuQN7P4VqI5sCpdsmvxvD9pV%2Fe2emO3sZhPqTL%2FHdXHL7hiyB%2BStF1SEcXpNto8b7I0GKDwRvYw2n8tu2i4w1hwwbDTvHzFfwTkqz4Qw1K0lUBgYihZIbTuNG1VnJaf0Uk7WmI%2FsoaFOYL34ScyKgRmA2hUNuO%2BGNXOJUBmSep0Sxh%2BSxFw0eXcQk2d9Icxf96c5AqLdVwwyR%2BHe4nsS3BzEMKBsMj7l07scEe%2FVmLaqpZPPL9ykIX6vzcLicOty5%2Bjhspzl59jtdL50hnR5UoCEqCJ1mTQD6KFXzq7oissjtpwFAtvF7eFi6OmIxWhMNL1ge7U2XMlMJmiqMQGOqUB9M8rcO1O%2BORD%2BL3K1MVw%2Bld0VV%2FjNZk5JqPyOPx%2BpDlpjeWp1pFb7GqfMZgtxaK%2BOHPsP8gGYCaujhwMnPnTjYz75DobF8LlDbo9Wb%2FuXH2pIM7ee9but%2FbMR30k7QkFMT%2BEPtsX0P2au4Uv5uoSaawEMNAQ6f0F6Sjc7KAKLUottRHGP2r8OCMTumtgPrxhinKlEUar1PIIzFHRoDCktD6zndva&X-Amz-Signature=87e1936b938575081a3a70e92b8f6381f167c10f74e1168cee5c32d2ccffcc85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPRZRKQK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeiRk%2F%2F7zTtNJemfaO5OifT2MQ3sjM6L8uiUKPOPj31AIgVzjic0i9%2BuHw7V0qsJBRriiww%2FwVWcLyCeqPJsvGAU8qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPgiR%2Fd1wFS7ehAVSrcA5fUmmE1D6Rjdg2FJPOUaff1gZEbOeeAHmJluHhRCIfrwkgpzTecD0NLgWjA%2BnQ%2Fli3bTqk%2FQQl4MoDB4Iz5Cc7uKpgXrPnY3fDss6kFNHB1BU%2BXY5p11v8ZLdSMKOHXXVpDHQorK9lNV6%2F%2Bd73AKEdWHbvzR5DX4TdRFaMaHPDpmQ9Zh86Da37EGXdVXyP%2FMYWq2P4jeIqQA1HnrSE4FwbKNK8H85CFaGFVmyTBZWEW0YPnQh0dP5B7Hz%2BZ9f1lpIDGaSFnx9qMtyzKEvpeTegqBMHb8reLgk9rK4tY%2FRlN8bzpLYuQN7P4VqI5sCpdsmvxvD9pV%2Fe2emO3sZhPqTL%2FHdXHL7hiyB%2BStF1SEcXpNto8b7I0GKDwRvYw2n8tu2i4w1hwwbDTvHzFfwTkqz4Qw1K0lUBgYihZIbTuNG1VnJaf0Uk7WmI%2FsoaFOYL34ScyKgRmA2hUNuO%2BGNXOJUBmSep0Sxh%2BSxFw0eXcQk2d9Icxf96c5AqLdVwwyR%2BHe4nsS3BzEMKBsMj7l07scEe%2FVmLaqpZPPL9ykIX6vzcLicOty5%2Bjhspzl59jtdL50hnR5UoCEqCJ1mTQD6KFXzq7oissjtpwFAtvF7eFi6OmIxWhMNL1ge7U2XMlMJmiqMQGOqUB9M8rcO1O%2BORD%2BL3K1MVw%2Bld0VV%2FjNZk5JqPyOPx%2BpDlpjeWp1pFb7GqfMZgtxaK%2BOHPsP8gGYCaujhwMnPnTjYz75DobF8LlDbo9Wb%2FuXH2pIM7ee9but%2FbMR30k7QkFMT%2BEPtsX0P2au4Uv5uoSaawEMNAQ6f0F6Sjc7KAKLUottRHGP2r8OCMTumtgPrxhinKlEUar1PIIzFHRoDCktD6zndva&X-Amz-Signature=99ba13541d05e764a0ae07ca9edf29e5593f394aa28462e9954b6e54be6b9c7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPRZRKQK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeiRk%2F%2F7zTtNJemfaO5OifT2MQ3sjM6L8uiUKPOPj31AIgVzjic0i9%2BuHw7V0qsJBRriiww%2FwVWcLyCeqPJsvGAU8qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPgiR%2Fd1wFS7ehAVSrcA5fUmmE1D6Rjdg2FJPOUaff1gZEbOeeAHmJluHhRCIfrwkgpzTecD0NLgWjA%2BnQ%2Fli3bTqk%2FQQl4MoDB4Iz5Cc7uKpgXrPnY3fDss6kFNHB1BU%2BXY5p11v8ZLdSMKOHXXVpDHQorK9lNV6%2F%2Bd73AKEdWHbvzR5DX4TdRFaMaHPDpmQ9Zh86Da37EGXdVXyP%2FMYWq2P4jeIqQA1HnrSE4FwbKNK8H85CFaGFVmyTBZWEW0YPnQh0dP5B7Hz%2BZ9f1lpIDGaSFnx9qMtyzKEvpeTegqBMHb8reLgk9rK4tY%2FRlN8bzpLYuQN7P4VqI5sCpdsmvxvD9pV%2Fe2emO3sZhPqTL%2FHdXHL7hiyB%2BStF1SEcXpNto8b7I0GKDwRvYw2n8tu2i4w1hwwbDTvHzFfwTkqz4Qw1K0lUBgYihZIbTuNG1VnJaf0Uk7WmI%2FsoaFOYL34ScyKgRmA2hUNuO%2BGNXOJUBmSep0Sxh%2BSxFw0eXcQk2d9Icxf96c5AqLdVwwyR%2BHe4nsS3BzEMKBsMj7l07scEe%2FVmLaqpZPPL9ykIX6vzcLicOty5%2Bjhspzl59jtdL50hnR5UoCEqCJ1mTQD6KFXzq7oissjtpwFAtvF7eFi6OmIxWhMNL1ge7U2XMlMJmiqMQGOqUB9M8rcO1O%2BORD%2BL3K1MVw%2Bld0VV%2FjNZk5JqPyOPx%2BpDlpjeWp1pFb7GqfMZgtxaK%2BOHPsP8gGYCaujhwMnPnTjYz75DobF8LlDbo9Wb%2FuXH2pIM7ee9but%2FbMR30k7QkFMT%2BEPtsX0P2au4Uv5uoSaawEMNAQ6f0F6Sjc7KAKLUottRHGP2r8OCMTumtgPrxhinKlEUar1PIIzFHRoDCktD6zndva&X-Amz-Signature=78921965d8bc2c4b102c4daa903a0c847dd2567900fb45359ce8f79eb01d7284&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPRZRKQK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeiRk%2F%2F7zTtNJemfaO5OifT2MQ3sjM6L8uiUKPOPj31AIgVzjic0i9%2BuHw7V0qsJBRriiww%2FwVWcLyCeqPJsvGAU8qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPgiR%2Fd1wFS7ehAVSrcA5fUmmE1D6Rjdg2FJPOUaff1gZEbOeeAHmJluHhRCIfrwkgpzTecD0NLgWjA%2BnQ%2Fli3bTqk%2FQQl4MoDB4Iz5Cc7uKpgXrPnY3fDss6kFNHB1BU%2BXY5p11v8ZLdSMKOHXXVpDHQorK9lNV6%2F%2Bd73AKEdWHbvzR5DX4TdRFaMaHPDpmQ9Zh86Da37EGXdVXyP%2FMYWq2P4jeIqQA1HnrSE4FwbKNK8H85CFaGFVmyTBZWEW0YPnQh0dP5B7Hz%2BZ9f1lpIDGaSFnx9qMtyzKEvpeTegqBMHb8reLgk9rK4tY%2FRlN8bzpLYuQN7P4VqI5sCpdsmvxvD9pV%2Fe2emO3sZhPqTL%2FHdXHL7hiyB%2BStF1SEcXpNto8b7I0GKDwRvYw2n8tu2i4w1hwwbDTvHzFfwTkqz4Qw1K0lUBgYihZIbTuNG1VnJaf0Uk7WmI%2FsoaFOYL34ScyKgRmA2hUNuO%2BGNXOJUBmSep0Sxh%2BSxFw0eXcQk2d9Icxf96c5AqLdVwwyR%2BHe4nsS3BzEMKBsMj7l07scEe%2FVmLaqpZPPL9ykIX6vzcLicOty5%2Bjhspzl59jtdL50hnR5UoCEqCJ1mTQD6KFXzq7oissjtpwFAtvF7eFi6OmIxWhMNL1ge7U2XMlMJmiqMQGOqUB9M8rcO1O%2BORD%2BL3K1MVw%2Bld0VV%2FjNZk5JqPyOPx%2BpDlpjeWp1pFb7GqfMZgtxaK%2BOHPsP8gGYCaujhwMnPnTjYz75DobF8LlDbo9Wb%2FuXH2pIM7ee9but%2FbMR30k7QkFMT%2BEPtsX0P2au4Uv5uoSaawEMNAQ6f0F6Sjc7KAKLUottRHGP2r8OCMTumtgPrxhinKlEUar1PIIzFHRoDCktD6zndva&X-Amz-Signature=757c756fc5343dbcf5c3b5e56cae292a6e3f40e28530dca6edac048445300ff9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPRZRKQK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeiRk%2F%2F7zTtNJemfaO5OifT2MQ3sjM6L8uiUKPOPj31AIgVzjic0i9%2BuHw7V0qsJBRriiww%2FwVWcLyCeqPJsvGAU8qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPgiR%2Fd1wFS7ehAVSrcA5fUmmE1D6Rjdg2FJPOUaff1gZEbOeeAHmJluHhRCIfrwkgpzTecD0NLgWjA%2BnQ%2Fli3bTqk%2FQQl4MoDB4Iz5Cc7uKpgXrPnY3fDss6kFNHB1BU%2BXY5p11v8ZLdSMKOHXXVpDHQorK9lNV6%2F%2Bd73AKEdWHbvzR5DX4TdRFaMaHPDpmQ9Zh86Da37EGXdVXyP%2FMYWq2P4jeIqQA1HnrSE4FwbKNK8H85CFaGFVmyTBZWEW0YPnQh0dP5B7Hz%2BZ9f1lpIDGaSFnx9qMtyzKEvpeTegqBMHb8reLgk9rK4tY%2FRlN8bzpLYuQN7P4VqI5sCpdsmvxvD9pV%2Fe2emO3sZhPqTL%2FHdXHL7hiyB%2BStF1SEcXpNto8b7I0GKDwRvYw2n8tu2i4w1hwwbDTvHzFfwTkqz4Qw1K0lUBgYihZIbTuNG1VnJaf0Uk7WmI%2FsoaFOYL34ScyKgRmA2hUNuO%2BGNXOJUBmSep0Sxh%2BSxFw0eXcQk2d9Icxf96c5AqLdVwwyR%2BHe4nsS3BzEMKBsMj7l07scEe%2FVmLaqpZPPL9ykIX6vzcLicOty5%2Bjhspzl59jtdL50hnR5UoCEqCJ1mTQD6KFXzq7oissjtpwFAtvF7eFi6OmIxWhMNL1ge7U2XMlMJmiqMQGOqUB9M8rcO1O%2BORD%2BL3K1MVw%2Bld0VV%2FjNZk5JqPyOPx%2BpDlpjeWp1pFb7GqfMZgtxaK%2BOHPsP8gGYCaujhwMnPnTjYz75DobF8LlDbo9Wb%2FuXH2pIM7ee9but%2FbMR30k7QkFMT%2BEPtsX0P2au4Uv5uoSaawEMNAQ6f0F6Sjc7KAKLUottRHGP2r8OCMTumtgPrxhinKlEUar1PIIzFHRoDCktD6zndva&X-Amz-Signature=2dc793633c8a3c5cf2fb8f2d8fd77acd3840174d2c2cf519f649effaed88e10b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPRZRKQK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeiRk%2F%2F7zTtNJemfaO5OifT2MQ3sjM6L8uiUKPOPj31AIgVzjic0i9%2BuHw7V0qsJBRriiww%2FwVWcLyCeqPJsvGAU8qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPgiR%2Fd1wFS7ehAVSrcA5fUmmE1D6Rjdg2FJPOUaff1gZEbOeeAHmJluHhRCIfrwkgpzTecD0NLgWjA%2BnQ%2Fli3bTqk%2FQQl4MoDB4Iz5Cc7uKpgXrPnY3fDss6kFNHB1BU%2BXY5p11v8ZLdSMKOHXXVpDHQorK9lNV6%2F%2Bd73AKEdWHbvzR5DX4TdRFaMaHPDpmQ9Zh86Da37EGXdVXyP%2FMYWq2P4jeIqQA1HnrSE4FwbKNK8H85CFaGFVmyTBZWEW0YPnQh0dP5B7Hz%2BZ9f1lpIDGaSFnx9qMtyzKEvpeTegqBMHb8reLgk9rK4tY%2FRlN8bzpLYuQN7P4VqI5sCpdsmvxvD9pV%2Fe2emO3sZhPqTL%2FHdXHL7hiyB%2BStF1SEcXpNto8b7I0GKDwRvYw2n8tu2i4w1hwwbDTvHzFfwTkqz4Qw1K0lUBgYihZIbTuNG1VnJaf0Uk7WmI%2FsoaFOYL34ScyKgRmA2hUNuO%2BGNXOJUBmSep0Sxh%2BSxFw0eXcQk2d9Icxf96c5AqLdVwwyR%2BHe4nsS3BzEMKBsMj7l07scEe%2FVmLaqpZPPL9ykIX6vzcLicOty5%2Bjhspzl59jtdL50hnR5UoCEqCJ1mTQD6KFXzq7oissjtpwFAtvF7eFi6OmIxWhMNL1ge7U2XMlMJmiqMQGOqUB9M8rcO1O%2BORD%2BL3K1MVw%2Bld0VV%2FjNZk5JqPyOPx%2BpDlpjeWp1pFb7GqfMZgtxaK%2BOHPsP8gGYCaujhwMnPnTjYz75DobF8LlDbo9Wb%2FuXH2pIM7ee9but%2FbMR30k7QkFMT%2BEPtsX0P2au4Uv5uoSaawEMNAQ6f0F6Sjc7KAKLUottRHGP2r8OCMTumtgPrxhinKlEUar1PIIzFHRoDCktD6zndva&X-Amz-Signature=002b41703d6f758f76de64e5756c18796598c76b5865d35a137ca0e9f4811e80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPRZRKQK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeiRk%2F%2F7zTtNJemfaO5OifT2MQ3sjM6L8uiUKPOPj31AIgVzjic0i9%2BuHw7V0qsJBRriiww%2FwVWcLyCeqPJsvGAU8qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPgiR%2Fd1wFS7ehAVSrcA5fUmmE1D6Rjdg2FJPOUaff1gZEbOeeAHmJluHhRCIfrwkgpzTecD0NLgWjA%2BnQ%2Fli3bTqk%2FQQl4MoDB4Iz5Cc7uKpgXrPnY3fDss6kFNHB1BU%2BXY5p11v8ZLdSMKOHXXVpDHQorK9lNV6%2F%2Bd73AKEdWHbvzR5DX4TdRFaMaHPDpmQ9Zh86Da37EGXdVXyP%2FMYWq2P4jeIqQA1HnrSE4FwbKNK8H85CFaGFVmyTBZWEW0YPnQh0dP5B7Hz%2BZ9f1lpIDGaSFnx9qMtyzKEvpeTegqBMHb8reLgk9rK4tY%2FRlN8bzpLYuQN7P4VqI5sCpdsmvxvD9pV%2Fe2emO3sZhPqTL%2FHdXHL7hiyB%2BStF1SEcXpNto8b7I0GKDwRvYw2n8tu2i4w1hwwbDTvHzFfwTkqz4Qw1K0lUBgYihZIbTuNG1VnJaf0Uk7WmI%2FsoaFOYL34ScyKgRmA2hUNuO%2BGNXOJUBmSep0Sxh%2BSxFw0eXcQk2d9Icxf96c5AqLdVwwyR%2BHe4nsS3BzEMKBsMj7l07scEe%2FVmLaqpZPPL9ykIX6vzcLicOty5%2Bjhspzl59jtdL50hnR5UoCEqCJ1mTQD6KFXzq7oissjtpwFAtvF7eFi6OmIxWhMNL1ge7U2XMlMJmiqMQGOqUB9M8rcO1O%2BORD%2BL3K1MVw%2Bld0VV%2FjNZk5JqPyOPx%2BpDlpjeWp1pFb7GqfMZgtxaK%2BOHPsP8gGYCaujhwMnPnTjYz75DobF8LlDbo9Wb%2FuXH2pIM7ee9but%2FbMR30k7QkFMT%2BEPtsX0P2au4Uv5uoSaawEMNAQ6f0F6Sjc7KAKLUottRHGP2r8OCMTumtgPrxhinKlEUar1PIIzFHRoDCktD6zndva&X-Amz-Signature=f37241508a125900315d95216969e71b2e36b999dcb8744c6c83f08119880268&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPRZRKQK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeiRk%2F%2F7zTtNJemfaO5OifT2MQ3sjM6L8uiUKPOPj31AIgVzjic0i9%2BuHw7V0qsJBRriiww%2FwVWcLyCeqPJsvGAU8qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPgiR%2Fd1wFS7ehAVSrcA5fUmmE1D6Rjdg2FJPOUaff1gZEbOeeAHmJluHhRCIfrwkgpzTecD0NLgWjA%2BnQ%2Fli3bTqk%2FQQl4MoDB4Iz5Cc7uKpgXrPnY3fDss6kFNHB1BU%2BXY5p11v8ZLdSMKOHXXVpDHQorK9lNV6%2F%2Bd73AKEdWHbvzR5DX4TdRFaMaHPDpmQ9Zh86Da37EGXdVXyP%2FMYWq2P4jeIqQA1HnrSE4FwbKNK8H85CFaGFVmyTBZWEW0YPnQh0dP5B7Hz%2BZ9f1lpIDGaSFnx9qMtyzKEvpeTegqBMHb8reLgk9rK4tY%2FRlN8bzpLYuQN7P4VqI5sCpdsmvxvD9pV%2Fe2emO3sZhPqTL%2FHdXHL7hiyB%2BStF1SEcXpNto8b7I0GKDwRvYw2n8tu2i4w1hwwbDTvHzFfwTkqz4Qw1K0lUBgYihZIbTuNG1VnJaf0Uk7WmI%2FsoaFOYL34ScyKgRmA2hUNuO%2BGNXOJUBmSep0Sxh%2BSxFw0eXcQk2d9Icxf96c5AqLdVwwyR%2BHe4nsS3BzEMKBsMj7l07scEe%2FVmLaqpZPPL9ykIX6vzcLicOty5%2Bjhspzl59jtdL50hnR5UoCEqCJ1mTQD6KFXzq7oissjtpwFAtvF7eFi6OmIxWhMNL1ge7U2XMlMJmiqMQGOqUB9M8rcO1O%2BORD%2BL3K1MVw%2Bld0VV%2FjNZk5JqPyOPx%2BpDlpjeWp1pFb7GqfMZgtxaK%2BOHPsP8gGYCaujhwMnPnTjYz75DobF8LlDbo9Wb%2FuXH2pIM7ee9but%2FbMR30k7QkFMT%2BEPtsX0P2au4Uv5uoSaawEMNAQ6f0F6Sjc7KAKLUottRHGP2r8OCMTumtgPrxhinKlEUar1PIIzFHRoDCktD6zndva&X-Amz-Signature=b5faf893f0c8fd325ee35573438a12c5ebbb193018049f8a6a61ec76ec466454&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPRZRKQK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeiRk%2F%2F7zTtNJemfaO5OifT2MQ3sjM6L8uiUKPOPj31AIgVzjic0i9%2BuHw7V0qsJBRriiww%2FwVWcLyCeqPJsvGAU8qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPgiR%2Fd1wFS7ehAVSrcA5fUmmE1D6Rjdg2FJPOUaff1gZEbOeeAHmJluHhRCIfrwkgpzTecD0NLgWjA%2BnQ%2Fli3bTqk%2FQQl4MoDB4Iz5Cc7uKpgXrPnY3fDss6kFNHB1BU%2BXY5p11v8ZLdSMKOHXXVpDHQorK9lNV6%2F%2Bd73AKEdWHbvzR5DX4TdRFaMaHPDpmQ9Zh86Da37EGXdVXyP%2FMYWq2P4jeIqQA1HnrSE4FwbKNK8H85CFaGFVmyTBZWEW0YPnQh0dP5B7Hz%2BZ9f1lpIDGaSFnx9qMtyzKEvpeTegqBMHb8reLgk9rK4tY%2FRlN8bzpLYuQN7P4VqI5sCpdsmvxvD9pV%2Fe2emO3sZhPqTL%2FHdXHL7hiyB%2BStF1SEcXpNto8b7I0GKDwRvYw2n8tu2i4w1hwwbDTvHzFfwTkqz4Qw1K0lUBgYihZIbTuNG1VnJaf0Uk7WmI%2FsoaFOYL34ScyKgRmA2hUNuO%2BGNXOJUBmSep0Sxh%2BSxFw0eXcQk2d9Icxf96c5AqLdVwwyR%2BHe4nsS3BzEMKBsMj7l07scEe%2FVmLaqpZPPL9ykIX6vzcLicOty5%2Bjhspzl59jtdL50hnR5UoCEqCJ1mTQD6KFXzq7oissjtpwFAtvF7eFi6OmIxWhMNL1ge7U2XMlMJmiqMQGOqUB9M8rcO1O%2BORD%2BL3K1MVw%2Bld0VV%2FjNZk5JqPyOPx%2BpDlpjeWp1pFb7GqfMZgtxaK%2BOHPsP8gGYCaujhwMnPnTjYz75DobF8LlDbo9Wb%2FuXH2pIM7ee9but%2FbMR30k7QkFMT%2BEPtsX0P2au4Uv5uoSaawEMNAQ6f0F6Sjc7KAKLUottRHGP2r8OCMTumtgPrxhinKlEUar1PIIzFHRoDCktD6zndva&X-Amz-Signature=b23aff576876ba59dc31586b33681d7bc10181d4e1f628de812b986e1292babf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
