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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXJ6GTVE%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDn5kMjF70sTim6I1YxOlxLHGJFZaT3xT7AdOFAYQaTYAiEAgZETDwRRQ6YBbwcTDoZ0M85UG15UzgEskN9mSqO3%2F%2BQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgKPlfT4nN%2Fn4GSYCrcA300x0BaR7OxrButbRtlwazGbw2IzU0P6gzDsy7XF9BLLKfPBytQ5pwCShExPAZuKlDBJQF7xWhlFUSLsWGan5d%2FKL40mQGAQ0NwNTpAQ9rM%2FWDv0pg1INxY%2FoLEf0gj%2B7HFhEEG5oPa%2FzjNBRLSne1xmWn5t1fNCRVFGBCjEeSQiEawqTaiw10KOAUzLk4QnJFj0EPsHYLGqcR7Cm4pmEntHVGFQ2siK4DToQ9wujEEJhv6H%2B0GCRDNMpkyQE22S0sAL6X1O74kfVVcemXzd9wanwSD409P9As26H6XxrxZD0fhA4lbWBuiuXRIW%2FUKesyxG9g7zyHm25CdMLef%2FlhxpQcW0tmw05n27v%2BroMZxMUJVfpKawVpTHhjsAgejVh0zOzwhxssCFZsDR32tLiiFoGf3XEEXM1K%2FDnKZrkIx4LVb%2ForSb7GTG7Syji9I9k%2BDnrGiVe0H8B1v91G3N6BkLsGrv2i6nHI0Ogp%2FVzUVjgBn44KYWI4iunthVquKFiuz6BaSqxmDnptk96p%2FCIWB1LcciPD05tfbyOstlyQe8z8xPeeXx7Z%2FN9HPgdVhDsY2A4FZR%2BDohpFKJrfHTQLhGxbRL0AhOO9q2SHnw4L2bpUWRRslvZZkqzwbMJ20xscGOqUB%2B8D6fSrHDMRzYWE28ru9qyrMYGszriBuqEv1PNVC7Q%2Be9t%2B8E13dAZpLfjC3HaRXwUeJWGuX6yiEP8jV020AaNDDMc8a55bCXCVN%2FYU98JnEKQZ4gxKEZVrs8PqL6COuDnfnzyXP0bjc3C4OpLcdpCGTri3mo%2FdXfhxgLT8P3dv%2Fj9c7CerKsRhDvRTxfJPSvJpA6fT9VVqqONBrOvhMXN0SkSgA&X-Amz-Signature=c8bdb3e059e201769b91a5ce4830d2a62e7f78f5c6778dd06d994fc5f624153d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXJ6GTVE%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDn5kMjF70sTim6I1YxOlxLHGJFZaT3xT7AdOFAYQaTYAiEAgZETDwRRQ6YBbwcTDoZ0M85UG15UzgEskN9mSqO3%2F%2BQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgKPlfT4nN%2Fn4GSYCrcA300x0BaR7OxrButbRtlwazGbw2IzU0P6gzDsy7XF9BLLKfPBytQ5pwCShExPAZuKlDBJQF7xWhlFUSLsWGan5d%2FKL40mQGAQ0NwNTpAQ9rM%2FWDv0pg1INxY%2FoLEf0gj%2B7HFhEEG5oPa%2FzjNBRLSne1xmWn5t1fNCRVFGBCjEeSQiEawqTaiw10KOAUzLk4QnJFj0EPsHYLGqcR7Cm4pmEntHVGFQ2siK4DToQ9wujEEJhv6H%2B0GCRDNMpkyQE22S0sAL6X1O74kfVVcemXzd9wanwSD409P9As26H6XxrxZD0fhA4lbWBuiuXRIW%2FUKesyxG9g7zyHm25CdMLef%2FlhxpQcW0tmw05n27v%2BroMZxMUJVfpKawVpTHhjsAgejVh0zOzwhxssCFZsDR32tLiiFoGf3XEEXM1K%2FDnKZrkIx4LVb%2ForSb7GTG7Syji9I9k%2BDnrGiVe0H8B1v91G3N6BkLsGrv2i6nHI0Ogp%2FVzUVjgBn44KYWI4iunthVquKFiuz6BaSqxmDnptk96p%2FCIWB1LcciPD05tfbyOstlyQe8z8xPeeXx7Z%2FN9HPgdVhDsY2A4FZR%2BDohpFKJrfHTQLhGxbRL0AhOO9q2SHnw4L2bpUWRRslvZZkqzwbMJ20xscGOqUB%2B8D6fSrHDMRzYWE28ru9qyrMYGszriBuqEv1PNVC7Q%2Be9t%2B8E13dAZpLfjC3HaRXwUeJWGuX6yiEP8jV020AaNDDMc8a55bCXCVN%2FYU98JnEKQZ4gxKEZVrs8PqL6COuDnfnzyXP0bjc3C4OpLcdpCGTri3mo%2FdXfhxgLT8P3dv%2Fj9c7CerKsRhDvRTxfJPSvJpA6fT9VVqqONBrOvhMXN0SkSgA&X-Amz-Signature=37b8baed5fc3d5f2ff709ad8197c4bfd49b40f554c921e7178cefcfce2fd06f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXJ6GTVE%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDn5kMjF70sTim6I1YxOlxLHGJFZaT3xT7AdOFAYQaTYAiEAgZETDwRRQ6YBbwcTDoZ0M85UG15UzgEskN9mSqO3%2F%2BQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgKPlfT4nN%2Fn4GSYCrcA300x0BaR7OxrButbRtlwazGbw2IzU0P6gzDsy7XF9BLLKfPBytQ5pwCShExPAZuKlDBJQF7xWhlFUSLsWGan5d%2FKL40mQGAQ0NwNTpAQ9rM%2FWDv0pg1INxY%2FoLEf0gj%2B7HFhEEG5oPa%2FzjNBRLSne1xmWn5t1fNCRVFGBCjEeSQiEawqTaiw10KOAUzLk4QnJFj0EPsHYLGqcR7Cm4pmEntHVGFQ2siK4DToQ9wujEEJhv6H%2B0GCRDNMpkyQE22S0sAL6X1O74kfVVcemXzd9wanwSD409P9As26H6XxrxZD0fhA4lbWBuiuXRIW%2FUKesyxG9g7zyHm25CdMLef%2FlhxpQcW0tmw05n27v%2BroMZxMUJVfpKawVpTHhjsAgejVh0zOzwhxssCFZsDR32tLiiFoGf3XEEXM1K%2FDnKZrkIx4LVb%2ForSb7GTG7Syji9I9k%2BDnrGiVe0H8B1v91G3N6BkLsGrv2i6nHI0Ogp%2FVzUVjgBn44KYWI4iunthVquKFiuz6BaSqxmDnptk96p%2FCIWB1LcciPD05tfbyOstlyQe8z8xPeeXx7Z%2FN9HPgdVhDsY2A4FZR%2BDohpFKJrfHTQLhGxbRL0AhOO9q2SHnw4L2bpUWRRslvZZkqzwbMJ20xscGOqUB%2B8D6fSrHDMRzYWE28ru9qyrMYGszriBuqEv1PNVC7Q%2Be9t%2B8E13dAZpLfjC3HaRXwUeJWGuX6yiEP8jV020AaNDDMc8a55bCXCVN%2FYU98JnEKQZ4gxKEZVrs8PqL6COuDnfnzyXP0bjc3C4OpLcdpCGTri3mo%2FdXfhxgLT8P3dv%2Fj9c7CerKsRhDvRTxfJPSvJpA6fT9VVqqONBrOvhMXN0SkSgA&X-Amz-Signature=79667479f098aa93920e0286892989d14d60ef856552be7ae72f0349b08e3c1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXJ6GTVE%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDn5kMjF70sTim6I1YxOlxLHGJFZaT3xT7AdOFAYQaTYAiEAgZETDwRRQ6YBbwcTDoZ0M85UG15UzgEskN9mSqO3%2F%2BQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgKPlfT4nN%2Fn4GSYCrcA300x0BaR7OxrButbRtlwazGbw2IzU0P6gzDsy7XF9BLLKfPBytQ5pwCShExPAZuKlDBJQF7xWhlFUSLsWGan5d%2FKL40mQGAQ0NwNTpAQ9rM%2FWDv0pg1INxY%2FoLEf0gj%2B7HFhEEG5oPa%2FzjNBRLSne1xmWn5t1fNCRVFGBCjEeSQiEawqTaiw10KOAUzLk4QnJFj0EPsHYLGqcR7Cm4pmEntHVGFQ2siK4DToQ9wujEEJhv6H%2B0GCRDNMpkyQE22S0sAL6X1O74kfVVcemXzd9wanwSD409P9As26H6XxrxZD0fhA4lbWBuiuXRIW%2FUKesyxG9g7zyHm25CdMLef%2FlhxpQcW0tmw05n27v%2BroMZxMUJVfpKawVpTHhjsAgejVh0zOzwhxssCFZsDR32tLiiFoGf3XEEXM1K%2FDnKZrkIx4LVb%2ForSb7GTG7Syji9I9k%2BDnrGiVe0H8B1v91G3N6BkLsGrv2i6nHI0Ogp%2FVzUVjgBn44KYWI4iunthVquKFiuz6BaSqxmDnptk96p%2FCIWB1LcciPD05tfbyOstlyQe8z8xPeeXx7Z%2FN9HPgdVhDsY2A4FZR%2BDohpFKJrfHTQLhGxbRL0AhOO9q2SHnw4L2bpUWRRslvZZkqzwbMJ20xscGOqUB%2B8D6fSrHDMRzYWE28ru9qyrMYGszriBuqEv1PNVC7Q%2Be9t%2B8E13dAZpLfjC3HaRXwUeJWGuX6yiEP8jV020AaNDDMc8a55bCXCVN%2FYU98JnEKQZ4gxKEZVrs8PqL6COuDnfnzyXP0bjc3C4OpLcdpCGTri3mo%2FdXfhxgLT8P3dv%2Fj9c7CerKsRhDvRTxfJPSvJpA6fT9VVqqONBrOvhMXN0SkSgA&X-Amz-Signature=c99235171c52267f6a35d695ae5afaf66a8096aa3914d521876c1c64bf1026b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXJ6GTVE%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDn5kMjF70sTim6I1YxOlxLHGJFZaT3xT7AdOFAYQaTYAiEAgZETDwRRQ6YBbwcTDoZ0M85UG15UzgEskN9mSqO3%2F%2BQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgKPlfT4nN%2Fn4GSYCrcA300x0BaR7OxrButbRtlwazGbw2IzU0P6gzDsy7XF9BLLKfPBytQ5pwCShExPAZuKlDBJQF7xWhlFUSLsWGan5d%2FKL40mQGAQ0NwNTpAQ9rM%2FWDv0pg1INxY%2FoLEf0gj%2B7HFhEEG5oPa%2FzjNBRLSne1xmWn5t1fNCRVFGBCjEeSQiEawqTaiw10KOAUzLk4QnJFj0EPsHYLGqcR7Cm4pmEntHVGFQ2siK4DToQ9wujEEJhv6H%2B0GCRDNMpkyQE22S0sAL6X1O74kfVVcemXzd9wanwSD409P9As26H6XxrxZD0fhA4lbWBuiuXRIW%2FUKesyxG9g7zyHm25CdMLef%2FlhxpQcW0tmw05n27v%2BroMZxMUJVfpKawVpTHhjsAgejVh0zOzwhxssCFZsDR32tLiiFoGf3XEEXM1K%2FDnKZrkIx4LVb%2ForSb7GTG7Syji9I9k%2BDnrGiVe0H8B1v91G3N6BkLsGrv2i6nHI0Ogp%2FVzUVjgBn44KYWI4iunthVquKFiuz6BaSqxmDnptk96p%2FCIWB1LcciPD05tfbyOstlyQe8z8xPeeXx7Z%2FN9HPgdVhDsY2A4FZR%2BDohpFKJrfHTQLhGxbRL0AhOO9q2SHnw4L2bpUWRRslvZZkqzwbMJ20xscGOqUB%2B8D6fSrHDMRzYWE28ru9qyrMYGszriBuqEv1PNVC7Q%2Be9t%2B8E13dAZpLfjC3HaRXwUeJWGuX6yiEP8jV020AaNDDMc8a55bCXCVN%2FYU98JnEKQZ4gxKEZVrs8PqL6COuDnfnzyXP0bjc3C4OpLcdpCGTri3mo%2FdXfhxgLT8P3dv%2Fj9c7CerKsRhDvRTxfJPSvJpA6fT9VVqqONBrOvhMXN0SkSgA&X-Amz-Signature=a92432379b6ab7d7726ef156bb3af56020bc683c5950aad87187b4ac9d5db7d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXJ6GTVE%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDn5kMjF70sTim6I1YxOlxLHGJFZaT3xT7AdOFAYQaTYAiEAgZETDwRRQ6YBbwcTDoZ0M85UG15UzgEskN9mSqO3%2F%2BQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgKPlfT4nN%2Fn4GSYCrcA300x0BaR7OxrButbRtlwazGbw2IzU0P6gzDsy7XF9BLLKfPBytQ5pwCShExPAZuKlDBJQF7xWhlFUSLsWGan5d%2FKL40mQGAQ0NwNTpAQ9rM%2FWDv0pg1INxY%2FoLEf0gj%2B7HFhEEG5oPa%2FzjNBRLSne1xmWn5t1fNCRVFGBCjEeSQiEawqTaiw10KOAUzLk4QnJFj0EPsHYLGqcR7Cm4pmEntHVGFQ2siK4DToQ9wujEEJhv6H%2B0GCRDNMpkyQE22S0sAL6X1O74kfVVcemXzd9wanwSD409P9As26H6XxrxZD0fhA4lbWBuiuXRIW%2FUKesyxG9g7zyHm25CdMLef%2FlhxpQcW0tmw05n27v%2BroMZxMUJVfpKawVpTHhjsAgejVh0zOzwhxssCFZsDR32tLiiFoGf3XEEXM1K%2FDnKZrkIx4LVb%2ForSb7GTG7Syji9I9k%2BDnrGiVe0H8B1v91G3N6BkLsGrv2i6nHI0Ogp%2FVzUVjgBn44KYWI4iunthVquKFiuz6BaSqxmDnptk96p%2FCIWB1LcciPD05tfbyOstlyQe8z8xPeeXx7Z%2FN9HPgdVhDsY2A4FZR%2BDohpFKJrfHTQLhGxbRL0AhOO9q2SHnw4L2bpUWRRslvZZkqzwbMJ20xscGOqUB%2B8D6fSrHDMRzYWE28ru9qyrMYGszriBuqEv1PNVC7Q%2Be9t%2B8E13dAZpLfjC3HaRXwUeJWGuX6yiEP8jV020AaNDDMc8a55bCXCVN%2FYU98JnEKQZ4gxKEZVrs8PqL6COuDnfnzyXP0bjc3C4OpLcdpCGTri3mo%2FdXfhxgLT8P3dv%2Fj9c7CerKsRhDvRTxfJPSvJpA6fT9VVqqONBrOvhMXN0SkSgA&X-Amz-Signature=1aa9d2a451958cebc5ba8bf38712400e6079703613b0e789bf0c3f3047c18345&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXJ6GTVE%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDn5kMjF70sTim6I1YxOlxLHGJFZaT3xT7AdOFAYQaTYAiEAgZETDwRRQ6YBbwcTDoZ0M85UG15UzgEskN9mSqO3%2F%2BQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgKPlfT4nN%2Fn4GSYCrcA300x0BaR7OxrButbRtlwazGbw2IzU0P6gzDsy7XF9BLLKfPBytQ5pwCShExPAZuKlDBJQF7xWhlFUSLsWGan5d%2FKL40mQGAQ0NwNTpAQ9rM%2FWDv0pg1INxY%2FoLEf0gj%2B7HFhEEG5oPa%2FzjNBRLSne1xmWn5t1fNCRVFGBCjEeSQiEawqTaiw10KOAUzLk4QnJFj0EPsHYLGqcR7Cm4pmEntHVGFQ2siK4DToQ9wujEEJhv6H%2B0GCRDNMpkyQE22S0sAL6X1O74kfVVcemXzd9wanwSD409P9As26H6XxrxZD0fhA4lbWBuiuXRIW%2FUKesyxG9g7zyHm25CdMLef%2FlhxpQcW0tmw05n27v%2BroMZxMUJVfpKawVpTHhjsAgejVh0zOzwhxssCFZsDR32tLiiFoGf3XEEXM1K%2FDnKZrkIx4LVb%2ForSb7GTG7Syji9I9k%2BDnrGiVe0H8B1v91G3N6BkLsGrv2i6nHI0Ogp%2FVzUVjgBn44KYWI4iunthVquKFiuz6BaSqxmDnptk96p%2FCIWB1LcciPD05tfbyOstlyQe8z8xPeeXx7Z%2FN9HPgdVhDsY2A4FZR%2BDohpFKJrfHTQLhGxbRL0AhOO9q2SHnw4L2bpUWRRslvZZkqzwbMJ20xscGOqUB%2B8D6fSrHDMRzYWE28ru9qyrMYGszriBuqEv1PNVC7Q%2Be9t%2B8E13dAZpLfjC3HaRXwUeJWGuX6yiEP8jV020AaNDDMc8a55bCXCVN%2FYU98JnEKQZ4gxKEZVrs8PqL6COuDnfnzyXP0bjc3C4OpLcdpCGTri3mo%2FdXfhxgLT8P3dv%2Fj9c7CerKsRhDvRTxfJPSvJpA6fT9VVqqONBrOvhMXN0SkSgA&X-Amz-Signature=692dae68bfedeac7d899aaf8612c9c608ef58bde625c2f83da83d6a16fc146a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXJ6GTVE%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDn5kMjF70sTim6I1YxOlxLHGJFZaT3xT7AdOFAYQaTYAiEAgZETDwRRQ6YBbwcTDoZ0M85UG15UzgEskN9mSqO3%2F%2BQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgKPlfT4nN%2Fn4GSYCrcA300x0BaR7OxrButbRtlwazGbw2IzU0P6gzDsy7XF9BLLKfPBytQ5pwCShExPAZuKlDBJQF7xWhlFUSLsWGan5d%2FKL40mQGAQ0NwNTpAQ9rM%2FWDv0pg1INxY%2FoLEf0gj%2B7HFhEEG5oPa%2FzjNBRLSne1xmWn5t1fNCRVFGBCjEeSQiEawqTaiw10KOAUzLk4QnJFj0EPsHYLGqcR7Cm4pmEntHVGFQ2siK4DToQ9wujEEJhv6H%2B0GCRDNMpkyQE22S0sAL6X1O74kfVVcemXzd9wanwSD409P9As26H6XxrxZD0fhA4lbWBuiuXRIW%2FUKesyxG9g7zyHm25CdMLef%2FlhxpQcW0tmw05n27v%2BroMZxMUJVfpKawVpTHhjsAgejVh0zOzwhxssCFZsDR32tLiiFoGf3XEEXM1K%2FDnKZrkIx4LVb%2ForSb7GTG7Syji9I9k%2BDnrGiVe0H8B1v91G3N6BkLsGrv2i6nHI0Ogp%2FVzUVjgBn44KYWI4iunthVquKFiuz6BaSqxmDnptk96p%2FCIWB1LcciPD05tfbyOstlyQe8z8xPeeXx7Z%2FN9HPgdVhDsY2A4FZR%2BDohpFKJrfHTQLhGxbRL0AhOO9q2SHnw4L2bpUWRRslvZZkqzwbMJ20xscGOqUB%2B8D6fSrHDMRzYWE28ru9qyrMYGszriBuqEv1PNVC7Q%2Be9t%2B8E13dAZpLfjC3HaRXwUeJWGuX6yiEP8jV020AaNDDMc8a55bCXCVN%2FYU98JnEKQZ4gxKEZVrs8PqL6COuDnfnzyXP0bjc3C4OpLcdpCGTri3mo%2FdXfhxgLT8P3dv%2Fj9c7CerKsRhDvRTxfJPSvJpA6fT9VVqqONBrOvhMXN0SkSgA&X-Amz-Signature=e9748189dfc68e22a2aff7eb47182d7113944059b14798ce06515d6e0de244d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXJ6GTVE%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDn5kMjF70sTim6I1YxOlxLHGJFZaT3xT7AdOFAYQaTYAiEAgZETDwRRQ6YBbwcTDoZ0M85UG15UzgEskN9mSqO3%2F%2BQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgKPlfT4nN%2Fn4GSYCrcA300x0BaR7OxrButbRtlwazGbw2IzU0P6gzDsy7XF9BLLKfPBytQ5pwCShExPAZuKlDBJQF7xWhlFUSLsWGan5d%2FKL40mQGAQ0NwNTpAQ9rM%2FWDv0pg1INxY%2FoLEf0gj%2B7HFhEEG5oPa%2FzjNBRLSne1xmWn5t1fNCRVFGBCjEeSQiEawqTaiw10KOAUzLk4QnJFj0EPsHYLGqcR7Cm4pmEntHVGFQ2siK4DToQ9wujEEJhv6H%2B0GCRDNMpkyQE22S0sAL6X1O74kfVVcemXzd9wanwSD409P9As26H6XxrxZD0fhA4lbWBuiuXRIW%2FUKesyxG9g7zyHm25CdMLef%2FlhxpQcW0tmw05n27v%2BroMZxMUJVfpKawVpTHhjsAgejVh0zOzwhxssCFZsDR32tLiiFoGf3XEEXM1K%2FDnKZrkIx4LVb%2ForSb7GTG7Syji9I9k%2BDnrGiVe0H8B1v91G3N6BkLsGrv2i6nHI0Ogp%2FVzUVjgBn44KYWI4iunthVquKFiuz6BaSqxmDnptk96p%2FCIWB1LcciPD05tfbyOstlyQe8z8xPeeXx7Z%2FN9HPgdVhDsY2A4FZR%2BDohpFKJrfHTQLhGxbRL0AhOO9q2SHnw4L2bpUWRRslvZZkqzwbMJ20xscGOqUB%2B8D6fSrHDMRzYWE28ru9qyrMYGszriBuqEv1PNVC7Q%2Be9t%2B8E13dAZpLfjC3HaRXwUeJWGuX6yiEP8jV020AaNDDMc8a55bCXCVN%2FYU98JnEKQZ4gxKEZVrs8PqL6COuDnfnzyXP0bjc3C4OpLcdpCGTri3mo%2FdXfhxgLT8P3dv%2Fj9c7CerKsRhDvRTxfJPSvJpA6fT9VVqqONBrOvhMXN0SkSgA&X-Amz-Signature=bfc434f0b83a1728d4689cb1646588af0640bbfa7fec9280a9c708a4bb35a538&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXJ6GTVE%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDn5kMjF70sTim6I1YxOlxLHGJFZaT3xT7AdOFAYQaTYAiEAgZETDwRRQ6YBbwcTDoZ0M85UG15UzgEskN9mSqO3%2F%2BQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgKPlfT4nN%2Fn4GSYCrcA300x0BaR7OxrButbRtlwazGbw2IzU0P6gzDsy7XF9BLLKfPBytQ5pwCShExPAZuKlDBJQF7xWhlFUSLsWGan5d%2FKL40mQGAQ0NwNTpAQ9rM%2FWDv0pg1INxY%2FoLEf0gj%2B7HFhEEG5oPa%2FzjNBRLSne1xmWn5t1fNCRVFGBCjEeSQiEawqTaiw10KOAUzLk4QnJFj0EPsHYLGqcR7Cm4pmEntHVGFQ2siK4DToQ9wujEEJhv6H%2B0GCRDNMpkyQE22S0sAL6X1O74kfVVcemXzd9wanwSD409P9As26H6XxrxZD0fhA4lbWBuiuXRIW%2FUKesyxG9g7zyHm25CdMLef%2FlhxpQcW0tmw05n27v%2BroMZxMUJVfpKawVpTHhjsAgejVh0zOzwhxssCFZsDR32tLiiFoGf3XEEXM1K%2FDnKZrkIx4LVb%2ForSb7GTG7Syji9I9k%2BDnrGiVe0H8B1v91G3N6BkLsGrv2i6nHI0Ogp%2FVzUVjgBn44KYWI4iunthVquKFiuz6BaSqxmDnptk96p%2FCIWB1LcciPD05tfbyOstlyQe8z8xPeeXx7Z%2FN9HPgdVhDsY2A4FZR%2BDohpFKJrfHTQLhGxbRL0AhOO9q2SHnw4L2bpUWRRslvZZkqzwbMJ20xscGOqUB%2B8D6fSrHDMRzYWE28ru9qyrMYGszriBuqEv1PNVC7Q%2Be9t%2B8E13dAZpLfjC3HaRXwUeJWGuX6yiEP8jV020AaNDDMc8a55bCXCVN%2FYU98JnEKQZ4gxKEZVrs8PqL6COuDnfnzyXP0bjc3C4OpLcdpCGTri3mo%2FdXfhxgLT8P3dv%2Fj9c7CerKsRhDvRTxfJPSvJpA6fT9VVqqONBrOvhMXN0SkSgA&X-Amz-Signature=d245e3702bec767296a3d67c784d7ce19b5884f6b75c29f55140dbe2e1741862&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXJ6GTVE%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDn5kMjF70sTim6I1YxOlxLHGJFZaT3xT7AdOFAYQaTYAiEAgZETDwRRQ6YBbwcTDoZ0M85UG15UzgEskN9mSqO3%2F%2BQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgKPlfT4nN%2Fn4GSYCrcA300x0BaR7OxrButbRtlwazGbw2IzU0P6gzDsy7XF9BLLKfPBytQ5pwCShExPAZuKlDBJQF7xWhlFUSLsWGan5d%2FKL40mQGAQ0NwNTpAQ9rM%2FWDv0pg1INxY%2FoLEf0gj%2B7HFhEEG5oPa%2FzjNBRLSne1xmWn5t1fNCRVFGBCjEeSQiEawqTaiw10KOAUzLk4QnJFj0EPsHYLGqcR7Cm4pmEntHVGFQ2siK4DToQ9wujEEJhv6H%2B0GCRDNMpkyQE22S0sAL6X1O74kfVVcemXzd9wanwSD409P9As26H6XxrxZD0fhA4lbWBuiuXRIW%2FUKesyxG9g7zyHm25CdMLef%2FlhxpQcW0tmw05n27v%2BroMZxMUJVfpKawVpTHhjsAgejVh0zOzwhxssCFZsDR32tLiiFoGf3XEEXM1K%2FDnKZrkIx4LVb%2ForSb7GTG7Syji9I9k%2BDnrGiVe0H8B1v91G3N6BkLsGrv2i6nHI0Ogp%2FVzUVjgBn44KYWI4iunthVquKFiuz6BaSqxmDnptk96p%2FCIWB1LcciPD05tfbyOstlyQe8z8xPeeXx7Z%2FN9HPgdVhDsY2A4FZR%2BDohpFKJrfHTQLhGxbRL0AhOO9q2SHnw4L2bpUWRRslvZZkqzwbMJ20xscGOqUB%2B8D6fSrHDMRzYWE28ru9qyrMYGszriBuqEv1PNVC7Q%2Be9t%2B8E13dAZpLfjC3HaRXwUeJWGuX6yiEP8jV020AaNDDMc8a55bCXCVN%2FYU98JnEKQZ4gxKEZVrs8PqL6COuDnfnzyXP0bjc3C4OpLcdpCGTri3mo%2FdXfhxgLT8P3dv%2Fj9c7CerKsRhDvRTxfJPSvJpA6fT9VVqqONBrOvhMXN0SkSgA&X-Amz-Signature=a92432379b6ab7d7726ef156bb3af56020bc683c5950aad87187b4ac9d5db7d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
