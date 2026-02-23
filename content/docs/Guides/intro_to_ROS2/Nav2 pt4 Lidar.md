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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIRVNQBK%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCY8svyjx9nYSFukYu0xNKJf6f3IbzXaERL9%2F6kUK0QiAIgTrUUPZIu7dWEYYYLqYyJNM3kbpF2GxZg2cPvv9DOu0EqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIABAKOEjgu9RheokCrcAwPxxHTgsxqWcggnZlijG8f35khnsPmlh2PcGpYKFwsYf0bye69yl6A7bnjeMK%2BWziBhT5nX1TYkZuYWuIc5eDiy%2Bpfz69qfN4SEFvkjBWqxSfuqLlw2ePVuTzEJjJLeAkleYzRMxbNeEt1N7HCL3X5c7OmROeXuQGT0UJQbRgWU15M9%2B%2F%2F%2FY2%2Bp%2BcFpfW8xr932ncp9ORU6Jcf8Q2%2BPqbCdb4k%2FRjwdX%2BVoBWn%2BZxZLOxmbXiITIgzljO7OeS6JcyJ%2FlgrTqm4VEyrpvbgSqe4A%2F4C29AouxsaXQCwZ08qoIXh23C40EcP7XfsHpbiHLdFtIMa%2BzJ64zWOhKYXqgeu8ZsD6CDMeSL%2FO5EB8ZHRSZBSUC7liNsC%2Fxl0JatDJ%2BfFgTEi6xmHJ65KHGqbUZBM303oIWCQRLk1dXG0G1%2FRDUiz1OaKSLaCxu8pBQb5dVTaKFPuosYZGUcp24Qm4ybdyoCCBhQOjcyG1%2F564QD36iLCnkCz1%2FO%2BucO0%2BirPb0ZLGW9B7FCrQnNTEtoUORAzB94bYAXrJ8n7U6Ft0kTMZ55UxM8nG%2B0WbbvkvYxSHcaz0uV41cV0eSYVA4OAexRUirtliVzRYiAupdfvQjiye6hNZgTmraqYiVArSMMfs7swGOqUBwoqhn4VyQsCHL8V65pG%2B0xa2samcQhqy9gaJ%2BaIn2EWqkVYe9kzP%2FGtDYTyd4yfT3UeQ6%2FwNtWuWJTe77u03TiNuYOVOwBTeSBkNFBB1QKgJRZIsRXqY%2FKUB8uLDqNceaQInlH1bd%2FgJELFnZ0DQNBdN4XZ45eDmw6Ambr0BjuhOF4oapVdX7XkX%2F9TAFOr5ug7jSrNzRyX1KVbePI1vtF607Wrw&X-Amz-Signature=9e4766a523fd19c0966cec8065816c67a81705cc986cc2adee68938e09c08c75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SUBNRNC%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIChubxe1nQBWO1gvWG%2F5iEJCZzsVfNZBGaIgO%2BEP%2F4ZMAiAaXyxNPuOz7l2%2B21j4E%2Bx28rNVHXJKT29IppFWNmoyFiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzWRbzdnaqwMeRY40KtwDx321IhkS6t8RqSzviqVTnYnti0Bztdt%2B3eGMNuSqrQ1n6zl6pqrH1EXdytT%2Fg5UVVuZoquUtQvPj%2Biq17GyVjrwzSM0sx%2Fbgm5N3V4HfAUK8PU2ziQ1DkYStmDmaR8YENOAsqoDHGs4Lv%2B62QUSw4pAIBWWCT7bReY%2F5ARxI9oksWOYNu5S%2BDGeSFYuHK9GIt43z%2FpJ%2FV1S0YPgjr4DWu56fapND6Nc6f6s%2FqS%2BC3zoO416dxWzdpe6xs0Ll424Umz2RRj2IvYIUdQke0bKZiDpssSrVFLMM4S%2BVuOFygKkkLgiZ2p5sK%2BDhgoIdcW070FyhkfULojONrm3%2FUKT9gdfgQR3%2FGYhVF2wrGsFWn%2B5RIMGEvnscG0Rtq2lQGJZ9lNAbs5McQP%2BxGEV%2BkSl0QvRj%2F0uKnrkVTdmiu8CL2c%2FYOLYEU3WLsc4mSZbnhFYI%2Fr%2Fzdx3y0Ikx0rJd7Iz1K6%2BD4pMqRGwdPahBSm3VFnKUITFZnDEhZOijYQL7TJiSzQvR7F0ICCOUiHXwbkC1Qgw3uIG21VFVHGqQnHIQSmR1kZZmr7KMT3w4vdbzaHPhLEidGmygKW2AQ1Nnqh%2FSXTnhgas7Rxa0nF%2BwbjDIhYipjGYNMoFa06ztD2cwl%2B3uzAY6pgFtaPmy%2BC4E%2Bp%2FqfQJs7IEMHL%2FLdoEwtpO0mBdDnE4KiJLHTLvzFYsAF26VVfFRbnRe2H431E0qRUQFV05XxD02NSwf%2FJ%2BybQELLTIYyvnACeCGY%2BQU48DoAp4TRAB6fP4dwsCKW3G9BSvU3zyCpUFcT2kPXdcFJJHcT68Es2t%2B4SR5Tp%2FxEX%2Fg9K%2Fp77ClMdKz0n6IaassKsG7h0%2FQJvecV24je5bZ&X-Amz-Signature=7b4d3510a55732db2881d9e8d18dc52a7947cff93fd09be5ea9130b29d2177fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SUBNRNC%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIChubxe1nQBWO1gvWG%2F5iEJCZzsVfNZBGaIgO%2BEP%2F4ZMAiAaXyxNPuOz7l2%2B21j4E%2Bx28rNVHXJKT29IppFWNmoyFiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzWRbzdnaqwMeRY40KtwDx321IhkS6t8RqSzviqVTnYnti0Bztdt%2B3eGMNuSqrQ1n6zl6pqrH1EXdytT%2Fg5UVVuZoquUtQvPj%2Biq17GyVjrwzSM0sx%2Fbgm5N3V4HfAUK8PU2ziQ1DkYStmDmaR8YENOAsqoDHGs4Lv%2B62QUSw4pAIBWWCT7bReY%2F5ARxI9oksWOYNu5S%2BDGeSFYuHK9GIt43z%2FpJ%2FV1S0YPgjr4DWu56fapND6Nc6f6s%2FqS%2BC3zoO416dxWzdpe6xs0Ll424Umz2RRj2IvYIUdQke0bKZiDpssSrVFLMM4S%2BVuOFygKkkLgiZ2p5sK%2BDhgoIdcW070FyhkfULojONrm3%2FUKT9gdfgQR3%2FGYhVF2wrGsFWn%2B5RIMGEvnscG0Rtq2lQGJZ9lNAbs5McQP%2BxGEV%2BkSl0QvRj%2F0uKnrkVTdmiu8CL2c%2FYOLYEU3WLsc4mSZbnhFYI%2Fr%2Fzdx3y0Ikx0rJd7Iz1K6%2BD4pMqRGwdPahBSm3VFnKUITFZnDEhZOijYQL7TJiSzQvR7F0ICCOUiHXwbkC1Qgw3uIG21VFVHGqQnHIQSmR1kZZmr7KMT3w4vdbzaHPhLEidGmygKW2AQ1Nnqh%2FSXTnhgas7Rxa0nF%2BwbjDIhYipjGYNMoFa06ztD2cwl%2B3uzAY6pgFtaPmy%2BC4E%2Bp%2FqfQJs7IEMHL%2FLdoEwtpO0mBdDnE4KiJLHTLvzFYsAF26VVfFRbnRe2H431E0qRUQFV05XxD02NSwf%2FJ%2BybQELLTIYyvnACeCGY%2BQU48DoAp4TRAB6fP4dwsCKW3G9BSvU3zyCpUFcT2kPXdcFJJHcT68Es2t%2B4SR5Tp%2FxEX%2Fg9K%2Fp77ClMdKz0n6IaassKsG7h0%2FQJvecV24je5bZ&X-Amz-Signature=21c823e46b21690211fa4d6f442ffc262ebae789bec778f77980ac7b8fee54c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SUBNRNC%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIChubxe1nQBWO1gvWG%2F5iEJCZzsVfNZBGaIgO%2BEP%2F4ZMAiAaXyxNPuOz7l2%2B21j4E%2Bx28rNVHXJKT29IppFWNmoyFiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzWRbzdnaqwMeRY40KtwDx321IhkS6t8RqSzviqVTnYnti0Bztdt%2B3eGMNuSqrQ1n6zl6pqrH1EXdytT%2Fg5UVVuZoquUtQvPj%2Biq17GyVjrwzSM0sx%2Fbgm5N3V4HfAUK8PU2ziQ1DkYStmDmaR8YENOAsqoDHGs4Lv%2B62QUSw4pAIBWWCT7bReY%2F5ARxI9oksWOYNu5S%2BDGeSFYuHK9GIt43z%2FpJ%2FV1S0YPgjr4DWu56fapND6Nc6f6s%2FqS%2BC3zoO416dxWzdpe6xs0Ll424Umz2RRj2IvYIUdQke0bKZiDpssSrVFLMM4S%2BVuOFygKkkLgiZ2p5sK%2BDhgoIdcW070FyhkfULojONrm3%2FUKT9gdfgQR3%2FGYhVF2wrGsFWn%2B5RIMGEvnscG0Rtq2lQGJZ9lNAbs5McQP%2BxGEV%2BkSl0QvRj%2F0uKnrkVTdmiu8CL2c%2FYOLYEU3WLsc4mSZbnhFYI%2Fr%2Fzdx3y0Ikx0rJd7Iz1K6%2BD4pMqRGwdPahBSm3VFnKUITFZnDEhZOijYQL7TJiSzQvR7F0ICCOUiHXwbkC1Qgw3uIG21VFVHGqQnHIQSmR1kZZmr7KMT3w4vdbzaHPhLEidGmygKW2AQ1Nnqh%2FSXTnhgas7Rxa0nF%2BwbjDIhYipjGYNMoFa06ztD2cwl%2B3uzAY6pgFtaPmy%2BC4E%2Bp%2FqfQJs7IEMHL%2FLdoEwtpO0mBdDnE4KiJLHTLvzFYsAF26VVfFRbnRe2H431E0qRUQFV05XxD02NSwf%2FJ%2BybQELLTIYyvnACeCGY%2BQU48DoAp4TRAB6fP4dwsCKW3G9BSvU3zyCpUFcT2kPXdcFJJHcT68Es2t%2B4SR5Tp%2FxEX%2Fg9K%2Fp77ClMdKz0n6IaassKsG7h0%2FQJvecV24je5bZ&X-Amz-Signature=1866ea9114a1561c8c2c5a5b7176a351d1970a52140e5c4ec6e7346d9b1262b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SUBNRNC%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIChubxe1nQBWO1gvWG%2F5iEJCZzsVfNZBGaIgO%2BEP%2F4ZMAiAaXyxNPuOz7l2%2B21j4E%2Bx28rNVHXJKT29IppFWNmoyFiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzWRbzdnaqwMeRY40KtwDx321IhkS6t8RqSzviqVTnYnti0Bztdt%2B3eGMNuSqrQ1n6zl6pqrH1EXdytT%2Fg5UVVuZoquUtQvPj%2Biq17GyVjrwzSM0sx%2Fbgm5N3V4HfAUK8PU2ziQ1DkYStmDmaR8YENOAsqoDHGs4Lv%2B62QUSw4pAIBWWCT7bReY%2F5ARxI9oksWOYNu5S%2BDGeSFYuHK9GIt43z%2FpJ%2FV1S0YPgjr4DWu56fapND6Nc6f6s%2FqS%2BC3zoO416dxWzdpe6xs0Ll424Umz2RRj2IvYIUdQke0bKZiDpssSrVFLMM4S%2BVuOFygKkkLgiZ2p5sK%2BDhgoIdcW070FyhkfULojONrm3%2FUKT9gdfgQR3%2FGYhVF2wrGsFWn%2B5RIMGEvnscG0Rtq2lQGJZ9lNAbs5McQP%2BxGEV%2BkSl0QvRj%2F0uKnrkVTdmiu8CL2c%2FYOLYEU3WLsc4mSZbnhFYI%2Fr%2Fzdx3y0Ikx0rJd7Iz1K6%2BD4pMqRGwdPahBSm3VFnKUITFZnDEhZOijYQL7TJiSzQvR7F0ICCOUiHXwbkC1Qgw3uIG21VFVHGqQnHIQSmR1kZZmr7KMT3w4vdbzaHPhLEidGmygKW2AQ1Nnqh%2FSXTnhgas7Rxa0nF%2BwbjDIhYipjGYNMoFa06ztD2cwl%2B3uzAY6pgFtaPmy%2BC4E%2Bp%2FqfQJs7IEMHL%2FLdoEwtpO0mBdDnE4KiJLHTLvzFYsAF26VVfFRbnRe2H431E0qRUQFV05XxD02NSwf%2FJ%2BybQELLTIYyvnACeCGY%2BQU48DoAp4TRAB6fP4dwsCKW3G9BSvU3zyCpUFcT2kPXdcFJJHcT68Es2t%2B4SR5Tp%2FxEX%2Fg9K%2Fp77ClMdKz0n6IaassKsG7h0%2FQJvecV24je5bZ&X-Amz-Signature=8ef6ef958ac8a18a35789ed737584b7138fe7acf7dd4f72fb478414d07c99fa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SUBNRNC%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIChubxe1nQBWO1gvWG%2F5iEJCZzsVfNZBGaIgO%2BEP%2F4ZMAiAaXyxNPuOz7l2%2B21j4E%2Bx28rNVHXJKT29IppFWNmoyFiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzWRbzdnaqwMeRY40KtwDx321IhkS6t8RqSzviqVTnYnti0Bztdt%2B3eGMNuSqrQ1n6zl6pqrH1EXdytT%2Fg5UVVuZoquUtQvPj%2Biq17GyVjrwzSM0sx%2Fbgm5N3V4HfAUK8PU2ziQ1DkYStmDmaR8YENOAsqoDHGs4Lv%2B62QUSw4pAIBWWCT7bReY%2F5ARxI9oksWOYNu5S%2BDGeSFYuHK9GIt43z%2FpJ%2FV1S0YPgjr4DWu56fapND6Nc6f6s%2FqS%2BC3zoO416dxWzdpe6xs0Ll424Umz2RRj2IvYIUdQke0bKZiDpssSrVFLMM4S%2BVuOFygKkkLgiZ2p5sK%2BDhgoIdcW070FyhkfULojONrm3%2FUKT9gdfgQR3%2FGYhVF2wrGsFWn%2B5RIMGEvnscG0Rtq2lQGJZ9lNAbs5McQP%2BxGEV%2BkSl0QvRj%2F0uKnrkVTdmiu8CL2c%2FYOLYEU3WLsc4mSZbnhFYI%2Fr%2Fzdx3y0Ikx0rJd7Iz1K6%2BD4pMqRGwdPahBSm3VFnKUITFZnDEhZOijYQL7TJiSzQvR7F0ICCOUiHXwbkC1Qgw3uIG21VFVHGqQnHIQSmR1kZZmr7KMT3w4vdbzaHPhLEidGmygKW2AQ1Nnqh%2FSXTnhgas7Rxa0nF%2BwbjDIhYipjGYNMoFa06ztD2cwl%2B3uzAY6pgFtaPmy%2BC4E%2Bp%2FqfQJs7IEMHL%2FLdoEwtpO0mBdDnE4KiJLHTLvzFYsAF26VVfFRbnRe2H431E0qRUQFV05XxD02NSwf%2FJ%2BybQELLTIYyvnACeCGY%2BQU48DoAp4TRAB6fP4dwsCKW3G9BSvU3zyCpUFcT2kPXdcFJJHcT68Es2t%2B4SR5Tp%2FxEX%2Fg9K%2Fp77ClMdKz0n6IaassKsG7h0%2FQJvecV24je5bZ&X-Amz-Signature=7a007efce209d963d9da47c1fba242e1fee8c727cf51e7cae90e498c314c162b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SUBNRNC%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIChubxe1nQBWO1gvWG%2F5iEJCZzsVfNZBGaIgO%2BEP%2F4ZMAiAaXyxNPuOz7l2%2B21j4E%2Bx28rNVHXJKT29IppFWNmoyFiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzWRbzdnaqwMeRY40KtwDx321IhkS6t8RqSzviqVTnYnti0Bztdt%2B3eGMNuSqrQ1n6zl6pqrH1EXdytT%2Fg5UVVuZoquUtQvPj%2Biq17GyVjrwzSM0sx%2Fbgm5N3V4HfAUK8PU2ziQ1DkYStmDmaR8YENOAsqoDHGs4Lv%2B62QUSw4pAIBWWCT7bReY%2F5ARxI9oksWOYNu5S%2BDGeSFYuHK9GIt43z%2FpJ%2FV1S0YPgjr4DWu56fapND6Nc6f6s%2FqS%2BC3zoO416dxWzdpe6xs0Ll424Umz2RRj2IvYIUdQke0bKZiDpssSrVFLMM4S%2BVuOFygKkkLgiZ2p5sK%2BDhgoIdcW070FyhkfULojONrm3%2FUKT9gdfgQR3%2FGYhVF2wrGsFWn%2B5RIMGEvnscG0Rtq2lQGJZ9lNAbs5McQP%2BxGEV%2BkSl0QvRj%2F0uKnrkVTdmiu8CL2c%2FYOLYEU3WLsc4mSZbnhFYI%2Fr%2Fzdx3y0Ikx0rJd7Iz1K6%2BD4pMqRGwdPahBSm3VFnKUITFZnDEhZOijYQL7TJiSzQvR7F0ICCOUiHXwbkC1Qgw3uIG21VFVHGqQnHIQSmR1kZZmr7KMT3w4vdbzaHPhLEidGmygKW2AQ1Nnqh%2FSXTnhgas7Rxa0nF%2BwbjDIhYipjGYNMoFa06ztD2cwl%2B3uzAY6pgFtaPmy%2BC4E%2Bp%2FqfQJs7IEMHL%2FLdoEwtpO0mBdDnE4KiJLHTLvzFYsAF26VVfFRbnRe2H431E0qRUQFV05XxD02NSwf%2FJ%2BybQELLTIYyvnACeCGY%2BQU48DoAp4TRAB6fP4dwsCKW3G9BSvU3zyCpUFcT2kPXdcFJJHcT68Es2t%2B4SR5Tp%2FxEX%2Fg9K%2Fp77ClMdKz0n6IaassKsG7h0%2FQJvecV24je5bZ&X-Amz-Signature=096ffc015a32e26579803742e3d1c5432d08fbbc381aae5bcfe565c09dfaf990&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SUBNRNC%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIChubxe1nQBWO1gvWG%2F5iEJCZzsVfNZBGaIgO%2BEP%2F4ZMAiAaXyxNPuOz7l2%2B21j4E%2Bx28rNVHXJKT29IppFWNmoyFiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzWRbzdnaqwMeRY40KtwDx321IhkS6t8RqSzviqVTnYnti0Bztdt%2B3eGMNuSqrQ1n6zl6pqrH1EXdytT%2Fg5UVVuZoquUtQvPj%2Biq17GyVjrwzSM0sx%2Fbgm5N3V4HfAUK8PU2ziQ1DkYStmDmaR8YENOAsqoDHGs4Lv%2B62QUSw4pAIBWWCT7bReY%2F5ARxI9oksWOYNu5S%2BDGeSFYuHK9GIt43z%2FpJ%2FV1S0YPgjr4DWu56fapND6Nc6f6s%2FqS%2BC3zoO416dxWzdpe6xs0Ll424Umz2RRj2IvYIUdQke0bKZiDpssSrVFLMM4S%2BVuOFygKkkLgiZ2p5sK%2BDhgoIdcW070FyhkfULojONrm3%2FUKT9gdfgQR3%2FGYhVF2wrGsFWn%2B5RIMGEvnscG0Rtq2lQGJZ9lNAbs5McQP%2BxGEV%2BkSl0QvRj%2F0uKnrkVTdmiu8CL2c%2FYOLYEU3WLsc4mSZbnhFYI%2Fr%2Fzdx3y0Ikx0rJd7Iz1K6%2BD4pMqRGwdPahBSm3VFnKUITFZnDEhZOijYQL7TJiSzQvR7F0ICCOUiHXwbkC1Qgw3uIG21VFVHGqQnHIQSmR1kZZmr7KMT3w4vdbzaHPhLEidGmygKW2AQ1Nnqh%2FSXTnhgas7Rxa0nF%2BwbjDIhYipjGYNMoFa06ztD2cwl%2B3uzAY6pgFtaPmy%2BC4E%2Bp%2FqfQJs7IEMHL%2FLdoEwtpO0mBdDnE4KiJLHTLvzFYsAF26VVfFRbnRe2H431E0qRUQFV05XxD02NSwf%2FJ%2BybQELLTIYyvnACeCGY%2BQU48DoAp4TRAB6fP4dwsCKW3G9BSvU3zyCpUFcT2kPXdcFJJHcT68Es2t%2B4SR5Tp%2FxEX%2Fg9K%2Fp77ClMdKz0n6IaassKsG7h0%2FQJvecV24je5bZ&X-Amz-Signature=12a2bbb1a01831d32b0efb50ab2909185f6af8b1f56411d0400acccdc81b3f6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SUBNRNC%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIChubxe1nQBWO1gvWG%2F5iEJCZzsVfNZBGaIgO%2BEP%2F4ZMAiAaXyxNPuOz7l2%2B21j4E%2Bx28rNVHXJKT29IppFWNmoyFiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzWRbzdnaqwMeRY40KtwDx321IhkS6t8RqSzviqVTnYnti0Bztdt%2B3eGMNuSqrQ1n6zl6pqrH1EXdytT%2Fg5UVVuZoquUtQvPj%2Biq17GyVjrwzSM0sx%2Fbgm5N3V4HfAUK8PU2ziQ1DkYStmDmaR8YENOAsqoDHGs4Lv%2B62QUSw4pAIBWWCT7bReY%2F5ARxI9oksWOYNu5S%2BDGeSFYuHK9GIt43z%2FpJ%2FV1S0YPgjr4DWu56fapND6Nc6f6s%2FqS%2BC3zoO416dxWzdpe6xs0Ll424Umz2RRj2IvYIUdQke0bKZiDpssSrVFLMM4S%2BVuOFygKkkLgiZ2p5sK%2BDhgoIdcW070FyhkfULojONrm3%2FUKT9gdfgQR3%2FGYhVF2wrGsFWn%2B5RIMGEvnscG0Rtq2lQGJZ9lNAbs5McQP%2BxGEV%2BkSl0QvRj%2F0uKnrkVTdmiu8CL2c%2FYOLYEU3WLsc4mSZbnhFYI%2Fr%2Fzdx3y0Ikx0rJd7Iz1K6%2BD4pMqRGwdPahBSm3VFnKUITFZnDEhZOijYQL7TJiSzQvR7F0ICCOUiHXwbkC1Qgw3uIG21VFVHGqQnHIQSmR1kZZmr7KMT3w4vdbzaHPhLEidGmygKW2AQ1Nnqh%2FSXTnhgas7Rxa0nF%2BwbjDIhYipjGYNMoFa06ztD2cwl%2B3uzAY6pgFtaPmy%2BC4E%2Bp%2FqfQJs7IEMHL%2FLdoEwtpO0mBdDnE4KiJLHTLvzFYsAF26VVfFRbnRe2H431E0qRUQFV05XxD02NSwf%2FJ%2BybQELLTIYyvnACeCGY%2BQU48DoAp4TRAB6fP4dwsCKW3G9BSvU3zyCpUFcT2kPXdcFJJHcT68Es2t%2B4SR5Tp%2FxEX%2Fg9K%2Fp77ClMdKz0n6IaassKsG7h0%2FQJvecV24je5bZ&X-Amz-Signature=9e3cd01313c74293694072bc13caddef77f2da2f534acd99b04cc0c76adc4261&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SUBNRNC%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIChubxe1nQBWO1gvWG%2F5iEJCZzsVfNZBGaIgO%2BEP%2F4ZMAiAaXyxNPuOz7l2%2B21j4E%2Bx28rNVHXJKT29IppFWNmoyFiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzWRbzdnaqwMeRY40KtwDx321IhkS6t8RqSzviqVTnYnti0Bztdt%2B3eGMNuSqrQ1n6zl6pqrH1EXdytT%2Fg5UVVuZoquUtQvPj%2Biq17GyVjrwzSM0sx%2Fbgm5N3V4HfAUK8PU2ziQ1DkYStmDmaR8YENOAsqoDHGs4Lv%2B62QUSw4pAIBWWCT7bReY%2F5ARxI9oksWOYNu5S%2BDGeSFYuHK9GIt43z%2FpJ%2FV1S0YPgjr4DWu56fapND6Nc6f6s%2FqS%2BC3zoO416dxWzdpe6xs0Ll424Umz2RRj2IvYIUdQke0bKZiDpssSrVFLMM4S%2BVuOFygKkkLgiZ2p5sK%2BDhgoIdcW070FyhkfULojONrm3%2FUKT9gdfgQR3%2FGYhVF2wrGsFWn%2B5RIMGEvnscG0Rtq2lQGJZ9lNAbs5McQP%2BxGEV%2BkSl0QvRj%2F0uKnrkVTdmiu8CL2c%2FYOLYEU3WLsc4mSZbnhFYI%2Fr%2Fzdx3y0Ikx0rJd7Iz1K6%2BD4pMqRGwdPahBSm3VFnKUITFZnDEhZOijYQL7TJiSzQvR7F0ICCOUiHXwbkC1Qgw3uIG21VFVHGqQnHIQSmR1kZZmr7KMT3w4vdbzaHPhLEidGmygKW2AQ1Nnqh%2FSXTnhgas7Rxa0nF%2BwbjDIhYipjGYNMoFa06ztD2cwl%2B3uzAY6pgFtaPmy%2BC4E%2Bp%2FqfQJs7IEMHL%2FLdoEwtpO0mBdDnE4KiJLHTLvzFYsAF26VVfFRbnRe2H431E0qRUQFV05XxD02NSwf%2FJ%2BybQELLTIYyvnACeCGY%2BQU48DoAp4TRAB6fP4dwsCKW3G9BSvU3zyCpUFcT2kPXdcFJJHcT68Es2t%2B4SR5Tp%2FxEX%2Fg9K%2Fp77ClMdKz0n6IaassKsG7h0%2FQJvecV24je5bZ&X-Amz-Signature=e7b4fc37d0eb05f4482316391cd8821cb9966ede01c6705bec87a761b15caa6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SUBNRNC%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIChubxe1nQBWO1gvWG%2F5iEJCZzsVfNZBGaIgO%2BEP%2F4ZMAiAaXyxNPuOz7l2%2B21j4E%2Bx28rNVHXJKT29IppFWNmoyFiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzWRbzdnaqwMeRY40KtwDx321IhkS6t8RqSzviqVTnYnti0Bztdt%2B3eGMNuSqrQ1n6zl6pqrH1EXdytT%2Fg5UVVuZoquUtQvPj%2Biq17GyVjrwzSM0sx%2Fbgm5N3V4HfAUK8PU2ziQ1DkYStmDmaR8YENOAsqoDHGs4Lv%2B62QUSw4pAIBWWCT7bReY%2F5ARxI9oksWOYNu5S%2BDGeSFYuHK9GIt43z%2FpJ%2FV1S0YPgjr4DWu56fapND6Nc6f6s%2FqS%2BC3zoO416dxWzdpe6xs0Ll424Umz2RRj2IvYIUdQke0bKZiDpssSrVFLMM4S%2BVuOFygKkkLgiZ2p5sK%2BDhgoIdcW070FyhkfULojONrm3%2FUKT9gdfgQR3%2FGYhVF2wrGsFWn%2B5RIMGEvnscG0Rtq2lQGJZ9lNAbs5McQP%2BxGEV%2BkSl0QvRj%2F0uKnrkVTdmiu8CL2c%2FYOLYEU3WLsc4mSZbnhFYI%2Fr%2Fzdx3y0Ikx0rJd7Iz1K6%2BD4pMqRGwdPahBSm3VFnKUITFZnDEhZOijYQL7TJiSzQvR7F0ICCOUiHXwbkC1Qgw3uIG21VFVHGqQnHIQSmR1kZZmr7KMT3w4vdbzaHPhLEidGmygKW2AQ1Nnqh%2FSXTnhgas7Rxa0nF%2BwbjDIhYipjGYNMoFa06ztD2cwl%2B3uzAY6pgFtaPmy%2BC4E%2Bp%2FqfQJs7IEMHL%2FLdoEwtpO0mBdDnE4KiJLHTLvzFYsAF26VVfFRbnRe2H431E0qRUQFV05XxD02NSwf%2FJ%2BybQELLTIYyvnACeCGY%2BQU48DoAp4TRAB6fP4dwsCKW3G9BSvU3zyCpUFcT2kPXdcFJJHcT68Es2t%2B4SR5Tp%2FxEX%2Fg9K%2Fp77ClMdKz0n6IaassKsG7h0%2FQJvecV24je5bZ&X-Amz-Signature=8ef6ef958ac8a18a35789ed737584b7138fe7acf7dd4f72fb478414d07c99fa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
