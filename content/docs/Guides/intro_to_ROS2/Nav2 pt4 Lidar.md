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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM3HHSDX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJAdRBfH%2Fo55Ly0zlvC0Mn6yaysnfo1L%2FjQBntaFU%2FCAiBK%2BEO77DNv8QRCE%2BO0BFexADI5F8sQV7SHTVygE7oqsir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMeRK0p6cfj%2FuW7FlBKtwDJdDW47bGdgn7VRksYqsPNs1Uo%2BK84nrmhHMZr%2FPwN3jUHTb88ojw0y9%2B%2Fi6sGgsrQP%2BivlElMU%2BNTIOx3wDUGiRF9hL%2FjI8eTwnto6lhIdLFeUtEzzosNlLdxKUFZoXGfm%2BdmCKQ%2Fu%2B7o%2B548FyrlwG3pOKLEbS7qYNCDSP%2FJe1rBHrM%2FTpn6azOL9OEIUqPrjLgKJCmq5M8wTGhhbGHdgqd07lMdWVCawxpWDNqUKci%2BAlblmhH%2FUP%2FjZ1SUExk4KwVMIKTKkQb8r4jHKszutEZRRnLMYOWWnbaEh3W6sgsdjO0WE3uma1sonuACgyKS6czoBC5gAaQwKXx8%2BMTOZgRIuGI0P1bZVeXoVIoH4O1oK4pvOUB95gvcWXPk%2F0H2C%2Bl1HG6PInCz3VcTJenx9ZcO1SeGKYGx%2FFgOMa4Ob66zYt4jVZJdz%2B0rl2bf0UIniHfU2FcfqoFspfn8Sv4liIEZn%2Fm2%2BPmRIzSsP7ICRLSFt4JnLvOUFUWOebeTx1ZK7lgmXHogSB8KKLgxyXEMkhu%2B8rafOb0LN%2Fyiq9w38EVCaFhMasxjt%2FU8CDGKgGQEZG3qQtuogVjzLeS0s2dxTpRdt7%2FOPv%2BhZuAd%2BeIkAj1%2B0dZzaauw5DDc6MwiYG6xAY6pgE7po3PHNpC0eQKLmvQNVaM4dYHrHmhrTIP2lrewPqY6gg%2BL9xwjvuyHZHm55tR6nslb%2BRXpXprCGzwllAWbxK9A8Yrr9JAuwMUmKypxI5QeeWkCkCU3KnOUJPNhDF%2BI1Qs57AdSAJxDIKHg663P13Om4JnDs27C0tv%2BGdzXYMPZmlJIgoIqy4Apn4gfc%2B7BJhkBZWPEN6TQmc7%2BGhdeJdIjFDiPndg&X-Amz-Signature=971a1c74854c1d4c2587d3f7c893dc43bab8ff434d17ba76a107402ccd017c1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLMHFVZA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSOitEYSVBb1MCfif%2F0oxGkIBmvAKBTFpl5vEwK%2FRlWgIgV6F1nPZq3pLvzYEuyOyXx5wSKhQs3ct%2Fl04V4Ug%2FGWoq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDG9ey7U3%2B1ZSFVMS5ircA8AE8%2FySMmKRvcVIcaA2XYs8Qkulnubwn%2BVrcww3NQkQYVd1G3Zqk%2Fj5hyeEGGsE8J6kgrd6Tc7BP2OPSzRz65j84dzbkpuwyGovlPCVESMtOT0bb2c6DKn%2BoTUKk2CBpOzohyN0HyZLy7l6VWo4cDKfsN1HLCRX8ymPajp2NBmcHHukRTCcAToh93JfbrSpiXUSccjcwDoQ3lAmdSqtlQd1Kv8e4lMPNq37GoKlMNN9yxvu3MqJTY7%2FSyssSMbnbSapC7LVRdj4ldn6KycuWUgFHjyvyGZrzaaAQgY2XVLMefjTktXcG3Q2a2X9U%2BEfFmyYt3ggyons2CRQCLePHMpJ6hrTzrKz3UYyRiSVbMAV9i2CD7qPP7T0vJDosB0FHy6ThUy3ZbUdEhb318%2FUjyCGgs9GPlhBesiD4RK%2F9n91PjtV8jksAcuzNP6y5GQPnYMYQHxe%2FtmZ6hmau1MGaPycx6plFGrDa9ZhHQeXBoS9HyRGW2aZUwoOg%2BSpdTwlSlKmqupVRJwKsHpSpC7ItGd7brNbxPzAzGUrwTjQnrffvnIsyM0NcYC8GItko1Mqu6TNrgkYo2KZqzYS2HXPbhq%2BRaMa8OK4kgvBCcLNzW2kGiY5nD9ZGPqeLwsaMKuAusQGOqUBh1FlH4O9qwI4ERSejWXH5fZIL2Apq2K5ovCyMA2kh1Stj9UROz%2F%2Bdu5mNGHsjp%2F8gXhoRW31bT5sUALU03XhSmLYAMfaZPrCsIclvUNdQKztQlhRHulyc8rWBNKVBbx3mCX0ryp%2B3yYFZZAdPdv4lwunCL1GE56ZGFSAsnl%2BGMR5%2BYBdRe4HjgVjnEyyKt%2FEdLSJZDkFmeo%2Bg7nEW4kzFHjIZRqk&X-Amz-Signature=7179550e7546dcea79410a1064d40fff700414e1329d99b4393f9d9e2d8cce0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLMHFVZA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSOitEYSVBb1MCfif%2F0oxGkIBmvAKBTFpl5vEwK%2FRlWgIgV6F1nPZq3pLvzYEuyOyXx5wSKhQs3ct%2Fl04V4Ug%2FGWoq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDG9ey7U3%2B1ZSFVMS5ircA8AE8%2FySMmKRvcVIcaA2XYs8Qkulnubwn%2BVrcww3NQkQYVd1G3Zqk%2Fj5hyeEGGsE8J6kgrd6Tc7BP2OPSzRz65j84dzbkpuwyGovlPCVESMtOT0bb2c6DKn%2BoTUKk2CBpOzohyN0HyZLy7l6VWo4cDKfsN1HLCRX8ymPajp2NBmcHHukRTCcAToh93JfbrSpiXUSccjcwDoQ3lAmdSqtlQd1Kv8e4lMPNq37GoKlMNN9yxvu3MqJTY7%2FSyssSMbnbSapC7LVRdj4ldn6KycuWUgFHjyvyGZrzaaAQgY2XVLMefjTktXcG3Q2a2X9U%2BEfFmyYt3ggyons2CRQCLePHMpJ6hrTzrKz3UYyRiSVbMAV9i2CD7qPP7T0vJDosB0FHy6ThUy3ZbUdEhb318%2FUjyCGgs9GPlhBesiD4RK%2F9n91PjtV8jksAcuzNP6y5GQPnYMYQHxe%2FtmZ6hmau1MGaPycx6plFGrDa9ZhHQeXBoS9HyRGW2aZUwoOg%2BSpdTwlSlKmqupVRJwKsHpSpC7ItGd7brNbxPzAzGUrwTjQnrffvnIsyM0NcYC8GItko1Mqu6TNrgkYo2KZqzYS2HXPbhq%2BRaMa8OK4kgvBCcLNzW2kGiY5nD9ZGPqeLwsaMKuAusQGOqUBh1FlH4O9qwI4ERSejWXH5fZIL2Apq2K5ovCyMA2kh1Stj9UROz%2F%2Bdu5mNGHsjp%2F8gXhoRW31bT5sUALU03XhSmLYAMfaZPrCsIclvUNdQKztQlhRHulyc8rWBNKVBbx3mCX0ryp%2B3yYFZZAdPdv4lwunCL1GE56ZGFSAsnl%2BGMR5%2BYBdRe4HjgVjnEyyKt%2FEdLSJZDkFmeo%2Bg7nEW4kzFHjIZRqk&X-Amz-Signature=31976c17fd502ad91b4394d1eaf92490a9ca98eb25c23caf11591adda06be6fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLMHFVZA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSOitEYSVBb1MCfif%2F0oxGkIBmvAKBTFpl5vEwK%2FRlWgIgV6F1nPZq3pLvzYEuyOyXx5wSKhQs3ct%2Fl04V4Ug%2FGWoq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDG9ey7U3%2B1ZSFVMS5ircA8AE8%2FySMmKRvcVIcaA2XYs8Qkulnubwn%2BVrcww3NQkQYVd1G3Zqk%2Fj5hyeEGGsE8J6kgrd6Tc7BP2OPSzRz65j84dzbkpuwyGovlPCVESMtOT0bb2c6DKn%2BoTUKk2CBpOzohyN0HyZLy7l6VWo4cDKfsN1HLCRX8ymPajp2NBmcHHukRTCcAToh93JfbrSpiXUSccjcwDoQ3lAmdSqtlQd1Kv8e4lMPNq37GoKlMNN9yxvu3MqJTY7%2FSyssSMbnbSapC7LVRdj4ldn6KycuWUgFHjyvyGZrzaaAQgY2XVLMefjTktXcG3Q2a2X9U%2BEfFmyYt3ggyons2CRQCLePHMpJ6hrTzrKz3UYyRiSVbMAV9i2CD7qPP7T0vJDosB0FHy6ThUy3ZbUdEhb318%2FUjyCGgs9GPlhBesiD4RK%2F9n91PjtV8jksAcuzNP6y5GQPnYMYQHxe%2FtmZ6hmau1MGaPycx6plFGrDa9ZhHQeXBoS9HyRGW2aZUwoOg%2BSpdTwlSlKmqupVRJwKsHpSpC7ItGd7brNbxPzAzGUrwTjQnrffvnIsyM0NcYC8GItko1Mqu6TNrgkYo2KZqzYS2HXPbhq%2BRaMa8OK4kgvBCcLNzW2kGiY5nD9ZGPqeLwsaMKuAusQGOqUBh1FlH4O9qwI4ERSejWXH5fZIL2Apq2K5ovCyMA2kh1Stj9UROz%2F%2Bdu5mNGHsjp%2F8gXhoRW31bT5sUALU03XhSmLYAMfaZPrCsIclvUNdQKztQlhRHulyc8rWBNKVBbx3mCX0ryp%2B3yYFZZAdPdv4lwunCL1GE56ZGFSAsnl%2BGMR5%2BYBdRe4HjgVjnEyyKt%2FEdLSJZDkFmeo%2Bg7nEW4kzFHjIZRqk&X-Amz-Signature=bca708e4bddd8908e75ae0cc9047bcfc75fe266479661a23c7d0b4dc4c70edd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLMHFVZA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSOitEYSVBb1MCfif%2F0oxGkIBmvAKBTFpl5vEwK%2FRlWgIgV6F1nPZq3pLvzYEuyOyXx5wSKhQs3ct%2Fl04V4Ug%2FGWoq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDG9ey7U3%2B1ZSFVMS5ircA8AE8%2FySMmKRvcVIcaA2XYs8Qkulnubwn%2BVrcww3NQkQYVd1G3Zqk%2Fj5hyeEGGsE8J6kgrd6Tc7BP2OPSzRz65j84dzbkpuwyGovlPCVESMtOT0bb2c6DKn%2BoTUKk2CBpOzohyN0HyZLy7l6VWo4cDKfsN1HLCRX8ymPajp2NBmcHHukRTCcAToh93JfbrSpiXUSccjcwDoQ3lAmdSqtlQd1Kv8e4lMPNq37GoKlMNN9yxvu3MqJTY7%2FSyssSMbnbSapC7LVRdj4ldn6KycuWUgFHjyvyGZrzaaAQgY2XVLMefjTktXcG3Q2a2X9U%2BEfFmyYt3ggyons2CRQCLePHMpJ6hrTzrKz3UYyRiSVbMAV9i2CD7qPP7T0vJDosB0FHy6ThUy3ZbUdEhb318%2FUjyCGgs9GPlhBesiD4RK%2F9n91PjtV8jksAcuzNP6y5GQPnYMYQHxe%2FtmZ6hmau1MGaPycx6plFGrDa9ZhHQeXBoS9HyRGW2aZUwoOg%2BSpdTwlSlKmqupVRJwKsHpSpC7ItGd7brNbxPzAzGUrwTjQnrffvnIsyM0NcYC8GItko1Mqu6TNrgkYo2KZqzYS2HXPbhq%2BRaMa8OK4kgvBCcLNzW2kGiY5nD9ZGPqeLwsaMKuAusQGOqUBh1FlH4O9qwI4ERSejWXH5fZIL2Apq2K5ovCyMA2kh1Stj9UROz%2F%2Bdu5mNGHsjp%2F8gXhoRW31bT5sUALU03XhSmLYAMfaZPrCsIclvUNdQKztQlhRHulyc8rWBNKVBbx3mCX0ryp%2B3yYFZZAdPdv4lwunCL1GE56ZGFSAsnl%2BGMR5%2BYBdRe4HjgVjnEyyKt%2FEdLSJZDkFmeo%2Bg7nEW4kzFHjIZRqk&X-Amz-Signature=e83b00df6770e580a9d79f2b533133ff8d75754fde82c9d1193615b1fdff823f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLMHFVZA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSOitEYSVBb1MCfif%2F0oxGkIBmvAKBTFpl5vEwK%2FRlWgIgV6F1nPZq3pLvzYEuyOyXx5wSKhQs3ct%2Fl04V4Ug%2FGWoq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDG9ey7U3%2B1ZSFVMS5ircA8AE8%2FySMmKRvcVIcaA2XYs8Qkulnubwn%2BVrcww3NQkQYVd1G3Zqk%2Fj5hyeEGGsE8J6kgrd6Tc7BP2OPSzRz65j84dzbkpuwyGovlPCVESMtOT0bb2c6DKn%2BoTUKk2CBpOzohyN0HyZLy7l6VWo4cDKfsN1HLCRX8ymPajp2NBmcHHukRTCcAToh93JfbrSpiXUSccjcwDoQ3lAmdSqtlQd1Kv8e4lMPNq37GoKlMNN9yxvu3MqJTY7%2FSyssSMbnbSapC7LVRdj4ldn6KycuWUgFHjyvyGZrzaaAQgY2XVLMefjTktXcG3Q2a2X9U%2BEfFmyYt3ggyons2CRQCLePHMpJ6hrTzrKz3UYyRiSVbMAV9i2CD7qPP7T0vJDosB0FHy6ThUy3ZbUdEhb318%2FUjyCGgs9GPlhBesiD4RK%2F9n91PjtV8jksAcuzNP6y5GQPnYMYQHxe%2FtmZ6hmau1MGaPycx6plFGrDa9ZhHQeXBoS9HyRGW2aZUwoOg%2BSpdTwlSlKmqupVRJwKsHpSpC7ItGd7brNbxPzAzGUrwTjQnrffvnIsyM0NcYC8GItko1Mqu6TNrgkYo2KZqzYS2HXPbhq%2BRaMa8OK4kgvBCcLNzW2kGiY5nD9ZGPqeLwsaMKuAusQGOqUBh1FlH4O9qwI4ERSejWXH5fZIL2Apq2K5ovCyMA2kh1Stj9UROz%2F%2Bdu5mNGHsjp%2F8gXhoRW31bT5sUALU03XhSmLYAMfaZPrCsIclvUNdQKztQlhRHulyc8rWBNKVBbx3mCX0ryp%2B3yYFZZAdPdv4lwunCL1GE56ZGFSAsnl%2BGMR5%2BYBdRe4HjgVjnEyyKt%2FEdLSJZDkFmeo%2Bg7nEW4kzFHjIZRqk&X-Amz-Signature=8f0a448c562aedb28dc55af507e37c12e04c4d70b2ae9af78a3505593737292b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLMHFVZA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSOitEYSVBb1MCfif%2F0oxGkIBmvAKBTFpl5vEwK%2FRlWgIgV6F1nPZq3pLvzYEuyOyXx5wSKhQs3ct%2Fl04V4Ug%2FGWoq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDG9ey7U3%2B1ZSFVMS5ircA8AE8%2FySMmKRvcVIcaA2XYs8Qkulnubwn%2BVrcww3NQkQYVd1G3Zqk%2Fj5hyeEGGsE8J6kgrd6Tc7BP2OPSzRz65j84dzbkpuwyGovlPCVESMtOT0bb2c6DKn%2BoTUKk2CBpOzohyN0HyZLy7l6VWo4cDKfsN1HLCRX8ymPajp2NBmcHHukRTCcAToh93JfbrSpiXUSccjcwDoQ3lAmdSqtlQd1Kv8e4lMPNq37GoKlMNN9yxvu3MqJTY7%2FSyssSMbnbSapC7LVRdj4ldn6KycuWUgFHjyvyGZrzaaAQgY2XVLMefjTktXcG3Q2a2X9U%2BEfFmyYt3ggyons2CRQCLePHMpJ6hrTzrKz3UYyRiSVbMAV9i2CD7qPP7T0vJDosB0FHy6ThUy3ZbUdEhb318%2FUjyCGgs9GPlhBesiD4RK%2F9n91PjtV8jksAcuzNP6y5GQPnYMYQHxe%2FtmZ6hmau1MGaPycx6plFGrDa9ZhHQeXBoS9HyRGW2aZUwoOg%2BSpdTwlSlKmqupVRJwKsHpSpC7ItGd7brNbxPzAzGUrwTjQnrffvnIsyM0NcYC8GItko1Mqu6TNrgkYo2KZqzYS2HXPbhq%2BRaMa8OK4kgvBCcLNzW2kGiY5nD9ZGPqeLwsaMKuAusQGOqUBh1FlH4O9qwI4ERSejWXH5fZIL2Apq2K5ovCyMA2kh1Stj9UROz%2F%2Bdu5mNGHsjp%2F8gXhoRW31bT5sUALU03XhSmLYAMfaZPrCsIclvUNdQKztQlhRHulyc8rWBNKVBbx3mCX0ryp%2B3yYFZZAdPdv4lwunCL1GE56ZGFSAsnl%2BGMR5%2BYBdRe4HjgVjnEyyKt%2FEdLSJZDkFmeo%2Bg7nEW4kzFHjIZRqk&X-Amz-Signature=68b2d397986574c7d4d1a8808dabb69c6a21904ecb6edf2b31d3eb25e176b66c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLMHFVZA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSOitEYSVBb1MCfif%2F0oxGkIBmvAKBTFpl5vEwK%2FRlWgIgV6F1nPZq3pLvzYEuyOyXx5wSKhQs3ct%2Fl04V4Ug%2FGWoq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDG9ey7U3%2B1ZSFVMS5ircA8AE8%2FySMmKRvcVIcaA2XYs8Qkulnubwn%2BVrcww3NQkQYVd1G3Zqk%2Fj5hyeEGGsE8J6kgrd6Tc7BP2OPSzRz65j84dzbkpuwyGovlPCVESMtOT0bb2c6DKn%2BoTUKk2CBpOzohyN0HyZLy7l6VWo4cDKfsN1HLCRX8ymPajp2NBmcHHukRTCcAToh93JfbrSpiXUSccjcwDoQ3lAmdSqtlQd1Kv8e4lMPNq37GoKlMNN9yxvu3MqJTY7%2FSyssSMbnbSapC7LVRdj4ldn6KycuWUgFHjyvyGZrzaaAQgY2XVLMefjTktXcG3Q2a2X9U%2BEfFmyYt3ggyons2CRQCLePHMpJ6hrTzrKz3UYyRiSVbMAV9i2CD7qPP7T0vJDosB0FHy6ThUy3ZbUdEhb318%2FUjyCGgs9GPlhBesiD4RK%2F9n91PjtV8jksAcuzNP6y5GQPnYMYQHxe%2FtmZ6hmau1MGaPycx6plFGrDa9ZhHQeXBoS9HyRGW2aZUwoOg%2BSpdTwlSlKmqupVRJwKsHpSpC7ItGd7brNbxPzAzGUrwTjQnrffvnIsyM0NcYC8GItko1Mqu6TNrgkYo2KZqzYS2HXPbhq%2BRaMa8OK4kgvBCcLNzW2kGiY5nD9ZGPqeLwsaMKuAusQGOqUBh1FlH4O9qwI4ERSejWXH5fZIL2Apq2K5ovCyMA2kh1Stj9UROz%2F%2Bdu5mNGHsjp%2F8gXhoRW31bT5sUALU03XhSmLYAMfaZPrCsIclvUNdQKztQlhRHulyc8rWBNKVBbx3mCX0ryp%2B3yYFZZAdPdv4lwunCL1GE56ZGFSAsnl%2BGMR5%2BYBdRe4HjgVjnEyyKt%2FEdLSJZDkFmeo%2Bg7nEW4kzFHjIZRqk&X-Amz-Signature=e8d7a17f4a16743100a85436061d972c34c15aaa4508240e773f6dd4fe484358&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLMHFVZA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSOitEYSVBb1MCfif%2F0oxGkIBmvAKBTFpl5vEwK%2FRlWgIgV6F1nPZq3pLvzYEuyOyXx5wSKhQs3ct%2Fl04V4Ug%2FGWoq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDG9ey7U3%2B1ZSFVMS5ircA8AE8%2FySMmKRvcVIcaA2XYs8Qkulnubwn%2BVrcww3NQkQYVd1G3Zqk%2Fj5hyeEGGsE8J6kgrd6Tc7BP2OPSzRz65j84dzbkpuwyGovlPCVESMtOT0bb2c6DKn%2BoTUKk2CBpOzohyN0HyZLy7l6VWo4cDKfsN1HLCRX8ymPajp2NBmcHHukRTCcAToh93JfbrSpiXUSccjcwDoQ3lAmdSqtlQd1Kv8e4lMPNq37GoKlMNN9yxvu3MqJTY7%2FSyssSMbnbSapC7LVRdj4ldn6KycuWUgFHjyvyGZrzaaAQgY2XVLMefjTktXcG3Q2a2X9U%2BEfFmyYt3ggyons2CRQCLePHMpJ6hrTzrKz3UYyRiSVbMAV9i2CD7qPP7T0vJDosB0FHy6ThUy3ZbUdEhb318%2FUjyCGgs9GPlhBesiD4RK%2F9n91PjtV8jksAcuzNP6y5GQPnYMYQHxe%2FtmZ6hmau1MGaPycx6plFGrDa9ZhHQeXBoS9HyRGW2aZUwoOg%2BSpdTwlSlKmqupVRJwKsHpSpC7ItGd7brNbxPzAzGUrwTjQnrffvnIsyM0NcYC8GItko1Mqu6TNrgkYo2KZqzYS2HXPbhq%2BRaMa8OK4kgvBCcLNzW2kGiY5nD9ZGPqeLwsaMKuAusQGOqUBh1FlH4O9qwI4ERSejWXH5fZIL2Apq2K5ovCyMA2kh1Stj9UROz%2F%2Bdu5mNGHsjp%2F8gXhoRW31bT5sUALU03XhSmLYAMfaZPrCsIclvUNdQKztQlhRHulyc8rWBNKVBbx3mCX0ryp%2B3yYFZZAdPdv4lwunCL1GE56ZGFSAsnl%2BGMR5%2BYBdRe4HjgVjnEyyKt%2FEdLSJZDkFmeo%2Bg7nEW4kzFHjIZRqk&X-Amz-Signature=2191f149f347e6803551ab1afbf598d67eb1fe3698624be06b42a4dc19bed029&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLMHFVZA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSOitEYSVBb1MCfif%2F0oxGkIBmvAKBTFpl5vEwK%2FRlWgIgV6F1nPZq3pLvzYEuyOyXx5wSKhQs3ct%2Fl04V4Ug%2FGWoq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDG9ey7U3%2B1ZSFVMS5ircA8AE8%2FySMmKRvcVIcaA2XYs8Qkulnubwn%2BVrcww3NQkQYVd1G3Zqk%2Fj5hyeEGGsE8J6kgrd6Tc7BP2OPSzRz65j84dzbkpuwyGovlPCVESMtOT0bb2c6DKn%2BoTUKk2CBpOzohyN0HyZLy7l6VWo4cDKfsN1HLCRX8ymPajp2NBmcHHukRTCcAToh93JfbrSpiXUSccjcwDoQ3lAmdSqtlQd1Kv8e4lMPNq37GoKlMNN9yxvu3MqJTY7%2FSyssSMbnbSapC7LVRdj4ldn6KycuWUgFHjyvyGZrzaaAQgY2XVLMefjTktXcG3Q2a2X9U%2BEfFmyYt3ggyons2CRQCLePHMpJ6hrTzrKz3UYyRiSVbMAV9i2CD7qPP7T0vJDosB0FHy6ThUy3ZbUdEhb318%2FUjyCGgs9GPlhBesiD4RK%2F9n91PjtV8jksAcuzNP6y5GQPnYMYQHxe%2FtmZ6hmau1MGaPycx6plFGrDa9ZhHQeXBoS9HyRGW2aZUwoOg%2BSpdTwlSlKmqupVRJwKsHpSpC7ItGd7brNbxPzAzGUrwTjQnrffvnIsyM0NcYC8GItko1Mqu6TNrgkYo2KZqzYS2HXPbhq%2BRaMa8OK4kgvBCcLNzW2kGiY5nD9ZGPqeLwsaMKuAusQGOqUBh1FlH4O9qwI4ERSejWXH5fZIL2Apq2K5ovCyMA2kh1Stj9UROz%2F%2Bdu5mNGHsjp%2F8gXhoRW31bT5sUALU03XhSmLYAMfaZPrCsIclvUNdQKztQlhRHulyc8rWBNKVBbx3mCX0ryp%2B3yYFZZAdPdv4lwunCL1GE56ZGFSAsnl%2BGMR5%2BYBdRe4HjgVjnEyyKt%2FEdLSJZDkFmeo%2Bg7nEW4kzFHjIZRqk&X-Amz-Signature=3c34482f1853069a0aa00fa006b248ca6289f643bcfe27c51b1cc84d392617ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLMHFVZA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSOitEYSVBb1MCfif%2F0oxGkIBmvAKBTFpl5vEwK%2FRlWgIgV6F1nPZq3pLvzYEuyOyXx5wSKhQs3ct%2Fl04V4Ug%2FGWoq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDG9ey7U3%2B1ZSFVMS5ircA8AE8%2FySMmKRvcVIcaA2XYs8Qkulnubwn%2BVrcww3NQkQYVd1G3Zqk%2Fj5hyeEGGsE8J6kgrd6Tc7BP2OPSzRz65j84dzbkpuwyGovlPCVESMtOT0bb2c6DKn%2BoTUKk2CBpOzohyN0HyZLy7l6VWo4cDKfsN1HLCRX8ymPajp2NBmcHHukRTCcAToh93JfbrSpiXUSccjcwDoQ3lAmdSqtlQd1Kv8e4lMPNq37GoKlMNN9yxvu3MqJTY7%2FSyssSMbnbSapC7LVRdj4ldn6KycuWUgFHjyvyGZrzaaAQgY2XVLMefjTktXcG3Q2a2X9U%2BEfFmyYt3ggyons2CRQCLePHMpJ6hrTzrKz3UYyRiSVbMAV9i2CD7qPP7T0vJDosB0FHy6ThUy3ZbUdEhb318%2FUjyCGgs9GPlhBesiD4RK%2F9n91PjtV8jksAcuzNP6y5GQPnYMYQHxe%2FtmZ6hmau1MGaPycx6plFGrDa9ZhHQeXBoS9HyRGW2aZUwoOg%2BSpdTwlSlKmqupVRJwKsHpSpC7ItGd7brNbxPzAzGUrwTjQnrffvnIsyM0NcYC8GItko1Mqu6TNrgkYo2KZqzYS2HXPbhq%2BRaMa8OK4kgvBCcLNzW2kGiY5nD9ZGPqeLwsaMKuAusQGOqUBh1FlH4O9qwI4ERSejWXH5fZIL2Apq2K5ovCyMA2kh1Stj9UROz%2F%2Bdu5mNGHsjp%2F8gXhoRW31bT5sUALU03XhSmLYAMfaZPrCsIclvUNdQKztQlhRHulyc8rWBNKVBbx3mCX0ryp%2B3yYFZZAdPdv4lwunCL1GE56ZGFSAsnl%2BGMR5%2BYBdRe4HjgVjnEyyKt%2FEdLSJZDkFmeo%2Bg7nEW4kzFHjIZRqk&X-Amz-Signature=47851cd4eb930ab25a4112a839ac4e048ae281254ba65be1ab07fa3a2c0034f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
