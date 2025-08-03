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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHRD6TSB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIsFDwIfZc%2FXmYttNIr9Ar4lPCoHRfH1iA5xWlQrd6iAIhALDdJ174CBI2LvyLrwBOpp7lWyIPCj%2FFoIm8AtofYdl5Kv8DCDQQABoMNjM3NDIzMTgzODA1Igzm30HHfW0Pm%2FDPPDgq3APUrnE30ZZCxmvS46YwobQNQPlauUYafzNMn4NJX0StmknrhmRvn3176xeSvtflzvc8Ii0ssdz97VL2DnYwl8MjBaBoP8nPvgTMIsmISBt6fM7docY%2FjsflMgrcQ6yX2ZNaUhLgZgoV4QNTx0nr4JS9tmRcub%2BhqSG49vJTmkPsOPIS3tCB%2B2TYJpxNiCsIFUeqYQRlzA5tIhOvIHHrP%2FQY9Kr2SJTmQRf61rRhLk84Gk379mg%2BfxSFxf8j0yaKpk1x3u1d%2FMg%2BPfprFnBpygNwgxQcO75EDmvu6BDdzGApMdS1ciq137VK6CpbgjUn8oHST7xeyIYPR0JiQ197wCw5HPIheAgzeIDhfEXy%2Fsx7uHRNsbxptHLAqxtM1rMLlPfVvl9cy1BJUxsMbyouwnC9YS8hsefloD4exhLeglWMFYBXe%2Bqks%2FKL9t18FpUFAWCh9UZceIp9cfUjNOk%2FHwyfmjo64oVKZ3gyeKfXcyJX33GBkC3qq3zWfNRZk3MiSt%2Flk0vUZk2G9ZI9XN89GbI9dZFeKpJ0BvvllZmI%2BH4%2FQUqPObe5inDhlEZ9HvsI%2BeraOUYmXcmw9Jd2WcMwKJfTRwpRJJkO%2BW0lDbKdQ4UVwjt%2BglcRThFRwJi4qDDN2b7EBjqkAYC3FHpoaW%2FRFhL9oDT4XI913DSlxagotrggp%2Bl5bca%2BDg7LsNOl3Itj1OF9RHJLZNG6LqP7x9JvoN0zeINzk%2Bp4fkHc8ZmQ0bj%2ByMRVS86oOxXoLC3ZtK66BdjxZPNl4VC2OJEjIM%2Bpm%2FZolRqcMy4flXapyXu1IZOU%2Fo1WoQbU55NCMK4jU8LtmLIOJE36Ni90ZTvDzyjFUuxUBynNoC1Wjfoo&X-Amz-Signature=c7b933c8c9e58ac6fa0a4524ba214f7e03f85d58b45e7dfadcabb9b444ab5b19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636CPD6JB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPzo2QohBbWDBv3cpUjzBV9N21LN7lNb4jzRpaFlNL7AiBx4nRDYC4M6eSZ8UZq8BMi8AWPFc%2BZZvGbuCRpewdB%2BCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM9MwUIQmtZ8IzGhn5KtwDoJkKk7bSkpm4svU8YkbvEWkZqxt4aNOojtGO7K%2BJMWJn0pEg30uOrNVxNYkshSpFDOM01a5JTBn8%2Ftx0tB%2BnKnbtb%2BxHZwa52CmV8%2BIgWhbHsj%2F6t0UpCD8UvkfBj9axfX20pnpvDEquYPn%2F4AtM7hpMG6Pe9Ij%2BC5IOvGGbVUdSI0xBJwPP1lqCiZJ7tblLGd%2BT6EHq5hIBXqy34ZsCKvNhu%2BhJsO%2BQhnX614pZasuFvuuj%2B9x%2BG3x%2BorQEao%2B5GkgSRQ1uPUIUHNAciqSE2%2FQd7nIeqVWlvuskmFoabTPID5lsRn3iT%2F4eSXXXzJrW%2FPUQJA8Wn3Jxu%2Fax8IFGR8dqwRtXYdxoxlusJWJr2BMguVWXQ6wPI4frv5Toc7yM5ZJxf4Uwhmj%2FjC9Xkdc4gT%2Fq%2B%2FMHoJ6qDm9U07j7SGwSgK4GE3VukDoRVT4oHzZb8U9YFvX4AyV1uScrvTtz2ZlYwsGP1D8U3ODt4QzQYi%2F%2FrA4XdyAmG9kDa1ou1wY1tg8X4E%2BMMh%2BLlF6YVyM9mfmyo6mAMSezdp9mzdOLdDqzPqPmR%2B9C8n8UHu8jhZgUOUBgkf%2BW85WEHze02e8hsrOojJrpdIHaO6mnCX6Qto1Lj196rQ7ELpgdLQ4wwtm%2BxAY6pgE1jvpAi0NeuU8KAAma3p29MZyVLOhKW96xZfREkG%2BTnIKYb%2FfaR7OpA%2FBwIypejOwmi469jBcMouS%2FHYjQhuIFRocMOHXcmuimKitpG0xQCeJ9LA3jMJ7KlnNcR0nFnBBTykEmMyQ%2FimzXsZ0Yql%2F%2BEtgasagwq9BQ3DHCQcwwAEDQWsBTX7G3%2B0TpKrqDJzKz7%2F0Z%2FvQsnWZFXEKnouf%2FkZfFFPSz&X-Amz-Signature=9639d2e6f829c949a49b80ac1126d08e8767628be059a0926781542ce50d2b24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636CPD6JB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPzo2QohBbWDBv3cpUjzBV9N21LN7lNb4jzRpaFlNL7AiBx4nRDYC4M6eSZ8UZq8BMi8AWPFc%2BZZvGbuCRpewdB%2BCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM9MwUIQmtZ8IzGhn5KtwDoJkKk7bSkpm4svU8YkbvEWkZqxt4aNOojtGO7K%2BJMWJn0pEg30uOrNVxNYkshSpFDOM01a5JTBn8%2Ftx0tB%2BnKnbtb%2BxHZwa52CmV8%2BIgWhbHsj%2F6t0UpCD8UvkfBj9axfX20pnpvDEquYPn%2F4AtM7hpMG6Pe9Ij%2BC5IOvGGbVUdSI0xBJwPP1lqCiZJ7tblLGd%2BT6EHq5hIBXqy34ZsCKvNhu%2BhJsO%2BQhnX614pZasuFvuuj%2B9x%2BG3x%2BorQEao%2B5GkgSRQ1uPUIUHNAciqSE2%2FQd7nIeqVWlvuskmFoabTPID5lsRn3iT%2F4eSXXXzJrW%2FPUQJA8Wn3Jxu%2Fax8IFGR8dqwRtXYdxoxlusJWJr2BMguVWXQ6wPI4frv5Toc7yM5ZJxf4Uwhmj%2FjC9Xkdc4gT%2Fq%2B%2FMHoJ6qDm9U07j7SGwSgK4GE3VukDoRVT4oHzZb8U9YFvX4AyV1uScrvTtz2ZlYwsGP1D8U3ODt4QzQYi%2F%2FrA4XdyAmG9kDa1ou1wY1tg8X4E%2BMMh%2BLlF6YVyM9mfmyo6mAMSezdp9mzdOLdDqzPqPmR%2B9C8n8UHu8jhZgUOUBgkf%2BW85WEHze02e8hsrOojJrpdIHaO6mnCX6Qto1Lj196rQ7ELpgdLQ4wwtm%2BxAY6pgE1jvpAi0NeuU8KAAma3p29MZyVLOhKW96xZfREkG%2BTnIKYb%2FfaR7OpA%2FBwIypejOwmi469jBcMouS%2FHYjQhuIFRocMOHXcmuimKitpG0xQCeJ9LA3jMJ7KlnNcR0nFnBBTykEmMyQ%2FimzXsZ0Yql%2F%2BEtgasagwq9BQ3DHCQcwwAEDQWsBTX7G3%2B0TpKrqDJzKz7%2F0Z%2FvQsnWZFXEKnouf%2FkZfFFPSz&X-Amz-Signature=b28c7a2dc0d0c1828d0b27e40e3b3a5fd7e95debdf51770d17f49e0a866a2e10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636CPD6JB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPzo2QohBbWDBv3cpUjzBV9N21LN7lNb4jzRpaFlNL7AiBx4nRDYC4M6eSZ8UZq8BMi8AWPFc%2BZZvGbuCRpewdB%2BCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM9MwUIQmtZ8IzGhn5KtwDoJkKk7bSkpm4svU8YkbvEWkZqxt4aNOojtGO7K%2BJMWJn0pEg30uOrNVxNYkshSpFDOM01a5JTBn8%2Ftx0tB%2BnKnbtb%2BxHZwa52CmV8%2BIgWhbHsj%2F6t0UpCD8UvkfBj9axfX20pnpvDEquYPn%2F4AtM7hpMG6Pe9Ij%2BC5IOvGGbVUdSI0xBJwPP1lqCiZJ7tblLGd%2BT6EHq5hIBXqy34ZsCKvNhu%2BhJsO%2BQhnX614pZasuFvuuj%2B9x%2BG3x%2BorQEao%2B5GkgSRQ1uPUIUHNAciqSE2%2FQd7nIeqVWlvuskmFoabTPID5lsRn3iT%2F4eSXXXzJrW%2FPUQJA8Wn3Jxu%2Fax8IFGR8dqwRtXYdxoxlusJWJr2BMguVWXQ6wPI4frv5Toc7yM5ZJxf4Uwhmj%2FjC9Xkdc4gT%2Fq%2B%2FMHoJ6qDm9U07j7SGwSgK4GE3VukDoRVT4oHzZb8U9YFvX4AyV1uScrvTtz2ZlYwsGP1D8U3ODt4QzQYi%2F%2FrA4XdyAmG9kDa1ou1wY1tg8X4E%2BMMh%2BLlF6YVyM9mfmyo6mAMSezdp9mzdOLdDqzPqPmR%2B9C8n8UHu8jhZgUOUBgkf%2BW85WEHze02e8hsrOojJrpdIHaO6mnCX6Qto1Lj196rQ7ELpgdLQ4wwtm%2BxAY6pgE1jvpAi0NeuU8KAAma3p29MZyVLOhKW96xZfREkG%2BTnIKYb%2FfaR7OpA%2FBwIypejOwmi469jBcMouS%2FHYjQhuIFRocMOHXcmuimKitpG0xQCeJ9LA3jMJ7KlnNcR0nFnBBTykEmMyQ%2FimzXsZ0Yql%2F%2BEtgasagwq9BQ3DHCQcwwAEDQWsBTX7G3%2B0TpKrqDJzKz7%2F0Z%2FvQsnWZFXEKnouf%2FkZfFFPSz&X-Amz-Signature=53861a2853acffc8341beed84165d89826ce801f8c39356987ac2b73f73b4330&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636CPD6JB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPzo2QohBbWDBv3cpUjzBV9N21LN7lNb4jzRpaFlNL7AiBx4nRDYC4M6eSZ8UZq8BMi8AWPFc%2BZZvGbuCRpewdB%2BCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM9MwUIQmtZ8IzGhn5KtwDoJkKk7bSkpm4svU8YkbvEWkZqxt4aNOojtGO7K%2BJMWJn0pEg30uOrNVxNYkshSpFDOM01a5JTBn8%2Ftx0tB%2BnKnbtb%2BxHZwa52CmV8%2BIgWhbHsj%2F6t0UpCD8UvkfBj9axfX20pnpvDEquYPn%2F4AtM7hpMG6Pe9Ij%2BC5IOvGGbVUdSI0xBJwPP1lqCiZJ7tblLGd%2BT6EHq5hIBXqy34ZsCKvNhu%2BhJsO%2BQhnX614pZasuFvuuj%2B9x%2BG3x%2BorQEao%2B5GkgSRQ1uPUIUHNAciqSE2%2FQd7nIeqVWlvuskmFoabTPID5lsRn3iT%2F4eSXXXzJrW%2FPUQJA8Wn3Jxu%2Fax8IFGR8dqwRtXYdxoxlusJWJr2BMguVWXQ6wPI4frv5Toc7yM5ZJxf4Uwhmj%2FjC9Xkdc4gT%2Fq%2B%2FMHoJ6qDm9U07j7SGwSgK4GE3VukDoRVT4oHzZb8U9YFvX4AyV1uScrvTtz2ZlYwsGP1D8U3ODt4QzQYi%2F%2FrA4XdyAmG9kDa1ou1wY1tg8X4E%2BMMh%2BLlF6YVyM9mfmyo6mAMSezdp9mzdOLdDqzPqPmR%2B9C8n8UHu8jhZgUOUBgkf%2BW85WEHze02e8hsrOojJrpdIHaO6mnCX6Qto1Lj196rQ7ELpgdLQ4wwtm%2BxAY6pgE1jvpAi0NeuU8KAAma3p29MZyVLOhKW96xZfREkG%2BTnIKYb%2FfaR7OpA%2FBwIypejOwmi469jBcMouS%2FHYjQhuIFRocMOHXcmuimKitpG0xQCeJ9LA3jMJ7KlnNcR0nFnBBTykEmMyQ%2FimzXsZ0Yql%2F%2BEtgasagwq9BQ3DHCQcwwAEDQWsBTX7G3%2B0TpKrqDJzKz7%2F0Z%2FvQsnWZFXEKnouf%2FkZfFFPSz&X-Amz-Signature=b0955d250ad578ee594cb36979671459353b1d5209fa444740176481aa0cd17a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636CPD6JB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPzo2QohBbWDBv3cpUjzBV9N21LN7lNb4jzRpaFlNL7AiBx4nRDYC4M6eSZ8UZq8BMi8AWPFc%2BZZvGbuCRpewdB%2BCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM9MwUIQmtZ8IzGhn5KtwDoJkKk7bSkpm4svU8YkbvEWkZqxt4aNOojtGO7K%2BJMWJn0pEg30uOrNVxNYkshSpFDOM01a5JTBn8%2Ftx0tB%2BnKnbtb%2BxHZwa52CmV8%2BIgWhbHsj%2F6t0UpCD8UvkfBj9axfX20pnpvDEquYPn%2F4AtM7hpMG6Pe9Ij%2BC5IOvGGbVUdSI0xBJwPP1lqCiZJ7tblLGd%2BT6EHq5hIBXqy34ZsCKvNhu%2BhJsO%2BQhnX614pZasuFvuuj%2B9x%2BG3x%2BorQEao%2B5GkgSRQ1uPUIUHNAciqSE2%2FQd7nIeqVWlvuskmFoabTPID5lsRn3iT%2F4eSXXXzJrW%2FPUQJA8Wn3Jxu%2Fax8IFGR8dqwRtXYdxoxlusJWJr2BMguVWXQ6wPI4frv5Toc7yM5ZJxf4Uwhmj%2FjC9Xkdc4gT%2Fq%2B%2FMHoJ6qDm9U07j7SGwSgK4GE3VukDoRVT4oHzZb8U9YFvX4AyV1uScrvTtz2ZlYwsGP1D8U3ODt4QzQYi%2F%2FrA4XdyAmG9kDa1ou1wY1tg8X4E%2BMMh%2BLlF6YVyM9mfmyo6mAMSezdp9mzdOLdDqzPqPmR%2B9C8n8UHu8jhZgUOUBgkf%2BW85WEHze02e8hsrOojJrpdIHaO6mnCX6Qto1Lj196rQ7ELpgdLQ4wwtm%2BxAY6pgE1jvpAi0NeuU8KAAma3p29MZyVLOhKW96xZfREkG%2BTnIKYb%2FfaR7OpA%2FBwIypejOwmi469jBcMouS%2FHYjQhuIFRocMOHXcmuimKitpG0xQCeJ9LA3jMJ7KlnNcR0nFnBBTykEmMyQ%2FimzXsZ0Yql%2F%2BEtgasagwq9BQ3DHCQcwwAEDQWsBTX7G3%2B0TpKrqDJzKz7%2F0Z%2FvQsnWZFXEKnouf%2FkZfFFPSz&X-Amz-Signature=fcee2145701db4aa786219d5819cbf82505efaa9c60e5b821121e1942931656c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636CPD6JB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPzo2QohBbWDBv3cpUjzBV9N21LN7lNb4jzRpaFlNL7AiBx4nRDYC4M6eSZ8UZq8BMi8AWPFc%2BZZvGbuCRpewdB%2BCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM9MwUIQmtZ8IzGhn5KtwDoJkKk7bSkpm4svU8YkbvEWkZqxt4aNOojtGO7K%2BJMWJn0pEg30uOrNVxNYkshSpFDOM01a5JTBn8%2Ftx0tB%2BnKnbtb%2BxHZwa52CmV8%2BIgWhbHsj%2F6t0UpCD8UvkfBj9axfX20pnpvDEquYPn%2F4AtM7hpMG6Pe9Ij%2BC5IOvGGbVUdSI0xBJwPP1lqCiZJ7tblLGd%2BT6EHq5hIBXqy34ZsCKvNhu%2BhJsO%2BQhnX614pZasuFvuuj%2B9x%2BG3x%2BorQEao%2B5GkgSRQ1uPUIUHNAciqSE2%2FQd7nIeqVWlvuskmFoabTPID5lsRn3iT%2F4eSXXXzJrW%2FPUQJA8Wn3Jxu%2Fax8IFGR8dqwRtXYdxoxlusJWJr2BMguVWXQ6wPI4frv5Toc7yM5ZJxf4Uwhmj%2FjC9Xkdc4gT%2Fq%2B%2FMHoJ6qDm9U07j7SGwSgK4GE3VukDoRVT4oHzZb8U9YFvX4AyV1uScrvTtz2ZlYwsGP1D8U3ODt4QzQYi%2F%2FrA4XdyAmG9kDa1ou1wY1tg8X4E%2BMMh%2BLlF6YVyM9mfmyo6mAMSezdp9mzdOLdDqzPqPmR%2B9C8n8UHu8jhZgUOUBgkf%2BW85WEHze02e8hsrOojJrpdIHaO6mnCX6Qto1Lj196rQ7ELpgdLQ4wwtm%2BxAY6pgE1jvpAi0NeuU8KAAma3p29MZyVLOhKW96xZfREkG%2BTnIKYb%2FfaR7OpA%2FBwIypejOwmi469jBcMouS%2FHYjQhuIFRocMOHXcmuimKitpG0xQCeJ9LA3jMJ7KlnNcR0nFnBBTykEmMyQ%2FimzXsZ0Yql%2F%2BEtgasagwq9BQ3DHCQcwwAEDQWsBTX7G3%2B0TpKrqDJzKz7%2F0Z%2FvQsnWZFXEKnouf%2FkZfFFPSz&X-Amz-Signature=6619f4b0f5f870eed89628116ad024b09cf0d5c06cf391b904674178939311e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636CPD6JB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPzo2QohBbWDBv3cpUjzBV9N21LN7lNb4jzRpaFlNL7AiBx4nRDYC4M6eSZ8UZq8BMi8AWPFc%2BZZvGbuCRpewdB%2BCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM9MwUIQmtZ8IzGhn5KtwDoJkKk7bSkpm4svU8YkbvEWkZqxt4aNOojtGO7K%2BJMWJn0pEg30uOrNVxNYkshSpFDOM01a5JTBn8%2Ftx0tB%2BnKnbtb%2BxHZwa52CmV8%2BIgWhbHsj%2F6t0UpCD8UvkfBj9axfX20pnpvDEquYPn%2F4AtM7hpMG6Pe9Ij%2BC5IOvGGbVUdSI0xBJwPP1lqCiZJ7tblLGd%2BT6EHq5hIBXqy34ZsCKvNhu%2BhJsO%2BQhnX614pZasuFvuuj%2B9x%2BG3x%2BorQEao%2B5GkgSRQ1uPUIUHNAciqSE2%2FQd7nIeqVWlvuskmFoabTPID5lsRn3iT%2F4eSXXXzJrW%2FPUQJA8Wn3Jxu%2Fax8IFGR8dqwRtXYdxoxlusJWJr2BMguVWXQ6wPI4frv5Toc7yM5ZJxf4Uwhmj%2FjC9Xkdc4gT%2Fq%2B%2FMHoJ6qDm9U07j7SGwSgK4GE3VukDoRVT4oHzZb8U9YFvX4AyV1uScrvTtz2ZlYwsGP1D8U3ODt4QzQYi%2F%2FrA4XdyAmG9kDa1ou1wY1tg8X4E%2BMMh%2BLlF6YVyM9mfmyo6mAMSezdp9mzdOLdDqzPqPmR%2B9C8n8UHu8jhZgUOUBgkf%2BW85WEHze02e8hsrOojJrpdIHaO6mnCX6Qto1Lj196rQ7ELpgdLQ4wwtm%2BxAY6pgE1jvpAi0NeuU8KAAma3p29MZyVLOhKW96xZfREkG%2BTnIKYb%2FfaR7OpA%2FBwIypejOwmi469jBcMouS%2FHYjQhuIFRocMOHXcmuimKitpG0xQCeJ9LA3jMJ7KlnNcR0nFnBBTykEmMyQ%2FimzXsZ0Yql%2F%2BEtgasagwq9BQ3DHCQcwwAEDQWsBTX7G3%2B0TpKrqDJzKz7%2F0Z%2FvQsnWZFXEKnouf%2FkZfFFPSz&X-Amz-Signature=221f6af0672e830a94002def71bc01ad795370117099395218b497b5aa6546de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636CPD6JB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPzo2QohBbWDBv3cpUjzBV9N21LN7lNb4jzRpaFlNL7AiBx4nRDYC4M6eSZ8UZq8BMi8AWPFc%2BZZvGbuCRpewdB%2BCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM9MwUIQmtZ8IzGhn5KtwDoJkKk7bSkpm4svU8YkbvEWkZqxt4aNOojtGO7K%2BJMWJn0pEg30uOrNVxNYkshSpFDOM01a5JTBn8%2Ftx0tB%2BnKnbtb%2BxHZwa52CmV8%2BIgWhbHsj%2F6t0UpCD8UvkfBj9axfX20pnpvDEquYPn%2F4AtM7hpMG6Pe9Ij%2BC5IOvGGbVUdSI0xBJwPP1lqCiZJ7tblLGd%2BT6EHq5hIBXqy34ZsCKvNhu%2BhJsO%2BQhnX614pZasuFvuuj%2B9x%2BG3x%2BorQEao%2B5GkgSRQ1uPUIUHNAciqSE2%2FQd7nIeqVWlvuskmFoabTPID5lsRn3iT%2F4eSXXXzJrW%2FPUQJA8Wn3Jxu%2Fax8IFGR8dqwRtXYdxoxlusJWJr2BMguVWXQ6wPI4frv5Toc7yM5ZJxf4Uwhmj%2FjC9Xkdc4gT%2Fq%2B%2FMHoJ6qDm9U07j7SGwSgK4GE3VukDoRVT4oHzZb8U9YFvX4AyV1uScrvTtz2ZlYwsGP1D8U3ODt4QzQYi%2F%2FrA4XdyAmG9kDa1ou1wY1tg8X4E%2BMMh%2BLlF6YVyM9mfmyo6mAMSezdp9mzdOLdDqzPqPmR%2B9C8n8UHu8jhZgUOUBgkf%2BW85WEHze02e8hsrOojJrpdIHaO6mnCX6Qto1Lj196rQ7ELpgdLQ4wwtm%2BxAY6pgE1jvpAi0NeuU8KAAma3p29MZyVLOhKW96xZfREkG%2BTnIKYb%2FfaR7OpA%2FBwIypejOwmi469jBcMouS%2FHYjQhuIFRocMOHXcmuimKitpG0xQCeJ9LA3jMJ7KlnNcR0nFnBBTykEmMyQ%2FimzXsZ0Yql%2F%2BEtgasagwq9BQ3DHCQcwwAEDQWsBTX7G3%2B0TpKrqDJzKz7%2F0Z%2FvQsnWZFXEKnouf%2FkZfFFPSz&X-Amz-Signature=6140691409b839cffa90ff8eec2c9cccc9a2dbba54571f51ab7e06a40320b21f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636CPD6JB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPzo2QohBbWDBv3cpUjzBV9N21LN7lNb4jzRpaFlNL7AiBx4nRDYC4M6eSZ8UZq8BMi8AWPFc%2BZZvGbuCRpewdB%2BCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM9MwUIQmtZ8IzGhn5KtwDoJkKk7bSkpm4svU8YkbvEWkZqxt4aNOojtGO7K%2BJMWJn0pEg30uOrNVxNYkshSpFDOM01a5JTBn8%2Ftx0tB%2BnKnbtb%2BxHZwa52CmV8%2BIgWhbHsj%2F6t0UpCD8UvkfBj9axfX20pnpvDEquYPn%2F4AtM7hpMG6Pe9Ij%2BC5IOvGGbVUdSI0xBJwPP1lqCiZJ7tblLGd%2BT6EHq5hIBXqy34ZsCKvNhu%2BhJsO%2BQhnX614pZasuFvuuj%2B9x%2BG3x%2BorQEao%2B5GkgSRQ1uPUIUHNAciqSE2%2FQd7nIeqVWlvuskmFoabTPID5lsRn3iT%2F4eSXXXzJrW%2FPUQJA8Wn3Jxu%2Fax8IFGR8dqwRtXYdxoxlusJWJr2BMguVWXQ6wPI4frv5Toc7yM5ZJxf4Uwhmj%2FjC9Xkdc4gT%2Fq%2B%2FMHoJ6qDm9U07j7SGwSgK4GE3VukDoRVT4oHzZb8U9YFvX4AyV1uScrvTtz2ZlYwsGP1D8U3ODt4QzQYi%2F%2FrA4XdyAmG9kDa1ou1wY1tg8X4E%2BMMh%2BLlF6YVyM9mfmyo6mAMSezdp9mzdOLdDqzPqPmR%2B9C8n8UHu8jhZgUOUBgkf%2BW85WEHze02e8hsrOojJrpdIHaO6mnCX6Qto1Lj196rQ7ELpgdLQ4wwtm%2BxAY6pgE1jvpAi0NeuU8KAAma3p29MZyVLOhKW96xZfREkG%2BTnIKYb%2FfaR7OpA%2FBwIypejOwmi469jBcMouS%2FHYjQhuIFRocMOHXcmuimKitpG0xQCeJ9LA3jMJ7KlnNcR0nFnBBTykEmMyQ%2FimzXsZ0Yql%2F%2BEtgasagwq9BQ3DHCQcwwAEDQWsBTX7G3%2B0TpKrqDJzKz7%2F0Z%2FvQsnWZFXEKnouf%2FkZfFFPSz&X-Amz-Signature=13b1d8483a5414479828b962a33bbc708f8c816536c86d5ad603a84b955dd41b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636CPD6JB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPzo2QohBbWDBv3cpUjzBV9N21LN7lNb4jzRpaFlNL7AiBx4nRDYC4M6eSZ8UZq8BMi8AWPFc%2BZZvGbuCRpewdB%2BCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM9MwUIQmtZ8IzGhn5KtwDoJkKk7bSkpm4svU8YkbvEWkZqxt4aNOojtGO7K%2BJMWJn0pEg30uOrNVxNYkshSpFDOM01a5JTBn8%2Ftx0tB%2BnKnbtb%2BxHZwa52CmV8%2BIgWhbHsj%2F6t0UpCD8UvkfBj9axfX20pnpvDEquYPn%2F4AtM7hpMG6Pe9Ij%2BC5IOvGGbVUdSI0xBJwPP1lqCiZJ7tblLGd%2BT6EHq5hIBXqy34ZsCKvNhu%2BhJsO%2BQhnX614pZasuFvuuj%2B9x%2BG3x%2BorQEao%2B5GkgSRQ1uPUIUHNAciqSE2%2FQd7nIeqVWlvuskmFoabTPID5lsRn3iT%2F4eSXXXzJrW%2FPUQJA8Wn3Jxu%2Fax8IFGR8dqwRtXYdxoxlusJWJr2BMguVWXQ6wPI4frv5Toc7yM5ZJxf4Uwhmj%2FjC9Xkdc4gT%2Fq%2B%2FMHoJ6qDm9U07j7SGwSgK4GE3VukDoRVT4oHzZb8U9YFvX4AyV1uScrvTtz2ZlYwsGP1D8U3ODt4QzQYi%2F%2FrA4XdyAmG9kDa1ou1wY1tg8X4E%2BMMh%2BLlF6YVyM9mfmyo6mAMSezdp9mzdOLdDqzPqPmR%2B9C8n8UHu8jhZgUOUBgkf%2BW85WEHze02e8hsrOojJrpdIHaO6mnCX6Qto1Lj196rQ7ELpgdLQ4wwtm%2BxAY6pgE1jvpAi0NeuU8KAAma3p29MZyVLOhKW96xZfREkG%2BTnIKYb%2FfaR7OpA%2FBwIypejOwmi469jBcMouS%2FHYjQhuIFRocMOHXcmuimKitpG0xQCeJ9LA3jMJ7KlnNcR0nFnBBTykEmMyQ%2FimzXsZ0Yql%2F%2BEtgasagwq9BQ3DHCQcwwAEDQWsBTX7G3%2B0TpKrqDJzKz7%2F0Z%2FvQsnWZFXEKnouf%2FkZfFFPSz&X-Amz-Signature=b0955d250ad578ee594cb36979671459353b1d5209fa444740176481aa0cd17a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
