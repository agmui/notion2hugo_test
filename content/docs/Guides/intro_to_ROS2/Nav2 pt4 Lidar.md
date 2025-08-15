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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GVEWZY2%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIGHDcHiLeH3sVt1A3%2FjdzT5VsOFXo9PaI79IIulqM5UDAiEAyT%2BIbiauAJZJGMBESmoUJQJymuSgzUBcKhIiAmBdEZQq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDIl8ZycTC5lXqbssfCrcA4XdpmqNn8iwM18unOvYV5%2BSUBw2%2BB1dJjhqM5ZlPLKcKto6IHC5nI6KC72CTEw%2FSK5%2BZBX9rcIzTLNpOnhrn4XRtVcynuYhhprKgAhlsUVmdfnlg%2F64veyi1i7D1Yx108%2FZVDo7ntyevqgnR3mdUKU8x6hVmYOJ2UIQU2lY6ujzlTe686uWjtVhVIgaq6qya0AZd6q8C5BesfA75%2BlCPLuqH%2BtNZ4EWtQO09XBEm9AdVYRDr%2BKFKthn0pbClvE%2FMqtGsHxqDp41%2FejGzrbC%2Bi423%2FJGoep0Wu14fG%2FMTb3FZsjaYj09%2BzMyWsy%2BgUGVD9X4oHh5Pe2ggn4E3cP%2FCE8X0pJ6Kxf5%2Blg%2BE9sGcsDkSH3c3VV2Bkr2UwYfF0xriHeGIo%2F3bWWTsgBMB86JlWYvmF9iBlrb2vppDt8jm6xxcjUHm60vWdCZSmaXx6fDvcR7Oj7bXBIJpcVgDO%2FO%2BEMktdIuqee39kY1ULvfgrTWBhsRIyvVYTdvdGuHpvG68FavUGWgQbVBylsznRnw598GBDxgc7QD3beaQSE7PHgC9NgRjMzWl2%2Fgzdm45uG547dPmOdN%2BMQEAHd68qE8hDs8wmQ0YQVWg%2F1hgtTKtgH38ewvqOVUJ3CqetU2MMHK%2B8QGOqUBjGFJJt%2BYQyZ54lt1cS%2BzTW2Gi7IbHS7qVbkTwTYftx1JQ7VbTHcPggISMf0RuHD4RYWJXWBFnyDYiN4RWkPNCx%2FCwDTgC6ILOHDCTrcXkMvWpvUdibDNNREbK6Z6bV1DRSIZnesWVZZasELTEdULX%2FahLx99lemLP5XK7rfI30dP7bWSDGwLfLq2Y4hAYFzQSZkdKazuvtj95PidwySrJEH7O%2BKR&X-Amz-Signature=a6a899a14f3c855ea6dd10496de0c7b326f301d1fdc04cb8dc0872b890f6aab8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNEOJHNA%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDpEQibhzBECwmyiMJeZzffREO8ugCljTDGEJgsNZ8jKwIhALHjJrbYY5VZYmmX%2BFEsyISVJt3%2BosnQG3UfG%2B8ZHaG9Kv8DCFkQABoMNjM3NDIzMTgzODA1Igzkk%2Bd3ej%2B2w%2BHvh8Iq3AOqBeIKYgiatuJx%2FI50oVEqqM26xpqSmuc2%2BN18Kq%2FgCrtQMwwN8L%2BWmmqoRfKQ313aeDvcjwLlvYDnBu3Iqt5vspQbYVM%2B5pDeiFVqcQDSpFTRun%2BBLJTx%2BtH36AJ3NGlAigVNnScjh%2BLnoI2DU3FLcTpaT7E54JMyixkL4QSCNCCKeDaKzXJA7SQIoeufWHNxoWR%2F%2FpQ1vKt0JYn1AjjsF2hf2DXDcdJxboGag%2BzhIh0l6l%2Fa1Nqm83qmK7G05GbbSALtQW8kih%2FLyghWyVYll0ZI4EkowcNeZ9sHq1Pt%2BZxHGZXA3AkSWlkannepxllO7tjmnQcrP9DK1OTocCLi%2BC8IH76X9UKuYuGN5Ge%2BOTEydAGcdE1xiBgX3T5zJdx2ObuFQvKrqFjTIk%2BJjlPvnOWV9Mu7Asypi5QN1HNo%2BO80T2RETZcs%2FaZ2WDTuKIzmPQGQP9CRIdRwjlahLohKQgAiAiTN00rqBbIPD63M0%2BdMoZrSRZ65spPIxrJZum9p2SyAMjWuxQqo1G6PWzgLsVPr%2BdV86WVOsi%2FA37n0qvcuUcXBMbau5jNxv%2FYV%2Ffos1SNhL6OsEOmY%2FyqFPuSkJT6xYhYItOTQCXFjvuZqxc7TOCXh1mwmycEosDD0yvvEBjqkAdRMB6FCSroBrbB2LDn8GckLuKvJ13sjE%2FdcJE8N9PGTR6dH11TQjx%2Bsl02k2CHEvoCCb3tzVjvwamTTx2yh2279qu32a2puurKv2i33WRARysJtUGF3uDh2R29JHCpftYy7s2Cr0yG4FZ%2FIxUWDlydym1aK2MVgRd4ijQHrz2nJQNrYcGv5ZWyM5f1%2F4j4xbgOLum%2B90lLvd9GvI8B7IpUoqoAQ&X-Amz-Signature=6818549b4e57795fd65916e4ecd8892e09e0bb74631b2e16b1cca0b336ac2793&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNEOJHNA%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDpEQibhzBECwmyiMJeZzffREO8ugCljTDGEJgsNZ8jKwIhALHjJrbYY5VZYmmX%2BFEsyISVJt3%2BosnQG3UfG%2B8ZHaG9Kv8DCFkQABoMNjM3NDIzMTgzODA1Igzkk%2Bd3ej%2B2w%2BHvh8Iq3AOqBeIKYgiatuJx%2FI50oVEqqM26xpqSmuc2%2BN18Kq%2FgCrtQMwwN8L%2BWmmqoRfKQ313aeDvcjwLlvYDnBu3Iqt5vspQbYVM%2B5pDeiFVqcQDSpFTRun%2BBLJTx%2BtH36AJ3NGlAigVNnScjh%2BLnoI2DU3FLcTpaT7E54JMyixkL4QSCNCCKeDaKzXJA7SQIoeufWHNxoWR%2F%2FpQ1vKt0JYn1AjjsF2hf2DXDcdJxboGag%2BzhIh0l6l%2Fa1Nqm83qmK7G05GbbSALtQW8kih%2FLyghWyVYll0ZI4EkowcNeZ9sHq1Pt%2BZxHGZXA3AkSWlkannepxllO7tjmnQcrP9DK1OTocCLi%2BC8IH76X9UKuYuGN5Ge%2BOTEydAGcdE1xiBgX3T5zJdx2ObuFQvKrqFjTIk%2BJjlPvnOWV9Mu7Asypi5QN1HNo%2BO80T2RETZcs%2FaZ2WDTuKIzmPQGQP9CRIdRwjlahLohKQgAiAiTN00rqBbIPD63M0%2BdMoZrSRZ65spPIxrJZum9p2SyAMjWuxQqo1G6PWzgLsVPr%2BdV86WVOsi%2FA37n0qvcuUcXBMbau5jNxv%2FYV%2Ffos1SNhL6OsEOmY%2FyqFPuSkJT6xYhYItOTQCXFjvuZqxc7TOCXh1mwmycEosDD0yvvEBjqkAdRMB6FCSroBrbB2LDn8GckLuKvJ13sjE%2FdcJE8N9PGTR6dH11TQjx%2Bsl02k2CHEvoCCb3tzVjvwamTTx2yh2279qu32a2puurKv2i33WRARysJtUGF3uDh2R29JHCpftYy7s2Cr0yG4FZ%2FIxUWDlydym1aK2MVgRd4ijQHrz2nJQNrYcGv5ZWyM5f1%2F4j4xbgOLum%2B90lLvd9GvI8B7IpUoqoAQ&X-Amz-Signature=7eb74dedaf632a4f652dbee4e57b7096076fb6b6a92dd20aafe06aa15e3214fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNEOJHNA%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDpEQibhzBECwmyiMJeZzffREO8ugCljTDGEJgsNZ8jKwIhALHjJrbYY5VZYmmX%2BFEsyISVJt3%2BosnQG3UfG%2B8ZHaG9Kv8DCFkQABoMNjM3NDIzMTgzODA1Igzkk%2Bd3ej%2B2w%2BHvh8Iq3AOqBeIKYgiatuJx%2FI50oVEqqM26xpqSmuc2%2BN18Kq%2FgCrtQMwwN8L%2BWmmqoRfKQ313aeDvcjwLlvYDnBu3Iqt5vspQbYVM%2B5pDeiFVqcQDSpFTRun%2BBLJTx%2BtH36AJ3NGlAigVNnScjh%2BLnoI2DU3FLcTpaT7E54JMyixkL4QSCNCCKeDaKzXJA7SQIoeufWHNxoWR%2F%2FpQ1vKt0JYn1AjjsF2hf2DXDcdJxboGag%2BzhIh0l6l%2Fa1Nqm83qmK7G05GbbSALtQW8kih%2FLyghWyVYll0ZI4EkowcNeZ9sHq1Pt%2BZxHGZXA3AkSWlkannepxllO7tjmnQcrP9DK1OTocCLi%2BC8IH76X9UKuYuGN5Ge%2BOTEydAGcdE1xiBgX3T5zJdx2ObuFQvKrqFjTIk%2BJjlPvnOWV9Mu7Asypi5QN1HNo%2BO80T2RETZcs%2FaZ2WDTuKIzmPQGQP9CRIdRwjlahLohKQgAiAiTN00rqBbIPD63M0%2BdMoZrSRZ65spPIxrJZum9p2SyAMjWuxQqo1G6PWzgLsVPr%2BdV86WVOsi%2FA37n0qvcuUcXBMbau5jNxv%2FYV%2Ffos1SNhL6OsEOmY%2FyqFPuSkJT6xYhYItOTQCXFjvuZqxc7TOCXh1mwmycEosDD0yvvEBjqkAdRMB6FCSroBrbB2LDn8GckLuKvJ13sjE%2FdcJE8N9PGTR6dH11TQjx%2Bsl02k2CHEvoCCb3tzVjvwamTTx2yh2279qu32a2puurKv2i33WRARysJtUGF3uDh2R29JHCpftYy7s2Cr0yG4FZ%2FIxUWDlydym1aK2MVgRd4ijQHrz2nJQNrYcGv5ZWyM5f1%2F4j4xbgOLum%2B90lLvd9GvI8B7IpUoqoAQ&X-Amz-Signature=641ccb882a402ecbe47cd3f6ecf3da8cf8037468b07982d1ebb33d897260b658&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNEOJHNA%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDpEQibhzBECwmyiMJeZzffREO8ugCljTDGEJgsNZ8jKwIhALHjJrbYY5VZYmmX%2BFEsyISVJt3%2BosnQG3UfG%2B8ZHaG9Kv8DCFkQABoMNjM3NDIzMTgzODA1Igzkk%2Bd3ej%2B2w%2BHvh8Iq3AOqBeIKYgiatuJx%2FI50oVEqqM26xpqSmuc2%2BN18Kq%2FgCrtQMwwN8L%2BWmmqoRfKQ313aeDvcjwLlvYDnBu3Iqt5vspQbYVM%2B5pDeiFVqcQDSpFTRun%2BBLJTx%2BtH36AJ3NGlAigVNnScjh%2BLnoI2DU3FLcTpaT7E54JMyixkL4QSCNCCKeDaKzXJA7SQIoeufWHNxoWR%2F%2FpQ1vKt0JYn1AjjsF2hf2DXDcdJxboGag%2BzhIh0l6l%2Fa1Nqm83qmK7G05GbbSALtQW8kih%2FLyghWyVYll0ZI4EkowcNeZ9sHq1Pt%2BZxHGZXA3AkSWlkannepxllO7tjmnQcrP9DK1OTocCLi%2BC8IH76X9UKuYuGN5Ge%2BOTEydAGcdE1xiBgX3T5zJdx2ObuFQvKrqFjTIk%2BJjlPvnOWV9Mu7Asypi5QN1HNo%2BO80T2RETZcs%2FaZ2WDTuKIzmPQGQP9CRIdRwjlahLohKQgAiAiTN00rqBbIPD63M0%2BdMoZrSRZ65spPIxrJZum9p2SyAMjWuxQqo1G6PWzgLsVPr%2BdV86WVOsi%2FA37n0qvcuUcXBMbau5jNxv%2FYV%2Ffos1SNhL6OsEOmY%2FyqFPuSkJT6xYhYItOTQCXFjvuZqxc7TOCXh1mwmycEosDD0yvvEBjqkAdRMB6FCSroBrbB2LDn8GckLuKvJ13sjE%2FdcJE8N9PGTR6dH11TQjx%2Bsl02k2CHEvoCCb3tzVjvwamTTx2yh2279qu32a2puurKv2i33WRARysJtUGF3uDh2R29JHCpftYy7s2Cr0yG4FZ%2FIxUWDlydym1aK2MVgRd4ijQHrz2nJQNrYcGv5ZWyM5f1%2F4j4xbgOLum%2B90lLvd9GvI8B7IpUoqoAQ&X-Amz-Signature=431e506e98572bd4bd54667c84ce060e6b7612609811649caf44d6618c8f90b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNEOJHNA%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDpEQibhzBECwmyiMJeZzffREO8ugCljTDGEJgsNZ8jKwIhALHjJrbYY5VZYmmX%2BFEsyISVJt3%2BosnQG3UfG%2B8ZHaG9Kv8DCFkQABoMNjM3NDIzMTgzODA1Igzkk%2Bd3ej%2B2w%2BHvh8Iq3AOqBeIKYgiatuJx%2FI50oVEqqM26xpqSmuc2%2BN18Kq%2FgCrtQMwwN8L%2BWmmqoRfKQ313aeDvcjwLlvYDnBu3Iqt5vspQbYVM%2B5pDeiFVqcQDSpFTRun%2BBLJTx%2BtH36AJ3NGlAigVNnScjh%2BLnoI2DU3FLcTpaT7E54JMyixkL4QSCNCCKeDaKzXJA7SQIoeufWHNxoWR%2F%2FpQ1vKt0JYn1AjjsF2hf2DXDcdJxboGag%2BzhIh0l6l%2Fa1Nqm83qmK7G05GbbSALtQW8kih%2FLyghWyVYll0ZI4EkowcNeZ9sHq1Pt%2BZxHGZXA3AkSWlkannepxllO7tjmnQcrP9DK1OTocCLi%2BC8IH76X9UKuYuGN5Ge%2BOTEydAGcdE1xiBgX3T5zJdx2ObuFQvKrqFjTIk%2BJjlPvnOWV9Mu7Asypi5QN1HNo%2BO80T2RETZcs%2FaZ2WDTuKIzmPQGQP9CRIdRwjlahLohKQgAiAiTN00rqBbIPD63M0%2BdMoZrSRZ65spPIxrJZum9p2SyAMjWuxQqo1G6PWzgLsVPr%2BdV86WVOsi%2FA37n0qvcuUcXBMbau5jNxv%2FYV%2Ffos1SNhL6OsEOmY%2FyqFPuSkJT6xYhYItOTQCXFjvuZqxc7TOCXh1mwmycEosDD0yvvEBjqkAdRMB6FCSroBrbB2LDn8GckLuKvJ13sjE%2FdcJE8N9PGTR6dH11TQjx%2Bsl02k2CHEvoCCb3tzVjvwamTTx2yh2279qu32a2puurKv2i33WRARysJtUGF3uDh2R29JHCpftYy7s2Cr0yG4FZ%2FIxUWDlydym1aK2MVgRd4ijQHrz2nJQNrYcGv5ZWyM5f1%2F4j4xbgOLum%2B90lLvd9GvI8B7IpUoqoAQ&X-Amz-Signature=c366e588f9befdbbe2f77045f577edfc3c7b6f4dc491a8cf5ba6a9bb31e871c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNEOJHNA%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDpEQibhzBECwmyiMJeZzffREO8ugCljTDGEJgsNZ8jKwIhALHjJrbYY5VZYmmX%2BFEsyISVJt3%2BosnQG3UfG%2B8ZHaG9Kv8DCFkQABoMNjM3NDIzMTgzODA1Igzkk%2Bd3ej%2B2w%2BHvh8Iq3AOqBeIKYgiatuJx%2FI50oVEqqM26xpqSmuc2%2BN18Kq%2FgCrtQMwwN8L%2BWmmqoRfKQ313aeDvcjwLlvYDnBu3Iqt5vspQbYVM%2B5pDeiFVqcQDSpFTRun%2BBLJTx%2BtH36AJ3NGlAigVNnScjh%2BLnoI2DU3FLcTpaT7E54JMyixkL4QSCNCCKeDaKzXJA7SQIoeufWHNxoWR%2F%2FpQ1vKt0JYn1AjjsF2hf2DXDcdJxboGag%2BzhIh0l6l%2Fa1Nqm83qmK7G05GbbSALtQW8kih%2FLyghWyVYll0ZI4EkowcNeZ9sHq1Pt%2BZxHGZXA3AkSWlkannepxllO7tjmnQcrP9DK1OTocCLi%2BC8IH76X9UKuYuGN5Ge%2BOTEydAGcdE1xiBgX3T5zJdx2ObuFQvKrqFjTIk%2BJjlPvnOWV9Mu7Asypi5QN1HNo%2BO80T2RETZcs%2FaZ2WDTuKIzmPQGQP9CRIdRwjlahLohKQgAiAiTN00rqBbIPD63M0%2BdMoZrSRZ65spPIxrJZum9p2SyAMjWuxQqo1G6PWzgLsVPr%2BdV86WVOsi%2FA37n0qvcuUcXBMbau5jNxv%2FYV%2Ffos1SNhL6OsEOmY%2FyqFPuSkJT6xYhYItOTQCXFjvuZqxc7TOCXh1mwmycEosDD0yvvEBjqkAdRMB6FCSroBrbB2LDn8GckLuKvJ13sjE%2FdcJE8N9PGTR6dH11TQjx%2Bsl02k2CHEvoCCb3tzVjvwamTTx2yh2279qu32a2puurKv2i33WRARysJtUGF3uDh2R29JHCpftYy7s2Cr0yG4FZ%2FIxUWDlydym1aK2MVgRd4ijQHrz2nJQNrYcGv5ZWyM5f1%2F4j4xbgOLum%2B90lLvd9GvI8B7IpUoqoAQ&X-Amz-Signature=1082f399bc05abcb6e24d74c726ec2d9755d1e628e5e61d73f695f53eae9f3c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNEOJHNA%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDpEQibhzBECwmyiMJeZzffREO8ugCljTDGEJgsNZ8jKwIhALHjJrbYY5VZYmmX%2BFEsyISVJt3%2BosnQG3UfG%2B8ZHaG9Kv8DCFkQABoMNjM3NDIzMTgzODA1Igzkk%2Bd3ej%2B2w%2BHvh8Iq3AOqBeIKYgiatuJx%2FI50oVEqqM26xpqSmuc2%2BN18Kq%2FgCrtQMwwN8L%2BWmmqoRfKQ313aeDvcjwLlvYDnBu3Iqt5vspQbYVM%2B5pDeiFVqcQDSpFTRun%2BBLJTx%2BtH36AJ3NGlAigVNnScjh%2BLnoI2DU3FLcTpaT7E54JMyixkL4QSCNCCKeDaKzXJA7SQIoeufWHNxoWR%2F%2FpQ1vKt0JYn1AjjsF2hf2DXDcdJxboGag%2BzhIh0l6l%2Fa1Nqm83qmK7G05GbbSALtQW8kih%2FLyghWyVYll0ZI4EkowcNeZ9sHq1Pt%2BZxHGZXA3AkSWlkannepxllO7tjmnQcrP9DK1OTocCLi%2BC8IH76X9UKuYuGN5Ge%2BOTEydAGcdE1xiBgX3T5zJdx2ObuFQvKrqFjTIk%2BJjlPvnOWV9Mu7Asypi5QN1HNo%2BO80T2RETZcs%2FaZ2WDTuKIzmPQGQP9CRIdRwjlahLohKQgAiAiTN00rqBbIPD63M0%2BdMoZrSRZ65spPIxrJZum9p2SyAMjWuxQqo1G6PWzgLsVPr%2BdV86WVOsi%2FA37n0qvcuUcXBMbau5jNxv%2FYV%2Ffos1SNhL6OsEOmY%2FyqFPuSkJT6xYhYItOTQCXFjvuZqxc7TOCXh1mwmycEosDD0yvvEBjqkAdRMB6FCSroBrbB2LDn8GckLuKvJ13sjE%2FdcJE8N9PGTR6dH11TQjx%2Bsl02k2CHEvoCCb3tzVjvwamTTx2yh2279qu32a2puurKv2i33WRARysJtUGF3uDh2R29JHCpftYy7s2Cr0yG4FZ%2FIxUWDlydym1aK2MVgRd4ijQHrz2nJQNrYcGv5ZWyM5f1%2F4j4xbgOLum%2B90lLvd9GvI8B7IpUoqoAQ&X-Amz-Signature=82634a196d61012c630d39cde68e1ec0f304a242d35027c5d00e9d2c772fdf56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNEOJHNA%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDpEQibhzBECwmyiMJeZzffREO8ugCljTDGEJgsNZ8jKwIhALHjJrbYY5VZYmmX%2BFEsyISVJt3%2BosnQG3UfG%2B8ZHaG9Kv8DCFkQABoMNjM3NDIzMTgzODA1Igzkk%2Bd3ej%2B2w%2BHvh8Iq3AOqBeIKYgiatuJx%2FI50oVEqqM26xpqSmuc2%2BN18Kq%2FgCrtQMwwN8L%2BWmmqoRfKQ313aeDvcjwLlvYDnBu3Iqt5vspQbYVM%2B5pDeiFVqcQDSpFTRun%2BBLJTx%2BtH36AJ3NGlAigVNnScjh%2BLnoI2DU3FLcTpaT7E54JMyixkL4QSCNCCKeDaKzXJA7SQIoeufWHNxoWR%2F%2FpQ1vKt0JYn1AjjsF2hf2DXDcdJxboGag%2BzhIh0l6l%2Fa1Nqm83qmK7G05GbbSALtQW8kih%2FLyghWyVYll0ZI4EkowcNeZ9sHq1Pt%2BZxHGZXA3AkSWlkannepxllO7tjmnQcrP9DK1OTocCLi%2BC8IH76X9UKuYuGN5Ge%2BOTEydAGcdE1xiBgX3T5zJdx2ObuFQvKrqFjTIk%2BJjlPvnOWV9Mu7Asypi5QN1HNo%2BO80T2RETZcs%2FaZ2WDTuKIzmPQGQP9CRIdRwjlahLohKQgAiAiTN00rqBbIPD63M0%2BdMoZrSRZ65spPIxrJZum9p2SyAMjWuxQqo1G6PWzgLsVPr%2BdV86WVOsi%2FA37n0qvcuUcXBMbau5jNxv%2FYV%2Ffos1SNhL6OsEOmY%2FyqFPuSkJT6xYhYItOTQCXFjvuZqxc7TOCXh1mwmycEosDD0yvvEBjqkAdRMB6FCSroBrbB2LDn8GckLuKvJ13sjE%2FdcJE8N9PGTR6dH11TQjx%2Bsl02k2CHEvoCCb3tzVjvwamTTx2yh2279qu32a2puurKv2i33WRARysJtUGF3uDh2R29JHCpftYy7s2Cr0yG4FZ%2FIxUWDlydym1aK2MVgRd4ijQHrz2nJQNrYcGv5ZWyM5f1%2F4j4xbgOLum%2B90lLvd9GvI8B7IpUoqoAQ&X-Amz-Signature=39efb66a3cffa4a2e50bac549e0be1a6c90e97ca5249defd0dc27a2da92be673&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNEOJHNA%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDpEQibhzBECwmyiMJeZzffREO8ugCljTDGEJgsNZ8jKwIhALHjJrbYY5VZYmmX%2BFEsyISVJt3%2BosnQG3UfG%2B8ZHaG9Kv8DCFkQABoMNjM3NDIzMTgzODA1Igzkk%2Bd3ej%2B2w%2BHvh8Iq3AOqBeIKYgiatuJx%2FI50oVEqqM26xpqSmuc2%2BN18Kq%2FgCrtQMwwN8L%2BWmmqoRfKQ313aeDvcjwLlvYDnBu3Iqt5vspQbYVM%2B5pDeiFVqcQDSpFTRun%2BBLJTx%2BtH36AJ3NGlAigVNnScjh%2BLnoI2DU3FLcTpaT7E54JMyixkL4QSCNCCKeDaKzXJA7SQIoeufWHNxoWR%2F%2FpQ1vKt0JYn1AjjsF2hf2DXDcdJxboGag%2BzhIh0l6l%2Fa1Nqm83qmK7G05GbbSALtQW8kih%2FLyghWyVYll0ZI4EkowcNeZ9sHq1Pt%2BZxHGZXA3AkSWlkannepxllO7tjmnQcrP9DK1OTocCLi%2BC8IH76X9UKuYuGN5Ge%2BOTEydAGcdE1xiBgX3T5zJdx2ObuFQvKrqFjTIk%2BJjlPvnOWV9Mu7Asypi5QN1HNo%2BO80T2RETZcs%2FaZ2WDTuKIzmPQGQP9CRIdRwjlahLohKQgAiAiTN00rqBbIPD63M0%2BdMoZrSRZ65spPIxrJZum9p2SyAMjWuxQqo1G6PWzgLsVPr%2BdV86WVOsi%2FA37n0qvcuUcXBMbau5jNxv%2FYV%2Ffos1SNhL6OsEOmY%2FyqFPuSkJT6xYhYItOTQCXFjvuZqxc7TOCXh1mwmycEosDD0yvvEBjqkAdRMB6FCSroBrbB2LDn8GckLuKvJ13sjE%2FdcJE8N9PGTR6dH11TQjx%2Bsl02k2CHEvoCCb3tzVjvwamTTx2yh2279qu32a2puurKv2i33WRARysJtUGF3uDh2R29JHCpftYy7s2Cr0yG4FZ%2FIxUWDlydym1aK2MVgRd4ijQHrz2nJQNrYcGv5ZWyM5f1%2F4j4xbgOLum%2B90lLvd9GvI8B7IpUoqoAQ&X-Amz-Signature=2dbbb43b2cb49d839385991a03de5e1e021e49d75bc22ab845ca38b368509f3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNEOJHNA%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDpEQibhzBECwmyiMJeZzffREO8ugCljTDGEJgsNZ8jKwIhALHjJrbYY5VZYmmX%2BFEsyISVJt3%2BosnQG3UfG%2B8ZHaG9Kv8DCFkQABoMNjM3NDIzMTgzODA1Igzkk%2Bd3ej%2B2w%2BHvh8Iq3AOqBeIKYgiatuJx%2FI50oVEqqM26xpqSmuc2%2BN18Kq%2FgCrtQMwwN8L%2BWmmqoRfKQ313aeDvcjwLlvYDnBu3Iqt5vspQbYVM%2B5pDeiFVqcQDSpFTRun%2BBLJTx%2BtH36AJ3NGlAigVNnScjh%2BLnoI2DU3FLcTpaT7E54JMyixkL4QSCNCCKeDaKzXJA7SQIoeufWHNxoWR%2F%2FpQ1vKt0JYn1AjjsF2hf2DXDcdJxboGag%2BzhIh0l6l%2Fa1Nqm83qmK7G05GbbSALtQW8kih%2FLyghWyVYll0ZI4EkowcNeZ9sHq1Pt%2BZxHGZXA3AkSWlkannepxllO7tjmnQcrP9DK1OTocCLi%2BC8IH76X9UKuYuGN5Ge%2BOTEydAGcdE1xiBgX3T5zJdx2ObuFQvKrqFjTIk%2BJjlPvnOWV9Mu7Asypi5QN1HNo%2BO80T2RETZcs%2FaZ2WDTuKIzmPQGQP9CRIdRwjlahLohKQgAiAiTN00rqBbIPD63M0%2BdMoZrSRZ65spPIxrJZum9p2SyAMjWuxQqo1G6PWzgLsVPr%2BdV86WVOsi%2FA37n0qvcuUcXBMbau5jNxv%2FYV%2Ffos1SNhL6OsEOmY%2FyqFPuSkJT6xYhYItOTQCXFjvuZqxc7TOCXh1mwmycEosDD0yvvEBjqkAdRMB6FCSroBrbB2LDn8GckLuKvJ13sjE%2FdcJE8N9PGTR6dH11TQjx%2Bsl02k2CHEvoCCb3tzVjvwamTTx2yh2279qu32a2puurKv2i33WRARysJtUGF3uDh2R29JHCpftYy7s2Cr0yG4FZ%2FIxUWDlydym1aK2MVgRd4ijQHrz2nJQNrYcGv5ZWyM5f1%2F4j4xbgOLum%2B90lLvd9GvI8B7IpUoqoAQ&X-Amz-Signature=431e506e98572bd4bd54667c84ce060e6b7612609811649caf44d6618c8f90b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
