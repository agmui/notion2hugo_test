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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I7VTUSS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCG%2Fwk0PyIMG%2B%2FJ4tSpEKZNpEk3cNBVIGdhftgs7rYgXAIgAUTYC0zUE0vvP3gnB1063vWMUgqZvrs%2BmLBzfqiZJhMqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTeGpWhYei1Rf7uLCrcA56hn04e7bKqL7gQKl4wrj4q0TWhd5lJuLmNOWh02IkzINZFWvwSCV6vHAkm6OIJZ%2FRjiK%2B%2B3QJb9bo7tpkmSOdYWs97GsKYkrmzXCc2MKzi1SfCuwvHQhlEcMDUgxetFD2E9%2BLRXZWh%2BLDME67hjq2UbxIimmid6AeX8LD1NUwQGZQn0eJ33aV1%2Fq%2BJGFXXqBl31bqYdStx5AHNJrYBZbedn%2FsvxVANTzeGoZYzYgNO5aYhOBkz%2FsOSeErATTpzHrPLs9t9V%2FtJKl9zm8H7UXg%2FIXp5KIpMkhdWe7d3OxnmtSOa5LyYJCNqRhNHu3agSPsFCsadeA%2B9ryjHbl9xvDazOBLisW0AkzZ2svhoYIGahxnG6Ft970q5Agiq0H5paUa8Wg9iBL7tXsK4IQ2ZTltK2VvayJoRQzINtueqRO55D32kfwSU7qBaBLbt67eF2%2F4ipUEE3zevFRTULKNyxBHyw3x42RH4a6rxdXSVckuNzj6HozipjG3gQkvcd%2BwjGKI7%2FxDUDuP3yTj8sTGPp7a98oH1LdmKq4pzm6EvkIhrBetHYo0BJBZ%2FQSIK5Z%2FZpf1nmUJWMK7yQGZYnvvnXQRpdcCjkWrtLwNlPoR1ljiKz%2F5%2BeqBUK69gNFwoMNHt08QGOqUB0q1OXVn%2FU5UUP3PlzC5MqxDrwo4JPnNuPNcXkKw4NOMxUV40Ph0ayTQJldRgUxRaYWISUhCX5G0mQHH8Hl08abi5Mqk5rWBW0eMuelaZWLgWozrxUk4GMC3M9UolZuTICK%2Bpj9Le3C457pBUF3SvLw3RLbNmwHxkzIeekSw28x1T4hHu5vigM1uYIqefw36OMl5Xa9Fos68OIrg%2FFPivZXSN%2Brg0&X-Amz-Signature=f727133159ef4399a582658583c6f42b844b4ce113c314893e3972441172b7a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I7VTUSS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCG%2Fwk0PyIMG%2B%2FJ4tSpEKZNpEk3cNBVIGdhftgs7rYgXAIgAUTYC0zUE0vvP3gnB1063vWMUgqZvrs%2BmLBzfqiZJhMqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTeGpWhYei1Rf7uLCrcA56hn04e7bKqL7gQKl4wrj4q0TWhd5lJuLmNOWh02IkzINZFWvwSCV6vHAkm6OIJZ%2FRjiK%2B%2B3QJb9bo7tpkmSOdYWs97GsKYkrmzXCc2MKzi1SfCuwvHQhlEcMDUgxetFD2E9%2BLRXZWh%2BLDME67hjq2UbxIimmid6AeX8LD1NUwQGZQn0eJ33aV1%2Fq%2BJGFXXqBl31bqYdStx5AHNJrYBZbedn%2FsvxVANTzeGoZYzYgNO5aYhOBkz%2FsOSeErATTpzHrPLs9t9V%2FtJKl9zm8H7UXg%2FIXp5KIpMkhdWe7d3OxnmtSOa5LyYJCNqRhNHu3agSPsFCsadeA%2B9ryjHbl9xvDazOBLisW0AkzZ2svhoYIGahxnG6Ft970q5Agiq0H5paUa8Wg9iBL7tXsK4IQ2ZTltK2VvayJoRQzINtueqRO55D32kfwSU7qBaBLbt67eF2%2F4ipUEE3zevFRTULKNyxBHyw3x42RH4a6rxdXSVckuNzj6HozipjG3gQkvcd%2BwjGKI7%2FxDUDuP3yTj8sTGPp7a98oH1LdmKq4pzm6EvkIhrBetHYo0BJBZ%2FQSIK5Z%2FZpf1nmUJWMK7yQGZYnvvnXQRpdcCjkWrtLwNlPoR1ljiKz%2F5%2BeqBUK69gNFwoMNHt08QGOqUB0q1OXVn%2FU5UUP3PlzC5MqxDrwo4JPnNuPNcXkKw4NOMxUV40Ph0ayTQJldRgUxRaYWISUhCX5G0mQHH8Hl08abi5Mqk5rWBW0eMuelaZWLgWozrxUk4GMC3M9UolZuTICK%2Bpj9Le3C457pBUF3SvLw3RLbNmwHxkzIeekSw28x1T4hHu5vigM1uYIqefw36OMl5Xa9Fos68OIrg%2FFPivZXSN%2Brg0&X-Amz-Signature=438b016941735495cedcded3f0cceb86c5d11613f75092a367af031fd046ab75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I7VTUSS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCG%2Fwk0PyIMG%2B%2FJ4tSpEKZNpEk3cNBVIGdhftgs7rYgXAIgAUTYC0zUE0vvP3gnB1063vWMUgqZvrs%2BmLBzfqiZJhMqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTeGpWhYei1Rf7uLCrcA56hn04e7bKqL7gQKl4wrj4q0TWhd5lJuLmNOWh02IkzINZFWvwSCV6vHAkm6OIJZ%2FRjiK%2B%2B3QJb9bo7tpkmSOdYWs97GsKYkrmzXCc2MKzi1SfCuwvHQhlEcMDUgxetFD2E9%2BLRXZWh%2BLDME67hjq2UbxIimmid6AeX8LD1NUwQGZQn0eJ33aV1%2Fq%2BJGFXXqBl31bqYdStx5AHNJrYBZbedn%2FsvxVANTzeGoZYzYgNO5aYhOBkz%2FsOSeErATTpzHrPLs9t9V%2FtJKl9zm8H7UXg%2FIXp5KIpMkhdWe7d3OxnmtSOa5LyYJCNqRhNHu3agSPsFCsadeA%2B9ryjHbl9xvDazOBLisW0AkzZ2svhoYIGahxnG6Ft970q5Agiq0H5paUa8Wg9iBL7tXsK4IQ2ZTltK2VvayJoRQzINtueqRO55D32kfwSU7qBaBLbt67eF2%2F4ipUEE3zevFRTULKNyxBHyw3x42RH4a6rxdXSVckuNzj6HozipjG3gQkvcd%2BwjGKI7%2FxDUDuP3yTj8sTGPp7a98oH1LdmKq4pzm6EvkIhrBetHYo0BJBZ%2FQSIK5Z%2FZpf1nmUJWMK7yQGZYnvvnXQRpdcCjkWrtLwNlPoR1ljiKz%2F5%2BeqBUK69gNFwoMNHt08QGOqUB0q1OXVn%2FU5UUP3PlzC5MqxDrwo4JPnNuPNcXkKw4NOMxUV40Ph0ayTQJldRgUxRaYWISUhCX5G0mQHH8Hl08abi5Mqk5rWBW0eMuelaZWLgWozrxUk4GMC3M9UolZuTICK%2Bpj9Le3C457pBUF3SvLw3RLbNmwHxkzIeekSw28x1T4hHu5vigM1uYIqefw36OMl5Xa9Fos68OIrg%2FFPivZXSN%2Brg0&X-Amz-Signature=ae5c894fb7fc781138a348da7a878d16dafb2008ac40c97db3f509457582f9f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I7VTUSS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCG%2Fwk0PyIMG%2B%2FJ4tSpEKZNpEk3cNBVIGdhftgs7rYgXAIgAUTYC0zUE0vvP3gnB1063vWMUgqZvrs%2BmLBzfqiZJhMqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTeGpWhYei1Rf7uLCrcA56hn04e7bKqL7gQKl4wrj4q0TWhd5lJuLmNOWh02IkzINZFWvwSCV6vHAkm6OIJZ%2FRjiK%2B%2B3QJb9bo7tpkmSOdYWs97GsKYkrmzXCc2MKzi1SfCuwvHQhlEcMDUgxetFD2E9%2BLRXZWh%2BLDME67hjq2UbxIimmid6AeX8LD1NUwQGZQn0eJ33aV1%2Fq%2BJGFXXqBl31bqYdStx5AHNJrYBZbedn%2FsvxVANTzeGoZYzYgNO5aYhOBkz%2FsOSeErATTpzHrPLs9t9V%2FtJKl9zm8H7UXg%2FIXp5KIpMkhdWe7d3OxnmtSOa5LyYJCNqRhNHu3agSPsFCsadeA%2B9ryjHbl9xvDazOBLisW0AkzZ2svhoYIGahxnG6Ft970q5Agiq0H5paUa8Wg9iBL7tXsK4IQ2ZTltK2VvayJoRQzINtueqRO55D32kfwSU7qBaBLbt67eF2%2F4ipUEE3zevFRTULKNyxBHyw3x42RH4a6rxdXSVckuNzj6HozipjG3gQkvcd%2BwjGKI7%2FxDUDuP3yTj8sTGPp7a98oH1LdmKq4pzm6EvkIhrBetHYo0BJBZ%2FQSIK5Z%2FZpf1nmUJWMK7yQGZYnvvnXQRpdcCjkWrtLwNlPoR1ljiKz%2F5%2BeqBUK69gNFwoMNHt08QGOqUB0q1OXVn%2FU5UUP3PlzC5MqxDrwo4JPnNuPNcXkKw4NOMxUV40Ph0ayTQJldRgUxRaYWISUhCX5G0mQHH8Hl08abi5Mqk5rWBW0eMuelaZWLgWozrxUk4GMC3M9UolZuTICK%2Bpj9Le3C457pBUF3SvLw3RLbNmwHxkzIeekSw28x1T4hHu5vigM1uYIqefw36OMl5Xa9Fos68OIrg%2FFPivZXSN%2Brg0&X-Amz-Signature=5810515392f004494bab1b23559dad8652e78bcbd0a201ec7998e31c9b9546e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFIHUOBK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCBJTMo04FWufZTsaciksA4WqxHWCiEmqpeRTzxb9mkdQIgTryAWxB4yQz35siBIR2ah9L4Y2dWENjErp4D7zInK8cqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTubMUQ9P91HeDeLyrcAzwEpDsqCMySalpLeeWbVfVgm1XoSODTSMogWjPCdmF014ber1SuvpnlFPgjab1hJaEYe8%2FtRo72Cplk5TPCuhVSkRBmfxOPlkMCxGyCHxJMzGUxtUCrOOS%2BROVZwza%2BAmVJjJMaJBTSmLsX7046pkF%2BiTsG9aMVBkwGl%2FteP4kI%2FLRYmp8zx0PCPIfOG6PIwCkn07PcPlu%2F9cUrkl8RK3W7j7JxrUN%2FxX0AxpwuDSZO1Z2WZGDwnJv%2B3K97ffhqhNCy1NJKT6UCPDhtKV6enQ%2F9cfgTLwVpr%2FlXl3aWVA%2Fi8lo9jAqzTvENsw439EEMbGaTXQRgwHl4KajugcrwjHsNHB6IfdVzl37qZrvDM%2BWptteF4uHqzhNvm0ogoyKHHg%2BpVJvIzM0fz6QItHvr3XNhiAgydvo0aznJbcNZqoKysF0PxlVaBejix3eiNjLtoQVdLNaie2%2Bw5jS1YN9AMTYtMYMN59pbmbGzJlb4HwoYmWY4HkGNY4d%2FjZzvZSjSQYNfPZ3PQhijGCpGlR5JJ%2FW%2Bic%2BC3rTO6OPgZUG%2FdbpwWhJa9%2BPF8dh5uFpJC9Y8NCVzy8K%2FlTZv8IOEcq2BFkcYaprns00jtQC%2BwdLHemUdq625BEA3osoKLQD8MMLu08QGOqUB2E8oIvVqY8wo4oUV%2Fc7DjrLTbt%2BUOlO3T9fWoe508tnSWtTjUkt2x3k7m3Wj4r%2BzXeP15aavsuReg0z8lh99RrAdYWVJgjMl3wmT%2Bwgj6qkihqoIzP8T9U6Hn7cA3Plo%2Bj6Nqqr2S7LxTojvF4AhDu9lInSsTmsWegidDxFAZPWR2mPMffLmO%2F1HnmWySAOEvE6IkZHvN%2FpqVups0AEUrji6H0V8&X-Amz-Signature=a3b3ec408fd83a9bd013530e0e6a82c64770c6d555034c7acd1a9f0719264ea8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I7VTUSS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCG%2Fwk0PyIMG%2B%2FJ4tSpEKZNpEk3cNBVIGdhftgs7rYgXAIgAUTYC0zUE0vvP3gnB1063vWMUgqZvrs%2BmLBzfqiZJhMqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTeGpWhYei1Rf7uLCrcA56hn04e7bKqL7gQKl4wrj4q0TWhd5lJuLmNOWh02IkzINZFWvwSCV6vHAkm6OIJZ%2FRjiK%2B%2B3QJb9bo7tpkmSOdYWs97GsKYkrmzXCc2MKzi1SfCuwvHQhlEcMDUgxetFD2E9%2BLRXZWh%2BLDME67hjq2UbxIimmid6AeX8LD1NUwQGZQn0eJ33aV1%2Fq%2BJGFXXqBl31bqYdStx5AHNJrYBZbedn%2FsvxVANTzeGoZYzYgNO5aYhOBkz%2FsOSeErATTpzHrPLs9t9V%2FtJKl9zm8H7UXg%2FIXp5KIpMkhdWe7d3OxnmtSOa5LyYJCNqRhNHu3agSPsFCsadeA%2B9ryjHbl9xvDazOBLisW0AkzZ2svhoYIGahxnG6Ft970q5Agiq0H5paUa8Wg9iBL7tXsK4IQ2ZTltK2VvayJoRQzINtueqRO55D32kfwSU7qBaBLbt67eF2%2F4ipUEE3zevFRTULKNyxBHyw3x42RH4a6rxdXSVckuNzj6HozipjG3gQkvcd%2BwjGKI7%2FxDUDuP3yTj8sTGPp7a98oH1LdmKq4pzm6EvkIhrBetHYo0BJBZ%2FQSIK5Z%2FZpf1nmUJWMK7yQGZYnvvnXQRpdcCjkWrtLwNlPoR1ljiKz%2F5%2BeqBUK69gNFwoMNHt08QGOqUB0q1OXVn%2FU5UUP3PlzC5MqxDrwo4JPnNuPNcXkKw4NOMxUV40Ph0ayTQJldRgUxRaYWISUhCX5G0mQHH8Hl08abi5Mqk5rWBW0eMuelaZWLgWozrxUk4GMC3M9UolZuTICK%2Bpj9Le3C457pBUF3SvLw3RLbNmwHxkzIeekSw28x1T4hHu5vigM1uYIqefw36OMl5Xa9Fos68OIrg%2FFPivZXSN%2Brg0&X-Amz-Signature=7a4476043ae45a2f981e04e0d2d6b70c584e1f03cfa32be06ed622ca08da468a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I7VTUSS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCG%2Fwk0PyIMG%2B%2FJ4tSpEKZNpEk3cNBVIGdhftgs7rYgXAIgAUTYC0zUE0vvP3gnB1063vWMUgqZvrs%2BmLBzfqiZJhMqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTeGpWhYei1Rf7uLCrcA56hn04e7bKqL7gQKl4wrj4q0TWhd5lJuLmNOWh02IkzINZFWvwSCV6vHAkm6OIJZ%2FRjiK%2B%2B3QJb9bo7tpkmSOdYWs97GsKYkrmzXCc2MKzi1SfCuwvHQhlEcMDUgxetFD2E9%2BLRXZWh%2BLDME67hjq2UbxIimmid6AeX8LD1NUwQGZQn0eJ33aV1%2Fq%2BJGFXXqBl31bqYdStx5AHNJrYBZbedn%2FsvxVANTzeGoZYzYgNO5aYhOBkz%2FsOSeErATTpzHrPLs9t9V%2FtJKl9zm8H7UXg%2FIXp5KIpMkhdWe7d3OxnmtSOa5LyYJCNqRhNHu3agSPsFCsadeA%2B9ryjHbl9xvDazOBLisW0AkzZ2svhoYIGahxnG6Ft970q5Agiq0H5paUa8Wg9iBL7tXsK4IQ2ZTltK2VvayJoRQzINtueqRO55D32kfwSU7qBaBLbt67eF2%2F4ipUEE3zevFRTULKNyxBHyw3x42RH4a6rxdXSVckuNzj6HozipjG3gQkvcd%2BwjGKI7%2FxDUDuP3yTj8sTGPp7a98oH1LdmKq4pzm6EvkIhrBetHYo0BJBZ%2FQSIK5Z%2FZpf1nmUJWMK7yQGZYnvvnXQRpdcCjkWrtLwNlPoR1ljiKz%2F5%2BeqBUK69gNFwoMNHt08QGOqUB0q1OXVn%2FU5UUP3PlzC5MqxDrwo4JPnNuPNcXkKw4NOMxUV40Ph0ayTQJldRgUxRaYWISUhCX5G0mQHH8Hl08abi5Mqk5rWBW0eMuelaZWLgWozrxUk4GMC3M9UolZuTICK%2Bpj9Le3C457pBUF3SvLw3RLbNmwHxkzIeekSw28x1T4hHu5vigM1uYIqefw36OMl5Xa9Fos68OIrg%2FFPivZXSN%2Brg0&X-Amz-Signature=f4cc2313257008057df2d4cfa1ac05acbe74a2e3c7a14d0e998b54e519d68b66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I7VTUSS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCG%2Fwk0PyIMG%2B%2FJ4tSpEKZNpEk3cNBVIGdhftgs7rYgXAIgAUTYC0zUE0vvP3gnB1063vWMUgqZvrs%2BmLBzfqiZJhMqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTeGpWhYei1Rf7uLCrcA56hn04e7bKqL7gQKl4wrj4q0TWhd5lJuLmNOWh02IkzINZFWvwSCV6vHAkm6OIJZ%2FRjiK%2B%2B3QJb9bo7tpkmSOdYWs97GsKYkrmzXCc2MKzi1SfCuwvHQhlEcMDUgxetFD2E9%2BLRXZWh%2BLDME67hjq2UbxIimmid6AeX8LD1NUwQGZQn0eJ33aV1%2Fq%2BJGFXXqBl31bqYdStx5AHNJrYBZbedn%2FsvxVANTzeGoZYzYgNO5aYhOBkz%2FsOSeErATTpzHrPLs9t9V%2FtJKl9zm8H7UXg%2FIXp5KIpMkhdWe7d3OxnmtSOa5LyYJCNqRhNHu3agSPsFCsadeA%2B9ryjHbl9xvDazOBLisW0AkzZ2svhoYIGahxnG6Ft970q5Agiq0H5paUa8Wg9iBL7tXsK4IQ2ZTltK2VvayJoRQzINtueqRO55D32kfwSU7qBaBLbt67eF2%2F4ipUEE3zevFRTULKNyxBHyw3x42RH4a6rxdXSVckuNzj6HozipjG3gQkvcd%2BwjGKI7%2FxDUDuP3yTj8sTGPp7a98oH1LdmKq4pzm6EvkIhrBetHYo0BJBZ%2FQSIK5Z%2FZpf1nmUJWMK7yQGZYnvvnXQRpdcCjkWrtLwNlPoR1ljiKz%2F5%2BeqBUK69gNFwoMNHt08QGOqUB0q1OXVn%2FU5UUP3PlzC5MqxDrwo4JPnNuPNcXkKw4NOMxUV40Ph0ayTQJldRgUxRaYWISUhCX5G0mQHH8Hl08abi5Mqk5rWBW0eMuelaZWLgWozrxUk4GMC3M9UolZuTICK%2Bpj9Le3C457pBUF3SvLw3RLbNmwHxkzIeekSw28x1T4hHu5vigM1uYIqefw36OMl5Xa9Fos68OIrg%2FFPivZXSN%2Brg0&X-Amz-Signature=c6a019dbd8bf7d424e86ece99e5719821a0e0fc398fe8098420d4982bc02b280&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I7VTUSS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCG%2Fwk0PyIMG%2B%2FJ4tSpEKZNpEk3cNBVIGdhftgs7rYgXAIgAUTYC0zUE0vvP3gnB1063vWMUgqZvrs%2BmLBzfqiZJhMqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTeGpWhYei1Rf7uLCrcA56hn04e7bKqL7gQKl4wrj4q0TWhd5lJuLmNOWh02IkzINZFWvwSCV6vHAkm6OIJZ%2FRjiK%2B%2B3QJb9bo7tpkmSOdYWs97GsKYkrmzXCc2MKzi1SfCuwvHQhlEcMDUgxetFD2E9%2BLRXZWh%2BLDME67hjq2UbxIimmid6AeX8LD1NUwQGZQn0eJ33aV1%2Fq%2BJGFXXqBl31bqYdStx5AHNJrYBZbedn%2FsvxVANTzeGoZYzYgNO5aYhOBkz%2FsOSeErATTpzHrPLs9t9V%2FtJKl9zm8H7UXg%2FIXp5KIpMkhdWe7d3OxnmtSOa5LyYJCNqRhNHu3agSPsFCsadeA%2B9ryjHbl9xvDazOBLisW0AkzZ2svhoYIGahxnG6Ft970q5Agiq0H5paUa8Wg9iBL7tXsK4IQ2ZTltK2VvayJoRQzINtueqRO55D32kfwSU7qBaBLbt67eF2%2F4ipUEE3zevFRTULKNyxBHyw3x42RH4a6rxdXSVckuNzj6HozipjG3gQkvcd%2BwjGKI7%2FxDUDuP3yTj8sTGPp7a98oH1LdmKq4pzm6EvkIhrBetHYo0BJBZ%2FQSIK5Z%2FZpf1nmUJWMK7yQGZYnvvnXQRpdcCjkWrtLwNlPoR1ljiKz%2F5%2BeqBUK69gNFwoMNHt08QGOqUB0q1OXVn%2FU5UUP3PlzC5MqxDrwo4JPnNuPNcXkKw4NOMxUV40Ph0ayTQJldRgUxRaYWISUhCX5G0mQHH8Hl08abi5Mqk5rWBW0eMuelaZWLgWozrxUk4GMC3M9UolZuTICK%2Bpj9Le3C457pBUF3SvLw3RLbNmwHxkzIeekSw28x1T4hHu5vigM1uYIqefw36OMl5Xa9Fos68OIrg%2FFPivZXSN%2Brg0&X-Amz-Signature=74002cf0b32f86f8d94522bdb47fac71749a1f40e6acf35be93a961368323702&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I7VTUSS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCG%2Fwk0PyIMG%2B%2FJ4tSpEKZNpEk3cNBVIGdhftgs7rYgXAIgAUTYC0zUE0vvP3gnB1063vWMUgqZvrs%2BmLBzfqiZJhMqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTeGpWhYei1Rf7uLCrcA56hn04e7bKqL7gQKl4wrj4q0TWhd5lJuLmNOWh02IkzINZFWvwSCV6vHAkm6OIJZ%2FRjiK%2B%2B3QJb9bo7tpkmSOdYWs97GsKYkrmzXCc2MKzi1SfCuwvHQhlEcMDUgxetFD2E9%2BLRXZWh%2BLDME67hjq2UbxIimmid6AeX8LD1NUwQGZQn0eJ33aV1%2Fq%2BJGFXXqBl31bqYdStx5AHNJrYBZbedn%2FsvxVANTzeGoZYzYgNO5aYhOBkz%2FsOSeErATTpzHrPLs9t9V%2FtJKl9zm8H7UXg%2FIXp5KIpMkhdWe7d3OxnmtSOa5LyYJCNqRhNHu3agSPsFCsadeA%2B9ryjHbl9xvDazOBLisW0AkzZ2svhoYIGahxnG6Ft970q5Agiq0H5paUa8Wg9iBL7tXsK4IQ2ZTltK2VvayJoRQzINtueqRO55D32kfwSU7qBaBLbt67eF2%2F4ipUEE3zevFRTULKNyxBHyw3x42RH4a6rxdXSVckuNzj6HozipjG3gQkvcd%2BwjGKI7%2FxDUDuP3yTj8sTGPp7a98oH1LdmKq4pzm6EvkIhrBetHYo0BJBZ%2FQSIK5Z%2FZpf1nmUJWMK7yQGZYnvvnXQRpdcCjkWrtLwNlPoR1ljiKz%2F5%2BeqBUK69gNFwoMNHt08QGOqUB0q1OXVn%2FU5UUP3PlzC5MqxDrwo4JPnNuPNcXkKw4NOMxUV40Ph0ayTQJldRgUxRaYWISUhCX5G0mQHH8Hl08abi5Mqk5rWBW0eMuelaZWLgWozrxUk4GMC3M9UolZuTICK%2Bpj9Le3C457pBUF3SvLw3RLbNmwHxkzIeekSw28x1T4hHu5vigM1uYIqefw36OMl5Xa9Fos68OIrg%2FFPivZXSN%2Brg0&X-Amz-Signature=dbb48ed423ead534d5d2bb0f2cee9a12ff359845579099f25bbd533fb6ebeaa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I7VTUSS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCG%2Fwk0PyIMG%2B%2FJ4tSpEKZNpEk3cNBVIGdhftgs7rYgXAIgAUTYC0zUE0vvP3gnB1063vWMUgqZvrs%2BmLBzfqiZJhMqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTeGpWhYei1Rf7uLCrcA56hn04e7bKqL7gQKl4wrj4q0TWhd5lJuLmNOWh02IkzINZFWvwSCV6vHAkm6OIJZ%2FRjiK%2B%2B3QJb9bo7tpkmSOdYWs97GsKYkrmzXCc2MKzi1SfCuwvHQhlEcMDUgxetFD2E9%2BLRXZWh%2BLDME67hjq2UbxIimmid6AeX8LD1NUwQGZQn0eJ33aV1%2Fq%2BJGFXXqBl31bqYdStx5AHNJrYBZbedn%2FsvxVANTzeGoZYzYgNO5aYhOBkz%2FsOSeErATTpzHrPLs9t9V%2FtJKl9zm8H7UXg%2FIXp5KIpMkhdWe7d3OxnmtSOa5LyYJCNqRhNHu3agSPsFCsadeA%2B9ryjHbl9xvDazOBLisW0AkzZ2svhoYIGahxnG6Ft970q5Agiq0H5paUa8Wg9iBL7tXsK4IQ2ZTltK2VvayJoRQzINtueqRO55D32kfwSU7qBaBLbt67eF2%2F4ipUEE3zevFRTULKNyxBHyw3x42RH4a6rxdXSVckuNzj6HozipjG3gQkvcd%2BwjGKI7%2FxDUDuP3yTj8sTGPp7a98oH1LdmKq4pzm6EvkIhrBetHYo0BJBZ%2FQSIK5Z%2FZpf1nmUJWMK7yQGZYnvvnXQRpdcCjkWrtLwNlPoR1ljiKz%2F5%2BeqBUK69gNFwoMNHt08QGOqUB0q1OXVn%2FU5UUP3PlzC5MqxDrwo4JPnNuPNcXkKw4NOMxUV40Ph0ayTQJldRgUxRaYWISUhCX5G0mQHH8Hl08abi5Mqk5rWBW0eMuelaZWLgWozrxUk4GMC3M9UolZuTICK%2Bpj9Le3C457pBUF3SvLw3RLbNmwHxkzIeekSw28x1T4hHu5vigM1uYIqefw36OMl5Xa9Fos68OIrg%2FFPivZXSN%2Brg0&X-Amz-Signature=03cf9bc300e44dc336831970c6d5bd3a95765022fe65ce11936ff10cfb539ecc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
