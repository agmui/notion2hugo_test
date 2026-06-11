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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RICTQBL4%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDwz9BoorFg3hUnlgm8l3wxtYVlwCW4SAGPBD%2BhpKppggIgF4n%2BiauVOgKv9YvTcfKcYr6tWq45PNelP%2BepElUBj9kqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCyQKGJHcXCiBsRn0yrcA16vdzdd8ot6SiqnBSVtXFlHcJZg33Kj1oJx8DBPIT2BGVnl8xIA7CDsIPa6cozCqngM9WevaNKQ2NwhPMFETLSHVgD1dLBXsyMjGHhNkHzdCexD7HUKkwsRbyZcYnmtAwqRlVP9dWJIO1p1HPjUjtSmy1nrhB8fRlMT7wEoxNLt5B%2FGBZ5kqVTwysNtgw7pkmRZjclRTpnZMxXzC7Aggi3939KhZhzPamx8PcOhyI02eIA8Y5uuqAogOF6%2FAOBYepi19B0v%2BlM5XGNHA9bB6Ta51vuMB43j2mj%2BGokpVsDA0obJzeMKB3houeOtMh86PpOeslTPWRJjN7U5Lim8iZZA3pFJb9%2FYEzIV2POiRH48KI5wNdkLksWNhL3tuvkVHnbf4XfNumuXpZwWtwHKSv5OPL0GL%2B6i8ySRSNAZbhtBjLB3Txbi54Kp8mryDfM8qO1%2FZ%2BbuISL4UgUwgPsPZJ4N5qqDuKQp88AwNC1Yf9DkZu8J2XTgWCAzPmdIKoFuRMg4%2ByU34FqXx%2BakJavjVcMa4j6oF38wVbVujMiHgWRACiLub9CbEdIIhixTvHH6nL0E3AqEf%2BJUjr6YVLSLk2T5vyar7zsTVh%2FOy0QuUfwPXsC8jfzrR8gnv8ZJMOSnqNEGOqUBfypWK3dwdxXKjOjYzeztyRxyfHenNpwX6SSNM4eIHx0rDB0XPwld8Q0370Xf2mxt2IufYhsdadEn9QNK5Hxia8vAcIODaqwo1fY01E3Q2yewvw0bXf63i4iB0TtblSwV%2BumXNZGLUSiAyWYdZtjSFmQEOtud2sfFU%2BrD%2Ba%2FN%2B7SG0481Z%2B9xMPiu5b%2FmnID6ZGtl6xYJGJKqfiITP555fjCiFN7h&X-Amz-Signature=b97e1bc85308b2734be1ea02c8a53ba0ad98daa804793cc11107099aa29ebd2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667S27WY4%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIFdpR3FmrQ2%2FyND35B0ApU6yPVwhyo9tsFsViEPFX6%2BxAiEA8yXD9yOr2Gub9MjhuL%2Fqfiacnf1SD68Nfs2GExjC94IqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPt5zVQxsZWRgkKYRSrcA72elJwd429G%2FdOQZydqFblmA2YhmYEShaETuDAGKv1KfwIbh2WCJUxeS3%2FDZiShEYm36u1ZrOh1g%2F3nNz1aJKX2QPqkq%2FZS0pK5bHmVhnVaK0ADZ9t07M9%2FWUl1uxxY8jcecl0k%2BZvvJk8xFhVsvHlTNzFj2N13CZQ3qgY7FiiOpB2uRbAOeypO3YxsR8U3l%2F2GHqBFWJSzB6U8IYQ5cDuVI89qTPGbDngHQzvF2G9SSZpaBy0hkfDvP2AMlMxWtyD%2BcU4dI8XVydfUHVqo9N7shs2Dc7bCCmJvnh2BFxWyRCnD4zZdktODYkA11fgdubluAIVayYSz5qdfvN3O1Fx6LX1r8eGP2rDiI%2BqLJJUizXKdVKer%2BNZuOWYQG5G3KNvCuUFnQMX2GSZe2LPv37KmX0aNCCvDRjKH5wzJHHqEDooQPWpDF%2B4xykIxETxTx88Um39Ff7kyA7oqMdsQDLgHKvZRGgMZsyaefpCSloBnnDhvsp5nxr3wWwl77yrebKksp9x1VH14OFR1%2BJsU%2FozumisnCysc4Bd%2B%2FurLTiQ%2Bp3%2FCAiVmCg5PqzNCe8m%2BBlk9yCPCeF6bnf%2FltgwOnA7kYHzpba5TakgJw0OLeU4dr%2B9vPaKnzjoEX88SMPinqNEGOqUBnp0O4TAZ5KjadO2JnbEd%2FedaQqcK%2BMkLH8iSr7w30B713jUiNzHhJDsAwcdxfOu1J%2FWjGHQSR32dxvUO2K%2BWDnTVqdq8CL%2FTM%2BxOwlq2FnaVfWlXREc2W60WEmZc77WBvQbA6KQRHnwqeP7cFCxsRANLiBZV2cc1%2BkURVNQJ0ydqdTWEfgPR0JVec7%2Bxwhk0e5puBcA2%2BCx5HNR6ZGLVZqwml%2Bcq&X-Amz-Signature=eca8e1dad77ce45c01741ebdd13ef0655aa7b45ddba27d97c09a2c717b06521d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667S27WY4%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIFdpR3FmrQ2%2FyND35B0ApU6yPVwhyo9tsFsViEPFX6%2BxAiEA8yXD9yOr2Gub9MjhuL%2Fqfiacnf1SD68Nfs2GExjC94IqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPt5zVQxsZWRgkKYRSrcA72elJwd429G%2FdOQZydqFblmA2YhmYEShaETuDAGKv1KfwIbh2WCJUxeS3%2FDZiShEYm36u1ZrOh1g%2F3nNz1aJKX2QPqkq%2FZS0pK5bHmVhnVaK0ADZ9t07M9%2FWUl1uxxY8jcecl0k%2BZvvJk8xFhVsvHlTNzFj2N13CZQ3qgY7FiiOpB2uRbAOeypO3YxsR8U3l%2F2GHqBFWJSzB6U8IYQ5cDuVI89qTPGbDngHQzvF2G9SSZpaBy0hkfDvP2AMlMxWtyD%2BcU4dI8XVydfUHVqo9N7shs2Dc7bCCmJvnh2BFxWyRCnD4zZdktODYkA11fgdubluAIVayYSz5qdfvN3O1Fx6LX1r8eGP2rDiI%2BqLJJUizXKdVKer%2BNZuOWYQG5G3KNvCuUFnQMX2GSZe2LPv37KmX0aNCCvDRjKH5wzJHHqEDooQPWpDF%2B4xykIxETxTx88Um39Ff7kyA7oqMdsQDLgHKvZRGgMZsyaefpCSloBnnDhvsp5nxr3wWwl77yrebKksp9x1VH14OFR1%2BJsU%2FozumisnCysc4Bd%2B%2FurLTiQ%2Bp3%2FCAiVmCg5PqzNCe8m%2BBlk9yCPCeF6bnf%2FltgwOnA7kYHzpba5TakgJw0OLeU4dr%2B9vPaKnzjoEX88SMPinqNEGOqUBnp0O4TAZ5KjadO2JnbEd%2FedaQqcK%2BMkLH8iSr7w30B713jUiNzHhJDsAwcdxfOu1J%2FWjGHQSR32dxvUO2K%2BWDnTVqdq8CL%2FTM%2BxOwlq2FnaVfWlXREc2W60WEmZc77WBvQbA6KQRHnwqeP7cFCxsRANLiBZV2cc1%2BkURVNQJ0ydqdTWEfgPR0JVec7%2Bxwhk0e5puBcA2%2BCx5HNR6ZGLVZqwml%2Bcq&X-Amz-Signature=556702607f808bb150375a6d551e3f6e20d0ef0f8e234092b11543e628df9239&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667S27WY4%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIFdpR3FmrQ2%2FyND35B0ApU6yPVwhyo9tsFsViEPFX6%2BxAiEA8yXD9yOr2Gub9MjhuL%2Fqfiacnf1SD68Nfs2GExjC94IqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPt5zVQxsZWRgkKYRSrcA72elJwd429G%2FdOQZydqFblmA2YhmYEShaETuDAGKv1KfwIbh2WCJUxeS3%2FDZiShEYm36u1ZrOh1g%2F3nNz1aJKX2QPqkq%2FZS0pK5bHmVhnVaK0ADZ9t07M9%2FWUl1uxxY8jcecl0k%2BZvvJk8xFhVsvHlTNzFj2N13CZQ3qgY7FiiOpB2uRbAOeypO3YxsR8U3l%2F2GHqBFWJSzB6U8IYQ5cDuVI89qTPGbDngHQzvF2G9SSZpaBy0hkfDvP2AMlMxWtyD%2BcU4dI8XVydfUHVqo9N7shs2Dc7bCCmJvnh2BFxWyRCnD4zZdktODYkA11fgdubluAIVayYSz5qdfvN3O1Fx6LX1r8eGP2rDiI%2BqLJJUizXKdVKer%2BNZuOWYQG5G3KNvCuUFnQMX2GSZe2LPv37KmX0aNCCvDRjKH5wzJHHqEDooQPWpDF%2B4xykIxETxTx88Um39Ff7kyA7oqMdsQDLgHKvZRGgMZsyaefpCSloBnnDhvsp5nxr3wWwl77yrebKksp9x1VH14OFR1%2BJsU%2FozumisnCysc4Bd%2B%2FurLTiQ%2Bp3%2FCAiVmCg5PqzNCe8m%2BBlk9yCPCeF6bnf%2FltgwOnA7kYHzpba5TakgJw0OLeU4dr%2B9vPaKnzjoEX88SMPinqNEGOqUBnp0O4TAZ5KjadO2JnbEd%2FedaQqcK%2BMkLH8iSr7w30B713jUiNzHhJDsAwcdxfOu1J%2FWjGHQSR32dxvUO2K%2BWDnTVqdq8CL%2FTM%2BxOwlq2FnaVfWlXREc2W60WEmZc77WBvQbA6KQRHnwqeP7cFCxsRANLiBZV2cc1%2BkURVNQJ0ydqdTWEfgPR0JVec7%2Bxwhk0e5puBcA2%2BCx5HNR6ZGLVZqwml%2Bcq&X-Amz-Signature=62fb139406cea8027963d18129c5081b59c2eb0a5a184956eb9485abbe559bc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667S27WY4%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIFdpR3FmrQ2%2FyND35B0ApU6yPVwhyo9tsFsViEPFX6%2BxAiEA8yXD9yOr2Gub9MjhuL%2Fqfiacnf1SD68Nfs2GExjC94IqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPt5zVQxsZWRgkKYRSrcA72elJwd429G%2FdOQZydqFblmA2YhmYEShaETuDAGKv1KfwIbh2WCJUxeS3%2FDZiShEYm36u1ZrOh1g%2F3nNz1aJKX2QPqkq%2FZS0pK5bHmVhnVaK0ADZ9t07M9%2FWUl1uxxY8jcecl0k%2BZvvJk8xFhVsvHlTNzFj2N13CZQ3qgY7FiiOpB2uRbAOeypO3YxsR8U3l%2F2GHqBFWJSzB6U8IYQ5cDuVI89qTPGbDngHQzvF2G9SSZpaBy0hkfDvP2AMlMxWtyD%2BcU4dI8XVydfUHVqo9N7shs2Dc7bCCmJvnh2BFxWyRCnD4zZdktODYkA11fgdubluAIVayYSz5qdfvN3O1Fx6LX1r8eGP2rDiI%2BqLJJUizXKdVKer%2BNZuOWYQG5G3KNvCuUFnQMX2GSZe2LPv37KmX0aNCCvDRjKH5wzJHHqEDooQPWpDF%2B4xykIxETxTx88Um39Ff7kyA7oqMdsQDLgHKvZRGgMZsyaefpCSloBnnDhvsp5nxr3wWwl77yrebKksp9x1VH14OFR1%2BJsU%2FozumisnCysc4Bd%2B%2FurLTiQ%2Bp3%2FCAiVmCg5PqzNCe8m%2BBlk9yCPCeF6bnf%2FltgwOnA7kYHzpba5TakgJw0OLeU4dr%2B9vPaKnzjoEX88SMPinqNEGOqUBnp0O4TAZ5KjadO2JnbEd%2FedaQqcK%2BMkLH8iSr7w30B713jUiNzHhJDsAwcdxfOu1J%2FWjGHQSR32dxvUO2K%2BWDnTVqdq8CL%2FTM%2BxOwlq2FnaVfWlXREc2W60WEmZc77WBvQbA6KQRHnwqeP7cFCxsRANLiBZV2cc1%2BkURVNQJ0ydqdTWEfgPR0JVec7%2Bxwhk0e5puBcA2%2BCx5HNR6ZGLVZqwml%2Bcq&X-Amz-Signature=9de64c61f23688b13841cf08deaf865b1718218e68019ef8ba750ef597875723&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667S27WY4%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIFdpR3FmrQ2%2FyND35B0ApU6yPVwhyo9tsFsViEPFX6%2BxAiEA8yXD9yOr2Gub9MjhuL%2Fqfiacnf1SD68Nfs2GExjC94IqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPt5zVQxsZWRgkKYRSrcA72elJwd429G%2FdOQZydqFblmA2YhmYEShaETuDAGKv1KfwIbh2WCJUxeS3%2FDZiShEYm36u1ZrOh1g%2F3nNz1aJKX2QPqkq%2FZS0pK5bHmVhnVaK0ADZ9t07M9%2FWUl1uxxY8jcecl0k%2BZvvJk8xFhVsvHlTNzFj2N13CZQ3qgY7FiiOpB2uRbAOeypO3YxsR8U3l%2F2GHqBFWJSzB6U8IYQ5cDuVI89qTPGbDngHQzvF2G9SSZpaBy0hkfDvP2AMlMxWtyD%2BcU4dI8XVydfUHVqo9N7shs2Dc7bCCmJvnh2BFxWyRCnD4zZdktODYkA11fgdubluAIVayYSz5qdfvN3O1Fx6LX1r8eGP2rDiI%2BqLJJUizXKdVKer%2BNZuOWYQG5G3KNvCuUFnQMX2GSZe2LPv37KmX0aNCCvDRjKH5wzJHHqEDooQPWpDF%2B4xykIxETxTx88Um39Ff7kyA7oqMdsQDLgHKvZRGgMZsyaefpCSloBnnDhvsp5nxr3wWwl77yrebKksp9x1VH14OFR1%2BJsU%2FozumisnCysc4Bd%2B%2FurLTiQ%2Bp3%2FCAiVmCg5PqzNCe8m%2BBlk9yCPCeF6bnf%2FltgwOnA7kYHzpba5TakgJw0OLeU4dr%2B9vPaKnzjoEX88SMPinqNEGOqUBnp0O4TAZ5KjadO2JnbEd%2FedaQqcK%2BMkLH8iSr7w30B713jUiNzHhJDsAwcdxfOu1J%2FWjGHQSR32dxvUO2K%2BWDnTVqdq8CL%2FTM%2BxOwlq2FnaVfWlXREc2W60WEmZc77WBvQbA6KQRHnwqeP7cFCxsRANLiBZV2cc1%2BkURVNQJ0ydqdTWEfgPR0JVec7%2Bxwhk0e5puBcA2%2BCx5HNR6ZGLVZqwml%2Bcq&X-Amz-Signature=cd5bb15b4bdab2589da1782f21ccdce707181d002a1f81eb529f29d55a3ba2ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667S27WY4%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIFdpR3FmrQ2%2FyND35B0ApU6yPVwhyo9tsFsViEPFX6%2BxAiEA8yXD9yOr2Gub9MjhuL%2Fqfiacnf1SD68Nfs2GExjC94IqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPt5zVQxsZWRgkKYRSrcA72elJwd429G%2FdOQZydqFblmA2YhmYEShaETuDAGKv1KfwIbh2WCJUxeS3%2FDZiShEYm36u1ZrOh1g%2F3nNz1aJKX2QPqkq%2FZS0pK5bHmVhnVaK0ADZ9t07M9%2FWUl1uxxY8jcecl0k%2BZvvJk8xFhVsvHlTNzFj2N13CZQ3qgY7FiiOpB2uRbAOeypO3YxsR8U3l%2F2GHqBFWJSzB6U8IYQ5cDuVI89qTPGbDngHQzvF2G9SSZpaBy0hkfDvP2AMlMxWtyD%2BcU4dI8XVydfUHVqo9N7shs2Dc7bCCmJvnh2BFxWyRCnD4zZdktODYkA11fgdubluAIVayYSz5qdfvN3O1Fx6LX1r8eGP2rDiI%2BqLJJUizXKdVKer%2BNZuOWYQG5G3KNvCuUFnQMX2GSZe2LPv37KmX0aNCCvDRjKH5wzJHHqEDooQPWpDF%2B4xykIxETxTx88Um39Ff7kyA7oqMdsQDLgHKvZRGgMZsyaefpCSloBnnDhvsp5nxr3wWwl77yrebKksp9x1VH14OFR1%2BJsU%2FozumisnCysc4Bd%2B%2FurLTiQ%2Bp3%2FCAiVmCg5PqzNCe8m%2BBlk9yCPCeF6bnf%2FltgwOnA7kYHzpba5TakgJw0OLeU4dr%2B9vPaKnzjoEX88SMPinqNEGOqUBnp0O4TAZ5KjadO2JnbEd%2FedaQqcK%2BMkLH8iSr7w30B713jUiNzHhJDsAwcdxfOu1J%2FWjGHQSR32dxvUO2K%2BWDnTVqdq8CL%2FTM%2BxOwlq2FnaVfWlXREc2W60WEmZc77WBvQbA6KQRHnwqeP7cFCxsRANLiBZV2cc1%2BkURVNQJ0ydqdTWEfgPR0JVec7%2Bxwhk0e5puBcA2%2BCx5HNR6ZGLVZqwml%2Bcq&X-Amz-Signature=b8e706201e4cc4ef38f75e20befc9dcfcc6fa371a012ff2d4b58f8f1f45097a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667S27WY4%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIFdpR3FmrQ2%2FyND35B0ApU6yPVwhyo9tsFsViEPFX6%2BxAiEA8yXD9yOr2Gub9MjhuL%2Fqfiacnf1SD68Nfs2GExjC94IqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPt5zVQxsZWRgkKYRSrcA72elJwd429G%2FdOQZydqFblmA2YhmYEShaETuDAGKv1KfwIbh2WCJUxeS3%2FDZiShEYm36u1ZrOh1g%2F3nNz1aJKX2QPqkq%2FZS0pK5bHmVhnVaK0ADZ9t07M9%2FWUl1uxxY8jcecl0k%2BZvvJk8xFhVsvHlTNzFj2N13CZQ3qgY7FiiOpB2uRbAOeypO3YxsR8U3l%2F2GHqBFWJSzB6U8IYQ5cDuVI89qTPGbDngHQzvF2G9SSZpaBy0hkfDvP2AMlMxWtyD%2BcU4dI8XVydfUHVqo9N7shs2Dc7bCCmJvnh2BFxWyRCnD4zZdktODYkA11fgdubluAIVayYSz5qdfvN3O1Fx6LX1r8eGP2rDiI%2BqLJJUizXKdVKer%2BNZuOWYQG5G3KNvCuUFnQMX2GSZe2LPv37KmX0aNCCvDRjKH5wzJHHqEDooQPWpDF%2B4xykIxETxTx88Um39Ff7kyA7oqMdsQDLgHKvZRGgMZsyaefpCSloBnnDhvsp5nxr3wWwl77yrebKksp9x1VH14OFR1%2BJsU%2FozumisnCysc4Bd%2B%2FurLTiQ%2Bp3%2FCAiVmCg5PqzNCe8m%2BBlk9yCPCeF6bnf%2FltgwOnA7kYHzpba5TakgJw0OLeU4dr%2B9vPaKnzjoEX88SMPinqNEGOqUBnp0O4TAZ5KjadO2JnbEd%2FedaQqcK%2BMkLH8iSr7w30B713jUiNzHhJDsAwcdxfOu1J%2FWjGHQSR32dxvUO2K%2BWDnTVqdq8CL%2FTM%2BxOwlq2FnaVfWlXREc2W60WEmZc77WBvQbA6KQRHnwqeP7cFCxsRANLiBZV2cc1%2BkURVNQJ0ydqdTWEfgPR0JVec7%2Bxwhk0e5puBcA2%2BCx5HNR6ZGLVZqwml%2Bcq&X-Amz-Signature=f1b7027d087e48b5faf09b9cf69bd3eb0e786b75277c19ec9358f57485d8ca69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667S27WY4%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIFdpR3FmrQ2%2FyND35B0ApU6yPVwhyo9tsFsViEPFX6%2BxAiEA8yXD9yOr2Gub9MjhuL%2Fqfiacnf1SD68Nfs2GExjC94IqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPt5zVQxsZWRgkKYRSrcA72elJwd429G%2FdOQZydqFblmA2YhmYEShaETuDAGKv1KfwIbh2WCJUxeS3%2FDZiShEYm36u1ZrOh1g%2F3nNz1aJKX2QPqkq%2FZS0pK5bHmVhnVaK0ADZ9t07M9%2FWUl1uxxY8jcecl0k%2BZvvJk8xFhVsvHlTNzFj2N13CZQ3qgY7FiiOpB2uRbAOeypO3YxsR8U3l%2F2GHqBFWJSzB6U8IYQ5cDuVI89qTPGbDngHQzvF2G9SSZpaBy0hkfDvP2AMlMxWtyD%2BcU4dI8XVydfUHVqo9N7shs2Dc7bCCmJvnh2BFxWyRCnD4zZdktODYkA11fgdubluAIVayYSz5qdfvN3O1Fx6LX1r8eGP2rDiI%2BqLJJUizXKdVKer%2BNZuOWYQG5G3KNvCuUFnQMX2GSZe2LPv37KmX0aNCCvDRjKH5wzJHHqEDooQPWpDF%2B4xykIxETxTx88Um39Ff7kyA7oqMdsQDLgHKvZRGgMZsyaefpCSloBnnDhvsp5nxr3wWwl77yrebKksp9x1VH14OFR1%2BJsU%2FozumisnCysc4Bd%2B%2FurLTiQ%2Bp3%2FCAiVmCg5PqzNCe8m%2BBlk9yCPCeF6bnf%2FltgwOnA7kYHzpba5TakgJw0OLeU4dr%2B9vPaKnzjoEX88SMPinqNEGOqUBnp0O4TAZ5KjadO2JnbEd%2FedaQqcK%2BMkLH8iSr7w30B713jUiNzHhJDsAwcdxfOu1J%2FWjGHQSR32dxvUO2K%2BWDnTVqdq8CL%2FTM%2BxOwlq2FnaVfWlXREc2W60WEmZc77WBvQbA6KQRHnwqeP7cFCxsRANLiBZV2cc1%2BkURVNQJ0ydqdTWEfgPR0JVec7%2Bxwhk0e5puBcA2%2BCx5HNR6ZGLVZqwml%2Bcq&X-Amz-Signature=4cd7ea31b4ee4707b8ece75b5fa0e455a9d1546ec3e979332eeb3f221849b26d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667S27WY4%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIFdpR3FmrQ2%2FyND35B0ApU6yPVwhyo9tsFsViEPFX6%2BxAiEA8yXD9yOr2Gub9MjhuL%2Fqfiacnf1SD68Nfs2GExjC94IqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPt5zVQxsZWRgkKYRSrcA72elJwd429G%2FdOQZydqFblmA2YhmYEShaETuDAGKv1KfwIbh2WCJUxeS3%2FDZiShEYm36u1ZrOh1g%2F3nNz1aJKX2QPqkq%2FZS0pK5bHmVhnVaK0ADZ9t07M9%2FWUl1uxxY8jcecl0k%2BZvvJk8xFhVsvHlTNzFj2N13CZQ3qgY7FiiOpB2uRbAOeypO3YxsR8U3l%2F2GHqBFWJSzB6U8IYQ5cDuVI89qTPGbDngHQzvF2G9SSZpaBy0hkfDvP2AMlMxWtyD%2BcU4dI8XVydfUHVqo9N7shs2Dc7bCCmJvnh2BFxWyRCnD4zZdktODYkA11fgdubluAIVayYSz5qdfvN3O1Fx6LX1r8eGP2rDiI%2BqLJJUizXKdVKer%2BNZuOWYQG5G3KNvCuUFnQMX2GSZe2LPv37KmX0aNCCvDRjKH5wzJHHqEDooQPWpDF%2B4xykIxETxTx88Um39Ff7kyA7oqMdsQDLgHKvZRGgMZsyaefpCSloBnnDhvsp5nxr3wWwl77yrebKksp9x1VH14OFR1%2BJsU%2FozumisnCysc4Bd%2B%2FurLTiQ%2Bp3%2FCAiVmCg5PqzNCe8m%2BBlk9yCPCeF6bnf%2FltgwOnA7kYHzpba5TakgJw0OLeU4dr%2B9vPaKnzjoEX88SMPinqNEGOqUBnp0O4TAZ5KjadO2JnbEd%2FedaQqcK%2BMkLH8iSr7w30B713jUiNzHhJDsAwcdxfOu1J%2FWjGHQSR32dxvUO2K%2BWDnTVqdq8CL%2FTM%2BxOwlq2FnaVfWlXREc2W60WEmZc77WBvQbA6KQRHnwqeP7cFCxsRANLiBZV2cc1%2BkURVNQJ0ydqdTWEfgPR0JVec7%2Bxwhk0e5puBcA2%2BCx5HNR6ZGLVZqwml%2Bcq&X-Amz-Signature=58dfc2e10920e4d90468a8e2f180c74deb801e1ee64d1fdd47390c3e8ea1823e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667S27WY4%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIFdpR3FmrQ2%2FyND35B0ApU6yPVwhyo9tsFsViEPFX6%2BxAiEA8yXD9yOr2Gub9MjhuL%2Fqfiacnf1SD68Nfs2GExjC94IqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPt5zVQxsZWRgkKYRSrcA72elJwd429G%2FdOQZydqFblmA2YhmYEShaETuDAGKv1KfwIbh2WCJUxeS3%2FDZiShEYm36u1ZrOh1g%2F3nNz1aJKX2QPqkq%2FZS0pK5bHmVhnVaK0ADZ9t07M9%2FWUl1uxxY8jcecl0k%2BZvvJk8xFhVsvHlTNzFj2N13CZQ3qgY7FiiOpB2uRbAOeypO3YxsR8U3l%2F2GHqBFWJSzB6U8IYQ5cDuVI89qTPGbDngHQzvF2G9SSZpaBy0hkfDvP2AMlMxWtyD%2BcU4dI8XVydfUHVqo9N7shs2Dc7bCCmJvnh2BFxWyRCnD4zZdktODYkA11fgdubluAIVayYSz5qdfvN3O1Fx6LX1r8eGP2rDiI%2BqLJJUizXKdVKer%2BNZuOWYQG5G3KNvCuUFnQMX2GSZe2LPv37KmX0aNCCvDRjKH5wzJHHqEDooQPWpDF%2B4xykIxETxTx88Um39Ff7kyA7oqMdsQDLgHKvZRGgMZsyaefpCSloBnnDhvsp5nxr3wWwl77yrebKksp9x1VH14OFR1%2BJsU%2FozumisnCysc4Bd%2B%2FurLTiQ%2Bp3%2FCAiVmCg5PqzNCe8m%2BBlk9yCPCeF6bnf%2FltgwOnA7kYHzpba5TakgJw0OLeU4dr%2B9vPaKnzjoEX88SMPinqNEGOqUBnp0O4TAZ5KjadO2JnbEd%2FedaQqcK%2BMkLH8iSr7w30B713jUiNzHhJDsAwcdxfOu1J%2FWjGHQSR32dxvUO2K%2BWDnTVqdq8CL%2FTM%2BxOwlq2FnaVfWlXREc2W60WEmZc77WBvQbA6KQRHnwqeP7cFCxsRANLiBZV2cc1%2BkURVNQJ0ydqdTWEfgPR0JVec7%2Bxwhk0e5puBcA2%2BCx5HNR6ZGLVZqwml%2Bcq&X-Amz-Signature=9de64c61f23688b13841cf08deaf865b1718218e68019ef8ba750ef597875723&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
