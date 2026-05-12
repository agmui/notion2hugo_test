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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6GJIHGA%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIFExW0EdSRM3KwxmgyGDYNyWwYsTzKm4hV%2BZiZPbNKq9AiBFap0wRwlMpEsb%2FXcwxRaFmYyhsZ19mpoh6VEMTmf3Gir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMYEmUS8SkbR2WzF9NKtwDje34SYmsEYKlX7LFynzIwdKF%2BjZ0T4udV23S3ghN1Xg8ZygRm%2BXAizX%2Fp6upyBOqX3kBtcMObcTXJ%2FMa0rdV1CFN96BZdmidkaeyR9RQudFAFw%2BTq43aesDxDU73SLY6vvIplVGa5MG5n%2BLWtNURHzNDzx1qpzaX%2FPAshU3e8g%2F55IYlIGpMb8s0xee3v%2BhdEb0D29IxCir8ryjV7xCiXaYj7n0OveTR4RK1HknEWUFXWhs8GbKA99spAz%2BjbMq25hyZR0GkgbihuM%2FZLBKzL3yivLCkvsuQv6zyxhDWxAWmHiEHmWcGNSNF7ww8agkzDxwRg6U%2FZC42gagk7oaCoYFQ6aBpwTSGPuLsRN89RdLi%2BLrwhFZRTGaSwJ%2FiOg%2BrfNKPrB0PK5V4IZNZjkBhY3RZ0XW8vk5f%2FCIVPekUFsQjdGQ9otIumkS8DGqT4hPcePnfhg5ZClhHhEDK%2Fkf%2FVNrUF9fsRa2BYJESsBLzYULUh1wWpKDfRKv2ZfWqrzsQPmtcqnRIjjSux6pLrzuw3r9PlB%2BeIdhu8ujtP%2Br1GCWkk%2BXZcbEpATnOxnDIr1JawpybVn%2FISQATizBBSnUR%2F7N7NsIpF1XKyJ9bQDqpewaoheoSRSpJnWUWh6YwpKKK0AY6pgGyxFuaOtWdBTQrSF1gREtmakSdgjlbf23mieFiiPyLwhWzdG9XjmPpXWmUEb1kNggONz7BRcq5dRGqdfebgmgSnFbPOipOwrXN4lWv4av6dD8HylKGqSyltL%2BpngkXNXL1cdOz4GL0Or5Tqw1FM7XZfWkalgteVPX6BmxhaW%2Bso5Cg3ITd3qkjcYD1c8D8KBcTvKwMt0llbeZFyohshHvpHtTIyloa&X-Amz-Signature=3b81512f6bff15d9ef99fbc033427ba995306b31d02a1488c869e5c533625c4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XONKULCZ%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCFbKYr9v1qczXnCq0B8Z83WL0k7IWhPWL1opnXHAHlKgIgPa56c5RbxocuFosbDO6DXkDbdnakkkV9ZZ9tpyEtvVQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDF6afyJ1qYCDk6%2FV9SrcA4NZrVN8EA5uCCme4E2CgTo1yjE%2FK2q8oqGP2D3j%2BtkCIeHIaIbYwwGWe3lPJwt%2BYFzHYuLx8WqHwoJy1pAqqPLXgvFZhKUnx6E4RbQjBZVdulWHaIOxG1AladcPWDMXwi89bNOzaDRJgXyw5dLXWWt46pXfsxXzTJVB1C5rQs7%2BFlvwJcp%2BvhgplwX9%2BTNS6DIlH5vfNaE7WtfcKLsbxDbMNzNqD1cpH0DHUbur08RMzs27lnz404X08H9mUcj%2FRiswFARod9EjEo68kd%2FzVn8p%2FVi%2BwouzE%2B03AL48xRVcacXwe3o0WAh6OGkkjvU4KedH5gjMCsSwWBBO6xMzywJ6XsTNehecRA7HKqQwT2Q9o8yjf2czWlr%2FEdIh5sP3u9Ixok9HY93cWj8nZZJ%2BegIWRYiPO%2FUXszV5eRwQZLxB5RCyLwi4NrOVeado4IIRC1TGckPJDN0sF9HRDVI4ORY20M3szyN4ShdosMJMSNGngEyqcAJHVfACuADJtm2Vn%2FI13Pzi%2BK10ig%2BRsekc8689NNDc0gT0iFIrRRfTMMLgfT0dgLYV9n%2B1nL0MtCmpIXG8I%2Fqnd4n1WxhyNmB7g4luDpU1FJTIa2XDaXVw2ZrCaXi0VZzNOSqc7K38MJSiitAGOqUBpeQLQNWGq4QfHobunwbSvFqLTE2ZO1KoCiB4Sk4Ox1zwKmOfHtbbGBdHbV2SIT37RHWyOWXziF2p69Bj4XF8AuIVyPulN6PG9Yoi9en8Xct3FABaX2VOkYTif31MMR1Cn81gg3yQPvzfUhSI5ibtOcE7JLxnGdswJATjihZdVOK9B4iTAS%2FKLFkFfMfYG%2BWwPQ4P9WlMj7ZnsAcvt4kxry7XBbpZ&X-Amz-Signature=8a2604b4667e6782582ea969b77a15904d8f042feb95f09e06379a36d5b691a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XONKULCZ%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCFbKYr9v1qczXnCq0B8Z83WL0k7IWhPWL1opnXHAHlKgIgPa56c5RbxocuFosbDO6DXkDbdnakkkV9ZZ9tpyEtvVQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDF6afyJ1qYCDk6%2FV9SrcA4NZrVN8EA5uCCme4E2CgTo1yjE%2FK2q8oqGP2D3j%2BtkCIeHIaIbYwwGWe3lPJwt%2BYFzHYuLx8WqHwoJy1pAqqPLXgvFZhKUnx6E4RbQjBZVdulWHaIOxG1AladcPWDMXwi89bNOzaDRJgXyw5dLXWWt46pXfsxXzTJVB1C5rQs7%2BFlvwJcp%2BvhgplwX9%2BTNS6DIlH5vfNaE7WtfcKLsbxDbMNzNqD1cpH0DHUbur08RMzs27lnz404X08H9mUcj%2FRiswFARod9EjEo68kd%2FzVn8p%2FVi%2BwouzE%2B03AL48xRVcacXwe3o0WAh6OGkkjvU4KedH5gjMCsSwWBBO6xMzywJ6XsTNehecRA7HKqQwT2Q9o8yjf2czWlr%2FEdIh5sP3u9Ixok9HY93cWj8nZZJ%2BegIWRYiPO%2FUXszV5eRwQZLxB5RCyLwi4NrOVeado4IIRC1TGckPJDN0sF9HRDVI4ORY20M3szyN4ShdosMJMSNGngEyqcAJHVfACuADJtm2Vn%2FI13Pzi%2BK10ig%2BRsekc8689NNDc0gT0iFIrRRfTMMLgfT0dgLYV9n%2B1nL0MtCmpIXG8I%2Fqnd4n1WxhyNmB7g4luDpU1FJTIa2XDaXVw2ZrCaXi0VZzNOSqc7K38MJSiitAGOqUBpeQLQNWGq4QfHobunwbSvFqLTE2ZO1KoCiB4Sk4Ox1zwKmOfHtbbGBdHbV2SIT37RHWyOWXziF2p69Bj4XF8AuIVyPulN6PG9Yoi9en8Xct3FABaX2VOkYTif31MMR1Cn81gg3yQPvzfUhSI5ibtOcE7JLxnGdswJATjihZdVOK9B4iTAS%2FKLFkFfMfYG%2BWwPQ4P9WlMj7ZnsAcvt4kxry7XBbpZ&X-Amz-Signature=2d8847c338bbac116dbed0efd6003c1905c199e7733ab35c0520670008fc109a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XONKULCZ%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCFbKYr9v1qczXnCq0B8Z83WL0k7IWhPWL1opnXHAHlKgIgPa56c5RbxocuFosbDO6DXkDbdnakkkV9ZZ9tpyEtvVQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDF6afyJ1qYCDk6%2FV9SrcA4NZrVN8EA5uCCme4E2CgTo1yjE%2FK2q8oqGP2D3j%2BtkCIeHIaIbYwwGWe3lPJwt%2BYFzHYuLx8WqHwoJy1pAqqPLXgvFZhKUnx6E4RbQjBZVdulWHaIOxG1AladcPWDMXwi89bNOzaDRJgXyw5dLXWWt46pXfsxXzTJVB1C5rQs7%2BFlvwJcp%2BvhgplwX9%2BTNS6DIlH5vfNaE7WtfcKLsbxDbMNzNqD1cpH0DHUbur08RMzs27lnz404X08H9mUcj%2FRiswFARod9EjEo68kd%2FzVn8p%2FVi%2BwouzE%2B03AL48xRVcacXwe3o0WAh6OGkkjvU4KedH5gjMCsSwWBBO6xMzywJ6XsTNehecRA7HKqQwT2Q9o8yjf2czWlr%2FEdIh5sP3u9Ixok9HY93cWj8nZZJ%2BegIWRYiPO%2FUXszV5eRwQZLxB5RCyLwi4NrOVeado4IIRC1TGckPJDN0sF9HRDVI4ORY20M3szyN4ShdosMJMSNGngEyqcAJHVfACuADJtm2Vn%2FI13Pzi%2BK10ig%2BRsekc8689NNDc0gT0iFIrRRfTMMLgfT0dgLYV9n%2B1nL0MtCmpIXG8I%2Fqnd4n1WxhyNmB7g4luDpU1FJTIa2XDaXVw2ZrCaXi0VZzNOSqc7K38MJSiitAGOqUBpeQLQNWGq4QfHobunwbSvFqLTE2ZO1KoCiB4Sk4Ox1zwKmOfHtbbGBdHbV2SIT37RHWyOWXziF2p69Bj4XF8AuIVyPulN6PG9Yoi9en8Xct3FABaX2VOkYTif31MMR1Cn81gg3yQPvzfUhSI5ibtOcE7JLxnGdswJATjihZdVOK9B4iTAS%2FKLFkFfMfYG%2BWwPQ4P9WlMj7ZnsAcvt4kxry7XBbpZ&X-Amz-Signature=6503469e3b5bed597c86833efd3614bee25f04ba956776bb3894f47856f59f48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XONKULCZ%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCFbKYr9v1qczXnCq0B8Z83WL0k7IWhPWL1opnXHAHlKgIgPa56c5RbxocuFosbDO6DXkDbdnakkkV9ZZ9tpyEtvVQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDF6afyJ1qYCDk6%2FV9SrcA4NZrVN8EA5uCCme4E2CgTo1yjE%2FK2q8oqGP2D3j%2BtkCIeHIaIbYwwGWe3lPJwt%2BYFzHYuLx8WqHwoJy1pAqqPLXgvFZhKUnx6E4RbQjBZVdulWHaIOxG1AladcPWDMXwi89bNOzaDRJgXyw5dLXWWt46pXfsxXzTJVB1C5rQs7%2BFlvwJcp%2BvhgplwX9%2BTNS6DIlH5vfNaE7WtfcKLsbxDbMNzNqD1cpH0DHUbur08RMzs27lnz404X08H9mUcj%2FRiswFARod9EjEo68kd%2FzVn8p%2FVi%2BwouzE%2B03AL48xRVcacXwe3o0WAh6OGkkjvU4KedH5gjMCsSwWBBO6xMzywJ6XsTNehecRA7HKqQwT2Q9o8yjf2czWlr%2FEdIh5sP3u9Ixok9HY93cWj8nZZJ%2BegIWRYiPO%2FUXszV5eRwQZLxB5RCyLwi4NrOVeado4IIRC1TGckPJDN0sF9HRDVI4ORY20M3szyN4ShdosMJMSNGngEyqcAJHVfACuADJtm2Vn%2FI13Pzi%2BK10ig%2BRsekc8689NNDc0gT0iFIrRRfTMMLgfT0dgLYV9n%2B1nL0MtCmpIXG8I%2Fqnd4n1WxhyNmB7g4luDpU1FJTIa2XDaXVw2ZrCaXi0VZzNOSqc7K38MJSiitAGOqUBpeQLQNWGq4QfHobunwbSvFqLTE2ZO1KoCiB4Sk4Ox1zwKmOfHtbbGBdHbV2SIT37RHWyOWXziF2p69Bj4XF8AuIVyPulN6PG9Yoi9en8Xct3FABaX2VOkYTif31MMR1Cn81gg3yQPvzfUhSI5ibtOcE7JLxnGdswJATjihZdVOK9B4iTAS%2FKLFkFfMfYG%2BWwPQ4P9WlMj7ZnsAcvt4kxry7XBbpZ&X-Amz-Signature=12b1fcaeb1083b7a000acd94e054a3dd899f126546691d51b906ccc01514cc72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XONKULCZ%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCFbKYr9v1qczXnCq0B8Z83WL0k7IWhPWL1opnXHAHlKgIgPa56c5RbxocuFosbDO6DXkDbdnakkkV9ZZ9tpyEtvVQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDF6afyJ1qYCDk6%2FV9SrcA4NZrVN8EA5uCCme4E2CgTo1yjE%2FK2q8oqGP2D3j%2BtkCIeHIaIbYwwGWe3lPJwt%2BYFzHYuLx8WqHwoJy1pAqqPLXgvFZhKUnx6E4RbQjBZVdulWHaIOxG1AladcPWDMXwi89bNOzaDRJgXyw5dLXWWt46pXfsxXzTJVB1C5rQs7%2BFlvwJcp%2BvhgplwX9%2BTNS6DIlH5vfNaE7WtfcKLsbxDbMNzNqD1cpH0DHUbur08RMzs27lnz404X08H9mUcj%2FRiswFARod9EjEo68kd%2FzVn8p%2FVi%2BwouzE%2B03AL48xRVcacXwe3o0WAh6OGkkjvU4KedH5gjMCsSwWBBO6xMzywJ6XsTNehecRA7HKqQwT2Q9o8yjf2czWlr%2FEdIh5sP3u9Ixok9HY93cWj8nZZJ%2BegIWRYiPO%2FUXszV5eRwQZLxB5RCyLwi4NrOVeado4IIRC1TGckPJDN0sF9HRDVI4ORY20M3szyN4ShdosMJMSNGngEyqcAJHVfACuADJtm2Vn%2FI13Pzi%2BK10ig%2BRsekc8689NNDc0gT0iFIrRRfTMMLgfT0dgLYV9n%2B1nL0MtCmpIXG8I%2Fqnd4n1WxhyNmB7g4luDpU1FJTIa2XDaXVw2ZrCaXi0VZzNOSqc7K38MJSiitAGOqUBpeQLQNWGq4QfHobunwbSvFqLTE2ZO1KoCiB4Sk4Ox1zwKmOfHtbbGBdHbV2SIT37RHWyOWXziF2p69Bj4XF8AuIVyPulN6PG9Yoi9en8Xct3FABaX2VOkYTif31MMR1Cn81gg3yQPvzfUhSI5ibtOcE7JLxnGdswJATjihZdVOK9B4iTAS%2FKLFkFfMfYG%2BWwPQ4P9WlMj7ZnsAcvt4kxry7XBbpZ&X-Amz-Signature=0a0890c0fbeac6d2aca1f438a8097b1e1572d578c1b092c584167ec607c652ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XONKULCZ%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCFbKYr9v1qczXnCq0B8Z83WL0k7IWhPWL1opnXHAHlKgIgPa56c5RbxocuFosbDO6DXkDbdnakkkV9ZZ9tpyEtvVQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDF6afyJ1qYCDk6%2FV9SrcA4NZrVN8EA5uCCme4E2CgTo1yjE%2FK2q8oqGP2D3j%2BtkCIeHIaIbYwwGWe3lPJwt%2BYFzHYuLx8WqHwoJy1pAqqPLXgvFZhKUnx6E4RbQjBZVdulWHaIOxG1AladcPWDMXwi89bNOzaDRJgXyw5dLXWWt46pXfsxXzTJVB1C5rQs7%2BFlvwJcp%2BvhgplwX9%2BTNS6DIlH5vfNaE7WtfcKLsbxDbMNzNqD1cpH0DHUbur08RMzs27lnz404X08H9mUcj%2FRiswFARod9EjEo68kd%2FzVn8p%2FVi%2BwouzE%2B03AL48xRVcacXwe3o0WAh6OGkkjvU4KedH5gjMCsSwWBBO6xMzywJ6XsTNehecRA7HKqQwT2Q9o8yjf2czWlr%2FEdIh5sP3u9Ixok9HY93cWj8nZZJ%2BegIWRYiPO%2FUXszV5eRwQZLxB5RCyLwi4NrOVeado4IIRC1TGckPJDN0sF9HRDVI4ORY20M3szyN4ShdosMJMSNGngEyqcAJHVfACuADJtm2Vn%2FI13Pzi%2BK10ig%2BRsekc8689NNDc0gT0iFIrRRfTMMLgfT0dgLYV9n%2B1nL0MtCmpIXG8I%2Fqnd4n1WxhyNmB7g4luDpU1FJTIa2XDaXVw2ZrCaXi0VZzNOSqc7K38MJSiitAGOqUBpeQLQNWGq4QfHobunwbSvFqLTE2ZO1KoCiB4Sk4Ox1zwKmOfHtbbGBdHbV2SIT37RHWyOWXziF2p69Bj4XF8AuIVyPulN6PG9Yoi9en8Xct3FABaX2VOkYTif31MMR1Cn81gg3yQPvzfUhSI5ibtOcE7JLxnGdswJATjihZdVOK9B4iTAS%2FKLFkFfMfYG%2BWwPQ4P9WlMj7ZnsAcvt4kxry7XBbpZ&X-Amz-Signature=5e51a05c2857ce342b1a9326f34891495d792a50b5c22d49a685172692aecbc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XONKULCZ%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCFbKYr9v1qczXnCq0B8Z83WL0k7IWhPWL1opnXHAHlKgIgPa56c5RbxocuFosbDO6DXkDbdnakkkV9ZZ9tpyEtvVQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDF6afyJ1qYCDk6%2FV9SrcA4NZrVN8EA5uCCme4E2CgTo1yjE%2FK2q8oqGP2D3j%2BtkCIeHIaIbYwwGWe3lPJwt%2BYFzHYuLx8WqHwoJy1pAqqPLXgvFZhKUnx6E4RbQjBZVdulWHaIOxG1AladcPWDMXwi89bNOzaDRJgXyw5dLXWWt46pXfsxXzTJVB1C5rQs7%2BFlvwJcp%2BvhgplwX9%2BTNS6DIlH5vfNaE7WtfcKLsbxDbMNzNqD1cpH0DHUbur08RMzs27lnz404X08H9mUcj%2FRiswFARod9EjEo68kd%2FzVn8p%2FVi%2BwouzE%2B03AL48xRVcacXwe3o0WAh6OGkkjvU4KedH5gjMCsSwWBBO6xMzywJ6XsTNehecRA7HKqQwT2Q9o8yjf2czWlr%2FEdIh5sP3u9Ixok9HY93cWj8nZZJ%2BegIWRYiPO%2FUXszV5eRwQZLxB5RCyLwi4NrOVeado4IIRC1TGckPJDN0sF9HRDVI4ORY20M3szyN4ShdosMJMSNGngEyqcAJHVfACuADJtm2Vn%2FI13Pzi%2BK10ig%2BRsekc8689NNDc0gT0iFIrRRfTMMLgfT0dgLYV9n%2B1nL0MtCmpIXG8I%2Fqnd4n1WxhyNmB7g4luDpU1FJTIa2XDaXVw2ZrCaXi0VZzNOSqc7K38MJSiitAGOqUBpeQLQNWGq4QfHobunwbSvFqLTE2ZO1KoCiB4Sk4Ox1zwKmOfHtbbGBdHbV2SIT37RHWyOWXziF2p69Bj4XF8AuIVyPulN6PG9Yoi9en8Xct3FABaX2VOkYTif31MMR1Cn81gg3yQPvzfUhSI5ibtOcE7JLxnGdswJATjihZdVOK9B4iTAS%2FKLFkFfMfYG%2BWwPQ4P9WlMj7ZnsAcvt4kxry7XBbpZ&X-Amz-Signature=49e7ac9e0da41bb8456bbf0276ef702fc800e073aeeb37bc094be1d0ea642666&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XONKULCZ%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCFbKYr9v1qczXnCq0B8Z83WL0k7IWhPWL1opnXHAHlKgIgPa56c5RbxocuFosbDO6DXkDbdnakkkV9ZZ9tpyEtvVQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDF6afyJ1qYCDk6%2FV9SrcA4NZrVN8EA5uCCme4E2CgTo1yjE%2FK2q8oqGP2D3j%2BtkCIeHIaIbYwwGWe3lPJwt%2BYFzHYuLx8WqHwoJy1pAqqPLXgvFZhKUnx6E4RbQjBZVdulWHaIOxG1AladcPWDMXwi89bNOzaDRJgXyw5dLXWWt46pXfsxXzTJVB1C5rQs7%2BFlvwJcp%2BvhgplwX9%2BTNS6DIlH5vfNaE7WtfcKLsbxDbMNzNqD1cpH0DHUbur08RMzs27lnz404X08H9mUcj%2FRiswFARod9EjEo68kd%2FzVn8p%2FVi%2BwouzE%2B03AL48xRVcacXwe3o0WAh6OGkkjvU4KedH5gjMCsSwWBBO6xMzywJ6XsTNehecRA7HKqQwT2Q9o8yjf2czWlr%2FEdIh5sP3u9Ixok9HY93cWj8nZZJ%2BegIWRYiPO%2FUXszV5eRwQZLxB5RCyLwi4NrOVeado4IIRC1TGckPJDN0sF9HRDVI4ORY20M3szyN4ShdosMJMSNGngEyqcAJHVfACuADJtm2Vn%2FI13Pzi%2BK10ig%2BRsekc8689NNDc0gT0iFIrRRfTMMLgfT0dgLYV9n%2B1nL0MtCmpIXG8I%2Fqnd4n1WxhyNmB7g4luDpU1FJTIa2XDaXVw2ZrCaXi0VZzNOSqc7K38MJSiitAGOqUBpeQLQNWGq4QfHobunwbSvFqLTE2ZO1KoCiB4Sk4Ox1zwKmOfHtbbGBdHbV2SIT37RHWyOWXziF2p69Bj4XF8AuIVyPulN6PG9Yoi9en8Xct3FABaX2VOkYTif31MMR1Cn81gg3yQPvzfUhSI5ibtOcE7JLxnGdswJATjihZdVOK9B4iTAS%2FKLFkFfMfYG%2BWwPQ4P9WlMj7ZnsAcvt4kxry7XBbpZ&X-Amz-Signature=f1a360c9dfa46c9ddce0ab72ab99128885b80068545f77daa644e742e069b649&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XONKULCZ%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCFbKYr9v1qczXnCq0B8Z83WL0k7IWhPWL1opnXHAHlKgIgPa56c5RbxocuFosbDO6DXkDbdnakkkV9ZZ9tpyEtvVQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDF6afyJ1qYCDk6%2FV9SrcA4NZrVN8EA5uCCme4E2CgTo1yjE%2FK2q8oqGP2D3j%2BtkCIeHIaIbYwwGWe3lPJwt%2BYFzHYuLx8WqHwoJy1pAqqPLXgvFZhKUnx6E4RbQjBZVdulWHaIOxG1AladcPWDMXwi89bNOzaDRJgXyw5dLXWWt46pXfsxXzTJVB1C5rQs7%2BFlvwJcp%2BvhgplwX9%2BTNS6DIlH5vfNaE7WtfcKLsbxDbMNzNqD1cpH0DHUbur08RMzs27lnz404X08H9mUcj%2FRiswFARod9EjEo68kd%2FzVn8p%2FVi%2BwouzE%2B03AL48xRVcacXwe3o0WAh6OGkkjvU4KedH5gjMCsSwWBBO6xMzywJ6XsTNehecRA7HKqQwT2Q9o8yjf2czWlr%2FEdIh5sP3u9Ixok9HY93cWj8nZZJ%2BegIWRYiPO%2FUXszV5eRwQZLxB5RCyLwi4NrOVeado4IIRC1TGckPJDN0sF9HRDVI4ORY20M3szyN4ShdosMJMSNGngEyqcAJHVfACuADJtm2Vn%2FI13Pzi%2BK10ig%2BRsekc8689NNDc0gT0iFIrRRfTMMLgfT0dgLYV9n%2B1nL0MtCmpIXG8I%2Fqnd4n1WxhyNmB7g4luDpU1FJTIa2XDaXVw2ZrCaXi0VZzNOSqc7K38MJSiitAGOqUBpeQLQNWGq4QfHobunwbSvFqLTE2ZO1KoCiB4Sk4Ox1zwKmOfHtbbGBdHbV2SIT37RHWyOWXziF2p69Bj4XF8AuIVyPulN6PG9Yoi9en8Xct3FABaX2VOkYTif31MMR1Cn81gg3yQPvzfUhSI5ibtOcE7JLxnGdswJATjihZdVOK9B4iTAS%2FKLFkFfMfYG%2BWwPQ4P9WlMj7ZnsAcvt4kxry7XBbpZ&X-Amz-Signature=877d1e06363a4c64a57a9c9a8ff815cdfc02960c1cae26157524b1d673940a52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XONKULCZ%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCFbKYr9v1qczXnCq0B8Z83WL0k7IWhPWL1opnXHAHlKgIgPa56c5RbxocuFosbDO6DXkDbdnakkkV9ZZ9tpyEtvVQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDF6afyJ1qYCDk6%2FV9SrcA4NZrVN8EA5uCCme4E2CgTo1yjE%2FK2q8oqGP2D3j%2BtkCIeHIaIbYwwGWe3lPJwt%2BYFzHYuLx8WqHwoJy1pAqqPLXgvFZhKUnx6E4RbQjBZVdulWHaIOxG1AladcPWDMXwi89bNOzaDRJgXyw5dLXWWt46pXfsxXzTJVB1C5rQs7%2BFlvwJcp%2BvhgplwX9%2BTNS6DIlH5vfNaE7WtfcKLsbxDbMNzNqD1cpH0DHUbur08RMzs27lnz404X08H9mUcj%2FRiswFARod9EjEo68kd%2FzVn8p%2FVi%2BwouzE%2B03AL48xRVcacXwe3o0WAh6OGkkjvU4KedH5gjMCsSwWBBO6xMzywJ6XsTNehecRA7HKqQwT2Q9o8yjf2czWlr%2FEdIh5sP3u9Ixok9HY93cWj8nZZJ%2BegIWRYiPO%2FUXszV5eRwQZLxB5RCyLwi4NrOVeado4IIRC1TGckPJDN0sF9HRDVI4ORY20M3szyN4ShdosMJMSNGngEyqcAJHVfACuADJtm2Vn%2FI13Pzi%2BK10ig%2BRsekc8689NNDc0gT0iFIrRRfTMMLgfT0dgLYV9n%2B1nL0MtCmpIXG8I%2Fqnd4n1WxhyNmB7g4luDpU1FJTIa2XDaXVw2ZrCaXi0VZzNOSqc7K38MJSiitAGOqUBpeQLQNWGq4QfHobunwbSvFqLTE2ZO1KoCiB4Sk4Ox1zwKmOfHtbbGBdHbV2SIT37RHWyOWXziF2p69Bj4XF8AuIVyPulN6PG9Yoi9en8Xct3FABaX2VOkYTif31MMR1Cn81gg3yQPvzfUhSI5ibtOcE7JLxnGdswJATjihZdVOK9B4iTAS%2FKLFkFfMfYG%2BWwPQ4P9WlMj7ZnsAcvt4kxry7XBbpZ&X-Amz-Signature=12b1fcaeb1083b7a000acd94e054a3dd899f126546691d51b906ccc01514cc72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
