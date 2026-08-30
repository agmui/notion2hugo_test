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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZLIZHKX%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDceSmDqcrbF1YJJefkMyLYzudB1FCaWB%2BteCDesF%2BLrAiEAtVUB5PPUYn8oaJvCTPUdEhiw9AXqKBrTHNMcjA08rBgq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDoElyDm4NPz0bXNAircA5agXYkZm6yojD8QnrJjaYJEG4%2FLHsnKTUSbzXRkrlIXcrILeIKVWZfG9C5PudK7RfzgXHet6%2FAUqBy0g1M8ZJeu8qKx7mmYKNkGKremVvscw4bnJX3dhFEAaDyOLvq8RFWArUUVAJAAa9zR%2B63Boutd6Ttd34fXUL%2FiQY%2Fba8xRA17TO5vNp6VWoiIvrytoWEonEd1ytu%2BIPezIg5LTvGCXEsW8SyprD586OMyjW62qzXwmSJM2SZ5RimqYDqGe0uMDX27OERV2An1LZtYp33KGQ9%2FpxtjP6jxI9Ey9Y3c1x6gMuX2sCDJkVLkwK2tZbzxZRPiKEDY0%2F1JqhvwR2cXfGHTVR9iERjaG5i7TZnTZJRvNSMXJkEtqtP45AeODknIYhQHd1Ax8ca5BzHmKAYcPTdc1YX6in0FLx%2FrnYIvAPdxJGnsISXTZU4Yd7nOhXsajx2ZkiHRXwgEdoOxv9TX%2BLlZPF5oOK7EMNw2thYe2uy3e4FvVPJdouaebrXH99vkPPShsPURTWaVK55PndaeT8NjlDH9m0IBmJ1kyXGvGrbWapcfBcQ6jy2IRlgRqc7y6FoNZubUXixWkJnVlGYYjie95tb%2FObn2lJufnmdsSAJxzuRt3C3FL3hU5ML7NztQGOqUBRKCCvJF8iXK8%2FwMujF3i49o3uKnIczJzbzgXJQehXhIgMin6y2%2F0tBacCaJ49oOzpqAG1gAlyxNmGROvz4ChfVntvirFJ0FUgTNiMLbzVuk0QC390dZS9ATnANzhFCoyouw3W%2BG7cAvL%2Fvs9OMQ9EhpyoL9GoDuph%2FAQBCDYE51cmKZg90xZBAmFk0uloS83o0LfAQnpHdONzPlcrrNZu8dnaMtm&X-Amz-Signature=d021856024062d767ea3c5856f451a1d8f0d4e70317e5bf6aaba97989ebd8cf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZLIZHKX%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDceSmDqcrbF1YJJefkMyLYzudB1FCaWB%2BteCDesF%2BLrAiEAtVUB5PPUYn8oaJvCTPUdEhiw9AXqKBrTHNMcjA08rBgq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDoElyDm4NPz0bXNAircA5agXYkZm6yojD8QnrJjaYJEG4%2FLHsnKTUSbzXRkrlIXcrILeIKVWZfG9C5PudK7RfzgXHet6%2FAUqBy0g1M8ZJeu8qKx7mmYKNkGKremVvscw4bnJX3dhFEAaDyOLvq8RFWArUUVAJAAa9zR%2B63Boutd6Ttd34fXUL%2FiQY%2Fba8xRA17TO5vNp6VWoiIvrytoWEonEd1ytu%2BIPezIg5LTvGCXEsW8SyprD586OMyjW62qzXwmSJM2SZ5RimqYDqGe0uMDX27OERV2An1LZtYp33KGQ9%2FpxtjP6jxI9Ey9Y3c1x6gMuX2sCDJkVLkwK2tZbzxZRPiKEDY0%2F1JqhvwR2cXfGHTVR9iERjaG5i7TZnTZJRvNSMXJkEtqtP45AeODknIYhQHd1Ax8ca5BzHmKAYcPTdc1YX6in0FLx%2FrnYIvAPdxJGnsISXTZU4Yd7nOhXsajx2ZkiHRXwgEdoOxv9TX%2BLlZPF5oOK7EMNw2thYe2uy3e4FvVPJdouaebrXH99vkPPShsPURTWaVK55PndaeT8NjlDH9m0IBmJ1kyXGvGrbWapcfBcQ6jy2IRlgRqc7y6FoNZubUXixWkJnVlGYYjie95tb%2FObn2lJufnmdsSAJxzuRt3C3FL3hU5ML7NztQGOqUBRKCCvJF8iXK8%2FwMujF3i49o3uKnIczJzbzgXJQehXhIgMin6y2%2F0tBacCaJ49oOzpqAG1gAlyxNmGROvz4ChfVntvirFJ0FUgTNiMLbzVuk0QC390dZS9ATnANzhFCoyouw3W%2BG7cAvL%2Fvs9OMQ9EhpyoL9GoDuph%2FAQBCDYE51cmKZg90xZBAmFk0uloS83o0LfAQnpHdONzPlcrrNZu8dnaMtm&X-Amz-Signature=8c5aba2df7b420056ff7fcf4e81d35369cd745f755d584c21e0e2314d511dbb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZLIZHKX%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDceSmDqcrbF1YJJefkMyLYzudB1FCaWB%2BteCDesF%2BLrAiEAtVUB5PPUYn8oaJvCTPUdEhiw9AXqKBrTHNMcjA08rBgq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDoElyDm4NPz0bXNAircA5agXYkZm6yojD8QnrJjaYJEG4%2FLHsnKTUSbzXRkrlIXcrILeIKVWZfG9C5PudK7RfzgXHet6%2FAUqBy0g1M8ZJeu8qKx7mmYKNkGKremVvscw4bnJX3dhFEAaDyOLvq8RFWArUUVAJAAa9zR%2B63Boutd6Ttd34fXUL%2FiQY%2Fba8xRA17TO5vNp6VWoiIvrytoWEonEd1ytu%2BIPezIg5LTvGCXEsW8SyprD586OMyjW62qzXwmSJM2SZ5RimqYDqGe0uMDX27OERV2An1LZtYp33KGQ9%2FpxtjP6jxI9Ey9Y3c1x6gMuX2sCDJkVLkwK2tZbzxZRPiKEDY0%2F1JqhvwR2cXfGHTVR9iERjaG5i7TZnTZJRvNSMXJkEtqtP45AeODknIYhQHd1Ax8ca5BzHmKAYcPTdc1YX6in0FLx%2FrnYIvAPdxJGnsISXTZU4Yd7nOhXsajx2ZkiHRXwgEdoOxv9TX%2BLlZPF5oOK7EMNw2thYe2uy3e4FvVPJdouaebrXH99vkPPShsPURTWaVK55PndaeT8NjlDH9m0IBmJ1kyXGvGrbWapcfBcQ6jy2IRlgRqc7y6FoNZubUXixWkJnVlGYYjie95tb%2FObn2lJufnmdsSAJxzuRt3C3FL3hU5ML7NztQGOqUBRKCCvJF8iXK8%2FwMujF3i49o3uKnIczJzbzgXJQehXhIgMin6y2%2F0tBacCaJ49oOzpqAG1gAlyxNmGROvz4ChfVntvirFJ0FUgTNiMLbzVuk0QC390dZS9ATnANzhFCoyouw3W%2BG7cAvL%2Fvs9OMQ9EhpyoL9GoDuph%2FAQBCDYE51cmKZg90xZBAmFk0uloS83o0LfAQnpHdONzPlcrrNZu8dnaMtm&X-Amz-Signature=7b4e73910a9f44c4b452dcc4bc6d12c1163a26db2a4ba24064432430d38734c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZLIZHKX%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDceSmDqcrbF1YJJefkMyLYzudB1FCaWB%2BteCDesF%2BLrAiEAtVUB5PPUYn8oaJvCTPUdEhiw9AXqKBrTHNMcjA08rBgq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDoElyDm4NPz0bXNAircA5agXYkZm6yojD8QnrJjaYJEG4%2FLHsnKTUSbzXRkrlIXcrILeIKVWZfG9C5PudK7RfzgXHet6%2FAUqBy0g1M8ZJeu8qKx7mmYKNkGKremVvscw4bnJX3dhFEAaDyOLvq8RFWArUUVAJAAa9zR%2B63Boutd6Ttd34fXUL%2FiQY%2Fba8xRA17TO5vNp6VWoiIvrytoWEonEd1ytu%2BIPezIg5LTvGCXEsW8SyprD586OMyjW62qzXwmSJM2SZ5RimqYDqGe0uMDX27OERV2An1LZtYp33KGQ9%2FpxtjP6jxI9Ey9Y3c1x6gMuX2sCDJkVLkwK2tZbzxZRPiKEDY0%2F1JqhvwR2cXfGHTVR9iERjaG5i7TZnTZJRvNSMXJkEtqtP45AeODknIYhQHd1Ax8ca5BzHmKAYcPTdc1YX6in0FLx%2FrnYIvAPdxJGnsISXTZU4Yd7nOhXsajx2ZkiHRXwgEdoOxv9TX%2BLlZPF5oOK7EMNw2thYe2uy3e4FvVPJdouaebrXH99vkPPShsPURTWaVK55PndaeT8NjlDH9m0IBmJ1kyXGvGrbWapcfBcQ6jy2IRlgRqc7y6FoNZubUXixWkJnVlGYYjie95tb%2FObn2lJufnmdsSAJxzuRt3C3FL3hU5ML7NztQGOqUBRKCCvJF8iXK8%2FwMujF3i49o3uKnIczJzbzgXJQehXhIgMin6y2%2F0tBacCaJ49oOzpqAG1gAlyxNmGROvz4ChfVntvirFJ0FUgTNiMLbzVuk0QC390dZS9ATnANzhFCoyouw3W%2BG7cAvL%2Fvs9OMQ9EhpyoL9GoDuph%2FAQBCDYE51cmKZg90xZBAmFk0uloS83o0LfAQnpHdONzPlcrrNZu8dnaMtm&X-Amz-Signature=f9c9c847fe9a110011ced3e19e4e497538e4f7d14f1a277d46bb96e3829213ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VIO5PVZ%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8jd8IVlOHMftzRj2MRVMsG4%2FJT4aQPBSuJIdjTti68AIhAJkEjS6BVoLXmdRnW7G5klW6305VATYkKW4DZ6LZeJDkKv8DCHUQABoMNjM3NDIzMTgzODA1IgxK2fWGG9Skm1olD9cq3ANnIsvYnWC5t%2BgL9FMNRlfNCM4L%2BxAUulxOiXEQPF2QTYWfzDMWxkgz3VC7piSQCxFSm1vKbgBodla4xaav0cSQb9XBZDJpjg3TU%2BMycCnsQ2jYeoYgzFXgs1Fn4QEUMd0Wxe5gVk75jJTTaYYbiRXD4ufyLELRVWNZGJH8Mb8HzoBPZC9UIfK01oCElu39GVTr5ADAG1H2tFYkUFyTr2bW%2Bimi4jP90lDjHh8bGzec9ExQCs8rS5KVz25pgdrThz3q%2FgXTHzld01I7LdQ6VnA2QO8Pd47OURYA0P0%2FJ2W%2FnQgxUyLSGB8iD%2FvzKYZGztTGExUD%2F1AYkMXhYU8byz5cQGCJxNWJ7I7n%2BBYsVHLH%2FwFUHaV5nNAQRAxHh5PQPp4YS6pNo%2BwIgFfxt0ZRTC68qj%2BdjmTj%2FPtAkOfI576ES%2BtLQNH%2BVSE4iu6x9SJQJ8ANI%2BWV796SjpAy20S9pya2yGuxkNX7418skXFMGShCcLgMkFQpFLz5Swp9%2FyZ6lzaqaOan4AMDoZMUNYnKUsPE%2BNPXDdZR4HTbO1vr9eNN2YbJifasCmhxly9gU%2BXFA8ZBEIrLiGpZ5zB%2FQYE6to0Y2hhv%2BVjITSin3pM4vV7XxjXgTSMdEUEX6e2ALDCFzc7UBjqkARs6N4uetI7pkQHNdhU%2F9G%2FxqAuQzEZjQ%2FQ6Kxi7W8mQCOWIpm1TxJWYwaB7irO61sKJuhpt9MhNSlCrSHHsWETf%2FN9NcRnqPW5p4Iy19evYt3iInJd4ctI6tiuMsnzX%2F1gfam1wQCHV%2FKVsWYqFddEk95ND7Lonp0vv9fXogXRHRmzWmpzA0g1Uu3QxSKUV6j%2BbZB%2FJx8GLI1%2FGpaDOydWAe1NR&X-Amz-Signature=bd9684d11975228e02942f6503b0466d484a532e0745234714db5209aa7bebfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZLIZHKX%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDceSmDqcrbF1YJJefkMyLYzudB1FCaWB%2BteCDesF%2BLrAiEAtVUB5PPUYn8oaJvCTPUdEhiw9AXqKBrTHNMcjA08rBgq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDoElyDm4NPz0bXNAircA5agXYkZm6yojD8QnrJjaYJEG4%2FLHsnKTUSbzXRkrlIXcrILeIKVWZfG9C5PudK7RfzgXHet6%2FAUqBy0g1M8ZJeu8qKx7mmYKNkGKremVvscw4bnJX3dhFEAaDyOLvq8RFWArUUVAJAAa9zR%2B63Boutd6Ttd34fXUL%2FiQY%2Fba8xRA17TO5vNp6VWoiIvrytoWEonEd1ytu%2BIPezIg5LTvGCXEsW8SyprD586OMyjW62qzXwmSJM2SZ5RimqYDqGe0uMDX27OERV2An1LZtYp33KGQ9%2FpxtjP6jxI9Ey9Y3c1x6gMuX2sCDJkVLkwK2tZbzxZRPiKEDY0%2F1JqhvwR2cXfGHTVR9iERjaG5i7TZnTZJRvNSMXJkEtqtP45AeODknIYhQHd1Ax8ca5BzHmKAYcPTdc1YX6in0FLx%2FrnYIvAPdxJGnsISXTZU4Yd7nOhXsajx2ZkiHRXwgEdoOxv9TX%2BLlZPF5oOK7EMNw2thYe2uy3e4FvVPJdouaebrXH99vkPPShsPURTWaVK55PndaeT8NjlDH9m0IBmJ1kyXGvGrbWapcfBcQ6jy2IRlgRqc7y6FoNZubUXixWkJnVlGYYjie95tb%2FObn2lJufnmdsSAJxzuRt3C3FL3hU5ML7NztQGOqUBRKCCvJF8iXK8%2FwMujF3i49o3uKnIczJzbzgXJQehXhIgMin6y2%2F0tBacCaJ49oOzpqAG1gAlyxNmGROvz4ChfVntvirFJ0FUgTNiMLbzVuk0QC390dZS9ATnANzhFCoyouw3W%2BG7cAvL%2Fvs9OMQ9EhpyoL9GoDuph%2FAQBCDYE51cmKZg90xZBAmFk0uloS83o0LfAQnpHdONzPlcrrNZu8dnaMtm&X-Amz-Signature=e01f8ee60067bd486438083398b089e6f2f4d7a1477141b60e2ca70009a16edb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZLIZHKX%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDceSmDqcrbF1YJJefkMyLYzudB1FCaWB%2BteCDesF%2BLrAiEAtVUB5PPUYn8oaJvCTPUdEhiw9AXqKBrTHNMcjA08rBgq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDoElyDm4NPz0bXNAircA5agXYkZm6yojD8QnrJjaYJEG4%2FLHsnKTUSbzXRkrlIXcrILeIKVWZfG9C5PudK7RfzgXHet6%2FAUqBy0g1M8ZJeu8qKx7mmYKNkGKremVvscw4bnJX3dhFEAaDyOLvq8RFWArUUVAJAAa9zR%2B63Boutd6Ttd34fXUL%2FiQY%2Fba8xRA17TO5vNp6VWoiIvrytoWEonEd1ytu%2BIPezIg5LTvGCXEsW8SyprD586OMyjW62qzXwmSJM2SZ5RimqYDqGe0uMDX27OERV2An1LZtYp33KGQ9%2FpxtjP6jxI9Ey9Y3c1x6gMuX2sCDJkVLkwK2tZbzxZRPiKEDY0%2F1JqhvwR2cXfGHTVR9iERjaG5i7TZnTZJRvNSMXJkEtqtP45AeODknIYhQHd1Ax8ca5BzHmKAYcPTdc1YX6in0FLx%2FrnYIvAPdxJGnsISXTZU4Yd7nOhXsajx2ZkiHRXwgEdoOxv9TX%2BLlZPF5oOK7EMNw2thYe2uy3e4FvVPJdouaebrXH99vkPPShsPURTWaVK55PndaeT8NjlDH9m0IBmJ1kyXGvGrbWapcfBcQ6jy2IRlgRqc7y6FoNZubUXixWkJnVlGYYjie95tb%2FObn2lJufnmdsSAJxzuRt3C3FL3hU5ML7NztQGOqUBRKCCvJF8iXK8%2FwMujF3i49o3uKnIczJzbzgXJQehXhIgMin6y2%2F0tBacCaJ49oOzpqAG1gAlyxNmGROvz4ChfVntvirFJ0FUgTNiMLbzVuk0QC390dZS9ATnANzhFCoyouw3W%2BG7cAvL%2Fvs9OMQ9EhpyoL9GoDuph%2FAQBCDYE51cmKZg90xZBAmFk0uloS83o0LfAQnpHdONzPlcrrNZu8dnaMtm&X-Amz-Signature=fb119b7909ec81ba3f058d37f28fbaad1b40d72fed14b02d3c77b801130a1626&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZLIZHKX%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDceSmDqcrbF1YJJefkMyLYzudB1FCaWB%2BteCDesF%2BLrAiEAtVUB5PPUYn8oaJvCTPUdEhiw9AXqKBrTHNMcjA08rBgq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDoElyDm4NPz0bXNAircA5agXYkZm6yojD8QnrJjaYJEG4%2FLHsnKTUSbzXRkrlIXcrILeIKVWZfG9C5PudK7RfzgXHet6%2FAUqBy0g1M8ZJeu8qKx7mmYKNkGKremVvscw4bnJX3dhFEAaDyOLvq8RFWArUUVAJAAa9zR%2B63Boutd6Ttd34fXUL%2FiQY%2Fba8xRA17TO5vNp6VWoiIvrytoWEonEd1ytu%2BIPezIg5LTvGCXEsW8SyprD586OMyjW62qzXwmSJM2SZ5RimqYDqGe0uMDX27OERV2An1LZtYp33KGQ9%2FpxtjP6jxI9Ey9Y3c1x6gMuX2sCDJkVLkwK2tZbzxZRPiKEDY0%2F1JqhvwR2cXfGHTVR9iERjaG5i7TZnTZJRvNSMXJkEtqtP45AeODknIYhQHd1Ax8ca5BzHmKAYcPTdc1YX6in0FLx%2FrnYIvAPdxJGnsISXTZU4Yd7nOhXsajx2ZkiHRXwgEdoOxv9TX%2BLlZPF5oOK7EMNw2thYe2uy3e4FvVPJdouaebrXH99vkPPShsPURTWaVK55PndaeT8NjlDH9m0IBmJ1kyXGvGrbWapcfBcQ6jy2IRlgRqc7y6FoNZubUXixWkJnVlGYYjie95tb%2FObn2lJufnmdsSAJxzuRt3C3FL3hU5ML7NztQGOqUBRKCCvJF8iXK8%2FwMujF3i49o3uKnIczJzbzgXJQehXhIgMin6y2%2F0tBacCaJ49oOzpqAG1gAlyxNmGROvz4ChfVntvirFJ0FUgTNiMLbzVuk0QC390dZS9ATnANzhFCoyouw3W%2BG7cAvL%2Fvs9OMQ9EhpyoL9GoDuph%2FAQBCDYE51cmKZg90xZBAmFk0uloS83o0LfAQnpHdONzPlcrrNZu8dnaMtm&X-Amz-Signature=272faec826541d24fafc98830ebf8b1c6c601a579c151bbd31208b728d8a2fce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZLIZHKX%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDceSmDqcrbF1YJJefkMyLYzudB1FCaWB%2BteCDesF%2BLrAiEAtVUB5PPUYn8oaJvCTPUdEhiw9AXqKBrTHNMcjA08rBgq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDoElyDm4NPz0bXNAircA5agXYkZm6yojD8QnrJjaYJEG4%2FLHsnKTUSbzXRkrlIXcrILeIKVWZfG9C5PudK7RfzgXHet6%2FAUqBy0g1M8ZJeu8qKx7mmYKNkGKremVvscw4bnJX3dhFEAaDyOLvq8RFWArUUVAJAAa9zR%2B63Boutd6Ttd34fXUL%2FiQY%2Fba8xRA17TO5vNp6VWoiIvrytoWEonEd1ytu%2BIPezIg5LTvGCXEsW8SyprD586OMyjW62qzXwmSJM2SZ5RimqYDqGe0uMDX27OERV2An1LZtYp33KGQ9%2FpxtjP6jxI9Ey9Y3c1x6gMuX2sCDJkVLkwK2tZbzxZRPiKEDY0%2F1JqhvwR2cXfGHTVR9iERjaG5i7TZnTZJRvNSMXJkEtqtP45AeODknIYhQHd1Ax8ca5BzHmKAYcPTdc1YX6in0FLx%2FrnYIvAPdxJGnsISXTZU4Yd7nOhXsajx2ZkiHRXwgEdoOxv9TX%2BLlZPF5oOK7EMNw2thYe2uy3e4FvVPJdouaebrXH99vkPPShsPURTWaVK55PndaeT8NjlDH9m0IBmJ1kyXGvGrbWapcfBcQ6jy2IRlgRqc7y6FoNZubUXixWkJnVlGYYjie95tb%2FObn2lJufnmdsSAJxzuRt3C3FL3hU5ML7NztQGOqUBRKCCvJF8iXK8%2FwMujF3i49o3uKnIczJzbzgXJQehXhIgMin6y2%2F0tBacCaJ49oOzpqAG1gAlyxNmGROvz4ChfVntvirFJ0FUgTNiMLbzVuk0QC390dZS9ATnANzhFCoyouw3W%2BG7cAvL%2Fvs9OMQ9EhpyoL9GoDuph%2FAQBCDYE51cmKZg90xZBAmFk0uloS83o0LfAQnpHdONzPlcrrNZu8dnaMtm&X-Amz-Signature=c780d9963b16157b1cd8453f66ba5617ab2247cfddad0c6aa960c0e04f370b68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZLIZHKX%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDceSmDqcrbF1YJJefkMyLYzudB1FCaWB%2BteCDesF%2BLrAiEAtVUB5PPUYn8oaJvCTPUdEhiw9AXqKBrTHNMcjA08rBgq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDoElyDm4NPz0bXNAircA5agXYkZm6yojD8QnrJjaYJEG4%2FLHsnKTUSbzXRkrlIXcrILeIKVWZfG9C5PudK7RfzgXHet6%2FAUqBy0g1M8ZJeu8qKx7mmYKNkGKremVvscw4bnJX3dhFEAaDyOLvq8RFWArUUVAJAAa9zR%2B63Boutd6Ttd34fXUL%2FiQY%2Fba8xRA17TO5vNp6VWoiIvrytoWEonEd1ytu%2BIPezIg5LTvGCXEsW8SyprD586OMyjW62qzXwmSJM2SZ5RimqYDqGe0uMDX27OERV2An1LZtYp33KGQ9%2FpxtjP6jxI9Ey9Y3c1x6gMuX2sCDJkVLkwK2tZbzxZRPiKEDY0%2F1JqhvwR2cXfGHTVR9iERjaG5i7TZnTZJRvNSMXJkEtqtP45AeODknIYhQHd1Ax8ca5BzHmKAYcPTdc1YX6in0FLx%2FrnYIvAPdxJGnsISXTZU4Yd7nOhXsajx2ZkiHRXwgEdoOxv9TX%2BLlZPF5oOK7EMNw2thYe2uy3e4FvVPJdouaebrXH99vkPPShsPURTWaVK55PndaeT8NjlDH9m0IBmJ1kyXGvGrbWapcfBcQ6jy2IRlgRqc7y6FoNZubUXixWkJnVlGYYjie95tb%2FObn2lJufnmdsSAJxzuRt3C3FL3hU5ML7NztQGOqUBRKCCvJF8iXK8%2FwMujF3i49o3uKnIczJzbzgXJQehXhIgMin6y2%2F0tBacCaJ49oOzpqAG1gAlyxNmGROvz4ChfVntvirFJ0FUgTNiMLbzVuk0QC390dZS9ATnANzhFCoyouw3W%2BG7cAvL%2Fvs9OMQ9EhpyoL9GoDuph%2FAQBCDYE51cmKZg90xZBAmFk0uloS83o0LfAQnpHdONzPlcrrNZu8dnaMtm&X-Amz-Signature=3a3e49117b1b0b3b36a3227bd302cc014bf54b20ab85945c3ecea40929348dd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZLIZHKX%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDceSmDqcrbF1YJJefkMyLYzudB1FCaWB%2BteCDesF%2BLrAiEAtVUB5PPUYn8oaJvCTPUdEhiw9AXqKBrTHNMcjA08rBgq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDoElyDm4NPz0bXNAircA5agXYkZm6yojD8QnrJjaYJEG4%2FLHsnKTUSbzXRkrlIXcrILeIKVWZfG9C5PudK7RfzgXHet6%2FAUqBy0g1M8ZJeu8qKx7mmYKNkGKremVvscw4bnJX3dhFEAaDyOLvq8RFWArUUVAJAAa9zR%2B63Boutd6Ttd34fXUL%2FiQY%2Fba8xRA17TO5vNp6VWoiIvrytoWEonEd1ytu%2BIPezIg5LTvGCXEsW8SyprD586OMyjW62qzXwmSJM2SZ5RimqYDqGe0uMDX27OERV2An1LZtYp33KGQ9%2FpxtjP6jxI9Ey9Y3c1x6gMuX2sCDJkVLkwK2tZbzxZRPiKEDY0%2F1JqhvwR2cXfGHTVR9iERjaG5i7TZnTZJRvNSMXJkEtqtP45AeODknIYhQHd1Ax8ca5BzHmKAYcPTdc1YX6in0FLx%2FrnYIvAPdxJGnsISXTZU4Yd7nOhXsajx2ZkiHRXwgEdoOxv9TX%2BLlZPF5oOK7EMNw2thYe2uy3e4FvVPJdouaebrXH99vkPPShsPURTWaVK55PndaeT8NjlDH9m0IBmJ1kyXGvGrbWapcfBcQ6jy2IRlgRqc7y6FoNZubUXixWkJnVlGYYjie95tb%2FObn2lJufnmdsSAJxzuRt3C3FL3hU5ML7NztQGOqUBRKCCvJF8iXK8%2FwMujF3i49o3uKnIczJzbzgXJQehXhIgMin6y2%2F0tBacCaJ49oOzpqAG1gAlyxNmGROvz4ChfVntvirFJ0FUgTNiMLbzVuk0QC390dZS9ATnANzhFCoyouw3W%2BG7cAvL%2Fvs9OMQ9EhpyoL9GoDuph%2FAQBCDYE51cmKZg90xZBAmFk0uloS83o0LfAQnpHdONzPlcrrNZu8dnaMtm&X-Amz-Signature=b4600655c4cd29fb3c20c40c4f57b999c37e6b70f3604b4ac2cb190c1748542a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


