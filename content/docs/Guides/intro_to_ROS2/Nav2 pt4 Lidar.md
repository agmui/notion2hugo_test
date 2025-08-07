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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIMTVZ4T%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDgLMuNmGgY%2BIfXDgZWZ%2Bj8elE30D9TGXexmze20uoZFAIhAMKYsBm5LzAswsIaiZ30NOrh5yqkogq0uy0c38jq45O2KogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9jVqJB2LY1i%2BAcPkq3APAbVld%2F6Pq%2F30diOqq9%2FgJWKeM%2BwIZGuQQ9yc44f1vUHdBGamZPbR5xk6xxoCHjvMPzbbIbZEt6i7S5hxUwCpuGx%2B0hc6SfJLQgrPi03wA0Cvxzgt60VK5T4oMdVcVyt8nOgL5LHZxIehPrWM5UaUNzGbrzI8Cv60pYgTM6D5EIFKGFyAobNs2FPtKv%2B8A7fr974t7Ofu2%2BdPHK3LMIQLk%2BUB8eNh9jJ4AjNkQzSy4Sbm8Qy5xzpH5%2F0Zo%2B29soZHms7JwnjDzPSV1Za4mAOOu2xxn1JWql%2BJZ5Zyhm%2B22JOEB%2FiuJb67SXhhBwZTUzNOkA89RqZuLkfjli%2Bi%2Fnu22sWKyA0NEV9bCjUHe%2BAGEJDurGzLmP2PdKmZUCDD01SykWENCpl1bKUxn%2Bb6cm5rg1yJn16nK7gdWwPlqWnwlKKEstYFj%2FWRc2mBjjC4mIIQhsNdpc04Z54FxCL2xkHRR0k3PrA0XfgiuC4vM3HNHHdb8zk42rkOUJ%2FJB3PnlR6i5M9Tto2woZgKSb1qTqJUz98B4ysLjEoe1QFW%2Bc9vTlXF3fiaBNwpHOQCMtEjPjDZdqQjRUrk6DRsFo1vFDwW3ZtzOdnveRdlqQCz5tYxXKpuSkaldGJcLfa8OITDZ7dPEBjqkAU8%2Fibfp7w8F8nkiQ7WjGfE73UcZuTid6dGi1p5q6mPOwewIVbkkd6Gi3ee8BnZHf0ROI7J0zNlaR6rBzPtPJJqyuK%2FutMBqrmnD9BbH2z%2F%2B8iO9xo%2FgNIdLSpP%2FhacpxHDHTw4w6B60APhJikAodmnZzJlPue9AyVQxCR3HKhXUqLA80wAukxbAvX6YOn1V3xwBTIOr%2FKH0lC3sEg5B5GbB7G%2Bx&X-Amz-Signature=a4c80657556c92df1c5b268bb1d893442e50b27accd07cc2d8b59c7856ee848b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664HGCMNN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIHglk5O0ZmRiyuZkZ0Bg1xEa%2FWBVccerHA8r3T%2FDjQfTAiEAxCvE3lZGfESM0nXe5QIlLdFyC0IbN3rmDTHlqYG2z4QqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5wd8ZKKbyYGCg9nSrcA5Go5AxmewqrJCj1UQfZxoSnIxpJr%2Fr8WgZI6p8dLoLVEsmyG1iTSSlvZyzwakj6qaWA2m8NCafoUzWyeeMnmywzwyc04f8YidMv6NyaVh8eOYowRGcUXjJ8Kb8%2Bu1%2B4uGBEfR9MGFqDnJH3%2FPvObQ%2BwLR5bvShGFdajtTBLVI6rR6pYgk%2FDTKTSkf%2BFjdPZ6z6Ilsfua0fpZgxcDGG6eVULtLbm7ZtYY3eNndY42qPqilzUwISSwuVuHjvvwQ3sxlduqWlXkaiV3Revv%2BcGt9h0Uzmmm%2BGChSKO%2BKEZxo2x6VOk84fub7mQd6W7XTaeJtEoTV5WJXZh4m9EhZGe8ZuCxu%2B%2F1uKrbwmyi7eGqVKNqkd3d0KP%2BWoUpKjT5%2FQgHnO%2BCAaWo8Z%2FiFDKPEW6pTDt3oTxHI%2B13HN3FVEnFdWjKMbq6FCpnEIaA%2FbH3hAgK%2F8LJzMjOVHiHNk2KWONKahjXMzQxZCtyZop4fxcZr7LYG0enoVnRPWtu%2F%2BKkui1IDqBldDtS5CLCKgNUvs0CPAJsDUKdy1JhWXJu0JXbjsy8pPdik2dUpBmkxShV4nRvRhzx%2FbIjaGcA2%2B3xAhgZsoyoukLgithEzn4jtQeJYGY3ko4JWbAR4g%2B5rbDMLLu08QGOqUBFLr2XPxY5IpwZ3LP10SEFH6nWGwRw3QROdDCILTmXgL71vOgQEvvbxUDyWRCUAjkqbQ7WTYJyHT2hr%2FUJq7bkonxUxYiD0BExahrPG8cLnS0n6dnFtbyX08N7Pl1%2FzE4WN1lc%2B1Jqk%2BPqcoQJBIn41mz3HuTqi5KYrFJsvY6GR3sWL1HIFxnLYUv1irhfYAJb9FIvhCoVswTQk4aTja32x0lPLyo&X-Amz-Signature=df4b5acb9ac9c0a37da5c5c70c6bd9f0b3991c179f064c7e93918dcee01e8d87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664HGCMNN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIHglk5O0ZmRiyuZkZ0Bg1xEa%2FWBVccerHA8r3T%2FDjQfTAiEAxCvE3lZGfESM0nXe5QIlLdFyC0IbN3rmDTHlqYG2z4QqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5wd8ZKKbyYGCg9nSrcA5Go5AxmewqrJCj1UQfZxoSnIxpJr%2Fr8WgZI6p8dLoLVEsmyG1iTSSlvZyzwakj6qaWA2m8NCafoUzWyeeMnmywzwyc04f8YidMv6NyaVh8eOYowRGcUXjJ8Kb8%2Bu1%2B4uGBEfR9MGFqDnJH3%2FPvObQ%2BwLR5bvShGFdajtTBLVI6rR6pYgk%2FDTKTSkf%2BFjdPZ6z6Ilsfua0fpZgxcDGG6eVULtLbm7ZtYY3eNndY42qPqilzUwISSwuVuHjvvwQ3sxlduqWlXkaiV3Revv%2BcGt9h0Uzmmm%2BGChSKO%2BKEZxo2x6VOk84fub7mQd6W7XTaeJtEoTV5WJXZh4m9EhZGe8ZuCxu%2B%2F1uKrbwmyi7eGqVKNqkd3d0KP%2BWoUpKjT5%2FQgHnO%2BCAaWo8Z%2FiFDKPEW6pTDt3oTxHI%2B13HN3FVEnFdWjKMbq6FCpnEIaA%2FbH3hAgK%2F8LJzMjOVHiHNk2KWONKahjXMzQxZCtyZop4fxcZr7LYG0enoVnRPWtu%2F%2BKkui1IDqBldDtS5CLCKgNUvs0CPAJsDUKdy1JhWXJu0JXbjsy8pPdik2dUpBmkxShV4nRvRhzx%2FbIjaGcA2%2B3xAhgZsoyoukLgithEzn4jtQeJYGY3ko4JWbAR4g%2B5rbDMLLu08QGOqUBFLr2XPxY5IpwZ3LP10SEFH6nWGwRw3QROdDCILTmXgL71vOgQEvvbxUDyWRCUAjkqbQ7WTYJyHT2hr%2FUJq7bkonxUxYiD0BExahrPG8cLnS0n6dnFtbyX08N7Pl1%2FzE4WN1lc%2B1Jqk%2BPqcoQJBIn41mz3HuTqi5KYrFJsvY6GR3sWL1HIFxnLYUv1irhfYAJb9FIvhCoVswTQk4aTja32x0lPLyo&X-Amz-Signature=23aa2597e11bc93bea37fdc28469c80abe03684b48a27b0fa6469cc167ef2e04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664HGCMNN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIHglk5O0ZmRiyuZkZ0Bg1xEa%2FWBVccerHA8r3T%2FDjQfTAiEAxCvE3lZGfESM0nXe5QIlLdFyC0IbN3rmDTHlqYG2z4QqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5wd8ZKKbyYGCg9nSrcA5Go5AxmewqrJCj1UQfZxoSnIxpJr%2Fr8WgZI6p8dLoLVEsmyG1iTSSlvZyzwakj6qaWA2m8NCafoUzWyeeMnmywzwyc04f8YidMv6NyaVh8eOYowRGcUXjJ8Kb8%2Bu1%2B4uGBEfR9MGFqDnJH3%2FPvObQ%2BwLR5bvShGFdajtTBLVI6rR6pYgk%2FDTKTSkf%2BFjdPZ6z6Ilsfua0fpZgxcDGG6eVULtLbm7ZtYY3eNndY42qPqilzUwISSwuVuHjvvwQ3sxlduqWlXkaiV3Revv%2BcGt9h0Uzmmm%2BGChSKO%2BKEZxo2x6VOk84fub7mQd6W7XTaeJtEoTV5WJXZh4m9EhZGe8ZuCxu%2B%2F1uKrbwmyi7eGqVKNqkd3d0KP%2BWoUpKjT5%2FQgHnO%2BCAaWo8Z%2FiFDKPEW6pTDt3oTxHI%2B13HN3FVEnFdWjKMbq6FCpnEIaA%2FbH3hAgK%2F8LJzMjOVHiHNk2KWONKahjXMzQxZCtyZop4fxcZr7LYG0enoVnRPWtu%2F%2BKkui1IDqBldDtS5CLCKgNUvs0CPAJsDUKdy1JhWXJu0JXbjsy8pPdik2dUpBmkxShV4nRvRhzx%2FbIjaGcA2%2B3xAhgZsoyoukLgithEzn4jtQeJYGY3ko4JWbAR4g%2B5rbDMLLu08QGOqUBFLr2XPxY5IpwZ3LP10SEFH6nWGwRw3QROdDCILTmXgL71vOgQEvvbxUDyWRCUAjkqbQ7WTYJyHT2hr%2FUJq7bkonxUxYiD0BExahrPG8cLnS0n6dnFtbyX08N7Pl1%2FzE4WN1lc%2B1Jqk%2BPqcoQJBIn41mz3HuTqi5KYrFJsvY6GR3sWL1HIFxnLYUv1irhfYAJb9FIvhCoVswTQk4aTja32x0lPLyo&X-Amz-Signature=c31b1f59b43dd35c7c3b5a6ac339b7d99c516f357faa946ee6ab3368c11d17da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664HGCMNN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIHglk5O0ZmRiyuZkZ0Bg1xEa%2FWBVccerHA8r3T%2FDjQfTAiEAxCvE3lZGfESM0nXe5QIlLdFyC0IbN3rmDTHlqYG2z4QqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5wd8ZKKbyYGCg9nSrcA5Go5AxmewqrJCj1UQfZxoSnIxpJr%2Fr8WgZI6p8dLoLVEsmyG1iTSSlvZyzwakj6qaWA2m8NCafoUzWyeeMnmywzwyc04f8YidMv6NyaVh8eOYowRGcUXjJ8Kb8%2Bu1%2B4uGBEfR9MGFqDnJH3%2FPvObQ%2BwLR5bvShGFdajtTBLVI6rR6pYgk%2FDTKTSkf%2BFjdPZ6z6Ilsfua0fpZgxcDGG6eVULtLbm7ZtYY3eNndY42qPqilzUwISSwuVuHjvvwQ3sxlduqWlXkaiV3Revv%2BcGt9h0Uzmmm%2BGChSKO%2BKEZxo2x6VOk84fub7mQd6W7XTaeJtEoTV5WJXZh4m9EhZGe8ZuCxu%2B%2F1uKrbwmyi7eGqVKNqkd3d0KP%2BWoUpKjT5%2FQgHnO%2BCAaWo8Z%2FiFDKPEW6pTDt3oTxHI%2B13HN3FVEnFdWjKMbq6FCpnEIaA%2FbH3hAgK%2F8LJzMjOVHiHNk2KWONKahjXMzQxZCtyZop4fxcZr7LYG0enoVnRPWtu%2F%2BKkui1IDqBldDtS5CLCKgNUvs0CPAJsDUKdy1JhWXJu0JXbjsy8pPdik2dUpBmkxShV4nRvRhzx%2FbIjaGcA2%2B3xAhgZsoyoukLgithEzn4jtQeJYGY3ko4JWbAR4g%2B5rbDMLLu08QGOqUBFLr2XPxY5IpwZ3LP10SEFH6nWGwRw3QROdDCILTmXgL71vOgQEvvbxUDyWRCUAjkqbQ7WTYJyHT2hr%2FUJq7bkonxUxYiD0BExahrPG8cLnS0n6dnFtbyX08N7Pl1%2FzE4WN1lc%2B1Jqk%2BPqcoQJBIn41mz3HuTqi5KYrFJsvY6GR3sWL1HIFxnLYUv1irhfYAJb9FIvhCoVswTQk4aTja32x0lPLyo&X-Amz-Signature=334a6ec29d3629d59f51fd8603cb01d9013b3abbc3b041650f1ffdc6445ae740&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664HGCMNN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIHglk5O0ZmRiyuZkZ0Bg1xEa%2FWBVccerHA8r3T%2FDjQfTAiEAxCvE3lZGfESM0nXe5QIlLdFyC0IbN3rmDTHlqYG2z4QqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5wd8ZKKbyYGCg9nSrcA5Go5AxmewqrJCj1UQfZxoSnIxpJr%2Fr8WgZI6p8dLoLVEsmyG1iTSSlvZyzwakj6qaWA2m8NCafoUzWyeeMnmywzwyc04f8YidMv6NyaVh8eOYowRGcUXjJ8Kb8%2Bu1%2B4uGBEfR9MGFqDnJH3%2FPvObQ%2BwLR5bvShGFdajtTBLVI6rR6pYgk%2FDTKTSkf%2BFjdPZ6z6Ilsfua0fpZgxcDGG6eVULtLbm7ZtYY3eNndY42qPqilzUwISSwuVuHjvvwQ3sxlduqWlXkaiV3Revv%2BcGt9h0Uzmmm%2BGChSKO%2BKEZxo2x6VOk84fub7mQd6W7XTaeJtEoTV5WJXZh4m9EhZGe8ZuCxu%2B%2F1uKrbwmyi7eGqVKNqkd3d0KP%2BWoUpKjT5%2FQgHnO%2BCAaWo8Z%2FiFDKPEW6pTDt3oTxHI%2B13HN3FVEnFdWjKMbq6FCpnEIaA%2FbH3hAgK%2F8LJzMjOVHiHNk2KWONKahjXMzQxZCtyZop4fxcZr7LYG0enoVnRPWtu%2F%2BKkui1IDqBldDtS5CLCKgNUvs0CPAJsDUKdy1JhWXJu0JXbjsy8pPdik2dUpBmkxShV4nRvRhzx%2FbIjaGcA2%2B3xAhgZsoyoukLgithEzn4jtQeJYGY3ko4JWbAR4g%2B5rbDMLLu08QGOqUBFLr2XPxY5IpwZ3LP10SEFH6nWGwRw3QROdDCILTmXgL71vOgQEvvbxUDyWRCUAjkqbQ7WTYJyHT2hr%2FUJq7bkonxUxYiD0BExahrPG8cLnS0n6dnFtbyX08N7Pl1%2FzE4WN1lc%2B1Jqk%2BPqcoQJBIn41mz3HuTqi5KYrFJsvY6GR3sWL1HIFxnLYUv1irhfYAJb9FIvhCoVswTQk4aTja32x0lPLyo&X-Amz-Signature=cfa41b90f116b0a809f27691a74c9fb40da1219067bc57f5591c9cdb86dc16f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664HGCMNN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIHglk5O0ZmRiyuZkZ0Bg1xEa%2FWBVccerHA8r3T%2FDjQfTAiEAxCvE3lZGfESM0nXe5QIlLdFyC0IbN3rmDTHlqYG2z4QqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5wd8ZKKbyYGCg9nSrcA5Go5AxmewqrJCj1UQfZxoSnIxpJr%2Fr8WgZI6p8dLoLVEsmyG1iTSSlvZyzwakj6qaWA2m8NCafoUzWyeeMnmywzwyc04f8YidMv6NyaVh8eOYowRGcUXjJ8Kb8%2Bu1%2B4uGBEfR9MGFqDnJH3%2FPvObQ%2BwLR5bvShGFdajtTBLVI6rR6pYgk%2FDTKTSkf%2BFjdPZ6z6Ilsfua0fpZgxcDGG6eVULtLbm7ZtYY3eNndY42qPqilzUwISSwuVuHjvvwQ3sxlduqWlXkaiV3Revv%2BcGt9h0Uzmmm%2BGChSKO%2BKEZxo2x6VOk84fub7mQd6W7XTaeJtEoTV5WJXZh4m9EhZGe8ZuCxu%2B%2F1uKrbwmyi7eGqVKNqkd3d0KP%2BWoUpKjT5%2FQgHnO%2BCAaWo8Z%2FiFDKPEW6pTDt3oTxHI%2B13HN3FVEnFdWjKMbq6FCpnEIaA%2FbH3hAgK%2F8LJzMjOVHiHNk2KWONKahjXMzQxZCtyZop4fxcZr7LYG0enoVnRPWtu%2F%2BKkui1IDqBldDtS5CLCKgNUvs0CPAJsDUKdy1JhWXJu0JXbjsy8pPdik2dUpBmkxShV4nRvRhzx%2FbIjaGcA2%2B3xAhgZsoyoukLgithEzn4jtQeJYGY3ko4JWbAR4g%2B5rbDMLLu08QGOqUBFLr2XPxY5IpwZ3LP10SEFH6nWGwRw3QROdDCILTmXgL71vOgQEvvbxUDyWRCUAjkqbQ7WTYJyHT2hr%2FUJq7bkonxUxYiD0BExahrPG8cLnS0n6dnFtbyX08N7Pl1%2FzE4WN1lc%2B1Jqk%2BPqcoQJBIn41mz3HuTqi5KYrFJsvY6GR3sWL1HIFxnLYUv1irhfYAJb9FIvhCoVswTQk4aTja32x0lPLyo&X-Amz-Signature=7b4fcec7408ff1642d8319fec00d3cdf294e5b06553ce48732be4884d4f9afe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664HGCMNN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIHglk5O0ZmRiyuZkZ0Bg1xEa%2FWBVccerHA8r3T%2FDjQfTAiEAxCvE3lZGfESM0nXe5QIlLdFyC0IbN3rmDTHlqYG2z4QqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5wd8ZKKbyYGCg9nSrcA5Go5AxmewqrJCj1UQfZxoSnIxpJr%2Fr8WgZI6p8dLoLVEsmyG1iTSSlvZyzwakj6qaWA2m8NCafoUzWyeeMnmywzwyc04f8YidMv6NyaVh8eOYowRGcUXjJ8Kb8%2Bu1%2B4uGBEfR9MGFqDnJH3%2FPvObQ%2BwLR5bvShGFdajtTBLVI6rR6pYgk%2FDTKTSkf%2BFjdPZ6z6Ilsfua0fpZgxcDGG6eVULtLbm7ZtYY3eNndY42qPqilzUwISSwuVuHjvvwQ3sxlduqWlXkaiV3Revv%2BcGt9h0Uzmmm%2BGChSKO%2BKEZxo2x6VOk84fub7mQd6W7XTaeJtEoTV5WJXZh4m9EhZGe8ZuCxu%2B%2F1uKrbwmyi7eGqVKNqkd3d0KP%2BWoUpKjT5%2FQgHnO%2BCAaWo8Z%2FiFDKPEW6pTDt3oTxHI%2B13HN3FVEnFdWjKMbq6FCpnEIaA%2FbH3hAgK%2F8LJzMjOVHiHNk2KWONKahjXMzQxZCtyZop4fxcZr7LYG0enoVnRPWtu%2F%2BKkui1IDqBldDtS5CLCKgNUvs0CPAJsDUKdy1JhWXJu0JXbjsy8pPdik2dUpBmkxShV4nRvRhzx%2FbIjaGcA2%2B3xAhgZsoyoukLgithEzn4jtQeJYGY3ko4JWbAR4g%2B5rbDMLLu08QGOqUBFLr2XPxY5IpwZ3LP10SEFH6nWGwRw3QROdDCILTmXgL71vOgQEvvbxUDyWRCUAjkqbQ7WTYJyHT2hr%2FUJq7bkonxUxYiD0BExahrPG8cLnS0n6dnFtbyX08N7Pl1%2FzE4WN1lc%2B1Jqk%2BPqcoQJBIn41mz3HuTqi5KYrFJsvY6GR3sWL1HIFxnLYUv1irhfYAJb9FIvhCoVswTQk4aTja32x0lPLyo&X-Amz-Signature=5df0af665d7a487fca3011d22af7ab025eb27e989ec31ddaa0a1171e579bd3eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664HGCMNN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIHglk5O0ZmRiyuZkZ0Bg1xEa%2FWBVccerHA8r3T%2FDjQfTAiEAxCvE3lZGfESM0nXe5QIlLdFyC0IbN3rmDTHlqYG2z4QqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5wd8ZKKbyYGCg9nSrcA5Go5AxmewqrJCj1UQfZxoSnIxpJr%2Fr8WgZI6p8dLoLVEsmyG1iTSSlvZyzwakj6qaWA2m8NCafoUzWyeeMnmywzwyc04f8YidMv6NyaVh8eOYowRGcUXjJ8Kb8%2Bu1%2B4uGBEfR9MGFqDnJH3%2FPvObQ%2BwLR5bvShGFdajtTBLVI6rR6pYgk%2FDTKTSkf%2BFjdPZ6z6Ilsfua0fpZgxcDGG6eVULtLbm7ZtYY3eNndY42qPqilzUwISSwuVuHjvvwQ3sxlduqWlXkaiV3Revv%2BcGt9h0Uzmmm%2BGChSKO%2BKEZxo2x6VOk84fub7mQd6W7XTaeJtEoTV5WJXZh4m9EhZGe8ZuCxu%2B%2F1uKrbwmyi7eGqVKNqkd3d0KP%2BWoUpKjT5%2FQgHnO%2BCAaWo8Z%2FiFDKPEW6pTDt3oTxHI%2B13HN3FVEnFdWjKMbq6FCpnEIaA%2FbH3hAgK%2F8LJzMjOVHiHNk2KWONKahjXMzQxZCtyZop4fxcZr7LYG0enoVnRPWtu%2F%2BKkui1IDqBldDtS5CLCKgNUvs0CPAJsDUKdy1JhWXJu0JXbjsy8pPdik2dUpBmkxShV4nRvRhzx%2FbIjaGcA2%2B3xAhgZsoyoukLgithEzn4jtQeJYGY3ko4JWbAR4g%2B5rbDMLLu08QGOqUBFLr2XPxY5IpwZ3LP10SEFH6nWGwRw3QROdDCILTmXgL71vOgQEvvbxUDyWRCUAjkqbQ7WTYJyHT2hr%2FUJq7bkonxUxYiD0BExahrPG8cLnS0n6dnFtbyX08N7Pl1%2FzE4WN1lc%2B1Jqk%2BPqcoQJBIn41mz3HuTqi5KYrFJsvY6GR3sWL1HIFxnLYUv1irhfYAJb9FIvhCoVswTQk4aTja32x0lPLyo&X-Amz-Signature=4197b7ea35d10a9d375a55129ac294507a37eb371beadc138fc5cfde01c56c44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664HGCMNN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIHglk5O0ZmRiyuZkZ0Bg1xEa%2FWBVccerHA8r3T%2FDjQfTAiEAxCvE3lZGfESM0nXe5QIlLdFyC0IbN3rmDTHlqYG2z4QqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5wd8ZKKbyYGCg9nSrcA5Go5AxmewqrJCj1UQfZxoSnIxpJr%2Fr8WgZI6p8dLoLVEsmyG1iTSSlvZyzwakj6qaWA2m8NCafoUzWyeeMnmywzwyc04f8YidMv6NyaVh8eOYowRGcUXjJ8Kb8%2Bu1%2B4uGBEfR9MGFqDnJH3%2FPvObQ%2BwLR5bvShGFdajtTBLVI6rR6pYgk%2FDTKTSkf%2BFjdPZ6z6Ilsfua0fpZgxcDGG6eVULtLbm7ZtYY3eNndY42qPqilzUwISSwuVuHjvvwQ3sxlduqWlXkaiV3Revv%2BcGt9h0Uzmmm%2BGChSKO%2BKEZxo2x6VOk84fub7mQd6W7XTaeJtEoTV5WJXZh4m9EhZGe8ZuCxu%2B%2F1uKrbwmyi7eGqVKNqkd3d0KP%2BWoUpKjT5%2FQgHnO%2BCAaWo8Z%2FiFDKPEW6pTDt3oTxHI%2B13HN3FVEnFdWjKMbq6FCpnEIaA%2FbH3hAgK%2F8LJzMjOVHiHNk2KWONKahjXMzQxZCtyZop4fxcZr7LYG0enoVnRPWtu%2F%2BKkui1IDqBldDtS5CLCKgNUvs0CPAJsDUKdy1JhWXJu0JXbjsy8pPdik2dUpBmkxShV4nRvRhzx%2FbIjaGcA2%2B3xAhgZsoyoukLgithEzn4jtQeJYGY3ko4JWbAR4g%2B5rbDMLLu08QGOqUBFLr2XPxY5IpwZ3LP10SEFH6nWGwRw3QROdDCILTmXgL71vOgQEvvbxUDyWRCUAjkqbQ7WTYJyHT2hr%2FUJq7bkonxUxYiD0BExahrPG8cLnS0n6dnFtbyX08N7Pl1%2FzE4WN1lc%2B1Jqk%2BPqcoQJBIn41mz3HuTqi5KYrFJsvY6GR3sWL1HIFxnLYUv1irhfYAJb9FIvhCoVswTQk4aTja32x0lPLyo&X-Amz-Signature=e1fd5cd947263a722cd6f4f5d96314d00cf67f1d9c7f3639ea0ab6e044576b70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664HGCMNN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIHglk5O0ZmRiyuZkZ0Bg1xEa%2FWBVccerHA8r3T%2FDjQfTAiEAxCvE3lZGfESM0nXe5QIlLdFyC0IbN3rmDTHlqYG2z4QqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5wd8ZKKbyYGCg9nSrcA5Go5AxmewqrJCj1UQfZxoSnIxpJr%2Fr8WgZI6p8dLoLVEsmyG1iTSSlvZyzwakj6qaWA2m8NCafoUzWyeeMnmywzwyc04f8YidMv6NyaVh8eOYowRGcUXjJ8Kb8%2Bu1%2B4uGBEfR9MGFqDnJH3%2FPvObQ%2BwLR5bvShGFdajtTBLVI6rR6pYgk%2FDTKTSkf%2BFjdPZ6z6Ilsfua0fpZgxcDGG6eVULtLbm7ZtYY3eNndY42qPqilzUwISSwuVuHjvvwQ3sxlduqWlXkaiV3Revv%2BcGt9h0Uzmmm%2BGChSKO%2BKEZxo2x6VOk84fub7mQd6W7XTaeJtEoTV5WJXZh4m9EhZGe8ZuCxu%2B%2F1uKrbwmyi7eGqVKNqkd3d0KP%2BWoUpKjT5%2FQgHnO%2BCAaWo8Z%2FiFDKPEW6pTDt3oTxHI%2B13HN3FVEnFdWjKMbq6FCpnEIaA%2FbH3hAgK%2F8LJzMjOVHiHNk2KWONKahjXMzQxZCtyZop4fxcZr7LYG0enoVnRPWtu%2F%2BKkui1IDqBldDtS5CLCKgNUvs0CPAJsDUKdy1JhWXJu0JXbjsy8pPdik2dUpBmkxShV4nRvRhzx%2FbIjaGcA2%2B3xAhgZsoyoukLgithEzn4jtQeJYGY3ko4JWbAR4g%2B5rbDMLLu08QGOqUBFLr2XPxY5IpwZ3LP10SEFH6nWGwRw3QROdDCILTmXgL71vOgQEvvbxUDyWRCUAjkqbQ7WTYJyHT2hr%2FUJq7bkonxUxYiD0BExahrPG8cLnS0n6dnFtbyX08N7Pl1%2FzE4WN1lc%2B1Jqk%2BPqcoQJBIn41mz3HuTqi5KYrFJsvY6GR3sWL1HIFxnLYUv1irhfYAJb9FIvhCoVswTQk4aTja32x0lPLyo&X-Amz-Signature=334a6ec29d3629d59f51fd8603cb01d9013b3abbc3b041650f1ffdc6445ae740&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
