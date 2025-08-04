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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSASV645%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQClnd%2FC0PTjaDFA0IjZ6%2Fu6kUHWYj%2BRojVbXAy%2Bo72YsQIgDLKu%2BeUIJN7E1NONOLAiORNbsInnpNYgC5BPxyaBOR4q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDL%2B5Ha7Gwc5AenftHircA96oGYYCZDyrluxz0sehocOsBihia43UWaJM2eX1l%2FMFc8DAQ2BFHZ4wbqYfwHR5ZZg8fxqBK%2Fqkqun%2Bz%2F9ujV%2F%2FfIP4hDTnzQoXz0TXkBZVZKBicWeuTHbKpQIyfILBdUVhTVcNYnAHD%2FbKxRK8Bh7FVlP%2F%2Fis%2Fl%2FzmS7pakJLiOMFluZY9THkG2rb3KbW8%2Bathg5iXCYc2ds5YZMAarsUFch1JohMzt9vS7SOncq4qjBBEEwdiiKI2%2BoFfaU3xeIcEOC5A57XkGqOEn2u5P7FmYOzgfjV5HA7y4f3TV7sLiGABYPj01oHHWy7l3sC0MpBLBM%2FNYT5NybJyDCU54PBnu9kawy%2FK1rOgsnT0KZrm3nmjj9qXEvCYAep%2FjxpQphpjeaVwP%2B%2FmxP0FRVtBYRDo3fS0P5jPZXy3thZE4dwRoOiejPzymBru3FV%2BfOWB9scfRrR9XHEV7usA3U6xGpqGv%2FOkRYNfPVDwTIk6f0g7QcZsOcsoRDAbfko%2BPgXtvQ0MIBjvfJWnfI7qKiKjox0YrA8SsARQTky4eST8vNHZ4u0MlKYxfOMQKiB%2Bmn0dkxctzrtkR1YNanB8dKFwG4kTAJleuu5zkYjqJ8DpvGvQ4dyfRGlqU5rMq%2BLmMNDAxMQGOqUBxklzXU212jLk5RVRCZ%2FcTBPoDQIUa87BMpSS8vJml3VqNxOwYuPwrIRhNEJuRviwx3nQQ78oM3BLJutZyT7PSE%2B7PTYBu8hxdCi2%2B%2F1ueg%2FDYl2sK8E2YRgOrm%2BROMcgCy04B4iKMR57ZsJUlmdChAIiw9hEBjYTCsN5HwP29qzJnl0mmo77j9dCD4AV1R%2FIHpS9z3Jc%2BQWCvzRhrc5MKcvgmY8K&X-Amz-Signature=be18d2799a291e7f25eb18c59f584ad67654ca6371d3b086563580306ae757fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSASV645%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQClnd%2FC0PTjaDFA0IjZ6%2Fu6kUHWYj%2BRojVbXAy%2Bo72YsQIgDLKu%2BeUIJN7E1NONOLAiORNbsInnpNYgC5BPxyaBOR4q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDL%2B5Ha7Gwc5AenftHircA96oGYYCZDyrluxz0sehocOsBihia43UWaJM2eX1l%2FMFc8DAQ2BFHZ4wbqYfwHR5ZZg8fxqBK%2Fqkqun%2Bz%2F9ujV%2F%2FfIP4hDTnzQoXz0TXkBZVZKBicWeuTHbKpQIyfILBdUVhTVcNYnAHD%2FbKxRK8Bh7FVlP%2F%2Fis%2Fl%2FzmS7pakJLiOMFluZY9THkG2rb3KbW8%2Bathg5iXCYc2ds5YZMAarsUFch1JohMzt9vS7SOncq4qjBBEEwdiiKI2%2BoFfaU3xeIcEOC5A57XkGqOEn2u5P7FmYOzgfjV5HA7y4f3TV7sLiGABYPj01oHHWy7l3sC0MpBLBM%2FNYT5NybJyDCU54PBnu9kawy%2FK1rOgsnT0KZrm3nmjj9qXEvCYAep%2FjxpQphpjeaVwP%2B%2FmxP0FRVtBYRDo3fS0P5jPZXy3thZE4dwRoOiejPzymBru3FV%2BfOWB9scfRrR9XHEV7usA3U6xGpqGv%2FOkRYNfPVDwTIk6f0g7QcZsOcsoRDAbfko%2BPgXtvQ0MIBjvfJWnfI7qKiKjox0YrA8SsARQTky4eST8vNHZ4u0MlKYxfOMQKiB%2Bmn0dkxctzrtkR1YNanB8dKFwG4kTAJleuu5zkYjqJ8DpvGvQ4dyfRGlqU5rMq%2BLmMNDAxMQGOqUBxklzXU212jLk5RVRCZ%2FcTBPoDQIUa87BMpSS8vJml3VqNxOwYuPwrIRhNEJuRviwx3nQQ78oM3BLJutZyT7PSE%2B7PTYBu8hxdCi2%2B%2F1ueg%2FDYl2sK8E2YRgOrm%2BROMcgCy04B4iKMR57ZsJUlmdChAIiw9hEBjYTCsN5HwP29qzJnl0mmo77j9dCD4AV1R%2FIHpS9z3Jc%2BQWCvzRhrc5MKcvgmY8K&X-Amz-Signature=d87152503ddea291a6d6a535d2690de1ec0bfdd0e894ff2c470504378eb0024a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSASV645%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQClnd%2FC0PTjaDFA0IjZ6%2Fu6kUHWYj%2BRojVbXAy%2Bo72YsQIgDLKu%2BeUIJN7E1NONOLAiORNbsInnpNYgC5BPxyaBOR4q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDL%2B5Ha7Gwc5AenftHircA96oGYYCZDyrluxz0sehocOsBihia43UWaJM2eX1l%2FMFc8DAQ2BFHZ4wbqYfwHR5ZZg8fxqBK%2Fqkqun%2Bz%2F9ujV%2F%2FfIP4hDTnzQoXz0TXkBZVZKBicWeuTHbKpQIyfILBdUVhTVcNYnAHD%2FbKxRK8Bh7FVlP%2F%2Fis%2Fl%2FzmS7pakJLiOMFluZY9THkG2rb3KbW8%2Bathg5iXCYc2ds5YZMAarsUFch1JohMzt9vS7SOncq4qjBBEEwdiiKI2%2BoFfaU3xeIcEOC5A57XkGqOEn2u5P7FmYOzgfjV5HA7y4f3TV7sLiGABYPj01oHHWy7l3sC0MpBLBM%2FNYT5NybJyDCU54PBnu9kawy%2FK1rOgsnT0KZrm3nmjj9qXEvCYAep%2FjxpQphpjeaVwP%2B%2FmxP0FRVtBYRDo3fS0P5jPZXy3thZE4dwRoOiejPzymBru3FV%2BfOWB9scfRrR9XHEV7usA3U6xGpqGv%2FOkRYNfPVDwTIk6f0g7QcZsOcsoRDAbfko%2BPgXtvQ0MIBjvfJWnfI7qKiKjox0YrA8SsARQTky4eST8vNHZ4u0MlKYxfOMQKiB%2Bmn0dkxctzrtkR1YNanB8dKFwG4kTAJleuu5zkYjqJ8DpvGvQ4dyfRGlqU5rMq%2BLmMNDAxMQGOqUBxklzXU212jLk5RVRCZ%2FcTBPoDQIUa87BMpSS8vJml3VqNxOwYuPwrIRhNEJuRviwx3nQQ78oM3BLJutZyT7PSE%2B7PTYBu8hxdCi2%2B%2F1ueg%2FDYl2sK8E2YRgOrm%2BROMcgCy04B4iKMR57ZsJUlmdChAIiw9hEBjYTCsN5HwP29qzJnl0mmo77j9dCD4AV1R%2FIHpS9z3Jc%2BQWCvzRhrc5MKcvgmY8K&X-Amz-Signature=88a14f6eae9d60d5d652dfa1399697702ecd926e26775eb01340a9735cb49962&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSASV645%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQClnd%2FC0PTjaDFA0IjZ6%2Fu6kUHWYj%2BRojVbXAy%2Bo72YsQIgDLKu%2BeUIJN7E1NONOLAiORNbsInnpNYgC5BPxyaBOR4q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDL%2B5Ha7Gwc5AenftHircA96oGYYCZDyrluxz0sehocOsBihia43UWaJM2eX1l%2FMFc8DAQ2BFHZ4wbqYfwHR5ZZg8fxqBK%2Fqkqun%2Bz%2F9ujV%2F%2FfIP4hDTnzQoXz0TXkBZVZKBicWeuTHbKpQIyfILBdUVhTVcNYnAHD%2FbKxRK8Bh7FVlP%2F%2Fis%2Fl%2FzmS7pakJLiOMFluZY9THkG2rb3KbW8%2Bathg5iXCYc2ds5YZMAarsUFch1JohMzt9vS7SOncq4qjBBEEwdiiKI2%2BoFfaU3xeIcEOC5A57XkGqOEn2u5P7FmYOzgfjV5HA7y4f3TV7sLiGABYPj01oHHWy7l3sC0MpBLBM%2FNYT5NybJyDCU54PBnu9kawy%2FK1rOgsnT0KZrm3nmjj9qXEvCYAep%2FjxpQphpjeaVwP%2B%2FmxP0FRVtBYRDo3fS0P5jPZXy3thZE4dwRoOiejPzymBru3FV%2BfOWB9scfRrR9XHEV7usA3U6xGpqGv%2FOkRYNfPVDwTIk6f0g7QcZsOcsoRDAbfko%2BPgXtvQ0MIBjvfJWnfI7qKiKjox0YrA8SsARQTky4eST8vNHZ4u0MlKYxfOMQKiB%2Bmn0dkxctzrtkR1YNanB8dKFwG4kTAJleuu5zkYjqJ8DpvGvQ4dyfRGlqU5rMq%2BLmMNDAxMQGOqUBxklzXU212jLk5RVRCZ%2FcTBPoDQIUa87BMpSS8vJml3VqNxOwYuPwrIRhNEJuRviwx3nQQ78oM3BLJutZyT7PSE%2B7PTYBu8hxdCi2%2B%2F1ueg%2FDYl2sK8E2YRgOrm%2BROMcgCy04B4iKMR57ZsJUlmdChAIiw9hEBjYTCsN5HwP29qzJnl0mmo77j9dCD4AV1R%2FIHpS9z3Jc%2BQWCvzRhrc5MKcvgmY8K&X-Amz-Signature=62bc05b2a92fc65ff49b3a16a919684fe948967ab22904e53854c27c76896fcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5JJEOJZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIFqFShDZdMFF9%2BECG0sh5y7KydU05a6cboExZK9vhfcwAiEAqWlzaO42uiuqaqAFhgHXwaz779MNApdq61%2FC09Zpdhcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDFEWOFMtvtGrGX9nzCrcA8Q5d0AuiVa6GKbs8PWcPYOc8VV%2FPUo66ummgl8yn%2FtlzMeYDxPN%2FJmWcRnmAXDYVhxtuyGJ4i0b18CRYgxdtEC5mqf2gzhX5P4cTsPU8Wbulpe2XE9XdXp0kLoO4wwwHy6PWv21sCJ07HILPHfsn4BygDLOxFagI6Sv7JMBVglSpmjPgnlohCpBhhyIedc9nTPMdDBdMsnzp19I3P2aC0Dt1E%2BDn89GWQ0NrempSiZsuMMrPuScVl7B8kVcvETToqKtJtIijpUdf5DlO3bj9%2FRxQKl2bC1g0CNiJRl3oYKwmjmvlL3whdztB%2F4JDydYlJNJdiYBJ10OPleLKhYQypmooORb5hLmJlABZYBJ7OCzDFUICXNtGsB7egyyUeiq3Sgrft4I%2F5Yov251mfgmuTWXshln2qLwQrhn%2FPF5Jm9QcdmdPVgHjCY4ByfGFUJicE1dfxjewjXl48bUuCAGHfbcTrWuyGVgUZRYW3Ba%2BIWFS7l9tovY1KHoJlKoEbDj8AeA7p1kR0ouzA%2FQZgHjfVGwJysD6im6YMjIPAxnpRudND7%2BI%2B4AbjZt2dM4ZwLW0Y8TfwgbJQceoP9H2%2Bi3m4ypnGNirv2kQLSxhJUpsKX%2BTsdunXQMUbuvQX%2BiMLDAxMQGOqUBXYoUjw3VE8kOzkJzxDXkw5QkuxlX5qpMyTKWeA5aPILfvDEy3S9QLIOTkX0za7kNnv5kmq9ZQusxDenduhr3OFNjLmefSbH%2BiwytE2EKUV4yoLVC2lh6hKDnmJmYeSFKzgpVEMHu57gQz8bcKUxf1DPY4yTDPSYIqeie4AzNHo2a95Vulon2sJOedCw%2Fqhk2Ij0uK7O6UUBrF0AXPACjbWJDAaYM&X-Amz-Signature=3584ffa03623c2d0e0ac14cef2b0a0d21205936bb4b7b3e383e34cc9a5144d92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSASV645%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQClnd%2FC0PTjaDFA0IjZ6%2Fu6kUHWYj%2BRojVbXAy%2Bo72YsQIgDLKu%2BeUIJN7E1NONOLAiORNbsInnpNYgC5BPxyaBOR4q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDL%2B5Ha7Gwc5AenftHircA96oGYYCZDyrluxz0sehocOsBihia43UWaJM2eX1l%2FMFc8DAQ2BFHZ4wbqYfwHR5ZZg8fxqBK%2Fqkqun%2Bz%2F9ujV%2F%2FfIP4hDTnzQoXz0TXkBZVZKBicWeuTHbKpQIyfILBdUVhTVcNYnAHD%2FbKxRK8Bh7FVlP%2F%2Fis%2Fl%2FzmS7pakJLiOMFluZY9THkG2rb3KbW8%2Bathg5iXCYc2ds5YZMAarsUFch1JohMzt9vS7SOncq4qjBBEEwdiiKI2%2BoFfaU3xeIcEOC5A57XkGqOEn2u5P7FmYOzgfjV5HA7y4f3TV7sLiGABYPj01oHHWy7l3sC0MpBLBM%2FNYT5NybJyDCU54PBnu9kawy%2FK1rOgsnT0KZrm3nmjj9qXEvCYAep%2FjxpQphpjeaVwP%2B%2FmxP0FRVtBYRDo3fS0P5jPZXy3thZE4dwRoOiejPzymBru3FV%2BfOWB9scfRrR9XHEV7usA3U6xGpqGv%2FOkRYNfPVDwTIk6f0g7QcZsOcsoRDAbfko%2BPgXtvQ0MIBjvfJWnfI7qKiKjox0YrA8SsARQTky4eST8vNHZ4u0MlKYxfOMQKiB%2Bmn0dkxctzrtkR1YNanB8dKFwG4kTAJleuu5zkYjqJ8DpvGvQ4dyfRGlqU5rMq%2BLmMNDAxMQGOqUBxklzXU212jLk5RVRCZ%2FcTBPoDQIUa87BMpSS8vJml3VqNxOwYuPwrIRhNEJuRviwx3nQQ78oM3BLJutZyT7PSE%2B7PTYBu8hxdCi2%2B%2F1ueg%2FDYl2sK8E2YRgOrm%2BROMcgCy04B4iKMR57ZsJUlmdChAIiw9hEBjYTCsN5HwP29qzJnl0mmo77j9dCD4AV1R%2FIHpS9z3Jc%2BQWCvzRhrc5MKcvgmY8K&X-Amz-Signature=20835bd232e864b9a6bc4a9a5c445d7fd5eafab0dd691f4c59cdc7ba9aa5798c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSASV645%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQClnd%2FC0PTjaDFA0IjZ6%2Fu6kUHWYj%2BRojVbXAy%2Bo72YsQIgDLKu%2BeUIJN7E1NONOLAiORNbsInnpNYgC5BPxyaBOR4q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDL%2B5Ha7Gwc5AenftHircA96oGYYCZDyrluxz0sehocOsBihia43UWaJM2eX1l%2FMFc8DAQ2BFHZ4wbqYfwHR5ZZg8fxqBK%2Fqkqun%2Bz%2F9ujV%2F%2FfIP4hDTnzQoXz0TXkBZVZKBicWeuTHbKpQIyfILBdUVhTVcNYnAHD%2FbKxRK8Bh7FVlP%2F%2Fis%2Fl%2FzmS7pakJLiOMFluZY9THkG2rb3KbW8%2Bathg5iXCYc2ds5YZMAarsUFch1JohMzt9vS7SOncq4qjBBEEwdiiKI2%2BoFfaU3xeIcEOC5A57XkGqOEn2u5P7FmYOzgfjV5HA7y4f3TV7sLiGABYPj01oHHWy7l3sC0MpBLBM%2FNYT5NybJyDCU54PBnu9kawy%2FK1rOgsnT0KZrm3nmjj9qXEvCYAep%2FjxpQphpjeaVwP%2B%2FmxP0FRVtBYRDo3fS0P5jPZXy3thZE4dwRoOiejPzymBru3FV%2BfOWB9scfRrR9XHEV7usA3U6xGpqGv%2FOkRYNfPVDwTIk6f0g7QcZsOcsoRDAbfko%2BPgXtvQ0MIBjvfJWnfI7qKiKjox0YrA8SsARQTky4eST8vNHZ4u0MlKYxfOMQKiB%2Bmn0dkxctzrtkR1YNanB8dKFwG4kTAJleuu5zkYjqJ8DpvGvQ4dyfRGlqU5rMq%2BLmMNDAxMQGOqUBxklzXU212jLk5RVRCZ%2FcTBPoDQIUa87BMpSS8vJml3VqNxOwYuPwrIRhNEJuRviwx3nQQ78oM3BLJutZyT7PSE%2B7PTYBu8hxdCi2%2B%2F1ueg%2FDYl2sK8E2YRgOrm%2BROMcgCy04B4iKMR57ZsJUlmdChAIiw9hEBjYTCsN5HwP29qzJnl0mmo77j9dCD4AV1R%2FIHpS9z3Jc%2BQWCvzRhrc5MKcvgmY8K&X-Amz-Signature=1b8d60aca23b410310b55ff23ef93e221b30e7798b180dbf60f9c8d8e2dd14a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSASV645%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQClnd%2FC0PTjaDFA0IjZ6%2Fu6kUHWYj%2BRojVbXAy%2Bo72YsQIgDLKu%2BeUIJN7E1NONOLAiORNbsInnpNYgC5BPxyaBOR4q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDL%2B5Ha7Gwc5AenftHircA96oGYYCZDyrluxz0sehocOsBihia43UWaJM2eX1l%2FMFc8DAQ2BFHZ4wbqYfwHR5ZZg8fxqBK%2Fqkqun%2Bz%2F9ujV%2F%2FfIP4hDTnzQoXz0TXkBZVZKBicWeuTHbKpQIyfILBdUVhTVcNYnAHD%2FbKxRK8Bh7FVlP%2F%2Fis%2Fl%2FzmS7pakJLiOMFluZY9THkG2rb3KbW8%2Bathg5iXCYc2ds5YZMAarsUFch1JohMzt9vS7SOncq4qjBBEEwdiiKI2%2BoFfaU3xeIcEOC5A57XkGqOEn2u5P7FmYOzgfjV5HA7y4f3TV7sLiGABYPj01oHHWy7l3sC0MpBLBM%2FNYT5NybJyDCU54PBnu9kawy%2FK1rOgsnT0KZrm3nmjj9qXEvCYAep%2FjxpQphpjeaVwP%2B%2FmxP0FRVtBYRDo3fS0P5jPZXy3thZE4dwRoOiejPzymBru3FV%2BfOWB9scfRrR9XHEV7usA3U6xGpqGv%2FOkRYNfPVDwTIk6f0g7QcZsOcsoRDAbfko%2BPgXtvQ0MIBjvfJWnfI7qKiKjox0YrA8SsARQTky4eST8vNHZ4u0MlKYxfOMQKiB%2Bmn0dkxctzrtkR1YNanB8dKFwG4kTAJleuu5zkYjqJ8DpvGvQ4dyfRGlqU5rMq%2BLmMNDAxMQGOqUBxklzXU212jLk5RVRCZ%2FcTBPoDQIUa87BMpSS8vJml3VqNxOwYuPwrIRhNEJuRviwx3nQQ78oM3BLJutZyT7PSE%2B7PTYBu8hxdCi2%2B%2F1ueg%2FDYl2sK8E2YRgOrm%2BROMcgCy04B4iKMR57ZsJUlmdChAIiw9hEBjYTCsN5HwP29qzJnl0mmo77j9dCD4AV1R%2FIHpS9z3Jc%2BQWCvzRhrc5MKcvgmY8K&X-Amz-Signature=5377c5089950b94ce1c2cabaa8ee203c05de1f252c761447fc308fe6af322de6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSASV645%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQClnd%2FC0PTjaDFA0IjZ6%2Fu6kUHWYj%2BRojVbXAy%2Bo72YsQIgDLKu%2BeUIJN7E1NONOLAiORNbsInnpNYgC5BPxyaBOR4q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDL%2B5Ha7Gwc5AenftHircA96oGYYCZDyrluxz0sehocOsBihia43UWaJM2eX1l%2FMFc8DAQ2BFHZ4wbqYfwHR5ZZg8fxqBK%2Fqkqun%2Bz%2F9ujV%2F%2FfIP4hDTnzQoXz0TXkBZVZKBicWeuTHbKpQIyfILBdUVhTVcNYnAHD%2FbKxRK8Bh7FVlP%2F%2Fis%2Fl%2FzmS7pakJLiOMFluZY9THkG2rb3KbW8%2Bathg5iXCYc2ds5YZMAarsUFch1JohMzt9vS7SOncq4qjBBEEwdiiKI2%2BoFfaU3xeIcEOC5A57XkGqOEn2u5P7FmYOzgfjV5HA7y4f3TV7sLiGABYPj01oHHWy7l3sC0MpBLBM%2FNYT5NybJyDCU54PBnu9kawy%2FK1rOgsnT0KZrm3nmjj9qXEvCYAep%2FjxpQphpjeaVwP%2B%2FmxP0FRVtBYRDo3fS0P5jPZXy3thZE4dwRoOiejPzymBru3FV%2BfOWB9scfRrR9XHEV7usA3U6xGpqGv%2FOkRYNfPVDwTIk6f0g7QcZsOcsoRDAbfko%2BPgXtvQ0MIBjvfJWnfI7qKiKjox0YrA8SsARQTky4eST8vNHZ4u0MlKYxfOMQKiB%2Bmn0dkxctzrtkR1YNanB8dKFwG4kTAJleuu5zkYjqJ8DpvGvQ4dyfRGlqU5rMq%2BLmMNDAxMQGOqUBxklzXU212jLk5RVRCZ%2FcTBPoDQIUa87BMpSS8vJml3VqNxOwYuPwrIRhNEJuRviwx3nQQ78oM3BLJutZyT7PSE%2B7PTYBu8hxdCi2%2B%2F1ueg%2FDYl2sK8E2YRgOrm%2BROMcgCy04B4iKMR57ZsJUlmdChAIiw9hEBjYTCsN5HwP29qzJnl0mmo77j9dCD4AV1R%2FIHpS9z3Jc%2BQWCvzRhrc5MKcvgmY8K&X-Amz-Signature=92c0d9fc9c80f6be708956c5922da984538bf61d8fddbc050e970e2fb5c957be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSASV645%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQClnd%2FC0PTjaDFA0IjZ6%2Fu6kUHWYj%2BRojVbXAy%2Bo72YsQIgDLKu%2BeUIJN7E1NONOLAiORNbsInnpNYgC5BPxyaBOR4q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDL%2B5Ha7Gwc5AenftHircA96oGYYCZDyrluxz0sehocOsBihia43UWaJM2eX1l%2FMFc8DAQ2BFHZ4wbqYfwHR5ZZg8fxqBK%2Fqkqun%2Bz%2F9ujV%2F%2FfIP4hDTnzQoXz0TXkBZVZKBicWeuTHbKpQIyfILBdUVhTVcNYnAHD%2FbKxRK8Bh7FVlP%2F%2Fis%2Fl%2FzmS7pakJLiOMFluZY9THkG2rb3KbW8%2Bathg5iXCYc2ds5YZMAarsUFch1JohMzt9vS7SOncq4qjBBEEwdiiKI2%2BoFfaU3xeIcEOC5A57XkGqOEn2u5P7FmYOzgfjV5HA7y4f3TV7sLiGABYPj01oHHWy7l3sC0MpBLBM%2FNYT5NybJyDCU54PBnu9kawy%2FK1rOgsnT0KZrm3nmjj9qXEvCYAep%2FjxpQphpjeaVwP%2B%2FmxP0FRVtBYRDo3fS0P5jPZXy3thZE4dwRoOiejPzymBru3FV%2BfOWB9scfRrR9XHEV7usA3U6xGpqGv%2FOkRYNfPVDwTIk6f0g7QcZsOcsoRDAbfko%2BPgXtvQ0MIBjvfJWnfI7qKiKjox0YrA8SsARQTky4eST8vNHZ4u0MlKYxfOMQKiB%2Bmn0dkxctzrtkR1YNanB8dKFwG4kTAJleuu5zkYjqJ8DpvGvQ4dyfRGlqU5rMq%2BLmMNDAxMQGOqUBxklzXU212jLk5RVRCZ%2FcTBPoDQIUa87BMpSS8vJml3VqNxOwYuPwrIRhNEJuRviwx3nQQ78oM3BLJutZyT7PSE%2B7PTYBu8hxdCi2%2B%2F1ueg%2FDYl2sK8E2YRgOrm%2BROMcgCy04B4iKMR57ZsJUlmdChAIiw9hEBjYTCsN5HwP29qzJnl0mmo77j9dCD4AV1R%2FIHpS9z3Jc%2BQWCvzRhrc5MKcvgmY8K&X-Amz-Signature=47daf6665a49ee24e3bb8aaf1c5ec041927065c44c0e5b92b9da9da20f282397&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSASV645%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQClnd%2FC0PTjaDFA0IjZ6%2Fu6kUHWYj%2BRojVbXAy%2Bo72YsQIgDLKu%2BeUIJN7E1NONOLAiORNbsInnpNYgC5BPxyaBOR4q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDL%2B5Ha7Gwc5AenftHircA96oGYYCZDyrluxz0sehocOsBihia43UWaJM2eX1l%2FMFc8DAQ2BFHZ4wbqYfwHR5ZZg8fxqBK%2Fqkqun%2Bz%2F9ujV%2F%2FfIP4hDTnzQoXz0TXkBZVZKBicWeuTHbKpQIyfILBdUVhTVcNYnAHD%2FbKxRK8Bh7FVlP%2F%2Fis%2Fl%2FzmS7pakJLiOMFluZY9THkG2rb3KbW8%2Bathg5iXCYc2ds5YZMAarsUFch1JohMzt9vS7SOncq4qjBBEEwdiiKI2%2BoFfaU3xeIcEOC5A57XkGqOEn2u5P7FmYOzgfjV5HA7y4f3TV7sLiGABYPj01oHHWy7l3sC0MpBLBM%2FNYT5NybJyDCU54PBnu9kawy%2FK1rOgsnT0KZrm3nmjj9qXEvCYAep%2FjxpQphpjeaVwP%2B%2FmxP0FRVtBYRDo3fS0P5jPZXy3thZE4dwRoOiejPzymBru3FV%2BfOWB9scfRrR9XHEV7usA3U6xGpqGv%2FOkRYNfPVDwTIk6f0g7QcZsOcsoRDAbfko%2BPgXtvQ0MIBjvfJWnfI7qKiKjox0YrA8SsARQTky4eST8vNHZ4u0MlKYxfOMQKiB%2Bmn0dkxctzrtkR1YNanB8dKFwG4kTAJleuu5zkYjqJ8DpvGvQ4dyfRGlqU5rMq%2BLmMNDAxMQGOqUBxklzXU212jLk5RVRCZ%2FcTBPoDQIUa87BMpSS8vJml3VqNxOwYuPwrIRhNEJuRviwx3nQQ78oM3BLJutZyT7PSE%2B7PTYBu8hxdCi2%2B%2F1ueg%2FDYl2sK8E2YRgOrm%2BROMcgCy04B4iKMR57ZsJUlmdChAIiw9hEBjYTCsN5HwP29qzJnl0mmo77j9dCD4AV1R%2FIHpS9z3Jc%2BQWCvzRhrc5MKcvgmY8K&X-Amz-Signature=bcb0f08b84548533b72aaf271dbb621dae147c40348305082d2dae73bf1a60d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
