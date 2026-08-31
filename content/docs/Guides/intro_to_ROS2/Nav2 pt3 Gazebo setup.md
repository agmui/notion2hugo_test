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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5YSRM3Z%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA28Xgi%2B%2BH10Lqa8UioS6Sn9aQ%2FUT7v2QOZY76yIn1M7AiAJtPoNE9j8nRVFRhK7D9jzWYG9fRS3sIyzFfMuzj0qIyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI7hgKE8A1fzoBbxTKtwDutxgoi3R7uhjbh9ih%2FSL90WVkGKfpKhJwNO2v9olbE5wnJ10tbbkn%2BM%2FmsK6FcwLhrdS8eqTn1aB%2FmXIB%2B5VHy%2Bt0NcAGfk6MHGv9CD6iLie4%2FOxBwywlLtXJK3XXHsRh%2FMN3CF189hnXbAdvYIZTuoTRpIVzjIDv1nLtg3vlEtFDAYsTcB26ShRtxplVMigpmqPgHckoKVGTwc%2FUKee4nZ5fEFUQtjznjYXVloDmwgLm%2Fe%2B9Si8bTTtp6zdYx2thcY8no69L6qdOzz2zw5Wz6utnhugGPlNC1Co%2F1NEArta96nnA%2BACwxAcLXuCIkffp%2B0zASCdRNkcGbJsxOYiZkOyO9617KfL%2FlCnSJM03Tkb7nB%2FP%2B0xmHhg9bHP2f3nqwjskOzog8vo73JBEsAMLWHLBdNXRWphQ7FIKPDa%2FbDu16%2BAp0UlIzkEBKrgv00s%2BIlXUfPhiCPnTaff%2B%2B5XWHq%2BjNCKB13tK%2B3SySxsBeY6KTpaKRNv9LKKKJssoAAlg5vYND2LdSvIC%2Bm%2FLyTtHFBJ6SRjJ0gyLghccGU0Vbd3W2euRtJRldeC%2Be1zXkjg74cJtiOkPFZ39FzqyKZBhkA62BPK3UD2fZ9%2BH%2BO5lLpnNjBnpnAUElQkhiwwnd7T1AY6pgGuTURk8KJTfJRe%2BV0GwAkkK0q%2Btip9UbvghpS1Zn2bPRw%2BO7pN0UraJq7AWDIu%2FabaZYDAMa7Htb%2FOB9b%2F%2FNEXRt74ydQd5Z3tb8Vly284Dzsh2dxTWvcaQ0Y4A9JGZxJBpx9x%2BTfmr0me4sFJE5eQq1uL%2FPuy8ZMcg4ChnGmk0oJZoxy2KlQoLiYUJOrm12dM%2FrcsxAOu7LCljnLmPvxP11u2YLdK&X-Amz-Signature=82f90a3a2bc8269930bc156e62d3c6fa1b00267af40326be0a572d299d166db7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/cmd_vel` | geometry_msgs/Twist |

{{< /table >}}


#### Outputs:

| **Name**        | **Type**               |
| --------------- | ---------------------- |
| `/joint_states` | sensor_msg/JointState  |
| `/odom`         | nav_msgs/Odometry      |
| `/tf`           | simulated robot joints |

#### Params:

| **Name**         | **Type** |
| ---------------- | -------- |
| `config_file`    | file     |
| `world_sdf_file` | file     |

#### description:

Simulates a whole robot and world to debug and test quickly

{{% /alert %}}

In the last guide  was what our nodes looked like

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5YSRM3Z%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA28Xgi%2B%2BH10Lqa8UioS6Sn9aQ%2FUT7v2QOZY76yIn1M7AiAJtPoNE9j8nRVFRhK7D9jzWYG9fRS3sIyzFfMuzj0qIyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI7hgKE8A1fzoBbxTKtwDutxgoi3R7uhjbh9ih%2FSL90WVkGKfpKhJwNO2v9olbE5wnJ10tbbkn%2BM%2FmsK6FcwLhrdS8eqTn1aB%2FmXIB%2B5VHy%2Bt0NcAGfk6MHGv9CD6iLie4%2FOxBwywlLtXJK3XXHsRh%2FMN3CF189hnXbAdvYIZTuoTRpIVzjIDv1nLtg3vlEtFDAYsTcB26ShRtxplVMigpmqPgHckoKVGTwc%2FUKee4nZ5fEFUQtjznjYXVloDmwgLm%2Fe%2B9Si8bTTtp6zdYx2thcY8no69L6qdOzz2zw5Wz6utnhugGPlNC1Co%2F1NEArta96nnA%2BACwxAcLXuCIkffp%2B0zASCdRNkcGbJsxOYiZkOyO9617KfL%2FlCnSJM03Tkb7nB%2FP%2B0xmHhg9bHP2f3nqwjskOzog8vo73JBEsAMLWHLBdNXRWphQ7FIKPDa%2FbDu16%2BAp0UlIzkEBKrgv00s%2BIlXUfPhiCPnTaff%2B%2B5XWHq%2BjNCKB13tK%2B3SySxsBeY6KTpaKRNv9LKKKJssoAAlg5vYND2LdSvIC%2Bm%2FLyTtHFBJ6SRjJ0gyLghccGU0Vbd3W2euRtJRldeC%2Be1zXkjg74cJtiOkPFZ39FzqyKZBhkA62BPK3UD2fZ9%2BH%2BO5lLpnNjBnpnAUElQkhiwwnd7T1AY6pgGuTURk8KJTfJRe%2BV0GwAkkK0q%2Btip9UbvghpS1Zn2bPRw%2BO7pN0UraJq7AWDIu%2FabaZYDAMa7Htb%2FOB9b%2F%2FNEXRt74ydQd5Z3tb8Vly284Dzsh2dxTWvcaQ0Y4A9JGZxJBpx9x%2BTfmr0me4sFJE5eQq1uL%2FPuy8ZMcg4ChnGmk0oJZoxy2KlQoLiYUJOrm12dM%2FrcsxAOu7LCljnLmPvxP11u2YLdK&X-Amz-Signature=c7e0c25bbe5480613d7b945d7d1d740e14a94a3b33617ec0eec9a5ce903adead&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5YSRM3Z%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA28Xgi%2B%2BH10Lqa8UioS6Sn9aQ%2FUT7v2QOZY76yIn1M7AiAJtPoNE9j8nRVFRhK7D9jzWYG9fRS3sIyzFfMuzj0qIyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI7hgKE8A1fzoBbxTKtwDutxgoi3R7uhjbh9ih%2FSL90WVkGKfpKhJwNO2v9olbE5wnJ10tbbkn%2BM%2FmsK6FcwLhrdS8eqTn1aB%2FmXIB%2B5VHy%2Bt0NcAGfk6MHGv9CD6iLie4%2FOxBwywlLtXJK3XXHsRh%2FMN3CF189hnXbAdvYIZTuoTRpIVzjIDv1nLtg3vlEtFDAYsTcB26ShRtxplVMigpmqPgHckoKVGTwc%2FUKee4nZ5fEFUQtjznjYXVloDmwgLm%2Fe%2B9Si8bTTtp6zdYx2thcY8no69L6qdOzz2zw5Wz6utnhugGPlNC1Co%2F1NEArta96nnA%2BACwxAcLXuCIkffp%2B0zASCdRNkcGbJsxOYiZkOyO9617KfL%2FlCnSJM03Tkb7nB%2FP%2B0xmHhg9bHP2f3nqwjskOzog8vo73JBEsAMLWHLBdNXRWphQ7FIKPDa%2FbDu16%2BAp0UlIzkEBKrgv00s%2BIlXUfPhiCPnTaff%2B%2B5XWHq%2BjNCKB13tK%2B3SySxsBeY6KTpaKRNv9LKKKJssoAAlg5vYND2LdSvIC%2Bm%2FLyTtHFBJ6SRjJ0gyLghccGU0Vbd3W2euRtJRldeC%2Be1zXkjg74cJtiOkPFZ39FzqyKZBhkA62BPK3UD2fZ9%2BH%2BO5lLpnNjBnpnAUElQkhiwwnd7T1AY6pgGuTURk8KJTfJRe%2BV0GwAkkK0q%2Btip9UbvghpS1Zn2bPRw%2BO7pN0UraJq7AWDIu%2FabaZYDAMa7Htb%2FOB9b%2F%2FNEXRt74ydQd5Z3tb8Vly284Dzsh2dxTWvcaQ0Y4A9JGZxJBpx9x%2BTfmr0me4sFJE5eQq1uL%2FPuy8ZMcg4ChnGmk0oJZoxy2KlQoLiYUJOrm12dM%2FrcsxAOu7LCljnLmPvxP11u2YLdK&X-Amz-Signature=a87922080fd959c150f8e1e0a6182c34956c86ea72c858a449b94bf94daf8855&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5YSRM3Z%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA28Xgi%2B%2BH10Lqa8UioS6Sn9aQ%2FUT7v2QOZY76yIn1M7AiAJtPoNE9j8nRVFRhK7D9jzWYG9fRS3sIyzFfMuzj0qIyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI7hgKE8A1fzoBbxTKtwDutxgoi3R7uhjbh9ih%2FSL90WVkGKfpKhJwNO2v9olbE5wnJ10tbbkn%2BM%2FmsK6FcwLhrdS8eqTn1aB%2FmXIB%2B5VHy%2Bt0NcAGfk6MHGv9CD6iLie4%2FOxBwywlLtXJK3XXHsRh%2FMN3CF189hnXbAdvYIZTuoTRpIVzjIDv1nLtg3vlEtFDAYsTcB26ShRtxplVMigpmqPgHckoKVGTwc%2FUKee4nZ5fEFUQtjznjYXVloDmwgLm%2Fe%2B9Si8bTTtp6zdYx2thcY8no69L6qdOzz2zw5Wz6utnhugGPlNC1Co%2F1NEArta96nnA%2BACwxAcLXuCIkffp%2B0zASCdRNkcGbJsxOYiZkOyO9617KfL%2FlCnSJM03Tkb7nB%2FP%2B0xmHhg9bHP2f3nqwjskOzog8vo73JBEsAMLWHLBdNXRWphQ7FIKPDa%2FbDu16%2BAp0UlIzkEBKrgv00s%2BIlXUfPhiCPnTaff%2B%2B5XWHq%2BjNCKB13tK%2B3SySxsBeY6KTpaKRNv9LKKKJssoAAlg5vYND2LdSvIC%2Bm%2FLyTtHFBJ6SRjJ0gyLghccGU0Vbd3W2euRtJRldeC%2Be1zXkjg74cJtiOkPFZ39FzqyKZBhkA62BPK3UD2fZ9%2BH%2BO5lLpnNjBnpnAUElQkhiwwnd7T1AY6pgGuTURk8KJTfJRe%2BV0GwAkkK0q%2Btip9UbvghpS1Zn2bPRw%2BO7pN0UraJq7AWDIu%2FabaZYDAMa7Htb%2FOB9b%2F%2FNEXRt74ydQd5Z3tb8Vly284Dzsh2dxTWvcaQ0Y4A9JGZxJBpx9x%2BTfmr0me4sFJE5eQq1uL%2FPuy8ZMcg4ChnGmk0oJZoxy2KlQoLiYUJOrm12dM%2FrcsxAOu7LCljnLmPvxP11u2YLdK&X-Amz-Signature=0901074cea7a629cd711d010c9e1d82c353c9d641b301a44c320f59688a39c48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml "17-21"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDDKFQN5%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAIpCDkugMugPeEOsrtT7ko%2BcC0N2RQ3W3WKjpYq8AwJAiEAy6ufrTvnCAONCC8uvAWaV%2F3RHbdFU8waPEaGtXr3xUQqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXClvnS0LZNgV4z8yrcAzlS0etmVHEa9jGZi5UwrOfW09s5hQ7uZTwmOyZtpy7%2FK%2By1NSuqW0oVCClLC1NqHxFAn5VT3MylVBxk2eXtLbnYKA94ZpRliUWL%2Fjo0eHdg1STdKRzOoXitOACN0i5yF20Ltle486R33xmyodDdLZys5HrLd58dMZVglMlgfTpGYErQmYlk0ok0jKj68zIwQDL1LP8bjRvC7RCXsa8ngBspf5PsCwXZiVNoHMfCYih6VSuYonbZR%2BHAiCNvnYkGP2m1cMII%2FE6v1sEdwY9caxalNWt5TB0VsciCIHdEJ24SizygTmPg88a7hg5IGTWvzRPdjBQgXsFa3K5lF%2BUhW%2FA8vFXSrps%2FSAueZLYTioUmB3BBuQINm1qe0bBJGafNI0qxbuGG2iE7BMr8VQk7RsNCCh2CPWBrxKstsLoWNreW4wf429i9OB3RAUEP3M6z%2Bid4VinaO19o0hrJ0E1c%2B1QTrp9SP%2FZu8VgFYu6q6IvV%2Fks%2FR7wfhJnaHpek6HWMzaRKWu1eebZUm%2FkF2786LEpXtwkgtgBDBYvQLNOQ%2BXBxsFRJvJU1HdhJ44vEyPYJb2klrzu3RzUdeBZpjRjw06QtD52R%2Bw9d13%2Bydjozn1wbQ%2BURSFqcLssbbMywMMjd09QGOqUBDFE%2FSpb%2FdQcV71b8%2BYTHcrOtQ4OGxQfkn0rnJsyX4Bvs46w3HWWHVVgs9Vfy%2FUUnoiOr2MzLU%2Fy7hsJz%2B4an2M9inQepiAj%2FJ2U%2FCnqUD3V1GffKOyrZvz7wBF2kfwNxmNeShe4hEinTpwRAnfaFgTMfaoqxSIwmVLQpi2nopD51eWHX%2FVv9GOqGGJoJhOhtJlqazRrPzZp%2BJuIcvXPbxCxMlFe3&X-Amz-Signature=fd83eb611e022d16b73c7541bf649dddf43e392e1224d0a2f422851a582d98c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5YSRM3Z%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA28Xgi%2B%2BH10Lqa8UioS6Sn9aQ%2FUT7v2QOZY76yIn1M7AiAJtPoNE9j8nRVFRhK7D9jzWYG9fRS3sIyzFfMuzj0qIyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI7hgKE8A1fzoBbxTKtwDutxgoi3R7uhjbh9ih%2FSL90WVkGKfpKhJwNO2v9olbE5wnJ10tbbkn%2BM%2FmsK6FcwLhrdS8eqTn1aB%2FmXIB%2B5VHy%2Bt0NcAGfk6MHGv9CD6iLie4%2FOxBwywlLtXJK3XXHsRh%2FMN3CF189hnXbAdvYIZTuoTRpIVzjIDv1nLtg3vlEtFDAYsTcB26ShRtxplVMigpmqPgHckoKVGTwc%2FUKee4nZ5fEFUQtjznjYXVloDmwgLm%2Fe%2B9Si8bTTtp6zdYx2thcY8no69L6qdOzz2zw5Wz6utnhugGPlNC1Co%2F1NEArta96nnA%2BACwxAcLXuCIkffp%2B0zASCdRNkcGbJsxOYiZkOyO9617KfL%2FlCnSJM03Tkb7nB%2FP%2B0xmHhg9bHP2f3nqwjskOzog8vo73JBEsAMLWHLBdNXRWphQ7FIKPDa%2FbDu16%2BAp0UlIzkEBKrgv00s%2BIlXUfPhiCPnTaff%2B%2B5XWHq%2BjNCKB13tK%2B3SySxsBeY6KTpaKRNv9LKKKJssoAAlg5vYND2LdSvIC%2Bm%2FLyTtHFBJ6SRjJ0gyLghccGU0Vbd3W2euRtJRldeC%2Be1zXkjg74cJtiOkPFZ39FzqyKZBhkA62BPK3UD2fZ9%2BH%2BO5lLpnNjBnpnAUElQkhiwwnd7T1AY6pgGuTURk8KJTfJRe%2BV0GwAkkK0q%2Btip9UbvghpS1Zn2bPRw%2BO7pN0UraJq7AWDIu%2FabaZYDAMa7Htb%2FOB9b%2F%2FNEXRt74ydQd5Z3tb8Vly284Dzsh2dxTWvcaQ0Y4A9JGZxJBpx9x%2BTfmr0me4sFJE5eQq1uL%2FPuy8ZMcg4ChnGmk0oJZoxy2KlQoLiYUJOrm12dM%2FrcsxAOu7LCljnLmPvxP11u2YLdK&X-Amz-Signature=3d503934d6d1d97c0bcb9cdb9f868335ad2b29bd22249d0e58555820e5f46efa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5YSRM3Z%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA28Xgi%2B%2BH10Lqa8UioS6Sn9aQ%2FUT7v2QOZY76yIn1M7AiAJtPoNE9j8nRVFRhK7D9jzWYG9fRS3sIyzFfMuzj0qIyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI7hgKE8A1fzoBbxTKtwDutxgoi3R7uhjbh9ih%2FSL90WVkGKfpKhJwNO2v9olbE5wnJ10tbbkn%2BM%2FmsK6FcwLhrdS8eqTn1aB%2FmXIB%2B5VHy%2Bt0NcAGfk6MHGv9CD6iLie4%2FOxBwywlLtXJK3XXHsRh%2FMN3CF189hnXbAdvYIZTuoTRpIVzjIDv1nLtg3vlEtFDAYsTcB26ShRtxplVMigpmqPgHckoKVGTwc%2FUKee4nZ5fEFUQtjznjYXVloDmwgLm%2Fe%2B9Si8bTTtp6zdYx2thcY8no69L6qdOzz2zw5Wz6utnhugGPlNC1Co%2F1NEArta96nnA%2BACwxAcLXuCIkffp%2B0zASCdRNkcGbJsxOYiZkOyO9617KfL%2FlCnSJM03Tkb7nB%2FP%2B0xmHhg9bHP2f3nqwjskOzog8vo73JBEsAMLWHLBdNXRWphQ7FIKPDa%2FbDu16%2BAp0UlIzkEBKrgv00s%2BIlXUfPhiCPnTaff%2B%2B5XWHq%2BjNCKB13tK%2B3SySxsBeY6KTpaKRNv9LKKKJssoAAlg5vYND2LdSvIC%2Bm%2FLyTtHFBJ6SRjJ0gyLghccGU0Vbd3W2euRtJRldeC%2Be1zXkjg74cJtiOkPFZ39FzqyKZBhkA62BPK3UD2fZ9%2BH%2BO5lLpnNjBnpnAUElQkhiwwnd7T1AY6pgGuTURk8KJTfJRe%2BV0GwAkkK0q%2Btip9UbvghpS1Zn2bPRw%2BO7pN0UraJq7AWDIu%2FabaZYDAMa7Htb%2FOB9b%2F%2FNEXRt74ydQd5Z3tb8Vly284Dzsh2dxTWvcaQ0Y4A9JGZxJBpx9x%2BTfmr0me4sFJE5eQq1uL%2FPuy8ZMcg4ChnGmk0oJZoxy2KlQoLiYUJOrm12dM%2FrcsxAOu7LCljnLmPvxP11u2YLdK&X-Amz-Signature=0e4acabddf3f5e9fb9edaad49cef1913df87c1dd7f064821b887efe5a3e00f8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5YSRM3Z%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA28Xgi%2B%2BH10Lqa8UioS6Sn9aQ%2FUT7v2QOZY76yIn1M7AiAJtPoNE9j8nRVFRhK7D9jzWYG9fRS3sIyzFfMuzj0qIyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI7hgKE8A1fzoBbxTKtwDutxgoi3R7uhjbh9ih%2FSL90WVkGKfpKhJwNO2v9olbE5wnJ10tbbkn%2BM%2FmsK6FcwLhrdS8eqTn1aB%2FmXIB%2B5VHy%2Bt0NcAGfk6MHGv9CD6iLie4%2FOxBwywlLtXJK3XXHsRh%2FMN3CF189hnXbAdvYIZTuoTRpIVzjIDv1nLtg3vlEtFDAYsTcB26ShRtxplVMigpmqPgHckoKVGTwc%2FUKee4nZ5fEFUQtjznjYXVloDmwgLm%2Fe%2B9Si8bTTtp6zdYx2thcY8no69L6qdOzz2zw5Wz6utnhugGPlNC1Co%2F1NEArta96nnA%2BACwxAcLXuCIkffp%2B0zASCdRNkcGbJsxOYiZkOyO9617KfL%2FlCnSJM03Tkb7nB%2FP%2B0xmHhg9bHP2f3nqwjskOzog8vo73JBEsAMLWHLBdNXRWphQ7FIKPDa%2FbDu16%2BAp0UlIzkEBKrgv00s%2BIlXUfPhiCPnTaff%2B%2B5XWHq%2BjNCKB13tK%2B3SySxsBeY6KTpaKRNv9LKKKJssoAAlg5vYND2LdSvIC%2Bm%2FLyTtHFBJ6SRjJ0gyLghccGU0Vbd3W2euRtJRldeC%2Be1zXkjg74cJtiOkPFZ39FzqyKZBhkA62BPK3UD2fZ9%2BH%2BO5lLpnNjBnpnAUElQkhiwwnd7T1AY6pgGuTURk8KJTfJRe%2BV0GwAkkK0q%2Btip9UbvghpS1Zn2bPRw%2BO7pN0UraJq7AWDIu%2FabaZYDAMa7Htb%2FOB9b%2F%2FNEXRt74ydQd5Z3tb8Vly284Dzsh2dxTWvcaQ0Y4A9JGZxJBpx9x%2BTfmr0me4sFJE5eQq1uL%2FPuy8ZMcg4ChnGmk0oJZoxy2KlQoLiYUJOrm12dM%2FrcsxAOu7LCljnLmPvxP11u2YLdK&X-Amz-Signature=f940de0e0b3042790c1eac7269765fa3d88eb7a7c13c98e0750b270a230f6e02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5YSRM3Z%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA28Xgi%2B%2BH10Lqa8UioS6Sn9aQ%2FUT7v2QOZY76yIn1M7AiAJtPoNE9j8nRVFRhK7D9jzWYG9fRS3sIyzFfMuzj0qIyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI7hgKE8A1fzoBbxTKtwDutxgoi3R7uhjbh9ih%2FSL90WVkGKfpKhJwNO2v9olbE5wnJ10tbbkn%2BM%2FmsK6FcwLhrdS8eqTn1aB%2FmXIB%2B5VHy%2Bt0NcAGfk6MHGv9CD6iLie4%2FOxBwywlLtXJK3XXHsRh%2FMN3CF189hnXbAdvYIZTuoTRpIVzjIDv1nLtg3vlEtFDAYsTcB26ShRtxplVMigpmqPgHckoKVGTwc%2FUKee4nZ5fEFUQtjznjYXVloDmwgLm%2Fe%2B9Si8bTTtp6zdYx2thcY8no69L6qdOzz2zw5Wz6utnhugGPlNC1Co%2F1NEArta96nnA%2BACwxAcLXuCIkffp%2B0zASCdRNkcGbJsxOYiZkOyO9617KfL%2FlCnSJM03Tkb7nB%2FP%2B0xmHhg9bHP2f3nqwjskOzog8vo73JBEsAMLWHLBdNXRWphQ7FIKPDa%2FbDu16%2BAp0UlIzkEBKrgv00s%2BIlXUfPhiCPnTaff%2B%2B5XWHq%2BjNCKB13tK%2B3SySxsBeY6KTpaKRNv9LKKKJssoAAlg5vYND2LdSvIC%2Bm%2FLyTtHFBJ6SRjJ0gyLghccGU0Vbd3W2euRtJRldeC%2Be1zXkjg74cJtiOkPFZ39FzqyKZBhkA62BPK3UD2fZ9%2BH%2BO5lLpnNjBnpnAUElQkhiwwnd7T1AY6pgGuTURk8KJTfJRe%2BV0GwAkkK0q%2Btip9UbvghpS1Zn2bPRw%2BO7pN0UraJq7AWDIu%2FabaZYDAMa7Htb%2FOB9b%2F%2FNEXRt74ydQd5Z3tb8Vly284Dzsh2dxTWvcaQ0Y4A9JGZxJBpx9x%2BTfmr0me4sFJE5eQq1uL%2FPuy8ZMcg4ChnGmk0oJZoxy2KlQoLiYUJOrm12dM%2FrcsxAOu7LCljnLmPvxP11u2YLdK&X-Amz-Signature=0d801e13cf2309662b9b9d0be3f3cdfc9a2f39cc7beb8ea71d27ff46556a7aa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If you want to make a custom world here is a [guide from Articulated Robotics](https://www.youtube.com/watch?v=K4rHglJW7Hg) on how to do so

{{% /alert %}}

## Adding Gazebo to launch file

Finally to update the launch file we have to get the `bridge_config.yaml` and `my_world.sdf`

```python "5-5","6-6"
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

```python "5-5"
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

```python "3-3","5-5","10-13"

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5YSRM3Z%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA28Xgi%2B%2BH10Lqa8UioS6Sn9aQ%2FUT7v2QOZY76yIn1M7AiAJtPoNE9j8nRVFRhK7D9jzWYG9fRS3sIyzFfMuzj0qIyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI7hgKE8A1fzoBbxTKtwDutxgoi3R7uhjbh9ih%2FSL90WVkGKfpKhJwNO2v9olbE5wnJ10tbbkn%2BM%2FmsK6FcwLhrdS8eqTn1aB%2FmXIB%2B5VHy%2Bt0NcAGfk6MHGv9CD6iLie4%2FOxBwywlLtXJK3XXHsRh%2FMN3CF189hnXbAdvYIZTuoTRpIVzjIDv1nLtg3vlEtFDAYsTcB26ShRtxplVMigpmqPgHckoKVGTwc%2FUKee4nZ5fEFUQtjznjYXVloDmwgLm%2Fe%2B9Si8bTTtp6zdYx2thcY8no69L6qdOzz2zw5Wz6utnhugGPlNC1Co%2F1NEArta96nnA%2BACwxAcLXuCIkffp%2B0zASCdRNkcGbJsxOYiZkOyO9617KfL%2FlCnSJM03Tkb7nB%2FP%2B0xmHhg9bHP2f3nqwjskOzog8vo73JBEsAMLWHLBdNXRWphQ7FIKPDa%2FbDu16%2BAp0UlIzkEBKrgv00s%2BIlXUfPhiCPnTaff%2B%2B5XWHq%2BjNCKB13tK%2B3SySxsBeY6KTpaKRNv9LKKKJssoAAlg5vYND2LdSvIC%2Bm%2FLyTtHFBJ6SRjJ0gyLghccGU0Vbd3W2euRtJRldeC%2Be1zXkjg74cJtiOkPFZ39FzqyKZBhkA62BPK3UD2fZ9%2BH%2BO5lLpnNjBnpnAUElQkhiwwnd7T1AY6pgGuTURk8KJTfJRe%2BV0GwAkkK0q%2Btip9UbvghpS1Zn2bPRw%2BO7pN0UraJq7AWDIu%2FabaZYDAMa7Htb%2FOB9b%2F%2FNEXRt74ydQd5Z3tb8Vly284Dzsh2dxTWvcaQ0Y4A9JGZxJBpx9x%2BTfmr0me4sFJE5eQq1uL%2FPuy8ZMcg4ChnGmk0oJZoxy2KlQoLiYUJOrm12dM%2FrcsxAOu7LCljnLmPvxP11u2YLdK&X-Amz-Signature=7b05d2777c3c113d14838a16d193a6decfa94b1b3fee94f06fee32aea1003c7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5YSRM3Z%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA28Xgi%2B%2BH10Lqa8UioS6Sn9aQ%2FUT7v2QOZY76yIn1M7AiAJtPoNE9j8nRVFRhK7D9jzWYG9fRS3sIyzFfMuzj0qIyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI7hgKE8A1fzoBbxTKtwDutxgoi3R7uhjbh9ih%2FSL90WVkGKfpKhJwNO2v9olbE5wnJ10tbbkn%2BM%2FmsK6FcwLhrdS8eqTn1aB%2FmXIB%2B5VHy%2Bt0NcAGfk6MHGv9CD6iLie4%2FOxBwywlLtXJK3XXHsRh%2FMN3CF189hnXbAdvYIZTuoTRpIVzjIDv1nLtg3vlEtFDAYsTcB26ShRtxplVMigpmqPgHckoKVGTwc%2FUKee4nZ5fEFUQtjznjYXVloDmwgLm%2Fe%2B9Si8bTTtp6zdYx2thcY8no69L6qdOzz2zw5Wz6utnhugGPlNC1Co%2F1NEArta96nnA%2BACwxAcLXuCIkffp%2B0zASCdRNkcGbJsxOYiZkOyO9617KfL%2FlCnSJM03Tkb7nB%2FP%2B0xmHhg9bHP2f3nqwjskOzog8vo73JBEsAMLWHLBdNXRWphQ7FIKPDa%2FbDu16%2BAp0UlIzkEBKrgv00s%2BIlXUfPhiCPnTaff%2B%2B5XWHq%2BjNCKB13tK%2B3SySxsBeY6KTpaKRNv9LKKKJssoAAlg5vYND2LdSvIC%2Bm%2FLyTtHFBJ6SRjJ0gyLghccGU0Vbd3W2euRtJRldeC%2Be1zXkjg74cJtiOkPFZ39FzqyKZBhkA62BPK3UD2fZ9%2BH%2BO5lLpnNjBnpnAUElQkhiwwnd7T1AY6pgGuTURk8KJTfJRe%2BV0GwAkkK0q%2Btip9UbvghpS1Zn2bPRw%2BO7pN0UraJq7AWDIu%2FabaZYDAMa7Htb%2FOB9b%2F%2FNEXRt74ydQd5Z3tb8Vly284Dzsh2dxTWvcaQ0Y4A9JGZxJBpx9x%2BTfmr0me4sFJE5eQq1uL%2FPuy8ZMcg4ChnGmk0oJZoxy2KlQoLiYUJOrm12dM%2FrcsxAOu7LCljnLmPvxP11u2YLdK&X-Amz-Signature=65efa020a9dc3a8aa4b00605498614375ad501e16c5438036d7a5eeb642c2acf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


