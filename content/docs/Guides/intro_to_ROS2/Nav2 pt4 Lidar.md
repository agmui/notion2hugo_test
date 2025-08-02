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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HSXVOBQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHX%2FWd7JbNYD058cfBFEULATIZeI4qzDan52Ul2BODFbAiA5QdAl%2BLGm59LVR04Di5c2i4qJ73Wdmt8RWFOj3QKxVyqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVxl9hQw%2Ftwtq6kzBKtwDdVwmkof8chvEGHQitbQrf1LwN1iYFxgB7f%2FYhNVL%2Frt4M8rkqo%2F98cy7zjHw%2BJxoZZpX3Eq%2Fbc55%2FFzUmf%2BylKYd6GwEr5gbxVyig8UqqJaL0NXk0hlrA2aFukCGdID9BUkh99WE8u%2Bkt5eOnR9U9lS5tppOCGivZ1TEJ43IZGQpU%2BeNQjPIASXxFTwJFjYlmDmHGB3C5S85WsQFggESjQG%2FuJ6bRps6kmrEsDjZ4pcnmqFQN6xi1%2FkOwDjCUkZSlZxybm4PbnJLXQUSL9yDbtuuJPTk%2Ban7uGIhSDyAC053P9CM10RjF4CmpQ4ubOko5zLLVHYfURxr0M5TCDI0gCO9sfYox3Qf4jcKjfV5b%2BXag%2B0JuG6hU3JX7cE696Rz7MrDAWQRs0NhJe%2FfbVdXr94VggJv1AOSq5J1PRKtvD2LtnsTxXCyOU37A5wVr3ISbDVJz21%2Ba5aSvknPErMguOUSEt9OfX5oI%2FUMmXY6GU5VBgMyh9JAbh6fevzyGL6MtZKOyPx%2BzH48n3Q5eC6GWaJvb2S27BwcHynb6Kp6ZrACjrYuZwZ4kK9S4QPANstY%2BiRvpIU8n9QotXRioNITLITlAUbjKazkvwItngcFx8bCl5poY%2BFHEIJQJRMw7qy1xAY6pgHkr2%2FAQrq3dwSAebcGCQY%2BZkmgJKSxDC26v7TPtcYS5Kp%2FpduU1N9I6t6Auq2%2B6UlHkm6Q%2BOk7tzCqoQ2iSNeLbWTeU4Xi2gRaOIaOXRclxd6nXOPi6Tl%2BS12h7PHNeqW3p1aFxpFP4TzPwzAT0EKbfOfB05Qx9OvWu3ybdmdFPiB%2BEQTnlH9YghoAwindm59c%2F7Q%2F%2Barij2GOXse3IQV67ZTv3J8o&X-Amz-Signature=d803d9f9b6da103b0bb63c3e19379d7805aac7f8da26cae16b4b3ab9abea5a34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HSXVOBQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHX%2FWd7JbNYD058cfBFEULATIZeI4qzDan52Ul2BODFbAiA5QdAl%2BLGm59LVR04Di5c2i4qJ73Wdmt8RWFOj3QKxVyqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVxl9hQw%2Ftwtq6kzBKtwDdVwmkof8chvEGHQitbQrf1LwN1iYFxgB7f%2FYhNVL%2Frt4M8rkqo%2F98cy7zjHw%2BJxoZZpX3Eq%2Fbc55%2FFzUmf%2BylKYd6GwEr5gbxVyig8UqqJaL0NXk0hlrA2aFukCGdID9BUkh99WE8u%2Bkt5eOnR9U9lS5tppOCGivZ1TEJ43IZGQpU%2BeNQjPIASXxFTwJFjYlmDmHGB3C5S85WsQFggESjQG%2FuJ6bRps6kmrEsDjZ4pcnmqFQN6xi1%2FkOwDjCUkZSlZxybm4PbnJLXQUSL9yDbtuuJPTk%2Ban7uGIhSDyAC053P9CM10RjF4CmpQ4ubOko5zLLVHYfURxr0M5TCDI0gCO9sfYox3Qf4jcKjfV5b%2BXag%2B0JuG6hU3JX7cE696Rz7MrDAWQRs0NhJe%2FfbVdXr94VggJv1AOSq5J1PRKtvD2LtnsTxXCyOU37A5wVr3ISbDVJz21%2Ba5aSvknPErMguOUSEt9OfX5oI%2FUMmXY6GU5VBgMyh9JAbh6fevzyGL6MtZKOyPx%2BzH48n3Q5eC6GWaJvb2S27BwcHynb6Kp6ZrACjrYuZwZ4kK9S4QPANstY%2BiRvpIU8n9QotXRioNITLITlAUbjKazkvwItngcFx8bCl5poY%2BFHEIJQJRMw7qy1xAY6pgHkr2%2FAQrq3dwSAebcGCQY%2BZkmgJKSxDC26v7TPtcYS5Kp%2FpduU1N9I6t6Auq2%2B6UlHkm6Q%2BOk7tzCqoQ2iSNeLbWTeU4Xi2gRaOIaOXRclxd6nXOPi6Tl%2BS12h7PHNeqW3p1aFxpFP4TzPwzAT0EKbfOfB05Qx9OvWu3ybdmdFPiB%2BEQTnlH9YghoAwindm59c%2F7Q%2F%2Barij2GOXse3IQV67ZTv3J8o&X-Amz-Signature=9aa35e51fd50f5bb28169bc8c0998de9fba383ae9788faf6c4b105dc9b9e6643&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HSXVOBQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHX%2FWd7JbNYD058cfBFEULATIZeI4qzDan52Ul2BODFbAiA5QdAl%2BLGm59LVR04Di5c2i4qJ73Wdmt8RWFOj3QKxVyqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVxl9hQw%2Ftwtq6kzBKtwDdVwmkof8chvEGHQitbQrf1LwN1iYFxgB7f%2FYhNVL%2Frt4M8rkqo%2F98cy7zjHw%2BJxoZZpX3Eq%2Fbc55%2FFzUmf%2BylKYd6GwEr5gbxVyig8UqqJaL0NXk0hlrA2aFukCGdID9BUkh99WE8u%2Bkt5eOnR9U9lS5tppOCGivZ1TEJ43IZGQpU%2BeNQjPIASXxFTwJFjYlmDmHGB3C5S85WsQFggESjQG%2FuJ6bRps6kmrEsDjZ4pcnmqFQN6xi1%2FkOwDjCUkZSlZxybm4PbnJLXQUSL9yDbtuuJPTk%2Ban7uGIhSDyAC053P9CM10RjF4CmpQ4ubOko5zLLVHYfURxr0M5TCDI0gCO9sfYox3Qf4jcKjfV5b%2BXag%2B0JuG6hU3JX7cE696Rz7MrDAWQRs0NhJe%2FfbVdXr94VggJv1AOSq5J1PRKtvD2LtnsTxXCyOU37A5wVr3ISbDVJz21%2Ba5aSvknPErMguOUSEt9OfX5oI%2FUMmXY6GU5VBgMyh9JAbh6fevzyGL6MtZKOyPx%2BzH48n3Q5eC6GWaJvb2S27BwcHynb6Kp6ZrACjrYuZwZ4kK9S4QPANstY%2BiRvpIU8n9QotXRioNITLITlAUbjKazkvwItngcFx8bCl5poY%2BFHEIJQJRMw7qy1xAY6pgHkr2%2FAQrq3dwSAebcGCQY%2BZkmgJKSxDC26v7TPtcYS5Kp%2FpduU1N9I6t6Auq2%2B6UlHkm6Q%2BOk7tzCqoQ2iSNeLbWTeU4Xi2gRaOIaOXRclxd6nXOPi6Tl%2BS12h7PHNeqW3p1aFxpFP4TzPwzAT0EKbfOfB05Qx9OvWu3ybdmdFPiB%2BEQTnlH9YghoAwindm59c%2F7Q%2F%2Barij2GOXse3IQV67ZTv3J8o&X-Amz-Signature=f536f99f5fe2ff3ee9ba319d7577dcb7676705b2945dbc805cb0142f6b826314&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HSXVOBQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHX%2FWd7JbNYD058cfBFEULATIZeI4qzDan52Ul2BODFbAiA5QdAl%2BLGm59LVR04Di5c2i4qJ73Wdmt8RWFOj3QKxVyqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVxl9hQw%2Ftwtq6kzBKtwDdVwmkof8chvEGHQitbQrf1LwN1iYFxgB7f%2FYhNVL%2Frt4M8rkqo%2F98cy7zjHw%2BJxoZZpX3Eq%2Fbc55%2FFzUmf%2BylKYd6GwEr5gbxVyig8UqqJaL0NXk0hlrA2aFukCGdID9BUkh99WE8u%2Bkt5eOnR9U9lS5tppOCGivZ1TEJ43IZGQpU%2BeNQjPIASXxFTwJFjYlmDmHGB3C5S85WsQFggESjQG%2FuJ6bRps6kmrEsDjZ4pcnmqFQN6xi1%2FkOwDjCUkZSlZxybm4PbnJLXQUSL9yDbtuuJPTk%2Ban7uGIhSDyAC053P9CM10RjF4CmpQ4ubOko5zLLVHYfURxr0M5TCDI0gCO9sfYox3Qf4jcKjfV5b%2BXag%2B0JuG6hU3JX7cE696Rz7MrDAWQRs0NhJe%2FfbVdXr94VggJv1AOSq5J1PRKtvD2LtnsTxXCyOU37A5wVr3ISbDVJz21%2Ba5aSvknPErMguOUSEt9OfX5oI%2FUMmXY6GU5VBgMyh9JAbh6fevzyGL6MtZKOyPx%2BzH48n3Q5eC6GWaJvb2S27BwcHynb6Kp6ZrACjrYuZwZ4kK9S4QPANstY%2BiRvpIU8n9QotXRioNITLITlAUbjKazkvwItngcFx8bCl5poY%2BFHEIJQJRMw7qy1xAY6pgHkr2%2FAQrq3dwSAebcGCQY%2BZkmgJKSxDC26v7TPtcYS5Kp%2FpduU1N9I6t6Auq2%2B6UlHkm6Q%2BOk7tzCqoQ2iSNeLbWTeU4Xi2gRaOIaOXRclxd6nXOPi6Tl%2BS12h7PHNeqW3p1aFxpFP4TzPwzAT0EKbfOfB05Qx9OvWu3ybdmdFPiB%2BEQTnlH9YghoAwindm59c%2F7Q%2F%2Barij2GOXse3IQV67ZTv3J8o&X-Amz-Signature=65ebc0f2f73f9f6371a5680ee9e961d9ef7ed02fe56bc061ca2d5d331db892ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HSXVOBQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHX%2FWd7JbNYD058cfBFEULATIZeI4qzDan52Ul2BODFbAiA5QdAl%2BLGm59LVR04Di5c2i4qJ73Wdmt8RWFOj3QKxVyqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVxl9hQw%2Ftwtq6kzBKtwDdVwmkof8chvEGHQitbQrf1LwN1iYFxgB7f%2FYhNVL%2Frt4M8rkqo%2F98cy7zjHw%2BJxoZZpX3Eq%2Fbc55%2FFzUmf%2BylKYd6GwEr5gbxVyig8UqqJaL0NXk0hlrA2aFukCGdID9BUkh99WE8u%2Bkt5eOnR9U9lS5tppOCGivZ1TEJ43IZGQpU%2BeNQjPIASXxFTwJFjYlmDmHGB3C5S85WsQFggESjQG%2FuJ6bRps6kmrEsDjZ4pcnmqFQN6xi1%2FkOwDjCUkZSlZxybm4PbnJLXQUSL9yDbtuuJPTk%2Ban7uGIhSDyAC053P9CM10RjF4CmpQ4ubOko5zLLVHYfURxr0M5TCDI0gCO9sfYox3Qf4jcKjfV5b%2BXag%2B0JuG6hU3JX7cE696Rz7MrDAWQRs0NhJe%2FfbVdXr94VggJv1AOSq5J1PRKtvD2LtnsTxXCyOU37A5wVr3ISbDVJz21%2Ba5aSvknPErMguOUSEt9OfX5oI%2FUMmXY6GU5VBgMyh9JAbh6fevzyGL6MtZKOyPx%2BzH48n3Q5eC6GWaJvb2S27BwcHynb6Kp6ZrACjrYuZwZ4kK9S4QPANstY%2BiRvpIU8n9QotXRioNITLITlAUbjKazkvwItngcFx8bCl5poY%2BFHEIJQJRMw7qy1xAY6pgHkr2%2FAQrq3dwSAebcGCQY%2BZkmgJKSxDC26v7TPtcYS5Kp%2FpduU1N9I6t6Auq2%2B6UlHkm6Q%2BOk7tzCqoQ2iSNeLbWTeU4Xi2gRaOIaOXRclxd6nXOPi6Tl%2BS12h7PHNeqW3p1aFxpFP4TzPwzAT0EKbfOfB05Qx9OvWu3ybdmdFPiB%2BEQTnlH9YghoAwindm59c%2F7Q%2F%2Barij2GOXse3IQV67ZTv3J8o&X-Amz-Signature=41c30ad1503d7abb45e2fb42133ff0e97126581007394ece71bdd51d9eeff1e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HSXVOBQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHX%2FWd7JbNYD058cfBFEULATIZeI4qzDan52Ul2BODFbAiA5QdAl%2BLGm59LVR04Di5c2i4qJ73Wdmt8RWFOj3QKxVyqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVxl9hQw%2Ftwtq6kzBKtwDdVwmkof8chvEGHQitbQrf1LwN1iYFxgB7f%2FYhNVL%2Frt4M8rkqo%2F98cy7zjHw%2BJxoZZpX3Eq%2Fbc55%2FFzUmf%2BylKYd6GwEr5gbxVyig8UqqJaL0NXk0hlrA2aFukCGdID9BUkh99WE8u%2Bkt5eOnR9U9lS5tppOCGivZ1TEJ43IZGQpU%2BeNQjPIASXxFTwJFjYlmDmHGB3C5S85WsQFggESjQG%2FuJ6bRps6kmrEsDjZ4pcnmqFQN6xi1%2FkOwDjCUkZSlZxybm4PbnJLXQUSL9yDbtuuJPTk%2Ban7uGIhSDyAC053P9CM10RjF4CmpQ4ubOko5zLLVHYfURxr0M5TCDI0gCO9sfYox3Qf4jcKjfV5b%2BXag%2B0JuG6hU3JX7cE696Rz7MrDAWQRs0NhJe%2FfbVdXr94VggJv1AOSq5J1PRKtvD2LtnsTxXCyOU37A5wVr3ISbDVJz21%2Ba5aSvknPErMguOUSEt9OfX5oI%2FUMmXY6GU5VBgMyh9JAbh6fevzyGL6MtZKOyPx%2BzH48n3Q5eC6GWaJvb2S27BwcHynb6Kp6ZrACjrYuZwZ4kK9S4QPANstY%2BiRvpIU8n9QotXRioNITLITlAUbjKazkvwItngcFx8bCl5poY%2BFHEIJQJRMw7qy1xAY6pgHkr2%2FAQrq3dwSAebcGCQY%2BZkmgJKSxDC26v7TPtcYS5Kp%2FpduU1N9I6t6Auq2%2B6UlHkm6Q%2BOk7tzCqoQ2iSNeLbWTeU4Xi2gRaOIaOXRclxd6nXOPi6Tl%2BS12h7PHNeqW3p1aFxpFP4TzPwzAT0EKbfOfB05Qx9OvWu3ybdmdFPiB%2BEQTnlH9YghoAwindm59c%2F7Q%2F%2Barij2GOXse3IQV67ZTv3J8o&X-Amz-Signature=f772c22ff4b013a3b7e59a65d1af84d398869dafa4808556a78205b834c60177&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HSXVOBQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHX%2FWd7JbNYD058cfBFEULATIZeI4qzDan52Ul2BODFbAiA5QdAl%2BLGm59LVR04Di5c2i4qJ73Wdmt8RWFOj3QKxVyqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVxl9hQw%2Ftwtq6kzBKtwDdVwmkof8chvEGHQitbQrf1LwN1iYFxgB7f%2FYhNVL%2Frt4M8rkqo%2F98cy7zjHw%2BJxoZZpX3Eq%2Fbc55%2FFzUmf%2BylKYd6GwEr5gbxVyig8UqqJaL0NXk0hlrA2aFukCGdID9BUkh99WE8u%2Bkt5eOnR9U9lS5tppOCGivZ1TEJ43IZGQpU%2BeNQjPIASXxFTwJFjYlmDmHGB3C5S85WsQFggESjQG%2FuJ6bRps6kmrEsDjZ4pcnmqFQN6xi1%2FkOwDjCUkZSlZxybm4PbnJLXQUSL9yDbtuuJPTk%2Ban7uGIhSDyAC053P9CM10RjF4CmpQ4ubOko5zLLVHYfURxr0M5TCDI0gCO9sfYox3Qf4jcKjfV5b%2BXag%2B0JuG6hU3JX7cE696Rz7MrDAWQRs0NhJe%2FfbVdXr94VggJv1AOSq5J1PRKtvD2LtnsTxXCyOU37A5wVr3ISbDVJz21%2Ba5aSvknPErMguOUSEt9OfX5oI%2FUMmXY6GU5VBgMyh9JAbh6fevzyGL6MtZKOyPx%2BzH48n3Q5eC6GWaJvb2S27BwcHynb6Kp6ZrACjrYuZwZ4kK9S4QPANstY%2BiRvpIU8n9QotXRioNITLITlAUbjKazkvwItngcFx8bCl5poY%2BFHEIJQJRMw7qy1xAY6pgHkr2%2FAQrq3dwSAebcGCQY%2BZkmgJKSxDC26v7TPtcYS5Kp%2FpduU1N9I6t6Auq2%2B6UlHkm6Q%2BOk7tzCqoQ2iSNeLbWTeU4Xi2gRaOIaOXRclxd6nXOPi6Tl%2BS12h7PHNeqW3p1aFxpFP4TzPwzAT0EKbfOfB05Qx9OvWu3ybdmdFPiB%2BEQTnlH9YghoAwindm59c%2F7Q%2F%2Barij2GOXse3IQV67ZTv3J8o&X-Amz-Signature=fd0675ff2660a019d1e1f577a79bf6a1d8c910b6101644eab771f71fd2035a08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HSXVOBQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHX%2FWd7JbNYD058cfBFEULATIZeI4qzDan52Ul2BODFbAiA5QdAl%2BLGm59LVR04Di5c2i4qJ73Wdmt8RWFOj3QKxVyqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVxl9hQw%2Ftwtq6kzBKtwDdVwmkof8chvEGHQitbQrf1LwN1iYFxgB7f%2FYhNVL%2Frt4M8rkqo%2F98cy7zjHw%2BJxoZZpX3Eq%2Fbc55%2FFzUmf%2BylKYd6GwEr5gbxVyig8UqqJaL0NXk0hlrA2aFukCGdID9BUkh99WE8u%2Bkt5eOnR9U9lS5tppOCGivZ1TEJ43IZGQpU%2BeNQjPIASXxFTwJFjYlmDmHGB3C5S85WsQFggESjQG%2FuJ6bRps6kmrEsDjZ4pcnmqFQN6xi1%2FkOwDjCUkZSlZxybm4PbnJLXQUSL9yDbtuuJPTk%2Ban7uGIhSDyAC053P9CM10RjF4CmpQ4ubOko5zLLVHYfURxr0M5TCDI0gCO9sfYox3Qf4jcKjfV5b%2BXag%2B0JuG6hU3JX7cE696Rz7MrDAWQRs0NhJe%2FfbVdXr94VggJv1AOSq5J1PRKtvD2LtnsTxXCyOU37A5wVr3ISbDVJz21%2Ba5aSvknPErMguOUSEt9OfX5oI%2FUMmXY6GU5VBgMyh9JAbh6fevzyGL6MtZKOyPx%2BzH48n3Q5eC6GWaJvb2S27BwcHynb6Kp6ZrACjrYuZwZ4kK9S4QPANstY%2BiRvpIU8n9QotXRioNITLITlAUbjKazkvwItngcFx8bCl5poY%2BFHEIJQJRMw7qy1xAY6pgHkr2%2FAQrq3dwSAebcGCQY%2BZkmgJKSxDC26v7TPtcYS5Kp%2FpduU1N9I6t6Auq2%2B6UlHkm6Q%2BOk7tzCqoQ2iSNeLbWTeU4Xi2gRaOIaOXRclxd6nXOPi6Tl%2BS12h7PHNeqW3p1aFxpFP4TzPwzAT0EKbfOfB05Qx9OvWu3ybdmdFPiB%2BEQTnlH9YghoAwindm59c%2F7Q%2F%2Barij2GOXse3IQV67ZTv3J8o&X-Amz-Signature=f8cff48aac09b9aa87f569cc326f77cbb79a17346dcd29a1bcdde8984159e6f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HSXVOBQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHX%2FWd7JbNYD058cfBFEULATIZeI4qzDan52Ul2BODFbAiA5QdAl%2BLGm59LVR04Di5c2i4qJ73Wdmt8RWFOj3QKxVyqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVxl9hQw%2Ftwtq6kzBKtwDdVwmkof8chvEGHQitbQrf1LwN1iYFxgB7f%2FYhNVL%2Frt4M8rkqo%2F98cy7zjHw%2BJxoZZpX3Eq%2Fbc55%2FFzUmf%2BylKYd6GwEr5gbxVyig8UqqJaL0NXk0hlrA2aFukCGdID9BUkh99WE8u%2Bkt5eOnR9U9lS5tppOCGivZ1TEJ43IZGQpU%2BeNQjPIASXxFTwJFjYlmDmHGB3C5S85WsQFggESjQG%2FuJ6bRps6kmrEsDjZ4pcnmqFQN6xi1%2FkOwDjCUkZSlZxybm4PbnJLXQUSL9yDbtuuJPTk%2Ban7uGIhSDyAC053P9CM10RjF4CmpQ4ubOko5zLLVHYfURxr0M5TCDI0gCO9sfYox3Qf4jcKjfV5b%2BXag%2B0JuG6hU3JX7cE696Rz7MrDAWQRs0NhJe%2FfbVdXr94VggJv1AOSq5J1PRKtvD2LtnsTxXCyOU37A5wVr3ISbDVJz21%2Ba5aSvknPErMguOUSEt9OfX5oI%2FUMmXY6GU5VBgMyh9JAbh6fevzyGL6MtZKOyPx%2BzH48n3Q5eC6GWaJvb2S27BwcHynb6Kp6ZrACjrYuZwZ4kK9S4QPANstY%2BiRvpIU8n9QotXRioNITLITlAUbjKazkvwItngcFx8bCl5poY%2BFHEIJQJRMw7qy1xAY6pgHkr2%2FAQrq3dwSAebcGCQY%2BZkmgJKSxDC26v7TPtcYS5Kp%2FpduU1N9I6t6Auq2%2B6UlHkm6Q%2BOk7tzCqoQ2iSNeLbWTeU4Xi2gRaOIaOXRclxd6nXOPi6Tl%2BS12h7PHNeqW3p1aFxpFP4TzPwzAT0EKbfOfB05Qx9OvWu3ybdmdFPiB%2BEQTnlH9YghoAwindm59c%2F7Q%2F%2Barij2GOXse3IQV67ZTv3J8o&X-Amz-Signature=0037548472e850da5578a37e358db3c8e4ef1298c2b2da646ee81058d1eb3ee9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HSXVOBQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHX%2FWd7JbNYD058cfBFEULATIZeI4qzDan52Ul2BODFbAiA5QdAl%2BLGm59LVR04Di5c2i4qJ73Wdmt8RWFOj3QKxVyqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVxl9hQw%2Ftwtq6kzBKtwDdVwmkof8chvEGHQitbQrf1LwN1iYFxgB7f%2FYhNVL%2Frt4M8rkqo%2F98cy7zjHw%2BJxoZZpX3Eq%2Fbc55%2FFzUmf%2BylKYd6GwEr5gbxVyig8UqqJaL0NXk0hlrA2aFukCGdID9BUkh99WE8u%2Bkt5eOnR9U9lS5tppOCGivZ1TEJ43IZGQpU%2BeNQjPIASXxFTwJFjYlmDmHGB3C5S85WsQFggESjQG%2FuJ6bRps6kmrEsDjZ4pcnmqFQN6xi1%2FkOwDjCUkZSlZxybm4PbnJLXQUSL9yDbtuuJPTk%2Ban7uGIhSDyAC053P9CM10RjF4CmpQ4ubOko5zLLVHYfURxr0M5TCDI0gCO9sfYox3Qf4jcKjfV5b%2BXag%2B0JuG6hU3JX7cE696Rz7MrDAWQRs0NhJe%2FfbVdXr94VggJv1AOSq5J1PRKtvD2LtnsTxXCyOU37A5wVr3ISbDVJz21%2Ba5aSvknPErMguOUSEt9OfX5oI%2FUMmXY6GU5VBgMyh9JAbh6fevzyGL6MtZKOyPx%2BzH48n3Q5eC6GWaJvb2S27BwcHynb6Kp6ZrACjrYuZwZ4kK9S4QPANstY%2BiRvpIU8n9QotXRioNITLITlAUbjKazkvwItngcFx8bCl5poY%2BFHEIJQJRMw7qy1xAY6pgHkr2%2FAQrq3dwSAebcGCQY%2BZkmgJKSxDC26v7TPtcYS5Kp%2FpduU1N9I6t6Auq2%2B6UlHkm6Q%2BOk7tzCqoQ2iSNeLbWTeU4Xi2gRaOIaOXRclxd6nXOPi6Tl%2BS12h7PHNeqW3p1aFxpFP4TzPwzAT0EKbfOfB05Qx9OvWu3ybdmdFPiB%2BEQTnlH9YghoAwindm59c%2F7Q%2F%2Barij2GOXse3IQV67ZTv3J8o&X-Amz-Signature=5d37a708d8522cf7009602d69b54d8e28ef74899a4260ce1dbdb851533683bd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
