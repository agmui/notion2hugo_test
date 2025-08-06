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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DTM24TG%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIAXEgjtIqX5XyNKN3fwJKHy1OacEthNkErexbZZV7bhrAiEAycS2o6FIOSURgwiCYY1CCeJfxmYNuJNDmpXtAPzt%2B8Aq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEvPluix8kcAQo0VaircA5Q4waYvpuRDMTuHZyLxDloY9HXBqdINHbKUzxtmZcBwVopJUl0jdxuXNmgIJYZNH2lRzasIqVOHf8m0i21ADhf8RYW%2FPwqmAa7iDhYCT1nmDp3YaOz%2Bm3hjI%2FweXOgn466QVlikRJzym9cVuFVaXskximh7sB%2BJc1E0egl3fYOan3O4WBQwJdCrY2UZdNIwrQaTPwT4qOLAgByKqWKoI9tjtBs182PAt5XNbmF61JFLu2IphjIoGj0isSWKGzGr1uuXK5gdgcMIQ4QisgQFuDLvmfG1CDeZd%2Bq1dyMfzVgkfXtpgKoLg5A2TlY9MAQEzgqVJKoAyQ8U3Y17XHFFS5ty0VPULSlT%2BzhReTAboeaENPJi8N192YAP27SSa224id1GcZ3U0KP4xbPFfa798yV21Xz6anQ%2FLd8g84RT3UO126GLOaft2Y6DSqsXGYIHHDJ5uHYP519%2BDMXirHAvf3EDkhXh0w1EjJmk8OAoxf%2B6pJQB9QUQAcr%2Bqf50cpFw4%2FAoBQrKZWTzedNbiDgYD35JvmnCw6tLQv9UGir1YEnmoTrZkvyIVc5H2LYVWU60AwO29Snev8bXHPYXqbUgPOeCQvcomdtDvmpbiQg2tHhK1C50LmY2xXGfrRoPMLaWzMQGOqUBEEQNAB8144hCd0Kz2v5ieo8rzrJt3cuQPpSRrpvF6V8hQtw%2FySJi0oZKIpzS6v2e94PLtJVPY92zUTz0ATNujNAaWeLMOTG3d9XltW%2FTXsMi92WYhrcAW8nFhyfik0K7qWN%2BqD6Zmylx3ey75qUG6%2Fp0lwhEvk8KwxSS9X1grCPBTVWb9mp9RJ%2BaQwrRNr05BG%2FkzS7sk78F5O35mvdamQXUL81W&X-Amz-Signature=46adec41c2209a550ee034941157390fbd37312d6d9b7072f69f2a44e40ef48f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3FHIAI4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIGtPI2HHoLSW%2FOsvZIZf1dX4PBlYqchtkJVykEi1sC%2FgAiBt83KMcFVt37d95Bi%2BZR8RrUqu9OPwGOoZX9o9uyc82Cr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMhikv8MXlUt581gupKtwDHBWEEV6TYLqpky5T7Fggeq8b0E7luSnZuDGU%2FzgUBl78wHtUfEzU%2F%2FBgH7zr%2BvVZcADK47NH8Kf%2F%2BXxcuTUGu6OldFsmabwHdRiBc59tbq95z4Gyc7gyxL6qY4lZvO37BkNdinyl99ComWl5Sabg2LqoiJYS27GB%2FXvxrcd39We%2Fgh%2FZeliSYkunNTeDj%2FdBJ3S%2FX1iAGJcL1FgVpJmwyO1N0T1moeS6pfRdw3UvRWfxidwxa2Kb4mVvH0DrRiaBHVF071EkUAq4QtnB%2B6R242DYQn4fRtbFEx0BXWqSGfbY0d0kLaL2yBWuwZrzXCKhP9LOErDTaEyce%2FFkcqys1yW6y%2F3Z5nJC6Ij4RvJ8BQUo877MJO6hhfWxdPRDUllSlUFI%2BumnIiKW4AiQgdZuFln%2Bb4tYaIAEX7b3MQhNUi26L6T5woH08JoHKD%2F%2FTBgJgLGWH2ESiooPndlCNPyk4s0rl4apyUGA9%2BG0swgFG0b8vmCFVnPVjBdoJ2SeSwWubnxocDldjKXPUWMnvbhGl8HkGH9mVjheYJ5YI3k4Tayf0VrT1an0jCCZeEGCJEIbVHzqS6ipNdu7QHlg47Soxb4KD7YQzV0u6TobT%2FsIai5m4jYaDeDtz5CGXdAwppbMxAY6pgHDcmn0C4bFyi58lql0ZHMB4cKv8eiwYxynoc9S2d0csn8PMhpr2Lhk%2F1MnLHQNXayWCaEIsvQtnctQugGMi%2BrV3L13In2PpNvZV4z0I86L64DJLhCjejuwFnDKjxQfOu6HA9UmTLPKGv4lQOOCzP7uZeDLMCXgMFfQ6OzF%2FPH%2FwjjlpVsFI3y%2F2wBh4zJIY5MtZY4Cu705iC7VEv3YivDWQkJEYO%2F1&X-Amz-Signature=41a7c1872b6599722fb6b013715c39fcf37e862f7508873d027f15b13705d63f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3FHIAI4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIGtPI2HHoLSW%2FOsvZIZf1dX4PBlYqchtkJVykEi1sC%2FgAiBt83KMcFVt37d95Bi%2BZR8RrUqu9OPwGOoZX9o9uyc82Cr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMhikv8MXlUt581gupKtwDHBWEEV6TYLqpky5T7Fggeq8b0E7luSnZuDGU%2FzgUBl78wHtUfEzU%2F%2FBgH7zr%2BvVZcADK47NH8Kf%2F%2BXxcuTUGu6OldFsmabwHdRiBc59tbq95z4Gyc7gyxL6qY4lZvO37BkNdinyl99ComWl5Sabg2LqoiJYS27GB%2FXvxrcd39We%2Fgh%2FZeliSYkunNTeDj%2FdBJ3S%2FX1iAGJcL1FgVpJmwyO1N0T1moeS6pfRdw3UvRWfxidwxa2Kb4mVvH0DrRiaBHVF071EkUAq4QtnB%2B6R242DYQn4fRtbFEx0BXWqSGfbY0d0kLaL2yBWuwZrzXCKhP9LOErDTaEyce%2FFkcqys1yW6y%2F3Z5nJC6Ij4RvJ8BQUo877MJO6hhfWxdPRDUllSlUFI%2BumnIiKW4AiQgdZuFln%2Bb4tYaIAEX7b3MQhNUi26L6T5woH08JoHKD%2F%2FTBgJgLGWH2ESiooPndlCNPyk4s0rl4apyUGA9%2BG0swgFG0b8vmCFVnPVjBdoJ2SeSwWubnxocDldjKXPUWMnvbhGl8HkGH9mVjheYJ5YI3k4Tayf0VrT1an0jCCZeEGCJEIbVHzqS6ipNdu7QHlg47Soxb4KD7YQzV0u6TobT%2FsIai5m4jYaDeDtz5CGXdAwppbMxAY6pgHDcmn0C4bFyi58lql0ZHMB4cKv8eiwYxynoc9S2d0csn8PMhpr2Lhk%2F1MnLHQNXayWCaEIsvQtnctQugGMi%2BrV3L13In2PpNvZV4z0I86L64DJLhCjejuwFnDKjxQfOu6HA9UmTLPKGv4lQOOCzP7uZeDLMCXgMFfQ6OzF%2FPH%2FwjjlpVsFI3y%2F2wBh4zJIY5MtZY4Cu705iC7VEv3YivDWQkJEYO%2F1&X-Amz-Signature=534ac9c9b36635fbd53b810492a78b46e417b0e1e7bc9f12dc0166ea75c00008&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3FHIAI4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIGtPI2HHoLSW%2FOsvZIZf1dX4PBlYqchtkJVykEi1sC%2FgAiBt83KMcFVt37d95Bi%2BZR8RrUqu9OPwGOoZX9o9uyc82Cr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMhikv8MXlUt581gupKtwDHBWEEV6TYLqpky5T7Fggeq8b0E7luSnZuDGU%2FzgUBl78wHtUfEzU%2F%2FBgH7zr%2BvVZcADK47NH8Kf%2F%2BXxcuTUGu6OldFsmabwHdRiBc59tbq95z4Gyc7gyxL6qY4lZvO37BkNdinyl99ComWl5Sabg2LqoiJYS27GB%2FXvxrcd39We%2Fgh%2FZeliSYkunNTeDj%2FdBJ3S%2FX1iAGJcL1FgVpJmwyO1N0T1moeS6pfRdw3UvRWfxidwxa2Kb4mVvH0DrRiaBHVF071EkUAq4QtnB%2B6R242DYQn4fRtbFEx0BXWqSGfbY0d0kLaL2yBWuwZrzXCKhP9LOErDTaEyce%2FFkcqys1yW6y%2F3Z5nJC6Ij4RvJ8BQUo877MJO6hhfWxdPRDUllSlUFI%2BumnIiKW4AiQgdZuFln%2Bb4tYaIAEX7b3MQhNUi26L6T5woH08JoHKD%2F%2FTBgJgLGWH2ESiooPndlCNPyk4s0rl4apyUGA9%2BG0swgFG0b8vmCFVnPVjBdoJ2SeSwWubnxocDldjKXPUWMnvbhGl8HkGH9mVjheYJ5YI3k4Tayf0VrT1an0jCCZeEGCJEIbVHzqS6ipNdu7QHlg47Soxb4KD7YQzV0u6TobT%2FsIai5m4jYaDeDtz5CGXdAwppbMxAY6pgHDcmn0C4bFyi58lql0ZHMB4cKv8eiwYxynoc9S2d0csn8PMhpr2Lhk%2F1MnLHQNXayWCaEIsvQtnctQugGMi%2BrV3L13In2PpNvZV4z0I86L64DJLhCjejuwFnDKjxQfOu6HA9UmTLPKGv4lQOOCzP7uZeDLMCXgMFfQ6OzF%2FPH%2FwjjlpVsFI3y%2F2wBh4zJIY5MtZY4Cu705iC7VEv3YivDWQkJEYO%2F1&X-Amz-Signature=b0d61021406e80a57d158a40a9c69d42d463b99d1cdd2acacc03250888065259&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3FHIAI4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIGtPI2HHoLSW%2FOsvZIZf1dX4PBlYqchtkJVykEi1sC%2FgAiBt83KMcFVt37d95Bi%2BZR8RrUqu9OPwGOoZX9o9uyc82Cr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMhikv8MXlUt581gupKtwDHBWEEV6TYLqpky5T7Fggeq8b0E7luSnZuDGU%2FzgUBl78wHtUfEzU%2F%2FBgH7zr%2BvVZcADK47NH8Kf%2F%2BXxcuTUGu6OldFsmabwHdRiBc59tbq95z4Gyc7gyxL6qY4lZvO37BkNdinyl99ComWl5Sabg2LqoiJYS27GB%2FXvxrcd39We%2Fgh%2FZeliSYkunNTeDj%2FdBJ3S%2FX1iAGJcL1FgVpJmwyO1N0T1moeS6pfRdw3UvRWfxidwxa2Kb4mVvH0DrRiaBHVF071EkUAq4QtnB%2B6R242DYQn4fRtbFEx0BXWqSGfbY0d0kLaL2yBWuwZrzXCKhP9LOErDTaEyce%2FFkcqys1yW6y%2F3Z5nJC6Ij4RvJ8BQUo877MJO6hhfWxdPRDUllSlUFI%2BumnIiKW4AiQgdZuFln%2Bb4tYaIAEX7b3MQhNUi26L6T5woH08JoHKD%2F%2FTBgJgLGWH2ESiooPndlCNPyk4s0rl4apyUGA9%2BG0swgFG0b8vmCFVnPVjBdoJ2SeSwWubnxocDldjKXPUWMnvbhGl8HkGH9mVjheYJ5YI3k4Tayf0VrT1an0jCCZeEGCJEIbVHzqS6ipNdu7QHlg47Soxb4KD7YQzV0u6TobT%2FsIai5m4jYaDeDtz5CGXdAwppbMxAY6pgHDcmn0C4bFyi58lql0ZHMB4cKv8eiwYxynoc9S2d0csn8PMhpr2Lhk%2F1MnLHQNXayWCaEIsvQtnctQugGMi%2BrV3L13In2PpNvZV4z0I86L64DJLhCjejuwFnDKjxQfOu6HA9UmTLPKGv4lQOOCzP7uZeDLMCXgMFfQ6OzF%2FPH%2FwjjlpVsFI3y%2F2wBh4zJIY5MtZY4Cu705iC7VEv3YivDWQkJEYO%2F1&X-Amz-Signature=57f1a068265d7abe782f088a1dbade932e4868bfefd1f0d74c3978d43f1b6f5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3FHIAI4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIGtPI2HHoLSW%2FOsvZIZf1dX4PBlYqchtkJVykEi1sC%2FgAiBt83KMcFVt37d95Bi%2BZR8RrUqu9OPwGOoZX9o9uyc82Cr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMhikv8MXlUt581gupKtwDHBWEEV6TYLqpky5T7Fggeq8b0E7luSnZuDGU%2FzgUBl78wHtUfEzU%2F%2FBgH7zr%2BvVZcADK47NH8Kf%2F%2BXxcuTUGu6OldFsmabwHdRiBc59tbq95z4Gyc7gyxL6qY4lZvO37BkNdinyl99ComWl5Sabg2LqoiJYS27GB%2FXvxrcd39We%2Fgh%2FZeliSYkunNTeDj%2FdBJ3S%2FX1iAGJcL1FgVpJmwyO1N0T1moeS6pfRdw3UvRWfxidwxa2Kb4mVvH0DrRiaBHVF071EkUAq4QtnB%2B6R242DYQn4fRtbFEx0BXWqSGfbY0d0kLaL2yBWuwZrzXCKhP9LOErDTaEyce%2FFkcqys1yW6y%2F3Z5nJC6Ij4RvJ8BQUo877MJO6hhfWxdPRDUllSlUFI%2BumnIiKW4AiQgdZuFln%2Bb4tYaIAEX7b3MQhNUi26L6T5woH08JoHKD%2F%2FTBgJgLGWH2ESiooPndlCNPyk4s0rl4apyUGA9%2BG0swgFG0b8vmCFVnPVjBdoJ2SeSwWubnxocDldjKXPUWMnvbhGl8HkGH9mVjheYJ5YI3k4Tayf0VrT1an0jCCZeEGCJEIbVHzqS6ipNdu7QHlg47Soxb4KD7YQzV0u6TobT%2FsIai5m4jYaDeDtz5CGXdAwppbMxAY6pgHDcmn0C4bFyi58lql0ZHMB4cKv8eiwYxynoc9S2d0csn8PMhpr2Lhk%2F1MnLHQNXayWCaEIsvQtnctQugGMi%2BrV3L13In2PpNvZV4z0I86L64DJLhCjejuwFnDKjxQfOu6HA9UmTLPKGv4lQOOCzP7uZeDLMCXgMFfQ6OzF%2FPH%2FwjjlpVsFI3y%2F2wBh4zJIY5MtZY4Cu705iC7VEv3YivDWQkJEYO%2F1&X-Amz-Signature=694e4ca1ef9652a3c84ca0d27e1023dee1c46fc8888c4bfecae94b8fd254dede&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3FHIAI4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIGtPI2HHoLSW%2FOsvZIZf1dX4PBlYqchtkJVykEi1sC%2FgAiBt83KMcFVt37d95Bi%2BZR8RrUqu9OPwGOoZX9o9uyc82Cr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMhikv8MXlUt581gupKtwDHBWEEV6TYLqpky5T7Fggeq8b0E7luSnZuDGU%2FzgUBl78wHtUfEzU%2F%2FBgH7zr%2BvVZcADK47NH8Kf%2F%2BXxcuTUGu6OldFsmabwHdRiBc59tbq95z4Gyc7gyxL6qY4lZvO37BkNdinyl99ComWl5Sabg2LqoiJYS27GB%2FXvxrcd39We%2Fgh%2FZeliSYkunNTeDj%2FdBJ3S%2FX1iAGJcL1FgVpJmwyO1N0T1moeS6pfRdw3UvRWfxidwxa2Kb4mVvH0DrRiaBHVF071EkUAq4QtnB%2B6R242DYQn4fRtbFEx0BXWqSGfbY0d0kLaL2yBWuwZrzXCKhP9LOErDTaEyce%2FFkcqys1yW6y%2F3Z5nJC6Ij4RvJ8BQUo877MJO6hhfWxdPRDUllSlUFI%2BumnIiKW4AiQgdZuFln%2Bb4tYaIAEX7b3MQhNUi26L6T5woH08JoHKD%2F%2FTBgJgLGWH2ESiooPndlCNPyk4s0rl4apyUGA9%2BG0swgFG0b8vmCFVnPVjBdoJ2SeSwWubnxocDldjKXPUWMnvbhGl8HkGH9mVjheYJ5YI3k4Tayf0VrT1an0jCCZeEGCJEIbVHzqS6ipNdu7QHlg47Soxb4KD7YQzV0u6TobT%2FsIai5m4jYaDeDtz5CGXdAwppbMxAY6pgHDcmn0C4bFyi58lql0ZHMB4cKv8eiwYxynoc9S2d0csn8PMhpr2Lhk%2F1MnLHQNXayWCaEIsvQtnctQugGMi%2BrV3L13In2PpNvZV4z0I86L64DJLhCjejuwFnDKjxQfOu6HA9UmTLPKGv4lQOOCzP7uZeDLMCXgMFfQ6OzF%2FPH%2FwjjlpVsFI3y%2F2wBh4zJIY5MtZY4Cu705iC7VEv3YivDWQkJEYO%2F1&X-Amz-Signature=401db66d625b62894c6e3d0f9b479fdbd0bc3aed48ef91251a65d38de10aa50b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3FHIAI4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIGtPI2HHoLSW%2FOsvZIZf1dX4PBlYqchtkJVykEi1sC%2FgAiBt83KMcFVt37d95Bi%2BZR8RrUqu9OPwGOoZX9o9uyc82Cr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMhikv8MXlUt581gupKtwDHBWEEV6TYLqpky5T7Fggeq8b0E7luSnZuDGU%2FzgUBl78wHtUfEzU%2F%2FBgH7zr%2BvVZcADK47NH8Kf%2F%2BXxcuTUGu6OldFsmabwHdRiBc59tbq95z4Gyc7gyxL6qY4lZvO37BkNdinyl99ComWl5Sabg2LqoiJYS27GB%2FXvxrcd39We%2Fgh%2FZeliSYkunNTeDj%2FdBJ3S%2FX1iAGJcL1FgVpJmwyO1N0T1moeS6pfRdw3UvRWfxidwxa2Kb4mVvH0DrRiaBHVF071EkUAq4QtnB%2B6R242DYQn4fRtbFEx0BXWqSGfbY0d0kLaL2yBWuwZrzXCKhP9LOErDTaEyce%2FFkcqys1yW6y%2F3Z5nJC6Ij4RvJ8BQUo877MJO6hhfWxdPRDUllSlUFI%2BumnIiKW4AiQgdZuFln%2Bb4tYaIAEX7b3MQhNUi26L6T5woH08JoHKD%2F%2FTBgJgLGWH2ESiooPndlCNPyk4s0rl4apyUGA9%2BG0swgFG0b8vmCFVnPVjBdoJ2SeSwWubnxocDldjKXPUWMnvbhGl8HkGH9mVjheYJ5YI3k4Tayf0VrT1an0jCCZeEGCJEIbVHzqS6ipNdu7QHlg47Soxb4KD7YQzV0u6TobT%2FsIai5m4jYaDeDtz5CGXdAwppbMxAY6pgHDcmn0C4bFyi58lql0ZHMB4cKv8eiwYxynoc9S2d0csn8PMhpr2Lhk%2F1MnLHQNXayWCaEIsvQtnctQugGMi%2BrV3L13In2PpNvZV4z0I86L64DJLhCjejuwFnDKjxQfOu6HA9UmTLPKGv4lQOOCzP7uZeDLMCXgMFfQ6OzF%2FPH%2FwjjlpVsFI3y%2F2wBh4zJIY5MtZY4Cu705iC7VEv3YivDWQkJEYO%2F1&X-Amz-Signature=7d43b09a5c9340de8f423e78a192cd1b684b250b42128dd322280552c2d7bdd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3FHIAI4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIGtPI2HHoLSW%2FOsvZIZf1dX4PBlYqchtkJVykEi1sC%2FgAiBt83KMcFVt37d95Bi%2BZR8RrUqu9OPwGOoZX9o9uyc82Cr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMhikv8MXlUt581gupKtwDHBWEEV6TYLqpky5T7Fggeq8b0E7luSnZuDGU%2FzgUBl78wHtUfEzU%2F%2FBgH7zr%2BvVZcADK47NH8Kf%2F%2BXxcuTUGu6OldFsmabwHdRiBc59tbq95z4Gyc7gyxL6qY4lZvO37BkNdinyl99ComWl5Sabg2LqoiJYS27GB%2FXvxrcd39We%2Fgh%2FZeliSYkunNTeDj%2FdBJ3S%2FX1iAGJcL1FgVpJmwyO1N0T1moeS6pfRdw3UvRWfxidwxa2Kb4mVvH0DrRiaBHVF071EkUAq4QtnB%2B6R242DYQn4fRtbFEx0BXWqSGfbY0d0kLaL2yBWuwZrzXCKhP9LOErDTaEyce%2FFkcqys1yW6y%2F3Z5nJC6Ij4RvJ8BQUo877MJO6hhfWxdPRDUllSlUFI%2BumnIiKW4AiQgdZuFln%2Bb4tYaIAEX7b3MQhNUi26L6T5woH08JoHKD%2F%2FTBgJgLGWH2ESiooPndlCNPyk4s0rl4apyUGA9%2BG0swgFG0b8vmCFVnPVjBdoJ2SeSwWubnxocDldjKXPUWMnvbhGl8HkGH9mVjheYJ5YI3k4Tayf0VrT1an0jCCZeEGCJEIbVHzqS6ipNdu7QHlg47Soxb4KD7YQzV0u6TobT%2FsIai5m4jYaDeDtz5CGXdAwppbMxAY6pgHDcmn0C4bFyi58lql0ZHMB4cKv8eiwYxynoc9S2d0csn8PMhpr2Lhk%2F1MnLHQNXayWCaEIsvQtnctQugGMi%2BrV3L13In2PpNvZV4z0I86L64DJLhCjejuwFnDKjxQfOu6HA9UmTLPKGv4lQOOCzP7uZeDLMCXgMFfQ6OzF%2FPH%2FwjjlpVsFI3y%2F2wBh4zJIY5MtZY4Cu705iC7VEv3YivDWQkJEYO%2F1&X-Amz-Signature=5eba3878c6a5d8e44c4875dc945e6b373284ab8348fed5dd49c10802d78ad97c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3FHIAI4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIGtPI2HHoLSW%2FOsvZIZf1dX4PBlYqchtkJVykEi1sC%2FgAiBt83KMcFVt37d95Bi%2BZR8RrUqu9OPwGOoZX9o9uyc82Cr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMhikv8MXlUt581gupKtwDHBWEEV6TYLqpky5T7Fggeq8b0E7luSnZuDGU%2FzgUBl78wHtUfEzU%2F%2FBgH7zr%2BvVZcADK47NH8Kf%2F%2BXxcuTUGu6OldFsmabwHdRiBc59tbq95z4Gyc7gyxL6qY4lZvO37BkNdinyl99ComWl5Sabg2LqoiJYS27GB%2FXvxrcd39We%2Fgh%2FZeliSYkunNTeDj%2FdBJ3S%2FX1iAGJcL1FgVpJmwyO1N0T1moeS6pfRdw3UvRWfxidwxa2Kb4mVvH0DrRiaBHVF071EkUAq4QtnB%2B6R242DYQn4fRtbFEx0BXWqSGfbY0d0kLaL2yBWuwZrzXCKhP9LOErDTaEyce%2FFkcqys1yW6y%2F3Z5nJC6Ij4RvJ8BQUo877MJO6hhfWxdPRDUllSlUFI%2BumnIiKW4AiQgdZuFln%2Bb4tYaIAEX7b3MQhNUi26L6T5woH08JoHKD%2F%2FTBgJgLGWH2ESiooPndlCNPyk4s0rl4apyUGA9%2BG0swgFG0b8vmCFVnPVjBdoJ2SeSwWubnxocDldjKXPUWMnvbhGl8HkGH9mVjheYJ5YI3k4Tayf0VrT1an0jCCZeEGCJEIbVHzqS6ipNdu7QHlg47Soxb4KD7YQzV0u6TobT%2FsIai5m4jYaDeDtz5CGXdAwppbMxAY6pgHDcmn0C4bFyi58lql0ZHMB4cKv8eiwYxynoc9S2d0csn8PMhpr2Lhk%2F1MnLHQNXayWCaEIsvQtnctQugGMi%2BrV3L13In2PpNvZV4z0I86L64DJLhCjejuwFnDKjxQfOu6HA9UmTLPKGv4lQOOCzP7uZeDLMCXgMFfQ6OzF%2FPH%2FwjjlpVsFI3y%2F2wBh4zJIY5MtZY4Cu705iC7VEv3YivDWQkJEYO%2F1&X-Amz-Signature=9363a6c17592bf5d0cab795211cc1f94cb7a083630c0e2cd7c232b4033652466&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3FHIAI4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIGtPI2HHoLSW%2FOsvZIZf1dX4PBlYqchtkJVykEi1sC%2FgAiBt83KMcFVt37d95Bi%2BZR8RrUqu9OPwGOoZX9o9uyc82Cr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMhikv8MXlUt581gupKtwDHBWEEV6TYLqpky5T7Fggeq8b0E7luSnZuDGU%2FzgUBl78wHtUfEzU%2F%2FBgH7zr%2BvVZcADK47NH8Kf%2F%2BXxcuTUGu6OldFsmabwHdRiBc59tbq95z4Gyc7gyxL6qY4lZvO37BkNdinyl99ComWl5Sabg2LqoiJYS27GB%2FXvxrcd39We%2Fgh%2FZeliSYkunNTeDj%2FdBJ3S%2FX1iAGJcL1FgVpJmwyO1N0T1moeS6pfRdw3UvRWfxidwxa2Kb4mVvH0DrRiaBHVF071EkUAq4QtnB%2B6R242DYQn4fRtbFEx0BXWqSGfbY0d0kLaL2yBWuwZrzXCKhP9LOErDTaEyce%2FFkcqys1yW6y%2F3Z5nJC6Ij4RvJ8BQUo877MJO6hhfWxdPRDUllSlUFI%2BumnIiKW4AiQgdZuFln%2Bb4tYaIAEX7b3MQhNUi26L6T5woH08JoHKD%2F%2FTBgJgLGWH2ESiooPndlCNPyk4s0rl4apyUGA9%2BG0swgFG0b8vmCFVnPVjBdoJ2SeSwWubnxocDldjKXPUWMnvbhGl8HkGH9mVjheYJ5YI3k4Tayf0VrT1an0jCCZeEGCJEIbVHzqS6ipNdu7QHlg47Soxb4KD7YQzV0u6TobT%2FsIai5m4jYaDeDtz5CGXdAwppbMxAY6pgHDcmn0C4bFyi58lql0ZHMB4cKv8eiwYxynoc9S2d0csn8PMhpr2Lhk%2F1MnLHQNXayWCaEIsvQtnctQugGMi%2BrV3L13In2PpNvZV4z0I86L64DJLhCjejuwFnDKjxQfOu6HA9UmTLPKGv4lQOOCzP7uZeDLMCXgMFfQ6OzF%2FPH%2FwjjlpVsFI3y%2F2wBh4zJIY5MtZY4Cu705iC7VEv3YivDWQkJEYO%2F1&X-Amz-Signature=57f1a068265d7abe782f088a1dbade932e4868bfefd1f0d74c3978d43f1b6f5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
