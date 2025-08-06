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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNHP7EFI%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIDDvJwxPrp2Wl5uLwOBSYUgXUlYfyaOUCCEAnSS4EAeyAiEA6q26Slgpkq5GaBPh1takWfM1VEuvYI35KjSwIOvTfQoq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDAm1VeWJ%2BEc%2FnAkykircA%2BKHDhExrcahXF%2FSUXH44uX%2FPhxxxH50OwfxuGiodpPY5MuF6sRll7jJzATXM5k%2Bvsgcz7Ze1c5Hvi7qbc79eEnEhNN4mL8CWv%2Ft5dDhHXlALAiwzb071b3yRZixcE8ldy9pTC5qQkJeSGRRj%2BP2lmKcXPgOzIrUQ%2FoCnQkVNDdGgtPtqFw5lrkFUZwfpWvKGP%2BQxYlcrerLbmMgee83xp4KUkrls%2B1rhUXWHuHRfOxHTsWHzm5GJXD%2BSSTpHSbrkcIDudDjp2LA%2FotDIqb0%2FGAFeztlN3zdAtipF0vmen6ZVSjcFUXHTCCevFyT%2BfGdm5K72kQKGiAUh%2BiYmlgCJJIHHrw3K4lGabhcO%2BbTqzfUgXvVnH2DQ6irgRvCOFMHfk4bmXy%2FaeGPgqYcRJtUBnIR7Qq35MU5prRMrbgFvkzhapd01pZOw5MgCNZa8VjWvNTxr1B2FkrB%2Bj3FQiVnVG5hTonzA8BR%2FRCPWDmDJ2idW6Q%2FauUMrV9hCt6k6Y%2FNICPhgvevUvH1JiTjqMO2FUNFcREdBu7SmMGBwozKadxU6Am0zw1FZMs%2Fpfjq4QPUQ9vRPfTADtx%2FBQ1uk%2B3bYhRAn3O0h8QoJE4OAXc9rTIOlRS4x9pXaFujJc%2FFMKTwy8QGOqUBDxQi6FWi5c%2F9oCmsfa9OCp9KZMMHy97Qcm%2FewVx8bOmp%2B5o2ruImndxyXZf4zK5aAKkvzh2uvwO%2FqWLsA5Ao7wNyBzDTHqfq%2Fb7I3s7GXQ%2FjUVp0sV0J1U7JNohyykYOfG7SOi21rqSc%2B%2B5%2F0g1dHljUdU2CVWj0ygUzqo0fKIhsqF988F7rZ0H1EAxl7nLXJ8U%2BaYcEVQ7lpnzb2v8NbfBOjVb3&X-Amz-Signature=7afbcd7387974988a66c83e1385e90dcb92da0a3755c2cf80fa17edd7a87d22e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX75RB6I%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIH2Sy9VcITwzfBimo0fX6%2FavgtrU%2F4Xab1o4oL8mLu1nAiAhNmVXrE36iuV2Qu4SIuts7gd1FmBcjR2ufeumChEGNCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM7jOljovNb3j4Q%2Bc6KtwDwY33OKDole7PdZQ%2B2fCS%2BpaW31oNvYFrtdV%2BXdnU8PLZi2OZm1DO77L8POgumvEYmTvlYyykjI4h2v8Jr8ayuSNEeq3%2Fp76LPYWJgOElMbsLKGAJzdZ%2FOcrqedh4gW%2Bk4MKYRMoUTB9iAykLKLhuBq06q2AQ8njuJr6UnL9HF864Ef42%2FTIRBOs4RDarNFRDME9%2FobgC6N%2BJwvE6DOSFIobtUVP7aFZIobZfrEQj07EA%2FLD%2FRQUCMWkrdVitvAE0YQp%2BZAnsWrgthLh%2BzoqNpllWiXe3mJcXjK7QY5Ca9GER9w8%2FHrFQx5ycFOGRk9NY%2Br%2B4swhAaUXZfVSuo5OEiQZptRGjAyjA9ZPHfXbU25oW8YIi6uHy8CoYp6SpKMzyiz3p6dyrIPaG3x5YLMmPRbMznWpybsSZSvaYTBqAEzJZb%2Bxkj%2FV2T1GRv0Jy0ZAZhGNcW5JqcN7muRw9pQF5sLrS7fL%2BIWXsty8J7xXax6M6prWj%2F%2FYRudmXJVX8zMsnb%2F0EVtyKN2D26v5%2BUqevPjI35N8XyVN8k%2F%2Fh02IH1qqN9SCfYQmAadzL%2FtPwubO%2FyDvzNI6EJRzFPLtkZtLR1bFlHOo3fhj2EvDKCTIWROshA31defbVloWrcR4wpPDLxAY6pgE%2F%2B52CoHRGYqmC8byzNdRq5xVMrgj8YuLIHi63NmRoQlOZL0zmMJh%2FfuE6KocERfV5jlM3dYFPNq%2BjzMjqLcPIw0B4U9T5s%2FoIvdFQr%2FhXcBI9Q3DoKdPonEpaik2PXFkoIRiOHT%2BOF%2FmIROYiliUMGx0aorOHec9ddlWsLWGlvcbUpKUXV9THnne%2BzwIq84vXgbiyvTqncGUHr0iDFWnJ4a%2BaQeWD&X-Amz-Signature=f8d24ddcd24856b4327e676b0aebc7e35fe0eea75b09d98b820b8ba9a8d4d002&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX75RB6I%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIH2Sy9VcITwzfBimo0fX6%2FavgtrU%2F4Xab1o4oL8mLu1nAiAhNmVXrE36iuV2Qu4SIuts7gd1FmBcjR2ufeumChEGNCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM7jOljovNb3j4Q%2Bc6KtwDwY33OKDole7PdZQ%2B2fCS%2BpaW31oNvYFrtdV%2BXdnU8PLZi2OZm1DO77L8POgumvEYmTvlYyykjI4h2v8Jr8ayuSNEeq3%2Fp76LPYWJgOElMbsLKGAJzdZ%2FOcrqedh4gW%2Bk4MKYRMoUTB9iAykLKLhuBq06q2AQ8njuJr6UnL9HF864Ef42%2FTIRBOs4RDarNFRDME9%2FobgC6N%2BJwvE6DOSFIobtUVP7aFZIobZfrEQj07EA%2FLD%2FRQUCMWkrdVitvAE0YQp%2BZAnsWrgthLh%2BzoqNpllWiXe3mJcXjK7QY5Ca9GER9w8%2FHrFQx5ycFOGRk9NY%2Br%2B4swhAaUXZfVSuo5OEiQZptRGjAyjA9ZPHfXbU25oW8YIi6uHy8CoYp6SpKMzyiz3p6dyrIPaG3x5YLMmPRbMznWpybsSZSvaYTBqAEzJZb%2Bxkj%2FV2T1GRv0Jy0ZAZhGNcW5JqcN7muRw9pQF5sLrS7fL%2BIWXsty8J7xXax6M6prWj%2F%2FYRudmXJVX8zMsnb%2F0EVtyKN2D26v5%2BUqevPjI35N8XyVN8k%2F%2Fh02IH1qqN9SCfYQmAadzL%2FtPwubO%2FyDvzNI6EJRzFPLtkZtLR1bFlHOo3fhj2EvDKCTIWROshA31defbVloWrcR4wpPDLxAY6pgE%2F%2B52CoHRGYqmC8byzNdRq5xVMrgj8YuLIHi63NmRoQlOZL0zmMJh%2FfuE6KocERfV5jlM3dYFPNq%2BjzMjqLcPIw0B4U9T5s%2FoIvdFQr%2FhXcBI9Q3DoKdPonEpaik2PXFkoIRiOHT%2BOF%2FmIROYiliUMGx0aorOHec9ddlWsLWGlvcbUpKUXV9THnne%2BzwIq84vXgbiyvTqncGUHr0iDFWnJ4a%2BaQeWD&X-Amz-Signature=d90d9490c2757b1fe03632b210d8d6f983671c612385b47eae890e62922ecc86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX75RB6I%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIH2Sy9VcITwzfBimo0fX6%2FavgtrU%2F4Xab1o4oL8mLu1nAiAhNmVXrE36iuV2Qu4SIuts7gd1FmBcjR2ufeumChEGNCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM7jOljovNb3j4Q%2Bc6KtwDwY33OKDole7PdZQ%2B2fCS%2BpaW31oNvYFrtdV%2BXdnU8PLZi2OZm1DO77L8POgumvEYmTvlYyykjI4h2v8Jr8ayuSNEeq3%2Fp76LPYWJgOElMbsLKGAJzdZ%2FOcrqedh4gW%2Bk4MKYRMoUTB9iAykLKLhuBq06q2AQ8njuJr6UnL9HF864Ef42%2FTIRBOs4RDarNFRDME9%2FobgC6N%2BJwvE6DOSFIobtUVP7aFZIobZfrEQj07EA%2FLD%2FRQUCMWkrdVitvAE0YQp%2BZAnsWrgthLh%2BzoqNpllWiXe3mJcXjK7QY5Ca9GER9w8%2FHrFQx5ycFOGRk9NY%2Br%2B4swhAaUXZfVSuo5OEiQZptRGjAyjA9ZPHfXbU25oW8YIi6uHy8CoYp6SpKMzyiz3p6dyrIPaG3x5YLMmPRbMznWpybsSZSvaYTBqAEzJZb%2Bxkj%2FV2T1GRv0Jy0ZAZhGNcW5JqcN7muRw9pQF5sLrS7fL%2BIWXsty8J7xXax6M6prWj%2F%2FYRudmXJVX8zMsnb%2F0EVtyKN2D26v5%2BUqevPjI35N8XyVN8k%2F%2Fh02IH1qqN9SCfYQmAadzL%2FtPwubO%2FyDvzNI6EJRzFPLtkZtLR1bFlHOo3fhj2EvDKCTIWROshA31defbVloWrcR4wpPDLxAY6pgE%2F%2B52CoHRGYqmC8byzNdRq5xVMrgj8YuLIHi63NmRoQlOZL0zmMJh%2FfuE6KocERfV5jlM3dYFPNq%2BjzMjqLcPIw0B4U9T5s%2FoIvdFQr%2FhXcBI9Q3DoKdPonEpaik2PXFkoIRiOHT%2BOF%2FmIROYiliUMGx0aorOHec9ddlWsLWGlvcbUpKUXV9THnne%2BzwIq84vXgbiyvTqncGUHr0iDFWnJ4a%2BaQeWD&X-Amz-Signature=2d67d92773b26a3451e9d90d1d866beaca23ef9720bc975971290398001503b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX75RB6I%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIH2Sy9VcITwzfBimo0fX6%2FavgtrU%2F4Xab1o4oL8mLu1nAiAhNmVXrE36iuV2Qu4SIuts7gd1FmBcjR2ufeumChEGNCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM7jOljovNb3j4Q%2Bc6KtwDwY33OKDole7PdZQ%2B2fCS%2BpaW31oNvYFrtdV%2BXdnU8PLZi2OZm1DO77L8POgumvEYmTvlYyykjI4h2v8Jr8ayuSNEeq3%2Fp76LPYWJgOElMbsLKGAJzdZ%2FOcrqedh4gW%2Bk4MKYRMoUTB9iAykLKLhuBq06q2AQ8njuJr6UnL9HF864Ef42%2FTIRBOs4RDarNFRDME9%2FobgC6N%2BJwvE6DOSFIobtUVP7aFZIobZfrEQj07EA%2FLD%2FRQUCMWkrdVitvAE0YQp%2BZAnsWrgthLh%2BzoqNpllWiXe3mJcXjK7QY5Ca9GER9w8%2FHrFQx5ycFOGRk9NY%2Br%2B4swhAaUXZfVSuo5OEiQZptRGjAyjA9ZPHfXbU25oW8YIi6uHy8CoYp6SpKMzyiz3p6dyrIPaG3x5YLMmPRbMznWpybsSZSvaYTBqAEzJZb%2Bxkj%2FV2T1GRv0Jy0ZAZhGNcW5JqcN7muRw9pQF5sLrS7fL%2BIWXsty8J7xXax6M6prWj%2F%2FYRudmXJVX8zMsnb%2F0EVtyKN2D26v5%2BUqevPjI35N8XyVN8k%2F%2Fh02IH1qqN9SCfYQmAadzL%2FtPwubO%2FyDvzNI6EJRzFPLtkZtLR1bFlHOo3fhj2EvDKCTIWROshA31defbVloWrcR4wpPDLxAY6pgE%2F%2B52CoHRGYqmC8byzNdRq5xVMrgj8YuLIHi63NmRoQlOZL0zmMJh%2FfuE6KocERfV5jlM3dYFPNq%2BjzMjqLcPIw0B4U9T5s%2FoIvdFQr%2FhXcBI9Q3DoKdPonEpaik2PXFkoIRiOHT%2BOF%2FmIROYiliUMGx0aorOHec9ddlWsLWGlvcbUpKUXV9THnne%2BzwIq84vXgbiyvTqncGUHr0iDFWnJ4a%2BaQeWD&X-Amz-Signature=4cffa5dd5922ace4d4133a8b7a39ed2163a0845679e374e10191e30ad4861584&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX75RB6I%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIH2Sy9VcITwzfBimo0fX6%2FavgtrU%2F4Xab1o4oL8mLu1nAiAhNmVXrE36iuV2Qu4SIuts7gd1FmBcjR2ufeumChEGNCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM7jOljovNb3j4Q%2Bc6KtwDwY33OKDole7PdZQ%2B2fCS%2BpaW31oNvYFrtdV%2BXdnU8PLZi2OZm1DO77L8POgumvEYmTvlYyykjI4h2v8Jr8ayuSNEeq3%2Fp76LPYWJgOElMbsLKGAJzdZ%2FOcrqedh4gW%2Bk4MKYRMoUTB9iAykLKLhuBq06q2AQ8njuJr6UnL9HF864Ef42%2FTIRBOs4RDarNFRDME9%2FobgC6N%2BJwvE6DOSFIobtUVP7aFZIobZfrEQj07EA%2FLD%2FRQUCMWkrdVitvAE0YQp%2BZAnsWrgthLh%2BzoqNpllWiXe3mJcXjK7QY5Ca9GER9w8%2FHrFQx5ycFOGRk9NY%2Br%2B4swhAaUXZfVSuo5OEiQZptRGjAyjA9ZPHfXbU25oW8YIi6uHy8CoYp6SpKMzyiz3p6dyrIPaG3x5YLMmPRbMznWpybsSZSvaYTBqAEzJZb%2Bxkj%2FV2T1GRv0Jy0ZAZhGNcW5JqcN7muRw9pQF5sLrS7fL%2BIWXsty8J7xXax6M6prWj%2F%2FYRudmXJVX8zMsnb%2F0EVtyKN2D26v5%2BUqevPjI35N8XyVN8k%2F%2Fh02IH1qqN9SCfYQmAadzL%2FtPwubO%2FyDvzNI6EJRzFPLtkZtLR1bFlHOo3fhj2EvDKCTIWROshA31defbVloWrcR4wpPDLxAY6pgE%2F%2B52CoHRGYqmC8byzNdRq5xVMrgj8YuLIHi63NmRoQlOZL0zmMJh%2FfuE6KocERfV5jlM3dYFPNq%2BjzMjqLcPIw0B4U9T5s%2FoIvdFQr%2FhXcBI9Q3DoKdPonEpaik2PXFkoIRiOHT%2BOF%2FmIROYiliUMGx0aorOHec9ddlWsLWGlvcbUpKUXV9THnne%2BzwIq84vXgbiyvTqncGUHr0iDFWnJ4a%2BaQeWD&X-Amz-Signature=011d27a6ec3b13017f6d857f94da3bd26c45687efbc2815063ef2a5d4ce9f349&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX75RB6I%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIH2Sy9VcITwzfBimo0fX6%2FavgtrU%2F4Xab1o4oL8mLu1nAiAhNmVXrE36iuV2Qu4SIuts7gd1FmBcjR2ufeumChEGNCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM7jOljovNb3j4Q%2Bc6KtwDwY33OKDole7PdZQ%2B2fCS%2BpaW31oNvYFrtdV%2BXdnU8PLZi2OZm1DO77L8POgumvEYmTvlYyykjI4h2v8Jr8ayuSNEeq3%2Fp76LPYWJgOElMbsLKGAJzdZ%2FOcrqedh4gW%2Bk4MKYRMoUTB9iAykLKLhuBq06q2AQ8njuJr6UnL9HF864Ef42%2FTIRBOs4RDarNFRDME9%2FobgC6N%2BJwvE6DOSFIobtUVP7aFZIobZfrEQj07EA%2FLD%2FRQUCMWkrdVitvAE0YQp%2BZAnsWrgthLh%2BzoqNpllWiXe3mJcXjK7QY5Ca9GER9w8%2FHrFQx5ycFOGRk9NY%2Br%2B4swhAaUXZfVSuo5OEiQZptRGjAyjA9ZPHfXbU25oW8YIi6uHy8CoYp6SpKMzyiz3p6dyrIPaG3x5YLMmPRbMznWpybsSZSvaYTBqAEzJZb%2Bxkj%2FV2T1GRv0Jy0ZAZhGNcW5JqcN7muRw9pQF5sLrS7fL%2BIWXsty8J7xXax6M6prWj%2F%2FYRudmXJVX8zMsnb%2F0EVtyKN2D26v5%2BUqevPjI35N8XyVN8k%2F%2Fh02IH1qqN9SCfYQmAadzL%2FtPwubO%2FyDvzNI6EJRzFPLtkZtLR1bFlHOo3fhj2EvDKCTIWROshA31defbVloWrcR4wpPDLxAY6pgE%2F%2B52CoHRGYqmC8byzNdRq5xVMrgj8YuLIHi63NmRoQlOZL0zmMJh%2FfuE6KocERfV5jlM3dYFPNq%2BjzMjqLcPIw0B4U9T5s%2FoIvdFQr%2FhXcBI9Q3DoKdPonEpaik2PXFkoIRiOHT%2BOF%2FmIROYiliUMGx0aorOHec9ddlWsLWGlvcbUpKUXV9THnne%2BzwIq84vXgbiyvTqncGUHr0iDFWnJ4a%2BaQeWD&X-Amz-Signature=0b3b5c958daae1528958d34d59a82908857f0ff2b58fa6ee3acc8d4d6f65a875&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX75RB6I%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIH2Sy9VcITwzfBimo0fX6%2FavgtrU%2F4Xab1o4oL8mLu1nAiAhNmVXrE36iuV2Qu4SIuts7gd1FmBcjR2ufeumChEGNCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM7jOljovNb3j4Q%2Bc6KtwDwY33OKDole7PdZQ%2B2fCS%2BpaW31oNvYFrtdV%2BXdnU8PLZi2OZm1DO77L8POgumvEYmTvlYyykjI4h2v8Jr8ayuSNEeq3%2Fp76LPYWJgOElMbsLKGAJzdZ%2FOcrqedh4gW%2Bk4MKYRMoUTB9iAykLKLhuBq06q2AQ8njuJr6UnL9HF864Ef42%2FTIRBOs4RDarNFRDME9%2FobgC6N%2BJwvE6DOSFIobtUVP7aFZIobZfrEQj07EA%2FLD%2FRQUCMWkrdVitvAE0YQp%2BZAnsWrgthLh%2BzoqNpllWiXe3mJcXjK7QY5Ca9GER9w8%2FHrFQx5ycFOGRk9NY%2Br%2B4swhAaUXZfVSuo5OEiQZptRGjAyjA9ZPHfXbU25oW8YIi6uHy8CoYp6SpKMzyiz3p6dyrIPaG3x5YLMmPRbMznWpybsSZSvaYTBqAEzJZb%2Bxkj%2FV2T1GRv0Jy0ZAZhGNcW5JqcN7muRw9pQF5sLrS7fL%2BIWXsty8J7xXax6M6prWj%2F%2FYRudmXJVX8zMsnb%2F0EVtyKN2D26v5%2BUqevPjI35N8XyVN8k%2F%2Fh02IH1qqN9SCfYQmAadzL%2FtPwubO%2FyDvzNI6EJRzFPLtkZtLR1bFlHOo3fhj2EvDKCTIWROshA31defbVloWrcR4wpPDLxAY6pgE%2F%2B52CoHRGYqmC8byzNdRq5xVMrgj8YuLIHi63NmRoQlOZL0zmMJh%2FfuE6KocERfV5jlM3dYFPNq%2BjzMjqLcPIw0B4U9T5s%2FoIvdFQr%2FhXcBI9Q3DoKdPonEpaik2PXFkoIRiOHT%2BOF%2FmIROYiliUMGx0aorOHec9ddlWsLWGlvcbUpKUXV9THnne%2BzwIq84vXgbiyvTqncGUHr0iDFWnJ4a%2BaQeWD&X-Amz-Signature=ca0228b2992a4e004db13e96ed549c9d8618f79fd63bcda3824d4db3415061f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX75RB6I%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIH2Sy9VcITwzfBimo0fX6%2FavgtrU%2F4Xab1o4oL8mLu1nAiAhNmVXrE36iuV2Qu4SIuts7gd1FmBcjR2ufeumChEGNCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM7jOljovNb3j4Q%2Bc6KtwDwY33OKDole7PdZQ%2B2fCS%2BpaW31oNvYFrtdV%2BXdnU8PLZi2OZm1DO77L8POgumvEYmTvlYyykjI4h2v8Jr8ayuSNEeq3%2Fp76LPYWJgOElMbsLKGAJzdZ%2FOcrqedh4gW%2Bk4MKYRMoUTB9iAykLKLhuBq06q2AQ8njuJr6UnL9HF864Ef42%2FTIRBOs4RDarNFRDME9%2FobgC6N%2BJwvE6DOSFIobtUVP7aFZIobZfrEQj07EA%2FLD%2FRQUCMWkrdVitvAE0YQp%2BZAnsWrgthLh%2BzoqNpllWiXe3mJcXjK7QY5Ca9GER9w8%2FHrFQx5ycFOGRk9NY%2Br%2B4swhAaUXZfVSuo5OEiQZptRGjAyjA9ZPHfXbU25oW8YIi6uHy8CoYp6SpKMzyiz3p6dyrIPaG3x5YLMmPRbMznWpybsSZSvaYTBqAEzJZb%2Bxkj%2FV2T1GRv0Jy0ZAZhGNcW5JqcN7muRw9pQF5sLrS7fL%2BIWXsty8J7xXax6M6prWj%2F%2FYRudmXJVX8zMsnb%2F0EVtyKN2D26v5%2BUqevPjI35N8XyVN8k%2F%2Fh02IH1qqN9SCfYQmAadzL%2FtPwubO%2FyDvzNI6EJRzFPLtkZtLR1bFlHOo3fhj2EvDKCTIWROshA31defbVloWrcR4wpPDLxAY6pgE%2F%2B52CoHRGYqmC8byzNdRq5xVMrgj8YuLIHi63NmRoQlOZL0zmMJh%2FfuE6KocERfV5jlM3dYFPNq%2BjzMjqLcPIw0B4U9T5s%2FoIvdFQr%2FhXcBI9Q3DoKdPonEpaik2PXFkoIRiOHT%2BOF%2FmIROYiliUMGx0aorOHec9ddlWsLWGlvcbUpKUXV9THnne%2BzwIq84vXgbiyvTqncGUHr0iDFWnJ4a%2BaQeWD&X-Amz-Signature=6e6c58ab55da8a651d07767ad089a0bb896ab4c5f8559fe9186ee2b722562719&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX75RB6I%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIH2Sy9VcITwzfBimo0fX6%2FavgtrU%2F4Xab1o4oL8mLu1nAiAhNmVXrE36iuV2Qu4SIuts7gd1FmBcjR2ufeumChEGNCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM7jOljovNb3j4Q%2Bc6KtwDwY33OKDole7PdZQ%2B2fCS%2BpaW31oNvYFrtdV%2BXdnU8PLZi2OZm1DO77L8POgumvEYmTvlYyykjI4h2v8Jr8ayuSNEeq3%2Fp76LPYWJgOElMbsLKGAJzdZ%2FOcrqedh4gW%2Bk4MKYRMoUTB9iAykLKLhuBq06q2AQ8njuJr6UnL9HF864Ef42%2FTIRBOs4RDarNFRDME9%2FobgC6N%2BJwvE6DOSFIobtUVP7aFZIobZfrEQj07EA%2FLD%2FRQUCMWkrdVitvAE0YQp%2BZAnsWrgthLh%2BzoqNpllWiXe3mJcXjK7QY5Ca9GER9w8%2FHrFQx5ycFOGRk9NY%2Br%2B4swhAaUXZfVSuo5OEiQZptRGjAyjA9ZPHfXbU25oW8YIi6uHy8CoYp6SpKMzyiz3p6dyrIPaG3x5YLMmPRbMznWpybsSZSvaYTBqAEzJZb%2Bxkj%2FV2T1GRv0Jy0ZAZhGNcW5JqcN7muRw9pQF5sLrS7fL%2BIWXsty8J7xXax6M6prWj%2F%2FYRudmXJVX8zMsnb%2F0EVtyKN2D26v5%2BUqevPjI35N8XyVN8k%2F%2Fh02IH1qqN9SCfYQmAadzL%2FtPwubO%2FyDvzNI6EJRzFPLtkZtLR1bFlHOo3fhj2EvDKCTIWROshA31defbVloWrcR4wpPDLxAY6pgE%2F%2B52CoHRGYqmC8byzNdRq5xVMrgj8YuLIHi63NmRoQlOZL0zmMJh%2FfuE6KocERfV5jlM3dYFPNq%2BjzMjqLcPIw0B4U9T5s%2FoIvdFQr%2FhXcBI9Q3DoKdPonEpaik2PXFkoIRiOHT%2BOF%2FmIROYiliUMGx0aorOHec9ddlWsLWGlvcbUpKUXV9THnne%2BzwIq84vXgbiyvTqncGUHr0iDFWnJ4a%2BaQeWD&X-Amz-Signature=8705696a94a279aa19f1a2f50e5d2b62373e2a9be6d00be09ad3b86f98201b38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX75RB6I%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIH2Sy9VcITwzfBimo0fX6%2FavgtrU%2F4Xab1o4oL8mLu1nAiAhNmVXrE36iuV2Qu4SIuts7gd1FmBcjR2ufeumChEGNCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM7jOljovNb3j4Q%2Bc6KtwDwY33OKDole7PdZQ%2B2fCS%2BpaW31oNvYFrtdV%2BXdnU8PLZi2OZm1DO77L8POgumvEYmTvlYyykjI4h2v8Jr8ayuSNEeq3%2Fp76LPYWJgOElMbsLKGAJzdZ%2FOcrqedh4gW%2Bk4MKYRMoUTB9iAykLKLhuBq06q2AQ8njuJr6UnL9HF864Ef42%2FTIRBOs4RDarNFRDME9%2FobgC6N%2BJwvE6DOSFIobtUVP7aFZIobZfrEQj07EA%2FLD%2FRQUCMWkrdVitvAE0YQp%2BZAnsWrgthLh%2BzoqNpllWiXe3mJcXjK7QY5Ca9GER9w8%2FHrFQx5ycFOGRk9NY%2Br%2B4swhAaUXZfVSuo5OEiQZptRGjAyjA9ZPHfXbU25oW8YIi6uHy8CoYp6SpKMzyiz3p6dyrIPaG3x5YLMmPRbMznWpybsSZSvaYTBqAEzJZb%2Bxkj%2FV2T1GRv0Jy0ZAZhGNcW5JqcN7muRw9pQF5sLrS7fL%2BIWXsty8J7xXax6M6prWj%2F%2FYRudmXJVX8zMsnb%2F0EVtyKN2D26v5%2BUqevPjI35N8XyVN8k%2F%2Fh02IH1qqN9SCfYQmAadzL%2FtPwubO%2FyDvzNI6EJRzFPLtkZtLR1bFlHOo3fhj2EvDKCTIWROshA31defbVloWrcR4wpPDLxAY6pgE%2F%2B52CoHRGYqmC8byzNdRq5xVMrgj8YuLIHi63NmRoQlOZL0zmMJh%2FfuE6KocERfV5jlM3dYFPNq%2BjzMjqLcPIw0B4U9T5s%2FoIvdFQr%2FhXcBI9Q3DoKdPonEpaik2PXFkoIRiOHT%2BOF%2FmIROYiliUMGx0aorOHec9ddlWsLWGlvcbUpKUXV9THnne%2BzwIq84vXgbiyvTqncGUHr0iDFWnJ4a%2BaQeWD&X-Amz-Signature=4df0c552fcec7921626b36b8c87afcc209ec58e7c9aa70534989fd6a0305c3af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
