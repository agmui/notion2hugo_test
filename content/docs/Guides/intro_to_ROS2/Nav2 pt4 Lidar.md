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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ANXPKFM%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6ECfKOCO%2BeMR3rVgL82WLyhWs3fu5lmS2vm%2BczMsM6QIgY4jxIAyYbeYJVgiSLtNMozhErVfuAOWUg%2FRblVN4XfgqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHertT5hvuFNmRhV3ircA5PZVqUzIBLGGRz0dtRlq9HoN4qWOaa2PnjIO73e54ptv1YGyEdrjGFP74VWiTfxPj8uXnkuZDmfg4xcJmvzcBYAP9Bc74hvfB7jtj9Id3q1DuQdgMvhkqitHeQdYEEjcep128Y7p%2FyBzj6MMR7hrMbDqxZAahSqmBuv8mBIwKh7EuMTyqGpQuCWkNJ5i74JdStDiojW7Fw4NHiVUhVaKt%2BlRhkl%2F4I8gm362r72%2FGYbtl0pY5IMfM2an9GAYO10UfMojqVtP%2BY25D9qWfb2vvdBBjN6LQ%2Fei5ZAt%2BjKVcOg7pAy6Ev9%2FkNyu9L48H5QnhH08Wp6uqp9YP4BNq56txCfybIxe42MvGxuHdkluj7fvRiHoqgKCfrqOmYk9a8sWd6SRxP%2B%2FQOwg%2FJ2vm185RHj781N5StciyiCK9iSW3STgY4lr9FoGVUX9DgClTZIgSTKfoHNTqHh90WVdQhZAcCEuf2NKK%2FKBDYJqlXynK5%2B%2BN3Mctma%2FusvQXwOKq63UiAr8kzqNEZsc6Aj0AB9tHBS9qp0Ut5Mu7ekDQ5lEC2U%2BO02Bbq5qM0w7L8oxgNT2qMWWk9hAOPVyz3%2BT7pClJY0seSxNgTZea2fdUMTUpU0osZ6LfcQ47lyuvx%2FMNr14MQGOqUBLIu8L1IYfkFc46FUj%2BqzhXUg1H4e2zt54Bj7qDEMVY0lRgwqruKuzOaxCpX6K2lmxedK5CrdSubyQObx6BcR5v5de%2FZBe2iGAfKGQcPirDcHv8il6cRq%2FWFsZCCZMedF9aNgU%2Bx%2BKDbAVk4%2FZn2vivhbrks6tE151jE%2F14Lf0murGfWGRrFjJ1NtlI5saIc%2F5wiTZNNgWZzQlnF12DiDE9YO%2BBRo&X-Amz-Signature=50ca0deb82cb0bd695c62c99184f2c9be45dd823fb4285add5d984e7d7b5bb88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654SU5F4I%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxelBDdKl9Yu0vkdNApFfWyMFFwqnzhgZaCxs%2FkeyvWAiEAsa%2BgvXkiZNl6tTf2Gcb4B9oD%2FUAZiwVUNKA1mtdj%2FMUqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNC%2BqpEKRpZcR%2B3SVyrcAyqXN0aVKgfVD05t6YjP%2F%2FhzTObaLebq13pP4K5y00xfjazSVVqVE0Z7OIaiAagk6CyscSdie2NUqv0v%2F9eM%2Fz3N0xtWy2I9Rfw5up4cqqpuvOMJiLM1ZNo1ng3AuFbR0vydVthe2bort9tm17MnlEvniLRMGEGxSBo4GllkBygQ0A%2FYzXbnjty7iihZ5Sr9dlX%2F7mdg7j821%2FcKnyMWECLktQMz8gAguJV2VwW3k%2FU7JZFWpy7WfBXGy6jAoXGBdLE4kRUF6lBGUSo4bPzeCje%2BqWZuwnrGKbFd%2FwEUsGBsBZbisqf77QoR6n4ad4bBYiWzJiasgVMs%2FKiPW3hktpQSmPGDTMvYNiNI5qBetCLDJ6sM3r0ETFleonIkChSvwdlYIr0JgtQNMqnMxmA9lFGSutbn%2BC1c%2FEPVWf%2B0rFV7gPoZASexjZ2j5xJY0OX7UlR%2F%2BonQo5QsY6ICdWdpDyM%2Fjh%2FjcTWowVfDZB5nV%2FeNVZLB4poKiApbm73dTvdLxxMRnNIWTLmEgM2NHjCaDX4z9koerU%2B6tvG%2FksNmrV3UZfgPfeqweqCHIosUUx3Adn3VP5m6tJPzlkzmNYTo%2Ff1%2Bo5cnZ7Kld9bdtrmpcFKUgCY4swTnj2p9fVl1MJD14MQGOqUB9jX6zv2L5lqSmif4w5kx%2B%2FUxlCZTTwweywwoAcpIaUIwpT7HwTO3RqhUaiHaHmHBs70AoLNlko7%2B0%2FATzVLoVOJdBO1oL5%2FnKHAGC8tq6ShRtRq1USCsUtKVfBJjmp2ph6zAvaKpBBSQaNqPkwcei7Y9qXrA5ModQ0QHdAuVwBBEli7LaRnzi7WuhZmD5MnxAPNjeoErQMzv75W9Xwl4Dm2w%2Bfs%2B&X-Amz-Signature=4d6b8046b335351dc122566042caf45bf5ad8c1a40a6c4cc35f9a9aa6856b08b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654SU5F4I%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxelBDdKl9Yu0vkdNApFfWyMFFwqnzhgZaCxs%2FkeyvWAiEAsa%2BgvXkiZNl6tTf2Gcb4B9oD%2FUAZiwVUNKA1mtdj%2FMUqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNC%2BqpEKRpZcR%2B3SVyrcAyqXN0aVKgfVD05t6YjP%2F%2FhzTObaLebq13pP4K5y00xfjazSVVqVE0Z7OIaiAagk6CyscSdie2NUqv0v%2F9eM%2Fz3N0xtWy2I9Rfw5up4cqqpuvOMJiLM1ZNo1ng3AuFbR0vydVthe2bort9tm17MnlEvniLRMGEGxSBo4GllkBygQ0A%2FYzXbnjty7iihZ5Sr9dlX%2F7mdg7j821%2FcKnyMWECLktQMz8gAguJV2VwW3k%2FU7JZFWpy7WfBXGy6jAoXGBdLE4kRUF6lBGUSo4bPzeCje%2BqWZuwnrGKbFd%2FwEUsGBsBZbisqf77QoR6n4ad4bBYiWzJiasgVMs%2FKiPW3hktpQSmPGDTMvYNiNI5qBetCLDJ6sM3r0ETFleonIkChSvwdlYIr0JgtQNMqnMxmA9lFGSutbn%2BC1c%2FEPVWf%2B0rFV7gPoZASexjZ2j5xJY0OX7UlR%2F%2BonQo5QsY6ICdWdpDyM%2Fjh%2FjcTWowVfDZB5nV%2FeNVZLB4poKiApbm73dTvdLxxMRnNIWTLmEgM2NHjCaDX4z9koerU%2B6tvG%2FksNmrV3UZfgPfeqweqCHIosUUx3Adn3VP5m6tJPzlkzmNYTo%2Ff1%2Bo5cnZ7Kld9bdtrmpcFKUgCY4swTnj2p9fVl1MJD14MQGOqUB9jX6zv2L5lqSmif4w5kx%2B%2FUxlCZTTwweywwoAcpIaUIwpT7HwTO3RqhUaiHaHmHBs70AoLNlko7%2B0%2FATzVLoVOJdBO1oL5%2FnKHAGC8tq6ShRtRq1USCsUtKVfBJjmp2ph6zAvaKpBBSQaNqPkwcei7Y9qXrA5ModQ0QHdAuVwBBEli7LaRnzi7WuhZmD5MnxAPNjeoErQMzv75W9Xwl4Dm2w%2Bfs%2B&X-Amz-Signature=e370a4f3a4ccf2e811a95b84ae1baaf34f26e1b0b008234fb5e0fa911c642d07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654SU5F4I%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxelBDdKl9Yu0vkdNApFfWyMFFwqnzhgZaCxs%2FkeyvWAiEAsa%2BgvXkiZNl6tTf2Gcb4B9oD%2FUAZiwVUNKA1mtdj%2FMUqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNC%2BqpEKRpZcR%2B3SVyrcAyqXN0aVKgfVD05t6YjP%2F%2FhzTObaLebq13pP4K5y00xfjazSVVqVE0Z7OIaiAagk6CyscSdie2NUqv0v%2F9eM%2Fz3N0xtWy2I9Rfw5up4cqqpuvOMJiLM1ZNo1ng3AuFbR0vydVthe2bort9tm17MnlEvniLRMGEGxSBo4GllkBygQ0A%2FYzXbnjty7iihZ5Sr9dlX%2F7mdg7j821%2FcKnyMWECLktQMz8gAguJV2VwW3k%2FU7JZFWpy7WfBXGy6jAoXGBdLE4kRUF6lBGUSo4bPzeCje%2BqWZuwnrGKbFd%2FwEUsGBsBZbisqf77QoR6n4ad4bBYiWzJiasgVMs%2FKiPW3hktpQSmPGDTMvYNiNI5qBetCLDJ6sM3r0ETFleonIkChSvwdlYIr0JgtQNMqnMxmA9lFGSutbn%2BC1c%2FEPVWf%2B0rFV7gPoZASexjZ2j5xJY0OX7UlR%2F%2BonQo5QsY6ICdWdpDyM%2Fjh%2FjcTWowVfDZB5nV%2FeNVZLB4poKiApbm73dTvdLxxMRnNIWTLmEgM2NHjCaDX4z9koerU%2B6tvG%2FksNmrV3UZfgPfeqweqCHIosUUx3Adn3VP5m6tJPzlkzmNYTo%2Ff1%2Bo5cnZ7Kld9bdtrmpcFKUgCY4swTnj2p9fVl1MJD14MQGOqUB9jX6zv2L5lqSmif4w5kx%2B%2FUxlCZTTwweywwoAcpIaUIwpT7HwTO3RqhUaiHaHmHBs70AoLNlko7%2B0%2FATzVLoVOJdBO1oL5%2FnKHAGC8tq6ShRtRq1USCsUtKVfBJjmp2ph6zAvaKpBBSQaNqPkwcei7Y9qXrA5ModQ0QHdAuVwBBEli7LaRnzi7WuhZmD5MnxAPNjeoErQMzv75W9Xwl4Dm2w%2Bfs%2B&X-Amz-Signature=6ffcf6d202f2ec632e253331c4d3c24b16d4c157426a696550e0af559e76b801&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654SU5F4I%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxelBDdKl9Yu0vkdNApFfWyMFFwqnzhgZaCxs%2FkeyvWAiEAsa%2BgvXkiZNl6tTf2Gcb4B9oD%2FUAZiwVUNKA1mtdj%2FMUqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNC%2BqpEKRpZcR%2B3SVyrcAyqXN0aVKgfVD05t6YjP%2F%2FhzTObaLebq13pP4K5y00xfjazSVVqVE0Z7OIaiAagk6CyscSdie2NUqv0v%2F9eM%2Fz3N0xtWy2I9Rfw5up4cqqpuvOMJiLM1ZNo1ng3AuFbR0vydVthe2bort9tm17MnlEvniLRMGEGxSBo4GllkBygQ0A%2FYzXbnjty7iihZ5Sr9dlX%2F7mdg7j821%2FcKnyMWECLktQMz8gAguJV2VwW3k%2FU7JZFWpy7WfBXGy6jAoXGBdLE4kRUF6lBGUSo4bPzeCje%2BqWZuwnrGKbFd%2FwEUsGBsBZbisqf77QoR6n4ad4bBYiWzJiasgVMs%2FKiPW3hktpQSmPGDTMvYNiNI5qBetCLDJ6sM3r0ETFleonIkChSvwdlYIr0JgtQNMqnMxmA9lFGSutbn%2BC1c%2FEPVWf%2B0rFV7gPoZASexjZ2j5xJY0OX7UlR%2F%2BonQo5QsY6ICdWdpDyM%2Fjh%2FjcTWowVfDZB5nV%2FeNVZLB4poKiApbm73dTvdLxxMRnNIWTLmEgM2NHjCaDX4z9koerU%2B6tvG%2FksNmrV3UZfgPfeqweqCHIosUUx3Adn3VP5m6tJPzlkzmNYTo%2Ff1%2Bo5cnZ7Kld9bdtrmpcFKUgCY4swTnj2p9fVl1MJD14MQGOqUB9jX6zv2L5lqSmif4w5kx%2B%2FUxlCZTTwweywwoAcpIaUIwpT7HwTO3RqhUaiHaHmHBs70AoLNlko7%2B0%2FATzVLoVOJdBO1oL5%2FnKHAGC8tq6ShRtRq1USCsUtKVfBJjmp2ph6zAvaKpBBSQaNqPkwcei7Y9qXrA5ModQ0QHdAuVwBBEli7LaRnzi7WuhZmD5MnxAPNjeoErQMzv75W9Xwl4Dm2w%2Bfs%2B&X-Amz-Signature=87e96a25beea54c9ed38274e5d11984cf9cdf14bf22a6afa4e6f8e12bcbe26a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654SU5F4I%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxelBDdKl9Yu0vkdNApFfWyMFFwqnzhgZaCxs%2FkeyvWAiEAsa%2BgvXkiZNl6tTf2Gcb4B9oD%2FUAZiwVUNKA1mtdj%2FMUqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNC%2BqpEKRpZcR%2B3SVyrcAyqXN0aVKgfVD05t6YjP%2F%2FhzTObaLebq13pP4K5y00xfjazSVVqVE0Z7OIaiAagk6CyscSdie2NUqv0v%2F9eM%2Fz3N0xtWy2I9Rfw5up4cqqpuvOMJiLM1ZNo1ng3AuFbR0vydVthe2bort9tm17MnlEvniLRMGEGxSBo4GllkBygQ0A%2FYzXbnjty7iihZ5Sr9dlX%2F7mdg7j821%2FcKnyMWECLktQMz8gAguJV2VwW3k%2FU7JZFWpy7WfBXGy6jAoXGBdLE4kRUF6lBGUSo4bPzeCje%2BqWZuwnrGKbFd%2FwEUsGBsBZbisqf77QoR6n4ad4bBYiWzJiasgVMs%2FKiPW3hktpQSmPGDTMvYNiNI5qBetCLDJ6sM3r0ETFleonIkChSvwdlYIr0JgtQNMqnMxmA9lFGSutbn%2BC1c%2FEPVWf%2B0rFV7gPoZASexjZ2j5xJY0OX7UlR%2F%2BonQo5QsY6ICdWdpDyM%2Fjh%2FjcTWowVfDZB5nV%2FeNVZLB4poKiApbm73dTvdLxxMRnNIWTLmEgM2NHjCaDX4z9koerU%2B6tvG%2FksNmrV3UZfgPfeqweqCHIosUUx3Adn3VP5m6tJPzlkzmNYTo%2Ff1%2Bo5cnZ7Kld9bdtrmpcFKUgCY4swTnj2p9fVl1MJD14MQGOqUB9jX6zv2L5lqSmif4w5kx%2B%2FUxlCZTTwweywwoAcpIaUIwpT7HwTO3RqhUaiHaHmHBs70AoLNlko7%2B0%2FATzVLoVOJdBO1oL5%2FnKHAGC8tq6ShRtRq1USCsUtKVfBJjmp2ph6zAvaKpBBSQaNqPkwcei7Y9qXrA5ModQ0QHdAuVwBBEli7LaRnzi7WuhZmD5MnxAPNjeoErQMzv75W9Xwl4Dm2w%2Bfs%2B&X-Amz-Signature=f2df0e17988bf4ba30ddff66c0ce0cf71d78dbb9331b108e475c40fabd6cb989&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654SU5F4I%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxelBDdKl9Yu0vkdNApFfWyMFFwqnzhgZaCxs%2FkeyvWAiEAsa%2BgvXkiZNl6tTf2Gcb4B9oD%2FUAZiwVUNKA1mtdj%2FMUqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNC%2BqpEKRpZcR%2B3SVyrcAyqXN0aVKgfVD05t6YjP%2F%2FhzTObaLebq13pP4K5y00xfjazSVVqVE0Z7OIaiAagk6CyscSdie2NUqv0v%2F9eM%2Fz3N0xtWy2I9Rfw5up4cqqpuvOMJiLM1ZNo1ng3AuFbR0vydVthe2bort9tm17MnlEvniLRMGEGxSBo4GllkBygQ0A%2FYzXbnjty7iihZ5Sr9dlX%2F7mdg7j821%2FcKnyMWECLktQMz8gAguJV2VwW3k%2FU7JZFWpy7WfBXGy6jAoXGBdLE4kRUF6lBGUSo4bPzeCje%2BqWZuwnrGKbFd%2FwEUsGBsBZbisqf77QoR6n4ad4bBYiWzJiasgVMs%2FKiPW3hktpQSmPGDTMvYNiNI5qBetCLDJ6sM3r0ETFleonIkChSvwdlYIr0JgtQNMqnMxmA9lFGSutbn%2BC1c%2FEPVWf%2B0rFV7gPoZASexjZ2j5xJY0OX7UlR%2F%2BonQo5QsY6ICdWdpDyM%2Fjh%2FjcTWowVfDZB5nV%2FeNVZLB4poKiApbm73dTvdLxxMRnNIWTLmEgM2NHjCaDX4z9koerU%2B6tvG%2FksNmrV3UZfgPfeqweqCHIosUUx3Adn3VP5m6tJPzlkzmNYTo%2Ff1%2Bo5cnZ7Kld9bdtrmpcFKUgCY4swTnj2p9fVl1MJD14MQGOqUB9jX6zv2L5lqSmif4w5kx%2B%2FUxlCZTTwweywwoAcpIaUIwpT7HwTO3RqhUaiHaHmHBs70AoLNlko7%2B0%2FATzVLoVOJdBO1oL5%2FnKHAGC8tq6ShRtRq1USCsUtKVfBJjmp2ph6zAvaKpBBSQaNqPkwcei7Y9qXrA5ModQ0QHdAuVwBBEli7LaRnzi7WuhZmD5MnxAPNjeoErQMzv75W9Xwl4Dm2w%2Bfs%2B&X-Amz-Signature=8d896811dd50954315b8f38ab9795793b4c8a2802ec2c47eed0b83dfad1a5430&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654SU5F4I%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxelBDdKl9Yu0vkdNApFfWyMFFwqnzhgZaCxs%2FkeyvWAiEAsa%2BgvXkiZNl6tTf2Gcb4B9oD%2FUAZiwVUNKA1mtdj%2FMUqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNC%2BqpEKRpZcR%2B3SVyrcAyqXN0aVKgfVD05t6YjP%2F%2FhzTObaLebq13pP4K5y00xfjazSVVqVE0Z7OIaiAagk6CyscSdie2NUqv0v%2F9eM%2Fz3N0xtWy2I9Rfw5up4cqqpuvOMJiLM1ZNo1ng3AuFbR0vydVthe2bort9tm17MnlEvniLRMGEGxSBo4GllkBygQ0A%2FYzXbnjty7iihZ5Sr9dlX%2F7mdg7j821%2FcKnyMWECLktQMz8gAguJV2VwW3k%2FU7JZFWpy7WfBXGy6jAoXGBdLE4kRUF6lBGUSo4bPzeCje%2BqWZuwnrGKbFd%2FwEUsGBsBZbisqf77QoR6n4ad4bBYiWzJiasgVMs%2FKiPW3hktpQSmPGDTMvYNiNI5qBetCLDJ6sM3r0ETFleonIkChSvwdlYIr0JgtQNMqnMxmA9lFGSutbn%2BC1c%2FEPVWf%2B0rFV7gPoZASexjZ2j5xJY0OX7UlR%2F%2BonQo5QsY6ICdWdpDyM%2Fjh%2FjcTWowVfDZB5nV%2FeNVZLB4poKiApbm73dTvdLxxMRnNIWTLmEgM2NHjCaDX4z9koerU%2B6tvG%2FksNmrV3UZfgPfeqweqCHIosUUx3Adn3VP5m6tJPzlkzmNYTo%2Ff1%2Bo5cnZ7Kld9bdtrmpcFKUgCY4swTnj2p9fVl1MJD14MQGOqUB9jX6zv2L5lqSmif4w5kx%2B%2FUxlCZTTwweywwoAcpIaUIwpT7HwTO3RqhUaiHaHmHBs70AoLNlko7%2B0%2FATzVLoVOJdBO1oL5%2FnKHAGC8tq6ShRtRq1USCsUtKVfBJjmp2ph6zAvaKpBBSQaNqPkwcei7Y9qXrA5ModQ0QHdAuVwBBEli7LaRnzi7WuhZmD5MnxAPNjeoErQMzv75W9Xwl4Dm2w%2Bfs%2B&X-Amz-Signature=77de6896e6f0c80c50653f70fe89439d0f31f97c59b8321a30c989e5511ae37e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654SU5F4I%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxelBDdKl9Yu0vkdNApFfWyMFFwqnzhgZaCxs%2FkeyvWAiEAsa%2BgvXkiZNl6tTf2Gcb4B9oD%2FUAZiwVUNKA1mtdj%2FMUqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNC%2BqpEKRpZcR%2B3SVyrcAyqXN0aVKgfVD05t6YjP%2F%2FhzTObaLebq13pP4K5y00xfjazSVVqVE0Z7OIaiAagk6CyscSdie2NUqv0v%2F9eM%2Fz3N0xtWy2I9Rfw5up4cqqpuvOMJiLM1ZNo1ng3AuFbR0vydVthe2bort9tm17MnlEvniLRMGEGxSBo4GllkBygQ0A%2FYzXbnjty7iihZ5Sr9dlX%2F7mdg7j821%2FcKnyMWECLktQMz8gAguJV2VwW3k%2FU7JZFWpy7WfBXGy6jAoXGBdLE4kRUF6lBGUSo4bPzeCje%2BqWZuwnrGKbFd%2FwEUsGBsBZbisqf77QoR6n4ad4bBYiWzJiasgVMs%2FKiPW3hktpQSmPGDTMvYNiNI5qBetCLDJ6sM3r0ETFleonIkChSvwdlYIr0JgtQNMqnMxmA9lFGSutbn%2BC1c%2FEPVWf%2B0rFV7gPoZASexjZ2j5xJY0OX7UlR%2F%2BonQo5QsY6ICdWdpDyM%2Fjh%2FjcTWowVfDZB5nV%2FeNVZLB4poKiApbm73dTvdLxxMRnNIWTLmEgM2NHjCaDX4z9koerU%2B6tvG%2FksNmrV3UZfgPfeqweqCHIosUUx3Adn3VP5m6tJPzlkzmNYTo%2Ff1%2Bo5cnZ7Kld9bdtrmpcFKUgCY4swTnj2p9fVl1MJD14MQGOqUB9jX6zv2L5lqSmif4w5kx%2B%2FUxlCZTTwweywwoAcpIaUIwpT7HwTO3RqhUaiHaHmHBs70AoLNlko7%2B0%2FATzVLoVOJdBO1oL5%2FnKHAGC8tq6ShRtRq1USCsUtKVfBJjmp2ph6zAvaKpBBSQaNqPkwcei7Y9qXrA5ModQ0QHdAuVwBBEli7LaRnzi7WuhZmD5MnxAPNjeoErQMzv75W9Xwl4Dm2w%2Bfs%2B&X-Amz-Signature=6ed1f086e16e31e0f29c6e4bc382859be36577632ed3655c7edf610391b3618e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654SU5F4I%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxelBDdKl9Yu0vkdNApFfWyMFFwqnzhgZaCxs%2FkeyvWAiEAsa%2BgvXkiZNl6tTf2Gcb4B9oD%2FUAZiwVUNKA1mtdj%2FMUqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNC%2BqpEKRpZcR%2B3SVyrcAyqXN0aVKgfVD05t6YjP%2F%2FhzTObaLebq13pP4K5y00xfjazSVVqVE0Z7OIaiAagk6CyscSdie2NUqv0v%2F9eM%2Fz3N0xtWy2I9Rfw5up4cqqpuvOMJiLM1ZNo1ng3AuFbR0vydVthe2bort9tm17MnlEvniLRMGEGxSBo4GllkBygQ0A%2FYzXbnjty7iihZ5Sr9dlX%2F7mdg7j821%2FcKnyMWECLktQMz8gAguJV2VwW3k%2FU7JZFWpy7WfBXGy6jAoXGBdLE4kRUF6lBGUSo4bPzeCje%2BqWZuwnrGKbFd%2FwEUsGBsBZbisqf77QoR6n4ad4bBYiWzJiasgVMs%2FKiPW3hktpQSmPGDTMvYNiNI5qBetCLDJ6sM3r0ETFleonIkChSvwdlYIr0JgtQNMqnMxmA9lFGSutbn%2BC1c%2FEPVWf%2B0rFV7gPoZASexjZ2j5xJY0OX7UlR%2F%2BonQo5QsY6ICdWdpDyM%2Fjh%2FjcTWowVfDZB5nV%2FeNVZLB4poKiApbm73dTvdLxxMRnNIWTLmEgM2NHjCaDX4z9koerU%2B6tvG%2FksNmrV3UZfgPfeqweqCHIosUUx3Adn3VP5m6tJPzlkzmNYTo%2Ff1%2Bo5cnZ7Kld9bdtrmpcFKUgCY4swTnj2p9fVl1MJD14MQGOqUB9jX6zv2L5lqSmif4w5kx%2B%2FUxlCZTTwweywwoAcpIaUIwpT7HwTO3RqhUaiHaHmHBs70AoLNlko7%2B0%2FATzVLoVOJdBO1oL5%2FnKHAGC8tq6ShRtRq1USCsUtKVfBJjmp2ph6zAvaKpBBSQaNqPkwcei7Y9qXrA5ModQ0QHdAuVwBBEli7LaRnzi7WuhZmD5MnxAPNjeoErQMzv75W9Xwl4Dm2w%2Bfs%2B&X-Amz-Signature=1c7e25d63be65e7fd3e2f4d67a815b6d28ca369fdde8e94a45ab2b08ec86bbc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654SU5F4I%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxelBDdKl9Yu0vkdNApFfWyMFFwqnzhgZaCxs%2FkeyvWAiEAsa%2BgvXkiZNl6tTf2Gcb4B9oD%2FUAZiwVUNKA1mtdj%2FMUqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNC%2BqpEKRpZcR%2B3SVyrcAyqXN0aVKgfVD05t6YjP%2F%2FhzTObaLebq13pP4K5y00xfjazSVVqVE0Z7OIaiAagk6CyscSdie2NUqv0v%2F9eM%2Fz3N0xtWy2I9Rfw5up4cqqpuvOMJiLM1ZNo1ng3AuFbR0vydVthe2bort9tm17MnlEvniLRMGEGxSBo4GllkBygQ0A%2FYzXbnjty7iihZ5Sr9dlX%2F7mdg7j821%2FcKnyMWECLktQMz8gAguJV2VwW3k%2FU7JZFWpy7WfBXGy6jAoXGBdLE4kRUF6lBGUSo4bPzeCje%2BqWZuwnrGKbFd%2FwEUsGBsBZbisqf77QoR6n4ad4bBYiWzJiasgVMs%2FKiPW3hktpQSmPGDTMvYNiNI5qBetCLDJ6sM3r0ETFleonIkChSvwdlYIr0JgtQNMqnMxmA9lFGSutbn%2BC1c%2FEPVWf%2B0rFV7gPoZASexjZ2j5xJY0OX7UlR%2F%2BonQo5QsY6ICdWdpDyM%2Fjh%2FjcTWowVfDZB5nV%2FeNVZLB4poKiApbm73dTvdLxxMRnNIWTLmEgM2NHjCaDX4z9koerU%2B6tvG%2FksNmrV3UZfgPfeqweqCHIosUUx3Adn3VP5m6tJPzlkzmNYTo%2Ff1%2Bo5cnZ7Kld9bdtrmpcFKUgCY4swTnj2p9fVl1MJD14MQGOqUB9jX6zv2L5lqSmif4w5kx%2B%2FUxlCZTTwweywwoAcpIaUIwpT7HwTO3RqhUaiHaHmHBs70AoLNlko7%2B0%2FATzVLoVOJdBO1oL5%2FnKHAGC8tq6ShRtRq1USCsUtKVfBJjmp2ph6zAvaKpBBSQaNqPkwcei7Y9qXrA5ModQ0QHdAuVwBBEli7LaRnzi7WuhZmD5MnxAPNjeoErQMzv75W9Xwl4Dm2w%2Bfs%2B&X-Amz-Signature=861f0b53232bd81c55ba5794e3ade7da51e384c96e11f7a11d63e4596cea76d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
