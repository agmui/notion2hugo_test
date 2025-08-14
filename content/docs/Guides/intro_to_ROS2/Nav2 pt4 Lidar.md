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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q43JADXC%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBbHlxQ5kmcv81zzIFhtu7%2Fgtl0rAlBsIoyXnfEE3%2BqgIgVWwQByMrrWL4%2FHafVP3SWJAk3RdnnAu5gzxhE%2BZYxKcq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDPJHIRiTkT4pux6MeyrcA0Qe%2FoiNkcFcglQU9iYB%2B6TeR1zjUsAjgD1ZGdQ4d68TKsmPDT9PDBCLE3FAaecJ%2B%2Bd5MxncM77XB1hWfApMK6DDnHrJHzEty4ntKznf%2BZ0xxokA%2Fq124UL6D%2BHUvzGyD8P1W0ffVIuqsQd8i1hpHlUvozGEXhqt7JGDAU9HnqZyUtjZOrVge%2BOg1fCJJLs%2BD3u%2FbMaZK%2FKSAVDD%2B2anvvLBxmI0aRa5oR1G9dwH%2B%2FVp5R15RGDak0yZImMvo01kxF8weI1iSZsF4nPvkR1HV%2BWch%2FVqOnu9seBcLSRdc1UFMBSaXsLCbTmsyFanACr9DLuWHVJbwBY59pr4EPwE9PvsrXv6iBhLHPnAufCKhxqtJHvnEH9rBicIm8q7w%2F2Cun%2BWuD%2ByB%2FMV58Lm%2BcA6lN%2FKcOrvYyGrGn1m8oxd05MO5DtH0gksYlwF0Glh1saGBtYUpJCnx4hVf%2F8Ed8sPwmWKfG%2FYkyTdfCeBUK29Fhfa187ujHgTr8ThB2%2F9eVXUTA6XT4944xJdH%2Fc3RyMeZXyxJ0xN75kqBwM%2BkinvZcAt3OtSiYFTMU%2BIUTh6Hkd6R5vBtHZmkMKW9sk3gDqd09PKJSlm0XCDgVIV4GTHy3rGoDbBuCUxaYz9AB2hMK6L9cQGOqUBxENaKLOjqhB%2Bah21jO2xnkVkHebVSzN4JpqZ24APnsOEi66t2lgUrjUqbXKhXfHGRnyjzJ402mVmy%2BpMv8TDag6JIgt%2BxnmxRa6IKpdtuXFiDDMAOGmhGlLZ2aom5Re8HEYeepLl%2BrcFuazD8Y7Vb0rzXAjDbMKb5wnFZHBebTWAFf7nwc521VKjesD%2FoR37O0QeoSnQpdcW%2BXVqd8hMNYQ1OqdZ&X-Amz-Signature=0d1f342d49f354703d8b697cd7a0dfbf30892c112ce61b6e79ab05d80538dd1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGY57TK7%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuJgxzdOtJqLBF2QHNgbkTINciJUd6iRAWYkHMQt9CngIhALI8PH1PP2j4Mv4YXTPCDWvN1TQgfAuiiv7z0mcpdcmzKv8DCDsQABoMNjM3NDIzMTgzODA1IgzDqIdpHCbWBlRVpnQq3AO1MmxjzAzQaverMUnOsRstDHvru27eoDluwaa3ZoxBsYvG45vS4GSMs88qo3zG75V6zeuIiYWx32qF4z%2F5%2BvsBJ2Pace9cpnm%2FiGGXGGElKNOc0Jb4Rt1DvuDesNAw%2FhR8AmM4aiJk%2FjyGMxRnMT5Npx5GCjwTBuuhSLT0sewf3f7AWW%2FJa80bJP3swtj4X7VHhkGf98ABIoB8Epj6Fqdo%2FfvrlWzxt8PWJrENFAbqRel3VTR9eAhjoUpUyHMpl%2BQ5RvXnZv4B31KrAR%2Fl%2B%2B%2Fkbo4wDjXw%2B3vRIaHe51vdzNTI2hewxffnWKWXVT5j5wcvJ3yaEDMgQ0TMCKtRv6pYEgp%2Bmpg53gRR1v5lgVJd6O%2FRDgHPClJKyejIEn5ej4gXMujsG6W474MtR2bfVjsuWwod7jLYW6s0nS%2Bj5YCjAMRVZ1CiVvoy6PaziRvjrZLI%2Bo%2Bdu1jlJx9wU6g8W%2BgouS4QW6CC1o%2F7eVF6SXvKU57KobutZ%2FUN73ePigCBFjA8FyteqWEBZn2F52cJr2YXBkz3VuQY%2FAsu8yG%2BwA7uGEEjAbf4iSUIuIKgqaYmHeG%2Bw48xFrv%2Ba9Jb6zoAu6ot1dixqLU%2F9zf7iwBJVlRpXsBSaDJH280xN9VEbDC%2Bi%2FXEBjqkAZSSaTqrhoNysVyVn7bIY9t%2FQH%2Brhe8Wrz7TfOdPEIGcZJK7LtC3EF69cHHRnidbzJzmoKUjTYPsA%2BJ%2B3TykOjdwzi%2FYKLjETFgPNUSVmNHzUaLuZE9GULMxj%2FSszK2O8ZIn14iU2ubfjrYRN74E6%2BL%2F3rXubxtrxgITwIuyqh1jxmbIV%2Ft4lfgeN%2BOLv8tf9sispbD6LZ7P4Sc3i0RI1zJABaSL&X-Amz-Signature=fbda88483c896c817d4d2017862499413653ddfd64045d145b751c469bdacd25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGY57TK7%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuJgxzdOtJqLBF2QHNgbkTINciJUd6iRAWYkHMQt9CngIhALI8PH1PP2j4Mv4YXTPCDWvN1TQgfAuiiv7z0mcpdcmzKv8DCDsQABoMNjM3NDIzMTgzODA1IgzDqIdpHCbWBlRVpnQq3AO1MmxjzAzQaverMUnOsRstDHvru27eoDluwaa3ZoxBsYvG45vS4GSMs88qo3zG75V6zeuIiYWx32qF4z%2F5%2BvsBJ2Pace9cpnm%2FiGGXGGElKNOc0Jb4Rt1DvuDesNAw%2FhR8AmM4aiJk%2FjyGMxRnMT5Npx5GCjwTBuuhSLT0sewf3f7AWW%2FJa80bJP3swtj4X7VHhkGf98ABIoB8Epj6Fqdo%2FfvrlWzxt8PWJrENFAbqRel3VTR9eAhjoUpUyHMpl%2BQ5RvXnZv4B31KrAR%2Fl%2B%2B%2Fkbo4wDjXw%2B3vRIaHe51vdzNTI2hewxffnWKWXVT5j5wcvJ3yaEDMgQ0TMCKtRv6pYEgp%2Bmpg53gRR1v5lgVJd6O%2FRDgHPClJKyejIEn5ej4gXMujsG6W474MtR2bfVjsuWwod7jLYW6s0nS%2Bj5YCjAMRVZ1CiVvoy6PaziRvjrZLI%2Bo%2Bdu1jlJx9wU6g8W%2BgouS4QW6CC1o%2F7eVF6SXvKU57KobutZ%2FUN73ePigCBFjA8FyteqWEBZn2F52cJr2YXBkz3VuQY%2FAsu8yG%2BwA7uGEEjAbf4iSUIuIKgqaYmHeG%2Bw48xFrv%2Ba9Jb6zoAu6ot1dixqLU%2F9zf7iwBJVlRpXsBSaDJH280xN9VEbDC%2Bi%2FXEBjqkAZSSaTqrhoNysVyVn7bIY9t%2FQH%2Brhe8Wrz7TfOdPEIGcZJK7LtC3EF69cHHRnidbzJzmoKUjTYPsA%2BJ%2B3TykOjdwzi%2FYKLjETFgPNUSVmNHzUaLuZE9GULMxj%2FSszK2O8ZIn14iU2ubfjrYRN74E6%2BL%2F3rXubxtrxgITwIuyqh1jxmbIV%2Ft4lfgeN%2BOLv8tf9sispbD6LZ7P4Sc3i0RI1zJABaSL&X-Amz-Signature=377580b345eb1976ae83b0b960a339ac7e16d3b3fe94cf05a546930e9da1ffbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGY57TK7%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuJgxzdOtJqLBF2QHNgbkTINciJUd6iRAWYkHMQt9CngIhALI8PH1PP2j4Mv4YXTPCDWvN1TQgfAuiiv7z0mcpdcmzKv8DCDsQABoMNjM3NDIzMTgzODA1IgzDqIdpHCbWBlRVpnQq3AO1MmxjzAzQaverMUnOsRstDHvru27eoDluwaa3ZoxBsYvG45vS4GSMs88qo3zG75V6zeuIiYWx32qF4z%2F5%2BvsBJ2Pace9cpnm%2FiGGXGGElKNOc0Jb4Rt1DvuDesNAw%2FhR8AmM4aiJk%2FjyGMxRnMT5Npx5GCjwTBuuhSLT0sewf3f7AWW%2FJa80bJP3swtj4X7VHhkGf98ABIoB8Epj6Fqdo%2FfvrlWzxt8PWJrENFAbqRel3VTR9eAhjoUpUyHMpl%2BQ5RvXnZv4B31KrAR%2Fl%2B%2B%2Fkbo4wDjXw%2B3vRIaHe51vdzNTI2hewxffnWKWXVT5j5wcvJ3yaEDMgQ0TMCKtRv6pYEgp%2Bmpg53gRR1v5lgVJd6O%2FRDgHPClJKyejIEn5ej4gXMujsG6W474MtR2bfVjsuWwod7jLYW6s0nS%2Bj5YCjAMRVZ1CiVvoy6PaziRvjrZLI%2Bo%2Bdu1jlJx9wU6g8W%2BgouS4QW6CC1o%2F7eVF6SXvKU57KobutZ%2FUN73ePigCBFjA8FyteqWEBZn2F52cJr2YXBkz3VuQY%2FAsu8yG%2BwA7uGEEjAbf4iSUIuIKgqaYmHeG%2Bw48xFrv%2Ba9Jb6zoAu6ot1dixqLU%2F9zf7iwBJVlRpXsBSaDJH280xN9VEbDC%2Bi%2FXEBjqkAZSSaTqrhoNysVyVn7bIY9t%2FQH%2Brhe8Wrz7TfOdPEIGcZJK7LtC3EF69cHHRnidbzJzmoKUjTYPsA%2BJ%2B3TykOjdwzi%2FYKLjETFgPNUSVmNHzUaLuZE9GULMxj%2FSszK2O8ZIn14iU2ubfjrYRN74E6%2BL%2F3rXubxtrxgITwIuyqh1jxmbIV%2Ft4lfgeN%2BOLv8tf9sispbD6LZ7P4Sc3i0RI1zJABaSL&X-Amz-Signature=3d3fecd7d8df0e0ef094fdbb55fbe5a5a2cc4b9af1a61f4ffc9352bd808980b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGY57TK7%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuJgxzdOtJqLBF2QHNgbkTINciJUd6iRAWYkHMQt9CngIhALI8PH1PP2j4Mv4YXTPCDWvN1TQgfAuiiv7z0mcpdcmzKv8DCDsQABoMNjM3NDIzMTgzODA1IgzDqIdpHCbWBlRVpnQq3AO1MmxjzAzQaverMUnOsRstDHvru27eoDluwaa3ZoxBsYvG45vS4GSMs88qo3zG75V6zeuIiYWx32qF4z%2F5%2BvsBJ2Pace9cpnm%2FiGGXGGElKNOc0Jb4Rt1DvuDesNAw%2FhR8AmM4aiJk%2FjyGMxRnMT5Npx5GCjwTBuuhSLT0sewf3f7AWW%2FJa80bJP3swtj4X7VHhkGf98ABIoB8Epj6Fqdo%2FfvrlWzxt8PWJrENFAbqRel3VTR9eAhjoUpUyHMpl%2BQ5RvXnZv4B31KrAR%2Fl%2B%2B%2Fkbo4wDjXw%2B3vRIaHe51vdzNTI2hewxffnWKWXVT5j5wcvJ3yaEDMgQ0TMCKtRv6pYEgp%2Bmpg53gRR1v5lgVJd6O%2FRDgHPClJKyejIEn5ej4gXMujsG6W474MtR2bfVjsuWwod7jLYW6s0nS%2Bj5YCjAMRVZ1CiVvoy6PaziRvjrZLI%2Bo%2Bdu1jlJx9wU6g8W%2BgouS4QW6CC1o%2F7eVF6SXvKU57KobutZ%2FUN73ePigCBFjA8FyteqWEBZn2F52cJr2YXBkz3VuQY%2FAsu8yG%2BwA7uGEEjAbf4iSUIuIKgqaYmHeG%2Bw48xFrv%2Ba9Jb6zoAu6ot1dixqLU%2F9zf7iwBJVlRpXsBSaDJH280xN9VEbDC%2Bi%2FXEBjqkAZSSaTqrhoNysVyVn7bIY9t%2FQH%2Brhe8Wrz7TfOdPEIGcZJK7LtC3EF69cHHRnidbzJzmoKUjTYPsA%2BJ%2B3TykOjdwzi%2FYKLjETFgPNUSVmNHzUaLuZE9GULMxj%2FSszK2O8ZIn14iU2ubfjrYRN74E6%2BL%2F3rXubxtrxgITwIuyqh1jxmbIV%2Ft4lfgeN%2BOLv8tf9sispbD6LZ7P4Sc3i0RI1zJABaSL&X-Amz-Signature=f94716c7a886df2a3f8bfcd305c4548642f8d4ae618e0c5be6127fc2ed17a413&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGY57TK7%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuJgxzdOtJqLBF2QHNgbkTINciJUd6iRAWYkHMQt9CngIhALI8PH1PP2j4Mv4YXTPCDWvN1TQgfAuiiv7z0mcpdcmzKv8DCDsQABoMNjM3NDIzMTgzODA1IgzDqIdpHCbWBlRVpnQq3AO1MmxjzAzQaverMUnOsRstDHvru27eoDluwaa3ZoxBsYvG45vS4GSMs88qo3zG75V6zeuIiYWx32qF4z%2F5%2BvsBJ2Pace9cpnm%2FiGGXGGElKNOc0Jb4Rt1DvuDesNAw%2FhR8AmM4aiJk%2FjyGMxRnMT5Npx5GCjwTBuuhSLT0sewf3f7AWW%2FJa80bJP3swtj4X7VHhkGf98ABIoB8Epj6Fqdo%2FfvrlWzxt8PWJrENFAbqRel3VTR9eAhjoUpUyHMpl%2BQ5RvXnZv4B31KrAR%2Fl%2B%2B%2Fkbo4wDjXw%2B3vRIaHe51vdzNTI2hewxffnWKWXVT5j5wcvJ3yaEDMgQ0TMCKtRv6pYEgp%2Bmpg53gRR1v5lgVJd6O%2FRDgHPClJKyejIEn5ej4gXMujsG6W474MtR2bfVjsuWwod7jLYW6s0nS%2Bj5YCjAMRVZ1CiVvoy6PaziRvjrZLI%2Bo%2Bdu1jlJx9wU6g8W%2BgouS4QW6CC1o%2F7eVF6SXvKU57KobutZ%2FUN73ePigCBFjA8FyteqWEBZn2F52cJr2YXBkz3VuQY%2FAsu8yG%2BwA7uGEEjAbf4iSUIuIKgqaYmHeG%2Bw48xFrv%2Ba9Jb6zoAu6ot1dixqLU%2F9zf7iwBJVlRpXsBSaDJH280xN9VEbDC%2Bi%2FXEBjqkAZSSaTqrhoNysVyVn7bIY9t%2FQH%2Brhe8Wrz7TfOdPEIGcZJK7LtC3EF69cHHRnidbzJzmoKUjTYPsA%2BJ%2B3TykOjdwzi%2FYKLjETFgPNUSVmNHzUaLuZE9GULMxj%2FSszK2O8ZIn14iU2ubfjrYRN74E6%2BL%2F3rXubxtrxgITwIuyqh1jxmbIV%2Ft4lfgeN%2BOLv8tf9sispbD6LZ7P4Sc3i0RI1zJABaSL&X-Amz-Signature=1570f3fe63d76b24e66c27edc9e18cbb4a19f06dfee5da87c2129dd5f1df5003&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGY57TK7%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuJgxzdOtJqLBF2QHNgbkTINciJUd6iRAWYkHMQt9CngIhALI8PH1PP2j4Mv4YXTPCDWvN1TQgfAuiiv7z0mcpdcmzKv8DCDsQABoMNjM3NDIzMTgzODA1IgzDqIdpHCbWBlRVpnQq3AO1MmxjzAzQaverMUnOsRstDHvru27eoDluwaa3ZoxBsYvG45vS4GSMs88qo3zG75V6zeuIiYWx32qF4z%2F5%2BvsBJ2Pace9cpnm%2FiGGXGGElKNOc0Jb4Rt1DvuDesNAw%2FhR8AmM4aiJk%2FjyGMxRnMT5Npx5GCjwTBuuhSLT0sewf3f7AWW%2FJa80bJP3swtj4X7VHhkGf98ABIoB8Epj6Fqdo%2FfvrlWzxt8PWJrENFAbqRel3VTR9eAhjoUpUyHMpl%2BQ5RvXnZv4B31KrAR%2Fl%2B%2B%2Fkbo4wDjXw%2B3vRIaHe51vdzNTI2hewxffnWKWXVT5j5wcvJ3yaEDMgQ0TMCKtRv6pYEgp%2Bmpg53gRR1v5lgVJd6O%2FRDgHPClJKyejIEn5ej4gXMujsG6W474MtR2bfVjsuWwod7jLYW6s0nS%2Bj5YCjAMRVZ1CiVvoy6PaziRvjrZLI%2Bo%2Bdu1jlJx9wU6g8W%2BgouS4QW6CC1o%2F7eVF6SXvKU57KobutZ%2FUN73ePigCBFjA8FyteqWEBZn2F52cJr2YXBkz3VuQY%2FAsu8yG%2BwA7uGEEjAbf4iSUIuIKgqaYmHeG%2Bw48xFrv%2Ba9Jb6zoAu6ot1dixqLU%2F9zf7iwBJVlRpXsBSaDJH280xN9VEbDC%2Bi%2FXEBjqkAZSSaTqrhoNysVyVn7bIY9t%2FQH%2Brhe8Wrz7TfOdPEIGcZJK7LtC3EF69cHHRnidbzJzmoKUjTYPsA%2BJ%2B3TykOjdwzi%2FYKLjETFgPNUSVmNHzUaLuZE9GULMxj%2FSszK2O8ZIn14iU2ubfjrYRN74E6%2BL%2F3rXubxtrxgITwIuyqh1jxmbIV%2Ft4lfgeN%2BOLv8tf9sispbD6LZ7P4Sc3i0RI1zJABaSL&X-Amz-Signature=0e4f85065018907622597547c5388cfeb508745db5c152e313b129166943ee54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGY57TK7%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuJgxzdOtJqLBF2QHNgbkTINciJUd6iRAWYkHMQt9CngIhALI8PH1PP2j4Mv4YXTPCDWvN1TQgfAuiiv7z0mcpdcmzKv8DCDsQABoMNjM3NDIzMTgzODA1IgzDqIdpHCbWBlRVpnQq3AO1MmxjzAzQaverMUnOsRstDHvru27eoDluwaa3ZoxBsYvG45vS4GSMs88qo3zG75V6zeuIiYWx32qF4z%2F5%2BvsBJ2Pace9cpnm%2FiGGXGGElKNOc0Jb4Rt1DvuDesNAw%2FhR8AmM4aiJk%2FjyGMxRnMT5Npx5GCjwTBuuhSLT0sewf3f7AWW%2FJa80bJP3swtj4X7VHhkGf98ABIoB8Epj6Fqdo%2FfvrlWzxt8PWJrENFAbqRel3VTR9eAhjoUpUyHMpl%2BQ5RvXnZv4B31KrAR%2Fl%2B%2B%2Fkbo4wDjXw%2B3vRIaHe51vdzNTI2hewxffnWKWXVT5j5wcvJ3yaEDMgQ0TMCKtRv6pYEgp%2Bmpg53gRR1v5lgVJd6O%2FRDgHPClJKyejIEn5ej4gXMujsG6W474MtR2bfVjsuWwod7jLYW6s0nS%2Bj5YCjAMRVZ1CiVvoy6PaziRvjrZLI%2Bo%2Bdu1jlJx9wU6g8W%2BgouS4QW6CC1o%2F7eVF6SXvKU57KobutZ%2FUN73ePigCBFjA8FyteqWEBZn2F52cJr2YXBkz3VuQY%2FAsu8yG%2BwA7uGEEjAbf4iSUIuIKgqaYmHeG%2Bw48xFrv%2Ba9Jb6zoAu6ot1dixqLU%2F9zf7iwBJVlRpXsBSaDJH280xN9VEbDC%2Bi%2FXEBjqkAZSSaTqrhoNysVyVn7bIY9t%2FQH%2Brhe8Wrz7TfOdPEIGcZJK7LtC3EF69cHHRnidbzJzmoKUjTYPsA%2BJ%2B3TykOjdwzi%2FYKLjETFgPNUSVmNHzUaLuZE9GULMxj%2FSszK2O8ZIn14iU2ubfjrYRN74E6%2BL%2F3rXubxtrxgITwIuyqh1jxmbIV%2Ft4lfgeN%2BOLv8tf9sispbD6LZ7P4Sc3i0RI1zJABaSL&X-Amz-Signature=76384fd971087fae95a207c5b90466df37e7ffd87c0de23d6d9749ea65b48520&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGY57TK7%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuJgxzdOtJqLBF2QHNgbkTINciJUd6iRAWYkHMQt9CngIhALI8PH1PP2j4Mv4YXTPCDWvN1TQgfAuiiv7z0mcpdcmzKv8DCDsQABoMNjM3NDIzMTgzODA1IgzDqIdpHCbWBlRVpnQq3AO1MmxjzAzQaverMUnOsRstDHvru27eoDluwaa3ZoxBsYvG45vS4GSMs88qo3zG75V6zeuIiYWx32qF4z%2F5%2BvsBJ2Pace9cpnm%2FiGGXGGElKNOc0Jb4Rt1DvuDesNAw%2FhR8AmM4aiJk%2FjyGMxRnMT5Npx5GCjwTBuuhSLT0sewf3f7AWW%2FJa80bJP3swtj4X7VHhkGf98ABIoB8Epj6Fqdo%2FfvrlWzxt8PWJrENFAbqRel3VTR9eAhjoUpUyHMpl%2BQ5RvXnZv4B31KrAR%2Fl%2B%2B%2Fkbo4wDjXw%2B3vRIaHe51vdzNTI2hewxffnWKWXVT5j5wcvJ3yaEDMgQ0TMCKtRv6pYEgp%2Bmpg53gRR1v5lgVJd6O%2FRDgHPClJKyejIEn5ej4gXMujsG6W474MtR2bfVjsuWwod7jLYW6s0nS%2Bj5YCjAMRVZ1CiVvoy6PaziRvjrZLI%2Bo%2Bdu1jlJx9wU6g8W%2BgouS4QW6CC1o%2F7eVF6SXvKU57KobutZ%2FUN73ePigCBFjA8FyteqWEBZn2F52cJr2YXBkz3VuQY%2FAsu8yG%2BwA7uGEEjAbf4iSUIuIKgqaYmHeG%2Bw48xFrv%2Ba9Jb6zoAu6ot1dixqLU%2F9zf7iwBJVlRpXsBSaDJH280xN9VEbDC%2Bi%2FXEBjqkAZSSaTqrhoNysVyVn7bIY9t%2FQH%2Brhe8Wrz7TfOdPEIGcZJK7LtC3EF69cHHRnidbzJzmoKUjTYPsA%2BJ%2B3TykOjdwzi%2FYKLjETFgPNUSVmNHzUaLuZE9GULMxj%2FSszK2O8ZIn14iU2ubfjrYRN74E6%2BL%2F3rXubxtrxgITwIuyqh1jxmbIV%2Ft4lfgeN%2BOLv8tf9sispbD6LZ7P4Sc3i0RI1zJABaSL&X-Amz-Signature=5e9776f557b2a2005bc8eff2e26bfd4ee5f113e13943ab11c0c2b042f38516c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGY57TK7%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuJgxzdOtJqLBF2QHNgbkTINciJUd6iRAWYkHMQt9CngIhALI8PH1PP2j4Mv4YXTPCDWvN1TQgfAuiiv7z0mcpdcmzKv8DCDsQABoMNjM3NDIzMTgzODA1IgzDqIdpHCbWBlRVpnQq3AO1MmxjzAzQaverMUnOsRstDHvru27eoDluwaa3ZoxBsYvG45vS4GSMs88qo3zG75V6zeuIiYWx32qF4z%2F5%2BvsBJ2Pace9cpnm%2FiGGXGGElKNOc0Jb4Rt1DvuDesNAw%2FhR8AmM4aiJk%2FjyGMxRnMT5Npx5GCjwTBuuhSLT0sewf3f7AWW%2FJa80bJP3swtj4X7VHhkGf98ABIoB8Epj6Fqdo%2FfvrlWzxt8PWJrENFAbqRel3VTR9eAhjoUpUyHMpl%2BQ5RvXnZv4B31KrAR%2Fl%2B%2B%2Fkbo4wDjXw%2B3vRIaHe51vdzNTI2hewxffnWKWXVT5j5wcvJ3yaEDMgQ0TMCKtRv6pYEgp%2Bmpg53gRR1v5lgVJd6O%2FRDgHPClJKyejIEn5ej4gXMujsG6W474MtR2bfVjsuWwod7jLYW6s0nS%2Bj5YCjAMRVZ1CiVvoy6PaziRvjrZLI%2Bo%2Bdu1jlJx9wU6g8W%2BgouS4QW6CC1o%2F7eVF6SXvKU57KobutZ%2FUN73ePigCBFjA8FyteqWEBZn2F52cJr2YXBkz3VuQY%2FAsu8yG%2BwA7uGEEjAbf4iSUIuIKgqaYmHeG%2Bw48xFrv%2Ba9Jb6zoAu6ot1dixqLU%2F9zf7iwBJVlRpXsBSaDJH280xN9VEbDC%2Bi%2FXEBjqkAZSSaTqrhoNysVyVn7bIY9t%2FQH%2Brhe8Wrz7TfOdPEIGcZJK7LtC3EF69cHHRnidbzJzmoKUjTYPsA%2BJ%2B3TykOjdwzi%2FYKLjETFgPNUSVmNHzUaLuZE9GULMxj%2FSszK2O8ZIn14iU2ubfjrYRN74E6%2BL%2F3rXubxtrxgITwIuyqh1jxmbIV%2Ft4lfgeN%2BOLv8tf9sispbD6LZ7P4Sc3i0RI1zJABaSL&X-Amz-Signature=1bbf2be7ad863b4e88d63fdf87219a23dfb68c0c4ac691c3efb7f9b8d973ee96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGY57TK7%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuJgxzdOtJqLBF2QHNgbkTINciJUd6iRAWYkHMQt9CngIhALI8PH1PP2j4Mv4YXTPCDWvN1TQgfAuiiv7z0mcpdcmzKv8DCDsQABoMNjM3NDIzMTgzODA1IgzDqIdpHCbWBlRVpnQq3AO1MmxjzAzQaverMUnOsRstDHvru27eoDluwaa3ZoxBsYvG45vS4GSMs88qo3zG75V6zeuIiYWx32qF4z%2F5%2BvsBJ2Pace9cpnm%2FiGGXGGElKNOc0Jb4Rt1DvuDesNAw%2FhR8AmM4aiJk%2FjyGMxRnMT5Npx5GCjwTBuuhSLT0sewf3f7AWW%2FJa80bJP3swtj4X7VHhkGf98ABIoB8Epj6Fqdo%2FfvrlWzxt8PWJrENFAbqRel3VTR9eAhjoUpUyHMpl%2BQ5RvXnZv4B31KrAR%2Fl%2B%2B%2Fkbo4wDjXw%2B3vRIaHe51vdzNTI2hewxffnWKWXVT5j5wcvJ3yaEDMgQ0TMCKtRv6pYEgp%2Bmpg53gRR1v5lgVJd6O%2FRDgHPClJKyejIEn5ej4gXMujsG6W474MtR2bfVjsuWwod7jLYW6s0nS%2Bj5YCjAMRVZ1CiVvoy6PaziRvjrZLI%2Bo%2Bdu1jlJx9wU6g8W%2BgouS4QW6CC1o%2F7eVF6SXvKU57KobutZ%2FUN73ePigCBFjA8FyteqWEBZn2F52cJr2YXBkz3VuQY%2FAsu8yG%2BwA7uGEEjAbf4iSUIuIKgqaYmHeG%2Bw48xFrv%2Ba9Jb6zoAu6ot1dixqLU%2F9zf7iwBJVlRpXsBSaDJH280xN9VEbDC%2Bi%2FXEBjqkAZSSaTqrhoNysVyVn7bIY9t%2FQH%2Brhe8Wrz7TfOdPEIGcZJK7LtC3EF69cHHRnidbzJzmoKUjTYPsA%2BJ%2B3TykOjdwzi%2FYKLjETFgPNUSVmNHzUaLuZE9GULMxj%2FSszK2O8ZIn14iU2ubfjrYRN74E6%2BL%2F3rXubxtrxgITwIuyqh1jxmbIV%2Ft4lfgeN%2BOLv8tf9sispbD6LZ7P4Sc3i0RI1zJABaSL&X-Amz-Signature=f94716c7a886df2a3f8bfcd305c4548642f8d4ae618e0c5be6127fc2ed17a413&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
