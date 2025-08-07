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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF3JQKZR%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDoIHozHKkJF0fcjsTjmfHAWPFOJ%2F1kh40IQZpqeHDnzwIhAIpYNFfrQ%2FsZDL6V3yP56Mugz7CIDPg11ubUv0I17PFrKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvG8t7uOf%2BHvAxTH0q3AM3Xwm6iYH5OrGFly57czNkIeXAS4ssVexWJ5Oi%2F2wtd8hUgBn4%2BFhQGOCzb7tdN%2BHA5m0qchsmfk3F3%2BBNIwc51uggUuUlW%2BEWjRsZJ1LCLFNGSPJxKTgfPIwfDEFfQx93vO8oP1KFKajQpAcJo9OfvKw7Zlq%2Fb%2BPexMU8Jfz7nj4GJYGlM9BqUraJKz6bcRTp2q43YpsYQEGyDqHWX9jb2KHOb1zQAO52AcCpLAOPUrUF2lcjp%2BgEb6FlZu6P6fqu6z1tY%2Brfc58gUTEwKe7OvKRXxAaOsMlx8iV%2B%2FMsJN91JkcqthbYLCxFnmBUKySGSjmRx3na14cF4cvWgHYy3vdx%2F7Mk7MH9z8%2FdavIZdZLtDF0BOfbK%2Bmy3%2B5XPRrfdYJdXo3mHXwEPyZAf%2F%2F4TtKBt68ukUH%2FTPT3ZWofdzDBwxMw9xvtp57vD%2BfIURRWMPFd7ZZvemRYGLVBO1Yo5ztYnBujpFhu8A3LWIXNCOOtTWqHKRW%2BztdxCCRPuzDWIoDdQYozdboxmjm86LjHO6KVQVnvHl%2BHDG4xNmzvnSe1FlZ%2BlcAsGAzU2duNYV22qiBAtvOsWUkJTjSomDSMMQszPpENS8vQY58hqwB9Ohnt4A8L7eVSxVnT1UYzDS%2BdLEBjqkAdoEpS60lzEpRdgyhhyR0KH%2Bl35OqZmqNxSir8dpu0MPcHZQ%2FwpSIH%2FHpzjcs5hmEXIAdCW3jk9iw2HqpVwQVlnEgW5O9cyIfJjeX9scG1dbBUoHdyTIQp7XvznvwmREHwEZOow%2BlmOthkJUm%2Fppl1HEzp7gF3CTzYpr1acYpgQVPjtn%2FImt303bnjjz1fU0ewazTOLlXM6TbGjBZKPiuFkA1%2Faw&X-Amz-Signature=64e88f2f8f2e4558c53726fb638b259ed04c9d25f865ea07dfec5aa2febd190e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXMGISJG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIFzROM0NgV8ELipaKZM4%2BaAz%2BPSw%2FHT5Mf6Y%2FNQ4QQemAiBGq6eYynomquUn55U5Zt9ZktLJz1wIbBMr36Gc%2FIJ%2FKiqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM6g9BNUj%2BmHBVuZUKtwDKMTXwaN5l016qKn%2BroK2pZlBodmzU8Kxe42PWvAf3pUeltzPkL2u3i9fzdGtZ%2F6GSV3%2FioSirlgKsOVi7UYg2UCUou5B%2F5e7WctRKg7f6xVuTs52Xxdk34ZHiw85kp82hIhiZ6XNriTVi670JGy%2Bj6ixw1dcU8nXvFEP8yPj6Eqfddv38E6597nMKEYBIgN2wYHQYAfV%2FIqGr91NTXURNrr6Ju3iJ1i9le1UOvUNZtKp1O8AGf04C2IkHK95gxH%2FxCxiDH3EFPp8PEAl06wcICC9wuQfGgNqenuawegOdTSDNfxesnoLmOka6i2F5FK8JAFMQnOlzKgjQdZh7GY7pR%2BmusWsquO63Im33dSz2UGEJ7DYokfK5H79G%2BtWku77Zo6FjVrVNaUxGwWjPDQ%2FCdWzsdV1o1SK4oxCQU3Nmj%2FTENXmIYTM8l4fFnv8xtciLqo6f0UoG8DycWzz%2FQLVHmTYiJALECeyuf0%2BD0Q4wu4Cq5wJORMAoQMA3ynOKLFNfqGBwr15zCxQSiNdvU7vdfOPdrLwF1YUwWkhnxVJtblDzVFbHWWOxV1Uj0PaIUdbQxyO7QA5pLBisN5807l5F1drjFyLCooL79TI2fNSa%2BzNcpkluYGQ3XwusvYwgPrSxAY6pgFfsQLwjBkIXA4a5SIjMiU4yQFkKjf6bbDmHnSIRKR8EA3v4P6QQRucTGGR70ftKmcPmLTThYsL8BzuaXp7xYpvhcj4jTvooHicPCoo%2FFZLIDBO3BTB2g5uoftLp7er5QFNIv9bteX6Bk4TBnS2urDZPD2akfva1iAnMsnDB%2FgAc3p5JYl7yguloiCUdP6nk4saDVEd5VCRfC1eXo4fx2GINiK3mUO6&X-Amz-Signature=dd836ebf0751cf94c24f3050abb4ed08d904e2ab8a6b091017469b0ee612e588&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXMGISJG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIFzROM0NgV8ELipaKZM4%2BaAz%2BPSw%2FHT5Mf6Y%2FNQ4QQemAiBGq6eYynomquUn55U5Zt9ZktLJz1wIbBMr36Gc%2FIJ%2FKiqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM6g9BNUj%2BmHBVuZUKtwDKMTXwaN5l016qKn%2BroK2pZlBodmzU8Kxe42PWvAf3pUeltzPkL2u3i9fzdGtZ%2F6GSV3%2FioSirlgKsOVi7UYg2UCUou5B%2F5e7WctRKg7f6xVuTs52Xxdk34ZHiw85kp82hIhiZ6XNriTVi670JGy%2Bj6ixw1dcU8nXvFEP8yPj6Eqfddv38E6597nMKEYBIgN2wYHQYAfV%2FIqGr91NTXURNrr6Ju3iJ1i9le1UOvUNZtKp1O8AGf04C2IkHK95gxH%2FxCxiDH3EFPp8PEAl06wcICC9wuQfGgNqenuawegOdTSDNfxesnoLmOka6i2F5FK8JAFMQnOlzKgjQdZh7GY7pR%2BmusWsquO63Im33dSz2UGEJ7DYokfK5H79G%2BtWku77Zo6FjVrVNaUxGwWjPDQ%2FCdWzsdV1o1SK4oxCQU3Nmj%2FTENXmIYTM8l4fFnv8xtciLqo6f0UoG8DycWzz%2FQLVHmTYiJALECeyuf0%2BD0Q4wu4Cq5wJORMAoQMA3ynOKLFNfqGBwr15zCxQSiNdvU7vdfOPdrLwF1YUwWkhnxVJtblDzVFbHWWOxV1Uj0PaIUdbQxyO7QA5pLBisN5807l5F1drjFyLCooL79TI2fNSa%2BzNcpkluYGQ3XwusvYwgPrSxAY6pgFfsQLwjBkIXA4a5SIjMiU4yQFkKjf6bbDmHnSIRKR8EA3v4P6QQRucTGGR70ftKmcPmLTThYsL8BzuaXp7xYpvhcj4jTvooHicPCoo%2FFZLIDBO3BTB2g5uoftLp7er5QFNIv9bteX6Bk4TBnS2urDZPD2akfva1iAnMsnDB%2FgAc3p5JYl7yguloiCUdP6nk4saDVEd5VCRfC1eXo4fx2GINiK3mUO6&X-Amz-Signature=6c9f8c05ebc6adf54b052b5db9f6eb43f4348bac339a468b9c3f7f21b7b75a14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXMGISJG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIFzROM0NgV8ELipaKZM4%2BaAz%2BPSw%2FHT5Mf6Y%2FNQ4QQemAiBGq6eYynomquUn55U5Zt9ZktLJz1wIbBMr36Gc%2FIJ%2FKiqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM6g9BNUj%2BmHBVuZUKtwDKMTXwaN5l016qKn%2BroK2pZlBodmzU8Kxe42PWvAf3pUeltzPkL2u3i9fzdGtZ%2F6GSV3%2FioSirlgKsOVi7UYg2UCUou5B%2F5e7WctRKg7f6xVuTs52Xxdk34ZHiw85kp82hIhiZ6XNriTVi670JGy%2Bj6ixw1dcU8nXvFEP8yPj6Eqfddv38E6597nMKEYBIgN2wYHQYAfV%2FIqGr91NTXURNrr6Ju3iJ1i9le1UOvUNZtKp1O8AGf04C2IkHK95gxH%2FxCxiDH3EFPp8PEAl06wcICC9wuQfGgNqenuawegOdTSDNfxesnoLmOka6i2F5FK8JAFMQnOlzKgjQdZh7GY7pR%2BmusWsquO63Im33dSz2UGEJ7DYokfK5H79G%2BtWku77Zo6FjVrVNaUxGwWjPDQ%2FCdWzsdV1o1SK4oxCQU3Nmj%2FTENXmIYTM8l4fFnv8xtciLqo6f0UoG8DycWzz%2FQLVHmTYiJALECeyuf0%2BD0Q4wu4Cq5wJORMAoQMA3ynOKLFNfqGBwr15zCxQSiNdvU7vdfOPdrLwF1YUwWkhnxVJtblDzVFbHWWOxV1Uj0PaIUdbQxyO7QA5pLBisN5807l5F1drjFyLCooL79TI2fNSa%2BzNcpkluYGQ3XwusvYwgPrSxAY6pgFfsQLwjBkIXA4a5SIjMiU4yQFkKjf6bbDmHnSIRKR8EA3v4P6QQRucTGGR70ftKmcPmLTThYsL8BzuaXp7xYpvhcj4jTvooHicPCoo%2FFZLIDBO3BTB2g5uoftLp7er5QFNIv9bteX6Bk4TBnS2urDZPD2akfva1iAnMsnDB%2FgAc3p5JYl7yguloiCUdP6nk4saDVEd5VCRfC1eXo4fx2GINiK3mUO6&X-Amz-Signature=8729764b4edba7d00440c9f7ba9a604d45a460a5534bcad857b41d8e976807cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXMGISJG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIFzROM0NgV8ELipaKZM4%2BaAz%2BPSw%2FHT5Mf6Y%2FNQ4QQemAiBGq6eYynomquUn55U5Zt9ZktLJz1wIbBMr36Gc%2FIJ%2FKiqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM6g9BNUj%2BmHBVuZUKtwDKMTXwaN5l016qKn%2BroK2pZlBodmzU8Kxe42PWvAf3pUeltzPkL2u3i9fzdGtZ%2F6GSV3%2FioSirlgKsOVi7UYg2UCUou5B%2F5e7WctRKg7f6xVuTs52Xxdk34ZHiw85kp82hIhiZ6XNriTVi670JGy%2Bj6ixw1dcU8nXvFEP8yPj6Eqfddv38E6597nMKEYBIgN2wYHQYAfV%2FIqGr91NTXURNrr6Ju3iJ1i9le1UOvUNZtKp1O8AGf04C2IkHK95gxH%2FxCxiDH3EFPp8PEAl06wcICC9wuQfGgNqenuawegOdTSDNfxesnoLmOka6i2F5FK8JAFMQnOlzKgjQdZh7GY7pR%2BmusWsquO63Im33dSz2UGEJ7DYokfK5H79G%2BtWku77Zo6FjVrVNaUxGwWjPDQ%2FCdWzsdV1o1SK4oxCQU3Nmj%2FTENXmIYTM8l4fFnv8xtciLqo6f0UoG8DycWzz%2FQLVHmTYiJALECeyuf0%2BD0Q4wu4Cq5wJORMAoQMA3ynOKLFNfqGBwr15zCxQSiNdvU7vdfOPdrLwF1YUwWkhnxVJtblDzVFbHWWOxV1Uj0PaIUdbQxyO7QA5pLBisN5807l5F1drjFyLCooL79TI2fNSa%2BzNcpkluYGQ3XwusvYwgPrSxAY6pgFfsQLwjBkIXA4a5SIjMiU4yQFkKjf6bbDmHnSIRKR8EA3v4P6QQRucTGGR70ftKmcPmLTThYsL8BzuaXp7xYpvhcj4jTvooHicPCoo%2FFZLIDBO3BTB2g5uoftLp7er5QFNIv9bteX6Bk4TBnS2urDZPD2akfva1iAnMsnDB%2FgAc3p5JYl7yguloiCUdP6nk4saDVEd5VCRfC1eXo4fx2GINiK3mUO6&X-Amz-Signature=98cf9e65bf8e3b987b83460b6cf48a4349de0fdbb28a672ff9fb879767eed1e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXMGISJG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIFzROM0NgV8ELipaKZM4%2BaAz%2BPSw%2FHT5Mf6Y%2FNQ4QQemAiBGq6eYynomquUn55U5Zt9ZktLJz1wIbBMr36Gc%2FIJ%2FKiqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM6g9BNUj%2BmHBVuZUKtwDKMTXwaN5l016qKn%2BroK2pZlBodmzU8Kxe42PWvAf3pUeltzPkL2u3i9fzdGtZ%2F6GSV3%2FioSirlgKsOVi7UYg2UCUou5B%2F5e7WctRKg7f6xVuTs52Xxdk34ZHiw85kp82hIhiZ6XNriTVi670JGy%2Bj6ixw1dcU8nXvFEP8yPj6Eqfddv38E6597nMKEYBIgN2wYHQYAfV%2FIqGr91NTXURNrr6Ju3iJ1i9le1UOvUNZtKp1O8AGf04C2IkHK95gxH%2FxCxiDH3EFPp8PEAl06wcICC9wuQfGgNqenuawegOdTSDNfxesnoLmOka6i2F5FK8JAFMQnOlzKgjQdZh7GY7pR%2BmusWsquO63Im33dSz2UGEJ7DYokfK5H79G%2BtWku77Zo6FjVrVNaUxGwWjPDQ%2FCdWzsdV1o1SK4oxCQU3Nmj%2FTENXmIYTM8l4fFnv8xtciLqo6f0UoG8DycWzz%2FQLVHmTYiJALECeyuf0%2BD0Q4wu4Cq5wJORMAoQMA3ynOKLFNfqGBwr15zCxQSiNdvU7vdfOPdrLwF1YUwWkhnxVJtblDzVFbHWWOxV1Uj0PaIUdbQxyO7QA5pLBisN5807l5F1drjFyLCooL79TI2fNSa%2BzNcpkluYGQ3XwusvYwgPrSxAY6pgFfsQLwjBkIXA4a5SIjMiU4yQFkKjf6bbDmHnSIRKR8EA3v4P6QQRucTGGR70ftKmcPmLTThYsL8BzuaXp7xYpvhcj4jTvooHicPCoo%2FFZLIDBO3BTB2g5uoftLp7er5QFNIv9bteX6Bk4TBnS2urDZPD2akfva1iAnMsnDB%2FgAc3p5JYl7yguloiCUdP6nk4saDVEd5VCRfC1eXo4fx2GINiK3mUO6&X-Amz-Signature=a7b85f784b79263a23c6f3c576f6305414b8f0853c0a0d0e819b6b020ad7b704&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXMGISJG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIFzROM0NgV8ELipaKZM4%2BaAz%2BPSw%2FHT5Mf6Y%2FNQ4QQemAiBGq6eYynomquUn55U5Zt9ZktLJz1wIbBMr36Gc%2FIJ%2FKiqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM6g9BNUj%2BmHBVuZUKtwDKMTXwaN5l016qKn%2BroK2pZlBodmzU8Kxe42PWvAf3pUeltzPkL2u3i9fzdGtZ%2F6GSV3%2FioSirlgKsOVi7UYg2UCUou5B%2F5e7WctRKg7f6xVuTs52Xxdk34ZHiw85kp82hIhiZ6XNriTVi670JGy%2Bj6ixw1dcU8nXvFEP8yPj6Eqfddv38E6597nMKEYBIgN2wYHQYAfV%2FIqGr91NTXURNrr6Ju3iJ1i9le1UOvUNZtKp1O8AGf04C2IkHK95gxH%2FxCxiDH3EFPp8PEAl06wcICC9wuQfGgNqenuawegOdTSDNfxesnoLmOka6i2F5FK8JAFMQnOlzKgjQdZh7GY7pR%2BmusWsquO63Im33dSz2UGEJ7DYokfK5H79G%2BtWku77Zo6FjVrVNaUxGwWjPDQ%2FCdWzsdV1o1SK4oxCQU3Nmj%2FTENXmIYTM8l4fFnv8xtciLqo6f0UoG8DycWzz%2FQLVHmTYiJALECeyuf0%2BD0Q4wu4Cq5wJORMAoQMA3ynOKLFNfqGBwr15zCxQSiNdvU7vdfOPdrLwF1YUwWkhnxVJtblDzVFbHWWOxV1Uj0PaIUdbQxyO7QA5pLBisN5807l5F1drjFyLCooL79TI2fNSa%2BzNcpkluYGQ3XwusvYwgPrSxAY6pgFfsQLwjBkIXA4a5SIjMiU4yQFkKjf6bbDmHnSIRKR8EA3v4P6QQRucTGGR70ftKmcPmLTThYsL8BzuaXp7xYpvhcj4jTvooHicPCoo%2FFZLIDBO3BTB2g5uoftLp7er5QFNIv9bteX6Bk4TBnS2urDZPD2akfva1iAnMsnDB%2FgAc3p5JYl7yguloiCUdP6nk4saDVEd5VCRfC1eXo4fx2GINiK3mUO6&X-Amz-Signature=eb7d60b571a2d471643ac37141e21fbc7133ebf4f15dcfb094574b87b4433ec5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXMGISJG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIFzROM0NgV8ELipaKZM4%2BaAz%2BPSw%2FHT5Mf6Y%2FNQ4QQemAiBGq6eYynomquUn55U5Zt9ZktLJz1wIbBMr36Gc%2FIJ%2FKiqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM6g9BNUj%2BmHBVuZUKtwDKMTXwaN5l016qKn%2BroK2pZlBodmzU8Kxe42PWvAf3pUeltzPkL2u3i9fzdGtZ%2F6GSV3%2FioSirlgKsOVi7UYg2UCUou5B%2F5e7WctRKg7f6xVuTs52Xxdk34ZHiw85kp82hIhiZ6XNriTVi670JGy%2Bj6ixw1dcU8nXvFEP8yPj6Eqfddv38E6597nMKEYBIgN2wYHQYAfV%2FIqGr91NTXURNrr6Ju3iJ1i9le1UOvUNZtKp1O8AGf04C2IkHK95gxH%2FxCxiDH3EFPp8PEAl06wcICC9wuQfGgNqenuawegOdTSDNfxesnoLmOka6i2F5FK8JAFMQnOlzKgjQdZh7GY7pR%2BmusWsquO63Im33dSz2UGEJ7DYokfK5H79G%2BtWku77Zo6FjVrVNaUxGwWjPDQ%2FCdWzsdV1o1SK4oxCQU3Nmj%2FTENXmIYTM8l4fFnv8xtciLqo6f0UoG8DycWzz%2FQLVHmTYiJALECeyuf0%2BD0Q4wu4Cq5wJORMAoQMA3ynOKLFNfqGBwr15zCxQSiNdvU7vdfOPdrLwF1YUwWkhnxVJtblDzVFbHWWOxV1Uj0PaIUdbQxyO7QA5pLBisN5807l5F1drjFyLCooL79TI2fNSa%2BzNcpkluYGQ3XwusvYwgPrSxAY6pgFfsQLwjBkIXA4a5SIjMiU4yQFkKjf6bbDmHnSIRKR8EA3v4P6QQRucTGGR70ftKmcPmLTThYsL8BzuaXp7xYpvhcj4jTvooHicPCoo%2FFZLIDBO3BTB2g5uoftLp7er5QFNIv9bteX6Bk4TBnS2urDZPD2akfva1iAnMsnDB%2FgAc3p5JYl7yguloiCUdP6nk4saDVEd5VCRfC1eXo4fx2GINiK3mUO6&X-Amz-Signature=7b303640cf9cb313ad5529797b90c66d4604739e62b55cb8f8a75fca75be0bb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXMGISJG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIFzROM0NgV8ELipaKZM4%2BaAz%2BPSw%2FHT5Mf6Y%2FNQ4QQemAiBGq6eYynomquUn55U5Zt9ZktLJz1wIbBMr36Gc%2FIJ%2FKiqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM6g9BNUj%2BmHBVuZUKtwDKMTXwaN5l016qKn%2BroK2pZlBodmzU8Kxe42PWvAf3pUeltzPkL2u3i9fzdGtZ%2F6GSV3%2FioSirlgKsOVi7UYg2UCUou5B%2F5e7WctRKg7f6xVuTs52Xxdk34ZHiw85kp82hIhiZ6XNriTVi670JGy%2Bj6ixw1dcU8nXvFEP8yPj6Eqfddv38E6597nMKEYBIgN2wYHQYAfV%2FIqGr91NTXURNrr6Ju3iJ1i9le1UOvUNZtKp1O8AGf04C2IkHK95gxH%2FxCxiDH3EFPp8PEAl06wcICC9wuQfGgNqenuawegOdTSDNfxesnoLmOka6i2F5FK8JAFMQnOlzKgjQdZh7GY7pR%2BmusWsquO63Im33dSz2UGEJ7DYokfK5H79G%2BtWku77Zo6FjVrVNaUxGwWjPDQ%2FCdWzsdV1o1SK4oxCQU3Nmj%2FTENXmIYTM8l4fFnv8xtciLqo6f0UoG8DycWzz%2FQLVHmTYiJALECeyuf0%2BD0Q4wu4Cq5wJORMAoQMA3ynOKLFNfqGBwr15zCxQSiNdvU7vdfOPdrLwF1YUwWkhnxVJtblDzVFbHWWOxV1Uj0PaIUdbQxyO7QA5pLBisN5807l5F1drjFyLCooL79TI2fNSa%2BzNcpkluYGQ3XwusvYwgPrSxAY6pgFfsQLwjBkIXA4a5SIjMiU4yQFkKjf6bbDmHnSIRKR8EA3v4P6QQRucTGGR70ftKmcPmLTThYsL8BzuaXp7xYpvhcj4jTvooHicPCoo%2FFZLIDBO3BTB2g5uoftLp7er5QFNIv9bteX6Bk4TBnS2urDZPD2akfva1iAnMsnDB%2FgAc3p5JYl7yguloiCUdP6nk4saDVEd5VCRfC1eXo4fx2GINiK3mUO6&X-Amz-Signature=320d4db16ed903282fa1b823fc087f3d78b3a3e680594afc8a6d4b5a132ad4ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXMGISJG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIFzROM0NgV8ELipaKZM4%2BaAz%2BPSw%2FHT5Mf6Y%2FNQ4QQemAiBGq6eYynomquUn55U5Zt9ZktLJz1wIbBMr36Gc%2FIJ%2FKiqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM6g9BNUj%2BmHBVuZUKtwDKMTXwaN5l016qKn%2BroK2pZlBodmzU8Kxe42PWvAf3pUeltzPkL2u3i9fzdGtZ%2F6GSV3%2FioSirlgKsOVi7UYg2UCUou5B%2F5e7WctRKg7f6xVuTs52Xxdk34ZHiw85kp82hIhiZ6XNriTVi670JGy%2Bj6ixw1dcU8nXvFEP8yPj6Eqfddv38E6597nMKEYBIgN2wYHQYAfV%2FIqGr91NTXURNrr6Ju3iJ1i9le1UOvUNZtKp1O8AGf04C2IkHK95gxH%2FxCxiDH3EFPp8PEAl06wcICC9wuQfGgNqenuawegOdTSDNfxesnoLmOka6i2F5FK8JAFMQnOlzKgjQdZh7GY7pR%2BmusWsquO63Im33dSz2UGEJ7DYokfK5H79G%2BtWku77Zo6FjVrVNaUxGwWjPDQ%2FCdWzsdV1o1SK4oxCQU3Nmj%2FTENXmIYTM8l4fFnv8xtciLqo6f0UoG8DycWzz%2FQLVHmTYiJALECeyuf0%2BD0Q4wu4Cq5wJORMAoQMA3ynOKLFNfqGBwr15zCxQSiNdvU7vdfOPdrLwF1YUwWkhnxVJtblDzVFbHWWOxV1Uj0PaIUdbQxyO7QA5pLBisN5807l5F1drjFyLCooL79TI2fNSa%2BzNcpkluYGQ3XwusvYwgPrSxAY6pgFfsQLwjBkIXA4a5SIjMiU4yQFkKjf6bbDmHnSIRKR8EA3v4P6QQRucTGGR70ftKmcPmLTThYsL8BzuaXp7xYpvhcj4jTvooHicPCoo%2FFZLIDBO3BTB2g5uoftLp7er5QFNIv9bteX6Bk4TBnS2urDZPD2akfva1iAnMsnDB%2FgAc3p5JYl7yguloiCUdP6nk4saDVEd5VCRfC1eXo4fx2GINiK3mUO6&X-Amz-Signature=cf361b569b50369bd88e28cb939e331b642221118d07d8005c271fade213b6b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXMGISJG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIFzROM0NgV8ELipaKZM4%2BaAz%2BPSw%2FHT5Mf6Y%2FNQ4QQemAiBGq6eYynomquUn55U5Zt9ZktLJz1wIbBMr36Gc%2FIJ%2FKiqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM6g9BNUj%2BmHBVuZUKtwDKMTXwaN5l016qKn%2BroK2pZlBodmzU8Kxe42PWvAf3pUeltzPkL2u3i9fzdGtZ%2F6GSV3%2FioSirlgKsOVi7UYg2UCUou5B%2F5e7WctRKg7f6xVuTs52Xxdk34ZHiw85kp82hIhiZ6XNriTVi670JGy%2Bj6ixw1dcU8nXvFEP8yPj6Eqfddv38E6597nMKEYBIgN2wYHQYAfV%2FIqGr91NTXURNrr6Ju3iJ1i9le1UOvUNZtKp1O8AGf04C2IkHK95gxH%2FxCxiDH3EFPp8PEAl06wcICC9wuQfGgNqenuawegOdTSDNfxesnoLmOka6i2F5FK8JAFMQnOlzKgjQdZh7GY7pR%2BmusWsquO63Im33dSz2UGEJ7DYokfK5H79G%2BtWku77Zo6FjVrVNaUxGwWjPDQ%2FCdWzsdV1o1SK4oxCQU3Nmj%2FTENXmIYTM8l4fFnv8xtciLqo6f0UoG8DycWzz%2FQLVHmTYiJALECeyuf0%2BD0Q4wu4Cq5wJORMAoQMA3ynOKLFNfqGBwr15zCxQSiNdvU7vdfOPdrLwF1YUwWkhnxVJtblDzVFbHWWOxV1Uj0PaIUdbQxyO7QA5pLBisN5807l5F1drjFyLCooL79TI2fNSa%2BzNcpkluYGQ3XwusvYwgPrSxAY6pgFfsQLwjBkIXA4a5SIjMiU4yQFkKjf6bbDmHnSIRKR8EA3v4P6QQRucTGGR70ftKmcPmLTThYsL8BzuaXp7xYpvhcj4jTvooHicPCoo%2FFZLIDBO3BTB2g5uoftLp7er5QFNIv9bteX6Bk4TBnS2urDZPD2akfva1iAnMsnDB%2FgAc3p5JYl7yguloiCUdP6nk4saDVEd5VCRfC1eXo4fx2GINiK3mUO6&X-Amz-Signature=6fd0c6619833895f51970ed036e71cc549c1f6a733516065fcf319bf6708acac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
