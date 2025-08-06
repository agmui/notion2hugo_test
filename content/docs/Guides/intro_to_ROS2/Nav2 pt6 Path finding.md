---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-08-02T09:55:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-08-02T09:55:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675FXATW4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIBFmQcgmqjeCehVTzjyyztEadc6OuO9Uk%2BrRM23c24TJAiAGYoINyok8fiinjo8akLCdjSe7tgM7obmlghY6RYYBgyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMjAQA06192W5DZU5gKtwDbZd7CD2jXP%2BuOHFkSnAYMZx0z2oxK%2BUEtbfvW8sBRZvAhSbj0dmCWMqwchHMpYaM1eP%2BL7bujPtvKxKKj3DWAuqOWo8%2Byja3BTyUHH%2FtGDGK6OV9rog1CRt7ecf8T8wLq%2B114FYCfVo1PjlL4EMIE6iL%2B%2FjB8goVX8W%2BoOJQKCCglghAW4k887uZIDJaLcfPMuX%2FYwARtE9VZzPngUHRnmVqAyvAAoXt7IAOVFJiMB2J5MgwaoCYcFSMYOoEsm2lXla3gC3qdkiyHGa1ujcqzRCRKpRH%2FWYCOdw0rWXy4nZPWyWDqU2qxfTSnB26eKln0DpktpUmh3BHQI3Kn91I%2Bff%2BVUsvn%2F0o79tmv%2FC2OSZirfDfSaAi43suCPYH6VphJSgVDCduLjhIrCh%2F%2Fy0A4Prs2HbsFPdzxrTVOGQQn2r1YVMU%2BQRIpnl%2FmHrIpbRzUTmdfCNTWAiDFfoAf%2FFV3WUqiSDBijOvlb3%2FVjqa8yQp9PbOA3cYhnGKYyGX%2BaPbjS%2FGTvgnyuruWB%2ByV8O2q%2FJGdlW%2FyG%2BkOfKazOmhPw5GrjhkwrbAWfxk0m0owo%2BHoVJo7yr9MXJwGu9rs%2BBhU43QntPFQD4sZ2loSoxDwPB0N7G5hUu9En9UiSgw7pfMxAY6pgFJEmeyfpcw8eOQgajoPl4HbUr7ce2vNFkb9wrxtoEGhKHNBIH3Vh9nMre9kcUX49dufJbWvhpD%2FBygix9NdnoShp7BkbkU8MuwiVdBali6S3mQlM9rbILuVCA8UCQSilg1OkJB7wzsTpOEyBY2YDbMGw4LdWZFu7bdjJ6mdOaDW0vI0v%2B8iRH277OMNgHAE4aLngq3dSJWRZez6LPf%2B6tOJemH9B6M&X-Amz-Signature=bcffacadb713180742ca4b2c82ca700892a4c985d953beb5ffb2f491bc809512&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675FXATW4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIBFmQcgmqjeCehVTzjyyztEadc6OuO9Uk%2BrRM23c24TJAiAGYoINyok8fiinjo8akLCdjSe7tgM7obmlghY6RYYBgyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMjAQA06192W5DZU5gKtwDbZd7CD2jXP%2BuOHFkSnAYMZx0z2oxK%2BUEtbfvW8sBRZvAhSbj0dmCWMqwchHMpYaM1eP%2BL7bujPtvKxKKj3DWAuqOWo8%2Byja3BTyUHH%2FtGDGK6OV9rog1CRt7ecf8T8wLq%2B114FYCfVo1PjlL4EMIE6iL%2B%2FjB8goVX8W%2BoOJQKCCglghAW4k887uZIDJaLcfPMuX%2FYwARtE9VZzPngUHRnmVqAyvAAoXt7IAOVFJiMB2J5MgwaoCYcFSMYOoEsm2lXla3gC3qdkiyHGa1ujcqzRCRKpRH%2FWYCOdw0rWXy4nZPWyWDqU2qxfTSnB26eKln0DpktpUmh3BHQI3Kn91I%2Bff%2BVUsvn%2F0o79tmv%2FC2OSZirfDfSaAi43suCPYH6VphJSgVDCduLjhIrCh%2F%2Fy0A4Prs2HbsFPdzxrTVOGQQn2r1YVMU%2BQRIpnl%2FmHrIpbRzUTmdfCNTWAiDFfoAf%2FFV3WUqiSDBijOvlb3%2FVjqa8yQp9PbOA3cYhnGKYyGX%2BaPbjS%2FGTvgnyuruWB%2ByV8O2q%2FJGdlW%2FyG%2BkOfKazOmhPw5GrjhkwrbAWfxk0m0owo%2BHoVJo7yr9MXJwGu9rs%2BBhU43QntPFQD4sZ2loSoxDwPB0N7G5hUu9En9UiSgw7pfMxAY6pgFJEmeyfpcw8eOQgajoPl4HbUr7ce2vNFkb9wrxtoEGhKHNBIH3Vh9nMre9kcUX49dufJbWvhpD%2FBygix9NdnoShp7BkbkU8MuwiVdBali6S3mQlM9rbILuVCA8UCQSilg1OkJB7wzsTpOEyBY2YDbMGw4LdWZFu7bdjJ6mdOaDW0vI0v%2B8iRH277OMNgHAE4aLngq3dSJWRZez6LPf%2B6tOJemH9B6M&X-Amz-Signature=e71f3fb9c05ac6603127e3a3693c24da12952104d0a7f064872b4720c3ed9284&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675FXATW4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIBFmQcgmqjeCehVTzjyyztEadc6OuO9Uk%2BrRM23c24TJAiAGYoINyok8fiinjo8akLCdjSe7tgM7obmlghY6RYYBgyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMjAQA06192W5DZU5gKtwDbZd7CD2jXP%2BuOHFkSnAYMZx0z2oxK%2BUEtbfvW8sBRZvAhSbj0dmCWMqwchHMpYaM1eP%2BL7bujPtvKxKKj3DWAuqOWo8%2Byja3BTyUHH%2FtGDGK6OV9rog1CRt7ecf8T8wLq%2B114FYCfVo1PjlL4EMIE6iL%2B%2FjB8goVX8W%2BoOJQKCCglghAW4k887uZIDJaLcfPMuX%2FYwARtE9VZzPngUHRnmVqAyvAAoXt7IAOVFJiMB2J5MgwaoCYcFSMYOoEsm2lXla3gC3qdkiyHGa1ujcqzRCRKpRH%2FWYCOdw0rWXy4nZPWyWDqU2qxfTSnB26eKln0DpktpUmh3BHQI3Kn91I%2Bff%2BVUsvn%2F0o79tmv%2FC2OSZirfDfSaAi43suCPYH6VphJSgVDCduLjhIrCh%2F%2Fy0A4Prs2HbsFPdzxrTVOGQQn2r1YVMU%2BQRIpnl%2FmHrIpbRzUTmdfCNTWAiDFfoAf%2FFV3WUqiSDBijOvlb3%2FVjqa8yQp9PbOA3cYhnGKYyGX%2BaPbjS%2FGTvgnyuruWB%2ByV8O2q%2FJGdlW%2FyG%2BkOfKazOmhPw5GrjhkwrbAWfxk0m0owo%2BHoVJo7yr9MXJwGu9rs%2BBhU43QntPFQD4sZ2loSoxDwPB0N7G5hUu9En9UiSgw7pfMxAY6pgFJEmeyfpcw8eOQgajoPl4HbUr7ce2vNFkb9wrxtoEGhKHNBIH3Vh9nMre9kcUX49dufJbWvhpD%2FBygix9NdnoShp7BkbkU8MuwiVdBali6S3mQlM9rbILuVCA8UCQSilg1OkJB7wzsTpOEyBY2YDbMGw4LdWZFu7bdjJ6mdOaDW0vI0v%2B8iRH277OMNgHAE4aLngq3dSJWRZez6LPf%2B6tOJemH9B6M&X-Amz-Signature=abd228c0029c4eb55022b5d4ee35b0d57c98c4846b53377d789395ce3244be95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675FXATW4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIBFmQcgmqjeCehVTzjyyztEadc6OuO9Uk%2BrRM23c24TJAiAGYoINyok8fiinjo8akLCdjSe7tgM7obmlghY6RYYBgyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMjAQA06192W5DZU5gKtwDbZd7CD2jXP%2BuOHFkSnAYMZx0z2oxK%2BUEtbfvW8sBRZvAhSbj0dmCWMqwchHMpYaM1eP%2BL7bujPtvKxKKj3DWAuqOWo8%2Byja3BTyUHH%2FtGDGK6OV9rog1CRt7ecf8T8wLq%2B114FYCfVo1PjlL4EMIE6iL%2B%2FjB8goVX8W%2BoOJQKCCglghAW4k887uZIDJaLcfPMuX%2FYwARtE9VZzPngUHRnmVqAyvAAoXt7IAOVFJiMB2J5MgwaoCYcFSMYOoEsm2lXla3gC3qdkiyHGa1ujcqzRCRKpRH%2FWYCOdw0rWXy4nZPWyWDqU2qxfTSnB26eKln0DpktpUmh3BHQI3Kn91I%2Bff%2BVUsvn%2F0o79tmv%2FC2OSZirfDfSaAi43suCPYH6VphJSgVDCduLjhIrCh%2F%2Fy0A4Prs2HbsFPdzxrTVOGQQn2r1YVMU%2BQRIpnl%2FmHrIpbRzUTmdfCNTWAiDFfoAf%2FFV3WUqiSDBijOvlb3%2FVjqa8yQp9PbOA3cYhnGKYyGX%2BaPbjS%2FGTvgnyuruWB%2ByV8O2q%2FJGdlW%2FyG%2BkOfKazOmhPw5GrjhkwrbAWfxk0m0owo%2BHoVJo7yr9MXJwGu9rs%2BBhU43QntPFQD4sZ2loSoxDwPB0N7G5hUu9En9UiSgw7pfMxAY6pgFJEmeyfpcw8eOQgajoPl4HbUr7ce2vNFkb9wrxtoEGhKHNBIH3Vh9nMre9kcUX49dufJbWvhpD%2FBygix9NdnoShp7BkbkU8MuwiVdBali6S3mQlM9rbILuVCA8UCQSilg1OkJB7wzsTpOEyBY2YDbMGw4LdWZFu7bdjJ6mdOaDW0vI0v%2B8iRH277OMNgHAE4aLngq3dSJWRZez6LPf%2B6tOJemH9B6M&X-Amz-Signature=bc156fb0e063a2c6a08116c632966482437343e4a3b52e222afe266ca22b146a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675FXATW4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIBFmQcgmqjeCehVTzjyyztEadc6OuO9Uk%2BrRM23c24TJAiAGYoINyok8fiinjo8akLCdjSe7tgM7obmlghY6RYYBgyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMjAQA06192W5DZU5gKtwDbZd7CD2jXP%2BuOHFkSnAYMZx0z2oxK%2BUEtbfvW8sBRZvAhSbj0dmCWMqwchHMpYaM1eP%2BL7bujPtvKxKKj3DWAuqOWo8%2Byja3BTyUHH%2FtGDGK6OV9rog1CRt7ecf8T8wLq%2B114FYCfVo1PjlL4EMIE6iL%2B%2FjB8goVX8W%2BoOJQKCCglghAW4k887uZIDJaLcfPMuX%2FYwARtE9VZzPngUHRnmVqAyvAAoXt7IAOVFJiMB2J5MgwaoCYcFSMYOoEsm2lXla3gC3qdkiyHGa1ujcqzRCRKpRH%2FWYCOdw0rWXy4nZPWyWDqU2qxfTSnB26eKln0DpktpUmh3BHQI3Kn91I%2Bff%2BVUsvn%2F0o79tmv%2FC2OSZirfDfSaAi43suCPYH6VphJSgVDCduLjhIrCh%2F%2Fy0A4Prs2HbsFPdzxrTVOGQQn2r1YVMU%2BQRIpnl%2FmHrIpbRzUTmdfCNTWAiDFfoAf%2FFV3WUqiSDBijOvlb3%2FVjqa8yQp9PbOA3cYhnGKYyGX%2BaPbjS%2FGTvgnyuruWB%2ByV8O2q%2FJGdlW%2FyG%2BkOfKazOmhPw5GrjhkwrbAWfxk0m0owo%2BHoVJo7yr9MXJwGu9rs%2BBhU43QntPFQD4sZ2loSoxDwPB0N7G5hUu9En9UiSgw7pfMxAY6pgFJEmeyfpcw8eOQgajoPl4HbUr7ce2vNFkb9wrxtoEGhKHNBIH3Vh9nMre9kcUX49dufJbWvhpD%2FBygix9NdnoShp7BkbkU8MuwiVdBali6S3mQlM9rbILuVCA8UCQSilg1OkJB7wzsTpOEyBY2YDbMGw4LdWZFu7bdjJ6mdOaDW0vI0v%2B8iRH277OMNgHAE4aLngq3dSJWRZez6LPf%2B6tOJemH9B6M&X-Amz-Signature=0eb1e0c7303317ff3888b489cdc10ca713bff2fbb76688b394836fa2bad97b3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675FXATW4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIBFmQcgmqjeCehVTzjyyztEadc6OuO9Uk%2BrRM23c24TJAiAGYoINyok8fiinjo8akLCdjSe7tgM7obmlghY6RYYBgyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMjAQA06192W5DZU5gKtwDbZd7CD2jXP%2BuOHFkSnAYMZx0z2oxK%2BUEtbfvW8sBRZvAhSbj0dmCWMqwchHMpYaM1eP%2BL7bujPtvKxKKj3DWAuqOWo8%2Byja3BTyUHH%2FtGDGK6OV9rog1CRt7ecf8T8wLq%2B114FYCfVo1PjlL4EMIE6iL%2B%2FjB8goVX8W%2BoOJQKCCglghAW4k887uZIDJaLcfPMuX%2FYwARtE9VZzPngUHRnmVqAyvAAoXt7IAOVFJiMB2J5MgwaoCYcFSMYOoEsm2lXla3gC3qdkiyHGa1ujcqzRCRKpRH%2FWYCOdw0rWXy4nZPWyWDqU2qxfTSnB26eKln0DpktpUmh3BHQI3Kn91I%2Bff%2BVUsvn%2F0o79tmv%2FC2OSZirfDfSaAi43suCPYH6VphJSgVDCduLjhIrCh%2F%2Fy0A4Prs2HbsFPdzxrTVOGQQn2r1YVMU%2BQRIpnl%2FmHrIpbRzUTmdfCNTWAiDFfoAf%2FFV3WUqiSDBijOvlb3%2FVjqa8yQp9PbOA3cYhnGKYyGX%2BaPbjS%2FGTvgnyuruWB%2ByV8O2q%2FJGdlW%2FyG%2BkOfKazOmhPw5GrjhkwrbAWfxk0m0owo%2BHoVJo7yr9MXJwGu9rs%2BBhU43QntPFQD4sZ2loSoxDwPB0N7G5hUu9En9UiSgw7pfMxAY6pgFJEmeyfpcw8eOQgajoPl4HbUr7ce2vNFkb9wrxtoEGhKHNBIH3Vh9nMre9kcUX49dufJbWvhpD%2FBygix9NdnoShp7BkbkU8MuwiVdBali6S3mQlM9rbILuVCA8UCQSilg1OkJB7wzsTpOEyBY2YDbMGw4LdWZFu7bdjJ6mdOaDW0vI0v%2B8iRH277OMNgHAE4aLngq3dSJWRZez6LPf%2B6tOJemH9B6M&X-Amz-Signature=3b6435fff10fb98671344363006ee960216c3075d240d2d697673322dd90bf6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675FXATW4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIBFmQcgmqjeCehVTzjyyztEadc6OuO9Uk%2BrRM23c24TJAiAGYoINyok8fiinjo8akLCdjSe7tgM7obmlghY6RYYBgyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMjAQA06192W5DZU5gKtwDbZd7CD2jXP%2BuOHFkSnAYMZx0z2oxK%2BUEtbfvW8sBRZvAhSbj0dmCWMqwchHMpYaM1eP%2BL7bujPtvKxKKj3DWAuqOWo8%2Byja3BTyUHH%2FtGDGK6OV9rog1CRt7ecf8T8wLq%2B114FYCfVo1PjlL4EMIE6iL%2B%2FjB8goVX8W%2BoOJQKCCglghAW4k887uZIDJaLcfPMuX%2FYwARtE9VZzPngUHRnmVqAyvAAoXt7IAOVFJiMB2J5MgwaoCYcFSMYOoEsm2lXla3gC3qdkiyHGa1ujcqzRCRKpRH%2FWYCOdw0rWXy4nZPWyWDqU2qxfTSnB26eKln0DpktpUmh3BHQI3Kn91I%2Bff%2BVUsvn%2F0o79tmv%2FC2OSZirfDfSaAi43suCPYH6VphJSgVDCduLjhIrCh%2F%2Fy0A4Prs2HbsFPdzxrTVOGQQn2r1YVMU%2BQRIpnl%2FmHrIpbRzUTmdfCNTWAiDFfoAf%2FFV3WUqiSDBijOvlb3%2FVjqa8yQp9PbOA3cYhnGKYyGX%2BaPbjS%2FGTvgnyuruWB%2ByV8O2q%2FJGdlW%2FyG%2BkOfKazOmhPw5GrjhkwrbAWfxk0m0owo%2BHoVJo7yr9MXJwGu9rs%2BBhU43QntPFQD4sZ2loSoxDwPB0N7G5hUu9En9UiSgw7pfMxAY6pgFJEmeyfpcw8eOQgajoPl4HbUr7ce2vNFkb9wrxtoEGhKHNBIH3Vh9nMre9kcUX49dufJbWvhpD%2FBygix9NdnoShp7BkbkU8MuwiVdBali6S3mQlM9rbILuVCA8UCQSilg1OkJB7wzsTpOEyBY2YDbMGw4LdWZFu7bdjJ6mdOaDW0vI0v%2B8iRH277OMNgHAE4aLngq3dSJWRZez6LPf%2B6tOJemH9B6M&X-Amz-Signature=46fc629051efd803852381bbf2e62586a7550f286099ac86bb1eb501d119b142&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675FXATW4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIBFmQcgmqjeCehVTzjyyztEadc6OuO9Uk%2BrRM23c24TJAiAGYoINyok8fiinjo8akLCdjSe7tgM7obmlghY6RYYBgyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMjAQA06192W5DZU5gKtwDbZd7CD2jXP%2BuOHFkSnAYMZx0z2oxK%2BUEtbfvW8sBRZvAhSbj0dmCWMqwchHMpYaM1eP%2BL7bujPtvKxKKj3DWAuqOWo8%2Byja3BTyUHH%2FtGDGK6OV9rog1CRt7ecf8T8wLq%2B114FYCfVo1PjlL4EMIE6iL%2B%2FjB8goVX8W%2BoOJQKCCglghAW4k887uZIDJaLcfPMuX%2FYwARtE9VZzPngUHRnmVqAyvAAoXt7IAOVFJiMB2J5MgwaoCYcFSMYOoEsm2lXla3gC3qdkiyHGa1ujcqzRCRKpRH%2FWYCOdw0rWXy4nZPWyWDqU2qxfTSnB26eKln0DpktpUmh3BHQI3Kn91I%2Bff%2BVUsvn%2F0o79tmv%2FC2OSZirfDfSaAi43suCPYH6VphJSgVDCduLjhIrCh%2F%2Fy0A4Prs2HbsFPdzxrTVOGQQn2r1YVMU%2BQRIpnl%2FmHrIpbRzUTmdfCNTWAiDFfoAf%2FFV3WUqiSDBijOvlb3%2FVjqa8yQp9PbOA3cYhnGKYyGX%2BaPbjS%2FGTvgnyuruWB%2ByV8O2q%2FJGdlW%2FyG%2BkOfKazOmhPw5GrjhkwrbAWfxk0m0owo%2BHoVJo7yr9MXJwGu9rs%2BBhU43QntPFQD4sZ2loSoxDwPB0N7G5hUu9En9UiSgw7pfMxAY6pgFJEmeyfpcw8eOQgajoPl4HbUr7ce2vNFkb9wrxtoEGhKHNBIH3Vh9nMre9kcUX49dufJbWvhpD%2FBygix9NdnoShp7BkbkU8MuwiVdBali6S3mQlM9rbILuVCA8UCQSilg1OkJB7wzsTpOEyBY2YDbMGw4LdWZFu7bdjJ6mdOaDW0vI0v%2B8iRH277OMNgHAE4aLngq3dSJWRZez6LPf%2B6tOJemH9B6M&X-Amz-Signature=ade0bbe3de46075c35a3e8dcea5ee790509f32836cf8e325b69babb36cf6e577&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675FXATW4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIBFmQcgmqjeCehVTzjyyztEadc6OuO9Uk%2BrRM23c24TJAiAGYoINyok8fiinjo8akLCdjSe7tgM7obmlghY6RYYBgyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMjAQA06192W5DZU5gKtwDbZd7CD2jXP%2BuOHFkSnAYMZx0z2oxK%2BUEtbfvW8sBRZvAhSbj0dmCWMqwchHMpYaM1eP%2BL7bujPtvKxKKj3DWAuqOWo8%2Byja3BTyUHH%2FtGDGK6OV9rog1CRt7ecf8T8wLq%2B114FYCfVo1PjlL4EMIE6iL%2B%2FjB8goVX8W%2BoOJQKCCglghAW4k887uZIDJaLcfPMuX%2FYwARtE9VZzPngUHRnmVqAyvAAoXt7IAOVFJiMB2J5MgwaoCYcFSMYOoEsm2lXla3gC3qdkiyHGa1ujcqzRCRKpRH%2FWYCOdw0rWXy4nZPWyWDqU2qxfTSnB26eKln0DpktpUmh3BHQI3Kn91I%2Bff%2BVUsvn%2F0o79tmv%2FC2OSZirfDfSaAi43suCPYH6VphJSgVDCduLjhIrCh%2F%2Fy0A4Prs2HbsFPdzxrTVOGQQn2r1YVMU%2BQRIpnl%2FmHrIpbRzUTmdfCNTWAiDFfoAf%2FFV3WUqiSDBijOvlb3%2FVjqa8yQp9PbOA3cYhnGKYyGX%2BaPbjS%2FGTvgnyuruWB%2ByV8O2q%2FJGdlW%2FyG%2BkOfKazOmhPw5GrjhkwrbAWfxk0m0owo%2BHoVJo7yr9MXJwGu9rs%2BBhU43QntPFQD4sZ2loSoxDwPB0N7G5hUu9En9UiSgw7pfMxAY6pgFJEmeyfpcw8eOQgajoPl4HbUr7ce2vNFkb9wrxtoEGhKHNBIH3Vh9nMre9kcUX49dufJbWvhpD%2FBygix9NdnoShp7BkbkU8MuwiVdBali6S3mQlM9rbILuVCA8UCQSilg1OkJB7wzsTpOEyBY2YDbMGw4LdWZFu7bdjJ6mdOaDW0vI0v%2B8iRH277OMNgHAE4aLngq3dSJWRZez6LPf%2B6tOJemH9B6M&X-Amz-Signature=5df69c6507cc4aae77e727ae30a868874fff73ba61f3e38661a05681347b92ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675FXATW4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIBFmQcgmqjeCehVTzjyyztEadc6OuO9Uk%2BrRM23c24TJAiAGYoINyok8fiinjo8akLCdjSe7tgM7obmlghY6RYYBgyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMjAQA06192W5DZU5gKtwDbZd7CD2jXP%2BuOHFkSnAYMZx0z2oxK%2BUEtbfvW8sBRZvAhSbj0dmCWMqwchHMpYaM1eP%2BL7bujPtvKxKKj3DWAuqOWo8%2Byja3BTyUHH%2FtGDGK6OV9rog1CRt7ecf8T8wLq%2B114FYCfVo1PjlL4EMIE6iL%2B%2FjB8goVX8W%2BoOJQKCCglghAW4k887uZIDJaLcfPMuX%2FYwARtE9VZzPngUHRnmVqAyvAAoXt7IAOVFJiMB2J5MgwaoCYcFSMYOoEsm2lXla3gC3qdkiyHGa1ujcqzRCRKpRH%2FWYCOdw0rWXy4nZPWyWDqU2qxfTSnB26eKln0DpktpUmh3BHQI3Kn91I%2Bff%2BVUsvn%2F0o79tmv%2FC2OSZirfDfSaAi43suCPYH6VphJSgVDCduLjhIrCh%2F%2Fy0A4Prs2HbsFPdzxrTVOGQQn2r1YVMU%2BQRIpnl%2FmHrIpbRzUTmdfCNTWAiDFfoAf%2FFV3WUqiSDBijOvlb3%2FVjqa8yQp9PbOA3cYhnGKYyGX%2BaPbjS%2FGTvgnyuruWB%2ByV8O2q%2FJGdlW%2FyG%2BkOfKazOmhPw5GrjhkwrbAWfxk0m0owo%2BHoVJo7yr9MXJwGu9rs%2BBhU43QntPFQD4sZ2loSoxDwPB0N7G5hUu9En9UiSgw7pfMxAY6pgFJEmeyfpcw8eOQgajoPl4HbUr7ce2vNFkb9wrxtoEGhKHNBIH3Vh9nMre9kcUX49dufJbWvhpD%2FBygix9NdnoShp7BkbkU8MuwiVdBali6S3mQlM9rbILuVCA8UCQSilg1OkJB7wzsTpOEyBY2YDbMGw4LdWZFu7bdjJ6mdOaDW0vI0v%2B8iRH277OMNgHAE4aLngq3dSJWRZez6LPf%2B6tOJemH9B6M&X-Amz-Signature=842b9c3c1e947cbf751dfdcc5be556a7d6a47e8caa9570a96a3a266e330b45b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675FXATW4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIBFmQcgmqjeCehVTzjyyztEadc6OuO9Uk%2BrRM23c24TJAiAGYoINyok8fiinjo8akLCdjSe7tgM7obmlghY6RYYBgyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMjAQA06192W5DZU5gKtwDbZd7CD2jXP%2BuOHFkSnAYMZx0z2oxK%2BUEtbfvW8sBRZvAhSbj0dmCWMqwchHMpYaM1eP%2BL7bujPtvKxKKj3DWAuqOWo8%2Byja3BTyUHH%2FtGDGK6OV9rog1CRt7ecf8T8wLq%2B114FYCfVo1PjlL4EMIE6iL%2B%2FjB8goVX8W%2BoOJQKCCglghAW4k887uZIDJaLcfPMuX%2FYwARtE9VZzPngUHRnmVqAyvAAoXt7IAOVFJiMB2J5MgwaoCYcFSMYOoEsm2lXla3gC3qdkiyHGa1ujcqzRCRKpRH%2FWYCOdw0rWXy4nZPWyWDqU2qxfTSnB26eKln0DpktpUmh3BHQI3Kn91I%2Bff%2BVUsvn%2F0o79tmv%2FC2OSZirfDfSaAi43suCPYH6VphJSgVDCduLjhIrCh%2F%2Fy0A4Prs2HbsFPdzxrTVOGQQn2r1YVMU%2BQRIpnl%2FmHrIpbRzUTmdfCNTWAiDFfoAf%2FFV3WUqiSDBijOvlb3%2FVjqa8yQp9PbOA3cYhnGKYyGX%2BaPbjS%2FGTvgnyuruWB%2ByV8O2q%2FJGdlW%2FyG%2BkOfKazOmhPw5GrjhkwrbAWfxk0m0owo%2BHoVJo7yr9MXJwGu9rs%2BBhU43QntPFQD4sZ2loSoxDwPB0N7G5hUu9En9UiSgw7pfMxAY6pgFJEmeyfpcw8eOQgajoPl4HbUr7ce2vNFkb9wrxtoEGhKHNBIH3Vh9nMre9kcUX49dufJbWvhpD%2FBygix9NdnoShp7BkbkU8MuwiVdBali6S3mQlM9rbILuVCA8UCQSilg1OkJB7wzsTpOEyBY2YDbMGw4LdWZFu7bdjJ6mdOaDW0vI0v%2B8iRH277OMNgHAE4aLngq3dSJWRZez6LPf%2B6tOJemH9B6M&X-Amz-Signature=0f0e658c3e26cd701ffcaebc85230148d0c976c06dfa423d9b1d2d39269381dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675FXATW4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIBFmQcgmqjeCehVTzjyyztEadc6OuO9Uk%2BrRM23c24TJAiAGYoINyok8fiinjo8akLCdjSe7tgM7obmlghY6RYYBgyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMjAQA06192W5DZU5gKtwDbZd7CD2jXP%2BuOHFkSnAYMZx0z2oxK%2BUEtbfvW8sBRZvAhSbj0dmCWMqwchHMpYaM1eP%2BL7bujPtvKxKKj3DWAuqOWo8%2Byja3BTyUHH%2FtGDGK6OV9rog1CRt7ecf8T8wLq%2B114FYCfVo1PjlL4EMIE6iL%2B%2FjB8goVX8W%2BoOJQKCCglghAW4k887uZIDJaLcfPMuX%2FYwARtE9VZzPngUHRnmVqAyvAAoXt7IAOVFJiMB2J5MgwaoCYcFSMYOoEsm2lXla3gC3qdkiyHGa1ujcqzRCRKpRH%2FWYCOdw0rWXy4nZPWyWDqU2qxfTSnB26eKln0DpktpUmh3BHQI3Kn91I%2Bff%2BVUsvn%2F0o79tmv%2FC2OSZirfDfSaAi43suCPYH6VphJSgVDCduLjhIrCh%2F%2Fy0A4Prs2HbsFPdzxrTVOGQQn2r1YVMU%2BQRIpnl%2FmHrIpbRzUTmdfCNTWAiDFfoAf%2FFV3WUqiSDBijOvlb3%2FVjqa8yQp9PbOA3cYhnGKYyGX%2BaPbjS%2FGTvgnyuruWB%2ByV8O2q%2FJGdlW%2FyG%2BkOfKazOmhPw5GrjhkwrbAWfxk0m0owo%2BHoVJo7yr9MXJwGu9rs%2BBhU43QntPFQD4sZ2loSoxDwPB0N7G5hUu9En9UiSgw7pfMxAY6pgFJEmeyfpcw8eOQgajoPl4HbUr7ce2vNFkb9wrxtoEGhKHNBIH3Vh9nMre9kcUX49dufJbWvhpD%2FBygix9NdnoShp7BkbkU8MuwiVdBali6S3mQlM9rbILuVCA8UCQSilg1OkJB7wzsTpOEyBY2YDbMGw4LdWZFu7bdjJ6mdOaDW0vI0v%2B8iRH277OMNgHAE4aLngq3dSJWRZez6LPf%2B6tOJemH9B6M&X-Amz-Signature=488e3e94fa0e3ae72a8f51b77d0450c230eccb7552264495f42dcf79be7821bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675FXATW4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIBFmQcgmqjeCehVTzjyyztEadc6OuO9Uk%2BrRM23c24TJAiAGYoINyok8fiinjo8akLCdjSe7tgM7obmlghY6RYYBgyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMjAQA06192W5DZU5gKtwDbZd7CD2jXP%2BuOHFkSnAYMZx0z2oxK%2BUEtbfvW8sBRZvAhSbj0dmCWMqwchHMpYaM1eP%2BL7bujPtvKxKKj3DWAuqOWo8%2Byja3BTyUHH%2FtGDGK6OV9rog1CRt7ecf8T8wLq%2B114FYCfVo1PjlL4EMIE6iL%2B%2FjB8goVX8W%2BoOJQKCCglghAW4k887uZIDJaLcfPMuX%2FYwARtE9VZzPngUHRnmVqAyvAAoXt7IAOVFJiMB2J5MgwaoCYcFSMYOoEsm2lXla3gC3qdkiyHGa1ujcqzRCRKpRH%2FWYCOdw0rWXy4nZPWyWDqU2qxfTSnB26eKln0DpktpUmh3BHQI3Kn91I%2Bff%2BVUsvn%2F0o79tmv%2FC2OSZirfDfSaAi43suCPYH6VphJSgVDCduLjhIrCh%2F%2Fy0A4Prs2HbsFPdzxrTVOGQQn2r1YVMU%2BQRIpnl%2FmHrIpbRzUTmdfCNTWAiDFfoAf%2FFV3WUqiSDBijOvlb3%2FVjqa8yQp9PbOA3cYhnGKYyGX%2BaPbjS%2FGTvgnyuruWB%2ByV8O2q%2FJGdlW%2FyG%2BkOfKazOmhPw5GrjhkwrbAWfxk0m0owo%2BHoVJo7yr9MXJwGu9rs%2BBhU43QntPFQD4sZ2loSoxDwPB0N7G5hUu9En9UiSgw7pfMxAY6pgFJEmeyfpcw8eOQgajoPl4HbUr7ce2vNFkb9wrxtoEGhKHNBIH3Vh9nMre9kcUX49dufJbWvhpD%2FBygix9NdnoShp7BkbkU8MuwiVdBali6S3mQlM9rbILuVCA8UCQSilg1OkJB7wzsTpOEyBY2YDbMGw4LdWZFu7bdjJ6mdOaDW0vI0v%2B8iRH277OMNgHAE4aLngq3dSJWRZez6LPf%2B6tOJemH9B6M&X-Amz-Signature=1166e293268d7cb9b2b6adb8888c8f9dc93843de82932582a9af6826999a6530&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
