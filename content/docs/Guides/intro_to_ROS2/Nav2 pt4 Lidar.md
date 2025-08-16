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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MT7UVHO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQD4deoo5H4z%2BpuHqOzC%2B6yXqVHdVk5uM%2FR%2FVdOLAyyOpAIhAPxG8QMJaRI6tTPjdMY0yd6awKrgS9R8Oi8%2BPidK9vHsKv8DCHEQABoMNjM3NDIzMTgzODA1IgzBD9YTI5ndfbNtBiEq3AMnDAw%2B8VzEnKrvW6rZ3Pdw9llfofXSJx776aE7HZilFvZ%2B4fjafbtjV22LbIBBT3Ub%2F2X1MuHPA5Wn%2Fo2eaRGIObIp8eUA3CNFaEYx3xgEsmNruths8xTRxycDNL%2FjWO%2F4nJ5PWOkEO6YhYt2SG%2B1W0gdM5cZHv%2BiqaqBJZNqM1Y5%2FkMi4IiC0knvaw53foQjL0ClC0VnnFkCfyY19Xl6tBTLo5Q%2B50UPiABCpx4ogsIzVCPibVlDkg0Ec4feoTm%2Bs9g7nsbx6BOs6uyz1U%2BJtKboHE%2Fi39QWKGKR8iVQMeh%2BnZvbKp9xMQa%2Blz5ksYsqsXI8LHP1mmngz7f3NMWcC5jJtpdm%2F1NnihvnxNA4LFbbYayp31kATO907kSDFC%2FBWgWx1SO%2FIuHrHhcGwocL5XhYCI8wU6SBGP2u4kbZNFRigp7o462I3ZP8qXcEQJWKyN4D4EHbbeptyHE7S7jG3%2FAY2vJhMKgbUW50YcOwEaJlqPqfvzwzkRV5C0yFpMfWmZ4nG%2BSikK2i5ZYxgXkH%2B0bvu7%2FBpBKbcOtR3BDVCH8qldBy%2FY9vgPkdDj%2BGIfBKz9SPa9gANON4JsP%2FK%2FYPu%2B9pQ4BCPmRQShqV0vbt0q%2Bx7OhoRMqtX7pRW4DCj%2BYDFBjqkAYppDA4KwxHUY0EjUy9eHj2VxIT8bhVx1cpdUUZXa9NuxWmcPTa3izg9BC2f7ALBfT8%2BbDJwqTbn3Yu5twvbzmV2LW49Dsf23qf8LwIrWfFfoLvbr8V6PTCXu6OryuSJlepidoDawQPBqUEzlD1BHBnJEcs3eeYK4PjccDc3D4BtbVsktKcHSmKaJPL3IxLrRY8dfH7IK5%2BVf6Uv7By4VpQcOvQs&X-Amz-Signature=2f6776886e32ca4124c0d037276dd3ab3caebbf56fbb595ab9ade51cfd43b279&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLM2JMAE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIFIVmI7OSc9Q%2FktjBKLQlIL%2FKYEo7ncbp5t6r5laCH7WAiBimG2VogMm4GwfuLl%2FA6Am%2FyDQ45WERQU6HlCKoLUANSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMya6jlICqBqz%2F%2FfBwKtwDtn2%2BmpszKUtS7K6rJXbYDXBxapoj%2Fk8SaXCc0epQs%2F0uMhvOFQG72xUVqa1YNbh5XsykqS7eKvMaXZa3H1CWFx6%2BeOtQ9Bim60%2BPDHaz%2BrNcjZuucyZawWqXKKSZ3IvHxHL6OdxN5DBcEJKTv4ydieOAc3Td8AcMSNLHJM519A9rGxQ97U%2BY7H33Z%2FaSXFQb6GgS6a0efojkwEaQftRQn1LbEwbH5nea2akF%2Bb7D%2FiIc%2Bcl9tzwuXopxd1hEISdVygyOdBMFG0DFypuXN3jssHm4QvB%2FFi%2FJ1H9Sa375NUuf7KWD4eyJrYw0WAd7MsSeDWkGlqJRg4KE9kmUkTXOSeZGso0CoyxXUbaNX3BXGwVN9Eo9OCEqv3d8klSPzxQ5eHK7OjWFLvRRpKC%2BtrxQChn0V3rCUgLY5a6so%2Bxz%2FyKgKZjWOtNA540Yw1TIDZa1nJe%2FKCDnJ0AxhHeSQJU8hJIT4X4Uo42AV1Go4iqvwE0sgrQd0T%2F9QQJPKvGn1G27muITNyWZFLNHdRppa4HgG7u4uXFzAuLXWm%2B6ezaoqQMfi%2BMaF5FTPrn1sTIUVmoA04yMgnQIfTXVMemTrmbXqaK3WDSzIRWUHxm%2FLzrY5%2BY0rsKY7XqBrsd9WBQw5%2FiAxQY6pgG8ulrjLOqWnTE8qTfOIvjsCRLn9FJ4%2BUcsdbNOX8aL9xKKfqB59S7WW2J%2BoTAlfAotT3d9pIhsLyp2Z7EngSfN8I8F05KutSKixKUYZA7EnMw0jG1KxIiOCqj1bWJ9I8ZmKtP6HmvgCjxYbyVh2NL9G3migIlW74yPpo9feC1wcBks6%2BtEIytOF4I%2FWCrduQYQU99czdlerRobgiWu%2Bgc1VCSmCXZW&X-Amz-Signature=0ad64bf61a3fbfbaa2a599dbbe98827a9fed7a4ce72fda982cfac1cda05f4dd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLM2JMAE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIFIVmI7OSc9Q%2FktjBKLQlIL%2FKYEo7ncbp5t6r5laCH7WAiBimG2VogMm4GwfuLl%2FA6Am%2FyDQ45WERQU6HlCKoLUANSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMya6jlICqBqz%2F%2FfBwKtwDtn2%2BmpszKUtS7K6rJXbYDXBxapoj%2Fk8SaXCc0epQs%2F0uMhvOFQG72xUVqa1YNbh5XsykqS7eKvMaXZa3H1CWFx6%2BeOtQ9Bim60%2BPDHaz%2BrNcjZuucyZawWqXKKSZ3IvHxHL6OdxN5DBcEJKTv4ydieOAc3Td8AcMSNLHJM519A9rGxQ97U%2BY7H33Z%2FaSXFQb6GgS6a0efojkwEaQftRQn1LbEwbH5nea2akF%2Bb7D%2FiIc%2Bcl9tzwuXopxd1hEISdVygyOdBMFG0DFypuXN3jssHm4QvB%2FFi%2FJ1H9Sa375NUuf7KWD4eyJrYw0WAd7MsSeDWkGlqJRg4KE9kmUkTXOSeZGso0CoyxXUbaNX3BXGwVN9Eo9OCEqv3d8klSPzxQ5eHK7OjWFLvRRpKC%2BtrxQChn0V3rCUgLY5a6so%2Bxz%2FyKgKZjWOtNA540Yw1TIDZa1nJe%2FKCDnJ0AxhHeSQJU8hJIT4X4Uo42AV1Go4iqvwE0sgrQd0T%2F9QQJPKvGn1G27muITNyWZFLNHdRppa4HgG7u4uXFzAuLXWm%2B6ezaoqQMfi%2BMaF5FTPrn1sTIUVmoA04yMgnQIfTXVMemTrmbXqaK3WDSzIRWUHxm%2FLzrY5%2BY0rsKY7XqBrsd9WBQw5%2FiAxQY6pgG8ulrjLOqWnTE8qTfOIvjsCRLn9FJ4%2BUcsdbNOX8aL9xKKfqB59S7WW2J%2BoTAlfAotT3d9pIhsLyp2Z7EngSfN8I8F05KutSKixKUYZA7EnMw0jG1KxIiOCqj1bWJ9I8ZmKtP6HmvgCjxYbyVh2NL9G3migIlW74yPpo9feC1wcBks6%2BtEIytOF4I%2FWCrduQYQU99czdlerRobgiWu%2Bgc1VCSmCXZW&X-Amz-Signature=6f1143bd8055cbf3ffa5ba0f7299607435ae23b591971d96ca98d8001a1f8c24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLM2JMAE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIFIVmI7OSc9Q%2FktjBKLQlIL%2FKYEo7ncbp5t6r5laCH7WAiBimG2VogMm4GwfuLl%2FA6Am%2FyDQ45WERQU6HlCKoLUANSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMya6jlICqBqz%2F%2FfBwKtwDtn2%2BmpszKUtS7K6rJXbYDXBxapoj%2Fk8SaXCc0epQs%2F0uMhvOFQG72xUVqa1YNbh5XsykqS7eKvMaXZa3H1CWFx6%2BeOtQ9Bim60%2BPDHaz%2BrNcjZuucyZawWqXKKSZ3IvHxHL6OdxN5DBcEJKTv4ydieOAc3Td8AcMSNLHJM519A9rGxQ97U%2BY7H33Z%2FaSXFQb6GgS6a0efojkwEaQftRQn1LbEwbH5nea2akF%2Bb7D%2FiIc%2Bcl9tzwuXopxd1hEISdVygyOdBMFG0DFypuXN3jssHm4QvB%2FFi%2FJ1H9Sa375NUuf7KWD4eyJrYw0WAd7MsSeDWkGlqJRg4KE9kmUkTXOSeZGso0CoyxXUbaNX3BXGwVN9Eo9OCEqv3d8klSPzxQ5eHK7OjWFLvRRpKC%2BtrxQChn0V3rCUgLY5a6so%2Bxz%2FyKgKZjWOtNA540Yw1TIDZa1nJe%2FKCDnJ0AxhHeSQJU8hJIT4X4Uo42AV1Go4iqvwE0sgrQd0T%2F9QQJPKvGn1G27muITNyWZFLNHdRppa4HgG7u4uXFzAuLXWm%2B6ezaoqQMfi%2BMaF5FTPrn1sTIUVmoA04yMgnQIfTXVMemTrmbXqaK3WDSzIRWUHxm%2FLzrY5%2BY0rsKY7XqBrsd9WBQw5%2FiAxQY6pgG8ulrjLOqWnTE8qTfOIvjsCRLn9FJ4%2BUcsdbNOX8aL9xKKfqB59S7WW2J%2BoTAlfAotT3d9pIhsLyp2Z7EngSfN8I8F05KutSKixKUYZA7EnMw0jG1KxIiOCqj1bWJ9I8ZmKtP6HmvgCjxYbyVh2NL9G3migIlW74yPpo9feC1wcBks6%2BtEIytOF4I%2FWCrduQYQU99czdlerRobgiWu%2Bgc1VCSmCXZW&X-Amz-Signature=196a3d55c90d3df91d51ecc4e6625448623fe601310e8e618d23e620b794f21c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLM2JMAE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIFIVmI7OSc9Q%2FktjBKLQlIL%2FKYEo7ncbp5t6r5laCH7WAiBimG2VogMm4GwfuLl%2FA6Am%2FyDQ45WERQU6HlCKoLUANSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMya6jlICqBqz%2F%2FfBwKtwDtn2%2BmpszKUtS7K6rJXbYDXBxapoj%2Fk8SaXCc0epQs%2F0uMhvOFQG72xUVqa1YNbh5XsykqS7eKvMaXZa3H1CWFx6%2BeOtQ9Bim60%2BPDHaz%2BrNcjZuucyZawWqXKKSZ3IvHxHL6OdxN5DBcEJKTv4ydieOAc3Td8AcMSNLHJM519A9rGxQ97U%2BY7H33Z%2FaSXFQb6GgS6a0efojkwEaQftRQn1LbEwbH5nea2akF%2Bb7D%2FiIc%2Bcl9tzwuXopxd1hEISdVygyOdBMFG0DFypuXN3jssHm4QvB%2FFi%2FJ1H9Sa375NUuf7KWD4eyJrYw0WAd7MsSeDWkGlqJRg4KE9kmUkTXOSeZGso0CoyxXUbaNX3BXGwVN9Eo9OCEqv3d8klSPzxQ5eHK7OjWFLvRRpKC%2BtrxQChn0V3rCUgLY5a6so%2Bxz%2FyKgKZjWOtNA540Yw1TIDZa1nJe%2FKCDnJ0AxhHeSQJU8hJIT4X4Uo42AV1Go4iqvwE0sgrQd0T%2F9QQJPKvGn1G27muITNyWZFLNHdRppa4HgG7u4uXFzAuLXWm%2B6ezaoqQMfi%2BMaF5FTPrn1sTIUVmoA04yMgnQIfTXVMemTrmbXqaK3WDSzIRWUHxm%2FLzrY5%2BY0rsKY7XqBrsd9WBQw5%2FiAxQY6pgG8ulrjLOqWnTE8qTfOIvjsCRLn9FJ4%2BUcsdbNOX8aL9xKKfqB59S7WW2J%2BoTAlfAotT3d9pIhsLyp2Z7EngSfN8I8F05KutSKixKUYZA7EnMw0jG1KxIiOCqj1bWJ9I8ZmKtP6HmvgCjxYbyVh2NL9G3migIlW74yPpo9feC1wcBks6%2BtEIytOF4I%2FWCrduQYQU99czdlerRobgiWu%2Bgc1VCSmCXZW&X-Amz-Signature=b6660047cd0a6aa18d21dc400f943689b284bdf99c800573b16e827546881863&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLM2JMAE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIFIVmI7OSc9Q%2FktjBKLQlIL%2FKYEo7ncbp5t6r5laCH7WAiBimG2VogMm4GwfuLl%2FA6Am%2FyDQ45WERQU6HlCKoLUANSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMya6jlICqBqz%2F%2FfBwKtwDtn2%2BmpszKUtS7K6rJXbYDXBxapoj%2Fk8SaXCc0epQs%2F0uMhvOFQG72xUVqa1YNbh5XsykqS7eKvMaXZa3H1CWFx6%2BeOtQ9Bim60%2BPDHaz%2BrNcjZuucyZawWqXKKSZ3IvHxHL6OdxN5DBcEJKTv4ydieOAc3Td8AcMSNLHJM519A9rGxQ97U%2BY7H33Z%2FaSXFQb6GgS6a0efojkwEaQftRQn1LbEwbH5nea2akF%2Bb7D%2FiIc%2Bcl9tzwuXopxd1hEISdVygyOdBMFG0DFypuXN3jssHm4QvB%2FFi%2FJ1H9Sa375NUuf7KWD4eyJrYw0WAd7MsSeDWkGlqJRg4KE9kmUkTXOSeZGso0CoyxXUbaNX3BXGwVN9Eo9OCEqv3d8klSPzxQ5eHK7OjWFLvRRpKC%2BtrxQChn0V3rCUgLY5a6so%2Bxz%2FyKgKZjWOtNA540Yw1TIDZa1nJe%2FKCDnJ0AxhHeSQJU8hJIT4X4Uo42AV1Go4iqvwE0sgrQd0T%2F9QQJPKvGn1G27muITNyWZFLNHdRppa4HgG7u4uXFzAuLXWm%2B6ezaoqQMfi%2BMaF5FTPrn1sTIUVmoA04yMgnQIfTXVMemTrmbXqaK3WDSzIRWUHxm%2FLzrY5%2BY0rsKY7XqBrsd9WBQw5%2FiAxQY6pgG8ulrjLOqWnTE8qTfOIvjsCRLn9FJ4%2BUcsdbNOX8aL9xKKfqB59S7WW2J%2BoTAlfAotT3d9pIhsLyp2Z7EngSfN8I8F05KutSKixKUYZA7EnMw0jG1KxIiOCqj1bWJ9I8ZmKtP6HmvgCjxYbyVh2NL9G3migIlW74yPpo9feC1wcBks6%2BtEIytOF4I%2FWCrduQYQU99czdlerRobgiWu%2Bgc1VCSmCXZW&X-Amz-Signature=9360f99e59ff80a925acc9c78187b4fed8fe0c3e9eaeb5bdd35a10e8bfa69c73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLM2JMAE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIFIVmI7OSc9Q%2FktjBKLQlIL%2FKYEo7ncbp5t6r5laCH7WAiBimG2VogMm4GwfuLl%2FA6Am%2FyDQ45WERQU6HlCKoLUANSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMya6jlICqBqz%2F%2FfBwKtwDtn2%2BmpszKUtS7K6rJXbYDXBxapoj%2Fk8SaXCc0epQs%2F0uMhvOFQG72xUVqa1YNbh5XsykqS7eKvMaXZa3H1CWFx6%2BeOtQ9Bim60%2BPDHaz%2BrNcjZuucyZawWqXKKSZ3IvHxHL6OdxN5DBcEJKTv4ydieOAc3Td8AcMSNLHJM519A9rGxQ97U%2BY7H33Z%2FaSXFQb6GgS6a0efojkwEaQftRQn1LbEwbH5nea2akF%2Bb7D%2FiIc%2Bcl9tzwuXopxd1hEISdVygyOdBMFG0DFypuXN3jssHm4QvB%2FFi%2FJ1H9Sa375NUuf7KWD4eyJrYw0WAd7MsSeDWkGlqJRg4KE9kmUkTXOSeZGso0CoyxXUbaNX3BXGwVN9Eo9OCEqv3d8klSPzxQ5eHK7OjWFLvRRpKC%2BtrxQChn0V3rCUgLY5a6so%2Bxz%2FyKgKZjWOtNA540Yw1TIDZa1nJe%2FKCDnJ0AxhHeSQJU8hJIT4X4Uo42AV1Go4iqvwE0sgrQd0T%2F9QQJPKvGn1G27muITNyWZFLNHdRppa4HgG7u4uXFzAuLXWm%2B6ezaoqQMfi%2BMaF5FTPrn1sTIUVmoA04yMgnQIfTXVMemTrmbXqaK3WDSzIRWUHxm%2FLzrY5%2BY0rsKY7XqBrsd9WBQw5%2FiAxQY6pgG8ulrjLOqWnTE8qTfOIvjsCRLn9FJ4%2BUcsdbNOX8aL9xKKfqB59S7WW2J%2BoTAlfAotT3d9pIhsLyp2Z7EngSfN8I8F05KutSKixKUYZA7EnMw0jG1KxIiOCqj1bWJ9I8ZmKtP6HmvgCjxYbyVh2NL9G3migIlW74yPpo9feC1wcBks6%2BtEIytOF4I%2FWCrduQYQU99czdlerRobgiWu%2Bgc1VCSmCXZW&X-Amz-Signature=737ba0474916ea47fc971e4185b3acc7503d792440c7909fd1e557560715ef59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLM2JMAE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIFIVmI7OSc9Q%2FktjBKLQlIL%2FKYEo7ncbp5t6r5laCH7WAiBimG2VogMm4GwfuLl%2FA6Am%2FyDQ45WERQU6HlCKoLUANSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMya6jlICqBqz%2F%2FfBwKtwDtn2%2BmpszKUtS7K6rJXbYDXBxapoj%2Fk8SaXCc0epQs%2F0uMhvOFQG72xUVqa1YNbh5XsykqS7eKvMaXZa3H1CWFx6%2BeOtQ9Bim60%2BPDHaz%2BrNcjZuucyZawWqXKKSZ3IvHxHL6OdxN5DBcEJKTv4ydieOAc3Td8AcMSNLHJM519A9rGxQ97U%2BY7H33Z%2FaSXFQb6GgS6a0efojkwEaQftRQn1LbEwbH5nea2akF%2Bb7D%2FiIc%2Bcl9tzwuXopxd1hEISdVygyOdBMFG0DFypuXN3jssHm4QvB%2FFi%2FJ1H9Sa375NUuf7KWD4eyJrYw0WAd7MsSeDWkGlqJRg4KE9kmUkTXOSeZGso0CoyxXUbaNX3BXGwVN9Eo9OCEqv3d8klSPzxQ5eHK7OjWFLvRRpKC%2BtrxQChn0V3rCUgLY5a6so%2Bxz%2FyKgKZjWOtNA540Yw1TIDZa1nJe%2FKCDnJ0AxhHeSQJU8hJIT4X4Uo42AV1Go4iqvwE0sgrQd0T%2F9QQJPKvGn1G27muITNyWZFLNHdRppa4HgG7u4uXFzAuLXWm%2B6ezaoqQMfi%2BMaF5FTPrn1sTIUVmoA04yMgnQIfTXVMemTrmbXqaK3WDSzIRWUHxm%2FLzrY5%2BY0rsKY7XqBrsd9WBQw5%2FiAxQY6pgG8ulrjLOqWnTE8qTfOIvjsCRLn9FJ4%2BUcsdbNOX8aL9xKKfqB59S7WW2J%2BoTAlfAotT3d9pIhsLyp2Z7EngSfN8I8F05KutSKixKUYZA7EnMw0jG1KxIiOCqj1bWJ9I8ZmKtP6HmvgCjxYbyVh2NL9G3migIlW74yPpo9feC1wcBks6%2BtEIytOF4I%2FWCrduQYQU99czdlerRobgiWu%2Bgc1VCSmCXZW&X-Amz-Signature=b22cd8dfad7471521ffc5211f452ce2ad57e22fd49f7b583a8622b540f528b43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLM2JMAE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIFIVmI7OSc9Q%2FktjBKLQlIL%2FKYEo7ncbp5t6r5laCH7WAiBimG2VogMm4GwfuLl%2FA6Am%2FyDQ45WERQU6HlCKoLUANSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMya6jlICqBqz%2F%2FfBwKtwDtn2%2BmpszKUtS7K6rJXbYDXBxapoj%2Fk8SaXCc0epQs%2F0uMhvOFQG72xUVqa1YNbh5XsykqS7eKvMaXZa3H1CWFx6%2BeOtQ9Bim60%2BPDHaz%2BrNcjZuucyZawWqXKKSZ3IvHxHL6OdxN5DBcEJKTv4ydieOAc3Td8AcMSNLHJM519A9rGxQ97U%2BY7H33Z%2FaSXFQb6GgS6a0efojkwEaQftRQn1LbEwbH5nea2akF%2Bb7D%2FiIc%2Bcl9tzwuXopxd1hEISdVygyOdBMFG0DFypuXN3jssHm4QvB%2FFi%2FJ1H9Sa375NUuf7KWD4eyJrYw0WAd7MsSeDWkGlqJRg4KE9kmUkTXOSeZGso0CoyxXUbaNX3BXGwVN9Eo9OCEqv3d8klSPzxQ5eHK7OjWFLvRRpKC%2BtrxQChn0V3rCUgLY5a6so%2Bxz%2FyKgKZjWOtNA540Yw1TIDZa1nJe%2FKCDnJ0AxhHeSQJU8hJIT4X4Uo42AV1Go4iqvwE0sgrQd0T%2F9QQJPKvGn1G27muITNyWZFLNHdRppa4HgG7u4uXFzAuLXWm%2B6ezaoqQMfi%2BMaF5FTPrn1sTIUVmoA04yMgnQIfTXVMemTrmbXqaK3WDSzIRWUHxm%2FLzrY5%2BY0rsKY7XqBrsd9WBQw5%2FiAxQY6pgG8ulrjLOqWnTE8qTfOIvjsCRLn9FJ4%2BUcsdbNOX8aL9xKKfqB59S7WW2J%2BoTAlfAotT3d9pIhsLyp2Z7EngSfN8I8F05KutSKixKUYZA7EnMw0jG1KxIiOCqj1bWJ9I8ZmKtP6HmvgCjxYbyVh2NL9G3migIlW74yPpo9feC1wcBks6%2BtEIytOF4I%2FWCrduQYQU99czdlerRobgiWu%2Bgc1VCSmCXZW&X-Amz-Signature=de7dafc0af7181006c7e0b8d95a60ef019e6c9e3571712a5600b08fe65c114b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLM2JMAE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIFIVmI7OSc9Q%2FktjBKLQlIL%2FKYEo7ncbp5t6r5laCH7WAiBimG2VogMm4GwfuLl%2FA6Am%2FyDQ45WERQU6HlCKoLUANSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMya6jlICqBqz%2F%2FfBwKtwDtn2%2BmpszKUtS7K6rJXbYDXBxapoj%2Fk8SaXCc0epQs%2F0uMhvOFQG72xUVqa1YNbh5XsykqS7eKvMaXZa3H1CWFx6%2BeOtQ9Bim60%2BPDHaz%2BrNcjZuucyZawWqXKKSZ3IvHxHL6OdxN5DBcEJKTv4ydieOAc3Td8AcMSNLHJM519A9rGxQ97U%2BY7H33Z%2FaSXFQb6GgS6a0efojkwEaQftRQn1LbEwbH5nea2akF%2Bb7D%2FiIc%2Bcl9tzwuXopxd1hEISdVygyOdBMFG0DFypuXN3jssHm4QvB%2FFi%2FJ1H9Sa375NUuf7KWD4eyJrYw0WAd7MsSeDWkGlqJRg4KE9kmUkTXOSeZGso0CoyxXUbaNX3BXGwVN9Eo9OCEqv3d8klSPzxQ5eHK7OjWFLvRRpKC%2BtrxQChn0V3rCUgLY5a6so%2Bxz%2FyKgKZjWOtNA540Yw1TIDZa1nJe%2FKCDnJ0AxhHeSQJU8hJIT4X4Uo42AV1Go4iqvwE0sgrQd0T%2F9QQJPKvGn1G27muITNyWZFLNHdRppa4HgG7u4uXFzAuLXWm%2B6ezaoqQMfi%2BMaF5FTPrn1sTIUVmoA04yMgnQIfTXVMemTrmbXqaK3WDSzIRWUHxm%2FLzrY5%2BY0rsKY7XqBrsd9WBQw5%2FiAxQY6pgG8ulrjLOqWnTE8qTfOIvjsCRLn9FJ4%2BUcsdbNOX8aL9xKKfqB59S7WW2J%2BoTAlfAotT3d9pIhsLyp2Z7EngSfN8I8F05KutSKixKUYZA7EnMw0jG1KxIiOCqj1bWJ9I8ZmKtP6HmvgCjxYbyVh2NL9G3migIlW74yPpo9feC1wcBks6%2BtEIytOF4I%2FWCrduQYQU99czdlerRobgiWu%2Bgc1VCSmCXZW&X-Amz-Signature=4e6acd18052feeceea5484c78bffff8567a6e1f42eab33beff30004f86d5e69d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLM2JMAE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIFIVmI7OSc9Q%2FktjBKLQlIL%2FKYEo7ncbp5t6r5laCH7WAiBimG2VogMm4GwfuLl%2FA6Am%2FyDQ45WERQU6HlCKoLUANSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMya6jlICqBqz%2F%2FfBwKtwDtn2%2BmpszKUtS7K6rJXbYDXBxapoj%2Fk8SaXCc0epQs%2F0uMhvOFQG72xUVqa1YNbh5XsykqS7eKvMaXZa3H1CWFx6%2BeOtQ9Bim60%2BPDHaz%2BrNcjZuucyZawWqXKKSZ3IvHxHL6OdxN5DBcEJKTv4ydieOAc3Td8AcMSNLHJM519A9rGxQ97U%2BY7H33Z%2FaSXFQb6GgS6a0efojkwEaQftRQn1LbEwbH5nea2akF%2Bb7D%2FiIc%2Bcl9tzwuXopxd1hEISdVygyOdBMFG0DFypuXN3jssHm4QvB%2FFi%2FJ1H9Sa375NUuf7KWD4eyJrYw0WAd7MsSeDWkGlqJRg4KE9kmUkTXOSeZGso0CoyxXUbaNX3BXGwVN9Eo9OCEqv3d8klSPzxQ5eHK7OjWFLvRRpKC%2BtrxQChn0V3rCUgLY5a6so%2Bxz%2FyKgKZjWOtNA540Yw1TIDZa1nJe%2FKCDnJ0AxhHeSQJU8hJIT4X4Uo42AV1Go4iqvwE0sgrQd0T%2F9QQJPKvGn1G27muITNyWZFLNHdRppa4HgG7u4uXFzAuLXWm%2B6ezaoqQMfi%2BMaF5FTPrn1sTIUVmoA04yMgnQIfTXVMemTrmbXqaK3WDSzIRWUHxm%2FLzrY5%2BY0rsKY7XqBrsd9WBQw5%2FiAxQY6pgG8ulrjLOqWnTE8qTfOIvjsCRLn9FJ4%2BUcsdbNOX8aL9xKKfqB59S7WW2J%2BoTAlfAotT3d9pIhsLyp2Z7EngSfN8I8F05KutSKixKUYZA7EnMw0jG1KxIiOCqj1bWJ9I8ZmKtP6HmvgCjxYbyVh2NL9G3migIlW74yPpo9feC1wcBks6%2BtEIytOF4I%2FWCrduQYQU99czdlerRobgiWu%2Bgc1VCSmCXZW&X-Amz-Signature=b6660047cd0a6aa18d21dc400f943689b284bdf99c800573b16e827546881863&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
