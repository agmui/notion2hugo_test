---
sys:
  pageId: "1d0da3bc-6297-80fb-8efb-e233f8606981"
  createdTime: "2025-04-09T14:40:00.000Z"
  lastEditedTime: "2025-08-02T10:08:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt3 Gazebo setup.md"
title: "Nav2 pt3 Gazebo setup"
date: "2025-08-02T10:08:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 153
toc: false
icon: ""
---

Gazebo is a simulation software suite. It can simulate many kinds of sensors such as Lidar, Depth sense cameras, IMU, and more.

Here is the official [link to their website](https://gazebosim.org/home) if you want to learn more

We are going to set up Gazebo simulation for our project

## Install

```bash
sudo apt install ros-$ROS2_DISTRO-ros-gz
```

### New nodes

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T42IFI5X%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6kuWnAE30hWV8U%2B%2BhEmOWskEp3iuS0vYCODj9X3R%2B1AIgdbuhYV%2Fg4rNSSfkIsffVejOZSeLSf%2FGQgpaYb6Q3a48qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjsTA37nYIGgJysNCrcA7MO4M7bmy46oeaBrdO%2BtQ5I5z6bsh%2FqJjKP7kwLzMo8Ms2kwxJK67qBapsSj0LZp8dvraXPJpo6Aua3z8rbWPLREVPYEual%2F4KI2Sli%2FmV8CLKm0y13Lr1KmLHTY6TnaRb30W%2F5dsWUj52slbjhS%2B7CN4i8J70BRAQZ8bPzqiC3JFhMgpEnlrH8z8jG%2BnMaIvmrIPOAZSv7E4slLpj6OVcUcZcpz0mgFbfQ8x8WfNkT6W5b%2BPpR7wElVJhSQd1YWieSmoGsyk64k9R%2FwvBnyv%2BA9%2BgnNvdoZOg2q1BG5C7LtUTesDtzMnaT7sx15GRRMxUkEVo1vf9np8bUuaMU1zb2MYhHlZPlAJvaaoRY62YussvdQegCRZXqXwzsjPNXHOfaBem%2FBc%2FKuVBdWs5XdvG6HuOq5WeNJ3nXtXtNHMx6JmSasG6e5LXncKb7qWrwGNHpDl1CFms7wlHJaQoNHUHLeFVgZquIu3%2F9V%2FuuiO3Dmv3wBIZ3WN%2BXrP6sHGs8QhOD8SwM5dOJlVgIQUAErY2g26nE64BReVpTJ9YfRNsjcsneUKC11zXl9mtihgC6aEoUp%2BG6%2FBEdwNEuaOjKHGV2LJnE3M%2FtiNkiEPsI5Dn323v39jr4Pay5vv6tMN2648QGOqUB8QNkgtyBe3M4ROR3%2B3Be6GJflZCYNmiS3qOPwAJb8jKdn3yFAMvBE6UZJpAvuJ68XDghC3S5QAPZDCZFTwaWOZwDzLKZiAAi9Ds6MNnq%2FAUuVSY4A6YDhjIkYmAQoLe3HBZ%2B2TfYHsRhVTdiRQKD%2BrFS%2B3VERlnqVtRGo2GBCaZvK6yImXRZX%2F0YBkDPAahj2zIJDxQKmBfqYa6sV8iB9qwz9P9l&X-Amz-Signature=1759cdb883c14132574c61a8ab93e6c96311963cf0d502fbe1ed5404d9e6e366&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/cmd_vel` | geometry_msgs/Twist |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**        | **Type**               |
| --------------- | ---------------------- |
| `/joint_states` | sensor_msg/JointState  |
| `/odom`         | nav_msgs/Odometry      |
| `/tf`           | simulated robot joints |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**         | **Type** |
| ---------------- | -------- |
| `config_file`    | file     |
| `world_sdf_file` | file     |

{{< /table >}}

#### description:

Simulates a whole robot and world to debug and test quickly

{{% /alert %}}

In the last guide  was what our nodes looked like

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T42IFI5X%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6kuWnAE30hWV8U%2B%2BhEmOWskEp3iuS0vYCODj9X3R%2B1AIgdbuhYV%2Fg4rNSSfkIsffVejOZSeLSf%2FGQgpaYb6Q3a48qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjsTA37nYIGgJysNCrcA7MO4M7bmy46oeaBrdO%2BtQ5I5z6bsh%2FqJjKP7kwLzMo8Ms2kwxJK67qBapsSj0LZp8dvraXPJpo6Aua3z8rbWPLREVPYEual%2F4KI2Sli%2FmV8CLKm0y13Lr1KmLHTY6TnaRb30W%2F5dsWUj52slbjhS%2B7CN4i8J70BRAQZ8bPzqiC3JFhMgpEnlrH8z8jG%2BnMaIvmrIPOAZSv7E4slLpj6OVcUcZcpz0mgFbfQ8x8WfNkT6W5b%2BPpR7wElVJhSQd1YWieSmoGsyk64k9R%2FwvBnyv%2BA9%2BgnNvdoZOg2q1BG5C7LtUTesDtzMnaT7sx15GRRMxUkEVo1vf9np8bUuaMU1zb2MYhHlZPlAJvaaoRY62YussvdQegCRZXqXwzsjPNXHOfaBem%2FBc%2FKuVBdWs5XdvG6HuOq5WeNJ3nXtXtNHMx6JmSasG6e5LXncKb7qWrwGNHpDl1CFms7wlHJaQoNHUHLeFVgZquIu3%2F9V%2FuuiO3Dmv3wBIZ3WN%2BXrP6sHGs8QhOD8SwM5dOJlVgIQUAErY2g26nE64BReVpTJ9YfRNsjcsneUKC11zXl9mtihgC6aEoUp%2BG6%2FBEdwNEuaOjKHGV2LJnE3M%2FtiNkiEPsI5Dn323v39jr4Pay5vv6tMN2648QGOqUB8QNkgtyBe3M4ROR3%2B3Be6GJflZCYNmiS3qOPwAJb8jKdn3yFAMvBE6UZJpAvuJ68XDghC3S5QAPZDCZFTwaWOZwDzLKZiAAi9Ds6MNnq%2FAUuVSY4A6YDhjIkYmAQoLe3HBZ%2B2TfYHsRhVTdiRQKD%2BrFS%2B3VERlnqVtRGo2GBCaZvK6yImXRZX%2F0YBkDPAahj2zIJDxQKmBfqYa6sV8iB9qwz9P9l&X-Amz-Signature=69ab9efdb9d5048d87f03c8defea82af0500386020f9ea0995aa71ecba8ddbcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T42IFI5X%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6kuWnAE30hWV8U%2B%2BhEmOWskEp3iuS0vYCODj9X3R%2B1AIgdbuhYV%2Fg4rNSSfkIsffVejOZSeLSf%2FGQgpaYb6Q3a48qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjsTA37nYIGgJysNCrcA7MO4M7bmy46oeaBrdO%2BtQ5I5z6bsh%2FqJjKP7kwLzMo8Ms2kwxJK67qBapsSj0LZp8dvraXPJpo6Aua3z8rbWPLREVPYEual%2F4KI2Sli%2FmV8CLKm0y13Lr1KmLHTY6TnaRb30W%2F5dsWUj52slbjhS%2B7CN4i8J70BRAQZ8bPzqiC3JFhMgpEnlrH8z8jG%2BnMaIvmrIPOAZSv7E4slLpj6OVcUcZcpz0mgFbfQ8x8WfNkT6W5b%2BPpR7wElVJhSQd1YWieSmoGsyk64k9R%2FwvBnyv%2BA9%2BgnNvdoZOg2q1BG5C7LtUTesDtzMnaT7sx15GRRMxUkEVo1vf9np8bUuaMU1zb2MYhHlZPlAJvaaoRY62YussvdQegCRZXqXwzsjPNXHOfaBem%2FBc%2FKuVBdWs5XdvG6HuOq5WeNJ3nXtXtNHMx6JmSasG6e5LXncKb7qWrwGNHpDl1CFms7wlHJaQoNHUHLeFVgZquIu3%2F9V%2FuuiO3Dmv3wBIZ3WN%2BXrP6sHGs8QhOD8SwM5dOJlVgIQUAErY2g26nE64BReVpTJ9YfRNsjcsneUKC11zXl9mtihgC6aEoUp%2BG6%2FBEdwNEuaOjKHGV2LJnE3M%2FtiNkiEPsI5Dn323v39jr4Pay5vv6tMN2648QGOqUB8QNkgtyBe3M4ROR3%2B3Be6GJflZCYNmiS3qOPwAJb8jKdn3yFAMvBE6UZJpAvuJ68XDghC3S5QAPZDCZFTwaWOZwDzLKZiAAi9Ds6MNnq%2FAUuVSY4A6YDhjIkYmAQoLe3HBZ%2B2TfYHsRhVTdiRQKD%2BrFS%2B3VERlnqVtRGo2GBCaZvK6yImXRZX%2F0YBkDPAahj2zIJDxQKmBfqYa6sV8iB9qwz9P9l&X-Amz-Signature=9d23f72e2170380810ddff6007529d0121cfbcb7137708c7752a2fdbd89a4d38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T42IFI5X%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6kuWnAE30hWV8U%2B%2BhEmOWskEp3iuS0vYCODj9X3R%2B1AIgdbuhYV%2Fg4rNSSfkIsffVejOZSeLSf%2FGQgpaYb6Q3a48qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjsTA37nYIGgJysNCrcA7MO4M7bmy46oeaBrdO%2BtQ5I5z6bsh%2FqJjKP7kwLzMo8Ms2kwxJK67qBapsSj0LZp8dvraXPJpo6Aua3z8rbWPLREVPYEual%2F4KI2Sli%2FmV8CLKm0y13Lr1KmLHTY6TnaRb30W%2F5dsWUj52slbjhS%2B7CN4i8J70BRAQZ8bPzqiC3JFhMgpEnlrH8z8jG%2BnMaIvmrIPOAZSv7E4slLpj6OVcUcZcpz0mgFbfQ8x8WfNkT6W5b%2BPpR7wElVJhSQd1YWieSmoGsyk64k9R%2FwvBnyv%2BA9%2BgnNvdoZOg2q1BG5C7LtUTesDtzMnaT7sx15GRRMxUkEVo1vf9np8bUuaMU1zb2MYhHlZPlAJvaaoRY62YussvdQegCRZXqXwzsjPNXHOfaBem%2FBc%2FKuVBdWs5XdvG6HuOq5WeNJ3nXtXtNHMx6JmSasG6e5LXncKb7qWrwGNHpDl1CFms7wlHJaQoNHUHLeFVgZquIu3%2F9V%2FuuiO3Dmv3wBIZ3WN%2BXrP6sHGs8QhOD8SwM5dOJlVgIQUAErY2g26nE64BReVpTJ9YfRNsjcsneUKC11zXl9mtihgC6aEoUp%2BG6%2FBEdwNEuaOjKHGV2LJnE3M%2FtiNkiEPsI5Dn323v39jr4Pay5vv6tMN2648QGOqUB8QNkgtyBe3M4ROR3%2B3Be6GJflZCYNmiS3qOPwAJb8jKdn3yFAMvBE6UZJpAvuJ68XDghC3S5QAPZDCZFTwaWOZwDzLKZiAAi9Ds6MNnq%2FAUuVSY4A6YDhjIkYmAQoLe3HBZ%2B2TfYHsRhVTdiRQKD%2BrFS%2B3VERlnqVtRGo2GBCaZvK6yImXRZX%2F0YBkDPAahj2zIJDxQKmBfqYa6sV8iB9qwz9P9l&X-Amz-Signature=c678ff84b23e08c97c1922adca9280a3c4641138465d4b129004ad1b9971fd2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

paste this inside `bridge_config.yaml`. 

This file just describes what topics to _bridge_ between ROS and Gazebo

```yaml
---
- ros_topic_name: "/clock"
  gz_topic_name: "/clock"
  ros_type_name: "rosgraph_msgs/msg/Clock"
  gz_type_name: "gz.msgs.Clock"
  direction: GZ_TO_ROS

# Topic published by DiffDrive plugin
- ros_topic_name: "/odom"
  gz_topic_name: "/odom"
  ros_type_name: "nav_msgs/msg/Odometry"
  gz_type_name: "gz.msgs.Odometry"
  direction: GZ_TO_ROS

# Topic published by JointStatePublisher plugin
- ros_topic_name: "/joint_states"
  gz_topic_name: "/joint_states"
  ros_type_name: "sensor_msgs/msg/JointState"
  gz_type_name: "gz.msgs.Model"
  direction: GZ_TO_ROS

# Topic subscribed to by DiffDrive plugin
- ros_topic_name: "/cmd_vel"
  gz_topic_name: "/cmd_vel"
  ros_type_name: "geometry_msgs/msg/TwistStamped"
  gz_type_name: "gz.msgs.Twist"
  direction: ROS_TO_GZ

- ros_topic_name: "/tf"
  gz_topic_name: "/tf"
  ros_type_name: "tf2_msgs/msg/TFMessage"
  gz_type_name: "gz.msgs.Pose_V"
  direction: GZ_TO_ROS
```

## Updating `urdf`

To be able to drive the robot in Gazebo we need to add this plugin at the bottom of our `mbot_description.urdf` **right before the** **`</robot>`** **tag**.

This plugin does emulates most of what `my_node` did.

```xml

  <gazebo>
    <plugin filename="gz-sim-diff-drive-system" name="gz::sim::systems::DiffDrive">
      <!-- wheels -->
      <left_joint>drivewhl_l_joint</left_joint>
      <right_joint>drivewhl_r_joint</right_joint>

      <!-- kinematics -->
      <wheel_separation>0.4</wheel_separation>
      <wheel_radius>${wheel_radius}</wheel_radius>

      <!-- limits -->
      <max_linear_acceleration>1.0</max_linear_acceleration>

      <!-- input -->
      <topic>/cmd_vel</topic>

      <!-- output -->
      <odom_topic>/odom</odom_topic>
      <tf_topic>/tf</tf_topic>

      <frame_id>odom</frame_id>
      <child_frame_id>base_link</child_frame_id>
    </plugin>

    <plugin
      filename="gz-sim-joint-state-publisher-system"
      name="gz::sim::systems::JointStatePublisher">
      <topic>joint_states</topic>
    </plugin>
  </gazebo>
```

We also need to simulate friction on the wheels or else the robot will not be able to move in the sim.

Add the friction tag in the wheel macro we made: 

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
    <link name="${prefix}_link">
      <visual>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
            <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>
        <material name="Gray">
          <color rgba="0.5 0.5 0.5 1.0"/>
        </material>
      </visual>

      <collision>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
          <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>

        <surface><friction><ode>
          <mu>1.0</mu>
          <mu2>1.0</mu2>
        </ode></friction></surface>
      </collision>

      <xacro:cylinder_inertia m="0.5" r="${wheel_radius}" h="${wheel_width}"/>
    </link>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YEXEFZQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGHufhxMfuBBtNiqCnKSgAkXdGaap5JO9szc2LXlkIXAiBig1E%2B4xK%2BQxitrEvqV%2FRW4QRZ%2FD3yZY%2F3dE3%2BU06xbCqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQQxyhjeDL9UgLsq7KtwDpztDTiCjPjRVaj%2BINXDWQ7PAdpuGAXd%2Fadqwp5zfrF6rCjj9OMCB9Y4lLmKBkUzS5y73G66Eu2gqY5YBnu2l8QCnF627AniggZ0TcS%2F9thWaV15PHmCVsv56aC2cJ6%2B35ffvZwEKAVAGLXH7AHDkm%2FNHwGeVvTmZ%2Fi8YZvqX3nG%2F7W6YEf1L1HRml9LGfVK2nUn%2FRYxe6cdFygZPv2DZ0JdjGSz3YqF71Lz%2BFwbG%2Bycq17w%2Br2KiOjMW1Iju3%2FErvK3wWo6o2YhtaTlmgqfXIkLTpw3jMoDZmzXwCSFJKnMPbGLPfSR7mkR%2BKXEsl%2B%2BEvTWHs1xAfPIh3dFwO%2BWlWikT%2FhiQYVs313Ri%2FmlLVttU9DlC0FN5f%2F%2BLgkbg6J6EgBrjPtVidPGhoPerKZxjEegOcvjVEfYbtwaJiHYh15eeJu5o%2FUPTRhhTYP2XDUeoHNCtWNQ972lmKrbWIuP1BEvZlyc36llMJWIDxjES5%2BRBfh%2FzhV9iN0fb5wvXXpsdNqOfWfEkums4%2FII4gdPGzd9QTkBlutrWNQhALHjNay8pnDpH70ItdLegcHBc7QsjJDjgd0Rf1Zo367WgTFcrs1O3uJlBc8PfFfWhZjKbioo78xwG0YNdQWM4n0UwjLvjxAY6pgEt6C1IR5TlNG%2FjtBzRyIVatG7Tly0UqSuMeKJNPDvS%2Fn%2F7DT3yl4ZCDDv1aGkdVdKlUg6ll2vAx0EQmV1ZmbL%2F9JiAcXboTpSgAC%2FfX77GKDviqWah%2BqTgXu1voILEezZXJnOAi5Es%2B7%2BEX9xP46vs635QPhHH37ngRZQapeoOYA7UsoFx1cEd8zkELn%2BxMhjcPe63Zkz8XfKqGbj6UdxqHr75Xcev&X-Amz-Signature=e8e694f218eb39585e2d90302b30a657f0a46f154518da2129a337ff6fd4ce7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T42IFI5X%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6kuWnAE30hWV8U%2B%2BhEmOWskEp3iuS0vYCODj9X3R%2B1AIgdbuhYV%2Fg4rNSSfkIsffVejOZSeLSf%2FGQgpaYb6Q3a48qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjsTA37nYIGgJysNCrcA7MO4M7bmy46oeaBrdO%2BtQ5I5z6bsh%2FqJjKP7kwLzMo8Ms2kwxJK67qBapsSj0LZp8dvraXPJpo6Aua3z8rbWPLREVPYEual%2F4KI2Sli%2FmV8CLKm0y13Lr1KmLHTY6TnaRb30W%2F5dsWUj52slbjhS%2B7CN4i8J70BRAQZ8bPzqiC3JFhMgpEnlrH8z8jG%2BnMaIvmrIPOAZSv7E4slLpj6OVcUcZcpz0mgFbfQ8x8WfNkT6W5b%2BPpR7wElVJhSQd1YWieSmoGsyk64k9R%2FwvBnyv%2BA9%2BgnNvdoZOg2q1BG5C7LtUTesDtzMnaT7sx15GRRMxUkEVo1vf9np8bUuaMU1zb2MYhHlZPlAJvaaoRY62YussvdQegCRZXqXwzsjPNXHOfaBem%2FBc%2FKuVBdWs5XdvG6HuOq5WeNJ3nXtXtNHMx6JmSasG6e5LXncKb7qWrwGNHpDl1CFms7wlHJaQoNHUHLeFVgZquIu3%2F9V%2FuuiO3Dmv3wBIZ3WN%2BXrP6sHGs8QhOD8SwM5dOJlVgIQUAErY2g26nE64BReVpTJ9YfRNsjcsneUKC11zXl9mtihgC6aEoUp%2BG6%2FBEdwNEuaOjKHGV2LJnE3M%2FtiNkiEPsI5Dn323v39jr4Pay5vv6tMN2648QGOqUB8QNkgtyBe3M4ROR3%2B3Be6GJflZCYNmiS3qOPwAJb8jKdn3yFAMvBE6UZJpAvuJ68XDghC3S5QAPZDCZFTwaWOZwDzLKZiAAi9Ds6MNnq%2FAUuVSY4A6YDhjIkYmAQoLe3HBZ%2B2TfYHsRhVTdiRQKD%2BrFS%2B3VERlnqVtRGo2GBCaZvK6yImXRZX%2F0YBkDPAahj2zIJDxQKmBfqYa6sV8iB9qwz9P9l&X-Amz-Signature=0761b801d558e6c9eef0a64417337a5d0e78725af01bf6542c32b23c19c13780&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T42IFI5X%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6kuWnAE30hWV8U%2B%2BhEmOWskEp3iuS0vYCODj9X3R%2B1AIgdbuhYV%2Fg4rNSSfkIsffVejOZSeLSf%2FGQgpaYb6Q3a48qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjsTA37nYIGgJysNCrcA7MO4M7bmy46oeaBrdO%2BtQ5I5z6bsh%2FqJjKP7kwLzMo8Ms2kwxJK67qBapsSj0LZp8dvraXPJpo6Aua3z8rbWPLREVPYEual%2F4KI2Sli%2FmV8CLKm0y13Lr1KmLHTY6TnaRb30W%2F5dsWUj52slbjhS%2B7CN4i8J70BRAQZ8bPzqiC3JFhMgpEnlrH8z8jG%2BnMaIvmrIPOAZSv7E4slLpj6OVcUcZcpz0mgFbfQ8x8WfNkT6W5b%2BPpR7wElVJhSQd1YWieSmoGsyk64k9R%2FwvBnyv%2BA9%2BgnNvdoZOg2q1BG5C7LtUTesDtzMnaT7sx15GRRMxUkEVo1vf9np8bUuaMU1zb2MYhHlZPlAJvaaoRY62YussvdQegCRZXqXwzsjPNXHOfaBem%2FBc%2FKuVBdWs5XdvG6HuOq5WeNJ3nXtXtNHMx6JmSasG6e5LXncKb7qWrwGNHpDl1CFms7wlHJaQoNHUHLeFVgZquIu3%2F9V%2FuuiO3Dmv3wBIZ3WN%2BXrP6sHGs8QhOD8SwM5dOJlVgIQUAErY2g26nE64BReVpTJ9YfRNsjcsneUKC11zXl9mtihgC6aEoUp%2BG6%2FBEdwNEuaOjKHGV2LJnE3M%2FtiNkiEPsI5Dn323v39jr4Pay5vv6tMN2648QGOqUB8QNkgtyBe3M4ROR3%2B3Be6GJflZCYNmiS3qOPwAJb8jKdn3yFAMvBE6UZJpAvuJ68XDghC3S5QAPZDCZFTwaWOZwDzLKZiAAi9Ds6MNnq%2FAUuVSY4A6YDhjIkYmAQoLe3HBZ%2B2TfYHsRhVTdiRQKD%2BrFS%2B3VERlnqVtRGo2GBCaZvK6yImXRZX%2F0YBkDPAahj2zIJDxQKmBfqYa6sV8iB9qwz9P9l&X-Amz-Signature=9a55665a5a4bb976b5aa600d68b89847c0a3891aec1f9acb19d44b4784855c5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T42IFI5X%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6kuWnAE30hWV8U%2B%2BhEmOWskEp3iuS0vYCODj9X3R%2B1AIgdbuhYV%2Fg4rNSSfkIsffVejOZSeLSf%2FGQgpaYb6Q3a48qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjsTA37nYIGgJysNCrcA7MO4M7bmy46oeaBrdO%2BtQ5I5z6bsh%2FqJjKP7kwLzMo8Ms2kwxJK67qBapsSj0LZp8dvraXPJpo6Aua3z8rbWPLREVPYEual%2F4KI2Sli%2FmV8CLKm0y13Lr1KmLHTY6TnaRb30W%2F5dsWUj52slbjhS%2B7CN4i8J70BRAQZ8bPzqiC3JFhMgpEnlrH8z8jG%2BnMaIvmrIPOAZSv7E4slLpj6OVcUcZcpz0mgFbfQ8x8WfNkT6W5b%2BPpR7wElVJhSQd1YWieSmoGsyk64k9R%2FwvBnyv%2BA9%2BgnNvdoZOg2q1BG5C7LtUTesDtzMnaT7sx15GRRMxUkEVo1vf9np8bUuaMU1zb2MYhHlZPlAJvaaoRY62YussvdQegCRZXqXwzsjPNXHOfaBem%2FBc%2FKuVBdWs5XdvG6HuOq5WeNJ3nXtXtNHMx6JmSasG6e5LXncKb7qWrwGNHpDl1CFms7wlHJaQoNHUHLeFVgZquIu3%2F9V%2FuuiO3Dmv3wBIZ3WN%2BXrP6sHGs8QhOD8SwM5dOJlVgIQUAErY2g26nE64BReVpTJ9YfRNsjcsneUKC11zXl9mtihgC6aEoUp%2BG6%2FBEdwNEuaOjKHGV2LJnE3M%2FtiNkiEPsI5Dn323v39jr4Pay5vv6tMN2648QGOqUB8QNkgtyBe3M4ROR3%2B3Be6GJflZCYNmiS3qOPwAJb8jKdn3yFAMvBE6UZJpAvuJ68XDghC3S5QAPZDCZFTwaWOZwDzLKZiAAi9Ds6MNnq%2FAUuVSY4A6YDhjIkYmAQoLe3HBZ%2B2TfYHsRhVTdiRQKD%2BrFS%2B3VERlnqVtRGo2GBCaZvK6yImXRZX%2F0YBkDPAahj2zIJDxQKmBfqYa6sV8iB9qwz9P9l&X-Amz-Signature=38a5e6f269f2b179c0b141947572364c228ea3ee9f9ee1d6bb7e286a299522bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T42IFI5X%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6kuWnAE30hWV8U%2B%2BhEmOWskEp3iuS0vYCODj9X3R%2B1AIgdbuhYV%2Fg4rNSSfkIsffVejOZSeLSf%2FGQgpaYb6Q3a48qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjsTA37nYIGgJysNCrcA7MO4M7bmy46oeaBrdO%2BtQ5I5z6bsh%2FqJjKP7kwLzMo8Ms2kwxJK67qBapsSj0LZp8dvraXPJpo6Aua3z8rbWPLREVPYEual%2F4KI2Sli%2FmV8CLKm0y13Lr1KmLHTY6TnaRb30W%2F5dsWUj52slbjhS%2B7CN4i8J70BRAQZ8bPzqiC3JFhMgpEnlrH8z8jG%2BnMaIvmrIPOAZSv7E4slLpj6OVcUcZcpz0mgFbfQ8x8WfNkT6W5b%2BPpR7wElVJhSQd1YWieSmoGsyk64k9R%2FwvBnyv%2BA9%2BgnNvdoZOg2q1BG5C7LtUTesDtzMnaT7sx15GRRMxUkEVo1vf9np8bUuaMU1zb2MYhHlZPlAJvaaoRY62YussvdQegCRZXqXwzsjPNXHOfaBem%2FBc%2FKuVBdWs5XdvG6HuOq5WeNJ3nXtXtNHMx6JmSasG6e5LXncKb7qWrwGNHpDl1CFms7wlHJaQoNHUHLeFVgZquIu3%2F9V%2FuuiO3Dmv3wBIZ3WN%2BXrP6sHGs8QhOD8SwM5dOJlVgIQUAErY2g26nE64BReVpTJ9YfRNsjcsneUKC11zXl9mtihgC6aEoUp%2BG6%2FBEdwNEuaOjKHGV2LJnE3M%2FtiNkiEPsI5Dn323v39jr4Pay5vv6tMN2648QGOqUB8QNkgtyBe3M4ROR3%2B3Be6GJflZCYNmiS3qOPwAJb8jKdn3yFAMvBE6UZJpAvuJ68XDghC3S5QAPZDCZFTwaWOZwDzLKZiAAi9Ds6MNnq%2FAUuVSY4A6YDhjIkYmAQoLe3HBZ%2B2TfYHsRhVTdiRQKD%2BrFS%2B3VERlnqVtRGo2GBCaZvK6yImXRZX%2F0YBkDPAahj2zIJDxQKmBfqYa6sV8iB9qwz9P9l&X-Amz-Signature=0ce2609326c91d27a461b06929817aec2889e59880eae8038712db8b866859cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If you want to make a custom world here is a [guide from Articulated Robotics](https://www.youtube.com/watch?v=K4rHglJW7Hg) on how to do so

{{% /alert %}}

## Adding Gazebo to launch file

Finally to update the launch file we have to get the `bridge_config.yaml` and `my_world.sdf`

```python
def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config
    bridge_config_path = os.path.join(pkg_share, 'config', 'bridge_config.yaml') # gets location of gazebo config
    world_path = os.path.join(pkg_share, 'world', 'my_world.sdf') # gets the gazebo world file
    
    robot_state_publisher_node = Node(
    ...
```

We also must add the `use_sim_time` parameter to `robot_state_publisher` because we are using a simulator 

```python
    robot_state_publisher_node = Node(
        package='robot_state_publisher',
        executable='robot_state_publisher',
        parameters=[{'robot_description': Command(['xacro ', default_model_path])},
        {'use_sim_time': LaunchConfiguration('use_sim_time')}]
    )
```

Here are the nodes required to start Gazebo

```python
    gz_server = GzServer(
        world_sdf_file=world_path,
        container_name='ros_gz_container',
        create_own_container='True',
        use_composition='True',
    )
    ros_gz_bridge = RosGzBridge(
        bridge_name='ros_gz_bridge',
        config_file=bridge_config_path,
        container_name='ros_gz_container',
        create_own_container='False',
        use_composition='True',
    )
    ros_gz_sim_share = get_package_share_directory('ros_gz_sim')
    gz_spawn_model_launch_source = os.path.join(ros_gz_sim_share, "launch", "gz_spawn_model.launch.py")
    spawn_entity = IncludeLaunchDescription(
        PythonLaunchDescriptionSource(gz_spawn_model_launch_source),
        launch_arguments={
            'world': 'my_world',
            'topic': '/robot_description',
            'entity_name': 'mbot',
            'z': '0.65',
        }.items(),
    )
```

At the bottem remember to comment out `my_node` and swap it out for the Gazebo nodes

```python

    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        # my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz
        
        # stuff to start gazebo
        ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        gz_server,
        ros_gz_bridge,
        spawn_entity,
    ])
```

Remember to build because we added `bridge_config.yaml` and `my_world.sdf` to the package

```bash
colcon build --symlink-install
```

To run add the new argument `use_sim_time:=True` to correctly use Gazebo

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

{{% alert context="warning" %}}

# Always use `use_sim_time:=True` flag when using Gazebo

{{% /alert %}}

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T42IFI5X%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6kuWnAE30hWV8U%2B%2BhEmOWskEp3iuS0vYCODj9X3R%2B1AIgdbuhYV%2Fg4rNSSfkIsffVejOZSeLSf%2FGQgpaYb6Q3a48qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjsTA37nYIGgJysNCrcA7MO4M7bmy46oeaBrdO%2BtQ5I5z6bsh%2FqJjKP7kwLzMo8Ms2kwxJK67qBapsSj0LZp8dvraXPJpo6Aua3z8rbWPLREVPYEual%2F4KI2Sli%2FmV8CLKm0y13Lr1KmLHTY6TnaRb30W%2F5dsWUj52slbjhS%2B7CN4i8J70BRAQZ8bPzqiC3JFhMgpEnlrH8z8jG%2BnMaIvmrIPOAZSv7E4slLpj6OVcUcZcpz0mgFbfQ8x8WfNkT6W5b%2BPpR7wElVJhSQd1YWieSmoGsyk64k9R%2FwvBnyv%2BA9%2BgnNvdoZOg2q1BG5C7LtUTesDtzMnaT7sx15GRRMxUkEVo1vf9np8bUuaMU1zb2MYhHlZPlAJvaaoRY62YussvdQegCRZXqXwzsjPNXHOfaBem%2FBc%2FKuVBdWs5XdvG6HuOq5WeNJ3nXtXtNHMx6JmSasG6e5LXncKb7qWrwGNHpDl1CFms7wlHJaQoNHUHLeFVgZquIu3%2F9V%2FuuiO3Dmv3wBIZ3WN%2BXrP6sHGs8QhOD8SwM5dOJlVgIQUAErY2g26nE64BReVpTJ9YfRNsjcsneUKC11zXl9mtihgC6aEoUp%2BG6%2FBEdwNEuaOjKHGV2LJnE3M%2FtiNkiEPsI5Dn323v39jr4Pay5vv6tMN2648QGOqUB8QNkgtyBe3M4ROR3%2B3Be6GJflZCYNmiS3qOPwAJb8jKdn3yFAMvBE6UZJpAvuJ68XDghC3S5QAPZDCZFTwaWOZwDzLKZiAAi9Ds6MNnq%2FAUuVSY4A6YDhjIkYmAQoLe3HBZ%2B2TfYHsRhVTdiRQKD%2BrFS%2B3VERlnqVtRGo2GBCaZvK6yImXRZX%2F0YBkDPAahj2zIJDxQKmBfqYa6sV8iB9qwz9P9l&X-Amz-Signature=b750bd33423e6df24d2c48455383bc1ae06a61cca4b485d07b4df691ca636ce3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T42IFI5X%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6kuWnAE30hWV8U%2B%2BhEmOWskEp3iuS0vYCODj9X3R%2B1AIgdbuhYV%2Fg4rNSSfkIsffVejOZSeLSf%2FGQgpaYb6Q3a48qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjsTA37nYIGgJysNCrcA7MO4M7bmy46oeaBrdO%2BtQ5I5z6bsh%2FqJjKP7kwLzMo8Ms2kwxJK67qBapsSj0LZp8dvraXPJpo6Aua3z8rbWPLREVPYEual%2F4KI2Sli%2FmV8CLKm0y13Lr1KmLHTY6TnaRb30W%2F5dsWUj52slbjhS%2B7CN4i8J70BRAQZ8bPzqiC3JFhMgpEnlrH8z8jG%2BnMaIvmrIPOAZSv7E4slLpj6OVcUcZcpz0mgFbfQ8x8WfNkT6W5b%2BPpR7wElVJhSQd1YWieSmoGsyk64k9R%2FwvBnyv%2BA9%2BgnNvdoZOg2q1BG5C7LtUTesDtzMnaT7sx15GRRMxUkEVo1vf9np8bUuaMU1zb2MYhHlZPlAJvaaoRY62YussvdQegCRZXqXwzsjPNXHOfaBem%2FBc%2FKuVBdWs5XdvG6HuOq5WeNJ3nXtXtNHMx6JmSasG6e5LXncKb7qWrwGNHpDl1CFms7wlHJaQoNHUHLeFVgZquIu3%2F9V%2FuuiO3Dmv3wBIZ3WN%2BXrP6sHGs8QhOD8SwM5dOJlVgIQUAErY2g26nE64BReVpTJ9YfRNsjcsneUKC11zXl9mtihgC6aEoUp%2BG6%2FBEdwNEuaOjKHGV2LJnE3M%2FtiNkiEPsI5Dn323v39jr4Pay5vv6tMN2648QGOqUB8QNkgtyBe3M4ROR3%2B3Be6GJflZCYNmiS3qOPwAJb8jKdn3yFAMvBE6UZJpAvuJ68XDghC3S5QAPZDCZFTwaWOZwDzLKZiAAi9Ds6MNnq%2FAUuVSY4A6YDhjIkYmAQoLe3HBZ%2B2TfYHsRhVTdiRQKD%2BrFS%2B3VERlnqVtRGo2GBCaZvK6yImXRZX%2F0YBkDPAahj2zIJDxQKmBfqYa6sV8iB9qwz9P9l&X-Amz-Signature=53d218c42725396ccd6ad7670d535db701af78a526778c011f56d93a5dd03885&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
