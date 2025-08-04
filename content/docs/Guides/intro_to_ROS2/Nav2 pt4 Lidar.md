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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5BCKP42%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDRVhoV%2FUTkP%2FRbynjo%2FtbODIaNQUx83BVyW6Drw3mYbAIgAN6Zug52VGId5VttndJoAcBmULfcJITcEK4LIRaP%2BEwq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDIe64tQHJtceU7m04CrcA2O3RxpQXUbxAbDsMWUiDAUAOt9gBTFoMUCvfR6dJKXnB0oOQxAek1iTqNBn4BaimuT7cjBRZ%2BFqBd%2FBP4CzKxKqxW8nJcDlrsfXisFMPFiq%2Fw7Ugfokpw32jh8AVyo1Krb%2FpoI7eXwHzaWUjBuhJi2dQAqJeZc2AUx0I0bgJvV4HcHcFpX2F9f1GpyMrZCN9CNV04rA2wlbHR%2FCaTUOY5y7GgBwEoOze6ePsAa2z9dSP0POGChQo98vW3JCOZs7PiHmtLBaPDQkwUsX%2F08t1ye%2B9yx3L4GBs6DEDK%2Fx%2BTNfSIgTAPhWcCPg53uPAMVDxldejywq%2BVIY4q0ekTk3p%2F2PkO%2F3pUkUMXmOIehlEf8YWuc93NdBYyzfFFvFtAZEq2EH8DBVvMzg791q9ffkt9eN8QHbYRwMp44CsoROI2TgNR%2FCVn12E%2B1LDoXmJTYYE20csu9dxU%2BiCHE1PVIB1ag0Rx6kwcvbFpKZcCoQ2TWSMwJC1kRLalwNcmWHWwfGFkvv2xfIeiPB8ZnuJF3Nmvgx3b8Hlus6ihQhjdGtc%2BIJkt6UgpPk9CW9WmQ71ZRayc0m71Db68rt86zzYowMcjc4KnDhgAVNERcHaRGkt%2FGOAb%2FyZd25gwGUt4PpMJ%2F7v8QGOqUBh%2FWOXX3ec7zYgHZaEVKh2zSOdgV5k2Aylw8xnBL%2FJ3Neeo%2FiYYnYbJVbmy%2BhHvSGzqDAoC6vuPE7yYs%2BVMCI%2FWpEk7IFNh7r4ymAsHcb%2FFwkPVRySXs5PJ7j9Hxv57dwUc%2Fyz0H%2FKcALFaMaXz5vc6h%2FOLpEZpV1BDhkFLeyVWCLTPXHvOm1RAGNmpBgBzzYQpGptxoqdy2Ecnsl895pwx288c5a&X-Amz-Signature=5e0a50cb68ccbec0c784196e41bb928e47527af6cc78e75288515553009f8d7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKX4AR3A%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCCWA3t3Stv06LnEqk8X7ACvQMNoaeG9jLjgHsQlu90RAIhAK%2Fa%2BF83TmZYbCD8RGI5LJRpDyJArJn0rp6ZCOJeUJOdKv8DCDoQABoMNjM3NDIzMTgzODA1IgwRh2Sj2Zm9FKzv4Voq3APXQkthSkB17hfmieSVfg5bWNbdhh6RkCm1VAPcBk1BrDEzmpy6zrJ2MOLrKydlIYRFtYI3CPfrKdwSMkyErJ6f4ON%2F0SrWAWYc2kx21fkVp7OprUCg3zpbr%2FE1aPpNwOQeLG3oeseHn6O3tSpP%2FWGMOMH1OO%2FKRz%2FQCQMa2Ol0K4BMUVBqtzjSrVDRDHK3yopDrt%2BeC%2Ffgt2nyE%2BQ3hEd%2Fxh6W4p9fxBh97Wzyq1kbZNTp8H8q%2FNQEaEvYUsxz5Ve8pSEonOEwFSkS78Q8Tn4OnnJ3niakSo7ZgE2ynuM%2B1Iu%2BdZ9XRvz8RUVlS%2Fs%2BH4INHo5MRMEGKVuyxTxFSzz%2BXQ%2Bb3v83vz%2BTZTaphjigyx9vIYGWzqJw986Tnl35rH4FHAB2faaCMtFbkWMjNRQn2CgMAS%2BhymbQV7%2F1jtNvStFCKjsCl%2FuvLSqNJtaASv7TGJvaC8FXdXUL0UfvqSEWqLpcGFZgOhgpHvcDMQ4sN24u5%2Ft%2BmCmNePoVuNSSs7%2FlDQtZYCzHqRjfAz42Ao5TU93yRivLXMVHxtJXs3Q1fLwn%2FiPVO1aubjwj3aymrHJl5KT3RH2C1SmE%2F5xNuZWBU9K9kfZ0eWguIawImvkGAM60AIktLBTAEll3LzCr%2Fr%2FEBjqkAdk5fhZcwwkn8HwLx50smakeY8kgFVGaOZz4zeM6DPF17hsw71nb9n29alRuE2zl%2BiFnGnSMZgJgPwtSahCkaCqq15GzRspIWUck5eHKcRECFbFXmb4CwuTjXA%2B3WKXxIbDEatlhNKxd7Pqrq%2FZVKM%2BNR0OEgapkWyM3%2FPax0A%2F8q0%2BsDOpFWbdOnlrutxjBTMHThEHfQNUHD2iUm4DhAFJQBsfi&X-Amz-Signature=c1b1b094cf4cd8a1905397353a5fda862cb6871b7f897cf513bd46d31a0ec166&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKX4AR3A%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCCWA3t3Stv06LnEqk8X7ACvQMNoaeG9jLjgHsQlu90RAIhAK%2Fa%2BF83TmZYbCD8RGI5LJRpDyJArJn0rp6ZCOJeUJOdKv8DCDoQABoMNjM3NDIzMTgzODA1IgwRh2Sj2Zm9FKzv4Voq3APXQkthSkB17hfmieSVfg5bWNbdhh6RkCm1VAPcBk1BrDEzmpy6zrJ2MOLrKydlIYRFtYI3CPfrKdwSMkyErJ6f4ON%2F0SrWAWYc2kx21fkVp7OprUCg3zpbr%2FE1aPpNwOQeLG3oeseHn6O3tSpP%2FWGMOMH1OO%2FKRz%2FQCQMa2Ol0K4BMUVBqtzjSrVDRDHK3yopDrt%2BeC%2Ffgt2nyE%2BQ3hEd%2Fxh6W4p9fxBh97Wzyq1kbZNTp8H8q%2FNQEaEvYUsxz5Ve8pSEonOEwFSkS78Q8Tn4OnnJ3niakSo7ZgE2ynuM%2B1Iu%2BdZ9XRvz8RUVlS%2Fs%2BH4INHo5MRMEGKVuyxTxFSzz%2BXQ%2Bb3v83vz%2BTZTaphjigyx9vIYGWzqJw986Tnl35rH4FHAB2faaCMtFbkWMjNRQn2CgMAS%2BhymbQV7%2F1jtNvStFCKjsCl%2FuvLSqNJtaASv7TGJvaC8FXdXUL0UfvqSEWqLpcGFZgOhgpHvcDMQ4sN24u5%2Ft%2BmCmNePoVuNSSs7%2FlDQtZYCzHqRjfAz42Ao5TU93yRivLXMVHxtJXs3Q1fLwn%2FiPVO1aubjwj3aymrHJl5KT3RH2C1SmE%2F5xNuZWBU9K9kfZ0eWguIawImvkGAM60AIktLBTAEll3LzCr%2Fr%2FEBjqkAdk5fhZcwwkn8HwLx50smakeY8kgFVGaOZz4zeM6DPF17hsw71nb9n29alRuE2zl%2BiFnGnSMZgJgPwtSahCkaCqq15GzRspIWUck5eHKcRECFbFXmb4CwuTjXA%2B3WKXxIbDEatlhNKxd7Pqrq%2FZVKM%2BNR0OEgapkWyM3%2FPax0A%2F8q0%2BsDOpFWbdOnlrutxjBTMHThEHfQNUHD2iUm4DhAFJQBsfi&X-Amz-Signature=f41711e05c4a5830567c9b3537979062a300463606cd46bf25a48a57d8dd5303&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKX4AR3A%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCCWA3t3Stv06LnEqk8X7ACvQMNoaeG9jLjgHsQlu90RAIhAK%2Fa%2BF83TmZYbCD8RGI5LJRpDyJArJn0rp6ZCOJeUJOdKv8DCDoQABoMNjM3NDIzMTgzODA1IgwRh2Sj2Zm9FKzv4Voq3APXQkthSkB17hfmieSVfg5bWNbdhh6RkCm1VAPcBk1BrDEzmpy6zrJ2MOLrKydlIYRFtYI3CPfrKdwSMkyErJ6f4ON%2F0SrWAWYc2kx21fkVp7OprUCg3zpbr%2FE1aPpNwOQeLG3oeseHn6O3tSpP%2FWGMOMH1OO%2FKRz%2FQCQMa2Ol0K4BMUVBqtzjSrVDRDHK3yopDrt%2BeC%2Ffgt2nyE%2BQ3hEd%2Fxh6W4p9fxBh97Wzyq1kbZNTp8H8q%2FNQEaEvYUsxz5Ve8pSEonOEwFSkS78Q8Tn4OnnJ3niakSo7ZgE2ynuM%2B1Iu%2BdZ9XRvz8RUVlS%2Fs%2BH4INHo5MRMEGKVuyxTxFSzz%2BXQ%2Bb3v83vz%2BTZTaphjigyx9vIYGWzqJw986Tnl35rH4FHAB2faaCMtFbkWMjNRQn2CgMAS%2BhymbQV7%2F1jtNvStFCKjsCl%2FuvLSqNJtaASv7TGJvaC8FXdXUL0UfvqSEWqLpcGFZgOhgpHvcDMQ4sN24u5%2Ft%2BmCmNePoVuNSSs7%2FlDQtZYCzHqRjfAz42Ao5TU93yRivLXMVHxtJXs3Q1fLwn%2FiPVO1aubjwj3aymrHJl5KT3RH2C1SmE%2F5xNuZWBU9K9kfZ0eWguIawImvkGAM60AIktLBTAEll3LzCr%2Fr%2FEBjqkAdk5fhZcwwkn8HwLx50smakeY8kgFVGaOZz4zeM6DPF17hsw71nb9n29alRuE2zl%2BiFnGnSMZgJgPwtSahCkaCqq15GzRspIWUck5eHKcRECFbFXmb4CwuTjXA%2B3WKXxIbDEatlhNKxd7Pqrq%2FZVKM%2BNR0OEgapkWyM3%2FPax0A%2F8q0%2BsDOpFWbdOnlrutxjBTMHThEHfQNUHD2iUm4DhAFJQBsfi&X-Amz-Signature=6a1eb431691bdb9ef11d938ff00902222de301b77a02d39d4ac60465f5504c79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKX4AR3A%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCCWA3t3Stv06LnEqk8X7ACvQMNoaeG9jLjgHsQlu90RAIhAK%2Fa%2BF83TmZYbCD8RGI5LJRpDyJArJn0rp6ZCOJeUJOdKv8DCDoQABoMNjM3NDIzMTgzODA1IgwRh2Sj2Zm9FKzv4Voq3APXQkthSkB17hfmieSVfg5bWNbdhh6RkCm1VAPcBk1BrDEzmpy6zrJ2MOLrKydlIYRFtYI3CPfrKdwSMkyErJ6f4ON%2F0SrWAWYc2kx21fkVp7OprUCg3zpbr%2FE1aPpNwOQeLG3oeseHn6O3tSpP%2FWGMOMH1OO%2FKRz%2FQCQMa2Ol0K4BMUVBqtzjSrVDRDHK3yopDrt%2BeC%2Ffgt2nyE%2BQ3hEd%2Fxh6W4p9fxBh97Wzyq1kbZNTp8H8q%2FNQEaEvYUsxz5Ve8pSEonOEwFSkS78Q8Tn4OnnJ3niakSo7ZgE2ynuM%2B1Iu%2BdZ9XRvz8RUVlS%2Fs%2BH4INHo5MRMEGKVuyxTxFSzz%2BXQ%2Bb3v83vz%2BTZTaphjigyx9vIYGWzqJw986Tnl35rH4FHAB2faaCMtFbkWMjNRQn2CgMAS%2BhymbQV7%2F1jtNvStFCKjsCl%2FuvLSqNJtaASv7TGJvaC8FXdXUL0UfvqSEWqLpcGFZgOhgpHvcDMQ4sN24u5%2Ft%2BmCmNePoVuNSSs7%2FlDQtZYCzHqRjfAz42Ao5TU93yRivLXMVHxtJXs3Q1fLwn%2FiPVO1aubjwj3aymrHJl5KT3RH2C1SmE%2F5xNuZWBU9K9kfZ0eWguIawImvkGAM60AIktLBTAEll3LzCr%2Fr%2FEBjqkAdk5fhZcwwkn8HwLx50smakeY8kgFVGaOZz4zeM6DPF17hsw71nb9n29alRuE2zl%2BiFnGnSMZgJgPwtSahCkaCqq15GzRspIWUck5eHKcRECFbFXmb4CwuTjXA%2B3WKXxIbDEatlhNKxd7Pqrq%2FZVKM%2BNR0OEgapkWyM3%2FPax0A%2F8q0%2BsDOpFWbdOnlrutxjBTMHThEHfQNUHD2iUm4DhAFJQBsfi&X-Amz-Signature=1eda6561b2f37b5dcdaf5135d4288f49006015770b87a91ab9f29f243134032e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKX4AR3A%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCCWA3t3Stv06LnEqk8X7ACvQMNoaeG9jLjgHsQlu90RAIhAK%2Fa%2BF83TmZYbCD8RGI5LJRpDyJArJn0rp6ZCOJeUJOdKv8DCDoQABoMNjM3NDIzMTgzODA1IgwRh2Sj2Zm9FKzv4Voq3APXQkthSkB17hfmieSVfg5bWNbdhh6RkCm1VAPcBk1BrDEzmpy6zrJ2MOLrKydlIYRFtYI3CPfrKdwSMkyErJ6f4ON%2F0SrWAWYc2kx21fkVp7OprUCg3zpbr%2FE1aPpNwOQeLG3oeseHn6O3tSpP%2FWGMOMH1OO%2FKRz%2FQCQMa2Ol0K4BMUVBqtzjSrVDRDHK3yopDrt%2BeC%2Ffgt2nyE%2BQ3hEd%2Fxh6W4p9fxBh97Wzyq1kbZNTp8H8q%2FNQEaEvYUsxz5Ve8pSEonOEwFSkS78Q8Tn4OnnJ3niakSo7ZgE2ynuM%2B1Iu%2BdZ9XRvz8RUVlS%2Fs%2BH4INHo5MRMEGKVuyxTxFSzz%2BXQ%2Bb3v83vz%2BTZTaphjigyx9vIYGWzqJw986Tnl35rH4FHAB2faaCMtFbkWMjNRQn2CgMAS%2BhymbQV7%2F1jtNvStFCKjsCl%2FuvLSqNJtaASv7TGJvaC8FXdXUL0UfvqSEWqLpcGFZgOhgpHvcDMQ4sN24u5%2Ft%2BmCmNePoVuNSSs7%2FlDQtZYCzHqRjfAz42Ao5TU93yRivLXMVHxtJXs3Q1fLwn%2FiPVO1aubjwj3aymrHJl5KT3RH2C1SmE%2F5xNuZWBU9K9kfZ0eWguIawImvkGAM60AIktLBTAEll3LzCr%2Fr%2FEBjqkAdk5fhZcwwkn8HwLx50smakeY8kgFVGaOZz4zeM6DPF17hsw71nb9n29alRuE2zl%2BiFnGnSMZgJgPwtSahCkaCqq15GzRspIWUck5eHKcRECFbFXmb4CwuTjXA%2B3WKXxIbDEatlhNKxd7Pqrq%2FZVKM%2BNR0OEgapkWyM3%2FPax0A%2F8q0%2BsDOpFWbdOnlrutxjBTMHThEHfQNUHD2iUm4DhAFJQBsfi&X-Amz-Signature=411a847919fd948b502c7bfeb45cc9a95a54596544cb07f36cbf8b6b5af2296e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKX4AR3A%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCCWA3t3Stv06LnEqk8X7ACvQMNoaeG9jLjgHsQlu90RAIhAK%2Fa%2BF83TmZYbCD8RGI5LJRpDyJArJn0rp6ZCOJeUJOdKv8DCDoQABoMNjM3NDIzMTgzODA1IgwRh2Sj2Zm9FKzv4Voq3APXQkthSkB17hfmieSVfg5bWNbdhh6RkCm1VAPcBk1BrDEzmpy6zrJ2MOLrKydlIYRFtYI3CPfrKdwSMkyErJ6f4ON%2F0SrWAWYc2kx21fkVp7OprUCg3zpbr%2FE1aPpNwOQeLG3oeseHn6O3tSpP%2FWGMOMH1OO%2FKRz%2FQCQMa2Ol0K4BMUVBqtzjSrVDRDHK3yopDrt%2BeC%2Ffgt2nyE%2BQ3hEd%2Fxh6W4p9fxBh97Wzyq1kbZNTp8H8q%2FNQEaEvYUsxz5Ve8pSEonOEwFSkS78Q8Tn4OnnJ3niakSo7ZgE2ynuM%2B1Iu%2BdZ9XRvz8RUVlS%2Fs%2BH4INHo5MRMEGKVuyxTxFSzz%2BXQ%2Bb3v83vz%2BTZTaphjigyx9vIYGWzqJw986Tnl35rH4FHAB2faaCMtFbkWMjNRQn2CgMAS%2BhymbQV7%2F1jtNvStFCKjsCl%2FuvLSqNJtaASv7TGJvaC8FXdXUL0UfvqSEWqLpcGFZgOhgpHvcDMQ4sN24u5%2Ft%2BmCmNePoVuNSSs7%2FlDQtZYCzHqRjfAz42Ao5TU93yRivLXMVHxtJXs3Q1fLwn%2FiPVO1aubjwj3aymrHJl5KT3RH2C1SmE%2F5xNuZWBU9K9kfZ0eWguIawImvkGAM60AIktLBTAEll3LzCr%2Fr%2FEBjqkAdk5fhZcwwkn8HwLx50smakeY8kgFVGaOZz4zeM6DPF17hsw71nb9n29alRuE2zl%2BiFnGnSMZgJgPwtSahCkaCqq15GzRspIWUck5eHKcRECFbFXmb4CwuTjXA%2B3WKXxIbDEatlhNKxd7Pqrq%2FZVKM%2BNR0OEgapkWyM3%2FPax0A%2F8q0%2BsDOpFWbdOnlrutxjBTMHThEHfQNUHD2iUm4DhAFJQBsfi&X-Amz-Signature=e2bb19bcdfc343d7fe5dccaac760513793c604b2a3052d70d474b596c96699ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKX4AR3A%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCCWA3t3Stv06LnEqk8X7ACvQMNoaeG9jLjgHsQlu90RAIhAK%2Fa%2BF83TmZYbCD8RGI5LJRpDyJArJn0rp6ZCOJeUJOdKv8DCDoQABoMNjM3NDIzMTgzODA1IgwRh2Sj2Zm9FKzv4Voq3APXQkthSkB17hfmieSVfg5bWNbdhh6RkCm1VAPcBk1BrDEzmpy6zrJ2MOLrKydlIYRFtYI3CPfrKdwSMkyErJ6f4ON%2F0SrWAWYc2kx21fkVp7OprUCg3zpbr%2FE1aPpNwOQeLG3oeseHn6O3tSpP%2FWGMOMH1OO%2FKRz%2FQCQMa2Ol0K4BMUVBqtzjSrVDRDHK3yopDrt%2BeC%2Ffgt2nyE%2BQ3hEd%2Fxh6W4p9fxBh97Wzyq1kbZNTp8H8q%2FNQEaEvYUsxz5Ve8pSEonOEwFSkS78Q8Tn4OnnJ3niakSo7ZgE2ynuM%2B1Iu%2BdZ9XRvz8RUVlS%2Fs%2BH4INHo5MRMEGKVuyxTxFSzz%2BXQ%2Bb3v83vz%2BTZTaphjigyx9vIYGWzqJw986Tnl35rH4FHAB2faaCMtFbkWMjNRQn2CgMAS%2BhymbQV7%2F1jtNvStFCKjsCl%2FuvLSqNJtaASv7TGJvaC8FXdXUL0UfvqSEWqLpcGFZgOhgpHvcDMQ4sN24u5%2Ft%2BmCmNePoVuNSSs7%2FlDQtZYCzHqRjfAz42Ao5TU93yRivLXMVHxtJXs3Q1fLwn%2FiPVO1aubjwj3aymrHJl5KT3RH2C1SmE%2F5xNuZWBU9K9kfZ0eWguIawImvkGAM60AIktLBTAEll3LzCr%2Fr%2FEBjqkAdk5fhZcwwkn8HwLx50smakeY8kgFVGaOZz4zeM6DPF17hsw71nb9n29alRuE2zl%2BiFnGnSMZgJgPwtSahCkaCqq15GzRspIWUck5eHKcRECFbFXmb4CwuTjXA%2B3WKXxIbDEatlhNKxd7Pqrq%2FZVKM%2BNR0OEgapkWyM3%2FPax0A%2F8q0%2BsDOpFWbdOnlrutxjBTMHThEHfQNUHD2iUm4DhAFJQBsfi&X-Amz-Signature=c66114a29bb400d03d2df7da0f59c537f43253d680a490194ea2ee06794228d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKX4AR3A%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCCWA3t3Stv06LnEqk8X7ACvQMNoaeG9jLjgHsQlu90RAIhAK%2Fa%2BF83TmZYbCD8RGI5LJRpDyJArJn0rp6ZCOJeUJOdKv8DCDoQABoMNjM3NDIzMTgzODA1IgwRh2Sj2Zm9FKzv4Voq3APXQkthSkB17hfmieSVfg5bWNbdhh6RkCm1VAPcBk1BrDEzmpy6zrJ2MOLrKydlIYRFtYI3CPfrKdwSMkyErJ6f4ON%2F0SrWAWYc2kx21fkVp7OprUCg3zpbr%2FE1aPpNwOQeLG3oeseHn6O3tSpP%2FWGMOMH1OO%2FKRz%2FQCQMa2Ol0K4BMUVBqtzjSrVDRDHK3yopDrt%2BeC%2Ffgt2nyE%2BQ3hEd%2Fxh6W4p9fxBh97Wzyq1kbZNTp8H8q%2FNQEaEvYUsxz5Ve8pSEonOEwFSkS78Q8Tn4OnnJ3niakSo7ZgE2ynuM%2B1Iu%2BdZ9XRvz8RUVlS%2Fs%2BH4INHo5MRMEGKVuyxTxFSzz%2BXQ%2Bb3v83vz%2BTZTaphjigyx9vIYGWzqJw986Tnl35rH4FHAB2faaCMtFbkWMjNRQn2CgMAS%2BhymbQV7%2F1jtNvStFCKjsCl%2FuvLSqNJtaASv7TGJvaC8FXdXUL0UfvqSEWqLpcGFZgOhgpHvcDMQ4sN24u5%2Ft%2BmCmNePoVuNSSs7%2FlDQtZYCzHqRjfAz42Ao5TU93yRivLXMVHxtJXs3Q1fLwn%2FiPVO1aubjwj3aymrHJl5KT3RH2C1SmE%2F5xNuZWBU9K9kfZ0eWguIawImvkGAM60AIktLBTAEll3LzCr%2Fr%2FEBjqkAdk5fhZcwwkn8HwLx50smakeY8kgFVGaOZz4zeM6DPF17hsw71nb9n29alRuE2zl%2BiFnGnSMZgJgPwtSahCkaCqq15GzRspIWUck5eHKcRECFbFXmb4CwuTjXA%2B3WKXxIbDEatlhNKxd7Pqrq%2FZVKM%2BNR0OEgapkWyM3%2FPax0A%2F8q0%2BsDOpFWbdOnlrutxjBTMHThEHfQNUHD2iUm4DhAFJQBsfi&X-Amz-Signature=a393a23ea367c68bf99bf735f4a1f579145a7c8a8a9e9f2bda62d4e2742d4e5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKX4AR3A%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCCWA3t3Stv06LnEqk8X7ACvQMNoaeG9jLjgHsQlu90RAIhAK%2Fa%2BF83TmZYbCD8RGI5LJRpDyJArJn0rp6ZCOJeUJOdKv8DCDoQABoMNjM3NDIzMTgzODA1IgwRh2Sj2Zm9FKzv4Voq3APXQkthSkB17hfmieSVfg5bWNbdhh6RkCm1VAPcBk1BrDEzmpy6zrJ2MOLrKydlIYRFtYI3CPfrKdwSMkyErJ6f4ON%2F0SrWAWYc2kx21fkVp7OprUCg3zpbr%2FE1aPpNwOQeLG3oeseHn6O3tSpP%2FWGMOMH1OO%2FKRz%2FQCQMa2Ol0K4BMUVBqtzjSrVDRDHK3yopDrt%2BeC%2Ffgt2nyE%2BQ3hEd%2Fxh6W4p9fxBh97Wzyq1kbZNTp8H8q%2FNQEaEvYUsxz5Ve8pSEonOEwFSkS78Q8Tn4OnnJ3niakSo7ZgE2ynuM%2B1Iu%2BdZ9XRvz8RUVlS%2Fs%2BH4INHo5MRMEGKVuyxTxFSzz%2BXQ%2Bb3v83vz%2BTZTaphjigyx9vIYGWzqJw986Tnl35rH4FHAB2faaCMtFbkWMjNRQn2CgMAS%2BhymbQV7%2F1jtNvStFCKjsCl%2FuvLSqNJtaASv7TGJvaC8FXdXUL0UfvqSEWqLpcGFZgOhgpHvcDMQ4sN24u5%2Ft%2BmCmNePoVuNSSs7%2FlDQtZYCzHqRjfAz42Ao5TU93yRivLXMVHxtJXs3Q1fLwn%2FiPVO1aubjwj3aymrHJl5KT3RH2C1SmE%2F5xNuZWBU9K9kfZ0eWguIawImvkGAM60AIktLBTAEll3LzCr%2Fr%2FEBjqkAdk5fhZcwwkn8HwLx50smakeY8kgFVGaOZz4zeM6DPF17hsw71nb9n29alRuE2zl%2BiFnGnSMZgJgPwtSahCkaCqq15GzRspIWUck5eHKcRECFbFXmb4CwuTjXA%2B3WKXxIbDEatlhNKxd7Pqrq%2FZVKM%2BNR0OEgapkWyM3%2FPax0A%2F8q0%2BsDOpFWbdOnlrutxjBTMHThEHfQNUHD2iUm4DhAFJQBsfi&X-Amz-Signature=b2f46ee35734d5fdcc2b11add97b2870bdd4febd584f5ac28d1d86221efe38af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKX4AR3A%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCCWA3t3Stv06LnEqk8X7ACvQMNoaeG9jLjgHsQlu90RAIhAK%2Fa%2BF83TmZYbCD8RGI5LJRpDyJArJn0rp6ZCOJeUJOdKv8DCDoQABoMNjM3NDIzMTgzODA1IgwRh2Sj2Zm9FKzv4Voq3APXQkthSkB17hfmieSVfg5bWNbdhh6RkCm1VAPcBk1BrDEzmpy6zrJ2MOLrKydlIYRFtYI3CPfrKdwSMkyErJ6f4ON%2F0SrWAWYc2kx21fkVp7OprUCg3zpbr%2FE1aPpNwOQeLG3oeseHn6O3tSpP%2FWGMOMH1OO%2FKRz%2FQCQMa2Ol0K4BMUVBqtzjSrVDRDHK3yopDrt%2BeC%2Ffgt2nyE%2BQ3hEd%2Fxh6W4p9fxBh97Wzyq1kbZNTp8H8q%2FNQEaEvYUsxz5Ve8pSEonOEwFSkS78Q8Tn4OnnJ3niakSo7ZgE2ynuM%2B1Iu%2BdZ9XRvz8RUVlS%2Fs%2BH4INHo5MRMEGKVuyxTxFSzz%2BXQ%2Bb3v83vz%2BTZTaphjigyx9vIYGWzqJw986Tnl35rH4FHAB2faaCMtFbkWMjNRQn2CgMAS%2BhymbQV7%2F1jtNvStFCKjsCl%2FuvLSqNJtaASv7TGJvaC8FXdXUL0UfvqSEWqLpcGFZgOhgpHvcDMQ4sN24u5%2Ft%2BmCmNePoVuNSSs7%2FlDQtZYCzHqRjfAz42Ao5TU93yRivLXMVHxtJXs3Q1fLwn%2FiPVO1aubjwj3aymrHJl5KT3RH2C1SmE%2F5xNuZWBU9K9kfZ0eWguIawImvkGAM60AIktLBTAEll3LzCr%2Fr%2FEBjqkAdk5fhZcwwkn8HwLx50smakeY8kgFVGaOZz4zeM6DPF17hsw71nb9n29alRuE2zl%2BiFnGnSMZgJgPwtSahCkaCqq15GzRspIWUck5eHKcRECFbFXmb4CwuTjXA%2B3WKXxIbDEatlhNKxd7Pqrq%2FZVKM%2BNR0OEgapkWyM3%2FPax0A%2F8q0%2BsDOpFWbdOnlrutxjBTMHThEHfQNUHD2iUm4DhAFJQBsfi&X-Amz-Signature=1eda6561b2f37b5dcdaf5135d4288f49006015770b87a91ab9f29f243134032e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
