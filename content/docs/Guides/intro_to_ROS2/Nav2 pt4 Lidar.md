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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653RXANVL%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCOV1pNPdRUgMmfxhFiRgJxLgC%2BaPzUyWcrwM2%2Frhq8RwIgNHkyQHgE3UOK5L7WBeUTLIMlfstcNNF7pkmM9IWdy64q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDIRStCgf5dvCRPOsyCrcA%2FyYW%2Fsms7NGpxTlRsNmTmKFvohUHMwfqwf1ON2boXXOX4MpcaMe1i9G2SRM6VDuDBge0tHnJ%2FPcaK0jf9ebTL2ECzsQqH0C8RFssusrIvYk1oR0kO1G4y6caqDUFPcouz5SMg7%2FCtjQ7tG1OV0rjpxglW0v3%2BD8hZzJCpSlw1q5JEoJ7WCEbvD5cLGxHNiG2rEzVBEHTMJbFq6rpJStoJ4Ju8uWPqdnI%2BcIrxUcPWHmAWXi7CrUFX105R7JrwzOkMGTA3ZweY6re%2FxwlKpmRZyKFA8HFCNhrArMzKsYj3CEa50z%2F6vSQbf1D5eRLaFyS89QEelxZdUUqa7mraohdp0XDq7ZMRUF6DeIyJj94ItToxyMw8pK3KI127YaXOLqLr846sCVF22wfzSjt1Y6EY27HPQa0xSeyXE0%2BL6kF6PO%2FTS4n9nIMpNYSbAY2IvdQTGYfZCdpi8O1YyxdVEPCil%2BpAmST3%2Fvp0iz4SluniTJx2ahT%2F1Bh2I71kkojITRXLwd6BpDgfIruCzeVvrPadlVDau5nwTScW0dBJSfUkojvbgP9RHqFLuWU709Matq7niYdWYc82at%2F5%2FjyWJ5CDe3lwmx22hsnz54zX8EmE5VoxhQBXs%2BqOE0nhu2MJbNyMQGOqUB%2FKLUQnsmZvzthNPt1j2hCA0TLTgryMUBquwE%2BM7hlZ6Eg4Fpk7JeABcbWepH5e26KMRN0ha4kW%2F04xA1kRHlX7kxFG001ST2EufUilgkuI8oyPIqZ8tnrG6buOz5FUX7DukmRJcpknJZMKjOcPpbbRW8ZoDArKEGlxm5MuzdCXSXguj8yNF8v8kZt22HLMbwGie3zq4SWdFgCqFrBnKImwG74PD3&X-Amz-Signature=c3cc8f445065118f5e9aeeb54e2b161ff25f47e078c44e8ce8d0269f27536c1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO7B2WXU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCPNdbsrB0MU4qlBEem5ep1i8ixmhdZNxchDZ1Vd2YtIQIhAPdave90EI1pe0aJAgXR1VRsrV7Bm3kh3Y89RX%2B7qxzPKv8DCGEQABoMNjM3NDIzMTgzODA1IgycHX1xtWZypzR9u98q3ANwTsg7nhkKmUrTdUz79Mj6NAmMAmPg70gfo7wwCCU%2B5kGM3%2B5N4oOWFrJuuVrxcKp5RhNohrW8yk%2FltIroUV2Z1yCq1xXSq3cgtq3okHrWGZH%2BPg%2FdmKh78BIiT3DI44m%2BwkxbWPTj%2BLs6HulG97rKqwppMUMz0gsRdJE17ZwP4Wv2Yy3xo8YiZmHSX9%2F%2FCB%2BgH4llc2MD3P6V7IfstA%2BAoNQWbu7oj1VrscBMVSEk9UjH6AuAJSMC9hHK5N2lFDuFBfxAi8Q%2BO%2FU5s%2BS6j4aQQYeiCo9C4GApiVQ7xqBFzZm4OQYfzv76xJcds%2FLc%2BfN3Ux20YeDsHHumfSsb15wAgjKjaK7GRNA310cGUrNnu%2BIrutzyvZOpUYw%2BDvETM7LDc4CclnWin8hQgFIg4wcjg684A1C2LR5SMHvfXvIJPDoNS%2Bc66HjM0srQv9ALhuhZhJv0m5EDJxtG7%2BTUVykXDp5UvDP7pRIjvx77hXvO1UQETy93HLJd1f1fDkNiRQp1xYJxjXbuplGfbh5SVIM06mpxOybOKrZ3uL%2FgV8Dfy56bwpKJuO8CDHllgUx67HcyP4d1GAAyVmRPINr5yUfj%2BChzLaebk7qZEQUIcXuP7MrjRPXk7zKUKU1%2FyjDqzMjEBjqkAavut79WjdHnq8rzqJQFtAP32tXLTTEQHae4iRQ9SZ7ZsK63hHw8Rybhf1eTu7Pna%2BLE6gsBTslWzyMmmZnYg9mMZaSMVUhFLrQpbH%2BtH4k13Y6FTGZJWPaRnDZXsBIbLgc0UKZEya3XEQb%2B8cUva3mwXHrii1Sv4qFyRKn%2Br8ZWqPHFCfHiAfMeoIAvy6VOavtL9yAgG12uXqG55GMmFo2x9kkL&X-Amz-Signature=bc4d997760ce79171faa8c6e46492b0b5be006023b6b02211adf9ce6a693a6ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO7B2WXU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCPNdbsrB0MU4qlBEem5ep1i8ixmhdZNxchDZ1Vd2YtIQIhAPdave90EI1pe0aJAgXR1VRsrV7Bm3kh3Y89RX%2B7qxzPKv8DCGEQABoMNjM3NDIzMTgzODA1IgycHX1xtWZypzR9u98q3ANwTsg7nhkKmUrTdUz79Mj6NAmMAmPg70gfo7wwCCU%2B5kGM3%2B5N4oOWFrJuuVrxcKp5RhNohrW8yk%2FltIroUV2Z1yCq1xXSq3cgtq3okHrWGZH%2BPg%2FdmKh78BIiT3DI44m%2BwkxbWPTj%2BLs6HulG97rKqwppMUMz0gsRdJE17ZwP4Wv2Yy3xo8YiZmHSX9%2F%2FCB%2BgH4llc2MD3P6V7IfstA%2BAoNQWbu7oj1VrscBMVSEk9UjH6AuAJSMC9hHK5N2lFDuFBfxAi8Q%2BO%2FU5s%2BS6j4aQQYeiCo9C4GApiVQ7xqBFzZm4OQYfzv76xJcds%2FLc%2BfN3Ux20YeDsHHumfSsb15wAgjKjaK7GRNA310cGUrNnu%2BIrutzyvZOpUYw%2BDvETM7LDc4CclnWin8hQgFIg4wcjg684A1C2LR5SMHvfXvIJPDoNS%2Bc66HjM0srQv9ALhuhZhJv0m5EDJxtG7%2BTUVykXDp5UvDP7pRIjvx77hXvO1UQETy93HLJd1f1fDkNiRQp1xYJxjXbuplGfbh5SVIM06mpxOybOKrZ3uL%2FgV8Dfy56bwpKJuO8CDHllgUx67HcyP4d1GAAyVmRPINr5yUfj%2BChzLaebk7qZEQUIcXuP7MrjRPXk7zKUKU1%2FyjDqzMjEBjqkAavut79WjdHnq8rzqJQFtAP32tXLTTEQHae4iRQ9SZ7ZsK63hHw8Rybhf1eTu7Pna%2BLE6gsBTslWzyMmmZnYg9mMZaSMVUhFLrQpbH%2BtH4k13Y6FTGZJWPaRnDZXsBIbLgc0UKZEya3XEQb%2B8cUva3mwXHrii1Sv4qFyRKn%2Br8ZWqPHFCfHiAfMeoIAvy6VOavtL9yAgG12uXqG55GMmFo2x9kkL&X-Amz-Signature=9475b41b6cba13a73b9792569db371c15c3933f5f060382f82275de9649f3a3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO7B2WXU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCPNdbsrB0MU4qlBEem5ep1i8ixmhdZNxchDZ1Vd2YtIQIhAPdave90EI1pe0aJAgXR1VRsrV7Bm3kh3Y89RX%2B7qxzPKv8DCGEQABoMNjM3NDIzMTgzODA1IgycHX1xtWZypzR9u98q3ANwTsg7nhkKmUrTdUz79Mj6NAmMAmPg70gfo7wwCCU%2B5kGM3%2B5N4oOWFrJuuVrxcKp5RhNohrW8yk%2FltIroUV2Z1yCq1xXSq3cgtq3okHrWGZH%2BPg%2FdmKh78BIiT3DI44m%2BwkxbWPTj%2BLs6HulG97rKqwppMUMz0gsRdJE17ZwP4Wv2Yy3xo8YiZmHSX9%2F%2FCB%2BgH4llc2MD3P6V7IfstA%2BAoNQWbu7oj1VrscBMVSEk9UjH6AuAJSMC9hHK5N2lFDuFBfxAi8Q%2BO%2FU5s%2BS6j4aQQYeiCo9C4GApiVQ7xqBFzZm4OQYfzv76xJcds%2FLc%2BfN3Ux20YeDsHHumfSsb15wAgjKjaK7GRNA310cGUrNnu%2BIrutzyvZOpUYw%2BDvETM7LDc4CclnWin8hQgFIg4wcjg684A1C2LR5SMHvfXvIJPDoNS%2Bc66HjM0srQv9ALhuhZhJv0m5EDJxtG7%2BTUVykXDp5UvDP7pRIjvx77hXvO1UQETy93HLJd1f1fDkNiRQp1xYJxjXbuplGfbh5SVIM06mpxOybOKrZ3uL%2FgV8Dfy56bwpKJuO8CDHllgUx67HcyP4d1GAAyVmRPINr5yUfj%2BChzLaebk7qZEQUIcXuP7MrjRPXk7zKUKU1%2FyjDqzMjEBjqkAavut79WjdHnq8rzqJQFtAP32tXLTTEQHae4iRQ9SZ7ZsK63hHw8Rybhf1eTu7Pna%2BLE6gsBTslWzyMmmZnYg9mMZaSMVUhFLrQpbH%2BtH4k13Y6FTGZJWPaRnDZXsBIbLgc0UKZEya3XEQb%2B8cUva3mwXHrii1Sv4qFyRKn%2Br8ZWqPHFCfHiAfMeoIAvy6VOavtL9yAgG12uXqG55GMmFo2x9kkL&X-Amz-Signature=64f4321b3ab2b9ae233e0151d60caeb39c93fb4bb86b41a43347849713489e2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO7B2WXU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCPNdbsrB0MU4qlBEem5ep1i8ixmhdZNxchDZ1Vd2YtIQIhAPdave90EI1pe0aJAgXR1VRsrV7Bm3kh3Y89RX%2B7qxzPKv8DCGEQABoMNjM3NDIzMTgzODA1IgycHX1xtWZypzR9u98q3ANwTsg7nhkKmUrTdUz79Mj6NAmMAmPg70gfo7wwCCU%2B5kGM3%2B5N4oOWFrJuuVrxcKp5RhNohrW8yk%2FltIroUV2Z1yCq1xXSq3cgtq3okHrWGZH%2BPg%2FdmKh78BIiT3DI44m%2BwkxbWPTj%2BLs6HulG97rKqwppMUMz0gsRdJE17ZwP4Wv2Yy3xo8YiZmHSX9%2F%2FCB%2BgH4llc2MD3P6V7IfstA%2BAoNQWbu7oj1VrscBMVSEk9UjH6AuAJSMC9hHK5N2lFDuFBfxAi8Q%2BO%2FU5s%2BS6j4aQQYeiCo9C4GApiVQ7xqBFzZm4OQYfzv76xJcds%2FLc%2BfN3Ux20YeDsHHumfSsb15wAgjKjaK7GRNA310cGUrNnu%2BIrutzyvZOpUYw%2BDvETM7LDc4CclnWin8hQgFIg4wcjg684A1C2LR5SMHvfXvIJPDoNS%2Bc66HjM0srQv9ALhuhZhJv0m5EDJxtG7%2BTUVykXDp5UvDP7pRIjvx77hXvO1UQETy93HLJd1f1fDkNiRQp1xYJxjXbuplGfbh5SVIM06mpxOybOKrZ3uL%2FgV8Dfy56bwpKJuO8CDHllgUx67HcyP4d1GAAyVmRPINr5yUfj%2BChzLaebk7qZEQUIcXuP7MrjRPXk7zKUKU1%2FyjDqzMjEBjqkAavut79WjdHnq8rzqJQFtAP32tXLTTEQHae4iRQ9SZ7ZsK63hHw8Rybhf1eTu7Pna%2BLE6gsBTslWzyMmmZnYg9mMZaSMVUhFLrQpbH%2BtH4k13Y6FTGZJWPaRnDZXsBIbLgc0UKZEya3XEQb%2B8cUva3mwXHrii1Sv4qFyRKn%2Br8ZWqPHFCfHiAfMeoIAvy6VOavtL9yAgG12uXqG55GMmFo2x9kkL&X-Amz-Signature=e81dc7e41e8ae0fe083555748b92493f0de09cab7cecfb1b0ae08bca7919d7c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO7B2WXU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCPNdbsrB0MU4qlBEem5ep1i8ixmhdZNxchDZ1Vd2YtIQIhAPdave90EI1pe0aJAgXR1VRsrV7Bm3kh3Y89RX%2B7qxzPKv8DCGEQABoMNjM3NDIzMTgzODA1IgycHX1xtWZypzR9u98q3ANwTsg7nhkKmUrTdUz79Mj6NAmMAmPg70gfo7wwCCU%2B5kGM3%2B5N4oOWFrJuuVrxcKp5RhNohrW8yk%2FltIroUV2Z1yCq1xXSq3cgtq3okHrWGZH%2BPg%2FdmKh78BIiT3DI44m%2BwkxbWPTj%2BLs6HulG97rKqwppMUMz0gsRdJE17ZwP4Wv2Yy3xo8YiZmHSX9%2F%2FCB%2BgH4llc2MD3P6V7IfstA%2BAoNQWbu7oj1VrscBMVSEk9UjH6AuAJSMC9hHK5N2lFDuFBfxAi8Q%2BO%2FU5s%2BS6j4aQQYeiCo9C4GApiVQ7xqBFzZm4OQYfzv76xJcds%2FLc%2BfN3Ux20YeDsHHumfSsb15wAgjKjaK7GRNA310cGUrNnu%2BIrutzyvZOpUYw%2BDvETM7LDc4CclnWin8hQgFIg4wcjg684A1C2LR5SMHvfXvIJPDoNS%2Bc66HjM0srQv9ALhuhZhJv0m5EDJxtG7%2BTUVykXDp5UvDP7pRIjvx77hXvO1UQETy93HLJd1f1fDkNiRQp1xYJxjXbuplGfbh5SVIM06mpxOybOKrZ3uL%2FgV8Dfy56bwpKJuO8CDHllgUx67HcyP4d1GAAyVmRPINr5yUfj%2BChzLaebk7qZEQUIcXuP7MrjRPXk7zKUKU1%2FyjDqzMjEBjqkAavut79WjdHnq8rzqJQFtAP32tXLTTEQHae4iRQ9SZ7ZsK63hHw8Rybhf1eTu7Pna%2BLE6gsBTslWzyMmmZnYg9mMZaSMVUhFLrQpbH%2BtH4k13Y6FTGZJWPaRnDZXsBIbLgc0UKZEya3XEQb%2B8cUva3mwXHrii1Sv4qFyRKn%2Br8ZWqPHFCfHiAfMeoIAvy6VOavtL9yAgG12uXqG55GMmFo2x9kkL&X-Amz-Signature=38c4e66d8f3f41fdc147b1bf832222ab791c6c70188998709c216641e8788522&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO7B2WXU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCPNdbsrB0MU4qlBEem5ep1i8ixmhdZNxchDZ1Vd2YtIQIhAPdave90EI1pe0aJAgXR1VRsrV7Bm3kh3Y89RX%2B7qxzPKv8DCGEQABoMNjM3NDIzMTgzODA1IgycHX1xtWZypzR9u98q3ANwTsg7nhkKmUrTdUz79Mj6NAmMAmPg70gfo7wwCCU%2B5kGM3%2B5N4oOWFrJuuVrxcKp5RhNohrW8yk%2FltIroUV2Z1yCq1xXSq3cgtq3okHrWGZH%2BPg%2FdmKh78BIiT3DI44m%2BwkxbWPTj%2BLs6HulG97rKqwppMUMz0gsRdJE17ZwP4Wv2Yy3xo8YiZmHSX9%2F%2FCB%2BgH4llc2MD3P6V7IfstA%2BAoNQWbu7oj1VrscBMVSEk9UjH6AuAJSMC9hHK5N2lFDuFBfxAi8Q%2BO%2FU5s%2BS6j4aQQYeiCo9C4GApiVQ7xqBFzZm4OQYfzv76xJcds%2FLc%2BfN3Ux20YeDsHHumfSsb15wAgjKjaK7GRNA310cGUrNnu%2BIrutzyvZOpUYw%2BDvETM7LDc4CclnWin8hQgFIg4wcjg684A1C2LR5SMHvfXvIJPDoNS%2Bc66HjM0srQv9ALhuhZhJv0m5EDJxtG7%2BTUVykXDp5UvDP7pRIjvx77hXvO1UQETy93HLJd1f1fDkNiRQp1xYJxjXbuplGfbh5SVIM06mpxOybOKrZ3uL%2FgV8Dfy56bwpKJuO8CDHllgUx67HcyP4d1GAAyVmRPINr5yUfj%2BChzLaebk7qZEQUIcXuP7MrjRPXk7zKUKU1%2FyjDqzMjEBjqkAavut79WjdHnq8rzqJQFtAP32tXLTTEQHae4iRQ9SZ7ZsK63hHw8Rybhf1eTu7Pna%2BLE6gsBTslWzyMmmZnYg9mMZaSMVUhFLrQpbH%2BtH4k13Y6FTGZJWPaRnDZXsBIbLgc0UKZEya3XEQb%2B8cUva3mwXHrii1Sv4qFyRKn%2Br8ZWqPHFCfHiAfMeoIAvy6VOavtL9yAgG12uXqG55GMmFo2x9kkL&X-Amz-Signature=73ce1cf579b6f5f3060d6cf5becf0f1028808b2a3053d412ce8c9bb8a29bc98b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO7B2WXU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCPNdbsrB0MU4qlBEem5ep1i8ixmhdZNxchDZ1Vd2YtIQIhAPdave90EI1pe0aJAgXR1VRsrV7Bm3kh3Y89RX%2B7qxzPKv8DCGEQABoMNjM3NDIzMTgzODA1IgycHX1xtWZypzR9u98q3ANwTsg7nhkKmUrTdUz79Mj6NAmMAmPg70gfo7wwCCU%2B5kGM3%2B5N4oOWFrJuuVrxcKp5RhNohrW8yk%2FltIroUV2Z1yCq1xXSq3cgtq3okHrWGZH%2BPg%2FdmKh78BIiT3DI44m%2BwkxbWPTj%2BLs6HulG97rKqwppMUMz0gsRdJE17ZwP4Wv2Yy3xo8YiZmHSX9%2F%2FCB%2BgH4llc2MD3P6V7IfstA%2BAoNQWbu7oj1VrscBMVSEk9UjH6AuAJSMC9hHK5N2lFDuFBfxAi8Q%2BO%2FU5s%2BS6j4aQQYeiCo9C4GApiVQ7xqBFzZm4OQYfzv76xJcds%2FLc%2BfN3Ux20YeDsHHumfSsb15wAgjKjaK7GRNA310cGUrNnu%2BIrutzyvZOpUYw%2BDvETM7LDc4CclnWin8hQgFIg4wcjg684A1C2LR5SMHvfXvIJPDoNS%2Bc66HjM0srQv9ALhuhZhJv0m5EDJxtG7%2BTUVykXDp5UvDP7pRIjvx77hXvO1UQETy93HLJd1f1fDkNiRQp1xYJxjXbuplGfbh5SVIM06mpxOybOKrZ3uL%2FgV8Dfy56bwpKJuO8CDHllgUx67HcyP4d1GAAyVmRPINr5yUfj%2BChzLaebk7qZEQUIcXuP7MrjRPXk7zKUKU1%2FyjDqzMjEBjqkAavut79WjdHnq8rzqJQFtAP32tXLTTEQHae4iRQ9SZ7ZsK63hHw8Rybhf1eTu7Pna%2BLE6gsBTslWzyMmmZnYg9mMZaSMVUhFLrQpbH%2BtH4k13Y6FTGZJWPaRnDZXsBIbLgc0UKZEya3XEQb%2B8cUva3mwXHrii1Sv4qFyRKn%2Br8ZWqPHFCfHiAfMeoIAvy6VOavtL9yAgG12uXqG55GMmFo2x9kkL&X-Amz-Signature=31c604cd31ebfc414c4bd2a61e77f03748975634b9842431d781b1782ef4beda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO7B2WXU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCPNdbsrB0MU4qlBEem5ep1i8ixmhdZNxchDZ1Vd2YtIQIhAPdave90EI1pe0aJAgXR1VRsrV7Bm3kh3Y89RX%2B7qxzPKv8DCGEQABoMNjM3NDIzMTgzODA1IgycHX1xtWZypzR9u98q3ANwTsg7nhkKmUrTdUz79Mj6NAmMAmPg70gfo7wwCCU%2B5kGM3%2B5N4oOWFrJuuVrxcKp5RhNohrW8yk%2FltIroUV2Z1yCq1xXSq3cgtq3okHrWGZH%2BPg%2FdmKh78BIiT3DI44m%2BwkxbWPTj%2BLs6HulG97rKqwppMUMz0gsRdJE17ZwP4Wv2Yy3xo8YiZmHSX9%2F%2FCB%2BgH4llc2MD3P6V7IfstA%2BAoNQWbu7oj1VrscBMVSEk9UjH6AuAJSMC9hHK5N2lFDuFBfxAi8Q%2BO%2FU5s%2BS6j4aQQYeiCo9C4GApiVQ7xqBFzZm4OQYfzv76xJcds%2FLc%2BfN3Ux20YeDsHHumfSsb15wAgjKjaK7GRNA310cGUrNnu%2BIrutzyvZOpUYw%2BDvETM7LDc4CclnWin8hQgFIg4wcjg684A1C2LR5SMHvfXvIJPDoNS%2Bc66HjM0srQv9ALhuhZhJv0m5EDJxtG7%2BTUVykXDp5UvDP7pRIjvx77hXvO1UQETy93HLJd1f1fDkNiRQp1xYJxjXbuplGfbh5SVIM06mpxOybOKrZ3uL%2FgV8Dfy56bwpKJuO8CDHllgUx67HcyP4d1GAAyVmRPINr5yUfj%2BChzLaebk7qZEQUIcXuP7MrjRPXk7zKUKU1%2FyjDqzMjEBjqkAavut79WjdHnq8rzqJQFtAP32tXLTTEQHae4iRQ9SZ7ZsK63hHw8Rybhf1eTu7Pna%2BLE6gsBTslWzyMmmZnYg9mMZaSMVUhFLrQpbH%2BtH4k13Y6FTGZJWPaRnDZXsBIbLgc0UKZEya3XEQb%2B8cUva3mwXHrii1Sv4qFyRKn%2Br8ZWqPHFCfHiAfMeoIAvy6VOavtL9yAgG12uXqG55GMmFo2x9kkL&X-Amz-Signature=ac0e9ab5f4cea8cd14f3d9ad38175d916ae18b22ca290482b8114610548dcb48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO7B2WXU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCPNdbsrB0MU4qlBEem5ep1i8ixmhdZNxchDZ1Vd2YtIQIhAPdave90EI1pe0aJAgXR1VRsrV7Bm3kh3Y89RX%2B7qxzPKv8DCGEQABoMNjM3NDIzMTgzODA1IgycHX1xtWZypzR9u98q3ANwTsg7nhkKmUrTdUz79Mj6NAmMAmPg70gfo7wwCCU%2B5kGM3%2B5N4oOWFrJuuVrxcKp5RhNohrW8yk%2FltIroUV2Z1yCq1xXSq3cgtq3okHrWGZH%2BPg%2FdmKh78BIiT3DI44m%2BwkxbWPTj%2BLs6HulG97rKqwppMUMz0gsRdJE17ZwP4Wv2Yy3xo8YiZmHSX9%2F%2FCB%2BgH4llc2MD3P6V7IfstA%2BAoNQWbu7oj1VrscBMVSEk9UjH6AuAJSMC9hHK5N2lFDuFBfxAi8Q%2BO%2FU5s%2BS6j4aQQYeiCo9C4GApiVQ7xqBFzZm4OQYfzv76xJcds%2FLc%2BfN3Ux20YeDsHHumfSsb15wAgjKjaK7GRNA310cGUrNnu%2BIrutzyvZOpUYw%2BDvETM7LDc4CclnWin8hQgFIg4wcjg684A1C2LR5SMHvfXvIJPDoNS%2Bc66HjM0srQv9ALhuhZhJv0m5EDJxtG7%2BTUVykXDp5UvDP7pRIjvx77hXvO1UQETy93HLJd1f1fDkNiRQp1xYJxjXbuplGfbh5SVIM06mpxOybOKrZ3uL%2FgV8Dfy56bwpKJuO8CDHllgUx67HcyP4d1GAAyVmRPINr5yUfj%2BChzLaebk7qZEQUIcXuP7MrjRPXk7zKUKU1%2FyjDqzMjEBjqkAavut79WjdHnq8rzqJQFtAP32tXLTTEQHae4iRQ9SZ7ZsK63hHw8Rybhf1eTu7Pna%2BLE6gsBTslWzyMmmZnYg9mMZaSMVUhFLrQpbH%2BtH4k13Y6FTGZJWPaRnDZXsBIbLgc0UKZEya3XEQb%2B8cUva3mwXHrii1Sv4qFyRKn%2Br8ZWqPHFCfHiAfMeoIAvy6VOavtL9yAgG12uXqG55GMmFo2x9kkL&X-Amz-Signature=ae39d2b90b4b5912ec9ecf8ec80e4c19c9e87aab1f702f7355fc66441b611c93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO7B2WXU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCPNdbsrB0MU4qlBEem5ep1i8ixmhdZNxchDZ1Vd2YtIQIhAPdave90EI1pe0aJAgXR1VRsrV7Bm3kh3Y89RX%2B7qxzPKv8DCGEQABoMNjM3NDIzMTgzODA1IgycHX1xtWZypzR9u98q3ANwTsg7nhkKmUrTdUz79Mj6NAmMAmPg70gfo7wwCCU%2B5kGM3%2B5N4oOWFrJuuVrxcKp5RhNohrW8yk%2FltIroUV2Z1yCq1xXSq3cgtq3okHrWGZH%2BPg%2FdmKh78BIiT3DI44m%2BwkxbWPTj%2BLs6HulG97rKqwppMUMz0gsRdJE17ZwP4Wv2Yy3xo8YiZmHSX9%2F%2FCB%2BgH4llc2MD3P6V7IfstA%2BAoNQWbu7oj1VrscBMVSEk9UjH6AuAJSMC9hHK5N2lFDuFBfxAi8Q%2BO%2FU5s%2BS6j4aQQYeiCo9C4GApiVQ7xqBFzZm4OQYfzv76xJcds%2FLc%2BfN3Ux20YeDsHHumfSsb15wAgjKjaK7GRNA310cGUrNnu%2BIrutzyvZOpUYw%2BDvETM7LDc4CclnWin8hQgFIg4wcjg684A1C2LR5SMHvfXvIJPDoNS%2Bc66HjM0srQv9ALhuhZhJv0m5EDJxtG7%2BTUVykXDp5UvDP7pRIjvx77hXvO1UQETy93HLJd1f1fDkNiRQp1xYJxjXbuplGfbh5SVIM06mpxOybOKrZ3uL%2FgV8Dfy56bwpKJuO8CDHllgUx67HcyP4d1GAAyVmRPINr5yUfj%2BChzLaebk7qZEQUIcXuP7MrjRPXk7zKUKU1%2FyjDqzMjEBjqkAavut79WjdHnq8rzqJQFtAP32tXLTTEQHae4iRQ9SZ7ZsK63hHw8Rybhf1eTu7Pna%2BLE6gsBTslWzyMmmZnYg9mMZaSMVUhFLrQpbH%2BtH4k13Y6FTGZJWPaRnDZXsBIbLgc0UKZEya3XEQb%2B8cUva3mwXHrii1Sv4qFyRKn%2Br8ZWqPHFCfHiAfMeoIAvy6VOavtL9yAgG12uXqG55GMmFo2x9kkL&X-Amz-Signature=e81dc7e41e8ae0fe083555748b92493f0de09cab7cecfb1b0ae08bca7919d7c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
