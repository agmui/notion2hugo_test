---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-07-30T06:25:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 154
toc: false
icon: ""
---

[Articulated Robotics guide](https://youtu.be/eJZXRncGaGM?si=p88bRTyt1R9TyuiY)

---

<details>
      <summary>What is Lidar?</summary>
      Lidar (light detection and ranging) is using lases to determine how far objects are.
  </details>

TODO:

[link to add other sensors (realsense)](https://docs.nav2.org/setup_guides/sensors/setup_sensors_gz.html)

Often in robotics Odometry is updates very quickly but is prone to drift.

On the other hand Lidar is effectively _“ground truth”_ because it can see the world around it however updates very slowly.

By using these two sensors together we can cover each others weaknesses.

In between the long update periods of Lidar we can use Odometry to get an accurate measurement of where we are. Then when the Lidar measurement eventually comes we correct the Odometry’s drift.

Just for this guide we will be sticking to a 2D Lidar but these instructions can be adapted to any kind of Lidar.

Nav2 expects Lidar data to be published on the `/scan` topic with type `sensor_msgs/LaserScan`

## Simulating Lidar in Gazebo

We must first add a Lidar link into our `urdf` to know where it is on the robot.

Also we have to add a Gazebo plugin to tell Gazebo simulate the Lidar

past this at the bottom of the file before the `</robot>` tag

```xml

  <link name="lidar_link">
    <inertial>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <mass value="0.125"/>
      <inertia ixx="0.001" ixy="0" ixz="0" iyy="0.001" iyz="0" izz="0.001" />
    </inertial>

    <collision>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </collision>

    <visual>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </visual>

    <xacro:cylinder_inertia m="0.125" r="0.0508" h="0.055"/>
  </link>

  <joint name="lidar_joint" type="fixed">
    <parent link="base_link"/>
    <child link="lidar_link"/>
    <origin xyz="0 0 0.12" rpy="0 0 0"/>
  </joint>



  <!-- 2D Lidar New Gazebo Sensor Plugin  -->
  <gazebo reference="lidar_link">
    <sensor name="lidar" type="gpu_lidar">
      <always_on>true</always_on>
      <visualize>true</visualize>
      <update_rate>5</update_rate>
      <topic>scan</topic>
      <gz_frame_id>lidar_link</gz_frame_id>
      <lidar>
        <scan>
          <horizontal>
            <samples>360</samples>
            <resolution>1.000000</resolution>
            <min_angle>0.000000</min_angle>
            <max_angle>6.280000</max_angle>
          </horizontal>
        </scan>
        <range>
          <min>0.120000</min>
          <max>12.0</max>
          <resolution>0.015000</resolution>
        </range>
        <noise>
          <type>gaussian</type>
          <mean>0.0</mean>
          <stddev>0.02</stddev>
        </noise>
      </lidar>
    </sensor>
  </gazebo>
```

### Adding `/scan` topic in `bridge_config.yaml`

We have to bridge over the `/scan` topic from Gazebo

```yaml
- ros_topic_name: "/scan"
	gz_topic_name: "/scan"
	ros_type_name: "sensor_msgs/msg/LaserScan"
	gz_type_name: "gz.msgs.LaserScan"
	direction: GZ_TO_ROS
```

**Run:**

```xml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

### Lidar Rviz display

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXAUUTWN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCR2Kcm4brCwVmLpP1cdxY3rxwMRYk6djK1%2BVVKzDaiGgIgPV5R8f8cxPk1WlxXAFNDBwO7tG6K0SVbJcuXLmfqUfcqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZVjfbpytVQeKsyuircA7gzdGFoXl5ZKN6tXx8Ibir4ZTAn0rF9tf%2F%2FXriHpnOw0aXRTaTyXks8uP62yIIsiVYGsi8EZFenxb58rZbtgm1tdIz%2FQJIo6t2I4xRJIJ%2FiGMq2fgMH8%2F6167UgQP%2BprmgmDOAPr3a30T6bAMZL2aEuYQWzVbJruetkioQROHQarWnXk1VGxc2GJ3KqKjfmOWh%2Bo51plxQmi9gzgBVGwLDmJ7ggdpAe6tkhI1XsP6GrcEAArt1z1kxiqpaeiRAU08R8xMNzE83Hy3qcOpNHs2pyJ2OfGQ67DHwE3kvSsgcYEb0NU4izDTygQmfSk5fcfNn2gr%2BtVF53INqF9l60LhBKanwJf3MU1mQmv9h8x8sDHFhGzUP5iwrxvXVRSwel8GvcI3R3GH%2BZYWafhwuunu6HzGb1F7s0eY6mkpHel6Vy4Fh0CZcxj7ikDwZbGNq%2BTm3mCNLossJQ5X4tmhGN%2F15dGw9XsR3zTHvQCJ3Jb5Hf6NUWMcSVBNUvyW5tJolv9KGGZiuB%2BXZKT1t7PUjLGbr0tNCOVdoG4%2FocnMzTRRpcjodDYGRDjqzS9U697GjeB%2FnsVmLXgkWKmXv2o8K9axpJ%2FTx8YLPBD8cyYs3g2G7KXiqM18wHDg4K7TlXMLiRrsQGOqUBebYwvD6R5nIX5lIDgb2dOvu1CvEv1IWrrJuR3pBcsptU1mLhGrsWe6isXxIb9zMuI0b0wyI%2FjVWqMVkj2uSBa4dlWSEscCE0FDAgzpXljyzFtonICsX756%2FvhFUWUDofwa%2BE2JW4KbcWPWX6KjzY%2BdF1plfeRet73BDqdxzfjmhMSDY4AUO1sjLEC3IZVDdU5oytdhjpbN5hzwpjLk68lx6tYUGK&X-Amz-Signature=16af1776f7d30367a0b414e7295922411bb0831d05d79b89049fa27bf41fd7a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXAUUTWN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCR2Kcm4brCwVmLpP1cdxY3rxwMRYk6djK1%2BVVKzDaiGgIgPV5R8f8cxPk1WlxXAFNDBwO7tG6K0SVbJcuXLmfqUfcqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZVjfbpytVQeKsyuircA7gzdGFoXl5ZKN6tXx8Ibir4ZTAn0rF9tf%2F%2FXriHpnOw0aXRTaTyXks8uP62yIIsiVYGsi8EZFenxb58rZbtgm1tdIz%2FQJIo6t2I4xRJIJ%2FiGMq2fgMH8%2F6167UgQP%2BprmgmDOAPr3a30T6bAMZL2aEuYQWzVbJruetkioQROHQarWnXk1VGxc2GJ3KqKjfmOWh%2Bo51plxQmi9gzgBVGwLDmJ7ggdpAe6tkhI1XsP6GrcEAArt1z1kxiqpaeiRAU08R8xMNzE83Hy3qcOpNHs2pyJ2OfGQ67DHwE3kvSsgcYEb0NU4izDTygQmfSk5fcfNn2gr%2BtVF53INqF9l60LhBKanwJf3MU1mQmv9h8x8sDHFhGzUP5iwrxvXVRSwel8GvcI3R3GH%2BZYWafhwuunu6HzGb1F7s0eY6mkpHel6Vy4Fh0CZcxj7ikDwZbGNq%2BTm3mCNLossJQ5X4tmhGN%2F15dGw9XsR3zTHvQCJ3Jb5Hf6NUWMcSVBNUvyW5tJolv9KGGZiuB%2BXZKT1t7PUjLGbr0tNCOVdoG4%2FocnMzTRRpcjodDYGRDjqzS9U697GjeB%2FnsVmLXgkWKmXv2o8K9axpJ%2FTx8YLPBD8cyYs3g2G7KXiqM18wHDg4K7TlXMLiRrsQGOqUBebYwvD6R5nIX5lIDgb2dOvu1CvEv1IWrrJuR3pBcsptU1mLhGrsWe6isXxIb9zMuI0b0wyI%2FjVWqMVkj2uSBa4dlWSEscCE0FDAgzpXljyzFtonICsX756%2FvhFUWUDofwa%2BE2JW4KbcWPWX6KjzY%2BdF1plfeRet73BDqdxzfjmhMSDY4AUO1sjLEC3IZVDdU5oytdhjpbN5hzwpjLk68lx6tYUGK&X-Amz-Signature=ad21cdbdbd3d5b7c438611f94f4e5bf3b9e3b0adc521d058f4352720732483bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXAUUTWN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCR2Kcm4brCwVmLpP1cdxY3rxwMRYk6djK1%2BVVKzDaiGgIgPV5R8f8cxPk1WlxXAFNDBwO7tG6K0SVbJcuXLmfqUfcqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZVjfbpytVQeKsyuircA7gzdGFoXl5ZKN6tXx8Ibir4ZTAn0rF9tf%2F%2FXriHpnOw0aXRTaTyXks8uP62yIIsiVYGsi8EZFenxb58rZbtgm1tdIz%2FQJIo6t2I4xRJIJ%2FiGMq2fgMH8%2F6167UgQP%2BprmgmDOAPr3a30T6bAMZL2aEuYQWzVbJruetkioQROHQarWnXk1VGxc2GJ3KqKjfmOWh%2Bo51plxQmi9gzgBVGwLDmJ7ggdpAe6tkhI1XsP6GrcEAArt1z1kxiqpaeiRAU08R8xMNzE83Hy3qcOpNHs2pyJ2OfGQ67DHwE3kvSsgcYEb0NU4izDTygQmfSk5fcfNn2gr%2BtVF53INqF9l60LhBKanwJf3MU1mQmv9h8x8sDHFhGzUP5iwrxvXVRSwel8GvcI3R3GH%2BZYWafhwuunu6HzGb1F7s0eY6mkpHel6Vy4Fh0CZcxj7ikDwZbGNq%2BTm3mCNLossJQ5X4tmhGN%2F15dGw9XsR3zTHvQCJ3Jb5Hf6NUWMcSVBNUvyW5tJolv9KGGZiuB%2BXZKT1t7PUjLGbr0tNCOVdoG4%2FocnMzTRRpcjodDYGRDjqzS9U697GjeB%2FnsVmLXgkWKmXv2o8K9axpJ%2FTx8YLPBD8cyYs3g2G7KXiqM18wHDg4K7TlXMLiRrsQGOqUBebYwvD6R5nIX5lIDgb2dOvu1CvEv1IWrrJuR3pBcsptU1mLhGrsWe6isXxIb9zMuI0b0wyI%2FjVWqMVkj2uSBa4dlWSEscCE0FDAgzpXljyzFtonICsX756%2FvhFUWUDofwa%2BE2JW4KbcWPWX6KjzY%2BdF1plfeRet73BDqdxzfjmhMSDY4AUO1sjLEC3IZVDdU5oytdhjpbN5hzwpjLk68lx6tYUGK&X-Amz-Signature=ac746c8d6e256026b60148682921f03218fbc953ac457e2e6fc4be580ad274e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXAUUTWN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCR2Kcm4brCwVmLpP1cdxY3rxwMRYk6djK1%2BVVKzDaiGgIgPV5R8f8cxPk1WlxXAFNDBwO7tG6K0SVbJcuXLmfqUfcqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZVjfbpytVQeKsyuircA7gzdGFoXl5ZKN6tXx8Ibir4ZTAn0rF9tf%2F%2FXriHpnOw0aXRTaTyXks8uP62yIIsiVYGsi8EZFenxb58rZbtgm1tdIz%2FQJIo6t2I4xRJIJ%2FiGMq2fgMH8%2F6167UgQP%2BprmgmDOAPr3a30T6bAMZL2aEuYQWzVbJruetkioQROHQarWnXk1VGxc2GJ3KqKjfmOWh%2Bo51plxQmi9gzgBVGwLDmJ7ggdpAe6tkhI1XsP6GrcEAArt1z1kxiqpaeiRAU08R8xMNzE83Hy3qcOpNHs2pyJ2OfGQ67DHwE3kvSsgcYEb0NU4izDTygQmfSk5fcfNn2gr%2BtVF53INqF9l60LhBKanwJf3MU1mQmv9h8x8sDHFhGzUP5iwrxvXVRSwel8GvcI3R3GH%2BZYWafhwuunu6HzGb1F7s0eY6mkpHel6Vy4Fh0CZcxj7ikDwZbGNq%2BTm3mCNLossJQ5X4tmhGN%2F15dGw9XsR3zTHvQCJ3Jb5Hf6NUWMcSVBNUvyW5tJolv9KGGZiuB%2BXZKT1t7PUjLGbr0tNCOVdoG4%2FocnMzTRRpcjodDYGRDjqzS9U697GjeB%2FnsVmLXgkWKmXv2o8K9axpJ%2FTx8YLPBD8cyYs3g2G7KXiqM18wHDg4K7TlXMLiRrsQGOqUBebYwvD6R5nIX5lIDgb2dOvu1CvEv1IWrrJuR3pBcsptU1mLhGrsWe6isXxIb9zMuI0b0wyI%2FjVWqMVkj2uSBa4dlWSEscCE0FDAgzpXljyzFtonICsX756%2FvhFUWUDofwa%2BE2JW4KbcWPWX6KjzY%2BdF1plfeRet73BDqdxzfjmhMSDY4AUO1sjLEC3IZVDdU5oytdhjpbN5hzwpjLk68lx6tYUGK&X-Amz-Signature=8018ff2f2e4db3b161609cc1c209a04e690cf859d7db91f630cbe5c1df04521d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXAUUTWN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCR2Kcm4brCwVmLpP1cdxY3rxwMRYk6djK1%2BVVKzDaiGgIgPV5R8f8cxPk1WlxXAFNDBwO7tG6K0SVbJcuXLmfqUfcqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZVjfbpytVQeKsyuircA7gzdGFoXl5ZKN6tXx8Ibir4ZTAn0rF9tf%2F%2FXriHpnOw0aXRTaTyXks8uP62yIIsiVYGsi8EZFenxb58rZbtgm1tdIz%2FQJIo6t2I4xRJIJ%2FiGMq2fgMH8%2F6167UgQP%2BprmgmDOAPr3a30T6bAMZL2aEuYQWzVbJruetkioQROHQarWnXk1VGxc2GJ3KqKjfmOWh%2Bo51plxQmi9gzgBVGwLDmJ7ggdpAe6tkhI1XsP6GrcEAArt1z1kxiqpaeiRAU08R8xMNzE83Hy3qcOpNHs2pyJ2OfGQ67DHwE3kvSsgcYEb0NU4izDTygQmfSk5fcfNn2gr%2BtVF53INqF9l60LhBKanwJf3MU1mQmv9h8x8sDHFhGzUP5iwrxvXVRSwel8GvcI3R3GH%2BZYWafhwuunu6HzGb1F7s0eY6mkpHel6Vy4Fh0CZcxj7ikDwZbGNq%2BTm3mCNLossJQ5X4tmhGN%2F15dGw9XsR3zTHvQCJ3Jb5Hf6NUWMcSVBNUvyW5tJolv9KGGZiuB%2BXZKT1t7PUjLGbr0tNCOVdoG4%2FocnMzTRRpcjodDYGRDjqzS9U697GjeB%2FnsVmLXgkWKmXv2o8K9axpJ%2FTx8YLPBD8cyYs3g2G7KXiqM18wHDg4K7TlXMLiRrsQGOqUBebYwvD6R5nIX5lIDgb2dOvu1CvEv1IWrrJuR3pBcsptU1mLhGrsWe6isXxIb9zMuI0b0wyI%2FjVWqMVkj2uSBa4dlWSEscCE0FDAgzpXljyzFtonICsX756%2FvhFUWUDofwa%2BE2JW4KbcWPWX6KjzY%2BdF1plfeRet73BDqdxzfjmhMSDY4AUO1sjLEC3IZVDdU5oytdhjpbN5hzwpjLk68lx6tYUGK&X-Amz-Signature=62a4bd1e984170959e8f0f4f46ab28128c0cd8eb16420982a0cef35867f80723&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXAUUTWN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCR2Kcm4brCwVmLpP1cdxY3rxwMRYk6djK1%2BVVKzDaiGgIgPV5R8f8cxPk1WlxXAFNDBwO7tG6K0SVbJcuXLmfqUfcqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZVjfbpytVQeKsyuircA7gzdGFoXl5ZKN6tXx8Ibir4ZTAn0rF9tf%2F%2FXriHpnOw0aXRTaTyXks8uP62yIIsiVYGsi8EZFenxb58rZbtgm1tdIz%2FQJIo6t2I4xRJIJ%2FiGMq2fgMH8%2F6167UgQP%2BprmgmDOAPr3a30T6bAMZL2aEuYQWzVbJruetkioQROHQarWnXk1VGxc2GJ3KqKjfmOWh%2Bo51plxQmi9gzgBVGwLDmJ7ggdpAe6tkhI1XsP6GrcEAArt1z1kxiqpaeiRAU08R8xMNzE83Hy3qcOpNHs2pyJ2OfGQ67DHwE3kvSsgcYEb0NU4izDTygQmfSk5fcfNn2gr%2BtVF53INqF9l60LhBKanwJf3MU1mQmv9h8x8sDHFhGzUP5iwrxvXVRSwel8GvcI3R3GH%2BZYWafhwuunu6HzGb1F7s0eY6mkpHel6Vy4Fh0CZcxj7ikDwZbGNq%2BTm3mCNLossJQ5X4tmhGN%2F15dGw9XsR3zTHvQCJ3Jb5Hf6NUWMcSVBNUvyW5tJolv9KGGZiuB%2BXZKT1t7PUjLGbr0tNCOVdoG4%2FocnMzTRRpcjodDYGRDjqzS9U697GjeB%2FnsVmLXgkWKmXv2o8K9axpJ%2FTx8YLPBD8cyYs3g2G7KXiqM18wHDg4K7TlXMLiRrsQGOqUBebYwvD6R5nIX5lIDgb2dOvu1CvEv1IWrrJuR3pBcsptU1mLhGrsWe6isXxIb9zMuI0b0wyI%2FjVWqMVkj2uSBa4dlWSEscCE0FDAgzpXljyzFtonICsX756%2FvhFUWUDofwa%2BE2JW4KbcWPWX6KjzY%2BdF1plfeRet73BDqdxzfjmhMSDY4AUO1sjLEC3IZVDdU5oytdhjpbN5hzwpjLk68lx6tYUGK&X-Amz-Signature=ff9fa2fb83d83b00399fb38897234b1f320eee20f7ae75b13f2f53462b4a6ff9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXAUUTWN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCR2Kcm4brCwVmLpP1cdxY3rxwMRYk6djK1%2BVVKzDaiGgIgPV5R8f8cxPk1WlxXAFNDBwO7tG6K0SVbJcuXLmfqUfcqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZVjfbpytVQeKsyuircA7gzdGFoXl5ZKN6tXx8Ibir4ZTAn0rF9tf%2F%2FXriHpnOw0aXRTaTyXks8uP62yIIsiVYGsi8EZFenxb58rZbtgm1tdIz%2FQJIo6t2I4xRJIJ%2FiGMq2fgMH8%2F6167UgQP%2BprmgmDOAPr3a30T6bAMZL2aEuYQWzVbJruetkioQROHQarWnXk1VGxc2GJ3KqKjfmOWh%2Bo51plxQmi9gzgBVGwLDmJ7ggdpAe6tkhI1XsP6GrcEAArt1z1kxiqpaeiRAU08R8xMNzE83Hy3qcOpNHs2pyJ2OfGQ67DHwE3kvSsgcYEb0NU4izDTygQmfSk5fcfNn2gr%2BtVF53INqF9l60LhBKanwJf3MU1mQmv9h8x8sDHFhGzUP5iwrxvXVRSwel8GvcI3R3GH%2BZYWafhwuunu6HzGb1F7s0eY6mkpHel6Vy4Fh0CZcxj7ikDwZbGNq%2BTm3mCNLossJQ5X4tmhGN%2F15dGw9XsR3zTHvQCJ3Jb5Hf6NUWMcSVBNUvyW5tJolv9KGGZiuB%2BXZKT1t7PUjLGbr0tNCOVdoG4%2FocnMzTRRpcjodDYGRDjqzS9U697GjeB%2FnsVmLXgkWKmXv2o8K9axpJ%2FTx8YLPBD8cyYs3g2G7KXiqM18wHDg4K7TlXMLiRrsQGOqUBebYwvD6R5nIX5lIDgb2dOvu1CvEv1IWrrJuR3pBcsptU1mLhGrsWe6isXxIb9zMuI0b0wyI%2FjVWqMVkj2uSBa4dlWSEscCE0FDAgzpXljyzFtonICsX756%2FvhFUWUDofwa%2BE2JW4KbcWPWX6KjzY%2BdF1plfeRet73BDqdxzfjmhMSDY4AUO1sjLEC3IZVDdU5oytdhjpbN5hzwpjLk68lx6tYUGK&X-Amz-Signature=cdc2d8ee8820278592a161d73b5ca506643e327ac5e01750202e4fa8d51d2c37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXAUUTWN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCR2Kcm4brCwVmLpP1cdxY3rxwMRYk6djK1%2BVVKzDaiGgIgPV5R8f8cxPk1WlxXAFNDBwO7tG6K0SVbJcuXLmfqUfcqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZVjfbpytVQeKsyuircA7gzdGFoXl5ZKN6tXx8Ibir4ZTAn0rF9tf%2F%2FXriHpnOw0aXRTaTyXks8uP62yIIsiVYGsi8EZFenxb58rZbtgm1tdIz%2FQJIo6t2I4xRJIJ%2FiGMq2fgMH8%2F6167UgQP%2BprmgmDOAPr3a30T6bAMZL2aEuYQWzVbJruetkioQROHQarWnXk1VGxc2GJ3KqKjfmOWh%2Bo51plxQmi9gzgBVGwLDmJ7ggdpAe6tkhI1XsP6GrcEAArt1z1kxiqpaeiRAU08R8xMNzE83Hy3qcOpNHs2pyJ2OfGQ67DHwE3kvSsgcYEb0NU4izDTygQmfSk5fcfNn2gr%2BtVF53INqF9l60LhBKanwJf3MU1mQmv9h8x8sDHFhGzUP5iwrxvXVRSwel8GvcI3R3GH%2BZYWafhwuunu6HzGb1F7s0eY6mkpHel6Vy4Fh0CZcxj7ikDwZbGNq%2BTm3mCNLossJQ5X4tmhGN%2F15dGw9XsR3zTHvQCJ3Jb5Hf6NUWMcSVBNUvyW5tJolv9KGGZiuB%2BXZKT1t7PUjLGbr0tNCOVdoG4%2FocnMzTRRpcjodDYGRDjqzS9U697GjeB%2FnsVmLXgkWKmXv2o8K9axpJ%2FTx8YLPBD8cyYs3g2G7KXiqM18wHDg4K7TlXMLiRrsQGOqUBebYwvD6R5nIX5lIDgb2dOvu1CvEv1IWrrJuR3pBcsptU1mLhGrsWe6isXxIb9zMuI0b0wyI%2FjVWqMVkj2uSBa4dlWSEscCE0FDAgzpXljyzFtonICsX756%2FvhFUWUDofwa%2BE2JW4KbcWPWX6KjzY%2BdF1plfeRet73BDqdxzfjmhMSDY4AUO1sjLEC3IZVDdU5oytdhjpbN5hzwpjLk68lx6tYUGK&X-Amz-Signature=bc5c5f953597300020484a5255c1fab5161ab84568c15bd494f2db84bdffa1b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**          | **Type**             |
| ----------------- | -------------------- |
| `serial_port`     | string               |
| `serial_baudrate` | int (model specific) |
| `frame_id`        | string               |
| `scan_mode`       | string               |

{{< /table >}}

#### description:

publishes the `/scan` topic for RPLIDAR products

TODO: get official docs link

{{% /alert %}}

Remember to disable gazebo nodes for physical setup

```python

    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        # ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        # gz_server,
        # ros_gz_bridge,
        # spawn_entity,
    ])
```

<details>
      <summary>Finding Lidar USB port:</summary>
      ```bash
ls /dev/ttyUSB*
```
  </details>

To launch the Lidar node use this command below.

 

{{% alert context="warning" %}}

# NOTE: YOUR RPLIDAR MODEL MIGHT BE DIFFERENT

I am using the a2m8 model so I run the launch file below.

However, your model may be different so please look at this guide to find which launch file to run.

[https://github.com/Slamtec/rplidar_ros/tree/ros2#run-rplidar-node-and-view-in-the-rviz](https://github.com/Slamtec/rplidar_ros/tree/ros2#run-rplidar-node-and-view-in-the-rviz)

{{% /alert %}}

```bash
ros2 launch rplidar_ros view_rplidar_a2m8_launch.py scan_mode:=Boost serial_port:=/dev/ttyUSB0
```

```xml
ros2 launch mbot_pkg display.launch.py
```

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXAUUTWN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCR2Kcm4brCwVmLpP1cdxY3rxwMRYk6djK1%2BVVKzDaiGgIgPV5R8f8cxPk1WlxXAFNDBwO7tG6K0SVbJcuXLmfqUfcqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZVjfbpytVQeKsyuircA7gzdGFoXl5ZKN6tXx8Ibir4ZTAn0rF9tf%2F%2FXriHpnOw0aXRTaTyXks8uP62yIIsiVYGsi8EZFenxb58rZbtgm1tdIz%2FQJIo6t2I4xRJIJ%2FiGMq2fgMH8%2F6167UgQP%2BprmgmDOAPr3a30T6bAMZL2aEuYQWzVbJruetkioQROHQarWnXk1VGxc2GJ3KqKjfmOWh%2Bo51plxQmi9gzgBVGwLDmJ7ggdpAe6tkhI1XsP6GrcEAArt1z1kxiqpaeiRAU08R8xMNzE83Hy3qcOpNHs2pyJ2OfGQ67DHwE3kvSsgcYEb0NU4izDTygQmfSk5fcfNn2gr%2BtVF53INqF9l60LhBKanwJf3MU1mQmv9h8x8sDHFhGzUP5iwrxvXVRSwel8GvcI3R3GH%2BZYWafhwuunu6HzGb1F7s0eY6mkpHel6Vy4Fh0CZcxj7ikDwZbGNq%2BTm3mCNLossJQ5X4tmhGN%2F15dGw9XsR3zTHvQCJ3Jb5Hf6NUWMcSVBNUvyW5tJolv9KGGZiuB%2BXZKT1t7PUjLGbr0tNCOVdoG4%2FocnMzTRRpcjodDYGRDjqzS9U697GjeB%2FnsVmLXgkWKmXv2o8K9axpJ%2FTx8YLPBD8cyYs3g2G7KXiqM18wHDg4K7TlXMLiRrsQGOqUBebYwvD6R5nIX5lIDgb2dOvu1CvEv1IWrrJuR3pBcsptU1mLhGrsWe6isXxIb9zMuI0b0wyI%2FjVWqMVkj2uSBa4dlWSEscCE0FDAgzpXljyzFtonICsX756%2FvhFUWUDofwa%2BE2JW4KbcWPWX6KjzY%2BdF1plfeRet73BDqdxzfjmhMSDY4AUO1sjLEC3IZVDdU5oytdhjpbN5hzwpjLk68lx6tYUGK&X-Amz-Signature=801f94a52ee7e51f09099222172a5c5309a085e59a4ef2579a1c5241669b35ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO: rviz img

## Adding RPLidar to launch

idk tell them to look at the launch file to see which exact prams to put in

```python

 def generate_launch_description():
		 ...
		 
     lidar_node = Node(
        package='rplidar_ros',
        executable='rplidar_node',
        name='rplidar_node',
        parameters=[{'channel_type': 'serial',
                     'serial_port': '/dev/ttyUSB0', #recomended to do /dev/serial/by-path/...
                     'serial_baudrate': 115200,
                     'frame_id': 'lidar_link',
                     'scan_mode': 'Boost'}],
        output='screen')

 
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        # ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        # gz_server,
        # ros_gz_bridge,
        # spawn_entity,
        
        lidar_node # lidar for physical setup 
    ])
```

**Result:**

```xml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

TODO: add rviz section

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXAUUTWN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCR2Kcm4brCwVmLpP1cdxY3rxwMRYk6djK1%2BVVKzDaiGgIgPV5R8f8cxPk1WlxXAFNDBwO7tG6K0SVbJcuXLmfqUfcqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZVjfbpytVQeKsyuircA7gzdGFoXl5ZKN6tXx8Ibir4ZTAn0rF9tf%2F%2FXriHpnOw0aXRTaTyXks8uP62yIIsiVYGsi8EZFenxb58rZbtgm1tdIz%2FQJIo6t2I4xRJIJ%2FiGMq2fgMH8%2F6167UgQP%2BprmgmDOAPr3a30T6bAMZL2aEuYQWzVbJruetkioQROHQarWnXk1VGxc2GJ3KqKjfmOWh%2Bo51plxQmi9gzgBVGwLDmJ7ggdpAe6tkhI1XsP6GrcEAArt1z1kxiqpaeiRAU08R8xMNzE83Hy3qcOpNHs2pyJ2OfGQ67DHwE3kvSsgcYEb0NU4izDTygQmfSk5fcfNn2gr%2BtVF53INqF9l60LhBKanwJf3MU1mQmv9h8x8sDHFhGzUP5iwrxvXVRSwel8GvcI3R3GH%2BZYWafhwuunu6HzGb1F7s0eY6mkpHel6Vy4Fh0CZcxj7ikDwZbGNq%2BTm3mCNLossJQ5X4tmhGN%2F15dGw9XsR3zTHvQCJ3Jb5Hf6NUWMcSVBNUvyW5tJolv9KGGZiuB%2BXZKT1t7PUjLGbr0tNCOVdoG4%2FocnMzTRRpcjodDYGRDjqzS9U697GjeB%2FnsVmLXgkWKmXv2o8K9axpJ%2FTx8YLPBD8cyYs3g2G7KXiqM18wHDg4K7TlXMLiRrsQGOqUBebYwvD6R5nIX5lIDgb2dOvu1CvEv1IWrrJuR3pBcsptU1mLhGrsWe6isXxIb9zMuI0b0wyI%2FjVWqMVkj2uSBa4dlWSEscCE0FDAgzpXljyzFtonICsX756%2FvhFUWUDofwa%2BE2JW4KbcWPWX6KjzY%2BdF1plfeRet73BDqdxzfjmhMSDY4AUO1sjLEC3IZVDdU5oytdhjpbN5hzwpjLk68lx6tYUGK&X-Amz-Signature=64c4482280a20ce485c83d0f704b321fafab2e33dad76b228b019c2e9152d06d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
