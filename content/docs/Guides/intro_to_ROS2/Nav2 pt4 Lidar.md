---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-07-29T01:28:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-07-29T01:28:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZLYHMGA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCsVtsRpb70vtlu2mNt%2Bjs6e%2BMPeczD5Q9vNEdisgXLGgIgWWUFOMMeUjD%2BCBfwTah%2F6%2FazFGZmhk7fGCXj09JXEo8qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCE3Z%2F4F6TPIzQXZ0ircA1qcJMN%2BZIzIV%2F7WRRjS5j5jYDZUG8lmNCgcudHi%2BrT%2FJagmE6PuYJnCpR5IBKN7p7kQyT9UDcx6eirpn%2B3qhRMt9tstnLT6X%2BWD7OYls%2B5oA3zsR0cdOzd0jicvX4xbOX3BLBH8mMZkkcPLUIFCshQh67ujgdaRaGHKkn9MHxSvyYl9%2FqLi0JHrdZG7u6mvUMp8%2F50%2BG5l9ST8JQHbcXo2P7ClWjaLTCThPfPF23ezlr0B3jFsS%2B2fJiM64PYRb8y1TL49rXLMI517RBQJ1JMJldEpZ3LmiJiSWuXT%2BGW8VvFihVAlYczw8QFXFKNf9RGDV4E40LnF9rE8VvoIvpHVefiU6OV%2FnDmQptmsKJ0A24BfCwyr30AbqRaN0Jh%2Bh7FY1nKksDu%2Fe0FBgok0YULrv7dHNK5gIj48QwNujtYOjDx2Bflr5zLN%2FkJEPUiZWpaRC5USCkn4b3w4jkJCZeaq%2BKzzMKOdakbHGPMLwSY1GGmyHcw598h%2BW2XtuC%2Fp3npxVmFjkrjDRISf%2BN%2BcJHH3SRTvsyP%2Bki%2FMazkB%2BhvbEhppRyl1WrmD4n28Vfjf94Oglar0rFo%2BF9xSAyrVdd%2BBMiPGFdwpV6WQoDROMMa3287AZVs14gA%2BfA%2BqSMJO0ocQGOqUB1mCpJZLOBbHUJJyakEkgCLOf3%2BHMEj%2Faxc%2FSxdpYzG1XwOslaOVUVX5DfdolzeNlVa4Tr45FfQUjXG250oBVp1UEoMQFpy%2FsX1YEHm3Hgc0%2BLmaGolGWTTwySL8qXD9ryTPfJ6egoRVbP%2B7E8gzyhfl69gkdojffsJlNqf%2BMG5jTmTAt124YA5QVwP%2Bj9uUwFAX8Vx4UuHDnHC4oDPF3mhqsffQo&X-Amz-Signature=0dad4a80091703ed8febfb98d1b7e26bc9416b0f1612a71b1e0a3c75c80653f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZLYHMGA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCsVtsRpb70vtlu2mNt%2Bjs6e%2BMPeczD5Q9vNEdisgXLGgIgWWUFOMMeUjD%2BCBfwTah%2F6%2FazFGZmhk7fGCXj09JXEo8qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCE3Z%2F4F6TPIzQXZ0ircA1qcJMN%2BZIzIV%2F7WRRjS5j5jYDZUG8lmNCgcudHi%2BrT%2FJagmE6PuYJnCpR5IBKN7p7kQyT9UDcx6eirpn%2B3qhRMt9tstnLT6X%2BWD7OYls%2B5oA3zsR0cdOzd0jicvX4xbOX3BLBH8mMZkkcPLUIFCshQh67ujgdaRaGHKkn9MHxSvyYl9%2FqLi0JHrdZG7u6mvUMp8%2F50%2BG5l9ST8JQHbcXo2P7ClWjaLTCThPfPF23ezlr0B3jFsS%2B2fJiM64PYRb8y1TL49rXLMI517RBQJ1JMJldEpZ3LmiJiSWuXT%2BGW8VvFihVAlYczw8QFXFKNf9RGDV4E40LnF9rE8VvoIvpHVefiU6OV%2FnDmQptmsKJ0A24BfCwyr30AbqRaN0Jh%2Bh7FY1nKksDu%2Fe0FBgok0YULrv7dHNK5gIj48QwNujtYOjDx2Bflr5zLN%2FkJEPUiZWpaRC5USCkn4b3w4jkJCZeaq%2BKzzMKOdakbHGPMLwSY1GGmyHcw598h%2BW2XtuC%2Fp3npxVmFjkrjDRISf%2BN%2BcJHH3SRTvsyP%2Bki%2FMazkB%2BhvbEhppRyl1WrmD4n28Vfjf94Oglar0rFo%2BF9xSAyrVdd%2BBMiPGFdwpV6WQoDROMMa3287AZVs14gA%2BfA%2BqSMJO0ocQGOqUB1mCpJZLOBbHUJJyakEkgCLOf3%2BHMEj%2Faxc%2FSxdpYzG1XwOslaOVUVX5DfdolzeNlVa4Tr45FfQUjXG250oBVp1UEoMQFpy%2FsX1YEHm3Hgc0%2BLmaGolGWTTwySL8qXD9ryTPfJ6egoRVbP%2B7E8gzyhfl69gkdojffsJlNqf%2BMG5jTmTAt124YA5QVwP%2Bj9uUwFAX8Vx4UuHDnHC4oDPF3mhqsffQo&X-Amz-Signature=ee96a103c83a158f3e4b2ad129efb67e7d3008726169d984cc26b64f44344681&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZLYHMGA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCsVtsRpb70vtlu2mNt%2Bjs6e%2BMPeczD5Q9vNEdisgXLGgIgWWUFOMMeUjD%2BCBfwTah%2F6%2FazFGZmhk7fGCXj09JXEo8qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCE3Z%2F4F6TPIzQXZ0ircA1qcJMN%2BZIzIV%2F7WRRjS5j5jYDZUG8lmNCgcudHi%2BrT%2FJagmE6PuYJnCpR5IBKN7p7kQyT9UDcx6eirpn%2B3qhRMt9tstnLT6X%2BWD7OYls%2B5oA3zsR0cdOzd0jicvX4xbOX3BLBH8mMZkkcPLUIFCshQh67ujgdaRaGHKkn9MHxSvyYl9%2FqLi0JHrdZG7u6mvUMp8%2F50%2BG5l9ST8JQHbcXo2P7ClWjaLTCThPfPF23ezlr0B3jFsS%2B2fJiM64PYRb8y1TL49rXLMI517RBQJ1JMJldEpZ3LmiJiSWuXT%2BGW8VvFihVAlYczw8QFXFKNf9RGDV4E40LnF9rE8VvoIvpHVefiU6OV%2FnDmQptmsKJ0A24BfCwyr30AbqRaN0Jh%2Bh7FY1nKksDu%2Fe0FBgok0YULrv7dHNK5gIj48QwNujtYOjDx2Bflr5zLN%2FkJEPUiZWpaRC5USCkn4b3w4jkJCZeaq%2BKzzMKOdakbHGPMLwSY1GGmyHcw598h%2BW2XtuC%2Fp3npxVmFjkrjDRISf%2BN%2BcJHH3SRTvsyP%2Bki%2FMazkB%2BhvbEhppRyl1WrmD4n28Vfjf94Oglar0rFo%2BF9xSAyrVdd%2BBMiPGFdwpV6WQoDROMMa3287AZVs14gA%2BfA%2BqSMJO0ocQGOqUB1mCpJZLOBbHUJJyakEkgCLOf3%2BHMEj%2Faxc%2FSxdpYzG1XwOslaOVUVX5DfdolzeNlVa4Tr45FfQUjXG250oBVp1UEoMQFpy%2FsX1YEHm3Hgc0%2BLmaGolGWTTwySL8qXD9ryTPfJ6egoRVbP%2B7E8gzyhfl69gkdojffsJlNqf%2BMG5jTmTAt124YA5QVwP%2Bj9uUwFAX8Vx4UuHDnHC4oDPF3mhqsffQo&X-Amz-Signature=a80c2760cbc79a6e4cc6c35b8ccf9a1ae23eaff983aff299d0d234bae8294011&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZLYHMGA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCsVtsRpb70vtlu2mNt%2Bjs6e%2BMPeczD5Q9vNEdisgXLGgIgWWUFOMMeUjD%2BCBfwTah%2F6%2FazFGZmhk7fGCXj09JXEo8qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCE3Z%2F4F6TPIzQXZ0ircA1qcJMN%2BZIzIV%2F7WRRjS5j5jYDZUG8lmNCgcudHi%2BrT%2FJagmE6PuYJnCpR5IBKN7p7kQyT9UDcx6eirpn%2B3qhRMt9tstnLT6X%2BWD7OYls%2B5oA3zsR0cdOzd0jicvX4xbOX3BLBH8mMZkkcPLUIFCshQh67ujgdaRaGHKkn9MHxSvyYl9%2FqLi0JHrdZG7u6mvUMp8%2F50%2BG5l9ST8JQHbcXo2P7ClWjaLTCThPfPF23ezlr0B3jFsS%2B2fJiM64PYRb8y1TL49rXLMI517RBQJ1JMJldEpZ3LmiJiSWuXT%2BGW8VvFihVAlYczw8QFXFKNf9RGDV4E40LnF9rE8VvoIvpHVefiU6OV%2FnDmQptmsKJ0A24BfCwyr30AbqRaN0Jh%2Bh7FY1nKksDu%2Fe0FBgok0YULrv7dHNK5gIj48QwNujtYOjDx2Bflr5zLN%2FkJEPUiZWpaRC5USCkn4b3w4jkJCZeaq%2BKzzMKOdakbHGPMLwSY1GGmyHcw598h%2BW2XtuC%2Fp3npxVmFjkrjDRISf%2BN%2BcJHH3SRTvsyP%2Bki%2FMazkB%2BhvbEhppRyl1WrmD4n28Vfjf94Oglar0rFo%2BF9xSAyrVdd%2BBMiPGFdwpV6WQoDROMMa3287AZVs14gA%2BfA%2BqSMJO0ocQGOqUB1mCpJZLOBbHUJJyakEkgCLOf3%2BHMEj%2Faxc%2FSxdpYzG1XwOslaOVUVX5DfdolzeNlVa4Tr45FfQUjXG250oBVp1UEoMQFpy%2FsX1YEHm3Hgc0%2BLmaGolGWTTwySL8qXD9ryTPfJ6egoRVbP%2B7E8gzyhfl69gkdojffsJlNqf%2BMG5jTmTAt124YA5QVwP%2Bj9uUwFAX8Vx4UuHDnHC4oDPF3mhqsffQo&X-Amz-Signature=3198532e08676875c43042e0f7d12528bdb8390606f5f3f1e38d8d8be176332b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZLYHMGA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCsVtsRpb70vtlu2mNt%2Bjs6e%2BMPeczD5Q9vNEdisgXLGgIgWWUFOMMeUjD%2BCBfwTah%2F6%2FazFGZmhk7fGCXj09JXEo8qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCE3Z%2F4F6TPIzQXZ0ircA1qcJMN%2BZIzIV%2F7WRRjS5j5jYDZUG8lmNCgcudHi%2BrT%2FJagmE6PuYJnCpR5IBKN7p7kQyT9UDcx6eirpn%2B3qhRMt9tstnLT6X%2BWD7OYls%2B5oA3zsR0cdOzd0jicvX4xbOX3BLBH8mMZkkcPLUIFCshQh67ujgdaRaGHKkn9MHxSvyYl9%2FqLi0JHrdZG7u6mvUMp8%2F50%2BG5l9ST8JQHbcXo2P7ClWjaLTCThPfPF23ezlr0B3jFsS%2B2fJiM64PYRb8y1TL49rXLMI517RBQJ1JMJldEpZ3LmiJiSWuXT%2BGW8VvFihVAlYczw8QFXFKNf9RGDV4E40LnF9rE8VvoIvpHVefiU6OV%2FnDmQptmsKJ0A24BfCwyr30AbqRaN0Jh%2Bh7FY1nKksDu%2Fe0FBgok0YULrv7dHNK5gIj48QwNujtYOjDx2Bflr5zLN%2FkJEPUiZWpaRC5USCkn4b3w4jkJCZeaq%2BKzzMKOdakbHGPMLwSY1GGmyHcw598h%2BW2XtuC%2Fp3npxVmFjkrjDRISf%2BN%2BcJHH3SRTvsyP%2Bki%2FMazkB%2BhvbEhppRyl1WrmD4n28Vfjf94Oglar0rFo%2BF9xSAyrVdd%2BBMiPGFdwpV6WQoDROMMa3287AZVs14gA%2BfA%2BqSMJO0ocQGOqUB1mCpJZLOBbHUJJyakEkgCLOf3%2BHMEj%2Faxc%2FSxdpYzG1XwOslaOVUVX5DfdolzeNlVa4Tr45FfQUjXG250oBVp1UEoMQFpy%2FsX1YEHm3Hgc0%2BLmaGolGWTTwySL8qXD9ryTPfJ6egoRVbP%2B7E8gzyhfl69gkdojffsJlNqf%2BMG5jTmTAt124YA5QVwP%2Bj9uUwFAX8Vx4UuHDnHC4oDPF3mhqsffQo&X-Amz-Signature=29d9d63bbab2588aface58ddf5e8eef9440b10ece648139432288996bdba96cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZLYHMGA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCsVtsRpb70vtlu2mNt%2Bjs6e%2BMPeczD5Q9vNEdisgXLGgIgWWUFOMMeUjD%2BCBfwTah%2F6%2FazFGZmhk7fGCXj09JXEo8qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCE3Z%2F4F6TPIzQXZ0ircA1qcJMN%2BZIzIV%2F7WRRjS5j5jYDZUG8lmNCgcudHi%2BrT%2FJagmE6PuYJnCpR5IBKN7p7kQyT9UDcx6eirpn%2B3qhRMt9tstnLT6X%2BWD7OYls%2B5oA3zsR0cdOzd0jicvX4xbOX3BLBH8mMZkkcPLUIFCshQh67ujgdaRaGHKkn9MHxSvyYl9%2FqLi0JHrdZG7u6mvUMp8%2F50%2BG5l9ST8JQHbcXo2P7ClWjaLTCThPfPF23ezlr0B3jFsS%2B2fJiM64PYRb8y1TL49rXLMI517RBQJ1JMJldEpZ3LmiJiSWuXT%2BGW8VvFihVAlYczw8QFXFKNf9RGDV4E40LnF9rE8VvoIvpHVefiU6OV%2FnDmQptmsKJ0A24BfCwyr30AbqRaN0Jh%2Bh7FY1nKksDu%2Fe0FBgok0YULrv7dHNK5gIj48QwNujtYOjDx2Bflr5zLN%2FkJEPUiZWpaRC5USCkn4b3w4jkJCZeaq%2BKzzMKOdakbHGPMLwSY1GGmyHcw598h%2BW2XtuC%2Fp3npxVmFjkrjDRISf%2BN%2BcJHH3SRTvsyP%2Bki%2FMazkB%2BhvbEhppRyl1WrmD4n28Vfjf94Oglar0rFo%2BF9xSAyrVdd%2BBMiPGFdwpV6WQoDROMMa3287AZVs14gA%2BfA%2BqSMJO0ocQGOqUB1mCpJZLOBbHUJJyakEkgCLOf3%2BHMEj%2Faxc%2FSxdpYzG1XwOslaOVUVX5DfdolzeNlVa4Tr45FfQUjXG250oBVp1UEoMQFpy%2FsX1YEHm3Hgc0%2BLmaGolGWTTwySL8qXD9ryTPfJ6egoRVbP%2B7E8gzyhfl69gkdojffsJlNqf%2BMG5jTmTAt124YA5QVwP%2Bj9uUwFAX8Vx4UuHDnHC4oDPF3mhqsffQo&X-Amz-Signature=15401533a8b6b9e6a99131437c336a5cf82bd5083a98cbe1b8ae87bd93b00a8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZLYHMGA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCsVtsRpb70vtlu2mNt%2Bjs6e%2BMPeczD5Q9vNEdisgXLGgIgWWUFOMMeUjD%2BCBfwTah%2F6%2FazFGZmhk7fGCXj09JXEo8qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCE3Z%2F4F6TPIzQXZ0ircA1qcJMN%2BZIzIV%2F7WRRjS5j5jYDZUG8lmNCgcudHi%2BrT%2FJagmE6PuYJnCpR5IBKN7p7kQyT9UDcx6eirpn%2B3qhRMt9tstnLT6X%2BWD7OYls%2B5oA3zsR0cdOzd0jicvX4xbOX3BLBH8mMZkkcPLUIFCshQh67ujgdaRaGHKkn9MHxSvyYl9%2FqLi0JHrdZG7u6mvUMp8%2F50%2BG5l9ST8JQHbcXo2P7ClWjaLTCThPfPF23ezlr0B3jFsS%2B2fJiM64PYRb8y1TL49rXLMI517RBQJ1JMJldEpZ3LmiJiSWuXT%2BGW8VvFihVAlYczw8QFXFKNf9RGDV4E40LnF9rE8VvoIvpHVefiU6OV%2FnDmQptmsKJ0A24BfCwyr30AbqRaN0Jh%2Bh7FY1nKksDu%2Fe0FBgok0YULrv7dHNK5gIj48QwNujtYOjDx2Bflr5zLN%2FkJEPUiZWpaRC5USCkn4b3w4jkJCZeaq%2BKzzMKOdakbHGPMLwSY1GGmyHcw598h%2BW2XtuC%2Fp3npxVmFjkrjDRISf%2BN%2BcJHH3SRTvsyP%2Bki%2FMazkB%2BhvbEhppRyl1WrmD4n28Vfjf94Oglar0rFo%2BF9xSAyrVdd%2BBMiPGFdwpV6WQoDROMMa3287AZVs14gA%2BfA%2BqSMJO0ocQGOqUB1mCpJZLOBbHUJJyakEkgCLOf3%2BHMEj%2Faxc%2FSxdpYzG1XwOslaOVUVX5DfdolzeNlVa4Tr45FfQUjXG250oBVp1UEoMQFpy%2FsX1YEHm3Hgc0%2BLmaGolGWTTwySL8qXD9ryTPfJ6egoRVbP%2B7E8gzyhfl69gkdojffsJlNqf%2BMG5jTmTAt124YA5QVwP%2Bj9uUwFAX8Vx4UuHDnHC4oDPF3mhqsffQo&X-Amz-Signature=e098b1b449323525d98ca1d83672e41d557095dfc609aa089c27542c3877388e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZLYHMGA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCsVtsRpb70vtlu2mNt%2Bjs6e%2BMPeczD5Q9vNEdisgXLGgIgWWUFOMMeUjD%2BCBfwTah%2F6%2FazFGZmhk7fGCXj09JXEo8qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCE3Z%2F4F6TPIzQXZ0ircA1qcJMN%2BZIzIV%2F7WRRjS5j5jYDZUG8lmNCgcudHi%2BrT%2FJagmE6PuYJnCpR5IBKN7p7kQyT9UDcx6eirpn%2B3qhRMt9tstnLT6X%2BWD7OYls%2B5oA3zsR0cdOzd0jicvX4xbOX3BLBH8mMZkkcPLUIFCshQh67ujgdaRaGHKkn9MHxSvyYl9%2FqLi0JHrdZG7u6mvUMp8%2F50%2BG5l9ST8JQHbcXo2P7ClWjaLTCThPfPF23ezlr0B3jFsS%2B2fJiM64PYRb8y1TL49rXLMI517RBQJ1JMJldEpZ3LmiJiSWuXT%2BGW8VvFihVAlYczw8QFXFKNf9RGDV4E40LnF9rE8VvoIvpHVefiU6OV%2FnDmQptmsKJ0A24BfCwyr30AbqRaN0Jh%2Bh7FY1nKksDu%2Fe0FBgok0YULrv7dHNK5gIj48QwNujtYOjDx2Bflr5zLN%2FkJEPUiZWpaRC5USCkn4b3w4jkJCZeaq%2BKzzMKOdakbHGPMLwSY1GGmyHcw598h%2BW2XtuC%2Fp3npxVmFjkrjDRISf%2BN%2BcJHH3SRTvsyP%2Bki%2FMazkB%2BhvbEhppRyl1WrmD4n28Vfjf94Oglar0rFo%2BF9xSAyrVdd%2BBMiPGFdwpV6WQoDROMMa3287AZVs14gA%2BfA%2BqSMJO0ocQGOqUB1mCpJZLOBbHUJJyakEkgCLOf3%2BHMEj%2Faxc%2FSxdpYzG1XwOslaOVUVX5DfdolzeNlVa4Tr45FfQUjXG250oBVp1UEoMQFpy%2FsX1YEHm3Hgc0%2BLmaGolGWTTwySL8qXD9ryTPfJ6egoRVbP%2B7E8gzyhfl69gkdojffsJlNqf%2BMG5jTmTAt124YA5QVwP%2Bj9uUwFAX8Vx4UuHDnHC4oDPF3mhqsffQo&X-Amz-Signature=80df97ef2e560e1984f98f3aff19476c3ae8d821a038eecfe2076cfb4b76cc33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZLYHMGA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCsVtsRpb70vtlu2mNt%2Bjs6e%2BMPeczD5Q9vNEdisgXLGgIgWWUFOMMeUjD%2BCBfwTah%2F6%2FazFGZmhk7fGCXj09JXEo8qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCE3Z%2F4F6TPIzQXZ0ircA1qcJMN%2BZIzIV%2F7WRRjS5j5jYDZUG8lmNCgcudHi%2BrT%2FJagmE6PuYJnCpR5IBKN7p7kQyT9UDcx6eirpn%2B3qhRMt9tstnLT6X%2BWD7OYls%2B5oA3zsR0cdOzd0jicvX4xbOX3BLBH8mMZkkcPLUIFCshQh67ujgdaRaGHKkn9MHxSvyYl9%2FqLi0JHrdZG7u6mvUMp8%2F50%2BG5l9ST8JQHbcXo2P7ClWjaLTCThPfPF23ezlr0B3jFsS%2B2fJiM64PYRb8y1TL49rXLMI517RBQJ1JMJldEpZ3LmiJiSWuXT%2BGW8VvFihVAlYczw8QFXFKNf9RGDV4E40LnF9rE8VvoIvpHVefiU6OV%2FnDmQptmsKJ0A24BfCwyr30AbqRaN0Jh%2Bh7FY1nKksDu%2Fe0FBgok0YULrv7dHNK5gIj48QwNujtYOjDx2Bflr5zLN%2FkJEPUiZWpaRC5USCkn4b3w4jkJCZeaq%2BKzzMKOdakbHGPMLwSY1GGmyHcw598h%2BW2XtuC%2Fp3npxVmFjkrjDRISf%2BN%2BcJHH3SRTvsyP%2Bki%2FMazkB%2BhvbEhppRyl1WrmD4n28Vfjf94Oglar0rFo%2BF9xSAyrVdd%2BBMiPGFdwpV6WQoDROMMa3287AZVs14gA%2BfA%2BqSMJO0ocQGOqUB1mCpJZLOBbHUJJyakEkgCLOf3%2BHMEj%2Faxc%2FSxdpYzG1XwOslaOVUVX5DfdolzeNlVa4Tr45FfQUjXG250oBVp1UEoMQFpy%2FsX1YEHm3Hgc0%2BLmaGolGWTTwySL8qXD9ryTPfJ6egoRVbP%2B7E8gzyhfl69gkdojffsJlNqf%2BMG5jTmTAt124YA5QVwP%2Bj9uUwFAX8Vx4UuHDnHC4oDPF3mhqsffQo&X-Amz-Signature=183a8dec3a542aa62515b25c2a49d4c83da74abaf017ee98296f4dce5327b18e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZLYHMGA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCsVtsRpb70vtlu2mNt%2Bjs6e%2BMPeczD5Q9vNEdisgXLGgIgWWUFOMMeUjD%2BCBfwTah%2F6%2FazFGZmhk7fGCXj09JXEo8qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCE3Z%2F4F6TPIzQXZ0ircA1qcJMN%2BZIzIV%2F7WRRjS5j5jYDZUG8lmNCgcudHi%2BrT%2FJagmE6PuYJnCpR5IBKN7p7kQyT9UDcx6eirpn%2B3qhRMt9tstnLT6X%2BWD7OYls%2B5oA3zsR0cdOzd0jicvX4xbOX3BLBH8mMZkkcPLUIFCshQh67ujgdaRaGHKkn9MHxSvyYl9%2FqLi0JHrdZG7u6mvUMp8%2F50%2BG5l9ST8JQHbcXo2P7ClWjaLTCThPfPF23ezlr0B3jFsS%2B2fJiM64PYRb8y1TL49rXLMI517RBQJ1JMJldEpZ3LmiJiSWuXT%2BGW8VvFihVAlYczw8QFXFKNf9RGDV4E40LnF9rE8VvoIvpHVefiU6OV%2FnDmQptmsKJ0A24BfCwyr30AbqRaN0Jh%2Bh7FY1nKksDu%2Fe0FBgok0YULrv7dHNK5gIj48QwNujtYOjDx2Bflr5zLN%2FkJEPUiZWpaRC5USCkn4b3w4jkJCZeaq%2BKzzMKOdakbHGPMLwSY1GGmyHcw598h%2BW2XtuC%2Fp3npxVmFjkrjDRISf%2BN%2BcJHH3SRTvsyP%2Bki%2FMazkB%2BhvbEhppRyl1WrmD4n28Vfjf94Oglar0rFo%2BF9xSAyrVdd%2BBMiPGFdwpV6WQoDROMMa3287AZVs14gA%2BfA%2BqSMJO0ocQGOqUB1mCpJZLOBbHUJJyakEkgCLOf3%2BHMEj%2Faxc%2FSxdpYzG1XwOslaOVUVX5DfdolzeNlVa4Tr45FfQUjXG250oBVp1UEoMQFpy%2FsX1YEHm3Hgc0%2BLmaGolGWTTwySL8qXD9ryTPfJ6egoRVbP%2B7E8gzyhfl69gkdojffsJlNqf%2BMG5jTmTAt124YA5QVwP%2Bj9uUwFAX8Vx4UuHDnHC4oDPF3mhqsffQo&X-Amz-Signature=8800361676e559a6288413facf5ae4d0bf2971eef38f94a438752aa3f42f786e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
