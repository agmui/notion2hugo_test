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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEP5VHKT%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpVmez8Nr4is9EFVKAp5FvBxJjD%2BaRHXqcVE2ljjcH2AiEAoqcV3EMR31iviOKR94Ks0tIfVwID44p%2BYRFhuj2r4CAq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDAv2ROgR5HDpCokM1ircAyWSEIsmKQLYO9k0kgy0XrzyW29aOt7K0Y%2FMwPZKkfVd8oqT8%2Fj7p1CO7daoTUbEe0rRoYM%2F5INi0L6sdX2acHa5R9vXHKO7EdBnP%2FRhENpBzOCbpTH0fQgMTS7%2Fa0N3gAFnnxfjWdxcctpn%2B8zUtBw12cc4Q25QVnI50ieuAaySP3w5FlF92H6BC5P5zGs6R3vA9KHU6xd0HTDNzmuzLvzt5J2%2FwMgvJVHR3ZysJ1jASTZE8AqBx5bL1eeXwqyHQldiBU%2FgIi9OGntwmHyKmL1%2Fj8zeuTefMIGoruwAcnbHD21FGlTQckdJfABFhqT6eOoRANZ6DBO7eLFoQP8%2FiX18oIJrTDbpiVjRUy6pPvoT%2FgMvZcxK8Gu0eu9Wd53txuxY7EDnsan7w9tDchrtjyxBDGgecLGb%2Fb1zx%2BqPAMOHnO1%2BRv%2F5UxmypJNXEjYAL7Ffk2c141h%2B0BYQVQWz46beqYBSa%2FdILW3djRsBds8G%2FpEWDWHQ%2BPrIYUCG8l9V5T9QE%2BXq9Wv7GAmkiv0DaSLDjKRa8o%2BASjTb%2B0z8TsKY0tKoZE3ek%2FtE5rMqSZvF9yBWl2KeK9AbbM322KbjuUI1ZQ%2F9uX9Q2UTUUiIiDxgmYup5%2FHdZP5f9iV7cMPnL48UGOqUBWmg4mnt91CB54M70uv0%2BPd8Osb3BiF0%2FlaaKbneWZFDlQQOelW8GQOhXC1pISjggcSRZpSMhWEsZOx8mOlnAXIFQq2Ea%2BIsi6RHAKpIaBi6cN6MTVt8Nj9UJ95Hy9WyShzIfIr7td3aOJ7D6buPAXRrN1cN46Bmmc0QmpXhUscwpEzP7T1ZZZWWamiNcC1Q9zHpzW9gUNCRX7m%2Fj9xBs54oZSbOJ&X-Amz-Signature=41c79b7530bd6fbaad4d6f30eefc78c8508f218626f1a6627bb7025bf6883828&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFT2ZXHJ%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBSXuU%2BedY2a4H8IcbrFpD6RUFIAIXHhGyM%2BiTbgqJyAIhAJqBjTnJ6RThX9N4QOYVh2acpqNGdmTyZsW9MATx4eXbKv8DCFEQABoMNjM3NDIzMTgzODA1IgxliU37%2BvEiPGgCfdUq3APvldacxboc93iTozQo7EMmGZURLN82E0%2BeNsPg2IGJ8J6gsYUYWX2245zVkuJk3wUARCIZHTo4odI3aCfXHmAio%2FfDchYIMEHBqXFgs76R5Rlb0Ivl2CGUphu5foaK60GnuNb32wxMsBjV1%2B9bmW6DB3utNY3mOdmJN%2FkSnaqEil4LXS20%2BIOAaQ9fzTFQCp%2FiWGkGGqM8vywtzneHoOb8YBQK%2FjhsNICnWfsGmmKrujl%2BFmutMuhChWwTeo%2BJm4JCiguWzvhmXkVewERCXL%2Bli0AvPqLQsoIlbgx462C%2Fr98hhZl5gQlC8hICKxvnFXpKCDMMznixv8%2F8ziiLQWvtZUcn6QVJ4I96MCxGSMHjb%2FybvJp0cR1%2BubutYOPDXSktz8QW760P4HeQxyRDM7xs9v5LMgcUKq4WG1TTkRa9nWDKEB0dTAmzLu%2F8h4KUHXcptMUKy8neYxXhHk8pB1IacK41jk6K%2FD8HbGfcfhRcg4ePftvL4ONtkF0e3v1eH1ROF9Vnfc%2F%2Bx%2B%2FSS935oY4ibOb%2BIrbR9Vzk1K%2B50G4%2Bq3KWz3d6tp9AuXZsw0Z0xqA2C3PfehDlfRxp2fh4%2Bqn4Hf9r7F04T7UmMYTK0T5m91Smvij5wiMrIntKjjCPtuPFBjqkASo4gmERf3waRc7NWZ%2BceZKsIqAVVUpMdHlIJL9hJWJYHfzO5FlWt7tK0SCDjY687pieEbWNnElSEjZeRQDg25ETQU5hVvfw%2B5nDrqAis%2BXh72cBIj%2BMLqsQEvxyT2YPNWdM3QYL%2BERCfxCkpboflLeOJapMlC4sz0KiKk5UAUtrvqtTanrOQIbuB5stL8gk3n2QWhGuEsqgqmV0yBAgrMFiTVrS&X-Amz-Signature=c11caeb800f0d9a6860a6fbad5e862629c4bc611a1f3b0fad00b8adee7035ac6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFT2ZXHJ%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBSXuU%2BedY2a4H8IcbrFpD6RUFIAIXHhGyM%2BiTbgqJyAIhAJqBjTnJ6RThX9N4QOYVh2acpqNGdmTyZsW9MATx4eXbKv8DCFEQABoMNjM3NDIzMTgzODA1IgxliU37%2BvEiPGgCfdUq3APvldacxboc93iTozQo7EMmGZURLN82E0%2BeNsPg2IGJ8J6gsYUYWX2245zVkuJk3wUARCIZHTo4odI3aCfXHmAio%2FfDchYIMEHBqXFgs76R5Rlb0Ivl2CGUphu5foaK60GnuNb32wxMsBjV1%2B9bmW6DB3utNY3mOdmJN%2FkSnaqEil4LXS20%2BIOAaQ9fzTFQCp%2FiWGkGGqM8vywtzneHoOb8YBQK%2FjhsNICnWfsGmmKrujl%2BFmutMuhChWwTeo%2BJm4JCiguWzvhmXkVewERCXL%2Bli0AvPqLQsoIlbgx462C%2Fr98hhZl5gQlC8hICKxvnFXpKCDMMznixv8%2F8ziiLQWvtZUcn6QVJ4I96MCxGSMHjb%2FybvJp0cR1%2BubutYOPDXSktz8QW760P4HeQxyRDM7xs9v5LMgcUKq4WG1TTkRa9nWDKEB0dTAmzLu%2F8h4KUHXcptMUKy8neYxXhHk8pB1IacK41jk6K%2FD8HbGfcfhRcg4ePftvL4ONtkF0e3v1eH1ROF9Vnfc%2F%2Bx%2B%2FSS935oY4ibOb%2BIrbR9Vzk1K%2B50G4%2Bq3KWz3d6tp9AuXZsw0Z0xqA2C3PfehDlfRxp2fh4%2Bqn4Hf9r7F04T7UmMYTK0T5m91Smvij5wiMrIntKjjCPtuPFBjqkASo4gmERf3waRc7NWZ%2BceZKsIqAVVUpMdHlIJL9hJWJYHfzO5FlWt7tK0SCDjY687pieEbWNnElSEjZeRQDg25ETQU5hVvfw%2B5nDrqAis%2BXh72cBIj%2BMLqsQEvxyT2YPNWdM3QYL%2BERCfxCkpboflLeOJapMlC4sz0KiKk5UAUtrvqtTanrOQIbuB5stL8gk3n2QWhGuEsqgqmV0yBAgrMFiTVrS&X-Amz-Signature=daedcf299258971e72cd970039ea285290c453924ce9958e105755eca558c55c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFT2ZXHJ%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBSXuU%2BedY2a4H8IcbrFpD6RUFIAIXHhGyM%2BiTbgqJyAIhAJqBjTnJ6RThX9N4QOYVh2acpqNGdmTyZsW9MATx4eXbKv8DCFEQABoMNjM3NDIzMTgzODA1IgxliU37%2BvEiPGgCfdUq3APvldacxboc93iTozQo7EMmGZURLN82E0%2BeNsPg2IGJ8J6gsYUYWX2245zVkuJk3wUARCIZHTo4odI3aCfXHmAio%2FfDchYIMEHBqXFgs76R5Rlb0Ivl2CGUphu5foaK60GnuNb32wxMsBjV1%2B9bmW6DB3utNY3mOdmJN%2FkSnaqEil4LXS20%2BIOAaQ9fzTFQCp%2FiWGkGGqM8vywtzneHoOb8YBQK%2FjhsNICnWfsGmmKrujl%2BFmutMuhChWwTeo%2BJm4JCiguWzvhmXkVewERCXL%2Bli0AvPqLQsoIlbgx462C%2Fr98hhZl5gQlC8hICKxvnFXpKCDMMznixv8%2F8ziiLQWvtZUcn6QVJ4I96MCxGSMHjb%2FybvJp0cR1%2BubutYOPDXSktz8QW760P4HeQxyRDM7xs9v5LMgcUKq4WG1TTkRa9nWDKEB0dTAmzLu%2F8h4KUHXcptMUKy8neYxXhHk8pB1IacK41jk6K%2FD8HbGfcfhRcg4ePftvL4ONtkF0e3v1eH1ROF9Vnfc%2F%2Bx%2B%2FSS935oY4ibOb%2BIrbR9Vzk1K%2B50G4%2Bq3KWz3d6tp9AuXZsw0Z0xqA2C3PfehDlfRxp2fh4%2Bqn4Hf9r7F04T7UmMYTK0T5m91Smvij5wiMrIntKjjCPtuPFBjqkASo4gmERf3waRc7NWZ%2BceZKsIqAVVUpMdHlIJL9hJWJYHfzO5FlWt7tK0SCDjY687pieEbWNnElSEjZeRQDg25ETQU5hVvfw%2B5nDrqAis%2BXh72cBIj%2BMLqsQEvxyT2YPNWdM3QYL%2BERCfxCkpboflLeOJapMlC4sz0KiKk5UAUtrvqtTanrOQIbuB5stL8gk3n2QWhGuEsqgqmV0yBAgrMFiTVrS&X-Amz-Signature=5e0bc9f39ccddb510eb5804f55902b02c9c4225cb1e7b5420e8ef15d696687ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFT2ZXHJ%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBSXuU%2BedY2a4H8IcbrFpD6RUFIAIXHhGyM%2BiTbgqJyAIhAJqBjTnJ6RThX9N4QOYVh2acpqNGdmTyZsW9MATx4eXbKv8DCFEQABoMNjM3NDIzMTgzODA1IgxliU37%2BvEiPGgCfdUq3APvldacxboc93iTozQo7EMmGZURLN82E0%2BeNsPg2IGJ8J6gsYUYWX2245zVkuJk3wUARCIZHTo4odI3aCfXHmAio%2FfDchYIMEHBqXFgs76R5Rlb0Ivl2CGUphu5foaK60GnuNb32wxMsBjV1%2B9bmW6DB3utNY3mOdmJN%2FkSnaqEil4LXS20%2BIOAaQ9fzTFQCp%2FiWGkGGqM8vywtzneHoOb8YBQK%2FjhsNICnWfsGmmKrujl%2BFmutMuhChWwTeo%2BJm4JCiguWzvhmXkVewERCXL%2Bli0AvPqLQsoIlbgx462C%2Fr98hhZl5gQlC8hICKxvnFXpKCDMMznixv8%2F8ziiLQWvtZUcn6QVJ4I96MCxGSMHjb%2FybvJp0cR1%2BubutYOPDXSktz8QW760P4HeQxyRDM7xs9v5LMgcUKq4WG1TTkRa9nWDKEB0dTAmzLu%2F8h4KUHXcptMUKy8neYxXhHk8pB1IacK41jk6K%2FD8HbGfcfhRcg4ePftvL4ONtkF0e3v1eH1ROF9Vnfc%2F%2Bx%2B%2FSS935oY4ibOb%2BIrbR9Vzk1K%2B50G4%2Bq3KWz3d6tp9AuXZsw0Z0xqA2C3PfehDlfRxp2fh4%2Bqn4Hf9r7F04T7UmMYTK0T5m91Smvij5wiMrIntKjjCPtuPFBjqkASo4gmERf3waRc7NWZ%2BceZKsIqAVVUpMdHlIJL9hJWJYHfzO5FlWt7tK0SCDjY687pieEbWNnElSEjZeRQDg25ETQU5hVvfw%2B5nDrqAis%2BXh72cBIj%2BMLqsQEvxyT2YPNWdM3QYL%2BERCfxCkpboflLeOJapMlC4sz0KiKk5UAUtrvqtTanrOQIbuB5stL8gk3n2QWhGuEsqgqmV0yBAgrMFiTVrS&X-Amz-Signature=1363d6f3940d558b151e8b96721009453adf5abeefbc04141e5db5e81b3b9d26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFT2ZXHJ%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBSXuU%2BedY2a4H8IcbrFpD6RUFIAIXHhGyM%2BiTbgqJyAIhAJqBjTnJ6RThX9N4QOYVh2acpqNGdmTyZsW9MATx4eXbKv8DCFEQABoMNjM3NDIzMTgzODA1IgxliU37%2BvEiPGgCfdUq3APvldacxboc93iTozQo7EMmGZURLN82E0%2BeNsPg2IGJ8J6gsYUYWX2245zVkuJk3wUARCIZHTo4odI3aCfXHmAio%2FfDchYIMEHBqXFgs76R5Rlb0Ivl2CGUphu5foaK60GnuNb32wxMsBjV1%2B9bmW6DB3utNY3mOdmJN%2FkSnaqEil4LXS20%2BIOAaQ9fzTFQCp%2FiWGkGGqM8vywtzneHoOb8YBQK%2FjhsNICnWfsGmmKrujl%2BFmutMuhChWwTeo%2BJm4JCiguWzvhmXkVewERCXL%2Bli0AvPqLQsoIlbgx462C%2Fr98hhZl5gQlC8hICKxvnFXpKCDMMznixv8%2F8ziiLQWvtZUcn6QVJ4I96MCxGSMHjb%2FybvJp0cR1%2BubutYOPDXSktz8QW760P4HeQxyRDM7xs9v5LMgcUKq4WG1TTkRa9nWDKEB0dTAmzLu%2F8h4KUHXcptMUKy8neYxXhHk8pB1IacK41jk6K%2FD8HbGfcfhRcg4ePftvL4ONtkF0e3v1eH1ROF9Vnfc%2F%2Bx%2B%2FSS935oY4ibOb%2BIrbR9Vzk1K%2B50G4%2Bq3KWz3d6tp9AuXZsw0Z0xqA2C3PfehDlfRxp2fh4%2Bqn4Hf9r7F04T7UmMYTK0T5m91Smvij5wiMrIntKjjCPtuPFBjqkASo4gmERf3waRc7NWZ%2BceZKsIqAVVUpMdHlIJL9hJWJYHfzO5FlWt7tK0SCDjY687pieEbWNnElSEjZeRQDg25ETQU5hVvfw%2B5nDrqAis%2BXh72cBIj%2BMLqsQEvxyT2YPNWdM3QYL%2BERCfxCkpboflLeOJapMlC4sz0KiKk5UAUtrvqtTanrOQIbuB5stL8gk3n2QWhGuEsqgqmV0yBAgrMFiTVrS&X-Amz-Signature=9a6370109aaeff3d20e8a6a5cd47c1c2cfe87b17b2e95ef1d074ec2228c71b84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFT2ZXHJ%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBSXuU%2BedY2a4H8IcbrFpD6RUFIAIXHhGyM%2BiTbgqJyAIhAJqBjTnJ6RThX9N4QOYVh2acpqNGdmTyZsW9MATx4eXbKv8DCFEQABoMNjM3NDIzMTgzODA1IgxliU37%2BvEiPGgCfdUq3APvldacxboc93iTozQo7EMmGZURLN82E0%2BeNsPg2IGJ8J6gsYUYWX2245zVkuJk3wUARCIZHTo4odI3aCfXHmAio%2FfDchYIMEHBqXFgs76R5Rlb0Ivl2CGUphu5foaK60GnuNb32wxMsBjV1%2B9bmW6DB3utNY3mOdmJN%2FkSnaqEil4LXS20%2BIOAaQ9fzTFQCp%2FiWGkGGqM8vywtzneHoOb8YBQK%2FjhsNICnWfsGmmKrujl%2BFmutMuhChWwTeo%2BJm4JCiguWzvhmXkVewERCXL%2Bli0AvPqLQsoIlbgx462C%2Fr98hhZl5gQlC8hICKxvnFXpKCDMMznixv8%2F8ziiLQWvtZUcn6QVJ4I96MCxGSMHjb%2FybvJp0cR1%2BubutYOPDXSktz8QW760P4HeQxyRDM7xs9v5LMgcUKq4WG1TTkRa9nWDKEB0dTAmzLu%2F8h4KUHXcptMUKy8neYxXhHk8pB1IacK41jk6K%2FD8HbGfcfhRcg4ePftvL4ONtkF0e3v1eH1ROF9Vnfc%2F%2Bx%2B%2FSS935oY4ibOb%2BIrbR9Vzk1K%2B50G4%2Bq3KWz3d6tp9AuXZsw0Z0xqA2C3PfehDlfRxp2fh4%2Bqn4Hf9r7F04T7UmMYTK0T5m91Smvij5wiMrIntKjjCPtuPFBjqkASo4gmERf3waRc7NWZ%2BceZKsIqAVVUpMdHlIJL9hJWJYHfzO5FlWt7tK0SCDjY687pieEbWNnElSEjZeRQDg25ETQU5hVvfw%2B5nDrqAis%2BXh72cBIj%2BMLqsQEvxyT2YPNWdM3QYL%2BERCfxCkpboflLeOJapMlC4sz0KiKk5UAUtrvqtTanrOQIbuB5stL8gk3n2QWhGuEsqgqmV0yBAgrMFiTVrS&X-Amz-Signature=c555ccca7c3f42256beb1c3d9b662f3db0abc2c6778fc101f952b864627236e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFT2ZXHJ%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBSXuU%2BedY2a4H8IcbrFpD6RUFIAIXHhGyM%2BiTbgqJyAIhAJqBjTnJ6RThX9N4QOYVh2acpqNGdmTyZsW9MATx4eXbKv8DCFEQABoMNjM3NDIzMTgzODA1IgxliU37%2BvEiPGgCfdUq3APvldacxboc93iTozQo7EMmGZURLN82E0%2BeNsPg2IGJ8J6gsYUYWX2245zVkuJk3wUARCIZHTo4odI3aCfXHmAio%2FfDchYIMEHBqXFgs76R5Rlb0Ivl2CGUphu5foaK60GnuNb32wxMsBjV1%2B9bmW6DB3utNY3mOdmJN%2FkSnaqEil4LXS20%2BIOAaQ9fzTFQCp%2FiWGkGGqM8vywtzneHoOb8YBQK%2FjhsNICnWfsGmmKrujl%2BFmutMuhChWwTeo%2BJm4JCiguWzvhmXkVewERCXL%2Bli0AvPqLQsoIlbgx462C%2Fr98hhZl5gQlC8hICKxvnFXpKCDMMznixv8%2F8ziiLQWvtZUcn6QVJ4I96MCxGSMHjb%2FybvJp0cR1%2BubutYOPDXSktz8QW760P4HeQxyRDM7xs9v5LMgcUKq4WG1TTkRa9nWDKEB0dTAmzLu%2F8h4KUHXcptMUKy8neYxXhHk8pB1IacK41jk6K%2FD8HbGfcfhRcg4ePftvL4ONtkF0e3v1eH1ROF9Vnfc%2F%2Bx%2B%2FSS935oY4ibOb%2BIrbR9Vzk1K%2B50G4%2Bq3KWz3d6tp9AuXZsw0Z0xqA2C3PfehDlfRxp2fh4%2Bqn4Hf9r7F04T7UmMYTK0T5m91Smvij5wiMrIntKjjCPtuPFBjqkASo4gmERf3waRc7NWZ%2BceZKsIqAVVUpMdHlIJL9hJWJYHfzO5FlWt7tK0SCDjY687pieEbWNnElSEjZeRQDg25ETQU5hVvfw%2B5nDrqAis%2BXh72cBIj%2BMLqsQEvxyT2YPNWdM3QYL%2BERCfxCkpboflLeOJapMlC4sz0KiKk5UAUtrvqtTanrOQIbuB5stL8gk3n2QWhGuEsqgqmV0yBAgrMFiTVrS&X-Amz-Signature=7bfa5a0429dcc52b9ce734ac413855689f7af4aecaab86cd109c79ca601cbab2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFT2ZXHJ%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBSXuU%2BedY2a4H8IcbrFpD6RUFIAIXHhGyM%2BiTbgqJyAIhAJqBjTnJ6RThX9N4QOYVh2acpqNGdmTyZsW9MATx4eXbKv8DCFEQABoMNjM3NDIzMTgzODA1IgxliU37%2BvEiPGgCfdUq3APvldacxboc93iTozQo7EMmGZURLN82E0%2BeNsPg2IGJ8J6gsYUYWX2245zVkuJk3wUARCIZHTo4odI3aCfXHmAio%2FfDchYIMEHBqXFgs76R5Rlb0Ivl2CGUphu5foaK60GnuNb32wxMsBjV1%2B9bmW6DB3utNY3mOdmJN%2FkSnaqEil4LXS20%2BIOAaQ9fzTFQCp%2FiWGkGGqM8vywtzneHoOb8YBQK%2FjhsNICnWfsGmmKrujl%2BFmutMuhChWwTeo%2BJm4JCiguWzvhmXkVewERCXL%2Bli0AvPqLQsoIlbgx462C%2Fr98hhZl5gQlC8hICKxvnFXpKCDMMznixv8%2F8ziiLQWvtZUcn6QVJ4I96MCxGSMHjb%2FybvJp0cR1%2BubutYOPDXSktz8QW760P4HeQxyRDM7xs9v5LMgcUKq4WG1TTkRa9nWDKEB0dTAmzLu%2F8h4KUHXcptMUKy8neYxXhHk8pB1IacK41jk6K%2FD8HbGfcfhRcg4ePftvL4ONtkF0e3v1eH1ROF9Vnfc%2F%2Bx%2B%2FSS935oY4ibOb%2BIrbR9Vzk1K%2B50G4%2Bq3KWz3d6tp9AuXZsw0Z0xqA2C3PfehDlfRxp2fh4%2Bqn4Hf9r7F04T7UmMYTK0T5m91Smvij5wiMrIntKjjCPtuPFBjqkASo4gmERf3waRc7NWZ%2BceZKsIqAVVUpMdHlIJL9hJWJYHfzO5FlWt7tK0SCDjY687pieEbWNnElSEjZeRQDg25ETQU5hVvfw%2B5nDrqAis%2BXh72cBIj%2BMLqsQEvxyT2YPNWdM3QYL%2BERCfxCkpboflLeOJapMlC4sz0KiKk5UAUtrvqtTanrOQIbuB5stL8gk3n2QWhGuEsqgqmV0yBAgrMFiTVrS&X-Amz-Signature=99a464e628ff91ba0934aa57d918eca3c5f546a0c45de7347e43992088d6d5a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFT2ZXHJ%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBSXuU%2BedY2a4H8IcbrFpD6RUFIAIXHhGyM%2BiTbgqJyAIhAJqBjTnJ6RThX9N4QOYVh2acpqNGdmTyZsW9MATx4eXbKv8DCFEQABoMNjM3NDIzMTgzODA1IgxliU37%2BvEiPGgCfdUq3APvldacxboc93iTozQo7EMmGZURLN82E0%2BeNsPg2IGJ8J6gsYUYWX2245zVkuJk3wUARCIZHTo4odI3aCfXHmAio%2FfDchYIMEHBqXFgs76R5Rlb0Ivl2CGUphu5foaK60GnuNb32wxMsBjV1%2B9bmW6DB3utNY3mOdmJN%2FkSnaqEil4LXS20%2BIOAaQ9fzTFQCp%2FiWGkGGqM8vywtzneHoOb8YBQK%2FjhsNICnWfsGmmKrujl%2BFmutMuhChWwTeo%2BJm4JCiguWzvhmXkVewERCXL%2Bli0AvPqLQsoIlbgx462C%2Fr98hhZl5gQlC8hICKxvnFXpKCDMMznixv8%2F8ziiLQWvtZUcn6QVJ4I96MCxGSMHjb%2FybvJp0cR1%2BubutYOPDXSktz8QW760P4HeQxyRDM7xs9v5LMgcUKq4WG1TTkRa9nWDKEB0dTAmzLu%2F8h4KUHXcptMUKy8neYxXhHk8pB1IacK41jk6K%2FD8HbGfcfhRcg4ePftvL4ONtkF0e3v1eH1ROF9Vnfc%2F%2Bx%2B%2FSS935oY4ibOb%2BIrbR9Vzk1K%2B50G4%2Bq3KWz3d6tp9AuXZsw0Z0xqA2C3PfehDlfRxp2fh4%2Bqn4Hf9r7F04T7UmMYTK0T5m91Smvij5wiMrIntKjjCPtuPFBjqkASo4gmERf3waRc7NWZ%2BceZKsIqAVVUpMdHlIJL9hJWJYHfzO5FlWt7tK0SCDjY687pieEbWNnElSEjZeRQDg25ETQU5hVvfw%2B5nDrqAis%2BXh72cBIj%2BMLqsQEvxyT2YPNWdM3QYL%2BERCfxCkpboflLeOJapMlC4sz0KiKk5UAUtrvqtTanrOQIbuB5stL8gk3n2QWhGuEsqgqmV0yBAgrMFiTVrS&X-Amz-Signature=0f21cbe271cf9aa13bfcda125c4d196368cc0cdaab4f974e19c464085bedac3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFT2ZXHJ%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBSXuU%2BedY2a4H8IcbrFpD6RUFIAIXHhGyM%2BiTbgqJyAIhAJqBjTnJ6RThX9N4QOYVh2acpqNGdmTyZsW9MATx4eXbKv8DCFEQABoMNjM3NDIzMTgzODA1IgxliU37%2BvEiPGgCfdUq3APvldacxboc93iTozQo7EMmGZURLN82E0%2BeNsPg2IGJ8J6gsYUYWX2245zVkuJk3wUARCIZHTo4odI3aCfXHmAio%2FfDchYIMEHBqXFgs76R5Rlb0Ivl2CGUphu5foaK60GnuNb32wxMsBjV1%2B9bmW6DB3utNY3mOdmJN%2FkSnaqEil4LXS20%2BIOAaQ9fzTFQCp%2FiWGkGGqM8vywtzneHoOb8YBQK%2FjhsNICnWfsGmmKrujl%2BFmutMuhChWwTeo%2BJm4JCiguWzvhmXkVewERCXL%2Bli0AvPqLQsoIlbgx462C%2Fr98hhZl5gQlC8hICKxvnFXpKCDMMznixv8%2F8ziiLQWvtZUcn6QVJ4I96MCxGSMHjb%2FybvJp0cR1%2BubutYOPDXSktz8QW760P4HeQxyRDM7xs9v5LMgcUKq4WG1TTkRa9nWDKEB0dTAmzLu%2F8h4KUHXcptMUKy8neYxXhHk8pB1IacK41jk6K%2FD8HbGfcfhRcg4ePftvL4ONtkF0e3v1eH1ROF9Vnfc%2F%2Bx%2B%2FSS935oY4ibOb%2BIrbR9Vzk1K%2B50G4%2Bq3KWz3d6tp9AuXZsw0Z0xqA2C3PfehDlfRxp2fh4%2Bqn4Hf9r7F04T7UmMYTK0T5m91Smvij5wiMrIntKjjCPtuPFBjqkASo4gmERf3waRc7NWZ%2BceZKsIqAVVUpMdHlIJL9hJWJYHfzO5FlWt7tK0SCDjY687pieEbWNnElSEjZeRQDg25ETQU5hVvfw%2B5nDrqAis%2BXh72cBIj%2BMLqsQEvxyT2YPNWdM3QYL%2BERCfxCkpboflLeOJapMlC4sz0KiKk5UAUtrvqtTanrOQIbuB5stL8gk3n2QWhGuEsqgqmV0yBAgrMFiTVrS&X-Amz-Signature=5bbea35a80de81682a4df52dadabfef1337b20ee4c7ac9f0bca7c84d653e877b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
