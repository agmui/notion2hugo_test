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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIVD3R53%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIEhruSn6E7RFTGs6d6D%2BQMr67Jz%2BdeqwCNKpOlk3lve0AiBAaJnvHeQjUGkJL8S6Ao9oU2cg%2BXpF5zOA%2FX0PECQ1oCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIM%2BbNLjWyiMZC%2BbGvGKtwDAVqtgNDMN7OQdEsmjxsHkQJIpowgmJKeA%2BcAIKDXBahQ%2BrqHYrhhyOr1thxZ8ZLzuwaYb3cl7wsvYPC9KrjfWVTzqvDlJRRSQP8nG0lelLCsHrPwM02AJOl8JegOL05Cu3N87%2BDSnxJljbmHoI2lZzNao4%2Bukif7L5d56VEtR8dG4q9EkySmXp53wFXbpcVHd7eJ3ARs3zvYLJbkmUK42nMILx%2Fg5yThVx1ZgNZsLjnWosRIKVAo7gafllOr6kKCdO1k2IcBc%2Foz%2FzjxoUPBHATJ2OyUHZIHQSliFTAC52SZNRRXw5yO51xfvZ673KOM%2FbonX4b7wKvpdUJbCGPnevm5lCmoTqFrIVZyFBmjgSGtwkjwRYMcoBoIs9HiMx%2FWLTNgOcAJMRXG8ELCfKAUZoj4di2sqPYIu9IrDVroInnd3uZZ00Ht5hzzdMWRer4I%2FO4Mah8r1Ac%2Foqp7RJDnjYf5jDSRziygpQv1LYHrmoHU7uuVZzgsim60Af9zU8uKUfqyp8idHXgXh9J%2FT360s%2BdAEeKrJ4%2BUCtdk9n%2Bes96DG9TCuyLZ4BlOTM3IRAtSpD7DfU10CkngaTS5XEtlz8YafSxbq06cWBu1wQJaH%2Beg8bQWbqOrnDYX9DMw%2FqzHxAY6pgEkJZtbwl8ZiUjhjWMiRHoRgjDJ3%2Fr6f9%2F7yxz6Zy9X6DE5OjFm2Z%2BkebtMQdJF0wHxzamxDEslHDRFKqTZ6TAgBcc31SeJIWDy0gubyjkEW%2FdvxTqGE8oPbe4%2BFhsHhKYQ3oYkK80NkXeGgywG9wgJ03toLi%2BqpvCSVjg7Fiz4kMAYmu%2F0RhxkPDRHOYvvmv6mIDO7wlXhWj5Mbfny3WjxFM6nrVdw&X-Amz-Signature=2a3e0b7506a2f7091e98a3817f37778ab11bf88bffc88a3f960c818c81c9ba42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XNSQ66T%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIDpS1NKdBmpY8VCDfnHL4rcy%2F4lDYKJgxtmi6grCK7n%2FAiEArSkIdO%2BqlOqI%2BrcbWmoOlilCeXIufLa8UR%2F%2FVoIZJEAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDPY5vgB0akR04m%2FjxircA1DUMVmezRvOROJ%2BwjuOS%2BGdV9J7zMTzZIbE11bAqPPZBNy6M9VC%2BycT6HTnsznP8DZAwZuJR%2FRv8Iazs7S0DwcdyFCjqVyT20fg3Lg3DlFBiodSx%2Fdq%2F1UFFtX1NLl8HQF8fqifdhB%2BSTGxqFEgfB6zT3kwfrVdH8LbO6n3M08v%2B%2BbGBZUtRd3QPFaLUdvVsy5fh9ESeXZHoXZhWOqTVww86QgXuDEIvGz0%2F28Fgi1CKxVwVIxwOQU84Dyvp0vXPe8JpjV%2FPdie6y38ywsvyUEou4DmWwyq51CojLj%2B9kDHUnLeluNyclN9v6x%2FDz%2B9Ux7SusBl7v0HLzDFkaFaZIsrGYwfB3rK2F8WItSuZ7BhLwv%2Fy9Y9ySUeOrVpq7fPMiNK6a539sD3nwJpzkz38R38Mhqea3XdW5612xlN1l3qf7inqMF0eZdVZIrdD7FeYlLEq5a6JJQyFeZjCV%2FGn0KtSVVJsSCqiRf6o%2F%2Ff3mJSS1POxhZkBEpgZiyjelpqT6Z7VO0GU%2BMuA3iNW1birl11%2Bq%2FJOdg6RiSnqSQiazg5%2Fh%2By6znTSFPKZq7u8jAPbDkPofc4NIdHFzWJVBJuvdiZ1EupXcTZsXVLGdj%2FSBt3FFJOtH6EURI%2BHB6hMM6sx8QGOqUBwI8CkFEne%2BGM1Uz6hdvCju645Cbr8JQIoHAO%2BXCYt2njCsvWvRSE3FMk2c9KUFNv7GfYvIqJs4ekdskzcMJHZSHZcy%2BoCyP8m%2Fe3u5ekkSSClofql7IsKqo9rrn9COKCwI3IugLy1KYKRCGZgGl2sB5iUG8YYvGNuDkdvK0Bc3%2Fp51AbwpiDoS6oVAISlAN4kyi%2BQ%2BS7DdZrbG4TV0N81S1qwp1M&X-Amz-Signature=95bd05d31d9dd230f1da4d1ccba614cc62fa7916243ef1c40d35a4d6e41506e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XNSQ66T%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIDpS1NKdBmpY8VCDfnHL4rcy%2F4lDYKJgxtmi6grCK7n%2FAiEArSkIdO%2BqlOqI%2BrcbWmoOlilCeXIufLa8UR%2F%2FVoIZJEAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDPY5vgB0akR04m%2FjxircA1DUMVmezRvOROJ%2BwjuOS%2BGdV9J7zMTzZIbE11bAqPPZBNy6M9VC%2BycT6HTnsznP8DZAwZuJR%2FRv8Iazs7S0DwcdyFCjqVyT20fg3Lg3DlFBiodSx%2Fdq%2F1UFFtX1NLl8HQF8fqifdhB%2BSTGxqFEgfB6zT3kwfrVdH8LbO6n3M08v%2B%2BbGBZUtRd3QPFaLUdvVsy5fh9ESeXZHoXZhWOqTVww86QgXuDEIvGz0%2F28Fgi1CKxVwVIxwOQU84Dyvp0vXPe8JpjV%2FPdie6y38ywsvyUEou4DmWwyq51CojLj%2B9kDHUnLeluNyclN9v6x%2FDz%2B9Ux7SusBl7v0HLzDFkaFaZIsrGYwfB3rK2F8WItSuZ7BhLwv%2Fy9Y9ySUeOrVpq7fPMiNK6a539sD3nwJpzkz38R38Mhqea3XdW5612xlN1l3qf7inqMF0eZdVZIrdD7FeYlLEq5a6JJQyFeZjCV%2FGn0KtSVVJsSCqiRf6o%2F%2Ff3mJSS1POxhZkBEpgZiyjelpqT6Z7VO0GU%2BMuA3iNW1birl11%2Bq%2FJOdg6RiSnqSQiazg5%2Fh%2By6znTSFPKZq7u8jAPbDkPofc4NIdHFzWJVBJuvdiZ1EupXcTZsXVLGdj%2FSBt3FFJOtH6EURI%2BHB6hMM6sx8QGOqUBwI8CkFEne%2BGM1Uz6hdvCju645Cbr8JQIoHAO%2BXCYt2njCsvWvRSE3FMk2c9KUFNv7GfYvIqJs4ekdskzcMJHZSHZcy%2BoCyP8m%2Fe3u5ekkSSClofql7IsKqo9rrn9COKCwI3IugLy1KYKRCGZgGl2sB5iUG8YYvGNuDkdvK0Bc3%2Fp51AbwpiDoS6oVAISlAN4kyi%2BQ%2BS7DdZrbG4TV0N81S1qwp1M&X-Amz-Signature=26050b6550e948fe80525e2bfda2862f6f338ba0d027332ab3a3516a2212fc84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XNSQ66T%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIDpS1NKdBmpY8VCDfnHL4rcy%2F4lDYKJgxtmi6grCK7n%2FAiEArSkIdO%2BqlOqI%2BrcbWmoOlilCeXIufLa8UR%2F%2FVoIZJEAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDPY5vgB0akR04m%2FjxircA1DUMVmezRvOROJ%2BwjuOS%2BGdV9J7zMTzZIbE11bAqPPZBNy6M9VC%2BycT6HTnsznP8DZAwZuJR%2FRv8Iazs7S0DwcdyFCjqVyT20fg3Lg3DlFBiodSx%2Fdq%2F1UFFtX1NLl8HQF8fqifdhB%2BSTGxqFEgfB6zT3kwfrVdH8LbO6n3M08v%2B%2BbGBZUtRd3QPFaLUdvVsy5fh9ESeXZHoXZhWOqTVww86QgXuDEIvGz0%2F28Fgi1CKxVwVIxwOQU84Dyvp0vXPe8JpjV%2FPdie6y38ywsvyUEou4DmWwyq51CojLj%2B9kDHUnLeluNyclN9v6x%2FDz%2B9Ux7SusBl7v0HLzDFkaFaZIsrGYwfB3rK2F8WItSuZ7BhLwv%2Fy9Y9ySUeOrVpq7fPMiNK6a539sD3nwJpzkz38R38Mhqea3XdW5612xlN1l3qf7inqMF0eZdVZIrdD7FeYlLEq5a6JJQyFeZjCV%2FGn0KtSVVJsSCqiRf6o%2F%2Ff3mJSS1POxhZkBEpgZiyjelpqT6Z7VO0GU%2BMuA3iNW1birl11%2Bq%2FJOdg6RiSnqSQiazg5%2Fh%2By6znTSFPKZq7u8jAPbDkPofc4NIdHFzWJVBJuvdiZ1EupXcTZsXVLGdj%2FSBt3FFJOtH6EURI%2BHB6hMM6sx8QGOqUBwI8CkFEne%2BGM1Uz6hdvCju645Cbr8JQIoHAO%2BXCYt2njCsvWvRSE3FMk2c9KUFNv7GfYvIqJs4ekdskzcMJHZSHZcy%2BoCyP8m%2Fe3u5ekkSSClofql7IsKqo9rrn9COKCwI3IugLy1KYKRCGZgGl2sB5iUG8YYvGNuDkdvK0Bc3%2Fp51AbwpiDoS6oVAISlAN4kyi%2BQ%2BS7DdZrbG4TV0N81S1qwp1M&X-Amz-Signature=6f2b8206a6e2b0f56403857941c5e244a29c0427429c1d52c74ae52d81e8e7c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XNSQ66T%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIDpS1NKdBmpY8VCDfnHL4rcy%2F4lDYKJgxtmi6grCK7n%2FAiEArSkIdO%2BqlOqI%2BrcbWmoOlilCeXIufLa8UR%2F%2FVoIZJEAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDPY5vgB0akR04m%2FjxircA1DUMVmezRvOROJ%2BwjuOS%2BGdV9J7zMTzZIbE11bAqPPZBNy6M9VC%2BycT6HTnsznP8DZAwZuJR%2FRv8Iazs7S0DwcdyFCjqVyT20fg3Lg3DlFBiodSx%2Fdq%2F1UFFtX1NLl8HQF8fqifdhB%2BSTGxqFEgfB6zT3kwfrVdH8LbO6n3M08v%2B%2BbGBZUtRd3QPFaLUdvVsy5fh9ESeXZHoXZhWOqTVww86QgXuDEIvGz0%2F28Fgi1CKxVwVIxwOQU84Dyvp0vXPe8JpjV%2FPdie6y38ywsvyUEou4DmWwyq51CojLj%2B9kDHUnLeluNyclN9v6x%2FDz%2B9Ux7SusBl7v0HLzDFkaFaZIsrGYwfB3rK2F8WItSuZ7BhLwv%2Fy9Y9ySUeOrVpq7fPMiNK6a539sD3nwJpzkz38R38Mhqea3XdW5612xlN1l3qf7inqMF0eZdVZIrdD7FeYlLEq5a6JJQyFeZjCV%2FGn0KtSVVJsSCqiRf6o%2F%2Ff3mJSS1POxhZkBEpgZiyjelpqT6Z7VO0GU%2BMuA3iNW1birl11%2Bq%2FJOdg6RiSnqSQiazg5%2Fh%2By6znTSFPKZq7u8jAPbDkPofc4NIdHFzWJVBJuvdiZ1EupXcTZsXVLGdj%2FSBt3FFJOtH6EURI%2BHB6hMM6sx8QGOqUBwI8CkFEne%2BGM1Uz6hdvCju645Cbr8JQIoHAO%2BXCYt2njCsvWvRSE3FMk2c9KUFNv7GfYvIqJs4ekdskzcMJHZSHZcy%2BoCyP8m%2Fe3u5ekkSSClofql7IsKqo9rrn9COKCwI3IugLy1KYKRCGZgGl2sB5iUG8YYvGNuDkdvK0Bc3%2Fp51AbwpiDoS6oVAISlAN4kyi%2BQ%2BS7DdZrbG4TV0N81S1qwp1M&X-Amz-Signature=75b13a534806f0ea50009df8953b8543160f4119f58ecf8fd79db672a7ea8203&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XNSQ66T%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIDpS1NKdBmpY8VCDfnHL4rcy%2F4lDYKJgxtmi6grCK7n%2FAiEArSkIdO%2BqlOqI%2BrcbWmoOlilCeXIufLa8UR%2F%2FVoIZJEAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDPY5vgB0akR04m%2FjxircA1DUMVmezRvOROJ%2BwjuOS%2BGdV9J7zMTzZIbE11bAqPPZBNy6M9VC%2BycT6HTnsznP8DZAwZuJR%2FRv8Iazs7S0DwcdyFCjqVyT20fg3Lg3DlFBiodSx%2Fdq%2F1UFFtX1NLl8HQF8fqifdhB%2BSTGxqFEgfB6zT3kwfrVdH8LbO6n3M08v%2B%2BbGBZUtRd3QPFaLUdvVsy5fh9ESeXZHoXZhWOqTVww86QgXuDEIvGz0%2F28Fgi1CKxVwVIxwOQU84Dyvp0vXPe8JpjV%2FPdie6y38ywsvyUEou4DmWwyq51CojLj%2B9kDHUnLeluNyclN9v6x%2FDz%2B9Ux7SusBl7v0HLzDFkaFaZIsrGYwfB3rK2F8WItSuZ7BhLwv%2Fy9Y9ySUeOrVpq7fPMiNK6a539sD3nwJpzkz38R38Mhqea3XdW5612xlN1l3qf7inqMF0eZdVZIrdD7FeYlLEq5a6JJQyFeZjCV%2FGn0KtSVVJsSCqiRf6o%2F%2Ff3mJSS1POxhZkBEpgZiyjelpqT6Z7VO0GU%2BMuA3iNW1birl11%2Bq%2FJOdg6RiSnqSQiazg5%2Fh%2By6znTSFPKZq7u8jAPbDkPofc4NIdHFzWJVBJuvdiZ1EupXcTZsXVLGdj%2FSBt3FFJOtH6EURI%2BHB6hMM6sx8QGOqUBwI8CkFEne%2BGM1Uz6hdvCju645Cbr8JQIoHAO%2BXCYt2njCsvWvRSE3FMk2c9KUFNv7GfYvIqJs4ekdskzcMJHZSHZcy%2BoCyP8m%2Fe3u5ekkSSClofql7IsKqo9rrn9COKCwI3IugLy1KYKRCGZgGl2sB5iUG8YYvGNuDkdvK0Bc3%2Fp51AbwpiDoS6oVAISlAN4kyi%2BQ%2BS7DdZrbG4TV0N81S1qwp1M&X-Amz-Signature=b56b3971dd44b12207c3f13e57fa97a59f093d2390be828db23010350e2acc2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XNSQ66T%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIDpS1NKdBmpY8VCDfnHL4rcy%2F4lDYKJgxtmi6grCK7n%2FAiEArSkIdO%2BqlOqI%2BrcbWmoOlilCeXIufLa8UR%2F%2FVoIZJEAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDPY5vgB0akR04m%2FjxircA1DUMVmezRvOROJ%2BwjuOS%2BGdV9J7zMTzZIbE11bAqPPZBNy6M9VC%2BycT6HTnsznP8DZAwZuJR%2FRv8Iazs7S0DwcdyFCjqVyT20fg3Lg3DlFBiodSx%2Fdq%2F1UFFtX1NLl8HQF8fqifdhB%2BSTGxqFEgfB6zT3kwfrVdH8LbO6n3M08v%2B%2BbGBZUtRd3QPFaLUdvVsy5fh9ESeXZHoXZhWOqTVww86QgXuDEIvGz0%2F28Fgi1CKxVwVIxwOQU84Dyvp0vXPe8JpjV%2FPdie6y38ywsvyUEou4DmWwyq51CojLj%2B9kDHUnLeluNyclN9v6x%2FDz%2B9Ux7SusBl7v0HLzDFkaFaZIsrGYwfB3rK2F8WItSuZ7BhLwv%2Fy9Y9ySUeOrVpq7fPMiNK6a539sD3nwJpzkz38R38Mhqea3XdW5612xlN1l3qf7inqMF0eZdVZIrdD7FeYlLEq5a6JJQyFeZjCV%2FGn0KtSVVJsSCqiRf6o%2F%2Ff3mJSS1POxhZkBEpgZiyjelpqT6Z7VO0GU%2BMuA3iNW1birl11%2Bq%2FJOdg6RiSnqSQiazg5%2Fh%2By6znTSFPKZq7u8jAPbDkPofc4NIdHFzWJVBJuvdiZ1EupXcTZsXVLGdj%2FSBt3FFJOtH6EURI%2BHB6hMM6sx8QGOqUBwI8CkFEne%2BGM1Uz6hdvCju645Cbr8JQIoHAO%2BXCYt2njCsvWvRSE3FMk2c9KUFNv7GfYvIqJs4ekdskzcMJHZSHZcy%2BoCyP8m%2Fe3u5ekkSSClofql7IsKqo9rrn9COKCwI3IugLy1KYKRCGZgGl2sB5iUG8YYvGNuDkdvK0Bc3%2Fp51AbwpiDoS6oVAISlAN4kyi%2BQ%2BS7DdZrbG4TV0N81S1qwp1M&X-Amz-Signature=3c310db8e1f5d192b00febf8d44b667174a04d5762b026aa1e97170478989f89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XNSQ66T%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIDpS1NKdBmpY8VCDfnHL4rcy%2F4lDYKJgxtmi6grCK7n%2FAiEArSkIdO%2BqlOqI%2BrcbWmoOlilCeXIufLa8UR%2F%2FVoIZJEAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDPY5vgB0akR04m%2FjxircA1DUMVmezRvOROJ%2BwjuOS%2BGdV9J7zMTzZIbE11bAqPPZBNy6M9VC%2BycT6HTnsznP8DZAwZuJR%2FRv8Iazs7S0DwcdyFCjqVyT20fg3Lg3DlFBiodSx%2Fdq%2F1UFFtX1NLl8HQF8fqifdhB%2BSTGxqFEgfB6zT3kwfrVdH8LbO6n3M08v%2B%2BbGBZUtRd3QPFaLUdvVsy5fh9ESeXZHoXZhWOqTVww86QgXuDEIvGz0%2F28Fgi1CKxVwVIxwOQU84Dyvp0vXPe8JpjV%2FPdie6y38ywsvyUEou4DmWwyq51CojLj%2B9kDHUnLeluNyclN9v6x%2FDz%2B9Ux7SusBl7v0HLzDFkaFaZIsrGYwfB3rK2F8WItSuZ7BhLwv%2Fy9Y9ySUeOrVpq7fPMiNK6a539sD3nwJpzkz38R38Mhqea3XdW5612xlN1l3qf7inqMF0eZdVZIrdD7FeYlLEq5a6JJQyFeZjCV%2FGn0KtSVVJsSCqiRf6o%2F%2Ff3mJSS1POxhZkBEpgZiyjelpqT6Z7VO0GU%2BMuA3iNW1birl11%2Bq%2FJOdg6RiSnqSQiazg5%2Fh%2By6znTSFPKZq7u8jAPbDkPofc4NIdHFzWJVBJuvdiZ1EupXcTZsXVLGdj%2FSBt3FFJOtH6EURI%2BHB6hMM6sx8QGOqUBwI8CkFEne%2BGM1Uz6hdvCju645Cbr8JQIoHAO%2BXCYt2njCsvWvRSE3FMk2c9KUFNv7GfYvIqJs4ekdskzcMJHZSHZcy%2BoCyP8m%2Fe3u5ekkSSClofql7IsKqo9rrn9COKCwI3IugLy1KYKRCGZgGl2sB5iUG8YYvGNuDkdvK0Bc3%2Fp51AbwpiDoS6oVAISlAN4kyi%2BQ%2BS7DdZrbG4TV0N81S1qwp1M&X-Amz-Signature=60223f353a584947b9d6d31115dadcce3709c8b1edf3b44e999bb2030d1ada93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XNSQ66T%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIDpS1NKdBmpY8VCDfnHL4rcy%2F4lDYKJgxtmi6grCK7n%2FAiEArSkIdO%2BqlOqI%2BrcbWmoOlilCeXIufLa8UR%2F%2FVoIZJEAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDPY5vgB0akR04m%2FjxircA1DUMVmezRvOROJ%2BwjuOS%2BGdV9J7zMTzZIbE11bAqPPZBNy6M9VC%2BycT6HTnsznP8DZAwZuJR%2FRv8Iazs7S0DwcdyFCjqVyT20fg3Lg3DlFBiodSx%2Fdq%2F1UFFtX1NLl8HQF8fqifdhB%2BSTGxqFEgfB6zT3kwfrVdH8LbO6n3M08v%2B%2BbGBZUtRd3QPFaLUdvVsy5fh9ESeXZHoXZhWOqTVww86QgXuDEIvGz0%2F28Fgi1CKxVwVIxwOQU84Dyvp0vXPe8JpjV%2FPdie6y38ywsvyUEou4DmWwyq51CojLj%2B9kDHUnLeluNyclN9v6x%2FDz%2B9Ux7SusBl7v0HLzDFkaFaZIsrGYwfB3rK2F8WItSuZ7BhLwv%2Fy9Y9ySUeOrVpq7fPMiNK6a539sD3nwJpzkz38R38Mhqea3XdW5612xlN1l3qf7inqMF0eZdVZIrdD7FeYlLEq5a6JJQyFeZjCV%2FGn0KtSVVJsSCqiRf6o%2F%2Ff3mJSS1POxhZkBEpgZiyjelpqT6Z7VO0GU%2BMuA3iNW1birl11%2Bq%2FJOdg6RiSnqSQiazg5%2Fh%2By6znTSFPKZq7u8jAPbDkPofc4NIdHFzWJVBJuvdiZ1EupXcTZsXVLGdj%2FSBt3FFJOtH6EURI%2BHB6hMM6sx8QGOqUBwI8CkFEne%2BGM1Uz6hdvCju645Cbr8JQIoHAO%2BXCYt2njCsvWvRSE3FMk2c9KUFNv7GfYvIqJs4ekdskzcMJHZSHZcy%2BoCyP8m%2Fe3u5ekkSSClofql7IsKqo9rrn9COKCwI3IugLy1KYKRCGZgGl2sB5iUG8YYvGNuDkdvK0Bc3%2Fp51AbwpiDoS6oVAISlAN4kyi%2BQ%2BS7DdZrbG4TV0N81S1qwp1M&X-Amz-Signature=57d67c5b32c2aa375e25692d2ac2256ca5d668822485f6bb2cf22bc684c7bbd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XNSQ66T%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIDpS1NKdBmpY8VCDfnHL4rcy%2F4lDYKJgxtmi6grCK7n%2FAiEArSkIdO%2BqlOqI%2BrcbWmoOlilCeXIufLa8UR%2F%2FVoIZJEAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDPY5vgB0akR04m%2FjxircA1DUMVmezRvOROJ%2BwjuOS%2BGdV9J7zMTzZIbE11bAqPPZBNy6M9VC%2BycT6HTnsznP8DZAwZuJR%2FRv8Iazs7S0DwcdyFCjqVyT20fg3Lg3DlFBiodSx%2Fdq%2F1UFFtX1NLl8HQF8fqifdhB%2BSTGxqFEgfB6zT3kwfrVdH8LbO6n3M08v%2B%2BbGBZUtRd3QPFaLUdvVsy5fh9ESeXZHoXZhWOqTVww86QgXuDEIvGz0%2F28Fgi1CKxVwVIxwOQU84Dyvp0vXPe8JpjV%2FPdie6y38ywsvyUEou4DmWwyq51CojLj%2B9kDHUnLeluNyclN9v6x%2FDz%2B9Ux7SusBl7v0HLzDFkaFaZIsrGYwfB3rK2F8WItSuZ7BhLwv%2Fy9Y9ySUeOrVpq7fPMiNK6a539sD3nwJpzkz38R38Mhqea3XdW5612xlN1l3qf7inqMF0eZdVZIrdD7FeYlLEq5a6JJQyFeZjCV%2FGn0KtSVVJsSCqiRf6o%2F%2Ff3mJSS1POxhZkBEpgZiyjelpqT6Z7VO0GU%2BMuA3iNW1birl11%2Bq%2FJOdg6RiSnqSQiazg5%2Fh%2By6znTSFPKZq7u8jAPbDkPofc4NIdHFzWJVBJuvdiZ1EupXcTZsXVLGdj%2FSBt3FFJOtH6EURI%2BHB6hMM6sx8QGOqUBwI8CkFEne%2BGM1Uz6hdvCju645Cbr8JQIoHAO%2BXCYt2njCsvWvRSE3FMk2c9KUFNv7GfYvIqJs4ekdskzcMJHZSHZcy%2BoCyP8m%2Fe3u5ekkSSClofql7IsKqo9rrn9COKCwI3IugLy1KYKRCGZgGl2sB5iUG8YYvGNuDkdvK0Bc3%2Fp51AbwpiDoS6oVAISlAN4kyi%2BQ%2BS7DdZrbG4TV0N81S1qwp1M&X-Amz-Signature=57288d4b1000d556c0fcbb49e432aa964b80ee9f8fae1e5497caa2c8a3f050c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XNSQ66T%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIDpS1NKdBmpY8VCDfnHL4rcy%2F4lDYKJgxtmi6grCK7n%2FAiEArSkIdO%2BqlOqI%2BrcbWmoOlilCeXIufLa8UR%2F%2FVoIZJEAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDPY5vgB0akR04m%2FjxircA1DUMVmezRvOROJ%2BwjuOS%2BGdV9J7zMTzZIbE11bAqPPZBNy6M9VC%2BycT6HTnsznP8DZAwZuJR%2FRv8Iazs7S0DwcdyFCjqVyT20fg3Lg3DlFBiodSx%2Fdq%2F1UFFtX1NLl8HQF8fqifdhB%2BSTGxqFEgfB6zT3kwfrVdH8LbO6n3M08v%2B%2BbGBZUtRd3QPFaLUdvVsy5fh9ESeXZHoXZhWOqTVww86QgXuDEIvGz0%2F28Fgi1CKxVwVIxwOQU84Dyvp0vXPe8JpjV%2FPdie6y38ywsvyUEou4DmWwyq51CojLj%2B9kDHUnLeluNyclN9v6x%2FDz%2B9Ux7SusBl7v0HLzDFkaFaZIsrGYwfB3rK2F8WItSuZ7BhLwv%2Fy9Y9ySUeOrVpq7fPMiNK6a539sD3nwJpzkz38R38Mhqea3XdW5612xlN1l3qf7inqMF0eZdVZIrdD7FeYlLEq5a6JJQyFeZjCV%2FGn0KtSVVJsSCqiRf6o%2F%2Ff3mJSS1POxhZkBEpgZiyjelpqT6Z7VO0GU%2BMuA3iNW1birl11%2Bq%2FJOdg6RiSnqSQiazg5%2Fh%2By6znTSFPKZq7u8jAPbDkPofc4NIdHFzWJVBJuvdiZ1EupXcTZsXVLGdj%2FSBt3FFJOtH6EURI%2BHB6hMM6sx8QGOqUBwI8CkFEne%2BGM1Uz6hdvCju645Cbr8JQIoHAO%2BXCYt2njCsvWvRSE3FMk2c9KUFNv7GfYvIqJs4ekdskzcMJHZSHZcy%2BoCyP8m%2Fe3u5ekkSSClofql7IsKqo9rrn9COKCwI3IugLy1KYKRCGZgGl2sB5iUG8YYvGNuDkdvK0Bc3%2Fp51AbwpiDoS6oVAISlAN4kyi%2BQ%2BS7DdZrbG4TV0N81S1qwp1M&X-Amz-Signature=b4d4b8cec7fd9a376d59aa847a610a48f123f6ec52eda128eebd0b40ad8b88c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
