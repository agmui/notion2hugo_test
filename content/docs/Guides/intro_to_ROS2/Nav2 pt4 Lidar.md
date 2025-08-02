---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-08-02T10:06:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-08-02T10:06:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXC3P7L7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDm%2B7D%2FrtdRX0nmRG4HmQ3DjX0WwUh8ZrLGMXscC88%2BqAIhAMUViDWErnxSLyuAG2KxX0PPiEfxEXdv1lDr2ktOo79SKv8DCBwQABoMNjM3NDIzMTgzODA1IgxbRu1uJbAq9AifqGEq3AO1nsAKL3LlBeyU1eIupBoPXxhyGjrTsNDYa5J4X7BCmq5Eq5g7l02glB0%2FVL%2B%2FJ7WKBWw4T52tWxPXqekUrP5ZlTIftd9yjq4O5DR4viRVGlvjJu5HGH2Ozj2vktwfZ9WF%2FMlCArhSSYQz0BdFjqIAb6FeznP8gg6Cb7k1mQpMrMI4zv6YqgXshHQggbWmdVYii3cN6TY3hV%2FM7WLlXTtEcLhtek%2BZml8tKNHbhk%2FQLmb8szJaurssm9Eo9W1fI8hfXpyXI%2FM8sJGNJ8sKC1czBRBnrxGa6izuudXfYXVTVoOgc8hPRCrENoTHFvyFFoKJ%2FkZafgR3RBS3VapJUYdcl0J%2FeQICKV11YnkaJCAslhuL0KUSO8M0i%2BAgyKkKJMNqXPPNuZ%2F3iusRwTPOyLRL9PL0wixrEMIKnYKUodOxcUgMGkqYzwa8fxYH1VVZLNjRElIcagRSULdFmhvzUYFrj7GkzparZM%2B3oR5Jf9em3kco%2FvSsGvWEEkiRfp7ifjx%2BhJsWIsB4LevlRgeJ6RXN6NmFD9FmhyA5V0OsWTJnsDr8k2nDWY22f6GF6Ia4OUDNbs%2BysMLmngoabzGZBX8hC%2FNLUoUok3%2Fj5m21DYO%2Flh67FexqBUL8hkzHtTDIw7nEBjqkAXOJYvE04eB4Hpo8OLHL8a837dYrRg0L1XNUKHaPRon8MH6TkyaZrac1dnMqs4p%2FGx05KAHwRZ%2BBONZnXI1HO9nNqUCBddUTdi6lKw%2FQMR7%2B2ZD0fIKnB16kePA1KbX6FKapvHlQ8TbLJP2zPLK0CoZJawoEHUPNMQvI8Unjuy9anK05yYgZWv6P6zutGejI0fa1%2FO6b0Acf8YOUjbTlk2NTN0xU&X-Amz-Signature=c55a799c15d426f8d937a6dc5d1edf1438553b8fa01639bf22e0b2414aefef77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KC2NKLH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE1XHkbqn6a4zrAO5fdNk8TV8kyywSRpTH6szXU6wlJTAiEA9foc3TFgIuRb6ayrnVzr4RIe6hVPrDuu4l2rKmMZhRkq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDA58%2BOYGyqkSavLHzSrcA%2FFyQ4T5IlbwLuMIp5n5BmTY7h%2BFzq9o8yeJ3PBp2Vh0Yeqd6M6mXwORSltLu9%2BgFQ4h%2BO6IglUzLi6krpLqCq67huCZaqXFKrBPpZhk73SWUeJDfVwgvjkg%2BDI908thMZNqU6aHpV1uzpv8FzYaQW8W2xzvUlUsDQdy70lwZmP8cuoqKXJYNF5UoNM169UlyaRHRTJfKFOQ0E2hk8ysU8Byff56Jvf18iBVEHxBVE33nAYPXkaGNOjqJbNtbsDKqiCi1wPEJ9YT0foG05hoO2AiQsotl4hjHIfhK643cuZNXQPkmjDKfTe1ZKlNZrwYHfEHnrMWvPth%2FrDaUqIoqIRHVF4oWgAhlYP75ikVWfSCQBm1TlFNtQI898U%2BOs%2B4lgibHpj1GmEsmNNi558PLJg9Ik2Shpd%2F6Abu9rFGlocga3fvH9Xuas2Ko%2FDMSjPvLwX3dtjzbhKjm6OSD33NkA3gn4I0Gt%2F7u8e5Uw6KZx7kZ627zOqL3AeYHCODHp7bvjZd7pclnFV3esR%2F5nr3XEV%2Be1EsAotaJmxUj5CYvbizYX5w2aDZ9e5KiwyRkj%2Fbe%2Bzda7zxdL%2B0jmvsNH7AZludABmjKRLV%2BOZDjPsNUAzohk2unbQMoUuQfiezMJzEucQGOqUBxlGYFygw0K%2F01GxWe%2F1M7Yg%2BTFct3t9cQSWinOCRg5kX2gX9NFRUkwNPwvoK48V%2FdUwsziWBGSEPxErIBmF%2Fpeag%2F0qobdmxE2Z9pzSJw68tPCb3Scu5Ge%2B6ifBgPW9tkHJ2tpYqmLBF%2FC3e6DfyrE%2BfaX6RAbZrdo5NmLdpXCOWrZywD0ibIw%2FBoAkjpGCYNL7B3KKXF2QN6Vggktu8VHAS8ajf&X-Amz-Signature=d94395d3ebdc5299442985c08a8cd0d907abb1b58e3d2d811af1016dded2a1ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KC2NKLH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE1XHkbqn6a4zrAO5fdNk8TV8kyywSRpTH6szXU6wlJTAiEA9foc3TFgIuRb6ayrnVzr4RIe6hVPrDuu4l2rKmMZhRkq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDA58%2BOYGyqkSavLHzSrcA%2FFyQ4T5IlbwLuMIp5n5BmTY7h%2BFzq9o8yeJ3PBp2Vh0Yeqd6M6mXwORSltLu9%2BgFQ4h%2BO6IglUzLi6krpLqCq67huCZaqXFKrBPpZhk73SWUeJDfVwgvjkg%2BDI908thMZNqU6aHpV1uzpv8FzYaQW8W2xzvUlUsDQdy70lwZmP8cuoqKXJYNF5UoNM169UlyaRHRTJfKFOQ0E2hk8ysU8Byff56Jvf18iBVEHxBVE33nAYPXkaGNOjqJbNtbsDKqiCi1wPEJ9YT0foG05hoO2AiQsotl4hjHIfhK643cuZNXQPkmjDKfTe1ZKlNZrwYHfEHnrMWvPth%2FrDaUqIoqIRHVF4oWgAhlYP75ikVWfSCQBm1TlFNtQI898U%2BOs%2B4lgibHpj1GmEsmNNi558PLJg9Ik2Shpd%2F6Abu9rFGlocga3fvH9Xuas2Ko%2FDMSjPvLwX3dtjzbhKjm6OSD33NkA3gn4I0Gt%2F7u8e5Uw6KZx7kZ627zOqL3AeYHCODHp7bvjZd7pclnFV3esR%2F5nr3XEV%2Be1EsAotaJmxUj5CYvbizYX5w2aDZ9e5KiwyRkj%2Fbe%2Bzda7zxdL%2B0jmvsNH7AZludABmjKRLV%2BOZDjPsNUAzohk2unbQMoUuQfiezMJzEucQGOqUBxlGYFygw0K%2F01GxWe%2F1M7Yg%2BTFct3t9cQSWinOCRg5kX2gX9NFRUkwNPwvoK48V%2FdUwsziWBGSEPxErIBmF%2Fpeag%2F0qobdmxE2Z9pzSJw68tPCb3Scu5Ge%2B6ifBgPW9tkHJ2tpYqmLBF%2FC3e6DfyrE%2BfaX6RAbZrdo5NmLdpXCOWrZywD0ibIw%2FBoAkjpGCYNL7B3KKXF2QN6Vggktu8VHAS8ajf&X-Amz-Signature=130d6ce83ce349769549a4f1426b27b16fd89738f6cead5ad39c369f702b524d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KC2NKLH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE1XHkbqn6a4zrAO5fdNk8TV8kyywSRpTH6szXU6wlJTAiEA9foc3TFgIuRb6ayrnVzr4RIe6hVPrDuu4l2rKmMZhRkq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDA58%2BOYGyqkSavLHzSrcA%2FFyQ4T5IlbwLuMIp5n5BmTY7h%2BFzq9o8yeJ3PBp2Vh0Yeqd6M6mXwORSltLu9%2BgFQ4h%2BO6IglUzLi6krpLqCq67huCZaqXFKrBPpZhk73SWUeJDfVwgvjkg%2BDI908thMZNqU6aHpV1uzpv8FzYaQW8W2xzvUlUsDQdy70lwZmP8cuoqKXJYNF5UoNM169UlyaRHRTJfKFOQ0E2hk8ysU8Byff56Jvf18iBVEHxBVE33nAYPXkaGNOjqJbNtbsDKqiCi1wPEJ9YT0foG05hoO2AiQsotl4hjHIfhK643cuZNXQPkmjDKfTe1ZKlNZrwYHfEHnrMWvPth%2FrDaUqIoqIRHVF4oWgAhlYP75ikVWfSCQBm1TlFNtQI898U%2BOs%2B4lgibHpj1GmEsmNNi558PLJg9Ik2Shpd%2F6Abu9rFGlocga3fvH9Xuas2Ko%2FDMSjPvLwX3dtjzbhKjm6OSD33NkA3gn4I0Gt%2F7u8e5Uw6KZx7kZ627zOqL3AeYHCODHp7bvjZd7pclnFV3esR%2F5nr3XEV%2Be1EsAotaJmxUj5CYvbizYX5w2aDZ9e5KiwyRkj%2Fbe%2Bzda7zxdL%2B0jmvsNH7AZludABmjKRLV%2BOZDjPsNUAzohk2unbQMoUuQfiezMJzEucQGOqUBxlGYFygw0K%2F01GxWe%2F1M7Yg%2BTFct3t9cQSWinOCRg5kX2gX9NFRUkwNPwvoK48V%2FdUwsziWBGSEPxErIBmF%2Fpeag%2F0qobdmxE2Z9pzSJw68tPCb3Scu5Ge%2B6ifBgPW9tkHJ2tpYqmLBF%2FC3e6DfyrE%2BfaX6RAbZrdo5NmLdpXCOWrZywD0ibIw%2FBoAkjpGCYNL7B3KKXF2QN6Vggktu8VHAS8ajf&X-Amz-Signature=785da2d9dd1d0a5414502fe564fc52784b40715c7c191176dc55359f110640b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KC2NKLH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE1XHkbqn6a4zrAO5fdNk8TV8kyywSRpTH6szXU6wlJTAiEA9foc3TFgIuRb6ayrnVzr4RIe6hVPrDuu4l2rKmMZhRkq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDA58%2BOYGyqkSavLHzSrcA%2FFyQ4T5IlbwLuMIp5n5BmTY7h%2BFzq9o8yeJ3PBp2Vh0Yeqd6M6mXwORSltLu9%2BgFQ4h%2BO6IglUzLi6krpLqCq67huCZaqXFKrBPpZhk73SWUeJDfVwgvjkg%2BDI908thMZNqU6aHpV1uzpv8FzYaQW8W2xzvUlUsDQdy70lwZmP8cuoqKXJYNF5UoNM169UlyaRHRTJfKFOQ0E2hk8ysU8Byff56Jvf18iBVEHxBVE33nAYPXkaGNOjqJbNtbsDKqiCi1wPEJ9YT0foG05hoO2AiQsotl4hjHIfhK643cuZNXQPkmjDKfTe1ZKlNZrwYHfEHnrMWvPth%2FrDaUqIoqIRHVF4oWgAhlYP75ikVWfSCQBm1TlFNtQI898U%2BOs%2B4lgibHpj1GmEsmNNi558PLJg9Ik2Shpd%2F6Abu9rFGlocga3fvH9Xuas2Ko%2FDMSjPvLwX3dtjzbhKjm6OSD33NkA3gn4I0Gt%2F7u8e5Uw6KZx7kZ627zOqL3AeYHCODHp7bvjZd7pclnFV3esR%2F5nr3XEV%2Be1EsAotaJmxUj5CYvbizYX5w2aDZ9e5KiwyRkj%2Fbe%2Bzda7zxdL%2B0jmvsNH7AZludABmjKRLV%2BOZDjPsNUAzohk2unbQMoUuQfiezMJzEucQGOqUBxlGYFygw0K%2F01GxWe%2F1M7Yg%2BTFct3t9cQSWinOCRg5kX2gX9NFRUkwNPwvoK48V%2FdUwsziWBGSEPxErIBmF%2Fpeag%2F0qobdmxE2Z9pzSJw68tPCb3Scu5Ge%2B6ifBgPW9tkHJ2tpYqmLBF%2FC3e6DfyrE%2BfaX6RAbZrdo5NmLdpXCOWrZywD0ibIw%2FBoAkjpGCYNL7B3KKXF2QN6Vggktu8VHAS8ajf&X-Amz-Signature=8e9c3a778d228482a61210344dc00ed73b3b3556ceedb767235a8a9858ebd187&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KC2NKLH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE1XHkbqn6a4zrAO5fdNk8TV8kyywSRpTH6szXU6wlJTAiEA9foc3TFgIuRb6ayrnVzr4RIe6hVPrDuu4l2rKmMZhRkq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDA58%2BOYGyqkSavLHzSrcA%2FFyQ4T5IlbwLuMIp5n5BmTY7h%2BFzq9o8yeJ3PBp2Vh0Yeqd6M6mXwORSltLu9%2BgFQ4h%2BO6IglUzLi6krpLqCq67huCZaqXFKrBPpZhk73SWUeJDfVwgvjkg%2BDI908thMZNqU6aHpV1uzpv8FzYaQW8W2xzvUlUsDQdy70lwZmP8cuoqKXJYNF5UoNM169UlyaRHRTJfKFOQ0E2hk8ysU8Byff56Jvf18iBVEHxBVE33nAYPXkaGNOjqJbNtbsDKqiCi1wPEJ9YT0foG05hoO2AiQsotl4hjHIfhK643cuZNXQPkmjDKfTe1ZKlNZrwYHfEHnrMWvPth%2FrDaUqIoqIRHVF4oWgAhlYP75ikVWfSCQBm1TlFNtQI898U%2BOs%2B4lgibHpj1GmEsmNNi558PLJg9Ik2Shpd%2F6Abu9rFGlocga3fvH9Xuas2Ko%2FDMSjPvLwX3dtjzbhKjm6OSD33NkA3gn4I0Gt%2F7u8e5Uw6KZx7kZ627zOqL3AeYHCODHp7bvjZd7pclnFV3esR%2F5nr3XEV%2Be1EsAotaJmxUj5CYvbizYX5w2aDZ9e5KiwyRkj%2Fbe%2Bzda7zxdL%2B0jmvsNH7AZludABmjKRLV%2BOZDjPsNUAzohk2unbQMoUuQfiezMJzEucQGOqUBxlGYFygw0K%2F01GxWe%2F1M7Yg%2BTFct3t9cQSWinOCRg5kX2gX9NFRUkwNPwvoK48V%2FdUwsziWBGSEPxErIBmF%2Fpeag%2F0qobdmxE2Z9pzSJw68tPCb3Scu5Ge%2B6ifBgPW9tkHJ2tpYqmLBF%2FC3e6DfyrE%2BfaX6RAbZrdo5NmLdpXCOWrZywD0ibIw%2FBoAkjpGCYNL7B3KKXF2QN6Vggktu8VHAS8ajf&X-Amz-Signature=9b37344e213351cb5a018425d01faa1a22188b8ea1bd474afc5d503598fb2451&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KC2NKLH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE1XHkbqn6a4zrAO5fdNk8TV8kyywSRpTH6szXU6wlJTAiEA9foc3TFgIuRb6ayrnVzr4RIe6hVPrDuu4l2rKmMZhRkq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDA58%2BOYGyqkSavLHzSrcA%2FFyQ4T5IlbwLuMIp5n5BmTY7h%2BFzq9o8yeJ3PBp2Vh0Yeqd6M6mXwORSltLu9%2BgFQ4h%2BO6IglUzLi6krpLqCq67huCZaqXFKrBPpZhk73SWUeJDfVwgvjkg%2BDI908thMZNqU6aHpV1uzpv8FzYaQW8W2xzvUlUsDQdy70lwZmP8cuoqKXJYNF5UoNM169UlyaRHRTJfKFOQ0E2hk8ysU8Byff56Jvf18iBVEHxBVE33nAYPXkaGNOjqJbNtbsDKqiCi1wPEJ9YT0foG05hoO2AiQsotl4hjHIfhK643cuZNXQPkmjDKfTe1ZKlNZrwYHfEHnrMWvPth%2FrDaUqIoqIRHVF4oWgAhlYP75ikVWfSCQBm1TlFNtQI898U%2BOs%2B4lgibHpj1GmEsmNNi558PLJg9Ik2Shpd%2F6Abu9rFGlocga3fvH9Xuas2Ko%2FDMSjPvLwX3dtjzbhKjm6OSD33NkA3gn4I0Gt%2F7u8e5Uw6KZx7kZ627zOqL3AeYHCODHp7bvjZd7pclnFV3esR%2F5nr3XEV%2Be1EsAotaJmxUj5CYvbizYX5w2aDZ9e5KiwyRkj%2Fbe%2Bzda7zxdL%2B0jmvsNH7AZludABmjKRLV%2BOZDjPsNUAzohk2unbQMoUuQfiezMJzEucQGOqUBxlGYFygw0K%2F01GxWe%2F1M7Yg%2BTFct3t9cQSWinOCRg5kX2gX9NFRUkwNPwvoK48V%2FdUwsziWBGSEPxErIBmF%2Fpeag%2F0qobdmxE2Z9pzSJw68tPCb3Scu5Ge%2B6ifBgPW9tkHJ2tpYqmLBF%2FC3e6DfyrE%2BfaX6RAbZrdo5NmLdpXCOWrZywD0ibIw%2FBoAkjpGCYNL7B3KKXF2QN6Vggktu8VHAS8ajf&X-Amz-Signature=c9e7097b22fd76386351da22efecc117bff235f7ef1df65761a8a5b1cc323361&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KC2NKLH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE1XHkbqn6a4zrAO5fdNk8TV8kyywSRpTH6szXU6wlJTAiEA9foc3TFgIuRb6ayrnVzr4RIe6hVPrDuu4l2rKmMZhRkq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDA58%2BOYGyqkSavLHzSrcA%2FFyQ4T5IlbwLuMIp5n5BmTY7h%2BFzq9o8yeJ3PBp2Vh0Yeqd6M6mXwORSltLu9%2BgFQ4h%2BO6IglUzLi6krpLqCq67huCZaqXFKrBPpZhk73SWUeJDfVwgvjkg%2BDI908thMZNqU6aHpV1uzpv8FzYaQW8W2xzvUlUsDQdy70lwZmP8cuoqKXJYNF5UoNM169UlyaRHRTJfKFOQ0E2hk8ysU8Byff56Jvf18iBVEHxBVE33nAYPXkaGNOjqJbNtbsDKqiCi1wPEJ9YT0foG05hoO2AiQsotl4hjHIfhK643cuZNXQPkmjDKfTe1ZKlNZrwYHfEHnrMWvPth%2FrDaUqIoqIRHVF4oWgAhlYP75ikVWfSCQBm1TlFNtQI898U%2BOs%2B4lgibHpj1GmEsmNNi558PLJg9Ik2Shpd%2F6Abu9rFGlocga3fvH9Xuas2Ko%2FDMSjPvLwX3dtjzbhKjm6OSD33NkA3gn4I0Gt%2F7u8e5Uw6KZx7kZ627zOqL3AeYHCODHp7bvjZd7pclnFV3esR%2F5nr3XEV%2Be1EsAotaJmxUj5CYvbizYX5w2aDZ9e5KiwyRkj%2Fbe%2Bzda7zxdL%2B0jmvsNH7AZludABmjKRLV%2BOZDjPsNUAzohk2unbQMoUuQfiezMJzEucQGOqUBxlGYFygw0K%2F01GxWe%2F1M7Yg%2BTFct3t9cQSWinOCRg5kX2gX9NFRUkwNPwvoK48V%2FdUwsziWBGSEPxErIBmF%2Fpeag%2F0qobdmxE2Z9pzSJw68tPCb3Scu5Ge%2B6ifBgPW9tkHJ2tpYqmLBF%2FC3e6DfyrE%2BfaX6RAbZrdo5NmLdpXCOWrZywD0ibIw%2FBoAkjpGCYNL7B3KKXF2QN6Vggktu8VHAS8ajf&X-Amz-Signature=5b0b2bc77727cb6817a440358c902f4f2e75e3ac835cd06e60d0b3b5c63819f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KC2NKLH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE1XHkbqn6a4zrAO5fdNk8TV8kyywSRpTH6szXU6wlJTAiEA9foc3TFgIuRb6ayrnVzr4RIe6hVPrDuu4l2rKmMZhRkq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDA58%2BOYGyqkSavLHzSrcA%2FFyQ4T5IlbwLuMIp5n5BmTY7h%2BFzq9o8yeJ3PBp2Vh0Yeqd6M6mXwORSltLu9%2BgFQ4h%2BO6IglUzLi6krpLqCq67huCZaqXFKrBPpZhk73SWUeJDfVwgvjkg%2BDI908thMZNqU6aHpV1uzpv8FzYaQW8W2xzvUlUsDQdy70lwZmP8cuoqKXJYNF5UoNM169UlyaRHRTJfKFOQ0E2hk8ysU8Byff56Jvf18iBVEHxBVE33nAYPXkaGNOjqJbNtbsDKqiCi1wPEJ9YT0foG05hoO2AiQsotl4hjHIfhK643cuZNXQPkmjDKfTe1ZKlNZrwYHfEHnrMWvPth%2FrDaUqIoqIRHVF4oWgAhlYP75ikVWfSCQBm1TlFNtQI898U%2BOs%2B4lgibHpj1GmEsmNNi558PLJg9Ik2Shpd%2F6Abu9rFGlocga3fvH9Xuas2Ko%2FDMSjPvLwX3dtjzbhKjm6OSD33NkA3gn4I0Gt%2F7u8e5Uw6KZx7kZ627zOqL3AeYHCODHp7bvjZd7pclnFV3esR%2F5nr3XEV%2Be1EsAotaJmxUj5CYvbizYX5w2aDZ9e5KiwyRkj%2Fbe%2Bzda7zxdL%2B0jmvsNH7AZludABmjKRLV%2BOZDjPsNUAzohk2unbQMoUuQfiezMJzEucQGOqUBxlGYFygw0K%2F01GxWe%2F1M7Yg%2BTFct3t9cQSWinOCRg5kX2gX9NFRUkwNPwvoK48V%2FdUwsziWBGSEPxErIBmF%2Fpeag%2F0qobdmxE2Z9pzSJw68tPCb3Scu5Ge%2B6ifBgPW9tkHJ2tpYqmLBF%2FC3e6DfyrE%2BfaX6RAbZrdo5NmLdpXCOWrZywD0ibIw%2FBoAkjpGCYNL7B3KKXF2QN6Vggktu8VHAS8ajf&X-Amz-Signature=0da4bbac944974b245295daa7a0ae188e9218ee5717386830187363bb5339f41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KC2NKLH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE1XHkbqn6a4zrAO5fdNk8TV8kyywSRpTH6szXU6wlJTAiEA9foc3TFgIuRb6ayrnVzr4RIe6hVPrDuu4l2rKmMZhRkq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDA58%2BOYGyqkSavLHzSrcA%2FFyQ4T5IlbwLuMIp5n5BmTY7h%2BFzq9o8yeJ3PBp2Vh0Yeqd6M6mXwORSltLu9%2BgFQ4h%2BO6IglUzLi6krpLqCq67huCZaqXFKrBPpZhk73SWUeJDfVwgvjkg%2BDI908thMZNqU6aHpV1uzpv8FzYaQW8W2xzvUlUsDQdy70lwZmP8cuoqKXJYNF5UoNM169UlyaRHRTJfKFOQ0E2hk8ysU8Byff56Jvf18iBVEHxBVE33nAYPXkaGNOjqJbNtbsDKqiCi1wPEJ9YT0foG05hoO2AiQsotl4hjHIfhK643cuZNXQPkmjDKfTe1ZKlNZrwYHfEHnrMWvPth%2FrDaUqIoqIRHVF4oWgAhlYP75ikVWfSCQBm1TlFNtQI898U%2BOs%2B4lgibHpj1GmEsmNNi558PLJg9Ik2Shpd%2F6Abu9rFGlocga3fvH9Xuas2Ko%2FDMSjPvLwX3dtjzbhKjm6OSD33NkA3gn4I0Gt%2F7u8e5Uw6KZx7kZ627zOqL3AeYHCODHp7bvjZd7pclnFV3esR%2F5nr3XEV%2Be1EsAotaJmxUj5CYvbizYX5w2aDZ9e5KiwyRkj%2Fbe%2Bzda7zxdL%2B0jmvsNH7AZludABmjKRLV%2BOZDjPsNUAzohk2unbQMoUuQfiezMJzEucQGOqUBxlGYFygw0K%2F01GxWe%2F1M7Yg%2BTFct3t9cQSWinOCRg5kX2gX9NFRUkwNPwvoK48V%2FdUwsziWBGSEPxErIBmF%2Fpeag%2F0qobdmxE2Z9pzSJw68tPCb3Scu5Ge%2B6ifBgPW9tkHJ2tpYqmLBF%2FC3e6DfyrE%2BfaX6RAbZrdo5NmLdpXCOWrZywD0ibIw%2FBoAkjpGCYNL7B3KKXF2QN6Vggktu8VHAS8ajf&X-Amz-Signature=cb298c312e98b5d15a475354e321b70da22e60685ffb8cb8a1cdd91cf5e90472&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KC2NKLH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE1XHkbqn6a4zrAO5fdNk8TV8kyywSRpTH6szXU6wlJTAiEA9foc3TFgIuRb6ayrnVzr4RIe6hVPrDuu4l2rKmMZhRkq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDA58%2BOYGyqkSavLHzSrcA%2FFyQ4T5IlbwLuMIp5n5BmTY7h%2BFzq9o8yeJ3PBp2Vh0Yeqd6M6mXwORSltLu9%2BgFQ4h%2BO6IglUzLi6krpLqCq67huCZaqXFKrBPpZhk73SWUeJDfVwgvjkg%2BDI908thMZNqU6aHpV1uzpv8FzYaQW8W2xzvUlUsDQdy70lwZmP8cuoqKXJYNF5UoNM169UlyaRHRTJfKFOQ0E2hk8ysU8Byff56Jvf18iBVEHxBVE33nAYPXkaGNOjqJbNtbsDKqiCi1wPEJ9YT0foG05hoO2AiQsotl4hjHIfhK643cuZNXQPkmjDKfTe1ZKlNZrwYHfEHnrMWvPth%2FrDaUqIoqIRHVF4oWgAhlYP75ikVWfSCQBm1TlFNtQI898U%2BOs%2B4lgibHpj1GmEsmNNi558PLJg9Ik2Shpd%2F6Abu9rFGlocga3fvH9Xuas2Ko%2FDMSjPvLwX3dtjzbhKjm6OSD33NkA3gn4I0Gt%2F7u8e5Uw6KZx7kZ627zOqL3AeYHCODHp7bvjZd7pclnFV3esR%2F5nr3XEV%2Be1EsAotaJmxUj5CYvbizYX5w2aDZ9e5KiwyRkj%2Fbe%2Bzda7zxdL%2B0jmvsNH7AZludABmjKRLV%2BOZDjPsNUAzohk2unbQMoUuQfiezMJzEucQGOqUBxlGYFygw0K%2F01GxWe%2F1M7Yg%2BTFct3t9cQSWinOCRg5kX2gX9NFRUkwNPwvoK48V%2FdUwsziWBGSEPxErIBmF%2Fpeag%2F0qobdmxE2Z9pzSJw68tPCb3Scu5Ge%2B6ifBgPW9tkHJ2tpYqmLBF%2FC3e6DfyrE%2BfaX6RAbZrdo5NmLdpXCOWrZywD0ibIw%2FBoAkjpGCYNL7B3KKXF2QN6Vggktu8VHAS8ajf&X-Amz-Signature=8e9c3a778d228482a61210344dc00ed73b3b3556ceedb767235a8a9858ebd187&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
