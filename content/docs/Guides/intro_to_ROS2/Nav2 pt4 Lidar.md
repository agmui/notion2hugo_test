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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFOUSB5P%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHsEfxw%2Bqe%2BqJ%2Bx1p8HYqjYSj5kEcdB5vlzQbhnog%2FSYAiEAwVS3SjcN5T2FsT0aKj30MLoAE1idRMgoBKH7ltN6m14qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH78LHai79gvGEqiNSrcAynLmzFQlFmNFyfn7qKLAHBeW4lHSOGPfwkLp0UO4wkZgZXWDnUVduXGrPQgW7QuQVpxR1R1bXX8ylMQ1FYdX6i5MU%2Fg6gfEld4wJA6i7q73p29DpLR3VMoey5zdsgJNRzpIVMEUCW4j3xmBv2ge42HFn9Lvuq1k0zA6bsaJM7uG8L%2FwEBS4v4xOKjEFz9ntUxvzOZ0WVW5FDSVyXn7B66bh%2Fo6PiouxuGrB4RXqaiyAzm4mzqGVbD1a0FlmSExGaopRp%2FwjmcTj14Q1tePjVSele5EmgWoyOlVwDj2VWt5LInQnYVq7vvpsqOMz5aPFu5iLKAT7YgPqCYsV4ERCMQNHkPz8cUZTRFD5qCQm%2BEHjWsdpqvngo3ps%2BexexatAoQ6%2B6F2gCeyatwkY%2FfXi0qrTuFudE6co%2FUVcQhIkprereu9yZx1yTaTjQSU%2BmKErKEXuHePDhttXdBiQIkR8SWnEy31tiu0k1QE5PLG35Nu%2BiYXWKY0d0%2Bd2QO21QOAS4sX8cVZHF7leDb4KxonA98f8i%2FoQl2dyTYUyErIRmYY%2B7959KPFNUVCJJIoaAYK2oVvXmddeDnB4SfTx509gJEWbhZzVaa3Z8nR5ZSbt0Z5GxyrmJfw8WwJnGR0SMKygqsQGOqUBXHIFZqfejGbVUJRaYnrOxsrYBojnbFb3yJRcoOxhzKlCwMtRxDSzl2dZdasELPlf5Tb2xFrhNKv8zX0sdQqxpKdvy%2FFRpcb4KxT8IVtzPA1bOBqifeliz1FG3GkDglRWUUg2NDr%2BFmH9ca0uuR4G1YRoz3%2BrvtVfXM6E3jWge1mEf9VLr8C%2B36Qs%2F2r0k43SWGBkpT02%2BvOyh5Cn1Av2Wc3cxqLq&X-Amz-Signature=7bc9b762b1e7f64911f6d6ae27ba97db2e03d9fb20792bfaa096ea349e3d3f84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFOUSB5P%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHsEfxw%2Bqe%2BqJ%2Bx1p8HYqjYSj5kEcdB5vlzQbhnog%2FSYAiEAwVS3SjcN5T2FsT0aKj30MLoAE1idRMgoBKH7ltN6m14qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH78LHai79gvGEqiNSrcAynLmzFQlFmNFyfn7qKLAHBeW4lHSOGPfwkLp0UO4wkZgZXWDnUVduXGrPQgW7QuQVpxR1R1bXX8ylMQ1FYdX6i5MU%2Fg6gfEld4wJA6i7q73p29DpLR3VMoey5zdsgJNRzpIVMEUCW4j3xmBv2ge42HFn9Lvuq1k0zA6bsaJM7uG8L%2FwEBS4v4xOKjEFz9ntUxvzOZ0WVW5FDSVyXn7B66bh%2Fo6PiouxuGrB4RXqaiyAzm4mzqGVbD1a0FlmSExGaopRp%2FwjmcTj14Q1tePjVSele5EmgWoyOlVwDj2VWt5LInQnYVq7vvpsqOMz5aPFu5iLKAT7YgPqCYsV4ERCMQNHkPz8cUZTRFD5qCQm%2BEHjWsdpqvngo3ps%2BexexatAoQ6%2B6F2gCeyatwkY%2FfXi0qrTuFudE6co%2FUVcQhIkprereu9yZx1yTaTjQSU%2BmKErKEXuHePDhttXdBiQIkR8SWnEy31tiu0k1QE5PLG35Nu%2BiYXWKY0d0%2Bd2QO21QOAS4sX8cVZHF7leDb4KxonA98f8i%2FoQl2dyTYUyErIRmYY%2B7959KPFNUVCJJIoaAYK2oVvXmddeDnB4SfTx509gJEWbhZzVaa3Z8nR5ZSbt0Z5GxyrmJfw8WwJnGR0SMKygqsQGOqUBXHIFZqfejGbVUJRaYnrOxsrYBojnbFb3yJRcoOxhzKlCwMtRxDSzl2dZdasELPlf5Tb2xFrhNKv8zX0sdQqxpKdvy%2FFRpcb4KxT8IVtzPA1bOBqifeliz1FG3GkDglRWUUg2NDr%2BFmH9ca0uuR4G1YRoz3%2BrvtVfXM6E3jWge1mEf9VLr8C%2B36Qs%2F2r0k43SWGBkpT02%2BvOyh5Cn1Av2Wc3cxqLq&X-Amz-Signature=024528bea85f47932d1380cfa84e4998b61bb7faa76131caf0972291f39584cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFOUSB5P%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHsEfxw%2Bqe%2BqJ%2Bx1p8HYqjYSj5kEcdB5vlzQbhnog%2FSYAiEAwVS3SjcN5T2FsT0aKj30MLoAE1idRMgoBKH7ltN6m14qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH78LHai79gvGEqiNSrcAynLmzFQlFmNFyfn7qKLAHBeW4lHSOGPfwkLp0UO4wkZgZXWDnUVduXGrPQgW7QuQVpxR1R1bXX8ylMQ1FYdX6i5MU%2Fg6gfEld4wJA6i7q73p29DpLR3VMoey5zdsgJNRzpIVMEUCW4j3xmBv2ge42HFn9Lvuq1k0zA6bsaJM7uG8L%2FwEBS4v4xOKjEFz9ntUxvzOZ0WVW5FDSVyXn7B66bh%2Fo6PiouxuGrB4RXqaiyAzm4mzqGVbD1a0FlmSExGaopRp%2FwjmcTj14Q1tePjVSele5EmgWoyOlVwDj2VWt5LInQnYVq7vvpsqOMz5aPFu5iLKAT7YgPqCYsV4ERCMQNHkPz8cUZTRFD5qCQm%2BEHjWsdpqvngo3ps%2BexexatAoQ6%2B6F2gCeyatwkY%2FfXi0qrTuFudE6co%2FUVcQhIkprereu9yZx1yTaTjQSU%2BmKErKEXuHePDhttXdBiQIkR8SWnEy31tiu0k1QE5PLG35Nu%2BiYXWKY0d0%2Bd2QO21QOAS4sX8cVZHF7leDb4KxonA98f8i%2FoQl2dyTYUyErIRmYY%2B7959KPFNUVCJJIoaAYK2oVvXmddeDnB4SfTx509gJEWbhZzVaa3Z8nR5ZSbt0Z5GxyrmJfw8WwJnGR0SMKygqsQGOqUBXHIFZqfejGbVUJRaYnrOxsrYBojnbFb3yJRcoOxhzKlCwMtRxDSzl2dZdasELPlf5Tb2xFrhNKv8zX0sdQqxpKdvy%2FFRpcb4KxT8IVtzPA1bOBqifeliz1FG3GkDglRWUUg2NDr%2BFmH9ca0uuR4G1YRoz3%2BrvtVfXM6E3jWge1mEf9VLr8C%2B36Qs%2F2r0k43SWGBkpT02%2BvOyh5Cn1Av2Wc3cxqLq&X-Amz-Signature=66c1ebd8a2ce03380620274306f36151d85710e22b1542b2152aa22df865fe00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFOUSB5P%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHsEfxw%2Bqe%2BqJ%2Bx1p8HYqjYSj5kEcdB5vlzQbhnog%2FSYAiEAwVS3SjcN5T2FsT0aKj30MLoAE1idRMgoBKH7ltN6m14qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH78LHai79gvGEqiNSrcAynLmzFQlFmNFyfn7qKLAHBeW4lHSOGPfwkLp0UO4wkZgZXWDnUVduXGrPQgW7QuQVpxR1R1bXX8ylMQ1FYdX6i5MU%2Fg6gfEld4wJA6i7q73p29DpLR3VMoey5zdsgJNRzpIVMEUCW4j3xmBv2ge42HFn9Lvuq1k0zA6bsaJM7uG8L%2FwEBS4v4xOKjEFz9ntUxvzOZ0WVW5FDSVyXn7B66bh%2Fo6PiouxuGrB4RXqaiyAzm4mzqGVbD1a0FlmSExGaopRp%2FwjmcTj14Q1tePjVSele5EmgWoyOlVwDj2VWt5LInQnYVq7vvpsqOMz5aPFu5iLKAT7YgPqCYsV4ERCMQNHkPz8cUZTRFD5qCQm%2BEHjWsdpqvngo3ps%2BexexatAoQ6%2B6F2gCeyatwkY%2FfXi0qrTuFudE6co%2FUVcQhIkprereu9yZx1yTaTjQSU%2BmKErKEXuHePDhttXdBiQIkR8SWnEy31tiu0k1QE5PLG35Nu%2BiYXWKY0d0%2Bd2QO21QOAS4sX8cVZHF7leDb4KxonA98f8i%2FoQl2dyTYUyErIRmYY%2B7959KPFNUVCJJIoaAYK2oVvXmddeDnB4SfTx509gJEWbhZzVaa3Z8nR5ZSbt0Z5GxyrmJfw8WwJnGR0SMKygqsQGOqUBXHIFZqfejGbVUJRaYnrOxsrYBojnbFb3yJRcoOxhzKlCwMtRxDSzl2dZdasELPlf5Tb2xFrhNKv8zX0sdQqxpKdvy%2FFRpcb4KxT8IVtzPA1bOBqifeliz1FG3GkDglRWUUg2NDr%2BFmH9ca0uuR4G1YRoz3%2BrvtVfXM6E3jWge1mEf9VLr8C%2B36Qs%2F2r0k43SWGBkpT02%2BvOyh5Cn1Av2Wc3cxqLq&X-Amz-Signature=6b805a8673ba5c729eceee2f53cf21b72ecb662a1255154560b3995600291970&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFOUSB5P%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHsEfxw%2Bqe%2BqJ%2Bx1p8HYqjYSj5kEcdB5vlzQbhnog%2FSYAiEAwVS3SjcN5T2FsT0aKj30MLoAE1idRMgoBKH7ltN6m14qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH78LHai79gvGEqiNSrcAynLmzFQlFmNFyfn7qKLAHBeW4lHSOGPfwkLp0UO4wkZgZXWDnUVduXGrPQgW7QuQVpxR1R1bXX8ylMQ1FYdX6i5MU%2Fg6gfEld4wJA6i7q73p29DpLR3VMoey5zdsgJNRzpIVMEUCW4j3xmBv2ge42HFn9Lvuq1k0zA6bsaJM7uG8L%2FwEBS4v4xOKjEFz9ntUxvzOZ0WVW5FDSVyXn7B66bh%2Fo6PiouxuGrB4RXqaiyAzm4mzqGVbD1a0FlmSExGaopRp%2FwjmcTj14Q1tePjVSele5EmgWoyOlVwDj2VWt5LInQnYVq7vvpsqOMz5aPFu5iLKAT7YgPqCYsV4ERCMQNHkPz8cUZTRFD5qCQm%2BEHjWsdpqvngo3ps%2BexexatAoQ6%2B6F2gCeyatwkY%2FfXi0qrTuFudE6co%2FUVcQhIkprereu9yZx1yTaTjQSU%2BmKErKEXuHePDhttXdBiQIkR8SWnEy31tiu0k1QE5PLG35Nu%2BiYXWKY0d0%2Bd2QO21QOAS4sX8cVZHF7leDb4KxonA98f8i%2FoQl2dyTYUyErIRmYY%2B7959KPFNUVCJJIoaAYK2oVvXmddeDnB4SfTx509gJEWbhZzVaa3Z8nR5ZSbt0Z5GxyrmJfw8WwJnGR0SMKygqsQGOqUBXHIFZqfejGbVUJRaYnrOxsrYBojnbFb3yJRcoOxhzKlCwMtRxDSzl2dZdasELPlf5Tb2xFrhNKv8zX0sdQqxpKdvy%2FFRpcb4KxT8IVtzPA1bOBqifeliz1FG3GkDglRWUUg2NDr%2BFmH9ca0uuR4G1YRoz3%2BrvtVfXM6E3jWge1mEf9VLr8C%2B36Qs%2F2r0k43SWGBkpT02%2BvOyh5Cn1Av2Wc3cxqLq&X-Amz-Signature=a2070ff2e3df8bb4aba26006c62fde6d9e2cf04509f5c9a328227adc42fbe76a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFOUSB5P%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHsEfxw%2Bqe%2BqJ%2Bx1p8HYqjYSj5kEcdB5vlzQbhnog%2FSYAiEAwVS3SjcN5T2FsT0aKj30MLoAE1idRMgoBKH7ltN6m14qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH78LHai79gvGEqiNSrcAynLmzFQlFmNFyfn7qKLAHBeW4lHSOGPfwkLp0UO4wkZgZXWDnUVduXGrPQgW7QuQVpxR1R1bXX8ylMQ1FYdX6i5MU%2Fg6gfEld4wJA6i7q73p29DpLR3VMoey5zdsgJNRzpIVMEUCW4j3xmBv2ge42HFn9Lvuq1k0zA6bsaJM7uG8L%2FwEBS4v4xOKjEFz9ntUxvzOZ0WVW5FDSVyXn7B66bh%2Fo6PiouxuGrB4RXqaiyAzm4mzqGVbD1a0FlmSExGaopRp%2FwjmcTj14Q1tePjVSele5EmgWoyOlVwDj2VWt5LInQnYVq7vvpsqOMz5aPFu5iLKAT7YgPqCYsV4ERCMQNHkPz8cUZTRFD5qCQm%2BEHjWsdpqvngo3ps%2BexexatAoQ6%2B6F2gCeyatwkY%2FfXi0qrTuFudE6co%2FUVcQhIkprereu9yZx1yTaTjQSU%2BmKErKEXuHePDhttXdBiQIkR8SWnEy31tiu0k1QE5PLG35Nu%2BiYXWKY0d0%2Bd2QO21QOAS4sX8cVZHF7leDb4KxonA98f8i%2FoQl2dyTYUyErIRmYY%2B7959KPFNUVCJJIoaAYK2oVvXmddeDnB4SfTx509gJEWbhZzVaa3Z8nR5ZSbt0Z5GxyrmJfw8WwJnGR0SMKygqsQGOqUBXHIFZqfejGbVUJRaYnrOxsrYBojnbFb3yJRcoOxhzKlCwMtRxDSzl2dZdasELPlf5Tb2xFrhNKv8zX0sdQqxpKdvy%2FFRpcb4KxT8IVtzPA1bOBqifeliz1FG3GkDglRWUUg2NDr%2BFmH9ca0uuR4G1YRoz3%2BrvtVfXM6E3jWge1mEf9VLr8C%2B36Qs%2F2r0k43SWGBkpT02%2BvOyh5Cn1Av2Wc3cxqLq&X-Amz-Signature=284402eb305cc953f825c35eb1e88f555df7b8e32692df13cee6061612728cbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFOUSB5P%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHsEfxw%2Bqe%2BqJ%2Bx1p8HYqjYSj5kEcdB5vlzQbhnog%2FSYAiEAwVS3SjcN5T2FsT0aKj30MLoAE1idRMgoBKH7ltN6m14qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH78LHai79gvGEqiNSrcAynLmzFQlFmNFyfn7qKLAHBeW4lHSOGPfwkLp0UO4wkZgZXWDnUVduXGrPQgW7QuQVpxR1R1bXX8ylMQ1FYdX6i5MU%2Fg6gfEld4wJA6i7q73p29DpLR3VMoey5zdsgJNRzpIVMEUCW4j3xmBv2ge42HFn9Lvuq1k0zA6bsaJM7uG8L%2FwEBS4v4xOKjEFz9ntUxvzOZ0WVW5FDSVyXn7B66bh%2Fo6PiouxuGrB4RXqaiyAzm4mzqGVbD1a0FlmSExGaopRp%2FwjmcTj14Q1tePjVSele5EmgWoyOlVwDj2VWt5LInQnYVq7vvpsqOMz5aPFu5iLKAT7YgPqCYsV4ERCMQNHkPz8cUZTRFD5qCQm%2BEHjWsdpqvngo3ps%2BexexatAoQ6%2B6F2gCeyatwkY%2FfXi0qrTuFudE6co%2FUVcQhIkprereu9yZx1yTaTjQSU%2BmKErKEXuHePDhttXdBiQIkR8SWnEy31tiu0k1QE5PLG35Nu%2BiYXWKY0d0%2Bd2QO21QOAS4sX8cVZHF7leDb4KxonA98f8i%2FoQl2dyTYUyErIRmYY%2B7959KPFNUVCJJIoaAYK2oVvXmddeDnB4SfTx509gJEWbhZzVaa3Z8nR5ZSbt0Z5GxyrmJfw8WwJnGR0SMKygqsQGOqUBXHIFZqfejGbVUJRaYnrOxsrYBojnbFb3yJRcoOxhzKlCwMtRxDSzl2dZdasELPlf5Tb2xFrhNKv8zX0sdQqxpKdvy%2FFRpcb4KxT8IVtzPA1bOBqifeliz1FG3GkDglRWUUg2NDr%2BFmH9ca0uuR4G1YRoz3%2BrvtVfXM6E3jWge1mEf9VLr8C%2B36Qs%2F2r0k43SWGBkpT02%2BvOyh5Cn1Av2Wc3cxqLq&X-Amz-Signature=6695776682953e74ce628ac488062019f37f384a7ab8a7dc89214d1910d4704d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFOUSB5P%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHsEfxw%2Bqe%2BqJ%2Bx1p8HYqjYSj5kEcdB5vlzQbhnog%2FSYAiEAwVS3SjcN5T2FsT0aKj30MLoAE1idRMgoBKH7ltN6m14qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH78LHai79gvGEqiNSrcAynLmzFQlFmNFyfn7qKLAHBeW4lHSOGPfwkLp0UO4wkZgZXWDnUVduXGrPQgW7QuQVpxR1R1bXX8ylMQ1FYdX6i5MU%2Fg6gfEld4wJA6i7q73p29DpLR3VMoey5zdsgJNRzpIVMEUCW4j3xmBv2ge42HFn9Lvuq1k0zA6bsaJM7uG8L%2FwEBS4v4xOKjEFz9ntUxvzOZ0WVW5FDSVyXn7B66bh%2Fo6PiouxuGrB4RXqaiyAzm4mzqGVbD1a0FlmSExGaopRp%2FwjmcTj14Q1tePjVSele5EmgWoyOlVwDj2VWt5LInQnYVq7vvpsqOMz5aPFu5iLKAT7YgPqCYsV4ERCMQNHkPz8cUZTRFD5qCQm%2BEHjWsdpqvngo3ps%2BexexatAoQ6%2B6F2gCeyatwkY%2FfXi0qrTuFudE6co%2FUVcQhIkprereu9yZx1yTaTjQSU%2BmKErKEXuHePDhttXdBiQIkR8SWnEy31tiu0k1QE5PLG35Nu%2BiYXWKY0d0%2Bd2QO21QOAS4sX8cVZHF7leDb4KxonA98f8i%2FoQl2dyTYUyErIRmYY%2B7959KPFNUVCJJIoaAYK2oVvXmddeDnB4SfTx509gJEWbhZzVaa3Z8nR5ZSbt0Z5GxyrmJfw8WwJnGR0SMKygqsQGOqUBXHIFZqfejGbVUJRaYnrOxsrYBojnbFb3yJRcoOxhzKlCwMtRxDSzl2dZdasELPlf5Tb2xFrhNKv8zX0sdQqxpKdvy%2FFRpcb4KxT8IVtzPA1bOBqifeliz1FG3GkDglRWUUg2NDr%2BFmH9ca0uuR4G1YRoz3%2BrvtVfXM6E3jWge1mEf9VLr8C%2B36Qs%2F2r0k43SWGBkpT02%2BvOyh5Cn1Av2Wc3cxqLq&X-Amz-Signature=269617a55032e77b6613bddfeab81aab70eb9d765a930f9c5f7682a7a4b284a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFOUSB5P%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHsEfxw%2Bqe%2BqJ%2Bx1p8HYqjYSj5kEcdB5vlzQbhnog%2FSYAiEAwVS3SjcN5T2FsT0aKj30MLoAE1idRMgoBKH7ltN6m14qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH78LHai79gvGEqiNSrcAynLmzFQlFmNFyfn7qKLAHBeW4lHSOGPfwkLp0UO4wkZgZXWDnUVduXGrPQgW7QuQVpxR1R1bXX8ylMQ1FYdX6i5MU%2Fg6gfEld4wJA6i7q73p29DpLR3VMoey5zdsgJNRzpIVMEUCW4j3xmBv2ge42HFn9Lvuq1k0zA6bsaJM7uG8L%2FwEBS4v4xOKjEFz9ntUxvzOZ0WVW5FDSVyXn7B66bh%2Fo6PiouxuGrB4RXqaiyAzm4mzqGVbD1a0FlmSExGaopRp%2FwjmcTj14Q1tePjVSele5EmgWoyOlVwDj2VWt5LInQnYVq7vvpsqOMz5aPFu5iLKAT7YgPqCYsV4ERCMQNHkPz8cUZTRFD5qCQm%2BEHjWsdpqvngo3ps%2BexexatAoQ6%2B6F2gCeyatwkY%2FfXi0qrTuFudE6co%2FUVcQhIkprereu9yZx1yTaTjQSU%2BmKErKEXuHePDhttXdBiQIkR8SWnEy31tiu0k1QE5PLG35Nu%2BiYXWKY0d0%2Bd2QO21QOAS4sX8cVZHF7leDb4KxonA98f8i%2FoQl2dyTYUyErIRmYY%2B7959KPFNUVCJJIoaAYK2oVvXmddeDnB4SfTx509gJEWbhZzVaa3Z8nR5ZSbt0Z5GxyrmJfw8WwJnGR0SMKygqsQGOqUBXHIFZqfejGbVUJRaYnrOxsrYBojnbFb3yJRcoOxhzKlCwMtRxDSzl2dZdasELPlf5Tb2xFrhNKv8zX0sdQqxpKdvy%2FFRpcb4KxT8IVtzPA1bOBqifeliz1FG3GkDglRWUUg2NDr%2BFmH9ca0uuR4G1YRoz3%2BrvtVfXM6E3jWge1mEf9VLr8C%2B36Qs%2F2r0k43SWGBkpT02%2BvOyh5Cn1Av2Wc3cxqLq&X-Amz-Signature=e4133488d9913ddb8a510c733bb45a1f26097209a9119edfb248427e1f9a49d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFOUSB5P%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHsEfxw%2Bqe%2BqJ%2Bx1p8HYqjYSj5kEcdB5vlzQbhnog%2FSYAiEAwVS3SjcN5T2FsT0aKj30MLoAE1idRMgoBKH7ltN6m14qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH78LHai79gvGEqiNSrcAynLmzFQlFmNFyfn7qKLAHBeW4lHSOGPfwkLp0UO4wkZgZXWDnUVduXGrPQgW7QuQVpxR1R1bXX8ylMQ1FYdX6i5MU%2Fg6gfEld4wJA6i7q73p29DpLR3VMoey5zdsgJNRzpIVMEUCW4j3xmBv2ge42HFn9Lvuq1k0zA6bsaJM7uG8L%2FwEBS4v4xOKjEFz9ntUxvzOZ0WVW5FDSVyXn7B66bh%2Fo6PiouxuGrB4RXqaiyAzm4mzqGVbD1a0FlmSExGaopRp%2FwjmcTj14Q1tePjVSele5EmgWoyOlVwDj2VWt5LInQnYVq7vvpsqOMz5aPFu5iLKAT7YgPqCYsV4ERCMQNHkPz8cUZTRFD5qCQm%2BEHjWsdpqvngo3ps%2BexexatAoQ6%2B6F2gCeyatwkY%2FfXi0qrTuFudE6co%2FUVcQhIkprereu9yZx1yTaTjQSU%2BmKErKEXuHePDhttXdBiQIkR8SWnEy31tiu0k1QE5PLG35Nu%2BiYXWKY0d0%2Bd2QO21QOAS4sX8cVZHF7leDb4KxonA98f8i%2FoQl2dyTYUyErIRmYY%2B7959KPFNUVCJJIoaAYK2oVvXmddeDnB4SfTx509gJEWbhZzVaa3Z8nR5ZSbt0Z5GxyrmJfw8WwJnGR0SMKygqsQGOqUBXHIFZqfejGbVUJRaYnrOxsrYBojnbFb3yJRcoOxhzKlCwMtRxDSzl2dZdasELPlf5Tb2xFrhNKv8zX0sdQqxpKdvy%2FFRpcb4KxT8IVtzPA1bOBqifeliz1FG3GkDglRWUUg2NDr%2BFmH9ca0uuR4G1YRoz3%2BrvtVfXM6E3jWge1mEf9VLr8C%2B36Qs%2F2r0k43SWGBkpT02%2BvOyh5Cn1Av2Wc3cxqLq&X-Amz-Signature=5f467137e2ccd72ed50f2ab97c17bd7386fb788d9a03308345bde0e5aee16419&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
