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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ4AI4VA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKHvRCLy%2FVDUpTxEKUPwwZIgwtfZx8%2BOAK1ntFn6MczAIgKeS8BoiArOQFb6aRkzOQ3MJg28%2BXTWPaEIKVYm8f2v0qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2%2BFulItXmfDk5v8CrcA35mBrCcRJbhd306Bs3PtlMk8SCTp0ue0okCjovll%2F9s7Zn3faH985uKWxQ8%2F9xJn2Mq1Hg9fLp6NZY%2BtSy2gzjM8CAxI6DpZ4GAgo9s2fTZqKPq7mL%2FeG301Q6ppymhgf1jmVsl64PzPz7HgLiGI43d3L2luAAsj0a16IkMJ1aMXvoTn6x76lz5B5gKKiJWTkPPkgKeL6RXtxb6D5YQ9zvLA5xKmRjBlGwH2%2BYjBa%2BNe6ATBTHaYaVliYNkYyHKM6k%2FadtMtIiKmZQiNrAjk6qCApZR53084WYtAhr4a623i1rfXr8G4dRM5BX9j1ZOryAcZRr0raSxLGA%2FHUpSRg0Cad%2FTQoq4Rouiu7DD%2Bn4VReEv9sBViCMloQ53FDq81oVoWfROWf7SJlqJA2BEyQnMppXbpd8u38RBZrIuIU48SdicFiaq%2B3cGb1kRwxvhCT3rb3AUk7%2BAJj9%2BcnBBk7iT%2BR1EBpbu614l0eZJKM3nU6d%2BpCPEsk6d3xD95VArtr6UEMh6e0nRIhWgFtQ16TKClaqL03XYr02Xa2qKxARKDPttwYTiwZ1uvqhDn0xTrrt3LrnJf5pPsuAJTXX%2BDScF1UmGwq6JQNqEkfG94P8ewnK2vzPW7lEjB1G%2BMKbp3MQGOqUBSpmnEoGzIowqlHe5wThzNmMnagpEcF4%2FhTQnqFnoUNIRo%2FBuHTkGFXTeauCdB%2FGPKR1oJjY34vV8xWpt%2Bu%2F76w3ConQU5npg3%2Ff5%2BEVRu0lN8qLVH7w4NkK8aqOo2N8MXNGqVz0UV7gErAcWFhCZ4x%2BZEr%2FSWICKS1xNjP1NBehcl3QVRMWLSqf3Py%2FBSeROpdhsWswpzD4TzTrn6N6jKqTYLr6p&X-Amz-Signature=b88141cfaa806bc89fa74ba53cafe27624cdc2065e99b3a889321ef906539258&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEHKAIUM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID06qNqVSuXFQ6eHN93w1824dsFafmdKB6o0qHnQ9gTSAiBRYZPMPvtfAoC8ToGccBMvCjTNXC7m2rrlT0ewcjSsniqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRfAPITx%2BnxPNeAG3KtwDu%2B0dWLHSVPfExa75C3OM2h%2BQC3I%2Fqn5cLr%2F7WTxnyIAEB%2FP0R8TVz6TtMOBrtNeznKIkNrD9SpOFw6sFqaiT1pBptk0sxA1ZLJ32s6rKWmwmRzSgXdqgEtFxkmdkMikZnHoVbVixtT31lB2%2Br%2BVu5dpazXYWOd4bVQ7SgT0buDdEYI9I1%2BZ6ztwXQKaunKWQnGJPGF5ZB8eYAcyID3%2BmLpxq1D%2FpKaIMyXs09OttHiz64TY9sfOqCoNdMECwQQXeNwxZ9w1U435EX0pr9l8LiczLSOEV4RfKSlsxN4u2u1nJoQ%2BgMbw0oHiYwbB3Ogf%2Fokg%2B7DTg8TfXJAu%2BH2GR2BLikqwIGf4vh5XkRhrK2%2BK2lPOinnNerzbZODaeK3G8Va4egBUU4HfyY9mV9F%2BQNXWs8Tp0%2B%2F3JsG9qQNOurKuax1WHHlM4mQU4ItpgrrBvz419nbedLP%2FaYUc%2FJuuGStQus%2FLsWvcsunSUrfcAH9DL5Zzgbt7SLiL4lpvycJTWbX6I90WRE%2F%2BWNHg1RGhAcoQzTiFrBRTqPiVxgpIc5T5piWzWbMvtAsx6ZqlaWzwVZkz1JarLwwotgbLAJB6rKrKG9j6HhGkxykWfStqQJ0eOipcBxqluTCgLVTYwh%2BPcxAY6pgEMic0DufNtm44M%2FgMEbh%2B%2BzCs8wNotLtcDPUFSyBcts1yu99sDaXQzgegP582wAIMGlGPPy5p%2FB%2FzAtGLZCb3SyQUYoDXAwkmGUWn5HLFB9yEmfgNY9q3Flt9jtJEwIGwcAF2pBssOixNV3JQx70B63bFHGRSTgA2Nx9q4g3jaVDDUa%2Byexv3voJZspaHce6RcLZ%2FxUpdwFtgzq2p0xiE7KXVOaYSg&X-Amz-Signature=c02313ffcc29c502ee1a764a7e1d2d4674aeab8b49d761312780497a8ce89dc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEHKAIUM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID06qNqVSuXFQ6eHN93w1824dsFafmdKB6o0qHnQ9gTSAiBRYZPMPvtfAoC8ToGccBMvCjTNXC7m2rrlT0ewcjSsniqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRfAPITx%2BnxPNeAG3KtwDu%2B0dWLHSVPfExa75C3OM2h%2BQC3I%2Fqn5cLr%2F7WTxnyIAEB%2FP0R8TVz6TtMOBrtNeznKIkNrD9SpOFw6sFqaiT1pBptk0sxA1ZLJ32s6rKWmwmRzSgXdqgEtFxkmdkMikZnHoVbVixtT31lB2%2Br%2BVu5dpazXYWOd4bVQ7SgT0buDdEYI9I1%2BZ6ztwXQKaunKWQnGJPGF5ZB8eYAcyID3%2BmLpxq1D%2FpKaIMyXs09OttHiz64TY9sfOqCoNdMECwQQXeNwxZ9w1U435EX0pr9l8LiczLSOEV4RfKSlsxN4u2u1nJoQ%2BgMbw0oHiYwbB3Ogf%2Fokg%2B7DTg8TfXJAu%2BH2GR2BLikqwIGf4vh5XkRhrK2%2BK2lPOinnNerzbZODaeK3G8Va4egBUU4HfyY9mV9F%2BQNXWs8Tp0%2B%2F3JsG9qQNOurKuax1WHHlM4mQU4ItpgrrBvz419nbedLP%2FaYUc%2FJuuGStQus%2FLsWvcsunSUrfcAH9DL5Zzgbt7SLiL4lpvycJTWbX6I90WRE%2F%2BWNHg1RGhAcoQzTiFrBRTqPiVxgpIc5T5piWzWbMvtAsx6ZqlaWzwVZkz1JarLwwotgbLAJB6rKrKG9j6HhGkxykWfStqQJ0eOipcBxqluTCgLVTYwh%2BPcxAY6pgEMic0DufNtm44M%2FgMEbh%2B%2BzCs8wNotLtcDPUFSyBcts1yu99sDaXQzgegP582wAIMGlGPPy5p%2FB%2FzAtGLZCb3SyQUYoDXAwkmGUWn5HLFB9yEmfgNY9q3Flt9jtJEwIGwcAF2pBssOixNV3JQx70B63bFHGRSTgA2Nx9q4g3jaVDDUa%2Byexv3voJZspaHce6RcLZ%2FxUpdwFtgzq2p0xiE7KXVOaYSg&X-Amz-Signature=214dde3c73233f4c6454d3a828715ebbb16201bd4608f90869a17b4cde84cf53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEHKAIUM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID06qNqVSuXFQ6eHN93w1824dsFafmdKB6o0qHnQ9gTSAiBRYZPMPvtfAoC8ToGccBMvCjTNXC7m2rrlT0ewcjSsniqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRfAPITx%2BnxPNeAG3KtwDu%2B0dWLHSVPfExa75C3OM2h%2BQC3I%2Fqn5cLr%2F7WTxnyIAEB%2FP0R8TVz6TtMOBrtNeznKIkNrD9SpOFw6sFqaiT1pBptk0sxA1ZLJ32s6rKWmwmRzSgXdqgEtFxkmdkMikZnHoVbVixtT31lB2%2Br%2BVu5dpazXYWOd4bVQ7SgT0buDdEYI9I1%2BZ6ztwXQKaunKWQnGJPGF5ZB8eYAcyID3%2BmLpxq1D%2FpKaIMyXs09OttHiz64TY9sfOqCoNdMECwQQXeNwxZ9w1U435EX0pr9l8LiczLSOEV4RfKSlsxN4u2u1nJoQ%2BgMbw0oHiYwbB3Ogf%2Fokg%2B7DTg8TfXJAu%2BH2GR2BLikqwIGf4vh5XkRhrK2%2BK2lPOinnNerzbZODaeK3G8Va4egBUU4HfyY9mV9F%2BQNXWs8Tp0%2B%2F3JsG9qQNOurKuax1WHHlM4mQU4ItpgrrBvz419nbedLP%2FaYUc%2FJuuGStQus%2FLsWvcsunSUrfcAH9DL5Zzgbt7SLiL4lpvycJTWbX6I90WRE%2F%2BWNHg1RGhAcoQzTiFrBRTqPiVxgpIc5T5piWzWbMvtAsx6ZqlaWzwVZkz1JarLwwotgbLAJB6rKrKG9j6HhGkxykWfStqQJ0eOipcBxqluTCgLVTYwh%2BPcxAY6pgEMic0DufNtm44M%2FgMEbh%2B%2BzCs8wNotLtcDPUFSyBcts1yu99sDaXQzgegP582wAIMGlGPPy5p%2FB%2FzAtGLZCb3SyQUYoDXAwkmGUWn5HLFB9yEmfgNY9q3Flt9jtJEwIGwcAF2pBssOixNV3JQx70B63bFHGRSTgA2Nx9q4g3jaVDDUa%2Byexv3voJZspaHce6RcLZ%2FxUpdwFtgzq2p0xiE7KXVOaYSg&X-Amz-Signature=a2fe2974524ac7a93912dab7a9cc31cd2c850fdc4b0970820315cfc5e8e33912&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEHKAIUM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID06qNqVSuXFQ6eHN93w1824dsFafmdKB6o0qHnQ9gTSAiBRYZPMPvtfAoC8ToGccBMvCjTNXC7m2rrlT0ewcjSsniqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRfAPITx%2BnxPNeAG3KtwDu%2B0dWLHSVPfExa75C3OM2h%2BQC3I%2Fqn5cLr%2F7WTxnyIAEB%2FP0R8TVz6TtMOBrtNeznKIkNrD9SpOFw6sFqaiT1pBptk0sxA1ZLJ32s6rKWmwmRzSgXdqgEtFxkmdkMikZnHoVbVixtT31lB2%2Br%2BVu5dpazXYWOd4bVQ7SgT0buDdEYI9I1%2BZ6ztwXQKaunKWQnGJPGF5ZB8eYAcyID3%2BmLpxq1D%2FpKaIMyXs09OttHiz64TY9sfOqCoNdMECwQQXeNwxZ9w1U435EX0pr9l8LiczLSOEV4RfKSlsxN4u2u1nJoQ%2BgMbw0oHiYwbB3Ogf%2Fokg%2B7DTg8TfXJAu%2BH2GR2BLikqwIGf4vh5XkRhrK2%2BK2lPOinnNerzbZODaeK3G8Va4egBUU4HfyY9mV9F%2BQNXWs8Tp0%2B%2F3JsG9qQNOurKuax1WHHlM4mQU4ItpgrrBvz419nbedLP%2FaYUc%2FJuuGStQus%2FLsWvcsunSUrfcAH9DL5Zzgbt7SLiL4lpvycJTWbX6I90WRE%2F%2BWNHg1RGhAcoQzTiFrBRTqPiVxgpIc5T5piWzWbMvtAsx6ZqlaWzwVZkz1JarLwwotgbLAJB6rKrKG9j6HhGkxykWfStqQJ0eOipcBxqluTCgLVTYwh%2BPcxAY6pgEMic0DufNtm44M%2FgMEbh%2B%2BzCs8wNotLtcDPUFSyBcts1yu99sDaXQzgegP582wAIMGlGPPy5p%2FB%2FzAtGLZCb3SyQUYoDXAwkmGUWn5HLFB9yEmfgNY9q3Flt9jtJEwIGwcAF2pBssOixNV3JQx70B63bFHGRSTgA2Nx9q4g3jaVDDUa%2Byexv3voJZspaHce6RcLZ%2FxUpdwFtgzq2p0xiE7KXVOaYSg&X-Amz-Signature=01bd3a1f4cb4128f60eab1c73c276465a79aaabea7729db271d042fe72741421&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEHKAIUM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID06qNqVSuXFQ6eHN93w1824dsFafmdKB6o0qHnQ9gTSAiBRYZPMPvtfAoC8ToGccBMvCjTNXC7m2rrlT0ewcjSsniqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRfAPITx%2BnxPNeAG3KtwDu%2B0dWLHSVPfExa75C3OM2h%2BQC3I%2Fqn5cLr%2F7WTxnyIAEB%2FP0R8TVz6TtMOBrtNeznKIkNrD9SpOFw6sFqaiT1pBptk0sxA1ZLJ32s6rKWmwmRzSgXdqgEtFxkmdkMikZnHoVbVixtT31lB2%2Br%2BVu5dpazXYWOd4bVQ7SgT0buDdEYI9I1%2BZ6ztwXQKaunKWQnGJPGF5ZB8eYAcyID3%2BmLpxq1D%2FpKaIMyXs09OttHiz64TY9sfOqCoNdMECwQQXeNwxZ9w1U435EX0pr9l8LiczLSOEV4RfKSlsxN4u2u1nJoQ%2BgMbw0oHiYwbB3Ogf%2Fokg%2B7DTg8TfXJAu%2BH2GR2BLikqwIGf4vh5XkRhrK2%2BK2lPOinnNerzbZODaeK3G8Va4egBUU4HfyY9mV9F%2BQNXWs8Tp0%2B%2F3JsG9qQNOurKuax1WHHlM4mQU4ItpgrrBvz419nbedLP%2FaYUc%2FJuuGStQus%2FLsWvcsunSUrfcAH9DL5Zzgbt7SLiL4lpvycJTWbX6I90WRE%2F%2BWNHg1RGhAcoQzTiFrBRTqPiVxgpIc5T5piWzWbMvtAsx6ZqlaWzwVZkz1JarLwwotgbLAJB6rKrKG9j6HhGkxykWfStqQJ0eOipcBxqluTCgLVTYwh%2BPcxAY6pgEMic0DufNtm44M%2FgMEbh%2B%2BzCs8wNotLtcDPUFSyBcts1yu99sDaXQzgegP582wAIMGlGPPy5p%2FB%2FzAtGLZCb3SyQUYoDXAwkmGUWn5HLFB9yEmfgNY9q3Flt9jtJEwIGwcAF2pBssOixNV3JQx70B63bFHGRSTgA2Nx9q4g3jaVDDUa%2Byexv3voJZspaHce6RcLZ%2FxUpdwFtgzq2p0xiE7KXVOaYSg&X-Amz-Signature=547d1251d4727fd0f93be64a5c375d22023b7a75c04b726fbd4cd16e265d77ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEHKAIUM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID06qNqVSuXFQ6eHN93w1824dsFafmdKB6o0qHnQ9gTSAiBRYZPMPvtfAoC8ToGccBMvCjTNXC7m2rrlT0ewcjSsniqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRfAPITx%2BnxPNeAG3KtwDu%2B0dWLHSVPfExa75C3OM2h%2BQC3I%2Fqn5cLr%2F7WTxnyIAEB%2FP0R8TVz6TtMOBrtNeznKIkNrD9SpOFw6sFqaiT1pBptk0sxA1ZLJ32s6rKWmwmRzSgXdqgEtFxkmdkMikZnHoVbVixtT31lB2%2Br%2BVu5dpazXYWOd4bVQ7SgT0buDdEYI9I1%2BZ6ztwXQKaunKWQnGJPGF5ZB8eYAcyID3%2BmLpxq1D%2FpKaIMyXs09OttHiz64TY9sfOqCoNdMECwQQXeNwxZ9w1U435EX0pr9l8LiczLSOEV4RfKSlsxN4u2u1nJoQ%2BgMbw0oHiYwbB3Ogf%2Fokg%2B7DTg8TfXJAu%2BH2GR2BLikqwIGf4vh5XkRhrK2%2BK2lPOinnNerzbZODaeK3G8Va4egBUU4HfyY9mV9F%2BQNXWs8Tp0%2B%2F3JsG9qQNOurKuax1WHHlM4mQU4ItpgrrBvz419nbedLP%2FaYUc%2FJuuGStQus%2FLsWvcsunSUrfcAH9DL5Zzgbt7SLiL4lpvycJTWbX6I90WRE%2F%2BWNHg1RGhAcoQzTiFrBRTqPiVxgpIc5T5piWzWbMvtAsx6ZqlaWzwVZkz1JarLwwotgbLAJB6rKrKG9j6HhGkxykWfStqQJ0eOipcBxqluTCgLVTYwh%2BPcxAY6pgEMic0DufNtm44M%2FgMEbh%2B%2BzCs8wNotLtcDPUFSyBcts1yu99sDaXQzgegP582wAIMGlGPPy5p%2FB%2FzAtGLZCb3SyQUYoDXAwkmGUWn5HLFB9yEmfgNY9q3Flt9jtJEwIGwcAF2pBssOixNV3JQx70B63bFHGRSTgA2Nx9q4g3jaVDDUa%2Byexv3voJZspaHce6RcLZ%2FxUpdwFtgzq2p0xiE7KXVOaYSg&X-Amz-Signature=331bc3cd1bc4023ef9a02d1869f193ab13e8d2c053a7911cc5e6cab6f9dd5a86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEHKAIUM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID06qNqVSuXFQ6eHN93w1824dsFafmdKB6o0qHnQ9gTSAiBRYZPMPvtfAoC8ToGccBMvCjTNXC7m2rrlT0ewcjSsniqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRfAPITx%2BnxPNeAG3KtwDu%2B0dWLHSVPfExa75C3OM2h%2BQC3I%2Fqn5cLr%2F7WTxnyIAEB%2FP0R8TVz6TtMOBrtNeznKIkNrD9SpOFw6sFqaiT1pBptk0sxA1ZLJ32s6rKWmwmRzSgXdqgEtFxkmdkMikZnHoVbVixtT31lB2%2Br%2BVu5dpazXYWOd4bVQ7SgT0buDdEYI9I1%2BZ6ztwXQKaunKWQnGJPGF5ZB8eYAcyID3%2BmLpxq1D%2FpKaIMyXs09OttHiz64TY9sfOqCoNdMECwQQXeNwxZ9w1U435EX0pr9l8LiczLSOEV4RfKSlsxN4u2u1nJoQ%2BgMbw0oHiYwbB3Ogf%2Fokg%2B7DTg8TfXJAu%2BH2GR2BLikqwIGf4vh5XkRhrK2%2BK2lPOinnNerzbZODaeK3G8Va4egBUU4HfyY9mV9F%2BQNXWs8Tp0%2B%2F3JsG9qQNOurKuax1WHHlM4mQU4ItpgrrBvz419nbedLP%2FaYUc%2FJuuGStQus%2FLsWvcsunSUrfcAH9DL5Zzgbt7SLiL4lpvycJTWbX6I90WRE%2F%2BWNHg1RGhAcoQzTiFrBRTqPiVxgpIc5T5piWzWbMvtAsx6ZqlaWzwVZkz1JarLwwotgbLAJB6rKrKG9j6HhGkxykWfStqQJ0eOipcBxqluTCgLVTYwh%2BPcxAY6pgEMic0DufNtm44M%2FgMEbh%2B%2BzCs8wNotLtcDPUFSyBcts1yu99sDaXQzgegP582wAIMGlGPPy5p%2FB%2FzAtGLZCb3SyQUYoDXAwkmGUWn5HLFB9yEmfgNY9q3Flt9jtJEwIGwcAF2pBssOixNV3JQx70B63bFHGRSTgA2Nx9q4g3jaVDDUa%2Byexv3voJZspaHce6RcLZ%2FxUpdwFtgzq2p0xiE7KXVOaYSg&X-Amz-Signature=53707bc14dcce9908d02ea500fbc767e3bc4ec76e28a1bca7760b8144d501c26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEHKAIUM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID06qNqVSuXFQ6eHN93w1824dsFafmdKB6o0qHnQ9gTSAiBRYZPMPvtfAoC8ToGccBMvCjTNXC7m2rrlT0ewcjSsniqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRfAPITx%2BnxPNeAG3KtwDu%2B0dWLHSVPfExa75C3OM2h%2BQC3I%2Fqn5cLr%2F7WTxnyIAEB%2FP0R8TVz6TtMOBrtNeznKIkNrD9SpOFw6sFqaiT1pBptk0sxA1ZLJ32s6rKWmwmRzSgXdqgEtFxkmdkMikZnHoVbVixtT31lB2%2Br%2BVu5dpazXYWOd4bVQ7SgT0buDdEYI9I1%2BZ6ztwXQKaunKWQnGJPGF5ZB8eYAcyID3%2BmLpxq1D%2FpKaIMyXs09OttHiz64TY9sfOqCoNdMECwQQXeNwxZ9w1U435EX0pr9l8LiczLSOEV4RfKSlsxN4u2u1nJoQ%2BgMbw0oHiYwbB3Ogf%2Fokg%2B7DTg8TfXJAu%2BH2GR2BLikqwIGf4vh5XkRhrK2%2BK2lPOinnNerzbZODaeK3G8Va4egBUU4HfyY9mV9F%2BQNXWs8Tp0%2B%2F3JsG9qQNOurKuax1WHHlM4mQU4ItpgrrBvz419nbedLP%2FaYUc%2FJuuGStQus%2FLsWvcsunSUrfcAH9DL5Zzgbt7SLiL4lpvycJTWbX6I90WRE%2F%2BWNHg1RGhAcoQzTiFrBRTqPiVxgpIc5T5piWzWbMvtAsx6ZqlaWzwVZkz1JarLwwotgbLAJB6rKrKG9j6HhGkxykWfStqQJ0eOipcBxqluTCgLVTYwh%2BPcxAY6pgEMic0DufNtm44M%2FgMEbh%2B%2BzCs8wNotLtcDPUFSyBcts1yu99sDaXQzgegP582wAIMGlGPPy5p%2FB%2FzAtGLZCb3SyQUYoDXAwkmGUWn5HLFB9yEmfgNY9q3Flt9jtJEwIGwcAF2pBssOixNV3JQx70B63bFHGRSTgA2Nx9q4g3jaVDDUa%2Byexv3voJZspaHce6RcLZ%2FxUpdwFtgzq2p0xiE7KXVOaYSg&X-Amz-Signature=eb3fe69023f4591d2113ba9f1d6febc5306e79b25a501d20684b5fc89202746d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEHKAIUM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID06qNqVSuXFQ6eHN93w1824dsFafmdKB6o0qHnQ9gTSAiBRYZPMPvtfAoC8ToGccBMvCjTNXC7m2rrlT0ewcjSsniqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRfAPITx%2BnxPNeAG3KtwDu%2B0dWLHSVPfExa75C3OM2h%2BQC3I%2Fqn5cLr%2F7WTxnyIAEB%2FP0R8TVz6TtMOBrtNeznKIkNrD9SpOFw6sFqaiT1pBptk0sxA1ZLJ32s6rKWmwmRzSgXdqgEtFxkmdkMikZnHoVbVixtT31lB2%2Br%2BVu5dpazXYWOd4bVQ7SgT0buDdEYI9I1%2BZ6ztwXQKaunKWQnGJPGF5ZB8eYAcyID3%2BmLpxq1D%2FpKaIMyXs09OttHiz64TY9sfOqCoNdMECwQQXeNwxZ9w1U435EX0pr9l8LiczLSOEV4RfKSlsxN4u2u1nJoQ%2BgMbw0oHiYwbB3Ogf%2Fokg%2B7DTg8TfXJAu%2BH2GR2BLikqwIGf4vh5XkRhrK2%2BK2lPOinnNerzbZODaeK3G8Va4egBUU4HfyY9mV9F%2BQNXWs8Tp0%2B%2F3JsG9qQNOurKuax1WHHlM4mQU4ItpgrrBvz419nbedLP%2FaYUc%2FJuuGStQus%2FLsWvcsunSUrfcAH9DL5Zzgbt7SLiL4lpvycJTWbX6I90WRE%2F%2BWNHg1RGhAcoQzTiFrBRTqPiVxgpIc5T5piWzWbMvtAsx6ZqlaWzwVZkz1JarLwwotgbLAJB6rKrKG9j6HhGkxykWfStqQJ0eOipcBxqluTCgLVTYwh%2BPcxAY6pgEMic0DufNtm44M%2FgMEbh%2B%2BzCs8wNotLtcDPUFSyBcts1yu99sDaXQzgegP582wAIMGlGPPy5p%2FB%2FzAtGLZCb3SyQUYoDXAwkmGUWn5HLFB9yEmfgNY9q3Flt9jtJEwIGwcAF2pBssOixNV3JQx70B63bFHGRSTgA2Nx9q4g3jaVDDUa%2Byexv3voJZspaHce6RcLZ%2FxUpdwFtgzq2p0xiE7KXVOaYSg&X-Amz-Signature=b0b185e89b808fda5c547f62677b51200b0b1aaada3513f2f920eaa999fe727e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEHKAIUM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID06qNqVSuXFQ6eHN93w1824dsFafmdKB6o0qHnQ9gTSAiBRYZPMPvtfAoC8ToGccBMvCjTNXC7m2rrlT0ewcjSsniqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRfAPITx%2BnxPNeAG3KtwDu%2B0dWLHSVPfExa75C3OM2h%2BQC3I%2Fqn5cLr%2F7WTxnyIAEB%2FP0R8TVz6TtMOBrtNeznKIkNrD9SpOFw6sFqaiT1pBptk0sxA1ZLJ32s6rKWmwmRzSgXdqgEtFxkmdkMikZnHoVbVixtT31lB2%2Br%2BVu5dpazXYWOd4bVQ7SgT0buDdEYI9I1%2BZ6ztwXQKaunKWQnGJPGF5ZB8eYAcyID3%2BmLpxq1D%2FpKaIMyXs09OttHiz64TY9sfOqCoNdMECwQQXeNwxZ9w1U435EX0pr9l8LiczLSOEV4RfKSlsxN4u2u1nJoQ%2BgMbw0oHiYwbB3Ogf%2Fokg%2B7DTg8TfXJAu%2BH2GR2BLikqwIGf4vh5XkRhrK2%2BK2lPOinnNerzbZODaeK3G8Va4egBUU4HfyY9mV9F%2BQNXWs8Tp0%2B%2F3JsG9qQNOurKuax1WHHlM4mQU4ItpgrrBvz419nbedLP%2FaYUc%2FJuuGStQus%2FLsWvcsunSUrfcAH9DL5Zzgbt7SLiL4lpvycJTWbX6I90WRE%2F%2BWNHg1RGhAcoQzTiFrBRTqPiVxgpIc5T5piWzWbMvtAsx6ZqlaWzwVZkz1JarLwwotgbLAJB6rKrKG9j6HhGkxykWfStqQJ0eOipcBxqluTCgLVTYwh%2BPcxAY6pgEMic0DufNtm44M%2FgMEbh%2B%2BzCs8wNotLtcDPUFSyBcts1yu99sDaXQzgegP582wAIMGlGPPy5p%2FB%2FzAtGLZCb3SyQUYoDXAwkmGUWn5HLFB9yEmfgNY9q3Flt9jtJEwIGwcAF2pBssOixNV3JQx70B63bFHGRSTgA2Nx9q4g3jaVDDUa%2Byexv3voJZspaHce6RcLZ%2FxUpdwFtgzq2p0xiE7KXVOaYSg&X-Amz-Signature=01bd3a1f4cb4128f60eab1c73c276465a79aaabea7729db271d042fe72741421&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
