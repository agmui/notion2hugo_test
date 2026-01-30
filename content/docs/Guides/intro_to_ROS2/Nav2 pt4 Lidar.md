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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPUEUP35%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOV8oUAqFeP3FCODb%2BhW86opst6LrZxAIgbTKyQtYTowIgYCXrdeeXs6e6Met527SVwnZrZgBXpiAHAIxi%2F63m%2BEgqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFYE%2FrdhRMxRZ6znyrcA5FunmrRanS5UT3yA7Hqdhi%2B12XTLKLy5UhziQ9Wgzv%2FK8RmJDQQlvssijIoeAYfMxsF9HUgdbz2BmL6iO4gq3CB7mEu%2FwuTgBjVFcdR1gS4RX1AZD1H0AYQyzPFg7G7w8idyXWhmJ%2FN70oxrSUtlzbwEJ3EiStg0jbsx0xTCudRVEaOBTnTPKMg%2FCsw2YIhykogtqQuXXhm47pXLT%2BXMxnVrB055z%2B6TkhgGT4dUg7vWbtfkLNhHXYitf0njo8yEojPJtEq%2Fv1rwv7C7Pqxu98X1vgWkIh92f0IVl0SX4y7W%2BFD3H1P%2FsboMkL86RtcBYv7UdA43WSb%2B4BVMci9JqIGEXA%2FlP6WkQUZ4gBtd7tUw0GIZ8SdaqzXrTPWEfgF2TUifTpzD4GySTow5Ypcm6kan0rfAtROAL9yLJe0CfC%2FoWGgXCNp1fQulLFFo%2B8edk8V1BUL6VUTTZvsT0rgDZ3BdWemL9pz%2F%2BoyHxBRnEH%2BIgeb692ELAxQIGZnGlkJq1xqwaIZsscM3ZLwwkOjoi0AUO7squlRIhKnYoqvpIEDyb%2FMRe5E0%2Fm5ryZmKqg9iAt6eEvAmF%2FPtBhv4K6ay7thHOZO%2FAkLzGlR81pbypkJRjiMuETk0fMFkrkHMLCC8MsGOqUBq9OgHh8T7oO9uKlPI0MAwo%2FDAUHjwrORoclpEkU93wqznt0Hu5WOfCoaB0FMctCaHiEyHNC%2FxjKTy00p%2Fb7hxIo4a%2Br59YZN%2Bj2QXpgklHIywTKAgTL0obkKku8wLQWw4UwBQG1Mdw%2BJAUTJQv719h1JOwHEthuaQp1nblZ0Gpcr7jeaNL4j7ltS%2BlQe%2BpMYMUMm8ZonbzGi7q1J2Cp1ypVY9NgO&X-Amz-Signature=e422e9253c59e5a4ea43013b0079f8d82031aa9ea2aeb3480ce4e95a5d14ac0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G2BRTFR%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNgZ7p%2BMfvYRAwu8rnORznYnsO3VTTslcBkQmXfXKMIAIhAPg3x3dkAfMdpccHvaZB4XVfMXdG9rzcj6JvKyvhMIbaKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlvksQuCAFazqt%2BsMq3AMvh6OEh%2FsjguP35OcfVICUDg6d7ZzSx9WcLXK088vsHTC4DIxIN2UsKbqx%2B4bAZNlRF3OCtSoVnnr%2F%2F2a96EQ1czinCMEgvo1a4zYkYYliXsNIUAsm%2FUpTr7WCi5KLcMZbHeKrqOlnO5tq%2F68jvfwKAWppIPCWRmG%2ByjHENkOjzlKetYUwjv9LzKxMKJgKU6WA25Ej%2Favqod%2FJ4h1TqZVxbVkne995ZmM4hhoED3vb%2BcqfNtM0u44LFREth3zUZB4xAUX%2B7t6OIwZxs3R%2Bv7pJCxiOVIKS9dN65WE0dcZHbLbcwRKYxNahsbwImBbG5JPkp9oEhGmgobqWqhX%2BhMPtgVRBaMUGM6Ck1ha4a%2FV5uv8j1Q%2FRIW0byEy6P42xNWI8060L7M%2BdoiR77ElDimbrvnC43vtR6jGGUw%2BWHjw7thzFlAbYZ1K1cxcIT6WBE4U5yQlZShSgQqgoy%2B9PWnw2sNiLvBChflUuvKWFrY8geiOUnzu8SqUXkOTB6aKa94O3DLNhyxRjwOnusf8xgch04ZqanEfw4JUXI6gWE854aPmG7qLUDw0vHvjezAz4Ko%2BQF2a%2F4zxbsfBjD%2FihEbKDhHS2Ebb4M4fUgOIPHsUxW6GhlBQQeqM6S4%2BrVDD2gvDLBjqkAWEAoigYzOmV1H1kuYtNsfbmEM9scg5pKLv5qK3oZqN7LHb7lQrdMOZWA%2Bp7KPOjhRHzrpkNxbhzLSNy7TkJmyBGB2B7AICyBiwyzyJejnnz5aimgAbIdJ7gFz5LUjGSZgFmoreQWqRxGiJ5j6GHe%2BaWD3PVSQe9Bt9sHI1TDQVQnhyuLt7LnxadAMxi6qbxO%2BCMwwX%2F6NM6YpEn9w9lXr1WP4cF&X-Amz-Signature=e28d4e6fbf6e0e5a9223a6791975c7f3cb4ea3144213a0389e2baabb1ddb6cf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G2BRTFR%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNgZ7p%2BMfvYRAwu8rnORznYnsO3VTTslcBkQmXfXKMIAIhAPg3x3dkAfMdpccHvaZB4XVfMXdG9rzcj6JvKyvhMIbaKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlvksQuCAFazqt%2BsMq3AMvh6OEh%2FsjguP35OcfVICUDg6d7ZzSx9WcLXK088vsHTC4DIxIN2UsKbqx%2B4bAZNlRF3OCtSoVnnr%2F%2F2a96EQ1czinCMEgvo1a4zYkYYliXsNIUAsm%2FUpTr7WCi5KLcMZbHeKrqOlnO5tq%2F68jvfwKAWppIPCWRmG%2ByjHENkOjzlKetYUwjv9LzKxMKJgKU6WA25Ej%2Favqod%2FJ4h1TqZVxbVkne995ZmM4hhoED3vb%2BcqfNtM0u44LFREth3zUZB4xAUX%2B7t6OIwZxs3R%2Bv7pJCxiOVIKS9dN65WE0dcZHbLbcwRKYxNahsbwImBbG5JPkp9oEhGmgobqWqhX%2BhMPtgVRBaMUGM6Ck1ha4a%2FV5uv8j1Q%2FRIW0byEy6P42xNWI8060L7M%2BdoiR77ElDimbrvnC43vtR6jGGUw%2BWHjw7thzFlAbYZ1K1cxcIT6WBE4U5yQlZShSgQqgoy%2B9PWnw2sNiLvBChflUuvKWFrY8geiOUnzu8SqUXkOTB6aKa94O3DLNhyxRjwOnusf8xgch04ZqanEfw4JUXI6gWE854aPmG7qLUDw0vHvjezAz4Ko%2BQF2a%2F4zxbsfBjD%2FihEbKDhHS2Ebb4M4fUgOIPHsUxW6GhlBQQeqM6S4%2BrVDD2gvDLBjqkAWEAoigYzOmV1H1kuYtNsfbmEM9scg5pKLv5qK3oZqN7LHb7lQrdMOZWA%2Bp7KPOjhRHzrpkNxbhzLSNy7TkJmyBGB2B7AICyBiwyzyJejnnz5aimgAbIdJ7gFz5LUjGSZgFmoreQWqRxGiJ5j6GHe%2BaWD3PVSQe9Bt9sHI1TDQVQnhyuLt7LnxadAMxi6qbxO%2BCMwwX%2F6NM6YpEn9w9lXr1WP4cF&X-Amz-Signature=9f893c36b880012dc598425c8037d190790cd2af251dc5799c2af60daa3eac9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G2BRTFR%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNgZ7p%2BMfvYRAwu8rnORznYnsO3VTTslcBkQmXfXKMIAIhAPg3x3dkAfMdpccHvaZB4XVfMXdG9rzcj6JvKyvhMIbaKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlvksQuCAFazqt%2BsMq3AMvh6OEh%2FsjguP35OcfVICUDg6d7ZzSx9WcLXK088vsHTC4DIxIN2UsKbqx%2B4bAZNlRF3OCtSoVnnr%2F%2F2a96EQ1czinCMEgvo1a4zYkYYliXsNIUAsm%2FUpTr7WCi5KLcMZbHeKrqOlnO5tq%2F68jvfwKAWppIPCWRmG%2ByjHENkOjzlKetYUwjv9LzKxMKJgKU6WA25Ej%2Favqod%2FJ4h1TqZVxbVkne995ZmM4hhoED3vb%2BcqfNtM0u44LFREth3zUZB4xAUX%2B7t6OIwZxs3R%2Bv7pJCxiOVIKS9dN65WE0dcZHbLbcwRKYxNahsbwImBbG5JPkp9oEhGmgobqWqhX%2BhMPtgVRBaMUGM6Ck1ha4a%2FV5uv8j1Q%2FRIW0byEy6P42xNWI8060L7M%2BdoiR77ElDimbrvnC43vtR6jGGUw%2BWHjw7thzFlAbYZ1K1cxcIT6WBE4U5yQlZShSgQqgoy%2B9PWnw2sNiLvBChflUuvKWFrY8geiOUnzu8SqUXkOTB6aKa94O3DLNhyxRjwOnusf8xgch04ZqanEfw4JUXI6gWE854aPmG7qLUDw0vHvjezAz4Ko%2BQF2a%2F4zxbsfBjD%2FihEbKDhHS2Ebb4M4fUgOIPHsUxW6GhlBQQeqM6S4%2BrVDD2gvDLBjqkAWEAoigYzOmV1H1kuYtNsfbmEM9scg5pKLv5qK3oZqN7LHb7lQrdMOZWA%2Bp7KPOjhRHzrpkNxbhzLSNy7TkJmyBGB2B7AICyBiwyzyJejnnz5aimgAbIdJ7gFz5LUjGSZgFmoreQWqRxGiJ5j6GHe%2BaWD3PVSQe9Bt9sHI1TDQVQnhyuLt7LnxadAMxi6qbxO%2BCMwwX%2F6NM6YpEn9w9lXr1WP4cF&X-Amz-Signature=63b6a264cf6ce154dcf53b20d509708a3aafb0a8990fe4dcbb461e93fe6b917c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G2BRTFR%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNgZ7p%2BMfvYRAwu8rnORznYnsO3VTTslcBkQmXfXKMIAIhAPg3x3dkAfMdpccHvaZB4XVfMXdG9rzcj6JvKyvhMIbaKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlvksQuCAFazqt%2BsMq3AMvh6OEh%2FsjguP35OcfVICUDg6d7ZzSx9WcLXK088vsHTC4DIxIN2UsKbqx%2B4bAZNlRF3OCtSoVnnr%2F%2F2a96EQ1czinCMEgvo1a4zYkYYliXsNIUAsm%2FUpTr7WCi5KLcMZbHeKrqOlnO5tq%2F68jvfwKAWppIPCWRmG%2ByjHENkOjzlKetYUwjv9LzKxMKJgKU6WA25Ej%2Favqod%2FJ4h1TqZVxbVkne995ZmM4hhoED3vb%2BcqfNtM0u44LFREth3zUZB4xAUX%2B7t6OIwZxs3R%2Bv7pJCxiOVIKS9dN65WE0dcZHbLbcwRKYxNahsbwImBbG5JPkp9oEhGmgobqWqhX%2BhMPtgVRBaMUGM6Ck1ha4a%2FV5uv8j1Q%2FRIW0byEy6P42xNWI8060L7M%2BdoiR77ElDimbrvnC43vtR6jGGUw%2BWHjw7thzFlAbYZ1K1cxcIT6WBE4U5yQlZShSgQqgoy%2B9PWnw2sNiLvBChflUuvKWFrY8geiOUnzu8SqUXkOTB6aKa94O3DLNhyxRjwOnusf8xgch04ZqanEfw4JUXI6gWE854aPmG7qLUDw0vHvjezAz4Ko%2BQF2a%2F4zxbsfBjD%2FihEbKDhHS2Ebb4M4fUgOIPHsUxW6GhlBQQeqM6S4%2BrVDD2gvDLBjqkAWEAoigYzOmV1H1kuYtNsfbmEM9scg5pKLv5qK3oZqN7LHb7lQrdMOZWA%2Bp7KPOjhRHzrpkNxbhzLSNy7TkJmyBGB2B7AICyBiwyzyJejnnz5aimgAbIdJ7gFz5LUjGSZgFmoreQWqRxGiJ5j6GHe%2BaWD3PVSQe9Bt9sHI1TDQVQnhyuLt7LnxadAMxi6qbxO%2BCMwwX%2F6NM6YpEn9w9lXr1WP4cF&X-Amz-Signature=adbe2591e20343cb104943591f7c406a10f8e9e5bf674296eed263706c8a7721&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G2BRTFR%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNgZ7p%2BMfvYRAwu8rnORznYnsO3VTTslcBkQmXfXKMIAIhAPg3x3dkAfMdpccHvaZB4XVfMXdG9rzcj6JvKyvhMIbaKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlvksQuCAFazqt%2BsMq3AMvh6OEh%2FsjguP35OcfVICUDg6d7ZzSx9WcLXK088vsHTC4DIxIN2UsKbqx%2B4bAZNlRF3OCtSoVnnr%2F%2F2a96EQ1czinCMEgvo1a4zYkYYliXsNIUAsm%2FUpTr7WCi5KLcMZbHeKrqOlnO5tq%2F68jvfwKAWppIPCWRmG%2ByjHENkOjzlKetYUwjv9LzKxMKJgKU6WA25Ej%2Favqod%2FJ4h1TqZVxbVkne995ZmM4hhoED3vb%2BcqfNtM0u44LFREth3zUZB4xAUX%2B7t6OIwZxs3R%2Bv7pJCxiOVIKS9dN65WE0dcZHbLbcwRKYxNahsbwImBbG5JPkp9oEhGmgobqWqhX%2BhMPtgVRBaMUGM6Ck1ha4a%2FV5uv8j1Q%2FRIW0byEy6P42xNWI8060L7M%2BdoiR77ElDimbrvnC43vtR6jGGUw%2BWHjw7thzFlAbYZ1K1cxcIT6WBE4U5yQlZShSgQqgoy%2B9PWnw2sNiLvBChflUuvKWFrY8geiOUnzu8SqUXkOTB6aKa94O3DLNhyxRjwOnusf8xgch04ZqanEfw4JUXI6gWE854aPmG7qLUDw0vHvjezAz4Ko%2BQF2a%2F4zxbsfBjD%2FihEbKDhHS2Ebb4M4fUgOIPHsUxW6GhlBQQeqM6S4%2BrVDD2gvDLBjqkAWEAoigYzOmV1H1kuYtNsfbmEM9scg5pKLv5qK3oZqN7LHb7lQrdMOZWA%2Bp7KPOjhRHzrpkNxbhzLSNy7TkJmyBGB2B7AICyBiwyzyJejnnz5aimgAbIdJ7gFz5LUjGSZgFmoreQWqRxGiJ5j6GHe%2BaWD3PVSQe9Bt9sHI1TDQVQnhyuLt7LnxadAMxi6qbxO%2BCMwwX%2F6NM6YpEn9w9lXr1WP4cF&X-Amz-Signature=e3aee668a9a2e2dd82e6dfb86877f87444f36efb58fdcc0e380461fff9bb19e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G2BRTFR%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNgZ7p%2BMfvYRAwu8rnORznYnsO3VTTslcBkQmXfXKMIAIhAPg3x3dkAfMdpccHvaZB4XVfMXdG9rzcj6JvKyvhMIbaKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlvksQuCAFazqt%2BsMq3AMvh6OEh%2FsjguP35OcfVICUDg6d7ZzSx9WcLXK088vsHTC4DIxIN2UsKbqx%2B4bAZNlRF3OCtSoVnnr%2F%2F2a96EQ1czinCMEgvo1a4zYkYYliXsNIUAsm%2FUpTr7WCi5KLcMZbHeKrqOlnO5tq%2F68jvfwKAWppIPCWRmG%2ByjHENkOjzlKetYUwjv9LzKxMKJgKU6WA25Ej%2Favqod%2FJ4h1TqZVxbVkne995ZmM4hhoED3vb%2BcqfNtM0u44LFREth3zUZB4xAUX%2B7t6OIwZxs3R%2Bv7pJCxiOVIKS9dN65WE0dcZHbLbcwRKYxNahsbwImBbG5JPkp9oEhGmgobqWqhX%2BhMPtgVRBaMUGM6Ck1ha4a%2FV5uv8j1Q%2FRIW0byEy6P42xNWI8060L7M%2BdoiR77ElDimbrvnC43vtR6jGGUw%2BWHjw7thzFlAbYZ1K1cxcIT6WBE4U5yQlZShSgQqgoy%2B9PWnw2sNiLvBChflUuvKWFrY8geiOUnzu8SqUXkOTB6aKa94O3DLNhyxRjwOnusf8xgch04ZqanEfw4JUXI6gWE854aPmG7qLUDw0vHvjezAz4Ko%2BQF2a%2F4zxbsfBjD%2FihEbKDhHS2Ebb4M4fUgOIPHsUxW6GhlBQQeqM6S4%2BrVDD2gvDLBjqkAWEAoigYzOmV1H1kuYtNsfbmEM9scg5pKLv5qK3oZqN7LHb7lQrdMOZWA%2Bp7KPOjhRHzrpkNxbhzLSNy7TkJmyBGB2B7AICyBiwyzyJejnnz5aimgAbIdJ7gFz5LUjGSZgFmoreQWqRxGiJ5j6GHe%2BaWD3PVSQe9Bt9sHI1TDQVQnhyuLt7LnxadAMxi6qbxO%2BCMwwX%2F6NM6YpEn9w9lXr1WP4cF&X-Amz-Signature=133106d19ccf5aa137894c49f75b5fcf2496f9074b9aff24a6e6493a5b3db8d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G2BRTFR%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNgZ7p%2BMfvYRAwu8rnORznYnsO3VTTslcBkQmXfXKMIAIhAPg3x3dkAfMdpccHvaZB4XVfMXdG9rzcj6JvKyvhMIbaKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlvksQuCAFazqt%2BsMq3AMvh6OEh%2FsjguP35OcfVICUDg6d7ZzSx9WcLXK088vsHTC4DIxIN2UsKbqx%2B4bAZNlRF3OCtSoVnnr%2F%2F2a96EQ1czinCMEgvo1a4zYkYYliXsNIUAsm%2FUpTr7WCi5KLcMZbHeKrqOlnO5tq%2F68jvfwKAWppIPCWRmG%2ByjHENkOjzlKetYUwjv9LzKxMKJgKU6WA25Ej%2Favqod%2FJ4h1TqZVxbVkne995ZmM4hhoED3vb%2BcqfNtM0u44LFREth3zUZB4xAUX%2B7t6OIwZxs3R%2Bv7pJCxiOVIKS9dN65WE0dcZHbLbcwRKYxNahsbwImBbG5JPkp9oEhGmgobqWqhX%2BhMPtgVRBaMUGM6Ck1ha4a%2FV5uv8j1Q%2FRIW0byEy6P42xNWI8060L7M%2BdoiR77ElDimbrvnC43vtR6jGGUw%2BWHjw7thzFlAbYZ1K1cxcIT6WBE4U5yQlZShSgQqgoy%2B9PWnw2sNiLvBChflUuvKWFrY8geiOUnzu8SqUXkOTB6aKa94O3DLNhyxRjwOnusf8xgch04ZqanEfw4JUXI6gWE854aPmG7qLUDw0vHvjezAz4Ko%2BQF2a%2F4zxbsfBjD%2FihEbKDhHS2Ebb4M4fUgOIPHsUxW6GhlBQQeqM6S4%2BrVDD2gvDLBjqkAWEAoigYzOmV1H1kuYtNsfbmEM9scg5pKLv5qK3oZqN7LHb7lQrdMOZWA%2Bp7KPOjhRHzrpkNxbhzLSNy7TkJmyBGB2B7AICyBiwyzyJejnnz5aimgAbIdJ7gFz5LUjGSZgFmoreQWqRxGiJ5j6GHe%2BaWD3PVSQe9Bt9sHI1TDQVQnhyuLt7LnxadAMxi6qbxO%2BCMwwX%2F6NM6YpEn9w9lXr1WP4cF&X-Amz-Signature=06349d8af18cd6f46bf9eaa1c97a85999efcdffc2c301f030549987bce701341&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G2BRTFR%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNgZ7p%2BMfvYRAwu8rnORznYnsO3VTTslcBkQmXfXKMIAIhAPg3x3dkAfMdpccHvaZB4XVfMXdG9rzcj6JvKyvhMIbaKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlvksQuCAFazqt%2BsMq3AMvh6OEh%2FsjguP35OcfVICUDg6d7ZzSx9WcLXK088vsHTC4DIxIN2UsKbqx%2B4bAZNlRF3OCtSoVnnr%2F%2F2a96EQ1czinCMEgvo1a4zYkYYliXsNIUAsm%2FUpTr7WCi5KLcMZbHeKrqOlnO5tq%2F68jvfwKAWppIPCWRmG%2ByjHENkOjzlKetYUwjv9LzKxMKJgKU6WA25Ej%2Favqod%2FJ4h1TqZVxbVkne995ZmM4hhoED3vb%2BcqfNtM0u44LFREth3zUZB4xAUX%2B7t6OIwZxs3R%2Bv7pJCxiOVIKS9dN65WE0dcZHbLbcwRKYxNahsbwImBbG5JPkp9oEhGmgobqWqhX%2BhMPtgVRBaMUGM6Ck1ha4a%2FV5uv8j1Q%2FRIW0byEy6P42xNWI8060L7M%2BdoiR77ElDimbrvnC43vtR6jGGUw%2BWHjw7thzFlAbYZ1K1cxcIT6WBE4U5yQlZShSgQqgoy%2B9PWnw2sNiLvBChflUuvKWFrY8geiOUnzu8SqUXkOTB6aKa94O3DLNhyxRjwOnusf8xgch04ZqanEfw4JUXI6gWE854aPmG7qLUDw0vHvjezAz4Ko%2BQF2a%2F4zxbsfBjD%2FihEbKDhHS2Ebb4M4fUgOIPHsUxW6GhlBQQeqM6S4%2BrVDD2gvDLBjqkAWEAoigYzOmV1H1kuYtNsfbmEM9scg5pKLv5qK3oZqN7LHb7lQrdMOZWA%2Bp7KPOjhRHzrpkNxbhzLSNy7TkJmyBGB2B7AICyBiwyzyJejnnz5aimgAbIdJ7gFz5LUjGSZgFmoreQWqRxGiJ5j6GHe%2BaWD3PVSQe9Bt9sHI1TDQVQnhyuLt7LnxadAMxi6qbxO%2BCMwwX%2F6NM6YpEn9w9lXr1WP4cF&X-Amz-Signature=d3aba4dded5e3a4c082a12f368b611e672951aa7ccd6697e8c13832aea649510&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G2BRTFR%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNgZ7p%2BMfvYRAwu8rnORznYnsO3VTTslcBkQmXfXKMIAIhAPg3x3dkAfMdpccHvaZB4XVfMXdG9rzcj6JvKyvhMIbaKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlvksQuCAFazqt%2BsMq3AMvh6OEh%2FsjguP35OcfVICUDg6d7ZzSx9WcLXK088vsHTC4DIxIN2UsKbqx%2B4bAZNlRF3OCtSoVnnr%2F%2F2a96EQ1czinCMEgvo1a4zYkYYliXsNIUAsm%2FUpTr7WCi5KLcMZbHeKrqOlnO5tq%2F68jvfwKAWppIPCWRmG%2ByjHENkOjzlKetYUwjv9LzKxMKJgKU6WA25Ej%2Favqod%2FJ4h1TqZVxbVkne995ZmM4hhoED3vb%2BcqfNtM0u44LFREth3zUZB4xAUX%2B7t6OIwZxs3R%2Bv7pJCxiOVIKS9dN65WE0dcZHbLbcwRKYxNahsbwImBbG5JPkp9oEhGmgobqWqhX%2BhMPtgVRBaMUGM6Ck1ha4a%2FV5uv8j1Q%2FRIW0byEy6P42xNWI8060L7M%2BdoiR77ElDimbrvnC43vtR6jGGUw%2BWHjw7thzFlAbYZ1K1cxcIT6WBE4U5yQlZShSgQqgoy%2B9PWnw2sNiLvBChflUuvKWFrY8geiOUnzu8SqUXkOTB6aKa94O3DLNhyxRjwOnusf8xgch04ZqanEfw4JUXI6gWE854aPmG7qLUDw0vHvjezAz4Ko%2BQF2a%2F4zxbsfBjD%2FihEbKDhHS2Ebb4M4fUgOIPHsUxW6GhlBQQeqM6S4%2BrVDD2gvDLBjqkAWEAoigYzOmV1H1kuYtNsfbmEM9scg5pKLv5qK3oZqN7LHb7lQrdMOZWA%2Bp7KPOjhRHzrpkNxbhzLSNy7TkJmyBGB2B7AICyBiwyzyJejnnz5aimgAbIdJ7gFz5LUjGSZgFmoreQWqRxGiJ5j6GHe%2BaWD3PVSQe9Bt9sHI1TDQVQnhyuLt7LnxadAMxi6qbxO%2BCMwwX%2F6NM6YpEn9w9lXr1WP4cF&X-Amz-Signature=7ed7f0f7940a64e30cc3e51adda08615a94a7ae615a0aa6e26a7b3fda000e5c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G2BRTFR%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNgZ7p%2BMfvYRAwu8rnORznYnsO3VTTslcBkQmXfXKMIAIhAPg3x3dkAfMdpccHvaZB4XVfMXdG9rzcj6JvKyvhMIbaKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlvksQuCAFazqt%2BsMq3AMvh6OEh%2FsjguP35OcfVICUDg6d7ZzSx9WcLXK088vsHTC4DIxIN2UsKbqx%2B4bAZNlRF3OCtSoVnnr%2F%2F2a96EQ1czinCMEgvo1a4zYkYYliXsNIUAsm%2FUpTr7WCi5KLcMZbHeKrqOlnO5tq%2F68jvfwKAWppIPCWRmG%2ByjHENkOjzlKetYUwjv9LzKxMKJgKU6WA25Ej%2Favqod%2FJ4h1TqZVxbVkne995ZmM4hhoED3vb%2BcqfNtM0u44LFREth3zUZB4xAUX%2B7t6OIwZxs3R%2Bv7pJCxiOVIKS9dN65WE0dcZHbLbcwRKYxNahsbwImBbG5JPkp9oEhGmgobqWqhX%2BhMPtgVRBaMUGM6Ck1ha4a%2FV5uv8j1Q%2FRIW0byEy6P42xNWI8060L7M%2BdoiR77ElDimbrvnC43vtR6jGGUw%2BWHjw7thzFlAbYZ1K1cxcIT6WBE4U5yQlZShSgQqgoy%2B9PWnw2sNiLvBChflUuvKWFrY8geiOUnzu8SqUXkOTB6aKa94O3DLNhyxRjwOnusf8xgch04ZqanEfw4JUXI6gWE854aPmG7qLUDw0vHvjezAz4Ko%2BQF2a%2F4zxbsfBjD%2FihEbKDhHS2Ebb4M4fUgOIPHsUxW6GhlBQQeqM6S4%2BrVDD2gvDLBjqkAWEAoigYzOmV1H1kuYtNsfbmEM9scg5pKLv5qK3oZqN7LHb7lQrdMOZWA%2Bp7KPOjhRHzrpkNxbhzLSNy7TkJmyBGB2B7AICyBiwyzyJejnnz5aimgAbIdJ7gFz5LUjGSZgFmoreQWqRxGiJ5j6GHe%2BaWD3PVSQe9Bt9sHI1TDQVQnhyuLt7LnxadAMxi6qbxO%2BCMwwX%2F6NM6YpEn9w9lXr1WP4cF&X-Amz-Signature=adbe2591e20343cb104943591f7c406a10f8e9e5bf674296eed263706c8a7721&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
