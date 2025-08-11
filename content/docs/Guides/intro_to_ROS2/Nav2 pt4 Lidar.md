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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4QMTSZM%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDjmY2YQceJUXx2QVH0zhzSnikKJUHRt7BQXM%2BvatY19AiAD2InfgZo9slxQ64UW9QaQrIPhRK%2BPYkwL9qS7mEOSlSqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj1iH%2BsjZdFqfQyOyKtwDf2tEvg4Cymw4B8HRc4nKCaUPd7JiZ4oDcnM3RVnkWA18LXGcdYrxCivoTvQ9kXkeF%2BqhaGmCoPXLvUnSzfeq7rqHRCHe5RiQnqXZf5dGrk3uQ4ki7GOwGEVoTiuqmXEpQADaxd2l6TV5FXT2K25yZC08GZGoP3sMa0ldwFuSue4s8pq3YGtEZFxBwBlvBb7ouVuCkluHNPLxGiFVwikzko8YRnSM3fGfLiFZKHuGUASO6GGD4k87vN%2FVeQdqA03yghjQBB%2Fyd%2BIg5Wv90DEiyiVy0rFu5Zm2C22LryXdx4JD8cB1zGDgiSIfZpLFREuhsi50LEsi%2BmtcmGlrOHfvH83GGqaePA%2B7JRzRgBhiujs%2BgnD0EC14yCww2GqdblUqblKNRGJSZNwfnLzruYfhxjs5f2IA3iQzWbZFcr7%2B4ogyuQvUuEtB7yDBsiLRZH7yFwg1IV9lgQQ3XRLwRgdmNem6cbXAXirNYYTcy3eUPjC01X0FxKWYHzZiEXEGEQv887T6mz9hjwsvZCspQGY2EyOI%2BiyEAbKwXo7WTupBC7I06OOjdrgBPtrIof6CaaJDce9jjA9h48JI9wDjpIUGszC7bt5QOEhXcGXeRYoHhwZoXvM3D5F5PAkqBP8wtavmxAY6pgElFqB5PRMoLCgOyB6pwncT1G1mRBBGpQYH1hCGmh51zdF9Rn6qEVc8ou1Y10Bl23uETytOTboiyA6fROjjpJ3aLwswT7y9fagYDU0bBmodinBSYmeHrs2ckhMngAZgRtVBA9vR6DT7WNIBLpEgjVteQGagYs7iBoGlXmYc2ZBVxOw2hSgtB3B%2F0CeWzUFwCgm0FywbpOxIQLfJpdmiLb7dFwuNWTn5&X-Amz-Signature=2bcf0236f7fb2fc1c8356202964b17abb24fd094170de92d4e29c8f98ba3dcd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWAY474D%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BdcbGZE7JOVRTeq5Cjj3TvcLqgYv1QkNhSGSGQOgF%2BgIgWAoLlPbpExirFSInOoRhlVdke5NBtyqxaG1In83duFYqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNM5a1WiaSgwerz5AyrcAyJfUJYz0ncGpfJa3z3KLYyFAqtvG%2F%2BzCIdSZUjtQJyX6VsltXHqHT59kM1riVn9KUffBYqA1Ky5iwabodLNLhiDriQIl%2Fq6OvS1o%2FSGbKTo3ESD8Zj6VKN8U3PASxp25qNq%2BgUcIahsfLY47KUrfS0ZNq4s5wuFbRo7KigMJfbhg5aI81t4gPCPR1ebo7ErzBCJsYtD34GIO4%2B1yV834ddu9NzvIeHAadVIiAg6EWEM0hhuNYM6IZElzUoigCVozYbaH4ayVvDI5hynrNb4tSeRbplyqbzquMUN25tp8zOMjE%2Fi2gTLPEP3SfuuU1VGbNV9M5yyoXEt3lyLykDLUBsBKxXSTMoRYJeSXaZiaNpCVGZox8qDyC03iQXLiRans5kpiVdhOdkOzJh1QZmJYki1eGzqp5NJJH9MYa%2BgkmtuHuWm7r5KcxVkpjGlyINl8zYuvXJbCbYu8wOVAS3EdjJ%2BkmtGjnc3qRt8o58%2FGfDE9xMK8eZl7AzweAxcyKeCshhkLtvNHoKIbt6RrkwqN19ezSGFItZvUV%2BLW1Y5hNkyOkom7Jk4cgzSw9FnB5ZwH%2FXufjaisMUBvx3jzXEQY2tn4qOpUDNExBaydCSD4XBcIbh6GJ3pTpUJqOV%2FMPyq5sQGOqUB0wEcLkrjbi8DoC2M%2BZc2HLcsH3nEVsGziY8SgM0npgPtDOyfnyPPyl%2B2yWGXWiLwZtbhlt7Xa4NTTjwJDOyO6zwGgSmFNfk2%2Bir7sa9TwpR6MhQ3ybbQoRDPTEzk88poiCLRsGRX8eM1%2B7bilIUlzXgLv0Cru2GKvk0xg5JTPvrZ40ju6RrXCxsu9Gw3krLF4Ho9356WlopkPat85FVeI3FaCWjG&X-Amz-Signature=0b6ee00ab7fba387930fbf40c55e8e59dca68da9b8d51062220db011b2d325dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWAY474D%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BdcbGZE7JOVRTeq5Cjj3TvcLqgYv1QkNhSGSGQOgF%2BgIgWAoLlPbpExirFSInOoRhlVdke5NBtyqxaG1In83duFYqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNM5a1WiaSgwerz5AyrcAyJfUJYz0ncGpfJa3z3KLYyFAqtvG%2F%2BzCIdSZUjtQJyX6VsltXHqHT59kM1riVn9KUffBYqA1Ky5iwabodLNLhiDriQIl%2Fq6OvS1o%2FSGbKTo3ESD8Zj6VKN8U3PASxp25qNq%2BgUcIahsfLY47KUrfS0ZNq4s5wuFbRo7KigMJfbhg5aI81t4gPCPR1ebo7ErzBCJsYtD34GIO4%2B1yV834ddu9NzvIeHAadVIiAg6EWEM0hhuNYM6IZElzUoigCVozYbaH4ayVvDI5hynrNb4tSeRbplyqbzquMUN25tp8zOMjE%2Fi2gTLPEP3SfuuU1VGbNV9M5yyoXEt3lyLykDLUBsBKxXSTMoRYJeSXaZiaNpCVGZox8qDyC03iQXLiRans5kpiVdhOdkOzJh1QZmJYki1eGzqp5NJJH9MYa%2BgkmtuHuWm7r5KcxVkpjGlyINl8zYuvXJbCbYu8wOVAS3EdjJ%2BkmtGjnc3qRt8o58%2FGfDE9xMK8eZl7AzweAxcyKeCshhkLtvNHoKIbt6RrkwqN19ezSGFItZvUV%2BLW1Y5hNkyOkom7Jk4cgzSw9FnB5ZwH%2FXufjaisMUBvx3jzXEQY2tn4qOpUDNExBaydCSD4XBcIbh6GJ3pTpUJqOV%2FMPyq5sQGOqUB0wEcLkrjbi8DoC2M%2BZc2HLcsH3nEVsGziY8SgM0npgPtDOyfnyPPyl%2B2yWGXWiLwZtbhlt7Xa4NTTjwJDOyO6zwGgSmFNfk2%2Bir7sa9TwpR6MhQ3ybbQoRDPTEzk88poiCLRsGRX8eM1%2B7bilIUlzXgLv0Cru2GKvk0xg5JTPvrZ40ju6RrXCxsu9Gw3krLF4Ho9356WlopkPat85FVeI3FaCWjG&X-Amz-Signature=fbd38bccfe95395b6c425973301bf10c9d179876eeb91eb7d692af089982c0ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWAY474D%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BdcbGZE7JOVRTeq5Cjj3TvcLqgYv1QkNhSGSGQOgF%2BgIgWAoLlPbpExirFSInOoRhlVdke5NBtyqxaG1In83duFYqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNM5a1WiaSgwerz5AyrcAyJfUJYz0ncGpfJa3z3KLYyFAqtvG%2F%2BzCIdSZUjtQJyX6VsltXHqHT59kM1riVn9KUffBYqA1Ky5iwabodLNLhiDriQIl%2Fq6OvS1o%2FSGbKTo3ESD8Zj6VKN8U3PASxp25qNq%2BgUcIahsfLY47KUrfS0ZNq4s5wuFbRo7KigMJfbhg5aI81t4gPCPR1ebo7ErzBCJsYtD34GIO4%2B1yV834ddu9NzvIeHAadVIiAg6EWEM0hhuNYM6IZElzUoigCVozYbaH4ayVvDI5hynrNb4tSeRbplyqbzquMUN25tp8zOMjE%2Fi2gTLPEP3SfuuU1VGbNV9M5yyoXEt3lyLykDLUBsBKxXSTMoRYJeSXaZiaNpCVGZox8qDyC03iQXLiRans5kpiVdhOdkOzJh1QZmJYki1eGzqp5NJJH9MYa%2BgkmtuHuWm7r5KcxVkpjGlyINl8zYuvXJbCbYu8wOVAS3EdjJ%2BkmtGjnc3qRt8o58%2FGfDE9xMK8eZl7AzweAxcyKeCshhkLtvNHoKIbt6RrkwqN19ezSGFItZvUV%2BLW1Y5hNkyOkom7Jk4cgzSw9FnB5ZwH%2FXufjaisMUBvx3jzXEQY2tn4qOpUDNExBaydCSD4XBcIbh6GJ3pTpUJqOV%2FMPyq5sQGOqUB0wEcLkrjbi8DoC2M%2BZc2HLcsH3nEVsGziY8SgM0npgPtDOyfnyPPyl%2B2yWGXWiLwZtbhlt7Xa4NTTjwJDOyO6zwGgSmFNfk2%2Bir7sa9TwpR6MhQ3ybbQoRDPTEzk88poiCLRsGRX8eM1%2B7bilIUlzXgLv0Cru2GKvk0xg5JTPvrZ40ju6RrXCxsu9Gw3krLF4Ho9356WlopkPat85FVeI3FaCWjG&X-Amz-Signature=5a902a6f36756eef0a8ade1ec7aecc031ba5d00af24e672c2316896390ff013e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWAY474D%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BdcbGZE7JOVRTeq5Cjj3TvcLqgYv1QkNhSGSGQOgF%2BgIgWAoLlPbpExirFSInOoRhlVdke5NBtyqxaG1In83duFYqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNM5a1WiaSgwerz5AyrcAyJfUJYz0ncGpfJa3z3KLYyFAqtvG%2F%2BzCIdSZUjtQJyX6VsltXHqHT59kM1riVn9KUffBYqA1Ky5iwabodLNLhiDriQIl%2Fq6OvS1o%2FSGbKTo3ESD8Zj6VKN8U3PASxp25qNq%2BgUcIahsfLY47KUrfS0ZNq4s5wuFbRo7KigMJfbhg5aI81t4gPCPR1ebo7ErzBCJsYtD34GIO4%2B1yV834ddu9NzvIeHAadVIiAg6EWEM0hhuNYM6IZElzUoigCVozYbaH4ayVvDI5hynrNb4tSeRbplyqbzquMUN25tp8zOMjE%2Fi2gTLPEP3SfuuU1VGbNV9M5yyoXEt3lyLykDLUBsBKxXSTMoRYJeSXaZiaNpCVGZox8qDyC03iQXLiRans5kpiVdhOdkOzJh1QZmJYki1eGzqp5NJJH9MYa%2BgkmtuHuWm7r5KcxVkpjGlyINl8zYuvXJbCbYu8wOVAS3EdjJ%2BkmtGjnc3qRt8o58%2FGfDE9xMK8eZl7AzweAxcyKeCshhkLtvNHoKIbt6RrkwqN19ezSGFItZvUV%2BLW1Y5hNkyOkom7Jk4cgzSw9FnB5ZwH%2FXufjaisMUBvx3jzXEQY2tn4qOpUDNExBaydCSD4XBcIbh6GJ3pTpUJqOV%2FMPyq5sQGOqUB0wEcLkrjbi8DoC2M%2BZc2HLcsH3nEVsGziY8SgM0npgPtDOyfnyPPyl%2B2yWGXWiLwZtbhlt7Xa4NTTjwJDOyO6zwGgSmFNfk2%2Bir7sa9TwpR6MhQ3ybbQoRDPTEzk88poiCLRsGRX8eM1%2B7bilIUlzXgLv0Cru2GKvk0xg5JTPvrZ40ju6RrXCxsu9Gw3krLF4Ho9356WlopkPat85FVeI3FaCWjG&X-Amz-Signature=9c15816903cb2c9112066bd02d40c66255916608d18b06249fa4c290c1b366c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWAY474D%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BdcbGZE7JOVRTeq5Cjj3TvcLqgYv1QkNhSGSGQOgF%2BgIgWAoLlPbpExirFSInOoRhlVdke5NBtyqxaG1In83duFYqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNM5a1WiaSgwerz5AyrcAyJfUJYz0ncGpfJa3z3KLYyFAqtvG%2F%2BzCIdSZUjtQJyX6VsltXHqHT59kM1riVn9KUffBYqA1Ky5iwabodLNLhiDriQIl%2Fq6OvS1o%2FSGbKTo3ESD8Zj6VKN8U3PASxp25qNq%2BgUcIahsfLY47KUrfS0ZNq4s5wuFbRo7KigMJfbhg5aI81t4gPCPR1ebo7ErzBCJsYtD34GIO4%2B1yV834ddu9NzvIeHAadVIiAg6EWEM0hhuNYM6IZElzUoigCVozYbaH4ayVvDI5hynrNb4tSeRbplyqbzquMUN25tp8zOMjE%2Fi2gTLPEP3SfuuU1VGbNV9M5yyoXEt3lyLykDLUBsBKxXSTMoRYJeSXaZiaNpCVGZox8qDyC03iQXLiRans5kpiVdhOdkOzJh1QZmJYki1eGzqp5NJJH9MYa%2BgkmtuHuWm7r5KcxVkpjGlyINl8zYuvXJbCbYu8wOVAS3EdjJ%2BkmtGjnc3qRt8o58%2FGfDE9xMK8eZl7AzweAxcyKeCshhkLtvNHoKIbt6RrkwqN19ezSGFItZvUV%2BLW1Y5hNkyOkom7Jk4cgzSw9FnB5ZwH%2FXufjaisMUBvx3jzXEQY2tn4qOpUDNExBaydCSD4XBcIbh6GJ3pTpUJqOV%2FMPyq5sQGOqUB0wEcLkrjbi8DoC2M%2BZc2HLcsH3nEVsGziY8SgM0npgPtDOyfnyPPyl%2B2yWGXWiLwZtbhlt7Xa4NTTjwJDOyO6zwGgSmFNfk2%2Bir7sa9TwpR6MhQ3ybbQoRDPTEzk88poiCLRsGRX8eM1%2B7bilIUlzXgLv0Cru2GKvk0xg5JTPvrZ40ju6RrXCxsu9Gw3krLF4Ho9356WlopkPat85FVeI3FaCWjG&X-Amz-Signature=dc5420b0583f36020bfb0e7d1623f7069394ff3ca60f292c6e3535a285953ce6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWAY474D%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BdcbGZE7JOVRTeq5Cjj3TvcLqgYv1QkNhSGSGQOgF%2BgIgWAoLlPbpExirFSInOoRhlVdke5NBtyqxaG1In83duFYqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNM5a1WiaSgwerz5AyrcAyJfUJYz0ncGpfJa3z3KLYyFAqtvG%2F%2BzCIdSZUjtQJyX6VsltXHqHT59kM1riVn9KUffBYqA1Ky5iwabodLNLhiDriQIl%2Fq6OvS1o%2FSGbKTo3ESD8Zj6VKN8U3PASxp25qNq%2BgUcIahsfLY47KUrfS0ZNq4s5wuFbRo7KigMJfbhg5aI81t4gPCPR1ebo7ErzBCJsYtD34GIO4%2B1yV834ddu9NzvIeHAadVIiAg6EWEM0hhuNYM6IZElzUoigCVozYbaH4ayVvDI5hynrNb4tSeRbplyqbzquMUN25tp8zOMjE%2Fi2gTLPEP3SfuuU1VGbNV9M5yyoXEt3lyLykDLUBsBKxXSTMoRYJeSXaZiaNpCVGZox8qDyC03iQXLiRans5kpiVdhOdkOzJh1QZmJYki1eGzqp5NJJH9MYa%2BgkmtuHuWm7r5KcxVkpjGlyINl8zYuvXJbCbYu8wOVAS3EdjJ%2BkmtGjnc3qRt8o58%2FGfDE9xMK8eZl7AzweAxcyKeCshhkLtvNHoKIbt6RrkwqN19ezSGFItZvUV%2BLW1Y5hNkyOkom7Jk4cgzSw9FnB5ZwH%2FXufjaisMUBvx3jzXEQY2tn4qOpUDNExBaydCSD4XBcIbh6GJ3pTpUJqOV%2FMPyq5sQGOqUB0wEcLkrjbi8DoC2M%2BZc2HLcsH3nEVsGziY8SgM0npgPtDOyfnyPPyl%2B2yWGXWiLwZtbhlt7Xa4NTTjwJDOyO6zwGgSmFNfk2%2Bir7sa9TwpR6MhQ3ybbQoRDPTEzk88poiCLRsGRX8eM1%2B7bilIUlzXgLv0Cru2GKvk0xg5JTPvrZ40ju6RrXCxsu9Gw3krLF4Ho9356WlopkPat85FVeI3FaCWjG&X-Amz-Signature=3d64f5f82d6ca3f4ec8274ea21485cc3851e7f187103cddf3d442422c61e2606&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWAY474D%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BdcbGZE7JOVRTeq5Cjj3TvcLqgYv1QkNhSGSGQOgF%2BgIgWAoLlPbpExirFSInOoRhlVdke5NBtyqxaG1In83duFYqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNM5a1WiaSgwerz5AyrcAyJfUJYz0ncGpfJa3z3KLYyFAqtvG%2F%2BzCIdSZUjtQJyX6VsltXHqHT59kM1riVn9KUffBYqA1Ky5iwabodLNLhiDriQIl%2Fq6OvS1o%2FSGbKTo3ESD8Zj6VKN8U3PASxp25qNq%2BgUcIahsfLY47KUrfS0ZNq4s5wuFbRo7KigMJfbhg5aI81t4gPCPR1ebo7ErzBCJsYtD34GIO4%2B1yV834ddu9NzvIeHAadVIiAg6EWEM0hhuNYM6IZElzUoigCVozYbaH4ayVvDI5hynrNb4tSeRbplyqbzquMUN25tp8zOMjE%2Fi2gTLPEP3SfuuU1VGbNV9M5yyoXEt3lyLykDLUBsBKxXSTMoRYJeSXaZiaNpCVGZox8qDyC03iQXLiRans5kpiVdhOdkOzJh1QZmJYki1eGzqp5NJJH9MYa%2BgkmtuHuWm7r5KcxVkpjGlyINl8zYuvXJbCbYu8wOVAS3EdjJ%2BkmtGjnc3qRt8o58%2FGfDE9xMK8eZl7AzweAxcyKeCshhkLtvNHoKIbt6RrkwqN19ezSGFItZvUV%2BLW1Y5hNkyOkom7Jk4cgzSw9FnB5ZwH%2FXufjaisMUBvx3jzXEQY2tn4qOpUDNExBaydCSD4XBcIbh6GJ3pTpUJqOV%2FMPyq5sQGOqUB0wEcLkrjbi8DoC2M%2BZc2HLcsH3nEVsGziY8SgM0npgPtDOyfnyPPyl%2B2yWGXWiLwZtbhlt7Xa4NTTjwJDOyO6zwGgSmFNfk2%2Bir7sa9TwpR6MhQ3ybbQoRDPTEzk88poiCLRsGRX8eM1%2B7bilIUlzXgLv0Cru2GKvk0xg5JTPvrZ40ju6RrXCxsu9Gw3krLF4Ho9356WlopkPat85FVeI3FaCWjG&X-Amz-Signature=ceb6b1e108df42ae8cc2b3fc0b4d5069bffd1541e9d37796e6200672c6f7d1ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWAY474D%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BdcbGZE7JOVRTeq5Cjj3TvcLqgYv1QkNhSGSGQOgF%2BgIgWAoLlPbpExirFSInOoRhlVdke5NBtyqxaG1In83duFYqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNM5a1WiaSgwerz5AyrcAyJfUJYz0ncGpfJa3z3KLYyFAqtvG%2F%2BzCIdSZUjtQJyX6VsltXHqHT59kM1riVn9KUffBYqA1Ky5iwabodLNLhiDriQIl%2Fq6OvS1o%2FSGbKTo3ESD8Zj6VKN8U3PASxp25qNq%2BgUcIahsfLY47KUrfS0ZNq4s5wuFbRo7KigMJfbhg5aI81t4gPCPR1ebo7ErzBCJsYtD34GIO4%2B1yV834ddu9NzvIeHAadVIiAg6EWEM0hhuNYM6IZElzUoigCVozYbaH4ayVvDI5hynrNb4tSeRbplyqbzquMUN25tp8zOMjE%2Fi2gTLPEP3SfuuU1VGbNV9M5yyoXEt3lyLykDLUBsBKxXSTMoRYJeSXaZiaNpCVGZox8qDyC03iQXLiRans5kpiVdhOdkOzJh1QZmJYki1eGzqp5NJJH9MYa%2BgkmtuHuWm7r5KcxVkpjGlyINl8zYuvXJbCbYu8wOVAS3EdjJ%2BkmtGjnc3qRt8o58%2FGfDE9xMK8eZl7AzweAxcyKeCshhkLtvNHoKIbt6RrkwqN19ezSGFItZvUV%2BLW1Y5hNkyOkom7Jk4cgzSw9FnB5ZwH%2FXufjaisMUBvx3jzXEQY2tn4qOpUDNExBaydCSD4XBcIbh6GJ3pTpUJqOV%2FMPyq5sQGOqUB0wEcLkrjbi8DoC2M%2BZc2HLcsH3nEVsGziY8SgM0npgPtDOyfnyPPyl%2B2yWGXWiLwZtbhlt7Xa4NTTjwJDOyO6zwGgSmFNfk2%2Bir7sa9TwpR6MhQ3ybbQoRDPTEzk88poiCLRsGRX8eM1%2B7bilIUlzXgLv0Cru2GKvk0xg5JTPvrZ40ju6RrXCxsu9Gw3krLF4Ho9356WlopkPat85FVeI3FaCWjG&X-Amz-Signature=b106bbc6c6814b898618c69cfe1872dbe06b79142411ab54e7a53c246962c682&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWAY474D%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BdcbGZE7JOVRTeq5Cjj3TvcLqgYv1QkNhSGSGQOgF%2BgIgWAoLlPbpExirFSInOoRhlVdke5NBtyqxaG1In83duFYqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNM5a1WiaSgwerz5AyrcAyJfUJYz0ncGpfJa3z3KLYyFAqtvG%2F%2BzCIdSZUjtQJyX6VsltXHqHT59kM1riVn9KUffBYqA1Ky5iwabodLNLhiDriQIl%2Fq6OvS1o%2FSGbKTo3ESD8Zj6VKN8U3PASxp25qNq%2BgUcIahsfLY47KUrfS0ZNq4s5wuFbRo7KigMJfbhg5aI81t4gPCPR1ebo7ErzBCJsYtD34GIO4%2B1yV834ddu9NzvIeHAadVIiAg6EWEM0hhuNYM6IZElzUoigCVozYbaH4ayVvDI5hynrNb4tSeRbplyqbzquMUN25tp8zOMjE%2Fi2gTLPEP3SfuuU1VGbNV9M5yyoXEt3lyLykDLUBsBKxXSTMoRYJeSXaZiaNpCVGZox8qDyC03iQXLiRans5kpiVdhOdkOzJh1QZmJYki1eGzqp5NJJH9MYa%2BgkmtuHuWm7r5KcxVkpjGlyINl8zYuvXJbCbYu8wOVAS3EdjJ%2BkmtGjnc3qRt8o58%2FGfDE9xMK8eZl7AzweAxcyKeCshhkLtvNHoKIbt6RrkwqN19ezSGFItZvUV%2BLW1Y5hNkyOkom7Jk4cgzSw9FnB5ZwH%2FXufjaisMUBvx3jzXEQY2tn4qOpUDNExBaydCSD4XBcIbh6GJ3pTpUJqOV%2FMPyq5sQGOqUB0wEcLkrjbi8DoC2M%2BZc2HLcsH3nEVsGziY8SgM0npgPtDOyfnyPPyl%2B2yWGXWiLwZtbhlt7Xa4NTTjwJDOyO6zwGgSmFNfk2%2Bir7sa9TwpR6MhQ3ybbQoRDPTEzk88poiCLRsGRX8eM1%2B7bilIUlzXgLv0Cru2GKvk0xg5JTPvrZ40ju6RrXCxsu9Gw3krLF4Ho9356WlopkPat85FVeI3FaCWjG&X-Amz-Signature=879de0c71ac519b4d50ff5487f5f2783c35b667a2b30fed62cb692627c681064&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWAY474D%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BdcbGZE7JOVRTeq5Cjj3TvcLqgYv1QkNhSGSGQOgF%2BgIgWAoLlPbpExirFSInOoRhlVdke5NBtyqxaG1In83duFYqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNM5a1WiaSgwerz5AyrcAyJfUJYz0ncGpfJa3z3KLYyFAqtvG%2F%2BzCIdSZUjtQJyX6VsltXHqHT59kM1riVn9KUffBYqA1Ky5iwabodLNLhiDriQIl%2Fq6OvS1o%2FSGbKTo3ESD8Zj6VKN8U3PASxp25qNq%2BgUcIahsfLY47KUrfS0ZNq4s5wuFbRo7KigMJfbhg5aI81t4gPCPR1ebo7ErzBCJsYtD34GIO4%2B1yV834ddu9NzvIeHAadVIiAg6EWEM0hhuNYM6IZElzUoigCVozYbaH4ayVvDI5hynrNb4tSeRbplyqbzquMUN25tp8zOMjE%2Fi2gTLPEP3SfuuU1VGbNV9M5yyoXEt3lyLykDLUBsBKxXSTMoRYJeSXaZiaNpCVGZox8qDyC03iQXLiRans5kpiVdhOdkOzJh1QZmJYki1eGzqp5NJJH9MYa%2BgkmtuHuWm7r5KcxVkpjGlyINl8zYuvXJbCbYu8wOVAS3EdjJ%2BkmtGjnc3qRt8o58%2FGfDE9xMK8eZl7AzweAxcyKeCshhkLtvNHoKIbt6RrkwqN19ezSGFItZvUV%2BLW1Y5hNkyOkom7Jk4cgzSw9FnB5ZwH%2FXufjaisMUBvx3jzXEQY2tn4qOpUDNExBaydCSD4XBcIbh6GJ3pTpUJqOV%2FMPyq5sQGOqUB0wEcLkrjbi8DoC2M%2BZc2HLcsH3nEVsGziY8SgM0npgPtDOyfnyPPyl%2B2yWGXWiLwZtbhlt7Xa4NTTjwJDOyO6zwGgSmFNfk2%2Bir7sa9TwpR6MhQ3ybbQoRDPTEzk88poiCLRsGRX8eM1%2B7bilIUlzXgLv0Cru2GKvk0xg5JTPvrZ40ju6RrXCxsu9Gw3krLF4Ho9356WlopkPat85FVeI3FaCWjG&X-Amz-Signature=9c15816903cb2c9112066bd02d40c66255916608d18b06249fa4c290c1b366c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
