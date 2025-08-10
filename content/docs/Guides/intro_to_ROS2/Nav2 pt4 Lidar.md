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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634TLBBRB%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxASBeLi5m0PMRyNuQCgCv98SwIx11WZGf4D%2Fh0FIO%2FAiAh0QijfIGsm4wt2xYI4zh0CC90Bp5K%2FUw%2BgCSa%2FAkuqSqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS2s3vFqsFqrlFdXiKtwD0exoYXG6njGM5Ev%2F9rSsn8AAvOyE4FxJuJeOxyLxPVvVp6xusesN6UU2tlQTvDSMCChYQejCrfaEBNCq2e5BZS2aX4x0UT46JYaJ%2FT3BeOIKVMaLFiI2AhwpLrDK4Vk7ah2LwpUYfwuQ7tVH9fMJw3vOPM0HjbiWRMfEG0YYBN2fF1MQZgkjnQ3KK45rcsQ9ltQgjYqMv%2BAcKW4fk9A5B3ljvsAQ7LlYZ7YM0pgU8Ml%2B57Wjgd%2BB4kaTOMYm4zXrCHpf98KMhQF6%2BKIH9BYWTlgyp88uAnniAZTL0BocpbsLw2HCzVcarm3gQLs9PSX70ArtROVn3y9lHVgNAyOK4%2Bqh%2FauWUxf3BlOM3Edtfgwfn%2F1olv46XygvOPP0EzN3MzbEV2MtCGuJ9J14PQc3%2BBXV3H%2BnE3VdIp9Jwj1PWxLNen6eTAaUMz7IsaBeEwpge%2F0J%2FQqI6jAI66UtLL6YUgsxQMU3fNEe2i2sHobJdPV%2F0HTkxML99BJ4A8SZpYPCZsYcGSE1G%2Bpxcx00F3uaNbcuhTOUWUnQOju6yUOHk9sD5xj11BKYgrD0aHGVfKa%2FI1U8SyAnQGEqFkcrp5%2FUjMAjx7hAtW1KGt%2B3LDuGVSHlFxPfT0R6XjmW6sUwy7LfxAY6pgEjNCp5X%2BUT1Zp8GzhTGXNn8%2FLcLAfzQrNMaXxRqEb%2F5CAmAHe%2BMxDeSBg6P6FaW8vF6QIXC9iTef98Y81rLwNFUE8%2F%2F%2FgzdI7QRM3efKZlCSSaPDoIKOXmEj31lpwfp6NmegKzy02V6DqmoEmTJvdgpJeBzLcRi9m4J6kToTuauNE0ZaBQ9UyiAE3RekG3d32sqoZUyMAFXqveZ1mSm3Q0B6BASOkJ&X-Amz-Signature=6e992b88620f644f3830b62e9d77e758f8d5c79b30157b60006ce42858028401&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCUNW5WT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGO5blEkxDXykELh5ScJzsoLhendLv6V%2FzBq8mBhyvpAiEAucms%2BxdUxrUndMp2QzSs1AwqTdKeSMS%2BRNWFLAPubccqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtdeN7fZoMhMjQtoSrcAxO2Hk3gI7ryxoHfWrz8PQnJdSL%2Bdy8iawexx0%2B8xClJ3k45XMCGPiEQ6eDilwsA0OfatfBmutHiTbIFX4%2Bo2mzD%2FLNYbMUJET4THNpxpv8IFsq5ahoYVWSjB1aMFr0mUUMSXSM9El%2BPvaRsGC%2B%2Fvcz%2FAxlc%2BSA6rWGh7rBei2d4C98SX8a51xFF11TnSMb1iA0OYwM6OMFeTrKJzYSEYpd9suMDAq1d7oFBbbr1BklJlrC3dk1ECSPDWc1Q78wxfgVy62FEjOnRrf35gA65TP5YWaZcU%2F6FWCWrDP4bmYNO%2FS2tWBSg%2B0IF5TAHnrsVnNQlEim40kVc6XIpZj420%2FBI1e5C2IOw%2BOucJ6cx%2BrwbygfMGdbHslDAsW%2B%2FUCkSVlnhivjQdUduQdUcLUvrHfyd2Ro2mVrh2VunmeF7WM%2BUrMReyV09r6uV0sfGvp%2Bgy5xB67ox4MX1RzpQik9z3Tkda9vjBDdhJ1wsz2Wbm3c2Qda04WfjoUufa1%2ByBYqpHAmfkgn9Nq7tpzV4cC1akeoJl8DFoxa%2BUP%2BPbYX2Qc%2Fu2V5mgKqmlE3v0Bm1d%2BBwKcivuk8R9iJk2M133dDMgWVDnFnfu1aHMnrdhtYUNiWtLnRT4FbAOBUfg5U%2FMMKy38QGOqUBOoVgF%2Fa%2FApP5MiqJPc8VIr55GUtya6AtN0CzLlOp8OPLhyM6TxwyIn1MI%2FH%2FWW4hNLaVa6jmzDXcNU3nhf8isDFfEbz%2BpbgTrPTnftRa%2BErlLNf1jBXzkthT6L6bzuoqDd04QgWQ9ADTV18JAoPlJYbgunrBnL%2FREvUXTU3f0TihsemjBjOxe6yBy54%2B8bal%2BNqF0C4HhxTCya4dbLEBvweF9Ph%2F&X-Amz-Signature=e90ce894bb0ff0594ad0d4b12818bd6bafd10606fe17516acce245adce7a6878&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCUNW5WT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGO5blEkxDXykELh5ScJzsoLhendLv6V%2FzBq8mBhyvpAiEAucms%2BxdUxrUndMp2QzSs1AwqTdKeSMS%2BRNWFLAPubccqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtdeN7fZoMhMjQtoSrcAxO2Hk3gI7ryxoHfWrz8PQnJdSL%2Bdy8iawexx0%2B8xClJ3k45XMCGPiEQ6eDilwsA0OfatfBmutHiTbIFX4%2Bo2mzD%2FLNYbMUJET4THNpxpv8IFsq5ahoYVWSjB1aMFr0mUUMSXSM9El%2BPvaRsGC%2B%2Fvcz%2FAxlc%2BSA6rWGh7rBei2d4C98SX8a51xFF11TnSMb1iA0OYwM6OMFeTrKJzYSEYpd9suMDAq1d7oFBbbr1BklJlrC3dk1ECSPDWc1Q78wxfgVy62FEjOnRrf35gA65TP5YWaZcU%2F6FWCWrDP4bmYNO%2FS2tWBSg%2B0IF5TAHnrsVnNQlEim40kVc6XIpZj420%2FBI1e5C2IOw%2BOucJ6cx%2BrwbygfMGdbHslDAsW%2B%2FUCkSVlnhivjQdUduQdUcLUvrHfyd2Ro2mVrh2VunmeF7WM%2BUrMReyV09r6uV0sfGvp%2Bgy5xB67ox4MX1RzpQik9z3Tkda9vjBDdhJ1wsz2Wbm3c2Qda04WfjoUufa1%2ByBYqpHAmfkgn9Nq7tpzV4cC1akeoJl8DFoxa%2BUP%2BPbYX2Qc%2Fu2V5mgKqmlE3v0Bm1d%2BBwKcivuk8R9iJk2M133dDMgWVDnFnfu1aHMnrdhtYUNiWtLnRT4FbAOBUfg5U%2FMMKy38QGOqUBOoVgF%2Fa%2FApP5MiqJPc8VIr55GUtya6AtN0CzLlOp8OPLhyM6TxwyIn1MI%2FH%2FWW4hNLaVa6jmzDXcNU3nhf8isDFfEbz%2BpbgTrPTnftRa%2BErlLNf1jBXzkthT6L6bzuoqDd04QgWQ9ADTV18JAoPlJYbgunrBnL%2FREvUXTU3f0TihsemjBjOxe6yBy54%2B8bal%2BNqF0C4HhxTCya4dbLEBvweF9Ph%2F&X-Amz-Signature=2d6836e8fcfae1b55561fa4986e1252a68c0cf82771de820186c99b0ec4cc173&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCUNW5WT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGO5blEkxDXykELh5ScJzsoLhendLv6V%2FzBq8mBhyvpAiEAucms%2BxdUxrUndMp2QzSs1AwqTdKeSMS%2BRNWFLAPubccqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtdeN7fZoMhMjQtoSrcAxO2Hk3gI7ryxoHfWrz8PQnJdSL%2Bdy8iawexx0%2B8xClJ3k45XMCGPiEQ6eDilwsA0OfatfBmutHiTbIFX4%2Bo2mzD%2FLNYbMUJET4THNpxpv8IFsq5ahoYVWSjB1aMFr0mUUMSXSM9El%2BPvaRsGC%2B%2Fvcz%2FAxlc%2BSA6rWGh7rBei2d4C98SX8a51xFF11TnSMb1iA0OYwM6OMFeTrKJzYSEYpd9suMDAq1d7oFBbbr1BklJlrC3dk1ECSPDWc1Q78wxfgVy62FEjOnRrf35gA65TP5YWaZcU%2F6FWCWrDP4bmYNO%2FS2tWBSg%2B0IF5TAHnrsVnNQlEim40kVc6XIpZj420%2FBI1e5C2IOw%2BOucJ6cx%2BrwbygfMGdbHslDAsW%2B%2FUCkSVlnhivjQdUduQdUcLUvrHfyd2Ro2mVrh2VunmeF7WM%2BUrMReyV09r6uV0sfGvp%2Bgy5xB67ox4MX1RzpQik9z3Tkda9vjBDdhJ1wsz2Wbm3c2Qda04WfjoUufa1%2ByBYqpHAmfkgn9Nq7tpzV4cC1akeoJl8DFoxa%2BUP%2BPbYX2Qc%2Fu2V5mgKqmlE3v0Bm1d%2BBwKcivuk8R9iJk2M133dDMgWVDnFnfu1aHMnrdhtYUNiWtLnRT4FbAOBUfg5U%2FMMKy38QGOqUBOoVgF%2Fa%2FApP5MiqJPc8VIr55GUtya6AtN0CzLlOp8OPLhyM6TxwyIn1MI%2FH%2FWW4hNLaVa6jmzDXcNU3nhf8isDFfEbz%2BpbgTrPTnftRa%2BErlLNf1jBXzkthT6L6bzuoqDd04QgWQ9ADTV18JAoPlJYbgunrBnL%2FREvUXTU3f0TihsemjBjOxe6yBy54%2B8bal%2BNqF0C4HhxTCya4dbLEBvweF9Ph%2F&X-Amz-Signature=124cbe5df80b964e3372e9f926cf15a609ddac45b7410ac7a224b3588a1b88df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCUNW5WT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGO5blEkxDXykELh5ScJzsoLhendLv6V%2FzBq8mBhyvpAiEAucms%2BxdUxrUndMp2QzSs1AwqTdKeSMS%2BRNWFLAPubccqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtdeN7fZoMhMjQtoSrcAxO2Hk3gI7ryxoHfWrz8PQnJdSL%2Bdy8iawexx0%2B8xClJ3k45XMCGPiEQ6eDilwsA0OfatfBmutHiTbIFX4%2Bo2mzD%2FLNYbMUJET4THNpxpv8IFsq5ahoYVWSjB1aMFr0mUUMSXSM9El%2BPvaRsGC%2B%2Fvcz%2FAxlc%2BSA6rWGh7rBei2d4C98SX8a51xFF11TnSMb1iA0OYwM6OMFeTrKJzYSEYpd9suMDAq1d7oFBbbr1BklJlrC3dk1ECSPDWc1Q78wxfgVy62FEjOnRrf35gA65TP5YWaZcU%2F6FWCWrDP4bmYNO%2FS2tWBSg%2B0IF5TAHnrsVnNQlEim40kVc6XIpZj420%2FBI1e5C2IOw%2BOucJ6cx%2BrwbygfMGdbHslDAsW%2B%2FUCkSVlnhivjQdUduQdUcLUvrHfyd2Ro2mVrh2VunmeF7WM%2BUrMReyV09r6uV0sfGvp%2Bgy5xB67ox4MX1RzpQik9z3Tkda9vjBDdhJ1wsz2Wbm3c2Qda04WfjoUufa1%2ByBYqpHAmfkgn9Nq7tpzV4cC1akeoJl8DFoxa%2BUP%2BPbYX2Qc%2Fu2V5mgKqmlE3v0Bm1d%2BBwKcivuk8R9iJk2M133dDMgWVDnFnfu1aHMnrdhtYUNiWtLnRT4FbAOBUfg5U%2FMMKy38QGOqUBOoVgF%2Fa%2FApP5MiqJPc8VIr55GUtya6AtN0CzLlOp8OPLhyM6TxwyIn1MI%2FH%2FWW4hNLaVa6jmzDXcNU3nhf8isDFfEbz%2BpbgTrPTnftRa%2BErlLNf1jBXzkthT6L6bzuoqDd04QgWQ9ADTV18JAoPlJYbgunrBnL%2FREvUXTU3f0TihsemjBjOxe6yBy54%2B8bal%2BNqF0C4HhxTCya4dbLEBvweF9Ph%2F&X-Amz-Signature=0cd00f0e20b2d19078ef334c728f4ad70ab073c657d8358e0102a543e158a268&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCUNW5WT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGO5blEkxDXykELh5ScJzsoLhendLv6V%2FzBq8mBhyvpAiEAucms%2BxdUxrUndMp2QzSs1AwqTdKeSMS%2BRNWFLAPubccqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtdeN7fZoMhMjQtoSrcAxO2Hk3gI7ryxoHfWrz8PQnJdSL%2Bdy8iawexx0%2B8xClJ3k45XMCGPiEQ6eDilwsA0OfatfBmutHiTbIFX4%2Bo2mzD%2FLNYbMUJET4THNpxpv8IFsq5ahoYVWSjB1aMFr0mUUMSXSM9El%2BPvaRsGC%2B%2Fvcz%2FAxlc%2BSA6rWGh7rBei2d4C98SX8a51xFF11TnSMb1iA0OYwM6OMFeTrKJzYSEYpd9suMDAq1d7oFBbbr1BklJlrC3dk1ECSPDWc1Q78wxfgVy62FEjOnRrf35gA65TP5YWaZcU%2F6FWCWrDP4bmYNO%2FS2tWBSg%2B0IF5TAHnrsVnNQlEim40kVc6XIpZj420%2FBI1e5C2IOw%2BOucJ6cx%2BrwbygfMGdbHslDAsW%2B%2FUCkSVlnhivjQdUduQdUcLUvrHfyd2Ro2mVrh2VunmeF7WM%2BUrMReyV09r6uV0sfGvp%2Bgy5xB67ox4MX1RzpQik9z3Tkda9vjBDdhJ1wsz2Wbm3c2Qda04WfjoUufa1%2ByBYqpHAmfkgn9Nq7tpzV4cC1akeoJl8DFoxa%2BUP%2BPbYX2Qc%2Fu2V5mgKqmlE3v0Bm1d%2BBwKcivuk8R9iJk2M133dDMgWVDnFnfu1aHMnrdhtYUNiWtLnRT4FbAOBUfg5U%2FMMKy38QGOqUBOoVgF%2Fa%2FApP5MiqJPc8VIr55GUtya6AtN0CzLlOp8OPLhyM6TxwyIn1MI%2FH%2FWW4hNLaVa6jmzDXcNU3nhf8isDFfEbz%2BpbgTrPTnftRa%2BErlLNf1jBXzkthT6L6bzuoqDd04QgWQ9ADTV18JAoPlJYbgunrBnL%2FREvUXTU3f0TihsemjBjOxe6yBy54%2B8bal%2BNqF0C4HhxTCya4dbLEBvweF9Ph%2F&X-Amz-Signature=85bdbc03fab256780427c3e9d499128ab927fa08de43012e9a0697654ca32092&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCUNW5WT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGO5blEkxDXykELh5ScJzsoLhendLv6V%2FzBq8mBhyvpAiEAucms%2BxdUxrUndMp2QzSs1AwqTdKeSMS%2BRNWFLAPubccqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtdeN7fZoMhMjQtoSrcAxO2Hk3gI7ryxoHfWrz8PQnJdSL%2Bdy8iawexx0%2B8xClJ3k45XMCGPiEQ6eDilwsA0OfatfBmutHiTbIFX4%2Bo2mzD%2FLNYbMUJET4THNpxpv8IFsq5ahoYVWSjB1aMFr0mUUMSXSM9El%2BPvaRsGC%2B%2Fvcz%2FAxlc%2BSA6rWGh7rBei2d4C98SX8a51xFF11TnSMb1iA0OYwM6OMFeTrKJzYSEYpd9suMDAq1d7oFBbbr1BklJlrC3dk1ECSPDWc1Q78wxfgVy62FEjOnRrf35gA65TP5YWaZcU%2F6FWCWrDP4bmYNO%2FS2tWBSg%2B0IF5TAHnrsVnNQlEim40kVc6XIpZj420%2FBI1e5C2IOw%2BOucJ6cx%2BrwbygfMGdbHslDAsW%2B%2FUCkSVlnhivjQdUduQdUcLUvrHfyd2Ro2mVrh2VunmeF7WM%2BUrMReyV09r6uV0sfGvp%2Bgy5xB67ox4MX1RzpQik9z3Tkda9vjBDdhJ1wsz2Wbm3c2Qda04WfjoUufa1%2ByBYqpHAmfkgn9Nq7tpzV4cC1akeoJl8DFoxa%2BUP%2BPbYX2Qc%2Fu2V5mgKqmlE3v0Bm1d%2BBwKcivuk8R9iJk2M133dDMgWVDnFnfu1aHMnrdhtYUNiWtLnRT4FbAOBUfg5U%2FMMKy38QGOqUBOoVgF%2Fa%2FApP5MiqJPc8VIr55GUtya6AtN0CzLlOp8OPLhyM6TxwyIn1MI%2FH%2FWW4hNLaVa6jmzDXcNU3nhf8isDFfEbz%2BpbgTrPTnftRa%2BErlLNf1jBXzkthT6L6bzuoqDd04QgWQ9ADTV18JAoPlJYbgunrBnL%2FREvUXTU3f0TihsemjBjOxe6yBy54%2B8bal%2BNqF0C4HhxTCya4dbLEBvweF9Ph%2F&X-Amz-Signature=b260f9cbb9f0fd2fa6a53022b3fd5b90dc8566ba9bca0413a44f5f5b53bd153f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCUNW5WT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGO5blEkxDXykELh5ScJzsoLhendLv6V%2FzBq8mBhyvpAiEAucms%2BxdUxrUndMp2QzSs1AwqTdKeSMS%2BRNWFLAPubccqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtdeN7fZoMhMjQtoSrcAxO2Hk3gI7ryxoHfWrz8PQnJdSL%2Bdy8iawexx0%2B8xClJ3k45XMCGPiEQ6eDilwsA0OfatfBmutHiTbIFX4%2Bo2mzD%2FLNYbMUJET4THNpxpv8IFsq5ahoYVWSjB1aMFr0mUUMSXSM9El%2BPvaRsGC%2B%2Fvcz%2FAxlc%2BSA6rWGh7rBei2d4C98SX8a51xFF11TnSMb1iA0OYwM6OMFeTrKJzYSEYpd9suMDAq1d7oFBbbr1BklJlrC3dk1ECSPDWc1Q78wxfgVy62FEjOnRrf35gA65TP5YWaZcU%2F6FWCWrDP4bmYNO%2FS2tWBSg%2B0IF5TAHnrsVnNQlEim40kVc6XIpZj420%2FBI1e5C2IOw%2BOucJ6cx%2BrwbygfMGdbHslDAsW%2B%2FUCkSVlnhivjQdUduQdUcLUvrHfyd2Ro2mVrh2VunmeF7WM%2BUrMReyV09r6uV0sfGvp%2Bgy5xB67ox4MX1RzpQik9z3Tkda9vjBDdhJ1wsz2Wbm3c2Qda04WfjoUufa1%2ByBYqpHAmfkgn9Nq7tpzV4cC1akeoJl8DFoxa%2BUP%2BPbYX2Qc%2Fu2V5mgKqmlE3v0Bm1d%2BBwKcivuk8R9iJk2M133dDMgWVDnFnfu1aHMnrdhtYUNiWtLnRT4FbAOBUfg5U%2FMMKy38QGOqUBOoVgF%2Fa%2FApP5MiqJPc8VIr55GUtya6AtN0CzLlOp8OPLhyM6TxwyIn1MI%2FH%2FWW4hNLaVa6jmzDXcNU3nhf8isDFfEbz%2BpbgTrPTnftRa%2BErlLNf1jBXzkthT6L6bzuoqDd04QgWQ9ADTV18JAoPlJYbgunrBnL%2FREvUXTU3f0TihsemjBjOxe6yBy54%2B8bal%2BNqF0C4HhxTCya4dbLEBvweF9Ph%2F&X-Amz-Signature=bfab150a54e54c1ac07a702aaa692d93eb868b5b939ab097b7566c3130e7ae96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCUNW5WT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGO5blEkxDXykELh5ScJzsoLhendLv6V%2FzBq8mBhyvpAiEAucms%2BxdUxrUndMp2QzSs1AwqTdKeSMS%2BRNWFLAPubccqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtdeN7fZoMhMjQtoSrcAxO2Hk3gI7ryxoHfWrz8PQnJdSL%2Bdy8iawexx0%2B8xClJ3k45XMCGPiEQ6eDilwsA0OfatfBmutHiTbIFX4%2Bo2mzD%2FLNYbMUJET4THNpxpv8IFsq5ahoYVWSjB1aMFr0mUUMSXSM9El%2BPvaRsGC%2B%2Fvcz%2FAxlc%2BSA6rWGh7rBei2d4C98SX8a51xFF11TnSMb1iA0OYwM6OMFeTrKJzYSEYpd9suMDAq1d7oFBbbr1BklJlrC3dk1ECSPDWc1Q78wxfgVy62FEjOnRrf35gA65TP5YWaZcU%2F6FWCWrDP4bmYNO%2FS2tWBSg%2B0IF5TAHnrsVnNQlEim40kVc6XIpZj420%2FBI1e5C2IOw%2BOucJ6cx%2BrwbygfMGdbHslDAsW%2B%2FUCkSVlnhivjQdUduQdUcLUvrHfyd2Ro2mVrh2VunmeF7WM%2BUrMReyV09r6uV0sfGvp%2Bgy5xB67ox4MX1RzpQik9z3Tkda9vjBDdhJ1wsz2Wbm3c2Qda04WfjoUufa1%2ByBYqpHAmfkgn9Nq7tpzV4cC1akeoJl8DFoxa%2BUP%2BPbYX2Qc%2Fu2V5mgKqmlE3v0Bm1d%2BBwKcivuk8R9iJk2M133dDMgWVDnFnfu1aHMnrdhtYUNiWtLnRT4FbAOBUfg5U%2FMMKy38QGOqUBOoVgF%2Fa%2FApP5MiqJPc8VIr55GUtya6AtN0CzLlOp8OPLhyM6TxwyIn1MI%2FH%2FWW4hNLaVa6jmzDXcNU3nhf8isDFfEbz%2BpbgTrPTnftRa%2BErlLNf1jBXzkthT6L6bzuoqDd04QgWQ9ADTV18JAoPlJYbgunrBnL%2FREvUXTU3f0TihsemjBjOxe6yBy54%2B8bal%2BNqF0C4HhxTCya4dbLEBvweF9Ph%2F&X-Amz-Signature=c4dfa8edd39e03e4d91f7f6f0486760f508bb904db0aa76a1d7a51b366ce9716&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCUNW5WT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGO5blEkxDXykELh5ScJzsoLhendLv6V%2FzBq8mBhyvpAiEAucms%2BxdUxrUndMp2QzSs1AwqTdKeSMS%2BRNWFLAPubccqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtdeN7fZoMhMjQtoSrcAxO2Hk3gI7ryxoHfWrz8PQnJdSL%2Bdy8iawexx0%2B8xClJ3k45XMCGPiEQ6eDilwsA0OfatfBmutHiTbIFX4%2Bo2mzD%2FLNYbMUJET4THNpxpv8IFsq5ahoYVWSjB1aMFr0mUUMSXSM9El%2BPvaRsGC%2B%2Fvcz%2FAxlc%2BSA6rWGh7rBei2d4C98SX8a51xFF11TnSMb1iA0OYwM6OMFeTrKJzYSEYpd9suMDAq1d7oFBbbr1BklJlrC3dk1ECSPDWc1Q78wxfgVy62FEjOnRrf35gA65TP5YWaZcU%2F6FWCWrDP4bmYNO%2FS2tWBSg%2B0IF5TAHnrsVnNQlEim40kVc6XIpZj420%2FBI1e5C2IOw%2BOucJ6cx%2BrwbygfMGdbHslDAsW%2B%2FUCkSVlnhivjQdUduQdUcLUvrHfyd2Ro2mVrh2VunmeF7WM%2BUrMReyV09r6uV0sfGvp%2Bgy5xB67ox4MX1RzpQik9z3Tkda9vjBDdhJ1wsz2Wbm3c2Qda04WfjoUufa1%2ByBYqpHAmfkgn9Nq7tpzV4cC1akeoJl8DFoxa%2BUP%2BPbYX2Qc%2Fu2V5mgKqmlE3v0Bm1d%2BBwKcivuk8R9iJk2M133dDMgWVDnFnfu1aHMnrdhtYUNiWtLnRT4FbAOBUfg5U%2FMMKy38QGOqUBOoVgF%2Fa%2FApP5MiqJPc8VIr55GUtya6AtN0CzLlOp8OPLhyM6TxwyIn1MI%2FH%2FWW4hNLaVa6jmzDXcNU3nhf8isDFfEbz%2BpbgTrPTnftRa%2BErlLNf1jBXzkthT6L6bzuoqDd04QgWQ9ADTV18JAoPlJYbgunrBnL%2FREvUXTU3f0TihsemjBjOxe6yBy54%2B8bal%2BNqF0C4HhxTCya4dbLEBvweF9Ph%2F&X-Amz-Signature=1f67751b3cc0ec37563fa261524844e3e2140a5aecae204784508b4dc022823e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCUNW5WT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGO5blEkxDXykELh5ScJzsoLhendLv6V%2FzBq8mBhyvpAiEAucms%2BxdUxrUndMp2QzSs1AwqTdKeSMS%2BRNWFLAPubccqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtdeN7fZoMhMjQtoSrcAxO2Hk3gI7ryxoHfWrz8PQnJdSL%2Bdy8iawexx0%2B8xClJ3k45XMCGPiEQ6eDilwsA0OfatfBmutHiTbIFX4%2Bo2mzD%2FLNYbMUJET4THNpxpv8IFsq5ahoYVWSjB1aMFr0mUUMSXSM9El%2BPvaRsGC%2B%2Fvcz%2FAxlc%2BSA6rWGh7rBei2d4C98SX8a51xFF11TnSMb1iA0OYwM6OMFeTrKJzYSEYpd9suMDAq1d7oFBbbr1BklJlrC3dk1ECSPDWc1Q78wxfgVy62FEjOnRrf35gA65TP5YWaZcU%2F6FWCWrDP4bmYNO%2FS2tWBSg%2B0IF5TAHnrsVnNQlEim40kVc6XIpZj420%2FBI1e5C2IOw%2BOucJ6cx%2BrwbygfMGdbHslDAsW%2B%2FUCkSVlnhivjQdUduQdUcLUvrHfyd2Ro2mVrh2VunmeF7WM%2BUrMReyV09r6uV0sfGvp%2Bgy5xB67ox4MX1RzpQik9z3Tkda9vjBDdhJ1wsz2Wbm3c2Qda04WfjoUufa1%2ByBYqpHAmfkgn9Nq7tpzV4cC1akeoJl8DFoxa%2BUP%2BPbYX2Qc%2Fu2V5mgKqmlE3v0Bm1d%2BBwKcivuk8R9iJk2M133dDMgWVDnFnfu1aHMnrdhtYUNiWtLnRT4FbAOBUfg5U%2FMMKy38QGOqUBOoVgF%2Fa%2FApP5MiqJPc8VIr55GUtya6AtN0CzLlOp8OPLhyM6TxwyIn1MI%2FH%2FWW4hNLaVa6jmzDXcNU3nhf8isDFfEbz%2BpbgTrPTnftRa%2BErlLNf1jBXzkthT6L6bzuoqDd04QgWQ9ADTV18JAoPlJYbgunrBnL%2FREvUXTU3f0TihsemjBjOxe6yBy54%2B8bal%2BNqF0C4HhxTCya4dbLEBvweF9Ph%2F&X-Amz-Signature=0cd00f0e20b2d19078ef334c728f4ad70ab073c657d8358e0102a543e158a268&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
