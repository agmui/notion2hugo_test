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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W67YOYXY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnM3fUAp2mrojy3Qyra8oxeUv7D%2BeT56ZyzNDvqGJb3wIgHzm0cwZaqrtkJE81hh10NyhnAVhIUEb3bEVvBwxeo6MqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDANImW0%2FLTYrPLfKXyrcA9SEpSHUo4hFjZv6lV2L7mK5qRCgLDUzWZFw1mOWmuQr5tfNl0i3KPYXM6huZX7Dsb6R7i%2Bb4%2FPaYR2Qko5wpzmdcOSc0mHIGvEkaDxh%2BQMnju2stgsmoqIaYVewJnLe%2FmzjsGQMyg0faOcJDSNf77b2VfiZxUGk8xJqS6gjh%2B0SqxjE6O%2F8LzvxrKM2BnFsaHalClRX7sIzZGKryUJ4FRF%2BTsunsCT5N06nKPXtPQO1pDMB5TESdmT5YGTwF7W%2BSineI4HF4FOq4ut6raW0QpOk8EPnPDYVskXIpq2KT7aB4JUdaZBd5hW9s%2BxA6HT1Dp9SZB8iAK0bgmcyYWxdfSxsPftUEE%2B7JjreALPpOJi1aHKzifkH9m%2FyCSFyCXU0lIDcJnYMABG1mUe0DgcXFFye8FlF%2B%2F8YECkS5OAM5xLrke%2BZTDxNwMhEEyKSpN0L0S5iSAyitQ4m6u6lHtUPfj3vflSZD7CnskHl5VkpjvjGh2V567aHojKQ9WiY6NrwRCFVTclPFNA8xXGOjWJ4U1OivW%2Flj%2BimYwNMER7oni%2FjJjjpGY%2F7AwPOPTI%2BKse637dtnt4lHyq8CFKJagP3qWiHS3PFxBPSwwveEZZKomf6jhU8NcBEBvbcGtpYMIfKq8QGOqUBLnQF2YCVIxQIPqBLcS957bcSaPOliWMiYTVrGlEqu%2BckZv92%2FfZwvp1CktXbs0OlEVjwn95zuDxM%2FvYKQwYI3w%2BepxiYCVoM79dxyhCWHiGNYsKkcIidk6aVAuFVj6QcXDdVwo%2BpygrlKuNaPe0NlxhfzMiEnPt%2Bf35FVnVCM8cV8Hv%2BKyaZHGCMHmbNgIoTQvWGl%2BUuHXSgrFUyv%2FoqNiJVjkFB&X-Amz-Signature=363392b1ec014de0020493edff3a12d5ab74995ef2ca5390f1f5a8f573449a45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W67YOYXY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnM3fUAp2mrojy3Qyra8oxeUv7D%2BeT56ZyzNDvqGJb3wIgHzm0cwZaqrtkJE81hh10NyhnAVhIUEb3bEVvBwxeo6MqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDANImW0%2FLTYrPLfKXyrcA9SEpSHUo4hFjZv6lV2L7mK5qRCgLDUzWZFw1mOWmuQr5tfNl0i3KPYXM6huZX7Dsb6R7i%2Bb4%2FPaYR2Qko5wpzmdcOSc0mHIGvEkaDxh%2BQMnju2stgsmoqIaYVewJnLe%2FmzjsGQMyg0faOcJDSNf77b2VfiZxUGk8xJqS6gjh%2B0SqxjE6O%2F8LzvxrKM2BnFsaHalClRX7sIzZGKryUJ4FRF%2BTsunsCT5N06nKPXtPQO1pDMB5TESdmT5YGTwF7W%2BSineI4HF4FOq4ut6raW0QpOk8EPnPDYVskXIpq2KT7aB4JUdaZBd5hW9s%2BxA6HT1Dp9SZB8iAK0bgmcyYWxdfSxsPftUEE%2B7JjreALPpOJi1aHKzifkH9m%2FyCSFyCXU0lIDcJnYMABG1mUe0DgcXFFye8FlF%2B%2F8YECkS5OAM5xLrke%2BZTDxNwMhEEyKSpN0L0S5iSAyitQ4m6u6lHtUPfj3vflSZD7CnskHl5VkpjvjGh2V567aHojKQ9WiY6NrwRCFVTclPFNA8xXGOjWJ4U1OivW%2Flj%2BimYwNMER7oni%2FjJjjpGY%2F7AwPOPTI%2BKse637dtnt4lHyq8CFKJagP3qWiHS3PFxBPSwwveEZZKomf6jhU8NcBEBvbcGtpYMIfKq8QGOqUBLnQF2YCVIxQIPqBLcS957bcSaPOliWMiYTVrGlEqu%2BckZv92%2FfZwvp1CktXbs0OlEVjwn95zuDxM%2FvYKQwYI3w%2BepxiYCVoM79dxyhCWHiGNYsKkcIidk6aVAuFVj6QcXDdVwo%2BpygrlKuNaPe0NlxhfzMiEnPt%2Bf35FVnVCM8cV8Hv%2BKyaZHGCMHmbNgIoTQvWGl%2BUuHXSgrFUyv%2FoqNiJVjkFB&X-Amz-Signature=408882f7ee18c6b384d69cb88dc797433f0e08be64bf02b91b6ebac76e8de151&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W67YOYXY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnM3fUAp2mrojy3Qyra8oxeUv7D%2BeT56ZyzNDvqGJb3wIgHzm0cwZaqrtkJE81hh10NyhnAVhIUEb3bEVvBwxeo6MqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDANImW0%2FLTYrPLfKXyrcA9SEpSHUo4hFjZv6lV2L7mK5qRCgLDUzWZFw1mOWmuQr5tfNl0i3KPYXM6huZX7Dsb6R7i%2Bb4%2FPaYR2Qko5wpzmdcOSc0mHIGvEkaDxh%2BQMnju2stgsmoqIaYVewJnLe%2FmzjsGQMyg0faOcJDSNf77b2VfiZxUGk8xJqS6gjh%2B0SqxjE6O%2F8LzvxrKM2BnFsaHalClRX7sIzZGKryUJ4FRF%2BTsunsCT5N06nKPXtPQO1pDMB5TESdmT5YGTwF7W%2BSineI4HF4FOq4ut6raW0QpOk8EPnPDYVskXIpq2KT7aB4JUdaZBd5hW9s%2BxA6HT1Dp9SZB8iAK0bgmcyYWxdfSxsPftUEE%2B7JjreALPpOJi1aHKzifkH9m%2FyCSFyCXU0lIDcJnYMABG1mUe0DgcXFFye8FlF%2B%2F8YECkS5OAM5xLrke%2BZTDxNwMhEEyKSpN0L0S5iSAyitQ4m6u6lHtUPfj3vflSZD7CnskHl5VkpjvjGh2V567aHojKQ9WiY6NrwRCFVTclPFNA8xXGOjWJ4U1OivW%2Flj%2BimYwNMER7oni%2FjJjjpGY%2F7AwPOPTI%2BKse637dtnt4lHyq8CFKJagP3qWiHS3PFxBPSwwveEZZKomf6jhU8NcBEBvbcGtpYMIfKq8QGOqUBLnQF2YCVIxQIPqBLcS957bcSaPOliWMiYTVrGlEqu%2BckZv92%2FfZwvp1CktXbs0OlEVjwn95zuDxM%2FvYKQwYI3w%2BepxiYCVoM79dxyhCWHiGNYsKkcIidk6aVAuFVj6QcXDdVwo%2BpygrlKuNaPe0NlxhfzMiEnPt%2Bf35FVnVCM8cV8Hv%2BKyaZHGCMHmbNgIoTQvWGl%2BUuHXSgrFUyv%2FoqNiJVjkFB&X-Amz-Signature=c018f64dbcbd7f7d47b5a49321e15110d586522a1d753a67ee3b98dac6d11b52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W67YOYXY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnM3fUAp2mrojy3Qyra8oxeUv7D%2BeT56ZyzNDvqGJb3wIgHzm0cwZaqrtkJE81hh10NyhnAVhIUEb3bEVvBwxeo6MqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDANImW0%2FLTYrPLfKXyrcA9SEpSHUo4hFjZv6lV2L7mK5qRCgLDUzWZFw1mOWmuQr5tfNl0i3KPYXM6huZX7Dsb6R7i%2Bb4%2FPaYR2Qko5wpzmdcOSc0mHIGvEkaDxh%2BQMnju2stgsmoqIaYVewJnLe%2FmzjsGQMyg0faOcJDSNf77b2VfiZxUGk8xJqS6gjh%2B0SqxjE6O%2F8LzvxrKM2BnFsaHalClRX7sIzZGKryUJ4FRF%2BTsunsCT5N06nKPXtPQO1pDMB5TESdmT5YGTwF7W%2BSineI4HF4FOq4ut6raW0QpOk8EPnPDYVskXIpq2KT7aB4JUdaZBd5hW9s%2BxA6HT1Dp9SZB8iAK0bgmcyYWxdfSxsPftUEE%2B7JjreALPpOJi1aHKzifkH9m%2FyCSFyCXU0lIDcJnYMABG1mUe0DgcXFFye8FlF%2B%2F8YECkS5OAM5xLrke%2BZTDxNwMhEEyKSpN0L0S5iSAyitQ4m6u6lHtUPfj3vflSZD7CnskHl5VkpjvjGh2V567aHojKQ9WiY6NrwRCFVTclPFNA8xXGOjWJ4U1OivW%2Flj%2BimYwNMER7oni%2FjJjjpGY%2F7AwPOPTI%2BKse637dtnt4lHyq8CFKJagP3qWiHS3PFxBPSwwveEZZKomf6jhU8NcBEBvbcGtpYMIfKq8QGOqUBLnQF2YCVIxQIPqBLcS957bcSaPOliWMiYTVrGlEqu%2BckZv92%2FfZwvp1CktXbs0OlEVjwn95zuDxM%2FvYKQwYI3w%2BepxiYCVoM79dxyhCWHiGNYsKkcIidk6aVAuFVj6QcXDdVwo%2BpygrlKuNaPe0NlxhfzMiEnPt%2Bf35FVnVCM8cV8Hv%2BKyaZHGCMHmbNgIoTQvWGl%2BUuHXSgrFUyv%2FoqNiJVjkFB&X-Amz-Signature=ba2e31869f21eabacf3393b489b20698d938f8adebdc34de3e02c96460ee97e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W67YOYXY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnM3fUAp2mrojy3Qyra8oxeUv7D%2BeT56ZyzNDvqGJb3wIgHzm0cwZaqrtkJE81hh10NyhnAVhIUEb3bEVvBwxeo6MqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDANImW0%2FLTYrPLfKXyrcA9SEpSHUo4hFjZv6lV2L7mK5qRCgLDUzWZFw1mOWmuQr5tfNl0i3KPYXM6huZX7Dsb6R7i%2Bb4%2FPaYR2Qko5wpzmdcOSc0mHIGvEkaDxh%2BQMnju2stgsmoqIaYVewJnLe%2FmzjsGQMyg0faOcJDSNf77b2VfiZxUGk8xJqS6gjh%2B0SqxjE6O%2F8LzvxrKM2BnFsaHalClRX7sIzZGKryUJ4FRF%2BTsunsCT5N06nKPXtPQO1pDMB5TESdmT5YGTwF7W%2BSineI4HF4FOq4ut6raW0QpOk8EPnPDYVskXIpq2KT7aB4JUdaZBd5hW9s%2BxA6HT1Dp9SZB8iAK0bgmcyYWxdfSxsPftUEE%2B7JjreALPpOJi1aHKzifkH9m%2FyCSFyCXU0lIDcJnYMABG1mUe0DgcXFFye8FlF%2B%2F8YECkS5OAM5xLrke%2BZTDxNwMhEEyKSpN0L0S5iSAyitQ4m6u6lHtUPfj3vflSZD7CnskHl5VkpjvjGh2V567aHojKQ9WiY6NrwRCFVTclPFNA8xXGOjWJ4U1OivW%2Flj%2BimYwNMER7oni%2FjJjjpGY%2F7AwPOPTI%2BKse637dtnt4lHyq8CFKJagP3qWiHS3PFxBPSwwveEZZKomf6jhU8NcBEBvbcGtpYMIfKq8QGOqUBLnQF2YCVIxQIPqBLcS957bcSaPOliWMiYTVrGlEqu%2BckZv92%2FfZwvp1CktXbs0OlEVjwn95zuDxM%2FvYKQwYI3w%2BepxiYCVoM79dxyhCWHiGNYsKkcIidk6aVAuFVj6QcXDdVwo%2BpygrlKuNaPe0NlxhfzMiEnPt%2Bf35FVnVCM8cV8Hv%2BKyaZHGCMHmbNgIoTQvWGl%2BUuHXSgrFUyv%2FoqNiJVjkFB&X-Amz-Signature=2abe3f0bb87d34510a7e4d8ad8298f592e086cdcccc69870a56223f6da5d3750&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W67YOYXY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnM3fUAp2mrojy3Qyra8oxeUv7D%2BeT56ZyzNDvqGJb3wIgHzm0cwZaqrtkJE81hh10NyhnAVhIUEb3bEVvBwxeo6MqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDANImW0%2FLTYrPLfKXyrcA9SEpSHUo4hFjZv6lV2L7mK5qRCgLDUzWZFw1mOWmuQr5tfNl0i3KPYXM6huZX7Dsb6R7i%2Bb4%2FPaYR2Qko5wpzmdcOSc0mHIGvEkaDxh%2BQMnju2stgsmoqIaYVewJnLe%2FmzjsGQMyg0faOcJDSNf77b2VfiZxUGk8xJqS6gjh%2B0SqxjE6O%2F8LzvxrKM2BnFsaHalClRX7sIzZGKryUJ4FRF%2BTsunsCT5N06nKPXtPQO1pDMB5TESdmT5YGTwF7W%2BSineI4HF4FOq4ut6raW0QpOk8EPnPDYVskXIpq2KT7aB4JUdaZBd5hW9s%2BxA6HT1Dp9SZB8iAK0bgmcyYWxdfSxsPftUEE%2B7JjreALPpOJi1aHKzifkH9m%2FyCSFyCXU0lIDcJnYMABG1mUe0DgcXFFye8FlF%2B%2F8YECkS5OAM5xLrke%2BZTDxNwMhEEyKSpN0L0S5iSAyitQ4m6u6lHtUPfj3vflSZD7CnskHl5VkpjvjGh2V567aHojKQ9WiY6NrwRCFVTclPFNA8xXGOjWJ4U1OivW%2Flj%2BimYwNMER7oni%2FjJjjpGY%2F7AwPOPTI%2BKse637dtnt4lHyq8CFKJagP3qWiHS3PFxBPSwwveEZZKomf6jhU8NcBEBvbcGtpYMIfKq8QGOqUBLnQF2YCVIxQIPqBLcS957bcSaPOliWMiYTVrGlEqu%2BckZv92%2FfZwvp1CktXbs0OlEVjwn95zuDxM%2FvYKQwYI3w%2BepxiYCVoM79dxyhCWHiGNYsKkcIidk6aVAuFVj6QcXDdVwo%2BpygrlKuNaPe0NlxhfzMiEnPt%2Bf35FVnVCM8cV8Hv%2BKyaZHGCMHmbNgIoTQvWGl%2BUuHXSgrFUyv%2FoqNiJVjkFB&X-Amz-Signature=ed638a9b2c9bc05f32b2f69887a6653ef4936a0de961a8e2ce3bb01d420aa17e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W67YOYXY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnM3fUAp2mrojy3Qyra8oxeUv7D%2BeT56ZyzNDvqGJb3wIgHzm0cwZaqrtkJE81hh10NyhnAVhIUEb3bEVvBwxeo6MqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDANImW0%2FLTYrPLfKXyrcA9SEpSHUo4hFjZv6lV2L7mK5qRCgLDUzWZFw1mOWmuQr5tfNl0i3KPYXM6huZX7Dsb6R7i%2Bb4%2FPaYR2Qko5wpzmdcOSc0mHIGvEkaDxh%2BQMnju2stgsmoqIaYVewJnLe%2FmzjsGQMyg0faOcJDSNf77b2VfiZxUGk8xJqS6gjh%2B0SqxjE6O%2F8LzvxrKM2BnFsaHalClRX7sIzZGKryUJ4FRF%2BTsunsCT5N06nKPXtPQO1pDMB5TESdmT5YGTwF7W%2BSineI4HF4FOq4ut6raW0QpOk8EPnPDYVskXIpq2KT7aB4JUdaZBd5hW9s%2BxA6HT1Dp9SZB8iAK0bgmcyYWxdfSxsPftUEE%2B7JjreALPpOJi1aHKzifkH9m%2FyCSFyCXU0lIDcJnYMABG1mUe0DgcXFFye8FlF%2B%2F8YECkS5OAM5xLrke%2BZTDxNwMhEEyKSpN0L0S5iSAyitQ4m6u6lHtUPfj3vflSZD7CnskHl5VkpjvjGh2V567aHojKQ9WiY6NrwRCFVTclPFNA8xXGOjWJ4U1OivW%2Flj%2BimYwNMER7oni%2FjJjjpGY%2F7AwPOPTI%2BKse637dtnt4lHyq8CFKJagP3qWiHS3PFxBPSwwveEZZKomf6jhU8NcBEBvbcGtpYMIfKq8QGOqUBLnQF2YCVIxQIPqBLcS957bcSaPOliWMiYTVrGlEqu%2BckZv92%2FfZwvp1CktXbs0OlEVjwn95zuDxM%2FvYKQwYI3w%2BepxiYCVoM79dxyhCWHiGNYsKkcIidk6aVAuFVj6QcXDdVwo%2BpygrlKuNaPe0NlxhfzMiEnPt%2Bf35FVnVCM8cV8Hv%2BKyaZHGCMHmbNgIoTQvWGl%2BUuHXSgrFUyv%2FoqNiJVjkFB&X-Amz-Signature=f919eb809234ec765199b6531237da1f9d763cefdcad6bdf5440499fe1e54e72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W67YOYXY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnM3fUAp2mrojy3Qyra8oxeUv7D%2BeT56ZyzNDvqGJb3wIgHzm0cwZaqrtkJE81hh10NyhnAVhIUEb3bEVvBwxeo6MqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDANImW0%2FLTYrPLfKXyrcA9SEpSHUo4hFjZv6lV2L7mK5qRCgLDUzWZFw1mOWmuQr5tfNl0i3KPYXM6huZX7Dsb6R7i%2Bb4%2FPaYR2Qko5wpzmdcOSc0mHIGvEkaDxh%2BQMnju2stgsmoqIaYVewJnLe%2FmzjsGQMyg0faOcJDSNf77b2VfiZxUGk8xJqS6gjh%2B0SqxjE6O%2F8LzvxrKM2BnFsaHalClRX7sIzZGKryUJ4FRF%2BTsunsCT5N06nKPXtPQO1pDMB5TESdmT5YGTwF7W%2BSineI4HF4FOq4ut6raW0QpOk8EPnPDYVskXIpq2KT7aB4JUdaZBd5hW9s%2BxA6HT1Dp9SZB8iAK0bgmcyYWxdfSxsPftUEE%2B7JjreALPpOJi1aHKzifkH9m%2FyCSFyCXU0lIDcJnYMABG1mUe0DgcXFFye8FlF%2B%2F8YECkS5OAM5xLrke%2BZTDxNwMhEEyKSpN0L0S5iSAyitQ4m6u6lHtUPfj3vflSZD7CnskHl5VkpjvjGh2V567aHojKQ9WiY6NrwRCFVTclPFNA8xXGOjWJ4U1OivW%2Flj%2BimYwNMER7oni%2FjJjjpGY%2F7AwPOPTI%2BKse637dtnt4lHyq8CFKJagP3qWiHS3PFxBPSwwveEZZKomf6jhU8NcBEBvbcGtpYMIfKq8QGOqUBLnQF2YCVIxQIPqBLcS957bcSaPOliWMiYTVrGlEqu%2BckZv92%2FfZwvp1CktXbs0OlEVjwn95zuDxM%2FvYKQwYI3w%2BepxiYCVoM79dxyhCWHiGNYsKkcIidk6aVAuFVj6QcXDdVwo%2BpygrlKuNaPe0NlxhfzMiEnPt%2Bf35FVnVCM8cV8Hv%2BKyaZHGCMHmbNgIoTQvWGl%2BUuHXSgrFUyv%2FoqNiJVjkFB&X-Amz-Signature=72de9f134d5d9c0b7819767e6fc4c203c614bbb67436592493248ba0e53314c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W67YOYXY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnM3fUAp2mrojy3Qyra8oxeUv7D%2BeT56ZyzNDvqGJb3wIgHzm0cwZaqrtkJE81hh10NyhnAVhIUEb3bEVvBwxeo6MqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDANImW0%2FLTYrPLfKXyrcA9SEpSHUo4hFjZv6lV2L7mK5qRCgLDUzWZFw1mOWmuQr5tfNl0i3KPYXM6huZX7Dsb6R7i%2Bb4%2FPaYR2Qko5wpzmdcOSc0mHIGvEkaDxh%2BQMnju2stgsmoqIaYVewJnLe%2FmzjsGQMyg0faOcJDSNf77b2VfiZxUGk8xJqS6gjh%2B0SqxjE6O%2F8LzvxrKM2BnFsaHalClRX7sIzZGKryUJ4FRF%2BTsunsCT5N06nKPXtPQO1pDMB5TESdmT5YGTwF7W%2BSineI4HF4FOq4ut6raW0QpOk8EPnPDYVskXIpq2KT7aB4JUdaZBd5hW9s%2BxA6HT1Dp9SZB8iAK0bgmcyYWxdfSxsPftUEE%2B7JjreALPpOJi1aHKzifkH9m%2FyCSFyCXU0lIDcJnYMABG1mUe0DgcXFFye8FlF%2B%2F8YECkS5OAM5xLrke%2BZTDxNwMhEEyKSpN0L0S5iSAyitQ4m6u6lHtUPfj3vflSZD7CnskHl5VkpjvjGh2V567aHojKQ9WiY6NrwRCFVTclPFNA8xXGOjWJ4U1OivW%2Flj%2BimYwNMER7oni%2FjJjjpGY%2F7AwPOPTI%2BKse637dtnt4lHyq8CFKJagP3qWiHS3PFxBPSwwveEZZKomf6jhU8NcBEBvbcGtpYMIfKq8QGOqUBLnQF2YCVIxQIPqBLcS957bcSaPOliWMiYTVrGlEqu%2BckZv92%2FfZwvp1CktXbs0OlEVjwn95zuDxM%2FvYKQwYI3w%2BepxiYCVoM79dxyhCWHiGNYsKkcIidk6aVAuFVj6QcXDdVwo%2BpygrlKuNaPe0NlxhfzMiEnPt%2Bf35FVnVCM8cV8Hv%2BKyaZHGCMHmbNgIoTQvWGl%2BUuHXSgrFUyv%2FoqNiJVjkFB&X-Amz-Signature=071dfd83fe6eef0a1208a9dd69c5e91feb37ff1c2a94f9ff1c9c16c9d70605e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W67YOYXY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnM3fUAp2mrojy3Qyra8oxeUv7D%2BeT56ZyzNDvqGJb3wIgHzm0cwZaqrtkJE81hh10NyhnAVhIUEb3bEVvBwxeo6MqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDANImW0%2FLTYrPLfKXyrcA9SEpSHUo4hFjZv6lV2L7mK5qRCgLDUzWZFw1mOWmuQr5tfNl0i3KPYXM6huZX7Dsb6R7i%2Bb4%2FPaYR2Qko5wpzmdcOSc0mHIGvEkaDxh%2BQMnju2stgsmoqIaYVewJnLe%2FmzjsGQMyg0faOcJDSNf77b2VfiZxUGk8xJqS6gjh%2B0SqxjE6O%2F8LzvxrKM2BnFsaHalClRX7sIzZGKryUJ4FRF%2BTsunsCT5N06nKPXtPQO1pDMB5TESdmT5YGTwF7W%2BSineI4HF4FOq4ut6raW0QpOk8EPnPDYVskXIpq2KT7aB4JUdaZBd5hW9s%2BxA6HT1Dp9SZB8iAK0bgmcyYWxdfSxsPftUEE%2B7JjreALPpOJi1aHKzifkH9m%2FyCSFyCXU0lIDcJnYMABG1mUe0DgcXFFye8FlF%2B%2F8YECkS5OAM5xLrke%2BZTDxNwMhEEyKSpN0L0S5iSAyitQ4m6u6lHtUPfj3vflSZD7CnskHl5VkpjvjGh2V567aHojKQ9WiY6NrwRCFVTclPFNA8xXGOjWJ4U1OivW%2Flj%2BimYwNMER7oni%2FjJjjpGY%2F7AwPOPTI%2BKse637dtnt4lHyq8CFKJagP3qWiHS3PFxBPSwwveEZZKomf6jhU8NcBEBvbcGtpYMIfKq8QGOqUBLnQF2YCVIxQIPqBLcS957bcSaPOliWMiYTVrGlEqu%2BckZv92%2FfZwvp1CktXbs0OlEVjwn95zuDxM%2FvYKQwYI3w%2BepxiYCVoM79dxyhCWHiGNYsKkcIidk6aVAuFVj6QcXDdVwo%2BpygrlKuNaPe0NlxhfzMiEnPt%2Bf35FVnVCM8cV8Hv%2BKyaZHGCMHmbNgIoTQvWGl%2BUuHXSgrFUyv%2FoqNiJVjkFB&X-Amz-Signature=4eb90d02cc4a47a9d71aafe6b31370d0383d3883d5546ed17683971a44a92f9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
