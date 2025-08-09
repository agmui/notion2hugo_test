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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655ECMCMQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIHxialxbTeMWyGoVQKO3RAIe0KslsRW4ysn%2FA%2FmE4L9CAiEA8QopDhMQLP2op66lv%2FvzC47xFCgzOSwcXjoMJoi3UREqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6edVFSHtxEtXaloyrcA0UytbFo%2FJGUXLxk03C4y1D4kg24gA9pUopZWMCUE7hi%2BUdf%2Bfiy%2FJJnAd33gcGHU1ZX3%2BUDlbPC1t02T0kKyKLwCQVn8hW1emQajLMRO%2FNY%2FffMsmDfmheAmtzak%2FVXhnWeZYjcdj%2F67TLC8Y6DOS0qarbK9IlO8hL0kpwpTyNxVPl7mTQ4quCnzhEluLdPzw1bmDN74MylxvJTyWmQc%2F76PrK5leQQV6fdgsGzeZOdtvwh1bl8Q90Zch0N4fsqm1JC6xS4bSjKLm3dH5YXntJ6%2FTZpvYDDJYiEktl7NtQCkoEt3Y5rHcOShzI3caRyRDmh3J5ObhCHTEd7DayIgGkG%2FdxdCXvTslH7UEBB11AXgIP%2BhZN3qJNyiAvC0z7SOhIUCGZ4Tbo7Mb6HSvoPWIC18MLwn3mo2%2F28feikcpe5%2BWym1hrfk1G2Koo0avgvqZ7QoBo9WAWHDDFJm87TI3d01wuEcEGiT6anZNzAqzN1I%2BggJnkOLdeWgMRBJCpgz21vZUDPa7%2B3sGIDMAXhcllBw0%2BvK3RSra62CBJLXrG160gzP6Ngq8sOBOPysRdb6D1MG2xotVdzj9nxWE0lDcDUdAWDBGfQ%2FQpZrxAH8aeRWk7OIum6930QdVXtMO712sQGOqUBQHZdGGwaj%2Bg5IeJOA95M5nJVNJOWSCvcUQcds12sg8sFkG8hW11u%2FiPgM1D%2FTKezLr48n%2B5pVGmrN%2FlfB06gwa%2Fcv5E99HUu89BkOWszm3w%2By9JxznBayfKDqRzbX%2BvKXE0ontp96TnZMcgz66akj9aRALjZiSRduHcXMkZMVqGTEQZqYdfhcL38PMB%2BIsga41574yjCedEkPpKstomyLfJpqRxM&X-Amz-Signature=a84698ccdc6a016be3eac0e37496684b94fa9868855ae5e9abfeabf33b97c561&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXD4DGYV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDqDORalYfsiSJkDvIfR%2BvXt2Gb9bK%2BbK4FBiE7WoM1wAIhANVZs3XLrjzDZlft%2BVwVtNgDhKHPDfBePjdcdccWLW1ZKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjIOV9UzXQUmPPm1wq3ANRjS6QcoNxIQ%2F5M4O%2FjPPRUXgjSABprYsX82bBs0ahiMcJMia9TmDvGLsZj%2BqvtcCU4HXQL5%2BOOYNfG5Adt98US%2Bf7McTRibnhvCQZaErziWwS4JhM5VH4oNU8iRVu1E5SG3B%2Fnkg5DCCz%2FiwWSMG1AC15bgIzUNLEcfi7aHSNVaRWhTRE778plcH5EQtmgMGEQQ20nipTzzruf9aSyuyj8nwhEtauVSYnyptB%2Fryj8IWVuXk2lRZ6B99g8%2F1ackXS%2BKUAFV5dsk5KaFlg6y3ap2jWYEK6TIRNN4EF%2BiAn8V%2FZWbEsbEBDjc74eHqpFwNnW5gpGYDpd4LXED%2BFrZnkW14e2H6I2zoiTqJgrbvZC%2F2MBFMzLieyUqPMf%2BrX2PrXm9F3kM9VUsVOiTKIG3QiagjAzhtvXpahgonShVIr3puAiylsEPwpFcJtziYj%2F0eh3wxOK7DF1r4G9wUPG2UjJBp%2FO5Rxrmnb28Ll7K6FZzlsMHRfjZwdfDLWbrEekkrrqkzn4x%2FgyhAPFLgEQvrpAUEP%2F%2BZBa1Ck1lms%2Fpguf2iWH7Wc3st3%2F0PZQhvvVaK%2BvrNLGb8ONbbxtSi7Z2di6aexU7xah%2F61i0nQCJmI5z0XCumXZ3DlzvXUnDCL9trEBjqkARlTrRMPC5z%2B6kqd9lX4o1PPcbXGjiKAuvkL5padCumxfUl%2BgbSJDKrgQD%2BBVobyp1RTKyDmCpDEkBMWCAp6GLtW%2FlAoOsCevAU%2FjM9Ru5wjrs11T5CJQiPML%2FP%2BuATbslDm%2BrwQigHF%2FC6j62xffrxk2EWwBHTBtvH4OjvZilraTKq4%2BLJJ6HbW9UpQDevjnpDwCzMKJuyhh4s9zdKoo0U6lWp0&X-Amz-Signature=17477361ad8572a496b874a2215db3e4087f79c03b6a9d04e7c1ad9c63a0da59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXD4DGYV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDqDORalYfsiSJkDvIfR%2BvXt2Gb9bK%2BbK4FBiE7WoM1wAIhANVZs3XLrjzDZlft%2BVwVtNgDhKHPDfBePjdcdccWLW1ZKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjIOV9UzXQUmPPm1wq3ANRjS6QcoNxIQ%2F5M4O%2FjPPRUXgjSABprYsX82bBs0ahiMcJMia9TmDvGLsZj%2BqvtcCU4HXQL5%2BOOYNfG5Adt98US%2Bf7McTRibnhvCQZaErziWwS4JhM5VH4oNU8iRVu1E5SG3B%2Fnkg5DCCz%2FiwWSMG1AC15bgIzUNLEcfi7aHSNVaRWhTRE778plcH5EQtmgMGEQQ20nipTzzruf9aSyuyj8nwhEtauVSYnyptB%2Fryj8IWVuXk2lRZ6B99g8%2F1ackXS%2BKUAFV5dsk5KaFlg6y3ap2jWYEK6TIRNN4EF%2BiAn8V%2FZWbEsbEBDjc74eHqpFwNnW5gpGYDpd4LXED%2BFrZnkW14e2H6I2zoiTqJgrbvZC%2F2MBFMzLieyUqPMf%2BrX2PrXm9F3kM9VUsVOiTKIG3QiagjAzhtvXpahgonShVIr3puAiylsEPwpFcJtziYj%2F0eh3wxOK7DF1r4G9wUPG2UjJBp%2FO5Rxrmnb28Ll7K6FZzlsMHRfjZwdfDLWbrEekkrrqkzn4x%2FgyhAPFLgEQvrpAUEP%2F%2BZBa1Ck1lms%2Fpguf2iWH7Wc3st3%2F0PZQhvvVaK%2BvrNLGb8ONbbxtSi7Z2di6aexU7xah%2F61i0nQCJmI5z0XCumXZ3DlzvXUnDCL9trEBjqkARlTrRMPC5z%2B6kqd9lX4o1PPcbXGjiKAuvkL5padCumxfUl%2BgbSJDKrgQD%2BBVobyp1RTKyDmCpDEkBMWCAp6GLtW%2FlAoOsCevAU%2FjM9Ru5wjrs11T5CJQiPML%2FP%2BuATbslDm%2BrwQigHF%2FC6j62xffrxk2EWwBHTBtvH4OjvZilraTKq4%2BLJJ6HbW9UpQDevjnpDwCzMKJuyhh4s9zdKoo0U6lWp0&X-Amz-Signature=09d9c4c3e3a8dd8691e63b18db2245531d879d164df093a54423a4fdec4460d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXD4DGYV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDqDORalYfsiSJkDvIfR%2BvXt2Gb9bK%2BbK4FBiE7WoM1wAIhANVZs3XLrjzDZlft%2BVwVtNgDhKHPDfBePjdcdccWLW1ZKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjIOV9UzXQUmPPm1wq3ANRjS6QcoNxIQ%2F5M4O%2FjPPRUXgjSABprYsX82bBs0ahiMcJMia9TmDvGLsZj%2BqvtcCU4HXQL5%2BOOYNfG5Adt98US%2Bf7McTRibnhvCQZaErziWwS4JhM5VH4oNU8iRVu1E5SG3B%2Fnkg5DCCz%2FiwWSMG1AC15bgIzUNLEcfi7aHSNVaRWhTRE778plcH5EQtmgMGEQQ20nipTzzruf9aSyuyj8nwhEtauVSYnyptB%2Fryj8IWVuXk2lRZ6B99g8%2F1ackXS%2BKUAFV5dsk5KaFlg6y3ap2jWYEK6TIRNN4EF%2BiAn8V%2FZWbEsbEBDjc74eHqpFwNnW5gpGYDpd4LXED%2BFrZnkW14e2H6I2zoiTqJgrbvZC%2F2MBFMzLieyUqPMf%2BrX2PrXm9F3kM9VUsVOiTKIG3QiagjAzhtvXpahgonShVIr3puAiylsEPwpFcJtziYj%2F0eh3wxOK7DF1r4G9wUPG2UjJBp%2FO5Rxrmnb28Ll7K6FZzlsMHRfjZwdfDLWbrEekkrrqkzn4x%2FgyhAPFLgEQvrpAUEP%2F%2BZBa1Ck1lms%2Fpguf2iWH7Wc3st3%2F0PZQhvvVaK%2BvrNLGb8ONbbxtSi7Z2di6aexU7xah%2F61i0nQCJmI5z0XCumXZ3DlzvXUnDCL9trEBjqkARlTrRMPC5z%2B6kqd9lX4o1PPcbXGjiKAuvkL5padCumxfUl%2BgbSJDKrgQD%2BBVobyp1RTKyDmCpDEkBMWCAp6GLtW%2FlAoOsCevAU%2FjM9Ru5wjrs11T5CJQiPML%2FP%2BuATbslDm%2BrwQigHF%2FC6j62xffrxk2EWwBHTBtvH4OjvZilraTKq4%2BLJJ6HbW9UpQDevjnpDwCzMKJuyhh4s9zdKoo0U6lWp0&X-Amz-Signature=e35993e6e111ec21fc68b30d1bf741ccd81a2c1df7204910142f44ec845366c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXD4DGYV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDqDORalYfsiSJkDvIfR%2BvXt2Gb9bK%2BbK4FBiE7WoM1wAIhANVZs3XLrjzDZlft%2BVwVtNgDhKHPDfBePjdcdccWLW1ZKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjIOV9UzXQUmPPm1wq3ANRjS6QcoNxIQ%2F5M4O%2FjPPRUXgjSABprYsX82bBs0ahiMcJMia9TmDvGLsZj%2BqvtcCU4HXQL5%2BOOYNfG5Adt98US%2Bf7McTRibnhvCQZaErziWwS4JhM5VH4oNU8iRVu1E5SG3B%2Fnkg5DCCz%2FiwWSMG1AC15bgIzUNLEcfi7aHSNVaRWhTRE778plcH5EQtmgMGEQQ20nipTzzruf9aSyuyj8nwhEtauVSYnyptB%2Fryj8IWVuXk2lRZ6B99g8%2F1ackXS%2BKUAFV5dsk5KaFlg6y3ap2jWYEK6TIRNN4EF%2BiAn8V%2FZWbEsbEBDjc74eHqpFwNnW5gpGYDpd4LXED%2BFrZnkW14e2H6I2zoiTqJgrbvZC%2F2MBFMzLieyUqPMf%2BrX2PrXm9F3kM9VUsVOiTKIG3QiagjAzhtvXpahgonShVIr3puAiylsEPwpFcJtziYj%2F0eh3wxOK7DF1r4G9wUPG2UjJBp%2FO5Rxrmnb28Ll7K6FZzlsMHRfjZwdfDLWbrEekkrrqkzn4x%2FgyhAPFLgEQvrpAUEP%2F%2BZBa1Ck1lms%2Fpguf2iWH7Wc3st3%2F0PZQhvvVaK%2BvrNLGb8ONbbxtSi7Z2di6aexU7xah%2F61i0nQCJmI5z0XCumXZ3DlzvXUnDCL9trEBjqkARlTrRMPC5z%2B6kqd9lX4o1PPcbXGjiKAuvkL5padCumxfUl%2BgbSJDKrgQD%2BBVobyp1RTKyDmCpDEkBMWCAp6GLtW%2FlAoOsCevAU%2FjM9Ru5wjrs11T5CJQiPML%2FP%2BuATbslDm%2BrwQigHF%2FC6j62xffrxk2EWwBHTBtvH4OjvZilraTKq4%2BLJJ6HbW9UpQDevjnpDwCzMKJuyhh4s9zdKoo0U6lWp0&X-Amz-Signature=063b09907ba52861adda7675fd098ef6605eb36c625e9336ebb0acfa537ad4ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXD4DGYV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDqDORalYfsiSJkDvIfR%2BvXt2Gb9bK%2BbK4FBiE7WoM1wAIhANVZs3XLrjzDZlft%2BVwVtNgDhKHPDfBePjdcdccWLW1ZKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjIOV9UzXQUmPPm1wq3ANRjS6QcoNxIQ%2F5M4O%2FjPPRUXgjSABprYsX82bBs0ahiMcJMia9TmDvGLsZj%2BqvtcCU4HXQL5%2BOOYNfG5Adt98US%2Bf7McTRibnhvCQZaErziWwS4JhM5VH4oNU8iRVu1E5SG3B%2Fnkg5DCCz%2FiwWSMG1AC15bgIzUNLEcfi7aHSNVaRWhTRE778plcH5EQtmgMGEQQ20nipTzzruf9aSyuyj8nwhEtauVSYnyptB%2Fryj8IWVuXk2lRZ6B99g8%2F1ackXS%2BKUAFV5dsk5KaFlg6y3ap2jWYEK6TIRNN4EF%2BiAn8V%2FZWbEsbEBDjc74eHqpFwNnW5gpGYDpd4LXED%2BFrZnkW14e2H6I2zoiTqJgrbvZC%2F2MBFMzLieyUqPMf%2BrX2PrXm9F3kM9VUsVOiTKIG3QiagjAzhtvXpahgonShVIr3puAiylsEPwpFcJtziYj%2F0eh3wxOK7DF1r4G9wUPG2UjJBp%2FO5Rxrmnb28Ll7K6FZzlsMHRfjZwdfDLWbrEekkrrqkzn4x%2FgyhAPFLgEQvrpAUEP%2F%2BZBa1Ck1lms%2Fpguf2iWH7Wc3st3%2F0PZQhvvVaK%2BvrNLGb8ONbbxtSi7Z2di6aexU7xah%2F61i0nQCJmI5z0XCumXZ3DlzvXUnDCL9trEBjqkARlTrRMPC5z%2B6kqd9lX4o1PPcbXGjiKAuvkL5padCumxfUl%2BgbSJDKrgQD%2BBVobyp1RTKyDmCpDEkBMWCAp6GLtW%2FlAoOsCevAU%2FjM9Ru5wjrs11T5CJQiPML%2FP%2BuATbslDm%2BrwQigHF%2FC6j62xffrxk2EWwBHTBtvH4OjvZilraTKq4%2BLJJ6HbW9UpQDevjnpDwCzMKJuyhh4s9zdKoo0U6lWp0&X-Amz-Signature=aa69d3284fa3a031f7397a3577135f1b63e98b66e54830da7ca3c7f80cf9673f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXD4DGYV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDqDORalYfsiSJkDvIfR%2BvXt2Gb9bK%2BbK4FBiE7WoM1wAIhANVZs3XLrjzDZlft%2BVwVtNgDhKHPDfBePjdcdccWLW1ZKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjIOV9UzXQUmPPm1wq3ANRjS6QcoNxIQ%2F5M4O%2FjPPRUXgjSABprYsX82bBs0ahiMcJMia9TmDvGLsZj%2BqvtcCU4HXQL5%2BOOYNfG5Adt98US%2Bf7McTRibnhvCQZaErziWwS4JhM5VH4oNU8iRVu1E5SG3B%2Fnkg5DCCz%2FiwWSMG1AC15bgIzUNLEcfi7aHSNVaRWhTRE778plcH5EQtmgMGEQQ20nipTzzruf9aSyuyj8nwhEtauVSYnyptB%2Fryj8IWVuXk2lRZ6B99g8%2F1ackXS%2BKUAFV5dsk5KaFlg6y3ap2jWYEK6TIRNN4EF%2BiAn8V%2FZWbEsbEBDjc74eHqpFwNnW5gpGYDpd4LXED%2BFrZnkW14e2H6I2zoiTqJgrbvZC%2F2MBFMzLieyUqPMf%2BrX2PrXm9F3kM9VUsVOiTKIG3QiagjAzhtvXpahgonShVIr3puAiylsEPwpFcJtziYj%2F0eh3wxOK7DF1r4G9wUPG2UjJBp%2FO5Rxrmnb28Ll7K6FZzlsMHRfjZwdfDLWbrEekkrrqkzn4x%2FgyhAPFLgEQvrpAUEP%2F%2BZBa1Ck1lms%2Fpguf2iWH7Wc3st3%2F0PZQhvvVaK%2BvrNLGb8ONbbxtSi7Z2di6aexU7xah%2F61i0nQCJmI5z0XCumXZ3DlzvXUnDCL9trEBjqkARlTrRMPC5z%2B6kqd9lX4o1PPcbXGjiKAuvkL5padCumxfUl%2BgbSJDKrgQD%2BBVobyp1RTKyDmCpDEkBMWCAp6GLtW%2FlAoOsCevAU%2FjM9Ru5wjrs11T5CJQiPML%2FP%2BuATbslDm%2BrwQigHF%2FC6j62xffrxk2EWwBHTBtvH4OjvZilraTKq4%2BLJJ6HbW9UpQDevjnpDwCzMKJuyhh4s9zdKoo0U6lWp0&X-Amz-Signature=60eb54055be08d268f6862fe127cf3b06949d4ad877647b1fd04fc27fa2a0624&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXD4DGYV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDqDORalYfsiSJkDvIfR%2BvXt2Gb9bK%2BbK4FBiE7WoM1wAIhANVZs3XLrjzDZlft%2BVwVtNgDhKHPDfBePjdcdccWLW1ZKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjIOV9UzXQUmPPm1wq3ANRjS6QcoNxIQ%2F5M4O%2FjPPRUXgjSABprYsX82bBs0ahiMcJMia9TmDvGLsZj%2BqvtcCU4HXQL5%2BOOYNfG5Adt98US%2Bf7McTRibnhvCQZaErziWwS4JhM5VH4oNU8iRVu1E5SG3B%2Fnkg5DCCz%2FiwWSMG1AC15bgIzUNLEcfi7aHSNVaRWhTRE778plcH5EQtmgMGEQQ20nipTzzruf9aSyuyj8nwhEtauVSYnyptB%2Fryj8IWVuXk2lRZ6B99g8%2F1ackXS%2BKUAFV5dsk5KaFlg6y3ap2jWYEK6TIRNN4EF%2BiAn8V%2FZWbEsbEBDjc74eHqpFwNnW5gpGYDpd4LXED%2BFrZnkW14e2H6I2zoiTqJgrbvZC%2F2MBFMzLieyUqPMf%2BrX2PrXm9F3kM9VUsVOiTKIG3QiagjAzhtvXpahgonShVIr3puAiylsEPwpFcJtziYj%2F0eh3wxOK7DF1r4G9wUPG2UjJBp%2FO5Rxrmnb28Ll7K6FZzlsMHRfjZwdfDLWbrEekkrrqkzn4x%2FgyhAPFLgEQvrpAUEP%2F%2BZBa1Ck1lms%2Fpguf2iWH7Wc3st3%2F0PZQhvvVaK%2BvrNLGb8ONbbxtSi7Z2di6aexU7xah%2F61i0nQCJmI5z0XCumXZ3DlzvXUnDCL9trEBjqkARlTrRMPC5z%2B6kqd9lX4o1PPcbXGjiKAuvkL5padCumxfUl%2BgbSJDKrgQD%2BBVobyp1RTKyDmCpDEkBMWCAp6GLtW%2FlAoOsCevAU%2FjM9Ru5wjrs11T5CJQiPML%2FP%2BuATbslDm%2BrwQigHF%2FC6j62xffrxk2EWwBHTBtvH4OjvZilraTKq4%2BLJJ6HbW9UpQDevjnpDwCzMKJuyhh4s9zdKoo0U6lWp0&X-Amz-Signature=b1b2e142e51d84d29811e909caef1ffb1d4f9c2eceb88ac818a65fb478993a80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXD4DGYV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDqDORalYfsiSJkDvIfR%2BvXt2Gb9bK%2BbK4FBiE7WoM1wAIhANVZs3XLrjzDZlft%2BVwVtNgDhKHPDfBePjdcdccWLW1ZKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjIOV9UzXQUmPPm1wq3ANRjS6QcoNxIQ%2F5M4O%2FjPPRUXgjSABprYsX82bBs0ahiMcJMia9TmDvGLsZj%2BqvtcCU4HXQL5%2BOOYNfG5Adt98US%2Bf7McTRibnhvCQZaErziWwS4JhM5VH4oNU8iRVu1E5SG3B%2Fnkg5DCCz%2FiwWSMG1AC15bgIzUNLEcfi7aHSNVaRWhTRE778plcH5EQtmgMGEQQ20nipTzzruf9aSyuyj8nwhEtauVSYnyptB%2Fryj8IWVuXk2lRZ6B99g8%2F1ackXS%2BKUAFV5dsk5KaFlg6y3ap2jWYEK6TIRNN4EF%2BiAn8V%2FZWbEsbEBDjc74eHqpFwNnW5gpGYDpd4LXED%2BFrZnkW14e2H6I2zoiTqJgrbvZC%2F2MBFMzLieyUqPMf%2BrX2PrXm9F3kM9VUsVOiTKIG3QiagjAzhtvXpahgonShVIr3puAiylsEPwpFcJtziYj%2F0eh3wxOK7DF1r4G9wUPG2UjJBp%2FO5Rxrmnb28Ll7K6FZzlsMHRfjZwdfDLWbrEekkrrqkzn4x%2FgyhAPFLgEQvrpAUEP%2F%2BZBa1Ck1lms%2Fpguf2iWH7Wc3st3%2F0PZQhvvVaK%2BvrNLGb8ONbbxtSi7Z2di6aexU7xah%2F61i0nQCJmI5z0XCumXZ3DlzvXUnDCL9trEBjqkARlTrRMPC5z%2B6kqd9lX4o1PPcbXGjiKAuvkL5padCumxfUl%2BgbSJDKrgQD%2BBVobyp1RTKyDmCpDEkBMWCAp6GLtW%2FlAoOsCevAU%2FjM9Ru5wjrs11T5CJQiPML%2FP%2BuATbslDm%2BrwQigHF%2FC6j62xffrxk2EWwBHTBtvH4OjvZilraTKq4%2BLJJ6HbW9UpQDevjnpDwCzMKJuyhh4s9zdKoo0U6lWp0&X-Amz-Signature=9ee2a5de20c438cc5f48cf11fd5b1a60c4e554736f815c37792f07f1cb01c178&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXD4DGYV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDqDORalYfsiSJkDvIfR%2BvXt2Gb9bK%2BbK4FBiE7WoM1wAIhANVZs3XLrjzDZlft%2BVwVtNgDhKHPDfBePjdcdccWLW1ZKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjIOV9UzXQUmPPm1wq3ANRjS6QcoNxIQ%2F5M4O%2FjPPRUXgjSABprYsX82bBs0ahiMcJMia9TmDvGLsZj%2BqvtcCU4HXQL5%2BOOYNfG5Adt98US%2Bf7McTRibnhvCQZaErziWwS4JhM5VH4oNU8iRVu1E5SG3B%2Fnkg5DCCz%2FiwWSMG1AC15bgIzUNLEcfi7aHSNVaRWhTRE778plcH5EQtmgMGEQQ20nipTzzruf9aSyuyj8nwhEtauVSYnyptB%2Fryj8IWVuXk2lRZ6B99g8%2F1ackXS%2BKUAFV5dsk5KaFlg6y3ap2jWYEK6TIRNN4EF%2BiAn8V%2FZWbEsbEBDjc74eHqpFwNnW5gpGYDpd4LXED%2BFrZnkW14e2H6I2zoiTqJgrbvZC%2F2MBFMzLieyUqPMf%2BrX2PrXm9F3kM9VUsVOiTKIG3QiagjAzhtvXpahgonShVIr3puAiylsEPwpFcJtziYj%2F0eh3wxOK7DF1r4G9wUPG2UjJBp%2FO5Rxrmnb28Ll7K6FZzlsMHRfjZwdfDLWbrEekkrrqkzn4x%2FgyhAPFLgEQvrpAUEP%2F%2BZBa1Ck1lms%2Fpguf2iWH7Wc3st3%2F0PZQhvvVaK%2BvrNLGb8ONbbxtSi7Z2di6aexU7xah%2F61i0nQCJmI5z0XCumXZ3DlzvXUnDCL9trEBjqkARlTrRMPC5z%2B6kqd9lX4o1PPcbXGjiKAuvkL5padCumxfUl%2BgbSJDKrgQD%2BBVobyp1RTKyDmCpDEkBMWCAp6GLtW%2FlAoOsCevAU%2FjM9Ru5wjrs11T5CJQiPML%2FP%2BuATbslDm%2BrwQigHF%2FC6j62xffrxk2EWwBHTBtvH4OjvZilraTKq4%2BLJJ6HbW9UpQDevjnpDwCzMKJuyhh4s9zdKoo0U6lWp0&X-Amz-Signature=efa31c091a2bf00c15d2b3799fd65b84f4284711118da77bb690b80028c35168&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXD4DGYV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDqDORalYfsiSJkDvIfR%2BvXt2Gb9bK%2BbK4FBiE7WoM1wAIhANVZs3XLrjzDZlft%2BVwVtNgDhKHPDfBePjdcdccWLW1ZKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjIOV9UzXQUmPPm1wq3ANRjS6QcoNxIQ%2F5M4O%2FjPPRUXgjSABprYsX82bBs0ahiMcJMia9TmDvGLsZj%2BqvtcCU4HXQL5%2BOOYNfG5Adt98US%2Bf7McTRibnhvCQZaErziWwS4JhM5VH4oNU8iRVu1E5SG3B%2Fnkg5DCCz%2FiwWSMG1AC15bgIzUNLEcfi7aHSNVaRWhTRE778plcH5EQtmgMGEQQ20nipTzzruf9aSyuyj8nwhEtauVSYnyptB%2Fryj8IWVuXk2lRZ6B99g8%2F1ackXS%2BKUAFV5dsk5KaFlg6y3ap2jWYEK6TIRNN4EF%2BiAn8V%2FZWbEsbEBDjc74eHqpFwNnW5gpGYDpd4LXED%2BFrZnkW14e2H6I2zoiTqJgrbvZC%2F2MBFMzLieyUqPMf%2BrX2PrXm9F3kM9VUsVOiTKIG3QiagjAzhtvXpahgonShVIr3puAiylsEPwpFcJtziYj%2F0eh3wxOK7DF1r4G9wUPG2UjJBp%2FO5Rxrmnb28Ll7K6FZzlsMHRfjZwdfDLWbrEekkrrqkzn4x%2FgyhAPFLgEQvrpAUEP%2F%2BZBa1Ck1lms%2Fpguf2iWH7Wc3st3%2F0PZQhvvVaK%2BvrNLGb8ONbbxtSi7Z2di6aexU7xah%2F61i0nQCJmI5z0XCumXZ3DlzvXUnDCL9trEBjqkARlTrRMPC5z%2B6kqd9lX4o1PPcbXGjiKAuvkL5padCumxfUl%2BgbSJDKrgQD%2BBVobyp1RTKyDmCpDEkBMWCAp6GLtW%2FlAoOsCevAU%2FjM9Ru5wjrs11T5CJQiPML%2FP%2BuATbslDm%2BrwQigHF%2FC6j62xffrxk2EWwBHTBtvH4OjvZilraTKq4%2BLJJ6HbW9UpQDevjnpDwCzMKJuyhh4s9zdKoo0U6lWp0&X-Amz-Signature=063b09907ba52861adda7675fd098ef6605eb36c625e9336ebb0acfa537ad4ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
