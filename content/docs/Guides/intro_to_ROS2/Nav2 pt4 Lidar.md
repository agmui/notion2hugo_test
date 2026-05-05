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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MA2ENH3%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2P7qAmRQjYaO4Td1af6IoISgubZqPLW6JkMXKo2bXFgIgbiScmcrKPl%2FxTn3pnNsWD3%2BPS%2Ba1ynDx9Dpc9Qcxl1Iq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDBv3Gh3eeLDWW7NSQCrcAw4Wd41YuWJmEMB2w%2BHmSkvtWc8U8e2pq7wwEZ9imOm04nVHI7jxGr9ByZdmMVvcVyOU62dzHQESAH%2BnGYXB%2B5%2BOsOQ1pHJbhAt2wJhjnzObTL2oejFuJ6KxQN7EG8pPlFejYLZJ46Aw8kQYBR9yyyVVwkxQBqSQ5Sri42q3CLn7GkScuz9V%2BQuCDTUc6OEU2IqHxyDCBxEIHPch87oqbNHriNueg7NaN%2BVgREERPxuDkY5TEvQ56hz3VmmmW57MKOlDq1gTgzz2LAufac78A8FrEZhnThn9kX1gAFEsizcxZuhHz84oMRfIGHE96FS6Z41JIHvx6MePGbeMhVZzxQ4lhJMmAqpEDFIFoV%2FvDV%2BnFgoiQ7kWukMQcBTArG5YLf36HHjmWOyCbuddsF5HimpkxAt4lupAJQJBfnll3yp8bK0JWq53okfeec7tEv%2F%2FYMY1AGflkVYpiN9oBxJ2xozBwcYQWaHCoJr97DH%2BGtKGg7Yoaa7uVOlG6JJq%2BdO8yJLjIihZGIa5W%2BOlpGv9rtzBQl51lLyNDwthkiu3IiJ2SQ9pvJ9MqW2q4Hho%2BqxcCD%2B%2BibrloXq1QXU9mQQyZ3031QuY8ztuNblQSGyz0YsPLKfUnprXjUg%2FPPVnMJ%2Bn5c8GOqUBpnn8yDxp%2FcVGgJ50FBlU%2Fx%2BZAm%2BAFL12UTtGfA5CPblZWY%2BXJB9qH6AGANUON29fEUWZnUZNgd2h1Euzczxbz6Uor%2BTHObrEfYd%2B82Yc8%2B2VaI1w%2B7XLyHff%2FkyjZvDQ3bWtT98%2BEkIXMMHf0KBKj6GIJwy%2F7ro%2B9WVfUGFN7s2S4ZRT2Ho0OmLWXhVRapI%2Fla2I3m%2FCM3Hr3C9gnoJn2r%2Fs6CXS&X-Amz-Signature=7c64bbbb705fe627a2e1e174e8784bf59b5cf8601d3383421fbf2b697db18bff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JHUAADB%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICC2IiZ2%2FKR2%2FYQ3NMditi%2FQVcqKk3InXsGsTL3MTqlaAiEAwYs5IbboA2%2Bho2aSFAuPaeAIWMbTf%2Bit07PSJVRDqB4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKBj3XZ4GU9QLQcAoircAzOexwTvdjcZkqO0uB0BfkLmZJfML7J7ni31zU4IgQEcFGVljwP7CP9X%2Bf4xOYUwNMZ08XrlLvE4OTNQJEKmYG4hC6OdAV%2FV%2Bgp85JO5XSoSUQ3Q%2FnoezWlVNY4k2khvovvb6Mb6SYahdT0pTeLzv84suZvBLoU7A4dNGEToHeo0M%2FICpUUIiHfRBwYOjAFZxBlSpcb39pR3C9WkVytZbtqJWyHTnuGWcl6206426UwYnWvBrA9wZ%2FFdVq%2FIqL3UdgmkM2Z%2F3Z7oYO5E4hewxpTpIg%2FdKxS%2BFsA9TMR7Gi7VIJdPB12QLQ8kB9ekqVT9behgj9XlmDRWI82kLLjbQit8huCH8Ht2ZF7Y44PSHIs9UZ5Tlr31X6FbefoESi%2FSwdXHpmQLd9bfhUUzu999HoyPJOLqjoiWdCqoIF3JsGrxF%2B5PpHAUSQkE9ZslL%2FhaSeLAq3yBuwfABY0mz%2BjocL6BxlNxAc%2BVYuCsUUnim4b1qWtauCEEED0o0p1kGBziFgVsZC1Jt5b9vfRdbRX1e0sz0ky8aOF7OZbRQ0Fwvi8sJnc1lE0%2BqMRgNNZlxoNV60GVhuz5CXYAIWf7HcoJmYvjlDJdVQkaXVivdf1ph5F3w8SwiV1x3h50DWmVMNCn5c8GOqUBbYBkZG8Rs3Xtc0h6py9pi3C3peIwrcGx5s5iG3fZ%2BZ2suNXqomCHidrySQCma3AgMtZPD1U3lJFgfYNA2pbg5bzOiV8d1npiKKgGZAUXOMNyuHsuScrOUJKP75m02BTTKTP%2B0RmdeWQp23Vf6d%2F465lSDuGIdB9eMV92Du8h1fMuoJm6FrB%2F46LKqonmN8dUWAAxMTjtFI%2Bd36FeO3LVKhUSQK48&X-Amz-Signature=3c7ce505d490174e18f358a926478dcfeb9ca3877edb4c562b22e1120563b7a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JHUAADB%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICC2IiZ2%2FKR2%2FYQ3NMditi%2FQVcqKk3InXsGsTL3MTqlaAiEAwYs5IbboA2%2Bho2aSFAuPaeAIWMbTf%2Bit07PSJVRDqB4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKBj3XZ4GU9QLQcAoircAzOexwTvdjcZkqO0uB0BfkLmZJfML7J7ni31zU4IgQEcFGVljwP7CP9X%2Bf4xOYUwNMZ08XrlLvE4OTNQJEKmYG4hC6OdAV%2FV%2Bgp85JO5XSoSUQ3Q%2FnoezWlVNY4k2khvovvb6Mb6SYahdT0pTeLzv84suZvBLoU7A4dNGEToHeo0M%2FICpUUIiHfRBwYOjAFZxBlSpcb39pR3C9WkVytZbtqJWyHTnuGWcl6206426UwYnWvBrA9wZ%2FFdVq%2FIqL3UdgmkM2Z%2F3Z7oYO5E4hewxpTpIg%2FdKxS%2BFsA9TMR7Gi7VIJdPB12QLQ8kB9ekqVT9behgj9XlmDRWI82kLLjbQit8huCH8Ht2ZF7Y44PSHIs9UZ5Tlr31X6FbefoESi%2FSwdXHpmQLd9bfhUUzu999HoyPJOLqjoiWdCqoIF3JsGrxF%2B5PpHAUSQkE9ZslL%2FhaSeLAq3yBuwfABY0mz%2BjocL6BxlNxAc%2BVYuCsUUnim4b1qWtauCEEED0o0p1kGBziFgVsZC1Jt5b9vfRdbRX1e0sz0ky8aOF7OZbRQ0Fwvi8sJnc1lE0%2BqMRgNNZlxoNV60GVhuz5CXYAIWf7HcoJmYvjlDJdVQkaXVivdf1ph5F3w8SwiV1x3h50DWmVMNCn5c8GOqUBbYBkZG8Rs3Xtc0h6py9pi3C3peIwrcGx5s5iG3fZ%2BZ2suNXqomCHidrySQCma3AgMtZPD1U3lJFgfYNA2pbg5bzOiV8d1npiKKgGZAUXOMNyuHsuScrOUJKP75m02BTTKTP%2B0RmdeWQp23Vf6d%2F465lSDuGIdB9eMV92Du8h1fMuoJm6FrB%2F46LKqonmN8dUWAAxMTjtFI%2Bd36FeO3LVKhUSQK48&X-Amz-Signature=83e942200e496674f76244af6413ef18afb3f0da719f60feb1c14871390fecb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JHUAADB%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICC2IiZ2%2FKR2%2FYQ3NMditi%2FQVcqKk3InXsGsTL3MTqlaAiEAwYs5IbboA2%2Bho2aSFAuPaeAIWMbTf%2Bit07PSJVRDqB4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKBj3XZ4GU9QLQcAoircAzOexwTvdjcZkqO0uB0BfkLmZJfML7J7ni31zU4IgQEcFGVljwP7CP9X%2Bf4xOYUwNMZ08XrlLvE4OTNQJEKmYG4hC6OdAV%2FV%2Bgp85JO5XSoSUQ3Q%2FnoezWlVNY4k2khvovvb6Mb6SYahdT0pTeLzv84suZvBLoU7A4dNGEToHeo0M%2FICpUUIiHfRBwYOjAFZxBlSpcb39pR3C9WkVytZbtqJWyHTnuGWcl6206426UwYnWvBrA9wZ%2FFdVq%2FIqL3UdgmkM2Z%2F3Z7oYO5E4hewxpTpIg%2FdKxS%2BFsA9TMR7Gi7VIJdPB12QLQ8kB9ekqVT9behgj9XlmDRWI82kLLjbQit8huCH8Ht2ZF7Y44PSHIs9UZ5Tlr31X6FbefoESi%2FSwdXHpmQLd9bfhUUzu999HoyPJOLqjoiWdCqoIF3JsGrxF%2B5PpHAUSQkE9ZslL%2FhaSeLAq3yBuwfABY0mz%2BjocL6BxlNxAc%2BVYuCsUUnim4b1qWtauCEEED0o0p1kGBziFgVsZC1Jt5b9vfRdbRX1e0sz0ky8aOF7OZbRQ0Fwvi8sJnc1lE0%2BqMRgNNZlxoNV60GVhuz5CXYAIWf7HcoJmYvjlDJdVQkaXVivdf1ph5F3w8SwiV1x3h50DWmVMNCn5c8GOqUBbYBkZG8Rs3Xtc0h6py9pi3C3peIwrcGx5s5iG3fZ%2BZ2suNXqomCHidrySQCma3AgMtZPD1U3lJFgfYNA2pbg5bzOiV8d1npiKKgGZAUXOMNyuHsuScrOUJKP75m02BTTKTP%2B0RmdeWQp23Vf6d%2F465lSDuGIdB9eMV92Du8h1fMuoJm6FrB%2F46LKqonmN8dUWAAxMTjtFI%2Bd36FeO3LVKhUSQK48&X-Amz-Signature=fc964fe63c2c765731abc0cb9f3832b61e8716026d54688f5755baaf30a77349&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JHUAADB%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICC2IiZ2%2FKR2%2FYQ3NMditi%2FQVcqKk3InXsGsTL3MTqlaAiEAwYs5IbboA2%2Bho2aSFAuPaeAIWMbTf%2Bit07PSJVRDqB4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKBj3XZ4GU9QLQcAoircAzOexwTvdjcZkqO0uB0BfkLmZJfML7J7ni31zU4IgQEcFGVljwP7CP9X%2Bf4xOYUwNMZ08XrlLvE4OTNQJEKmYG4hC6OdAV%2FV%2Bgp85JO5XSoSUQ3Q%2FnoezWlVNY4k2khvovvb6Mb6SYahdT0pTeLzv84suZvBLoU7A4dNGEToHeo0M%2FICpUUIiHfRBwYOjAFZxBlSpcb39pR3C9WkVytZbtqJWyHTnuGWcl6206426UwYnWvBrA9wZ%2FFdVq%2FIqL3UdgmkM2Z%2F3Z7oYO5E4hewxpTpIg%2FdKxS%2BFsA9TMR7Gi7VIJdPB12QLQ8kB9ekqVT9behgj9XlmDRWI82kLLjbQit8huCH8Ht2ZF7Y44PSHIs9UZ5Tlr31X6FbefoESi%2FSwdXHpmQLd9bfhUUzu999HoyPJOLqjoiWdCqoIF3JsGrxF%2B5PpHAUSQkE9ZslL%2FhaSeLAq3yBuwfABY0mz%2BjocL6BxlNxAc%2BVYuCsUUnim4b1qWtauCEEED0o0p1kGBziFgVsZC1Jt5b9vfRdbRX1e0sz0ky8aOF7OZbRQ0Fwvi8sJnc1lE0%2BqMRgNNZlxoNV60GVhuz5CXYAIWf7HcoJmYvjlDJdVQkaXVivdf1ph5F3w8SwiV1x3h50DWmVMNCn5c8GOqUBbYBkZG8Rs3Xtc0h6py9pi3C3peIwrcGx5s5iG3fZ%2BZ2suNXqomCHidrySQCma3AgMtZPD1U3lJFgfYNA2pbg5bzOiV8d1npiKKgGZAUXOMNyuHsuScrOUJKP75m02BTTKTP%2B0RmdeWQp23Vf6d%2F465lSDuGIdB9eMV92Du8h1fMuoJm6FrB%2F46LKqonmN8dUWAAxMTjtFI%2Bd36FeO3LVKhUSQK48&X-Amz-Signature=726860398170e27656b7ca6901244ffeee49a6d38d654a70e90ab67220075746&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JHUAADB%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICC2IiZ2%2FKR2%2FYQ3NMditi%2FQVcqKk3InXsGsTL3MTqlaAiEAwYs5IbboA2%2Bho2aSFAuPaeAIWMbTf%2Bit07PSJVRDqB4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKBj3XZ4GU9QLQcAoircAzOexwTvdjcZkqO0uB0BfkLmZJfML7J7ni31zU4IgQEcFGVljwP7CP9X%2Bf4xOYUwNMZ08XrlLvE4OTNQJEKmYG4hC6OdAV%2FV%2Bgp85JO5XSoSUQ3Q%2FnoezWlVNY4k2khvovvb6Mb6SYahdT0pTeLzv84suZvBLoU7A4dNGEToHeo0M%2FICpUUIiHfRBwYOjAFZxBlSpcb39pR3C9WkVytZbtqJWyHTnuGWcl6206426UwYnWvBrA9wZ%2FFdVq%2FIqL3UdgmkM2Z%2F3Z7oYO5E4hewxpTpIg%2FdKxS%2BFsA9TMR7Gi7VIJdPB12QLQ8kB9ekqVT9behgj9XlmDRWI82kLLjbQit8huCH8Ht2ZF7Y44PSHIs9UZ5Tlr31X6FbefoESi%2FSwdXHpmQLd9bfhUUzu999HoyPJOLqjoiWdCqoIF3JsGrxF%2B5PpHAUSQkE9ZslL%2FhaSeLAq3yBuwfABY0mz%2BjocL6BxlNxAc%2BVYuCsUUnim4b1qWtauCEEED0o0p1kGBziFgVsZC1Jt5b9vfRdbRX1e0sz0ky8aOF7OZbRQ0Fwvi8sJnc1lE0%2BqMRgNNZlxoNV60GVhuz5CXYAIWf7HcoJmYvjlDJdVQkaXVivdf1ph5F3w8SwiV1x3h50DWmVMNCn5c8GOqUBbYBkZG8Rs3Xtc0h6py9pi3C3peIwrcGx5s5iG3fZ%2BZ2suNXqomCHidrySQCma3AgMtZPD1U3lJFgfYNA2pbg5bzOiV8d1npiKKgGZAUXOMNyuHsuScrOUJKP75m02BTTKTP%2B0RmdeWQp23Vf6d%2F465lSDuGIdB9eMV92Du8h1fMuoJm6FrB%2F46LKqonmN8dUWAAxMTjtFI%2Bd36FeO3LVKhUSQK48&X-Amz-Signature=25fbd7764ff791c8337b798f8adb49ca6053692eee3e73cdd92ad18b58e04e5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JHUAADB%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICC2IiZ2%2FKR2%2FYQ3NMditi%2FQVcqKk3InXsGsTL3MTqlaAiEAwYs5IbboA2%2Bho2aSFAuPaeAIWMbTf%2Bit07PSJVRDqB4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKBj3XZ4GU9QLQcAoircAzOexwTvdjcZkqO0uB0BfkLmZJfML7J7ni31zU4IgQEcFGVljwP7CP9X%2Bf4xOYUwNMZ08XrlLvE4OTNQJEKmYG4hC6OdAV%2FV%2Bgp85JO5XSoSUQ3Q%2FnoezWlVNY4k2khvovvb6Mb6SYahdT0pTeLzv84suZvBLoU7A4dNGEToHeo0M%2FICpUUIiHfRBwYOjAFZxBlSpcb39pR3C9WkVytZbtqJWyHTnuGWcl6206426UwYnWvBrA9wZ%2FFdVq%2FIqL3UdgmkM2Z%2F3Z7oYO5E4hewxpTpIg%2FdKxS%2BFsA9TMR7Gi7VIJdPB12QLQ8kB9ekqVT9behgj9XlmDRWI82kLLjbQit8huCH8Ht2ZF7Y44PSHIs9UZ5Tlr31X6FbefoESi%2FSwdXHpmQLd9bfhUUzu999HoyPJOLqjoiWdCqoIF3JsGrxF%2B5PpHAUSQkE9ZslL%2FhaSeLAq3yBuwfABY0mz%2BjocL6BxlNxAc%2BVYuCsUUnim4b1qWtauCEEED0o0p1kGBziFgVsZC1Jt5b9vfRdbRX1e0sz0ky8aOF7OZbRQ0Fwvi8sJnc1lE0%2BqMRgNNZlxoNV60GVhuz5CXYAIWf7HcoJmYvjlDJdVQkaXVivdf1ph5F3w8SwiV1x3h50DWmVMNCn5c8GOqUBbYBkZG8Rs3Xtc0h6py9pi3C3peIwrcGx5s5iG3fZ%2BZ2suNXqomCHidrySQCma3AgMtZPD1U3lJFgfYNA2pbg5bzOiV8d1npiKKgGZAUXOMNyuHsuScrOUJKP75m02BTTKTP%2B0RmdeWQp23Vf6d%2F465lSDuGIdB9eMV92Du8h1fMuoJm6FrB%2F46LKqonmN8dUWAAxMTjtFI%2Bd36FeO3LVKhUSQK48&X-Amz-Signature=1eaea52425ef59bc9648d8ee98615c63a9b76eaf12fd69262e96f927a900befa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JHUAADB%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICC2IiZ2%2FKR2%2FYQ3NMditi%2FQVcqKk3InXsGsTL3MTqlaAiEAwYs5IbboA2%2Bho2aSFAuPaeAIWMbTf%2Bit07PSJVRDqB4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKBj3XZ4GU9QLQcAoircAzOexwTvdjcZkqO0uB0BfkLmZJfML7J7ni31zU4IgQEcFGVljwP7CP9X%2Bf4xOYUwNMZ08XrlLvE4OTNQJEKmYG4hC6OdAV%2FV%2Bgp85JO5XSoSUQ3Q%2FnoezWlVNY4k2khvovvb6Mb6SYahdT0pTeLzv84suZvBLoU7A4dNGEToHeo0M%2FICpUUIiHfRBwYOjAFZxBlSpcb39pR3C9WkVytZbtqJWyHTnuGWcl6206426UwYnWvBrA9wZ%2FFdVq%2FIqL3UdgmkM2Z%2F3Z7oYO5E4hewxpTpIg%2FdKxS%2BFsA9TMR7Gi7VIJdPB12QLQ8kB9ekqVT9behgj9XlmDRWI82kLLjbQit8huCH8Ht2ZF7Y44PSHIs9UZ5Tlr31X6FbefoESi%2FSwdXHpmQLd9bfhUUzu999HoyPJOLqjoiWdCqoIF3JsGrxF%2B5PpHAUSQkE9ZslL%2FhaSeLAq3yBuwfABY0mz%2BjocL6BxlNxAc%2BVYuCsUUnim4b1qWtauCEEED0o0p1kGBziFgVsZC1Jt5b9vfRdbRX1e0sz0ky8aOF7OZbRQ0Fwvi8sJnc1lE0%2BqMRgNNZlxoNV60GVhuz5CXYAIWf7HcoJmYvjlDJdVQkaXVivdf1ph5F3w8SwiV1x3h50DWmVMNCn5c8GOqUBbYBkZG8Rs3Xtc0h6py9pi3C3peIwrcGx5s5iG3fZ%2BZ2suNXqomCHidrySQCma3AgMtZPD1U3lJFgfYNA2pbg5bzOiV8d1npiKKgGZAUXOMNyuHsuScrOUJKP75m02BTTKTP%2B0RmdeWQp23Vf6d%2F465lSDuGIdB9eMV92Du8h1fMuoJm6FrB%2F46LKqonmN8dUWAAxMTjtFI%2Bd36FeO3LVKhUSQK48&X-Amz-Signature=9be702d3c675719aaea630e74ebf050583c578bbce6104d41ba3cef0a1e4512e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JHUAADB%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICC2IiZ2%2FKR2%2FYQ3NMditi%2FQVcqKk3InXsGsTL3MTqlaAiEAwYs5IbboA2%2Bho2aSFAuPaeAIWMbTf%2Bit07PSJVRDqB4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKBj3XZ4GU9QLQcAoircAzOexwTvdjcZkqO0uB0BfkLmZJfML7J7ni31zU4IgQEcFGVljwP7CP9X%2Bf4xOYUwNMZ08XrlLvE4OTNQJEKmYG4hC6OdAV%2FV%2Bgp85JO5XSoSUQ3Q%2FnoezWlVNY4k2khvovvb6Mb6SYahdT0pTeLzv84suZvBLoU7A4dNGEToHeo0M%2FICpUUIiHfRBwYOjAFZxBlSpcb39pR3C9WkVytZbtqJWyHTnuGWcl6206426UwYnWvBrA9wZ%2FFdVq%2FIqL3UdgmkM2Z%2F3Z7oYO5E4hewxpTpIg%2FdKxS%2BFsA9TMR7Gi7VIJdPB12QLQ8kB9ekqVT9behgj9XlmDRWI82kLLjbQit8huCH8Ht2ZF7Y44PSHIs9UZ5Tlr31X6FbefoESi%2FSwdXHpmQLd9bfhUUzu999HoyPJOLqjoiWdCqoIF3JsGrxF%2B5PpHAUSQkE9ZslL%2FhaSeLAq3yBuwfABY0mz%2BjocL6BxlNxAc%2BVYuCsUUnim4b1qWtauCEEED0o0p1kGBziFgVsZC1Jt5b9vfRdbRX1e0sz0ky8aOF7OZbRQ0Fwvi8sJnc1lE0%2BqMRgNNZlxoNV60GVhuz5CXYAIWf7HcoJmYvjlDJdVQkaXVivdf1ph5F3w8SwiV1x3h50DWmVMNCn5c8GOqUBbYBkZG8Rs3Xtc0h6py9pi3C3peIwrcGx5s5iG3fZ%2BZ2suNXqomCHidrySQCma3AgMtZPD1U3lJFgfYNA2pbg5bzOiV8d1npiKKgGZAUXOMNyuHsuScrOUJKP75m02BTTKTP%2B0RmdeWQp23Vf6d%2F465lSDuGIdB9eMV92Du8h1fMuoJm6FrB%2F46LKqonmN8dUWAAxMTjtFI%2Bd36FeO3LVKhUSQK48&X-Amz-Signature=efa190852d1a8ce97e3860e62280e160b586165baff005c5d3124c7221a12344&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JHUAADB%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICC2IiZ2%2FKR2%2FYQ3NMditi%2FQVcqKk3InXsGsTL3MTqlaAiEAwYs5IbboA2%2Bho2aSFAuPaeAIWMbTf%2Bit07PSJVRDqB4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKBj3XZ4GU9QLQcAoircAzOexwTvdjcZkqO0uB0BfkLmZJfML7J7ni31zU4IgQEcFGVljwP7CP9X%2Bf4xOYUwNMZ08XrlLvE4OTNQJEKmYG4hC6OdAV%2FV%2Bgp85JO5XSoSUQ3Q%2FnoezWlVNY4k2khvovvb6Mb6SYahdT0pTeLzv84suZvBLoU7A4dNGEToHeo0M%2FICpUUIiHfRBwYOjAFZxBlSpcb39pR3C9WkVytZbtqJWyHTnuGWcl6206426UwYnWvBrA9wZ%2FFdVq%2FIqL3UdgmkM2Z%2F3Z7oYO5E4hewxpTpIg%2FdKxS%2BFsA9TMR7Gi7VIJdPB12QLQ8kB9ekqVT9behgj9XlmDRWI82kLLjbQit8huCH8Ht2ZF7Y44PSHIs9UZ5Tlr31X6FbefoESi%2FSwdXHpmQLd9bfhUUzu999HoyPJOLqjoiWdCqoIF3JsGrxF%2B5PpHAUSQkE9ZslL%2FhaSeLAq3yBuwfABY0mz%2BjocL6BxlNxAc%2BVYuCsUUnim4b1qWtauCEEED0o0p1kGBziFgVsZC1Jt5b9vfRdbRX1e0sz0ky8aOF7OZbRQ0Fwvi8sJnc1lE0%2BqMRgNNZlxoNV60GVhuz5CXYAIWf7HcoJmYvjlDJdVQkaXVivdf1ph5F3w8SwiV1x3h50DWmVMNCn5c8GOqUBbYBkZG8Rs3Xtc0h6py9pi3C3peIwrcGx5s5iG3fZ%2BZ2suNXqomCHidrySQCma3AgMtZPD1U3lJFgfYNA2pbg5bzOiV8d1npiKKgGZAUXOMNyuHsuScrOUJKP75m02BTTKTP%2B0RmdeWQp23Vf6d%2F465lSDuGIdB9eMV92Du8h1fMuoJm6FrB%2F46LKqonmN8dUWAAxMTjtFI%2Bd36FeO3LVKhUSQK48&X-Amz-Signature=1c55dbd39ea7320a6894827c14e6e6b03edee15201e805ef4ed8392ad4002147&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JHUAADB%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICC2IiZ2%2FKR2%2FYQ3NMditi%2FQVcqKk3InXsGsTL3MTqlaAiEAwYs5IbboA2%2Bho2aSFAuPaeAIWMbTf%2Bit07PSJVRDqB4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKBj3XZ4GU9QLQcAoircAzOexwTvdjcZkqO0uB0BfkLmZJfML7J7ni31zU4IgQEcFGVljwP7CP9X%2Bf4xOYUwNMZ08XrlLvE4OTNQJEKmYG4hC6OdAV%2FV%2Bgp85JO5XSoSUQ3Q%2FnoezWlVNY4k2khvovvb6Mb6SYahdT0pTeLzv84suZvBLoU7A4dNGEToHeo0M%2FICpUUIiHfRBwYOjAFZxBlSpcb39pR3C9WkVytZbtqJWyHTnuGWcl6206426UwYnWvBrA9wZ%2FFdVq%2FIqL3UdgmkM2Z%2F3Z7oYO5E4hewxpTpIg%2FdKxS%2BFsA9TMR7Gi7VIJdPB12QLQ8kB9ekqVT9behgj9XlmDRWI82kLLjbQit8huCH8Ht2ZF7Y44PSHIs9UZ5Tlr31X6FbefoESi%2FSwdXHpmQLd9bfhUUzu999HoyPJOLqjoiWdCqoIF3JsGrxF%2B5PpHAUSQkE9ZslL%2FhaSeLAq3yBuwfABY0mz%2BjocL6BxlNxAc%2BVYuCsUUnim4b1qWtauCEEED0o0p1kGBziFgVsZC1Jt5b9vfRdbRX1e0sz0ky8aOF7OZbRQ0Fwvi8sJnc1lE0%2BqMRgNNZlxoNV60GVhuz5CXYAIWf7HcoJmYvjlDJdVQkaXVivdf1ph5F3w8SwiV1x3h50DWmVMNCn5c8GOqUBbYBkZG8Rs3Xtc0h6py9pi3C3peIwrcGx5s5iG3fZ%2BZ2suNXqomCHidrySQCma3AgMtZPD1U3lJFgfYNA2pbg5bzOiV8d1npiKKgGZAUXOMNyuHsuScrOUJKP75m02BTTKTP%2B0RmdeWQp23Vf6d%2F465lSDuGIdB9eMV92Du8h1fMuoJm6FrB%2F46LKqonmN8dUWAAxMTjtFI%2Bd36FeO3LVKhUSQK48&X-Amz-Signature=726860398170e27656b7ca6901244ffeee49a6d38d654a70e90ab67220075746&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
