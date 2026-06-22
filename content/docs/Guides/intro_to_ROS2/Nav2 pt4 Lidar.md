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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPDRGRT5%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHHZivj78AlVFxWlL43jKuYmsj9qyF6yUo8rXN0wLpbnAiEAlBz4nUYcJa%2F%2FXS5UiCm%2BgNYqDuBADl0t1SzJtlZyNsEqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHUPUJyiTNTLh2oVkircA3mTVd3j4QkwC49py56V1eR4zAD4pfC1G88HAUNxgtNYLa8Jrjzo4cTb908rl0C9O044WEnWgKSu9IohuihV8iY78AV6RiybVxxOPfrKMni7sZjhDBySf%2F61Zh7IIdzcsCvuZfHxOUycvfexigCqemtCDR5%2Fz8IAD7If2rbPJTxkpl%2FB8MPuqI9j%2BeG3Q0hn%2Bm0UfQusey11VkizqEBTZkB6QLb6AGF9qxhcVfcxeEnf92H5Iqv5GwYG1jtK1Nr05EE%2F0qIQ2lplinAOejNEeOdr82afYql3RMet00rwjUboNKfFo45S%2BZ1PwGee3gO2O1v7z4wdD5kjKkX%2FWXHj7lE8%2FmjqwJwnS4I1zZJEBnodvx0ajty1HA4%2FngacyoI%2BeV5lOChCtFK8%2Bm%2BVmO0zedRg2MMtQkXz29absvCv0W%2BQ5X4urS7HGAnUhuUrsg5fInssd7zIQ0hHImmO%2FYQdEsOOME5jivpj09GzuRkaAhFyMAyyLrIx4uZuOgyakUDreoL2jRBZju01L6Wxrjt8I7NpGO4vT80%2FP%2BTFOzxNNWG96XKcX305Ktk5codHfzKzj6UpWy7fI9ujE4E0PWztetAKq8wzwpNvS9q60iwMdrnNt4YCcWJTZBlrSBkTMPrW4tEGOqUB0jpk4vPZr0ykTgMnmbyXIiqj2J3A5Fxzc4iaihEzzTu0OT%2FM5uLreV4WLYfITOqFHMP4vK%2FGYwM23j%2BAFxgFJ5ckO8M7WEqW5K45yWDBk7ExQNxhfqBBFc2h4vG8ORvsV%2F5sf6vkJoBYSveazHHLJiKL400Jbjg522w8j5SX5PxzTTQE4UWUeYfSpiDddYWb8NvvP6c3QV3TGd381mcXEa6EAGGF&X-Amz-Signature=a83df0d820d8ddb40ee957e9c8817468adf8569083c3bb9f803b1f07592d489c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z7NUZEN%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDXXoL780E2Vs1kSVydWYgTBrawzns9v6B1%2F3hYi3keYgIgOnHps9FtOm9J3OagrFrpUsx7tu3DoW8U5eWhkcwXbRMqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsd4X6exMXekcShbCrcA5BIt%2BgB9y8wkBtRqBCczu1wicsa167oE92gRuAc2e%2B3%2FK3WRbUy%2FJhWx8uWvizbwz8hsjQ6YpMc8hCSWmHvdmQqYvhlJWf7tljZ0TcdvHlMlm5wQ7AecUGdjblIjPTN%2BcTAxRvvV6qoAgRcNY1horRLsLMGmapPqqbS9eAAVY4p4pCapWwCZmzJ0K7SOE64J3%2F5tM%2FvUfwHG5Es%2Bh%2Bu8J0FR2VH6jwXrn4Txm0p82F%2B1o8ry3%2FZ%2F6AGrIn7yRZ6crecfNhEePd%2BAECBPTy4qQbvNCufUqRCJihHD15BF49gTEwGLXuOuSJMbv%2B5QAxei%2FWDddaMwchiqf%2BO13Skbuz4fPVDhPQWAbOhg8pEe9wIL9d5qAfMqoyoqpbDt0J6ihA2zZk%2BRv3VikPJTlfVAjs2V%2BzLX3cP8b7iZbW0T82%2FgHWVLqAGSGDQ6uVQH52NYjebTqZpIISJldvRETbWw%2Bf%2BYDyp5eHCBmG40UdYAC5nDSm3PqVoyUPS5pIS9qaF3p%2BwBXkG6WvlRtmXZr%2FWhCb9nD9IufvMmJriVhORQbl%2BWueArxhFp4F7mOTv2LIxSn0tt%2F4xJBNujlIUaoMkX8djvlB4bMnqSYBxKqixL3XNGKXgOXQ0NMwUsxT%2FMNbX4tEGOqUBwOgu%2BOwueXPmTNyTvg7aFH8GZFO2RXsHdkG%2B7DoAxg70nmUWgjWdoVlb0NpD7ZSnD9lAUN8d%2B1jrpDQGXXbuKvCuXkqJrc7lMcw40IA0ha1oO12%2FRVZp3cMLh0RdNavBOhXAn6cHvs6B97noqi0tkFWsK2FKSLWGJWkmuasBTMB5Y17DYYcJ2bfiNlO1FzJZijPSZBM682ylkt17pZZTwuVHnxOm&X-Amz-Signature=5daa2d420934c0f9738e01a28c136299db317999f6df261081bb987ff6d3080d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z7NUZEN%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDXXoL780E2Vs1kSVydWYgTBrawzns9v6B1%2F3hYi3keYgIgOnHps9FtOm9J3OagrFrpUsx7tu3DoW8U5eWhkcwXbRMqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsd4X6exMXekcShbCrcA5BIt%2BgB9y8wkBtRqBCczu1wicsa167oE92gRuAc2e%2B3%2FK3WRbUy%2FJhWx8uWvizbwz8hsjQ6YpMc8hCSWmHvdmQqYvhlJWf7tljZ0TcdvHlMlm5wQ7AecUGdjblIjPTN%2BcTAxRvvV6qoAgRcNY1horRLsLMGmapPqqbS9eAAVY4p4pCapWwCZmzJ0K7SOE64J3%2F5tM%2FvUfwHG5Es%2Bh%2Bu8J0FR2VH6jwXrn4Txm0p82F%2B1o8ry3%2FZ%2F6AGrIn7yRZ6crecfNhEePd%2BAECBPTy4qQbvNCufUqRCJihHD15BF49gTEwGLXuOuSJMbv%2B5QAxei%2FWDddaMwchiqf%2BO13Skbuz4fPVDhPQWAbOhg8pEe9wIL9d5qAfMqoyoqpbDt0J6ihA2zZk%2BRv3VikPJTlfVAjs2V%2BzLX3cP8b7iZbW0T82%2FgHWVLqAGSGDQ6uVQH52NYjebTqZpIISJldvRETbWw%2Bf%2BYDyp5eHCBmG40UdYAC5nDSm3PqVoyUPS5pIS9qaF3p%2BwBXkG6WvlRtmXZr%2FWhCb9nD9IufvMmJriVhORQbl%2BWueArxhFp4F7mOTv2LIxSn0tt%2F4xJBNujlIUaoMkX8djvlB4bMnqSYBxKqixL3XNGKXgOXQ0NMwUsxT%2FMNbX4tEGOqUBwOgu%2BOwueXPmTNyTvg7aFH8GZFO2RXsHdkG%2B7DoAxg70nmUWgjWdoVlb0NpD7ZSnD9lAUN8d%2B1jrpDQGXXbuKvCuXkqJrc7lMcw40IA0ha1oO12%2FRVZp3cMLh0RdNavBOhXAn6cHvs6B97noqi0tkFWsK2FKSLWGJWkmuasBTMB5Y17DYYcJ2bfiNlO1FzJZijPSZBM682ylkt17pZZTwuVHnxOm&X-Amz-Signature=835df86a971dc4761def377414b0b396d750e15a0612aa992496e11c83d51627&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z7NUZEN%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDXXoL780E2Vs1kSVydWYgTBrawzns9v6B1%2F3hYi3keYgIgOnHps9FtOm9J3OagrFrpUsx7tu3DoW8U5eWhkcwXbRMqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsd4X6exMXekcShbCrcA5BIt%2BgB9y8wkBtRqBCczu1wicsa167oE92gRuAc2e%2B3%2FK3WRbUy%2FJhWx8uWvizbwz8hsjQ6YpMc8hCSWmHvdmQqYvhlJWf7tljZ0TcdvHlMlm5wQ7AecUGdjblIjPTN%2BcTAxRvvV6qoAgRcNY1horRLsLMGmapPqqbS9eAAVY4p4pCapWwCZmzJ0K7SOE64J3%2F5tM%2FvUfwHG5Es%2Bh%2Bu8J0FR2VH6jwXrn4Txm0p82F%2B1o8ry3%2FZ%2F6AGrIn7yRZ6crecfNhEePd%2BAECBPTy4qQbvNCufUqRCJihHD15BF49gTEwGLXuOuSJMbv%2B5QAxei%2FWDddaMwchiqf%2BO13Skbuz4fPVDhPQWAbOhg8pEe9wIL9d5qAfMqoyoqpbDt0J6ihA2zZk%2BRv3VikPJTlfVAjs2V%2BzLX3cP8b7iZbW0T82%2FgHWVLqAGSGDQ6uVQH52NYjebTqZpIISJldvRETbWw%2Bf%2BYDyp5eHCBmG40UdYAC5nDSm3PqVoyUPS5pIS9qaF3p%2BwBXkG6WvlRtmXZr%2FWhCb9nD9IufvMmJriVhORQbl%2BWueArxhFp4F7mOTv2LIxSn0tt%2F4xJBNujlIUaoMkX8djvlB4bMnqSYBxKqixL3XNGKXgOXQ0NMwUsxT%2FMNbX4tEGOqUBwOgu%2BOwueXPmTNyTvg7aFH8GZFO2RXsHdkG%2B7DoAxg70nmUWgjWdoVlb0NpD7ZSnD9lAUN8d%2B1jrpDQGXXbuKvCuXkqJrc7lMcw40IA0ha1oO12%2FRVZp3cMLh0RdNavBOhXAn6cHvs6B97noqi0tkFWsK2FKSLWGJWkmuasBTMB5Y17DYYcJ2bfiNlO1FzJZijPSZBM682ylkt17pZZTwuVHnxOm&X-Amz-Signature=e42fd2674266309e4ce6d89470ff2e3099a8ccf8428483d0ff37a0a30e6f6017&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z7NUZEN%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDXXoL780E2Vs1kSVydWYgTBrawzns9v6B1%2F3hYi3keYgIgOnHps9FtOm9J3OagrFrpUsx7tu3DoW8U5eWhkcwXbRMqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsd4X6exMXekcShbCrcA5BIt%2BgB9y8wkBtRqBCczu1wicsa167oE92gRuAc2e%2B3%2FK3WRbUy%2FJhWx8uWvizbwz8hsjQ6YpMc8hCSWmHvdmQqYvhlJWf7tljZ0TcdvHlMlm5wQ7AecUGdjblIjPTN%2BcTAxRvvV6qoAgRcNY1horRLsLMGmapPqqbS9eAAVY4p4pCapWwCZmzJ0K7SOE64J3%2F5tM%2FvUfwHG5Es%2Bh%2Bu8J0FR2VH6jwXrn4Txm0p82F%2B1o8ry3%2FZ%2F6AGrIn7yRZ6crecfNhEePd%2BAECBPTy4qQbvNCufUqRCJihHD15BF49gTEwGLXuOuSJMbv%2B5QAxei%2FWDddaMwchiqf%2BO13Skbuz4fPVDhPQWAbOhg8pEe9wIL9d5qAfMqoyoqpbDt0J6ihA2zZk%2BRv3VikPJTlfVAjs2V%2BzLX3cP8b7iZbW0T82%2FgHWVLqAGSGDQ6uVQH52NYjebTqZpIISJldvRETbWw%2Bf%2BYDyp5eHCBmG40UdYAC5nDSm3PqVoyUPS5pIS9qaF3p%2BwBXkG6WvlRtmXZr%2FWhCb9nD9IufvMmJriVhORQbl%2BWueArxhFp4F7mOTv2LIxSn0tt%2F4xJBNujlIUaoMkX8djvlB4bMnqSYBxKqixL3XNGKXgOXQ0NMwUsxT%2FMNbX4tEGOqUBwOgu%2BOwueXPmTNyTvg7aFH8GZFO2RXsHdkG%2B7DoAxg70nmUWgjWdoVlb0NpD7ZSnD9lAUN8d%2B1jrpDQGXXbuKvCuXkqJrc7lMcw40IA0ha1oO12%2FRVZp3cMLh0RdNavBOhXAn6cHvs6B97noqi0tkFWsK2FKSLWGJWkmuasBTMB5Y17DYYcJ2bfiNlO1FzJZijPSZBM682ylkt17pZZTwuVHnxOm&X-Amz-Signature=84168fcee84420de80ecd83d73dc1ccf186c37b4846f01e108bfd51366e0cd86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z7NUZEN%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDXXoL780E2Vs1kSVydWYgTBrawzns9v6B1%2F3hYi3keYgIgOnHps9FtOm9J3OagrFrpUsx7tu3DoW8U5eWhkcwXbRMqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsd4X6exMXekcShbCrcA5BIt%2BgB9y8wkBtRqBCczu1wicsa167oE92gRuAc2e%2B3%2FK3WRbUy%2FJhWx8uWvizbwz8hsjQ6YpMc8hCSWmHvdmQqYvhlJWf7tljZ0TcdvHlMlm5wQ7AecUGdjblIjPTN%2BcTAxRvvV6qoAgRcNY1horRLsLMGmapPqqbS9eAAVY4p4pCapWwCZmzJ0K7SOE64J3%2F5tM%2FvUfwHG5Es%2Bh%2Bu8J0FR2VH6jwXrn4Txm0p82F%2B1o8ry3%2FZ%2F6AGrIn7yRZ6crecfNhEePd%2BAECBPTy4qQbvNCufUqRCJihHD15BF49gTEwGLXuOuSJMbv%2B5QAxei%2FWDddaMwchiqf%2BO13Skbuz4fPVDhPQWAbOhg8pEe9wIL9d5qAfMqoyoqpbDt0J6ihA2zZk%2BRv3VikPJTlfVAjs2V%2BzLX3cP8b7iZbW0T82%2FgHWVLqAGSGDQ6uVQH52NYjebTqZpIISJldvRETbWw%2Bf%2BYDyp5eHCBmG40UdYAC5nDSm3PqVoyUPS5pIS9qaF3p%2BwBXkG6WvlRtmXZr%2FWhCb9nD9IufvMmJriVhORQbl%2BWueArxhFp4F7mOTv2LIxSn0tt%2F4xJBNujlIUaoMkX8djvlB4bMnqSYBxKqixL3XNGKXgOXQ0NMwUsxT%2FMNbX4tEGOqUBwOgu%2BOwueXPmTNyTvg7aFH8GZFO2RXsHdkG%2B7DoAxg70nmUWgjWdoVlb0NpD7ZSnD9lAUN8d%2B1jrpDQGXXbuKvCuXkqJrc7lMcw40IA0ha1oO12%2FRVZp3cMLh0RdNavBOhXAn6cHvs6B97noqi0tkFWsK2FKSLWGJWkmuasBTMB5Y17DYYcJ2bfiNlO1FzJZijPSZBM682ylkt17pZZTwuVHnxOm&X-Amz-Signature=edc38486faab9cc6e8975222bb40c8274d6f599d60a235164736a719360789d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z7NUZEN%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDXXoL780E2Vs1kSVydWYgTBrawzns9v6B1%2F3hYi3keYgIgOnHps9FtOm9J3OagrFrpUsx7tu3DoW8U5eWhkcwXbRMqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsd4X6exMXekcShbCrcA5BIt%2BgB9y8wkBtRqBCczu1wicsa167oE92gRuAc2e%2B3%2FK3WRbUy%2FJhWx8uWvizbwz8hsjQ6YpMc8hCSWmHvdmQqYvhlJWf7tljZ0TcdvHlMlm5wQ7AecUGdjblIjPTN%2BcTAxRvvV6qoAgRcNY1horRLsLMGmapPqqbS9eAAVY4p4pCapWwCZmzJ0K7SOE64J3%2F5tM%2FvUfwHG5Es%2Bh%2Bu8J0FR2VH6jwXrn4Txm0p82F%2B1o8ry3%2FZ%2F6AGrIn7yRZ6crecfNhEePd%2BAECBPTy4qQbvNCufUqRCJihHD15BF49gTEwGLXuOuSJMbv%2B5QAxei%2FWDddaMwchiqf%2BO13Skbuz4fPVDhPQWAbOhg8pEe9wIL9d5qAfMqoyoqpbDt0J6ihA2zZk%2BRv3VikPJTlfVAjs2V%2BzLX3cP8b7iZbW0T82%2FgHWVLqAGSGDQ6uVQH52NYjebTqZpIISJldvRETbWw%2Bf%2BYDyp5eHCBmG40UdYAC5nDSm3PqVoyUPS5pIS9qaF3p%2BwBXkG6WvlRtmXZr%2FWhCb9nD9IufvMmJriVhORQbl%2BWueArxhFp4F7mOTv2LIxSn0tt%2F4xJBNujlIUaoMkX8djvlB4bMnqSYBxKqixL3XNGKXgOXQ0NMwUsxT%2FMNbX4tEGOqUBwOgu%2BOwueXPmTNyTvg7aFH8GZFO2RXsHdkG%2B7DoAxg70nmUWgjWdoVlb0NpD7ZSnD9lAUN8d%2B1jrpDQGXXbuKvCuXkqJrc7lMcw40IA0ha1oO12%2FRVZp3cMLh0RdNavBOhXAn6cHvs6B97noqi0tkFWsK2FKSLWGJWkmuasBTMB5Y17DYYcJ2bfiNlO1FzJZijPSZBM682ylkt17pZZTwuVHnxOm&X-Amz-Signature=13d01e28d72da5a1611b4500cebd3fb15e54e2452f7b89c187ecc7f5b2e48f4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z7NUZEN%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDXXoL780E2Vs1kSVydWYgTBrawzns9v6B1%2F3hYi3keYgIgOnHps9FtOm9J3OagrFrpUsx7tu3DoW8U5eWhkcwXbRMqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsd4X6exMXekcShbCrcA5BIt%2BgB9y8wkBtRqBCczu1wicsa167oE92gRuAc2e%2B3%2FK3WRbUy%2FJhWx8uWvizbwz8hsjQ6YpMc8hCSWmHvdmQqYvhlJWf7tljZ0TcdvHlMlm5wQ7AecUGdjblIjPTN%2BcTAxRvvV6qoAgRcNY1horRLsLMGmapPqqbS9eAAVY4p4pCapWwCZmzJ0K7SOE64J3%2F5tM%2FvUfwHG5Es%2Bh%2Bu8J0FR2VH6jwXrn4Txm0p82F%2B1o8ry3%2FZ%2F6AGrIn7yRZ6crecfNhEePd%2BAECBPTy4qQbvNCufUqRCJihHD15BF49gTEwGLXuOuSJMbv%2B5QAxei%2FWDddaMwchiqf%2BO13Skbuz4fPVDhPQWAbOhg8pEe9wIL9d5qAfMqoyoqpbDt0J6ihA2zZk%2BRv3VikPJTlfVAjs2V%2BzLX3cP8b7iZbW0T82%2FgHWVLqAGSGDQ6uVQH52NYjebTqZpIISJldvRETbWw%2Bf%2BYDyp5eHCBmG40UdYAC5nDSm3PqVoyUPS5pIS9qaF3p%2BwBXkG6WvlRtmXZr%2FWhCb9nD9IufvMmJriVhORQbl%2BWueArxhFp4F7mOTv2LIxSn0tt%2F4xJBNujlIUaoMkX8djvlB4bMnqSYBxKqixL3XNGKXgOXQ0NMwUsxT%2FMNbX4tEGOqUBwOgu%2BOwueXPmTNyTvg7aFH8GZFO2RXsHdkG%2B7DoAxg70nmUWgjWdoVlb0NpD7ZSnD9lAUN8d%2B1jrpDQGXXbuKvCuXkqJrc7lMcw40IA0ha1oO12%2FRVZp3cMLh0RdNavBOhXAn6cHvs6B97noqi0tkFWsK2FKSLWGJWkmuasBTMB5Y17DYYcJ2bfiNlO1FzJZijPSZBM682ylkt17pZZTwuVHnxOm&X-Amz-Signature=c0b6af8ef8752da07aabfbf85f305028664180c3faf029e820131aa7ec88e526&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z7NUZEN%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDXXoL780E2Vs1kSVydWYgTBrawzns9v6B1%2F3hYi3keYgIgOnHps9FtOm9J3OagrFrpUsx7tu3DoW8U5eWhkcwXbRMqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsd4X6exMXekcShbCrcA5BIt%2BgB9y8wkBtRqBCczu1wicsa167oE92gRuAc2e%2B3%2FK3WRbUy%2FJhWx8uWvizbwz8hsjQ6YpMc8hCSWmHvdmQqYvhlJWf7tljZ0TcdvHlMlm5wQ7AecUGdjblIjPTN%2BcTAxRvvV6qoAgRcNY1horRLsLMGmapPqqbS9eAAVY4p4pCapWwCZmzJ0K7SOE64J3%2F5tM%2FvUfwHG5Es%2Bh%2Bu8J0FR2VH6jwXrn4Txm0p82F%2B1o8ry3%2FZ%2F6AGrIn7yRZ6crecfNhEePd%2BAECBPTy4qQbvNCufUqRCJihHD15BF49gTEwGLXuOuSJMbv%2B5QAxei%2FWDddaMwchiqf%2BO13Skbuz4fPVDhPQWAbOhg8pEe9wIL9d5qAfMqoyoqpbDt0J6ihA2zZk%2BRv3VikPJTlfVAjs2V%2BzLX3cP8b7iZbW0T82%2FgHWVLqAGSGDQ6uVQH52NYjebTqZpIISJldvRETbWw%2Bf%2BYDyp5eHCBmG40UdYAC5nDSm3PqVoyUPS5pIS9qaF3p%2BwBXkG6WvlRtmXZr%2FWhCb9nD9IufvMmJriVhORQbl%2BWueArxhFp4F7mOTv2LIxSn0tt%2F4xJBNujlIUaoMkX8djvlB4bMnqSYBxKqixL3XNGKXgOXQ0NMwUsxT%2FMNbX4tEGOqUBwOgu%2BOwueXPmTNyTvg7aFH8GZFO2RXsHdkG%2B7DoAxg70nmUWgjWdoVlb0NpD7ZSnD9lAUN8d%2B1jrpDQGXXbuKvCuXkqJrc7lMcw40IA0ha1oO12%2FRVZp3cMLh0RdNavBOhXAn6cHvs6B97noqi0tkFWsK2FKSLWGJWkmuasBTMB5Y17DYYcJ2bfiNlO1FzJZijPSZBM682ylkt17pZZTwuVHnxOm&X-Amz-Signature=96008719adf21aee17bdbf5999f7dff224a05443d8d5074ad6873bb9b9a3e6d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z7NUZEN%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDXXoL780E2Vs1kSVydWYgTBrawzns9v6B1%2F3hYi3keYgIgOnHps9FtOm9J3OagrFrpUsx7tu3DoW8U5eWhkcwXbRMqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsd4X6exMXekcShbCrcA5BIt%2BgB9y8wkBtRqBCczu1wicsa167oE92gRuAc2e%2B3%2FK3WRbUy%2FJhWx8uWvizbwz8hsjQ6YpMc8hCSWmHvdmQqYvhlJWf7tljZ0TcdvHlMlm5wQ7AecUGdjblIjPTN%2BcTAxRvvV6qoAgRcNY1horRLsLMGmapPqqbS9eAAVY4p4pCapWwCZmzJ0K7SOE64J3%2F5tM%2FvUfwHG5Es%2Bh%2Bu8J0FR2VH6jwXrn4Txm0p82F%2B1o8ry3%2FZ%2F6AGrIn7yRZ6crecfNhEePd%2BAECBPTy4qQbvNCufUqRCJihHD15BF49gTEwGLXuOuSJMbv%2B5QAxei%2FWDddaMwchiqf%2BO13Skbuz4fPVDhPQWAbOhg8pEe9wIL9d5qAfMqoyoqpbDt0J6ihA2zZk%2BRv3VikPJTlfVAjs2V%2BzLX3cP8b7iZbW0T82%2FgHWVLqAGSGDQ6uVQH52NYjebTqZpIISJldvRETbWw%2Bf%2BYDyp5eHCBmG40UdYAC5nDSm3PqVoyUPS5pIS9qaF3p%2BwBXkG6WvlRtmXZr%2FWhCb9nD9IufvMmJriVhORQbl%2BWueArxhFp4F7mOTv2LIxSn0tt%2F4xJBNujlIUaoMkX8djvlB4bMnqSYBxKqixL3XNGKXgOXQ0NMwUsxT%2FMNbX4tEGOqUBwOgu%2BOwueXPmTNyTvg7aFH8GZFO2RXsHdkG%2B7DoAxg70nmUWgjWdoVlb0NpD7ZSnD9lAUN8d%2B1jrpDQGXXbuKvCuXkqJrc7lMcw40IA0ha1oO12%2FRVZp3cMLh0RdNavBOhXAn6cHvs6B97noqi0tkFWsK2FKSLWGJWkmuasBTMB5Y17DYYcJ2bfiNlO1FzJZijPSZBM682ylkt17pZZTwuVHnxOm&X-Amz-Signature=dd94735993042fa718035c910efb7cd5a89d72510f2c2d45339b785f63783213&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z7NUZEN%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDXXoL780E2Vs1kSVydWYgTBrawzns9v6B1%2F3hYi3keYgIgOnHps9FtOm9J3OagrFrpUsx7tu3DoW8U5eWhkcwXbRMqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsd4X6exMXekcShbCrcA5BIt%2BgB9y8wkBtRqBCczu1wicsa167oE92gRuAc2e%2B3%2FK3WRbUy%2FJhWx8uWvizbwz8hsjQ6YpMc8hCSWmHvdmQqYvhlJWf7tljZ0TcdvHlMlm5wQ7AecUGdjblIjPTN%2BcTAxRvvV6qoAgRcNY1horRLsLMGmapPqqbS9eAAVY4p4pCapWwCZmzJ0K7SOE64J3%2F5tM%2FvUfwHG5Es%2Bh%2Bu8J0FR2VH6jwXrn4Txm0p82F%2B1o8ry3%2FZ%2F6AGrIn7yRZ6crecfNhEePd%2BAECBPTy4qQbvNCufUqRCJihHD15BF49gTEwGLXuOuSJMbv%2B5QAxei%2FWDddaMwchiqf%2BO13Skbuz4fPVDhPQWAbOhg8pEe9wIL9d5qAfMqoyoqpbDt0J6ihA2zZk%2BRv3VikPJTlfVAjs2V%2BzLX3cP8b7iZbW0T82%2FgHWVLqAGSGDQ6uVQH52NYjebTqZpIISJldvRETbWw%2Bf%2BYDyp5eHCBmG40UdYAC5nDSm3PqVoyUPS5pIS9qaF3p%2BwBXkG6WvlRtmXZr%2FWhCb9nD9IufvMmJriVhORQbl%2BWueArxhFp4F7mOTv2LIxSn0tt%2F4xJBNujlIUaoMkX8djvlB4bMnqSYBxKqixL3XNGKXgOXQ0NMwUsxT%2FMNbX4tEGOqUBwOgu%2BOwueXPmTNyTvg7aFH8GZFO2RXsHdkG%2B7DoAxg70nmUWgjWdoVlb0NpD7ZSnD9lAUN8d%2B1jrpDQGXXbuKvCuXkqJrc7lMcw40IA0ha1oO12%2FRVZp3cMLh0RdNavBOhXAn6cHvs6B97noqi0tkFWsK2FKSLWGJWkmuasBTMB5Y17DYYcJ2bfiNlO1FzJZijPSZBM682ylkt17pZZTwuVHnxOm&X-Amz-Signature=84168fcee84420de80ecd83d73dc1ccf186c37b4846f01e108bfd51366e0cd86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
