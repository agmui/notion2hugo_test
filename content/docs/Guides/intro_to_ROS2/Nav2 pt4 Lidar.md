---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-07-30T06:25:00.000Z"
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

```xml

  <link name="lidar_link">
    <inertial>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <mass value="0.125"/>
      <inertia ixx="0.001" ixy="0" ixz="0" iyy="0.001" iyz="0" izz="0.001" />
    </inertial>

    <collision>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </collision>

    <visual>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </visual>

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJLGVXGM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnw6is8SkmF%2FLNG0l8gu3QjSvMXPfbdZFatAzQ5Q0zZAiBDFm%2BeRHG3iKkGxmwYkezXSJHq%2Fw8ZXDRaHh5itjBdgiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPegfut1Ks41YnyRlKtwDqiLwVmZtSrCdUw48FbkDKgecwLzwSoJlghVQamUMG0LSDmPjIRMjKlcvpbWAKL8SwQdvdDmTzgHoptJRn%2FXfuxh67%2BIkjbK%2FhUPntA52sjmWdQGI%2B%2FQNnF4lySk9FnaFuwBc74Aqmd1GaiH0%2BFVTH9BuYwe%2Ffb7KmiKQTtMfkkMi7nYMCTWhtqe7mTObZCVnfjQ0dDtUiQkJu6rmHA%2F8VvNR1ydb9SH1OxkGC%2F8zgNuzlbNmmjz6N8MGmMQagWLwcIvvGsZ0pRtWsyTAq1JBb5DtVjpaqZtDssCUJOYrGucgByAkxmHCQUAXgxTFI7RZ4jo%2Bo3jlHNsj8UIn2xlCctE4jE17KFoHf7Kulp%2Bn1cV39TSnhP4Wu%2BQx3yPFtuTkd21esU4%2FUepgzAxX%2BedMbX3MsaCy%2Bu3vXht4Krvjn0MMlP%2BSVDosCAcd9LrFIAsw5CfvVOqD5m%2F5xoHkWh2%2FWHqfb8bjvjeEyx0g2TvqeyBqkt1EWWl5k2F1%2Bbny1x9QTynTLnBvWDTzU4uqqcrKtAHFzo4%2BJ%2Bgn88AxHRuUXclQjT4b6WKY0r8Mup7fuIZq4NlwqY2jYpsJC%2FxSVdIq3IlWoKRUXZCDr2QWtUQ%2BDnkxb3wIJYVAuPuRUAowouqtxAY6pgEooG3KBoYoG16PSyJ46pHEOwSaGRaz0AeqIic5wQGaKHDNEf6LmB6X9YAA0CklBoI%2Fp2fvx6bx3sH6q2JXV2JvAxjEEjqTH3OrjRlFMEjP2d8E7UzH0H9b%2Bipb9WkrIKo1ujs4Qbtr1lXx6X8n6AKXCJ1dbdvwQ5hroHBbqLF5%2FY7HSnDgoUfZ3ikdLWUzGJy6vgMJ2gbqtwxePus7pbP5BC63C9cG&X-Amz-Signature=5b11fb762d762248f7eebca319483fbcde84601ed1f493b68a3be6fdb48dedf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJLGVXGM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnw6is8SkmF%2FLNG0l8gu3QjSvMXPfbdZFatAzQ5Q0zZAiBDFm%2BeRHG3iKkGxmwYkezXSJHq%2Fw8ZXDRaHh5itjBdgiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPegfut1Ks41YnyRlKtwDqiLwVmZtSrCdUw48FbkDKgecwLzwSoJlghVQamUMG0LSDmPjIRMjKlcvpbWAKL8SwQdvdDmTzgHoptJRn%2FXfuxh67%2BIkjbK%2FhUPntA52sjmWdQGI%2B%2FQNnF4lySk9FnaFuwBc74Aqmd1GaiH0%2BFVTH9BuYwe%2Ffb7KmiKQTtMfkkMi7nYMCTWhtqe7mTObZCVnfjQ0dDtUiQkJu6rmHA%2F8VvNR1ydb9SH1OxkGC%2F8zgNuzlbNmmjz6N8MGmMQagWLwcIvvGsZ0pRtWsyTAq1JBb5DtVjpaqZtDssCUJOYrGucgByAkxmHCQUAXgxTFI7RZ4jo%2Bo3jlHNsj8UIn2xlCctE4jE17KFoHf7Kulp%2Bn1cV39TSnhP4Wu%2BQx3yPFtuTkd21esU4%2FUepgzAxX%2BedMbX3MsaCy%2Bu3vXht4Krvjn0MMlP%2BSVDosCAcd9LrFIAsw5CfvVOqD5m%2F5xoHkWh2%2FWHqfb8bjvjeEyx0g2TvqeyBqkt1EWWl5k2F1%2Bbny1x9QTynTLnBvWDTzU4uqqcrKtAHFzo4%2BJ%2Bgn88AxHRuUXclQjT4b6WKY0r8Mup7fuIZq4NlwqY2jYpsJC%2FxSVdIq3IlWoKRUXZCDr2QWtUQ%2BDnkxb3wIJYVAuPuRUAowouqtxAY6pgEooG3KBoYoG16PSyJ46pHEOwSaGRaz0AeqIic5wQGaKHDNEf6LmB6X9YAA0CklBoI%2Fp2fvx6bx3sH6q2JXV2JvAxjEEjqTH3OrjRlFMEjP2d8E7UzH0H9b%2Bipb9WkrIKo1ujs4Qbtr1lXx6X8n6AKXCJ1dbdvwQ5hroHBbqLF5%2FY7HSnDgoUfZ3ikdLWUzGJy6vgMJ2gbqtwxePus7pbP5BC63C9cG&X-Amz-Signature=eee344b2147b777f4789eb0e09132aef69b31210a377b4546176439790f4a2c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJLGVXGM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnw6is8SkmF%2FLNG0l8gu3QjSvMXPfbdZFatAzQ5Q0zZAiBDFm%2BeRHG3iKkGxmwYkezXSJHq%2Fw8ZXDRaHh5itjBdgiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPegfut1Ks41YnyRlKtwDqiLwVmZtSrCdUw48FbkDKgecwLzwSoJlghVQamUMG0LSDmPjIRMjKlcvpbWAKL8SwQdvdDmTzgHoptJRn%2FXfuxh67%2BIkjbK%2FhUPntA52sjmWdQGI%2B%2FQNnF4lySk9FnaFuwBc74Aqmd1GaiH0%2BFVTH9BuYwe%2Ffb7KmiKQTtMfkkMi7nYMCTWhtqe7mTObZCVnfjQ0dDtUiQkJu6rmHA%2F8VvNR1ydb9SH1OxkGC%2F8zgNuzlbNmmjz6N8MGmMQagWLwcIvvGsZ0pRtWsyTAq1JBb5DtVjpaqZtDssCUJOYrGucgByAkxmHCQUAXgxTFI7RZ4jo%2Bo3jlHNsj8UIn2xlCctE4jE17KFoHf7Kulp%2Bn1cV39TSnhP4Wu%2BQx3yPFtuTkd21esU4%2FUepgzAxX%2BedMbX3MsaCy%2Bu3vXht4Krvjn0MMlP%2BSVDosCAcd9LrFIAsw5CfvVOqD5m%2F5xoHkWh2%2FWHqfb8bjvjeEyx0g2TvqeyBqkt1EWWl5k2F1%2Bbny1x9QTynTLnBvWDTzU4uqqcrKtAHFzo4%2BJ%2Bgn88AxHRuUXclQjT4b6WKY0r8Mup7fuIZq4NlwqY2jYpsJC%2FxSVdIq3IlWoKRUXZCDr2QWtUQ%2BDnkxb3wIJYVAuPuRUAowouqtxAY6pgEooG3KBoYoG16PSyJ46pHEOwSaGRaz0AeqIic5wQGaKHDNEf6LmB6X9YAA0CklBoI%2Fp2fvx6bx3sH6q2JXV2JvAxjEEjqTH3OrjRlFMEjP2d8E7UzH0H9b%2Bipb9WkrIKo1ujs4Qbtr1lXx6X8n6AKXCJ1dbdvwQ5hroHBbqLF5%2FY7HSnDgoUfZ3ikdLWUzGJy6vgMJ2gbqtwxePus7pbP5BC63C9cG&X-Amz-Signature=2a1c73050b5bdce5852be570f5709394659c4329ab27cd93ad06a5868a0caee3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJLGVXGM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnw6is8SkmF%2FLNG0l8gu3QjSvMXPfbdZFatAzQ5Q0zZAiBDFm%2BeRHG3iKkGxmwYkezXSJHq%2Fw8ZXDRaHh5itjBdgiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPegfut1Ks41YnyRlKtwDqiLwVmZtSrCdUw48FbkDKgecwLzwSoJlghVQamUMG0LSDmPjIRMjKlcvpbWAKL8SwQdvdDmTzgHoptJRn%2FXfuxh67%2BIkjbK%2FhUPntA52sjmWdQGI%2B%2FQNnF4lySk9FnaFuwBc74Aqmd1GaiH0%2BFVTH9BuYwe%2Ffb7KmiKQTtMfkkMi7nYMCTWhtqe7mTObZCVnfjQ0dDtUiQkJu6rmHA%2F8VvNR1ydb9SH1OxkGC%2F8zgNuzlbNmmjz6N8MGmMQagWLwcIvvGsZ0pRtWsyTAq1JBb5DtVjpaqZtDssCUJOYrGucgByAkxmHCQUAXgxTFI7RZ4jo%2Bo3jlHNsj8UIn2xlCctE4jE17KFoHf7Kulp%2Bn1cV39TSnhP4Wu%2BQx3yPFtuTkd21esU4%2FUepgzAxX%2BedMbX3MsaCy%2Bu3vXht4Krvjn0MMlP%2BSVDosCAcd9LrFIAsw5CfvVOqD5m%2F5xoHkWh2%2FWHqfb8bjvjeEyx0g2TvqeyBqkt1EWWl5k2F1%2Bbny1x9QTynTLnBvWDTzU4uqqcrKtAHFzo4%2BJ%2Bgn88AxHRuUXclQjT4b6WKY0r8Mup7fuIZq4NlwqY2jYpsJC%2FxSVdIq3IlWoKRUXZCDr2QWtUQ%2BDnkxb3wIJYVAuPuRUAowouqtxAY6pgEooG3KBoYoG16PSyJ46pHEOwSaGRaz0AeqIic5wQGaKHDNEf6LmB6X9YAA0CklBoI%2Fp2fvx6bx3sH6q2JXV2JvAxjEEjqTH3OrjRlFMEjP2d8E7UzH0H9b%2Bipb9WkrIKo1ujs4Qbtr1lXx6X8n6AKXCJ1dbdvwQ5hroHBbqLF5%2FY7HSnDgoUfZ3ikdLWUzGJy6vgMJ2gbqtwxePus7pbP5BC63C9cG&X-Amz-Signature=9e8687b13c42c5eb9f326745a0f821320094fcb570e9eb5db9fdbee46b181a72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJLGVXGM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnw6is8SkmF%2FLNG0l8gu3QjSvMXPfbdZFatAzQ5Q0zZAiBDFm%2BeRHG3iKkGxmwYkezXSJHq%2Fw8ZXDRaHh5itjBdgiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPegfut1Ks41YnyRlKtwDqiLwVmZtSrCdUw48FbkDKgecwLzwSoJlghVQamUMG0LSDmPjIRMjKlcvpbWAKL8SwQdvdDmTzgHoptJRn%2FXfuxh67%2BIkjbK%2FhUPntA52sjmWdQGI%2B%2FQNnF4lySk9FnaFuwBc74Aqmd1GaiH0%2BFVTH9BuYwe%2Ffb7KmiKQTtMfkkMi7nYMCTWhtqe7mTObZCVnfjQ0dDtUiQkJu6rmHA%2F8VvNR1ydb9SH1OxkGC%2F8zgNuzlbNmmjz6N8MGmMQagWLwcIvvGsZ0pRtWsyTAq1JBb5DtVjpaqZtDssCUJOYrGucgByAkxmHCQUAXgxTFI7RZ4jo%2Bo3jlHNsj8UIn2xlCctE4jE17KFoHf7Kulp%2Bn1cV39TSnhP4Wu%2BQx3yPFtuTkd21esU4%2FUepgzAxX%2BedMbX3MsaCy%2Bu3vXht4Krvjn0MMlP%2BSVDosCAcd9LrFIAsw5CfvVOqD5m%2F5xoHkWh2%2FWHqfb8bjvjeEyx0g2TvqeyBqkt1EWWl5k2F1%2Bbny1x9QTynTLnBvWDTzU4uqqcrKtAHFzo4%2BJ%2Bgn88AxHRuUXclQjT4b6WKY0r8Mup7fuIZq4NlwqY2jYpsJC%2FxSVdIq3IlWoKRUXZCDr2QWtUQ%2BDnkxb3wIJYVAuPuRUAowouqtxAY6pgEooG3KBoYoG16PSyJ46pHEOwSaGRaz0AeqIic5wQGaKHDNEf6LmB6X9YAA0CklBoI%2Fp2fvx6bx3sH6q2JXV2JvAxjEEjqTH3OrjRlFMEjP2d8E7UzH0H9b%2Bipb9WkrIKo1ujs4Qbtr1lXx6X8n6AKXCJ1dbdvwQ5hroHBbqLF5%2FY7HSnDgoUfZ3ikdLWUzGJy6vgMJ2gbqtwxePus7pbP5BC63C9cG&X-Amz-Signature=8c7da81b8c624325166d59b156c5711d67e7cc22dc79b56e3240f6bc453d7f10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJLGVXGM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnw6is8SkmF%2FLNG0l8gu3QjSvMXPfbdZFatAzQ5Q0zZAiBDFm%2BeRHG3iKkGxmwYkezXSJHq%2Fw8ZXDRaHh5itjBdgiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPegfut1Ks41YnyRlKtwDqiLwVmZtSrCdUw48FbkDKgecwLzwSoJlghVQamUMG0LSDmPjIRMjKlcvpbWAKL8SwQdvdDmTzgHoptJRn%2FXfuxh67%2BIkjbK%2FhUPntA52sjmWdQGI%2B%2FQNnF4lySk9FnaFuwBc74Aqmd1GaiH0%2BFVTH9BuYwe%2Ffb7KmiKQTtMfkkMi7nYMCTWhtqe7mTObZCVnfjQ0dDtUiQkJu6rmHA%2F8VvNR1ydb9SH1OxkGC%2F8zgNuzlbNmmjz6N8MGmMQagWLwcIvvGsZ0pRtWsyTAq1JBb5DtVjpaqZtDssCUJOYrGucgByAkxmHCQUAXgxTFI7RZ4jo%2Bo3jlHNsj8UIn2xlCctE4jE17KFoHf7Kulp%2Bn1cV39TSnhP4Wu%2BQx3yPFtuTkd21esU4%2FUepgzAxX%2BedMbX3MsaCy%2Bu3vXht4Krvjn0MMlP%2BSVDosCAcd9LrFIAsw5CfvVOqD5m%2F5xoHkWh2%2FWHqfb8bjvjeEyx0g2TvqeyBqkt1EWWl5k2F1%2Bbny1x9QTynTLnBvWDTzU4uqqcrKtAHFzo4%2BJ%2Bgn88AxHRuUXclQjT4b6WKY0r8Mup7fuIZq4NlwqY2jYpsJC%2FxSVdIq3IlWoKRUXZCDr2QWtUQ%2BDnkxb3wIJYVAuPuRUAowouqtxAY6pgEooG3KBoYoG16PSyJ46pHEOwSaGRaz0AeqIic5wQGaKHDNEf6LmB6X9YAA0CklBoI%2Fp2fvx6bx3sH6q2JXV2JvAxjEEjqTH3OrjRlFMEjP2d8E7UzH0H9b%2Bipb9WkrIKo1ujs4Qbtr1lXx6X8n6AKXCJ1dbdvwQ5hroHBbqLF5%2FY7HSnDgoUfZ3ikdLWUzGJy6vgMJ2gbqtwxePus7pbP5BC63C9cG&X-Amz-Signature=767ae25179f74990b8df94768e62c4085bb3619c6860488e8e0ce6c4e85c1c47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJLGVXGM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnw6is8SkmF%2FLNG0l8gu3QjSvMXPfbdZFatAzQ5Q0zZAiBDFm%2BeRHG3iKkGxmwYkezXSJHq%2Fw8ZXDRaHh5itjBdgiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPegfut1Ks41YnyRlKtwDqiLwVmZtSrCdUw48FbkDKgecwLzwSoJlghVQamUMG0LSDmPjIRMjKlcvpbWAKL8SwQdvdDmTzgHoptJRn%2FXfuxh67%2BIkjbK%2FhUPntA52sjmWdQGI%2B%2FQNnF4lySk9FnaFuwBc74Aqmd1GaiH0%2BFVTH9BuYwe%2Ffb7KmiKQTtMfkkMi7nYMCTWhtqe7mTObZCVnfjQ0dDtUiQkJu6rmHA%2F8VvNR1ydb9SH1OxkGC%2F8zgNuzlbNmmjz6N8MGmMQagWLwcIvvGsZ0pRtWsyTAq1JBb5DtVjpaqZtDssCUJOYrGucgByAkxmHCQUAXgxTFI7RZ4jo%2Bo3jlHNsj8UIn2xlCctE4jE17KFoHf7Kulp%2Bn1cV39TSnhP4Wu%2BQx3yPFtuTkd21esU4%2FUepgzAxX%2BedMbX3MsaCy%2Bu3vXht4Krvjn0MMlP%2BSVDosCAcd9LrFIAsw5CfvVOqD5m%2F5xoHkWh2%2FWHqfb8bjvjeEyx0g2TvqeyBqkt1EWWl5k2F1%2Bbny1x9QTynTLnBvWDTzU4uqqcrKtAHFzo4%2BJ%2Bgn88AxHRuUXclQjT4b6WKY0r8Mup7fuIZq4NlwqY2jYpsJC%2FxSVdIq3IlWoKRUXZCDr2QWtUQ%2BDnkxb3wIJYVAuPuRUAowouqtxAY6pgEooG3KBoYoG16PSyJ46pHEOwSaGRaz0AeqIic5wQGaKHDNEf6LmB6X9YAA0CklBoI%2Fp2fvx6bx3sH6q2JXV2JvAxjEEjqTH3OrjRlFMEjP2d8E7UzH0H9b%2Bipb9WkrIKo1ujs4Qbtr1lXx6X8n6AKXCJ1dbdvwQ5hroHBbqLF5%2FY7HSnDgoUfZ3ikdLWUzGJy6vgMJ2gbqtwxePus7pbP5BC63C9cG&X-Amz-Signature=187f890a7b999fedfbba1a4edbb89d2b5943667c7f61eb05d31b27c26000dd96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJLGVXGM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnw6is8SkmF%2FLNG0l8gu3QjSvMXPfbdZFatAzQ5Q0zZAiBDFm%2BeRHG3iKkGxmwYkezXSJHq%2Fw8ZXDRaHh5itjBdgiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPegfut1Ks41YnyRlKtwDqiLwVmZtSrCdUw48FbkDKgecwLzwSoJlghVQamUMG0LSDmPjIRMjKlcvpbWAKL8SwQdvdDmTzgHoptJRn%2FXfuxh67%2BIkjbK%2FhUPntA52sjmWdQGI%2B%2FQNnF4lySk9FnaFuwBc74Aqmd1GaiH0%2BFVTH9BuYwe%2Ffb7KmiKQTtMfkkMi7nYMCTWhtqe7mTObZCVnfjQ0dDtUiQkJu6rmHA%2F8VvNR1ydb9SH1OxkGC%2F8zgNuzlbNmmjz6N8MGmMQagWLwcIvvGsZ0pRtWsyTAq1JBb5DtVjpaqZtDssCUJOYrGucgByAkxmHCQUAXgxTFI7RZ4jo%2Bo3jlHNsj8UIn2xlCctE4jE17KFoHf7Kulp%2Bn1cV39TSnhP4Wu%2BQx3yPFtuTkd21esU4%2FUepgzAxX%2BedMbX3MsaCy%2Bu3vXht4Krvjn0MMlP%2BSVDosCAcd9LrFIAsw5CfvVOqD5m%2F5xoHkWh2%2FWHqfb8bjvjeEyx0g2TvqeyBqkt1EWWl5k2F1%2Bbny1x9QTynTLnBvWDTzU4uqqcrKtAHFzo4%2BJ%2Bgn88AxHRuUXclQjT4b6WKY0r8Mup7fuIZq4NlwqY2jYpsJC%2FxSVdIq3IlWoKRUXZCDr2QWtUQ%2BDnkxb3wIJYVAuPuRUAowouqtxAY6pgEooG3KBoYoG16PSyJ46pHEOwSaGRaz0AeqIic5wQGaKHDNEf6LmB6X9YAA0CklBoI%2Fp2fvx6bx3sH6q2JXV2JvAxjEEjqTH3OrjRlFMEjP2d8E7UzH0H9b%2Bipb9WkrIKo1ujs4Qbtr1lXx6X8n6AKXCJ1dbdvwQ5hroHBbqLF5%2FY7HSnDgoUfZ3ikdLWUzGJy6vgMJ2gbqtwxePus7pbP5BC63C9cG&X-Amz-Signature=c787e4a6edb98ec4c0fe299cbd307e1f3e6da4679f650af863b4b11a92993947&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: get official docs link

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJLGVXGM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnw6is8SkmF%2FLNG0l8gu3QjSvMXPfbdZFatAzQ5Q0zZAiBDFm%2BeRHG3iKkGxmwYkezXSJHq%2Fw8ZXDRaHh5itjBdgiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPegfut1Ks41YnyRlKtwDqiLwVmZtSrCdUw48FbkDKgecwLzwSoJlghVQamUMG0LSDmPjIRMjKlcvpbWAKL8SwQdvdDmTzgHoptJRn%2FXfuxh67%2BIkjbK%2FhUPntA52sjmWdQGI%2B%2FQNnF4lySk9FnaFuwBc74Aqmd1GaiH0%2BFVTH9BuYwe%2Ffb7KmiKQTtMfkkMi7nYMCTWhtqe7mTObZCVnfjQ0dDtUiQkJu6rmHA%2F8VvNR1ydb9SH1OxkGC%2F8zgNuzlbNmmjz6N8MGmMQagWLwcIvvGsZ0pRtWsyTAq1JBb5DtVjpaqZtDssCUJOYrGucgByAkxmHCQUAXgxTFI7RZ4jo%2Bo3jlHNsj8UIn2xlCctE4jE17KFoHf7Kulp%2Bn1cV39TSnhP4Wu%2BQx3yPFtuTkd21esU4%2FUepgzAxX%2BedMbX3MsaCy%2Bu3vXht4Krvjn0MMlP%2BSVDosCAcd9LrFIAsw5CfvVOqD5m%2F5xoHkWh2%2FWHqfb8bjvjeEyx0g2TvqeyBqkt1EWWl5k2F1%2Bbny1x9QTynTLnBvWDTzU4uqqcrKtAHFzo4%2BJ%2Bgn88AxHRuUXclQjT4b6WKY0r8Mup7fuIZq4NlwqY2jYpsJC%2FxSVdIq3IlWoKRUXZCDr2QWtUQ%2BDnkxb3wIJYVAuPuRUAowouqtxAY6pgEooG3KBoYoG16PSyJ46pHEOwSaGRaz0AeqIic5wQGaKHDNEf6LmB6X9YAA0CklBoI%2Fp2fvx6bx3sH6q2JXV2JvAxjEEjqTH3OrjRlFMEjP2d8E7UzH0H9b%2Bipb9WkrIKo1ujs4Qbtr1lXx6X8n6AKXCJ1dbdvwQ5hroHBbqLF5%2FY7HSnDgoUfZ3ikdLWUzGJy6vgMJ2gbqtwxePus7pbP5BC63C9cG&X-Amz-Signature=6b73014f1f156faa114174982613d4360d6e57a5606e096e9ba3f70c78da3067&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO: rviz img

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

TODO: add rviz section

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJLGVXGM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnw6is8SkmF%2FLNG0l8gu3QjSvMXPfbdZFatAzQ5Q0zZAiBDFm%2BeRHG3iKkGxmwYkezXSJHq%2Fw8ZXDRaHh5itjBdgiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPegfut1Ks41YnyRlKtwDqiLwVmZtSrCdUw48FbkDKgecwLzwSoJlghVQamUMG0LSDmPjIRMjKlcvpbWAKL8SwQdvdDmTzgHoptJRn%2FXfuxh67%2BIkjbK%2FhUPntA52sjmWdQGI%2B%2FQNnF4lySk9FnaFuwBc74Aqmd1GaiH0%2BFVTH9BuYwe%2Ffb7KmiKQTtMfkkMi7nYMCTWhtqe7mTObZCVnfjQ0dDtUiQkJu6rmHA%2F8VvNR1ydb9SH1OxkGC%2F8zgNuzlbNmmjz6N8MGmMQagWLwcIvvGsZ0pRtWsyTAq1JBb5DtVjpaqZtDssCUJOYrGucgByAkxmHCQUAXgxTFI7RZ4jo%2Bo3jlHNsj8UIn2xlCctE4jE17KFoHf7Kulp%2Bn1cV39TSnhP4Wu%2BQx3yPFtuTkd21esU4%2FUepgzAxX%2BedMbX3MsaCy%2Bu3vXht4Krvjn0MMlP%2BSVDosCAcd9LrFIAsw5CfvVOqD5m%2F5xoHkWh2%2FWHqfb8bjvjeEyx0g2TvqeyBqkt1EWWl5k2F1%2Bbny1x9QTynTLnBvWDTzU4uqqcrKtAHFzo4%2BJ%2Bgn88AxHRuUXclQjT4b6WKY0r8Mup7fuIZq4NlwqY2jYpsJC%2FxSVdIq3IlWoKRUXZCDr2QWtUQ%2BDnkxb3wIJYVAuPuRUAowouqtxAY6pgEooG3KBoYoG16PSyJ46pHEOwSaGRaz0AeqIic5wQGaKHDNEf6LmB6X9YAA0CklBoI%2Fp2fvx6bx3sH6q2JXV2JvAxjEEjqTH3OrjRlFMEjP2d8E7UzH0H9b%2Bipb9WkrIKo1ujs4Qbtr1lXx6X8n6AKXCJ1dbdvwQ5hroHBbqLF5%2FY7HSnDgoUfZ3ikdLWUzGJy6vgMJ2gbqtwxePus7pbP5BC63C9cG&X-Amz-Signature=7f58482007f8a810f0c5e877d61194a20546abee051c1132956edcb12b181396&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
