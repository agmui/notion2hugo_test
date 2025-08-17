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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUS4TPHI%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQD4b3QQdNo9VZNTg4BWDx32HXHuJ86FXzA7oHF529Kl0QIgFg%2BOt%2BvIKAlxjOKqbidiVQLpVsXU8wBbO4t0n3HopPIqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKWFqfxhY2pbVNZo7yrcAxGxJDCr%2BB7TpNRFr5eAOoGFUhSymaxVoaW5mpEozhoJwEZF2fDKSasfsPQ7SmDdFl%2BaLCGJjDjYY%2BZ7BZhnh%2BblBcgLQxP%2BoxV%2BOV32BDSWRNWgwbOWLefwK3YGgdiRq3MDcxR15N3qtMYaZMWS%2Ft3ClCQ%2Bgq5AOyB6pWnGC%2B%2Fe4FJOTckuMA4UGEGZdOikV55PeJ%2FmaRpoFMO9Dz6ELsM%2FO45jinH%2FO25vQKTXzqVBVxjmO6th%2FVa3SevMUWiUmOMtQ5F%2FHuaNzDu5roJl7EyA%2BiPXzG2%2BR7mkm5XZuIYj0To6LwD9WkCd1LAUpDWSIrUwDPjYezhq501u78ZT5FOv7VK4hIGzgQLR9iAfPawk1vsSGkfGfYe7ABj69doKbXGdUuJKlW9jVzpdqu30Pbe%2BbeaHJwj6goTuSI4WT0t4fWqfCxcCCQnX72SGE2URS%2F7ru%2FAr4v0Vj4PDIcZaT9Rzq189aZuSSzi1TVO4KHKkkSLQDjb7LGlvyOTwD7%2F71PNIALEp1yI4TkyEIIfEZxsm%2BoWgvQa62ldr1xnBTmAvJR%2BOTsMlgf%2BBJHGgGrDQScuHYQGlUakIDIdYLsoHubfaBjILdb%2FRV1p8q0liPESWlySJ8fogEohssZWKMOHNhMUGOqUBFIVsV43sF8kuSssxtxg4K3rkOOh5awsNbFN1EqN7APW6wraQ7dEvPg4sH9iVyA%2FXjFnq6tVPUyLbFz47TJQEhf5MgLcdk3bc1gyMdLRyKIWM0ZPWWfLdZ4p92V%2Be1zLEL%2Bl9%2FTiDxOl2ia6yz5bky4YEbzp6zMq70E0TCBAKd1UMeqDrS6e2aL3%2FOA%2FBw3Flt83Uyqkq6vZh0tJlxFWSTGh5CP%2Bz&X-Amz-Signature=af97bf5437c09d128ff61a16e3764ae84214d0ceab283c0488ef588f8816f389&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUS4TPHI%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQD4b3QQdNo9VZNTg4BWDx32HXHuJ86FXzA7oHF529Kl0QIgFg%2BOt%2BvIKAlxjOKqbidiVQLpVsXU8wBbO4t0n3HopPIqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKWFqfxhY2pbVNZo7yrcAxGxJDCr%2BB7TpNRFr5eAOoGFUhSymaxVoaW5mpEozhoJwEZF2fDKSasfsPQ7SmDdFl%2BaLCGJjDjYY%2BZ7BZhnh%2BblBcgLQxP%2BoxV%2BOV32BDSWRNWgwbOWLefwK3YGgdiRq3MDcxR15N3qtMYaZMWS%2Ft3ClCQ%2Bgq5AOyB6pWnGC%2B%2Fe4FJOTckuMA4UGEGZdOikV55PeJ%2FmaRpoFMO9Dz6ELsM%2FO45jinH%2FO25vQKTXzqVBVxjmO6th%2FVa3SevMUWiUmOMtQ5F%2FHuaNzDu5roJl7EyA%2BiPXzG2%2BR7mkm5XZuIYj0To6LwD9WkCd1LAUpDWSIrUwDPjYezhq501u78ZT5FOv7VK4hIGzgQLR9iAfPawk1vsSGkfGfYe7ABj69doKbXGdUuJKlW9jVzpdqu30Pbe%2BbeaHJwj6goTuSI4WT0t4fWqfCxcCCQnX72SGE2URS%2F7ru%2FAr4v0Vj4PDIcZaT9Rzq189aZuSSzi1TVO4KHKkkSLQDjb7LGlvyOTwD7%2F71PNIALEp1yI4TkyEIIfEZxsm%2BoWgvQa62ldr1xnBTmAvJR%2BOTsMlgf%2BBJHGgGrDQScuHYQGlUakIDIdYLsoHubfaBjILdb%2FRV1p8q0liPESWlySJ8fogEohssZWKMOHNhMUGOqUBFIVsV43sF8kuSssxtxg4K3rkOOh5awsNbFN1EqN7APW6wraQ7dEvPg4sH9iVyA%2FXjFnq6tVPUyLbFz47TJQEhf5MgLcdk3bc1gyMdLRyKIWM0ZPWWfLdZ4p92V%2Be1zLEL%2Bl9%2FTiDxOl2ia6yz5bky4YEbzp6zMq70E0TCBAKd1UMeqDrS6e2aL3%2FOA%2FBw3Flt83Uyqkq6vZh0tJlxFWSTGh5CP%2Bz&X-Amz-Signature=77cd8bd5271e34c4deb38de51b7b9ee60624c57d05b3ed91128df8254235fb60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUS4TPHI%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQD4b3QQdNo9VZNTg4BWDx32HXHuJ86FXzA7oHF529Kl0QIgFg%2BOt%2BvIKAlxjOKqbidiVQLpVsXU8wBbO4t0n3HopPIqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKWFqfxhY2pbVNZo7yrcAxGxJDCr%2BB7TpNRFr5eAOoGFUhSymaxVoaW5mpEozhoJwEZF2fDKSasfsPQ7SmDdFl%2BaLCGJjDjYY%2BZ7BZhnh%2BblBcgLQxP%2BoxV%2BOV32BDSWRNWgwbOWLefwK3YGgdiRq3MDcxR15N3qtMYaZMWS%2Ft3ClCQ%2Bgq5AOyB6pWnGC%2B%2Fe4FJOTckuMA4UGEGZdOikV55PeJ%2FmaRpoFMO9Dz6ELsM%2FO45jinH%2FO25vQKTXzqVBVxjmO6th%2FVa3SevMUWiUmOMtQ5F%2FHuaNzDu5roJl7EyA%2BiPXzG2%2BR7mkm5XZuIYj0To6LwD9WkCd1LAUpDWSIrUwDPjYezhq501u78ZT5FOv7VK4hIGzgQLR9iAfPawk1vsSGkfGfYe7ABj69doKbXGdUuJKlW9jVzpdqu30Pbe%2BbeaHJwj6goTuSI4WT0t4fWqfCxcCCQnX72SGE2URS%2F7ru%2FAr4v0Vj4PDIcZaT9Rzq189aZuSSzi1TVO4KHKkkSLQDjb7LGlvyOTwD7%2F71PNIALEp1yI4TkyEIIfEZxsm%2BoWgvQa62ldr1xnBTmAvJR%2BOTsMlgf%2BBJHGgGrDQScuHYQGlUakIDIdYLsoHubfaBjILdb%2FRV1p8q0liPESWlySJ8fogEohssZWKMOHNhMUGOqUBFIVsV43sF8kuSssxtxg4K3rkOOh5awsNbFN1EqN7APW6wraQ7dEvPg4sH9iVyA%2FXjFnq6tVPUyLbFz47TJQEhf5MgLcdk3bc1gyMdLRyKIWM0ZPWWfLdZ4p92V%2Be1zLEL%2Bl9%2FTiDxOl2ia6yz5bky4YEbzp6zMq70E0TCBAKd1UMeqDrS6e2aL3%2FOA%2FBw3Flt83Uyqkq6vZh0tJlxFWSTGh5CP%2Bz&X-Amz-Signature=3a7beced90bbaf49ed2315ddfc413e2aae3a57bbc18e17c12ffd9b5166026029&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUS4TPHI%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQD4b3QQdNo9VZNTg4BWDx32HXHuJ86FXzA7oHF529Kl0QIgFg%2BOt%2BvIKAlxjOKqbidiVQLpVsXU8wBbO4t0n3HopPIqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKWFqfxhY2pbVNZo7yrcAxGxJDCr%2BB7TpNRFr5eAOoGFUhSymaxVoaW5mpEozhoJwEZF2fDKSasfsPQ7SmDdFl%2BaLCGJjDjYY%2BZ7BZhnh%2BblBcgLQxP%2BoxV%2BOV32BDSWRNWgwbOWLefwK3YGgdiRq3MDcxR15N3qtMYaZMWS%2Ft3ClCQ%2Bgq5AOyB6pWnGC%2B%2Fe4FJOTckuMA4UGEGZdOikV55PeJ%2FmaRpoFMO9Dz6ELsM%2FO45jinH%2FO25vQKTXzqVBVxjmO6th%2FVa3SevMUWiUmOMtQ5F%2FHuaNzDu5roJl7EyA%2BiPXzG2%2BR7mkm5XZuIYj0To6LwD9WkCd1LAUpDWSIrUwDPjYezhq501u78ZT5FOv7VK4hIGzgQLR9iAfPawk1vsSGkfGfYe7ABj69doKbXGdUuJKlW9jVzpdqu30Pbe%2BbeaHJwj6goTuSI4WT0t4fWqfCxcCCQnX72SGE2URS%2F7ru%2FAr4v0Vj4PDIcZaT9Rzq189aZuSSzi1TVO4KHKkkSLQDjb7LGlvyOTwD7%2F71PNIALEp1yI4TkyEIIfEZxsm%2BoWgvQa62ldr1xnBTmAvJR%2BOTsMlgf%2BBJHGgGrDQScuHYQGlUakIDIdYLsoHubfaBjILdb%2FRV1p8q0liPESWlySJ8fogEohssZWKMOHNhMUGOqUBFIVsV43sF8kuSssxtxg4K3rkOOh5awsNbFN1EqN7APW6wraQ7dEvPg4sH9iVyA%2FXjFnq6tVPUyLbFz47TJQEhf5MgLcdk3bc1gyMdLRyKIWM0ZPWWfLdZ4p92V%2Be1zLEL%2Bl9%2FTiDxOl2ia6yz5bky4YEbzp6zMq70E0TCBAKd1UMeqDrS6e2aL3%2FOA%2FBw3Flt83Uyqkq6vZh0tJlxFWSTGh5CP%2Bz&X-Amz-Signature=c306c4da5811dce1ba08e260912a6d6a5cbc089b40206dbe533086db665c824b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZO7JGIM%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIAgG%2BAHSHSnsxIExeVHE5UE9hONamzyyNBeupFCuqYnQAiEAk7LG7wmgoyK2axcrepRIPpSSVhF9YxrwizuWBwE2F%2BkqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKENoOBVUsM5NJqgcyrcA%2FUFffQ6CQqJMpwceg%2B34IjrrRhLP6AGiib5rD86%2FSc9LcP04E6KrreOIqBnJDmGUw11I6WIDspm5YoDml4yWgKTi0nZeZEpUfJTzeT6CzP%2Ftxx%2BYWXFz%2FblZ0kmN2lgMWiseog4t7ouDQfOghKiF1tDhIqU97zXgIQxzYz5IUC4U8xWbUQPoObr6%2BfvVQzCV%2FW1yKCv%2FWTBq8Ckk93rx%2BjMOFtFau%2B3GwEJIg50goNO85%2BN6fRN0m9qiRuIJkA28L7oGygKulBAD2pwNRdZ%2Fy8JFj8su%2Flwjyv0OQ%2B5sbO6s2Y9qWT%2FwNPCAK5iEigar7TlzReyHIrKZLww6hFhausycBC5lBNHPmjKtxBtAf%2FSfcxDYjLpW0pv52Ihy7Hzhm8UAi4UStNUpSQ%2BeqnRgTtd4I7YQVV96Kf4DxCAvow6aVu1d%2FAbr5cedbEWPC8hC7bYFsCy316uGj2RlpjBTaFBfYWgPxGI%2B%2FkwZOAGqjanPr4DylLN6TGkKkua%2BoDPJfdKDfdTk97bSF9tPSI%2FnDB4m%2BuizHf4H9F7ySgT1e1IIUxq1adRooBavQmE2uQMrzUWeOwg5RHBcSOLAk1SxQyZjyV2j0227hwXw9h%2B2l%2BRkYY4xsmUZvTdO09bMMLNhMUGOqUB6MU3hVsu0vxPV98ShsEpHkg2mW%2BT%2FPqLP868RrxEp4vM%2BKQPNBuGS%2FmpUKFIpTxVHx4WDigA3cY%2BpyHkDj3XnWEJMt34XXv68xWpOSIoOUUiAaNeNb7cOmKHOoe62%2FQCBf%2BczPAAqNHVuGp2tlxrOpTtfxnQdWoZ331eO5wUx9N6g3bq9C%2FFSDxIoO3W1eDgm2E7zbdoG3MrNBWKjTBg6VwV%2BYoh&X-Amz-Signature=d8d2500f5362011ed076de49fab8c5cb085bdc38fe10d826b6e9b5157820e622&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUS4TPHI%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQD4b3QQdNo9VZNTg4BWDx32HXHuJ86FXzA7oHF529Kl0QIgFg%2BOt%2BvIKAlxjOKqbidiVQLpVsXU8wBbO4t0n3HopPIqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKWFqfxhY2pbVNZo7yrcAxGxJDCr%2BB7TpNRFr5eAOoGFUhSymaxVoaW5mpEozhoJwEZF2fDKSasfsPQ7SmDdFl%2BaLCGJjDjYY%2BZ7BZhnh%2BblBcgLQxP%2BoxV%2BOV32BDSWRNWgwbOWLefwK3YGgdiRq3MDcxR15N3qtMYaZMWS%2Ft3ClCQ%2Bgq5AOyB6pWnGC%2B%2Fe4FJOTckuMA4UGEGZdOikV55PeJ%2FmaRpoFMO9Dz6ELsM%2FO45jinH%2FO25vQKTXzqVBVxjmO6th%2FVa3SevMUWiUmOMtQ5F%2FHuaNzDu5roJl7EyA%2BiPXzG2%2BR7mkm5XZuIYj0To6LwD9WkCd1LAUpDWSIrUwDPjYezhq501u78ZT5FOv7VK4hIGzgQLR9iAfPawk1vsSGkfGfYe7ABj69doKbXGdUuJKlW9jVzpdqu30Pbe%2BbeaHJwj6goTuSI4WT0t4fWqfCxcCCQnX72SGE2URS%2F7ru%2FAr4v0Vj4PDIcZaT9Rzq189aZuSSzi1TVO4KHKkkSLQDjb7LGlvyOTwD7%2F71PNIALEp1yI4TkyEIIfEZxsm%2BoWgvQa62ldr1xnBTmAvJR%2BOTsMlgf%2BBJHGgGrDQScuHYQGlUakIDIdYLsoHubfaBjILdb%2FRV1p8q0liPESWlySJ8fogEohssZWKMOHNhMUGOqUBFIVsV43sF8kuSssxtxg4K3rkOOh5awsNbFN1EqN7APW6wraQ7dEvPg4sH9iVyA%2FXjFnq6tVPUyLbFz47TJQEhf5MgLcdk3bc1gyMdLRyKIWM0ZPWWfLdZ4p92V%2Be1zLEL%2Bl9%2FTiDxOl2ia6yz5bky4YEbzp6zMq70E0TCBAKd1UMeqDrS6e2aL3%2FOA%2FBw3Flt83Uyqkq6vZh0tJlxFWSTGh5CP%2Bz&X-Amz-Signature=95ff41601c4f09312b7a2cb3801bafcf345f1fda7c2d82b2e37c05f676209995&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUS4TPHI%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQD4b3QQdNo9VZNTg4BWDx32HXHuJ86FXzA7oHF529Kl0QIgFg%2BOt%2BvIKAlxjOKqbidiVQLpVsXU8wBbO4t0n3HopPIqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKWFqfxhY2pbVNZo7yrcAxGxJDCr%2BB7TpNRFr5eAOoGFUhSymaxVoaW5mpEozhoJwEZF2fDKSasfsPQ7SmDdFl%2BaLCGJjDjYY%2BZ7BZhnh%2BblBcgLQxP%2BoxV%2BOV32BDSWRNWgwbOWLefwK3YGgdiRq3MDcxR15N3qtMYaZMWS%2Ft3ClCQ%2Bgq5AOyB6pWnGC%2B%2Fe4FJOTckuMA4UGEGZdOikV55PeJ%2FmaRpoFMO9Dz6ELsM%2FO45jinH%2FO25vQKTXzqVBVxjmO6th%2FVa3SevMUWiUmOMtQ5F%2FHuaNzDu5roJl7EyA%2BiPXzG2%2BR7mkm5XZuIYj0To6LwD9WkCd1LAUpDWSIrUwDPjYezhq501u78ZT5FOv7VK4hIGzgQLR9iAfPawk1vsSGkfGfYe7ABj69doKbXGdUuJKlW9jVzpdqu30Pbe%2BbeaHJwj6goTuSI4WT0t4fWqfCxcCCQnX72SGE2URS%2F7ru%2FAr4v0Vj4PDIcZaT9Rzq189aZuSSzi1TVO4KHKkkSLQDjb7LGlvyOTwD7%2F71PNIALEp1yI4TkyEIIfEZxsm%2BoWgvQa62ldr1xnBTmAvJR%2BOTsMlgf%2BBJHGgGrDQScuHYQGlUakIDIdYLsoHubfaBjILdb%2FRV1p8q0liPESWlySJ8fogEohssZWKMOHNhMUGOqUBFIVsV43sF8kuSssxtxg4K3rkOOh5awsNbFN1EqN7APW6wraQ7dEvPg4sH9iVyA%2FXjFnq6tVPUyLbFz47TJQEhf5MgLcdk3bc1gyMdLRyKIWM0ZPWWfLdZ4p92V%2Be1zLEL%2Bl9%2FTiDxOl2ia6yz5bky4YEbzp6zMq70E0TCBAKd1UMeqDrS6e2aL3%2FOA%2FBw3Flt83Uyqkq6vZh0tJlxFWSTGh5CP%2Bz&X-Amz-Signature=c42af4d94e1ab540261aac5f308a750620ce059de32f800d755202845e4d943e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUS4TPHI%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQD4b3QQdNo9VZNTg4BWDx32HXHuJ86FXzA7oHF529Kl0QIgFg%2BOt%2BvIKAlxjOKqbidiVQLpVsXU8wBbO4t0n3HopPIqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKWFqfxhY2pbVNZo7yrcAxGxJDCr%2BB7TpNRFr5eAOoGFUhSymaxVoaW5mpEozhoJwEZF2fDKSasfsPQ7SmDdFl%2BaLCGJjDjYY%2BZ7BZhnh%2BblBcgLQxP%2BoxV%2BOV32BDSWRNWgwbOWLefwK3YGgdiRq3MDcxR15N3qtMYaZMWS%2Ft3ClCQ%2Bgq5AOyB6pWnGC%2B%2Fe4FJOTckuMA4UGEGZdOikV55PeJ%2FmaRpoFMO9Dz6ELsM%2FO45jinH%2FO25vQKTXzqVBVxjmO6th%2FVa3SevMUWiUmOMtQ5F%2FHuaNzDu5roJl7EyA%2BiPXzG2%2BR7mkm5XZuIYj0To6LwD9WkCd1LAUpDWSIrUwDPjYezhq501u78ZT5FOv7VK4hIGzgQLR9iAfPawk1vsSGkfGfYe7ABj69doKbXGdUuJKlW9jVzpdqu30Pbe%2BbeaHJwj6goTuSI4WT0t4fWqfCxcCCQnX72SGE2URS%2F7ru%2FAr4v0Vj4PDIcZaT9Rzq189aZuSSzi1TVO4KHKkkSLQDjb7LGlvyOTwD7%2F71PNIALEp1yI4TkyEIIfEZxsm%2BoWgvQa62ldr1xnBTmAvJR%2BOTsMlgf%2BBJHGgGrDQScuHYQGlUakIDIdYLsoHubfaBjILdb%2FRV1p8q0liPESWlySJ8fogEohssZWKMOHNhMUGOqUBFIVsV43sF8kuSssxtxg4K3rkOOh5awsNbFN1EqN7APW6wraQ7dEvPg4sH9iVyA%2FXjFnq6tVPUyLbFz47TJQEhf5MgLcdk3bc1gyMdLRyKIWM0ZPWWfLdZ4p92V%2Be1zLEL%2Bl9%2FTiDxOl2ia6yz5bky4YEbzp6zMq70E0TCBAKd1UMeqDrS6e2aL3%2FOA%2FBw3Flt83Uyqkq6vZh0tJlxFWSTGh5CP%2Bz&X-Amz-Signature=0475fa5cc24f8bccb554718f54536c395a6b8c4c90b341dc4462d2819c8693fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUS4TPHI%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQD4b3QQdNo9VZNTg4BWDx32HXHuJ86FXzA7oHF529Kl0QIgFg%2BOt%2BvIKAlxjOKqbidiVQLpVsXU8wBbO4t0n3HopPIqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKWFqfxhY2pbVNZo7yrcAxGxJDCr%2BB7TpNRFr5eAOoGFUhSymaxVoaW5mpEozhoJwEZF2fDKSasfsPQ7SmDdFl%2BaLCGJjDjYY%2BZ7BZhnh%2BblBcgLQxP%2BoxV%2BOV32BDSWRNWgwbOWLefwK3YGgdiRq3MDcxR15N3qtMYaZMWS%2Ft3ClCQ%2Bgq5AOyB6pWnGC%2B%2Fe4FJOTckuMA4UGEGZdOikV55PeJ%2FmaRpoFMO9Dz6ELsM%2FO45jinH%2FO25vQKTXzqVBVxjmO6th%2FVa3SevMUWiUmOMtQ5F%2FHuaNzDu5roJl7EyA%2BiPXzG2%2BR7mkm5XZuIYj0To6LwD9WkCd1LAUpDWSIrUwDPjYezhq501u78ZT5FOv7VK4hIGzgQLR9iAfPawk1vsSGkfGfYe7ABj69doKbXGdUuJKlW9jVzpdqu30Pbe%2BbeaHJwj6goTuSI4WT0t4fWqfCxcCCQnX72SGE2URS%2F7ru%2FAr4v0Vj4PDIcZaT9Rzq189aZuSSzi1TVO4KHKkkSLQDjb7LGlvyOTwD7%2F71PNIALEp1yI4TkyEIIfEZxsm%2BoWgvQa62ldr1xnBTmAvJR%2BOTsMlgf%2BBJHGgGrDQScuHYQGlUakIDIdYLsoHubfaBjILdb%2FRV1p8q0liPESWlySJ8fogEohssZWKMOHNhMUGOqUBFIVsV43sF8kuSssxtxg4K3rkOOh5awsNbFN1EqN7APW6wraQ7dEvPg4sH9iVyA%2FXjFnq6tVPUyLbFz47TJQEhf5MgLcdk3bc1gyMdLRyKIWM0ZPWWfLdZ4p92V%2Be1zLEL%2Bl9%2FTiDxOl2ia6yz5bky4YEbzp6zMq70E0TCBAKd1UMeqDrS6e2aL3%2FOA%2FBw3Flt83Uyqkq6vZh0tJlxFWSTGh5CP%2Bz&X-Amz-Signature=609097de539418392e0a11191062feb31f412796a34c7920684dbe83635f3a02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUS4TPHI%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQD4b3QQdNo9VZNTg4BWDx32HXHuJ86FXzA7oHF529Kl0QIgFg%2BOt%2BvIKAlxjOKqbidiVQLpVsXU8wBbO4t0n3HopPIqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKWFqfxhY2pbVNZo7yrcAxGxJDCr%2BB7TpNRFr5eAOoGFUhSymaxVoaW5mpEozhoJwEZF2fDKSasfsPQ7SmDdFl%2BaLCGJjDjYY%2BZ7BZhnh%2BblBcgLQxP%2BoxV%2BOV32BDSWRNWgwbOWLefwK3YGgdiRq3MDcxR15N3qtMYaZMWS%2Ft3ClCQ%2Bgq5AOyB6pWnGC%2B%2Fe4FJOTckuMA4UGEGZdOikV55PeJ%2FmaRpoFMO9Dz6ELsM%2FO45jinH%2FO25vQKTXzqVBVxjmO6th%2FVa3SevMUWiUmOMtQ5F%2FHuaNzDu5roJl7EyA%2BiPXzG2%2BR7mkm5XZuIYj0To6LwD9WkCd1LAUpDWSIrUwDPjYezhq501u78ZT5FOv7VK4hIGzgQLR9iAfPawk1vsSGkfGfYe7ABj69doKbXGdUuJKlW9jVzpdqu30Pbe%2BbeaHJwj6goTuSI4WT0t4fWqfCxcCCQnX72SGE2URS%2F7ru%2FAr4v0Vj4PDIcZaT9Rzq189aZuSSzi1TVO4KHKkkSLQDjb7LGlvyOTwD7%2F71PNIALEp1yI4TkyEIIfEZxsm%2BoWgvQa62ldr1xnBTmAvJR%2BOTsMlgf%2BBJHGgGrDQScuHYQGlUakIDIdYLsoHubfaBjILdb%2FRV1p8q0liPESWlySJ8fogEohssZWKMOHNhMUGOqUBFIVsV43sF8kuSssxtxg4K3rkOOh5awsNbFN1EqN7APW6wraQ7dEvPg4sH9iVyA%2FXjFnq6tVPUyLbFz47TJQEhf5MgLcdk3bc1gyMdLRyKIWM0ZPWWfLdZ4p92V%2Be1zLEL%2Bl9%2FTiDxOl2ia6yz5bky4YEbzp6zMq70E0TCBAKd1UMeqDrS6e2aL3%2FOA%2FBw3Flt83Uyqkq6vZh0tJlxFWSTGh5CP%2Bz&X-Amz-Signature=f98c91628a624ca504df974786cff16e9be7279d139ff3c9cfe890ea9070a305&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUS4TPHI%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQD4b3QQdNo9VZNTg4BWDx32HXHuJ86FXzA7oHF529Kl0QIgFg%2BOt%2BvIKAlxjOKqbidiVQLpVsXU8wBbO4t0n3HopPIqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKWFqfxhY2pbVNZo7yrcAxGxJDCr%2BB7TpNRFr5eAOoGFUhSymaxVoaW5mpEozhoJwEZF2fDKSasfsPQ7SmDdFl%2BaLCGJjDjYY%2BZ7BZhnh%2BblBcgLQxP%2BoxV%2BOV32BDSWRNWgwbOWLefwK3YGgdiRq3MDcxR15N3qtMYaZMWS%2Ft3ClCQ%2Bgq5AOyB6pWnGC%2B%2Fe4FJOTckuMA4UGEGZdOikV55PeJ%2FmaRpoFMO9Dz6ELsM%2FO45jinH%2FO25vQKTXzqVBVxjmO6th%2FVa3SevMUWiUmOMtQ5F%2FHuaNzDu5roJl7EyA%2BiPXzG2%2BR7mkm5XZuIYj0To6LwD9WkCd1LAUpDWSIrUwDPjYezhq501u78ZT5FOv7VK4hIGzgQLR9iAfPawk1vsSGkfGfYe7ABj69doKbXGdUuJKlW9jVzpdqu30Pbe%2BbeaHJwj6goTuSI4WT0t4fWqfCxcCCQnX72SGE2URS%2F7ru%2FAr4v0Vj4PDIcZaT9Rzq189aZuSSzi1TVO4KHKkkSLQDjb7LGlvyOTwD7%2F71PNIALEp1yI4TkyEIIfEZxsm%2BoWgvQa62ldr1xnBTmAvJR%2BOTsMlgf%2BBJHGgGrDQScuHYQGlUakIDIdYLsoHubfaBjILdb%2FRV1p8q0liPESWlySJ8fogEohssZWKMOHNhMUGOqUBFIVsV43sF8kuSssxtxg4K3rkOOh5awsNbFN1EqN7APW6wraQ7dEvPg4sH9iVyA%2FXjFnq6tVPUyLbFz47TJQEhf5MgLcdk3bc1gyMdLRyKIWM0ZPWWfLdZ4p92V%2Be1zLEL%2Bl9%2FTiDxOl2ia6yz5bky4YEbzp6zMq70E0TCBAKd1UMeqDrS6e2aL3%2FOA%2FBw3Flt83Uyqkq6vZh0tJlxFWSTGh5CP%2Bz&X-Amz-Signature=2e954121cfa36cc7c575ce9b42a49902c436bde396184dfa58eacc6f2fd5a19b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


