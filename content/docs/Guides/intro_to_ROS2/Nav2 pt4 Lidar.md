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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ITATMO2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdqWETpNlQ3fYQEWpdwCqnx%2BvIDRBBLW%2B45u6kaTvlJAiEAsbJa2B9WuDaKzC9EGb3akSRofiA788FclEras4mGFrQqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1gOe6J8BEYkDOOqyrcAxXNpjLMA%2FWHeJbj4ISx3XeSW%2Bo23Wr5d%2FosHZoEQbGp1cC0M0ZVNifTg8NmabOukuIdCJfvI9mVf3utA3s5KcbRvVehiAunEDtQbukD1XVrBJrA1SS2iI8d5VoCsK6k2piVvOpAXNswGAJV2UJ%2F07sMblIdAMo8AFNMYCvZ8XpQE9p%2Bw%2FcmFq9JCOU9hKqFHBA73aK%2F24RQ94N3ie48sW7hHZhAAmtDsXBcoWnzlVeqHzJra%2B1nNfJTDi5ZcQDKFzfEtNFmaNkJnX7rv21usMS6ZIr3uzxurdT6jgymNytcN6LPWkoclGsoft9CMmZZUMtwWwdIs13Zfwn8csCJSlVbH4SN99hbRW18cSq%2Btq0aUY2NbPIcg6WUJXzrCujoZJwQCMMCK%2BhNDKR7E68iCeL9Lwrn3PhXEETgKdz%2BuN4Obcsjd1ZUcEcL%2FD5EPnsL5egcFY8UG8ofJn7ZNerQHuTm23blDPaUHi1kUuzQ7Qw2wIdsZGbM9iEaR4ZJ1Sptoc%2FVSfXYT4y7NAXzuKOClMs6wFaMOE8SHOtDMAjL7fGnwkvdGBVKYy734PgAIWfJmetDCwwdtMIfvUZGMnzbWf%2BMzh%2F0ZSAS3qF8rAae4VUp9zlGU%2BsHPDEdSH1uMIejqMQGOqUBNm68Lormb3cDSh5UbIyo2J0NM6TKgcBd%2Bm8%2ByQxHdaaoVl7b4mAdR%2FPUIktxpV3aAjO%2F%2BHF2ZpxWMqpt%2F3qIKgq18n4d3RzHcVR4V4n3Q%2FDSCnGvEPHTo3S32jibaiy0BZtCk2SdrAPNGLuvyDvb7wECu5Mr6F4TFpc5MBMSrsYABCFitLTUFu9GIgjf1znCeHS%2BdZNupn1izDAuckDpeX8RtNEr&X-Amz-Signature=3c5c6c6a116006e8b615d3f014f03e9ddd3ee0c0ad4d79f9fcb8e216b97c3ae9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ITATMO2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdqWETpNlQ3fYQEWpdwCqnx%2BvIDRBBLW%2B45u6kaTvlJAiEAsbJa2B9WuDaKzC9EGb3akSRofiA788FclEras4mGFrQqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1gOe6J8BEYkDOOqyrcAxXNpjLMA%2FWHeJbj4ISx3XeSW%2Bo23Wr5d%2FosHZoEQbGp1cC0M0ZVNifTg8NmabOukuIdCJfvI9mVf3utA3s5KcbRvVehiAunEDtQbukD1XVrBJrA1SS2iI8d5VoCsK6k2piVvOpAXNswGAJV2UJ%2F07sMblIdAMo8AFNMYCvZ8XpQE9p%2Bw%2FcmFq9JCOU9hKqFHBA73aK%2F24RQ94N3ie48sW7hHZhAAmtDsXBcoWnzlVeqHzJra%2B1nNfJTDi5ZcQDKFzfEtNFmaNkJnX7rv21usMS6ZIr3uzxurdT6jgymNytcN6LPWkoclGsoft9CMmZZUMtwWwdIs13Zfwn8csCJSlVbH4SN99hbRW18cSq%2Btq0aUY2NbPIcg6WUJXzrCujoZJwQCMMCK%2BhNDKR7E68iCeL9Lwrn3PhXEETgKdz%2BuN4Obcsjd1ZUcEcL%2FD5EPnsL5egcFY8UG8ofJn7ZNerQHuTm23blDPaUHi1kUuzQ7Qw2wIdsZGbM9iEaR4ZJ1Sptoc%2FVSfXYT4y7NAXzuKOClMs6wFaMOE8SHOtDMAjL7fGnwkvdGBVKYy734PgAIWfJmetDCwwdtMIfvUZGMnzbWf%2BMzh%2F0ZSAS3qF8rAae4VUp9zlGU%2BsHPDEdSH1uMIejqMQGOqUBNm68Lormb3cDSh5UbIyo2J0NM6TKgcBd%2Bm8%2ByQxHdaaoVl7b4mAdR%2FPUIktxpV3aAjO%2F%2BHF2ZpxWMqpt%2F3qIKgq18n4d3RzHcVR4V4n3Q%2FDSCnGvEPHTo3S32jibaiy0BZtCk2SdrAPNGLuvyDvb7wECu5Mr6F4TFpc5MBMSrsYABCFitLTUFu9GIgjf1znCeHS%2BdZNupn1izDAuckDpeX8RtNEr&X-Amz-Signature=76f7996d17514a30b6dc783acf4f2127776e92122591a79c6fd1e8da385a1487&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ITATMO2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdqWETpNlQ3fYQEWpdwCqnx%2BvIDRBBLW%2B45u6kaTvlJAiEAsbJa2B9WuDaKzC9EGb3akSRofiA788FclEras4mGFrQqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1gOe6J8BEYkDOOqyrcAxXNpjLMA%2FWHeJbj4ISx3XeSW%2Bo23Wr5d%2FosHZoEQbGp1cC0M0ZVNifTg8NmabOukuIdCJfvI9mVf3utA3s5KcbRvVehiAunEDtQbukD1XVrBJrA1SS2iI8d5VoCsK6k2piVvOpAXNswGAJV2UJ%2F07sMblIdAMo8AFNMYCvZ8XpQE9p%2Bw%2FcmFq9JCOU9hKqFHBA73aK%2F24RQ94N3ie48sW7hHZhAAmtDsXBcoWnzlVeqHzJra%2B1nNfJTDi5ZcQDKFzfEtNFmaNkJnX7rv21usMS6ZIr3uzxurdT6jgymNytcN6LPWkoclGsoft9CMmZZUMtwWwdIs13Zfwn8csCJSlVbH4SN99hbRW18cSq%2Btq0aUY2NbPIcg6WUJXzrCujoZJwQCMMCK%2BhNDKR7E68iCeL9Lwrn3PhXEETgKdz%2BuN4Obcsjd1ZUcEcL%2FD5EPnsL5egcFY8UG8ofJn7ZNerQHuTm23blDPaUHi1kUuzQ7Qw2wIdsZGbM9iEaR4ZJ1Sptoc%2FVSfXYT4y7NAXzuKOClMs6wFaMOE8SHOtDMAjL7fGnwkvdGBVKYy734PgAIWfJmetDCwwdtMIfvUZGMnzbWf%2BMzh%2F0ZSAS3qF8rAae4VUp9zlGU%2BsHPDEdSH1uMIejqMQGOqUBNm68Lormb3cDSh5UbIyo2J0NM6TKgcBd%2Bm8%2ByQxHdaaoVl7b4mAdR%2FPUIktxpV3aAjO%2F%2BHF2ZpxWMqpt%2F3qIKgq18n4d3RzHcVR4V4n3Q%2FDSCnGvEPHTo3S32jibaiy0BZtCk2SdrAPNGLuvyDvb7wECu5Mr6F4TFpc5MBMSrsYABCFitLTUFu9GIgjf1znCeHS%2BdZNupn1izDAuckDpeX8RtNEr&X-Amz-Signature=a55b4cdf168e4f13510958c9465df43cea13db8de77c152082914869083dce0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ITATMO2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdqWETpNlQ3fYQEWpdwCqnx%2BvIDRBBLW%2B45u6kaTvlJAiEAsbJa2B9WuDaKzC9EGb3akSRofiA788FclEras4mGFrQqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1gOe6J8BEYkDOOqyrcAxXNpjLMA%2FWHeJbj4ISx3XeSW%2Bo23Wr5d%2FosHZoEQbGp1cC0M0ZVNifTg8NmabOukuIdCJfvI9mVf3utA3s5KcbRvVehiAunEDtQbukD1XVrBJrA1SS2iI8d5VoCsK6k2piVvOpAXNswGAJV2UJ%2F07sMblIdAMo8AFNMYCvZ8XpQE9p%2Bw%2FcmFq9JCOU9hKqFHBA73aK%2F24RQ94N3ie48sW7hHZhAAmtDsXBcoWnzlVeqHzJra%2B1nNfJTDi5ZcQDKFzfEtNFmaNkJnX7rv21usMS6ZIr3uzxurdT6jgymNytcN6LPWkoclGsoft9CMmZZUMtwWwdIs13Zfwn8csCJSlVbH4SN99hbRW18cSq%2Btq0aUY2NbPIcg6WUJXzrCujoZJwQCMMCK%2BhNDKR7E68iCeL9Lwrn3PhXEETgKdz%2BuN4Obcsjd1ZUcEcL%2FD5EPnsL5egcFY8UG8ofJn7ZNerQHuTm23blDPaUHi1kUuzQ7Qw2wIdsZGbM9iEaR4ZJ1Sptoc%2FVSfXYT4y7NAXzuKOClMs6wFaMOE8SHOtDMAjL7fGnwkvdGBVKYy734PgAIWfJmetDCwwdtMIfvUZGMnzbWf%2BMzh%2F0ZSAS3qF8rAae4VUp9zlGU%2BsHPDEdSH1uMIejqMQGOqUBNm68Lormb3cDSh5UbIyo2J0NM6TKgcBd%2Bm8%2ByQxHdaaoVl7b4mAdR%2FPUIktxpV3aAjO%2F%2BHF2ZpxWMqpt%2F3qIKgq18n4d3RzHcVR4V4n3Q%2FDSCnGvEPHTo3S32jibaiy0BZtCk2SdrAPNGLuvyDvb7wECu5Mr6F4TFpc5MBMSrsYABCFitLTUFu9GIgjf1znCeHS%2BdZNupn1izDAuckDpeX8RtNEr&X-Amz-Signature=addfdce42293625b386b1663c2db69ec5d686357c79ffde3bb6f384f3786cdfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ITATMO2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdqWETpNlQ3fYQEWpdwCqnx%2BvIDRBBLW%2B45u6kaTvlJAiEAsbJa2B9WuDaKzC9EGb3akSRofiA788FclEras4mGFrQqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1gOe6J8BEYkDOOqyrcAxXNpjLMA%2FWHeJbj4ISx3XeSW%2Bo23Wr5d%2FosHZoEQbGp1cC0M0ZVNifTg8NmabOukuIdCJfvI9mVf3utA3s5KcbRvVehiAunEDtQbukD1XVrBJrA1SS2iI8d5VoCsK6k2piVvOpAXNswGAJV2UJ%2F07sMblIdAMo8AFNMYCvZ8XpQE9p%2Bw%2FcmFq9JCOU9hKqFHBA73aK%2F24RQ94N3ie48sW7hHZhAAmtDsXBcoWnzlVeqHzJra%2B1nNfJTDi5ZcQDKFzfEtNFmaNkJnX7rv21usMS6ZIr3uzxurdT6jgymNytcN6LPWkoclGsoft9CMmZZUMtwWwdIs13Zfwn8csCJSlVbH4SN99hbRW18cSq%2Btq0aUY2NbPIcg6WUJXzrCujoZJwQCMMCK%2BhNDKR7E68iCeL9Lwrn3PhXEETgKdz%2BuN4Obcsjd1ZUcEcL%2FD5EPnsL5egcFY8UG8ofJn7ZNerQHuTm23blDPaUHi1kUuzQ7Qw2wIdsZGbM9iEaR4ZJ1Sptoc%2FVSfXYT4y7NAXzuKOClMs6wFaMOE8SHOtDMAjL7fGnwkvdGBVKYy734PgAIWfJmetDCwwdtMIfvUZGMnzbWf%2BMzh%2F0ZSAS3qF8rAae4VUp9zlGU%2BsHPDEdSH1uMIejqMQGOqUBNm68Lormb3cDSh5UbIyo2J0NM6TKgcBd%2Bm8%2ByQxHdaaoVl7b4mAdR%2FPUIktxpV3aAjO%2F%2BHF2ZpxWMqpt%2F3qIKgq18n4d3RzHcVR4V4n3Q%2FDSCnGvEPHTo3S32jibaiy0BZtCk2SdrAPNGLuvyDvb7wECu5Mr6F4TFpc5MBMSrsYABCFitLTUFu9GIgjf1znCeHS%2BdZNupn1izDAuckDpeX8RtNEr&X-Amz-Signature=c8e64486e8f5f2cd68e30638b817971dbe21ef6f72f7160c320fb3332a67b0ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ITATMO2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdqWETpNlQ3fYQEWpdwCqnx%2BvIDRBBLW%2B45u6kaTvlJAiEAsbJa2B9WuDaKzC9EGb3akSRofiA788FclEras4mGFrQqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1gOe6J8BEYkDOOqyrcAxXNpjLMA%2FWHeJbj4ISx3XeSW%2Bo23Wr5d%2FosHZoEQbGp1cC0M0ZVNifTg8NmabOukuIdCJfvI9mVf3utA3s5KcbRvVehiAunEDtQbukD1XVrBJrA1SS2iI8d5VoCsK6k2piVvOpAXNswGAJV2UJ%2F07sMblIdAMo8AFNMYCvZ8XpQE9p%2Bw%2FcmFq9JCOU9hKqFHBA73aK%2F24RQ94N3ie48sW7hHZhAAmtDsXBcoWnzlVeqHzJra%2B1nNfJTDi5ZcQDKFzfEtNFmaNkJnX7rv21usMS6ZIr3uzxurdT6jgymNytcN6LPWkoclGsoft9CMmZZUMtwWwdIs13Zfwn8csCJSlVbH4SN99hbRW18cSq%2Btq0aUY2NbPIcg6WUJXzrCujoZJwQCMMCK%2BhNDKR7E68iCeL9Lwrn3PhXEETgKdz%2BuN4Obcsjd1ZUcEcL%2FD5EPnsL5egcFY8UG8ofJn7ZNerQHuTm23blDPaUHi1kUuzQ7Qw2wIdsZGbM9iEaR4ZJ1Sptoc%2FVSfXYT4y7NAXzuKOClMs6wFaMOE8SHOtDMAjL7fGnwkvdGBVKYy734PgAIWfJmetDCwwdtMIfvUZGMnzbWf%2BMzh%2F0ZSAS3qF8rAae4VUp9zlGU%2BsHPDEdSH1uMIejqMQGOqUBNm68Lormb3cDSh5UbIyo2J0NM6TKgcBd%2Bm8%2ByQxHdaaoVl7b4mAdR%2FPUIktxpV3aAjO%2F%2BHF2ZpxWMqpt%2F3qIKgq18n4d3RzHcVR4V4n3Q%2FDSCnGvEPHTo3S32jibaiy0BZtCk2SdrAPNGLuvyDvb7wECu5Mr6F4TFpc5MBMSrsYABCFitLTUFu9GIgjf1znCeHS%2BdZNupn1izDAuckDpeX8RtNEr&X-Amz-Signature=25f9c7bdb0ea757da9aecccdbdc66967dcced5a5b11423ed4d0e1b104909857f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ITATMO2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdqWETpNlQ3fYQEWpdwCqnx%2BvIDRBBLW%2B45u6kaTvlJAiEAsbJa2B9WuDaKzC9EGb3akSRofiA788FclEras4mGFrQqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1gOe6J8BEYkDOOqyrcAxXNpjLMA%2FWHeJbj4ISx3XeSW%2Bo23Wr5d%2FosHZoEQbGp1cC0M0ZVNifTg8NmabOukuIdCJfvI9mVf3utA3s5KcbRvVehiAunEDtQbukD1XVrBJrA1SS2iI8d5VoCsK6k2piVvOpAXNswGAJV2UJ%2F07sMblIdAMo8AFNMYCvZ8XpQE9p%2Bw%2FcmFq9JCOU9hKqFHBA73aK%2F24RQ94N3ie48sW7hHZhAAmtDsXBcoWnzlVeqHzJra%2B1nNfJTDi5ZcQDKFzfEtNFmaNkJnX7rv21usMS6ZIr3uzxurdT6jgymNytcN6LPWkoclGsoft9CMmZZUMtwWwdIs13Zfwn8csCJSlVbH4SN99hbRW18cSq%2Btq0aUY2NbPIcg6WUJXzrCujoZJwQCMMCK%2BhNDKR7E68iCeL9Lwrn3PhXEETgKdz%2BuN4Obcsjd1ZUcEcL%2FD5EPnsL5egcFY8UG8ofJn7ZNerQHuTm23blDPaUHi1kUuzQ7Qw2wIdsZGbM9iEaR4ZJ1Sptoc%2FVSfXYT4y7NAXzuKOClMs6wFaMOE8SHOtDMAjL7fGnwkvdGBVKYy734PgAIWfJmetDCwwdtMIfvUZGMnzbWf%2BMzh%2F0ZSAS3qF8rAae4VUp9zlGU%2BsHPDEdSH1uMIejqMQGOqUBNm68Lormb3cDSh5UbIyo2J0NM6TKgcBd%2Bm8%2ByQxHdaaoVl7b4mAdR%2FPUIktxpV3aAjO%2F%2BHF2ZpxWMqpt%2F3qIKgq18n4d3RzHcVR4V4n3Q%2FDSCnGvEPHTo3S32jibaiy0BZtCk2SdrAPNGLuvyDvb7wECu5Mr6F4TFpc5MBMSrsYABCFitLTUFu9GIgjf1znCeHS%2BdZNupn1izDAuckDpeX8RtNEr&X-Amz-Signature=cfe811c6381c0975b468727b80595bbfa3a6c63f214f4a206d4a37440d7ba7af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ITATMO2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdqWETpNlQ3fYQEWpdwCqnx%2BvIDRBBLW%2B45u6kaTvlJAiEAsbJa2B9WuDaKzC9EGb3akSRofiA788FclEras4mGFrQqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1gOe6J8BEYkDOOqyrcAxXNpjLMA%2FWHeJbj4ISx3XeSW%2Bo23Wr5d%2FosHZoEQbGp1cC0M0ZVNifTg8NmabOukuIdCJfvI9mVf3utA3s5KcbRvVehiAunEDtQbukD1XVrBJrA1SS2iI8d5VoCsK6k2piVvOpAXNswGAJV2UJ%2F07sMblIdAMo8AFNMYCvZ8XpQE9p%2Bw%2FcmFq9JCOU9hKqFHBA73aK%2F24RQ94N3ie48sW7hHZhAAmtDsXBcoWnzlVeqHzJra%2B1nNfJTDi5ZcQDKFzfEtNFmaNkJnX7rv21usMS6ZIr3uzxurdT6jgymNytcN6LPWkoclGsoft9CMmZZUMtwWwdIs13Zfwn8csCJSlVbH4SN99hbRW18cSq%2Btq0aUY2NbPIcg6WUJXzrCujoZJwQCMMCK%2BhNDKR7E68iCeL9Lwrn3PhXEETgKdz%2BuN4Obcsjd1ZUcEcL%2FD5EPnsL5egcFY8UG8ofJn7ZNerQHuTm23blDPaUHi1kUuzQ7Qw2wIdsZGbM9iEaR4ZJ1Sptoc%2FVSfXYT4y7NAXzuKOClMs6wFaMOE8SHOtDMAjL7fGnwkvdGBVKYy734PgAIWfJmetDCwwdtMIfvUZGMnzbWf%2BMzh%2F0ZSAS3qF8rAae4VUp9zlGU%2BsHPDEdSH1uMIejqMQGOqUBNm68Lormb3cDSh5UbIyo2J0NM6TKgcBd%2Bm8%2ByQxHdaaoVl7b4mAdR%2FPUIktxpV3aAjO%2F%2BHF2ZpxWMqpt%2F3qIKgq18n4d3RzHcVR4V4n3Q%2FDSCnGvEPHTo3S32jibaiy0BZtCk2SdrAPNGLuvyDvb7wECu5Mr6F4TFpc5MBMSrsYABCFitLTUFu9GIgjf1znCeHS%2BdZNupn1izDAuckDpeX8RtNEr&X-Amz-Signature=bf2b0cd8c9aad4679696026981cfa87c88e474822ebdfc91eb97ccd6e9198528&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ITATMO2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdqWETpNlQ3fYQEWpdwCqnx%2BvIDRBBLW%2B45u6kaTvlJAiEAsbJa2B9WuDaKzC9EGb3akSRofiA788FclEras4mGFrQqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1gOe6J8BEYkDOOqyrcAxXNpjLMA%2FWHeJbj4ISx3XeSW%2Bo23Wr5d%2FosHZoEQbGp1cC0M0ZVNifTg8NmabOukuIdCJfvI9mVf3utA3s5KcbRvVehiAunEDtQbukD1XVrBJrA1SS2iI8d5VoCsK6k2piVvOpAXNswGAJV2UJ%2F07sMblIdAMo8AFNMYCvZ8XpQE9p%2Bw%2FcmFq9JCOU9hKqFHBA73aK%2F24RQ94N3ie48sW7hHZhAAmtDsXBcoWnzlVeqHzJra%2B1nNfJTDi5ZcQDKFzfEtNFmaNkJnX7rv21usMS6ZIr3uzxurdT6jgymNytcN6LPWkoclGsoft9CMmZZUMtwWwdIs13Zfwn8csCJSlVbH4SN99hbRW18cSq%2Btq0aUY2NbPIcg6WUJXzrCujoZJwQCMMCK%2BhNDKR7E68iCeL9Lwrn3PhXEETgKdz%2BuN4Obcsjd1ZUcEcL%2FD5EPnsL5egcFY8UG8ofJn7ZNerQHuTm23blDPaUHi1kUuzQ7Qw2wIdsZGbM9iEaR4ZJ1Sptoc%2FVSfXYT4y7NAXzuKOClMs6wFaMOE8SHOtDMAjL7fGnwkvdGBVKYy734PgAIWfJmetDCwwdtMIfvUZGMnzbWf%2BMzh%2F0ZSAS3qF8rAae4VUp9zlGU%2BsHPDEdSH1uMIejqMQGOqUBNm68Lormb3cDSh5UbIyo2J0NM6TKgcBd%2Bm8%2ByQxHdaaoVl7b4mAdR%2FPUIktxpV3aAjO%2F%2BHF2ZpxWMqpt%2F3qIKgq18n4d3RzHcVR4V4n3Q%2FDSCnGvEPHTo3S32jibaiy0BZtCk2SdrAPNGLuvyDvb7wECu5Mr6F4TFpc5MBMSrsYABCFitLTUFu9GIgjf1znCeHS%2BdZNupn1izDAuckDpeX8RtNEr&X-Amz-Signature=2ac3482fbf3e00bc3d42ad01537634a12e37e39a2834704c77bc26341eb038b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ITATMO2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdqWETpNlQ3fYQEWpdwCqnx%2BvIDRBBLW%2B45u6kaTvlJAiEAsbJa2B9WuDaKzC9EGb3akSRofiA788FclEras4mGFrQqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1gOe6J8BEYkDOOqyrcAxXNpjLMA%2FWHeJbj4ISx3XeSW%2Bo23Wr5d%2FosHZoEQbGp1cC0M0ZVNifTg8NmabOukuIdCJfvI9mVf3utA3s5KcbRvVehiAunEDtQbukD1XVrBJrA1SS2iI8d5VoCsK6k2piVvOpAXNswGAJV2UJ%2F07sMblIdAMo8AFNMYCvZ8XpQE9p%2Bw%2FcmFq9JCOU9hKqFHBA73aK%2F24RQ94N3ie48sW7hHZhAAmtDsXBcoWnzlVeqHzJra%2B1nNfJTDi5ZcQDKFzfEtNFmaNkJnX7rv21usMS6ZIr3uzxurdT6jgymNytcN6LPWkoclGsoft9CMmZZUMtwWwdIs13Zfwn8csCJSlVbH4SN99hbRW18cSq%2Btq0aUY2NbPIcg6WUJXzrCujoZJwQCMMCK%2BhNDKR7E68iCeL9Lwrn3PhXEETgKdz%2BuN4Obcsjd1ZUcEcL%2FD5EPnsL5egcFY8UG8ofJn7ZNerQHuTm23blDPaUHi1kUuzQ7Qw2wIdsZGbM9iEaR4ZJ1Sptoc%2FVSfXYT4y7NAXzuKOClMs6wFaMOE8SHOtDMAjL7fGnwkvdGBVKYy734PgAIWfJmetDCwwdtMIfvUZGMnzbWf%2BMzh%2F0ZSAS3qF8rAae4VUp9zlGU%2BsHPDEdSH1uMIejqMQGOqUBNm68Lormb3cDSh5UbIyo2J0NM6TKgcBd%2Bm8%2ByQxHdaaoVl7b4mAdR%2FPUIktxpV3aAjO%2F%2BHF2ZpxWMqpt%2F3qIKgq18n4d3RzHcVR4V4n3Q%2FDSCnGvEPHTo3S32jibaiy0BZtCk2SdrAPNGLuvyDvb7wECu5Mr6F4TFpc5MBMSrsYABCFitLTUFu9GIgjf1znCeHS%2BdZNupn1izDAuckDpeX8RtNEr&X-Amz-Signature=d4014e222cf25251cefcc655b378e314954774334c3f9303d5fa8f6e1b592af9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
