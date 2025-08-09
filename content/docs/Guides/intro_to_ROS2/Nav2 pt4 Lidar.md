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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUOM5AMY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FAZE1Bpi%2B0fsDHNc32W%2Fte%2FM5SyoXqtWvfF7odrHtugIgUJbEtxO%2FR9KL%2FOEkE9D1DVRfLWLheB23EoKJxNvqjlYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGmXDAtI%2FCE626DXyrcAzeFBxlXX6q5lzjZQY7jseq7h5y4p1N9%2B%2FCjMou9wmhR144GGq29PG5lFFLklumErb2twinPtGJ6TfghIh7eq5OjJ4ehpHOrFCksij9HaeogFurnynI6jOiLRFsBENS9cWOh3zFG7%2FXrmxfok12ootxBWs8dgbBrQqJtRsrIFiZX8rf6%2FU7dRAoYHaGeBEr0m1Rg2g24YvN93yLV5%2FBGEC%2F3jQbqfjwiTmP1%2F8XYhai9mpYMkGM2wYoztltwG%2BKDiWQZznceS4FwDK8Tfh2BqkVglu8i8yQt4hNgkuqspVkQjm8u7zHxef1ES5ZhhddKNYzfdltAyloGXiMU0OXjhWkPTNPOst0MhPAoBHQ%2BxNHBXZ4M7cA2VKOvfa2iiKYiTAqJEtXD4KvvAvFbxWscVKRPUUi5ELhbPzy9Ah%2BT859wgi5%2FqsdCjNytr8eDIVG2AjaTqtsZdCIxsRrfCyT%2FLBuMwXxAUa%2FS8g%2FQshQ20rtBwnOvPET1qjFXs7VavYwpBRZXpGel9g44Ba5frVVwyZ%2Bx8bfTu1czwjVC3LqET9A2tShIP6y8%2B7JYEzZLdHSM2YYxe7R2CFu%2FILaES7DjS5kufXbjH6isfe7t3C5q8OMdCFCzneFD32oB9yGUMLTi3MQGOqUBnscBu7ZZ4dYajB8tRgfrtz0%2FIQnozfPNE8i8%2FJCG3ETaz844dAkFxK1f5HVhK4EZkgMO33slf5twBGQ1oJTzmoO4sO%2Fqbw%2BD0QSzAK%2BeWbZmNIf%2B9tQPlVq%2FZ6vEcnRcblBSN%2F5dAkJbfeAPBInYyKLDT9i2FZfvNNeWgwrGfmdptaSFrlgYhCBtTQRrYFuZLx4wfyUh2Dpr%2FjeLz5UgswcQ71Iq&X-Amz-Signature=232577f341ebe1c19a341fb8d9993dd382fdee74967d7c4b3a55893957476875&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJLBPOCT%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm97lzH5omSmd2dbwMSjXefs%2B7HhomHjePtUr%2BfyJA0wIgS5nONjSBxOQP4visLtE9rSRXUTIvORoCOS%2FPYA2fBTwqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJRrKYbojfgj0Bm7oyrcA7eqhXTLaI7gXJgTMCkOIJFpQ1h9ecV0EViLQJjIGlNeaPOhEDr%2B%2B%2Fi5XZhGCQNoLd322C0fOAQgWyAM7MHp1byhj0rUzc7oeF5%2BwDVKJbBR6iJSL%2BmCn3RtIelzH9tScguLkIbhZanK5Q3gjD8qMw4cDuSt3rZZTrn5o0UJJPerUphHkhtmfbddyNGfHM%2FTuuCwpdSp43hdF%2FAOuBpl13usbzp4hQ0aXmyblODJMhryt4MoYzdx66E0NtI%2BX276lTjQooJUwemyJHpM7vPQYbONU7ClJd%2BaTBULIiTHrcV%2BugrtJY1XvCXNkK9F64eGKFQRgxyAsgJU6oZJhPMGcduzcIpv8S5ygI2%2BmLrtRMaRRUOs11kdCpMyGrIuu05tMLbyNRqZKpqrOFF0XwdT2fPg4Az2gBQS7MiSxkUKGLUqJXHdev5BQaia9KQ7tkpfZHoT0ZCNminEsTb5u3P26Ytw24Nm3Zl2n8oJCzCOVphQAJIvWPgbEgk%2BojC1LzzTbZFmtjZf83VPQnYR0OHE%2FC2r5lFAwCdJ4Mfe5z%2B0jezu1dawOJT11NVTKANNNxgSbEMxwepbWM41m%2BSXXrDzym%2FGsrFAzlcMB9DwjFcPzJ4jeGtSSZe0InbvVo6RMIjl3MQGOqUBuFGpFD5Qz29aZoVZzFWmA6VBtTDAvpKzrd0T5kPFXeB1slCtwUJhLkUvsWtcQnslbnOEEyrTQE%2Bdq%2BwT6ZYLcpq0H1X8YMGs0bsxG6Geb9NR5eVfVIYH7Tu7dfDxzxfFINbnK17bECBFsHfk6O9I3Uk5Ae%2FHCYbz2rwDhxzz0LRLHuL%2FfEndmh4fnDy4hugdwsnWQx2JsWTiqB2yV6g1C4fBFDaq&X-Amz-Signature=7dfdd89234abfda79a912a77502dd86ab505710725b68cbb3c6d1eebb50bb817&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJLBPOCT%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm97lzH5omSmd2dbwMSjXefs%2B7HhomHjePtUr%2BfyJA0wIgS5nONjSBxOQP4visLtE9rSRXUTIvORoCOS%2FPYA2fBTwqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJRrKYbojfgj0Bm7oyrcA7eqhXTLaI7gXJgTMCkOIJFpQ1h9ecV0EViLQJjIGlNeaPOhEDr%2B%2B%2Fi5XZhGCQNoLd322C0fOAQgWyAM7MHp1byhj0rUzc7oeF5%2BwDVKJbBR6iJSL%2BmCn3RtIelzH9tScguLkIbhZanK5Q3gjD8qMw4cDuSt3rZZTrn5o0UJJPerUphHkhtmfbddyNGfHM%2FTuuCwpdSp43hdF%2FAOuBpl13usbzp4hQ0aXmyblODJMhryt4MoYzdx66E0NtI%2BX276lTjQooJUwemyJHpM7vPQYbONU7ClJd%2BaTBULIiTHrcV%2BugrtJY1XvCXNkK9F64eGKFQRgxyAsgJU6oZJhPMGcduzcIpv8S5ygI2%2BmLrtRMaRRUOs11kdCpMyGrIuu05tMLbyNRqZKpqrOFF0XwdT2fPg4Az2gBQS7MiSxkUKGLUqJXHdev5BQaia9KQ7tkpfZHoT0ZCNminEsTb5u3P26Ytw24Nm3Zl2n8oJCzCOVphQAJIvWPgbEgk%2BojC1LzzTbZFmtjZf83VPQnYR0OHE%2FC2r5lFAwCdJ4Mfe5z%2B0jezu1dawOJT11NVTKANNNxgSbEMxwepbWM41m%2BSXXrDzym%2FGsrFAzlcMB9DwjFcPzJ4jeGtSSZe0InbvVo6RMIjl3MQGOqUBuFGpFD5Qz29aZoVZzFWmA6VBtTDAvpKzrd0T5kPFXeB1slCtwUJhLkUvsWtcQnslbnOEEyrTQE%2Bdq%2BwT6ZYLcpq0H1X8YMGs0bsxG6Geb9NR5eVfVIYH7Tu7dfDxzxfFINbnK17bECBFsHfk6O9I3Uk5Ae%2FHCYbz2rwDhxzz0LRLHuL%2FfEndmh4fnDy4hugdwsnWQx2JsWTiqB2yV6g1C4fBFDaq&X-Amz-Signature=7693e1a404bf82c17ca0dd0b2fbc603511950b5be58621efecb360ddf3f97971&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJLBPOCT%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm97lzH5omSmd2dbwMSjXefs%2B7HhomHjePtUr%2BfyJA0wIgS5nONjSBxOQP4visLtE9rSRXUTIvORoCOS%2FPYA2fBTwqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJRrKYbojfgj0Bm7oyrcA7eqhXTLaI7gXJgTMCkOIJFpQ1h9ecV0EViLQJjIGlNeaPOhEDr%2B%2B%2Fi5XZhGCQNoLd322C0fOAQgWyAM7MHp1byhj0rUzc7oeF5%2BwDVKJbBR6iJSL%2BmCn3RtIelzH9tScguLkIbhZanK5Q3gjD8qMw4cDuSt3rZZTrn5o0UJJPerUphHkhtmfbddyNGfHM%2FTuuCwpdSp43hdF%2FAOuBpl13usbzp4hQ0aXmyblODJMhryt4MoYzdx66E0NtI%2BX276lTjQooJUwemyJHpM7vPQYbONU7ClJd%2BaTBULIiTHrcV%2BugrtJY1XvCXNkK9F64eGKFQRgxyAsgJU6oZJhPMGcduzcIpv8S5ygI2%2BmLrtRMaRRUOs11kdCpMyGrIuu05tMLbyNRqZKpqrOFF0XwdT2fPg4Az2gBQS7MiSxkUKGLUqJXHdev5BQaia9KQ7tkpfZHoT0ZCNminEsTb5u3P26Ytw24Nm3Zl2n8oJCzCOVphQAJIvWPgbEgk%2BojC1LzzTbZFmtjZf83VPQnYR0OHE%2FC2r5lFAwCdJ4Mfe5z%2B0jezu1dawOJT11NVTKANNNxgSbEMxwepbWM41m%2BSXXrDzym%2FGsrFAzlcMB9DwjFcPzJ4jeGtSSZe0InbvVo6RMIjl3MQGOqUBuFGpFD5Qz29aZoVZzFWmA6VBtTDAvpKzrd0T5kPFXeB1slCtwUJhLkUvsWtcQnslbnOEEyrTQE%2Bdq%2BwT6ZYLcpq0H1X8YMGs0bsxG6Geb9NR5eVfVIYH7Tu7dfDxzxfFINbnK17bECBFsHfk6O9I3Uk5Ae%2FHCYbz2rwDhxzz0LRLHuL%2FfEndmh4fnDy4hugdwsnWQx2JsWTiqB2yV6g1C4fBFDaq&X-Amz-Signature=7755a78ef5eac7cd9594e32f980ff7048920a1f166a9a1ee946f20bf30ca90cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJLBPOCT%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm97lzH5omSmd2dbwMSjXefs%2B7HhomHjePtUr%2BfyJA0wIgS5nONjSBxOQP4visLtE9rSRXUTIvORoCOS%2FPYA2fBTwqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJRrKYbojfgj0Bm7oyrcA7eqhXTLaI7gXJgTMCkOIJFpQ1h9ecV0EViLQJjIGlNeaPOhEDr%2B%2B%2Fi5XZhGCQNoLd322C0fOAQgWyAM7MHp1byhj0rUzc7oeF5%2BwDVKJbBR6iJSL%2BmCn3RtIelzH9tScguLkIbhZanK5Q3gjD8qMw4cDuSt3rZZTrn5o0UJJPerUphHkhtmfbddyNGfHM%2FTuuCwpdSp43hdF%2FAOuBpl13usbzp4hQ0aXmyblODJMhryt4MoYzdx66E0NtI%2BX276lTjQooJUwemyJHpM7vPQYbONU7ClJd%2BaTBULIiTHrcV%2BugrtJY1XvCXNkK9F64eGKFQRgxyAsgJU6oZJhPMGcduzcIpv8S5ygI2%2BmLrtRMaRRUOs11kdCpMyGrIuu05tMLbyNRqZKpqrOFF0XwdT2fPg4Az2gBQS7MiSxkUKGLUqJXHdev5BQaia9KQ7tkpfZHoT0ZCNminEsTb5u3P26Ytw24Nm3Zl2n8oJCzCOVphQAJIvWPgbEgk%2BojC1LzzTbZFmtjZf83VPQnYR0OHE%2FC2r5lFAwCdJ4Mfe5z%2B0jezu1dawOJT11NVTKANNNxgSbEMxwepbWM41m%2BSXXrDzym%2FGsrFAzlcMB9DwjFcPzJ4jeGtSSZe0InbvVo6RMIjl3MQGOqUBuFGpFD5Qz29aZoVZzFWmA6VBtTDAvpKzrd0T5kPFXeB1slCtwUJhLkUvsWtcQnslbnOEEyrTQE%2Bdq%2BwT6ZYLcpq0H1X8YMGs0bsxG6Geb9NR5eVfVIYH7Tu7dfDxzxfFINbnK17bECBFsHfk6O9I3Uk5Ae%2FHCYbz2rwDhxzz0LRLHuL%2FfEndmh4fnDy4hugdwsnWQx2JsWTiqB2yV6g1C4fBFDaq&X-Amz-Signature=b7b3c3e6e8bd66251c4fc638e99cf147f49818d61f39bd7e19c6403392c2894b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJLBPOCT%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm97lzH5omSmd2dbwMSjXefs%2B7HhomHjePtUr%2BfyJA0wIgS5nONjSBxOQP4visLtE9rSRXUTIvORoCOS%2FPYA2fBTwqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJRrKYbojfgj0Bm7oyrcA7eqhXTLaI7gXJgTMCkOIJFpQ1h9ecV0EViLQJjIGlNeaPOhEDr%2B%2B%2Fi5XZhGCQNoLd322C0fOAQgWyAM7MHp1byhj0rUzc7oeF5%2BwDVKJbBR6iJSL%2BmCn3RtIelzH9tScguLkIbhZanK5Q3gjD8qMw4cDuSt3rZZTrn5o0UJJPerUphHkhtmfbddyNGfHM%2FTuuCwpdSp43hdF%2FAOuBpl13usbzp4hQ0aXmyblODJMhryt4MoYzdx66E0NtI%2BX276lTjQooJUwemyJHpM7vPQYbONU7ClJd%2BaTBULIiTHrcV%2BugrtJY1XvCXNkK9F64eGKFQRgxyAsgJU6oZJhPMGcduzcIpv8S5ygI2%2BmLrtRMaRRUOs11kdCpMyGrIuu05tMLbyNRqZKpqrOFF0XwdT2fPg4Az2gBQS7MiSxkUKGLUqJXHdev5BQaia9KQ7tkpfZHoT0ZCNminEsTb5u3P26Ytw24Nm3Zl2n8oJCzCOVphQAJIvWPgbEgk%2BojC1LzzTbZFmtjZf83VPQnYR0OHE%2FC2r5lFAwCdJ4Mfe5z%2B0jezu1dawOJT11NVTKANNNxgSbEMxwepbWM41m%2BSXXrDzym%2FGsrFAzlcMB9DwjFcPzJ4jeGtSSZe0InbvVo6RMIjl3MQGOqUBuFGpFD5Qz29aZoVZzFWmA6VBtTDAvpKzrd0T5kPFXeB1slCtwUJhLkUvsWtcQnslbnOEEyrTQE%2Bdq%2BwT6ZYLcpq0H1X8YMGs0bsxG6Geb9NR5eVfVIYH7Tu7dfDxzxfFINbnK17bECBFsHfk6O9I3Uk5Ae%2FHCYbz2rwDhxzz0LRLHuL%2FfEndmh4fnDy4hugdwsnWQx2JsWTiqB2yV6g1C4fBFDaq&X-Amz-Signature=48a33e7b0b5eeeb92680a995ccd11038b7a5e54f2563682e285bfc03b897f3d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJLBPOCT%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm97lzH5omSmd2dbwMSjXefs%2B7HhomHjePtUr%2BfyJA0wIgS5nONjSBxOQP4visLtE9rSRXUTIvORoCOS%2FPYA2fBTwqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJRrKYbojfgj0Bm7oyrcA7eqhXTLaI7gXJgTMCkOIJFpQ1h9ecV0EViLQJjIGlNeaPOhEDr%2B%2B%2Fi5XZhGCQNoLd322C0fOAQgWyAM7MHp1byhj0rUzc7oeF5%2BwDVKJbBR6iJSL%2BmCn3RtIelzH9tScguLkIbhZanK5Q3gjD8qMw4cDuSt3rZZTrn5o0UJJPerUphHkhtmfbddyNGfHM%2FTuuCwpdSp43hdF%2FAOuBpl13usbzp4hQ0aXmyblODJMhryt4MoYzdx66E0NtI%2BX276lTjQooJUwemyJHpM7vPQYbONU7ClJd%2BaTBULIiTHrcV%2BugrtJY1XvCXNkK9F64eGKFQRgxyAsgJU6oZJhPMGcduzcIpv8S5ygI2%2BmLrtRMaRRUOs11kdCpMyGrIuu05tMLbyNRqZKpqrOFF0XwdT2fPg4Az2gBQS7MiSxkUKGLUqJXHdev5BQaia9KQ7tkpfZHoT0ZCNminEsTb5u3P26Ytw24Nm3Zl2n8oJCzCOVphQAJIvWPgbEgk%2BojC1LzzTbZFmtjZf83VPQnYR0OHE%2FC2r5lFAwCdJ4Mfe5z%2B0jezu1dawOJT11NVTKANNNxgSbEMxwepbWM41m%2BSXXrDzym%2FGsrFAzlcMB9DwjFcPzJ4jeGtSSZe0InbvVo6RMIjl3MQGOqUBuFGpFD5Qz29aZoVZzFWmA6VBtTDAvpKzrd0T5kPFXeB1slCtwUJhLkUvsWtcQnslbnOEEyrTQE%2Bdq%2BwT6ZYLcpq0H1X8YMGs0bsxG6Geb9NR5eVfVIYH7Tu7dfDxzxfFINbnK17bECBFsHfk6O9I3Uk5Ae%2FHCYbz2rwDhxzz0LRLHuL%2FfEndmh4fnDy4hugdwsnWQx2JsWTiqB2yV6g1C4fBFDaq&X-Amz-Signature=9ce14225b2fdda78cf2da89183cfea89a4df952e5a904a0c62feec9322e558fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJLBPOCT%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm97lzH5omSmd2dbwMSjXefs%2B7HhomHjePtUr%2BfyJA0wIgS5nONjSBxOQP4visLtE9rSRXUTIvORoCOS%2FPYA2fBTwqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJRrKYbojfgj0Bm7oyrcA7eqhXTLaI7gXJgTMCkOIJFpQ1h9ecV0EViLQJjIGlNeaPOhEDr%2B%2B%2Fi5XZhGCQNoLd322C0fOAQgWyAM7MHp1byhj0rUzc7oeF5%2BwDVKJbBR6iJSL%2BmCn3RtIelzH9tScguLkIbhZanK5Q3gjD8qMw4cDuSt3rZZTrn5o0UJJPerUphHkhtmfbddyNGfHM%2FTuuCwpdSp43hdF%2FAOuBpl13usbzp4hQ0aXmyblODJMhryt4MoYzdx66E0NtI%2BX276lTjQooJUwemyJHpM7vPQYbONU7ClJd%2BaTBULIiTHrcV%2BugrtJY1XvCXNkK9F64eGKFQRgxyAsgJU6oZJhPMGcduzcIpv8S5ygI2%2BmLrtRMaRRUOs11kdCpMyGrIuu05tMLbyNRqZKpqrOFF0XwdT2fPg4Az2gBQS7MiSxkUKGLUqJXHdev5BQaia9KQ7tkpfZHoT0ZCNminEsTb5u3P26Ytw24Nm3Zl2n8oJCzCOVphQAJIvWPgbEgk%2BojC1LzzTbZFmtjZf83VPQnYR0OHE%2FC2r5lFAwCdJ4Mfe5z%2B0jezu1dawOJT11NVTKANNNxgSbEMxwepbWM41m%2BSXXrDzym%2FGsrFAzlcMB9DwjFcPzJ4jeGtSSZe0InbvVo6RMIjl3MQGOqUBuFGpFD5Qz29aZoVZzFWmA6VBtTDAvpKzrd0T5kPFXeB1slCtwUJhLkUvsWtcQnslbnOEEyrTQE%2Bdq%2BwT6ZYLcpq0H1X8YMGs0bsxG6Geb9NR5eVfVIYH7Tu7dfDxzxfFINbnK17bECBFsHfk6O9I3Uk5Ae%2FHCYbz2rwDhxzz0LRLHuL%2FfEndmh4fnDy4hugdwsnWQx2JsWTiqB2yV6g1C4fBFDaq&X-Amz-Signature=3d3a0d41a09e324fbef7223bcba8b017bcf1c7911e670cdd463d62c064e3152d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJLBPOCT%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm97lzH5omSmd2dbwMSjXefs%2B7HhomHjePtUr%2BfyJA0wIgS5nONjSBxOQP4visLtE9rSRXUTIvORoCOS%2FPYA2fBTwqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJRrKYbojfgj0Bm7oyrcA7eqhXTLaI7gXJgTMCkOIJFpQ1h9ecV0EViLQJjIGlNeaPOhEDr%2B%2B%2Fi5XZhGCQNoLd322C0fOAQgWyAM7MHp1byhj0rUzc7oeF5%2BwDVKJbBR6iJSL%2BmCn3RtIelzH9tScguLkIbhZanK5Q3gjD8qMw4cDuSt3rZZTrn5o0UJJPerUphHkhtmfbddyNGfHM%2FTuuCwpdSp43hdF%2FAOuBpl13usbzp4hQ0aXmyblODJMhryt4MoYzdx66E0NtI%2BX276lTjQooJUwemyJHpM7vPQYbONU7ClJd%2BaTBULIiTHrcV%2BugrtJY1XvCXNkK9F64eGKFQRgxyAsgJU6oZJhPMGcduzcIpv8S5ygI2%2BmLrtRMaRRUOs11kdCpMyGrIuu05tMLbyNRqZKpqrOFF0XwdT2fPg4Az2gBQS7MiSxkUKGLUqJXHdev5BQaia9KQ7tkpfZHoT0ZCNminEsTb5u3P26Ytw24Nm3Zl2n8oJCzCOVphQAJIvWPgbEgk%2BojC1LzzTbZFmtjZf83VPQnYR0OHE%2FC2r5lFAwCdJ4Mfe5z%2B0jezu1dawOJT11NVTKANNNxgSbEMxwepbWM41m%2BSXXrDzym%2FGsrFAzlcMB9DwjFcPzJ4jeGtSSZe0InbvVo6RMIjl3MQGOqUBuFGpFD5Qz29aZoVZzFWmA6VBtTDAvpKzrd0T5kPFXeB1slCtwUJhLkUvsWtcQnslbnOEEyrTQE%2Bdq%2BwT6ZYLcpq0H1X8YMGs0bsxG6Geb9NR5eVfVIYH7Tu7dfDxzxfFINbnK17bECBFsHfk6O9I3Uk5Ae%2FHCYbz2rwDhxzz0LRLHuL%2FfEndmh4fnDy4hugdwsnWQx2JsWTiqB2yV6g1C4fBFDaq&X-Amz-Signature=a1fbf5035aafa3e7f651a3d6dfc9ab53d75c1dc8d0df8ecd457f88d1f199fc87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJLBPOCT%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm97lzH5omSmd2dbwMSjXefs%2B7HhomHjePtUr%2BfyJA0wIgS5nONjSBxOQP4visLtE9rSRXUTIvORoCOS%2FPYA2fBTwqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJRrKYbojfgj0Bm7oyrcA7eqhXTLaI7gXJgTMCkOIJFpQ1h9ecV0EViLQJjIGlNeaPOhEDr%2B%2B%2Fi5XZhGCQNoLd322C0fOAQgWyAM7MHp1byhj0rUzc7oeF5%2BwDVKJbBR6iJSL%2BmCn3RtIelzH9tScguLkIbhZanK5Q3gjD8qMw4cDuSt3rZZTrn5o0UJJPerUphHkhtmfbddyNGfHM%2FTuuCwpdSp43hdF%2FAOuBpl13usbzp4hQ0aXmyblODJMhryt4MoYzdx66E0NtI%2BX276lTjQooJUwemyJHpM7vPQYbONU7ClJd%2BaTBULIiTHrcV%2BugrtJY1XvCXNkK9F64eGKFQRgxyAsgJU6oZJhPMGcduzcIpv8S5ygI2%2BmLrtRMaRRUOs11kdCpMyGrIuu05tMLbyNRqZKpqrOFF0XwdT2fPg4Az2gBQS7MiSxkUKGLUqJXHdev5BQaia9KQ7tkpfZHoT0ZCNminEsTb5u3P26Ytw24Nm3Zl2n8oJCzCOVphQAJIvWPgbEgk%2BojC1LzzTbZFmtjZf83VPQnYR0OHE%2FC2r5lFAwCdJ4Mfe5z%2B0jezu1dawOJT11NVTKANNNxgSbEMxwepbWM41m%2BSXXrDzym%2FGsrFAzlcMB9DwjFcPzJ4jeGtSSZe0InbvVo6RMIjl3MQGOqUBuFGpFD5Qz29aZoVZzFWmA6VBtTDAvpKzrd0T5kPFXeB1slCtwUJhLkUvsWtcQnslbnOEEyrTQE%2Bdq%2BwT6ZYLcpq0H1X8YMGs0bsxG6Geb9NR5eVfVIYH7Tu7dfDxzxfFINbnK17bECBFsHfk6O9I3Uk5Ae%2FHCYbz2rwDhxzz0LRLHuL%2FfEndmh4fnDy4hugdwsnWQx2JsWTiqB2yV6g1C4fBFDaq&X-Amz-Signature=6a74ae34862efba9af883323c495ad8949a4ca7ebab54ec88f6bf51fcab75b65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJLBPOCT%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm97lzH5omSmd2dbwMSjXefs%2B7HhomHjePtUr%2BfyJA0wIgS5nONjSBxOQP4visLtE9rSRXUTIvORoCOS%2FPYA2fBTwqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJRrKYbojfgj0Bm7oyrcA7eqhXTLaI7gXJgTMCkOIJFpQ1h9ecV0EViLQJjIGlNeaPOhEDr%2B%2B%2Fi5XZhGCQNoLd322C0fOAQgWyAM7MHp1byhj0rUzc7oeF5%2BwDVKJbBR6iJSL%2BmCn3RtIelzH9tScguLkIbhZanK5Q3gjD8qMw4cDuSt3rZZTrn5o0UJJPerUphHkhtmfbddyNGfHM%2FTuuCwpdSp43hdF%2FAOuBpl13usbzp4hQ0aXmyblODJMhryt4MoYzdx66E0NtI%2BX276lTjQooJUwemyJHpM7vPQYbONU7ClJd%2BaTBULIiTHrcV%2BugrtJY1XvCXNkK9F64eGKFQRgxyAsgJU6oZJhPMGcduzcIpv8S5ygI2%2BmLrtRMaRRUOs11kdCpMyGrIuu05tMLbyNRqZKpqrOFF0XwdT2fPg4Az2gBQS7MiSxkUKGLUqJXHdev5BQaia9KQ7tkpfZHoT0ZCNminEsTb5u3P26Ytw24Nm3Zl2n8oJCzCOVphQAJIvWPgbEgk%2BojC1LzzTbZFmtjZf83VPQnYR0OHE%2FC2r5lFAwCdJ4Mfe5z%2B0jezu1dawOJT11NVTKANNNxgSbEMxwepbWM41m%2BSXXrDzym%2FGsrFAzlcMB9DwjFcPzJ4jeGtSSZe0InbvVo6RMIjl3MQGOqUBuFGpFD5Qz29aZoVZzFWmA6VBtTDAvpKzrd0T5kPFXeB1slCtwUJhLkUvsWtcQnslbnOEEyrTQE%2Bdq%2BwT6ZYLcpq0H1X8YMGs0bsxG6Geb9NR5eVfVIYH7Tu7dfDxzxfFINbnK17bECBFsHfk6O9I3Uk5Ae%2FHCYbz2rwDhxzz0LRLHuL%2FfEndmh4fnDy4hugdwsnWQx2JsWTiqB2yV6g1C4fBFDaq&X-Amz-Signature=b7b3c3e6e8bd66251c4fc638e99cf147f49818d61f39bd7e19c6403392c2894b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
