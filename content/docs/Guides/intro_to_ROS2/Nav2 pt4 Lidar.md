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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4BVHICU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6KXPy68EHGNfWI8F5pGiTjqz3%2Bb1IB1TSDrwWArQjAgIgDekB7XkQ63fj2cWCi6RF1B1TO9QKj61eNoNXO0WwtSgq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDMX80FA6u4FypRsK7ircA5wZBoSMswCKeEwYKfXnumGcoib%2Fsa%2BF0Jxa8DyZa4u%2BMDsDav0HuGud%2BjZXeEbH%2Fua3q7fomxcPRvml98vKoX6R7CsJCuupLEp2z1aoIFdtA8eSqFb0SAKong35JtqDSgosXGqTBUI2adzKfLW3dEiM3Db9%2BLHkYaAeOLz9ehiBf3oyYJatWFcnpDPd2UJtpBMDrjTnN%2FAuUPyipKoaLEPoR7lqIDoMF8JccXymWXhFsWFtENf0UuN%2BR5c9NAVvqboI1%2Bj5d1eMtr3an6hbYp%2BKEadKrXfT%2Bg7seclqZxsRgLqATSgrfwb4iUOAgIKNpF37KaXrRMbNgFzOUe91d0qIcP5ZZH8AvUz4vzcTKFudtfyn4fqHrmPs%2ByArdVgBXfNrdOb52q4sen%2BvUAhjb6XBz1IOZMGQLssyE3GOz0uSnpu3wqF3Tq%2FUtBscNCek7JB9Wn9xIP871dJIduXdt2N4ktOLI3oUO1ZuJUBeAYflL6mGueweld970pyeYQEEapsHJFTMZnvU3qeybQJ5pQZg59VzQowZJZpxgfmhbj%2BlrfUBWFRA6k0nFYvfEvA44%2BKRADC3MD4%2F68Nav7c7C9xEjmcCysrKSLVj1hDs5%2FqGW7JUGWOAZu6b6LaHML3a78QGOqUBqTqRmGMuvc51SmwyXuq3zEEeN144fz5ruQc8AQasLzVFJ7sSe04jp37oS6EmqNk0ZlSuvz6b%2BF%2Bt0XVUiE4KIu%2BjCqkAtcXE4NfhA2a8JlXke0wNFoy3hYkTTatYsmknNUp%2FHyght8SAlzgtuBV6vxtDizqfB2s2NL2AwLpvn1VBP6%2F%2B0APnztTdgZ%2FdYUc3h0I4jrwvxKnV%2FKU1%2Bp3A7ltJbSML&X-Amz-Signature=0cd2ffba4ebf8ef6439ffd179d3a717c6c62342235f431a794ef513204d60e61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ56ZFHL%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2Fk9k4VnZ%2Be9qCJVBtPT%2Br5ZLREbgIQBskksowN51IKAiEAyfgQbwoui%2FzFJhRxxj3f19Mn1FMX35tcCrikGAEsxHIq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDAv8i9skuMK8DiUuCCrcAzRSw2uJCobbnasXaa%2B62UyprFm4KmO%2FJ3yV6aEGv0FtN2HImCwJAS30HRWaTWR%2FJ1TNreMAeoD7z3eXd%2FkRM21KPoTGNZGDPONSs9pjqKxEmeJV0q7UoD0kMS67UtDMQFgUYqBn%2FBI4MScuVGQCubDr6vVdOEP4ff2%2BbxVrybac%2BGcku6c9CPCCFJRpmQxFskSb5vxWb1N%2FNZxaYA0OHh6Fyc54WW5zxK2hYOddWh7taMS1pJYt0J%2FimutpUVSDZ%2F%2BtZfyvP5i7k2a1i1Cyii3xw%2BKBIl53GTCIoLp6g0nRXvlxm76VRJAUlgz971yWF7xWaAzjAWaVyd6kt%2FeqdrdXNIlOagb2rG%2FFpEkH%2FP1eBEjL9HD2tgo052Q%2FlKVj%2F8CTtjmvbDHxEIGFt1OYnKtpNcYUSeiAIXLJvu5QNslPFLsRdyzkSEs3AdwEZekS5ir672VyXzjVOVDDLMFs6venI3oI%2BwCrSNcv2M2tZ5s%2BrOo7ENa5%2FE6dwqgkNaYcytfa2RJ4uQQo%2BL5fQZ2SSv9gk33DFSZqIXYuPklTrfqU3lBF%2FWJf9zQV73ENRNoanroW0PsbDcgiSh%2BcCF0Iic1kjkyFxY8U51LzpOxWQzJWev6Sra%2FvmWwv%2BH%2BRMOvZ78QGOqUBFjNIvYxMvIfYBN1l4yz7s2AnqL0dwWKbq08y62%2F58KVqnYgi8L3HXxvfPn6KtMVvgLWt6GMBRaptHdtG07qrwFuL7FTi8AQ8lSy8oXxzRsF1vudBvCOspdItkD%2F%2FTR73%2BhOI6wTubZQ16zm3%2BDN%2F4d3dJm9tqLkrwO%2FXb%2FTjIonBukzR1DT1HLXtjos7g1JQmtMVPdxP78v%2B8m9g7Y20%2Ftzcw5uK&X-Amz-Signature=ac2bd2c750acab1656d09dabe45392a6db449ea65f4c5e68f1748df5d52f9077&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ56ZFHL%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2Fk9k4VnZ%2Be9qCJVBtPT%2Br5ZLREbgIQBskksowN51IKAiEAyfgQbwoui%2FzFJhRxxj3f19Mn1FMX35tcCrikGAEsxHIq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDAv8i9skuMK8DiUuCCrcAzRSw2uJCobbnasXaa%2B62UyprFm4KmO%2FJ3yV6aEGv0FtN2HImCwJAS30HRWaTWR%2FJ1TNreMAeoD7z3eXd%2FkRM21KPoTGNZGDPONSs9pjqKxEmeJV0q7UoD0kMS67UtDMQFgUYqBn%2FBI4MScuVGQCubDr6vVdOEP4ff2%2BbxVrybac%2BGcku6c9CPCCFJRpmQxFskSb5vxWb1N%2FNZxaYA0OHh6Fyc54WW5zxK2hYOddWh7taMS1pJYt0J%2FimutpUVSDZ%2F%2BtZfyvP5i7k2a1i1Cyii3xw%2BKBIl53GTCIoLp6g0nRXvlxm76VRJAUlgz971yWF7xWaAzjAWaVyd6kt%2FeqdrdXNIlOagb2rG%2FFpEkH%2FP1eBEjL9HD2tgo052Q%2FlKVj%2F8CTtjmvbDHxEIGFt1OYnKtpNcYUSeiAIXLJvu5QNslPFLsRdyzkSEs3AdwEZekS5ir672VyXzjVOVDDLMFs6venI3oI%2BwCrSNcv2M2tZ5s%2BrOo7ENa5%2FE6dwqgkNaYcytfa2RJ4uQQo%2BL5fQZ2SSv9gk33DFSZqIXYuPklTrfqU3lBF%2FWJf9zQV73ENRNoanroW0PsbDcgiSh%2BcCF0Iic1kjkyFxY8U51LzpOxWQzJWev6Sra%2FvmWwv%2BH%2BRMOvZ78QGOqUBFjNIvYxMvIfYBN1l4yz7s2AnqL0dwWKbq08y62%2F58KVqnYgi8L3HXxvfPn6KtMVvgLWt6GMBRaptHdtG07qrwFuL7FTi8AQ8lSy8oXxzRsF1vudBvCOspdItkD%2F%2FTR73%2BhOI6wTubZQ16zm3%2BDN%2F4d3dJm9tqLkrwO%2FXb%2FTjIonBukzR1DT1HLXtjos7g1JQmtMVPdxP78v%2B8m9g7Y20%2Ftzcw5uK&X-Amz-Signature=ef89713d4e68b703103e9dfb0ea763d1e58f2f4a7bb665e57212a264514d5c62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ56ZFHL%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2Fk9k4VnZ%2Be9qCJVBtPT%2Br5ZLREbgIQBskksowN51IKAiEAyfgQbwoui%2FzFJhRxxj3f19Mn1FMX35tcCrikGAEsxHIq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDAv8i9skuMK8DiUuCCrcAzRSw2uJCobbnasXaa%2B62UyprFm4KmO%2FJ3yV6aEGv0FtN2HImCwJAS30HRWaTWR%2FJ1TNreMAeoD7z3eXd%2FkRM21KPoTGNZGDPONSs9pjqKxEmeJV0q7UoD0kMS67UtDMQFgUYqBn%2FBI4MScuVGQCubDr6vVdOEP4ff2%2BbxVrybac%2BGcku6c9CPCCFJRpmQxFskSb5vxWb1N%2FNZxaYA0OHh6Fyc54WW5zxK2hYOddWh7taMS1pJYt0J%2FimutpUVSDZ%2F%2BtZfyvP5i7k2a1i1Cyii3xw%2BKBIl53GTCIoLp6g0nRXvlxm76VRJAUlgz971yWF7xWaAzjAWaVyd6kt%2FeqdrdXNIlOagb2rG%2FFpEkH%2FP1eBEjL9HD2tgo052Q%2FlKVj%2F8CTtjmvbDHxEIGFt1OYnKtpNcYUSeiAIXLJvu5QNslPFLsRdyzkSEs3AdwEZekS5ir672VyXzjVOVDDLMFs6venI3oI%2BwCrSNcv2M2tZ5s%2BrOo7ENa5%2FE6dwqgkNaYcytfa2RJ4uQQo%2BL5fQZ2SSv9gk33DFSZqIXYuPklTrfqU3lBF%2FWJf9zQV73ENRNoanroW0PsbDcgiSh%2BcCF0Iic1kjkyFxY8U51LzpOxWQzJWev6Sra%2FvmWwv%2BH%2BRMOvZ78QGOqUBFjNIvYxMvIfYBN1l4yz7s2AnqL0dwWKbq08y62%2F58KVqnYgi8L3HXxvfPn6KtMVvgLWt6GMBRaptHdtG07qrwFuL7FTi8AQ8lSy8oXxzRsF1vudBvCOspdItkD%2F%2FTR73%2BhOI6wTubZQ16zm3%2BDN%2F4d3dJm9tqLkrwO%2FXb%2FTjIonBukzR1DT1HLXtjos7g1JQmtMVPdxP78v%2B8m9g7Y20%2Ftzcw5uK&X-Amz-Signature=48850f3450f7983795bbc24e3d4a1a9f9bf6674d598cdf00b71557811c050d4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ56ZFHL%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2Fk9k4VnZ%2Be9qCJVBtPT%2Br5ZLREbgIQBskksowN51IKAiEAyfgQbwoui%2FzFJhRxxj3f19Mn1FMX35tcCrikGAEsxHIq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDAv8i9skuMK8DiUuCCrcAzRSw2uJCobbnasXaa%2B62UyprFm4KmO%2FJ3yV6aEGv0FtN2HImCwJAS30HRWaTWR%2FJ1TNreMAeoD7z3eXd%2FkRM21KPoTGNZGDPONSs9pjqKxEmeJV0q7UoD0kMS67UtDMQFgUYqBn%2FBI4MScuVGQCubDr6vVdOEP4ff2%2BbxVrybac%2BGcku6c9CPCCFJRpmQxFskSb5vxWb1N%2FNZxaYA0OHh6Fyc54WW5zxK2hYOddWh7taMS1pJYt0J%2FimutpUVSDZ%2F%2BtZfyvP5i7k2a1i1Cyii3xw%2BKBIl53GTCIoLp6g0nRXvlxm76VRJAUlgz971yWF7xWaAzjAWaVyd6kt%2FeqdrdXNIlOagb2rG%2FFpEkH%2FP1eBEjL9HD2tgo052Q%2FlKVj%2F8CTtjmvbDHxEIGFt1OYnKtpNcYUSeiAIXLJvu5QNslPFLsRdyzkSEs3AdwEZekS5ir672VyXzjVOVDDLMFs6venI3oI%2BwCrSNcv2M2tZ5s%2BrOo7ENa5%2FE6dwqgkNaYcytfa2RJ4uQQo%2BL5fQZ2SSv9gk33DFSZqIXYuPklTrfqU3lBF%2FWJf9zQV73ENRNoanroW0PsbDcgiSh%2BcCF0Iic1kjkyFxY8U51LzpOxWQzJWev6Sra%2FvmWwv%2BH%2BRMOvZ78QGOqUBFjNIvYxMvIfYBN1l4yz7s2AnqL0dwWKbq08y62%2F58KVqnYgi8L3HXxvfPn6KtMVvgLWt6GMBRaptHdtG07qrwFuL7FTi8AQ8lSy8oXxzRsF1vudBvCOspdItkD%2F%2FTR73%2BhOI6wTubZQ16zm3%2BDN%2F4d3dJm9tqLkrwO%2FXb%2FTjIonBukzR1DT1HLXtjos7g1JQmtMVPdxP78v%2B8m9g7Y20%2Ftzcw5uK&X-Amz-Signature=f073426e483bcfabd731b571620d3854382627079fa3be8333c73d9cbbe97af0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ56ZFHL%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2Fk9k4VnZ%2Be9qCJVBtPT%2Br5ZLREbgIQBskksowN51IKAiEAyfgQbwoui%2FzFJhRxxj3f19Mn1FMX35tcCrikGAEsxHIq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDAv8i9skuMK8DiUuCCrcAzRSw2uJCobbnasXaa%2B62UyprFm4KmO%2FJ3yV6aEGv0FtN2HImCwJAS30HRWaTWR%2FJ1TNreMAeoD7z3eXd%2FkRM21KPoTGNZGDPONSs9pjqKxEmeJV0q7UoD0kMS67UtDMQFgUYqBn%2FBI4MScuVGQCubDr6vVdOEP4ff2%2BbxVrybac%2BGcku6c9CPCCFJRpmQxFskSb5vxWb1N%2FNZxaYA0OHh6Fyc54WW5zxK2hYOddWh7taMS1pJYt0J%2FimutpUVSDZ%2F%2BtZfyvP5i7k2a1i1Cyii3xw%2BKBIl53GTCIoLp6g0nRXvlxm76VRJAUlgz971yWF7xWaAzjAWaVyd6kt%2FeqdrdXNIlOagb2rG%2FFpEkH%2FP1eBEjL9HD2tgo052Q%2FlKVj%2F8CTtjmvbDHxEIGFt1OYnKtpNcYUSeiAIXLJvu5QNslPFLsRdyzkSEs3AdwEZekS5ir672VyXzjVOVDDLMFs6venI3oI%2BwCrSNcv2M2tZ5s%2BrOo7ENa5%2FE6dwqgkNaYcytfa2RJ4uQQo%2BL5fQZ2SSv9gk33DFSZqIXYuPklTrfqU3lBF%2FWJf9zQV73ENRNoanroW0PsbDcgiSh%2BcCF0Iic1kjkyFxY8U51LzpOxWQzJWev6Sra%2FvmWwv%2BH%2BRMOvZ78QGOqUBFjNIvYxMvIfYBN1l4yz7s2AnqL0dwWKbq08y62%2F58KVqnYgi8L3HXxvfPn6KtMVvgLWt6GMBRaptHdtG07qrwFuL7FTi8AQ8lSy8oXxzRsF1vudBvCOspdItkD%2F%2FTR73%2BhOI6wTubZQ16zm3%2BDN%2F4d3dJm9tqLkrwO%2FXb%2FTjIonBukzR1DT1HLXtjos7g1JQmtMVPdxP78v%2B8m9g7Y20%2Ftzcw5uK&X-Amz-Signature=66ae241637cf45eacd7a87a91d2e4799488ce956f2d9f024eb8979b8caa16598&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ56ZFHL%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2Fk9k4VnZ%2Be9qCJVBtPT%2Br5ZLREbgIQBskksowN51IKAiEAyfgQbwoui%2FzFJhRxxj3f19Mn1FMX35tcCrikGAEsxHIq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDAv8i9skuMK8DiUuCCrcAzRSw2uJCobbnasXaa%2B62UyprFm4KmO%2FJ3yV6aEGv0FtN2HImCwJAS30HRWaTWR%2FJ1TNreMAeoD7z3eXd%2FkRM21KPoTGNZGDPONSs9pjqKxEmeJV0q7UoD0kMS67UtDMQFgUYqBn%2FBI4MScuVGQCubDr6vVdOEP4ff2%2BbxVrybac%2BGcku6c9CPCCFJRpmQxFskSb5vxWb1N%2FNZxaYA0OHh6Fyc54WW5zxK2hYOddWh7taMS1pJYt0J%2FimutpUVSDZ%2F%2BtZfyvP5i7k2a1i1Cyii3xw%2BKBIl53GTCIoLp6g0nRXvlxm76VRJAUlgz971yWF7xWaAzjAWaVyd6kt%2FeqdrdXNIlOagb2rG%2FFpEkH%2FP1eBEjL9HD2tgo052Q%2FlKVj%2F8CTtjmvbDHxEIGFt1OYnKtpNcYUSeiAIXLJvu5QNslPFLsRdyzkSEs3AdwEZekS5ir672VyXzjVOVDDLMFs6venI3oI%2BwCrSNcv2M2tZ5s%2BrOo7ENa5%2FE6dwqgkNaYcytfa2RJ4uQQo%2BL5fQZ2SSv9gk33DFSZqIXYuPklTrfqU3lBF%2FWJf9zQV73ENRNoanroW0PsbDcgiSh%2BcCF0Iic1kjkyFxY8U51LzpOxWQzJWev6Sra%2FvmWwv%2BH%2BRMOvZ78QGOqUBFjNIvYxMvIfYBN1l4yz7s2AnqL0dwWKbq08y62%2F58KVqnYgi8L3HXxvfPn6KtMVvgLWt6GMBRaptHdtG07qrwFuL7FTi8AQ8lSy8oXxzRsF1vudBvCOspdItkD%2F%2FTR73%2BhOI6wTubZQ16zm3%2BDN%2F4d3dJm9tqLkrwO%2FXb%2FTjIonBukzR1DT1HLXtjos7g1JQmtMVPdxP78v%2B8m9g7Y20%2Ftzcw5uK&X-Amz-Signature=431cf774cedd8cbc0ebb928c590e980990a90093699cc7f42c8585fba9f01eef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ56ZFHL%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2Fk9k4VnZ%2Be9qCJVBtPT%2Br5ZLREbgIQBskksowN51IKAiEAyfgQbwoui%2FzFJhRxxj3f19Mn1FMX35tcCrikGAEsxHIq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDAv8i9skuMK8DiUuCCrcAzRSw2uJCobbnasXaa%2B62UyprFm4KmO%2FJ3yV6aEGv0FtN2HImCwJAS30HRWaTWR%2FJ1TNreMAeoD7z3eXd%2FkRM21KPoTGNZGDPONSs9pjqKxEmeJV0q7UoD0kMS67UtDMQFgUYqBn%2FBI4MScuVGQCubDr6vVdOEP4ff2%2BbxVrybac%2BGcku6c9CPCCFJRpmQxFskSb5vxWb1N%2FNZxaYA0OHh6Fyc54WW5zxK2hYOddWh7taMS1pJYt0J%2FimutpUVSDZ%2F%2BtZfyvP5i7k2a1i1Cyii3xw%2BKBIl53GTCIoLp6g0nRXvlxm76VRJAUlgz971yWF7xWaAzjAWaVyd6kt%2FeqdrdXNIlOagb2rG%2FFpEkH%2FP1eBEjL9HD2tgo052Q%2FlKVj%2F8CTtjmvbDHxEIGFt1OYnKtpNcYUSeiAIXLJvu5QNslPFLsRdyzkSEs3AdwEZekS5ir672VyXzjVOVDDLMFs6venI3oI%2BwCrSNcv2M2tZ5s%2BrOo7ENa5%2FE6dwqgkNaYcytfa2RJ4uQQo%2BL5fQZ2SSv9gk33DFSZqIXYuPklTrfqU3lBF%2FWJf9zQV73ENRNoanroW0PsbDcgiSh%2BcCF0Iic1kjkyFxY8U51LzpOxWQzJWev6Sra%2FvmWwv%2BH%2BRMOvZ78QGOqUBFjNIvYxMvIfYBN1l4yz7s2AnqL0dwWKbq08y62%2F58KVqnYgi8L3HXxvfPn6KtMVvgLWt6GMBRaptHdtG07qrwFuL7FTi8AQ8lSy8oXxzRsF1vudBvCOspdItkD%2F%2FTR73%2BhOI6wTubZQ16zm3%2BDN%2F4d3dJm9tqLkrwO%2FXb%2FTjIonBukzR1DT1HLXtjos7g1JQmtMVPdxP78v%2B8m9g7Y20%2Ftzcw5uK&X-Amz-Signature=4d5694b2ad5fb78d449977699a824b39fb475ef0080d87e154007b2a4a032115&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ56ZFHL%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2Fk9k4VnZ%2Be9qCJVBtPT%2Br5ZLREbgIQBskksowN51IKAiEAyfgQbwoui%2FzFJhRxxj3f19Mn1FMX35tcCrikGAEsxHIq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDAv8i9skuMK8DiUuCCrcAzRSw2uJCobbnasXaa%2B62UyprFm4KmO%2FJ3yV6aEGv0FtN2HImCwJAS30HRWaTWR%2FJ1TNreMAeoD7z3eXd%2FkRM21KPoTGNZGDPONSs9pjqKxEmeJV0q7UoD0kMS67UtDMQFgUYqBn%2FBI4MScuVGQCubDr6vVdOEP4ff2%2BbxVrybac%2BGcku6c9CPCCFJRpmQxFskSb5vxWb1N%2FNZxaYA0OHh6Fyc54WW5zxK2hYOddWh7taMS1pJYt0J%2FimutpUVSDZ%2F%2BtZfyvP5i7k2a1i1Cyii3xw%2BKBIl53GTCIoLp6g0nRXvlxm76VRJAUlgz971yWF7xWaAzjAWaVyd6kt%2FeqdrdXNIlOagb2rG%2FFpEkH%2FP1eBEjL9HD2tgo052Q%2FlKVj%2F8CTtjmvbDHxEIGFt1OYnKtpNcYUSeiAIXLJvu5QNslPFLsRdyzkSEs3AdwEZekS5ir672VyXzjVOVDDLMFs6venI3oI%2BwCrSNcv2M2tZ5s%2BrOo7ENa5%2FE6dwqgkNaYcytfa2RJ4uQQo%2BL5fQZ2SSv9gk33DFSZqIXYuPklTrfqU3lBF%2FWJf9zQV73ENRNoanroW0PsbDcgiSh%2BcCF0Iic1kjkyFxY8U51LzpOxWQzJWev6Sra%2FvmWwv%2BH%2BRMOvZ78QGOqUBFjNIvYxMvIfYBN1l4yz7s2AnqL0dwWKbq08y62%2F58KVqnYgi8L3HXxvfPn6KtMVvgLWt6GMBRaptHdtG07qrwFuL7FTi8AQ8lSy8oXxzRsF1vudBvCOspdItkD%2F%2FTR73%2BhOI6wTubZQ16zm3%2BDN%2F4d3dJm9tqLkrwO%2FXb%2FTjIonBukzR1DT1HLXtjos7g1JQmtMVPdxP78v%2B8m9g7Y20%2Ftzcw5uK&X-Amz-Signature=f635db30562f887b65a6a959254505de80c3b5dd6b14570af74ae592a3035391&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ56ZFHL%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2Fk9k4VnZ%2Be9qCJVBtPT%2Br5ZLREbgIQBskksowN51IKAiEAyfgQbwoui%2FzFJhRxxj3f19Mn1FMX35tcCrikGAEsxHIq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDAv8i9skuMK8DiUuCCrcAzRSw2uJCobbnasXaa%2B62UyprFm4KmO%2FJ3yV6aEGv0FtN2HImCwJAS30HRWaTWR%2FJ1TNreMAeoD7z3eXd%2FkRM21KPoTGNZGDPONSs9pjqKxEmeJV0q7UoD0kMS67UtDMQFgUYqBn%2FBI4MScuVGQCubDr6vVdOEP4ff2%2BbxVrybac%2BGcku6c9CPCCFJRpmQxFskSb5vxWb1N%2FNZxaYA0OHh6Fyc54WW5zxK2hYOddWh7taMS1pJYt0J%2FimutpUVSDZ%2F%2BtZfyvP5i7k2a1i1Cyii3xw%2BKBIl53GTCIoLp6g0nRXvlxm76VRJAUlgz971yWF7xWaAzjAWaVyd6kt%2FeqdrdXNIlOagb2rG%2FFpEkH%2FP1eBEjL9HD2tgo052Q%2FlKVj%2F8CTtjmvbDHxEIGFt1OYnKtpNcYUSeiAIXLJvu5QNslPFLsRdyzkSEs3AdwEZekS5ir672VyXzjVOVDDLMFs6venI3oI%2BwCrSNcv2M2tZ5s%2BrOo7ENa5%2FE6dwqgkNaYcytfa2RJ4uQQo%2BL5fQZ2SSv9gk33DFSZqIXYuPklTrfqU3lBF%2FWJf9zQV73ENRNoanroW0PsbDcgiSh%2BcCF0Iic1kjkyFxY8U51LzpOxWQzJWev6Sra%2FvmWwv%2BH%2BRMOvZ78QGOqUBFjNIvYxMvIfYBN1l4yz7s2AnqL0dwWKbq08y62%2F58KVqnYgi8L3HXxvfPn6KtMVvgLWt6GMBRaptHdtG07qrwFuL7FTi8AQ8lSy8oXxzRsF1vudBvCOspdItkD%2F%2FTR73%2BhOI6wTubZQ16zm3%2BDN%2F4d3dJm9tqLkrwO%2FXb%2FTjIonBukzR1DT1HLXtjos7g1JQmtMVPdxP78v%2B8m9g7Y20%2Ftzcw5uK&X-Amz-Signature=0c67d59d827ccae32bb2fc7a785d6ddd646f03f10f20f98e4cdfe4a559f7a3b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ56ZFHL%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2Fk9k4VnZ%2Be9qCJVBtPT%2Br5ZLREbgIQBskksowN51IKAiEAyfgQbwoui%2FzFJhRxxj3f19Mn1FMX35tcCrikGAEsxHIq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDAv8i9skuMK8DiUuCCrcAzRSw2uJCobbnasXaa%2B62UyprFm4KmO%2FJ3yV6aEGv0FtN2HImCwJAS30HRWaTWR%2FJ1TNreMAeoD7z3eXd%2FkRM21KPoTGNZGDPONSs9pjqKxEmeJV0q7UoD0kMS67UtDMQFgUYqBn%2FBI4MScuVGQCubDr6vVdOEP4ff2%2BbxVrybac%2BGcku6c9CPCCFJRpmQxFskSb5vxWb1N%2FNZxaYA0OHh6Fyc54WW5zxK2hYOddWh7taMS1pJYt0J%2FimutpUVSDZ%2F%2BtZfyvP5i7k2a1i1Cyii3xw%2BKBIl53GTCIoLp6g0nRXvlxm76VRJAUlgz971yWF7xWaAzjAWaVyd6kt%2FeqdrdXNIlOagb2rG%2FFpEkH%2FP1eBEjL9HD2tgo052Q%2FlKVj%2F8CTtjmvbDHxEIGFt1OYnKtpNcYUSeiAIXLJvu5QNslPFLsRdyzkSEs3AdwEZekS5ir672VyXzjVOVDDLMFs6venI3oI%2BwCrSNcv2M2tZ5s%2BrOo7ENa5%2FE6dwqgkNaYcytfa2RJ4uQQo%2BL5fQZ2SSv9gk33DFSZqIXYuPklTrfqU3lBF%2FWJf9zQV73ENRNoanroW0PsbDcgiSh%2BcCF0Iic1kjkyFxY8U51LzpOxWQzJWev6Sra%2FvmWwv%2BH%2BRMOvZ78QGOqUBFjNIvYxMvIfYBN1l4yz7s2AnqL0dwWKbq08y62%2F58KVqnYgi8L3HXxvfPn6KtMVvgLWt6GMBRaptHdtG07qrwFuL7FTi8AQ8lSy8oXxzRsF1vudBvCOspdItkD%2F%2FTR73%2BhOI6wTubZQ16zm3%2BDN%2F4d3dJm9tqLkrwO%2FXb%2FTjIonBukzR1DT1HLXtjos7g1JQmtMVPdxP78v%2B8m9g7Y20%2Ftzcw5uK&X-Amz-Signature=f073426e483bcfabd731b571620d3854382627079fa3be8333c73d9cbbe97af0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
