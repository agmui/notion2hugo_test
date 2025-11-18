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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSPMD4O7%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHahKsHduK5uT7HxQshxCoiX60hY2cUJK3WbHd8sVm6vAiEArSP%2Br9duVCuwVLTA59SXmGZjriXI9s7mca6D3JI5T%2F4qiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwenQmlVH%2F4Aj%2BAPyrcA88%2B143dRKROQZmgE3nqizUKyR2YZ78HbeT0AerQYUegvnzJjxYAR7eCARc%2BfsQvZcT5xQgRc0nCho1duZxyVteecK%2BNOGdTPzfK6pgmqIcNoKPeZL5JyClPMUaMiuFnHhIO7E%2FNQx93A4H%2BV05j%2BJkip2aagNGeovlNC4CMHzf01z%2FBVFH62Ym76tFl9q2vNxp5O90cYFX4GhmqH6rVFdqk%2FyTSZ0Ld6WpA5GkSn1WgXJMoe4%2F7%2Bzw3iZaqyFC0AWnmbwTed7gHROVvynsdIFg43cCN%2BbqRqpbySzuEc7mXwbwtvkb655Ve%2FGrUNJt8PQeTCDwZ%2BPm6fVRLlgYbotGCZOYzHYLl2ve6mLO%2F11MLk9mMGrhvSYc7oUbaqItRxn7hZmOhoXtbcRAoL1AraGOBvY2hgeovQPP%2BYB7FzUcX3VY2YIiigue0Xzc2Y6iOtRCRJtqhi4aCLgcVi3qhvfxVWVLUoGwAs%2B1PfgeiE1WiyuYPEiHN0HfDzA0vLcJt5ore0TG%2FsmedJZcoUpLCxLr%2Ba07Bl%2FrvIcom4WqldJXSI6RVNYdj7s%2Bu8TJbATh48xJ6jUksNZbV2yQmXm0REzGKZPsP5IrOLM0illhQeXU8D%2Be1XxwX5LzXAtCAMMiY78gGOqUBp23ZINwt5yapALMyFbFg54nqUqydstXEZ0pLdZi%2Fl795QHljoGw7b9ysQh0mNEC3gR5WqkIp6hMrRG%2F9RAn0y7HcbPfzVqoLtB7XoWuq43vfBBHxRUgr5gIY73R7tFH44m7KUkgWG18wUir7kSqWu%2Bm%2BPr3yu4ssjm5fHhOKZhXolJxVnVPZwHUObgKBjK%2Fz19XYPeDB72D9KICuLxN%2FwsWRXSx8&X-Amz-Signature=50a454138f33409f5a06d0225b512f2595cbfe65e2e55df862de7f9ce49ed292&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJEOBM6P%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy%2F2iUWSUBmhqDJ1iShdIqImnC22A%2FZaf%2ByR7xH2Tx4wIgMW5bef%2BnCkKIQ87ujV5mnqe3BMpM08n4wNo0ZW7bSKwqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfMY3a0uHP5%2B0KnnyrcAxA1jYSlAzLxFGw0xNfviyCCRliLUGFQ%2BJpfrJjzl3CYCoXHDZrXygQQlOUyiHofhOHRms2UHi6YBvRhzmPvTupzJDjlUJ40dsp5LF2nnOy94AOnUHom8t2AtN6yThS2WeoGPlwWLVQEnj6f%2BY9jlALdcrN%2BnRX0rrMDCelE9CcofUlh1az1w4VwJzRsZCKIVuJlYiygLdh5p0iT%2FGKaSSzFypeNCG462cwwKNBkqdgB5CrYpA9MvucPg403QEXfROBgTesQgI%2BVjpk07vRH6gtdP84rjgJTqP5AvL2vt38EYSvQYe7lAu%2FSaOaLSUf8yNJLHFFSMH7mf33i8i4c6Ycu8shv5f20dONFK1vPxsB1ar%2FNUL8vWCGR3Jg8z%2BXES%2BEoHHnB3no8U7eBCaGDno2SvsyggKjA%2F1%2FSgWUi62io%2FaHC0t1DqjACQyJcTvE6UZh6vLtykG%2BcoUFYM51yV4awSHg7D%2BVJGYeNzSLK2sFqN8M892xeeOB%2BkkViTugtGeZiA4p8b00%2BpEua%2B3bj0l8%2B44aSS01amfz921o34%2BXF%2BlixYEeSuhqMUU2AZ1S%2FswN%2BdVuO0dMzZjrrMK22T7iG3ZEA8hmSMpFei6HXyDcgW5jvHxEFDZSFUyjbMPWX78gGOqUBzeYd9ugCIwjzBy%2F0X%2FQXnBYx47%2F%2FrPDGlct0UCUNu3J%2BhXIObq5is%2BADoA2Uv%2BmYsX8R6zXUkneb2tG3efanjWJ6CFw5dkuCqNugLQ2K0Blhj0Fv1vpdC1xU%2Bp2pUUGg2p3n4PUl3a3sw%2FOv2MWMYWzL%2FCOqwTfK0q6IlO3FAh9pzjPhn9kog%2FnC%2FrGSZ9nl6tfgLvSPBB35jy2vZQCmTeyqWndA&X-Amz-Signature=93c93a94b918b510a5239d7a9efacd62fbcf907f918efecd14ccc0d30319b697&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJEOBM6P%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy%2F2iUWSUBmhqDJ1iShdIqImnC22A%2FZaf%2ByR7xH2Tx4wIgMW5bef%2BnCkKIQ87ujV5mnqe3BMpM08n4wNo0ZW7bSKwqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfMY3a0uHP5%2B0KnnyrcAxA1jYSlAzLxFGw0xNfviyCCRliLUGFQ%2BJpfrJjzl3CYCoXHDZrXygQQlOUyiHofhOHRms2UHi6YBvRhzmPvTupzJDjlUJ40dsp5LF2nnOy94AOnUHom8t2AtN6yThS2WeoGPlwWLVQEnj6f%2BY9jlALdcrN%2BnRX0rrMDCelE9CcofUlh1az1w4VwJzRsZCKIVuJlYiygLdh5p0iT%2FGKaSSzFypeNCG462cwwKNBkqdgB5CrYpA9MvucPg403QEXfROBgTesQgI%2BVjpk07vRH6gtdP84rjgJTqP5AvL2vt38EYSvQYe7lAu%2FSaOaLSUf8yNJLHFFSMH7mf33i8i4c6Ycu8shv5f20dONFK1vPxsB1ar%2FNUL8vWCGR3Jg8z%2BXES%2BEoHHnB3no8U7eBCaGDno2SvsyggKjA%2F1%2FSgWUi62io%2FaHC0t1DqjACQyJcTvE6UZh6vLtykG%2BcoUFYM51yV4awSHg7D%2BVJGYeNzSLK2sFqN8M892xeeOB%2BkkViTugtGeZiA4p8b00%2BpEua%2B3bj0l8%2B44aSS01amfz921o34%2BXF%2BlixYEeSuhqMUU2AZ1S%2FswN%2BdVuO0dMzZjrrMK22T7iG3ZEA8hmSMpFei6HXyDcgW5jvHxEFDZSFUyjbMPWX78gGOqUBzeYd9ugCIwjzBy%2F0X%2FQXnBYx47%2F%2FrPDGlct0UCUNu3J%2BhXIObq5is%2BADoA2Uv%2BmYsX8R6zXUkneb2tG3efanjWJ6CFw5dkuCqNugLQ2K0Blhj0Fv1vpdC1xU%2Bp2pUUGg2p3n4PUl3a3sw%2FOv2MWMYWzL%2FCOqwTfK0q6IlO3FAh9pzjPhn9kog%2FnC%2FrGSZ9nl6tfgLvSPBB35jy2vZQCmTeyqWndA&X-Amz-Signature=09d1afca804858350d77928ae90caf6689e20c1c080c3e2f548bd6733d52932d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJEOBM6P%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy%2F2iUWSUBmhqDJ1iShdIqImnC22A%2FZaf%2ByR7xH2Tx4wIgMW5bef%2BnCkKIQ87ujV5mnqe3BMpM08n4wNo0ZW7bSKwqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfMY3a0uHP5%2B0KnnyrcAxA1jYSlAzLxFGw0xNfviyCCRliLUGFQ%2BJpfrJjzl3CYCoXHDZrXygQQlOUyiHofhOHRms2UHi6YBvRhzmPvTupzJDjlUJ40dsp5LF2nnOy94AOnUHom8t2AtN6yThS2WeoGPlwWLVQEnj6f%2BY9jlALdcrN%2BnRX0rrMDCelE9CcofUlh1az1w4VwJzRsZCKIVuJlYiygLdh5p0iT%2FGKaSSzFypeNCG462cwwKNBkqdgB5CrYpA9MvucPg403QEXfROBgTesQgI%2BVjpk07vRH6gtdP84rjgJTqP5AvL2vt38EYSvQYe7lAu%2FSaOaLSUf8yNJLHFFSMH7mf33i8i4c6Ycu8shv5f20dONFK1vPxsB1ar%2FNUL8vWCGR3Jg8z%2BXES%2BEoHHnB3no8U7eBCaGDno2SvsyggKjA%2F1%2FSgWUi62io%2FaHC0t1DqjACQyJcTvE6UZh6vLtykG%2BcoUFYM51yV4awSHg7D%2BVJGYeNzSLK2sFqN8M892xeeOB%2BkkViTugtGeZiA4p8b00%2BpEua%2B3bj0l8%2B44aSS01amfz921o34%2BXF%2BlixYEeSuhqMUU2AZ1S%2FswN%2BdVuO0dMzZjrrMK22T7iG3ZEA8hmSMpFei6HXyDcgW5jvHxEFDZSFUyjbMPWX78gGOqUBzeYd9ugCIwjzBy%2F0X%2FQXnBYx47%2F%2FrPDGlct0UCUNu3J%2BhXIObq5is%2BADoA2Uv%2BmYsX8R6zXUkneb2tG3efanjWJ6CFw5dkuCqNugLQ2K0Blhj0Fv1vpdC1xU%2Bp2pUUGg2p3n4PUl3a3sw%2FOv2MWMYWzL%2FCOqwTfK0q6IlO3FAh9pzjPhn9kog%2FnC%2FrGSZ9nl6tfgLvSPBB35jy2vZQCmTeyqWndA&X-Amz-Signature=8682d36a005344f5900f4a728d1da70c31626259e1431ac6070f5f767545904b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJEOBM6P%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy%2F2iUWSUBmhqDJ1iShdIqImnC22A%2FZaf%2ByR7xH2Tx4wIgMW5bef%2BnCkKIQ87ujV5mnqe3BMpM08n4wNo0ZW7bSKwqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfMY3a0uHP5%2B0KnnyrcAxA1jYSlAzLxFGw0xNfviyCCRliLUGFQ%2BJpfrJjzl3CYCoXHDZrXygQQlOUyiHofhOHRms2UHi6YBvRhzmPvTupzJDjlUJ40dsp5LF2nnOy94AOnUHom8t2AtN6yThS2WeoGPlwWLVQEnj6f%2BY9jlALdcrN%2BnRX0rrMDCelE9CcofUlh1az1w4VwJzRsZCKIVuJlYiygLdh5p0iT%2FGKaSSzFypeNCG462cwwKNBkqdgB5CrYpA9MvucPg403QEXfROBgTesQgI%2BVjpk07vRH6gtdP84rjgJTqP5AvL2vt38EYSvQYe7lAu%2FSaOaLSUf8yNJLHFFSMH7mf33i8i4c6Ycu8shv5f20dONFK1vPxsB1ar%2FNUL8vWCGR3Jg8z%2BXES%2BEoHHnB3no8U7eBCaGDno2SvsyggKjA%2F1%2FSgWUi62io%2FaHC0t1DqjACQyJcTvE6UZh6vLtykG%2BcoUFYM51yV4awSHg7D%2BVJGYeNzSLK2sFqN8M892xeeOB%2BkkViTugtGeZiA4p8b00%2BpEua%2B3bj0l8%2B44aSS01amfz921o34%2BXF%2BlixYEeSuhqMUU2AZ1S%2FswN%2BdVuO0dMzZjrrMK22T7iG3ZEA8hmSMpFei6HXyDcgW5jvHxEFDZSFUyjbMPWX78gGOqUBzeYd9ugCIwjzBy%2F0X%2FQXnBYx47%2F%2FrPDGlct0UCUNu3J%2BhXIObq5is%2BADoA2Uv%2BmYsX8R6zXUkneb2tG3efanjWJ6CFw5dkuCqNugLQ2K0Blhj0Fv1vpdC1xU%2Bp2pUUGg2p3n4PUl3a3sw%2FOv2MWMYWzL%2FCOqwTfK0q6IlO3FAh9pzjPhn9kog%2FnC%2FrGSZ9nl6tfgLvSPBB35jy2vZQCmTeyqWndA&X-Amz-Signature=cd6c96313c7db28726e0fc1369a1dfe5d3be218bc0aceecfd41e42d6c0b0183a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJEOBM6P%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy%2F2iUWSUBmhqDJ1iShdIqImnC22A%2FZaf%2ByR7xH2Tx4wIgMW5bef%2BnCkKIQ87ujV5mnqe3BMpM08n4wNo0ZW7bSKwqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfMY3a0uHP5%2B0KnnyrcAxA1jYSlAzLxFGw0xNfviyCCRliLUGFQ%2BJpfrJjzl3CYCoXHDZrXygQQlOUyiHofhOHRms2UHi6YBvRhzmPvTupzJDjlUJ40dsp5LF2nnOy94AOnUHom8t2AtN6yThS2WeoGPlwWLVQEnj6f%2BY9jlALdcrN%2BnRX0rrMDCelE9CcofUlh1az1w4VwJzRsZCKIVuJlYiygLdh5p0iT%2FGKaSSzFypeNCG462cwwKNBkqdgB5CrYpA9MvucPg403QEXfROBgTesQgI%2BVjpk07vRH6gtdP84rjgJTqP5AvL2vt38EYSvQYe7lAu%2FSaOaLSUf8yNJLHFFSMH7mf33i8i4c6Ycu8shv5f20dONFK1vPxsB1ar%2FNUL8vWCGR3Jg8z%2BXES%2BEoHHnB3no8U7eBCaGDno2SvsyggKjA%2F1%2FSgWUi62io%2FaHC0t1DqjACQyJcTvE6UZh6vLtykG%2BcoUFYM51yV4awSHg7D%2BVJGYeNzSLK2sFqN8M892xeeOB%2BkkViTugtGeZiA4p8b00%2BpEua%2B3bj0l8%2B44aSS01amfz921o34%2BXF%2BlixYEeSuhqMUU2AZ1S%2FswN%2BdVuO0dMzZjrrMK22T7iG3ZEA8hmSMpFei6HXyDcgW5jvHxEFDZSFUyjbMPWX78gGOqUBzeYd9ugCIwjzBy%2F0X%2FQXnBYx47%2F%2FrPDGlct0UCUNu3J%2BhXIObq5is%2BADoA2Uv%2BmYsX8R6zXUkneb2tG3efanjWJ6CFw5dkuCqNugLQ2K0Blhj0Fv1vpdC1xU%2Bp2pUUGg2p3n4PUl3a3sw%2FOv2MWMYWzL%2FCOqwTfK0q6IlO3FAh9pzjPhn9kog%2FnC%2FrGSZ9nl6tfgLvSPBB35jy2vZQCmTeyqWndA&X-Amz-Signature=72c5f871e8257d46a13e9c57ab01ca65f4c4bdd93d9463510fd50758c3defab1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJEOBM6P%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy%2F2iUWSUBmhqDJ1iShdIqImnC22A%2FZaf%2ByR7xH2Tx4wIgMW5bef%2BnCkKIQ87ujV5mnqe3BMpM08n4wNo0ZW7bSKwqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfMY3a0uHP5%2B0KnnyrcAxA1jYSlAzLxFGw0xNfviyCCRliLUGFQ%2BJpfrJjzl3CYCoXHDZrXygQQlOUyiHofhOHRms2UHi6YBvRhzmPvTupzJDjlUJ40dsp5LF2nnOy94AOnUHom8t2AtN6yThS2WeoGPlwWLVQEnj6f%2BY9jlALdcrN%2BnRX0rrMDCelE9CcofUlh1az1w4VwJzRsZCKIVuJlYiygLdh5p0iT%2FGKaSSzFypeNCG462cwwKNBkqdgB5CrYpA9MvucPg403QEXfROBgTesQgI%2BVjpk07vRH6gtdP84rjgJTqP5AvL2vt38EYSvQYe7lAu%2FSaOaLSUf8yNJLHFFSMH7mf33i8i4c6Ycu8shv5f20dONFK1vPxsB1ar%2FNUL8vWCGR3Jg8z%2BXES%2BEoHHnB3no8U7eBCaGDno2SvsyggKjA%2F1%2FSgWUi62io%2FaHC0t1DqjACQyJcTvE6UZh6vLtykG%2BcoUFYM51yV4awSHg7D%2BVJGYeNzSLK2sFqN8M892xeeOB%2BkkViTugtGeZiA4p8b00%2BpEua%2B3bj0l8%2B44aSS01amfz921o34%2BXF%2BlixYEeSuhqMUU2AZ1S%2FswN%2BdVuO0dMzZjrrMK22T7iG3ZEA8hmSMpFei6HXyDcgW5jvHxEFDZSFUyjbMPWX78gGOqUBzeYd9ugCIwjzBy%2F0X%2FQXnBYx47%2F%2FrPDGlct0UCUNu3J%2BhXIObq5is%2BADoA2Uv%2BmYsX8R6zXUkneb2tG3efanjWJ6CFw5dkuCqNugLQ2K0Blhj0Fv1vpdC1xU%2Bp2pUUGg2p3n4PUl3a3sw%2FOv2MWMYWzL%2FCOqwTfK0q6IlO3FAh9pzjPhn9kog%2FnC%2FrGSZ9nl6tfgLvSPBB35jy2vZQCmTeyqWndA&X-Amz-Signature=e173dc1a9afb29f313b15f904f100747a00a7776582099c96cfc1379df5f2243&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJEOBM6P%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy%2F2iUWSUBmhqDJ1iShdIqImnC22A%2FZaf%2ByR7xH2Tx4wIgMW5bef%2BnCkKIQ87ujV5mnqe3BMpM08n4wNo0ZW7bSKwqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfMY3a0uHP5%2B0KnnyrcAxA1jYSlAzLxFGw0xNfviyCCRliLUGFQ%2BJpfrJjzl3CYCoXHDZrXygQQlOUyiHofhOHRms2UHi6YBvRhzmPvTupzJDjlUJ40dsp5LF2nnOy94AOnUHom8t2AtN6yThS2WeoGPlwWLVQEnj6f%2BY9jlALdcrN%2BnRX0rrMDCelE9CcofUlh1az1w4VwJzRsZCKIVuJlYiygLdh5p0iT%2FGKaSSzFypeNCG462cwwKNBkqdgB5CrYpA9MvucPg403QEXfROBgTesQgI%2BVjpk07vRH6gtdP84rjgJTqP5AvL2vt38EYSvQYe7lAu%2FSaOaLSUf8yNJLHFFSMH7mf33i8i4c6Ycu8shv5f20dONFK1vPxsB1ar%2FNUL8vWCGR3Jg8z%2BXES%2BEoHHnB3no8U7eBCaGDno2SvsyggKjA%2F1%2FSgWUi62io%2FaHC0t1DqjACQyJcTvE6UZh6vLtykG%2BcoUFYM51yV4awSHg7D%2BVJGYeNzSLK2sFqN8M892xeeOB%2BkkViTugtGeZiA4p8b00%2BpEua%2B3bj0l8%2B44aSS01amfz921o34%2BXF%2BlixYEeSuhqMUU2AZ1S%2FswN%2BdVuO0dMzZjrrMK22T7iG3ZEA8hmSMpFei6HXyDcgW5jvHxEFDZSFUyjbMPWX78gGOqUBzeYd9ugCIwjzBy%2F0X%2FQXnBYx47%2F%2FrPDGlct0UCUNu3J%2BhXIObq5is%2BADoA2Uv%2BmYsX8R6zXUkneb2tG3efanjWJ6CFw5dkuCqNugLQ2K0Blhj0Fv1vpdC1xU%2Bp2pUUGg2p3n4PUl3a3sw%2FOv2MWMYWzL%2FCOqwTfK0q6IlO3FAh9pzjPhn9kog%2FnC%2FrGSZ9nl6tfgLvSPBB35jy2vZQCmTeyqWndA&X-Amz-Signature=54f0e28fd54346f6f5207affa3b576f72793c31cbbd6f137c14216511d741bad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJEOBM6P%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy%2F2iUWSUBmhqDJ1iShdIqImnC22A%2FZaf%2ByR7xH2Tx4wIgMW5bef%2BnCkKIQ87ujV5mnqe3BMpM08n4wNo0ZW7bSKwqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfMY3a0uHP5%2B0KnnyrcAxA1jYSlAzLxFGw0xNfviyCCRliLUGFQ%2BJpfrJjzl3CYCoXHDZrXygQQlOUyiHofhOHRms2UHi6YBvRhzmPvTupzJDjlUJ40dsp5LF2nnOy94AOnUHom8t2AtN6yThS2WeoGPlwWLVQEnj6f%2BY9jlALdcrN%2BnRX0rrMDCelE9CcofUlh1az1w4VwJzRsZCKIVuJlYiygLdh5p0iT%2FGKaSSzFypeNCG462cwwKNBkqdgB5CrYpA9MvucPg403QEXfROBgTesQgI%2BVjpk07vRH6gtdP84rjgJTqP5AvL2vt38EYSvQYe7lAu%2FSaOaLSUf8yNJLHFFSMH7mf33i8i4c6Ycu8shv5f20dONFK1vPxsB1ar%2FNUL8vWCGR3Jg8z%2BXES%2BEoHHnB3no8U7eBCaGDno2SvsyggKjA%2F1%2FSgWUi62io%2FaHC0t1DqjACQyJcTvE6UZh6vLtykG%2BcoUFYM51yV4awSHg7D%2BVJGYeNzSLK2sFqN8M892xeeOB%2BkkViTugtGeZiA4p8b00%2BpEua%2B3bj0l8%2B44aSS01amfz921o34%2BXF%2BlixYEeSuhqMUU2AZ1S%2FswN%2BdVuO0dMzZjrrMK22T7iG3ZEA8hmSMpFei6HXyDcgW5jvHxEFDZSFUyjbMPWX78gGOqUBzeYd9ugCIwjzBy%2F0X%2FQXnBYx47%2F%2FrPDGlct0UCUNu3J%2BhXIObq5is%2BADoA2Uv%2BmYsX8R6zXUkneb2tG3efanjWJ6CFw5dkuCqNugLQ2K0Blhj0Fv1vpdC1xU%2Bp2pUUGg2p3n4PUl3a3sw%2FOv2MWMYWzL%2FCOqwTfK0q6IlO3FAh9pzjPhn9kog%2FnC%2FrGSZ9nl6tfgLvSPBB35jy2vZQCmTeyqWndA&X-Amz-Signature=3e3a2120c7596b205a1a2d7b4fabe766989234be7b47796e038fcb5d676043b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJEOBM6P%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy%2F2iUWSUBmhqDJ1iShdIqImnC22A%2FZaf%2ByR7xH2Tx4wIgMW5bef%2BnCkKIQ87ujV5mnqe3BMpM08n4wNo0ZW7bSKwqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfMY3a0uHP5%2B0KnnyrcAxA1jYSlAzLxFGw0xNfviyCCRliLUGFQ%2BJpfrJjzl3CYCoXHDZrXygQQlOUyiHofhOHRms2UHi6YBvRhzmPvTupzJDjlUJ40dsp5LF2nnOy94AOnUHom8t2AtN6yThS2WeoGPlwWLVQEnj6f%2BY9jlALdcrN%2BnRX0rrMDCelE9CcofUlh1az1w4VwJzRsZCKIVuJlYiygLdh5p0iT%2FGKaSSzFypeNCG462cwwKNBkqdgB5CrYpA9MvucPg403QEXfROBgTesQgI%2BVjpk07vRH6gtdP84rjgJTqP5AvL2vt38EYSvQYe7lAu%2FSaOaLSUf8yNJLHFFSMH7mf33i8i4c6Ycu8shv5f20dONFK1vPxsB1ar%2FNUL8vWCGR3Jg8z%2BXES%2BEoHHnB3no8U7eBCaGDno2SvsyggKjA%2F1%2FSgWUi62io%2FaHC0t1DqjACQyJcTvE6UZh6vLtykG%2BcoUFYM51yV4awSHg7D%2BVJGYeNzSLK2sFqN8M892xeeOB%2BkkViTugtGeZiA4p8b00%2BpEua%2B3bj0l8%2B44aSS01amfz921o34%2BXF%2BlixYEeSuhqMUU2AZ1S%2FswN%2BdVuO0dMzZjrrMK22T7iG3ZEA8hmSMpFei6HXyDcgW5jvHxEFDZSFUyjbMPWX78gGOqUBzeYd9ugCIwjzBy%2F0X%2FQXnBYx47%2F%2FrPDGlct0UCUNu3J%2BhXIObq5is%2BADoA2Uv%2BmYsX8R6zXUkneb2tG3efanjWJ6CFw5dkuCqNugLQ2K0Blhj0Fv1vpdC1xU%2Bp2pUUGg2p3n4PUl3a3sw%2FOv2MWMYWzL%2FCOqwTfK0q6IlO3FAh9pzjPhn9kog%2FnC%2FrGSZ9nl6tfgLvSPBB35jy2vZQCmTeyqWndA&X-Amz-Signature=7387a051aba696a5ff1e4460e4451af6bf78334f3bf9e2372a6b600677376a02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJEOBM6P%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy%2F2iUWSUBmhqDJ1iShdIqImnC22A%2FZaf%2ByR7xH2Tx4wIgMW5bef%2BnCkKIQ87ujV5mnqe3BMpM08n4wNo0ZW7bSKwqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfMY3a0uHP5%2B0KnnyrcAxA1jYSlAzLxFGw0xNfviyCCRliLUGFQ%2BJpfrJjzl3CYCoXHDZrXygQQlOUyiHofhOHRms2UHi6YBvRhzmPvTupzJDjlUJ40dsp5LF2nnOy94AOnUHom8t2AtN6yThS2WeoGPlwWLVQEnj6f%2BY9jlALdcrN%2BnRX0rrMDCelE9CcofUlh1az1w4VwJzRsZCKIVuJlYiygLdh5p0iT%2FGKaSSzFypeNCG462cwwKNBkqdgB5CrYpA9MvucPg403QEXfROBgTesQgI%2BVjpk07vRH6gtdP84rjgJTqP5AvL2vt38EYSvQYe7lAu%2FSaOaLSUf8yNJLHFFSMH7mf33i8i4c6Ycu8shv5f20dONFK1vPxsB1ar%2FNUL8vWCGR3Jg8z%2BXES%2BEoHHnB3no8U7eBCaGDno2SvsyggKjA%2F1%2FSgWUi62io%2FaHC0t1DqjACQyJcTvE6UZh6vLtykG%2BcoUFYM51yV4awSHg7D%2BVJGYeNzSLK2sFqN8M892xeeOB%2BkkViTugtGeZiA4p8b00%2BpEua%2B3bj0l8%2B44aSS01amfz921o34%2BXF%2BlixYEeSuhqMUU2AZ1S%2FswN%2BdVuO0dMzZjrrMK22T7iG3ZEA8hmSMpFei6HXyDcgW5jvHxEFDZSFUyjbMPWX78gGOqUBzeYd9ugCIwjzBy%2F0X%2FQXnBYx47%2F%2FrPDGlct0UCUNu3J%2BhXIObq5is%2BADoA2Uv%2BmYsX8R6zXUkneb2tG3efanjWJ6CFw5dkuCqNugLQ2K0Blhj0Fv1vpdC1xU%2Bp2pUUGg2p3n4PUl3a3sw%2FOv2MWMYWzL%2FCOqwTfK0q6IlO3FAh9pzjPhn9kog%2FnC%2FrGSZ9nl6tfgLvSPBB35jy2vZQCmTeyqWndA&X-Amz-Signature=ccef76715cf03084482f44c549041fca8a686cab5c776a4d208b5e574578c772&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
