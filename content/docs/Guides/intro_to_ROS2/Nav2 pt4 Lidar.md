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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652JM5WFI%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEzhlhQYrpi%2Bc33%2FY6l%2BN36Nbprn8p5GZppvO%2Bi9c1IhAiEAopWvbtaiTx1HIfnI7nP1NWnNobUWX7I2PJ7KAHZXBFAqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFyE1grh2mzljAfi9yrcA9dtVDc9gS%2FrctBY2TkfiL8DR7edvh2ayo7khcnriFZDZq5sodkSouO8H5DsmFDmqptsTR4VsHoui1jIFguVCFh%2F3OvshB0l2nvsfkkpdc34zWhmkeBXAu6JLXNy09t94%2BaNh%2BUIpGvcUX0RS7muQOb%2F%2ForYZMx%2BkY0NCxyl%2B86aGL2PdrNWbDirWmMtMwU4EOlxCR8%2FEKmm%2BMM5HH1YaoY0lOTf3X8%2B2toJCkDeOfgPedIDs2S%2B7EOUJ1bEgp8TpxFgpaeuWP0HgXICMS9yncdGnZK%2B%2B4JJseEe4PwAfHwtXfZ45kUYlsoLOsNhMmHTJnjd9AmskeqdZ7Jzai2mPUkpphnXG%2FtG4%2BRA6c4Hh%2Bh09Ir6QJFHAziJHZtA%2FZLyZbi06NgiBos7pTx0JIwT913DwmV1vZT%2BeVJpsMyaOYron1QPGM8eG2NxyX3xNi5xU0bOFnPPqVFUigOYlX8279zM5TrgXpt9XC8j%2Bc8JYuGA2Zj4%2B8iiVhdYCOg5F%2Frs49S75qmoCi%2F%2FUNPO6Hs5FmCagWBHpu6Tw1JP8df%2Fb4Q0UkA06GKA0GaHTmnIfKsjYadMxWxC%2Fmi650UqrJl%2FIYAyXy1%2Fe0nhtGmf6lXL3qx4WqiuEaWPbCAxWOc2MNG5tdMGOqUBeryOcy5L6qpOpJiq7jyaPF9P6dTl8%2BBJfrk2Eq0NPY9bEZbBtk49XPJyO6bH6rMGSZn%2BVTkANdbHUOZgvUkEO1vsME0lmkdJP%2B%2FHOV1OVcTEDoIhCPi%2FXWWNOrLk%2B0pW2CY2VQHV8mTwcQVbN0Nt3PggnNSzdm1ewVRNjBHzSHHYSKMbj8OEHwlChaJM9oSmJLozNN%2BE9FzHxDYN7z8uHTtorMvO&X-Amz-Signature=89f02c811ee270f129af086febd3f2526b7f8eccca42a61232b91c06818ce878&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKTCT4MY%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8x3p0PAlGU9usI4izc%2BakOVYeALNNfATCjLAvO65MEAiEA2jB%2Fbk0iZL6%2FclxM%2BZ6tctY7a%2F6Pyual7AoWxPxkw0YqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BZaDssD4zFGD%2BtrSrcAyrTm9SiPLgiqoQaOfto1v74Z52lfZEncq8JzIxcPxgtn8C3dj383m0czwwKBHVWtbohGn45wy%2BSNQgrxhr%2Fqqjuv0QRXqlbrzP0iD377HWTBQLRZTBHB16uE9Bk8p81SrrptV0IjDFy1sG1VgiFgJ3v%2FGg5ITOAsNgoR0ox9Og%2F9U34Uy6tcVIORwUzN5pnhk84ib3dBQPcDL3G%2BxTjWA21%2FwdkOnhFVBnuXeO33P2T%2BMryn5O%2B0yq8Ei%2Bmxo1U7LpXURV6GWHRP23%2FMAg68Hn5lCBNi%2F58Dyw%2FiOJv3lsSIwIURbyoaHQaLK3w6Ar%2B9BAYa3VYrEpVLpO3vzH50LkwQSI6GVNaHN3r1wMvYSHa1rZ4n7ZtaoxXbcBOrBR20Ea8UpHmcrq4PIZ9pk7EEciMpFU%2BTjnu%2FFqKEpmkIhlVpm%2BMSHlkWxZS750Y3fU7T3hl1o6TRzU%2BcQmCDhLobEPhYdYyM%2BdR2LBGmiwtuGoPlaJSfK7lvRIJqwfyM1SyXkYFOZxuE0OWW7EEcCi4KjK918Td5asZSkghp7ge4w36lsP2b3t8pc38F6BAMAMlP2IIP3tabkHS6YHorahheX8BSiOtRrW3xeDhu28TLIqshM3r5dUptMwlOn%2BBMPi4tdMGOqUBOzy7hvkbi52ZD1z7IzWOt10N%2BTVunjy7ZTYBrD4QbNwIyfogqdxXXK7Kd971ESP3ORygKo4uE89PJWF1CxegYfLgvXK43AZ5pgyG0ug2kIqggLbujDDSGCS8QjDk%2BHv7v7gF%2BVkFSZvardSBBm%2FaeDUOC9pfPlQzs0qTxej0k3X1vW5Wkj3fKEKA7q%2BQvG3WoTd6Y4i%2Bm2HXwFA4uQPWnLV7AUo4&X-Amz-Signature=625c4ba53e7004c5f123a99431ff0e28bd5b6a965d9dfd0d2dd2f13ca5e0f379&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKTCT4MY%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8x3p0PAlGU9usI4izc%2BakOVYeALNNfATCjLAvO65MEAiEA2jB%2Fbk0iZL6%2FclxM%2BZ6tctY7a%2F6Pyual7AoWxPxkw0YqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BZaDssD4zFGD%2BtrSrcAyrTm9SiPLgiqoQaOfto1v74Z52lfZEncq8JzIxcPxgtn8C3dj383m0czwwKBHVWtbohGn45wy%2BSNQgrxhr%2Fqqjuv0QRXqlbrzP0iD377HWTBQLRZTBHB16uE9Bk8p81SrrptV0IjDFy1sG1VgiFgJ3v%2FGg5ITOAsNgoR0ox9Og%2F9U34Uy6tcVIORwUzN5pnhk84ib3dBQPcDL3G%2BxTjWA21%2FwdkOnhFVBnuXeO33P2T%2BMryn5O%2B0yq8Ei%2Bmxo1U7LpXURV6GWHRP23%2FMAg68Hn5lCBNi%2F58Dyw%2FiOJv3lsSIwIURbyoaHQaLK3w6Ar%2B9BAYa3VYrEpVLpO3vzH50LkwQSI6GVNaHN3r1wMvYSHa1rZ4n7ZtaoxXbcBOrBR20Ea8UpHmcrq4PIZ9pk7EEciMpFU%2BTjnu%2FFqKEpmkIhlVpm%2BMSHlkWxZS750Y3fU7T3hl1o6TRzU%2BcQmCDhLobEPhYdYyM%2BdR2LBGmiwtuGoPlaJSfK7lvRIJqwfyM1SyXkYFOZxuE0OWW7EEcCi4KjK918Td5asZSkghp7ge4w36lsP2b3t8pc38F6BAMAMlP2IIP3tabkHS6YHorahheX8BSiOtRrW3xeDhu28TLIqshM3r5dUptMwlOn%2BBMPi4tdMGOqUBOzy7hvkbi52ZD1z7IzWOt10N%2BTVunjy7ZTYBrD4QbNwIyfogqdxXXK7Kd971ESP3ORygKo4uE89PJWF1CxegYfLgvXK43AZ5pgyG0ug2kIqggLbujDDSGCS8QjDk%2BHv7v7gF%2BVkFSZvardSBBm%2FaeDUOC9pfPlQzs0qTxej0k3X1vW5Wkj3fKEKA7q%2BQvG3WoTd6Y4i%2Bm2HXwFA4uQPWnLV7AUo4&X-Amz-Signature=847a26607f27c60e1694865061dd27745966540a7a4792574ce5ec055ac8d076&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKTCT4MY%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8x3p0PAlGU9usI4izc%2BakOVYeALNNfATCjLAvO65MEAiEA2jB%2Fbk0iZL6%2FclxM%2BZ6tctY7a%2F6Pyual7AoWxPxkw0YqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BZaDssD4zFGD%2BtrSrcAyrTm9SiPLgiqoQaOfto1v74Z52lfZEncq8JzIxcPxgtn8C3dj383m0czwwKBHVWtbohGn45wy%2BSNQgrxhr%2Fqqjuv0QRXqlbrzP0iD377HWTBQLRZTBHB16uE9Bk8p81SrrptV0IjDFy1sG1VgiFgJ3v%2FGg5ITOAsNgoR0ox9Og%2F9U34Uy6tcVIORwUzN5pnhk84ib3dBQPcDL3G%2BxTjWA21%2FwdkOnhFVBnuXeO33P2T%2BMryn5O%2B0yq8Ei%2Bmxo1U7LpXURV6GWHRP23%2FMAg68Hn5lCBNi%2F58Dyw%2FiOJv3lsSIwIURbyoaHQaLK3w6Ar%2B9BAYa3VYrEpVLpO3vzH50LkwQSI6GVNaHN3r1wMvYSHa1rZ4n7ZtaoxXbcBOrBR20Ea8UpHmcrq4PIZ9pk7EEciMpFU%2BTjnu%2FFqKEpmkIhlVpm%2BMSHlkWxZS750Y3fU7T3hl1o6TRzU%2BcQmCDhLobEPhYdYyM%2BdR2LBGmiwtuGoPlaJSfK7lvRIJqwfyM1SyXkYFOZxuE0OWW7EEcCi4KjK918Td5asZSkghp7ge4w36lsP2b3t8pc38F6BAMAMlP2IIP3tabkHS6YHorahheX8BSiOtRrW3xeDhu28TLIqshM3r5dUptMwlOn%2BBMPi4tdMGOqUBOzy7hvkbi52ZD1z7IzWOt10N%2BTVunjy7ZTYBrD4QbNwIyfogqdxXXK7Kd971ESP3ORygKo4uE89PJWF1CxegYfLgvXK43AZ5pgyG0ug2kIqggLbujDDSGCS8QjDk%2BHv7v7gF%2BVkFSZvardSBBm%2FaeDUOC9pfPlQzs0qTxej0k3X1vW5Wkj3fKEKA7q%2BQvG3WoTd6Y4i%2Bm2HXwFA4uQPWnLV7AUo4&X-Amz-Signature=ed6472365bfbe3486b3fb3174d2e0d2d3ceb1a7dec0103f64f2c71b9c700cd09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKTCT4MY%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8x3p0PAlGU9usI4izc%2BakOVYeALNNfATCjLAvO65MEAiEA2jB%2Fbk0iZL6%2FclxM%2BZ6tctY7a%2F6Pyual7AoWxPxkw0YqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BZaDssD4zFGD%2BtrSrcAyrTm9SiPLgiqoQaOfto1v74Z52lfZEncq8JzIxcPxgtn8C3dj383m0czwwKBHVWtbohGn45wy%2BSNQgrxhr%2Fqqjuv0QRXqlbrzP0iD377HWTBQLRZTBHB16uE9Bk8p81SrrptV0IjDFy1sG1VgiFgJ3v%2FGg5ITOAsNgoR0ox9Og%2F9U34Uy6tcVIORwUzN5pnhk84ib3dBQPcDL3G%2BxTjWA21%2FwdkOnhFVBnuXeO33P2T%2BMryn5O%2B0yq8Ei%2Bmxo1U7LpXURV6GWHRP23%2FMAg68Hn5lCBNi%2F58Dyw%2FiOJv3lsSIwIURbyoaHQaLK3w6Ar%2B9BAYa3VYrEpVLpO3vzH50LkwQSI6GVNaHN3r1wMvYSHa1rZ4n7ZtaoxXbcBOrBR20Ea8UpHmcrq4PIZ9pk7EEciMpFU%2BTjnu%2FFqKEpmkIhlVpm%2BMSHlkWxZS750Y3fU7T3hl1o6TRzU%2BcQmCDhLobEPhYdYyM%2BdR2LBGmiwtuGoPlaJSfK7lvRIJqwfyM1SyXkYFOZxuE0OWW7EEcCi4KjK918Td5asZSkghp7ge4w36lsP2b3t8pc38F6BAMAMlP2IIP3tabkHS6YHorahheX8BSiOtRrW3xeDhu28TLIqshM3r5dUptMwlOn%2BBMPi4tdMGOqUBOzy7hvkbi52ZD1z7IzWOt10N%2BTVunjy7ZTYBrD4QbNwIyfogqdxXXK7Kd971ESP3ORygKo4uE89PJWF1CxegYfLgvXK43AZ5pgyG0ug2kIqggLbujDDSGCS8QjDk%2BHv7v7gF%2BVkFSZvardSBBm%2FaeDUOC9pfPlQzs0qTxej0k3X1vW5Wkj3fKEKA7q%2BQvG3WoTd6Y4i%2Bm2HXwFA4uQPWnLV7AUo4&X-Amz-Signature=88f86b797bf1dcd766dec47afbb7c62e2328e68f70fc7f27372acd14f6c00281&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKTCT4MY%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8x3p0PAlGU9usI4izc%2BakOVYeALNNfATCjLAvO65MEAiEA2jB%2Fbk0iZL6%2FclxM%2BZ6tctY7a%2F6Pyual7AoWxPxkw0YqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BZaDssD4zFGD%2BtrSrcAyrTm9SiPLgiqoQaOfto1v74Z52lfZEncq8JzIxcPxgtn8C3dj383m0czwwKBHVWtbohGn45wy%2BSNQgrxhr%2Fqqjuv0QRXqlbrzP0iD377HWTBQLRZTBHB16uE9Bk8p81SrrptV0IjDFy1sG1VgiFgJ3v%2FGg5ITOAsNgoR0ox9Og%2F9U34Uy6tcVIORwUzN5pnhk84ib3dBQPcDL3G%2BxTjWA21%2FwdkOnhFVBnuXeO33P2T%2BMryn5O%2B0yq8Ei%2Bmxo1U7LpXURV6GWHRP23%2FMAg68Hn5lCBNi%2F58Dyw%2FiOJv3lsSIwIURbyoaHQaLK3w6Ar%2B9BAYa3VYrEpVLpO3vzH50LkwQSI6GVNaHN3r1wMvYSHa1rZ4n7ZtaoxXbcBOrBR20Ea8UpHmcrq4PIZ9pk7EEciMpFU%2BTjnu%2FFqKEpmkIhlVpm%2BMSHlkWxZS750Y3fU7T3hl1o6TRzU%2BcQmCDhLobEPhYdYyM%2BdR2LBGmiwtuGoPlaJSfK7lvRIJqwfyM1SyXkYFOZxuE0OWW7EEcCi4KjK918Td5asZSkghp7ge4w36lsP2b3t8pc38F6BAMAMlP2IIP3tabkHS6YHorahheX8BSiOtRrW3xeDhu28TLIqshM3r5dUptMwlOn%2BBMPi4tdMGOqUBOzy7hvkbi52ZD1z7IzWOt10N%2BTVunjy7ZTYBrD4QbNwIyfogqdxXXK7Kd971ESP3ORygKo4uE89PJWF1CxegYfLgvXK43AZ5pgyG0ug2kIqggLbujDDSGCS8QjDk%2BHv7v7gF%2BVkFSZvardSBBm%2FaeDUOC9pfPlQzs0qTxej0k3X1vW5Wkj3fKEKA7q%2BQvG3WoTd6Y4i%2Bm2HXwFA4uQPWnLV7AUo4&X-Amz-Signature=2f3a90ac728501801aca1e15256677357a1b929a581d2fc45fd2c79799d8f3e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKTCT4MY%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8x3p0PAlGU9usI4izc%2BakOVYeALNNfATCjLAvO65MEAiEA2jB%2Fbk0iZL6%2FclxM%2BZ6tctY7a%2F6Pyual7AoWxPxkw0YqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BZaDssD4zFGD%2BtrSrcAyrTm9SiPLgiqoQaOfto1v74Z52lfZEncq8JzIxcPxgtn8C3dj383m0czwwKBHVWtbohGn45wy%2BSNQgrxhr%2Fqqjuv0QRXqlbrzP0iD377HWTBQLRZTBHB16uE9Bk8p81SrrptV0IjDFy1sG1VgiFgJ3v%2FGg5ITOAsNgoR0ox9Og%2F9U34Uy6tcVIORwUzN5pnhk84ib3dBQPcDL3G%2BxTjWA21%2FwdkOnhFVBnuXeO33P2T%2BMryn5O%2B0yq8Ei%2Bmxo1U7LpXURV6GWHRP23%2FMAg68Hn5lCBNi%2F58Dyw%2FiOJv3lsSIwIURbyoaHQaLK3w6Ar%2B9BAYa3VYrEpVLpO3vzH50LkwQSI6GVNaHN3r1wMvYSHa1rZ4n7ZtaoxXbcBOrBR20Ea8UpHmcrq4PIZ9pk7EEciMpFU%2BTjnu%2FFqKEpmkIhlVpm%2BMSHlkWxZS750Y3fU7T3hl1o6TRzU%2BcQmCDhLobEPhYdYyM%2BdR2LBGmiwtuGoPlaJSfK7lvRIJqwfyM1SyXkYFOZxuE0OWW7EEcCi4KjK918Td5asZSkghp7ge4w36lsP2b3t8pc38F6BAMAMlP2IIP3tabkHS6YHorahheX8BSiOtRrW3xeDhu28TLIqshM3r5dUptMwlOn%2BBMPi4tdMGOqUBOzy7hvkbi52ZD1z7IzWOt10N%2BTVunjy7ZTYBrD4QbNwIyfogqdxXXK7Kd971ESP3ORygKo4uE89PJWF1CxegYfLgvXK43AZ5pgyG0ug2kIqggLbujDDSGCS8QjDk%2BHv7v7gF%2BVkFSZvardSBBm%2FaeDUOC9pfPlQzs0qTxej0k3X1vW5Wkj3fKEKA7q%2BQvG3WoTd6Y4i%2Bm2HXwFA4uQPWnLV7AUo4&X-Amz-Signature=f72aa471e0cbd21f3001b6133570695e1a8a19e4fcdda8183cf4261569710855&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKTCT4MY%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8x3p0PAlGU9usI4izc%2BakOVYeALNNfATCjLAvO65MEAiEA2jB%2Fbk0iZL6%2FclxM%2BZ6tctY7a%2F6Pyual7AoWxPxkw0YqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BZaDssD4zFGD%2BtrSrcAyrTm9SiPLgiqoQaOfto1v74Z52lfZEncq8JzIxcPxgtn8C3dj383m0czwwKBHVWtbohGn45wy%2BSNQgrxhr%2Fqqjuv0QRXqlbrzP0iD377HWTBQLRZTBHB16uE9Bk8p81SrrptV0IjDFy1sG1VgiFgJ3v%2FGg5ITOAsNgoR0ox9Og%2F9U34Uy6tcVIORwUzN5pnhk84ib3dBQPcDL3G%2BxTjWA21%2FwdkOnhFVBnuXeO33P2T%2BMryn5O%2B0yq8Ei%2Bmxo1U7LpXURV6GWHRP23%2FMAg68Hn5lCBNi%2F58Dyw%2FiOJv3lsSIwIURbyoaHQaLK3w6Ar%2B9BAYa3VYrEpVLpO3vzH50LkwQSI6GVNaHN3r1wMvYSHa1rZ4n7ZtaoxXbcBOrBR20Ea8UpHmcrq4PIZ9pk7EEciMpFU%2BTjnu%2FFqKEpmkIhlVpm%2BMSHlkWxZS750Y3fU7T3hl1o6TRzU%2BcQmCDhLobEPhYdYyM%2BdR2LBGmiwtuGoPlaJSfK7lvRIJqwfyM1SyXkYFOZxuE0OWW7EEcCi4KjK918Td5asZSkghp7ge4w36lsP2b3t8pc38F6BAMAMlP2IIP3tabkHS6YHorahheX8BSiOtRrW3xeDhu28TLIqshM3r5dUptMwlOn%2BBMPi4tdMGOqUBOzy7hvkbi52ZD1z7IzWOt10N%2BTVunjy7ZTYBrD4QbNwIyfogqdxXXK7Kd971ESP3ORygKo4uE89PJWF1CxegYfLgvXK43AZ5pgyG0ug2kIqggLbujDDSGCS8QjDk%2BHv7v7gF%2BVkFSZvardSBBm%2FaeDUOC9pfPlQzs0qTxej0k3X1vW5Wkj3fKEKA7q%2BQvG3WoTd6Y4i%2Bm2HXwFA4uQPWnLV7AUo4&X-Amz-Signature=0a65b218a64c7c5b367e95ed70e744d1ad6cf9dd628ad9f5bf8530fd21d4ca98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKTCT4MY%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8x3p0PAlGU9usI4izc%2BakOVYeALNNfATCjLAvO65MEAiEA2jB%2Fbk0iZL6%2FclxM%2BZ6tctY7a%2F6Pyual7AoWxPxkw0YqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BZaDssD4zFGD%2BtrSrcAyrTm9SiPLgiqoQaOfto1v74Z52lfZEncq8JzIxcPxgtn8C3dj383m0czwwKBHVWtbohGn45wy%2BSNQgrxhr%2Fqqjuv0QRXqlbrzP0iD377HWTBQLRZTBHB16uE9Bk8p81SrrptV0IjDFy1sG1VgiFgJ3v%2FGg5ITOAsNgoR0ox9Og%2F9U34Uy6tcVIORwUzN5pnhk84ib3dBQPcDL3G%2BxTjWA21%2FwdkOnhFVBnuXeO33P2T%2BMryn5O%2B0yq8Ei%2Bmxo1U7LpXURV6GWHRP23%2FMAg68Hn5lCBNi%2F58Dyw%2FiOJv3lsSIwIURbyoaHQaLK3w6Ar%2B9BAYa3VYrEpVLpO3vzH50LkwQSI6GVNaHN3r1wMvYSHa1rZ4n7ZtaoxXbcBOrBR20Ea8UpHmcrq4PIZ9pk7EEciMpFU%2BTjnu%2FFqKEpmkIhlVpm%2BMSHlkWxZS750Y3fU7T3hl1o6TRzU%2BcQmCDhLobEPhYdYyM%2BdR2LBGmiwtuGoPlaJSfK7lvRIJqwfyM1SyXkYFOZxuE0OWW7EEcCi4KjK918Td5asZSkghp7ge4w36lsP2b3t8pc38F6BAMAMlP2IIP3tabkHS6YHorahheX8BSiOtRrW3xeDhu28TLIqshM3r5dUptMwlOn%2BBMPi4tdMGOqUBOzy7hvkbi52ZD1z7IzWOt10N%2BTVunjy7ZTYBrD4QbNwIyfogqdxXXK7Kd971ESP3ORygKo4uE89PJWF1CxegYfLgvXK43AZ5pgyG0ug2kIqggLbujDDSGCS8QjDk%2BHv7v7gF%2BVkFSZvardSBBm%2FaeDUOC9pfPlQzs0qTxej0k3X1vW5Wkj3fKEKA7q%2BQvG3WoTd6Y4i%2Bm2HXwFA4uQPWnLV7AUo4&X-Amz-Signature=aabe7ac8cf1bd0e2a6d5a746e682718a71144410da05a72e9e8a4cca3520f494&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKTCT4MY%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8x3p0PAlGU9usI4izc%2BakOVYeALNNfATCjLAvO65MEAiEA2jB%2Fbk0iZL6%2FclxM%2BZ6tctY7a%2F6Pyual7AoWxPxkw0YqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BZaDssD4zFGD%2BtrSrcAyrTm9SiPLgiqoQaOfto1v74Z52lfZEncq8JzIxcPxgtn8C3dj383m0czwwKBHVWtbohGn45wy%2BSNQgrxhr%2Fqqjuv0QRXqlbrzP0iD377HWTBQLRZTBHB16uE9Bk8p81SrrptV0IjDFy1sG1VgiFgJ3v%2FGg5ITOAsNgoR0ox9Og%2F9U34Uy6tcVIORwUzN5pnhk84ib3dBQPcDL3G%2BxTjWA21%2FwdkOnhFVBnuXeO33P2T%2BMryn5O%2B0yq8Ei%2Bmxo1U7LpXURV6GWHRP23%2FMAg68Hn5lCBNi%2F58Dyw%2FiOJv3lsSIwIURbyoaHQaLK3w6Ar%2B9BAYa3VYrEpVLpO3vzH50LkwQSI6GVNaHN3r1wMvYSHa1rZ4n7ZtaoxXbcBOrBR20Ea8UpHmcrq4PIZ9pk7EEciMpFU%2BTjnu%2FFqKEpmkIhlVpm%2BMSHlkWxZS750Y3fU7T3hl1o6TRzU%2BcQmCDhLobEPhYdYyM%2BdR2LBGmiwtuGoPlaJSfK7lvRIJqwfyM1SyXkYFOZxuE0OWW7EEcCi4KjK918Td5asZSkghp7ge4w36lsP2b3t8pc38F6BAMAMlP2IIP3tabkHS6YHorahheX8BSiOtRrW3xeDhu28TLIqshM3r5dUptMwlOn%2BBMPi4tdMGOqUBOzy7hvkbi52ZD1z7IzWOt10N%2BTVunjy7ZTYBrD4QbNwIyfogqdxXXK7Kd971ESP3ORygKo4uE89PJWF1CxegYfLgvXK43AZ5pgyG0ug2kIqggLbujDDSGCS8QjDk%2BHv7v7gF%2BVkFSZvardSBBm%2FaeDUOC9pfPlQzs0qTxej0k3X1vW5Wkj3fKEKA7q%2BQvG3WoTd6Y4i%2Bm2HXwFA4uQPWnLV7AUo4&X-Amz-Signature=3a8524086dbc4c7d5c5f0ca6ad991420a75be47f67c95d4ddaf24a1da946ac16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKTCT4MY%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8x3p0PAlGU9usI4izc%2BakOVYeALNNfATCjLAvO65MEAiEA2jB%2Fbk0iZL6%2FclxM%2BZ6tctY7a%2F6Pyual7AoWxPxkw0YqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BZaDssD4zFGD%2BtrSrcAyrTm9SiPLgiqoQaOfto1v74Z52lfZEncq8JzIxcPxgtn8C3dj383m0czwwKBHVWtbohGn45wy%2BSNQgrxhr%2Fqqjuv0QRXqlbrzP0iD377HWTBQLRZTBHB16uE9Bk8p81SrrptV0IjDFy1sG1VgiFgJ3v%2FGg5ITOAsNgoR0ox9Og%2F9U34Uy6tcVIORwUzN5pnhk84ib3dBQPcDL3G%2BxTjWA21%2FwdkOnhFVBnuXeO33P2T%2BMryn5O%2B0yq8Ei%2Bmxo1U7LpXURV6GWHRP23%2FMAg68Hn5lCBNi%2F58Dyw%2FiOJv3lsSIwIURbyoaHQaLK3w6Ar%2B9BAYa3VYrEpVLpO3vzH50LkwQSI6GVNaHN3r1wMvYSHa1rZ4n7ZtaoxXbcBOrBR20Ea8UpHmcrq4PIZ9pk7EEciMpFU%2BTjnu%2FFqKEpmkIhlVpm%2BMSHlkWxZS750Y3fU7T3hl1o6TRzU%2BcQmCDhLobEPhYdYyM%2BdR2LBGmiwtuGoPlaJSfK7lvRIJqwfyM1SyXkYFOZxuE0OWW7EEcCi4KjK918Td5asZSkghp7ge4w36lsP2b3t8pc38F6BAMAMlP2IIP3tabkHS6YHorahheX8BSiOtRrW3xeDhu28TLIqshM3r5dUptMwlOn%2BBMPi4tdMGOqUBOzy7hvkbi52ZD1z7IzWOt10N%2BTVunjy7ZTYBrD4QbNwIyfogqdxXXK7Kd971ESP3ORygKo4uE89PJWF1CxegYfLgvXK43AZ5pgyG0ug2kIqggLbujDDSGCS8QjDk%2BHv7v7gF%2BVkFSZvardSBBm%2FaeDUOC9pfPlQzs0qTxej0k3X1vW5Wkj3fKEKA7q%2BQvG3WoTd6Y4i%2Bm2HXwFA4uQPWnLV7AUo4&X-Amz-Signature=88f86b797bf1dcd766dec47afbb7c62e2328e68f70fc7f27372acd14f6c00281&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
