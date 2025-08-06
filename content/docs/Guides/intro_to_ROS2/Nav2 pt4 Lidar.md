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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN7E7WUR%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIEusKH%2FtJ9Awm%2FisQ%2ByVnQ0PpmLNU2VfQiHjOJNOY6UPAiEAsl%2F1Aiab4wVKvMinY01jPNhg%2BTv6JBzZv2HeKORbzqkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHzqHtPQc7td4OGAVSrcA3C8oieJ6ox%2FNi8OuDpqXkgoiuGVghFR8hmLzSxONREOqXcA82aEti8CZmbfQMVnxAL0K580fd5YZomftydfmFClxA6q7GQ8H1j9KD1oE23cqlhYN9txKdWykszYasYSOG2xacC7RSqpgvvUh%2BPsGg4oYiCyaya49IGZV0oYoCVZHemnHxLW2OTEEzGCpXv%2BHgdHR1hDCY%2Fiy8NHLyvORHDxViyxDVu2R4907KzJ7oBHZMZjiHmCdFcy5N7Iy6yoWbA%2BbTGfzZejV2KdFkUqY3sbA9L7rXwDEv82YBjiSYcoDXI5fnyaGaZN6yXI45lXOP9MJueG1BrjyLSy5sA0jU3SuA5B2hpOd6nm0%2B%2FNGPnWQssDOKVQqmg5M5jsUPgd2bz1jCoKc5e79mPwUgBytOsd7VLTJvGbHqVx3Pk3D%2BDWYM7KKWbSWn6V%2FPnPKDcxSoxATl1xSIH0qFr4HfW6btPq2yzEaHfgOp3SuhoUu0l%2BlXyVJbxWi40T931NGEzmC%2BzW7RcB10P3iDphc4xtBgXf%2B1%2FRk5qB0rAEh66o5YrZvTl1Fc8Vmg1ycRKbxFkiENCr5ZQzpf039W3dIcJehUkmG%2BqNrHCHpCq2%2BvSUOKtSk3J5qi897r0XvvYUMJqFzcQGOqUBCVm%2F8yf25ea2Ada11kcdg6eaXN%2BusuGoq02bvFxvk71PBrDv5a%2FwlNncrnrph2qmcnKgkPGmbEuWZHnCrV%2FuXWssCYGiOlcZS1KL1yVebaIuecHanEXV2GmtaLMFHW6rKXvvppCms40L4iqCe%2FBmhIJupSa%2Bb8al1H5%2Fln8jDNdkNuasKAO3f8opSYSuliF5qCu%2Fkq4dtjt8mWSq2PiizvrNzXLd&X-Amz-Signature=a65b772d00ccc18a4883ad5986c521d1b6f0fd73866d38d2f46edce99022aa1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5R267BV%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIBn31K35F8ep5fEPdEoSHuxMlcmr7v7AMaz5%2Bko89FTLAiEAvj%2FLoHiXCLdIcR9YVrLG3gdsXm2vrGcMVMJUI8szV1oq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOs0ObhjrPDZsWELxyrcA%2BzN4pVIqJ9xXBqHibC5Zl70lN7TzY5W8nlyQIbkhLRA3VKwOymztUOhhazuePSySo6oRgivXiAWLxDQy3HJ7x1Jop5%2BnK3Z1RwGq2ap1p%2BPetR%2FbPf2e7jX795E4CLo3ILv7NjaHHlDZQGB6GzWap4S24jx%2FFfk6XmsaWTcborBBf0FW9w0NfcZaJB4K7eyS8%2BccjYboYJe0r2B40RvFZSL26Qro9nB75Kkb3pJc9CqHwa9Q4JDj7xr5dU16%2B63V7A%2Bt2HgsbVYQP%2B15o1Ht97MpoBkQIHp%2BvwDpX5QcPmpm41FAfq%2F0S9%2BdpzQPbi7KLOKpBXABq%2B2td1EmxZ1z6uzhAED9bLkkFqMWTqBMl9QE2hjqIua9Ud08ctZwwSgiOpojyxsEcVPR%2B%2FU8TAJ5q%2BvdgsU9DYzpWRp69twVXFSRtvay0x%2B3UYI%2BItJuB8LxRNYKKj9lDBbqnsoe%2ByhsWXVeI2s1n2Z2JegBm377Pm5YCvwdfpOny2D8MkiNTjUYuAW8Pbo%2FbrKDS0na4%2BIa1xPrfn%2FSD0nksbi3iqsk3QP6mSo9UXmVzF08ZNpWKgZToJgMaZ%2B4buDOLSE2Pyc1XOpGe9Xli7YhplOUob5N%2B3n2PMa92k%2FpuLpN6WeMJCFzcQGOqUBpuV0JYJregwP3Ba%2FqJevslg%2BJ99kfg9e4pNXz7LsSLWXW5%2BFi5KS0lGXJ88YFP0G1eWtUCByG4bHsJHSIe7Wg0BxUTnqpq3meCP6qtidw4sio%2FZduIAAyQ6mtioQ2J6BQ6B6n%2BemuMUskId1MtpXhGK%2Bqj%2FuoIbaHQzRVg0UYGDJ%2B66XaqhJPJIJaLq1DJUzsYzjYdwC5752%2FfR458yjj%2F5IHFRo&X-Amz-Signature=6bb14764ea87b62379565987cd2a07a7b5e09eea5f3e79be614519b02af9044d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5R267BV%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIBn31K35F8ep5fEPdEoSHuxMlcmr7v7AMaz5%2Bko89FTLAiEAvj%2FLoHiXCLdIcR9YVrLG3gdsXm2vrGcMVMJUI8szV1oq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOs0ObhjrPDZsWELxyrcA%2BzN4pVIqJ9xXBqHibC5Zl70lN7TzY5W8nlyQIbkhLRA3VKwOymztUOhhazuePSySo6oRgivXiAWLxDQy3HJ7x1Jop5%2BnK3Z1RwGq2ap1p%2BPetR%2FbPf2e7jX795E4CLo3ILv7NjaHHlDZQGB6GzWap4S24jx%2FFfk6XmsaWTcborBBf0FW9w0NfcZaJB4K7eyS8%2BccjYboYJe0r2B40RvFZSL26Qro9nB75Kkb3pJc9CqHwa9Q4JDj7xr5dU16%2B63V7A%2Bt2HgsbVYQP%2B15o1Ht97MpoBkQIHp%2BvwDpX5QcPmpm41FAfq%2F0S9%2BdpzQPbi7KLOKpBXABq%2B2td1EmxZ1z6uzhAED9bLkkFqMWTqBMl9QE2hjqIua9Ud08ctZwwSgiOpojyxsEcVPR%2B%2FU8TAJ5q%2BvdgsU9DYzpWRp69twVXFSRtvay0x%2B3UYI%2BItJuB8LxRNYKKj9lDBbqnsoe%2ByhsWXVeI2s1n2Z2JegBm377Pm5YCvwdfpOny2D8MkiNTjUYuAW8Pbo%2FbrKDS0na4%2BIa1xPrfn%2FSD0nksbi3iqsk3QP6mSo9UXmVzF08ZNpWKgZToJgMaZ%2B4buDOLSE2Pyc1XOpGe9Xli7YhplOUob5N%2B3n2PMa92k%2FpuLpN6WeMJCFzcQGOqUBpuV0JYJregwP3Ba%2FqJevslg%2BJ99kfg9e4pNXz7LsSLWXW5%2BFi5KS0lGXJ88YFP0G1eWtUCByG4bHsJHSIe7Wg0BxUTnqpq3meCP6qtidw4sio%2FZduIAAyQ6mtioQ2J6BQ6B6n%2BemuMUskId1MtpXhGK%2Bqj%2FuoIbaHQzRVg0UYGDJ%2B66XaqhJPJIJaLq1DJUzsYzjYdwC5752%2FfR458yjj%2F5IHFRo&X-Amz-Signature=2a801a1f302e6b904a75cfe9a1e16a1a54276ec510e3141948ef338f445de7ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5R267BV%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIBn31K35F8ep5fEPdEoSHuxMlcmr7v7AMaz5%2Bko89FTLAiEAvj%2FLoHiXCLdIcR9YVrLG3gdsXm2vrGcMVMJUI8szV1oq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOs0ObhjrPDZsWELxyrcA%2BzN4pVIqJ9xXBqHibC5Zl70lN7TzY5W8nlyQIbkhLRA3VKwOymztUOhhazuePSySo6oRgivXiAWLxDQy3HJ7x1Jop5%2BnK3Z1RwGq2ap1p%2BPetR%2FbPf2e7jX795E4CLo3ILv7NjaHHlDZQGB6GzWap4S24jx%2FFfk6XmsaWTcborBBf0FW9w0NfcZaJB4K7eyS8%2BccjYboYJe0r2B40RvFZSL26Qro9nB75Kkb3pJc9CqHwa9Q4JDj7xr5dU16%2B63V7A%2Bt2HgsbVYQP%2B15o1Ht97MpoBkQIHp%2BvwDpX5QcPmpm41FAfq%2F0S9%2BdpzQPbi7KLOKpBXABq%2B2td1EmxZ1z6uzhAED9bLkkFqMWTqBMl9QE2hjqIua9Ud08ctZwwSgiOpojyxsEcVPR%2B%2FU8TAJ5q%2BvdgsU9DYzpWRp69twVXFSRtvay0x%2B3UYI%2BItJuB8LxRNYKKj9lDBbqnsoe%2ByhsWXVeI2s1n2Z2JegBm377Pm5YCvwdfpOny2D8MkiNTjUYuAW8Pbo%2FbrKDS0na4%2BIa1xPrfn%2FSD0nksbi3iqsk3QP6mSo9UXmVzF08ZNpWKgZToJgMaZ%2B4buDOLSE2Pyc1XOpGe9Xli7YhplOUob5N%2B3n2PMa92k%2FpuLpN6WeMJCFzcQGOqUBpuV0JYJregwP3Ba%2FqJevslg%2BJ99kfg9e4pNXz7LsSLWXW5%2BFi5KS0lGXJ88YFP0G1eWtUCByG4bHsJHSIe7Wg0BxUTnqpq3meCP6qtidw4sio%2FZduIAAyQ6mtioQ2J6BQ6B6n%2BemuMUskId1MtpXhGK%2Bqj%2FuoIbaHQzRVg0UYGDJ%2B66XaqhJPJIJaLq1DJUzsYzjYdwC5752%2FfR458yjj%2F5IHFRo&X-Amz-Signature=3d420c45111804b396f0159a352717293497053e449ecc364c2765e01a745eee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5R267BV%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIBn31K35F8ep5fEPdEoSHuxMlcmr7v7AMaz5%2Bko89FTLAiEAvj%2FLoHiXCLdIcR9YVrLG3gdsXm2vrGcMVMJUI8szV1oq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOs0ObhjrPDZsWELxyrcA%2BzN4pVIqJ9xXBqHibC5Zl70lN7TzY5W8nlyQIbkhLRA3VKwOymztUOhhazuePSySo6oRgivXiAWLxDQy3HJ7x1Jop5%2BnK3Z1RwGq2ap1p%2BPetR%2FbPf2e7jX795E4CLo3ILv7NjaHHlDZQGB6GzWap4S24jx%2FFfk6XmsaWTcborBBf0FW9w0NfcZaJB4K7eyS8%2BccjYboYJe0r2B40RvFZSL26Qro9nB75Kkb3pJc9CqHwa9Q4JDj7xr5dU16%2B63V7A%2Bt2HgsbVYQP%2B15o1Ht97MpoBkQIHp%2BvwDpX5QcPmpm41FAfq%2F0S9%2BdpzQPbi7KLOKpBXABq%2B2td1EmxZ1z6uzhAED9bLkkFqMWTqBMl9QE2hjqIua9Ud08ctZwwSgiOpojyxsEcVPR%2B%2FU8TAJ5q%2BvdgsU9DYzpWRp69twVXFSRtvay0x%2B3UYI%2BItJuB8LxRNYKKj9lDBbqnsoe%2ByhsWXVeI2s1n2Z2JegBm377Pm5YCvwdfpOny2D8MkiNTjUYuAW8Pbo%2FbrKDS0na4%2BIa1xPrfn%2FSD0nksbi3iqsk3QP6mSo9UXmVzF08ZNpWKgZToJgMaZ%2B4buDOLSE2Pyc1XOpGe9Xli7YhplOUob5N%2B3n2PMa92k%2FpuLpN6WeMJCFzcQGOqUBpuV0JYJregwP3Ba%2FqJevslg%2BJ99kfg9e4pNXz7LsSLWXW5%2BFi5KS0lGXJ88YFP0G1eWtUCByG4bHsJHSIe7Wg0BxUTnqpq3meCP6qtidw4sio%2FZduIAAyQ6mtioQ2J6BQ6B6n%2BemuMUskId1MtpXhGK%2Bqj%2FuoIbaHQzRVg0UYGDJ%2B66XaqhJPJIJaLq1DJUzsYzjYdwC5752%2FfR458yjj%2F5IHFRo&X-Amz-Signature=755d38364bf40e7f6ad5d1ff7570ec69c60daee845a7194615993a75fcde4a2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5R267BV%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIBn31K35F8ep5fEPdEoSHuxMlcmr7v7AMaz5%2Bko89FTLAiEAvj%2FLoHiXCLdIcR9YVrLG3gdsXm2vrGcMVMJUI8szV1oq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOs0ObhjrPDZsWELxyrcA%2BzN4pVIqJ9xXBqHibC5Zl70lN7TzY5W8nlyQIbkhLRA3VKwOymztUOhhazuePSySo6oRgivXiAWLxDQy3HJ7x1Jop5%2BnK3Z1RwGq2ap1p%2BPetR%2FbPf2e7jX795E4CLo3ILv7NjaHHlDZQGB6GzWap4S24jx%2FFfk6XmsaWTcborBBf0FW9w0NfcZaJB4K7eyS8%2BccjYboYJe0r2B40RvFZSL26Qro9nB75Kkb3pJc9CqHwa9Q4JDj7xr5dU16%2B63V7A%2Bt2HgsbVYQP%2B15o1Ht97MpoBkQIHp%2BvwDpX5QcPmpm41FAfq%2F0S9%2BdpzQPbi7KLOKpBXABq%2B2td1EmxZ1z6uzhAED9bLkkFqMWTqBMl9QE2hjqIua9Ud08ctZwwSgiOpojyxsEcVPR%2B%2FU8TAJ5q%2BvdgsU9DYzpWRp69twVXFSRtvay0x%2B3UYI%2BItJuB8LxRNYKKj9lDBbqnsoe%2ByhsWXVeI2s1n2Z2JegBm377Pm5YCvwdfpOny2D8MkiNTjUYuAW8Pbo%2FbrKDS0na4%2BIa1xPrfn%2FSD0nksbi3iqsk3QP6mSo9UXmVzF08ZNpWKgZToJgMaZ%2B4buDOLSE2Pyc1XOpGe9Xli7YhplOUob5N%2B3n2PMa92k%2FpuLpN6WeMJCFzcQGOqUBpuV0JYJregwP3Ba%2FqJevslg%2BJ99kfg9e4pNXz7LsSLWXW5%2BFi5KS0lGXJ88YFP0G1eWtUCByG4bHsJHSIe7Wg0BxUTnqpq3meCP6qtidw4sio%2FZduIAAyQ6mtioQ2J6BQ6B6n%2BemuMUskId1MtpXhGK%2Bqj%2FuoIbaHQzRVg0UYGDJ%2B66XaqhJPJIJaLq1DJUzsYzjYdwC5752%2FfR458yjj%2F5IHFRo&X-Amz-Signature=4dc7042b2d1abe409322e6d9ed1a74aac4b28ef7547a307279d6aaddc7df4c80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5R267BV%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIBn31K35F8ep5fEPdEoSHuxMlcmr7v7AMaz5%2Bko89FTLAiEAvj%2FLoHiXCLdIcR9YVrLG3gdsXm2vrGcMVMJUI8szV1oq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOs0ObhjrPDZsWELxyrcA%2BzN4pVIqJ9xXBqHibC5Zl70lN7TzY5W8nlyQIbkhLRA3VKwOymztUOhhazuePSySo6oRgivXiAWLxDQy3HJ7x1Jop5%2BnK3Z1RwGq2ap1p%2BPetR%2FbPf2e7jX795E4CLo3ILv7NjaHHlDZQGB6GzWap4S24jx%2FFfk6XmsaWTcborBBf0FW9w0NfcZaJB4K7eyS8%2BccjYboYJe0r2B40RvFZSL26Qro9nB75Kkb3pJc9CqHwa9Q4JDj7xr5dU16%2B63V7A%2Bt2HgsbVYQP%2B15o1Ht97MpoBkQIHp%2BvwDpX5QcPmpm41FAfq%2F0S9%2BdpzQPbi7KLOKpBXABq%2B2td1EmxZ1z6uzhAED9bLkkFqMWTqBMl9QE2hjqIua9Ud08ctZwwSgiOpojyxsEcVPR%2B%2FU8TAJ5q%2BvdgsU9DYzpWRp69twVXFSRtvay0x%2B3UYI%2BItJuB8LxRNYKKj9lDBbqnsoe%2ByhsWXVeI2s1n2Z2JegBm377Pm5YCvwdfpOny2D8MkiNTjUYuAW8Pbo%2FbrKDS0na4%2BIa1xPrfn%2FSD0nksbi3iqsk3QP6mSo9UXmVzF08ZNpWKgZToJgMaZ%2B4buDOLSE2Pyc1XOpGe9Xli7YhplOUob5N%2B3n2PMa92k%2FpuLpN6WeMJCFzcQGOqUBpuV0JYJregwP3Ba%2FqJevslg%2BJ99kfg9e4pNXz7LsSLWXW5%2BFi5KS0lGXJ88YFP0G1eWtUCByG4bHsJHSIe7Wg0BxUTnqpq3meCP6qtidw4sio%2FZduIAAyQ6mtioQ2J6BQ6B6n%2BemuMUskId1MtpXhGK%2Bqj%2FuoIbaHQzRVg0UYGDJ%2B66XaqhJPJIJaLq1DJUzsYzjYdwC5752%2FfR458yjj%2F5IHFRo&X-Amz-Signature=22457831b024c465550d24aed31da6fafc74fda18d0fea9a828d8f28cc2c4171&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5R267BV%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIBn31K35F8ep5fEPdEoSHuxMlcmr7v7AMaz5%2Bko89FTLAiEAvj%2FLoHiXCLdIcR9YVrLG3gdsXm2vrGcMVMJUI8szV1oq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOs0ObhjrPDZsWELxyrcA%2BzN4pVIqJ9xXBqHibC5Zl70lN7TzY5W8nlyQIbkhLRA3VKwOymztUOhhazuePSySo6oRgivXiAWLxDQy3HJ7x1Jop5%2BnK3Z1RwGq2ap1p%2BPetR%2FbPf2e7jX795E4CLo3ILv7NjaHHlDZQGB6GzWap4S24jx%2FFfk6XmsaWTcborBBf0FW9w0NfcZaJB4K7eyS8%2BccjYboYJe0r2B40RvFZSL26Qro9nB75Kkb3pJc9CqHwa9Q4JDj7xr5dU16%2B63V7A%2Bt2HgsbVYQP%2B15o1Ht97MpoBkQIHp%2BvwDpX5QcPmpm41FAfq%2F0S9%2BdpzQPbi7KLOKpBXABq%2B2td1EmxZ1z6uzhAED9bLkkFqMWTqBMl9QE2hjqIua9Ud08ctZwwSgiOpojyxsEcVPR%2B%2FU8TAJ5q%2BvdgsU9DYzpWRp69twVXFSRtvay0x%2B3UYI%2BItJuB8LxRNYKKj9lDBbqnsoe%2ByhsWXVeI2s1n2Z2JegBm377Pm5YCvwdfpOny2D8MkiNTjUYuAW8Pbo%2FbrKDS0na4%2BIa1xPrfn%2FSD0nksbi3iqsk3QP6mSo9UXmVzF08ZNpWKgZToJgMaZ%2B4buDOLSE2Pyc1XOpGe9Xli7YhplOUob5N%2B3n2PMa92k%2FpuLpN6WeMJCFzcQGOqUBpuV0JYJregwP3Ba%2FqJevslg%2BJ99kfg9e4pNXz7LsSLWXW5%2BFi5KS0lGXJ88YFP0G1eWtUCByG4bHsJHSIe7Wg0BxUTnqpq3meCP6qtidw4sio%2FZduIAAyQ6mtioQ2J6BQ6B6n%2BemuMUskId1MtpXhGK%2Bqj%2FuoIbaHQzRVg0UYGDJ%2B66XaqhJPJIJaLq1DJUzsYzjYdwC5752%2FfR458yjj%2F5IHFRo&X-Amz-Signature=6356193431e1a70ac71daf00ea6f48ceab4c921f1eba1839930f36fbc7c2c424&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5R267BV%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIBn31K35F8ep5fEPdEoSHuxMlcmr7v7AMaz5%2Bko89FTLAiEAvj%2FLoHiXCLdIcR9YVrLG3gdsXm2vrGcMVMJUI8szV1oq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOs0ObhjrPDZsWELxyrcA%2BzN4pVIqJ9xXBqHibC5Zl70lN7TzY5W8nlyQIbkhLRA3VKwOymztUOhhazuePSySo6oRgivXiAWLxDQy3HJ7x1Jop5%2BnK3Z1RwGq2ap1p%2BPetR%2FbPf2e7jX795E4CLo3ILv7NjaHHlDZQGB6GzWap4S24jx%2FFfk6XmsaWTcborBBf0FW9w0NfcZaJB4K7eyS8%2BccjYboYJe0r2B40RvFZSL26Qro9nB75Kkb3pJc9CqHwa9Q4JDj7xr5dU16%2B63V7A%2Bt2HgsbVYQP%2B15o1Ht97MpoBkQIHp%2BvwDpX5QcPmpm41FAfq%2F0S9%2BdpzQPbi7KLOKpBXABq%2B2td1EmxZ1z6uzhAED9bLkkFqMWTqBMl9QE2hjqIua9Ud08ctZwwSgiOpojyxsEcVPR%2B%2FU8TAJ5q%2BvdgsU9DYzpWRp69twVXFSRtvay0x%2B3UYI%2BItJuB8LxRNYKKj9lDBbqnsoe%2ByhsWXVeI2s1n2Z2JegBm377Pm5YCvwdfpOny2D8MkiNTjUYuAW8Pbo%2FbrKDS0na4%2BIa1xPrfn%2FSD0nksbi3iqsk3QP6mSo9UXmVzF08ZNpWKgZToJgMaZ%2B4buDOLSE2Pyc1XOpGe9Xli7YhplOUob5N%2B3n2PMa92k%2FpuLpN6WeMJCFzcQGOqUBpuV0JYJregwP3Ba%2FqJevslg%2BJ99kfg9e4pNXz7LsSLWXW5%2BFi5KS0lGXJ88YFP0G1eWtUCByG4bHsJHSIe7Wg0BxUTnqpq3meCP6qtidw4sio%2FZduIAAyQ6mtioQ2J6BQ6B6n%2BemuMUskId1MtpXhGK%2Bqj%2FuoIbaHQzRVg0UYGDJ%2B66XaqhJPJIJaLq1DJUzsYzjYdwC5752%2FfR458yjj%2F5IHFRo&X-Amz-Signature=bd5aacf12eb07e0aaf0aca62a20c54dee035526e0645fc4e3a0fbd47f7fde308&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5R267BV%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIBn31K35F8ep5fEPdEoSHuxMlcmr7v7AMaz5%2Bko89FTLAiEAvj%2FLoHiXCLdIcR9YVrLG3gdsXm2vrGcMVMJUI8szV1oq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOs0ObhjrPDZsWELxyrcA%2BzN4pVIqJ9xXBqHibC5Zl70lN7TzY5W8nlyQIbkhLRA3VKwOymztUOhhazuePSySo6oRgivXiAWLxDQy3HJ7x1Jop5%2BnK3Z1RwGq2ap1p%2BPetR%2FbPf2e7jX795E4CLo3ILv7NjaHHlDZQGB6GzWap4S24jx%2FFfk6XmsaWTcborBBf0FW9w0NfcZaJB4K7eyS8%2BccjYboYJe0r2B40RvFZSL26Qro9nB75Kkb3pJc9CqHwa9Q4JDj7xr5dU16%2B63V7A%2Bt2HgsbVYQP%2B15o1Ht97MpoBkQIHp%2BvwDpX5QcPmpm41FAfq%2F0S9%2BdpzQPbi7KLOKpBXABq%2B2td1EmxZ1z6uzhAED9bLkkFqMWTqBMl9QE2hjqIua9Ud08ctZwwSgiOpojyxsEcVPR%2B%2FU8TAJ5q%2BvdgsU9DYzpWRp69twVXFSRtvay0x%2B3UYI%2BItJuB8LxRNYKKj9lDBbqnsoe%2ByhsWXVeI2s1n2Z2JegBm377Pm5YCvwdfpOny2D8MkiNTjUYuAW8Pbo%2FbrKDS0na4%2BIa1xPrfn%2FSD0nksbi3iqsk3QP6mSo9UXmVzF08ZNpWKgZToJgMaZ%2B4buDOLSE2Pyc1XOpGe9Xli7YhplOUob5N%2B3n2PMa92k%2FpuLpN6WeMJCFzcQGOqUBpuV0JYJregwP3Ba%2FqJevslg%2BJ99kfg9e4pNXz7LsSLWXW5%2BFi5KS0lGXJ88YFP0G1eWtUCByG4bHsJHSIe7Wg0BxUTnqpq3meCP6qtidw4sio%2FZduIAAyQ6mtioQ2J6BQ6B6n%2BemuMUskId1MtpXhGK%2Bqj%2FuoIbaHQzRVg0UYGDJ%2B66XaqhJPJIJaLq1DJUzsYzjYdwC5752%2FfR458yjj%2F5IHFRo&X-Amz-Signature=35c188794e12d574415f7ce9e0ecf26ce2e4bef8765d4a24d6f45b42c30d28e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5R267BV%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIBn31K35F8ep5fEPdEoSHuxMlcmr7v7AMaz5%2Bko89FTLAiEAvj%2FLoHiXCLdIcR9YVrLG3gdsXm2vrGcMVMJUI8szV1oq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOs0ObhjrPDZsWELxyrcA%2BzN4pVIqJ9xXBqHibC5Zl70lN7TzY5W8nlyQIbkhLRA3VKwOymztUOhhazuePSySo6oRgivXiAWLxDQy3HJ7x1Jop5%2BnK3Z1RwGq2ap1p%2BPetR%2FbPf2e7jX795E4CLo3ILv7NjaHHlDZQGB6GzWap4S24jx%2FFfk6XmsaWTcborBBf0FW9w0NfcZaJB4K7eyS8%2BccjYboYJe0r2B40RvFZSL26Qro9nB75Kkb3pJc9CqHwa9Q4JDj7xr5dU16%2B63V7A%2Bt2HgsbVYQP%2B15o1Ht97MpoBkQIHp%2BvwDpX5QcPmpm41FAfq%2F0S9%2BdpzQPbi7KLOKpBXABq%2B2td1EmxZ1z6uzhAED9bLkkFqMWTqBMl9QE2hjqIua9Ud08ctZwwSgiOpojyxsEcVPR%2B%2FU8TAJ5q%2BvdgsU9DYzpWRp69twVXFSRtvay0x%2B3UYI%2BItJuB8LxRNYKKj9lDBbqnsoe%2ByhsWXVeI2s1n2Z2JegBm377Pm5YCvwdfpOny2D8MkiNTjUYuAW8Pbo%2FbrKDS0na4%2BIa1xPrfn%2FSD0nksbi3iqsk3QP6mSo9UXmVzF08ZNpWKgZToJgMaZ%2B4buDOLSE2Pyc1XOpGe9Xli7YhplOUob5N%2B3n2PMa92k%2FpuLpN6WeMJCFzcQGOqUBpuV0JYJregwP3Ba%2FqJevslg%2BJ99kfg9e4pNXz7LsSLWXW5%2BFi5KS0lGXJ88YFP0G1eWtUCByG4bHsJHSIe7Wg0BxUTnqpq3meCP6qtidw4sio%2FZduIAAyQ6mtioQ2J6BQ6B6n%2BemuMUskId1MtpXhGK%2Bqj%2FuoIbaHQzRVg0UYGDJ%2B66XaqhJPJIJaLq1DJUzsYzjYdwC5752%2FfR458yjj%2F5IHFRo&X-Amz-Signature=755d38364bf40e7f6ad5d1ff7570ec69c60daee845a7194615993a75fcde4a2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
