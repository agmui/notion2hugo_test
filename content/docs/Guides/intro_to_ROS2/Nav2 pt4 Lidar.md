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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH5FW7QM%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDp8WqfrrQiddURp5fHN6ETlIr138I2DZasR60zBMBPygIgRzivTP2FTiFziRybxH75Aq%2F3Uf20t36IDATPmSY0tj0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDMEKNmcigW8%2BkM%2FKbyrcA9exqcDOYL11M9RyIl4wLMd7gEa%2BPLfF%2Bnm1FrE%2Bqejq0iMC%2B1D1dLmq9AHiA1osaV%2B5NyusGwfdF4u2DnUVMpGbQVNCoyk1%2FDFeu9rZWAzYNG8NBZti2pJz6UGJ3j0Rp%2Fhqf%2FWFqorKjZOqZuKCq6oCWdgk8MkFraG1MpzMC6mffLz9sSqWOCdD95d6WyAtlTAdX6Xx2NjFYHyrM%2BEiBBBNQwc%2Bkscv64UzEmUr9P57YxhoYiMf7ZdJMkgjGrbYboqDQQv0enXnvFSh3QIOrx7lSM1Oq96fW5zKCTWYQbDuDvX%2Bem1dLRrr%2Fc0KGEj%2FlV8UDdI2IEHVgXEmLJp9QZ0Qfiki4X9BXsd7bElAwzPwAEOydiKJPvouuLEE4Zsgg0hL1ips18zBKqoi%2BiLdVhbW8V2TIFGs9Cerm4LECuXHQbVRXWeh%2FicZfs7POsgW04bn%2BqzCpgN55ij57pFbb79vmmokvrStmcZI%2FL%2BimNtcclzAi45%2BCAf8j%2F5ST0Nfqk64unOCgr33ZznG%2BrnebgN%2FUuML75bUOTFXRVV%2Fhps2igOmJJ0sjzZRjnPjG1kgMgEgASCdP9pAlj4LaQbtaGQOBxacXTKF8tjnTGGa2xj4KdPa19U6a8x4TOh%2FMOOYz8wGOqUBi5qC3kXXGlza%2BvziaRp3qrPHFkpHhsNdFtRIjoxrEyPy%2FrfOm%2FZmyRkW7qF%2B3ZIYbwI5%2BUXiveQuX8IzEizgrFhmkOezhqMCsgzKUQTFIEVmuueabn8LQqOfqmjlbQp1tCLmqaeUcIVqli0K3raBTC3XdIW6cHGfruEKCxi4PJ7K9yYmKn8uqo13QTO0INYtgPEckfJgAmdEaxfeEa28uucE%2B4IN&X-Amz-Signature=bfa1f733151307ab55fc7ab170e973538cea6a924bbc3aba1bbf7e22406dcb88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAOKEIHL%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCDSa5cN4t4vp0OZ8%2F0JxiYR5q4%2F8AJmGUWU%2Fe7JvaqgAIhANKSE6CY4XzLw0jck8MVOF7L4vaXu0jEYfVfnMYxfGl4Kv8DCEMQABoMNjM3NDIzMTgzODA1IgytUVFBvRFDDJWi1cIq3AMm7n8VwAaDaid2MfJa79fEaL3qNA7nXoB%2FRacxHAWIb9ZF8Ycoh82aNc94IfvjVanWKvgiPCFEvBTZP4eRvpMBBvT4zNBjflYUEdC7AvzoC5C2VqXyNQwzLc24zK%2FreiMwHmCUIvmV2c8IagYBoKt3bq0IG1aB9lPgM7fsbn99k5vaIkqX8%2Bf6SvUiMZaRNC6Ed8UGsEeW6TalMNLWKlKsdEDNkCrrtTeDyEw9OBmVFEzZuyMqbQq4IxsCDwOdL4Bqk8Xhp2crAKQMWWsjlj6%2BQpE2vQZ00u4mQtXDDakFBJZ9mqnhWMkcP4YJchQ30iyXi%2BN8GnWDzJ4ysufJyiW%2BBNcICXSsBCcJK4wxya9wZKkrVd2n0STrV9B%2BRjVrmTEYmlJl2kXm%2BcKjO2P5%2F3aaKegxJVcm95LUoy1lCdrRH1QRCIS2i3wjIKE0Jpwn4Hojbb4z5nbL7Dg8ljXEOEk2KrkdFR1uOGxGn4Wn9MCw4WWjGDdSWMeLRfaG6dDmxsS11gSEvg0V3eLesEgr8jtUyPM4H%2BYkdk241TDck2RavKYROZ56rwMfbxRLJQ%2FU%2BOJKjpnh3%2B4Uqvp7pBZafQ72HxeF%2FY9Bo%2BvlenxBINjhO92IaLA2ENm01heaZDDJl8%2FMBjqkAcaypOmhbBtmC%2B9XHetykueV59yOy4NxkH1FErr03ngb%2F%2FyPRqQgy95kdZBBQyts509XVXfnYL%2BI5elhUqVrTPtBIFNB15npc6V%2FpoHXAe3k8lXlGHvUcbA7O3LRQLZID4uDU8W3m9WYbPf62TqOZQOO8LgEhACvL1RJsD%2BAcn3kPEQzbsbZ2acwoO1MMNUYEsgZFUO7yVnTd%2B8MeAwbVrjszu7Y&X-Amz-Signature=66a6e8373ddf9454aaf07e1ef6d2f864562288a7cef09dde1ac9f1306fedbffd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAOKEIHL%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCDSa5cN4t4vp0OZ8%2F0JxiYR5q4%2F8AJmGUWU%2Fe7JvaqgAIhANKSE6CY4XzLw0jck8MVOF7L4vaXu0jEYfVfnMYxfGl4Kv8DCEMQABoMNjM3NDIzMTgzODA1IgytUVFBvRFDDJWi1cIq3AMm7n8VwAaDaid2MfJa79fEaL3qNA7nXoB%2FRacxHAWIb9ZF8Ycoh82aNc94IfvjVanWKvgiPCFEvBTZP4eRvpMBBvT4zNBjflYUEdC7AvzoC5C2VqXyNQwzLc24zK%2FreiMwHmCUIvmV2c8IagYBoKt3bq0IG1aB9lPgM7fsbn99k5vaIkqX8%2Bf6SvUiMZaRNC6Ed8UGsEeW6TalMNLWKlKsdEDNkCrrtTeDyEw9OBmVFEzZuyMqbQq4IxsCDwOdL4Bqk8Xhp2crAKQMWWsjlj6%2BQpE2vQZ00u4mQtXDDakFBJZ9mqnhWMkcP4YJchQ30iyXi%2BN8GnWDzJ4ysufJyiW%2BBNcICXSsBCcJK4wxya9wZKkrVd2n0STrV9B%2BRjVrmTEYmlJl2kXm%2BcKjO2P5%2F3aaKegxJVcm95LUoy1lCdrRH1QRCIS2i3wjIKE0Jpwn4Hojbb4z5nbL7Dg8ljXEOEk2KrkdFR1uOGxGn4Wn9MCw4WWjGDdSWMeLRfaG6dDmxsS11gSEvg0V3eLesEgr8jtUyPM4H%2BYkdk241TDck2RavKYROZ56rwMfbxRLJQ%2FU%2BOJKjpnh3%2B4Uqvp7pBZafQ72HxeF%2FY9Bo%2BvlenxBINjhO92IaLA2ENm01heaZDDJl8%2FMBjqkAcaypOmhbBtmC%2B9XHetykueV59yOy4NxkH1FErr03ngb%2F%2FyPRqQgy95kdZBBQyts509XVXfnYL%2BI5elhUqVrTPtBIFNB15npc6V%2FpoHXAe3k8lXlGHvUcbA7O3LRQLZID4uDU8W3m9WYbPf62TqOZQOO8LgEhACvL1RJsD%2BAcn3kPEQzbsbZ2acwoO1MMNUYEsgZFUO7yVnTd%2B8MeAwbVrjszu7Y&X-Amz-Signature=a3e6356e389f5f6a8847d3f7be4c52467f8993a6fad68f83521667d5c1c58531&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAOKEIHL%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCDSa5cN4t4vp0OZ8%2F0JxiYR5q4%2F8AJmGUWU%2Fe7JvaqgAIhANKSE6CY4XzLw0jck8MVOF7L4vaXu0jEYfVfnMYxfGl4Kv8DCEMQABoMNjM3NDIzMTgzODA1IgytUVFBvRFDDJWi1cIq3AMm7n8VwAaDaid2MfJa79fEaL3qNA7nXoB%2FRacxHAWIb9ZF8Ycoh82aNc94IfvjVanWKvgiPCFEvBTZP4eRvpMBBvT4zNBjflYUEdC7AvzoC5C2VqXyNQwzLc24zK%2FreiMwHmCUIvmV2c8IagYBoKt3bq0IG1aB9lPgM7fsbn99k5vaIkqX8%2Bf6SvUiMZaRNC6Ed8UGsEeW6TalMNLWKlKsdEDNkCrrtTeDyEw9OBmVFEzZuyMqbQq4IxsCDwOdL4Bqk8Xhp2crAKQMWWsjlj6%2BQpE2vQZ00u4mQtXDDakFBJZ9mqnhWMkcP4YJchQ30iyXi%2BN8GnWDzJ4ysufJyiW%2BBNcICXSsBCcJK4wxya9wZKkrVd2n0STrV9B%2BRjVrmTEYmlJl2kXm%2BcKjO2P5%2F3aaKegxJVcm95LUoy1lCdrRH1QRCIS2i3wjIKE0Jpwn4Hojbb4z5nbL7Dg8ljXEOEk2KrkdFR1uOGxGn4Wn9MCw4WWjGDdSWMeLRfaG6dDmxsS11gSEvg0V3eLesEgr8jtUyPM4H%2BYkdk241TDck2RavKYROZ56rwMfbxRLJQ%2FU%2BOJKjpnh3%2B4Uqvp7pBZafQ72HxeF%2FY9Bo%2BvlenxBINjhO92IaLA2ENm01heaZDDJl8%2FMBjqkAcaypOmhbBtmC%2B9XHetykueV59yOy4NxkH1FErr03ngb%2F%2FyPRqQgy95kdZBBQyts509XVXfnYL%2BI5elhUqVrTPtBIFNB15npc6V%2FpoHXAe3k8lXlGHvUcbA7O3LRQLZID4uDU8W3m9WYbPf62TqOZQOO8LgEhACvL1RJsD%2BAcn3kPEQzbsbZ2acwoO1MMNUYEsgZFUO7yVnTd%2B8MeAwbVrjszu7Y&X-Amz-Signature=0c1de7f2b27d15695a0bcbdf2bbf88528ce240c19f9ba4390bf5660ca1032820&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAOKEIHL%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCDSa5cN4t4vp0OZ8%2F0JxiYR5q4%2F8AJmGUWU%2Fe7JvaqgAIhANKSE6CY4XzLw0jck8MVOF7L4vaXu0jEYfVfnMYxfGl4Kv8DCEMQABoMNjM3NDIzMTgzODA1IgytUVFBvRFDDJWi1cIq3AMm7n8VwAaDaid2MfJa79fEaL3qNA7nXoB%2FRacxHAWIb9ZF8Ycoh82aNc94IfvjVanWKvgiPCFEvBTZP4eRvpMBBvT4zNBjflYUEdC7AvzoC5C2VqXyNQwzLc24zK%2FreiMwHmCUIvmV2c8IagYBoKt3bq0IG1aB9lPgM7fsbn99k5vaIkqX8%2Bf6SvUiMZaRNC6Ed8UGsEeW6TalMNLWKlKsdEDNkCrrtTeDyEw9OBmVFEzZuyMqbQq4IxsCDwOdL4Bqk8Xhp2crAKQMWWsjlj6%2BQpE2vQZ00u4mQtXDDakFBJZ9mqnhWMkcP4YJchQ30iyXi%2BN8GnWDzJ4ysufJyiW%2BBNcICXSsBCcJK4wxya9wZKkrVd2n0STrV9B%2BRjVrmTEYmlJl2kXm%2BcKjO2P5%2F3aaKegxJVcm95LUoy1lCdrRH1QRCIS2i3wjIKE0Jpwn4Hojbb4z5nbL7Dg8ljXEOEk2KrkdFR1uOGxGn4Wn9MCw4WWjGDdSWMeLRfaG6dDmxsS11gSEvg0V3eLesEgr8jtUyPM4H%2BYkdk241TDck2RavKYROZ56rwMfbxRLJQ%2FU%2BOJKjpnh3%2B4Uqvp7pBZafQ72HxeF%2FY9Bo%2BvlenxBINjhO92IaLA2ENm01heaZDDJl8%2FMBjqkAcaypOmhbBtmC%2B9XHetykueV59yOy4NxkH1FErr03ngb%2F%2FyPRqQgy95kdZBBQyts509XVXfnYL%2BI5elhUqVrTPtBIFNB15npc6V%2FpoHXAe3k8lXlGHvUcbA7O3LRQLZID4uDU8W3m9WYbPf62TqOZQOO8LgEhACvL1RJsD%2BAcn3kPEQzbsbZ2acwoO1MMNUYEsgZFUO7yVnTd%2B8MeAwbVrjszu7Y&X-Amz-Signature=e1f0199d554f1476c29260b1f15c0639f1744910df8153f44e28b8d2b167dcfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAOKEIHL%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCDSa5cN4t4vp0OZ8%2F0JxiYR5q4%2F8AJmGUWU%2Fe7JvaqgAIhANKSE6CY4XzLw0jck8MVOF7L4vaXu0jEYfVfnMYxfGl4Kv8DCEMQABoMNjM3NDIzMTgzODA1IgytUVFBvRFDDJWi1cIq3AMm7n8VwAaDaid2MfJa79fEaL3qNA7nXoB%2FRacxHAWIb9ZF8Ycoh82aNc94IfvjVanWKvgiPCFEvBTZP4eRvpMBBvT4zNBjflYUEdC7AvzoC5C2VqXyNQwzLc24zK%2FreiMwHmCUIvmV2c8IagYBoKt3bq0IG1aB9lPgM7fsbn99k5vaIkqX8%2Bf6SvUiMZaRNC6Ed8UGsEeW6TalMNLWKlKsdEDNkCrrtTeDyEw9OBmVFEzZuyMqbQq4IxsCDwOdL4Bqk8Xhp2crAKQMWWsjlj6%2BQpE2vQZ00u4mQtXDDakFBJZ9mqnhWMkcP4YJchQ30iyXi%2BN8GnWDzJ4ysufJyiW%2BBNcICXSsBCcJK4wxya9wZKkrVd2n0STrV9B%2BRjVrmTEYmlJl2kXm%2BcKjO2P5%2F3aaKegxJVcm95LUoy1lCdrRH1QRCIS2i3wjIKE0Jpwn4Hojbb4z5nbL7Dg8ljXEOEk2KrkdFR1uOGxGn4Wn9MCw4WWjGDdSWMeLRfaG6dDmxsS11gSEvg0V3eLesEgr8jtUyPM4H%2BYkdk241TDck2RavKYROZ56rwMfbxRLJQ%2FU%2BOJKjpnh3%2B4Uqvp7pBZafQ72HxeF%2FY9Bo%2BvlenxBINjhO92IaLA2ENm01heaZDDJl8%2FMBjqkAcaypOmhbBtmC%2B9XHetykueV59yOy4NxkH1FErr03ngb%2F%2FyPRqQgy95kdZBBQyts509XVXfnYL%2BI5elhUqVrTPtBIFNB15npc6V%2FpoHXAe3k8lXlGHvUcbA7O3LRQLZID4uDU8W3m9WYbPf62TqOZQOO8LgEhACvL1RJsD%2BAcn3kPEQzbsbZ2acwoO1MMNUYEsgZFUO7yVnTd%2B8MeAwbVrjszu7Y&X-Amz-Signature=c88441585f42c9f8b6c85642a082132624b6acfac12ac509609ecd034b5a3096&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAOKEIHL%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCDSa5cN4t4vp0OZ8%2F0JxiYR5q4%2F8AJmGUWU%2Fe7JvaqgAIhANKSE6CY4XzLw0jck8MVOF7L4vaXu0jEYfVfnMYxfGl4Kv8DCEMQABoMNjM3NDIzMTgzODA1IgytUVFBvRFDDJWi1cIq3AMm7n8VwAaDaid2MfJa79fEaL3qNA7nXoB%2FRacxHAWIb9ZF8Ycoh82aNc94IfvjVanWKvgiPCFEvBTZP4eRvpMBBvT4zNBjflYUEdC7AvzoC5C2VqXyNQwzLc24zK%2FreiMwHmCUIvmV2c8IagYBoKt3bq0IG1aB9lPgM7fsbn99k5vaIkqX8%2Bf6SvUiMZaRNC6Ed8UGsEeW6TalMNLWKlKsdEDNkCrrtTeDyEw9OBmVFEzZuyMqbQq4IxsCDwOdL4Bqk8Xhp2crAKQMWWsjlj6%2BQpE2vQZ00u4mQtXDDakFBJZ9mqnhWMkcP4YJchQ30iyXi%2BN8GnWDzJ4ysufJyiW%2BBNcICXSsBCcJK4wxya9wZKkrVd2n0STrV9B%2BRjVrmTEYmlJl2kXm%2BcKjO2P5%2F3aaKegxJVcm95LUoy1lCdrRH1QRCIS2i3wjIKE0Jpwn4Hojbb4z5nbL7Dg8ljXEOEk2KrkdFR1uOGxGn4Wn9MCw4WWjGDdSWMeLRfaG6dDmxsS11gSEvg0V3eLesEgr8jtUyPM4H%2BYkdk241TDck2RavKYROZ56rwMfbxRLJQ%2FU%2BOJKjpnh3%2B4Uqvp7pBZafQ72HxeF%2FY9Bo%2BvlenxBINjhO92IaLA2ENm01heaZDDJl8%2FMBjqkAcaypOmhbBtmC%2B9XHetykueV59yOy4NxkH1FErr03ngb%2F%2FyPRqQgy95kdZBBQyts509XVXfnYL%2BI5elhUqVrTPtBIFNB15npc6V%2FpoHXAe3k8lXlGHvUcbA7O3LRQLZID4uDU8W3m9WYbPf62TqOZQOO8LgEhACvL1RJsD%2BAcn3kPEQzbsbZ2acwoO1MMNUYEsgZFUO7yVnTd%2B8MeAwbVrjszu7Y&X-Amz-Signature=50977b9e7808ec00706e2c35fbf57a862fcd6ef0590be121edcef1a75d2da00d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAOKEIHL%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCDSa5cN4t4vp0OZ8%2F0JxiYR5q4%2F8AJmGUWU%2Fe7JvaqgAIhANKSE6CY4XzLw0jck8MVOF7L4vaXu0jEYfVfnMYxfGl4Kv8DCEMQABoMNjM3NDIzMTgzODA1IgytUVFBvRFDDJWi1cIq3AMm7n8VwAaDaid2MfJa79fEaL3qNA7nXoB%2FRacxHAWIb9ZF8Ycoh82aNc94IfvjVanWKvgiPCFEvBTZP4eRvpMBBvT4zNBjflYUEdC7AvzoC5C2VqXyNQwzLc24zK%2FreiMwHmCUIvmV2c8IagYBoKt3bq0IG1aB9lPgM7fsbn99k5vaIkqX8%2Bf6SvUiMZaRNC6Ed8UGsEeW6TalMNLWKlKsdEDNkCrrtTeDyEw9OBmVFEzZuyMqbQq4IxsCDwOdL4Bqk8Xhp2crAKQMWWsjlj6%2BQpE2vQZ00u4mQtXDDakFBJZ9mqnhWMkcP4YJchQ30iyXi%2BN8GnWDzJ4ysufJyiW%2BBNcICXSsBCcJK4wxya9wZKkrVd2n0STrV9B%2BRjVrmTEYmlJl2kXm%2BcKjO2P5%2F3aaKegxJVcm95LUoy1lCdrRH1QRCIS2i3wjIKE0Jpwn4Hojbb4z5nbL7Dg8ljXEOEk2KrkdFR1uOGxGn4Wn9MCw4WWjGDdSWMeLRfaG6dDmxsS11gSEvg0V3eLesEgr8jtUyPM4H%2BYkdk241TDck2RavKYROZ56rwMfbxRLJQ%2FU%2BOJKjpnh3%2B4Uqvp7pBZafQ72HxeF%2FY9Bo%2BvlenxBINjhO92IaLA2ENm01heaZDDJl8%2FMBjqkAcaypOmhbBtmC%2B9XHetykueV59yOy4NxkH1FErr03ngb%2F%2FyPRqQgy95kdZBBQyts509XVXfnYL%2BI5elhUqVrTPtBIFNB15npc6V%2FpoHXAe3k8lXlGHvUcbA7O3LRQLZID4uDU8W3m9WYbPf62TqOZQOO8LgEhACvL1RJsD%2BAcn3kPEQzbsbZ2acwoO1MMNUYEsgZFUO7yVnTd%2B8MeAwbVrjszu7Y&X-Amz-Signature=e5cb2d3e3fb862f13f4718850643ab5f86f499dfb06b2fbee9d0a5a859ea5f5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAOKEIHL%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCDSa5cN4t4vp0OZ8%2F0JxiYR5q4%2F8AJmGUWU%2Fe7JvaqgAIhANKSE6CY4XzLw0jck8MVOF7L4vaXu0jEYfVfnMYxfGl4Kv8DCEMQABoMNjM3NDIzMTgzODA1IgytUVFBvRFDDJWi1cIq3AMm7n8VwAaDaid2MfJa79fEaL3qNA7nXoB%2FRacxHAWIb9ZF8Ycoh82aNc94IfvjVanWKvgiPCFEvBTZP4eRvpMBBvT4zNBjflYUEdC7AvzoC5C2VqXyNQwzLc24zK%2FreiMwHmCUIvmV2c8IagYBoKt3bq0IG1aB9lPgM7fsbn99k5vaIkqX8%2Bf6SvUiMZaRNC6Ed8UGsEeW6TalMNLWKlKsdEDNkCrrtTeDyEw9OBmVFEzZuyMqbQq4IxsCDwOdL4Bqk8Xhp2crAKQMWWsjlj6%2BQpE2vQZ00u4mQtXDDakFBJZ9mqnhWMkcP4YJchQ30iyXi%2BN8GnWDzJ4ysufJyiW%2BBNcICXSsBCcJK4wxya9wZKkrVd2n0STrV9B%2BRjVrmTEYmlJl2kXm%2BcKjO2P5%2F3aaKegxJVcm95LUoy1lCdrRH1QRCIS2i3wjIKE0Jpwn4Hojbb4z5nbL7Dg8ljXEOEk2KrkdFR1uOGxGn4Wn9MCw4WWjGDdSWMeLRfaG6dDmxsS11gSEvg0V3eLesEgr8jtUyPM4H%2BYkdk241TDck2RavKYROZ56rwMfbxRLJQ%2FU%2BOJKjpnh3%2B4Uqvp7pBZafQ72HxeF%2FY9Bo%2BvlenxBINjhO92IaLA2ENm01heaZDDJl8%2FMBjqkAcaypOmhbBtmC%2B9XHetykueV59yOy4NxkH1FErr03ngb%2F%2FyPRqQgy95kdZBBQyts509XVXfnYL%2BI5elhUqVrTPtBIFNB15npc6V%2FpoHXAe3k8lXlGHvUcbA7O3LRQLZID4uDU8W3m9WYbPf62TqOZQOO8LgEhACvL1RJsD%2BAcn3kPEQzbsbZ2acwoO1MMNUYEsgZFUO7yVnTd%2B8MeAwbVrjszu7Y&X-Amz-Signature=af8db9a1e12a01739e3e8f2fc2fe883d93a0b40d878beb54554ffda8dfd8ab84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAOKEIHL%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCDSa5cN4t4vp0OZ8%2F0JxiYR5q4%2F8AJmGUWU%2Fe7JvaqgAIhANKSE6CY4XzLw0jck8MVOF7L4vaXu0jEYfVfnMYxfGl4Kv8DCEMQABoMNjM3NDIzMTgzODA1IgytUVFBvRFDDJWi1cIq3AMm7n8VwAaDaid2MfJa79fEaL3qNA7nXoB%2FRacxHAWIb9ZF8Ycoh82aNc94IfvjVanWKvgiPCFEvBTZP4eRvpMBBvT4zNBjflYUEdC7AvzoC5C2VqXyNQwzLc24zK%2FreiMwHmCUIvmV2c8IagYBoKt3bq0IG1aB9lPgM7fsbn99k5vaIkqX8%2Bf6SvUiMZaRNC6Ed8UGsEeW6TalMNLWKlKsdEDNkCrrtTeDyEw9OBmVFEzZuyMqbQq4IxsCDwOdL4Bqk8Xhp2crAKQMWWsjlj6%2BQpE2vQZ00u4mQtXDDakFBJZ9mqnhWMkcP4YJchQ30iyXi%2BN8GnWDzJ4ysufJyiW%2BBNcICXSsBCcJK4wxya9wZKkrVd2n0STrV9B%2BRjVrmTEYmlJl2kXm%2BcKjO2P5%2F3aaKegxJVcm95LUoy1lCdrRH1QRCIS2i3wjIKE0Jpwn4Hojbb4z5nbL7Dg8ljXEOEk2KrkdFR1uOGxGn4Wn9MCw4WWjGDdSWMeLRfaG6dDmxsS11gSEvg0V3eLesEgr8jtUyPM4H%2BYkdk241TDck2RavKYROZ56rwMfbxRLJQ%2FU%2BOJKjpnh3%2B4Uqvp7pBZafQ72HxeF%2FY9Bo%2BvlenxBINjhO92IaLA2ENm01heaZDDJl8%2FMBjqkAcaypOmhbBtmC%2B9XHetykueV59yOy4NxkH1FErr03ngb%2F%2FyPRqQgy95kdZBBQyts509XVXfnYL%2BI5elhUqVrTPtBIFNB15npc6V%2FpoHXAe3k8lXlGHvUcbA7O3LRQLZID4uDU8W3m9WYbPf62TqOZQOO8LgEhACvL1RJsD%2BAcn3kPEQzbsbZ2acwoO1MMNUYEsgZFUO7yVnTd%2B8MeAwbVrjszu7Y&X-Amz-Signature=85728814c713fff0944e0b0cdc063b0fa2480c13ae11569a4603ed09f13ce4f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAOKEIHL%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCDSa5cN4t4vp0OZ8%2F0JxiYR5q4%2F8AJmGUWU%2Fe7JvaqgAIhANKSE6CY4XzLw0jck8MVOF7L4vaXu0jEYfVfnMYxfGl4Kv8DCEMQABoMNjM3NDIzMTgzODA1IgytUVFBvRFDDJWi1cIq3AMm7n8VwAaDaid2MfJa79fEaL3qNA7nXoB%2FRacxHAWIb9ZF8Ycoh82aNc94IfvjVanWKvgiPCFEvBTZP4eRvpMBBvT4zNBjflYUEdC7AvzoC5C2VqXyNQwzLc24zK%2FreiMwHmCUIvmV2c8IagYBoKt3bq0IG1aB9lPgM7fsbn99k5vaIkqX8%2Bf6SvUiMZaRNC6Ed8UGsEeW6TalMNLWKlKsdEDNkCrrtTeDyEw9OBmVFEzZuyMqbQq4IxsCDwOdL4Bqk8Xhp2crAKQMWWsjlj6%2BQpE2vQZ00u4mQtXDDakFBJZ9mqnhWMkcP4YJchQ30iyXi%2BN8GnWDzJ4ysufJyiW%2BBNcICXSsBCcJK4wxya9wZKkrVd2n0STrV9B%2BRjVrmTEYmlJl2kXm%2BcKjO2P5%2F3aaKegxJVcm95LUoy1lCdrRH1QRCIS2i3wjIKE0Jpwn4Hojbb4z5nbL7Dg8ljXEOEk2KrkdFR1uOGxGn4Wn9MCw4WWjGDdSWMeLRfaG6dDmxsS11gSEvg0V3eLesEgr8jtUyPM4H%2BYkdk241TDck2RavKYROZ56rwMfbxRLJQ%2FU%2BOJKjpnh3%2B4Uqvp7pBZafQ72HxeF%2FY9Bo%2BvlenxBINjhO92IaLA2ENm01heaZDDJl8%2FMBjqkAcaypOmhbBtmC%2B9XHetykueV59yOy4NxkH1FErr03ngb%2F%2FyPRqQgy95kdZBBQyts509XVXfnYL%2BI5elhUqVrTPtBIFNB15npc6V%2FpoHXAe3k8lXlGHvUcbA7O3LRQLZID4uDU8W3m9WYbPf62TqOZQOO8LgEhACvL1RJsD%2BAcn3kPEQzbsbZ2acwoO1MMNUYEsgZFUO7yVnTd%2B8MeAwbVrjszu7Y&X-Amz-Signature=e1f0199d554f1476c29260b1f15c0639f1744910df8153f44e28b8d2b167dcfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
