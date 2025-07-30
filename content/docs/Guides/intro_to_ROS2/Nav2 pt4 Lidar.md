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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM42F5EV%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHffJUQohdf23w8uFnbWjyY2lPTIDCcNssjcELcXcFtTAiEA5B7egR3RnPTqtMLpsTddHcEW%2FQPK7qfWiLOBolcc4z8qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDaMM8DpZyyhv%2B2E5SrcA7yGuVApsoo71GGhlp3jptmuN0NSSGd%2FUZIUEUiMyGEr%2B%2FHSbb9LoJA9svODz%2ByrAlKJqu8H6KaQSVfVJ93zxXWqmpoAzjQ5kgQqadj2ntngLca4iL96rVehWqZ%2FSrAS5%2BVGnzmqVaHUxPBZzMqmyBysQBlhzRAJuz%2Fr85CEqyTyIxSLq3tc%2B1H%2BThopyme1Kk2yobN%2B1buqkrJFTmpSsxHd85sN6PNGbyahxRxVhaBwVtxT46rbZWbq58sDsdQfJrzlKmx27xPwXP5iXT7L7d94CgedrvTRDQk4LuT4Mrz71%2F5CzgUeG0T%2BMS6nCbRkvDThDyWtOSyFzM%2FnTB3qpzM01iy74orGafgNyjcDWnt7KRaKY7zdqX6Wx4lrClVD5Up6eh0AiacX2%2F6%2FmJ%2FYtT1GqWptmgroVH4f0MDdVlJcJg5tAR3Tnm1u3nBbH24fASv7RBsMbmXxB%2BCRc7RnTMsDvx0gVThUrHXJryVvipnrqxd6zRtCzKWhsevO2iPbCUi627UxKY%2BWtUZfyzBDaByHyPaAF4aCRQErFB4ACyorCa52c%2F4wf9clL6Vh42tnGM4r01wRPR3OUhw%2FJa4%2Fzv8Xoy15yShkPe9Ydj%2BgeXEEwy3sBWlPx8NJ34JeMJW7qcQGOqUB4JS97GtdFVCawDzchRTBnNtXVgyKVE2aP6cx5i7YpQ%2Fp7e8ZlTlFgw%2B2xLmYpindtkKJ05KGqPkVaOG9uThMKbBl8D60PgjSCe%2FLHXbwh%2FN6mgyHWTZkxTaJCTpKz7eRcCx%2B29UXb4CUnzg8Cp5QeCsbnqIWinyg%2BhSV%2F0pGw3fS9wYN8AJz907PUSkGHT5JT%2FUHNF79K9t4KV49HSwsMZJ2YwSz&X-Amz-Signature=71c664dba876f9cef34671e8af62785e94d8c51cb1b439b7a36c24618af82890&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM42F5EV%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHffJUQohdf23w8uFnbWjyY2lPTIDCcNssjcELcXcFtTAiEA5B7egR3RnPTqtMLpsTddHcEW%2FQPK7qfWiLOBolcc4z8qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDaMM8DpZyyhv%2B2E5SrcA7yGuVApsoo71GGhlp3jptmuN0NSSGd%2FUZIUEUiMyGEr%2B%2FHSbb9LoJA9svODz%2ByrAlKJqu8H6KaQSVfVJ93zxXWqmpoAzjQ5kgQqadj2ntngLca4iL96rVehWqZ%2FSrAS5%2BVGnzmqVaHUxPBZzMqmyBysQBlhzRAJuz%2Fr85CEqyTyIxSLq3tc%2B1H%2BThopyme1Kk2yobN%2B1buqkrJFTmpSsxHd85sN6PNGbyahxRxVhaBwVtxT46rbZWbq58sDsdQfJrzlKmx27xPwXP5iXT7L7d94CgedrvTRDQk4LuT4Mrz71%2F5CzgUeG0T%2BMS6nCbRkvDThDyWtOSyFzM%2FnTB3qpzM01iy74orGafgNyjcDWnt7KRaKY7zdqX6Wx4lrClVD5Up6eh0AiacX2%2F6%2FmJ%2FYtT1GqWptmgroVH4f0MDdVlJcJg5tAR3Tnm1u3nBbH24fASv7RBsMbmXxB%2BCRc7RnTMsDvx0gVThUrHXJryVvipnrqxd6zRtCzKWhsevO2iPbCUi627UxKY%2BWtUZfyzBDaByHyPaAF4aCRQErFB4ACyorCa52c%2F4wf9clL6Vh42tnGM4r01wRPR3OUhw%2FJa4%2Fzv8Xoy15yShkPe9Ydj%2BgeXEEwy3sBWlPx8NJ34JeMJW7qcQGOqUB4JS97GtdFVCawDzchRTBnNtXVgyKVE2aP6cx5i7YpQ%2Fp7e8ZlTlFgw%2B2xLmYpindtkKJ05KGqPkVaOG9uThMKbBl8D60PgjSCe%2FLHXbwh%2FN6mgyHWTZkxTaJCTpKz7eRcCx%2B29UXb4CUnzg8Cp5QeCsbnqIWinyg%2BhSV%2F0pGw3fS9wYN8AJz907PUSkGHT5JT%2FUHNF79K9t4KV49HSwsMZJ2YwSz&X-Amz-Signature=35483d1c4779fa1eb81beb2eab413b223457c3905fa74409d38451c54c85743f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM42F5EV%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHffJUQohdf23w8uFnbWjyY2lPTIDCcNssjcELcXcFtTAiEA5B7egR3RnPTqtMLpsTddHcEW%2FQPK7qfWiLOBolcc4z8qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDaMM8DpZyyhv%2B2E5SrcA7yGuVApsoo71GGhlp3jptmuN0NSSGd%2FUZIUEUiMyGEr%2B%2FHSbb9LoJA9svODz%2ByrAlKJqu8H6KaQSVfVJ93zxXWqmpoAzjQ5kgQqadj2ntngLca4iL96rVehWqZ%2FSrAS5%2BVGnzmqVaHUxPBZzMqmyBysQBlhzRAJuz%2Fr85CEqyTyIxSLq3tc%2B1H%2BThopyme1Kk2yobN%2B1buqkrJFTmpSsxHd85sN6PNGbyahxRxVhaBwVtxT46rbZWbq58sDsdQfJrzlKmx27xPwXP5iXT7L7d94CgedrvTRDQk4LuT4Mrz71%2F5CzgUeG0T%2BMS6nCbRkvDThDyWtOSyFzM%2FnTB3qpzM01iy74orGafgNyjcDWnt7KRaKY7zdqX6Wx4lrClVD5Up6eh0AiacX2%2F6%2FmJ%2FYtT1GqWptmgroVH4f0MDdVlJcJg5tAR3Tnm1u3nBbH24fASv7RBsMbmXxB%2BCRc7RnTMsDvx0gVThUrHXJryVvipnrqxd6zRtCzKWhsevO2iPbCUi627UxKY%2BWtUZfyzBDaByHyPaAF4aCRQErFB4ACyorCa52c%2F4wf9clL6Vh42tnGM4r01wRPR3OUhw%2FJa4%2Fzv8Xoy15yShkPe9Ydj%2BgeXEEwy3sBWlPx8NJ34JeMJW7qcQGOqUB4JS97GtdFVCawDzchRTBnNtXVgyKVE2aP6cx5i7YpQ%2Fp7e8ZlTlFgw%2B2xLmYpindtkKJ05KGqPkVaOG9uThMKbBl8D60PgjSCe%2FLHXbwh%2FN6mgyHWTZkxTaJCTpKz7eRcCx%2B29UXb4CUnzg8Cp5QeCsbnqIWinyg%2BhSV%2F0pGw3fS9wYN8AJz907PUSkGHT5JT%2FUHNF79K9t4KV49HSwsMZJ2YwSz&X-Amz-Signature=8a385123abc937b344d9c92deed8b7a94e1c2e036edaae94c390d3edd5d14e9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM42F5EV%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHffJUQohdf23w8uFnbWjyY2lPTIDCcNssjcELcXcFtTAiEA5B7egR3RnPTqtMLpsTddHcEW%2FQPK7qfWiLOBolcc4z8qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDaMM8DpZyyhv%2B2E5SrcA7yGuVApsoo71GGhlp3jptmuN0NSSGd%2FUZIUEUiMyGEr%2B%2FHSbb9LoJA9svODz%2ByrAlKJqu8H6KaQSVfVJ93zxXWqmpoAzjQ5kgQqadj2ntngLca4iL96rVehWqZ%2FSrAS5%2BVGnzmqVaHUxPBZzMqmyBysQBlhzRAJuz%2Fr85CEqyTyIxSLq3tc%2B1H%2BThopyme1Kk2yobN%2B1buqkrJFTmpSsxHd85sN6PNGbyahxRxVhaBwVtxT46rbZWbq58sDsdQfJrzlKmx27xPwXP5iXT7L7d94CgedrvTRDQk4LuT4Mrz71%2F5CzgUeG0T%2BMS6nCbRkvDThDyWtOSyFzM%2FnTB3qpzM01iy74orGafgNyjcDWnt7KRaKY7zdqX6Wx4lrClVD5Up6eh0AiacX2%2F6%2FmJ%2FYtT1GqWptmgroVH4f0MDdVlJcJg5tAR3Tnm1u3nBbH24fASv7RBsMbmXxB%2BCRc7RnTMsDvx0gVThUrHXJryVvipnrqxd6zRtCzKWhsevO2iPbCUi627UxKY%2BWtUZfyzBDaByHyPaAF4aCRQErFB4ACyorCa52c%2F4wf9clL6Vh42tnGM4r01wRPR3OUhw%2FJa4%2Fzv8Xoy15yShkPe9Ydj%2BgeXEEwy3sBWlPx8NJ34JeMJW7qcQGOqUB4JS97GtdFVCawDzchRTBnNtXVgyKVE2aP6cx5i7YpQ%2Fp7e8ZlTlFgw%2B2xLmYpindtkKJ05KGqPkVaOG9uThMKbBl8D60PgjSCe%2FLHXbwh%2FN6mgyHWTZkxTaJCTpKz7eRcCx%2B29UXb4CUnzg8Cp5QeCsbnqIWinyg%2BhSV%2F0pGw3fS9wYN8AJz907PUSkGHT5JT%2FUHNF79K9t4KV49HSwsMZJ2YwSz&X-Amz-Signature=69a616f04318b74c4ffc8eafffeb57501d02d882c2adb01baf04c13aa4a45c1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM42F5EV%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHffJUQohdf23w8uFnbWjyY2lPTIDCcNssjcELcXcFtTAiEA5B7egR3RnPTqtMLpsTddHcEW%2FQPK7qfWiLOBolcc4z8qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDaMM8DpZyyhv%2B2E5SrcA7yGuVApsoo71GGhlp3jptmuN0NSSGd%2FUZIUEUiMyGEr%2B%2FHSbb9LoJA9svODz%2ByrAlKJqu8H6KaQSVfVJ93zxXWqmpoAzjQ5kgQqadj2ntngLca4iL96rVehWqZ%2FSrAS5%2BVGnzmqVaHUxPBZzMqmyBysQBlhzRAJuz%2Fr85CEqyTyIxSLq3tc%2B1H%2BThopyme1Kk2yobN%2B1buqkrJFTmpSsxHd85sN6PNGbyahxRxVhaBwVtxT46rbZWbq58sDsdQfJrzlKmx27xPwXP5iXT7L7d94CgedrvTRDQk4LuT4Mrz71%2F5CzgUeG0T%2BMS6nCbRkvDThDyWtOSyFzM%2FnTB3qpzM01iy74orGafgNyjcDWnt7KRaKY7zdqX6Wx4lrClVD5Up6eh0AiacX2%2F6%2FmJ%2FYtT1GqWptmgroVH4f0MDdVlJcJg5tAR3Tnm1u3nBbH24fASv7RBsMbmXxB%2BCRc7RnTMsDvx0gVThUrHXJryVvipnrqxd6zRtCzKWhsevO2iPbCUi627UxKY%2BWtUZfyzBDaByHyPaAF4aCRQErFB4ACyorCa52c%2F4wf9clL6Vh42tnGM4r01wRPR3OUhw%2FJa4%2Fzv8Xoy15yShkPe9Ydj%2BgeXEEwy3sBWlPx8NJ34JeMJW7qcQGOqUB4JS97GtdFVCawDzchRTBnNtXVgyKVE2aP6cx5i7YpQ%2Fp7e8ZlTlFgw%2B2xLmYpindtkKJ05KGqPkVaOG9uThMKbBl8D60PgjSCe%2FLHXbwh%2FN6mgyHWTZkxTaJCTpKz7eRcCx%2B29UXb4CUnzg8Cp5QeCsbnqIWinyg%2BhSV%2F0pGw3fS9wYN8AJz907PUSkGHT5JT%2FUHNF79K9t4KV49HSwsMZJ2YwSz&X-Amz-Signature=19765d6b27d5c17e58286639e16c1543a7bed0d90b0fe073a03cace456608447&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM42F5EV%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHffJUQohdf23w8uFnbWjyY2lPTIDCcNssjcELcXcFtTAiEA5B7egR3RnPTqtMLpsTddHcEW%2FQPK7qfWiLOBolcc4z8qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDaMM8DpZyyhv%2B2E5SrcA7yGuVApsoo71GGhlp3jptmuN0NSSGd%2FUZIUEUiMyGEr%2B%2FHSbb9LoJA9svODz%2ByrAlKJqu8H6KaQSVfVJ93zxXWqmpoAzjQ5kgQqadj2ntngLca4iL96rVehWqZ%2FSrAS5%2BVGnzmqVaHUxPBZzMqmyBysQBlhzRAJuz%2Fr85CEqyTyIxSLq3tc%2B1H%2BThopyme1Kk2yobN%2B1buqkrJFTmpSsxHd85sN6PNGbyahxRxVhaBwVtxT46rbZWbq58sDsdQfJrzlKmx27xPwXP5iXT7L7d94CgedrvTRDQk4LuT4Mrz71%2F5CzgUeG0T%2BMS6nCbRkvDThDyWtOSyFzM%2FnTB3qpzM01iy74orGafgNyjcDWnt7KRaKY7zdqX6Wx4lrClVD5Up6eh0AiacX2%2F6%2FmJ%2FYtT1GqWptmgroVH4f0MDdVlJcJg5tAR3Tnm1u3nBbH24fASv7RBsMbmXxB%2BCRc7RnTMsDvx0gVThUrHXJryVvipnrqxd6zRtCzKWhsevO2iPbCUi627UxKY%2BWtUZfyzBDaByHyPaAF4aCRQErFB4ACyorCa52c%2F4wf9clL6Vh42tnGM4r01wRPR3OUhw%2FJa4%2Fzv8Xoy15yShkPe9Ydj%2BgeXEEwy3sBWlPx8NJ34JeMJW7qcQGOqUB4JS97GtdFVCawDzchRTBnNtXVgyKVE2aP6cx5i7YpQ%2Fp7e8ZlTlFgw%2B2xLmYpindtkKJ05KGqPkVaOG9uThMKbBl8D60PgjSCe%2FLHXbwh%2FN6mgyHWTZkxTaJCTpKz7eRcCx%2B29UXb4CUnzg8Cp5QeCsbnqIWinyg%2BhSV%2F0pGw3fS9wYN8AJz907PUSkGHT5JT%2FUHNF79K9t4KV49HSwsMZJ2YwSz&X-Amz-Signature=a4e15f0fc065b18cb9f73e2e7eaeebbccfc66901bc137c5512b8a0fc0ccc5a7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM42F5EV%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHffJUQohdf23w8uFnbWjyY2lPTIDCcNssjcELcXcFtTAiEA5B7egR3RnPTqtMLpsTddHcEW%2FQPK7qfWiLOBolcc4z8qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDaMM8DpZyyhv%2B2E5SrcA7yGuVApsoo71GGhlp3jptmuN0NSSGd%2FUZIUEUiMyGEr%2B%2FHSbb9LoJA9svODz%2ByrAlKJqu8H6KaQSVfVJ93zxXWqmpoAzjQ5kgQqadj2ntngLca4iL96rVehWqZ%2FSrAS5%2BVGnzmqVaHUxPBZzMqmyBysQBlhzRAJuz%2Fr85CEqyTyIxSLq3tc%2B1H%2BThopyme1Kk2yobN%2B1buqkrJFTmpSsxHd85sN6PNGbyahxRxVhaBwVtxT46rbZWbq58sDsdQfJrzlKmx27xPwXP5iXT7L7d94CgedrvTRDQk4LuT4Mrz71%2F5CzgUeG0T%2BMS6nCbRkvDThDyWtOSyFzM%2FnTB3qpzM01iy74orGafgNyjcDWnt7KRaKY7zdqX6Wx4lrClVD5Up6eh0AiacX2%2F6%2FmJ%2FYtT1GqWptmgroVH4f0MDdVlJcJg5tAR3Tnm1u3nBbH24fASv7RBsMbmXxB%2BCRc7RnTMsDvx0gVThUrHXJryVvipnrqxd6zRtCzKWhsevO2iPbCUi627UxKY%2BWtUZfyzBDaByHyPaAF4aCRQErFB4ACyorCa52c%2F4wf9clL6Vh42tnGM4r01wRPR3OUhw%2FJa4%2Fzv8Xoy15yShkPe9Ydj%2BgeXEEwy3sBWlPx8NJ34JeMJW7qcQGOqUB4JS97GtdFVCawDzchRTBnNtXVgyKVE2aP6cx5i7YpQ%2Fp7e8ZlTlFgw%2B2xLmYpindtkKJ05KGqPkVaOG9uThMKbBl8D60PgjSCe%2FLHXbwh%2FN6mgyHWTZkxTaJCTpKz7eRcCx%2B29UXb4CUnzg8Cp5QeCsbnqIWinyg%2BhSV%2F0pGw3fS9wYN8AJz907PUSkGHT5JT%2FUHNF79K9t4KV49HSwsMZJ2YwSz&X-Amz-Signature=bdc70fb3f09fc440541d1191099e2231e8ebc6c85f6111f32dd718dd9a919d7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM42F5EV%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHffJUQohdf23w8uFnbWjyY2lPTIDCcNssjcELcXcFtTAiEA5B7egR3RnPTqtMLpsTddHcEW%2FQPK7qfWiLOBolcc4z8qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDaMM8DpZyyhv%2B2E5SrcA7yGuVApsoo71GGhlp3jptmuN0NSSGd%2FUZIUEUiMyGEr%2B%2FHSbb9LoJA9svODz%2ByrAlKJqu8H6KaQSVfVJ93zxXWqmpoAzjQ5kgQqadj2ntngLca4iL96rVehWqZ%2FSrAS5%2BVGnzmqVaHUxPBZzMqmyBysQBlhzRAJuz%2Fr85CEqyTyIxSLq3tc%2B1H%2BThopyme1Kk2yobN%2B1buqkrJFTmpSsxHd85sN6PNGbyahxRxVhaBwVtxT46rbZWbq58sDsdQfJrzlKmx27xPwXP5iXT7L7d94CgedrvTRDQk4LuT4Mrz71%2F5CzgUeG0T%2BMS6nCbRkvDThDyWtOSyFzM%2FnTB3qpzM01iy74orGafgNyjcDWnt7KRaKY7zdqX6Wx4lrClVD5Up6eh0AiacX2%2F6%2FmJ%2FYtT1GqWptmgroVH4f0MDdVlJcJg5tAR3Tnm1u3nBbH24fASv7RBsMbmXxB%2BCRc7RnTMsDvx0gVThUrHXJryVvipnrqxd6zRtCzKWhsevO2iPbCUi627UxKY%2BWtUZfyzBDaByHyPaAF4aCRQErFB4ACyorCa52c%2F4wf9clL6Vh42tnGM4r01wRPR3OUhw%2FJa4%2Fzv8Xoy15yShkPe9Ydj%2BgeXEEwy3sBWlPx8NJ34JeMJW7qcQGOqUB4JS97GtdFVCawDzchRTBnNtXVgyKVE2aP6cx5i7YpQ%2Fp7e8ZlTlFgw%2B2xLmYpindtkKJ05KGqPkVaOG9uThMKbBl8D60PgjSCe%2FLHXbwh%2FN6mgyHWTZkxTaJCTpKz7eRcCx%2B29UXb4CUnzg8Cp5QeCsbnqIWinyg%2BhSV%2F0pGw3fS9wYN8AJz907PUSkGHT5JT%2FUHNF79K9t4KV49HSwsMZJ2YwSz&X-Amz-Signature=788e577960dafaf6be7822beb9ac3b9857f23821325bc9043f24d5e70e5494a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM42F5EV%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHffJUQohdf23w8uFnbWjyY2lPTIDCcNssjcELcXcFtTAiEA5B7egR3RnPTqtMLpsTddHcEW%2FQPK7qfWiLOBolcc4z8qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDaMM8DpZyyhv%2B2E5SrcA7yGuVApsoo71GGhlp3jptmuN0NSSGd%2FUZIUEUiMyGEr%2B%2FHSbb9LoJA9svODz%2ByrAlKJqu8H6KaQSVfVJ93zxXWqmpoAzjQ5kgQqadj2ntngLca4iL96rVehWqZ%2FSrAS5%2BVGnzmqVaHUxPBZzMqmyBysQBlhzRAJuz%2Fr85CEqyTyIxSLq3tc%2B1H%2BThopyme1Kk2yobN%2B1buqkrJFTmpSsxHd85sN6PNGbyahxRxVhaBwVtxT46rbZWbq58sDsdQfJrzlKmx27xPwXP5iXT7L7d94CgedrvTRDQk4LuT4Mrz71%2F5CzgUeG0T%2BMS6nCbRkvDThDyWtOSyFzM%2FnTB3qpzM01iy74orGafgNyjcDWnt7KRaKY7zdqX6Wx4lrClVD5Up6eh0AiacX2%2F6%2FmJ%2FYtT1GqWptmgroVH4f0MDdVlJcJg5tAR3Tnm1u3nBbH24fASv7RBsMbmXxB%2BCRc7RnTMsDvx0gVThUrHXJryVvipnrqxd6zRtCzKWhsevO2iPbCUi627UxKY%2BWtUZfyzBDaByHyPaAF4aCRQErFB4ACyorCa52c%2F4wf9clL6Vh42tnGM4r01wRPR3OUhw%2FJa4%2Fzv8Xoy15yShkPe9Ydj%2BgeXEEwy3sBWlPx8NJ34JeMJW7qcQGOqUB4JS97GtdFVCawDzchRTBnNtXVgyKVE2aP6cx5i7YpQ%2Fp7e8ZlTlFgw%2B2xLmYpindtkKJ05KGqPkVaOG9uThMKbBl8D60PgjSCe%2FLHXbwh%2FN6mgyHWTZkxTaJCTpKz7eRcCx%2B29UXb4CUnzg8Cp5QeCsbnqIWinyg%2BhSV%2F0pGw3fS9wYN8AJz907PUSkGHT5JT%2FUHNF79K9t4KV49HSwsMZJ2YwSz&X-Amz-Signature=9d2ccca5a55e16a7a700eb6db4e9c872bdd53992122c69d55c9b60db8a2bd128&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM42F5EV%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHffJUQohdf23w8uFnbWjyY2lPTIDCcNssjcELcXcFtTAiEA5B7egR3RnPTqtMLpsTddHcEW%2FQPK7qfWiLOBolcc4z8qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDaMM8DpZyyhv%2B2E5SrcA7yGuVApsoo71GGhlp3jptmuN0NSSGd%2FUZIUEUiMyGEr%2B%2FHSbb9LoJA9svODz%2ByrAlKJqu8H6KaQSVfVJ93zxXWqmpoAzjQ5kgQqadj2ntngLca4iL96rVehWqZ%2FSrAS5%2BVGnzmqVaHUxPBZzMqmyBysQBlhzRAJuz%2Fr85CEqyTyIxSLq3tc%2B1H%2BThopyme1Kk2yobN%2B1buqkrJFTmpSsxHd85sN6PNGbyahxRxVhaBwVtxT46rbZWbq58sDsdQfJrzlKmx27xPwXP5iXT7L7d94CgedrvTRDQk4LuT4Mrz71%2F5CzgUeG0T%2BMS6nCbRkvDThDyWtOSyFzM%2FnTB3qpzM01iy74orGafgNyjcDWnt7KRaKY7zdqX6Wx4lrClVD5Up6eh0AiacX2%2F6%2FmJ%2FYtT1GqWptmgroVH4f0MDdVlJcJg5tAR3Tnm1u3nBbH24fASv7RBsMbmXxB%2BCRc7RnTMsDvx0gVThUrHXJryVvipnrqxd6zRtCzKWhsevO2iPbCUi627UxKY%2BWtUZfyzBDaByHyPaAF4aCRQErFB4ACyorCa52c%2F4wf9clL6Vh42tnGM4r01wRPR3OUhw%2FJa4%2Fzv8Xoy15yShkPe9Ydj%2BgeXEEwy3sBWlPx8NJ34JeMJW7qcQGOqUB4JS97GtdFVCawDzchRTBnNtXVgyKVE2aP6cx5i7YpQ%2Fp7e8ZlTlFgw%2B2xLmYpindtkKJ05KGqPkVaOG9uThMKbBl8D60PgjSCe%2FLHXbwh%2FN6mgyHWTZkxTaJCTpKz7eRcCx%2B29UXb4CUnzg8Cp5QeCsbnqIWinyg%2BhSV%2F0pGw3fS9wYN8AJz907PUSkGHT5JT%2FUHNF79K9t4KV49HSwsMZJ2YwSz&X-Amz-Signature=905c3ec11c2c9df498c3195edf0515ccc6602529f3ab8c1bd785ecc7a267b700&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
