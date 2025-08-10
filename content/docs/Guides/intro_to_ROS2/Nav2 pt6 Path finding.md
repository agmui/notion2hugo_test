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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC6W447M%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxL9lKkpzic9z4cVGX3TxtW9KhJ%2BXVewW0yLfumH%2FihwIhAJ3bvXDHjeubjHy6nc824F8x%2FFhzxzvUTMdmsKES4ninKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkGVrKRH%2Fh4SgtaK8q3ANd9u0btZElbwiKXDJu4RJWa2FD6mX%2BapDmZGWjFn3htUUj6WX7HzYm4KQLN5bszr8i3WwyX70X9J3R64PvpS1U6M3ID2jxTvJmbwmj%2BA0UXQQKEDpPvjE%2FldCfAOqrKhHfRUfiSM%2BdbA3JbnJKGmHFH6O62bde%2Bo51fcOyCy2NZ8qqIT1uhnKUg4N7M7qIcy5jvCp85LT%2B4BrPsVSPzPEAI4UA61pLSVSb8TnihaRWjnuTMSkxLgc7yP5v2H4KsP7XZxn%2F4S0n8yU4hGxfEqFf4PLFT%2Bm%2FZU7VHsIN6vz6A2%2BHUtDfTX6k0S6LnQnnDvO3VQcgKcjKVRRSaCQ8tulAV9Aovv%2Fu8PMVaRSfghg%2FBq6stzfxKXRk%2BmFWcfePflNc2%2FWoBXKpLLvAxDbUN9jjnUihIca7EbcXbkzpc6YLsgw1dyujkbxl7mw%2BnT0UEqTuwctcVFogl6yHOMakg81Xz5bGm9AeHNsgtiyKEdwWXRS7AM2%2BPz6HC1AX94ibr2ug7v9VXEtjK4Oo9C6NggzO3qz0iG%2BqxDTA9ymPjnHsFF1LwezBwEQ1wGkLkMcIlnuVjSkUAsBDhWxVyhOsPLmdT2rAB79xcYPGR0a2k1UdzPr58GouJIJxMJUY1jCv7%2BHEBjqkAeZpOwxzbM41xwpKXQkG86Iua3RRRAT2a8CzOp7fHs2EQJYrYm%2BnD4YvdUAy0wgNydd7XhS%2BWPk90mn7ljcpyh5cArXMFZruVCKzGW6Fj3Z8fliQ%2BA7tt1AmEPNosTfIe2tSgHz4mnZw4xAm8khFKuIJ7GglKdkpoYmRBsm617IYLP0PAspT3CHoCmXVZ%2BKbbrh7vkZ3uVeuNEHg%2FttIeeaq5A%2FQ&X-Amz-Signature=d43a585f115cee1bc6493a248f9a18b3756b8c9bd25e779c06f6e4062e5d2efb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC6W447M%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxL9lKkpzic9z4cVGX3TxtW9KhJ%2BXVewW0yLfumH%2FihwIhAJ3bvXDHjeubjHy6nc824F8x%2FFhzxzvUTMdmsKES4ninKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkGVrKRH%2Fh4SgtaK8q3ANd9u0btZElbwiKXDJu4RJWa2FD6mX%2BapDmZGWjFn3htUUj6WX7HzYm4KQLN5bszr8i3WwyX70X9J3R64PvpS1U6M3ID2jxTvJmbwmj%2BA0UXQQKEDpPvjE%2FldCfAOqrKhHfRUfiSM%2BdbA3JbnJKGmHFH6O62bde%2Bo51fcOyCy2NZ8qqIT1uhnKUg4N7M7qIcy5jvCp85LT%2B4BrPsVSPzPEAI4UA61pLSVSb8TnihaRWjnuTMSkxLgc7yP5v2H4KsP7XZxn%2F4S0n8yU4hGxfEqFf4PLFT%2Bm%2FZU7VHsIN6vz6A2%2BHUtDfTX6k0S6LnQnnDvO3VQcgKcjKVRRSaCQ8tulAV9Aovv%2Fu8PMVaRSfghg%2FBq6stzfxKXRk%2BmFWcfePflNc2%2FWoBXKpLLvAxDbUN9jjnUihIca7EbcXbkzpc6YLsgw1dyujkbxl7mw%2BnT0UEqTuwctcVFogl6yHOMakg81Xz5bGm9AeHNsgtiyKEdwWXRS7AM2%2BPz6HC1AX94ibr2ug7v9VXEtjK4Oo9C6NggzO3qz0iG%2BqxDTA9ymPjnHsFF1LwezBwEQ1wGkLkMcIlnuVjSkUAsBDhWxVyhOsPLmdT2rAB79xcYPGR0a2k1UdzPr58GouJIJxMJUY1jCv7%2BHEBjqkAeZpOwxzbM41xwpKXQkG86Iua3RRRAT2a8CzOp7fHs2EQJYrYm%2BnD4YvdUAy0wgNydd7XhS%2BWPk90mn7ljcpyh5cArXMFZruVCKzGW6Fj3Z8fliQ%2BA7tt1AmEPNosTfIe2tSgHz4mnZw4xAm8khFKuIJ7GglKdkpoYmRBsm617IYLP0PAspT3CHoCmXVZ%2BKbbrh7vkZ3uVeuNEHg%2FttIeeaq5A%2FQ&X-Amz-Signature=44d41ff26c169fc7d6a8bcea7cf1a4cb47dc844a31c545c26fd656799650dac3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC6W447M%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxL9lKkpzic9z4cVGX3TxtW9KhJ%2BXVewW0yLfumH%2FihwIhAJ3bvXDHjeubjHy6nc824F8x%2FFhzxzvUTMdmsKES4ninKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkGVrKRH%2Fh4SgtaK8q3ANd9u0btZElbwiKXDJu4RJWa2FD6mX%2BapDmZGWjFn3htUUj6WX7HzYm4KQLN5bszr8i3WwyX70X9J3R64PvpS1U6M3ID2jxTvJmbwmj%2BA0UXQQKEDpPvjE%2FldCfAOqrKhHfRUfiSM%2BdbA3JbnJKGmHFH6O62bde%2Bo51fcOyCy2NZ8qqIT1uhnKUg4N7M7qIcy5jvCp85LT%2B4BrPsVSPzPEAI4UA61pLSVSb8TnihaRWjnuTMSkxLgc7yP5v2H4KsP7XZxn%2F4S0n8yU4hGxfEqFf4PLFT%2Bm%2FZU7VHsIN6vz6A2%2BHUtDfTX6k0S6LnQnnDvO3VQcgKcjKVRRSaCQ8tulAV9Aovv%2Fu8PMVaRSfghg%2FBq6stzfxKXRk%2BmFWcfePflNc2%2FWoBXKpLLvAxDbUN9jjnUihIca7EbcXbkzpc6YLsgw1dyujkbxl7mw%2BnT0UEqTuwctcVFogl6yHOMakg81Xz5bGm9AeHNsgtiyKEdwWXRS7AM2%2BPz6HC1AX94ibr2ug7v9VXEtjK4Oo9C6NggzO3qz0iG%2BqxDTA9ymPjnHsFF1LwezBwEQ1wGkLkMcIlnuVjSkUAsBDhWxVyhOsPLmdT2rAB79xcYPGR0a2k1UdzPr58GouJIJxMJUY1jCv7%2BHEBjqkAeZpOwxzbM41xwpKXQkG86Iua3RRRAT2a8CzOp7fHs2EQJYrYm%2BnD4YvdUAy0wgNydd7XhS%2BWPk90mn7ljcpyh5cArXMFZruVCKzGW6Fj3Z8fliQ%2BA7tt1AmEPNosTfIe2tSgHz4mnZw4xAm8khFKuIJ7GglKdkpoYmRBsm617IYLP0PAspT3CHoCmXVZ%2BKbbrh7vkZ3uVeuNEHg%2FttIeeaq5A%2FQ&X-Amz-Signature=3f7a3bb01c124cfd7aade7e7610a3e480e6bddcec8393433b86a5925b8799df1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC6W447M%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxL9lKkpzic9z4cVGX3TxtW9KhJ%2BXVewW0yLfumH%2FihwIhAJ3bvXDHjeubjHy6nc824F8x%2FFhzxzvUTMdmsKES4ninKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkGVrKRH%2Fh4SgtaK8q3ANd9u0btZElbwiKXDJu4RJWa2FD6mX%2BapDmZGWjFn3htUUj6WX7HzYm4KQLN5bszr8i3WwyX70X9J3R64PvpS1U6M3ID2jxTvJmbwmj%2BA0UXQQKEDpPvjE%2FldCfAOqrKhHfRUfiSM%2BdbA3JbnJKGmHFH6O62bde%2Bo51fcOyCy2NZ8qqIT1uhnKUg4N7M7qIcy5jvCp85LT%2B4BrPsVSPzPEAI4UA61pLSVSb8TnihaRWjnuTMSkxLgc7yP5v2H4KsP7XZxn%2F4S0n8yU4hGxfEqFf4PLFT%2Bm%2FZU7VHsIN6vz6A2%2BHUtDfTX6k0S6LnQnnDvO3VQcgKcjKVRRSaCQ8tulAV9Aovv%2Fu8PMVaRSfghg%2FBq6stzfxKXRk%2BmFWcfePflNc2%2FWoBXKpLLvAxDbUN9jjnUihIca7EbcXbkzpc6YLsgw1dyujkbxl7mw%2BnT0UEqTuwctcVFogl6yHOMakg81Xz5bGm9AeHNsgtiyKEdwWXRS7AM2%2BPz6HC1AX94ibr2ug7v9VXEtjK4Oo9C6NggzO3qz0iG%2BqxDTA9ymPjnHsFF1LwezBwEQ1wGkLkMcIlnuVjSkUAsBDhWxVyhOsPLmdT2rAB79xcYPGR0a2k1UdzPr58GouJIJxMJUY1jCv7%2BHEBjqkAeZpOwxzbM41xwpKXQkG86Iua3RRRAT2a8CzOp7fHs2EQJYrYm%2BnD4YvdUAy0wgNydd7XhS%2BWPk90mn7ljcpyh5cArXMFZruVCKzGW6Fj3Z8fliQ%2BA7tt1AmEPNosTfIe2tSgHz4mnZw4xAm8khFKuIJ7GglKdkpoYmRBsm617IYLP0PAspT3CHoCmXVZ%2BKbbrh7vkZ3uVeuNEHg%2FttIeeaq5A%2FQ&X-Amz-Signature=dbbca996d0f87cbec5293985c2dfb4b4b97761e876e0365ab86f4d838499fe75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC6W447M%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxL9lKkpzic9z4cVGX3TxtW9KhJ%2BXVewW0yLfumH%2FihwIhAJ3bvXDHjeubjHy6nc824F8x%2FFhzxzvUTMdmsKES4ninKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkGVrKRH%2Fh4SgtaK8q3ANd9u0btZElbwiKXDJu4RJWa2FD6mX%2BapDmZGWjFn3htUUj6WX7HzYm4KQLN5bszr8i3WwyX70X9J3R64PvpS1U6M3ID2jxTvJmbwmj%2BA0UXQQKEDpPvjE%2FldCfAOqrKhHfRUfiSM%2BdbA3JbnJKGmHFH6O62bde%2Bo51fcOyCy2NZ8qqIT1uhnKUg4N7M7qIcy5jvCp85LT%2B4BrPsVSPzPEAI4UA61pLSVSb8TnihaRWjnuTMSkxLgc7yP5v2H4KsP7XZxn%2F4S0n8yU4hGxfEqFf4PLFT%2Bm%2FZU7VHsIN6vz6A2%2BHUtDfTX6k0S6LnQnnDvO3VQcgKcjKVRRSaCQ8tulAV9Aovv%2Fu8PMVaRSfghg%2FBq6stzfxKXRk%2BmFWcfePflNc2%2FWoBXKpLLvAxDbUN9jjnUihIca7EbcXbkzpc6YLsgw1dyujkbxl7mw%2BnT0UEqTuwctcVFogl6yHOMakg81Xz5bGm9AeHNsgtiyKEdwWXRS7AM2%2BPz6HC1AX94ibr2ug7v9VXEtjK4Oo9C6NggzO3qz0iG%2BqxDTA9ymPjnHsFF1LwezBwEQ1wGkLkMcIlnuVjSkUAsBDhWxVyhOsPLmdT2rAB79xcYPGR0a2k1UdzPr58GouJIJxMJUY1jCv7%2BHEBjqkAeZpOwxzbM41xwpKXQkG86Iua3RRRAT2a8CzOp7fHs2EQJYrYm%2BnD4YvdUAy0wgNydd7XhS%2BWPk90mn7ljcpyh5cArXMFZruVCKzGW6Fj3Z8fliQ%2BA7tt1AmEPNosTfIe2tSgHz4mnZw4xAm8khFKuIJ7GglKdkpoYmRBsm617IYLP0PAspT3CHoCmXVZ%2BKbbrh7vkZ3uVeuNEHg%2FttIeeaq5A%2FQ&X-Amz-Signature=439884d9087176ff672873e050631157cda6a03406fa4c02af13ade2d2a3c974&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC6W447M%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxL9lKkpzic9z4cVGX3TxtW9KhJ%2BXVewW0yLfumH%2FihwIhAJ3bvXDHjeubjHy6nc824F8x%2FFhzxzvUTMdmsKES4ninKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkGVrKRH%2Fh4SgtaK8q3ANd9u0btZElbwiKXDJu4RJWa2FD6mX%2BapDmZGWjFn3htUUj6WX7HzYm4KQLN5bszr8i3WwyX70X9J3R64PvpS1U6M3ID2jxTvJmbwmj%2BA0UXQQKEDpPvjE%2FldCfAOqrKhHfRUfiSM%2BdbA3JbnJKGmHFH6O62bde%2Bo51fcOyCy2NZ8qqIT1uhnKUg4N7M7qIcy5jvCp85LT%2B4BrPsVSPzPEAI4UA61pLSVSb8TnihaRWjnuTMSkxLgc7yP5v2H4KsP7XZxn%2F4S0n8yU4hGxfEqFf4PLFT%2Bm%2FZU7VHsIN6vz6A2%2BHUtDfTX6k0S6LnQnnDvO3VQcgKcjKVRRSaCQ8tulAV9Aovv%2Fu8PMVaRSfghg%2FBq6stzfxKXRk%2BmFWcfePflNc2%2FWoBXKpLLvAxDbUN9jjnUihIca7EbcXbkzpc6YLsgw1dyujkbxl7mw%2BnT0UEqTuwctcVFogl6yHOMakg81Xz5bGm9AeHNsgtiyKEdwWXRS7AM2%2BPz6HC1AX94ibr2ug7v9VXEtjK4Oo9C6NggzO3qz0iG%2BqxDTA9ymPjnHsFF1LwezBwEQ1wGkLkMcIlnuVjSkUAsBDhWxVyhOsPLmdT2rAB79xcYPGR0a2k1UdzPr58GouJIJxMJUY1jCv7%2BHEBjqkAeZpOwxzbM41xwpKXQkG86Iua3RRRAT2a8CzOp7fHs2EQJYrYm%2BnD4YvdUAy0wgNydd7XhS%2BWPk90mn7ljcpyh5cArXMFZruVCKzGW6Fj3Z8fliQ%2BA7tt1AmEPNosTfIe2tSgHz4mnZw4xAm8khFKuIJ7GglKdkpoYmRBsm617IYLP0PAspT3CHoCmXVZ%2BKbbrh7vkZ3uVeuNEHg%2FttIeeaq5A%2FQ&X-Amz-Signature=16c7ed2991384e329c0f56875931d0e9f7414db39fea6854aecb23f755cc648f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC6W447M%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxL9lKkpzic9z4cVGX3TxtW9KhJ%2BXVewW0yLfumH%2FihwIhAJ3bvXDHjeubjHy6nc824F8x%2FFhzxzvUTMdmsKES4ninKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkGVrKRH%2Fh4SgtaK8q3ANd9u0btZElbwiKXDJu4RJWa2FD6mX%2BapDmZGWjFn3htUUj6WX7HzYm4KQLN5bszr8i3WwyX70X9J3R64PvpS1U6M3ID2jxTvJmbwmj%2BA0UXQQKEDpPvjE%2FldCfAOqrKhHfRUfiSM%2BdbA3JbnJKGmHFH6O62bde%2Bo51fcOyCy2NZ8qqIT1uhnKUg4N7M7qIcy5jvCp85LT%2B4BrPsVSPzPEAI4UA61pLSVSb8TnihaRWjnuTMSkxLgc7yP5v2H4KsP7XZxn%2F4S0n8yU4hGxfEqFf4PLFT%2Bm%2FZU7VHsIN6vz6A2%2BHUtDfTX6k0S6LnQnnDvO3VQcgKcjKVRRSaCQ8tulAV9Aovv%2Fu8PMVaRSfghg%2FBq6stzfxKXRk%2BmFWcfePflNc2%2FWoBXKpLLvAxDbUN9jjnUihIca7EbcXbkzpc6YLsgw1dyujkbxl7mw%2BnT0UEqTuwctcVFogl6yHOMakg81Xz5bGm9AeHNsgtiyKEdwWXRS7AM2%2BPz6HC1AX94ibr2ug7v9VXEtjK4Oo9C6NggzO3qz0iG%2BqxDTA9ymPjnHsFF1LwezBwEQ1wGkLkMcIlnuVjSkUAsBDhWxVyhOsPLmdT2rAB79xcYPGR0a2k1UdzPr58GouJIJxMJUY1jCv7%2BHEBjqkAeZpOwxzbM41xwpKXQkG86Iua3RRRAT2a8CzOp7fHs2EQJYrYm%2BnD4YvdUAy0wgNydd7XhS%2BWPk90mn7ljcpyh5cArXMFZruVCKzGW6Fj3Z8fliQ%2BA7tt1AmEPNosTfIe2tSgHz4mnZw4xAm8khFKuIJ7GglKdkpoYmRBsm617IYLP0PAspT3CHoCmXVZ%2BKbbrh7vkZ3uVeuNEHg%2FttIeeaq5A%2FQ&X-Amz-Signature=145276f701662266e2221a8d793e94870cb9e3783784e0a991968e114691d972&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC6W447M%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxL9lKkpzic9z4cVGX3TxtW9KhJ%2BXVewW0yLfumH%2FihwIhAJ3bvXDHjeubjHy6nc824F8x%2FFhzxzvUTMdmsKES4ninKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkGVrKRH%2Fh4SgtaK8q3ANd9u0btZElbwiKXDJu4RJWa2FD6mX%2BapDmZGWjFn3htUUj6WX7HzYm4KQLN5bszr8i3WwyX70X9J3R64PvpS1U6M3ID2jxTvJmbwmj%2BA0UXQQKEDpPvjE%2FldCfAOqrKhHfRUfiSM%2BdbA3JbnJKGmHFH6O62bde%2Bo51fcOyCy2NZ8qqIT1uhnKUg4N7M7qIcy5jvCp85LT%2B4BrPsVSPzPEAI4UA61pLSVSb8TnihaRWjnuTMSkxLgc7yP5v2H4KsP7XZxn%2F4S0n8yU4hGxfEqFf4PLFT%2Bm%2FZU7VHsIN6vz6A2%2BHUtDfTX6k0S6LnQnnDvO3VQcgKcjKVRRSaCQ8tulAV9Aovv%2Fu8PMVaRSfghg%2FBq6stzfxKXRk%2BmFWcfePflNc2%2FWoBXKpLLvAxDbUN9jjnUihIca7EbcXbkzpc6YLsgw1dyujkbxl7mw%2BnT0UEqTuwctcVFogl6yHOMakg81Xz5bGm9AeHNsgtiyKEdwWXRS7AM2%2BPz6HC1AX94ibr2ug7v9VXEtjK4Oo9C6NggzO3qz0iG%2BqxDTA9ymPjnHsFF1LwezBwEQ1wGkLkMcIlnuVjSkUAsBDhWxVyhOsPLmdT2rAB79xcYPGR0a2k1UdzPr58GouJIJxMJUY1jCv7%2BHEBjqkAeZpOwxzbM41xwpKXQkG86Iua3RRRAT2a8CzOp7fHs2EQJYrYm%2BnD4YvdUAy0wgNydd7XhS%2BWPk90mn7ljcpyh5cArXMFZruVCKzGW6Fj3Z8fliQ%2BA7tt1AmEPNosTfIe2tSgHz4mnZw4xAm8khFKuIJ7GglKdkpoYmRBsm617IYLP0PAspT3CHoCmXVZ%2BKbbrh7vkZ3uVeuNEHg%2FttIeeaq5A%2FQ&X-Amz-Signature=75788336c27d8af7c10435bdb199b2f63c3e9380709abc3083112ea24c1205de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC6W447M%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxL9lKkpzic9z4cVGX3TxtW9KhJ%2BXVewW0yLfumH%2FihwIhAJ3bvXDHjeubjHy6nc824F8x%2FFhzxzvUTMdmsKES4ninKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkGVrKRH%2Fh4SgtaK8q3ANd9u0btZElbwiKXDJu4RJWa2FD6mX%2BapDmZGWjFn3htUUj6WX7HzYm4KQLN5bszr8i3WwyX70X9J3R64PvpS1U6M3ID2jxTvJmbwmj%2BA0UXQQKEDpPvjE%2FldCfAOqrKhHfRUfiSM%2BdbA3JbnJKGmHFH6O62bde%2Bo51fcOyCy2NZ8qqIT1uhnKUg4N7M7qIcy5jvCp85LT%2B4BrPsVSPzPEAI4UA61pLSVSb8TnihaRWjnuTMSkxLgc7yP5v2H4KsP7XZxn%2F4S0n8yU4hGxfEqFf4PLFT%2Bm%2FZU7VHsIN6vz6A2%2BHUtDfTX6k0S6LnQnnDvO3VQcgKcjKVRRSaCQ8tulAV9Aovv%2Fu8PMVaRSfghg%2FBq6stzfxKXRk%2BmFWcfePflNc2%2FWoBXKpLLvAxDbUN9jjnUihIca7EbcXbkzpc6YLsgw1dyujkbxl7mw%2BnT0UEqTuwctcVFogl6yHOMakg81Xz5bGm9AeHNsgtiyKEdwWXRS7AM2%2BPz6HC1AX94ibr2ug7v9VXEtjK4Oo9C6NggzO3qz0iG%2BqxDTA9ymPjnHsFF1LwezBwEQ1wGkLkMcIlnuVjSkUAsBDhWxVyhOsPLmdT2rAB79xcYPGR0a2k1UdzPr58GouJIJxMJUY1jCv7%2BHEBjqkAeZpOwxzbM41xwpKXQkG86Iua3RRRAT2a8CzOp7fHs2EQJYrYm%2BnD4YvdUAy0wgNydd7XhS%2BWPk90mn7ljcpyh5cArXMFZruVCKzGW6Fj3Z8fliQ%2BA7tt1AmEPNosTfIe2tSgHz4mnZw4xAm8khFKuIJ7GglKdkpoYmRBsm617IYLP0PAspT3CHoCmXVZ%2BKbbrh7vkZ3uVeuNEHg%2FttIeeaq5A%2FQ&X-Amz-Signature=792a81821d225aec886aa39810a8af73f1850301c22315423d2ffaa011ba5e9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC6W447M%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxL9lKkpzic9z4cVGX3TxtW9KhJ%2BXVewW0yLfumH%2FihwIhAJ3bvXDHjeubjHy6nc824F8x%2FFhzxzvUTMdmsKES4ninKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkGVrKRH%2Fh4SgtaK8q3ANd9u0btZElbwiKXDJu4RJWa2FD6mX%2BapDmZGWjFn3htUUj6WX7HzYm4KQLN5bszr8i3WwyX70X9J3R64PvpS1U6M3ID2jxTvJmbwmj%2BA0UXQQKEDpPvjE%2FldCfAOqrKhHfRUfiSM%2BdbA3JbnJKGmHFH6O62bde%2Bo51fcOyCy2NZ8qqIT1uhnKUg4N7M7qIcy5jvCp85LT%2B4BrPsVSPzPEAI4UA61pLSVSb8TnihaRWjnuTMSkxLgc7yP5v2H4KsP7XZxn%2F4S0n8yU4hGxfEqFf4PLFT%2Bm%2FZU7VHsIN6vz6A2%2BHUtDfTX6k0S6LnQnnDvO3VQcgKcjKVRRSaCQ8tulAV9Aovv%2Fu8PMVaRSfghg%2FBq6stzfxKXRk%2BmFWcfePflNc2%2FWoBXKpLLvAxDbUN9jjnUihIca7EbcXbkzpc6YLsgw1dyujkbxl7mw%2BnT0UEqTuwctcVFogl6yHOMakg81Xz5bGm9AeHNsgtiyKEdwWXRS7AM2%2BPz6HC1AX94ibr2ug7v9VXEtjK4Oo9C6NggzO3qz0iG%2BqxDTA9ymPjnHsFF1LwezBwEQ1wGkLkMcIlnuVjSkUAsBDhWxVyhOsPLmdT2rAB79xcYPGR0a2k1UdzPr58GouJIJxMJUY1jCv7%2BHEBjqkAeZpOwxzbM41xwpKXQkG86Iua3RRRAT2a8CzOp7fHs2EQJYrYm%2BnD4YvdUAy0wgNydd7XhS%2BWPk90mn7ljcpyh5cArXMFZruVCKzGW6Fj3Z8fliQ%2BA7tt1AmEPNosTfIe2tSgHz4mnZw4xAm8khFKuIJ7GglKdkpoYmRBsm617IYLP0PAspT3CHoCmXVZ%2BKbbrh7vkZ3uVeuNEHg%2FttIeeaq5A%2FQ&X-Amz-Signature=1b28cac0d71555dc3904ab79ed7fcf7cdd532ed967eb73dd3219ec72468832c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC6W447M%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxL9lKkpzic9z4cVGX3TxtW9KhJ%2BXVewW0yLfumH%2FihwIhAJ3bvXDHjeubjHy6nc824F8x%2FFhzxzvUTMdmsKES4ninKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkGVrKRH%2Fh4SgtaK8q3ANd9u0btZElbwiKXDJu4RJWa2FD6mX%2BapDmZGWjFn3htUUj6WX7HzYm4KQLN5bszr8i3WwyX70X9J3R64PvpS1U6M3ID2jxTvJmbwmj%2BA0UXQQKEDpPvjE%2FldCfAOqrKhHfRUfiSM%2BdbA3JbnJKGmHFH6O62bde%2Bo51fcOyCy2NZ8qqIT1uhnKUg4N7M7qIcy5jvCp85LT%2B4BrPsVSPzPEAI4UA61pLSVSb8TnihaRWjnuTMSkxLgc7yP5v2H4KsP7XZxn%2F4S0n8yU4hGxfEqFf4PLFT%2Bm%2FZU7VHsIN6vz6A2%2BHUtDfTX6k0S6LnQnnDvO3VQcgKcjKVRRSaCQ8tulAV9Aovv%2Fu8PMVaRSfghg%2FBq6stzfxKXRk%2BmFWcfePflNc2%2FWoBXKpLLvAxDbUN9jjnUihIca7EbcXbkzpc6YLsgw1dyujkbxl7mw%2BnT0UEqTuwctcVFogl6yHOMakg81Xz5bGm9AeHNsgtiyKEdwWXRS7AM2%2BPz6HC1AX94ibr2ug7v9VXEtjK4Oo9C6NggzO3qz0iG%2BqxDTA9ymPjnHsFF1LwezBwEQ1wGkLkMcIlnuVjSkUAsBDhWxVyhOsPLmdT2rAB79xcYPGR0a2k1UdzPr58GouJIJxMJUY1jCv7%2BHEBjqkAeZpOwxzbM41xwpKXQkG86Iua3RRRAT2a8CzOp7fHs2EQJYrYm%2BnD4YvdUAy0wgNydd7XhS%2BWPk90mn7ljcpyh5cArXMFZruVCKzGW6Fj3Z8fliQ%2BA7tt1AmEPNosTfIe2tSgHz4mnZw4xAm8khFKuIJ7GglKdkpoYmRBsm617IYLP0PAspT3CHoCmXVZ%2BKbbrh7vkZ3uVeuNEHg%2FttIeeaq5A%2FQ&X-Amz-Signature=186e502009e272115f76b0d5992bcc06dda0f954c3001953767f9a8b0101f2cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC6W447M%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxL9lKkpzic9z4cVGX3TxtW9KhJ%2BXVewW0yLfumH%2FihwIhAJ3bvXDHjeubjHy6nc824F8x%2FFhzxzvUTMdmsKES4ninKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkGVrKRH%2Fh4SgtaK8q3ANd9u0btZElbwiKXDJu4RJWa2FD6mX%2BapDmZGWjFn3htUUj6WX7HzYm4KQLN5bszr8i3WwyX70X9J3R64PvpS1U6M3ID2jxTvJmbwmj%2BA0UXQQKEDpPvjE%2FldCfAOqrKhHfRUfiSM%2BdbA3JbnJKGmHFH6O62bde%2Bo51fcOyCy2NZ8qqIT1uhnKUg4N7M7qIcy5jvCp85LT%2B4BrPsVSPzPEAI4UA61pLSVSb8TnihaRWjnuTMSkxLgc7yP5v2H4KsP7XZxn%2F4S0n8yU4hGxfEqFf4PLFT%2Bm%2FZU7VHsIN6vz6A2%2BHUtDfTX6k0S6LnQnnDvO3VQcgKcjKVRRSaCQ8tulAV9Aovv%2Fu8PMVaRSfghg%2FBq6stzfxKXRk%2BmFWcfePflNc2%2FWoBXKpLLvAxDbUN9jjnUihIca7EbcXbkzpc6YLsgw1dyujkbxl7mw%2BnT0UEqTuwctcVFogl6yHOMakg81Xz5bGm9AeHNsgtiyKEdwWXRS7AM2%2BPz6HC1AX94ibr2ug7v9VXEtjK4Oo9C6NggzO3qz0iG%2BqxDTA9ymPjnHsFF1LwezBwEQ1wGkLkMcIlnuVjSkUAsBDhWxVyhOsPLmdT2rAB79xcYPGR0a2k1UdzPr58GouJIJxMJUY1jCv7%2BHEBjqkAeZpOwxzbM41xwpKXQkG86Iua3RRRAT2a8CzOp7fHs2EQJYrYm%2BnD4YvdUAy0wgNydd7XhS%2BWPk90mn7ljcpyh5cArXMFZruVCKzGW6Fj3Z8fliQ%2BA7tt1AmEPNosTfIe2tSgHz4mnZw4xAm8khFKuIJ7GglKdkpoYmRBsm617IYLP0PAspT3CHoCmXVZ%2BKbbrh7vkZ3uVeuNEHg%2FttIeeaq5A%2FQ&X-Amz-Signature=53057b0ac7914bb20d78d9208b625d4afa98422b748b6f0c6d923a0607a48388&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC6W447M%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxL9lKkpzic9z4cVGX3TxtW9KhJ%2BXVewW0yLfumH%2FihwIhAJ3bvXDHjeubjHy6nc824F8x%2FFhzxzvUTMdmsKES4ninKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkGVrKRH%2Fh4SgtaK8q3ANd9u0btZElbwiKXDJu4RJWa2FD6mX%2BapDmZGWjFn3htUUj6WX7HzYm4KQLN5bszr8i3WwyX70X9J3R64PvpS1U6M3ID2jxTvJmbwmj%2BA0UXQQKEDpPvjE%2FldCfAOqrKhHfRUfiSM%2BdbA3JbnJKGmHFH6O62bde%2Bo51fcOyCy2NZ8qqIT1uhnKUg4N7M7qIcy5jvCp85LT%2B4BrPsVSPzPEAI4UA61pLSVSb8TnihaRWjnuTMSkxLgc7yP5v2H4KsP7XZxn%2F4S0n8yU4hGxfEqFf4PLFT%2Bm%2FZU7VHsIN6vz6A2%2BHUtDfTX6k0S6LnQnnDvO3VQcgKcjKVRRSaCQ8tulAV9Aovv%2Fu8PMVaRSfghg%2FBq6stzfxKXRk%2BmFWcfePflNc2%2FWoBXKpLLvAxDbUN9jjnUihIca7EbcXbkzpc6YLsgw1dyujkbxl7mw%2BnT0UEqTuwctcVFogl6yHOMakg81Xz5bGm9AeHNsgtiyKEdwWXRS7AM2%2BPz6HC1AX94ibr2ug7v9VXEtjK4Oo9C6NggzO3qz0iG%2BqxDTA9ymPjnHsFF1LwezBwEQ1wGkLkMcIlnuVjSkUAsBDhWxVyhOsPLmdT2rAB79xcYPGR0a2k1UdzPr58GouJIJxMJUY1jCv7%2BHEBjqkAeZpOwxzbM41xwpKXQkG86Iua3RRRAT2a8CzOp7fHs2EQJYrYm%2BnD4YvdUAy0wgNydd7XhS%2BWPk90mn7ljcpyh5cArXMFZruVCKzGW6Fj3Z8fliQ%2BA7tt1AmEPNosTfIe2tSgHz4mnZw4xAm8khFKuIJ7GglKdkpoYmRBsm617IYLP0PAspT3CHoCmXVZ%2BKbbrh7vkZ3uVeuNEHg%2FttIeeaq5A%2FQ&X-Amz-Signature=ccc64a931e001e2005f97448b89ee5ed991c42c038bfa9d50ee3fd3563b47fc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
