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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXKSXDCJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIDM%2F3HK%2BPPW6uNh4AQbjWcnWQ2KiOZhsHcc0xOWAUlpyAiEA63evKHgl6ITtkaWtdgfykQOjyWhXq6kcOpYsMQf%2BTUUq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDKJlBVcpSaVSB0qm7CrcAxjQicLTsjjopL0LZ5QaK72iJZZfIk4ajUmCZDbCl6NE1MiyKh%2B3qrI0P%2B0n3ojeQ0BzjKoZbXzVJzQiBBcv0k1X7Qj30ndlT8gw8pCUqUN7qOjM1FdGbrnqoQ%2B5adGpvkIhHSvIm7cg5u16pTCTUss2LhbHh3p0%2BvhGvdnm83IKtDb%2BklbyeeWGjzzp0rNZuNF0t%2BHIrdG%2BfEIlmOJywYZ0CCmJyA7GxA5tUEECm6%2BEJ50URsxr%2BoBstySGSwBkHv2MRYYUi2el4bIAUth4AHU5%2FKqZVKkX64d9AND9xL1aYYVNwsVtR5iKgYJHPyGqZMq7Tm419I3l6VbpjijciCgPkEAqMd1Ga7IpYGfUMQ%2B%2Ba%2Bx1UjwgGc91bf0sM5UM6jw5e5ku4telKRyXQuoP3peukvJjzKR6MR30xw4bIPy8KfuP9RlS0Ccs6EMUT4MVc6%2FAawmeiXALuCOGTc%2F%2FsQDoK3UjPNo8%2B9tdX1MLwPvg3RaKs8Y5roU5a7AMmd4FcuwTRz5C4FsFmRg%2F0JmsgLQSjvYL5X1PSF49IfsevkZFl8kGxXdJ51DekmVgFFCupk%2FdZEzzyf1%2FR6Cm63hWD%2B%2B22ZNqygKUJ5t7D2qB5%2FV1z3W%2BG6J6oBh47kdNMKbC%2BMQGOqUBiAIMM1l7tZx91iTi85uu3WzOrCuk%2FVMOCJUXr3QFIDrSx2tBhzdPvFc5CcomUqDSWFT%2BI5eQVT60RrHiCIUHiYvSu91%2BGtTYlxL5JlHT9bLWUFEgFDaZxzjkz0B2NT05CpjOLZ%2BBLWMjK15nD7vtp2xZ5ESRwJwftLwJvQyDuMtV5PNivS3E58SUl7PFMEgQBGWfghYHcobQoK8Ryd2%2BSefZ6eej&X-Amz-Signature=d77f6a8b7e642b9f7880d05ae494bd8e410f684a627305de6bc820047dbef04f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GV3LJXU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC78grAJ834MX7gDpXaDZ43e3XKOUm4FicCPXuoi%2BBiowIhAJWvZ6bHtSY2g3tBN%2FmZWy1nFiJLIx4GW1rnOyGZyfbfKv8DCEsQABoMNjM3NDIzMTgzODA1Igy7CCuWpRqnORirEvIq3AM9Dn3ojMyaf5mnUUl8%2FWFfl%2FdDySBfGoTDYj1EkQIuoJjTwO9mp5iRA7F8DN7O%2Bdsjif797AC46ZN8J0au2qaY7nILt6djqOEIIoTH3YP4AyFQeWur4GX%2BX2YBpLF0DIG2r%2FrkSRZAxguBGpkhnex4IwFlSqw875F%2BZMIwggIQlRZTbZGkYBsbS5oJmhY8GIauIFUe7rLVDJ2Bhr7Ai1mnMTvwvEWm%2BsL62sXqcGXBgBTXR%2FrnfNwuRrXKGfuUg3%2BIKpSivdq3CvsIb%2BSgWqsKG8HNwoZtCD9N1lizjyclXXgtyRrQggLorIf0MN30dMrJnNDBJJ9xtjZTD0xmKxm1ITiOb%2Bz0CAJpCYmtCLuLMW%2BZYyJDR1l%2FIIDl9PLkUr1cos0igFqwJu85yKQ06mJ%2BKy0llTRTZsjTTEy7MwvXnmtkpBvdwcrmXnT04qb7a5zM3p6pn4iWPgY%2FC4d0bafcwVg1m5pt1Nc0fl4SdCZ8ai9rjKwrg5PRwdrq1KdSyU1IakbUCXsgCrP0x5d5X7AeVg1kGA4bhbZIK2jeRsOhglzt5Grn1XvEYJIxMMVXPm3BdHaljc2CHWse6CcoZAG8U12cFWz%2BYYcBVmrlclIO9bAJdjdVXkSkczEpJzDawvjEBjqkAap7FdM1IEybpbXxZt5lDGIOF715PVrRJmQQZeZOLCsIwd3VTGtqd%2BdEfwDw8lQ3JSKgzVoEdZpQI5V8FP3zYMifr394gI0VWP8mVqAG6J2BRRIfE13pQlmDYs%2BWEeaPa1i7dNqUWsWW15QW%2F%2BRjU0Fj424URG%2BM%2FZOUcIjghV9EEWD17Exh7ttsKNSO5AqVI8y2fJm1D5qXNkw7XgakZqfxWJ%2F7&X-Amz-Signature=31c97188b0042d7174217af192a6ca1d4cb14fa09803fd1e4d7f50f874334a40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GV3LJXU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC78grAJ834MX7gDpXaDZ43e3XKOUm4FicCPXuoi%2BBiowIhAJWvZ6bHtSY2g3tBN%2FmZWy1nFiJLIx4GW1rnOyGZyfbfKv8DCEsQABoMNjM3NDIzMTgzODA1Igy7CCuWpRqnORirEvIq3AM9Dn3ojMyaf5mnUUl8%2FWFfl%2FdDySBfGoTDYj1EkQIuoJjTwO9mp5iRA7F8DN7O%2Bdsjif797AC46ZN8J0au2qaY7nILt6djqOEIIoTH3YP4AyFQeWur4GX%2BX2YBpLF0DIG2r%2FrkSRZAxguBGpkhnex4IwFlSqw875F%2BZMIwggIQlRZTbZGkYBsbS5oJmhY8GIauIFUe7rLVDJ2Bhr7Ai1mnMTvwvEWm%2BsL62sXqcGXBgBTXR%2FrnfNwuRrXKGfuUg3%2BIKpSivdq3CvsIb%2BSgWqsKG8HNwoZtCD9N1lizjyclXXgtyRrQggLorIf0MN30dMrJnNDBJJ9xtjZTD0xmKxm1ITiOb%2Bz0CAJpCYmtCLuLMW%2BZYyJDR1l%2FIIDl9PLkUr1cos0igFqwJu85yKQ06mJ%2BKy0llTRTZsjTTEy7MwvXnmtkpBvdwcrmXnT04qb7a5zM3p6pn4iWPgY%2FC4d0bafcwVg1m5pt1Nc0fl4SdCZ8ai9rjKwrg5PRwdrq1KdSyU1IakbUCXsgCrP0x5d5X7AeVg1kGA4bhbZIK2jeRsOhglzt5Grn1XvEYJIxMMVXPm3BdHaljc2CHWse6CcoZAG8U12cFWz%2BYYcBVmrlclIO9bAJdjdVXkSkczEpJzDawvjEBjqkAap7FdM1IEybpbXxZt5lDGIOF715PVrRJmQQZeZOLCsIwd3VTGtqd%2BdEfwDw8lQ3JSKgzVoEdZpQI5V8FP3zYMifr394gI0VWP8mVqAG6J2BRRIfE13pQlmDYs%2BWEeaPa1i7dNqUWsWW15QW%2F%2BRjU0Fj424URG%2BM%2FZOUcIjghV9EEWD17Exh7ttsKNSO5AqVI8y2fJm1D5qXNkw7XgakZqfxWJ%2F7&X-Amz-Signature=fcd4b1802977e19b782a42a1658ccb4bb6f4525378529fc82f2e0a409e146de9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GV3LJXU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC78grAJ834MX7gDpXaDZ43e3XKOUm4FicCPXuoi%2BBiowIhAJWvZ6bHtSY2g3tBN%2FmZWy1nFiJLIx4GW1rnOyGZyfbfKv8DCEsQABoMNjM3NDIzMTgzODA1Igy7CCuWpRqnORirEvIq3AM9Dn3ojMyaf5mnUUl8%2FWFfl%2FdDySBfGoTDYj1EkQIuoJjTwO9mp5iRA7F8DN7O%2Bdsjif797AC46ZN8J0au2qaY7nILt6djqOEIIoTH3YP4AyFQeWur4GX%2BX2YBpLF0DIG2r%2FrkSRZAxguBGpkhnex4IwFlSqw875F%2BZMIwggIQlRZTbZGkYBsbS5oJmhY8GIauIFUe7rLVDJ2Bhr7Ai1mnMTvwvEWm%2BsL62sXqcGXBgBTXR%2FrnfNwuRrXKGfuUg3%2BIKpSivdq3CvsIb%2BSgWqsKG8HNwoZtCD9N1lizjyclXXgtyRrQggLorIf0MN30dMrJnNDBJJ9xtjZTD0xmKxm1ITiOb%2Bz0CAJpCYmtCLuLMW%2BZYyJDR1l%2FIIDl9PLkUr1cos0igFqwJu85yKQ06mJ%2BKy0llTRTZsjTTEy7MwvXnmtkpBvdwcrmXnT04qb7a5zM3p6pn4iWPgY%2FC4d0bafcwVg1m5pt1Nc0fl4SdCZ8ai9rjKwrg5PRwdrq1KdSyU1IakbUCXsgCrP0x5d5X7AeVg1kGA4bhbZIK2jeRsOhglzt5Grn1XvEYJIxMMVXPm3BdHaljc2CHWse6CcoZAG8U12cFWz%2BYYcBVmrlclIO9bAJdjdVXkSkczEpJzDawvjEBjqkAap7FdM1IEybpbXxZt5lDGIOF715PVrRJmQQZeZOLCsIwd3VTGtqd%2BdEfwDw8lQ3JSKgzVoEdZpQI5V8FP3zYMifr394gI0VWP8mVqAG6J2BRRIfE13pQlmDYs%2BWEeaPa1i7dNqUWsWW15QW%2F%2BRjU0Fj424URG%2BM%2FZOUcIjghV9EEWD17Exh7ttsKNSO5AqVI8y2fJm1D5qXNkw7XgakZqfxWJ%2F7&X-Amz-Signature=e3488417af299c594d4b2ce806bae99b649495a4ab6266632f56ea7086851795&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GV3LJXU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC78grAJ834MX7gDpXaDZ43e3XKOUm4FicCPXuoi%2BBiowIhAJWvZ6bHtSY2g3tBN%2FmZWy1nFiJLIx4GW1rnOyGZyfbfKv8DCEsQABoMNjM3NDIzMTgzODA1Igy7CCuWpRqnORirEvIq3AM9Dn3ojMyaf5mnUUl8%2FWFfl%2FdDySBfGoTDYj1EkQIuoJjTwO9mp5iRA7F8DN7O%2Bdsjif797AC46ZN8J0au2qaY7nILt6djqOEIIoTH3YP4AyFQeWur4GX%2BX2YBpLF0DIG2r%2FrkSRZAxguBGpkhnex4IwFlSqw875F%2BZMIwggIQlRZTbZGkYBsbS5oJmhY8GIauIFUe7rLVDJ2Bhr7Ai1mnMTvwvEWm%2BsL62sXqcGXBgBTXR%2FrnfNwuRrXKGfuUg3%2BIKpSivdq3CvsIb%2BSgWqsKG8HNwoZtCD9N1lizjyclXXgtyRrQggLorIf0MN30dMrJnNDBJJ9xtjZTD0xmKxm1ITiOb%2Bz0CAJpCYmtCLuLMW%2BZYyJDR1l%2FIIDl9PLkUr1cos0igFqwJu85yKQ06mJ%2BKy0llTRTZsjTTEy7MwvXnmtkpBvdwcrmXnT04qb7a5zM3p6pn4iWPgY%2FC4d0bafcwVg1m5pt1Nc0fl4SdCZ8ai9rjKwrg5PRwdrq1KdSyU1IakbUCXsgCrP0x5d5X7AeVg1kGA4bhbZIK2jeRsOhglzt5Grn1XvEYJIxMMVXPm3BdHaljc2CHWse6CcoZAG8U12cFWz%2BYYcBVmrlclIO9bAJdjdVXkSkczEpJzDawvjEBjqkAap7FdM1IEybpbXxZt5lDGIOF715PVrRJmQQZeZOLCsIwd3VTGtqd%2BdEfwDw8lQ3JSKgzVoEdZpQI5V8FP3zYMifr394gI0VWP8mVqAG6J2BRRIfE13pQlmDYs%2BWEeaPa1i7dNqUWsWW15QW%2F%2BRjU0Fj424URG%2BM%2FZOUcIjghV9EEWD17Exh7ttsKNSO5AqVI8y2fJm1D5qXNkw7XgakZqfxWJ%2F7&X-Amz-Signature=57b9a2cc22d3e88d88dbc17c8fc5213ab6ada5c9a276204c4f841ba2893afea6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GV3LJXU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC78grAJ834MX7gDpXaDZ43e3XKOUm4FicCPXuoi%2BBiowIhAJWvZ6bHtSY2g3tBN%2FmZWy1nFiJLIx4GW1rnOyGZyfbfKv8DCEsQABoMNjM3NDIzMTgzODA1Igy7CCuWpRqnORirEvIq3AM9Dn3ojMyaf5mnUUl8%2FWFfl%2FdDySBfGoTDYj1EkQIuoJjTwO9mp5iRA7F8DN7O%2Bdsjif797AC46ZN8J0au2qaY7nILt6djqOEIIoTH3YP4AyFQeWur4GX%2BX2YBpLF0DIG2r%2FrkSRZAxguBGpkhnex4IwFlSqw875F%2BZMIwggIQlRZTbZGkYBsbS5oJmhY8GIauIFUe7rLVDJ2Bhr7Ai1mnMTvwvEWm%2BsL62sXqcGXBgBTXR%2FrnfNwuRrXKGfuUg3%2BIKpSivdq3CvsIb%2BSgWqsKG8HNwoZtCD9N1lizjyclXXgtyRrQggLorIf0MN30dMrJnNDBJJ9xtjZTD0xmKxm1ITiOb%2Bz0CAJpCYmtCLuLMW%2BZYyJDR1l%2FIIDl9PLkUr1cos0igFqwJu85yKQ06mJ%2BKy0llTRTZsjTTEy7MwvXnmtkpBvdwcrmXnT04qb7a5zM3p6pn4iWPgY%2FC4d0bafcwVg1m5pt1Nc0fl4SdCZ8ai9rjKwrg5PRwdrq1KdSyU1IakbUCXsgCrP0x5d5X7AeVg1kGA4bhbZIK2jeRsOhglzt5Grn1XvEYJIxMMVXPm3BdHaljc2CHWse6CcoZAG8U12cFWz%2BYYcBVmrlclIO9bAJdjdVXkSkczEpJzDawvjEBjqkAap7FdM1IEybpbXxZt5lDGIOF715PVrRJmQQZeZOLCsIwd3VTGtqd%2BdEfwDw8lQ3JSKgzVoEdZpQI5V8FP3zYMifr394gI0VWP8mVqAG6J2BRRIfE13pQlmDYs%2BWEeaPa1i7dNqUWsWW15QW%2F%2BRjU0Fj424URG%2BM%2FZOUcIjghV9EEWD17Exh7ttsKNSO5AqVI8y2fJm1D5qXNkw7XgakZqfxWJ%2F7&X-Amz-Signature=bf5a0d5d92747c0afa487222fe0e90499342f1a56483be09ecb3b25a2a27c50a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GV3LJXU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC78grAJ834MX7gDpXaDZ43e3XKOUm4FicCPXuoi%2BBiowIhAJWvZ6bHtSY2g3tBN%2FmZWy1nFiJLIx4GW1rnOyGZyfbfKv8DCEsQABoMNjM3NDIzMTgzODA1Igy7CCuWpRqnORirEvIq3AM9Dn3ojMyaf5mnUUl8%2FWFfl%2FdDySBfGoTDYj1EkQIuoJjTwO9mp5iRA7F8DN7O%2Bdsjif797AC46ZN8J0au2qaY7nILt6djqOEIIoTH3YP4AyFQeWur4GX%2BX2YBpLF0DIG2r%2FrkSRZAxguBGpkhnex4IwFlSqw875F%2BZMIwggIQlRZTbZGkYBsbS5oJmhY8GIauIFUe7rLVDJ2Bhr7Ai1mnMTvwvEWm%2BsL62sXqcGXBgBTXR%2FrnfNwuRrXKGfuUg3%2BIKpSivdq3CvsIb%2BSgWqsKG8HNwoZtCD9N1lizjyclXXgtyRrQggLorIf0MN30dMrJnNDBJJ9xtjZTD0xmKxm1ITiOb%2Bz0CAJpCYmtCLuLMW%2BZYyJDR1l%2FIIDl9PLkUr1cos0igFqwJu85yKQ06mJ%2BKy0llTRTZsjTTEy7MwvXnmtkpBvdwcrmXnT04qb7a5zM3p6pn4iWPgY%2FC4d0bafcwVg1m5pt1Nc0fl4SdCZ8ai9rjKwrg5PRwdrq1KdSyU1IakbUCXsgCrP0x5d5X7AeVg1kGA4bhbZIK2jeRsOhglzt5Grn1XvEYJIxMMVXPm3BdHaljc2CHWse6CcoZAG8U12cFWz%2BYYcBVmrlclIO9bAJdjdVXkSkczEpJzDawvjEBjqkAap7FdM1IEybpbXxZt5lDGIOF715PVrRJmQQZeZOLCsIwd3VTGtqd%2BdEfwDw8lQ3JSKgzVoEdZpQI5V8FP3zYMifr394gI0VWP8mVqAG6J2BRRIfE13pQlmDYs%2BWEeaPa1i7dNqUWsWW15QW%2F%2BRjU0Fj424URG%2BM%2FZOUcIjghV9EEWD17Exh7ttsKNSO5AqVI8y2fJm1D5qXNkw7XgakZqfxWJ%2F7&X-Amz-Signature=759d2cea9c9366716d5ee3830a5178c96314568a692ff85b88f58e89d2fd4fca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GV3LJXU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC78grAJ834MX7gDpXaDZ43e3XKOUm4FicCPXuoi%2BBiowIhAJWvZ6bHtSY2g3tBN%2FmZWy1nFiJLIx4GW1rnOyGZyfbfKv8DCEsQABoMNjM3NDIzMTgzODA1Igy7CCuWpRqnORirEvIq3AM9Dn3ojMyaf5mnUUl8%2FWFfl%2FdDySBfGoTDYj1EkQIuoJjTwO9mp5iRA7F8DN7O%2Bdsjif797AC46ZN8J0au2qaY7nILt6djqOEIIoTH3YP4AyFQeWur4GX%2BX2YBpLF0DIG2r%2FrkSRZAxguBGpkhnex4IwFlSqw875F%2BZMIwggIQlRZTbZGkYBsbS5oJmhY8GIauIFUe7rLVDJ2Bhr7Ai1mnMTvwvEWm%2BsL62sXqcGXBgBTXR%2FrnfNwuRrXKGfuUg3%2BIKpSivdq3CvsIb%2BSgWqsKG8HNwoZtCD9N1lizjyclXXgtyRrQggLorIf0MN30dMrJnNDBJJ9xtjZTD0xmKxm1ITiOb%2Bz0CAJpCYmtCLuLMW%2BZYyJDR1l%2FIIDl9PLkUr1cos0igFqwJu85yKQ06mJ%2BKy0llTRTZsjTTEy7MwvXnmtkpBvdwcrmXnT04qb7a5zM3p6pn4iWPgY%2FC4d0bafcwVg1m5pt1Nc0fl4SdCZ8ai9rjKwrg5PRwdrq1KdSyU1IakbUCXsgCrP0x5d5X7AeVg1kGA4bhbZIK2jeRsOhglzt5Grn1XvEYJIxMMVXPm3BdHaljc2CHWse6CcoZAG8U12cFWz%2BYYcBVmrlclIO9bAJdjdVXkSkczEpJzDawvjEBjqkAap7FdM1IEybpbXxZt5lDGIOF715PVrRJmQQZeZOLCsIwd3VTGtqd%2BdEfwDw8lQ3JSKgzVoEdZpQI5V8FP3zYMifr394gI0VWP8mVqAG6J2BRRIfE13pQlmDYs%2BWEeaPa1i7dNqUWsWW15QW%2F%2BRjU0Fj424URG%2BM%2FZOUcIjghV9EEWD17Exh7ttsKNSO5AqVI8y2fJm1D5qXNkw7XgakZqfxWJ%2F7&X-Amz-Signature=069f388b60c5814a7e5e9af8d261d4f834b18b38b30953005e31d5600377a407&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GV3LJXU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC78grAJ834MX7gDpXaDZ43e3XKOUm4FicCPXuoi%2BBiowIhAJWvZ6bHtSY2g3tBN%2FmZWy1nFiJLIx4GW1rnOyGZyfbfKv8DCEsQABoMNjM3NDIzMTgzODA1Igy7CCuWpRqnORirEvIq3AM9Dn3ojMyaf5mnUUl8%2FWFfl%2FdDySBfGoTDYj1EkQIuoJjTwO9mp5iRA7F8DN7O%2Bdsjif797AC46ZN8J0au2qaY7nILt6djqOEIIoTH3YP4AyFQeWur4GX%2BX2YBpLF0DIG2r%2FrkSRZAxguBGpkhnex4IwFlSqw875F%2BZMIwggIQlRZTbZGkYBsbS5oJmhY8GIauIFUe7rLVDJ2Bhr7Ai1mnMTvwvEWm%2BsL62sXqcGXBgBTXR%2FrnfNwuRrXKGfuUg3%2BIKpSivdq3CvsIb%2BSgWqsKG8HNwoZtCD9N1lizjyclXXgtyRrQggLorIf0MN30dMrJnNDBJJ9xtjZTD0xmKxm1ITiOb%2Bz0CAJpCYmtCLuLMW%2BZYyJDR1l%2FIIDl9PLkUr1cos0igFqwJu85yKQ06mJ%2BKy0llTRTZsjTTEy7MwvXnmtkpBvdwcrmXnT04qb7a5zM3p6pn4iWPgY%2FC4d0bafcwVg1m5pt1Nc0fl4SdCZ8ai9rjKwrg5PRwdrq1KdSyU1IakbUCXsgCrP0x5d5X7AeVg1kGA4bhbZIK2jeRsOhglzt5Grn1XvEYJIxMMVXPm3BdHaljc2CHWse6CcoZAG8U12cFWz%2BYYcBVmrlclIO9bAJdjdVXkSkczEpJzDawvjEBjqkAap7FdM1IEybpbXxZt5lDGIOF715PVrRJmQQZeZOLCsIwd3VTGtqd%2BdEfwDw8lQ3JSKgzVoEdZpQI5V8FP3zYMifr394gI0VWP8mVqAG6J2BRRIfE13pQlmDYs%2BWEeaPa1i7dNqUWsWW15QW%2F%2BRjU0Fj424URG%2BM%2FZOUcIjghV9EEWD17Exh7ttsKNSO5AqVI8y2fJm1D5qXNkw7XgakZqfxWJ%2F7&X-Amz-Signature=445261ba21693313b8ba15f32508f5a40e553f5e6cfd85e0ed539f0bbd868bf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GV3LJXU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC78grAJ834MX7gDpXaDZ43e3XKOUm4FicCPXuoi%2BBiowIhAJWvZ6bHtSY2g3tBN%2FmZWy1nFiJLIx4GW1rnOyGZyfbfKv8DCEsQABoMNjM3NDIzMTgzODA1Igy7CCuWpRqnORirEvIq3AM9Dn3ojMyaf5mnUUl8%2FWFfl%2FdDySBfGoTDYj1EkQIuoJjTwO9mp5iRA7F8DN7O%2Bdsjif797AC46ZN8J0au2qaY7nILt6djqOEIIoTH3YP4AyFQeWur4GX%2BX2YBpLF0DIG2r%2FrkSRZAxguBGpkhnex4IwFlSqw875F%2BZMIwggIQlRZTbZGkYBsbS5oJmhY8GIauIFUe7rLVDJ2Bhr7Ai1mnMTvwvEWm%2BsL62sXqcGXBgBTXR%2FrnfNwuRrXKGfuUg3%2BIKpSivdq3CvsIb%2BSgWqsKG8HNwoZtCD9N1lizjyclXXgtyRrQggLorIf0MN30dMrJnNDBJJ9xtjZTD0xmKxm1ITiOb%2Bz0CAJpCYmtCLuLMW%2BZYyJDR1l%2FIIDl9PLkUr1cos0igFqwJu85yKQ06mJ%2BKy0llTRTZsjTTEy7MwvXnmtkpBvdwcrmXnT04qb7a5zM3p6pn4iWPgY%2FC4d0bafcwVg1m5pt1Nc0fl4SdCZ8ai9rjKwrg5PRwdrq1KdSyU1IakbUCXsgCrP0x5d5X7AeVg1kGA4bhbZIK2jeRsOhglzt5Grn1XvEYJIxMMVXPm3BdHaljc2CHWse6CcoZAG8U12cFWz%2BYYcBVmrlclIO9bAJdjdVXkSkczEpJzDawvjEBjqkAap7FdM1IEybpbXxZt5lDGIOF715PVrRJmQQZeZOLCsIwd3VTGtqd%2BdEfwDw8lQ3JSKgzVoEdZpQI5V8FP3zYMifr394gI0VWP8mVqAG6J2BRRIfE13pQlmDYs%2BWEeaPa1i7dNqUWsWW15QW%2F%2BRjU0Fj424URG%2BM%2FZOUcIjghV9EEWD17Exh7ttsKNSO5AqVI8y2fJm1D5qXNkw7XgakZqfxWJ%2F7&X-Amz-Signature=dac932c7b5d02e21c5c7c9c019ab384015c90e0ca17a33caab5d21d08ca80278&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GV3LJXU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC78grAJ834MX7gDpXaDZ43e3XKOUm4FicCPXuoi%2BBiowIhAJWvZ6bHtSY2g3tBN%2FmZWy1nFiJLIx4GW1rnOyGZyfbfKv8DCEsQABoMNjM3NDIzMTgzODA1Igy7CCuWpRqnORirEvIq3AM9Dn3ojMyaf5mnUUl8%2FWFfl%2FdDySBfGoTDYj1EkQIuoJjTwO9mp5iRA7F8DN7O%2Bdsjif797AC46ZN8J0au2qaY7nILt6djqOEIIoTH3YP4AyFQeWur4GX%2BX2YBpLF0DIG2r%2FrkSRZAxguBGpkhnex4IwFlSqw875F%2BZMIwggIQlRZTbZGkYBsbS5oJmhY8GIauIFUe7rLVDJ2Bhr7Ai1mnMTvwvEWm%2BsL62sXqcGXBgBTXR%2FrnfNwuRrXKGfuUg3%2BIKpSivdq3CvsIb%2BSgWqsKG8HNwoZtCD9N1lizjyclXXgtyRrQggLorIf0MN30dMrJnNDBJJ9xtjZTD0xmKxm1ITiOb%2Bz0CAJpCYmtCLuLMW%2BZYyJDR1l%2FIIDl9PLkUr1cos0igFqwJu85yKQ06mJ%2BKy0llTRTZsjTTEy7MwvXnmtkpBvdwcrmXnT04qb7a5zM3p6pn4iWPgY%2FC4d0bafcwVg1m5pt1Nc0fl4SdCZ8ai9rjKwrg5PRwdrq1KdSyU1IakbUCXsgCrP0x5d5X7AeVg1kGA4bhbZIK2jeRsOhglzt5Grn1XvEYJIxMMVXPm3BdHaljc2CHWse6CcoZAG8U12cFWz%2BYYcBVmrlclIO9bAJdjdVXkSkczEpJzDawvjEBjqkAap7FdM1IEybpbXxZt5lDGIOF715PVrRJmQQZeZOLCsIwd3VTGtqd%2BdEfwDw8lQ3JSKgzVoEdZpQI5V8FP3zYMifr394gI0VWP8mVqAG6J2BRRIfE13pQlmDYs%2BWEeaPa1i7dNqUWsWW15QW%2F%2BRjU0Fj424URG%2BM%2FZOUcIjghV9EEWD17Exh7ttsKNSO5AqVI8y2fJm1D5qXNkw7XgakZqfxWJ%2F7&X-Amz-Signature=57b9a2cc22d3e88d88dbc17c8fc5213ab6ada5c9a276204c4f841ba2893afea6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
