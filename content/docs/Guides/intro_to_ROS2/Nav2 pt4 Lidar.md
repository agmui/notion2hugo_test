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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PB3X2BX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIDul9Kwox5UpQnMYtLB%2BNRAslC0R5E3AnSvsBZJVJDlnAiA97Ve2i6cTe3TovWW37xV134Y2xvaDED6ZtLMH0sZ%2BtSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMQ1DzlrxTxhHmiZxUKtwDGsYDuA1jOr%2F3%2BqGCSDificfL145PLg0MTkUQvMUOhg9qAdb71KppPdtde47ULDBfget1jkKbA46Lg%2BN4Ot7HzqjeoZfkee9qbDYUJlXCa7eIigKLiaYrEIWsu6VM9mcH7ZyG8JXuLla2XkYPP6804sG1R1i0DLtGDi%2B4EGLl3O2LAJZrFtcV2pJ2MXX4AU89lzTZQgMkjkNXZMm9QRQXyRhaQP2YNfGDqlv1RXXqyx8OSHESBb5i%2FmVYibcNGlhbOHG9Y8LvdxbrlO01H0N40Y8YdvHVy9MlmlAr8nuU%2FQcMtkRJ%2FUkAl40aPVxcPMbN1uwl7sTYxX9fGImlhaeKgBccrfS3nKODcsGr0p7X7%2B5ih1c4u%2FYBI5QHK0oFmlz4rS7UAEDfbj4j5PUn51Us67z%2Fm%2FBQBDC%2FKsy%2FW1UDFQ%2BTBJP%2F40Vj9gMX3RLZ6JcGXteEKbzENvF8pwMHBOFISHhIGNJa2fO33yxYT3t8P7dMTDExQaclOZWpOPIJUVPLf8dKFfCmK9oITrUgBhMae52rc4m%2F%2FdLu%2Fk0E1u0z3vZPmHn7eIvlBUTh4A9b4Z2n1KSyZ%2FcecG4nSGpnZdv%2BbqWlEZq5oigDQiuIcZ0ZQschKbC7UbfK7bKuvRUwk87DxAY6pgGIpkIOvVnXQzKx0Fd0q7mlS7rYU3vDSWl71GeQd0bTI1dqnlHcI2GoSI5ZqvmhEW7qJvKutnO53X1MHOgijDApEOMWnpRHEqHCAoLfOM%2Ffgn4gwA3DIKjJJGs2ak6LXz9DKRFbzlcR1W36aRuxVkZi75oq0gWm%2B4jXu4UqAJP9Locuar5Q6ZdM59pSOk1oVupJiwRJc9R3m5xpHiaUHgaC6ddh9cD4&X-Amz-Signature=842f21ebd6cb272c2be7ef50785548b50ece07f1b6d0ca9805ee68f623cd5e68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK5MNVHN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIHKEwr8k5z6%2FULde9GWC98XQKhN5MjbLR84K1myJAl1lAiEAtf8Nt9arHVY8jkGJt10qIP0TTkq6J7BmdQLSugo5a%2Fwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDBWbmk%2BxSoPBwsblKircAyjY8j1l12re6VXfX4cla%2BpXolcWrCt%2FbIFM7xzmQbFdEcCkQeRDD75HWH8GwEGn33VOYCvJH%2FskwAmbWUEKXbicHBrUOubVz4bBU7BeJ4tdeHw6PG0eE9hquVWmxxDPRsoqShPKlN8ASUrSBX8NX3sZqWjZ3guUZjWQSC1y13Xzqcm%2BgloFvBAS7F1SIaja%2B16%2Bx6N04ZTy4DbHh91eLUw9KHljpQEL832VliIi1ijTAZLlGSKg0YKf1LIboZijqFzNt%2BMENkiCqSKMUJ4vPufrV3R0ruDxMhey03afMeDhRbVcVfMO80hZcRuXuXkZpo5%2BP3cpb2KtBdUpxHX4koq131XVUMfojGuLaMdDA4fP8gh5Pz0v5DkjDU9v6TZnt3Vppz6WKwlZQO7yn4xYyiKuYZRN3aDtb7%2BmIM0rOx60fAHntZKmMqC%2FBEktXIqLsuwl9vGUwNSYKIoXC1eaisc2VtAFs7R77u3LrvZpDGdIBRcu17madrvIcvYFNIiwQ8GH27ADCnou57ZbwwICtFKLG1nBk2uJ4GG2D2DIga8G%2FShQOjNl%2BTq2PzLXwvia1U29lnY1Id6cmfDEX9Ebz1FuD0AAXPwbJAs0LDrJwj3wRlcuAi%2F3%2B6m23zWVMI7Ow8QGOqUBvkoAAnNIm4fPXLASLS23WrKP3watOx%2FBiRMQUggkij4z900B4kOvpzydBondJGLn7%2BmC1RtHzTgWS49h2ZKi%2BMjbdhY%2FspJn8ncbZd8AN2AZ1%2FXey1yH4tpxvlgcb%2BlwpHwXoz%2FcnP%2FoDf78HQiF7eSULTLfq136siL4wZx38PK26V8S6mO3dlTIHEI3WKzwKVftBZFAzkOSroQE1635WZaafg7v&X-Amz-Signature=87dbc7ec03d762dbcdd13aff65d441f6e4c7923d909c443e7929e6078c4ba915&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK5MNVHN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIHKEwr8k5z6%2FULde9GWC98XQKhN5MjbLR84K1myJAl1lAiEAtf8Nt9arHVY8jkGJt10qIP0TTkq6J7BmdQLSugo5a%2Fwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDBWbmk%2BxSoPBwsblKircAyjY8j1l12re6VXfX4cla%2BpXolcWrCt%2FbIFM7xzmQbFdEcCkQeRDD75HWH8GwEGn33VOYCvJH%2FskwAmbWUEKXbicHBrUOubVz4bBU7BeJ4tdeHw6PG0eE9hquVWmxxDPRsoqShPKlN8ASUrSBX8NX3sZqWjZ3guUZjWQSC1y13Xzqcm%2BgloFvBAS7F1SIaja%2B16%2Bx6N04ZTy4DbHh91eLUw9KHljpQEL832VliIi1ijTAZLlGSKg0YKf1LIboZijqFzNt%2BMENkiCqSKMUJ4vPufrV3R0ruDxMhey03afMeDhRbVcVfMO80hZcRuXuXkZpo5%2BP3cpb2KtBdUpxHX4koq131XVUMfojGuLaMdDA4fP8gh5Pz0v5DkjDU9v6TZnt3Vppz6WKwlZQO7yn4xYyiKuYZRN3aDtb7%2BmIM0rOx60fAHntZKmMqC%2FBEktXIqLsuwl9vGUwNSYKIoXC1eaisc2VtAFs7R77u3LrvZpDGdIBRcu17madrvIcvYFNIiwQ8GH27ADCnou57ZbwwICtFKLG1nBk2uJ4GG2D2DIga8G%2FShQOjNl%2BTq2PzLXwvia1U29lnY1Id6cmfDEX9Ebz1FuD0AAXPwbJAs0LDrJwj3wRlcuAi%2F3%2B6m23zWVMI7Ow8QGOqUBvkoAAnNIm4fPXLASLS23WrKP3watOx%2FBiRMQUggkij4z900B4kOvpzydBondJGLn7%2BmC1RtHzTgWS49h2ZKi%2BMjbdhY%2FspJn8ncbZd8AN2AZ1%2FXey1yH4tpxvlgcb%2BlwpHwXoz%2FcnP%2FoDf78HQiF7eSULTLfq136siL4wZx38PK26V8S6mO3dlTIHEI3WKzwKVftBZFAzkOSroQE1635WZaafg7v&X-Amz-Signature=ad965a6c78395ea5fd24b82868dc24f1e68916b8eae91d286ef3c82a05f334e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK5MNVHN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIHKEwr8k5z6%2FULde9GWC98XQKhN5MjbLR84K1myJAl1lAiEAtf8Nt9arHVY8jkGJt10qIP0TTkq6J7BmdQLSugo5a%2Fwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDBWbmk%2BxSoPBwsblKircAyjY8j1l12re6VXfX4cla%2BpXolcWrCt%2FbIFM7xzmQbFdEcCkQeRDD75HWH8GwEGn33VOYCvJH%2FskwAmbWUEKXbicHBrUOubVz4bBU7BeJ4tdeHw6PG0eE9hquVWmxxDPRsoqShPKlN8ASUrSBX8NX3sZqWjZ3guUZjWQSC1y13Xzqcm%2BgloFvBAS7F1SIaja%2B16%2Bx6N04ZTy4DbHh91eLUw9KHljpQEL832VliIi1ijTAZLlGSKg0YKf1LIboZijqFzNt%2BMENkiCqSKMUJ4vPufrV3R0ruDxMhey03afMeDhRbVcVfMO80hZcRuXuXkZpo5%2BP3cpb2KtBdUpxHX4koq131XVUMfojGuLaMdDA4fP8gh5Pz0v5DkjDU9v6TZnt3Vppz6WKwlZQO7yn4xYyiKuYZRN3aDtb7%2BmIM0rOx60fAHntZKmMqC%2FBEktXIqLsuwl9vGUwNSYKIoXC1eaisc2VtAFs7R77u3LrvZpDGdIBRcu17madrvIcvYFNIiwQ8GH27ADCnou57ZbwwICtFKLG1nBk2uJ4GG2D2DIga8G%2FShQOjNl%2BTq2PzLXwvia1U29lnY1Id6cmfDEX9Ebz1FuD0AAXPwbJAs0LDrJwj3wRlcuAi%2F3%2B6m23zWVMI7Ow8QGOqUBvkoAAnNIm4fPXLASLS23WrKP3watOx%2FBiRMQUggkij4z900B4kOvpzydBondJGLn7%2BmC1RtHzTgWS49h2ZKi%2BMjbdhY%2FspJn8ncbZd8AN2AZ1%2FXey1yH4tpxvlgcb%2BlwpHwXoz%2FcnP%2FoDf78HQiF7eSULTLfq136siL4wZx38PK26V8S6mO3dlTIHEI3WKzwKVftBZFAzkOSroQE1635WZaafg7v&X-Amz-Signature=99956e0145072d69176a92a2b1e92fcf3810444b162020a50634d653fc112152&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK5MNVHN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIHKEwr8k5z6%2FULde9GWC98XQKhN5MjbLR84K1myJAl1lAiEAtf8Nt9arHVY8jkGJt10qIP0TTkq6J7BmdQLSugo5a%2Fwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDBWbmk%2BxSoPBwsblKircAyjY8j1l12re6VXfX4cla%2BpXolcWrCt%2FbIFM7xzmQbFdEcCkQeRDD75HWH8GwEGn33VOYCvJH%2FskwAmbWUEKXbicHBrUOubVz4bBU7BeJ4tdeHw6PG0eE9hquVWmxxDPRsoqShPKlN8ASUrSBX8NX3sZqWjZ3guUZjWQSC1y13Xzqcm%2BgloFvBAS7F1SIaja%2B16%2Bx6N04ZTy4DbHh91eLUw9KHljpQEL832VliIi1ijTAZLlGSKg0YKf1LIboZijqFzNt%2BMENkiCqSKMUJ4vPufrV3R0ruDxMhey03afMeDhRbVcVfMO80hZcRuXuXkZpo5%2BP3cpb2KtBdUpxHX4koq131XVUMfojGuLaMdDA4fP8gh5Pz0v5DkjDU9v6TZnt3Vppz6WKwlZQO7yn4xYyiKuYZRN3aDtb7%2BmIM0rOx60fAHntZKmMqC%2FBEktXIqLsuwl9vGUwNSYKIoXC1eaisc2VtAFs7R77u3LrvZpDGdIBRcu17madrvIcvYFNIiwQ8GH27ADCnou57ZbwwICtFKLG1nBk2uJ4GG2D2DIga8G%2FShQOjNl%2BTq2PzLXwvia1U29lnY1Id6cmfDEX9Ebz1FuD0AAXPwbJAs0LDrJwj3wRlcuAi%2F3%2B6m23zWVMI7Ow8QGOqUBvkoAAnNIm4fPXLASLS23WrKP3watOx%2FBiRMQUggkij4z900B4kOvpzydBondJGLn7%2BmC1RtHzTgWS49h2ZKi%2BMjbdhY%2FspJn8ncbZd8AN2AZ1%2FXey1yH4tpxvlgcb%2BlwpHwXoz%2FcnP%2FoDf78HQiF7eSULTLfq136siL4wZx38PK26V8S6mO3dlTIHEI3WKzwKVftBZFAzkOSroQE1635WZaafg7v&X-Amz-Signature=6100675fe8199c28512c2c974c3362954f48f255131c4e373e6d12f6b2c77b40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK5MNVHN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIHKEwr8k5z6%2FULde9GWC98XQKhN5MjbLR84K1myJAl1lAiEAtf8Nt9arHVY8jkGJt10qIP0TTkq6J7BmdQLSugo5a%2Fwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDBWbmk%2BxSoPBwsblKircAyjY8j1l12re6VXfX4cla%2BpXolcWrCt%2FbIFM7xzmQbFdEcCkQeRDD75HWH8GwEGn33VOYCvJH%2FskwAmbWUEKXbicHBrUOubVz4bBU7BeJ4tdeHw6PG0eE9hquVWmxxDPRsoqShPKlN8ASUrSBX8NX3sZqWjZ3guUZjWQSC1y13Xzqcm%2BgloFvBAS7F1SIaja%2B16%2Bx6N04ZTy4DbHh91eLUw9KHljpQEL832VliIi1ijTAZLlGSKg0YKf1LIboZijqFzNt%2BMENkiCqSKMUJ4vPufrV3R0ruDxMhey03afMeDhRbVcVfMO80hZcRuXuXkZpo5%2BP3cpb2KtBdUpxHX4koq131XVUMfojGuLaMdDA4fP8gh5Pz0v5DkjDU9v6TZnt3Vppz6WKwlZQO7yn4xYyiKuYZRN3aDtb7%2BmIM0rOx60fAHntZKmMqC%2FBEktXIqLsuwl9vGUwNSYKIoXC1eaisc2VtAFs7R77u3LrvZpDGdIBRcu17madrvIcvYFNIiwQ8GH27ADCnou57ZbwwICtFKLG1nBk2uJ4GG2D2DIga8G%2FShQOjNl%2BTq2PzLXwvia1U29lnY1Id6cmfDEX9Ebz1FuD0AAXPwbJAs0LDrJwj3wRlcuAi%2F3%2B6m23zWVMI7Ow8QGOqUBvkoAAnNIm4fPXLASLS23WrKP3watOx%2FBiRMQUggkij4z900B4kOvpzydBondJGLn7%2BmC1RtHzTgWS49h2ZKi%2BMjbdhY%2FspJn8ncbZd8AN2AZ1%2FXey1yH4tpxvlgcb%2BlwpHwXoz%2FcnP%2FoDf78HQiF7eSULTLfq136siL4wZx38PK26V8S6mO3dlTIHEI3WKzwKVftBZFAzkOSroQE1635WZaafg7v&X-Amz-Signature=cbf521164bfa9dc56ca137259eeafd66f2dc57ce53319b6c3cdd3f516c49d7ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK5MNVHN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIHKEwr8k5z6%2FULde9GWC98XQKhN5MjbLR84K1myJAl1lAiEAtf8Nt9arHVY8jkGJt10qIP0TTkq6J7BmdQLSugo5a%2Fwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDBWbmk%2BxSoPBwsblKircAyjY8j1l12re6VXfX4cla%2BpXolcWrCt%2FbIFM7xzmQbFdEcCkQeRDD75HWH8GwEGn33VOYCvJH%2FskwAmbWUEKXbicHBrUOubVz4bBU7BeJ4tdeHw6PG0eE9hquVWmxxDPRsoqShPKlN8ASUrSBX8NX3sZqWjZ3guUZjWQSC1y13Xzqcm%2BgloFvBAS7F1SIaja%2B16%2Bx6N04ZTy4DbHh91eLUw9KHljpQEL832VliIi1ijTAZLlGSKg0YKf1LIboZijqFzNt%2BMENkiCqSKMUJ4vPufrV3R0ruDxMhey03afMeDhRbVcVfMO80hZcRuXuXkZpo5%2BP3cpb2KtBdUpxHX4koq131XVUMfojGuLaMdDA4fP8gh5Pz0v5DkjDU9v6TZnt3Vppz6WKwlZQO7yn4xYyiKuYZRN3aDtb7%2BmIM0rOx60fAHntZKmMqC%2FBEktXIqLsuwl9vGUwNSYKIoXC1eaisc2VtAFs7R77u3LrvZpDGdIBRcu17madrvIcvYFNIiwQ8GH27ADCnou57ZbwwICtFKLG1nBk2uJ4GG2D2DIga8G%2FShQOjNl%2BTq2PzLXwvia1U29lnY1Id6cmfDEX9Ebz1FuD0AAXPwbJAs0LDrJwj3wRlcuAi%2F3%2B6m23zWVMI7Ow8QGOqUBvkoAAnNIm4fPXLASLS23WrKP3watOx%2FBiRMQUggkij4z900B4kOvpzydBondJGLn7%2BmC1RtHzTgWS49h2ZKi%2BMjbdhY%2FspJn8ncbZd8AN2AZ1%2FXey1yH4tpxvlgcb%2BlwpHwXoz%2FcnP%2FoDf78HQiF7eSULTLfq136siL4wZx38PK26V8S6mO3dlTIHEI3WKzwKVftBZFAzkOSroQE1635WZaafg7v&X-Amz-Signature=2ddd7aabeb5384263bff998ded4781e5549e5965087623feae30fff364391f7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK5MNVHN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIHKEwr8k5z6%2FULde9GWC98XQKhN5MjbLR84K1myJAl1lAiEAtf8Nt9arHVY8jkGJt10qIP0TTkq6J7BmdQLSugo5a%2Fwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDBWbmk%2BxSoPBwsblKircAyjY8j1l12re6VXfX4cla%2BpXolcWrCt%2FbIFM7xzmQbFdEcCkQeRDD75HWH8GwEGn33VOYCvJH%2FskwAmbWUEKXbicHBrUOubVz4bBU7BeJ4tdeHw6PG0eE9hquVWmxxDPRsoqShPKlN8ASUrSBX8NX3sZqWjZ3guUZjWQSC1y13Xzqcm%2BgloFvBAS7F1SIaja%2B16%2Bx6N04ZTy4DbHh91eLUw9KHljpQEL832VliIi1ijTAZLlGSKg0YKf1LIboZijqFzNt%2BMENkiCqSKMUJ4vPufrV3R0ruDxMhey03afMeDhRbVcVfMO80hZcRuXuXkZpo5%2BP3cpb2KtBdUpxHX4koq131XVUMfojGuLaMdDA4fP8gh5Pz0v5DkjDU9v6TZnt3Vppz6WKwlZQO7yn4xYyiKuYZRN3aDtb7%2BmIM0rOx60fAHntZKmMqC%2FBEktXIqLsuwl9vGUwNSYKIoXC1eaisc2VtAFs7R77u3LrvZpDGdIBRcu17madrvIcvYFNIiwQ8GH27ADCnou57ZbwwICtFKLG1nBk2uJ4GG2D2DIga8G%2FShQOjNl%2BTq2PzLXwvia1U29lnY1Id6cmfDEX9Ebz1FuD0AAXPwbJAs0LDrJwj3wRlcuAi%2F3%2B6m23zWVMI7Ow8QGOqUBvkoAAnNIm4fPXLASLS23WrKP3watOx%2FBiRMQUggkij4z900B4kOvpzydBondJGLn7%2BmC1RtHzTgWS49h2ZKi%2BMjbdhY%2FspJn8ncbZd8AN2AZ1%2FXey1yH4tpxvlgcb%2BlwpHwXoz%2FcnP%2FoDf78HQiF7eSULTLfq136siL4wZx38PK26V8S6mO3dlTIHEI3WKzwKVftBZFAzkOSroQE1635WZaafg7v&X-Amz-Signature=64a9462766ee5e7d97b2c166034fc70db462ab219038d80db94c4be58a86e95c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK5MNVHN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIHKEwr8k5z6%2FULde9GWC98XQKhN5MjbLR84K1myJAl1lAiEAtf8Nt9arHVY8jkGJt10qIP0TTkq6J7BmdQLSugo5a%2Fwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDBWbmk%2BxSoPBwsblKircAyjY8j1l12re6VXfX4cla%2BpXolcWrCt%2FbIFM7xzmQbFdEcCkQeRDD75HWH8GwEGn33VOYCvJH%2FskwAmbWUEKXbicHBrUOubVz4bBU7BeJ4tdeHw6PG0eE9hquVWmxxDPRsoqShPKlN8ASUrSBX8NX3sZqWjZ3guUZjWQSC1y13Xzqcm%2BgloFvBAS7F1SIaja%2B16%2Bx6N04ZTy4DbHh91eLUw9KHljpQEL832VliIi1ijTAZLlGSKg0YKf1LIboZijqFzNt%2BMENkiCqSKMUJ4vPufrV3R0ruDxMhey03afMeDhRbVcVfMO80hZcRuXuXkZpo5%2BP3cpb2KtBdUpxHX4koq131XVUMfojGuLaMdDA4fP8gh5Pz0v5DkjDU9v6TZnt3Vppz6WKwlZQO7yn4xYyiKuYZRN3aDtb7%2BmIM0rOx60fAHntZKmMqC%2FBEktXIqLsuwl9vGUwNSYKIoXC1eaisc2VtAFs7R77u3LrvZpDGdIBRcu17madrvIcvYFNIiwQ8GH27ADCnou57ZbwwICtFKLG1nBk2uJ4GG2D2DIga8G%2FShQOjNl%2BTq2PzLXwvia1U29lnY1Id6cmfDEX9Ebz1FuD0AAXPwbJAs0LDrJwj3wRlcuAi%2F3%2B6m23zWVMI7Ow8QGOqUBvkoAAnNIm4fPXLASLS23WrKP3watOx%2FBiRMQUggkij4z900B4kOvpzydBondJGLn7%2BmC1RtHzTgWS49h2ZKi%2BMjbdhY%2FspJn8ncbZd8AN2AZ1%2FXey1yH4tpxvlgcb%2BlwpHwXoz%2FcnP%2FoDf78HQiF7eSULTLfq136siL4wZx38PK26V8S6mO3dlTIHEI3WKzwKVftBZFAzkOSroQE1635WZaafg7v&X-Amz-Signature=160613b1e761985a6396c846dd51d6d8f9dc4e7c77be88f12c49b374265d6ab1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK5MNVHN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIHKEwr8k5z6%2FULde9GWC98XQKhN5MjbLR84K1myJAl1lAiEAtf8Nt9arHVY8jkGJt10qIP0TTkq6J7BmdQLSugo5a%2Fwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDBWbmk%2BxSoPBwsblKircAyjY8j1l12re6VXfX4cla%2BpXolcWrCt%2FbIFM7xzmQbFdEcCkQeRDD75HWH8GwEGn33VOYCvJH%2FskwAmbWUEKXbicHBrUOubVz4bBU7BeJ4tdeHw6PG0eE9hquVWmxxDPRsoqShPKlN8ASUrSBX8NX3sZqWjZ3guUZjWQSC1y13Xzqcm%2BgloFvBAS7F1SIaja%2B16%2Bx6N04ZTy4DbHh91eLUw9KHljpQEL832VliIi1ijTAZLlGSKg0YKf1LIboZijqFzNt%2BMENkiCqSKMUJ4vPufrV3R0ruDxMhey03afMeDhRbVcVfMO80hZcRuXuXkZpo5%2BP3cpb2KtBdUpxHX4koq131XVUMfojGuLaMdDA4fP8gh5Pz0v5DkjDU9v6TZnt3Vppz6WKwlZQO7yn4xYyiKuYZRN3aDtb7%2BmIM0rOx60fAHntZKmMqC%2FBEktXIqLsuwl9vGUwNSYKIoXC1eaisc2VtAFs7R77u3LrvZpDGdIBRcu17madrvIcvYFNIiwQ8GH27ADCnou57ZbwwICtFKLG1nBk2uJ4GG2D2DIga8G%2FShQOjNl%2BTq2PzLXwvia1U29lnY1Id6cmfDEX9Ebz1FuD0AAXPwbJAs0LDrJwj3wRlcuAi%2F3%2B6m23zWVMI7Ow8QGOqUBvkoAAnNIm4fPXLASLS23WrKP3watOx%2FBiRMQUggkij4z900B4kOvpzydBondJGLn7%2BmC1RtHzTgWS49h2ZKi%2BMjbdhY%2FspJn8ncbZd8AN2AZ1%2FXey1yH4tpxvlgcb%2BlwpHwXoz%2FcnP%2FoDf78HQiF7eSULTLfq136siL4wZx38PK26V8S6mO3dlTIHEI3WKzwKVftBZFAzkOSroQE1635WZaafg7v&X-Amz-Signature=a8079f03e125e16e73020c782d850543c63cc15faba24e0203d496f6646b291d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK5MNVHN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIHKEwr8k5z6%2FULde9GWC98XQKhN5MjbLR84K1myJAl1lAiEAtf8Nt9arHVY8jkGJt10qIP0TTkq6J7BmdQLSugo5a%2Fwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDBWbmk%2BxSoPBwsblKircAyjY8j1l12re6VXfX4cla%2BpXolcWrCt%2FbIFM7xzmQbFdEcCkQeRDD75HWH8GwEGn33VOYCvJH%2FskwAmbWUEKXbicHBrUOubVz4bBU7BeJ4tdeHw6PG0eE9hquVWmxxDPRsoqShPKlN8ASUrSBX8NX3sZqWjZ3guUZjWQSC1y13Xzqcm%2BgloFvBAS7F1SIaja%2B16%2Bx6N04ZTy4DbHh91eLUw9KHljpQEL832VliIi1ijTAZLlGSKg0YKf1LIboZijqFzNt%2BMENkiCqSKMUJ4vPufrV3R0ruDxMhey03afMeDhRbVcVfMO80hZcRuXuXkZpo5%2BP3cpb2KtBdUpxHX4koq131XVUMfojGuLaMdDA4fP8gh5Pz0v5DkjDU9v6TZnt3Vppz6WKwlZQO7yn4xYyiKuYZRN3aDtb7%2BmIM0rOx60fAHntZKmMqC%2FBEktXIqLsuwl9vGUwNSYKIoXC1eaisc2VtAFs7R77u3LrvZpDGdIBRcu17madrvIcvYFNIiwQ8GH27ADCnou57ZbwwICtFKLG1nBk2uJ4GG2D2DIga8G%2FShQOjNl%2BTq2PzLXwvia1U29lnY1Id6cmfDEX9Ebz1FuD0AAXPwbJAs0LDrJwj3wRlcuAi%2F3%2B6m23zWVMI7Ow8QGOqUBvkoAAnNIm4fPXLASLS23WrKP3watOx%2FBiRMQUggkij4z900B4kOvpzydBondJGLn7%2BmC1RtHzTgWS49h2ZKi%2BMjbdhY%2FspJn8ncbZd8AN2AZ1%2FXey1yH4tpxvlgcb%2BlwpHwXoz%2FcnP%2FoDf78HQiF7eSULTLfq136siL4wZx38PK26V8S6mO3dlTIHEI3WKzwKVftBZFAzkOSroQE1635WZaafg7v&X-Amz-Signature=6100675fe8199c28512c2c974c3362954f48f255131c4e373e6d12f6b2c77b40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
