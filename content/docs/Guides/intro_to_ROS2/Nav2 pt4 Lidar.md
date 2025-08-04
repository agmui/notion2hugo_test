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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY3GG7SE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIFyf2qSB6riXznfd3vl0Pzer5Geb66zQQ3JHmZEe9gK4AiBovteJZnYvDn6OwZ6Gigie1kCxijxxRn0bRvA5CJkpUCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMPm2Ktq1LEwgNnJbFKtwD1%2FVd0TzkpYQkLnb3xOsb7FOoE8C3SYjvVssFmkQZRRzVW15v38oUMex93Mw4huHL568g9Jw%2BnKEMuyVWM6GEJyBe2W7I%2FACvD1FBRfpievuZimgfiftjsDcEWtwLqlyt58GeGtLPRy%2BVLJ%2BtmZN3WjCbXh1DyNMF5AqfAF7rcRVlwCkKNm7ui8WHyOBcNtHWFwPu60dy%2By8dsHia6EDTv80oyw1L7fIBASC%2Fiq4O2KwLwm7iX4Y9P5xFbcgtR0sVatlB%2FKKoq10YCAJ%2FRM3HFRgEZMgs%2BmQU8oKswEJivwI9fVX3wZ0Eco3ZjTGzFiBEVLhgbuS2z5EODdR4z4P6mztwb8zYSKUnHkhK1OwffwDH8sY%2FuvErm1XR8ON5nysVA40T4n964X5IxkVXIn1p9NQKZD7RexcFVRo7qbn8Cb%2Fuzm9JPvaHNDKaXurzjpTCPuL7M%2FTQMou891AK%2BPtG10aNThn9DM%2BNufnou2jpahLrAfGCDO4IsZurE6pp7qr2X7FxPIKhosRCR612X%2BG0WNkeEujldvmPGAYAA3k33a%2FAQV876TLVo4y5WP47DGDtdRLtbDQ%2BgqDsUewT50BAvwYJhX%2Bshe9m0eqvaYRyJRtLT33gJD7cw91YkjwwnKbCxAY6pgHikD0P5T3z%2FUc6Duvq5iTEBD9yTuPSliDmkwOsoLlWWdw%2BX2sMiZ%2FTQhEIIJYDoh6aygA0VqQD5HxE8HZEHM8eWWtmK4SzIxCb2acjVThBH0yjFv5eV5%2Fqg0%2BAGaqwWH33Szajwo8%2B7zfohpWQ13XGQT%2BUzYRrgLwCYKygCm6544RXGKiGiu0IU2camP%2BQW06r2j5OKX8d2V3qBUBhP%2Bg8yqHNUeVs&X-Amz-Signature=e97c1ba2140098de2b96f71e5ffd1b6712a2d8ac9a80cff10eefeb3497c5fbc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCJ3TLEN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIH6XlE5OG5tnlm5cnak8MK5aR46NoWCdr9JNxc%2BQqLxUAiAEOSnu9ZjIyP0vLOKTITsR%2F5fm0uGB6TgowLGsO8%2BXtCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMUSWcAedL7vQ%2BPwWQKtwDJCimBP8mNhmUG58CB2LFNP01Q%2FHUpm6ORqBgJMbJEULl3O7BC8ejloZ4mo6VXTzGt47Q89jacor6MI%2B7NDp638JiCvOMCcctcqIcVCRe0hZRllwuWFnAiiHukWBd8OMaBai9kUP3Qg71ipZsO6%2BzP1ykOz0eYYEneoODjFmdXOKolZSs1wOw1z1ugUVE81dF4jMRmd%2BhRSzFe3nWajJfjF9hzXhdcfCTt8Wo44jUQu4wuw4BhrXVmlHmNvM9T6Cwu0Sx1olRjwbTyw%2BklgavSLDwND5OAXtgeeDBU03p2JMdz%2Bo83PtoUvnn9HiYvEOcIx7UWu4RtD%2BLPlibadVg6IW9yuRvCLKReP0nOlTUtCDBoqIkSjKk1paL8PgLl4IrAY5rbGlwjJo3vl5V7rJuaIpWYF2zxfjlr0lSVXSSpo3GSRpe89Z16KdOc6zD7lb0l9vbu3b8ZePIaZr0k%2BVUbCQaW0jeBi95Dz12P%2Bcu3qY1HyNjhXoCC4ajIo5k1G0ddP%2F4eDyWwreOt9ew7QMQkLnt8U92TGOdn8Qg77oVZpEZtT5y8EJUt8dhav5tut7L%2Fela68FuASf4YAxLIBdH0t3OmnphrxhVczcX04qMoq8KZeZ2oY5r653%2Fcc0wyKfCxAY6pgHFc3bSYPbeiO%2BKOh2zjOhCimXc35RiFQlgs6xcAtg3q4WwHs3EhIynFEuoOwDJe0UohySdNs%2BkZMp%2B%2FeC210p5yu6vu5XJydkpdzP%2BKlYDQTVFNT94YYZqcjc5dgbOIlovF2k2LWzj3oZz%2Bv2STT0u8YqonUewYYHFBv6dKPV6LPR8lxRluTQDVb5zzkKLOviluUDtKmF6DZQQcflXLyap9zGJVv4D&X-Amz-Signature=3ab9042afac8e069eaceb96f0c345cee327e4e4bf3dbb06c0631904ba21ae6a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCJ3TLEN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIH6XlE5OG5tnlm5cnak8MK5aR46NoWCdr9JNxc%2BQqLxUAiAEOSnu9ZjIyP0vLOKTITsR%2F5fm0uGB6TgowLGsO8%2BXtCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMUSWcAedL7vQ%2BPwWQKtwDJCimBP8mNhmUG58CB2LFNP01Q%2FHUpm6ORqBgJMbJEULl3O7BC8ejloZ4mo6VXTzGt47Q89jacor6MI%2B7NDp638JiCvOMCcctcqIcVCRe0hZRllwuWFnAiiHukWBd8OMaBai9kUP3Qg71ipZsO6%2BzP1ykOz0eYYEneoODjFmdXOKolZSs1wOw1z1ugUVE81dF4jMRmd%2BhRSzFe3nWajJfjF9hzXhdcfCTt8Wo44jUQu4wuw4BhrXVmlHmNvM9T6Cwu0Sx1olRjwbTyw%2BklgavSLDwND5OAXtgeeDBU03p2JMdz%2Bo83PtoUvnn9HiYvEOcIx7UWu4RtD%2BLPlibadVg6IW9yuRvCLKReP0nOlTUtCDBoqIkSjKk1paL8PgLl4IrAY5rbGlwjJo3vl5V7rJuaIpWYF2zxfjlr0lSVXSSpo3GSRpe89Z16KdOc6zD7lb0l9vbu3b8ZePIaZr0k%2BVUbCQaW0jeBi95Dz12P%2Bcu3qY1HyNjhXoCC4ajIo5k1G0ddP%2F4eDyWwreOt9ew7QMQkLnt8U92TGOdn8Qg77oVZpEZtT5y8EJUt8dhav5tut7L%2Fela68FuASf4YAxLIBdH0t3OmnphrxhVczcX04qMoq8KZeZ2oY5r653%2Fcc0wyKfCxAY6pgHFc3bSYPbeiO%2BKOh2zjOhCimXc35RiFQlgs6xcAtg3q4WwHs3EhIynFEuoOwDJe0UohySdNs%2BkZMp%2B%2FeC210p5yu6vu5XJydkpdzP%2BKlYDQTVFNT94YYZqcjc5dgbOIlovF2k2LWzj3oZz%2Bv2STT0u8YqonUewYYHFBv6dKPV6LPR8lxRluTQDVb5zzkKLOviluUDtKmF6DZQQcflXLyap9zGJVv4D&X-Amz-Signature=db81ad9716522033950567bcf92e8c2ac1817bb43afc947498017d3e98d22579&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCJ3TLEN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIH6XlE5OG5tnlm5cnak8MK5aR46NoWCdr9JNxc%2BQqLxUAiAEOSnu9ZjIyP0vLOKTITsR%2F5fm0uGB6TgowLGsO8%2BXtCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMUSWcAedL7vQ%2BPwWQKtwDJCimBP8mNhmUG58CB2LFNP01Q%2FHUpm6ORqBgJMbJEULl3O7BC8ejloZ4mo6VXTzGt47Q89jacor6MI%2B7NDp638JiCvOMCcctcqIcVCRe0hZRllwuWFnAiiHukWBd8OMaBai9kUP3Qg71ipZsO6%2BzP1ykOz0eYYEneoODjFmdXOKolZSs1wOw1z1ugUVE81dF4jMRmd%2BhRSzFe3nWajJfjF9hzXhdcfCTt8Wo44jUQu4wuw4BhrXVmlHmNvM9T6Cwu0Sx1olRjwbTyw%2BklgavSLDwND5OAXtgeeDBU03p2JMdz%2Bo83PtoUvnn9HiYvEOcIx7UWu4RtD%2BLPlibadVg6IW9yuRvCLKReP0nOlTUtCDBoqIkSjKk1paL8PgLl4IrAY5rbGlwjJo3vl5V7rJuaIpWYF2zxfjlr0lSVXSSpo3GSRpe89Z16KdOc6zD7lb0l9vbu3b8ZePIaZr0k%2BVUbCQaW0jeBi95Dz12P%2Bcu3qY1HyNjhXoCC4ajIo5k1G0ddP%2F4eDyWwreOt9ew7QMQkLnt8U92TGOdn8Qg77oVZpEZtT5y8EJUt8dhav5tut7L%2Fela68FuASf4YAxLIBdH0t3OmnphrxhVczcX04qMoq8KZeZ2oY5r653%2Fcc0wyKfCxAY6pgHFc3bSYPbeiO%2BKOh2zjOhCimXc35RiFQlgs6xcAtg3q4WwHs3EhIynFEuoOwDJe0UohySdNs%2BkZMp%2B%2FeC210p5yu6vu5XJydkpdzP%2BKlYDQTVFNT94YYZqcjc5dgbOIlovF2k2LWzj3oZz%2Bv2STT0u8YqonUewYYHFBv6dKPV6LPR8lxRluTQDVb5zzkKLOviluUDtKmF6DZQQcflXLyap9zGJVv4D&X-Amz-Signature=e5072afaea29ba78c6871a57e3add54c9dd6318dd6966c7e8c40d4d5626c38a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCJ3TLEN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIH6XlE5OG5tnlm5cnak8MK5aR46NoWCdr9JNxc%2BQqLxUAiAEOSnu9ZjIyP0vLOKTITsR%2F5fm0uGB6TgowLGsO8%2BXtCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMUSWcAedL7vQ%2BPwWQKtwDJCimBP8mNhmUG58CB2LFNP01Q%2FHUpm6ORqBgJMbJEULl3O7BC8ejloZ4mo6VXTzGt47Q89jacor6MI%2B7NDp638JiCvOMCcctcqIcVCRe0hZRllwuWFnAiiHukWBd8OMaBai9kUP3Qg71ipZsO6%2BzP1ykOz0eYYEneoODjFmdXOKolZSs1wOw1z1ugUVE81dF4jMRmd%2BhRSzFe3nWajJfjF9hzXhdcfCTt8Wo44jUQu4wuw4BhrXVmlHmNvM9T6Cwu0Sx1olRjwbTyw%2BklgavSLDwND5OAXtgeeDBU03p2JMdz%2Bo83PtoUvnn9HiYvEOcIx7UWu4RtD%2BLPlibadVg6IW9yuRvCLKReP0nOlTUtCDBoqIkSjKk1paL8PgLl4IrAY5rbGlwjJo3vl5V7rJuaIpWYF2zxfjlr0lSVXSSpo3GSRpe89Z16KdOc6zD7lb0l9vbu3b8ZePIaZr0k%2BVUbCQaW0jeBi95Dz12P%2Bcu3qY1HyNjhXoCC4ajIo5k1G0ddP%2F4eDyWwreOt9ew7QMQkLnt8U92TGOdn8Qg77oVZpEZtT5y8EJUt8dhav5tut7L%2Fela68FuASf4YAxLIBdH0t3OmnphrxhVczcX04qMoq8KZeZ2oY5r653%2Fcc0wyKfCxAY6pgHFc3bSYPbeiO%2BKOh2zjOhCimXc35RiFQlgs6xcAtg3q4WwHs3EhIynFEuoOwDJe0UohySdNs%2BkZMp%2B%2FeC210p5yu6vu5XJydkpdzP%2BKlYDQTVFNT94YYZqcjc5dgbOIlovF2k2LWzj3oZz%2Bv2STT0u8YqonUewYYHFBv6dKPV6LPR8lxRluTQDVb5zzkKLOviluUDtKmF6DZQQcflXLyap9zGJVv4D&X-Amz-Signature=1ae236afd664274d756aebef82466693c9b4440c2b14fd1008bc6c0150cf9f28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCJ3TLEN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIH6XlE5OG5tnlm5cnak8MK5aR46NoWCdr9JNxc%2BQqLxUAiAEOSnu9ZjIyP0vLOKTITsR%2F5fm0uGB6TgowLGsO8%2BXtCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMUSWcAedL7vQ%2BPwWQKtwDJCimBP8mNhmUG58CB2LFNP01Q%2FHUpm6ORqBgJMbJEULl3O7BC8ejloZ4mo6VXTzGt47Q89jacor6MI%2B7NDp638JiCvOMCcctcqIcVCRe0hZRllwuWFnAiiHukWBd8OMaBai9kUP3Qg71ipZsO6%2BzP1ykOz0eYYEneoODjFmdXOKolZSs1wOw1z1ugUVE81dF4jMRmd%2BhRSzFe3nWajJfjF9hzXhdcfCTt8Wo44jUQu4wuw4BhrXVmlHmNvM9T6Cwu0Sx1olRjwbTyw%2BklgavSLDwND5OAXtgeeDBU03p2JMdz%2Bo83PtoUvnn9HiYvEOcIx7UWu4RtD%2BLPlibadVg6IW9yuRvCLKReP0nOlTUtCDBoqIkSjKk1paL8PgLl4IrAY5rbGlwjJo3vl5V7rJuaIpWYF2zxfjlr0lSVXSSpo3GSRpe89Z16KdOc6zD7lb0l9vbu3b8ZePIaZr0k%2BVUbCQaW0jeBi95Dz12P%2Bcu3qY1HyNjhXoCC4ajIo5k1G0ddP%2F4eDyWwreOt9ew7QMQkLnt8U92TGOdn8Qg77oVZpEZtT5y8EJUt8dhav5tut7L%2Fela68FuASf4YAxLIBdH0t3OmnphrxhVczcX04qMoq8KZeZ2oY5r653%2Fcc0wyKfCxAY6pgHFc3bSYPbeiO%2BKOh2zjOhCimXc35RiFQlgs6xcAtg3q4WwHs3EhIynFEuoOwDJe0UohySdNs%2BkZMp%2B%2FeC210p5yu6vu5XJydkpdzP%2BKlYDQTVFNT94YYZqcjc5dgbOIlovF2k2LWzj3oZz%2Bv2STT0u8YqonUewYYHFBv6dKPV6LPR8lxRluTQDVb5zzkKLOviluUDtKmF6DZQQcflXLyap9zGJVv4D&X-Amz-Signature=9d26223cb6270b6961138c8e430f1a27dbb9858873cbdde0639b597a1c7004bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCJ3TLEN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIH6XlE5OG5tnlm5cnak8MK5aR46NoWCdr9JNxc%2BQqLxUAiAEOSnu9ZjIyP0vLOKTITsR%2F5fm0uGB6TgowLGsO8%2BXtCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMUSWcAedL7vQ%2BPwWQKtwDJCimBP8mNhmUG58CB2LFNP01Q%2FHUpm6ORqBgJMbJEULl3O7BC8ejloZ4mo6VXTzGt47Q89jacor6MI%2B7NDp638JiCvOMCcctcqIcVCRe0hZRllwuWFnAiiHukWBd8OMaBai9kUP3Qg71ipZsO6%2BzP1ykOz0eYYEneoODjFmdXOKolZSs1wOw1z1ugUVE81dF4jMRmd%2BhRSzFe3nWajJfjF9hzXhdcfCTt8Wo44jUQu4wuw4BhrXVmlHmNvM9T6Cwu0Sx1olRjwbTyw%2BklgavSLDwND5OAXtgeeDBU03p2JMdz%2Bo83PtoUvnn9HiYvEOcIx7UWu4RtD%2BLPlibadVg6IW9yuRvCLKReP0nOlTUtCDBoqIkSjKk1paL8PgLl4IrAY5rbGlwjJo3vl5V7rJuaIpWYF2zxfjlr0lSVXSSpo3GSRpe89Z16KdOc6zD7lb0l9vbu3b8ZePIaZr0k%2BVUbCQaW0jeBi95Dz12P%2Bcu3qY1HyNjhXoCC4ajIo5k1G0ddP%2F4eDyWwreOt9ew7QMQkLnt8U92TGOdn8Qg77oVZpEZtT5y8EJUt8dhav5tut7L%2Fela68FuASf4YAxLIBdH0t3OmnphrxhVczcX04qMoq8KZeZ2oY5r653%2Fcc0wyKfCxAY6pgHFc3bSYPbeiO%2BKOh2zjOhCimXc35RiFQlgs6xcAtg3q4WwHs3EhIynFEuoOwDJe0UohySdNs%2BkZMp%2B%2FeC210p5yu6vu5XJydkpdzP%2BKlYDQTVFNT94YYZqcjc5dgbOIlovF2k2LWzj3oZz%2Bv2STT0u8YqonUewYYHFBv6dKPV6LPR8lxRluTQDVb5zzkKLOviluUDtKmF6DZQQcflXLyap9zGJVv4D&X-Amz-Signature=8b857be256fb871f788df62d12af2fc871d20878c7ed1960f372ca0dedb7e9fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCJ3TLEN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIH6XlE5OG5tnlm5cnak8MK5aR46NoWCdr9JNxc%2BQqLxUAiAEOSnu9ZjIyP0vLOKTITsR%2F5fm0uGB6TgowLGsO8%2BXtCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMUSWcAedL7vQ%2BPwWQKtwDJCimBP8mNhmUG58CB2LFNP01Q%2FHUpm6ORqBgJMbJEULl3O7BC8ejloZ4mo6VXTzGt47Q89jacor6MI%2B7NDp638JiCvOMCcctcqIcVCRe0hZRllwuWFnAiiHukWBd8OMaBai9kUP3Qg71ipZsO6%2BzP1ykOz0eYYEneoODjFmdXOKolZSs1wOw1z1ugUVE81dF4jMRmd%2BhRSzFe3nWajJfjF9hzXhdcfCTt8Wo44jUQu4wuw4BhrXVmlHmNvM9T6Cwu0Sx1olRjwbTyw%2BklgavSLDwND5OAXtgeeDBU03p2JMdz%2Bo83PtoUvnn9HiYvEOcIx7UWu4RtD%2BLPlibadVg6IW9yuRvCLKReP0nOlTUtCDBoqIkSjKk1paL8PgLl4IrAY5rbGlwjJo3vl5V7rJuaIpWYF2zxfjlr0lSVXSSpo3GSRpe89Z16KdOc6zD7lb0l9vbu3b8ZePIaZr0k%2BVUbCQaW0jeBi95Dz12P%2Bcu3qY1HyNjhXoCC4ajIo5k1G0ddP%2F4eDyWwreOt9ew7QMQkLnt8U92TGOdn8Qg77oVZpEZtT5y8EJUt8dhav5tut7L%2Fela68FuASf4YAxLIBdH0t3OmnphrxhVczcX04qMoq8KZeZ2oY5r653%2Fcc0wyKfCxAY6pgHFc3bSYPbeiO%2BKOh2zjOhCimXc35RiFQlgs6xcAtg3q4WwHs3EhIynFEuoOwDJe0UohySdNs%2BkZMp%2B%2FeC210p5yu6vu5XJydkpdzP%2BKlYDQTVFNT94YYZqcjc5dgbOIlovF2k2LWzj3oZz%2Bv2STT0u8YqonUewYYHFBv6dKPV6LPR8lxRluTQDVb5zzkKLOviluUDtKmF6DZQQcflXLyap9zGJVv4D&X-Amz-Signature=4f1bb20961ab5208620cb8936b9c26ffbd0861b07605805906a5af6c2936669d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCJ3TLEN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIH6XlE5OG5tnlm5cnak8MK5aR46NoWCdr9JNxc%2BQqLxUAiAEOSnu9ZjIyP0vLOKTITsR%2F5fm0uGB6TgowLGsO8%2BXtCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMUSWcAedL7vQ%2BPwWQKtwDJCimBP8mNhmUG58CB2LFNP01Q%2FHUpm6ORqBgJMbJEULl3O7BC8ejloZ4mo6VXTzGt47Q89jacor6MI%2B7NDp638JiCvOMCcctcqIcVCRe0hZRllwuWFnAiiHukWBd8OMaBai9kUP3Qg71ipZsO6%2BzP1ykOz0eYYEneoODjFmdXOKolZSs1wOw1z1ugUVE81dF4jMRmd%2BhRSzFe3nWajJfjF9hzXhdcfCTt8Wo44jUQu4wuw4BhrXVmlHmNvM9T6Cwu0Sx1olRjwbTyw%2BklgavSLDwND5OAXtgeeDBU03p2JMdz%2Bo83PtoUvnn9HiYvEOcIx7UWu4RtD%2BLPlibadVg6IW9yuRvCLKReP0nOlTUtCDBoqIkSjKk1paL8PgLl4IrAY5rbGlwjJo3vl5V7rJuaIpWYF2zxfjlr0lSVXSSpo3GSRpe89Z16KdOc6zD7lb0l9vbu3b8ZePIaZr0k%2BVUbCQaW0jeBi95Dz12P%2Bcu3qY1HyNjhXoCC4ajIo5k1G0ddP%2F4eDyWwreOt9ew7QMQkLnt8U92TGOdn8Qg77oVZpEZtT5y8EJUt8dhav5tut7L%2Fela68FuASf4YAxLIBdH0t3OmnphrxhVczcX04qMoq8KZeZ2oY5r653%2Fcc0wyKfCxAY6pgHFc3bSYPbeiO%2BKOh2zjOhCimXc35RiFQlgs6xcAtg3q4WwHs3EhIynFEuoOwDJe0UohySdNs%2BkZMp%2B%2FeC210p5yu6vu5XJydkpdzP%2BKlYDQTVFNT94YYZqcjc5dgbOIlovF2k2LWzj3oZz%2Bv2STT0u8YqonUewYYHFBv6dKPV6LPR8lxRluTQDVb5zzkKLOviluUDtKmF6DZQQcflXLyap9zGJVv4D&X-Amz-Signature=065ddd1cd2df2ce3ac18f4fb63d47aabdeabda9e2b6bd356a02b77ecb5fcfb05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCJ3TLEN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIH6XlE5OG5tnlm5cnak8MK5aR46NoWCdr9JNxc%2BQqLxUAiAEOSnu9ZjIyP0vLOKTITsR%2F5fm0uGB6TgowLGsO8%2BXtCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMUSWcAedL7vQ%2BPwWQKtwDJCimBP8mNhmUG58CB2LFNP01Q%2FHUpm6ORqBgJMbJEULl3O7BC8ejloZ4mo6VXTzGt47Q89jacor6MI%2B7NDp638JiCvOMCcctcqIcVCRe0hZRllwuWFnAiiHukWBd8OMaBai9kUP3Qg71ipZsO6%2BzP1ykOz0eYYEneoODjFmdXOKolZSs1wOw1z1ugUVE81dF4jMRmd%2BhRSzFe3nWajJfjF9hzXhdcfCTt8Wo44jUQu4wuw4BhrXVmlHmNvM9T6Cwu0Sx1olRjwbTyw%2BklgavSLDwND5OAXtgeeDBU03p2JMdz%2Bo83PtoUvnn9HiYvEOcIx7UWu4RtD%2BLPlibadVg6IW9yuRvCLKReP0nOlTUtCDBoqIkSjKk1paL8PgLl4IrAY5rbGlwjJo3vl5V7rJuaIpWYF2zxfjlr0lSVXSSpo3GSRpe89Z16KdOc6zD7lb0l9vbu3b8ZePIaZr0k%2BVUbCQaW0jeBi95Dz12P%2Bcu3qY1HyNjhXoCC4ajIo5k1G0ddP%2F4eDyWwreOt9ew7QMQkLnt8U92TGOdn8Qg77oVZpEZtT5y8EJUt8dhav5tut7L%2Fela68FuASf4YAxLIBdH0t3OmnphrxhVczcX04qMoq8KZeZ2oY5r653%2Fcc0wyKfCxAY6pgHFc3bSYPbeiO%2BKOh2zjOhCimXc35RiFQlgs6xcAtg3q4WwHs3EhIynFEuoOwDJe0UohySdNs%2BkZMp%2B%2FeC210p5yu6vu5XJydkpdzP%2BKlYDQTVFNT94YYZqcjc5dgbOIlovF2k2LWzj3oZz%2Bv2STT0u8YqonUewYYHFBv6dKPV6LPR8lxRluTQDVb5zzkKLOviluUDtKmF6DZQQcflXLyap9zGJVv4D&X-Amz-Signature=731c073e119f7f0baf606c6149ff2d0fdf6bbc9174d39687dffecd01bfed1ff4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCJ3TLEN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIH6XlE5OG5tnlm5cnak8MK5aR46NoWCdr9JNxc%2BQqLxUAiAEOSnu9ZjIyP0vLOKTITsR%2F5fm0uGB6TgowLGsO8%2BXtCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMUSWcAedL7vQ%2BPwWQKtwDJCimBP8mNhmUG58CB2LFNP01Q%2FHUpm6ORqBgJMbJEULl3O7BC8ejloZ4mo6VXTzGt47Q89jacor6MI%2B7NDp638JiCvOMCcctcqIcVCRe0hZRllwuWFnAiiHukWBd8OMaBai9kUP3Qg71ipZsO6%2BzP1ykOz0eYYEneoODjFmdXOKolZSs1wOw1z1ugUVE81dF4jMRmd%2BhRSzFe3nWajJfjF9hzXhdcfCTt8Wo44jUQu4wuw4BhrXVmlHmNvM9T6Cwu0Sx1olRjwbTyw%2BklgavSLDwND5OAXtgeeDBU03p2JMdz%2Bo83PtoUvnn9HiYvEOcIx7UWu4RtD%2BLPlibadVg6IW9yuRvCLKReP0nOlTUtCDBoqIkSjKk1paL8PgLl4IrAY5rbGlwjJo3vl5V7rJuaIpWYF2zxfjlr0lSVXSSpo3GSRpe89Z16KdOc6zD7lb0l9vbu3b8ZePIaZr0k%2BVUbCQaW0jeBi95Dz12P%2Bcu3qY1HyNjhXoCC4ajIo5k1G0ddP%2F4eDyWwreOt9ew7QMQkLnt8U92TGOdn8Qg77oVZpEZtT5y8EJUt8dhav5tut7L%2Fela68FuASf4YAxLIBdH0t3OmnphrxhVczcX04qMoq8KZeZ2oY5r653%2Fcc0wyKfCxAY6pgHFc3bSYPbeiO%2BKOh2zjOhCimXc35RiFQlgs6xcAtg3q4WwHs3EhIynFEuoOwDJe0UohySdNs%2BkZMp%2B%2FeC210p5yu6vu5XJydkpdzP%2BKlYDQTVFNT94YYZqcjc5dgbOIlovF2k2LWzj3oZz%2Bv2STT0u8YqonUewYYHFBv6dKPV6LPR8lxRluTQDVb5zzkKLOviluUDtKmF6DZQQcflXLyap9zGJVv4D&X-Amz-Signature=0654e3f3455b234e88c62c59175be9c3d503dc5e8b7574b3eb7643482e38c4ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
