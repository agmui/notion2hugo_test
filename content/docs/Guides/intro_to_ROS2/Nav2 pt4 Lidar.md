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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB7LOEKZ%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHYsr%2FlpueO3PnvOfO3kvOvWgyRcKI%2Fdox64wqFPSHk3AiEAiqKnR0YmVpwLCyJzJrXrMtlF5urhnI74%2BMeylrkGn3Yq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDCIdoOxKvIlYg4xszircA44ILc1h2Ok1uVg5ZwwhDPo4vqMxmJTVmtpTuWox%2FQU1WhKa1mZYVWjLq2aYSh%2F3AQ2bfn0vLHnvAG8fnrqPpXcn78Ei2RC8rLGIqPchqjlyk3pH7S%2Blp9pTcS6%2ByN%2B1P0KkzVPq%2FaOMwfYjmzMEoY2dIPXuK5L25pYhk6DOLjo3d7ko3z%2Ba3O5gh5o35K%2BuG8I6aDmUe%2F5YZaPxgmKurg9pgX3CdVIFJUGXbsDj6322Lei9niLe79kvJpDb8bph%2Fj2ZCf8MbcTozrSWhneZnz2%2BM74i8ffstnLXyl7m6LDv2sabz5llOelJSb1l00HIihRjvD5glM9PyMj6Gne8079aSIvDsb8IGdk9k%2FX%2BTzHIdhWcRqpuzOWh7VEZvPqGFwCzVvpzypRKKDcdR2N%2BvsnFGvWvyhz5hNqy4tlDBafwb691MBOipoxOs8SL6zIqukXp%2BRfUxA%2BoMUwTyldXZRjExbnBhXzP3eE1iDuOlv0W9tExEOjyXJefOiCTXl2yqAJicdB4UtQtBfHUWGQtti3uUZVDW%2B%2BI5X6GY7e90lDiVvJd%2BpwsSmCLpFE29ajqyCP7JvJJirGm2hnR0dUESOWG97nx334HEu%2BbypTKq5PADqo7PSg1udJ2m1aKMIXt2dMGOqUBL4ENWSdPd7Fy43gTqr38hC3naI9ybiJDukm6oYMwiX0FsKa42%2FNov%2BLR7kgV3xB5sn3tK5JDSJ5dYZ1SPcUu0McSxwy%2F4Znlqra58rvrcb4DenzAfx%2FpAUYz5Xq3OoIT89IwjDfygT%2Be91obil%2BQucEL6QGH4S2fx2LCLxPnYeWdGFxn3O6UuaMt2L3mpPyZ%2BBGp6Wdu0kP%2BZv1DEfjKB6vJDVaD&X-Amz-Signature=757a0b0c70918cddd43f979d32e3e82da9d94396590241eb2c6659fbd6c6dfe0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QZAUWIL%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BASJKBaqlIrfVlDatUk0W8jkR4yinPergbOcwJUg9AwIgBZNs91KiVFrI4GccKJ77gndv0xkKw15HtcczoSIAv6Qq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDHDoB9a6QX835ttzsyrcAzTFw1C2fqNzKhU4I47tU%2FPxDakOAbL%2FGTq7sfHnZtLoiVyYpWMwgeNSfN8%2F6YXqot6R3dMMBNk34A4TI%2FeJhOoZTp9S69gr039OK9%2FB%2FHvGiXDmzDKBndjHz9jA4BpdxRRyvFZtBOFgmjF%2FrfeTgEhQeD7Q44DWPNc3cYKTFwwO8z2x9aCYy4fXfQnddTL4oiOgaeZbuDUtbV4j8HinCb3dDRHa5l7agZmwiHFoAbgqp%2BLkxoRee7szUg9KM6HQWjmv1YDgyQrwPaU%2F9boH%2FW%2FxI1yELf0sjzniRunTFOxGxoKJbxG4B%2BiMBa0Ts%2FDLcTTOeXRLRrD4X%2BIK81qWf8SZTJl4KP4ShwPTh5mTnWuj6yFGqrG4WnE7NZXhdoU9qqk%2BdaijoP5gpsqkNqJ2adcc%2F%2BI6eCVN2VWYQPsO9RZjk11ufLAdjt4%2FA0zoedoiYGWAtsnhLcgS220CngXKLF5Tb%2B39qSc9xOkguQB9%2FCfeM1w%2B1Vn38RI3Wy51uRgAthVc%2Bdg18VoaD%2FIIDdbnni0rZWE3aFR1fFv48XrFA2ftX4a55k4xoUN9JLuh27tiob28BJ1%2B1DihroKqN2HCCNvOmB0iAEqi%2BfEebkkem3NexYvnt2yKvzio9cFqMJ%2Ft2dMGOqUBeBH9BI391HOKc1I1kGHqpMY2kxFZbnW2O9xStQlzGyK4oyjNLQ5IoKWd%2F2DANEYVwedECE%2BtOZKZ5Y1h8OLMeuxnXa6JrI353A2wTcFkbgRj61Tg6q0%2BTH7cdaBJpM0wDcTV5N58dVYcIIYqbLlsjcE%2FTCm4JwnFkfdIptm3toNhqf2ZaUuBSfBwPhTGPB%2BbvwvAsIZ1Y4RLom%2BLb5r8ITjYIN8L&X-Amz-Signature=4b25be2c0678e674de4b1c207e2b8cc211bd5a76fff13599bbc35e4d82ed5b1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QZAUWIL%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BASJKBaqlIrfVlDatUk0W8jkR4yinPergbOcwJUg9AwIgBZNs91KiVFrI4GccKJ77gndv0xkKw15HtcczoSIAv6Qq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDHDoB9a6QX835ttzsyrcAzTFw1C2fqNzKhU4I47tU%2FPxDakOAbL%2FGTq7sfHnZtLoiVyYpWMwgeNSfN8%2F6YXqot6R3dMMBNk34A4TI%2FeJhOoZTp9S69gr039OK9%2FB%2FHvGiXDmzDKBndjHz9jA4BpdxRRyvFZtBOFgmjF%2FrfeTgEhQeD7Q44DWPNc3cYKTFwwO8z2x9aCYy4fXfQnddTL4oiOgaeZbuDUtbV4j8HinCb3dDRHa5l7agZmwiHFoAbgqp%2BLkxoRee7szUg9KM6HQWjmv1YDgyQrwPaU%2F9boH%2FW%2FxI1yELf0sjzniRunTFOxGxoKJbxG4B%2BiMBa0Ts%2FDLcTTOeXRLRrD4X%2BIK81qWf8SZTJl4KP4ShwPTh5mTnWuj6yFGqrG4WnE7NZXhdoU9qqk%2BdaijoP5gpsqkNqJ2adcc%2F%2BI6eCVN2VWYQPsO9RZjk11ufLAdjt4%2FA0zoedoiYGWAtsnhLcgS220CngXKLF5Tb%2B39qSc9xOkguQB9%2FCfeM1w%2B1Vn38RI3Wy51uRgAthVc%2Bdg18VoaD%2FIIDdbnni0rZWE3aFR1fFv48XrFA2ftX4a55k4xoUN9JLuh27tiob28BJ1%2B1DihroKqN2HCCNvOmB0iAEqi%2BfEebkkem3NexYvnt2yKvzio9cFqMJ%2Ft2dMGOqUBeBH9BI391HOKc1I1kGHqpMY2kxFZbnW2O9xStQlzGyK4oyjNLQ5IoKWd%2F2DANEYVwedECE%2BtOZKZ5Y1h8OLMeuxnXa6JrI353A2wTcFkbgRj61Tg6q0%2BTH7cdaBJpM0wDcTV5N58dVYcIIYqbLlsjcE%2FTCm4JwnFkfdIptm3toNhqf2ZaUuBSfBwPhTGPB%2BbvwvAsIZ1Y4RLom%2BLb5r8ITjYIN8L&X-Amz-Signature=7fbdc7a98aaf57ed6a80981c9a9a18b08d218f41bf2b8c642570f982b8ba200a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QZAUWIL%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BASJKBaqlIrfVlDatUk0W8jkR4yinPergbOcwJUg9AwIgBZNs91KiVFrI4GccKJ77gndv0xkKw15HtcczoSIAv6Qq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDHDoB9a6QX835ttzsyrcAzTFw1C2fqNzKhU4I47tU%2FPxDakOAbL%2FGTq7sfHnZtLoiVyYpWMwgeNSfN8%2F6YXqot6R3dMMBNk34A4TI%2FeJhOoZTp9S69gr039OK9%2FB%2FHvGiXDmzDKBndjHz9jA4BpdxRRyvFZtBOFgmjF%2FrfeTgEhQeD7Q44DWPNc3cYKTFwwO8z2x9aCYy4fXfQnddTL4oiOgaeZbuDUtbV4j8HinCb3dDRHa5l7agZmwiHFoAbgqp%2BLkxoRee7szUg9KM6HQWjmv1YDgyQrwPaU%2F9boH%2FW%2FxI1yELf0sjzniRunTFOxGxoKJbxG4B%2BiMBa0Ts%2FDLcTTOeXRLRrD4X%2BIK81qWf8SZTJl4KP4ShwPTh5mTnWuj6yFGqrG4WnE7NZXhdoU9qqk%2BdaijoP5gpsqkNqJ2adcc%2F%2BI6eCVN2VWYQPsO9RZjk11ufLAdjt4%2FA0zoedoiYGWAtsnhLcgS220CngXKLF5Tb%2B39qSc9xOkguQB9%2FCfeM1w%2B1Vn38RI3Wy51uRgAthVc%2Bdg18VoaD%2FIIDdbnni0rZWE3aFR1fFv48XrFA2ftX4a55k4xoUN9JLuh27tiob28BJ1%2B1DihroKqN2HCCNvOmB0iAEqi%2BfEebkkem3NexYvnt2yKvzio9cFqMJ%2Ft2dMGOqUBeBH9BI391HOKc1I1kGHqpMY2kxFZbnW2O9xStQlzGyK4oyjNLQ5IoKWd%2F2DANEYVwedECE%2BtOZKZ5Y1h8OLMeuxnXa6JrI353A2wTcFkbgRj61Tg6q0%2BTH7cdaBJpM0wDcTV5N58dVYcIIYqbLlsjcE%2FTCm4JwnFkfdIptm3toNhqf2ZaUuBSfBwPhTGPB%2BbvwvAsIZ1Y4RLom%2BLb5r8ITjYIN8L&X-Amz-Signature=82bd36699cddd72c7358be1c1aa89b3e769aaeeb8e573548ffc75920d0ebb70e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QZAUWIL%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BASJKBaqlIrfVlDatUk0W8jkR4yinPergbOcwJUg9AwIgBZNs91KiVFrI4GccKJ77gndv0xkKw15HtcczoSIAv6Qq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDHDoB9a6QX835ttzsyrcAzTFw1C2fqNzKhU4I47tU%2FPxDakOAbL%2FGTq7sfHnZtLoiVyYpWMwgeNSfN8%2F6YXqot6R3dMMBNk34A4TI%2FeJhOoZTp9S69gr039OK9%2FB%2FHvGiXDmzDKBndjHz9jA4BpdxRRyvFZtBOFgmjF%2FrfeTgEhQeD7Q44DWPNc3cYKTFwwO8z2x9aCYy4fXfQnddTL4oiOgaeZbuDUtbV4j8HinCb3dDRHa5l7agZmwiHFoAbgqp%2BLkxoRee7szUg9KM6HQWjmv1YDgyQrwPaU%2F9boH%2FW%2FxI1yELf0sjzniRunTFOxGxoKJbxG4B%2BiMBa0Ts%2FDLcTTOeXRLRrD4X%2BIK81qWf8SZTJl4KP4ShwPTh5mTnWuj6yFGqrG4WnE7NZXhdoU9qqk%2BdaijoP5gpsqkNqJ2adcc%2F%2BI6eCVN2VWYQPsO9RZjk11ufLAdjt4%2FA0zoedoiYGWAtsnhLcgS220CngXKLF5Tb%2B39qSc9xOkguQB9%2FCfeM1w%2B1Vn38RI3Wy51uRgAthVc%2Bdg18VoaD%2FIIDdbnni0rZWE3aFR1fFv48XrFA2ftX4a55k4xoUN9JLuh27tiob28BJ1%2B1DihroKqN2HCCNvOmB0iAEqi%2BfEebkkem3NexYvnt2yKvzio9cFqMJ%2Ft2dMGOqUBeBH9BI391HOKc1I1kGHqpMY2kxFZbnW2O9xStQlzGyK4oyjNLQ5IoKWd%2F2DANEYVwedECE%2BtOZKZ5Y1h8OLMeuxnXa6JrI353A2wTcFkbgRj61Tg6q0%2BTH7cdaBJpM0wDcTV5N58dVYcIIYqbLlsjcE%2FTCm4JwnFkfdIptm3toNhqf2ZaUuBSfBwPhTGPB%2BbvwvAsIZ1Y4RLom%2BLb5r8ITjYIN8L&X-Amz-Signature=fa1ebb48f21a1b88fdf4c8e42b53b416695668bb264ae069c71a46cba6ae865e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QZAUWIL%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BASJKBaqlIrfVlDatUk0W8jkR4yinPergbOcwJUg9AwIgBZNs91KiVFrI4GccKJ77gndv0xkKw15HtcczoSIAv6Qq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDHDoB9a6QX835ttzsyrcAzTFw1C2fqNzKhU4I47tU%2FPxDakOAbL%2FGTq7sfHnZtLoiVyYpWMwgeNSfN8%2F6YXqot6R3dMMBNk34A4TI%2FeJhOoZTp9S69gr039OK9%2FB%2FHvGiXDmzDKBndjHz9jA4BpdxRRyvFZtBOFgmjF%2FrfeTgEhQeD7Q44DWPNc3cYKTFwwO8z2x9aCYy4fXfQnddTL4oiOgaeZbuDUtbV4j8HinCb3dDRHa5l7agZmwiHFoAbgqp%2BLkxoRee7szUg9KM6HQWjmv1YDgyQrwPaU%2F9boH%2FW%2FxI1yELf0sjzniRunTFOxGxoKJbxG4B%2BiMBa0Ts%2FDLcTTOeXRLRrD4X%2BIK81qWf8SZTJl4KP4ShwPTh5mTnWuj6yFGqrG4WnE7NZXhdoU9qqk%2BdaijoP5gpsqkNqJ2adcc%2F%2BI6eCVN2VWYQPsO9RZjk11ufLAdjt4%2FA0zoedoiYGWAtsnhLcgS220CngXKLF5Tb%2B39qSc9xOkguQB9%2FCfeM1w%2B1Vn38RI3Wy51uRgAthVc%2Bdg18VoaD%2FIIDdbnni0rZWE3aFR1fFv48XrFA2ftX4a55k4xoUN9JLuh27tiob28BJ1%2B1DihroKqN2HCCNvOmB0iAEqi%2BfEebkkem3NexYvnt2yKvzio9cFqMJ%2Ft2dMGOqUBeBH9BI391HOKc1I1kGHqpMY2kxFZbnW2O9xStQlzGyK4oyjNLQ5IoKWd%2F2DANEYVwedECE%2BtOZKZ5Y1h8OLMeuxnXa6JrI353A2wTcFkbgRj61Tg6q0%2BTH7cdaBJpM0wDcTV5N58dVYcIIYqbLlsjcE%2FTCm4JwnFkfdIptm3toNhqf2ZaUuBSfBwPhTGPB%2BbvwvAsIZ1Y4RLom%2BLb5r8ITjYIN8L&X-Amz-Signature=d76625812beaef9992d7e994040646ba242d040dbecf9841e46ac706b8ed2aed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QZAUWIL%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BASJKBaqlIrfVlDatUk0W8jkR4yinPergbOcwJUg9AwIgBZNs91KiVFrI4GccKJ77gndv0xkKw15HtcczoSIAv6Qq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDHDoB9a6QX835ttzsyrcAzTFw1C2fqNzKhU4I47tU%2FPxDakOAbL%2FGTq7sfHnZtLoiVyYpWMwgeNSfN8%2F6YXqot6R3dMMBNk34A4TI%2FeJhOoZTp9S69gr039OK9%2FB%2FHvGiXDmzDKBndjHz9jA4BpdxRRyvFZtBOFgmjF%2FrfeTgEhQeD7Q44DWPNc3cYKTFwwO8z2x9aCYy4fXfQnddTL4oiOgaeZbuDUtbV4j8HinCb3dDRHa5l7agZmwiHFoAbgqp%2BLkxoRee7szUg9KM6HQWjmv1YDgyQrwPaU%2F9boH%2FW%2FxI1yELf0sjzniRunTFOxGxoKJbxG4B%2BiMBa0Ts%2FDLcTTOeXRLRrD4X%2BIK81qWf8SZTJl4KP4ShwPTh5mTnWuj6yFGqrG4WnE7NZXhdoU9qqk%2BdaijoP5gpsqkNqJ2adcc%2F%2BI6eCVN2VWYQPsO9RZjk11ufLAdjt4%2FA0zoedoiYGWAtsnhLcgS220CngXKLF5Tb%2B39qSc9xOkguQB9%2FCfeM1w%2B1Vn38RI3Wy51uRgAthVc%2Bdg18VoaD%2FIIDdbnni0rZWE3aFR1fFv48XrFA2ftX4a55k4xoUN9JLuh27tiob28BJ1%2B1DihroKqN2HCCNvOmB0iAEqi%2BfEebkkem3NexYvnt2yKvzio9cFqMJ%2Ft2dMGOqUBeBH9BI391HOKc1I1kGHqpMY2kxFZbnW2O9xStQlzGyK4oyjNLQ5IoKWd%2F2DANEYVwedECE%2BtOZKZ5Y1h8OLMeuxnXa6JrI353A2wTcFkbgRj61Tg6q0%2BTH7cdaBJpM0wDcTV5N58dVYcIIYqbLlsjcE%2FTCm4JwnFkfdIptm3toNhqf2ZaUuBSfBwPhTGPB%2BbvwvAsIZ1Y4RLom%2BLb5r8ITjYIN8L&X-Amz-Signature=ebddbf6a0d9b6d1ece821460ef80f29e9ee09ffb5ebf474f18fd9873c574d3a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QZAUWIL%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BASJKBaqlIrfVlDatUk0W8jkR4yinPergbOcwJUg9AwIgBZNs91KiVFrI4GccKJ77gndv0xkKw15HtcczoSIAv6Qq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDHDoB9a6QX835ttzsyrcAzTFw1C2fqNzKhU4I47tU%2FPxDakOAbL%2FGTq7sfHnZtLoiVyYpWMwgeNSfN8%2F6YXqot6R3dMMBNk34A4TI%2FeJhOoZTp9S69gr039OK9%2FB%2FHvGiXDmzDKBndjHz9jA4BpdxRRyvFZtBOFgmjF%2FrfeTgEhQeD7Q44DWPNc3cYKTFwwO8z2x9aCYy4fXfQnddTL4oiOgaeZbuDUtbV4j8HinCb3dDRHa5l7agZmwiHFoAbgqp%2BLkxoRee7szUg9KM6HQWjmv1YDgyQrwPaU%2F9boH%2FW%2FxI1yELf0sjzniRunTFOxGxoKJbxG4B%2BiMBa0Ts%2FDLcTTOeXRLRrD4X%2BIK81qWf8SZTJl4KP4ShwPTh5mTnWuj6yFGqrG4WnE7NZXhdoU9qqk%2BdaijoP5gpsqkNqJ2adcc%2F%2BI6eCVN2VWYQPsO9RZjk11ufLAdjt4%2FA0zoedoiYGWAtsnhLcgS220CngXKLF5Tb%2B39qSc9xOkguQB9%2FCfeM1w%2B1Vn38RI3Wy51uRgAthVc%2Bdg18VoaD%2FIIDdbnni0rZWE3aFR1fFv48XrFA2ftX4a55k4xoUN9JLuh27tiob28BJ1%2B1DihroKqN2HCCNvOmB0iAEqi%2BfEebkkem3NexYvnt2yKvzio9cFqMJ%2Ft2dMGOqUBeBH9BI391HOKc1I1kGHqpMY2kxFZbnW2O9xStQlzGyK4oyjNLQ5IoKWd%2F2DANEYVwedECE%2BtOZKZ5Y1h8OLMeuxnXa6JrI353A2wTcFkbgRj61Tg6q0%2BTH7cdaBJpM0wDcTV5N58dVYcIIYqbLlsjcE%2FTCm4JwnFkfdIptm3toNhqf2ZaUuBSfBwPhTGPB%2BbvwvAsIZ1Y4RLom%2BLb5r8ITjYIN8L&X-Amz-Signature=6da53b11a6635ceb8e38bdbd96106c2bd840ffac0d329ec7672087eeb9177bc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QZAUWIL%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BASJKBaqlIrfVlDatUk0W8jkR4yinPergbOcwJUg9AwIgBZNs91KiVFrI4GccKJ77gndv0xkKw15HtcczoSIAv6Qq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDHDoB9a6QX835ttzsyrcAzTFw1C2fqNzKhU4I47tU%2FPxDakOAbL%2FGTq7sfHnZtLoiVyYpWMwgeNSfN8%2F6YXqot6R3dMMBNk34A4TI%2FeJhOoZTp9S69gr039OK9%2FB%2FHvGiXDmzDKBndjHz9jA4BpdxRRyvFZtBOFgmjF%2FrfeTgEhQeD7Q44DWPNc3cYKTFwwO8z2x9aCYy4fXfQnddTL4oiOgaeZbuDUtbV4j8HinCb3dDRHa5l7agZmwiHFoAbgqp%2BLkxoRee7szUg9KM6HQWjmv1YDgyQrwPaU%2F9boH%2FW%2FxI1yELf0sjzniRunTFOxGxoKJbxG4B%2BiMBa0Ts%2FDLcTTOeXRLRrD4X%2BIK81qWf8SZTJl4KP4ShwPTh5mTnWuj6yFGqrG4WnE7NZXhdoU9qqk%2BdaijoP5gpsqkNqJ2adcc%2F%2BI6eCVN2VWYQPsO9RZjk11ufLAdjt4%2FA0zoedoiYGWAtsnhLcgS220CngXKLF5Tb%2B39qSc9xOkguQB9%2FCfeM1w%2B1Vn38RI3Wy51uRgAthVc%2Bdg18VoaD%2FIIDdbnni0rZWE3aFR1fFv48XrFA2ftX4a55k4xoUN9JLuh27tiob28BJ1%2B1DihroKqN2HCCNvOmB0iAEqi%2BfEebkkem3NexYvnt2yKvzio9cFqMJ%2Ft2dMGOqUBeBH9BI391HOKc1I1kGHqpMY2kxFZbnW2O9xStQlzGyK4oyjNLQ5IoKWd%2F2DANEYVwedECE%2BtOZKZ5Y1h8OLMeuxnXa6JrI353A2wTcFkbgRj61Tg6q0%2BTH7cdaBJpM0wDcTV5N58dVYcIIYqbLlsjcE%2FTCm4JwnFkfdIptm3toNhqf2ZaUuBSfBwPhTGPB%2BbvwvAsIZ1Y4RLom%2BLb5r8ITjYIN8L&X-Amz-Signature=3f26f33bc5b6c115c6775c1e9551f430a464b8ee4a08043895535e7790cbfbf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QZAUWIL%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BASJKBaqlIrfVlDatUk0W8jkR4yinPergbOcwJUg9AwIgBZNs91KiVFrI4GccKJ77gndv0xkKw15HtcczoSIAv6Qq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDHDoB9a6QX835ttzsyrcAzTFw1C2fqNzKhU4I47tU%2FPxDakOAbL%2FGTq7sfHnZtLoiVyYpWMwgeNSfN8%2F6YXqot6R3dMMBNk34A4TI%2FeJhOoZTp9S69gr039OK9%2FB%2FHvGiXDmzDKBndjHz9jA4BpdxRRyvFZtBOFgmjF%2FrfeTgEhQeD7Q44DWPNc3cYKTFwwO8z2x9aCYy4fXfQnddTL4oiOgaeZbuDUtbV4j8HinCb3dDRHa5l7agZmwiHFoAbgqp%2BLkxoRee7szUg9KM6HQWjmv1YDgyQrwPaU%2F9boH%2FW%2FxI1yELf0sjzniRunTFOxGxoKJbxG4B%2BiMBa0Ts%2FDLcTTOeXRLRrD4X%2BIK81qWf8SZTJl4KP4ShwPTh5mTnWuj6yFGqrG4WnE7NZXhdoU9qqk%2BdaijoP5gpsqkNqJ2adcc%2F%2BI6eCVN2VWYQPsO9RZjk11ufLAdjt4%2FA0zoedoiYGWAtsnhLcgS220CngXKLF5Tb%2B39qSc9xOkguQB9%2FCfeM1w%2B1Vn38RI3Wy51uRgAthVc%2Bdg18VoaD%2FIIDdbnni0rZWE3aFR1fFv48XrFA2ftX4a55k4xoUN9JLuh27tiob28BJ1%2B1DihroKqN2HCCNvOmB0iAEqi%2BfEebkkem3NexYvnt2yKvzio9cFqMJ%2Ft2dMGOqUBeBH9BI391HOKc1I1kGHqpMY2kxFZbnW2O9xStQlzGyK4oyjNLQ5IoKWd%2F2DANEYVwedECE%2BtOZKZ5Y1h8OLMeuxnXa6JrI353A2wTcFkbgRj61Tg6q0%2BTH7cdaBJpM0wDcTV5N58dVYcIIYqbLlsjcE%2FTCm4JwnFkfdIptm3toNhqf2ZaUuBSfBwPhTGPB%2BbvwvAsIZ1Y4RLom%2BLb5r8ITjYIN8L&X-Amz-Signature=13a1be273be68f40f51e1a84454c464b05bf231eb912e6d8e7d69f1250935a9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QZAUWIL%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BASJKBaqlIrfVlDatUk0W8jkR4yinPergbOcwJUg9AwIgBZNs91KiVFrI4GccKJ77gndv0xkKw15HtcczoSIAv6Qq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDHDoB9a6QX835ttzsyrcAzTFw1C2fqNzKhU4I47tU%2FPxDakOAbL%2FGTq7sfHnZtLoiVyYpWMwgeNSfN8%2F6YXqot6R3dMMBNk34A4TI%2FeJhOoZTp9S69gr039OK9%2FB%2FHvGiXDmzDKBndjHz9jA4BpdxRRyvFZtBOFgmjF%2FrfeTgEhQeD7Q44DWPNc3cYKTFwwO8z2x9aCYy4fXfQnddTL4oiOgaeZbuDUtbV4j8HinCb3dDRHa5l7agZmwiHFoAbgqp%2BLkxoRee7szUg9KM6HQWjmv1YDgyQrwPaU%2F9boH%2FW%2FxI1yELf0sjzniRunTFOxGxoKJbxG4B%2BiMBa0Ts%2FDLcTTOeXRLRrD4X%2BIK81qWf8SZTJl4KP4ShwPTh5mTnWuj6yFGqrG4WnE7NZXhdoU9qqk%2BdaijoP5gpsqkNqJ2adcc%2F%2BI6eCVN2VWYQPsO9RZjk11ufLAdjt4%2FA0zoedoiYGWAtsnhLcgS220CngXKLF5Tb%2B39qSc9xOkguQB9%2FCfeM1w%2B1Vn38RI3Wy51uRgAthVc%2Bdg18VoaD%2FIIDdbnni0rZWE3aFR1fFv48XrFA2ftX4a55k4xoUN9JLuh27tiob28BJ1%2B1DihroKqN2HCCNvOmB0iAEqi%2BfEebkkem3NexYvnt2yKvzio9cFqMJ%2Ft2dMGOqUBeBH9BI391HOKc1I1kGHqpMY2kxFZbnW2O9xStQlzGyK4oyjNLQ5IoKWd%2F2DANEYVwedECE%2BtOZKZ5Y1h8OLMeuxnXa6JrI353A2wTcFkbgRj61Tg6q0%2BTH7cdaBJpM0wDcTV5N58dVYcIIYqbLlsjcE%2FTCm4JwnFkfdIptm3toNhqf2ZaUuBSfBwPhTGPB%2BbvwvAsIZ1Y4RLom%2BLb5r8ITjYIN8L&X-Amz-Signature=fa1ebb48f21a1b88fdf4c8e42b53b416695668bb264ae069c71a46cba6ae865e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
