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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JTZBAO2%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQDf6rto5wY1mOJj68ZcQlpEhONz7pb7NTbBq4n0itKZ3AIgY5sv5V6ctCyoPLdpZhcO2TAxF0pF6XLYd9S5WNyXpJAq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDMp%2BzJgVSv%2FqOOk6nCrcA2BWcV%2BJy0c9o%2BoQter21wvP9Jiob4n37agJddTL1%2FMAIMMueQ4OlzvyFRz%2FSwmJ4B%2B0pfqhv5Hnhfp4m4Br02QDRVy8lNyq1hdlRrbtvvFTMqc%2Fk4q%2FBLJhSra%2BHlRLNr%2BOBVSLtsFMPoDBMPqrBWf6MNoP6jO7RozrKic5mBTt7X3SnGeQVwF2htmjcK%2FxcNLi01t6qdnZHnND0TR7Si8FwY%2FM9yR7V54M1QlM3B0AyL7qJoCMtXA7tdn3H7zyyP3elSIJDDW3OPpxtKzkw4d3es32jE9J%2FnAGiDb%2FygIer6kC7sv1T4Li1UB8%2FxzEGLaDBZAkwdKmNkKANkI1hiqEa9vqKJdskKJ%2FwiUbtcbOAy7Esu1QbTSYL5Z%2BmYDcHBKjWAUVXo%2FLblHtrRDG1zIw0GePXW9%2FE5syBbHctrOFwWBc2Oc7eEYmOGBLoEnOGlICTwUztYuBveyliyQT7YqvO%2BMwsRblEM9iJTP46DxFe9hgJhHYqqFUysBVRbp96kCLHSksNz9Rz14ar7943xbeHz7IYMV%2Bup93DUiI9rSFidl4vgJ5HpV5B6GtrPsXGpQuy1ZP0fnaGIqmxYj7q3XDzWrVXvhWXtJF1Zy0l6b6Id5zaztH2QZ2WsS1MLKj%2B8QGOqUBIoV7l0SWew4y27sN%2F4PBy541rmIkQz5l7kMOqhyKmCG3PTyxB82q0f8auyb%2FdIPPVdsKki%2Br%2Bpd9dVvxQOrA3QDucwuzQdUmYXhte4jLE4GDZVo4dEfr9b2F4n3YlQfxYgfrkATAlHmEGwiyRSxN1aU090pTa12XzbxKpbLpuRExNbc%2BDmmx2Ic4TELvn6vA9mQ3uQtajMGQkFhp8BS3%2FcZjCu%2F%2B&X-Amz-Signature=9a2b5f7ae9c57a5116c5d5972d1dc2fbe65988e1ff25dbe2453f5e0002da412f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQSXEXSR%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCICVvmdkUEKobvx1jcgtzS1ykznVTGgiZ7KxUoYCBThuiAiEAwuLMWTzBtJVp6QqbRqkqDvum%2Bzx37aVyLAx33RXggUMq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDCN2CHcEFo7GdNW1GSrcAzNwH9K5fYNc0Ami6PDoLezM5XpFSLQ6H%2FS4oB5gNiUsebQlt%2FM77IutLTrdFAc9m8LYeIF6wcKKMAhz7CBnH7zYMjUJe02VBT0%2FI2qjbAXJTiHF1ek9TrNVRBEhVWdYSBdx73wR9hfoGzZiIVyIw0pwWL5Ea2Djsfq1Bx1vHC1RROrT2xQ4K2QVPWcPN8GJBnCmA9QMDWut1NtDV17%2BDcT69xAhtb6CUNgGKe%2FQrIOg5aI3UEqCJxEviknkYRtLdE6Py0BwEtafzT8cVsSJLJpUDBsQXhKZPDVKAp1vjde2Z1%2B9Ci6RYMqSKmeWMMj%2BdwnnooN6OZO0Z54ssaJWRVrQ7kOuzpmDsRCT2%2B%2B6FJxX2TmmEzxzguU6PVL8E6%2Fmsx67fW5xfniMpVLgaIBuQMm9BjEW03Ch9xDZfmX4PL4oQfrfWK1nsrVYjZCxJn1EyIcf%2FRqfZ4ajtsvDI0HJzfnXtnGhdHLGEvBy%2FSomxLmRhN6G3veaelTjs76SmPvjOF4JVAvtQdBt%2BFYTX8QymrmJbCPJRs1S5%2FsmSFO2fK8gr5OJA9NIoSZiWZ6bqBjSY1weoRVDFSrxm58Q447l4cnCaEicvsmNQBheWSWuJO4msymJMcC2uOtBZn23MMui%2B8QGOqUBWTaLxAgyVM3jUqkPDQdGgzkSu5t3y6eWqj2PtzqaySxhcKMD0CKvWVIVPjClUOKYAhRUf09sATsTDP0A9Xe4WQhi4F0JeH%2BFAOc3PfAWIJm0zCYlAsGqGgwOFat1Irl%2BdusrMzFgnGVIdUB0tCQwwEYyS4iz9apSDMgme6nTeYhbdDNo%2F3pzlQM7yLny9lY2sHgeWMc9wIUBKITl6THloik9riz8&X-Amz-Signature=e0b0ad942eb79ca609470c1d9623818b4c1a5d356a51cbca58aee20f9afde908&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQSXEXSR%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCICVvmdkUEKobvx1jcgtzS1ykznVTGgiZ7KxUoYCBThuiAiEAwuLMWTzBtJVp6QqbRqkqDvum%2Bzx37aVyLAx33RXggUMq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDCN2CHcEFo7GdNW1GSrcAzNwH9K5fYNc0Ami6PDoLezM5XpFSLQ6H%2FS4oB5gNiUsebQlt%2FM77IutLTrdFAc9m8LYeIF6wcKKMAhz7CBnH7zYMjUJe02VBT0%2FI2qjbAXJTiHF1ek9TrNVRBEhVWdYSBdx73wR9hfoGzZiIVyIw0pwWL5Ea2Djsfq1Bx1vHC1RROrT2xQ4K2QVPWcPN8GJBnCmA9QMDWut1NtDV17%2BDcT69xAhtb6CUNgGKe%2FQrIOg5aI3UEqCJxEviknkYRtLdE6Py0BwEtafzT8cVsSJLJpUDBsQXhKZPDVKAp1vjde2Z1%2B9Ci6RYMqSKmeWMMj%2BdwnnooN6OZO0Z54ssaJWRVrQ7kOuzpmDsRCT2%2B%2B6FJxX2TmmEzxzguU6PVL8E6%2Fmsx67fW5xfniMpVLgaIBuQMm9BjEW03Ch9xDZfmX4PL4oQfrfWK1nsrVYjZCxJn1EyIcf%2FRqfZ4ajtsvDI0HJzfnXtnGhdHLGEvBy%2FSomxLmRhN6G3veaelTjs76SmPvjOF4JVAvtQdBt%2BFYTX8QymrmJbCPJRs1S5%2FsmSFO2fK8gr5OJA9NIoSZiWZ6bqBjSY1weoRVDFSrxm58Q447l4cnCaEicvsmNQBheWSWuJO4msymJMcC2uOtBZn23MMui%2B8QGOqUBWTaLxAgyVM3jUqkPDQdGgzkSu5t3y6eWqj2PtzqaySxhcKMD0CKvWVIVPjClUOKYAhRUf09sATsTDP0A9Xe4WQhi4F0JeH%2BFAOc3PfAWIJm0zCYlAsGqGgwOFat1Irl%2BdusrMzFgnGVIdUB0tCQwwEYyS4iz9apSDMgme6nTeYhbdDNo%2F3pzlQM7yLny9lY2sHgeWMc9wIUBKITl6THloik9riz8&X-Amz-Signature=f4619b4d6d722ff9f68911fd7f9d9bec8923be1e21f139e8ef5eceb3fdba0082&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQSXEXSR%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCICVvmdkUEKobvx1jcgtzS1ykznVTGgiZ7KxUoYCBThuiAiEAwuLMWTzBtJVp6QqbRqkqDvum%2Bzx37aVyLAx33RXggUMq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDCN2CHcEFo7GdNW1GSrcAzNwH9K5fYNc0Ami6PDoLezM5XpFSLQ6H%2FS4oB5gNiUsebQlt%2FM77IutLTrdFAc9m8LYeIF6wcKKMAhz7CBnH7zYMjUJe02VBT0%2FI2qjbAXJTiHF1ek9TrNVRBEhVWdYSBdx73wR9hfoGzZiIVyIw0pwWL5Ea2Djsfq1Bx1vHC1RROrT2xQ4K2QVPWcPN8GJBnCmA9QMDWut1NtDV17%2BDcT69xAhtb6CUNgGKe%2FQrIOg5aI3UEqCJxEviknkYRtLdE6Py0BwEtafzT8cVsSJLJpUDBsQXhKZPDVKAp1vjde2Z1%2B9Ci6RYMqSKmeWMMj%2BdwnnooN6OZO0Z54ssaJWRVrQ7kOuzpmDsRCT2%2B%2B6FJxX2TmmEzxzguU6PVL8E6%2Fmsx67fW5xfniMpVLgaIBuQMm9BjEW03Ch9xDZfmX4PL4oQfrfWK1nsrVYjZCxJn1EyIcf%2FRqfZ4ajtsvDI0HJzfnXtnGhdHLGEvBy%2FSomxLmRhN6G3veaelTjs76SmPvjOF4JVAvtQdBt%2BFYTX8QymrmJbCPJRs1S5%2FsmSFO2fK8gr5OJA9NIoSZiWZ6bqBjSY1weoRVDFSrxm58Q447l4cnCaEicvsmNQBheWSWuJO4msymJMcC2uOtBZn23MMui%2B8QGOqUBWTaLxAgyVM3jUqkPDQdGgzkSu5t3y6eWqj2PtzqaySxhcKMD0CKvWVIVPjClUOKYAhRUf09sATsTDP0A9Xe4WQhi4F0JeH%2BFAOc3PfAWIJm0zCYlAsGqGgwOFat1Irl%2BdusrMzFgnGVIdUB0tCQwwEYyS4iz9apSDMgme6nTeYhbdDNo%2F3pzlQM7yLny9lY2sHgeWMc9wIUBKITl6THloik9riz8&X-Amz-Signature=044a7b93d5356e30d7205af6ce7bab22d5cf276c4e9e83d84318ea3945ae1ac8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQSXEXSR%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCICVvmdkUEKobvx1jcgtzS1ykznVTGgiZ7KxUoYCBThuiAiEAwuLMWTzBtJVp6QqbRqkqDvum%2Bzx37aVyLAx33RXggUMq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDCN2CHcEFo7GdNW1GSrcAzNwH9K5fYNc0Ami6PDoLezM5XpFSLQ6H%2FS4oB5gNiUsebQlt%2FM77IutLTrdFAc9m8LYeIF6wcKKMAhz7CBnH7zYMjUJe02VBT0%2FI2qjbAXJTiHF1ek9TrNVRBEhVWdYSBdx73wR9hfoGzZiIVyIw0pwWL5Ea2Djsfq1Bx1vHC1RROrT2xQ4K2QVPWcPN8GJBnCmA9QMDWut1NtDV17%2BDcT69xAhtb6CUNgGKe%2FQrIOg5aI3UEqCJxEviknkYRtLdE6Py0BwEtafzT8cVsSJLJpUDBsQXhKZPDVKAp1vjde2Z1%2B9Ci6RYMqSKmeWMMj%2BdwnnooN6OZO0Z54ssaJWRVrQ7kOuzpmDsRCT2%2B%2B6FJxX2TmmEzxzguU6PVL8E6%2Fmsx67fW5xfniMpVLgaIBuQMm9BjEW03Ch9xDZfmX4PL4oQfrfWK1nsrVYjZCxJn1EyIcf%2FRqfZ4ajtsvDI0HJzfnXtnGhdHLGEvBy%2FSomxLmRhN6G3veaelTjs76SmPvjOF4JVAvtQdBt%2BFYTX8QymrmJbCPJRs1S5%2FsmSFO2fK8gr5OJA9NIoSZiWZ6bqBjSY1weoRVDFSrxm58Q447l4cnCaEicvsmNQBheWSWuJO4msymJMcC2uOtBZn23MMui%2B8QGOqUBWTaLxAgyVM3jUqkPDQdGgzkSu5t3y6eWqj2PtzqaySxhcKMD0CKvWVIVPjClUOKYAhRUf09sATsTDP0A9Xe4WQhi4F0JeH%2BFAOc3PfAWIJm0zCYlAsGqGgwOFat1Irl%2BdusrMzFgnGVIdUB0tCQwwEYyS4iz9apSDMgme6nTeYhbdDNo%2F3pzlQM7yLny9lY2sHgeWMc9wIUBKITl6THloik9riz8&X-Amz-Signature=d4c540c7c50eb878b9b2bb19718c192411c78eadbf4a87a8a1c681e334d04433&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQSXEXSR%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCICVvmdkUEKobvx1jcgtzS1ykznVTGgiZ7KxUoYCBThuiAiEAwuLMWTzBtJVp6QqbRqkqDvum%2Bzx37aVyLAx33RXggUMq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDCN2CHcEFo7GdNW1GSrcAzNwH9K5fYNc0Ami6PDoLezM5XpFSLQ6H%2FS4oB5gNiUsebQlt%2FM77IutLTrdFAc9m8LYeIF6wcKKMAhz7CBnH7zYMjUJe02VBT0%2FI2qjbAXJTiHF1ek9TrNVRBEhVWdYSBdx73wR9hfoGzZiIVyIw0pwWL5Ea2Djsfq1Bx1vHC1RROrT2xQ4K2QVPWcPN8GJBnCmA9QMDWut1NtDV17%2BDcT69xAhtb6CUNgGKe%2FQrIOg5aI3UEqCJxEviknkYRtLdE6Py0BwEtafzT8cVsSJLJpUDBsQXhKZPDVKAp1vjde2Z1%2B9Ci6RYMqSKmeWMMj%2BdwnnooN6OZO0Z54ssaJWRVrQ7kOuzpmDsRCT2%2B%2B6FJxX2TmmEzxzguU6PVL8E6%2Fmsx67fW5xfniMpVLgaIBuQMm9BjEW03Ch9xDZfmX4PL4oQfrfWK1nsrVYjZCxJn1EyIcf%2FRqfZ4ajtsvDI0HJzfnXtnGhdHLGEvBy%2FSomxLmRhN6G3veaelTjs76SmPvjOF4JVAvtQdBt%2BFYTX8QymrmJbCPJRs1S5%2FsmSFO2fK8gr5OJA9NIoSZiWZ6bqBjSY1weoRVDFSrxm58Q447l4cnCaEicvsmNQBheWSWuJO4msymJMcC2uOtBZn23MMui%2B8QGOqUBWTaLxAgyVM3jUqkPDQdGgzkSu5t3y6eWqj2PtzqaySxhcKMD0CKvWVIVPjClUOKYAhRUf09sATsTDP0A9Xe4WQhi4F0JeH%2BFAOc3PfAWIJm0zCYlAsGqGgwOFat1Irl%2BdusrMzFgnGVIdUB0tCQwwEYyS4iz9apSDMgme6nTeYhbdDNo%2F3pzlQM7yLny9lY2sHgeWMc9wIUBKITl6THloik9riz8&X-Amz-Signature=8c25668c9514f245eec0506f54ad7e20fe4cbb848653f6509b8f5c23bbf32cc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQSXEXSR%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCICVvmdkUEKobvx1jcgtzS1ykznVTGgiZ7KxUoYCBThuiAiEAwuLMWTzBtJVp6QqbRqkqDvum%2Bzx37aVyLAx33RXggUMq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDCN2CHcEFo7GdNW1GSrcAzNwH9K5fYNc0Ami6PDoLezM5XpFSLQ6H%2FS4oB5gNiUsebQlt%2FM77IutLTrdFAc9m8LYeIF6wcKKMAhz7CBnH7zYMjUJe02VBT0%2FI2qjbAXJTiHF1ek9TrNVRBEhVWdYSBdx73wR9hfoGzZiIVyIw0pwWL5Ea2Djsfq1Bx1vHC1RROrT2xQ4K2QVPWcPN8GJBnCmA9QMDWut1NtDV17%2BDcT69xAhtb6CUNgGKe%2FQrIOg5aI3UEqCJxEviknkYRtLdE6Py0BwEtafzT8cVsSJLJpUDBsQXhKZPDVKAp1vjde2Z1%2B9Ci6RYMqSKmeWMMj%2BdwnnooN6OZO0Z54ssaJWRVrQ7kOuzpmDsRCT2%2B%2B6FJxX2TmmEzxzguU6PVL8E6%2Fmsx67fW5xfniMpVLgaIBuQMm9BjEW03Ch9xDZfmX4PL4oQfrfWK1nsrVYjZCxJn1EyIcf%2FRqfZ4ajtsvDI0HJzfnXtnGhdHLGEvBy%2FSomxLmRhN6G3veaelTjs76SmPvjOF4JVAvtQdBt%2BFYTX8QymrmJbCPJRs1S5%2FsmSFO2fK8gr5OJA9NIoSZiWZ6bqBjSY1weoRVDFSrxm58Q447l4cnCaEicvsmNQBheWSWuJO4msymJMcC2uOtBZn23MMui%2B8QGOqUBWTaLxAgyVM3jUqkPDQdGgzkSu5t3y6eWqj2PtzqaySxhcKMD0CKvWVIVPjClUOKYAhRUf09sATsTDP0A9Xe4WQhi4F0JeH%2BFAOc3PfAWIJm0zCYlAsGqGgwOFat1Irl%2BdusrMzFgnGVIdUB0tCQwwEYyS4iz9apSDMgme6nTeYhbdDNo%2F3pzlQM7yLny9lY2sHgeWMc9wIUBKITl6THloik9riz8&X-Amz-Signature=116205dc1ff4c16fd4ff754f99ba740f2221840177e333d6cd318b60fc45ddc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQSXEXSR%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCICVvmdkUEKobvx1jcgtzS1ykznVTGgiZ7KxUoYCBThuiAiEAwuLMWTzBtJVp6QqbRqkqDvum%2Bzx37aVyLAx33RXggUMq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDCN2CHcEFo7GdNW1GSrcAzNwH9K5fYNc0Ami6PDoLezM5XpFSLQ6H%2FS4oB5gNiUsebQlt%2FM77IutLTrdFAc9m8LYeIF6wcKKMAhz7CBnH7zYMjUJe02VBT0%2FI2qjbAXJTiHF1ek9TrNVRBEhVWdYSBdx73wR9hfoGzZiIVyIw0pwWL5Ea2Djsfq1Bx1vHC1RROrT2xQ4K2QVPWcPN8GJBnCmA9QMDWut1NtDV17%2BDcT69xAhtb6CUNgGKe%2FQrIOg5aI3UEqCJxEviknkYRtLdE6Py0BwEtafzT8cVsSJLJpUDBsQXhKZPDVKAp1vjde2Z1%2B9Ci6RYMqSKmeWMMj%2BdwnnooN6OZO0Z54ssaJWRVrQ7kOuzpmDsRCT2%2B%2B6FJxX2TmmEzxzguU6PVL8E6%2Fmsx67fW5xfniMpVLgaIBuQMm9BjEW03Ch9xDZfmX4PL4oQfrfWK1nsrVYjZCxJn1EyIcf%2FRqfZ4ajtsvDI0HJzfnXtnGhdHLGEvBy%2FSomxLmRhN6G3veaelTjs76SmPvjOF4JVAvtQdBt%2BFYTX8QymrmJbCPJRs1S5%2FsmSFO2fK8gr5OJA9NIoSZiWZ6bqBjSY1weoRVDFSrxm58Q447l4cnCaEicvsmNQBheWSWuJO4msymJMcC2uOtBZn23MMui%2B8QGOqUBWTaLxAgyVM3jUqkPDQdGgzkSu5t3y6eWqj2PtzqaySxhcKMD0CKvWVIVPjClUOKYAhRUf09sATsTDP0A9Xe4WQhi4F0JeH%2BFAOc3PfAWIJm0zCYlAsGqGgwOFat1Irl%2BdusrMzFgnGVIdUB0tCQwwEYyS4iz9apSDMgme6nTeYhbdDNo%2F3pzlQM7yLny9lY2sHgeWMc9wIUBKITl6THloik9riz8&X-Amz-Signature=66ff2a127a8aac7ab92c60bee6102087a6d1490b4388c11462bfadc01cbf65bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQSXEXSR%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCICVvmdkUEKobvx1jcgtzS1ykznVTGgiZ7KxUoYCBThuiAiEAwuLMWTzBtJVp6QqbRqkqDvum%2Bzx37aVyLAx33RXggUMq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDCN2CHcEFo7GdNW1GSrcAzNwH9K5fYNc0Ami6PDoLezM5XpFSLQ6H%2FS4oB5gNiUsebQlt%2FM77IutLTrdFAc9m8LYeIF6wcKKMAhz7CBnH7zYMjUJe02VBT0%2FI2qjbAXJTiHF1ek9TrNVRBEhVWdYSBdx73wR9hfoGzZiIVyIw0pwWL5Ea2Djsfq1Bx1vHC1RROrT2xQ4K2QVPWcPN8GJBnCmA9QMDWut1NtDV17%2BDcT69xAhtb6CUNgGKe%2FQrIOg5aI3UEqCJxEviknkYRtLdE6Py0BwEtafzT8cVsSJLJpUDBsQXhKZPDVKAp1vjde2Z1%2B9Ci6RYMqSKmeWMMj%2BdwnnooN6OZO0Z54ssaJWRVrQ7kOuzpmDsRCT2%2B%2B6FJxX2TmmEzxzguU6PVL8E6%2Fmsx67fW5xfniMpVLgaIBuQMm9BjEW03Ch9xDZfmX4PL4oQfrfWK1nsrVYjZCxJn1EyIcf%2FRqfZ4ajtsvDI0HJzfnXtnGhdHLGEvBy%2FSomxLmRhN6G3veaelTjs76SmPvjOF4JVAvtQdBt%2BFYTX8QymrmJbCPJRs1S5%2FsmSFO2fK8gr5OJA9NIoSZiWZ6bqBjSY1weoRVDFSrxm58Q447l4cnCaEicvsmNQBheWSWuJO4msymJMcC2uOtBZn23MMui%2B8QGOqUBWTaLxAgyVM3jUqkPDQdGgzkSu5t3y6eWqj2PtzqaySxhcKMD0CKvWVIVPjClUOKYAhRUf09sATsTDP0A9Xe4WQhi4F0JeH%2BFAOc3PfAWIJm0zCYlAsGqGgwOFat1Irl%2BdusrMzFgnGVIdUB0tCQwwEYyS4iz9apSDMgme6nTeYhbdDNo%2F3pzlQM7yLny9lY2sHgeWMc9wIUBKITl6THloik9riz8&X-Amz-Signature=4a5cc2995437a8abd7e4a85230cc974832ba325209b0fa8aa7fd9e770908132f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQSXEXSR%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCICVvmdkUEKobvx1jcgtzS1ykznVTGgiZ7KxUoYCBThuiAiEAwuLMWTzBtJVp6QqbRqkqDvum%2Bzx37aVyLAx33RXggUMq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDCN2CHcEFo7GdNW1GSrcAzNwH9K5fYNc0Ami6PDoLezM5XpFSLQ6H%2FS4oB5gNiUsebQlt%2FM77IutLTrdFAc9m8LYeIF6wcKKMAhz7CBnH7zYMjUJe02VBT0%2FI2qjbAXJTiHF1ek9TrNVRBEhVWdYSBdx73wR9hfoGzZiIVyIw0pwWL5Ea2Djsfq1Bx1vHC1RROrT2xQ4K2QVPWcPN8GJBnCmA9QMDWut1NtDV17%2BDcT69xAhtb6CUNgGKe%2FQrIOg5aI3UEqCJxEviknkYRtLdE6Py0BwEtafzT8cVsSJLJpUDBsQXhKZPDVKAp1vjde2Z1%2B9Ci6RYMqSKmeWMMj%2BdwnnooN6OZO0Z54ssaJWRVrQ7kOuzpmDsRCT2%2B%2B6FJxX2TmmEzxzguU6PVL8E6%2Fmsx67fW5xfniMpVLgaIBuQMm9BjEW03Ch9xDZfmX4PL4oQfrfWK1nsrVYjZCxJn1EyIcf%2FRqfZ4ajtsvDI0HJzfnXtnGhdHLGEvBy%2FSomxLmRhN6G3veaelTjs76SmPvjOF4JVAvtQdBt%2BFYTX8QymrmJbCPJRs1S5%2FsmSFO2fK8gr5OJA9NIoSZiWZ6bqBjSY1weoRVDFSrxm58Q447l4cnCaEicvsmNQBheWSWuJO4msymJMcC2uOtBZn23MMui%2B8QGOqUBWTaLxAgyVM3jUqkPDQdGgzkSu5t3y6eWqj2PtzqaySxhcKMD0CKvWVIVPjClUOKYAhRUf09sATsTDP0A9Xe4WQhi4F0JeH%2BFAOc3PfAWIJm0zCYlAsGqGgwOFat1Irl%2BdusrMzFgnGVIdUB0tCQwwEYyS4iz9apSDMgme6nTeYhbdDNo%2F3pzlQM7yLny9lY2sHgeWMc9wIUBKITl6THloik9riz8&X-Amz-Signature=96a80918b583f9f4955d7e61d3a916fecceced85f910e17301c54d2e10aae947&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQSXEXSR%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCICVvmdkUEKobvx1jcgtzS1ykznVTGgiZ7KxUoYCBThuiAiEAwuLMWTzBtJVp6QqbRqkqDvum%2Bzx37aVyLAx33RXggUMq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDCN2CHcEFo7GdNW1GSrcAzNwH9K5fYNc0Ami6PDoLezM5XpFSLQ6H%2FS4oB5gNiUsebQlt%2FM77IutLTrdFAc9m8LYeIF6wcKKMAhz7CBnH7zYMjUJe02VBT0%2FI2qjbAXJTiHF1ek9TrNVRBEhVWdYSBdx73wR9hfoGzZiIVyIw0pwWL5Ea2Djsfq1Bx1vHC1RROrT2xQ4K2QVPWcPN8GJBnCmA9QMDWut1NtDV17%2BDcT69xAhtb6CUNgGKe%2FQrIOg5aI3UEqCJxEviknkYRtLdE6Py0BwEtafzT8cVsSJLJpUDBsQXhKZPDVKAp1vjde2Z1%2B9Ci6RYMqSKmeWMMj%2BdwnnooN6OZO0Z54ssaJWRVrQ7kOuzpmDsRCT2%2B%2B6FJxX2TmmEzxzguU6PVL8E6%2Fmsx67fW5xfniMpVLgaIBuQMm9BjEW03Ch9xDZfmX4PL4oQfrfWK1nsrVYjZCxJn1EyIcf%2FRqfZ4ajtsvDI0HJzfnXtnGhdHLGEvBy%2FSomxLmRhN6G3veaelTjs76SmPvjOF4JVAvtQdBt%2BFYTX8QymrmJbCPJRs1S5%2FsmSFO2fK8gr5OJA9NIoSZiWZ6bqBjSY1weoRVDFSrxm58Q447l4cnCaEicvsmNQBheWSWuJO4msymJMcC2uOtBZn23MMui%2B8QGOqUBWTaLxAgyVM3jUqkPDQdGgzkSu5t3y6eWqj2PtzqaySxhcKMD0CKvWVIVPjClUOKYAhRUf09sATsTDP0A9Xe4WQhi4F0JeH%2BFAOc3PfAWIJm0zCYlAsGqGgwOFat1Irl%2BdusrMzFgnGVIdUB0tCQwwEYyS4iz9apSDMgme6nTeYhbdDNo%2F3pzlQM7yLny9lY2sHgeWMc9wIUBKITl6THloik9riz8&X-Amz-Signature=d4c540c7c50eb878b9b2bb19718c192411c78eadbf4a87a8a1c681e334d04433&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
