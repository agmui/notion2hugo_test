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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZKG22TI%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIAbf0HVI1Mt1IuK9vDKDrzSfoQRoF2vLH6IiUvBjGo9uAiEA0yqE7MeM7tDldTlJpFjRlYAuq924BVJkTqpyXl9KAdkq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDL7QVSLiIqi1QC4qASrcAz1IBZCXkZpACawlyJmxNHmCEuvdjWm1189owSb0n3%2Feapt0jz5CgltnBZGvBmwkLIYymsIpMK%2FNqyMyh1AG0BGtPH%2BwDZr4weqW6iQ5RN3p1YzbWYTFjavZikyZaLG4c9jEcdCzdW5GNrFkY0l8%2FHahjnD5PqsgbCpvJq32FgJY8lR9w%2FWVq477xYk5WFUXuRQjuoTI%2FU27fFsI%2Bc955GZyiusna7n4sRDqLlGuzl7OI4B39VK3TDFyqfea5upKLglqWZYwAbPlTz984Xs5kYMa4OFxXQRRe8fj4Sev3bE4%2FlHO2U7g4agaugFAh06HQn5LtQxmUgIoMbXoHpISNE5hHqFQC3CXbqd3%2B5LivvBImJMyAkc8FR8T56qdNHwzYVa1bgNENMyXNzrwx%2BbcxpbKM%2FzyBmGI31VHLD2mjPnryah7MG9I3WOJHqbDJKn9JtyXv%2FDboy5LasPTQbMhO%2BE%2FnH2X%2BH4hoyyz8grGUOkBlnNj%2B%2FOIFZZR9DWNMPqU%2BZigpGHs6Uz5NSMXOVHg60GwGee5rjr32aWzPU7avtULyscppsdsuJYFiULlenPIWVltlMmOZivME2L22EblODzkECxLzmaMT9HgznB4ZTlPwaG0Rm5FrPljJYeaMKTu%2B8QGOqUBG6APuRw2pabqZaRg4TfDIO%2FuLRiNPY64ohMvxmS20pPLpXX5NpCzNOD9ffBN9LWoc0Thr7JQ53QxwA5AJzuZxQIEVm5%2FefWkMNquI0BrbCdXmLr%2FG01nKoBvIBPAsSz2oB1BLVZul4C5BF8%2B%2Fvg2iz3ONhfPz7eVQwehuidPRpRtkqSXNQB20l7pmB1rpiOpxUJaCxSYt2KXG86ucAhM3Q1lHqN%2F&X-Amz-Signature=d9e60b535e4b49eda53f93dbb4da682dc42dad501114c4d86a6d44419120819c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKZW3STK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDfNx0tZ7qCpMyxxVgvkxA%2Bav463UmrZDpZhD5Rp4jBhAIhAKehkhXbl0cbyLQ6StzkKaxBk1umsKNw76jHUBr3CBeqKv8DCFoQABoMNjM3NDIzMTgzODA1Igzp8h323wGEthN0uFAq3AMZovBIqMdr8o5t3iVh%2FL9iyQTiXlrt2kGVDrRrDyybS7UzZuzjfpOkALhv6O0U3uV2f98arD%2FniYkYG5f38xo%2BsKttZ3g7yqp0AMQHIh8xD0CMmwmQ1xpwlDGVDcQgg9j34eeeNagK1OQRwaE%2BFlQf215kBVeMwIt4Ns4AySZN6McXWu8PYyVN3b7QxFBYd8hKmxEUhS1bKpMvGFyKbg7V1EfiyBORdljCXQ9zhm9%2F72GzQZfFu2WxzXmbPJMTaB2j2RQhhfQ%2FdSWgBw1ggcE9qddKmc6K2WSVRt%2FechcUwE11%2Fo9bCh2%2FUFUOTV6yHpcm4RvIlcVWkMSqDLwVg5I7Q78q4N2g6GoLEOl4sEmgiOAJz7mdgXArbQq3z%2BQXUFYkUFJnA4MCteTcWMBsVYJHeUna9xZE72MdMtvWfzQ11%2BryEqj6pVT022ty%2FPlCoGy8FrRxExonkHegyhUaECkEL1OuZFuMg0pIHC9NJtVASeQGIWJgDArSMf6yOSAxEKUgPgrFCi3%2F7VbUsLL7CjsiaEKMDj3u32TK4BT%2BQKzDVES0HdXN3%2FHyQCvp8fUNIe0F3812PrxON5QpAU%2FJ2sRGtYOix07ntEEg9NdPKeq0MNDVbPmHnp3sKG4viDCS7vvEBjqkAVGbttXAh7JJumWjREeHsR9nONC7AmH5FEt5zrQYQjN%2Bb9CKLFTHBPmc%2FyAMzIIcpG%2FsnN8%2B3vDVO4Ibfw1FaXrUooar5bAytpNN3cbS48eE7hT08lW3PNeVUNwhImUqhEiF2J55%2BFlS9lumhMaNsZn9rESjQvTgHmguf2YpmmzbofD3gSa%2F7%2Bh9c3lGy8%2BIyGCXQiw2Xq7VNW2AN1ogWsHTUmxt&X-Amz-Signature=3c1445741aac4c9f537d34b53f4e8701701aae5cc236d703df191b43418e065d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKZW3STK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDfNx0tZ7qCpMyxxVgvkxA%2Bav463UmrZDpZhD5Rp4jBhAIhAKehkhXbl0cbyLQ6StzkKaxBk1umsKNw76jHUBr3CBeqKv8DCFoQABoMNjM3NDIzMTgzODA1Igzp8h323wGEthN0uFAq3AMZovBIqMdr8o5t3iVh%2FL9iyQTiXlrt2kGVDrRrDyybS7UzZuzjfpOkALhv6O0U3uV2f98arD%2FniYkYG5f38xo%2BsKttZ3g7yqp0AMQHIh8xD0CMmwmQ1xpwlDGVDcQgg9j34eeeNagK1OQRwaE%2BFlQf215kBVeMwIt4Ns4AySZN6McXWu8PYyVN3b7QxFBYd8hKmxEUhS1bKpMvGFyKbg7V1EfiyBORdljCXQ9zhm9%2F72GzQZfFu2WxzXmbPJMTaB2j2RQhhfQ%2FdSWgBw1ggcE9qddKmc6K2WSVRt%2FechcUwE11%2Fo9bCh2%2FUFUOTV6yHpcm4RvIlcVWkMSqDLwVg5I7Q78q4N2g6GoLEOl4sEmgiOAJz7mdgXArbQq3z%2BQXUFYkUFJnA4MCteTcWMBsVYJHeUna9xZE72MdMtvWfzQ11%2BryEqj6pVT022ty%2FPlCoGy8FrRxExonkHegyhUaECkEL1OuZFuMg0pIHC9NJtVASeQGIWJgDArSMf6yOSAxEKUgPgrFCi3%2F7VbUsLL7CjsiaEKMDj3u32TK4BT%2BQKzDVES0HdXN3%2FHyQCvp8fUNIe0F3812PrxON5QpAU%2FJ2sRGtYOix07ntEEg9NdPKeq0MNDVbPmHnp3sKG4viDCS7vvEBjqkAVGbttXAh7JJumWjREeHsR9nONC7AmH5FEt5zrQYQjN%2Bb9CKLFTHBPmc%2FyAMzIIcpG%2FsnN8%2B3vDVO4Ibfw1FaXrUooar5bAytpNN3cbS48eE7hT08lW3PNeVUNwhImUqhEiF2J55%2BFlS9lumhMaNsZn9rESjQvTgHmguf2YpmmzbofD3gSa%2F7%2Bh9c3lGy8%2BIyGCXQiw2Xq7VNW2AN1ogWsHTUmxt&X-Amz-Signature=827e1e29fac76e208dc2c214d7b6f2617435bc868f62976456b7bc245a0e15b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKZW3STK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDfNx0tZ7qCpMyxxVgvkxA%2Bav463UmrZDpZhD5Rp4jBhAIhAKehkhXbl0cbyLQ6StzkKaxBk1umsKNw76jHUBr3CBeqKv8DCFoQABoMNjM3NDIzMTgzODA1Igzp8h323wGEthN0uFAq3AMZovBIqMdr8o5t3iVh%2FL9iyQTiXlrt2kGVDrRrDyybS7UzZuzjfpOkALhv6O0U3uV2f98arD%2FniYkYG5f38xo%2BsKttZ3g7yqp0AMQHIh8xD0CMmwmQ1xpwlDGVDcQgg9j34eeeNagK1OQRwaE%2BFlQf215kBVeMwIt4Ns4AySZN6McXWu8PYyVN3b7QxFBYd8hKmxEUhS1bKpMvGFyKbg7V1EfiyBORdljCXQ9zhm9%2F72GzQZfFu2WxzXmbPJMTaB2j2RQhhfQ%2FdSWgBw1ggcE9qddKmc6K2WSVRt%2FechcUwE11%2Fo9bCh2%2FUFUOTV6yHpcm4RvIlcVWkMSqDLwVg5I7Q78q4N2g6GoLEOl4sEmgiOAJz7mdgXArbQq3z%2BQXUFYkUFJnA4MCteTcWMBsVYJHeUna9xZE72MdMtvWfzQ11%2BryEqj6pVT022ty%2FPlCoGy8FrRxExonkHegyhUaECkEL1OuZFuMg0pIHC9NJtVASeQGIWJgDArSMf6yOSAxEKUgPgrFCi3%2F7VbUsLL7CjsiaEKMDj3u32TK4BT%2BQKzDVES0HdXN3%2FHyQCvp8fUNIe0F3812PrxON5QpAU%2FJ2sRGtYOix07ntEEg9NdPKeq0MNDVbPmHnp3sKG4viDCS7vvEBjqkAVGbttXAh7JJumWjREeHsR9nONC7AmH5FEt5zrQYQjN%2Bb9CKLFTHBPmc%2FyAMzIIcpG%2FsnN8%2B3vDVO4Ibfw1FaXrUooar5bAytpNN3cbS48eE7hT08lW3PNeVUNwhImUqhEiF2J55%2BFlS9lumhMaNsZn9rESjQvTgHmguf2YpmmzbofD3gSa%2F7%2Bh9c3lGy8%2BIyGCXQiw2Xq7VNW2AN1ogWsHTUmxt&X-Amz-Signature=593490be4ca76e7dfbb652a2d1953f7ab8014602117195650b6654595b48c703&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKZW3STK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDfNx0tZ7qCpMyxxVgvkxA%2Bav463UmrZDpZhD5Rp4jBhAIhAKehkhXbl0cbyLQ6StzkKaxBk1umsKNw76jHUBr3CBeqKv8DCFoQABoMNjM3NDIzMTgzODA1Igzp8h323wGEthN0uFAq3AMZovBIqMdr8o5t3iVh%2FL9iyQTiXlrt2kGVDrRrDyybS7UzZuzjfpOkALhv6O0U3uV2f98arD%2FniYkYG5f38xo%2BsKttZ3g7yqp0AMQHIh8xD0CMmwmQ1xpwlDGVDcQgg9j34eeeNagK1OQRwaE%2BFlQf215kBVeMwIt4Ns4AySZN6McXWu8PYyVN3b7QxFBYd8hKmxEUhS1bKpMvGFyKbg7V1EfiyBORdljCXQ9zhm9%2F72GzQZfFu2WxzXmbPJMTaB2j2RQhhfQ%2FdSWgBw1ggcE9qddKmc6K2WSVRt%2FechcUwE11%2Fo9bCh2%2FUFUOTV6yHpcm4RvIlcVWkMSqDLwVg5I7Q78q4N2g6GoLEOl4sEmgiOAJz7mdgXArbQq3z%2BQXUFYkUFJnA4MCteTcWMBsVYJHeUna9xZE72MdMtvWfzQ11%2BryEqj6pVT022ty%2FPlCoGy8FrRxExonkHegyhUaECkEL1OuZFuMg0pIHC9NJtVASeQGIWJgDArSMf6yOSAxEKUgPgrFCi3%2F7VbUsLL7CjsiaEKMDj3u32TK4BT%2BQKzDVES0HdXN3%2FHyQCvp8fUNIe0F3812PrxON5QpAU%2FJ2sRGtYOix07ntEEg9NdPKeq0MNDVbPmHnp3sKG4viDCS7vvEBjqkAVGbttXAh7JJumWjREeHsR9nONC7AmH5FEt5zrQYQjN%2Bb9CKLFTHBPmc%2FyAMzIIcpG%2FsnN8%2B3vDVO4Ibfw1FaXrUooar5bAytpNN3cbS48eE7hT08lW3PNeVUNwhImUqhEiF2J55%2BFlS9lumhMaNsZn9rESjQvTgHmguf2YpmmzbofD3gSa%2F7%2Bh9c3lGy8%2BIyGCXQiw2Xq7VNW2AN1ogWsHTUmxt&X-Amz-Signature=190a834fcb67a8fe1b77d4e222f77c5e9572411c843e3e2972a688e6b6b70dee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKZW3STK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDfNx0tZ7qCpMyxxVgvkxA%2Bav463UmrZDpZhD5Rp4jBhAIhAKehkhXbl0cbyLQ6StzkKaxBk1umsKNw76jHUBr3CBeqKv8DCFoQABoMNjM3NDIzMTgzODA1Igzp8h323wGEthN0uFAq3AMZovBIqMdr8o5t3iVh%2FL9iyQTiXlrt2kGVDrRrDyybS7UzZuzjfpOkALhv6O0U3uV2f98arD%2FniYkYG5f38xo%2BsKttZ3g7yqp0AMQHIh8xD0CMmwmQ1xpwlDGVDcQgg9j34eeeNagK1OQRwaE%2BFlQf215kBVeMwIt4Ns4AySZN6McXWu8PYyVN3b7QxFBYd8hKmxEUhS1bKpMvGFyKbg7V1EfiyBORdljCXQ9zhm9%2F72GzQZfFu2WxzXmbPJMTaB2j2RQhhfQ%2FdSWgBw1ggcE9qddKmc6K2WSVRt%2FechcUwE11%2Fo9bCh2%2FUFUOTV6yHpcm4RvIlcVWkMSqDLwVg5I7Q78q4N2g6GoLEOl4sEmgiOAJz7mdgXArbQq3z%2BQXUFYkUFJnA4MCteTcWMBsVYJHeUna9xZE72MdMtvWfzQ11%2BryEqj6pVT022ty%2FPlCoGy8FrRxExonkHegyhUaECkEL1OuZFuMg0pIHC9NJtVASeQGIWJgDArSMf6yOSAxEKUgPgrFCi3%2F7VbUsLL7CjsiaEKMDj3u32TK4BT%2BQKzDVES0HdXN3%2FHyQCvp8fUNIe0F3812PrxON5QpAU%2FJ2sRGtYOix07ntEEg9NdPKeq0MNDVbPmHnp3sKG4viDCS7vvEBjqkAVGbttXAh7JJumWjREeHsR9nONC7AmH5FEt5zrQYQjN%2Bb9CKLFTHBPmc%2FyAMzIIcpG%2FsnN8%2B3vDVO4Ibfw1FaXrUooar5bAytpNN3cbS48eE7hT08lW3PNeVUNwhImUqhEiF2J55%2BFlS9lumhMaNsZn9rESjQvTgHmguf2YpmmzbofD3gSa%2F7%2Bh9c3lGy8%2BIyGCXQiw2Xq7VNW2AN1ogWsHTUmxt&X-Amz-Signature=31a73578a064c202feb2862eb79a84157c205c92fa12c9d297029c55949ca03d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKZW3STK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDfNx0tZ7qCpMyxxVgvkxA%2Bav463UmrZDpZhD5Rp4jBhAIhAKehkhXbl0cbyLQ6StzkKaxBk1umsKNw76jHUBr3CBeqKv8DCFoQABoMNjM3NDIzMTgzODA1Igzp8h323wGEthN0uFAq3AMZovBIqMdr8o5t3iVh%2FL9iyQTiXlrt2kGVDrRrDyybS7UzZuzjfpOkALhv6O0U3uV2f98arD%2FniYkYG5f38xo%2BsKttZ3g7yqp0AMQHIh8xD0CMmwmQ1xpwlDGVDcQgg9j34eeeNagK1OQRwaE%2BFlQf215kBVeMwIt4Ns4AySZN6McXWu8PYyVN3b7QxFBYd8hKmxEUhS1bKpMvGFyKbg7V1EfiyBORdljCXQ9zhm9%2F72GzQZfFu2WxzXmbPJMTaB2j2RQhhfQ%2FdSWgBw1ggcE9qddKmc6K2WSVRt%2FechcUwE11%2Fo9bCh2%2FUFUOTV6yHpcm4RvIlcVWkMSqDLwVg5I7Q78q4N2g6GoLEOl4sEmgiOAJz7mdgXArbQq3z%2BQXUFYkUFJnA4MCteTcWMBsVYJHeUna9xZE72MdMtvWfzQ11%2BryEqj6pVT022ty%2FPlCoGy8FrRxExonkHegyhUaECkEL1OuZFuMg0pIHC9NJtVASeQGIWJgDArSMf6yOSAxEKUgPgrFCi3%2F7VbUsLL7CjsiaEKMDj3u32TK4BT%2BQKzDVES0HdXN3%2FHyQCvp8fUNIe0F3812PrxON5QpAU%2FJ2sRGtYOix07ntEEg9NdPKeq0MNDVbPmHnp3sKG4viDCS7vvEBjqkAVGbttXAh7JJumWjREeHsR9nONC7AmH5FEt5zrQYQjN%2Bb9CKLFTHBPmc%2FyAMzIIcpG%2FsnN8%2B3vDVO4Ibfw1FaXrUooar5bAytpNN3cbS48eE7hT08lW3PNeVUNwhImUqhEiF2J55%2BFlS9lumhMaNsZn9rESjQvTgHmguf2YpmmzbofD3gSa%2F7%2Bh9c3lGy8%2BIyGCXQiw2Xq7VNW2AN1ogWsHTUmxt&X-Amz-Signature=7ed947efa80a0d31491d1e887b5e0f7169ac687113526bcf7d72f127ab1d4828&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKZW3STK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDfNx0tZ7qCpMyxxVgvkxA%2Bav463UmrZDpZhD5Rp4jBhAIhAKehkhXbl0cbyLQ6StzkKaxBk1umsKNw76jHUBr3CBeqKv8DCFoQABoMNjM3NDIzMTgzODA1Igzp8h323wGEthN0uFAq3AMZovBIqMdr8o5t3iVh%2FL9iyQTiXlrt2kGVDrRrDyybS7UzZuzjfpOkALhv6O0U3uV2f98arD%2FniYkYG5f38xo%2BsKttZ3g7yqp0AMQHIh8xD0CMmwmQ1xpwlDGVDcQgg9j34eeeNagK1OQRwaE%2BFlQf215kBVeMwIt4Ns4AySZN6McXWu8PYyVN3b7QxFBYd8hKmxEUhS1bKpMvGFyKbg7V1EfiyBORdljCXQ9zhm9%2F72GzQZfFu2WxzXmbPJMTaB2j2RQhhfQ%2FdSWgBw1ggcE9qddKmc6K2WSVRt%2FechcUwE11%2Fo9bCh2%2FUFUOTV6yHpcm4RvIlcVWkMSqDLwVg5I7Q78q4N2g6GoLEOl4sEmgiOAJz7mdgXArbQq3z%2BQXUFYkUFJnA4MCteTcWMBsVYJHeUna9xZE72MdMtvWfzQ11%2BryEqj6pVT022ty%2FPlCoGy8FrRxExonkHegyhUaECkEL1OuZFuMg0pIHC9NJtVASeQGIWJgDArSMf6yOSAxEKUgPgrFCi3%2F7VbUsLL7CjsiaEKMDj3u32TK4BT%2BQKzDVES0HdXN3%2FHyQCvp8fUNIe0F3812PrxON5QpAU%2FJ2sRGtYOix07ntEEg9NdPKeq0MNDVbPmHnp3sKG4viDCS7vvEBjqkAVGbttXAh7JJumWjREeHsR9nONC7AmH5FEt5zrQYQjN%2Bb9CKLFTHBPmc%2FyAMzIIcpG%2FsnN8%2B3vDVO4Ibfw1FaXrUooar5bAytpNN3cbS48eE7hT08lW3PNeVUNwhImUqhEiF2J55%2BFlS9lumhMaNsZn9rESjQvTgHmguf2YpmmzbofD3gSa%2F7%2Bh9c3lGy8%2BIyGCXQiw2Xq7VNW2AN1ogWsHTUmxt&X-Amz-Signature=09032dc90c0572e7cdf70c394006d3d98520aa0733d172fbac8acf6189bdc3ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKZW3STK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDfNx0tZ7qCpMyxxVgvkxA%2Bav463UmrZDpZhD5Rp4jBhAIhAKehkhXbl0cbyLQ6StzkKaxBk1umsKNw76jHUBr3CBeqKv8DCFoQABoMNjM3NDIzMTgzODA1Igzp8h323wGEthN0uFAq3AMZovBIqMdr8o5t3iVh%2FL9iyQTiXlrt2kGVDrRrDyybS7UzZuzjfpOkALhv6O0U3uV2f98arD%2FniYkYG5f38xo%2BsKttZ3g7yqp0AMQHIh8xD0CMmwmQ1xpwlDGVDcQgg9j34eeeNagK1OQRwaE%2BFlQf215kBVeMwIt4Ns4AySZN6McXWu8PYyVN3b7QxFBYd8hKmxEUhS1bKpMvGFyKbg7V1EfiyBORdljCXQ9zhm9%2F72GzQZfFu2WxzXmbPJMTaB2j2RQhhfQ%2FdSWgBw1ggcE9qddKmc6K2WSVRt%2FechcUwE11%2Fo9bCh2%2FUFUOTV6yHpcm4RvIlcVWkMSqDLwVg5I7Q78q4N2g6GoLEOl4sEmgiOAJz7mdgXArbQq3z%2BQXUFYkUFJnA4MCteTcWMBsVYJHeUna9xZE72MdMtvWfzQ11%2BryEqj6pVT022ty%2FPlCoGy8FrRxExonkHegyhUaECkEL1OuZFuMg0pIHC9NJtVASeQGIWJgDArSMf6yOSAxEKUgPgrFCi3%2F7VbUsLL7CjsiaEKMDj3u32TK4BT%2BQKzDVES0HdXN3%2FHyQCvp8fUNIe0F3812PrxON5QpAU%2FJ2sRGtYOix07ntEEg9NdPKeq0MNDVbPmHnp3sKG4viDCS7vvEBjqkAVGbttXAh7JJumWjREeHsR9nONC7AmH5FEt5zrQYQjN%2Bb9CKLFTHBPmc%2FyAMzIIcpG%2FsnN8%2B3vDVO4Ibfw1FaXrUooar5bAytpNN3cbS48eE7hT08lW3PNeVUNwhImUqhEiF2J55%2BFlS9lumhMaNsZn9rESjQvTgHmguf2YpmmzbofD3gSa%2F7%2Bh9c3lGy8%2BIyGCXQiw2Xq7VNW2AN1ogWsHTUmxt&X-Amz-Signature=1c6956c4ecd6e97adb34688c4eaa421b3ae35bb81753389dd3c588691a1f6cb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKZW3STK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDfNx0tZ7qCpMyxxVgvkxA%2Bav463UmrZDpZhD5Rp4jBhAIhAKehkhXbl0cbyLQ6StzkKaxBk1umsKNw76jHUBr3CBeqKv8DCFoQABoMNjM3NDIzMTgzODA1Igzp8h323wGEthN0uFAq3AMZovBIqMdr8o5t3iVh%2FL9iyQTiXlrt2kGVDrRrDyybS7UzZuzjfpOkALhv6O0U3uV2f98arD%2FniYkYG5f38xo%2BsKttZ3g7yqp0AMQHIh8xD0CMmwmQ1xpwlDGVDcQgg9j34eeeNagK1OQRwaE%2BFlQf215kBVeMwIt4Ns4AySZN6McXWu8PYyVN3b7QxFBYd8hKmxEUhS1bKpMvGFyKbg7V1EfiyBORdljCXQ9zhm9%2F72GzQZfFu2WxzXmbPJMTaB2j2RQhhfQ%2FdSWgBw1ggcE9qddKmc6K2WSVRt%2FechcUwE11%2Fo9bCh2%2FUFUOTV6yHpcm4RvIlcVWkMSqDLwVg5I7Q78q4N2g6GoLEOl4sEmgiOAJz7mdgXArbQq3z%2BQXUFYkUFJnA4MCteTcWMBsVYJHeUna9xZE72MdMtvWfzQ11%2BryEqj6pVT022ty%2FPlCoGy8FrRxExonkHegyhUaECkEL1OuZFuMg0pIHC9NJtVASeQGIWJgDArSMf6yOSAxEKUgPgrFCi3%2F7VbUsLL7CjsiaEKMDj3u32TK4BT%2BQKzDVES0HdXN3%2FHyQCvp8fUNIe0F3812PrxON5QpAU%2FJ2sRGtYOix07ntEEg9NdPKeq0MNDVbPmHnp3sKG4viDCS7vvEBjqkAVGbttXAh7JJumWjREeHsR9nONC7AmH5FEt5zrQYQjN%2Bb9CKLFTHBPmc%2FyAMzIIcpG%2FsnN8%2B3vDVO4Ibfw1FaXrUooar5bAytpNN3cbS48eE7hT08lW3PNeVUNwhImUqhEiF2J55%2BFlS9lumhMaNsZn9rESjQvTgHmguf2YpmmzbofD3gSa%2F7%2Bh9c3lGy8%2BIyGCXQiw2Xq7VNW2AN1ogWsHTUmxt&X-Amz-Signature=a3e5b1dd6a22ce7561c5c9e9530f0e173cf0b961c110af2aeacef94121127ce0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKZW3STK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDfNx0tZ7qCpMyxxVgvkxA%2Bav463UmrZDpZhD5Rp4jBhAIhAKehkhXbl0cbyLQ6StzkKaxBk1umsKNw76jHUBr3CBeqKv8DCFoQABoMNjM3NDIzMTgzODA1Igzp8h323wGEthN0uFAq3AMZovBIqMdr8o5t3iVh%2FL9iyQTiXlrt2kGVDrRrDyybS7UzZuzjfpOkALhv6O0U3uV2f98arD%2FniYkYG5f38xo%2BsKttZ3g7yqp0AMQHIh8xD0CMmwmQ1xpwlDGVDcQgg9j34eeeNagK1OQRwaE%2BFlQf215kBVeMwIt4Ns4AySZN6McXWu8PYyVN3b7QxFBYd8hKmxEUhS1bKpMvGFyKbg7V1EfiyBORdljCXQ9zhm9%2F72GzQZfFu2WxzXmbPJMTaB2j2RQhhfQ%2FdSWgBw1ggcE9qddKmc6K2WSVRt%2FechcUwE11%2Fo9bCh2%2FUFUOTV6yHpcm4RvIlcVWkMSqDLwVg5I7Q78q4N2g6GoLEOl4sEmgiOAJz7mdgXArbQq3z%2BQXUFYkUFJnA4MCteTcWMBsVYJHeUna9xZE72MdMtvWfzQ11%2BryEqj6pVT022ty%2FPlCoGy8FrRxExonkHegyhUaECkEL1OuZFuMg0pIHC9NJtVASeQGIWJgDArSMf6yOSAxEKUgPgrFCi3%2F7VbUsLL7CjsiaEKMDj3u32TK4BT%2BQKzDVES0HdXN3%2FHyQCvp8fUNIe0F3812PrxON5QpAU%2FJ2sRGtYOix07ntEEg9NdPKeq0MNDVbPmHnp3sKG4viDCS7vvEBjqkAVGbttXAh7JJumWjREeHsR9nONC7AmH5FEt5zrQYQjN%2Bb9CKLFTHBPmc%2FyAMzIIcpG%2FsnN8%2B3vDVO4Ibfw1FaXrUooar5bAytpNN3cbS48eE7hT08lW3PNeVUNwhImUqhEiF2J55%2BFlS9lumhMaNsZn9rESjQvTgHmguf2YpmmzbofD3gSa%2F7%2Bh9c3lGy8%2BIyGCXQiw2Xq7VNW2AN1ogWsHTUmxt&X-Amz-Signature=335c09033e71acafcfc3c29c000708ea2f716cee1f3839e21fc749172633fd5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
