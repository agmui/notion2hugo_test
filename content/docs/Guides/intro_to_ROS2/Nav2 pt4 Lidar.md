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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPTTV3PC%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQC9dVIjBzF2e%2Bcv6Q4hUye1CR7U%2F0JkUk4I8fjF3PzSbAIgVjLNVvlHyvJP8qCOxT88flMZJhXK82qI5tFKKUYcpnIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDKtUanmTuePYSsuyMyrcA5j3Q5FRybQC75ZHahfpe40mVicXJFYO8k5vwbsKNM4Y%2BLTgNv1mlEHzsumpsuCYGGvW13VJWxygOWG6Je9VYpoQwTxx348uJJWifG5P1NFbGlf7i5AJzWXaPQX47gO5wIe%2Bi6yqRxI74RuWtH%2BxvXgvlON%2Fbtn92tVCgNOPbEwSkgG8EwmqV%2FMksgG%2FuQivqYGsvikrHHMpq6WoFeSa7IypsIX8k7UnjIotF1gcMT8%2BG5mk5UV7EOqYEyX9Llhaz2Rw%2BZLYjrv4%2FTDMxLonxJXUCbl8PFPB80MtzLs77wxh9sDHLHt2Pevvlgh2tB0%2FHC5NEeUbQwKMYg8plGmsJ7bWsUA4vV%2BL8gWVCSI7MDpNI1W5lXhcI7OmInlG%2F%2BPjV62Kh5UR6HI%2BUejrkj9jNMqgSVtpg2TTn5rp%2BLnbksa5CDnwq8HxQESVrxwjBY7ItfLOD5cS5wuV41RzLCdpriNNkYcZXfZ4rSjKOn7md3GNMCNGcZgujF%2FS9fSnx1J0NNfaTCq0aD%2BDVe0a2iRsOwB34dZI1vWk58qtRBfRdPV1nrs2UWQCE9iGXLiPW8i80H5cfalDfhwzFvw%2F7x4SC6U6w%2BmLczeATG616iaYiUJiomlJZcMVsj6jAyVJMJSzxsQGOqUB74xcuGnFW2UkuzLvL5cXSq7v79LR3naEiwSAomxeDFBK1DCB5kUBUt4b2qI4thUhjF4G3c4Y51CHdpkxrs1C%2BgsikVvcv7b8%2FAUch14NvxsqZsCubJOlnkXawmpWmLGsJrt2zXSPLTmrHrBIsMJQKRvNEsPfiYUbfxEOh58biciH6jwbBnGTtK4B9e%2B4bI%2BVNKfIMUoAXKpx6ttPAduEgn0DPxqP&X-Amz-Signature=0147fcc6cd849efc4b93dcc1cadfe3d85bdd09ac7466bc53b3d87c0147306283&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDEVUT6B%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDEtlZL9s3DM0oIlBzCp5sH6OiZWnvYtLQAmFN3NOy%2B2QIgCYX%2B9yyAV1fcfB3fdbbrNR2HiVcffpgrhMMsOpzY7C0q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDxV%2FlQbV95cGrZJLyrcA4dhtTg65kxCr3LsegTdiJBRuYq0XfRNWJWxZe7PABRjqEWhN%2FL20qqbznuriQQbo89r1yOx%2BS3yDMUA9j%2BSEcXWxDAOCLM44eWdKOLx99wgFxP%2BJWJl7KUR716tb9vxbZsE2Ku3RpN4ZSSwlcS1avoKMQK5B1Gi38VrVVfRMmwfiYqQI2qJRF%2BYZBsgW9IaUXEkWuPRn64GSbVd8SjhSoLd3WnxVV%2BezRN4ohA%2FfZ488XhC1EAbbnCnFUFaCvxe2Czy7bPAM%2FY0X1uuvDZiL8T4A64U%2FVlBYy%2Bmw%2FjHtNv5GtHIBKor2AuYMcxdRV7X1NA%2FWqd3r7ABNIllVf8wtBCfYm7pL9coZpiTvHryi%2BuR585oYqE094ssw7BiVhBvX60Lu%2BgplWBQNFR7hCVLEJoXo8NODhg6i2l8W3I184hKu6QM1s8CogINS9tlk%2BT8XGC0PYuoTVf4%2F%2Fg1oKYQWH4diyMAqbZL%2BATAv4d8ZOZJ%2FIi2%2F2vz3dSf1GL1GOOJyEJVhF%2BGExnawACrqbBd7V4s%2B%2FlIpDY3VGt6IZj1yfx5liIbLUU4mixN2biQkAvybMXTOQH0btxb3HigkGRzRbY2Euu981KbugYZN%2BWtXzYKsEZOoThxuX4JJHHvMJWzxsQGOqUBqmP7a3pJBwhO6RgZb9qcose2vLueep%2BXx7boFgSZuDEzP6GX7cha2FvRGvK1Xru%2BUhHz4eIY66sBCxdH5oG86nWEOf7Pa3GhZ5t69S%2BKT%2BKYGPK2%2FhIeS5g%2Bc9WZ9WyB9e8cgnqSCBjPhqaqUN6E5wj7PK7QbKd6mQ3MwL%2BDV5GShKpvP5qFBUu5cct%2F9TvrU0BrwGZhhhzP%2FOpdgK0C6OshmVcb&X-Amz-Signature=a925a19cb3f397609a0ce402fbbacbbdc50ebf1a70e1781cf3626d51843667ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDEVUT6B%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDEtlZL9s3DM0oIlBzCp5sH6OiZWnvYtLQAmFN3NOy%2B2QIgCYX%2B9yyAV1fcfB3fdbbrNR2HiVcffpgrhMMsOpzY7C0q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDxV%2FlQbV95cGrZJLyrcA4dhtTg65kxCr3LsegTdiJBRuYq0XfRNWJWxZe7PABRjqEWhN%2FL20qqbznuriQQbo89r1yOx%2BS3yDMUA9j%2BSEcXWxDAOCLM44eWdKOLx99wgFxP%2BJWJl7KUR716tb9vxbZsE2Ku3RpN4ZSSwlcS1avoKMQK5B1Gi38VrVVfRMmwfiYqQI2qJRF%2BYZBsgW9IaUXEkWuPRn64GSbVd8SjhSoLd3WnxVV%2BezRN4ohA%2FfZ488XhC1EAbbnCnFUFaCvxe2Czy7bPAM%2FY0X1uuvDZiL8T4A64U%2FVlBYy%2Bmw%2FjHtNv5GtHIBKor2AuYMcxdRV7X1NA%2FWqd3r7ABNIllVf8wtBCfYm7pL9coZpiTvHryi%2BuR585oYqE094ssw7BiVhBvX60Lu%2BgplWBQNFR7hCVLEJoXo8NODhg6i2l8W3I184hKu6QM1s8CogINS9tlk%2BT8XGC0PYuoTVf4%2F%2Fg1oKYQWH4diyMAqbZL%2BATAv4d8ZOZJ%2FIi2%2F2vz3dSf1GL1GOOJyEJVhF%2BGExnawACrqbBd7V4s%2B%2FlIpDY3VGt6IZj1yfx5liIbLUU4mixN2biQkAvybMXTOQH0btxb3HigkGRzRbY2Euu981KbugYZN%2BWtXzYKsEZOoThxuX4JJHHvMJWzxsQGOqUBqmP7a3pJBwhO6RgZb9qcose2vLueep%2BXx7boFgSZuDEzP6GX7cha2FvRGvK1Xru%2BUhHz4eIY66sBCxdH5oG86nWEOf7Pa3GhZ5t69S%2BKT%2BKYGPK2%2FhIeS5g%2Bc9WZ9WyB9e8cgnqSCBjPhqaqUN6E5wj7PK7QbKd6mQ3MwL%2BDV5GShKpvP5qFBUu5cct%2F9TvrU0BrwGZhhhzP%2FOpdgK0C6OshmVcb&X-Amz-Signature=58cbd7a095c54b9f41be6ef0f76232253ce39ab972bc0de25df85756e395cc01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDEVUT6B%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDEtlZL9s3DM0oIlBzCp5sH6OiZWnvYtLQAmFN3NOy%2B2QIgCYX%2B9yyAV1fcfB3fdbbrNR2HiVcffpgrhMMsOpzY7C0q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDxV%2FlQbV95cGrZJLyrcA4dhtTg65kxCr3LsegTdiJBRuYq0XfRNWJWxZe7PABRjqEWhN%2FL20qqbznuriQQbo89r1yOx%2BS3yDMUA9j%2BSEcXWxDAOCLM44eWdKOLx99wgFxP%2BJWJl7KUR716tb9vxbZsE2Ku3RpN4ZSSwlcS1avoKMQK5B1Gi38VrVVfRMmwfiYqQI2qJRF%2BYZBsgW9IaUXEkWuPRn64GSbVd8SjhSoLd3WnxVV%2BezRN4ohA%2FfZ488XhC1EAbbnCnFUFaCvxe2Czy7bPAM%2FY0X1uuvDZiL8T4A64U%2FVlBYy%2Bmw%2FjHtNv5GtHIBKor2AuYMcxdRV7X1NA%2FWqd3r7ABNIllVf8wtBCfYm7pL9coZpiTvHryi%2BuR585oYqE094ssw7BiVhBvX60Lu%2BgplWBQNFR7hCVLEJoXo8NODhg6i2l8W3I184hKu6QM1s8CogINS9tlk%2BT8XGC0PYuoTVf4%2F%2Fg1oKYQWH4diyMAqbZL%2BATAv4d8ZOZJ%2FIi2%2F2vz3dSf1GL1GOOJyEJVhF%2BGExnawACrqbBd7V4s%2B%2FlIpDY3VGt6IZj1yfx5liIbLUU4mixN2biQkAvybMXTOQH0btxb3HigkGRzRbY2Euu981KbugYZN%2BWtXzYKsEZOoThxuX4JJHHvMJWzxsQGOqUBqmP7a3pJBwhO6RgZb9qcose2vLueep%2BXx7boFgSZuDEzP6GX7cha2FvRGvK1Xru%2BUhHz4eIY66sBCxdH5oG86nWEOf7Pa3GhZ5t69S%2BKT%2BKYGPK2%2FhIeS5g%2Bc9WZ9WyB9e8cgnqSCBjPhqaqUN6E5wj7PK7QbKd6mQ3MwL%2BDV5GShKpvP5qFBUu5cct%2F9TvrU0BrwGZhhhzP%2FOpdgK0C6OshmVcb&X-Amz-Signature=b7565d1d8d3ad9d5dc7f7c14bb06bbbdb0a7e45e213260474b3a8e8a6fa139f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDEVUT6B%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDEtlZL9s3DM0oIlBzCp5sH6OiZWnvYtLQAmFN3NOy%2B2QIgCYX%2B9yyAV1fcfB3fdbbrNR2HiVcffpgrhMMsOpzY7C0q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDxV%2FlQbV95cGrZJLyrcA4dhtTg65kxCr3LsegTdiJBRuYq0XfRNWJWxZe7PABRjqEWhN%2FL20qqbznuriQQbo89r1yOx%2BS3yDMUA9j%2BSEcXWxDAOCLM44eWdKOLx99wgFxP%2BJWJl7KUR716tb9vxbZsE2Ku3RpN4ZSSwlcS1avoKMQK5B1Gi38VrVVfRMmwfiYqQI2qJRF%2BYZBsgW9IaUXEkWuPRn64GSbVd8SjhSoLd3WnxVV%2BezRN4ohA%2FfZ488XhC1EAbbnCnFUFaCvxe2Czy7bPAM%2FY0X1uuvDZiL8T4A64U%2FVlBYy%2Bmw%2FjHtNv5GtHIBKor2AuYMcxdRV7X1NA%2FWqd3r7ABNIllVf8wtBCfYm7pL9coZpiTvHryi%2BuR585oYqE094ssw7BiVhBvX60Lu%2BgplWBQNFR7hCVLEJoXo8NODhg6i2l8W3I184hKu6QM1s8CogINS9tlk%2BT8XGC0PYuoTVf4%2F%2Fg1oKYQWH4diyMAqbZL%2BATAv4d8ZOZJ%2FIi2%2F2vz3dSf1GL1GOOJyEJVhF%2BGExnawACrqbBd7V4s%2B%2FlIpDY3VGt6IZj1yfx5liIbLUU4mixN2biQkAvybMXTOQH0btxb3HigkGRzRbY2Euu981KbugYZN%2BWtXzYKsEZOoThxuX4JJHHvMJWzxsQGOqUBqmP7a3pJBwhO6RgZb9qcose2vLueep%2BXx7boFgSZuDEzP6GX7cha2FvRGvK1Xru%2BUhHz4eIY66sBCxdH5oG86nWEOf7Pa3GhZ5t69S%2BKT%2BKYGPK2%2FhIeS5g%2Bc9WZ9WyB9e8cgnqSCBjPhqaqUN6E5wj7PK7QbKd6mQ3MwL%2BDV5GShKpvP5qFBUu5cct%2F9TvrU0BrwGZhhhzP%2FOpdgK0C6OshmVcb&X-Amz-Signature=5fe148ddc5e0572f13cdc1907965f74678a980b907d46e99140ed898334dd4c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDEVUT6B%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDEtlZL9s3DM0oIlBzCp5sH6OiZWnvYtLQAmFN3NOy%2B2QIgCYX%2B9yyAV1fcfB3fdbbrNR2HiVcffpgrhMMsOpzY7C0q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDxV%2FlQbV95cGrZJLyrcA4dhtTg65kxCr3LsegTdiJBRuYq0XfRNWJWxZe7PABRjqEWhN%2FL20qqbznuriQQbo89r1yOx%2BS3yDMUA9j%2BSEcXWxDAOCLM44eWdKOLx99wgFxP%2BJWJl7KUR716tb9vxbZsE2Ku3RpN4ZSSwlcS1avoKMQK5B1Gi38VrVVfRMmwfiYqQI2qJRF%2BYZBsgW9IaUXEkWuPRn64GSbVd8SjhSoLd3WnxVV%2BezRN4ohA%2FfZ488XhC1EAbbnCnFUFaCvxe2Czy7bPAM%2FY0X1uuvDZiL8T4A64U%2FVlBYy%2Bmw%2FjHtNv5GtHIBKor2AuYMcxdRV7X1NA%2FWqd3r7ABNIllVf8wtBCfYm7pL9coZpiTvHryi%2BuR585oYqE094ssw7BiVhBvX60Lu%2BgplWBQNFR7hCVLEJoXo8NODhg6i2l8W3I184hKu6QM1s8CogINS9tlk%2BT8XGC0PYuoTVf4%2F%2Fg1oKYQWH4diyMAqbZL%2BATAv4d8ZOZJ%2FIi2%2F2vz3dSf1GL1GOOJyEJVhF%2BGExnawACrqbBd7V4s%2B%2FlIpDY3VGt6IZj1yfx5liIbLUU4mixN2biQkAvybMXTOQH0btxb3HigkGRzRbY2Euu981KbugYZN%2BWtXzYKsEZOoThxuX4JJHHvMJWzxsQGOqUBqmP7a3pJBwhO6RgZb9qcose2vLueep%2BXx7boFgSZuDEzP6GX7cha2FvRGvK1Xru%2BUhHz4eIY66sBCxdH5oG86nWEOf7Pa3GhZ5t69S%2BKT%2BKYGPK2%2FhIeS5g%2Bc9WZ9WyB9e8cgnqSCBjPhqaqUN6E5wj7PK7QbKd6mQ3MwL%2BDV5GShKpvP5qFBUu5cct%2F9TvrU0BrwGZhhhzP%2FOpdgK0C6OshmVcb&X-Amz-Signature=132c510011689cb2a75f0efa8a6f76faf75b6fdb10f3d46478de00c7400297d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDEVUT6B%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDEtlZL9s3DM0oIlBzCp5sH6OiZWnvYtLQAmFN3NOy%2B2QIgCYX%2B9yyAV1fcfB3fdbbrNR2HiVcffpgrhMMsOpzY7C0q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDxV%2FlQbV95cGrZJLyrcA4dhtTg65kxCr3LsegTdiJBRuYq0XfRNWJWxZe7PABRjqEWhN%2FL20qqbznuriQQbo89r1yOx%2BS3yDMUA9j%2BSEcXWxDAOCLM44eWdKOLx99wgFxP%2BJWJl7KUR716tb9vxbZsE2Ku3RpN4ZSSwlcS1avoKMQK5B1Gi38VrVVfRMmwfiYqQI2qJRF%2BYZBsgW9IaUXEkWuPRn64GSbVd8SjhSoLd3WnxVV%2BezRN4ohA%2FfZ488XhC1EAbbnCnFUFaCvxe2Czy7bPAM%2FY0X1uuvDZiL8T4A64U%2FVlBYy%2Bmw%2FjHtNv5GtHIBKor2AuYMcxdRV7X1NA%2FWqd3r7ABNIllVf8wtBCfYm7pL9coZpiTvHryi%2BuR585oYqE094ssw7BiVhBvX60Lu%2BgplWBQNFR7hCVLEJoXo8NODhg6i2l8W3I184hKu6QM1s8CogINS9tlk%2BT8XGC0PYuoTVf4%2F%2Fg1oKYQWH4diyMAqbZL%2BATAv4d8ZOZJ%2FIi2%2F2vz3dSf1GL1GOOJyEJVhF%2BGExnawACrqbBd7V4s%2B%2FlIpDY3VGt6IZj1yfx5liIbLUU4mixN2biQkAvybMXTOQH0btxb3HigkGRzRbY2Euu981KbugYZN%2BWtXzYKsEZOoThxuX4JJHHvMJWzxsQGOqUBqmP7a3pJBwhO6RgZb9qcose2vLueep%2BXx7boFgSZuDEzP6GX7cha2FvRGvK1Xru%2BUhHz4eIY66sBCxdH5oG86nWEOf7Pa3GhZ5t69S%2BKT%2BKYGPK2%2FhIeS5g%2Bc9WZ9WyB9e8cgnqSCBjPhqaqUN6E5wj7PK7QbKd6mQ3MwL%2BDV5GShKpvP5qFBUu5cct%2F9TvrU0BrwGZhhhzP%2FOpdgK0C6OshmVcb&X-Amz-Signature=4373bd11090e0a7be69148de004a9fe8898c400dd48a36bc3313804657fbbd40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDEVUT6B%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDEtlZL9s3DM0oIlBzCp5sH6OiZWnvYtLQAmFN3NOy%2B2QIgCYX%2B9yyAV1fcfB3fdbbrNR2HiVcffpgrhMMsOpzY7C0q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDxV%2FlQbV95cGrZJLyrcA4dhtTg65kxCr3LsegTdiJBRuYq0XfRNWJWxZe7PABRjqEWhN%2FL20qqbznuriQQbo89r1yOx%2BS3yDMUA9j%2BSEcXWxDAOCLM44eWdKOLx99wgFxP%2BJWJl7KUR716tb9vxbZsE2Ku3RpN4ZSSwlcS1avoKMQK5B1Gi38VrVVfRMmwfiYqQI2qJRF%2BYZBsgW9IaUXEkWuPRn64GSbVd8SjhSoLd3WnxVV%2BezRN4ohA%2FfZ488XhC1EAbbnCnFUFaCvxe2Czy7bPAM%2FY0X1uuvDZiL8T4A64U%2FVlBYy%2Bmw%2FjHtNv5GtHIBKor2AuYMcxdRV7X1NA%2FWqd3r7ABNIllVf8wtBCfYm7pL9coZpiTvHryi%2BuR585oYqE094ssw7BiVhBvX60Lu%2BgplWBQNFR7hCVLEJoXo8NODhg6i2l8W3I184hKu6QM1s8CogINS9tlk%2BT8XGC0PYuoTVf4%2F%2Fg1oKYQWH4diyMAqbZL%2BATAv4d8ZOZJ%2FIi2%2F2vz3dSf1GL1GOOJyEJVhF%2BGExnawACrqbBd7V4s%2B%2FlIpDY3VGt6IZj1yfx5liIbLUU4mixN2biQkAvybMXTOQH0btxb3HigkGRzRbY2Euu981KbugYZN%2BWtXzYKsEZOoThxuX4JJHHvMJWzxsQGOqUBqmP7a3pJBwhO6RgZb9qcose2vLueep%2BXx7boFgSZuDEzP6GX7cha2FvRGvK1Xru%2BUhHz4eIY66sBCxdH5oG86nWEOf7Pa3GhZ5t69S%2BKT%2BKYGPK2%2FhIeS5g%2Bc9WZ9WyB9e8cgnqSCBjPhqaqUN6E5wj7PK7QbKd6mQ3MwL%2BDV5GShKpvP5qFBUu5cct%2F9TvrU0BrwGZhhhzP%2FOpdgK0C6OshmVcb&X-Amz-Signature=a5ee1a8e84a92c5662ddca06261951d7462ceec843683ac01e6e945e88f27c3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDEVUT6B%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDEtlZL9s3DM0oIlBzCp5sH6OiZWnvYtLQAmFN3NOy%2B2QIgCYX%2B9yyAV1fcfB3fdbbrNR2HiVcffpgrhMMsOpzY7C0q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDxV%2FlQbV95cGrZJLyrcA4dhtTg65kxCr3LsegTdiJBRuYq0XfRNWJWxZe7PABRjqEWhN%2FL20qqbznuriQQbo89r1yOx%2BS3yDMUA9j%2BSEcXWxDAOCLM44eWdKOLx99wgFxP%2BJWJl7KUR716tb9vxbZsE2Ku3RpN4ZSSwlcS1avoKMQK5B1Gi38VrVVfRMmwfiYqQI2qJRF%2BYZBsgW9IaUXEkWuPRn64GSbVd8SjhSoLd3WnxVV%2BezRN4ohA%2FfZ488XhC1EAbbnCnFUFaCvxe2Czy7bPAM%2FY0X1uuvDZiL8T4A64U%2FVlBYy%2Bmw%2FjHtNv5GtHIBKor2AuYMcxdRV7X1NA%2FWqd3r7ABNIllVf8wtBCfYm7pL9coZpiTvHryi%2BuR585oYqE094ssw7BiVhBvX60Lu%2BgplWBQNFR7hCVLEJoXo8NODhg6i2l8W3I184hKu6QM1s8CogINS9tlk%2BT8XGC0PYuoTVf4%2F%2Fg1oKYQWH4diyMAqbZL%2BATAv4d8ZOZJ%2FIi2%2F2vz3dSf1GL1GOOJyEJVhF%2BGExnawACrqbBd7V4s%2B%2FlIpDY3VGt6IZj1yfx5liIbLUU4mixN2biQkAvybMXTOQH0btxb3HigkGRzRbY2Euu981KbugYZN%2BWtXzYKsEZOoThxuX4JJHHvMJWzxsQGOqUBqmP7a3pJBwhO6RgZb9qcose2vLueep%2BXx7boFgSZuDEzP6GX7cha2FvRGvK1Xru%2BUhHz4eIY66sBCxdH5oG86nWEOf7Pa3GhZ5t69S%2BKT%2BKYGPK2%2FhIeS5g%2Bc9WZ9WyB9e8cgnqSCBjPhqaqUN6E5wj7PK7QbKd6mQ3MwL%2BDV5GShKpvP5qFBUu5cct%2F9TvrU0BrwGZhhhzP%2FOpdgK0C6OshmVcb&X-Amz-Signature=03e9023216b1df4c4e0622dab6fb6b840ce3ea14103a633862266e1b2e5e80a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDEVUT6B%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDEtlZL9s3DM0oIlBzCp5sH6OiZWnvYtLQAmFN3NOy%2B2QIgCYX%2B9yyAV1fcfB3fdbbrNR2HiVcffpgrhMMsOpzY7C0q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDxV%2FlQbV95cGrZJLyrcA4dhtTg65kxCr3LsegTdiJBRuYq0XfRNWJWxZe7PABRjqEWhN%2FL20qqbznuriQQbo89r1yOx%2BS3yDMUA9j%2BSEcXWxDAOCLM44eWdKOLx99wgFxP%2BJWJl7KUR716tb9vxbZsE2Ku3RpN4ZSSwlcS1avoKMQK5B1Gi38VrVVfRMmwfiYqQI2qJRF%2BYZBsgW9IaUXEkWuPRn64GSbVd8SjhSoLd3WnxVV%2BezRN4ohA%2FfZ488XhC1EAbbnCnFUFaCvxe2Czy7bPAM%2FY0X1uuvDZiL8T4A64U%2FVlBYy%2Bmw%2FjHtNv5GtHIBKor2AuYMcxdRV7X1NA%2FWqd3r7ABNIllVf8wtBCfYm7pL9coZpiTvHryi%2BuR585oYqE094ssw7BiVhBvX60Lu%2BgplWBQNFR7hCVLEJoXo8NODhg6i2l8W3I184hKu6QM1s8CogINS9tlk%2BT8XGC0PYuoTVf4%2F%2Fg1oKYQWH4diyMAqbZL%2BATAv4d8ZOZJ%2FIi2%2F2vz3dSf1GL1GOOJyEJVhF%2BGExnawACrqbBd7V4s%2B%2FlIpDY3VGt6IZj1yfx5liIbLUU4mixN2biQkAvybMXTOQH0btxb3HigkGRzRbY2Euu981KbugYZN%2BWtXzYKsEZOoThxuX4JJHHvMJWzxsQGOqUBqmP7a3pJBwhO6RgZb9qcose2vLueep%2BXx7boFgSZuDEzP6GX7cha2FvRGvK1Xru%2BUhHz4eIY66sBCxdH5oG86nWEOf7Pa3GhZ5t69S%2BKT%2BKYGPK2%2FhIeS5g%2Bc9WZ9WyB9e8cgnqSCBjPhqaqUN6E5wj7PK7QbKd6mQ3MwL%2BDV5GShKpvP5qFBUu5cct%2F9TvrU0BrwGZhhhzP%2FOpdgK0C6OshmVcb&X-Amz-Signature=041b5df32f11954057c446cbb3b20e1951bc5c4591d96cc8ce7f0d55dbe2df1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDEVUT6B%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDEtlZL9s3DM0oIlBzCp5sH6OiZWnvYtLQAmFN3NOy%2B2QIgCYX%2B9yyAV1fcfB3fdbbrNR2HiVcffpgrhMMsOpzY7C0q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDxV%2FlQbV95cGrZJLyrcA4dhtTg65kxCr3LsegTdiJBRuYq0XfRNWJWxZe7PABRjqEWhN%2FL20qqbznuriQQbo89r1yOx%2BS3yDMUA9j%2BSEcXWxDAOCLM44eWdKOLx99wgFxP%2BJWJl7KUR716tb9vxbZsE2Ku3RpN4ZSSwlcS1avoKMQK5B1Gi38VrVVfRMmwfiYqQI2qJRF%2BYZBsgW9IaUXEkWuPRn64GSbVd8SjhSoLd3WnxVV%2BezRN4ohA%2FfZ488XhC1EAbbnCnFUFaCvxe2Czy7bPAM%2FY0X1uuvDZiL8T4A64U%2FVlBYy%2Bmw%2FjHtNv5GtHIBKor2AuYMcxdRV7X1NA%2FWqd3r7ABNIllVf8wtBCfYm7pL9coZpiTvHryi%2BuR585oYqE094ssw7BiVhBvX60Lu%2BgplWBQNFR7hCVLEJoXo8NODhg6i2l8W3I184hKu6QM1s8CogINS9tlk%2BT8XGC0PYuoTVf4%2F%2Fg1oKYQWH4diyMAqbZL%2BATAv4d8ZOZJ%2FIi2%2F2vz3dSf1GL1GOOJyEJVhF%2BGExnawACrqbBd7V4s%2B%2FlIpDY3VGt6IZj1yfx5liIbLUU4mixN2biQkAvybMXTOQH0btxb3HigkGRzRbY2Euu981KbugYZN%2BWtXzYKsEZOoThxuX4JJHHvMJWzxsQGOqUBqmP7a3pJBwhO6RgZb9qcose2vLueep%2BXx7boFgSZuDEzP6GX7cha2FvRGvK1Xru%2BUhHz4eIY66sBCxdH5oG86nWEOf7Pa3GhZ5t69S%2BKT%2BKYGPK2%2FhIeS5g%2Bc9WZ9WyB9e8cgnqSCBjPhqaqUN6E5wj7PK7QbKd6mQ3MwL%2BDV5GShKpvP5qFBUu5cct%2F9TvrU0BrwGZhhhzP%2FOpdgK0C6OshmVcb&X-Amz-Signature=5fe148ddc5e0572f13cdc1907965f74678a980b907d46e99140ed898334dd4c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
