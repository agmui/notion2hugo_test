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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE6Z6OC2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAq6%2FPFHJ1fuid%2B%2BrjTxEFUvll9hVX9bugqX77RYOXiUAiAlk1nvKDNY8uJkf0cAVPyrRfiHC6b%2ByXpppqhvp1PGCCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWOmKcOq%2FBPj4yphpKtwDaA3jT1HiBd0xti0eXgHg1WaXYyU3f9hi7Q3zBSDN8PTQDqOIUwkAl7fKe7L3o9fTSca8QakRt02X5JGqT%2BK8Z3guG0s6UzXbEfehJrREeNVnq%2BRl1zaR2y1bZI%2BFhJOK2uHGD48X%2Fthic4FRhIkyqapRHGiA1tauu7JvzS5vmJr2kc4bhaXLMfOBJxwHLUcs%2F%2BlfD0dHh0FYwbn8r%2FBzctjcCYZEPxtR6Co4BZjydn5aGqRjJsNKVfhGJBIUfn0WvaEG%2FuXA2uGpYCVIA9izx2xs2mx0VjYVAHlMboTN%2F8Ov6JZMrXWtClzLXPvDewinuRz9rMtFoVNr19HaSuo6ZXGgJ3mGHkeKklrEmLUUOjNOV3tiTHj4IbfCn21tOg3MC3qwlI3t8djycOKb88jde3C%2FyCK5F1i5Id8S2N4W%2Fc82IqqsPILRzu2hHuDBklfdbJjCSP3kGtiwkAqHxKIhAYH2%2FUWxooqqduHwjGuqA93G8jw%2BOZzi5UGXelm6nO9FLxEtPkhxBTFDW4wRZLHMjc41ZgplHpPRULGKXPx5Ws%2FmwPouBQ4yTvwUsdm9IWi%2FhBHYMfoetJsTywpm3vPCrYiMqTs3GtxlMEb0n%2B1lOcSISy%2FvgS%2Br%2BCyP7AEw89DYyQY6pgHPT7Uz%2FjaaV%2FBcfBOprVrnyoiIxoZfTxu8Q2lzmVfdvHGvy4OGJkEoNo8bJcZauks1vqmt09KdVwaoZMRMjqIJba8NEeDMiIJBdBUiIZsv2tPbIfy5GSvqdCWmVVZ7uSEvWYtrZfniFV1%2FOtWQ4HSa7GxoRfSXvFaxGsPOq7RDXgxdVPldh2Yrev6Z0ev2ss%2BjsBhjUqNDf2Ioh%2FylRPuBIpADT1oT&X-Amz-Signature=2aff1564388de6d6ae01f70c821b851abfe407a1bb201b916a20421574a23807&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6N3RB4I%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFW8hhvGLJiSod32%2BtknMvFs%2B128xJmW4M1gyI0FvDYAiEAv6THmjZcByqMVcHezu8lYJ46qq7oRIO8dKapX7dTFfEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjB7WAdN25USS8oLircA6deWGrULYP0xu1%2Fo9komWgKpCY0m7MyiSuoaa8BP0GLpQXsnvcwTAOsGC8dkdKsRn85VLl1Xfu6YDl6%2FUGI5l%2FLX9wTZitgQVu3GAPBwNrG7EpzAqgto8m1gnh%2FKDTdFGjaZICabJXC0MumoSVHhWuHRHf0kzp%2BMxETPV5WeUJQ1timd3sW88K9WS%2BpnhyDQcvzRInW5nElvFH7anNHoTc23dlLDEMb%2FsHRiRYkkwOCaerYLGwo2MS%2B3DFRtbnkLtIr1t3UU8QerD2nGW%2B7tWCp6TRQrp5IOfRGMR1OaWMZId%2FSjjfQyTLo6rqqmcNLxDRNbK2wnjHKvtlwWG4uyAS8SL%2F0P82zUsonhpN2eqQ54PIoJQXNhXZZ3sHvtNGpBZ%2Fd3gXbuoFqcmtaajxJl11JgCw81PkuRnEPeuKXBQmGJZwBI%2F%2BXOxOjJ1uoFIgblFKkqGXMc8frP9Y1h7OAikanMmk8tDelS0l5IMZaPgc9wgDOmD1VZ7Kp1%2B9fsf6yePC3pvYVj87XcQalve7ZNsym9W7ci0zm4ZuT7WWW7atBo%2FTh3aKfPBiyOpdcXHSVt0nzFrtQNPXRn8yfqQgEf2BY8VGbL8vdzOF2EQMkjcv%2FY8P1Jp7l94lp3H9bMNrR2MkGOqUB2E4g7Thpx7hSORtkY5V51as87HmT9Tcl4LiXw6gLYbFHbnfZdStLIgPkcoLQPAEz6Y8ZuAfeMlVOXMgOC8altjpaRrCYV7SJTVcew6cunOI76UmHBkqrqlDUTzWlXhPsOVRvZqQCiZ3AZE4uPSfDbimUMKBaQtkexCQqHjJtqedGIX9xc44VvPAPc2f%2Fkm32uk9dPh2SjsKFdeVEsR4rwodFqGW8&X-Amz-Signature=d78653e6859b92bb9e767d28247578cbf9ebc5c9dcb76c89350995e65a49a090&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6N3RB4I%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFW8hhvGLJiSod32%2BtknMvFs%2B128xJmW4M1gyI0FvDYAiEAv6THmjZcByqMVcHezu8lYJ46qq7oRIO8dKapX7dTFfEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjB7WAdN25USS8oLircA6deWGrULYP0xu1%2Fo9komWgKpCY0m7MyiSuoaa8BP0GLpQXsnvcwTAOsGC8dkdKsRn85VLl1Xfu6YDl6%2FUGI5l%2FLX9wTZitgQVu3GAPBwNrG7EpzAqgto8m1gnh%2FKDTdFGjaZICabJXC0MumoSVHhWuHRHf0kzp%2BMxETPV5WeUJQ1timd3sW88K9WS%2BpnhyDQcvzRInW5nElvFH7anNHoTc23dlLDEMb%2FsHRiRYkkwOCaerYLGwo2MS%2B3DFRtbnkLtIr1t3UU8QerD2nGW%2B7tWCp6TRQrp5IOfRGMR1OaWMZId%2FSjjfQyTLo6rqqmcNLxDRNbK2wnjHKvtlwWG4uyAS8SL%2F0P82zUsonhpN2eqQ54PIoJQXNhXZZ3sHvtNGpBZ%2Fd3gXbuoFqcmtaajxJl11JgCw81PkuRnEPeuKXBQmGJZwBI%2F%2BXOxOjJ1uoFIgblFKkqGXMc8frP9Y1h7OAikanMmk8tDelS0l5IMZaPgc9wgDOmD1VZ7Kp1%2B9fsf6yePC3pvYVj87XcQalve7ZNsym9W7ci0zm4ZuT7WWW7atBo%2FTh3aKfPBiyOpdcXHSVt0nzFrtQNPXRn8yfqQgEf2BY8VGbL8vdzOF2EQMkjcv%2FY8P1Jp7l94lp3H9bMNrR2MkGOqUB2E4g7Thpx7hSORtkY5V51as87HmT9Tcl4LiXw6gLYbFHbnfZdStLIgPkcoLQPAEz6Y8ZuAfeMlVOXMgOC8altjpaRrCYV7SJTVcew6cunOI76UmHBkqrqlDUTzWlXhPsOVRvZqQCiZ3AZE4uPSfDbimUMKBaQtkexCQqHjJtqedGIX9xc44VvPAPc2f%2Fkm32uk9dPh2SjsKFdeVEsR4rwodFqGW8&X-Amz-Signature=fbb9a3abd69715315ad08c2dbb015c15e2ed074bf16a64a57623120261c7136b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6N3RB4I%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFW8hhvGLJiSod32%2BtknMvFs%2B128xJmW4M1gyI0FvDYAiEAv6THmjZcByqMVcHezu8lYJ46qq7oRIO8dKapX7dTFfEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjB7WAdN25USS8oLircA6deWGrULYP0xu1%2Fo9komWgKpCY0m7MyiSuoaa8BP0GLpQXsnvcwTAOsGC8dkdKsRn85VLl1Xfu6YDl6%2FUGI5l%2FLX9wTZitgQVu3GAPBwNrG7EpzAqgto8m1gnh%2FKDTdFGjaZICabJXC0MumoSVHhWuHRHf0kzp%2BMxETPV5WeUJQ1timd3sW88K9WS%2BpnhyDQcvzRInW5nElvFH7anNHoTc23dlLDEMb%2FsHRiRYkkwOCaerYLGwo2MS%2B3DFRtbnkLtIr1t3UU8QerD2nGW%2B7tWCp6TRQrp5IOfRGMR1OaWMZId%2FSjjfQyTLo6rqqmcNLxDRNbK2wnjHKvtlwWG4uyAS8SL%2F0P82zUsonhpN2eqQ54PIoJQXNhXZZ3sHvtNGpBZ%2Fd3gXbuoFqcmtaajxJl11JgCw81PkuRnEPeuKXBQmGJZwBI%2F%2BXOxOjJ1uoFIgblFKkqGXMc8frP9Y1h7OAikanMmk8tDelS0l5IMZaPgc9wgDOmD1VZ7Kp1%2B9fsf6yePC3pvYVj87XcQalve7ZNsym9W7ci0zm4ZuT7WWW7atBo%2FTh3aKfPBiyOpdcXHSVt0nzFrtQNPXRn8yfqQgEf2BY8VGbL8vdzOF2EQMkjcv%2FY8P1Jp7l94lp3H9bMNrR2MkGOqUB2E4g7Thpx7hSORtkY5V51as87HmT9Tcl4LiXw6gLYbFHbnfZdStLIgPkcoLQPAEz6Y8ZuAfeMlVOXMgOC8altjpaRrCYV7SJTVcew6cunOI76UmHBkqrqlDUTzWlXhPsOVRvZqQCiZ3AZE4uPSfDbimUMKBaQtkexCQqHjJtqedGIX9xc44VvPAPc2f%2Fkm32uk9dPh2SjsKFdeVEsR4rwodFqGW8&X-Amz-Signature=b707af47a51708dc76567b24a9e749141283b296d6d33f4fb9f6373e646c041f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6N3RB4I%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFW8hhvGLJiSod32%2BtknMvFs%2B128xJmW4M1gyI0FvDYAiEAv6THmjZcByqMVcHezu8lYJ46qq7oRIO8dKapX7dTFfEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjB7WAdN25USS8oLircA6deWGrULYP0xu1%2Fo9komWgKpCY0m7MyiSuoaa8BP0GLpQXsnvcwTAOsGC8dkdKsRn85VLl1Xfu6YDl6%2FUGI5l%2FLX9wTZitgQVu3GAPBwNrG7EpzAqgto8m1gnh%2FKDTdFGjaZICabJXC0MumoSVHhWuHRHf0kzp%2BMxETPV5WeUJQ1timd3sW88K9WS%2BpnhyDQcvzRInW5nElvFH7anNHoTc23dlLDEMb%2FsHRiRYkkwOCaerYLGwo2MS%2B3DFRtbnkLtIr1t3UU8QerD2nGW%2B7tWCp6TRQrp5IOfRGMR1OaWMZId%2FSjjfQyTLo6rqqmcNLxDRNbK2wnjHKvtlwWG4uyAS8SL%2F0P82zUsonhpN2eqQ54PIoJQXNhXZZ3sHvtNGpBZ%2Fd3gXbuoFqcmtaajxJl11JgCw81PkuRnEPeuKXBQmGJZwBI%2F%2BXOxOjJ1uoFIgblFKkqGXMc8frP9Y1h7OAikanMmk8tDelS0l5IMZaPgc9wgDOmD1VZ7Kp1%2B9fsf6yePC3pvYVj87XcQalve7ZNsym9W7ci0zm4ZuT7WWW7atBo%2FTh3aKfPBiyOpdcXHSVt0nzFrtQNPXRn8yfqQgEf2BY8VGbL8vdzOF2EQMkjcv%2FY8P1Jp7l94lp3H9bMNrR2MkGOqUB2E4g7Thpx7hSORtkY5V51as87HmT9Tcl4LiXw6gLYbFHbnfZdStLIgPkcoLQPAEz6Y8ZuAfeMlVOXMgOC8altjpaRrCYV7SJTVcew6cunOI76UmHBkqrqlDUTzWlXhPsOVRvZqQCiZ3AZE4uPSfDbimUMKBaQtkexCQqHjJtqedGIX9xc44VvPAPc2f%2Fkm32uk9dPh2SjsKFdeVEsR4rwodFqGW8&X-Amz-Signature=716614620db42f6f97aff5aed37376dd3f495c64d74c667a731c8f5bba14eab1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6N3RB4I%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFW8hhvGLJiSod32%2BtknMvFs%2B128xJmW4M1gyI0FvDYAiEAv6THmjZcByqMVcHezu8lYJ46qq7oRIO8dKapX7dTFfEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjB7WAdN25USS8oLircA6deWGrULYP0xu1%2Fo9komWgKpCY0m7MyiSuoaa8BP0GLpQXsnvcwTAOsGC8dkdKsRn85VLl1Xfu6YDl6%2FUGI5l%2FLX9wTZitgQVu3GAPBwNrG7EpzAqgto8m1gnh%2FKDTdFGjaZICabJXC0MumoSVHhWuHRHf0kzp%2BMxETPV5WeUJQ1timd3sW88K9WS%2BpnhyDQcvzRInW5nElvFH7anNHoTc23dlLDEMb%2FsHRiRYkkwOCaerYLGwo2MS%2B3DFRtbnkLtIr1t3UU8QerD2nGW%2B7tWCp6TRQrp5IOfRGMR1OaWMZId%2FSjjfQyTLo6rqqmcNLxDRNbK2wnjHKvtlwWG4uyAS8SL%2F0P82zUsonhpN2eqQ54PIoJQXNhXZZ3sHvtNGpBZ%2Fd3gXbuoFqcmtaajxJl11JgCw81PkuRnEPeuKXBQmGJZwBI%2F%2BXOxOjJ1uoFIgblFKkqGXMc8frP9Y1h7OAikanMmk8tDelS0l5IMZaPgc9wgDOmD1VZ7Kp1%2B9fsf6yePC3pvYVj87XcQalve7ZNsym9W7ci0zm4ZuT7WWW7atBo%2FTh3aKfPBiyOpdcXHSVt0nzFrtQNPXRn8yfqQgEf2BY8VGbL8vdzOF2EQMkjcv%2FY8P1Jp7l94lp3H9bMNrR2MkGOqUB2E4g7Thpx7hSORtkY5V51as87HmT9Tcl4LiXw6gLYbFHbnfZdStLIgPkcoLQPAEz6Y8ZuAfeMlVOXMgOC8altjpaRrCYV7SJTVcew6cunOI76UmHBkqrqlDUTzWlXhPsOVRvZqQCiZ3AZE4uPSfDbimUMKBaQtkexCQqHjJtqedGIX9xc44VvPAPc2f%2Fkm32uk9dPh2SjsKFdeVEsR4rwodFqGW8&X-Amz-Signature=714f004802530ac3bd231a10c4e00120a53297b2c2539f1e27ca207713c035d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6N3RB4I%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFW8hhvGLJiSod32%2BtknMvFs%2B128xJmW4M1gyI0FvDYAiEAv6THmjZcByqMVcHezu8lYJ46qq7oRIO8dKapX7dTFfEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjB7WAdN25USS8oLircA6deWGrULYP0xu1%2Fo9komWgKpCY0m7MyiSuoaa8BP0GLpQXsnvcwTAOsGC8dkdKsRn85VLl1Xfu6YDl6%2FUGI5l%2FLX9wTZitgQVu3GAPBwNrG7EpzAqgto8m1gnh%2FKDTdFGjaZICabJXC0MumoSVHhWuHRHf0kzp%2BMxETPV5WeUJQ1timd3sW88K9WS%2BpnhyDQcvzRInW5nElvFH7anNHoTc23dlLDEMb%2FsHRiRYkkwOCaerYLGwo2MS%2B3DFRtbnkLtIr1t3UU8QerD2nGW%2B7tWCp6TRQrp5IOfRGMR1OaWMZId%2FSjjfQyTLo6rqqmcNLxDRNbK2wnjHKvtlwWG4uyAS8SL%2F0P82zUsonhpN2eqQ54PIoJQXNhXZZ3sHvtNGpBZ%2Fd3gXbuoFqcmtaajxJl11JgCw81PkuRnEPeuKXBQmGJZwBI%2F%2BXOxOjJ1uoFIgblFKkqGXMc8frP9Y1h7OAikanMmk8tDelS0l5IMZaPgc9wgDOmD1VZ7Kp1%2B9fsf6yePC3pvYVj87XcQalve7ZNsym9W7ci0zm4ZuT7WWW7atBo%2FTh3aKfPBiyOpdcXHSVt0nzFrtQNPXRn8yfqQgEf2BY8VGbL8vdzOF2EQMkjcv%2FY8P1Jp7l94lp3H9bMNrR2MkGOqUB2E4g7Thpx7hSORtkY5V51as87HmT9Tcl4LiXw6gLYbFHbnfZdStLIgPkcoLQPAEz6Y8ZuAfeMlVOXMgOC8altjpaRrCYV7SJTVcew6cunOI76UmHBkqrqlDUTzWlXhPsOVRvZqQCiZ3AZE4uPSfDbimUMKBaQtkexCQqHjJtqedGIX9xc44VvPAPc2f%2Fkm32uk9dPh2SjsKFdeVEsR4rwodFqGW8&X-Amz-Signature=d83499d1d0d8a017489bdd0a45898de90c9cc9b06c0508ffb8a56ea6db8b3753&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6N3RB4I%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFW8hhvGLJiSod32%2BtknMvFs%2B128xJmW4M1gyI0FvDYAiEAv6THmjZcByqMVcHezu8lYJ46qq7oRIO8dKapX7dTFfEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjB7WAdN25USS8oLircA6deWGrULYP0xu1%2Fo9komWgKpCY0m7MyiSuoaa8BP0GLpQXsnvcwTAOsGC8dkdKsRn85VLl1Xfu6YDl6%2FUGI5l%2FLX9wTZitgQVu3GAPBwNrG7EpzAqgto8m1gnh%2FKDTdFGjaZICabJXC0MumoSVHhWuHRHf0kzp%2BMxETPV5WeUJQ1timd3sW88K9WS%2BpnhyDQcvzRInW5nElvFH7anNHoTc23dlLDEMb%2FsHRiRYkkwOCaerYLGwo2MS%2B3DFRtbnkLtIr1t3UU8QerD2nGW%2B7tWCp6TRQrp5IOfRGMR1OaWMZId%2FSjjfQyTLo6rqqmcNLxDRNbK2wnjHKvtlwWG4uyAS8SL%2F0P82zUsonhpN2eqQ54PIoJQXNhXZZ3sHvtNGpBZ%2Fd3gXbuoFqcmtaajxJl11JgCw81PkuRnEPeuKXBQmGJZwBI%2F%2BXOxOjJ1uoFIgblFKkqGXMc8frP9Y1h7OAikanMmk8tDelS0l5IMZaPgc9wgDOmD1VZ7Kp1%2B9fsf6yePC3pvYVj87XcQalve7ZNsym9W7ci0zm4ZuT7WWW7atBo%2FTh3aKfPBiyOpdcXHSVt0nzFrtQNPXRn8yfqQgEf2BY8VGbL8vdzOF2EQMkjcv%2FY8P1Jp7l94lp3H9bMNrR2MkGOqUB2E4g7Thpx7hSORtkY5V51as87HmT9Tcl4LiXw6gLYbFHbnfZdStLIgPkcoLQPAEz6Y8ZuAfeMlVOXMgOC8altjpaRrCYV7SJTVcew6cunOI76UmHBkqrqlDUTzWlXhPsOVRvZqQCiZ3AZE4uPSfDbimUMKBaQtkexCQqHjJtqedGIX9xc44VvPAPc2f%2Fkm32uk9dPh2SjsKFdeVEsR4rwodFqGW8&X-Amz-Signature=402645588b1051fd6af5c19484f3fec67b665ce6ac34d5c71050cd5fa47df13a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6N3RB4I%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFW8hhvGLJiSod32%2BtknMvFs%2B128xJmW4M1gyI0FvDYAiEAv6THmjZcByqMVcHezu8lYJ46qq7oRIO8dKapX7dTFfEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjB7WAdN25USS8oLircA6deWGrULYP0xu1%2Fo9komWgKpCY0m7MyiSuoaa8BP0GLpQXsnvcwTAOsGC8dkdKsRn85VLl1Xfu6YDl6%2FUGI5l%2FLX9wTZitgQVu3GAPBwNrG7EpzAqgto8m1gnh%2FKDTdFGjaZICabJXC0MumoSVHhWuHRHf0kzp%2BMxETPV5WeUJQ1timd3sW88K9WS%2BpnhyDQcvzRInW5nElvFH7anNHoTc23dlLDEMb%2FsHRiRYkkwOCaerYLGwo2MS%2B3DFRtbnkLtIr1t3UU8QerD2nGW%2B7tWCp6TRQrp5IOfRGMR1OaWMZId%2FSjjfQyTLo6rqqmcNLxDRNbK2wnjHKvtlwWG4uyAS8SL%2F0P82zUsonhpN2eqQ54PIoJQXNhXZZ3sHvtNGpBZ%2Fd3gXbuoFqcmtaajxJl11JgCw81PkuRnEPeuKXBQmGJZwBI%2F%2BXOxOjJ1uoFIgblFKkqGXMc8frP9Y1h7OAikanMmk8tDelS0l5IMZaPgc9wgDOmD1VZ7Kp1%2B9fsf6yePC3pvYVj87XcQalve7ZNsym9W7ci0zm4ZuT7WWW7atBo%2FTh3aKfPBiyOpdcXHSVt0nzFrtQNPXRn8yfqQgEf2BY8VGbL8vdzOF2EQMkjcv%2FY8P1Jp7l94lp3H9bMNrR2MkGOqUB2E4g7Thpx7hSORtkY5V51as87HmT9Tcl4LiXw6gLYbFHbnfZdStLIgPkcoLQPAEz6Y8ZuAfeMlVOXMgOC8altjpaRrCYV7SJTVcew6cunOI76UmHBkqrqlDUTzWlXhPsOVRvZqQCiZ3AZE4uPSfDbimUMKBaQtkexCQqHjJtqedGIX9xc44VvPAPc2f%2Fkm32uk9dPh2SjsKFdeVEsR4rwodFqGW8&X-Amz-Signature=aacdebdee6143c20497a4db66cf5a4d49f29f296406e76f66673d24241b61f12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6N3RB4I%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFW8hhvGLJiSod32%2BtknMvFs%2B128xJmW4M1gyI0FvDYAiEAv6THmjZcByqMVcHezu8lYJ46qq7oRIO8dKapX7dTFfEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjB7WAdN25USS8oLircA6deWGrULYP0xu1%2Fo9komWgKpCY0m7MyiSuoaa8BP0GLpQXsnvcwTAOsGC8dkdKsRn85VLl1Xfu6YDl6%2FUGI5l%2FLX9wTZitgQVu3GAPBwNrG7EpzAqgto8m1gnh%2FKDTdFGjaZICabJXC0MumoSVHhWuHRHf0kzp%2BMxETPV5WeUJQ1timd3sW88K9WS%2BpnhyDQcvzRInW5nElvFH7anNHoTc23dlLDEMb%2FsHRiRYkkwOCaerYLGwo2MS%2B3DFRtbnkLtIr1t3UU8QerD2nGW%2B7tWCp6TRQrp5IOfRGMR1OaWMZId%2FSjjfQyTLo6rqqmcNLxDRNbK2wnjHKvtlwWG4uyAS8SL%2F0P82zUsonhpN2eqQ54PIoJQXNhXZZ3sHvtNGpBZ%2Fd3gXbuoFqcmtaajxJl11JgCw81PkuRnEPeuKXBQmGJZwBI%2F%2BXOxOjJ1uoFIgblFKkqGXMc8frP9Y1h7OAikanMmk8tDelS0l5IMZaPgc9wgDOmD1VZ7Kp1%2B9fsf6yePC3pvYVj87XcQalve7ZNsym9W7ci0zm4ZuT7WWW7atBo%2FTh3aKfPBiyOpdcXHSVt0nzFrtQNPXRn8yfqQgEf2BY8VGbL8vdzOF2EQMkjcv%2FY8P1Jp7l94lp3H9bMNrR2MkGOqUB2E4g7Thpx7hSORtkY5V51as87HmT9Tcl4LiXw6gLYbFHbnfZdStLIgPkcoLQPAEz6Y8ZuAfeMlVOXMgOC8altjpaRrCYV7SJTVcew6cunOI76UmHBkqrqlDUTzWlXhPsOVRvZqQCiZ3AZE4uPSfDbimUMKBaQtkexCQqHjJtqedGIX9xc44VvPAPc2f%2Fkm32uk9dPh2SjsKFdeVEsR4rwodFqGW8&X-Amz-Signature=0725165c485b5e4d7e405c51906639f7c4419a609987f890d006d63a5f060817&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6N3RB4I%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFW8hhvGLJiSod32%2BtknMvFs%2B128xJmW4M1gyI0FvDYAiEAv6THmjZcByqMVcHezu8lYJ46qq7oRIO8dKapX7dTFfEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjB7WAdN25USS8oLircA6deWGrULYP0xu1%2Fo9komWgKpCY0m7MyiSuoaa8BP0GLpQXsnvcwTAOsGC8dkdKsRn85VLl1Xfu6YDl6%2FUGI5l%2FLX9wTZitgQVu3GAPBwNrG7EpzAqgto8m1gnh%2FKDTdFGjaZICabJXC0MumoSVHhWuHRHf0kzp%2BMxETPV5WeUJQ1timd3sW88K9WS%2BpnhyDQcvzRInW5nElvFH7anNHoTc23dlLDEMb%2FsHRiRYkkwOCaerYLGwo2MS%2B3DFRtbnkLtIr1t3UU8QerD2nGW%2B7tWCp6TRQrp5IOfRGMR1OaWMZId%2FSjjfQyTLo6rqqmcNLxDRNbK2wnjHKvtlwWG4uyAS8SL%2F0P82zUsonhpN2eqQ54PIoJQXNhXZZ3sHvtNGpBZ%2Fd3gXbuoFqcmtaajxJl11JgCw81PkuRnEPeuKXBQmGJZwBI%2F%2BXOxOjJ1uoFIgblFKkqGXMc8frP9Y1h7OAikanMmk8tDelS0l5IMZaPgc9wgDOmD1VZ7Kp1%2B9fsf6yePC3pvYVj87XcQalve7ZNsym9W7ci0zm4ZuT7WWW7atBo%2FTh3aKfPBiyOpdcXHSVt0nzFrtQNPXRn8yfqQgEf2BY8VGbL8vdzOF2EQMkjcv%2FY8P1Jp7l94lp3H9bMNrR2MkGOqUB2E4g7Thpx7hSORtkY5V51as87HmT9Tcl4LiXw6gLYbFHbnfZdStLIgPkcoLQPAEz6Y8ZuAfeMlVOXMgOC8altjpaRrCYV7SJTVcew6cunOI76UmHBkqrqlDUTzWlXhPsOVRvZqQCiZ3AZE4uPSfDbimUMKBaQtkexCQqHjJtqedGIX9xc44VvPAPc2f%2Fkm32uk9dPh2SjsKFdeVEsR4rwodFqGW8&X-Amz-Signature=716614620db42f6f97aff5aed37376dd3f495c64d74c667a731c8f5bba14eab1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
