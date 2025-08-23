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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS6EJ2VX%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnOOb3AG2AXeSVMcvr90sGTpwjlFmWM5U4gr8D%2FmPDAQIhALp%2BXF%2BBpK%2BYenMszY5Lb9kaG97u%2Fbzm3g%2FV5P8Ao8viKv8DCCEQABoMNjM3NDIzMTgzODA1IgxfAL%2BaD57iR16eIbsq3AN93SA3ZcKvz39aH%2F%2B2C7xjd16sMKg1rp0M0J%2FUHNsPKIoUkmeG1hmZnxPKP0vqUw8rXz%2FD%2BoSRnOcCNuSYK7fdGhcsGXyptwVEknXbeK2P8thHaQFvPpM3pcqGI7lA9khHTi3qURsYhxcQRnFlUcNeOoy7x7EfaRmkUhdb57Slxkaee5EIrma5loxgyDe6z%2B1LzkyHypoTZD%2Bklr6ixMEGcgr5PidqQCHZuArVFrrA6DPcTkg2cZ5wdzxYW4%2BpCxjEIiVji0l0yXsJW4HGosXfzgywiNzmoAGEQyxRqHdpcm9PdCpADbFlFulrLX8cKuMNw5XhytcSqXXhQXPR10K2hFjyVvHh19F1RfACHQ2hYuON6diynahsN51kZDzp0nNAMjX7johmRMF8LS6bt%2B11qKD4xQgnS2VEakbCb3GnV5EU%2B1XL9nfpC0ubin8iFaHKhisD%2FhVsz1F3hHvXlpBcqrkAUAt%2B%2Fg%2F2X12JE1r7s0wKjnlaQhI5ujy%2Fx77%2B2D7YJ7RSSPrFmVkNFkTFhSQwdEP4f0TRVUEh%2B7gtaafo%2FZ2ne1031xtk6o4tl%2B3LFsP4wwBXL6ZBzphCwGe3JQrTqEfM3sTA7ByLOPxd7ow9gM2ZvMI9m6qeds2R%2FzDoj6TFBjqkAZ1Fl9FY0%2FZxqmn4Z8kvraEDIh7zH1NxzuPjM7PfEOEveTR18kSqdtiKQI%2Bu5crg5olkt2i6JWeygF9wNwZVsnVCHOeUfD9Pf5tjXZlpNAENXEl8VbTIHmn1alWQdU0UuvPn3ony83oPh6YIvSo8%2F0XDgs6MhoD%2BmCMnkmApBD81ysdKNkChosiVslTu5QxNna3sxgaTe1sQ%2F0nSzhDsH1obBzPo&X-Amz-Signature=b8eaef9a0a5b94c53883ec59a35050c840c1a45abbad73a0f05abd518a8e275c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS6EJ2VX%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnOOb3AG2AXeSVMcvr90sGTpwjlFmWM5U4gr8D%2FmPDAQIhALp%2BXF%2BBpK%2BYenMszY5Lb9kaG97u%2Fbzm3g%2FV5P8Ao8viKv8DCCEQABoMNjM3NDIzMTgzODA1IgxfAL%2BaD57iR16eIbsq3AN93SA3ZcKvz39aH%2F%2B2C7xjd16sMKg1rp0M0J%2FUHNsPKIoUkmeG1hmZnxPKP0vqUw8rXz%2FD%2BoSRnOcCNuSYK7fdGhcsGXyptwVEknXbeK2P8thHaQFvPpM3pcqGI7lA9khHTi3qURsYhxcQRnFlUcNeOoy7x7EfaRmkUhdb57Slxkaee5EIrma5loxgyDe6z%2B1LzkyHypoTZD%2Bklr6ixMEGcgr5PidqQCHZuArVFrrA6DPcTkg2cZ5wdzxYW4%2BpCxjEIiVji0l0yXsJW4HGosXfzgywiNzmoAGEQyxRqHdpcm9PdCpADbFlFulrLX8cKuMNw5XhytcSqXXhQXPR10K2hFjyVvHh19F1RfACHQ2hYuON6diynahsN51kZDzp0nNAMjX7johmRMF8LS6bt%2B11qKD4xQgnS2VEakbCb3GnV5EU%2B1XL9nfpC0ubin8iFaHKhisD%2FhVsz1F3hHvXlpBcqrkAUAt%2B%2Fg%2F2X12JE1r7s0wKjnlaQhI5ujy%2Fx77%2B2D7YJ7RSSPrFmVkNFkTFhSQwdEP4f0TRVUEh%2B7gtaafo%2FZ2ne1031xtk6o4tl%2B3LFsP4wwBXL6ZBzphCwGe3JQrTqEfM3sTA7ByLOPxd7ow9gM2ZvMI9m6qeds2R%2FzDoj6TFBjqkAZ1Fl9FY0%2FZxqmn4Z8kvraEDIh7zH1NxzuPjM7PfEOEveTR18kSqdtiKQI%2Bu5crg5olkt2i6JWeygF9wNwZVsnVCHOeUfD9Pf5tjXZlpNAENXEl8VbTIHmn1alWQdU0UuvPn3ony83oPh6YIvSo8%2F0XDgs6MhoD%2BmCMnkmApBD81ysdKNkChosiVslTu5QxNna3sxgaTe1sQ%2F0nSzhDsH1obBzPo&X-Amz-Signature=b6e6259f006b30930a84e80ec0b35cf5ba715ff309cbce47ed5f62714902e76d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS6EJ2VX%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnOOb3AG2AXeSVMcvr90sGTpwjlFmWM5U4gr8D%2FmPDAQIhALp%2BXF%2BBpK%2BYenMszY5Lb9kaG97u%2Fbzm3g%2FV5P8Ao8viKv8DCCEQABoMNjM3NDIzMTgzODA1IgxfAL%2BaD57iR16eIbsq3AN93SA3ZcKvz39aH%2F%2B2C7xjd16sMKg1rp0M0J%2FUHNsPKIoUkmeG1hmZnxPKP0vqUw8rXz%2FD%2BoSRnOcCNuSYK7fdGhcsGXyptwVEknXbeK2P8thHaQFvPpM3pcqGI7lA9khHTi3qURsYhxcQRnFlUcNeOoy7x7EfaRmkUhdb57Slxkaee5EIrma5loxgyDe6z%2B1LzkyHypoTZD%2Bklr6ixMEGcgr5PidqQCHZuArVFrrA6DPcTkg2cZ5wdzxYW4%2BpCxjEIiVji0l0yXsJW4HGosXfzgywiNzmoAGEQyxRqHdpcm9PdCpADbFlFulrLX8cKuMNw5XhytcSqXXhQXPR10K2hFjyVvHh19F1RfACHQ2hYuON6diynahsN51kZDzp0nNAMjX7johmRMF8LS6bt%2B11qKD4xQgnS2VEakbCb3GnV5EU%2B1XL9nfpC0ubin8iFaHKhisD%2FhVsz1F3hHvXlpBcqrkAUAt%2B%2Fg%2F2X12JE1r7s0wKjnlaQhI5ujy%2Fx77%2B2D7YJ7RSSPrFmVkNFkTFhSQwdEP4f0TRVUEh%2B7gtaafo%2FZ2ne1031xtk6o4tl%2B3LFsP4wwBXL6ZBzphCwGe3JQrTqEfM3sTA7ByLOPxd7ow9gM2ZvMI9m6qeds2R%2FzDoj6TFBjqkAZ1Fl9FY0%2FZxqmn4Z8kvraEDIh7zH1NxzuPjM7PfEOEveTR18kSqdtiKQI%2Bu5crg5olkt2i6JWeygF9wNwZVsnVCHOeUfD9Pf5tjXZlpNAENXEl8VbTIHmn1alWQdU0UuvPn3ony83oPh6YIvSo8%2F0XDgs6MhoD%2BmCMnkmApBD81ysdKNkChosiVslTu5QxNna3sxgaTe1sQ%2F0nSzhDsH1obBzPo&X-Amz-Signature=b987f51579ff96b8033414cac862cdd9108f8d3dd2b5896addc25ae402a22ffe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS6EJ2VX%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnOOb3AG2AXeSVMcvr90sGTpwjlFmWM5U4gr8D%2FmPDAQIhALp%2BXF%2BBpK%2BYenMszY5Lb9kaG97u%2Fbzm3g%2FV5P8Ao8viKv8DCCEQABoMNjM3NDIzMTgzODA1IgxfAL%2BaD57iR16eIbsq3AN93SA3ZcKvz39aH%2F%2B2C7xjd16sMKg1rp0M0J%2FUHNsPKIoUkmeG1hmZnxPKP0vqUw8rXz%2FD%2BoSRnOcCNuSYK7fdGhcsGXyptwVEknXbeK2P8thHaQFvPpM3pcqGI7lA9khHTi3qURsYhxcQRnFlUcNeOoy7x7EfaRmkUhdb57Slxkaee5EIrma5loxgyDe6z%2B1LzkyHypoTZD%2Bklr6ixMEGcgr5PidqQCHZuArVFrrA6DPcTkg2cZ5wdzxYW4%2BpCxjEIiVji0l0yXsJW4HGosXfzgywiNzmoAGEQyxRqHdpcm9PdCpADbFlFulrLX8cKuMNw5XhytcSqXXhQXPR10K2hFjyVvHh19F1RfACHQ2hYuON6diynahsN51kZDzp0nNAMjX7johmRMF8LS6bt%2B11qKD4xQgnS2VEakbCb3GnV5EU%2B1XL9nfpC0ubin8iFaHKhisD%2FhVsz1F3hHvXlpBcqrkAUAt%2B%2Fg%2F2X12JE1r7s0wKjnlaQhI5ujy%2Fx77%2B2D7YJ7RSSPrFmVkNFkTFhSQwdEP4f0TRVUEh%2B7gtaafo%2FZ2ne1031xtk6o4tl%2B3LFsP4wwBXL6ZBzphCwGe3JQrTqEfM3sTA7ByLOPxd7ow9gM2ZvMI9m6qeds2R%2FzDoj6TFBjqkAZ1Fl9FY0%2FZxqmn4Z8kvraEDIh7zH1NxzuPjM7PfEOEveTR18kSqdtiKQI%2Bu5crg5olkt2i6JWeygF9wNwZVsnVCHOeUfD9Pf5tjXZlpNAENXEl8VbTIHmn1alWQdU0UuvPn3ony83oPh6YIvSo8%2F0XDgs6MhoD%2BmCMnkmApBD81ysdKNkChosiVslTu5QxNna3sxgaTe1sQ%2F0nSzhDsH1obBzPo&X-Amz-Signature=54573f859cc652fea510e6ad00a8c07bca05ccbede478d5f6952b73c2167a9e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS6EJ2VX%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnOOb3AG2AXeSVMcvr90sGTpwjlFmWM5U4gr8D%2FmPDAQIhALp%2BXF%2BBpK%2BYenMszY5Lb9kaG97u%2Fbzm3g%2FV5P8Ao8viKv8DCCEQABoMNjM3NDIzMTgzODA1IgxfAL%2BaD57iR16eIbsq3AN93SA3ZcKvz39aH%2F%2B2C7xjd16sMKg1rp0M0J%2FUHNsPKIoUkmeG1hmZnxPKP0vqUw8rXz%2FD%2BoSRnOcCNuSYK7fdGhcsGXyptwVEknXbeK2P8thHaQFvPpM3pcqGI7lA9khHTi3qURsYhxcQRnFlUcNeOoy7x7EfaRmkUhdb57Slxkaee5EIrma5loxgyDe6z%2B1LzkyHypoTZD%2Bklr6ixMEGcgr5PidqQCHZuArVFrrA6DPcTkg2cZ5wdzxYW4%2BpCxjEIiVji0l0yXsJW4HGosXfzgywiNzmoAGEQyxRqHdpcm9PdCpADbFlFulrLX8cKuMNw5XhytcSqXXhQXPR10K2hFjyVvHh19F1RfACHQ2hYuON6diynahsN51kZDzp0nNAMjX7johmRMF8LS6bt%2B11qKD4xQgnS2VEakbCb3GnV5EU%2B1XL9nfpC0ubin8iFaHKhisD%2FhVsz1F3hHvXlpBcqrkAUAt%2B%2Fg%2F2X12JE1r7s0wKjnlaQhI5ujy%2Fx77%2B2D7YJ7RSSPrFmVkNFkTFhSQwdEP4f0TRVUEh%2B7gtaafo%2FZ2ne1031xtk6o4tl%2B3LFsP4wwBXL6ZBzphCwGe3JQrTqEfM3sTA7ByLOPxd7ow9gM2ZvMI9m6qeds2R%2FzDoj6TFBjqkAZ1Fl9FY0%2FZxqmn4Z8kvraEDIh7zH1NxzuPjM7PfEOEveTR18kSqdtiKQI%2Bu5crg5olkt2i6JWeygF9wNwZVsnVCHOeUfD9Pf5tjXZlpNAENXEl8VbTIHmn1alWQdU0UuvPn3ony83oPh6YIvSo8%2F0XDgs6MhoD%2BmCMnkmApBD81ysdKNkChosiVslTu5QxNna3sxgaTe1sQ%2F0nSzhDsH1obBzPo&X-Amz-Signature=eb141639f90fe53e28228bd54b5dd96e9e7c819893c22f5b19b1627c58f5ea0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS6EJ2VX%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnOOb3AG2AXeSVMcvr90sGTpwjlFmWM5U4gr8D%2FmPDAQIhALp%2BXF%2BBpK%2BYenMszY5Lb9kaG97u%2Fbzm3g%2FV5P8Ao8viKv8DCCEQABoMNjM3NDIzMTgzODA1IgxfAL%2BaD57iR16eIbsq3AN93SA3ZcKvz39aH%2F%2B2C7xjd16sMKg1rp0M0J%2FUHNsPKIoUkmeG1hmZnxPKP0vqUw8rXz%2FD%2BoSRnOcCNuSYK7fdGhcsGXyptwVEknXbeK2P8thHaQFvPpM3pcqGI7lA9khHTi3qURsYhxcQRnFlUcNeOoy7x7EfaRmkUhdb57Slxkaee5EIrma5loxgyDe6z%2B1LzkyHypoTZD%2Bklr6ixMEGcgr5PidqQCHZuArVFrrA6DPcTkg2cZ5wdzxYW4%2BpCxjEIiVji0l0yXsJW4HGosXfzgywiNzmoAGEQyxRqHdpcm9PdCpADbFlFulrLX8cKuMNw5XhytcSqXXhQXPR10K2hFjyVvHh19F1RfACHQ2hYuON6diynahsN51kZDzp0nNAMjX7johmRMF8LS6bt%2B11qKD4xQgnS2VEakbCb3GnV5EU%2B1XL9nfpC0ubin8iFaHKhisD%2FhVsz1F3hHvXlpBcqrkAUAt%2B%2Fg%2F2X12JE1r7s0wKjnlaQhI5ujy%2Fx77%2B2D7YJ7RSSPrFmVkNFkTFhSQwdEP4f0TRVUEh%2B7gtaafo%2FZ2ne1031xtk6o4tl%2B3LFsP4wwBXL6ZBzphCwGe3JQrTqEfM3sTA7ByLOPxd7ow9gM2ZvMI9m6qeds2R%2FzDoj6TFBjqkAZ1Fl9FY0%2FZxqmn4Z8kvraEDIh7zH1NxzuPjM7PfEOEveTR18kSqdtiKQI%2Bu5crg5olkt2i6JWeygF9wNwZVsnVCHOeUfD9Pf5tjXZlpNAENXEl8VbTIHmn1alWQdU0UuvPn3ony83oPh6YIvSo8%2F0XDgs6MhoD%2BmCMnkmApBD81ysdKNkChosiVslTu5QxNna3sxgaTe1sQ%2F0nSzhDsH1obBzPo&X-Amz-Signature=b0718b4bf4070d39a09aea647908e5bff5a9e784437b4b02f6ea1ba9c9486b61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS6EJ2VX%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnOOb3AG2AXeSVMcvr90sGTpwjlFmWM5U4gr8D%2FmPDAQIhALp%2BXF%2BBpK%2BYenMszY5Lb9kaG97u%2Fbzm3g%2FV5P8Ao8viKv8DCCEQABoMNjM3NDIzMTgzODA1IgxfAL%2BaD57iR16eIbsq3AN93SA3ZcKvz39aH%2F%2B2C7xjd16sMKg1rp0M0J%2FUHNsPKIoUkmeG1hmZnxPKP0vqUw8rXz%2FD%2BoSRnOcCNuSYK7fdGhcsGXyptwVEknXbeK2P8thHaQFvPpM3pcqGI7lA9khHTi3qURsYhxcQRnFlUcNeOoy7x7EfaRmkUhdb57Slxkaee5EIrma5loxgyDe6z%2B1LzkyHypoTZD%2Bklr6ixMEGcgr5PidqQCHZuArVFrrA6DPcTkg2cZ5wdzxYW4%2BpCxjEIiVji0l0yXsJW4HGosXfzgywiNzmoAGEQyxRqHdpcm9PdCpADbFlFulrLX8cKuMNw5XhytcSqXXhQXPR10K2hFjyVvHh19F1RfACHQ2hYuON6diynahsN51kZDzp0nNAMjX7johmRMF8LS6bt%2B11qKD4xQgnS2VEakbCb3GnV5EU%2B1XL9nfpC0ubin8iFaHKhisD%2FhVsz1F3hHvXlpBcqrkAUAt%2B%2Fg%2F2X12JE1r7s0wKjnlaQhI5ujy%2Fx77%2B2D7YJ7RSSPrFmVkNFkTFhSQwdEP4f0TRVUEh%2B7gtaafo%2FZ2ne1031xtk6o4tl%2B3LFsP4wwBXL6ZBzphCwGe3JQrTqEfM3sTA7ByLOPxd7ow9gM2ZvMI9m6qeds2R%2FzDoj6TFBjqkAZ1Fl9FY0%2FZxqmn4Z8kvraEDIh7zH1NxzuPjM7PfEOEveTR18kSqdtiKQI%2Bu5crg5olkt2i6JWeygF9wNwZVsnVCHOeUfD9Pf5tjXZlpNAENXEl8VbTIHmn1alWQdU0UuvPn3ony83oPh6YIvSo8%2F0XDgs6MhoD%2BmCMnkmApBD81ysdKNkChosiVslTu5QxNna3sxgaTe1sQ%2F0nSzhDsH1obBzPo&X-Amz-Signature=779dedc4a8ffafc2b35c5a03477b699a1446b1b5d5e5ea51b5f86055a252114a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS6EJ2VX%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnOOb3AG2AXeSVMcvr90sGTpwjlFmWM5U4gr8D%2FmPDAQIhALp%2BXF%2BBpK%2BYenMszY5Lb9kaG97u%2Fbzm3g%2FV5P8Ao8viKv8DCCEQABoMNjM3NDIzMTgzODA1IgxfAL%2BaD57iR16eIbsq3AN93SA3ZcKvz39aH%2F%2B2C7xjd16sMKg1rp0M0J%2FUHNsPKIoUkmeG1hmZnxPKP0vqUw8rXz%2FD%2BoSRnOcCNuSYK7fdGhcsGXyptwVEknXbeK2P8thHaQFvPpM3pcqGI7lA9khHTi3qURsYhxcQRnFlUcNeOoy7x7EfaRmkUhdb57Slxkaee5EIrma5loxgyDe6z%2B1LzkyHypoTZD%2Bklr6ixMEGcgr5PidqQCHZuArVFrrA6DPcTkg2cZ5wdzxYW4%2BpCxjEIiVji0l0yXsJW4HGosXfzgywiNzmoAGEQyxRqHdpcm9PdCpADbFlFulrLX8cKuMNw5XhytcSqXXhQXPR10K2hFjyVvHh19F1RfACHQ2hYuON6diynahsN51kZDzp0nNAMjX7johmRMF8LS6bt%2B11qKD4xQgnS2VEakbCb3GnV5EU%2B1XL9nfpC0ubin8iFaHKhisD%2FhVsz1F3hHvXlpBcqrkAUAt%2B%2Fg%2F2X12JE1r7s0wKjnlaQhI5ujy%2Fx77%2B2D7YJ7RSSPrFmVkNFkTFhSQwdEP4f0TRVUEh%2B7gtaafo%2FZ2ne1031xtk6o4tl%2B3LFsP4wwBXL6ZBzphCwGe3JQrTqEfM3sTA7ByLOPxd7ow9gM2ZvMI9m6qeds2R%2FzDoj6TFBjqkAZ1Fl9FY0%2FZxqmn4Z8kvraEDIh7zH1NxzuPjM7PfEOEveTR18kSqdtiKQI%2Bu5crg5olkt2i6JWeygF9wNwZVsnVCHOeUfD9Pf5tjXZlpNAENXEl8VbTIHmn1alWQdU0UuvPn3ony83oPh6YIvSo8%2F0XDgs6MhoD%2BmCMnkmApBD81ysdKNkChosiVslTu5QxNna3sxgaTe1sQ%2F0nSzhDsH1obBzPo&X-Amz-Signature=921e6ff57e4121ee3d22ba67f5d7cf556c1c81a8f3136a37875d5b32295a030d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS6EJ2VX%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnOOb3AG2AXeSVMcvr90sGTpwjlFmWM5U4gr8D%2FmPDAQIhALp%2BXF%2BBpK%2BYenMszY5Lb9kaG97u%2Fbzm3g%2FV5P8Ao8viKv8DCCEQABoMNjM3NDIzMTgzODA1IgxfAL%2BaD57iR16eIbsq3AN93SA3ZcKvz39aH%2F%2B2C7xjd16sMKg1rp0M0J%2FUHNsPKIoUkmeG1hmZnxPKP0vqUw8rXz%2FD%2BoSRnOcCNuSYK7fdGhcsGXyptwVEknXbeK2P8thHaQFvPpM3pcqGI7lA9khHTi3qURsYhxcQRnFlUcNeOoy7x7EfaRmkUhdb57Slxkaee5EIrma5loxgyDe6z%2B1LzkyHypoTZD%2Bklr6ixMEGcgr5PidqQCHZuArVFrrA6DPcTkg2cZ5wdzxYW4%2BpCxjEIiVji0l0yXsJW4HGosXfzgywiNzmoAGEQyxRqHdpcm9PdCpADbFlFulrLX8cKuMNw5XhytcSqXXhQXPR10K2hFjyVvHh19F1RfACHQ2hYuON6diynahsN51kZDzp0nNAMjX7johmRMF8LS6bt%2B11qKD4xQgnS2VEakbCb3GnV5EU%2B1XL9nfpC0ubin8iFaHKhisD%2FhVsz1F3hHvXlpBcqrkAUAt%2B%2Fg%2F2X12JE1r7s0wKjnlaQhI5ujy%2Fx77%2B2D7YJ7RSSPrFmVkNFkTFhSQwdEP4f0TRVUEh%2B7gtaafo%2FZ2ne1031xtk6o4tl%2B3LFsP4wwBXL6ZBzphCwGe3JQrTqEfM3sTA7ByLOPxd7ow9gM2ZvMI9m6qeds2R%2FzDoj6TFBjqkAZ1Fl9FY0%2FZxqmn4Z8kvraEDIh7zH1NxzuPjM7PfEOEveTR18kSqdtiKQI%2Bu5crg5olkt2i6JWeygF9wNwZVsnVCHOeUfD9Pf5tjXZlpNAENXEl8VbTIHmn1alWQdU0UuvPn3ony83oPh6YIvSo8%2F0XDgs6MhoD%2BmCMnkmApBD81ysdKNkChosiVslTu5QxNna3sxgaTe1sQ%2F0nSzhDsH1obBzPo&X-Amz-Signature=4b56062ee104184d660de78a5728b7a9f357bb802dcb8a92576fad542d7f9c26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS6EJ2VX%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnOOb3AG2AXeSVMcvr90sGTpwjlFmWM5U4gr8D%2FmPDAQIhALp%2BXF%2BBpK%2BYenMszY5Lb9kaG97u%2Fbzm3g%2FV5P8Ao8viKv8DCCEQABoMNjM3NDIzMTgzODA1IgxfAL%2BaD57iR16eIbsq3AN93SA3ZcKvz39aH%2F%2B2C7xjd16sMKg1rp0M0J%2FUHNsPKIoUkmeG1hmZnxPKP0vqUw8rXz%2FD%2BoSRnOcCNuSYK7fdGhcsGXyptwVEknXbeK2P8thHaQFvPpM3pcqGI7lA9khHTi3qURsYhxcQRnFlUcNeOoy7x7EfaRmkUhdb57Slxkaee5EIrma5loxgyDe6z%2B1LzkyHypoTZD%2Bklr6ixMEGcgr5PidqQCHZuArVFrrA6DPcTkg2cZ5wdzxYW4%2BpCxjEIiVji0l0yXsJW4HGosXfzgywiNzmoAGEQyxRqHdpcm9PdCpADbFlFulrLX8cKuMNw5XhytcSqXXhQXPR10K2hFjyVvHh19F1RfACHQ2hYuON6diynahsN51kZDzp0nNAMjX7johmRMF8LS6bt%2B11qKD4xQgnS2VEakbCb3GnV5EU%2B1XL9nfpC0ubin8iFaHKhisD%2FhVsz1F3hHvXlpBcqrkAUAt%2B%2Fg%2F2X12JE1r7s0wKjnlaQhI5ujy%2Fx77%2B2D7YJ7RSSPrFmVkNFkTFhSQwdEP4f0TRVUEh%2B7gtaafo%2FZ2ne1031xtk6o4tl%2B3LFsP4wwBXL6ZBzphCwGe3JQrTqEfM3sTA7ByLOPxd7ow9gM2ZvMI9m6qeds2R%2FzDoj6TFBjqkAZ1Fl9FY0%2FZxqmn4Z8kvraEDIh7zH1NxzuPjM7PfEOEveTR18kSqdtiKQI%2Bu5crg5olkt2i6JWeygF9wNwZVsnVCHOeUfD9Pf5tjXZlpNAENXEl8VbTIHmn1alWQdU0UuvPn3ony83oPh6YIvSo8%2F0XDgs6MhoD%2BmCMnkmApBD81ysdKNkChosiVslTu5QxNna3sxgaTe1sQ%2F0nSzhDsH1obBzPo&X-Amz-Signature=951f3060d113c01d86d592fc696f23a8f35ab34275d97846766aa599b2bdeafd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS6EJ2VX%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnOOb3AG2AXeSVMcvr90sGTpwjlFmWM5U4gr8D%2FmPDAQIhALp%2BXF%2BBpK%2BYenMszY5Lb9kaG97u%2Fbzm3g%2FV5P8Ao8viKv8DCCEQABoMNjM3NDIzMTgzODA1IgxfAL%2BaD57iR16eIbsq3AN93SA3ZcKvz39aH%2F%2B2C7xjd16sMKg1rp0M0J%2FUHNsPKIoUkmeG1hmZnxPKP0vqUw8rXz%2FD%2BoSRnOcCNuSYK7fdGhcsGXyptwVEknXbeK2P8thHaQFvPpM3pcqGI7lA9khHTi3qURsYhxcQRnFlUcNeOoy7x7EfaRmkUhdb57Slxkaee5EIrma5loxgyDe6z%2B1LzkyHypoTZD%2Bklr6ixMEGcgr5PidqQCHZuArVFrrA6DPcTkg2cZ5wdzxYW4%2BpCxjEIiVji0l0yXsJW4HGosXfzgywiNzmoAGEQyxRqHdpcm9PdCpADbFlFulrLX8cKuMNw5XhytcSqXXhQXPR10K2hFjyVvHh19F1RfACHQ2hYuON6diynahsN51kZDzp0nNAMjX7johmRMF8LS6bt%2B11qKD4xQgnS2VEakbCb3GnV5EU%2B1XL9nfpC0ubin8iFaHKhisD%2FhVsz1F3hHvXlpBcqrkAUAt%2B%2Fg%2F2X12JE1r7s0wKjnlaQhI5ujy%2Fx77%2B2D7YJ7RSSPrFmVkNFkTFhSQwdEP4f0TRVUEh%2B7gtaafo%2FZ2ne1031xtk6o4tl%2B3LFsP4wwBXL6ZBzphCwGe3JQrTqEfM3sTA7ByLOPxd7ow9gM2ZvMI9m6qeds2R%2FzDoj6TFBjqkAZ1Fl9FY0%2FZxqmn4Z8kvraEDIh7zH1NxzuPjM7PfEOEveTR18kSqdtiKQI%2Bu5crg5olkt2i6JWeygF9wNwZVsnVCHOeUfD9Pf5tjXZlpNAENXEl8VbTIHmn1alWQdU0UuvPn3ony83oPh6YIvSo8%2F0XDgs6MhoD%2BmCMnkmApBD81ysdKNkChosiVslTu5QxNna3sxgaTe1sQ%2F0nSzhDsH1obBzPo&X-Amz-Signature=eeed52d9d89df712b5e3bd98c739be366290ec92229094696999da260c101a4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS6EJ2VX%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnOOb3AG2AXeSVMcvr90sGTpwjlFmWM5U4gr8D%2FmPDAQIhALp%2BXF%2BBpK%2BYenMszY5Lb9kaG97u%2Fbzm3g%2FV5P8Ao8viKv8DCCEQABoMNjM3NDIzMTgzODA1IgxfAL%2BaD57iR16eIbsq3AN93SA3ZcKvz39aH%2F%2B2C7xjd16sMKg1rp0M0J%2FUHNsPKIoUkmeG1hmZnxPKP0vqUw8rXz%2FD%2BoSRnOcCNuSYK7fdGhcsGXyptwVEknXbeK2P8thHaQFvPpM3pcqGI7lA9khHTi3qURsYhxcQRnFlUcNeOoy7x7EfaRmkUhdb57Slxkaee5EIrma5loxgyDe6z%2B1LzkyHypoTZD%2Bklr6ixMEGcgr5PidqQCHZuArVFrrA6DPcTkg2cZ5wdzxYW4%2BpCxjEIiVji0l0yXsJW4HGosXfzgywiNzmoAGEQyxRqHdpcm9PdCpADbFlFulrLX8cKuMNw5XhytcSqXXhQXPR10K2hFjyVvHh19F1RfACHQ2hYuON6diynahsN51kZDzp0nNAMjX7johmRMF8LS6bt%2B11qKD4xQgnS2VEakbCb3GnV5EU%2B1XL9nfpC0ubin8iFaHKhisD%2FhVsz1F3hHvXlpBcqrkAUAt%2B%2Fg%2F2X12JE1r7s0wKjnlaQhI5ujy%2Fx77%2B2D7YJ7RSSPrFmVkNFkTFhSQwdEP4f0TRVUEh%2B7gtaafo%2FZ2ne1031xtk6o4tl%2B3LFsP4wwBXL6ZBzphCwGe3JQrTqEfM3sTA7ByLOPxd7ow9gM2ZvMI9m6qeds2R%2FzDoj6TFBjqkAZ1Fl9FY0%2FZxqmn4Z8kvraEDIh7zH1NxzuPjM7PfEOEveTR18kSqdtiKQI%2Bu5crg5olkt2i6JWeygF9wNwZVsnVCHOeUfD9Pf5tjXZlpNAENXEl8VbTIHmn1alWQdU0UuvPn3ony83oPh6YIvSo8%2F0XDgs6MhoD%2BmCMnkmApBD81ysdKNkChosiVslTu5QxNna3sxgaTe1sQ%2F0nSzhDsH1obBzPo&X-Amz-Signature=a82712797ca5839676d95614735ba2c5f15adc5eeb2c19b714f1f124047b787e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS6EJ2VX%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnOOb3AG2AXeSVMcvr90sGTpwjlFmWM5U4gr8D%2FmPDAQIhALp%2BXF%2BBpK%2BYenMszY5Lb9kaG97u%2Fbzm3g%2FV5P8Ao8viKv8DCCEQABoMNjM3NDIzMTgzODA1IgxfAL%2BaD57iR16eIbsq3AN93SA3ZcKvz39aH%2F%2B2C7xjd16sMKg1rp0M0J%2FUHNsPKIoUkmeG1hmZnxPKP0vqUw8rXz%2FD%2BoSRnOcCNuSYK7fdGhcsGXyptwVEknXbeK2P8thHaQFvPpM3pcqGI7lA9khHTi3qURsYhxcQRnFlUcNeOoy7x7EfaRmkUhdb57Slxkaee5EIrma5loxgyDe6z%2B1LzkyHypoTZD%2Bklr6ixMEGcgr5PidqQCHZuArVFrrA6DPcTkg2cZ5wdzxYW4%2BpCxjEIiVji0l0yXsJW4HGosXfzgywiNzmoAGEQyxRqHdpcm9PdCpADbFlFulrLX8cKuMNw5XhytcSqXXhQXPR10K2hFjyVvHh19F1RfACHQ2hYuON6diynahsN51kZDzp0nNAMjX7johmRMF8LS6bt%2B11qKD4xQgnS2VEakbCb3GnV5EU%2B1XL9nfpC0ubin8iFaHKhisD%2FhVsz1F3hHvXlpBcqrkAUAt%2B%2Fg%2F2X12JE1r7s0wKjnlaQhI5ujy%2Fx77%2B2D7YJ7RSSPrFmVkNFkTFhSQwdEP4f0TRVUEh%2B7gtaafo%2FZ2ne1031xtk6o4tl%2B3LFsP4wwBXL6ZBzphCwGe3JQrTqEfM3sTA7ByLOPxd7ow9gM2ZvMI9m6qeds2R%2FzDoj6TFBjqkAZ1Fl9FY0%2FZxqmn4Z8kvraEDIh7zH1NxzuPjM7PfEOEveTR18kSqdtiKQI%2Bu5crg5olkt2i6JWeygF9wNwZVsnVCHOeUfD9Pf5tjXZlpNAENXEl8VbTIHmn1alWQdU0UuvPn3ony83oPh6YIvSo8%2F0XDgs6MhoD%2BmCMnkmApBD81ysdKNkChosiVslTu5QxNna3sxgaTe1sQ%2F0nSzhDsH1obBzPo&X-Amz-Signature=d89e18b48256d387e173edabb96a0be73304cf49e079f61d60f56be610aeb786&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
