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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC5S7IL4%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIANOm5izz5zC9vYrD0KWk5qQIBGJI1Y%2Fbn9cEGdbYeSVAiEA%2BY8HLMd%2Fs9TqKxdGL3IJMGmhk4AvBRvLQ9OpQb3Uzd0q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIAbBLLjybXvwZEsRircAxeu3NyNbRSQjIcPzBCjBMQw5h3rkGJIW8zPrXFE1624mwrUEb%2Fy%2FkE2EKBQx2g5mQqWSZMMUYz1MOsNqk%2Ff2qRfzFdioKbdCRdowhIcA5rp3HRqdD7ijbTET9aX44lAozecr7oDUa72WWrK6enNIRF7C5LUOWVfr6D2e9w9DwvFQsa7Hku%2Fc1F6ysa%2Ba8OBkyvZHMHU3bRaTD%2Ff2xlJ2i5bKBs68trEZnF3%2B35dMHufw%2B02wNvYAhgRAWiHghIIndJBzcI%2F8J3rmeNUGTZ0DlzIK8f8kuJFMuhb5TbuPOYFz%2FkuYV5ohthvjg2QWiZU6qXA1Hal%2FsX8Ll%2FmT4QizcHEJfYQcDLjvwN8UFkPYASaBe4MNxeOqOXjVe1jFjO7cX4wM1%2BPxRTY70euNUllD%2FnhG1rCQgLcGewRDqz8mNy8WNHV%2FYWaf1ob8sbl4xZ2dPGOwJxfmqSGKN4FZjG%2FlH9WxIDtLs%2BFFlrPjaGRleqtLen4nyDE3ttPOdCOOQhyy1jo%2B9cx5s5%2BAFmswINQq8THSr0xfCvzxlTqKpAFPEliFbpf%2FF2MaWYQvopU78yfUU9uDuBCAEC364u5X9YRjekfqUW0qGQ%2BjP3hSR8KVj2afGLW6JkjB18KBKL6MIGz%2BcQGOqUBOtqKCJc0Ngngb9zESwP4808PFNGk8cdhGTuGGS%2BGWKJvZbQh7tLBqEJbr9AvrD%2F4gj2%2FfeS%2F94j8X%2FNwgakF4BBBo%2BJp9lDlbLMAej%2B4jhwUy3rpzXo6jnR11oBQBbJYEpcrlpECevlP36%2FpyqyGMxluq9W2TL2jWUlLoFs7p5p5e7fk%2BmhlSwtjOYh7hKpG6Z1%2B%2BTutW6rxFCwWtcaK3GiFNUqY&X-Amz-Signature=9dfcd23f45e1698bf4d217b6a696a47a8496b710ae44d413c1434e3f008b3e4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO43RH2E%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDOyX9Rp9v4ahiUYQAECHNppMriLuWq1AtkVkUbdeOqyAIgdg5kDuquT8SgUjgyd%2BvyStx15354VI7gEk2TzMElNNIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDCZiDxNxtDVYgUasDSrcAzRA%2BFWtV8plX9vzTRpdgeDnToLoUaLD9QvCWKFfJyHQDGip2KGTxzu9RHNHeUvw4snTxRaOGFAPe2ODsJ5WXE1%2FXXtatBueOXOg2y%2FBgkRYQZJlFpf7UBrSFxn0z4FOeJnm43%2FRghe2289ZQss7D2HBo8Y5cqMmZz8tLi1XiHoMyOlublPgI8NJtEETcCFcmcTI8cl8LI29rCcNyf49iy%2Bb%2BSGlOC1SuLv50PzR1qGt4%2B4IvdQXJj3mKEBDzeEfl8UvSAqTK0tdLCMvnC0Z0h19aEG7ygW5H9M5md8Q84XdP6PHCQgQ%2Fwc2aZRyyUjpZnkI4vtX%2FEn5KYJkhI8GG7F1dTQTWMxqvKv6jfsx%2BjIUKiAylcaCvzzbR%2BS9KfXbGL4hRRTYYls0bcsuJXf5S%2FfiJyPXK5MaL8duDpQ5mV5VKS0bIB3YLsIdT5erh7%2F9ADmsjvaw6O9macRiXYB8FzsFZ1lHm5oOVRJ7RWTqirS2L2txL7zcDvPj9ubymxsVKqbU2Fe7%2FFrVkikRCMsVv1nzDCjSGln%2BYT16tnRVv%2B2LXWVKvGAEAkzPrvfScwLFvqSDNEQCoH2iof2ITjmjia%2FV9pO8BAAtdgNTSGODNbtPUAoHAzzyswzreS0dMPGy%2BcQGOqUB10Tui9n89jrCMCuch7wpgHU9WYJukvhtvM7AV6vgd2ZawYHZ5msjvtAbL3hBn3v4p%2Bu64Yc0I2HniF3d%2BtXglHyo%2BSARIIm2PlOqUEFIjQQSjr9kMRW%2BJ0ZMieS6%2FzBoHaGNiVyEcembat9A02VxgyelCmEfUq0%2FyuFnKrrhg1uA31Qy5LB6%2B%2BZtmp97ZEXUoXm%2FNSAOrJsV35cMSPBCQUqj46Ib&X-Amz-Signature=8bf25006a1573236524a290b94ba46ac2e732b267ad0972c4e2814c4b5b02038&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO43RH2E%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDOyX9Rp9v4ahiUYQAECHNppMriLuWq1AtkVkUbdeOqyAIgdg5kDuquT8SgUjgyd%2BvyStx15354VI7gEk2TzMElNNIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDCZiDxNxtDVYgUasDSrcAzRA%2BFWtV8plX9vzTRpdgeDnToLoUaLD9QvCWKFfJyHQDGip2KGTxzu9RHNHeUvw4snTxRaOGFAPe2ODsJ5WXE1%2FXXtatBueOXOg2y%2FBgkRYQZJlFpf7UBrSFxn0z4FOeJnm43%2FRghe2289ZQss7D2HBo8Y5cqMmZz8tLi1XiHoMyOlublPgI8NJtEETcCFcmcTI8cl8LI29rCcNyf49iy%2Bb%2BSGlOC1SuLv50PzR1qGt4%2B4IvdQXJj3mKEBDzeEfl8UvSAqTK0tdLCMvnC0Z0h19aEG7ygW5H9M5md8Q84XdP6PHCQgQ%2Fwc2aZRyyUjpZnkI4vtX%2FEn5KYJkhI8GG7F1dTQTWMxqvKv6jfsx%2BjIUKiAylcaCvzzbR%2BS9KfXbGL4hRRTYYls0bcsuJXf5S%2FfiJyPXK5MaL8duDpQ5mV5VKS0bIB3YLsIdT5erh7%2F9ADmsjvaw6O9macRiXYB8FzsFZ1lHm5oOVRJ7RWTqirS2L2txL7zcDvPj9ubymxsVKqbU2Fe7%2FFrVkikRCMsVv1nzDCjSGln%2BYT16tnRVv%2B2LXWVKvGAEAkzPrvfScwLFvqSDNEQCoH2iof2ITjmjia%2FV9pO8BAAtdgNTSGODNbtPUAoHAzzyswzreS0dMPGy%2BcQGOqUB10Tui9n89jrCMCuch7wpgHU9WYJukvhtvM7AV6vgd2ZawYHZ5msjvtAbL3hBn3v4p%2Bu64Yc0I2HniF3d%2BtXglHyo%2BSARIIm2PlOqUEFIjQQSjr9kMRW%2BJ0ZMieS6%2FzBoHaGNiVyEcembat9A02VxgyelCmEfUq0%2FyuFnKrrhg1uA31Qy5LB6%2B%2BZtmp97ZEXUoXm%2FNSAOrJsV35cMSPBCQUqj46Ib&X-Amz-Signature=c81968b50aa3cd5bd9217d125bb054618742fdc42ae5730bd508972b78b52b96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO43RH2E%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDOyX9Rp9v4ahiUYQAECHNppMriLuWq1AtkVkUbdeOqyAIgdg5kDuquT8SgUjgyd%2BvyStx15354VI7gEk2TzMElNNIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDCZiDxNxtDVYgUasDSrcAzRA%2BFWtV8plX9vzTRpdgeDnToLoUaLD9QvCWKFfJyHQDGip2KGTxzu9RHNHeUvw4snTxRaOGFAPe2ODsJ5WXE1%2FXXtatBueOXOg2y%2FBgkRYQZJlFpf7UBrSFxn0z4FOeJnm43%2FRghe2289ZQss7D2HBo8Y5cqMmZz8tLi1XiHoMyOlublPgI8NJtEETcCFcmcTI8cl8LI29rCcNyf49iy%2Bb%2BSGlOC1SuLv50PzR1qGt4%2B4IvdQXJj3mKEBDzeEfl8UvSAqTK0tdLCMvnC0Z0h19aEG7ygW5H9M5md8Q84XdP6PHCQgQ%2Fwc2aZRyyUjpZnkI4vtX%2FEn5KYJkhI8GG7F1dTQTWMxqvKv6jfsx%2BjIUKiAylcaCvzzbR%2BS9KfXbGL4hRRTYYls0bcsuJXf5S%2FfiJyPXK5MaL8duDpQ5mV5VKS0bIB3YLsIdT5erh7%2F9ADmsjvaw6O9macRiXYB8FzsFZ1lHm5oOVRJ7RWTqirS2L2txL7zcDvPj9ubymxsVKqbU2Fe7%2FFrVkikRCMsVv1nzDCjSGln%2BYT16tnRVv%2B2LXWVKvGAEAkzPrvfScwLFvqSDNEQCoH2iof2ITjmjia%2FV9pO8BAAtdgNTSGODNbtPUAoHAzzyswzreS0dMPGy%2BcQGOqUB10Tui9n89jrCMCuch7wpgHU9WYJukvhtvM7AV6vgd2ZawYHZ5msjvtAbL3hBn3v4p%2Bu64Yc0I2HniF3d%2BtXglHyo%2BSARIIm2PlOqUEFIjQQSjr9kMRW%2BJ0ZMieS6%2FzBoHaGNiVyEcembat9A02VxgyelCmEfUq0%2FyuFnKrrhg1uA31Qy5LB6%2B%2BZtmp97ZEXUoXm%2FNSAOrJsV35cMSPBCQUqj46Ib&X-Amz-Signature=28817e94285b02af9f258a2ca1be5f4efb38da26776115b02848439bc85e4233&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO43RH2E%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDOyX9Rp9v4ahiUYQAECHNppMriLuWq1AtkVkUbdeOqyAIgdg5kDuquT8SgUjgyd%2BvyStx15354VI7gEk2TzMElNNIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDCZiDxNxtDVYgUasDSrcAzRA%2BFWtV8plX9vzTRpdgeDnToLoUaLD9QvCWKFfJyHQDGip2KGTxzu9RHNHeUvw4snTxRaOGFAPe2ODsJ5WXE1%2FXXtatBueOXOg2y%2FBgkRYQZJlFpf7UBrSFxn0z4FOeJnm43%2FRghe2289ZQss7D2HBo8Y5cqMmZz8tLi1XiHoMyOlublPgI8NJtEETcCFcmcTI8cl8LI29rCcNyf49iy%2Bb%2BSGlOC1SuLv50PzR1qGt4%2B4IvdQXJj3mKEBDzeEfl8UvSAqTK0tdLCMvnC0Z0h19aEG7ygW5H9M5md8Q84XdP6PHCQgQ%2Fwc2aZRyyUjpZnkI4vtX%2FEn5KYJkhI8GG7F1dTQTWMxqvKv6jfsx%2BjIUKiAylcaCvzzbR%2BS9KfXbGL4hRRTYYls0bcsuJXf5S%2FfiJyPXK5MaL8duDpQ5mV5VKS0bIB3YLsIdT5erh7%2F9ADmsjvaw6O9macRiXYB8FzsFZ1lHm5oOVRJ7RWTqirS2L2txL7zcDvPj9ubymxsVKqbU2Fe7%2FFrVkikRCMsVv1nzDCjSGln%2BYT16tnRVv%2B2LXWVKvGAEAkzPrvfScwLFvqSDNEQCoH2iof2ITjmjia%2FV9pO8BAAtdgNTSGODNbtPUAoHAzzyswzreS0dMPGy%2BcQGOqUB10Tui9n89jrCMCuch7wpgHU9WYJukvhtvM7AV6vgd2ZawYHZ5msjvtAbL3hBn3v4p%2Bu64Yc0I2HniF3d%2BtXglHyo%2BSARIIm2PlOqUEFIjQQSjr9kMRW%2BJ0ZMieS6%2FzBoHaGNiVyEcembat9A02VxgyelCmEfUq0%2FyuFnKrrhg1uA31Qy5LB6%2B%2BZtmp97ZEXUoXm%2FNSAOrJsV35cMSPBCQUqj46Ib&X-Amz-Signature=76066311a61f54234ca9cc0a9ccbc705251759aa922b4372a2ac9862a10c458d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO43RH2E%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDOyX9Rp9v4ahiUYQAECHNppMriLuWq1AtkVkUbdeOqyAIgdg5kDuquT8SgUjgyd%2BvyStx15354VI7gEk2TzMElNNIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDCZiDxNxtDVYgUasDSrcAzRA%2BFWtV8plX9vzTRpdgeDnToLoUaLD9QvCWKFfJyHQDGip2KGTxzu9RHNHeUvw4snTxRaOGFAPe2ODsJ5WXE1%2FXXtatBueOXOg2y%2FBgkRYQZJlFpf7UBrSFxn0z4FOeJnm43%2FRghe2289ZQss7D2HBo8Y5cqMmZz8tLi1XiHoMyOlublPgI8NJtEETcCFcmcTI8cl8LI29rCcNyf49iy%2Bb%2BSGlOC1SuLv50PzR1qGt4%2B4IvdQXJj3mKEBDzeEfl8UvSAqTK0tdLCMvnC0Z0h19aEG7ygW5H9M5md8Q84XdP6PHCQgQ%2Fwc2aZRyyUjpZnkI4vtX%2FEn5KYJkhI8GG7F1dTQTWMxqvKv6jfsx%2BjIUKiAylcaCvzzbR%2BS9KfXbGL4hRRTYYls0bcsuJXf5S%2FfiJyPXK5MaL8duDpQ5mV5VKS0bIB3YLsIdT5erh7%2F9ADmsjvaw6O9macRiXYB8FzsFZ1lHm5oOVRJ7RWTqirS2L2txL7zcDvPj9ubymxsVKqbU2Fe7%2FFrVkikRCMsVv1nzDCjSGln%2BYT16tnRVv%2B2LXWVKvGAEAkzPrvfScwLFvqSDNEQCoH2iof2ITjmjia%2FV9pO8BAAtdgNTSGODNbtPUAoHAzzyswzreS0dMPGy%2BcQGOqUB10Tui9n89jrCMCuch7wpgHU9WYJukvhtvM7AV6vgd2ZawYHZ5msjvtAbL3hBn3v4p%2Bu64Yc0I2HniF3d%2BtXglHyo%2BSARIIm2PlOqUEFIjQQSjr9kMRW%2BJ0ZMieS6%2FzBoHaGNiVyEcembat9A02VxgyelCmEfUq0%2FyuFnKrrhg1uA31Qy5LB6%2B%2BZtmp97ZEXUoXm%2FNSAOrJsV35cMSPBCQUqj46Ib&X-Amz-Signature=57846d99725fb68da4d50be50ce89f5b76872f9e44a2891631d994fea1c1da44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO43RH2E%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDOyX9Rp9v4ahiUYQAECHNppMriLuWq1AtkVkUbdeOqyAIgdg5kDuquT8SgUjgyd%2BvyStx15354VI7gEk2TzMElNNIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDCZiDxNxtDVYgUasDSrcAzRA%2BFWtV8plX9vzTRpdgeDnToLoUaLD9QvCWKFfJyHQDGip2KGTxzu9RHNHeUvw4snTxRaOGFAPe2ODsJ5WXE1%2FXXtatBueOXOg2y%2FBgkRYQZJlFpf7UBrSFxn0z4FOeJnm43%2FRghe2289ZQss7D2HBo8Y5cqMmZz8tLi1XiHoMyOlublPgI8NJtEETcCFcmcTI8cl8LI29rCcNyf49iy%2Bb%2BSGlOC1SuLv50PzR1qGt4%2B4IvdQXJj3mKEBDzeEfl8UvSAqTK0tdLCMvnC0Z0h19aEG7ygW5H9M5md8Q84XdP6PHCQgQ%2Fwc2aZRyyUjpZnkI4vtX%2FEn5KYJkhI8GG7F1dTQTWMxqvKv6jfsx%2BjIUKiAylcaCvzzbR%2BS9KfXbGL4hRRTYYls0bcsuJXf5S%2FfiJyPXK5MaL8duDpQ5mV5VKS0bIB3YLsIdT5erh7%2F9ADmsjvaw6O9macRiXYB8FzsFZ1lHm5oOVRJ7RWTqirS2L2txL7zcDvPj9ubymxsVKqbU2Fe7%2FFrVkikRCMsVv1nzDCjSGln%2BYT16tnRVv%2B2LXWVKvGAEAkzPrvfScwLFvqSDNEQCoH2iof2ITjmjia%2FV9pO8BAAtdgNTSGODNbtPUAoHAzzyswzreS0dMPGy%2BcQGOqUB10Tui9n89jrCMCuch7wpgHU9WYJukvhtvM7AV6vgd2ZawYHZ5msjvtAbL3hBn3v4p%2Bu64Yc0I2HniF3d%2BtXglHyo%2BSARIIm2PlOqUEFIjQQSjr9kMRW%2BJ0ZMieS6%2FzBoHaGNiVyEcembat9A02VxgyelCmEfUq0%2FyuFnKrrhg1uA31Qy5LB6%2B%2BZtmp97ZEXUoXm%2FNSAOrJsV35cMSPBCQUqj46Ib&X-Amz-Signature=c4949405610ad39d215296c5bd72c3527d4d16ab72a1e1e6ed6c54b9eadafda6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO43RH2E%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDOyX9Rp9v4ahiUYQAECHNppMriLuWq1AtkVkUbdeOqyAIgdg5kDuquT8SgUjgyd%2BvyStx15354VI7gEk2TzMElNNIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDCZiDxNxtDVYgUasDSrcAzRA%2BFWtV8plX9vzTRpdgeDnToLoUaLD9QvCWKFfJyHQDGip2KGTxzu9RHNHeUvw4snTxRaOGFAPe2ODsJ5WXE1%2FXXtatBueOXOg2y%2FBgkRYQZJlFpf7UBrSFxn0z4FOeJnm43%2FRghe2289ZQss7D2HBo8Y5cqMmZz8tLi1XiHoMyOlublPgI8NJtEETcCFcmcTI8cl8LI29rCcNyf49iy%2Bb%2BSGlOC1SuLv50PzR1qGt4%2B4IvdQXJj3mKEBDzeEfl8UvSAqTK0tdLCMvnC0Z0h19aEG7ygW5H9M5md8Q84XdP6PHCQgQ%2Fwc2aZRyyUjpZnkI4vtX%2FEn5KYJkhI8GG7F1dTQTWMxqvKv6jfsx%2BjIUKiAylcaCvzzbR%2BS9KfXbGL4hRRTYYls0bcsuJXf5S%2FfiJyPXK5MaL8duDpQ5mV5VKS0bIB3YLsIdT5erh7%2F9ADmsjvaw6O9macRiXYB8FzsFZ1lHm5oOVRJ7RWTqirS2L2txL7zcDvPj9ubymxsVKqbU2Fe7%2FFrVkikRCMsVv1nzDCjSGln%2BYT16tnRVv%2B2LXWVKvGAEAkzPrvfScwLFvqSDNEQCoH2iof2ITjmjia%2FV9pO8BAAtdgNTSGODNbtPUAoHAzzyswzreS0dMPGy%2BcQGOqUB10Tui9n89jrCMCuch7wpgHU9WYJukvhtvM7AV6vgd2ZawYHZ5msjvtAbL3hBn3v4p%2Bu64Yc0I2HniF3d%2BtXglHyo%2BSARIIm2PlOqUEFIjQQSjr9kMRW%2BJ0ZMieS6%2FzBoHaGNiVyEcembat9A02VxgyelCmEfUq0%2FyuFnKrrhg1uA31Qy5LB6%2B%2BZtmp97ZEXUoXm%2FNSAOrJsV35cMSPBCQUqj46Ib&X-Amz-Signature=b0c173ef0a9c430deb1d76986d55cb85e45d1b295d8ebb476f01cfd1373779f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO43RH2E%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDOyX9Rp9v4ahiUYQAECHNppMriLuWq1AtkVkUbdeOqyAIgdg5kDuquT8SgUjgyd%2BvyStx15354VI7gEk2TzMElNNIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDCZiDxNxtDVYgUasDSrcAzRA%2BFWtV8plX9vzTRpdgeDnToLoUaLD9QvCWKFfJyHQDGip2KGTxzu9RHNHeUvw4snTxRaOGFAPe2ODsJ5WXE1%2FXXtatBueOXOg2y%2FBgkRYQZJlFpf7UBrSFxn0z4FOeJnm43%2FRghe2289ZQss7D2HBo8Y5cqMmZz8tLi1XiHoMyOlublPgI8NJtEETcCFcmcTI8cl8LI29rCcNyf49iy%2Bb%2BSGlOC1SuLv50PzR1qGt4%2B4IvdQXJj3mKEBDzeEfl8UvSAqTK0tdLCMvnC0Z0h19aEG7ygW5H9M5md8Q84XdP6PHCQgQ%2Fwc2aZRyyUjpZnkI4vtX%2FEn5KYJkhI8GG7F1dTQTWMxqvKv6jfsx%2BjIUKiAylcaCvzzbR%2BS9KfXbGL4hRRTYYls0bcsuJXf5S%2FfiJyPXK5MaL8duDpQ5mV5VKS0bIB3YLsIdT5erh7%2F9ADmsjvaw6O9macRiXYB8FzsFZ1lHm5oOVRJ7RWTqirS2L2txL7zcDvPj9ubymxsVKqbU2Fe7%2FFrVkikRCMsVv1nzDCjSGln%2BYT16tnRVv%2B2LXWVKvGAEAkzPrvfScwLFvqSDNEQCoH2iof2ITjmjia%2FV9pO8BAAtdgNTSGODNbtPUAoHAzzyswzreS0dMPGy%2BcQGOqUB10Tui9n89jrCMCuch7wpgHU9WYJukvhtvM7AV6vgd2ZawYHZ5msjvtAbL3hBn3v4p%2Bu64Yc0I2HniF3d%2BtXglHyo%2BSARIIm2PlOqUEFIjQQSjr9kMRW%2BJ0ZMieS6%2FzBoHaGNiVyEcembat9A02VxgyelCmEfUq0%2FyuFnKrrhg1uA31Qy5LB6%2B%2BZtmp97ZEXUoXm%2FNSAOrJsV35cMSPBCQUqj46Ib&X-Amz-Signature=9109ad3ee1d331440364af6c467d23d89124d4366e57a3dd1adbae93ef0f1eef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO43RH2E%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDOyX9Rp9v4ahiUYQAECHNppMriLuWq1AtkVkUbdeOqyAIgdg5kDuquT8SgUjgyd%2BvyStx15354VI7gEk2TzMElNNIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDCZiDxNxtDVYgUasDSrcAzRA%2BFWtV8plX9vzTRpdgeDnToLoUaLD9QvCWKFfJyHQDGip2KGTxzu9RHNHeUvw4snTxRaOGFAPe2ODsJ5WXE1%2FXXtatBueOXOg2y%2FBgkRYQZJlFpf7UBrSFxn0z4FOeJnm43%2FRghe2289ZQss7D2HBo8Y5cqMmZz8tLi1XiHoMyOlublPgI8NJtEETcCFcmcTI8cl8LI29rCcNyf49iy%2Bb%2BSGlOC1SuLv50PzR1qGt4%2B4IvdQXJj3mKEBDzeEfl8UvSAqTK0tdLCMvnC0Z0h19aEG7ygW5H9M5md8Q84XdP6PHCQgQ%2Fwc2aZRyyUjpZnkI4vtX%2FEn5KYJkhI8GG7F1dTQTWMxqvKv6jfsx%2BjIUKiAylcaCvzzbR%2BS9KfXbGL4hRRTYYls0bcsuJXf5S%2FfiJyPXK5MaL8duDpQ5mV5VKS0bIB3YLsIdT5erh7%2F9ADmsjvaw6O9macRiXYB8FzsFZ1lHm5oOVRJ7RWTqirS2L2txL7zcDvPj9ubymxsVKqbU2Fe7%2FFrVkikRCMsVv1nzDCjSGln%2BYT16tnRVv%2B2LXWVKvGAEAkzPrvfScwLFvqSDNEQCoH2iof2ITjmjia%2FV9pO8BAAtdgNTSGODNbtPUAoHAzzyswzreS0dMPGy%2BcQGOqUB10Tui9n89jrCMCuch7wpgHU9WYJukvhtvM7AV6vgd2ZawYHZ5msjvtAbL3hBn3v4p%2Bu64Yc0I2HniF3d%2BtXglHyo%2BSARIIm2PlOqUEFIjQQSjr9kMRW%2BJ0ZMieS6%2FzBoHaGNiVyEcembat9A02VxgyelCmEfUq0%2FyuFnKrrhg1uA31Qy5LB6%2B%2BZtmp97ZEXUoXm%2FNSAOrJsV35cMSPBCQUqj46Ib&X-Amz-Signature=1ce3d7b4c0279ded9880c2256fd65a8fbcf2c264d250d914d9892b1c69f9859f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO43RH2E%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDOyX9Rp9v4ahiUYQAECHNppMriLuWq1AtkVkUbdeOqyAIgdg5kDuquT8SgUjgyd%2BvyStx15354VI7gEk2TzMElNNIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDCZiDxNxtDVYgUasDSrcAzRA%2BFWtV8plX9vzTRpdgeDnToLoUaLD9QvCWKFfJyHQDGip2KGTxzu9RHNHeUvw4snTxRaOGFAPe2ODsJ5WXE1%2FXXtatBueOXOg2y%2FBgkRYQZJlFpf7UBrSFxn0z4FOeJnm43%2FRghe2289ZQss7D2HBo8Y5cqMmZz8tLi1XiHoMyOlublPgI8NJtEETcCFcmcTI8cl8LI29rCcNyf49iy%2Bb%2BSGlOC1SuLv50PzR1qGt4%2B4IvdQXJj3mKEBDzeEfl8UvSAqTK0tdLCMvnC0Z0h19aEG7ygW5H9M5md8Q84XdP6PHCQgQ%2Fwc2aZRyyUjpZnkI4vtX%2FEn5KYJkhI8GG7F1dTQTWMxqvKv6jfsx%2BjIUKiAylcaCvzzbR%2BS9KfXbGL4hRRTYYls0bcsuJXf5S%2FfiJyPXK5MaL8duDpQ5mV5VKS0bIB3YLsIdT5erh7%2F9ADmsjvaw6O9macRiXYB8FzsFZ1lHm5oOVRJ7RWTqirS2L2txL7zcDvPj9ubymxsVKqbU2Fe7%2FFrVkikRCMsVv1nzDCjSGln%2BYT16tnRVv%2B2LXWVKvGAEAkzPrvfScwLFvqSDNEQCoH2iof2ITjmjia%2FV9pO8BAAtdgNTSGODNbtPUAoHAzzyswzreS0dMPGy%2BcQGOqUB10Tui9n89jrCMCuch7wpgHU9WYJukvhtvM7AV6vgd2ZawYHZ5msjvtAbL3hBn3v4p%2Bu64Yc0I2HniF3d%2BtXglHyo%2BSARIIm2PlOqUEFIjQQSjr9kMRW%2BJ0ZMieS6%2FzBoHaGNiVyEcembat9A02VxgyelCmEfUq0%2FyuFnKrrhg1uA31Qy5LB6%2B%2BZtmp97ZEXUoXm%2FNSAOrJsV35cMSPBCQUqj46Ib&X-Amz-Signature=76066311a61f54234ca9cc0a9ccbc705251759aa922b4372a2ac9862a10c458d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
