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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A7HKIVX%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCTdFdiyuPye8n2Fwz8qtfKwQ6bm76kZEExa0d0jr51%2BgIgIXc7hIs7qUUSjzqJ7YPHxRWExlg%2BdwOIuR7f1p6E4Egq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDBsSH0Sw%2F%2FwRPTWETCrcA5a2oIUXf503fNOwdmLWO8A8VFten%2BwXyQ1kke8O9dq5NisjOOW9LJh8cS75xH5UduBB3DOp6s6wfeWZN%2F%2Bqlzrkqdpaq9d4ri0JyeUx43fzEf5pf2H2uM%2B3VWEpqJ10%2FKg55rePi9Sh8BUluuXX1j0%2BLcE0S0l9ENgwK9ErE2ndRacVw9S2pzkcIwRKs1nDlfL%2FidHsRvoS%2BIiGj1189OKZOxihsEJ818Xz%2FCIu51DRpNBLVBpkpQvisBUvRyzJhvz%2BXHMKaY1l%2FNgu3saS1LPYoNUnnKRRJnhdGZJqlDeD24QMfUWLAezK5Io4Gce5bFmfGEqn%2BDG8j5E6h2odoRkEGWcDW6ZL1e05LGAg%2FcTl9Ge8xGVyqxN9RXaeXEQ4usm1%2F3V67G%2BRcYQOSotrc73vTR9vnJyWqQH4vzizWYWFhoF9WOwgr5132JOvauZ3S3bGKieDQhhYlGMje%2FOulB4T5kve9BBdgWPlJFIeH007%2BN2AWIq4J6ECydH60hLBTp86NZZ%2F33YP%2BIle9bdxk7DEzllkDnyp7Ceerlbxrv8soz4eVke%2BShZ5LHTY2c31rsKxjjoBaQ%2FhrL5MLT7quY6mOTlYwTe9e2%2BWn8aWvPcQ7Hy98b54Gp3rTk90MPTOj8wGOqUBlFwjkDgW6ZFvAvx7wTae1azJmYYfZtVKpYJdNjYpUjBSB%2B7mpsBPlDxtuQNolBspPTeQNppxvQRlLfaWAnvrIYp22FuZqVRtwdHSDszMdCP10ORaBstwNBT0D%2FYJ40HdtAguDkOawxyYhfYOhKt1d2df2Xh0cg84tTewO1jt3oB2OlRx5%2BPfkPZ%2ByLK87YYRj4HU5BwlElipAc99xSmjiPvT5d8x&X-Amz-Signature=b8507e48e8eacd20f988fc511f644c8741a8cc210a54218d0856e9ce12083872&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMGASNKF%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDzdkQH5mnWW2%2FtQphFWjD33Kp183p2YrNRervmsVfj1gIhAM5POxwbaMzUkTY9TzP8Dar%2BYjIgjSfMDO731SxyKZ4TKv8DCCIQABoMNjM3NDIzMTgzODA1Igx1bhDazVIrR6s18z4q3APfyiQCVtYZjI%2FRvi67oLqKjvVIdjFdzXO2rLwIHdiUfoezKO6TZ3f%2FkPvgSNnTUfbC2tIoIWVD8GGSLtcO%2B5U6gt%2FRvWgLC2MKi04LM0sJAUsY45dpnM9QtkaGvspUVTLGipBytEhCkURUbc0C0DZ93jNDZZk2oLqt2jSJLwNuLPMnksbKUzy1ETSokfU73cAl5Ez72RfJiyGsziQV%2FyTKg99oRuaRoTa2ab%2BnPD15X%2F0MOca6h6OT5%2FoBiXiNhDhSrRAMvLBSH70RFB1GzCv317Nj8fYKYeWhqb9c23qPIgRhQhLYJCIHLYWe%2B9K7NNb3USKlGdfcmndtGUUik4AyQC50Hv%2BE6vx1wtfk3yqnpBspNMQ8EyhcnfUeDe6%2FiYUunHl8C18ZPlgPWMGXOegIPxt3lcf%2FjunrlSnbuO%2Bx2IQtlnLkypXYTFUoZhE3zSvdDCG3tfWcjSZ53xZp6yhkVzxwsL%2BQXsXw1M3AF1wJiwws3zQTizoIno1vDYAFc9Zvxr4N2iczDxBCqvfZPJTlxp07h%2FMkYPCB7tvsdUL1khc%2FcodyswafEi1hCOxxgZPLTYgs3KaGAx6p8OMhHKRBkYOebEs82SX8eG4bU14waG91Iq8Vm4cROQKmEjDzzo%2FMBjqkASMgBe%2FN1peWbziqi3ooXTFAAva73t4N40e%2Ftf7OeZbrlXlSc3V3ivqse72VXnzbObv2RaX0wkJY0IJT18gLs7KC2vw%2F1NYfiL0V5%2FJ%2Fnys%2FKwxi7K7ZX3gIKtykgEamA4yIMJMLEmxEr61nEgHRR0r1mptShUhn6%2F9TSkQBT9C4BY2kY4BS6c4cCi07yqwQ2youTj9md0MUoxGAtyP6MTHgeHsg&X-Amz-Signature=30c1908dffbafde432bc0164f0a7ce0a6fec3c94b968df0cd5d9c1c9ca1695b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMGASNKF%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDzdkQH5mnWW2%2FtQphFWjD33Kp183p2YrNRervmsVfj1gIhAM5POxwbaMzUkTY9TzP8Dar%2BYjIgjSfMDO731SxyKZ4TKv8DCCIQABoMNjM3NDIzMTgzODA1Igx1bhDazVIrR6s18z4q3APfyiQCVtYZjI%2FRvi67oLqKjvVIdjFdzXO2rLwIHdiUfoezKO6TZ3f%2FkPvgSNnTUfbC2tIoIWVD8GGSLtcO%2B5U6gt%2FRvWgLC2MKi04LM0sJAUsY45dpnM9QtkaGvspUVTLGipBytEhCkURUbc0C0DZ93jNDZZk2oLqt2jSJLwNuLPMnksbKUzy1ETSokfU73cAl5Ez72RfJiyGsziQV%2FyTKg99oRuaRoTa2ab%2BnPD15X%2F0MOca6h6OT5%2FoBiXiNhDhSrRAMvLBSH70RFB1GzCv317Nj8fYKYeWhqb9c23qPIgRhQhLYJCIHLYWe%2B9K7NNb3USKlGdfcmndtGUUik4AyQC50Hv%2BE6vx1wtfk3yqnpBspNMQ8EyhcnfUeDe6%2FiYUunHl8C18ZPlgPWMGXOegIPxt3lcf%2FjunrlSnbuO%2Bx2IQtlnLkypXYTFUoZhE3zSvdDCG3tfWcjSZ53xZp6yhkVzxwsL%2BQXsXw1M3AF1wJiwws3zQTizoIno1vDYAFc9Zvxr4N2iczDxBCqvfZPJTlxp07h%2FMkYPCB7tvsdUL1khc%2FcodyswafEi1hCOxxgZPLTYgs3KaGAx6p8OMhHKRBkYOebEs82SX8eG4bU14waG91Iq8Vm4cROQKmEjDzzo%2FMBjqkASMgBe%2FN1peWbziqi3ooXTFAAva73t4N40e%2Ftf7OeZbrlXlSc3V3ivqse72VXnzbObv2RaX0wkJY0IJT18gLs7KC2vw%2F1NYfiL0V5%2FJ%2Fnys%2FKwxi7K7ZX3gIKtykgEamA4yIMJMLEmxEr61nEgHRR0r1mptShUhn6%2F9TSkQBT9C4BY2kY4BS6c4cCi07yqwQ2youTj9md0MUoxGAtyP6MTHgeHsg&X-Amz-Signature=f7556f30700ade36e3ebd02251d5785b357ca237d0410586cc4b95b71147c521&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMGASNKF%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDzdkQH5mnWW2%2FtQphFWjD33Kp183p2YrNRervmsVfj1gIhAM5POxwbaMzUkTY9TzP8Dar%2BYjIgjSfMDO731SxyKZ4TKv8DCCIQABoMNjM3NDIzMTgzODA1Igx1bhDazVIrR6s18z4q3APfyiQCVtYZjI%2FRvi67oLqKjvVIdjFdzXO2rLwIHdiUfoezKO6TZ3f%2FkPvgSNnTUfbC2tIoIWVD8GGSLtcO%2B5U6gt%2FRvWgLC2MKi04LM0sJAUsY45dpnM9QtkaGvspUVTLGipBytEhCkURUbc0C0DZ93jNDZZk2oLqt2jSJLwNuLPMnksbKUzy1ETSokfU73cAl5Ez72RfJiyGsziQV%2FyTKg99oRuaRoTa2ab%2BnPD15X%2F0MOca6h6OT5%2FoBiXiNhDhSrRAMvLBSH70RFB1GzCv317Nj8fYKYeWhqb9c23qPIgRhQhLYJCIHLYWe%2B9K7NNb3USKlGdfcmndtGUUik4AyQC50Hv%2BE6vx1wtfk3yqnpBspNMQ8EyhcnfUeDe6%2FiYUunHl8C18ZPlgPWMGXOegIPxt3lcf%2FjunrlSnbuO%2Bx2IQtlnLkypXYTFUoZhE3zSvdDCG3tfWcjSZ53xZp6yhkVzxwsL%2BQXsXw1M3AF1wJiwws3zQTizoIno1vDYAFc9Zvxr4N2iczDxBCqvfZPJTlxp07h%2FMkYPCB7tvsdUL1khc%2FcodyswafEi1hCOxxgZPLTYgs3KaGAx6p8OMhHKRBkYOebEs82SX8eG4bU14waG91Iq8Vm4cROQKmEjDzzo%2FMBjqkASMgBe%2FN1peWbziqi3ooXTFAAva73t4N40e%2Ftf7OeZbrlXlSc3V3ivqse72VXnzbObv2RaX0wkJY0IJT18gLs7KC2vw%2F1NYfiL0V5%2FJ%2Fnys%2FKwxi7K7ZX3gIKtykgEamA4yIMJMLEmxEr61nEgHRR0r1mptShUhn6%2F9TSkQBT9C4BY2kY4BS6c4cCi07yqwQ2youTj9md0MUoxGAtyP6MTHgeHsg&X-Amz-Signature=65a472ec32d15ee26c8c88e814e67872138eb1cc8e082491291a9bec56f95333&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMGASNKF%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDzdkQH5mnWW2%2FtQphFWjD33Kp183p2YrNRervmsVfj1gIhAM5POxwbaMzUkTY9TzP8Dar%2BYjIgjSfMDO731SxyKZ4TKv8DCCIQABoMNjM3NDIzMTgzODA1Igx1bhDazVIrR6s18z4q3APfyiQCVtYZjI%2FRvi67oLqKjvVIdjFdzXO2rLwIHdiUfoezKO6TZ3f%2FkPvgSNnTUfbC2tIoIWVD8GGSLtcO%2B5U6gt%2FRvWgLC2MKi04LM0sJAUsY45dpnM9QtkaGvspUVTLGipBytEhCkURUbc0C0DZ93jNDZZk2oLqt2jSJLwNuLPMnksbKUzy1ETSokfU73cAl5Ez72RfJiyGsziQV%2FyTKg99oRuaRoTa2ab%2BnPD15X%2F0MOca6h6OT5%2FoBiXiNhDhSrRAMvLBSH70RFB1GzCv317Nj8fYKYeWhqb9c23qPIgRhQhLYJCIHLYWe%2B9K7NNb3USKlGdfcmndtGUUik4AyQC50Hv%2BE6vx1wtfk3yqnpBspNMQ8EyhcnfUeDe6%2FiYUunHl8C18ZPlgPWMGXOegIPxt3lcf%2FjunrlSnbuO%2Bx2IQtlnLkypXYTFUoZhE3zSvdDCG3tfWcjSZ53xZp6yhkVzxwsL%2BQXsXw1M3AF1wJiwws3zQTizoIno1vDYAFc9Zvxr4N2iczDxBCqvfZPJTlxp07h%2FMkYPCB7tvsdUL1khc%2FcodyswafEi1hCOxxgZPLTYgs3KaGAx6p8OMhHKRBkYOebEs82SX8eG4bU14waG91Iq8Vm4cROQKmEjDzzo%2FMBjqkASMgBe%2FN1peWbziqi3ooXTFAAva73t4N40e%2Ftf7OeZbrlXlSc3V3ivqse72VXnzbObv2RaX0wkJY0IJT18gLs7KC2vw%2F1NYfiL0V5%2FJ%2Fnys%2FKwxi7K7ZX3gIKtykgEamA4yIMJMLEmxEr61nEgHRR0r1mptShUhn6%2F9TSkQBT9C4BY2kY4BS6c4cCi07yqwQ2youTj9md0MUoxGAtyP6MTHgeHsg&X-Amz-Signature=95a8f2647ac255438a880163ce09439d7d65aa9136df2ed85877ce60452ee2ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMGASNKF%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDzdkQH5mnWW2%2FtQphFWjD33Kp183p2YrNRervmsVfj1gIhAM5POxwbaMzUkTY9TzP8Dar%2BYjIgjSfMDO731SxyKZ4TKv8DCCIQABoMNjM3NDIzMTgzODA1Igx1bhDazVIrR6s18z4q3APfyiQCVtYZjI%2FRvi67oLqKjvVIdjFdzXO2rLwIHdiUfoezKO6TZ3f%2FkPvgSNnTUfbC2tIoIWVD8GGSLtcO%2B5U6gt%2FRvWgLC2MKi04LM0sJAUsY45dpnM9QtkaGvspUVTLGipBytEhCkURUbc0C0DZ93jNDZZk2oLqt2jSJLwNuLPMnksbKUzy1ETSokfU73cAl5Ez72RfJiyGsziQV%2FyTKg99oRuaRoTa2ab%2BnPD15X%2F0MOca6h6OT5%2FoBiXiNhDhSrRAMvLBSH70RFB1GzCv317Nj8fYKYeWhqb9c23qPIgRhQhLYJCIHLYWe%2B9K7NNb3USKlGdfcmndtGUUik4AyQC50Hv%2BE6vx1wtfk3yqnpBspNMQ8EyhcnfUeDe6%2FiYUunHl8C18ZPlgPWMGXOegIPxt3lcf%2FjunrlSnbuO%2Bx2IQtlnLkypXYTFUoZhE3zSvdDCG3tfWcjSZ53xZp6yhkVzxwsL%2BQXsXw1M3AF1wJiwws3zQTizoIno1vDYAFc9Zvxr4N2iczDxBCqvfZPJTlxp07h%2FMkYPCB7tvsdUL1khc%2FcodyswafEi1hCOxxgZPLTYgs3KaGAx6p8OMhHKRBkYOebEs82SX8eG4bU14waG91Iq8Vm4cROQKmEjDzzo%2FMBjqkASMgBe%2FN1peWbziqi3ooXTFAAva73t4N40e%2Ftf7OeZbrlXlSc3V3ivqse72VXnzbObv2RaX0wkJY0IJT18gLs7KC2vw%2F1NYfiL0V5%2FJ%2Fnys%2FKwxi7K7ZX3gIKtykgEamA4yIMJMLEmxEr61nEgHRR0r1mptShUhn6%2F9TSkQBT9C4BY2kY4BS6c4cCi07yqwQ2youTj9md0MUoxGAtyP6MTHgeHsg&X-Amz-Signature=d89bafa5f5187ea6c2a1beca2426c7bf8f38a226b196c01f838be00fdd279a6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMGASNKF%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDzdkQH5mnWW2%2FtQphFWjD33Kp183p2YrNRervmsVfj1gIhAM5POxwbaMzUkTY9TzP8Dar%2BYjIgjSfMDO731SxyKZ4TKv8DCCIQABoMNjM3NDIzMTgzODA1Igx1bhDazVIrR6s18z4q3APfyiQCVtYZjI%2FRvi67oLqKjvVIdjFdzXO2rLwIHdiUfoezKO6TZ3f%2FkPvgSNnTUfbC2tIoIWVD8GGSLtcO%2B5U6gt%2FRvWgLC2MKi04LM0sJAUsY45dpnM9QtkaGvspUVTLGipBytEhCkURUbc0C0DZ93jNDZZk2oLqt2jSJLwNuLPMnksbKUzy1ETSokfU73cAl5Ez72RfJiyGsziQV%2FyTKg99oRuaRoTa2ab%2BnPD15X%2F0MOca6h6OT5%2FoBiXiNhDhSrRAMvLBSH70RFB1GzCv317Nj8fYKYeWhqb9c23qPIgRhQhLYJCIHLYWe%2B9K7NNb3USKlGdfcmndtGUUik4AyQC50Hv%2BE6vx1wtfk3yqnpBspNMQ8EyhcnfUeDe6%2FiYUunHl8C18ZPlgPWMGXOegIPxt3lcf%2FjunrlSnbuO%2Bx2IQtlnLkypXYTFUoZhE3zSvdDCG3tfWcjSZ53xZp6yhkVzxwsL%2BQXsXw1M3AF1wJiwws3zQTizoIno1vDYAFc9Zvxr4N2iczDxBCqvfZPJTlxp07h%2FMkYPCB7tvsdUL1khc%2FcodyswafEi1hCOxxgZPLTYgs3KaGAx6p8OMhHKRBkYOebEs82SX8eG4bU14waG91Iq8Vm4cROQKmEjDzzo%2FMBjqkASMgBe%2FN1peWbziqi3ooXTFAAva73t4N40e%2Ftf7OeZbrlXlSc3V3ivqse72VXnzbObv2RaX0wkJY0IJT18gLs7KC2vw%2F1NYfiL0V5%2FJ%2Fnys%2FKwxi7K7ZX3gIKtykgEamA4yIMJMLEmxEr61nEgHRR0r1mptShUhn6%2F9TSkQBT9C4BY2kY4BS6c4cCi07yqwQ2youTj9md0MUoxGAtyP6MTHgeHsg&X-Amz-Signature=60765267e052d640e3039e8cc47157ca8e0586351bf873c5e35a899d3663a802&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMGASNKF%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDzdkQH5mnWW2%2FtQphFWjD33Kp183p2YrNRervmsVfj1gIhAM5POxwbaMzUkTY9TzP8Dar%2BYjIgjSfMDO731SxyKZ4TKv8DCCIQABoMNjM3NDIzMTgzODA1Igx1bhDazVIrR6s18z4q3APfyiQCVtYZjI%2FRvi67oLqKjvVIdjFdzXO2rLwIHdiUfoezKO6TZ3f%2FkPvgSNnTUfbC2tIoIWVD8GGSLtcO%2B5U6gt%2FRvWgLC2MKi04LM0sJAUsY45dpnM9QtkaGvspUVTLGipBytEhCkURUbc0C0DZ93jNDZZk2oLqt2jSJLwNuLPMnksbKUzy1ETSokfU73cAl5Ez72RfJiyGsziQV%2FyTKg99oRuaRoTa2ab%2BnPD15X%2F0MOca6h6OT5%2FoBiXiNhDhSrRAMvLBSH70RFB1GzCv317Nj8fYKYeWhqb9c23qPIgRhQhLYJCIHLYWe%2B9K7NNb3USKlGdfcmndtGUUik4AyQC50Hv%2BE6vx1wtfk3yqnpBspNMQ8EyhcnfUeDe6%2FiYUunHl8C18ZPlgPWMGXOegIPxt3lcf%2FjunrlSnbuO%2Bx2IQtlnLkypXYTFUoZhE3zSvdDCG3tfWcjSZ53xZp6yhkVzxwsL%2BQXsXw1M3AF1wJiwws3zQTizoIno1vDYAFc9Zvxr4N2iczDxBCqvfZPJTlxp07h%2FMkYPCB7tvsdUL1khc%2FcodyswafEi1hCOxxgZPLTYgs3KaGAx6p8OMhHKRBkYOebEs82SX8eG4bU14waG91Iq8Vm4cROQKmEjDzzo%2FMBjqkASMgBe%2FN1peWbziqi3ooXTFAAva73t4N40e%2Ftf7OeZbrlXlSc3V3ivqse72VXnzbObv2RaX0wkJY0IJT18gLs7KC2vw%2F1NYfiL0V5%2FJ%2Fnys%2FKwxi7K7ZX3gIKtykgEamA4yIMJMLEmxEr61nEgHRR0r1mptShUhn6%2F9TSkQBT9C4BY2kY4BS6c4cCi07yqwQ2youTj9md0MUoxGAtyP6MTHgeHsg&X-Amz-Signature=68a59d08de7c77cf92291b3b795477cc606a7876856423cfebca734ec0081a70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMGASNKF%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDzdkQH5mnWW2%2FtQphFWjD33Kp183p2YrNRervmsVfj1gIhAM5POxwbaMzUkTY9TzP8Dar%2BYjIgjSfMDO731SxyKZ4TKv8DCCIQABoMNjM3NDIzMTgzODA1Igx1bhDazVIrR6s18z4q3APfyiQCVtYZjI%2FRvi67oLqKjvVIdjFdzXO2rLwIHdiUfoezKO6TZ3f%2FkPvgSNnTUfbC2tIoIWVD8GGSLtcO%2B5U6gt%2FRvWgLC2MKi04LM0sJAUsY45dpnM9QtkaGvspUVTLGipBytEhCkURUbc0C0DZ93jNDZZk2oLqt2jSJLwNuLPMnksbKUzy1ETSokfU73cAl5Ez72RfJiyGsziQV%2FyTKg99oRuaRoTa2ab%2BnPD15X%2F0MOca6h6OT5%2FoBiXiNhDhSrRAMvLBSH70RFB1GzCv317Nj8fYKYeWhqb9c23qPIgRhQhLYJCIHLYWe%2B9K7NNb3USKlGdfcmndtGUUik4AyQC50Hv%2BE6vx1wtfk3yqnpBspNMQ8EyhcnfUeDe6%2FiYUunHl8C18ZPlgPWMGXOegIPxt3lcf%2FjunrlSnbuO%2Bx2IQtlnLkypXYTFUoZhE3zSvdDCG3tfWcjSZ53xZp6yhkVzxwsL%2BQXsXw1M3AF1wJiwws3zQTizoIno1vDYAFc9Zvxr4N2iczDxBCqvfZPJTlxp07h%2FMkYPCB7tvsdUL1khc%2FcodyswafEi1hCOxxgZPLTYgs3KaGAx6p8OMhHKRBkYOebEs82SX8eG4bU14waG91Iq8Vm4cROQKmEjDzzo%2FMBjqkASMgBe%2FN1peWbziqi3ooXTFAAva73t4N40e%2Ftf7OeZbrlXlSc3V3ivqse72VXnzbObv2RaX0wkJY0IJT18gLs7KC2vw%2F1NYfiL0V5%2FJ%2Fnys%2FKwxi7K7ZX3gIKtykgEamA4yIMJMLEmxEr61nEgHRR0r1mptShUhn6%2F9TSkQBT9C4BY2kY4BS6c4cCi07yqwQ2youTj9md0MUoxGAtyP6MTHgeHsg&X-Amz-Signature=246508b64fc61a70909b8499cc9a2b1df5fb6c07707a555740b0472343888dd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMGASNKF%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDzdkQH5mnWW2%2FtQphFWjD33Kp183p2YrNRervmsVfj1gIhAM5POxwbaMzUkTY9TzP8Dar%2BYjIgjSfMDO731SxyKZ4TKv8DCCIQABoMNjM3NDIzMTgzODA1Igx1bhDazVIrR6s18z4q3APfyiQCVtYZjI%2FRvi67oLqKjvVIdjFdzXO2rLwIHdiUfoezKO6TZ3f%2FkPvgSNnTUfbC2tIoIWVD8GGSLtcO%2B5U6gt%2FRvWgLC2MKi04LM0sJAUsY45dpnM9QtkaGvspUVTLGipBytEhCkURUbc0C0DZ93jNDZZk2oLqt2jSJLwNuLPMnksbKUzy1ETSokfU73cAl5Ez72RfJiyGsziQV%2FyTKg99oRuaRoTa2ab%2BnPD15X%2F0MOca6h6OT5%2FoBiXiNhDhSrRAMvLBSH70RFB1GzCv317Nj8fYKYeWhqb9c23qPIgRhQhLYJCIHLYWe%2B9K7NNb3USKlGdfcmndtGUUik4AyQC50Hv%2BE6vx1wtfk3yqnpBspNMQ8EyhcnfUeDe6%2FiYUunHl8C18ZPlgPWMGXOegIPxt3lcf%2FjunrlSnbuO%2Bx2IQtlnLkypXYTFUoZhE3zSvdDCG3tfWcjSZ53xZp6yhkVzxwsL%2BQXsXw1M3AF1wJiwws3zQTizoIno1vDYAFc9Zvxr4N2iczDxBCqvfZPJTlxp07h%2FMkYPCB7tvsdUL1khc%2FcodyswafEi1hCOxxgZPLTYgs3KaGAx6p8OMhHKRBkYOebEs82SX8eG4bU14waG91Iq8Vm4cROQKmEjDzzo%2FMBjqkASMgBe%2FN1peWbziqi3ooXTFAAva73t4N40e%2Ftf7OeZbrlXlSc3V3ivqse72VXnzbObv2RaX0wkJY0IJT18gLs7KC2vw%2F1NYfiL0V5%2FJ%2Fnys%2FKwxi7K7ZX3gIKtykgEamA4yIMJMLEmxEr61nEgHRR0r1mptShUhn6%2F9TSkQBT9C4BY2kY4BS6c4cCi07yqwQ2youTj9md0MUoxGAtyP6MTHgeHsg&X-Amz-Signature=b86e0703e507de2517f6e8a096dbee56b1fe4ec466ce644ddaebd7a4ea852a76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMGASNKF%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDzdkQH5mnWW2%2FtQphFWjD33Kp183p2YrNRervmsVfj1gIhAM5POxwbaMzUkTY9TzP8Dar%2BYjIgjSfMDO731SxyKZ4TKv8DCCIQABoMNjM3NDIzMTgzODA1Igx1bhDazVIrR6s18z4q3APfyiQCVtYZjI%2FRvi67oLqKjvVIdjFdzXO2rLwIHdiUfoezKO6TZ3f%2FkPvgSNnTUfbC2tIoIWVD8GGSLtcO%2B5U6gt%2FRvWgLC2MKi04LM0sJAUsY45dpnM9QtkaGvspUVTLGipBytEhCkURUbc0C0DZ93jNDZZk2oLqt2jSJLwNuLPMnksbKUzy1ETSokfU73cAl5Ez72RfJiyGsziQV%2FyTKg99oRuaRoTa2ab%2BnPD15X%2F0MOca6h6OT5%2FoBiXiNhDhSrRAMvLBSH70RFB1GzCv317Nj8fYKYeWhqb9c23qPIgRhQhLYJCIHLYWe%2B9K7NNb3USKlGdfcmndtGUUik4AyQC50Hv%2BE6vx1wtfk3yqnpBspNMQ8EyhcnfUeDe6%2FiYUunHl8C18ZPlgPWMGXOegIPxt3lcf%2FjunrlSnbuO%2Bx2IQtlnLkypXYTFUoZhE3zSvdDCG3tfWcjSZ53xZp6yhkVzxwsL%2BQXsXw1M3AF1wJiwws3zQTizoIno1vDYAFc9Zvxr4N2iczDxBCqvfZPJTlxp07h%2FMkYPCB7tvsdUL1khc%2FcodyswafEi1hCOxxgZPLTYgs3KaGAx6p8OMhHKRBkYOebEs82SX8eG4bU14waG91Iq8Vm4cROQKmEjDzzo%2FMBjqkASMgBe%2FN1peWbziqi3ooXTFAAva73t4N40e%2Ftf7OeZbrlXlSc3V3ivqse72VXnzbObv2RaX0wkJY0IJT18gLs7KC2vw%2F1NYfiL0V5%2FJ%2Fnys%2FKwxi7K7ZX3gIKtykgEamA4yIMJMLEmxEr61nEgHRR0r1mptShUhn6%2F9TSkQBT9C4BY2kY4BS6c4cCi07yqwQ2youTj9md0MUoxGAtyP6MTHgeHsg&X-Amz-Signature=95a8f2647ac255438a880163ce09439d7d65aa9136df2ed85877ce60452ee2ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
