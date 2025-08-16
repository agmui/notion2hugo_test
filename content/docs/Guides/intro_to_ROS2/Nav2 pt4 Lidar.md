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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IPTM6GE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCID%2FbFFYVCEaXhvDhGqaXuVLonXkg4P695HKINngF%2F%2BxBAiEA5JVA%2F1UAnnlaFNcRHgua87Ves5uzeYggsAPApDCssbUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDOQVsDMS5lBRLZL6ZSrcA8M5TT5LwKyhaeM6Jxr4%2FiuiToEY%2F8oOInJM6CvJkLuaoSj5%2B2IsSBBU57LF%2FtYM9MSts3HEQDCFDs9LGtSVFLHYVNnKMMSak44%2BShDlJ9CNuuRn1KhLeWf7%2BuovTxEHULi3e%2FUDQwcnXfW1EnnplWrglkYPhHQak7%2BKwUF2qliH0v2ps%2B25sCZnc1a5kTTOE9HcTjCWUj9So5gNPcMvXiuy495T%2BOr1Uv3pCqAcSaXwEjqdAfYRBgDKcnHNLmVWbHvydFCb1xjlZv4yNsnbvMT2IjQKcDd9d2SaFBNgHXtvvPEe%2BuNdarrYjJefBRB8cQ5xGllHP4fGr0MZP1tfKD8Zckzyx7hZDTTXwo94xRCc6Ct9Dr6ntU9AZJYJzNskgcp9hAfiYDhtOLIS0DLZd5bdUYYHVt%2F8lfZ4aYYu7GvYEwzjr5wq7P1uJ%2B3xSzW8uNrD2rr7W6149gyh8OC7GBa5eEnnj%2BeD%2FpKB4fsaklKt9%2FVstkA9Q9Xjh4D3rKh350nNv90Yv1pSB5l%2F9VttkRMTwOwVSPo%2BM%2BdKxUG%2B0d1nFl2vUStYow6eJxzAC8g%2BBR8mAEkkX5mmQqivcYBBmTIPzLCn4SfSbyZ8IC76gRWRjqegCjEoDr5ekIEQMNiKgMUGOqUBaic9hyMRws8a%2BbPNnRLwfBCiLJGRC6qsNAXlSCAVy9IhJNNWdGRj6%2BFWQJEF%2FJw6tjsLHk27s9lH7BiAvORis4X%2BxiOrI0QgBymeqNiLOp16a6WWJy8%2BE51AY9UisiFzTElgm9At4olNaO4Fs0ZvA8ead48mFP%2FHuUHYgVDmV5CpBmvJw%2Bld1t14uNFQYxYobY%2BrRQl%2BnglcnG24b%2BPSsoXvFSRX&X-Amz-Signature=3cd1955ff1cbdd7edc7b1930bd0b5d14f1f7d8fd3807ff503e00af5a416ec361&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633KTYVM4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIF5H3qxiOvtUlz0qCgkhbF3axYf6QcJ7RywCKWM3SiXxAiEAyDFatU4c8vKPFGBfP6qjuSgg04ItMoxgduADvl7viGUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJssYpfOB9IS%2FSv%2FzSrcAyXCWdnXVvb3xkuTam2C4ccoCukfEgpdhWZAhxeoVeb2g6cP0t59GGcXQEWuuv6ujmngPh1ebfDUm6jbZMB4Es3OPA%2FBAZeWv6OUuuYMvAwCDFUIrnxBgluEe8Bcu2Oldb6ZuPOfnrhEyWHxsdUBI5YvY%2Fxa8n415WIAmSG%2BjE%2B6Dqvz1pVrddyC4B%2Bgd43bCl0aBFgwbnwJ7nFNQ%2BNrYA9mXG4OInvGa3NEllgv2QxkjpwvBR5caX2lHdQeXXqPlUsZTnJ3A%2BHhXAGGf7Q7Ob0PDAnMLHRXB8jXjMrmmUpnPCVDeaO0CRcAos0GYN5j%2FDQn%2BLI3I8Wgr7z6Vu%2FIEH7wCb%2BtXjNSbHIg%2F1h7pGgA%2Bzf25FR6Z13Yk07GkZV9AeOy%2FOWBMRGqCL0UcpBgY8A7rfpW91sIqzL227s9vBbBT347pqplLBiL39myFkgGdQomqXK1vCSzz9f36LHpDBIH75%2BEZIAcrkY6Az%2F6Jofyorj9bTODyYrHoNvsvR4ic0EWuLsLRz0TXyWspM5%2BLEpFxaKcR1aQpGopgVdjC6b0X5arHTgVvmZxY4VXmF%2FLN6Hw71mGT2JDQBQyLCZtMnYPOnxQyTk6hASbfKBSg7%2BasgMu6RsoCj5%2FaLmEMKeJgMUGOqUBO3E42qdKDVKMtTxyCn8EXHRIhtraKAuQZamHfJD4mmkY0WGmfvyrj%2Fv6Za0gImt4RV6rvfZBzGxjqFmcNkwrwLS4AckhvTqW9B2MJYg%2Bfr6lb343Msu7JmYa1QL9AomhBcHlclKH%2BYk5Y1gvuk7Qm%2FMghiIJum4gTlnSqmT6ke8mTmNQxfi5S9OjE0HGC1cEqnMToTEbUxsHXfqGmdQfwmPxN4bn&X-Amz-Signature=e8d89f5a0fe1a250b2998d61891b3c3512839d891d8c8f5bf93d43847e95ae1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633KTYVM4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIF5H3qxiOvtUlz0qCgkhbF3axYf6QcJ7RywCKWM3SiXxAiEAyDFatU4c8vKPFGBfP6qjuSgg04ItMoxgduADvl7viGUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJssYpfOB9IS%2FSv%2FzSrcAyXCWdnXVvb3xkuTam2C4ccoCukfEgpdhWZAhxeoVeb2g6cP0t59GGcXQEWuuv6ujmngPh1ebfDUm6jbZMB4Es3OPA%2FBAZeWv6OUuuYMvAwCDFUIrnxBgluEe8Bcu2Oldb6ZuPOfnrhEyWHxsdUBI5YvY%2Fxa8n415WIAmSG%2BjE%2B6Dqvz1pVrddyC4B%2Bgd43bCl0aBFgwbnwJ7nFNQ%2BNrYA9mXG4OInvGa3NEllgv2QxkjpwvBR5caX2lHdQeXXqPlUsZTnJ3A%2BHhXAGGf7Q7Ob0PDAnMLHRXB8jXjMrmmUpnPCVDeaO0CRcAos0GYN5j%2FDQn%2BLI3I8Wgr7z6Vu%2FIEH7wCb%2BtXjNSbHIg%2F1h7pGgA%2Bzf25FR6Z13Yk07GkZV9AeOy%2FOWBMRGqCL0UcpBgY8A7rfpW91sIqzL227s9vBbBT347pqplLBiL39myFkgGdQomqXK1vCSzz9f36LHpDBIH75%2BEZIAcrkY6Az%2F6Jofyorj9bTODyYrHoNvsvR4ic0EWuLsLRz0TXyWspM5%2BLEpFxaKcR1aQpGopgVdjC6b0X5arHTgVvmZxY4VXmF%2FLN6Hw71mGT2JDQBQyLCZtMnYPOnxQyTk6hASbfKBSg7%2BasgMu6RsoCj5%2FaLmEMKeJgMUGOqUBO3E42qdKDVKMtTxyCn8EXHRIhtraKAuQZamHfJD4mmkY0WGmfvyrj%2Fv6Za0gImt4RV6rvfZBzGxjqFmcNkwrwLS4AckhvTqW9B2MJYg%2Bfr6lb343Msu7JmYa1QL9AomhBcHlclKH%2BYk5Y1gvuk7Qm%2FMghiIJum4gTlnSqmT6ke8mTmNQxfi5S9OjE0HGC1cEqnMToTEbUxsHXfqGmdQfwmPxN4bn&X-Amz-Signature=3bb2a0ede88d83c3e931f99778145d35634e91bcab44194aa1806c96179c26da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633KTYVM4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIF5H3qxiOvtUlz0qCgkhbF3axYf6QcJ7RywCKWM3SiXxAiEAyDFatU4c8vKPFGBfP6qjuSgg04ItMoxgduADvl7viGUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJssYpfOB9IS%2FSv%2FzSrcAyXCWdnXVvb3xkuTam2C4ccoCukfEgpdhWZAhxeoVeb2g6cP0t59GGcXQEWuuv6ujmngPh1ebfDUm6jbZMB4Es3OPA%2FBAZeWv6OUuuYMvAwCDFUIrnxBgluEe8Bcu2Oldb6ZuPOfnrhEyWHxsdUBI5YvY%2Fxa8n415WIAmSG%2BjE%2B6Dqvz1pVrddyC4B%2Bgd43bCl0aBFgwbnwJ7nFNQ%2BNrYA9mXG4OInvGa3NEllgv2QxkjpwvBR5caX2lHdQeXXqPlUsZTnJ3A%2BHhXAGGf7Q7Ob0PDAnMLHRXB8jXjMrmmUpnPCVDeaO0CRcAos0GYN5j%2FDQn%2BLI3I8Wgr7z6Vu%2FIEH7wCb%2BtXjNSbHIg%2F1h7pGgA%2Bzf25FR6Z13Yk07GkZV9AeOy%2FOWBMRGqCL0UcpBgY8A7rfpW91sIqzL227s9vBbBT347pqplLBiL39myFkgGdQomqXK1vCSzz9f36LHpDBIH75%2BEZIAcrkY6Az%2F6Jofyorj9bTODyYrHoNvsvR4ic0EWuLsLRz0TXyWspM5%2BLEpFxaKcR1aQpGopgVdjC6b0X5arHTgVvmZxY4VXmF%2FLN6Hw71mGT2JDQBQyLCZtMnYPOnxQyTk6hASbfKBSg7%2BasgMu6RsoCj5%2FaLmEMKeJgMUGOqUBO3E42qdKDVKMtTxyCn8EXHRIhtraKAuQZamHfJD4mmkY0WGmfvyrj%2Fv6Za0gImt4RV6rvfZBzGxjqFmcNkwrwLS4AckhvTqW9B2MJYg%2Bfr6lb343Msu7JmYa1QL9AomhBcHlclKH%2BYk5Y1gvuk7Qm%2FMghiIJum4gTlnSqmT6ke8mTmNQxfi5S9OjE0HGC1cEqnMToTEbUxsHXfqGmdQfwmPxN4bn&X-Amz-Signature=711c17a8d537f9b2bf46a8bd937b8e83c93c204440469de57355a7f8b9a8c489&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633KTYVM4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIF5H3qxiOvtUlz0qCgkhbF3axYf6QcJ7RywCKWM3SiXxAiEAyDFatU4c8vKPFGBfP6qjuSgg04ItMoxgduADvl7viGUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJssYpfOB9IS%2FSv%2FzSrcAyXCWdnXVvb3xkuTam2C4ccoCukfEgpdhWZAhxeoVeb2g6cP0t59GGcXQEWuuv6ujmngPh1ebfDUm6jbZMB4Es3OPA%2FBAZeWv6OUuuYMvAwCDFUIrnxBgluEe8Bcu2Oldb6ZuPOfnrhEyWHxsdUBI5YvY%2Fxa8n415WIAmSG%2BjE%2B6Dqvz1pVrddyC4B%2Bgd43bCl0aBFgwbnwJ7nFNQ%2BNrYA9mXG4OInvGa3NEllgv2QxkjpwvBR5caX2lHdQeXXqPlUsZTnJ3A%2BHhXAGGf7Q7Ob0PDAnMLHRXB8jXjMrmmUpnPCVDeaO0CRcAos0GYN5j%2FDQn%2BLI3I8Wgr7z6Vu%2FIEH7wCb%2BtXjNSbHIg%2F1h7pGgA%2Bzf25FR6Z13Yk07GkZV9AeOy%2FOWBMRGqCL0UcpBgY8A7rfpW91sIqzL227s9vBbBT347pqplLBiL39myFkgGdQomqXK1vCSzz9f36LHpDBIH75%2BEZIAcrkY6Az%2F6Jofyorj9bTODyYrHoNvsvR4ic0EWuLsLRz0TXyWspM5%2BLEpFxaKcR1aQpGopgVdjC6b0X5arHTgVvmZxY4VXmF%2FLN6Hw71mGT2JDQBQyLCZtMnYPOnxQyTk6hASbfKBSg7%2BasgMu6RsoCj5%2FaLmEMKeJgMUGOqUBO3E42qdKDVKMtTxyCn8EXHRIhtraKAuQZamHfJD4mmkY0WGmfvyrj%2Fv6Za0gImt4RV6rvfZBzGxjqFmcNkwrwLS4AckhvTqW9B2MJYg%2Bfr6lb343Msu7JmYa1QL9AomhBcHlclKH%2BYk5Y1gvuk7Qm%2FMghiIJum4gTlnSqmT6ke8mTmNQxfi5S9OjE0HGC1cEqnMToTEbUxsHXfqGmdQfwmPxN4bn&X-Amz-Signature=e5d7141a49785bef117eaea19f75cebf699c5b7192cccb623a78b49f775afe55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633KTYVM4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIF5H3qxiOvtUlz0qCgkhbF3axYf6QcJ7RywCKWM3SiXxAiEAyDFatU4c8vKPFGBfP6qjuSgg04ItMoxgduADvl7viGUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJssYpfOB9IS%2FSv%2FzSrcAyXCWdnXVvb3xkuTam2C4ccoCukfEgpdhWZAhxeoVeb2g6cP0t59GGcXQEWuuv6ujmngPh1ebfDUm6jbZMB4Es3OPA%2FBAZeWv6OUuuYMvAwCDFUIrnxBgluEe8Bcu2Oldb6ZuPOfnrhEyWHxsdUBI5YvY%2Fxa8n415WIAmSG%2BjE%2B6Dqvz1pVrddyC4B%2Bgd43bCl0aBFgwbnwJ7nFNQ%2BNrYA9mXG4OInvGa3NEllgv2QxkjpwvBR5caX2lHdQeXXqPlUsZTnJ3A%2BHhXAGGf7Q7Ob0PDAnMLHRXB8jXjMrmmUpnPCVDeaO0CRcAos0GYN5j%2FDQn%2BLI3I8Wgr7z6Vu%2FIEH7wCb%2BtXjNSbHIg%2F1h7pGgA%2Bzf25FR6Z13Yk07GkZV9AeOy%2FOWBMRGqCL0UcpBgY8A7rfpW91sIqzL227s9vBbBT347pqplLBiL39myFkgGdQomqXK1vCSzz9f36LHpDBIH75%2BEZIAcrkY6Az%2F6Jofyorj9bTODyYrHoNvsvR4ic0EWuLsLRz0TXyWspM5%2BLEpFxaKcR1aQpGopgVdjC6b0X5arHTgVvmZxY4VXmF%2FLN6Hw71mGT2JDQBQyLCZtMnYPOnxQyTk6hASbfKBSg7%2BasgMu6RsoCj5%2FaLmEMKeJgMUGOqUBO3E42qdKDVKMtTxyCn8EXHRIhtraKAuQZamHfJD4mmkY0WGmfvyrj%2Fv6Za0gImt4RV6rvfZBzGxjqFmcNkwrwLS4AckhvTqW9B2MJYg%2Bfr6lb343Msu7JmYa1QL9AomhBcHlclKH%2BYk5Y1gvuk7Qm%2FMghiIJum4gTlnSqmT6ke8mTmNQxfi5S9OjE0HGC1cEqnMToTEbUxsHXfqGmdQfwmPxN4bn&X-Amz-Signature=e49cb649b03bc436603e5abbbfc71c1d0c208ae390597dfbe2383ce6bc811087&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633KTYVM4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIF5H3qxiOvtUlz0qCgkhbF3axYf6QcJ7RywCKWM3SiXxAiEAyDFatU4c8vKPFGBfP6qjuSgg04ItMoxgduADvl7viGUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJssYpfOB9IS%2FSv%2FzSrcAyXCWdnXVvb3xkuTam2C4ccoCukfEgpdhWZAhxeoVeb2g6cP0t59GGcXQEWuuv6ujmngPh1ebfDUm6jbZMB4Es3OPA%2FBAZeWv6OUuuYMvAwCDFUIrnxBgluEe8Bcu2Oldb6ZuPOfnrhEyWHxsdUBI5YvY%2Fxa8n415WIAmSG%2BjE%2B6Dqvz1pVrddyC4B%2Bgd43bCl0aBFgwbnwJ7nFNQ%2BNrYA9mXG4OInvGa3NEllgv2QxkjpwvBR5caX2lHdQeXXqPlUsZTnJ3A%2BHhXAGGf7Q7Ob0PDAnMLHRXB8jXjMrmmUpnPCVDeaO0CRcAos0GYN5j%2FDQn%2BLI3I8Wgr7z6Vu%2FIEH7wCb%2BtXjNSbHIg%2F1h7pGgA%2Bzf25FR6Z13Yk07GkZV9AeOy%2FOWBMRGqCL0UcpBgY8A7rfpW91sIqzL227s9vBbBT347pqplLBiL39myFkgGdQomqXK1vCSzz9f36LHpDBIH75%2BEZIAcrkY6Az%2F6Jofyorj9bTODyYrHoNvsvR4ic0EWuLsLRz0TXyWspM5%2BLEpFxaKcR1aQpGopgVdjC6b0X5arHTgVvmZxY4VXmF%2FLN6Hw71mGT2JDQBQyLCZtMnYPOnxQyTk6hASbfKBSg7%2BasgMu6RsoCj5%2FaLmEMKeJgMUGOqUBO3E42qdKDVKMtTxyCn8EXHRIhtraKAuQZamHfJD4mmkY0WGmfvyrj%2Fv6Za0gImt4RV6rvfZBzGxjqFmcNkwrwLS4AckhvTqW9B2MJYg%2Bfr6lb343Msu7JmYa1QL9AomhBcHlclKH%2BYk5Y1gvuk7Qm%2FMghiIJum4gTlnSqmT6ke8mTmNQxfi5S9OjE0HGC1cEqnMToTEbUxsHXfqGmdQfwmPxN4bn&X-Amz-Signature=c6004c51e42d14cf42c2daefaa7c5a63841ebf606f10d78cc37a1a2c8de06635&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633KTYVM4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIF5H3qxiOvtUlz0qCgkhbF3axYf6QcJ7RywCKWM3SiXxAiEAyDFatU4c8vKPFGBfP6qjuSgg04ItMoxgduADvl7viGUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJssYpfOB9IS%2FSv%2FzSrcAyXCWdnXVvb3xkuTam2C4ccoCukfEgpdhWZAhxeoVeb2g6cP0t59GGcXQEWuuv6ujmngPh1ebfDUm6jbZMB4Es3OPA%2FBAZeWv6OUuuYMvAwCDFUIrnxBgluEe8Bcu2Oldb6ZuPOfnrhEyWHxsdUBI5YvY%2Fxa8n415WIAmSG%2BjE%2B6Dqvz1pVrddyC4B%2Bgd43bCl0aBFgwbnwJ7nFNQ%2BNrYA9mXG4OInvGa3NEllgv2QxkjpwvBR5caX2lHdQeXXqPlUsZTnJ3A%2BHhXAGGf7Q7Ob0PDAnMLHRXB8jXjMrmmUpnPCVDeaO0CRcAos0GYN5j%2FDQn%2BLI3I8Wgr7z6Vu%2FIEH7wCb%2BtXjNSbHIg%2F1h7pGgA%2Bzf25FR6Z13Yk07GkZV9AeOy%2FOWBMRGqCL0UcpBgY8A7rfpW91sIqzL227s9vBbBT347pqplLBiL39myFkgGdQomqXK1vCSzz9f36LHpDBIH75%2BEZIAcrkY6Az%2F6Jofyorj9bTODyYrHoNvsvR4ic0EWuLsLRz0TXyWspM5%2BLEpFxaKcR1aQpGopgVdjC6b0X5arHTgVvmZxY4VXmF%2FLN6Hw71mGT2JDQBQyLCZtMnYPOnxQyTk6hASbfKBSg7%2BasgMu6RsoCj5%2FaLmEMKeJgMUGOqUBO3E42qdKDVKMtTxyCn8EXHRIhtraKAuQZamHfJD4mmkY0WGmfvyrj%2Fv6Za0gImt4RV6rvfZBzGxjqFmcNkwrwLS4AckhvTqW9B2MJYg%2Bfr6lb343Msu7JmYa1QL9AomhBcHlclKH%2BYk5Y1gvuk7Qm%2FMghiIJum4gTlnSqmT6ke8mTmNQxfi5S9OjE0HGC1cEqnMToTEbUxsHXfqGmdQfwmPxN4bn&X-Amz-Signature=a1c234a7fd50c5aca8a715d63978e14702096e3dbfb134b98ebab92c65721dfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633KTYVM4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIF5H3qxiOvtUlz0qCgkhbF3axYf6QcJ7RywCKWM3SiXxAiEAyDFatU4c8vKPFGBfP6qjuSgg04ItMoxgduADvl7viGUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJssYpfOB9IS%2FSv%2FzSrcAyXCWdnXVvb3xkuTam2C4ccoCukfEgpdhWZAhxeoVeb2g6cP0t59GGcXQEWuuv6ujmngPh1ebfDUm6jbZMB4Es3OPA%2FBAZeWv6OUuuYMvAwCDFUIrnxBgluEe8Bcu2Oldb6ZuPOfnrhEyWHxsdUBI5YvY%2Fxa8n415WIAmSG%2BjE%2B6Dqvz1pVrddyC4B%2Bgd43bCl0aBFgwbnwJ7nFNQ%2BNrYA9mXG4OInvGa3NEllgv2QxkjpwvBR5caX2lHdQeXXqPlUsZTnJ3A%2BHhXAGGf7Q7Ob0PDAnMLHRXB8jXjMrmmUpnPCVDeaO0CRcAos0GYN5j%2FDQn%2BLI3I8Wgr7z6Vu%2FIEH7wCb%2BtXjNSbHIg%2F1h7pGgA%2Bzf25FR6Z13Yk07GkZV9AeOy%2FOWBMRGqCL0UcpBgY8A7rfpW91sIqzL227s9vBbBT347pqplLBiL39myFkgGdQomqXK1vCSzz9f36LHpDBIH75%2BEZIAcrkY6Az%2F6Jofyorj9bTODyYrHoNvsvR4ic0EWuLsLRz0TXyWspM5%2BLEpFxaKcR1aQpGopgVdjC6b0X5arHTgVvmZxY4VXmF%2FLN6Hw71mGT2JDQBQyLCZtMnYPOnxQyTk6hASbfKBSg7%2BasgMu6RsoCj5%2FaLmEMKeJgMUGOqUBO3E42qdKDVKMtTxyCn8EXHRIhtraKAuQZamHfJD4mmkY0WGmfvyrj%2Fv6Za0gImt4RV6rvfZBzGxjqFmcNkwrwLS4AckhvTqW9B2MJYg%2Bfr6lb343Msu7JmYa1QL9AomhBcHlclKH%2BYk5Y1gvuk7Qm%2FMghiIJum4gTlnSqmT6ke8mTmNQxfi5S9OjE0HGC1cEqnMToTEbUxsHXfqGmdQfwmPxN4bn&X-Amz-Signature=c9116506b66b1b85290069dc6ad959ad95d363fb577474df26ad3025163a5113&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633KTYVM4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIF5H3qxiOvtUlz0qCgkhbF3axYf6QcJ7RywCKWM3SiXxAiEAyDFatU4c8vKPFGBfP6qjuSgg04ItMoxgduADvl7viGUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJssYpfOB9IS%2FSv%2FzSrcAyXCWdnXVvb3xkuTam2C4ccoCukfEgpdhWZAhxeoVeb2g6cP0t59GGcXQEWuuv6ujmngPh1ebfDUm6jbZMB4Es3OPA%2FBAZeWv6OUuuYMvAwCDFUIrnxBgluEe8Bcu2Oldb6ZuPOfnrhEyWHxsdUBI5YvY%2Fxa8n415WIAmSG%2BjE%2B6Dqvz1pVrddyC4B%2Bgd43bCl0aBFgwbnwJ7nFNQ%2BNrYA9mXG4OInvGa3NEllgv2QxkjpwvBR5caX2lHdQeXXqPlUsZTnJ3A%2BHhXAGGf7Q7Ob0PDAnMLHRXB8jXjMrmmUpnPCVDeaO0CRcAos0GYN5j%2FDQn%2BLI3I8Wgr7z6Vu%2FIEH7wCb%2BtXjNSbHIg%2F1h7pGgA%2Bzf25FR6Z13Yk07GkZV9AeOy%2FOWBMRGqCL0UcpBgY8A7rfpW91sIqzL227s9vBbBT347pqplLBiL39myFkgGdQomqXK1vCSzz9f36LHpDBIH75%2BEZIAcrkY6Az%2F6Jofyorj9bTODyYrHoNvsvR4ic0EWuLsLRz0TXyWspM5%2BLEpFxaKcR1aQpGopgVdjC6b0X5arHTgVvmZxY4VXmF%2FLN6Hw71mGT2JDQBQyLCZtMnYPOnxQyTk6hASbfKBSg7%2BasgMu6RsoCj5%2FaLmEMKeJgMUGOqUBO3E42qdKDVKMtTxyCn8EXHRIhtraKAuQZamHfJD4mmkY0WGmfvyrj%2Fv6Za0gImt4RV6rvfZBzGxjqFmcNkwrwLS4AckhvTqW9B2MJYg%2Bfr6lb343Msu7JmYa1QL9AomhBcHlclKH%2BYk5Y1gvuk7Qm%2FMghiIJum4gTlnSqmT6ke8mTmNQxfi5S9OjE0HGC1cEqnMToTEbUxsHXfqGmdQfwmPxN4bn&X-Amz-Signature=d11a4c6c4cf56f441f5a67053f47f3035224f265337abb1c5cbea29e1ad7f12a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633KTYVM4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIF5H3qxiOvtUlz0qCgkhbF3axYf6QcJ7RywCKWM3SiXxAiEAyDFatU4c8vKPFGBfP6qjuSgg04ItMoxgduADvl7viGUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJssYpfOB9IS%2FSv%2FzSrcAyXCWdnXVvb3xkuTam2C4ccoCukfEgpdhWZAhxeoVeb2g6cP0t59GGcXQEWuuv6ujmngPh1ebfDUm6jbZMB4Es3OPA%2FBAZeWv6OUuuYMvAwCDFUIrnxBgluEe8Bcu2Oldb6ZuPOfnrhEyWHxsdUBI5YvY%2Fxa8n415WIAmSG%2BjE%2B6Dqvz1pVrddyC4B%2Bgd43bCl0aBFgwbnwJ7nFNQ%2BNrYA9mXG4OInvGa3NEllgv2QxkjpwvBR5caX2lHdQeXXqPlUsZTnJ3A%2BHhXAGGf7Q7Ob0PDAnMLHRXB8jXjMrmmUpnPCVDeaO0CRcAos0GYN5j%2FDQn%2BLI3I8Wgr7z6Vu%2FIEH7wCb%2BtXjNSbHIg%2F1h7pGgA%2Bzf25FR6Z13Yk07GkZV9AeOy%2FOWBMRGqCL0UcpBgY8A7rfpW91sIqzL227s9vBbBT347pqplLBiL39myFkgGdQomqXK1vCSzz9f36LHpDBIH75%2BEZIAcrkY6Az%2F6Jofyorj9bTODyYrHoNvsvR4ic0EWuLsLRz0TXyWspM5%2BLEpFxaKcR1aQpGopgVdjC6b0X5arHTgVvmZxY4VXmF%2FLN6Hw71mGT2JDQBQyLCZtMnYPOnxQyTk6hASbfKBSg7%2BasgMu6RsoCj5%2FaLmEMKeJgMUGOqUBO3E42qdKDVKMtTxyCn8EXHRIhtraKAuQZamHfJD4mmkY0WGmfvyrj%2Fv6Za0gImt4RV6rvfZBzGxjqFmcNkwrwLS4AckhvTqW9B2MJYg%2Bfr6lb343Msu7JmYa1QL9AomhBcHlclKH%2BYk5Y1gvuk7Qm%2FMghiIJum4gTlnSqmT6ke8mTmNQxfi5S9OjE0HGC1cEqnMToTEbUxsHXfqGmdQfwmPxN4bn&X-Amz-Signature=e5d7141a49785bef117eaea19f75cebf699c5b7192cccb623a78b49f775afe55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
