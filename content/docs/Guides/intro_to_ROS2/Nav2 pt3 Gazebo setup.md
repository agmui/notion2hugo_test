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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGQWFJIE%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIG8uMTArBs8rLKTKv0%2Fhd44P8BYeztdjM0X2UFzTQxb4AiBYz68i%2BcZ9qR7fQpoPfmU1Deq2idR4gvuvCNIjIDVDXyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMCOaOce9qoLvgM0u5KtwD4fdsJll7mjdWTzXyDj5%2FNtI05BFkixLMf86e9JXRkHekX77lKdk7QmVBqyMxsVujIfQN%2F7VIrlypTt9QIUDlfTBYa4O4nrQ9PZpfnakHg1rwFc28aDICPgPp9QTYkk6nH7sKhOdZvlUpBVr14qF%2Fxqm55jWoP72eqaxd%2F5B1BfLQJxp5M7abadMvFrD7H5SY3%2B7FeHVPqRj9WvuhhAZw2y3qLksuAeU6nDh542%2Bc5xDIcYDN6awPvr5aNynkwEEjhGM%2FD676hODGZQ3a8oCa72p5iPAO5DXaptUoI%2BMCz7FuWlYyHNIfHhfN5EbitJeSMPnzisF8g6WvLU5Va0X23lzvEZ3og%2BkrM%2FmlsRZjnvu1%2B7kt4LvqjSiyCHn2m3a%2FrVC2byw9tR6De04omlP9%2FqvDdJtEiOII67vKsEiNAryieSoP489H4oHU%2FKi2ea3XZ9VjVGP%2FG4nWNDx53WEJ%2F8Lw7P9rsax91rPab%2FG78Qn5%2FNKS9YXRhc7ZyXoKE21pBIKUU9W%2BudWWy2RMYXgybeLPJS3PIyJzPP1dwDarFvI8iNQG%2FzCXtXRPvh1cz%2FQkT9Hs3b6eE%2BSsK7B3gL44T7IpJmrm8Wcft8CqNcrqzT%2FQP8SnyMOlxCi5QtswsvvNxAY6pgEKrbYsPgbLOqLKfin%2BvcTnbUTFlutVBzeY54UFtXbGjksJgLdZZoQNJ9EtOMDqM28SXhuF4wP5BQXdCpy9pl5jELg7zSIddibY5LDXUwYqNfwFE%2BlPHYIcZidSJc4Aum0LFeU6WRGscxbHgmS9cA8m78m8j2zHAELbQdXsyCcDLrjcXD9NlEYADJOFsd0xZnazqjsps9p5B3xPbj9G7N4vJ%2FSp961F&X-Amz-Signature=d556eb7ec1fe5abc63a2742c84ff4d95ed91872c3cd80d906f191d57fef7e4e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGQWFJIE%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIG8uMTArBs8rLKTKv0%2Fhd44P8BYeztdjM0X2UFzTQxb4AiBYz68i%2BcZ9qR7fQpoPfmU1Deq2idR4gvuvCNIjIDVDXyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMCOaOce9qoLvgM0u5KtwD4fdsJll7mjdWTzXyDj5%2FNtI05BFkixLMf86e9JXRkHekX77lKdk7QmVBqyMxsVujIfQN%2F7VIrlypTt9QIUDlfTBYa4O4nrQ9PZpfnakHg1rwFc28aDICPgPp9QTYkk6nH7sKhOdZvlUpBVr14qF%2Fxqm55jWoP72eqaxd%2F5B1BfLQJxp5M7abadMvFrD7H5SY3%2B7FeHVPqRj9WvuhhAZw2y3qLksuAeU6nDh542%2Bc5xDIcYDN6awPvr5aNynkwEEjhGM%2FD676hODGZQ3a8oCa72p5iPAO5DXaptUoI%2BMCz7FuWlYyHNIfHhfN5EbitJeSMPnzisF8g6WvLU5Va0X23lzvEZ3og%2BkrM%2FmlsRZjnvu1%2B7kt4LvqjSiyCHn2m3a%2FrVC2byw9tR6De04omlP9%2FqvDdJtEiOII67vKsEiNAryieSoP489H4oHU%2FKi2ea3XZ9VjVGP%2FG4nWNDx53WEJ%2F8Lw7P9rsax91rPab%2FG78Qn5%2FNKS9YXRhc7ZyXoKE21pBIKUU9W%2BudWWy2RMYXgybeLPJS3PIyJzPP1dwDarFvI8iNQG%2FzCXtXRPvh1cz%2FQkT9Hs3b6eE%2BSsK7B3gL44T7IpJmrm8Wcft8CqNcrqzT%2FQP8SnyMOlxCi5QtswsvvNxAY6pgEKrbYsPgbLOqLKfin%2BvcTnbUTFlutVBzeY54UFtXbGjksJgLdZZoQNJ9EtOMDqM28SXhuF4wP5BQXdCpy9pl5jELg7zSIddibY5LDXUwYqNfwFE%2BlPHYIcZidSJc4Aum0LFeU6WRGscxbHgmS9cA8m78m8j2zHAELbQdXsyCcDLrjcXD9NlEYADJOFsd0xZnazqjsps9p5B3xPbj9G7N4vJ%2FSp961F&X-Amz-Signature=1fd0779b6dc88f2f7972cf06de306afb813152272c8a694e06dfb50fa605266c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGQWFJIE%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIG8uMTArBs8rLKTKv0%2Fhd44P8BYeztdjM0X2UFzTQxb4AiBYz68i%2BcZ9qR7fQpoPfmU1Deq2idR4gvuvCNIjIDVDXyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMCOaOce9qoLvgM0u5KtwD4fdsJll7mjdWTzXyDj5%2FNtI05BFkixLMf86e9JXRkHekX77lKdk7QmVBqyMxsVujIfQN%2F7VIrlypTt9QIUDlfTBYa4O4nrQ9PZpfnakHg1rwFc28aDICPgPp9QTYkk6nH7sKhOdZvlUpBVr14qF%2Fxqm55jWoP72eqaxd%2F5B1BfLQJxp5M7abadMvFrD7H5SY3%2B7FeHVPqRj9WvuhhAZw2y3qLksuAeU6nDh542%2Bc5xDIcYDN6awPvr5aNynkwEEjhGM%2FD676hODGZQ3a8oCa72p5iPAO5DXaptUoI%2BMCz7FuWlYyHNIfHhfN5EbitJeSMPnzisF8g6WvLU5Va0X23lzvEZ3og%2BkrM%2FmlsRZjnvu1%2B7kt4LvqjSiyCHn2m3a%2FrVC2byw9tR6De04omlP9%2FqvDdJtEiOII67vKsEiNAryieSoP489H4oHU%2FKi2ea3XZ9VjVGP%2FG4nWNDx53WEJ%2F8Lw7P9rsax91rPab%2FG78Qn5%2FNKS9YXRhc7ZyXoKE21pBIKUU9W%2BudWWy2RMYXgybeLPJS3PIyJzPP1dwDarFvI8iNQG%2FzCXtXRPvh1cz%2FQkT9Hs3b6eE%2BSsK7B3gL44T7IpJmrm8Wcft8CqNcrqzT%2FQP8SnyMOlxCi5QtswsvvNxAY6pgEKrbYsPgbLOqLKfin%2BvcTnbUTFlutVBzeY54UFtXbGjksJgLdZZoQNJ9EtOMDqM28SXhuF4wP5BQXdCpy9pl5jELg7zSIddibY5LDXUwYqNfwFE%2BlPHYIcZidSJc4Aum0LFeU6WRGscxbHgmS9cA8m78m8j2zHAELbQdXsyCcDLrjcXD9NlEYADJOFsd0xZnazqjsps9p5B3xPbj9G7N4vJ%2FSp961F&X-Amz-Signature=f5a24d0b6a6956e763f8fa0ffa4f1e7764b194b0fb93a1e69e9bfd74ca71c417&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGQWFJIE%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIG8uMTArBs8rLKTKv0%2Fhd44P8BYeztdjM0X2UFzTQxb4AiBYz68i%2BcZ9qR7fQpoPfmU1Deq2idR4gvuvCNIjIDVDXyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMCOaOce9qoLvgM0u5KtwD4fdsJll7mjdWTzXyDj5%2FNtI05BFkixLMf86e9JXRkHekX77lKdk7QmVBqyMxsVujIfQN%2F7VIrlypTt9QIUDlfTBYa4O4nrQ9PZpfnakHg1rwFc28aDICPgPp9QTYkk6nH7sKhOdZvlUpBVr14qF%2Fxqm55jWoP72eqaxd%2F5B1BfLQJxp5M7abadMvFrD7H5SY3%2B7FeHVPqRj9WvuhhAZw2y3qLksuAeU6nDh542%2Bc5xDIcYDN6awPvr5aNynkwEEjhGM%2FD676hODGZQ3a8oCa72p5iPAO5DXaptUoI%2BMCz7FuWlYyHNIfHhfN5EbitJeSMPnzisF8g6WvLU5Va0X23lzvEZ3og%2BkrM%2FmlsRZjnvu1%2B7kt4LvqjSiyCHn2m3a%2FrVC2byw9tR6De04omlP9%2FqvDdJtEiOII67vKsEiNAryieSoP489H4oHU%2FKi2ea3XZ9VjVGP%2FG4nWNDx53WEJ%2F8Lw7P9rsax91rPab%2FG78Qn5%2FNKS9YXRhc7ZyXoKE21pBIKUU9W%2BudWWy2RMYXgybeLPJS3PIyJzPP1dwDarFvI8iNQG%2FzCXtXRPvh1cz%2FQkT9Hs3b6eE%2BSsK7B3gL44T7IpJmrm8Wcft8CqNcrqzT%2FQP8SnyMOlxCi5QtswsvvNxAY6pgEKrbYsPgbLOqLKfin%2BvcTnbUTFlutVBzeY54UFtXbGjksJgLdZZoQNJ9EtOMDqM28SXhuF4wP5BQXdCpy9pl5jELg7zSIddibY5LDXUwYqNfwFE%2BlPHYIcZidSJc4Aum0LFeU6WRGscxbHgmS9cA8m78m8j2zHAELbQdXsyCcDLrjcXD9NlEYADJOFsd0xZnazqjsps9p5B3xPbj9G7N4vJ%2FSp961F&X-Amz-Signature=b74706e1c2c47855190a864c92e849a3f8b4f625a30cf472427db31cfc140831&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVJ3VB5X%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIFPrqgxu%2FmkESYZag%2FWx0quMtVSqhjJzpVszCoR3g3cnAiEAyD4XXbj2fD9uj%2FbuZ0Gg2rLj9n9XWydXY%2BU1aSjsBWcq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDFc5NkW46NIH1GeUdCrcA2uU3X8tL3slTxjrMzOJO6WPSU8RTfYsaXNK7Fv%2Fc%2FzKlukStgKfID3%2F0F9sR5oH51Og1OtVYCmTPuDg47zr%2BCYfvXtTukpAM39oEs1ToF9wxgmO5ZqlLnsJQZd8QR6YYAQTq%2BLf8q7lwt8haKe0B5AI3z0bJG6oDese2mQTrE7IOySGOlyv3DPbiDkJyc1lEN3pQstz0Is%2BhsDs9PqcuZxahWmUfOYUhOtTUG7xgu1n12ddqb0YAFVbuJJO%2FoO7YuhW3X6oxAt7xmnEJ6xL4G1kIHQQVz4gWssG0HTxNfRFeceQCtW1yAS3NkPpGo1tOUfpLg4BXXDlDAulIDX6Y9C0EXAFlH8vt2k6PRuFctX2WUCxSVqehkhbGoHNhF%2FcNxuXKZigDxrYfVXk%2FTQTxL6opDodmC9w5epcvMRWtuZXxNrAl9QRaaQrih8sOlXyjjHVNk%2BdlBe9EcdV5KDMbDQxd%2F%2F%2Fm43qn%2BQ2p6irhiNKV9JscZPPSJE2Las0OhqFW7F8O8%2F5mKL3sinvQNiNkVacdQm%2B0rJCdVyLB%2BfW%2F4j1tU7rmJL6AHZVEnYL%2BQe7zPMnvbovlmIjegfIVlDDNBw3NGynydChzhy7zJDeFkZrrHQ2DNS78SBP12jEMNj8zcQGOqUBmLAjqCcoSlEJuQLh194H3lAK43uOa4nX6fJdRDdAnO4uLnfWDbC2zmSnOwuiGzi7sdzWFQkBb4M9Sq0AnO4%2FabmRu6c8TILBuw34O7NnrHSZA%2F4dXG8CTXYHYBV2pzhv5pJ%2Fy3xNjhxPIR4hyXjDv55zL%2FCk00L%2F%2FC8Oorlu1wlmDWWcJ46gVSZ2Y5%2BAmZw6q6FQxABc%2B5uupAy34i3rVGvtj25p&X-Amz-Signature=60f080273eccc2548975b91e5c15edb060bd27cde20dc712bc3e8ec838ad4435&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGQWFJIE%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIG8uMTArBs8rLKTKv0%2Fhd44P8BYeztdjM0X2UFzTQxb4AiBYz68i%2BcZ9qR7fQpoPfmU1Deq2idR4gvuvCNIjIDVDXyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMCOaOce9qoLvgM0u5KtwD4fdsJll7mjdWTzXyDj5%2FNtI05BFkixLMf86e9JXRkHekX77lKdk7QmVBqyMxsVujIfQN%2F7VIrlypTt9QIUDlfTBYa4O4nrQ9PZpfnakHg1rwFc28aDICPgPp9QTYkk6nH7sKhOdZvlUpBVr14qF%2Fxqm55jWoP72eqaxd%2F5B1BfLQJxp5M7abadMvFrD7H5SY3%2B7FeHVPqRj9WvuhhAZw2y3qLksuAeU6nDh542%2Bc5xDIcYDN6awPvr5aNynkwEEjhGM%2FD676hODGZQ3a8oCa72p5iPAO5DXaptUoI%2BMCz7FuWlYyHNIfHhfN5EbitJeSMPnzisF8g6WvLU5Va0X23lzvEZ3og%2BkrM%2FmlsRZjnvu1%2B7kt4LvqjSiyCHn2m3a%2FrVC2byw9tR6De04omlP9%2FqvDdJtEiOII67vKsEiNAryieSoP489H4oHU%2FKi2ea3XZ9VjVGP%2FG4nWNDx53WEJ%2F8Lw7P9rsax91rPab%2FG78Qn5%2FNKS9YXRhc7ZyXoKE21pBIKUU9W%2BudWWy2RMYXgybeLPJS3PIyJzPP1dwDarFvI8iNQG%2FzCXtXRPvh1cz%2FQkT9Hs3b6eE%2BSsK7B3gL44T7IpJmrm8Wcft8CqNcrqzT%2FQP8SnyMOlxCi5QtswsvvNxAY6pgEKrbYsPgbLOqLKfin%2BvcTnbUTFlutVBzeY54UFtXbGjksJgLdZZoQNJ9EtOMDqM28SXhuF4wP5BQXdCpy9pl5jELg7zSIddibY5LDXUwYqNfwFE%2BlPHYIcZidSJc4Aum0LFeU6WRGscxbHgmS9cA8m78m8j2zHAELbQdXsyCcDLrjcXD9NlEYADJOFsd0xZnazqjsps9p5B3xPbj9G7N4vJ%2FSp961F&X-Amz-Signature=d81f79643401a327bfd509156cd1f5e83783c05d27dde3ef47d60fe2bcf552f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGQWFJIE%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIG8uMTArBs8rLKTKv0%2Fhd44P8BYeztdjM0X2UFzTQxb4AiBYz68i%2BcZ9qR7fQpoPfmU1Deq2idR4gvuvCNIjIDVDXyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMCOaOce9qoLvgM0u5KtwD4fdsJll7mjdWTzXyDj5%2FNtI05BFkixLMf86e9JXRkHekX77lKdk7QmVBqyMxsVujIfQN%2F7VIrlypTt9QIUDlfTBYa4O4nrQ9PZpfnakHg1rwFc28aDICPgPp9QTYkk6nH7sKhOdZvlUpBVr14qF%2Fxqm55jWoP72eqaxd%2F5B1BfLQJxp5M7abadMvFrD7H5SY3%2B7FeHVPqRj9WvuhhAZw2y3qLksuAeU6nDh542%2Bc5xDIcYDN6awPvr5aNynkwEEjhGM%2FD676hODGZQ3a8oCa72p5iPAO5DXaptUoI%2BMCz7FuWlYyHNIfHhfN5EbitJeSMPnzisF8g6WvLU5Va0X23lzvEZ3og%2BkrM%2FmlsRZjnvu1%2B7kt4LvqjSiyCHn2m3a%2FrVC2byw9tR6De04omlP9%2FqvDdJtEiOII67vKsEiNAryieSoP489H4oHU%2FKi2ea3XZ9VjVGP%2FG4nWNDx53WEJ%2F8Lw7P9rsax91rPab%2FG78Qn5%2FNKS9YXRhc7ZyXoKE21pBIKUU9W%2BudWWy2RMYXgybeLPJS3PIyJzPP1dwDarFvI8iNQG%2FzCXtXRPvh1cz%2FQkT9Hs3b6eE%2BSsK7B3gL44T7IpJmrm8Wcft8CqNcrqzT%2FQP8SnyMOlxCi5QtswsvvNxAY6pgEKrbYsPgbLOqLKfin%2BvcTnbUTFlutVBzeY54UFtXbGjksJgLdZZoQNJ9EtOMDqM28SXhuF4wP5BQXdCpy9pl5jELg7zSIddibY5LDXUwYqNfwFE%2BlPHYIcZidSJc4Aum0LFeU6WRGscxbHgmS9cA8m78m8j2zHAELbQdXsyCcDLrjcXD9NlEYADJOFsd0xZnazqjsps9p5B3xPbj9G7N4vJ%2FSp961F&X-Amz-Signature=d9b07a9698d6c0a34e4ce98f77b57a174e70cb8a402cc6d44127ace27f3bcd3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGQWFJIE%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIG8uMTArBs8rLKTKv0%2Fhd44P8BYeztdjM0X2UFzTQxb4AiBYz68i%2BcZ9qR7fQpoPfmU1Deq2idR4gvuvCNIjIDVDXyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMCOaOce9qoLvgM0u5KtwD4fdsJll7mjdWTzXyDj5%2FNtI05BFkixLMf86e9JXRkHekX77lKdk7QmVBqyMxsVujIfQN%2F7VIrlypTt9QIUDlfTBYa4O4nrQ9PZpfnakHg1rwFc28aDICPgPp9QTYkk6nH7sKhOdZvlUpBVr14qF%2Fxqm55jWoP72eqaxd%2F5B1BfLQJxp5M7abadMvFrD7H5SY3%2B7FeHVPqRj9WvuhhAZw2y3qLksuAeU6nDh542%2Bc5xDIcYDN6awPvr5aNynkwEEjhGM%2FD676hODGZQ3a8oCa72p5iPAO5DXaptUoI%2BMCz7FuWlYyHNIfHhfN5EbitJeSMPnzisF8g6WvLU5Va0X23lzvEZ3og%2BkrM%2FmlsRZjnvu1%2B7kt4LvqjSiyCHn2m3a%2FrVC2byw9tR6De04omlP9%2FqvDdJtEiOII67vKsEiNAryieSoP489H4oHU%2FKi2ea3XZ9VjVGP%2FG4nWNDx53WEJ%2F8Lw7P9rsax91rPab%2FG78Qn5%2FNKS9YXRhc7ZyXoKE21pBIKUU9W%2BudWWy2RMYXgybeLPJS3PIyJzPP1dwDarFvI8iNQG%2FzCXtXRPvh1cz%2FQkT9Hs3b6eE%2BSsK7B3gL44T7IpJmrm8Wcft8CqNcrqzT%2FQP8SnyMOlxCi5QtswsvvNxAY6pgEKrbYsPgbLOqLKfin%2BvcTnbUTFlutVBzeY54UFtXbGjksJgLdZZoQNJ9EtOMDqM28SXhuF4wP5BQXdCpy9pl5jELg7zSIddibY5LDXUwYqNfwFE%2BlPHYIcZidSJc4Aum0LFeU6WRGscxbHgmS9cA8m78m8j2zHAELbQdXsyCcDLrjcXD9NlEYADJOFsd0xZnazqjsps9p5B3xPbj9G7N4vJ%2FSp961F&X-Amz-Signature=c111d7b694b9a40bf6f950f313b1c718fe5e957a70de1fd632a013991dfd13cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGQWFJIE%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIG8uMTArBs8rLKTKv0%2Fhd44P8BYeztdjM0X2UFzTQxb4AiBYz68i%2BcZ9qR7fQpoPfmU1Deq2idR4gvuvCNIjIDVDXyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMCOaOce9qoLvgM0u5KtwD4fdsJll7mjdWTzXyDj5%2FNtI05BFkixLMf86e9JXRkHekX77lKdk7QmVBqyMxsVujIfQN%2F7VIrlypTt9QIUDlfTBYa4O4nrQ9PZpfnakHg1rwFc28aDICPgPp9QTYkk6nH7sKhOdZvlUpBVr14qF%2Fxqm55jWoP72eqaxd%2F5B1BfLQJxp5M7abadMvFrD7H5SY3%2B7FeHVPqRj9WvuhhAZw2y3qLksuAeU6nDh542%2Bc5xDIcYDN6awPvr5aNynkwEEjhGM%2FD676hODGZQ3a8oCa72p5iPAO5DXaptUoI%2BMCz7FuWlYyHNIfHhfN5EbitJeSMPnzisF8g6WvLU5Va0X23lzvEZ3og%2BkrM%2FmlsRZjnvu1%2B7kt4LvqjSiyCHn2m3a%2FrVC2byw9tR6De04omlP9%2FqvDdJtEiOII67vKsEiNAryieSoP489H4oHU%2FKi2ea3XZ9VjVGP%2FG4nWNDx53WEJ%2F8Lw7P9rsax91rPab%2FG78Qn5%2FNKS9YXRhc7ZyXoKE21pBIKUU9W%2BudWWy2RMYXgybeLPJS3PIyJzPP1dwDarFvI8iNQG%2FzCXtXRPvh1cz%2FQkT9Hs3b6eE%2BSsK7B3gL44T7IpJmrm8Wcft8CqNcrqzT%2FQP8SnyMOlxCi5QtswsvvNxAY6pgEKrbYsPgbLOqLKfin%2BvcTnbUTFlutVBzeY54UFtXbGjksJgLdZZoQNJ9EtOMDqM28SXhuF4wP5BQXdCpy9pl5jELg7zSIddibY5LDXUwYqNfwFE%2BlPHYIcZidSJc4Aum0LFeU6WRGscxbHgmS9cA8m78m8j2zHAELbQdXsyCcDLrjcXD9NlEYADJOFsd0xZnazqjsps9p5B3xPbj9G7N4vJ%2FSp961F&X-Amz-Signature=9fe16462a4a5b667116823faa179fa2140e26e30581e762332b16271a2bfe20b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGQWFJIE%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIG8uMTArBs8rLKTKv0%2Fhd44P8BYeztdjM0X2UFzTQxb4AiBYz68i%2BcZ9qR7fQpoPfmU1Deq2idR4gvuvCNIjIDVDXyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMCOaOce9qoLvgM0u5KtwD4fdsJll7mjdWTzXyDj5%2FNtI05BFkixLMf86e9JXRkHekX77lKdk7QmVBqyMxsVujIfQN%2F7VIrlypTt9QIUDlfTBYa4O4nrQ9PZpfnakHg1rwFc28aDICPgPp9QTYkk6nH7sKhOdZvlUpBVr14qF%2Fxqm55jWoP72eqaxd%2F5B1BfLQJxp5M7abadMvFrD7H5SY3%2B7FeHVPqRj9WvuhhAZw2y3qLksuAeU6nDh542%2Bc5xDIcYDN6awPvr5aNynkwEEjhGM%2FD676hODGZQ3a8oCa72p5iPAO5DXaptUoI%2BMCz7FuWlYyHNIfHhfN5EbitJeSMPnzisF8g6WvLU5Va0X23lzvEZ3og%2BkrM%2FmlsRZjnvu1%2B7kt4LvqjSiyCHn2m3a%2FrVC2byw9tR6De04omlP9%2FqvDdJtEiOII67vKsEiNAryieSoP489H4oHU%2FKi2ea3XZ9VjVGP%2FG4nWNDx53WEJ%2F8Lw7P9rsax91rPab%2FG78Qn5%2FNKS9YXRhc7ZyXoKE21pBIKUU9W%2BudWWy2RMYXgybeLPJS3PIyJzPP1dwDarFvI8iNQG%2FzCXtXRPvh1cz%2FQkT9Hs3b6eE%2BSsK7B3gL44T7IpJmrm8Wcft8CqNcrqzT%2FQP8SnyMOlxCi5QtswsvvNxAY6pgEKrbYsPgbLOqLKfin%2BvcTnbUTFlutVBzeY54UFtXbGjksJgLdZZoQNJ9EtOMDqM28SXhuF4wP5BQXdCpy9pl5jELg7zSIddibY5LDXUwYqNfwFE%2BlPHYIcZidSJc4Aum0LFeU6WRGscxbHgmS9cA8m78m8j2zHAELbQdXsyCcDLrjcXD9NlEYADJOFsd0xZnazqjsps9p5B3xPbj9G7N4vJ%2FSp961F&X-Amz-Signature=ca4a33d96209b65a8d0b5b4361bc05e5841f23e99ea757f754b6266e42bb450a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGQWFJIE%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIG8uMTArBs8rLKTKv0%2Fhd44P8BYeztdjM0X2UFzTQxb4AiBYz68i%2BcZ9qR7fQpoPfmU1Deq2idR4gvuvCNIjIDVDXyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMCOaOce9qoLvgM0u5KtwD4fdsJll7mjdWTzXyDj5%2FNtI05BFkixLMf86e9JXRkHekX77lKdk7QmVBqyMxsVujIfQN%2F7VIrlypTt9QIUDlfTBYa4O4nrQ9PZpfnakHg1rwFc28aDICPgPp9QTYkk6nH7sKhOdZvlUpBVr14qF%2Fxqm55jWoP72eqaxd%2F5B1BfLQJxp5M7abadMvFrD7H5SY3%2B7FeHVPqRj9WvuhhAZw2y3qLksuAeU6nDh542%2Bc5xDIcYDN6awPvr5aNynkwEEjhGM%2FD676hODGZQ3a8oCa72p5iPAO5DXaptUoI%2BMCz7FuWlYyHNIfHhfN5EbitJeSMPnzisF8g6WvLU5Va0X23lzvEZ3og%2BkrM%2FmlsRZjnvu1%2B7kt4LvqjSiyCHn2m3a%2FrVC2byw9tR6De04omlP9%2FqvDdJtEiOII67vKsEiNAryieSoP489H4oHU%2FKi2ea3XZ9VjVGP%2FG4nWNDx53WEJ%2F8Lw7P9rsax91rPab%2FG78Qn5%2FNKS9YXRhc7ZyXoKE21pBIKUU9W%2BudWWy2RMYXgybeLPJS3PIyJzPP1dwDarFvI8iNQG%2FzCXtXRPvh1cz%2FQkT9Hs3b6eE%2BSsK7B3gL44T7IpJmrm8Wcft8CqNcrqzT%2FQP8SnyMOlxCi5QtswsvvNxAY6pgEKrbYsPgbLOqLKfin%2BvcTnbUTFlutVBzeY54UFtXbGjksJgLdZZoQNJ9EtOMDqM28SXhuF4wP5BQXdCpy9pl5jELg7zSIddibY5LDXUwYqNfwFE%2BlPHYIcZidSJc4Aum0LFeU6WRGscxbHgmS9cA8m78m8j2zHAELbQdXsyCcDLrjcXD9NlEYADJOFsd0xZnazqjsps9p5B3xPbj9G7N4vJ%2FSp961F&X-Amz-Signature=1179ee36e67a6be72921b93d6c3df853bd5199d94c68881ef56d292128236b28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
