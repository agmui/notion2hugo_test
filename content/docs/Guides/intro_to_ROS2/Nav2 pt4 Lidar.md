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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XYO2JTF%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEAjz0aCj5swDJ4yd6lF3w5e84Hpb1RxzhG%2BLZwZpYvwAiEA5%2FARwBwGQtjsKL8rpKxLnUDRgkuuVh48vuvaJiu%2F6ukqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQ3VW1CpV3leV6g%2FSrcA8h8xXOPAQoY8f5h1aTVdMdqCqcRaGRR3X1NlvVaV4QV%2Fy663asz5cxPEoqozKQDsg981JKKaKZivQH3LSrOO68qa6%2Fj6%2FzClLiPvrZO87cq2MGPObQf3v7SCg0q0l9moBHJVLQ1kgQIm9JzXDCgb6ztrf4TF4t1hETczTaoZa4taW2clpWXKCOgNqeI0uoVfsidsPc2%2Fatc0kymmhMiXIlt8riG4YgJ8LyMehuEtpxy4wQsA95NBHc6z3WgByuHYGrnTMlx%2FzwHKFybzECHQrXnA7AJUflziSJweKppOtyYV3d1qvgiQnJtSDpAF8GfWhhdKUgW5hJgykXjW5aUEf5PXqqF%2By8Z2p6OZCuvK0aTTcYEKeT7LLwHPTnf57gLKVrmCc%2BibdxBFG2fVf%2BJ5hxCzRjnzf6hdpetn8kGDBs%2FoNPLkcK%2BcxnRj5n9RTybu1RX8wcdw%2BtEeU%2BM9TIvSnR35f8QxJQj%2BTr8FvBYRddMmgVz5cFy9qmiQTDd80fz%2Bxqtrih7WYi8LxhiySgepmMFa509VDlWudQJTywYqFrpVJft4Mzr%2FBAYUi1R7ujmZCqihXifGun2XGImuC9%2FZ898Kv7IWas0T6qvWrDAmO2zTJTlLbH3gjMu0aLMMJSJ8sYGOqUBZhJDvvcAmkKCqfGxMlxbcNzAdSlFq93ZVWXv5JvQTaIoAeTnz4Q3XvvYu8YQYr0%2FwmmldXGOPBaHrAwZM%2BdzJxXUDB3cyR6EGFUY0KczEVnajeL%2BxA3T4Empe7AUrGzoywb0gqJOcLY%2B%2F5xEVVk3eagv%2FwaPwIWwfoREPflTj9IWDFBasApPgpk%2Frmuo4a0RDjvdjsRdL9jhQllmBW9Jie98Y3lI&X-Amz-Signature=7c6fae7dd22f101ae081af70d603c8c6ddf4399f4d9e16b52797074ab5c9b3e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEU5HD74%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDMiMCRQ8RrdasUC7A6K77hfkYtCIMLdLoikNMtEv%2BqKAiEAmxVhIsF3hi%2FbPiBSyF0w0BSvtZ3%2BPHSxO0h3UtbXCPQqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBc51LNCygYzJYq8lCrcAyjpbCezbHSzB8a4l8LhydA0mp8GyXuog%2FjmEHNRUMO6k%2FCJ%2FVnlDWTBlA%2FRoSTQDRpIBc%2FxVHJQ5WA53hss6Hrv92%2B6yn5zuzsrgDygHyPC6zcLEm69XQzNIB6AM9eX9IUq8KerXRrJrsNkExsIWsJejGBH7y7XdivaRjD1ryjGhLpd6eHQk29iF8xach%2FNUYpWE1%2FxCdYWuP%2BzZnNmDN1Yyvt0DyjZEXY0JQztPB60pe7iNzgWQnJGBxWcouw8B6pX6%2FX99uGXeEtHNhRM5YlIyWkknDgZtvHiATqjE3Uo%2FrKTX0ekjfbgXPf6HMVddtD1FM9HF1Rjasu1M2CcsbwcHlACjkXEBvMm5dQTP9Zft%2BOoxoHV%2BsLmHX5bUcGXn7gN5T%2FS2WE6WCm63Vepdona71KVoVia6Hb4UAqSZpeHHjioZq8aYpgTy4CECLNN981IOtbGoibKjTfJ%2FzKT238EGvfKviY5mfkWisrCnYMc5c5sJ6RbhjmSF1Eq5qNU7IpSeYHVSWNQe6zUzNzqqO1uHcYUo0uXRi%2BBsT%2Bv%2FvnepbsPmDQ1RynfmgrOvAAevHLo42phoLeoDnwMxxuDmbiGLitk%2B%2Fi30NdzB3uEgtX6KZYhE2%2BL6urcevySMPGI8sYGOqUB3lMZdAznwp2NdpQtcZifcLrn%2BG43hTMPjAtYyj7jOigCdsL9UDS6R6i82UK%2FeMt99sG7bt8JK%2FzZRyPC0Bgsu8pszN3rtY0p%2BpwpZsXDkvfMD2%2B7izLFQd9qFWqzdm7tsFBmhEEtepBT1hGQS38%2F%2F%2F617gVDJo%2B7KTOHDfxAGsCf6GEmEyA1goMWg9nZYeo%2BCqeCYZJsb15%2FRA%2FMfFt42taArWEg&X-Amz-Signature=177829e3f631aff4cb742b3945bb58e64bf2251e234dcb1ce6e98b381c92af2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEU5HD74%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDMiMCRQ8RrdasUC7A6K77hfkYtCIMLdLoikNMtEv%2BqKAiEAmxVhIsF3hi%2FbPiBSyF0w0BSvtZ3%2BPHSxO0h3UtbXCPQqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBc51LNCygYzJYq8lCrcAyjpbCezbHSzB8a4l8LhydA0mp8GyXuog%2FjmEHNRUMO6k%2FCJ%2FVnlDWTBlA%2FRoSTQDRpIBc%2FxVHJQ5WA53hss6Hrv92%2B6yn5zuzsrgDygHyPC6zcLEm69XQzNIB6AM9eX9IUq8KerXRrJrsNkExsIWsJejGBH7y7XdivaRjD1ryjGhLpd6eHQk29iF8xach%2FNUYpWE1%2FxCdYWuP%2BzZnNmDN1Yyvt0DyjZEXY0JQztPB60pe7iNzgWQnJGBxWcouw8B6pX6%2FX99uGXeEtHNhRM5YlIyWkknDgZtvHiATqjE3Uo%2FrKTX0ekjfbgXPf6HMVddtD1FM9HF1Rjasu1M2CcsbwcHlACjkXEBvMm5dQTP9Zft%2BOoxoHV%2BsLmHX5bUcGXn7gN5T%2FS2WE6WCm63Vepdona71KVoVia6Hb4UAqSZpeHHjioZq8aYpgTy4CECLNN981IOtbGoibKjTfJ%2FzKT238EGvfKviY5mfkWisrCnYMc5c5sJ6RbhjmSF1Eq5qNU7IpSeYHVSWNQe6zUzNzqqO1uHcYUo0uXRi%2BBsT%2Bv%2FvnepbsPmDQ1RynfmgrOvAAevHLo42phoLeoDnwMxxuDmbiGLitk%2B%2Fi30NdzB3uEgtX6KZYhE2%2BL6urcevySMPGI8sYGOqUB3lMZdAznwp2NdpQtcZifcLrn%2BG43hTMPjAtYyj7jOigCdsL9UDS6R6i82UK%2FeMt99sG7bt8JK%2FzZRyPC0Bgsu8pszN3rtY0p%2BpwpZsXDkvfMD2%2B7izLFQd9qFWqzdm7tsFBmhEEtepBT1hGQS38%2F%2F%2F617gVDJo%2B7KTOHDfxAGsCf6GEmEyA1goMWg9nZYeo%2BCqeCYZJsb15%2FRA%2FMfFt42taArWEg&X-Amz-Signature=9aa05991709c6f2b66bc87e2e97da9f370bd286aa4da2486e993fd00ce59835d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEU5HD74%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDMiMCRQ8RrdasUC7A6K77hfkYtCIMLdLoikNMtEv%2BqKAiEAmxVhIsF3hi%2FbPiBSyF0w0BSvtZ3%2BPHSxO0h3UtbXCPQqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBc51LNCygYzJYq8lCrcAyjpbCezbHSzB8a4l8LhydA0mp8GyXuog%2FjmEHNRUMO6k%2FCJ%2FVnlDWTBlA%2FRoSTQDRpIBc%2FxVHJQ5WA53hss6Hrv92%2B6yn5zuzsrgDygHyPC6zcLEm69XQzNIB6AM9eX9IUq8KerXRrJrsNkExsIWsJejGBH7y7XdivaRjD1ryjGhLpd6eHQk29iF8xach%2FNUYpWE1%2FxCdYWuP%2BzZnNmDN1Yyvt0DyjZEXY0JQztPB60pe7iNzgWQnJGBxWcouw8B6pX6%2FX99uGXeEtHNhRM5YlIyWkknDgZtvHiATqjE3Uo%2FrKTX0ekjfbgXPf6HMVddtD1FM9HF1Rjasu1M2CcsbwcHlACjkXEBvMm5dQTP9Zft%2BOoxoHV%2BsLmHX5bUcGXn7gN5T%2FS2WE6WCm63Vepdona71KVoVia6Hb4UAqSZpeHHjioZq8aYpgTy4CECLNN981IOtbGoibKjTfJ%2FzKT238EGvfKviY5mfkWisrCnYMc5c5sJ6RbhjmSF1Eq5qNU7IpSeYHVSWNQe6zUzNzqqO1uHcYUo0uXRi%2BBsT%2Bv%2FvnepbsPmDQ1RynfmgrOvAAevHLo42phoLeoDnwMxxuDmbiGLitk%2B%2Fi30NdzB3uEgtX6KZYhE2%2BL6urcevySMPGI8sYGOqUB3lMZdAznwp2NdpQtcZifcLrn%2BG43hTMPjAtYyj7jOigCdsL9UDS6R6i82UK%2FeMt99sG7bt8JK%2FzZRyPC0Bgsu8pszN3rtY0p%2BpwpZsXDkvfMD2%2B7izLFQd9qFWqzdm7tsFBmhEEtepBT1hGQS38%2F%2F%2F617gVDJo%2B7KTOHDfxAGsCf6GEmEyA1goMWg9nZYeo%2BCqeCYZJsb15%2FRA%2FMfFt42taArWEg&X-Amz-Signature=eacb9fe36047ec8e63f90fc165843fa15f0d870e29839f41905f0a2f8ceabf50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEU5HD74%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDMiMCRQ8RrdasUC7A6K77hfkYtCIMLdLoikNMtEv%2BqKAiEAmxVhIsF3hi%2FbPiBSyF0w0BSvtZ3%2BPHSxO0h3UtbXCPQqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBc51LNCygYzJYq8lCrcAyjpbCezbHSzB8a4l8LhydA0mp8GyXuog%2FjmEHNRUMO6k%2FCJ%2FVnlDWTBlA%2FRoSTQDRpIBc%2FxVHJQ5WA53hss6Hrv92%2B6yn5zuzsrgDygHyPC6zcLEm69XQzNIB6AM9eX9IUq8KerXRrJrsNkExsIWsJejGBH7y7XdivaRjD1ryjGhLpd6eHQk29iF8xach%2FNUYpWE1%2FxCdYWuP%2BzZnNmDN1Yyvt0DyjZEXY0JQztPB60pe7iNzgWQnJGBxWcouw8B6pX6%2FX99uGXeEtHNhRM5YlIyWkknDgZtvHiATqjE3Uo%2FrKTX0ekjfbgXPf6HMVddtD1FM9HF1Rjasu1M2CcsbwcHlACjkXEBvMm5dQTP9Zft%2BOoxoHV%2BsLmHX5bUcGXn7gN5T%2FS2WE6WCm63Vepdona71KVoVia6Hb4UAqSZpeHHjioZq8aYpgTy4CECLNN981IOtbGoibKjTfJ%2FzKT238EGvfKviY5mfkWisrCnYMc5c5sJ6RbhjmSF1Eq5qNU7IpSeYHVSWNQe6zUzNzqqO1uHcYUo0uXRi%2BBsT%2Bv%2FvnepbsPmDQ1RynfmgrOvAAevHLo42phoLeoDnwMxxuDmbiGLitk%2B%2Fi30NdzB3uEgtX6KZYhE2%2BL6urcevySMPGI8sYGOqUB3lMZdAznwp2NdpQtcZifcLrn%2BG43hTMPjAtYyj7jOigCdsL9UDS6R6i82UK%2FeMt99sG7bt8JK%2FzZRyPC0Bgsu8pszN3rtY0p%2BpwpZsXDkvfMD2%2B7izLFQd9qFWqzdm7tsFBmhEEtepBT1hGQS38%2F%2F%2F617gVDJo%2B7KTOHDfxAGsCf6GEmEyA1goMWg9nZYeo%2BCqeCYZJsb15%2FRA%2FMfFt42taArWEg&X-Amz-Signature=b5295f45c6f28d02c8b270b3d491f36db82cf859a991751a27bfd61e8090e63f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEU5HD74%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDMiMCRQ8RrdasUC7A6K77hfkYtCIMLdLoikNMtEv%2BqKAiEAmxVhIsF3hi%2FbPiBSyF0w0BSvtZ3%2BPHSxO0h3UtbXCPQqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBc51LNCygYzJYq8lCrcAyjpbCezbHSzB8a4l8LhydA0mp8GyXuog%2FjmEHNRUMO6k%2FCJ%2FVnlDWTBlA%2FRoSTQDRpIBc%2FxVHJQ5WA53hss6Hrv92%2B6yn5zuzsrgDygHyPC6zcLEm69XQzNIB6AM9eX9IUq8KerXRrJrsNkExsIWsJejGBH7y7XdivaRjD1ryjGhLpd6eHQk29iF8xach%2FNUYpWE1%2FxCdYWuP%2BzZnNmDN1Yyvt0DyjZEXY0JQztPB60pe7iNzgWQnJGBxWcouw8B6pX6%2FX99uGXeEtHNhRM5YlIyWkknDgZtvHiATqjE3Uo%2FrKTX0ekjfbgXPf6HMVddtD1FM9HF1Rjasu1M2CcsbwcHlACjkXEBvMm5dQTP9Zft%2BOoxoHV%2BsLmHX5bUcGXn7gN5T%2FS2WE6WCm63Vepdona71KVoVia6Hb4UAqSZpeHHjioZq8aYpgTy4CECLNN981IOtbGoibKjTfJ%2FzKT238EGvfKviY5mfkWisrCnYMc5c5sJ6RbhjmSF1Eq5qNU7IpSeYHVSWNQe6zUzNzqqO1uHcYUo0uXRi%2BBsT%2Bv%2FvnepbsPmDQ1RynfmgrOvAAevHLo42phoLeoDnwMxxuDmbiGLitk%2B%2Fi30NdzB3uEgtX6KZYhE2%2BL6urcevySMPGI8sYGOqUB3lMZdAznwp2NdpQtcZifcLrn%2BG43hTMPjAtYyj7jOigCdsL9UDS6R6i82UK%2FeMt99sG7bt8JK%2FzZRyPC0Bgsu8pszN3rtY0p%2BpwpZsXDkvfMD2%2B7izLFQd9qFWqzdm7tsFBmhEEtepBT1hGQS38%2F%2F%2F617gVDJo%2B7KTOHDfxAGsCf6GEmEyA1goMWg9nZYeo%2BCqeCYZJsb15%2FRA%2FMfFt42taArWEg&X-Amz-Signature=532fd722d0246fc7dafe7cd906dc18ea7af4b797418c469d6753b8da3d9a246f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEU5HD74%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDMiMCRQ8RrdasUC7A6K77hfkYtCIMLdLoikNMtEv%2BqKAiEAmxVhIsF3hi%2FbPiBSyF0w0BSvtZ3%2BPHSxO0h3UtbXCPQqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBc51LNCygYzJYq8lCrcAyjpbCezbHSzB8a4l8LhydA0mp8GyXuog%2FjmEHNRUMO6k%2FCJ%2FVnlDWTBlA%2FRoSTQDRpIBc%2FxVHJQ5WA53hss6Hrv92%2B6yn5zuzsrgDygHyPC6zcLEm69XQzNIB6AM9eX9IUq8KerXRrJrsNkExsIWsJejGBH7y7XdivaRjD1ryjGhLpd6eHQk29iF8xach%2FNUYpWE1%2FxCdYWuP%2BzZnNmDN1Yyvt0DyjZEXY0JQztPB60pe7iNzgWQnJGBxWcouw8B6pX6%2FX99uGXeEtHNhRM5YlIyWkknDgZtvHiATqjE3Uo%2FrKTX0ekjfbgXPf6HMVddtD1FM9HF1Rjasu1M2CcsbwcHlACjkXEBvMm5dQTP9Zft%2BOoxoHV%2BsLmHX5bUcGXn7gN5T%2FS2WE6WCm63Vepdona71KVoVia6Hb4UAqSZpeHHjioZq8aYpgTy4CECLNN981IOtbGoibKjTfJ%2FzKT238EGvfKviY5mfkWisrCnYMc5c5sJ6RbhjmSF1Eq5qNU7IpSeYHVSWNQe6zUzNzqqO1uHcYUo0uXRi%2BBsT%2Bv%2FvnepbsPmDQ1RynfmgrOvAAevHLo42phoLeoDnwMxxuDmbiGLitk%2B%2Fi30NdzB3uEgtX6KZYhE2%2BL6urcevySMPGI8sYGOqUB3lMZdAznwp2NdpQtcZifcLrn%2BG43hTMPjAtYyj7jOigCdsL9UDS6R6i82UK%2FeMt99sG7bt8JK%2FzZRyPC0Bgsu8pszN3rtY0p%2BpwpZsXDkvfMD2%2B7izLFQd9qFWqzdm7tsFBmhEEtepBT1hGQS38%2F%2F%2F617gVDJo%2B7KTOHDfxAGsCf6GEmEyA1goMWg9nZYeo%2BCqeCYZJsb15%2FRA%2FMfFt42taArWEg&X-Amz-Signature=bd5f93b769bc015b7dc931df10e824839124bbbebef7329c8bc32019a76a63fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEU5HD74%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDMiMCRQ8RrdasUC7A6K77hfkYtCIMLdLoikNMtEv%2BqKAiEAmxVhIsF3hi%2FbPiBSyF0w0BSvtZ3%2BPHSxO0h3UtbXCPQqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBc51LNCygYzJYq8lCrcAyjpbCezbHSzB8a4l8LhydA0mp8GyXuog%2FjmEHNRUMO6k%2FCJ%2FVnlDWTBlA%2FRoSTQDRpIBc%2FxVHJQ5WA53hss6Hrv92%2B6yn5zuzsrgDygHyPC6zcLEm69XQzNIB6AM9eX9IUq8KerXRrJrsNkExsIWsJejGBH7y7XdivaRjD1ryjGhLpd6eHQk29iF8xach%2FNUYpWE1%2FxCdYWuP%2BzZnNmDN1Yyvt0DyjZEXY0JQztPB60pe7iNzgWQnJGBxWcouw8B6pX6%2FX99uGXeEtHNhRM5YlIyWkknDgZtvHiATqjE3Uo%2FrKTX0ekjfbgXPf6HMVddtD1FM9HF1Rjasu1M2CcsbwcHlACjkXEBvMm5dQTP9Zft%2BOoxoHV%2BsLmHX5bUcGXn7gN5T%2FS2WE6WCm63Vepdona71KVoVia6Hb4UAqSZpeHHjioZq8aYpgTy4CECLNN981IOtbGoibKjTfJ%2FzKT238EGvfKviY5mfkWisrCnYMc5c5sJ6RbhjmSF1Eq5qNU7IpSeYHVSWNQe6zUzNzqqO1uHcYUo0uXRi%2BBsT%2Bv%2FvnepbsPmDQ1RynfmgrOvAAevHLo42phoLeoDnwMxxuDmbiGLitk%2B%2Fi30NdzB3uEgtX6KZYhE2%2BL6urcevySMPGI8sYGOqUB3lMZdAznwp2NdpQtcZifcLrn%2BG43hTMPjAtYyj7jOigCdsL9UDS6R6i82UK%2FeMt99sG7bt8JK%2FzZRyPC0Bgsu8pszN3rtY0p%2BpwpZsXDkvfMD2%2B7izLFQd9qFWqzdm7tsFBmhEEtepBT1hGQS38%2F%2F%2F617gVDJo%2B7KTOHDfxAGsCf6GEmEyA1goMWg9nZYeo%2BCqeCYZJsb15%2FRA%2FMfFt42taArWEg&X-Amz-Signature=cb85ae3e33b28e4d50000929665e4acec29e80794a9eb68cb464f6f7779caeea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEU5HD74%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDMiMCRQ8RrdasUC7A6K77hfkYtCIMLdLoikNMtEv%2BqKAiEAmxVhIsF3hi%2FbPiBSyF0w0BSvtZ3%2BPHSxO0h3UtbXCPQqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBc51LNCygYzJYq8lCrcAyjpbCezbHSzB8a4l8LhydA0mp8GyXuog%2FjmEHNRUMO6k%2FCJ%2FVnlDWTBlA%2FRoSTQDRpIBc%2FxVHJQ5WA53hss6Hrv92%2B6yn5zuzsrgDygHyPC6zcLEm69XQzNIB6AM9eX9IUq8KerXRrJrsNkExsIWsJejGBH7y7XdivaRjD1ryjGhLpd6eHQk29iF8xach%2FNUYpWE1%2FxCdYWuP%2BzZnNmDN1Yyvt0DyjZEXY0JQztPB60pe7iNzgWQnJGBxWcouw8B6pX6%2FX99uGXeEtHNhRM5YlIyWkknDgZtvHiATqjE3Uo%2FrKTX0ekjfbgXPf6HMVddtD1FM9HF1Rjasu1M2CcsbwcHlACjkXEBvMm5dQTP9Zft%2BOoxoHV%2BsLmHX5bUcGXn7gN5T%2FS2WE6WCm63Vepdona71KVoVia6Hb4UAqSZpeHHjioZq8aYpgTy4CECLNN981IOtbGoibKjTfJ%2FzKT238EGvfKviY5mfkWisrCnYMc5c5sJ6RbhjmSF1Eq5qNU7IpSeYHVSWNQe6zUzNzqqO1uHcYUo0uXRi%2BBsT%2Bv%2FvnepbsPmDQ1RynfmgrOvAAevHLo42phoLeoDnwMxxuDmbiGLitk%2B%2Fi30NdzB3uEgtX6KZYhE2%2BL6urcevySMPGI8sYGOqUB3lMZdAznwp2NdpQtcZifcLrn%2BG43hTMPjAtYyj7jOigCdsL9UDS6R6i82UK%2FeMt99sG7bt8JK%2FzZRyPC0Bgsu8pszN3rtY0p%2BpwpZsXDkvfMD2%2B7izLFQd9qFWqzdm7tsFBmhEEtepBT1hGQS38%2F%2F%2F617gVDJo%2B7KTOHDfxAGsCf6GEmEyA1goMWg9nZYeo%2BCqeCYZJsb15%2FRA%2FMfFt42taArWEg&X-Amz-Signature=2c912637173233d7021b02f7c9b4ed278f29ba695f278a01aafd4d905891938d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEU5HD74%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDMiMCRQ8RrdasUC7A6K77hfkYtCIMLdLoikNMtEv%2BqKAiEAmxVhIsF3hi%2FbPiBSyF0w0BSvtZ3%2BPHSxO0h3UtbXCPQqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBc51LNCygYzJYq8lCrcAyjpbCezbHSzB8a4l8LhydA0mp8GyXuog%2FjmEHNRUMO6k%2FCJ%2FVnlDWTBlA%2FRoSTQDRpIBc%2FxVHJQ5WA53hss6Hrv92%2B6yn5zuzsrgDygHyPC6zcLEm69XQzNIB6AM9eX9IUq8KerXRrJrsNkExsIWsJejGBH7y7XdivaRjD1ryjGhLpd6eHQk29iF8xach%2FNUYpWE1%2FxCdYWuP%2BzZnNmDN1Yyvt0DyjZEXY0JQztPB60pe7iNzgWQnJGBxWcouw8B6pX6%2FX99uGXeEtHNhRM5YlIyWkknDgZtvHiATqjE3Uo%2FrKTX0ekjfbgXPf6HMVddtD1FM9HF1Rjasu1M2CcsbwcHlACjkXEBvMm5dQTP9Zft%2BOoxoHV%2BsLmHX5bUcGXn7gN5T%2FS2WE6WCm63Vepdona71KVoVia6Hb4UAqSZpeHHjioZq8aYpgTy4CECLNN981IOtbGoibKjTfJ%2FzKT238EGvfKviY5mfkWisrCnYMc5c5sJ6RbhjmSF1Eq5qNU7IpSeYHVSWNQe6zUzNzqqO1uHcYUo0uXRi%2BBsT%2Bv%2FvnepbsPmDQ1RynfmgrOvAAevHLo42phoLeoDnwMxxuDmbiGLitk%2B%2Fi30NdzB3uEgtX6KZYhE2%2BL6urcevySMPGI8sYGOqUB3lMZdAznwp2NdpQtcZifcLrn%2BG43hTMPjAtYyj7jOigCdsL9UDS6R6i82UK%2FeMt99sG7bt8JK%2FzZRyPC0Bgsu8pszN3rtY0p%2BpwpZsXDkvfMD2%2B7izLFQd9qFWqzdm7tsFBmhEEtepBT1hGQS38%2F%2F%2F617gVDJo%2B7KTOHDfxAGsCf6GEmEyA1goMWg9nZYeo%2BCqeCYZJsb15%2FRA%2FMfFt42taArWEg&X-Amz-Signature=c4cce839c489736ed4015ba1466733507c768aceb5426a5d06228ac045a6e39d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEU5HD74%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDMiMCRQ8RrdasUC7A6K77hfkYtCIMLdLoikNMtEv%2BqKAiEAmxVhIsF3hi%2FbPiBSyF0w0BSvtZ3%2BPHSxO0h3UtbXCPQqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBc51LNCygYzJYq8lCrcAyjpbCezbHSzB8a4l8LhydA0mp8GyXuog%2FjmEHNRUMO6k%2FCJ%2FVnlDWTBlA%2FRoSTQDRpIBc%2FxVHJQ5WA53hss6Hrv92%2B6yn5zuzsrgDygHyPC6zcLEm69XQzNIB6AM9eX9IUq8KerXRrJrsNkExsIWsJejGBH7y7XdivaRjD1ryjGhLpd6eHQk29iF8xach%2FNUYpWE1%2FxCdYWuP%2BzZnNmDN1Yyvt0DyjZEXY0JQztPB60pe7iNzgWQnJGBxWcouw8B6pX6%2FX99uGXeEtHNhRM5YlIyWkknDgZtvHiATqjE3Uo%2FrKTX0ekjfbgXPf6HMVddtD1FM9HF1Rjasu1M2CcsbwcHlACjkXEBvMm5dQTP9Zft%2BOoxoHV%2BsLmHX5bUcGXn7gN5T%2FS2WE6WCm63Vepdona71KVoVia6Hb4UAqSZpeHHjioZq8aYpgTy4CECLNN981IOtbGoibKjTfJ%2FzKT238EGvfKviY5mfkWisrCnYMc5c5sJ6RbhjmSF1Eq5qNU7IpSeYHVSWNQe6zUzNzqqO1uHcYUo0uXRi%2BBsT%2Bv%2FvnepbsPmDQ1RynfmgrOvAAevHLo42phoLeoDnwMxxuDmbiGLitk%2B%2Fi30NdzB3uEgtX6KZYhE2%2BL6urcevySMPGI8sYGOqUB3lMZdAznwp2NdpQtcZifcLrn%2BG43hTMPjAtYyj7jOigCdsL9UDS6R6i82UK%2FeMt99sG7bt8JK%2FzZRyPC0Bgsu8pszN3rtY0p%2BpwpZsXDkvfMD2%2B7izLFQd9qFWqzdm7tsFBmhEEtepBT1hGQS38%2F%2F%2F617gVDJo%2B7KTOHDfxAGsCf6GEmEyA1goMWg9nZYeo%2BCqeCYZJsb15%2FRA%2FMfFt42taArWEg&X-Amz-Signature=b5295f45c6f28d02c8b270b3d491f36db82cf859a991751a27bfd61e8090e63f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
