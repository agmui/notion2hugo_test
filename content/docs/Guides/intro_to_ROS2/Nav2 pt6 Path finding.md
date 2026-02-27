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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3H6UKLJ%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIAbsD3VQZAmqLW0u4UmXBbj1WYHb7NxpFE8QnzCXykb1AiEAn8v%2B0zh%2FLFjA%2B0%2FDOBvQWwUxACQIf1pPH3c0OLkEuX8q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCA3DCEZSv2m7txzpCrcA9vwh1zdfUPinltwlqbhw7M8J2V6DkJkaKYY3vOiNOvrZthfc5mjmAwnfxTeAi0iwB4B8M5xuxzUeRrSFfa3XoM%2B9dyiGx7AijbaLXBVZ7fi%2FeDlBPbXwa6iAwhBA9lYQbQ3MRGDYnWTsGfamcukdDSn%2FnZaBSwzNtv5r2HIZUS4nfS8Ckcs2VqODq6cnqxoQMJI0L85wfM8o6xpUe8M8fxJy0kYlepHWXCPCkBEA8s9yLLo25L7xlPo%2FFSlpuHF741Q3M%2BVL2OHsU8fnehSZq71Hr6R%2FiKFgqj9mUR1JO89BkS%2BiDZFLht9NmJtBkyufd6EivGYg4aqFF435MXsEsnEOjiTgVWGymLVRhVNkhuSeA8JEGwoMB2vAg9ILH7S5wBpPV%2BLtlaNVyJ6TYi%2BF4HhkbypcZru5GD4tZwxTiB%2B5tMpo2eMvqNiLN85UOGto6NesT0UMZx0e8lA7kyc8KxTFe8T%2B5PFW7aG2iah2Wvpc0gHAXX%2FHCxJe4Qo8Jqklj9C0TQtXrOPF7zXC1v8FnpN2zAGAfxHQPg%2BsEaB%2Fsh9iI922KC3owgTsseygnNQ%2B2Lma%2FypHwLRW%2BSXbJ%2BqRbwnCD5SSkuj6FBFB7M1jjkFCdHp4r0fqGI97fobMO%2FZg80GOqUBG60C%2F2gljKHUdj%2FlvHZssZ3TBNKBLOO2wRhhHVOcw%2BYVr%2BGUoL5GaYPU90vun1FNl2bwBo3KCFUAS1rMtBxhomuYbNm2TrrWxpD9BaUsDU5p%2FxmA5cUesfLMfsf0dAw4WnP8Dk1vi8uGT1eK4UcdKUoVl0YcsrBZxzh1dbA9JXwk4EoaohdLS%2BBs1IgvdDgmyMAAHcG2iEplJMlJ0H6dizgh%2BIfd&X-Amz-Signature=b12ff495807d186b89d4a004648ade2bdf3ba9c115db0db331d2a86e6d84edcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3H6UKLJ%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIAbsD3VQZAmqLW0u4UmXBbj1WYHb7NxpFE8QnzCXykb1AiEAn8v%2B0zh%2FLFjA%2B0%2FDOBvQWwUxACQIf1pPH3c0OLkEuX8q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCA3DCEZSv2m7txzpCrcA9vwh1zdfUPinltwlqbhw7M8J2V6DkJkaKYY3vOiNOvrZthfc5mjmAwnfxTeAi0iwB4B8M5xuxzUeRrSFfa3XoM%2B9dyiGx7AijbaLXBVZ7fi%2FeDlBPbXwa6iAwhBA9lYQbQ3MRGDYnWTsGfamcukdDSn%2FnZaBSwzNtv5r2HIZUS4nfS8Ckcs2VqODq6cnqxoQMJI0L85wfM8o6xpUe8M8fxJy0kYlepHWXCPCkBEA8s9yLLo25L7xlPo%2FFSlpuHF741Q3M%2BVL2OHsU8fnehSZq71Hr6R%2FiKFgqj9mUR1JO89BkS%2BiDZFLht9NmJtBkyufd6EivGYg4aqFF435MXsEsnEOjiTgVWGymLVRhVNkhuSeA8JEGwoMB2vAg9ILH7S5wBpPV%2BLtlaNVyJ6TYi%2BF4HhkbypcZru5GD4tZwxTiB%2B5tMpo2eMvqNiLN85UOGto6NesT0UMZx0e8lA7kyc8KxTFe8T%2B5PFW7aG2iah2Wvpc0gHAXX%2FHCxJe4Qo8Jqklj9C0TQtXrOPF7zXC1v8FnpN2zAGAfxHQPg%2BsEaB%2Fsh9iI922KC3owgTsseygnNQ%2B2Lma%2FypHwLRW%2BSXbJ%2BqRbwnCD5SSkuj6FBFB7M1jjkFCdHp4r0fqGI97fobMO%2FZg80GOqUBG60C%2F2gljKHUdj%2FlvHZssZ3TBNKBLOO2wRhhHVOcw%2BYVr%2BGUoL5GaYPU90vun1FNl2bwBo3KCFUAS1rMtBxhomuYbNm2TrrWxpD9BaUsDU5p%2FxmA5cUesfLMfsf0dAw4WnP8Dk1vi8uGT1eK4UcdKUoVl0YcsrBZxzh1dbA9JXwk4EoaohdLS%2BBs1IgvdDgmyMAAHcG2iEplJMlJ0H6dizgh%2BIfd&X-Amz-Signature=e0841fe883e93ffb51e41058c4f6850e9d369d95cc837dfaf22a6e9128edd2bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3H6UKLJ%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIAbsD3VQZAmqLW0u4UmXBbj1WYHb7NxpFE8QnzCXykb1AiEAn8v%2B0zh%2FLFjA%2B0%2FDOBvQWwUxACQIf1pPH3c0OLkEuX8q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCA3DCEZSv2m7txzpCrcA9vwh1zdfUPinltwlqbhw7M8J2V6DkJkaKYY3vOiNOvrZthfc5mjmAwnfxTeAi0iwB4B8M5xuxzUeRrSFfa3XoM%2B9dyiGx7AijbaLXBVZ7fi%2FeDlBPbXwa6iAwhBA9lYQbQ3MRGDYnWTsGfamcukdDSn%2FnZaBSwzNtv5r2HIZUS4nfS8Ckcs2VqODq6cnqxoQMJI0L85wfM8o6xpUe8M8fxJy0kYlepHWXCPCkBEA8s9yLLo25L7xlPo%2FFSlpuHF741Q3M%2BVL2OHsU8fnehSZq71Hr6R%2FiKFgqj9mUR1JO89BkS%2BiDZFLht9NmJtBkyufd6EivGYg4aqFF435MXsEsnEOjiTgVWGymLVRhVNkhuSeA8JEGwoMB2vAg9ILH7S5wBpPV%2BLtlaNVyJ6TYi%2BF4HhkbypcZru5GD4tZwxTiB%2B5tMpo2eMvqNiLN85UOGto6NesT0UMZx0e8lA7kyc8KxTFe8T%2B5PFW7aG2iah2Wvpc0gHAXX%2FHCxJe4Qo8Jqklj9C0TQtXrOPF7zXC1v8FnpN2zAGAfxHQPg%2BsEaB%2Fsh9iI922KC3owgTsseygnNQ%2B2Lma%2FypHwLRW%2BSXbJ%2BqRbwnCD5SSkuj6FBFB7M1jjkFCdHp4r0fqGI97fobMO%2FZg80GOqUBG60C%2F2gljKHUdj%2FlvHZssZ3TBNKBLOO2wRhhHVOcw%2BYVr%2BGUoL5GaYPU90vun1FNl2bwBo3KCFUAS1rMtBxhomuYbNm2TrrWxpD9BaUsDU5p%2FxmA5cUesfLMfsf0dAw4WnP8Dk1vi8uGT1eK4UcdKUoVl0YcsrBZxzh1dbA9JXwk4EoaohdLS%2BBs1IgvdDgmyMAAHcG2iEplJMlJ0H6dizgh%2BIfd&X-Amz-Signature=fe7a8eba3df0ec5edf59aa04fd927e8c474b94ef68423a2cf7531645a9b0cbad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3H6UKLJ%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIAbsD3VQZAmqLW0u4UmXBbj1WYHb7NxpFE8QnzCXykb1AiEAn8v%2B0zh%2FLFjA%2B0%2FDOBvQWwUxACQIf1pPH3c0OLkEuX8q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCA3DCEZSv2m7txzpCrcA9vwh1zdfUPinltwlqbhw7M8J2V6DkJkaKYY3vOiNOvrZthfc5mjmAwnfxTeAi0iwB4B8M5xuxzUeRrSFfa3XoM%2B9dyiGx7AijbaLXBVZ7fi%2FeDlBPbXwa6iAwhBA9lYQbQ3MRGDYnWTsGfamcukdDSn%2FnZaBSwzNtv5r2HIZUS4nfS8Ckcs2VqODq6cnqxoQMJI0L85wfM8o6xpUe8M8fxJy0kYlepHWXCPCkBEA8s9yLLo25L7xlPo%2FFSlpuHF741Q3M%2BVL2OHsU8fnehSZq71Hr6R%2FiKFgqj9mUR1JO89BkS%2BiDZFLht9NmJtBkyufd6EivGYg4aqFF435MXsEsnEOjiTgVWGymLVRhVNkhuSeA8JEGwoMB2vAg9ILH7S5wBpPV%2BLtlaNVyJ6TYi%2BF4HhkbypcZru5GD4tZwxTiB%2B5tMpo2eMvqNiLN85UOGto6NesT0UMZx0e8lA7kyc8KxTFe8T%2B5PFW7aG2iah2Wvpc0gHAXX%2FHCxJe4Qo8Jqklj9C0TQtXrOPF7zXC1v8FnpN2zAGAfxHQPg%2BsEaB%2Fsh9iI922KC3owgTsseygnNQ%2B2Lma%2FypHwLRW%2BSXbJ%2BqRbwnCD5SSkuj6FBFB7M1jjkFCdHp4r0fqGI97fobMO%2FZg80GOqUBG60C%2F2gljKHUdj%2FlvHZssZ3TBNKBLOO2wRhhHVOcw%2BYVr%2BGUoL5GaYPU90vun1FNl2bwBo3KCFUAS1rMtBxhomuYbNm2TrrWxpD9BaUsDU5p%2FxmA5cUesfLMfsf0dAw4WnP8Dk1vi8uGT1eK4UcdKUoVl0YcsrBZxzh1dbA9JXwk4EoaohdLS%2BBs1IgvdDgmyMAAHcG2iEplJMlJ0H6dizgh%2BIfd&X-Amz-Signature=d98a89b03ad405b2c999e1c5f987908e00fe5ada7aef57aa8e4b6cd19cad748a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3H6UKLJ%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIAbsD3VQZAmqLW0u4UmXBbj1WYHb7NxpFE8QnzCXykb1AiEAn8v%2B0zh%2FLFjA%2B0%2FDOBvQWwUxACQIf1pPH3c0OLkEuX8q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCA3DCEZSv2m7txzpCrcA9vwh1zdfUPinltwlqbhw7M8J2V6DkJkaKYY3vOiNOvrZthfc5mjmAwnfxTeAi0iwB4B8M5xuxzUeRrSFfa3XoM%2B9dyiGx7AijbaLXBVZ7fi%2FeDlBPbXwa6iAwhBA9lYQbQ3MRGDYnWTsGfamcukdDSn%2FnZaBSwzNtv5r2HIZUS4nfS8Ckcs2VqODq6cnqxoQMJI0L85wfM8o6xpUe8M8fxJy0kYlepHWXCPCkBEA8s9yLLo25L7xlPo%2FFSlpuHF741Q3M%2BVL2OHsU8fnehSZq71Hr6R%2FiKFgqj9mUR1JO89BkS%2BiDZFLht9NmJtBkyufd6EivGYg4aqFF435MXsEsnEOjiTgVWGymLVRhVNkhuSeA8JEGwoMB2vAg9ILH7S5wBpPV%2BLtlaNVyJ6TYi%2BF4HhkbypcZru5GD4tZwxTiB%2B5tMpo2eMvqNiLN85UOGto6NesT0UMZx0e8lA7kyc8KxTFe8T%2B5PFW7aG2iah2Wvpc0gHAXX%2FHCxJe4Qo8Jqklj9C0TQtXrOPF7zXC1v8FnpN2zAGAfxHQPg%2BsEaB%2Fsh9iI922KC3owgTsseygnNQ%2B2Lma%2FypHwLRW%2BSXbJ%2BqRbwnCD5SSkuj6FBFB7M1jjkFCdHp4r0fqGI97fobMO%2FZg80GOqUBG60C%2F2gljKHUdj%2FlvHZssZ3TBNKBLOO2wRhhHVOcw%2BYVr%2BGUoL5GaYPU90vun1FNl2bwBo3KCFUAS1rMtBxhomuYbNm2TrrWxpD9BaUsDU5p%2FxmA5cUesfLMfsf0dAw4WnP8Dk1vi8uGT1eK4UcdKUoVl0YcsrBZxzh1dbA9JXwk4EoaohdLS%2BBs1IgvdDgmyMAAHcG2iEplJMlJ0H6dizgh%2BIfd&X-Amz-Signature=c10af277d8af3a958f3daf8a7b743c50c36d07c3d6a30305ec2502d0ad43ab68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3H6UKLJ%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIAbsD3VQZAmqLW0u4UmXBbj1WYHb7NxpFE8QnzCXykb1AiEAn8v%2B0zh%2FLFjA%2B0%2FDOBvQWwUxACQIf1pPH3c0OLkEuX8q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCA3DCEZSv2m7txzpCrcA9vwh1zdfUPinltwlqbhw7M8J2V6DkJkaKYY3vOiNOvrZthfc5mjmAwnfxTeAi0iwB4B8M5xuxzUeRrSFfa3XoM%2B9dyiGx7AijbaLXBVZ7fi%2FeDlBPbXwa6iAwhBA9lYQbQ3MRGDYnWTsGfamcukdDSn%2FnZaBSwzNtv5r2HIZUS4nfS8Ckcs2VqODq6cnqxoQMJI0L85wfM8o6xpUe8M8fxJy0kYlepHWXCPCkBEA8s9yLLo25L7xlPo%2FFSlpuHF741Q3M%2BVL2OHsU8fnehSZq71Hr6R%2FiKFgqj9mUR1JO89BkS%2BiDZFLht9NmJtBkyufd6EivGYg4aqFF435MXsEsnEOjiTgVWGymLVRhVNkhuSeA8JEGwoMB2vAg9ILH7S5wBpPV%2BLtlaNVyJ6TYi%2BF4HhkbypcZru5GD4tZwxTiB%2B5tMpo2eMvqNiLN85UOGto6NesT0UMZx0e8lA7kyc8KxTFe8T%2B5PFW7aG2iah2Wvpc0gHAXX%2FHCxJe4Qo8Jqklj9C0TQtXrOPF7zXC1v8FnpN2zAGAfxHQPg%2BsEaB%2Fsh9iI922KC3owgTsseygnNQ%2B2Lma%2FypHwLRW%2BSXbJ%2BqRbwnCD5SSkuj6FBFB7M1jjkFCdHp4r0fqGI97fobMO%2FZg80GOqUBG60C%2F2gljKHUdj%2FlvHZssZ3TBNKBLOO2wRhhHVOcw%2BYVr%2BGUoL5GaYPU90vun1FNl2bwBo3KCFUAS1rMtBxhomuYbNm2TrrWxpD9BaUsDU5p%2FxmA5cUesfLMfsf0dAw4WnP8Dk1vi8uGT1eK4UcdKUoVl0YcsrBZxzh1dbA9JXwk4EoaohdLS%2BBs1IgvdDgmyMAAHcG2iEplJMlJ0H6dizgh%2BIfd&X-Amz-Signature=ff21325a7e034454e90d3a3f4246ff01020e10d14f4abb5b89c8057e10a87e67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3H6UKLJ%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIAbsD3VQZAmqLW0u4UmXBbj1WYHb7NxpFE8QnzCXykb1AiEAn8v%2B0zh%2FLFjA%2B0%2FDOBvQWwUxACQIf1pPH3c0OLkEuX8q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCA3DCEZSv2m7txzpCrcA9vwh1zdfUPinltwlqbhw7M8J2V6DkJkaKYY3vOiNOvrZthfc5mjmAwnfxTeAi0iwB4B8M5xuxzUeRrSFfa3XoM%2B9dyiGx7AijbaLXBVZ7fi%2FeDlBPbXwa6iAwhBA9lYQbQ3MRGDYnWTsGfamcukdDSn%2FnZaBSwzNtv5r2HIZUS4nfS8Ckcs2VqODq6cnqxoQMJI0L85wfM8o6xpUe8M8fxJy0kYlepHWXCPCkBEA8s9yLLo25L7xlPo%2FFSlpuHF741Q3M%2BVL2OHsU8fnehSZq71Hr6R%2FiKFgqj9mUR1JO89BkS%2BiDZFLht9NmJtBkyufd6EivGYg4aqFF435MXsEsnEOjiTgVWGymLVRhVNkhuSeA8JEGwoMB2vAg9ILH7S5wBpPV%2BLtlaNVyJ6TYi%2BF4HhkbypcZru5GD4tZwxTiB%2B5tMpo2eMvqNiLN85UOGto6NesT0UMZx0e8lA7kyc8KxTFe8T%2B5PFW7aG2iah2Wvpc0gHAXX%2FHCxJe4Qo8Jqklj9C0TQtXrOPF7zXC1v8FnpN2zAGAfxHQPg%2BsEaB%2Fsh9iI922KC3owgTsseygnNQ%2B2Lma%2FypHwLRW%2BSXbJ%2BqRbwnCD5SSkuj6FBFB7M1jjkFCdHp4r0fqGI97fobMO%2FZg80GOqUBG60C%2F2gljKHUdj%2FlvHZssZ3TBNKBLOO2wRhhHVOcw%2BYVr%2BGUoL5GaYPU90vun1FNl2bwBo3KCFUAS1rMtBxhomuYbNm2TrrWxpD9BaUsDU5p%2FxmA5cUesfLMfsf0dAw4WnP8Dk1vi8uGT1eK4UcdKUoVl0YcsrBZxzh1dbA9JXwk4EoaohdLS%2BBs1IgvdDgmyMAAHcG2iEplJMlJ0H6dizgh%2BIfd&X-Amz-Signature=ce3ae5f90eed795fd806869b2660417d0b7e604562d3e325250c8f1d9cedbc14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3H6UKLJ%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIAbsD3VQZAmqLW0u4UmXBbj1WYHb7NxpFE8QnzCXykb1AiEAn8v%2B0zh%2FLFjA%2B0%2FDOBvQWwUxACQIf1pPH3c0OLkEuX8q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCA3DCEZSv2m7txzpCrcA9vwh1zdfUPinltwlqbhw7M8J2V6DkJkaKYY3vOiNOvrZthfc5mjmAwnfxTeAi0iwB4B8M5xuxzUeRrSFfa3XoM%2B9dyiGx7AijbaLXBVZ7fi%2FeDlBPbXwa6iAwhBA9lYQbQ3MRGDYnWTsGfamcukdDSn%2FnZaBSwzNtv5r2HIZUS4nfS8Ckcs2VqODq6cnqxoQMJI0L85wfM8o6xpUe8M8fxJy0kYlepHWXCPCkBEA8s9yLLo25L7xlPo%2FFSlpuHF741Q3M%2BVL2OHsU8fnehSZq71Hr6R%2FiKFgqj9mUR1JO89BkS%2BiDZFLht9NmJtBkyufd6EivGYg4aqFF435MXsEsnEOjiTgVWGymLVRhVNkhuSeA8JEGwoMB2vAg9ILH7S5wBpPV%2BLtlaNVyJ6TYi%2BF4HhkbypcZru5GD4tZwxTiB%2B5tMpo2eMvqNiLN85UOGto6NesT0UMZx0e8lA7kyc8KxTFe8T%2B5PFW7aG2iah2Wvpc0gHAXX%2FHCxJe4Qo8Jqklj9C0TQtXrOPF7zXC1v8FnpN2zAGAfxHQPg%2BsEaB%2Fsh9iI922KC3owgTsseygnNQ%2B2Lma%2FypHwLRW%2BSXbJ%2BqRbwnCD5SSkuj6FBFB7M1jjkFCdHp4r0fqGI97fobMO%2FZg80GOqUBG60C%2F2gljKHUdj%2FlvHZssZ3TBNKBLOO2wRhhHVOcw%2BYVr%2BGUoL5GaYPU90vun1FNl2bwBo3KCFUAS1rMtBxhomuYbNm2TrrWxpD9BaUsDU5p%2FxmA5cUesfLMfsf0dAw4WnP8Dk1vi8uGT1eK4UcdKUoVl0YcsrBZxzh1dbA9JXwk4EoaohdLS%2BBs1IgvdDgmyMAAHcG2iEplJMlJ0H6dizgh%2BIfd&X-Amz-Signature=9aa3954ac2db37dde4fdb6f65c991aa2ef5d7aaca9983784cfa677c43f5d8040&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3H6UKLJ%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIAbsD3VQZAmqLW0u4UmXBbj1WYHb7NxpFE8QnzCXykb1AiEAn8v%2B0zh%2FLFjA%2B0%2FDOBvQWwUxACQIf1pPH3c0OLkEuX8q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCA3DCEZSv2m7txzpCrcA9vwh1zdfUPinltwlqbhw7M8J2V6DkJkaKYY3vOiNOvrZthfc5mjmAwnfxTeAi0iwB4B8M5xuxzUeRrSFfa3XoM%2B9dyiGx7AijbaLXBVZ7fi%2FeDlBPbXwa6iAwhBA9lYQbQ3MRGDYnWTsGfamcukdDSn%2FnZaBSwzNtv5r2HIZUS4nfS8Ckcs2VqODq6cnqxoQMJI0L85wfM8o6xpUe8M8fxJy0kYlepHWXCPCkBEA8s9yLLo25L7xlPo%2FFSlpuHF741Q3M%2BVL2OHsU8fnehSZq71Hr6R%2FiKFgqj9mUR1JO89BkS%2BiDZFLht9NmJtBkyufd6EivGYg4aqFF435MXsEsnEOjiTgVWGymLVRhVNkhuSeA8JEGwoMB2vAg9ILH7S5wBpPV%2BLtlaNVyJ6TYi%2BF4HhkbypcZru5GD4tZwxTiB%2B5tMpo2eMvqNiLN85UOGto6NesT0UMZx0e8lA7kyc8KxTFe8T%2B5PFW7aG2iah2Wvpc0gHAXX%2FHCxJe4Qo8Jqklj9C0TQtXrOPF7zXC1v8FnpN2zAGAfxHQPg%2BsEaB%2Fsh9iI922KC3owgTsseygnNQ%2B2Lma%2FypHwLRW%2BSXbJ%2BqRbwnCD5SSkuj6FBFB7M1jjkFCdHp4r0fqGI97fobMO%2FZg80GOqUBG60C%2F2gljKHUdj%2FlvHZssZ3TBNKBLOO2wRhhHVOcw%2BYVr%2BGUoL5GaYPU90vun1FNl2bwBo3KCFUAS1rMtBxhomuYbNm2TrrWxpD9BaUsDU5p%2FxmA5cUesfLMfsf0dAw4WnP8Dk1vi8uGT1eK4UcdKUoVl0YcsrBZxzh1dbA9JXwk4EoaohdLS%2BBs1IgvdDgmyMAAHcG2iEplJMlJ0H6dizgh%2BIfd&X-Amz-Signature=48dfb943f948a0556d46d4b444024d16272efa810849298ecd0d23ad10a002c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3H6UKLJ%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIAbsD3VQZAmqLW0u4UmXBbj1WYHb7NxpFE8QnzCXykb1AiEAn8v%2B0zh%2FLFjA%2B0%2FDOBvQWwUxACQIf1pPH3c0OLkEuX8q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCA3DCEZSv2m7txzpCrcA9vwh1zdfUPinltwlqbhw7M8J2V6DkJkaKYY3vOiNOvrZthfc5mjmAwnfxTeAi0iwB4B8M5xuxzUeRrSFfa3XoM%2B9dyiGx7AijbaLXBVZ7fi%2FeDlBPbXwa6iAwhBA9lYQbQ3MRGDYnWTsGfamcukdDSn%2FnZaBSwzNtv5r2HIZUS4nfS8Ckcs2VqODq6cnqxoQMJI0L85wfM8o6xpUe8M8fxJy0kYlepHWXCPCkBEA8s9yLLo25L7xlPo%2FFSlpuHF741Q3M%2BVL2OHsU8fnehSZq71Hr6R%2FiKFgqj9mUR1JO89BkS%2BiDZFLht9NmJtBkyufd6EivGYg4aqFF435MXsEsnEOjiTgVWGymLVRhVNkhuSeA8JEGwoMB2vAg9ILH7S5wBpPV%2BLtlaNVyJ6TYi%2BF4HhkbypcZru5GD4tZwxTiB%2B5tMpo2eMvqNiLN85UOGto6NesT0UMZx0e8lA7kyc8KxTFe8T%2B5PFW7aG2iah2Wvpc0gHAXX%2FHCxJe4Qo8Jqklj9C0TQtXrOPF7zXC1v8FnpN2zAGAfxHQPg%2BsEaB%2Fsh9iI922KC3owgTsseygnNQ%2B2Lma%2FypHwLRW%2BSXbJ%2BqRbwnCD5SSkuj6FBFB7M1jjkFCdHp4r0fqGI97fobMO%2FZg80GOqUBG60C%2F2gljKHUdj%2FlvHZssZ3TBNKBLOO2wRhhHVOcw%2BYVr%2BGUoL5GaYPU90vun1FNl2bwBo3KCFUAS1rMtBxhomuYbNm2TrrWxpD9BaUsDU5p%2FxmA5cUesfLMfsf0dAw4WnP8Dk1vi8uGT1eK4UcdKUoVl0YcsrBZxzh1dbA9JXwk4EoaohdLS%2BBs1IgvdDgmyMAAHcG2iEplJMlJ0H6dizgh%2BIfd&X-Amz-Signature=4532aa44a535f2ea23844d3d9809ec4437e7968d9724cd32fb9ca43c0206cbfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3H6UKLJ%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIAbsD3VQZAmqLW0u4UmXBbj1WYHb7NxpFE8QnzCXykb1AiEAn8v%2B0zh%2FLFjA%2B0%2FDOBvQWwUxACQIf1pPH3c0OLkEuX8q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCA3DCEZSv2m7txzpCrcA9vwh1zdfUPinltwlqbhw7M8J2V6DkJkaKYY3vOiNOvrZthfc5mjmAwnfxTeAi0iwB4B8M5xuxzUeRrSFfa3XoM%2B9dyiGx7AijbaLXBVZ7fi%2FeDlBPbXwa6iAwhBA9lYQbQ3MRGDYnWTsGfamcukdDSn%2FnZaBSwzNtv5r2HIZUS4nfS8Ckcs2VqODq6cnqxoQMJI0L85wfM8o6xpUe8M8fxJy0kYlepHWXCPCkBEA8s9yLLo25L7xlPo%2FFSlpuHF741Q3M%2BVL2OHsU8fnehSZq71Hr6R%2FiKFgqj9mUR1JO89BkS%2BiDZFLht9NmJtBkyufd6EivGYg4aqFF435MXsEsnEOjiTgVWGymLVRhVNkhuSeA8JEGwoMB2vAg9ILH7S5wBpPV%2BLtlaNVyJ6TYi%2BF4HhkbypcZru5GD4tZwxTiB%2B5tMpo2eMvqNiLN85UOGto6NesT0UMZx0e8lA7kyc8KxTFe8T%2B5PFW7aG2iah2Wvpc0gHAXX%2FHCxJe4Qo8Jqklj9C0TQtXrOPF7zXC1v8FnpN2zAGAfxHQPg%2BsEaB%2Fsh9iI922KC3owgTsseygnNQ%2B2Lma%2FypHwLRW%2BSXbJ%2BqRbwnCD5SSkuj6FBFB7M1jjkFCdHp4r0fqGI97fobMO%2FZg80GOqUBG60C%2F2gljKHUdj%2FlvHZssZ3TBNKBLOO2wRhhHVOcw%2BYVr%2BGUoL5GaYPU90vun1FNl2bwBo3KCFUAS1rMtBxhomuYbNm2TrrWxpD9BaUsDU5p%2FxmA5cUesfLMfsf0dAw4WnP8Dk1vi8uGT1eK4UcdKUoVl0YcsrBZxzh1dbA9JXwk4EoaohdLS%2BBs1IgvdDgmyMAAHcG2iEplJMlJ0H6dizgh%2BIfd&X-Amz-Signature=ebaeb128982718fbabbf1bf75f299f3698f4c88c1b2e2d6832efa7b832a91fa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3H6UKLJ%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIAbsD3VQZAmqLW0u4UmXBbj1WYHb7NxpFE8QnzCXykb1AiEAn8v%2B0zh%2FLFjA%2B0%2FDOBvQWwUxACQIf1pPH3c0OLkEuX8q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCA3DCEZSv2m7txzpCrcA9vwh1zdfUPinltwlqbhw7M8J2V6DkJkaKYY3vOiNOvrZthfc5mjmAwnfxTeAi0iwB4B8M5xuxzUeRrSFfa3XoM%2B9dyiGx7AijbaLXBVZ7fi%2FeDlBPbXwa6iAwhBA9lYQbQ3MRGDYnWTsGfamcukdDSn%2FnZaBSwzNtv5r2HIZUS4nfS8Ckcs2VqODq6cnqxoQMJI0L85wfM8o6xpUe8M8fxJy0kYlepHWXCPCkBEA8s9yLLo25L7xlPo%2FFSlpuHF741Q3M%2BVL2OHsU8fnehSZq71Hr6R%2FiKFgqj9mUR1JO89BkS%2BiDZFLht9NmJtBkyufd6EivGYg4aqFF435MXsEsnEOjiTgVWGymLVRhVNkhuSeA8JEGwoMB2vAg9ILH7S5wBpPV%2BLtlaNVyJ6TYi%2BF4HhkbypcZru5GD4tZwxTiB%2B5tMpo2eMvqNiLN85UOGto6NesT0UMZx0e8lA7kyc8KxTFe8T%2B5PFW7aG2iah2Wvpc0gHAXX%2FHCxJe4Qo8Jqklj9C0TQtXrOPF7zXC1v8FnpN2zAGAfxHQPg%2BsEaB%2Fsh9iI922KC3owgTsseygnNQ%2B2Lma%2FypHwLRW%2BSXbJ%2BqRbwnCD5SSkuj6FBFB7M1jjkFCdHp4r0fqGI97fobMO%2FZg80GOqUBG60C%2F2gljKHUdj%2FlvHZssZ3TBNKBLOO2wRhhHVOcw%2BYVr%2BGUoL5GaYPU90vun1FNl2bwBo3KCFUAS1rMtBxhomuYbNm2TrrWxpD9BaUsDU5p%2FxmA5cUesfLMfsf0dAw4WnP8Dk1vi8uGT1eK4UcdKUoVl0YcsrBZxzh1dbA9JXwk4EoaohdLS%2BBs1IgvdDgmyMAAHcG2iEplJMlJ0H6dizgh%2BIfd&X-Amz-Signature=df5b097e084ff5fbbf652905341d8ffb14389e1ab8f8b6d7ebfc8a79ae450ba3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3H6UKLJ%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIAbsD3VQZAmqLW0u4UmXBbj1WYHb7NxpFE8QnzCXykb1AiEAn8v%2B0zh%2FLFjA%2B0%2FDOBvQWwUxACQIf1pPH3c0OLkEuX8q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCA3DCEZSv2m7txzpCrcA9vwh1zdfUPinltwlqbhw7M8J2V6DkJkaKYY3vOiNOvrZthfc5mjmAwnfxTeAi0iwB4B8M5xuxzUeRrSFfa3XoM%2B9dyiGx7AijbaLXBVZ7fi%2FeDlBPbXwa6iAwhBA9lYQbQ3MRGDYnWTsGfamcukdDSn%2FnZaBSwzNtv5r2HIZUS4nfS8Ckcs2VqODq6cnqxoQMJI0L85wfM8o6xpUe8M8fxJy0kYlepHWXCPCkBEA8s9yLLo25L7xlPo%2FFSlpuHF741Q3M%2BVL2OHsU8fnehSZq71Hr6R%2FiKFgqj9mUR1JO89BkS%2BiDZFLht9NmJtBkyufd6EivGYg4aqFF435MXsEsnEOjiTgVWGymLVRhVNkhuSeA8JEGwoMB2vAg9ILH7S5wBpPV%2BLtlaNVyJ6TYi%2BF4HhkbypcZru5GD4tZwxTiB%2B5tMpo2eMvqNiLN85UOGto6NesT0UMZx0e8lA7kyc8KxTFe8T%2B5PFW7aG2iah2Wvpc0gHAXX%2FHCxJe4Qo8Jqklj9C0TQtXrOPF7zXC1v8FnpN2zAGAfxHQPg%2BsEaB%2Fsh9iI922KC3owgTsseygnNQ%2B2Lma%2FypHwLRW%2BSXbJ%2BqRbwnCD5SSkuj6FBFB7M1jjkFCdHp4r0fqGI97fobMO%2FZg80GOqUBG60C%2F2gljKHUdj%2FlvHZssZ3TBNKBLOO2wRhhHVOcw%2BYVr%2BGUoL5GaYPU90vun1FNl2bwBo3KCFUAS1rMtBxhomuYbNm2TrrWxpD9BaUsDU5p%2FxmA5cUesfLMfsf0dAw4WnP8Dk1vi8uGT1eK4UcdKUoVl0YcsrBZxzh1dbA9JXwk4EoaohdLS%2BBs1IgvdDgmyMAAHcG2iEplJMlJ0H6dizgh%2BIfd&X-Amz-Signature=28214a9235343371bbc4313dcdb5836c57de6eeb3bca1f215f1bc7eb644f5a4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
