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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YV6PAGV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDibvrHrRrFSuIjGXFtnTvr%2FZgH2pv1L%2BjJkF7mBM%2FvpgIhAMdSA5WU7NYkLmMh%2B5xS1%2FEX9ZZAdTjwsJs1CFqd81PmKv8DCBAQABoMNjM3NDIzMTgzODA1Igy40eBZobkNnmIz0ssq3AMPlwwZskp1texmWEp3aVOsYcjfTl%2Bg5xNsVjo9nmOK4ZnbqYV%2FpQfBqdZVS9AzZtC6unBA4oJYbJ0alXJVzr%2Bv0iRULaJH4QL5xXte8cSKYm7GlyLMpvWbkhXWGDYDbhfOvR6QYdQ9wN6fP7PDXcyCaiZ3kUCSNJqFUtYDGpZ%2ByNtHCDsOZ5EfkQomMj%2FFn1bMp7Acm3mB%2F8Ly5T8hpaOR4oZJ7sz%2FX5ntTR3V2uKrNqYfyYk6%2By3wGe%2BJGKn9EqbxFyQqiEC63DV97wN2wqvSXnMydH1BD0Ntn8dY2TQw6wvx9IcfKDS5XGxTIRnwIRgMtB9k7OlkWkkzt1FY0miraGRdmmtmj%2FtZVWQw6EquWJ3TCOf5y8ErwjQ6jN9PHiO9Sd%2FIeuwb8uVFIcx%2FtjBNOyE5SSCK2Ebv7F1OauFZAe%2F854Z6uBABXNihtMDDIwSuas5d9A4LTEajtv0o65N4H3%2BqS36kkA3iPiJduqXPSEcAYj04EHWM8OKSwPI4c05NEZaRCJuiTD42JtElS2CHmKTArD79mX9Lo5oyegKEl2j9sUOKH3Cje4VDdOjrOHkjx6HSS72MI%2FLft%2B%2F1zpwWFLei91izXtOfdVrnbNT6pvwIbzSlCD8aiPMgHjD077bEBjqkAYzvmfcOZ5s6x6dqiR7%2BFurInE1LEiKeySNSZ0HR4xAQ7A2mEi8lRbLjWQwL4rAuJC3t0%2BT4Z1r%2BHEOlsIXVaCWoUgBo8w8uIDvFZ%2FN36WFuUUOTmGSkfBPAEkCa8L%2BjSnNkcOibpUVUGY9JWQbbJwsx1rsKoRZ58ABWK56obQZ%2BVRQ8YFtIHjHrbUP5aiLP57TXwP64R56Rez5YVsiYJ6Z0orA0&X-Amz-Signature=8ea5ed6a9c2c52a5907aa00d71655b043db1c7df367b6f529b6ca1d20b65a153&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM6XS7RX%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFbPajE78lleJH31r9oxH8Cl54l84mFyLlDorFGNP0EwIhALap9u%2BNHBdmXtF2X7zbkY7jBVTczLGeROIHUonn7nGQKv8DCBAQABoMNjM3NDIzMTgzODA1IgzLPHrlsJfoP1rDhIoq3AOmcjrtL%2FmQ98CdEqIolb8re%2FUVU%2Bx%2BylzcPzARQhDxGNg%2B%2FyxNxNnd3%2Bysgr%2BZz7TZVqHaGkqnmEVppcC43v9wMs%2B9248%2B2Xz69tOtLyg529xTeW9LNHF3ESsOxSGydWefjZ6e66%2BYXHuCIRo%2FTdxTyT16pKRV%2F17NTQ%2FzDBZ4L2GTCnGyCWaKOQ0wzGrHdqaDZWELagHTSdmVyTRC3F0xRtKGiiTx1A6LG9Zzh8asQppQOwaAmrso7ADmX3HVp4SVeXM83U3x1ykl0L4uROnk13yPXktJ1VU5l0eZZ%2F4q7p2C%2Fxl1yIVFyRTD9BbzmPzBIljQmhQ9ytvrJ2%2FuGeAr%2FmM7xTl1o%2BAubdpCylWkekPf8mspSBC68r0LrgQitFKt6LJyvkEWYfsZ2eecWHmiVM30kbK1uvXD56Yum%2BlY4TFmcSicX%2BOLplCYol233N0gUjhkAqzANx%2B1CqFfz3GHLuSZ5F%2BPXxpFaDr5%2BkAKZ93YhJph5MHqQ23jszE%2B41LArL5Tnt0yDvHTQQ3Qfvl1luTZkwX3JJYiDFCGGDwX1F3WZrw%2BJeGHl3ynOYFm9KhckmgYFs8ORbdLmvgECHQleIeD5wG%2F55vMd%2Bv7UN7HFaDdbWWHB7Q44GvpMTCc8LbEBjqkAQwW%2BA4qEZxceJa0JNjTeUP%2BoHfBi7dnWYeq8JH7euEYxwKQ%2FUZKBVNFcwShiF1VYyBmJMcPw4hmP6AzdKD74ZdXi3pqsH43EEm31zsaXi4JxzeVvczc0dFGEpt0lO2EkWkMgdtIeOjDK9mpd1%2BuB46Z7gKfpU6Fao75epDKc7Pjqb5XdXFByvdjEkrI1sI26ds3Ays0fpuWYQzKBj%2BqNGL8TwgI&X-Amz-Signature=31e49407dbccf90b3ac6b9f5f378226bb42007009cdf5ae57f17f89519cf5206&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM6XS7RX%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFbPajE78lleJH31r9oxH8Cl54l84mFyLlDorFGNP0EwIhALap9u%2BNHBdmXtF2X7zbkY7jBVTczLGeROIHUonn7nGQKv8DCBAQABoMNjM3NDIzMTgzODA1IgzLPHrlsJfoP1rDhIoq3AOmcjrtL%2FmQ98CdEqIolb8re%2FUVU%2Bx%2BylzcPzARQhDxGNg%2B%2FyxNxNnd3%2Bysgr%2BZz7TZVqHaGkqnmEVppcC43v9wMs%2B9248%2B2Xz69tOtLyg529xTeW9LNHF3ESsOxSGydWefjZ6e66%2BYXHuCIRo%2FTdxTyT16pKRV%2F17NTQ%2FzDBZ4L2GTCnGyCWaKOQ0wzGrHdqaDZWELagHTSdmVyTRC3F0xRtKGiiTx1A6LG9Zzh8asQppQOwaAmrso7ADmX3HVp4SVeXM83U3x1ykl0L4uROnk13yPXktJ1VU5l0eZZ%2F4q7p2C%2Fxl1yIVFyRTD9BbzmPzBIljQmhQ9ytvrJ2%2FuGeAr%2FmM7xTl1o%2BAubdpCylWkekPf8mspSBC68r0LrgQitFKt6LJyvkEWYfsZ2eecWHmiVM30kbK1uvXD56Yum%2BlY4TFmcSicX%2BOLplCYol233N0gUjhkAqzANx%2B1CqFfz3GHLuSZ5F%2BPXxpFaDr5%2BkAKZ93YhJph5MHqQ23jszE%2B41LArL5Tnt0yDvHTQQ3Qfvl1luTZkwX3JJYiDFCGGDwX1F3WZrw%2BJeGHl3ynOYFm9KhckmgYFs8ORbdLmvgECHQleIeD5wG%2F55vMd%2Bv7UN7HFaDdbWWHB7Q44GvpMTCc8LbEBjqkAQwW%2BA4qEZxceJa0JNjTeUP%2BoHfBi7dnWYeq8JH7euEYxwKQ%2FUZKBVNFcwShiF1VYyBmJMcPw4hmP6AzdKD74ZdXi3pqsH43EEm31zsaXi4JxzeVvczc0dFGEpt0lO2EkWkMgdtIeOjDK9mpd1%2BuB46Z7gKfpU6Fao75epDKc7Pjqb5XdXFByvdjEkrI1sI26ds3Ays0fpuWYQzKBj%2BqNGL8TwgI&X-Amz-Signature=458a34b3f229ab3357bb2861f7f7eabbb43e00a378c3679aac99642b14cb6014&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM6XS7RX%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFbPajE78lleJH31r9oxH8Cl54l84mFyLlDorFGNP0EwIhALap9u%2BNHBdmXtF2X7zbkY7jBVTczLGeROIHUonn7nGQKv8DCBAQABoMNjM3NDIzMTgzODA1IgzLPHrlsJfoP1rDhIoq3AOmcjrtL%2FmQ98CdEqIolb8re%2FUVU%2Bx%2BylzcPzARQhDxGNg%2B%2FyxNxNnd3%2Bysgr%2BZz7TZVqHaGkqnmEVppcC43v9wMs%2B9248%2B2Xz69tOtLyg529xTeW9LNHF3ESsOxSGydWefjZ6e66%2BYXHuCIRo%2FTdxTyT16pKRV%2F17NTQ%2FzDBZ4L2GTCnGyCWaKOQ0wzGrHdqaDZWELagHTSdmVyTRC3F0xRtKGiiTx1A6LG9Zzh8asQppQOwaAmrso7ADmX3HVp4SVeXM83U3x1ykl0L4uROnk13yPXktJ1VU5l0eZZ%2F4q7p2C%2Fxl1yIVFyRTD9BbzmPzBIljQmhQ9ytvrJ2%2FuGeAr%2FmM7xTl1o%2BAubdpCylWkekPf8mspSBC68r0LrgQitFKt6LJyvkEWYfsZ2eecWHmiVM30kbK1uvXD56Yum%2BlY4TFmcSicX%2BOLplCYol233N0gUjhkAqzANx%2B1CqFfz3GHLuSZ5F%2BPXxpFaDr5%2BkAKZ93YhJph5MHqQ23jszE%2B41LArL5Tnt0yDvHTQQ3Qfvl1luTZkwX3JJYiDFCGGDwX1F3WZrw%2BJeGHl3ynOYFm9KhckmgYFs8ORbdLmvgECHQleIeD5wG%2F55vMd%2Bv7UN7HFaDdbWWHB7Q44GvpMTCc8LbEBjqkAQwW%2BA4qEZxceJa0JNjTeUP%2BoHfBi7dnWYeq8JH7euEYxwKQ%2FUZKBVNFcwShiF1VYyBmJMcPw4hmP6AzdKD74ZdXi3pqsH43EEm31zsaXi4JxzeVvczc0dFGEpt0lO2EkWkMgdtIeOjDK9mpd1%2BuB46Z7gKfpU6Fao75epDKc7Pjqb5XdXFByvdjEkrI1sI26ds3Ays0fpuWYQzKBj%2BqNGL8TwgI&X-Amz-Signature=c31921d75600e18d13da7140a3a49491fa3ae80cdeb4bfddfa7cbedaaf2c6a3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM6XS7RX%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFbPajE78lleJH31r9oxH8Cl54l84mFyLlDorFGNP0EwIhALap9u%2BNHBdmXtF2X7zbkY7jBVTczLGeROIHUonn7nGQKv8DCBAQABoMNjM3NDIzMTgzODA1IgzLPHrlsJfoP1rDhIoq3AOmcjrtL%2FmQ98CdEqIolb8re%2FUVU%2Bx%2BylzcPzARQhDxGNg%2B%2FyxNxNnd3%2Bysgr%2BZz7TZVqHaGkqnmEVppcC43v9wMs%2B9248%2B2Xz69tOtLyg529xTeW9LNHF3ESsOxSGydWefjZ6e66%2BYXHuCIRo%2FTdxTyT16pKRV%2F17NTQ%2FzDBZ4L2GTCnGyCWaKOQ0wzGrHdqaDZWELagHTSdmVyTRC3F0xRtKGiiTx1A6LG9Zzh8asQppQOwaAmrso7ADmX3HVp4SVeXM83U3x1ykl0L4uROnk13yPXktJ1VU5l0eZZ%2F4q7p2C%2Fxl1yIVFyRTD9BbzmPzBIljQmhQ9ytvrJ2%2FuGeAr%2FmM7xTl1o%2BAubdpCylWkekPf8mspSBC68r0LrgQitFKt6LJyvkEWYfsZ2eecWHmiVM30kbK1uvXD56Yum%2BlY4TFmcSicX%2BOLplCYol233N0gUjhkAqzANx%2B1CqFfz3GHLuSZ5F%2BPXxpFaDr5%2BkAKZ93YhJph5MHqQ23jszE%2B41LArL5Tnt0yDvHTQQ3Qfvl1luTZkwX3JJYiDFCGGDwX1F3WZrw%2BJeGHl3ynOYFm9KhckmgYFs8ORbdLmvgECHQleIeD5wG%2F55vMd%2Bv7UN7HFaDdbWWHB7Q44GvpMTCc8LbEBjqkAQwW%2BA4qEZxceJa0JNjTeUP%2BoHfBi7dnWYeq8JH7euEYxwKQ%2FUZKBVNFcwShiF1VYyBmJMcPw4hmP6AzdKD74ZdXi3pqsH43EEm31zsaXi4JxzeVvczc0dFGEpt0lO2EkWkMgdtIeOjDK9mpd1%2BuB46Z7gKfpU6Fao75epDKc7Pjqb5XdXFByvdjEkrI1sI26ds3Ays0fpuWYQzKBj%2BqNGL8TwgI&X-Amz-Signature=e0bfdfcdef39d798332e498be365d6d690e234a28d7311102ddb201fe74db4c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM6XS7RX%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFbPajE78lleJH31r9oxH8Cl54l84mFyLlDorFGNP0EwIhALap9u%2BNHBdmXtF2X7zbkY7jBVTczLGeROIHUonn7nGQKv8DCBAQABoMNjM3NDIzMTgzODA1IgzLPHrlsJfoP1rDhIoq3AOmcjrtL%2FmQ98CdEqIolb8re%2FUVU%2Bx%2BylzcPzARQhDxGNg%2B%2FyxNxNnd3%2Bysgr%2BZz7TZVqHaGkqnmEVppcC43v9wMs%2B9248%2B2Xz69tOtLyg529xTeW9LNHF3ESsOxSGydWefjZ6e66%2BYXHuCIRo%2FTdxTyT16pKRV%2F17NTQ%2FzDBZ4L2GTCnGyCWaKOQ0wzGrHdqaDZWELagHTSdmVyTRC3F0xRtKGiiTx1A6LG9Zzh8asQppQOwaAmrso7ADmX3HVp4SVeXM83U3x1ykl0L4uROnk13yPXktJ1VU5l0eZZ%2F4q7p2C%2Fxl1yIVFyRTD9BbzmPzBIljQmhQ9ytvrJ2%2FuGeAr%2FmM7xTl1o%2BAubdpCylWkekPf8mspSBC68r0LrgQitFKt6LJyvkEWYfsZ2eecWHmiVM30kbK1uvXD56Yum%2BlY4TFmcSicX%2BOLplCYol233N0gUjhkAqzANx%2B1CqFfz3GHLuSZ5F%2BPXxpFaDr5%2BkAKZ93YhJph5MHqQ23jszE%2B41LArL5Tnt0yDvHTQQ3Qfvl1luTZkwX3JJYiDFCGGDwX1F3WZrw%2BJeGHl3ynOYFm9KhckmgYFs8ORbdLmvgECHQleIeD5wG%2F55vMd%2Bv7UN7HFaDdbWWHB7Q44GvpMTCc8LbEBjqkAQwW%2BA4qEZxceJa0JNjTeUP%2BoHfBi7dnWYeq8JH7euEYxwKQ%2FUZKBVNFcwShiF1VYyBmJMcPw4hmP6AzdKD74ZdXi3pqsH43EEm31zsaXi4JxzeVvczc0dFGEpt0lO2EkWkMgdtIeOjDK9mpd1%2BuB46Z7gKfpU6Fao75epDKc7Pjqb5XdXFByvdjEkrI1sI26ds3Ays0fpuWYQzKBj%2BqNGL8TwgI&X-Amz-Signature=35b57ce3d3cee6ebf3b3c589605d7b91933adafb87552151d2d78ff84e68c4d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM6XS7RX%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFbPajE78lleJH31r9oxH8Cl54l84mFyLlDorFGNP0EwIhALap9u%2BNHBdmXtF2X7zbkY7jBVTczLGeROIHUonn7nGQKv8DCBAQABoMNjM3NDIzMTgzODA1IgzLPHrlsJfoP1rDhIoq3AOmcjrtL%2FmQ98CdEqIolb8re%2FUVU%2Bx%2BylzcPzARQhDxGNg%2B%2FyxNxNnd3%2Bysgr%2BZz7TZVqHaGkqnmEVppcC43v9wMs%2B9248%2B2Xz69tOtLyg529xTeW9LNHF3ESsOxSGydWefjZ6e66%2BYXHuCIRo%2FTdxTyT16pKRV%2F17NTQ%2FzDBZ4L2GTCnGyCWaKOQ0wzGrHdqaDZWELagHTSdmVyTRC3F0xRtKGiiTx1A6LG9Zzh8asQppQOwaAmrso7ADmX3HVp4SVeXM83U3x1ykl0L4uROnk13yPXktJ1VU5l0eZZ%2F4q7p2C%2Fxl1yIVFyRTD9BbzmPzBIljQmhQ9ytvrJ2%2FuGeAr%2FmM7xTl1o%2BAubdpCylWkekPf8mspSBC68r0LrgQitFKt6LJyvkEWYfsZ2eecWHmiVM30kbK1uvXD56Yum%2BlY4TFmcSicX%2BOLplCYol233N0gUjhkAqzANx%2B1CqFfz3GHLuSZ5F%2BPXxpFaDr5%2BkAKZ93YhJph5MHqQ23jszE%2B41LArL5Tnt0yDvHTQQ3Qfvl1luTZkwX3JJYiDFCGGDwX1F3WZrw%2BJeGHl3ynOYFm9KhckmgYFs8ORbdLmvgECHQleIeD5wG%2F55vMd%2Bv7UN7HFaDdbWWHB7Q44GvpMTCc8LbEBjqkAQwW%2BA4qEZxceJa0JNjTeUP%2BoHfBi7dnWYeq8JH7euEYxwKQ%2FUZKBVNFcwShiF1VYyBmJMcPw4hmP6AzdKD74ZdXi3pqsH43EEm31zsaXi4JxzeVvczc0dFGEpt0lO2EkWkMgdtIeOjDK9mpd1%2BuB46Z7gKfpU6Fao75epDKc7Pjqb5XdXFByvdjEkrI1sI26ds3Ays0fpuWYQzKBj%2BqNGL8TwgI&X-Amz-Signature=215961f2b671bd3b6071be534693fad339780d4106c8d408b525ebec29dd0511&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM6XS7RX%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFbPajE78lleJH31r9oxH8Cl54l84mFyLlDorFGNP0EwIhALap9u%2BNHBdmXtF2X7zbkY7jBVTczLGeROIHUonn7nGQKv8DCBAQABoMNjM3NDIzMTgzODA1IgzLPHrlsJfoP1rDhIoq3AOmcjrtL%2FmQ98CdEqIolb8re%2FUVU%2Bx%2BylzcPzARQhDxGNg%2B%2FyxNxNnd3%2Bysgr%2BZz7TZVqHaGkqnmEVppcC43v9wMs%2B9248%2B2Xz69tOtLyg529xTeW9LNHF3ESsOxSGydWefjZ6e66%2BYXHuCIRo%2FTdxTyT16pKRV%2F17NTQ%2FzDBZ4L2GTCnGyCWaKOQ0wzGrHdqaDZWELagHTSdmVyTRC3F0xRtKGiiTx1A6LG9Zzh8asQppQOwaAmrso7ADmX3HVp4SVeXM83U3x1ykl0L4uROnk13yPXktJ1VU5l0eZZ%2F4q7p2C%2Fxl1yIVFyRTD9BbzmPzBIljQmhQ9ytvrJ2%2FuGeAr%2FmM7xTl1o%2BAubdpCylWkekPf8mspSBC68r0LrgQitFKt6LJyvkEWYfsZ2eecWHmiVM30kbK1uvXD56Yum%2BlY4TFmcSicX%2BOLplCYol233N0gUjhkAqzANx%2B1CqFfz3GHLuSZ5F%2BPXxpFaDr5%2BkAKZ93YhJph5MHqQ23jszE%2B41LArL5Tnt0yDvHTQQ3Qfvl1luTZkwX3JJYiDFCGGDwX1F3WZrw%2BJeGHl3ynOYFm9KhckmgYFs8ORbdLmvgECHQleIeD5wG%2F55vMd%2Bv7UN7HFaDdbWWHB7Q44GvpMTCc8LbEBjqkAQwW%2BA4qEZxceJa0JNjTeUP%2BoHfBi7dnWYeq8JH7euEYxwKQ%2FUZKBVNFcwShiF1VYyBmJMcPw4hmP6AzdKD74ZdXi3pqsH43EEm31zsaXi4JxzeVvczc0dFGEpt0lO2EkWkMgdtIeOjDK9mpd1%2BuB46Z7gKfpU6Fao75epDKc7Pjqb5XdXFByvdjEkrI1sI26ds3Ays0fpuWYQzKBj%2BqNGL8TwgI&X-Amz-Signature=45304aeeb1886a23e2f490f1e8552f59550e2508785b6d2110f4d2336c04448f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM6XS7RX%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFbPajE78lleJH31r9oxH8Cl54l84mFyLlDorFGNP0EwIhALap9u%2BNHBdmXtF2X7zbkY7jBVTczLGeROIHUonn7nGQKv8DCBAQABoMNjM3NDIzMTgzODA1IgzLPHrlsJfoP1rDhIoq3AOmcjrtL%2FmQ98CdEqIolb8re%2FUVU%2Bx%2BylzcPzARQhDxGNg%2B%2FyxNxNnd3%2Bysgr%2BZz7TZVqHaGkqnmEVppcC43v9wMs%2B9248%2B2Xz69tOtLyg529xTeW9LNHF3ESsOxSGydWefjZ6e66%2BYXHuCIRo%2FTdxTyT16pKRV%2F17NTQ%2FzDBZ4L2GTCnGyCWaKOQ0wzGrHdqaDZWELagHTSdmVyTRC3F0xRtKGiiTx1A6LG9Zzh8asQppQOwaAmrso7ADmX3HVp4SVeXM83U3x1ykl0L4uROnk13yPXktJ1VU5l0eZZ%2F4q7p2C%2Fxl1yIVFyRTD9BbzmPzBIljQmhQ9ytvrJ2%2FuGeAr%2FmM7xTl1o%2BAubdpCylWkekPf8mspSBC68r0LrgQitFKt6LJyvkEWYfsZ2eecWHmiVM30kbK1uvXD56Yum%2BlY4TFmcSicX%2BOLplCYol233N0gUjhkAqzANx%2B1CqFfz3GHLuSZ5F%2BPXxpFaDr5%2BkAKZ93YhJph5MHqQ23jszE%2B41LArL5Tnt0yDvHTQQ3Qfvl1luTZkwX3JJYiDFCGGDwX1F3WZrw%2BJeGHl3ynOYFm9KhckmgYFs8ORbdLmvgECHQleIeD5wG%2F55vMd%2Bv7UN7HFaDdbWWHB7Q44GvpMTCc8LbEBjqkAQwW%2BA4qEZxceJa0JNjTeUP%2BoHfBi7dnWYeq8JH7euEYxwKQ%2FUZKBVNFcwShiF1VYyBmJMcPw4hmP6AzdKD74ZdXi3pqsH43EEm31zsaXi4JxzeVvczc0dFGEpt0lO2EkWkMgdtIeOjDK9mpd1%2BuB46Z7gKfpU6Fao75epDKc7Pjqb5XdXFByvdjEkrI1sI26ds3Ays0fpuWYQzKBj%2BqNGL8TwgI&X-Amz-Signature=6e7251efb14480efca303e1bd0841c177c19e6c9c63d67bfe1e8003a43c6d2f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM6XS7RX%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFbPajE78lleJH31r9oxH8Cl54l84mFyLlDorFGNP0EwIhALap9u%2BNHBdmXtF2X7zbkY7jBVTczLGeROIHUonn7nGQKv8DCBAQABoMNjM3NDIzMTgzODA1IgzLPHrlsJfoP1rDhIoq3AOmcjrtL%2FmQ98CdEqIolb8re%2FUVU%2Bx%2BylzcPzARQhDxGNg%2B%2FyxNxNnd3%2Bysgr%2BZz7TZVqHaGkqnmEVppcC43v9wMs%2B9248%2B2Xz69tOtLyg529xTeW9LNHF3ESsOxSGydWefjZ6e66%2BYXHuCIRo%2FTdxTyT16pKRV%2F17NTQ%2FzDBZ4L2GTCnGyCWaKOQ0wzGrHdqaDZWELagHTSdmVyTRC3F0xRtKGiiTx1A6LG9Zzh8asQppQOwaAmrso7ADmX3HVp4SVeXM83U3x1ykl0L4uROnk13yPXktJ1VU5l0eZZ%2F4q7p2C%2Fxl1yIVFyRTD9BbzmPzBIljQmhQ9ytvrJ2%2FuGeAr%2FmM7xTl1o%2BAubdpCylWkekPf8mspSBC68r0LrgQitFKt6LJyvkEWYfsZ2eecWHmiVM30kbK1uvXD56Yum%2BlY4TFmcSicX%2BOLplCYol233N0gUjhkAqzANx%2B1CqFfz3GHLuSZ5F%2BPXxpFaDr5%2BkAKZ93YhJph5MHqQ23jszE%2B41LArL5Tnt0yDvHTQQ3Qfvl1luTZkwX3JJYiDFCGGDwX1F3WZrw%2BJeGHl3ynOYFm9KhckmgYFs8ORbdLmvgECHQleIeD5wG%2F55vMd%2Bv7UN7HFaDdbWWHB7Q44GvpMTCc8LbEBjqkAQwW%2BA4qEZxceJa0JNjTeUP%2BoHfBi7dnWYeq8JH7euEYxwKQ%2FUZKBVNFcwShiF1VYyBmJMcPw4hmP6AzdKD74ZdXi3pqsH43EEm31zsaXi4JxzeVvczc0dFGEpt0lO2EkWkMgdtIeOjDK9mpd1%2BuB46Z7gKfpU6Fao75epDKc7Pjqb5XdXFByvdjEkrI1sI26ds3Ays0fpuWYQzKBj%2BqNGL8TwgI&X-Amz-Signature=79f6fc46cbdf0295d54f3e2ae30bc3f409e3992a6f5308d53bfacd959a6a223c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM6XS7RX%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFbPajE78lleJH31r9oxH8Cl54l84mFyLlDorFGNP0EwIhALap9u%2BNHBdmXtF2X7zbkY7jBVTczLGeROIHUonn7nGQKv8DCBAQABoMNjM3NDIzMTgzODA1IgzLPHrlsJfoP1rDhIoq3AOmcjrtL%2FmQ98CdEqIolb8re%2FUVU%2Bx%2BylzcPzARQhDxGNg%2B%2FyxNxNnd3%2Bysgr%2BZz7TZVqHaGkqnmEVppcC43v9wMs%2B9248%2B2Xz69tOtLyg529xTeW9LNHF3ESsOxSGydWefjZ6e66%2BYXHuCIRo%2FTdxTyT16pKRV%2F17NTQ%2FzDBZ4L2GTCnGyCWaKOQ0wzGrHdqaDZWELagHTSdmVyTRC3F0xRtKGiiTx1A6LG9Zzh8asQppQOwaAmrso7ADmX3HVp4SVeXM83U3x1ykl0L4uROnk13yPXktJ1VU5l0eZZ%2F4q7p2C%2Fxl1yIVFyRTD9BbzmPzBIljQmhQ9ytvrJ2%2FuGeAr%2FmM7xTl1o%2BAubdpCylWkekPf8mspSBC68r0LrgQitFKt6LJyvkEWYfsZ2eecWHmiVM30kbK1uvXD56Yum%2BlY4TFmcSicX%2BOLplCYol233N0gUjhkAqzANx%2B1CqFfz3GHLuSZ5F%2BPXxpFaDr5%2BkAKZ93YhJph5MHqQ23jszE%2B41LArL5Tnt0yDvHTQQ3Qfvl1luTZkwX3JJYiDFCGGDwX1F3WZrw%2BJeGHl3ynOYFm9KhckmgYFs8ORbdLmvgECHQleIeD5wG%2F55vMd%2Bv7UN7HFaDdbWWHB7Q44GvpMTCc8LbEBjqkAQwW%2BA4qEZxceJa0JNjTeUP%2BoHfBi7dnWYeq8JH7euEYxwKQ%2FUZKBVNFcwShiF1VYyBmJMcPw4hmP6AzdKD74ZdXi3pqsH43EEm31zsaXi4JxzeVvczc0dFGEpt0lO2EkWkMgdtIeOjDK9mpd1%2BuB46Z7gKfpU6Fao75epDKc7Pjqb5XdXFByvdjEkrI1sI26ds3Ays0fpuWYQzKBj%2BqNGL8TwgI&X-Amz-Signature=9898099241fbb52d1bac689ef4a8dad0eef8916cb44d49ceeb1ce9f65eef0ee6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
