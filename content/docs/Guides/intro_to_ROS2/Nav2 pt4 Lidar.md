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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDCOL3OW%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0iJxWkPJ8GQQLG1Zs1HaOO0Yy%2F%2FlHwAG%2B4Qm3vRZAxAiBlWH%2FLoIS3UHbf%2FX4uZozyT7GvPink6p6p3TjtnP4CLyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM1VIBDWLr%2F3ouM26bKtwDudKDFn8TcpU7nTTvxY2RO%2FaodF%2BlsEgZr42XUGmXRtgKm4mq1gwY%2F9nsLzo5DhlwQiAKZVgXz3ukmlvTuRbuLVXGQfMQBkxUHF8tkXzz5MQ%2FRzniitOf0M2vImEWvrh2PpmZn9bPSJEdAIVtNTD2fGRua%2BdO7k1cYDI2LUNHlD3EEkez7NNmGZYfNQ9WyeU7bJZq6iCkgagm4Cbwp5QGFvQlayiX2LDZUSU9J2toEQfgYL9dn0bydPJRbd7KSdF89hcR%2FuPalP%2Bdcfujjt8%2FEmZTraui23ZUGtfn6Kz4YzpjN9gTdpjO82iLDH7nHbtALzeYVO7NVQzP2ASmi7p2othQPxvhadlpfeohMrrtPqJTo1Dvl08kT989j5RmNhicTblAkyq6i%2F1F2Ejeu7yCLv7hiX%2BkZg6DhQLLXefKwbuTsuqNMo9HnQ5kM2NZmcwg%2FcO9A73E8MyFCh68Oy7%2FKnObaOszenVoxLgiH3deB038GUdIzP3rkwKRbA2fpDDhx9NAoRPPLXEUrBYByBgy9v%2FfIP%2B4xxFCm45lHa%2BLQYhGb2CaDOYg3JjKSV4AGl2nw65xMAg9haYnZ6fK4LGZ1XFnfnZ5cyfdtTBME1JpnYvMtJLAKiGnRgMSYB0wht6pyAY6pgFwSjsxqfBsxR7BDLWBRv%2BwdtTY1NIUbtoPty5K1eyKdmJUNH8a5SrzvKNffvtEALp01%2Fn10V02RcVj4P83dW2HjPzMtxE2X35FK05A8weYMj%2FvjvmZaHPvb9L4KXljHfF3CgssoXaihp7Ybw8JPC80r%2FN5sRxqy1SkIw%2Bt6eNnrcfn2shlwpMMa9LumRDlQ89ux4Y%2BaUowOt4njAsGS0uNXLxRhf7z&X-Amz-Signature=01e3344f8f3a77edf6b31b695af3ca3797e198a42b34d4c4b63fcca7b6387386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BJKJIRS%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDd6Ru0tZsEQXTXDYyCNPqfgl%2FbNpJDdsZY1iKdW3zvjAIgbxlNDFUk84IHCRpyfM3eGHBi1LSwqkewVJBIS3ugeyIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDF2a8Wg9NqPkipxQgCrcA91aUjBX9da0%2BL%2Fz1%2FV60zOt9QvcALeu72lR0QpPfHDfFfZQQ7s2ZDUGUPTKJQuW2fuxVpzTmagoYIeTnvQZJ2%2BRLq4%2BnG3u03DrMgClW5pyHdqpUtiCZLygyk84Kan4J%2FEbfer%2BbELPAIa4ccNIlrzYHcNM8ZfqLCA%2BftGE72xa027FYx%2BWqZ8c5T3lU88Z8apS21msplfN4IOWwG9PdHn%2F%2FaRV%2FAKo4bbDQGj8uRhMwd3g1Kt%2F1P6TYg7BUSRuuFSrnLx9%2FBnUrgxVLSxlqXaYoxVWJwHgAmaThALuLo6diLX8AJy0q1sKmOrp7b0suIe7Bgw8AmGgd%2FA6%2FtemPR6Ps06ElMUbFM94KfZMzX13A6h7%2FeVWH4K15ou95z3xkqPaC0JxvTiBWRTMkVmYgRszHZAbHhI%2FG%2B0dajFc%2BVHtSsca7%2F8qls0jOMiErGRsFqAYvYBlVVsdpw7KI%2B856itiQ8dPnzoN1fJZ2Xde6%2FhCZu%2BNBZl%2BJmrge23AYAS4kOjat2ko7%2BDSWrZpgyJ2D%2FpMh9JboUn9RJ7ZSruIuyYLMo5Zn4y9uKCp1XR%2BTlpH12ZY57iBuYEkjNkXeVplwtvpUpx7VZk37zAX1aDH9oeGNvOCA4fS%2BqfCu9Y5MKLdqcgGOqUBXxNnGNkbtT6%2B1Asnlmr%2FjkrAhz4%2FPlwPsg9GuDAtaSdk2C%2BMZLDaeJPHe9SeuiONHAWaUxCDJTBOPjTbrhczyHE9rcYyzkYylZ4XMnui48bz3kPaFXEv5k4hcMybMDvZDNTk2p7NGsRPKD0qw8%2F57wq2TEGL3brIxaQjqUxI3a%2FQPxuoS5NlxXGT3WgmcrXiVK3Vh4KM1FSdTEPobZn%2FJSq3R6kl&X-Amz-Signature=e116e19d8331b1df9c7e9874784579362ed44ddf710dd4fc5170b5818c6137d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BJKJIRS%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDd6Ru0tZsEQXTXDYyCNPqfgl%2FbNpJDdsZY1iKdW3zvjAIgbxlNDFUk84IHCRpyfM3eGHBi1LSwqkewVJBIS3ugeyIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDF2a8Wg9NqPkipxQgCrcA91aUjBX9da0%2BL%2Fz1%2FV60zOt9QvcALeu72lR0QpPfHDfFfZQQ7s2ZDUGUPTKJQuW2fuxVpzTmagoYIeTnvQZJ2%2BRLq4%2BnG3u03DrMgClW5pyHdqpUtiCZLygyk84Kan4J%2FEbfer%2BbELPAIa4ccNIlrzYHcNM8ZfqLCA%2BftGE72xa027FYx%2BWqZ8c5T3lU88Z8apS21msplfN4IOWwG9PdHn%2F%2FaRV%2FAKo4bbDQGj8uRhMwd3g1Kt%2F1P6TYg7BUSRuuFSrnLx9%2FBnUrgxVLSxlqXaYoxVWJwHgAmaThALuLo6diLX8AJy0q1sKmOrp7b0suIe7Bgw8AmGgd%2FA6%2FtemPR6Ps06ElMUbFM94KfZMzX13A6h7%2FeVWH4K15ou95z3xkqPaC0JxvTiBWRTMkVmYgRszHZAbHhI%2FG%2B0dajFc%2BVHtSsca7%2F8qls0jOMiErGRsFqAYvYBlVVsdpw7KI%2B856itiQ8dPnzoN1fJZ2Xde6%2FhCZu%2BNBZl%2BJmrge23AYAS4kOjat2ko7%2BDSWrZpgyJ2D%2FpMh9JboUn9RJ7ZSruIuyYLMo5Zn4y9uKCp1XR%2BTlpH12ZY57iBuYEkjNkXeVplwtvpUpx7VZk37zAX1aDH9oeGNvOCA4fS%2BqfCu9Y5MKLdqcgGOqUBXxNnGNkbtT6%2B1Asnlmr%2FjkrAhz4%2FPlwPsg9GuDAtaSdk2C%2BMZLDaeJPHe9SeuiONHAWaUxCDJTBOPjTbrhczyHE9rcYyzkYylZ4XMnui48bz3kPaFXEv5k4hcMybMDvZDNTk2p7NGsRPKD0qw8%2F57wq2TEGL3brIxaQjqUxI3a%2FQPxuoS5NlxXGT3WgmcrXiVK3Vh4KM1FSdTEPobZn%2FJSq3R6kl&X-Amz-Signature=17c0e71c0c9351f19b4b82805e2546e76860129fae05e4b229ceacf92977a186&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BJKJIRS%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDd6Ru0tZsEQXTXDYyCNPqfgl%2FbNpJDdsZY1iKdW3zvjAIgbxlNDFUk84IHCRpyfM3eGHBi1LSwqkewVJBIS3ugeyIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDF2a8Wg9NqPkipxQgCrcA91aUjBX9da0%2BL%2Fz1%2FV60zOt9QvcALeu72lR0QpPfHDfFfZQQ7s2ZDUGUPTKJQuW2fuxVpzTmagoYIeTnvQZJ2%2BRLq4%2BnG3u03DrMgClW5pyHdqpUtiCZLygyk84Kan4J%2FEbfer%2BbELPAIa4ccNIlrzYHcNM8ZfqLCA%2BftGE72xa027FYx%2BWqZ8c5T3lU88Z8apS21msplfN4IOWwG9PdHn%2F%2FaRV%2FAKo4bbDQGj8uRhMwd3g1Kt%2F1P6TYg7BUSRuuFSrnLx9%2FBnUrgxVLSxlqXaYoxVWJwHgAmaThALuLo6diLX8AJy0q1sKmOrp7b0suIe7Bgw8AmGgd%2FA6%2FtemPR6Ps06ElMUbFM94KfZMzX13A6h7%2FeVWH4K15ou95z3xkqPaC0JxvTiBWRTMkVmYgRszHZAbHhI%2FG%2B0dajFc%2BVHtSsca7%2F8qls0jOMiErGRsFqAYvYBlVVsdpw7KI%2B856itiQ8dPnzoN1fJZ2Xde6%2FhCZu%2BNBZl%2BJmrge23AYAS4kOjat2ko7%2BDSWrZpgyJ2D%2FpMh9JboUn9RJ7ZSruIuyYLMo5Zn4y9uKCp1XR%2BTlpH12ZY57iBuYEkjNkXeVplwtvpUpx7VZk37zAX1aDH9oeGNvOCA4fS%2BqfCu9Y5MKLdqcgGOqUBXxNnGNkbtT6%2B1Asnlmr%2FjkrAhz4%2FPlwPsg9GuDAtaSdk2C%2BMZLDaeJPHe9SeuiONHAWaUxCDJTBOPjTbrhczyHE9rcYyzkYylZ4XMnui48bz3kPaFXEv5k4hcMybMDvZDNTk2p7NGsRPKD0qw8%2F57wq2TEGL3brIxaQjqUxI3a%2FQPxuoS5NlxXGT3WgmcrXiVK3Vh4KM1FSdTEPobZn%2FJSq3R6kl&X-Amz-Signature=d87f1f1cfe5e96393b0da21e04707cf66bfa2681df2b7f7250e07ab717cfb341&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BJKJIRS%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDd6Ru0tZsEQXTXDYyCNPqfgl%2FbNpJDdsZY1iKdW3zvjAIgbxlNDFUk84IHCRpyfM3eGHBi1LSwqkewVJBIS3ugeyIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDF2a8Wg9NqPkipxQgCrcA91aUjBX9da0%2BL%2Fz1%2FV60zOt9QvcALeu72lR0QpPfHDfFfZQQ7s2ZDUGUPTKJQuW2fuxVpzTmagoYIeTnvQZJ2%2BRLq4%2BnG3u03DrMgClW5pyHdqpUtiCZLygyk84Kan4J%2FEbfer%2BbELPAIa4ccNIlrzYHcNM8ZfqLCA%2BftGE72xa027FYx%2BWqZ8c5T3lU88Z8apS21msplfN4IOWwG9PdHn%2F%2FaRV%2FAKo4bbDQGj8uRhMwd3g1Kt%2F1P6TYg7BUSRuuFSrnLx9%2FBnUrgxVLSxlqXaYoxVWJwHgAmaThALuLo6diLX8AJy0q1sKmOrp7b0suIe7Bgw8AmGgd%2FA6%2FtemPR6Ps06ElMUbFM94KfZMzX13A6h7%2FeVWH4K15ou95z3xkqPaC0JxvTiBWRTMkVmYgRszHZAbHhI%2FG%2B0dajFc%2BVHtSsca7%2F8qls0jOMiErGRsFqAYvYBlVVsdpw7KI%2B856itiQ8dPnzoN1fJZ2Xde6%2FhCZu%2BNBZl%2BJmrge23AYAS4kOjat2ko7%2BDSWrZpgyJ2D%2FpMh9JboUn9RJ7ZSruIuyYLMo5Zn4y9uKCp1XR%2BTlpH12ZY57iBuYEkjNkXeVplwtvpUpx7VZk37zAX1aDH9oeGNvOCA4fS%2BqfCu9Y5MKLdqcgGOqUBXxNnGNkbtT6%2B1Asnlmr%2FjkrAhz4%2FPlwPsg9GuDAtaSdk2C%2BMZLDaeJPHe9SeuiONHAWaUxCDJTBOPjTbrhczyHE9rcYyzkYylZ4XMnui48bz3kPaFXEv5k4hcMybMDvZDNTk2p7NGsRPKD0qw8%2F57wq2TEGL3brIxaQjqUxI3a%2FQPxuoS5NlxXGT3WgmcrXiVK3Vh4KM1FSdTEPobZn%2FJSq3R6kl&X-Amz-Signature=8a295aa6bf3ec0a60a016935f71458de1be8284e0607b6f0bd50e03a65a69ea4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BJKJIRS%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDd6Ru0tZsEQXTXDYyCNPqfgl%2FbNpJDdsZY1iKdW3zvjAIgbxlNDFUk84IHCRpyfM3eGHBi1LSwqkewVJBIS3ugeyIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDF2a8Wg9NqPkipxQgCrcA91aUjBX9da0%2BL%2Fz1%2FV60zOt9QvcALeu72lR0QpPfHDfFfZQQ7s2ZDUGUPTKJQuW2fuxVpzTmagoYIeTnvQZJ2%2BRLq4%2BnG3u03DrMgClW5pyHdqpUtiCZLygyk84Kan4J%2FEbfer%2BbELPAIa4ccNIlrzYHcNM8ZfqLCA%2BftGE72xa027FYx%2BWqZ8c5T3lU88Z8apS21msplfN4IOWwG9PdHn%2F%2FaRV%2FAKo4bbDQGj8uRhMwd3g1Kt%2F1P6TYg7BUSRuuFSrnLx9%2FBnUrgxVLSxlqXaYoxVWJwHgAmaThALuLo6diLX8AJy0q1sKmOrp7b0suIe7Bgw8AmGgd%2FA6%2FtemPR6Ps06ElMUbFM94KfZMzX13A6h7%2FeVWH4K15ou95z3xkqPaC0JxvTiBWRTMkVmYgRszHZAbHhI%2FG%2B0dajFc%2BVHtSsca7%2F8qls0jOMiErGRsFqAYvYBlVVsdpw7KI%2B856itiQ8dPnzoN1fJZ2Xde6%2FhCZu%2BNBZl%2BJmrge23AYAS4kOjat2ko7%2BDSWrZpgyJ2D%2FpMh9JboUn9RJ7ZSruIuyYLMo5Zn4y9uKCp1XR%2BTlpH12ZY57iBuYEkjNkXeVplwtvpUpx7VZk37zAX1aDH9oeGNvOCA4fS%2BqfCu9Y5MKLdqcgGOqUBXxNnGNkbtT6%2B1Asnlmr%2FjkrAhz4%2FPlwPsg9GuDAtaSdk2C%2BMZLDaeJPHe9SeuiONHAWaUxCDJTBOPjTbrhczyHE9rcYyzkYylZ4XMnui48bz3kPaFXEv5k4hcMybMDvZDNTk2p7NGsRPKD0qw8%2F57wq2TEGL3brIxaQjqUxI3a%2FQPxuoS5NlxXGT3WgmcrXiVK3Vh4KM1FSdTEPobZn%2FJSq3R6kl&X-Amz-Signature=3c5d5b61f86247e2fd0d607bc4a0e27a5d307ff7b7dc3679691271c7bc2dfb72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BJKJIRS%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDd6Ru0tZsEQXTXDYyCNPqfgl%2FbNpJDdsZY1iKdW3zvjAIgbxlNDFUk84IHCRpyfM3eGHBi1LSwqkewVJBIS3ugeyIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDF2a8Wg9NqPkipxQgCrcA91aUjBX9da0%2BL%2Fz1%2FV60zOt9QvcALeu72lR0QpPfHDfFfZQQ7s2ZDUGUPTKJQuW2fuxVpzTmagoYIeTnvQZJ2%2BRLq4%2BnG3u03DrMgClW5pyHdqpUtiCZLygyk84Kan4J%2FEbfer%2BbELPAIa4ccNIlrzYHcNM8ZfqLCA%2BftGE72xa027FYx%2BWqZ8c5T3lU88Z8apS21msplfN4IOWwG9PdHn%2F%2FaRV%2FAKo4bbDQGj8uRhMwd3g1Kt%2F1P6TYg7BUSRuuFSrnLx9%2FBnUrgxVLSxlqXaYoxVWJwHgAmaThALuLo6diLX8AJy0q1sKmOrp7b0suIe7Bgw8AmGgd%2FA6%2FtemPR6Ps06ElMUbFM94KfZMzX13A6h7%2FeVWH4K15ou95z3xkqPaC0JxvTiBWRTMkVmYgRszHZAbHhI%2FG%2B0dajFc%2BVHtSsca7%2F8qls0jOMiErGRsFqAYvYBlVVsdpw7KI%2B856itiQ8dPnzoN1fJZ2Xde6%2FhCZu%2BNBZl%2BJmrge23AYAS4kOjat2ko7%2BDSWrZpgyJ2D%2FpMh9JboUn9RJ7ZSruIuyYLMo5Zn4y9uKCp1XR%2BTlpH12ZY57iBuYEkjNkXeVplwtvpUpx7VZk37zAX1aDH9oeGNvOCA4fS%2BqfCu9Y5MKLdqcgGOqUBXxNnGNkbtT6%2B1Asnlmr%2FjkrAhz4%2FPlwPsg9GuDAtaSdk2C%2BMZLDaeJPHe9SeuiONHAWaUxCDJTBOPjTbrhczyHE9rcYyzkYylZ4XMnui48bz3kPaFXEv5k4hcMybMDvZDNTk2p7NGsRPKD0qw8%2F57wq2TEGL3brIxaQjqUxI3a%2FQPxuoS5NlxXGT3WgmcrXiVK3Vh4KM1FSdTEPobZn%2FJSq3R6kl&X-Amz-Signature=392dce037aba6dcd864be4ed08aaa27c8f3457bff9c61a3c79d1882d4f99efbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BJKJIRS%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDd6Ru0tZsEQXTXDYyCNPqfgl%2FbNpJDdsZY1iKdW3zvjAIgbxlNDFUk84IHCRpyfM3eGHBi1LSwqkewVJBIS3ugeyIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDF2a8Wg9NqPkipxQgCrcA91aUjBX9da0%2BL%2Fz1%2FV60zOt9QvcALeu72lR0QpPfHDfFfZQQ7s2ZDUGUPTKJQuW2fuxVpzTmagoYIeTnvQZJ2%2BRLq4%2BnG3u03DrMgClW5pyHdqpUtiCZLygyk84Kan4J%2FEbfer%2BbELPAIa4ccNIlrzYHcNM8ZfqLCA%2BftGE72xa027FYx%2BWqZ8c5T3lU88Z8apS21msplfN4IOWwG9PdHn%2F%2FaRV%2FAKo4bbDQGj8uRhMwd3g1Kt%2F1P6TYg7BUSRuuFSrnLx9%2FBnUrgxVLSxlqXaYoxVWJwHgAmaThALuLo6diLX8AJy0q1sKmOrp7b0suIe7Bgw8AmGgd%2FA6%2FtemPR6Ps06ElMUbFM94KfZMzX13A6h7%2FeVWH4K15ou95z3xkqPaC0JxvTiBWRTMkVmYgRszHZAbHhI%2FG%2B0dajFc%2BVHtSsca7%2F8qls0jOMiErGRsFqAYvYBlVVsdpw7KI%2B856itiQ8dPnzoN1fJZ2Xde6%2FhCZu%2BNBZl%2BJmrge23AYAS4kOjat2ko7%2BDSWrZpgyJ2D%2FpMh9JboUn9RJ7ZSruIuyYLMo5Zn4y9uKCp1XR%2BTlpH12ZY57iBuYEkjNkXeVplwtvpUpx7VZk37zAX1aDH9oeGNvOCA4fS%2BqfCu9Y5MKLdqcgGOqUBXxNnGNkbtT6%2B1Asnlmr%2FjkrAhz4%2FPlwPsg9GuDAtaSdk2C%2BMZLDaeJPHe9SeuiONHAWaUxCDJTBOPjTbrhczyHE9rcYyzkYylZ4XMnui48bz3kPaFXEv5k4hcMybMDvZDNTk2p7NGsRPKD0qw8%2F57wq2TEGL3brIxaQjqUxI3a%2FQPxuoS5NlxXGT3WgmcrXiVK3Vh4KM1FSdTEPobZn%2FJSq3R6kl&X-Amz-Signature=15758ac89a908309d063e175324aee022df37aada4cb2406c6ef6372bd44301d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BJKJIRS%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDd6Ru0tZsEQXTXDYyCNPqfgl%2FbNpJDdsZY1iKdW3zvjAIgbxlNDFUk84IHCRpyfM3eGHBi1LSwqkewVJBIS3ugeyIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDF2a8Wg9NqPkipxQgCrcA91aUjBX9da0%2BL%2Fz1%2FV60zOt9QvcALeu72lR0QpPfHDfFfZQQ7s2ZDUGUPTKJQuW2fuxVpzTmagoYIeTnvQZJ2%2BRLq4%2BnG3u03DrMgClW5pyHdqpUtiCZLygyk84Kan4J%2FEbfer%2BbELPAIa4ccNIlrzYHcNM8ZfqLCA%2BftGE72xa027FYx%2BWqZ8c5T3lU88Z8apS21msplfN4IOWwG9PdHn%2F%2FaRV%2FAKo4bbDQGj8uRhMwd3g1Kt%2F1P6TYg7BUSRuuFSrnLx9%2FBnUrgxVLSxlqXaYoxVWJwHgAmaThALuLo6diLX8AJy0q1sKmOrp7b0suIe7Bgw8AmGgd%2FA6%2FtemPR6Ps06ElMUbFM94KfZMzX13A6h7%2FeVWH4K15ou95z3xkqPaC0JxvTiBWRTMkVmYgRszHZAbHhI%2FG%2B0dajFc%2BVHtSsca7%2F8qls0jOMiErGRsFqAYvYBlVVsdpw7KI%2B856itiQ8dPnzoN1fJZ2Xde6%2FhCZu%2BNBZl%2BJmrge23AYAS4kOjat2ko7%2BDSWrZpgyJ2D%2FpMh9JboUn9RJ7ZSruIuyYLMo5Zn4y9uKCp1XR%2BTlpH12ZY57iBuYEkjNkXeVplwtvpUpx7VZk37zAX1aDH9oeGNvOCA4fS%2BqfCu9Y5MKLdqcgGOqUBXxNnGNkbtT6%2B1Asnlmr%2FjkrAhz4%2FPlwPsg9GuDAtaSdk2C%2BMZLDaeJPHe9SeuiONHAWaUxCDJTBOPjTbrhczyHE9rcYyzkYylZ4XMnui48bz3kPaFXEv5k4hcMybMDvZDNTk2p7NGsRPKD0qw8%2F57wq2TEGL3brIxaQjqUxI3a%2FQPxuoS5NlxXGT3WgmcrXiVK3Vh4KM1FSdTEPobZn%2FJSq3R6kl&X-Amz-Signature=cf921756a6b52e8b5feeba8c9c48fbf9419fa5d62b4196be8f5660eb1239c95b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BJKJIRS%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDd6Ru0tZsEQXTXDYyCNPqfgl%2FbNpJDdsZY1iKdW3zvjAIgbxlNDFUk84IHCRpyfM3eGHBi1LSwqkewVJBIS3ugeyIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDF2a8Wg9NqPkipxQgCrcA91aUjBX9da0%2BL%2Fz1%2FV60zOt9QvcALeu72lR0QpPfHDfFfZQQ7s2ZDUGUPTKJQuW2fuxVpzTmagoYIeTnvQZJ2%2BRLq4%2BnG3u03DrMgClW5pyHdqpUtiCZLygyk84Kan4J%2FEbfer%2BbELPAIa4ccNIlrzYHcNM8ZfqLCA%2BftGE72xa027FYx%2BWqZ8c5T3lU88Z8apS21msplfN4IOWwG9PdHn%2F%2FaRV%2FAKo4bbDQGj8uRhMwd3g1Kt%2F1P6TYg7BUSRuuFSrnLx9%2FBnUrgxVLSxlqXaYoxVWJwHgAmaThALuLo6diLX8AJy0q1sKmOrp7b0suIe7Bgw8AmGgd%2FA6%2FtemPR6Ps06ElMUbFM94KfZMzX13A6h7%2FeVWH4K15ou95z3xkqPaC0JxvTiBWRTMkVmYgRszHZAbHhI%2FG%2B0dajFc%2BVHtSsca7%2F8qls0jOMiErGRsFqAYvYBlVVsdpw7KI%2B856itiQ8dPnzoN1fJZ2Xde6%2FhCZu%2BNBZl%2BJmrge23AYAS4kOjat2ko7%2BDSWrZpgyJ2D%2FpMh9JboUn9RJ7ZSruIuyYLMo5Zn4y9uKCp1XR%2BTlpH12ZY57iBuYEkjNkXeVplwtvpUpx7VZk37zAX1aDH9oeGNvOCA4fS%2BqfCu9Y5MKLdqcgGOqUBXxNnGNkbtT6%2B1Asnlmr%2FjkrAhz4%2FPlwPsg9GuDAtaSdk2C%2BMZLDaeJPHe9SeuiONHAWaUxCDJTBOPjTbrhczyHE9rcYyzkYylZ4XMnui48bz3kPaFXEv5k4hcMybMDvZDNTk2p7NGsRPKD0qw8%2F57wq2TEGL3brIxaQjqUxI3a%2FQPxuoS5NlxXGT3WgmcrXiVK3Vh4KM1FSdTEPobZn%2FJSq3R6kl&X-Amz-Signature=9fb010fc1bb95a24f74b21ffd741078499111d97cdaeccb1394a7b5814ce39f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BJKJIRS%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDd6Ru0tZsEQXTXDYyCNPqfgl%2FbNpJDdsZY1iKdW3zvjAIgbxlNDFUk84IHCRpyfM3eGHBi1LSwqkewVJBIS3ugeyIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDF2a8Wg9NqPkipxQgCrcA91aUjBX9da0%2BL%2Fz1%2FV60zOt9QvcALeu72lR0QpPfHDfFfZQQ7s2ZDUGUPTKJQuW2fuxVpzTmagoYIeTnvQZJ2%2BRLq4%2BnG3u03DrMgClW5pyHdqpUtiCZLygyk84Kan4J%2FEbfer%2BbELPAIa4ccNIlrzYHcNM8ZfqLCA%2BftGE72xa027FYx%2BWqZ8c5T3lU88Z8apS21msplfN4IOWwG9PdHn%2F%2FaRV%2FAKo4bbDQGj8uRhMwd3g1Kt%2F1P6TYg7BUSRuuFSrnLx9%2FBnUrgxVLSxlqXaYoxVWJwHgAmaThALuLo6diLX8AJy0q1sKmOrp7b0suIe7Bgw8AmGgd%2FA6%2FtemPR6Ps06ElMUbFM94KfZMzX13A6h7%2FeVWH4K15ou95z3xkqPaC0JxvTiBWRTMkVmYgRszHZAbHhI%2FG%2B0dajFc%2BVHtSsca7%2F8qls0jOMiErGRsFqAYvYBlVVsdpw7KI%2B856itiQ8dPnzoN1fJZ2Xde6%2FhCZu%2BNBZl%2BJmrge23AYAS4kOjat2ko7%2BDSWrZpgyJ2D%2FpMh9JboUn9RJ7ZSruIuyYLMo5Zn4y9uKCp1XR%2BTlpH12ZY57iBuYEkjNkXeVplwtvpUpx7VZk37zAX1aDH9oeGNvOCA4fS%2BqfCu9Y5MKLdqcgGOqUBXxNnGNkbtT6%2B1Asnlmr%2FjkrAhz4%2FPlwPsg9GuDAtaSdk2C%2BMZLDaeJPHe9SeuiONHAWaUxCDJTBOPjTbrhczyHE9rcYyzkYylZ4XMnui48bz3kPaFXEv5k4hcMybMDvZDNTk2p7NGsRPKD0qw8%2F57wq2TEGL3brIxaQjqUxI3a%2FQPxuoS5NlxXGT3WgmcrXiVK3Vh4KM1FSdTEPobZn%2FJSq3R6kl&X-Amz-Signature=8a295aa6bf3ec0a60a016935f71458de1be8284e0607b6f0bd50e03a65a69ea4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
