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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USICMVB5%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPcBt2yoASzSifknCw7YQJIT90o5waYe8PdM2s80kpIAiEAg14C2Y%2Bg0DB8qj3Z6C1kJ2NYaUptip3rQYVjLjhWZqQqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEEZIvJMufzeCWZaCrcAzMujcm60z5qcBt7omSEVxE%2FqRXC9cvz%2FA%2BZkrNanKPqwctJSrEdjXxXmAivp0IHY2aWljjKhvFNQpJAmu6XL9GYA2U1M2suKDjcGW4nzy4VO508QM%2BN3N0O%2FWzYpJDn9JGzh0o83SBPJkXq9r15MsJtixoeUIFa5Cj76lg4oSB%2BMu32yAtM43cQlhdfc5%2BYI03vVzKfE%2BREskPo23Rnyb1dzNOVzk%2FiIbyjkdPf%2B1A8fPrTzpkur9m9pgVaGVCoDI%2BXQPAyP5BxXTiTEibDJTiP%2Fksp%2B3qYCW6miAjC8ihARsa5moYZqfqQugomL6XFl7kUi9ST3FMOsDhowCeThYN4Y7gTwQmb2cK7MIjag4FkPPA1jhVvBLcYPenYqs59NtotBjAN0lIBYW9MHPx4jRu4x18A5pHlrKJWK0DUIjPjRa2h1gSBzSxv5gJrJR9lTJuvBuleNoUYJIq4IdQNhHcF0EjJvwXUjYXRS9iPoVVxx6htSkpIguPD0LTgeK1mhcyek3NH1FEClvq7mYauiCMhBRPBW12iXRbV4X2pgCl0sifyfrw0B47LDDy73C8cuSxvY6%2BRLWlNmqwuYWjNmOuE0yb8S%2FpuevEw3vkRDvrXv1wScXPNGWm5pKPdMKys5sQGOqUBg32%2FKkSxIRSd%2F5mvG%2B%2BsWVhn5zGBRaT6X2ZiJBUw2Nn9mhnZ6O0eDHK32ldxEbA73y%2BNoKGxZohAVKhqCtrpJ5kmnlkNjLINpeRsE8bJJ6398WGcjYgUG5c1HYRcnx%2F04P1ymcud9eve3Za0Cj3jjFm2SvLmuyik3Ojafm4KyP7JiWfhfidi4idacoPbM4bK3aG24vwNsmf%2B8CkjKWrwSKFjnvh6&X-Amz-Signature=28b85b1f2e96e18198375b73b2a4cad5b3c28bb02f9ea0e58ccfe44f950bdd61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W64WAV75%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGaw0Ij6A08KRrwizlD8Va6Whbmt9DBEYazhDqdUiQ%2FxAiEAxDK%2FWd6vnfL0E9m4fu5S32lG2Vkgr%2BbAI4e0gTi6EXEqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHmf%2FR0KpHAmESgp6SrcA9iUhfMaAVu5WoiGPFMA%2BfxUtFsJ4%2BRQ1iN%2BxqueG3L2amHUZQMn2AsHl9AZzWHtchHtFhQcJQYprLav4%2BcexfycshIwTHM0qEbBTuJ1kQ%2FiIoaTHlZsZ7T5%2FKtKliCswjxmQ%2Fc8Gclt0%2B%2B7DSrwTKdA502njolUOX9STJ7eAi7CXIznliCDAO6yCdbFfUJSL3%2Fopa7sQtEbVFm8ze01ga73w4L8ptUSQIOmIjZvUTKRCp3aZfP%2FBhooxLEALI6po8Vx48AqZ4C%2BtP8%2F0dID%2FCbusPfNE38ZO%2BiXnzu2qBG5RUhQIbxKKOX8Ki%2FfY4aZhRT3PRINPaz9x2aoViflQ7%2FD%2BwV1JD%2FeVa3TpSMjJ7WRkNrsmB20sXu4Z56%2BxDnBuO4qkDviiIKpGgZfzcWU8%2BCKMeUK4Fy6%2BnQuw1Vkc5BuHek4HGYeyPZd1E0YYlx9PM7x1jj8Xb4FmAPtqFW%2BHMQb4g3mlU4yC66DcGrI2g1zPub2Ix6wKFSyXnqgKqLFhx0V2q9cXprXx4cUe9JeKC%2BOtY8m%2BJ2AADGcpOnIoFniQdHVzrHL3ACFc7HMNh8hiGB8gyR9l41F8DpK3CDx6of4ChR7u8A5nJbClDxmPT060xPDXpDs6J4%2BWmgmMK2s5sQGOqUB03iDhg8zEyOKyylOiE2F2EDwA%2BWPhaPHnppQM3geflx0VFMliqSDq27rE2ARC8a%2BYZ2SkYoUH%2BJI0tEePjFaDO4RFEOphbBauoWklLqxV4tzkvbd%2FlLgxY8ZoDOANmnAyeEUbl92RIE1FbM%2Bz7MsjiHxxxJylZCn6KZEVPFx56el4AFBYc9ODD%2F9843X8xRogjlixfaFFgQdO2kWlelryBA3ELlj&X-Amz-Signature=91ba3a227acf8b6b559c07d2761e8522f225df3a919052987e312be7b465b637&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W64WAV75%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGaw0Ij6A08KRrwizlD8Va6Whbmt9DBEYazhDqdUiQ%2FxAiEAxDK%2FWd6vnfL0E9m4fu5S32lG2Vkgr%2BbAI4e0gTi6EXEqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHmf%2FR0KpHAmESgp6SrcA9iUhfMaAVu5WoiGPFMA%2BfxUtFsJ4%2BRQ1iN%2BxqueG3L2amHUZQMn2AsHl9AZzWHtchHtFhQcJQYprLav4%2BcexfycshIwTHM0qEbBTuJ1kQ%2FiIoaTHlZsZ7T5%2FKtKliCswjxmQ%2Fc8Gclt0%2B%2B7DSrwTKdA502njolUOX9STJ7eAi7CXIznliCDAO6yCdbFfUJSL3%2Fopa7sQtEbVFm8ze01ga73w4L8ptUSQIOmIjZvUTKRCp3aZfP%2FBhooxLEALI6po8Vx48AqZ4C%2BtP8%2F0dID%2FCbusPfNE38ZO%2BiXnzu2qBG5RUhQIbxKKOX8Ki%2FfY4aZhRT3PRINPaz9x2aoViflQ7%2FD%2BwV1JD%2FeVa3TpSMjJ7WRkNrsmB20sXu4Z56%2BxDnBuO4qkDviiIKpGgZfzcWU8%2BCKMeUK4Fy6%2BnQuw1Vkc5BuHek4HGYeyPZd1E0YYlx9PM7x1jj8Xb4FmAPtqFW%2BHMQb4g3mlU4yC66DcGrI2g1zPub2Ix6wKFSyXnqgKqLFhx0V2q9cXprXx4cUe9JeKC%2BOtY8m%2BJ2AADGcpOnIoFniQdHVzrHL3ACFc7HMNh8hiGB8gyR9l41F8DpK3CDx6of4ChR7u8A5nJbClDxmPT060xPDXpDs6J4%2BWmgmMK2s5sQGOqUB03iDhg8zEyOKyylOiE2F2EDwA%2BWPhaPHnppQM3geflx0VFMliqSDq27rE2ARC8a%2BYZ2SkYoUH%2BJI0tEePjFaDO4RFEOphbBauoWklLqxV4tzkvbd%2FlLgxY8ZoDOANmnAyeEUbl92RIE1FbM%2Bz7MsjiHxxxJylZCn6KZEVPFx56el4AFBYc9ODD%2F9843X8xRogjlixfaFFgQdO2kWlelryBA3ELlj&X-Amz-Signature=4a93185deaa86c128e4536a4e12efe40b6bc30f5f87975536fd49141111577fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W64WAV75%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGaw0Ij6A08KRrwizlD8Va6Whbmt9DBEYazhDqdUiQ%2FxAiEAxDK%2FWd6vnfL0E9m4fu5S32lG2Vkgr%2BbAI4e0gTi6EXEqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHmf%2FR0KpHAmESgp6SrcA9iUhfMaAVu5WoiGPFMA%2BfxUtFsJ4%2BRQ1iN%2BxqueG3L2amHUZQMn2AsHl9AZzWHtchHtFhQcJQYprLav4%2BcexfycshIwTHM0qEbBTuJ1kQ%2FiIoaTHlZsZ7T5%2FKtKliCswjxmQ%2Fc8Gclt0%2B%2B7DSrwTKdA502njolUOX9STJ7eAi7CXIznliCDAO6yCdbFfUJSL3%2Fopa7sQtEbVFm8ze01ga73w4L8ptUSQIOmIjZvUTKRCp3aZfP%2FBhooxLEALI6po8Vx48AqZ4C%2BtP8%2F0dID%2FCbusPfNE38ZO%2BiXnzu2qBG5RUhQIbxKKOX8Ki%2FfY4aZhRT3PRINPaz9x2aoViflQ7%2FD%2BwV1JD%2FeVa3TpSMjJ7WRkNrsmB20sXu4Z56%2BxDnBuO4qkDviiIKpGgZfzcWU8%2BCKMeUK4Fy6%2BnQuw1Vkc5BuHek4HGYeyPZd1E0YYlx9PM7x1jj8Xb4FmAPtqFW%2BHMQb4g3mlU4yC66DcGrI2g1zPub2Ix6wKFSyXnqgKqLFhx0V2q9cXprXx4cUe9JeKC%2BOtY8m%2BJ2AADGcpOnIoFniQdHVzrHL3ACFc7HMNh8hiGB8gyR9l41F8DpK3CDx6of4ChR7u8A5nJbClDxmPT060xPDXpDs6J4%2BWmgmMK2s5sQGOqUB03iDhg8zEyOKyylOiE2F2EDwA%2BWPhaPHnppQM3geflx0VFMliqSDq27rE2ARC8a%2BYZ2SkYoUH%2BJI0tEePjFaDO4RFEOphbBauoWklLqxV4tzkvbd%2FlLgxY8ZoDOANmnAyeEUbl92RIE1FbM%2Bz7MsjiHxxxJylZCn6KZEVPFx56el4AFBYc9ODD%2F9843X8xRogjlixfaFFgQdO2kWlelryBA3ELlj&X-Amz-Signature=2a8b1c5880ad5941e138bf96018b5f78c5f47b4ceb68d3b9bddc0b192632eeaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W64WAV75%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGaw0Ij6A08KRrwizlD8Va6Whbmt9DBEYazhDqdUiQ%2FxAiEAxDK%2FWd6vnfL0E9m4fu5S32lG2Vkgr%2BbAI4e0gTi6EXEqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHmf%2FR0KpHAmESgp6SrcA9iUhfMaAVu5WoiGPFMA%2BfxUtFsJ4%2BRQ1iN%2BxqueG3L2amHUZQMn2AsHl9AZzWHtchHtFhQcJQYprLav4%2BcexfycshIwTHM0qEbBTuJ1kQ%2FiIoaTHlZsZ7T5%2FKtKliCswjxmQ%2Fc8Gclt0%2B%2B7DSrwTKdA502njolUOX9STJ7eAi7CXIznliCDAO6yCdbFfUJSL3%2Fopa7sQtEbVFm8ze01ga73w4L8ptUSQIOmIjZvUTKRCp3aZfP%2FBhooxLEALI6po8Vx48AqZ4C%2BtP8%2F0dID%2FCbusPfNE38ZO%2BiXnzu2qBG5RUhQIbxKKOX8Ki%2FfY4aZhRT3PRINPaz9x2aoViflQ7%2FD%2BwV1JD%2FeVa3TpSMjJ7WRkNrsmB20sXu4Z56%2BxDnBuO4qkDviiIKpGgZfzcWU8%2BCKMeUK4Fy6%2BnQuw1Vkc5BuHek4HGYeyPZd1E0YYlx9PM7x1jj8Xb4FmAPtqFW%2BHMQb4g3mlU4yC66DcGrI2g1zPub2Ix6wKFSyXnqgKqLFhx0V2q9cXprXx4cUe9JeKC%2BOtY8m%2BJ2AADGcpOnIoFniQdHVzrHL3ACFc7HMNh8hiGB8gyR9l41F8DpK3CDx6of4ChR7u8A5nJbClDxmPT060xPDXpDs6J4%2BWmgmMK2s5sQGOqUB03iDhg8zEyOKyylOiE2F2EDwA%2BWPhaPHnppQM3geflx0VFMliqSDq27rE2ARC8a%2BYZ2SkYoUH%2BJI0tEePjFaDO4RFEOphbBauoWklLqxV4tzkvbd%2FlLgxY8ZoDOANmnAyeEUbl92RIE1FbM%2Bz7MsjiHxxxJylZCn6KZEVPFx56el4AFBYc9ODD%2F9843X8xRogjlixfaFFgQdO2kWlelryBA3ELlj&X-Amz-Signature=8d22f396779511c5f260ac4436a69eb745f59fc498ec43b4933cf8318d7daae4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W64WAV75%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGaw0Ij6A08KRrwizlD8Va6Whbmt9DBEYazhDqdUiQ%2FxAiEAxDK%2FWd6vnfL0E9m4fu5S32lG2Vkgr%2BbAI4e0gTi6EXEqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHmf%2FR0KpHAmESgp6SrcA9iUhfMaAVu5WoiGPFMA%2BfxUtFsJ4%2BRQ1iN%2BxqueG3L2amHUZQMn2AsHl9AZzWHtchHtFhQcJQYprLav4%2BcexfycshIwTHM0qEbBTuJ1kQ%2FiIoaTHlZsZ7T5%2FKtKliCswjxmQ%2Fc8Gclt0%2B%2B7DSrwTKdA502njolUOX9STJ7eAi7CXIznliCDAO6yCdbFfUJSL3%2Fopa7sQtEbVFm8ze01ga73w4L8ptUSQIOmIjZvUTKRCp3aZfP%2FBhooxLEALI6po8Vx48AqZ4C%2BtP8%2F0dID%2FCbusPfNE38ZO%2BiXnzu2qBG5RUhQIbxKKOX8Ki%2FfY4aZhRT3PRINPaz9x2aoViflQ7%2FD%2BwV1JD%2FeVa3TpSMjJ7WRkNrsmB20sXu4Z56%2BxDnBuO4qkDviiIKpGgZfzcWU8%2BCKMeUK4Fy6%2BnQuw1Vkc5BuHek4HGYeyPZd1E0YYlx9PM7x1jj8Xb4FmAPtqFW%2BHMQb4g3mlU4yC66DcGrI2g1zPub2Ix6wKFSyXnqgKqLFhx0V2q9cXprXx4cUe9JeKC%2BOtY8m%2BJ2AADGcpOnIoFniQdHVzrHL3ACFc7HMNh8hiGB8gyR9l41F8DpK3CDx6of4ChR7u8A5nJbClDxmPT060xPDXpDs6J4%2BWmgmMK2s5sQGOqUB03iDhg8zEyOKyylOiE2F2EDwA%2BWPhaPHnppQM3geflx0VFMliqSDq27rE2ARC8a%2BYZ2SkYoUH%2BJI0tEePjFaDO4RFEOphbBauoWklLqxV4tzkvbd%2FlLgxY8ZoDOANmnAyeEUbl92RIE1FbM%2Bz7MsjiHxxxJylZCn6KZEVPFx56el4AFBYc9ODD%2F9843X8xRogjlixfaFFgQdO2kWlelryBA3ELlj&X-Amz-Signature=5b701f22041767bc8769d49c85af583da592dabbc2edee35ad4bb8ea6f8fad6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W64WAV75%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGaw0Ij6A08KRrwizlD8Va6Whbmt9DBEYazhDqdUiQ%2FxAiEAxDK%2FWd6vnfL0E9m4fu5S32lG2Vkgr%2BbAI4e0gTi6EXEqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHmf%2FR0KpHAmESgp6SrcA9iUhfMaAVu5WoiGPFMA%2BfxUtFsJ4%2BRQ1iN%2BxqueG3L2amHUZQMn2AsHl9AZzWHtchHtFhQcJQYprLav4%2BcexfycshIwTHM0qEbBTuJ1kQ%2FiIoaTHlZsZ7T5%2FKtKliCswjxmQ%2Fc8Gclt0%2B%2B7DSrwTKdA502njolUOX9STJ7eAi7CXIznliCDAO6yCdbFfUJSL3%2Fopa7sQtEbVFm8ze01ga73w4L8ptUSQIOmIjZvUTKRCp3aZfP%2FBhooxLEALI6po8Vx48AqZ4C%2BtP8%2F0dID%2FCbusPfNE38ZO%2BiXnzu2qBG5RUhQIbxKKOX8Ki%2FfY4aZhRT3PRINPaz9x2aoViflQ7%2FD%2BwV1JD%2FeVa3TpSMjJ7WRkNrsmB20sXu4Z56%2BxDnBuO4qkDviiIKpGgZfzcWU8%2BCKMeUK4Fy6%2BnQuw1Vkc5BuHek4HGYeyPZd1E0YYlx9PM7x1jj8Xb4FmAPtqFW%2BHMQb4g3mlU4yC66DcGrI2g1zPub2Ix6wKFSyXnqgKqLFhx0V2q9cXprXx4cUe9JeKC%2BOtY8m%2BJ2AADGcpOnIoFniQdHVzrHL3ACFc7HMNh8hiGB8gyR9l41F8DpK3CDx6of4ChR7u8A5nJbClDxmPT060xPDXpDs6J4%2BWmgmMK2s5sQGOqUB03iDhg8zEyOKyylOiE2F2EDwA%2BWPhaPHnppQM3geflx0VFMliqSDq27rE2ARC8a%2BYZ2SkYoUH%2BJI0tEePjFaDO4RFEOphbBauoWklLqxV4tzkvbd%2FlLgxY8ZoDOANmnAyeEUbl92RIE1FbM%2Bz7MsjiHxxxJylZCn6KZEVPFx56el4AFBYc9ODD%2F9843X8xRogjlixfaFFgQdO2kWlelryBA3ELlj&X-Amz-Signature=f765bd1004371751759becc8a54476b458622ef1380f2a3012c567936de11cdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W64WAV75%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGaw0Ij6A08KRrwizlD8Va6Whbmt9DBEYazhDqdUiQ%2FxAiEAxDK%2FWd6vnfL0E9m4fu5S32lG2Vkgr%2BbAI4e0gTi6EXEqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHmf%2FR0KpHAmESgp6SrcA9iUhfMaAVu5WoiGPFMA%2BfxUtFsJ4%2BRQ1iN%2BxqueG3L2amHUZQMn2AsHl9AZzWHtchHtFhQcJQYprLav4%2BcexfycshIwTHM0qEbBTuJ1kQ%2FiIoaTHlZsZ7T5%2FKtKliCswjxmQ%2Fc8Gclt0%2B%2B7DSrwTKdA502njolUOX9STJ7eAi7CXIznliCDAO6yCdbFfUJSL3%2Fopa7sQtEbVFm8ze01ga73w4L8ptUSQIOmIjZvUTKRCp3aZfP%2FBhooxLEALI6po8Vx48AqZ4C%2BtP8%2F0dID%2FCbusPfNE38ZO%2BiXnzu2qBG5RUhQIbxKKOX8Ki%2FfY4aZhRT3PRINPaz9x2aoViflQ7%2FD%2BwV1JD%2FeVa3TpSMjJ7WRkNrsmB20sXu4Z56%2BxDnBuO4qkDviiIKpGgZfzcWU8%2BCKMeUK4Fy6%2BnQuw1Vkc5BuHek4HGYeyPZd1E0YYlx9PM7x1jj8Xb4FmAPtqFW%2BHMQb4g3mlU4yC66DcGrI2g1zPub2Ix6wKFSyXnqgKqLFhx0V2q9cXprXx4cUe9JeKC%2BOtY8m%2BJ2AADGcpOnIoFniQdHVzrHL3ACFc7HMNh8hiGB8gyR9l41F8DpK3CDx6of4ChR7u8A5nJbClDxmPT060xPDXpDs6J4%2BWmgmMK2s5sQGOqUB03iDhg8zEyOKyylOiE2F2EDwA%2BWPhaPHnppQM3geflx0VFMliqSDq27rE2ARC8a%2BYZ2SkYoUH%2BJI0tEePjFaDO4RFEOphbBauoWklLqxV4tzkvbd%2FlLgxY8ZoDOANmnAyeEUbl92RIE1FbM%2Bz7MsjiHxxxJylZCn6KZEVPFx56el4AFBYc9ODD%2F9843X8xRogjlixfaFFgQdO2kWlelryBA3ELlj&X-Amz-Signature=d9cedd8798611591d04b902cad1edb914e88d6189f6861dd743e8abc425bd593&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W64WAV75%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGaw0Ij6A08KRrwizlD8Va6Whbmt9DBEYazhDqdUiQ%2FxAiEAxDK%2FWd6vnfL0E9m4fu5S32lG2Vkgr%2BbAI4e0gTi6EXEqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHmf%2FR0KpHAmESgp6SrcA9iUhfMaAVu5WoiGPFMA%2BfxUtFsJ4%2BRQ1iN%2BxqueG3L2amHUZQMn2AsHl9AZzWHtchHtFhQcJQYprLav4%2BcexfycshIwTHM0qEbBTuJ1kQ%2FiIoaTHlZsZ7T5%2FKtKliCswjxmQ%2Fc8Gclt0%2B%2B7DSrwTKdA502njolUOX9STJ7eAi7CXIznliCDAO6yCdbFfUJSL3%2Fopa7sQtEbVFm8ze01ga73w4L8ptUSQIOmIjZvUTKRCp3aZfP%2FBhooxLEALI6po8Vx48AqZ4C%2BtP8%2F0dID%2FCbusPfNE38ZO%2BiXnzu2qBG5RUhQIbxKKOX8Ki%2FfY4aZhRT3PRINPaz9x2aoViflQ7%2FD%2BwV1JD%2FeVa3TpSMjJ7WRkNrsmB20sXu4Z56%2BxDnBuO4qkDviiIKpGgZfzcWU8%2BCKMeUK4Fy6%2BnQuw1Vkc5BuHek4HGYeyPZd1E0YYlx9PM7x1jj8Xb4FmAPtqFW%2BHMQb4g3mlU4yC66DcGrI2g1zPub2Ix6wKFSyXnqgKqLFhx0V2q9cXprXx4cUe9JeKC%2BOtY8m%2BJ2AADGcpOnIoFniQdHVzrHL3ACFc7HMNh8hiGB8gyR9l41F8DpK3CDx6of4ChR7u8A5nJbClDxmPT060xPDXpDs6J4%2BWmgmMK2s5sQGOqUB03iDhg8zEyOKyylOiE2F2EDwA%2BWPhaPHnppQM3geflx0VFMliqSDq27rE2ARC8a%2BYZ2SkYoUH%2BJI0tEePjFaDO4RFEOphbBauoWklLqxV4tzkvbd%2FlLgxY8ZoDOANmnAyeEUbl92RIE1FbM%2Bz7MsjiHxxxJylZCn6KZEVPFx56el4AFBYc9ODD%2F9843X8xRogjlixfaFFgQdO2kWlelryBA3ELlj&X-Amz-Signature=552b8af30ce27b50fdc8270cdf6603751d88792958b433c88cd6d53333c07c72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W64WAV75%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGaw0Ij6A08KRrwizlD8Va6Whbmt9DBEYazhDqdUiQ%2FxAiEAxDK%2FWd6vnfL0E9m4fu5S32lG2Vkgr%2BbAI4e0gTi6EXEqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHmf%2FR0KpHAmESgp6SrcA9iUhfMaAVu5WoiGPFMA%2BfxUtFsJ4%2BRQ1iN%2BxqueG3L2amHUZQMn2AsHl9AZzWHtchHtFhQcJQYprLav4%2BcexfycshIwTHM0qEbBTuJ1kQ%2FiIoaTHlZsZ7T5%2FKtKliCswjxmQ%2Fc8Gclt0%2B%2B7DSrwTKdA502njolUOX9STJ7eAi7CXIznliCDAO6yCdbFfUJSL3%2Fopa7sQtEbVFm8ze01ga73w4L8ptUSQIOmIjZvUTKRCp3aZfP%2FBhooxLEALI6po8Vx48AqZ4C%2BtP8%2F0dID%2FCbusPfNE38ZO%2BiXnzu2qBG5RUhQIbxKKOX8Ki%2FfY4aZhRT3PRINPaz9x2aoViflQ7%2FD%2BwV1JD%2FeVa3TpSMjJ7WRkNrsmB20sXu4Z56%2BxDnBuO4qkDviiIKpGgZfzcWU8%2BCKMeUK4Fy6%2BnQuw1Vkc5BuHek4HGYeyPZd1E0YYlx9PM7x1jj8Xb4FmAPtqFW%2BHMQb4g3mlU4yC66DcGrI2g1zPub2Ix6wKFSyXnqgKqLFhx0V2q9cXprXx4cUe9JeKC%2BOtY8m%2BJ2AADGcpOnIoFniQdHVzrHL3ACFc7HMNh8hiGB8gyR9l41F8DpK3CDx6of4ChR7u8A5nJbClDxmPT060xPDXpDs6J4%2BWmgmMK2s5sQGOqUB03iDhg8zEyOKyylOiE2F2EDwA%2BWPhaPHnppQM3geflx0VFMliqSDq27rE2ARC8a%2BYZ2SkYoUH%2BJI0tEePjFaDO4RFEOphbBauoWklLqxV4tzkvbd%2FlLgxY8ZoDOANmnAyeEUbl92RIE1FbM%2Bz7MsjiHxxxJylZCn6KZEVPFx56el4AFBYc9ODD%2F9843X8xRogjlixfaFFgQdO2kWlelryBA3ELlj&X-Amz-Signature=3f216562edac1b0b6c5be621a963aace98ae0cf513293fe58b88d4514ecfb60f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W64WAV75%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGaw0Ij6A08KRrwizlD8Va6Whbmt9DBEYazhDqdUiQ%2FxAiEAxDK%2FWd6vnfL0E9m4fu5S32lG2Vkgr%2BbAI4e0gTi6EXEqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHmf%2FR0KpHAmESgp6SrcA9iUhfMaAVu5WoiGPFMA%2BfxUtFsJ4%2BRQ1iN%2BxqueG3L2amHUZQMn2AsHl9AZzWHtchHtFhQcJQYprLav4%2BcexfycshIwTHM0qEbBTuJ1kQ%2FiIoaTHlZsZ7T5%2FKtKliCswjxmQ%2Fc8Gclt0%2B%2B7DSrwTKdA502njolUOX9STJ7eAi7CXIznliCDAO6yCdbFfUJSL3%2Fopa7sQtEbVFm8ze01ga73w4L8ptUSQIOmIjZvUTKRCp3aZfP%2FBhooxLEALI6po8Vx48AqZ4C%2BtP8%2F0dID%2FCbusPfNE38ZO%2BiXnzu2qBG5RUhQIbxKKOX8Ki%2FfY4aZhRT3PRINPaz9x2aoViflQ7%2FD%2BwV1JD%2FeVa3TpSMjJ7WRkNrsmB20sXu4Z56%2BxDnBuO4qkDviiIKpGgZfzcWU8%2BCKMeUK4Fy6%2BnQuw1Vkc5BuHek4HGYeyPZd1E0YYlx9PM7x1jj8Xb4FmAPtqFW%2BHMQb4g3mlU4yC66DcGrI2g1zPub2Ix6wKFSyXnqgKqLFhx0V2q9cXprXx4cUe9JeKC%2BOtY8m%2BJ2AADGcpOnIoFniQdHVzrHL3ACFc7HMNh8hiGB8gyR9l41F8DpK3CDx6of4ChR7u8A5nJbClDxmPT060xPDXpDs6J4%2BWmgmMK2s5sQGOqUB03iDhg8zEyOKyylOiE2F2EDwA%2BWPhaPHnppQM3geflx0VFMliqSDq27rE2ARC8a%2BYZ2SkYoUH%2BJI0tEePjFaDO4RFEOphbBauoWklLqxV4tzkvbd%2FlLgxY8ZoDOANmnAyeEUbl92RIE1FbM%2Bz7MsjiHxxxJylZCn6KZEVPFx56el4AFBYc9ODD%2F9843X8xRogjlixfaFFgQdO2kWlelryBA3ELlj&X-Amz-Signature=d9af415d78d916c859f6a692bc75aecc14f2f90b563dde6b7249f7b096572ae2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
