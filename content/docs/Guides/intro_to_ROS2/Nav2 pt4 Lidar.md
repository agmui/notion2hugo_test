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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YSVNIL6%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIFd1epDvN5mPdbXfLnowepPJ8CR9yCn5iC6l6DkudMLmAiEAv5WpmcVcW4fUedGnlbt%2FbAZ4weemSZF8cPeZyLCpm9Qq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDDEC6aID8wFlz%2B6vbSrcA%2Fj0QVIWrKel1FzT%2F50WCdpn0wIa41Tcnmst5j7LTGrxzhDrVOPWxz2m%2BPcAhlwCWIjlNijJ4wRRqsIwsRZg4th1XjmaJUTdXFaK9ZgSvNPu%2BAan7uwVvG7pS3Ct%2F5hN669Gt%2BdH3kFQsVhQVqoxZBBTJHKHtmF0rUwqZv8DwFf%2FQY7kwjuQ2Q%2FSfcBLo68zDrFW7bMkv0NM7G2XKPCdJqjTnHWj4NOGc6%2Fmuf9x5Qw8xDQ73Bno4ThMPuAWqy4hzsORsTwM87dNlTKYiLm5%2FQ8UsGyLH03wDS5uOfUs6xuvB1zUpmWh6TTU9%2BFyaXkXN8BOXsgiacVGFSLo%2B3wvjIe1VvjyYNGhVO4LcCnfW4tF%2FTm2OqMg62%2FOMBlLBxsRMoxN4%2BXRA%2B%2FVjFwNA4M6JDS9tJmlNGcKhkvVERRdncdq4d9saHw4mz8udVY9ZHk5tzwvwdQ6LYl22Tto0cXRRRJXacAsPGoC22UzQ8G%2BmaRO8b9VVWRrJZfESLdVQ2gelDkds%2B6TvZtgR7K4P9D4A8l3w01rpWBVKUJrL7Bt6tka76YSHd6Zc10XoXlQEkdgp36Z%2B2bAaHH9%2FGAzdU3lwWjYbAQeqVqz4WhCJ1ZwUvech1FBw49rr5GtB0gzMO%2Bj%2BsQGOqUBovE%2FO8B8HOyHROxcDyTnWRjDD%2Bpqe9zp6zM2mDfsyt5RUwG2HeIJRmorMU3Z6C8QW45ESmBlXHPxByf1YDZ2tfd6ulnShoC7M7UR1JyimQOsgsEcYGgqQjSnjH5GcR2BZrBIvkFztjIk%2BfeITTd6XTdJeJbf6JZYKWXJi%2BOfcVnVfoMewQR%2FcTvUWlmHAC7HMbNPa78JbAUiRjQtF9KlV4gaHOh2&X-Amz-Signature=4450b407521326abb8fd918f098cffcc1cf391d8ee93057a9cefbb74ffc28490&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR7ZPJNX%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCfmg2V%2BNrp9Wlg8HjAo70%2BeF1z8LEgJFblgHfFaRHAyQIhAPr3rsG2Przq1SgCAIYoqlsYZtmtkv2Z%2F37wUg24BeAhKv8DCFMQABoMNjM3NDIzMTgzODA1IgxzxNWQcbJT27QVE4Mq3APHUB%2B6G4lfd%2FqQLwTbgpl3TPzUS7O%2BSiFvCPWNG%2FmF3I83O6CShbu8H6LD0uVz5bHpoykpBmIG%2FJRAgJMS5jsXwFXTfr5F1bUlEUXO%2BrIvOPYzIqDIm76MBeI8WHIUWOiWiKZLxQJuTUa2HtugMxreNYXWy1Oco%2FXmwkYVnFY0SW1mA2jwo6iYK2u91W4mhaHtiyXq%2BM232QLLt2rhRVjXSbF6g5OTUsTb%2B0xdb6sHG2a9b6o1tWI8o0pdF83fIr4FLRINteU6%2FKnYTWrknQdlzeWLuLHqVljNJNNKd%2F1Mf9OCFp51dTfF12P91uRg49Rz0uxMTFerucuozw9OT6O0dUFt6dRp9hz7CWoH9zCgcILCC82hkCPis2Oh3KnhtEAAKlCPg9KjnO8mjq1AtaqGskX8EZj%2Fgy28dS%2FZLXXI8kznf%2BvYBXHNkXu6A1BkRmjVg%2BB47SeREC5ARfQzuaYfpIKxNq5LBk54QOP%2BRKu668u9kznUwXW8I4wyfzxdadsUSM1bOz54iGITFIKLxEinM2OoYLFGJ0sIGVAnQsJqf2xJZJ%2BBTkDyMTO5RMoWo%2Frs6CMx9IzDRkx8h9QiZ1M7GetyNXg0slcH2ghS4yed9iI7HU5P0FnL%2B24QPjC5o%2FrEBjqkAapr7FQQkTkY0EP0XC48uDgsgKt%2BZp5VS8v%2BqO0qfkKSPpU76zaqCrUIy%2F0NpORTutfCWJIZM23lzEQ4qpps8i2z0%2FeA%2BvzDTbmHhov8P4z12Q0S72D%2BhsfuIfLt04%2B3GEu7g83kZZcgdkSUf1I5oHryTMm4wslUymPJzpaamBb2w0cBicF4WI09BjndFBKujd8ppvHNOaloZdJhV2V9u5DqA0XM&X-Amz-Signature=12f0e774496d1c858fafaa027c7e659c5ba9064a918a39be0c135a2707dae5f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR7ZPJNX%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCfmg2V%2BNrp9Wlg8HjAo70%2BeF1z8LEgJFblgHfFaRHAyQIhAPr3rsG2Przq1SgCAIYoqlsYZtmtkv2Z%2F37wUg24BeAhKv8DCFMQABoMNjM3NDIzMTgzODA1IgxzxNWQcbJT27QVE4Mq3APHUB%2B6G4lfd%2FqQLwTbgpl3TPzUS7O%2BSiFvCPWNG%2FmF3I83O6CShbu8H6LD0uVz5bHpoykpBmIG%2FJRAgJMS5jsXwFXTfr5F1bUlEUXO%2BrIvOPYzIqDIm76MBeI8WHIUWOiWiKZLxQJuTUa2HtugMxreNYXWy1Oco%2FXmwkYVnFY0SW1mA2jwo6iYK2u91W4mhaHtiyXq%2BM232QLLt2rhRVjXSbF6g5OTUsTb%2B0xdb6sHG2a9b6o1tWI8o0pdF83fIr4FLRINteU6%2FKnYTWrknQdlzeWLuLHqVljNJNNKd%2F1Mf9OCFp51dTfF12P91uRg49Rz0uxMTFerucuozw9OT6O0dUFt6dRp9hz7CWoH9zCgcILCC82hkCPis2Oh3KnhtEAAKlCPg9KjnO8mjq1AtaqGskX8EZj%2Fgy28dS%2FZLXXI8kznf%2BvYBXHNkXu6A1BkRmjVg%2BB47SeREC5ARfQzuaYfpIKxNq5LBk54QOP%2BRKu668u9kznUwXW8I4wyfzxdadsUSM1bOz54iGITFIKLxEinM2OoYLFGJ0sIGVAnQsJqf2xJZJ%2BBTkDyMTO5RMoWo%2Frs6CMx9IzDRkx8h9QiZ1M7GetyNXg0slcH2ghS4yed9iI7HU5P0FnL%2B24QPjC5o%2FrEBjqkAapr7FQQkTkY0EP0XC48uDgsgKt%2BZp5VS8v%2BqO0qfkKSPpU76zaqCrUIy%2F0NpORTutfCWJIZM23lzEQ4qpps8i2z0%2FeA%2BvzDTbmHhov8P4z12Q0S72D%2BhsfuIfLt04%2B3GEu7g83kZZcgdkSUf1I5oHryTMm4wslUymPJzpaamBb2w0cBicF4WI09BjndFBKujd8ppvHNOaloZdJhV2V9u5DqA0XM&X-Amz-Signature=3b6eff27f2fb3ddab8a7bd7aae4158ddbb3bed8eb8b378f8cf418255626edd5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR7ZPJNX%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCfmg2V%2BNrp9Wlg8HjAo70%2BeF1z8LEgJFblgHfFaRHAyQIhAPr3rsG2Przq1SgCAIYoqlsYZtmtkv2Z%2F37wUg24BeAhKv8DCFMQABoMNjM3NDIzMTgzODA1IgxzxNWQcbJT27QVE4Mq3APHUB%2B6G4lfd%2FqQLwTbgpl3TPzUS7O%2BSiFvCPWNG%2FmF3I83O6CShbu8H6LD0uVz5bHpoykpBmIG%2FJRAgJMS5jsXwFXTfr5F1bUlEUXO%2BrIvOPYzIqDIm76MBeI8WHIUWOiWiKZLxQJuTUa2HtugMxreNYXWy1Oco%2FXmwkYVnFY0SW1mA2jwo6iYK2u91W4mhaHtiyXq%2BM232QLLt2rhRVjXSbF6g5OTUsTb%2B0xdb6sHG2a9b6o1tWI8o0pdF83fIr4FLRINteU6%2FKnYTWrknQdlzeWLuLHqVljNJNNKd%2F1Mf9OCFp51dTfF12P91uRg49Rz0uxMTFerucuozw9OT6O0dUFt6dRp9hz7CWoH9zCgcILCC82hkCPis2Oh3KnhtEAAKlCPg9KjnO8mjq1AtaqGskX8EZj%2Fgy28dS%2FZLXXI8kznf%2BvYBXHNkXu6A1BkRmjVg%2BB47SeREC5ARfQzuaYfpIKxNq5LBk54QOP%2BRKu668u9kznUwXW8I4wyfzxdadsUSM1bOz54iGITFIKLxEinM2OoYLFGJ0sIGVAnQsJqf2xJZJ%2BBTkDyMTO5RMoWo%2Frs6CMx9IzDRkx8h9QiZ1M7GetyNXg0slcH2ghS4yed9iI7HU5P0FnL%2B24QPjC5o%2FrEBjqkAapr7FQQkTkY0EP0XC48uDgsgKt%2BZp5VS8v%2BqO0qfkKSPpU76zaqCrUIy%2F0NpORTutfCWJIZM23lzEQ4qpps8i2z0%2FeA%2BvzDTbmHhov8P4z12Q0S72D%2BhsfuIfLt04%2B3GEu7g83kZZcgdkSUf1I5oHryTMm4wslUymPJzpaamBb2w0cBicF4WI09BjndFBKujd8ppvHNOaloZdJhV2V9u5DqA0XM&X-Amz-Signature=22a877fe9248b8e9ef56305c232cbff71090f0e88e42a54894cf8a41bc56e145&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR7ZPJNX%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCfmg2V%2BNrp9Wlg8HjAo70%2BeF1z8LEgJFblgHfFaRHAyQIhAPr3rsG2Przq1SgCAIYoqlsYZtmtkv2Z%2F37wUg24BeAhKv8DCFMQABoMNjM3NDIzMTgzODA1IgxzxNWQcbJT27QVE4Mq3APHUB%2B6G4lfd%2FqQLwTbgpl3TPzUS7O%2BSiFvCPWNG%2FmF3I83O6CShbu8H6LD0uVz5bHpoykpBmIG%2FJRAgJMS5jsXwFXTfr5F1bUlEUXO%2BrIvOPYzIqDIm76MBeI8WHIUWOiWiKZLxQJuTUa2HtugMxreNYXWy1Oco%2FXmwkYVnFY0SW1mA2jwo6iYK2u91W4mhaHtiyXq%2BM232QLLt2rhRVjXSbF6g5OTUsTb%2B0xdb6sHG2a9b6o1tWI8o0pdF83fIr4FLRINteU6%2FKnYTWrknQdlzeWLuLHqVljNJNNKd%2F1Mf9OCFp51dTfF12P91uRg49Rz0uxMTFerucuozw9OT6O0dUFt6dRp9hz7CWoH9zCgcILCC82hkCPis2Oh3KnhtEAAKlCPg9KjnO8mjq1AtaqGskX8EZj%2Fgy28dS%2FZLXXI8kznf%2BvYBXHNkXu6A1BkRmjVg%2BB47SeREC5ARfQzuaYfpIKxNq5LBk54QOP%2BRKu668u9kznUwXW8I4wyfzxdadsUSM1bOz54iGITFIKLxEinM2OoYLFGJ0sIGVAnQsJqf2xJZJ%2BBTkDyMTO5RMoWo%2Frs6CMx9IzDRkx8h9QiZ1M7GetyNXg0slcH2ghS4yed9iI7HU5P0FnL%2B24QPjC5o%2FrEBjqkAapr7FQQkTkY0EP0XC48uDgsgKt%2BZp5VS8v%2BqO0qfkKSPpU76zaqCrUIy%2F0NpORTutfCWJIZM23lzEQ4qpps8i2z0%2FeA%2BvzDTbmHhov8P4z12Q0S72D%2BhsfuIfLt04%2B3GEu7g83kZZcgdkSUf1I5oHryTMm4wslUymPJzpaamBb2w0cBicF4WI09BjndFBKujd8ppvHNOaloZdJhV2V9u5DqA0XM&X-Amz-Signature=e992370107ce637c704e5eaebf89ee68f7671927ac2e18bc0febf2e43bf68446&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR7ZPJNX%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCfmg2V%2BNrp9Wlg8HjAo70%2BeF1z8LEgJFblgHfFaRHAyQIhAPr3rsG2Przq1SgCAIYoqlsYZtmtkv2Z%2F37wUg24BeAhKv8DCFMQABoMNjM3NDIzMTgzODA1IgxzxNWQcbJT27QVE4Mq3APHUB%2B6G4lfd%2FqQLwTbgpl3TPzUS7O%2BSiFvCPWNG%2FmF3I83O6CShbu8H6LD0uVz5bHpoykpBmIG%2FJRAgJMS5jsXwFXTfr5F1bUlEUXO%2BrIvOPYzIqDIm76MBeI8WHIUWOiWiKZLxQJuTUa2HtugMxreNYXWy1Oco%2FXmwkYVnFY0SW1mA2jwo6iYK2u91W4mhaHtiyXq%2BM232QLLt2rhRVjXSbF6g5OTUsTb%2B0xdb6sHG2a9b6o1tWI8o0pdF83fIr4FLRINteU6%2FKnYTWrknQdlzeWLuLHqVljNJNNKd%2F1Mf9OCFp51dTfF12P91uRg49Rz0uxMTFerucuozw9OT6O0dUFt6dRp9hz7CWoH9zCgcILCC82hkCPis2Oh3KnhtEAAKlCPg9KjnO8mjq1AtaqGskX8EZj%2Fgy28dS%2FZLXXI8kznf%2BvYBXHNkXu6A1BkRmjVg%2BB47SeREC5ARfQzuaYfpIKxNq5LBk54QOP%2BRKu668u9kznUwXW8I4wyfzxdadsUSM1bOz54iGITFIKLxEinM2OoYLFGJ0sIGVAnQsJqf2xJZJ%2BBTkDyMTO5RMoWo%2Frs6CMx9IzDRkx8h9QiZ1M7GetyNXg0slcH2ghS4yed9iI7HU5P0FnL%2B24QPjC5o%2FrEBjqkAapr7FQQkTkY0EP0XC48uDgsgKt%2BZp5VS8v%2BqO0qfkKSPpU76zaqCrUIy%2F0NpORTutfCWJIZM23lzEQ4qpps8i2z0%2FeA%2BvzDTbmHhov8P4z12Q0S72D%2BhsfuIfLt04%2B3GEu7g83kZZcgdkSUf1I5oHryTMm4wslUymPJzpaamBb2w0cBicF4WI09BjndFBKujd8ppvHNOaloZdJhV2V9u5DqA0XM&X-Amz-Signature=07d48fba502fec57a654e232575ac614bf74a406ec09fbddfebbadaafe26065e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR7ZPJNX%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCfmg2V%2BNrp9Wlg8HjAo70%2BeF1z8LEgJFblgHfFaRHAyQIhAPr3rsG2Przq1SgCAIYoqlsYZtmtkv2Z%2F37wUg24BeAhKv8DCFMQABoMNjM3NDIzMTgzODA1IgxzxNWQcbJT27QVE4Mq3APHUB%2B6G4lfd%2FqQLwTbgpl3TPzUS7O%2BSiFvCPWNG%2FmF3I83O6CShbu8H6LD0uVz5bHpoykpBmIG%2FJRAgJMS5jsXwFXTfr5F1bUlEUXO%2BrIvOPYzIqDIm76MBeI8WHIUWOiWiKZLxQJuTUa2HtugMxreNYXWy1Oco%2FXmwkYVnFY0SW1mA2jwo6iYK2u91W4mhaHtiyXq%2BM232QLLt2rhRVjXSbF6g5OTUsTb%2B0xdb6sHG2a9b6o1tWI8o0pdF83fIr4FLRINteU6%2FKnYTWrknQdlzeWLuLHqVljNJNNKd%2F1Mf9OCFp51dTfF12P91uRg49Rz0uxMTFerucuozw9OT6O0dUFt6dRp9hz7CWoH9zCgcILCC82hkCPis2Oh3KnhtEAAKlCPg9KjnO8mjq1AtaqGskX8EZj%2Fgy28dS%2FZLXXI8kznf%2BvYBXHNkXu6A1BkRmjVg%2BB47SeREC5ARfQzuaYfpIKxNq5LBk54QOP%2BRKu668u9kznUwXW8I4wyfzxdadsUSM1bOz54iGITFIKLxEinM2OoYLFGJ0sIGVAnQsJqf2xJZJ%2BBTkDyMTO5RMoWo%2Frs6CMx9IzDRkx8h9QiZ1M7GetyNXg0slcH2ghS4yed9iI7HU5P0FnL%2B24QPjC5o%2FrEBjqkAapr7FQQkTkY0EP0XC48uDgsgKt%2BZp5VS8v%2BqO0qfkKSPpU76zaqCrUIy%2F0NpORTutfCWJIZM23lzEQ4qpps8i2z0%2FeA%2BvzDTbmHhov8P4z12Q0S72D%2BhsfuIfLt04%2B3GEu7g83kZZcgdkSUf1I5oHryTMm4wslUymPJzpaamBb2w0cBicF4WI09BjndFBKujd8ppvHNOaloZdJhV2V9u5DqA0XM&X-Amz-Signature=be04e9924499a3160ed3bb3361d84190b08835ece89dc0f59701ce0784ad3d07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR7ZPJNX%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCfmg2V%2BNrp9Wlg8HjAo70%2BeF1z8LEgJFblgHfFaRHAyQIhAPr3rsG2Przq1SgCAIYoqlsYZtmtkv2Z%2F37wUg24BeAhKv8DCFMQABoMNjM3NDIzMTgzODA1IgxzxNWQcbJT27QVE4Mq3APHUB%2B6G4lfd%2FqQLwTbgpl3TPzUS7O%2BSiFvCPWNG%2FmF3I83O6CShbu8H6LD0uVz5bHpoykpBmIG%2FJRAgJMS5jsXwFXTfr5F1bUlEUXO%2BrIvOPYzIqDIm76MBeI8WHIUWOiWiKZLxQJuTUa2HtugMxreNYXWy1Oco%2FXmwkYVnFY0SW1mA2jwo6iYK2u91W4mhaHtiyXq%2BM232QLLt2rhRVjXSbF6g5OTUsTb%2B0xdb6sHG2a9b6o1tWI8o0pdF83fIr4FLRINteU6%2FKnYTWrknQdlzeWLuLHqVljNJNNKd%2F1Mf9OCFp51dTfF12P91uRg49Rz0uxMTFerucuozw9OT6O0dUFt6dRp9hz7CWoH9zCgcILCC82hkCPis2Oh3KnhtEAAKlCPg9KjnO8mjq1AtaqGskX8EZj%2Fgy28dS%2FZLXXI8kznf%2BvYBXHNkXu6A1BkRmjVg%2BB47SeREC5ARfQzuaYfpIKxNq5LBk54QOP%2BRKu668u9kznUwXW8I4wyfzxdadsUSM1bOz54iGITFIKLxEinM2OoYLFGJ0sIGVAnQsJqf2xJZJ%2BBTkDyMTO5RMoWo%2Frs6CMx9IzDRkx8h9QiZ1M7GetyNXg0slcH2ghS4yed9iI7HU5P0FnL%2B24QPjC5o%2FrEBjqkAapr7FQQkTkY0EP0XC48uDgsgKt%2BZp5VS8v%2BqO0qfkKSPpU76zaqCrUIy%2F0NpORTutfCWJIZM23lzEQ4qpps8i2z0%2FeA%2BvzDTbmHhov8P4z12Q0S72D%2BhsfuIfLt04%2B3GEu7g83kZZcgdkSUf1I5oHryTMm4wslUymPJzpaamBb2w0cBicF4WI09BjndFBKujd8ppvHNOaloZdJhV2V9u5DqA0XM&X-Amz-Signature=7b0d3c2ea795a6abab4cd8bbd3af58b8b1db2ed720c83e9e93888c4b0a9f5c79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR7ZPJNX%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCfmg2V%2BNrp9Wlg8HjAo70%2BeF1z8LEgJFblgHfFaRHAyQIhAPr3rsG2Przq1SgCAIYoqlsYZtmtkv2Z%2F37wUg24BeAhKv8DCFMQABoMNjM3NDIzMTgzODA1IgxzxNWQcbJT27QVE4Mq3APHUB%2B6G4lfd%2FqQLwTbgpl3TPzUS7O%2BSiFvCPWNG%2FmF3I83O6CShbu8H6LD0uVz5bHpoykpBmIG%2FJRAgJMS5jsXwFXTfr5F1bUlEUXO%2BrIvOPYzIqDIm76MBeI8WHIUWOiWiKZLxQJuTUa2HtugMxreNYXWy1Oco%2FXmwkYVnFY0SW1mA2jwo6iYK2u91W4mhaHtiyXq%2BM232QLLt2rhRVjXSbF6g5OTUsTb%2B0xdb6sHG2a9b6o1tWI8o0pdF83fIr4FLRINteU6%2FKnYTWrknQdlzeWLuLHqVljNJNNKd%2F1Mf9OCFp51dTfF12P91uRg49Rz0uxMTFerucuozw9OT6O0dUFt6dRp9hz7CWoH9zCgcILCC82hkCPis2Oh3KnhtEAAKlCPg9KjnO8mjq1AtaqGskX8EZj%2Fgy28dS%2FZLXXI8kznf%2BvYBXHNkXu6A1BkRmjVg%2BB47SeREC5ARfQzuaYfpIKxNq5LBk54QOP%2BRKu668u9kznUwXW8I4wyfzxdadsUSM1bOz54iGITFIKLxEinM2OoYLFGJ0sIGVAnQsJqf2xJZJ%2BBTkDyMTO5RMoWo%2Frs6CMx9IzDRkx8h9QiZ1M7GetyNXg0slcH2ghS4yed9iI7HU5P0FnL%2B24QPjC5o%2FrEBjqkAapr7FQQkTkY0EP0XC48uDgsgKt%2BZp5VS8v%2BqO0qfkKSPpU76zaqCrUIy%2F0NpORTutfCWJIZM23lzEQ4qpps8i2z0%2FeA%2BvzDTbmHhov8P4z12Q0S72D%2BhsfuIfLt04%2B3GEu7g83kZZcgdkSUf1I5oHryTMm4wslUymPJzpaamBb2w0cBicF4WI09BjndFBKujd8ppvHNOaloZdJhV2V9u5DqA0XM&X-Amz-Signature=5bbddc7d5c1dbda0de0f077e94ebd2784b03a1fda8564e11a62d57dbadba24b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR7ZPJNX%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCfmg2V%2BNrp9Wlg8HjAo70%2BeF1z8LEgJFblgHfFaRHAyQIhAPr3rsG2Przq1SgCAIYoqlsYZtmtkv2Z%2F37wUg24BeAhKv8DCFMQABoMNjM3NDIzMTgzODA1IgxzxNWQcbJT27QVE4Mq3APHUB%2B6G4lfd%2FqQLwTbgpl3TPzUS7O%2BSiFvCPWNG%2FmF3I83O6CShbu8H6LD0uVz5bHpoykpBmIG%2FJRAgJMS5jsXwFXTfr5F1bUlEUXO%2BrIvOPYzIqDIm76MBeI8WHIUWOiWiKZLxQJuTUa2HtugMxreNYXWy1Oco%2FXmwkYVnFY0SW1mA2jwo6iYK2u91W4mhaHtiyXq%2BM232QLLt2rhRVjXSbF6g5OTUsTb%2B0xdb6sHG2a9b6o1tWI8o0pdF83fIr4FLRINteU6%2FKnYTWrknQdlzeWLuLHqVljNJNNKd%2F1Mf9OCFp51dTfF12P91uRg49Rz0uxMTFerucuozw9OT6O0dUFt6dRp9hz7CWoH9zCgcILCC82hkCPis2Oh3KnhtEAAKlCPg9KjnO8mjq1AtaqGskX8EZj%2Fgy28dS%2FZLXXI8kznf%2BvYBXHNkXu6A1BkRmjVg%2BB47SeREC5ARfQzuaYfpIKxNq5LBk54QOP%2BRKu668u9kznUwXW8I4wyfzxdadsUSM1bOz54iGITFIKLxEinM2OoYLFGJ0sIGVAnQsJqf2xJZJ%2BBTkDyMTO5RMoWo%2Frs6CMx9IzDRkx8h9QiZ1M7GetyNXg0slcH2ghS4yed9iI7HU5P0FnL%2B24QPjC5o%2FrEBjqkAapr7FQQkTkY0EP0XC48uDgsgKt%2BZp5VS8v%2BqO0qfkKSPpU76zaqCrUIy%2F0NpORTutfCWJIZM23lzEQ4qpps8i2z0%2FeA%2BvzDTbmHhov8P4z12Q0S72D%2BhsfuIfLt04%2B3GEu7g83kZZcgdkSUf1I5oHryTMm4wslUymPJzpaamBb2w0cBicF4WI09BjndFBKujd8ppvHNOaloZdJhV2V9u5DqA0XM&X-Amz-Signature=3a5e9809b84938a9286d821169c4d069ae781a5e7bf772ce176665e1a0fa4776&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR7ZPJNX%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCfmg2V%2BNrp9Wlg8HjAo70%2BeF1z8LEgJFblgHfFaRHAyQIhAPr3rsG2Przq1SgCAIYoqlsYZtmtkv2Z%2F37wUg24BeAhKv8DCFMQABoMNjM3NDIzMTgzODA1IgxzxNWQcbJT27QVE4Mq3APHUB%2B6G4lfd%2FqQLwTbgpl3TPzUS7O%2BSiFvCPWNG%2FmF3I83O6CShbu8H6LD0uVz5bHpoykpBmIG%2FJRAgJMS5jsXwFXTfr5F1bUlEUXO%2BrIvOPYzIqDIm76MBeI8WHIUWOiWiKZLxQJuTUa2HtugMxreNYXWy1Oco%2FXmwkYVnFY0SW1mA2jwo6iYK2u91W4mhaHtiyXq%2BM232QLLt2rhRVjXSbF6g5OTUsTb%2B0xdb6sHG2a9b6o1tWI8o0pdF83fIr4FLRINteU6%2FKnYTWrknQdlzeWLuLHqVljNJNNKd%2F1Mf9OCFp51dTfF12P91uRg49Rz0uxMTFerucuozw9OT6O0dUFt6dRp9hz7CWoH9zCgcILCC82hkCPis2Oh3KnhtEAAKlCPg9KjnO8mjq1AtaqGskX8EZj%2Fgy28dS%2FZLXXI8kznf%2BvYBXHNkXu6A1BkRmjVg%2BB47SeREC5ARfQzuaYfpIKxNq5LBk54QOP%2BRKu668u9kznUwXW8I4wyfzxdadsUSM1bOz54iGITFIKLxEinM2OoYLFGJ0sIGVAnQsJqf2xJZJ%2BBTkDyMTO5RMoWo%2Frs6CMx9IzDRkx8h9QiZ1M7GetyNXg0slcH2ghS4yed9iI7HU5P0FnL%2B24QPjC5o%2FrEBjqkAapr7FQQkTkY0EP0XC48uDgsgKt%2BZp5VS8v%2BqO0qfkKSPpU76zaqCrUIy%2F0NpORTutfCWJIZM23lzEQ4qpps8i2z0%2FeA%2BvzDTbmHhov8P4z12Q0S72D%2BhsfuIfLt04%2B3GEu7g83kZZcgdkSUf1I5oHryTMm4wslUymPJzpaamBb2w0cBicF4WI09BjndFBKujd8ppvHNOaloZdJhV2V9u5DqA0XM&X-Amz-Signature=a69404dc5029c53e347370ae71e0e79b058cdfbb398b5f5a862ba8b58320c8f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
