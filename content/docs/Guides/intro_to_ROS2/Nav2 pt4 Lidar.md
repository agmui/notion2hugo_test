---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-08-02T01:09:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-08-02T01:09:00.000Z"
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

TODO: check inertial block

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

    ~~<inertial>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <mass value="0.125"/>
      <inertia ixx="0.001" ixy="0" ixz="0" iyy="0.001" iyz="0" izz="0.001" />
    </inertial>~~

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOJJWGV3%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYfSNWXCaYRiwFF8Rr%2B96dAFgzVAqglk65b%2Bf8sxEpQAiEAtlSuGIcFCc6LRGiFOhBoFr2msnDcMKiEbNzqjCAF%2FpMq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDJr1u4UyiO6fgzExwSrcA4WjxUX7RqTVUJ5SolnhR4izgkGJvl0dw%2BYgYD7rVAu6jysgDzbvmuiaJvnIgM%2BGC%2FF8fX8HAGS9u0bxAtBwQNa29VEHibYow3PCQCf%2FHbrXRE72XWOn3mOJZqDkUKskj5tsVSwewOlW1xuNLoYHksLVzlnnfbKOu7yuYFmQmwQDC9hqUbPLCJQWqy79DWVo6kksgxSWvsoxGRPzI07GaFKxVgq9nRWU13ECd8dc2%2FgvvV1HdBqwQpNde4zKIrloVMrLGIWkrSdUwMWDVzB1YUx5iUiujmENlpCePKE5OAq7IMfwWWHos7JSymMHGGu%2FIjINK8b68RbLfcLMZvTZyeGYJvt2s54Szd4Wsmy2KDJyTJjZBv7GuQiz6TLwXnhetz2oebNdxxIV0pmxlUKurSJCqDEAcWNZPBw4LbokpcchiJGVM5ecLdmNEv6AMtaLefpGNKLrSVfXEQwalqLvcC235nhkugP1pPzM55DrrbU7uxRMukr1nkcrB2BDZQQoMtbOJiNxOWdXQe941rQ%2Bo3y0GWZKd7xOtC4qTDXbVfVRfSEMMrTFM76M5bgBpsgORWP3i8CyEpBobtnVK%2BmLNQ9yfCYFOjviUZmLRNebcweIIZ74ak6lJ4iGKhGRMJDwtsQGOqUBdOdSVFe3DM8PNdPOaxmS%2BBUbMktKuZsBvRsKPtNVPH11tvxi154oyItUSt%2FM%2BWMeK9S6inHgqDMfODjI4j%2Bprx7sX2kKhyhdRZt6jKHiFyjsyR%2FMX0nBVdmeFDptkfp%2BZsAYKKKPDjQqR4ZOpD%2BABSNtqWEIlXM9zVQ%2F2TVtDOBQ8zYO6bpi%2FMXaXdOY1SL70ir0eWO%2BzPY6on1O7osToDRcuBVM&X-Amz-Signature=b5d280bcb57f8d5c272c1d210cdc5d8365f5686d115a2be9d00b156a137f56ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKX43YRO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICFG6Yw9FKNTwy%2BhJDhw0sJcA2OmIoQX4W6pFvIzgo6GAiEAkemRU6Rk2v5Tpye%2BaocwmBVuzUBP5Wb3Jg2ZMWgkLjYq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDLg5ZzczjtatMySNxCrcA2W6yT7tHtEd3U67CJ27vMmKJXDzrM42BftEIk0OwOl1w%2FcZ4hJOD3AOYzA%2Bu%2FnENl9tW1ApD33R0BOoS%2F7EkfMTlXeWPhgSr5%2BE3ChBAi91j4CVQBluHe%2Bw9jaOmXn2RQr62oQ897kN1zSyZR%2FKuV0jMWpP48yjfZfiD%2FEMLGfK38OrFEoi5vx8m5KroL9CGQvzX8rq%2Biuo12BETiA7ajROzdho0bE9006OJzcGwxd98xaFVb8x6ifzA8POBLmO0ascr5R1%2B6rp1FXlNjmXIGzldoIZuRDC8SKE6YiHa2QAW6mPykpyS1%2BAypTovwEakrAS%2BNRUq7m5iXN94T60vMGIAmptfFESjf4cEM1RxbLvyRC0ViuOEr394SgVAINDXu3TWFte%2F4DYPxY7n2giDsLOWRrW9pLswgnhVtpHVF%2B5fRBSB8rnV8IEXnzYRmUppkeyO5OrgPk%2Bd0YMdf8UJ7mBvPk2RVev9tkXbAkRE34he%2FsQxpl9zneKBgNx1svBtAuYoCj%2FYqM9kCDsZFGhV4ULMjYNytA8SdYRpqmeVwZoCK%2BU0Sb2QT8LOCBb3MezPHsN9GjONpZssWccQF2hOaZHBjgSMvTut81yRdM154ODJo4%2BnFhkA27J0iZfMOXvtsQGOqUBl2R1rLLaBaGyFk5zgwWTBBhlB59877Ai9BvP3YsD%2Fsu%2BultCkz0dKglYQ8oLunrWXxj3mkzrOInYlG3q38tr0SKmq62jaXG%2FrKBZAKJngErNFTF5gGa9KN3vPjhU%2BUPl5wWp3s6xX6RF549Oh1%2FrP3OuBnJIBshoXvNU8D7zsIhoKP5xZiuzW0DeS7a%2FUJqzjzQWH5He7zP95CgwJ8o%2FiJE%2FMH62&X-Amz-Signature=6ba948aaa861bc00ba8c6907f0d2054fc16446e0fa461d1577cfa109c4397908&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKX43YRO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICFG6Yw9FKNTwy%2BhJDhw0sJcA2OmIoQX4W6pFvIzgo6GAiEAkemRU6Rk2v5Tpye%2BaocwmBVuzUBP5Wb3Jg2ZMWgkLjYq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDLg5ZzczjtatMySNxCrcA2W6yT7tHtEd3U67CJ27vMmKJXDzrM42BftEIk0OwOl1w%2FcZ4hJOD3AOYzA%2Bu%2FnENl9tW1ApD33R0BOoS%2F7EkfMTlXeWPhgSr5%2BE3ChBAi91j4CVQBluHe%2Bw9jaOmXn2RQr62oQ897kN1zSyZR%2FKuV0jMWpP48yjfZfiD%2FEMLGfK38OrFEoi5vx8m5KroL9CGQvzX8rq%2Biuo12BETiA7ajROzdho0bE9006OJzcGwxd98xaFVb8x6ifzA8POBLmO0ascr5R1%2B6rp1FXlNjmXIGzldoIZuRDC8SKE6YiHa2QAW6mPykpyS1%2BAypTovwEakrAS%2BNRUq7m5iXN94T60vMGIAmptfFESjf4cEM1RxbLvyRC0ViuOEr394SgVAINDXu3TWFte%2F4DYPxY7n2giDsLOWRrW9pLswgnhVtpHVF%2B5fRBSB8rnV8IEXnzYRmUppkeyO5OrgPk%2Bd0YMdf8UJ7mBvPk2RVev9tkXbAkRE34he%2FsQxpl9zneKBgNx1svBtAuYoCj%2FYqM9kCDsZFGhV4ULMjYNytA8SdYRpqmeVwZoCK%2BU0Sb2QT8LOCBb3MezPHsN9GjONpZssWccQF2hOaZHBjgSMvTut81yRdM154ODJo4%2BnFhkA27J0iZfMOXvtsQGOqUBl2R1rLLaBaGyFk5zgwWTBBhlB59877Ai9BvP3YsD%2Fsu%2BultCkz0dKglYQ8oLunrWXxj3mkzrOInYlG3q38tr0SKmq62jaXG%2FrKBZAKJngErNFTF5gGa9KN3vPjhU%2BUPl5wWp3s6xX6RF549Oh1%2FrP3OuBnJIBshoXvNU8D7zsIhoKP5xZiuzW0DeS7a%2FUJqzjzQWH5He7zP95CgwJ8o%2FiJE%2FMH62&X-Amz-Signature=51fd7a58efcc865505861b25d7050ce0ccfe54478622bd9f1650327a487a4587&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKX43YRO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICFG6Yw9FKNTwy%2BhJDhw0sJcA2OmIoQX4W6pFvIzgo6GAiEAkemRU6Rk2v5Tpye%2BaocwmBVuzUBP5Wb3Jg2ZMWgkLjYq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDLg5ZzczjtatMySNxCrcA2W6yT7tHtEd3U67CJ27vMmKJXDzrM42BftEIk0OwOl1w%2FcZ4hJOD3AOYzA%2Bu%2FnENl9tW1ApD33R0BOoS%2F7EkfMTlXeWPhgSr5%2BE3ChBAi91j4CVQBluHe%2Bw9jaOmXn2RQr62oQ897kN1zSyZR%2FKuV0jMWpP48yjfZfiD%2FEMLGfK38OrFEoi5vx8m5KroL9CGQvzX8rq%2Biuo12BETiA7ajROzdho0bE9006OJzcGwxd98xaFVb8x6ifzA8POBLmO0ascr5R1%2B6rp1FXlNjmXIGzldoIZuRDC8SKE6YiHa2QAW6mPykpyS1%2BAypTovwEakrAS%2BNRUq7m5iXN94T60vMGIAmptfFESjf4cEM1RxbLvyRC0ViuOEr394SgVAINDXu3TWFte%2F4DYPxY7n2giDsLOWRrW9pLswgnhVtpHVF%2B5fRBSB8rnV8IEXnzYRmUppkeyO5OrgPk%2Bd0YMdf8UJ7mBvPk2RVev9tkXbAkRE34he%2FsQxpl9zneKBgNx1svBtAuYoCj%2FYqM9kCDsZFGhV4ULMjYNytA8SdYRpqmeVwZoCK%2BU0Sb2QT8LOCBb3MezPHsN9GjONpZssWccQF2hOaZHBjgSMvTut81yRdM154ODJo4%2BnFhkA27J0iZfMOXvtsQGOqUBl2R1rLLaBaGyFk5zgwWTBBhlB59877Ai9BvP3YsD%2Fsu%2BultCkz0dKglYQ8oLunrWXxj3mkzrOInYlG3q38tr0SKmq62jaXG%2FrKBZAKJngErNFTF5gGa9KN3vPjhU%2BUPl5wWp3s6xX6RF549Oh1%2FrP3OuBnJIBshoXvNU8D7zsIhoKP5xZiuzW0DeS7a%2FUJqzjzQWH5He7zP95CgwJ8o%2FiJE%2FMH62&X-Amz-Signature=485b16f25724cba4e954ec4749a580da4a024ddcad634572469f22f88fd07162&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKX43YRO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICFG6Yw9FKNTwy%2BhJDhw0sJcA2OmIoQX4W6pFvIzgo6GAiEAkemRU6Rk2v5Tpye%2BaocwmBVuzUBP5Wb3Jg2ZMWgkLjYq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDLg5ZzczjtatMySNxCrcA2W6yT7tHtEd3U67CJ27vMmKJXDzrM42BftEIk0OwOl1w%2FcZ4hJOD3AOYzA%2Bu%2FnENl9tW1ApD33R0BOoS%2F7EkfMTlXeWPhgSr5%2BE3ChBAi91j4CVQBluHe%2Bw9jaOmXn2RQr62oQ897kN1zSyZR%2FKuV0jMWpP48yjfZfiD%2FEMLGfK38OrFEoi5vx8m5KroL9CGQvzX8rq%2Biuo12BETiA7ajROzdho0bE9006OJzcGwxd98xaFVb8x6ifzA8POBLmO0ascr5R1%2B6rp1FXlNjmXIGzldoIZuRDC8SKE6YiHa2QAW6mPykpyS1%2BAypTovwEakrAS%2BNRUq7m5iXN94T60vMGIAmptfFESjf4cEM1RxbLvyRC0ViuOEr394SgVAINDXu3TWFte%2F4DYPxY7n2giDsLOWRrW9pLswgnhVtpHVF%2B5fRBSB8rnV8IEXnzYRmUppkeyO5OrgPk%2Bd0YMdf8UJ7mBvPk2RVev9tkXbAkRE34he%2FsQxpl9zneKBgNx1svBtAuYoCj%2FYqM9kCDsZFGhV4ULMjYNytA8SdYRpqmeVwZoCK%2BU0Sb2QT8LOCBb3MezPHsN9GjONpZssWccQF2hOaZHBjgSMvTut81yRdM154ODJo4%2BnFhkA27J0iZfMOXvtsQGOqUBl2R1rLLaBaGyFk5zgwWTBBhlB59877Ai9BvP3YsD%2Fsu%2BultCkz0dKglYQ8oLunrWXxj3mkzrOInYlG3q38tr0SKmq62jaXG%2FrKBZAKJngErNFTF5gGa9KN3vPjhU%2BUPl5wWp3s6xX6RF549Oh1%2FrP3OuBnJIBshoXvNU8D7zsIhoKP5xZiuzW0DeS7a%2FUJqzjzQWH5He7zP95CgwJ8o%2FiJE%2FMH62&X-Amz-Signature=560b8343d812173663631fcc3d2b79e4ce47224184e220bc46a971db4bfe0608&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKX43YRO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICFG6Yw9FKNTwy%2BhJDhw0sJcA2OmIoQX4W6pFvIzgo6GAiEAkemRU6Rk2v5Tpye%2BaocwmBVuzUBP5Wb3Jg2ZMWgkLjYq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDLg5ZzczjtatMySNxCrcA2W6yT7tHtEd3U67CJ27vMmKJXDzrM42BftEIk0OwOl1w%2FcZ4hJOD3AOYzA%2Bu%2FnENl9tW1ApD33R0BOoS%2F7EkfMTlXeWPhgSr5%2BE3ChBAi91j4CVQBluHe%2Bw9jaOmXn2RQr62oQ897kN1zSyZR%2FKuV0jMWpP48yjfZfiD%2FEMLGfK38OrFEoi5vx8m5KroL9CGQvzX8rq%2Biuo12BETiA7ajROzdho0bE9006OJzcGwxd98xaFVb8x6ifzA8POBLmO0ascr5R1%2B6rp1FXlNjmXIGzldoIZuRDC8SKE6YiHa2QAW6mPykpyS1%2BAypTovwEakrAS%2BNRUq7m5iXN94T60vMGIAmptfFESjf4cEM1RxbLvyRC0ViuOEr394SgVAINDXu3TWFte%2F4DYPxY7n2giDsLOWRrW9pLswgnhVtpHVF%2B5fRBSB8rnV8IEXnzYRmUppkeyO5OrgPk%2Bd0YMdf8UJ7mBvPk2RVev9tkXbAkRE34he%2FsQxpl9zneKBgNx1svBtAuYoCj%2FYqM9kCDsZFGhV4ULMjYNytA8SdYRpqmeVwZoCK%2BU0Sb2QT8LOCBb3MezPHsN9GjONpZssWccQF2hOaZHBjgSMvTut81yRdM154ODJo4%2BnFhkA27J0iZfMOXvtsQGOqUBl2R1rLLaBaGyFk5zgwWTBBhlB59877Ai9BvP3YsD%2Fsu%2BultCkz0dKglYQ8oLunrWXxj3mkzrOInYlG3q38tr0SKmq62jaXG%2FrKBZAKJngErNFTF5gGa9KN3vPjhU%2BUPl5wWp3s6xX6RF549Oh1%2FrP3OuBnJIBshoXvNU8D7zsIhoKP5xZiuzW0DeS7a%2FUJqzjzQWH5He7zP95CgwJ8o%2FiJE%2FMH62&X-Amz-Signature=b3eb4fef1b38cfeacf36f96545eea9bec2ae745a3db05b71ca0fa44b99f86366&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKX43YRO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICFG6Yw9FKNTwy%2BhJDhw0sJcA2OmIoQX4W6pFvIzgo6GAiEAkemRU6Rk2v5Tpye%2BaocwmBVuzUBP5Wb3Jg2ZMWgkLjYq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDLg5ZzczjtatMySNxCrcA2W6yT7tHtEd3U67CJ27vMmKJXDzrM42BftEIk0OwOl1w%2FcZ4hJOD3AOYzA%2Bu%2FnENl9tW1ApD33R0BOoS%2F7EkfMTlXeWPhgSr5%2BE3ChBAi91j4CVQBluHe%2Bw9jaOmXn2RQr62oQ897kN1zSyZR%2FKuV0jMWpP48yjfZfiD%2FEMLGfK38OrFEoi5vx8m5KroL9CGQvzX8rq%2Biuo12BETiA7ajROzdho0bE9006OJzcGwxd98xaFVb8x6ifzA8POBLmO0ascr5R1%2B6rp1FXlNjmXIGzldoIZuRDC8SKE6YiHa2QAW6mPykpyS1%2BAypTovwEakrAS%2BNRUq7m5iXN94T60vMGIAmptfFESjf4cEM1RxbLvyRC0ViuOEr394SgVAINDXu3TWFte%2F4DYPxY7n2giDsLOWRrW9pLswgnhVtpHVF%2B5fRBSB8rnV8IEXnzYRmUppkeyO5OrgPk%2Bd0YMdf8UJ7mBvPk2RVev9tkXbAkRE34he%2FsQxpl9zneKBgNx1svBtAuYoCj%2FYqM9kCDsZFGhV4ULMjYNytA8SdYRpqmeVwZoCK%2BU0Sb2QT8LOCBb3MezPHsN9GjONpZssWccQF2hOaZHBjgSMvTut81yRdM154ODJo4%2BnFhkA27J0iZfMOXvtsQGOqUBl2R1rLLaBaGyFk5zgwWTBBhlB59877Ai9BvP3YsD%2Fsu%2BultCkz0dKglYQ8oLunrWXxj3mkzrOInYlG3q38tr0SKmq62jaXG%2FrKBZAKJngErNFTF5gGa9KN3vPjhU%2BUPl5wWp3s6xX6RF549Oh1%2FrP3OuBnJIBshoXvNU8D7zsIhoKP5xZiuzW0DeS7a%2FUJqzjzQWH5He7zP95CgwJ8o%2FiJE%2FMH62&X-Amz-Signature=d578c73bae67a71a9d293b0ff94b18cfd9b1841fd13e8fe861c3059f5049f9e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKX43YRO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICFG6Yw9FKNTwy%2BhJDhw0sJcA2OmIoQX4W6pFvIzgo6GAiEAkemRU6Rk2v5Tpye%2BaocwmBVuzUBP5Wb3Jg2ZMWgkLjYq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDLg5ZzczjtatMySNxCrcA2W6yT7tHtEd3U67CJ27vMmKJXDzrM42BftEIk0OwOl1w%2FcZ4hJOD3AOYzA%2Bu%2FnENl9tW1ApD33R0BOoS%2F7EkfMTlXeWPhgSr5%2BE3ChBAi91j4CVQBluHe%2Bw9jaOmXn2RQr62oQ897kN1zSyZR%2FKuV0jMWpP48yjfZfiD%2FEMLGfK38OrFEoi5vx8m5KroL9CGQvzX8rq%2Biuo12BETiA7ajROzdho0bE9006OJzcGwxd98xaFVb8x6ifzA8POBLmO0ascr5R1%2B6rp1FXlNjmXIGzldoIZuRDC8SKE6YiHa2QAW6mPykpyS1%2BAypTovwEakrAS%2BNRUq7m5iXN94T60vMGIAmptfFESjf4cEM1RxbLvyRC0ViuOEr394SgVAINDXu3TWFte%2F4DYPxY7n2giDsLOWRrW9pLswgnhVtpHVF%2B5fRBSB8rnV8IEXnzYRmUppkeyO5OrgPk%2Bd0YMdf8UJ7mBvPk2RVev9tkXbAkRE34he%2FsQxpl9zneKBgNx1svBtAuYoCj%2FYqM9kCDsZFGhV4ULMjYNytA8SdYRpqmeVwZoCK%2BU0Sb2QT8LOCBb3MezPHsN9GjONpZssWccQF2hOaZHBjgSMvTut81yRdM154ODJo4%2BnFhkA27J0iZfMOXvtsQGOqUBl2R1rLLaBaGyFk5zgwWTBBhlB59877Ai9BvP3YsD%2Fsu%2BultCkz0dKglYQ8oLunrWXxj3mkzrOInYlG3q38tr0SKmq62jaXG%2FrKBZAKJngErNFTF5gGa9KN3vPjhU%2BUPl5wWp3s6xX6RF549Oh1%2FrP3OuBnJIBshoXvNU8D7zsIhoKP5xZiuzW0DeS7a%2FUJqzjzQWH5He7zP95CgwJ8o%2FiJE%2FMH62&X-Amz-Signature=c5524ffeaefc5d7d99f1f078d3fe0945d8538546d5227afdfd61fd2fb98f9af9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKX43YRO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICFG6Yw9FKNTwy%2BhJDhw0sJcA2OmIoQX4W6pFvIzgo6GAiEAkemRU6Rk2v5Tpye%2BaocwmBVuzUBP5Wb3Jg2ZMWgkLjYq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDLg5ZzczjtatMySNxCrcA2W6yT7tHtEd3U67CJ27vMmKJXDzrM42BftEIk0OwOl1w%2FcZ4hJOD3AOYzA%2Bu%2FnENl9tW1ApD33R0BOoS%2F7EkfMTlXeWPhgSr5%2BE3ChBAi91j4CVQBluHe%2Bw9jaOmXn2RQr62oQ897kN1zSyZR%2FKuV0jMWpP48yjfZfiD%2FEMLGfK38OrFEoi5vx8m5KroL9CGQvzX8rq%2Biuo12BETiA7ajROzdho0bE9006OJzcGwxd98xaFVb8x6ifzA8POBLmO0ascr5R1%2B6rp1FXlNjmXIGzldoIZuRDC8SKE6YiHa2QAW6mPykpyS1%2BAypTovwEakrAS%2BNRUq7m5iXN94T60vMGIAmptfFESjf4cEM1RxbLvyRC0ViuOEr394SgVAINDXu3TWFte%2F4DYPxY7n2giDsLOWRrW9pLswgnhVtpHVF%2B5fRBSB8rnV8IEXnzYRmUppkeyO5OrgPk%2Bd0YMdf8UJ7mBvPk2RVev9tkXbAkRE34he%2FsQxpl9zneKBgNx1svBtAuYoCj%2FYqM9kCDsZFGhV4ULMjYNytA8SdYRpqmeVwZoCK%2BU0Sb2QT8LOCBb3MezPHsN9GjONpZssWccQF2hOaZHBjgSMvTut81yRdM154ODJo4%2BnFhkA27J0iZfMOXvtsQGOqUBl2R1rLLaBaGyFk5zgwWTBBhlB59877Ai9BvP3YsD%2Fsu%2BultCkz0dKglYQ8oLunrWXxj3mkzrOInYlG3q38tr0SKmq62jaXG%2FrKBZAKJngErNFTF5gGa9KN3vPjhU%2BUPl5wWp3s6xX6RF549Oh1%2FrP3OuBnJIBshoXvNU8D7zsIhoKP5xZiuzW0DeS7a%2FUJqzjzQWH5He7zP95CgwJ8o%2FiJE%2FMH62&X-Amz-Signature=55d5850d31f16df978eedcc447a364955389c1da0527deafd9ebbc0636be1b8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: get official docs link

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKX43YRO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICFG6Yw9FKNTwy%2BhJDhw0sJcA2OmIoQX4W6pFvIzgo6GAiEAkemRU6Rk2v5Tpye%2BaocwmBVuzUBP5Wb3Jg2ZMWgkLjYq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDLg5ZzczjtatMySNxCrcA2W6yT7tHtEd3U67CJ27vMmKJXDzrM42BftEIk0OwOl1w%2FcZ4hJOD3AOYzA%2Bu%2FnENl9tW1ApD33R0BOoS%2F7EkfMTlXeWPhgSr5%2BE3ChBAi91j4CVQBluHe%2Bw9jaOmXn2RQr62oQ897kN1zSyZR%2FKuV0jMWpP48yjfZfiD%2FEMLGfK38OrFEoi5vx8m5KroL9CGQvzX8rq%2Biuo12BETiA7ajROzdho0bE9006OJzcGwxd98xaFVb8x6ifzA8POBLmO0ascr5R1%2B6rp1FXlNjmXIGzldoIZuRDC8SKE6YiHa2QAW6mPykpyS1%2BAypTovwEakrAS%2BNRUq7m5iXN94T60vMGIAmptfFESjf4cEM1RxbLvyRC0ViuOEr394SgVAINDXu3TWFte%2F4DYPxY7n2giDsLOWRrW9pLswgnhVtpHVF%2B5fRBSB8rnV8IEXnzYRmUppkeyO5OrgPk%2Bd0YMdf8UJ7mBvPk2RVev9tkXbAkRE34he%2FsQxpl9zneKBgNx1svBtAuYoCj%2FYqM9kCDsZFGhV4ULMjYNytA8SdYRpqmeVwZoCK%2BU0Sb2QT8LOCBb3MezPHsN9GjONpZssWccQF2hOaZHBjgSMvTut81yRdM154ODJo4%2BnFhkA27J0iZfMOXvtsQGOqUBl2R1rLLaBaGyFk5zgwWTBBhlB59877Ai9BvP3YsD%2Fsu%2BultCkz0dKglYQ8oLunrWXxj3mkzrOInYlG3q38tr0SKmq62jaXG%2FrKBZAKJngErNFTF5gGa9KN3vPjhU%2BUPl5wWp3s6xX6RF549Oh1%2FrP3OuBnJIBshoXvNU8D7zsIhoKP5xZiuzW0DeS7a%2FUJqzjzQWH5He7zP95CgwJ8o%2FiJE%2FMH62&X-Amz-Signature=99667aded57eb1061c6030c023cedb6582fae224100ace053ba073c0bf883065&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO: rviz img

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

TODO: add rviz section

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKX43YRO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICFG6Yw9FKNTwy%2BhJDhw0sJcA2OmIoQX4W6pFvIzgo6GAiEAkemRU6Rk2v5Tpye%2BaocwmBVuzUBP5Wb3Jg2ZMWgkLjYq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDLg5ZzczjtatMySNxCrcA2W6yT7tHtEd3U67CJ27vMmKJXDzrM42BftEIk0OwOl1w%2FcZ4hJOD3AOYzA%2Bu%2FnENl9tW1ApD33R0BOoS%2F7EkfMTlXeWPhgSr5%2BE3ChBAi91j4CVQBluHe%2Bw9jaOmXn2RQr62oQ897kN1zSyZR%2FKuV0jMWpP48yjfZfiD%2FEMLGfK38OrFEoi5vx8m5KroL9CGQvzX8rq%2Biuo12BETiA7ajROzdho0bE9006OJzcGwxd98xaFVb8x6ifzA8POBLmO0ascr5R1%2B6rp1FXlNjmXIGzldoIZuRDC8SKE6YiHa2QAW6mPykpyS1%2BAypTovwEakrAS%2BNRUq7m5iXN94T60vMGIAmptfFESjf4cEM1RxbLvyRC0ViuOEr394SgVAINDXu3TWFte%2F4DYPxY7n2giDsLOWRrW9pLswgnhVtpHVF%2B5fRBSB8rnV8IEXnzYRmUppkeyO5OrgPk%2Bd0YMdf8UJ7mBvPk2RVev9tkXbAkRE34he%2FsQxpl9zneKBgNx1svBtAuYoCj%2FYqM9kCDsZFGhV4ULMjYNytA8SdYRpqmeVwZoCK%2BU0Sb2QT8LOCBb3MezPHsN9GjONpZssWccQF2hOaZHBjgSMvTut81yRdM154ODJo4%2BnFhkA27J0iZfMOXvtsQGOqUBl2R1rLLaBaGyFk5zgwWTBBhlB59877Ai9BvP3YsD%2Fsu%2BultCkz0dKglYQ8oLunrWXxj3mkzrOInYlG3q38tr0SKmq62jaXG%2FrKBZAKJngErNFTF5gGa9KN3vPjhU%2BUPl5wWp3s6xX6RF549Oh1%2FrP3OuBnJIBshoXvNU8D7zsIhoKP5xZiuzW0DeS7a%2FUJqzjzQWH5He7zP95CgwJ8o%2FiJE%2FMH62&X-Amz-Signature=0e0b7212327483fff8ceae2f1fc5e9afdc6ce509b358326225bd363b41f1f90f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
