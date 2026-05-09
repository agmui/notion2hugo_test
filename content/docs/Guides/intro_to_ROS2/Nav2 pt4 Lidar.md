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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCZPZUFG%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDoqkyzFJiWyIDWCHvtXZ4STacfYgGKVO2Lu3OqhjL9rQIhAMszuD3e%2BEybXLEfmCCswejC6LDfpCVp7GloFKW1ygCFKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylzmvZNAUOustENf0q3AO9yFD1UsCCBfe3R%2FalDt21OwkOkI9fFZ77P4iDI%2FSpmXKL93LIU3CQVpPMOedkoZbsJK7P8TZxkq2IBhzlOPIWweN4Uj4%2BKi1G0LSUPqH87qlaJuhwtTzoXN8EcDvcSHNWQ0EIJ6sxOHwfuy5J9U6ygQJQA3%2FZotsdU%2FHTC0G5fYkQB9Kry8Y3sP%2B8HVyqKiraHY37OlpOdfjCQcjiG%2BMGxCKxECk1%2F0YwG1vU0QaB6uzLzPQ%2F%2F5ksZ5WVJoA46K7gf2yIlB4zb%2FY2UhqEP6RMFlmrsv%2F1ggC2Gj8XaQh7GmxbZM2Eeess%2B%2B8PRtJVDnWPUXnlH6MO%2Bv0lFhOUR001Nzj4yGdxGB9UjzVKpUPyO%2FbMXOFPYM6bl64NHqoOOCh73qHBmVZ5ONgLhCpl31E2FH1Z4iGjpgV9of5d2Q6O9tGbix5MMgFwvfgjYKnhbJdwXhRCgI%2FqgMa6AichGm0tL3zDNn9KrtNvctCJegmrq4BCjL1L%2F7RYoCnj5YG7cBdpHvAWIBxzHVRdk4znlwcsRaQmFBfXOoD%2FgEs217NTyKYnowGtm7uuJPHlcKrTtcQB%2BQMMF8sdy213vHEYpIFY7w0%2Fn4HGx0Y%2FGbIE1uph%2FOk3bRo6S8I0raY%2FYjCPsvrPBjqkASxHZpkL6rLBfRDqD01aU4m09jfYMf1RvzTpOqkMs9g%2Br9AhUKKdCUxMHMy80zwdoVbdav4%2FwGw7tsojMx6b2CcdihJ4jaWHsU37tPFZnomIVWAFVkOD9l3TiVx1Cz4hh4VfQOtjU0JGsxzTSV2JhcCDlz021GWCYSJwHcAt3GxGPhCazH9481XjLLDMEdbJ6jlZDv1MRPZUhNV0S0OwdY09KgCX&X-Amz-Signature=fe76dab583be036a5944e6896f5bf6881639a5ab64e74f91a39dd77264723708&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLB7JK4I%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCNnpcojEta2nKNhwqUhIse7MkzEVenSj%2B7KcpO%2Bo9WAQIhAKqJk4crP2SDKght2r6oFMpDHiscIrJ63cN5mmwZX52FKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyp0CD0E1JvZ4WZlmoq3AMx8e7RXBVX4Im4jeQWsxdwHsqelb1gdM9Pvm9jndzj10oPDsu0UbKYM8pJly5a3vTLoX7A%2Bu0r8LxCX%2BFsU6cN39EMRPyrS4%2Fqbnga9UHuQUqgK%2F3nPF8o64fa50DTCk4voaWNHXXbRP%2BpJp7KOTL8SjbHbrFft53q7KSBcABPyv%2Bzt5c%2FvbsNuV6%2FhgISEpRz0WXo5FnbgVP6xABlw3AkFufSLJOLlD8PApzZFMF%2Flin41JeRHjYzErFjt1EFeGJiAlO670yO223AssDFxP5YVTfG3ChvfTwzTWH9cNcuYxnFDPJZosgMIwMlalJCMZTNIV%2FAh%2BAdNkkgdxfNHMA4RiyKY4f2rJuLSZz9MZ7h9Nmt61mjnRp4QFsq4Z4%2F%2BldIvRS%2F1igAwzj5z9YijtPxEwrOT20r50ZISBDs2acMlz9R8Cq2PhwBhldBfysijoI4Bb4H1mCHvQH%2BSVxwWkMZlpo84unzxPwGHfJW9vXouPUYzsS8Yer%2BqT4PofKI7N3RNwv4IuDxLRkpLFKcdXeSuz1h5y1ckkrPcbZWKtaCX1QxarFIEot5b1EwAbnblqHaK2mbxYBQSeb62une1iKBVlTEqzEx%2F5zW9%2FBrMA5DZrIBf0kcPw36l%2FDyyzDtvvrPBjqkATf0AAWmwzTC40nOSJlb3vGYAA9WfmgZ%2B9IdNCJMKbASH5RGGHN62miz1Em5ZdSu6d4XehOQIfsoZkGI0KSRlgdrjRRwHpiwI%2BM5pYevx0InufiLOBzaCvcoQQk%2FqKwqCPPgjpngiqs3fAbeimX2Qgf5862af5uuj%2FKR5k6B2hAsihThDQbFSz%2BL0JvvKCWNcOhW9SE8LXACipvSgFiyxz6q%2BkVJ&X-Amz-Signature=c3b631de0aad09891e40d93132cb41ac11e1e393076a4a7db34efb52032a7002&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLB7JK4I%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCNnpcojEta2nKNhwqUhIse7MkzEVenSj%2B7KcpO%2Bo9WAQIhAKqJk4crP2SDKght2r6oFMpDHiscIrJ63cN5mmwZX52FKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyp0CD0E1JvZ4WZlmoq3AMx8e7RXBVX4Im4jeQWsxdwHsqelb1gdM9Pvm9jndzj10oPDsu0UbKYM8pJly5a3vTLoX7A%2Bu0r8LxCX%2BFsU6cN39EMRPyrS4%2Fqbnga9UHuQUqgK%2F3nPF8o64fa50DTCk4voaWNHXXbRP%2BpJp7KOTL8SjbHbrFft53q7KSBcABPyv%2Bzt5c%2FvbsNuV6%2FhgISEpRz0WXo5FnbgVP6xABlw3AkFufSLJOLlD8PApzZFMF%2Flin41JeRHjYzErFjt1EFeGJiAlO670yO223AssDFxP5YVTfG3ChvfTwzTWH9cNcuYxnFDPJZosgMIwMlalJCMZTNIV%2FAh%2BAdNkkgdxfNHMA4RiyKY4f2rJuLSZz9MZ7h9Nmt61mjnRp4QFsq4Z4%2F%2BldIvRS%2F1igAwzj5z9YijtPxEwrOT20r50ZISBDs2acMlz9R8Cq2PhwBhldBfysijoI4Bb4H1mCHvQH%2BSVxwWkMZlpo84unzxPwGHfJW9vXouPUYzsS8Yer%2BqT4PofKI7N3RNwv4IuDxLRkpLFKcdXeSuz1h5y1ckkrPcbZWKtaCX1QxarFIEot5b1EwAbnblqHaK2mbxYBQSeb62une1iKBVlTEqzEx%2F5zW9%2FBrMA5DZrIBf0kcPw36l%2FDyyzDtvvrPBjqkATf0AAWmwzTC40nOSJlb3vGYAA9WfmgZ%2B9IdNCJMKbASH5RGGHN62miz1Em5ZdSu6d4XehOQIfsoZkGI0KSRlgdrjRRwHpiwI%2BM5pYevx0InufiLOBzaCvcoQQk%2FqKwqCPPgjpngiqs3fAbeimX2Qgf5862af5uuj%2FKR5k6B2hAsihThDQbFSz%2BL0JvvKCWNcOhW9SE8LXACipvSgFiyxz6q%2BkVJ&X-Amz-Signature=f80af4bc877fabd04e3aa8cd73aefdc5269d13dc594898f4cc8245c47c1fa87f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLB7JK4I%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCNnpcojEta2nKNhwqUhIse7MkzEVenSj%2B7KcpO%2Bo9WAQIhAKqJk4crP2SDKght2r6oFMpDHiscIrJ63cN5mmwZX52FKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyp0CD0E1JvZ4WZlmoq3AMx8e7RXBVX4Im4jeQWsxdwHsqelb1gdM9Pvm9jndzj10oPDsu0UbKYM8pJly5a3vTLoX7A%2Bu0r8LxCX%2BFsU6cN39EMRPyrS4%2Fqbnga9UHuQUqgK%2F3nPF8o64fa50DTCk4voaWNHXXbRP%2BpJp7KOTL8SjbHbrFft53q7KSBcABPyv%2Bzt5c%2FvbsNuV6%2FhgISEpRz0WXo5FnbgVP6xABlw3AkFufSLJOLlD8PApzZFMF%2Flin41JeRHjYzErFjt1EFeGJiAlO670yO223AssDFxP5YVTfG3ChvfTwzTWH9cNcuYxnFDPJZosgMIwMlalJCMZTNIV%2FAh%2BAdNkkgdxfNHMA4RiyKY4f2rJuLSZz9MZ7h9Nmt61mjnRp4QFsq4Z4%2F%2BldIvRS%2F1igAwzj5z9YijtPxEwrOT20r50ZISBDs2acMlz9R8Cq2PhwBhldBfysijoI4Bb4H1mCHvQH%2BSVxwWkMZlpo84unzxPwGHfJW9vXouPUYzsS8Yer%2BqT4PofKI7N3RNwv4IuDxLRkpLFKcdXeSuz1h5y1ckkrPcbZWKtaCX1QxarFIEot5b1EwAbnblqHaK2mbxYBQSeb62une1iKBVlTEqzEx%2F5zW9%2FBrMA5DZrIBf0kcPw36l%2FDyyzDtvvrPBjqkATf0AAWmwzTC40nOSJlb3vGYAA9WfmgZ%2B9IdNCJMKbASH5RGGHN62miz1Em5ZdSu6d4XehOQIfsoZkGI0KSRlgdrjRRwHpiwI%2BM5pYevx0InufiLOBzaCvcoQQk%2FqKwqCPPgjpngiqs3fAbeimX2Qgf5862af5uuj%2FKR5k6B2hAsihThDQbFSz%2BL0JvvKCWNcOhW9SE8LXACipvSgFiyxz6q%2BkVJ&X-Amz-Signature=5d3b3b41871c4cb1c6caf70e19372e428d34b1ba7260930c17dab9e74091328e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLB7JK4I%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCNnpcojEta2nKNhwqUhIse7MkzEVenSj%2B7KcpO%2Bo9WAQIhAKqJk4crP2SDKght2r6oFMpDHiscIrJ63cN5mmwZX52FKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyp0CD0E1JvZ4WZlmoq3AMx8e7RXBVX4Im4jeQWsxdwHsqelb1gdM9Pvm9jndzj10oPDsu0UbKYM8pJly5a3vTLoX7A%2Bu0r8LxCX%2BFsU6cN39EMRPyrS4%2Fqbnga9UHuQUqgK%2F3nPF8o64fa50DTCk4voaWNHXXbRP%2BpJp7KOTL8SjbHbrFft53q7KSBcABPyv%2Bzt5c%2FvbsNuV6%2FhgISEpRz0WXo5FnbgVP6xABlw3AkFufSLJOLlD8PApzZFMF%2Flin41JeRHjYzErFjt1EFeGJiAlO670yO223AssDFxP5YVTfG3ChvfTwzTWH9cNcuYxnFDPJZosgMIwMlalJCMZTNIV%2FAh%2BAdNkkgdxfNHMA4RiyKY4f2rJuLSZz9MZ7h9Nmt61mjnRp4QFsq4Z4%2F%2BldIvRS%2F1igAwzj5z9YijtPxEwrOT20r50ZISBDs2acMlz9R8Cq2PhwBhldBfysijoI4Bb4H1mCHvQH%2BSVxwWkMZlpo84unzxPwGHfJW9vXouPUYzsS8Yer%2BqT4PofKI7N3RNwv4IuDxLRkpLFKcdXeSuz1h5y1ckkrPcbZWKtaCX1QxarFIEot5b1EwAbnblqHaK2mbxYBQSeb62une1iKBVlTEqzEx%2F5zW9%2FBrMA5DZrIBf0kcPw36l%2FDyyzDtvvrPBjqkATf0AAWmwzTC40nOSJlb3vGYAA9WfmgZ%2B9IdNCJMKbASH5RGGHN62miz1Em5ZdSu6d4XehOQIfsoZkGI0KSRlgdrjRRwHpiwI%2BM5pYevx0InufiLOBzaCvcoQQk%2FqKwqCPPgjpngiqs3fAbeimX2Qgf5862af5uuj%2FKR5k6B2hAsihThDQbFSz%2BL0JvvKCWNcOhW9SE8LXACipvSgFiyxz6q%2BkVJ&X-Amz-Signature=cacb7e8b05c5b93419568bd9ddf265c6dfd0c72ccf7aa10f683042c2e0d744d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLB7JK4I%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCNnpcojEta2nKNhwqUhIse7MkzEVenSj%2B7KcpO%2Bo9WAQIhAKqJk4crP2SDKght2r6oFMpDHiscIrJ63cN5mmwZX52FKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyp0CD0E1JvZ4WZlmoq3AMx8e7RXBVX4Im4jeQWsxdwHsqelb1gdM9Pvm9jndzj10oPDsu0UbKYM8pJly5a3vTLoX7A%2Bu0r8LxCX%2BFsU6cN39EMRPyrS4%2Fqbnga9UHuQUqgK%2F3nPF8o64fa50DTCk4voaWNHXXbRP%2BpJp7KOTL8SjbHbrFft53q7KSBcABPyv%2Bzt5c%2FvbsNuV6%2FhgISEpRz0WXo5FnbgVP6xABlw3AkFufSLJOLlD8PApzZFMF%2Flin41JeRHjYzErFjt1EFeGJiAlO670yO223AssDFxP5YVTfG3ChvfTwzTWH9cNcuYxnFDPJZosgMIwMlalJCMZTNIV%2FAh%2BAdNkkgdxfNHMA4RiyKY4f2rJuLSZz9MZ7h9Nmt61mjnRp4QFsq4Z4%2F%2BldIvRS%2F1igAwzj5z9YijtPxEwrOT20r50ZISBDs2acMlz9R8Cq2PhwBhldBfysijoI4Bb4H1mCHvQH%2BSVxwWkMZlpo84unzxPwGHfJW9vXouPUYzsS8Yer%2BqT4PofKI7N3RNwv4IuDxLRkpLFKcdXeSuz1h5y1ckkrPcbZWKtaCX1QxarFIEot5b1EwAbnblqHaK2mbxYBQSeb62une1iKBVlTEqzEx%2F5zW9%2FBrMA5DZrIBf0kcPw36l%2FDyyzDtvvrPBjqkATf0AAWmwzTC40nOSJlb3vGYAA9WfmgZ%2B9IdNCJMKbASH5RGGHN62miz1Em5ZdSu6d4XehOQIfsoZkGI0KSRlgdrjRRwHpiwI%2BM5pYevx0InufiLOBzaCvcoQQk%2FqKwqCPPgjpngiqs3fAbeimX2Qgf5862af5uuj%2FKR5k6B2hAsihThDQbFSz%2BL0JvvKCWNcOhW9SE8LXACipvSgFiyxz6q%2BkVJ&X-Amz-Signature=15cc319734256b7892c09eb0186c63880f59fdd3955a0fde04926ec20bc3b2fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLB7JK4I%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCNnpcojEta2nKNhwqUhIse7MkzEVenSj%2B7KcpO%2Bo9WAQIhAKqJk4crP2SDKght2r6oFMpDHiscIrJ63cN5mmwZX52FKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyp0CD0E1JvZ4WZlmoq3AMx8e7RXBVX4Im4jeQWsxdwHsqelb1gdM9Pvm9jndzj10oPDsu0UbKYM8pJly5a3vTLoX7A%2Bu0r8LxCX%2BFsU6cN39EMRPyrS4%2Fqbnga9UHuQUqgK%2F3nPF8o64fa50DTCk4voaWNHXXbRP%2BpJp7KOTL8SjbHbrFft53q7KSBcABPyv%2Bzt5c%2FvbsNuV6%2FhgISEpRz0WXo5FnbgVP6xABlw3AkFufSLJOLlD8PApzZFMF%2Flin41JeRHjYzErFjt1EFeGJiAlO670yO223AssDFxP5YVTfG3ChvfTwzTWH9cNcuYxnFDPJZosgMIwMlalJCMZTNIV%2FAh%2BAdNkkgdxfNHMA4RiyKY4f2rJuLSZz9MZ7h9Nmt61mjnRp4QFsq4Z4%2F%2BldIvRS%2F1igAwzj5z9YijtPxEwrOT20r50ZISBDs2acMlz9R8Cq2PhwBhldBfysijoI4Bb4H1mCHvQH%2BSVxwWkMZlpo84unzxPwGHfJW9vXouPUYzsS8Yer%2BqT4PofKI7N3RNwv4IuDxLRkpLFKcdXeSuz1h5y1ckkrPcbZWKtaCX1QxarFIEot5b1EwAbnblqHaK2mbxYBQSeb62une1iKBVlTEqzEx%2F5zW9%2FBrMA5DZrIBf0kcPw36l%2FDyyzDtvvrPBjqkATf0AAWmwzTC40nOSJlb3vGYAA9WfmgZ%2B9IdNCJMKbASH5RGGHN62miz1Em5ZdSu6d4XehOQIfsoZkGI0KSRlgdrjRRwHpiwI%2BM5pYevx0InufiLOBzaCvcoQQk%2FqKwqCPPgjpngiqs3fAbeimX2Qgf5862af5uuj%2FKR5k6B2hAsihThDQbFSz%2BL0JvvKCWNcOhW9SE8LXACipvSgFiyxz6q%2BkVJ&X-Amz-Signature=15e1715ac6c808dcf63378ddaf5e0fa2fae6496655f775364ea014e6e3e7b9ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLB7JK4I%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCNnpcojEta2nKNhwqUhIse7MkzEVenSj%2B7KcpO%2Bo9WAQIhAKqJk4crP2SDKght2r6oFMpDHiscIrJ63cN5mmwZX52FKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyp0CD0E1JvZ4WZlmoq3AMx8e7RXBVX4Im4jeQWsxdwHsqelb1gdM9Pvm9jndzj10oPDsu0UbKYM8pJly5a3vTLoX7A%2Bu0r8LxCX%2BFsU6cN39EMRPyrS4%2Fqbnga9UHuQUqgK%2F3nPF8o64fa50DTCk4voaWNHXXbRP%2BpJp7KOTL8SjbHbrFft53q7KSBcABPyv%2Bzt5c%2FvbsNuV6%2FhgISEpRz0WXo5FnbgVP6xABlw3AkFufSLJOLlD8PApzZFMF%2Flin41JeRHjYzErFjt1EFeGJiAlO670yO223AssDFxP5YVTfG3ChvfTwzTWH9cNcuYxnFDPJZosgMIwMlalJCMZTNIV%2FAh%2BAdNkkgdxfNHMA4RiyKY4f2rJuLSZz9MZ7h9Nmt61mjnRp4QFsq4Z4%2F%2BldIvRS%2F1igAwzj5z9YijtPxEwrOT20r50ZISBDs2acMlz9R8Cq2PhwBhldBfysijoI4Bb4H1mCHvQH%2BSVxwWkMZlpo84unzxPwGHfJW9vXouPUYzsS8Yer%2BqT4PofKI7N3RNwv4IuDxLRkpLFKcdXeSuz1h5y1ckkrPcbZWKtaCX1QxarFIEot5b1EwAbnblqHaK2mbxYBQSeb62une1iKBVlTEqzEx%2F5zW9%2FBrMA5DZrIBf0kcPw36l%2FDyyzDtvvrPBjqkATf0AAWmwzTC40nOSJlb3vGYAA9WfmgZ%2B9IdNCJMKbASH5RGGHN62miz1Em5ZdSu6d4XehOQIfsoZkGI0KSRlgdrjRRwHpiwI%2BM5pYevx0InufiLOBzaCvcoQQk%2FqKwqCPPgjpngiqs3fAbeimX2Qgf5862af5uuj%2FKR5k6B2hAsihThDQbFSz%2BL0JvvKCWNcOhW9SE8LXACipvSgFiyxz6q%2BkVJ&X-Amz-Signature=22b8f2009f05b19443e95f87e4cbf8fce3c1f53bd3c341c76599d66fd32c36c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLB7JK4I%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCNnpcojEta2nKNhwqUhIse7MkzEVenSj%2B7KcpO%2Bo9WAQIhAKqJk4crP2SDKght2r6oFMpDHiscIrJ63cN5mmwZX52FKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyp0CD0E1JvZ4WZlmoq3AMx8e7RXBVX4Im4jeQWsxdwHsqelb1gdM9Pvm9jndzj10oPDsu0UbKYM8pJly5a3vTLoX7A%2Bu0r8LxCX%2BFsU6cN39EMRPyrS4%2Fqbnga9UHuQUqgK%2F3nPF8o64fa50DTCk4voaWNHXXbRP%2BpJp7KOTL8SjbHbrFft53q7KSBcABPyv%2Bzt5c%2FvbsNuV6%2FhgISEpRz0WXo5FnbgVP6xABlw3AkFufSLJOLlD8PApzZFMF%2Flin41JeRHjYzErFjt1EFeGJiAlO670yO223AssDFxP5YVTfG3ChvfTwzTWH9cNcuYxnFDPJZosgMIwMlalJCMZTNIV%2FAh%2BAdNkkgdxfNHMA4RiyKY4f2rJuLSZz9MZ7h9Nmt61mjnRp4QFsq4Z4%2F%2BldIvRS%2F1igAwzj5z9YijtPxEwrOT20r50ZISBDs2acMlz9R8Cq2PhwBhldBfysijoI4Bb4H1mCHvQH%2BSVxwWkMZlpo84unzxPwGHfJW9vXouPUYzsS8Yer%2BqT4PofKI7N3RNwv4IuDxLRkpLFKcdXeSuz1h5y1ckkrPcbZWKtaCX1QxarFIEot5b1EwAbnblqHaK2mbxYBQSeb62une1iKBVlTEqzEx%2F5zW9%2FBrMA5DZrIBf0kcPw36l%2FDyyzDtvvrPBjqkATf0AAWmwzTC40nOSJlb3vGYAA9WfmgZ%2B9IdNCJMKbASH5RGGHN62miz1Em5ZdSu6d4XehOQIfsoZkGI0KSRlgdrjRRwHpiwI%2BM5pYevx0InufiLOBzaCvcoQQk%2FqKwqCPPgjpngiqs3fAbeimX2Qgf5862af5uuj%2FKR5k6B2hAsihThDQbFSz%2BL0JvvKCWNcOhW9SE8LXACipvSgFiyxz6q%2BkVJ&X-Amz-Signature=842211c2551306e10f78af8c396deae3cfb4020955d271574177c45af1f29ce5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLB7JK4I%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCNnpcojEta2nKNhwqUhIse7MkzEVenSj%2B7KcpO%2Bo9WAQIhAKqJk4crP2SDKght2r6oFMpDHiscIrJ63cN5mmwZX52FKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyp0CD0E1JvZ4WZlmoq3AMx8e7RXBVX4Im4jeQWsxdwHsqelb1gdM9Pvm9jndzj10oPDsu0UbKYM8pJly5a3vTLoX7A%2Bu0r8LxCX%2BFsU6cN39EMRPyrS4%2Fqbnga9UHuQUqgK%2F3nPF8o64fa50DTCk4voaWNHXXbRP%2BpJp7KOTL8SjbHbrFft53q7KSBcABPyv%2Bzt5c%2FvbsNuV6%2FhgISEpRz0WXo5FnbgVP6xABlw3AkFufSLJOLlD8PApzZFMF%2Flin41JeRHjYzErFjt1EFeGJiAlO670yO223AssDFxP5YVTfG3ChvfTwzTWH9cNcuYxnFDPJZosgMIwMlalJCMZTNIV%2FAh%2BAdNkkgdxfNHMA4RiyKY4f2rJuLSZz9MZ7h9Nmt61mjnRp4QFsq4Z4%2F%2BldIvRS%2F1igAwzj5z9YijtPxEwrOT20r50ZISBDs2acMlz9R8Cq2PhwBhldBfysijoI4Bb4H1mCHvQH%2BSVxwWkMZlpo84unzxPwGHfJW9vXouPUYzsS8Yer%2BqT4PofKI7N3RNwv4IuDxLRkpLFKcdXeSuz1h5y1ckkrPcbZWKtaCX1QxarFIEot5b1EwAbnblqHaK2mbxYBQSeb62une1iKBVlTEqzEx%2F5zW9%2FBrMA5DZrIBf0kcPw36l%2FDyyzDtvvrPBjqkATf0AAWmwzTC40nOSJlb3vGYAA9WfmgZ%2B9IdNCJMKbASH5RGGHN62miz1Em5ZdSu6d4XehOQIfsoZkGI0KSRlgdrjRRwHpiwI%2BM5pYevx0InufiLOBzaCvcoQQk%2FqKwqCPPgjpngiqs3fAbeimX2Qgf5862af5uuj%2FKR5k6B2hAsihThDQbFSz%2BL0JvvKCWNcOhW9SE8LXACipvSgFiyxz6q%2BkVJ&X-Amz-Signature=70ddbb705a2d46ffd0b1e2f4e705697a634e29f7393fcb0dc65982f136a6d816&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLB7JK4I%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCNnpcojEta2nKNhwqUhIse7MkzEVenSj%2B7KcpO%2Bo9WAQIhAKqJk4crP2SDKght2r6oFMpDHiscIrJ63cN5mmwZX52FKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyp0CD0E1JvZ4WZlmoq3AMx8e7RXBVX4Im4jeQWsxdwHsqelb1gdM9Pvm9jndzj10oPDsu0UbKYM8pJly5a3vTLoX7A%2Bu0r8LxCX%2BFsU6cN39EMRPyrS4%2Fqbnga9UHuQUqgK%2F3nPF8o64fa50DTCk4voaWNHXXbRP%2BpJp7KOTL8SjbHbrFft53q7KSBcABPyv%2Bzt5c%2FvbsNuV6%2FhgISEpRz0WXo5FnbgVP6xABlw3AkFufSLJOLlD8PApzZFMF%2Flin41JeRHjYzErFjt1EFeGJiAlO670yO223AssDFxP5YVTfG3ChvfTwzTWH9cNcuYxnFDPJZosgMIwMlalJCMZTNIV%2FAh%2BAdNkkgdxfNHMA4RiyKY4f2rJuLSZz9MZ7h9Nmt61mjnRp4QFsq4Z4%2F%2BldIvRS%2F1igAwzj5z9YijtPxEwrOT20r50ZISBDs2acMlz9R8Cq2PhwBhldBfysijoI4Bb4H1mCHvQH%2BSVxwWkMZlpo84unzxPwGHfJW9vXouPUYzsS8Yer%2BqT4PofKI7N3RNwv4IuDxLRkpLFKcdXeSuz1h5y1ckkrPcbZWKtaCX1QxarFIEot5b1EwAbnblqHaK2mbxYBQSeb62une1iKBVlTEqzEx%2F5zW9%2FBrMA5DZrIBf0kcPw36l%2FDyyzDtvvrPBjqkATf0AAWmwzTC40nOSJlb3vGYAA9WfmgZ%2B9IdNCJMKbASH5RGGHN62miz1Em5ZdSu6d4XehOQIfsoZkGI0KSRlgdrjRRwHpiwI%2BM5pYevx0InufiLOBzaCvcoQQk%2FqKwqCPPgjpngiqs3fAbeimX2Qgf5862af5uuj%2FKR5k6B2hAsihThDQbFSz%2BL0JvvKCWNcOhW9SE8LXACipvSgFiyxz6q%2BkVJ&X-Amz-Signature=cacb7e8b05c5b93419568bd9ddf265c6dfd0c72ccf7aa10f683042c2e0d744d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
