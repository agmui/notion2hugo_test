---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-08-02T10:06:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-08-02T10:06:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM2FYU6T%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOTCueBJJYfn8wiGzw5Ep3lMZ887rsgd%2BgXZvxY35EmAIhAOjFyI7RhT3RHJv0l%2Boo5TppJEbB68YCZM0JvpksGDfWKv8DCBMQABoMNjM3NDIzMTgzODA1IgxkXU%2BgvjxokGdF4q4q3ANOtSDOCfOtKDQiTI%2BVRGCV1EdeN4lravcwViF3Lnc2EtTLuBSqL8StI0Tzc%2BhST7qrX58KwJE6D7jTKvbf97S3quPa3UyRPkvdruE8uBhU5gNuouuFfA3ev5zmythLYVtgLzvZIYMB%2B0J%2B4MH8GUjw8s93RYliyC3IRmO%2FNgOJbImNoLEYc4QLRqIYYcaz0iMBNO7C7ZzEiyQzHHPysF3%2FJVnimBdX1bj%2BMsjvC0ntAAgdo8cZT%2B0wkuHh4UwQh3aPCa8vMZgg%2B471CFrpS2oWF%2FL0PPXNdSKGZtyWq6lYaBp0ve5oYy1pg0z9zghU98jC0S3HPz6528i8kuTnBm9qnvYzsEnGoDmsjUtFF3YV568KZ884ppBlqgi7zURzqWj79XlJau%2BUxYX13%2FN3NEF0sr%2FIbVl9RAd4Ewq%2BDaiWUmhsirFZYjbg8NfBcEZCVMVIV3Wj94xLND5rIbN%2FqomXrPTZbXEqBDYpZ1oio7sfDvitncRRChoKAfCHwsNEYXkdWuOspePAJt4QCjIRCBzNV8zytPxduOsIUQdLZLfknzKQ7S%2FrrdFVwtl3x1IrEJ1yyebJyoES%2FnLrYYnpxX6k0qs8M2UlA57MEXFBZ4fBDjupz5yAgCh00sK4oDDbx7fEBjqkAY1tevpiY7nvi2hklIrESAc6YxSafOwkozrfT6heKw3zx2LQH7MiREcx5J%2FFCXOMXuBe5uf5rLYqwUCpXJB%2BDlhGMzdS7MPRx%2Bq5ldQDelWo0GDQDmjswWDhl2GXNp6cMU1nxHUJpq1Ih0qg2LF8FkURfcOuhSAo5MH9yNBTx4Bz7Whp%2BBm6rIo0bFWOlzYYUZv0WJ8lU80NU12Pj77yHXUnwbXe&X-Amz-Signature=4ee7256387bcadb6bf0691d155b646e5f2ce4f529dc3c534c4a0943de9e46e65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUWPTUII%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKgeT199kf2AF6jrDKmCB55fp%2Fyg%2BaXi0VeHzoyogJcwIgbFk9RQb%2B2KzZOFIQNjybe%2BhfX6XEoRy8r04%2FM6EBH9kq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDDQfpZZ9s5gkzxH77CrcA9tXd%2B1dPALARDkM%2FjQLxMLjkwy6Tv%2BDLDYRizcsXi%2FAwr3jBnRIgqt%2FOIDVyMsviQQUiEsDRI%2BFPxLtbKnLC8eBq2Qyy7NFNINs%2FWnwpN1%2Bg7bcnUUPI3yCQhMJuToqqsDcjFWHX%2BlNTxPO4qhQ%2BR3WTlpdj%2FNrNMZDjid9xEzFmZXWqtLvj8mnDpaHMwa0jNv6oXKBk%2FVfpOM79T%2FX9T18SJoPI7JRi%2FcTz%2Bcv7hMny9J1HzJM3awsoJNdkdKGl91ZOXk%2Bfi0XhMGtS2qzJxMhKreNu4AKwlT6aE4TN7G5%2FmcrOfyqrhDwTTcbW5NCKgrNXcs3bzxiwTp%2FkNEXVZXVEoNAvgYymLi5jt1ljQcKR4eMO%2BTvIqFTtpd9L45IibDRhldvfeSxfYudnyc9sXRQJx4FTg9NQJh%2BoOHT9RvivtqUsoSbwTxzGqqGwrR6mFw5qAMlBli%2Bj92Pz1GqXyFSmVivFyh5g3kbNQdlYxryAe4D1Uzd4RR5gHtgz8SCrb4%2FPF7xhgpsLQRcdaHAAf7mlQ7llKa%2FjdQBP87oFi%2FF9617YDVPPXaavBsdCO0AFfDmMD4GU%2FzCDFZJFJq%2Fvnj756JC8CuK%2BPnr7gPNbiGFWViEUs8BNxAMSMNvMNSJuMQGOqUB7tGlYEIsheCcdRie1HBnqxAeDuWuZ79lnXYev2lni5MQQo8mz%2FJtAj%2BE5xgTvfKG4AeOTkQD%2FgWz%2BRUIG5psk%2Bu0D%2FkVH3XIgKfVAkS0hXx2y1uMOqrTowSpir5Sls2IpWcVLeM5ZKMblWREB5QPu4mCO2l%2BBGZO%2Fry0tazYMHQ7hND07meM0QvigZE7vp3mm%2BuGY0rIjoMqIC3gvtfmnznCnmBf&X-Amz-Signature=7d60672bf98d47194cdef2b66b99d7913195af0ca3ebe6f4e15e4039f9d2e226&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUWPTUII%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKgeT199kf2AF6jrDKmCB55fp%2Fyg%2BaXi0VeHzoyogJcwIgbFk9RQb%2B2KzZOFIQNjybe%2BhfX6XEoRy8r04%2FM6EBH9kq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDDQfpZZ9s5gkzxH77CrcA9tXd%2B1dPALARDkM%2FjQLxMLjkwy6Tv%2BDLDYRizcsXi%2FAwr3jBnRIgqt%2FOIDVyMsviQQUiEsDRI%2BFPxLtbKnLC8eBq2Qyy7NFNINs%2FWnwpN1%2Bg7bcnUUPI3yCQhMJuToqqsDcjFWHX%2BlNTxPO4qhQ%2BR3WTlpdj%2FNrNMZDjid9xEzFmZXWqtLvj8mnDpaHMwa0jNv6oXKBk%2FVfpOM79T%2FX9T18SJoPI7JRi%2FcTz%2Bcv7hMny9J1HzJM3awsoJNdkdKGl91ZOXk%2Bfi0XhMGtS2qzJxMhKreNu4AKwlT6aE4TN7G5%2FmcrOfyqrhDwTTcbW5NCKgrNXcs3bzxiwTp%2FkNEXVZXVEoNAvgYymLi5jt1ljQcKR4eMO%2BTvIqFTtpd9L45IibDRhldvfeSxfYudnyc9sXRQJx4FTg9NQJh%2BoOHT9RvivtqUsoSbwTxzGqqGwrR6mFw5qAMlBli%2Bj92Pz1GqXyFSmVivFyh5g3kbNQdlYxryAe4D1Uzd4RR5gHtgz8SCrb4%2FPF7xhgpsLQRcdaHAAf7mlQ7llKa%2FjdQBP87oFi%2FF9617YDVPPXaavBsdCO0AFfDmMD4GU%2FzCDFZJFJq%2Fvnj756JC8CuK%2BPnr7gPNbiGFWViEUs8BNxAMSMNvMNSJuMQGOqUB7tGlYEIsheCcdRie1HBnqxAeDuWuZ79lnXYev2lni5MQQo8mz%2FJtAj%2BE5xgTvfKG4AeOTkQD%2FgWz%2BRUIG5psk%2Bu0D%2FkVH3XIgKfVAkS0hXx2y1uMOqrTowSpir5Sls2IpWcVLeM5ZKMblWREB5QPu4mCO2l%2BBGZO%2Fry0tazYMHQ7hND07meM0QvigZE7vp3mm%2BuGY0rIjoMqIC3gvtfmnznCnmBf&X-Amz-Signature=114d7bff71a5dc94c1ae18fcca1b9e90c4db9f39acd98f3500371e73b6cf2660&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUWPTUII%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKgeT199kf2AF6jrDKmCB55fp%2Fyg%2BaXi0VeHzoyogJcwIgbFk9RQb%2B2KzZOFIQNjybe%2BhfX6XEoRy8r04%2FM6EBH9kq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDDQfpZZ9s5gkzxH77CrcA9tXd%2B1dPALARDkM%2FjQLxMLjkwy6Tv%2BDLDYRizcsXi%2FAwr3jBnRIgqt%2FOIDVyMsviQQUiEsDRI%2BFPxLtbKnLC8eBq2Qyy7NFNINs%2FWnwpN1%2Bg7bcnUUPI3yCQhMJuToqqsDcjFWHX%2BlNTxPO4qhQ%2BR3WTlpdj%2FNrNMZDjid9xEzFmZXWqtLvj8mnDpaHMwa0jNv6oXKBk%2FVfpOM79T%2FX9T18SJoPI7JRi%2FcTz%2Bcv7hMny9J1HzJM3awsoJNdkdKGl91ZOXk%2Bfi0XhMGtS2qzJxMhKreNu4AKwlT6aE4TN7G5%2FmcrOfyqrhDwTTcbW5NCKgrNXcs3bzxiwTp%2FkNEXVZXVEoNAvgYymLi5jt1ljQcKR4eMO%2BTvIqFTtpd9L45IibDRhldvfeSxfYudnyc9sXRQJx4FTg9NQJh%2BoOHT9RvivtqUsoSbwTxzGqqGwrR6mFw5qAMlBli%2Bj92Pz1GqXyFSmVivFyh5g3kbNQdlYxryAe4D1Uzd4RR5gHtgz8SCrb4%2FPF7xhgpsLQRcdaHAAf7mlQ7llKa%2FjdQBP87oFi%2FF9617YDVPPXaavBsdCO0AFfDmMD4GU%2FzCDFZJFJq%2Fvnj756JC8CuK%2BPnr7gPNbiGFWViEUs8BNxAMSMNvMNSJuMQGOqUB7tGlYEIsheCcdRie1HBnqxAeDuWuZ79lnXYev2lni5MQQo8mz%2FJtAj%2BE5xgTvfKG4AeOTkQD%2FgWz%2BRUIG5psk%2Bu0D%2FkVH3XIgKfVAkS0hXx2y1uMOqrTowSpir5Sls2IpWcVLeM5ZKMblWREB5QPu4mCO2l%2BBGZO%2Fry0tazYMHQ7hND07meM0QvigZE7vp3mm%2BuGY0rIjoMqIC3gvtfmnznCnmBf&X-Amz-Signature=1e9af87cd50b8170368c3c30bc63c42dd791efc153c5955da1f8e755b8c88c7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUWPTUII%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKgeT199kf2AF6jrDKmCB55fp%2Fyg%2BaXi0VeHzoyogJcwIgbFk9RQb%2B2KzZOFIQNjybe%2BhfX6XEoRy8r04%2FM6EBH9kq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDDQfpZZ9s5gkzxH77CrcA9tXd%2B1dPALARDkM%2FjQLxMLjkwy6Tv%2BDLDYRizcsXi%2FAwr3jBnRIgqt%2FOIDVyMsviQQUiEsDRI%2BFPxLtbKnLC8eBq2Qyy7NFNINs%2FWnwpN1%2Bg7bcnUUPI3yCQhMJuToqqsDcjFWHX%2BlNTxPO4qhQ%2BR3WTlpdj%2FNrNMZDjid9xEzFmZXWqtLvj8mnDpaHMwa0jNv6oXKBk%2FVfpOM79T%2FX9T18SJoPI7JRi%2FcTz%2Bcv7hMny9J1HzJM3awsoJNdkdKGl91ZOXk%2Bfi0XhMGtS2qzJxMhKreNu4AKwlT6aE4TN7G5%2FmcrOfyqrhDwTTcbW5NCKgrNXcs3bzxiwTp%2FkNEXVZXVEoNAvgYymLi5jt1ljQcKR4eMO%2BTvIqFTtpd9L45IibDRhldvfeSxfYudnyc9sXRQJx4FTg9NQJh%2BoOHT9RvivtqUsoSbwTxzGqqGwrR6mFw5qAMlBli%2Bj92Pz1GqXyFSmVivFyh5g3kbNQdlYxryAe4D1Uzd4RR5gHtgz8SCrb4%2FPF7xhgpsLQRcdaHAAf7mlQ7llKa%2FjdQBP87oFi%2FF9617YDVPPXaavBsdCO0AFfDmMD4GU%2FzCDFZJFJq%2Fvnj756JC8CuK%2BPnr7gPNbiGFWViEUs8BNxAMSMNvMNSJuMQGOqUB7tGlYEIsheCcdRie1HBnqxAeDuWuZ79lnXYev2lni5MQQo8mz%2FJtAj%2BE5xgTvfKG4AeOTkQD%2FgWz%2BRUIG5psk%2Bu0D%2FkVH3XIgKfVAkS0hXx2y1uMOqrTowSpir5Sls2IpWcVLeM5ZKMblWREB5QPu4mCO2l%2BBGZO%2Fry0tazYMHQ7hND07meM0QvigZE7vp3mm%2BuGY0rIjoMqIC3gvtfmnznCnmBf&X-Amz-Signature=7695705fbec0db5ee982edf908ac6359ba3641e91872aa10f8a2c1ff39f60fe3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUWPTUII%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKgeT199kf2AF6jrDKmCB55fp%2Fyg%2BaXi0VeHzoyogJcwIgbFk9RQb%2B2KzZOFIQNjybe%2BhfX6XEoRy8r04%2FM6EBH9kq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDDQfpZZ9s5gkzxH77CrcA9tXd%2B1dPALARDkM%2FjQLxMLjkwy6Tv%2BDLDYRizcsXi%2FAwr3jBnRIgqt%2FOIDVyMsviQQUiEsDRI%2BFPxLtbKnLC8eBq2Qyy7NFNINs%2FWnwpN1%2Bg7bcnUUPI3yCQhMJuToqqsDcjFWHX%2BlNTxPO4qhQ%2BR3WTlpdj%2FNrNMZDjid9xEzFmZXWqtLvj8mnDpaHMwa0jNv6oXKBk%2FVfpOM79T%2FX9T18SJoPI7JRi%2FcTz%2Bcv7hMny9J1HzJM3awsoJNdkdKGl91ZOXk%2Bfi0XhMGtS2qzJxMhKreNu4AKwlT6aE4TN7G5%2FmcrOfyqrhDwTTcbW5NCKgrNXcs3bzxiwTp%2FkNEXVZXVEoNAvgYymLi5jt1ljQcKR4eMO%2BTvIqFTtpd9L45IibDRhldvfeSxfYudnyc9sXRQJx4FTg9NQJh%2BoOHT9RvivtqUsoSbwTxzGqqGwrR6mFw5qAMlBli%2Bj92Pz1GqXyFSmVivFyh5g3kbNQdlYxryAe4D1Uzd4RR5gHtgz8SCrb4%2FPF7xhgpsLQRcdaHAAf7mlQ7llKa%2FjdQBP87oFi%2FF9617YDVPPXaavBsdCO0AFfDmMD4GU%2FzCDFZJFJq%2Fvnj756JC8CuK%2BPnr7gPNbiGFWViEUs8BNxAMSMNvMNSJuMQGOqUB7tGlYEIsheCcdRie1HBnqxAeDuWuZ79lnXYev2lni5MQQo8mz%2FJtAj%2BE5xgTvfKG4AeOTkQD%2FgWz%2BRUIG5psk%2Bu0D%2FkVH3XIgKfVAkS0hXx2y1uMOqrTowSpir5Sls2IpWcVLeM5ZKMblWREB5QPu4mCO2l%2BBGZO%2Fry0tazYMHQ7hND07meM0QvigZE7vp3mm%2BuGY0rIjoMqIC3gvtfmnznCnmBf&X-Amz-Signature=417a2005dad4598959e6568f45dff7accaa0c71a0fce8738fa125a40ee8ea72c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUWPTUII%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKgeT199kf2AF6jrDKmCB55fp%2Fyg%2BaXi0VeHzoyogJcwIgbFk9RQb%2B2KzZOFIQNjybe%2BhfX6XEoRy8r04%2FM6EBH9kq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDDQfpZZ9s5gkzxH77CrcA9tXd%2B1dPALARDkM%2FjQLxMLjkwy6Tv%2BDLDYRizcsXi%2FAwr3jBnRIgqt%2FOIDVyMsviQQUiEsDRI%2BFPxLtbKnLC8eBq2Qyy7NFNINs%2FWnwpN1%2Bg7bcnUUPI3yCQhMJuToqqsDcjFWHX%2BlNTxPO4qhQ%2BR3WTlpdj%2FNrNMZDjid9xEzFmZXWqtLvj8mnDpaHMwa0jNv6oXKBk%2FVfpOM79T%2FX9T18SJoPI7JRi%2FcTz%2Bcv7hMny9J1HzJM3awsoJNdkdKGl91ZOXk%2Bfi0XhMGtS2qzJxMhKreNu4AKwlT6aE4TN7G5%2FmcrOfyqrhDwTTcbW5NCKgrNXcs3bzxiwTp%2FkNEXVZXVEoNAvgYymLi5jt1ljQcKR4eMO%2BTvIqFTtpd9L45IibDRhldvfeSxfYudnyc9sXRQJx4FTg9NQJh%2BoOHT9RvivtqUsoSbwTxzGqqGwrR6mFw5qAMlBli%2Bj92Pz1GqXyFSmVivFyh5g3kbNQdlYxryAe4D1Uzd4RR5gHtgz8SCrb4%2FPF7xhgpsLQRcdaHAAf7mlQ7llKa%2FjdQBP87oFi%2FF9617YDVPPXaavBsdCO0AFfDmMD4GU%2FzCDFZJFJq%2Fvnj756JC8CuK%2BPnr7gPNbiGFWViEUs8BNxAMSMNvMNSJuMQGOqUB7tGlYEIsheCcdRie1HBnqxAeDuWuZ79lnXYev2lni5MQQo8mz%2FJtAj%2BE5xgTvfKG4AeOTkQD%2FgWz%2BRUIG5psk%2Bu0D%2FkVH3XIgKfVAkS0hXx2y1uMOqrTowSpir5Sls2IpWcVLeM5ZKMblWREB5QPu4mCO2l%2BBGZO%2Fry0tazYMHQ7hND07meM0QvigZE7vp3mm%2BuGY0rIjoMqIC3gvtfmnznCnmBf&X-Amz-Signature=2742ffb23510420e3ebf8209c69c90d57a2fc613e4105483b6b0f013d415d618&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUWPTUII%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKgeT199kf2AF6jrDKmCB55fp%2Fyg%2BaXi0VeHzoyogJcwIgbFk9RQb%2B2KzZOFIQNjybe%2BhfX6XEoRy8r04%2FM6EBH9kq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDDQfpZZ9s5gkzxH77CrcA9tXd%2B1dPALARDkM%2FjQLxMLjkwy6Tv%2BDLDYRizcsXi%2FAwr3jBnRIgqt%2FOIDVyMsviQQUiEsDRI%2BFPxLtbKnLC8eBq2Qyy7NFNINs%2FWnwpN1%2Bg7bcnUUPI3yCQhMJuToqqsDcjFWHX%2BlNTxPO4qhQ%2BR3WTlpdj%2FNrNMZDjid9xEzFmZXWqtLvj8mnDpaHMwa0jNv6oXKBk%2FVfpOM79T%2FX9T18SJoPI7JRi%2FcTz%2Bcv7hMny9J1HzJM3awsoJNdkdKGl91ZOXk%2Bfi0XhMGtS2qzJxMhKreNu4AKwlT6aE4TN7G5%2FmcrOfyqrhDwTTcbW5NCKgrNXcs3bzxiwTp%2FkNEXVZXVEoNAvgYymLi5jt1ljQcKR4eMO%2BTvIqFTtpd9L45IibDRhldvfeSxfYudnyc9sXRQJx4FTg9NQJh%2BoOHT9RvivtqUsoSbwTxzGqqGwrR6mFw5qAMlBli%2Bj92Pz1GqXyFSmVivFyh5g3kbNQdlYxryAe4D1Uzd4RR5gHtgz8SCrb4%2FPF7xhgpsLQRcdaHAAf7mlQ7llKa%2FjdQBP87oFi%2FF9617YDVPPXaavBsdCO0AFfDmMD4GU%2FzCDFZJFJq%2Fvnj756JC8CuK%2BPnr7gPNbiGFWViEUs8BNxAMSMNvMNSJuMQGOqUB7tGlYEIsheCcdRie1HBnqxAeDuWuZ79lnXYev2lni5MQQo8mz%2FJtAj%2BE5xgTvfKG4AeOTkQD%2FgWz%2BRUIG5psk%2Bu0D%2FkVH3XIgKfVAkS0hXx2y1uMOqrTowSpir5Sls2IpWcVLeM5ZKMblWREB5QPu4mCO2l%2BBGZO%2Fry0tazYMHQ7hND07meM0QvigZE7vp3mm%2BuGY0rIjoMqIC3gvtfmnznCnmBf&X-Amz-Signature=f480d6e980f5139fe56aa8ca3e3c395176eea8df721687e8530bbf943ef92c6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUWPTUII%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKgeT199kf2AF6jrDKmCB55fp%2Fyg%2BaXi0VeHzoyogJcwIgbFk9RQb%2B2KzZOFIQNjybe%2BhfX6XEoRy8r04%2FM6EBH9kq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDDQfpZZ9s5gkzxH77CrcA9tXd%2B1dPALARDkM%2FjQLxMLjkwy6Tv%2BDLDYRizcsXi%2FAwr3jBnRIgqt%2FOIDVyMsviQQUiEsDRI%2BFPxLtbKnLC8eBq2Qyy7NFNINs%2FWnwpN1%2Bg7bcnUUPI3yCQhMJuToqqsDcjFWHX%2BlNTxPO4qhQ%2BR3WTlpdj%2FNrNMZDjid9xEzFmZXWqtLvj8mnDpaHMwa0jNv6oXKBk%2FVfpOM79T%2FX9T18SJoPI7JRi%2FcTz%2Bcv7hMny9J1HzJM3awsoJNdkdKGl91ZOXk%2Bfi0XhMGtS2qzJxMhKreNu4AKwlT6aE4TN7G5%2FmcrOfyqrhDwTTcbW5NCKgrNXcs3bzxiwTp%2FkNEXVZXVEoNAvgYymLi5jt1ljQcKR4eMO%2BTvIqFTtpd9L45IibDRhldvfeSxfYudnyc9sXRQJx4FTg9NQJh%2BoOHT9RvivtqUsoSbwTxzGqqGwrR6mFw5qAMlBli%2Bj92Pz1GqXyFSmVivFyh5g3kbNQdlYxryAe4D1Uzd4RR5gHtgz8SCrb4%2FPF7xhgpsLQRcdaHAAf7mlQ7llKa%2FjdQBP87oFi%2FF9617YDVPPXaavBsdCO0AFfDmMD4GU%2FzCDFZJFJq%2Fvnj756JC8CuK%2BPnr7gPNbiGFWViEUs8BNxAMSMNvMNSJuMQGOqUB7tGlYEIsheCcdRie1HBnqxAeDuWuZ79lnXYev2lni5MQQo8mz%2FJtAj%2BE5xgTvfKG4AeOTkQD%2FgWz%2BRUIG5psk%2Bu0D%2FkVH3XIgKfVAkS0hXx2y1uMOqrTowSpir5Sls2IpWcVLeM5ZKMblWREB5QPu4mCO2l%2BBGZO%2Fry0tazYMHQ7hND07meM0QvigZE7vp3mm%2BuGY0rIjoMqIC3gvtfmnznCnmBf&X-Amz-Signature=62ba93f8d924ef1c97e3f426d0bcc6ae00d4e1e8083a3227ec061719554d38ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUWPTUII%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKgeT199kf2AF6jrDKmCB55fp%2Fyg%2BaXi0VeHzoyogJcwIgbFk9RQb%2B2KzZOFIQNjybe%2BhfX6XEoRy8r04%2FM6EBH9kq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDDQfpZZ9s5gkzxH77CrcA9tXd%2B1dPALARDkM%2FjQLxMLjkwy6Tv%2BDLDYRizcsXi%2FAwr3jBnRIgqt%2FOIDVyMsviQQUiEsDRI%2BFPxLtbKnLC8eBq2Qyy7NFNINs%2FWnwpN1%2Bg7bcnUUPI3yCQhMJuToqqsDcjFWHX%2BlNTxPO4qhQ%2BR3WTlpdj%2FNrNMZDjid9xEzFmZXWqtLvj8mnDpaHMwa0jNv6oXKBk%2FVfpOM79T%2FX9T18SJoPI7JRi%2FcTz%2Bcv7hMny9J1HzJM3awsoJNdkdKGl91ZOXk%2Bfi0XhMGtS2qzJxMhKreNu4AKwlT6aE4TN7G5%2FmcrOfyqrhDwTTcbW5NCKgrNXcs3bzxiwTp%2FkNEXVZXVEoNAvgYymLi5jt1ljQcKR4eMO%2BTvIqFTtpd9L45IibDRhldvfeSxfYudnyc9sXRQJx4FTg9NQJh%2BoOHT9RvivtqUsoSbwTxzGqqGwrR6mFw5qAMlBli%2Bj92Pz1GqXyFSmVivFyh5g3kbNQdlYxryAe4D1Uzd4RR5gHtgz8SCrb4%2FPF7xhgpsLQRcdaHAAf7mlQ7llKa%2FjdQBP87oFi%2FF9617YDVPPXaavBsdCO0AFfDmMD4GU%2FzCDFZJFJq%2Fvnj756JC8CuK%2BPnr7gPNbiGFWViEUs8BNxAMSMNvMNSJuMQGOqUB7tGlYEIsheCcdRie1HBnqxAeDuWuZ79lnXYev2lni5MQQo8mz%2FJtAj%2BE5xgTvfKG4AeOTkQD%2FgWz%2BRUIG5psk%2Bu0D%2FkVH3XIgKfVAkS0hXx2y1uMOqrTowSpir5Sls2IpWcVLeM5ZKMblWREB5QPu4mCO2l%2BBGZO%2Fry0tazYMHQ7hND07meM0QvigZE7vp3mm%2BuGY0rIjoMqIC3gvtfmnznCnmBf&X-Amz-Signature=c024d28d5df671e776e944bd0067b51e52f30e344f22e1b6f1c7155e701569e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUWPTUII%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKgeT199kf2AF6jrDKmCB55fp%2Fyg%2BaXi0VeHzoyogJcwIgbFk9RQb%2B2KzZOFIQNjybe%2BhfX6XEoRy8r04%2FM6EBH9kq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDDQfpZZ9s5gkzxH77CrcA9tXd%2B1dPALARDkM%2FjQLxMLjkwy6Tv%2BDLDYRizcsXi%2FAwr3jBnRIgqt%2FOIDVyMsviQQUiEsDRI%2BFPxLtbKnLC8eBq2Qyy7NFNINs%2FWnwpN1%2Bg7bcnUUPI3yCQhMJuToqqsDcjFWHX%2BlNTxPO4qhQ%2BR3WTlpdj%2FNrNMZDjid9xEzFmZXWqtLvj8mnDpaHMwa0jNv6oXKBk%2FVfpOM79T%2FX9T18SJoPI7JRi%2FcTz%2Bcv7hMny9J1HzJM3awsoJNdkdKGl91ZOXk%2Bfi0XhMGtS2qzJxMhKreNu4AKwlT6aE4TN7G5%2FmcrOfyqrhDwTTcbW5NCKgrNXcs3bzxiwTp%2FkNEXVZXVEoNAvgYymLi5jt1ljQcKR4eMO%2BTvIqFTtpd9L45IibDRhldvfeSxfYudnyc9sXRQJx4FTg9NQJh%2BoOHT9RvivtqUsoSbwTxzGqqGwrR6mFw5qAMlBli%2Bj92Pz1GqXyFSmVivFyh5g3kbNQdlYxryAe4D1Uzd4RR5gHtgz8SCrb4%2FPF7xhgpsLQRcdaHAAf7mlQ7llKa%2FjdQBP87oFi%2FF9617YDVPPXaavBsdCO0AFfDmMD4GU%2FzCDFZJFJq%2Fvnj756JC8CuK%2BPnr7gPNbiGFWViEUs8BNxAMSMNvMNSJuMQGOqUB7tGlYEIsheCcdRie1HBnqxAeDuWuZ79lnXYev2lni5MQQo8mz%2FJtAj%2BE5xgTvfKG4AeOTkQD%2FgWz%2BRUIG5psk%2Bu0D%2FkVH3XIgKfVAkS0hXx2y1uMOqrTowSpir5Sls2IpWcVLeM5ZKMblWREB5QPu4mCO2l%2BBGZO%2Fry0tazYMHQ7hND07meM0QvigZE7vp3mm%2BuGY0rIjoMqIC3gvtfmnznCnmBf&X-Amz-Signature=965618bc5e9cb5a539cb86f4e0479893401f9d081f00ab7c6cceca1269e1a154&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
