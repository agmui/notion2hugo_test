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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPOT4PZC%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR1NfdjNnDNUkHAwPQJYrvxvETFb9r%2BglR7GGfqM4QRwIhALegj1fhiiqumHkULdPNTpqBNQoKGh50b06HiSYlc2TWKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwvq6b0sexqP7G64zYq3ANAecBodIGazOXcdAb2BJUXMwOn6MQdeU%2BrOYH7Q1EycHeN4ay7VyI8oMikM2gwKg2WOoLVIPon90JWcMJ2GotlD%2FpniHIJVmVT4qTZ4zSTDqyniRN%2BlRzqqEvD8AK31bZq2kX5dKZGytst1WSN%2FLhQXruD42pZdKqjwRWSSqO7%2Fgv2Zygn%2BYJAl7u8WXem5aDgXVd45C1KVApp7px0MTTKc5hrDEFG7%2BxTpn4n0RMoiDJRhE2QEHtqH5lPtj7VZ8Hv3sEAvMX4s4LBJbUMM40TJ2ML7SzjQ3qbLLoKSIA2UIf%2FEVyQQjAg%2Fc4U7mFm40%2FeHkPXAmc90aW2V24Kf6glx79j2HXq6hDmE2IAHd8jrB8s5JG4pbcyxmd%2BIdbIZs4kkDz4CweEYSWa9D4KLFCyE5SIKiY8Cl7F3pwbgKqC%2FQj1M70dNAtkJq%2BCrneMjPEnvZoYaH4xrNDozF%2B65GwCgVzXvh9d1nKcKUQ76C59y5XtMbMGVx4pOfDRiLNG0bdqBS0GIVj83NoQSP6AU%2Fus3m5tz1QPB%2BRLyn%2BNYf2NYu0GmwHiOrhpdB8%2BOgHw4CV7HikZx5nICArsgVm%2FJxPCo8aiEWfcHIsy56VbCTD32I2hHZrQMzoHGDfTVTCG9eDEBjqkASlIhiFbv7UQ1%2BbOTv5Se2ChuCFfbg85XMZvohEBDHer%2FsQkl171YQPpeSfE%2FJ%2FZB%2BpYey4qFaZDOx61Nw%2BPw%2Fb5Z%2F6btCRhNOG24GjlnRXZA0AciU7HkFRtEwghjIauB7J68dUdmDBxerHjuG%2FlJ6OHbIxjIqONL%2F8xw%2BfnqhyJ1Ree8JgTTiXOVsZZxmgksytvQtWyuE6Pi6hKvz5nP8PhFEvt&X-Amz-Signature=868a408c36b3214b2638911ffbf9974e914dac2a407eca45c7dd87a64996c7c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDC5PD46%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjVY%2Bt7MEINHBwNEfBb7HgA4x%2F1UgiaQZhLpoJUYHX6AIhAIssPzRamIfyUho4sx04d2A7VreI0VG7r6LbwiSyiuo6KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igza4yspG0ZrVL65iykq3APpg2Skk9qnFJISeCpoEI9ICGScgeN94L6d8PtE5LICbjqwuQL3kD6ycEzgw%2BZVhnbwLg54P3AhCxo7s1Mc3VD%2BAby3d7%2F3YOUGu1QQ3KqzLTZZnM8rI3JHmMqFduymyLQ7brFyUyoho4HkxDBgQhVJkUPvQpQI6nhkEcZHXpsKMxBCYOwVBuHzGszPImT98izj5fFcKAyCGNcPTBR3iGzR2N1uc17mpMhjF4vWi2fZ8vixqDdv1XlzaX7%2FKt9%2BDO6V2K%2Bap%2Fm5gIBg8OATzbYjxm%2Ba0qD6G8Fy9IS9ekyNcf%2Bb1zG1OFoJ7mL2DGEamgvXrmeRdgeJhhQk%2BiqEz2aAiDOXdpRw5prJiqDvewZNca5xRVPT%2FNYUnC%2BKnoYWNpMaHobcIIbqNm0wsKJLb%2BcXVPWC8B0sBAbJESRtJ%2B%2B64ISuTTcsGNrdyELppLVPt%2BX1P%2FA1F8T4xCiwGbG609op0c0skA%2F%2Bha9E%2F9P0kpDLED2DCOEBZVsIRwrhQKDmt8fJ9JwIN04T%2F%2FaHs%2BosoIaCnySQ9FCgnRZrNH0hEIwr3CENAo36fUJ83BTUivx4Tyee1zrLqeCGO49NUIgiJNii3PfMUl5vGhVUvSlfsb%2F5FWmxDIrp6zbXkcQQ7DCV9eDEBjqkAaDu8X915l9aDV2PNf31OJPxRp9joBPmblxiIAARAZZgRsThkrlzAdxTfQ40dpZdygOHqBZ8R8iAPpCGbLUAS4hiEN0TtDn%2BijdMrDRROJ%2BTB0RHNKJORTP8PTPrCYCTcEjmCRjn9r6baeAnRTJWLL0VE4JLApBSMNRVSC6AxBkhUjizMja38Z5BSeVfx4zItrDF0OJ7I8bJnoBDUF%2BGFbTv7nyT&X-Amz-Signature=149b78734aa4ed66ae2e9c39a733bb01a89195d4f3ccbef7b43e4e83b461eb2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDC5PD46%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjVY%2Bt7MEINHBwNEfBb7HgA4x%2F1UgiaQZhLpoJUYHX6AIhAIssPzRamIfyUho4sx04d2A7VreI0VG7r6LbwiSyiuo6KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igza4yspG0ZrVL65iykq3APpg2Skk9qnFJISeCpoEI9ICGScgeN94L6d8PtE5LICbjqwuQL3kD6ycEzgw%2BZVhnbwLg54P3AhCxo7s1Mc3VD%2BAby3d7%2F3YOUGu1QQ3KqzLTZZnM8rI3JHmMqFduymyLQ7brFyUyoho4HkxDBgQhVJkUPvQpQI6nhkEcZHXpsKMxBCYOwVBuHzGszPImT98izj5fFcKAyCGNcPTBR3iGzR2N1uc17mpMhjF4vWi2fZ8vixqDdv1XlzaX7%2FKt9%2BDO6V2K%2Bap%2Fm5gIBg8OATzbYjxm%2Ba0qD6G8Fy9IS9ekyNcf%2Bb1zG1OFoJ7mL2DGEamgvXrmeRdgeJhhQk%2BiqEz2aAiDOXdpRw5prJiqDvewZNca5xRVPT%2FNYUnC%2BKnoYWNpMaHobcIIbqNm0wsKJLb%2BcXVPWC8B0sBAbJESRtJ%2B%2B64ISuTTcsGNrdyELppLVPt%2BX1P%2FA1F8T4xCiwGbG609op0c0skA%2F%2Bha9E%2F9P0kpDLED2DCOEBZVsIRwrhQKDmt8fJ9JwIN04T%2F%2FaHs%2BosoIaCnySQ9FCgnRZrNH0hEIwr3CENAo36fUJ83BTUivx4Tyee1zrLqeCGO49NUIgiJNii3PfMUl5vGhVUvSlfsb%2F5FWmxDIrp6zbXkcQQ7DCV9eDEBjqkAaDu8X915l9aDV2PNf31OJPxRp9joBPmblxiIAARAZZgRsThkrlzAdxTfQ40dpZdygOHqBZ8R8iAPpCGbLUAS4hiEN0TtDn%2BijdMrDRROJ%2BTB0RHNKJORTP8PTPrCYCTcEjmCRjn9r6baeAnRTJWLL0VE4JLApBSMNRVSC6AxBkhUjizMja38Z5BSeVfx4zItrDF0OJ7I8bJnoBDUF%2BGFbTv7nyT&X-Amz-Signature=bcad9b0340ef9f974e6ca478419760367665b8cf453d6f75c7621df88d1cb84b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDC5PD46%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjVY%2Bt7MEINHBwNEfBb7HgA4x%2F1UgiaQZhLpoJUYHX6AIhAIssPzRamIfyUho4sx04d2A7VreI0VG7r6LbwiSyiuo6KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igza4yspG0ZrVL65iykq3APpg2Skk9qnFJISeCpoEI9ICGScgeN94L6d8PtE5LICbjqwuQL3kD6ycEzgw%2BZVhnbwLg54P3AhCxo7s1Mc3VD%2BAby3d7%2F3YOUGu1QQ3KqzLTZZnM8rI3JHmMqFduymyLQ7brFyUyoho4HkxDBgQhVJkUPvQpQI6nhkEcZHXpsKMxBCYOwVBuHzGszPImT98izj5fFcKAyCGNcPTBR3iGzR2N1uc17mpMhjF4vWi2fZ8vixqDdv1XlzaX7%2FKt9%2BDO6V2K%2Bap%2Fm5gIBg8OATzbYjxm%2Ba0qD6G8Fy9IS9ekyNcf%2Bb1zG1OFoJ7mL2DGEamgvXrmeRdgeJhhQk%2BiqEz2aAiDOXdpRw5prJiqDvewZNca5xRVPT%2FNYUnC%2BKnoYWNpMaHobcIIbqNm0wsKJLb%2BcXVPWC8B0sBAbJESRtJ%2B%2B64ISuTTcsGNrdyELppLVPt%2BX1P%2FA1F8T4xCiwGbG609op0c0skA%2F%2Bha9E%2F9P0kpDLED2DCOEBZVsIRwrhQKDmt8fJ9JwIN04T%2F%2FaHs%2BosoIaCnySQ9FCgnRZrNH0hEIwr3CENAo36fUJ83BTUivx4Tyee1zrLqeCGO49NUIgiJNii3PfMUl5vGhVUvSlfsb%2F5FWmxDIrp6zbXkcQQ7DCV9eDEBjqkAaDu8X915l9aDV2PNf31OJPxRp9joBPmblxiIAARAZZgRsThkrlzAdxTfQ40dpZdygOHqBZ8R8iAPpCGbLUAS4hiEN0TtDn%2BijdMrDRROJ%2BTB0RHNKJORTP8PTPrCYCTcEjmCRjn9r6baeAnRTJWLL0VE4JLApBSMNRVSC6AxBkhUjizMja38Z5BSeVfx4zItrDF0OJ7I8bJnoBDUF%2BGFbTv7nyT&X-Amz-Signature=01a2c7ebb54d637f41ceaf98fde83286128700b205d8cc21161978a6fdbb7dea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDC5PD46%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjVY%2Bt7MEINHBwNEfBb7HgA4x%2F1UgiaQZhLpoJUYHX6AIhAIssPzRamIfyUho4sx04d2A7VreI0VG7r6LbwiSyiuo6KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igza4yspG0ZrVL65iykq3APpg2Skk9qnFJISeCpoEI9ICGScgeN94L6d8PtE5LICbjqwuQL3kD6ycEzgw%2BZVhnbwLg54P3AhCxo7s1Mc3VD%2BAby3d7%2F3YOUGu1QQ3KqzLTZZnM8rI3JHmMqFduymyLQ7brFyUyoho4HkxDBgQhVJkUPvQpQI6nhkEcZHXpsKMxBCYOwVBuHzGszPImT98izj5fFcKAyCGNcPTBR3iGzR2N1uc17mpMhjF4vWi2fZ8vixqDdv1XlzaX7%2FKt9%2BDO6V2K%2Bap%2Fm5gIBg8OATzbYjxm%2Ba0qD6G8Fy9IS9ekyNcf%2Bb1zG1OFoJ7mL2DGEamgvXrmeRdgeJhhQk%2BiqEz2aAiDOXdpRw5prJiqDvewZNca5xRVPT%2FNYUnC%2BKnoYWNpMaHobcIIbqNm0wsKJLb%2BcXVPWC8B0sBAbJESRtJ%2B%2B64ISuTTcsGNrdyELppLVPt%2BX1P%2FA1F8T4xCiwGbG609op0c0skA%2F%2Bha9E%2F9P0kpDLED2DCOEBZVsIRwrhQKDmt8fJ9JwIN04T%2F%2FaHs%2BosoIaCnySQ9FCgnRZrNH0hEIwr3CENAo36fUJ83BTUivx4Tyee1zrLqeCGO49NUIgiJNii3PfMUl5vGhVUvSlfsb%2F5FWmxDIrp6zbXkcQQ7DCV9eDEBjqkAaDu8X915l9aDV2PNf31OJPxRp9joBPmblxiIAARAZZgRsThkrlzAdxTfQ40dpZdygOHqBZ8R8iAPpCGbLUAS4hiEN0TtDn%2BijdMrDRROJ%2BTB0RHNKJORTP8PTPrCYCTcEjmCRjn9r6baeAnRTJWLL0VE4JLApBSMNRVSC6AxBkhUjizMja38Z5BSeVfx4zItrDF0OJ7I8bJnoBDUF%2BGFbTv7nyT&X-Amz-Signature=76d495f1575853cb94d3ae1ae10542dd2ff0f8fb35ebc62dbed96a31030754ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDC5PD46%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjVY%2Bt7MEINHBwNEfBb7HgA4x%2F1UgiaQZhLpoJUYHX6AIhAIssPzRamIfyUho4sx04d2A7VreI0VG7r6LbwiSyiuo6KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igza4yspG0ZrVL65iykq3APpg2Skk9qnFJISeCpoEI9ICGScgeN94L6d8PtE5LICbjqwuQL3kD6ycEzgw%2BZVhnbwLg54P3AhCxo7s1Mc3VD%2BAby3d7%2F3YOUGu1QQ3KqzLTZZnM8rI3JHmMqFduymyLQ7brFyUyoho4HkxDBgQhVJkUPvQpQI6nhkEcZHXpsKMxBCYOwVBuHzGszPImT98izj5fFcKAyCGNcPTBR3iGzR2N1uc17mpMhjF4vWi2fZ8vixqDdv1XlzaX7%2FKt9%2BDO6V2K%2Bap%2Fm5gIBg8OATzbYjxm%2Ba0qD6G8Fy9IS9ekyNcf%2Bb1zG1OFoJ7mL2DGEamgvXrmeRdgeJhhQk%2BiqEz2aAiDOXdpRw5prJiqDvewZNca5xRVPT%2FNYUnC%2BKnoYWNpMaHobcIIbqNm0wsKJLb%2BcXVPWC8B0sBAbJESRtJ%2B%2B64ISuTTcsGNrdyELppLVPt%2BX1P%2FA1F8T4xCiwGbG609op0c0skA%2F%2Bha9E%2F9P0kpDLED2DCOEBZVsIRwrhQKDmt8fJ9JwIN04T%2F%2FaHs%2BosoIaCnySQ9FCgnRZrNH0hEIwr3CENAo36fUJ83BTUivx4Tyee1zrLqeCGO49NUIgiJNii3PfMUl5vGhVUvSlfsb%2F5FWmxDIrp6zbXkcQQ7DCV9eDEBjqkAaDu8X915l9aDV2PNf31OJPxRp9joBPmblxiIAARAZZgRsThkrlzAdxTfQ40dpZdygOHqBZ8R8iAPpCGbLUAS4hiEN0TtDn%2BijdMrDRROJ%2BTB0RHNKJORTP8PTPrCYCTcEjmCRjn9r6baeAnRTJWLL0VE4JLApBSMNRVSC6AxBkhUjizMja38Z5BSeVfx4zItrDF0OJ7I8bJnoBDUF%2BGFbTv7nyT&X-Amz-Signature=0ac3c6bb424ec97bd2fba2fd960c76b5333465d3bdfe2eaa5d0ff8bdd991978e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDC5PD46%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjVY%2Bt7MEINHBwNEfBb7HgA4x%2F1UgiaQZhLpoJUYHX6AIhAIssPzRamIfyUho4sx04d2A7VreI0VG7r6LbwiSyiuo6KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igza4yspG0ZrVL65iykq3APpg2Skk9qnFJISeCpoEI9ICGScgeN94L6d8PtE5LICbjqwuQL3kD6ycEzgw%2BZVhnbwLg54P3AhCxo7s1Mc3VD%2BAby3d7%2F3YOUGu1QQ3KqzLTZZnM8rI3JHmMqFduymyLQ7brFyUyoho4HkxDBgQhVJkUPvQpQI6nhkEcZHXpsKMxBCYOwVBuHzGszPImT98izj5fFcKAyCGNcPTBR3iGzR2N1uc17mpMhjF4vWi2fZ8vixqDdv1XlzaX7%2FKt9%2BDO6V2K%2Bap%2Fm5gIBg8OATzbYjxm%2Ba0qD6G8Fy9IS9ekyNcf%2Bb1zG1OFoJ7mL2DGEamgvXrmeRdgeJhhQk%2BiqEz2aAiDOXdpRw5prJiqDvewZNca5xRVPT%2FNYUnC%2BKnoYWNpMaHobcIIbqNm0wsKJLb%2BcXVPWC8B0sBAbJESRtJ%2B%2B64ISuTTcsGNrdyELppLVPt%2BX1P%2FA1F8T4xCiwGbG609op0c0skA%2F%2Bha9E%2F9P0kpDLED2DCOEBZVsIRwrhQKDmt8fJ9JwIN04T%2F%2FaHs%2BosoIaCnySQ9FCgnRZrNH0hEIwr3CENAo36fUJ83BTUivx4Tyee1zrLqeCGO49NUIgiJNii3PfMUl5vGhVUvSlfsb%2F5FWmxDIrp6zbXkcQQ7DCV9eDEBjqkAaDu8X915l9aDV2PNf31OJPxRp9joBPmblxiIAARAZZgRsThkrlzAdxTfQ40dpZdygOHqBZ8R8iAPpCGbLUAS4hiEN0TtDn%2BijdMrDRROJ%2BTB0RHNKJORTP8PTPrCYCTcEjmCRjn9r6baeAnRTJWLL0VE4JLApBSMNRVSC6AxBkhUjizMja38Z5BSeVfx4zItrDF0OJ7I8bJnoBDUF%2BGFbTv7nyT&X-Amz-Signature=0526aec3dfb5e6134578c72fdeb700f88d1d002630c4beff3c6fc72c883c4d9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDC5PD46%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjVY%2Bt7MEINHBwNEfBb7HgA4x%2F1UgiaQZhLpoJUYHX6AIhAIssPzRamIfyUho4sx04d2A7VreI0VG7r6LbwiSyiuo6KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igza4yspG0ZrVL65iykq3APpg2Skk9qnFJISeCpoEI9ICGScgeN94L6d8PtE5LICbjqwuQL3kD6ycEzgw%2BZVhnbwLg54P3AhCxo7s1Mc3VD%2BAby3d7%2F3YOUGu1QQ3KqzLTZZnM8rI3JHmMqFduymyLQ7brFyUyoho4HkxDBgQhVJkUPvQpQI6nhkEcZHXpsKMxBCYOwVBuHzGszPImT98izj5fFcKAyCGNcPTBR3iGzR2N1uc17mpMhjF4vWi2fZ8vixqDdv1XlzaX7%2FKt9%2BDO6V2K%2Bap%2Fm5gIBg8OATzbYjxm%2Ba0qD6G8Fy9IS9ekyNcf%2Bb1zG1OFoJ7mL2DGEamgvXrmeRdgeJhhQk%2BiqEz2aAiDOXdpRw5prJiqDvewZNca5xRVPT%2FNYUnC%2BKnoYWNpMaHobcIIbqNm0wsKJLb%2BcXVPWC8B0sBAbJESRtJ%2B%2B64ISuTTcsGNrdyELppLVPt%2BX1P%2FA1F8T4xCiwGbG609op0c0skA%2F%2Bha9E%2F9P0kpDLED2DCOEBZVsIRwrhQKDmt8fJ9JwIN04T%2F%2FaHs%2BosoIaCnySQ9FCgnRZrNH0hEIwr3CENAo36fUJ83BTUivx4Tyee1zrLqeCGO49NUIgiJNii3PfMUl5vGhVUvSlfsb%2F5FWmxDIrp6zbXkcQQ7DCV9eDEBjqkAaDu8X915l9aDV2PNf31OJPxRp9joBPmblxiIAARAZZgRsThkrlzAdxTfQ40dpZdygOHqBZ8R8iAPpCGbLUAS4hiEN0TtDn%2BijdMrDRROJ%2BTB0RHNKJORTP8PTPrCYCTcEjmCRjn9r6baeAnRTJWLL0VE4JLApBSMNRVSC6AxBkhUjizMja38Z5BSeVfx4zItrDF0OJ7I8bJnoBDUF%2BGFbTv7nyT&X-Amz-Signature=a4dbb5988fc45384af74d361fd291ec0dcb0275fdcf677e8f5cba10250c7843b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDC5PD46%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjVY%2Bt7MEINHBwNEfBb7HgA4x%2F1UgiaQZhLpoJUYHX6AIhAIssPzRamIfyUho4sx04d2A7VreI0VG7r6LbwiSyiuo6KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igza4yspG0ZrVL65iykq3APpg2Skk9qnFJISeCpoEI9ICGScgeN94L6d8PtE5LICbjqwuQL3kD6ycEzgw%2BZVhnbwLg54P3AhCxo7s1Mc3VD%2BAby3d7%2F3YOUGu1QQ3KqzLTZZnM8rI3JHmMqFduymyLQ7brFyUyoho4HkxDBgQhVJkUPvQpQI6nhkEcZHXpsKMxBCYOwVBuHzGszPImT98izj5fFcKAyCGNcPTBR3iGzR2N1uc17mpMhjF4vWi2fZ8vixqDdv1XlzaX7%2FKt9%2BDO6V2K%2Bap%2Fm5gIBg8OATzbYjxm%2Ba0qD6G8Fy9IS9ekyNcf%2Bb1zG1OFoJ7mL2DGEamgvXrmeRdgeJhhQk%2BiqEz2aAiDOXdpRw5prJiqDvewZNca5xRVPT%2FNYUnC%2BKnoYWNpMaHobcIIbqNm0wsKJLb%2BcXVPWC8B0sBAbJESRtJ%2B%2B64ISuTTcsGNrdyELppLVPt%2BX1P%2FA1F8T4xCiwGbG609op0c0skA%2F%2Bha9E%2F9P0kpDLED2DCOEBZVsIRwrhQKDmt8fJ9JwIN04T%2F%2FaHs%2BosoIaCnySQ9FCgnRZrNH0hEIwr3CENAo36fUJ83BTUivx4Tyee1zrLqeCGO49NUIgiJNii3PfMUl5vGhVUvSlfsb%2F5FWmxDIrp6zbXkcQQ7DCV9eDEBjqkAaDu8X915l9aDV2PNf31OJPxRp9joBPmblxiIAARAZZgRsThkrlzAdxTfQ40dpZdygOHqBZ8R8iAPpCGbLUAS4hiEN0TtDn%2BijdMrDRROJ%2BTB0RHNKJORTP8PTPrCYCTcEjmCRjn9r6baeAnRTJWLL0VE4JLApBSMNRVSC6AxBkhUjizMja38Z5BSeVfx4zItrDF0OJ7I8bJnoBDUF%2BGFbTv7nyT&X-Amz-Signature=47de83bce74cd7c00daadec318ac578f07b7b0003e1fee650a0da30ab66dae8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDC5PD46%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjVY%2Bt7MEINHBwNEfBb7HgA4x%2F1UgiaQZhLpoJUYHX6AIhAIssPzRamIfyUho4sx04d2A7VreI0VG7r6LbwiSyiuo6KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igza4yspG0ZrVL65iykq3APpg2Skk9qnFJISeCpoEI9ICGScgeN94L6d8PtE5LICbjqwuQL3kD6ycEzgw%2BZVhnbwLg54P3AhCxo7s1Mc3VD%2BAby3d7%2F3YOUGu1QQ3KqzLTZZnM8rI3JHmMqFduymyLQ7brFyUyoho4HkxDBgQhVJkUPvQpQI6nhkEcZHXpsKMxBCYOwVBuHzGszPImT98izj5fFcKAyCGNcPTBR3iGzR2N1uc17mpMhjF4vWi2fZ8vixqDdv1XlzaX7%2FKt9%2BDO6V2K%2Bap%2Fm5gIBg8OATzbYjxm%2Ba0qD6G8Fy9IS9ekyNcf%2Bb1zG1OFoJ7mL2DGEamgvXrmeRdgeJhhQk%2BiqEz2aAiDOXdpRw5prJiqDvewZNca5xRVPT%2FNYUnC%2BKnoYWNpMaHobcIIbqNm0wsKJLb%2BcXVPWC8B0sBAbJESRtJ%2B%2B64ISuTTcsGNrdyELppLVPt%2BX1P%2FA1F8T4xCiwGbG609op0c0skA%2F%2Bha9E%2F9P0kpDLED2DCOEBZVsIRwrhQKDmt8fJ9JwIN04T%2F%2FaHs%2BosoIaCnySQ9FCgnRZrNH0hEIwr3CENAo36fUJ83BTUivx4Tyee1zrLqeCGO49NUIgiJNii3PfMUl5vGhVUvSlfsb%2F5FWmxDIrp6zbXkcQQ7DCV9eDEBjqkAaDu8X915l9aDV2PNf31OJPxRp9joBPmblxiIAARAZZgRsThkrlzAdxTfQ40dpZdygOHqBZ8R8iAPpCGbLUAS4hiEN0TtDn%2BijdMrDRROJ%2BTB0RHNKJORTP8PTPrCYCTcEjmCRjn9r6baeAnRTJWLL0VE4JLApBSMNRVSC6AxBkhUjizMja38Z5BSeVfx4zItrDF0OJ7I8bJnoBDUF%2BGFbTv7nyT&X-Amz-Signature=7dc0099c4c2e0b03510e88c819d71968a470f87eea2992e6f4f5b651cb79d0e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDC5PD46%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjVY%2Bt7MEINHBwNEfBb7HgA4x%2F1UgiaQZhLpoJUYHX6AIhAIssPzRamIfyUho4sx04d2A7VreI0VG7r6LbwiSyiuo6KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igza4yspG0ZrVL65iykq3APpg2Skk9qnFJISeCpoEI9ICGScgeN94L6d8PtE5LICbjqwuQL3kD6ycEzgw%2BZVhnbwLg54P3AhCxo7s1Mc3VD%2BAby3d7%2F3YOUGu1QQ3KqzLTZZnM8rI3JHmMqFduymyLQ7brFyUyoho4HkxDBgQhVJkUPvQpQI6nhkEcZHXpsKMxBCYOwVBuHzGszPImT98izj5fFcKAyCGNcPTBR3iGzR2N1uc17mpMhjF4vWi2fZ8vixqDdv1XlzaX7%2FKt9%2BDO6V2K%2Bap%2Fm5gIBg8OATzbYjxm%2Ba0qD6G8Fy9IS9ekyNcf%2Bb1zG1OFoJ7mL2DGEamgvXrmeRdgeJhhQk%2BiqEz2aAiDOXdpRw5prJiqDvewZNca5xRVPT%2FNYUnC%2BKnoYWNpMaHobcIIbqNm0wsKJLb%2BcXVPWC8B0sBAbJESRtJ%2B%2B64ISuTTcsGNrdyELppLVPt%2BX1P%2FA1F8T4xCiwGbG609op0c0skA%2F%2Bha9E%2F9P0kpDLED2DCOEBZVsIRwrhQKDmt8fJ9JwIN04T%2F%2FaHs%2BosoIaCnySQ9FCgnRZrNH0hEIwr3CENAo36fUJ83BTUivx4Tyee1zrLqeCGO49NUIgiJNii3PfMUl5vGhVUvSlfsb%2F5FWmxDIrp6zbXkcQQ7DCV9eDEBjqkAaDu8X915l9aDV2PNf31OJPxRp9joBPmblxiIAARAZZgRsThkrlzAdxTfQ40dpZdygOHqBZ8R8iAPpCGbLUAS4hiEN0TtDn%2BijdMrDRROJ%2BTB0RHNKJORTP8PTPrCYCTcEjmCRjn9r6baeAnRTJWLL0VE4JLApBSMNRVSC6AxBkhUjizMja38Z5BSeVfx4zItrDF0OJ7I8bJnoBDUF%2BGFbTv7nyT&X-Amz-Signature=76d495f1575853cb94d3ae1ae10542dd2ff0f8fb35ebc62dbed96a31030754ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
