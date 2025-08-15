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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6NJCWUP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFyqQdtr%2FkjQAJP%2BrbU0GbBATc2mB8QARueh4NfXlUrxAiEAxv3TcPNpKEj4hYROSVrJUDq5Ubfs4hVgwoXJp6NZK6Eq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDGQQ93HnNIRJQJQRTSrcAxxe7l5WxUXKQ6%2FMqDA8dObLS%2BBI26F1fF3w6dDq%2BE39n3cfeDjGbNicDUv3WmrGDP1ZYH063J2b49fPRqW4tyV5e3ia2WHlMPwhT3s9CDtjuuNP3JoZ63vKk2zrT%2Bxzxv6NbpVySU4yoJ4baI%2Fs1oRw9MrbgWTzDEIs6p7d596Ug%2FKtu0w2aYe08FjuQAUwOFYg1zdf0V7nffW0PtN7IZGy4mquMddcnaZubby9lHXygZBSN%2FukDYgfde%2FUO6pMKg5wI3SXghiGDnMPMYz%2BKzNYjiFXX%2FlDrpljJ0SK8Ohubbjx2GNqdVcflNmFwCdiLFX3DpRjsi1iB%2B4NJgSmnKzOb9vfn7%2B2HWUzQKFT7caVbRXNAYltaqPi%2FA8b1tHDIuv6UDiX6oh1GicB8oH1rbilBWVWOMEKR85T5ytMbidO9SQ%2BPIGCDhvLgQck72AQjDtOfMUc9XQkqPHzLwH4Zslby7qIfd7evZy2flbJ%2BkhaOh%2BVDmuBmUDQmxWfbQcatZXu%2BHjNDOFLHOjheij2dtdd%2BbPL53DywtUCykGXsX1xA4CLjCYBBFYHz4ZkcejaI8x5H17%2BDR7k6c4VOMWK9yzdXHj7Q8VwM9nlsb5HvGBeDGoKeWxigCheZS8LMK7K%2B8QGOqUB6j3%2FjBI3MFNdoSMWMGRkzRNLjSIU10m4h59QWeytW5DOFUdbQ63th9GBGlRO8AQVo9ginM6LbRT3%2F%2BCQcf%2FDv9bkge6Jf41yRun2DAUr1zqGiOzOvMekfLMqcG3VUucEkj%2F7DzbpA%2Fjhkk55tYE5eppyJY2PEOS8VWoerZ3GAOw1pC8HjmEoawFqLu34LS5jOmDXF%2FtG%2FwtHv1mrTvKRqY1dgoBK&X-Amz-Signature=616311d1f5936d2f8050331c762019b683f52aebf075077adf5fc5e1eca270b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6NJCWUP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFyqQdtr%2FkjQAJP%2BrbU0GbBATc2mB8QARueh4NfXlUrxAiEAxv3TcPNpKEj4hYROSVrJUDq5Ubfs4hVgwoXJp6NZK6Eq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDGQQ93HnNIRJQJQRTSrcAxxe7l5WxUXKQ6%2FMqDA8dObLS%2BBI26F1fF3w6dDq%2BE39n3cfeDjGbNicDUv3WmrGDP1ZYH063J2b49fPRqW4tyV5e3ia2WHlMPwhT3s9CDtjuuNP3JoZ63vKk2zrT%2Bxzxv6NbpVySU4yoJ4baI%2Fs1oRw9MrbgWTzDEIs6p7d596Ug%2FKtu0w2aYe08FjuQAUwOFYg1zdf0V7nffW0PtN7IZGy4mquMddcnaZubby9lHXygZBSN%2FukDYgfde%2FUO6pMKg5wI3SXghiGDnMPMYz%2BKzNYjiFXX%2FlDrpljJ0SK8Ohubbjx2GNqdVcflNmFwCdiLFX3DpRjsi1iB%2B4NJgSmnKzOb9vfn7%2B2HWUzQKFT7caVbRXNAYltaqPi%2FA8b1tHDIuv6UDiX6oh1GicB8oH1rbilBWVWOMEKR85T5ytMbidO9SQ%2BPIGCDhvLgQck72AQjDtOfMUc9XQkqPHzLwH4Zslby7qIfd7evZy2flbJ%2BkhaOh%2BVDmuBmUDQmxWfbQcatZXu%2BHjNDOFLHOjheij2dtdd%2BbPL53DywtUCykGXsX1xA4CLjCYBBFYHz4ZkcejaI8x5H17%2BDR7k6c4VOMWK9yzdXHj7Q8VwM9nlsb5HvGBeDGoKeWxigCheZS8LMK7K%2B8QGOqUB6j3%2FjBI3MFNdoSMWMGRkzRNLjSIU10m4h59QWeytW5DOFUdbQ63th9GBGlRO8AQVo9ginM6LbRT3%2F%2BCQcf%2FDv9bkge6Jf41yRun2DAUr1zqGiOzOvMekfLMqcG3VUucEkj%2F7DzbpA%2Fjhkk55tYE5eppyJY2PEOS8VWoerZ3GAOw1pC8HjmEoawFqLu34LS5jOmDXF%2FtG%2FwtHv1mrTvKRqY1dgoBK&X-Amz-Signature=faced2b6f73a71ce9e751efdd028ba62847a7c2d5302a0a3557f908b1290d614&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6NJCWUP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFyqQdtr%2FkjQAJP%2BrbU0GbBATc2mB8QARueh4NfXlUrxAiEAxv3TcPNpKEj4hYROSVrJUDq5Ubfs4hVgwoXJp6NZK6Eq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDGQQ93HnNIRJQJQRTSrcAxxe7l5WxUXKQ6%2FMqDA8dObLS%2BBI26F1fF3w6dDq%2BE39n3cfeDjGbNicDUv3WmrGDP1ZYH063J2b49fPRqW4tyV5e3ia2WHlMPwhT3s9CDtjuuNP3JoZ63vKk2zrT%2Bxzxv6NbpVySU4yoJ4baI%2Fs1oRw9MrbgWTzDEIs6p7d596Ug%2FKtu0w2aYe08FjuQAUwOFYg1zdf0V7nffW0PtN7IZGy4mquMddcnaZubby9lHXygZBSN%2FukDYgfde%2FUO6pMKg5wI3SXghiGDnMPMYz%2BKzNYjiFXX%2FlDrpljJ0SK8Ohubbjx2GNqdVcflNmFwCdiLFX3DpRjsi1iB%2B4NJgSmnKzOb9vfn7%2B2HWUzQKFT7caVbRXNAYltaqPi%2FA8b1tHDIuv6UDiX6oh1GicB8oH1rbilBWVWOMEKR85T5ytMbidO9SQ%2BPIGCDhvLgQck72AQjDtOfMUc9XQkqPHzLwH4Zslby7qIfd7evZy2flbJ%2BkhaOh%2BVDmuBmUDQmxWfbQcatZXu%2BHjNDOFLHOjheij2dtdd%2BbPL53DywtUCykGXsX1xA4CLjCYBBFYHz4ZkcejaI8x5H17%2BDR7k6c4VOMWK9yzdXHj7Q8VwM9nlsb5HvGBeDGoKeWxigCheZS8LMK7K%2B8QGOqUB6j3%2FjBI3MFNdoSMWMGRkzRNLjSIU10m4h59QWeytW5DOFUdbQ63th9GBGlRO8AQVo9ginM6LbRT3%2F%2BCQcf%2FDv9bkge6Jf41yRun2DAUr1zqGiOzOvMekfLMqcG3VUucEkj%2F7DzbpA%2Fjhkk55tYE5eppyJY2PEOS8VWoerZ3GAOw1pC8HjmEoawFqLu34LS5jOmDXF%2FtG%2FwtHv1mrTvKRqY1dgoBK&X-Amz-Signature=b798197661cdf058e89a893f9faa42d84b54998d0f6f07045f5dfefde5fe8e85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6NJCWUP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFyqQdtr%2FkjQAJP%2BrbU0GbBATc2mB8QARueh4NfXlUrxAiEAxv3TcPNpKEj4hYROSVrJUDq5Ubfs4hVgwoXJp6NZK6Eq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDGQQ93HnNIRJQJQRTSrcAxxe7l5WxUXKQ6%2FMqDA8dObLS%2BBI26F1fF3w6dDq%2BE39n3cfeDjGbNicDUv3WmrGDP1ZYH063J2b49fPRqW4tyV5e3ia2WHlMPwhT3s9CDtjuuNP3JoZ63vKk2zrT%2Bxzxv6NbpVySU4yoJ4baI%2Fs1oRw9MrbgWTzDEIs6p7d596Ug%2FKtu0w2aYe08FjuQAUwOFYg1zdf0V7nffW0PtN7IZGy4mquMddcnaZubby9lHXygZBSN%2FukDYgfde%2FUO6pMKg5wI3SXghiGDnMPMYz%2BKzNYjiFXX%2FlDrpljJ0SK8Ohubbjx2GNqdVcflNmFwCdiLFX3DpRjsi1iB%2B4NJgSmnKzOb9vfn7%2B2HWUzQKFT7caVbRXNAYltaqPi%2FA8b1tHDIuv6UDiX6oh1GicB8oH1rbilBWVWOMEKR85T5ytMbidO9SQ%2BPIGCDhvLgQck72AQjDtOfMUc9XQkqPHzLwH4Zslby7qIfd7evZy2flbJ%2BkhaOh%2BVDmuBmUDQmxWfbQcatZXu%2BHjNDOFLHOjheij2dtdd%2BbPL53DywtUCykGXsX1xA4CLjCYBBFYHz4ZkcejaI8x5H17%2BDR7k6c4VOMWK9yzdXHj7Q8VwM9nlsb5HvGBeDGoKeWxigCheZS8LMK7K%2B8QGOqUB6j3%2FjBI3MFNdoSMWMGRkzRNLjSIU10m4h59QWeytW5DOFUdbQ63th9GBGlRO8AQVo9ginM6LbRT3%2F%2BCQcf%2FDv9bkge6Jf41yRun2DAUr1zqGiOzOvMekfLMqcG3VUucEkj%2F7DzbpA%2Fjhkk55tYE5eppyJY2PEOS8VWoerZ3GAOw1pC8HjmEoawFqLu34LS5jOmDXF%2FtG%2FwtHv1mrTvKRqY1dgoBK&X-Amz-Signature=dcc43169906dcf0b62e46314c95b773170641e3cdafd043d92c0e32221323511&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM3JW3BA%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIEEGLUdRk8Bzf0u%2BTQb2U%2BZA03%2FXrU2ZhX1z5ptTqQFrAiB6x7LAXGjMU7cPOYCV9sqVqRhCsgQYL%2B%2FLMTyRCf8saCr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMk8UcoSvabAsgSI4GKtwDG2y%2ByshE4wqb2ZPZrSqkOaFkyQ2kVA0JmNRgtfUCAY1djR5QLF76diTXIKHvjBjVIA7ENJ%2BAh%2FQJVRTmk3jbKw5Jy83UHgKZjMX3OwbaDsm7GUaqzVxbPcjxvhd6GDXspUOamtYTSAMhxPYnmQrILPgAPtKrYpKczAm85LdRum0bWcYVxosE8PkO3dmAKzB4WLUzCCD6ztU5xIcdwGDgrkSh53qPUDmwP91znxBzOU4O3s06AwMWxkLc%2FZiX8SM1leHhHzmAvMApbfCjnOeyoDS%2B7rxn7pUF0r6OMExpXjypZoDknyyEGJYVVasZ8E3ivQ7cRircTradZdpceND1NXYSIcK2ejVucIN1hPgunPo8GVdjKS7GbTKlxxgbYnuD%2F2niR%2FR38Yoa%2BNzGwIvMKVT6PH%2BnXkhgkpitbMTAkPjgAJJSWpoyk5NZ%2Bjx8svFdKA%2Fxoym%2F2ckfAgqNRgpdlPCw9oOh96RM2I%2BXgwZu9JD%2Boy59YZ9NZOOskcrnujbDkRqW2dhos3r2PXYZcIH5rBxqA81kbZeXEVOAvGfwWRCLkq5Z0KMpN%2F7PP6%2FPRVj6TxvMfnkgXy3hd4JYHgiusUUyp18Vyjh%2B2UHuvoCp3lG0a8787QCuYoGnvQAw7Mr7xAY6pgG%2BsD%2FqEyh09bnWfgKkTz2Tk7gLdABm6Ck7uEDSHIYntqdhuHz6fBZnnLcj9fHeqY%2Bk45ZjuakLvhpGX9iBZTcblJqiImp3tPt%2BudSA8H%2FEuFsdlkAn3CewTcqTD6XLUZF0KLCvKcGUY9Qf49gOuMLdB7qYt%2FbcUmmFBjEVIfm5mhpcwJHmW1H0vKzhHhfkQtAeH0CPp8hQ47M8fPVtCtabZW%2BHOQIR&X-Amz-Signature=1c2072ef22cd21af8fbcf3c4c96739effb991737f7e9989fdbdccde5d140d3ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6NJCWUP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFyqQdtr%2FkjQAJP%2BrbU0GbBATc2mB8QARueh4NfXlUrxAiEAxv3TcPNpKEj4hYROSVrJUDq5Ubfs4hVgwoXJp6NZK6Eq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDGQQ93HnNIRJQJQRTSrcAxxe7l5WxUXKQ6%2FMqDA8dObLS%2BBI26F1fF3w6dDq%2BE39n3cfeDjGbNicDUv3WmrGDP1ZYH063J2b49fPRqW4tyV5e3ia2WHlMPwhT3s9CDtjuuNP3JoZ63vKk2zrT%2Bxzxv6NbpVySU4yoJ4baI%2Fs1oRw9MrbgWTzDEIs6p7d596Ug%2FKtu0w2aYe08FjuQAUwOFYg1zdf0V7nffW0PtN7IZGy4mquMddcnaZubby9lHXygZBSN%2FukDYgfde%2FUO6pMKg5wI3SXghiGDnMPMYz%2BKzNYjiFXX%2FlDrpljJ0SK8Ohubbjx2GNqdVcflNmFwCdiLFX3DpRjsi1iB%2B4NJgSmnKzOb9vfn7%2B2HWUzQKFT7caVbRXNAYltaqPi%2FA8b1tHDIuv6UDiX6oh1GicB8oH1rbilBWVWOMEKR85T5ytMbidO9SQ%2BPIGCDhvLgQck72AQjDtOfMUc9XQkqPHzLwH4Zslby7qIfd7evZy2flbJ%2BkhaOh%2BVDmuBmUDQmxWfbQcatZXu%2BHjNDOFLHOjheij2dtdd%2BbPL53DywtUCykGXsX1xA4CLjCYBBFYHz4ZkcejaI8x5H17%2BDR7k6c4VOMWK9yzdXHj7Q8VwM9nlsb5HvGBeDGoKeWxigCheZS8LMK7K%2B8QGOqUB6j3%2FjBI3MFNdoSMWMGRkzRNLjSIU10m4h59QWeytW5DOFUdbQ63th9GBGlRO8AQVo9ginM6LbRT3%2F%2BCQcf%2FDv9bkge6Jf41yRun2DAUr1zqGiOzOvMekfLMqcG3VUucEkj%2F7DzbpA%2Fjhkk55tYE5eppyJY2PEOS8VWoerZ3GAOw1pC8HjmEoawFqLu34LS5jOmDXF%2FtG%2FwtHv1mrTvKRqY1dgoBK&X-Amz-Signature=1e45c03193d921a10705fa669f98273cc89bd7e22643b38f5d47e523cec992dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6NJCWUP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFyqQdtr%2FkjQAJP%2BrbU0GbBATc2mB8QARueh4NfXlUrxAiEAxv3TcPNpKEj4hYROSVrJUDq5Ubfs4hVgwoXJp6NZK6Eq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDGQQ93HnNIRJQJQRTSrcAxxe7l5WxUXKQ6%2FMqDA8dObLS%2BBI26F1fF3w6dDq%2BE39n3cfeDjGbNicDUv3WmrGDP1ZYH063J2b49fPRqW4tyV5e3ia2WHlMPwhT3s9CDtjuuNP3JoZ63vKk2zrT%2Bxzxv6NbpVySU4yoJ4baI%2Fs1oRw9MrbgWTzDEIs6p7d596Ug%2FKtu0w2aYe08FjuQAUwOFYg1zdf0V7nffW0PtN7IZGy4mquMddcnaZubby9lHXygZBSN%2FukDYgfde%2FUO6pMKg5wI3SXghiGDnMPMYz%2BKzNYjiFXX%2FlDrpljJ0SK8Ohubbjx2GNqdVcflNmFwCdiLFX3DpRjsi1iB%2B4NJgSmnKzOb9vfn7%2B2HWUzQKFT7caVbRXNAYltaqPi%2FA8b1tHDIuv6UDiX6oh1GicB8oH1rbilBWVWOMEKR85T5ytMbidO9SQ%2BPIGCDhvLgQck72AQjDtOfMUc9XQkqPHzLwH4Zslby7qIfd7evZy2flbJ%2BkhaOh%2BVDmuBmUDQmxWfbQcatZXu%2BHjNDOFLHOjheij2dtdd%2BbPL53DywtUCykGXsX1xA4CLjCYBBFYHz4ZkcejaI8x5H17%2BDR7k6c4VOMWK9yzdXHj7Q8VwM9nlsb5HvGBeDGoKeWxigCheZS8LMK7K%2B8QGOqUB6j3%2FjBI3MFNdoSMWMGRkzRNLjSIU10m4h59QWeytW5DOFUdbQ63th9GBGlRO8AQVo9ginM6LbRT3%2F%2BCQcf%2FDv9bkge6Jf41yRun2DAUr1zqGiOzOvMekfLMqcG3VUucEkj%2F7DzbpA%2Fjhkk55tYE5eppyJY2PEOS8VWoerZ3GAOw1pC8HjmEoawFqLu34LS5jOmDXF%2FtG%2FwtHv1mrTvKRqY1dgoBK&X-Amz-Signature=eda8d502649e58fd014b7a107fe7e0f7d5afdca540ee45fb5134e18cd8dd10c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6NJCWUP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFyqQdtr%2FkjQAJP%2BrbU0GbBATc2mB8QARueh4NfXlUrxAiEAxv3TcPNpKEj4hYROSVrJUDq5Ubfs4hVgwoXJp6NZK6Eq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDGQQ93HnNIRJQJQRTSrcAxxe7l5WxUXKQ6%2FMqDA8dObLS%2BBI26F1fF3w6dDq%2BE39n3cfeDjGbNicDUv3WmrGDP1ZYH063J2b49fPRqW4tyV5e3ia2WHlMPwhT3s9CDtjuuNP3JoZ63vKk2zrT%2Bxzxv6NbpVySU4yoJ4baI%2Fs1oRw9MrbgWTzDEIs6p7d596Ug%2FKtu0w2aYe08FjuQAUwOFYg1zdf0V7nffW0PtN7IZGy4mquMddcnaZubby9lHXygZBSN%2FukDYgfde%2FUO6pMKg5wI3SXghiGDnMPMYz%2BKzNYjiFXX%2FlDrpljJ0SK8Ohubbjx2GNqdVcflNmFwCdiLFX3DpRjsi1iB%2B4NJgSmnKzOb9vfn7%2B2HWUzQKFT7caVbRXNAYltaqPi%2FA8b1tHDIuv6UDiX6oh1GicB8oH1rbilBWVWOMEKR85T5ytMbidO9SQ%2BPIGCDhvLgQck72AQjDtOfMUc9XQkqPHzLwH4Zslby7qIfd7evZy2flbJ%2BkhaOh%2BVDmuBmUDQmxWfbQcatZXu%2BHjNDOFLHOjheij2dtdd%2BbPL53DywtUCykGXsX1xA4CLjCYBBFYHz4ZkcejaI8x5H17%2BDR7k6c4VOMWK9yzdXHj7Q8VwM9nlsb5HvGBeDGoKeWxigCheZS8LMK7K%2B8QGOqUB6j3%2FjBI3MFNdoSMWMGRkzRNLjSIU10m4h59QWeytW5DOFUdbQ63th9GBGlRO8AQVo9ginM6LbRT3%2F%2BCQcf%2FDv9bkge6Jf41yRun2DAUr1zqGiOzOvMekfLMqcG3VUucEkj%2F7DzbpA%2Fjhkk55tYE5eppyJY2PEOS8VWoerZ3GAOw1pC8HjmEoawFqLu34LS5jOmDXF%2FtG%2FwtHv1mrTvKRqY1dgoBK&X-Amz-Signature=67128ab5b752a4371e510ec8143a85ad9ca86ea8516f0e129feacaadb0ea7a37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6NJCWUP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFyqQdtr%2FkjQAJP%2BrbU0GbBATc2mB8QARueh4NfXlUrxAiEAxv3TcPNpKEj4hYROSVrJUDq5Ubfs4hVgwoXJp6NZK6Eq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDGQQ93HnNIRJQJQRTSrcAxxe7l5WxUXKQ6%2FMqDA8dObLS%2BBI26F1fF3w6dDq%2BE39n3cfeDjGbNicDUv3WmrGDP1ZYH063J2b49fPRqW4tyV5e3ia2WHlMPwhT3s9CDtjuuNP3JoZ63vKk2zrT%2Bxzxv6NbpVySU4yoJ4baI%2Fs1oRw9MrbgWTzDEIs6p7d596Ug%2FKtu0w2aYe08FjuQAUwOFYg1zdf0V7nffW0PtN7IZGy4mquMddcnaZubby9lHXygZBSN%2FukDYgfde%2FUO6pMKg5wI3SXghiGDnMPMYz%2BKzNYjiFXX%2FlDrpljJ0SK8Ohubbjx2GNqdVcflNmFwCdiLFX3DpRjsi1iB%2B4NJgSmnKzOb9vfn7%2B2HWUzQKFT7caVbRXNAYltaqPi%2FA8b1tHDIuv6UDiX6oh1GicB8oH1rbilBWVWOMEKR85T5ytMbidO9SQ%2BPIGCDhvLgQck72AQjDtOfMUc9XQkqPHzLwH4Zslby7qIfd7evZy2flbJ%2BkhaOh%2BVDmuBmUDQmxWfbQcatZXu%2BHjNDOFLHOjheij2dtdd%2BbPL53DywtUCykGXsX1xA4CLjCYBBFYHz4ZkcejaI8x5H17%2BDR7k6c4VOMWK9yzdXHj7Q8VwM9nlsb5HvGBeDGoKeWxigCheZS8LMK7K%2B8QGOqUB6j3%2FjBI3MFNdoSMWMGRkzRNLjSIU10m4h59QWeytW5DOFUdbQ63th9GBGlRO8AQVo9ginM6LbRT3%2F%2BCQcf%2FDv9bkge6Jf41yRun2DAUr1zqGiOzOvMekfLMqcG3VUucEkj%2F7DzbpA%2Fjhkk55tYE5eppyJY2PEOS8VWoerZ3GAOw1pC8HjmEoawFqLu34LS5jOmDXF%2FtG%2FwtHv1mrTvKRqY1dgoBK&X-Amz-Signature=e959e90b95ae57f1ba1ec06cc5ae375dec19c3691ec29991693b723d35b94149&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6NJCWUP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFyqQdtr%2FkjQAJP%2BrbU0GbBATc2mB8QARueh4NfXlUrxAiEAxv3TcPNpKEj4hYROSVrJUDq5Ubfs4hVgwoXJp6NZK6Eq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDGQQ93HnNIRJQJQRTSrcAxxe7l5WxUXKQ6%2FMqDA8dObLS%2BBI26F1fF3w6dDq%2BE39n3cfeDjGbNicDUv3WmrGDP1ZYH063J2b49fPRqW4tyV5e3ia2WHlMPwhT3s9CDtjuuNP3JoZ63vKk2zrT%2Bxzxv6NbpVySU4yoJ4baI%2Fs1oRw9MrbgWTzDEIs6p7d596Ug%2FKtu0w2aYe08FjuQAUwOFYg1zdf0V7nffW0PtN7IZGy4mquMddcnaZubby9lHXygZBSN%2FukDYgfde%2FUO6pMKg5wI3SXghiGDnMPMYz%2BKzNYjiFXX%2FlDrpljJ0SK8Ohubbjx2GNqdVcflNmFwCdiLFX3DpRjsi1iB%2B4NJgSmnKzOb9vfn7%2B2HWUzQKFT7caVbRXNAYltaqPi%2FA8b1tHDIuv6UDiX6oh1GicB8oH1rbilBWVWOMEKR85T5ytMbidO9SQ%2BPIGCDhvLgQck72AQjDtOfMUc9XQkqPHzLwH4Zslby7qIfd7evZy2flbJ%2BkhaOh%2BVDmuBmUDQmxWfbQcatZXu%2BHjNDOFLHOjheij2dtdd%2BbPL53DywtUCykGXsX1xA4CLjCYBBFYHz4ZkcejaI8x5H17%2BDR7k6c4VOMWK9yzdXHj7Q8VwM9nlsb5HvGBeDGoKeWxigCheZS8LMK7K%2B8QGOqUB6j3%2FjBI3MFNdoSMWMGRkzRNLjSIU10m4h59QWeytW5DOFUdbQ63th9GBGlRO8AQVo9ginM6LbRT3%2F%2BCQcf%2FDv9bkge6Jf41yRun2DAUr1zqGiOzOvMekfLMqcG3VUucEkj%2F7DzbpA%2Fjhkk55tYE5eppyJY2PEOS8VWoerZ3GAOw1pC8HjmEoawFqLu34LS5jOmDXF%2FtG%2FwtHv1mrTvKRqY1dgoBK&X-Amz-Signature=081d805cefd4ccc4c65ca5bf22b445ead4c15e0c9950742ee523e296b718a296&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6NJCWUP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFyqQdtr%2FkjQAJP%2BrbU0GbBATc2mB8QARueh4NfXlUrxAiEAxv3TcPNpKEj4hYROSVrJUDq5Ubfs4hVgwoXJp6NZK6Eq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDGQQ93HnNIRJQJQRTSrcAxxe7l5WxUXKQ6%2FMqDA8dObLS%2BBI26F1fF3w6dDq%2BE39n3cfeDjGbNicDUv3WmrGDP1ZYH063J2b49fPRqW4tyV5e3ia2WHlMPwhT3s9CDtjuuNP3JoZ63vKk2zrT%2Bxzxv6NbpVySU4yoJ4baI%2Fs1oRw9MrbgWTzDEIs6p7d596Ug%2FKtu0w2aYe08FjuQAUwOFYg1zdf0V7nffW0PtN7IZGy4mquMddcnaZubby9lHXygZBSN%2FukDYgfde%2FUO6pMKg5wI3SXghiGDnMPMYz%2BKzNYjiFXX%2FlDrpljJ0SK8Ohubbjx2GNqdVcflNmFwCdiLFX3DpRjsi1iB%2B4NJgSmnKzOb9vfn7%2B2HWUzQKFT7caVbRXNAYltaqPi%2FA8b1tHDIuv6UDiX6oh1GicB8oH1rbilBWVWOMEKR85T5ytMbidO9SQ%2BPIGCDhvLgQck72AQjDtOfMUc9XQkqPHzLwH4Zslby7qIfd7evZy2flbJ%2BkhaOh%2BVDmuBmUDQmxWfbQcatZXu%2BHjNDOFLHOjheij2dtdd%2BbPL53DywtUCykGXsX1xA4CLjCYBBFYHz4ZkcejaI8x5H17%2BDR7k6c4VOMWK9yzdXHj7Q8VwM9nlsb5HvGBeDGoKeWxigCheZS8LMK7K%2B8QGOqUB6j3%2FjBI3MFNdoSMWMGRkzRNLjSIU10m4h59QWeytW5DOFUdbQ63th9GBGlRO8AQVo9ginM6LbRT3%2F%2BCQcf%2FDv9bkge6Jf41yRun2DAUr1zqGiOzOvMekfLMqcG3VUucEkj%2F7DzbpA%2Fjhkk55tYE5eppyJY2PEOS8VWoerZ3GAOw1pC8HjmEoawFqLu34LS5jOmDXF%2FtG%2FwtHv1mrTvKRqY1dgoBK&X-Amz-Signature=a4c430250de6d13b3b810618689482669821fe8e4cfc2952531bb0ab5bd52991&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
