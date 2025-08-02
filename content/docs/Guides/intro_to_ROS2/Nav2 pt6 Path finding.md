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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRY32O2E%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIENCiLSggES%2FhqiDJBDDFDin%2BGL%2BmX4JTrIvjsgNopgKAiEAzR4xGoB1JIfxEvn2hpPvs50fgOq2vI%2B5ip8%2FW08Bru4q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDPSXYECIxNoDgGpA6CrcA5qJNxnzlp843s2UjKmnpgPdqDNlYXQNWt2KtwdgoQPUttEHjKGyMira3ShIBddgAqYE2goS4eA5aSedrXREREbyH24gSM8%2BjdJI2FliV4tPWPYvKNFlYPWO8icdOHiejWZZraxDiNJuZa3BGvitk9pkl3cQGL9drkz6VH96agOJSxPEvC%2BpkhB0UnU8NmRvieW%2BCj9wTs4CSNefr7CIgicI2sls%2FsUEZ7I0rLlB2Hsahf5aXst3ETVi3u2J9xjf%2FX39o1OyVzzyl6MbAycrE8Fr%2FZsJg%2Fs%2BSjczL4d%2FNObHuFSEe8tjM1t7LyUmQDhbKwUSLyFxiOAAui3Yn6p86d3R2Oi0lJCbaMxm4HbQAVUX8vyQSzC4ySTqonzvuQerdln54WVCp5MWCdRc1y0VwsNAevbi3rel0DrsXdjBOdWTaiGeswflWHfv3TGDluUjm8lvDyoGk%2FpHYQDat6WvZwikbq5pJfkEUpUzbK5eiB0FIqkOR%2BQm%2FHwQrafo8yoNNHV2EDP2sI5W6KGUbL%2F2Q58I%2BzQfIXvXxOZ%2BQDIj8SVL8LsMNa9Ay8%2Bl8ltpEIPRl5yghYZnRKGPEyfpN54wXHwdxWyeXAxieRB4%2Fs7uSi4pKCSgcQTA3WAHCshUMJzwtsQGOqUBuDVZkeK2UZ5z6%2BW%2FQ5lOVSSyoyk81nAKdbH7teNGANE8BcS1mE2XKgmOOK1wxgnL5X0Gx9oyavyLUI0zMtmgodlJQ2i9Xj8wUH4s0lIt3hV15hLZ%2BVUrcZ%2FHCL8dGhCWGMTe2u%2BG46PX4Wk4XrSlbqdj84c%2FM%2BoOaoBWUU7Q2HLVF33k4odSoogx%2BzW%2BoNYQHmZeSQAvE4FR%2BpVZEFgJJ7W4RQ%2BJ&X-Amz-Signature=f251da93d473a2acca2405480dae71584280258940a98411c6f3b0596d92dae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRY32O2E%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIENCiLSggES%2FhqiDJBDDFDin%2BGL%2BmX4JTrIvjsgNopgKAiEAzR4xGoB1JIfxEvn2hpPvs50fgOq2vI%2B5ip8%2FW08Bru4q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDPSXYECIxNoDgGpA6CrcA5qJNxnzlp843s2UjKmnpgPdqDNlYXQNWt2KtwdgoQPUttEHjKGyMira3ShIBddgAqYE2goS4eA5aSedrXREREbyH24gSM8%2BjdJI2FliV4tPWPYvKNFlYPWO8icdOHiejWZZraxDiNJuZa3BGvitk9pkl3cQGL9drkz6VH96agOJSxPEvC%2BpkhB0UnU8NmRvieW%2BCj9wTs4CSNefr7CIgicI2sls%2FsUEZ7I0rLlB2Hsahf5aXst3ETVi3u2J9xjf%2FX39o1OyVzzyl6MbAycrE8Fr%2FZsJg%2Fs%2BSjczL4d%2FNObHuFSEe8tjM1t7LyUmQDhbKwUSLyFxiOAAui3Yn6p86d3R2Oi0lJCbaMxm4HbQAVUX8vyQSzC4ySTqonzvuQerdln54WVCp5MWCdRc1y0VwsNAevbi3rel0DrsXdjBOdWTaiGeswflWHfv3TGDluUjm8lvDyoGk%2FpHYQDat6WvZwikbq5pJfkEUpUzbK5eiB0FIqkOR%2BQm%2FHwQrafo8yoNNHV2EDP2sI5W6KGUbL%2F2Q58I%2BzQfIXvXxOZ%2BQDIj8SVL8LsMNa9Ay8%2Bl8ltpEIPRl5yghYZnRKGPEyfpN54wXHwdxWyeXAxieRB4%2Fs7uSi4pKCSgcQTA3WAHCshUMJzwtsQGOqUBuDVZkeK2UZ5z6%2BW%2FQ5lOVSSyoyk81nAKdbH7teNGANE8BcS1mE2XKgmOOK1wxgnL5X0Gx9oyavyLUI0zMtmgodlJQ2i9Xj8wUH4s0lIt3hV15hLZ%2BVUrcZ%2FHCL8dGhCWGMTe2u%2BG46PX4Wk4XrSlbqdj84c%2FM%2BoOaoBWUU7Q2HLVF33k4odSoogx%2BzW%2BoNYQHmZeSQAvE4FR%2BpVZEFgJJ7W4RQ%2BJ&X-Amz-Signature=f2e2b7eb39764013786002e1a19dd3cbb7738721e3ff3d9e223fc40f8ee18e24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRY32O2E%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIENCiLSggES%2FhqiDJBDDFDin%2BGL%2BmX4JTrIvjsgNopgKAiEAzR4xGoB1JIfxEvn2hpPvs50fgOq2vI%2B5ip8%2FW08Bru4q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDPSXYECIxNoDgGpA6CrcA5qJNxnzlp843s2UjKmnpgPdqDNlYXQNWt2KtwdgoQPUttEHjKGyMira3ShIBddgAqYE2goS4eA5aSedrXREREbyH24gSM8%2BjdJI2FliV4tPWPYvKNFlYPWO8icdOHiejWZZraxDiNJuZa3BGvitk9pkl3cQGL9drkz6VH96agOJSxPEvC%2BpkhB0UnU8NmRvieW%2BCj9wTs4CSNefr7CIgicI2sls%2FsUEZ7I0rLlB2Hsahf5aXst3ETVi3u2J9xjf%2FX39o1OyVzzyl6MbAycrE8Fr%2FZsJg%2Fs%2BSjczL4d%2FNObHuFSEe8tjM1t7LyUmQDhbKwUSLyFxiOAAui3Yn6p86d3R2Oi0lJCbaMxm4HbQAVUX8vyQSzC4ySTqonzvuQerdln54WVCp5MWCdRc1y0VwsNAevbi3rel0DrsXdjBOdWTaiGeswflWHfv3TGDluUjm8lvDyoGk%2FpHYQDat6WvZwikbq5pJfkEUpUzbK5eiB0FIqkOR%2BQm%2FHwQrafo8yoNNHV2EDP2sI5W6KGUbL%2F2Q58I%2BzQfIXvXxOZ%2BQDIj8SVL8LsMNa9Ay8%2Bl8ltpEIPRl5yghYZnRKGPEyfpN54wXHwdxWyeXAxieRB4%2Fs7uSi4pKCSgcQTA3WAHCshUMJzwtsQGOqUBuDVZkeK2UZ5z6%2BW%2FQ5lOVSSyoyk81nAKdbH7teNGANE8BcS1mE2XKgmOOK1wxgnL5X0Gx9oyavyLUI0zMtmgodlJQ2i9Xj8wUH4s0lIt3hV15hLZ%2BVUrcZ%2FHCL8dGhCWGMTe2u%2BG46PX4Wk4XrSlbqdj84c%2FM%2BoOaoBWUU7Q2HLVF33k4odSoogx%2BzW%2BoNYQHmZeSQAvE4FR%2BpVZEFgJJ7W4RQ%2BJ&X-Amz-Signature=2370b6a8b6e1c230d484cca983b3f48a9c8a02c6846f7fc4e766393a0e8bb330&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRY32O2E%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIENCiLSggES%2FhqiDJBDDFDin%2BGL%2BmX4JTrIvjsgNopgKAiEAzR4xGoB1JIfxEvn2hpPvs50fgOq2vI%2B5ip8%2FW08Bru4q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDPSXYECIxNoDgGpA6CrcA5qJNxnzlp843s2UjKmnpgPdqDNlYXQNWt2KtwdgoQPUttEHjKGyMira3ShIBddgAqYE2goS4eA5aSedrXREREbyH24gSM8%2BjdJI2FliV4tPWPYvKNFlYPWO8icdOHiejWZZraxDiNJuZa3BGvitk9pkl3cQGL9drkz6VH96agOJSxPEvC%2BpkhB0UnU8NmRvieW%2BCj9wTs4CSNefr7CIgicI2sls%2FsUEZ7I0rLlB2Hsahf5aXst3ETVi3u2J9xjf%2FX39o1OyVzzyl6MbAycrE8Fr%2FZsJg%2Fs%2BSjczL4d%2FNObHuFSEe8tjM1t7LyUmQDhbKwUSLyFxiOAAui3Yn6p86d3R2Oi0lJCbaMxm4HbQAVUX8vyQSzC4ySTqonzvuQerdln54WVCp5MWCdRc1y0VwsNAevbi3rel0DrsXdjBOdWTaiGeswflWHfv3TGDluUjm8lvDyoGk%2FpHYQDat6WvZwikbq5pJfkEUpUzbK5eiB0FIqkOR%2BQm%2FHwQrafo8yoNNHV2EDP2sI5W6KGUbL%2F2Q58I%2BzQfIXvXxOZ%2BQDIj8SVL8LsMNa9Ay8%2Bl8ltpEIPRl5yghYZnRKGPEyfpN54wXHwdxWyeXAxieRB4%2Fs7uSi4pKCSgcQTA3WAHCshUMJzwtsQGOqUBuDVZkeK2UZ5z6%2BW%2FQ5lOVSSyoyk81nAKdbH7teNGANE8BcS1mE2XKgmOOK1wxgnL5X0Gx9oyavyLUI0zMtmgodlJQ2i9Xj8wUH4s0lIt3hV15hLZ%2BVUrcZ%2FHCL8dGhCWGMTe2u%2BG46PX4Wk4XrSlbqdj84c%2FM%2BoOaoBWUU7Q2HLVF33k4odSoogx%2BzW%2BoNYQHmZeSQAvE4FR%2BpVZEFgJJ7W4RQ%2BJ&X-Amz-Signature=46372e1015763c7619060e9ab605b7d6e5d1baa16de44063f7238aa9b8ce3569&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRY32O2E%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIENCiLSggES%2FhqiDJBDDFDin%2BGL%2BmX4JTrIvjsgNopgKAiEAzR4xGoB1JIfxEvn2hpPvs50fgOq2vI%2B5ip8%2FW08Bru4q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDPSXYECIxNoDgGpA6CrcA5qJNxnzlp843s2UjKmnpgPdqDNlYXQNWt2KtwdgoQPUttEHjKGyMira3ShIBddgAqYE2goS4eA5aSedrXREREbyH24gSM8%2BjdJI2FliV4tPWPYvKNFlYPWO8icdOHiejWZZraxDiNJuZa3BGvitk9pkl3cQGL9drkz6VH96agOJSxPEvC%2BpkhB0UnU8NmRvieW%2BCj9wTs4CSNefr7CIgicI2sls%2FsUEZ7I0rLlB2Hsahf5aXst3ETVi3u2J9xjf%2FX39o1OyVzzyl6MbAycrE8Fr%2FZsJg%2Fs%2BSjczL4d%2FNObHuFSEe8tjM1t7LyUmQDhbKwUSLyFxiOAAui3Yn6p86d3R2Oi0lJCbaMxm4HbQAVUX8vyQSzC4ySTqonzvuQerdln54WVCp5MWCdRc1y0VwsNAevbi3rel0DrsXdjBOdWTaiGeswflWHfv3TGDluUjm8lvDyoGk%2FpHYQDat6WvZwikbq5pJfkEUpUzbK5eiB0FIqkOR%2BQm%2FHwQrafo8yoNNHV2EDP2sI5W6KGUbL%2F2Q58I%2BzQfIXvXxOZ%2BQDIj8SVL8LsMNa9Ay8%2Bl8ltpEIPRl5yghYZnRKGPEyfpN54wXHwdxWyeXAxieRB4%2Fs7uSi4pKCSgcQTA3WAHCshUMJzwtsQGOqUBuDVZkeK2UZ5z6%2BW%2FQ5lOVSSyoyk81nAKdbH7teNGANE8BcS1mE2XKgmOOK1wxgnL5X0Gx9oyavyLUI0zMtmgodlJQ2i9Xj8wUH4s0lIt3hV15hLZ%2BVUrcZ%2FHCL8dGhCWGMTe2u%2BG46PX4Wk4XrSlbqdj84c%2FM%2BoOaoBWUU7Q2HLVF33k4odSoogx%2BzW%2BoNYQHmZeSQAvE4FR%2BpVZEFgJJ7W4RQ%2BJ&X-Amz-Signature=23d62c8bf436004e1cfe95aacb9c46f3648c34abdfc55cc8a932d5f5b8d0a7ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRY32O2E%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIENCiLSggES%2FhqiDJBDDFDin%2BGL%2BmX4JTrIvjsgNopgKAiEAzR4xGoB1JIfxEvn2hpPvs50fgOq2vI%2B5ip8%2FW08Bru4q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDPSXYECIxNoDgGpA6CrcA5qJNxnzlp843s2UjKmnpgPdqDNlYXQNWt2KtwdgoQPUttEHjKGyMira3ShIBddgAqYE2goS4eA5aSedrXREREbyH24gSM8%2BjdJI2FliV4tPWPYvKNFlYPWO8icdOHiejWZZraxDiNJuZa3BGvitk9pkl3cQGL9drkz6VH96agOJSxPEvC%2BpkhB0UnU8NmRvieW%2BCj9wTs4CSNefr7CIgicI2sls%2FsUEZ7I0rLlB2Hsahf5aXst3ETVi3u2J9xjf%2FX39o1OyVzzyl6MbAycrE8Fr%2FZsJg%2Fs%2BSjczL4d%2FNObHuFSEe8tjM1t7LyUmQDhbKwUSLyFxiOAAui3Yn6p86d3R2Oi0lJCbaMxm4HbQAVUX8vyQSzC4ySTqonzvuQerdln54WVCp5MWCdRc1y0VwsNAevbi3rel0DrsXdjBOdWTaiGeswflWHfv3TGDluUjm8lvDyoGk%2FpHYQDat6WvZwikbq5pJfkEUpUzbK5eiB0FIqkOR%2BQm%2FHwQrafo8yoNNHV2EDP2sI5W6KGUbL%2F2Q58I%2BzQfIXvXxOZ%2BQDIj8SVL8LsMNa9Ay8%2Bl8ltpEIPRl5yghYZnRKGPEyfpN54wXHwdxWyeXAxieRB4%2Fs7uSi4pKCSgcQTA3WAHCshUMJzwtsQGOqUBuDVZkeK2UZ5z6%2BW%2FQ5lOVSSyoyk81nAKdbH7teNGANE8BcS1mE2XKgmOOK1wxgnL5X0Gx9oyavyLUI0zMtmgodlJQ2i9Xj8wUH4s0lIt3hV15hLZ%2BVUrcZ%2FHCL8dGhCWGMTe2u%2BG46PX4Wk4XrSlbqdj84c%2FM%2BoOaoBWUU7Q2HLVF33k4odSoogx%2BzW%2BoNYQHmZeSQAvE4FR%2BpVZEFgJJ7W4RQ%2BJ&X-Amz-Signature=fba77cd78733cf3b05aaba35a177fa4970c32c7cc0859ce069bc384b8398e881&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRY32O2E%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIENCiLSggES%2FhqiDJBDDFDin%2BGL%2BmX4JTrIvjsgNopgKAiEAzR4xGoB1JIfxEvn2hpPvs50fgOq2vI%2B5ip8%2FW08Bru4q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDPSXYECIxNoDgGpA6CrcA5qJNxnzlp843s2UjKmnpgPdqDNlYXQNWt2KtwdgoQPUttEHjKGyMira3ShIBddgAqYE2goS4eA5aSedrXREREbyH24gSM8%2BjdJI2FliV4tPWPYvKNFlYPWO8icdOHiejWZZraxDiNJuZa3BGvitk9pkl3cQGL9drkz6VH96agOJSxPEvC%2BpkhB0UnU8NmRvieW%2BCj9wTs4CSNefr7CIgicI2sls%2FsUEZ7I0rLlB2Hsahf5aXst3ETVi3u2J9xjf%2FX39o1OyVzzyl6MbAycrE8Fr%2FZsJg%2Fs%2BSjczL4d%2FNObHuFSEe8tjM1t7LyUmQDhbKwUSLyFxiOAAui3Yn6p86d3R2Oi0lJCbaMxm4HbQAVUX8vyQSzC4ySTqonzvuQerdln54WVCp5MWCdRc1y0VwsNAevbi3rel0DrsXdjBOdWTaiGeswflWHfv3TGDluUjm8lvDyoGk%2FpHYQDat6WvZwikbq5pJfkEUpUzbK5eiB0FIqkOR%2BQm%2FHwQrafo8yoNNHV2EDP2sI5W6KGUbL%2F2Q58I%2BzQfIXvXxOZ%2BQDIj8SVL8LsMNa9Ay8%2Bl8ltpEIPRl5yghYZnRKGPEyfpN54wXHwdxWyeXAxieRB4%2Fs7uSi4pKCSgcQTA3WAHCshUMJzwtsQGOqUBuDVZkeK2UZ5z6%2BW%2FQ5lOVSSyoyk81nAKdbH7teNGANE8BcS1mE2XKgmOOK1wxgnL5X0Gx9oyavyLUI0zMtmgodlJQ2i9Xj8wUH4s0lIt3hV15hLZ%2BVUrcZ%2FHCL8dGhCWGMTe2u%2BG46PX4Wk4XrSlbqdj84c%2FM%2BoOaoBWUU7Q2HLVF33k4odSoogx%2BzW%2BoNYQHmZeSQAvE4FR%2BpVZEFgJJ7W4RQ%2BJ&X-Amz-Signature=871a1fe056d34fe6df85bdd426ce2df97ce6aa40deec2e02307562e64d3d8116&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRY32O2E%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIENCiLSggES%2FhqiDJBDDFDin%2BGL%2BmX4JTrIvjsgNopgKAiEAzR4xGoB1JIfxEvn2hpPvs50fgOq2vI%2B5ip8%2FW08Bru4q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDPSXYECIxNoDgGpA6CrcA5qJNxnzlp843s2UjKmnpgPdqDNlYXQNWt2KtwdgoQPUttEHjKGyMira3ShIBddgAqYE2goS4eA5aSedrXREREbyH24gSM8%2BjdJI2FliV4tPWPYvKNFlYPWO8icdOHiejWZZraxDiNJuZa3BGvitk9pkl3cQGL9drkz6VH96agOJSxPEvC%2BpkhB0UnU8NmRvieW%2BCj9wTs4CSNefr7CIgicI2sls%2FsUEZ7I0rLlB2Hsahf5aXst3ETVi3u2J9xjf%2FX39o1OyVzzyl6MbAycrE8Fr%2FZsJg%2Fs%2BSjczL4d%2FNObHuFSEe8tjM1t7LyUmQDhbKwUSLyFxiOAAui3Yn6p86d3R2Oi0lJCbaMxm4HbQAVUX8vyQSzC4ySTqonzvuQerdln54WVCp5MWCdRc1y0VwsNAevbi3rel0DrsXdjBOdWTaiGeswflWHfv3TGDluUjm8lvDyoGk%2FpHYQDat6WvZwikbq5pJfkEUpUzbK5eiB0FIqkOR%2BQm%2FHwQrafo8yoNNHV2EDP2sI5W6KGUbL%2F2Q58I%2BzQfIXvXxOZ%2BQDIj8SVL8LsMNa9Ay8%2Bl8ltpEIPRl5yghYZnRKGPEyfpN54wXHwdxWyeXAxieRB4%2Fs7uSi4pKCSgcQTA3WAHCshUMJzwtsQGOqUBuDVZkeK2UZ5z6%2BW%2FQ5lOVSSyoyk81nAKdbH7teNGANE8BcS1mE2XKgmOOK1wxgnL5X0Gx9oyavyLUI0zMtmgodlJQ2i9Xj8wUH4s0lIt3hV15hLZ%2BVUrcZ%2FHCL8dGhCWGMTe2u%2BG46PX4Wk4XrSlbqdj84c%2FM%2BoOaoBWUU7Q2HLVF33k4odSoogx%2BzW%2BoNYQHmZeSQAvE4FR%2BpVZEFgJJ7W4RQ%2BJ&X-Amz-Signature=29f1c55eeebc8666729e11c1bd4577d26a6f3beeb44372a051e6c1f80dd34663&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRY32O2E%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIENCiLSggES%2FhqiDJBDDFDin%2BGL%2BmX4JTrIvjsgNopgKAiEAzR4xGoB1JIfxEvn2hpPvs50fgOq2vI%2B5ip8%2FW08Bru4q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDPSXYECIxNoDgGpA6CrcA5qJNxnzlp843s2UjKmnpgPdqDNlYXQNWt2KtwdgoQPUttEHjKGyMira3ShIBddgAqYE2goS4eA5aSedrXREREbyH24gSM8%2BjdJI2FliV4tPWPYvKNFlYPWO8icdOHiejWZZraxDiNJuZa3BGvitk9pkl3cQGL9drkz6VH96agOJSxPEvC%2BpkhB0UnU8NmRvieW%2BCj9wTs4CSNefr7CIgicI2sls%2FsUEZ7I0rLlB2Hsahf5aXst3ETVi3u2J9xjf%2FX39o1OyVzzyl6MbAycrE8Fr%2FZsJg%2Fs%2BSjczL4d%2FNObHuFSEe8tjM1t7LyUmQDhbKwUSLyFxiOAAui3Yn6p86d3R2Oi0lJCbaMxm4HbQAVUX8vyQSzC4ySTqonzvuQerdln54WVCp5MWCdRc1y0VwsNAevbi3rel0DrsXdjBOdWTaiGeswflWHfv3TGDluUjm8lvDyoGk%2FpHYQDat6WvZwikbq5pJfkEUpUzbK5eiB0FIqkOR%2BQm%2FHwQrafo8yoNNHV2EDP2sI5W6KGUbL%2F2Q58I%2BzQfIXvXxOZ%2BQDIj8SVL8LsMNa9Ay8%2Bl8ltpEIPRl5yghYZnRKGPEyfpN54wXHwdxWyeXAxieRB4%2Fs7uSi4pKCSgcQTA3WAHCshUMJzwtsQGOqUBuDVZkeK2UZ5z6%2BW%2FQ5lOVSSyoyk81nAKdbH7teNGANE8BcS1mE2XKgmOOK1wxgnL5X0Gx9oyavyLUI0zMtmgodlJQ2i9Xj8wUH4s0lIt3hV15hLZ%2BVUrcZ%2FHCL8dGhCWGMTe2u%2BG46PX4Wk4XrSlbqdj84c%2FM%2BoOaoBWUU7Q2HLVF33k4odSoogx%2BzW%2BoNYQHmZeSQAvE4FR%2BpVZEFgJJ7W4RQ%2BJ&X-Amz-Signature=5058d0c82966b3ca6701b64b5a0828dc3ee8648b8c54b9d3c583c4f73be8b2c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRY32O2E%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIENCiLSggES%2FhqiDJBDDFDin%2BGL%2BmX4JTrIvjsgNopgKAiEAzR4xGoB1JIfxEvn2hpPvs50fgOq2vI%2B5ip8%2FW08Bru4q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDPSXYECIxNoDgGpA6CrcA5qJNxnzlp843s2UjKmnpgPdqDNlYXQNWt2KtwdgoQPUttEHjKGyMira3ShIBddgAqYE2goS4eA5aSedrXREREbyH24gSM8%2BjdJI2FliV4tPWPYvKNFlYPWO8icdOHiejWZZraxDiNJuZa3BGvitk9pkl3cQGL9drkz6VH96agOJSxPEvC%2BpkhB0UnU8NmRvieW%2BCj9wTs4CSNefr7CIgicI2sls%2FsUEZ7I0rLlB2Hsahf5aXst3ETVi3u2J9xjf%2FX39o1OyVzzyl6MbAycrE8Fr%2FZsJg%2Fs%2BSjczL4d%2FNObHuFSEe8tjM1t7LyUmQDhbKwUSLyFxiOAAui3Yn6p86d3R2Oi0lJCbaMxm4HbQAVUX8vyQSzC4ySTqonzvuQerdln54WVCp5MWCdRc1y0VwsNAevbi3rel0DrsXdjBOdWTaiGeswflWHfv3TGDluUjm8lvDyoGk%2FpHYQDat6WvZwikbq5pJfkEUpUzbK5eiB0FIqkOR%2BQm%2FHwQrafo8yoNNHV2EDP2sI5W6KGUbL%2F2Q58I%2BzQfIXvXxOZ%2BQDIj8SVL8LsMNa9Ay8%2Bl8ltpEIPRl5yghYZnRKGPEyfpN54wXHwdxWyeXAxieRB4%2Fs7uSi4pKCSgcQTA3WAHCshUMJzwtsQGOqUBuDVZkeK2UZ5z6%2BW%2FQ5lOVSSyoyk81nAKdbH7teNGANE8BcS1mE2XKgmOOK1wxgnL5X0Gx9oyavyLUI0zMtmgodlJQ2i9Xj8wUH4s0lIt3hV15hLZ%2BVUrcZ%2FHCL8dGhCWGMTe2u%2BG46PX4Wk4XrSlbqdj84c%2FM%2BoOaoBWUU7Q2HLVF33k4odSoogx%2BzW%2BoNYQHmZeSQAvE4FR%2BpVZEFgJJ7W4RQ%2BJ&X-Amz-Signature=15aaa63c5314a3a625b63144c4217cb85b6509b43df9f97f34b72128952743a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRY32O2E%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIENCiLSggES%2FhqiDJBDDFDin%2BGL%2BmX4JTrIvjsgNopgKAiEAzR4xGoB1JIfxEvn2hpPvs50fgOq2vI%2B5ip8%2FW08Bru4q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDPSXYECIxNoDgGpA6CrcA5qJNxnzlp843s2UjKmnpgPdqDNlYXQNWt2KtwdgoQPUttEHjKGyMira3ShIBddgAqYE2goS4eA5aSedrXREREbyH24gSM8%2BjdJI2FliV4tPWPYvKNFlYPWO8icdOHiejWZZraxDiNJuZa3BGvitk9pkl3cQGL9drkz6VH96agOJSxPEvC%2BpkhB0UnU8NmRvieW%2BCj9wTs4CSNefr7CIgicI2sls%2FsUEZ7I0rLlB2Hsahf5aXst3ETVi3u2J9xjf%2FX39o1OyVzzyl6MbAycrE8Fr%2FZsJg%2Fs%2BSjczL4d%2FNObHuFSEe8tjM1t7LyUmQDhbKwUSLyFxiOAAui3Yn6p86d3R2Oi0lJCbaMxm4HbQAVUX8vyQSzC4ySTqonzvuQerdln54WVCp5MWCdRc1y0VwsNAevbi3rel0DrsXdjBOdWTaiGeswflWHfv3TGDluUjm8lvDyoGk%2FpHYQDat6WvZwikbq5pJfkEUpUzbK5eiB0FIqkOR%2BQm%2FHwQrafo8yoNNHV2EDP2sI5W6KGUbL%2F2Q58I%2BzQfIXvXxOZ%2BQDIj8SVL8LsMNa9Ay8%2Bl8ltpEIPRl5yghYZnRKGPEyfpN54wXHwdxWyeXAxieRB4%2Fs7uSi4pKCSgcQTA3WAHCshUMJzwtsQGOqUBuDVZkeK2UZ5z6%2BW%2FQ5lOVSSyoyk81nAKdbH7teNGANE8BcS1mE2XKgmOOK1wxgnL5X0Gx9oyavyLUI0zMtmgodlJQ2i9Xj8wUH4s0lIt3hV15hLZ%2BVUrcZ%2FHCL8dGhCWGMTe2u%2BG46PX4Wk4XrSlbqdj84c%2FM%2BoOaoBWUU7Q2HLVF33k4odSoogx%2BzW%2BoNYQHmZeSQAvE4FR%2BpVZEFgJJ7W4RQ%2BJ&X-Amz-Signature=9d0ddb8164f1deb2bee520ae92d160767ddff94574b8c71f8cb95ff5b731a020&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRY32O2E%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIENCiLSggES%2FhqiDJBDDFDin%2BGL%2BmX4JTrIvjsgNopgKAiEAzR4xGoB1JIfxEvn2hpPvs50fgOq2vI%2B5ip8%2FW08Bru4q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDPSXYECIxNoDgGpA6CrcA5qJNxnzlp843s2UjKmnpgPdqDNlYXQNWt2KtwdgoQPUttEHjKGyMira3ShIBddgAqYE2goS4eA5aSedrXREREbyH24gSM8%2BjdJI2FliV4tPWPYvKNFlYPWO8icdOHiejWZZraxDiNJuZa3BGvitk9pkl3cQGL9drkz6VH96agOJSxPEvC%2BpkhB0UnU8NmRvieW%2BCj9wTs4CSNefr7CIgicI2sls%2FsUEZ7I0rLlB2Hsahf5aXst3ETVi3u2J9xjf%2FX39o1OyVzzyl6MbAycrE8Fr%2FZsJg%2Fs%2BSjczL4d%2FNObHuFSEe8tjM1t7LyUmQDhbKwUSLyFxiOAAui3Yn6p86d3R2Oi0lJCbaMxm4HbQAVUX8vyQSzC4ySTqonzvuQerdln54WVCp5MWCdRc1y0VwsNAevbi3rel0DrsXdjBOdWTaiGeswflWHfv3TGDluUjm8lvDyoGk%2FpHYQDat6WvZwikbq5pJfkEUpUzbK5eiB0FIqkOR%2BQm%2FHwQrafo8yoNNHV2EDP2sI5W6KGUbL%2F2Q58I%2BzQfIXvXxOZ%2BQDIj8SVL8LsMNa9Ay8%2Bl8ltpEIPRl5yghYZnRKGPEyfpN54wXHwdxWyeXAxieRB4%2Fs7uSi4pKCSgcQTA3WAHCshUMJzwtsQGOqUBuDVZkeK2UZ5z6%2BW%2FQ5lOVSSyoyk81nAKdbH7teNGANE8BcS1mE2XKgmOOK1wxgnL5X0Gx9oyavyLUI0zMtmgodlJQ2i9Xj8wUH4s0lIt3hV15hLZ%2BVUrcZ%2FHCL8dGhCWGMTe2u%2BG46PX4Wk4XrSlbqdj84c%2FM%2BoOaoBWUU7Q2HLVF33k4odSoogx%2BzW%2BoNYQHmZeSQAvE4FR%2BpVZEFgJJ7W4RQ%2BJ&X-Amz-Signature=e5f4689b6135cc44c9e4977b4b6f72b386d2996c3a97499748d4ac9c3c18e100&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRY32O2E%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIENCiLSggES%2FhqiDJBDDFDin%2BGL%2BmX4JTrIvjsgNopgKAiEAzR4xGoB1JIfxEvn2hpPvs50fgOq2vI%2B5ip8%2FW08Bru4q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDPSXYECIxNoDgGpA6CrcA5qJNxnzlp843s2UjKmnpgPdqDNlYXQNWt2KtwdgoQPUttEHjKGyMira3ShIBddgAqYE2goS4eA5aSedrXREREbyH24gSM8%2BjdJI2FliV4tPWPYvKNFlYPWO8icdOHiejWZZraxDiNJuZa3BGvitk9pkl3cQGL9drkz6VH96agOJSxPEvC%2BpkhB0UnU8NmRvieW%2BCj9wTs4CSNefr7CIgicI2sls%2FsUEZ7I0rLlB2Hsahf5aXst3ETVi3u2J9xjf%2FX39o1OyVzzyl6MbAycrE8Fr%2FZsJg%2Fs%2BSjczL4d%2FNObHuFSEe8tjM1t7LyUmQDhbKwUSLyFxiOAAui3Yn6p86d3R2Oi0lJCbaMxm4HbQAVUX8vyQSzC4ySTqonzvuQerdln54WVCp5MWCdRc1y0VwsNAevbi3rel0DrsXdjBOdWTaiGeswflWHfv3TGDluUjm8lvDyoGk%2FpHYQDat6WvZwikbq5pJfkEUpUzbK5eiB0FIqkOR%2BQm%2FHwQrafo8yoNNHV2EDP2sI5W6KGUbL%2F2Q58I%2BzQfIXvXxOZ%2BQDIj8SVL8LsMNa9Ay8%2Bl8ltpEIPRl5yghYZnRKGPEyfpN54wXHwdxWyeXAxieRB4%2Fs7uSi4pKCSgcQTA3WAHCshUMJzwtsQGOqUBuDVZkeK2UZ5z6%2BW%2FQ5lOVSSyoyk81nAKdbH7teNGANE8BcS1mE2XKgmOOK1wxgnL5X0Gx9oyavyLUI0zMtmgodlJQ2i9Xj8wUH4s0lIt3hV15hLZ%2BVUrcZ%2FHCL8dGhCWGMTe2u%2BG46PX4Wk4XrSlbqdj84c%2FM%2BoOaoBWUU7Q2HLVF33k4odSoogx%2BzW%2BoNYQHmZeSQAvE4FR%2BpVZEFgJJ7W4RQ%2BJ&X-Amz-Signature=2fe0a1fd5cbf1347946c340c3e90978733493def3e69001dd834f6c638ccb492&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
