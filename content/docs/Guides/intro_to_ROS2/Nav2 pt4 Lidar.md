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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV3SWY6R%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIDTtFX8raraLy0hxuFB2qr%2FxAJ9bOZG%2FVljQvQWyi1H1AiBfYP2S7rfwpC6ZDkyL8PG%2Ffk%2BbC7kwl8cVOE98vLZuxCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMilAn6woRPkya3e2OKtwDnYJC%2FrFkO8Hy8guLEC9kanpDDek%2FKx4%2FYG0KQk7XGQR9cUf8Vn80p3DhAAywmfxldaol%2FBx0QURBsfWnpq67QDHqkdx74Kw%2FZeNKn%2B84X7stlw4CIAV6qYQVhZAd1Y0mJQK3xYAiO3ANkqIUBqlIarnpQOGor9JRWhLHu7T83%2FiKBWBtYyvfQAsa0oQki8SZozGy3vr2PeK5iTiZnouAajysyUYff8DeHqZd%2BvDNrVOlHXcERr6bdhvhymSCKEGIZEAovb7K2b8ta5K4edt8t%2BwJDLj6wAUM8eZ8Wz6jAslruvEi6M3iDSCXPV72PjJMPZBjtPf0TRu%2FLdR0fC1cjL35yV1Sd8GiWq1fUDKHoiWgeEG0ejFB1D%2FWTl2r4dH0bGPVJQnZUcXsqE711WcsfBhsFAk2xtBlm1zG1of6yhnS3PVbiBZkiGRfsTWSqLm0%2B7ZxvyIkGL8LZqDYqEcVyNil0eElsraAFNUK0it3WZnlyPFlQu1IrKf6vo4PPHY99udkZVi0IzMIkimjxwwoKvCqb5Ir8Z%2FbdNMw%2ByGTQof5Df%2BZxyDoJRk9W7azuUJCp4Al7wCfT2SwWFpGD2cLm8K4urNMGda%2FWZlWeEvdJrxCgCHhV9TJ19MScwQw68XOxAY6pgE%2BuL1YaOUBCyTeN3vGxj7hUdoq%2B1GTy1g90UvFWhbZAQO9cl9h%2FOd0M%2FOPW%2FNt5zEG535xCGhRQRt%2BLOP4bnmh6af6iPjiQy6GK0R47%2Br6gyTtxvVc0XUknugXfbGP5uRFy%2BEc4VUZZs1ftpTR3HrAUP2OL0YnD96Ew%2FPUQDJOG4ZXydeb5qSl9RGqng8wco1ATeW7dbTQUcAMnNHlShrqWL6%2BEtpa&X-Amz-Signature=01c924f62384392076b9df76704d92b3a8ddfdf0366f055aae0746021c4e97b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7DL3JZT%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDvI1DaRwhObmK34K1bQA%2B%2BEOPMMEZdVqzy98JMrV7OPgIgTXJ3cH020EUkebWEF47PMh2Wn9zNJiG9lQ6izckt6DMq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDFdidaNdA4p5bOEY7SrcA5cOxrWRIB33EMn6Y9UzBf6nPV1Xa%2BSB%2BQbm4ojhh4VeYf4EePoGKP5WePF7jj%2Bs%2BaZbcbX6pOZuz%2B%2FWBaq4na4a8CLQ8BTsGaIM3ediCPRCuXJgy1oc%2BAR388VhPvEd9urhoVp%2BRVnYofxWhPWDyeKJ8t1B7duyPQ4g80ynCqxFZY7q1iLox32ITlYCeXMoKLw7IAtNvHqF%2F8QXw%2FIhJflwVGWThTmOYIk4QDG3SmjGxRZw0dVxGzSv%2FnEg3A5qEYD5qvX%2FJ%2F39vFsudKQowFdQKFPbJtPaxdJGaUxctX%2BaWnyBH%2BlZW9fsCdkWo81Zdo4a240e2AxPDztJ8Tkb7z9gYpgnWnxgGYhBGNCfBr41Eo5dInj1OGZMgkKKcvFY9cnKgC6we7mpy6rtdV4DVgJpjGmi8noUkqQQUZFBjQLHYNHMgcGw9pUWCmLdKDHEgU4O7ZwkKvyCSZNTw1rPzT9cMRwnSzrLH%2BZo4O9O8%2Fq8w9FF%2Bbx%2B6ICUbqXqTIXOMVdA%2B5rZith%2BG%2F1TQwKntj%2FQgFUqjxtmaVh%2FGPzITCf8lOBxnv2UCGLqBL4fJzQYtiNTElGvwFUricpN%2BzI5HCc6TX0RVnSMMCm%2F3UnbDAlSGvLXnTyUFSPq0HotMM3FzsQGOqUB4Qam2KfOqAO2x0PXqKHstRm8SJiZIYiG6mjka0ckjH2Z7ah49lTH%2FkVeU5MoH657isPkGBsOyUVUvkY1tKKkx08LAfWer56XlKf0I%2FBXOGAPz%2FvkSIByFAsjpxlrkAht5EXu1LJabsWuC1a%2B4aZOYhEgwsNKB3EQvE1pRwbpxu8CoP3R2kkpcbo1DFQn8gUDZN4yyrlov%2Bgw1Ybud8BPg5trF4Fn&X-Amz-Signature=58d1766357a9918bcea1650842b74a10c8138db3b89a0a55602bd9f510fdf356&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7DL3JZT%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDvI1DaRwhObmK34K1bQA%2B%2BEOPMMEZdVqzy98JMrV7OPgIgTXJ3cH020EUkebWEF47PMh2Wn9zNJiG9lQ6izckt6DMq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDFdidaNdA4p5bOEY7SrcA5cOxrWRIB33EMn6Y9UzBf6nPV1Xa%2BSB%2BQbm4ojhh4VeYf4EePoGKP5WePF7jj%2Bs%2BaZbcbX6pOZuz%2B%2FWBaq4na4a8CLQ8BTsGaIM3ediCPRCuXJgy1oc%2BAR388VhPvEd9urhoVp%2BRVnYofxWhPWDyeKJ8t1B7duyPQ4g80ynCqxFZY7q1iLox32ITlYCeXMoKLw7IAtNvHqF%2F8QXw%2FIhJflwVGWThTmOYIk4QDG3SmjGxRZw0dVxGzSv%2FnEg3A5qEYD5qvX%2FJ%2F39vFsudKQowFdQKFPbJtPaxdJGaUxctX%2BaWnyBH%2BlZW9fsCdkWo81Zdo4a240e2AxPDztJ8Tkb7z9gYpgnWnxgGYhBGNCfBr41Eo5dInj1OGZMgkKKcvFY9cnKgC6we7mpy6rtdV4DVgJpjGmi8noUkqQQUZFBjQLHYNHMgcGw9pUWCmLdKDHEgU4O7ZwkKvyCSZNTw1rPzT9cMRwnSzrLH%2BZo4O9O8%2Fq8w9FF%2Bbx%2B6ICUbqXqTIXOMVdA%2B5rZith%2BG%2F1TQwKntj%2FQgFUqjxtmaVh%2FGPzITCf8lOBxnv2UCGLqBL4fJzQYtiNTElGvwFUricpN%2BzI5HCc6TX0RVnSMMCm%2F3UnbDAlSGvLXnTyUFSPq0HotMM3FzsQGOqUB4Qam2KfOqAO2x0PXqKHstRm8SJiZIYiG6mjka0ckjH2Z7ah49lTH%2FkVeU5MoH657isPkGBsOyUVUvkY1tKKkx08LAfWer56XlKf0I%2FBXOGAPz%2FvkSIByFAsjpxlrkAht5EXu1LJabsWuC1a%2B4aZOYhEgwsNKB3EQvE1pRwbpxu8CoP3R2kkpcbo1DFQn8gUDZN4yyrlov%2Bgw1Ybud8BPg5trF4Fn&X-Amz-Signature=32825ec8181585a190b3bde9b890c63978aa68d632c5b9a292f20ac88270f960&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7DL3JZT%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDvI1DaRwhObmK34K1bQA%2B%2BEOPMMEZdVqzy98JMrV7OPgIgTXJ3cH020EUkebWEF47PMh2Wn9zNJiG9lQ6izckt6DMq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDFdidaNdA4p5bOEY7SrcA5cOxrWRIB33EMn6Y9UzBf6nPV1Xa%2BSB%2BQbm4ojhh4VeYf4EePoGKP5WePF7jj%2Bs%2BaZbcbX6pOZuz%2B%2FWBaq4na4a8CLQ8BTsGaIM3ediCPRCuXJgy1oc%2BAR388VhPvEd9urhoVp%2BRVnYofxWhPWDyeKJ8t1B7duyPQ4g80ynCqxFZY7q1iLox32ITlYCeXMoKLw7IAtNvHqF%2F8QXw%2FIhJflwVGWThTmOYIk4QDG3SmjGxRZw0dVxGzSv%2FnEg3A5qEYD5qvX%2FJ%2F39vFsudKQowFdQKFPbJtPaxdJGaUxctX%2BaWnyBH%2BlZW9fsCdkWo81Zdo4a240e2AxPDztJ8Tkb7z9gYpgnWnxgGYhBGNCfBr41Eo5dInj1OGZMgkKKcvFY9cnKgC6we7mpy6rtdV4DVgJpjGmi8noUkqQQUZFBjQLHYNHMgcGw9pUWCmLdKDHEgU4O7ZwkKvyCSZNTw1rPzT9cMRwnSzrLH%2BZo4O9O8%2Fq8w9FF%2Bbx%2B6ICUbqXqTIXOMVdA%2B5rZith%2BG%2F1TQwKntj%2FQgFUqjxtmaVh%2FGPzITCf8lOBxnv2UCGLqBL4fJzQYtiNTElGvwFUricpN%2BzI5HCc6TX0RVnSMMCm%2F3UnbDAlSGvLXnTyUFSPq0HotMM3FzsQGOqUB4Qam2KfOqAO2x0PXqKHstRm8SJiZIYiG6mjka0ckjH2Z7ah49lTH%2FkVeU5MoH657isPkGBsOyUVUvkY1tKKkx08LAfWer56XlKf0I%2FBXOGAPz%2FvkSIByFAsjpxlrkAht5EXu1LJabsWuC1a%2B4aZOYhEgwsNKB3EQvE1pRwbpxu8CoP3R2kkpcbo1DFQn8gUDZN4yyrlov%2Bgw1Ybud8BPg5trF4Fn&X-Amz-Signature=4346f2a72edba28b5a5438b48b8fae8facb847ffd398dffd7ec3aa920b3d0571&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7DL3JZT%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDvI1DaRwhObmK34K1bQA%2B%2BEOPMMEZdVqzy98JMrV7OPgIgTXJ3cH020EUkebWEF47PMh2Wn9zNJiG9lQ6izckt6DMq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDFdidaNdA4p5bOEY7SrcA5cOxrWRIB33EMn6Y9UzBf6nPV1Xa%2BSB%2BQbm4ojhh4VeYf4EePoGKP5WePF7jj%2Bs%2BaZbcbX6pOZuz%2B%2FWBaq4na4a8CLQ8BTsGaIM3ediCPRCuXJgy1oc%2BAR388VhPvEd9urhoVp%2BRVnYofxWhPWDyeKJ8t1B7duyPQ4g80ynCqxFZY7q1iLox32ITlYCeXMoKLw7IAtNvHqF%2F8QXw%2FIhJflwVGWThTmOYIk4QDG3SmjGxRZw0dVxGzSv%2FnEg3A5qEYD5qvX%2FJ%2F39vFsudKQowFdQKFPbJtPaxdJGaUxctX%2BaWnyBH%2BlZW9fsCdkWo81Zdo4a240e2AxPDztJ8Tkb7z9gYpgnWnxgGYhBGNCfBr41Eo5dInj1OGZMgkKKcvFY9cnKgC6we7mpy6rtdV4DVgJpjGmi8noUkqQQUZFBjQLHYNHMgcGw9pUWCmLdKDHEgU4O7ZwkKvyCSZNTw1rPzT9cMRwnSzrLH%2BZo4O9O8%2Fq8w9FF%2Bbx%2B6ICUbqXqTIXOMVdA%2B5rZith%2BG%2F1TQwKntj%2FQgFUqjxtmaVh%2FGPzITCf8lOBxnv2UCGLqBL4fJzQYtiNTElGvwFUricpN%2BzI5HCc6TX0RVnSMMCm%2F3UnbDAlSGvLXnTyUFSPq0HotMM3FzsQGOqUB4Qam2KfOqAO2x0PXqKHstRm8SJiZIYiG6mjka0ckjH2Z7ah49lTH%2FkVeU5MoH657isPkGBsOyUVUvkY1tKKkx08LAfWer56XlKf0I%2FBXOGAPz%2FvkSIByFAsjpxlrkAht5EXu1LJabsWuC1a%2B4aZOYhEgwsNKB3EQvE1pRwbpxu8CoP3R2kkpcbo1DFQn8gUDZN4yyrlov%2Bgw1Ybud8BPg5trF4Fn&X-Amz-Signature=628b6cf47ea2f019d8dbee61b3f2a96c972550036ff632d081fa585e7c23b4d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7DL3JZT%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDvI1DaRwhObmK34K1bQA%2B%2BEOPMMEZdVqzy98JMrV7OPgIgTXJ3cH020EUkebWEF47PMh2Wn9zNJiG9lQ6izckt6DMq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDFdidaNdA4p5bOEY7SrcA5cOxrWRIB33EMn6Y9UzBf6nPV1Xa%2BSB%2BQbm4ojhh4VeYf4EePoGKP5WePF7jj%2Bs%2BaZbcbX6pOZuz%2B%2FWBaq4na4a8CLQ8BTsGaIM3ediCPRCuXJgy1oc%2BAR388VhPvEd9urhoVp%2BRVnYofxWhPWDyeKJ8t1B7duyPQ4g80ynCqxFZY7q1iLox32ITlYCeXMoKLw7IAtNvHqF%2F8QXw%2FIhJflwVGWThTmOYIk4QDG3SmjGxRZw0dVxGzSv%2FnEg3A5qEYD5qvX%2FJ%2F39vFsudKQowFdQKFPbJtPaxdJGaUxctX%2BaWnyBH%2BlZW9fsCdkWo81Zdo4a240e2AxPDztJ8Tkb7z9gYpgnWnxgGYhBGNCfBr41Eo5dInj1OGZMgkKKcvFY9cnKgC6we7mpy6rtdV4DVgJpjGmi8noUkqQQUZFBjQLHYNHMgcGw9pUWCmLdKDHEgU4O7ZwkKvyCSZNTw1rPzT9cMRwnSzrLH%2BZo4O9O8%2Fq8w9FF%2Bbx%2B6ICUbqXqTIXOMVdA%2B5rZith%2BG%2F1TQwKntj%2FQgFUqjxtmaVh%2FGPzITCf8lOBxnv2UCGLqBL4fJzQYtiNTElGvwFUricpN%2BzI5HCc6TX0RVnSMMCm%2F3UnbDAlSGvLXnTyUFSPq0HotMM3FzsQGOqUB4Qam2KfOqAO2x0PXqKHstRm8SJiZIYiG6mjka0ckjH2Z7ah49lTH%2FkVeU5MoH657isPkGBsOyUVUvkY1tKKkx08LAfWer56XlKf0I%2FBXOGAPz%2FvkSIByFAsjpxlrkAht5EXu1LJabsWuC1a%2B4aZOYhEgwsNKB3EQvE1pRwbpxu8CoP3R2kkpcbo1DFQn8gUDZN4yyrlov%2Bgw1Ybud8BPg5trF4Fn&X-Amz-Signature=21d76c4c52250874d5edd1c1612ae76db7fb0a866d80705c3633c329048136a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7DL3JZT%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDvI1DaRwhObmK34K1bQA%2B%2BEOPMMEZdVqzy98JMrV7OPgIgTXJ3cH020EUkebWEF47PMh2Wn9zNJiG9lQ6izckt6DMq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDFdidaNdA4p5bOEY7SrcA5cOxrWRIB33EMn6Y9UzBf6nPV1Xa%2BSB%2BQbm4ojhh4VeYf4EePoGKP5WePF7jj%2Bs%2BaZbcbX6pOZuz%2B%2FWBaq4na4a8CLQ8BTsGaIM3ediCPRCuXJgy1oc%2BAR388VhPvEd9urhoVp%2BRVnYofxWhPWDyeKJ8t1B7duyPQ4g80ynCqxFZY7q1iLox32ITlYCeXMoKLw7IAtNvHqF%2F8QXw%2FIhJflwVGWThTmOYIk4QDG3SmjGxRZw0dVxGzSv%2FnEg3A5qEYD5qvX%2FJ%2F39vFsudKQowFdQKFPbJtPaxdJGaUxctX%2BaWnyBH%2BlZW9fsCdkWo81Zdo4a240e2AxPDztJ8Tkb7z9gYpgnWnxgGYhBGNCfBr41Eo5dInj1OGZMgkKKcvFY9cnKgC6we7mpy6rtdV4DVgJpjGmi8noUkqQQUZFBjQLHYNHMgcGw9pUWCmLdKDHEgU4O7ZwkKvyCSZNTw1rPzT9cMRwnSzrLH%2BZo4O9O8%2Fq8w9FF%2Bbx%2B6ICUbqXqTIXOMVdA%2B5rZith%2BG%2F1TQwKntj%2FQgFUqjxtmaVh%2FGPzITCf8lOBxnv2UCGLqBL4fJzQYtiNTElGvwFUricpN%2BzI5HCc6TX0RVnSMMCm%2F3UnbDAlSGvLXnTyUFSPq0HotMM3FzsQGOqUB4Qam2KfOqAO2x0PXqKHstRm8SJiZIYiG6mjka0ckjH2Z7ah49lTH%2FkVeU5MoH657isPkGBsOyUVUvkY1tKKkx08LAfWer56XlKf0I%2FBXOGAPz%2FvkSIByFAsjpxlrkAht5EXu1LJabsWuC1a%2B4aZOYhEgwsNKB3EQvE1pRwbpxu8CoP3R2kkpcbo1DFQn8gUDZN4yyrlov%2Bgw1Ybud8BPg5trF4Fn&X-Amz-Signature=5605740dfc29e2c58cdf86f8c8322bc535bb4b25f55350f0f70991fc2c33f59d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7DL3JZT%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDvI1DaRwhObmK34K1bQA%2B%2BEOPMMEZdVqzy98JMrV7OPgIgTXJ3cH020EUkebWEF47PMh2Wn9zNJiG9lQ6izckt6DMq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDFdidaNdA4p5bOEY7SrcA5cOxrWRIB33EMn6Y9UzBf6nPV1Xa%2BSB%2BQbm4ojhh4VeYf4EePoGKP5WePF7jj%2Bs%2BaZbcbX6pOZuz%2B%2FWBaq4na4a8CLQ8BTsGaIM3ediCPRCuXJgy1oc%2BAR388VhPvEd9urhoVp%2BRVnYofxWhPWDyeKJ8t1B7duyPQ4g80ynCqxFZY7q1iLox32ITlYCeXMoKLw7IAtNvHqF%2F8QXw%2FIhJflwVGWThTmOYIk4QDG3SmjGxRZw0dVxGzSv%2FnEg3A5qEYD5qvX%2FJ%2F39vFsudKQowFdQKFPbJtPaxdJGaUxctX%2BaWnyBH%2BlZW9fsCdkWo81Zdo4a240e2AxPDztJ8Tkb7z9gYpgnWnxgGYhBGNCfBr41Eo5dInj1OGZMgkKKcvFY9cnKgC6we7mpy6rtdV4DVgJpjGmi8noUkqQQUZFBjQLHYNHMgcGw9pUWCmLdKDHEgU4O7ZwkKvyCSZNTw1rPzT9cMRwnSzrLH%2BZo4O9O8%2Fq8w9FF%2Bbx%2B6ICUbqXqTIXOMVdA%2B5rZith%2BG%2F1TQwKntj%2FQgFUqjxtmaVh%2FGPzITCf8lOBxnv2UCGLqBL4fJzQYtiNTElGvwFUricpN%2BzI5HCc6TX0RVnSMMCm%2F3UnbDAlSGvLXnTyUFSPq0HotMM3FzsQGOqUB4Qam2KfOqAO2x0PXqKHstRm8SJiZIYiG6mjka0ckjH2Z7ah49lTH%2FkVeU5MoH657isPkGBsOyUVUvkY1tKKkx08LAfWer56XlKf0I%2FBXOGAPz%2FvkSIByFAsjpxlrkAht5EXu1LJabsWuC1a%2B4aZOYhEgwsNKB3EQvE1pRwbpxu8CoP3R2kkpcbo1DFQn8gUDZN4yyrlov%2Bgw1Ybud8BPg5trF4Fn&X-Amz-Signature=ae6ab2740766207e86ea7dbe4606482ecd62765277ddb0c56b339bff06e64bb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7DL3JZT%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDvI1DaRwhObmK34K1bQA%2B%2BEOPMMEZdVqzy98JMrV7OPgIgTXJ3cH020EUkebWEF47PMh2Wn9zNJiG9lQ6izckt6DMq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDFdidaNdA4p5bOEY7SrcA5cOxrWRIB33EMn6Y9UzBf6nPV1Xa%2BSB%2BQbm4ojhh4VeYf4EePoGKP5WePF7jj%2Bs%2BaZbcbX6pOZuz%2B%2FWBaq4na4a8CLQ8BTsGaIM3ediCPRCuXJgy1oc%2BAR388VhPvEd9urhoVp%2BRVnYofxWhPWDyeKJ8t1B7duyPQ4g80ynCqxFZY7q1iLox32ITlYCeXMoKLw7IAtNvHqF%2F8QXw%2FIhJflwVGWThTmOYIk4QDG3SmjGxRZw0dVxGzSv%2FnEg3A5qEYD5qvX%2FJ%2F39vFsudKQowFdQKFPbJtPaxdJGaUxctX%2BaWnyBH%2BlZW9fsCdkWo81Zdo4a240e2AxPDztJ8Tkb7z9gYpgnWnxgGYhBGNCfBr41Eo5dInj1OGZMgkKKcvFY9cnKgC6we7mpy6rtdV4DVgJpjGmi8noUkqQQUZFBjQLHYNHMgcGw9pUWCmLdKDHEgU4O7ZwkKvyCSZNTw1rPzT9cMRwnSzrLH%2BZo4O9O8%2Fq8w9FF%2Bbx%2B6ICUbqXqTIXOMVdA%2B5rZith%2BG%2F1TQwKntj%2FQgFUqjxtmaVh%2FGPzITCf8lOBxnv2UCGLqBL4fJzQYtiNTElGvwFUricpN%2BzI5HCc6TX0RVnSMMCm%2F3UnbDAlSGvLXnTyUFSPq0HotMM3FzsQGOqUB4Qam2KfOqAO2x0PXqKHstRm8SJiZIYiG6mjka0ckjH2Z7ah49lTH%2FkVeU5MoH657isPkGBsOyUVUvkY1tKKkx08LAfWer56XlKf0I%2FBXOGAPz%2FvkSIByFAsjpxlrkAht5EXu1LJabsWuC1a%2B4aZOYhEgwsNKB3EQvE1pRwbpxu8CoP3R2kkpcbo1DFQn8gUDZN4yyrlov%2Bgw1Ybud8BPg5trF4Fn&X-Amz-Signature=2ada0e365c112ca3d05a79dda265ab091223e2d1f7a6fba935cd500107097c79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7DL3JZT%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDvI1DaRwhObmK34K1bQA%2B%2BEOPMMEZdVqzy98JMrV7OPgIgTXJ3cH020EUkebWEF47PMh2Wn9zNJiG9lQ6izckt6DMq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDFdidaNdA4p5bOEY7SrcA5cOxrWRIB33EMn6Y9UzBf6nPV1Xa%2BSB%2BQbm4ojhh4VeYf4EePoGKP5WePF7jj%2Bs%2BaZbcbX6pOZuz%2B%2FWBaq4na4a8CLQ8BTsGaIM3ediCPRCuXJgy1oc%2BAR388VhPvEd9urhoVp%2BRVnYofxWhPWDyeKJ8t1B7duyPQ4g80ynCqxFZY7q1iLox32ITlYCeXMoKLw7IAtNvHqF%2F8QXw%2FIhJflwVGWThTmOYIk4QDG3SmjGxRZw0dVxGzSv%2FnEg3A5qEYD5qvX%2FJ%2F39vFsudKQowFdQKFPbJtPaxdJGaUxctX%2BaWnyBH%2BlZW9fsCdkWo81Zdo4a240e2AxPDztJ8Tkb7z9gYpgnWnxgGYhBGNCfBr41Eo5dInj1OGZMgkKKcvFY9cnKgC6we7mpy6rtdV4DVgJpjGmi8noUkqQQUZFBjQLHYNHMgcGw9pUWCmLdKDHEgU4O7ZwkKvyCSZNTw1rPzT9cMRwnSzrLH%2BZo4O9O8%2Fq8w9FF%2Bbx%2B6ICUbqXqTIXOMVdA%2B5rZith%2BG%2F1TQwKntj%2FQgFUqjxtmaVh%2FGPzITCf8lOBxnv2UCGLqBL4fJzQYtiNTElGvwFUricpN%2BzI5HCc6TX0RVnSMMCm%2F3UnbDAlSGvLXnTyUFSPq0HotMM3FzsQGOqUB4Qam2KfOqAO2x0PXqKHstRm8SJiZIYiG6mjka0ckjH2Z7ah49lTH%2FkVeU5MoH657isPkGBsOyUVUvkY1tKKkx08LAfWer56XlKf0I%2FBXOGAPz%2FvkSIByFAsjpxlrkAht5EXu1LJabsWuC1a%2B4aZOYhEgwsNKB3EQvE1pRwbpxu8CoP3R2kkpcbo1DFQn8gUDZN4yyrlov%2Bgw1Ybud8BPg5trF4Fn&X-Amz-Signature=78219b9df4f0dc647ceaa56251e008c05726ef7e99e1abafa98e4fbb7f381708&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7DL3JZT%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDvI1DaRwhObmK34K1bQA%2B%2BEOPMMEZdVqzy98JMrV7OPgIgTXJ3cH020EUkebWEF47PMh2Wn9zNJiG9lQ6izckt6DMq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDFdidaNdA4p5bOEY7SrcA5cOxrWRIB33EMn6Y9UzBf6nPV1Xa%2BSB%2BQbm4ojhh4VeYf4EePoGKP5WePF7jj%2Bs%2BaZbcbX6pOZuz%2B%2FWBaq4na4a8CLQ8BTsGaIM3ediCPRCuXJgy1oc%2BAR388VhPvEd9urhoVp%2BRVnYofxWhPWDyeKJ8t1B7duyPQ4g80ynCqxFZY7q1iLox32ITlYCeXMoKLw7IAtNvHqF%2F8QXw%2FIhJflwVGWThTmOYIk4QDG3SmjGxRZw0dVxGzSv%2FnEg3A5qEYD5qvX%2FJ%2F39vFsudKQowFdQKFPbJtPaxdJGaUxctX%2BaWnyBH%2BlZW9fsCdkWo81Zdo4a240e2AxPDztJ8Tkb7z9gYpgnWnxgGYhBGNCfBr41Eo5dInj1OGZMgkKKcvFY9cnKgC6we7mpy6rtdV4DVgJpjGmi8noUkqQQUZFBjQLHYNHMgcGw9pUWCmLdKDHEgU4O7ZwkKvyCSZNTw1rPzT9cMRwnSzrLH%2BZo4O9O8%2Fq8w9FF%2Bbx%2B6ICUbqXqTIXOMVdA%2B5rZith%2BG%2F1TQwKntj%2FQgFUqjxtmaVh%2FGPzITCf8lOBxnv2UCGLqBL4fJzQYtiNTElGvwFUricpN%2BzI5HCc6TX0RVnSMMCm%2F3UnbDAlSGvLXnTyUFSPq0HotMM3FzsQGOqUB4Qam2KfOqAO2x0PXqKHstRm8SJiZIYiG6mjka0ckjH2Z7ah49lTH%2FkVeU5MoH657isPkGBsOyUVUvkY1tKKkx08LAfWer56XlKf0I%2FBXOGAPz%2FvkSIByFAsjpxlrkAht5EXu1LJabsWuC1a%2B4aZOYhEgwsNKB3EQvE1pRwbpxu8CoP3R2kkpcbo1DFQn8gUDZN4yyrlov%2Bgw1Ybud8BPg5trF4Fn&X-Amz-Signature=628b6cf47ea2f019d8dbee61b3f2a96c972550036ff632d081fa585e7c23b4d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
