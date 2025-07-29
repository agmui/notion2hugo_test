---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-07-29T01:28:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-07-29T01:28:00.000Z"
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

```xml

  <link name="lidar_link">
    <inertial>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <mass value="0.125"/>
      <inertia ixx="0.001" ixy="0" ixz="0" iyy="0.001" iyz="0" izz="0.001" />
    </inertial>

    <collision>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </collision>

    <visual>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </visual>

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U77GWIRR%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIFxDOprecqHGZYCRzavgt47zSfBTGFsvHqbMjde%2BcAhzAiEAxtccCdS21lxGFu4k%2Fv6i8bVlxvEFQIH2nnxeUr4CxH4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEu9rgcM3tIWrx%2BICrcA7lipzTFStX%2FbuUj8296ITpeGY5MtTFvPDO6dbicjyumd8ZtNZIBIn%2B7NfTAFx26A7nHu%2Fc04kksAYXa10lJTvDE1QsZj05IUU2fOpf62jGtQm%2B1wRNewsISG3jIS2NmnVG0xTpJssn3YBVOLZsDIF7XFvX232ebjoIHKvEa1SnSx4n3L0qbUtjWq3p1fwiebfPUN%2Bd6HOQ7nIV3sdLuKc8jw9oWDm%2F%2Fc%2BqC0sO4JYSZyvnQisN0%2B4MLMz89DcQD%2Fi5BLHPdvMSnaTWmLugto%2FXM99ifMIMcqUmcK%2FupZmmBzzFr7WY8z11QfIf8FvOxWdyWrNTRV1jjdVfDc2mpm11zrYe5oAqvizMHdZpYhN0UTTPk05A7bXZ5XZqfawzdbYoKjik4GiEownM7SwyJ41dM%2BFQGdJ7Cu4tyCxo4yWXzs0cLp1InZqV1W%2B9y%2BeM%2FjBnF4w5TCmlHU%2FQldhapl%2BZJ3NSfMD6DNx5r69jEROA2oPlPJR75D2vG%2FXMQFCHoLowehsilbaU3mgpKzcbDlC6NZeJKBBdfuqhMhOwUe0sQe4Djju43DjvpKeUL%2FRXWIOctQDAkXUAJ%2F3NM%2BgS0o%2Fmh9gw9iIty1obEG5PBIwqO3VmFNtzg6L6eBMXIMJTMoMQGOqUB%2Bk4SrZDz%2BkBXjs1Ufk9leBW0ewici9WHyd3gfxgAwo5ezs4OoKKv3w8RMmbDW7JIWtOKeh7OqhRrrno7N87RygB9hk9XhYhZvHorDTv%2BTbx7BO8ALY2uX5ZDYq34upin4rAQBqrPWxiTuQdIDCVDsoVHzDSZs5cENRyBBD5jgnAErsz%2F2wBqXmSaNFOUsJ2Zzd04Xq3tOig7kGDYL3nrfSPJ3ppR&X-Amz-Signature=99706fc2561558b708e76e0142d7b24f9fe25bf52b88923f8c3c7d72908409d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U77GWIRR%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIFxDOprecqHGZYCRzavgt47zSfBTGFsvHqbMjde%2BcAhzAiEAxtccCdS21lxGFu4k%2Fv6i8bVlxvEFQIH2nnxeUr4CxH4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEu9rgcM3tIWrx%2BICrcA7lipzTFStX%2FbuUj8296ITpeGY5MtTFvPDO6dbicjyumd8ZtNZIBIn%2B7NfTAFx26A7nHu%2Fc04kksAYXa10lJTvDE1QsZj05IUU2fOpf62jGtQm%2B1wRNewsISG3jIS2NmnVG0xTpJssn3YBVOLZsDIF7XFvX232ebjoIHKvEa1SnSx4n3L0qbUtjWq3p1fwiebfPUN%2Bd6HOQ7nIV3sdLuKc8jw9oWDm%2F%2Fc%2BqC0sO4JYSZyvnQisN0%2B4MLMz89DcQD%2Fi5BLHPdvMSnaTWmLugto%2FXM99ifMIMcqUmcK%2FupZmmBzzFr7WY8z11QfIf8FvOxWdyWrNTRV1jjdVfDc2mpm11zrYe5oAqvizMHdZpYhN0UTTPk05A7bXZ5XZqfawzdbYoKjik4GiEownM7SwyJ41dM%2BFQGdJ7Cu4tyCxo4yWXzs0cLp1InZqV1W%2B9y%2BeM%2FjBnF4w5TCmlHU%2FQldhapl%2BZJ3NSfMD6DNx5r69jEROA2oPlPJR75D2vG%2FXMQFCHoLowehsilbaU3mgpKzcbDlC6NZeJKBBdfuqhMhOwUe0sQe4Djju43DjvpKeUL%2FRXWIOctQDAkXUAJ%2F3NM%2BgS0o%2Fmh9gw9iIty1obEG5PBIwqO3VmFNtzg6L6eBMXIMJTMoMQGOqUB%2Bk4SrZDz%2BkBXjs1Ufk9leBW0ewici9WHyd3gfxgAwo5ezs4OoKKv3w8RMmbDW7JIWtOKeh7OqhRrrno7N87RygB9hk9XhYhZvHorDTv%2BTbx7BO8ALY2uX5ZDYq34upin4rAQBqrPWxiTuQdIDCVDsoVHzDSZs5cENRyBBD5jgnAErsz%2F2wBqXmSaNFOUsJ2Zzd04Xq3tOig7kGDYL3nrfSPJ3ppR&X-Amz-Signature=b1a8ee2c092e101809f6a49fd07ddb73360396aaf7b31962130865851c496d1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U77GWIRR%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIFxDOprecqHGZYCRzavgt47zSfBTGFsvHqbMjde%2BcAhzAiEAxtccCdS21lxGFu4k%2Fv6i8bVlxvEFQIH2nnxeUr4CxH4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEu9rgcM3tIWrx%2BICrcA7lipzTFStX%2FbuUj8296ITpeGY5MtTFvPDO6dbicjyumd8ZtNZIBIn%2B7NfTAFx26A7nHu%2Fc04kksAYXa10lJTvDE1QsZj05IUU2fOpf62jGtQm%2B1wRNewsISG3jIS2NmnVG0xTpJssn3YBVOLZsDIF7XFvX232ebjoIHKvEa1SnSx4n3L0qbUtjWq3p1fwiebfPUN%2Bd6HOQ7nIV3sdLuKc8jw9oWDm%2F%2Fc%2BqC0sO4JYSZyvnQisN0%2B4MLMz89DcQD%2Fi5BLHPdvMSnaTWmLugto%2FXM99ifMIMcqUmcK%2FupZmmBzzFr7WY8z11QfIf8FvOxWdyWrNTRV1jjdVfDc2mpm11zrYe5oAqvizMHdZpYhN0UTTPk05A7bXZ5XZqfawzdbYoKjik4GiEownM7SwyJ41dM%2BFQGdJ7Cu4tyCxo4yWXzs0cLp1InZqV1W%2B9y%2BeM%2FjBnF4w5TCmlHU%2FQldhapl%2BZJ3NSfMD6DNx5r69jEROA2oPlPJR75D2vG%2FXMQFCHoLowehsilbaU3mgpKzcbDlC6NZeJKBBdfuqhMhOwUe0sQe4Djju43DjvpKeUL%2FRXWIOctQDAkXUAJ%2F3NM%2BgS0o%2Fmh9gw9iIty1obEG5PBIwqO3VmFNtzg6L6eBMXIMJTMoMQGOqUB%2Bk4SrZDz%2BkBXjs1Ufk9leBW0ewici9WHyd3gfxgAwo5ezs4OoKKv3w8RMmbDW7JIWtOKeh7OqhRrrno7N87RygB9hk9XhYhZvHorDTv%2BTbx7BO8ALY2uX5ZDYq34upin4rAQBqrPWxiTuQdIDCVDsoVHzDSZs5cENRyBBD5jgnAErsz%2F2wBqXmSaNFOUsJ2Zzd04Xq3tOig7kGDYL3nrfSPJ3ppR&X-Amz-Signature=dbc260c93b90cf267a035f61b14d9f45e8970ae4165011bbb9e236e2d86cccee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U77GWIRR%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIFxDOprecqHGZYCRzavgt47zSfBTGFsvHqbMjde%2BcAhzAiEAxtccCdS21lxGFu4k%2Fv6i8bVlxvEFQIH2nnxeUr4CxH4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEu9rgcM3tIWrx%2BICrcA7lipzTFStX%2FbuUj8296ITpeGY5MtTFvPDO6dbicjyumd8ZtNZIBIn%2B7NfTAFx26A7nHu%2Fc04kksAYXa10lJTvDE1QsZj05IUU2fOpf62jGtQm%2B1wRNewsISG3jIS2NmnVG0xTpJssn3YBVOLZsDIF7XFvX232ebjoIHKvEa1SnSx4n3L0qbUtjWq3p1fwiebfPUN%2Bd6HOQ7nIV3sdLuKc8jw9oWDm%2F%2Fc%2BqC0sO4JYSZyvnQisN0%2B4MLMz89DcQD%2Fi5BLHPdvMSnaTWmLugto%2FXM99ifMIMcqUmcK%2FupZmmBzzFr7WY8z11QfIf8FvOxWdyWrNTRV1jjdVfDc2mpm11zrYe5oAqvizMHdZpYhN0UTTPk05A7bXZ5XZqfawzdbYoKjik4GiEownM7SwyJ41dM%2BFQGdJ7Cu4tyCxo4yWXzs0cLp1InZqV1W%2B9y%2BeM%2FjBnF4w5TCmlHU%2FQldhapl%2BZJ3NSfMD6DNx5r69jEROA2oPlPJR75D2vG%2FXMQFCHoLowehsilbaU3mgpKzcbDlC6NZeJKBBdfuqhMhOwUe0sQe4Djju43DjvpKeUL%2FRXWIOctQDAkXUAJ%2F3NM%2BgS0o%2Fmh9gw9iIty1obEG5PBIwqO3VmFNtzg6L6eBMXIMJTMoMQGOqUB%2Bk4SrZDz%2BkBXjs1Ufk9leBW0ewici9WHyd3gfxgAwo5ezs4OoKKv3w8RMmbDW7JIWtOKeh7OqhRrrno7N87RygB9hk9XhYhZvHorDTv%2BTbx7BO8ALY2uX5ZDYq34upin4rAQBqrPWxiTuQdIDCVDsoVHzDSZs5cENRyBBD5jgnAErsz%2F2wBqXmSaNFOUsJ2Zzd04Xq3tOig7kGDYL3nrfSPJ3ppR&X-Amz-Signature=ef8c7aaa0b69f1dfc5b0c0e10191e021d18577d74824bcd48ea5a544f7ee106d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U77GWIRR%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIFxDOprecqHGZYCRzavgt47zSfBTGFsvHqbMjde%2BcAhzAiEAxtccCdS21lxGFu4k%2Fv6i8bVlxvEFQIH2nnxeUr4CxH4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEu9rgcM3tIWrx%2BICrcA7lipzTFStX%2FbuUj8296ITpeGY5MtTFvPDO6dbicjyumd8ZtNZIBIn%2B7NfTAFx26A7nHu%2Fc04kksAYXa10lJTvDE1QsZj05IUU2fOpf62jGtQm%2B1wRNewsISG3jIS2NmnVG0xTpJssn3YBVOLZsDIF7XFvX232ebjoIHKvEa1SnSx4n3L0qbUtjWq3p1fwiebfPUN%2Bd6HOQ7nIV3sdLuKc8jw9oWDm%2F%2Fc%2BqC0sO4JYSZyvnQisN0%2B4MLMz89DcQD%2Fi5BLHPdvMSnaTWmLugto%2FXM99ifMIMcqUmcK%2FupZmmBzzFr7WY8z11QfIf8FvOxWdyWrNTRV1jjdVfDc2mpm11zrYe5oAqvizMHdZpYhN0UTTPk05A7bXZ5XZqfawzdbYoKjik4GiEownM7SwyJ41dM%2BFQGdJ7Cu4tyCxo4yWXzs0cLp1InZqV1W%2B9y%2BeM%2FjBnF4w5TCmlHU%2FQldhapl%2BZJ3NSfMD6DNx5r69jEROA2oPlPJR75D2vG%2FXMQFCHoLowehsilbaU3mgpKzcbDlC6NZeJKBBdfuqhMhOwUe0sQe4Djju43DjvpKeUL%2FRXWIOctQDAkXUAJ%2F3NM%2BgS0o%2Fmh9gw9iIty1obEG5PBIwqO3VmFNtzg6L6eBMXIMJTMoMQGOqUB%2Bk4SrZDz%2BkBXjs1Ufk9leBW0ewici9WHyd3gfxgAwo5ezs4OoKKv3w8RMmbDW7JIWtOKeh7OqhRrrno7N87RygB9hk9XhYhZvHorDTv%2BTbx7BO8ALY2uX5ZDYq34upin4rAQBqrPWxiTuQdIDCVDsoVHzDSZs5cENRyBBD5jgnAErsz%2F2wBqXmSaNFOUsJ2Zzd04Xq3tOig7kGDYL3nrfSPJ3ppR&X-Amz-Signature=2480e6d6b3eb8fbe1147928bfe29c6143c879ed8579b26bb46acf2bf3afaade8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U77GWIRR%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIFxDOprecqHGZYCRzavgt47zSfBTGFsvHqbMjde%2BcAhzAiEAxtccCdS21lxGFu4k%2Fv6i8bVlxvEFQIH2nnxeUr4CxH4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEu9rgcM3tIWrx%2BICrcA7lipzTFStX%2FbuUj8296ITpeGY5MtTFvPDO6dbicjyumd8ZtNZIBIn%2B7NfTAFx26A7nHu%2Fc04kksAYXa10lJTvDE1QsZj05IUU2fOpf62jGtQm%2B1wRNewsISG3jIS2NmnVG0xTpJssn3YBVOLZsDIF7XFvX232ebjoIHKvEa1SnSx4n3L0qbUtjWq3p1fwiebfPUN%2Bd6HOQ7nIV3sdLuKc8jw9oWDm%2F%2Fc%2BqC0sO4JYSZyvnQisN0%2B4MLMz89DcQD%2Fi5BLHPdvMSnaTWmLugto%2FXM99ifMIMcqUmcK%2FupZmmBzzFr7WY8z11QfIf8FvOxWdyWrNTRV1jjdVfDc2mpm11zrYe5oAqvizMHdZpYhN0UTTPk05A7bXZ5XZqfawzdbYoKjik4GiEownM7SwyJ41dM%2BFQGdJ7Cu4tyCxo4yWXzs0cLp1InZqV1W%2B9y%2BeM%2FjBnF4w5TCmlHU%2FQldhapl%2BZJ3NSfMD6DNx5r69jEROA2oPlPJR75D2vG%2FXMQFCHoLowehsilbaU3mgpKzcbDlC6NZeJKBBdfuqhMhOwUe0sQe4Djju43DjvpKeUL%2FRXWIOctQDAkXUAJ%2F3NM%2BgS0o%2Fmh9gw9iIty1obEG5PBIwqO3VmFNtzg6L6eBMXIMJTMoMQGOqUB%2Bk4SrZDz%2BkBXjs1Ufk9leBW0ewici9WHyd3gfxgAwo5ezs4OoKKv3w8RMmbDW7JIWtOKeh7OqhRrrno7N87RygB9hk9XhYhZvHorDTv%2BTbx7BO8ALY2uX5ZDYq34upin4rAQBqrPWxiTuQdIDCVDsoVHzDSZs5cENRyBBD5jgnAErsz%2F2wBqXmSaNFOUsJ2Zzd04Xq3tOig7kGDYL3nrfSPJ3ppR&X-Amz-Signature=4f521988e2cfead627fc2a8e08964a88007d99b0e7a31148ec8f5d7a01a144fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U77GWIRR%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIFxDOprecqHGZYCRzavgt47zSfBTGFsvHqbMjde%2BcAhzAiEAxtccCdS21lxGFu4k%2Fv6i8bVlxvEFQIH2nnxeUr4CxH4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEu9rgcM3tIWrx%2BICrcA7lipzTFStX%2FbuUj8296ITpeGY5MtTFvPDO6dbicjyumd8ZtNZIBIn%2B7NfTAFx26A7nHu%2Fc04kksAYXa10lJTvDE1QsZj05IUU2fOpf62jGtQm%2B1wRNewsISG3jIS2NmnVG0xTpJssn3YBVOLZsDIF7XFvX232ebjoIHKvEa1SnSx4n3L0qbUtjWq3p1fwiebfPUN%2Bd6HOQ7nIV3sdLuKc8jw9oWDm%2F%2Fc%2BqC0sO4JYSZyvnQisN0%2B4MLMz89DcQD%2Fi5BLHPdvMSnaTWmLugto%2FXM99ifMIMcqUmcK%2FupZmmBzzFr7WY8z11QfIf8FvOxWdyWrNTRV1jjdVfDc2mpm11zrYe5oAqvizMHdZpYhN0UTTPk05A7bXZ5XZqfawzdbYoKjik4GiEownM7SwyJ41dM%2BFQGdJ7Cu4tyCxo4yWXzs0cLp1InZqV1W%2B9y%2BeM%2FjBnF4w5TCmlHU%2FQldhapl%2BZJ3NSfMD6DNx5r69jEROA2oPlPJR75D2vG%2FXMQFCHoLowehsilbaU3mgpKzcbDlC6NZeJKBBdfuqhMhOwUe0sQe4Djju43DjvpKeUL%2FRXWIOctQDAkXUAJ%2F3NM%2BgS0o%2Fmh9gw9iIty1obEG5PBIwqO3VmFNtzg6L6eBMXIMJTMoMQGOqUB%2Bk4SrZDz%2BkBXjs1Ufk9leBW0ewici9WHyd3gfxgAwo5ezs4OoKKv3w8RMmbDW7JIWtOKeh7OqhRrrno7N87RygB9hk9XhYhZvHorDTv%2BTbx7BO8ALY2uX5ZDYq34upin4rAQBqrPWxiTuQdIDCVDsoVHzDSZs5cENRyBBD5jgnAErsz%2F2wBqXmSaNFOUsJ2Zzd04Xq3tOig7kGDYL3nrfSPJ3ppR&X-Amz-Signature=a115c5dbce267e680a2481f80c64c2258bc46e0afd9cb8b854a503f87b6cce31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U77GWIRR%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIFxDOprecqHGZYCRzavgt47zSfBTGFsvHqbMjde%2BcAhzAiEAxtccCdS21lxGFu4k%2Fv6i8bVlxvEFQIH2nnxeUr4CxH4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEu9rgcM3tIWrx%2BICrcA7lipzTFStX%2FbuUj8296ITpeGY5MtTFvPDO6dbicjyumd8ZtNZIBIn%2B7NfTAFx26A7nHu%2Fc04kksAYXa10lJTvDE1QsZj05IUU2fOpf62jGtQm%2B1wRNewsISG3jIS2NmnVG0xTpJssn3YBVOLZsDIF7XFvX232ebjoIHKvEa1SnSx4n3L0qbUtjWq3p1fwiebfPUN%2Bd6HOQ7nIV3sdLuKc8jw9oWDm%2F%2Fc%2BqC0sO4JYSZyvnQisN0%2B4MLMz89DcQD%2Fi5BLHPdvMSnaTWmLugto%2FXM99ifMIMcqUmcK%2FupZmmBzzFr7WY8z11QfIf8FvOxWdyWrNTRV1jjdVfDc2mpm11zrYe5oAqvizMHdZpYhN0UTTPk05A7bXZ5XZqfawzdbYoKjik4GiEownM7SwyJ41dM%2BFQGdJ7Cu4tyCxo4yWXzs0cLp1InZqV1W%2B9y%2BeM%2FjBnF4w5TCmlHU%2FQldhapl%2BZJ3NSfMD6DNx5r69jEROA2oPlPJR75D2vG%2FXMQFCHoLowehsilbaU3mgpKzcbDlC6NZeJKBBdfuqhMhOwUe0sQe4Djju43DjvpKeUL%2FRXWIOctQDAkXUAJ%2F3NM%2BgS0o%2Fmh9gw9iIty1obEG5PBIwqO3VmFNtzg6L6eBMXIMJTMoMQGOqUB%2Bk4SrZDz%2BkBXjs1Ufk9leBW0ewici9WHyd3gfxgAwo5ezs4OoKKv3w8RMmbDW7JIWtOKeh7OqhRrrno7N87RygB9hk9XhYhZvHorDTv%2BTbx7BO8ALY2uX5ZDYq34upin4rAQBqrPWxiTuQdIDCVDsoVHzDSZs5cENRyBBD5jgnAErsz%2F2wBqXmSaNFOUsJ2Zzd04Xq3tOig7kGDYL3nrfSPJ3ppR&X-Amz-Signature=09a6b7f5a29c84014992b725d227eb0d20ea561bd516fe133d236443ef528859&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U77GWIRR%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIFxDOprecqHGZYCRzavgt47zSfBTGFsvHqbMjde%2BcAhzAiEAxtccCdS21lxGFu4k%2Fv6i8bVlxvEFQIH2nnxeUr4CxH4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEu9rgcM3tIWrx%2BICrcA7lipzTFStX%2FbuUj8296ITpeGY5MtTFvPDO6dbicjyumd8ZtNZIBIn%2B7NfTAFx26A7nHu%2Fc04kksAYXa10lJTvDE1QsZj05IUU2fOpf62jGtQm%2B1wRNewsISG3jIS2NmnVG0xTpJssn3YBVOLZsDIF7XFvX232ebjoIHKvEa1SnSx4n3L0qbUtjWq3p1fwiebfPUN%2Bd6HOQ7nIV3sdLuKc8jw9oWDm%2F%2Fc%2BqC0sO4JYSZyvnQisN0%2B4MLMz89DcQD%2Fi5BLHPdvMSnaTWmLugto%2FXM99ifMIMcqUmcK%2FupZmmBzzFr7WY8z11QfIf8FvOxWdyWrNTRV1jjdVfDc2mpm11zrYe5oAqvizMHdZpYhN0UTTPk05A7bXZ5XZqfawzdbYoKjik4GiEownM7SwyJ41dM%2BFQGdJ7Cu4tyCxo4yWXzs0cLp1InZqV1W%2B9y%2BeM%2FjBnF4w5TCmlHU%2FQldhapl%2BZJ3NSfMD6DNx5r69jEROA2oPlPJR75D2vG%2FXMQFCHoLowehsilbaU3mgpKzcbDlC6NZeJKBBdfuqhMhOwUe0sQe4Djju43DjvpKeUL%2FRXWIOctQDAkXUAJ%2F3NM%2BgS0o%2Fmh9gw9iIty1obEG5PBIwqO3VmFNtzg6L6eBMXIMJTMoMQGOqUB%2Bk4SrZDz%2BkBXjs1Ufk9leBW0ewici9WHyd3gfxgAwo5ezs4OoKKv3w8RMmbDW7JIWtOKeh7OqhRrrno7N87RygB9hk9XhYhZvHorDTv%2BTbx7BO8ALY2uX5ZDYq34upin4rAQBqrPWxiTuQdIDCVDsoVHzDSZs5cENRyBBD5jgnAErsz%2F2wBqXmSaNFOUsJ2Zzd04Xq3tOig7kGDYL3nrfSPJ3ppR&X-Amz-Signature=6558c42edc4cfd92b6194af81da2be0de7da2a06a81b4175d017fad0163cd724&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO: rviz img

## adding to launch

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U77GWIRR%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIFxDOprecqHGZYCRzavgt47zSfBTGFsvHqbMjde%2BcAhzAiEAxtccCdS21lxGFu4k%2Fv6i8bVlxvEFQIH2nnxeUr4CxH4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEu9rgcM3tIWrx%2BICrcA7lipzTFStX%2FbuUj8296ITpeGY5MtTFvPDO6dbicjyumd8ZtNZIBIn%2B7NfTAFx26A7nHu%2Fc04kksAYXa10lJTvDE1QsZj05IUU2fOpf62jGtQm%2B1wRNewsISG3jIS2NmnVG0xTpJssn3YBVOLZsDIF7XFvX232ebjoIHKvEa1SnSx4n3L0qbUtjWq3p1fwiebfPUN%2Bd6HOQ7nIV3sdLuKc8jw9oWDm%2F%2Fc%2BqC0sO4JYSZyvnQisN0%2B4MLMz89DcQD%2Fi5BLHPdvMSnaTWmLugto%2FXM99ifMIMcqUmcK%2FupZmmBzzFr7WY8z11QfIf8FvOxWdyWrNTRV1jjdVfDc2mpm11zrYe5oAqvizMHdZpYhN0UTTPk05A7bXZ5XZqfawzdbYoKjik4GiEownM7SwyJ41dM%2BFQGdJ7Cu4tyCxo4yWXzs0cLp1InZqV1W%2B9y%2BeM%2FjBnF4w5TCmlHU%2FQldhapl%2BZJ3NSfMD6DNx5r69jEROA2oPlPJR75D2vG%2FXMQFCHoLowehsilbaU3mgpKzcbDlC6NZeJKBBdfuqhMhOwUe0sQe4Djju43DjvpKeUL%2FRXWIOctQDAkXUAJ%2F3NM%2BgS0o%2Fmh9gw9iIty1obEG5PBIwqO3VmFNtzg6L6eBMXIMJTMoMQGOqUB%2Bk4SrZDz%2BkBXjs1Ufk9leBW0ewici9WHyd3gfxgAwo5ezs4OoKKv3w8RMmbDW7JIWtOKeh7OqhRrrno7N87RygB9hk9XhYhZvHorDTv%2BTbx7BO8ALY2uX5ZDYq34upin4rAQBqrPWxiTuQdIDCVDsoVHzDSZs5cENRyBBD5jgnAErsz%2F2wBqXmSaNFOUsJ2Zzd04Xq3tOig7kGDYL3nrfSPJ3ppR&X-Amz-Signature=a237f3e4da4eb2a57a8ff627dcd3700736fcc624ec52aac8c3bb6e989f266aa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
