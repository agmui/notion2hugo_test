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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HBDT52Z%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIALmUmrMsCAJJj2XorqcCgU%2BXKJ9JBDA4SWHdcBr0tHqAiA39ZcEwC50jnKTtvV%2F6bur8queHGLmquIohcewwHLkeiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY0ycL3Kltekah0ufKtwDgdRI5EtF6%2Bh2WsVB%2B1eMBT9wccxvWkb6DeULXwDl2FIQKRLjmDFvuV6aqges6W%2Fr2%2BE%2BWXsPd%2BA7jWID%2FnvR5dm1Z3g%2BTJuWbBuANKCdBm3Gf5%2FgzuNg7ZDzMITIEPvhTEPRON3jXvYVi7LXVXSslePf%2BBX2qtwaDAm48AGPZZOLZgyJGThdp6Xb3uYRh%2BX1JuDsVTAqf06cxE3JbXRqv7LmNnPas7eWuE%2BDyi8nDV19lfgRPnjG5xa25qYID8uYu%2F20Bo4cnnnViYmVfzIbJsWnoQMXxUjpiJUnyeaZ7HB1gx3DUtoKSXatHkOmrFNB7A23sUHtJIsd0v44sy%2FvxY9R9JD9Kd1rCaSPMiVqMieoZcozGlre2KzdsM2PJBPwv3AYoJ9VKvi58islmJ8KKQvStcGOul81oqTNSLacXEfVDESH9hgYWZ5Yboj98Gal9YU0TCxSRTIIDtOr51e7c11Mopj71NZC07QBe8jA%2BOou2YO5YOT1djI3h8USlM6xrZyX9t1ErVnzIXYeKw5WouQxt90fZPTULYDFziBXLqAflYTieFAnQ0L3%2FOYAKAbFjRZou5TWF36omKs74OeQ49LEPdfjh5HbGg8QRcF93lo3KvUzGL4ThiGOsm0wspK%2FzAY6pgFNfhVSAOr00OLno5Qo9oTBHbWoRackPXnl4U7BmFcHtn60oWnPxIi%2B2A47M6nkwX8zEjEjVZgnYYCE4GytmdhKz0S7%2BRbtSGOmrM%2B6hKO9WE2FmBdGmOOj1sPLcNdNH1REtFwV5q8fLt0EY5WzVLahxwJMR9k40DZoalCGHMbJU%2FweJkZi6nSanjJFsDtl%2FIXRptfCAm4u6Oi2vdzXYIT5I1r4Ry7v&X-Amz-Signature=17b499038cb25f99a9e4891df1fb45fa22c25d6c8626a26df80b8122bb191568&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ULQ3GTZ%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCPerv7zRhDfAwJMMBFmTYChoEVKJKqPQOEyP6bcUV2zwIhAJoicW0aZS%2FgVO1OFHvpkWaFbBCYjKg3kivfJUO8zQUAKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwE0LFFEkcT0vszt8q3AMt2Q9bU19ZBus5R1OVgVwDVh4YxvGSBPnQ64eFkWBKJl1mO9WicrBnOjFWvIByEZzkVps%2FW0rWH9GQ2UQsmGABAGG0jXj0NaaAvo72MkC8rCBs47frOGM53AdrPQLn5czMol%2FZntyBG6JLforz5afC%2Bv%2FuVBeFtDGzXieeJBEt3l7BrevuNKzrhmgZZeGL03RpeFHyjVnTppIF52U3y%2FGVgp3QVLm3kROAizW6vUDufN2tlF7A6FUVV3xq5PW6sPZq%2BVvqC4f5TjxdoRVzSLjoIuSoQH2xn2n85Cb3rfbpa0G40e9uc2RyB7iQZryqLm%2BqleA159woJjAFNG2ggfQTH7cNqc2q3376%2BtBgYEmXuYTSxdBbSWEqkmtLlxcPY%2B43IVOQze0PMK4zC%2BaIlN3j75Iy3vUxQ4ELlG5aOG8kwuo%2BDczDHWqI4%2FzCcsoy%2BZoR9T2zANy%2FyCWRnD9jZovq0Bm%2FB%2BQO89PQwrNrGhJt79lIIrMC%2FQe5CZbt9%2FKxuEhW9X3F4IwzWUQu7Cx33FaRbfIh61rLLlt49w1TpbnKj2g115B4zu17672d%2Fxhi80SzRpy4UDG6zZb15Hpc4h6RyMtV6xsxGpcHooV%2Fn8uFJr1muG9uSJiTF1ZqCTCdk7%2FMBjqkAecC4OPmUv89e%2BY5rylj%2B99B%2Bwk4Dsai%2Fb8X8pgYfdI%2BYBUCeRrHPADn09YYxetD7kGnsR6C1w8CZQDM5TyIX%2FKotWnZRxeXramX4ny%2Fwgs%2Fq9DcQsXqojKg4cpPiOkbZiuQ0Rlzjo3D2TusP38yXXn66Dpc4Yy8CQJCh6kNbrg88uPPfkNuYYBsbu3AndKTq%2FCQOZxxkoAM7iLjw2r15%2BilsNzE&X-Amz-Signature=a94694010cea692279300e9e8ade34f896109cb363628c459c71fa338250b54f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ULQ3GTZ%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCPerv7zRhDfAwJMMBFmTYChoEVKJKqPQOEyP6bcUV2zwIhAJoicW0aZS%2FgVO1OFHvpkWaFbBCYjKg3kivfJUO8zQUAKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwE0LFFEkcT0vszt8q3AMt2Q9bU19ZBus5R1OVgVwDVh4YxvGSBPnQ64eFkWBKJl1mO9WicrBnOjFWvIByEZzkVps%2FW0rWH9GQ2UQsmGABAGG0jXj0NaaAvo72MkC8rCBs47frOGM53AdrPQLn5czMol%2FZntyBG6JLforz5afC%2Bv%2FuVBeFtDGzXieeJBEt3l7BrevuNKzrhmgZZeGL03RpeFHyjVnTppIF52U3y%2FGVgp3QVLm3kROAizW6vUDufN2tlF7A6FUVV3xq5PW6sPZq%2BVvqC4f5TjxdoRVzSLjoIuSoQH2xn2n85Cb3rfbpa0G40e9uc2RyB7iQZryqLm%2BqleA159woJjAFNG2ggfQTH7cNqc2q3376%2BtBgYEmXuYTSxdBbSWEqkmtLlxcPY%2B43IVOQze0PMK4zC%2BaIlN3j75Iy3vUxQ4ELlG5aOG8kwuo%2BDczDHWqI4%2FzCcsoy%2BZoR9T2zANy%2FyCWRnD9jZovq0Bm%2FB%2BQO89PQwrNrGhJt79lIIrMC%2FQe5CZbt9%2FKxuEhW9X3F4IwzWUQu7Cx33FaRbfIh61rLLlt49w1TpbnKj2g115B4zu17672d%2Fxhi80SzRpy4UDG6zZb15Hpc4h6RyMtV6xsxGpcHooV%2Fn8uFJr1muG9uSJiTF1ZqCTCdk7%2FMBjqkAecC4OPmUv89e%2BY5rylj%2B99B%2Bwk4Dsai%2Fb8X8pgYfdI%2BYBUCeRrHPADn09YYxetD7kGnsR6C1w8CZQDM5TyIX%2FKotWnZRxeXramX4ny%2Fwgs%2Fq9DcQsXqojKg4cpPiOkbZiuQ0Rlzjo3D2TusP38yXXn66Dpc4Yy8CQJCh6kNbrg88uPPfkNuYYBsbu3AndKTq%2FCQOZxxkoAM7iLjw2r15%2BilsNzE&X-Amz-Signature=1a5cfb887e6ba04456aebc7b4f970597ec0d0416e7807f030f1eeb6bf08a7d37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ULQ3GTZ%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCPerv7zRhDfAwJMMBFmTYChoEVKJKqPQOEyP6bcUV2zwIhAJoicW0aZS%2FgVO1OFHvpkWaFbBCYjKg3kivfJUO8zQUAKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwE0LFFEkcT0vszt8q3AMt2Q9bU19ZBus5R1OVgVwDVh4YxvGSBPnQ64eFkWBKJl1mO9WicrBnOjFWvIByEZzkVps%2FW0rWH9GQ2UQsmGABAGG0jXj0NaaAvo72MkC8rCBs47frOGM53AdrPQLn5czMol%2FZntyBG6JLforz5afC%2Bv%2FuVBeFtDGzXieeJBEt3l7BrevuNKzrhmgZZeGL03RpeFHyjVnTppIF52U3y%2FGVgp3QVLm3kROAizW6vUDufN2tlF7A6FUVV3xq5PW6sPZq%2BVvqC4f5TjxdoRVzSLjoIuSoQH2xn2n85Cb3rfbpa0G40e9uc2RyB7iQZryqLm%2BqleA159woJjAFNG2ggfQTH7cNqc2q3376%2BtBgYEmXuYTSxdBbSWEqkmtLlxcPY%2B43IVOQze0PMK4zC%2BaIlN3j75Iy3vUxQ4ELlG5aOG8kwuo%2BDczDHWqI4%2FzCcsoy%2BZoR9T2zANy%2FyCWRnD9jZovq0Bm%2FB%2BQO89PQwrNrGhJt79lIIrMC%2FQe5CZbt9%2FKxuEhW9X3F4IwzWUQu7Cx33FaRbfIh61rLLlt49w1TpbnKj2g115B4zu17672d%2Fxhi80SzRpy4UDG6zZb15Hpc4h6RyMtV6xsxGpcHooV%2Fn8uFJr1muG9uSJiTF1ZqCTCdk7%2FMBjqkAecC4OPmUv89e%2BY5rylj%2B99B%2Bwk4Dsai%2Fb8X8pgYfdI%2BYBUCeRrHPADn09YYxetD7kGnsR6C1w8CZQDM5TyIX%2FKotWnZRxeXramX4ny%2Fwgs%2Fq9DcQsXqojKg4cpPiOkbZiuQ0Rlzjo3D2TusP38yXXn66Dpc4Yy8CQJCh6kNbrg88uPPfkNuYYBsbu3AndKTq%2FCQOZxxkoAM7iLjw2r15%2BilsNzE&X-Amz-Signature=c44356c71994a767ea22a674dc01e60d25905f5ece3a01d6713f69db592724ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ULQ3GTZ%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCPerv7zRhDfAwJMMBFmTYChoEVKJKqPQOEyP6bcUV2zwIhAJoicW0aZS%2FgVO1OFHvpkWaFbBCYjKg3kivfJUO8zQUAKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwE0LFFEkcT0vszt8q3AMt2Q9bU19ZBus5R1OVgVwDVh4YxvGSBPnQ64eFkWBKJl1mO9WicrBnOjFWvIByEZzkVps%2FW0rWH9GQ2UQsmGABAGG0jXj0NaaAvo72MkC8rCBs47frOGM53AdrPQLn5czMol%2FZntyBG6JLforz5afC%2Bv%2FuVBeFtDGzXieeJBEt3l7BrevuNKzrhmgZZeGL03RpeFHyjVnTppIF52U3y%2FGVgp3QVLm3kROAizW6vUDufN2tlF7A6FUVV3xq5PW6sPZq%2BVvqC4f5TjxdoRVzSLjoIuSoQH2xn2n85Cb3rfbpa0G40e9uc2RyB7iQZryqLm%2BqleA159woJjAFNG2ggfQTH7cNqc2q3376%2BtBgYEmXuYTSxdBbSWEqkmtLlxcPY%2B43IVOQze0PMK4zC%2BaIlN3j75Iy3vUxQ4ELlG5aOG8kwuo%2BDczDHWqI4%2FzCcsoy%2BZoR9T2zANy%2FyCWRnD9jZovq0Bm%2FB%2BQO89PQwrNrGhJt79lIIrMC%2FQe5CZbt9%2FKxuEhW9X3F4IwzWUQu7Cx33FaRbfIh61rLLlt49w1TpbnKj2g115B4zu17672d%2Fxhi80SzRpy4UDG6zZb15Hpc4h6RyMtV6xsxGpcHooV%2Fn8uFJr1muG9uSJiTF1ZqCTCdk7%2FMBjqkAecC4OPmUv89e%2BY5rylj%2B99B%2Bwk4Dsai%2Fb8X8pgYfdI%2BYBUCeRrHPADn09YYxetD7kGnsR6C1w8CZQDM5TyIX%2FKotWnZRxeXramX4ny%2Fwgs%2Fq9DcQsXqojKg4cpPiOkbZiuQ0Rlzjo3D2TusP38yXXn66Dpc4Yy8CQJCh6kNbrg88uPPfkNuYYBsbu3AndKTq%2FCQOZxxkoAM7iLjw2r15%2BilsNzE&X-Amz-Signature=f6b3db99d65d341ec76b33500cbda9cc1a6209589bdd47fedf07a27bd9f31bb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ULQ3GTZ%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCPerv7zRhDfAwJMMBFmTYChoEVKJKqPQOEyP6bcUV2zwIhAJoicW0aZS%2FgVO1OFHvpkWaFbBCYjKg3kivfJUO8zQUAKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwE0LFFEkcT0vszt8q3AMt2Q9bU19ZBus5R1OVgVwDVh4YxvGSBPnQ64eFkWBKJl1mO9WicrBnOjFWvIByEZzkVps%2FW0rWH9GQ2UQsmGABAGG0jXj0NaaAvo72MkC8rCBs47frOGM53AdrPQLn5czMol%2FZntyBG6JLforz5afC%2Bv%2FuVBeFtDGzXieeJBEt3l7BrevuNKzrhmgZZeGL03RpeFHyjVnTppIF52U3y%2FGVgp3QVLm3kROAizW6vUDufN2tlF7A6FUVV3xq5PW6sPZq%2BVvqC4f5TjxdoRVzSLjoIuSoQH2xn2n85Cb3rfbpa0G40e9uc2RyB7iQZryqLm%2BqleA159woJjAFNG2ggfQTH7cNqc2q3376%2BtBgYEmXuYTSxdBbSWEqkmtLlxcPY%2B43IVOQze0PMK4zC%2BaIlN3j75Iy3vUxQ4ELlG5aOG8kwuo%2BDczDHWqI4%2FzCcsoy%2BZoR9T2zANy%2FyCWRnD9jZovq0Bm%2FB%2BQO89PQwrNrGhJt79lIIrMC%2FQe5CZbt9%2FKxuEhW9X3F4IwzWUQu7Cx33FaRbfIh61rLLlt49w1TpbnKj2g115B4zu17672d%2Fxhi80SzRpy4UDG6zZb15Hpc4h6RyMtV6xsxGpcHooV%2Fn8uFJr1muG9uSJiTF1ZqCTCdk7%2FMBjqkAecC4OPmUv89e%2BY5rylj%2B99B%2Bwk4Dsai%2Fb8X8pgYfdI%2BYBUCeRrHPADn09YYxetD7kGnsR6C1w8CZQDM5TyIX%2FKotWnZRxeXramX4ny%2Fwgs%2Fq9DcQsXqojKg4cpPiOkbZiuQ0Rlzjo3D2TusP38yXXn66Dpc4Yy8CQJCh6kNbrg88uPPfkNuYYBsbu3AndKTq%2FCQOZxxkoAM7iLjw2r15%2BilsNzE&X-Amz-Signature=5b0e58e89757d792bb6d691db7d14ce36cd24223f678e0851f141b1f51033c0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ULQ3GTZ%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCPerv7zRhDfAwJMMBFmTYChoEVKJKqPQOEyP6bcUV2zwIhAJoicW0aZS%2FgVO1OFHvpkWaFbBCYjKg3kivfJUO8zQUAKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwE0LFFEkcT0vszt8q3AMt2Q9bU19ZBus5R1OVgVwDVh4YxvGSBPnQ64eFkWBKJl1mO9WicrBnOjFWvIByEZzkVps%2FW0rWH9GQ2UQsmGABAGG0jXj0NaaAvo72MkC8rCBs47frOGM53AdrPQLn5czMol%2FZntyBG6JLforz5afC%2Bv%2FuVBeFtDGzXieeJBEt3l7BrevuNKzrhmgZZeGL03RpeFHyjVnTppIF52U3y%2FGVgp3QVLm3kROAizW6vUDufN2tlF7A6FUVV3xq5PW6sPZq%2BVvqC4f5TjxdoRVzSLjoIuSoQH2xn2n85Cb3rfbpa0G40e9uc2RyB7iQZryqLm%2BqleA159woJjAFNG2ggfQTH7cNqc2q3376%2BtBgYEmXuYTSxdBbSWEqkmtLlxcPY%2B43IVOQze0PMK4zC%2BaIlN3j75Iy3vUxQ4ELlG5aOG8kwuo%2BDczDHWqI4%2FzCcsoy%2BZoR9T2zANy%2FyCWRnD9jZovq0Bm%2FB%2BQO89PQwrNrGhJt79lIIrMC%2FQe5CZbt9%2FKxuEhW9X3F4IwzWUQu7Cx33FaRbfIh61rLLlt49w1TpbnKj2g115B4zu17672d%2Fxhi80SzRpy4UDG6zZb15Hpc4h6RyMtV6xsxGpcHooV%2Fn8uFJr1muG9uSJiTF1ZqCTCdk7%2FMBjqkAecC4OPmUv89e%2BY5rylj%2B99B%2Bwk4Dsai%2Fb8X8pgYfdI%2BYBUCeRrHPADn09YYxetD7kGnsR6C1w8CZQDM5TyIX%2FKotWnZRxeXramX4ny%2Fwgs%2Fq9DcQsXqojKg4cpPiOkbZiuQ0Rlzjo3D2TusP38yXXn66Dpc4Yy8CQJCh6kNbrg88uPPfkNuYYBsbu3AndKTq%2FCQOZxxkoAM7iLjw2r15%2BilsNzE&X-Amz-Signature=ab6d849ebab87fd5deafea4a7d9fdcde5ce9c1b0fc3adc91e3327df98b99bfc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ULQ3GTZ%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCPerv7zRhDfAwJMMBFmTYChoEVKJKqPQOEyP6bcUV2zwIhAJoicW0aZS%2FgVO1OFHvpkWaFbBCYjKg3kivfJUO8zQUAKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwE0LFFEkcT0vszt8q3AMt2Q9bU19ZBus5R1OVgVwDVh4YxvGSBPnQ64eFkWBKJl1mO9WicrBnOjFWvIByEZzkVps%2FW0rWH9GQ2UQsmGABAGG0jXj0NaaAvo72MkC8rCBs47frOGM53AdrPQLn5czMol%2FZntyBG6JLforz5afC%2Bv%2FuVBeFtDGzXieeJBEt3l7BrevuNKzrhmgZZeGL03RpeFHyjVnTppIF52U3y%2FGVgp3QVLm3kROAizW6vUDufN2tlF7A6FUVV3xq5PW6sPZq%2BVvqC4f5TjxdoRVzSLjoIuSoQH2xn2n85Cb3rfbpa0G40e9uc2RyB7iQZryqLm%2BqleA159woJjAFNG2ggfQTH7cNqc2q3376%2BtBgYEmXuYTSxdBbSWEqkmtLlxcPY%2B43IVOQze0PMK4zC%2BaIlN3j75Iy3vUxQ4ELlG5aOG8kwuo%2BDczDHWqI4%2FzCcsoy%2BZoR9T2zANy%2FyCWRnD9jZovq0Bm%2FB%2BQO89PQwrNrGhJt79lIIrMC%2FQe5CZbt9%2FKxuEhW9X3F4IwzWUQu7Cx33FaRbfIh61rLLlt49w1TpbnKj2g115B4zu17672d%2Fxhi80SzRpy4UDG6zZb15Hpc4h6RyMtV6xsxGpcHooV%2Fn8uFJr1muG9uSJiTF1ZqCTCdk7%2FMBjqkAecC4OPmUv89e%2BY5rylj%2B99B%2Bwk4Dsai%2Fb8X8pgYfdI%2BYBUCeRrHPADn09YYxetD7kGnsR6C1w8CZQDM5TyIX%2FKotWnZRxeXramX4ny%2Fwgs%2Fq9DcQsXqojKg4cpPiOkbZiuQ0Rlzjo3D2TusP38yXXn66Dpc4Yy8CQJCh6kNbrg88uPPfkNuYYBsbu3AndKTq%2FCQOZxxkoAM7iLjw2r15%2BilsNzE&X-Amz-Signature=9efa20cfcc7bff8c0e4abdc56690fa12595eec7e6d3a7b3a2ab4e9d005d57f7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ULQ3GTZ%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCPerv7zRhDfAwJMMBFmTYChoEVKJKqPQOEyP6bcUV2zwIhAJoicW0aZS%2FgVO1OFHvpkWaFbBCYjKg3kivfJUO8zQUAKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwE0LFFEkcT0vszt8q3AMt2Q9bU19ZBus5R1OVgVwDVh4YxvGSBPnQ64eFkWBKJl1mO9WicrBnOjFWvIByEZzkVps%2FW0rWH9GQ2UQsmGABAGG0jXj0NaaAvo72MkC8rCBs47frOGM53AdrPQLn5czMol%2FZntyBG6JLforz5afC%2Bv%2FuVBeFtDGzXieeJBEt3l7BrevuNKzrhmgZZeGL03RpeFHyjVnTppIF52U3y%2FGVgp3QVLm3kROAizW6vUDufN2tlF7A6FUVV3xq5PW6sPZq%2BVvqC4f5TjxdoRVzSLjoIuSoQH2xn2n85Cb3rfbpa0G40e9uc2RyB7iQZryqLm%2BqleA159woJjAFNG2ggfQTH7cNqc2q3376%2BtBgYEmXuYTSxdBbSWEqkmtLlxcPY%2B43IVOQze0PMK4zC%2BaIlN3j75Iy3vUxQ4ELlG5aOG8kwuo%2BDczDHWqI4%2FzCcsoy%2BZoR9T2zANy%2FyCWRnD9jZovq0Bm%2FB%2BQO89PQwrNrGhJt79lIIrMC%2FQe5CZbt9%2FKxuEhW9X3F4IwzWUQu7Cx33FaRbfIh61rLLlt49w1TpbnKj2g115B4zu17672d%2Fxhi80SzRpy4UDG6zZb15Hpc4h6RyMtV6xsxGpcHooV%2Fn8uFJr1muG9uSJiTF1ZqCTCdk7%2FMBjqkAecC4OPmUv89e%2BY5rylj%2B99B%2Bwk4Dsai%2Fb8X8pgYfdI%2BYBUCeRrHPADn09YYxetD7kGnsR6C1w8CZQDM5TyIX%2FKotWnZRxeXramX4ny%2Fwgs%2Fq9DcQsXqojKg4cpPiOkbZiuQ0Rlzjo3D2TusP38yXXn66Dpc4Yy8CQJCh6kNbrg88uPPfkNuYYBsbu3AndKTq%2FCQOZxxkoAM7iLjw2r15%2BilsNzE&X-Amz-Signature=7592e12d3ba50458eed033c28f3d628a1164a73fe5e18953e93940188b8a9544&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ULQ3GTZ%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCPerv7zRhDfAwJMMBFmTYChoEVKJKqPQOEyP6bcUV2zwIhAJoicW0aZS%2FgVO1OFHvpkWaFbBCYjKg3kivfJUO8zQUAKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwE0LFFEkcT0vszt8q3AMt2Q9bU19ZBus5R1OVgVwDVh4YxvGSBPnQ64eFkWBKJl1mO9WicrBnOjFWvIByEZzkVps%2FW0rWH9GQ2UQsmGABAGG0jXj0NaaAvo72MkC8rCBs47frOGM53AdrPQLn5czMol%2FZntyBG6JLforz5afC%2Bv%2FuVBeFtDGzXieeJBEt3l7BrevuNKzrhmgZZeGL03RpeFHyjVnTppIF52U3y%2FGVgp3QVLm3kROAizW6vUDufN2tlF7A6FUVV3xq5PW6sPZq%2BVvqC4f5TjxdoRVzSLjoIuSoQH2xn2n85Cb3rfbpa0G40e9uc2RyB7iQZryqLm%2BqleA159woJjAFNG2ggfQTH7cNqc2q3376%2BtBgYEmXuYTSxdBbSWEqkmtLlxcPY%2B43IVOQze0PMK4zC%2BaIlN3j75Iy3vUxQ4ELlG5aOG8kwuo%2BDczDHWqI4%2FzCcsoy%2BZoR9T2zANy%2FyCWRnD9jZovq0Bm%2FB%2BQO89PQwrNrGhJt79lIIrMC%2FQe5CZbt9%2FKxuEhW9X3F4IwzWUQu7Cx33FaRbfIh61rLLlt49w1TpbnKj2g115B4zu17672d%2Fxhi80SzRpy4UDG6zZb15Hpc4h6RyMtV6xsxGpcHooV%2Fn8uFJr1muG9uSJiTF1ZqCTCdk7%2FMBjqkAecC4OPmUv89e%2BY5rylj%2B99B%2Bwk4Dsai%2Fb8X8pgYfdI%2BYBUCeRrHPADn09YYxetD7kGnsR6C1w8CZQDM5TyIX%2FKotWnZRxeXramX4ny%2Fwgs%2Fq9DcQsXqojKg4cpPiOkbZiuQ0Rlzjo3D2TusP38yXXn66Dpc4Yy8CQJCh6kNbrg88uPPfkNuYYBsbu3AndKTq%2FCQOZxxkoAM7iLjw2r15%2BilsNzE&X-Amz-Signature=07e1615b4f669d3c5c80d4ad80efef168296eee340417577796ff7c1b929beac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ULQ3GTZ%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCPerv7zRhDfAwJMMBFmTYChoEVKJKqPQOEyP6bcUV2zwIhAJoicW0aZS%2FgVO1OFHvpkWaFbBCYjKg3kivfJUO8zQUAKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwE0LFFEkcT0vszt8q3AMt2Q9bU19ZBus5R1OVgVwDVh4YxvGSBPnQ64eFkWBKJl1mO9WicrBnOjFWvIByEZzkVps%2FW0rWH9GQ2UQsmGABAGG0jXj0NaaAvo72MkC8rCBs47frOGM53AdrPQLn5czMol%2FZntyBG6JLforz5afC%2Bv%2FuVBeFtDGzXieeJBEt3l7BrevuNKzrhmgZZeGL03RpeFHyjVnTppIF52U3y%2FGVgp3QVLm3kROAizW6vUDufN2tlF7A6FUVV3xq5PW6sPZq%2BVvqC4f5TjxdoRVzSLjoIuSoQH2xn2n85Cb3rfbpa0G40e9uc2RyB7iQZryqLm%2BqleA159woJjAFNG2ggfQTH7cNqc2q3376%2BtBgYEmXuYTSxdBbSWEqkmtLlxcPY%2B43IVOQze0PMK4zC%2BaIlN3j75Iy3vUxQ4ELlG5aOG8kwuo%2BDczDHWqI4%2FzCcsoy%2BZoR9T2zANy%2FyCWRnD9jZovq0Bm%2FB%2BQO89PQwrNrGhJt79lIIrMC%2FQe5CZbt9%2FKxuEhW9X3F4IwzWUQu7Cx33FaRbfIh61rLLlt49w1TpbnKj2g115B4zu17672d%2Fxhi80SzRpy4UDG6zZb15Hpc4h6RyMtV6xsxGpcHooV%2Fn8uFJr1muG9uSJiTF1ZqCTCdk7%2FMBjqkAecC4OPmUv89e%2BY5rylj%2B99B%2Bwk4Dsai%2Fb8X8pgYfdI%2BYBUCeRrHPADn09YYxetD7kGnsR6C1w8CZQDM5TyIX%2FKotWnZRxeXramX4ny%2Fwgs%2Fq9DcQsXqojKg4cpPiOkbZiuQ0Rlzjo3D2TusP38yXXn66Dpc4Yy8CQJCh6kNbrg88uPPfkNuYYBsbu3AndKTq%2FCQOZxxkoAM7iLjw2r15%2BilsNzE&X-Amz-Signature=f6b3db99d65d341ec76b33500cbda9cc1a6209589bdd47fedf07a27bd9f31bb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
