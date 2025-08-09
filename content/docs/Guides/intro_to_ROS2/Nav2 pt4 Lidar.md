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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUBYTAXJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4n8IwYvIbEkCa20lIe0KqgloUI%2FeYSev4o4BpDG6OngIhAJEWpcSBCrNWtVoEMkKsewgVoHov6Bxrz3an8K6LgvTcKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDdq5mUOw1wk1ZW7Aq3APytQflvD%2Fc1YQpZZiStIYeTDWwwfyamp1VjjuBS9jbwz%2BjowtgNgitN%2BtnUCiDFtAVlkk2E%2Fg8pgYEyco3EZ%2F%2BYtsocE%2FBVQ7M6q2z4hy%2FbWDlX7JBFpWLOPDOfyrrXcMUAKHB5vsy%2B4Y16R%2Fc8ebhOhiyHkq03DWhJh6Mf0Vb7dKrbJ3GDab6PkPW5Kr69e%2FhO9UieY8zo9RLklXQabRIe2WGhU8rdYoxVxLrH0YHwjOzl1d%2FDwnjS0%2BTnfTgMtAOBznRCBccN1odgdwMXH3Fn3oGT6%2F8pNAexsVwpOjXnc6AqQ4xAR69ZxC1bBIjOfAF833oHYCf6qQeFtq8k0GAHnU5Wgf3zlHkV%2BHPY8tp2tcawUDPlAW8uzvRaoa3gDBS4%2FJ7ZiOIJcqNT3vg0UXyh3rkrMbUOtOULrH4nMtpRZDTskEER3giYySk79KepDF6nE6VLfabs4NdeaA1r2QfaJnSF31AzqP3v%2BTuDH2mNd%2Ffqu23n6zAabUmuP4znQygEPUV1q%2BmUp9xEkCIA%2BekRIsvKMzfjfv2eJna4DLFiKStDgL7g3BVjciRVMDoxsNQbMr4fMQT1453aTyeru6vDUL%2BqW4pIlsg6EfJ2J5ptcFzNmCg7vOysD%2BzAzDs5tzEBjqkAaKau2gZb6LVlN1Uze6ZoLD8Pz%2B09waChGC77bSeZVp2cyL4Dbx4MwB%2BpEmyaNrwjiwE6VlU9THVESSBOIJPmDMopStEZ9VaPg0NCqW%2FREirQqZE9MwNOnCC6ZCSFI0T1a4y9uKLfOo3einmZ1N1lVj%2BQkGrQusbZnq01X2%2FDJ500axm2BIhXMxBwwDPMfYC1VXYDVumzXy7E2qOmsBR%2F7n67dDs&X-Amz-Signature=46d03003a005761cec06fdedfb6f858d70b0c0b9b9f510c9f2de97e063dbc0f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW4MS2RR%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDz5ur76eUEmsw4G5MWffSPslygwonrXZ9nA6Pj8mi0OwIgXca8CvYQ7excpAr%2B50gA4XXKsEBuIeG7%2FbvnZmLHm0IqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBz5u1%2F3UiIjFEs8MCrcA2vQct1uT%2Fx7HxyRjA%2F2Hzu2knlpjDIJEVjRuuWwXPwYhs8PT2CxMSVXPGB4N3WbLL724NQTDvIUhjlnl8CGZ9nkizGw%2F5a827bnUFtZjqzeTWR8YIYGRtbtLmPEfU%2BnXmngjHE7BT85fJsq7t39fKr7GynDfh6MikgK7lNqxmklPFskdrfxoUGhbSuObxFdE%2F4JAJUUeL1bpoyQrpxlHa6iqWU9wLGLesxc5N06BYAlDePs0T%2FeplQtCNaUXOaPckcrKjVl4D3QuEe0%2BRW7tOVS6JhPO5CKHu4Wb4TdJrJlr6bOC9hJLW6ABcIpLyx2kNZj7aDXMKYEaGjTr993mBRABjwJZpMuYpsg9B6DvTHGUwrjRdenGZm2f1JX1fGkJLZ0QBYnh5nesXdVb48flXNVnsh1%2F16BBgdzqK%2FQg11RwLkfRJFrMJDzU2WU0jZHAK72KPdNceYIKvBqBz2izWqiGRNpomNvs8siV9SL0sEJLktuCwcZ9mvTkYq7TevqGUH6rqyRN%2BLuqOSoB%2BfRH66a6wasxB3ouOONe5gkcherOnGfHjGMSc9w4Wv87xUKBWXgX%2Fh6iFTwObaMVsLljwsFb7F9Llxfq47qRywRBfzVAXPHutqbf47qACXDMN3o3MQGOqUBtsTrMsN1X%2Bf9t9Rsx1VTXULY712fW598LJ7BiV8CLVzbfiwTAm1kBbbxprC0LUVBpN9F0Qn6FTC0hYOi05qIiAZJVTpalKQz4SBGt29QDu4ylkIqqEvoSPQi5M%2FvFrXrikebyuO8EScYPm6D0pgjAhF4Xf%2B9lAGY9dTnOkiMboSztAqG%2Fy%2BHwjLb0Z57MjVpgGDopGXTCbyGIpDch3agYAtcaAmX&X-Amz-Signature=11f1b5d9c3a3888a28c9b5b7c0eb4640a81a9a54fe129c9f80136c589682e616&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW4MS2RR%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDz5ur76eUEmsw4G5MWffSPslygwonrXZ9nA6Pj8mi0OwIgXca8CvYQ7excpAr%2B50gA4XXKsEBuIeG7%2FbvnZmLHm0IqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBz5u1%2F3UiIjFEs8MCrcA2vQct1uT%2Fx7HxyRjA%2F2Hzu2knlpjDIJEVjRuuWwXPwYhs8PT2CxMSVXPGB4N3WbLL724NQTDvIUhjlnl8CGZ9nkizGw%2F5a827bnUFtZjqzeTWR8YIYGRtbtLmPEfU%2BnXmngjHE7BT85fJsq7t39fKr7GynDfh6MikgK7lNqxmklPFskdrfxoUGhbSuObxFdE%2F4JAJUUeL1bpoyQrpxlHa6iqWU9wLGLesxc5N06BYAlDePs0T%2FeplQtCNaUXOaPckcrKjVl4D3QuEe0%2BRW7tOVS6JhPO5CKHu4Wb4TdJrJlr6bOC9hJLW6ABcIpLyx2kNZj7aDXMKYEaGjTr993mBRABjwJZpMuYpsg9B6DvTHGUwrjRdenGZm2f1JX1fGkJLZ0QBYnh5nesXdVb48flXNVnsh1%2F16BBgdzqK%2FQg11RwLkfRJFrMJDzU2WU0jZHAK72KPdNceYIKvBqBz2izWqiGRNpomNvs8siV9SL0sEJLktuCwcZ9mvTkYq7TevqGUH6rqyRN%2BLuqOSoB%2BfRH66a6wasxB3ouOONe5gkcherOnGfHjGMSc9w4Wv87xUKBWXgX%2Fh6iFTwObaMVsLljwsFb7F9Llxfq47qRywRBfzVAXPHutqbf47qACXDMN3o3MQGOqUBtsTrMsN1X%2Bf9t9Rsx1VTXULY712fW598LJ7BiV8CLVzbfiwTAm1kBbbxprC0LUVBpN9F0Qn6FTC0hYOi05qIiAZJVTpalKQz4SBGt29QDu4ylkIqqEvoSPQi5M%2FvFrXrikebyuO8EScYPm6D0pgjAhF4Xf%2B9lAGY9dTnOkiMboSztAqG%2Fy%2BHwjLb0Z57MjVpgGDopGXTCbyGIpDch3agYAtcaAmX&X-Amz-Signature=ea5211f53592f497f1089f540cc01d678001f24d2abad2a4fa2faac9378892be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW4MS2RR%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDz5ur76eUEmsw4G5MWffSPslygwonrXZ9nA6Pj8mi0OwIgXca8CvYQ7excpAr%2B50gA4XXKsEBuIeG7%2FbvnZmLHm0IqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBz5u1%2F3UiIjFEs8MCrcA2vQct1uT%2Fx7HxyRjA%2F2Hzu2knlpjDIJEVjRuuWwXPwYhs8PT2CxMSVXPGB4N3WbLL724NQTDvIUhjlnl8CGZ9nkizGw%2F5a827bnUFtZjqzeTWR8YIYGRtbtLmPEfU%2BnXmngjHE7BT85fJsq7t39fKr7GynDfh6MikgK7lNqxmklPFskdrfxoUGhbSuObxFdE%2F4JAJUUeL1bpoyQrpxlHa6iqWU9wLGLesxc5N06BYAlDePs0T%2FeplQtCNaUXOaPckcrKjVl4D3QuEe0%2BRW7tOVS6JhPO5CKHu4Wb4TdJrJlr6bOC9hJLW6ABcIpLyx2kNZj7aDXMKYEaGjTr993mBRABjwJZpMuYpsg9B6DvTHGUwrjRdenGZm2f1JX1fGkJLZ0QBYnh5nesXdVb48flXNVnsh1%2F16BBgdzqK%2FQg11RwLkfRJFrMJDzU2WU0jZHAK72KPdNceYIKvBqBz2izWqiGRNpomNvs8siV9SL0sEJLktuCwcZ9mvTkYq7TevqGUH6rqyRN%2BLuqOSoB%2BfRH66a6wasxB3ouOONe5gkcherOnGfHjGMSc9w4Wv87xUKBWXgX%2Fh6iFTwObaMVsLljwsFb7F9Llxfq47qRywRBfzVAXPHutqbf47qACXDMN3o3MQGOqUBtsTrMsN1X%2Bf9t9Rsx1VTXULY712fW598LJ7BiV8CLVzbfiwTAm1kBbbxprC0LUVBpN9F0Qn6FTC0hYOi05qIiAZJVTpalKQz4SBGt29QDu4ylkIqqEvoSPQi5M%2FvFrXrikebyuO8EScYPm6D0pgjAhF4Xf%2B9lAGY9dTnOkiMboSztAqG%2Fy%2BHwjLb0Z57MjVpgGDopGXTCbyGIpDch3agYAtcaAmX&X-Amz-Signature=861fc8654b10228905ff3bf60806c2cdb8b3d6116066ab6697d6f5cdddfa9402&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW4MS2RR%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDz5ur76eUEmsw4G5MWffSPslygwonrXZ9nA6Pj8mi0OwIgXca8CvYQ7excpAr%2B50gA4XXKsEBuIeG7%2FbvnZmLHm0IqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBz5u1%2F3UiIjFEs8MCrcA2vQct1uT%2Fx7HxyRjA%2F2Hzu2knlpjDIJEVjRuuWwXPwYhs8PT2CxMSVXPGB4N3WbLL724NQTDvIUhjlnl8CGZ9nkizGw%2F5a827bnUFtZjqzeTWR8YIYGRtbtLmPEfU%2BnXmngjHE7BT85fJsq7t39fKr7GynDfh6MikgK7lNqxmklPFskdrfxoUGhbSuObxFdE%2F4JAJUUeL1bpoyQrpxlHa6iqWU9wLGLesxc5N06BYAlDePs0T%2FeplQtCNaUXOaPckcrKjVl4D3QuEe0%2BRW7tOVS6JhPO5CKHu4Wb4TdJrJlr6bOC9hJLW6ABcIpLyx2kNZj7aDXMKYEaGjTr993mBRABjwJZpMuYpsg9B6DvTHGUwrjRdenGZm2f1JX1fGkJLZ0QBYnh5nesXdVb48flXNVnsh1%2F16BBgdzqK%2FQg11RwLkfRJFrMJDzU2WU0jZHAK72KPdNceYIKvBqBz2izWqiGRNpomNvs8siV9SL0sEJLktuCwcZ9mvTkYq7TevqGUH6rqyRN%2BLuqOSoB%2BfRH66a6wasxB3ouOONe5gkcherOnGfHjGMSc9w4Wv87xUKBWXgX%2Fh6iFTwObaMVsLljwsFb7F9Llxfq47qRywRBfzVAXPHutqbf47qACXDMN3o3MQGOqUBtsTrMsN1X%2Bf9t9Rsx1VTXULY712fW598LJ7BiV8CLVzbfiwTAm1kBbbxprC0LUVBpN9F0Qn6FTC0hYOi05qIiAZJVTpalKQz4SBGt29QDu4ylkIqqEvoSPQi5M%2FvFrXrikebyuO8EScYPm6D0pgjAhF4Xf%2B9lAGY9dTnOkiMboSztAqG%2Fy%2BHwjLb0Z57MjVpgGDopGXTCbyGIpDch3agYAtcaAmX&X-Amz-Signature=96e54a057892fdef0abb91204f73124038ef6a378d2354c128b3372539bab12e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW4MS2RR%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDz5ur76eUEmsw4G5MWffSPslygwonrXZ9nA6Pj8mi0OwIgXca8CvYQ7excpAr%2B50gA4XXKsEBuIeG7%2FbvnZmLHm0IqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBz5u1%2F3UiIjFEs8MCrcA2vQct1uT%2Fx7HxyRjA%2F2Hzu2knlpjDIJEVjRuuWwXPwYhs8PT2CxMSVXPGB4N3WbLL724NQTDvIUhjlnl8CGZ9nkizGw%2F5a827bnUFtZjqzeTWR8YIYGRtbtLmPEfU%2BnXmngjHE7BT85fJsq7t39fKr7GynDfh6MikgK7lNqxmklPFskdrfxoUGhbSuObxFdE%2F4JAJUUeL1bpoyQrpxlHa6iqWU9wLGLesxc5N06BYAlDePs0T%2FeplQtCNaUXOaPckcrKjVl4D3QuEe0%2BRW7tOVS6JhPO5CKHu4Wb4TdJrJlr6bOC9hJLW6ABcIpLyx2kNZj7aDXMKYEaGjTr993mBRABjwJZpMuYpsg9B6DvTHGUwrjRdenGZm2f1JX1fGkJLZ0QBYnh5nesXdVb48flXNVnsh1%2F16BBgdzqK%2FQg11RwLkfRJFrMJDzU2WU0jZHAK72KPdNceYIKvBqBz2izWqiGRNpomNvs8siV9SL0sEJLktuCwcZ9mvTkYq7TevqGUH6rqyRN%2BLuqOSoB%2BfRH66a6wasxB3ouOONe5gkcherOnGfHjGMSc9w4Wv87xUKBWXgX%2Fh6iFTwObaMVsLljwsFb7F9Llxfq47qRywRBfzVAXPHutqbf47qACXDMN3o3MQGOqUBtsTrMsN1X%2Bf9t9Rsx1VTXULY712fW598LJ7BiV8CLVzbfiwTAm1kBbbxprC0LUVBpN9F0Qn6FTC0hYOi05qIiAZJVTpalKQz4SBGt29QDu4ylkIqqEvoSPQi5M%2FvFrXrikebyuO8EScYPm6D0pgjAhF4Xf%2B9lAGY9dTnOkiMboSztAqG%2Fy%2BHwjLb0Z57MjVpgGDopGXTCbyGIpDch3agYAtcaAmX&X-Amz-Signature=f10b66d66847b8be2eb32c48c85c2adfd02f9c83f9da9878dad6d3a90c98ec27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW4MS2RR%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDz5ur76eUEmsw4G5MWffSPslygwonrXZ9nA6Pj8mi0OwIgXca8CvYQ7excpAr%2B50gA4XXKsEBuIeG7%2FbvnZmLHm0IqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBz5u1%2F3UiIjFEs8MCrcA2vQct1uT%2Fx7HxyRjA%2F2Hzu2knlpjDIJEVjRuuWwXPwYhs8PT2CxMSVXPGB4N3WbLL724NQTDvIUhjlnl8CGZ9nkizGw%2F5a827bnUFtZjqzeTWR8YIYGRtbtLmPEfU%2BnXmngjHE7BT85fJsq7t39fKr7GynDfh6MikgK7lNqxmklPFskdrfxoUGhbSuObxFdE%2F4JAJUUeL1bpoyQrpxlHa6iqWU9wLGLesxc5N06BYAlDePs0T%2FeplQtCNaUXOaPckcrKjVl4D3QuEe0%2BRW7tOVS6JhPO5CKHu4Wb4TdJrJlr6bOC9hJLW6ABcIpLyx2kNZj7aDXMKYEaGjTr993mBRABjwJZpMuYpsg9B6DvTHGUwrjRdenGZm2f1JX1fGkJLZ0QBYnh5nesXdVb48flXNVnsh1%2F16BBgdzqK%2FQg11RwLkfRJFrMJDzU2WU0jZHAK72KPdNceYIKvBqBz2izWqiGRNpomNvs8siV9SL0sEJLktuCwcZ9mvTkYq7TevqGUH6rqyRN%2BLuqOSoB%2BfRH66a6wasxB3ouOONe5gkcherOnGfHjGMSc9w4Wv87xUKBWXgX%2Fh6iFTwObaMVsLljwsFb7F9Llxfq47qRywRBfzVAXPHutqbf47qACXDMN3o3MQGOqUBtsTrMsN1X%2Bf9t9Rsx1VTXULY712fW598LJ7BiV8CLVzbfiwTAm1kBbbxprC0LUVBpN9F0Qn6FTC0hYOi05qIiAZJVTpalKQz4SBGt29QDu4ylkIqqEvoSPQi5M%2FvFrXrikebyuO8EScYPm6D0pgjAhF4Xf%2B9lAGY9dTnOkiMboSztAqG%2Fy%2BHwjLb0Z57MjVpgGDopGXTCbyGIpDch3agYAtcaAmX&X-Amz-Signature=4fd17f7492b6915a8efe9af84880c14dcbfed4c20cffd0379eb4f09d96d004ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW4MS2RR%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDz5ur76eUEmsw4G5MWffSPslygwonrXZ9nA6Pj8mi0OwIgXca8CvYQ7excpAr%2B50gA4XXKsEBuIeG7%2FbvnZmLHm0IqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBz5u1%2F3UiIjFEs8MCrcA2vQct1uT%2Fx7HxyRjA%2F2Hzu2knlpjDIJEVjRuuWwXPwYhs8PT2CxMSVXPGB4N3WbLL724NQTDvIUhjlnl8CGZ9nkizGw%2F5a827bnUFtZjqzeTWR8YIYGRtbtLmPEfU%2BnXmngjHE7BT85fJsq7t39fKr7GynDfh6MikgK7lNqxmklPFskdrfxoUGhbSuObxFdE%2F4JAJUUeL1bpoyQrpxlHa6iqWU9wLGLesxc5N06BYAlDePs0T%2FeplQtCNaUXOaPckcrKjVl4D3QuEe0%2BRW7tOVS6JhPO5CKHu4Wb4TdJrJlr6bOC9hJLW6ABcIpLyx2kNZj7aDXMKYEaGjTr993mBRABjwJZpMuYpsg9B6DvTHGUwrjRdenGZm2f1JX1fGkJLZ0QBYnh5nesXdVb48flXNVnsh1%2F16BBgdzqK%2FQg11RwLkfRJFrMJDzU2WU0jZHAK72KPdNceYIKvBqBz2izWqiGRNpomNvs8siV9SL0sEJLktuCwcZ9mvTkYq7TevqGUH6rqyRN%2BLuqOSoB%2BfRH66a6wasxB3ouOONe5gkcherOnGfHjGMSc9w4Wv87xUKBWXgX%2Fh6iFTwObaMVsLljwsFb7F9Llxfq47qRywRBfzVAXPHutqbf47qACXDMN3o3MQGOqUBtsTrMsN1X%2Bf9t9Rsx1VTXULY712fW598LJ7BiV8CLVzbfiwTAm1kBbbxprC0LUVBpN9F0Qn6FTC0hYOi05qIiAZJVTpalKQz4SBGt29QDu4ylkIqqEvoSPQi5M%2FvFrXrikebyuO8EScYPm6D0pgjAhF4Xf%2B9lAGY9dTnOkiMboSztAqG%2Fy%2BHwjLb0Z57MjVpgGDopGXTCbyGIpDch3agYAtcaAmX&X-Amz-Signature=7a1954ee5333fe343f3cd98004034a178495a0bcf8039254a366c0037fe697d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW4MS2RR%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDz5ur76eUEmsw4G5MWffSPslygwonrXZ9nA6Pj8mi0OwIgXca8CvYQ7excpAr%2B50gA4XXKsEBuIeG7%2FbvnZmLHm0IqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBz5u1%2F3UiIjFEs8MCrcA2vQct1uT%2Fx7HxyRjA%2F2Hzu2knlpjDIJEVjRuuWwXPwYhs8PT2CxMSVXPGB4N3WbLL724NQTDvIUhjlnl8CGZ9nkizGw%2F5a827bnUFtZjqzeTWR8YIYGRtbtLmPEfU%2BnXmngjHE7BT85fJsq7t39fKr7GynDfh6MikgK7lNqxmklPFskdrfxoUGhbSuObxFdE%2F4JAJUUeL1bpoyQrpxlHa6iqWU9wLGLesxc5N06BYAlDePs0T%2FeplQtCNaUXOaPckcrKjVl4D3QuEe0%2BRW7tOVS6JhPO5CKHu4Wb4TdJrJlr6bOC9hJLW6ABcIpLyx2kNZj7aDXMKYEaGjTr993mBRABjwJZpMuYpsg9B6DvTHGUwrjRdenGZm2f1JX1fGkJLZ0QBYnh5nesXdVb48flXNVnsh1%2F16BBgdzqK%2FQg11RwLkfRJFrMJDzU2WU0jZHAK72KPdNceYIKvBqBz2izWqiGRNpomNvs8siV9SL0sEJLktuCwcZ9mvTkYq7TevqGUH6rqyRN%2BLuqOSoB%2BfRH66a6wasxB3ouOONe5gkcherOnGfHjGMSc9w4Wv87xUKBWXgX%2Fh6iFTwObaMVsLljwsFb7F9Llxfq47qRywRBfzVAXPHutqbf47qACXDMN3o3MQGOqUBtsTrMsN1X%2Bf9t9Rsx1VTXULY712fW598LJ7BiV8CLVzbfiwTAm1kBbbxprC0LUVBpN9F0Qn6FTC0hYOi05qIiAZJVTpalKQz4SBGt29QDu4ylkIqqEvoSPQi5M%2FvFrXrikebyuO8EScYPm6D0pgjAhF4Xf%2B9lAGY9dTnOkiMboSztAqG%2Fy%2BHwjLb0Z57MjVpgGDopGXTCbyGIpDch3agYAtcaAmX&X-Amz-Signature=67a85c37550b43681fd5c11469743084ddb2bc89ede5b9d93943138d70e57467&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW4MS2RR%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDz5ur76eUEmsw4G5MWffSPslygwonrXZ9nA6Pj8mi0OwIgXca8CvYQ7excpAr%2B50gA4XXKsEBuIeG7%2FbvnZmLHm0IqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBz5u1%2F3UiIjFEs8MCrcA2vQct1uT%2Fx7HxyRjA%2F2Hzu2knlpjDIJEVjRuuWwXPwYhs8PT2CxMSVXPGB4N3WbLL724NQTDvIUhjlnl8CGZ9nkizGw%2F5a827bnUFtZjqzeTWR8YIYGRtbtLmPEfU%2BnXmngjHE7BT85fJsq7t39fKr7GynDfh6MikgK7lNqxmklPFskdrfxoUGhbSuObxFdE%2F4JAJUUeL1bpoyQrpxlHa6iqWU9wLGLesxc5N06BYAlDePs0T%2FeplQtCNaUXOaPckcrKjVl4D3QuEe0%2BRW7tOVS6JhPO5CKHu4Wb4TdJrJlr6bOC9hJLW6ABcIpLyx2kNZj7aDXMKYEaGjTr993mBRABjwJZpMuYpsg9B6DvTHGUwrjRdenGZm2f1JX1fGkJLZ0QBYnh5nesXdVb48flXNVnsh1%2F16BBgdzqK%2FQg11RwLkfRJFrMJDzU2WU0jZHAK72KPdNceYIKvBqBz2izWqiGRNpomNvs8siV9SL0sEJLktuCwcZ9mvTkYq7TevqGUH6rqyRN%2BLuqOSoB%2BfRH66a6wasxB3ouOONe5gkcherOnGfHjGMSc9w4Wv87xUKBWXgX%2Fh6iFTwObaMVsLljwsFb7F9Llxfq47qRywRBfzVAXPHutqbf47qACXDMN3o3MQGOqUBtsTrMsN1X%2Bf9t9Rsx1VTXULY712fW598LJ7BiV8CLVzbfiwTAm1kBbbxprC0LUVBpN9F0Qn6FTC0hYOi05qIiAZJVTpalKQz4SBGt29QDu4ylkIqqEvoSPQi5M%2FvFrXrikebyuO8EScYPm6D0pgjAhF4Xf%2B9lAGY9dTnOkiMboSztAqG%2Fy%2BHwjLb0Z57MjVpgGDopGXTCbyGIpDch3agYAtcaAmX&X-Amz-Signature=2c259c9d5a20ecb6f2aefce96168915af3e7d13192afc88cb6066c192cad7258&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW4MS2RR%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDz5ur76eUEmsw4G5MWffSPslygwonrXZ9nA6Pj8mi0OwIgXca8CvYQ7excpAr%2B50gA4XXKsEBuIeG7%2FbvnZmLHm0IqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBz5u1%2F3UiIjFEs8MCrcA2vQct1uT%2Fx7HxyRjA%2F2Hzu2knlpjDIJEVjRuuWwXPwYhs8PT2CxMSVXPGB4N3WbLL724NQTDvIUhjlnl8CGZ9nkizGw%2F5a827bnUFtZjqzeTWR8YIYGRtbtLmPEfU%2BnXmngjHE7BT85fJsq7t39fKr7GynDfh6MikgK7lNqxmklPFskdrfxoUGhbSuObxFdE%2F4JAJUUeL1bpoyQrpxlHa6iqWU9wLGLesxc5N06BYAlDePs0T%2FeplQtCNaUXOaPckcrKjVl4D3QuEe0%2BRW7tOVS6JhPO5CKHu4Wb4TdJrJlr6bOC9hJLW6ABcIpLyx2kNZj7aDXMKYEaGjTr993mBRABjwJZpMuYpsg9B6DvTHGUwrjRdenGZm2f1JX1fGkJLZ0QBYnh5nesXdVb48flXNVnsh1%2F16BBgdzqK%2FQg11RwLkfRJFrMJDzU2WU0jZHAK72KPdNceYIKvBqBz2izWqiGRNpomNvs8siV9SL0sEJLktuCwcZ9mvTkYq7TevqGUH6rqyRN%2BLuqOSoB%2BfRH66a6wasxB3ouOONe5gkcherOnGfHjGMSc9w4Wv87xUKBWXgX%2Fh6iFTwObaMVsLljwsFb7F9Llxfq47qRywRBfzVAXPHutqbf47qACXDMN3o3MQGOqUBtsTrMsN1X%2Bf9t9Rsx1VTXULY712fW598LJ7BiV8CLVzbfiwTAm1kBbbxprC0LUVBpN9F0Qn6FTC0hYOi05qIiAZJVTpalKQz4SBGt29QDu4ylkIqqEvoSPQi5M%2FvFrXrikebyuO8EScYPm6D0pgjAhF4Xf%2B9lAGY9dTnOkiMboSztAqG%2Fy%2BHwjLb0Z57MjVpgGDopGXTCbyGIpDch3agYAtcaAmX&X-Amz-Signature=96e54a057892fdef0abb91204f73124038ef6a378d2354c128b3372539bab12e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
