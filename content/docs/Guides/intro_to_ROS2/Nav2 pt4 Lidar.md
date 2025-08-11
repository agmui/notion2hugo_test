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

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K5O6JP4%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfeHp5bc0WMFVx%2FJjKzciQCWynMwjmB362psPgwRNlhQIgDerVMWdmFKR8O2LD5yRcqfAm65G00gBS3ubtck5BtvEqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzsguxNnF35FZMBYCrcA1l7ZPw4xG7Q4ekGFHmphg1zqRPKyV4d8Glk6cDXwxBo6D3HUD%2FOk7RemXWKFCYLmZbM9PBvcOMhQfIzZo7JjeeosC1pJx2By4WGk61Ot8j506oUtJNmYf3wwgliVtg6MNZS7roetrSeNqSbUjy%2FpnZVLNJ3GMfXfIEKOwqiDoI5N%2B%2FoqgVs5j0rbJuiE85Ri04ISHt%2F7pKRlTAP9r2%2BjtcrovzS9l68es08I2TSeuE%2BlBHmjGpJ7qoY%2B7hHTR%2BOIDuCRcnDalnjy2H6gJUi65WDXxUXXIARwAWZoFCv%2FE29pqbXo1Eino6N%2B6Fk55ovyVVAAIUvhjDuuCM9TfyDbXZNFF7nSH4AZuK8bC8822OCUuIbGlJyz5Ig0mKhc5CNoopl0njiZKPwuKBRsMVhRF6N5ein4fbQ5bZ6IIQmCMWWveyshXvcCjgA5toqYonyO%2FU8TZeLAgGPG37V03eFkgJ60ewu1hL%2BjnP2qrlebul2TH0A0SXHjJ6mKnm%2BLussyZKA89z4hKa0MBlQXbfBRNIAVKSeSi2shIqzCVgeuALBP0jiSVxLb83y29QOD03uzCN2hlU34S%2B3QSDtncR2b23JXGMd8ple1GFb8f1GKHGssMCIwObtxJapKAc5MKrX5MQGOqUBQgIw%2F%2BVYrQC9t%2BbuSVkGOeTj2BvBnme1%2B5duviL%2FT7HsfKxoJjwyEmDwzX1SYGbkok2wepMWl4phUZDWoz1YD18Fx5cfNSyetj0QwoJac33ZpMeHR6JolvhDUfZucWtABKhgXBDi%2Fvu5ENU5%2FRcO2cNEOok96oRu3nxlm7eSaEq3BCs19R3BW0oOnvK1JklsyZrmaUkSaeFjQR%2FArBv01aGF7c%2Fx&X-Amz-Signature=f9c377005aebdd4d6ba98cfd056991bc201f36d0596a2856352aabe41a4fc870&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEQJKZJJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAhpX2052dtbVZszUjaVIq7J1mGfqmIIOO9HJb93PcVFAiAsfzFMS0v8Zj09Ffb4LVuwPJqY2GE3qIAgFreaW6o3TyqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuCO1zXqBjf8S4oiuKtwDhM%2BT2j0TpHHoFWfwgsI%2FEXcoMReRdU2QBcXk7A1QmIQ4jI%2F%2Bonyj9q0QM4RcZm%2BsBSd%2FqBSjOJDs38V1CXWbgV3T%2BuDYeO0tReDAY8Iz2ZtfhNqnk90OBoSzHFLFajx1P5BEjJw49YoQmTDKP%2BYqzEgSC6FOAI%2FPETv4HwuWzY73BWXbu1kOTdE3liF3YzyhGYDs80YVy7qc7yWHmrFK6skkYg9IFK%2Fq2dBaUkjh%2B0KouFv8pw%2FsXTJXlliCRVZk6QzBD6KJvyiw6NgB4ISwVCV3smzcvZHwu4a1p5TGIPGGBcEB8q9JIhz4cqxXdponskpBHaM3NTFket0jY0jh99jfUWlr2BZ0EK52yVx34hJ%2Bmz2XpeKf3BARyEug9xfxg8mtm5pThkbP3vliTlm7asj4AjVppR1BkDkBO7qWqSGZRNp5Y%2B5mUCYZcNT0hEbAQ7rUCKTICHi1PqoMKFX6mLH87c5tS5pSaTx5E22eiYK8%2Feae%2Fx7%2B2JXZI4EaFv6BpGGl9yiRwIRFrCvl0RzXAnl8K5V1mQy4vF%2FFT0BgLQwIdDEi6suoQZTc4M7WToP1EbH%2FKd7Y5gPlKDZ75MrJR%2FT4qX4lMce37JK46bYZHV2Wl2OuJ6Vl%2BBxcMTwwndjkxAY6pgHgaXRK4sjQsRZzhTwNUfAiJK6LPoOOfKKwMGEU9I8UHsy41ea12MqgurJYdtNllZ%2FRY%2Fjn0FImImWb1A0S3yUxPJ%2Bi67Oe%2Fdcl3%2FHOQ%2BCYk8CRw3vBJd1WTAPVhIWmJPgcfc1bW%2FJPZAIykjrREZyL8GeuVKTfPrwvieiJv1d%2Fq8E7k8W1jsHZpKJK%2FSPLk%2FroLLOlxkiyT3uUK3vaX8aLXunvWPqn&X-Amz-Signature=24be89abbf31c20ef7d15a88943b6c425bbb46609f506a72dcc9bd9e9d4bb857&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEQJKZJJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAhpX2052dtbVZszUjaVIq7J1mGfqmIIOO9HJb93PcVFAiAsfzFMS0v8Zj09Ffb4LVuwPJqY2GE3qIAgFreaW6o3TyqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuCO1zXqBjf8S4oiuKtwDhM%2BT2j0TpHHoFWfwgsI%2FEXcoMReRdU2QBcXk7A1QmIQ4jI%2F%2Bonyj9q0QM4RcZm%2BsBSd%2FqBSjOJDs38V1CXWbgV3T%2BuDYeO0tReDAY8Iz2ZtfhNqnk90OBoSzHFLFajx1P5BEjJw49YoQmTDKP%2BYqzEgSC6FOAI%2FPETv4HwuWzY73BWXbu1kOTdE3liF3YzyhGYDs80YVy7qc7yWHmrFK6skkYg9IFK%2Fq2dBaUkjh%2B0KouFv8pw%2FsXTJXlliCRVZk6QzBD6KJvyiw6NgB4ISwVCV3smzcvZHwu4a1p5TGIPGGBcEB8q9JIhz4cqxXdponskpBHaM3NTFket0jY0jh99jfUWlr2BZ0EK52yVx34hJ%2Bmz2XpeKf3BARyEug9xfxg8mtm5pThkbP3vliTlm7asj4AjVppR1BkDkBO7qWqSGZRNp5Y%2B5mUCYZcNT0hEbAQ7rUCKTICHi1PqoMKFX6mLH87c5tS5pSaTx5E22eiYK8%2Feae%2Fx7%2B2JXZI4EaFv6BpGGl9yiRwIRFrCvl0RzXAnl8K5V1mQy4vF%2FFT0BgLQwIdDEi6suoQZTc4M7WToP1EbH%2FKd7Y5gPlKDZ75MrJR%2FT4qX4lMce37JK46bYZHV2Wl2OuJ6Vl%2BBxcMTwwndjkxAY6pgHgaXRK4sjQsRZzhTwNUfAiJK6LPoOOfKKwMGEU9I8UHsy41ea12MqgurJYdtNllZ%2FRY%2Fjn0FImImWb1A0S3yUxPJ%2Bi67Oe%2Fdcl3%2FHOQ%2BCYk8CRw3vBJd1WTAPVhIWmJPgcfc1bW%2FJPZAIykjrREZyL8GeuVKTfPrwvieiJv1d%2Fq8E7k8W1jsHZpKJK%2FSPLk%2FroLLOlxkiyT3uUK3vaX8aLXunvWPqn&X-Amz-Signature=de49264399994c73b971eb977dccf3ea8d977270af5bedb89ed1cd4b9404db46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEQJKZJJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAhpX2052dtbVZszUjaVIq7J1mGfqmIIOO9HJb93PcVFAiAsfzFMS0v8Zj09Ffb4LVuwPJqY2GE3qIAgFreaW6o3TyqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuCO1zXqBjf8S4oiuKtwDhM%2BT2j0TpHHoFWfwgsI%2FEXcoMReRdU2QBcXk7A1QmIQ4jI%2F%2Bonyj9q0QM4RcZm%2BsBSd%2FqBSjOJDs38V1CXWbgV3T%2BuDYeO0tReDAY8Iz2ZtfhNqnk90OBoSzHFLFajx1P5BEjJw49YoQmTDKP%2BYqzEgSC6FOAI%2FPETv4HwuWzY73BWXbu1kOTdE3liF3YzyhGYDs80YVy7qc7yWHmrFK6skkYg9IFK%2Fq2dBaUkjh%2B0KouFv8pw%2FsXTJXlliCRVZk6QzBD6KJvyiw6NgB4ISwVCV3smzcvZHwu4a1p5TGIPGGBcEB8q9JIhz4cqxXdponskpBHaM3NTFket0jY0jh99jfUWlr2BZ0EK52yVx34hJ%2Bmz2XpeKf3BARyEug9xfxg8mtm5pThkbP3vliTlm7asj4AjVppR1BkDkBO7qWqSGZRNp5Y%2B5mUCYZcNT0hEbAQ7rUCKTICHi1PqoMKFX6mLH87c5tS5pSaTx5E22eiYK8%2Feae%2Fx7%2B2JXZI4EaFv6BpGGl9yiRwIRFrCvl0RzXAnl8K5V1mQy4vF%2FFT0BgLQwIdDEi6suoQZTc4M7WToP1EbH%2FKd7Y5gPlKDZ75MrJR%2FT4qX4lMce37JK46bYZHV2Wl2OuJ6Vl%2BBxcMTwwndjkxAY6pgHgaXRK4sjQsRZzhTwNUfAiJK6LPoOOfKKwMGEU9I8UHsy41ea12MqgurJYdtNllZ%2FRY%2Fjn0FImImWb1A0S3yUxPJ%2Bi67Oe%2Fdcl3%2FHOQ%2BCYk8CRw3vBJd1WTAPVhIWmJPgcfc1bW%2FJPZAIykjrREZyL8GeuVKTfPrwvieiJv1d%2Fq8E7k8W1jsHZpKJK%2FSPLk%2FroLLOlxkiyT3uUK3vaX8aLXunvWPqn&X-Amz-Signature=a81922c28c5c8bbe9171845fccc98c15f2fec2cea45a4f58363860fad9c1c190&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEQJKZJJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAhpX2052dtbVZszUjaVIq7J1mGfqmIIOO9HJb93PcVFAiAsfzFMS0v8Zj09Ffb4LVuwPJqY2GE3qIAgFreaW6o3TyqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuCO1zXqBjf8S4oiuKtwDhM%2BT2j0TpHHoFWfwgsI%2FEXcoMReRdU2QBcXk7A1QmIQ4jI%2F%2Bonyj9q0QM4RcZm%2BsBSd%2FqBSjOJDs38V1CXWbgV3T%2BuDYeO0tReDAY8Iz2ZtfhNqnk90OBoSzHFLFajx1P5BEjJw49YoQmTDKP%2BYqzEgSC6FOAI%2FPETv4HwuWzY73BWXbu1kOTdE3liF3YzyhGYDs80YVy7qc7yWHmrFK6skkYg9IFK%2Fq2dBaUkjh%2B0KouFv8pw%2FsXTJXlliCRVZk6QzBD6KJvyiw6NgB4ISwVCV3smzcvZHwu4a1p5TGIPGGBcEB8q9JIhz4cqxXdponskpBHaM3NTFket0jY0jh99jfUWlr2BZ0EK52yVx34hJ%2Bmz2XpeKf3BARyEug9xfxg8mtm5pThkbP3vliTlm7asj4AjVppR1BkDkBO7qWqSGZRNp5Y%2B5mUCYZcNT0hEbAQ7rUCKTICHi1PqoMKFX6mLH87c5tS5pSaTx5E22eiYK8%2Feae%2Fx7%2B2JXZI4EaFv6BpGGl9yiRwIRFrCvl0RzXAnl8K5V1mQy4vF%2FFT0BgLQwIdDEi6suoQZTc4M7WToP1EbH%2FKd7Y5gPlKDZ75MrJR%2FT4qX4lMce37JK46bYZHV2Wl2OuJ6Vl%2BBxcMTwwndjkxAY6pgHgaXRK4sjQsRZzhTwNUfAiJK6LPoOOfKKwMGEU9I8UHsy41ea12MqgurJYdtNllZ%2FRY%2Fjn0FImImWb1A0S3yUxPJ%2Bi67Oe%2Fdcl3%2FHOQ%2BCYk8CRw3vBJd1WTAPVhIWmJPgcfc1bW%2FJPZAIykjrREZyL8GeuVKTfPrwvieiJv1d%2Fq8E7k8W1jsHZpKJK%2FSPLk%2FroLLOlxkiyT3uUK3vaX8aLXunvWPqn&X-Amz-Signature=5ac4e72bfbbb47e8333b191e1cccd19b9bc0caf3fe4a293071a4a5b337fa51bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEQJKZJJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAhpX2052dtbVZszUjaVIq7J1mGfqmIIOO9HJb93PcVFAiAsfzFMS0v8Zj09Ffb4LVuwPJqY2GE3qIAgFreaW6o3TyqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuCO1zXqBjf8S4oiuKtwDhM%2BT2j0TpHHoFWfwgsI%2FEXcoMReRdU2QBcXk7A1QmIQ4jI%2F%2Bonyj9q0QM4RcZm%2BsBSd%2FqBSjOJDs38V1CXWbgV3T%2BuDYeO0tReDAY8Iz2ZtfhNqnk90OBoSzHFLFajx1P5BEjJw49YoQmTDKP%2BYqzEgSC6FOAI%2FPETv4HwuWzY73BWXbu1kOTdE3liF3YzyhGYDs80YVy7qc7yWHmrFK6skkYg9IFK%2Fq2dBaUkjh%2B0KouFv8pw%2FsXTJXlliCRVZk6QzBD6KJvyiw6NgB4ISwVCV3smzcvZHwu4a1p5TGIPGGBcEB8q9JIhz4cqxXdponskpBHaM3NTFket0jY0jh99jfUWlr2BZ0EK52yVx34hJ%2Bmz2XpeKf3BARyEug9xfxg8mtm5pThkbP3vliTlm7asj4AjVppR1BkDkBO7qWqSGZRNp5Y%2B5mUCYZcNT0hEbAQ7rUCKTICHi1PqoMKFX6mLH87c5tS5pSaTx5E22eiYK8%2Feae%2Fx7%2B2JXZI4EaFv6BpGGl9yiRwIRFrCvl0RzXAnl8K5V1mQy4vF%2FFT0BgLQwIdDEi6suoQZTc4M7WToP1EbH%2FKd7Y5gPlKDZ75MrJR%2FT4qX4lMce37JK46bYZHV2Wl2OuJ6Vl%2BBxcMTwwndjkxAY6pgHgaXRK4sjQsRZzhTwNUfAiJK6LPoOOfKKwMGEU9I8UHsy41ea12MqgurJYdtNllZ%2FRY%2Fjn0FImImWb1A0S3yUxPJ%2Bi67Oe%2Fdcl3%2FHOQ%2BCYk8CRw3vBJd1WTAPVhIWmJPgcfc1bW%2FJPZAIykjrREZyL8GeuVKTfPrwvieiJv1d%2Fq8E7k8W1jsHZpKJK%2FSPLk%2FroLLOlxkiyT3uUK3vaX8aLXunvWPqn&X-Amz-Signature=a67e2cf577bccefaf08b4ffa87398001509ba500e33edb68bb7f90b7257cc25b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEQJKZJJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAhpX2052dtbVZszUjaVIq7J1mGfqmIIOO9HJb93PcVFAiAsfzFMS0v8Zj09Ffb4LVuwPJqY2GE3qIAgFreaW6o3TyqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuCO1zXqBjf8S4oiuKtwDhM%2BT2j0TpHHoFWfwgsI%2FEXcoMReRdU2QBcXk7A1QmIQ4jI%2F%2Bonyj9q0QM4RcZm%2BsBSd%2FqBSjOJDs38V1CXWbgV3T%2BuDYeO0tReDAY8Iz2ZtfhNqnk90OBoSzHFLFajx1P5BEjJw49YoQmTDKP%2BYqzEgSC6FOAI%2FPETv4HwuWzY73BWXbu1kOTdE3liF3YzyhGYDs80YVy7qc7yWHmrFK6skkYg9IFK%2Fq2dBaUkjh%2B0KouFv8pw%2FsXTJXlliCRVZk6QzBD6KJvyiw6NgB4ISwVCV3smzcvZHwu4a1p5TGIPGGBcEB8q9JIhz4cqxXdponskpBHaM3NTFket0jY0jh99jfUWlr2BZ0EK52yVx34hJ%2Bmz2XpeKf3BARyEug9xfxg8mtm5pThkbP3vliTlm7asj4AjVppR1BkDkBO7qWqSGZRNp5Y%2B5mUCYZcNT0hEbAQ7rUCKTICHi1PqoMKFX6mLH87c5tS5pSaTx5E22eiYK8%2Feae%2Fx7%2B2JXZI4EaFv6BpGGl9yiRwIRFrCvl0RzXAnl8K5V1mQy4vF%2FFT0BgLQwIdDEi6suoQZTc4M7WToP1EbH%2FKd7Y5gPlKDZ75MrJR%2FT4qX4lMce37JK46bYZHV2Wl2OuJ6Vl%2BBxcMTwwndjkxAY6pgHgaXRK4sjQsRZzhTwNUfAiJK6LPoOOfKKwMGEU9I8UHsy41ea12MqgurJYdtNllZ%2FRY%2Fjn0FImImWb1A0S3yUxPJ%2Bi67Oe%2Fdcl3%2FHOQ%2BCYk8CRw3vBJd1WTAPVhIWmJPgcfc1bW%2FJPZAIykjrREZyL8GeuVKTfPrwvieiJv1d%2Fq8E7k8W1jsHZpKJK%2FSPLk%2FroLLOlxkiyT3uUK3vaX8aLXunvWPqn&X-Amz-Signature=4af2dd01e85e8361343f5e08e7cd451bb36af662340e740ec77f39fb3c77659b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEQJKZJJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAhpX2052dtbVZszUjaVIq7J1mGfqmIIOO9HJb93PcVFAiAsfzFMS0v8Zj09Ffb4LVuwPJqY2GE3qIAgFreaW6o3TyqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuCO1zXqBjf8S4oiuKtwDhM%2BT2j0TpHHoFWfwgsI%2FEXcoMReRdU2QBcXk7A1QmIQ4jI%2F%2Bonyj9q0QM4RcZm%2BsBSd%2FqBSjOJDs38V1CXWbgV3T%2BuDYeO0tReDAY8Iz2ZtfhNqnk90OBoSzHFLFajx1P5BEjJw49YoQmTDKP%2BYqzEgSC6FOAI%2FPETv4HwuWzY73BWXbu1kOTdE3liF3YzyhGYDs80YVy7qc7yWHmrFK6skkYg9IFK%2Fq2dBaUkjh%2B0KouFv8pw%2FsXTJXlliCRVZk6QzBD6KJvyiw6NgB4ISwVCV3smzcvZHwu4a1p5TGIPGGBcEB8q9JIhz4cqxXdponskpBHaM3NTFket0jY0jh99jfUWlr2BZ0EK52yVx34hJ%2Bmz2XpeKf3BARyEug9xfxg8mtm5pThkbP3vliTlm7asj4AjVppR1BkDkBO7qWqSGZRNp5Y%2B5mUCYZcNT0hEbAQ7rUCKTICHi1PqoMKFX6mLH87c5tS5pSaTx5E22eiYK8%2Feae%2Fx7%2B2JXZI4EaFv6BpGGl9yiRwIRFrCvl0RzXAnl8K5V1mQy4vF%2FFT0BgLQwIdDEi6suoQZTc4M7WToP1EbH%2FKd7Y5gPlKDZ75MrJR%2FT4qX4lMce37JK46bYZHV2Wl2OuJ6Vl%2BBxcMTwwndjkxAY6pgHgaXRK4sjQsRZzhTwNUfAiJK6LPoOOfKKwMGEU9I8UHsy41ea12MqgurJYdtNllZ%2FRY%2Fjn0FImImWb1A0S3yUxPJ%2Bi67Oe%2Fdcl3%2FHOQ%2BCYk8CRw3vBJd1WTAPVhIWmJPgcfc1bW%2FJPZAIykjrREZyL8GeuVKTfPrwvieiJv1d%2Fq8E7k8W1jsHZpKJK%2FSPLk%2FroLLOlxkiyT3uUK3vaX8aLXunvWPqn&X-Amz-Signature=506698f54100672e3241e5b9c6272b6606ac7250dccada0617b22ce4387a85e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEQJKZJJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAhpX2052dtbVZszUjaVIq7J1mGfqmIIOO9HJb93PcVFAiAsfzFMS0v8Zj09Ffb4LVuwPJqY2GE3qIAgFreaW6o3TyqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuCO1zXqBjf8S4oiuKtwDhM%2BT2j0TpHHoFWfwgsI%2FEXcoMReRdU2QBcXk7A1QmIQ4jI%2F%2Bonyj9q0QM4RcZm%2BsBSd%2FqBSjOJDs38V1CXWbgV3T%2BuDYeO0tReDAY8Iz2ZtfhNqnk90OBoSzHFLFajx1P5BEjJw49YoQmTDKP%2BYqzEgSC6FOAI%2FPETv4HwuWzY73BWXbu1kOTdE3liF3YzyhGYDs80YVy7qc7yWHmrFK6skkYg9IFK%2Fq2dBaUkjh%2B0KouFv8pw%2FsXTJXlliCRVZk6QzBD6KJvyiw6NgB4ISwVCV3smzcvZHwu4a1p5TGIPGGBcEB8q9JIhz4cqxXdponskpBHaM3NTFket0jY0jh99jfUWlr2BZ0EK52yVx34hJ%2Bmz2XpeKf3BARyEug9xfxg8mtm5pThkbP3vliTlm7asj4AjVppR1BkDkBO7qWqSGZRNp5Y%2B5mUCYZcNT0hEbAQ7rUCKTICHi1PqoMKFX6mLH87c5tS5pSaTx5E22eiYK8%2Feae%2Fx7%2B2JXZI4EaFv6BpGGl9yiRwIRFrCvl0RzXAnl8K5V1mQy4vF%2FFT0BgLQwIdDEi6suoQZTc4M7WToP1EbH%2FKd7Y5gPlKDZ75MrJR%2FT4qX4lMce37JK46bYZHV2Wl2OuJ6Vl%2BBxcMTwwndjkxAY6pgHgaXRK4sjQsRZzhTwNUfAiJK6LPoOOfKKwMGEU9I8UHsy41ea12MqgurJYdtNllZ%2FRY%2Fjn0FImImWb1A0S3yUxPJ%2Bi67Oe%2Fdcl3%2FHOQ%2BCYk8CRw3vBJd1WTAPVhIWmJPgcfc1bW%2FJPZAIykjrREZyL8GeuVKTfPrwvieiJv1d%2Fq8E7k8W1jsHZpKJK%2FSPLk%2FroLLOlxkiyT3uUK3vaX8aLXunvWPqn&X-Amz-Signature=a40b0d2c358ec12cfc013e9ecbce69cca5d667b400aa74731c09ab3fd3742174&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

[official docs link](https://github.com/Slamtec/rplidar_ros/tree/ros2#slamtec-lidar-ros2-package)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEQJKZJJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAhpX2052dtbVZszUjaVIq7J1mGfqmIIOO9HJb93PcVFAiAsfzFMS0v8Zj09Ffb4LVuwPJqY2GE3qIAgFreaW6o3TyqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuCO1zXqBjf8S4oiuKtwDhM%2BT2j0TpHHoFWfwgsI%2FEXcoMReRdU2QBcXk7A1QmIQ4jI%2F%2Bonyj9q0QM4RcZm%2BsBSd%2FqBSjOJDs38V1CXWbgV3T%2BuDYeO0tReDAY8Iz2ZtfhNqnk90OBoSzHFLFajx1P5BEjJw49YoQmTDKP%2BYqzEgSC6FOAI%2FPETv4HwuWzY73BWXbu1kOTdE3liF3YzyhGYDs80YVy7qc7yWHmrFK6skkYg9IFK%2Fq2dBaUkjh%2B0KouFv8pw%2FsXTJXlliCRVZk6QzBD6KJvyiw6NgB4ISwVCV3smzcvZHwu4a1p5TGIPGGBcEB8q9JIhz4cqxXdponskpBHaM3NTFket0jY0jh99jfUWlr2BZ0EK52yVx34hJ%2Bmz2XpeKf3BARyEug9xfxg8mtm5pThkbP3vliTlm7asj4AjVppR1BkDkBO7qWqSGZRNp5Y%2B5mUCYZcNT0hEbAQ7rUCKTICHi1PqoMKFX6mLH87c5tS5pSaTx5E22eiYK8%2Feae%2Fx7%2B2JXZI4EaFv6BpGGl9yiRwIRFrCvl0RzXAnl8K5V1mQy4vF%2FFT0BgLQwIdDEi6suoQZTc4M7WToP1EbH%2FKd7Y5gPlKDZ75MrJR%2FT4qX4lMce37JK46bYZHV2Wl2OuJ6Vl%2BBxcMTwwndjkxAY6pgHgaXRK4sjQsRZzhTwNUfAiJK6LPoOOfKKwMGEU9I8UHsy41ea12MqgurJYdtNllZ%2FRY%2Fjn0FImImWb1A0S3yUxPJ%2Bi67Oe%2Fdcl3%2FHOQ%2BCYk8CRw3vBJd1WTAPVhIWmJPgcfc1bW%2FJPZAIykjrREZyL8GeuVKTfPrwvieiJv1d%2Fq8E7k8W1jsHZpKJK%2FSPLk%2FroLLOlxkiyT3uUK3vaX8aLXunvWPqn&X-Amz-Signature=cca9fbbce202cd8f7411f3c96cd5f10841cd83c260c1f7e3544bce141b68186a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEQJKZJJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAhpX2052dtbVZszUjaVIq7J1mGfqmIIOO9HJb93PcVFAiAsfzFMS0v8Zj09Ffb4LVuwPJqY2GE3qIAgFreaW6o3TyqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuCO1zXqBjf8S4oiuKtwDhM%2BT2j0TpHHoFWfwgsI%2FEXcoMReRdU2QBcXk7A1QmIQ4jI%2F%2Bonyj9q0QM4RcZm%2BsBSd%2FqBSjOJDs38V1CXWbgV3T%2BuDYeO0tReDAY8Iz2ZtfhNqnk90OBoSzHFLFajx1P5BEjJw49YoQmTDKP%2BYqzEgSC6FOAI%2FPETv4HwuWzY73BWXbu1kOTdE3liF3YzyhGYDs80YVy7qc7yWHmrFK6skkYg9IFK%2Fq2dBaUkjh%2B0KouFv8pw%2FsXTJXlliCRVZk6QzBD6KJvyiw6NgB4ISwVCV3smzcvZHwu4a1p5TGIPGGBcEB8q9JIhz4cqxXdponskpBHaM3NTFket0jY0jh99jfUWlr2BZ0EK52yVx34hJ%2Bmz2XpeKf3BARyEug9xfxg8mtm5pThkbP3vliTlm7asj4AjVppR1BkDkBO7qWqSGZRNp5Y%2B5mUCYZcNT0hEbAQ7rUCKTICHi1PqoMKFX6mLH87c5tS5pSaTx5E22eiYK8%2Feae%2Fx7%2B2JXZI4EaFv6BpGGl9yiRwIRFrCvl0RzXAnl8K5V1mQy4vF%2FFT0BgLQwIdDEi6suoQZTc4M7WToP1EbH%2FKd7Y5gPlKDZ75MrJR%2FT4qX4lMce37JK46bYZHV2Wl2OuJ6Vl%2BBxcMTwwndjkxAY6pgHgaXRK4sjQsRZzhTwNUfAiJK6LPoOOfKKwMGEU9I8UHsy41ea12MqgurJYdtNllZ%2FRY%2Fjn0FImImWb1A0S3yUxPJ%2Bi67Oe%2Fdcl3%2FHOQ%2BCYk8CRw3vBJd1WTAPVhIWmJPgcfc1bW%2FJPZAIykjrREZyL8GeuVKTfPrwvieiJv1d%2Fq8E7k8W1jsHZpKJK%2FSPLk%2FroLLOlxkiyT3uUK3vaX8aLXunvWPqn&X-Amz-Signature=5ac4e72bfbbb47e8333b191e1cccd19b9bc0caf3fe4a293071a4a5b337fa51bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
