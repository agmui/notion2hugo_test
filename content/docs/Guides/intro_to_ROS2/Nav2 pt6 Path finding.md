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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y4T7J4U%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCICDbHfvIOCxwazdonUpvDE69rqF3jn8SDQcuyIWGK0zIAiEAp%2F48vrxUwCHCOx727upvhsn4MQYtrHxA541yzTbprcMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMaOaAgEiItO9dwZtircAxcKZ3kDsqgW4jQXtjBKhcOLx%2Bd%2BDRMG9dwtCH4dPEwomf8k20rAMOZPAGj2mH1kpyMtmmZ84wClq75KrcOGw6N2fOifDIuAuy2TDGlW4F8dF10OjjZQ3kIoj7776QvPUCAl6%2FLg1djBUMgqaTXk6BonuDUZcs3Jv%2Flb4BI8WtGSJOWLGrsmdggo70f2ZAFn%2FMP5%2BgCXEMOqX3z%2BN8NEyD1uHVq8BBCIgSeQz2VS6jEFrqaPwhMxkkLjeu0dPZJU5wVoirr5xZgyk%2FObonBGNYOEUmjYkYhg19DPsH4PFAMkMAyDDv6yPisgkK%2BY4wNpFrzNhSfkiu4mY9QKyUD%2BGMtVrL9TJ9iiHgx9bQBQPnn%2Fa0nfgxLge2kjj%2FfVekTT15E7%2ForUruTJ8M8TWfE5fwPOSMie4eAKl07pVNqy3MXerjr%2FY6%2BBhxeWW%2BpypX0oI1zxR5PHXOfqYu9pIq41ZW6rsufFKtoRs0rEw8YYsyJbooAurxImyty0j3Ii7wDrUwE5H67vH05N62FNt%2FR4g9%2FZ9CLl1wJsLNbKR99lSrmzmjHznHX%2BnddJWXV7JraNc4qRTeZmdJl7fBOa1c95deSnmTeDha1YG7GY1k1n2bH4PRCQRPN7J9rm6eU4MOih08QGOqUB2hzGMQFrTSiy9BmCLl1EAM0xmUjGocNgJuPfUQFpX9G683flwtPqw5iZdPP9jbH3DjFCJTVtd1YfiZirDAKM8XxGOCvjrZD7mvFN7eUkL%2BFvm4BYr6ehYYwFRL4A%2BKDrLWYKpsaFF0KJYh%2Bi10af1bpN1t4X4vJe3bj3hc7bClNNQpodHt%2FVo8rQ8DA8aekvUUKKxY2auyplaXqIBaPJJJSoZpAj&X-Amz-Signature=16ae5502f8779008f3bc2fae8cbcf4fab2b9d5997d74d3246cd67aa11b366b41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y4T7J4U%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCICDbHfvIOCxwazdonUpvDE69rqF3jn8SDQcuyIWGK0zIAiEAp%2F48vrxUwCHCOx727upvhsn4MQYtrHxA541yzTbprcMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMaOaAgEiItO9dwZtircAxcKZ3kDsqgW4jQXtjBKhcOLx%2Bd%2BDRMG9dwtCH4dPEwomf8k20rAMOZPAGj2mH1kpyMtmmZ84wClq75KrcOGw6N2fOifDIuAuy2TDGlW4F8dF10OjjZQ3kIoj7776QvPUCAl6%2FLg1djBUMgqaTXk6BonuDUZcs3Jv%2Flb4BI8WtGSJOWLGrsmdggo70f2ZAFn%2FMP5%2BgCXEMOqX3z%2BN8NEyD1uHVq8BBCIgSeQz2VS6jEFrqaPwhMxkkLjeu0dPZJU5wVoirr5xZgyk%2FObonBGNYOEUmjYkYhg19DPsH4PFAMkMAyDDv6yPisgkK%2BY4wNpFrzNhSfkiu4mY9QKyUD%2BGMtVrL9TJ9iiHgx9bQBQPnn%2Fa0nfgxLge2kjj%2FfVekTT15E7%2ForUruTJ8M8TWfE5fwPOSMie4eAKl07pVNqy3MXerjr%2FY6%2BBhxeWW%2BpypX0oI1zxR5PHXOfqYu9pIq41ZW6rsufFKtoRs0rEw8YYsyJbooAurxImyty0j3Ii7wDrUwE5H67vH05N62FNt%2FR4g9%2FZ9CLl1wJsLNbKR99lSrmzmjHznHX%2BnddJWXV7JraNc4qRTeZmdJl7fBOa1c95deSnmTeDha1YG7GY1k1n2bH4PRCQRPN7J9rm6eU4MOih08QGOqUB2hzGMQFrTSiy9BmCLl1EAM0xmUjGocNgJuPfUQFpX9G683flwtPqw5iZdPP9jbH3DjFCJTVtd1YfiZirDAKM8XxGOCvjrZD7mvFN7eUkL%2BFvm4BYr6ehYYwFRL4A%2BKDrLWYKpsaFF0KJYh%2Bi10af1bpN1t4X4vJe3bj3hc7bClNNQpodHt%2FVo8rQ8DA8aekvUUKKxY2auyplaXqIBaPJJJSoZpAj&X-Amz-Signature=00b8a4cf37908f165cea1092ada549c3ec46904ed5e495391be19b94972ba5c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y4T7J4U%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCICDbHfvIOCxwazdonUpvDE69rqF3jn8SDQcuyIWGK0zIAiEAp%2F48vrxUwCHCOx727upvhsn4MQYtrHxA541yzTbprcMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMaOaAgEiItO9dwZtircAxcKZ3kDsqgW4jQXtjBKhcOLx%2Bd%2BDRMG9dwtCH4dPEwomf8k20rAMOZPAGj2mH1kpyMtmmZ84wClq75KrcOGw6N2fOifDIuAuy2TDGlW4F8dF10OjjZQ3kIoj7776QvPUCAl6%2FLg1djBUMgqaTXk6BonuDUZcs3Jv%2Flb4BI8WtGSJOWLGrsmdggo70f2ZAFn%2FMP5%2BgCXEMOqX3z%2BN8NEyD1uHVq8BBCIgSeQz2VS6jEFrqaPwhMxkkLjeu0dPZJU5wVoirr5xZgyk%2FObonBGNYOEUmjYkYhg19DPsH4PFAMkMAyDDv6yPisgkK%2BY4wNpFrzNhSfkiu4mY9QKyUD%2BGMtVrL9TJ9iiHgx9bQBQPnn%2Fa0nfgxLge2kjj%2FfVekTT15E7%2ForUruTJ8M8TWfE5fwPOSMie4eAKl07pVNqy3MXerjr%2FY6%2BBhxeWW%2BpypX0oI1zxR5PHXOfqYu9pIq41ZW6rsufFKtoRs0rEw8YYsyJbooAurxImyty0j3Ii7wDrUwE5H67vH05N62FNt%2FR4g9%2FZ9CLl1wJsLNbKR99lSrmzmjHznHX%2BnddJWXV7JraNc4qRTeZmdJl7fBOa1c95deSnmTeDha1YG7GY1k1n2bH4PRCQRPN7J9rm6eU4MOih08QGOqUB2hzGMQFrTSiy9BmCLl1EAM0xmUjGocNgJuPfUQFpX9G683flwtPqw5iZdPP9jbH3DjFCJTVtd1YfiZirDAKM8XxGOCvjrZD7mvFN7eUkL%2BFvm4BYr6ehYYwFRL4A%2BKDrLWYKpsaFF0KJYh%2Bi10af1bpN1t4X4vJe3bj3hc7bClNNQpodHt%2FVo8rQ8DA8aekvUUKKxY2auyplaXqIBaPJJJSoZpAj&X-Amz-Signature=846b64ae390f3761deaec49ea4e9ba20bd4550690f53934acf751872d0b82f59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y4T7J4U%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCICDbHfvIOCxwazdonUpvDE69rqF3jn8SDQcuyIWGK0zIAiEAp%2F48vrxUwCHCOx727upvhsn4MQYtrHxA541yzTbprcMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMaOaAgEiItO9dwZtircAxcKZ3kDsqgW4jQXtjBKhcOLx%2Bd%2BDRMG9dwtCH4dPEwomf8k20rAMOZPAGj2mH1kpyMtmmZ84wClq75KrcOGw6N2fOifDIuAuy2TDGlW4F8dF10OjjZQ3kIoj7776QvPUCAl6%2FLg1djBUMgqaTXk6BonuDUZcs3Jv%2Flb4BI8WtGSJOWLGrsmdggo70f2ZAFn%2FMP5%2BgCXEMOqX3z%2BN8NEyD1uHVq8BBCIgSeQz2VS6jEFrqaPwhMxkkLjeu0dPZJU5wVoirr5xZgyk%2FObonBGNYOEUmjYkYhg19DPsH4PFAMkMAyDDv6yPisgkK%2BY4wNpFrzNhSfkiu4mY9QKyUD%2BGMtVrL9TJ9iiHgx9bQBQPnn%2Fa0nfgxLge2kjj%2FfVekTT15E7%2ForUruTJ8M8TWfE5fwPOSMie4eAKl07pVNqy3MXerjr%2FY6%2BBhxeWW%2BpypX0oI1zxR5PHXOfqYu9pIq41ZW6rsufFKtoRs0rEw8YYsyJbooAurxImyty0j3Ii7wDrUwE5H67vH05N62FNt%2FR4g9%2FZ9CLl1wJsLNbKR99lSrmzmjHznHX%2BnddJWXV7JraNc4qRTeZmdJl7fBOa1c95deSnmTeDha1YG7GY1k1n2bH4PRCQRPN7J9rm6eU4MOih08QGOqUB2hzGMQFrTSiy9BmCLl1EAM0xmUjGocNgJuPfUQFpX9G683flwtPqw5iZdPP9jbH3DjFCJTVtd1YfiZirDAKM8XxGOCvjrZD7mvFN7eUkL%2BFvm4BYr6ehYYwFRL4A%2BKDrLWYKpsaFF0KJYh%2Bi10af1bpN1t4X4vJe3bj3hc7bClNNQpodHt%2FVo8rQ8DA8aekvUUKKxY2auyplaXqIBaPJJJSoZpAj&X-Amz-Signature=52cf5d26bbf32c9df9eef8438f22fd1a0fb7380f92ea714095f0bd994f366ce9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y4T7J4U%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCICDbHfvIOCxwazdonUpvDE69rqF3jn8SDQcuyIWGK0zIAiEAp%2F48vrxUwCHCOx727upvhsn4MQYtrHxA541yzTbprcMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMaOaAgEiItO9dwZtircAxcKZ3kDsqgW4jQXtjBKhcOLx%2Bd%2BDRMG9dwtCH4dPEwomf8k20rAMOZPAGj2mH1kpyMtmmZ84wClq75KrcOGw6N2fOifDIuAuy2TDGlW4F8dF10OjjZQ3kIoj7776QvPUCAl6%2FLg1djBUMgqaTXk6BonuDUZcs3Jv%2Flb4BI8WtGSJOWLGrsmdggo70f2ZAFn%2FMP5%2BgCXEMOqX3z%2BN8NEyD1uHVq8BBCIgSeQz2VS6jEFrqaPwhMxkkLjeu0dPZJU5wVoirr5xZgyk%2FObonBGNYOEUmjYkYhg19DPsH4PFAMkMAyDDv6yPisgkK%2BY4wNpFrzNhSfkiu4mY9QKyUD%2BGMtVrL9TJ9iiHgx9bQBQPnn%2Fa0nfgxLge2kjj%2FfVekTT15E7%2ForUruTJ8M8TWfE5fwPOSMie4eAKl07pVNqy3MXerjr%2FY6%2BBhxeWW%2BpypX0oI1zxR5PHXOfqYu9pIq41ZW6rsufFKtoRs0rEw8YYsyJbooAurxImyty0j3Ii7wDrUwE5H67vH05N62FNt%2FR4g9%2FZ9CLl1wJsLNbKR99lSrmzmjHznHX%2BnddJWXV7JraNc4qRTeZmdJl7fBOa1c95deSnmTeDha1YG7GY1k1n2bH4PRCQRPN7J9rm6eU4MOih08QGOqUB2hzGMQFrTSiy9BmCLl1EAM0xmUjGocNgJuPfUQFpX9G683flwtPqw5iZdPP9jbH3DjFCJTVtd1YfiZirDAKM8XxGOCvjrZD7mvFN7eUkL%2BFvm4BYr6ehYYwFRL4A%2BKDrLWYKpsaFF0KJYh%2Bi10af1bpN1t4X4vJe3bj3hc7bClNNQpodHt%2FVo8rQ8DA8aekvUUKKxY2auyplaXqIBaPJJJSoZpAj&X-Amz-Signature=f9dba760653c00becd539549b0bf0560b4b849ff9a1c93010ef72d4d872da189&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y4T7J4U%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCICDbHfvIOCxwazdonUpvDE69rqF3jn8SDQcuyIWGK0zIAiEAp%2F48vrxUwCHCOx727upvhsn4MQYtrHxA541yzTbprcMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMaOaAgEiItO9dwZtircAxcKZ3kDsqgW4jQXtjBKhcOLx%2Bd%2BDRMG9dwtCH4dPEwomf8k20rAMOZPAGj2mH1kpyMtmmZ84wClq75KrcOGw6N2fOifDIuAuy2TDGlW4F8dF10OjjZQ3kIoj7776QvPUCAl6%2FLg1djBUMgqaTXk6BonuDUZcs3Jv%2Flb4BI8WtGSJOWLGrsmdggo70f2ZAFn%2FMP5%2BgCXEMOqX3z%2BN8NEyD1uHVq8BBCIgSeQz2VS6jEFrqaPwhMxkkLjeu0dPZJU5wVoirr5xZgyk%2FObonBGNYOEUmjYkYhg19DPsH4PFAMkMAyDDv6yPisgkK%2BY4wNpFrzNhSfkiu4mY9QKyUD%2BGMtVrL9TJ9iiHgx9bQBQPnn%2Fa0nfgxLge2kjj%2FfVekTT15E7%2ForUruTJ8M8TWfE5fwPOSMie4eAKl07pVNqy3MXerjr%2FY6%2BBhxeWW%2BpypX0oI1zxR5PHXOfqYu9pIq41ZW6rsufFKtoRs0rEw8YYsyJbooAurxImyty0j3Ii7wDrUwE5H67vH05N62FNt%2FR4g9%2FZ9CLl1wJsLNbKR99lSrmzmjHznHX%2BnddJWXV7JraNc4qRTeZmdJl7fBOa1c95deSnmTeDha1YG7GY1k1n2bH4PRCQRPN7J9rm6eU4MOih08QGOqUB2hzGMQFrTSiy9BmCLl1EAM0xmUjGocNgJuPfUQFpX9G683flwtPqw5iZdPP9jbH3DjFCJTVtd1YfiZirDAKM8XxGOCvjrZD7mvFN7eUkL%2BFvm4BYr6ehYYwFRL4A%2BKDrLWYKpsaFF0KJYh%2Bi10af1bpN1t4X4vJe3bj3hc7bClNNQpodHt%2FVo8rQ8DA8aekvUUKKxY2auyplaXqIBaPJJJSoZpAj&X-Amz-Signature=075a167a390eaa4a8dd7b366216453304e2f78597fe05a81c50a1efbda15a1ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y4T7J4U%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCICDbHfvIOCxwazdonUpvDE69rqF3jn8SDQcuyIWGK0zIAiEAp%2F48vrxUwCHCOx727upvhsn4MQYtrHxA541yzTbprcMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMaOaAgEiItO9dwZtircAxcKZ3kDsqgW4jQXtjBKhcOLx%2Bd%2BDRMG9dwtCH4dPEwomf8k20rAMOZPAGj2mH1kpyMtmmZ84wClq75KrcOGw6N2fOifDIuAuy2TDGlW4F8dF10OjjZQ3kIoj7776QvPUCAl6%2FLg1djBUMgqaTXk6BonuDUZcs3Jv%2Flb4BI8WtGSJOWLGrsmdggo70f2ZAFn%2FMP5%2BgCXEMOqX3z%2BN8NEyD1uHVq8BBCIgSeQz2VS6jEFrqaPwhMxkkLjeu0dPZJU5wVoirr5xZgyk%2FObonBGNYOEUmjYkYhg19DPsH4PFAMkMAyDDv6yPisgkK%2BY4wNpFrzNhSfkiu4mY9QKyUD%2BGMtVrL9TJ9iiHgx9bQBQPnn%2Fa0nfgxLge2kjj%2FfVekTT15E7%2ForUruTJ8M8TWfE5fwPOSMie4eAKl07pVNqy3MXerjr%2FY6%2BBhxeWW%2BpypX0oI1zxR5PHXOfqYu9pIq41ZW6rsufFKtoRs0rEw8YYsyJbooAurxImyty0j3Ii7wDrUwE5H67vH05N62FNt%2FR4g9%2FZ9CLl1wJsLNbKR99lSrmzmjHznHX%2BnddJWXV7JraNc4qRTeZmdJl7fBOa1c95deSnmTeDha1YG7GY1k1n2bH4PRCQRPN7J9rm6eU4MOih08QGOqUB2hzGMQFrTSiy9BmCLl1EAM0xmUjGocNgJuPfUQFpX9G683flwtPqw5iZdPP9jbH3DjFCJTVtd1YfiZirDAKM8XxGOCvjrZD7mvFN7eUkL%2BFvm4BYr6ehYYwFRL4A%2BKDrLWYKpsaFF0KJYh%2Bi10af1bpN1t4X4vJe3bj3hc7bClNNQpodHt%2FVo8rQ8DA8aekvUUKKxY2auyplaXqIBaPJJJSoZpAj&X-Amz-Signature=7cc086bf8f3cc961a12549514d3a40ba2c922a98dd501ce66aaa8b3c3c352fe8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y4T7J4U%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCICDbHfvIOCxwazdonUpvDE69rqF3jn8SDQcuyIWGK0zIAiEAp%2F48vrxUwCHCOx727upvhsn4MQYtrHxA541yzTbprcMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMaOaAgEiItO9dwZtircAxcKZ3kDsqgW4jQXtjBKhcOLx%2Bd%2BDRMG9dwtCH4dPEwomf8k20rAMOZPAGj2mH1kpyMtmmZ84wClq75KrcOGw6N2fOifDIuAuy2TDGlW4F8dF10OjjZQ3kIoj7776QvPUCAl6%2FLg1djBUMgqaTXk6BonuDUZcs3Jv%2Flb4BI8WtGSJOWLGrsmdggo70f2ZAFn%2FMP5%2BgCXEMOqX3z%2BN8NEyD1uHVq8BBCIgSeQz2VS6jEFrqaPwhMxkkLjeu0dPZJU5wVoirr5xZgyk%2FObonBGNYOEUmjYkYhg19DPsH4PFAMkMAyDDv6yPisgkK%2BY4wNpFrzNhSfkiu4mY9QKyUD%2BGMtVrL9TJ9iiHgx9bQBQPnn%2Fa0nfgxLge2kjj%2FfVekTT15E7%2ForUruTJ8M8TWfE5fwPOSMie4eAKl07pVNqy3MXerjr%2FY6%2BBhxeWW%2BpypX0oI1zxR5PHXOfqYu9pIq41ZW6rsufFKtoRs0rEw8YYsyJbooAurxImyty0j3Ii7wDrUwE5H67vH05N62FNt%2FR4g9%2FZ9CLl1wJsLNbKR99lSrmzmjHznHX%2BnddJWXV7JraNc4qRTeZmdJl7fBOa1c95deSnmTeDha1YG7GY1k1n2bH4PRCQRPN7J9rm6eU4MOih08QGOqUB2hzGMQFrTSiy9BmCLl1EAM0xmUjGocNgJuPfUQFpX9G683flwtPqw5iZdPP9jbH3DjFCJTVtd1YfiZirDAKM8XxGOCvjrZD7mvFN7eUkL%2BFvm4BYr6ehYYwFRL4A%2BKDrLWYKpsaFF0KJYh%2Bi10af1bpN1t4X4vJe3bj3hc7bClNNQpodHt%2FVo8rQ8DA8aekvUUKKxY2auyplaXqIBaPJJJSoZpAj&X-Amz-Signature=974f80cb16e65aae7ec4653766a82d0c33d972051c5d158dd1d814d037ecaa58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y4T7J4U%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCICDbHfvIOCxwazdonUpvDE69rqF3jn8SDQcuyIWGK0zIAiEAp%2F48vrxUwCHCOx727upvhsn4MQYtrHxA541yzTbprcMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMaOaAgEiItO9dwZtircAxcKZ3kDsqgW4jQXtjBKhcOLx%2Bd%2BDRMG9dwtCH4dPEwomf8k20rAMOZPAGj2mH1kpyMtmmZ84wClq75KrcOGw6N2fOifDIuAuy2TDGlW4F8dF10OjjZQ3kIoj7776QvPUCAl6%2FLg1djBUMgqaTXk6BonuDUZcs3Jv%2Flb4BI8WtGSJOWLGrsmdggo70f2ZAFn%2FMP5%2BgCXEMOqX3z%2BN8NEyD1uHVq8BBCIgSeQz2VS6jEFrqaPwhMxkkLjeu0dPZJU5wVoirr5xZgyk%2FObonBGNYOEUmjYkYhg19DPsH4PFAMkMAyDDv6yPisgkK%2BY4wNpFrzNhSfkiu4mY9QKyUD%2BGMtVrL9TJ9iiHgx9bQBQPnn%2Fa0nfgxLge2kjj%2FfVekTT15E7%2ForUruTJ8M8TWfE5fwPOSMie4eAKl07pVNqy3MXerjr%2FY6%2BBhxeWW%2BpypX0oI1zxR5PHXOfqYu9pIq41ZW6rsufFKtoRs0rEw8YYsyJbooAurxImyty0j3Ii7wDrUwE5H67vH05N62FNt%2FR4g9%2FZ9CLl1wJsLNbKR99lSrmzmjHznHX%2BnddJWXV7JraNc4qRTeZmdJl7fBOa1c95deSnmTeDha1YG7GY1k1n2bH4PRCQRPN7J9rm6eU4MOih08QGOqUB2hzGMQFrTSiy9BmCLl1EAM0xmUjGocNgJuPfUQFpX9G683flwtPqw5iZdPP9jbH3DjFCJTVtd1YfiZirDAKM8XxGOCvjrZD7mvFN7eUkL%2BFvm4BYr6ehYYwFRL4A%2BKDrLWYKpsaFF0KJYh%2Bi10af1bpN1t4X4vJe3bj3hc7bClNNQpodHt%2FVo8rQ8DA8aekvUUKKxY2auyplaXqIBaPJJJSoZpAj&X-Amz-Signature=2f0d11b47221874c7692f6330c7cd2c7c6d0eda37576ab414c142d7c8d9b79dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y4T7J4U%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCICDbHfvIOCxwazdonUpvDE69rqF3jn8SDQcuyIWGK0zIAiEAp%2F48vrxUwCHCOx727upvhsn4MQYtrHxA541yzTbprcMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMaOaAgEiItO9dwZtircAxcKZ3kDsqgW4jQXtjBKhcOLx%2Bd%2BDRMG9dwtCH4dPEwomf8k20rAMOZPAGj2mH1kpyMtmmZ84wClq75KrcOGw6N2fOifDIuAuy2TDGlW4F8dF10OjjZQ3kIoj7776QvPUCAl6%2FLg1djBUMgqaTXk6BonuDUZcs3Jv%2Flb4BI8WtGSJOWLGrsmdggo70f2ZAFn%2FMP5%2BgCXEMOqX3z%2BN8NEyD1uHVq8BBCIgSeQz2VS6jEFrqaPwhMxkkLjeu0dPZJU5wVoirr5xZgyk%2FObonBGNYOEUmjYkYhg19DPsH4PFAMkMAyDDv6yPisgkK%2BY4wNpFrzNhSfkiu4mY9QKyUD%2BGMtVrL9TJ9iiHgx9bQBQPnn%2Fa0nfgxLge2kjj%2FfVekTT15E7%2ForUruTJ8M8TWfE5fwPOSMie4eAKl07pVNqy3MXerjr%2FY6%2BBhxeWW%2BpypX0oI1zxR5PHXOfqYu9pIq41ZW6rsufFKtoRs0rEw8YYsyJbooAurxImyty0j3Ii7wDrUwE5H67vH05N62FNt%2FR4g9%2FZ9CLl1wJsLNbKR99lSrmzmjHznHX%2BnddJWXV7JraNc4qRTeZmdJl7fBOa1c95deSnmTeDha1YG7GY1k1n2bH4PRCQRPN7J9rm6eU4MOih08QGOqUB2hzGMQFrTSiy9BmCLl1EAM0xmUjGocNgJuPfUQFpX9G683flwtPqw5iZdPP9jbH3DjFCJTVtd1YfiZirDAKM8XxGOCvjrZD7mvFN7eUkL%2BFvm4BYr6ehYYwFRL4A%2BKDrLWYKpsaFF0KJYh%2Bi10af1bpN1t4X4vJe3bj3hc7bClNNQpodHt%2FVo8rQ8DA8aekvUUKKxY2auyplaXqIBaPJJJSoZpAj&X-Amz-Signature=dd4f134ad260b5d9659f78084aea9df7c2697faaac62d758f4e67c25dac91e2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y4T7J4U%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCICDbHfvIOCxwazdonUpvDE69rqF3jn8SDQcuyIWGK0zIAiEAp%2F48vrxUwCHCOx727upvhsn4MQYtrHxA541yzTbprcMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMaOaAgEiItO9dwZtircAxcKZ3kDsqgW4jQXtjBKhcOLx%2Bd%2BDRMG9dwtCH4dPEwomf8k20rAMOZPAGj2mH1kpyMtmmZ84wClq75KrcOGw6N2fOifDIuAuy2TDGlW4F8dF10OjjZQ3kIoj7776QvPUCAl6%2FLg1djBUMgqaTXk6BonuDUZcs3Jv%2Flb4BI8WtGSJOWLGrsmdggo70f2ZAFn%2FMP5%2BgCXEMOqX3z%2BN8NEyD1uHVq8BBCIgSeQz2VS6jEFrqaPwhMxkkLjeu0dPZJU5wVoirr5xZgyk%2FObonBGNYOEUmjYkYhg19DPsH4PFAMkMAyDDv6yPisgkK%2BY4wNpFrzNhSfkiu4mY9QKyUD%2BGMtVrL9TJ9iiHgx9bQBQPnn%2Fa0nfgxLge2kjj%2FfVekTT15E7%2ForUruTJ8M8TWfE5fwPOSMie4eAKl07pVNqy3MXerjr%2FY6%2BBhxeWW%2BpypX0oI1zxR5PHXOfqYu9pIq41ZW6rsufFKtoRs0rEw8YYsyJbooAurxImyty0j3Ii7wDrUwE5H67vH05N62FNt%2FR4g9%2FZ9CLl1wJsLNbKR99lSrmzmjHznHX%2BnddJWXV7JraNc4qRTeZmdJl7fBOa1c95deSnmTeDha1YG7GY1k1n2bH4PRCQRPN7J9rm6eU4MOih08QGOqUB2hzGMQFrTSiy9BmCLl1EAM0xmUjGocNgJuPfUQFpX9G683flwtPqw5iZdPP9jbH3DjFCJTVtd1YfiZirDAKM8XxGOCvjrZD7mvFN7eUkL%2BFvm4BYr6ehYYwFRL4A%2BKDrLWYKpsaFF0KJYh%2Bi10af1bpN1t4X4vJe3bj3hc7bClNNQpodHt%2FVo8rQ8DA8aekvUUKKxY2auyplaXqIBaPJJJSoZpAj&X-Amz-Signature=04715a8e22eddffb00dc16fc6b53cac7f2250a13cbe946e7a66c714f2b9e10c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y4T7J4U%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCICDbHfvIOCxwazdonUpvDE69rqF3jn8SDQcuyIWGK0zIAiEAp%2F48vrxUwCHCOx727upvhsn4MQYtrHxA541yzTbprcMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMaOaAgEiItO9dwZtircAxcKZ3kDsqgW4jQXtjBKhcOLx%2Bd%2BDRMG9dwtCH4dPEwomf8k20rAMOZPAGj2mH1kpyMtmmZ84wClq75KrcOGw6N2fOifDIuAuy2TDGlW4F8dF10OjjZQ3kIoj7776QvPUCAl6%2FLg1djBUMgqaTXk6BonuDUZcs3Jv%2Flb4BI8WtGSJOWLGrsmdggo70f2ZAFn%2FMP5%2BgCXEMOqX3z%2BN8NEyD1uHVq8BBCIgSeQz2VS6jEFrqaPwhMxkkLjeu0dPZJU5wVoirr5xZgyk%2FObonBGNYOEUmjYkYhg19DPsH4PFAMkMAyDDv6yPisgkK%2BY4wNpFrzNhSfkiu4mY9QKyUD%2BGMtVrL9TJ9iiHgx9bQBQPnn%2Fa0nfgxLge2kjj%2FfVekTT15E7%2ForUruTJ8M8TWfE5fwPOSMie4eAKl07pVNqy3MXerjr%2FY6%2BBhxeWW%2BpypX0oI1zxR5PHXOfqYu9pIq41ZW6rsufFKtoRs0rEw8YYsyJbooAurxImyty0j3Ii7wDrUwE5H67vH05N62FNt%2FR4g9%2FZ9CLl1wJsLNbKR99lSrmzmjHznHX%2BnddJWXV7JraNc4qRTeZmdJl7fBOa1c95deSnmTeDha1YG7GY1k1n2bH4PRCQRPN7J9rm6eU4MOih08QGOqUB2hzGMQFrTSiy9BmCLl1EAM0xmUjGocNgJuPfUQFpX9G683flwtPqw5iZdPP9jbH3DjFCJTVtd1YfiZirDAKM8XxGOCvjrZD7mvFN7eUkL%2BFvm4BYr6ehYYwFRL4A%2BKDrLWYKpsaFF0KJYh%2Bi10af1bpN1t4X4vJe3bj3hc7bClNNQpodHt%2FVo8rQ8DA8aekvUUKKxY2auyplaXqIBaPJJJSoZpAj&X-Amz-Signature=259163fa469ec1b6c86b2b482e5d9d70f504d10eb9b47aee409318b8f1281eb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y4T7J4U%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCICDbHfvIOCxwazdonUpvDE69rqF3jn8SDQcuyIWGK0zIAiEAp%2F48vrxUwCHCOx727upvhsn4MQYtrHxA541yzTbprcMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMaOaAgEiItO9dwZtircAxcKZ3kDsqgW4jQXtjBKhcOLx%2Bd%2BDRMG9dwtCH4dPEwomf8k20rAMOZPAGj2mH1kpyMtmmZ84wClq75KrcOGw6N2fOifDIuAuy2TDGlW4F8dF10OjjZQ3kIoj7776QvPUCAl6%2FLg1djBUMgqaTXk6BonuDUZcs3Jv%2Flb4BI8WtGSJOWLGrsmdggo70f2ZAFn%2FMP5%2BgCXEMOqX3z%2BN8NEyD1uHVq8BBCIgSeQz2VS6jEFrqaPwhMxkkLjeu0dPZJU5wVoirr5xZgyk%2FObonBGNYOEUmjYkYhg19DPsH4PFAMkMAyDDv6yPisgkK%2BY4wNpFrzNhSfkiu4mY9QKyUD%2BGMtVrL9TJ9iiHgx9bQBQPnn%2Fa0nfgxLge2kjj%2FfVekTT15E7%2ForUruTJ8M8TWfE5fwPOSMie4eAKl07pVNqy3MXerjr%2FY6%2BBhxeWW%2BpypX0oI1zxR5PHXOfqYu9pIq41ZW6rsufFKtoRs0rEw8YYsyJbooAurxImyty0j3Ii7wDrUwE5H67vH05N62FNt%2FR4g9%2FZ9CLl1wJsLNbKR99lSrmzmjHznHX%2BnddJWXV7JraNc4qRTeZmdJl7fBOa1c95deSnmTeDha1YG7GY1k1n2bH4PRCQRPN7J9rm6eU4MOih08QGOqUB2hzGMQFrTSiy9BmCLl1EAM0xmUjGocNgJuPfUQFpX9G683flwtPqw5iZdPP9jbH3DjFCJTVtd1YfiZirDAKM8XxGOCvjrZD7mvFN7eUkL%2BFvm4BYr6ehYYwFRL4A%2BKDrLWYKpsaFF0KJYh%2Bi10af1bpN1t4X4vJe3bj3hc7bClNNQpodHt%2FVo8rQ8DA8aekvUUKKxY2auyplaXqIBaPJJJSoZpAj&X-Amz-Signature=77bc3b5caeec805fddf891f968b6401d0087510c0b433869b51b42e54b248647&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
