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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAIDTT4O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCz8cGfH08Zo0zd2u5UGvzDJeVe%2Fe%2Bj8zZcVP07D4oavgIhAIRCW9vfe0zY5pMQ6lXqUUKHTtj8rgeLvehw67baJdGYKv8DCFcQABoMNjM3NDIzMTgzODA1IgwW6T2i6bE1ny%2B7bU8q3AMRm%2FCFdpfvDYDocrfOm31jiMKijT3dILGD%2BFzZWsC%2FrZYiOy2%2BtgXQXe1rVX%2FObyB6JQjl9xV2%2BAJF20VLaPR5KjJbSRmih7mrCiiM%2BxNHmKhrTcIaVn1qZff%2Frlwwrg2qtu68Pz8TEnPYApBnU09ps%2BmwF72lfvCGUaEadMQb33bCThYQxTvP4HpEBKgmgudPxp8igyH1ceKNdBt9Ite0dtyZuwTa6LPqSh8Mgyo0pKzF04Vt14yuoZ%2Fz4ob8aefPdWIIcVoYgEHXUfgQI89gJsvwosu6WAf81P9djGV7KXdnlXU68jRQMUz6ZUCAwuOnFnifFrR6Za2%2FUP7BUbuaVHMmB8JxCbbJwJ2Ba9Dsm0uhedZlMWE5mM1v7D1lr2fqGCybe9sjGwZweKOc10gGtMwCEoeQ5zwyg048YBd8Q5b5uosNz7AGFDOnvaFk50woQJ1vYJhTuZLyhUcXsyw%2FbSdB1efRgiP5PQLkK9KYrPk780ueonCMkKPpdnbbcrSdTvb3sMJRxwbwL2sUsrDpI7zF%2Bbvs%2FZiFfnoi2u9FI82yYPkfU0PpnF1cp9PMJYPd55W1OfiYhUGWvzmyJRc8pij3vGE2TqKjCuRdX%2BB9ETVb8xeAI%2BCD15barTD2o%2FvEBjqkAYHOx7Cm0FcueReunAkj3IzEHGioxfjvJimwmS8tsf9O7eIiEXwTRM3fnRyns7z31ZGckV9Xc92V%2FmBUAPm5WPazod%2Bx3AfC76bHbKY6LHsJxpZVB%2FIhPkxaM6n%2FpguJ48n6aghkYr%2BJik23SKppeEASONJVS5f4LEWFni6BCddftFVHgkAq2BfOqu%2BwQdtrDU8gkMZOFoBE%2BMSrIrlqK0pqKyhb&X-Amz-Signature=499057ab50d56a96300faa2355daf9bbac4945c0b83fceb949c21c9dfecb160d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAIDTT4O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCz8cGfH08Zo0zd2u5UGvzDJeVe%2Fe%2Bj8zZcVP07D4oavgIhAIRCW9vfe0zY5pMQ6lXqUUKHTtj8rgeLvehw67baJdGYKv8DCFcQABoMNjM3NDIzMTgzODA1IgwW6T2i6bE1ny%2B7bU8q3AMRm%2FCFdpfvDYDocrfOm31jiMKijT3dILGD%2BFzZWsC%2FrZYiOy2%2BtgXQXe1rVX%2FObyB6JQjl9xV2%2BAJF20VLaPR5KjJbSRmih7mrCiiM%2BxNHmKhrTcIaVn1qZff%2Frlwwrg2qtu68Pz8TEnPYApBnU09ps%2BmwF72lfvCGUaEadMQb33bCThYQxTvP4HpEBKgmgudPxp8igyH1ceKNdBt9Ite0dtyZuwTa6LPqSh8Mgyo0pKzF04Vt14yuoZ%2Fz4ob8aefPdWIIcVoYgEHXUfgQI89gJsvwosu6WAf81P9djGV7KXdnlXU68jRQMUz6ZUCAwuOnFnifFrR6Za2%2FUP7BUbuaVHMmB8JxCbbJwJ2Ba9Dsm0uhedZlMWE5mM1v7D1lr2fqGCybe9sjGwZweKOc10gGtMwCEoeQ5zwyg048YBd8Q5b5uosNz7AGFDOnvaFk50woQJ1vYJhTuZLyhUcXsyw%2FbSdB1efRgiP5PQLkK9KYrPk780ueonCMkKPpdnbbcrSdTvb3sMJRxwbwL2sUsrDpI7zF%2Bbvs%2FZiFfnoi2u9FI82yYPkfU0PpnF1cp9PMJYPd55W1OfiYhUGWvzmyJRc8pij3vGE2TqKjCuRdX%2BB9ETVb8xeAI%2BCD15barTD2o%2FvEBjqkAYHOx7Cm0FcueReunAkj3IzEHGioxfjvJimwmS8tsf9O7eIiEXwTRM3fnRyns7z31ZGckV9Xc92V%2FmBUAPm5WPazod%2Bx3AfC76bHbKY6LHsJxpZVB%2FIhPkxaM6n%2FpguJ48n6aghkYr%2BJik23SKppeEASONJVS5f4LEWFni6BCddftFVHgkAq2BfOqu%2BwQdtrDU8gkMZOFoBE%2BMSrIrlqK0pqKyhb&X-Amz-Signature=08c7d458e883b09f8865c0ac327604d29c873efd006b8acdaafbc368bf5cbc9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAIDTT4O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCz8cGfH08Zo0zd2u5UGvzDJeVe%2Fe%2Bj8zZcVP07D4oavgIhAIRCW9vfe0zY5pMQ6lXqUUKHTtj8rgeLvehw67baJdGYKv8DCFcQABoMNjM3NDIzMTgzODA1IgwW6T2i6bE1ny%2B7bU8q3AMRm%2FCFdpfvDYDocrfOm31jiMKijT3dILGD%2BFzZWsC%2FrZYiOy2%2BtgXQXe1rVX%2FObyB6JQjl9xV2%2BAJF20VLaPR5KjJbSRmih7mrCiiM%2BxNHmKhrTcIaVn1qZff%2Frlwwrg2qtu68Pz8TEnPYApBnU09ps%2BmwF72lfvCGUaEadMQb33bCThYQxTvP4HpEBKgmgudPxp8igyH1ceKNdBt9Ite0dtyZuwTa6LPqSh8Mgyo0pKzF04Vt14yuoZ%2Fz4ob8aefPdWIIcVoYgEHXUfgQI89gJsvwosu6WAf81P9djGV7KXdnlXU68jRQMUz6ZUCAwuOnFnifFrR6Za2%2FUP7BUbuaVHMmB8JxCbbJwJ2Ba9Dsm0uhedZlMWE5mM1v7D1lr2fqGCybe9sjGwZweKOc10gGtMwCEoeQ5zwyg048YBd8Q5b5uosNz7AGFDOnvaFk50woQJ1vYJhTuZLyhUcXsyw%2FbSdB1efRgiP5PQLkK9KYrPk780ueonCMkKPpdnbbcrSdTvb3sMJRxwbwL2sUsrDpI7zF%2Bbvs%2FZiFfnoi2u9FI82yYPkfU0PpnF1cp9PMJYPd55W1OfiYhUGWvzmyJRc8pij3vGE2TqKjCuRdX%2BB9ETVb8xeAI%2BCD15barTD2o%2FvEBjqkAYHOx7Cm0FcueReunAkj3IzEHGioxfjvJimwmS8tsf9O7eIiEXwTRM3fnRyns7z31ZGckV9Xc92V%2FmBUAPm5WPazod%2Bx3AfC76bHbKY6LHsJxpZVB%2FIhPkxaM6n%2FpguJ48n6aghkYr%2BJik23SKppeEASONJVS5f4LEWFni6BCddftFVHgkAq2BfOqu%2BwQdtrDU8gkMZOFoBE%2BMSrIrlqK0pqKyhb&X-Amz-Signature=f54a554c8d4beb84aeee16c541f56734f0c91ee544c97a9d728c50b61bebb6f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAIDTT4O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCz8cGfH08Zo0zd2u5UGvzDJeVe%2Fe%2Bj8zZcVP07D4oavgIhAIRCW9vfe0zY5pMQ6lXqUUKHTtj8rgeLvehw67baJdGYKv8DCFcQABoMNjM3NDIzMTgzODA1IgwW6T2i6bE1ny%2B7bU8q3AMRm%2FCFdpfvDYDocrfOm31jiMKijT3dILGD%2BFzZWsC%2FrZYiOy2%2BtgXQXe1rVX%2FObyB6JQjl9xV2%2BAJF20VLaPR5KjJbSRmih7mrCiiM%2BxNHmKhrTcIaVn1qZff%2Frlwwrg2qtu68Pz8TEnPYApBnU09ps%2BmwF72lfvCGUaEadMQb33bCThYQxTvP4HpEBKgmgudPxp8igyH1ceKNdBt9Ite0dtyZuwTa6LPqSh8Mgyo0pKzF04Vt14yuoZ%2Fz4ob8aefPdWIIcVoYgEHXUfgQI89gJsvwosu6WAf81P9djGV7KXdnlXU68jRQMUz6ZUCAwuOnFnifFrR6Za2%2FUP7BUbuaVHMmB8JxCbbJwJ2Ba9Dsm0uhedZlMWE5mM1v7D1lr2fqGCybe9sjGwZweKOc10gGtMwCEoeQ5zwyg048YBd8Q5b5uosNz7AGFDOnvaFk50woQJ1vYJhTuZLyhUcXsyw%2FbSdB1efRgiP5PQLkK9KYrPk780ueonCMkKPpdnbbcrSdTvb3sMJRxwbwL2sUsrDpI7zF%2Bbvs%2FZiFfnoi2u9FI82yYPkfU0PpnF1cp9PMJYPd55W1OfiYhUGWvzmyJRc8pij3vGE2TqKjCuRdX%2BB9ETVb8xeAI%2BCD15barTD2o%2FvEBjqkAYHOx7Cm0FcueReunAkj3IzEHGioxfjvJimwmS8tsf9O7eIiEXwTRM3fnRyns7z31ZGckV9Xc92V%2FmBUAPm5WPazod%2Bx3AfC76bHbKY6LHsJxpZVB%2FIhPkxaM6n%2FpguJ48n6aghkYr%2BJik23SKppeEASONJVS5f4LEWFni6BCddftFVHgkAq2BfOqu%2BwQdtrDU8gkMZOFoBE%2BMSrIrlqK0pqKyhb&X-Amz-Signature=0de54a921baa90629b0cb9a5944409bb99498be5cc41c444fc52d816d0bf0afe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAIDTT4O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCz8cGfH08Zo0zd2u5UGvzDJeVe%2Fe%2Bj8zZcVP07D4oavgIhAIRCW9vfe0zY5pMQ6lXqUUKHTtj8rgeLvehw67baJdGYKv8DCFcQABoMNjM3NDIzMTgzODA1IgwW6T2i6bE1ny%2B7bU8q3AMRm%2FCFdpfvDYDocrfOm31jiMKijT3dILGD%2BFzZWsC%2FrZYiOy2%2BtgXQXe1rVX%2FObyB6JQjl9xV2%2BAJF20VLaPR5KjJbSRmih7mrCiiM%2BxNHmKhrTcIaVn1qZff%2Frlwwrg2qtu68Pz8TEnPYApBnU09ps%2BmwF72lfvCGUaEadMQb33bCThYQxTvP4HpEBKgmgudPxp8igyH1ceKNdBt9Ite0dtyZuwTa6LPqSh8Mgyo0pKzF04Vt14yuoZ%2Fz4ob8aefPdWIIcVoYgEHXUfgQI89gJsvwosu6WAf81P9djGV7KXdnlXU68jRQMUz6ZUCAwuOnFnifFrR6Za2%2FUP7BUbuaVHMmB8JxCbbJwJ2Ba9Dsm0uhedZlMWE5mM1v7D1lr2fqGCybe9sjGwZweKOc10gGtMwCEoeQ5zwyg048YBd8Q5b5uosNz7AGFDOnvaFk50woQJ1vYJhTuZLyhUcXsyw%2FbSdB1efRgiP5PQLkK9KYrPk780ueonCMkKPpdnbbcrSdTvb3sMJRxwbwL2sUsrDpI7zF%2Bbvs%2FZiFfnoi2u9FI82yYPkfU0PpnF1cp9PMJYPd55W1OfiYhUGWvzmyJRc8pij3vGE2TqKjCuRdX%2BB9ETVb8xeAI%2BCD15barTD2o%2FvEBjqkAYHOx7Cm0FcueReunAkj3IzEHGioxfjvJimwmS8tsf9O7eIiEXwTRM3fnRyns7z31ZGckV9Xc92V%2FmBUAPm5WPazod%2Bx3AfC76bHbKY6LHsJxpZVB%2FIhPkxaM6n%2FpguJ48n6aghkYr%2BJik23SKppeEASONJVS5f4LEWFni6BCddftFVHgkAq2BfOqu%2BwQdtrDU8gkMZOFoBE%2BMSrIrlqK0pqKyhb&X-Amz-Signature=1fd3039a8257581e05a1e2a0968e2c6902b4831865c88f36bd4d71fcd3abc528&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAIDTT4O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCz8cGfH08Zo0zd2u5UGvzDJeVe%2Fe%2Bj8zZcVP07D4oavgIhAIRCW9vfe0zY5pMQ6lXqUUKHTtj8rgeLvehw67baJdGYKv8DCFcQABoMNjM3NDIzMTgzODA1IgwW6T2i6bE1ny%2B7bU8q3AMRm%2FCFdpfvDYDocrfOm31jiMKijT3dILGD%2BFzZWsC%2FrZYiOy2%2BtgXQXe1rVX%2FObyB6JQjl9xV2%2BAJF20VLaPR5KjJbSRmih7mrCiiM%2BxNHmKhrTcIaVn1qZff%2Frlwwrg2qtu68Pz8TEnPYApBnU09ps%2BmwF72lfvCGUaEadMQb33bCThYQxTvP4HpEBKgmgudPxp8igyH1ceKNdBt9Ite0dtyZuwTa6LPqSh8Mgyo0pKzF04Vt14yuoZ%2Fz4ob8aefPdWIIcVoYgEHXUfgQI89gJsvwosu6WAf81P9djGV7KXdnlXU68jRQMUz6ZUCAwuOnFnifFrR6Za2%2FUP7BUbuaVHMmB8JxCbbJwJ2Ba9Dsm0uhedZlMWE5mM1v7D1lr2fqGCybe9sjGwZweKOc10gGtMwCEoeQ5zwyg048YBd8Q5b5uosNz7AGFDOnvaFk50woQJ1vYJhTuZLyhUcXsyw%2FbSdB1efRgiP5PQLkK9KYrPk780ueonCMkKPpdnbbcrSdTvb3sMJRxwbwL2sUsrDpI7zF%2Bbvs%2FZiFfnoi2u9FI82yYPkfU0PpnF1cp9PMJYPd55W1OfiYhUGWvzmyJRc8pij3vGE2TqKjCuRdX%2BB9ETVb8xeAI%2BCD15barTD2o%2FvEBjqkAYHOx7Cm0FcueReunAkj3IzEHGioxfjvJimwmS8tsf9O7eIiEXwTRM3fnRyns7z31ZGckV9Xc92V%2FmBUAPm5WPazod%2Bx3AfC76bHbKY6LHsJxpZVB%2FIhPkxaM6n%2FpguJ48n6aghkYr%2BJik23SKppeEASONJVS5f4LEWFni6BCddftFVHgkAq2BfOqu%2BwQdtrDU8gkMZOFoBE%2BMSrIrlqK0pqKyhb&X-Amz-Signature=2f96bc5174c123f622f3e1242d56b28c582856db6d40c22642611e16bcb31a39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAIDTT4O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCz8cGfH08Zo0zd2u5UGvzDJeVe%2Fe%2Bj8zZcVP07D4oavgIhAIRCW9vfe0zY5pMQ6lXqUUKHTtj8rgeLvehw67baJdGYKv8DCFcQABoMNjM3NDIzMTgzODA1IgwW6T2i6bE1ny%2B7bU8q3AMRm%2FCFdpfvDYDocrfOm31jiMKijT3dILGD%2BFzZWsC%2FrZYiOy2%2BtgXQXe1rVX%2FObyB6JQjl9xV2%2BAJF20VLaPR5KjJbSRmih7mrCiiM%2BxNHmKhrTcIaVn1qZff%2Frlwwrg2qtu68Pz8TEnPYApBnU09ps%2BmwF72lfvCGUaEadMQb33bCThYQxTvP4HpEBKgmgudPxp8igyH1ceKNdBt9Ite0dtyZuwTa6LPqSh8Mgyo0pKzF04Vt14yuoZ%2Fz4ob8aefPdWIIcVoYgEHXUfgQI89gJsvwosu6WAf81P9djGV7KXdnlXU68jRQMUz6ZUCAwuOnFnifFrR6Za2%2FUP7BUbuaVHMmB8JxCbbJwJ2Ba9Dsm0uhedZlMWE5mM1v7D1lr2fqGCybe9sjGwZweKOc10gGtMwCEoeQ5zwyg048YBd8Q5b5uosNz7AGFDOnvaFk50woQJ1vYJhTuZLyhUcXsyw%2FbSdB1efRgiP5PQLkK9KYrPk780ueonCMkKPpdnbbcrSdTvb3sMJRxwbwL2sUsrDpI7zF%2Bbvs%2FZiFfnoi2u9FI82yYPkfU0PpnF1cp9PMJYPd55W1OfiYhUGWvzmyJRc8pij3vGE2TqKjCuRdX%2BB9ETVb8xeAI%2BCD15barTD2o%2FvEBjqkAYHOx7Cm0FcueReunAkj3IzEHGioxfjvJimwmS8tsf9O7eIiEXwTRM3fnRyns7z31ZGckV9Xc92V%2FmBUAPm5WPazod%2Bx3AfC76bHbKY6LHsJxpZVB%2FIhPkxaM6n%2FpguJ48n6aghkYr%2BJik23SKppeEASONJVS5f4LEWFni6BCddftFVHgkAq2BfOqu%2BwQdtrDU8gkMZOFoBE%2BMSrIrlqK0pqKyhb&X-Amz-Signature=f1cb45d3f01c1ba42483c887e5ec9da1e6b06f9eb7fc30286ee818ba7b101d7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAIDTT4O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCz8cGfH08Zo0zd2u5UGvzDJeVe%2Fe%2Bj8zZcVP07D4oavgIhAIRCW9vfe0zY5pMQ6lXqUUKHTtj8rgeLvehw67baJdGYKv8DCFcQABoMNjM3NDIzMTgzODA1IgwW6T2i6bE1ny%2B7bU8q3AMRm%2FCFdpfvDYDocrfOm31jiMKijT3dILGD%2BFzZWsC%2FrZYiOy2%2BtgXQXe1rVX%2FObyB6JQjl9xV2%2BAJF20VLaPR5KjJbSRmih7mrCiiM%2BxNHmKhrTcIaVn1qZff%2Frlwwrg2qtu68Pz8TEnPYApBnU09ps%2BmwF72lfvCGUaEadMQb33bCThYQxTvP4HpEBKgmgudPxp8igyH1ceKNdBt9Ite0dtyZuwTa6LPqSh8Mgyo0pKzF04Vt14yuoZ%2Fz4ob8aefPdWIIcVoYgEHXUfgQI89gJsvwosu6WAf81P9djGV7KXdnlXU68jRQMUz6ZUCAwuOnFnifFrR6Za2%2FUP7BUbuaVHMmB8JxCbbJwJ2Ba9Dsm0uhedZlMWE5mM1v7D1lr2fqGCybe9sjGwZweKOc10gGtMwCEoeQ5zwyg048YBd8Q5b5uosNz7AGFDOnvaFk50woQJ1vYJhTuZLyhUcXsyw%2FbSdB1efRgiP5PQLkK9KYrPk780ueonCMkKPpdnbbcrSdTvb3sMJRxwbwL2sUsrDpI7zF%2Bbvs%2FZiFfnoi2u9FI82yYPkfU0PpnF1cp9PMJYPd55W1OfiYhUGWvzmyJRc8pij3vGE2TqKjCuRdX%2BB9ETVb8xeAI%2BCD15barTD2o%2FvEBjqkAYHOx7Cm0FcueReunAkj3IzEHGioxfjvJimwmS8tsf9O7eIiEXwTRM3fnRyns7z31ZGckV9Xc92V%2FmBUAPm5WPazod%2Bx3AfC76bHbKY6LHsJxpZVB%2FIhPkxaM6n%2FpguJ48n6aghkYr%2BJik23SKppeEASONJVS5f4LEWFni6BCddftFVHgkAq2BfOqu%2BwQdtrDU8gkMZOFoBE%2BMSrIrlqK0pqKyhb&X-Amz-Signature=5c641c8e06ad2b8f8dffec2467e0ad218b9435c5dffdfe217460cff2fb04fd71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAIDTT4O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCz8cGfH08Zo0zd2u5UGvzDJeVe%2Fe%2Bj8zZcVP07D4oavgIhAIRCW9vfe0zY5pMQ6lXqUUKHTtj8rgeLvehw67baJdGYKv8DCFcQABoMNjM3NDIzMTgzODA1IgwW6T2i6bE1ny%2B7bU8q3AMRm%2FCFdpfvDYDocrfOm31jiMKijT3dILGD%2BFzZWsC%2FrZYiOy2%2BtgXQXe1rVX%2FObyB6JQjl9xV2%2BAJF20VLaPR5KjJbSRmih7mrCiiM%2BxNHmKhrTcIaVn1qZff%2Frlwwrg2qtu68Pz8TEnPYApBnU09ps%2BmwF72lfvCGUaEadMQb33bCThYQxTvP4HpEBKgmgudPxp8igyH1ceKNdBt9Ite0dtyZuwTa6LPqSh8Mgyo0pKzF04Vt14yuoZ%2Fz4ob8aefPdWIIcVoYgEHXUfgQI89gJsvwosu6WAf81P9djGV7KXdnlXU68jRQMUz6ZUCAwuOnFnifFrR6Za2%2FUP7BUbuaVHMmB8JxCbbJwJ2Ba9Dsm0uhedZlMWE5mM1v7D1lr2fqGCybe9sjGwZweKOc10gGtMwCEoeQ5zwyg048YBd8Q5b5uosNz7AGFDOnvaFk50woQJ1vYJhTuZLyhUcXsyw%2FbSdB1efRgiP5PQLkK9KYrPk780ueonCMkKPpdnbbcrSdTvb3sMJRxwbwL2sUsrDpI7zF%2Bbvs%2FZiFfnoi2u9FI82yYPkfU0PpnF1cp9PMJYPd55W1OfiYhUGWvzmyJRc8pij3vGE2TqKjCuRdX%2BB9ETVb8xeAI%2BCD15barTD2o%2FvEBjqkAYHOx7Cm0FcueReunAkj3IzEHGioxfjvJimwmS8tsf9O7eIiEXwTRM3fnRyns7z31ZGckV9Xc92V%2FmBUAPm5WPazod%2Bx3AfC76bHbKY6LHsJxpZVB%2FIhPkxaM6n%2FpguJ48n6aghkYr%2BJik23SKppeEASONJVS5f4LEWFni6BCddftFVHgkAq2BfOqu%2BwQdtrDU8gkMZOFoBE%2BMSrIrlqK0pqKyhb&X-Amz-Signature=71e063753d07e1368f0a6597ab104be0b31c9686d96ddd4cac251fda2e8a9f26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAIDTT4O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCz8cGfH08Zo0zd2u5UGvzDJeVe%2Fe%2Bj8zZcVP07D4oavgIhAIRCW9vfe0zY5pMQ6lXqUUKHTtj8rgeLvehw67baJdGYKv8DCFcQABoMNjM3NDIzMTgzODA1IgwW6T2i6bE1ny%2B7bU8q3AMRm%2FCFdpfvDYDocrfOm31jiMKijT3dILGD%2BFzZWsC%2FrZYiOy2%2BtgXQXe1rVX%2FObyB6JQjl9xV2%2BAJF20VLaPR5KjJbSRmih7mrCiiM%2BxNHmKhrTcIaVn1qZff%2Frlwwrg2qtu68Pz8TEnPYApBnU09ps%2BmwF72lfvCGUaEadMQb33bCThYQxTvP4HpEBKgmgudPxp8igyH1ceKNdBt9Ite0dtyZuwTa6LPqSh8Mgyo0pKzF04Vt14yuoZ%2Fz4ob8aefPdWIIcVoYgEHXUfgQI89gJsvwosu6WAf81P9djGV7KXdnlXU68jRQMUz6ZUCAwuOnFnifFrR6Za2%2FUP7BUbuaVHMmB8JxCbbJwJ2Ba9Dsm0uhedZlMWE5mM1v7D1lr2fqGCybe9sjGwZweKOc10gGtMwCEoeQ5zwyg048YBd8Q5b5uosNz7AGFDOnvaFk50woQJ1vYJhTuZLyhUcXsyw%2FbSdB1efRgiP5PQLkK9KYrPk780ueonCMkKPpdnbbcrSdTvb3sMJRxwbwL2sUsrDpI7zF%2Bbvs%2FZiFfnoi2u9FI82yYPkfU0PpnF1cp9PMJYPd55W1OfiYhUGWvzmyJRc8pij3vGE2TqKjCuRdX%2BB9ETVb8xeAI%2BCD15barTD2o%2FvEBjqkAYHOx7Cm0FcueReunAkj3IzEHGioxfjvJimwmS8tsf9O7eIiEXwTRM3fnRyns7z31ZGckV9Xc92V%2FmBUAPm5WPazod%2Bx3AfC76bHbKY6LHsJxpZVB%2FIhPkxaM6n%2FpguJ48n6aghkYr%2BJik23SKppeEASONJVS5f4LEWFni6BCddftFVHgkAq2BfOqu%2BwQdtrDU8gkMZOFoBE%2BMSrIrlqK0pqKyhb&X-Amz-Signature=37bfea9aab4b2177c1f598910fd192308bfe640fb6c30e3135c89e3e327669b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAIDTT4O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCz8cGfH08Zo0zd2u5UGvzDJeVe%2Fe%2Bj8zZcVP07D4oavgIhAIRCW9vfe0zY5pMQ6lXqUUKHTtj8rgeLvehw67baJdGYKv8DCFcQABoMNjM3NDIzMTgzODA1IgwW6T2i6bE1ny%2B7bU8q3AMRm%2FCFdpfvDYDocrfOm31jiMKijT3dILGD%2BFzZWsC%2FrZYiOy2%2BtgXQXe1rVX%2FObyB6JQjl9xV2%2BAJF20VLaPR5KjJbSRmih7mrCiiM%2BxNHmKhrTcIaVn1qZff%2Frlwwrg2qtu68Pz8TEnPYApBnU09ps%2BmwF72lfvCGUaEadMQb33bCThYQxTvP4HpEBKgmgudPxp8igyH1ceKNdBt9Ite0dtyZuwTa6LPqSh8Mgyo0pKzF04Vt14yuoZ%2Fz4ob8aefPdWIIcVoYgEHXUfgQI89gJsvwosu6WAf81P9djGV7KXdnlXU68jRQMUz6ZUCAwuOnFnifFrR6Za2%2FUP7BUbuaVHMmB8JxCbbJwJ2Ba9Dsm0uhedZlMWE5mM1v7D1lr2fqGCybe9sjGwZweKOc10gGtMwCEoeQ5zwyg048YBd8Q5b5uosNz7AGFDOnvaFk50woQJ1vYJhTuZLyhUcXsyw%2FbSdB1efRgiP5PQLkK9KYrPk780ueonCMkKPpdnbbcrSdTvb3sMJRxwbwL2sUsrDpI7zF%2Bbvs%2FZiFfnoi2u9FI82yYPkfU0PpnF1cp9PMJYPd55W1OfiYhUGWvzmyJRc8pij3vGE2TqKjCuRdX%2BB9ETVb8xeAI%2BCD15barTD2o%2FvEBjqkAYHOx7Cm0FcueReunAkj3IzEHGioxfjvJimwmS8tsf9O7eIiEXwTRM3fnRyns7z31ZGckV9Xc92V%2FmBUAPm5WPazod%2Bx3AfC76bHbKY6LHsJxpZVB%2FIhPkxaM6n%2FpguJ48n6aghkYr%2BJik23SKppeEASONJVS5f4LEWFni6BCddftFVHgkAq2BfOqu%2BwQdtrDU8gkMZOFoBE%2BMSrIrlqK0pqKyhb&X-Amz-Signature=a6a512d3ab4ea3c02138504b7596233efb6513ba725ecf4553e90af29797256a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAIDTT4O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCz8cGfH08Zo0zd2u5UGvzDJeVe%2Fe%2Bj8zZcVP07D4oavgIhAIRCW9vfe0zY5pMQ6lXqUUKHTtj8rgeLvehw67baJdGYKv8DCFcQABoMNjM3NDIzMTgzODA1IgwW6T2i6bE1ny%2B7bU8q3AMRm%2FCFdpfvDYDocrfOm31jiMKijT3dILGD%2BFzZWsC%2FrZYiOy2%2BtgXQXe1rVX%2FObyB6JQjl9xV2%2BAJF20VLaPR5KjJbSRmih7mrCiiM%2BxNHmKhrTcIaVn1qZff%2Frlwwrg2qtu68Pz8TEnPYApBnU09ps%2BmwF72lfvCGUaEadMQb33bCThYQxTvP4HpEBKgmgudPxp8igyH1ceKNdBt9Ite0dtyZuwTa6LPqSh8Mgyo0pKzF04Vt14yuoZ%2Fz4ob8aefPdWIIcVoYgEHXUfgQI89gJsvwosu6WAf81P9djGV7KXdnlXU68jRQMUz6ZUCAwuOnFnifFrR6Za2%2FUP7BUbuaVHMmB8JxCbbJwJ2Ba9Dsm0uhedZlMWE5mM1v7D1lr2fqGCybe9sjGwZweKOc10gGtMwCEoeQ5zwyg048YBd8Q5b5uosNz7AGFDOnvaFk50woQJ1vYJhTuZLyhUcXsyw%2FbSdB1efRgiP5PQLkK9KYrPk780ueonCMkKPpdnbbcrSdTvb3sMJRxwbwL2sUsrDpI7zF%2Bbvs%2FZiFfnoi2u9FI82yYPkfU0PpnF1cp9PMJYPd55W1OfiYhUGWvzmyJRc8pij3vGE2TqKjCuRdX%2BB9ETVb8xeAI%2BCD15barTD2o%2FvEBjqkAYHOx7Cm0FcueReunAkj3IzEHGioxfjvJimwmS8tsf9O7eIiEXwTRM3fnRyns7z31ZGckV9Xc92V%2FmBUAPm5WPazod%2Bx3AfC76bHbKY6LHsJxpZVB%2FIhPkxaM6n%2FpguJ48n6aghkYr%2BJik23SKppeEASONJVS5f4LEWFni6BCddftFVHgkAq2BfOqu%2BwQdtrDU8gkMZOFoBE%2BMSrIrlqK0pqKyhb&X-Amz-Signature=bb04918869218ae0a62bfb538554e6d5a20142175b197a4a19832906bfb31179&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAIDTT4O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCz8cGfH08Zo0zd2u5UGvzDJeVe%2Fe%2Bj8zZcVP07D4oavgIhAIRCW9vfe0zY5pMQ6lXqUUKHTtj8rgeLvehw67baJdGYKv8DCFcQABoMNjM3NDIzMTgzODA1IgwW6T2i6bE1ny%2B7bU8q3AMRm%2FCFdpfvDYDocrfOm31jiMKijT3dILGD%2BFzZWsC%2FrZYiOy2%2BtgXQXe1rVX%2FObyB6JQjl9xV2%2BAJF20VLaPR5KjJbSRmih7mrCiiM%2BxNHmKhrTcIaVn1qZff%2Frlwwrg2qtu68Pz8TEnPYApBnU09ps%2BmwF72lfvCGUaEadMQb33bCThYQxTvP4HpEBKgmgudPxp8igyH1ceKNdBt9Ite0dtyZuwTa6LPqSh8Mgyo0pKzF04Vt14yuoZ%2Fz4ob8aefPdWIIcVoYgEHXUfgQI89gJsvwosu6WAf81P9djGV7KXdnlXU68jRQMUz6ZUCAwuOnFnifFrR6Za2%2FUP7BUbuaVHMmB8JxCbbJwJ2Ba9Dsm0uhedZlMWE5mM1v7D1lr2fqGCybe9sjGwZweKOc10gGtMwCEoeQ5zwyg048YBd8Q5b5uosNz7AGFDOnvaFk50woQJ1vYJhTuZLyhUcXsyw%2FbSdB1efRgiP5PQLkK9KYrPk780ueonCMkKPpdnbbcrSdTvb3sMJRxwbwL2sUsrDpI7zF%2Bbvs%2FZiFfnoi2u9FI82yYPkfU0PpnF1cp9PMJYPd55W1OfiYhUGWvzmyJRc8pij3vGE2TqKjCuRdX%2BB9ETVb8xeAI%2BCD15barTD2o%2FvEBjqkAYHOx7Cm0FcueReunAkj3IzEHGioxfjvJimwmS8tsf9O7eIiEXwTRM3fnRyns7z31ZGckV9Xc92V%2FmBUAPm5WPazod%2Bx3AfC76bHbKY6LHsJxpZVB%2FIhPkxaM6n%2FpguJ48n6aghkYr%2BJik23SKppeEASONJVS5f4LEWFni6BCddftFVHgkAq2BfOqu%2BwQdtrDU8gkMZOFoBE%2BMSrIrlqK0pqKyhb&X-Amz-Signature=4c3c20232eb323b08fd7ebfdb2c9caf461f6ff49500cd104aca7936c8b7c7b3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
