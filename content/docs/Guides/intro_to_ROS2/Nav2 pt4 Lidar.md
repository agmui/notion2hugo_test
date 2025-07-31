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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ42BL3U%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDVx5NKhqhMxVz6%2BVbTo%2BPc%2Bo%2BCbxNV0pXQHal1OthpQIhAICtwdNXn4PKmTAgPh%2B3Wf3NX6J2vVcWMs4ydW0hgFt4KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQAqZ6o3%2Bqe77%2FVEYq3ANxtXsnq90jj%2FTH45u7blE7oti3gqsJToC9jMokQUK6Ux3Tkh9U6SZuvAJuvsazbH7F4E2w1%2BJ8fA%2BCRvrXu5etnO07RQ2uctHeMW%2FqpFS7COWM8Hgxmm%2F7TT87rY4hqK5YUpUNYFkCIRHuCSn5WVUacz3w5Q6U3RNSiYVPB2qdtZtEXamRlKFweD9U5oJEysbK0t1AnwZCoPrzGiomiObwTeAMnWqQkwn%2F157sxryvu610YVkHraamqfED3qvlGAswNujD7S6o4LwKgGO%2FppzwA4Av0rx%2Fp%2BZwOAw%2FmhvasATD8zy4KzhW%2FCJ8RzrmKdhgrb7S%2FmFpgBSDotTduxJ6%2BJdBI4rzZ8wB63vxWQUOkt7nrPIdIJMixLUXwSCCK8cLo8go8q1z%2Fx465z28fdUilfw5QJZZmV3Dl4UNIo1ganCJO%2F7i%2FJLuMuj7JYGOOCx6YOqzeA8tg3YPhew7SRQpMZmywdjQnQytyz3pYCuc5BAuYIuCD7HfEBC5OGev7XEQqHxsp%2BQxQSsxA8f4s6blM7Wxixoir7S2OG3whY4BqCml7GvZ9KJbWlWsU9NadOWrPHfOM1Bm66ts7SZHzOU2H3c%2BePsP3IhBj4Hh%2FCGd4R43YLsVLupLINFq%2BDDEmqzEBjqkAbE4BgZliNvHJwQezNmiqMtBNuOD0BL8TaK5CJEFoV98%2F%2BgUJkuu8BuGyWL3ZJ%2FZpqarxkz%2BOWy%2FijHTGD%2BaYg14%2BG47%2Bi3DueeCucE7APu1qnZ5554%2BrqV4c5H5zDshlCrJIo4vtKN6RC4NcNzQwxqAuXrgeqT15U8thhpy%2BK76VRhJt%2BKubKmka3xZl3SnCS1IhW2ASCkHKCcISpkAdUwMX%2B2T&X-Amz-Signature=d2deea22718bf187370629ed4fb2001944597c521e0ffd582e10a7b3d65d01f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ42BL3U%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDVx5NKhqhMxVz6%2BVbTo%2BPc%2Bo%2BCbxNV0pXQHal1OthpQIhAICtwdNXn4PKmTAgPh%2B3Wf3NX6J2vVcWMs4ydW0hgFt4KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQAqZ6o3%2Bqe77%2FVEYq3ANxtXsnq90jj%2FTH45u7blE7oti3gqsJToC9jMokQUK6Ux3Tkh9U6SZuvAJuvsazbH7F4E2w1%2BJ8fA%2BCRvrXu5etnO07RQ2uctHeMW%2FqpFS7COWM8Hgxmm%2F7TT87rY4hqK5YUpUNYFkCIRHuCSn5WVUacz3w5Q6U3RNSiYVPB2qdtZtEXamRlKFweD9U5oJEysbK0t1AnwZCoPrzGiomiObwTeAMnWqQkwn%2F157sxryvu610YVkHraamqfED3qvlGAswNujD7S6o4LwKgGO%2FppzwA4Av0rx%2Fp%2BZwOAw%2FmhvasATD8zy4KzhW%2FCJ8RzrmKdhgrb7S%2FmFpgBSDotTduxJ6%2BJdBI4rzZ8wB63vxWQUOkt7nrPIdIJMixLUXwSCCK8cLo8go8q1z%2Fx465z28fdUilfw5QJZZmV3Dl4UNIo1ganCJO%2F7i%2FJLuMuj7JYGOOCx6YOqzeA8tg3YPhew7SRQpMZmywdjQnQytyz3pYCuc5BAuYIuCD7HfEBC5OGev7XEQqHxsp%2BQxQSsxA8f4s6blM7Wxixoir7S2OG3whY4BqCml7GvZ9KJbWlWsU9NadOWrPHfOM1Bm66ts7SZHzOU2H3c%2BePsP3IhBj4Hh%2FCGd4R43YLsVLupLINFq%2BDDEmqzEBjqkAbE4BgZliNvHJwQezNmiqMtBNuOD0BL8TaK5CJEFoV98%2F%2BgUJkuu8BuGyWL3ZJ%2FZpqarxkz%2BOWy%2FijHTGD%2BaYg14%2BG47%2Bi3DueeCucE7APu1qnZ5554%2BrqV4c5H5zDshlCrJIo4vtKN6RC4NcNzQwxqAuXrgeqT15U8thhpy%2BK76VRhJt%2BKubKmka3xZl3SnCS1IhW2ASCkHKCcISpkAdUwMX%2B2T&X-Amz-Signature=3819313f63b8fcfa198e664ff7d477a48be012823a7b0895c01cbd797a7aa86a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ42BL3U%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDVx5NKhqhMxVz6%2BVbTo%2BPc%2Bo%2BCbxNV0pXQHal1OthpQIhAICtwdNXn4PKmTAgPh%2B3Wf3NX6J2vVcWMs4ydW0hgFt4KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQAqZ6o3%2Bqe77%2FVEYq3ANxtXsnq90jj%2FTH45u7blE7oti3gqsJToC9jMokQUK6Ux3Tkh9U6SZuvAJuvsazbH7F4E2w1%2BJ8fA%2BCRvrXu5etnO07RQ2uctHeMW%2FqpFS7COWM8Hgxmm%2F7TT87rY4hqK5YUpUNYFkCIRHuCSn5WVUacz3w5Q6U3RNSiYVPB2qdtZtEXamRlKFweD9U5oJEysbK0t1AnwZCoPrzGiomiObwTeAMnWqQkwn%2F157sxryvu610YVkHraamqfED3qvlGAswNujD7S6o4LwKgGO%2FppzwA4Av0rx%2Fp%2BZwOAw%2FmhvasATD8zy4KzhW%2FCJ8RzrmKdhgrb7S%2FmFpgBSDotTduxJ6%2BJdBI4rzZ8wB63vxWQUOkt7nrPIdIJMixLUXwSCCK8cLo8go8q1z%2Fx465z28fdUilfw5QJZZmV3Dl4UNIo1ganCJO%2F7i%2FJLuMuj7JYGOOCx6YOqzeA8tg3YPhew7SRQpMZmywdjQnQytyz3pYCuc5BAuYIuCD7HfEBC5OGev7XEQqHxsp%2BQxQSsxA8f4s6blM7Wxixoir7S2OG3whY4BqCml7GvZ9KJbWlWsU9NadOWrPHfOM1Bm66ts7SZHzOU2H3c%2BePsP3IhBj4Hh%2FCGd4R43YLsVLupLINFq%2BDDEmqzEBjqkAbE4BgZliNvHJwQezNmiqMtBNuOD0BL8TaK5CJEFoV98%2F%2BgUJkuu8BuGyWL3ZJ%2FZpqarxkz%2BOWy%2FijHTGD%2BaYg14%2BG47%2Bi3DueeCucE7APu1qnZ5554%2BrqV4c5H5zDshlCrJIo4vtKN6RC4NcNzQwxqAuXrgeqT15U8thhpy%2BK76VRhJt%2BKubKmka3xZl3SnCS1IhW2ASCkHKCcISpkAdUwMX%2B2T&X-Amz-Signature=b6a2a9e2d685c62e233d26b19eebda5f5ec2bd008bab103fba3527d8861213b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ42BL3U%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDVx5NKhqhMxVz6%2BVbTo%2BPc%2Bo%2BCbxNV0pXQHal1OthpQIhAICtwdNXn4PKmTAgPh%2B3Wf3NX6J2vVcWMs4ydW0hgFt4KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQAqZ6o3%2Bqe77%2FVEYq3ANxtXsnq90jj%2FTH45u7blE7oti3gqsJToC9jMokQUK6Ux3Tkh9U6SZuvAJuvsazbH7F4E2w1%2BJ8fA%2BCRvrXu5etnO07RQ2uctHeMW%2FqpFS7COWM8Hgxmm%2F7TT87rY4hqK5YUpUNYFkCIRHuCSn5WVUacz3w5Q6U3RNSiYVPB2qdtZtEXamRlKFweD9U5oJEysbK0t1AnwZCoPrzGiomiObwTeAMnWqQkwn%2F157sxryvu610YVkHraamqfED3qvlGAswNujD7S6o4LwKgGO%2FppzwA4Av0rx%2Fp%2BZwOAw%2FmhvasATD8zy4KzhW%2FCJ8RzrmKdhgrb7S%2FmFpgBSDotTduxJ6%2BJdBI4rzZ8wB63vxWQUOkt7nrPIdIJMixLUXwSCCK8cLo8go8q1z%2Fx465z28fdUilfw5QJZZmV3Dl4UNIo1ganCJO%2F7i%2FJLuMuj7JYGOOCx6YOqzeA8tg3YPhew7SRQpMZmywdjQnQytyz3pYCuc5BAuYIuCD7HfEBC5OGev7XEQqHxsp%2BQxQSsxA8f4s6blM7Wxixoir7S2OG3whY4BqCml7GvZ9KJbWlWsU9NadOWrPHfOM1Bm66ts7SZHzOU2H3c%2BePsP3IhBj4Hh%2FCGd4R43YLsVLupLINFq%2BDDEmqzEBjqkAbE4BgZliNvHJwQezNmiqMtBNuOD0BL8TaK5CJEFoV98%2F%2BgUJkuu8BuGyWL3ZJ%2FZpqarxkz%2BOWy%2FijHTGD%2BaYg14%2BG47%2Bi3DueeCucE7APu1qnZ5554%2BrqV4c5H5zDshlCrJIo4vtKN6RC4NcNzQwxqAuXrgeqT15U8thhpy%2BK76VRhJt%2BKubKmka3xZl3SnCS1IhW2ASCkHKCcISpkAdUwMX%2B2T&X-Amz-Signature=6f8ccf238a4183aac5fec8af522b7a289f278f6328bfc9867a9ba640f1927f80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ42BL3U%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDVx5NKhqhMxVz6%2BVbTo%2BPc%2Bo%2BCbxNV0pXQHal1OthpQIhAICtwdNXn4PKmTAgPh%2B3Wf3NX6J2vVcWMs4ydW0hgFt4KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQAqZ6o3%2Bqe77%2FVEYq3ANxtXsnq90jj%2FTH45u7blE7oti3gqsJToC9jMokQUK6Ux3Tkh9U6SZuvAJuvsazbH7F4E2w1%2BJ8fA%2BCRvrXu5etnO07RQ2uctHeMW%2FqpFS7COWM8Hgxmm%2F7TT87rY4hqK5YUpUNYFkCIRHuCSn5WVUacz3w5Q6U3RNSiYVPB2qdtZtEXamRlKFweD9U5oJEysbK0t1AnwZCoPrzGiomiObwTeAMnWqQkwn%2F157sxryvu610YVkHraamqfED3qvlGAswNujD7S6o4LwKgGO%2FppzwA4Av0rx%2Fp%2BZwOAw%2FmhvasATD8zy4KzhW%2FCJ8RzrmKdhgrb7S%2FmFpgBSDotTduxJ6%2BJdBI4rzZ8wB63vxWQUOkt7nrPIdIJMixLUXwSCCK8cLo8go8q1z%2Fx465z28fdUilfw5QJZZmV3Dl4UNIo1ganCJO%2F7i%2FJLuMuj7JYGOOCx6YOqzeA8tg3YPhew7SRQpMZmywdjQnQytyz3pYCuc5BAuYIuCD7HfEBC5OGev7XEQqHxsp%2BQxQSsxA8f4s6blM7Wxixoir7S2OG3whY4BqCml7GvZ9KJbWlWsU9NadOWrPHfOM1Bm66ts7SZHzOU2H3c%2BePsP3IhBj4Hh%2FCGd4R43YLsVLupLINFq%2BDDEmqzEBjqkAbE4BgZliNvHJwQezNmiqMtBNuOD0BL8TaK5CJEFoV98%2F%2BgUJkuu8BuGyWL3ZJ%2FZpqarxkz%2BOWy%2FijHTGD%2BaYg14%2BG47%2Bi3DueeCucE7APu1qnZ5554%2BrqV4c5H5zDshlCrJIo4vtKN6RC4NcNzQwxqAuXrgeqT15U8thhpy%2BK76VRhJt%2BKubKmka3xZl3SnCS1IhW2ASCkHKCcISpkAdUwMX%2B2T&X-Amz-Signature=1b137d13adf133b57bee85edfb5d99ed64e94bef53e2192b54854f4eee2b8608&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ42BL3U%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDVx5NKhqhMxVz6%2BVbTo%2BPc%2Bo%2BCbxNV0pXQHal1OthpQIhAICtwdNXn4PKmTAgPh%2B3Wf3NX6J2vVcWMs4ydW0hgFt4KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQAqZ6o3%2Bqe77%2FVEYq3ANxtXsnq90jj%2FTH45u7blE7oti3gqsJToC9jMokQUK6Ux3Tkh9U6SZuvAJuvsazbH7F4E2w1%2BJ8fA%2BCRvrXu5etnO07RQ2uctHeMW%2FqpFS7COWM8Hgxmm%2F7TT87rY4hqK5YUpUNYFkCIRHuCSn5WVUacz3w5Q6U3RNSiYVPB2qdtZtEXamRlKFweD9U5oJEysbK0t1AnwZCoPrzGiomiObwTeAMnWqQkwn%2F157sxryvu610YVkHraamqfED3qvlGAswNujD7S6o4LwKgGO%2FppzwA4Av0rx%2Fp%2BZwOAw%2FmhvasATD8zy4KzhW%2FCJ8RzrmKdhgrb7S%2FmFpgBSDotTduxJ6%2BJdBI4rzZ8wB63vxWQUOkt7nrPIdIJMixLUXwSCCK8cLo8go8q1z%2Fx465z28fdUilfw5QJZZmV3Dl4UNIo1ganCJO%2F7i%2FJLuMuj7JYGOOCx6YOqzeA8tg3YPhew7SRQpMZmywdjQnQytyz3pYCuc5BAuYIuCD7HfEBC5OGev7XEQqHxsp%2BQxQSsxA8f4s6blM7Wxixoir7S2OG3whY4BqCml7GvZ9KJbWlWsU9NadOWrPHfOM1Bm66ts7SZHzOU2H3c%2BePsP3IhBj4Hh%2FCGd4R43YLsVLupLINFq%2BDDEmqzEBjqkAbE4BgZliNvHJwQezNmiqMtBNuOD0BL8TaK5CJEFoV98%2F%2BgUJkuu8BuGyWL3ZJ%2FZpqarxkz%2BOWy%2FijHTGD%2BaYg14%2BG47%2Bi3DueeCucE7APu1qnZ5554%2BrqV4c5H5zDshlCrJIo4vtKN6RC4NcNzQwxqAuXrgeqT15U8thhpy%2BK76VRhJt%2BKubKmka3xZl3SnCS1IhW2ASCkHKCcISpkAdUwMX%2B2T&X-Amz-Signature=361e7e546a01c42c1055f8a55e27cc4636f77bf39fc1d514f957fd81037ca4a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ42BL3U%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDVx5NKhqhMxVz6%2BVbTo%2BPc%2Bo%2BCbxNV0pXQHal1OthpQIhAICtwdNXn4PKmTAgPh%2B3Wf3NX6J2vVcWMs4ydW0hgFt4KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQAqZ6o3%2Bqe77%2FVEYq3ANxtXsnq90jj%2FTH45u7blE7oti3gqsJToC9jMokQUK6Ux3Tkh9U6SZuvAJuvsazbH7F4E2w1%2BJ8fA%2BCRvrXu5etnO07RQ2uctHeMW%2FqpFS7COWM8Hgxmm%2F7TT87rY4hqK5YUpUNYFkCIRHuCSn5WVUacz3w5Q6U3RNSiYVPB2qdtZtEXamRlKFweD9U5oJEysbK0t1AnwZCoPrzGiomiObwTeAMnWqQkwn%2F157sxryvu610YVkHraamqfED3qvlGAswNujD7S6o4LwKgGO%2FppzwA4Av0rx%2Fp%2BZwOAw%2FmhvasATD8zy4KzhW%2FCJ8RzrmKdhgrb7S%2FmFpgBSDotTduxJ6%2BJdBI4rzZ8wB63vxWQUOkt7nrPIdIJMixLUXwSCCK8cLo8go8q1z%2Fx465z28fdUilfw5QJZZmV3Dl4UNIo1ganCJO%2F7i%2FJLuMuj7JYGOOCx6YOqzeA8tg3YPhew7SRQpMZmywdjQnQytyz3pYCuc5BAuYIuCD7HfEBC5OGev7XEQqHxsp%2BQxQSsxA8f4s6blM7Wxixoir7S2OG3whY4BqCml7GvZ9KJbWlWsU9NadOWrPHfOM1Bm66ts7SZHzOU2H3c%2BePsP3IhBj4Hh%2FCGd4R43YLsVLupLINFq%2BDDEmqzEBjqkAbE4BgZliNvHJwQezNmiqMtBNuOD0BL8TaK5CJEFoV98%2F%2BgUJkuu8BuGyWL3ZJ%2FZpqarxkz%2BOWy%2FijHTGD%2BaYg14%2BG47%2Bi3DueeCucE7APu1qnZ5554%2BrqV4c5H5zDshlCrJIo4vtKN6RC4NcNzQwxqAuXrgeqT15U8thhpy%2BK76VRhJt%2BKubKmka3xZl3SnCS1IhW2ASCkHKCcISpkAdUwMX%2B2T&X-Amz-Signature=e4f42c29ab8810fed6847491b49373c74d8eb8f6078159ea091e1eca1bb01daf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ42BL3U%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDVx5NKhqhMxVz6%2BVbTo%2BPc%2Bo%2BCbxNV0pXQHal1OthpQIhAICtwdNXn4PKmTAgPh%2B3Wf3NX6J2vVcWMs4ydW0hgFt4KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQAqZ6o3%2Bqe77%2FVEYq3ANxtXsnq90jj%2FTH45u7blE7oti3gqsJToC9jMokQUK6Ux3Tkh9U6SZuvAJuvsazbH7F4E2w1%2BJ8fA%2BCRvrXu5etnO07RQ2uctHeMW%2FqpFS7COWM8Hgxmm%2F7TT87rY4hqK5YUpUNYFkCIRHuCSn5WVUacz3w5Q6U3RNSiYVPB2qdtZtEXamRlKFweD9U5oJEysbK0t1AnwZCoPrzGiomiObwTeAMnWqQkwn%2F157sxryvu610YVkHraamqfED3qvlGAswNujD7S6o4LwKgGO%2FppzwA4Av0rx%2Fp%2BZwOAw%2FmhvasATD8zy4KzhW%2FCJ8RzrmKdhgrb7S%2FmFpgBSDotTduxJ6%2BJdBI4rzZ8wB63vxWQUOkt7nrPIdIJMixLUXwSCCK8cLo8go8q1z%2Fx465z28fdUilfw5QJZZmV3Dl4UNIo1ganCJO%2F7i%2FJLuMuj7JYGOOCx6YOqzeA8tg3YPhew7SRQpMZmywdjQnQytyz3pYCuc5BAuYIuCD7HfEBC5OGev7XEQqHxsp%2BQxQSsxA8f4s6blM7Wxixoir7S2OG3whY4BqCml7GvZ9KJbWlWsU9NadOWrPHfOM1Bm66ts7SZHzOU2H3c%2BePsP3IhBj4Hh%2FCGd4R43YLsVLupLINFq%2BDDEmqzEBjqkAbE4BgZliNvHJwQezNmiqMtBNuOD0BL8TaK5CJEFoV98%2F%2BgUJkuu8BuGyWL3ZJ%2FZpqarxkz%2BOWy%2FijHTGD%2BaYg14%2BG47%2Bi3DueeCucE7APu1qnZ5554%2BrqV4c5H5zDshlCrJIo4vtKN6RC4NcNzQwxqAuXrgeqT15U8thhpy%2BK76VRhJt%2BKubKmka3xZl3SnCS1IhW2ASCkHKCcISpkAdUwMX%2B2T&X-Amz-Signature=98ec099c608072d0912e536968d3f5c67b2bee5955532dfed05a08e1b0095ab4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ42BL3U%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDVx5NKhqhMxVz6%2BVbTo%2BPc%2Bo%2BCbxNV0pXQHal1OthpQIhAICtwdNXn4PKmTAgPh%2B3Wf3NX6J2vVcWMs4ydW0hgFt4KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQAqZ6o3%2Bqe77%2FVEYq3ANxtXsnq90jj%2FTH45u7blE7oti3gqsJToC9jMokQUK6Ux3Tkh9U6SZuvAJuvsazbH7F4E2w1%2BJ8fA%2BCRvrXu5etnO07RQ2uctHeMW%2FqpFS7COWM8Hgxmm%2F7TT87rY4hqK5YUpUNYFkCIRHuCSn5WVUacz3w5Q6U3RNSiYVPB2qdtZtEXamRlKFweD9U5oJEysbK0t1AnwZCoPrzGiomiObwTeAMnWqQkwn%2F157sxryvu610YVkHraamqfED3qvlGAswNujD7S6o4LwKgGO%2FppzwA4Av0rx%2Fp%2BZwOAw%2FmhvasATD8zy4KzhW%2FCJ8RzrmKdhgrb7S%2FmFpgBSDotTduxJ6%2BJdBI4rzZ8wB63vxWQUOkt7nrPIdIJMixLUXwSCCK8cLo8go8q1z%2Fx465z28fdUilfw5QJZZmV3Dl4UNIo1ganCJO%2F7i%2FJLuMuj7JYGOOCx6YOqzeA8tg3YPhew7SRQpMZmywdjQnQytyz3pYCuc5BAuYIuCD7HfEBC5OGev7XEQqHxsp%2BQxQSsxA8f4s6blM7Wxixoir7S2OG3whY4BqCml7GvZ9KJbWlWsU9NadOWrPHfOM1Bm66ts7SZHzOU2H3c%2BePsP3IhBj4Hh%2FCGd4R43YLsVLupLINFq%2BDDEmqzEBjqkAbE4BgZliNvHJwQezNmiqMtBNuOD0BL8TaK5CJEFoV98%2F%2BgUJkuu8BuGyWL3ZJ%2FZpqarxkz%2BOWy%2FijHTGD%2BaYg14%2BG47%2Bi3DueeCucE7APu1qnZ5554%2BrqV4c5H5zDshlCrJIo4vtKN6RC4NcNzQwxqAuXrgeqT15U8thhpy%2BK76VRhJt%2BKubKmka3xZl3SnCS1IhW2ASCkHKCcISpkAdUwMX%2B2T&X-Amz-Signature=50266bae9fb5824efc683fff7c436ef6f1cdb815cde2ef49ac3b5d9265caebe8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ42BL3U%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDVx5NKhqhMxVz6%2BVbTo%2BPc%2Bo%2BCbxNV0pXQHal1OthpQIhAICtwdNXn4PKmTAgPh%2B3Wf3NX6J2vVcWMs4ydW0hgFt4KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQAqZ6o3%2Bqe77%2FVEYq3ANxtXsnq90jj%2FTH45u7blE7oti3gqsJToC9jMokQUK6Ux3Tkh9U6SZuvAJuvsazbH7F4E2w1%2BJ8fA%2BCRvrXu5etnO07RQ2uctHeMW%2FqpFS7COWM8Hgxmm%2F7TT87rY4hqK5YUpUNYFkCIRHuCSn5WVUacz3w5Q6U3RNSiYVPB2qdtZtEXamRlKFweD9U5oJEysbK0t1AnwZCoPrzGiomiObwTeAMnWqQkwn%2F157sxryvu610YVkHraamqfED3qvlGAswNujD7S6o4LwKgGO%2FppzwA4Av0rx%2Fp%2BZwOAw%2FmhvasATD8zy4KzhW%2FCJ8RzrmKdhgrb7S%2FmFpgBSDotTduxJ6%2BJdBI4rzZ8wB63vxWQUOkt7nrPIdIJMixLUXwSCCK8cLo8go8q1z%2Fx465z28fdUilfw5QJZZmV3Dl4UNIo1ganCJO%2F7i%2FJLuMuj7JYGOOCx6YOqzeA8tg3YPhew7SRQpMZmywdjQnQytyz3pYCuc5BAuYIuCD7HfEBC5OGev7XEQqHxsp%2BQxQSsxA8f4s6blM7Wxixoir7S2OG3whY4BqCml7GvZ9KJbWlWsU9NadOWrPHfOM1Bm66ts7SZHzOU2H3c%2BePsP3IhBj4Hh%2FCGd4R43YLsVLupLINFq%2BDDEmqzEBjqkAbE4BgZliNvHJwQezNmiqMtBNuOD0BL8TaK5CJEFoV98%2F%2BgUJkuu8BuGyWL3ZJ%2FZpqarxkz%2BOWy%2FijHTGD%2BaYg14%2BG47%2Bi3DueeCucE7APu1qnZ5554%2BrqV4c5H5zDshlCrJIo4vtKN6RC4NcNzQwxqAuXrgeqT15U8thhpy%2BK76VRhJt%2BKubKmka3xZl3SnCS1IhW2ASCkHKCcISpkAdUwMX%2B2T&X-Amz-Signature=ed631bdeb4775e0f30b4e1db2a57820aa1a393e76e42eab5af919a2637ef13a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
