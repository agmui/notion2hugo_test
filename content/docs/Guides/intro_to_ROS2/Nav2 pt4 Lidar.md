---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-07-29T16:07:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-07-29T16:07:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMW5JIT6%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpf9X2GQ%2BSitV49y9IFSos6Zk%2FQ2yV6AJGVbM%2BXxU%2BvgIgeztxdTa%2BQmWTY2CIkPKEgRVeaFouN1nfGTRh3tA9i10qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcuwWK5Lmq40WphCircAyZg7A8vfw9t1vaBt6Xjyogz9M9HVchF%2FiSn2e6tsRO4iMCqS31qv3%2Bbt2ycgqrb6B0YVZRLd6hdgpzQZMvk9gYIuuO6zajYGxagQPSfVxZvnm7EExlDkSiUILV%2FfQG1lEyx58OLxn3b46etjKSRKArN5nbjy41R4ioHw8mH4bVr8tcKpyY6Z3WO3O1LAzZLuk%2BCjpX8gaeU5GurJ6Y4OJtUaM%2F%2B9ADc11EBv5bzxmVPlSjydCrBetZr%2BBX8wDvdsyKBo6YZhXKAdjgTpna8UZvl4fbIKnwpjzzt5104XhQWD5x0rA%2BEhkSYwxj3%2FHUWR6EppNclUoy2zSxEwa4sJ1DDhUr5pWQ42tXpXaTsrxRQ2cihDJ4Y1QdyqKlajNck1K6h8pSOmNtDAoviDmau%2Bt4P1Jr2YkCq%2FR1fESmmIRktDafac2sZq2MYVzUH5Igka0ZhcGzJrYNPH2vW2tnnKWqKCMxoBoghXCUlsK96oBslC5P2a0WiUX%2BnzqWukCQ39Yh0UtO4Y8AOYslRjVgEfxwnq9T1qENRzBY8GZosWZJD4DIqO5utyIBXCh8wWiBOV%2FfipO8Q%2FGCA5HnnUkgzqD4v0uSYTLXLLvAJZM06psVtXZ3YG%2FCr7r7y%2Fbk7MPbcpMQGOqUBnYFB4S0AT2SC7zL8E5uirOWB%2BDTQ4ekf2hzMouVHPaN9Tx7i3%2BG57SqHlyhxocSQgZfgUMXHFKx1OOepACchP%2BOCzQVcMSmwnuOm1IGSDfuhkfxWWa%2Fbk%2FFbSlgEYW2QOvjpA%2FxQqYHzITghDGV74vCZu67pzvDsW32QJkJL5QicFvooHCEbkkThpzffRQ7bkjKyhG95Q9MrlmwiN7%2Fj%2B7IDPlJH&X-Amz-Signature=aacbc5fcd8952a114ac12891566e29b7186d62adaf3c268f983a47a2cc64182f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMW5JIT6%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpf9X2GQ%2BSitV49y9IFSos6Zk%2FQ2yV6AJGVbM%2BXxU%2BvgIgeztxdTa%2BQmWTY2CIkPKEgRVeaFouN1nfGTRh3tA9i10qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcuwWK5Lmq40WphCircAyZg7A8vfw9t1vaBt6Xjyogz9M9HVchF%2FiSn2e6tsRO4iMCqS31qv3%2Bbt2ycgqrb6B0YVZRLd6hdgpzQZMvk9gYIuuO6zajYGxagQPSfVxZvnm7EExlDkSiUILV%2FfQG1lEyx58OLxn3b46etjKSRKArN5nbjy41R4ioHw8mH4bVr8tcKpyY6Z3WO3O1LAzZLuk%2BCjpX8gaeU5GurJ6Y4OJtUaM%2F%2B9ADc11EBv5bzxmVPlSjydCrBetZr%2BBX8wDvdsyKBo6YZhXKAdjgTpna8UZvl4fbIKnwpjzzt5104XhQWD5x0rA%2BEhkSYwxj3%2FHUWR6EppNclUoy2zSxEwa4sJ1DDhUr5pWQ42tXpXaTsrxRQ2cihDJ4Y1QdyqKlajNck1K6h8pSOmNtDAoviDmau%2Bt4P1Jr2YkCq%2FR1fESmmIRktDafac2sZq2MYVzUH5Igka0ZhcGzJrYNPH2vW2tnnKWqKCMxoBoghXCUlsK96oBslC5P2a0WiUX%2BnzqWukCQ39Yh0UtO4Y8AOYslRjVgEfxwnq9T1qENRzBY8GZosWZJD4DIqO5utyIBXCh8wWiBOV%2FfipO8Q%2FGCA5HnnUkgzqD4v0uSYTLXLLvAJZM06psVtXZ3YG%2FCr7r7y%2Fbk7MPbcpMQGOqUBnYFB4S0AT2SC7zL8E5uirOWB%2BDTQ4ekf2hzMouVHPaN9Tx7i3%2BG57SqHlyhxocSQgZfgUMXHFKx1OOepACchP%2BOCzQVcMSmwnuOm1IGSDfuhkfxWWa%2Fbk%2FFbSlgEYW2QOvjpA%2FxQqYHzITghDGV74vCZu67pzvDsW32QJkJL5QicFvooHCEbkkThpzffRQ7bkjKyhG95Q9MrlmwiN7%2Fj%2B7IDPlJH&X-Amz-Signature=22f7964980f48ee57dc6e329992d542e16038e95262cfd9646a4f2a5eb524cd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMW5JIT6%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpf9X2GQ%2BSitV49y9IFSos6Zk%2FQ2yV6AJGVbM%2BXxU%2BvgIgeztxdTa%2BQmWTY2CIkPKEgRVeaFouN1nfGTRh3tA9i10qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcuwWK5Lmq40WphCircAyZg7A8vfw9t1vaBt6Xjyogz9M9HVchF%2FiSn2e6tsRO4iMCqS31qv3%2Bbt2ycgqrb6B0YVZRLd6hdgpzQZMvk9gYIuuO6zajYGxagQPSfVxZvnm7EExlDkSiUILV%2FfQG1lEyx58OLxn3b46etjKSRKArN5nbjy41R4ioHw8mH4bVr8tcKpyY6Z3WO3O1LAzZLuk%2BCjpX8gaeU5GurJ6Y4OJtUaM%2F%2B9ADc11EBv5bzxmVPlSjydCrBetZr%2BBX8wDvdsyKBo6YZhXKAdjgTpna8UZvl4fbIKnwpjzzt5104XhQWD5x0rA%2BEhkSYwxj3%2FHUWR6EppNclUoy2zSxEwa4sJ1DDhUr5pWQ42tXpXaTsrxRQ2cihDJ4Y1QdyqKlajNck1K6h8pSOmNtDAoviDmau%2Bt4P1Jr2YkCq%2FR1fESmmIRktDafac2sZq2MYVzUH5Igka0ZhcGzJrYNPH2vW2tnnKWqKCMxoBoghXCUlsK96oBslC5P2a0WiUX%2BnzqWukCQ39Yh0UtO4Y8AOYslRjVgEfxwnq9T1qENRzBY8GZosWZJD4DIqO5utyIBXCh8wWiBOV%2FfipO8Q%2FGCA5HnnUkgzqD4v0uSYTLXLLvAJZM06psVtXZ3YG%2FCr7r7y%2Fbk7MPbcpMQGOqUBnYFB4S0AT2SC7zL8E5uirOWB%2BDTQ4ekf2hzMouVHPaN9Tx7i3%2BG57SqHlyhxocSQgZfgUMXHFKx1OOepACchP%2BOCzQVcMSmwnuOm1IGSDfuhkfxWWa%2Fbk%2FFbSlgEYW2QOvjpA%2FxQqYHzITghDGV74vCZu67pzvDsW32QJkJL5QicFvooHCEbkkThpzffRQ7bkjKyhG95Q9MrlmwiN7%2Fj%2B7IDPlJH&X-Amz-Signature=80ad0bec9d21a47373f30a519ffad14e07ea15e4c477beed7ea00bfdda6b8470&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMW5JIT6%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpf9X2GQ%2BSitV49y9IFSos6Zk%2FQ2yV6AJGVbM%2BXxU%2BvgIgeztxdTa%2BQmWTY2CIkPKEgRVeaFouN1nfGTRh3tA9i10qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcuwWK5Lmq40WphCircAyZg7A8vfw9t1vaBt6Xjyogz9M9HVchF%2FiSn2e6tsRO4iMCqS31qv3%2Bbt2ycgqrb6B0YVZRLd6hdgpzQZMvk9gYIuuO6zajYGxagQPSfVxZvnm7EExlDkSiUILV%2FfQG1lEyx58OLxn3b46etjKSRKArN5nbjy41R4ioHw8mH4bVr8tcKpyY6Z3WO3O1LAzZLuk%2BCjpX8gaeU5GurJ6Y4OJtUaM%2F%2B9ADc11EBv5bzxmVPlSjydCrBetZr%2BBX8wDvdsyKBo6YZhXKAdjgTpna8UZvl4fbIKnwpjzzt5104XhQWD5x0rA%2BEhkSYwxj3%2FHUWR6EppNclUoy2zSxEwa4sJ1DDhUr5pWQ42tXpXaTsrxRQ2cihDJ4Y1QdyqKlajNck1K6h8pSOmNtDAoviDmau%2Bt4P1Jr2YkCq%2FR1fESmmIRktDafac2sZq2MYVzUH5Igka0ZhcGzJrYNPH2vW2tnnKWqKCMxoBoghXCUlsK96oBslC5P2a0WiUX%2BnzqWukCQ39Yh0UtO4Y8AOYslRjVgEfxwnq9T1qENRzBY8GZosWZJD4DIqO5utyIBXCh8wWiBOV%2FfipO8Q%2FGCA5HnnUkgzqD4v0uSYTLXLLvAJZM06psVtXZ3YG%2FCr7r7y%2Fbk7MPbcpMQGOqUBnYFB4S0AT2SC7zL8E5uirOWB%2BDTQ4ekf2hzMouVHPaN9Tx7i3%2BG57SqHlyhxocSQgZfgUMXHFKx1OOepACchP%2BOCzQVcMSmwnuOm1IGSDfuhkfxWWa%2Fbk%2FFbSlgEYW2QOvjpA%2FxQqYHzITghDGV74vCZu67pzvDsW32QJkJL5QicFvooHCEbkkThpzffRQ7bkjKyhG95Q9MrlmwiN7%2Fj%2B7IDPlJH&X-Amz-Signature=a1a320d2dfea5a4a48758659485f9cd5dc1ab55744f9aa5845925411cea99b12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMW5JIT6%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpf9X2GQ%2BSitV49y9IFSos6Zk%2FQ2yV6AJGVbM%2BXxU%2BvgIgeztxdTa%2BQmWTY2CIkPKEgRVeaFouN1nfGTRh3tA9i10qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcuwWK5Lmq40WphCircAyZg7A8vfw9t1vaBt6Xjyogz9M9HVchF%2FiSn2e6tsRO4iMCqS31qv3%2Bbt2ycgqrb6B0YVZRLd6hdgpzQZMvk9gYIuuO6zajYGxagQPSfVxZvnm7EExlDkSiUILV%2FfQG1lEyx58OLxn3b46etjKSRKArN5nbjy41R4ioHw8mH4bVr8tcKpyY6Z3WO3O1LAzZLuk%2BCjpX8gaeU5GurJ6Y4OJtUaM%2F%2B9ADc11EBv5bzxmVPlSjydCrBetZr%2BBX8wDvdsyKBo6YZhXKAdjgTpna8UZvl4fbIKnwpjzzt5104XhQWD5x0rA%2BEhkSYwxj3%2FHUWR6EppNclUoy2zSxEwa4sJ1DDhUr5pWQ42tXpXaTsrxRQ2cihDJ4Y1QdyqKlajNck1K6h8pSOmNtDAoviDmau%2Bt4P1Jr2YkCq%2FR1fESmmIRktDafac2sZq2MYVzUH5Igka0ZhcGzJrYNPH2vW2tnnKWqKCMxoBoghXCUlsK96oBslC5P2a0WiUX%2BnzqWukCQ39Yh0UtO4Y8AOYslRjVgEfxwnq9T1qENRzBY8GZosWZJD4DIqO5utyIBXCh8wWiBOV%2FfipO8Q%2FGCA5HnnUkgzqD4v0uSYTLXLLvAJZM06psVtXZ3YG%2FCr7r7y%2Fbk7MPbcpMQGOqUBnYFB4S0AT2SC7zL8E5uirOWB%2BDTQ4ekf2hzMouVHPaN9Tx7i3%2BG57SqHlyhxocSQgZfgUMXHFKx1OOepACchP%2BOCzQVcMSmwnuOm1IGSDfuhkfxWWa%2Fbk%2FFbSlgEYW2QOvjpA%2FxQqYHzITghDGV74vCZu67pzvDsW32QJkJL5QicFvooHCEbkkThpzffRQ7bkjKyhG95Q9MrlmwiN7%2Fj%2B7IDPlJH&X-Amz-Signature=72aa530bf6054f3504ffc99cbf5ec87392a48d94f4fe4a92877568bdf38f854c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMW5JIT6%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpf9X2GQ%2BSitV49y9IFSos6Zk%2FQ2yV6AJGVbM%2BXxU%2BvgIgeztxdTa%2BQmWTY2CIkPKEgRVeaFouN1nfGTRh3tA9i10qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcuwWK5Lmq40WphCircAyZg7A8vfw9t1vaBt6Xjyogz9M9HVchF%2FiSn2e6tsRO4iMCqS31qv3%2Bbt2ycgqrb6B0YVZRLd6hdgpzQZMvk9gYIuuO6zajYGxagQPSfVxZvnm7EExlDkSiUILV%2FfQG1lEyx58OLxn3b46etjKSRKArN5nbjy41R4ioHw8mH4bVr8tcKpyY6Z3WO3O1LAzZLuk%2BCjpX8gaeU5GurJ6Y4OJtUaM%2F%2B9ADc11EBv5bzxmVPlSjydCrBetZr%2BBX8wDvdsyKBo6YZhXKAdjgTpna8UZvl4fbIKnwpjzzt5104XhQWD5x0rA%2BEhkSYwxj3%2FHUWR6EppNclUoy2zSxEwa4sJ1DDhUr5pWQ42tXpXaTsrxRQ2cihDJ4Y1QdyqKlajNck1K6h8pSOmNtDAoviDmau%2Bt4P1Jr2YkCq%2FR1fESmmIRktDafac2sZq2MYVzUH5Igka0ZhcGzJrYNPH2vW2tnnKWqKCMxoBoghXCUlsK96oBslC5P2a0WiUX%2BnzqWukCQ39Yh0UtO4Y8AOYslRjVgEfxwnq9T1qENRzBY8GZosWZJD4DIqO5utyIBXCh8wWiBOV%2FfipO8Q%2FGCA5HnnUkgzqD4v0uSYTLXLLvAJZM06psVtXZ3YG%2FCr7r7y%2Fbk7MPbcpMQGOqUBnYFB4S0AT2SC7zL8E5uirOWB%2BDTQ4ekf2hzMouVHPaN9Tx7i3%2BG57SqHlyhxocSQgZfgUMXHFKx1OOepACchP%2BOCzQVcMSmwnuOm1IGSDfuhkfxWWa%2Fbk%2FFbSlgEYW2QOvjpA%2FxQqYHzITghDGV74vCZu67pzvDsW32QJkJL5QicFvooHCEbkkThpzffRQ7bkjKyhG95Q9MrlmwiN7%2Fj%2B7IDPlJH&X-Amz-Signature=f6cd85334bdd5c8149b23b27936c89b46bd661faf97830f93bac50cba0c036c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMW5JIT6%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpf9X2GQ%2BSitV49y9IFSos6Zk%2FQ2yV6AJGVbM%2BXxU%2BvgIgeztxdTa%2BQmWTY2CIkPKEgRVeaFouN1nfGTRh3tA9i10qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcuwWK5Lmq40WphCircAyZg7A8vfw9t1vaBt6Xjyogz9M9HVchF%2FiSn2e6tsRO4iMCqS31qv3%2Bbt2ycgqrb6B0YVZRLd6hdgpzQZMvk9gYIuuO6zajYGxagQPSfVxZvnm7EExlDkSiUILV%2FfQG1lEyx58OLxn3b46etjKSRKArN5nbjy41R4ioHw8mH4bVr8tcKpyY6Z3WO3O1LAzZLuk%2BCjpX8gaeU5GurJ6Y4OJtUaM%2F%2B9ADc11EBv5bzxmVPlSjydCrBetZr%2BBX8wDvdsyKBo6YZhXKAdjgTpna8UZvl4fbIKnwpjzzt5104XhQWD5x0rA%2BEhkSYwxj3%2FHUWR6EppNclUoy2zSxEwa4sJ1DDhUr5pWQ42tXpXaTsrxRQ2cihDJ4Y1QdyqKlajNck1K6h8pSOmNtDAoviDmau%2Bt4P1Jr2YkCq%2FR1fESmmIRktDafac2sZq2MYVzUH5Igka0ZhcGzJrYNPH2vW2tnnKWqKCMxoBoghXCUlsK96oBslC5P2a0WiUX%2BnzqWukCQ39Yh0UtO4Y8AOYslRjVgEfxwnq9T1qENRzBY8GZosWZJD4DIqO5utyIBXCh8wWiBOV%2FfipO8Q%2FGCA5HnnUkgzqD4v0uSYTLXLLvAJZM06psVtXZ3YG%2FCr7r7y%2Fbk7MPbcpMQGOqUBnYFB4S0AT2SC7zL8E5uirOWB%2BDTQ4ekf2hzMouVHPaN9Tx7i3%2BG57SqHlyhxocSQgZfgUMXHFKx1OOepACchP%2BOCzQVcMSmwnuOm1IGSDfuhkfxWWa%2Fbk%2FFbSlgEYW2QOvjpA%2FxQqYHzITghDGV74vCZu67pzvDsW32QJkJL5QicFvooHCEbkkThpzffRQ7bkjKyhG95Q9MrlmwiN7%2Fj%2B7IDPlJH&X-Amz-Signature=c1f602a7fcc17b751fadc0d5c12300bc1beae80e3aef8a9df8254ce8d8226450&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMW5JIT6%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpf9X2GQ%2BSitV49y9IFSos6Zk%2FQ2yV6AJGVbM%2BXxU%2BvgIgeztxdTa%2BQmWTY2CIkPKEgRVeaFouN1nfGTRh3tA9i10qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcuwWK5Lmq40WphCircAyZg7A8vfw9t1vaBt6Xjyogz9M9HVchF%2FiSn2e6tsRO4iMCqS31qv3%2Bbt2ycgqrb6B0YVZRLd6hdgpzQZMvk9gYIuuO6zajYGxagQPSfVxZvnm7EExlDkSiUILV%2FfQG1lEyx58OLxn3b46etjKSRKArN5nbjy41R4ioHw8mH4bVr8tcKpyY6Z3WO3O1LAzZLuk%2BCjpX8gaeU5GurJ6Y4OJtUaM%2F%2B9ADc11EBv5bzxmVPlSjydCrBetZr%2BBX8wDvdsyKBo6YZhXKAdjgTpna8UZvl4fbIKnwpjzzt5104XhQWD5x0rA%2BEhkSYwxj3%2FHUWR6EppNclUoy2zSxEwa4sJ1DDhUr5pWQ42tXpXaTsrxRQ2cihDJ4Y1QdyqKlajNck1K6h8pSOmNtDAoviDmau%2Bt4P1Jr2YkCq%2FR1fESmmIRktDafac2sZq2MYVzUH5Igka0ZhcGzJrYNPH2vW2tnnKWqKCMxoBoghXCUlsK96oBslC5P2a0WiUX%2BnzqWukCQ39Yh0UtO4Y8AOYslRjVgEfxwnq9T1qENRzBY8GZosWZJD4DIqO5utyIBXCh8wWiBOV%2FfipO8Q%2FGCA5HnnUkgzqD4v0uSYTLXLLvAJZM06psVtXZ3YG%2FCr7r7y%2Fbk7MPbcpMQGOqUBnYFB4S0AT2SC7zL8E5uirOWB%2BDTQ4ekf2hzMouVHPaN9Tx7i3%2BG57SqHlyhxocSQgZfgUMXHFKx1OOepACchP%2BOCzQVcMSmwnuOm1IGSDfuhkfxWWa%2Fbk%2FFbSlgEYW2QOvjpA%2FxQqYHzITghDGV74vCZu67pzvDsW32QJkJL5QicFvooHCEbkkThpzffRQ7bkjKyhG95Q9MrlmwiN7%2Fj%2B7IDPlJH&X-Amz-Signature=fae8bb896a19904788823bbba5d5fdaef7ae43ee09234c46f8120b5776ca1ad0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMW5JIT6%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpf9X2GQ%2BSitV49y9IFSos6Zk%2FQ2yV6AJGVbM%2BXxU%2BvgIgeztxdTa%2BQmWTY2CIkPKEgRVeaFouN1nfGTRh3tA9i10qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcuwWK5Lmq40WphCircAyZg7A8vfw9t1vaBt6Xjyogz9M9HVchF%2FiSn2e6tsRO4iMCqS31qv3%2Bbt2ycgqrb6B0YVZRLd6hdgpzQZMvk9gYIuuO6zajYGxagQPSfVxZvnm7EExlDkSiUILV%2FfQG1lEyx58OLxn3b46etjKSRKArN5nbjy41R4ioHw8mH4bVr8tcKpyY6Z3WO3O1LAzZLuk%2BCjpX8gaeU5GurJ6Y4OJtUaM%2F%2B9ADc11EBv5bzxmVPlSjydCrBetZr%2BBX8wDvdsyKBo6YZhXKAdjgTpna8UZvl4fbIKnwpjzzt5104XhQWD5x0rA%2BEhkSYwxj3%2FHUWR6EppNclUoy2zSxEwa4sJ1DDhUr5pWQ42tXpXaTsrxRQ2cihDJ4Y1QdyqKlajNck1K6h8pSOmNtDAoviDmau%2Bt4P1Jr2YkCq%2FR1fESmmIRktDafac2sZq2MYVzUH5Igka0ZhcGzJrYNPH2vW2tnnKWqKCMxoBoghXCUlsK96oBslC5P2a0WiUX%2BnzqWukCQ39Yh0UtO4Y8AOYslRjVgEfxwnq9T1qENRzBY8GZosWZJD4DIqO5utyIBXCh8wWiBOV%2FfipO8Q%2FGCA5HnnUkgzqD4v0uSYTLXLLvAJZM06psVtXZ3YG%2FCr7r7y%2Fbk7MPbcpMQGOqUBnYFB4S0AT2SC7zL8E5uirOWB%2BDTQ4ekf2hzMouVHPaN9Tx7i3%2BG57SqHlyhxocSQgZfgUMXHFKx1OOepACchP%2BOCzQVcMSmwnuOm1IGSDfuhkfxWWa%2Fbk%2FFbSlgEYW2QOvjpA%2FxQqYHzITghDGV74vCZu67pzvDsW32QJkJL5QicFvooHCEbkkThpzffRQ7bkjKyhG95Q9MrlmwiN7%2Fj%2B7IDPlJH&X-Amz-Signature=c5c5b4421e86a255cc1f87f99c37296e59fd3d222f092fe703ad41cd7f2cc03d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO: rviz img

## adding to launch

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMW5JIT6%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpf9X2GQ%2BSitV49y9IFSos6Zk%2FQ2yV6AJGVbM%2BXxU%2BvgIgeztxdTa%2BQmWTY2CIkPKEgRVeaFouN1nfGTRh3tA9i10qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcuwWK5Lmq40WphCircAyZg7A8vfw9t1vaBt6Xjyogz9M9HVchF%2FiSn2e6tsRO4iMCqS31qv3%2Bbt2ycgqrb6B0YVZRLd6hdgpzQZMvk9gYIuuO6zajYGxagQPSfVxZvnm7EExlDkSiUILV%2FfQG1lEyx58OLxn3b46etjKSRKArN5nbjy41R4ioHw8mH4bVr8tcKpyY6Z3WO3O1LAzZLuk%2BCjpX8gaeU5GurJ6Y4OJtUaM%2F%2B9ADc11EBv5bzxmVPlSjydCrBetZr%2BBX8wDvdsyKBo6YZhXKAdjgTpna8UZvl4fbIKnwpjzzt5104XhQWD5x0rA%2BEhkSYwxj3%2FHUWR6EppNclUoy2zSxEwa4sJ1DDhUr5pWQ42tXpXaTsrxRQ2cihDJ4Y1QdyqKlajNck1K6h8pSOmNtDAoviDmau%2Bt4P1Jr2YkCq%2FR1fESmmIRktDafac2sZq2MYVzUH5Igka0ZhcGzJrYNPH2vW2tnnKWqKCMxoBoghXCUlsK96oBslC5P2a0WiUX%2BnzqWukCQ39Yh0UtO4Y8AOYslRjVgEfxwnq9T1qENRzBY8GZosWZJD4DIqO5utyIBXCh8wWiBOV%2FfipO8Q%2FGCA5HnnUkgzqD4v0uSYTLXLLvAJZM06psVtXZ3YG%2FCr7r7y%2Fbk7MPbcpMQGOqUBnYFB4S0AT2SC7zL8E5uirOWB%2BDTQ4ekf2hzMouVHPaN9Tx7i3%2BG57SqHlyhxocSQgZfgUMXHFKx1OOepACchP%2BOCzQVcMSmwnuOm1IGSDfuhkfxWWa%2Fbk%2FFbSlgEYW2QOvjpA%2FxQqYHzITghDGV74vCZu67pzvDsW32QJkJL5QicFvooHCEbkkThpzffRQ7bkjKyhG95Q9MrlmwiN7%2Fj%2B7IDPlJH&X-Amz-Signature=8e7118af3ff74c0881d2bd5067f1165ae3ce25dd1b389be0604af7faaa1dceba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
