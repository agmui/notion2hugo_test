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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFFOKJ3E%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIG37ZHydUESBc7TwaHmbffNQu3wRnlx43qB1yPTO0aNeAiBgCn%2BMfExXNZgXFE4%2F03EqBj7RJDoYCgkqpbSne2UyWSr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMjZb6jB8iD6kncmK9KtwDznrbtoK9L%2BbvAwEww3a9cMYX24jseGGGAv%2BBDw4QB5k9kmNC8a4dB9pDW5vpM0ulEGnIF3hrkK3mwfR951zyuOTAhmX%2FeHaCxVJuz9PZrhUgHK6mP8PCiJrTjxo3wP2QTTdsw0zhHbgu1iF33hk9XfJYRMZB6PJPAejX4JhAJlQeBuNRyKLcP919IstGp%2BU0fXOtthaKGQd2I6XxXdnELMbCAoejxt9EoUvw1PjD8jsHFPtgwQqfSEJVOdo8e8BV3ZIOGJ%2FMd9mEePFF6lskC%2F9qPp%2BDb3crRiXIYqvPr%2FTjG2qltqKOdXxa3f0jiRltghL%2FyoqJFMx1WCFXPm%2BbaYw7hb4XdQ113Rzqca6SjJARzlohjWuTU3MKRqPsAk%2FqSuVQRhitjcp91qcWBZNEMa7GVUKUpYsC%2FT2YuHs%2FPjqGvzkV2yAvbzDNB3uJ9bzbtiPIUHkBTIO1Ol0UgSjAWJECOykVugulGB0FRoSka2ZX1P2tvTRPopEimVmF%2FN8JujotOet45NKtbocU7TUvjx8hTVrbWjEvLN134fx2qlpmBWl%2F5skN%2FmCPZPWM5xFH6uCb6g2wN97EvDODhpxuJEZfgVAfv2EIIkZP5fL5AA6iFdGQ3ZuiQwwUy%2BYwqO2D1AY6pgGOMJErN6miI9UUJ0xBxkLIV0POZttoYl5HvERe6YogBS7V4TljXzg8JSg9yu0yRGYBSYy3tLpwrM%2BeoZvAxIZJKNPBzyHyeq75LBAOCcDI6Zj1fngDua7BhCZu79YO90RmG06diBiRIY7jMPqY5%2FtLtdfSOdxDQD5KFGqJD1oLOMHlZYgSp6Zwl%2Bd2J9FnWnfYxeJyEseFxz%2B1RoOk2XPFGthGDxbN&X-Amz-Signature=cb204ea0e284e99cd0627cd15ed1a28b9fe542c03f15fc902a5af95f35998e73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP4AXVIZ%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIA4kToZP2bgGERB9hTgB6LHQUQXexT9d2bBc4ORTtuaAAiAJzFsZXFtQYMjOY%2B4Ynjlo7zhSC6yAlFC41T6rihNQKCr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMiI3OG4o2TKPNEhO%2BKtwDrA7lCQD8%2FaGraTNK%2Fx724CdhzihJRPdHGCkQ0M6DnUriH1Y6mqHH9GIRnToPA6XUDnKatrX37PhbEwUMej24f7yoikrTUoZ4SzSx4yGTAxRK2vAylDGBAmGPiNJkjWUAvC8MwavIZSteftCWmactdmaNe9ajltDxfWSS3mxCnB0UUdQmYdq3iR7ro8MCvX0JONu8SS%2FgU2WYZCpjm2psyow8rM1dN3CWG9K62L8iFVtfWFtW5R3WJepzKcPV2XtxNRl1gwF5Le4W7YKYTirj5X1wJ5XfsDObwxwVUcPG7LuyGV62tsEoqeXnsyQcx7reFU8OfQPHvhOngK3BpElnyDXKiKRaimQ9uHDzmRVxvfXAEwI1n%2B%2Bp9tZ5Z8nszUyUuA3i6VjCpBlB3pgCKtQc5rPOUk096OCcscwPQIzAqIh1jjZZdN19nNrWKGN1OhS9oajdm5%2BObrgN40a6dIOaJP8WXhGg0LZNXn%2FpGPxbrch2RH9ijTWPTw6ix2RDa7vIa7%2FywmaaMflLEndCL%2Fo0xxl1aIZphQGS2W8tAdlypbSdJMHe00kMIGJtnDhFndPHB%2FmwCLk6zUEvXsKKlgzutWlMgL6NlzvrTG8aaUAeXCtA449TyTbebA65KUYw5euD1AY6pgGMcGboNl1atocjjzhaxEAp3qcWNmwa%2FusTgYnN6gBV6Fl%2FcqrrR5nQXLhDhAZpZ4uFfoRldUw%2FlE%2F4mf9sQcrc4sjCTWCfrsixwDh6efLBBrxvpUzfydpZZXYHoBfUwALm7DoJ7uKxiSG3Ls0ndgWzduW%2F4N%2F1zu8%2BdqeCMHmFoxPV4Jy6XFXq6MLP816vGlsCswyFH8jzipVdrPMjvdQe8KY1%2BBH4&X-Amz-Signature=1eb392e9daa08de42b46f1db47e015547ac1d40a27c4840b6206c3f456a2982b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP4AXVIZ%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIA4kToZP2bgGERB9hTgB6LHQUQXexT9d2bBc4ORTtuaAAiAJzFsZXFtQYMjOY%2B4Ynjlo7zhSC6yAlFC41T6rihNQKCr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMiI3OG4o2TKPNEhO%2BKtwDrA7lCQD8%2FaGraTNK%2Fx724CdhzihJRPdHGCkQ0M6DnUriH1Y6mqHH9GIRnToPA6XUDnKatrX37PhbEwUMej24f7yoikrTUoZ4SzSx4yGTAxRK2vAylDGBAmGPiNJkjWUAvC8MwavIZSteftCWmactdmaNe9ajltDxfWSS3mxCnB0UUdQmYdq3iR7ro8MCvX0JONu8SS%2FgU2WYZCpjm2psyow8rM1dN3CWG9K62L8iFVtfWFtW5R3WJepzKcPV2XtxNRl1gwF5Le4W7YKYTirj5X1wJ5XfsDObwxwVUcPG7LuyGV62tsEoqeXnsyQcx7reFU8OfQPHvhOngK3BpElnyDXKiKRaimQ9uHDzmRVxvfXAEwI1n%2B%2Bp9tZ5Z8nszUyUuA3i6VjCpBlB3pgCKtQc5rPOUk096OCcscwPQIzAqIh1jjZZdN19nNrWKGN1OhS9oajdm5%2BObrgN40a6dIOaJP8WXhGg0LZNXn%2FpGPxbrch2RH9ijTWPTw6ix2RDa7vIa7%2FywmaaMflLEndCL%2Fo0xxl1aIZphQGS2W8tAdlypbSdJMHe00kMIGJtnDhFndPHB%2FmwCLk6zUEvXsKKlgzutWlMgL6NlzvrTG8aaUAeXCtA449TyTbebA65KUYw5euD1AY6pgGMcGboNl1atocjjzhaxEAp3qcWNmwa%2FusTgYnN6gBV6Fl%2FcqrrR5nQXLhDhAZpZ4uFfoRldUw%2FlE%2F4mf9sQcrc4sjCTWCfrsixwDh6efLBBrxvpUzfydpZZXYHoBfUwALm7DoJ7uKxiSG3Ls0ndgWzduW%2F4N%2F1zu8%2BdqeCMHmFoxPV4Jy6XFXq6MLP816vGlsCswyFH8jzipVdrPMjvdQe8KY1%2BBH4&X-Amz-Signature=36080cdfa68d9783bbd8924450e8d25b55398a09f7fc29d86e1658a311a50553&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP4AXVIZ%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIA4kToZP2bgGERB9hTgB6LHQUQXexT9d2bBc4ORTtuaAAiAJzFsZXFtQYMjOY%2B4Ynjlo7zhSC6yAlFC41T6rihNQKCr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMiI3OG4o2TKPNEhO%2BKtwDrA7lCQD8%2FaGraTNK%2Fx724CdhzihJRPdHGCkQ0M6DnUriH1Y6mqHH9GIRnToPA6XUDnKatrX37PhbEwUMej24f7yoikrTUoZ4SzSx4yGTAxRK2vAylDGBAmGPiNJkjWUAvC8MwavIZSteftCWmactdmaNe9ajltDxfWSS3mxCnB0UUdQmYdq3iR7ro8MCvX0JONu8SS%2FgU2WYZCpjm2psyow8rM1dN3CWG9K62L8iFVtfWFtW5R3WJepzKcPV2XtxNRl1gwF5Le4W7YKYTirj5X1wJ5XfsDObwxwVUcPG7LuyGV62tsEoqeXnsyQcx7reFU8OfQPHvhOngK3BpElnyDXKiKRaimQ9uHDzmRVxvfXAEwI1n%2B%2Bp9tZ5Z8nszUyUuA3i6VjCpBlB3pgCKtQc5rPOUk096OCcscwPQIzAqIh1jjZZdN19nNrWKGN1OhS9oajdm5%2BObrgN40a6dIOaJP8WXhGg0LZNXn%2FpGPxbrch2RH9ijTWPTw6ix2RDa7vIa7%2FywmaaMflLEndCL%2Fo0xxl1aIZphQGS2W8tAdlypbSdJMHe00kMIGJtnDhFndPHB%2FmwCLk6zUEvXsKKlgzutWlMgL6NlzvrTG8aaUAeXCtA449TyTbebA65KUYw5euD1AY6pgGMcGboNl1atocjjzhaxEAp3qcWNmwa%2FusTgYnN6gBV6Fl%2FcqrrR5nQXLhDhAZpZ4uFfoRldUw%2FlE%2F4mf9sQcrc4sjCTWCfrsixwDh6efLBBrxvpUzfydpZZXYHoBfUwALm7DoJ7uKxiSG3Ls0ndgWzduW%2F4N%2F1zu8%2BdqeCMHmFoxPV4Jy6XFXq6MLP816vGlsCswyFH8jzipVdrPMjvdQe8KY1%2BBH4&X-Amz-Signature=6251e0b3e63a65afba74a6cf4bfd4340e50f8f3a89328e6e08744ad1f67eee0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP4AXVIZ%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIA4kToZP2bgGERB9hTgB6LHQUQXexT9d2bBc4ORTtuaAAiAJzFsZXFtQYMjOY%2B4Ynjlo7zhSC6yAlFC41T6rihNQKCr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMiI3OG4o2TKPNEhO%2BKtwDrA7lCQD8%2FaGraTNK%2Fx724CdhzihJRPdHGCkQ0M6DnUriH1Y6mqHH9GIRnToPA6XUDnKatrX37PhbEwUMej24f7yoikrTUoZ4SzSx4yGTAxRK2vAylDGBAmGPiNJkjWUAvC8MwavIZSteftCWmactdmaNe9ajltDxfWSS3mxCnB0UUdQmYdq3iR7ro8MCvX0JONu8SS%2FgU2WYZCpjm2psyow8rM1dN3CWG9K62L8iFVtfWFtW5R3WJepzKcPV2XtxNRl1gwF5Le4W7YKYTirj5X1wJ5XfsDObwxwVUcPG7LuyGV62tsEoqeXnsyQcx7reFU8OfQPHvhOngK3BpElnyDXKiKRaimQ9uHDzmRVxvfXAEwI1n%2B%2Bp9tZ5Z8nszUyUuA3i6VjCpBlB3pgCKtQc5rPOUk096OCcscwPQIzAqIh1jjZZdN19nNrWKGN1OhS9oajdm5%2BObrgN40a6dIOaJP8WXhGg0LZNXn%2FpGPxbrch2RH9ijTWPTw6ix2RDa7vIa7%2FywmaaMflLEndCL%2Fo0xxl1aIZphQGS2W8tAdlypbSdJMHe00kMIGJtnDhFndPHB%2FmwCLk6zUEvXsKKlgzutWlMgL6NlzvrTG8aaUAeXCtA449TyTbebA65KUYw5euD1AY6pgGMcGboNl1atocjjzhaxEAp3qcWNmwa%2FusTgYnN6gBV6Fl%2FcqrrR5nQXLhDhAZpZ4uFfoRldUw%2FlE%2F4mf9sQcrc4sjCTWCfrsixwDh6efLBBrxvpUzfydpZZXYHoBfUwALm7DoJ7uKxiSG3Ls0ndgWzduW%2F4N%2F1zu8%2BdqeCMHmFoxPV4Jy6XFXq6MLP816vGlsCswyFH8jzipVdrPMjvdQe8KY1%2BBH4&X-Amz-Signature=4372e70e681e1d21255b413d233d00d83e41b888b7ae8aaf99a3611feab0ada6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP4AXVIZ%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIA4kToZP2bgGERB9hTgB6LHQUQXexT9d2bBc4ORTtuaAAiAJzFsZXFtQYMjOY%2B4Ynjlo7zhSC6yAlFC41T6rihNQKCr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMiI3OG4o2TKPNEhO%2BKtwDrA7lCQD8%2FaGraTNK%2Fx724CdhzihJRPdHGCkQ0M6DnUriH1Y6mqHH9GIRnToPA6XUDnKatrX37PhbEwUMej24f7yoikrTUoZ4SzSx4yGTAxRK2vAylDGBAmGPiNJkjWUAvC8MwavIZSteftCWmactdmaNe9ajltDxfWSS3mxCnB0UUdQmYdq3iR7ro8MCvX0JONu8SS%2FgU2WYZCpjm2psyow8rM1dN3CWG9K62L8iFVtfWFtW5R3WJepzKcPV2XtxNRl1gwF5Le4W7YKYTirj5X1wJ5XfsDObwxwVUcPG7LuyGV62tsEoqeXnsyQcx7reFU8OfQPHvhOngK3BpElnyDXKiKRaimQ9uHDzmRVxvfXAEwI1n%2B%2Bp9tZ5Z8nszUyUuA3i6VjCpBlB3pgCKtQc5rPOUk096OCcscwPQIzAqIh1jjZZdN19nNrWKGN1OhS9oajdm5%2BObrgN40a6dIOaJP8WXhGg0LZNXn%2FpGPxbrch2RH9ijTWPTw6ix2RDa7vIa7%2FywmaaMflLEndCL%2Fo0xxl1aIZphQGS2W8tAdlypbSdJMHe00kMIGJtnDhFndPHB%2FmwCLk6zUEvXsKKlgzutWlMgL6NlzvrTG8aaUAeXCtA449TyTbebA65KUYw5euD1AY6pgGMcGboNl1atocjjzhaxEAp3qcWNmwa%2FusTgYnN6gBV6Fl%2FcqrrR5nQXLhDhAZpZ4uFfoRldUw%2FlE%2F4mf9sQcrc4sjCTWCfrsixwDh6efLBBrxvpUzfydpZZXYHoBfUwALm7DoJ7uKxiSG3Ls0ndgWzduW%2F4N%2F1zu8%2BdqeCMHmFoxPV4Jy6XFXq6MLP816vGlsCswyFH8jzipVdrPMjvdQe8KY1%2BBH4&X-Amz-Signature=aca3270c27b614c51d9e8cba394e17eec34945e431ee51450378b2effbadb480&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP4AXVIZ%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIA4kToZP2bgGERB9hTgB6LHQUQXexT9d2bBc4ORTtuaAAiAJzFsZXFtQYMjOY%2B4Ynjlo7zhSC6yAlFC41T6rihNQKCr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMiI3OG4o2TKPNEhO%2BKtwDrA7lCQD8%2FaGraTNK%2Fx724CdhzihJRPdHGCkQ0M6DnUriH1Y6mqHH9GIRnToPA6XUDnKatrX37PhbEwUMej24f7yoikrTUoZ4SzSx4yGTAxRK2vAylDGBAmGPiNJkjWUAvC8MwavIZSteftCWmactdmaNe9ajltDxfWSS3mxCnB0UUdQmYdq3iR7ro8MCvX0JONu8SS%2FgU2WYZCpjm2psyow8rM1dN3CWG9K62L8iFVtfWFtW5R3WJepzKcPV2XtxNRl1gwF5Le4W7YKYTirj5X1wJ5XfsDObwxwVUcPG7LuyGV62tsEoqeXnsyQcx7reFU8OfQPHvhOngK3BpElnyDXKiKRaimQ9uHDzmRVxvfXAEwI1n%2B%2Bp9tZ5Z8nszUyUuA3i6VjCpBlB3pgCKtQc5rPOUk096OCcscwPQIzAqIh1jjZZdN19nNrWKGN1OhS9oajdm5%2BObrgN40a6dIOaJP8WXhGg0LZNXn%2FpGPxbrch2RH9ijTWPTw6ix2RDa7vIa7%2FywmaaMflLEndCL%2Fo0xxl1aIZphQGS2W8tAdlypbSdJMHe00kMIGJtnDhFndPHB%2FmwCLk6zUEvXsKKlgzutWlMgL6NlzvrTG8aaUAeXCtA449TyTbebA65KUYw5euD1AY6pgGMcGboNl1atocjjzhaxEAp3qcWNmwa%2FusTgYnN6gBV6Fl%2FcqrrR5nQXLhDhAZpZ4uFfoRldUw%2FlE%2F4mf9sQcrc4sjCTWCfrsixwDh6efLBBrxvpUzfydpZZXYHoBfUwALm7DoJ7uKxiSG3Ls0ndgWzduW%2F4N%2F1zu8%2BdqeCMHmFoxPV4Jy6XFXq6MLP816vGlsCswyFH8jzipVdrPMjvdQe8KY1%2BBH4&X-Amz-Signature=ab678b800bdbe3bd4beff91795311fc1e7762bfd4f2157e557d0ec37e4c42e09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP4AXVIZ%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIA4kToZP2bgGERB9hTgB6LHQUQXexT9d2bBc4ORTtuaAAiAJzFsZXFtQYMjOY%2B4Ynjlo7zhSC6yAlFC41T6rihNQKCr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMiI3OG4o2TKPNEhO%2BKtwDrA7lCQD8%2FaGraTNK%2Fx724CdhzihJRPdHGCkQ0M6DnUriH1Y6mqHH9GIRnToPA6XUDnKatrX37PhbEwUMej24f7yoikrTUoZ4SzSx4yGTAxRK2vAylDGBAmGPiNJkjWUAvC8MwavIZSteftCWmactdmaNe9ajltDxfWSS3mxCnB0UUdQmYdq3iR7ro8MCvX0JONu8SS%2FgU2WYZCpjm2psyow8rM1dN3CWG9K62L8iFVtfWFtW5R3WJepzKcPV2XtxNRl1gwF5Le4W7YKYTirj5X1wJ5XfsDObwxwVUcPG7LuyGV62tsEoqeXnsyQcx7reFU8OfQPHvhOngK3BpElnyDXKiKRaimQ9uHDzmRVxvfXAEwI1n%2B%2Bp9tZ5Z8nszUyUuA3i6VjCpBlB3pgCKtQc5rPOUk096OCcscwPQIzAqIh1jjZZdN19nNrWKGN1OhS9oajdm5%2BObrgN40a6dIOaJP8WXhGg0LZNXn%2FpGPxbrch2RH9ijTWPTw6ix2RDa7vIa7%2FywmaaMflLEndCL%2Fo0xxl1aIZphQGS2W8tAdlypbSdJMHe00kMIGJtnDhFndPHB%2FmwCLk6zUEvXsKKlgzutWlMgL6NlzvrTG8aaUAeXCtA449TyTbebA65KUYw5euD1AY6pgGMcGboNl1atocjjzhaxEAp3qcWNmwa%2FusTgYnN6gBV6Fl%2FcqrrR5nQXLhDhAZpZ4uFfoRldUw%2FlE%2F4mf9sQcrc4sjCTWCfrsixwDh6efLBBrxvpUzfydpZZXYHoBfUwALm7DoJ7uKxiSG3Ls0ndgWzduW%2F4N%2F1zu8%2BdqeCMHmFoxPV4Jy6XFXq6MLP816vGlsCswyFH8jzipVdrPMjvdQe8KY1%2BBH4&X-Amz-Signature=dbe029a0c136a9b3569fed6c8a7ff708f656f44e634f1ae61e619705ba6380b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP4AXVIZ%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIA4kToZP2bgGERB9hTgB6LHQUQXexT9d2bBc4ORTtuaAAiAJzFsZXFtQYMjOY%2B4Ynjlo7zhSC6yAlFC41T6rihNQKCr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMiI3OG4o2TKPNEhO%2BKtwDrA7lCQD8%2FaGraTNK%2Fx724CdhzihJRPdHGCkQ0M6DnUriH1Y6mqHH9GIRnToPA6XUDnKatrX37PhbEwUMej24f7yoikrTUoZ4SzSx4yGTAxRK2vAylDGBAmGPiNJkjWUAvC8MwavIZSteftCWmactdmaNe9ajltDxfWSS3mxCnB0UUdQmYdq3iR7ro8MCvX0JONu8SS%2FgU2WYZCpjm2psyow8rM1dN3CWG9K62L8iFVtfWFtW5R3WJepzKcPV2XtxNRl1gwF5Le4W7YKYTirj5X1wJ5XfsDObwxwVUcPG7LuyGV62tsEoqeXnsyQcx7reFU8OfQPHvhOngK3BpElnyDXKiKRaimQ9uHDzmRVxvfXAEwI1n%2B%2Bp9tZ5Z8nszUyUuA3i6VjCpBlB3pgCKtQc5rPOUk096OCcscwPQIzAqIh1jjZZdN19nNrWKGN1OhS9oajdm5%2BObrgN40a6dIOaJP8WXhGg0LZNXn%2FpGPxbrch2RH9ijTWPTw6ix2RDa7vIa7%2FywmaaMflLEndCL%2Fo0xxl1aIZphQGS2W8tAdlypbSdJMHe00kMIGJtnDhFndPHB%2FmwCLk6zUEvXsKKlgzutWlMgL6NlzvrTG8aaUAeXCtA449TyTbebA65KUYw5euD1AY6pgGMcGboNl1atocjjzhaxEAp3qcWNmwa%2FusTgYnN6gBV6Fl%2FcqrrR5nQXLhDhAZpZ4uFfoRldUw%2FlE%2F4mf9sQcrc4sjCTWCfrsixwDh6efLBBrxvpUzfydpZZXYHoBfUwALm7DoJ7uKxiSG3Ls0ndgWzduW%2F4N%2F1zu8%2BdqeCMHmFoxPV4Jy6XFXq6MLP816vGlsCswyFH8jzipVdrPMjvdQe8KY1%2BBH4&X-Amz-Signature=f3c4e002cbe5d85276a6d727e15fa185c5c375989af54c6126ef484af7d52632&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP4AXVIZ%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIA4kToZP2bgGERB9hTgB6LHQUQXexT9d2bBc4ORTtuaAAiAJzFsZXFtQYMjOY%2B4Ynjlo7zhSC6yAlFC41T6rihNQKCr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMiI3OG4o2TKPNEhO%2BKtwDrA7lCQD8%2FaGraTNK%2Fx724CdhzihJRPdHGCkQ0M6DnUriH1Y6mqHH9GIRnToPA6XUDnKatrX37PhbEwUMej24f7yoikrTUoZ4SzSx4yGTAxRK2vAylDGBAmGPiNJkjWUAvC8MwavIZSteftCWmactdmaNe9ajltDxfWSS3mxCnB0UUdQmYdq3iR7ro8MCvX0JONu8SS%2FgU2WYZCpjm2psyow8rM1dN3CWG9K62L8iFVtfWFtW5R3WJepzKcPV2XtxNRl1gwF5Le4W7YKYTirj5X1wJ5XfsDObwxwVUcPG7LuyGV62tsEoqeXnsyQcx7reFU8OfQPHvhOngK3BpElnyDXKiKRaimQ9uHDzmRVxvfXAEwI1n%2B%2Bp9tZ5Z8nszUyUuA3i6VjCpBlB3pgCKtQc5rPOUk096OCcscwPQIzAqIh1jjZZdN19nNrWKGN1OhS9oajdm5%2BObrgN40a6dIOaJP8WXhGg0LZNXn%2FpGPxbrch2RH9ijTWPTw6ix2RDa7vIa7%2FywmaaMflLEndCL%2Fo0xxl1aIZphQGS2W8tAdlypbSdJMHe00kMIGJtnDhFndPHB%2FmwCLk6zUEvXsKKlgzutWlMgL6NlzvrTG8aaUAeXCtA449TyTbebA65KUYw5euD1AY6pgGMcGboNl1atocjjzhaxEAp3qcWNmwa%2FusTgYnN6gBV6Fl%2FcqrrR5nQXLhDhAZpZ4uFfoRldUw%2FlE%2F4mf9sQcrc4sjCTWCfrsixwDh6efLBBrxvpUzfydpZZXYHoBfUwALm7DoJ7uKxiSG3Ls0ndgWzduW%2F4N%2F1zu8%2BdqeCMHmFoxPV4Jy6XFXq6MLP816vGlsCswyFH8jzipVdrPMjvdQe8KY1%2BBH4&X-Amz-Signature=8145a997573a875395cff3cbaab6c2bb55ad3de5d1b6795e2fcdd035f7a63312&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP4AXVIZ%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIA4kToZP2bgGERB9hTgB6LHQUQXexT9d2bBc4ORTtuaAAiAJzFsZXFtQYMjOY%2B4Ynjlo7zhSC6yAlFC41T6rihNQKCr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMiI3OG4o2TKPNEhO%2BKtwDrA7lCQD8%2FaGraTNK%2Fx724CdhzihJRPdHGCkQ0M6DnUriH1Y6mqHH9GIRnToPA6XUDnKatrX37PhbEwUMej24f7yoikrTUoZ4SzSx4yGTAxRK2vAylDGBAmGPiNJkjWUAvC8MwavIZSteftCWmactdmaNe9ajltDxfWSS3mxCnB0UUdQmYdq3iR7ro8MCvX0JONu8SS%2FgU2WYZCpjm2psyow8rM1dN3CWG9K62L8iFVtfWFtW5R3WJepzKcPV2XtxNRl1gwF5Le4W7YKYTirj5X1wJ5XfsDObwxwVUcPG7LuyGV62tsEoqeXnsyQcx7reFU8OfQPHvhOngK3BpElnyDXKiKRaimQ9uHDzmRVxvfXAEwI1n%2B%2Bp9tZ5Z8nszUyUuA3i6VjCpBlB3pgCKtQc5rPOUk096OCcscwPQIzAqIh1jjZZdN19nNrWKGN1OhS9oajdm5%2BObrgN40a6dIOaJP8WXhGg0LZNXn%2FpGPxbrch2RH9ijTWPTw6ix2RDa7vIa7%2FywmaaMflLEndCL%2Fo0xxl1aIZphQGS2W8tAdlypbSdJMHe00kMIGJtnDhFndPHB%2FmwCLk6zUEvXsKKlgzutWlMgL6NlzvrTG8aaUAeXCtA449TyTbebA65KUYw5euD1AY6pgGMcGboNl1atocjjzhaxEAp3qcWNmwa%2FusTgYnN6gBV6Fl%2FcqrrR5nQXLhDhAZpZ4uFfoRldUw%2FlE%2F4mf9sQcrc4sjCTWCfrsixwDh6efLBBrxvpUzfydpZZXYHoBfUwALm7DoJ7uKxiSG3Ls0ndgWzduW%2F4N%2F1zu8%2BdqeCMHmFoxPV4Jy6XFXq6MLP816vGlsCswyFH8jzipVdrPMjvdQe8KY1%2BBH4&X-Amz-Signature=cf73774fce05da0f14ddd114abae49126996a33b47eca12921ac0eebb1fb80d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
