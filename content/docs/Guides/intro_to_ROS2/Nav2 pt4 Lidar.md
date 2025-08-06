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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RRYUSW3%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIHbNqpEpBvyR0%2BQBao0Na%2FYlHNzvSKs%2F6FivDum1PRMQAiAv5rgdVAOjeemREWmu6%2BN0eqssP5vdo5dA3eNKqga4fSr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMlnOoZVggabmXHMXIKtwD7unowXA0O6tYxqKERFBY%2B1%2Fb2Kc30h0kXiHLaRKAq3b763CnPodOkmAkgHSfyNC%2FYkrLf46nAvCZ1%2BFoLBSmeiUzxo7a%2FTuvxCp5VIlqZecpv6c0p%2F4gJAcajoBqQQrCAZHtnZJS3VV2RCGceKpN2%2BMyttFNyi7z0ZviOWzMz5WgM8ShK5%2F9U7a8FgAF3m1YcCjjGjkCp510N9xT0NBI25NFhRSZRQisUXCr%2BbWu53pJjON7lJ1cM8Qii1HLc8ZDvW2tnfacg8HgCKEONJYZDCbKA%2FB0skq5JJ%2BuQK6srVJQpeHESWkQ1Jw9cuv1za6wMIIh%2FaEIpQZlvvJrwVxvaWfVlK8UKvyz2rDyrozo3ILkIMhgMkUvtjEXK%2FvCyXVVbXPKL8mVvVRxy36X3kXpHhUfQgPMIimKcE%2FiP%2F8zIl5IF3HY17uwsqwXVVkM%2Fm89mkpqkEzOdhpjQ%2F5RnhHvr%2F%2Bsyifmumpg67bd8bXXVbffN0XHTi9sDpzYIXU0toDLVnnltnGCYC%2F%2FGeYDQsUZjVxL58iBft3CWoA2pteOgSPXmgEdiiVfryudWL4BlioTKdzcRnS8UlwZlxsL9Qc%2Fs23ZFAzkpOyE23QVwp%2BZ7w%2FNrjB6qkVaO73EJo8wt8vLxAY6pgGtFhWfnr%2Bi8kR7Ix3ewm%2FKSkQiiiebl9tSpKq1euxnIOCLORi8Nqf3YSjTjdg5KU6BL1segwNelgwEA2ydwP1svauCxhw3eL9RYOZcyD4iNu3TEYce6mzgGgtOHmqRcTiNlqicZQA%2BOsmWIL0ZbV2yuY4XkiecyWzR1%2FtypZvSlsEEh5aJIqDcsbebUZSEolztd4Eh3JebD2mZirNnm69rm4ulYhiA&X-Amz-Signature=82f5e1d5b11e7e77fc68823dff19c627b65d8730661e200eeba6531b2476d33c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKMRC5CC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEeV%2F3WOMb7%2Bcv15KYttaWbsZC1VrliRXqiulxpfgfB9AiEAgSaArdwrKwohwdbvLNz8Q8%2FKsZr3F5WZIIuElxuqPi8q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDPnoBaLiggGsDjmGyyrcA4SsLa0Xcr2EO%2BHKgIgPIg%2BZHyje29ty0ALzLLPAS3cJ5jIrJh8VGKWNm2kMXxv%2F9MkS36NnyCW5ogn2IhxWJQh2l5c71Qiw8uI1MLcIvDrZPAZtbLaHFi7To1%2FdD3gVrA6NjZEbe47yJOoB02MKc6hHLk2U3DKR8ha%2Fd9HMJe0qiMHhVnSXnZj6s0477q2RawALCRb%2FbdzheCO8G6wN6tiLnAIXMUUNyOV8iymFjf2PTIyOETykB5jQvxZFgp66ZnZNMkae1kMrQr84E8Bx5%2Fg1T9NNeW1ev4UZ9pnzak3Cw5Bkj5TyMt3Y9jNS9oDgzuSCcrDAcxWfKAzPO05kcus%2FTin0IM6mQk%2FjfO2PQ8nMWYajVPDD8KzJNZ69KALMbJcgzrm2oYUFlRzpAWNk3aSjrOB7PNOjw6dpteDq9ZcXf9de1HdZpa6NK2Cw%2Bc%2FVuAS4B79WAwqFqrUA2oD759arYHqAggHg8tzzXjHJ9dnuVrYPVlhe0gopJYN5jTru1eUn%2F1l716x1vFwcU%2BdLIQKWSyZ246sVpF4A2hswOBi%2F%2Fydi%2FeQJT2BlDWtNbSmm5XNqOWVFVKzznIUavnUF72pOM%2BSvZykLPyYoDgaUj0R3eLgrfyLYppW7IeDrMKrLy8QGOqUBUPzmASHWoUgyYs1aw83giGX6REY388GwJXFCxvdXHghkU1GND8NmF2nLeAjirgX73SKDnkLpM8zu5tv91ky7ZDu98%2Fg%2FgfvE2bMQLylK%2BRUtV3qlqZlWCeonEXugzI21SfOqcLrYTQyd8rld6wDCpeCss7wiBPw74iQrpJQ54olSfGGah0xsYp4SYfmZ0xGKVpVQHndT%2B7rDEDaRxpHpBOXHU8Nx&X-Amz-Signature=1e712cebffddd77ca5e0de74a49aeed041df5fc35f63f75d8bc5235cce9e7ce5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKMRC5CC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEeV%2F3WOMb7%2Bcv15KYttaWbsZC1VrliRXqiulxpfgfB9AiEAgSaArdwrKwohwdbvLNz8Q8%2FKsZr3F5WZIIuElxuqPi8q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDPnoBaLiggGsDjmGyyrcA4SsLa0Xcr2EO%2BHKgIgPIg%2BZHyje29ty0ALzLLPAS3cJ5jIrJh8VGKWNm2kMXxv%2F9MkS36NnyCW5ogn2IhxWJQh2l5c71Qiw8uI1MLcIvDrZPAZtbLaHFi7To1%2FdD3gVrA6NjZEbe47yJOoB02MKc6hHLk2U3DKR8ha%2Fd9HMJe0qiMHhVnSXnZj6s0477q2RawALCRb%2FbdzheCO8G6wN6tiLnAIXMUUNyOV8iymFjf2PTIyOETykB5jQvxZFgp66ZnZNMkae1kMrQr84E8Bx5%2Fg1T9NNeW1ev4UZ9pnzak3Cw5Bkj5TyMt3Y9jNS9oDgzuSCcrDAcxWfKAzPO05kcus%2FTin0IM6mQk%2FjfO2PQ8nMWYajVPDD8KzJNZ69KALMbJcgzrm2oYUFlRzpAWNk3aSjrOB7PNOjw6dpteDq9ZcXf9de1HdZpa6NK2Cw%2Bc%2FVuAS4B79WAwqFqrUA2oD759arYHqAggHg8tzzXjHJ9dnuVrYPVlhe0gopJYN5jTru1eUn%2F1l716x1vFwcU%2BdLIQKWSyZ246sVpF4A2hswOBi%2F%2Fydi%2FeQJT2BlDWtNbSmm5XNqOWVFVKzznIUavnUF72pOM%2BSvZykLPyYoDgaUj0R3eLgrfyLYppW7IeDrMKrLy8QGOqUBUPzmASHWoUgyYs1aw83giGX6REY388GwJXFCxvdXHghkU1GND8NmF2nLeAjirgX73SKDnkLpM8zu5tv91ky7ZDu98%2Fg%2FgfvE2bMQLylK%2BRUtV3qlqZlWCeonEXugzI21SfOqcLrYTQyd8rld6wDCpeCss7wiBPw74iQrpJQ54olSfGGah0xsYp4SYfmZ0xGKVpVQHndT%2B7rDEDaRxpHpBOXHU8Nx&X-Amz-Signature=22ed50405b11472dce8022fa6dbd2d6059e95e042ce0c6b5279a359d951aa098&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKMRC5CC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEeV%2F3WOMb7%2Bcv15KYttaWbsZC1VrliRXqiulxpfgfB9AiEAgSaArdwrKwohwdbvLNz8Q8%2FKsZr3F5WZIIuElxuqPi8q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDPnoBaLiggGsDjmGyyrcA4SsLa0Xcr2EO%2BHKgIgPIg%2BZHyje29ty0ALzLLPAS3cJ5jIrJh8VGKWNm2kMXxv%2F9MkS36NnyCW5ogn2IhxWJQh2l5c71Qiw8uI1MLcIvDrZPAZtbLaHFi7To1%2FdD3gVrA6NjZEbe47yJOoB02MKc6hHLk2U3DKR8ha%2Fd9HMJe0qiMHhVnSXnZj6s0477q2RawALCRb%2FbdzheCO8G6wN6tiLnAIXMUUNyOV8iymFjf2PTIyOETykB5jQvxZFgp66ZnZNMkae1kMrQr84E8Bx5%2Fg1T9NNeW1ev4UZ9pnzak3Cw5Bkj5TyMt3Y9jNS9oDgzuSCcrDAcxWfKAzPO05kcus%2FTin0IM6mQk%2FjfO2PQ8nMWYajVPDD8KzJNZ69KALMbJcgzrm2oYUFlRzpAWNk3aSjrOB7PNOjw6dpteDq9ZcXf9de1HdZpa6NK2Cw%2Bc%2FVuAS4B79WAwqFqrUA2oD759arYHqAggHg8tzzXjHJ9dnuVrYPVlhe0gopJYN5jTru1eUn%2F1l716x1vFwcU%2BdLIQKWSyZ246sVpF4A2hswOBi%2F%2Fydi%2FeQJT2BlDWtNbSmm5XNqOWVFVKzznIUavnUF72pOM%2BSvZykLPyYoDgaUj0R3eLgrfyLYppW7IeDrMKrLy8QGOqUBUPzmASHWoUgyYs1aw83giGX6REY388GwJXFCxvdXHghkU1GND8NmF2nLeAjirgX73SKDnkLpM8zu5tv91ky7ZDu98%2Fg%2FgfvE2bMQLylK%2BRUtV3qlqZlWCeonEXugzI21SfOqcLrYTQyd8rld6wDCpeCss7wiBPw74iQrpJQ54olSfGGah0xsYp4SYfmZ0xGKVpVQHndT%2B7rDEDaRxpHpBOXHU8Nx&X-Amz-Signature=84a513d20ce9661ff2b87e2f4b8cfc4c3d913432eb0a844e9ad1191faace78c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKMRC5CC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEeV%2F3WOMb7%2Bcv15KYttaWbsZC1VrliRXqiulxpfgfB9AiEAgSaArdwrKwohwdbvLNz8Q8%2FKsZr3F5WZIIuElxuqPi8q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDPnoBaLiggGsDjmGyyrcA4SsLa0Xcr2EO%2BHKgIgPIg%2BZHyje29ty0ALzLLPAS3cJ5jIrJh8VGKWNm2kMXxv%2F9MkS36NnyCW5ogn2IhxWJQh2l5c71Qiw8uI1MLcIvDrZPAZtbLaHFi7To1%2FdD3gVrA6NjZEbe47yJOoB02MKc6hHLk2U3DKR8ha%2Fd9HMJe0qiMHhVnSXnZj6s0477q2RawALCRb%2FbdzheCO8G6wN6tiLnAIXMUUNyOV8iymFjf2PTIyOETykB5jQvxZFgp66ZnZNMkae1kMrQr84E8Bx5%2Fg1T9NNeW1ev4UZ9pnzak3Cw5Bkj5TyMt3Y9jNS9oDgzuSCcrDAcxWfKAzPO05kcus%2FTin0IM6mQk%2FjfO2PQ8nMWYajVPDD8KzJNZ69KALMbJcgzrm2oYUFlRzpAWNk3aSjrOB7PNOjw6dpteDq9ZcXf9de1HdZpa6NK2Cw%2Bc%2FVuAS4B79WAwqFqrUA2oD759arYHqAggHg8tzzXjHJ9dnuVrYPVlhe0gopJYN5jTru1eUn%2F1l716x1vFwcU%2BdLIQKWSyZ246sVpF4A2hswOBi%2F%2Fydi%2FeQJT2BlDWtNbSmm5XNqOWVFVKzznIUavnUF72pOM%2BSvZykLPyYoDgaUj0R3eLgrfyLYppW7IeDrMKrLy8QGOqUBUPzmASHWoUgyYs1aw83giGX6REY388GwJXFCxvdXHghkU1GND8NmF2nLeAjirgX73SKDnkLpM8zu5tv91ky7ZDu98%2Fg%2FgfvE2bMQLylK%2BRUtV3qlqZlWCeonEXugzI21SfOqcLrYTQyd8rld6wDCpeCss7wiBPw74iQrpJQ54olSfGGah0xsYp4SYfmZ0xGKVpVQHndT%2B7rDEDaRxpHpBOXHU8Nx&X-Amz-Signature=3dcc50e372084b4d9637ec28cb8ba960036fa46a86ccfa97dca4a024e3d3969a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKMRC5CC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEeV%2F3WOMb7%2Bcv15KYttaWbsZC1VrliRXqiulxpfgfB9AiEAgSaArdwrKwohwdbvLNz8Q8%2FKsZr3F5WZIIuElxuqPi8q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDPnoBaLiggGsDjmGyyrcA4SsLa0Xcr2EO%2BHKgIgPIg%2BZHyje29ty0ALzLLPAS3cJ5jIrJh8VGKWNm2kMXxv%2F9MkS36NnyCW5ogn2IhxWJQh2l5c71Qiw8uI1MLcIvDrZPAZtbLaHFi7To1%2FdD3gVrA6NjZEbe47yJOoB02MKc6hHLk2U3DKR8ha%2Fd9HMJe0qiMHhVnSXnZj6s0477q2RawALCRb%2FbdzheCO8G6wN6tiLnAIXMUUNyOV8iymFjf2PTIyOETykB5jQvxZFgp66ZnZNMkae1kMrQr84E8Bx5%2Fg1T9NNeW1ev4UZ9pnzak3Cw5Bkj5TyMt3Y9jNS9oDgzuSCcrDAcxWfKAzPO05kcus%2FTin0IM6mQk%2FjfO2PQ8nMWYajVPDD8KzJNZ69KALMbJcgzrm2oYUFlRzpAWNk3aSjrOB7PNOjw6dpteDq9ZcXf9de1HdZpa6NK2Cw%2Bc%2FVuAS4B79WAwqFqrUA2oD759arYHqAggHg8tzzXjHJ9dnuVrYPVlhe0gopJYN5jTru1eUn%2F1l716x1vFwcU%2BdLIQKWSyZ246sVpF4A2hswOBi%2F%2Fydi%2FeQJT2BlDWtNbSmm5XNqOWVFVKzznIUavnUF72pOM%2BSvZykLPyYoDgaUj0R3eLgrfyLYppW7IeDrMKrLy8QGOqUBUPzmASHWoUgyYs1aw83giGX6REY388GwJXFCxvdXHghkU1GND8NmF2nLeAjirgX73SKDnkLpM8zu5tv91ky7ZDu98%2Fg%2FgfvE2bMQLylK%2BRUtV3qlqZlWCeonEXugzI21SfOqcLrYTQyd8rld6wDCpeCss7wiBPw74iQrpJQ54olSfGGah0xsYp4SYfmZ0xGKVpVQHndT%2B7rDEDaRxpHpBOXHU8Nx&X-Amz-Signature=91acdfb935dbef7123cfbf9389b9dfbdf05b5e4ddafb0923c6f09b3eba295c9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKMRC5CC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEeV%2F3WOMb7%2Bcv15KYttaWbsZC1VrliRXqiulxpfgfB9AiEAgSaArdwrKwohwdbvLNz8Q8%2FKsZr3F5WZIIuElxuqPi8q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDPnoBaLiggGsDjmGyyrcA4SsLa0Xcr2EO%2BHKgIgPIg%2BZHyje29ty0ALzLLPAS3cJ5jIrJh8VGKWNm2kMXxv%2F9MkS36NnyCW5ogn2IhxWJQh2l5c71Qiw8uI1MLcIvDrZPAZtbLaHFi7To1%2FdD3gVrA6NjZEbe47yJOoB02MKc6hHLk2U3DKR8ha%2Fd9HMJe0qiMHhVnSXnZj6s0477q2RawALCRb%2FbdzheCO8G6wN6tiLnAIXMUUNyOV8iymFjf2PTIyOETykB5jQvxZFgp66ZnZNMkae1kMrQr84E8Bx5%2Fg1T9NNeW1ev4UZ9pnzak3Cw5Bkj5TyMt3Y9jNS9oDgzuSCcrDAcxWfKAzPO05kcus%2FTin0IM6mQk%2FjfO2PQ8nMWYajVPDD8KzJNZ69KALMbJcgzrm2oYUFlRzpAWNk3aSjrOB7PNOjw6dpteDq9ZcXf9de1HdZpa6NK2Cw%2Bc%2FVuAS4B79WAwqFqrUA2oD759arYHqAggHg8tzzXjHJ9dnuVrYPVlhe0gopJYN5jTru1eUn%2F1l716x1vFwcU%2BdLIQKWSyZ246sVpF4A2hswOBi%2F%2Fydi%2FeQJT2BlDWtNbSmm5XNqOWVFVKzznIUavnUF72pOM%2BSvZykLPyYoDgaUj0R3eLgrfyLYppW7IeDrMKrLy8QGOqUBUPzmASHWoUgyYs1aw83giGX6REY388GwJXFCxvdXHghkU1GND8NmF2nLeAjirgX73SKDnkLpM8zu5tv91ky7ZDu98%2Fg%2FgfvE2bMQLylK%2BRUtV3qlqZlWCeonEXugzI21SfOqcLrYTQyd8rld6wDCpeCss7wiBPw74iQrpJQ54olSfGGah0xsYp4SYfmZ0xGKVpVQHndT%2B7rDEDaRxpHpBOXHU8Nx&X-Amz-Signature=fe6dd8effe9c16374d9f8ff0895b67e6e67030e471cbe27e68d5cd9b3dc6b744&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKMRC5CC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEeV%2F3WOMb7%2Bcv15KYttaWbsZC1VrliRXqiulxpfgfB9AiEAgSaArdwrKwohwdbvLNz8Q8%2FKsZr3F5WZIIuElxuqPi8q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDPnoBaLiggGsDjmGyyrcA4SsLa0Xcr2EO%2BHKgIgPIg%2BZHyje29ty0ALzLLPAS3cJ5jIrJh8VGKWNm2kMXxv%2F9MkS36NnyCW5ogn2IhxWJQh2l5c71Qiw8uI1MLcIvDrZPAZtbLaHFi7To1%2FdD3gVrA6NjZEbe47yJOoB02MKc6hHLk2U3DKR8ha%2Fd9HMJe0qiMHhVnSXnZj6s0477q2RawALCRb%2FbdzheCO8G6wN6tiLnAIXMUUNyOV8iymFjf2PTIyOETykB5jQvxZFgp66ZnZNMkae1kMrQr84E8Bx5%2Fg1T9NNeW1ev4UZ9pnzak3Cw5Bkj5TyMt3Y9jNS9oDgzuSCcrDAcxWfKAzPO05kcus%2FTin0IM6mQk%2FjfO2PQ8nMWYajVPDD8KzJNZ69KALMbJcgzrm2oYUFlRzpAWNk3aSjrOB7PNOjw6dpteDq9ZcXf9de1HdZpa6NK2Cw%2Bc%2FVuAS4B79WAwqFqrUA2oD759arYHqAggHg8tzzXjHJ9dnuVrYPVlhe0gopJYN5jTru1eUn%2F1l716x1vFwcU%2BdLIQKWSyZ246sVpF4A2hswOBi%2F%2Fydi%2FeQJT2BlDWtNbSmm5XNqOWVFVKzznIUavnUF72pOM%2BSvZykLPyYoDgaUj0R3eLgrfyLYppW7IeDrMKrLy8QGOqUBUPzmASHWoUgyYs1aw83giGX6REY388GwJXFCxvdXHghkU1GND8NmF2nLeAjirgX73SKDnkLpM8zu5tv91ky7ZDu98%2Fg%2FgfvE2bMQLylK%2BRUtV3qlqZlWCeonEXugzI21SfOqcLrYTQyd8rld6wDCpeCss7wiBPw74iQrpJQ54olSfGGah0xsYp4SYfmZ0xGKVpVQHndT%2B7rDEDaRxpHpBOXHU8Nx&X-Amz-Signature=da73f6627080ceb42be42e5e6eafe96f2fb2c5019bc90f37d24c5d07d2e7741e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKMRC5CC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEeV%2F3WOMb7%2Bcv15KYttaWbsZC1VrliRXqiulxpfgfB9AiEAgSaArdwrKwohwdbvLNz8Q8%2FKsZr3F5WZIIuElxuqPi8q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDPnoBaLiggGsDjmGyyrcA4SsLa0Xcr2EO%2BHKgIgPIg%2BZHyje29ty0ALzLLPAS3cJ5jIrJh8VGKWNm2kMXxv%2F9MkS36NnyCW5ogn2IhxWJQh2l5c71Qiw8uI1MLcIvDrZPAZtbLaHFi7To1%2FdD3gVrA6NjZEbe47yJOoB02MKc6hHLk2U3DKR8ha%2Fd9HMJe0qiMHhVnSXnZj6s0477q2RawALCRb%2FbdzheCO8G6wN6tiLnAIXMUUNyOV8iymFjf2PTIyOETykB5jQvxZFgp66ZnZNMkae1kMrQr84E8Bx5%2Fg1T9NNeW1ev4UZ9pnzak3Cw5Bkj5TyMt3Y9jNS9oDgzuSCcrDAcxWfKAzPO05kcus%2FTin0IM6mQk%2FjfO2PQ8nMWYajVPDD8KzJNZ69KALMbJcgzrm2oYUFlRzpAWNk3aSjrOB7PNOjw6dpteDq9ZcXf9de1HdZpa6NK2Cw%2Bc%2FVuAS4B79WAwqFqrUA2oD759arYHqAggHg8tzzXjHJ9dnuVrYPVlhe0gopJYN5jTru1eUn%2F1l716x1vFwcU%2BdLIQKWSyZ246sVpF4A2hswOBi%2F%2Fydi%2FeQJT2BlDWtNbSmm5XNqOWVFVKzznIUavnUF72pOM%2BSvZykLPyYoDgaUj0R3eLgrfyLYppW7IeDrMKrLy8QGOqUBUPzmASHWoUgyYs1aw83giGX6REY388GwJXFCxvdXHghkU1GND8NmF2nLeAjirgX73SKDnkLpM8zu5tv91ky7ZDu98%2Fg%2FgfvE2bMQLylK%2BRUtV3qlqZlWCeonEXugzI21SfOqcLrYTQyd8rld6wDCpeCss7wiBPw74iQrpJQ54olSfGGah0xsYp4SYfmZ0xGKVpVQHndT%2B7rDEDaRxpHpBOXHU8Nx&X-Amz-Signature=44d2fe0c25e47242dc04c82dcc213bc8e0c47895484f739156967da5dcd6e3c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKMRC5CC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEeV%2F3WOMb7%2Bcv15KYttaWbsZC1VrliRXqiulxpfgfB9AiEAgSaArdwrKwohwdbvLNz8Q8%2FKsZr3F5WZIIuElxuqPi8q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDPnoBaLiggGsDjmGyyrcA4SsLa0Xcr2EO%2BHKgIgPIg%2BZHyje29ty0ALzLLPAS3cJ5jIrJh8VGKWNm2kMXxv%2F9MkS36NnyCW5ogn2IhxWJQh2l5c71Qiw8uI1MLcIvDrZPAZtbLaHFi7To1%2FdD3gVrA6NjZEbe47yJOoB02MKc6hHLk2U3DKR8ha%2Fd9HMJe0qiMHhVnSXnZj6s0477q2RawALCRb%2FbdzheCO8G6wN6tiLnAIXMUUNyOV8iymFjf2PTIyOETykB5jQvxZFgp66ZnZNMkae1kMrQr84E8Bx5%2Fg1T9NNeW1ev4UZ9pnzak3Cw5Bkj5TyMt3Y9jNS9oDgzuSCcrDAcxWfKAzPO05kcus%2FTin0IM6mQk%2FjfO2PQ8nMWYajVPDD8KzJNZ69KALMbJcgzrm2oYUFlRzpAWNk3aSjrOB7PNOjw6dpteDq9ZcXf9de1HdZpa6NK2Cw%2Bc%2FVuAS4B79WAwqFqrUA2oD759arYHqAggHg8tzzXjHJ9dnuVrYPVlhe0gopJYN5jTru1eUn%2F1l716x1vFwcU%2BdLIQKWSyZ246sVpF4A2hswOBi%2F%2Fydi%2FeQJT2BlDWtNbSmm5XNqOWVFVKzznIUavnUF72pOM%2BSvZykLPyYoDgaUj0R3eLgrfyLYppW7IeDrMKrLy8QGOqUBUPzmASHWoUgyYs1aw83giGX6REY388GwJXFCxvdXHghkU1GND8NmF2nLeAjirgX73SKDnkLpM8zu5tv91ky7ZDu98%2Fg%2FgfvE2bMQLylK%2BRUtV3qlqZlWCeonEXugzI21SfOqcLrYTQyd8rld6wDCpeCss7wiBPw74iQrpJQ54olSfGGah0xsYp4SYfmZ0xGKVpVQHndT%2B7rDEDaRxpHpBOXHU8Nx&X-Amz-Signature=2fa3ee3fa8bfe3d601580333c7fd237b1bc470e06bdc86681b63197ec25b42ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKMRC5CC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEeV%2F3WOMb7%2Bcv15KYttaWbsZC1VrliRXqiulxpfgfB9AiEAgSaArdwrKwohwdbvLNz8Q8%2FKsZr3F5WZIIuElxuqPi8q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDPnoBaLiggGsDjmGyyrcA4SsLa0Xcr2EO%2BHKgIgPIg%2BZHyje29ty0ALzLLPAS3cJ5jIrJh8VGKWNm2kMXxv%2F9MkS36NnyCW5ogn2IhxWJQh2l5c71Qiw8uI1MLcIvDrZPAZtbLaHFi7To1%2FdD3gVrA6NjZEbe47yJOoB02MKc6hHLk2U3DKR8ha%2Fd9HMJe0qiMHhVnSXnZj6s0477q2RawALCRb%2FbdzheCO8G6wN6tiLnAIXMUUNyOV8iymFjf2PTIyOETykB5jQvxZFgp66ZnZNMkae1kMrQr84E8Bx5%2Fg1T9NNeW1ev4UZ9pnzak3Cw5Bkj5TyMt3Y9jNS9oDgzuSCcrDAcxWfKAzPO05kcus%2FTin0IM6mQk%2FjfO2PQ8nMWYajVPDD8KzJNZ69KALMbJcgzrm2oYUFlRzpAWNk3aSjrOB7PNOjw6dpteDq9ZcXf9de1HdZpa6NK2Cw%2Bc%2FVuAS4B79WAwqFqrUA2oD759arYHqAggHg8tzzXjHJ9dnuVrYPVlhe0gopJYN5jTru1eUn%2F1l716x1vFwcU%2BdLIQKWSyZ246sVpF4A2hswOBi%2F%2Fydi%2FeQJT2BlDWtNbSmm5XNqOWVFVKzznIUavnUF72pOM%2BSvZykLPyYoDgaUj0R3eLgrfyLYppW7IeDrMKrLy8QGOqUBUPzmASHWoUgyYs1aw83giGX6REY388GwJXFCxvdXHghkU1GND8NmF2nLeAjirgX73SKDnkLpM8zu5tv91ky7ZDu98%2Fg%2FgfvE2bMQLylK%2BRUtV3qlqZlWCeonEXugzI21SfOqcLrYTQyd8rld6wDCpeCss7wiBPw74iQrpJQ54olSfGGah0xsYp4SYfmZ0xGKVpVQHndT%2B7rDEDaRxpHpBOXHU8Nx&X-Amz-Signature=3dcc50e372084b4d9637ec28cb8ba960036fa46a86ccfa97dca4a024e3d3969a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
