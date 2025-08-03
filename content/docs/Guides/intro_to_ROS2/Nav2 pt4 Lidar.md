---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-08-02T10:06:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-08-02T10:06:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA2NGLJW%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPNqIh2kEdEx49WZsdKT6WgeaDrUQVB145bb5UC8761AiEAzNdfdetIkg4k0Xf%2Fx2E8U7xp7uqMaySGcmtBjbLW68kq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCIbMM%2Fl8Uq8a6IU%2FCrcA2MWo%2BpIIgmOApAo5QUn0rZCQD3jT%2BJhUiIGPgvRxyzt51SG3MB0dVIkWJ%2F4J4rIgIqS1pZ%2Bk4ZxPRG2SNI1%2FVL6I8aHM22CP4%2B1hzg0WfP%2FXSaDyGrL1WALt7IhwmOjzzCgKIT7%2F9RBDyvMDrZ2sUB0hU%2BnVFtJaMd%2FQrT%2FxucfYJnKUSciusxJ%2FclSgURB14GlC%2FvrMpZayW0PhVXsSsv8C%2B%2B3sv%2BjsAeBJbZd9gCv%2Bl1X%2BQk3x%2FmaO8QwCuFH6VXQdapf40qr8Rs1MinWyRiGW0eyFN2olytLkr5CkYDr8nJpz7RxNLHBiGFJ%2Bo195vWIrSGb83Epul94nIn7GUP1KZk5%2BqF%2FXgTq0dcb3WDL6nHSIIsBUJL5kOMdfm4UzZdfnj1vVKO3hCfjiTUtklQq7FCp39mYE9rvIRwUy6JB81cKFuNyd0Ol%2BRB8F%2Fg94jMBdoZA3DUwQgEbnZvvamBdaZ483bznHtLa7e%2B5qNkHOlvhoJ6OEEAS6dhreFBM7eM5bCUDqIkIYI61Ryy0HX8M2z1bBoo0EKe4ZpwXql%2B6Pp%2F80a19Wh76%2FvhR6FcOBH5tJvZeqNJh02bFE5XwYqKVA2Mh%2FK7nEDXX3wegVWmffV0ZMrRiJTovP1I8MNKrvsQGOqUBRANYOJLv1rBLCjirvuwZDuaFE81PTHsSBjFBtyr2Z6A4YQlOAVQxcH4q30dv53EAdkWzLPx%2BS5b4nDq4J82gKYUR0OIgrdbBXY1vx3CB1j3wwAZUmqSoMMvl6TggGaXKEop%2BGfVIIo%2B2%2BBWSSvqLu%2FjbyOsINsaKIu6FOACACWv7Lm59vvNQSUR0M%2F16TJogqISLXb3bOTWDqcJCN%2BVP1T%2BPYH7P&X-Amz-Signature=fdca2ced7c8286283f8f91cc03e56ac0afc8223e906f8e2c82dac7da59db3c8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DYWKLWN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTsf4sCkoGRdGa6YfFcKUNrsaCDBo839f%2F4uRpElVy6gIhAJ7Q1rScTAzeEiVZadLgiO5%2F1KWy9ugNXz2zCEVwI44nKv8DCDIQABoMNjM3NDIzMTgzODA1IgyAP9Z%2BiHDe7EoWYuUq3APAQj8AeZjz2%2BcI%2F3VJmGZVnLajIvGPHaBqLQ8n5tGQm4Dk7apeIBKehJiZvWjqIRxsphq4f5jwzKU2LL7zFyAAH3c3CsABC8B%2BP7uYgxSn%2BRce7iD91vK17YevN4XpaHAa84FGb5%2FZaYO%2Bj1XYCfPTjBVh57oTdqQr9FpnYlWY31ur1WuSXhIU67i8XGg1H17r6tV86KiTT3LpXnys9tc9EFPZk3zpzhfEL6J%2BBZJMRiUgR603vuGowa6mpg%2B9NgMsVfZr9Wwvn%2FhwuBEe4eRB4VjuouxOgwBr3q6aJ58ylRQGr5yijxToh4bDkxbUCls%2FsIj94PyDt7sxbsi6xQlUk%2BamlXY%2FsA3EZvUC8nJQxPLsuyt4A6tCDUSBr%2B1Tp9vKir1IR3Qz5y67CHwygGNuEbIHv0015crDjj%2FWfVZZ9BQdhssAwQKYDBusly6RpULeKLG6QiHt%2F405s%2Frn4xnc5OyrsVe2vS9fkBpxz8Jry28avbQdhQ%2Bo%2Bp9GV5xBfzXoDLA0TjvXeuph%2BvHE4f4Hmme7te1S3pbJ0E2C71nJYHxSgKPp88LJRN20bhQFbFbIN1CeWnhB91pS%2F25nMOGxri5GDy53e3ulWFQKM12n0suG7B72bIfluXDjfzDzqr7EBjqkAY8cZrwLgrX44tR5%2FsRKgtyrTqAdS2zH2omJaX1%2FovRURe59vRFWrvI40iXj4frZB566CtMSGXbOxEWSvxgWMwsZb2I2EK6hZBBYlaS%2Fvu6xTEVBwoWOfwkTDFY%2BMziZlzTxEB5vXrVIvbXcYdjhwhQDv72eHFMqBoPJ1L3Hz%2FIy1leBy4gwsgqhZQjQOitDbDhMPE%2F5%2BzMKGsLoHkEgcMO97mMf&X-Amz-Signature=120e15a3b11cb37b697fcd200df67f6594ac7484bca3f0845784e538d5c9532f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DYWKLWN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTsf4sCkoGRdGa6YfFcKUNrsaCDBo839f%2F4uRpElVy6gIhAJ7Q1rScTAzeEiVZadLgiO5%2F1KWy9ugNXz2zCEVwI44nKv8DCDIQABoMNjM3NDIzMTgzODA1IgyAP9Z%2BiHDe7EoWYuUq3APAQj8AeZjz2%2BcI%2F3VJmGZVnLajIvGPHaBqLQ8n5tGQm4Dk7apeIBKehJiZvWjqIRxsphq4f5jwzKU2LL7zFyAAH3c3CsABC8B%2BP7uYgxSn%2BRce7iD91vK17YevN4XpaHAa84FGb5%2FZaYO%2Bj1XYCfPTjBVh57oTdqQr9FpnYlWY31ur1WuSXhIU67i8XGg1H17r6tV86KiTT3LpXnys9tc9EFPZk3zpzhfEL6J%2BBZJMRiUgR603vuGowa6mpg%2B9NgMsVfZr9Wwvn%2FhwuBEe4eRB4VjuouxOgwBr3q6aJ58ylRQGr5yijxToh4bDkxbUCls%2FsIj94PyDt7sxbsi6xQlUk%2BamlXY%2FsA3EZvUC8nJQxPLsuyt4A6tCDUSBr%2B1Tp9vKir1IR3Qz5y67CHwygGNuEbIHv0015crDjj%2FWfVZZ9BQdhssAwQKYDBusly6RpULeKLG6QiHt%2F405s%2Frn4xnc5OyrsVe2vS9fkBpxz8Jry28avbQdhQ%2Bo%2Bp9GV5xBfzXoDLA0TjvXeuph%2BvHE4f4Hmme7te1S3pbJ0E2C71nJYHxSgKPp88LJRN20bhQFbFbIN1CeWnhB91pS%2F25nMOGxri5GDy53e3ulWFQKM12n0suG7B72bIfluXDjfzDzqr7EBjqkAY8cZrwLgrX44tR5%2FsRKgtyrTqAdS2zH2omJaX1%2FovRURe59vRFWrvI40iXj4frZB566CtMSGXbOxEWSvxgWMwsZb2I2EK6hZBBYlaS%2Fvu6xTEVBwoWOfwkTDFY%2BMziZlzTxEB5vXrVIvbXcYdjhwhQDv72eHFMqBoPJ1L3Hz%2FIy1leBy4gwsgqhZQjQOitDbDhMPE%2F5%2BzMKGsLoHkEgcMO97mMf&X-Amz-Signature=f5da208968bf411e5d99e62451baf8d2fc53eb14c9e0bcf635d72e218849f6b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DYWKLWN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTsf4sCkoGRdGa6YfFcKUNrsaCDBo839f%2F4uRpElVy6gIhAJ7Q1rScTAzeEiVZadLgiO5%2F1KWy9ugNXz2zCEVwI44nKv8DCDIQABoMNjM3NDIzMTgzODA1IgyAP9Z%2BiHDe7EoWYuUq3APAQj8AeZjz2%2BcI%2F3VJmGZVnLajIvGPHaBqLQ8n5tGQm4Dk7apeIBKehJiZvWjqIRxsphq4f5jwzKU2LL7zFyAAH3c3CsABC8B%2BP7uYgxSn%2BRce7iD91vK17YevN4XpaHAa84FGb5%2FZaYO%2Bj1XYCfPTjBVh57oTdqQr9FpnYlWY31ur1WuSXhIU67i8XGg1H17r6tV86KiTT3LpXnys9tc9EFPZk3zpzhfEL6J%2BBZJMRiUgR603vuGowa6mpg%2B9NgMsVfZr9Wwvn%2FhwuBEe4eRB4VjuouxOgwBr3q6aJ58ylRQGr5yijxToh4bDkxbUCls%2FsIj94PyDt7sxbsi6xQlUk%2BamlXY%2FsA3EZvUC8nJQxPLsuyt4A6tCDUSBr%2B1Tp9vKir1IR3Qz5y67CHwygGNuEbIHv0015crDjj%2FWfVZZ9BQdhssAwQKYDBusly6RpULeKLG6QiHt%2F405s%2Frn4xnc5OyrsVe2vS9fkBpxz8Jry28avbQdhQ%2Bo%2Bp9GV5xBfzXoDLA0TjvXeuph%2BvHE4f4Hmme7te1S3pbJ0E2C71nJYHxSgKPp88LJRN20bhQFbFbIN1CeWnhB91pS%2F25nMOGxri5GDy53e3ulWFQKM12n0suG7B72bIfluXDjfzDzqr7EBjqkAY8cZrwLgrX44tR5%2FsRKgtyrTqAdS2zH2omJaX1%2FovRURe59vRFWrvI40iXj4frZB566CtMSGXbOxEWSvxgWMwsZb2I2EK6hZBBYlaS%2Fvu6xTEVBwoWOfwkTDFY%2BMziZlzTxEB5vXrVIvbXcYdjhwhQDv72eHFMqBoPJ1L3Hz%2FIy1leBy4gwsgqhZQjQOitDbDhMPE%2F5%2BzMKGsLoHkEgcMO97mMf&X-Amz-Signature=856dd56cb29cf1a1fa17ab82980057b598be4c233be2905551cd0dc88a261418&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DYWKLWN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTsf4sCkoGRdGa6YfFcKUNrsaCDBo839f%2F4uRpElVy6gIhAJ7Q1rScTAzeEiVZadLgiO5%2F1KWy9ugNXz2zCEVwI44nKv8DCDIQABoMNjM3NDIzMTgzODA1IgyAP9Z%2BiHDe7EoWYuUq3APAQj8AeZjz2%2BcI%2F3VJmGZVnLajIvGPHaBqLQ8n5tGQm4Dk7apeIBKehJiZvWjqIRxsphq4f5jwzKU2LL7zFyAAH3c3CsABC8B%2BP7uYgxSn%2BRce7iD91vK17YevN4XpaHAa84FGb5%2FZaYO%2Bj1XYCfPTjBVh57oTdqQr9FpnYlWY31ur1WuSXhIU67i8XGg1H17r6tV86KiTT3LpXnys9tc9EFPZk3zpzhfEL6J%2BBZJMRiUgR603vuGowa6mpg%2B9NgMsVfZr9Wwvn%2FhwuBEe4eRB4VjuouxOgwBr3q6aJ58ylRQGr5yijxToh4bDkxbUCls%2FsIj94PyDt7sxbsi6xQlUk%2BamlXY%2FsA3EZvUC8nJQxPLsuyt4A6tCDUSBr%2B1Tp9vKir1IR3Qz5y67CHwygGNuEbIHv0015crDjj%2FWfVZZ9BQdhssAwQKYDBusly6RpULeKLG6QiHt%2F405s%2Frn4xnc5OyrsVe2vS9fkBpxz8Jry28avbQdhQ%2Bo%2Bp9GV5xBfzXoDLA0TjvXeuph%2BvHE4f4Hmme7te1S3pbJ0E2C71nJYHxSgKPp88LJRN20bhQFbFbIN1CeWnhB91pS%2F25nMOGxri5GDy53e3ulWFQKM12n0suG7B72bIfluXDjfzDzqr7EBjqkAY8cZrwLgrX44tR5%2FsRKgtyrTqAdS2zH2omJaX1%2FovRURe59vRFWrvI40iXj4frZB566CtMSGXbOxEWSvxgWMwsZb2I2EK6hZBBYlaS%2Fvu6xTEVBwoWOfwkTDFY%2BMziZlzTxEB5vXrVIvbXcYdjhwhQDv72eHFMqBoPJ1L3Hz%2FIy1leBy4gwsgqhZQjQOitDbDhMPE%2F5%2BzMKGsLoHkEgcMO97mMf&X-Amz-Signature=f8778a9fb1fff6c9bf57aeb55c2af7b2a28518f259c531d95a39a8a20de7cc0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DYWKLWN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTsf4sCkoGRdGa6YfFcKUNrsaCDBo839f%2F4uRpElVy6gIhAJ7Q1rScTAzeEiVZadLgiO5%2F1KWy9ugNXz2zCEVwI44nKv8DCDIQABoMNjM3NDIzMTgzODA1IgyAP9Z%2BiHDe7EoWYuUq3APAQj8AeZjz2%2BcI%2F3VJmGZVnLajIvGPHaBqLQ8n5tGQm4Dk7apeIBKehJiZvWjqIRxsphq4f5jwzKU2LL7zFyAAH3c3CsABC8B%2BP7uYgxSn%2BRce7iD91vK17YevN4XpaHAa84FGb5%2FZaYO%2Bj1XYCfPTjBVh57oTdqQr9FpnYlWY31ur1WuSXhIU67i8XGg1H17r6tV86KiTT3LpXnys9tc9EFPZk3zpzhfEL6J%2BBZJMRiUgR603vuGowa6mpg%2B9NgMsVfZr9Wwvn%2FhwuBEe4eRB4VjuouxOgwBr3q6aJ58ylRQGr5yijxToh4bDkxbUCls%2FsIj94PyDt7sxbsi6xQlUk%2BamlXY%2FsA3EZvUC8nJQxPLsuyt4A6tCDUSBr%2B1Tp9vKir1IR3Qz5y67CHwygGNuEbIHv0015crDjj%2FWfVZZ9BQdhssAwQKYDBusly6RpULeKLG6QiHt%2F405s%2Frn4xnc5OyrsVe2vS9fkBpxz8Jry28avbQdhQ%2Bo%2Bp9GV5xBfzXoDLA0TjvXeuph%2BvHE4f4Hmme7te1S3pbJ0E2C71nJYHxSgKPp88LJRN20bhQFbFbIN1CeWnhB91pS%2F25nMOGxri5GDy53e3ulWFQKM12n0suG7B72bIfluXDjfzDzqr7EBjqkAY8cZrwLgrX44tR5%2FsRKgtyrTqAdS2zH2omJaX1%2FovRURe59vRFWrvI40iXj4frZB566CtMSGXbOxEWSvxgWMwsZb2I2EK6hZBBYlaS%2Fvu6xTEVBwoWOfwkTDFY%2BMziZlzTxEB5vXrVIvbXcYdjhwhQDv72eHFMqBoPJ1L3Hz%2FIy1leBy4gwsgqhZQjQOitDbDhMPE%2F5%2BzMKGsLoHkEgcMO97mMf&X-Amz-Signature=2a1b7b17907232e2454a1dda7f2f81dfd5f9b4b6e1697c8f6e743d124f2db0fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DYWKLWN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTsf4sCkoGRdGa6YfFcKUNrsaCDBo839f%2F4uRpElVy6gIhAJ7Q1rScTAzeEiVZadLgiO5%2F1KWy9ugNXz2zCEVwI44nKv8DCDIQABoMNjM3NDIzMTgzODA1IgyAP9Z%2BiHDe7EoWYuUq3APAQj8AeZjz2%2BcI%2F3VJmGZVnLajIvGPHaBqLQ8n5tGQm4Dk7apeIBKehJiZvWjqIRxsphq4f5jwzKU2LL7zFyAAH3c3CsABC8B%2BP7uYgxSn%2BRce7iD91vK17YevN4XpaHAa84FGb5%2FZaYO%2Bj1XYCfPTjBVh57oTdqQr9FpnYlWY31ur1WuSXhIU67i8XGg1H17r6tV86KiTT3LpXnys9tc9EFPZk3zpzhfEL6J%2BBZJMRiUgR603vuGowa6mpg%2B9NgMsVfZr9Wwvn%2FhwuBEe4eRB4VjuouxOgwBr3q6aJ58ylRQGr5yijxToh4bDkxbUCls%2FsIj94PyDt7sxbsi6xQlUk%2BamlXY%2FsA3EZvUC8nJQxPLsuyt4A6tCDUSBr%2B1Tp9vKir1IR3Qz5y67CHwygGNuEbIHv0015crDjj%2FWfVZZ9BQdhssAwQKYDBusly6RpULeKLG6QiHt%2F405s%2Frn4xnc5OyrsVe2vS9fkBpxz8Jry28avbQdhQ%2Bo%2Bp9GV5xBfzXoDLA0TjvXeuph%2BvHE4f4Hmme7te1S3pbJ0E2C71nJYHxSgKPp88LJRN20bhQFbFbIN1CeWnhB91pS%2F25nMOGxri5GDy53e3ulWFQKM12n0suG7B72bIfluXDjfzDzqr7EBjqkAY8cZrwLgrX44tR5%2FsRKgtyrTqAdS2zH2omJaX1%2FovRURe59vRFWrvI40iXj4frZB566CtMSGXbOxEWSvxgWMwsZb2I2EK6hZBBYlaS%2Fvu6xTEVBwoWOfwkTDFY%2BMziZlzTxEB5vXrVIvbXcYdjhwhQDv72eHFMqBoPJ1L3Hz%2FIy1leBy4gwsgqhZQjQOitDbDhMPE%2F5%2BzMKGsLoHkEgcMO97mMf&X-Amz-Signature=1a1c9c8a83c8aa3624c0a091aafdf7e5048267d48f2601b84a4b62052444978a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DYWKLWN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTsf4sCkoGRdGa6YfFcKUNrsaCDBo839f%2F4uRpElVy6gIhAJ7Q1rScTAzeEiVZadLgiO5%2F1KWy9ugNXz2zCEVwI44nKv8DCDIQABoMNjM3NDIzMTgzODA1IgyAP9Z%2BiHDe7EoWYuUq3APAQj8AeZjz2%2BcI%2F3VJmGZVnLajIvGPHaBqLQ8n5tGQm4Dk7apeIBKehJiZvWjqIRxsphq4f5jwzKU2LL7zFyAAH3c3CsABC8B%2BP7uYgxSn%2BRce7iD91vK17YevN4XpaHAa84FGb5%2FZaYO%2Bj1XYCfPTjBVh57oTdqQr9FpnYlWY31ur1WuSXhIU67i8XGg1H17r6tV86KiTT3LpXnys9tc9EFPZk3zpzhfEL6J%2BBZJMRiUgR603vuGowa6mpg%2B9NgMsVfZr9Wwvn%2FhwuBEe4eRB4VjuouxOgwBr3q6aJ58ylRQGr5yijxToh4bDkxbUCls%2FsIj94PyDt7sxbsi6xQlUk%2BamlXY%2FsA3EZvUC8nJQxPLsuyt4A6tCDUSBr%2B1Tp9vKir1IR3Qz5y67CHwygGNuEbIHv0015crDjj%2FWfVZZ9BQdhssAwQKYDBusly6RpULeKLG6QiHt%2F405s%2Frn4xnc5OyrsVe2vS9fkBpxz8Jry28avbQdhQ%2Bo%2Bp9GV5xBfzXoDLA0TjvXeuph%2BvHE4f4Hmme7te1S3pbJ0E2C71nJYHxSgKPp88LJRN20bhQFbFbIN1CeWnhB91pS%2F25nMOGxri5GDy53e3ulWFQKM12n0suG7B72bIfluXDjfzDzqr7EBjqkAY8cZrwLgrX44tR5%2FsRKgtyrTqAdS2zH2omJaX1%2FovRURe59vRFWrvI40iXj4frZB566CtMSGXbOxEWSvxgWMwsZb2I2EK6hZBBYlaS%2Fvu6xTEVBwoWOfwkTDFY%2BMziZlzTxEB5vXrVIvbXcYdjhwhQDv72eHFMqBoPJ1L3Hz%2FIy1leBy4gwsgqhZQjQOitDbDhMPE%2F5%2BzMKGsLoHkEgcMO97mMf&X-Amz-Signature=449a496d8034774095b25bb22f05447ecd75df85992ecdcefb41243a10dcd096&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DYWKLWN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTsf4sCkoGRdGa6YfFcKUNrsaCDBo839f%2F4uRpElVy6gIhAJ7Q1rScTAzeEiVZadLgiO5%2F1KWy9ugNXz2zCEVwI44nKv8DCDIQABoMNjM3NDIzMTgzODA1IgyAP9Z%2BiHDe7EoWYuUq3APAQj8AeZjz2%2BcI%2F3VJmGZVnLajIvGPHaBqLQ8n5tGQm4Dk7apeIBKehJiZvWjqIRxsphq4f5jwzKU2LL7zFyAAH3c3CsABC8B%2BP7uYgxSn%2BRce7iD91vK17YevN4XpaHAa84FGb5%2FZaYO%2Bj1XYCfPTjBVh57oTdqQr9FpnYlWY31ur1WuSXhIU67i8XGg1H17r6tV86KiTT3LpXnys9tc9EFPZk3zpzhfEL6J%2BBZJMRiUgR603vuGowa6mpg%2B9NgMsVfZr9Wwvn%2FhwuBEe4eRB4VjuouxOgwBr3q6aJ58ylRQGr5yijxToh4bDkxbUCls%2FsIj94PyDt7sxbsi6xQlUk%2BamlXY%2FsA3EZvUC8nJQxPLsuyt4A6tCDUSBr%2B1Tp9vKir1IR3Qz5y67CHwygGNuEbIHv0015crDjj%2FWfVZZ9BQdhssAwQKYDBusly6RpULeKLG6QiHt%2F405s%2Frn4xnc5OyrsVe2vS9fkBpxz8Jry28avbQdhQ%2Bo%2Bp9GV5xBfzXoDLA0TjvXeuph%2BvHE4f4Hmme7te1S3pbJ0E2C71nJYHxSgKPp88LJRN20bhQFbFbIN1CeWnhB91pS%2F25nMOGxri5GDy53e3ulWFQKM12n0suG7B72bIfluXDjfzDzqr7EBjqkAY8cZrwLgrX44tR5%2FsRKgtyrTqAdS2zH2omJaX1%2FovRURe59vRFWrvI40iXj4frZB566CtMSGXbOxEWSvxgWMwsZb2I2EK6hZBBYlaS%2Fvu6xTEVBwoWOfwkTDFY%2BMziZlzTxEB5vXrVIvbXcYdjhwhQDv72eHFMqBoPJ1L3Hz%2FIy1leBy4gwsgqhZQjQOitDbDhMPE%2F5%2BzMKGsLoHkEgcMO97mMf&X-Amz-Signature=408ccc7f5351ee50cf9ab64147dfe8c28399336d764170c40b80491764af61ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DYWKLWN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTsf4sCkoGRdGa6YfFcKUNrsaCDBo839f%2F4uRpElVy6gIhAJ7Q1rScTAzeEiVZadLgiO5%2F1KWy9ugNXz2zCEVwI44nKv8DCDIQABoMNjM3NDIzMTgzODA1IgyAP9Z%2BiHDe7EoWYuUq3APAQj8AeZjz2%2BcI%2F3VJmGZVnLajIvGPHaBqLQ8n5tGQm4Dk7apeIBKehJiZvWjqIRxsphq4f5jwzKU2LL7zFyAAH3c3CsABC8B%2BP7uYgxSn%2BRce7iD91vK17YevN4XpaHAa84FGb5%2FZaYO%2Bj1XYCfPTjBVh57oTdqQr9FpnYlWY31ur1WuSXhIU67i8XGg1H17r6tV86KiTT3LpXnys9tc9EFPZk3zpzhfEL6J%2BBZJMRiUgR603vuGowa6mpg%2B9NgMsVfZr9Wwvn%2FhwuBEe4eRB4VjuouxOgwBr3q6aJ58ylRQGr5yijxToh4bDkxbUCls%2FsIj94PyDt7sxbsi6xQlUk%2BamlXY%2FsA3EZvUC8nJQxPLsuyt4A6tCDUSBr%2B1Tp9vKir1IR3Qz5y67CHwygGNuEbIHv0015crDjj%2FWfVZZ9BQdhssAwQKYDBusly6RpULeKLG6QiHt%2F405s%2Frn4xnc5OyrsVe2vS9fkBpxz8Jry28avbQdhQ%2Bo%2Bp9GV5xBfzXoDLA0TjvXeuph%2BvHE4f4Hmme7te1S3pbJ0E2C71nJYHxSgKPp88LJRN20bhQFbFbIN1CeWnhB91pS%2F25nMOGxri5GDy53e3ulWFQKM12n0suG7B72bIfluXDjfzDzqr7EBjqkAY8cZrwLgrX44tR5%2FsRKgtyrTqAdS2zH2omJaX1%2FovRURe59vRFWrvI40iXj4frZB566CtMSGXbOxEWSvxgWMwsZb2I2EK6hZBBYlaS%2Fvu6xTEVBwoWOfwkTDFY%2BMziZlzTxEB5vXrVIvbXcYdjhwhQDv72eHFMqBoPJ1L3Hz%2FIy1leBy4gwsgqhZQjQOitDbDhMPE%2F5%2BzMKGsLoHkEgcMO97mMf&X-Amz-Signature=d1ba9b1f049547d112b059fa8a766f5eb9f958fc78e4a8aa5c1c060427dce0af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DYWKLWN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTsf4sCkoGRdGa6YfFcKUNrsaCDBo839f%2F4uRpElVy6gIhAJ7Q1rScTAzeEiVZadLgiO5%2F1KWy9ugNXz2zCEVwI44nKv8DCDIQABoMNjM3NDIzMTgzODA1IgyAP9Z%2BiHDe7EoWYuUq3APAQj8AeZjz2%2BcI%2F3VJmGZVnLajIvGPHaBqLQ8n5tGQm4Dk7apeIBKehJiZvWjqIRxsphq4f5jwzKU2LL7zFyAAH3c3CsABC8B%2BP7uYgxSn%2BRce7iD91vK17YevN4XpaHAa84FGb5%2FZaYO%2Bj1XYCfPTjBVh57oTdqQr9FpnYlWY31ur1WuSXhIU67i8XGg1H17r6tV86KiTT3LpXnys9tc9EFPZk3zpzhfEL6J%2BBZJMRiUgR603vuGowa6mpg%2B9NgMsVfZr9Wwvn%2FhwuBEe4eRB4VjuouxOgwBr3q6aJ58ylRQGr5yijxToh4bDkxbUCls%2FsIj94PyDt7sxbsi6xQlUk%2BamlXY%2FsA3EZvUC8nJQxPLsuyt4A6tCDUSBr%2B1Tp9vKir1IR3Qz5y67CHwygGNuEbIHv0015crDjj%2FWfVZZ9BQdhssAwQKYDBusly6RpULeKLG6QiHt%2F405s%2Frn4xnc5OyrsVe2vS9fkBpxz8Jry28avbQdhQ%2Bo%2Bp9GV5xBfzXoDLA0TjvXeuph%2BvHE4f4Hmme7te1S3pbJ0E2C71nJYHxSgKPp88LJRN20bhQFbFbIN1CeWnhB91pS%2F25nMOGxri5GDy53e3ulWFQKM12n0suG7B72bIfluXDjfzDzqr7EBjqkAY8cZrwLgrX44tR5%2FsRKgtyrTqAdS2zH2omJaX1%2FovRURe59vRFWrvI40iXj4frZB566CtMSGXbOxEWSvxgWMwsZb2I2EK6hZBBYlaS%2Fvu6xTEVBwoWOfwkTDFY%2BMziZlzTxEB5vXrVIvbXcYdjhwhQDv72eHFMqBoPJ1L3Hz%2FIy1leBy4gwsgqhZQjQOitDbDhMPE%2F5%2BzMKGsLoHkEgcMO97mMf&X-Amz-Signature=f8778a9fb1fff6c9bf57aeb55c2af7b2a28518f259c531d95a39a8a20de7cc0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
