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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO4UVUTC%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDzQnugwKvQ6AYow7mnrw4m%2F98%2FbBLJCH%2FZycR0N0S35gIgCbOTgMvqAb3L3SzwIh4Q3AvgT8LP3tugBhwfQ8a7gfYq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDDRtlC0JQ10yC2qimSrcA6m0UD6f4BfduFw%2B3mgMazbfzUCGK3w4SOgsXMzbIYBkAGNMXOhEpiha6FAdrp1RztnlfSjNCU9o97gqRMllXsC%2BAKcBJcXJQmXB38okFZmk1RHCUl2WdNowddlF9gvfbf%2FQ4FwvsKodm%2F3l%2FQH9sybHKd3pkXaAfYuC8dxuPjKJUoeqFrPIIdSloTtXbEYM04BZHVqQmNaZbszRGkrsPnqOxQoclisYpC5m9l0KmXbAIzHaL8JCAmkhTDNe0Q6fo%2FW0mS%2F4mkKYJbCQaNcqM%2Fc9ZvB%2Fa2z0ZccrrTNb%2FseziM7GJsw559OZgaMWsctO5KqS6494dUS9lRUYXK2SUDf5cCzcuk8sSHVUplsR5%2FQJ%2B%2Fiub%2FahfT2FVgkhaGADGIDhI624%2BiPseN9EVVIFrvEI3JYIgfU%2B5sVkhCjYsws6PcF4M5SYF64odJkfQeR7%2FjgRTTY%2BsCoOmlfF4WOCnt4teyCh1HcAxNEpbqYiqo2hz80J7PissivzLkhbg069SPpoBo34bgTJuvtUcj1IAN2910W0t%2FypuUo7aNrY%2FFC2j7kBNGe%2F4npAE7O8CzmXlPPxIwQuPZlhF1DNaAz52wneutU8ZwgocZj2ywS1i%2BRp%2F0avfpEMP4tHekmKMKPYrM4GOqUBPWPC%2BW5mEUCBGJIZQqhBB0q%2FDXzP3WjdadcafjxjqUQ%2FPa1VqvcLTco9TKfdx48MrxdYPOqcuZTTGIjNDWGkPH8paDVMo4eeP6FI20hmZkY4uvd%2BvnLtQarwdnNZ2GcmYStG7Lz3NXedDl4kyohbCgYqlC2v03GxOC8WeomlryeoRkrRejhPXaUMa3zbvvSSaLGpJefl6g0J4h%2FXf4oBn3OVrtZA&X-Amz-Signature=aa55f894e0bfe21d888bfd40d94d8a04c320c33a9f86d96231ba687009cf5def&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656F53UL2%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIEq9QWItyRucAhZlC%2B9JcM9k2mZloPQD6k13xe6REwmwAiEA9F%2F6z4Kq1wlXY2fUQzhKTvdAW0S4EjrJdki76cN9%2Fk4q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDPyt3q%2FH4D6w%2B%2FH6OyrcAygwMToWsgGg5kP6cF%2FCOnxU0TC%2F4joeizVTo0kJMJ9C0Quevb8bf%2B9wKQTnGoWw0Kkro8LZZY6K2C7uioUdxG4QIYhyKeWTRAsSgWplmT%2F2a06fiU77%2Fo7bl9nClHk4gPx0YdQFchgIGyP7IDXhp8WS0nrtybOsTKVEHJy7g7K7mgxny8YUuDUl1JEf9VN9liJoCAm%2FuRJ%2FtczRU4cMqp0zedXxuSBKsPKDnRO5STxA%2BbQOnd%2F7WoGTV4UTwl6mPh%2ButqebHJcBq0ujcp7RRzmz64MLbtLyNiykXsA840B9vW2kEyvuimnAoO5weCVuN%2BmqrmG4RI99jfNK1JtZjagT2DtCn4A5App8l5WQrq39nAkZ%2BWGHsxT8JwlSbOTrC7mGpUcJlpF7hWiOL5SE%2FJkOPsa848mAgOE83EbOYp6Ogs%2BkMBebGVggIGLYlp8PRmirntfQVwcb3zXgMAeLFsKPRko6SSnRqPEXhfmdBczKuzGdXOfl4DDb0NQOY1gVKmzxhcf9PX%2BUiCCsFQjkuH9xFJ9Ew1%2FXrlJLl5UDiIanyUmoeVpq9QkQq%2F0aUKwMtlwlhqrUaK5wPXqgk9mPRMRT9Y4Z5pm2N2DMVFh4SvJTDiTmkDA%2BIl3aVrE1MO7WrM4GOqUBnFo09NcZSFOGvFwRd8TORFmznmyYpleQ18TR1Wi5jMeostRnvJLPAYx2VbGWsCAoqMyttkCIE%2FWBiLpXYfff9rigOrh1ZULBNjXrMQ1u42z4KAcHI6g2wxCDnK2kwqL6ltprNy03uLrswCNycEJoefwdnXWve5bw8vg4R3xbPxdBiS1ZTp0n%2B0yBs2Kysssz3td4OCzlcuBarRmIDi85kgGrXWbl&X-Amz-Signature=6050752856e583e6a29af65b73b23981d8b07b8e3d073e80973677154f12e5d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656F53UL2%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIEq9QWItyRucAhZlC%2B9JcM9k2mZloPQD6k13xe6REwmwAiEA9F%2F6z4Kq1wlXY2fUQzhKTvdAW0S4EjrJdki76cN9%2Fk4q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDPyt3q%2FH4D6w%2B%2FH6OyrcAygwMToWsgGg5kP6cF%2FCOnxU0TC%2F4joeizVTo0kJMJ9C0Quevb8bf%2B9wKQTnGoWw0Kkro8LZZY6K2C7uioUdxG4QIYhyKeWTRAsSgWplmT%2F2a06fiU77%2Fo7bl9nClHk4gPx0YdQFchgIGyP7IDXhp8WS0nrtybOsTKVEHJy7g7K7mgxny8YUuDUl1JEf9VN9liJoCAm%2FuRJ%2FtczRU4cMqp0zedXxuSBKsPKDnRO5STxA%2BbQOnd%2F7WoGTV4UTwl6mPh%2ButqebHJcBq0ujcp7RRzmz64MLbtLyNiykXsA840B9vW2kEyvuimnAoO5weCVuN%2BmqrmG4RI99jfNK1JtZjagT2DtCn4A5App8l5WQrq39nAkZ%2BWGHsxT8JwlSbOTrC7mGpUcJlpF7hWiOL5SE%2FJkOPsa848mAgOE83EbOYp6Ogs%2BkMBebGVggIGLYlp8PRmirntfQVwcb3zXgMAeLFsKPRko6SSnRqPEXhfmdBczKuzGdXOfl4DDb0NQOY1gVKmzxhcf9PX%2BUiCCsFQjkuH9xFJ9Ew1%2FXrlJLl5UDiIanyUmoeVpq9QkQq%2F0aUKwMtlwlhqrUaK5wPXqgk9mPRMRT9Y4Z5pm2N2DMVFh4SvJTDiTmkDA%2BIl3aVrE1MO7WrM4GOqUBnFo09NcZSFOGvFwRd8TORFmznmyYpleQ18TR1Wi5jMeostRnvJLPAYx2VbGWsCAoqMyttkCIE%2FWBiLpXYfff9rigOrh1ZULBNjXrMQ1u42z4KAcHI6g2wxCDnK2kwqL6ltprNy03uLrswCNycEJoefwdnXWve5bw8vg4R3xbPxdBiS1ZTp0n%2B0yBs2Kysssz3td4OCzlcuBarRmIDi85kgGrXWbl&X-Amz-Signature=8d2b6fb83ffaaed0843148cb8d17b07b30b0c4beba7bfb0f6d3a76c94aacd0c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656F53UL2%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIEq9QWItyRucAhZlC%2B9JcM9k2mZloPQD6k13xe6REwmwAiEA9F%2F6z4Kq1wlXY2fUQzhKTvdAW0S4EjrJdki76cN9%2Fk4q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDPyt3q%2FH4D6w%2B%2FH6OyrcAygwMToWsgGg5kP6cF%2FCOnxU0TC%2F4joeizVTo0kJMJ9C0Quevb8bf%2B9wKQTnGoWw0Kkro8LZZY6K2C7uioUdxG4QIYhyKeWTRAsSgWplmT%2F2a06fiU77%2Fo7bl9nClHk4gPx0YdQFchgIGyP7IDXhp8WS0nrtybOsTKVEHJy7g7K7mgxny8YUuDUl1JEf9VN9liJoCAm%2FuRJ%2FtczRU4cMqp0zedXxuSBKsPKDnRO5STxA%2BbQOnd%2F7WoGTV4UTwl6mPh%2ButqebHJcBq0ujcp7RRzmz64MLbtLyNiykXsA840B9vW2kEyvuimnAoO5weCVuN%2BmqrmG4RI99jfNK1JtZjagT2DtCn4A5App8l5WQrq39nAkZ%2BWGHsxT8JwlSbOTrC7mGpUcJlpF7hWiOL5SE%2FJkOPsa848mAgOE83EbOYp6Ogs%2BkMBebGVggIGLYlp8PRmirntfQVwcb3zXgMAeLFsKPRko6SSnRqPEXhfmdBczKuzGdXOfl4DDb0NQOY1gVKmzxhcf9PX%2BUiCCsFQjkuH9xFJ9Ew1%2FXrlJLl5UDiIanyUmoeVpq9QkQq%2F0aUKwMtlwlhqrUaK5wPXqgk9mPRMRT9Y4Z5pm2N2DMVFh4SvJTDiTmkDA%2BIl3aVrE1MO7WrM4GOqUBnFo09NcZSFOGvFwRd8TORFmznmyYpleQ18TR1Wi5jMeostRnvJLPAYx2VbGWsCAoqMyttkCIE%2FWBiLpXYfff9rigOrh1ZULBNjXrMQ1u42z4KAcHI6g2wxCDnK2kwqL6ltprNy03uLrswCNycEJoefwdnXWve5bw8vg4R3xbPxdBiS1ZTp0n%2B0yBs2Kysssz3td4OCzlcuBarRmIDi85kgGrXWbl&X-Amz-Signature=fa4ffb34617c44105693954cf50df40a2e7ce0ee1ed3202dad61e486bb471000&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656F53UL2%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIEq9QWItyRucAhZlC%2B9JcM9k2mZloPQD6k13xe6REwmwAiEA9F%2F6z4Kq1wlXY2fUQzhKTvdAW0S4EjrJdki76cN9%2Fk4q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDPyt3q%2FH4D6w%2B%2FH6OyrcAygwMToWsgGg5kP6cF%2FCOnxU0TC%2F4joeizVTo0kJMJ9C0Quevb8bf%2B9wKQTnGoWw0Kkro8LZZY6K2C7uioUdxG4QIYhyKeWTRAsSgWplmT%2F2a06fiU77%2Fo7bl9nClHk4gPx0YdQFchgIGyP7IDXhp8WS0nrtybOsTKVEHJy7g7K7mgxny8YUuDUl1JEf9VN9liJoCAm%2FuRJ%2FtczRU4cMqp0zedXxuSBKsPKDnRO5STxA%2BbQOnd%2F7WoGTV4UTwl6mPh%2ButqebHJcBq0ujcp7RRzmz64MLbtLyNiykXsA840B9vW2kEyvuimnAoO5weCVuN%2BmqrmG4RI99jfNK1JtZjagT2DtCn4A5App8l5WQrq39nAkZ%2BWGHsxT8JwlSbOTrC7mGpUcJlpF7hWiOL5SE%2FJkOPsa848mAgOE83EbOYp6Ogs%2BkMBebGVggIGLYlp8PRmirntfQVwcb3zXgMAeLFsKPRko6SSnRqPEXhfmdBczKuzGdXOfl4DDb0NQOY1gVKmzxhcf9PX%2BUiCCsFQjkuH9xFJ9Ew1%2FXrlJLl5UDiIanyUmoeVpq9QkQq%2F0aUKwMtlwlhqrUaK5wPXqgk9mPRMRT9Y4Z5pm2N2DMVFh4SvJTDiTmkDA%2BIl3aVrE1MO7WrM4GOqUBnFo09NcZSFOGvFwRd8TORFmznmyYpleQ18TR1Wi5jMeostRnvJLPAYx2VbGWsCAoqMyttkCIE%2FWBiLpXYfff9rigOrh1ZULBNjXrMQ1u42z4KAcHI6g2wxCDnK2kwqL6ltprNy03uLrswCNycEJoefwdnXWve5bw8vg4R3xbPxdBiS1ZTp0n%2B0yBs2Kysssz3td4OCzlcuBarRmIDi85kgGrXWbl&X-Amz-Signature=ff76d0ead888b486c2631a191b3a9dbba9224df64fd1aca10363cab6860d84da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656F53UL2%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIEq9QWItyRucAhZlC%2B9JcM9k2mZloPQD6k13xe6REwmwAiEA9F%2F6z4Kq1wlXY2fUQzhKTvdAW0S4EjrJdki76cN9%2Fk4q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDPyt3q%2FH4D6w%2B%2FH6OyrcAygwMToWsgGg5kP6cF%2FCOnxU0TC%2F4joeizVTo0kJMJ9C0Quevb8bf%2B9wKQTnGoWw0Kkro8LZZY6K2C7uioUdxG4QIYhyKeWTRAsSgWplmT%2F2a06fiU77%2Fo7bl9nClHk4gPx0YdQFchgIGyP7IDXhp8WS0nrtybOsTKVEHJy7g7K7mgxny8YUuDUl1JEf9VN9liJoCAm%2FuRJ%2FtczRU4cMqp0zedXxuSBKsPKDnRO5STxA%2BbQOnd%2F7WoGTV4UTwl6mPh%2ButqebHJcBq0ujcp7RRzmz64MLbtLyNiykXsA840B9vW2kEyvuimnAoO5weCVuN%2BmqrmG4RI99jfNK1JtZjagT2DtCn4A5App8l5WQrq39nAkZ%2BWGHsxT8JwlSbOTrC7mGpUcJlpF7hWiOL5SE%2FJkOPsa848mAgOE83EbOYp6Ogs%2BkMBebGVggIGLYlp8PRmirntfQVwcb3zXgMAeLFsKPRko6SSnRqPEXhfmdBczKuzGdXOfl4DDb0NQOY1gVKmzxhcf9PX%2BUiCCsFQjkuH9xFJ9Ew1%2FXrlJLl5UDiIanyUmoeVpq9QkQq%2F0aUKwMtlwlhqrUaK5wPXqgk9mPRMRT9Y4Z5pm2N2DMVFh4SvJTDiTmkDA%2BIl3aVrE1MO7WrM4GOqUBnFo09NcZSFOGvFwRd8TORFmznmyYpleQ18TR1Wi5jMeostRnvJLPAYx2VbGWsCAoqMyttkCIE%2FWBiLpXYfff9rigOrh1ZULBNjXrMQ1u42z4KAcHI6g2wxCDnK2kwqL6ltprNy03uLrswCNycEJoefwdnXWve5bw8vg4R3xbPxdBiS1ZTp0n%2B0yBs2Kysssz3td4OCzlcuBarRmIDi85kgGrXWbl&X-Amz-Signature=0b646deb6966d7f671a81431171c58f9caa5289bee34d3dea611289341205cfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656F53UL2%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIEq9QWItyRucAhZlC%2B9JcM9k2mZloPQD6k13xe6REwmwAiEA9F%2F6z4Kq1wlXY2fUQzhKTvdAW0S4EjrJdki76cN9%2Fk4q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDPyt3q%2FH4D6w%2B%2FH6OyrcAygwMToWsgGg5kP6cF%2FCOnxU0TC%2F4joeizVTo0kJMJ9C0Quevb8bf%2B9wKQTnGoWw0Kkro8LZZY6K2C7uioUdxG4QIYhyKeWTRAsSgWplmT%2F2a06fiU77%2Fo7bl9nClHk4gPx0YdQFchgIGyP7IDXhp8WS0nrtybOsTKVEHJy7g7K7mgxny8YUuDUl1JEf9VN9liJoCAm%2FuRJ%2FtczRU4cMqp0zedXxuSBKsPKDnRO5STxA%2BbQOnd%2F7WoGTV4UTwl6mPh%2ButqebHJcBq0ujcp7RRzmz64MLbtLyNiykXsA840B9vW2kEyvuimnAoO5weCVuN%2BmqrmG4RI99jfNK1JtZjagT2DtCn4A5App8l5WQrq39nAkZ%2BWGHsxT8JwlSbOTrC7mGpUcJlpF7hWiOL5SE%2FJkOPsa848mAgOE83EbOYp6Ogs%2BkMBebGVggIGLYlp8PRmirntfQVwcb3zXgMAeLFsKPRko6SSnRqPEXhfmdBczKuzGdXOfl4DDb0NQOY1gVKmzxhcf9PX%2BUiCCsFQjkuH9xFJ9Ew1%2FXrlJLl5UDiIanyUmoeVpq9QkQq%2F0aUKwMtlwlhqrUaK5wPXqgk9mPRMRT9Y4Z5pm2N2DMVFh4SvJTDiTmkDA%2BIl3aVrE1MO7WrM4GOqUBnFo09NcZSFOGvFwRd8TORFmznmyYpleQ18TR1Wi5jMeostRnvJLPAYx2VbGWsCAoqMyttkCIE%2FWBiLpXYfff9rigOrh1ZULBNjXrMQ1u42z4KAcHI6g2wxCDnK2kwqL6ltprNy03uLrswCNycEJoefwdnXWve5bw8vg4R3xbPxdBiS1ZTp0n%2B0yBs2Kysssz3td4OCzlcuBarRmIDi85kgGrXWbl&X-Amz-Signature=40d983f5c6438e4e07c8adbe47b1f437281b53b857ae7f32d21aac8e2d762f67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656F53UL2%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIEq9QWItyRucAhZlC%2B9JcM9k2mZloPQD6k13xe6REwmwAiEA9F%2F6z4Kq1wlXY2fUQzhKTvdAW0S4EjrJdki76cN9%2Fk4q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDPyt3q%2FH4D6w%2B%2FH6OyrcAygwMToWsgGg5kP6cF%2FCOnxU0TC%2F4joeizVTo0kJMJ9C0Quevb8bf%2B9wKQTnGoWw0Kkro8LZZY6K2C7uioUdxG4QIYhyKeWTRAsSgWplmT%2F2a06fiU77%2Fo7bl9nClHk4gPx0YdQFchgIGyP7IDXhp8WS0nrtybOsTKVEHJy7g7K7mgxny8YUuDUl1JEf9VN9liJoCAm%2FuRJ%2FtczRU4cMqp0zedXxuSBKsPKDnRO5STxA%2BbQOnd%2F7WoGTV4UTwl6mPh%2ButqebHJcBq0ujcp7RRzmz64MLbtLyNiykXsA840B9vW2kEyvuimnAoO5weCVuN%2BmqrmG4RI99jfNK1JtZjagT2DtCn4A5App8l5WQrq39nAkZ%2BWGHsxT8JwlSbOTrC7mGpUcJlpF7hWiOL5SE%2FJkOPsa848mAgOE83EbOYp6Ogs%2BkMBebGVggIGLYlp8PRmirntfQVwcb3zXgMAeLFsKPRko6SSnRqPEXhfmdBczKuzGdXOfl4DDb0NQOY1gVKmzxhcf9PX%2BUiCCsFQjkuH9xFJ9Ew1%2FXrlJLl5UDiIanyUmoeVpq9QkQq%2F0aUKwMtlwlhqrUaK5wPXqgk9mPRMRT9Y4Z5pm2N2DMVFh4SvJTDiTmkDA%2BIl3aVrE1MO7WrM4GOqUBnFo09NcZSFOGvFwRd8TORFmznmyYpleQ18TR1Wi5jMeostRnvJLPAYx2VbGWsCAoqMyttkCIE%2FWBiLpXYfff9rigOrh1ZULBNjXrMQ1u42z4KAcHI6g2wxCDnK2kwqL6ltprNy03uLrswCNycEJoefwdnXWve5bw8vg4R3xbPxdBiS1ZTp0n%2B0yBs2Kysssz3td4OCzlcuBarRmIDi85kgGrXWbl&X-Amz-Signature=bbad89ad6fc90c7f4810fa3f554f6fe4ce2b5e0e56719b744ce98e238c5545c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656F53UL2%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIEq9QWItyRucAhZlC%2B9JcM9k2mZloPQD6k13xe6REwmwAiEA9F%2F6z4Kq1wlXY2fUQzhKTvdAW0S4EjrJdki76cN9%2Fk4q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDPyt3q%2FH4D6w%2B%2FH6OyrcAygwMToWsgGg5kP6cF%2FCOnxU0TC%2F4joeizVTo0kJMJ9C0Quevb8bf%2B9wKQTnGoWw0Kkro8LZZY6K2C7uioUdxG4QIYhyKeWTRAsSgWplmT%2F2a06fiU77%2Fo7bl9nClHk4gPx0YdQFchgIGyP7IDXhp8WS0nrtybOsTKVEHJy7g7K7mgxny8YUuDUl1JEf9VN9liJoCAm%2FuRJ%2FtczRU4cMqp0zedXxuSBKsPKDnRO5STxA%2BbQOnd%2F7WoGTV4UTwl6mPh%2ButqebHJcBq0ujcp7RRzmz64MLbtLyNiykXsA840B9vW2kEyvuimnAoO5weCVuN%2BmqrmG4RI99jfNK1JtZjagT2DtCn4A5App8l5WQrq39nAkZ%2BWGHsxT8JwlSbOTrC7mGpUcJlpF7hWiOL5SE%2FJkOPsa848mAgOE83EbOYp6Ogs%2BkMBebGVggIGLYlp8PRmirntfQVwcb3zXgMAeLFsKPRko6SSnRqPEXhfmdBczKuzGdXOfl4DDb0NQOY1gVKmzxhcf9PX%2BUiCCsFQjkuH9xFJ9Ew1%2FXrlJLl5UDiIanyUmoeVpq9QkQq%2F0aUKwMtlwlhqrUaK5wPXqgk9mPRMRT9Y4Z5pm2N2DMVFh4SvJTDiTmkDA%2BIl3aVrE1MO7WrM4GOqUBnFo09NcZSFOGvFwRd8TORFmznmyYpleQ18TR1Wi5jMeostRnvJLPAYx2VbGWsCAoqMyttkCIE%2FWBiLpXYfff9rigOrh1ZULBNjXrMQ1u42z4KAcHI6g2wxCDnK2kwqL6ltprNy03uLrswCNycEJoefwdnXWve5bw8vg4R3xbPxdBiS1ZTp0n%2B0yBs2Kysssz3td4OCzlcuBarRmIDi85kgGrXWbl&X-Amz-Signature=177a6c0b44dcb7d1e34ec0eecaa22b90cef0fd94481000e8b863b6c57166f4a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656F53UL2%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIEq9QWItyRucAhZlC%2B9JcM9k2mZloPQD6k13xe6REwmwAiEA9F%2F6z4Kq1wlXY2fUQzhKTvdAW0S4EjrJdki76cN9%2Fk4q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDPyt3q%2FH4D6w%2B%2FH6OyrcAygwMToWsgGg5kP6cF%2FCOnxU0TC%2F4joeizVTo0kJMJ9C0Quevb8bf%2B9wKQTnGoWw0Kkro8LZZY6K2C7uioUdxG4QIYhyKeWTRAsSgWplmT%2F2a06fiU77%2Fo7bl9nClHk4gPx0YdQFchgIGyP7IDXhp8WS0nrtybOsTKVEHJy7g7K7mgxny8YUuDUl1JEf9VN9liJoCAm%2FuRJ%2FtczRU4cMqp0zedXxuSBKsPKDnRO5STxA%2BbQOnd%2F7WoGTV4UTwl6mPh%2ButqebHJcBq0ujcp7RRzmz64MLbtLyNiykXsA840B9vW2kEyvuimnAoO5weCVuN%2BmqrmG4RI99jfNK1JtZjagT2DtCn4A5App8l5WQrq39nAkZ%2BWGHsxT8JwlSbOTrC7mGpUcJlpF7hWiOL5SE%2FJkOPsa848mAgOE83EbOYp6Ogs%2BkMBebGVggIGLYlp8PRmirntfQVwcb3zXgMAeLFsKPRko6SSnRqPEXhfmdBczKuzGdXOfl4DDb0NQOY1gVKmzxhcf9PX%2BUiCCsFQjkuH9xFJ9Ew1%2FXrlJLl5UDiIanyUmoeVpq9QkQq%2F0aUKwMtlwlhqrUaK5wPXqgk9mPRMRT9Y4Z5pm2N2DMVFh4SvJTDiTmkDA%2BIl3aVrE1MO7WrM4GOqUBnFo09NcZSFOGvFwRd8TORFmznmyYpleQ18TR1Wi5jMeostRnvJLPAYx2VbGWsCAoqMyttkCIE%2FWBiLpXYfff9rigOrh1ZULBNjXrMQ1u42z4KAcHI6g2wxCDnK2kwqL6ltprNy03uLrswCNycEJoefwdnXWve5bw8vg4R3xbPxdBiS1ZTp0n%2B0yBs2Kysssz3td4OCzlcuBarRmIDi85kgGrXWbl&X-Amz-Signature=22c97fb9ec05708b8013017cf50a73a4ed223796478b043c56e6b23b5a468c9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656F53UL2%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIEq9QWItyRucAhZlC%2B9JcM9k2mZloPQD6k13xe6REwmwAiEA9F%2F6z4Kq1wlXY2fUQzhKTvdAW0S4EjrJdki76cN9%2Fk4q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDPyt3q%2FH4D6w%2B%2FH6OyrcAygwMToWsgGg5kP6cF%2FCOnxU0TC%2F4joeizVTo0kJMJ9C0Quevb8bf%2B9wKQTnGoWw0Kkro8LZZY6K2C7uioUdxG4QIYhyKeWTRAsSgWplmT%2F2a06fiU77%2Fo7bl9nClHk4gPx0YdQFchgIGyP7IDXhp8WS0nrtybOsTKVEHJy7g7K7mgxny8YUuDUl1JEf9VN9liJoCAm%2FuRJ%2FtczRU4cMqp0zedXxuSBKsPKDnRO5STxA%2BbQOnd%2F7WoGTV4UTwl6mPh%2ButqebHJcBq0ujcp7RRzmz64MLbtLyNiykXsA840B9vW2kEyvuimnAoO5weCVuN%2BmqrmG4RI99jfNK1JtZjagT2DtCn4A5App8l5WQrq39nAkZ%2BWGHsxT8JwlSbOTrC7mGpUcJlpF7hWiOL5SE%2FJkOPsa848mAgOE83EbOYp6Ogs%2BkMBebGVggIGLYlp8PRmirntfQVwcb3zXgMAeLFsKPRko6SSnRqPEXhfmdBczKuzGdXOfl4DDb0NQOY1gVKmzxhcf9PX%2BUiCCsFQjkuH9xFJ9Ew1%2FXrlJLl5UDiIanyUmoeVpq9QkQq%2F0aUKwMtlwlhqrUaK5wPXqgk9mPRMRT9Y4Z5pm2N2DMVFh4SvJTDiTmkDA%2BIl3aVrE1MO7WrM4GOqUBnFo09NcZSFOGvFwRd8TORFmznmyYpleQ18TR1Wi5jMeostRnvJLPAYx2VbGWsCAoqMyttkCIE%2FWBiLpXYfff9rigOrh1ZULBNjXrMQ1u42z4KAcHI6g2wxCDnK2kwqL6ltprNy03uLrswCNycEJoefwdnXWve5bw8vg4R3xbPxdBiS1ZTp0n%2B0yBs2Kysssz3td4OCzlcuBarRmIDi85kgGrXWbl&X-Amz-Signature=ff76d0ead888b486c2631a191b3a9dbba9224df64fd1aca10363cab6860d84da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
