---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-08-03T21:37:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-08-03T21:37:00.000Z"
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
  <summary>{{< markdownify >}}What is Lidar?{{< /markdownify >}}</summary>
  
Lidar (light detection and ranging) is using lases to determine how far objects are.

TODO

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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml

  <link name="lidar_link">
    <visual>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </visual>

    <collision>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </collision>

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

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2OFT2D4%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCICNzoDqYR3XI31l0v9vF5gU%2Bgf0kyFod5DVokGzTB8nWAiA7MAGbDwi1yWFuu2RKAOv04%2FAwtNcM1i3iIk79KIRp3CqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM989jBIQ0BD7i1%2F95KtwDYccUtDtOkCDS4CpCzmMvJS4OLdj95xbqbv%2B4UId%2BwzC4NbLvYiQ%2BNah1WTnNuC1Wn109NPNFw%2F0KiFlYHPRHgxLOtFOMgNKrN7EEG8IGu%2B%2BLrIaqy9HTU%2FDi%2F0jmlzS0YE92Q00PkLyPpG%2FQdOWCWalrAFwxqhAeeIan3Oc9FDAUiYJ90lL6XLqT2HK2pIpdbYw3XMLCbM%2FjnBXmnwG0lUCIWuHlV4a2FqfLsDREEBm9PBGEUkQIA8sPhNLzJbGrTQFGfObTi%2BhfyIEcUm1t88lv8Kam5e%2BbOz1WKWypgc74rdzBtQ3Httq3ktoCcAwp6jb4UN2VeuLJhWQw0Tj%2F3Nwx4rdForlLaBSpjz%2FJsEL3F0wj%2BIm520tMTFkVjZPdN%2F6E72FM4KdOcTE2K6zObOgK5F4kd4mpg0wzXu0vb7G65upUhinmgCiy%2BKLb2Zsfti3mGtycGRSFoQhhrOnvXOz1nUs%2BbrfKvtGlhdkW2UUkQBOo%2BhYr%2BXbB91nYpoWW4YwCuNXkvpjQMPjWKafFaJ4wHWumwCvIBXwblIpgIJtVKr5CfvpqVMj4%2Fii4XqxRN2E7Kpy0iYKqNu0PA6LyUFpdQFI44qa7mvjr4YFLLOGacRSeAWjOWoX35Acwi9jFywY6pgGuYq2gr8QKlnCUakd%2Bwp1EqvBeI3HjIeiirZEwAVuWi8pgq%2F617ea354yrOfV6prBkXVJmRnwZjGisESZP5Nk7vb%2Bsl3lB2cbCAT4e8f6CY2aav0iWEPkpQFpsZLAoyIjferA4C7Fp6vVXhyzkFi8%2FCfPAE3KIq%2BZzyk5BM75QdRqM3oiqKCs2p%2Fjacoi1J%2BbqhqCNA3tLxvhijF43SfuzUnRI6muo&X-Amz-Signature=c6ff0a289b48a736b16edbdaaec76a95995ca3cbdf6b93feb70ef9841ccbfd28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UGNIE3V%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDGiTHu1JcvQiqM4p7F6%2FQMPVhtqQCmPW1a0IXo1SacgQIhAIX5duuX9SGrJUjPUuS3dCWGDRAjqIbvV97UcQznJwCvKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8aJPuxxb%2Fb%2BQ3cw0q3APZ0akE91zcdOHXUeJUntkgdletDViqmeQlk2czlqaeqeX%2BncBv2qv0XHeuKn4VD6XuEZRJroSJAf3oGYAZrDmgDsADkufHAcW%2FeXHhWs9q%2BDAAlO3xtAKGnMGvfvBdCsZiO4YH6Ydb4hIQEwRCGFJy7VT4009oJloYx1V7RaWB%2FurMwWTaazEiJxBIe2Gl0Bh5CmOHoQVVSQXkTFQ7bvk9n38UC5EgE6f0abgBJR8JhHOVuRmzOFp5cvVDotC7buzED224nkh6CwLcLVjKT%2FFk3hmvmxSc7pcnOl8QYugWM2C3Z3LnQEnLa2mNC9S6GPBHaCXD0OfY4ZokY%2FFItYXxE2GZonVVVFKN6LxagkTzi%2Fbh4W5lRURwqPpXCZl9MDI73SD6zyftt7f7L1%2FyxWGWPQpt%2BVKwKqqi%2BrTcC12LJ6foI1aWDrxayHam%2BRhh0EMPLm71BzRBa2zuALAnImqrB3HIQGdmLEBYXDISEXD5NCpL2WCTBUhPdBIS8YOLOgGPNX4i5aY6qs89ZpTkehNW0%2Fu4RdlqJ8dUh7JuSkoPbzwG2dNtwekpAO%2BXO%2FVJOrbo0HuW%2FtMePzellFJnW0%2B7I40z20qohS2%2B0vQxhBEGP0zTYKEJsKM0yKaM6jDH18XLBjqkAe6OH%2F%2F%2BtAWgOYhxZZg7Fhnuohuu2jBW95Cqs%2BcRGe78k9yBmZGhkyp3f%2BXP32phCML2fTsVExh2Sa07Bm1%2BkGjc85%2FLhmnQPtBJbIknm94bCckTLTvOzwGksas2zY1W1Ngrt4MhRx9ITsTjVlnkwhJtN0QWLjwFFfkdJa%2FJgd%2BBPAZDkVkIwGO0TdHwV36LbtMQObk6iMC1hF%2FFIdXK3qGdW%2Fbx&X-Amz-Signature=ea18cf701b067678ab22d2e0fe60c651598cc3f5a31e69ae77dddbea355854e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UGNIE3V%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDGiTHu1JcvQiqM4p7F6%2FQMPVhtqQCmPW1a0IXo1SacgQIhAIX5duuX9SGrJUjPUuS3dCWGDRAjqIbvV97UcQznJwCvKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8aJPuxxb%2Fb%2BQ3cw0q3APZ0akE91zcdOHXUeJUntkgdletDViqmeQlk2czlqaeqeX%2BncBv2qv0XHeuKn4VD6XuEZRJroSJAf3oGYAZrDmgDsADkufHAcW%2FeXHhWs9q%2BDAAlO3xtAKGnMGvfvBdCsZiO4YH6Ydb4hIQEwRCGFJy7VT4009oJloYx1V7RaWB%2FurMwWTaazEiJxBIe2Gl0Bh5CmOHoQVVSQXkTFQ7bvk9n38UC5EgE6f0abgBJR8JhHOVuRmzOFp5cvVDotC7buzED224nkh6CwLcLVjKT%2FFk3hmvmxSc7pcnOl8QYugWM2C3Z3LnQEnLa2mNC9S6GPBHaCXD0OfY4ZokY%2FFItYXxE2GZonVVVFKN6LxagkTzi%2Fbh4W5lRURwqPpXCZl9MDI73SD6zyftt7f7L1%2FyxWGWPQpt%2BVKwKqqi%2BrTcC12LJ6foI1aWDrxayHam%2BRhh0EMPLm71BzRBa2zuALAnImqrB3HIQGdmLEBYXDISEXD5NCpL2WCTBUhPdBIS8YOLOgGPNX4i5aY6qs89ZpTkehNW0%2Fu4RdlqJ8dUh7JuSkoPbzwG2dNtwekpAO%2BXO%2FVJOrbo0HuW%2FtMePzellFJnW0%2B7I40z20qohS2%2B0vQxhBEGP0zTYKEJsKM0yKaM6jDH18XLBjqkAe6OH%2F%2F%2BtAWgOYhxZZg7Fhnuohuu2jBW95Cqs%2BcRGe78k9yBmZGhkyp3f%2BXP32phCML2fTsVExh2Sa07Bm1%2BkGjc85%2FLhmnQPtBJbIknm94bCckTLTvOzwGksas2zY1W1Ngrt4MhRx9ITsTjVlnkwhJtN0QWLjwFFfkdJa%2FJgd%2BBPAZDkVkIwGO0TdHwV36LbtMQObk6iMC1hF%2FFIdXK3qGdW%2Fbx&X-Amz-Signature=48163fdcdb6192493e15b28f2fae881682a1c79cf7e6bda2f0d30994de555557&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UGNIE3V%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDGiTHu1JcvQiqM4p7F6%2FQMPVhtqQCmPW1a0IXo1SacgQIhAIX5duuX9SGrJUjPUuS3dCWGDRAjqIbvV97UcQznJwCvKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8aJPuxxb%2Fb%2BQ3cw0q3APZ0akE91zcdOHXUeJUntkgdletDViqmeQlk2czlqaeqeX%2BncBv2qv0XHeuKn4VD6XuEZRJroSJAf3oGYAZrDmgDsADkufHAcW%2FeXHhWs9q%2BDAAlO3xtAKGnMGvfvBdCsZiO4YH6Ydb4hIQEwRCGFJy7VT4009oJloYx1V7RaWB%2FurMwWTaazEiJxBIe2Gl0Bh5CmOHoQVVSQXkTFQ7bvk9n38UC5EgE6f0abgBJR8JhHOVuRmzOFp5cvVDotC7buzED224nkh6CwLcLVjKT%2FFk3hmvmxSc7pcnOl8QYugWM2C3Z3LnQEnLa2mNC9S6GPBHaCXD0OfY4ZokY%2FFItYXxE2GZonVVVFKN6LxagkTzi%2Fbh4W5lRURwqPpXCZl9MDI73SD6zyftt7f7L1%2FyxWGWPQpt%2BVKwKqqi%2BrTcC12LJ6foI1aWDrxayHam%2BRhh0EMPLm71BzRBa2zuALAnImqrB3HIQGdmLEBYXDISEXD5NCpL2WCTBUhPdBIS8YOLOgGPNX4i5aY6qs89ZpTkehNW0%2Fu4RdlqJ8dUh7JuSkoPbzwG2dNtwekpAO%2BXO%2FVJOrbo0HuW%2FtMePzellFJnW0%2B7I40z20qohS2%2B0vQxhBEGP0zTYKEJsKM0yKaM6jDH18XLBjqkAe6OH%2F%2F%2BtAWgOYhxZZg7Fhnuohuu2jBW95Cqs%2BcRGe78k9yBmZGhkyp3f%2BXP32phCML2fTsVExh2Sa07Bm1%2BkGjc85%2FLhmnQPtBJbIknm94bCckTLTvOzwGksas2zY1W1Ngrt4MhRx9ITsTjVlnkwhJtN0QWLjwFFfkdJa%2FJgd%2BBPAZDkVkIwGO0TdHwV36LbtMQObk6iMC1hF%2FFIdXK3qGdW%2Fbx&X-Amz-Signature=e4600e2faf180f972dc21ebd10e912c6b0a8cc880c3402c56d5bffe710240976&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UGNIE3V%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDGiTHu1JcvQiqM4p7F6%2FQMPVhtqQCmPW1a0IXo1SacgQIhAIX5duuX9SGrJUjPUuS3dCWGDRAjqIbvV97UcQznJwCvKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8aJPuxxb%2Fb%2BQ3cw0q3APZ0akE91zcdOHXUeJUntkgdletDViqmeQlk2czlqaeqeX%2BncBv2qv0XHeuKn4VD6XuEZRJroSJAf3oGYAZrDmgDsADkufHAcW%2FeXHhWs9q%2BDAAlO3xtAKGnMGvfvBdCsZiO4YH6Ydb4hIQEwRCGFJy7VT4009oJloYx1V7RaWB%2FurMwWTaazEiJxBIe2Gl0Bh5CmOHoQVVSQXkTFQ7bvk9n38UC5EgE6f0abgBJR8JhHOVuRmzOFp5cvVDotC7buzED224nkh6CwLcLVjKT%2FFk3hmvmxSc7pcnOl8QYugWM2C3Z3LnQEnLa2mNC9S6GPBHaCXD0OfY4ZokY%2FFItYXxE2GZonVVVFKN6LxagkTzi%2Fbh4W5lRURwqPpXCZl9MDI73SD6zyftt7f7L1%2FyxWGWPQpt%2BVKwKqqi%2BrTcC12LJ6foI1aWDrxayHam%2BRhh0EMPLm71BzRBa2zuALAnImqrB3HIQGdmLEBYXDISEXD5NCpL2WCTBUhPdBIS8YOLOgGPNX4i5aY6qs89ZpTkehNW0%2Fu4RdlqJ8dUh7JuSkoPbzwG2dNtwekpAO%2BXO%2FVJOrbo0HuW%2FtMePzellFJnW0%2B7I40z20qohS2%2B0vQxhBEGP0zTYKEJsKM0yKaM6jDH18XLBjqkAe6OH%2F%2F%2BtAWgOYhxZZg7Fhnuohuu2jBW95Cqs%2BcRGe78k9yBmZGhkyp3f%2BXP32phCML2fTsVExh2Sa07Bm1%2BkGjc85%2FLhmnQPtBJbIknm94bCckTLTvOzwGksas2zY1W1Ngrt4MhRx9ITsTjVlnkwhJtN0QWLjwFFfkdJa%2FJgd%2BBPAZDkVkIwGO0TdHwV36LbtMQObk6iMC1hF%2FFIdXK3qGdW%2Fbx&X-Amz-Signature=b06492d31b8c5084e9e9abb915e69076408a1d7361a87e5c87e7e4e80be6ec2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UGNIE3V%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDGiTHu1JcvQiqM4p7F6%2FQMPVhtqQCmPW1a0IXo1SacgQIhAIX5duuX9SGrJUjPUuS3dCWGDRAjqIbvV97UcQznJwCvKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8aJPuxxb%2Fb%2BQ3cw0q3APZ0akE91zcdOHXUeJUntkgdletDViqmeQlk2czlqaeqeX%2BncBv2qv0XHeuKn4VD6XuEZRJroSJAf3oGYAZrDmgDsADkufHAcW%2FeXHhWs9q%2BDAAlO3xtAKGnMGvfvBdCsZiO4YH6Ydb4hIQEwRCGFJy7VT4009oJloYx1V7RaWB%2FurMwWTaazEiJxBIe2Gl0Bh5CmOHoQVVSQXkTFQ7bvk9n38UC5EgE6f0abgBJR8JhHOVuRmzOFp5cvVDotC7buzED224nkh6CwLcLVjKT%2FFk3hmvmxSc7pcnOl8QYugWM2C3Z3LnQEnLa2mNC9S6GPBHaCXD0OfY4ZokY%2FFItYXxE2GZonVVVFKN6LxagkTzi%2Fbh4W5lRURwqPpXCZl9MDI73SD6zyftt7f7L1%2FyxWGWPQpt%2BVKwKqqi%2BrTcC12LJ6foI1aWDrxayHam%2BRhh0EMPLm71BzRBa2zuALAnImqrB3HIQGdmLEBYXDISEXD5NCpL2WCTBUhPdBIS8YOLOgGPNX4i5aY6qs89ZpTkehNW0%2Fu4RdlqJ8dUh7JuSkoPbzwG2dNtwekpAO%2BXO%2FVJOrbo0HuW%2FtMePzellFJnW0%2B7I40z20qohS2%2B0vQxhBEGP0zTYKEJsKM0yKaM6jDH18XLBjqkAe6OH%2F%2F%2BtAWgOYhxZZg7Fhnuohuu2jBW95Cqs%2BcRGe78k9yBmZGhkyp3f%2BXP32phCML2fTsVExh2Sa07Bm1%2BkGjc85%2FLhmnQPtBJbIknm94bCckTLTvOzwGksas2zY1W1Ngrt4MhRx9ITsTjVlnkwhJtN0QWLjwFFfkdJa%2FJgd%2BBPAZDkVkIwGO0TdHwV36LbtMQObk6iMC1hF%2FFIdXK3qGdW%2Fbx&X-Amz-Signature=1c169f268cabcb564d5fc1b72002b5ff1d4d1c7767d116493f1e5c9a81c13d12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UGNIE3V%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDGiTHu1JcvQiqM4p7F6%2FQMPVhtqQCmPW1a0IXo1SacgQIhAIX5duuX9SGrJUjPUuS3dCWGDRAjqIbvV97UcQznJwCvKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8aJPuxxb%2Fb%2BQ3cw0q3APZ0akE91zcdOHXUeJUntkgdletDViqmeQlk2czlqaeqeX%2BncBv2qv0XHeuKn4VD6XuEZRJroSJAf3oGYAZrDmgDsADkufHAcW%2FeXHhWs9q%2BDAAlO3xtAKGnMGvfvBdCsZiO4YH6Ydb4hIQEwRCGFJy7VT4009oJloYx1V7RaWB%2FurMwWTaazEiJxBIe2Gl0Bh5CmOHoQVVSQXkTFQ7bvk9n38UC5EgE6f0abgBJR8JhHOVuRmzOFp5cvVDotC7buzED224nkh6CwLcLVjKT%2FFk3hmvmxSc7pcnOl8QYugWM2C3Z3LnQEnLa2mNC9S6GPBHaCXD0OfY4ZokY%2FFItYXxE2GZonVVVFKN6LxagkTzi%2Fbh4W5lRURwqPpXCZl9MDI73SD6zyftt7f7L1%2FyxWGWPQpt%2BVKwKqqi%2BrTcC12LJ6foI1aWDrxayHam%2BRhh0EMPLm71BzRBa2zuALAnImqrB3HIQGdmLEBYXDISEXD5NCpL2WCTBUhPdBIS8YOLOgGPNX4i5aY6qs89ZpTkehNW0%2Fu4RdlqJ8dUh7JuSkoPbzwG2dNtwekpAO%2BXO%2FVJOrbo0HuW%2FtMePzellFJnW0%2B7I40z20qohS2%2B0vQxhBEGP0zTYKEJsKM0yKaM6jDH18XLBjqkAe6OH%2F%2F%2BtAWgOYhxZZg7Fhnuohuu2jBW95Cqs%2BcRGe78k9yBmZGhkyp3f%2BXP32phCML2fTsVExh2Sa07Bm1%2BkGjc85%2FLhmnQPtBJbIknm94bCckTLTvOzwGksas2zY1W1Ngrt4MhRx9ITsTjVlnkwhJtN0QWLjwFFfkdJa%2FJgd%2BBPAZDkVkIwGO0TdHwV36LbtMQObk6iMC1hF%2FFIdXK3qGdW%2Fbx&X-Amz-Signature=f7b713ddc5c1fb80575bd85c988313b60367b6311e50aa074feadbc2a7ebe9f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UGNIE3V%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDGiTHu1JcvQiqM4p7F6%2FQMPVhtqQCmPW1a0IXo1SacgQIhAIX5duuX9SGrJUjPUuS3dCWGDRAjqIbvV97UcQznJwCvKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8aJPuxxb%2Fb%2BQ3cw0q3APZ0akE91zcdOHXUeJUntkgdletDViqmeQlk2czlqaeqeX%2BncBv2qv0XHeuKn4VD6XuEZRJroSJAf3oGYAZrDmgDsADkufHAcW%2FeXHhWs9q%2BDAAlO3xtAKGnMGvfvBdCsZiO4YH6Ydb4hIQEwRCGFJy7VT4009oJloYx1V7RaWB%2FurMwWTaazEiJxBIe2Gl0Bh5CmOHoQVVSQXkTFQ7bvk9n38UC5EgE6f0abgBJR8JhHOVuRmzOFp5cvVDotC7buzED224nkh6CwLcLVjKT%2FFk3hmvmxSc7pcnOl8QYugWM2C3Z3LnQEnLa2mNC9S6GPBHaCXD0OfY4ZokY%2FFItYXxE2GZonVVVFKN6LxagkTzi%2Fbh4W5lRURwqPpXCZl9MDI73SD6zyftt7f7L1%2FyxWGWPQpt%2BVKwKqqi%2BrTcC12LJ6foI1aWDrxayHam%2BRhh0EMPLm71BzRBa2zuALAnImqrB3HIQGdmLEBYXDISEXD5NCpL2WCTBUhPdBIS8YOLOgGPNX4i5aY6qs89ZpTkehNW0%2Fu4RdlqJ8dUh7JuSkoPbzwG2dNtwekpAO%2BXO%2FVJOrbo0HuW%2FtMePzellFJnW0%2B7I40z20qohS2%2B0vQxhBEGP0zTYKEJsKM0yKaM6jDH18XLBjqkAe6OH%2F%2F%2BtAWgOYhxZZg7Fhnuohuu2jBW95Cqs%2BcRGe78k9yBmZGhkyp3f%2BXP32phCML2fTsVExh2Sa07Bm1%2BkGjc85%2FLhmnQPtBJbIknm94bCckTLTvOzwGksas2zY1W1Ngrt4MhRx9ITsTjVlnkwhJtN0QWLjwFFfkdJa%2FJgd%2BBPAZDkVkIwGO0TdHwV36LbtMQObk6iMC1hF%2FFIdXK3qGdW%2Fbx&X-Amz-Signature=39b47bdc82a2086a204e567ce409d4f99e95e518d029c7501276be6e77c120a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UGNIE3V%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDGiTHu1JcvQiqM4p7F6%2FQMPVhtqQCmPW1a0IXo1SacgQIhAIX5duuX9SGrJUjPUuS3dCWGDRAjqIbvV97UcQznJwCvKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8aJPuxxb%2Fb%2BQ3cw0q3APZ0akE91zcdOHXUeJUntkgdletDViqmeQlk2czlqaeqeX%2BncBv2qv0XHeuKn4VD6XuEZRJroSJAf3oGYAZrDmgDsADkufHAcW%2FeXHhWs9q%2BDAAlO3xtAKGnMGvfvBdCsZiO4YH6Ydb4hIQEwRCGFJy7VT4009oJloYx1V7RaWB%2FurMwWTaazEiJxBIe2Gl0Bh5CmOHoQVVSQXkTFQ7bvk9n38UC5EgE6f0abgBJR8JhHOVuRmzOFp5cvVDotC7buzED224nkh6CwLcLVjKT%2FFk3hmvmxSc7pcnOl8QYugWM2C3Z3LnQEnLa2mNC9S6GPBHaCXD0OfY4ZokY%2FFItYXxE2GZonVVVFKN6LxagkTzi%2Fbh4W5lRURwqPpXCZl9MDI73SD6zyftt7f7L1%2FyxWGWPQpt%2BVKwKqqi%2BrTcC12LJ6foI1aWDrxayHam%2BRhh0EMPLm71BzRBa2zuALAnImqrB3HIQGdmLEBYXDISEXD5NCpL2WCTBUhPdBIS8YOLOgGPNX4i5aY6qs89ZpTkehNW0%2Fu4RdlqJ8dUh7JuSkoPbzwG2dNtwekpAO%2BXO%2FVJOrbo0HuW%2FtMePzellFJnW0%2B7I40z20qohS2%2B0vQxhBEGP0zTYKEJsKM0yKaM6jDH18XLBjqkAe6OH%2F%2F%2BtAWgOYhxZZg7Fhnuohuu2jBW95Cqs%2BcRGe78k9yBmZGhkyp3f%2BXP32phCML2fTsVExh2Sa07Bm1%2BkGjc85%2FLhmnQPtBJbIknm94bCckTLTvOzwGksas2zY1W1Ngrt4MhRx9ITsTjVlnkwhJtN0QWLjwFFfkdJa%2FJgd%2BBPAZDkVkIwGO0TdHwV36LbtMQObk6iMC1hF%2FFIdXK3qGdW%2Fbx&X-Amz-Signature=96cef0d39aed18bef1ade7c2a173e052062657bf37271e7338a8dd18a15bcf93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}


#### Params:

| **Name**          | **Type**             |
| ----------------- | -------------------- |
| `serial_port`     | string               |
| `serial_baudrate` | int (model specific) |
| `frame_id`        | string               |
| `scan_mode`       | string               |

#### description:

publishes the `/scan` topic for RPLIDAR products

[official docs link](https://github.com/Slamtec/rplidar_ros/tree/ros2#slamtec-lidar-ros2-package)

{{% /alert %}}

Remember to disable gazebo nodes for physical setup

```python "5-5","10-13"

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
  <summary>{{< markdownify >}}Finding Lidar USB port:{{< /markdownify >}}</summary>
  
```bash
ls /dev/ttyUSB*
```

</details>



{{% alert context="info" %}}

If you are developing in a dev container you have to forward the USB port into the dev container.

in the file `.devcontainer/devcontainer.json` add this line into the  `runArgs:` array

`"--device=/dev/tty<your device>",` to find what your device is outside of your devcontainer, probably in your WSL shell, run `ls /dev/tty*` to find which tty device to use. If you are not sure unplug and re run the command to see the difference.

you may also need to run `sudo chmod 777 /dev/tty<your device>` to use the device depending on how your hardware is setup

{{% /alert %}}

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UGNIE3V%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDGiTHu1JcvQiqM4p7F6%2FQMPVhtqQCmPW1a0IXo1SacgQIhAIX5duuX9SGrJUjPUuS3dCWGDRAjqIbvV97UcQznJwCvKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8aJPuxxb%2Fb%2BQ3cw0q3APZ0akE91zcdOHXUeJUntkgdletDViqmeQlk2czlqaeqeX%2BncBv2qv0XHeuKn4VD6XuEZRJroSJAf3oGYAZrDmgDsADkufHAcW%2FeXHhWs9q%2BDAAlO3xtAKGnMGvfvBdCsZiO4YH6Ydb4hIQEwRCGFJy7VT4009oJloYx1V7RaWB%2FurMwWTaazEiJxBIe2Gl0Bh5CmOHoQVVSQXkTFQ7bvk9n38UC5EgE6f0abgBJR8JhHOVuRmzOFp5cvVDotC7buzED224nkh6CwLcLVjKT%2FFk3hmvmxSc7pcnOl8QYugWM2C3Z3LnQEnLa2mNC9S6GPBHaCXD0OfY4ZokY%2FFItYXxE2GZonVVVFKN6LxagkTzi%2Fbh4W5lRURwqPpXCZl9MDI73SD6zyftt7f7L1%2FyxWGWPQpt%2BVKwKqqi%2BrTcC12LJ6foI1aWDrxayHam%2BRhh0EMPLm71BzRBa2zuALAnImqrB3HIQGdmLEBYXDISEXD5NCpL2WCTBUhPdBIS8YOLOgGPNX4i5aY6qs89ZpTkehNW0%2Fu4RdlqJ8dUh7JuSkoPbzwG2dNtwekpAO%2BXO%2FVJOrbo0HuW%2FtMePzellFJnW0%2B7I40z20qohS2%2B0vQxhBEGP0zTYKEJsKM0yKaM6jDH18XLBjqkAe6OH%2F%2F%2BtAWgOYhxZZg7Fhnuohuu2jBW95Cqs%2BcRGe78k9yBmZGhkyp3f%2BXP32phCML2fTsVExh2Sa07Bm1%2BkGjc85%2FLhmnQPtBJbIknm94bCckTLTvOzwGksas2zY1W1Ngrt4MhRx9ITsTjVlnkwhJtN0QWLjwFFfkdJa%2FJgd%2BBPAZDkVkIwGO0TdHwV36LbtMQObk6iMC1hF%2FFIdXK3qGdW%2Fbx&X-Amz-Signature=14ad626bfd16bb9bad1560163a961eacc4f49b7839173d50fce88077e09cacae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UGNIE3V%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDGiTHu1JcvQiqM4p7F6%2FQMPVhtqQCmPW1a0IXo1SacgQIhAIX5duuX9SGrJUjPUuS3dCWGDRAjqIbvV97UcQznJwCvKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8aJPuxxb%2Fb%2BQ3cw0q3APZ0akE91zcdOHXUeJUntkgdletDViqmeQlk2czlqaeqeX%2BncBv2qv0XHeuKn4VD6XuEZRJroSJAf3oGYAZrDmgDsADkufHAcW%2FeXHhWs9q%2BDAAlO3xtAKGnMGvfvBdCsZiO4YH6Ydb4hIQEwRCGFJy7VT4009oJloYx1V7RaWB%2FurMwWTaazEiJxBIe2Gl0Bh5CmOHoQVVSQXkTFQ7bvk9n38UC5EgE6f0abgBJR8JhHOVuRmzOFp5cvVDotC7buzED224nkh6CwLcLVjKT%2FFk3hmvmxSc7pcnOl8QYugWM2C3Z3LnQEnLa2mNC9S6GPBHaCXD0OfY4ZokY%2FFItYXxE2GZonVVVFKN6LxagkTzi%2Fbh4W5lRURwqPpXCZl9MDI73SD6zyftt7f7L1%2FyxWGWPQpt%2BVKwKqqi%2BrTcC12LJ6foI1aWDrxayHam%2BRhh0EMPLm71BzRBa2zuALAnImqrB3HIQGdmLEBYXDISEXD5NCpL2WCTBUhPdBIS8YOLOgGPNX4i5aY6qs89ZpTkehNW0%2Fu4RdlqJ8dUh7JuSkoPbzwG2dNtwekpAO%2BXO%2FVJOrbo0HuW%2FtMePzellFJnW0%2B7I40z20qohS2%2B0vQxhBEGP0zTYKEJsKM0yKaM6jDH18XLBjqkAe6OH%2F%2F%2BtAWgOYhxZZg7Fhnuohuu2jBW95Cqs%2BcRGe78k9yBmZGhkyp3f%2BXP32phCML2fTsVExh2Sa07Bm1%2BkGjc85%2FLhmnQPtBJbIknm94bCckTLTvOzwGksas2zY1W1Ngrt4MhRx9ITsTjVlnkwhJtN0QWLjwFFfkdJa%2FJgd%2BBPAZDkVkIwGO0TdHwV36LbtMQObk6iMC1hF%2FFIdXK3qGdW%2Fbx&X-Amz-Signature=b06492d31b8c5084e9e9abb915e69076408a1d7361a87e5c87e7e4e80be6ec2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Adding RPLidar to launch

idk tell them to look at the launch file to see which exact prams to put in

```python "5-14","30-30"

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
