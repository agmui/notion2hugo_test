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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIPJSPPB%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FPxdsVARCzjZDplIDf%2FoodwJ9nXH71HobZGNGmW75mQIhALMxlZ4KDq09LOQjMPbGMBxwXkE4QwNX%2FS0QzjyJDr6XKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFio9W70xK7XycjJMq3AOfsynvG6A%2FllUPSN7XUXwGS1UBM8USp2Uy2DydIc3X3LUFL%2Bb7jnqtFyd4C1RIx%2BPfsodQmfzBjZ3XGbLLyAhVnmDKOUzERm2ubll4av%2BPgB0Q%2BW63qhbLSXkPPCJ%2FWkpOaU9IByhZrSRuzxQAQVkqfzq7J3hzpJjT4Ug9pmQdK08i8Ta33qH97Z5GnrngazV4%2BfW%2FQsnsVsDvULkfJnleV34pPV%2FSPPJon582iGd%2BMn5aIc4%2BVMzfTXHGLfKvdk32I4i5bReI1Bk4hdJR0YKw5V897%2FitwF%2Brfh%2FPB630ZcXn0uqyykISIpX2Z6Fs2QMs8XHnf1AXh76loxk4C8%2F6k2R5pRIsyBxk7ByqUGWIUOqN6AhjqK6HWJS4G423geSdsTPTsHLsbCO0Zl3PpqdmC3XHBNYRQm3osKslnfL1lNx5UdrLU7Xv7qz7cGRFkgvAx37fkZ0cEFKkinSk4BtKJ2rgLG%2B6m1PsOYuu9WXUATow9up5JfHcTp7tj8wj5Ee%2Fk4IoKuAsnr3sOPXdn8t7omKMy6Ehn4%2BWrWM4UEiCdKHxZjwinYRee%2BpZR7BxG0wuhsToxvUISO0MqI0Bj1zQFhlXESWSesS3tAemU2J9MDMHMnzDMW9DVtiqNDCV3bXLBjqkATAHpP9KbHdip0WnnRaPj%2Fxu931JksJ87DVvqKBnwWRBd%2Fs4NqurTi%2B8cYW9bdQ0GvW58eYAFJuKt5TRu8cg%2BiObKle8ccGqetTyr2wefCFdUu8Zx%2FvdAAA6R0ukD42HHH%2F1dR4cP8RmzKn0DREqQpGdJxvOVTkAj%2FOj60oQ5TB%2FdERuOqHDr91v5SN1PKa3HHtA2o9uB7fcsO15%2BX3seYXvcmZx&X-Amz-Signature=1bfad0b1dd1a221a0aebc6f3d46db31171b5f9f70873ebd51062e216670a6206&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466252QFDGY%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRFDHJ6fvbkuP6OHTbeO5C7BsqH6y9UWbLwvBCSorAvAiABUjmMmJNKwQlE8eH132iRP1PKywKfIVizPEbEdOaWySqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAwVO4wGcKYMNthimKtwDOoYRTLwrtxCLccmXQocqu0xK34h3Ps6NAE5AYDgC3z67RVmVfvzBvpn1OqzdcQqf5Q2C0WDNwgGeS%2B1iVDgR7w1CxiKkqgZEq3TmuavbXL849ydVUgG4a2WJ90i6nnd64HIKbaCm8t0ZRx3%2BqI%2Bl1hlJuJZkYy0m6nt4Ew%2Bn7NmC0gplMxnSF8pHE6koAZtouSJrBUOxUHaLBjoVDgxv%2B4x6EVwr853O1aS%2Fx%2Bsp9Y%2FLII4nR7C3o73n3zzK9EYT5UpTm192rEiIy8cPUYnLJYfK38QTUTaR6YiUO7sSfAUK4a73x76wYdJAoRj0nit6IV%2FL%2B7dnEgzRDzoY0su0q%2FOdjkpk5%2Febdr6y1WnFOWdJzRZdHr3s8z7Urc2SpSiFPBR2lbCq27LeGPXzzAXyuVWnzgdIvtpeWf9TcxJRLuSX8sBUwyBsDhafcp34bdVtVV%2BtJQ5HFd35PirxeNdgWE6HPwkqMT1jGwl1FXXJtBn554od%2Bns8BXBZF4YBONz8YcJ8qyN55IeOj56PH%2FkeySsW2sdlX%2B0mX13KJ2FhW5R1Vl4nwDR%2FAakNhHtrzFRJHlUOf4FZ74%2FlQfK40YYXgHTRggZXjbgtSNTMJ1ouZghF%2FE0A7Rmfj33sL1Awld21ywY6pgG4b6ngIeG5b8nMr%2BF%2FNKV7cnuVpk%2FIHLBhz6VFnxtO%2B1jWEEZyc56mXdPzFohNHb5zv2plRIJcx8bZxzh6QxAriugQ1u8CqjSRbT1ATn5RJnOuUv9LyEu1QGrhGfNNLInnveDNUsJHQEQXNjZEJ%2FLyVHg2mcNxZZRzAn4E3Up6ZuYoGn75MCRlokvUdFOFxKvRUkc0VoL0PY79Dk1FtSranSOfZWXf&X-Amz-Signature=a4747be5528e15fd52faba1649d046ba758a4aac0d47edd5ddcfc29e3152cbdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466252QFDGY%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRFDHJ6fvbkuP6OHTbeO5C7BsqH6y9UWbLwvBCSorAvAiABUjmMmJNKwQlE8eH132iRP1PKywKfIVizPEbEdOaWySqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAwVO4wGcKYMNthimKtwDOoYRTLwrtxCLccmXQocqu0xK34h3Ps6NAE5AYDgC3z67RVmVfvzBvpn1OqzdcQqf5Q2C0WDNwgGeS%2B1iVDgR7w1CxiKkqgZEq3TmuavbXL849ydVUgG4a2WJ90i6nnd64HIKbaCm8t0ZRx3%2BqI%2Bl1hlJuJZkYy0m6nt4Ew%2Bn7NmC0gplMxnSF8pHE6koAZtouSJrBUOxUHaLBjoVDgxv%2B4x6EVwr853O1aS%2Fx%2Bsp9Y%2FLII4nR7C3o73n3zzK9EYT5UpTm192rEiIy8cPUYnLJYfK38QTUTaR6YiUO7sSfAUK4a73x76wYdJAoRj0nit6IV%2FL%2B7dnEgzRDzoY0su0q%2FOdjkpk5%2Febdr6y1WnFOWdJzRZdHr3s8z7Urc2SpSiFPBR2lbCq27LeGPXzzAXyuVWnzgdIvtpeWf9TcxJRLuSX8sBUwyBsDhafcp34bdVtVV%2BtJQ5HFd35PirxeNdgWE6HPwkqMT1jGwl1FXXJtBn554od%2Bns8BXBZF4YBONz8YcJ8qyN55IeOj56PH%2FkeySsW2sdlX%2B0mX13KJ2FhW5R1Vl4nwDR%2FAakNhHtrzFRJHlUOf4FZ74%2FlQfK40YYXgHTRggZXjbgtSNTMJ1ouZghF%2FE0A7Rmfj33sL1Awld21ywY6pgG4b6ngIeG5b8nMr%2BF%2FNKV7cnuVpk%2FIHLBhz6VFnxtO%2B1jWEEZyc56mXdPzFohNHb5zv2plRIJcx8bZxzh6QxAriugQ1u8CqjSRbT1ATn5RJnOuUv9LyEu1QGrhGfNNLInnveDNUsJHQEQXNjZEJ%2FLyVHg2mcNxZZRzAn4E3Up6ZuYoGn75MCRlokvUdFOFxKvRUkc0VoL0PY79Dk1FtSranSOfZWXf&X-Amz-Signature=755cdb93893036eaf3f6e4103f0ae10c8ac6f7a7788e5cfd1bdd7b610206e478&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466252QFDGY%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRFDHJ6fvbkuP6OHTbeO5C7BsqH6y9UWbLwvBCSorAvAiABUjmMmJNKwQlE8eH132iRP1PKywKfIVizPEbEdOaWySqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAwVO4wGcKYMNthimKtwDOoYRTLwrtxCLccmXQocqu0xK34h3Ps6NAE5AYDgC3z67RVmVfvzBvpn1OqzdcQqf5Q2C0WDNwgGeS%2B1iVDgR7w1CxiKkqgZEq3TmuavbXL849ydVUgG4a2WJ90i6nnd64HIKbaCm8t0ZRx3%2BqI%2Bl1hlJuJZkYy0m6nt4Ew%2Bn7NmC0gplMxnSF8pHE6koAZtouSJrBUOxUHaLBjoVDgxv%2B4x6EVwr853O1aS%2Fx%2Bsp9Y%2FLII4nR7C3o73n3zzK9EYT5UpTm192rEiIy8cPUYnLJYfK38QTUTaR6YiUO7sSfAUK4a73x76wYdJAoRj0nit6IV%2FL%2B7dnEgzRDzoY0su0q%2FOdjkpk5%2Febdr6y1WnFOWdJzRZdHr3s8z7Urc2SpSiFPBR2lbCq27LeGPXzzAXyuVWnzgdIvtpeWf9TcxJRLuSX8sBUwyBsDhafcp34bdVtVV%2BtJQ5HFd35PirxeNdgWE6HPwkqMT1jGwl1FXXJtBn554od%2Bns8BXBZF4YBONz8YcJ8qyN55IeOj56PH%2FkeySsW2sdlX%2B0mX13KJ2FhW5R1Vl4nwDR%2FAakNhHtrzFRJHlUOf4FZ74%2FlQfK40YYXgHTRggZXjbgtSNTMJ1ouZghF%2FE0A7Rmfj33sL1Awld21ywY6pgG4b6ngIeG5b8nMr%2BF%2FNKV7cnuVpk%2FIHLBhz6VFnxtO%2B1jWEEZyc56mXdPzFohNHb5zv2plRIJcx8bZxzh6QxAriugQ1u8CqjSRbT1ATn5RJnOuUv9LyEu1QGrhGfNNLInnveDNUsJHQEQXNjZEJ%2FLyVHg2mcNxZZRzAn4E3Up6ZuYoGn75MCRlokvUdFOFxKvRUkc0VoL0PY79Dk1FtSranSOfZWXf&X-Amz-Signature=9174e6263350950ddb3534b04b34bb79a96ea08bc370e6b0d63a49537cd7e366&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466252QFDGY%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRFDHJ6fvbkuP6OHTbeO5C7BsqH6y9UWbLwvBCSorAvAiABUjmMmJNKwQlE8eH132iRP1PKywKfIVizPEbEdOaWySqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAwVO4wGcKYMNthimKtwDOoYRTLwrtxCLccmXQocqu0xK34h3Ps6NAE5AYDgC3z67RVmVfvzBvpn1OqzdcQqf5Q2C0WDNwgGeS%2B1iVDgR7w1CxiKkqgZEq3TmuavbXL849ydVUgG4a2WJ90i6nnd64HIKbaCm8t0ZRx3%2BqI%2Bl1hlJuJZkYy0m6nt4Ew%2Bn7NmC0gplMxnSF8pHE6koAZtouSJrBUOxUHaLBjoVDgxv%2B4x6EVwr853O1aS%2Fx%2Bsp9Y%2FLII4nR7C3o73n3zzK9EYT5UpTm192rEiIy8cPUYnLJYfK38QTUTaR6YiUO7sSfAUK4a73x76wYdJAoRj0nit6IV%2FL%2B7dnEgzRDzoY0su0q%2FOdjkpk5%2Febdr6y1WnFOWdJzRZdHr3s8z7Urc2SpSiFPBR2lbCq27LeGPXzzAXyuVWnzgdIvtpeWf9TcxJRLuSX8sBUwyBsDhafcp34bdVtVV%2BtJQ5HFd35PirxeNdgWE6HPwkqMT1jGwl1FXXJtBn554od%2Bns8BXBZF4YBONz8YcJ8qyN55IeOj56PH%2FkeySsW2sdlX%2B0mX13KJ2FhW5R1Vl4nwDR%2FAakNhHtrzFRJHlUOf4FZ74%2FlQfK40YYXgHTRggZXjbgtSNTMJ1ouZghF%2FE0A7Rmfj33sL1Awld21ywY6pgG4b6ngIeG5b8nMr%2BF%2FNKV7cnuVpk%2FIHLBhz6VFnxtO%2B1jWEEZyc56mXdPzFohNHb5zv2plRIJcx8bZxzh6QxAriugQ1u8CqjSRbT1ATn5RJnOuUv9LyEu1QGrhGfNNLInnveDNUsJHQEQXNjZEJ%2FLyVHg2mcNxZZRzAn4E3Up6ZuYoGn75MCRlokvUdFOFxKvRUkc0VoL0PY79Dk1FtSranSOfZWXf&X-Amz-Signature=109fcf35751f42bc249c12cbdd13f30a2321c3d5e02f8b5341675362d7507877&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466252QFDGY%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRFDHJ6fvbkuP6OHTbeO5C7BsqH6y9UWbLwvBCSorAvAiABUjmMmJNKwQlE8eH132iRP1PKywKfIVizPEbEdOaWySqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAwVO4wGcKYMNthimKtwDOoYRTLwrtxCLccmXQocqu0xK34h3Ps6NAE5AYDgC3z67RVmVfvzBvpn1OqzdcQqf5Q2C0WDNwgGeS%2B1iVDgR7w1CxiKkqgZEq3TmuavbXL849ydVUgG4a2WJ90i6nnd64HIKbaCm8t0ZRx3%2BqI%2Bl1hlJuJZkYy0m6nt4Ew%2Bn7NmC0gplMxnSF8pHE6koAZtouSJrBUOxUHaLBjoVDgxv%2B4x6EVwr853O1aS%2Fx%2Bsp9Y%2FLII4nR7C3o73n3zzK9EYT5UpTm192rEiIy8cPUYnLJYfK38QTUTaR6YiUO7sSfAUK4a73x76wYdJAoRj0nit6IV%2FL%2B7dnEgzRDzoY0su0q%2FOdjkpk5%2Febdr6y1WnFOWdJzRZdHr3s8z7Urc2SpSiFPBR2lbCq27LeGPXzzAXyuVWnzgdIvtpeWf9TcxJRLuSX8sBUwyBsDhafcp34bdVtVV%2BtJQ5HFd35PirxeNdgWE6HPwkqMT1jGwl1FXXJtBn554od%2Bns8BXBZF4YBONz8YcJ8qyN55IeOj56PH%2FkeySsW2sdlX%2B0mX13KJ2FhW5R1Vl4nwDR%2FAakNhHtrzFRJHlUOf4FZ74%2FlQfK40YYXgHTRggZXjbgtSNTMJ1ouZghF%2FE0A7Rmfj33sL1Awld21ywY6pgG4b6ngIeG5b8nMr%2BF%2FNKV7cnuVpk%2FIHLBhz6VFnxtO%2B1jWEEZyc56mXdPzFohNHb5zv2plRIJcx8bZxzh6QxAriugQ1u8CqjSRbT1ATn5RJnOuUv9LyEu1QGrhGfNNLInnveDNUsJHQEQXNjZEJ%2FLyVHg2mcNxZZRzAn4E3Up6ZuYoGn75MCRlokvUdFOFxKvRUkc0VoL0PY79Dk1FtSranSOfZWXf&X-Amz-Signature=fab1951d94b25b303fd006494e5b19c76151301ea92c9cba8c20be4b2947d6b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466252QFDGY%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRFDHJ6fvbkuP6OHTbeO5C7BsqH6y9UWbLwvBCSorAvAiABUjmMmJNKwQlE8eH132iRP1PKywKfIVizPEbEdOaWySqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAwVO4wGcKYMNthimKtwDOoYRTLwrtxCLccmXQocqu0xK34h3Ps6NAE5AYDgC3z67RVmVfvzBvpn1OqzdcQqf5Q2C0WDNwgGeS%2B1iVDgR7w1CxiKkqgZEq3TmuavbXL849ydVUgG4a2WJ90i6nnd64HIKbaCm8t0ZRx3%2BqI%2Bl1hlJuJZkYy0m6nt4Ew%2Bn7NmC0gplMxnSF8pHE6koAZtouSJrBUOxUHaLBjoVDgxv%2B4x6EVwr853O1aS%2Fx%2Bsp9Y%2FLII4nR7C3o73n3zzK9EYT5UpTm192rEiIy8cPUYnLJYfK38QTUTaR6YiUO7sSfAUK4a73x76wYdJAoRj0nit6IV%2FL%2B7dnEgzRDzoY0su0q%2FOdjkpk5%2Febdr6y1WnFOWdJzRZdHr3s8z7Urc2SpSiFPBR2lbCq27LeGPXzzAXyuVWnzgdIvtpeWf9TcxJRLuSX8sBUwyBsDhafcp34bdVtVV%2BtJQ5HFd35PirxeNdgWE6HPwkqMT1jGwl1FXXJtBn554od%2Bns8BXBZF4YBONz8YcJ8qyN55IeOj56PH%2FkeySsW2sdlX%2B0mX13KJ2FhW5R1Vl4nwDR%2FAakNhHtrzFRJHlUOf4FZ74%2FlQfK40YYXgHTRggZXjbgtSNTMJ1ouZghF%2FE0A7Rmfj33sL1Awld21ywY6pgG4b6ngIeG5b8nMr%2BF%2FNKV7cnuVpk%2FIHLBhz6VFnxtO%2B1jWEEZyc56mXdPzFohNHb5zv2plRIJcx8bZxzh6QxAriugQ1u8CqjSRbT1ATn5RJnOuUv9LyEu1QGrhGfNNLInnveDNUsJHQEQXNjZEJ%2FLyVHg2mcNxZZRzAn4E3Up6ZuYoGn75MCRlokvUdFOFxKvRUkc0VoL0PY79Dk1FtSranSOfZWXf&X-Amz-Signature=c52e481fa378c39c2302042b46772a43334744c47289ec77b0c9017e3a04e5f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466252QFDGY%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRFDHJ6fvbkuP6OHTbeO5C7BsqH6y9UWbLwvBCSorAvAiABUjmMmJNKwQlE8eH132iRP1PKywKfIVizPEbEdOaWySqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAwVO4wGcKYMNthimKtwDOoYRTLwrtxCLccmXQocqu0xK34h3Ps6NAE5AYDgC3z67RVmVfvzBvpn1OqzdcQqf5Q2C0WDNwgGeS%2B1iVDgR7w1CxiKkqgZEq3TmuavbXL849ydVUgG4a2WJ90i6nnd64HIKbaCm8t0ZRx3%2BqI%2Bl1hlJuJZkYy0m6nt4Ew%2Bn7NmC0gplMxnSF8pHE6koAZtouSJrBUOxUHaLBjoVDgxv%2B4x6EVwr853O1aS%2Fx%2Bsp9Y%2FLII4nR7C3o73n3zzK9EYT5UpTm192rEiIy8cPUYnLJYfK38QTUTaR6YiUO7sSfAUK4a73x76wYdJAoRj0nit6IV%2FL%2B7dnEgzRDzoY0su0q%2FOdjkpk5%2Febdr6y1WnFOWdJzRZdHr3s8z7Urc2SpSiFPBR2lbCq27LeGPXzzAXyuVWnzgdIvtpeWf9TcxJRLuSX8sBUwyBsDhafcp34bdVtVV%2BtJQ5HFd35PirxeNdgWE6HPwkqMT1jGwl1FXXJtBn554od%2Bns8BXBZF4YBONz8YcJ8qyN55IeOj56PH%2FkeySsW2sdlX%2B0mX13KJ2FhW5R1Vl4nwDR%2FAakNhHtrzFRJHlUOf4FZ74%2FlQfK40YYXgHTRggZXjbgtSNTMJ1ouZghF%2FE0A7Rmfj33sL1Awld21ywY6pgG4b6ngIeG5b8nMr%2BF%2FNKV7cnuVpk%2FIHLBhz6VFnxtO%2B1jWEEZyc56mXdPzFohNHb5zv2plRIJcx8bZxzh6QxAriugQ1u8CqjSRbT1ATn5RJnOuUv9LyEu1QGrhGfNNLInnveDNUsJHQEQXNjZEJ%2FLyVHg2mcNxZZRzAn4E3Up6ZuYoGn75MCRlokvUdFOFxKvRUkc0VoL0PY79Dk1FtSranSOfZWXf&X-Amz-Signature=ace678a001e8e9266e6b8e0745097b7bf86e875a1a1cd9284bf81a6a6b196128&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466252QFDGY%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRFDHJ6fvbkuP6OHTbeO5C7BsqH6y9UWbLwvBCSorAvAiABUjmMmJNKwQlE8eH132iRP1PKywKfIVizPEbEdOaWySqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAwVO4wGcKYMNthimKtwDOoYRTLwrtxCLccmXQocqu0xK34h3Ps6NAE5AYDgC3z67RVmVfvzBvpn1OqzdcQqf5Q2C0WDNwgGeS%2B1iVDgR7w1CxiKkqgZEq3TmuavbXL849ydVUgG4a2WJ90i6nnd64HIKbaCm8t0ZRx3%2BqI%2Bl1hlJuJZkYy0m6nt4Ew%2Bn7NmC0gplMxnSF8pHE6koAZtouSJrBUOxUHaLBjoVDgxv%2B4x6EVwr853O1aS%2Fx%2Bsp9Y%2FLII4nR7C3o73n3zzK9EYT5UpTm192rEiIy8cPUYnLJYfK38QTUTaR6YiUO7sSfAUK4a73x76wYdJAoRj0nit6IV%2FL%2B7dnEgzRDzoY0su0q%2FOdjkpk5%2Febdr6y1WnFOWdJzRZdHr3s8z7Urc2SpSiFPBR2lbCq27LeGPXzzAXyuVWnzgdIvtpeWf9TcxJRLuSX8sBUwyBsDhafcp34bdVtVV%2BtJQ5HFd35PirxeNdgWE6HPwkqMT1jGwl1FXXJtBn554od%2Bns8BXBZF4YBONz8YcJ8qyN55IeOj56PH%2FkeySsW2sdlX%2B0mX13KJ2FhW5R1Vl4nwDR%2FAakNhHtrzFRJHlUOf4FZ74%2FlQfK40YYXgHTRggZXjbgtSNTMJ1ouZghF%2FE0A7Rmfj33sL1Awld21ywY6pgG4b6ngIeG5b8nMr%2BF%2FNKV7cnuVpk%2FIHLBhz6VFnxtO%2B1jWEEZyc56mXdPzFohNHb5zv2plRIJcx8bZxzh6QxAriugQ1u8CqjSRbT1ATn5RJnOuUv9LyEu1QGrhGfNNLInnveDNUsJHQEQXNjZEJ%2FLyVHg2mcNxZZRzAn4E3Up6ZuYoGn75MCRlokvUdFOFxKvRUkc0VoL0PY79Dk1FtSranSOfZWXf&X-Amz-Signature=f932fbbdf785bf9a2d2feb5f3f6d761e958046717aab4a7f47a0558763c43388&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466252QFDGY%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRFDHJ6fvbkuP6OHTbeO5C7BsqH6y9UWbLwvBCSorAvAiABUjmMmJNKwQlE8eH132iRP1PKywKfIVizPEbEdOaWySqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAwVO4wGcKYMNthimKtwDOoYRTLwrtxCLccmXQocqu0xK34h3Ps6NAE5AYDgC3z67RVmVfvzBvpn1OqzdcQqf5Q2C0WDNwgGeS%2B1iVDgR7w1CxiKkqgZEq3TmuavbXL849ydVUgG4a2WJ90i6nnd64HIKbaCm8t0ZRx3%2BqI%2Bl1hlJuJZkYy0m6nt4Ew%2Bn7NmC0gplMxnSF8pHE6koAZtouSJrBUOxUHaLBjoVDgxv%2B4x6EVwr853O1aS%2Fx%2Bsp9Y%2FLII4nR7C3o73n3zzK9EYT5UpTm192rEiIy8cPUYnLJYfK38QTUTaR6YiUO7sSfAUK4a73x76wYdJAoRj0nit6IV%2FL%2B7dnEgzRDzoY0su0q%2FOdjkpk5%2Febdr6y1WnFOWdJzRZdHr3s8z7Urc2SpSiFPBR2lbCq27LeGPXzzAXyuVWnzgdIvtpeWf9TcxJRLuSX8sBUwyBsDhafcp34bdVtVV%2BtJQ5HFd35PirxeNdgWE6HPwkqMT1jGwl1FXXJtBn554od%2Bns8BXBZF4YBONz8YcJ8qyN55IeOj56PH%2FkeySsW2sdlX%2B0mX13KJ2FhW5R1Vl4nwDR%2FAakNhHtrzFRJHlUOf4FZ74%2FlQfK40YYXgHTRggZXjbgtSNTMJ1ouZghF%2FE0A7Rmfj33sL1Awld21ywY6pgG4b6ngIeG5b8nMr%2BF%2FNKV7cnuVpk%2FIHLBhz6VFnxtO%2B1jWEEZyc56mXdPzFohNHb5zv2plRIJcx8bZxzh6QxAriugQ1u8CqjSRbT1ATn5RJnOuUv9LyEu1QGrhGfNNLInnveDNUsJHQEQXNjZEJ%2FLyVHg2mcNxZZRzAn4E3Up6ZuYoGn75MCRlokvUdFOFxKvRUkc0VoL0PY79Dk1FtSranSOfZWXf&X-Amz-Signature=55a616f9633ba289a0be02f2b4f3a0c8011cc414479adc5b39bc7b51bf559667&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466252QFDGY%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRFDHJ6fvbkuP6OHTbeO5C7BsqH6y9UWbLwvBCSorAvAiABUjmMmJNKwQlE8eH132iRP1PKywKfIVizPEbEdOaWySqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAwVO4wGcKYMNthimKtwDOoYRTLwrtxCLccmXQocqu0xK34h3Ps6NAE5AYDgC3z67RVmVfvzBvpn1OqzdcQqf5Q2C0WDNwgGeS%2B1iVDgR7w1CxiKkqgZEq3TmuavbXL849ydVUgG4a2WJ90i6nnd64HIKbaCm8t0ZRx3%2BqI%2Bl1hlJuJZkYy0m6nt4Ew%2Bn7NmC0gplMxnSF8pHE6koAZtouSJrBUOxUHaLBjoVDgxv%2B4x6EVwr853O1aS%2Fx%2Bsp9Y%2FLII4nR7C3o73n3zzK9EYT5UpTm192rEiIy8cPUYnLJYfK38QTUTaR6YiUO7sSfAUK4a73x76wYdJAoRj0nit6IV%2FL%2B7dnEgzRDzoY0su0q%2FOdjkpk5%2Febdr6y1WnFOWdJzRZdHr3s8z7Urc2SpSiFPBR2lbCq27LeGPXzzAXyuVWnzgdIvtpeWf9TcxJRLuSX8sBUwyBsDhafcp34bdVtVV%2BtJQ5HFd35PirxeNdgWE6HPwkqMT1jGwl1FXXJtBn554od%2Bns8BXBZF4YBONz8YcJ8qyN55IeOj56PH%2FkeySsW2sdlX%2B0mX13KJ2FhW5R1Vl4nwDR%2FAakNhHtrzFRJHlUOf4FZ74%2FlQfK40YYXgHTRggZXjbgtSNTMJ1ouZghF%2FE0A7Rmfj33sL1Awld21ywY6pgG4b6ngIeG5b8nMr%2BF%2FNKV7cnuVpk%2FIHLBhz6VFnxtO%2B1jWEEZyc56mXdPzFohNHb5zv2plRIJcx8bZxzh6QxAriugQ1u8CqjSRbT1ATn5RJnOuUv9LyEu1QGrhGfNNLInnveDNUsJHQEQXNjZEJ%2FLyVHg2mcNxZZRzAn4E3Up6ZuYoGn75MCRlokvUdFOFxKvRUkc0VoL0PY79Dk1FtSranSOfZWXf&X-Amz-Signature=fd2dc37806607b81cf2d1de5f774f3cfb5ac0c8d7dcb584e677a5b0440a8bbc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
