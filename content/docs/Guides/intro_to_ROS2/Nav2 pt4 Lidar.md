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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EUWQGOP%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIF0SDrFfknToPaaxLJLkbCLTu3Ho89eE0p0lSjcrE%2FKLAiEAwG0ZyWaR9F4PEaHsTZzuoQQ05ijJuTR0W3ncavldPPcqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTl5syN5rhdrP6HsyrcA5Fdr8GI0GBpoeCRet0%2BGftA2MVvHhU%2B1dsz0sezjJ7WcDod5BuZ5VcNUdlP8bM0QxgdmcAyo75Hhp%2FeO1nDVO9JCS2YxMNx8%2FzjzjmwrsYVPAcrmmol5FpNPYA7Es35tCRNBa4lclz072muTum6%2B53DUWI8B7ZqdUtD1urDC6ZkFEnDx2vZGaqQN4pZ95dSkdvABKyigfhZvJ36h4upJ2azQ5Sqm%2Bt9h%2FS4cr80CzJqEACDAcXztwbyU2qZXYgsjDv7jR18dpS2%2Fx0md1LKZpN7YXQ22ib7UoMZ%2B%2B3qGwYh02gEN0CrkD7vermSdu1PxrkN74gXKiluPbN8%2BUgau%2F00LA%2BEILe3sjStw3EDoxKM6op5qzGshlLKgqcDxX4OZ%2B5sJClQLZEnsq0XAqLHIG7R2P0pLdVEmwKy6smRWmagBW9E7o6hVS3v4xREzPNFlx29n%2F%2FhS2KeDv6I1QHhVe2h%2BByO1jvRR5br0Qr9PYDogQE2uxcdHRtr643ML27VNlzPbLjFuGw4HJynpnJUtOowsQOHoDKeGR0QpQcUNWj17QF%2B3rNVitlZk3Ig%2BNyNG%2BwmxdhYo2NYJvG11vB5QagJKtwkoxcmRQ2py6vAkepK2Siehq1MB07g7VIpMPuAjMsGOqUBOyiAbQTcgXbQdsDTsPLpO7A33kM10vF3%2BvLLvA%2FROTcaSR5xoHBBvcWKO%2FF6B4O1DufSYLOj75akK%2Bhh9YyvX2gU8%2BvllGYrkyzSgq0gLKeCZZoWmztDHOZdyhtcjiZtkIfdQajkgIOHrz2LsQMDyqISWX%2Fb0SBp7%2BHZJQ7ebK2faZN6VC9eMTW%2BUgCcX4WZGzgCC9JGcfzaz14nBWhoFm151pNW&X-Amz-Signature=ecc26a23d55e885dcf7b4f3e8a585b66a877cdb07232c34fc0dda168fd819cbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAIJCQF3%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIAHmAKd0MTUJcMlFTTLBTFNge36IOAdNK%2FSo114SXPULAiEA1VmUiTWgkv60Bngb5UPNfsoPppc4gjLZqcJz%2BMCAJWEqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA8uLj0XxIPd6MnXACrcA8QDqU9%2BUPg3a2c0ccu1M%2F3qGlyZTlN91pVzzH2S1jkoh%2BiW7BmqCSzwY4tuX%2FlnX0VxF6zlJojvCebXdoR4NFRNJGhUXOzFxozDFD2RcnwxLqc8AFYZLejQnn%2BXCzD8Mxlq89T1Mc5wizbXvFnupm9ZxV9nkkPO82TxKh9X3cxn%2FH5OvSYYSq8Z1PrCRECZrAFoVhduMH7aPZk99SddCMx2PSmZHh50WxdoQD6D3I3sjpg3r0xXawQqGjECav8MG2yUtFmXXA%2FvfYvUwPebXyJLgUK04Pd%2BZ0VxNybKwrrgEhKj6YSU7WB2D3k8XPomCYy8iabwXU8eTmRyBVJnnWGeKG%2FfhrLoNe4IvEincAfXQ3M3Q%2FO14kOTnSkrxx%2B04xBCgwrtv9ydxaLkLdHKYcrWRgT7i5JKcjeYA6B6HeYn19J7xqEOD4y8l1zBXiKBEzCCQhDovcPAGQ1vZAfMa8PpZywrqk5NxXKwnTX7y5aGRz%2FIa6xx9euOYDocNSk%2Ftd76kYhFpQJ2zqU9jW5onTelWe5FHG5SFhxl5eqt3FA3dlzYa76v2o1IxvMeBtny2rintqLRsYn6fJdvj8HwL1n57TeUaODOKkp0K915y%2BouwLO88SnsHWoDsnagMML%2Bi8sGOqUBNH2eC2Y%2FSU%2B5%2BF%2FGeIUIVeR8R0CJzQ2TsLnoYUY7DU9t%2FV4asRv2gmHqSK2MV4F5yfw3LTiEwuNAIplogM7%2Fi9Xnhx%2BGU8jH96KDaBwCO8FOkhR1d18mOhvOBv3eUerkXHXNCny1n39bNdNrk3dg9GtImCMfGdTU%2Btzs536tqaYkopYjLX7ki2UupR23rMSQ6C499W9G5FH1gXRQV9nroUGMBmXH&X-Amz-Signature=13cedb03d279de251dd370d66b88d3649e63c974bb7733ed204acac58e0d9e38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAIJCQF3%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIAHmAKd0MTUJcMlFTTLBTFNge36IOAdNK%2FSo114SXPULAiEA1VmUiTWgkv60Bngb5UPNfsoPppc4gjLZqcJz%2BMCAJWEqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA8uLj0XxIPd6MnXACrcA8QDqU9%2BUPg3a2c0ccu1M%2F3qGlyZTlN91pVzzH2S1jkoh%2BiW7BmqCSzwY4tuX%2FlnX0VxF6zlJojvCebXdoR4NFRNJGhUXOzFxozDFD2RcnwxLqc8AFYZLejQnn%2BXCzD8Mxlq89T1Mc5wizbXvFnupm9ZxV9nkkPO82TxKh9X3cxn%2FH5OvSYYSq8Z1PrCRECZrAFoVhduMH7aPZk99SddCMx2PSmZHh50WxdoQD6D3I3sjpg3r0xXawQqGjECav8MG2yUtFmXXA%2FvfYvUwPebXyJLgUK04Pd%2BZ0VxNybKwrrgEhKj6YSU7WB2D3k8XPomCYy8iabwXU8eTmRyBVJnnWGeKG%2FfhrLoNe4IvEincAfXQ3M3Q%2FO14kOTnSkrxx%2B04xBCgwrtv9ydxaLkLdHKYcrWRgT7i5JKcjeYA6B6HeYn19J7xqEOD4y8l1zBXiKBEzCCQhDovcPAGQ1vZAfMa8PpZywrqk5NxXKwnTX7y5aGRz%2FIa6xx9euOYDocNSk%2Ftd76kYhFpQJ2zqU9jW5onTelWe5FHG5SFhxl5eqt3FA3dlzYa76v2o1IxvMeBtny2rintqLRsYn6fJdvj8HwL1n57TeUaODOKkp0K915y%2BouwLO88SnsHWoDsnagMML%2Bi8sGOqUBNH2eC2Y%2FSU%2B5%2BF%2FGeIUIVeR8R0CJzQ2TsLnoYUY7DU9t%2FV4asRv2gmHqSK2MV4F5yfw3LTiEwuNAIplogM7%2Fi9Xnhx%2BGU8jH96KDaBwCO8FOkhR1d18mOhvOBv3eUerkXHXNCny1n39bNdNrk3dg9GtImCMfGdTU%2Btzs536tqaYkopYjLX7ki2UupR23rMSQ6C499W9G5FH1gXRQV9nroUGMBmXH&X-Amz-Signature=eff1505fb42308b4c555e56119c4bb58779682268b76f68fc4c9c8f602afcc0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAIJCQF3%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIAHmAKd0MTUJcMlFTTLBTFNge36IOAdNK%2FSo114SXPULAiEA1VmUiTWgkv60Bngb5UPNfsoPppc4gjLZqcJz%2BMCAJWEqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA8uLj0XxIPd6MnXACrcA8QDqU9%2BUPg3a2c0ccu1M%2F3qGlyZTlN91pVzzH2S1jkoh%2BiW7BmqCSzwY4tuX%2FlnX0VxF6zlJojvCebXdoR4NFRNJGhUXOzFxozDFD2RcnwxLqc8AFYZLejQnn%2BXCzD8Mxlq89T1Mc5wizbXvFnupm9ZxV9nkkPO82TxKh9X3cxn%2FH5OvSYYSq8Z1PrCRECZrAFoVhduMH7aPZk99SddCMx2PSmZHh50WxdoQD6D3I3sjpg3r0xXawQqGjECav8MG2yUtFmXXA%2FvfYvUwPebXyJLgUK04Pd%2BZ0VxNybKwrrgEhKj6YSU7WB2D3k8XPomCYy8iabwXU8eTmRyBVJnnWGeKG%2FfhrLoNe4IvEincAfXQ3M3Q%2FO14kOTnSkrxx%2B04xBCgwrtv9ydxaLkLdHKYcrWRgT7i5JKcjeYA6B6HeYn19J7xqEOD4y8l1zBXiKBEzCCQhDovcPAGQ1vZAfMa8PpZywrqk5NxXKwnTX7y5aGRz%2FIa6xx9euOYDocNSk%2Ftd76kYhFpQJ2zqU9jW5onTelWe5FHG5SFhxl5eqt3FA3dlzYa76v2o1IxvMeBtny2rintqLRsYn6fJdvj8HwL1n57TeUaODOKkp0K915y%2BouwLO88SnsHWoDsnagMML%2Bi8sGOqUBNH2eC2Y%2FSU%2B5%2BF%2FGeIUIVeR8R0CJzQ2TsLnoYUY7DU9t%2FV4asRv2gmHqSK2MV4F5yfw3LTiEwuNAIplogM7%2Fi9Xnhx%2BGU8jH96KDaBwCO8FOkhR1d18mOhvOBv3eUerkXHXNCny1n39bNdNrk3dg9GtImCMfGdTU%2Btzs536tqaYkopYjLX7ki2UupR23rMSQ6C499W9G5FH1gXRQV9nroUGMBmXH&X-Amz-Signature=f3cf0b40a5678a9575beea565ad91a0ddd592124c385776d63bee64e1458e418&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAIJCQF3%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIAHmAKd0MTUJcMlFTTLBTFNge36IOAdNK%2FSo114SXPULAiEA1VmUiTWgkv60Bngb5UPNfsoPppc4gjLZqcJz%2BMCAJWEqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA8uLj0XxIPd6MnXACrcA8QDqU9%2BUPg3a2c0ccu1M%2F3qGlyZTlN91pVzzH2S1jkoh%2BiW7BmqCSzwY4tuX%2FlnX0VxF6zlJojvCebXdoR4NFRNJGhUXOzFxozDFD2RcnwxLqc8AFYZLejQnn%2BXCzD8Mxlq89T1Mc5wizbXvFnupm9ZxV9nkkPO82TxKh9X3cxn%2FH5OvSYYSq8Z1PrCRECZrAFoVhduMH7aPZk99SddCMx2PSmZHh50WxdoQD6D3I3sjpg3r0xXawQqGjECav8MG2yUtFmXXA%2FvfYvUwPebXyJLgUK04Pd%2BZ0VxNybKwrrgEhKj6YSU7WB2D3k8XPomCYy8iabwXU8eTmRyBVJnnWGeKG%2FfhrLoNe4IvEincAfXQ3M3Q%2FO14kOTnSkrxx%2B04xBCgwrtv9ydxaLkLdHKYcrWRgT7i5JKcjeYA6B6HeYn19J7xqEOD4y8l1zBXiKBEzCCQhDovcPAGQ1vZAfMa8PpZywrqk5NxXKwnTX7y5aGRz%2FIa6xx9euOYDocNSk%2Ftd76kYhFpQJ2zqU9jW5onTelWe5FHG5SFhxl5eqt3FA3dlzYa76v2o1IxvMeBtny2rintqLRsYn6fJdvj8HwL1n57TeUaODOKkp0K915y%2BouwLO88SnsHWoDsnagMML%2Bi8sGOqUBNH2eC2Y%2FSU%2B5%2BF%2FGeIUIVeR8R0CJzQ2TsLnoYUY7DU9t%2FV4asRv2gmHqSK2MV4F5yfw3LTiEwuNAIplogM7%2Fi9Xnhx%2BGU8jH96KDaBwCO8FOkhR1d18mOhvOBv3eUerkXHXNCny1n39bNdNrk3dg9GtImCMfGdTU%2Btzs536tqaYkopYjLX7ki2UupR23rMSQ6C499W9G5FH1gXRQV9nroUGMBmXH&X-Amz-Signature=376bff7f6c1504b45a7120c02e3dde29acb8036ba0b19eb882e32de75b2f446c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAIJCQF3%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIAHmAKd0MTUJcMlFTTLBTFNge36IOAdNK%2FSo114SXPULAiEA1VmUiTWgkv60Bngb5UPNfsoPppc4gjLZqcJz%2BMCAJWEqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA8uLj0XxIPd6MnXACrcA8QDqU9%2BUPg3a2c0ccu1M%2F3qGlyZTlN91pVzzH2S1jkoh%2BiW7BmqCSzwY4tuX%2FlnX0VxF6zlJojvCebXdoR4NFRNJGhUXOzFxozDFD2RcnwxLqc8AFYZLejQnn%2BXCzD8Mxlq89T1Mc5wizbXvFnupm9ZxV9nkkPO82TxKh9X3cxn%2FH5OvSYYSq8Z1PrCRECZrAFoVhduMH7aPZk99SddCMx2PSmZHh50WxdoQD6D3I3sjpg3r0xXawQqGjECav8MG2yUtFmXXA%2FvfYvUwPebXyJLgUK04Pd%2BZ0VxNybKwrrgEhKj6YSU7WB2D3k8XPomCYy8iabwXU8eTmRyBVJnnWGeKG%2FfhrLoNe4IvEincAfXQ3M3Q%2FO14kOTnSkrxx%2B04xBCgwrtv9ydxaLkLdHKYcrWRgT7i5JKcjeYA6B6HeYn19J7xqEOD4y8l1zBXiKBEzCCQhDovcPAGQ1vZAfMa8PpZywrqk5NxXKwnTX7y5aGRz%2FIa6xx9euOYDocNSk%2Ftd76kYhFpQJ2zqU9jW5onTelWe5FHG5SFhxl5eqt3FA3dlzYa76v2o1IxvMeBtny2rintqLRsYn6fJdvj8HwL1n57TeUaODOKkp0K915y%2BouwLO88SnsHWoDsnagMML%2Bi8sGOqUBNH2eC2Y%2FSU%2B5%2BF%2FGeIUIVeR8R0CJzQ2TsLnoYUY7DU9t%2FV4asRv2gmHqSK2MV4F5yfw3LTiEwuNAIplogM7%2Fi9Xnhx%2BGU8jH96KDaBwCO8FOkhR1d18mOhvOBv3eUerkXHXNCny1n39bNdNrk3dg9GtImCMfGdTU%2Btzs536tqaYkopYjLX7ki2UupR23rMSQ6C499W9G5FH1gXRQV9nroUGMBmXH&X-Amz-Signature=d9d7692ede6c3ec198a25e1feff4d85d2ab9102bed2e9f63b8322a1fb42e2a65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAIJCQF3%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIAHmAKd0MTUJcMlFTTLBTFNge36IOAdNK%2FSo114SXPULAiEA1VmUiTWgkv60Bngb5UPNfsoPppc4gjLZqcJz%2BMCAJWEqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA8uLj0XxIPd6MnXACrcA8QDqU9%2BUPg3a2c0ccu1M%2F3qGlyZTlN91pVzzH2S1jkoh%2BiW7BmqCSzwY4tuX%2FlnX0VxF6zlJojvCebXdoR4NFRNJGhUXOzFxozDFD2RcnwxLqc8AFYZLejQnn%2BXCzD8Mxlq89T1Mc5wizbXvFnupm9ZxV9nkkPO82TxKh9X3cxn%2FH5OvSYYSq8Z1PrCRECZrAFoVhduMH7aPZk99SddCMx2PSmZHh50WxdoQD6D3I3sjpg3r0xXawQqGjECav8MG2yUtFmXXA%2FvfYvUwPebXyJLgUK04Pd%2BZ0VxNybKwrrgEhKj6YSU7WB2D3k8XPomCYy8iabwXU8eTmRyBVJnnWGeKG%2FfhrLoNe4IvEincAfXQ3M3Q%2FO14kOTnSkrxx%2B04xBCgwrtv9ydxaLkLdHKYcrWRgT7i5JKcjeYA6B6HeYn19J7xqEOD4y8l1zBXiKBEzCCQhDovcPAGQ1vZAfMa8PpZywrqk5NxXKwnTX7y5aGRz%2FIa6xx9euOYDocNSk%2Ftd76kYhFpQJ2zqU9jW5onTelWe5FHG5SFhxl5eqt3FA3dlzYa76v2o1IxvMeBtny2rintqLRsYn6fJdvj8HwL1n57TeUaODOKkp0K915y%2BouwLO88SnsHWoDsnagMML%2Bi8sGOqUBNH2eC2Y%2FSU%2B5%2BF%2FGeIUIVeR8R0CJzQ2TsLnoYUY7DU9t%2FV4asRv2gmHqSK2MV4F5yfw3LTiEwuNAIplogM7%2Fi9Xnhx%2BGU8jH96KDaBwCO8FOkhR1d18mOhvOBv3eUerkXHXNCny1n39bNdNrk3dg9GtImCMfGdTU%2Btzs536tqaYkopYjLX7ki2UupR23rMSQ6C499W9G5FH1gXRQV9nroUGMBmXH&X-Amz-Signature=8abb8794260d6325a45a17e22dfcf8b0e1afe26c7656fc8c9ce1491479f37cbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAIJCQF3%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIAHmAKd0MTUJcMlFTTLBTFNge36IOAdNK%2FSo114SXPULAiEA1VmUiTWgkv60Bngb5UPNfsoPppc4gjLZqcJz%2BMCAJWEqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA8uLj0XxIPd6MnXACrcA8QDqU9%2BUPg3a2c0ccu1M%2F3qGlyZTlN91pVzzH2S1jkoh%2BiW7BmqCSzwY4tuX%2FlnX0VxF6zlJojvCebXdoR4NFRNJGhUXOzFxozDFD2RcnwxLqc8AFYZLejQnn%2BXCzD8Mxlq89T1Mc5wizbXvFnupm9ZxV9nkkPO82TxKh9X3cxn%2FH5OvSYYSq8Z1PrCRECZrAFoVhduMH7aPZk99SddCMx2PSmZHh50WxdoQD6D3I3sjpg3r0xXawQqGjECav8MG2yUtFmXXA%2FvfYvUwPebXyJLgUK04Pd%2BZ0VxNybKwrrgEhKj6YSU7WB2D3k8XPomCYy8iabwXU8eTmRyBVJnnWGeKG%2FfhrLoNe4IvEincAfXQ3M3Q%2FO14kOTnSkrxx%2B04xBCgwrtv9ydxaLkLdHKYcrWRgT7i5JKcjeYA6B6HeYn19J7xqEOD4y8l1zBXiKBEzCCQhDovcPAGQ1vZAfMa8PpZywrqk5NxXKwnTX7y5aGRz%2FIa6xx9euOYDocNSk%2Ftd76kYhFpQJ2zqU9jW5onTelWe5FHG5SFhxl5eqt3FA3dlzYa76v2o1IxvMeBtny2rintqLRsYn6fJdvj8HwL1n57TeUaODOKkp0K915y%2BouwLO88SnsHWoDsnagMML%2Bi8sGOqUBNH2eC2Y%2FSU%2B5%2BF%2FGeIUIVeR8R0CJzQ2TsLnoYUY7DU9t%2FV4asRv2gmHqSK2MV4F5yfw3LTiEwuNAIplogM7%2Fi9Xnhx%2BGU8jH96KDaBwCO8FOkhR1d18mOhvOBv3eUerkXHXNCny1n39bNdNrk3dg9GtImCMfGdTU%2Btzs536tqaYkopYjLX7ki2UupR23rMSQ6C499W9G5FH1gXRQV9nroUGMBmXH&X-Amz-Signature=36a910f7606f3f65faa17830f5208edcebae20adac59be83a808e582bee06b51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAIJCQF3%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIAHmAKd0MTUJcMlFTTLBTFNge36IOAdNK%2FSo114SXPULAiEA1VmUiTWgkv60Bngb5UPNfsoPppc4gjLZqcJz%2BMCAJWEqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA8uLj0XxIPd6MnXACrcA8QDqU9%2BUPg3a2c0ccu1M%2F3qGlyZTlN91pVzzH2S1jkoh%2BiW7BmqCSzwY4tuX%2FlnX0VxF6zlJojvCebXdoR4NFRNJGhUXOzFxozDFD2RcnwxLqc8AFYZLejQnn%2BXCzD8Mxlq89T1Mc5wizbXvFnupm9ZxV9nkkPO82TxKh9X3cxn%2FH5OvSYYSq8Z1PrCRECZrAFoVhduMH7aPZk99SddCMx2PSmZHh50WxdoQD6D3I3sjpg3r0xXawQqGjECav8MG2yUtFmXXA%2FvfYvUwPebXyJLgUK04Pd%2BZ0VxNybKwrrgEhKj6YSU7WB2D3k8XPomCYy8iabwXU8eTmRyBVJnnWGeKG%2FfhrLoNe4IvEincAfXQ3M3Q%2FO14kOTnSkrxx%2B04xBCgwrtv9ydxaLkLdHKYcrWRgT7i5JKcjeYA6B6HeYn19J7xqEOD4y8l1zBXiKBEzCCQhDovcPAGQ1vZAfMa8PpZywrqk5NxXKwnTX7y5aGRz%2FIa6xx9euOYDocNSk%2Ftd76kYhFpQJ2zqU9jW5onTelWe5FHG5SFhxl5eqt3FA3dlzYa76v2o1IxvMeBtny2rintqLRsYn6fJdvj8HwL1n57TeUaODOKkp0K915y%2BouwLO88SnsHWoDsnagMML%2Bi8sGOqUBNH2eC2Y%2FSU%2B5%2BF%2FGeIUIVeR8R0CJzQ2TsLnoYUY7DU9t%2FV4asRv2gmHqSK2MV4F5yfw3LTiEwuNAIplogM7%2Fi9Xnhx%2BGU8jH96KDaBwCO8FOkhR1d18mOhvOBv3eUerkXHXNCny1n39bNdNrk3dg9GtImCMfGdTU%2Btzs536tqaYkopYjLX7ki2UupR23rMSQ6C499W9G5FH1gXRQV9nroUGMBmXH&X-Amz-Signature=5973c4ad71a2df50bdb256c7c6e06857011880ffa2613fbd54974f98819b673e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAIJCQF3%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIAHmAKd0MTUJcMlFTTLBTFNge36IOAdNK%2FSo114SXPULAiEA1VmUiTWgkv60Bngb5UPNfsoPppc4gjLZqcJz%2BMCAJWEqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA8uLj0XxIPd6MnXACrcA8QDqU9%2BUPg3a2c0ccu1M%2F3qGlyZTlN91pVzzH2S1jkoh%2BiW7BmqCSzwY4tuX%2FlnX0VxF6zlJojvCebXdoR4NFRNJGhUXOzFxozDFD2RcnwxLqc8AFYZLejQnn%2BXCzD8Mxlq89T1Mc5wizbXvFnupm9ZxV9nkkPO82TxKh9X3cxn%2FH5OvSYYSq8Z1PrCRECZrAFoVhduMH7aPZk99SddCMx2PSmZHh50WxdoQD6D3I3sjpg3r0xXawQqGjECav8MG2yUtFmXXA%2FvfYvUwPebXyJLgUK04Pd%2BZ0VxNybKwrrgEhKj6YSU7WB2D3k8XPomCYy8iabwXU8eTmRyBVJnnWGeKG%2FfhrLoNe4IvEincAfXQ3M3Q%2FO14kOTnSkrxx%2B04xBCgwrtv9ydxaLkLdHKYcrWRgT7i5JKcjeYA6B6HeYn19J7xqEOD4y8l1zBXiKBEzCCQhDovcPAGQ1vZAfMa8PpZywrqk5NxXKwnTX7y5aGRz%2FIa6xx9euOYDocNSk%2Ftd76kYhFpQJ2zqU9jW5onTelWe5FHG5SFhxl5eqt3FA3dlzYa76v2o1IxvMeBtny2rintqLRsYn6fJdvj8HwL1n57TeUaODOKkp0K915y%2BouwLO88SnsHWoDsnagMML%2Bi8sGOqUBNH2eC2Y%2FSU%2B5%2BF%2FGeIUIVeR8R0CJzQ2TsLnoYUY7DU9t%2FV4asRv2gmHqSK2MV4F5yfw3LTiEwuNAIplogM7%2Fi9Xnhx%2BGU8jH96KDaBwCO8FOkhR1d18mOhvOBv3eUerkXHXNCny1n39bNdNrk3dg9GtImCMfGdTU%2Btzs536tqaYkopYjLX7ki2UupR23rMSQ6C499W9G5FH1gXRQV9nroUGMBmXH&X-Amz-Signature=b5c149acf509ab463620239ced84f437e8868880f5f1d433174970665c421eab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAIJCQF3%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIAHmAKd0MTUJcMlFTTLBTFNge36IOAdNK%2FSo114SXPULAiEA1VmUiTWgkv60Bngb5UPNfsoPppc4gjLZqcJz%2BMCAJWEqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA8uLj0XxIPd6MnXACrcA8QDqU9%2BUPg3a2c0ccu1M%2F3qGlyZTlN91pVzzH2S1jkoh%2BiW7BmqCSzwY4tuX%2FlnX0VxF6zlJojvCebXdoR4NFRNJGhUXOzFxozDFD2RcnwxLqc8AFYZLejQnn%2BXCzD8Mxlq89T1Mc5wizbXvFnupm9ZxV9nkkPO82TxKh9X3cxn%2FH5OvSYYSq8Z1PrCRECZrAFoVhduMH7aPZk99SddCMx2PSmZHh50WxdoQD6D3I3sjpg3r0xXawQqGjECav8MG2yUtFmXXA%2FvfYvUwPebXyJLgUK04Pd%2BZ0VxNybKwrrgEhKj6YSU7WB2D3k8XPomCYy8iabwXU8eTmRyBVJnnWGeKG%2FfhrLoNe4IvEincAfXQ3M3Q%2FO14kOTnSkrxx%2B04xBCgwrtv9ydxaLkLdHKYcrWRgT7i5JKcjeYA6B6HeYn19J7xqEOD4y8l1zBXiKBEzCCQhDovcPAGQ1vZAfMa8PpZywrqk5NxXKwnTX7y5aGRz%2FIa6xx9euOYDocNSk%2Ftd76kYhFpQJ2zqU9jW5onTelWe5FHG5SFhxl5eqt3FA3dlzYa76v2o1IxvMeBtny2rintqLRsYn6fJdvj8HwL1n57TeUaODOKkp0K915y%2BouwLO88SnsHWoDsnagMML%2Bi8sGOqUBNH2eC2Y%2FSU%2B5%2BF%2FGeIUIVeR8R0CJzQ2TsLnoYUY7DU9t%2FV4asRv2gmHqSK2MV4F5yfw3LTiEwuNAIplogM7%2Fi9Xnhx%2BGU8jH96KDaBwCO8FOkhR1d18mOhvOBv3eUerkXHXNCny1n39bNdNrk3dg9GtImCMfGdTU%2Btzs536tqaYkopYjLX7ki2UupR23rMSQ6C499W9G5FH1gXRQV9nroUGMBmXH&X-Amz-Signature=376bff7f6c1504b45a7120c02e3dde29acb8036ba0b19eb882e32de75b2f446c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
