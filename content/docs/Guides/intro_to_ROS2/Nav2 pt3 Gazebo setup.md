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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X6WMCV5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIBucoREoIIOmSV7jCZt8fAfF9TEYRdCt2wRgvy3KI%2BspAiB3MmHiKig%2F8EgfJii5vWQmsQh18NWzscjZJNK15841GCqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm%2Bzv72AKzE%2BPLfEFKtwDTyx1glq1l1LUIsdhNYUDeKFdnXYSPtnuI764xc974VBQn3CNgm9yZy7WJujHRVyWXS8n9T8QPvTNVQmXjPR8P%2BX5UHfeRDWqH7ECAP8cL7y1tdSuBFi0R8VFvkE0Led3ppUSwnpvS0fTbIKYwZp4OyM0N9C3jNMEcBcGPrJzmzPwhuUg0dnn%2BCvssSCtbgnpyWXRmWod5C%2But1VXtT505NFf8J2WKun6GMBlx0vLBXhx6eoJr73M089y8BaxOgs7GKt%2Fyg842v69uoKlcV1xOFKHmHAk%2B8IJgwj5H%2BrkJ37xl8fKa6GzuM%2FdcfCug3AjDQd33qt0HPym7tQq2hBI0dP2uGbA1Q7%2BeJhza6Jl%2BWu34uHrgJuBumFz4%2Bp0i3PQ5tdjHD7merWSihOMzxfumt1qNtJD3Q1kZMAXeHuNZV%2BL4Np48uYucl%2FoaxOhxB8aHzXiUeTGvYjUQfTORsXrEc33ToKuQ8DldehpAuvp%2F4AIPM6nTT93ZWCnyApQ275cB%2Bjs%2B%2Fb7KPiGuNIaYfp9LUB9DtQEAsTxerdhFuse6U87WVscp25Dh4W8uBfZ7aN7ugm5jfEHVhoHlkFgkOoMr4QH%2F5diApHon45%2B0nENYoh4%2Fr5irfgNH%2FfOpmYwtYjSxAY6pgEbOcoIGeosHfSaz28Nyga28tYZKgGtO8E1X5u9qWouvYBta0xSZm6eWUpf0PFGYzytKlPAeKuVeS1EOVwXPm7gcRHaxLjHC8V2Ul0a3Sc2KRfGECOGXldwqLG%2FT32WkZHCTc%2Bf7dj%2Fi1%2F9YHDQl0xuoOovPn7m81LVEDvRTtd%2BwRj0ZWencMbEx9x3iT65QWqe2AieSUB2eIzIHlwmyHnMMcF1G4qr&X-Amz-Signature=fba1617ad147e3cff5ada2e71b0c17f6374c521a35a863c74ca608f5dd4bb592&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X6WMCV5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIBucoREoIIOmSV7jCZt8fAfF9TEYRdCt2wRgvy3KI%2BspAiB3MmHiKig%2F8EgfJii5vWQmsQh18NWzscjZJNK15841GCqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm%2Bzv72AKzE%2BPLfEFKtwDTyx1glq1l1LUIsdhNYUDeKFdnXYSPtnuI764xc974VBQn3CNgm9yZy7WJujHRVyWXS8n9T8QPvTNVQmXjPR8P%2BX5UHfeRDWqH7ECAP8cL7y1tdSuBFi0R8VFvkE0Led3ppUSwnpvS0fTbIKYwZp4OyM0N9C3jNMEcBcGPrJzmzPwhuUg0dnn%2BCvssSCtbgnpyWXRmWod5C%2But1VXtT505NFf8J2WKun6GMBlx0vLBXhx6eoJr73M089y8BaxOgs7GKt%2Fyg842v69uoKlcV1xOFKHmHAk%2B8IJgwj5H%2BrkJ37xl8fKa6GzuM%2FdcfCug3AjDQd33qt0HPym7tQq2hBI0dP2uGbA1Q7%2BeJhza6Jl%2BWu34uHrgJuBumFz4%2Bp0i3PQ5tdjHD7merWSihOMzxfumt1qNtJD3Q1kZMAXeHuNZV%2BL4Np48uYucl%2FoaxOhxB8aHzXiUeTGvYjUQfTORsXrEc33ToKuQ8DldehpAuvp%2F4AIPM6nTT93ZWCnyApQ275cB%2Bjs%2B%2Fb7KPiGuNIaYfp9LUB9DtQEAsTxerdhFuse6U87WVscp25Dh4W8uBfZ7aN7ugm5jfEHVhoHlkFgkOoMr4QH%2F5diApHon45%2B0nENYoh4%2Fr5irfgNH%2FfOpmYwtYjSxAY6pgEbOcoIGeosHfSaz28Nyga28tYZKgGtO8E1X5u9qWouvYBta0xSZm6eWUpf0PFGYzytKlPAeKuVeS1EOVwXPm7gcRHaxLjHC8V2Ul0a3Sc2KRfGECOGXldwqLG%2FT32WkZHCTc%2Bf7dj%2Fi1%2F9YHDQl0xuoOovPn7m81LVEDvRTtd%2BwRj0ZWencMbEx9x3iT65QWqe2AieSUB2eIzIHlwmyHnMMcF1G4qr&X-Amz-Signature=dfb741d5c12c57f7368fb881cd4f47f87abbaacd551666bc4656f3e565f19ff3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X6WMCV5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIBucoREoIIOmSV7jCZt8fAfF9TEYRdCt2wRgvy3KI%2BspAiB3MmHiKig%2F8EgfJii5vWQmsQh18NWzscjZJNK15841GCqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm%2Bzv72AKzE%2BPLfEFKtwDTyx1glq1l1LUIsdhNYUDeKFdnXYSPtnuI764xc974VBQn3CNgm9yZy7WJujHRVyWXS8n9T8QPvTNVQmXjPR8P%2BX5UHfeRDWqH7ECAP8cL7y1tdSuBFi0R8VFvkE0Led3ppUSwnpvS0fTbIKYwZp4OyM0N9C3jNMEcBcGPrJzmzPwhuUg0dnn%2BCvssSCtbgnpyWXRmWod5C%2But1VXtT505NFf8J2WKun6GMBlx0vLBXhx6eoJr73M089y8BaxOgs7GKt%2Fyg842v69uoKlcV1xOFKHmHAk%2B8IJgwj5H%2BrkJ37xl8fKa6GzuM%2FdcfCug3AjDQd33qt0HPym7tQq2hBI0dP2uGbA1Q7%2BeJhza6Jl%2BWu34uHrgJuBumFz4%2Bp0i3PQ5tdjHD7merWSihOMzxfumt1qNtJD3Q1kZMAXeHuNZV%2BL4Np48uYucl%2FoaxOhxB8aHzXiUeTGvYjUQfTORsXrEc33ToKuQ8DldehpAuvp%2F4AIPM6nTT93ZWCnyApQ275cB%2Bjs%2B%2Fb7KPiGuNIaYfp9LUB9DtQEAsTxerdhFuse6U87WVscp25Dh4W8uBfZ7aN7ugm5jfEHVhoHlkFgkOoMr4QH%2F5diApHon45%2B0nENYoh4%2Fr5irfgNH%2FfOpmYwtYjSxAY6pgEbOcoIGeosHfSaz28Nyga28tYZKgGtO8E1X5u9qWouvYBta0xSZm6eWUpf0PFGYzytKlPAeKuVeS1EOVwXPm7gcRHaxLjHC8V2Ul0a3Sc2KRfGECOGXldwqLG%2FT32WkZHCTc%2Bf7dj%2Fi1%2F9YHDQl0xuoOovPn7m81LVEDvRTtd%2BwRj0ZWencMbEx9x3iT65QWqe2AieSUB2eIzIHlwmyHnMMcF1G4qr&X-Amz-Signature=f5761d41029ec5cf3039f2a6690477674dbb8382ec52672844e496a30ef7eb50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X6WMCV5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIBucoREoIIOmSV7jCZt8fAfF9TEYRdCt2wRgvy3KI%2BspAiB3MmHiKig%2F8EgfJii5vWQmsQh18NWzscjZJNK15841GCqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm%2Bzv72AKzE%2BPLfEFKtwDTyx1glq1l1LUIsdhNYUDeKFdnXYSPtnuI764xc974VBQn3CNgm9yZy7WJujHRVyWXS8n9T8QPvTNVQmXjPR8P%2BX5UHfeRDWqH7ECAP8cL7y1tdSuBFi0R8VFvkE0Led3ppUSwnpvS0fTbIKYwZp4OyM0N9C3jNMEcBcGPrJzmzPwhuUg0dnn%2BCvssSCtbgnpyWXRmWod5C%2But1VXtT505NFf8J2WKun6GMBlx0vLBXhx6eoJr73M089y8BaxOgs7GKt%2Fyg842v69uoKlcV1xOFKHmHAk%2B8IJgwj5H%2BrkJ37xl8fKa6GzuM%2FdcfCug3AjDQd33qt0HPym7tQq2hBI0dP2uGbA1Q7%2BeJhza6Jl%2BWu34uHrgJuBumFz4%2Bp0i3PQ5tdjHD7merWSihOMzxfumt1qNtJD3Q1kZMAXeHuNZV%2BL4Np48uYucl%2FoaxOhxB8aHzXiUeTGvYjUQfTORsXrEc33ToKuQ8DldehpAuvp%2F4AIPM6nTT93ZWCnyApQ275cB%2Bjs%2B%2Fb7KPiGuNIaYfp9LUB9DtQEAsTxerdhFuse6U87WVscp25Dh4W8uBfZ7aN7ugm5jfEHVhoHlkFgkOoMr4QH%2F5diApHon45%2B0nENYoh4%2Fr5irfgNH%2FfOpmYwtYjSxAY6pgEbOcoIGeosHfSaz28Nyga28tYZKgGtO8E1X5u9qWouvYBta0xSZm6eWUpf0PFGYzytKlPAeKuVeS1EOVwXPm7gcRHaxLjHC8V2Ul0a3Sc2KRfGECOGXldwqLG%2FT32WkZHCTc%2Bf7dj%2Fi1%2F9YHDQl0xuoOovPn7m81LVEDvRTtd%2BwRj0ZWencMbEx9x3iT65QWqe2AieSUB2eIzIHlwmyHnMMcF1G4qr&X-Amz-Signature=3918398be8c6aeecfb067f3e9e35bb3f41ce72a3afa45c96f5fb3381e209f254&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB6LYY5B%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCJt8i0R%2FaJeo%2BEJpwE%2Bii%2FrXpK4s083WcSyOKcDJsdWgIgCwM6DbQ5NEK3v57f4BUlgakm3nvBdyBAUh8IkC4heIQqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHYbJ1MNWbe7iVAW0SrcAwtFBntIK9EA8WZ4SItcnCrY09dvdgctiRSOz2%2FYx9b3Et1RrVjfexnRnRd1qZaSHcrp%2Fw2LeL%2F3d2M1Fhw9KT4zYlntbm9r%2BB0P3%2Bz8B1x5ctaCP25vy%2BUQrIvXfkP61SLVcBu5SKiztHIMqgBjQyvX9uS4vJKSiiHtzQOSKy6d%2BdZ%2FHsWakllJB%2FNel9BPrj%2FRTjI2ENipuINuHNDbeXI8pC3NUj%2B9AGsZRr8FxNDj%2BRSakgKMMhIlOS7%2FkI5Ij1W%2FwIGiBdMEG4a%2BHcZ9%2FixupaEtk5izeCZmmoAMLQ4wHUXzO6uSMdp%2FHyOxEaz0tKLf5D6XtPtGGa0YJ%2BYAjcIWehdXKyZrzH21X7rY3aKB7O16StGHWUBJDBuCL0yQ%2FtxK%2BK3ud9ZVtxD2PRMmkFdXUUVIl8orFjB%2FPjVNf3rh5AD5eyvzxu1puN5EhZJRPJJTdjcH0M5XRYuyBpP9KbIu2jqiJ9wgdJGlYmknia29lfaA4VRor7%2ForZFUP%2FJ8t%2BbUt84zBACWOK9y75qGjpeiYoSoeHlzKVWwZkWy8yJ%2FA9kaMad5t8Emgz8pOtumjQfFXUZz8a7oR2ch3N3AIORTs0YUKuPSy3s7S5QUov5ouzAwdH%2FswMIpsMRNMNWH0sQGOqUBnqAcdLuDT5CckVo7dMSl65Z5VlRyCTdPEf%2BLVIlwAPyu78bmuwqsqqK%2BGOdqZHoILazouZXBXG38LHHewFkDeDBxxm8TAyn3NBsVFfvo7YF4PXQ8%2FqgA4q4sDh6RmwFI9MsRAEgjlD3N%2Bpv0D6Dpr%2BiWLVedBxCOyZtcZChgrMewY2MQKRCU32Pc%2BDdSCbXihEQHEBx2bDV3AbmvMh10BFyysywQ&X-Amz-Signature=d2811996712260d6d97c8c07b1da8837b16ab9415ebdb1dbca8c25e2c8fe17dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X6WMCV5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIBucoREoIIOmSV7jCZt8fAfF9TEYRdCt2wRgvy3KI%2BspAiB3MmHiKig%2F8EgfJii5vWQmsQh18NWzscjZJNK15841GCqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm%2Bzv72AKzE%2BPLfEFKtwDTyx1glq1l1LUIsdhNYUDeKFdnXYSPtnuI764xc974VBQn3CNgm9yZy7WJujHRVyWXS8n9T8QPvTNVQmXjPR8P%2BX5UHfeRDWqH7ECAP8cL7y1tdSuBFi0R8VFvkE0Led3ppUSwnpvS0fTbIKYwZp4OyM0N9C3jNMEcBcGPrJzmzPwhuUg0dnn%2BCvssSCtbgnpyWXRmWod5C%2But1VXtT505NFf8J2WKun6GMBlx0vLBXhx6eoJr73M089y8BaxOgs7GKt%2Fyg842v69uoKlcV1xOFKHmHAk%2B8IJgwj5H%2BrkJ37xl8fKa6GzuM%2FdcfCug3AjDQd33qt0HPym7tQq2hBI0dP2uGbA1Q7%2BeJhza6Jl%2BWu34uHrgJuBumFz4%2Bp0i3PQ5tdjHD7merWSihOMzxfumt1qNtJD3Q1kZMAXeHuNZV%2BL4Np48uYucl%2FoaxOhxB8aHzXiUeTGvYjUQfTORsXrEc33ToKuQ8DldehpAuvp%2F4AIPM6nTT93ZWCnyApQ275cB%2Bjs%2B%2Fb7KPiGuNIaYfp9LUB9DtQEAsTxerdhFuse6U87WVscp25Dh4W8uBfZ7aN7ugm5jfEHVhoHlkFgkOoMr4QH%2F5diApHon45%2B0nENYoh4%2Fr5irfgNH%2FfOpmYwtYjSxAY6pgEbOcoIGeosHfSaz28Nyga28tYZKgGtO8E1X5u9qWouvYBta0xSZm6eWUpf0PFGYzytKlPAeKuVeS1EOVwXPm7gcRHaxLjHC8V2Ul0a3Sc2KRfGECOGXldwqLG%2FT32WkZHCTc%2Bf7dj%2Fi1%2F9YHDQl0xuoOovPn7m81LVEDvRTtd%2BwRj0ZWencMbEx9x3iT65QWqe2AieSUB2eIzIHlwmyHnMMcF1G4qr&X-Amz-Signature=626a6db7b2763c7396fd44d677745befea7b6371a17d690cfe669b6a2f1d743e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X6WMCV5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIBucoREoIIOmSV7jCZt8fAfF9TEYRdCt2wRgvy3KI%2BspAiB3MmHiKig%2F8EgfJii5vWQmsQh18NWzscjZJNK15841GCqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm%2Bzv72AKzE%2BPLfEFKtwDTyx1glq1l1LUIsdhNYUDeKFdnXYSPtnuI764xc974VBQn3CNgm9yZy7WJujHRVyWXS8n9T8QPvTNVQmXjPR8P%2BX5UHfeRDWqH7ECAP8cL7y1tdSuBFi0R8VFvkE0Led3ppUSwnpvS0fTbIKYwZp4OyM0N9C3jNMEcBcGPrJzmzPwhuUg0dnn%2BCvssSCtbgnpyWXRmWod5C%2But1VXtT505NFf8J2WKun6GMBlx0vLBXhx6eoJr73M089y8BaxOgs7GKt%2Fyg842v69uoKlcV1xOFKHmHAk%2B8IJgwj5H%2BrkJ37xl8fKa6GzuM%2FdcfCug3AjDQd33qt0HPym7tQq2hBI0dP2uGbA1Q7%2BeJhza6Jl%2BWu34uHrgJuBumFz4%2Bp0i3PQ5tdjHD7merWSihOMzxfumt1qNtJD3Q1kZMAXeHuNZV%2BL4Np48uYucl%2FoaxOhxB8aHzXiUeTGvYjUQfTORsXrEc33ToKuQ8DldehpAuvp%2F4AIPM6nTT93ZWCnyApQ275cB%2Bjs%2B%2Fb7KPiGuNIaYfp9LUB9DtQEAsTxerdhFuse6U87WVscp25Dh4W8uBfZ7aN7ugm5jfEHVhoHlkFgkOoMr4QH%2F5diApHon45%2B0nENYoh4%2Fr5irfgNH%2FfOpmYwtYjSxAY6pgEbOcoIGeosHfSaz28Nyga28tYZKgGtO8E1X5u9qWouvYBta0xSZm6eWUpf0PFGYzytKlPAeKuVeS1EOVwXPm7gcRHaxLjHC8V2Ul0a3Sc2KRfGECOGXldwqLG%2FT32WkZHCTc%2Bf7dj%2Fi1%2F9YHDQl0xuoOovPn7m81LVEDvRTtd%2BwRj0ZWencMbEx9x3iT65QWqe2AieSUB2eIzIHlwmyHnMMcF1G4qr&X-Amz-Signature=18b5ac1ff220c124e6e2ebbb08c458cbe9308145cd4291a978d9288867b8ed89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X6WMCV5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIBucoREoIIOmSV7jCZt8fAfF9TEYRdCt2wRgvy3KI%2BspAiB3MmHiKig%2F8EgfJii5vWQmsQh18NWzscjZJNK15841GCqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm%2Bzv72AKzE%2BPLfEFKtwDTyx1glq1l1LUIsdhNYUDeKFdnXYSPtnuI764xc974VBQn3CNgm9yZy7WJujHRVyWXS8n9T8QPvTNVQmXjPR8P%2BX5UHfeRDWqH7ECAP8cL7y1tdSuBFi0R8VFvkE0Led3ppUSwnpvS0fTbIKYwZp4OyM0N9C3jNMEcBcGPrJzmzPwhuUg0dnn%2BCvssSCtbgnpyWXRmWod5C%2But1VXtT505NFf8J2WKun6GMBlx0vLBXhx6eoJr73M089y8BaxOgs7GKt%2Fyg842v69uoKlcV1xOFKHmHAk%2B8IJgwj5H%2BrkJ37xl8fKa6GzuM%2FdcfCug3AjDQd33qt0HPym7tQq2hBI0dP2uGbA1Q7%2BeJhza6Jl%2BWu34uHrgJuBumFz4%2Bp0i3PQ5tdjHD7merWSihOMzxfumt1qNtJD3Q1kZMAXeHuNZV%2BL4Np48uYucl%2FoaxOhxB8aHzXiUeTGvYjUQfTORsXrEc33ToKuQ8DldehpAuvp%2F4AIPM6nTT93ZWCnyApQ275cB%2Bjs%2B%2Fb7KPiGuNIaYfp9LUB9DtQEAsTxerdhFuse6U87WVscp25Dh4W8uBfZ7aN7ugm5jfEHVhoHlkFgkOoMr4QH%2F5diApHon45%2B0nENYoh4%2Fr5irfgNH%2FfOpmYwtYjSxAY6pgEbOcoIGeosHfSaz28Nyga28tYZKgGtO8E1X5u9qWouvYBta0xSZm6eWUpf0PFGYzytKlPAeKuVeS1EOVwXPm7gcRHaxLjHC8V2Ul0a3Sc2KRfGECOGXldwqLG%2FT32WkZHCTc%2Bf7dj%2Fi1%2F9YHDQl0xuoOovPn7m81LVEDvRTtd%2BwRj0ZWencMbEx9x3iT65QWqe2AieSUB2eIzIHlwmyHnMMcF1G4qr&X-Amz-Signature=260cb50af04736ba4f3460aaa7e89ec3435d17eedad30054aa11f30b7d088af8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X6WMCV5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIBucoREoIIOmSV7jCZt8fAfF9TEYRdCt2wRgvy3KI%2BspAiB3MmHiKig%2F8EgfJii5vWQmsQh18NWzscjZJNK15841GCqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm%2Bzv72AKzE%2BPLfEFKtwDTyx1glq1l1LUIsdhNYUDeKFdnXYSPtnuI764xc974VBQn3CNgm9yZy7WJujHRVyWXS8n9T8QPvTNVQmXjPR8P%2BX5UHfeRDWqH7ECAP8cL7y1tdSuBFi0R8VFvkE0Led3ppUSwnpvS0fTbIKYwZp4OyM0N9C3jNMEcBcGPrJzmzPwhuUg0dnn%2BCvssSCtbgnpyWXRmWod5C%2But1VXtT505NFf8J2WKun6GMBlx0vLBXhx6eoJr73M089y8BaxOgs7GKt%2Fyg842v69uoKlcV1xOFKHmHAk%2B8IJgwj5H%2BrkJ37xl8fKa6GzuM%2FdcfCug3AjDQd33qt0HPym7tQq2hBI0dP2uGbA1Q7%2BeJhza6Jl%2BWu34uHrgJuBumFz4%2Bp0i3PQ5tdjHD7merWSihOMzxfumt1qNtJD3Q1kZMAXeHuNZV%2BL4Np48uYucl%2FoaxOhxB8aHzXiUeTGvYjUQfTORsXrEc33ToKuQ8DldehpAuvp%2F4AIPM6nTT93ZWCnyApQ275cB%2Bjs%2B%2Fb7KPiGuNIaYfp9LUB9DtQEAsTxerdhFuse6U87WVscp25Dh4W8uBfZ7aN7ugm5jfEHVhoHlkFgkOoMr4QH%2F5diApHon45%2B0nENYoh4%2Fr5irfgNH%2FfOpmYwtYjSxAY6pgEbOcoIGeosHfSaz28Nyga28tYZKgGtO8E1X5u9qWouvYBta0xSZm6eWUpf0PFGYzytKlPAeKuVeS1EOVwXPm7gcRHaxLjHC8V2Ul0a3Sc2KRfGECOGXldwqLG%2FT32WkZHCTc%2Bf7dj%2Fi1%2F9YHDQl0xuoOovPn7m81LVEDvRTtd%2BwRj0ZWencMbEx9x3iT65QWqe2AieSUB2eIzIHlwmyHnMMcF1G4qr&X-Amz-Signature=e8e32ffc31e7198f4a9bfbb218d8b9092b1ba5553a55a127593761e5a7f01ffb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X6WMCV5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIBucoREoIIOmSV7jCZt8fAfF9TEYRdCt2wRgvy3KI%2BspAiB3MmHiKig%2F8EgfJii5vWQmsQh18NWzscjZJNK15841GCqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm%2Bzv72AKzE%2BPLfEFKtwDTyx1glq1l1LUIsdhNYUDeKFdnXYSPtnuI764xc974VBQn3CNgm9yZy7WJujHRVyWXS8n9T8QPvTNVQmXjPR8P%2BX5UHfeRDWqH7ECAP8cL7y1tdSuBFi0R8VFvkE0Led3ppUSwnpvS0fTbIKYwZp4OyM0N9C3jNMEcBcGPrJzmzPwhuUg0dnn%2BCvssSCtbgnpyWXRmWod5C%2But1VXtT505NFf8J2WKun6GMBlx0vLBXhx6eoJr73M089y8BaxOgs7GKt%2Fyg842v69uoKlcV1xOFKHmHAk%2B8IJgwj5H%2BrkJ37xl8fKa6GzuM%2FdcfCug3AjDQd33qt0HPym7tQq2hBI0dP2uGbA1Q7%2BeJhza6Jl%2BWu34uHrgJuBumFz4%2Bp0i3PQ5tdjHD7merWSihOMzxfumt1qNtJD3Q1kZMAXeHuNZV%2BL4Np48uYucl%2FoaxOhxB8aHzXiUeTGvYjUQfTORsXrEc33ToKuQ8DldehpAuvp%2F4AIPM6nTT93ZWCnyApQ275cB%2Bjs%2B%2Fb7KPiGuNIaYfp9LUB9DtQEAsTxerdhFuse6U87WVscp25Dh4W8uBfZ7aN7ugm5jfEHVhoHlkFgkOoMr4QH%2F5diApHon45%2B0nENYoh4%2Fr5irfgNH%2FfOpmYwtYjSxAY6pgEbOcoIGeosHfSaz28Nyga28tYZKgGtO8E1X5u9qWouvYBta0xSZm6eWUpf0PFGYzytKlPAeKuVeS1EOVwXPm7gcRHaxLjHC8V2Ul0a3Sc2KRfGECOGXldwqLG%2FT32WkZHCTc%2Bf7dj%2Fi1%2F9YHDQl0xuoOovPn7m81LVEDvRTtd%2BwRj0ZWencMbEx9x3iT65QWqe2AieSUB2eIzIHlwmyHnMMcF1G4qr&X-Amz-Signature=1d5a3badd0bd6a96b073b7236029810e9bb422f28dd1cb33fb10c6e656b97095&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X6WMCV5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIBucoREoIIOmSV7jCZt8fAfF9TEYRdCt2wRgvy3KI%2BspAiB3MmHiKig%2F8EgfJii5vWQmsQh18NWzscjZJNK15841GCqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm%2Bzv72AKzE%2BPLfEFKtwDTyx1glq1l1LUIsdhNYUDeKFdnXYSPtnuI764xc974VBQn3CNgm9yZy7WJujHRVyWXS8n9T8QPvTNVQmXjPR8P%2BX5UHfeRDWqH7ECAP8cL7y1tdSuBFi0R8VFvkE0Led3ppUSwnpvS0fTbIKYwZp4OyM0N9C3jNMEcBcGPrJzmzPwhuUg0dnn%2BCvssSCtbgnpyWXRmWod5C%2But1VXtT505NFf8J2WKun6GMBlx0vLBXhx6eoJr73M089y8BaxOgs7GKt%2Fyg842v69uoKlcV1xOFKHmHAk%2B8IJgwj5H%2BrkJ37xl8fKa6GzuM%2FdcfCug3AjDQd33qt0HPym7tQq2hBI0dP2uGbA1Q7%2BeJhza6Jl%2BWu34uHrgJuBumFz4%2Bp0i3PQ5tdjHD7merWSihOMzxfumt1qNtJD3Q1kZMAXeHuNZV%2BL4Np48uYucl%2FoaxOhxB8aHzXiUeTGvYjUQfTORsXrEc33ToKuQ8DldehpAuvp%2F4AIPM6nTT93ZWCnyApQ275cB%2Bjs%2B%2Fb7KPiGuNIaYfp9LUB9DtQEAsTxerdhFuse6U87WVscp25Dh4W8uBfZ7aN7ugm5jfEHVhoHlkFgkOoMr4QH%2F5diApHon45%2B0nENYoh4%2Fr5irfgNH%2FfOpmYwtYjSxAY6pgEbOcoIGeosHfSaz28Nyga28tYZKgGtO8E1X5u9qWouvYBta0xSZm6eWUpf0PFGYzytKlPAeKuVeS1EOVwXPm7gcRHaxLjHC8V2Ul0a3Sc2KRfGECOGXldwqLG%2FT32WkZHCTc%2Bf7dj%2Fi1%2F9YHDQl0xuoOovPn7m81LVEDvRTtd%2BwRj0ZWencMbEx9x3iT65QWqe2AieSUB2eIzIHlwmyHnMMcF1G4qr&X-Amz-Signature=73c3651727d33d795b06c69a83fa7392515cce6f0eb680c2f2e5f4fb378cebc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
