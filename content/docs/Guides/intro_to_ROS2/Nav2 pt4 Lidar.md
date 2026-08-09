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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TZNOIWX%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArFW9AK%2BTztMUZih92aq8dnXgZg%2FOvdllgJmjS5lEamAiBa82QDPmKVGwaG260wMzj%2BfCaIxc3ycXCFwnza%2B4ma5yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMrZhNJorvW%2BZTpxotKtwD0SjyAzENAstn4L0FVgdJTkt0lUse99WJ%2BptRojUp5%2FwhGsU0SLdqZKY28PRzfR1ugLucNpmwG6rWJk9RhpHEoHuKMpdsTVJAuB4oVyQZMmJW%2BASU2zFsMMb%2BbF8hrpBmlF9uGPmkoT36XUjaKJsvnRk85DQiKxIZvyYs%2FZj%2BlIv06SopOwZV2JexYy0%2Bh4Icr9gkm4WcZtQbCGPKxNtZjyMs4GN1SpXDiSCpeZU0PEtqzzGuSDzBw3fuUY00CCXJcJ6f8U0gaUAvwc%2FjvaLwoAxAWUYhVdIIvKVcUEHzoEZCnDJ5wBWBlqifl6vrYLejoN%2Fsblyz1mysBgebWoaGhMDLHTBl4XIjG2ehFir7wCo03f2jOtDRl0bcasVpJW2jKWGE8FxTh5zDN5cGRZ1T80khEiBNZ8WLibgJjR7V%2Fduc%2F4KHRpXzfaPOV%2F3PRzfUo13s8qY%2FbH%2BOcG0RyPLhFX2iFKD0sKu6qhO%2BRjm8V7J9vjP6pi4qmgD9hmLR7h1wFvUj%2BNe17xMiTVUVxmLO9mFLl%2FVqmqZKfSYMdBzicN54fSU5n3JjX%2Fy3A0JFX%2FmeEQLQG4z1PZHvYXrso4Cxz00AWCq0m9G0%2BWEuUPopETGxBZ19i0%2BUEKGJ734w7NPe0wY6pgEn6X5oR4WTdlAXU5nbAVqW8826G1ofXGvvDi91JObRksoX3gdA638lJB7bcw2Jc9UBUnwHgVRj0pKEJaL6pHQ9D2wzotLcDwWrnuP1ALtxdBKvbGbL0wOoPzucDXfN%2BZ408SFnAWqxFUNktB0VtNmnjSbfvIc8XCU3oxlIjFszx72xLbBT4ivPBJ2pYhCjivfbREFe0n4WfTVFBmMKf5YoZ05WEkMN&X-Amz-Signature=e6ce9e17324e616de6d3ed05dcfd7bf6afc97c64a1bcc1c3add19b906508f8a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKFNELO5%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGT6qy9m7JP0%2FrKyi0RUVmasa22RLT9%2BKuoeMG5QinKSAiBSbgtJmbJZby69gKJXQIQKahUm%2Fo5CB4z4pvP8SM3%2B3Sr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMMoR7KhWHrR3y0osmKtwDeF0wyHKT1cZcxFF0WEAcM7b6nW0LyB%2BjsAT1eNa4%2BG8HF7%2BETQXBrE8YtYjUoFcKviiuJDgoaFXJcRnkOyTVob6%2FNJTjBbgAfcz6%2BVHwUlouy9th2Sxh43FSlyvwQLKZXmkwanI1uyYFNfN%2FEGOELd4BYJNn110kguhDYBqgwfpDLiFDUFU1%2Fp7SRvBxwxPYsKR%2Fky0g3oR7HEanUxRHSj5rHpgmd9iTcNrPNz6ykRMF9HA0rVHzoYltg2LbUb86bAQ7VEmtCE7wv6uYVROk5quORA4tfeoA4w%2FLZoC8tDTOQ3Khmt%2BnoI5FL41Fw6VRAqU84g%2B9Y7N%2FQAy%2F%2BugBH5qHARYRfmja7g0uhHJdTXJ5ugGAWJrWXSUVV2oN6rRiZlPOoa%2FMZ6n%2FpK8Lx58gW1p47Ffivp7wI%2B722%2Fi4Md6DUDctQT8s8h3vRifuWR6%2FbRF7wCLP2cg40PuIpzTBlCWsTjalQjrcfaXd2J%2FxviLUO9p1pOJkypFFftwijMIbW4Z3r5%2FNzpvVGfrbrWAJv%2FU7MqzgOWLO0XHRgR68Y7z%2Fcf1eWIDIDySMbAtoDPGoMoQ%2FLVhywnFd8SMOK2NQvcUJq1MX4ITsIEuU1xQnV1ye8QHiVuwoLYs879Mwjdbe0wY6pgEUt87SN7A1mX%2BbqGTuyMaZaKkoVxlXtzmvmSW8yIrOrXiHImBxQRDPOvYOcAdrSyiwu63UKCOV7Gz6uES0pfx742SEprX8EttmdugtsYqWcMYXk7SWv%2Fk%2FaToEWi7oxQ4bsKyje71wTt6gtiUsItyb342Y%2Bm8r5iOM6pKiiR2h9VXqtE19vxtXtY57XOWYI4I8KC6Zgg%2BzrWZ7SDKPit5GT9NyEbO%2F&X-Amz-Signature=8e4f204c9e0e6e21b4dfbb1933632bcbc4dfb4ec8b1688364bba5d10d896ce31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKFNELO5%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGT6qy9m7JP0%2FrKyi0RUVmasa22RLT9%2BKuoeMG5QinKSAiBSbgtJmbJZby69gKJXQIQKahUm%2Fo5CB4z4pvP8SM3%2B3Sr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMMoR7KhWHrR3y0osmKtwDeF0wyHKT1cZcxFF0WEAcM7b6nW0LyB%2BjsAT1eNa4%2BG8HF7%2BETQXBrE8YtYjUoFcKviiuJDgoaFXJcRnkOyTVob6%2FNJTjBbgAfcz6%2BVHwUlouy9th2Sxh43FSlyvwQLKZXmkwanI1uyYFNfN%2FEGOELd4BYJNn110kguhDYBqgwfpDLiFDUFU1%2Fp7SRvBxwxPYsKR%2Fky0g3oR7HEanUxRHSj5rHpgmd9iTcNrPNz6ykRMF9HA0rVHzoYltg2LbUb86bAQ7VEmtCE7wv6uYVROk5quORA4tfeoA4w%2FLZoC8tDTOQ3Khmt%2BnoI5FL41Fw6VRAqU84g%2B9Y7N%2FQAy%2F%2BugBH5qHARYRfmja7g0uhHJdTXJ5ugGAWJrWXSUVV2oN6rRiZlPOoa%2FMZ6n%2FpK8Lx58gW1p47Ffivp7wI%2B722%2Fi4Md6DUDctQT8s8h3vRifuWR6%2FbRF7wCLP2cg40PuIpzTBlCWsTjalQjrcfaXd2J%2FxviLUO9p1pOJkypFFftwijMIbW4Z3r5%2FNzpvVGfrbrWAJv%2FU7MqzgOWLO0XHRgR68Y7z%2Fcf1eWIDIDySMbAtoDPGoMoQ%2FLVhywnFd8SMOK2NQvcUJq1MX4ITsIEuU1xQnV1ye8QHiVuwoLYs879Mwjdbe0wY6pgEUt87SN7A1mX%2BbqGTuyMaZaKkoVxlXtzmvmSW8yIrOrXiHImBxQRDPOvYOcAdrSyiwu63UKCOV7Gz6uES0pfx742SEprX8EttmdugtsYqWcMYXk7SWv%2Fk%2FaToEWi7oxQ4bsKyje71wTt6gtiUsItyb342Y%2Bm8r5iOM6pKiiR2h9VXqtE19vxtXtY57XOWYI4I8KC6Zgg%2BzrWZ7SDKPit5GT9NyEbO%2F&X-Amz-Signature=bd01c5e3baabe139d47a721ce7071b4b3a443f4adee1b6268a6b4902fb7adb92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKFNELO5%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGT6qy9m7JP0%2FrKyi0RUVmasa22RLT9%2BKuoeMG5QinKSAiBSbgtJmbJZby69gKJXQIQKahUm%2Fo5CB4z4pvP8SM3%2B3Sr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMMoR7KhWHrR3y0osmKtwDeF0wyHKT1cZcxFF0WEAcM7b6nW0LyB%2BjsAT1eNa4%2BG8HF7%2BETQXBrE8YtYjUoFcKviiuJDgoaFXJcRnkOyTVob6%2FNJTjBbgAfcz6%2BVHwUlouy9th2Sxh43FSlyvwQLKZXmkwanI1uyYFNfN%2FEGOELd4BYJNn110kguhDYBqgwfpDLiFDUFU1%2Fp7SRvBxwxPYsKR%2Fky0g3oR7HEanUxRHSj5rHpgmd9iTcNrPNz6ykRMF9HA0rVHzoYltg2LbUb86bAQ7VEmtCE7wv6uYVROk5quORA4tfeoA4w%2FLZoC8tDTOQ3Khmt%2BnoI5FL41Fw6VRAqU84g%2B9Y7N%2FQAy%2F%2BugBH5qHARYRfmja7g0uhHJdTXJ5ugGAWJrWXSUVV2oN6rRiZlPOoa%2FMZ6n%2FpK8Lx58gW1p47Ffivp7wI%2B722%2Fi4Md6DUDctQT8s8h3vRifuWR6%2FbRF7wCLP2cg40PuIpzTBlCWsTjalQjrcfaXd2J%2FxviLUO9p1pOJkypFFftwijMIbW4Z3r5%2FNzpvVGfrbrWAJv%2FU7MqzgOWLO0XHRgR68Y7z%2Fcf1eWIDIDySMbAtoDPGoMoQ%2FLVhywnFd8SMOK2NQvcUJq1MX4ITsIEuU1xQnV1ye8QHiVuwoLYs879Mwjdbe0wY6pgEUt87SN7A1mX%2BbqGTuyMaZaKkoVxlXtzmvmSW8yIrOrXiHImBxQRDPOvYOcAdrSyiwu63UKCOV7Gz6uES0pfx742SEprX8EttmdugtsYqWcMYXk7SWv%2Fk%2FaToEWi7oxQ4bsKyje71wTt6gtiUsItyb342Y%2Bm8r5iOM6pKiiR2h9VXqtE19vxtXtY57XOWYI4I8KC6Zgg%2BzrWZ7SDKPit5GT9NyEbO%2F&X-Amz-Signature=00d21b242fa81938fb5eaeaea2791d9a053da2a941adf0e05dcdd1b3bcc012e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKFNELO5%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGT6qy9m7JP0%2FrKyi0RUVmasa22RLT9%2BKuoeMG5QinKSAiBSbgtJmbJZby69gKJXQIQKahUm%2Fo5CB4z4pvP8SM3%2B3Sr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMMoR7KhWHrR3y0osmKtwDeF0wyHKT1cZcxFF0WEAcM7b6nW0LyB%2BjsAT1eNa4%2BG8HF7%2BETQXBrE8YtYjUoFcKviiuJDgoaFXJcRnkOyTVob6%2FNJTjBbgAfcz6%2BVHwUlouy9th2Sxh43FSlyvwQLKZXmkwanI1uyYFNfN%2FEGOELd4BYJNn110kguhDYBqgwfpDLiFDUFU1%2Fp7SRvBxwxPYsKR%2Fky0g3oR7HEanUxRHSj5rHpgmd9iTcNrPNz6ykRMF9HA0rVHzoYltg2LbUb86bAQ7VEmtCE7wv6uYVROk5quORA4tfeoA4w%2FLZoC8tDTOQ3Khmt%2BnoI5FL41Fw6VRAqU84g%2B9Y7N%2FQAy%2F%2BugBH5qHARYRfmja7g0uhHJdTXJ5ugGAWJrWXSUVV2oN6rRiZlPOoa%2FMZ6n%2FpK8Lx58gW1p47Ffivp7wI%2B722%2Fi4Md6DUDctQT8s8h3vRifuWR6%2FbRF7wCLP2cg40PuIpzTBlCWsTjalQjrcfaXd2J%2FxviLUO9p1pOJkypFFftwijMIbW4Z3r5%2FNzpvVGfrbrWAJv%2FU7MqzgOWLO0XHRgR68Y7z%2Fcf1eWIDIDySMbAtoDPGoMoQ%2FLVhywnFd8SMOK2NQvcUJq1MX4ITsIEuU1xQnV1ye8QHiVuwoLYs879Mwjdbe0wY6pgEUt87SN7A1mX%2BbqGTuyMaZaKkoVxlXtzmvmSW8yIrOrXiHImBxQRDPOvYOcAdrSyiwu63UKCOV7Gz6uES0pfx742SEprX8EttmdugtsYqWcMYXk7SWv%2Fk%2FaToEWi7oxQ4bsKyje71wTt6gtiUsItyb342Y%2Bm8r5iOM6pKiiR2h9VXqtE19vxtXtY57XOWYI4I8KC6Zgg%2BzrWZ7SDKPit5GT9NyEbO%2F&X-Amz-Signature=8a0d241ca197be1e6f8bf37db886e96db4144b38bf49fdcbcefb0cedf8e5188f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKFNELO5%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGT6qy9m7JP0%2FrKyi0RUVmasa22RLT9%2BKuoeMG5QinKSAiBSbgtJmbJZby69gKJXQIQKahUm%2Fo5CB4z4pvP8SM3%2B3Sr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMMoR7KhWHrR3y0osmKtwDeF0wyHKT1cZcxFF0WEAcM7b6nW0LyB%2BjsAT1eNa4%2BG8HF7%2BETQXBrE8YtYjUoFcKviiuJDgoaFXJcRnkOyTVob6%2FNJTjBbgAfcz6%2BVHwUlouy9th2Sxh43FSlyvwQLKZXmkwanI1uyYFNfN%2FEGOELd4BYJNn110kguhDYBqgwfpDLiFDUFU1%2Fp7SRvBxwxPYsKR%2Fky0g3oR7HEanUxRHSj5rHpgmd9iTcNrPNz6ykRMF9HA0rVHzoYltg2LbUb86bAQ7VEmtCE7wv6uYVROk5quORA4tfeoA4w%2FLZoC8tDTOQ3Khmt%2BnoI5FL41Fw6VRAqU84g%2B9Y7N%2FQAy%2F%2BugBH5qHARYRfmja7g0uhHJdTXJ5ugGAWJrWXSUVV2oN6rRiZlPOoa%2FMZ6n%2FpK8Lx58gW1p47Ffivp7wI%2B722%2Fi4Md6DUDctQT8s8h3vRifuWR6%2FbRF7wCLP2cg40PuIpzTBlCWsTjalQjrcfaXd2J%2FxviLUO9p1pOJkypFFftwijMIbW4Z3r5%2FNzpvVGfrbrWAJv%2FU7MqzgOWLO0XHRgR68Y7z%2Fcf1eWIDIDySMbAtoDPGoMoQ%2FLVhywnFd8SMOK2NQvcUJq1MX4ITsIEuU1xQnV1ye8QHiVuwoLYs879Mwjdbe0wY6pgEUt87SN7A1mX%2BbqGTuyMaZaKkoVxlXtzmvmSW8yIrOrXiHImBxQRDPOvYOcAdrSyiwu63UKCOV7Gz6uES0pfx742SEprX8EttmdugtsYqWcMYXk7SWv%2Fk%2FaToEWi7oxQ4bsKyje71wTt6gtiUsItyb342Y%2Bm8r5iOM6pKiiR2h9VXqtE19vxtXtY57XOWYI4I8KC6Zgg%2BzrWZ7SDKPit5GT9NyEbO%2F&X-Amz-Signature=2580c998496648333236393e183fabb63a40ed398544bc9f68ae6c9655ac6f2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKFNELO5%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGT6qy9m7JP0%2FrKyi0RUVmasa22RLT9%2BKuoeMG5QinKSAiBSbgtJmbJZby69gKJXQIQKahUm%2Fo5CB4z4pvP8SM3%2B3Sr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMMoR7KhWHrR3y0osmKtwDeF0wyHKT1cZcxFF0WEAcM7b6nW0LyB%2BjsAT1eNa4%2BG8HF7%2BETQXBrE8YtYjUoFcKviiuJDgoaFXJcRnkOyTVob6%2FNJTjBbgAfcz6%2BVHwUlouy9th2Sxh43FSlyvwQLKZXmkwanI1uyYFNfN%2FEGOELd4BYJNn110kguhDYBqgwfpDLiFDUFU1%2Fp7SRvBxwxPYsKR%2Fky0g3oR7HEanUxRHSj5rHpgmd9iTcNrPNz6ykRMF9HA0rVHzoYltg2LbUb86bAQ7VEmtCE7wv6uYVROk5quORA4tfeoA4w%2FLZoC8tDTOQ3Khmt%2BnoI5FL41Fw6VRAqU84g%2B9Y7N%2FQAy%2F%2BugBH5qHARYRfmja7g0uhHJdTXJ5ugGAWJrWXSUVV2oN6rRiZlPOoa%2FMZ6n%2FpK8Lx58gW1p47Ffivp7wI%2B722%2Fi4Md6DUDctQT8s8h3vRifuWR6%2FbRF7wCLP2cg40PuIpzTBlCWsTjalQjrcfaXd2J%2FxviLUO9p1pOJkypFFftwijMIbW4Z3r5%2FNzpvVGfrbrWAJv%2FU7MqzgOWLO0XHRgR68Y7z%2Fcf1eWIDIDySMbAtoDPGoMoQ%2FLVhywnFd8SMOK2NQvcUJq1MX4ITsIEuU1xQnV1ye8QHiVuwoLYs879Mwjdbe0wY6pgEUt87SN7A1mX%2BbqGTuyMaZaKkoVxlXtzmvmSW8yIrOrXiHImBxQRDPOvYOcAdrSyiwu63UKCOV7Gz6uES0pfx742SEprX8EttmdugtsYqWcMYXk7SWv%2Fk%2FaToEWi7oxQ4bsKyje71wTt6gtiUsItyb342Y%2Bm8r5iOM6pKiiR2h9VXqtE19vxtXtY57XOWYI4I8KC6Zgg%2BzrWZ7SDKPit5GT9NyEbO%2F&X-Amz-Signature=1352d2887a7e27f57742582e704183a3fdb308da46be00b66dd8d307890c4686&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKFNELO5%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGT6qy9m7JP0%2FrKyi0RUVmasa22RLT9%2BKuoeMG5QinKSAiBSbgtJmbJZby69gKJXQIQKahUm%2Fo5CB4z4pvP8SM3%2B3Sr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMMoR7KhWHrR3y0osmKtwDeF0wyHKT1cZcxFF0WEAcM7b6nW0LyB%2BjsAT1eNa4%2BG8HF7%2BETQXBrE8YtYjUoFcKviiuJDgoaFXJcRnkOyTVob6%2FNJTjBbgAfcz6%2BVHwUlouy9th2Sxh43FSlyvwQLKZXmkwanI1uyYFNfN%2FEGOELd4BYJNn110kguhDYBqgwfpDLiFDUFU1%2Fp7SRvBxwxPYsKR%2Fky0g3oR7HEanUxRHSj5rHpgmd9iTcNrPNz6ykRMF9HA0rVHzoYltg2LbUb86bAQ7VEmtCE7wv6uYVROk5quORA4tfeoA4w%2FLZoC8tDTOQ3Khmt%2BnoI5FL41Fw6VRAqU84g%2B9Y7N%2FQAy%2F%2BugBH5qHARYRfmja7g0uhHJdTXJ5ugGAWJrWXSUVV2oN6rRiZlPOoa%2FMZ6n%2FpK8Lx58gW1p47Ffivp7wI%2B722%2Fi4Md6DUDctQT8s8h3vRifuWR6%2FbRF7wCLP2cg40PuIpzTBlCWsTjalQjrcfaXd2J%2FxviLUO9p1pOJkypFFftwijMIbW4Z3r5%2FNzpvVGfrbrWAJv%2FU7MqzgOWLO0XHRgR68Y7z%2Fcf1eWIDIDySMbAtoDPGoMoQ%2FLVhywnFd8SMOK2NQvcUJq1MX4ITsIEuU1xQnV1ye8QHiVuwoLYs879Mwjdbe0wY6pgEUt87SN7A1mX%2BbqGTuyMaZaKkoVxlXtzmvmSW8yIrOrXiHImBxQRDPOvYOcAdrSyiwu63UKCOV7Gz6uES0pfx742SEprX8EttmdugtsYqWcMYXk7SWv%2Fk%2FaToEWi7oxQ4bsKyje71wTt6gtiUsItyb342Y%2Bm8r5iOM6pKiiR2h9VXqtE19vxtXtY57XOWYI4I8KC6Zgg%2BzrWZ7SDKPit5GT9NyEbO%2F&X-Amz-Signature=65633ec5b08f6a72d3d23a076a03d86e0e7e4a4e9ab933472fafb85c714dd7b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKFNELO5%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGT6qy9m7JP0%2FrKyi0RUVmasa22RLT9%2BKuoeMG5QinKSAiBSbgtJmbJZby69gKJXQIQKahUm%2Fo5CB4z4pvP8SM3%2B3Sr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMMoR7KhWHrR3y0osmKtwDeF0wyHKT1cZcxFF0WEAcM7b6nW0LyB%2BjsAT1eNa4%2BG8HF7%2BETQXBrE8YtYjUoFcKviiuJDgoaFXJcRnkOyTVob6%2FNJTjBbgAfcz6%2BVHwUlouy9th2Sxh43FSlyvwQLKZXmkwanI1uyYFNfN%2FEGOELd4BYJNn110kguhDYBqgwfpDLiFDUFU1%2Fp7SRvBxwxPYsKR%2Fky0g3oR7HEanUxRHSj5rHpgmd9iTcNrPNz6ykRMF9HA0rVHzoYltg2LbUb86bAQ7VEmtCE7wv6uYVROk5quORA4tfeoA4w%2FLZoC8tDTOQ3Khmt%2BnoI5FL41Fw6VRAqU84g%2B9Y7N%2FQAy%2F%2BugBH5qHARYRfmja7g0uhHJdTXJ5ugGAWJrWXSUVV2oN6rRiZlPOoa%2FMZ6n%2FpK8Lx58gW1p47Ffivp7wI%2B722%2Fi4Md6DUDctQT8s8h3vRifuWR6%2FbRF7wCLP2cg40PuIpzTBlCWsTjalQjrcfaXd2J%2FxviLUO9p1pOJkypFFftwijMIbW4Z3r5%2FNzpvVGfrbrWAJv%2FU7MqzgOWLO0XHRgR68Y7z%2Fcf1eWIDIDySMbAtoDPGoMoQ%2FLVhywnFd8SMOK2NQvcUJq1MX4ITsIEuU1xQnV1ye8QHiVuwoLYs879Mwjdbe0wY6pgEUt87SN7A1mX%2BbqGTuyMaZaKkoVxlXtzmvmSW8yIrOrXiHImBxQRDPOvYOcAdrSyiwu63UKCOV7Gz6uES0pfx742SEprX8EttmdugtsYqWcMYXk7SWv%2Fk%2FaToEWi7oxQ4bsKyje71wTt6gtiUsItyb342Y%2Bm8r5iOM6pKiiR2h9VXqtE19vxtXtY57XOWYI4I8KC6Zgg%2BzrWZ7SDKPit5GT9NyEbO%2F&X-Amz-Signature=363494339474f3c89613933718c4d1d35ac9439773ab755db4764ee98b6e417d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKFNELO5%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGT6qy9m7JP0%2FrKyi0RUVmasa22RLT9%2BKuoeMG5QinKSAiBSbgtJmbJZby69gKJXQIQKahUm%2Fo5CB4z4pvP8SM3%2B3Sr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMMoR7KhWHrR3y0osmKtwDeF0wyHKT1cZcxFF0WEAcM7b6nW0LyB%2BjsAT1eNa4%2BG8HF7%2BETQXBrE8YtYjUoFcKviiuJDgoaFXJcRnkOyTVob6%2FNJTjBbgAfcz6%2BVHwUlouy9th2Sxh43FSlyvwQLKZXmkwanI1uyYFNfN%2FEGOELd4BYJNn110kguhDYBqgwfpDLiFDUFU1%2Fp7SRvBxwxPYsKR%2Fky0g3oR7HEanUxRHSj5rHpgmd9iTcNrPNz6ykRMF9HA0rVHzoYltg2LbUb86bAQ7VEmtCE7wv6uYVROk5quORA4tfeoA4w%2FLZoC8tDTOQ3Khmt%2BnoI5FL41Fw6VRAqU84g%2B9Y7N%2FQAy%2F%2BugBH5qHARYRfmja7g0uhHJdTXJ5ugGAWJrWXSUVV2oN6rRiZlPOoa%2FMZ6n%2FpK8Lx58gW1p47Ffivp7wI%2B722%2Fi4Md6DUDctQT8s8h3vRifuWR6%2FbRF7wCLP2cg40PuIpzTBlCWsTjalQjrcfaXd2J%2FxviLUO9p1pOJkypFFftwijMIbW4Z3r5%2FNzpvVGfrbrWAJv%2FU7MqzgOWLO0XHRgR68Y7z%2Fcf1eWIDIDySMbAtoDPGoMoQ%2FLVhywnFd8SMOK2NQvcUJq1MX4ITsIEuU1xQnV1ye8QHiVuwoLYs879Mwjdbe0wY6pgEUt87SN7A1mX%2BbqGTuyMaZaKkoVxlXtzmvmSW8yIrOrXiHImBxQRDPOvYOcAdrSyiwu63UKCOV7Gz6uES0pfx742SEprX8EttmdugtsYqWcMYXk7SWv%2Fk%2FaToEWi7oxQ4bsKyje71wTt6gtiUsItyb342Y%2Bm8r5iOM6pKiiR2h9VXqtE19vxtXtY57XOWYI4I8KC6Zgg%2BzrWZ7SDKPit5GT9NyEbO%2F&X-Amz-Signature=458390da4b9e3c4bd315c6f6775a2a84e2ff49c64fcf31b4a883c5a1c7d51087&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKFNELO5%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGT6qy9m7JP0%2FrKyi0RUVmasa22RLT9%2BKuoeMG5QinKSAiBSbgtJmbJZby69gKJXQIQKahUm%2Fo5CB4z4pvP8SM3%2B3Sr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMMoR7KhWHrR3y0osmKtwDeF0wyHKT1cZcxFF0WEAcM7b6nW0LyB%2BjsAT1eNa4%2BG8HF7%2BETQXBrE8YtYjUoFcKviiuJDgoaFXJcRnkOyTVob6%2FNJTjBbgAfcz6%2BVHwUlouy9th2Sxh43FSlyvwQLKZXmkwanI1uyYFNfN%2FEGOELd4BYJNn110kguhDYBqgwfpDLiFDUFU1%2Fp7SRvBxwxPYsKR%2Fky0g3oR7HEanUxRHSj5rHpgmd9iTcNrPNz6ykRMF9HA0rVHzoYltg2LbUb86bAQ7VEmtCE7wv6uYVROk5quORA4tfeoA4w%2FLZoC8tDTOQ3Khmt%2BnoI5FL41Fw6VRAqU84g%2B9Y7N%2FQAy%2F%2BugBH5qHARYRfmja7g0uhHJdTXJ5ugGAWJrWXSUVV2oN6rRiZlPOoa%2FMZ6n%2FpK8Lx58gW1p47Ffivp7wI%2B722%2Fi4Md6DUDctQT8s8h3vRifuWR6%2FbRF7wCLP2cg40PuIpzTBlCWsTjalQjrcfaXd2J%2FxviLUO9p1pOJkypFFftwijMIbW4Z3r5%2FNzpvVGfrbrWAJv%2FU7MqzgOWLO0XHRgR68Y7z%2Fcf1eWIDIDySMbAtoDPGoMoQ%2FLVhywnFd8SMOK2NQvcUJq1MX4ITsIEuU1xQnV1ye8QHiVuwoLYs879Mwjdbe0wY6pgEUt87SN7A1mX%2BbqGTuyMaZaKkoVxlXtzmvmSW8yIrOrXiHImBxQRDPOvYOcAdrSyiwu63UKCOV7Gz6uES0pfx742SEprX8EttmdugtsYqWcMYXk7SWv%2Fk%2FaToEWi7oxQ4bsKyje71wTt6gtiUsItyb342Y%2Bm8r5iOM6pKiiR2h9VXqtE19vxtXtY57XOWYI4I8KC6Zgg%2BzrWZ7SDKPit5GT9NyEbO%2F&X-Amz-Signature=8a0d241ca197be1e6f8bf37db886e96db4144b38bf49fdcbcefb0cedf8e5188f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
