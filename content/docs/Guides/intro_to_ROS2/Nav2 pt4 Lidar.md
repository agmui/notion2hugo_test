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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVRZJ7EU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAGxlcX%2B9w6ybob6KSSKZ5YzgWlyF18A5857XbBY1RnwIhAPUuIc%2FLKheQ0vQ0%2B4Xvo3yHZJ9oU8GujDjqax8Z2%2BDvKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwqvy6K3Rn5mhDbTC0q3AMz8L2%2BMAZzhLpanOhdnRGZcog8oECl27W4aO%2FtxltgPDQqb2S%2BNiDFV%2BUcCDT1s4iGnEB85%2BVfTc%2BbLYeKziLHtTIVam8gIrZQLQHJemDJ4YiPbMJaYosl8x8BEtkrbXTbrYS1tbq%2BDTMEej4CZY5FxnbNc%2BOU%2BZi%2BWgvDPte%2BYK6dzfYk0R%2Bs%2FrsvSbTeMkDia9bher259Eun76EVfabPv4ybDO3qcvIE16XuQZdw28fr50xfhN2MVzk1FdeqFfoMOrCjInXzBWTtIGCW63cemADGEqZAfCdDN%2FD6Wgb9IAFuHlg7roeRoQ9mXVi%2Fpb7efPx6jVPvCPZx7pWkgSKayTo6z9blLNDalnDltxIMCtZZ0PTLTaWUUR%2BCPQe6qU6gIfoxUlBvVQNwGbeK%2FC56BflNH4Pe%2B%2FEvlty2YGpoR9z3Om1CNuhasc%2Fyt%2F7BAiYc6U%2Ft9E5TiyQieJR0931RRUPqAgntC8pz1NsgogZF9naS5Ec693V%2Bg9Vp3vFbb2rR9bZxC7r0Tt4Ekh2h0U0cLpUiexvxhLX3lMZTPqnCz1s4HdSxz0cZHx41Rv6mBFfohntzxNvPFOI3bp76VYJGwnmNmZxviJVBzqGIlSh8fXjNeydnV%2BmJwL8OiTCao%2BfEBjqkATzSFvLwJDhiiC%2FfDR46VZGA383L07aFhiPZm4c0UENEo4f40yKPNEXgBxBF%2BFc6RRxHGghLRZnXVk1h0pDCSyDGvikirLz1DaWbL7R6cdBm84ESd2jyxJpdDFlH1Sco9Tfs2C4ngaUHcV027Dx%2BjyED64lacYjn7Y29I4SapzJGKLWXjdOXTRajcuvuAR5hcoqeqnLmDyXLex5fsAfK5RHKQF7g&X-Amz-Signature=b3ec2f54c3ad1c19dd293be45ceb359a5e9f88e65aec0862394d585b93be708d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633QMFEAL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5K%2FLUMPwWTVPUiwJf1wBkLj2a%2FOaBlDVYF5RZeczDbgIgC97AC5CpECphsHkifLNHsi0RJUyr8AqpbVPyV8kLnIEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfQ7uekDTs7Bps71yrcA%2BiFMNcyEVMhb072tQfoI%2FunxhXmsqfQTiKzbVEzfyLhkGlMtVZQOeZrMIHX61AdIQ8JGO%2Bc2tCjD5Ojf101VAJO%2FuXGlr%2BiMnE%2FeCtLt44ncdJ1shGC0iRut6WK%2BRm4s4VqWsMGAfXIhoVA64HnKr294FVOBmJaiwXhFy5V9zPcCYosaD%2FSctx%2BSPVgYn1%2Fv3bscY4ETSRQQ47GVymsC%2FD09fVezI%2BofI5ZXbXgRI945zsMouI3Z9KDQ31WwChrOEIw4fFnC7sK5KbkvbGMwqe%2FXdNOSnBLFMoPt3JOUMdhPZUNruorEON7d%2F3BWb%2BIPali2amQlfp8NZB7%2Fmz5JIXdRD%2Bcy01qDsxQLcRydC5bQ%2ByQj%2FesMbaOB8e7PUeCFH7C%2F1DkdOYv%2FAGs6O8SxeIU8U9VPV%2FviD%2BVcZRx1KRZ39Te9fgi66LCxGeiRnO8vUb4m0pitMQ0IdAQx8%2BKgyYFAVk%2FEKtSeYXFNgJczlN6uYwnDlgLaiug2L%2Fk9RM2WtkUWBfIVGHc29YUEQMinUbWldmMw6%2FUERHiiB8u38lmFP6L0kASIO7FD5rZPDfxia0Bl%2FwBwLVSKN57O3CE5S%2B00mznsJHufyy9ewdTHRU1uuDA%2Fum5B8Zt9ox0MMKi58QGOqUB8yIb06H%2FX4UHrsQGtRbd6zcTRcnx69OOfhyCTTlsaCbtF1mEY9SIN0mExntga%2F3ZkosWoi%2Bk9J1XEB1BbWyuQft0ZtzbTTGdTkBFjI8punWDnWvz0m5t3KaswA88zJKuOjYYHTdWLe8MOhMqgLaK17Bh04nmmL6qXy2KIJlFxszxJkwymn40Lpr0KV%2BbMKjvoDn7V6EUJ%2BSjuI9iTShI4%2Fp14Xlu&X-Amz-Signature=6f2fcb50387c3c82b3f35aac5e1c7f94e1f115b0b793d47a4e6d85b97599e45d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633QMFEAL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5K%2FLUMPwWTVPUiwJf1wBkLj2a%2FOaBlDVYF5RZeczDbgIgC97AC5CpECphsHkifLNHsi0RJUyr8AqpbVPyV8kLnIEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfQ7uekDTs7Bps71yrcA%2BiFMNcyEVMhb072tQfoI%2FunxhXmsqfQTiKzbVEzfyLhkGlMtVZQOeZrMIHX61AdIQ8JGO%2Bc2tCjD5Ojf101VAJO%2FuXGlr%2BiMnE%2FeCtLt44ncdJ1shGC0iRut6WK%2BRm4s4VqWsMGAfXIhoVA64HnKr294FVOBmJaiwXhFy5V9zPcCYosaD%2FSctx%2BSPVgYn1%2Fv3bscY4ETSRQQ47GVymsC%2FD09fVezI%2BofI5ZXbXgRI945zsMouI3Z9KDQ31WwChrOEIw4fFnC7sK5KbkvbGMwqe%2FXdNOSnBLFMoPt3JOUMdhPZUNruorEON7d%2F3BWb%2BIPali2amQlfp8NZB7%2Fmz5JIXdRD%2Bcy01qDsxQLcRydC5bQ%2ByQj%2FesMbaOB8e7PUeCFH7C%2F1DkdOYv%2FAGs6O8SxeIU8U9VPV%2FviD%2BVcZRx1KRZ39Te9fgi66LCxGeiRnO8vUb4m0pitMQ0IdAQx8%2BKgyYFAVk%2FEKtSeYXFNgJczlN6uYwnDlgLaiug2L%2Fk9RM2WtkUWBfIVGHc29YUEQMinUbWldmMw6%2FUERHiiB8u38lmFP6L0kASIO7FD5rZPDfxia0Bl%2FwBwLVSKN57O3CE5S%2B00mznsJHufyy9ewdTHRU1uuDA%2Fum5B8Zt9ox0MMKi58QGOqUB8yIb06H%2FX4UHrsQGtRbd6zcTRcnx69OOfhyCTTlsaCbtF1mEY9SIN0mExntga%2F3ZkosWoi%2Bk9J1XEB1BbWyuQft0ZtzbTTGdTkBFjI8punWDnWvz0m5t3KaswA88zJKuOjYYHTdWLe8MOhMqgLaK17Bh04nmmL6qXy2KIJlFxszxJkwymn40Lpr0KV%2BbMKjvoDn7V6EUJ%2BSjuI9iTShI4%2Fp14Xlu&X-Amz-Signature=d101c296fab10dff5f1f1e6e4b8603a062998606213040a024d8d406270edcfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633QMFEAL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5K%2FLUMPwWTVPUiwJf1wBkLj2a%2FOaBlDVYF5RZeczDbgIgC97AC5CpECphsHkifLNHsi0RJUyr8AqpbVPyV8kLnIEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfQ7uekDTs7Bps71yrcA%2BiFMNcyEVMhb072tQfoI%2FunxhXmsqfQTiKzbVEzfyLhkGlMtVZQOeZrMIHX61AdIQ8JGO%2Bc2tCjD5Ojf101VAJO%2FuXGlr%2BiMnE%2FeCtLt44ncdJ1shGC0iRut6WK%2BRm4s4VqWsMGAfXIhoVA64HnKr294FVOBmJaiwXhFy5V9zPcCYosaD%2FSctx%2BSPVgYn1%2Fv3bscY4ETSRQQ47GVymsC%2FD09fVezI%2BofI5ZXbXgRI945zsMouI3Z9KDQ31WwChrOEIw4fFnC7sK5KbkvbGMwqe%2FXdNOSnBLFMoPt3JOUMdhPZUNruorEON7d%2F3BWb%2BIPali2amQlfp8NZB7%2Fmz5JIXdRD%2Bcy01qDsxQLcRydC5bQ%2ByQj%2FesMbaOB8e7PUeCFH7C%2F1DkdOYv%2FAGs6O8SxeIU8U9VPV%2FviD%2BVcZRx1KRZ39Te9fgi66LCxGeiRnO8vUb4m0pitMQ0IdAQx8%2BKgyYFAVk%2FEKtSeYXFNgJczlN6uYwnDlgLaiug2L%2Fk9RM2WtkUWBfIVGHc29YUEQMinUbWldmMw6%2FUERHiiB8u38lmFP6L0kASIO7FD5rZPDfxia0Bl%2FwBwLVSKN57O3CE5S%2B00mznsJHufyy9ewdTHRU1uuDA%2Fum5B8Zt9ox0MMKi58QGOqUB8yIb06H%2FX4UHrsQGtRbd6zcTRcnx69OOfhyCTTlsaCbtF1mEY9SIN0mExntga%2F3ZkosWoi%2Bk9J1XEB1BbWyuQft0ZtzbTTGdTkBFjI8punWDnWvz0m5t3KaswA88zJKuOjYYHTdWLe8MOhMqgLaK17Bh04nmmL6qXy2KIJlFxszxJkwymn40Lpr0KV%2BbMKjvoDn7V6EUJ%2BSjuI9iTShI4%2Fp14Xlu&X-Amz-Signature=84583ed46e28e84171fe864038549b6eb1c85ba1763ce7dde3d8e745dffbca18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633QMFEAL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5K%2FLUMPwWTVPUiwJf1wBkLj2a%2FOaBlDVYF5RZeczDbgIgC97AC5CpECphsHkifLNHsi0RJUyr8AqpbVPyV8kLnIEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfQ7uekDTs7Bps71yrcA%2BiFMNcyEVMhb072tQfoI%2FunxhXmsqfQTiKzbVEzfyLhkGlMtVZQOeZrMIHX61AdIQ8JGO%2Bc2tCjD5Ojf101VAJO%2FuXGlr%2BiMnE%2FeCtLt44ncdJ1shGC0iRut6WK%2BRm4s4VqWsMGAfXIhoVA64HnKr294FVOBmJaiwXhFy5V9zPcCYosaD%2FSctx%2BSPVgYn1%2Fv3bscY4ETSRQQ47GVymsC%2FD09fVezI%2BofI5ZXbXgRI945zsMouI3Z9KDQ31WwChrOEIw4fFnC7sK5KbkvbGMwqe%2FXdNOSnBLFMoPt3JOUMdhPZUNruorEON7d%2F3BWb%2BIPali2amQlfp8NZB7%2Fmz5JIXdRD%2Bcy01qDsxQLcRydC5bQ%2ByQj%2FesMbaOB8e7PUeCFH7C%2F1DkdOYv%2FAGs6O8SxeIU8U9VPV%2FviD%2BVcZRx1KRZ39Te9fgi66LCxGeiRnO8vUb4m0pitMQ0IdAQx8%2BKgyYFAVk%2FEKtSeYXFNgJczlN6uYwnDlgLaiug2L%2Fk9RM2WtkUWBfIVGHc29YUEQMinUbWldmMw6%2FUERHiiB8u38lmFP6L0kASIO7FD5rZPDfxia0Bl%2FwBwLVSKN57O3CE5S%2B00mznsJHufyy9ewdTHRU1uuDA%2Fum5B8Zt9ox0MMKi58QGOqUB8yIb06H%2FX4UHrsQGtRbd6zcTRcnx69OOfhyCTTlsaCbtF1mEY9SIN0mExntga%2F3ZkosWoi%2Bk9J1XEB1BbWyuQft0ZtzbTTGdTkBFjI8punWDnWvz0m5t3KaswA88zJKuOjYYHTdWLe8MOhMqgLaK17Bh04nmmL6qXy2KIJlFxszxJkwymn40Lpr0KV%2BbMKjvoDn7V6EUJ%2BSjuI9iTShI4%2Fp14Xlu&X-Amz-Signature=55f011954a33f2dfced6adff9013c7c70e5acdb7f39a104655ed3cd03d0b6c98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633QMFEAL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5K%2FLUMPwWTVPUiwJf1wBkLj2a%2FOaBlDVYF5RZeczDbgIgC97AC5CpECphsHkifLNHsi0RJUyr8AqpbVPyV8kLnIEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfQ7uekDTs7Bps71yrcA%2BiFMNcyEVMhb072tQfoI%2FunxhXmsqfQTiKzbVEzfyLhkGlMtVZQOeZrMIHX61AdIQ8JGO%2Bc2tCjD5Ojf101VAJO%2FuXGlr%2BiMnE%2FeCtLt44ncdJ1shGC0iRut6WK%2BRm4s4VqWsMGAfXIhoVA64HnKr294FVOBmJaiwXhFy5V9zPcCYosaD%2FSctx%2BSPVgYn1%2Fv3bscY4ETSRQQ47GVymsC%2FD09fVezI%2BofI5ZXbXgRI945zsMouI3Z9KDQ31WwChrOEIw4fFnC7sK5KbkvbGMwqe%2FXdNOSnBLFMoPt3JOUMdhPZUNruorEON7d%2F3BWb%2BIPali2amQlfp8NZB7%2Fmz5JIXdRD%2Bcy01qDsxQLcRydC5bQ%2ByQj%2FesMbaOB8e7PUeCFH7C%2F1DkdOYv%2FAGs6O8SxeIU8U9VPV%2FviD%2BVcZRx1KRZ39Te9fgi66LCxGeiRnO8vUb4m0pitMQ0IdAQx8%2BKgyYFAVk%2FEKtSeYXFNgJczlN6uYwnDlgLaiug2L%2Fk9RM2WtkUWBfIVGHc29YUEQMinUbWldmMw6%2FUERHiiB8u38lmFP6L0kASIO7FD5rZPDfxia0Bl%2FwBwLVSKN57O3CE5S%2B00mznsJHufyy9ewdTHRU1uuDA%2Fum5B8Zt9ox0MMKi58QGOqUB8yIb06H%2FX4UHrsQGtRbd6zcTRcnx69OOfhyCTTlsaCbtF1mEY9SIN0mExntga%2F3ZkosWoi%2Bk9J1XEB1BbWyuQft0ZtzbTTGdTkBFjI8punWDnWvz0m5t3KaswA88zJKuOjYYHTdWLe8MOhMqgLaK17Bh04nmmL6qXy2KIJlFxszxJkwymn40Lpr0KV%2BbMKjvoDn7V6EUJ%2BSjuI9iTShI4%2Fp14Xlu&X-Amz-Signature=a5eb97ec3f829235c6319f1d877c0fd5a6a5618504ae0a66c8432c7c723164ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633QMFEAL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5K%2FLUMPwWTVPUiwJf1wBkLj2a%2FOaBlDVYF5RZeczDbgIgC97AC5CpECphsHkifLNHsi0RJUyr8AqpbVPyV8kLnIEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfQ7uekDTs7Bps71yrcA%2BiFMNcyEVMhb072tQfoI%2FunxhXmsqfQTiKzbVEzfyLhkGlMtVZQOeZrMIHX61AdIQ8JGO%2Bc2tCjD5Ojf101VAJO%2FuXGlr%2BiMnE%2FeCtLt44ncdJ1shGC0iRut6WK%2BRm4s4VqWsMGAfXIhoVA64HnKr294FVOBmJaiwXhFy5V9zPcCYosaD%2FSctx%2BSPVgYn1%2Fv3bscY4ETSRQQ47GVymsC%2FD09fVezI%2BofI5ZXbXgRI945zsMouI3Z9KDQ31WwChrOEIw4fFnC7sK5KbkvbGMwqe%2FXdNOSnBLFMoPt3JOUMdhPZUNruorEON7d%2F3BWb%2BIPali2amQlfp8NZB7%2Fmz5JIXdRD%2Bcy01qDsxQLcRydC5bQ%2ByQj%2FesMbaOB8e7PUeCFH7C%2F1DkdOYv%2FAGs6O8SxeIU8U9VPV%2FviD%2BVcZRx1KRZ39Te9fgi66LCxGeiRnO8vUb4m0pitMQ0IdAQx8%2BKgyYFAVk%2FEKtSeYXFNgJczlN6uYwnDlgLaiug2L%2Fk9RM2WtkUWBfIVGHc29YUEQMinUbWldmMw6%2FUERHiiB8u38lmFP6L0kASIO7FD5rZPDfxia0Bl%2FwBwLVSKN57O3CE5S%2B00mznsJHufyy9ewdTHRU1uuDA%2Fum5B8Zt9ox0MMKi58QGOqUB8yIb06H%2FX4UHrsQGtRbd6zcTRcnx69OOfhyCTTlsaCbtF1mEY9SIN0mExntga%2F3ZkosWoi%2Bk9J1XEB1BbWyuQft0ZtzbTTGdTkBFjI8punWDnWvz0m5t3KaswA88zJKuOjYYHTdWLe8MOhMqgLaK17Bh04nmmL6qXy2KIJlFxszxJkwymn40Lpr0KV%2BbMKjvoDn7V6EUJ%2BSjuI9iTShI4%2Fp14Xlu&X-Amz-Signature=73f6c3f9f7150b791b3e43c6f79fcba590947da5da6174c22e23020814a33c35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633QMFEAL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5K%2FLUMPwWTVPUiwJf1wBkLj2a%2FOaBlDVYF5RZeczDbgIgC97AC5CpECphsHkifLNHsi0RJUyr8AqpbVPyV8kLnIEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfQ7uekDTs7Bps71yrcA%2BiFMNcyEVMhb072tQfoI%2FunxhXmsqfQTiKzbVEzfyLhkGlMtVZQOeZrMIHX61AdIQ8JGO%2Bc2tCjD5Ojf101VAJO%2FuXGlr%2BiMnE%2FeCtLt44ncdJ1shGC0iRut6WK%2BRm4s4VqWsMGAfXIhoVA64HnKr294FVOBmJaiwXhFy5V9zPcCYosaD%2FSctx%2BSPVgYn1%2Fv3bscY4ETSRQQ47GVymsC%2FD09fVezI%2BofI5ZXbXgRI945zsMouI3Z9KDQ31WwChrOEIw4fFnC7sK5KbkvbGMwqe%2FXdNOSnBLFMoPt3JOUMdhPZUNruorEON7d%2F3BWb%2BIPali2amQlfp8NZB7%2Fmz5JIXdRD%2Bcy01qDsxQLcRydC5bQ%2ByQj%2FesMbaOB8e7PUeCFH7C%2F1DkdOYv%2FAGs6O8SxeIU8U9VPV%2FviD%2BVcZRx1KRZ39Te9fgi66LCxGeiRnO8vUb4m0pitMQ0IdAQx8%2BKgyYFAVk%2FEKtSeYXFNgJczlN6uYwnDlgLaiug2L%2Fk9RM2WtkUWBfIVGHc29YUEQMinUbWldmMw6%2FUERHiiB8u38lmFP6L0kASIO7FD5rZPDfxia0Bl%2FwBwLVSKN57O3CE5S%2B00mznsJHufyy9ewdTHRU1uuDA%2Fum5B8Zt9ox0MMKi58QGOqUB8yIb06H%2FX4UHrsQGtRbd6zcTRcnx69OOfhyCTTlsaCbtF1mEY9SIN0mExntga%2F3ZkosWoi%2Bk9J1XEB1BbWyuQft0ZtzbTTGdTkBFjI8punWDnWvz0m5t3KaswA88zJKuOjYYHTdWLe8MOhMqgLaK17Bh04nmmL6qXy2KIJlFxszxJkwymn40Lpr0KV%2BbMKjvoDn7V6EUJ%2BSjuI9iTShI4%2Fp14Xlu&X-Amz-Signature=b897099b2e0e0d7898dacf0a4fe08d4a7f6835119c1cf248367103d62fdaa6f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633QMFEAL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5K%2FLUMPwWTVPUiwJf1wBkLj2a%2FOaBlDVYF5RZeczDbgIgC97AC5CpECphsHkifLNHsi0RJUyr8AqpbVPyV8kLnIEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfQ7uekDTs7Bps71yrcA%2BiFMNcyEVMhb072tQfoI%2FunxhXmsqfQTiKzbVEzfyLhkGlMtVZQOeZrMIHX61AdIQ8JGO%2Bc2tCjD5Ojf101VAJO%2FuXGlr%2BiMnE%2FeCtLt44ncdJ1shGC0iRut6WK%2BRm4s4VqWsMGAfXIhoVA64HnKr294FVOBmJaiwXhFy5V9zPcCYosaD%2FSctx%2BSPVgYn1%2Fv3bscY4ETSRQQ47GVymsC%2FD09fVezI%2BofI5ZXbXgRI945zsMouI3Z9KDQ31WwChrOEIw4fFnC7sK5KbkvbGMwqe%2FXdNOSnBLFMoPt3JOUMdhPZUNruorEON7d%2F3BWb%2BIPali2amQlfp8NZB7%2Fmz5JIXdRD%2Bcy01qDsxQLcRydC5bQ%2ByQj%2FesMbaOB8e7PUeCFH7C%2F1DkdOYv%2FAGs6O8SxeIU8U9VPV%2FviD%2BVcZRx1KRZ39Te9fgi66LCxGeiRnO8vUb4m0pitMQ0IdAQx8%2BKgyYFAVk%2FEKtSeYXFNgJczlN6uYwnDlgLaiug2L%2Fk9RM2WtkUWBfIVGHc29YUEQMinUbWldmMw6%2FUERHiiB8u38lmFP6L0kASIO7FD5rZPDfxia0Bl%2FwBwLVSKN57O3CE5S%2B00mznsJHufyy9ewdTHRU1uuDA%2Fum5B8Zt9ox0MMKi58QGOqUB8yIb06H%2FX4UHrsQGtRbd6zcTRcnx69OOfhyCTTlsaCbtF1mEY9SIN0mExntga%2F3ZkosWoi%2Bk9J1XEB1BbWyuQft0ZtzbTTGdTkBFjI8punWDnWvz0m5t3KaswA88zJKuOjYYHTdWLe8MOhMqgLaK17Bh04nmmL6qXy2KIJlFxszxJkwymn40Lpr0KV%2BbMKjvoDn7V6EUJ%2BSjuI9iTShI4%2Fp14Xlu&X-Amz-Signature=276aea090e7d7d546ca49eb561a8a53a1fabe21336177deb38a0f3371ee1f105&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633QMFEAL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5K%2FLUMPwWTVPUiwJf1wBkLj2a%2FOaBlDVYF5RZeczDbgIgC97AC5CpECphsHkifLNHsi0RJUyr8AqpbVPyV8kLnIEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfQ7uekDTs7Bps71yrcA%2BiFMNcyEVMhb072tQfoI%2FunxhXmsqfQTiKzbVEzfyLhkGlMtVZQOeZrMIHX61AdIQ8JGO%2Bc2tCjD5Ojf101VAJO%2FuXGlr%2BiMnE%2FeCtLt44ncdJ1shGC0iRut6WK%2BRm4s4VqWsMGAfXIhoVA64HnKr294FVOBmJaiwXhFy5V9zPcCYosaD%2FSctx%2BSPVgYn1%2Fv3bscY4ETSRQQ47GVymsC%2FD09fVezI%2BofI5ZXbXgRI945zsMouI3Z9KDQ31WwChrOEIw4fFnC7sK5KbkvbGMwqe%2FXdNOSnBLFMoPt3JOUMdhPZUNruorEON7d%2F3BWb%2BIPali2amQlfp8NZB7%2Fmz5JIXdRD%2Bcy01qDsxQLcRydC5bQ%2ByQj%2FesMbaOB8e7PUeCFH7C%2F1DkdOYv%2FAGs6O8SxeIU8U9VPV%2FviD%2BVcZRx1KRZ39Te9fgi66LCxGeiRnO8vUb4m0pitMQ0IdAQx8%2BKgyYFAVk%2FEKtSeYXFNgJczlN6uYwnDlgLaiug2L%2Fk9RM2WtkUWBfIVGHc29YUEQMinUbWldmMw6%2FUERHiiB8u38lmFP6L0kASIO7FD5rZPDfxia0Bl%2FwBwLVSKN57O3CE5S%2B00mznsJHufyy9ewdTHRU1uuDA%2Fum5B8Zt9ox0MMKi58QGOqUB8yIb06H%2FX4UHrsQGtRbd6zcTRcnx69OOfhyCTTlsaCbtF1mEY9SIN0mExntga%2F3ZkosWoi%2Bk9J1XEB1BbWyuQft0ZtzbTTGdTkBFjI8punWDnWvz0m5t3KaswA88zJKuOjYYHTdWLe8MOhMqgLaK17Bh04nmmL6qXy2KIJlFxszxJkwymn40Lpr0KV%2BbMKjvoDn7V6EUJ%2BSjuI9iTShI4%2Fp14Xlu&X-Amz-Signature=1b1b3d8c7a97ca584ceec7fead64c73a27e8e91baeafa7b5999028430c010bbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633QMFEAL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5K%2FLUMPwWTVPUiwJf1wBkLj2a%2FOaBlDVYF5RZeczDbgIgC97AC5CpECphsHkifLNHsi0RJUyr8AqpbVPyV8kLnIEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfQ7uekDTs7Bps71yrcA%2BiFMNcyEVMhb072tQfoI%2FunxhXmsqfQTiKzbVEzfyLhkGlMtVZQOeZrMIHX61AdIQ8JGO%2Bc2tCjD5Ojf101VAJO%2FuXGlr%2BiMnE%2FeCtLt44ncdJ1shGC0iRut6WK%2BRm4s4VqWsMGAfXIhoVA64HnKr294FVOBmJaiwXhFy5V9zPcCYosaD%2FSctx%2BSPVgYn1%2Fv3bscY4ETSRQQ47GVymsC%2FD09fVezI%2BofI5ZXbXgRI945zsMouI3Z9KDQ31WwChrOEIw4fFnC7sK5KbkvbGMwqe%2FXdNOSnBLFMoPt3JOUMdhPZUNruorEON7d%2F3BWb%2BIPali2amQlfp8NZB7%2Fmz5JIXdRD%2Bcy01qDsxQLcRydC5bQ%2ByQj%2FesMbaOB8e7PUeCFH7C%2F1DkdOYv%2FAGs6O8SxeIU8U9VPV%2FviD%2BVcZRx1KRZ39Te9fgi66LCxGeiRnO8vUb4m0pitMQ0IdAQx8%2BKgyYFAVk%2FEKtSeYXFNgJczlN6uYwnDlgLaiug2L%2Fk9RM2WtkUWBfIVGHc29YUEQMinUbWldmMw6%2FUERHiiB8u38lmFP6L0kASIO7FD5rZPDfxia0Bl%2FwBwLVSKN57O3CE5S%2B00mznsJHufyy9ewdTHRU1uuDA%2Fum5B8Zt9ox0MMKi58QGOqUB8yIb06H%2FX4UHrsQGtRbd6zcTRcnx69OOfhyCTTlsaCbtF1mEY9SIN0mExntga%2F3ZkosWoi%2Bk9J1XEB1BbWyuQft0ZtzbTTGdTkBFjI8punWDnWvz0m5t3KaswA88zJKuOjYYHTdWLe8MOhMqgLaK17Bh04nmmL6qXy2KIJlFxszxJkwymn40Lpr0KV%2BbMKjvoDn7V6EUJ%2BSjuI9iTShI4%2Fp14Xlu&X-Amz-Signature=55f011954a33f2dfced6adff9013c7c70e5acdb7f39a104655ed3cd03d0b6c98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
