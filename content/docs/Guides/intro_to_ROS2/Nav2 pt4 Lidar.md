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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQTQ4R77%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiWC4q%2FfjuNDB4n46%2BRsOAZDG8f9ed8GMlncBN9MG8dQIgPNgdcCM1cbZsAa4JdCsEf7KifAPGoP9UyXkyZwu5AIoqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMR0iUUI7E%2FV72FFkSrcA%2B%2Flcsm8IpFYK9foBHWlQYmMHCoPHgpO%2FWXODhGlRx%2F9ZItfdo7auNwW87XKAyp3YOTqQRrjM0aCuQJEY2GJqNgKpC0ANBmcOtsMD5p7eKUFdCP7NX05pCyKl3iHEwUq0437%2BxiBWvmg56dS7rFEBZgodA1U5LsayVW2i6J8Is94bP1qLpE2wIPOGgpidm0dtD5E2tzfFjKOiTfcIq0OkCr4iIpRT8erlaj69j6hBMinj1GFINBGbYxULRsrfOjf1Ri%2F20CMedOE4WUinTOU%2B62TMZgbcT8TOoKKRXXHp%2Fcv0oix0UlpKzIYU0bpO2OIEfdK7R04LaW8LvcM%2BSUtOUnUFMzQkMv7nbnXNXEUTgWTaSLwBrj3drJMNPuTA7koaLjCglJCHSSKY0r6WunuJ78u18v1bVsk4cVZr8HxlYhCRwC3zLXimgrDnXTm5mSuQAHv2HiEEqqzT8%2BJkWubJJRY%2F6QXolQjHU10Tw3mt4qjjpiSLpkZQeNx65nP5%2FTqDdcH0C9vOJaA63nzKRlQO2Evg2VIba4bhQ3iG3cDJCjtXTwcOyu5o6rd3fD0DXaDkD3mU9b0nn8hekli3ydjIZazBL4XlPuttPT%2BHByHye7FFxSP3%2BCv%2BHkrzEVzMM2648QGOqUBFcHsvyYtE5xRjwBuV8iRa5Xm7KiqCi%2FoI0lIVfrvUEkJAA%2FXFe2UDauaUr7wCtaJvmeb72NPcwUo%2FoIrN4JrMrZKhYDbv7XrUzyRsXTPOWnoaXyWNs%2Fh8yB0lbsGwIkyeR%2FtpgSuPxWCjN6GhHwN6zrmbN7nM1pH5UPUbnZT9Pa9LCfFhAz9yHj5M7S1deBngFjZyoD9YjXCMZOI31WZXcf9FuiA&X-Amz-Signature=d8034e3b3634ac91289415257934a0d89d7cc4dab3afc474cc19d17d623e643f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYUMHBD3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlpdrlFcxsi%2FfVjLoAXzdprN4a63dlbqy6SArwGdKeugIhAMpPdKnr5f0Kh06Ep6FH5lBtbpfRLnrvqagDeDhpqCFFKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx17Iw2xahUg3Jexrgq3APvCNYdCBvmxzTtHMMbZxGO%2FJg8EeBNKw9EDC%2FOmsVjo0QBjfhDKFiba4XHds1wErcBTeOkC0ebBWMseYBQLjB0bLXAsNdhRiNN%2Fv4tu9KURjLHmPYFO0zp1KsczrsF9aGFuhoOx9%2BmxlVZ0V6jIhsElhQc1wIjEBeHxE9qob%2B9TP%2BRY9mPFMw7U%2F%2BJMsSUUlOp2i8UAS4rCMpZy92BTH0ge7yxb2i9q%2BC1j8bKYD1%2Bo2H5hC3H7L0xdtvLsEWVdjUU9EzUMlKNutYZKNbgSY1FS%2B8zUjAP1hWKbEYHsHJdSNA9E%2Fv5EdzjbggSMktfE5cY6R9WOD8FXhQfKCFxDxWfpA0Bq9SZ7TCx8E4caEPlm3E4wv7kmy9YQzNdmM6xMVRHp%2Byf66%2BE7B8nuEsA1cnGUBT3f44fYpKY7KQFLHk5henrDKzHRtqcajHMlQWNC9lmWMAUIPKy9T2iQyMwTsg23LJVzFPbAvXvU6KmuBQLCqJhFfrGMYADx1HqeW2EuswZFnT8m4VgK0QlngP0GZbV%2BIDX8AVaH84%2FDhVG%2FMWfsZRrIK%2BVJWHR%2FzuUYfjG2gx9KrK5My0WmNMQ%2F0txAW3pwsAgu3flBFCDU37uUJzDZOIg0OCxE0XAQyYCpTDauuPEBjqkAYJA6WQTHjSBSHkFNx1jtEc0BoAwApyZvA9lpt%2FhGqs85NC7NqhIMGuAht%2F5xgiY2d%2BJHIzJQtx3%2BxRohLSA%2BXdNTRxnpwOHTLzhGuQP9Vc6Cec5uhXKquAMaa3kr5VsKwAQv7e2cK73Cdx1ZGIjgtTWrPsRy5unkC8a4QENUXd99QgAgHd1kdQP31RvZYh6L5yD5mMMtmVU71Yq5r3VsCYSMJhy&X-Amz-Signature=1bc820ae36316818fba877eac44ff7bcc90eac7a365be017e0adaa4893b9769d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYUMHBD3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlpdrlFcxsi%2FfVjLoAXzdprN4a63dlbqy6SArwGdKeugIhAMpPdKnr5f0Kh06Ep6FH5lBtbpfRLnrvqagDeDhpqCFFKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx17Iw2xahUg3Jexrgq3APvCNYdCBvmxzTtHMMbZxGO%2FJg8EeBNKw9EDC%2FOmsVjo0QBjfhDKFiba4XHds1wErcBTeOkC0ebBWMseYBQLjB0bLXAsNdhRiNN%2Fv4tu9KURjLHmPYFO0zp1KsczrsF9aGFuhoOx9%2BmxlVZ0V6jIhsElhQc1wIjEBeHxE9qob%2B9TP%2BRY9mPFMw7U%2F%2BJMsSUUlOp2i8UAS4rCMpZy92BTH0ge7yxb2i9q%2BC1j8bKYD1%2Bo2H5hC3H7L0xdtvLsEWVdjUU9EzUMlKNutYZKNbgSY1FS%2B8zUjAP1hWKbEYHsHJdSNA9E%2Fv5EdzjbggSMktfE5cY6R9WOD8FXhQfKCFxDxWfpA0Bq9SZ7TCx8E4caEPlm3E4wv7kmy9YQzNdmM6xMVRHp%2Byf66%2BE7B8nuEsA1cnGUBT3f44fYpKY7KQFLHk5henrDKzHRtqcajHMlQWNC9lmWMAUIPKy9T2iQyMwTsg23LJVzFPbAvXvU6KmuBQLCqJhFfrGMYADx1HqeW2EuswZFnT8m4VgK0QlngP0GZbV%2BIDX8AVaH84%2FDhVG%2FMWfsZRrIK%2BVJWHR%2FzuUYfjG2gx9KrK5My0WmNMQ%2F0txAW3pwsAgu3flBFCDU37uUJzDZOIg0OCxE0XAQyYCpTDauuPEBjqkAYJA6WQTHjSBSHkFNx1jtEc0BoAwApyZvA9lpt%2FhGqs85NC7NqhIMGuAht%2F5xgiY2d%2BJHIzJQtx3%2BxRohLSA%2BXdNTRxnpwOHTLzhGuQP9Vc6Cec5uhXKquAMaa3kr5VsKwAQv7e2cK73Cdx1ZGIjgtTWrPsRy5unkC8a4QENUXd99QgAgHd1kdQP31RvZYh6L5yD5mMMtmVU71Yq5r3VsCYSMJhy&X-Amz-Signature=f556860188b74a1185298b9e3b630ecd3e60b949f418e659c505a5c087d2544c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYUMHBD3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlpdrlFcxsi%2FfVjLoAXzdprN4a63dlbqy6SArwGdKeugIhAMpPdKnr5f0Kh06Ep6FH5lBtbpfRLnrvqagDeDhpqCFFKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx17Iw2xahUg3Jexrgq3APvCNYdCBvmxzTtHMMbZxGO%2FJg8EeBNKw9EDC%2FOmsVjo0QBjfhDKFiba4XHds1wErcBTeOkC0ebBWMseYBQLjB0bLXAsNdhRiNN%2Fv4tu9KURjLHmPYFO0zp1KsczrsF9aGFuhoOx9%2BmxlVZ0V6jIhsElhQc1wIjEBeHxE9qob%2B9TP%2BRY9mPFMw7U%2F%2BJMsSUUlOp2i8UAS4rCMpZy92BTH0ge7yxb2i9q%2BC1j8bKYD1%2Bo2H5hC3H7L0xdtvLsEWVdjUU9EzUMlKNutYZKNbgSY1FS%2B8zUjAP1hWKbEYHsHJdSNA9E%2Fv5EdzjbggSMktfE5cY6R9WOD8FXhQfKCFxDxWfpA0Bq9SZ7TCx8E4caEPlm3E4wv7kmy9YQzNdmM6xMVRHp%2Byf66%2BE7B8nuEsA1cnGUBT3f44fYpKY7KQFLHk5henrDKzHRtqcajHMlQWNC9lmWMAUIPKy9T2iQyMwTsg23LJVzFPbAvXvU6KmuBQLCqJhFfrGMYADx1HqeW2EuswZFnT8m4VgK0QlngP0GZbV%2BIDX8AVaH84%2FDhVG%2FMWfsZRrIK%2BVJWHR%2FzuUYfjG2gx9KrK5My0WmNMQ%2F0txAW3pwsAgu3flBFCDU37uUJzDZOIg0OCxE0XAQyYCpTDauuPEBjqkAYJA6WQTHjSBSHkFNx1jtEc0BoAwApyZvA9lpt%2FhGqs85NC7NqhIMGuAht%2F5xgiY2d%2BJHIzJQtx3%2BxRohLSA%2BXdNTRxnpwOHTLzhGuQP9Vc6Cec5uhXKquAMaa3kr5VsKwAQv7e2cK73Cdx1ZGIjgtTWrPsRy5unkC8a4QENUXd99QgAgHd1kdQP31RvZYh6L5yD5mMMtmVU71Yq5r3VsCYSMJhy&X-Amz-Signature=4794c59e4f245153a4dd1f00b50241eb0c7a2331c07fd21f6d5a45b0bfe84e07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYUMHBD3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlpdrlFcxsi%2FfVjLoAXzdprN4a63dlbqy6SArwGdKeugIhAMpPdKnr5f0Kh06Ep6FH5lBtbpfRLnrvqagDeDhpqCFFKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx17Iw2xahUg3Jexrgq3APvCNYdCBvmxzTtHMMbZxGO%2FJg8EeBNKw9EDC%2FOmsVjo0QBjfhDKFiba4XHds1wErcBTeOkC0ebBWMseYBQLjB0bLXAsNdhRiNN%2Fv4tu9KURjLHmPYFO0zp1KsczrsF9aGFuhoOx9%2BmxlVZ0V6jIhsElhQc1wIjEBeHxE9qob%2B9TP%2BRY9mPFMw7U%2F%2BJMsSUUlOp2i8UAS4rCMpZy92BTH0ge7yxb2i9q%2BC1j8bKYD1%2Bo2H5hC3H7L0xdtvLsEWVdjUU9EzUMlKNutYZKNbgSY1FS%2B8zUjAP1hWKbEYHsHJdSNA9E%2Fv5EdzjbggSMktfE5cY6R9WOD8FXhQfKCFxDxWfpA0Bq9SZ7TCx8E4caEPlm3E4wv7kmy9YQzNdmM6xMVRHp%2Byf66%2BE7B8nuEsA1cnGUBT3f44fYpKY7KQFLHk5henrDKzHRtqcajHMlQWNC9lmWMAUIPKy9T2iQyMwTsg23LJVzFPbAvXvU6KmuBQLCqJhFfrGMYADx1HqeW2EuswZFnT8m4VgK0QlngP0GZbV%2BIDX8AVaH84%2FDhVG%2FMWfsZRrIK%2BVJWHR%2FzuUYfjG2gx9KrK5My0WmNMQ%2F0txAW3pwsAgu3flBFCDU37uUJzDZOIg0OCxE0XAQyYCpTDauuPEBjqkAYJA6WQTHjSBSHkFNx1jtEc0BoAwApyZvA9lpt%2FhGqs85NC7NqhIMGuAht%2F5xgiY2d%2BJHIzJQtx3%2BxRohLSA%2BXdNTRxnpwOHTLzhGuQP9Vc6Cec5uhXKquAMaa3kr5VsKwAQv7e2cK73Cdx1ZGIjgtTWrPsRy5unkC8a4QENUXd99QgAgHd1kdQP31RvZYh6L5yD5mMMtmVU71Yq5r3VsCYSMJhy&X-Amz-Signature=6beedbce24e1ff87d71f4bb544717eef1259b6c3a073dfeb3d74b6612915edd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYUMHBD3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlpdrlFcxsi%2FfVjLoAXzdprN4a63dlbqy6SArwGdKeugIhAMpPdKnr5f0Kh06Ep6FH5lBtbpfRLnrvqagDeDhpqCFFKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx17Iw2xahUg3Jexrgq3APvCNYdCBvmxzTtHMMbZxGO%2FJg8EeBNKw9EDC%2FOmsVjo0QBjfhDKFiba4XHds1wErcBTeOkC0ebBWMseYBQLjB0bLXAsNdhRiNN%2Fv4tu9KURjLHmPYFO0zp1KsczrsF9aGFuhoOx9%2BmxlVZ0V6jIhsElhQc1wIjEBeHxE9qob%2B9TP%2BRY9mPFMw7U%2F%2BJMsSUUlOp2i8UAS4rCMpZy92BTH0ge7yxb2i9q%2BC1j8bKYD1%2Bo2H5hC3H7L0xdtvLsEWVdjUU9EzUMlKNutYZKNbgSY1FS%2B8zUjAP1hWKbEYHsHJdSNA9E%2Fv5EdzjbggSMktfE5cY6R9WOD8FXhQfKCFxDxWfpA0Bq9SZ7TCx8E4caEPlm3E4wv7kmy9YQzNdmM6xMVRHp%2Byf66%2BE7B8nuEsA1cnGUBT3f44fYpKY7KQFLHk5henrDKzHRtqcajHMlQWNC9lmWMAUIPKy9T2iQyMwTsg23LJVzFPbAvXvU6KmuBQLCqJhFfrGMYADx1HqeW2EuswZFnT8m4VgK0QlngP0GZbV%2BIDX8AVaH84%2FDhVG%2FMWfsZRrIK%2BVJWHR%2FzuUYfjG2gx9KrK5My0WmNMQ%2F0txAW3pwsAgu3flBFCDU37uUJzDZOIg0OCxE0XAQyYCpTDauuPEBjqkAYJA6WQTHjSBSHkFNx1jtEc0BoAwApyZvA9lpt%2FhGqs85NC7NqhIMGuAht%2F5xgiY2d%2BJHIzJQtx3%2BxRohLSA%2BXdNTRxnpwOHTLzhGuQP9Vc6Cec5uhXKquAMaa3kr5VsKwAQv7e2cK73Cdx1ZGIjgtTWrPsRy5unkC8a4QENUXd99QgAgHd1kdQP31RvZYh6L5yD5mMMtmVU71Yq5r3VsCYSMJhy&X-Amz-Signature=36e0de56cc40541cc2d64ae04f80f8dccc5b1fc97baab2d1233366e61454e758&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYUMHBD3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlpdrlFcxsi%2FfVjLoAXzdprN4a63dlbqy6SArwGdKeugIhAMpPdKnr5f0Kh06Ep6FH5lBtbpfRLnrvqagDeDhpqCFFKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx17Iw2xahUg3Jexrgq3APvCNYdCBvmxzTtHMMbZxGO%2FJg8EeBNKw9EDC%2FOmsVjo0QBjfhDKFiba4XHds1wErcBTeOkC0ebBWMseYBQLjB0bLXAsNdhRiNN%2Fv4tu9KURjLHmPYFO0zp1KsczrsF9aGFuhoOx9%2BmxlVZ0V6jIhsElhQc1wIjEBeHxE9qob%2B9TP%2BRY9mPFMw7U%2F%2BJMsSUUlOp2i8UAS4rCMpZy92BTH0ge7yxb2i9q%2BC1j8bKYD1%2Bo2H5hC3H7L0xdtvLsEWVdjUU9EzUMlKNutYZKNbgSY1FS%2B8zUjAP1hWKbEYHsHJdSNA9E%2Fv5EdzjbggSMktfE5cY6R9WOD8FXhQfKCFxDxWfpA0Bq9SZ7TCx8E4caEPlm3E4wv7kmy9YQzNdmM6xMVRHp%2Byf66%2BE7B8nuEsA1cnGUBT3f44fYpKY7KQFLHk5henrDKzHRtqcajHMlQWNC9lmWMAUIPKy9T2iQyMwTsg23LJVzFPbAvXvU6KmuBQLCqJhFfrGMYADx1HqeW2EuswZFnT8m4VgK0QlngP0GZbV%2BIDX8AVaH84%2FDhVG%2FMWfsZRrIK%2BVJWHR%2FzuUYfjG2gx9KrK5My0WmNMQ%2F0txAW3pwsAgu3flBFCDU37uUJzDZOIg0OCxE0XAQyYCpTDauuPEBjqkAYJA6WQTHjSBSHkFNx1jtEc0BoAwApyZvA9lpt%2FhGqs85NC7NqhIMGuAht%2F5xgiY2d%2BJHIzJQtx3%2BxRohLSA%2BXdNTRxnpwOHTLzhGuQP9Vc6Cec5uhXKquAMaa3kr5VsKwAQv7e2cK73Cdx1ZGIjgtTWrPsRy5unkC8a4QENUXd99QgAgHd1kdQP31RvZYh6L5yD5mMMtmVU71Yq5r3VsCYSMJhy&X-Amz-Signature=ca8bdf98fbaa73c0c00013e55c79fa76317f13ec487f60bc218268fdee6ff13b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYUMHBD3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlpdrlFcxsi%2FfVjLoAXzdprN4a63dlbqy6SArwGdKeugIhAMpPdKnr5f0Kh06Ep6FH5lBtbpfRLnrvqagDeDhpqCFFKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx17Iw2xahUg3Jexrgq3APvCNYdCBvmxzTtHMMbZxGO%2FJg8EeBNKw9EDC%2FOmsVjo0QBjfhDKFiba4XHds1wErcBTeOkC0ebBWMseYBQLjB0bLXAsNdhRiNN%2Fv4tu9KURjLHmPYFO0zp1KsczrsF9aGFuhoOx9%2BmxlVZ0V6jIhsElhQc1wIjEBeHxE9qob%2B9TP%2BRY9mPFMw7U%2F%2BJMsSUUlOp2i8UAS4rCMpZy92BTH0ge7yxb2i9q%2BC1j8bKYD1%2Bo2H5hC3H7L0xdtvLsEWVdjUU9EzUMlKNutYZKNbgSY1FS%2B8zUjAP1hWKbEYHsHJdSNA9E%2Fv5EdzjbggSMktfE5cY6R9WOD8FXhQfKCFxDxWfpA0Bq9SZ7TCx8E4caEPlm3E4wv7kmy9YQzNdmM6xMVRHp%2Byf66%2BE7B8nuEsA1cnGUBT3f44fYpKY7KQFLHk5henrDKzHRtqcajHMlQWNC9lmWMAUIPKy9T2iQyMwTsg23LJVzFPbAvXvU6KmuBQLCqJhFfrGMYADx1HqeW2EuswZFnT8m4VgK0QlngP0GZbV%2BIDX8AVaH84%2FDhVG%2FMWfsZRrIK%2BVJWHR%2FzuUYfjG2gx9KrK5My0WmNMQ%2F0txAW3pwsAgu3flBFCDU37uUJzDZOIg0OCxE0XAQyYCpTDauuPEBjqkAYJA6WQTHjSBSHkFNx1jtEc0BoAwApyZvA9lpt%2FhGqs85NC7NqhIMGuAht%2F5xgiY2d%2BJHIzJQtx3%2BxRohLSA%2BXdNTRxnpwOHTLzhGuQP9Vc6Cec5uhXKquAMaa3kr5VsKwAQv7e2cK73Cdx1ZGIjgtTWrPsRy5unkC8a4QENUXd99QgAgHd1kdQP31RvZYh6L5yD5mMMtmVU71Yq5r3VsCYSMJhy&X-Amz-Signature=2337d1a7c4284f42d15a5531f366e3655a08c3e30d96b525cbed3c8d99b04c0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYUMHBD3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlpdrlFcxsi%2FfVjLoAXzdprN4a63dlbqy6SArwGdKeugIhAMpPdKnr5f0Kh06Ep6FH5lBtbpfRLnrvqagDeDhpqCFFKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx17Iw2xahUg3Jexrgq3APvCNYdCBvmxzTtHMMbZxGO%2FJg8EeBNKw9EDC%2FOmsVjo0QBjfhDKFiba4XHds1wErcBTeOkC0ebBWMseYBQLjB0bLXAsNdhRiNN%2Fv4tu9KURjLHmPYFO0zp1KsczrsF9aGFuhoOx9%2BmxlVZ0V6jIhsElhQc1wIjEBeHxE9qob%2B9TP%2BRY9mPFMw7U%2F%2BJMsSUUlOp2i8UAS4rCMpZy92BTH0ge7yxb2i9q%2BC1j8bKYD1%2Bo2H5hC3H7L0xdtvLsEWVdjUU9EzUMlKNutYZKNbgSY1FS%2B8zUjAP1hWKbEYHsHJdSNA9E%2Fv5EdzjbggSMktfE5cY6R9WOD8FXhQfKCFxDxWfpA0Bq9SZ7TCx8E4caEPlm3E4wv7kmy9YQzNdmM6xMVRHp%2Byf66%2BE7B8nuEsA1cnGUBT3f44fYpKY7KQFLHk5henrDKzHRtqcajHMlQWNC9lmWMAUIPKy9T2iQyMwTsg23LJVzFPbAvXvU6KmuBQLCqJhFfrGMYADx1HqeW2EuswZFnT8m4VgK0QlngP0GZbV%2BIDX8AVaH84%2FDhVG%2FMWfsZRrIK%2BVJWHR%2FzuUYfjG2gx9KrK5My0WmNMQ%2F0txAW3pwsAgu3flBFCDU37uUJzDZOIg0OCxE0XAQyYCpTDauuPEBjqkAYJA6WQTHjSBSHkFNx1jtEc0BoAwApyZvA9lpt%2FhGqs85NC7NqhIMGuAht%2F5xgiY2d%2BJHIzJQtx3%2BxRohLSA%2BXdNTRxnpwOHTLzhGuQP9Vc6Cec5uhXKquAMaa3kr5VsKwAQv7e2cK73Cdx1ZGIjgtTWrPsRy5unkC8a4QENUXd99QgAgHd1kdQP31RvZYh6L5yD5mMMtmVU71Yq5r3VsCYSMJhy&X-Amz-Signature=88876ef341f59c7714841de4dac36ecf028728f85e6f5b6409f2eb03efbab9ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYUMHBD3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlpdrlFcxsi%2FfVjLoAXzdprN4a63dlbqy6SArwGdKeugIhAMpPdKnr5f0Kh06Ep6FH5lBtbpfRLnrvqagDeDhpqCFFKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx17Iw2xahUg3Jexrgq3APvCNYdCBvmxzTtHMMbZxGO%2FJg8EeBNKw9EDC%2FOmsVjo0QBjfhDKFiba4XHds1wErcBTeOkC0ebBWMseYBQLjB0bLXAsNdhRiNN%2Fv4tu9KURjLHmPYFO0zp1KsczrsF9aGFuhoOx9%2BmxlVZ0V6jIhsElhQc1wIjEBeHxE9qob%2B9TP%2BRY9mPFMw7U%2F%2BJMsSUUlOp2i8UAS4rCMpZy92BTH0ge7yxb2i9q%2BC1j8bKYD1%2Bo2H5hC3H7L0xdtvLsEWVdjUU9EzUMlKNutYZKNbgSY1FS%2B8zUjAP1hWKbEYHsHJdSNA9E%2Fv5EdzjbggSMktfE5cY6R9WOD8FXhQfKCFxDxWfpA0Bq9SZ7TCx8E4caEPlm3E4wv7kmy9YQzNdmM6xMVRHp%2Byf66%2BE7B8nuEsA1cnGUBT3f44fYpKY7KQFLHk5henrDKzHRtqcajHMlQWNC9lmWMAUIPKy9T2iQyMwTsg23LJVzFPbAvXvU6KmuBQLCqJhFfrGMYADx1HqeW2EuswZFnT8m4VgK0QlngP0GZbV%2BIDX8AVaH84%2FDhVG%2FMWfsZRrIK%2BVJWHR%2FzuUYfjG2gx9KrK5My0WmNMQ%2F0txAW3pwsAgu3flBFCDU37uUJzDZOIg0OCxE0XAQyYCpTDauuPEBjqkAYJA6WQTHjSBSHkFNx1jtEc0BoAwApyZvA9lpt%2FhGqs85NC7NqhIMGuAht%2F5xgiY2d%2BJHIzJQtx3%2BxRohLSA%2BXdNTRxnpwOHTLzhGuQP9Vc6Cec5uhXKquAMaa3kr5VsKwAQv7e2cK73Cdx1ZGIjgtTWrPsRy5unkC8a4QENUXd99QgAgHd1kdQP31RvZYh6L5yD5mMMtmVU71Yq5r3VsCYSMJhy&X-Amz-Signature=17cc4c28fba994ee66954f2795ce7852efd174ba644b5c5b5345be3bc48cfe1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYUMHBD3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlpdrlFcxsi%2FfVjLoAXzdprN4a63dlbqy6SArwGdKeugIhAMpPdKnr5f0Kh06Ep6FH5lBtbpfRLnrvqagDeDhpqCFFKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx17Iw2xahUg3Jexrgq3APvCNYdCBvmxzTtHMMbZxGO%2FJg8EeBNKw9EDC%2FOmsVjo0QBjfhDKFiba4XHds1wErcBTeOkC0ebBWMseYBQLjB0bLXAsNdhRiNN%2Fv4tu9KURjLHmPYFO0zp1KsczrsF9aGFuhoOx9%2BmxlVZ0V6jIhsElhQc1wIjEBeHxE9qob%2B9TP%2BRY9mPFMw7U%2F%2BJMsSUUlOp2i8UAS4rCMpZy92BTH0ge7yxb2i9q%2BC1j8bKYD1%2Bo2H5hC3H7L0xdtvLsEWVdjUU9EzUMlKNutYZKNbgSY1FS%2B8zUjAP1hWKbEYHsHJdSNA9E%2Fv5EdzjbggSMktfE5cY6R9WOD8FXhQfKCFxDxWfpA0Bq9SZ7TCx8E4caEPlm3E4wv7kmy9YQzNdmM6xMVRHp%2Byf66%2BE7B8nuEsA1cnGUBT3f44fYpKY7KQFLHk5henrDKzHRtqcajHMlQWNC9lmWMAUIPKy9T2iQyMwTsg23LJVzFPbAvXvU6KmuBQLCqJhFfrGMYADx1HqeW2EuswZFnT8m4VgK0QlngP0GZbV%2BIDX8AVaH84%2FDhVG%2FMWfsZRrIK%2BVJWHR%2FzuUYfjG2gx9KrK5My0WmNMQ%2F0txAW3pwsAgu3flBFCDU37uUJzDZOIg0OCxE0XAQyYCpTDauuPEBjqkAYJA6WQTHjSBSHkFNx1jtEc0BoAwApyZvA9lpt%2FhGqs85NC7NqhIMGuAht%2F5xgiY2d%2BJHIzJQtx3%2BxRohLSA%2BXdNTRxnpwOHTLzhGuQP9Vc6Cec5uhXKquAMaa3kr5VsKwAQv7e2cK73Cdx1ZGIjgtTWrPsRy5unkC8a4QENUXd99QgAgHd1kdQP31RvZYh6L5yD5mMMtmVU71Yq5r3VsCYSMJhy&X-Amz-Signature=6d510fcb54241ca45b217e56a07fa6aa6ee24fedf671faf5faef058d167a28be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
