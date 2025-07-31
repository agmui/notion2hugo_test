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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKVCAP23%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDmDlsVgNShJBr%2B3wGsIJiDThA1ela156GsUd2gsZADdwIfL1oKrIVoFX6Zpz458pJLruxcJMyIBKOWyYXEDUm%2BxSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi19XNXJXVRq8uPgvKtwDESQukxSf9LsLjAufx0pUh8EQ9oCusD3e%2BjxfEhiQcF2urXrkGTEc1ehWCzpN5p%2B1Ne6p5rhHsGd6htjDjhz7nB44JC59G%2FBwBV804Km7PUVrhq3Hapqk%2FPIp2ksuFsUXDpRA6KHmiYVHsQjFEHPfja3ETI4%2FM27YyfnZaX7qyy4Hc3LmXAev%2BjjbEYQVBkMWZ5x13y7FnO%2B%2FUWdVOYfcy6G2a7ZNPwqbGJbt%2F1u%2BiXM%2BhCn%2FmUcMt9HXePsiL4mq5UBlEzIm2ZLNL%2FIdIEvFnFdQ%2BZgfjlYQ1tXUIrCqJiw39DCaO6jYASl83KJO5S1ih7b1z4V%2BaBqux3%2B6O1osBR1K%2BQFqDbL08KsaEvWbJIH9N9pN41FfA8nOHvxcYQkP1jKQUhXSyjRNkhga1ySJLcxVQaSF0c633XRxK9p2VUF24VCB3YNg3P%2Fi4LW%2F%2FOQKRduzA4D969XJugKIDC%2Bf1CL9r6wHOpS8RR0D12n4xFiA%2FNXL1dFAMuAv4kA4XvZ16OihZhLUjX0qmUYZStH1AhreHLJnIQoh31BTQlmmgaHwU4%2FgK4Hi6KTEEJh2QoIWuVwHHo7RHR9Sq%2F4ihGTkthvelEr4jKq%2FRfIwhZoC1YjkFOAwSjQQZeg1%2BxUw1JqsxAY6pgFYAqZwc%2Bdz%2BzB5B3GRi23A3OCz8wJH4Q%2BmH0VHbPIx64fq9E3qNXxQJK7xr%2Fsx3Je7yzic7qvC2QN5g8JnxNfjtXENO%2F%2BiOm8NuY3Qar8XSoyqaDFSmaUAfr8TADGPGrrBsWViZUfOR4ea9XDURAOwE42Vpva%2B2RjqoSM1NealNC8bY4TZRaEsbsdzj1eKWzmsuM6FxDqlfLZwOdfJw72nS8LMaCva&X-Amz-Signature=d22711baa84d0b93ccd4a5a56cf4f47226a2f3819444e50d89c3d4d88027d06c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKVCAP23%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDmDlsVgNShJBr%2B3wGsIJiDThA1ela156GsUd2gsZADdwIfL1oKrIVoFX6Zpz458pJLruxcJMyIBKOWyYXEDUm%2BxSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi19XNXJXVRq8uPgvKtwDESQukxSf9LsLjAufx0pUh8EQ9oCusD3e%2BjxfEhiQcF2urXrkGTEc1ehWCzpN5p%2B1Ne6p5rhHsGd6htjDjhz7nB44JC59G%2FBwBV804Km7PUVrhq3Hapqk%2FPIp2ksuFsUXDpRA6KHmiYVHsQjFEHPfja3ETI4%2FM27YyfnZaX7qyy4Hc3LmXAev%2BjjbEYQVBkMWZ5x13y7FnO%2B%2FUWdVOYfcy6G2a7ZNPwqbGJbt%2F1u%2BiXM%2BhCn%2FmUcMt9HXePsiL4mq5UBlEzIm2ZLNL%2FIdIEvFnFdQ%2BZgfjlYQ1tXUIrCqJiw39DCaO6jYASl83KJO5S1ih7b1z4V%2BaBqux3%2B6O1osBR1K%2BQFqDbL08KsaEvWbJIH9N9pN41FfA8nOHvxcYQkP1jKQUhXSyjRNkhga1ySJLcxVQaSF0c633XRxK9p2VUF24VCB3YNg3P%2Fi4LW%2F%2FOQKRduzA4D969XJugKIDC%2Bf1CL9r6wHOpS8RR0D12n4xFiA%2FNXL1dFAMuAv4kA4XvZ16OihZhLUjX0qmUYZStH1AhreHLJnIQoh31BTQlmmgaHwU4%2FgK4Hi6KTEEJh2QoIWuVwHHo7RHR9Sq%2F4ihGTkthvelEr4jKq%2FRfIwhZoC1YjkFOAwSjQQZeg1%2BxUw1JqsxAY6pgFYAqZwc%2Bdz%2BzB5B3GRi23A3OCz8wJH4Q%2BmH0VHbPIx64fq9E3qNXxQJK7xr%2Fsx3Je7yzic7qvC2QN5g8JnxNfjtXENO%2F%2BiOm8NuY3Qar8XSoyqaDFSmaUAfr8TADGPGrrBsWViZUfOR4ea9XDURAOwE42Vpva%2B2RjqoSM1NealNC8bY4TZRaEsbsdzj1eKWzmsuM6FxDqlfLZwOdfJw72nS8LMaCva&X-Amz-Signature=24debaf52be19fda5570486fe19e44755cc266b5f335e216410baa4b5f3a3caf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKVCAP23%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDmDlsVgNShJBr%2B3wGsIJiDThA1ela156GsUd2gsZADdwIfL1oKrIVoFX6Zpz458pJLruxcJMyIBKOWyYXEDUm%2BxSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi19XNXJXVRq8uPgvKtwDESQukxSf9LsLjAufx0pUh8EQ9oCusD3e%2BjxfEhiQcF2urXrkGTEc1ehWCzpN5p%2B1Ne6p5rhHsGd6htjDjhz7nB44JC59G%2FBwBV804Km7PUVrhq3Hapqk%2FPIp2ksuFsUXDpRA6KHmiYVHsQjFEHPfja3ETI4%2FM27YyfnZaX7qyy4Hc3LmXAev%2BjjbEYQVBkMWZ5x13y7FnO%2B%2FUWdVOYfcy6G2a7ZNPwqbGJbt%2F1u%2BiXM%2BhCn%2FmUcMt9HXePsiL4mq5UBlEzIm2ZLNL%2FIdIEvFnFdQ%2BZgfjlYQ1tXUIrCqJiw39DCaO6jYASl83KJO5S1ih7b1z4V%2BaBqux3%2B6O1osBR1K%2BQFqDbL08KsaEvWbJIH9N9pN41FfA8nOHvxcYQkP1jKQUhXSyjRNkhga1ySJLcxVQaSF0c633XRxK9p2VUF24VCB3YNg3P%2Fi4LW%2F%2FOQKRduzA4D969XJugKIDC%2Bf1CL9r6wHOpS8RR0D12n4xFiA%2FNXL1dFAMuAv4kA4XvZ16OihZhLUjX0qmUYZStH1AhreHLJnIQoh31BTQlmmgaHwU4%2FgK4Hi6KTEEJh2QoIWuVwHHo7RHR9Sq%2F4ihGTkthvelEr4jKq%2FRfIwhZoC1YjkFOAwSjQQZeg1%2BxUw1JqsxAY6pgFYAqZwc%2Bdz%2BzB5B3GRi23A3OCz8wJH4Q%2BmH0VHbPIx64fq9E3qNXxQJK7xr%2Fsx3Je7yzic7qvC2QN5g8JnxNfjtXENO%2F%2BiOm8NuY3Qar8XSoyqaDFSmaUAfr8TADGPGrrBsWViZUfOR4ea9XDURAOwE42Vpva%2B2RjqoSM1NealNC8bY4TZRaEsbsdzj1eKWzmsuM6FxDqlfLZwOdfJw72nS8LMaCva&X-Amz-Signature=43c9f6ec30d13b2eb0ee0b47739bb36c83017fc4fef1da40bdc04519d05e2cca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKVCAP23%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDmDlsVgNShJBr%2B3wGsIJiDThA1ela156GsUd2gsZADdwIfL1oKrIVoFX6Zpz458pJLruxcJMyIBKOWyYXEDUm%2BxSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi19XNXJXVRq8uPgvKtwDESQukxSf9LsLjAufx0pUh8EQ9oCusD3e%2BjxfEhiQcF2urXrkGTEc1ehWCzpN5p%2B1Ne6p5rhHsGd6htjDjhz7nB44JC59G%2FBwBV804Km7PUVrhq3Hapqk%2FPIp2ksuFsUXDpRA6KHmiYVHsQjFEHPfja3ETI4%2FM27YyfnZaX7qyy4Hc3LmXAev%2BjjbEYQVBkMWZ5x13y7FnO%2B%2FUWdVOYfcy6G2a7ZNPwqbGJbt%2F1u%2BiXM%2BhCn%2FmUcMt9HXePsiL4mq5UBlEzIm2ZLNL%2FIdIEvFnFdQ%2BZgfjlYQ1tXUIrCqJiw39DCaO6jYASl83KJO5S1ih7b1z4V%2BaBqux3%2B6O1osBR1K%2BQFqDbL08KsaEvWbJIH9N9pN41FfA8nOHvxcYQkP1jKQUhXSyjRNkhga1ySJLcxVQaSF0c633XRxK9p2VUF24VCB3YNg3P%2Fi4LW%2F%2FOQKRduzA4D969XJugKIDC%2Bf1CL9r6wHOpS8RR0D12n4xFiA%2FNXL1dFAMuAv4kA4XvZ16OihZhLUjX0qmUYZStH1AhreHLJnIQoh31BTQlmmgaHwU4%2FgK4Hi6KTEEJh2QoIWuVwHHo7RHR9Sq%2F4ihGTkthvelEr4jKq%2FRfIwhZoC1YjkFOAwSjQQZeg1%2BxUw1JqsxAY6pgFYAqZwc%2Bdz%2BzB5B3GRi23A3OCz8wJH4Q%2BmH0VHbPIx64fq9E3qNXxQJK7xr%2Fsx3Je7yzic7qvC2QN5g8JnxNfjtXENO%2F%2BiOm8NuY3Qar8XSoyqaDFSmaUAfr8TADGPGrrBsWViZUfOR4ea9XDURAOwE42Vpva%2B2RjqoSM1NealNC8bY4TZRaEsbsdzj1eKWzmsuM6FxDqlfLZwOdfJw72nS8LMaCva&X-Amz-Signature=03e033bccc06093ffcc017c79471a57aa3a80e37abf90ec15bd7ec2a79f2b2f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKVCAP23%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDmDlsVgNShJBr%2B3wGsIJiDThA1ela156GsUd2gsZADdwIfL1oKrIVoFX6Zpz458pJLruxcJMyIBKOWyYXEDUm%2BxSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi19XNXJXVRq8uPgvKtwDESQukxSf9LsLjAufx0pUh8EQ9oCusD3e%2BjxfEhiQcF2urXrkGTEc1ehWCzpN5p%2B1Ne6p5rhHsGd6htjDjhz7nB44JC59G%2FBwBV804Km7PUVrhq3Hapqk%2FPIp2ksuFsUXDpRA6KHmiYVHsQjFEHPfja3ETI4%2FM27YyfnZaX7qyy4Hc3LmXAev%2BjjbEYQVBkMWZ5x13y7FnO%2B%2FUWdVOYfcy6G2a7ZNPwqbGJbt%2F1u%2BiXM%2BhCn%2FmUcMt9HXePsiL4mq5UBlEzIm2ZLNL%2FIdIEvFnFdQ%2BZgfjlYQ1tXUIrCqJiw39DCaO6jYASl83KJO5S1ih7b1z4V%2BaBqux3%2B6O1osBR1K%2BQFqDbL08KsaEvWbJIH9N9pN41FfA8nOHvxcYQkP1jKQUhXSyjRNkhga1ySJLcxVQaSF0c633XRxK9p2VUF24VCB3YNg3P%2Fi4LW%2F%2FOQKRduzA4D969XJugKIDC%2Bf1CL9r6wHOpS8RR0D12n4xFiA%2FNXL1dFAMuAv4kA4XvZ16OihZhLUjX0qmUYZStH1AhreHLJnIQoh31BTQlmmgaHwU4%2FgK4Hi6KTEEJh2QoIWuVwHHo7RHR9Sq%2F4ihGTkthvelEr4jKq%2FRfIwhZoC1YjkFOAwSjQQZeg1%2BxUw1JqsxAY6pgFYAqZwc%2Bdz%2BzB5B3GRi23A3OCz8wJH4Q%2BmH0VHbPIx64fq9E3qNXxQJK7xr%2Fsx3Je7yzic7qvC2QN5g8JnxNfjtXENO%2F%2BiOm8NuY3Qar8XSoyqaDFSmaUAfr8TADGPGrrBsWViZUfOR4ea9XDURAOwE42Vpva%2B2RjqoSM1NealNC8bY4TZRaEsbsdzj1eKWzmsuM6FxDqlfLZwOdfJw72nS8LMaCva&X-Amz-Signature=e9cc94b9d3d944639ad19d5dd84d7d55aadb148634f7418f03819608749b1cba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKVCAP23%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDmDlsVgNShJBr%2B3wGsIJiDThA1ela156GsUd2gsZADdwIfL1oKrIVoFX6Zpz458pJLruxcJMyIBKOWyYXEDUm%2BxSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi19XNXJXVRq8uPgvKtwDESQukxSf9LsLjAufx0pUh8EQ9oCusD3e%2BjxfEhiQcF2urXrkGTEc1ehWCzpN5p%2B1Ne6p5rhHsGd6htjDjhz7nB44JC59G%2FBwBV804Km7PUVrhq3Hapqk%2FPIp2ksuFsUXDpRA6KHmiYVHsQjFEHPfja3ETI4%2FM27YyfnZaX7qyy4Hc3LmXAev%2BjjbEYQVBkMWZ5x13y7FnO%2B%2FUWdVOYfcy6G2a7ZNPwqbGJbt%2F1u%2BiXM%2BhCn%2FmUcMt9HXePsiL4mq5UBlEzIm2ZLNL%2FIdIEvFnFdQ%2BZgfjlYQ1tXUIrCqJiw39DCaO6jYASl83KJO5S1ih7b1z4V%2BaBqux3%2B6O1osBR1K%2BQFqDbL08KsaEvWbJIH9N9pN41FfA8nOHvxcYQkP1jKQUhXSyjRNkhga1ySJLcxVQaSF0c633XRxK9p2VUF24VCB3YNg3P%2Fi4LW%2F%2FOQKRduzA4D969XJugKIDC%2Bf1CL9r6wHOpS8RR0D12n4xFiA%2FNXL1dFAMuAv4kA4XvZ16OihZhLUjX0qmUYZStH1AhreHLJnIQoh31BTQlmmgaHwU4%2FgK4Hi6KTEEJh2QoIWuVwHHo7RHR9Sq%2F4ihGTkthvelEr4jKq%2FRfIwhZoC1YjkFOAwSjQQZeg1%2BxUw1JqsxAY6pgFYAqZwc%2Bdz%2BzB5B3GRi23A3OCz8wJH4Q%2BmH0VHbPIx64fq9E3qNXxQJK7xr%2Fsx3Je7yzic7qvC2QN5g8JnxNfjtXENO%2F%2BiOm8NuY3Qar8XSoyqaDFSmaUAfr8TADGPGrrBsWViZUfOR4ea9XDURAOwE42Vpva%2B2RjqoSM1NealNC8bY4TZRaEsbsdzj1eKWzmsuM6FxDqlfLZwOdfJw72nS8LMaCva&X-Amz-Signature=6cfb63eabd3542ddd315b72aeeb2fc42f14b6a3d701b2f8178d478462e6ec027&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKVCAP23%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDmDlsVgNShJBr%2B3wGsIJiDThA1ela156GsUd2gsZADdwIfL1oKrIVoFX6Zpz458pJLruxcJMyIBKOWyYXEDUm%2BxSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi19XNXJXVRq8uPgvKtwDESQukxSf9LsLjAufx0pUh8EQ9oCusD3e%2BjxfEhiQcF2urXrkGTEc1ehWCzpN5p%2B1Ne6p5rhHsGd6htjDjhz7nB44JC59G%2FBwBV804Km7PUVrhq3Hapqk%2FPIp2ksuFsUXDpRA6KHmiYVHsQjFEHPfja3ETI4%2FM27YyfnZaX7qyy4Hc3LmXAev%2BjjbEYQVBkMWZ5x13y7FnO%2B%2FUWdVOYfcy6G2a7ZNPwqbGJbt%2F1u%2BiXM%2BhCn%2FmUcMt9HXePsiL4mq5UBlEzIm2ZLNL%2FIdIEvFnFdQ%2BZgfjlYQ1tXUIrCqJiw39DCaO6jYASl83KJO5S1ih7b1z4V%2BaBqux3%2B6O1osBR1K%2BQFqDbL08KsaEvWbJIH9N9pN41FfA8nOHvxcYQkP1jKQUhXSyjRNkhga1ySJLcxVQaSF0c633XRxK9p2VUF24VCB3YNg3P%2Fi4LW%2F%2FOQKRduzA4D969XJugKIDC%2Bf1CL9r6wHOpS8RR0D12n4xFiA%2FNXL1dFAMuAv4kA4XvZ16OihZhLUjX0qmUYZStH1AhreHLJnIQoh31BTQlmmgaHwU4%2FgK4Hi6KTEEJh2QoIWuVwHHo7RHR9Sq%2F4ihGTkthvelEr4jKq%2FRfIwhZoC1YjkFOAwSjQQZeg1%2BxUw1JqsxAY6pgFYAqZwc%2Bdz%2BzB5B3GRi23A3OCz8wJH4Q%2BmH0VHbPIx64fq9E3qNXxQJK7xr%2Fsx3Je7yzic7qvC2QN5g8JnxNfjtXENO%2F%2BiOm8NuY3Qar8XSoyqaDFSmaUAfr8TADGPGrrBsWViZUfOR4ea9XDURAOwE42Vpva%2B2RjqoSM1NealNC8bY4TZRaEsbsdzj1eKWzmsuM6FxDqlfLZwOdfJw72nS8LMaCva&X-Amz-Signature=9408462f977d2bcf6647d1cce88476e303b67049d3e9c8f4a32e80fffe2fbb6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKVCAP23%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDmDlsVgNShJBr%2B3wGsIJiDThA1ela156GsUd2gsZADdwIfL1oKrIVoFX6Zpz458pJLruxcJMyIBKOWyYXEDUm%2BxSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi19XNXJXVRq8uPgvKtwDESQukxSf9LsLjAufx0pUh8EQ9oCusD3e%2BjxfEhiQcF2urXrkGTEc1ehWCzpN5p%2B1Ne6p5rhHsGd6htjDjhz7nB44JC59G%2FBwBV804Km7PUVrhq3Hapqk%2FPIp2ksuFsUXDpRA6KHmiYVHsQjFEHPfja3ETI4%2FM27YyfnZaX7qyy4Hc3LmXAev%2BjjbEYQVBkMWZ5x13y7FnO%2B%2FUWdVOYfcy6G2a7ZNPwqbGJbt%2F1u%2BiXM%2BhCn%2FmUcMt9HXePsiL4mq5UBlEzIm2ZLNL%2FIdIEvFnFdQ%2BZgfjlYQ1tXUIrCqJiw39DCaO6jYASl83KJO5S1ih7b1z4V%2BaBqux3%2B6O1osBR1K%2BQFqDbL08KsaEvWbJIH9N9pN41FfA8nOHvxcYQkP1jKQUhXSyjRNkhga1ySJLcxVQaSF0c633XRxK9p2VUF24VCB3YNg3P%2Fi4LW%2F%2FOQKRduzA4D969XJugKIDC%2Bf1CL9r6wHOpS8RR0D12n4xFiA%2FNXL1dFAMuAv4kA4XvZ16OihZhLUjX0qmUYZStH1AhreHLJnIQoh31BTQlmmgaHwU4%2FgK4Hi6KTEEJh2QoIWuVwHHo7RHR9Sq%2F4ihGTkthvelEr4jKq%2FRfIwhZoC1YjkFOAwSjQQZeg1%2BxUw1JqsxAY6pgFYAqZwc%2Bdz%2BzB5B3GRi23A3OCz8wJH4Q%2BmH0VHbPIx64fq9E3qNXxQJK7xr%2Fsx3Je7yzic7qvC2QN5g8JnxNfjtXENO%2F%2BiOm8NuY3Qar8XSoyqaDFSmaUAfr8TADGPGrrBsWViZUfOR4ea9XDURAOwE42Vpva%2B2RjqoSM1NealNC8bY4TZRaEsbsdzj1eKWzmsuM6FxDqlfLZwOdfJw72nS8LMaCva&X-Amz-Signature=27e4a2164980b1b854074a20d9700eee7559ad43b3b315602b151a7a88bdc4e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKVCAP23%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDmDlsVgNShJBr%2B3wGsIJiDThA1ela156GsUd2gsZADdwIfL1oKrIVoFX6Zpz458pJLruxcJMyIBKOWyYXEDUm%2BxSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi19XNXJXVRq8uPgvKtwDESQukxSf9LsLjAufx0pUh8EQ9oCusD3e%2BjxfEhiQcF2urXrkGTEc1ehWCzpN5p%2B1Ne6p5rhHsGd6htjDjhz7nB44JC59G%2FBwBV804Km7PUVrhq3Hapqk%2FPIp2ksuFsUXDpRA6KHmiYVHsQjFEHPfja3ETI4%2FM27YyfnZaX7qyy4Hc3LmXAev%2BjjbEYQVBkMWZ5x13y7FnO%2B%2FUWdVOYfcy6G2a7ZNPwqbGJbt%2F1u%2BiXM%2BhCn%2FmUcMt9HXePsiL4mq5UBlEzIm2ZLNL%2FIdIEvFnFdQ%2BZgfjlYQ1tXUIrCqJiw39DCaO6jYASl83KJO5S1ih7b1z4V%2BaBqux3%2B6O1osBR1K%2BQFqDbL08KsaEvWbJIH9N9pN41FfA8nOHvxcYQkP1jKQUhXSyjRNkhga1ySJLcxVQaSF0c633XRxK9p2VUF24VCB3YNg3P%2Fi4LW%2F%2FOQKRduzA4D969XJugKIDC%2Bf1CL9r6wHOpS8RR0D12n4xFiA%2FNXL1dFAMuAv4kA4XvZ16OihZhLUjX0qmUYZStH1AhreHLJnIQoh31BTQlmmgaHwU4%2FgK4Hi6KTEEJh2QoIWuVwHHo7RHR9Sq%2F4ihGTkthvelEr4jKq%2FRfIwhZoC1YjkFOAwSjQQZeg1%2BxUw1JqsxAY6pgFYAqZwc%2Bdz%2BzB5B3GRi23A3OCz8wJH4Q%2BmH0VHbPIx64fq9E3qNXxQJK7xr%2Fsx3Je7yzic7qvC2QN5g8JnxNfjtXENO%2F%2BiOm8NuY3Qar8XSoyqaDFSmaUAfr8TADGPGrrBsWViZUfOR4ea9XDURAOwE42Vpva%2B2RjqoSM1NealNC8bY4TZRaEsbsdzj1eKWzmsuM6FxDqlfLZwOdfJw72nS8LMaCva&X-Amz-Signature=9b3ca49986173649f37760e1d049a55c9ca5fd4c52ab2b4f01aa410c19299895&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKVCAP23%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDmDlsVgNShJBr%2B3wGsIJiDThA1ela156GsUd2gsZADdwIfL1oKrIVoFX6Zpz458pJLruxcJMyIBKOWyYXEDUm%2BxSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi19XNXJXVRq8uPgvKtwDESQukxSf9LsLjAufx0pUh8EQ9oCusD3e%2BjxfEhiQcF2urXrkGTEc1ehWCzpN5p%2B1Ne6p5rhHsGd6htjDjhz7nB44JC59G%2FBwBV804Km7PUVrhq3Hapqk%2FPIp2ksuFsUXDpRA6KHmiYVHsQjFEHPfja3ETI4%2FM27YyfnZaX7qyy4Hc3LmXAev%2BjjbEYQVBkMWZ5x13y7FnO%2B%2FUWdVOYfcy6G2a7ZNPwqbGJbt%2F1u%2BiXM%2BhCn%2FmUcMt9HXePsiL4mq5UBlEzIm2ZLNL%2FIdIEvFnFdQ%2BZgfjlYQ1tXUIrCqJiw39DCaO6jYASl83KJO5S1ih7b1z4V%2BaBqux3%2B6O1osBR1K%2BQFqDbL08KsaEvWbJIH9N9pN41FfA8nOHvxcYQkP1jKQUhXSyjRNkhga1ySJLcxVQaSF0c633XRxK9p2VUF24VCB3YNg3P%2Fi4LW%2F%2FOQKRduzA4D969XJugKIDC%2Bf1CL9r6wHOpS8RR0D12n4xFiA%2FNXL1dFAMuAv4kA4XvZ16OihZhLUjX0qmUYZStH1AhreHLJnIQoh31BTQlmmgaHwU4%2FgK4Hi6KTEEJh2QoIWuVwHHo7RHR9Sq%2F4ihGTkthvelEr4jKq%2FRfIwhZoC1YjkFOAwSjQQZeg1%2BxUw1JqsxAY6pgFYAqZwc%2Bdz%2BzB5B3GRi23A3OCz8wJH4Q%2BmH0VHbPIx64fq9E3qNXxQJK7xr%2Fsx3Je7yzic7qvC2QN5g8JnxNfjtXENO%2F%2BiOm8NuY3Qar8XSoyqaDFSmaUAfr8TADGPGrrBsWViZUfOR4ea9XDURAOwE42Vpva%2B2RjqoSM1NealNC8bY4TZRaEsbsdzj1eKWzmsuM6FxDqlfLZwOdfJw72nS8LMaCva&X-Amz-Signature=113c0714c31ae53feff5d58c071e35cf2916d37578daa8ecbeadb9fd68292721&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
