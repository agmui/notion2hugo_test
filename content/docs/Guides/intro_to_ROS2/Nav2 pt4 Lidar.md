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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVZUA46X%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUlOi92FlkLI83rq%2F7FPgB8t1eOhY2Y3EUfcbwJVJ8yAiEA166DdxOrpHO9RL9gFtLjKAbMp8KwmPRrum7nCE%2F%2B6jgq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDC2EoADiZhIGgGKXZSrcA77N8g3Gyi5NpCeGucM1hw7h3B%2BGTEQWriHSezmJyPII0dY2XxnwcvI5A98nblFg6%2B0W5hc2GvCULohLohjNKs%2BLTOOAKTiDwjeWSDuwlhc4YtY3B5N6DY17S7%2Fvwm3%2BKIe8JOYWS2d5v6TKF%2BPjIVV%2BBe%2BHChIB91JZTWEhwzAB009Z%2FqF%2FVzn7MQrCUxSPs0U7PQ%2F%2FkV8vcqvEU%2FsB9YlGNly99y3ZqQhwuTlYyT1Vl0Ulblevh2APfyHuomwa9RrFRiGhOVW8fDneBOHdOZr0R8Y6ApFcCgheBD7fw5vqtQMUlMbFQRCmPDWfx88UnmMNqC%2BbvqpFMimu6O48G0oGxaEd7IzrUkGQ4RwSdhuHlVOHqg3pqenAgv8moVWi8%2FPaCXrW02DYWQlBSHFIKzgRm7v2zHDyzFQGSXQkMTUjbuiI%2FcrJwjsgY38CVfxWtWnhJYqZAxDt28EMvxEmpATeHXUqJFh5tlhqYGpkrQ0S%2FZVPBEVSW5%2FxF6%2BIO52lvH32Pv9MKz74pvDa3Yyx8XCNI6ulFYe%2Flsw1HmitBPdC93PwRFKW6M4gQiZk65sehNxJK1T0gYyZAjPAnvmNcgVxCOxeF9OWzyjEldQUGfh1%2FILF%2B8nik33qPdbPMOOG7M4GOqUBdS4FP0lwk3iiT1rmlz2OJsQsWboMtjxW3L1Se%2F1wc3zi7%2FpT35PiraLz0DlkdC%2B5Bxo%2BXxV1g%2Blbl3XuKt%2Fds1b0fQH3ab8I3Msvb%2B38NJk%2F0rRgEFcaoW9W%2F5t8r6nXC3UIYzqVxiYlHwlYco1VieCO6EemGgoB1jYullhZiKj7mJr9lMo9qw6GEc5N14c5BE7qbxl1lt6t1mi27%2FWhChmlA8%2F7&X-Amz-Signature=f5dd9e8fb4b91e2fdd956306b8d1bc575b3d14e68827ecc8ef063c0ec9bc938b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAPWJOUM%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG2BKNz1HSJwRzw01zXfLeLPssYhedn51Gkv5ZiYZOzgAiEAl2nBQm795a4sFUCDQbJZXgkZ7r0k4ZDzm5Q0xPMQw2Eq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDN7fkECBYPvoJ92r5CrcA6zGrZrGfNrD2e%2F3OUUleznkzwLbzexN3kfiG4iNEmlE8JGX1ee66upR3R%2B66Fuok%2Fwld1z2DtlOmJOdPXDNmYeqjHYp3sH8fukm%2B%2FmddMkU4w60B4N1sabcrk6HgzUC9bcdj%2BNuyI%2FbmCstXcSOckSRHglP78sDW%2BQekOIJgrmWtUga%2F7qGMPw5U9hkcb7vRqYF7svPgkzo0IUoqJyFuS%2FzYdym2%2BTV%2BQX8CAl7UyV2EYw8zIxiB%2F%2BOGn1CpkB%2FmYf0MztKvGX8yBV3QA0PGfGK5bTfUQ6z%2BN1jk2oWjp0oy8HY%2BdG9B6RapQJF%2Bo6NYpCKknSLnh27k%2FUBU56u4JXwsAUJRO%2Ba6v3ZRr8SiJ79%2FgU3yAngUdOvJRir6O3iRyDMNHyyNDNRbxgHDHYcCoJODV2m4nMIpyGESyUs46I9sJ5w3kNbGigPxcDrr%2Fi0AGplAvC9URI9wIjroDQm4JkFIqTTz8SysQMOeOMgs83EE86cNBXjFz70bLRVDh3eoH4BHee9mVCFjoydpX0mFGW9GHPD0ZNZ1sKgZ1muXR2cb2jTVJPPbijltgXzRAtyIrlnrmwVmy1FDhVLegNu3pafQczU2AwLCMJIT%2FoDh1ofM8nMNwHt2WJRCtqsMK2I7M4GOqUB5jHx0GT%2F7LHDJgbBl7hWjQV%2B1dN86eHk6dDlO%2B8f1p1LRgObLCuM8JxwKTMuWXTGKklf9kYt59k5pZDNUOUxM5O11lNzJHTKd8T27Q4dT8aIb%2B6lWwvDmy48yWJX9PDr9pUPn9oTUBcj97gDiE4GUoHLm0FZeg0YIs19TBMvKFao%2FTaOTopQCMhtOkWZJKIVwdSdfvF1ZFNzK3CMOEUtVJ%2FMmNuu&X-Amz-Signature=bee2f8d090244a74fd2c19fe02c9e9d991bf47f502b6897d7b5ee307f9a4121b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAPWJOUM%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG2BKNz1HSJwRzw01zXfLeLPssYhedn51Gkv5ZiYZOzgAiEAl2nBQm795a4sFUCDQbJZXgkZ7r0k4ZDzm5Q0xPMQw2Eq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDN7fkECBYPvoJ92r5CrcA6zGrZrGfNrD2e%2F3OUUleznkzwLbzexN3kfiG4iNEmlE8JGX1ee66upR3R%2B66Fuok%2Fwld1z2DtlOmJOdPXDNmYeqjHYp3sH8fukm%2B%2FmddMkU4w60B4N1sabcrk6HgzUC9bcdj%2BNuyI%2FbmCstXcSOckSRHglP78sDW%2BQekOIJgrmWtUga%2F7qGMPw5U9hkcb7vRqYF7svPgkzo0IUoqJyFuS%2FzYdym2%2BTV%2BQX8CAl7UyV2EYw8zIxiB%2F%2BOGn1CpkB%2FmYf0MztKvGX8yBV3QA0PGfGK5bTfUQ6z%2BN1jk2oWjp0oy8HY%2BdG9B6RapQJF%2Bo6NYpCKknSLnh27k%2FUBU56u4JXwsAUJRO%2Ba6v3ZRr8SiJ79%2FgU3yAngUdOvJRir6O3iRyDMNHyyNDNRbxgHDHYcCoJODV2m4nMIpyGESyUs46I9sJ5w3kNbGigPxcDrr%2Fi0AGplAvC9URI9wIjroDQm4JkFIqTTz8SysQMOeOMgs83EE86cNBXjFz70bLRVDh3eoH4BHee9mVCFjoydpX0mFGW9GHPD0ZNZ1sKgZ1muXR2cb2jTVJPPbijltgXzRAtyIrlnrmwVmy1FDhVLegNu3pafQczU2AwLCMJIT%2FoDh1ofM8nMNwHt2WJRCtqsMK2I7M4GOqUB5jHx0GT%2F7LHDJgbBl7hWjQV%2B1dN86eHk6dDlO%2B8f1p1LRgObLCuM8JxwKTMuWXTGKklf9kYt59k5pZDNUOUxM5O11lNzJHTKd8T27Q4dT8aIb%2B6lWwvDmy48yWJX9PDr9pUPn9oTUBcj97gDiE4GUoHLm0FZeg0YIs19TBMvKFao%2FTaOTopQCMhtOkWZJKIVwdSdfvF1ZFNzK3CMOEUtVJ%2FMmNuu&X-Amz-Signature=4fa95c1c42a6c230d3a99d638e7660644adf590b6f174961ed21de1158078397&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAPWJOUM%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG2BKNz1HSJwRzw01zXfLeLPssYhedn51Gkv5ZiYZOzgAiEAl2nBQm795a4sFUCDQbJZXgkZ7r0k4ZDzm5Q0xPMQw2Eq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDN7fkECBYPvoJ92r5CrcA6zGrZrGfNrD2e%2F3OUUleznkzwLbzexN3kfiG4iNEmlE8JGX1ee66upR3R%2B66Fuok%2Fwld1z2DtlOmJOdPXDNmYeqjHYp3sH8fukm%2B%2FmddMkU4w60B4N1sabcrk6HgzUC9bcdj%2BNuyI%2FbmCstXcSOckSRHglP78sDW%2BQekOIJgrmWtUga%2F7qGMPw5U9hkcb7vRqYF7svPgkzo0IUoqJyFuS%2FzYdym2%2BTV%2BQX8CAl7UyV2EYw8zIxiB%2F%2BOGn1CpkB%2FmYf0MztKvGX8yBV3QA0PGfGK5bTfUQ6z%2BN1jk2oWjp0oy8HY%2BdG9B6RapQJF%2Bo6NYpCKknSLnh27k%2FUBU56u4JXwsAUJRO%2Ba6v3ZRr8SiJ79%2FgU3yAngUdOvJRir6O3iRyDMNHyyNDNRbxgHDHYcCoJODV2m4nMIpyGESyUs46I9sJ5w3kNbGigPxcDrr%2Fi0AGplAvC9URI9wIjroDQm4JkFIqTTz8SysQMOeOMgs83EE86cNBXjFz70bLRVDh3eoH4BHee9mVCFjoydpX0mFGW9GHPD0ZNZ1sKgZ1muXR2cb2jTVJPPbijltgXzRAtyIrlnrmwVmy1FDhVLegNu3pafQczU2AwLCMJIT%2FoDh1ofM8nMNwHt2WJRCtqsMK2I7M4GOqUB5jHx0GT%2F7LHDJgbBl7hWjQV%2B1dN86eHk6dDlO%2B8f1p1LRgObLCuM8JxwKTMuWXTGKklf9kYt59k5pZDNUOUxM5O11lNzJHTKd8T27Q4dT8aIb%2B6lWwvDmy48yWJX9PDr9pUPn9oTUBcj97gDiE4GUoHLm0FZeg0YIs19TBMvKFao%2FTaOTopQCMhtOkWZJKIVwdSdfvF1ZFNzK3CMOEUtVJ%2FMmNuu&X-Amz-Signature=549c4fd1f7cd51ad01ed7ffffeb43de703588daca61c96579666a8320d68e4fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAPWJOUM%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG2BKNz1HSJwRzw01zXfLeLPssYhedn51Gkv5ZiYZOzgAiEAl2nBQm795a4sFUCDQbJZXgkZ7r0k4ZDzm5Q0xPMQw2Eq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDN7fkECBYPvoJ92r5CrcA6zGrZrGfNrD2e%2F3OUUleznkzwLbzexN3kfiG4iNEmlE8JGX1ee66upR3R%2B66Fuok%2Fwld1z2DtlOmJOdPXDNmYeqjHYp3sH8fukm%2B%2FmddMkU4w60B4N1sabcrk6HgzUC9bcdj%2BNuyI%2FbmCstXcSOckSRHglP78sDW%2BQekOIJgrmWtUga%2F7qGMPw5U9hkcb7vRqYF7svPgkzo0IUoqJyFuS%2FzYdym2%2BTV%2BQX8CAl7UyV2EYw8zIxiB%2F%2BOGn1CpkB%2FmYf0MztKvGX8yBV3QA0PGfGK5bTfUQ6z%2BN1jk2oWjp0oy8HY%2BdG9B6RapQJF%2Bo6NYpCKknSLnh27k%2FUBU56u4JXwsAUJRO%2Ba6v3ZRr8SiJ79%2FgU3yAngUdOvJRir6O3iRyDMNHyyNDNRbxgHDHYcCoJODV2m4nMIpyGESyUs46I9sJ5w3kNbGigPxcDrr%2Fi0AGplAvC9URI9wIjroDQm4JkFIqTTz8SysQMOeOMgs83EE86cNBXjFz70bLRVDh3eoH4BHee9mVCFjoydpX0mFGW9GHPD0ZNZ1sKgZ1muXR2cb2jTVJPPbijltgXzRAtyIrlnrmwVmy1FDhVLegNu3pafQczU2AwLCMJIT%2FoDh1ofM8nMNwHt2WJRCtqsMK2I7M4GOqUB5jHx0GT%2F7LHDJgbBl7hWjQV%2B1dN86eHk6dDlO%2B8f1p1LRgObLCuM8JxwKTMuWXTGKklf9kYt59k5pZDNUOUxM5O11lNzJHTKd8T27Q4dT8aIb%2B6lWwvDmy48yWJX9PDr9pUPn9oTUBcj97gDiE4GUoHLm0FZeg0YIs19TBMvKFao%2FTaOTopQCMhtOkWZJKIVwdSdfvF1ZFNzK3CMOEUtVJ%2FMmNuu&X-Amz-Signature=5e3d0e9228c62881c09e9df1d439fd1bb0f027468f95ac0924618ce826870827&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAPWJOUM%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG2BKNz1HSJwRzw01zXfLeLPssYhedn51Gkv5ZiYZOzgAiEAl2nBQm795a4sFUCDQbJZXgkZ7r0k4ZDzm5Q0xPMQw2Eq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDN7fkECBYPvoJ92r5CrcA6zGrZrGfNrD2e%2F3OUUleznkzwLbzexN3kfiG4iNEmlE8JGX1ee66upR3R%2B66Fuok%2Fwld1z2DtlOmJOdPXDNmYeqjHYp3sH8fukm%2B%2FmddMkU4w60B4N1sabcrk6HgzUC9bcdj%2BNuyI%2FbmCstXcSOckSRHglP78sDW%2BQekOIJgrmWtUga%2F7qGMPw5U9hkcb7vRqYF7svPgkzo0IUoqJyFuS%2FzYdym2%2BTV%2BQX8CAl7UyV2EYw8zIxiB%2F%2BOGn1CpkB%2FmYf0MztKvGX8yBV3QA0PGfGK5bTfUQ6z%2BN1jk2oWjp0oy8HY%2BdG9B6RapQJF%2Bo6NYpCKknSLnh27k%2FUBU56u4JXwsAUJRO%2Ba6v3ZRr8SiJ79%2FgU3yAngUdOvJRir6O3iRyDMNHyyNDNRbxgHDHYcCoJODV2m4nMIpyGESyUs46I9sJ5w3kNbGigPxcDrr%2Fi0AGplAvC9URI9wIjroDQm4JkFIqTTz8SysQMOeOMgs83EE86cNBXjFz70bLRVDh3eoH4BHee9mVCFjoydpX0mFGW9GHPD0ZNZ1sKgZ1muXR2cb2jTVJPPbijltgXzRAtyIrlnrmwVmy1FDhVLegNu3pafQczU2AwLCMJIT%2FoDh1ofM8nMNwHt2WJRCtqsMK2I7M4GOqUB5jHx0GT%2F7LHDJgbBl7hWjQV%2B1dN86eHk6dDlO%2B8f1p1LRgObLCuM8JxwKTMuWXTGKklf9kYt59k5pZDNUOUxM5O11lNzJHTKd8T27Q4dT8aIb%2B6lWwvDmy48yWJX9PDr9pUPn9oTUBcj97gDiE4GUoHLm0FZeg0YIs19TBMvKFao%2FTaOTopQCMhtOkWZJKIVwdSdfvF1ZFNzK3CMOEUtVJ%2FMmNuu&X-Amz-Signature=bb3b932649c58347faccd3fa39168fb9b0ad2916def65caa670e0f29f12f9467&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAPWJOUM%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG2BKNz1HSJwRzw01zXfLeLPssYhedn51Gkv5ZiYZOzgAiEAl2nBQm795a4sFUCDQbJZXgkZ7r0k4ZDzm5Q0xPMQw2Eq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDN7fkECBYPvoJ92r5CrcA6zGrZrGfNrD2e%2F3OUUleznkzwLbzexN3kfiG4iNEmlE8JGX1ee66upR3R%2B66Fuok%2Fwld1z2DtlOmJOdPXDNmYeqjHYp3sH8fukm%2B%2FmddMkU4w60B4N1sabcrk6HgzUC9bcdj%2BNuyI%2FbmCstXcSOckSRHglP78sDW%2BQekOIJgrmWtUga%2F7qGMPw5U9hkcb7vRqYF7svPgkzo0IUoqJyFuS%2FzYdym2%2BTV%2BQX8CAl7UyV2EYw8zIxiB%2F%2BOGn1CpkB%2FmYf0MztKvGX8yBV3QA0PGfGK5bTfUQ6z%2BN1jk2oWjp0oy8HY%2BdG9B6RapQJF%2Bo6NYpCKknSLnh27k%2FUBU56u4JXwsAUJRO%2Ba6v3ZRr8SiJ79%2FgU3yAngUdOvJRir6O3iRyDMNHyyNDNRbxgHDHYcCoJODV2m4nMIpyGESyUs46I9sJ5w3kNbGigPxcDrr%2Fi0AGplAvC9URI9wIjroDQm4JkFIqTTz8SysQMOeOMgs83EE86cNBXjFz70bLRVDh3eoH4BHee9mVCFjoydpX0mFGW9GHPD0ZNZ1sKgZ1muXR2cb2jTVJPPbijltgXzRAtyIrlnrmwVmy1FDhVLegNu3pafQczU2AwLCMJIT%2FoDh1ofM8nMNwHt2WJRCtqsMK2I7M4GOqUB5jHx0GT%2F7LHDJgbBl7hWjQV%2B1dN86eHk6dDlO%2B8f1p1LRgObLCuM8JxwKTMuWXTGKklf9kYt59k5pZDNUOUxM5O11lNzJHTKd8T27Q4dT8aIb%2B6lWwvDmy48yWJX9PDr9pUPn9oTUBcj97gDiE4GUoHLm0FZeg0YIs19TBMvKFao%2FTaOTopQCMhtOkWZJKIVwdSdfvF1ZFNzK3CMOEUtVJ%2FMmNuu&X-Amz-Signature=175c50a6561ccbe69f4e34ffae4d74a82457f5233a6bb985456cb20dcd397df4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAPWJOUM%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG2BKNz1HSJwRzw01zXfLeLPssYhedn51Gkv5ZiYZOzgAiEAl2nBQm795a4sFUCDQbJZXgkZ7r0k4ZDzm5Q0xPMQw2Eq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDN7fkECBYPvoJ92r5CrcA6zGrZrGfNrD2e%2F3OUUleznkzwLbzexN3kfiG4iNEmlE8JGX1ee66upR3R%2B66Fuok%2Fwld1z2DtlOmJOdPXDNmYeqjHYp3sH8fukm%2B%2FmddMkU4w60B4N1sabcrk6HgzUC9bcdj%2BNuyI%2FbmCstXcSOckSRHglP78sDW%2BQekOIJgrmWtUga%2F7qGMPw5U9hkcb7vRqYF7svPgkzo0IUoqJyFuS%2FzYdym2%2BTV%2BQX8CAl7UyV2EYw8zIxiB%2F%2BOGn1CpkB%2FmYf0MztKvGX8yBV3QA0PGfGK5bTfUQ6z%2BN1jk2oWjp0oy8HY%2BdG9B6RapQJF%2Bo6NYpCKknSLnh27k%2FUBU56u4JXwsAUJRO%2Ba6v3ZRr8SiJ79%2FgU3yAngUdOvJRir6O3iRyDMNHyyNDNRbxgHDHYcCoJODV2m4nMIpyGESyUs46I9sJ5w3kNbGigPxcDrr%2Fi0AGplAvC9URI9wIjroDQm4JkFIqTTz8SysQMOeOMgs83EE86cNBXjFz70bLRVDh3eoH4BHee9mVCFjoydpX0mFGW9GHPD0ZNZ1sKgZ1muXR2cb2jTVJPPbijltgXzRAtyIrlnrmwVmy1FDhVLegNu3pafQczU2AwLCMJIT%2FoDh1ofM8nMNwHt2WJRCtqsMK2I7M4GOqUB5jHx0GT%2F7LHDJgbBl7hWjQV%2B1dN86eHk6dDlO%2B8f1p1LRgObLCuM8JxwKTMuWXTGKklf9kYt59k5pZDNUOUxM5O11lNzJHTKd8T27Q4dT8aIb%2B6lWwvDmy48yWJX9PDr9pUPn9oTUBcj97gDiE4GUoHLm0FZeg0YIs19TBMvKFao%2FTaOTopQCMhtOkWZJKIVwdSdfvF1ZFNzK3CMOEUtVJ%2FMmNuu&X-Amz-Signature=93a245b620ff1181a76e60885c3617c2ba8e187bead068d7003720f4353ed81e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAPWJOUM%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG2BKNz1HSJwRzw01zXfLeLPssYhedn51Gkv5ZiYZOzgAiEAl2nBQm795a4sFUCDQbJZXgkZ7r0k4ZDzm5Q0xPMQw2Eq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDN7fkECBYPvoJ92r5CrcA6zGrZrGfNrD2e%2F3OUUleznkzwLbzexN3kfiG4iNEmlE8JGX1ee66upR3R%2B66Fuok%2Fwld1z2DtlOmJOdPXDNmYeqjHYp3sH8fukm%2B%2FmddMkU4w60B4N1sabcrk6HgzUC9bcdj%2BNuyI%2FbmCstXcSOckSRHglP78sDW%2BQekOIJgrmWtUga%2F7qGMPw5U9hkcb7vRqYF7svPgkzo0IUoqJyFuS%2FzYdym2%2BTV%2BQX8CAl7UyV2EYw8zIxiB%2F%2BOGn1CpkB%2FmYf0MztKvGX8yBV3QA0PGfGK5bTfUQ6z%2BN1jk2oWjp0oy8HY%2BdG9B6RapQJF%2Bo6NYpCKknSLnh27k%2FUBU56u4JXwsAUJRO%2Ba6v3ZRr8SiJ79%2FgU3yAngUdOvJRir6O3iRyDMNHyyNDNRbxgHDHYcCoJODV2m4nMIpyGESyUs46I9sJ5w3kNbGigPxcDrr%2Fi0AGplAvC9URI9wIjroDQm4JkFIqTTz8SysQMOeOMgs83EE86cNBXjFz70bLRVDh3eoH4BHee9mVCFjoydpX0mFGW9GHPD0ZNZ1sKgZ1muXR2cb2jTVJPPbijltgXzRAtyIrlnrmwVmy1FDhVLegNu3pafQczU2AwLCMJIT%2FoDh1ofM8nMNwHt2WJRCtqsMK2I7M4GOqUB5jHx0GT%2F7LHDJgbBl7hWjQV%2B1dN86eHk6dDlO%2B8f1p1LRgObLCuM8JxwKTMuWXTGKklf9kYt59k5pZDNUOUxM5O11lNzJHTKd8T27Q4dT8aIb%2B6lWwvDmy48yWJX9PDr9pUPn9oTUBcj97gDiE4GUoHLm0FZeg0YIs19TBMvKFao%2FTaOTopQCMhtOkWZJKIVwdSdfvF1ZFNzK3CMOEUtVJ%2FMmNuu&X-Amz-Signature=9f27ffc5edd8c0b0b5490f75f7f918b2334c52a4a406ee0709de6b3e85cd0242&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAPWJOUM%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG2BKNz1HSJwRzw01zXfLeLPssYhedn51Gkv5ZiYZOzgAiEAl2nBQm795a4sFUCDQbJZXgkZ7r0k4ZDzm5Q0xPMQw2Eq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDN7fkECBYPvoJ92r5CrcA6zGrZrGfNrD2e%2F3OUUleznkzwLbzexN3kfiG4iNEmlE8JGX1ee66upR3R%2B66Fuok%2Fwld1z2DtlOmJOdPXDNmYeqjHYp3sH8fukm%2B%2FmddMkU4w60B4N1sabcrk6HgzUC9bcdj%2BNuyI%2FbmCstXcSOckSRHglP78sDW%2BQekOIJgrmWtUga%2F7qGMPw5U9hkcb7vRqYF7svPgkzo0IUoqJyFuS%2FzYdym2%2BTV%2BQX8CAl7UyV2EYw8zIxiB%2F%2BOGn1CpkB%2FmYf0MztKvGX8yBV3QA0PGfGK5bTfUQ6z%2BN1jk2oWjp0oy8HY%2BdG9B6RapQJF%2Bo6NYpCKknSLnh27k%2FUBU56u4JXwsAUJRO%2Ba6v3ZRr8SiJ79%2FgU3yAngUdOvJRir6O3iRyDMNHyyNDNRbxgHDHYcCoJODV2m4nMIpyGESyUs46I9sJ5w3kNbGigPxcDrr%2Fi0AGplAvC9URI9wIjroDQm4JkFIqTTz8SysQMOeOMgs83EE86cNBXjFz70bLRVDh3eoH4BHee9mVCFjoydpX0mFGW9GHPD0ZNZ1sKgZ1muXR2cb2jTVJPPbijltgXzRAtyIrlnrmwVmy1FDhVLegNu3pafQczU2AwLCMJIT%2FoDh1ofM8nMNwHt2WJRCtqsMK2I7M4GOqUB5jHx0GT%2F7LHDJgbBl7hWjQV%2B1dN86eHk6dDlO%2B8f1p1LRgObLCuM8JxwKTMuWXTGKklf9kYt59k5pZDNUOUxM5O11lNzJHTKd8T27Q4dT8aIb%2B6lWwvDmy48yWJX9PDr9pUPn9oTUBcj97gDiE4GUoHLm0FZeg0YIs19TBMvKFao%2FTaOTopQCMhtOkWZJKIVwdSdfvF1ZFNzK3CMOEUtVJ%2FMmNuu&X-Amz-Signature=c39d76b692ba2fb3fb18ce20d7ab53b2ec9ddf07e12cad538d1bbf3d6d307cd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAPWJOUM%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG2BKNz1HSJwRzw01zXfLeLPssYhedn51Gkv5ZiYZOzgAiEAl2nBQm795a4sFUCDQbJZXgkZ7r0k4ZDzm5Q0xPMQw2Eq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDN7fkECBYPvoJ92r5CrcA6zGrZrGfNrD2e%2F3OUUleznkzwLbzexN3kfiG4iNEmlE8JGX1ee66upR3R%2B66Fuok%2Fwld1z2DtlOmJOdPXDNmYeqjHYp3sH8fukm%2B%2FmddMkU4w60B4N1sabcrk6HgzUC9bcdj%2BNuyI%2FbmCstXcSOckSRHglP78sDW%2BQekOIJgrmWtUga%2F7qGMPw5U9hkcb7vRqYF7svPgkzo0IUoqJyFuS%2FzYdym2%2BTV%2BQX8CAl7UyV2EYw8zIxiB%2F%2BOGn1CpkB%2FmYf0MztKvGX8yBV3QA0PGfGK5bTfUQ6z%2BN1jk2oWjp0oy8HY%2BdG9B6RapQJF%2Bo6NYpCKknSLnh27k%2FUBU56u4JXwsAUJRO%2Ba6v3ZRr8SiJ79%2FgU3yAngUdOvJRir6O3iRyDMNHyyNDNRbxgHDHYcCoJODV2m4nMIpyGESyUs46I9sJ5w3kNbGigPxcDrr%2Fi0AGplAvC9URI9wIjroDQm4JkFIqTTz8SysQMOeOMgs83EE86cNBXjFz70bLRVDh3eoH4BHee9mVCFjoydpX0mFGW9GHPD0ZNZ1sKgZ1muXR2cb2jTVJPPbijltgXzRAtyIrlnrmwVmy1FDhVLegNu3pafQczU2AwLCMJIT%2FoDh1ofM8nMNwHt2WJRCtqsMK2I7M4GOqUB5jHx0GT%2F7LHDJgbBl7hWjQV%2B1dN86eHk6dDlO%2B8f1p1LRgObLCuM8JxwKTMuWXTGKklf9kYt59k5pZDNUOUxM5O11lNzJHTKd8T27Q4dT8aIb%2B6lWwvDmy48yWJX9PDr9pUPn9oTUBcj97gDiE4GUoHLm0FZeg0YIs19TBMvKFao%2FTaOTopQCMhtOkWZJKIVwdSdfvF1ZFNzK3CMOEUtVJ%2FMmNuu&X-Amz-Signature=5e3d0e9228c62881c09e9df1d439fd1bb0f027468f95ac0924618ce826870827&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
