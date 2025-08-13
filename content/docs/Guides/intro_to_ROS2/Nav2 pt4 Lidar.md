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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AFK4NNR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGizkICguL77elJpKF1pMyZkJZnTMACFwUnVasKmRPtCAiEAsKhbUvEIcmCuwIOJFBewx9xGaUGNSMNdeSCextKaPkwq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDOaE%2FbHe2fYNvvNoKSrcA07trFSZMTmMhi5Mz%2Fd1cb46lKLCPAcTgn25xNGy%2BalhsXdyn3v6uytZAdpFwOrm3BzX3lHezBYtQmGj%2FJsxV00FiaBYjCxcjFsYxSy5LKMRPGxk4A80Mt%2FNcU4pA5Y%2BTQFvPjnkA3gnrh7FnfT7uYTXYIxqoVknekiSauKwTSiZO9wVtQ7PyUa4bg9SGjPardZNsC8W0MDjOQMTaW4SgeBnKDHN83qJIuOPb%2Fl710k4if5pwaGG1F%2F9CzbXLIagT8FVAR8osl3dacy99ptIv1xQzFRjiGYSyCzQbt8RmAVhWBw856fJQWbGEWetHQ76DWGEg8Yjf%2BRTvi%2FnPcr0X7fKsEy1PF9ErKhixFWoUMM0OEzdhBdT56FR6D34zV%2F9ee4ipUDkAJhIKGmBf5hd%2Bo416HiC%2Fa8c5z9emGYrkViRnCVFVeHhc2xyew9Fq9fVITiK6BeQKyLTO3Lj28rJOmBRRy59XMbAWLJcRWa6Whrhqk7eRSmEi%2Fx2a46rQ%2FvlkPdybpxcALThrmZ0%2FqO%2FBaWoCjzz24Xdx9Qo67%2FnHLSFcoW8%2F2wi%2B%2FEeD9Zagor4NVQjPqfUXCTruZHf36qGbAV3hAfYpvixYjNBZCxBYj6og1Sn7zDaP3epRkCNMOLQ8MQGOqUBUQ3B%2FuJUo2OP1icS2NARbpr0uDI%2F%2BJKf57dc7bGjB9dVtAPWUXUOf5zItbbyeFBC6KASDhKQtq%2BXBLOgV3vdTx9FGqfi6hrG8W%2BEH5fjpcR0I2z0d9X3ELz0SVcEwFAZp5R%2BZqx606ntwJymVVua0eQFCPbIRzemE5xpJ9ISndt%2BSES%2Fl7LR0w27e7tEtHsgITlcrYlzBqwOdalN%2FcWw1iFNNOJT&X-Amz-Signature=6fc00370aa89a4870d9f20251ee166128192f416c6cef1b64e21f2e6cc7a7187&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHZXXSH4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGA5ZVmJQ%2BH948d8vIjVvxlOq4KHOWRzttkURtrh0OjGAiEAxrd%2FMprZv%2BQUKj9TBq01sH9KXnCTOlj8BtX28GtKh3Qq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDN5XSqOIPyqdyKMxBCrcA4VzOyDlNH8Bx21x7t6%2F0JvZG%2Fiqm5TrqZ4hVZGqNX2uATS7m7czSx1uma10VqqRcNekoCK1Px8%2Bwwv7TWwTec7Lvblf%2BJB5cykn%2BWX4jib8%2FYVyJJ8BO%2B94Ir2l61UUzDDh8K6tb2UNT8gOkDyiIQV9UuvnzaqAy5GkWifML0Ytdm6PpF%2B4mMvtgCHRZjKBv%2BGQvqD4dChYu5pj%2FAtzVgzQV8MrUxzIVjahc5NitDFhdCR5hP0OY2UeAXFUuHaVcHKMmXfY9H6aOt9wW28rYSf3PptU2S4eUKYXvldO7RjAkSOvD%2B%2FtLBsz8vY7Zxbpq8cnRZzAaiTV%2BGoZ4%2B%2FCXt510WnrQoX9UfNpHrC2LumrN%2F0Q2iCQShxOGMEu40dXhFOG6WZPYGpCOE38Ns9LlakdP433t4iSRe2RSVhxFEJkrwvLXnLI9EeZAvwE%2Bw7ugKEnNb5B1OQcvcnNB9BulmA%2BHau39cist90Vj6vk%2BNWmClBpsEREwry92bVFMl3aOMW5gOsd3RROnjtQ5KSTfRWBejlb8mHoVGjZDCpgpIENwkAkDipqKK3WLPczSLCbIx%2Bl8qOCQghHyhggKz2CkzRA47qc8%2FHM3cwLqNU4y9nccPhYsRFxNVBosn5%2BMPbQ8MQGOqUB297GAiDNb0JOhWTJPW1BEce%2FBJRunzRuqeyf3tTf7RUGVE7VmPQUbEZaq%2Fg7Z%2BH23P07o97RcCxjTC0xowv%2FyMbIMXhNrC94o%2FgxcobQ9%2FLzq0dPeP2Wlc74Da8Vl8hU2JefGvEbP8Bdbr0XsaIf8DQ9zxdyq%2BMqoE4LSfacdwh0ZRW%2B6IAr4FSk4eOfQs43BXctLtbjsRlZfMBuRqrRvq0ED6Mu&X-Amz-Signature=d069ad975d0d7dea2fa21083270142e773ebe0155438cb977ce4e6e6605e59e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHZXXSH4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGA5ZVmJQ%2BH948d8vIjVvxlOq4KHOWRzttkURtrh0OjGAiEAxrd%2FMprZv%2BQUKj9TBq01sH9KXnCTOlj8BtX28GtKh3Qq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDN5XSqOIPyqdyKMxBCrcA4VzOyDlNH8Bx21x7t6%2F0JvZG%2Fiqm5TrqZ4hVZGqNX2uATS7m7czSx1uma10VqqRcNekoCK1Px8%2Bwwv7TWwTec7Lvblf%2BJB5cykn%2BWX4jib8%2FYVyJJ8BO%2B94Ir2l61UUzDDh8K6tb2UNT8gOkDyiIQV9UuvnzaqAy5GkWifML0Ytdm6PpF%2B4mMvtgCHRZjKBv%2BGQvqD4dChYu5pj%2FAtzVgzQV8MrUxzIVjahc5NitDFhdCR5hP0OY2UeAXFUuHaVcHKMmXfY9H6aOt9wW28rYSf3PptU2S4eUKYXvldO7RjAkSOvD%2B%2FtLBsz8vY7Zxbpq8cnRZzAaiTV%2BGoZ4%2B%2FCXt510WnrQoX9UfNpHrC2LumrN%2F0Q2iCQShxOGMEu40dXhFOG6WZPYGpCOE38Ns9LlakdP433t4iSRe2RSVhxFEJkrwvLXnLI9EeZAvwE%2Bw7ugKEnNb5B1OQcvcnNB9BulmA%2BHau39cist90Vj6vk%2BNWmClBpsEREwry92bVFMl3aOMW5gOsd3RROnjtQ5KSTfRWBejlb8mHoVGjZDCpgpIENwkAkDipqKK3WLPczSLCbIx%2Bl8qOCQghHyhggKz2CkzRA47qc8%2FHM3cwLqNU4y9nccPhYsRFxNVBosn5%2BMPbQ8MQGOqUB297GAiDNb0JOhWTJPW1BEce%2FBJRunzRuqeyf3tTf7RUGVE7VmPQUbEZaq%2Fg7Z%2BH23P07o97RcCxjTC0xowv%2FyMbIMXhNrC94o%2FgxcobQ9%2FLzq0dPeP2Wlc74Da8Vl8hU2JefGvEbP8Bdbr0XsaIf8DQ9zxdyq%2BMqoE4LSfacdwh0ZRW%2B6IAr4FSk4eOfQs43BXctLtbjsRlZfMBuRqrRvq0ED6Mu&X-Amz-Signature=643398afcb7536a799db3beede3be50c6d14f86484c780b3cab0d77b2d42b825&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHZXXSH4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGA5ZVmJQ%2BH948d8vIjVvxlOq4KHOWRzttkURtrh0OjGAiEAxrd%2FMprZv%2BQUKj9TBq01sH9KXnCTOlj8BtX28GtKh3Qq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDN5XSqOIPyqdyKMxBCrcA4VzOyDlNH8Bx21x7t6%2F0JvZG%2Fiqm5TrqZ4hVZGqNX2uATS7m7czSx1uma10VqqRcNekoCK1Px8%2Bwwv7TWwTec7Lvblf%2BJB5cykn%2BWX4jib8%2FYVyJJ8BO%2B94Ir2l61UUzDDh8K6tb2UNT8gOkDyiIQV9UuvnzaqAy5GkWifML0Ytdm6PpF%2B4mMvtgCHRZjKBv%2BGQvqD4dChYu5pj%2FAtzVgzQV8MrUxzIVjahc5NitDFhdCR5hP0OY2UeAXFUuHaVcHKMmXfY9H6aOt9wW28rYSf3PptU2S4eUKYXvldO7RjAkSOvD%2B%2FtLBsz8vY7Zxbpq8cnRZzAaiTV%2BGoZ4%2B%2FCXt510WnrQoX9UfNpHrC2LumrN%2F0Q2iCQShxOGMEu40dXhFOG6WZPYGpCOE38Ns9LlakdP433t4iSRe2RSVhxFEJkrwvLXnLI9EeZAvwE%2Bw7ugKEnNb5B1OQcvcnNB9BulmA%2BHau39cist90Vj6vk%2BNWmClBpsEREwry92bVFMl3aOMW5gOsd3RROnjtQ5KSTfRWBejlb8mHoVGjZDCpgpIENwkAkDipqKK3WLPczSLCbIx%2Bl8qOCQghHyhggKz2CkzRA47qc8%2FHM3cwLqNU4y9nccPhYsRFxNVBosn5%2BMPbQ8MQGOqUB297GAiDNb0JOhWTJPW1BEce%2FBJRunzRuqeyf3tTf7RUGVE7VmPQUbEZaq%2Fg7Z%2BH23P07o97RcCxjTC0xowv%2FyMbIMXhNrC94o%2FgxcobQ9%2FLzq0dPeP2Wlc74Da8Vl8hU2JefGvEbP8Bdbr0XsaIf8DQ9zxdyq%2BMqoE4LSfacdwh0ZRW%2B6IAr4FSk4eOfQs43BXctLtbjsRlZfMBuRqrRvq0ED6Mu&X-Amz-Signature=1ca30896d05181246c4a971c5c1fa2e24c08c24298e3af9002a2509c1ece6031&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHZXXSH4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGA5ZVmJQ%2BH948d8vIjVvxlOq4KHOWRzttkURtrh0OjGAiEAxrd%2FMprZv%2BQUKj9TBq01sH9KXnCTOlj8BtX28GtKh3Qq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDN5XSqOIPyqdyKMxBCrcA4VzOyDlNH8Bx21x7t6%2F0JvZG%2Fiqm5TrqZ4hVZGqNX2uATS7m7czSx1uma10VqqRcNekoCK1Px8%2Bwwv7TWwTec7Lvblf%2BJB5cykn%2BWX4jib8%2FYVyJJ8BO%2B94Ir2l61UUzDDh8K6tb2UNT8gOkDyiIQV9UuvnzaqAy5GkWifML0Ytdm6PpF%2B4mMvtgCHRZjKBv%2BGQvqD4dChYu5pj%2FAtzVgzQV8MrUxzIVjahc5NitDFhdCR5hP0OY2UeAXFUuHaVcHKMmXfY9H6aOt9wW28rYSf3PptU2S4eUKYXvldO7RjAkSOvD%2B%2FtLBsz8vY7Zxbpq8cnRZzAaiTV%2BGoZ4%2B%2FCXt510WnrQoX9UfNpHrC2LumrN%2F0Q2iCQShxOGMEu40dXhFOG6WZPYGpCOE38Ns9LlakdP433t4iSRe2RSVhxFEJkrwvLXnLI9EeZAvwE%2Bw7ugKEnNb5B1OQcvcnNB9BulmA%2BHau39cist90Vj6vk%2BNWmClBpsEREwry92bVFMl3aOMW5gOsd3RROnjtQ5KSTfRWBejlb8mHoVGjZDCpgpIENwkAkDipqKK3WLPczSLCbIx%2Bl8qOCQghHyhggKz2CkzRA47qc8%2FHM3cwLqNU4y9nccPhYsRFxNVBosn5%2BMPbQ8MQGOqUB297GAiDNb0JOhWTJPW1BEce%2FBJRunzRuqeyf3tTf7RUGVE7VmPQUbEZaq%2Fg7Z%2BH23P07o97RcCxjTC0xowv%2FyMbIMXhNrC94o%2FgxcobQ9%2FLzq0dPeP2Wlc74Da8Vl8hU2JefGvEbP8Bdbr0XsaIf8DQ9zxdyq%2BMqoE4LSfacdwh0ZRW%2B6IAr4FSk4eOfQs43BXctLtbjsRlZfMBuRqrRvq0ED6Mu&X-Amz-Signature=9c85bf22f2d7b35d769bddc7f504af6bfdfec66e5eed635a99a7265672303ed6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHZXXSH4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGA5ZVmJQ%2BH948d8vIjVvxlOq4KHOWRzttkURtrh0OjGAiEAxrd%2FMprZv%2BQUKj9TBq01sH9KXnCTOlj8BtX28GtKh3Qq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDN5XSqOIPyqdyKMxBCrcA4VzOyDlNH8Bx21x7t6%2F0JvZG%2Fiqm5TrqZ4hVZGqNX2uATS7m7czSx1uma10VqqRcNekoCK1Px8%2Bwwv7TWwTec7Lvblf%2BJB5cykn%2BWX4jib8%2FYVyJJ8BO%2B94Ir2l61UUzDDh8K6tb2UNT8gOkDyiIQV9UuvnzaqAy5GkWifML0Ytdm6PpF%2B4mMvtgCHRZjKBv%2BGQvqD4dChYu5pj%2FAtzVgzQV8MrUxzIVjahc5NitDFhdCR5hP0OY2UeAXFUuHaVcHKMmXfY9H6aOt9wW28rYSf3PptU2S4eUKYXvldO7RjAkSOvD%2B%2FtLBsz8vY7Zxbpq8cnRZzAaiTV%2BGoZ4%2B%2FCXt510WnrQoX9UfNpHrC2LumrN%2F0Q2iCQShxOGMEu40dXhFOG6WZPYGpCOE38Ns9LlakdP433t4iSRe2RSVhxFEJkrwvLXnLI9EeZAvwE%2Bw7ugKEnNb5B1OQcvcnNB9BulmA%2BHau39cist90Vj6vk%2BNWmClBpsEREwry92bVFMl3aOMW5gOsd3RROnjtQ5KSTfRWBejlb8mHoVGjZDCpgpIENwkAkDipqKK3WLPczSLCbIx%2Bl8qOCQghHyhggKz2CkzRA47qc8%2FHM3cwLqNU4y9nccPhYsRFxNVBosn5%2BMPbQ8MQGOqUB297GAiDNb0JOhWTJPW1BEce%2FBJRunzRuqeyf3tTf7RUGVE7VmPQUbEZaq%2Fg7Z%2BH23P07o97RcCxjTC0xowv%2FyMbIMXhNrC94o%2FgxcobQ9%2FLzq0dPeP2Wlc74Da8Vl8hU2JefGvEbP8Bdbr0XsaIf8DQ9zxdyq%2BMqoE4LSfacdwh0ZRW%2B6IAr4FSk4eOfQs43BXctLtbjsRlZfMBuRqrRvq0ED6Mu&X-Amz-Signature=5d1b3f604c9b80a3c2417ed5ce43cb8738d11272af8d67b90b6eb2d75cbf0369&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHZXXSH4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGA5ZVmJQ%2BH948d8vIjVvxlOq4KHOWRzttkURtrh0OjGAiEAxrd%2FMprZv%2BQUKj9TBq01sH9KXnCTOlj8BtX28GtKh3Qq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDN5XSqOIPyqdyKMxBCrcA4VzOyDlNH8Bx21x7t6%2F0JvZG%2Fiqm5TrqZ4hVZGqNX2uATS7m7czSx1uma10VqqRcNekoCK1Px8%2Bwwv7TWwTec7Lvblf%2BJB5cykn%2BWX4jib8%2FYVyJJ8BO%2B94Ir2l61UUzDDh8K6tb2UNT8gOkDyiIQV9UuvnzaqAy5GkWifML0Ytdm6PpF%2B4mMvtgCHRZjKBv%2BGQvqD4dChYu5pj%2FAtzVgzQV8MrUxzIVjahc5NitDFhdCR5hP0OY2UeAXFUuHaVcHKMmXfY9H6aOt9wW28rYSf3PptU2S4eUKYXvldO7RjAkSOvD%2B%2FtLBsz8vY7Zxbpq8cnRZzAaiTV%2BGoZ4%2B%2FCXt510WnrQoX9UfNpHrC2LumrN%2F0Q2iCQShxOGMEu40dXhFOG6WZPYGpCOE38Ns9LlakdP433t4iSRe2RSVhxFEJkrwvLXnLI9EeZAvwE%2Bw7ugKEnNb5B1OQcvcnNB9BulmA%2BHau39cist90Vj6vk%2BNWmClBpsEREwry92bVFMl3aOMW5gOsd3RROnjtQ5KSTfRWBejlb8mHoVGjZDCpgpIENwkAkDipqKK3WLPczSLCbIx%2Bl8qOCQghHyhggKz2CkzRA47qc8%2FHM3cwLqNU4y9nccPhYsRFxNVBosn5%2BMPbQ8MQGOqUB297GAiDNb0JOhWTJPW1BEce%2FBJRunzRuqeyf3tTf7RUGVE7VmPQUbEZaq%2Fg7Z%2BH23P07o97RcCxjTC0xowv%2FyMbIMXhNrC94o%2FgxcobQ9%2FLzq0dPeP2Wlc74Da8Vl8hU2JefGvEbP8Bdbr0XsaIf8DQ9zxdyq%2BMqoE4LSfacdwh0ZRW%2B6IAr4FSk4eOfQs43BXctLtbjsRlZfMBuRqrRvq0ED6Mu&X-Amz-Signature=0aa7834ce16e61fe42c2679d35ad777fa730219eda33bc8c2f815f8bc79546b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHZXXSH4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGA5ZVmJQ%2BH948d8vIjVvxlOq4KHOWRzttkURtrh0OjGAiEAxrd%2FMprZv%2BQUKj9TBq01sH9KXnCTOlj8BtX28GtKh3Qq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDN5XSqOIPyqdyKMxBCrcA4VzOyDlNH8Bx21x7t6%2F0JvZG%2Fiqm5TrqZ4hVZGqNX2uATS7m7czSx1uma10VqqRcNekoCK1Px8%2Bwwv7TWwTec7Lvblf%2BJB5cykn%2BWX4jib8%2FYVyJJ8BO%2B94Ir2l61UUzDDh8K6tb2UNT8gOkDyiIQV9UuvnzaqAy5GkWifML0Ytdm6PpF%2B4mMvtgCHRZjKBv%2BGQvqD4dChYu5pj%2FAtzVgzQV8MrUxzIVjahc5NitDFhdCR5hP0OY2UeAXFUuHaVcHKMmXfY9H6aOt9wW28rYSf3PptU2S4eUKYXvldO7RjAkSOvD%2B%2FtLBsz8vY7Zxbpq8cnRZzAaiTV%2BGoZ4%2B%2FCXt510WnrQoX9UfNpHrC2LumrN%2F0Q2iCQShxOGMEu40dXhFOG6WZPYGpCOE38Ns9LlakdP433t4iSRe2RSVhxFEJkrwvLXnLI9EeZAvwE%2Bw7ugKEnNb5B1OQcvcnNB9BulmA%2BHau39cist90Vj6vk%2BNWmClBpsEREwry92bVFMl3aOMW5gOsd3RROnjtQ5KSTfRWBejlb8mHoVGjZDCpgpIENwkAkDipqKK3WLPczSLCbIx%2Bl8qOCQghHyhggKz2CkzRA47qc8%2FHM3cwLqNU4y9nccPhYsRFxNVBosn5%2BMPbQ8MQGOqUB297GAiDNb0JOhWTJPW1BEce%2FBJRunzRuqeyf3tTf7RUGVE7VmPQUbEZaq%2Fg7Z%2BH23P07o97RcCxjTC0xowv%2FyMbIMXhNrC94o%2FgxcobQ9%2FLzq0dPeP2Wlc74Da8Vl8hU2JefGvEbP8Bdbr0XsaIf8DQ9zxdyq%2BMqoE4LSfacdwh0ZRW%2B6IAr4FSk4eOfQs43BXctLtbjsRlZfMBuRqrRvq0ED6Mu&X-Amz-Signature=e703f49e95afc2ead477659bfe5a6cbadf19aee89c7fc2b7522a2f1984d1678d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHZXXSH4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGA5ZVmJQ%2BH948d8vIjVvxlOq4KHOWRzttkURtrh0OjGAiEAxrd%2FMprZv%2BQUKj9TBq01sH9KXnCTOlj8BtX28GtKh3Qq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDN5XSqOIPyqdyKMxBCrcA4VzOyDlNH8Bx21x7t6%2F0JvZG%2Fiqm5TrqZ4hVZGqNX2uATS7m7czSx1uma10VqqRcNekoCK1Px8%2Bwwv7TWwTec7Lvblf%2BJB5cykn%2BWX4jib8%2FYVyJJ8BO%2B94Ir2l61UUzDDh8K6tb2UNT8gOkDyiIQV9UuvnzaqAy5GkWifML0Ytdm6PpF%2B4mMvtgCHRZjKBv%2BGQvqD4dChYu5pj%2FAtzVgzQV8MrUxzIVjahc5NitDFhdCR5hP0OY2UeAXFUuHaVcHKMmXfY9H6aOt9wW28rYSf3PptU2S4eUKYXvldO7RjAkSOvD%2B%2FtLBsz8vY7Zxbpq8cnRZzAaiTV%2BGoZ4%2B%2FCXt510WnrQoX9UfNpHrC2LumrN%2F0Q2iCQShxOGMEu40dXhFOG6WZPYGpCOE38Ns9LlakdP433t4iSRe2RSVhxFEJkrwvLXnLI9EeZAvwE%2Bw7ugKEnNb5B1OQcvcnNB9BulmA%2BHau39cist90Vj6vk%2BNWmClBpsEREwry92bVFMl3aOMW5gOsd3RROnjtQ5KSTfRWBejlb8mHoVGjZDCpgpIENwkAkDipqKK3WLPczSLCbIx%2Bl8qOCQghHyhggKz2CkzRA47qc8%2FHM3cwLqNU4y9nccPhYsRFxNVBosn5%2BMPbQ8MQGOqUB297GAiDNb0JOhWTJPW1BEce%2FBJRunzRuqeyf3tTf7RUGVE7VmPQUbEZaq%2Fg7Z%2BH23P07o97RcCxjTC0xowv%2FyMbIMXhNrC94o%2FgxcobQ9%2FLzq0dPeP2Wlc74Da8Vl8hU2JefGvEbP8Bdbr0XsaIf8DQ9zxdyq%2BMqoE4LSfacdwh0ZRW%2B6IAr4FSk4eOfQs43BXctLtbjsRlZfMBuRqrRvq0ED6Mu&X-Amz-Signature=b03d58abf9ac5689fcfe6beb8efcdfcc5de033808a5ec0ad4de7f2073740f636&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHZXXSH4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGA5ZVmJQ%2BH948d8vIjVvxlOq4KHOWRzttkURtrh0OjGAiEAxrd%2FMprZv%2BQUKj9TBq01sH9KXnCTOlj8BtX28GtKh3Qq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDN5XSqOIPyqdyKMxBCrcA4VzOyDlNH8Bx21x7t6%2F0JvZG%2Fiqm5TrqZ4hVZGqNX2uATS7m7czSx1uma10VqqRcNekoCK1Px8%2Bwwv7TWwTec7Lvblf%2BJB5cykn%2BWX4jib8%2FYVyJJ8BO%2B94Ir2l61UUzDDh8K6tb2UNT8gOkDyiIQV9UuvnzaqAy5GkWifML0Ytdm6PpF%2B4mMvtgCHRZjKBv%2BGQvqD4dChYu5pj%2FAtzVgzQV8MrUxzIVjahc5NitDFhdCR5hP0OY2UeAXFUuHaVcHKMmXfY9H6aOt9wW28rYSf3PptU2S4eUKYXvldO7RjAkSOvD%2B%2FtLBsz8vY7Zxbpq8cnRZzAaiTV%2BGoZ4%2B%2FCXt510WnrQoX9UfNpHrC2LumrN%2F0Q2iCQShxOGMEu40dXhFOG6WZPYGpCOE38Ns9LlakdP433t4iSRe2RSVhxFEJkrwvLXnLI9EeZAvwE%2Bw7ugKEnNb5B1OQcvcnNB9BulmA%2BHau39cist90Vj6vk%2BNWmClBpsEREwry92bVFMl3aOMW5gOsd3RROnjtQ5KSTfRWBejlb8mHoVGjZDCpgpIENwkAkDipqKK3WLPczSLCbIx%2Bl8qOCQghHyhggKz2CkzRA47qc8%2FHM3cwLqNU4y9nccPhYsRFxNVBosn5%2BMPbQ8MQGOqUB297GAiDNb0JOhWTJPW1BEce%2FBJRunzRuqeyf3tTf7RUGVE7VmPQUbEZaq%2Fg7Z%2BH23P07o97RcCxjTC0xowv%2FyMbIMXhNrC94o%2FgxcobQ9%2FLzq0dPeP2Wlc74Da8Vl8hU2JefGvEbP8Bdbr0XsaIf8DQ9zxdyq%2BMqoE4LSfacdwh0ZRW%2B6IAr4FSk4eOfQs43BXctLtbjsRlZfMBuRqrRvq0ED6Mu&X-Amz-Signature=d8a5e27d48daf61e9976d07ae58306120dee7bcf5221b96a3e9c7a3aed26f0ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHZXXSH4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGA5ZVmJQ%2BH948d8vIjVvxlOq4KHOWRzttkURtrh0OjGAiEAxrd%2FMprZv%2BQUKj9TBq01sH9KXnCTOlj8BtX28GtKh3Qq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDN5XSqOIPyqdyKMxBCrcA4VzOyDlNH8Bx21x7t6%2F0JvZG%2Fiqm5TrqZ4hVZGqNX2uATS7m7czSx1uma10VqqRcNekoCK1Px8%2Bwwv7TWwTec7Lvblf%2BJB5cykn%2BWX4jib8%2FYVyJJ8BO%2B94Ir2l61UUzDDh8K6tb2UNT8gOkDyiIQV9UuvnzaqAy5GkWifML0Ytdm6PpF%2B4mMvtgCHRZjKBv%2BGQvqD4dChYu5pj%2FAtzVgzQV8MrUxzIVjahc5NitDFhdCR5hP0OY2UeAXFUuHaVcHKMmXfY9H6aOt9wW28rYSf3PptU2S4eUKYXvldO7RjAkSOvD%2B%2FtLBsz8vY7Zxbpq8cnRZzAaiTV%2BGoZ4%2B%2FCXt510WnrQoX9UfNpHrC2LumrN%2F0Q2iCQShxOGMEu40dXhFOG6WZPYGpCOE38Ns9LlakdP433t4iSRe2RSVhxFEJkrwvLXnLI9EeZAvwE%2Bw7ugKEnNb5B1OQcvcnNB9BulmA%2BHau39cist90Vj6vk%2BNWmClBpsEREwry92bVFMl3aOMW5gOsd3RROnjtQ5KSTfRWBejlb8mHoVGjZDCpgpIENwkAkDipqKK3WLPczSLCbIx%2Bl8qOCQghHyhggKz2CkzRA47qc8%2FHM3cwLqNU4y9nccPhYsRFxNVBosn5%2BMPbQ8MQGOqUB297GAiDNb0JOhWTJPW1BEce%2FBJRunzRuqeyf3tTf7RUGVE7VmPQUbEZaq%2Fg7Z%2BH23P07o97RcCxjTC0xowv%2FyMbIMXhNrC94o%2FgxcobQ9%2FLzq0dPeP2Wlc74Da8Vl8hU2JefGvEbP8Bdbr0XsaIf8DQ9zxdyq%2BMqoE4LSfacdwh0ZRW%2B6IAr4FSk4eOfQs43BXctLtbjsRlZfMBuRqrRvq0ED6Mu&X-Amz-Signature=9c85bf22f2d7b35d769bddc7f504af6bfdfec66e5eed635a99a7265672303ed6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
