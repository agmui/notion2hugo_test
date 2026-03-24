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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIDTN4UC%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFm%2Fyx5GUx9bkehiJ9n%2B8eNAeF79QJrPdsW%2FCMuGdm5GAiEAlP0bI5Am1MMrAgsP0F9hEMPV1JvyGnGx5iUhnk%2Fq2wAqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIys7FSK6awUJehdSSrcA8aEEoLSObGWzG9FqYNTjRFYMyrVYo%2BrpObDjO9lz%2FAfTVDOf%2FmDl9QUEzf6fK6HMrcarrWPK7iD7zitqE8Z0bDhch4Ch9FM%2FV89mjJDWW83M8WbV9XuFcrsymbb9x0UjWsK%2Fd88Az8kxYe1ahA7CISbxOoU%2BqKAGBsnHmgH74gf3bBlobuItNqON64pnwlaZliWwhq5S0EXvBWrFle47zl7gFw4ZxDBtbgjZoR8uUQy%2BocBvzQCzuF68MdBrPVQgUYBt8Jc4d%2FI%2BXQGwZ2h2Ukk%2FtvRxKVT7Jmeb3NKVGxhg0n5eLs5s2Ou0ZJ%2FAQcwrABGOZNI6T4ib1%2BQnhe9WxvMP2AaUOtA19kjSX61uBZiz9nSKkRMfHqhinFy%2FoU3HNEGRlnqZVhzZerBHVxKhnnS5xeR0pQHFGd2pWZ%2Fgugt2Z9XbawewrL77Ncgqu3zvrvHFj%2BAZfD4e5wWMk35jVQp85zRvUzVWn3neqkDMC%2B5pnUxK2DcYfx2blcZc7nglP7LvzroRcTyN1m5d3jMYbUP%2BayAyWd3U%2F13rb4HsiosTl3t0MpFFq5LSDxvML0IH%2FMDwJ7AUMaZC20rZXxEJZUQGOZnW74T7n7MA399YzVOXcIIy8Ph10QwmPL3MIPJh84GOqUBYew53aNLR%2BOt1ZioPBWs7nFLLfxB%2BIeDl1VyiXcqXiFH8wtwUPcerbHZ560%2F3XFxNeelKPQwkQkXa9m%2FHPFZiPQIFVe5wunXskRLMUj45zGE%2B16JizkMLfe4AKse40ScH1OSIuI730W0x7htBOELbf6XFbTkwuYkVIrmPvZc4CnuoqkPTNx0bHoOoEaTdCXEYDFG0S5KMyeS5w14by66TjuOdDJ%2B&X-Amz-Signature=bc19ca363d2345679e5e6a490cc9e499a3b37e5ac60396318284b679aa33f706&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWPYHQWE%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtoWlAZyIbXmzj5crxk%2B1pby6uR%2FqJPgHtd%2FCI213T%2FAiAe6du7IIIGftAOuq4aC9m65zkKyJhCkuIDHnxufRFqJCqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJnqaonCn7ThFdhaSKtwDMHyaBaA4yKWS5XKsmV5pTxqhnJdfsCwlwoNesFQQa95iMncxu0qb24oeH6Tb2Z8CzRq0Pu8P3pQvFRLaSa09tWWTTt1%2F8UZgdPjO8xPilIyrIi51lYRv%2F9m68Gxpi4WlgJch69IrXOzYctSyHL1M5A4vS1po1EgWINONQDkap0Tnar%2BKz7qSPh2Xlfs%2BMj4sGLwRnXN9Yh%2FH4z8tNx%2FpQkrucdCApeclRt9noN8fsoe70900vUZKbCQzjSMgJeYskpmX%2FUZzInhYtS2Mr7qgKYyCv7ZM0tcCDzusdBQ1p%2BwcTEecclUPYPPfD%2Bax4A%2FgR8c3etu%2BeuNLt8z0ffYLcN67V8QvEdfKxzcpozx3tCEBHZOdpIJg3Km%2By5nMRdYHIehhVhGndB7MGRSbG6ywS7H%2FotJZ4kzmrMwMyesTq1ZV2zmAyFFv0zk2eU%2BMVG0RQxvJGQBOJUTWVU7iAxedJn%2B94veuxTaoOsfb6EP%2BgjdENyz6rTUiPKMiyylc9h2AQY9hnmdWXPLpjflYxcjE8Led5f9HfQonJonjAQI009uraUQ5CvGSqCK18IfgxgQ7JLyLror5rPNv%2BhmH9i00DSsEJ%2BzPw10Wu5XflCXVVBTZg3QdEjW%2FpHuHtPAw7cmHzgY6pgFZvepv7yX8gHMRbjT0Wezg9set55TDlf8rsdPwQZMQWxN3oLlPhgIFsYHgSnN1xEIKSWdI%2B5OsC3hmSbbmoD5xtBFjQzc7%2BpVR0zOyV1SUi6URz%2BKtrRr0XouTJwb30sJcdNZAc4onjp0yh3h2Nx%2B%2F6deBVCBM7esD4C4RJIpEZJh7UgJN%2Ff1q9%2BtxfC4x7CIB3cwRoLSTenHdOHJeFpk9Nuof3to1&X-Amz-Signature=0545f6cfa0ac169c4c1deafb9200a70f7f1f69f0c47ab59b810cf74c4fa5c393&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWPYHQWE%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtoWlAZyIbXmzj5crxk%2B1pby6uR%2FqJPgHtd%2FCI213T%2FAiAe6du7IIIGftAOuq4aC9m65zkKyJhCkuIDHnxufRFqJCqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJnqaonCn7ThFdhaSKtwDMHyaBaA4yKWS5XKsmV5pTxqhnJdfsCwlwoNesFQQa95iMncxu0qb24oeH6Tb2Z8CzRq0Pu8P3pQvFRLaSa09tWWTTt1%2F8UZgdPjO8xPilIyrIi51lYRv%2F9m68Gxpi4WlgJch69IrXOzYctSyHL1M5A4vS1po1EgWINONQDkap0Tnar%2BKz7qSPh2Xlfs%2BMj4sGLwRnXN9Yh%2FH4z8tNx%2FpQkrucdCApeclRt9noN8fsoe70900vUZKbCQzjSMgJeYskpmX%2FUZzInhYtS2Mr7qgKYyCv7ZM0tcCDzusdBQ1p%2BwcTEecclUPYPPfD%2Bax4A%2FgR8c3etu%2BeuNLt8z0ffYLcN67V8QvEdfKxzcpozx3tCEBHZOdpIJg3Km%2By5nMRdYHIehhVhGndB7MGRSbG6ywS7H%2FotJZ4kzmrMwMyesTq1ZV2zmAyFFv0zk2eU%2BMVG0RQxvJGQBOJUTWVU7iAxedJn%2B94veuxTaoOsfb6EP%2BgjdENyz6rTUiPKMiyylc9h2AQY9hnmdWXPLpjflYxcjE8Led5f9HfQonJonjAQI009uraUQ5CvGSqCK18IfgxgQ7JLyLror5rPNv%2BhmH9i00DSsEJ%2BzPw10Wu5XflCXVVBTZg3QdEjW%2FpHuHtPAw7cmHzgY6pgFZvepv7yX8gHMRbjT0Wezg9set55TDlf8rsdPwQZMQWxN3oLlPhgIFsYHgSnN1xEIKSWdI%2B5OsC3hmSbbmoD5xtBFjQzc7%2BpVR0zOyV1SUi6URz%2BKtrRr0XouTJwb30sJcdNZAc4onjp0yh3h2Nx%2B%2F6deBVCBM7esD4C4RJIpEZJh7UgJN%2Ff1q9%2BtxfC4x7CIB3cwRoLSTenHdOHJeFpk9Nuof3to1&X-Amz-Signature=ec38385b5a067a87e84cf9cf22148489020f0701587633bb3fb891756db8b02f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWPYHQWE%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtoWlAZyIbXmzj5crxk%2B1pby6uR%2FqJPgHtd%2FCI213T%2FAiAe6du7IIIGftAOuq4aC9m65zkKyJhCkuIDHnxufRFqJCqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJnqaonCn7ThFdhaSKtwDMHyaBaA4yKWS5XKsmV5pTxqhnJdfsCwlwoNesFQQa95iMncxu0qb24oeH6Tb2Z8CzRq0Pu8P3pQvFRLaSa09tWWTTt1%2F8UZgdPjO8xPilIyrIi51lYRv%2F9m68Gxpi4WlgJch69IrXOzYctSyHL1M5A4vS1po1EgWINONQDkap0Tnar%2BKz7qSPh2Xlfs%2BMj4sGLwRnXN9Yh%2FH4z8tNx%2FpQkrucdCApeclRt9noN8fsoe70900vUZKbCQzjSMgJeYskpmX%2FUZzInhYtS2Mr7qgKYyCv7ZM0tcCDzusdBQ1p%2BwcTEecclUPYPPfD%2Bax4A%2FgR8c3etu%2BeuNLt8z0ffYLcN67V8QvEdfKxzcpozx3tCEBHZOdpIJg3Km%2By5nMRdYHIehhVhGndB7MGRSbG6ywS7H%2FotJZ4kzmrMwMyesTq1ZV2zmAyFFv0zk2eU%2BMVG0RQxvJGQBOJUTWVU7iAxedJn%2B94veuxTaoOsfb6EP%2BgjdENyz6rTUiPKMiyylc9h2AQY9hnmdWXPLpjflYxcjE8Led5f9HfQonJonjAQI009uraUQ5CvGSqCK18IfgxgQ7JLyLror5rPNv%2BhmH9i00DSsEJ%2BzPw10Wu5XflCXVVBTZg3QdEjW%2FpHuHtPAw7cmHzgY6pgFZvepv7yX8gHMRbjT0Wezg9set55TDlf8rsdPwQZMQWxN3oLlPhgIFsYHgSnN1xEIKSWdI%2B5OsC3hmSbbmoD5xtBFjQzc7%2BpVR0zOyV1SUi6URz%2BKtrRr0XouTJwb30sJcdNZAc4onjp0yh3h2Nx%2B%2F6deBVCBM7esD4C4RJIpEZJh7UgJN%2Ff1q9%2BtxfC4x7CIB3cwRoLSTenHdOHJeFpk9Nuof3to1&X-Amz-Signature=3c47af75fac06d82fba77ff9066e529565243999b02ae8bfda233732e976751c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWPYHQWE%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtoWlAZyIbXmzj5crxk%2B1pby6uR%2FqJPgHtd%2FCI213T%2FAiAe6du7IIIGftAOuq4aC9m65zkKyJhCkuIDHnxufRFqJCqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJnqaonCn7ThFdhaSKtwDMHyaBaA4yKWS5XKsmV5pTxqhnJdfsCwlwoNesFQQa95iMncxu0qb24oeH6Tb2Z8CzRq0Pu8P3pQvFRLaSa09tWWTTt1%2F8UZgdPjO8xPilIyrIi51lYRv%2F9m68Gxpi4WlgJch69IrXOzYctSyHL1M5A4vS1po1EgWINONQDkap0Tnar%2BKz7qSPh2Xlfs%2BMj4sGLwRnXN9Yh%2FH4z8tNx%2FpQkrucdCApeclRt9noN8fsoe70900vUZKbCQzjSMgJeYskpmX%2FUZzInhYtS2Mr7qgKYyCv7ZM0tcCDzusdBQ1p%2BwcTEecclUPYPPfD%2Bax4A%2FgR8c3etu%2BeuNLt8z0ffYLcN67V8QvEdfKxzcpozx3tCEBHZOdpIJg3Km%2By5nMRdYHIehhVhGndB7MGRSbG6ywS7H%2FotJZ4kzmrMwMyesTq1ZV2zmAyFFv0zk2eU%2BMVG0RQxvJGQBOJUTWVU7iAxedJn%2B94veuxTaoOsfb6EP%2BgjdENyz6rTUiPKMiyylc9h2AQY9hnmdWXPLpjflYxcjE8Led5f9HfQonJonjAQI009uraUQ5CvGSqCK18IfgxgQ7JLyLror5rPNv%2BhmH9i00DSsEJ%2BzPw10Wu5XflCXVVBTZg3QdEjW%2FpHuHtPAw7cmHzgY6pgFZvepv7yX8gHMRbjT0Wezg9set55TDlf8rsdPwQZMQWxN3oLlPhgIFsYHgSnN1xEIKSWdI%2B5OsC3hmSbbmoD5xtBFjQzc7%2BpVR0zOyV1SUi6URz%2BKtrRr0XouTJwb30sJcdNZAc4onjp0yh3h2Nx%2B%2F6deBVCBM7esD4C4RJIpEZJh7UgJN%2Ff1q9%2BtxfC4x7CIB3cwRoLSTenHdOHJeFpk9Nuof3to1&X-Amz-Signature=5ebd8770c75f51e1d2589949b7ac525d9b162b153d9dde7a8991e880491a03d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWPYHQWE%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtoWlAZyIbXmzj5crxk%2B1pby6uR%2FqJPgHtd%2FCI213T%2FAiAe6du7IIIGftAOuq4aC9m65zkKyJhCkuIDHnxufRFqJCqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJnqaonCn7ThFdhaSKtwDMHyaBaA4yKWS5XKsmV5pTxqhnJdfsCwlwoNesFQQa95iMncxu0qb24oeH6Tb2Z8CzRq0Pu8P3pQvFRLaSa09tWWTTt1%2F8UZgdPjO8xPilIyrIi51lYRv%2F9m68Gxpi4WlgJch69IrXOzYctSyHL1M5A4vS1po1EgWINONQDkap0Tnar%2BKz7qSPh2Xlfs%2BMj4sGLwRnXN9Yh%2FH4z8tNx%2FpQkrucdCApeclRt9noN8fsoe70900vUZKbCQzjSMgJeYskpmX%2FUZzInhYtS2Mr7qgKYyCv7ZM0tcCDzusdBQ1p%2BwcTEecclUPYPPfD%2Bax4A%2FgR8c3etu%2BeuNLt8z0ffYLcN67V8QvEdfKxzcpozx3tCEBHZOdpIJg3Km%2By5nMRdYHIehhVhGndB7MGRSbG6ywS7H%2FotJZ4kzmrMwMyesTq1ZV2zmAyFFv0zk2eU%2BMVG0RQxvJGQBOJUTWVU7iAxedJn%2B94veuxTaoOsfb6EP%2BgjdENyz6rTUiPKMiyylc9h2AQY9hnmdWXPLpjflYxcjE8Led5f9HfQonJonjAQI009uraUQ5CvGSqCK18IfgxgQ7JLyLror5rPNv%2BhmH9i00DSsEJ%2BzPw10Wu5XflCXVVBTZg3QdEjW%2FpHuHtPAw7cmHzgY6pgFZvepv7yX8gHMRbjT0Wezg9set55TDlf8rsdPwQZMQWxN3oLlPhgIFsYHgSnN1xEIKSWdI%2B5OsC3hmSbbmoD5xtBFjQzc7%2BpVR0zOyV1SUi6URz%2BKtrRr0XouTJwb30sJcdNZAc4onjp0yh3h2Nx%2B%2F6deBVCBM7esD4C4RJIpEZJh7UgJN%2Ff1q9%2BtxfC4x7CIB3cwRoLSTenHdOHJeFpk9Nuof3to1&X-Amz-Signature=203894095ca44e474b3cfa9db452ea5a0e9c446f742cfae42012ab8f60ef8dee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWPYHQWE%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtoWlAZyIbXmzj5crxk%2B1pby6uR%2FqJPgHtd%2FCI213T%2FAiAe6du7IIIGftAOuq4aC9m65zkKyJhCkuIDHnxufRFqJCqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJnqaonCn7ThFdhaSKtwDMHyaBaA4yKWS5XKsmV5pTxqhnJdfsCwlwoNesFQQa95iMncxu0qb24oeH6Tb2Z8CzRq0Pu8P3pQvFRLaSa09tWWTTt1%2F8UZgdPjO8xPilIyrIi51lYRv%2F9m68Gxpi4WlgJch69IrXOzYctSyHL1M5A4vS1po1EgWINONQDkap0Tnar%2BKz7qSPh2Xlfs%2BMj4sGLwRnXN9Yh%2FH4z8tNx%2FpQkrucdCApeclRt9noN8fsoe70900vUZKbCQzjSMgJeYskpmX%2FUZzInhYtS2Mr7qgKYyCv7ZM0tcCDzusdBQ1p%2BwcTEecclUPYPPfD%2Bax4A%2FgR8c3etu%2BeuNLt8z0ffYLcN67V8QvEdfKxzcpozx3tCEBHZOdpIJg3Km%2By5nMRdYHIehhVhGndB7MGRSbG6ywS7H%2FotJZ4kzmrMwMyesTq1ZV2zmAyFFv0zk2eU%2BMVG0RQxvJGQBOJUTWVU7iAxedJn%2B94veuxTaoOsfb6EP%2BgjdENyz6rTUiPKMiyylc9h2AQY9hnmdWXPLpjflYxcjE8Led5f9HfQonJonjAQI009uraUQ5CvGSqCK18IfgxgQ7JLyLror5rPNv%2BhmH9i00DSsEJ%2BzPw10Wu5XflCXVVBTZg3QdEjW%2FpHuHtPAw7cmHzgY6pgFZvepv7yX8gHMRbjT0Wezg9set55TDlf8rsdPwQZMQWxN3oLlPhgIFsYHgSnN1xEIKSWdI%2B5OsC3hmSbbmoD5xtBFjQzc7%2BpVR0zOyV1SUi6URz%2BKtrRr0XouTJwb30sJcdNZAc4onjp0yh3h2Nx%2B%2F6deBVCBM7esD4C4RJIpEZJh7UgJN%2Ff1q9%2BtxfC4x7CIB3cwRoLSTenHdOHJeFpk9Nuof3to1&X-Amz-Signature=05c4251af4db9faa1a70a5dd367df7000255fc0258de19fbf8ae454e074c771c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWPYHQWE%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtoWlAZyIbXmzj5crxk%2B1pby6uR%2FqJPgHtd%2FCI213T%2FAiAe6du7IIIGftAOuq4aC9m65zkKyJhCkuIDHnxufRFqJCqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJnqaonCn7ThFdhaSKtwDMHyaBaA4yKWS5XKsmV5pTxqhnJdfsCwlwoNesFQQa95iMncxu0qb24oeH6Tb2Z8CzRq0Pu8P3pQvFRLaSa09tWWTTt1%2F8UZgdPjO8xPilIyrIi51lYRv%2F9m68Gxpi4WlgJch69IrXOzYctSyHL1M5A4vS1po1EgWINONQDkap0Tnar%2BKz7qSPh2Xlfs%2BMj4sGLwRnXN9Yh%2FH4z8tNx%2FpQkrucdCApeclRt9noN8fsoe70900vUZKbCQzjSMgJeYskpmX%2FUZzInhYtS2Mr7qgKYyCv7ZM0tcCDzusdBQ1p%2BwcTEecclUPYPPfD%2Bax4A%2FgR8c3etu%2BeuNLt8z0ffYLcN67V8QvEdfKxzcpozx3tCEBHZOdpIJg3Km%2By5nMRdYHIehhVhGndB7MGRSbG6ywS7H%2FotJZ4kzmrMwMyesTq1ZV2zmAyFFv0zk2eU%2BMVG0RQxvJGQBOJUTWVU7iAxedJn%2B94veuxTaoOsfb6EP%2BgjdENyz6rTUiPKMiyylc9h2AQY9hnmdWXPLpjflYxcjE8Led5f9HfQonJonjAQI009uraUQ5CvGSqCK18IfgxgQ7JLyLror5rPNv%2BhmH9i00DSsEJ%2BzPw10Wu5XflCXVVBTZg3QdEjW%2FpHuHtPAw7cmHzgY6pgFZvepv7yX8gHMRbjT0Wezg9set55TDlf8rsdPwQZMQWxN3oLlPhgIFsYHgSnN1xEIKSWdI%2B5OsC3hmSbbmoD5xtBFjQzc7%2BpVR0zOyV1SUi6URz%2BKtrRr0XouTJwb30sJcdNZAc4onjp0yh3h2Nx%2B%2F6deBVCBM7esD4C4RJIpEZJh7UgJN%2Ff1q9%2BtxfC4x7CIB3cwRoLSTenHdOHJeFpk9Nuof3to1&X-Amz-Signature=72d3a5ea4629e7904729f54a73252549c10d8e17e47250b9776f15b7f232755c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWPYHQWE%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtoWlAZyIbXmzj5crxk%2B1pby6uR%2FqJPgHtd%2FCI213T%2FAiAe6du7IIIGftAOuq4aC9m65zkKyJhCkuIDHnxufRFqJCqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJnqaonCn7ThFdhaSKtwDMHyaBaA4yKWS5XKsmV5pTxqhnJdfsCwlwoNesFQQa95iMncxu0qb24oeH6Tb2Z8CzRq0Pu8P3pQvFRLaSa09tWWTTt1%2F8UZgdPjO8xPilIyrIi51lYRv%2F9m68Gxpi4WlgJch69IrXOzYctSyHL1M5A4vS1po1EgWINONQDkap0Tnar%2BKz7qSPh2Xlfs%2BMj4sGLwRnXN9Yh%2FH4z8tNx%2FpQkrucdCApeclRt9noN8fsoe70900vUZKbCQzjSMgJeYskpmX%2FUZzInhYtS2Mr7qgKYyCv7ZM0tcCDzusdBQ1p%2BwcTEecclUPYPPfD%2Bax4A%2FgR8c3etu%2BeuNLt8z0ffYLcN67V8QvEdfKxzcpozx3tCEBHZOdpIJg3Km%2By5nMRdYHIehhVhGndB7MGRSbG6ywS7H%2FotJZ4kzmrMwMyesTq1ZV2zmAyFFv0zk2eU%2BMVG0RQxvJGQBOJUTWVU7iAxedJn%2B94veuxTaoOsfb6EP%2BgjdENyz6rTUiPKMiyylc9h2AQY9hnmdWXPLpjflYxcjE8Led5f9HfQonJonjAQI009uraUQ5CvGSqCK18IfgxgQ7JLyLror5rPNv%2BhmH9i00DSsEJ%2BzPw10Wu5XflCXVVBTZg3QdEjW%2FpHuHtPAw7cmHzgY6pgFZvepv7yX8gHMRbjT0Wezg9set55TDlf8rsdPwQZMQWxN3oLlPhgIFsYHgSnN1xEIKSWdI%2B5OsC3hmSbbmoD5xtBFjQzc7%2BpVR0zOyV1SUi6URz%2BKtrRr0XouTJwb30sJcdNZAc4onjp0yh3h2Nx%2B%2F6deBVCBM7esD4C4RJIpEZJh7UgJN%2Ff1q9%2BtxfC4x7CIB3cwRoLSTenHdOHJeFpk9Nuof3to1&X-Amz-Signature=c26eae0b03c626b75ff1b877933e83da9f04856dcb90307d94f7bb5044b4eecb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWPYHQWE%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtoWlAZyIbXmzj5crxk%2B1pby6uR%2FqJPgHtd%2FCI213T%2FAiAe6du7IIIGftAOuq4aC9m65zkKyJhCkuIDHnxufRFqJCqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJnqaonCn7ThFdhaSKtwDMHyaBaA4yKWS5XKsmV5pTxqhnJdfsCwlwoNesFQQa95iMncxu0qb24oeH6Tb2Z8CzRq0Pu8P3pQvFRLaSa09tWWTTt1%2F8UZgdPjO8xPilIyrIi51lYRv%2F9m68Gxpi4WlgJch69IrXOzYctSyHL1M5A4vS1po1EgWINONQDkap0Tnar%2BKz7qSPh2Xlfs%2BMj4sGLwRnXN9Yh%2FH4z8tNx%2FpQkrucdCApeclRt9noN8fsoe70900vUZKbCQzjSMgJeYskpmX%2FUZzInhYtS2Mr7qgKYyCv7ZM0tcCDzusdBQ1p%2BwcTEecclUPYPPfD%2Bax4A%2FgR8c3etu%2BeuNLt8z0ffYLcN67V8QvEdfKxzcpozx3tCEBHZOdpIJg3Km%2By5nMRdYHIehhVhGndB7MGRSbG6ywS7H%2FotJZ4kzmrMwMyesTq1ZV2zmAyFFv0zk2eU%2BMVG0RQxvJGQBOJUTWVU7iAxedJn%2B94veuxTaoOsfb6EP%2BgjdENyz6rTUiPKMiyylc9h2AQY9hnmdWXPLpjflYxcjE8Led5f9HfQonJonjAQI009uraUQ5CvGSqCK18IfgxgQ7JLyLror5rPNv%2BhmH9i00DSsEJ%2BzPw10Wu5XflCXVVBTZg3QdEjW%2FpHuHtPAw7cmHzgY6pgFZvepv7yX8gHMRbjT0Wezg9set55TDlf8rsdPwQZMQWxN3oLlPhgIFsYHgSnN1xEIKSWdI%2B5OsC3hmSbbmoD5xtBFjQzc7%2BpVR0zOyV1SUi6URz%2BKtrRr0XouTJwb30sJcdNZAc4onjp0yh3h2Nx%2B%2F6deBVCBM7esD4C4RJIpEZJh7UgJN%2Ff1q9%2BtxfC4x7CIB3cwRoLSTenHdOHJeFpk9Nuof3to1&X-Amz-Signature=0b010608d0f6b5bab745460ffb42f55a6c8a97bfe0d1b593a7022565a6ed99ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWPYHQWE%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtoWlAZyIbXmzj5crxk%2B1pby6uR%2FqJPgHtd%2FCI213T%2FAiAe6du7IIIGftAOuq4aC9m65zkKyJhCkuIDHnxufRFqJCqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJnqaonCn7ThFdhaSKtwDMHyaBaA4yKWS5XKsmV5pTxqhnJdfsCwlwoNesFQQa95iMncxu0qb24oeH6Tb2Z8CzRq0Pu8P3pQvFRLaSa09tWWTTt1%2F8UZgdPjO8xPilIyrIi51lYRv%2F9m68Gxpi4WlgJch69IrXOzYctSyHL1M5A4vS1po1EgWINONQDkap0Tnar%2BKz7qSPh2Xlfs%2BMj4sGLwRnXN9Yh%2FH4z8tNx%2FpQkrucdCApeclRt9noN8fsoe70900vUZKbCQzjSMgJeYskpmX%2FUZzInhYtS2Mr7qgKYyCv7ZM0tcCDzusdBQ1p%2BwcTEecclUPYPPfD%2Bax4A%2FgR8c3etu%2BeuNLt8z0ffYLcN67V8QvEdfKxzcpozx3tCEBHZOdpIJg3Km%2By5nMRdYHIehhVhGndB7MGRSbG6ywS7H%2FotJZ4kzmrMwMyesTq1ZV2zmAyFFv0zk2eU%2BMVG0RQxvJGQBOJUTWVU7iAxedJn%2B94veuxTaoOsfb6EP%2BgjdENyz6rTUiPKMiyylc9h2AQY9hnmdWXPLpjflYxcjE8Led5f9HfQonJonjAQI009uraUQ5CvGSqCK18IfgxgQ7JLyLror5rPNv%2BhmH9i00DSsEJ%2BzPw10Wu5XflCXVVBTZg3QdEjW%2FpHuHtPAw7cmHzgY6pgFZvepv7yX8gHMRbjT0Wezg9set55TDlf8rsdPwQZMQWxN3oLlPhgIFsYHgSnN1xEIKSWdI%2B5OsC3hmSbbmoD5xtBFjQzc7%2BpVR0zOyV1SUi6URz%2BKtrRr0XouTJwb30sJcdNZAc4onjp0yh3h2Nx%2B%2F6deBVCBM7esD4C4RJIpEZJh7UgJN%2Ff1q9%2BtxfC4x7CIB3cwRoLSTenHdOHJeFpk9Nuof3to1&X-Amz-Signature=9a40f2779b67bc88b9c116750d8bfb25b518e4a9a7916f8c93e0628550d20b91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
