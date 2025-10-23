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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA3RSI6N%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLIwj1%2B4%2F9eq23V1rnbR%2BH9MEkCwEeV3HK2S7vzIcO9AiAQgLgUQWOUp1EpLAudU3eAJBCZq4DHJHIsEsv2%2BuQAlir%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMgtSR2oERrTHcvotEKtwDKXYjOf2gnz12qKR7iTK1rUkhpXufLEDmW2rynpoIknTWkgDoxQ5faOZfdAA%2B2Uoq5r7ptsUZ5LsETXBnY2%2Fx%2Fm9Ii%2FsBGmHOZAMixq7lhJMly1IWDPyUvD2ce7k%2B%2F7d0w42SNAlJle21V0TZm7CC1w2C2dWXNWn7yOR8%2BblKjh2esE53Hm5QcDv56jlmc%2Fi63HVK5TuvFnbfb9sJix0xhI8NXGXragPW0%2FrvidBI3nFQbolusBTtnzW5zIYGP02TUYdIZmvQv%2BumyNx3dAAcImSrU5zgqJaz612crdnWpLdRQpvbV7Tt4%2F6thFTMQJhZHn6kDmQi38gvSqc94vfm%2BAsky9ahSD8l%2FzujLkXxy3BKYsFFysVUZW445zymmTInOmfnPMmDd%2FQ%2B0i0ej%2FD9pQfTFd3A%2FE7Eu4pnkUtTkjhvPvazMRxbOrY7C5BNvt0%2Bzah%2B6%2FB1Wb%2F48kVBDvy%2FhFy3Be4Ek6OPWbwxxsI0jVB9fl7DhvNJXDiRMUbm0M%2BqWQJO8I1XJD4%2B%2B0u7Zavo3qCWRdqzUsWKSApTQADct7V3kxVotAaexNZAeBuCbP362iTJDjw7DEHxnVTZIJ4RrA3izxUMISkzx39ZrLhukcutwp9PCpfl8uj0wT8w6e%2FlxwY6pgHRn8xl35IqIJSqqz2EHMQVdb7Sft6moekv5SaYWUVxuYbsh3oUVCAIGCRt1bsHwQ87VAv6bNLnzD6unxcEt0vaPCDjBcmZOB5R4wM9KM3SZl%2FbC8qO%2BioAugnBcPzVQSscCXgWWODmSojSYMXK%2BmzZ5y0g4u%2Fbp8fZeVVMbah9tcC7UWbMz7U3YyEQXx70B77Gi%2Bv%2BwXHjaMABk53OwuHzE6AtgcvZ&X-Amz-Signature=b5de9a4fcd8f59e34c5cb4103db0b0c80e5a9fef2d0846284480972b868ff763&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVLMFP3W%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0gPgmGG9N4WNI8tqoKE23OyX5vO4cYKizzh5ZE%2B9yBAiEAvl2TU4BmtLLQROf2syJyZ3I5BR23rHF6i4KeQhU5lt8q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDOtI7ej%2FVLbApZm9HCrcA8oxnabj1OpBi7M%2FdwM9JQIVUrf1wVeRJVrK3GxYmL%2Ft3L35bl6vSOo0dUQOiY5vn%2BSxEZzCnvltn1%2FttafNWZv6uO6dHHU%2BAgSydFIW3JVZnf17TECaw22BLwR4%2B4p2B96EVyI5D3oLbNK53ybaECV1bYYL1AG3%2BjZd1VTiZ1rrvsRPFdeHeV7qAvTURgcQ4KlF4cFEthgdhTj%2FSS1nNCYvxE%2Bxelg8pXW3nCeaYi1GcrzzxCsc5Jok6seNzRz0mp1jOHXtVMm%2FjT2AB%2BX%2FgZH%2B1hqFqgeIR%2F9jsmeeeBVmAb0jnYJDvh3mx%2BwCRw6Z1aCvgW8BnQbmU1UiQCmGLrlePn1R42v1t3o0dktFv5Gf%2Fzt5IFBWFmGF5v0tTX%2Fq4LUhJxPpkw96GQCEXVbUfjIe6yYE4MtxeJKWPflLEqUNGnWsblPtQ21LKb%2Bg3mKg0oXqH59NiwVIsQLShCc28vJvxF1OL1pMq%2FP9zFJw%2B3aUYF9mFfqy9RHB6r6BD6JTdrI9MBAALnHqJXzELdVQWDyeZtkYD6GiTfecaHQhMIqbImTYQIXzFJQzXKQriVUBsnmBSQtFZH0hh%2BpvFqBMXUtMbMf6evrbmQilDzIjpwS0zHGnPWqYWNkWxijeMJfw5ccGOqUBpIDpPM9aogLEywhoJpWJG61h%2BtQ7BDWMBDfPamOod1XK6MwCOAiGFx4waqnIdQ2OJEuWO%2FF5X5s020DTO3X4VTT9v6ykdwZgqOPHf2JdjEpUEdQUMoVphKcJaGnNptQ2ReKhAsd%2FAQTToueILbp6iQ%2BSBNWSijd9EjXhPD5TY%2FVjMFjhTmTvys1Cu43FER%2FV3Ktb1%2FmNjRYwiQ0sXrwuUVKV5%2BVC&X-Amz-Signature=d38ac5964eb26505b8af464fd1ce13d62418d9607d983b59e6e38d32508f56d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVLMFP3W%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0gPgmGG9N4WNI8tqoKE23OyX5vO4cYKizzh5ZE%2B9yBAiEAvl2TU4BmtLLQROf2syJyZ3I5BR23rHF6i4KeQhU5lt8q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDOtI7ej%2FVLbApZm9HCrcA8oxnabj1OpBi7M%2FdwM9JQIVUrf1wVeRJVrK3GxYmL%2Ft3L35bl6vSOo0dUQOiY5vn%2BSxEZzCnvltn1%2FttafNWZv6uO6dHHU%2BAgSydFIW3JVZnf17TECaw22BLwR4%2B4p2B96EVyI5D3oLbNK53ybaECV1bYYL1AG3%2BjZd1VTiZ1rrvsRPFdeHeV7qAvTURgcQ4KlF4cFEthgdhTj%2FSS1nNCYvxE%2Bxelg8pXW3nCeaYi1GcrzzxCsc5Jok6seNzRz0mp1jOHXtVMm%2FjT2AB%2BX%2FgZH%2B1hqFqgeIR%2F9jsmeeeBVmAb0jnYJDvh3mx%2BwCRw6Z1aCvgW8BnQbmU1UiQCmGLrlePn1R42v1t3o0dktFv5Gf%2Fzt5IFBWFmGF5v0tTX%2Fq4LUhJxPpkw96GQCEXVbUfjIe6yYE4MtxeJKWPflLEqUNGnWsblPtQ21LKb%2Bg3mKg0oXqH59NiwVIsQLShCc28vJvxF1OL1pMq%2FP9zFJw%2B3aUYF9mFfqy9RHB6r6BD6JTdrI9MBAALnHqJXzELdVQWDyeZtkYD6GiTfecaHQhMIqbImTYQIXzFJQzXKQriVUBsnmBSQtFZH0hh%2BpvFqBMXUtMbMf6evrbmQilDzIjpwS0zHGnPWqYWNkWxijeMJfw5ccGOqUBpIDpPM9aogLEywhoJpWJG61h%2BtQ7BDWMBDfPamOod1XK6MwCOAiGFx4waqnIdQ2OJEuWO%2FF5X5s020DTO3X4VTT9v6ykdwZgqOPHf2JdjEpUEdQUMoVphKcJaGnNptQ2ReKhAsd%2FAQTToueILbp6iQ%2BSBNWSijd9EjXhPD5TY%2FVjMFjhTmTvys1Cu43FER%2FV3Ktb1%2FmNjRYwiQ0sXrwuUVKV5%2BVC&X-Amz-Signature=9864c7899135f803ddda5042abe1e7f75e4e01683492a9906ab32199365c8003&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVLMFP3W%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0gPgmGG9N4WNI8tqoKE23OyX5vO4cYKizzh5ZE%2B9yBAiEAvl2TU4BmtLLQROf2syJyZ3I5BR23rHF6i4KeQhU5lt8q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDOtI7ej%2FVLbApZm9HCrcA8oxnabj1OpBi7M%2FdwM9JQIVUrf1wVeRJVrK3GxYmL%2Ft3L35bl6vSOo0dUQOiY5vn%2BSxEZzCnvltn1%2FttafNWZv6uO6dHHU%2BAgSydFIW3JVZnf17TECaw22BLwR4%2B4p2B96EVyI5D3oLbNK53ybaECV1bYYL1AG3%2BjZd1VTiZ1rrvsRPFdeHeV7qAvTURgcQ4KlF4cFEthgdhTj%2FSS1nNCYvxE%2Bxelg8pXW3nCeaYi1GcrzzxCsc5Jok6seNzRz0mp1jOHXtVMm%2FjT2AB%2BX%2FgZH%2B1hqFqgeIR%2F9jsmeeeBVmAb0jnYJDvh3mx%2BwCRw6Z1aCvgW8BnQbmU1UiQCmGLrlePn1R42v1t3o0dktFv5Gf%2Fzt5IFBWFmGF5v0tTX%2Fq4LUhJxPpkw96GQCEXVbUfjIe6yYE4MtxeJKWPflLEqUNGnWsblPtQ21LKb%2Bg3mKg0oXqH59NiwVIsQLShCc28vJvxF1OL1pMq%2FP9zFJw%2B3aUYF9mFfqy9RHB6r6BD6JTdrI9MBAALnHqJXzELdVQWDyeZtkYD6GiTfecaHQhMIqbImTYQIXzFJQzXKQriVUBsnmBSQtFZH0hh%2BpvFqBMXUtMbMf6evrbmQilDzIjpwS0zHGnPWqYWNkWxijeMJfw5ccGOqUBpIDpPM9aogLEywhoJpWJG61h%2BtQ7BDWMBDfPamOod1XK6MwCOAiGFx4waqnIdQ2OJEuWO%2FF5X5s020DTO3X4VTT9v6ykdwZgqOPHf2JdjEpUEdQUMoVphKcJaGnNptQ2ReKhAsd%2FAQTToueILbp6iQ%2BSBNWSijd9EjXhPD5TY%2FVjMFjhTmTvys1Cu43FER%2FV3Ktb1%2FmNjRYwiQ0sXrwuUVKV5%2BVC&X-Amz-Signature=dcc1e5480ac75820e2476eeb35d185e08d501cea8da28e19da20e91667b90e27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVLMFP3W%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0gPgmGG9N4WNI8tqoKE23OyX5vO4cYKizzh5ZE%2B9yBAiEAvl2TU4BmtLLQROf2syJyZ3I5BR23rHF6i4KeQhU5lt8q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDOtI7ej%2FVLbApZm9HCrcA8oxnabj1OpBi7M%2FdwM9JQIVUrf1wVeRJVrK3GxYmL%2Ft3L35bl6vSOo0dUQOiY5vn%2BSxEZzCnvltn1%2FttafNWZv6uO6dHHU%2BAgSydFIW3JVZnf17TECaw22BLwR4%2B4p2B96EVyI5D3oLbNK53ybaECV1bYYL1AG3%2BjZd1VTiZ1rrvsRPFdeHeV7qAvTURgcQ4KlF4cFEthgdhTj%2FSS1nNCYvxE%2Bxelg8pXW3nCeaYi1GcrzzxCsc5Jok6seNzRz0mp1jOHXtVMm%2FjT2AB%2BX%2FgZH%2B1hqFqgeIR%2F9jsmeeeBVmAb0jnYJDvh3mx%2BwCRw6Z1aCvgW8BnQbmU1UiQCmGLrlePn1R42v1t3o0dktFv5Gf%2Fzt5IFBWFmGF5v0tTX%2Fq4LUhJxPpkw96GQCEXVbUfjIe6yYE4MtxeJKWPflLEqUNGnWsblPtQ21LKb%2Bg3mKg0oXqH59NiwVIsQLShCc28vJvxF1OL1pMq%2FP9zFJw%2B3aUYF9mFfqy9RHB6r6BD6JTdrI9MBAALnHqJXzELdVQWDyeZtkYD6GiTfecaHQhMIqbImTYQIXzFJQzXKQriVUBsnmBSQtFZH0hh%2BpvFqBMXUtMbMf6evrbmQilDzIjpwS0zHGnPWqYWNkWxijeMJfw5ccGOqUBpIDpPM9aogLEywhoJpWJG61h%2BtQ7BDWMBDfPamOod1XK6MwCOAiGFx4waqnIdQ2OJEuWO%2FF5X5s020DTO3X4VTT9v6ykdwZgqOPHf2JdjEpUEdQUMoVphKcJaGnNptQ2ReKhAsd%2FAQTToueILbp6iQ%2BSBNWSijd9EjXhPD5TY%2FVjMFjhTmTvys1Cu43FER%2FV3Ktb1%2FmNjRYwiQ0sXrwuUVKV5%2BVC&X-Amz-Signature=78d047785eeca2cb9233c2479cf9cb1f1838c77953375aae8d61af91476cf494&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVLMFP3W%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0gPgmGG9N4WNI8tqoKE23OyX5vO4cYKizzh5ZE%2B9yBAiEAvl2TU4BmtLLQROf2syJyZ3I5BR23rHF6i4KeQhU5lt8q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDOtI7ej%2FVLbApZm9HCrcA8oxnabj1OpBi7M%2FdwM9JQIVUrf1wVeRJVrK3GxYmL%2Ft3L35bl6vSOo0dUQOiY5vn%2BSxEZzCnvltn1%2FttafNWZv6uO6dHHU%2BAgSydFIW3JVZnf17TECaw22BLwR4%2B4p2B96EVyI5D3oLbNK53ybaECV1bYYL1AG3%2BjZd1VTiZ1rrvsRPFdeHeV7qAvTURgcQ4KlF4cFEthgdhTj%2FSS1nNCYvxE%2Bxelg8pXW3nCeaYi1GcrzzxCsc5Jok6seNzRz0mp1jOHXtVMm%2FjT2AB%2BX%2FgZH%2B1hqFqgeIR%2F9jsmeeeBVmAb0jnYJDvh3mx%2BwCRw6Z1aCvgW8BnQbmU1UiQCmGLrlePn1R42v1t3o0dktFv5Gf%2Fzt5IFBWFmGF5v0tTX%2Fq4LUhJxPpkw96GQCEXVbUfjIe6yYE4MtxeJKWPflLEqUNGnWsblPtQ21LKb%2Bg3mKg0oXqH59NiwVIsQLShCc28vJvxF1OL1pMq%2FP9zFJw%2B3aUYF9mFfqy9RHB6r6BD6JTdrI9MBAALnHqJXzELdVQWDyeZtkYD6GiTfecaHQhMIqbImTYQIXzFJQzXKQriVUBsnmBSQtFZH0hh%2BpvFqBMXUtMbMf6evrbmQilDzIjpwS0zHGnPWqYWNkWxijeMJfw5ccGOqUBpIDpPM9aogLEywhoJpWJG61h%2BtQ7BDWMBDfPamOod1XK6MwCOAiGFx4waqnIdQ2OJEuWO%2FF5X5s020DTO3X4VTT9v6ykdwZgqOPHf2JdjEpUEdQUMoVphKcJaGnNptQ2ReKhAsd%2FAQTToueILbp6iQ%2BSBNWSijd9EjXhPD5TY%2FVjMFjhTmTvys1Cu43FER%2FV3Ktb1%2FmNjRYwiQ0sXrwuUVKV5%2BVC&X-Amz-Signature=6097a8f4d7fa376ebd86c54ada0a40a647eb2e9ab5c6f3e644620180464e8562&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVLMFP3W%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0gPgmGG9N4WNI8tqoKE23OyX5vO4cYKizzh5ZE%2B9yBAiEAvl2TU4BmtLLQROf2syJyZ3I5BR23rHF6i4KeQhU5lt8q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDOtI7ej%2FVLbApZm9HCrcA8oxnabj1OpBi7M%2FdwM9JQIVUrf1wVeRJVrK3GxYmL%2Ft3L35bl6vSOo0dUQOiY5vn%2BSxEZzCnvltn1%2FttafNWZv6uO6dHHU%2BAgSydFIW3JVZnf17TECaw22BLwR4%2B4p2B96EVyI5D3oLbNK53ybaECV1bYYL1AG3%2BjZd1VTiZ1rrvsRPFdeHeV7qAvTURgcQ4KlF4cFEthgdhTj%2FSS1nNCYvxE%2Bxelg8pXW3nCeaYi1GcrzzxCsc5Jok6seNzRz0mp1jOHXtVMm%2FjT2AB%2BX%2FgZH%2B1hqFqgeIR%2F9jsmeeeBVmAb0jnYJDvh3mx%2BwCRw6Z1aCvgW8BnQbmU1UiQCmGLrlePn1R42v1t3o0dktFv5Gf%2Fzt5IFBWFmGF5v0tTX%2Fq4LUhJxPpkw96GQCEXVbUfjIe6yYE4MtxeJKWPflLEqUNGnWsblPtQ21LKb%2Bg3mKg0oXqH59NiwVIsQLShCc28vJvxF1OL1pMq%2FP9zFJw%2B3aUYF9mFfqy9RHB6r6BD6JTdrI9MBAALnHqJXzELdVQWDyeZtkYD6GiTfecaHQhMIqbImTYQIXzFJQzXKQriVUBsnmBSQtFZH0hh%2BpvFqBMXUtMbMf6evrbmQilDzIjpwS0zHGnPWqYWNkWxijeMJfw5ccGOqUBpIDpPM9aogLEywhoJpWJG61h%2BtQ7BDWMBDfPamOod1XK6MwCOAiGFx4waqnIdQ2OJEuWO%2FF5X5s020DTO3X4VTT9v6ykdwZgqOPHf2JdjEpUEdQUMoVphKcJaGnNptQ2ReKhAsd%2FAQTToueILbp6iQ%2BSBNWSijd9EjXhPD5TY%2FVjMFjhTmTvys1Cu43FER%2FV3Ktb1%2FmNjRYwiQ0sXrwuUVKV5%2BVC&X-Amz-Signature=ffde5b526abdcd80d7c465a07998b5c7216beb75b4266bed34101a2fd6013184&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVLMFP3W%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0gPgmGG9N4WNI8tqoKE23OyX5vO4cYKizzh5ZE%2B9yBAiEAvl2TU4BmtLLQROf2syJyZ3I5BR23rHF6i4KeQhU5lt8q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDOtI7ej%2FVLbApZm9HCrcA8oxnabj1OpBi7M%2FdwM9JQIVUrf1wVeRJVrK3GxYmL%2Ft3L35bl6vSOo0dUQOiY5vn%2BSxEZzCnvltn1%2FttafNWZv6uO6dHHU%2BAgSydFIW3JVZnf17TECaw22BLwR4%2B4p2B96EVyI5D3oLbNK53ybaECV1bYYL1AG3%2BjZd1VTiZ1rrvsRPFdeHeV7qAvTURgcQ4KlF4cFEthgdhTj%2FSS1nNCYvxE%2Bxelg8pXW3nCeaYi1GcrzzxCsc5Jok6seNzRz0mp1jOHXtVMm%2FjT2AB%2BX%2FgZH%2B1hqFqgeIR%2F9jsmeeeBVmAb0jnYJDvh3mx%2BwCRw6Z1aCvgW8BnQbmU1UiQCmGLrlePn1R42v1t3o0dktFv5Gf%2Fzt5IFBWFmGF5v0tTX%2Fq4LUhJxPpkw96GQCEXVbUfjIe6yYE4MtxeJKWPflLEqUNGnWsblPtQ21LKb%2Bg3mKg0oXqH59NiwVIsQLShCc28vJvxF1OL1pMq%2FP9zFJw%2B3aUYF9mFfqy9RHB6r6BD6JTdrI9MBAALnHqJXzELdVQWDyeZtkYD6GiTfecaHQhMIqbImTYQIXzFJQzXKQriVUBsnmBSQtFZH0hh%2BpvFqBMXUtMbMf6evrbmQilDzIjpwS0zHGnPWqYWNkWxijeMJfw5ccGOqUBpIDpPM9aogLEywhoJpWJG61h%2BtQ7BDWMBDfPamOod1XK6MwCOAiGFx4waqnIdQ2OJEuWO%2FF5X5s020DTO3X4VTT9v6ykdwZgqOPHf2JdjEpUEdQUMoVphKcJaGnNptQ2ReKhAsd%2FAQTToueILbp6iQ%2BSBNWSijd9EjXhPD5TY%2FVjMFjhTmTvys1Cu43FER%2FV3Ktb1%2FmNjRYwiQ0sXrwuUVKV5%2BVC&X-Amz-Signature=51bb914205150c79f1d68752f50a5ab99de6c1f083a52a98ca15e9fae816545c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVLMFP3W%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0gPgmGG9N4WNI8tqoKE23OyX5vO4cYKizzh5ZE%2B9yBAiEAvl2TU4BmtLLQROf2syJyZ3I5BR23rHF6i4KeQhU5lt8q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDOtI7ej%2FVLbApZm9HCrcA8oxnabj1OpBi7M%2FdwM9JQIVUrf1wVeRJVrK3GxYmL%2Ft3L35bl6vSOo0dUQOiY5vn%2BSxEZzCnvltn1%2FttafNWZv6uO6dHHU%2BAgSydFIW3JVZnf17TECaw22BLwR4%2B4p2B96EVyI5D3oLbNK53ybaECV1bYYL1AG3%2BjZd1VTiZ1rrvsRPFdeHeV7qAvTURgcQ4KlF4cFEthgdhTj%2FSS1nNCYvxE%2Bxelg8pXW3nCeaYi1GcrzzxCsc5Jok6seNzRz0mp1jOHXtVMm%2FjT2AB%2BX%2FgZH%2B1hqFqgeIR%2F9jsmeeeBVmAb0jnYJDvh3mx%2BwCRw6Z1aCvgW8BnQbmU1UiQCmGLrlePn1R42v1t3o0dktFv5Gf%2Fzt5IFBWFmGF5v0tTX%2Fq4LUhJxPpkw96GQCEXVbUfjIe6yYE4MtxeJKWPflLEqUNGnWsblPtQ21LKb%2Bg3mKg0oXqH59NiwVIsQLShCc28vJvxF1OL1pMq%2FP9zFJw%2B3aUYF9mFfqy9RHB6r6BD6JTdrI9MBAALnHqJXzELdVQWDyeZtkYD6GiTfecaHQhMIqbImTYQIXzFJQzXKQriVUBsnmBSQtFZH0hh%2BpvFqBMXUtMbMf6evrbmQilDzIjpwS0zHGnPWqYWNkWxijeMJfw5ccGOqUBpIDpPM9aogLEywhoJpWJG61h%2BtQ7BDWMBDfPamOod1XK6MwCOAiGFx4waqnIdQ2OJEuWO%2FF5X5s020DTO3X4VTT9v6ykdwZgqOPHf2JdjEpUEdQUMoVphKcJaGnNptQ2ReKhAsd%2FAQTToueILbp6iQ%2BSBNWSijd9EjXhPD5TY%2FVjMFjhTmTvys1Cu43FER%2FV3Ktb1%2FmNjRYwiQ0sXrwuUVKV5%2BVC&X-Amz-Signature=ad0f9ab3d9d23651ff7f3cb12f65d59dfbb0e866b4151e8ab2d1639912d564aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVLMFP3W%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0gPgmGG9N4WNI8tqoKE23OyX5vO4cYKizzh5ZE%2B9yBAiEAvl2TU4BmtLLQROf2syJyZ3I5BR23rHF6i4KeQhU5lt8q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDOtI7ej%2FVLbApZm9HCrcA8oxnabj1OpBi7M%2FdwM9JQIVUrf1wVeRJVrK3GxYmL%2Ft3L35bl6vSOo0dUQOiY5vn%2BSxEZzCnvltn1%2FttafNWZv6uO6dHHU%2BAgSydFIW3JVZnf17TECaw22BLwR4%2B4p2B96EVyI5D3oLbNK53ybaECV1bYYL1AG3%2BjZd1VTiZ1rrvsRPFdeHeV7qAvTURgcQ4KlF4cFEthgdhTj%2FSS1nNCYvxE%2Bxelg8pXW3nCeaYi1GcrzzxCsc5Jok6seNzRz0mp1jOHXtVMm%2FjT2AB%2BX%2FgZH%2B1hqFqgeIR%2F9jsmeeeBVmAb0jnYJDvh3mx%2BwCRw6Z1aCvgW8BnQbmU1UiQCmGLrlePn1R42v1t3o0dktFv5Gf%2Fzt5IFBWFmGF5v0tTX%2Fq4LUhJxPpkw96GQCEXVbUfjIe6yYE4MtxeJKWPflLEqUNGnWsblPtQ21LKb%2Bg3mKg0oXqH59NiwVIsQLShCc28vJvxF1OL1pMq%2FP9zFJw%2B3aUYF9mFfqy9RHB6r6BD6JTdrI9MBAALnHqJXzELdVQWDyeZtkYD6GiTfecaHQhMIqbImTYQIXzFJQzXKQriVUBsnmBSQtFZH0hh%2BpvFqBMXUtMbMf6evrbmQilDzIjpwS0zHGnPWqYWNkWxijeMJfw5ccGOqUBpIDpPM9aogLEywhoJpWJG61h%2BtQ7BDWMBDfPamOod1XK6MwCOAiGFx4waqnIdQ2OJEuWO%2FF5X5s020DTO3X4VTT9v6ykdwZgqOPHf2JdjEpUEdQUMoVphKcJaGnNptQ2ReKhAsd%2FAQTToueILbp6iQ%2BSBNWSijd9EjXhPD5TY%2FVjMFjhTmTvys1Cu43FER%2FV3Ktb1%2FmNjRYwiQ0sXrwuUVKV5%2BVC&X-Amz-Signature=960f3f4a7c2ccee05ab2aa8e288873c545197657a822881daa7ecd972b8a7bd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVLMFP3W%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0gPgmGG9N4WNI8tqoKE23OyX5vO4cYKizzh5ZE%2B9yBAiEAvl2TU4BmtLLQROf2syJyZ3I5BR23rHF6i4KeQhU5lt8q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDOtI7ej%2FVLbApZm9HCrcA8oxnabj1OpBi7M%2FdwM9JQIVUrf1wVeRJVrK3GxYmL%2Ft3L35bl6vSOo0dUQOiY5vn%2BSxEZzCnvltn1%2FttafNWZv6uO6dHHU%2BAgSydFIW3JVZnf17TECaw22BLwR4%2B4p2B96EVyI5D3oLbNK53ybaECV1bYYL1AG3%2BjZd1VTiZ1rrvsRPFdeHeV7qAvTURgcQ4KlF4cFEthgdhTj%2FSS1nNCYvxE%2Bxelg8pXW3nCeaYi1GcrzzxCsc5Jok6seNzRz0mp1jOHXtVMm%2FjT2AB%2BX%2FgZH%2B1hqFqgeIR%2F9jsmeeeBVmAb0jnYJDvh3mx%2BwCRw6Z1aCvgW8BnQbmU1UiQCmGLrlePn1R42v1t3o0dktFv5Gf%2Fzt5IFBWFmGF5v0tTX%2Fq4LUhJxPpkw96GQCEXVbUfjIe6yYE4MtxeJKWPflLEqUNGnWsblPtQ21LKb%2Bg3mKg0oXqH59NiwVIsQLShCc28vJvxF1OL1pMq%2FP9zFJw%2B3aUYF9mFfqy9RHB6r6BD6JTdrI9MBAALnHqJXzELdVQWDyeZtkYD6GiTfecaHQhMIqbImTYQIXzFJQzXKQriVUBsnmBSQtFZH0hh%2BpvFqBMXUtMbMf6evrbmQilDzIjpwS0zHGnPWqYWNkWxijeMJfw5ccGOqUBpIDpPM9aogLEywhoJpWJG61h%2BtQ7BDWMBDfPamOod1XK6MwCOAiGFx4waqnIdQ2OJEuWO%2FF5X5s020DTO3X4VTT9v6ykdwZgqOPHf2JdjEpUEdQUMoVphKcJaGnNptQ2ReKhAsd%2FAQTToueILbp6iQ%2BSBNWSijd9EjXhPD5TY%2FVjMFjhTmTvys1Cu43FER%2FV3Ktb1%2FmNjRYwiQ0sXrwuUVKV5%2BVC&X-Amz-Signature=8ace49409559a127533db3cc48f968666541bace3fb213a63fe7c394b3549ac8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
