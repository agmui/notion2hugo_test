---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-07-29T01:28:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-07-29T01:28:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOQO6IRU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T052007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIAg41prk%2FSlbBpO%2BhmoI0sCgODGPG1%2FoUGDUj524lJvQAiEA1MykFJRWfh9Zjw8VZ1wzfwFmpxAl6cgS%2F6kHLbxNtp0qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNBOYnV8i%2Fd7sISsgircA6VK7cdcDaZD%2F6yxcZXxr6cC326WXuP8l%2Fy64AWBf5AewyCkiJyNqfoJInzCgPO6Lj134gRNNkOjphIJ4X%2BCMsKsGQUORRtDz6z5ZRcri5ffDl7zTary%2FtCLGt%2F39dVBXRXtj%2FC7In%2FlNPslIKWczUPgjK%2Bd%2BTIJo9FhsMRxyQKhojGjbRNtMI8GoEqrgF2w17ZiFnrxMCH31FSGAfq2ZoeP8e17tiBajq%2FdIOKJSGlMz2E50dEVxYlstwyFymLHMBvhBvAwi2HAENGKDpLEECXiEkDM7kYlc3OkCvVN5Lb7my9g%2F%2FnUqeKNvDax%2BleE%2Ff1cFf%2FlTJMH%2Ftvion78QG9NHI9BSl3tThWoTB33iEm7Ze6Cw3yjbAoqt7%2B1BpWdxXbcMgQdALMNKTXGFDvkbaQPPx2zn%2BAeiDYHvYr43pcs36LSg7LdcKvMfI4DDXS5Zq3X21hu77lCagzR7ajd5qVrAZu%2FgDiCjei%2FbK5TQhoTuhjx1RW8o%2F0Ex2jlM3kG5YN4TXcW%2BwQy0rr4KhnM64nW0o5pveHCMvVHlIeEQw9qIZt2AVOdQzLpIwm3klegV4OaeOXwtVybTOgvc2hTDmFHDnBep7VYE2oQXkWgiI8Bt4tz%2FqD%2F%2Fcf%2FXQFeMLXNoMQGOqUByKhbcrgXrRxa7lRiby5kBa44MG7dc6ZV%2FccRrBIdQVpIABw%2B%2FMN9WTY1RAFeEy9G88uRt8m5f8g39oeKXSQXie9fbcHF1W%2B7pE1qRoDpG6VdpPRMagktDbcRU3i9Q8yyevnnIeFl1lQbxVcu7XryMu3yoPsRAGnlS9r7YPzi9paFKzW34H04a97M8y5vQMf7GLBO3Tgij7N7SAQxIUqqyi7KAG5F&X-Amz-Signature=eb25c1552fa02b819445c3aac6ec357a4f5107cc192501cb44fc7d27761197ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOQO6IRU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T052007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIAg41prk%2FSlbBpO%2BhmoI0sCgODGPG1%2FoUGDUj524lJvQAiEA1MykFJRWfh9Zjw8VZ1wzfwFmpxAl6cgS%2F6kHLbxNtp0qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNBOYnV8i%2Fd7sISsgircA6VK7cdcDaZD%2F6yxcZXxr6cC326WXuP8l%2Fy64AWBf5AewyCkiJyNqfoJInzCgPO6Lj134gRNNkOjphIJ4X%2BCMsKsGQUORRtDz6z5ZRcri5ffDl7zTary%2FtCLGt%2F39dVBXRXtj%2FC7In%2FlNPslIKWczUPgjK%2Bd%2BTIJo9FhsMRxyQKhojGjbRNtMI8GoEqrgF2w17ZiFnrxMCH31FSGAfq2ZoeP8e17tiBajq%2FdIOKJSGlMz2E50dEVxYlstwyFymLHMBvhBvAwi2HAENGKDpLEECXiEkDM7kYlc3OkCvVN5Lb7my9g%2F%2FnUqeKNvDax%2BleE%2Ff1cFf%2FlTJMH%2Ftvion78QG9NHI9BSl3tThWoTB33iEm7Ze6Cw3yjbAoqt7%2B1BpWdxXbcMgQdALMNKTXGFDvkbaQPPx2zn%2BAeiDYHvYr43pcs36LSg7LdcKvMfI4DDXS5Zq3X21hu77lCagzR7ajd5qVrAZu%2FgDiCjei%2FbK5TQhoTuhjx1RW8o%2F0Ex2jlM3kG5YN4TXcW%2BwQy0rr4KhnM64nW0o5pveHCMvVHlIeEQw9qIZt2AVOdQzLpIwm3klegV4OaeOXwtVybTOgvc2hTDmFHDnBep7VYE2oQXkWgiI8Bt4tz%2FqD%2F%2Fcf%2FXQFeMLXNoMQGOqUByKhbcrgXrRxa7lRiby5kBa44MG7dc6ZV%2FccRrBIdQVpIABw%2B%2FMN9WTY1RAFeEy9G88uRt8m5f8g39oeKXSQXie9fbcHF1W%2B7pE1qRoDpG6VdpPRMagktDbcRU3i9Q8yyevnnIeFl1lQbxVcu7XryMu3yoPsRAGnlS9r7YPzi9paFKzW34H04a97M8y5vQMf7GLBO3Tgij7N7SAQxIUqqyi7KAG5F&X-Amz-Signature=2c548639ba5cdd3d7a775b370fc80348fe93506f904a8b2863c43f16ad7b659d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOQO6IRU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T052007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIAg41prk%2FSlbBpO%2BhmoI0sCgODGPG1%2FoUGDUj524lJvQAiEA1MykFJRWfh9Zjw8VZ1wzfwFmpxAl6cgS%2F6kHLbxNtp0qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNBOYnV8i%2Fd7sISsgircA6VK7cdcDaZD%2F6yxcZXxr6cC326WXuP8l%2Fy64AWBf5AewyCkiJyNqfoJInzCgPO6Lj134gRNNkOjphIJ4X%2BCMsKsGQUORRtDz6z5ZRcri5ffDl7zTary%2FtCLGt%2F39dVBXRXtj%2FC7In%2FlNPslIKWczUPgjK%2Bd%2BTIJo9FhsMRxyQKhojGjbRNtMI8GoEqrgF2w17ZiFnrxMCH31FSGAfq2ZoeP8e17tiBajq%2FdIOKJSGlMz2E50dEVxYlstwyFymLHMBvhBvAwi2HAENGKDpLEECXiEkDM7kYlc3OkCvVN5Lb7my9g%2F%2FnUqeKNvDax%2BleE%2Ff1cFf%2FlTJMH%2Ftvion78QG9NHI9BSl3tThWoTB33iEm7Ze6Cw3yjbAoqt7%2B1BpWdxXbcMgQdALMNKTXGFDvkbaQPPx2zn%2BAeiDYHvYr43pcs36LSg7LdcKvMfI4DDXS5Zq3X21hu77lCagzR7ajd5qVrAZu%2FgDiCjei%2FbK5TQhoTuhjx1RW8o%2F0Ex2jlM3kG5YN4TXcW%2BwQy0rr4KhnM64nW0o5pveHCMvVHlIeEQw9qIZt2AVOdQzLpIwm3klegV4OaeOXwtVybTOgvc2hTDmFHDnBep7VYE2oQXkWgiI8Bt4tz%2FqD%2F%2Fcf%2FXQFeMLXNoMQGOqUByKhbcrgXrRxa7lRiby5kBa44MG7dc6ZV%2FccRrBIdQVpIABw%2B%2FMN9WTY1RAFeEy9G88uRt8m5f8g39oeKXSQXie9fbcHF1W%2B7pE1qRoDpG6VdpPRMagktDbcRU3i9Q8yyevnnIeFl1lQbxVcu7XryMu3yoPsRAGnlS9r7YPzi9paFKzW34H04a97M8y5vQMf7GLBO3Tgij7N7SAQxIUqqyi7KAG5F&X-Amz-Signature=c55d902119debda4e67d71c181713e5c1eb038e8edcfcde8c797d89fb4c7371b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOQO6IRU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T052007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIAg41prk%2FSlbBpO%2BhmoI0sCgODGPG1%2FoUGDUj524lJvQAiEA1MykFJRWfh9Zjw8VZ1wzfwFmpxAl6cgS%2F6kHLbxNtp0qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNBOYnV8i%2Fd7sISsgircA6VK7cdcDaZD%2F6yxcZXxr6cC326WXuP8l%2Fy64AWBf5AewyCkiJyNqfoJInzCgPO6Lj134gRNNkOjphIJ4X%2BCMsKsGQUORRtDz6z5ZRcri5ffDl7zTary%2FtCLGt%2F39dVBXRXtj%2FC7In%2FlNPslIKWczUPgjK%2Bd%2BTIJo9FhsMRxyQKhojGjbRNtMI8GoEqrgF2w17ZiFnrxMCH31FSGAfq2ZoeP8e17tiBajq%2FdIOKJSGlMz2E50dEVxYlstwyFymLHMBvhBvAwi2HAENGKDpLEECXiEkDM7kYlc3OkCvVN5Lb7my9g%2F%2FnUqeKNvDax%2BleE%2Ff1cFf%2FlTJMH%2Ftvion78QG9NHI9BSl3tThWoTB33iEm7Ze6Cw3yjbAoqt7%2B1BpWdxXbcMgQdALMNKTXGFDvkbaQPPx2zn%2BAeiDYHvYr43pcs36LSg7LdcKvMfI4DDXS5Zq3X21hu77lCagzR7ajd5qVrAZu%2FgDiCjei%2FbK5TQhoTuhjx1RW8o%2F0Ex2jlM3kG5YN4TXcW%2BwQy0rr4KhnM64nW0o5pveHCMvVHlIeEQw9qIZt2AVOdQzLpIwm3klegV4OaeOXwtVybTOgvc2hTDmFHDnBep7VYE2oQXkWgiI8Bt4tz%2FqD%2F%2Fcf%2FXQFeMLXNoMQGOqUByKhbcrgXrRxa7lRiby5kBa44MG7dc6ZV%2FccRrBIdQVpIABw%2B%2FMN9WTY1RAFeEy9G88uRt8m5f8g39oeKXSQXie9fbcHF1W%2B7pE1qRoDpG6VdpPRMagktDbcRU3i9Q8yyevnnIeFl1lQbxVcu7XryMu3yoPsRAGnlS9r7YPzi9paFKzW34H04a97M8y5vQMf7GLBO3Tgij7N7SAQxIUqqyi7KAG5F&X-Amz-Signature=150493f0a554e8df7da93e098d57f739056871efec18d7676cf94c1f1d21dbc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOQO6IRU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T052007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIAg41prk%2FSlbBpO%2BhmoI0sCgODGPG1%2FoUGDUj524lJvQAiEA1MykFJRWfh9Zjw8VZ1wzfwFmpxAl6cgS%2F6kHLbxNtp0qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNBOYnV8i%2Fd7sISsgircA6VK7cdcDaZD%2F6yxcZXxr6cC326WXuP8l%2Fy64AWBf5AewyCkiJyNqfoJInzCgPO6Lj134gRNNkOjphIJ4X%2BCMsKsGQUORRtDz6z5ZRcri5ffDl7zTary%2FtCLGt%2F39dVBXRXtj%2FC7In%2FlNPslIKWczUPgjK%2Bd%2BTIJo9FhsMRxyQKhojGjbRNtMI8GoEqrgF2w17ZiFnrxMCH31FSGAfq2ZoeP8e17tiBajq%2FdIOKJSGlMz2E50dEVxYlstwyFymLHMBvhBvAwi2HAENGKDpLEECXiEkDM7kYlc3OkCvVN5Lb7my9g%2F%2FnUqeKNvDax%2BleE%2Ff1cFf%2FlTJMH%2Ftvion78QG9NHI9BSl3tThWoTB33iEm7Ze6Cw3yjbAoqt7%2B1BpWdxXbcMgQdALMNKTXGFDvkbaQPPx2zn%2BAeiDYHvYr43pcs36LSg7LdcKvMfI4DDXS5Zq3X21hu77lCagzR7ajd5qVrAZu%2FgDiCjei%2FbK5TQhoTuhjx1RW8o%2F0Ex2jlM3kG5YN4TXcW%2BwQy0rr4KhnM64nW0o5pveHCMvVHlIeEQw9qIZt2AVOdQzLpIwm3klegV4OaeOXwtVybTOgvc2hTDmFHDnBep7VYE2oQXkWgiI8Bt4tz%2FqD%2F%2Fcf%2FXQFeMLXNoMQGOqUByKhbcrgXrRxa7lRiby5kBa44MG7dc6ZV%2FccRrBIdQVpIABw%2B%2FMN9WTY1RAFeEy9G88uRt8m5f8g39oeKXSQXie9fbcHF1W%2B7pE1qRoDpG6VdpPRMagktDbcRU3i9Q8yyevnnIeFl1lQbxVcu7XryMu3yoPsRAGnlS9r7YPzi9paFKzW34H04a97M8y5vQMf7GLBO3Tgij7N7SAQxIUqqyi7KAG5F&X-Amz-Signature=dbc3a39a2f981327187c077d1d8a01d07e1b8ac41b3f7ef58f42e3d9a0b538fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOQO6IRU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T052007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIAg41prk%2FSlbBpO%2BhmoI0sCgODGPG1%2FoUGDUj524lJvQAiEA1MykFJRWfh9Zjw8VZ1wzfwFmpxAl6cgS%2F6kHLbxNtp0qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNBOYnV8i%2Fd7sISsgircA6VK7cdcDaZD%2F6yxcZXxr6cC326WXuP8l%2Fy64AWBf5AewyCkiJyNqfoJInzCgPO6Lj134gRNNkOjphIJ4X%2BCMsKsGQUORRtDz6z5ZRcri5ffDl7zTary%2FtCLGt%2F39dVBXRXtj%2FC7In%2FlNPslIKWczUPgjK%2Bd%2BTIJo9FhsMRxyQKhojGjbRNtMI8GoEqrgF2w17ZiFnrxMCH31FSGAfq2ZoeP8e17tiBajq%2FdIOKJSGlMz2E50dEVxYlstwyFymLHMBvhBvAwi2HAENGKDpLEECXiEkDM7kYlc3OkCvVN5Lb7my9g%2F%2FnUqeKNvDax%2BleE%2Ff1cFf%2FlTJMH%2Ftvion78QG9NHI9BSl3tThWoTB33iEm7Ze6Cw3yjbAoqt7%2B1BpWdxXbcMgQdALMNKTXGFDvkbaQPPx2zn%2BAeiDYHvYr43pcs36LSg7LdcKvMfI4DDXS5Zq3X21hu77lCagzR7ajd5qVrAZu%2FgDiCjei%2FbK5TQhoTuhjx1RW8o%2F0Ex2jlM3kG5YN4TXcW%2BwQy0rr4KhnM64nW0o5pveHCMvVHlIeEQw9qIZt2AVOdQzLpIwm3klegV4OaeOXwtVybTOgvc2hTDmFHDnBep7VYE2oQXkWgiI8Bt4tz%2FqD%2F%2Fcf%2FXQFeMLXNoMQGOqUByKhbcrgXrRxa7lRiby5kBa44MG7dc6ZV%2FccRrBIdQVpIABw%2B%2FMN9WTY1RAFeEy9G88uRt8m5f8g39oeKXSQXie9fbcHF1W%2B7pE1qRoDpG6VdpPRMagktDbcRU3i9Q8yyevnnIeFl1lQbxVcu7XryMu3yoPsRAGnlS9r7YPzi9paFKzW34H04a97M8y5vQMf7GLBO3Tgij7N7SAQxIUqqyi7KAG5F&X-Amz-Signature=c0a24a941e629943d3a93f508bfc4a6b870e1efd2db62967e6f651c43d766e4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOQO6IRU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T052007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIAg41prk%2FSlbBpO%2BhmoI0sCgODGPG1%2FoUGDUj524lJvQAiEA1MykFJRWfh9Zjw8VZ1wzfwFmpxAl6cgS%2F6kHLbxNtp0qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNBOYnV8i%2Fd7sISsgircA6VK7cdcDaZD%2F6yxcZXxr6cC326WXuP8l%2Fy64AWBf5AewyCkiJyNqfoJInzCgPO6Lj134gRNNkOjphIJ4X%2BCMsKsGQUORRtDz6z5ZRcri5ffDl7zTary%2FtCLGt%2F39dVBXRXtj%2FC7In%2FlNPslIKWczUPgjK%2Bd%2BTIJo9FhsMRxyQKhojGjbRNtMI8GoEqrgF2w17ZiFnrxMCH31FSGAfq2ZoeP8e17tiBajq%2FdIOKJSGlMz2E50dEVxYlstwyFymLHMBvhBvAwi2HAENGKDpLEECXiEkDM7kYlc3OkCvVN5Lb7my9g%2F%2FnUqeKNvDax%2BleE%2Ff1cFf%2FlTJMH%2Ftvion78QG9NHI9BSl3tThWoTB33iEm7Ze6Cw3yjbAoqt7%2B1BpWdxXbcMgQdALMNKTXGFDvkbaQPPx2zn%2BAeiDYHvYr43pcs36LSg7LdcKvMfI4DDXS5Zq3X21hu77lCagzR7ajd5qVrAZu%2FgDiCjei%2FbK5TQhoTuhjx1RW8o%2F0Ex2jlM3kG5YN4TXcW%2BwQy0rr4KhnM64nW0o5pveHCMvVHlIeEQw9qIZt2AVOdQzLpIwm3klegV4OaeOXwtVybTOgvc2hTDmFHDnBep7VYE2oQXkWgiI8Bt4tz%2FqD%2F%2Fcf%2FXQFeMLXNoMQGOqUByKhbcrgXrRxa7lRiby5kBa44MG7dc6ZV%2FccRrBIdQVpIABw%2B%2FMN9WTY1RAFeEy9G88uRt8m5f8g39oeKXSQXie9fbcHF1W%2B7pE1qRoDpG6VdpPRMagktDbcRU3i9Q8yyevnnIeFl1lQbxVcu7XryMu3yoPsRAGnlS9r7YPzi9paFKzW34H04a97M8y5vQMf7GLBO3Tgij7N7SAQxIUqqyi7KAG5F&X-Amz-Signature=723c6a56a1b849083172cc3914e3be328ab99e589963eaafeb140b776dc1a7d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOQO6IRU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T052007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIAg41prk%2FSlbBpO%2BhmoI0sCgODGPG1%2FoUGDUj524lJvQAiEA1MykFJRWfh9Zjw8VZ1wzfwFmpxAl6cgS%2F6kHLbxNtp0qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNBOYnV8i%2Fd7sISsgircA6VK7cdcDaZD%2F6yxcZXxr6cC326WXuP8l%2Fy64AWBf5AewyCkiJyNqfoJInzCgPO6Lj134gRNNkOjphIJ4X%2BCMsKsGQUORRtDz6z5ZRcri5ffDl7zTary%2FtCLGt%2F39dVBXRXtj%2FC7In%2FlNPslIKWczUPgjK%2Bd%2BTIJo9FhsMRxyQKhojGjbRNtMI8GoEqrgF2w17ZiFnrxMCH31FSGAfq2ZoeP8e17tiBajq%2FdIOKJSGlMz2E50dEVxYlstwyFymLHMBvhBvAwi2HAENGKDpLEECXiEkDM7kYlc3OkCvVN5Lb7my9g%2F%2FnUqeKNvDax%2BleE%2Ff1cFf%2FlTJMH%2Ftvion78QG9NHI9BSl3tThWoTB33iEm7Ze6Cw3yjbAoqt7%2B1BpWdxXbcMgQdALMNKTXGFDvkbaQPPx2zn%2BAeiDYHvYr43pcs36LSg7LdcKvMfI4DDXS5Zq3X21hu77lCagzR7ajd5qVrAZu%2FgDiCjei%2FbK5TQhoTuhjx1RW8o%2F0Ex2jlM3kG5YN4TXcW%2BwQy0rr4KhnM64nW0o5pveHCMvVHlIeEQw9qIZt2AVOdQzLpIwm3klegV4OaeOXwtVybTOgvc2hTDmFHDnBep7VYE2oQXkWgiI8Bt4tz%2FqD%2F%2Fcf%2FXQFeMLXNoMQGOqUByKhbcrgXrRxa7lRiby5kBa44MG7dc6ZV%2FccRrBIdQVpIABw%2B%2FMN9WTY1RAFeEy9G88uRt8m5f8g39oeKXSQXie9fbcHF1W%2B7pE1qRoDpG6VdpPRMagktDbcRU3i9Q8yyevnnIeFl1lQbxVcu7XryMu3yoPsRAGnlS9r7YPzi9paFKzW34H04a97M8y5vQMf7GLBO3Tgij7N7SAQxIUqqyi7KAG5F&X-Amz-Signature=6a1f064d9299cfe997dd1a0ff15b7079ae420698197685ffbceadbc7041f69eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOQO6IRU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T052007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIAg41prk%2FSlbBpO%2BhmoI0sCgODGPG1%2FoUGDUj524lJvQAiEA1MykFJRWfh9Zjw8VZ1wzfwFmpxAl6cgS%2F6kHLbxNtp0qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNBOYnV8i%2Fd7sISsgircA6VK7cdcDaZD%2F6yxcZXxr6cC326WXuP8l%2Fy64AWBf5AewyCkiJyNqfoJInzCgPO6Lj134gRNNkOjphIJ4X%2BCMsKsGQUORRtDz6z5ZRcri5ffDl7zTary%2FtCLGt%2F39dVBXRXtj%2FC7In%2FlNPslIKWczUPgjK%2Bd%2BTIJo9FhsMRxyQKhojGjbRNtMI8GoEqrgF2w17ZiFnrxMCH31FSGAfq2ZoeP8e17tiBajq%2FdIOKJSGlMz2E50dEVxYlstwyFymLHMBvhBvAwi2HAENGKDpLEECXiEkDM7kYlc3OkCvVN5Lb7my9g%2F%2FnUqeKNvDax%2BleE%2Ff1cFf%2FlTJMH%2Ftvion78QG9NHI9BSl3tThWoTB33iEm7Ze6Cw3yjbAoqt7%2B1BpWdxXbcMgQdALMNKTXGFDvkbaQPPx2zn%2BAeiDYHvYr43pcs36LSg7LdcKvMfI4DDXS5Zq3X21hu77lCagzR7ajd5qVrAZu%2FgDiCjei%2FbK5TQhoTuhjx1RW8o%2F0Ex2jlM3kG5YN4TXcW%2BwQy0rr4KhnM64nW0o5pveHCMvVHlIeEQw9qIZt2AVOdQzLpIwm3klegV4OaeOXwtVybTOgvc2hTDmFHDnBep7VYE2oQXkWgiI8Bt4tz%2FqD%2F%2Fcf%2FXQFeMLXNoMQGOqUByKhbcrgXrRxa7lRiby5kBa44MG7dc6ZV%2FccRrBIdQVpIABw%2B%2FMN9WTY1RAFeEy9G88uRt8m5f8g39oeKXSQXie9fbcHF1W%2B7pE1qRoDpG6VdpPRMagktDbcRU3i9Q8yyevnnIeFl1lQbxVcu7XryMu3yoPsRAGnlS9r7YPzi9paFKzW34H04a97M8y5vQMf7GLBO3Tgij7N7SAQxIUqqyi7KAG5F&X-Amz-Signature=a6328e7bb8711689bdb0bc17e3893d6a51b8fac2935e392466c63c60abc712f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO: rviz img

## adding to launch

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOQO6IRU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T052007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIAg41prk%2FSlbBpO%2BhmoI0sCgODGPG1%2FoUGDUj524lJvQAiEA1MykFJRWfh9Zjw8VZ1wzfwFmpxAl6cgS%2F6kHLbxNtp0qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNBOYnV8i%2Fd7sISsgircA6VK7cdcDaZD%2F6yxcZXxr6cC326WXuP8l%2Fy64AWBf5AewyCkiJyNqfoJInzCgPO6Lj134gRNNkOjphIJ4X%2BCMsKsGQUORRtDz6z5ZRcri5ffDl7zTary%2FtCLGt%2F39dVBXRXtj%2FC7In%2FlNPslIKWczUPgjK%2Bd%2BTIJo9FhsMRxyQKhojGjbRNtMI8GoEqrgF2w17ZiFnrxMCH31FSGAfq2ZoeP8e17tiBajq%2FdIOKJSGlMz2E50dEVxYlstwyFymLHMBvhBvAwi2HAENGKDpLEECXiEkDM7kYlc3OkCvVN5Lb7my9g%2F%2FnUqeKNvDax%2BleE%2Ff1cFf%2FlTJMH%2Ftvion78QG9NHI9BSl3tThWoTB33iEm7Ze6Cw3yjbAoqt7%2B1BpWdxXbcMgQdALMNKTXGFDvkbaQPPx2zn%2BAeiDYHvYr43pcs36LSg7LdcKvMfI4DDXS5Zq3X21hu77lCagzR7ajd5qVrAZu%2FgDiCjei%2FbK5TQhoTuhjx1RW8o%2F0Ex2jlM3kG5YN4TXcW%2BwQy0rr4KhnM64nW0o5pveHCMvVHlIeEQw9qIZt2AVOdQzLpIwm3klegV4OaeOXwtVybTOgvc2hTDmFHDnBep7VYE2oQXkWgiI8Bt4tz%2FqD%2F%2Fcf%2FXQFeMLXNoMQGOqUByKhbcrgXrRxa7lRiby5kBa44MG7dc6ZV%2FccRrBIdQVpIABw%2B%2FMN9WTY1RAFeEy9G88uRt8m5f8g39oeKXSQXie9fbcHF1W%2B7pE1qRoDpG6VdpPRMagktDbcRU3i9Q8yyevnnIeFl1lQbxVcu7XryMu3yoPsRAGnlS9r7YPzi9paFKzW34H04a97M8y5vQMf7GLBO3Tgij7N7SAQxIUqqyi7KAG5F&X-Amz-Signature=6cf61e98dc42ee3c1cea609a8f652b3fdd08236e100b74596824a68cb0361687&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
