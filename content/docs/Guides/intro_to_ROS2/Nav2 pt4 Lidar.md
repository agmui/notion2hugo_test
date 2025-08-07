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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SXIR3N5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDIK4y9%2BlVmVvLmTDs66HKLMUWj85PKAXEqai2wRL3qDQIhAKbhTB1ML7lBWvoYiXFgRhesJPDmVJxctUuPQT%2BCpow0KogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5c7VjEBHuB3Ataqkq3AO5QiAyRiG77AA8uaYHxeSjaV9iKhykRcuVdGUn5x%2BZcz7DefUHahE1Cn9hmhQPAdqgJHtIMdenBHRK80kWsAr3RnslZUb5u57HYmyownvFCxs%2FaChWWtgr74nUCuIDWUsGBsk7H5nthdiGkfP7UZv6hd1R8SwVc3lJaHMTiEu1Mae%2F%2FvAEljwQGxH2KKie5QhPq93W%2FeqFy1rovMWG3CojVJt4%2Fq%2Fwv6nBj69mzqMcS8y1x4MExesOa%2FfCxL9QTuVabqe4EanW8eR2%2BreqfzCZrzmw5FDx8pzG%2BuvIGRalaBkC9zzmQS%2BrIsv8XQ5MCQkjw5yiJA5Fufy9P3osNpiiewmE5WHmkU2BgYMc9EoQB3l0TSGCV5CW7FM9xGGJe4SdVZGOQ5%2F1smC6JmSgX%2FLxI%2BaNEx68Sm6fKg7aQiRMxgpt1Wl8KWwrrsd496XgXrYrR%2BXYwmK612jFsbKf%2FR%2BJo5S0B3ziaVx%2BhAFXdz%2FJY4imXNz%2FsddRxGe3xNmUXluK1WOTiq3yTL%2BsHZ22WcwOIYGaK8nH2qICA3RNp60Mq1SjB%2Bl6DQysWWDcQVMGrmIKzDqWpyRGWn7Zkrozw7l%2F73gMganhp8tjq5a3HHw%2FqG7%2BBfmaYbpKlVT6aTCT7dDEBjqkATPAEgdDpqy%2B5PvQMqLl4q%2BchkUo9EYVVfRqGMJPHb0k%2FkcgXDbgSto104sCchUL03rlURReyio%2BdG9H2guTCj2Ze6U7TERr9cSM9%2Bcq%2FM%2BIpHf0oMOd7sH%2BbWyufLZ4jPLEWTcAlY7pWADDHj%2F%2BDo6hS2XAJLz7BNYyJYM6GN%2BTzICbJYjg9ipEQmMJQ6rR93g0%2FddN0aro%2F93r%2FbibOQtJL794&X-Amz-Signature=c01ae0cd1b12e0a95c6d718ad6aecc1f93ec08925daa136259f29074eea59e00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4KWRBP2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCCeAR3CbsfJoQRQCrxNe5IOfYDLvIOErlGqGH9UBY2ZQIgQjbAYmtrIskRMU0QQ9rNPT06O7h%2FTGPiCqD%2BPTqmkEUqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcPDw6dUX92jOt3oyrcA%2BAKUczcQrSg4MxBPZMGjDJTG0jwO%2FWr48dQZBoVHwQnKJYEkfWogU610whAJhgi1388jl4oEoTBI2AfqcIzLy4sdZs0zoXT0nzVPrPJoLwUZslnyWV69b1pYnftpxucCqaTIzQwL4yvuR2v1FIsOix2bU1Oli4rSpQqDbGkyn8X3eFv9WElS4KL96t70pUcM5q%2FbE6TFaPb04aExJZFt0acDKt6TI5Ol%2BmraPkeRHuOFKUc77FVhwRoUl%2FR7dUUawwdGanOiSXFqBYT2rpZAGy6XXwrBA%2BhsYRtMyzpCDPwszlJ5nGFZI%2BntG254CCwbUlu5OfGK%2FeYMYRN%2BTfu%2FOOREXik530sAyCU0PjAKSnYcMwVJh1owS0yVtJFGM77NmhuHTYt3YGVKUihFYHbyEPC9o2mCqsrzvs6zY%2BnpnIz%2BaPZKsBYcC8BhoHyapAvlaMK%2F0kKzhjzEAhqgSPo2rGRkwhquGqeP6safQSKNcJx8SCABcmot2FdPuOyCoNc3Zzz2zyR76CRbJkrf7kMj%2FRcJqwr2BCDOQBkI6O10Bb38voc3fV0jb57%2FlYQIoTNuFEACoX%2BiPEnzL7b4IBYnGDKfBk4OwgnMhvmFaN70ejYv0lqEFeanQSa%2FSpiMIDt0MQGOqUBzVAdxZ9aRUUU2kGIKhj1bjemyAW9QNGUm65WUHBBWzj9oIzpHYrULunKXLkFyb6kcVkvIK7pzPjSfTlR3kve3sXei0y98Mtdqama4CLCdoqrx9LRaOjVjxxe00lhwe9MqJugHTCWZfGp31Xz1RNDJ5xR5OoGKeJ%2Bd70OKLF8wYFQC0pLa1CV6s23RCfJKj5ROHgWOSzDvJeIXHM5ZNTrRcIkUi3U&X-Amz-Signature=1d7a611513c3883cd3cdb06f8742a390186c44b433432df82e67b1e282ef3787&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4KWRBP2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCCeAR3CbsfJoQRQCrxNe5IOfYDLvIOErlGqGH9UBY2ZQIgQjbAYmtrIskRMU0QQ9rNPT06O7h%2FTGPiCqD%2BPTqmkEUqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcPDw6dUX92jOt3oyrcA%2BAKUczcQrSg4MxBPZMGjDJTG0jwO%2FWr48dQZBoVHwQnKJYEkfWogU610whAJhgi1388jl4oEoTBI2AfqcIzLy4sdZs0zoXT0nzVPrPJoLwUZslnyWV69b1pYnftpxucCqaTIzQwL4yvuR2v1FIsOix2bU1Oli4rSpQqDbGkyn8X3eFv9WElS4KL96t70pUcM5q%2FbE6TFaPb04aExJZFt0acDKt6TI5Ol%2BmraPkeRHuOFKUc77FVhwRoUl%2FR7dUUawwdGanOiSXFqBYT2rpZAGy6XXwrBA%2BhsYRtMyzpCDPwszlJ5nGFZI%2BntG254CCwbUlu5OfGK%2FeYMYRN%2BTfu%2FOOREXik530sAyCU0PjAKSnYcMwVJh1owS0yVtJFGM77NmhuHTYt3YGVKUihFYHbyEPC9o2mCqsrzvs6zY%2BnpnIz%2BaPZKsBYcC8BhoHyapAvlaMK%2F0kKzhjzEAhqgSPo2rGRkwhquGqeP6safQSKNcJx8SCABcmot2FdPuOyCoNc3Zzz2zyR76CRbJkrf7kMj%2FRcJqwr2BCDOQBkI6O10Bb38voc3fV0jb57%2FlYQIoTNuFEACoX%2BiPEnzL7b4IBYnGDKfBk4OwgnMhvmFaN70ejYv0lqEFeanQSa%2FSpiMIDt0MQGOqUBzVAdxZ9aRUUU2kGIKhj1bjemyAW9QNGUm65WUHBBWzj9oIzpHYrULunKXLkFyb6kcVkvIK7pzPjSfTlR3kve3sXei0y98Mtdqama4CLCdoqrx9LRaOjVjxxe00lhwe9MqJugHTCWZfGp31Xz1RNDJ5xR5OoGKeJ%2Bd70OKLF8wYFQC0pLa1CV6s23RCfJKj5ROHgWOSzDvJeIXHM5ZNTrRcIkUi3U&X-Amz-Signature=41f101ad681e395257ec416231c52cc13ee115102a4eaefd191a27d5a0fada8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4KWRBP2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCCeAR3CbsfJoQRQCrxNe5IOfYDLvIOErlGqGH9UBY2ZQIgQjbAYmtrIskRMU0QQ9rNPT06O7h%2FTGPiCqD%2BPTqmkEUqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcPDw6dUX92jOt3oyrcA%2BAKUczcQrSg4MxBPZMGjDJTG0jwO%2FWr48dQZBoVHwQnKJYEkfWogU610whAJhgi1388jl4oEoTBI2AfqcIzLy4sdZs0zoXT0nzVPrPJoLwUZslnyWV69b1pYnftpxucCqaTIzQwL4yvuR2v1FIsOix2bU1Oli4rSpQqDbGkyn8X3eFv9WElS4KL96t70pUcM5q%2FbE6TFaPb04aExJZFt0acDKt6TI5Ol%2BmraPkeRHuOFKUc77FVhwRoUl%2FR7dUUawwdGanOiSXFqBYT2rpZAGy6XXwrBA%2BhsYRtMyzpCDPwszlJ5nGFZI%2BntG254CCwbUlu5OfGK%2FeYMYRN%2BTfu%2FOOREXik530sAyCU0PjAKSnYcMwVJh1owS0yVtJFGM77NmhuHTYt3YGVKUihFYHbyEPC9o2mCqsrzvs6zY%2BnpnIz%2BaPZKsBYcC8BhoHyapAvlaMK%2F0kKzhjzEAhqgSPo2rGRkwhquGqeP6safQSKNcJx8SCABcmot2FdPuOyCoNc3Zzz2zyR76CRbJkrf7kMj%2FRcJqwr2BCDOQBkI6O10Bb38voc3fV0jb57%2FlYQIoTNuFEACoX%2BiPEnzL7b4IBYnGDKfBk4OwgnMhvmFaN70ejYv0lqEFeanQSa%2FSpiMIDt0MQGOqUBzVAdxZ9aRUUU2kGIKhj1bjemyAW9QNGUm65WUHBBWzj9oIzpHYrULunKXLkFyb6kcVkvIK7pzPjSfTlR3kve3sXei0y98Mtdqama4CLCdoqrx9LRaOjVjxxe00lhwe9MqJugHTCWZfGp31Xz1RNDJ5xR5OoGKeJ%2Bd70OKLF8wYFQC0pLa1CV6s23RCfJKj5ROHgWOSzDvJeIXHM5ZNTrRcIkUi3U&X-Amz-Signature=8c577aae49735d47a9be3cad2820fd90f2257db58212d13ed74dcd8e2672c4b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4KWRBP2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCCeAR3CbsfJoQRQCrxNe5IOfYDLvIOErlGqGH9UBY2ZQIgQjbAYmtrIskRMU0QQ9rNPT06O7h%2FTGPiCqD%2BPTqmkEUqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcPDw6dUX92jOt3oyrcA%2BAKUczcQrSg4MxBPZMGjDJTG0jwO%2FWr48dQZBoVHwQnKJYEkfWogU610whAJhgi1388jl4oEoTBI2AfqcIzLy4sdZs0zoXT0nzVPrPJoLwUZslnyWV69b1pYnftpxucCqaTIzQwL4yvuR2v1FIsOix2bU1Oli4rSpQqDbGkyn8X3eFv9WElS4KL96t70pUcM5q%2FbE6TFaPb04aExJZFt0acDKt6TI5Ol%2BmraPkeRHuOFKUc77FVhwRoUl%2FR7dUUawwdGanOiSXFqBYT2rpZAGy6XXwrBA%2BhsYRtMyzpCDPwszlJ5nGFZI%2BntG254CCwbUlu5OfGK%2FeYMYRN%2BTfu%2FOOREXik530sAyCU0PjAKSnYcMwVJh1owS0yVtJFGM77NmhuHTYt3YGVKUihFYHbyEPC9o2mCqsrzvs6zY%2BnpnIz%2BaPZKsBYcC8BhoHyapAvlaMK%2F0kKzhjzEAhqgSPo2rGRkwhquGqeP6safQSKNcJx8SCABcmot2FdPuOyCoNc3Zzz2zyR76CRbJkrf7kMj%2FRcJqwr2BCDOQBkI6O10Bb38voc3fV0jb57%2FlYQIoTNuFEACoX%2BiPEnzL7b4IBYnGDKfBk4OwgnMhvmFaN70ejYv0lqEFeanQSa%2FSpiMIDt0MQGOqUBzVAdxZ9aRUUU2kGIKhj1bjemyAW9QNGUm65WUHBBWzj9oIzpHYrULunKXLkFyb6kcVkvIK7pzPjSfTlR3kve3sXei0y98Mtdqama4CLCdoqrx9LRaOjVjxxe00lhwe9MqJugHTCWZfGp31Xz1RNDJ5xR5OoGKeJ%2Bd70OKLF8wYFQC0pLa1CV6s23RCfJKj5ROHgWOSzDvJeIXHM5ZNTrRcIkUi3U&X-Amz-Signature=c9f43d7c6137774d2c94aacfcf4337f47a6079e36670d3c0f0b5c94d52ad7c6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4KWRBP2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCCeAR3CbsfJoQRQCrxNe5IOfYDLvIOErlGqGH9UBY2ZQIgQjbAYmtrIskRMU0QQ9rNPT06O7h%2FTGPiCqD%2BPTqmkEUqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcPDw6dUX92jOt3oyrcA%2BAKUczcQrSg4MxBPZMGjDJTG0jwO%2FWr48dQZBoVHwQnKJYEkfWogU610whAJhgi1388jl4oEoTBI2AfqcIzLy4sdZs0zoXT0nzVPrPJoLwUZslnyWV69b1pYnftpxucCqaTIzQwL4yvuR2v1FIsOix2bU1Oli4rSpQqDbGkyn8X3eFv9WElS4KL96t70pUcM5q%2FbE6TFaPb04aExJZFt0acDKt6TI5Ol%2BmraPkeRHuOFKUc77FVhwRoUl%2FR7dUUawwdGanOiSXFqBYT2rpZAGy6XXwrBA%2BhsYRtMyzpCDPwszlJ5nGFZI%2BntG254CCwbUlu5OfGK%2FeYMYRN%2BTfu%2FOOREXik530sAyCU0PjAKSnYcMwVJh1owS0yVtJFGM77NmhuHTYt3YGVKUihFYHbyEPC9o2mCqsrzvs6zY%2BnpnIz%2BaPZKsBYcC8BhoHyapAvlaMK%2F0kKzhjzEAhqgSPo2rGRkwhquGqeP6safQSKNcJx8SCABcmot2FdPuOyCoNc3Zzz2zyR76CRbJkrf7kMj%2FRcJqwr2BCDOQBkI6O10Bb38voc3fV0jb57%2FlYQIoTNuFEACoX%2BiPEnzL7b4IBYnGDKfBk4OwgnMhvmFaN70ejYv0lqEFeanQSa%2FSpiMIDt0MQGOqUBzVAdxZ9aRUUU2kGIKhj1bjemyAW9QNGUm65WUHBBWzj9oIzpHYrULunKXLkFyb6kcVkvIK7pzPjSfTlR3kve3sXei0y98Mtdqama4CLCdoqrx9LRaOjVjxxe00lhwe9MqJugHTCWZfGp31Xz1RNDJ5xR5OoGKeJ%2Bd70OKLF8wYFQC0pLa1CV6s23RCfJKj5ROHgWOSzDvJeIXHM5ZNTrRcIkUi3U&X-Amz-Signature=66696bd586f2ec115641e47a462b36301c4ac6b3586a44d4744b9676b977b923&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4KWRBP2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCCeAR3CbsfJoQRQCrxNe5IOfYDLvIOErlGqGH9UBY2ZQIgQjbAYmtrIskRMU0QQ9rNPT06O7h%2FTGPiCqD%2BPTqmkEUqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcPDw6dUX92jOt3oyrcA%2BAKUczcQrSg4MxBPZMGjDJTG0jwO%2FWr48dQZBoVHwQnKJYEkfWogU610whAJhgi1388jl4oEoTBI2AfqcIzLy4sdZs0zoXT0nzVPrPJoLwUZslnyWV69b1pYnftpxucCqaTIzQwL4yvuR2v1FIsOix2bU1Oli4rSpQqDbGkyn8X3eFv9WElS4KL96t70pUcM5q%2FbE6TFaPb04aExJZFt0acDKt6TI5Ol%2BmraPkeRHuOFKUc77FVhwRoUl%2FR7dUUawwdGanOiSXFqBYT2rpZAGy6XXwrBA%2BhsYRtMyzpCDPwszlJ5nGFZI%2BntG254CCwbUlu5OfGK%2FeYMYRN%2BTfu%2FOOREXik530sAyCU0PjAKSnYcMwVJh1owS0yVtJFGM77NmhuHTYt3YGVKUihFYHbyEPC9o2mCqsrzvs6zY%2BnpnIz%2BaPZKsBYcC8BhoHyapAvlaMK%2F0kKzhjzEAhqgSPo2rGRkwhquGqeP6safQSKNcJx8SCABcmot2FdPuOyCoNc3Zzz2zyR76CRbJkrf7kMj%2FRcJqwr2BCDOQBkI6O10Bb38voc3fV0jb57%2FlYQIoTNuFEACoX%2BiPEnzL7b4IBYnGDKfBk4OwgnMhvmFaN70ejYv0lqEFeanQSa%2FSpiMIDt0MQGOqUBzVAdxZ9aRUUU2kGIKhj1bjemyAW9QNGUm65WUHBBWzj9oIzpHYrULunKXLkFyb6kcVkvIK7pzPjSfTlR3kve3sXei0y98Mtdqama4CLCdoqrx9LRaOjVjxxe00lhwe9MqJugHTCWZfGp31Xz1RNDJ5xR5OoGKeJ%2Bd70OKLF8wYFQC0pLa1CV6s23RCfJKj5ROHgWOSzDvJeIXHM5ZNTrRcIkUi3U&X-Amz-Signature=0c891123738f5d6f4efd5b1723b2801c32ae653979517954e73dafab6441835f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4KWRBP2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCCeAR3CbsfJoQRQCrxNe5IOfYDLvIOErlGqGH9UBY2ZQIgQjbAYmtrIskRMU0QQ9rNPT06O7h%2FTGPiCqD%2BPTqmkEUqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcPDw6dUX92jOt3oyrcA%2BAKUczcQrSg4MxBPZMGjDJTG0jwO%2FWr48dQZBoVHwQnKJYEkfWogU610whAJhgi1388jl4oEoTBI2AfqcIzLy4sdZs0zoXT0nzVPrPJoLwUZslnyWV69b1pYnftpxucCqaTIzQwL4yvuR2v1FIsOix2bU1Oli4rSpQqDbGkyn8X3eFv9WElS4KL96t70pUcM5q%2FbE6TFaPb04aExJZFt0acDKt6TI5Ol%2BmraPkeRHuOFKUc77FVhwRoUl%2FR7dUUawwdGanOiSXFqBYT2rpZAGy6XXwrBA%2BhsYRtMyzpCDPwszlJ5nGFZI%2BntG254CCwbUlu5OfGK%2FeYMYRN%2BTfu%2FOOREXik530sAyCU0PjAKSnYcMwVJh1owS0yVtJFGM77NmhuHTYt3YGVKUihFYHbyEPC9o2mCqsrzvs6zY%2BnpnIz%2BaPZKsBYcC8BhoHyapAvlaMK%2F0kKzhjzEAhqgSPo2rGRkwhquGqeP6safQSKNcJx8SCABcmot2FdPuOyCoNc3Zzz2zyR76CRbJkrf7kMj%2FRcJqwr2BCDOQBkI6O10Bb38voc3fV0jb57%2FlYQIoTNuFEACoX%2BiPEnzL7b4IBYnGDKfBk4OwgnMhvmFaN70ejYv0lqEFeanQSa%2FSpiMIDt0MQGOqUBzVAdxZ9aRUUU2kGIKhj1bjemyAW9QNGUm65WUHBBWzj9oIzpHYrULunKXLkFyb6kcVkvIK7pzPjSfTlR3kve3sXei0y98Mtdqama4CLCdoqrx9LRaOjVjxxe00lhwe9MqJugHTCWZfGp31Xz1RNDJ5xR5OoGKeJ%2Bd70OKLF8wYFQC0pLa1CV6s23RCfJKj5ROHgWOSzDvJeIXHM5ZNTrRcIkUi3U&X-Amz-Signature=2d2aaa86187ecb4e36267487276a32ef00b3425b565e8fd7b125c21a726d7c18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4KWRBP2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCCeAR3CbsfJoQRQCrxNe5IOfYDLvIOErlGqGH9UBY2ZQIgQjbAYmtrIskRMU0QQ9rNPT06O7h%2FTGPiCqD%2BPTqmkEUqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcPDw6dUX92jOt3oyrcA%2BAKUczcQrSg4MxBPZMGjDJTG0jwO%2FWr48dQZBoVHwQnKJYEkfWogU610whAJhgi1388jl4oEoTBI2AfqcIzLy4sdZs0zoXT0nzVPrPJoLwUZslnyWV69b1pYnftpxucCqaTIzQwL4yvuR2v1FIsOix2bU1Oli4rSpQqDbGkyn8X3eFv9WElS4KL96t70pUcM5q%2FbE6TFaPb04aExJZFt0acDKt6TI5Ol%2BmraPkeRHuOFKUc77FVhwRoUl%2FR7dUUawwdGanOiSXFqBYT2rpZAGy6XXwrBA%2BhsYRtMyzpCDPwszlJ5nGFZI%2BntG254CCwbUlu5OfGK%2FeYMYRN%2BTfu%2FOOREXik530sAyCU0PjAKSnYcMwVJh1owS0yVtJFGM77NmhuHTYt3YGVKUihFYHbyEPC9o2mCqsrzvs6zY%2BnpnIz%2BaPZKsBYcC8BhoHyapAvlaMK%2F0kKzhjzEAhqgSPo2rGRkwhquGqeP6safQSKNcJx8SCABcmot2FdPuOyCoNc3Zzz2zyR76CRbJkrf7kMj%2FRcJqwr2BCDOQBkI6O10Bb38voc3fV0jb57%2FlYQIoTNuFEACoX%2BiPEnzL7b4IBYnGDKfBk4OwgnMhvmFaN70ejYv0lqEFeanQSa%2FSpiMIDt0MQGOqUBzVAdxZ9aRUUU2kGIKhj1bjemyAW9QNGUm65WUHBBWzj9oIzpHYrULunKXLkFyb6kcVkvIK7pzPjSfTlR3kve3sXei0y98Mtdqama4CLCdoqrx9LRaOjVjxxe00lhwe9MqJugHTCWZfGp31Xz1RNDJ5xR5OoGKeJ%2Bd70OKLF8wYFQC0pLa1CV6s23RCfJKj5ROHgWOSzDvJeIXHM5ZNTrRcIkUi3U&X-Amz-Signature=b0f3afc17132a3f74d9f8de64a2d48ee81c99fcd260222d87fe5b21722fddfbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4KWRBP2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCCeAR3CbsfJoQRQCrxNe5IOfYDLvIOErlGqGH9UBY2ZQIgQjbAYmtrIskRMU0QQ9rNPT06O7h%2FTGPiCqD%2BPTqmkEUqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcPDw6dUX92jOt3oyrcA%2BAKUczcQrSg4MxBPZMGjDJTG0jwO%2FWr48dQZBoVHwQnKJYEkfWogU610whAJhgi1388jl4oEoTBI2AfqcIzLy4sdZs0zoXT0nzVPrPJoLwUZslnyWV69b1pYnftpxucCqaTIzQwL4yvuR2v1FIsOix2bU1Oli4rSpQqDbGkyn8X3eFv9WElS4KL96t70pUcM5q%2FbE6TFaPb04aExJZFt0acDKt6TI5Ol%2BmraPkeRHuOFKUc77FVhwRoUl%2FR7dUUawwdGanOiSXFqBYT2rpZAGy6XXwrBA%2BhsYRtMyzpCDPwszlJ5nGFZI%2BntG254CCwbUlu5OfGK%2FeYMYRN%2BTfu%2FOOREXik530sAyCU0PjAKSnYcMwVJh1owS0yVtJFGM77NmhuHTYt3YGVKUihFYHbyEPC9o2mCqsrzvs6zY%2BnpnIz%2BaPZKsBYcC8BhoHyapAvlaMK%2F0kKzhjzEAhqgSPo2rGRkwhquGqeP6safQSKNcJx8SCABcmot2FdPuOyCoNc3Zzz2zyR76CRbJkrf7kMj%2FRcJqwr2BCDOQBkI6O10Bb38voc3fV0jb57%2FlYQIoTNuFEACoX%2BiPEnzL7b4IBYnGDKfBk4OwgnMhvmFaN70ejYv0lqEFeanQSa%2FSpiMIDt0MQGOqUBzVAdxZ9aRUUU2kGIKhj1bjemyAW9QNGUm65WUHBBWzj9oIzpHYrULunKXLkFyb6kcVkvIK7pzPjSfTlR3kve3sXei0y98Mtdqama4CLCdoqrx9LRaOjVjxxe00lhwe9MqJugHTCWZfGp31Xz1RNDJ5xR5OoGKeJ%2Bd70OKLF8wYFQC0pLa1CV6s23RCfJKj5ROHgWOSzDvJeIXHM5ZNTrRcIkUi3U&X-Amz-Signature=dee23f39f4e050a962ed12b38a1d15aa967a0f2101ad5a2091617881e123e54c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4KWRBP2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCCeAR3CbsfJoQRQCrxNe5IOfYDLvIOErlGqGH9UBY2ZQIgQjbAYmtrIskRMU0QQ9rNPT06O7h%2FTGPiCqD%2BPTqmkEUqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcPDw6dUX92jOt3oyrcA%2BAKUczcQrSg4MxBPZMGjDJTG0jwO%2FWr48dQZBoVHwQnKJYEkfWogU610whAJhgi1388jl4oEoTBI2AfqcIzLy4sdZs0zoXT0nzVPrPJoLwUZslnyWV69b1pYnftpxucCqaTIzQwL4yvuR2v1FIsOix2bU1Oli4rSpQqDbGkyn8X3eFv9WElS4KL96t70pUcM5q%2FbE6TFaPb04aExJZFt0acDKt6TI5Ol%2BmraPkeRHuOFKUc77FVhwRoUl%2FR7dUUawwdGanOiSXFqBYT2rpZAGy6XXwrBA%2BhsYRtMyzpCDPwszlJ5nGFZI%2BntG254CCwbUlu5OfGK%2FeYMYRN%2BTfu%2FOOREXik530sAyCU0PjAKSnYcMwVJh1owS0yVtJFGM77NmhuHTYt3YGVKUihFYHbyEPC9o2mCqsrzvs6zY%2BnpnIz%2BaPZKsBYcC8BhoHyapAvlaMK%2F0kKzhjzEAhqgSPo2rGRkwhquGqeP6safQSKNcJx8SCABcmot2FdPuOyCoNc3Zzz2zyR76CRbJkrf7kMj%2FRcJqwr2BCDOQBkI6O10Bb38voc3fV0jb57%2FlYQIoTNuFEACoX%2BiPEnzL7b4IBYnGDKfBk4OwgnMhvmFaN70ejYv0lqEFeanQSa%2FSpiMIDt0MQGOqUBzVAdxZ9aRUUU2kGIKhj1bjemyAW9QNGUm65WUHBBWzj9oIzpHYrULunKXLkFyb6kcVkvIK7pzPjSfTlR3kve3sXei0y98Mtdqama4CLCdoqrx9LRaOjVjxxe00lhwe9MqJugHTCWZfGp31Xz1RNDJ5xR5OoGKeJ%2Bd70OKLF8wYFQC0pLa1CV6s23RCfJKj5ROHgWOSzDvJeIXHM5ZNTrRcIkUi3U&X-Amz-Signature=c9f43d7c6137774d2c94aacfcf4337f47a6079e36670d3c0f0b5c94d52ad7c6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
