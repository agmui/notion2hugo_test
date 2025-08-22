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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW2GJYA2%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB20VozmSI%2FKW3gSZFry4r0dbKITjcIpAQdYa7teVaDtAiEApg4goxa4nLSxRl9txda39%2BrfqIjLMKxSzEs5jNBcFLQqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOfbFMwuRFd%2F0rM9gSrcA1jowqEQikzAzqUuUomnry6IHAYGKij9MBgeLjf68pYPTtl2Ld4mDcR1%2BYZtVaNCzUce2zd5czNFVYiz6MWd6JdSpFn2X4Y%2BYiQQlMnRYfvZSGDzF4pWJiyBdboTKPk%2BDzpOQdBapOYtG1zF5oY3W3iF9v5N1h2esCanOZCKVri%2BV9RNJirPuYXplK6nJlcHitK6GrsQHV5b6E3dWgwwaLUuq3gDLI7XzgK%2B9clZ8s1A28PbXHyZaUnekNeh%2BnxEB2b5%2FY%2BPayE5RZYP0oHh%2FbDxWsLs%2F0SVrrSA%2FR8MGS5j2nbuUaIHunOIX2uctfnwQ0ohrl6DpdshhDcysHJJ804BcA4sgMaqHUE0UJEK1WTWXxAE1Mj5%2FVg%2BfaoHAire7RSYFqTx5%2FDIcvg4YLtx46r9f0ev0GSurEDjNAnGvfBqI4f8Ny6in%2BThgYTF0AXq9gc%2B4Y%2BylYltRqmyRUvzQdo%2F0WCewI1XfExRwj96Q2CDDUcjeyUZcCRNvnyIw74Hv9kFiqR7My9Kw%2FhlZyeRW9IOzW7WOEL%2BCaYwquTCsdDjGQ0Plfjuoyjmsa1f2sG6NssfAA7i8C79MWSBbPUngUlbpBvvoxpvUkxsPhKXNlYytlgQjvtm3vZ43yMJMPPynsUGOqUBJs5tmuU6UX7eCYdF9Cy646M0c2xzKE5O1IBSBK16bJrMtMmRtSDImQb0leewYzX6yg1l0SUhOFm%2FvRCFkzBUL4wG0PHM64FO6ISVtkRc188dQqAizFZI575J5iVd2yHRZC8VX0h4XW%2FdmMAmp%2BU52KHMcWInMgFql2jZWVcRKzfZEYtELbuDrO1%2FQ%2FhGIlrVk2tdg97CDXJfZXPDBsEKQkWCgnMp&X-Amz-Signature=b0847651ab7be609a298efc5e69710c4787953212d6a0ed20b78203baac6e881&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDJGUECU%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArgEo%2FkbShNl47PLpC%2BGCV7Ww78K8en3XbccKt35UqIAiA9lAbiuLfy7kPmWkTO9RVeBUFh9QpHJJC5eYvFcJ3UgyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHQVL6DAKYvX6i6Z%2FKtwD1%2Bp5rfjmuy%2BAJK%2BV%2B9p89OSsamVjK3UAEKTJRcTGC4NN1AmSCPzXwOWh%2FTRbx9lPBgMX49PxpeDI%2BLmvIrROK9FAmDrgYXQ%2Bf9T4MAL5TbWCZ10SzoRqzd1K1hs0cgoiahPwkoxziqRHLJ5ZX5Sn7cLpBlSRbZfRJpdL0w01fFPnnj4W5ovGPmfYDjghBt1Zlm8K0DW%2Befm52VuEhgqIUrr7COOZgDoivbdS68%2FNwc6QS0jYxcNY8kZeFeua7qzPR5YTme975055e%2FK36j8cDN4PV9%2F8WNP7Ei6fGeRseiFUK%2BdE0Qlwd71O7fX2Eu%2FAzC5iCl%2FHUSQZ6KmQpn7oFyc29TnzqpFCnn7rGlQGsfyd64ILmhXMlNnL3PRFVCIVolfZVXy7jFkqYsOklZlmgxVZJmoKOy%2FHzErIgets6lFYZxCBNvfPomYnMi0qngWg4XLtkuE3pXFVwaV15p8wMKXOeu4RRKp7KnOmpinvumVW0rTDFeS8MVOaOdIaUDV7Y9sZ1S8A3zDnGj0POjFkFsyjN8%2F51zFKDcbxzf3smNfSproU9e6PA3e3XuLGlpjs3UaGp9JiaUqfk6EVbpXoH4nbKYsLSrgMn2GlwxNonjX9odS9LHEzCU9iY4Mw%2FvKexQY6pgGU9XY0jkf1Rd77TQMhiNARnzTzox3FK6pCy7o8B8vbvQC75PwsQL3oRfyCenIW1%2Fk9SaX6rcRgR2n3qWciT92QfdILx60IysqHqQ%2Fitt2x9xrfFfPJR2pWnCYTdIqGfx77TI1nzcXo3D%2FgyHwPSZh1UbCGskY84ZkfTDPijTmfeq%2Bb7zeNWjOyGdu3s%2FY05reRX6fS42hkbGWz1Nhx0z1ZY9U%2BSKze&X-Amz-Signature=879aa6bfae4229e0b15caa8db4a876d5277db9b50404cb69f59d7fe3e6a49a58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDJGUECU%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArgEo%2FkbShNl47PLpC%2BGCV7Ww78K8en3XbccKt35UqIAiA9lAbiuLfy7kPmWkTO9RVeBUFh9QpHJJC5eYvFcJ3UgyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHQVL6DAKYvX6i6Z%2FKtwD1%2Bp5rfjmuy%2BAJK%2BV%2B9p89OSsamVjK3UAEKTJRcTGC4NN1AmSCPzXwOWh%2FTRbx9lPBgMX49PxpeDI%2BLmvIrROK9FAmDrgYXQ%2Bf9T4MAL5TbWCZ10SzoRqzd1K1hs0cgoiahPwkoxziqRHLJ5ZX5Sn7cLpBlSRbZfRJpdL0w01fFPnnj4W5ovGPmfYDjghBt1Zlm8K0DW%2Befm52VuEhgqIUrr7COOZgDoivbdS68%2FNwc6QS0jYxcNY8kZeFeua7qzPR5YTme975055e%2FK36j8cDN4PV9%2F8WNP7Ei6fGeRseiFUK%2BdE0Qlwd71O7fX2Eu%2FAzC5iCl%2FHUSQZ6KmQpn7oFyc29TnzqpFCnn7rGlQGsfyd64ILmhXMlNnL3PRFVCIVolfZVXy7jFkqYsOklZlmgxVZJmoKOy%2FHzErIgets6lFYZxCBNvfPomYnMi0qngWg4XLtkuE3pXFVwaV15p8wMKXOeu4RRKp7KnOmpinvumVW0rTDFeS8MVOaOdIaUDV7Y9sZ1S8A3zDnGj0POjFkFsyjN8%2F51zFKDcbxzf3smNfSproU9e6PA3e3XuLGlpjs3UaGp9JiaUqfk6EVbpXoH4nbKYsLSrgMn2GlwxNonjX9odS9LHEzCU9iY4Mw%2FvKexQY6pgGU9XY0jkf1Rd77TQMhiNARnzTzox3FK6pCy7o8B8vbvQC75PwsQL3oRfyCenIW1%2Fk9SaX6rcRgR2n3qWciT92QfdILx60IysqHqQ%2Fitt2x9xrfFfPJR2pWnCYTdIqGfx77TI1nzcXo3D%2FgyHwPSZh1UbCGskY84ZkfTDPijTmfeq%2Bb7zeNWjOyGdu3s%2FY05reRX6fS42hkbGWz1Nhx0z1ZY9U%2BSKze&X-Amz-Signature=e1ba15160e6be26de3011890a47181ad88e6869435831b59899f9de50cce0c46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDJGUECU%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArgEo%2FkbShNl47PLpC%2BGCV7Ww78K8en3XbccKt35UqIAiA9lAbiuLfy7kPmWkTO9RVeBUFh9QpHJJC5eYvFcJ3UgyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHQVL6DAKYvX6i6Z%2FKtwD1%2Bp5rfjmuy%2BAJK%2BV%2B9p89OSsamVjK3UAEKTJRcTGC4NN1AmSCPzXwOWh%2FTRbx9lPBgMX49PxpeDI%2BLmvIrROK9FAmDrgYXQ%2Bf9T4MAL5TbWCZ10SzoRqzd1K1hs0cgoiahPwkoxziqRHLJ5ZX5Sn7cLpBlSRbZfRJpdL0w01fFPnnj4W5ovGPmfYDjghBt1Zlm8K0DW%2Befm52VuEhgqIUrr7COOZgDoivbdS68%2FNwc6QS0jYxcNY8kZeFeua7qzPR5YTme975055e%2FK36j8cDN4PV9%2F8WNP7Ei6fGeRseiFUK%2BdE0Qlwd71O7fX2Eu%2FAzC5iCl%2FHUSQZ6KmQpn7oFyc29TnzqpFCnn7rGlQGsfyd64ILmhXMlNnL3PRFVCIVolfZVXy7jFkqYsOklZlmgxVZJmoKOy%2FHzErIgets6lFYZxCBNvfPomYnMi0qngWg4XLtkuE3pXFVwaV15p8wMKXOeu4RRKp7KnOmpinvumVW0rTDFeS8MVOaOdIaUDV7Y9sZ1S8A3zDnGj0POjFkFsyjN8%2F51zFKDcbxzf3smNfSproU9e6PA3e3XuLGlpjs3UaGp9JiaUqfk6EVbpXoH4nbKYsLSrgMn2GlwxNonjX9odS9LHEzCU9iY4Mw%2FvKexQY6pgGU9XY0jkf1Rd77TQMhiNARnzTzox3FK6pCy7o8B8vbvQC75PwsQL3oRfyCenIW1%2Fk9SaX6rcRgR2n3qWciT92QfdILx60IysqHqQ%2Fitt2x9xrfFfPJR2pWnCYTdIqGfx77TI1nzcXo3D%2FgyHwPSZh1UbCGskY84ZkfTDPijTmfeq%2Bb7zeNWjOyGdu3s%2FY05reRX6fS42hkbGWz1Nhx0z1ZY9U%2BSKze&X-Amz-Signature=1abfbacba78d6777ad48fd0a1bc13c239f3d00c6d083a4906264ee1da412837c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDJGUECU%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArgEo%2FkbShNl47PLpC%2BGCV7Ww78K8en3XbccKt35UqIAiA9lAbiuLfy7kPmWkTO9RVeBUFh9QpHJJC5eYvFcJ3UgyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHQVL6DAKYvX6i6Z%2FKtwD1%2Bp5rfjmuy%2BAJK%2BV%2B9p89OSsamVjK3UAEKTJRcTGC4NN1AmSCPzXwOWh%2FTRbx9lPBgMX49PxpeDI%2BLmvIrROK9FAmDrgYXQ%2Bf9T4MAL5TbWCZ10SzoRqzd1K1hs0cgoiahPwkoxziqRHLJ5ZX5Sn7cLpBlSRbZfRJpdL0w01fFPnnj4W5ovGPmfYDjghBt1Zlm8K0DW%2Befm52VuEhgqIUrr7COOZgDoivbdS68%2FNwc6QS0jYxcNY8kZeFeua7qzPR5YTme975055e%2FK36j8cDN4PV9%2F8WNP7Ei6fGeRseiFUK%2BdE0Qlwd71O7fX2Eu%2FAzC5iCl%2FHUSQZ6KmQpn7oFyc29TnzqpFCnn7rGlQGsfyd64ILmhXMlNnL3PRFVCIVolfZVXy7jFkqYsOklZlmgxVZJmoKOy%2FHzErIgets6lFYZxCBNvfPomYnMi0qngWg4XLtkuE3pXFVwaV15p8wMKXOeu4RRKp7KnOmpinvumVW0rTDFeS8MVOaOdIaUDV7Y9sZ1S8A3zDnGj0POjFkFsyjN8%2F51zFKDcbxzf3smNfSproU9e6PA3e3XuLGlpjs3UaGp9JiaUqfk6EVbpXoH4nbKYsLSrgMn2GlwxNonjX9odS9LHEzCU9iY4Mw%2FvKexQY6pgGU9XY0jkf1Rd77TQMhiNARnzTzox3FK6pCy7o8B8vbvQC75PwsQL3oRfyCenIW1%2Fk9SaX6rcRgR2n3qWciT92QfdILx60IysqHqQ%2Fitt2x9xrfFfPJR2pWnCYTdIqGfx77TI1nzcXo3D%2FgyHwPSZh1UbCGskY84ZkfTDPijTmfeq%2Bb7zeNWjOyGdu3s%2FY05reRX6fS42hkbGWz1Nhx0z1ZY9U%2BSKze&X-Amz-Signature=6b6dbb70fb3fa2ecd4f3d5999e1ef525d879cef04700a244da9ee8520cb1c3f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDJGUECU%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArgEo%2FkbShNl47PLpC%2BGCV7Ww78K8en3XbccKt35UqIAiA9lAbiuLfy7kPmWkTO9RVeBUFh9QpHJJC5eYvFcJ3UgyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHQVL6DAKYvX6i6Z%2FKtwD1%2Bp5rfjmuy%2BAJK%2BV%2B9p89OSsamVjK3UAEKTJRcTGC4NN1AmSCPzXwOWh%2FTRbx9lPBgMX49PxpeDI%2BLmvIrROK9FAmDrgYXQ%2Bf9T4MAL5TbWCZ10SzoRqzd1K1hs0cgoiahPwkoxziqRHLJ5ZX5Sn7cLpBlSRbZfRJpdL0w01fFPnnj4W5ovGPmfYDjghBt1Zlm8K0DW%2Befm52VuEhgqIUrr7COOZgDoivbdS68%2FNwc6QS0jYxcNY8kZeFeua7qzPR5YTme975055e%2FK36j8cDN4PV9%2F8WNP7Ei6fGeRseiFUK%2BdE0Qlwd71O7fX2Eu%2FAzC5iCl%2FHUSQZ6KmQpn7oFyc29TnzqpFCnn7rGlQGsfyd64ILmhXMlNnL3PRFVCIVolfZVXy7jFkqYsOklZlmgxVZJmoKOy%2FHzErIgets6lFYZxCBNvfPomYnMi0qngWg4XLtkuE3pXFVwaV15p8wMKXOeu4RRKp7KnOmpinvumVW0rTDFeS8MVOaOdIaUDV7Y9sZ1S8A3zDnGj0POjFkFsyjN8%2F51zFKDcbxzf3smNfSproU9e6PA3e3XuLGlpjs3UaGp9JiaUqfk6EVbpXoH4nbKYsLSrgMn2GlwxNonjX9odS9LHEzCU9iY4Mw%2FvKexQY6pgGU9XY0jkf1Rd77TQMhiNARnzTzox3FK6pCy7o8B8vbvQC75PwsQL3oRfyCenIW1%2Fk9SaX6rcRgR2n3qWciT92QfdILx60IysqHqQ%2Fitt2x9xrfFfPJR2pWnCYTdIqGfx77TI1nzcXo3D%2FgyHwPSZh1UbCGskY84ZkfTDPijTmfeq%2Bb7zeNWjOyGdu3s%2FY05reRX6fS42hkbGWz1Nhx0z1ZY9U%2BSKze&X-Amz-Signature=49cc44f32affeed97e346a3bca478b3a4f4e6e5631572f33cd71ccd6f12d39e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDJGUECU%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArgEo%2FkbShNl47PLpC%2BGCV7Ww78K8en3XbccKt35UqIAiA9lAbiuLfy7kPmWkTO9RVeBUFh9QpHJJC5eYvFcJ3UgyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHQVL6DAKYvX6i6Z%2FKtwD1%2Bp5rfjmuy%2BAJK%2BV%2B9p89OSsamVjK3UAEKTJRcTGC4NN1AmSCPzXwOWh%2FTRbx9lPBgMX49PxpeDI%2BLmvIrROK9FAmDrgYXQ%2Bf9T4MAL5TbWCZ10SzoRqzd1K1hs0cgoiahPwkoxziqRHLJ5ZX5Sn7cLpBlSRbZfRJpdL0w01fFPnnj4W5ovGPmfYDjghBt1Zlm8K0DW%2Befm52VuEhgqIUrr7COOZgDoivbdS68%2FNwc6QS0jYxcNY8kZeFeua7qzPR5YTme975055e%2FK36j8cDN4PV9%2F8WNP7Ei6fGeRseiFUK%2BdE0Qlwd71O7fX2Eu%2FAzC5iCl%2FHUSQZ6KmQpn7oFyc29TnzqpFCnn7rGlQGsfyd64ILmhXMlNnL3PRFVCIVolfZVXy7jFkqYsOklZlmgxVZJmoKOy%2FHzErIgets6lFYZxCBNvfPomYnMi0qngWg4XLtkuE3pXFVwaV15p8wMKXOeu4RRKp7KnOmpinvumVW0rTDFeS8MVOaOdIaUDV7Y9sZ1S8A3zDnGj0POjFkFsyjN8%2F51zFKDcbxzf3smNfSproU9e6PA3e3XuLGlpjs3UaGp9JiaUqfk6EVbpXoH4nbKYsLSrgMn2GlwxNonjX9odS9LHEzCU9iY4Mw%2FvKexQY6pgGU9XY0jkf1Rd77TQMhiNARnzTzox3FK6pCy7o8B8vbvQC75PwsQL3oRfyCenIW1%2Fk9SaX6rcRgR2n3qWciT92QfdILx60IysqHqQ%2Fitt2x9xrfFfPJR2pWnCYTdIqGfx77TI1nzcXo3D%2FgyHwPSZh1UbCGskY84ZkfTDPijTmfeq%2Bb7zeNWjOyGdu3s%2FY05reRX6fS42hkbGWz1Nhx0z1ZY9U%2BSKze&X-Amz-Signature=c19d8463e9325540b15df8d972c4219541005266ca2b88bb67e326603663f612&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDJGUECU%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArgEo%2FkbShNl47PLpC%2BGCV7Ww78K8en3XbccKt35UqIAiA9lAbiuLfy7kPmWkTO9RVeBUFh9QpHJJC5eYvFcJ3UgyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHQVL6DAKYvX6i6Z%2FKtwD1%2Bp5rfjmuy%2BAJK%2BV%2B9p89OSsamVjK3UAEKTJRcTGC4NN1AmSCPzXwOWh%2FTRbx9lPBgMX49PxpeDI%2BLmvIrROK9FAmDrgYXQ%2Bf9T4MAL5TbWCZ10SzoRqzd1K1hs0cgoiahPwkoxziqRHLJ5ZX5Sn7cLpBlSRbZfRJpdL0w01fFPnnj4W5ovGPmfYDjghBt1Zlm8K0DW%2Befm52VuEhgqIUrr7COOZgDoivbdS68%2FNwc6QS0jYxcNY8kZeFeua7qzPR5YTme975055e%2FK36j8cDN4PV9%2F8WNP7Ei6fGeRseiFUK%2BdE0Qlwd71O7fX2Eu%2FAzC5iCl%2FHUSQZ6KmQpn7oFyc29TnzqpFCnn7rGlQGsfyd64ILmhXMlNnL3PRFVCIVolfZVXy7jFkqYsOklZlmgxVZJmoKOy%2FHzErIgets6lFYZxCBNvfPomYnMi0qngWg4XLtkuE3pXFVwaV15p8wMKXOeu4RRKp7KnOmpinvumVW0rTDFeS8MVOaOdIaUDV7Y9sZ1S8A3zDnGj0POjFkFsyjN8%2F51zFKDcbxzf3smNfSproU9e6PA3e3XuLGlpjs3UaGp9JiaUqfk6EVbpXoH4nbKYsLSrgMn2GlwxNonjX9odS9LHEzCU9iY4Mw%2FvKexQY6pgGU9XY0jkf1Rd77TQMhiNARnzTzox3FK6pCy7o8B8vbvQC75PwsQL3oRfyCenIW1%2Fk9SaX6rcRgR2n3qWciT92QfdILx60IysqHqQ%2Fitt2x9xrfFfPJR2pWnCYTdIqGfx77TI1nzcXo3D%2FgyHwPSZh1UbCGskY84ZkfTDPijTmfeq%2Bb7zeNWjOyGdu3s%2FY05reRX6fS42hkbGWz1Nhx0z1ZY9U%2BSKze&X-Amz-Signature=878cc0b20dfc3697afbee2016730679da7260a691831646df3ba3b03a45fb8bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDJGUECU%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArgEo%2FkbShNl47PLpC%2BGCV7Ww78K8en3XbccKt35UqIAiA9lAbiuLfy7kPmWkTO9RVeBUFh9QpHJJC5eYvFcJ3UgyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHQVL6DAKYvX6i6Z%2FKtwD1%2Bp5rfjmuy%2BAJK%2BV%2B9p89OSsamVjK3UAEKTJRcTGC4NN1AmSCPzXwOWh%2FTRbx9lPBgMX49PxpeDI%2BLmvIrROK9FAmDrgYXQ%2Bf9T4MAL5TbWCZ10SzoRqzd1K1hs0cgoiahPwkoxziqRHLJ5ZX5Sn7cLpBlSRbZfRJpdL0w01fFPnnj4W5ovGPmfYDjghBt1Zlm8K0DW%2Befm52VuEhgqIUrr7COOZgDoivbdS68%2FNwc6QS0jYxcNY8kZeFeua7qzPR5YTme975055e%2FK36j8cDN4PV9%2F8WNP7Ei6fGeRseiFUK%2BdE0Qlwd71O7fX2Eu%2FAzC5iCl%2FHUSQZ6KmQpn7oFyc29TnzqpFCnn7rGlQGsfyd64ILmhXMlNnL3PRFVCIVolfZVXy7jFkqYsOklZlmgxVZJmoKOy%2FHzErIgets6lFYZxCBNvfPomYnMi0qngWg4XLtkuE3pXFVwaV15p8wMKXOeu4RRKp7KnOmpinvumVW0rTDFeS8MVOaOdIaUDV7Y9sZ1S8A3zDnGj0POjFkFsyjN8%2F51zFKDcbxzf3smNfSproU9e6PA3e3XuLGlpjs3UaGp9JiaUqfk6EVbpXoH4nbKYsLSrgMn2GlwxNonjX9odS9LHEzCU9iY4Mw%2FvKexQY6pgGU9XY0jkf1Rd77TQMhiNARnzTzox3FK6pCy7o8B8vbvQC75PwsQL3oRfyCenIW1%2Fk9SaX6rcRgR2n3qWciT92QfdILx60IysqHqQ%2Fitt2x9xrfFfPJR2pWnCYTdIqGfx77TI1nzcXo3D%2FgyHwPSZh1UbCGskY84ZkfTDPijTmfeq%2Bb7zeNWjOyGdu3s%2FY05reRX6fS42hkbGWz1Nhx0z1ZY9U%2BSKze&X-Amz-Signature=f8a6ae9ee9259e01d9b5de1e8d0a0ca854a6478d7f6d8f8e2e32717660d1879f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDJGUECU%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArgEo%2FkbShNl47PLpC%2BGCV7Ww78K8en3XbccKt35UqIAiA9lAbiuLfy7kPmWkTO9RVeBUFh9QpHJJC5eYvFcJ3UgyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHQVL6DAKYvX6i6Z%2FKtwD1%2Bp5rfjmuy%2BAJK%2BV%2B9p89OSsamVjK3UAEKTJRcTGC4NN1AmSCPzXwOWh%2FTRbx9lPBgMX49PxpeDI%2BLmvIrROK9FAmDrgYXQ%2Bf9T4MAL5TbWCZ10SzoRqzd1K1hs0cgoiahPwkoxziqRHLJ5ZX5Sn7cLpBlSRbZfRJpdL0w01fFPnnj4W5ovGPmfYDjghBt1Zlm8K0DW%2Befm52VuEhgqIUrr7COOZgDoivbdS68%2FNwc6QS0jYxcNY8kZeFeua7qzPR5YTme975055e%2FK36j8cDN4PV9%2F8WNP7Ei6fGeRseiFUK%2BdE0Qlwd71O7fX2Eu%2FAzC5iCl%2FHUSQZ6KmQpn7oFyc29TnzqpFCnn7rGlQGsfyd64ILmhXMlNnL3PRFVCIVolfZVXy7jFkqYsOklZlmgxVZJmoKOy%2FHzErIgets6lFYZxCBNvfPomYnMi0qngWg4XLtkuE3pXFVwaV15p8wMKXOeu4RRKp7KnOmpinvumVW0rTDFeS8MVOaOdIaUDV7Y9sZ1S8A3zDnGj0POjFkFsyjN8%2F51zFKDcbxzf3smNfSproU9e6PA3e3XuLGlpjs3UaGp9JiaUqfk6EVbpXoH4nbKYsLSrgMn2GlwxNonjX9odS9LHEzCU9iY4Mw%2FvKexQY6pgGU9XY0jkf1Rd77TQMhiNARnzTzox3FK6pCy7o8B8vbvQC75PwsQL3oRfyCenIW1%2Fk9SaX6rcRgR2n3qWciT92QfdILx60IysqHqQ%2Fitt2x9xrfFfPJR2pWnCYTdIqGfx77TI1nzcXo3D%2FgyHwPSZh1UbCGskY84ZkfTDPijTmfeq%2Bb7zeNWjOyGdu3s%2FY05reRX6fS42hkbGWz1Nhx0z1ZY9U%2BSKze&X-Amz-Signature=0c63934bdf8a324b89ed370306c6fbde8543c9bfe9f1dddb5e09da30df2d1fa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDJGUECU%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArgEo%2FkbShNl47PLpC%2BGCV7Ww78K8en3XbccKt35UqIAiA9lAbiuLfy7kPmWkTO9RVeBUFh9QpHJJC5eYvFcJ3UgyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHQVL6DAKYvX6i6Z%2FKtwD1%2Bp5rfjmuy%2BAJK%2BV%2B9p89OSsamVjK3UAEKTJRcTGC4NN1AmSCPzXwOWh%2FTRbx9lPBgMX49PxpeDI%2BLmvIrROK9FAmDrgYXQ%2Bf9T4MAL5TbWCZ10SzoRqzd1K1hs0cgoiahPwkoxziqRHLJ5ZX5Sn7cLpBlSRbZfRJpdL0w01fFPnnj4W5ovGPmfYDjghBt1Zlm8K0DW%2Befm52VuEhgqIUrr7COOZgDoivbdS68%2FNwc6QS0jYxcNY8kZeFeua7qzPR5YTme975055e%2FK36j8cDN4PV9%2F8WNP7Ei6fGeRseiFUK%2BdE0Qlwd71O7fX2Eu%2FAzC5iCl%2FHUSQZ6KmQpn7oFyc29TnzqpFCnn7rGlQGsfyd64ILmhXMlNnL3PRFVCIVolfZVXy7jFkqYsOklZlmgxVZJmoKOy%2FHzErIgets6lFYZxCBNvfPomYnMi0qngWg4XLtkuE3pXFVwaV15p8wMKXOeu4RRKp7KnOmpinvumVW0rTDFeS8MVOaOdIaUDV7Y9sZ1S8A3zDnGj0POjFkFsyjN8%2F51zFKDcbxzf3smNfSproU9e6PA3e3XuLGlpjs3UaGp9JiaUqfk6EVbpXoH4nbKYsLSrgMn2GlwxNonjX9odS9LHEzCU9iY4Mw%2FvKexQY6pgGU9XY0jkf1Rd77TQMhiNARnzTzox3FK6pCy7o8B8vbvQC75PwsQL3oRfyCenIW1%2Fk9SaX6rcRgR2n3qWciT92QfdILx60IysqHqQ%2Fitt2x9xrfFfPJR2pWnCYTdIqGfx77TI1nzcXo3D%2FgyHwPSZh1UbCGskY84ZkfTDPijTmfeq%2Bb7zeNWjOyGdu3s%2FY05reRX6fS42hkbGWz1Nhx0z1ZY9U%2BSKze&X-Amz-Signature=6b6dbb70fb3fa2ecd4f3d5999e1ef525d879cef04700a244da9ee8520cb1c3f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
