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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKUBMQ7A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEAZ20abY2Zlpv3KrPJd89WtUYju3N7xQWrczLjzuuYsAiBw55Sm1I0jQHflAuNeZLfR7M0MHsqqxINc0aRDsyxsnSqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKxgZhJCGRVWWByJIKtwD2Bm1%2Bcf9xyxIsII8RoyuHP2hsZwUEDbl6Ll%2FZAbUqpNL0ccGSQ6HE8WV1Uip4v6WpTaLzC0d0FToWCZtcIXRhGi1FEg4xlCnkYIvHBTh2Gvo8%2FRv9Rri4M1HgiJnseas%2BrvlvjFa0W64xp8%2BzGrpM%2ByDSi8gdyalTvy%2FpYQrkMujWdTHzvnK5Zj5iA588%2BEcAibZIQ0e8T2KItoOEkdNo9fjtg6cWfv%2FeVBsXVeYjFuytKqLL%2Fu3UBUI8lu0SXms6s0yseNr87fRQGVwxcfrQgjE%2BzfPAgTYjZ5tLVjDoA1a7r%2BDwIKBooKlF9mhm027hj5CaBwWmOniKyWtM7jydpj1qz8LwiN9hWdj4C21aDvuj%2BU9zqu8uRqAZuNQufAC1cPGsAFoAgsLs9l1MIhR9858Acb4YFLSaHYhO0m5nHH%2BWVuUgGTpJz0bq4gQOnayFc%2BBkvMLVT%2F%2FDisn70gr0iGfQMfps9KJzLiEwZtyrvN%2B5fmXtpr%2BIOiKdCY4lBFjq2LqJ1Xw8L%2FpZlQsXhNl%2BsRZKakhIZCNn0RkH7xZOikszOqohgIu4%2FkLfOSuF42Mq4d85FTcF2NXu%2FJeovgB4E0Xi5CUvCLqOTHbFoc2B%2FJFDYcaW8TUinv3Xhgw%2F7rjxAY6pgEGLrOhZzc9x4r90pXypFhd8vY%2B92dXrvtXBsFvQCpfz7t%2F7aN5RPy%2F1BGq1ua3v3i%2B7mOzRiikDvHs5AY6r9J%2FirxR7jQyONgYHUAm51EU05tRRj%2F%2BW5XbGM8kYNa7VI4mYR56sUnuY2ZRaASc1hOqKyTzKg5ODRY%2FG7c3r67RaXvx9LFoRM%2FrFjadEOIhpDQhW5y8Huud2LOy6X1ahWsvRSG8e%2B69&X-Amz-Signature=6fdb0c91beb8a57f85fc426ba6d8e77b3a87d6d2ac4eeec846f2047985614cf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYUMHBD3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlpdrlFcxsi%2FfVjLoAXzdprN4a63dlbqy6SArwGdKeugIhAMpPdKnr5f0Kh06Ep6FH5lBtbpfRLnrvqagDeDhpqCFFKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx17Iw2xahUg3Jexrgq3APvCNYdCBvmxzTtHMMbZxGO%2FJg8EeBNKw9EDC%2FOmsVjo0QBjfhDKFiba4XHds1wErcBTeOkC0ebBWMseYBQLjB0bLXAsNdhRiNN%2Fv4tu9KURjLHmPYFO0zp1KsczrsF9aGFuhoOx9%2BmxlVZ0V6jIhsElhQc1wIjEBeHxE9qob%2B9TP%2BRY9mPFMw7U%2F%2BJMsSUUlOp2i8UAS4rCMpZy92BTH0ge7yxb2i9q%2BC1j8bKYD1%2Bo2H5hC3H7L0xdtvLsEWVdjUU9EzUMlKNutYZKNbgSY1FS%2B8zUjAP1hWKbEYHsHJdSNA9E%2Fv5EdzjbggSMktfE5cY6R9WOD8FXhQfKCFxDxWfpA0Bq9SZ7TCx8E4caEPlm3E4wv7kmy9YQzNdmM6xMVRHp%2Byf66%2BE7B8nuEsA1cnGUBT3f44fYpKY7KQFLHk5henrDKzHRtqcajHMlQWNC9lmWMAUIPKy9T2iQyMwTsg23LJVzFPbAvXvU6KmuBQLCqJhFfrGMYADx1HqeW2EuswZFnT8m4VgK0QlngP0GZbV%2BIDX8AVaH84%2FDhVG%2FMWfsZRrIK%2BVJWHR%2FzuUYfjG2gx9KrK5My0WmNMQ%2F0txAW3pwsAgu3flBFCDU37uUJzDZOIg0OCxE0XAQyYCpTDauuPEBjqkAYJA6WQTHjSBSHkFNx1jtEc0BoAwApyZvA9lpt%2FhGqs85NC7NqhIMGuAht%2F5xgiY2d%2BJHIzJQtx3%2BxRohLSA%2BXdNTRxnpwOHTLzhGuQP9Vc6Cec5uhXKquAMaa3kr5VsKwAQv7e2cK73Cdx1ZGIjgtTWrPsRy5unkC8a4QENUXd99QgAgHd1kdQP31RvZYh6L5yD5mMMtmVU71Yq5r3VsCYSMJhy&X-Amz-Signature=9f28e29e09b663313f4afbe34227c05824d7f96703f5f1a91fa7348b206e7165&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYUMHBD3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlpdrlFcxsi%2FfVjLoAXzdprN4a63dlbqy6SArwGdKeugIhAMpPdKnr5f0Kh06Ep6FH5lBtbpfRLnrvqagDeDhpqCFFKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx17Iw2xahUg3Jexrgq3APvCNYdCBvmxzTtHMMbZxGO%2FJg8EeBNKw9EDC%2FOmsVjo0QBjfhDKFiba4XHds1wErcBTeOkC0ebBWMseYBQLjB0bLXAsNdhRiNN%2Fv4tu9KURjLHmPYFO0zp1KsczrsF9aGFuhoOx9%2BmxlVZ0V6jIhsElhQc1wIjEBeHxE9qob%2B9TP%2BRY9mPFMw7U%2F%2BJMsSUUlOp2i8UAS4rCMpZy92BTH0ge7yxb2i9q%2BC1j8bKYD1%2Bo2H5hC3H7L0xdtvLsEWVdjUU9EzUMlKNutYZKNbgSY1FS%2B8zUjAP1hWKbEYHsHJdSNA9E%2Fv5EdzjbggSMktfE5cY6R9WOD8FXhQfKCFxDxWfpA0Bq9SZ7TCx8E4caEPlm3E4wv7kmy9YQzNdmM6xMVRHp%2Byf66%2BE7B8nuEsA1cnGUBT3f44fYpKY7KQFLHk5henrDKzHRtqcajHMlQWNC9lmWMAUIPKy9T2iQyMwTsg23LJVzFPbAvXvU6KmuBQLCqJhFfrGMYADx1HqeW2EuswZFnT8m4VgK0QlngP0GZbV%2BIDX8AVaH84%2FDhVG%2FMWfsZRrIK%2BVJWHR%2FzuUYfjG2gx9KrK5My0WmNMQ%2F0txAW3pwsAgu3flBFCDU37uUJzDZOIg0OCxE0XAQyYCpTDauuPEBjqkAYJA6WQTHjSBSHkFNx1jtEc0BoAwApyZvA9lpt%2FhGqs85NC7NqhIMGuAht%2F5xgiY2d%2BJHIzJQtx3%2BxRohLSA%2BXdNTRxnpwOHTLzhGuQP9Vc6Cec5uhXKquAMaa3kr5VsKwAQv7e2cK73Cdx1ZGIjgtTWrPsRy5unkC8a4QENUXd99QgAgHd1kdQP31RvZYh6L5yD5mMMtmVU71Yq5r3VsCYSMJhy&X-Amz-Signature=6090ade0e6b5e6ad9cf055db93c88174dac76ad550a33cc28d38ba172fe2a0b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYUMHBD3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlpdrlFcxsi%2FfVjLoAXzdprN4a63dlbqy6SArwGdKeugIhAMpPdKnr5f0Kh06Ep6FH5lBtbpfRLnrvqagDeDhpqCFFKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx17Iw2xahUg3Jexrgq3APvCNYdCBvmxzTtHMMbZxGO%2FJg8EeBNKw9EDC%2FOmsVjo0QBjfhDKFiba4XHds1wErcBTeOkC0ebBWMseYBQLjB0bLXAsNdhRiNN%2Fv4tu9KURjLHmPYFO0zp1KsczrsF9aGFuhoOx9%2BmxlVZ0V6jIhsElhQc1wIjEBeHxE9qob%2B9TP%2BRY9mPFMw7U%2F%2BJMsSUUlOp2i8UAS4rCMpZy92BTH0ge7yxb2i9q%2BC1j8bKYD1%2Bo2H5hC3H7L0xdtvLsEWVdjUU9EzUMlKNutYZKNbgSY1FS%2B8zUjAP1hWKbEYHsHJdSNA9E%2Fv5EdzjbggSMktfE5cY6R9WOD8FXhQfKCFxDxWfpA0Bq9SZ7TCx8E4caEPlm3E4wv7kmy9YQzNdmM6xMVRHp%2Byf66%2BE7B8nuEsA1cnGUBT3f44fYpKY7KQFLHk5henrDKzHRtqcajHMlQWNC9lmWMAUIPKy9T2iQyMwTsg23LJVzFPbAvXvU6KmuBQLCqJhFfrGMYADx1HqeW2EuswZFnT8m4VgK0QlngP0GZbV%2BIDX8AVaH84%2FDhVG%2FMWfsZRrIK%2BVJWHR%2FzuUYfjG2gx9KrK5My0WmNMQ%2F0txAW3pwsAgu3flBFCDU37uUJzDZOIg0OCxE0XAQyYCpTDauuPEBjqkAYJA6WQTHjSBSHkFNx1jtEc0BoAwApyZvA9lpt%2FhGqs85NC7NqhIMGuAht%2F5xgiY2d%2BJHIzJQtx3%2BxRohLSA%2BXdNTRxnpwOHTLzhGuQP9Vc6Cec5uhXKquAMaa3kr5VsKwAQv7e2cK73Cdx1ZGIjgtTWrPsRy5unkC8a4QENUXd99QgAgHd1kdQP31RvZYh6L5yD5mMMtmVU71Yq5r3VsCYSMJhy&X-Amz-Signature=52d97cacc934358c0068beed97b7799f4b7ba57faebbf3d9a296212b9b6e5090&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYUMHBD3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlpdrlFcxsi%2FfVjLoAXzdprN4a63dlbqy6SArwGdKeugIhAMpPdKnr5f0Kh06Ep6FH5lBtbpfRLnrvqagDeDhpqCFFKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx17Iw2xahUg3Jexrgq3APvCNYdCBvmxzTtHMMbZxGO%2FJg8EeBNKw9EDC%2FOmsVjo0QBjfhDKFiba4XHds1wErcBTeOkC0ebBWMseYBQLjB0bLXAsNdhRiNN%2Fv4tu9KURjLHmPYFO0zp1KsczrsF9aGFuhoOx9%2BmxlVZ0V6jIhsElhQc1wIjEBeHxE9qob%2B9TP%2BRY9mPFMw7U%2F%2BJMsSUUlOp2i8UAS4rCMpZy92BTH0ge7yxb2i9q%2BC1j8bKYD1%2Bo2H5hC3H7L0xdtvLsEWVdjUU9EzUMlKNutYZKNbgSY1FS%2B8zUjAP1hWKbEYHsHJdSNA9E%2Fv5EdzjbggSMktfE5cY6R9WOD8FXhQfKCFxDxWfpA0Bq9SZ7TCx8E4caEPlm3E4wv7kmy9YQzNdmM6xMVRHp%2Byf66%2BE7B8nuEsA1cnGUBT3f44fYpKY7KQFLHk5henrDKzHRtqcajHMlQWNC9lmWMAUIPKy9T2iQyMwTsg23LJVzFPbAvXvU6KmuBQLCqJhFfrGMYADx1HqeW2EuswZFnT8m4VgK0QlngP0GZbV%2BIDX8AVaH84%2FDhVG%2FMWfsZRrIK%2BVJWHR%2FzuUYfjG2gx9KrK5My0WmNMQ%2F0txAW3pwsAgu3flBFCDU37uUJzDZOIg0OCxE0XAQyYCpTDauuPEBjqkAYJA6WQTHjSBSHkFNx1jtEc0BoAwApyZvA9lpt%2FhGqs85NC7NqhIMGuAht%2F5xgiY2d%2BJHIzJQtx3%2BxRohLSA%2BXdNTRxnpwOHTLzhGuQP9Vc6Cec5uhXKquAMaa3kr5VsKwAQv7e2cK73Cdx1ZGIjgtTWrPsRy5unkC8a4QENUXd99QgAgHd1kdQP31RvZYh6L5yD5mMMtmVU71Yq5r3VsCYSMJhy&X-Amz-Signature=d39c683af5cb1d94c36c77b0f46ca608b5066b4b28e3b66fdffb3c4c979e6ba8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYUMHBD3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlpdrlFcxsi%2FfVjLoAXzdprN4a63dlbqy6SArwGdKeugIhAMpPdKnr5f0Kh06Ep6FH5lBtbpfRLnrvqagDeDhpqCFFKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx17Iw2xahUg3Jexrgq3APvCNYdCBvmxzTtHMMbZxGO%2FJg8EeBNKw9EDC%2FOmsVjo0QBjfhDKFiba4XHds1wErcBTeOkC0ebBWMseYBQLjB0bLXAsNdhRiNN%2Fv4tu9KURjLHmPYFO0zp1KsczrsF9aGFuhoOx9%2BmxlVZ0V6jIhsElhQc1wIjEBeHxE9qob%2B9TP%2BRY9mPFMw7U%2F%2BJMsSUUlOp2i8UAS4rCMpZy92BTH0ge7yxb2i9q%2BC1j8bKYD1%2Bo2H5hC3H7L0xdtvLsEWVdjUU9EzUMlKNutYZKNbgSY1FS%2B8zUjAP1hWKbEYHsHJdSNA9E%2Fv5EdzjbggSMktfE5cY6R9WOD8FXhQfKCFxDxWfpA0Bq9SZ7TCx8E4caEPlm3E4wv7kmy9YQzNdmM6xMVRHp%2Byf66%2BE7B8nuEsA1cnGUBT3f44fYpKY7KQFLHk5henrDKzHRtqcajHMlQWNC9lmWMAUIPKy9T2iQyMwTsg23LJVzFPbAvXvU6KmuBQLCqJhFfrGMYADx1HqeW2EuswZFnT8m4VgK0QlngP0GZbV%2BIDX8AVaH84%2FDhVG%2FMWfsZRrIK%2BVJWHR%2FzuUYfjG2gx9KrK5My0WmNMQ%2F0txAW3pwsAgu3flBFCDU37uUJzDZOIg0OCxE0XAQyYCpTDauuPEBjqkAYJA6WQTHjSBSHkFNx1jtEc0BoAwApyZvA9lpt%2FhGqs85NC7NqhIMGuAht%2F5xgiY2d%2BJHIzJQtx3%2BxRohLSA%2BXdNTRxnpwOHTLzhGuQP9Vc6Cec5uhXKquAMaa3kr5VsKwAQv7e2cK73Cdx1ZGIjgtTWrPsRy5unkC8a4QENUXd99QgAgHd1kdQP31RvZYh6L5yD5mMMtmVU71Yq5r3VsCYSMJhy&X-Amz-Signature=831ee7c9c443624646ebc3f35a618715f8086f962e4dcdb0b69d9a5d87a5073e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYUMHBD3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlpdrlFcxsi%2FfVjLoAXzdprN4a63dlbqy6SArwGdKeugIhAMpPdKnr5f0Kh06Ep6FH5lBtbpfRLnrvqagDeDhpqCFFKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx17Iw2xahUg3Jexrgq3APvCNYdCBvmxzTtHMMbZxGO%2FJg8EeBNKw9EDC%2FOmsVjo0QBjfhDKFiba4XHds1wErcBTeOkC0ebBWMseYBQLjB0bLXAsNdhRiNN%2Fv4tu9KURjLHmPYFO0zp1KsczrsF9aGFuhoOx9%2BmxlVZ0V6jIhsElhQc1wIjEBeHxE9qob%2B9TP%2BRY9mPFMw7U%2F%2BJMsSUUlOp2i8UAS4rCMpZy92BTH0ge7yxb2i9q%2BC1j8bKYD1%2Bo2H5hC3H7L0xdtvLsEWVdjUU9EzUMlKNutYZKNbgSY1FS%2B8zUjAP1hWKbEYHsHJdSNA9E%2Fv5EdzjbggSMktfE5cY6R9WOD8FXhQfKCFxDxWfpA0Bq9SZ7TCx8E4caEPlm3E4wv7kmy9YQzNdmM6xMVRHp%2Byf66%2BE7B8nuEsA1cnGUBT3f44fYpKY7KQFLHk5henrDKzHRtqcajHMlQWNC9lmWMAUIPKy9T2iQyMwTsg23LJVzFPbAvXvU6KmuBQLCqJhFfrGMYADx1HqeW2EuswZFnT8m4VgK0QlngP0GZbV%2BIDX8AVaH84%2FDhVG%2FMWfsZRrIK%2BVJWHR%2FzuUYfjG2gx9KrK5My0WmNMQ%2F0txAW3pwsAgu3flBFCDU37uUJzDZOIg0OCxE0XAQyYCpTDauuPEBjqkAYJA6WQTHjSBSHkFNx1jtEc0BoAwApyZvA9lpt%2FhGqs85NC7NqhIMGuAht%2F5xgiY2d%2BJHIzJQtx3%2BxRohLSA%2BXdNTRxnpwOHTLzhGuQP9Vc6Cec5uhXKquAMaa3kr5VsKwAQv7e2cK73Cdx1ZGIjgtTWrPsRy5unkC8a4QENUXd99QgAgHd1kdQP31RvZYh6L5yD5mMMtmVU71Yq5r3VsCYSMJhy&X-Amz-Signature=827fa61dede973d6e1f1523b74957c259b9b91ebba4ee8e1fe1dde9cb479aa71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYUMHBD3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlpdrlFcxsi%2FfVjLoAXzdprN4a63dlbqy6SArwGdKeugIhAMpPdKnr5f0Kh06Ep6FH5lBtbpfRLnrvqagDeDhpqCFFKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx17Iw2xahUg3Jexrgq3APvCNYdCBvmxzTtHMMbZxGO%2FJg8EeBNKw9EDC%2FOmsVjo0QBjfhDKFiba4XHds1wErcBTeOkC0ebBWMseYBQLjB0bLXAsNdhRiNN%2Fv4tu9KURjLHmPYFO0zp1KsczrsF9aGFuhoOx9%2BmxlVZ0V6jIhsElhQc1wIjEBeHxE9qob%2B9TP%2BRY9mPFMw7U%2F%2BJMsSUUlOp2i8UAS4rCMpZy92BTH0ge7yxb2i9q%2BC1j8bKYD1%2Bo2H5hC3H7L0xdtvLsEWVdjUU9EzUMlKNutYZKNbgSY1FS%2B8zUjAP1hWKbEYHsHJdSNA9E%2Fv5EdzjbggSMktfE5cY6R9WOD8FXhQfKCFxDxWfpA0Bq9SZ7TCx8E4caEPlm3E4wv7kmy9YQzNdmM6xMVRHp%2Byf66%2BE7B8nuEsA1cnGUBT3f44fYpKY7KQFLHk5henrDKzHRtqcajHMlQWNC9lmWMAUIPKy9T2iQyMwTsg23LJVzFPbAvXvU6KmuBQLCqJhFfrGMYADx1HqeW2EuswZFnT8m4VgK0QlngP0GZbV%2BIDX8AVaH84%2FDhVG%2FMWfsZRrIK%2BVJWHR%2FzuUYfjG2gx9KrK5My0WmNMQ%2F0txAW3pwsAgu3flBFCDU37uUJzDZOIg0OCxE0XAQyYCpTDauuPEBjqkAYJA6WQTHjSBSHkFNx1jtEc0BoAwApyZvA9lpt%2FhGqs85NC7NqhIMGuAht%2F5xgiY2d%2BJHIzJQtx3%2BxRohLSA%2BXdNTRxnpwOHTLzhGuQP9Vc6Cec5uhXKquAMaa3kr5VsKwAQv7e2cK73Cdx1ZGIjgtTWrPsRy5unkC8a4QENUXd99QgAgHd1kdQP31RvZYh6L5yD5mMMtmVU71Yq5r3VsCYSMJhy&X-Amz-Signature=a3cc98518af42fcfe07256d9fe699a719f03faac234178b9007db439b15f6168&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYUMHBD3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlpdrlFcxsi%2FfVjLoAXzdprN4a63dlbqy6SArwGdKeugIhAMpPdKnr5f0Kh06Ep6FH5lBtbpfRLnrvqagDeDhpqCFFKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx17Iw2xahUg3Jexrgq3APvCNYdCBvmxzTtHMMbZxGO%2FJg8EeBNKw9EDC%2FOmsVjo0QBjfhDKFiba4XHds1wErcBTeOkC0ebBWMseYBQLjB0bLXAsNdhRiNN%2Fv4tu9KURjLHmPYFO0zp1KsczrsF9aGFuhoOx9%2BmxlVZ0V6jIhsElhQc1wIjEBeHxE9qob%2B9TP%2BRY9mPFMw7U%2F%2BJMsSUUlOp2i8UAS4rCMpZy92BTH0ge7yxb2i9q%2BC1j8bKYD1%2Bo2H5hC3H7L0xdtvLsEWVdjUU9EzUMlKNutYZKNbgSY1FS%2B8zUjAP1hWKbEYHsHJdSNA9E%2Fv5EdzjbggSMktfE5cY6R9WOD8FXhQfKCFxDxWfpA0Bq9SZ7TCx8E4caEPlm3E4wv7kmy9YQzNdmM6xMVRHp%2Byf66%2BE7B8nuEsA1cnGUBT3f44fYpKY7KQFLHk5henrDKzHRtqcajHMlQWNC9lmWMAUIPKy9T2iQyMwTsg23LJVzFPbAvXvU6KmuBQLCqJhFfrGMYADx1HqeW2EuswZFnT8m4VgK0QlngP0GZbV%2BIDX8AVaH84%2FDhVG%2FMWfsZRrIK%2BVJWHR%2FzuUYfjG2gx9KrK5My0WmNMQ%2F0txAW3pwsAgu3flBFCDU37uUJzDZOIg0OCxE0XAQyYCpTDauuPEBjqkAYJA6WQTHjSBSHkFNx1jtEc0BoAwApyZvA9lpt%2FhGqs85NC7NqhIMGuAht%2F5xgiY2d%2BJHIzJQtx3%2BxRohLSA%2BXdNTRxnpwOHTLzhGuQP9Vc6Cec5uhXKquAMaa3kr5VsKwAQv7e2cK73Cdx1ZGIjgtTWrPsRy5unkC8a4QENUXd99QgAgHd1kdQP31RvZYh6L5yD5mMMtmVU71Yq5r3VsCYSMJhy&X-Amz-Signature=5db63dcc36fd2cb1b3eaa02ccf6c13d920a88b2a75064afd23d51c99ac5c409e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYUMHBD3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlpdrlFcxsi%2FfVjLoAXzdprN4a63dlbqy6SArwGdKeugIhAMpPdKnr5f0Kh06Ep6FH5lBtbpfRLnrvqagDeDhpqCFFKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx17Iw2xahUg3Jexrgq3APvCNYdCBvmxzTtHMMbZxGO%2FJg8EeBNKw9EDC%2FOmsVjo0QBjfhDKFiba4XHds1wErcBTeOkC0ebBWMseYBQLjB0bLXAsNdhRiNN%2Fv4tu9KURjLHmPYFO0zp1KsczrsF9aGFuhoOx9%2BmxlVZ0V6jIhsElhQc1wIjEBeHxE9qob%2B9TP%2BRY9mPFMw7U%2F%2BJMsSUUlOp2i8UAS4rCMpZy92BTH0ge7yxb2i9q%2BC1j8bKYD1%2Bo2H5hC3H7L0xdtvLsEWVdjUU9EzUMlKNutYZKNbgSY1FS%2B8zUjAP1hWKbEYHsHJdSNA9E%2Fv5EdzjbggSMktfE5cY6R9WOD8FXhQfKCFxDxWfpA0Bq9SZ7TCx8E4caEPlm3E4wv7kmy9YQzNdmM6xMVRHp%2Byf66%2BE7B8nuEsA1cnGUBT3f44fYpKY7KQFLHk5henrDKzHRtqcajHMlQWNC9lmWMAUIPKy9T2iQyMwTsg23LJVzFPbAvXvU6KmuBQLCqJhFfrGMYADx1HqeW2EuswZFnT8m4VgK0QlngP0GZbV%2BIDX8AVaH84%2FDhVG%2FMWfsZRrIK%2BVJWHR%2FzuUYfjG2gx9KrK5My0WmNMQ%2F0txAW3pwsAgu3flBFCDU37uUJzDZOIg0OCxE0XAQyYCpTDauuPEBjqkAYJA6WQTHjSBSHkFNx1jtEc0BoAwApyZvA9lpt%2FhGqs85NC7NqhIMGuAht%2F5xgiY2d%2BJHIzJQtx3%2BxRohLSA%2BXdNTRxnpwOHTLzhGuQP9Vc6Cec5uhXKquAMaa3kr5VsKwAQv7e2cK73Cdx1ZGIjgtTWrPsRy5unkC8a4QENUXd99QgAgHd1kdQP31RvZYh6L5yD5mMMtmVU71Yq5r3VsCYSMJhy&X-Amz-Signature=878f3cc18caa38dac0fcf52d73252e19f95bae27c416474dbbb9efb7df596770&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYUMHBD3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlpdrlFcxsi%2FfVjLoAXzdprN4a63dlbqy6SArwGdKeugIhAMpPdKnr5f0Kh06Ep6FH5lBtbpfRLnrvqagDeDhpqCFFKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx17Iw2xahUg3Jexrgq3APvCNYdCBvmxzTtHMMbZxGO%2FJg8EeBNKw9EDC%2FOmsVjo0QBjfhDKFiba4XHds1wErcBTeOkC0ebBWMseYBQLjB0bLXAsNdhRiNN%2Fv4tu9KURjLHmPYFO0zp1KsczrsF9aGFuhoOx9%2BmxlVZ0V6jIhsElhQc1wIjEBeHxE9qob%2B9TP%2BRY9mPFMw7U%2F%2BJMsSUUlOp2i8UAS4rCMpZy92BTH0ge7yxb2i9q%2BC1j8bKYD1%2Bo2H5hC3H7L0xdtvLsEWVdjUU9EzUMlKNutYZKNbgSY1FS%2B8zUjAP1hWKbEYHsHJdSNA9E%2Fv5EdzjbggSMktfE5cY6R9WOD8FXhQfKCFxDxWfpA0Bq9SZ7TCx8E4caEPlm3E4wv7kmy9YQzNdmM6xMVRHp%2Byf66%2BE7B8nuEsA1cnGUBT3f44fYpKY7KQFLHk5henrDKzHRtqcajHMlQWNC9lmWMAUIPKy9T2iQyMwTsg23LJVzFPbAvXvU6KmuBQLCqJhFfrGMYADx1HqeW2EuswZFnT8m4VgK0QlngP0GZbV%2BIDX8AVaH84%2FDhVG%2FMWfsZRrIK%2BVJWHR%2FzuUYfjG2gx9KrK5My0WmNMQ%2F0txAW3pwsAgu3flBFCDU37uUJzDZOIg0OCxE0XAQyYCpTDauuPEBjqkAYJA6WQTHjSBSHkFNx1jtEc0BoAwApyZvA9lpt%2FhGqs85NC7NqhIMGuAht%2F5xgiY2d%2BJHIzJQtx3%2BxRohLSA%2BXdNTRxnpwOHTLzhGuQP9Vc6Cec5uhXKquAMaa3kr5VsKwAQv7e2cK73Cdx1ZGIjgtTWrPsRy5unkC8a4QENUXd99QgAgHd1kdQP31RvZYh6L5yD5mMMtmVU71Yq5r3VsCYSMJhy&X-Amz-Signature=337ea1c5eeecdd90ee911c138acb83c8f01b38544938820528510f81561b721b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
