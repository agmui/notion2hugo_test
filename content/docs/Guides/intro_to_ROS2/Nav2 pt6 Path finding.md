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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VKO2GJV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDaQDWYSENrwXQsZA%2BPCoKJJik2Mtt3TCuMD8QmAMUGEwIgHFNtWAy5qaAs5WGhpW9%2BsBofs%2BX8XM2fd2DwQN%2FayjcqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbtFQljQBugjJIxdCrcA53E90gdE9q2nUM3PBHhU0STqeL6du%2BQC%2FSGu1yQGV31ftw4l7MJua3YJcPQwIMlGV%2FbMUE3CMT98WjU266DhCGZNS%2FoxtB9m727iV79Ylr68HnHdIVS4w3j5za83fBqPiURfZsS3jUzTs81%2FJPyqTBNZgw2ruKeCNQ7UZZMRe%2BY9XC8LwH9OGNf5zg%2FN0tHQzZqcdBN%2FEhoUIO91vrGqJyR2Da9yISucK9tMNxitFiZFsMhBadz18Gv9457KbjKHq8skv2b4Xzg%2ByWlknp9gCjNHWiXWwpjvSgWBem%2FMnIgmv35lvblCqkwd9jmw5M%2BuUXfT%2FrU0wcFVvz%2BxrO1s5mQxOk4KnhRpU05yFgkTi0eAhwk0dkt%2BiwtEREmS6d1BPIgsR1X72a9iOEPUoqw6SIJm1QB89hkcN04EEAtkmtWR3ENGhfyCm2KT8LNf25Lqd73x7RDpuCgVR9REX7cWIuyfAjf%2BZrfO1YryyfXIF4YI6bnG1AujN8tBQARvV4j%2B%2FK0Jyj0q0wPAAjLIl7aMGh415RJmDsTTcOSG7%2BVkhKOcRvqvlePLSVUD1wAR3dIx8cXIea8uf3IorlWHl%2BktvF84i%2FawGBPIq8%2FyYX%2BxNWtxf1dADx2mZmjjmZLMMbs0MQGOqUBOrgXRiYOPhqxEBuPkon%2BQzcLCkXrwt8Ijp%2Byd5jMJjN3Ovsh8gZE3s%2F2kZC4mS%2FYvzqdgEH7hrdI9U3ueaKbyP9cdApvXrZUyxdb%2FRE6sngx%2F2rNHkMulPtc5ijll8fuBC%2BKgWWLXv2a5jkVNLKm3C4W985rE7JNTDcn5%2BDbq%2BcBa%2B9ZOkPz3Cz4ty6nfkiek5VsWSz9GbF7Gl5EMq9qsFgmGWnD&X-Amz-Signature=e4c6e5b4a7941789adde1da2fdedb2e2079a18dd2a63480affaa4c7b32f1f269&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VKO2GJV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDaQDWYSENrwXQsZA%2BPCoKJJik2Mtt3TCuMD8QmAMUGEwIgHFNtWAy5qaAs5WGhpW9%2BsBofs%2BX8XM2fd2DwQN%2FayjcqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbtFQljQBugjJIxdCrcA53E90gdE9q2nUM3PBHhU0STqeL6du%2BQC%2FSGu1yQGV31ftw4l7MJua3YJcPQwIMlGV%2FbMUE3CMT98WjU266DhCGZNS%2FoxtB9m727iV79Ylr68HnHdIVS4w3j5za83fBqPiURfZsS3jUzTs81%2FJPyqTBNZgw2ruKeCNQ7UZZMRe%2BY9XC8LwH9OGNf5zg%2FN0tHQzZqcdBN%2FEhoUIO91vrGqJyR2Da9yISucK9tMNxitFiZFsMhBadz18Gv9457KbjKHq8skv2b4Xzg%2ByWlknp9gCjNHWiXWwpjvSgWBem%2FMnIgmv35lvblCqkwd9jmw5M%2BuUXfT%2FrU0wcFVvz%2BxrO1s5mQxOk4KnhRpU05yFgkTi0eAhwk0dkt%2BiwtEREmS6d1BPIgsR1X72a9iOEPUoqw6SIJm1QB89hkcN04EEAtkmtWR3ENGhfyCm2KT8LNf25Lqd73x7RDpuCgVR9REX7cWIuyfAjf%2BZrfO1YryyfXIF4YI6bnG1AujN8tBQARvV4j%2B%2FK0Jyj0q0wPAAjLIl7aMGh415RJmDsTTcOSG7%2BVkhKOcRvqvlePLSVUD1wAR3dIx8cXIea8uf3IorlWHl%2BktvF84i%2FawGBPIq8%2FyYX%2BxNWtxf1dADx2mZmjjmZLMMbs0MQGOqUBOrgXRiYOPhqxEBuPkon%2BQzcLCkXrwt8Ijp%2Byd5jMJjN3Ovsh8gZE3s%2F2kZC4mS%2FYvzqdgEH7hrdI9U3ueaKbyP9cdApvXrZUyxdb%2FRE6sngx%2F2rNHkMulPtc5ijll8fuBC%2BKgWWLXv2a5jkVNLKm3C4W985rE7JNTDcn5%2BDbq%2BcBa%2B9ZOkPz3Cz4ty6nfkiek5VsWSz9GbF7Gl5EMq9qsFgmGWnD&X-Amz-Signature=acb549fe025090e00eff608217e38a1ef68f5c6f4b299210a443161c5a8d800c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VKO2GJV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDaQDWYSENrwXQsZA%2BPCoKJJik2Mtt3TCuMD8QmAMUGEwIgHFNtWAy5qaAs5WGhpW9%2BsBofs%2BX8XM2fd2DwQN%2FayjcqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbtFQljQBugjJIxdCrcA53E90gdE9q2nUM3PBHhU0STqeL6du%2BQC%2FSGu1yQGV31ftw4l7MJua3YJcPQwIMlGV%2FbMUE3CMT98WjU266DhCGZNS%2FoxtB9m727iV79Ylr68HnHdIVS4w3j5za83fBqPiURfZsS3jUzTs81%2FJPyqTBNZgw2ruKeCNQ7UZZMRe%2BY9XC8LwH9OGNf5zg%2FN0tHQzZqcdBN%2FEhoUIO91vrGqJyR2Da9yISucK9tMNxitFiZFsMhBadz18Gv9457KbjKHq8skv2b4Xzg%2ByWlknp9gCjNHWiXWwpjvSgWBem%2FMnIgmv35lvblCqkwd9jmw5M%2BuUXfT%2FrU0wcFVvz%2BxrO1s5mQxOk4KnhRpU05yFgkTi0eAhwk0dkt%2BiwtEREmS6d1BPIgsR1X72a9iOEPUoqw6SIJm1QB89hkcN04EEAtkmtWR3ENGhfyCm2KT8LNf25Lqd73x7RDpuCgVR9REX7cWIuyfAjf%2BZrfO1YryyfXIF4YI6bnG1AujN8tBQARvV4j%2B%2FK0Jyj0q0wPAAjLIl7aMGh415RJmDsTTcOSG7%2BVkhKOcRvqvlePLSVUD1wAR3dIx8cXIea8uf3IorlWHl%2BktvF84i%2FawGBPIq8%2FyYX%2BxNWtxf1dADx2mZmjjmZLMMbs0MQGOqUBOrgXRiYOPhqxEBuPkon%2BQzcLCkXrwt8Ijp%2Byd5jMJjN3Ovsh8gZE3s%2F2kZC4mS%2FYvzqdgEH7hrdI9U3ueaKbyP9cdApvXrZUyxdb%2FRE6sngx%2F2rNHkMulPtc5ijll8fuBC%2BKgWWLXv2a5jkVNLKm3C4W985rE7JNTDcn5%2BDbq%2BcBa%2B9ZOkPz3Cz4ty6nfkiek5VsWSz9GbF7Gl5EMq9qsFgmGWnD&X-Amz-Signature=0f95c0e56cf7ccca91410a7161191d0299f9bb5b54218f539d2a6717ab806d33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VKO2GJV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDaQDWYSENrwXQsZA%2BPCoKJJik2Mtt3TCuMD8QmAMUGEwIgHFNtWAy5qaAs5WGhpW9%2BsBofs%2BX8XM2fd2DwQN%2FayjcqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbtFQljQBugjJIxdCrcA53E90gdE9q2nUM3PBHhU0STqeL6du%2BQC%2FSGu1yQGV31ftw4l7MJua3YJcPQwIMlGV%2FbMUE3CMT98WjU266DhCGZNS%2FoxtB9m727iV79Ylr68HnHdIVS4w3j5za83fBqPiURfZsS3jUzTs81%2FJPyqTBNZgw2ruKeCNQ7UZZMRe%2BY9XC8LwH9OGNf5zg%2FN0tHQzZqcdBN%2FEhoUIO91vrGqJyR2Da9yISucK9tMNxitFiZFsMhBadz18Gv9457KbjKHq8skv2b4Xzg%2ByWlknp9gCjNHWiXWwpjvSgWBem%2FMnIgmv35lvblCqkwd9jmw5M%2BuUXfT%2FrU0wcFVvz%2BxrO1s5mQxOk4KnhRpU05yFgkTi0eAhwk0dkt%2BiwtEREmS6d1BPIgsR1X72a9iOEPUoqw6SIJm1QB89hkcN04EEAtkmtWR3ENGhfyCm2KT8LNf25Lqd73x7RDpuCgVR9REX7cWIuyfAjf%2BZrfO1YryyfXIF4YI6bnG1AujN8tBQARvV4j%2B%2FK0Jyj0q0wPAAjLIl7aMGh415RJmDsTTcOSG7%2BVkhKOcRvqvlePLSVUD1wAR3dIx8cXIea8uf3IorlWHl%2BktvF84i%2FawGBPIq8%2FyYX%2BxNWtxf1dADx2mZmjjmZLMMbs0MQGOqUBOrgXRiYOPhqxEBuPkon%2BQzcLCkXrwt8Ijp%2Byd5jMJjN3Ovsh8gZE3s%2F2kZC4mS%2FYvzqdgEH7hrdI9U3ueaKbyP9cdApvXrZUyxdb%2FRE6sngx%2F2rNHkMulPtc5ijll8fuBC%2BKgWWLXv2a5jkVNLKm3C4W985rE7JNTDcn5%2BDbq%2BcBa%2B9ZOkPz3Cz4ty6nfkiek5VsWSz9GbF7Gl5EMq9qsFgmGWnD&X-Amz-Signature=ec65b497add2afcc1471df4ed22812a5ef5e3535f269771cfcadd9b5549de2c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VKO2GJV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDaQDWYSENrwXQsZA%2BPCoKJJik2Mtt3TCuMD8QmAMUGEwIgHFNtWAy5qaAs5WGhpW9%2BsBofs%2BX8XM2fd2DwQN%2FayjcqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbtFQljQBugjJIxdCrcA53E90gdE9q2nUM3PBHhU0STqeL6du%2BQC%2FSGu1yQGV31ftw4l7MJua3YJcPQwIMlGV%2FbMUE3CMT98WjU266DhCGZNS%2FoxtB9m727iV79Ylr68HnHdIVS4w3j5za83fBqPiURfZsS3jUzTs81%2FJPyqTBNZgw2ruKeCNQ7UZZMRe%2BY9XC8LwH9OGNf5zg%2FN0tHQzZqcdBN%2FEhoUIO91vrGqJyR2Da9yISucK9tMNxitFiZFsMhBadz18Gv9457KbjKHq8skv2b4Xzg%2ByWlknp9gCjNHWiXWwpjvSgWBem%2FMnIgmv35lvblCqkwd9jmw5M%2BuUXfT%2FrU0wcFVvz%2BxrO1s5mQxOk4KnhRpU05yFgkTi0eAhwk0dkt%2BiwtEREmS6d1BPIgsR1X72a9iOEPUoqw6SIJm1QB89hkcN04EEAtkmtWR3ENGhfyCm2KT8LNf25Lqd73x7RDpuCgVR9REX7cWIuyfAjf%2BZrfO1YryyfXIF4YI6bnG1AujN8tBQARvV4j%2B%2FK0Jyj0q0wPAAjLIl7aMGh415RJmDsTTcOSG7%2BVkhKOcRvqvlePLSVUD1wAR3dIx8cXIea8uf3IorlWHl%2BktvF84i%2FawGBPIq8%2FyYX%2BxNWtxf1dADx2mZmjjmZLMMbs0MQGOqUBOrgXRiYOPhqxEBuPkon%2BQzcLCkXrwt8Ijp%2Byd5jMJjN3Ovsh8gZE3s%2F2kZC4mS%2FYvzqdgEH7hrdI9U3ueaKbyP9cdApvXrZUyxdb%2FRE6sngx%2F2rNHkMulPtc5ijll8fuBC%2BKgWWLXv2a5jkVNLKm3C4W985rE7JNTDcn5%2BDbq%2BcBa%2B9ZOkPz3Cz4ty6nfkiek5VsWSz9GbF7Gl5EMq9qsFgmGWnD&X-Amz-Signature=7a76f0e176e5e7ad533ef0c3bbdd7e8e597d21eb5e1498005bbe0af0a6e57a4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VKO2GJV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDaQDWYSENrwXQsZA%2BPCoKJJik2Mtt3TCuMD8QmAMUGEwIgHFNtWAy5qaAs5WGhpW9%2BsBofs%2BX8XM2fd2DwQN%2FayjcqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbtFQljQBugjJIxdCrcA53E90gdE9q2nUM3PBHhU0STqeL6du%2BQC%2FSGu1yQGV31ftw4l7MJua3YJcPQwIMlGV%2FbMUE3CMT98WjU266DhCGZNS%2FoxtB9m727iV79Ylr68HnHdIVS4w3j5za83fBqPiURfZsS3jUzTs81%2FJPyqTBNZgw2ruKeCNQ7UZZMRe%2BY9XC8LwH9OGNf5zg%2FN0tHQzZqcdBN%2FEhoUIO91vrGqJyR2Da9yISucK9tMNxitFiZFsMhBadz18Gv9457KbjKHq8skv2b4Xzg%2ByWlknp9gCjNHWiXWwpjvSgWBem%2FMnIgmv35lvblCqkwd9jmw5M%2BuUXfT%2FrU0wcFVvz%2BxrO1s5mQxOk4KnhRpU05yFgkTi0eAhwk0dkt%2BiwtEREmS6d1BPIgsR1X72a9iOEPUoqw6SIJm1QB89hkcN04EEAtkmtWR3ENGhfyCm2KT8LNf25Lqd73x7RDpuCgVR9REX7cWIuyfAjf%2BZrfO1YryyfXIF4YI6bnG1AujN8tBQARvV4j%2B%2FK0Jyj0q0wPAAjLIl7aMGh415RJmDsTTcOSG7%2BVkhKOcRvqvlePLSVUD1wAR3dIx8cXIea8uf3IorlWHl%2BktvF84i%2FawGBPIq8%2FyYX%2BxNWtxf1dADx2mZmjjmZLMMbs0MQGOqUBOrgXRiYOPhqxEBuPkon%2BQzcLCkXrwt8Ijp%2Byd5jMJjN3Ovsh8gZE3s%2F2kZC4mS%2FYvzqdgEH7hrdI9U3ueaKbyP9cdApvXrZUyxdb%2FRE6sngx%2F2rNHkMulPtc5ijll8fuBC%2BKgWWLXv2a5jkVNLKm3C4W985rE7JNTDcn5%2BDbq%2BcBa%2B9ZOkPz3Cz4ty6nfkiek5VsWSz9GbF7Gl5EMq9qsFgmGWnD&X-Amz-Signature=aa87adf3702f2ce6fbb9a8f5d15fd693b07832097cb2a1f5cc2b51c7062e236a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VKO2GJV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDaQDWYSENrwXQsZA%2BPCoKJJik2Mtt3TCuMD8QmAMUGEwIgHFNtWAy5qaAs5WGhpW9%2BsBofs%2BX8XM2fd2DwQN%2FayjcqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbtFQljQBugjJIxdCrcA53E90gdE9q2nUM3PBHhU0STqeL6du%2BQC%2FSGu1yQGV31ftw4l7MJua3YJcPQwIMlGV%2FbMUE3CMT98WjU266DhCGZNS%2FoxtB9m727iV79Ylr68HnHdIVS4w3j5za83fBqPiURfZsS3jUzTs81%2FJPyqTBNZgw2ruKeCNQ7UZZMRe%2BY9XC8LwH9OGNf5zg%2FN0tHQzZqcdBN%2FEhoUIO91vrGqJyR2Da9yISucK9tMNxitFiZFsMhBadz18Gv9457KbjKHq8skv2b4Xzg%2ByWlknp9gCjNHWiXWwpjvSgWBem%2FMnIgmv35lvblCqkwd9jmw5M%2BuUXfT%2FrU0wcFVvz%2BxrO1s5mQxOk4KnhRpU05yFgkTi0eAhwk0dkt%2BiwtEREmS6d1BPIgsR1X72a9iOEPUoqw6SIJm1QB89hkcN04EEAtkmtWR3ENGhfyCm2KT8LNf25Lqd73x7RDpuCgVR9REX7cWIuyfAjf%2BZrfO1YryyfXIF4YI6bnG1AujN8tBQARvV4j%2B%2FK0Jyj0q0wPAAjLIl7aMGh415RJmDsTTcOSG7%2BVkhKOcRvqvlePLSVUD1wAR3dIx8cXIea8uf3IorlWHl%2BktvF84i%2FawGBPIq8%2FyYX%2BxNWtxf1dADx2mZmjjmZLMMbs0MQGOqUBOrgXRiYOPhqxEBuPkon%2BQzcLCkXrwt8Ijp%2Byd5jMJjN3Ovsh8gZE3s%2F2kZC4mS%2FYvzqdgEH7hrdI9U3ueaKbyP9cdApvXrZUyxdb%2FRE6sngx%2F2rNHkMulPtc5ijll8fuBC%2BKgWWLXv2a5jkVNLKm3C4W985rE7JNTDcn5%2BDbq%2BcBa%2B9ZOkPz3Cz4ty6nfkiek5VsWSz9GbF7Gl5EMq9qsFgmGWnD&X-Amz-Signature=f1b931df2c10a9c919eb0903bb2289681f961caa5c70e48feb2217d21d8e41ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VKO2GJV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDaQDWYSENrwXQsZA%2BPCoKJJik2Mtt3TCuMD8QmAMUGEwIgHFNtWAy5qaAs5WGhpW9%2BsBofs%2BX8XM2fd2DwQN%2FayjcqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbtFQljQBugjJIxdCrcA53E90gdE9q2nUM3PBHhU0STqeL6du%2BQC%2FSGu1yQGV31ftw4l7MJua3YJcPQwIMlGV%2FbMUE3CMT98WjU266DhCGZNS%2FoxtB9m727iV79Ylr68HnHdIVS4w3j5za83fBqPiURfZsS3jUzTs81%2FJPyqTBNZgw2ruKeCNQ7UZZMRe%2BY9XC8LwH9OGNf5zg%2FN0tHQzZqcdBN%2FEhoUIO91vrGqJyR2Da9yISucK9tMNxitFiZFsMhBadz18Gv9457KbjKHq8skv2b4Xzg%2ByWlknp9gCjNHWiXWwpjvSgWBem%2FMnIgmv35lvblCqkwd9jmw5M%2BuUXfT%2FrU0wcFVvz%2BxrO1s5mQxOk4KnhRpU05yFgkTi0eAhwk0dkt%2BiwtEREmS6d1BPIgsR1X72a9iOEPUoqw6SIJm1QB89hkcN04EEAtkmtWR3ENGhfyCm2KT8LNf25Lqd73x7RDpuCgVR9REX7cWIuyfAjf%2BZrfO1YryyfXIF4YI6bnG1AujN8tBQARvV4j%2B%2FK0Jyj0q0wPAAjLIl7aMGh415RJmDsTTcOSG7%2BVkhKOcRvqvlePLSVUD1wAR3dIx8cXIea8uf3IorlWHl%2BktvF84i%2FawGBPIq8%2FyYX%2BxNWtxf1dADx2mZmjjmZLMMbs0MQGOqUBOrgXRiYOPhqxEBuPkon%2BQzcLCkXrwt8Ijp%2Byd5jMJjN3Ovsh8gZE3s%2F2kZC4mS%2FYvzqdgEH7hrdI9U3ueaKbyP9cdApvXrZUyxdb%2FRE6sngx%2F2rNHkMulPtc5ijll8fuBC%2BKgWWLXv2a5jkVNLKm3C4W985rE7JNTDcn5%2BDbq%2BcBa%2B9ZOkPz3Cz4ty6nfkiek5VsWSz9GbF7Gl5EMq9qsFgmGWnD&X-Amz-Signature=7628c26ad8eafa4cdd110b575b70ca3b6e798e10b6b7ae8e2fe5154044aec92c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VKO2GJV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDaQDWYSENrwXQsZA%2BPCoKJJik2Mtt3TCuMD8QmAMUGEwIgHFNtWAy5qaAs5WGhpW9%2BsBofs%2BX8XM2fd2DwQN%2FayjcqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbtFQljQBugjJIxdCrcA53E90gdE9q2nUM3PBHhU0STqeL6du%2BQC%2FSGu1yQGV31ftw4l7MJua3YJcPQwIMlGV%2FbMUE3CMT98WjU266DhCGZNS%2FoxtB9m727iV79Ylr68HnHdIVS4w3j5za83fBqPiURfZsS3jUzTs81%2FJPyqTBNZgw2ruKeCNQ7UZZMRe%2BY9XC8LwH9OGNf5zg%2FN0tHQzZqcdBN%2FEhoUIO91vrGqJyR2Da9yISucK9tMNxitFiZFsMhBadz18Gv9457KbjKHq8skv2b4Xzg%2ByWlknp9gCjNHWiXWwpjvSgWBem%2FMnIgmv35lvblCqkwd9jmw5M%2BuUXfT%2FrU0wcFVvz%2BxrO1s5mQxOk4KnhRpU05yFgkTi0eAhwk0dkt%2BiwtEREmS6d1BPIgsR1X72a9iOEPUoqw6SIJm1QB89hkcN04EEAtkmtWR3ENGhfyCm2KT8LNf25Lqd73x7RDpuCgVR9REX7cWIuyfAjf%2BZrfO1YryyfXIF4YI6bnG1AujN8tBQARvV4j%2B%2FK0Jyj0q0wPAAjLIl7aMGh415RJmDsTTcOSG7%2BVkhKOcRvqvlePLSVUD1wAR3dIx8cXIea8uf3IorlWHl%2BktvF84i%2FawGBPIq8%2FyYX%2BxNWtxf1dADx2mZmjjmZLMMbs0MQGOqUBOrgXRiYOPhqxEBuPkon%2BQzcLCkXrwt8Ijp%2Byd5jMJjN3Ovsh8gZE3s%2F2kZC4mS%2FYvzqdgEH7hrdI9U3ueaKbyP9cdApvXrZUyxdb%2FRE6sngx%2F2rNHkMulPtc5ijll8fuBC%2BKgWWLXv2a5jkVNLKm3C4W985rE7JNTDcn5%2BDbq%2BcBa%2B9ZOkPz3Cz4ty6nfkiek5VsWSz9GbF7Gl5EMq9qsFgmGWnD&X-Amz-Signature=477303bace13265cf7ec423468f34eccff63071df9a90019bb52df10e10e2766&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VKO2GJV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDaQDWYSENrwXQsZA%2BPCoKJJik2Mtt3TCuMD8QmAMUGEwIgHFNtWAy5qaAs5WGhpW9%2BsBofs%2BX8XM2fd2DwQN%2FayjcqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbtFQljQBugjJIxdCrcA53E90gdE9q2nUM3PBHhU0STqeL6du%2BQC%2FSGu1yQGV31ftw4l7MJua3YJcPQwIMlGV%2FbMUE3CMT98WjU266DhCGZNS%2FoxtB9m727iV79Ylr68HnHdIVS4w3j5za83fBqPiURfZsS3jUzTs81%2FJPyqTBNZgw2ruKeCNQ7UZZMRe%2BY9XC8LwH9OGNf5zg%2FN0tHQzZqcdBN%2FEhoUIO91vrGqJyR2Da9yISucK9tMNxitFiZFsMhBadz18Gv9457KbjKHq8skv2b4Xzg%2ByWlknp9gCjNHWiXWwpjvSgWBem%2FMnIgmv35lvblCqkwd9jmw5M%2BuUXfT%2FrU0wcFVvz%2BxrO1s5mQxOk4KnhRpU05yFgkTi0eAhwk0dkt%2BiwtEREmS6d1BPIgsR1X72a9iOEPUoqw6SIJm1QB89hkcN04EEAtkmtWR3ENGhfyCm2KT8LNf25Lqd73x7RDpuCgVR9REX7cWIuyfAjf%2BZrfO1YryyfXIF4YI6bnG1AujN8tBQARvV4j%2B%2FK0Jyj0q0wPAAjLIl7aMGh415RJmDsTTcOSG7%2BVkhKOcRvqvlePLSVUD1wAR3dIx8cXIea8uf3IorlWHl%2BktvF84i%2FawGBPIq8%2FyYX%2BxNWtxf1dADx2mZmjjmZLMMbs0MQGOqUBOrgXRiYOPhqxEBuPkon%2BQzcLCkXrwt8Ijp%2Byd5jMJjN3Ovsh8gZE3s%2F2kZC4mS%2FYvzqdgEH7hrdI9U3ueaKbyP9cdApvXrZUyxdb%2FRE6sngx%2F2rNHkMulPtc5ijll8fuBC%2BKgWWLXv2a5jkVNLKm3C4W985rE7JNTDcn5%2BDbq%2BcBa%2B9ZOkPz3Cz4ty6nfkiek5VsWSz9GbF7Gl5EMq9qsFgmGWnD&X-Amz-Signature=ab3690cb1ff3e149be1d3a57e1b2e966558cb10d4c033e77832dc50077b03d90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VKO2GJV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDaQDWYSENrwXQsZA%2BPCoKJJik2Mtt3TCuMD8QmAMUGEwIgHFNtWAy5qaAs5WGhpW9%2BsBofs%2BX8XM2fd2DwQN%2FayjcqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbtFQljQBugjJIxdCrcA53E90gdE9q2nUM3PBHhU0STqeL6du%2BQC%2FSGu1yQGV31ftw4l7MJua3YJcPQwIMlGV%2FbMUE3CMT98WjU266DhCGZNS%2FoxtB9m727iV79Ylr68HnHdIVS4w3j5za83fBqPiURfZsS3jUzTs81%2FJPyqTBNZgw2ruKeCNQ7UZZMRe%2BY9XC8LwH9OGNf5zg%2FN0tHQzZqcdBN%2FEhoUIO91vrGqJyR2Da9yISucK9tMNxitFiZFsMhBadz18Gv9457KbjKHq8skv2b4Xzg%2ByWlknp9gCjNHWiXWwpjvSgWBem%2FMnIgmv35lvblCqkwd9jmw5M%2BuUXfT%2FrU0wcFVvz%2BxrO1s5mQxOk4KnhRpU05yFgkTi0eAhwk0dkt%2BiwtEREmS6d1BPIgsR1X72a9iOEPUoqw6SIJm1QB89hkcN04EEAtkmtWR3ENGhfyCm2KT8LNf25Lqd73x7RDpuCgVR9REX7cWIuyfAjf%2BZrfO1YryyfXIF4YI6bnG1AujN8tBQARvV4j%2B%2FK0Jyj0q0wPAAjLIl7aMGh415RJmDsTTcOSG7%2BVkhKOcRvqvlePLSVUD1wAR3dIx8cXIea8uf3IorlWHl%2BktvF84i%2FawGBPIq8%2FyYX%2BxNWtxf1dADx2mZmjjmZLMMbs0MQGOqUBOrgXRiYOPhqxEBuPkon%2BQzcLCkXrwt8Ijp%2Byd5jMJjN3Ovsh8gZE3s%2F2kZC4mS%2FYvzqdgEH7hrdI9U3ueaKbyP9cdApvXrZUyxdb%2FRE6sngx%2F2rNHkMulPtc5ijll8fuBC%2BKgWWLXv2a5jkVNLKm3C4W985rE7JNTDcn5%2BDbq%2BcBa%2B9ZOkPz3Cz4ty6nfkiek5VsWSz9GbF7Gl5EMq9qsFgmGWnD&X-Amz-Signature=704be429938bde7c27c66bc69d335735170fe092dc721e54edd5549f4d732cfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VKO2GJV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDaQDWYSENrwXQsZA%2BPCoKJJik2Mtt3TCuMD8QmAMUGEwIgHFNtWAy5qaAs5WGhpW9%2BsBofs%2BX8XM2fd2DwQN%2FayjcqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbtFQljQBugjJIxdCrcA53E90gdE9q2nUM3PBHhU0STqeL6du%2BQC%2FSGu1yQGV31ftw4l7MJua3YJcPQwIMlGV%2FbMUE3CMT98WjU266DhCGZNS%2FoxtB9m727iV79Ylr68HnHdIVS4w3j5za83fBqPiURfZsS3jUzTs81%2FJPyqTBNZgw2ruKeCNQ7UZZMRe%2BY9XC8LwH9OGNf5zg%2FN0tHQzZqcdBN%2FEhoUIO91vrGqJyR2Da9yISucK9tMNxitFiZFsMhBadz18Gv9457KbjKHq8skv2b4Xzg%2ByWlknp9gCjNHWiXWwpjvSgWBem%2FMnIgmv35lvblCqkwd9jmw5M%2BuUXfT%2FrU0wcFVvz%2BxrO1s5mQxOk4KnhRpU05yFgkTi0eAhwk0dkt%2BiwtEREmS6d1BPIgsR1X72a9iOEPUoqw6SIJm1QB89hkcN04EEAtkmtWR3ENGhfyCm2KT8LNf25Lqd73x7RDpuCgVR9REX7cWIuyfAjf%2BZrfO1YryyfXIF4YI6bnG1AujN8tBQARvV4j%2B%2FK0Jyj0q0wPAAjLIl7aMGh415RJmDsTTcOSG7%2BVkhKOcRvqvlePLSVUD1wAR3dIx8cXIea8uf3IorlWHl%2BktvF84i%2FawGBPIq8%2FyYX%2BxNWtxf1dADx2mZmjjmZLMMbs0MQGOqUBOrgXRiYOPhqxEBuPkon%2BQzcLCkXrwt8Ijp%2Byd5jMJjN3Ovsh8gZE3s%2F2kZC4mS%2FYvzqdgEH7hrdI9U3ueaKbyP9cdApvXrZUyxdb%2FRE6sngx%2F2rNHkMulPtc5ijll8fuBC%2BKgWWLXv2a5jkVNLKm3C4W985rE7JNTDcn5%2BDbq%2BcBa%2B9ZOkPz3Cz4ty6nfkiek5VsWSz9GbF7Gl5EMq9qsFgmGWnD&X-Amz-Signature=ceb34f4de9639063a0ca9def4a9e6aee945bbe6c7e801979ef3dfee658b0fbb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VKO2GJV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDaQDWYSENrwXQsZA%2BPCoKJJik2Mtt3TCuMD8QmAMUGEwIgHFNtWAy5qaAs5WGhpW9%2BsBofs%2BX8XM2fd2DwQN%2FayjcqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbtFQljQBugjJIxdCrcA53E90gdE9q2nUM3PBHhU0STqeL6du%2BQC%2FSGu1yQGV31ftw4l7MJua3YJcPQwIMlGV%2FbMUE3CMT98WjU266DhCGZNS%2FoxtB9m727iV79Ylr68HnHdIVS4w3j5za83fBqPiURfZsS3jUzTs81%2FJPyqTBNZgw2ruKeCNQ7UZZMRe%2BY9XC8LwH9OGNf5zg%2FN0tHQzZqcdBN%2FEhoUIO91vrGqJyR2Da9yISucK9tMNxitFiZFsMhBadz18Gv9457KbjKHq8skv2b4Xzg%2ByWlknp9gCjNHWiXWwpjvSgWBem%2FMnIgmv35lvblCqkwd9jmw5M%2BuUXfT%2FrU0wcFVvz%2BxrO1s5mQxOk4KnhRpU05yFgkTi0eAhwk0dkt%2BiwtEREmS6d1BPIgsR1X72a9iOEPUoqw6SIJm1QB89hkcN04EEAtkmtWR3ENGhfyCm2KT8LNf25Lqd73x7RDpuCgVR9REX7cWIuyfAjf%2BZrfO1YryyfXIF4YI6bnG1AujN8tBQARvV4j%2B%2FK0Jyj0q0wPAAjLIl7aMGh415RJmDsTTcOSG7%2BVkhKOcRvqvlePLSVUD1wAR3dIx8cXIea8uf3IorlWHl%2BktvF84i%2FawGBPIq8%2FyYX%2BxNWtxf1dADx2mZmjjmZLMMbs0MQGOqUBOrgXRiYOPhqxEBuPkon%2BQzcLCkXrwt8Ijp%2Byd5jMJjN3Ovsh8gZE3s%2F2kZC4mS%2FYvzqdgEH7hrdI9U3ueaKbyP9cdApvXrZUyxdb%2FRE6sngx%2F2rNHkMulPtc5ijll8fuBC%2BKgWWLXv2a5jkVNLKm3C4W985rE7JNTDcn5%2BDbq%2BcBa%2B9ZOkPz3Cz4ty6nfkiek5VsWSz9GbF7Gl5EMq9qsFgmGWnD&X-Amz-Signature=1bd05911b9dd8d074a3bc6c72f1fcd0134fa5d96b92e596a7c0bec4218559802&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
