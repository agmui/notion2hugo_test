---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-08-02T01:09:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-08-02T01:09:00.000Z"
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

TODO: check inertial block

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

    ~~<inertial>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <mass value="0.125"/>
      <inertia ixx="0.001" ixy="0" ixz="0" iyy="0.001" iyz="0" izz="0.001" />
    </inertial>~~

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLC2G2P3%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHxTCtCN7s3OszWjjRczxkaODKUXsMEJQsK85XTePX5IAiB3zp6LZNF8UVavgkwuD8rLi7zC3S4DA%2BviKszELmVwSiqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDthXY1EvrOgi81imKtwD3cdVlBcA4eLvhR12pACZ4ZlsfuiaprI0lf8Zl0IcrjYIqqGIaB6zBHjFRZ4OxwiqhJ7esN9b483bYMEqRJr0HYQFM5oxoo91RzvcQqq07UrjGErBP6ZBPJnGGdO3fxafuZaO9k2AEsAgUHgqkoGrVS2icpf31HxLhKM0R2HPOhbL1hqi6d9QHf1OYxsFu57E2sGvR27z%2FcmjzUVCnvdvgJLS6wzyJzE3SlEGuC%2BI6nuLPO4Bi3aAOc%2FbDW9OG4e%2Buad4t3kRcePk3Zl%2BBbf2mr6TtiAkFUSiMRSBxvTdBtgaoX6SFVOI9uY82EdTQew3jgpAqhEt9MMhjVDeOR8oTYGDYeVKiHuXkSxJ4zTF3HEwmd6yW%2FB0LKPqfwUoMkPuWZo%2FsJsDKW2yq4ID%2FvKa9D%2B%2B1nLeuOptLHdVbz7coBlm%2FVvoxZkgexCZv5Crk8BcIixeRVyI6hcJ3ibvIj6uf5H3yUjWKywkn3gtQoJcs%2Fuzk3LD5vCuehxEblwbzcAmOCiD39XdUN%2BraQQsybscFhFEHn%2BZLY5ATrz%2F6q%2F4TSkJXTk%2BwcUdFy0JDdzV%2BXgEkI9BxdRl6RM9ZKqZVfHzpIrVuJopYKr4dkKYV7%2Ff6ni3F7XschYac5g%2BGIEw75y2xAY6pgG6ySY86OOrN%2BjS4e3WrB0XJXf9C7gVN1EIWgodVDyPw8xAbaP8Uc%2FYOtFzwSprGoAannkS3RYcEWfrf0FG60c4wD%2B8Ask7SUf8eNOfmpm1HqgcmdbH5ZvJCp4EorBFefGqg9RlPwnAzvUwYSZC586TVFdyd0gJx%2BfXPmpteLKJLcgm4S%2BsSvoiM09vWdB%2F51gfIs1RslahKALcNZdbT5aRxN7QWdjn&X-Amz-Signature=81306c3440480f9acae87024b70ffde07f87fd68f32a1d71131fb0311972b7f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDRODJYW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYyAyhjwGbVyYoMFbOUeWduulTcPpb233a6hYIGVHGMAiEArMSlnqbi%2B1KSPfEUFNsDp5zrhoy8gGgIx7%2B0SY%2F3IzkqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKU6SLN7%2BGHOFmtnYCrcA%2FJzGcylPA3OM5MmHRcbYucNwAyr4StfsvfwV%2BVz7gdX4ZY%2Fr%2FosMpeU7wPpEueZJ9ijYXuPyY2G5CQ0eKSAHl6FBkrWfPIAMIlcsdsE6vqsp1e6cfeXXOts9LwiD7RexAMjQUkAR4sIdkZs7SdvvmseQJI4C7CIrlcuUbBJbOr8RrbyGde0Igo7g3Y%2BR4oJGa8gGjQZZLGip9tXuGTT7oKhuYksSHEQ660Go4Vu23wuCBlsegvp9StgPmwScoeTbr6bCboEtsEMhPjEh4NKON9jnplhguraSnaUbT6y2d3mmQSoGFOrTyuImMgUxnB8u%2FlfhNRH3j99wrFpC5Azqan5nx0PALMQ79v8tMk9ZIPxO0KL%2FBjjJd4TIRiwDfwzXlmmwECVN04iT9IowNNH3TlBNIQ4MWd0ZXtavEklijYWSPKyNVOmHxvjR5O0Rlr0S%2BDt9oRMfN0KKPH7cVkcd7XKfXBY1fXfSPs0QD9gzUxMs0snOtxzrQw%2By%2F%2FJqDv%2F1vXPYKmmrzDdyGYhP36YJlA8yJ9cgl5Y8rbhk5Fo4sLjFRohZW6WPnIVUcOEt2QhxbJOYK0g3Tb7EjcDYT9d9wZiLTiDgUwtBZuOBajX4u6NVX2xkSXgDh8FRHvZMPmctsQGOqUB6Y%2BrNylD6O%2FySV%2B8COY9%2FqSZSGhIsoL4kK0yHpCzyoRZrXRnkz%2F4PelDZgRjCKaIltWO33wauj3UU7WbtdnR3CWH8wq0kes6FshJf60NhC2mF6E7YcwTNd43Ohyx5anS4sthoahEylA%2BONa9A1REiKnjIGlQaDvbP%2Br7eLArMIClTuDpEIVQ%2BsV%2BnPsiG7D2VSnKJJxc1OfGjR6kTsj%2B83UVPZGP&X-Amz-Signature=1c70f18ef0ab84ac8626bab8a2056c4e1e23358aa87bd2bd956d89fccc7866b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDRODJYW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYyAyhjwGbVyYoMFbOUeWduulTcPpb233a6hYIGVHGMAiEArMSlnqbi%2B1KSPfEUFNsDp5zrhoy8gGgIx7%2B0SY%2F3IzkqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKU6SLN7%2BGHOFmtnYCrcA%2FJzGcylPA3OM5MmHRcbYucNwAyr4StfsvfwV%2BVz7gdX4ZY%2Fr%2FosMpeU7wPpEueZJ9ijYXuPyY2G5CQ0eKSAHl6FBkrWfPIAMIlcsdsE6vqsp1e6cfeXXOts9LwiD7RexAMjQUkAR4sIdkZs7SdvvmseQJI4C7CIrlcuUbBJbOr8RrbyGde0Igo7g3Y%2BR4oJGa8gGjQZZLGip9tXuGTT7oKhuYksSHEQ660Go4Vu23wuCBlsegvp9StgPmwScoeTbr6bCboEtsEMhPjEh4NKON9jnplhguraSnaUbT6y2d3mmQSoGFOrTyuImMgUxnB8u%2FlfhNRH3j99wrFpC5Azqan5nx0PALMQ79v8tMk9ZIPxO0KL%2FBjjJd4TIRiwDfwzXlmmwECVN04iT9IowNNH3TlBNIQ4MWd0ZXtavEklijYWSPKyNVOmHxvjR5O0Rlr0S%2BDt9oRMfN0KKPH7cVkcd7XKfXBY1fXfSPs0QD9gzUxMs0snOtxzrQw%2By%2F%2FJqDv%2F1vXPYKmmrzDdyGYhP36YJlA8yJ9cgl5Y8rbhk5Fo4sLjFRohZW6WPnIVUcOEt2QhxbJOYK0g3Tb7EjcDYT9d9wZiLTiDgUwtBZuOBajX4u6NVX2xkSXgDh8FRHvZMPmctsQGOqUB6Y%2BrNylD6O%2FySV%2B8COY9%2FqSZSGhIsoL4kK0yHpCzyoRZrXRnkz%2F4PelDZgRjCKaIltWO33wauj3UU7WbtdnR3CWH8wq0kes6FshJf60NhC2mF6E7YcwTNd43Ohyx5anS4sthoahEylA%2BONa9A1REiKnjIGlQaDvbP%2Br7eLArMIClTuDpEIVQ%2BsV%2BnPsiG7D2VSnKJJxc1OfGjR6kTsj%2B83UVPZGP&X-Amz-Signature=e6b142143009c71599b4e039acc4a438228e3f7ba52b794991944e112eb9d0fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDRODJYW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYyAyhjwGbVyYoMFbOUeWduulTcPpb233a6hYIGVHGMAiEArMSlnqbi%2B1KSPfEUFNsDp5zrhoy8gGgIx7%2B0SY%2F3IzkqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKU6SLN7%2BGHOFmtnYCrcA%2FJzGcylPA3OM5MmHRcbYucNwAyr4StfsvfwV%2BVz7gdX4ZY%2Fr%2FosMpeU7wPpEueZJ9ijYXuPyY2G5CQ0eKSAHl6FBkrWfPIAMIlcsdsE6vqsp1e6cfeXXOts9LwiD7RexAMjQUkAR4sIdkZs7SdvvmseQJI4C7CIrlcuUbBJbOr8RrbyGde0Igo7g3Y%2BR4oJGa8gGjQZZLGip9tXuGTT7oKhuYksSHEQ660Go4Vu23wuCBlsegvp9StgPmwScoeTbr6bCboEtsEMhPjEh4NKON9jnplhguraSnaUbT6y2d3mmQSoGFOrTyuImMgUxnB8u%2FlfhNRH3j99wrFpC5Azqan5nx0PALMQ79v8tMk9ZIPxO0KL%2FBjjJd4TIRiwDfwzXlmmwECVN04iT9IowNNH3TlBNIQ4MWd0ZXtavEklijYWSPKyNVOmHxvjR5O0Rlr0S%2BDt9oRMfN0KKPH7cVkcd7XKfXBY1fXfSPs0QD9gzUxMs0snOtxzrQw%2By%2F%2FJqDv%2F1vXPYKmmrzDdyGYhP36YJlA8yJ9cgl5Y8rbhk5Fo4sLjFRohZW6WPnIVUcOEt2QhxbJOYK0g3Tb7EjcDYT9d9wZiLTiDgUwtBZuOBajX4u6NVX2xkSXgDh8FRHvZMPmctsQGOqUB6Y%2BrNylD6O%2FySV%2B8COY9%2FqSZSGhIsoL4kK0yHpCzyoRZrXRnkz%2F4PelDZgRjCKaIltWO33wauj3UU7WbtdnR3CWH8wq0kes6FshJf60NhC2mF6E7YcwTNd43Ohyx5anS4sthoahEylA%2BONa9A1REiKnjIGlQaDvbP%2Br7eLArMIClTuDpEIVQ%2BsV%2BnPsiG7D2VSnKJJxc1OfGjR6kTsj%2B83UVPZGP&X-Amz-Signature=295a9eb13d7bd29159644ffe9273331d5a747b96756faa27dfbff61e8f445cbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDRODJYW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYyAyhjwGbVyYoMFbOUeWduulTcPpb233a6hYIGVHGMAiEArMSlnqbi%2B1KSPfEUFNsDp5zrhoy8gGgIx7%2B0SY%2F3IzkqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKU6SLN7%2BGHOFmtnYCrcA%2FJzGcylPA3OM5MmHRcbYucNwAyr4StfsvfwV%2BVz7gdX4ZY%2Fr%2FosMpeU7wPpEueZJ9ijYXuPyY2G5CQ0eKSAHl6FBkrWfPIAMIlcsdsE6vqsp1e6cfeXXOts9LwiD7RexAMjQUkAR4sIdkZs7SdvvmseQJI4C7CIrlcuUbBJbOr8RrbyGde0Igo7g3Y%2BR4oJGa8gGjQZZLGip9tXuGTT7oKhuYksSHEQ660Go4Vu23wuCBlsegvp9StgPmwScoeTbr6bCboEtsEMhPjEh4NKON9jnplhguraSnaUbT6y2d3mmQSoGFOrTyuImMgUxnB8u%2FlfhNRH3j99wrFpC5Azqan5nx0PALMQ79v8tMk9ZIPxO0KL%2FBjjJd4TIRiwDfwzXlmmwECVN04iT9IowNNH3TlBNIQ4MWd0ZXtavEklijYWSPKyNVOmHxvjR5O0Rlr0S%2BDt9oRMfN0KKPH7cVkcd7XKfXBY1fXfSPs0QD9gzUxMs0snOtxzrQw%2By%2F%2FJqDv%2F1vXPYKmmrzDdyGYhP36YJlA8yJ9cgl5Y8rbhk5Fo4sLjFRohZW6WPnIVUcOEt2QhxbJOYK0g3Tb7EjcDYT9d9wZiLTiDgUwtBZuOBajX4u6NVX2xkSXgDh8FRHvZMPmctsQGOqUB6Y%2BrNylD6O%2FySV%2B8COY9%2FqSZSGhIsoL4kK0yHpCzyoRZrXRnkz%2F4PelDZgRjCKaIltWO33wauj3UU7WbtdnR3CWH8wq0kes6FshJf60NhC2mF6E7YcwTNd43Ohyx5anS4sthoahEylA%2BONa9A1REiKnjIGlQaDvbP%2Br7eLArMIClTuDpEIVQ%2BsV%2BnPsiG7D2VSnKJJxc1OfGjR6kTsj%2B83UVPZGP&X-Amz-Signature=af6fb7a3c95adb6eab9b950a9963d8caf8675a80a09a5d7b8b8bec726466e7e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDRODJYW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYyAyhjwGbVyYoMFbOUeWduulTcPpb233a6hYIGVHGMAiEArMSlnqbi%2B1KSPfEUFNsDp5zrhoy8gGgIx7%2B0SY%2F3IzkqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKU6SLN7%2BGHOFmtnYCrcA%2FJzGcylPA3OM5MmHRcbYucNwAyr4StfsvfwV%2BVz7gdX4ZY%2Fr%2FosMpeU7wPpEueZJ9ijYXuPyY2G5CQ0eKSAHl6FBkrWfPIAMIlcsdsE6vqsp1e6cfeXXOts9LwiD7RexAMjQUkAR4sIdkZs7SdvvmseQJI4C7CIrlcuUbBJbOr8RrbyGde0Igo7g3Y%2BR4oJGa8gGjQZZLGip9tXuGTT7oKhuYksSHEQ660Go4Vu23wuCBlsegvp9StgPmwScoeTbr6bCboEtsEMhPjEh4NKON9jnplhguraSnaUbT6y2d3mmQSoGFOrTyuImMgUxnB8u%2FlfhNRH3j99wrFpC5Azqan5nx0PALMQ79v8tMk9ZIPxO0KL%2FBjjJd4TIRiwDfwzXlmmwECVN04iT9IowNNH3TlBNIQ4MWd0ZXtavEklijYWSPKyNVOmHxvjR5O0Rlr0S%2BDt9oRMfN0KKPH7cVkcd7XKfXBY1fXfSPs0QD9gzUxMs0snOtxzrQw%2By%2F%2FJqDv%2F1vXPYKmmrzDdyGYhP36YJlA8yJ9cgl5Y8rbhk5Fo4sLjFRohZW6WPnIVUcOEt2QhxbJOYK0g3Tb7EjcDYT9d9wZiLTiDgUwtBZuOBajX4u6NVX2xkSXgDh8FRHvZMPmctsQGOqUB6Y%2BrNylD6O%2FySV%2B8COY9%2FqSZSGhIsoL4kK0yHpCzyoRZrXRnkz%2F4PelDZgRjCKaIltWO33wauj3UU7WbtdnR3CWH8wq0kes6FshJf60NhC2mF6E7YcwTNd43Ohyx5anS4sthoahEylA%2BONa9A1REiKnjIGlQaDvbP%2Br7eLArMIClTuDpEIVQ%2BsV%2BnPsiG7D2VSnKJJxc1OfGjR6kTsj%2B83UVPZGP&X-Amz-Signature=0763eec64db562ab3861ab2215ad21f889acbefbb8ae12b42e43c6fe1c2d6d47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDRODJYW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYyAyhjwGbVyYoMFbOUeWduulTcPpb233a6hYIGVHGMAiEArMSlnqbi%2B1KSPfEUFNsDp5zrhoy8gGgIx7%2B0SY%2F3IzkqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKU6SLN7%2BGHOFmtnYCrcA%2FJzGcylPA3OM5MmHRcbYucNwAyr4StfsvfwV%2BVz7gdX4ZY%2Fr%2FosMpeU7wPpEueZJ9ijYXuPyY2G5CQ0eKSAHl6FBkrWfPIAMIlcsdsE6vqsp1e6cfeXXOts9LwiD7RexAMjQUkAR4sIdkZs7SdvvmseQJI4C7CIrlcuUbBJbOr8RrbyGde0Igo7g3Y%2BR4oJGa8gGjQZZLGip9tXuGTT7oKhuYksSHEQ660Go4Vu23wuCBlsegvp9StgPmwScoeTbr6bCboEtsEMhPjEh4NKON9jnplhguraSnaUbT6y2d3mmQSoGFOrTyuImMgUxnB8u%2FlfhNRH3j99wrFpC5Azqan5nx0PALMQ79v8tMk9ZIPxO0KL%2FBjjJd4TIRiwDfwzXlmmwECVN04iT9IowNNH3TlBNIQ4MWd0ZXtavEklijYWSPKyNVOmHxvjR5O0Rlr0S%2BDt9oRMfN0KKPH7cVkcd7XKfXBY1fXfSPs0QD9gzUxMs0snOtxzrQw%2By%2F%2FJqDv%2F1vXPYKmmrzDdyGYhP36YJlA8yJ9cgl5Y8rbhk5Fo4sLjFRohZW6WPnIVUcOEt2QhxbJOYK0g3Tb7EjcDYT9d9wZiLTiDgUwtBZuOBajX4u6NVX2xkSXgDh8FRHvZMPmctsQGOqUB6Y%2BrNylD6O%2FySV%2B8COY9%2FqSZSGhIsoL4kK0yHpCzyoRZrXRnkz%2F4PelDZgRjCKaIltWO33wauj3UU7WbtdnR3CWH8wq0kes6FshJf60NhC2mF6E7YcwTNd43Ohyx5anS4sthoahEylA%2BONa9A1REiKnjIGlQaDvbP%2Br7eLArMIClTuDpEIVQ%2BsV%2BnPsiG7D2VSnKJJxc1OfGjR6kTsj%2B83UVPZGP&X-Amz-Signature=34a95319f791a58d9c91ba6f37c34e53363b329ef81dd5e3cd49a5b1f53c598a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDRODJYW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYyAyhjwGbVyYoMFbOUeWduulTcPpb233a6hYIGVHGMAiEArMSlnqbi%2B1KSPfEUFNsDp5zrhoy8gGgIx7%2B0SY%2F3IzkqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKU6SLN7%2BGHOFmtnYCrcA%2FJzGcylPA3OM5MmHRcbYucNwAyr4StfsvfwV%2BVz7gdX4ZY%2Fr%2FosMpeU7wPpEueZJ9ijYXuPyY2G5CQ0eKSAHl6FBkrWfPIAMIlcsdsE6vqsp1e6cfeXXOts9LwiD7RexAMjQUkAR4sIdkZs7SdvvmseQJI4C7CIrlcuUbBJbOr8RrbyGde0Igo7g3Y%2BR4oJGa8gGjQZZLGip9tXuGTT7oKhuYksSHEQ660Go4Vu23wuCBlsegvp9StgPmwScoeTbr6bCboEtsEMhPjEh4NKON9jnplhguraSnaUbT6y2d3mmQSoGFOrTyuImMgUxnB8u%2FlfhNRH3j99wrFpC5Azqan5nx0PALMQ79v8tMk9ZIPxO0KL%2FBjjJd4TIRiwDfwzXlmmwECVN04iT9IowNNH3TlBNIQ4MWd0ZXtavEklijYWSPKyNVOmHxvjR5O0Rlr0S%2BDt9oRMfN0KKPH7cVkcd7XKfXBY1fXfSPs0QD9gzUxMs0snOtxzrQw%2By%2F%2FJqDv%2F1vXPYKmmrzDdyGYhP36YJlA8yJ9cgl5Y8rbhk5Fo4sLjFRohZW6WPnIVUcOEt2QhxbJOYK0g3Tb7EjcDYT9d9wZiLTiDgUwtBZuOBajX4u6NVX2xkSXgDh8FRHvZMPmctsQGOqUB6Y%2BrNylD6O%2FySV%2B8COY9%2FqSZSGhIsoL4kK0yHpCzyoRZrXRnkz%2F4PelDZgRjCKaIltWO33wauj3UU7WbtdnR3CWH8wq0kes6FshJf60NhC2mF6E7YcwTNd43Ohyx5anS4sthoahEylA%2BONa9A1REiKnjIGlQaDvbP%2Br7eLArMIClTuDpEIVQ%2BsV%2BnPsiG7D2VSnKJJxc1OfGjR6kTsj%2B83UVPZGP&X-Amz-Signature=1940a0ad33d09a0d2a0ce9b459135bb820b292d5e4c1bb8be589c3f7c3558ab1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDRODJYW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYyAyhjwGbVyYoMFbOUeWduulTcPpb233a6hYIGVHGMAiEArMSlnqbi%2B1KSPfEUFNsDp5zrhoy8gGgIx7%2B0SY%2F3IzkqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKU6SLN7%2BGHOFmtnYCrcA%2FJzGcylPA3OM5MmHRcbYucNwAyr4StfsvfwV%2BVz7gdX4ZY%2Fr%2FosMpeU7wPpEueZJ9ijYXuPyY2G5CQ0eKSAHl6FBkrWfPIAMIlcsdsE6vqsp1e6cfeXXOts9LwiD7RexAMjQUkAR4sIdkZs7SdvvmseQJI4C7CIrlcuUbBJbOr8RrbyGde0Igo7g3Y%2BR4oJGa8gGjQZZLGip9tXuGTT7oKhuYksSHEQ660Go4Vu23wuCBlsegvp9StgPmwScoeTbr6bCboEtsEMhPjEh4NKON9jnplhguraSnaUbT6y2d3mmQSoGFOrTyuImMgUxnB8u%2FlfhNRH3j99wrFpC5Azqan5nx0PALMQ79v8tMk9ZIPxO0KL%2FBjjJd4TIRiwDfwzXlmmwECVN04iT9IowNNH3TlBNIQ4MWd0ZXtavEklijYWSPKyNVOmHxvjR5O0Rlr0S%2BDt9oRMfN0KKPH7cVkcd7XKfXBY1fXfSPs0QD9gzUxMs0snOtxzrQw%2By%2F%2FJqDv%2F1vXPYKmmrzDdyGYhP36YJlA8yJ9cgl5Y8rbhk5Fo4sLjFRohZW6WPnIVUcOEt2QhxbJOYK0g3Tb7EjcDYT9d9wZiLTiDgUwtBZuOBajX4u6NVX2xkSXgDh8FRHvZMPmctsQGOqUB6Y%2BrNylD6O%2FySV%2B8COY9%2FqSZSGhIsoL4kK0yHpCzyoRZrXRnkz%2F4PelDZgRjCKaIltWO33wauj3UU7WbtdnR3CWH8wq0kes6FshJf60NhC2mF6E7YcwTNd43Ohyx5anS4sthoahEylA%2BONa9A1REiKnjIGlQaDvbP%2Br7eLArMIClTuDpEIVQ%2BsV%2BnPsiG7D2VSnKJJxc1OfGjR6kTsj%2B83UVPZGP&X-Amz-Signature=229d9194e76f075850520649cf0191bfe3bcc43aef209ca99b6cb7b9e9021ab4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDRODJYW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYyAyhjwGbVyYoMFbOUeWduulTcPpb233a6hYIGVHGMAiEArMSlnqbi%2B1KSPfEUFNsDp5zrhoy8gGgIx7%2B0SY%2F3IzkqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKU6SLN7%2BGHOFmtnYCrcA%2FJzGcylPA3OM5MmHRcbYucNwAyr4StfsvfwV%2BVz7gdX4ZY%2Fr%2FosMpeU7wPpEueZJ9ijYXuPyY2G5CQ0eKSAHl6FBkrWfPIAMIlcsdsE6vqsp1e6cfeXXOts9LwiD7RexAMjQUkAR4sIdkZs7SdvvmseQJI4C7CIrlcuUbBJbOr8RrbyGde0Igo7g3Y%2BR4oJGa8gGjQZZLGip9tXuGTT7oKhuYksSHEQ660Go4Vu23wuCBlsegvp9StgPmwScoeTbr6bCboEtsEMhPjEh4NKON9jnplhguraSnaUbT6y2d3mmQSoGFOrTyuImMgUxnB8u%2FlfhNRH3j99wrFpC5Azqan5nx0PALMQ79v8tMk9ZIPxO0KL%2FBjjJd4TIRiwDfwzXlmmwECVN04iT9IowNNH3TlBNIQ4MWd0ZXtavEklijYWSPKyNVOmHxvjR5O0Rlr0S%2BDt9oRMfN0KKPH7cVkcd7XKfXBY1fXfSPs0QD9gzUxMs0snOtxzrQw%2By%2F%2FJqDv%2F1vXPYKmmrzDdyGYhP36YJlA8yJ9cgl5Y8rbhk5Fo4sLjFRohZW6WPnIVUcOEt2QhxbJOYK0g3Tb7EjcDYT9d9wZiLTiDgUwtBZuOBajX4u6NVX2xkSXgDh8FRHvZMPmctsQGOqUB6Y%2BrNylD6O%2FySV%2B8COY9%2FqSZSGhIsoL4kK0yHpCzyoRZrXRnkz%2F4PelDZgRjCKaIltWO33wauj3UU7WbtdnR3CWH8wq0kes6FshJf60NhC2mF6E7YcwTNd43Ohyx5anS4sthoahEylA%2BONa9A1REiKnjIGlQaDvbP%2Br7eLArMIClTuDpEIVQ%2BsV%2BnPsiG7D2VSnKJJxc1OfGjR6kTsj%2B83UVPZGP&X-Amz-Signature=f5e19423fc9429506f39c063d613be5103d3ea47c7a48c910f3bb942bc23bdc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDRODJYW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYyAyhjwGbVyYoMFbOUeWduulTcPpb233a6hYIGVHGMAiEArMSlnqbi%2B1KSPfEUFNsDp5zrhoy8gGgIx7%2B0SY%2F3IzkqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKU6SLN7%2BGHOFmtnYCrcA%2FJzGcylPA3OM5MmHRcbYucNwAyr4StfsvfwV%2BVz7gdX4ZY%2Fr%2FosMpeU7wPpEueZJ9ijYXuPyY2G5CQ0eKSAHl6FBkrWfPIAMIlcsdsE6vqsp1e6cfeXXOts9LwiD7RexAMjQUkAR4sIdkZs7SdvvmseQJI4C7CIrlcuUbBJbOr8RrbyGde0Igo7g3Y%2BR4oJGa8gGjQZZLGip9tXuGTT7oKhuYksSHEQ660Go4Vu23wuCBlsegvp9StgPmwScoeTbr6bCboEtsEMhPjEh4NKON9jnplhguraSnaUbT6y2d3mmQSoGFOrTyuImMgUxnB8u%2FlfhNRH3j99wrFpC5Azqan5nx0PALMQ79v8tMk9ZIPxO0KL%2FBjjJd4TIRiwDfwzXlmmwECVN04iT9IowNNH3TlBNIQ4MWd0ZXtavEklijYWSPKyNVOmHxvjR5O0Rlr0S%2BDt9oRMfN0KKPH7cVkcd7XKfXBY1fXfSPs0QD9gzUxMs0snOtxzrQw%2By%2F%2FJqDv%2F1vXPYKmmrzDdyGYhP36YJlA8yJ9cgl5Y8rbhk5Fo4sLjFRohZW6WPnIVUcOEt2QhxbJOYK0g3Tb7EjcDYT9d9wZiLTiDgUwtBZuOBajX4u6NVX2xkSXgDh8FRHvZMPmctsQGOqUB6Y%2BrNylD6O%2FySV%2B8COY9%2FqSZSGhIsoL4kK0yHpCzyoRZrXRnkz%2F4PelDZgRjCKaIltWO33wauj3UU7WbtdnR3CWH8wq0kes6FshJf60NhC2mF6E7YcwTNd43Ohyx5anS4sthoahEylA%2BONa9A1REiKnjIGlQaDvbP%2Br7eLArMIClTuDpEIVQ%2BsV%2BnPsiG7D2VSnKJJxc1OfGjR6kTsj%2B83UVPZGP&X-Amz-Signature=4e9a5f6d78b7880d63e21a40edb58647cc67ea3a44d2acf5af69c0789e403f46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
