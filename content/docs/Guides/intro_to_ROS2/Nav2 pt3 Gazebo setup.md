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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622IR6GRP%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsPliQBvf7GfOwyz%2FKXvpCZdb1E4I%2Fl%2BokHQuz%2FBRUaAiEAysx2aDVKhW4RWokgh7%2FbhzEwkXNIXqawaXUVPymwd9oqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6r1QcRUGKJRQxqqyrcAy58Z5kEC8PT8kv9yH7A04TURE27aXnn15Din60EshcHxEgVAc6zIVQqbxmruNnRpCt8w9ljQFJUYiv8MuxR09vqBJmSfVvFNoMkTpACv9ZUlMXmiaLNVB0X2bLiJk60Cbxr4A1jzShGl0rJRMQh0mVVTxfSckSkHQa36apVl9VdWLdue%2BKbAMgxJGJipRWHF%2B101Ka9DRtqmMjJhvKmq6L39DQRtM0gJz7JbJmVtmvqp5%2BPpHbLaR%2FdPnrbKw%2BEqhiJkoipRWbowMYKay0gbjeUm0W6Z1WWnLsDxEsE5lWpOacRVbdRMxEKeADQoVsfFtOvqhtP9kplbCKMGbjhgJz0zJTxOwQEHN8ed9TtNzliayCJMPbLGNlbEWJHuoWZSCmYf1%2FMVyYEUL01ay0NMU9X8bWvMQNHIx8BYcL%2BucX72pyrn2cprPcRp%2BQLaHsH5NWOXtlYrSjwXsnfbh4GIz89COs4rOKImUf%2FBTD5LHPvk3nKLWe3VPpO9gTnHiPMlnw2Z8ic3nLmOveEF6YIB%2BnIJDJWwHJSu8ULWLKBKnxT4BtCltTOm7wlbI8nrxd2CUMUM6IEH2KoPhSoI7G13FTHfLIJo%2F2hExnou8Jf4gbq1hxDghkXhDnjm6zwMK3ynsUGOqUBjNNgS5Nkk0k%2BmPSOnZePJwcIpGbLjFM1X3HnmZOABETSrHCL80ubblxWhU4Vv4lXBmz2hC4NVQBYG1rAR%2BaSc8tgWh88OPd7ASjGkEup%2F4jkWGTYj%2BpgmyOt3bK5tUVQVJMVXWbiF3t8%2Foj9nwzK58AbmAHEyPs8Sc%2BepjNrFZKD5Qp83Yn91wgHlPaGS16g6KxOSV123VPBal3RAsyqKW3eLPKH&X-Amz-Signature=fe83deb2cd36ae40a70dcfdee7709855cdd82253e955a767aa194c8dd6dab995&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622IR6GRP%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsPliQBvf7GfOwyz%2FKXvpCZdb1E4I%2Fl%2BokHQuz%2FBRUaAiEAysx2aDVKhW4RWokgh7%2FbhzEwkXNIXqawaXUVPymwd9oqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6r1QcRUGKJRQxqqyrcAy58Z5kEC8PT8kv9yH7A04TURE27aXnn15Din60EshcHxEgVAc6zIVQqbxmruNnRpCt8w9ljQFJUYiv8MuxR09vqBJmSfVvFNoMkTpACv9ZUlMXmiaLNVB0X2bLiJk60Cbxr4A1jzShGl0rJRMQh0mVVTxfSckSkHQa36apVl9VdWLdue%2BKbAMgxJGJipRWHF%2B101Ka9DRtqmMjJhvKmq6L39DQRtM0gJz7JbJmVtmvqp5%2BPpHbLaR%2FdPnrbKw%2BEqhiJkoipRWbowMYKay0gbjeUm0W6Z1WWnLsDxEsE5lWpOacRVbdRMxEKeADQoVsfFtOvqhtP9kplbCKMGbjhgJz0zJTxOwQEHN8ed9TtNzliayCJMPbLGNlbEWJHuoWZSCmYf1%2FMVyYEUL01ay0NMU9X8bWvMQNHIx8BYcL%2BucX72pyrn2cprPcRp%2BQLaHsH5NWOXtlYrSjwXsnfbh4GIz89COs4rOKImUf%2FBTD5LHPvk3nKLWe3VPpO9gTnHiPMlnw2Z8ic3nLmOveEF6YIB%2BnIJDJWwHJSu8ULWLKBKnxT4BtCltTOm7wlbI8nrxd2CUMUM6IEH2KoPhSoI7G13FTHfLIJo%2F2hExnou8Jf4gbq1hxDghkXhDnjm6zwMK3ynsUGOqUBjNNgS5Nkk0k%2BmPSOnZePJwcIpGbLjFM1X3HnmZOABETSrHCL80ubblxWhU4Vv4lXBmz2hC4NVQBYG1rAR%2BaSc8tgWh88OPd7ASjGkEup%2F4jkWGTYj%2BpgmyOt3bK5tUVQVJMVXWbiF3t8%2Foj9nwzK58AbmAHEyPs8Sc%2BepjNrFZKD5Qp83Yn91wgHlPaGS16g6KxOSV123VPBal3RAsyqKW3eLPKH&X-Amz-Signature=6811ab75bd54e783be1317ecd4ddabda8ee525d66dcc4ee7303e1dac11cdcaf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622IR6GRP%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsPliQBvf7GfOwyz%2FKXvpCZdb1E4I%2Fl%2BokHQuz%2FBRUaAiEAysx2aDVKhW4RWokgh7%2FbhzEwkXNIXqawaXUVPymwd9oqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6r1QcRUGKJRQxqqyrcAy58Z5kEC8PT8kv9yH7A04TURE27aXnn15Din60EshcHxEgVAc6zIVQqbxmruNnRpCt8w9ljQFJUYiv8MuxR09vqBJmSfVvFNoMkTpACv9ZUlMXmiaLNVB0X2bLiJk60Cbxr4A1jzShGl0rJRMQh0mVVTxfSckSkHQa36apVl9VdWLdue%2BKbAMgxJGJipRWHF%2B101Ka9DRtqmMjJhvKmq6L39DQRtM0gJz7JbJmVtmvqp5%2BPpHbLaR%2FdPnrbKw%2BEqhiJkoipRWbowMYKay0gbjeUm0W6Z1WWnLsDxEsE5lWpOacRVbdRMxEKeADQoVsfFtOvqhtP9kplbCKMGbjhgJz0zJTxOwQEHN8ed9TtNzliayCJMPbLGNlbEWJHuoWZSCmYf1%2FMVyYEUL01ay0NMU9X8bWvMQNHIx8BYcL%2BucX72pyrn2cprPcRp%2BQLaHsH5NWOXtlYrSjwXsnfbh4GIz89COs4rOKImUf%2FBTD5LHPvk3nKLWe3VPpO9gTnHiPMlnw2Z8ic3nLmOveEF6YIB%2BnIJDJWwHJSu8ULWLKBKnxT4BtCltTOm7wlbI8nrxd2CUMUM6IEH2KoPhSoI7G13FTHfLIJo%2F2hExnou8Jf4gbq1hxDghkXhDnjm6zwMK3ynsUGOqUBjNNgS5Nkk0k%2BmPSOnZePJwcIpGbLjFM1X3HnmZOABETSrHCL80ubblxWhU4Vv4lXBmz2hC4NVQBYG1rAR%2BaSc8tgWh88OPd7ASjGkEup%2F4jkWGTYj%2BpgmyOt3bK5tUVQVJMVXWbiF3t8%2Foj9nwzK58AbmAHEyPs8Sc%2BepjNrFZKD5Qp83Yn91wgHlPaGS16g6KxOSV123VPBal3RAsyqKW3eLPKH&X-Amz-Signature=79cb79cba19665d344033745c99519b11f8e5cdc8e0b75fed01ce8c97d0066f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622IR6GRP%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsPliQBvf7GfOwyz%2FKXvpCZdb1E4I%2Fl%2BokHQuz%2FBRUaAiEAysx2aDVKhW4RWokgh7%2FbhzEwkXNIXqawaXUVPymwd9oqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6r1QcRUGKJRQxqqyrcAy58Z5kEC8PT8kv9yH7A04TURE27aXnn15Din60EshcHxEgVAc6zIVQqbxmruNnRpCt8w9ljQFJUYiv8MuxR09vqBJmSfVvFNoMkTpACv9ZUlMXmiaLNVB0X2bLiJk60Cbxr4A1jzShGl0rJRMQh0mVVTxfSckSkHQa36apVl9VdWLdue%2BKbAMgxJGJipRWHF%2B101Ka9DRtqmMjJhvKmq6L39DQRtM0gJz7JbJmVtmvqp5%2BPpHbLaR%2FdPnrbKw%2BEqhiJkoipRWbowMYKay0gbjeUm0W6Z1WWnLsDxEsE5lWpOacRVbdRMxEKeADQoVsfFtOvqhtP9kplbCKMGbjhgJz0zJTxOwQEHN8ed9TtNzliayCJMPbLGNlbEWJHuoWZSCmYf1%2FMVyYEUL01ay0NMU9X8bWvMQNHIx8BYcL%2BucX72pyrn2cprPcRp%2BQLaHsH5NWOXtlYrSjwXsnfbh4GIz89COs4rOKImUf%2FBTD5LHPvk3nKLWe3VPpO9gTnHiPMlnw2Z8ic3nLmOveEF6YIB%2BnIJDJWwHJSu8ULWLKBKnxT4BtCltTOm7wlbI8nrxd2CUMUM6IEH2KoPhSoI7G13FTHfLIJo%2F2hExnou8Jf4gbq1hxDghkXhDnjm6zwMK3ynsUGOqUBjNNgS5Nkk0k%2BmPSOnZePJwcIpGbLjFM1X3HnmZOABETSrHCL80ubblxWhU4Vv4lXBmz2hC4NVQBYG1rAR%2BaSc8tgWh88OPd7ASjGkEup%2F4jkWGTYj%2BpgmyOt3bK5tUVQVJMVXWbiF3t8%2Foj9nwzK58AbmAHEyPs8Sc%2BepjNrFZKD5Qp83Yn91wgHlPaGS16g6KxOSV123VPBal3RAsyqKW3eLPKH&X-Amz-Signature=a21405c1d84e207c039e11be58da2aa5a49f63b3a7ca0a170f652612e386c1ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHLNZKNK%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvR9zIf2yvZX8aoxm1fnNkHBndOljFchu6ZbHrR6NBXAiAi9WZnLCO6FQl63KXtM2KClOkbFRhL70w8yqVhm4ybaiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx4eQDholJxf%2FhjD4KtwDKgE6%2F%2BFBpNEIx1%2BTsmaMkW1cTbbphQB6PUJmwvjWbAlrT7fnEFMukg3a0YE0FuR3B7intf6xmSRUksFswFLeEXQpY18IqKNIsERpGKM4Xs5uH9BHkx9ltI6MSplALgWf1j9JjbogsXzMjdtD7tpmczvKzBmzA9PaKOvZa6fPUG18GLBf5jXtM614yb2598HTmADeKN2p1EeLT1M5KdAnXolgeETJVf9%2Bvbb7Fzaiog6BS19ZV76OLDZ3KCdbr5zfom5boXlLuhWWUtKv0cmeP3S3BUmwWkcP1e2tgW0oFiMacC4ZTqRVSR4djo9FtOBoslbziXsBefr81YeFVxjTy5Ehf%2FOyS5pHvD2W5xr0GIeTuJOPUOxmJldVJz%2Bd95Wh58ePthHMl7cc2C6UD1Y5%2BF%2Fydk%2FUW9lXxIMf5oNj1WuL53k1ry8sqKG52Nr4gVTlRRrrJe2g%2Bwfp3ufqkTgYuOBa4le8secVNnR7Yt3AlovSxuZ3klt0IEeH58YEld7c1kwLsSX4Pj4oZH%2FcZzVYS%2Fg9B%2FHSoJDx%2FsOXBphLhuPOMMi8%2FnQy1IOogrEea%2BE%2BZ23ZDbAA6EN0h4dsdyleBIJcF3lA2fMp0eOePXq5hjb5dJaIdIOOmp7zW6Iw%2F%2FKexQY6pgGWhUge1euSJxRbZJ1%2Fns7j4sERrkirgkDo7ZANUN1PtU7V57CWxlQG%2FvqVpzPDKgpOhuidkL%2Fy%2FWrga3Zfr8HoFW%2FHhU1ckElvseE47Eiq2XE%2F2XNCbUrg0WtuRFUXGFdePBsv5WyNeUSsBmZVSuB8JyuOkrLKZgcqjGdfOfrjFZccQSr0ou0k5Vc5MuFAv9GDm2%2F4oTCiVt2sqee1qHRO3txZBZen&X-Amz-Signature=967fcd0cab836f522ec5ef33ff548cec6512a762a9fe4e56bd59f00093472db1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622IR6GRP%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsPliQBvf7GfOwyz%2FKXvpCZdb1E4I%2Fl%2BokHQuz%2FBRUaAiEAysx2aDVKhW4RWokgh7%2FbhzEwkXNIXqawaXUVPymwd9oqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6r1QcRUGKJRQxqqyrcAy58Z5kEC8PT8kv9yH7A04TURE27aXnn15Din60EshcHxEgVAc6zIVQqbxmruNnRpCt8w9ljQFJUYiv8MuxR09vqBJmSfVvFNoMkTpACv9ZUlMXmiaLNVB0X2bLiJk60Cbxr4A1jzShGl0rJRMQh0mVVTxfSckSkHQa36apVl9VdWLdue%2BKbAMgxJGJipRWHF%2B101Ka9DRtqmMjJhvKmq6L39DQRtM0gJz7JbJmVtmvqp5%2BPpHbLaR%2FdPnrbKw%2BEqhiJkoipRWbowMYKay0gbjeUm0W6Z1WWnLsDxEsE5lWpOacRVbdRMxEKeADQoVsfFtOvqhtP9kplbCKMGbjhgJz0zJTxOwQEHN8ed9TtNzliayCJMPbLGNlbEWJHuoWZSCmYf1%2FMVyYEUL01ay0NMU9X8bWvMQNHIx8BYcL%2BucX72pyrn2cprPcRp%2BQLaHsH5NWOXtlYrSjwXsnfbh4GIz89COs4rOKImUf%2FBTD5LHPvk3nKLWe3VPpO9gTnHiPMlnw2Z8ic3nLmOveEF6YIB%2BnIJDJWwHJSu8ULWLKBKnxT4BtCltTOm7wlbI8nrxd2CUMUM6IEH2KoPhSoI7G13FTHfLIJo%2F2hExnou8Jf4gbq1hxDghkXhDnjm6zwMK3ynsUGOqUBjNNgS5Nkk0k%2BmPSOnZePJwcIpGbLjFM1X3HnmZOABETSrHCL80ubblxWhU4Vv4lXBmz2hC4NVQBYG1rAR%2BaSc8tgWh88OPd7ASjGkEup%2F4jkWGTYj%2BpgmyOt3bK5tUVQVJMVXWbiF3t8%2Foj9nwzK58AbmAHEyPs8Sc%2BepjNrFZKD5Qp83Yn91wgHlPaGS16g6KxOSV123VPBal3RAsyqKW3eLPKH&X-Amz-Signature=d505993dc8f51e9cba3f3e31079655e340be5ac4fba0eba72b51f205dfd41a40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622IR6GRP%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsPliQBvf7GfOwyz%2FKXvpCZdb1E4I%2Fl%2BokHQuz%2FBRUaAiEAysx2aDVKhW4RWokgh7%2FbhzEwkXNIXqawaXUVPymwd9oqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6r1QcRUGKJRQxqqyrcAy58Z5kEC8PT8kv9yH7A04TURE27aXnn15Din60EshcHxEgVAc6zIVQqbxmruNnRpCt8w9ljQFJUYiv8MuxR09vqBJmSfVvFNoMkTpACv9ZUlMXmiaLNVB0X2bLiJk60Cbxr4A1jzShGl0rJRMQh0mVVTxfSckSkHQa36apVl9VdWLdue%2BKbAMgxJGJipRWHF%2B101Ka9DRtqmMjJhvKmq6L39DQRtM0gJz7JbJmVtmvqp5%2BPpHbLaR%2FdPnrbKw%2BEqhiJkoipRWbowMYKay0gbjeUm0W6Z1WWnLsDxEsE5lWpOacRVbdRMxEKeADQoVsfFtOvqhtP9kplbCKMGbjhgJz0zJTxOwQEHN8ed9TtNzliayCJMPbLGNlbEWJHuoWZSCmYf1%2FMVyYEUL01ay0NMU9X8bWvMQNHIx8BYcL%2BucX72pyrn2cprPcRp%2BQLaHsH5NWOXtlYrSjwXsnfbh4GIz89COs4rOKImUf%2FBTD5LHPvk3nKLWe3VPpO9gTnHiPMlnw2Z8ic3nLmOveEF6YIB%2BnIJDJWwHJSu8ULWLKBKnxT4BtCltTOm7wlbI8nrxd2CUMUM6IEH2KoPhSoI7G13FTHfLIJo%2F2hExnou8Jf4gbq1hxDghkXhDnjm6zwMK3ynsUGOqUBjNNgS5Nkk0k%2BmPSOnZePJwcIpGbLjFM1X3HnmZOABETSrHCL80ubblxWhU4Vv4lXBmz2hC4NVQBYG1rAR%2BaSc8tgWh88OPd7ASjGkEup%2F4jkWGTYj%2BpgmyOt3bK5tUVQVJMVXWbiF3t8%2Foj9nwzK58AbmAHEyPs8Sc%2BepjNrFZKD5Qp83Yn91wgHlPaGS16g6KxOSV123VPBal3RAsyqKW3eLPKH&X-Amz-Signature=19d2ee53d14d5709c610f975a1b83fe269399b48af4ccf520fcea0b91c1b2f8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622IR6GRP%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsPliQBvf7GfOwyz%2FKXvpCZdb1E4I%2Fl%2BokHQuz%2FBRUaAiEAysx2aDVKhW4RWokgh7%2FbhzEwkXNIXqawaXUVPymwd9oqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6r1QcRUGKJRQxqqyrcAy58Z5kEC8PT8kv9yH7A04TURE27aXnn15Din60EshcHxEgVAc6zIVQqbxmruNnRpCt8w9ljQFJUYiv8MuxR09vqBJmSfVvFNoMkTpACv9ZUlMXmiaLNVB0X2bLiJk60Cbxr4A1jzShGl0rJRMQh0mVVTxfSckSkHQa36apVl9VdWLdue%2BKbAMgxJGJipRWHF%2B101Ka9DRtqmMjJhvKmq6L39DQRtM0gJz7JbJmVtmvqp5%2BPpHbLaR%2FdPnrbKw%2BEqhiJkoipRWbowMYKay0gbjeUm0W6Z1WWnLsDxEsE5lWpOacRVbdRMxEKeADQoVsfFtOvqhtP9kplbCKMGbjhgJz0zJTxOwQEHN8ed9TtNzliayCJMPbLGNlbEWJHuoWZSCmYf1%2FMVyYEUL01ay0NMU9X8bWvMQNHIx8BYcL%2BucX72pyrn2cprPcRp%2BQLaHsH5NWOXtlYrSjwXsnfbh4GIz89COs4rOKImUf%2FBTD5LHPvk3nKLWe3VPpO9gTnHiPMlnw2Z8ic3nLmOveEF6YIB%2BnIJDJWwHJSu8ULWLKBKnxT4BtCltTOm7wlbI8nrxd2CUMUM6IEH2KoPhSoI7G13FTHfLIJo%2F2hExnou8Jf4gbq1hxDghkXhDnjm6zwMK3ynsUGOqUBjNNgS5Nkk0k%2BmPSOnZePJwcIpGbLjFM1X3HnmZOABETSrHCL80ubblxWhU4Vv4lXBmz2hC4NVQBYG1rAR%2BaSc8tgWh88OPd7ASjGkEup%2F4jkWGTYj%2BpgmyOt3bK5tUVQVJMVXWbiF3t8%2Foj9nwzK58AbmAHEyPs8Sc%2BepjNrFZKD5Qp83Yn91wgHlPaGS16g6KxOSV123VPBal3RAsyqKW3eLPKH&X-Amz-Signature=d4ec177f4cb6bf3e47f97fba7a8de8f47d6fce1a0ee5092173061e9e063d2e1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622IR6GRP%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsPliQBvf7GfOwyz%2FKXvpCZdb1E4I%2Fl%2BokHQuz%2FBRUaAiEAysx2aDVKhW4RWokgh7%2FbhzEwkXNIXqawaXUVPymwd9oqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6r1QcRUGKJRQxqqyrcAy58Z5kEC8PT8kv9yH7A04TURE27aXnn15Din60EshcHxEgVAc6zIVQqbxmruNnRpCt8w9ljQFJUYiv8MuxR09vqBJmSfVvFNoMkTpACv9ZUlMXmiaLNVB0X2bLiJk60Cbxr4A1jzShGl0rJRMQh0mVVTxfSckSkHQa36apVl9VdWLdue%2BKbAMgxJGJipRWHF%2B101Ka9DRtqmMjJhvKmq6L39DQRtM0gJz7JbJmVtmvqp5%2BPpHbLaR%2FdPnrbKw%2BEqhiJkoipRWbowMYKay0gbjeUm0W6Z1WWnLsDxEsE5lWpOacRVbdRMxEKeADQoVsfFtOvqhtP9kplbCKMGbjhgJz0zJTxOwQEHN8ed9TtNzliayCJMPbLGNlbEWJHuoWZSCmYf1%2FMVyYEUL01ay0NMU9X8bWvMQNHIx8BYcL%2BucX72pyrn2cprPcRp%2BQLaHsH5NWOXtlYrSjwXsnfbh4GIz89COs4rOKImUf%2FBTD5LHPvk3nKLWe3VPpO9gTnHiPMlnw2Z8ic3nLmOveEF6YIB%2BnIJDJWwHJSu8ULWLKBKnxT4BtCltTOm7wlbI8nrxd2CUMUM6IEH2KoPhSoI7G13FTHfLIJo%2F2hExnou8Jf4gbq1hxDghkXhDnjm6zwMK3ynsUGOqUBjNNgS5Nkk0k%2BmPSOnZePJwcIpGbLjFM1X3HnmZOABETSrHCL80ubblxWhU4Vv4lXBmz2hC4NVQBYG1rAR%2BaSc8tgWh88OPd7ASjGkEup%2F4jkWGTYj%2BpgmyOt3bK5tUVQVJMVXWbiF3t8%2Foj9nwzK58AbmAHEyPs8Sc%2BepjNrFZKD5Qp83Yn91wgHlPaGS16g6KxOSV123VPBal3RAsyqKW3eLPKH&X-Amz-Signature=f5dd9b6a8458f062ceff1eba74b54596a6b9e9b704e2176e8591029437a9afb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622IR6GRP%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsPliQBvf7GfOwyz%2FKXvpCZdb1E4I%2Fl%2BokHQuz%2FBRUaAiEAysx2aDVKhW4RWokgh7%2FbhzEwkXNIXqawaXUVPymwd9oqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6r1QcRUGKJRQxqqyrcAy58Z5kEC8PT8kv9yH7A04TURE27aXnn15Din60EshcHxEgVAc6zIVQqbxmruNnRpCt8w9ljQFJUYiv8MuxR09vqBJmSfVvFNoMkTpACv9ZUlMXmiaLNVB0X2bLiJk60Cbxr4A1jzShGl0rJRMQh0mVVTxfSckSkHQa36apVl9VdWLdue%2BKbAMgxJGJipRWHF%2B101Ka9DRtqmMjJhvKmq6L39DQRtM0gJz7JbJmVtmvqp5%2BPpHbLaR%2FdPnrbKw%2BEqhiJkoipRWbowMYKay0gbjeUm0W6Z1WWnLsDxEsE5lWpOacRVbdRMxEKeADQoVsfFtOvqhtP9kplbCKMGbjhgJz0zJTxOwQEHN8ed9TtNzliayCJMPbLGNlbEWJHuoWZSCmYf1%2FMVyYEUL01ay0NMU9X8bWvMQNHIx8BYcL%2BucX72pyrn2cprPcRp%2BQLaHsH5NWOXtlYrSjwXsnfbh4GIz89COs4rOKImUf%2FBTD5LHPvk3nKLWe3VPpO9gTnHiPMlnw2Z8ic3nLmOveEF6YIB%2BnIJDJWwHJSu8ULWLKBKnxT4BtCltTOm7wlbI8nrxd2CUMUM6IEH2KoPhSoI7G13FTHfLIJo%2F2hExnou8Jf4gbq1hxDghkXhDnjm6zwMK3ynsUGOqUBjNNgS5Nkk0k%2BmPSOnZePJwcIpGbLjFM1X3HnmZOABETSrHCL80ubblxWhU4Vv4lXBmz2hC4NVQBYG1rAR%2BaSc8tgWh88OPd7ASjGkEup%2F4jkWGTYj%2BpgmyOt3bK5tUVQVJMVXWbiF3t8%2Foj9nwzK58AbmAHEyPs8Sc%2BepjNrFZKD5Qp83Yn91wgHlPaGS16g6KxOSV123VPBal3RAsyqKW3eLPKH&X-Amz-Signature=7340af5ab80bf381ff28a87736276295137425d9de7bd240bca1ca86289d0971&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622IR6GRP%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsPliQBvf7GfOwyz%2FKXvpCZdb1E4I%2Fl%2BokHQuz%2FBRUaAiEAysx2aDVKhW4RWokgh7%2FbhzEwkXNIXqawaXUVPymwd9oqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6r1QcRUGKJRQxqqyrcAy58Z5kEC8PT8kv9yH7A04TURE27aXnn15Din60EshcHxEgVAc6zIVQqbxmruNnRpCt8w9ljQFJUYiv8MuxR09vqBJmSfVvFNoMkTpACv9ZUlMXmiaLNVB0X2bLiJk60Cbxr4A1jzShGl0rJRMQh0mVVTxfSckSkHQa36apVl9VdWLdue%2BKbAMgxJGJipRWHF%2B101Ka9DRtqmMjJhvKmq6L39DQRtM0gJz7JbJmVtmvqp5%2BPpHbLaR%2FdPnrbKw%2BEqhiJkoipRWbowMYKay0gbjeUm0W6Z1WWnLsDxEsE5lWpOacRVbdRMxEKeADQoVsfFtOvqhtP9kplbCKMGbjhgJz0zJTxOwQEHN8ed9TtNzliayCJMPbLGNlbEWJHuoWZSCmYf1%2FMVyYEUL01ay0NMU9X8bWvMQNHIx8BYcL%2BucX72pyrn2cprPcRp%2BQLaHsH5NWOXtlYrSjwXsnfbh4GIz89COs4rOKImUf%2FBTD5LHPvk3nKLWe3VPpO9gTnHiPMlnw2Z8ic3nLmOveEF6YIB%2BnIJDJWwHJSu8ULWLKBKnxT4BtCltTOm7wlbI8nrxd2CUMUM6IEH2KoPhSoI7G13FTHfLIJo%2F2hExnou8Jf4gbq1hxDghkXhDnjm6zwMK3ynsUGOqUBjNNgS5Nkk0k%2BmPSOnZePJwcIpGbLjFM1X3HnmZOABETSrHCL80ubblxWhU4Vv4lXBmz2hC4NVQBYG1rAR%2BaSc8tgWh88OPd7ASjGkEup%2F4jkWGTYj%2BpgmyOt3bK5tUVQVJMVXWbiF3t8%2Foj9nwzK58AbmAHEyPs8Sc%2BepjNrFZKD5Qp83Yn91wgHlPaGS16g6KxOSV123VPBal3RAsyqKW3eLPKH&X-Amz-Signature=dcd70ba08569742f97292e9f5d24bef31256274a3f0c27abb272375eecdbfada&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


