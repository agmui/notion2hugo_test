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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFLBMLZV%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCOj7I0prHiptthcKNFQ7fSigpqOK%2B%2F6b6pU20Wrl3CAIhALGYc%2FuYXPqhAP8E8x29siwJpbNd9HnVr0u1DouNQKANKv8DCHMQABoMNjM3NDIzMTgzODA1Igzclf7hBw3%2Bb5VfrmQq3APLlT%2FPpm%2F8xLMexZYmPmP2L33GuLebFNpp8fCyfjKfNQQYwkpCxDF%2FsS0FJiO4Im8bLggyaVfkpa5PgkVXjrguSHmX5nNZSgzEkxZMtyokDAsQ2K51qq4DNjBhc5OHeCcDimttsGQbZgkSrYAu9jxnWHt6ftZm5deIjcmI2Y8%2BQPUKUgdd7WaBpZBm3ukPqfeRLVdsMDod5bwX%2FxOfvxWQrX%2BZTf1hwl1VAsgtRVI18vRDbuVTFFVkZvNIdBOpahyhX8fnRlfbnyyZX%2BOSPxQoZEu%2BjwLuqnNNr4HtquHtPRMOWdHodv87k4HfxBqn%2FqUyyb%2BnBC65aCtPce0CQCYFdLEYvhGREOf2DSJIvgNyzOBEhrR832uq%2Fw3fty62qa78TOYk7mpEMnBM7DeKNDlXzkjQaLBE0hPJXbijBwHFMiBhRkN9Chq27jEhhNNX%2Fs4W%2FRKzRSPHzEo5evDLCySHwzHFK6EzmsDG9xGBN7w13wuHTkrCkkzz99TnjnNKiCbvxPzWEIXR7t%2FB9r5zPG4RfXnKGq%2BjTbAKphUXyA1Cmge%2BLvPtbb%2BGsM2NVKudnSt8j0aG2QeeENJHn%2FOkjNMaHh8FsrR358PgXugA6GNqBkQ2zz2U%2Fhd%2Beup9ezCs%2BdPQBjqkAX9LFA%2FxjvG%2BTjbhSKM4XhaneFSG0r%2BkZK%2Fdyo%2Fq5%2BSibKop%2By%2BpJlNNWHOWooCUNg%2Bs%2Bjn2s4EdaHGwnI488o6n%2FmD3r23peysGkiNPG1YLcr%2B9ViMJ86f4%2BQ570j1F1z%2F8S%2F84dH7kvKhErfwEsTgwLEN5uSPjJFZFIhfcR0QPg7QHQ4Hl8ywbKAC4%2FQdTVs3yOpn9cCulJC3mGOCuTrlFpUHI&X-Amz-Signature=c57011ae97fc3223e194268aacd5254865dd453e4f37a9199f9aea6d9da1aaa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFLBMLZV%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCOj7I0prHiptthcKNFQ7fSigpqOK%2B%2F6b6pU20Wrl3CAIhALGYc%2FuYXPqhAP8E8x29siwJpbNd9HnVr0u1DouNQKANKv8DCHMQABoMNjM3NDIzMTgzODA1Igzclf7hBw3%2Bb5VfrmQq3APLlT%2FPpm%2F8xLMexZYmPmP2L33GuLebFNpp8fCyfjKfNQQYwkpCxDF%2FsS0FJiO4Im8bLggyaVfkpa5PgkVXjrguSHmX5nNZSgzEkxZMtyokDAsQ2K51qq4DNjBhc5OHeCcDimttsGQbZgkSrYAu9jxnWHt6ftZm5deIjcmI2Y8%2BQPUKUgdd7WaBpZBm3ukPqfeRLVdsMDod5bwX%2FxOfvxWQrX%2BZTf1hwl1VAsgtRVI18vRDbuVTFFVkZvNIdBOpahyhX8fnRlfbnyyZX%2BOSPxQoZEu%2BjwLuqnNNr4HtquHtPRMOWdHodv87k4HfxBqn%2FqUyyb%2BnBC65aCtPce0CQCYFdLEYvhGREOf2DSJIvgNyzOBEhrR832uq%2Fw3fty62qa78TOYk7mpEMnBM7DeKNDlXzkjQaLBE0hPJXbijBwHFMiBhRkN9Chq27jEhhNNX%2Fs4W%2FRKzRSPHzEo5evDLCySHwzHFK6EzmsDG9xGBN7w13wuHTkrCkkzz99TnjnNKiCbvxPzWEIXR7t%2FB9r5zPG4RfXnKGq%2BjTbAKphUXyA1Cmge%2BLvPtbb%2BGsM2NVKudnSt8j0aG2QeeENJHn%2FOkjNMaHh8FsrR358PgXugA6GNqBkQ2zz2U%2Fhd%2Beup9ezCs%2BdPQBjqkAX9LFA%2FxjvG%2BTjbhSKM4XhaneFSG0r%2BkZK%2Fdyo%2Fq5%2BSibKop%2By%2BpJlNNWHOWooCUNg%2Bs%2Bjn2s4EdaHGwnI488o6n%2FmD3r23peysGkiNPG1YLcr%2B9ViMJ86f4%2BQ570j1F1z%2F8S%2F84dH7kvKhErfwEsTgwLEN5uSPjJFZFIhfcR0QPg7QHQ4Hl8ywbKAC4%2FQdTVs3yOpn9cCulJC3mGOCuTrlFpUHI&X-Amz-Signature=dbce9d6190ca77c35944da70f491685e3c85536dbe3ed7fee5f7d334ca04236d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFLBMLZV%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCOj7I0prHiptthcKNFQ7fSigpqOK%2B%2F6b6pU20Wrl3CAIhALGYc%2FuYXPqhAP8E8x29siwJpbNd9HnVr0u1DouNQKANKv8DCHMQABoMNjM3NDIzMTgzODA1Igzclf7hBw3%2Bb5VfrmQq3APLlT%2FPpm%2F8xLMexZYmPmP2L33GuLebFNpp8fCyfjKfNQQYwkpCxDF%2FsS0FJiO4Im8bLggyaVfkpa5PgkVXjrguSHmX5nNZSgzEkxZMtyokDAsQ2K51qq4DNjBhc5OHeCcDimttsGQbZgkSrYAu9jxnWHt6ftZm5deIjcmI2Y8%2BQPUKUgdd7WaBpZBm3ukPqfeRLVdsMDod5bwX%2FxOfvxWQrX%2BZTf1hwl1VAsgtRVI18vRDbuVTFFVkZvNIdBOpahyhX8fnRlfbnyyZX%2BOSPxQoZEu%2BjwLuqnNNr4HtquHtPRMOWdHodv87k4HfxBqn%2FqUyyb%2BnBC65aCtPce0CQCYFdLEYvhGREOf2DSJIvgNyzOBEhrR832uq%2Fw3fty62qa78TOYk7mpEMnBM7DeKNDlXzkjQaLBE0hPJXbijBwHFMiBhRkN9Chq27jEhhNNX%2Fs4W%2FRKzRSPHzEo5evDLCySHwzHFK6EzmsDG9xGBN7w13wuHTkrCkkzz99TnjnNKiCbvxPzWEIXR7t%2FB9r5zPG4RfXnKGq%2BjTbAKphUXyA1Cmge%2BLvPtbb%2BGsM2NVKudnSt8j0aG2QeeENJHn%2FOkjNMaHh8FsrR358PgXugA6GNqBkQ2zz2U%2Fhd%2Beup9ezCs%2BdPQBjqkAX9LFA%2FxjvG%2BTjbhSKM4XhaneFSG0r%2BkZK%2Fdyo%2Fq5%2BSibKop%2By%2BpJlNNWHOWooCUNg%2Bs%2Bjn2s4EdaHGwnI488o6n%2FmD3r23peysGkiNPG1YLcr%2B9ViMJ86f4%2BQ570j1F1z%2F8S%2F84dH7kvKhErfwEsTgwLEN5uSPjJFZFIhfcR0QPg7QHQ4Hl8ywbKAC4%2FQdTVs3yOpn9cCulJC3mGOCuTrlFpUHI&X-Amz-Signature=23982fd139aeab7ce41e15c1ec44ff69291c48b839f0166ac3a8be19b7e5cf2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFLBMLZV%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCOj7I0prHiptthcKNFQ7fSigpqOK%2B%2F6b6pU20Wrl3CAIhALGYc%2FuYXPqhAP8E8x29siwJpbNd9HnVr0u1DouNQKANKv8DCHMQABoMNjM3NDIzMTgzODA1Igzclf7hBw3%2Bb5VfrmQq3APLlT%2FPpm%2F8xLMexZYmPmP2L33GuLebFNpp8fCyfjKfNQQYwkpCxDF%2FsS0FJiO4Im8bLggyaVfkpa5PgkVXjrguSHmX5nNZSgzEkxZMtyokDAsQ2K51qq4DNjBhc5OHeCcDimttsGQbZgkSrYAu9jxnWHt6ftZm5deIjcmI2Y8%2BQPUKUgdd7WaBpZBm3ukPqfeRLVdsMDod5bwX%2FxOfvxWQrX%2BZTf1hwl1VAsgtRVI18vRDbuVTFFVkZvNIdBOpahyhX8fnRlfbnyyZX%2BOSPxQoZEu%2BjwLuqnNNr4HtquHtPRMOWdHodv87k4HfxBqn%2FqUyyb%2BnBC65aCtPce0CQCYFdLEYvhGREOf2DSJIvgNyzOBEhrR832uq%2Fw3fty62qa78TOYk7mpEMnBM7DeKNDlXzkjQaLBE0hPJXbijBwHFMiBhRkN9Chq27jEhhNNX%2Fs4W%2FRKzRSPHzEo5evDLCySHwzHFK6EzmsDG9xGBN7w13wuHTkrCkkzz99TnjnNKiCbvxPzWEIXR7t%2FB9r5zPG4RfXnKGq%2BjTbAKphUXyA1Cmge%2BLvPtbb%2BGsM2NVKudnSt8j0aG2QeeENJHn%2FOkjNMaHh8FsrR358PgXugA6GNqBkQ2zz2U%2Fhd%2Beup9ezCs%2BdPQBjqkAX9LFA%2FxjvG%2BTjbhSKM4XhaneFSG0r%2BkZK%2Fdyo%2Fq5%2BSibKop%2By%2BpJlNNWHOWooCUNg%2Bs%2Bjn2s4EdaHGwnI488o6n%2FmD3r23peysGkiNPG1YLcr%2B9ViMJ86f4%2BQ570j1F1z%2F8S%2F84dH7kvKhErfwEsTgwLEN5uSPjJFZFIhfcR0QPg7QHQ4Hl8ywbKAC4%2FQdTVs3yOpn9cCulJC3mGOCuTrlFpUHI&X-Amz-Signature=2626d2df6b2f479d5c8357b788815a69b7c1f18d83a1a8976aad1c90c984368d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4CXBKOW%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTUSNYkxHQdf0D%2F%2FQWZZ23Y0hZBsPvlZSe91VXDRIq5AIgagLbtoyESMaSFpwtU%2FfID04RnuoMP0XwYFHi8W0HVVUq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDOyga9NxPLqPNqV7gCrcA1t4n1yvbCMFVCXj9bQRvg1oujdHkefMExqu9KXL7zhuLLpo6US7YT6dyEXdP5phLAHN%2FWFNzhsqYU%2Fxu5EFbc7jM2zQGXr1XG35yWAKIL1%2Fw1TySQw81lz3nyWkRxmEAA9hhpAeFXt0GFyjA5%2FEz2ndSPGdrMBOOdFtneGRCTo4cKWdavsyOGTRqKgnWCbHeuhiyKFmLXV1xuacbl%2FARxAo8o1YLb2k2R5yn3jc28TZcnn%2B2qUHLGwZQ4jTXUiJHAmVVZ8zKzu%2F1ENhWcrsaosQ4WEfHRuUeZe%2BRSmfgwEhey2aaWnm%2B1hGIHpV8J%2FHMj%2BlegmvkmhVK15RnVhlTDHZ6HV88xhuz0iV1n%2B3x9zdUWxG%2BQCoo%2B72OpGOmqQ9qTS2mVa2k5HbGsX8lzXdBvU5okal%2BZA%2F1GaDuysAOFUNeK5InxK0GR16r0cv6CLnZWwzEF6XVGdWJZ1BO014XyLe4A%2F%2BwzCyUB9uTvcnggLvgGQFyya1FWHsxygYQq2WfhYxAR3yWtsx0DPDmGol7N5cqL6nPrgeHTAPjOlj1%2BJhejWYoTY5OE00NW5JBTKXiKELq8MKsA9VJk8GLT0pZA%2FTQ56h1SSfKDIFb8q7ufoHb6AB%2BdgVn5QnCUzZMLX309AGOqUB21joRFFSqJq0sKuzpJ6w7aqcPITBa1bCspjIJLwuGQJP5YY5cPFf5pM8wW%2BYXDw%2BYKO31PzEZ39k6szxKNcHwnO9rw8m5NEgqA1B3OF63IMK4iAJrL1QGL5eOQIq%2F%2FyGTD2cRbRP728XqwvxCX%2BqzALkLopMeqyxOqlDfxG9Bbh6%2F3KM%2BjH6MFbmVLll1lsti3td0pjuCqeJSHXEO%2BXi07UFUx9M&X-Amz-Signature=b32d753658a1b4e7aa2687fcdfbb7f0fcb399f0a9e2dad465db99e9d3b0d56d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFLBMLZV%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCOj7I0prHiptthcKNFQ7fSigpqOK%2B%2F6b6pU20Wrl3CAIhALGYc%2FuYXPqhAP8E8x29siwJpbNd9HnVr0u1DouNQKANKv8DCHMQABoMNjM3NDIzMTgzODA1Igzclf7hBw3%2Bb5VfrmQq3APLlT%2FPpm%2F8xLMexZYmPmP2L33GuLebFNpp8fCyfjKfNQQYwkpCxDF%2FsS0FJiO4Im8bLggyaVfkpa5PgkVXjrguSHmX5nNZSgzEkxZMtyokDAsQ2K51qq4DNjBhc5OHeCcDimttsGQbZgkSrYAu9jxnWHt6ftZm5deIjcmI2Y8%2BQPUKUgdd7WaBpZBm3ukPqfeRLVdsMDod5bwX%2FxOfvxWQrX%2BZTf1hwl1VAsgtRVI18vRDbuVTFFVkZvNIdBOpahyhX8fnRlfbnyyZX%2BOSPxQoZEu%2BjwLuqnNNr4HtquHtPRMOWdHodv87k4HfxBqn%2FqUyyb%2BnBC65aCtPce0CQCYFdLEYvhGREOf2DSJIvgNyzOBEhrR832uq%2Fw3fty62qa78TOYk7mpEMnBM7DeKNDlXzkjQaLBE0hPJXbijBwHFMiBhRkN9Chq27jEhhNNX%2Fs4W%2FRKzRSPHzEo5evDLCySHwzHFK6EzmsDG9xGBN7w13wuHTkrCkkzz99TnjnNKiCbvxPzWEIXR7t%2FB9r5zPG4RfXnKGq%2BjTbAKphUXyA1Cmge%2BLvPtbb%2BGsM2NVKudnSt8j0aG2QeeENJHn%2FOkjNMaHh8FsrR358PgXugA6GNqBkQ2zz2U%2Fhd%2Beup9ezCs%2BdPQBjqkAX9LFA%2FxjvG%2BTjbhSKM4XhaneFSG0r%2BkZK%2Fdyo%2Fq5%2BSibKop%2By%2BpJlNNWHOWooCUNg%2Bs%2Bjn2s4EdaHGwnI488o6n%2FmD3r23peysGkiNPG1YLcr%2B9ViMJ86f4%2BQ570j1F1z%2F8S%2F84dH7kvKhErfwEsTgwLEN5uSPjJFZFIhfcR0QPg7QHQ4Hl8ywbKAC4%2FQdTVs3yOpn9cCulJC3mGOCuTrlFpUHI&X-Amz-Signature=2c612268e695a268e2fcebfb0e4b7f6ef5a129f90dfbbe672bf0914aa45ae361&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFLBMLZV%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCOj7I0prHiptthcKNFQ7fSigpqOK%2B%2F6b6pU20Wrl3CAIhALGYc%2FuYXPqhAP8E8x29siwJpbNd9HnVr0u1DouNQKANKv8DCHMQABoMNjM3NDIzMTgzODA1Igzclf7hBw3%2Bb5VfrmQq3APLlT%2FPpm%2F8xLMexZYmPmP2L33GuLebFNpp8fCyfjKfNQQYwkpCxDF%2FsS0FJiO4Im8bLggyaVfkpa5PgkVXjrguSHmX5nNZSgzEkxZMtyokDAsQ2K51qq4DNjBhc5OHeCcDimttsGQbZgkSrYAu9jxnWHt6ftZm5deIjcmI2Y8%2BQPUKUgdd7WaBpZBm3ukPqfeRLVdsMDod5bwX%2FxOfvxWQrX%2BZTf1hwl1VAsgtRVI18vRDbuVTFFVkZvNIdBOpahyhX8fnRlfbnyyZX%2BOSPxQoZEu%2BjwLuqnNNr4HtquHtPRMOWdHodv87k4HfxBqn%2FqUyyb%2BnBC65aCtPce0CQCYFdLEYvhGREOf2DSJIvgNyzOBEhrR832uq%2Fw3fty62qa78TOYk7mpEMnBM7DeKNDlXzkjQaLBE0hPJXbijBwHFMiBhRkN9Chq27jEhhNNX%2Fs4W%2FRKzRSPHzEo5evDLCySHwzHFK6EzmsDG9xGBN7w13wuHTkrCkkzz99TnjnNKiCbvxPzWEIXR7t%2FB9r5zPG4RfXnKGq%2BjTbAKphUXyA1Cmge%2BLvPtbb%2BGsM2NVKudnSt8j0aG2QeeENJHn%2FOkjNMaHh8FsrR358PgXugA6GNqBkQ2zz2U%2Fhd%2Beup9ezCs%2BdPQBjqkAX9LFA%2FxjvG%2BTjbhSKM4XhaneFSG0r%2BkZK%2Fdyo%2Fq5%2BSibKop%2By%2BpJlNNWHOWooCUNg%2Bs%2Bjn2s4EdaHGwnI488o6n%2FmD3r23peysGkiNPG1YLcr%2B9ViMJ86f4%2BQ570j1F1z%2F8S%2F84dH7kvKhErfwEsTgwLEN5uSPjJFZFIhfcR0QPg7QHQ4Hl8ywbKAC4%2FQdTVs3yOpn9cCulJC3mGOCuTrlFpUHI&X-Amz-Signature=6b7a91794bc91da08dc1f8bd31e7e5315f953cd674719c3a0d00ca3144d9cc75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFLBMLZV%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCOj7I0prHiptthcKNFQ7fSigpqOK%2B%2F6b6pU20Wrl3CAIhALGYc%2FuYXPqhAP8E8x29siwJpbNd9HnVr0u1DouNQKANKv8DCHMQABoMNjM3NDIzMTgzODA1Igzclf7hBw3%2Bb5VfrmQq3APLlT%2FPpm%2F8xLMexZYmPmP2L33GuLebFNpp8fCyfjKfNQQYwkpCxDF%2FsS0FJiO4Im8bLggyaVfkpa5PgkVXjrguSHmX5nNZSgzEkxZMtyokDAsQ2K51qq4DNjBhc5OHeCcDimttsGQbZgkSrYAu9jxnWHt6ftZm5deIjcmI2Y8%2BQPUKUgdd7WaBpZBm3ukPqfeRLVdsMDod5bwX%2FxOfvxWQrX%2BZTf1hwl1VAsgtRVI18vRDbuVTFFVkZvNIdBOpahyhX8fnRlfbnyyZX%2BOSPxQoZEu%2BjwLuqnNNr4HtquHtPRMOWdHodv87k4HfxBqn%2FqUyyb%2BnBC65aCtPce0CQCYFdLEYvhGREOf2DSJIvgNyzOBEhrR832uq%2Fw3fty62qa78TOYk7mpEMnBM7DeKNDlXzkjQaLBE0hPJXbijBwHFMiBhRkN9Chq27jEhhNNX%2Fs4W%2FRKzRSPHzEo5evDLCySHwzHFK6EzmsDG9xGBN7w13wuHTkrCkkzz99TnjnNKiCbvxPzWEIXR7t%2FB9r5zPG4RfXnKGq%2BjTbAKphUXyA1Cmge%2BLvPtbb%2BGsM2NVKudnSt8j0aG2QeeENJHn%2FOkjNMaHh8FsrR358PgXugA6GNqBkQ2zz2U%2Fhd%2Beup9ezCs%2BdPQBjqkAX9LFA%2FxjvG%2BTjbhSKM4XhaneFSG0r%2BkZK%2Fdyo%2Fq5%2BSibKop%2By%2BpJlNNWHOWooCUNg%2Bs%2Bjn2s4EdaHGwnI488o6n%2FmD3r23peysGkiNPG1YLcr%2B9ViMJ86f4%2BQ570j1F1z%2F8S%2F84dH7kvKhErfwEsTgwLEN5uSPjJFZFIhfcR0QPg7QHQ4Hl8ywbKAC4%2FQdTVs3yOpn9cCulJC3mGOCuTrlFpUHI&X-Amz-Signature=cd212eeb198fdb03195b8c004d831ddb5d4a669c63da1b9027d7f7a958971028&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFLBMLZV%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCOj7I0prHiptthcKNFQ7fSigpqOK%2B%2F6b6pU20Wrl3CAIhALGYc%2FuYXPqhAP8E8x29siwJpbNd9HnVr0u1DouNQKANKv8DCHMQABoMNjM3NDIzMTgzODA1Igzclf7hBw3%2Bb5VfrmQq3APLlT%2FPpm%2F8xLMexZYmPmP2L33GuLebFNpp8fCyfjKfNQQYwkpCxDF%2FsS0FJiO4Im8bLggyaVfkpa5PgkVXjrguSHmX5nNZSgzEkxZMtyokDAsQ2K51qq4DNjBhc5OHeCcDimttsGQbZgkSrYAu9jxnWHt6ftZm5deIjcmI2Y8%2BQPUKUgdd7WaBpZBm3ukPqfeRLVdsMDod5bwX%2FxOfvxWQrX%2BZTf1hwl1VAsgtRVI18vRDbuVTFFVkZvNIdBOpahyhX8fnRlfbnyyZX%2BOSPxQoZEu%2BjwLuqnNNr4HtquHtPRMOWdHodv87k4HfxBqn%2FqUyyb%2BnBC65aCtPce0CQCYFdLEYvhGREOf2DSJIvgNyzOBEhrR832uq%2Fw3fty62qa78TOYk7mpEMnBM7DeKNDlXzkjQaLBE0hPJXbijBwHFMiBhRkN9Chq27jEhhNNX%2Fs4W%2FRKzRSPHzEo5evDLCySHwzHFK6EzmsDG9xGBN7w13wuHTkrCkkzz99TnjnNKiCbvxPzWEIXR7t%2FB9r5zPG4RfXnKGq%2BjTbAKphUXyA1Cmge%2BLvPtbb%2BGsM2NVKudnSt8j0aG2QeeENJHn%2FOkjNMaHh8FsrR358PgXugA6GNqBkQ2zz2U%2Fhd%2Beup9ezCs%2BdPQBjqkAX9LFA%2FxjvG%2BTjbhSKM4XhaneFSG0r%2BkZK%2Fdyo%2Fq5%2BSibKop%2By%2BpJlNNWHOWooCUNg%2Bs%2Bjn2s4EdaHGwnI488o6n%2FmD3r23peysGkiNPG1YLcr%2B9ViMJ86f4%2BQ570j1F1z%2F8S%2F84dH7kvKhErfwEsTgwLEN5uSPjJFZFIhfcR0QPg7QHQ4Hl8ywbKAC4%2FQdTVs3yOpn9cCulJC3mGOCuTrlFpUHI&X-Amz-Signature=c3948da3a38b9ead914b07ee814b42d37cdb630afcedbaaedc3d4140080e963f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFLBMLZV%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCOj7I0prHiptthcKNFQ7fSigpqOK%2B%2F6b6pU20Wrl3CAIhALGYc%2FuYXPqhAP8E8x29siwJpbNd9HnVr0u1DouNQKANKv8DCHMQABoMNjM3NDIzMTgzODA1Igzclf7hBw3%2Bb5VfrmQq3APLlT%2FPpm%2F8xLMexZYmPmP2L33GuLebFNpp8fCyfjKfNQQYwkpCxDF%2FsS0FJiO4Im8bLggyaVfkpa5PgkVXjrguSHmX5nNZSgzEkxZMtyokDAsQ2K51qq4DNjBhc5OHeCcDimttsGQbZgkSrYAu9jxnWHt6ftZm5deIjcmI2Y8%2BQPUKUgdd7WaBpZBm3ukPqfeRLVdsMDod5bwX%2FxOfvxWQrX%2BZTf1hwl1VAsgtRVI18vRDbuVTFFVkZvNIdBOpahyhX8fnRlfbnyyZX%2BOSPxQoZEu%2BjwLuqnNNr4HtquHtPRMOWdHodv87k4HfxBqn%2FqUyyb%2BnBC65aCtPce0CQCYFdLEYvhGREOf2DSJIvgNyzOBEhrR832uq%2Fw3fty62qa78TOYk7mpEMnBM7DeKNDlXzkjQaLBE0hPJXbijBwHFMiBhRkN9Chq27jEhhNNX%2Fs4W%2FRKzRSPHzEo5evDLCySHwzHFK6EzmsDG9xGBN7w13wuHTkrCkkzz99TnjnNKiCbvxPzWEIXR7t%2FB9r5zPG4RfXnKGq%2BjTbAKphUXyA1Cmge%2BLvPtbb%2BGsM2NVKudnSt8j0aG2QeeENJHn%2FOkjNMaHh8FsrR358PgXugA6GNqBkQ2zz2U%2Fhd%2Beup9ezCs%2BdPQBjqkAX9LFA%2FxjvG%2BTjbhSKM4XhaneFSG0r%2BkZK%2Fdyo%2Fq5%2BSibKop%2By%2BpJlNNWHOWooCUNg%2Bs%2Bjn2s4EdaHGwnI488o6n%2FmD3r23peysGkiNPG1YLcr%2B9ViMJ86f4%2BQ570j1F1z%2F8S%2F84dH7kvKhErfwEsTgwLEN5uSPjJFZFIhfcR0QPg7QHQ4Hl8ywbKAC4%2FQdTVs3yOpn9cCulJC3mGOCuTrlFpUHI&X-Amz-Signature=9a2be034cd1fcf9b9d008f8e07fa971eb675029a242fd20f503b1dd65ae414a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFLBMLZV%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCOj7I0prHiptthcKNFQ7fSigpqOK%2B%2F6b6pU20Wrl3CAIhALGYc%2FuYXPqhAP8E8x29siwJpbNd9HnVr0u1DouNQKANKv8DCHMQABoMNjM3NDIzMTgzODA1Igzclf7hBw3%2Bb5VfrmQq3APLlT%2FPpm%2F8xLMexZYmPmP2L33GuLebFNpp8fCyfjKfNQQYwkpCxDF%2FsS0FJiO4Im8bLggyaVfkpa5PgkVXjrguSHmX5nNZSgzEkxZMtyokDAsQ2K51qq4DNjBhc5OHeCcDimttsGQbZgkSrYAu9jxnWHt6ftZm5deIjcmI2Y8%2BQPUKUgdd7WaBpZBm3ukPqfeRLVdsMDod5bwX%2FxOfvxWQrX%2BZTf1hwl1VAsgtRVI18vRDbuVTFFVkZvNIdBOpahyhX8fnRlfbnyyZX%2BOSPxQoZEu%2BjwLuqnNNr4HtquHtPRMOWdHodv87k4HfxBqn%2FqUyyb%2BnBC65aCtPce0CQCYFdLEYvhGREOf2DSJIvgNyzOBEhrR832uq%2Fw3fty62qa78TOYk7mpEMnBM7DeKNDlXzkjQaLBE0hPJXbijBwHFMiBhRkN9Chq27jEhhNNX%2Fs4W%2FRKzRSPHzEo5evDLCySHwzHFK6EzmsDG9xGBN7w13wuHTkrCkkzz99TnjnNKiCbvxPzWEIXR7t%2FB9r5zPG4RfXnKGq%2BjTbAKphUXyA1Cmge%2BLvPtbb%2BGsM2NVKudnSt8j0aG2QeeENJHn%2FOkjNMaHh8FsrR358PgXugA6GNqBkQ2zz2U%2Fhd%2Beup9ezCs%2BdPQBjqkAX9LFA%2FxjvG%2BTjbhSKM4XhaneFSG0r%2BkZK%2Fdyo%2Fq5%2BSibKop%2By%2BpJlNNWHOWooCUNg%2Bs%2Bjn2s4EdaHGwnI488o6n%2FmD3r23peysGkiNPG1YLcr%2B9ViMJ86f4%2BQ570j1F1z%2F8S%2F84dH7kvKhErfwEsTgwLEN5uSPjJFZFIhfcR0QPg7QHQ4Hl8ywbKAC4%2FQdTVs3yOpn9cCulJC3mGOCuTrlFpUHI&X-Amz-Signature=58b802d2d3ec21a6a491b8c15e42ecefc32e37a65511f8fe23ad2c5028b87b68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


