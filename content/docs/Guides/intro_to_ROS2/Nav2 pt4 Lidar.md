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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OOVJITA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCID%2BjQNDApReOlOH%2FYYgrZhE10FKbvrqVyO7e9LEG5SwsAh8Z0mUDdSvCAXegViozSVvR9mCRJWY9xKw%2Fo821kiR6KogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQVprYNWQmNB5FNx8q3ANYAotemvX9jYb%2FgXkcIaPr0%2BKh18H8f%2BZUAXJEiK7HTHW9qqUsRFgr0DqYNHHdsSe2vDaLDIKCbKf3ZmZhE%2Bwao2oxj6RwOTVcJlYqU2PAo1zRCsalScTqTIHQVbrUAonr0eRQxckugE1cxb0KA8yvuD9wVrGLc9vze5qXXa10nfwKaBu1%2BhuTRnQiIh%2FJmgbojTxG3QM3u9HYRlfLeORw5A4YrK1%2B9iGED5qWzTOd%2FyrhWjv4yfHNILk0LBLt51MdKi96Zk%2FklnNxuw15Ht9QSFRSMWcJhLWYLNFqE2xNl4ihQriZ3g5UUmjIAeYozyyNH2W787lj4u0%2BoYyRPjs68FCM129p%2F7kpo93jKehyusVv5pBD2t6OLwOghdXjkOQXdeLtHbg%2FvW9Biw3G9OHMGC%2FFmgUjIJBk0dAOY9yknOsbKLWrFb6mS6h9%2F08U8WUyaZffGdSsZHs11iM3WfB50uascT6OZJt%2BsD4L91469AHiYwv6sIRO1NSZqUloNYkQQxDFF1Fou4hCF0tbKfSHPZvyAZhw7545fdbeoMpkVJ9h%2BUKuaT2xyshBmP0ldTywf9OWg%2FFetHWq3vEERzN1hiV5jsbLdr6JKiAXSCddehdzUEnKGSF4txuckjCo9eDEBjqnAQPVrw7SHov4LbJO3BGZGvkhwBVBBBetkM63YWVnQwjeJ1kD45J3CoGCva8pMr%2BsFPNwOOM7JChb7pgF9fgHqq0sT8cLvEZ%2FCAgU7FGdDPvefG8eaV3kT99hFtW1m64dEq3Ek0Prw2iG%2BboEzu2nGEO38KoUzABU%2FCb4RdFPcxhi2%2FVutBgX8byGIxGwa19bzw4N4awDEUFDe6659ydVfliw7VhvWYDS&X-Amz-Signature=0a5ff527b57d261c5a49f8d546f3c68b3271071b4eee80f53e2a11648557b281&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2ORP7SU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHH%2BHnnPLh3%2FXWwWnm%2BS6dlpnuv%2FNMq3uyLHcl%2BoAB%2FDAiBW4Mjz55T2MQoKr7Ncjayqq4HKV8J7qnl9JkOmY3YTuiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxSrR7xjhiRHGS4LPKtwD8BKnrmRgZ8ZoP5hy8t70CAO6A%2BrDCcd1O22YOUz5uq5O2EdUvJtO1lKXsCqArLmN49ws6pEy4X61JctqzLAmR8YIFQuNCq9wdHxMJjA7tMbjZ3YwBwFms8lrXYYACkVs2QIK1Z1md9kPSkP%2FDcsS3gNHS97DI%2BTOCk%2Byt6smQZEyAaSGvnjmj6ESUpAXFfMCukJrw9LFrvAWgzaYTbaziXblhBqzBD2yesGPzJMlIkxLzXD6wC%2BVmGfJgQDEIlI6rxAqCKyQIQzoUNeTElojRPlHmjLLPOqUnkY%2FqpZN654cdRsH4p%2F%2BCCDJl9%2BS0Ha1LPRwebtonbEhrGT1wmUswgZxD%2BMblvEWCzZyHgI72cqf7PRGx3TeU4fNuDdoI%2FT%2F4pgIIYKD69BnZX9oNtOoEXSDxsAJU6%2BNvzit5povyVyQMcdl8TH0oB0dqW9PE%2FxKZxa%2FGojUWbH76ZmlKEucPGvzWMD5oxYJ1BRxyDszc6vOn%2FaG8haECechCDNXCWxsVy1991Xmcvt9Dep%2B%2F3PYc2fkzh6ulpVUB2X%2FP5b4IfyGp5g0OnuSip%2B01%2BsBINPKxQSp0w01NxUqEEg63CMwp0v5zeVEmxI21gsQRYFKLXEmh01rMtmHiZrRYdYw%2F%2FXgxAY6pgFtNoZ97X2YkiSGyu7xZW54%2FYFjx2IZW6YRfFAJXLSjS8NSQ8wiFu%2Bw8O3XKCv12uEvd9DA4tOyObHf8gOuf6U51mYF0gIwEUbxWiZWWz4LCWAqfUde0%2B7PkvrULAmQGYJfNcwGfkF%2BRpLOSwVbatw%2FWkQ3an4wsRlsKkHFgLmgaSIasfiz0z5bSffUXaVRPfG64nKhOtk%2Fw%2Fl8cF24G8bm2E9WoiIu&X-Amz-Signature=69c70ceb848fc5cded8dfc309c7c517c065e2fba1d40ae37e6e5ef244f894b5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2ORP7SU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHH%2BHnnPLh3%2FXWwWnm%2BS6dlpnuv%2FNMq3uyLHcl%2BoAB%2FDAiBW4Mjz55T2MQoKr7Ncjayqq4HKV8J7qnl9JkOmY3YTuiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxSrR7xjhiRHGS4LPKtwD8BKnrmRgZ8ZoP5hy8t70CAO6A%2BrDCcd1O22YOUz5uq5O2EdUvJtO1lKXsCqArLmN49ws6pEy4X61JctqzLAmR8YIFQuNCq9wdHxMJjA7tMbjZ3YwBwFms8lrXYYACkVs2QIK1Z1md9kPSkP%2FDcsS3gNHS97DI%2BTOCk%2Byt6smQZEyAaSGvnjmj6ESUpAXFfMCukJrw9LFrvAWgzaYTbaziXblhBqzBD2yesGPzJMlIkxLzXD6wC%2BVmGfJgQDEIlI6rxAqCKyQIQzoUNeTElojRPlHmjLLPOqUnkY%2FqpZN654cdRsH4p%2F%2BCCDJl9%2BS0Ha1LPRwebtonbEhrGT1wmUswgZxD%2BMblvEWCzZyHgI72cqf7PRGx3TeU4fNuDdoI%2FT%2F4pgIIYKD69BnZX9oNtOoEXSDxsAJU6%2BNvzit5povyVyQMcdl8TH0oB0dqW9PE%2FxKZxa%2FGojUWbH76ZmlKEucPGvzWMD5oxYJ1BRxyDszc6vOn%2FaG8haECechCDNXCWxsVy1991Xmcvt9Dep%2B%2F3PYc2fkzh6ulpVUB2X%2FP5b4IfyGp5g0OnuSip%2B01%2BsBINPKxQSp0w01NxUqEEg63CMwp0v5zeVEmxI21gsQRYFKLXEmh01rMtmHiZrRYdYw%2F%2FXgxAY6pgFtNoZ97X2YkiSGyu7xZW54%2FYFjx2IZW6YRfFAJXLSjS8NSQ8wiFu%2Bw8O3XKCv12uEvd9DA4tOyObHf8gOuf6U51mYF0gIwEUbxWiZWWz4LCWAqfUde0%2B7PkvrULAmQGYJfNcwGfkF%2BRpLOSwVbatw%2FWkQ3an4wsRlsKkHFgLmgaSIasfiz0z5bSffUXaVRPfG64nKhOtk%2Fw%2Fl8cF24G8bm2E9WoiIu&X-Amz-Signature=a44bb68835fa69fe89de91a5e78cf06f178f6a8d97fc8e0e4a417440fc6806f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2ORP7SU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHH%2BHnnPLh3%2FXWwWnm%2BS6dlpnuv%2FNMq3uyLHcl%2BoAB%2FDAiBW4Mjz55T2MQoKr7Ncjayqq4HKV8J7qnl9JkOmY3YTuiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxSrR7xjhiRHGS4LPKtwD8BKnrmRgZ8ZoP5hy8t70CAO6A%2BrDCcd1O22YOUz5uq5O2EdUvJtO1lKXsCqArLmN49ws6pEy4X61JctqzLAmR8YIFQuNCq9wdHxMJjA7tMbjZ3YwBwFms8lrXYYACkVs2QIK1Z1md9kPSkP%2FDcsS3gNHS97DI%2BTOCk%2Byt6smQZEyAaSGvnjmj6ESUpAXFfMCukJrw9LFrvAWgzaYTbaziXblhBqzBD2yesGPzJMlIkxLzXD6wC%2BVmGfJgQDEIlI6rxAqCKyQIQzoUNeTElojRPlHmjLLPOqUnkY%2FqpZN654cdRsH4p%2F%2BCCDJl9%2BS0Ha1LPRwebtonbEhrGT1wmUswgZxD%2BMblvEWCzZyHgI72cqf7PRGx3TeU4fNuDdoI%2FT%2F4pgIIYKD69BnZX9oNtOoEXSDxsAJU6%2BNvzit5povyVyQMcdl8TH0oB0dqW9PE%2FxKZxa%2FGojUWbH76ZmlKEucPGvzWMD5oxYJ1BRxyDszc6vOn%2FaG8haECechCDNXCWxsVy1991Xmcvt9Dep%2B%2F3PYc2fkzh6ulpVUB2X%2FP5b4IfyGp5g0OnuSip%2B01%2BsBINPKxQSp0w01NxUqEEg63CMwp0v5zeVEmxI21gsQRYFKLXEmh01rMtmHiZrRYdYw%2F%2FXgxAY6pgFtNoZ97X2YkiSGyu7xZW54%2FYFjx2IZW6YRfFAJXLSjS8NSQ8wiFu%2Bw8O3XKCv12uEvd9DA4tOyObHf8gOuf6U51mYF0gIwEUbxWiZWWz4LCWAqfUde0%2B7PkvrULAmQGYJfNcwGfkF%2BRpLOSwVbatw%2FWkQ3an4wsRlsKkHFgLmgaSIasfiz0z5bSffUXaVRPfG64nKhOtk%2Fw%2Fl8cF24G8bm2E9WoiIu&X-Amz-Signature=6e80483a14dbaa21815d3f0065ccfa82d9ff109f9fe6508cdd4c7d15293c2eaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2ORP7SU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHH%2BHnnPLh3%2FXWwWnm%2BS6dlpnuv%2FNMq3uyLHcl%2BoAB%2FDAiBW4Mjz55T2MQoKr7Ncjayqq4HKV8J7qnl9JkOmY3YTuiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxSrR7xjhiRHGS4LPKtwD8BKnrmRgZ8ZoP5hy8t70CAO6A%2BrDCcd1O22YOUz5uq5O2EdUvJtO1lKXsCqArLmN49ws6pEy4X61JctqzLAmR8YIFQuNCq9wdHxMJjA7tMbjZ3YwBwFms8lrXYYACkVs2QIK1Z1md9kPSkP%2FDcsS3gNHS97DI%2BTOCk%2Byt6smQZEyAaSGvnjmj6ESUpAXFfMCukJrw9LFrvAWgzaYTbaziXblhBqzBD2yesGPzJMlIkxLzXD6wC%2BVmGfJgQDEIlI6rxAqCKyQIQzoUNeTElojRPlHmjLLPOqUnkY%2FqpZN654cdRsH4p%2F%2BCCDJl9%2BS0Ha1LPRwebtonbEhrGT1wmUswgZxD%2BMblvEWCzZyHgI72cqf7PRGx3TeU4fNuDdoI%2FT%2F4pgIIYKD69BnZX9oNtOoEXSDxsAJU6%2BNvzit5povyVyQMcdl8TH0oB0dqW9PE%2FxKZxa%2FGojUWbH76ZmlKEucPGvzWMD5oxYJ1BRxyDszc6vOn%2FaG8haECechCDNXCWxsVy1991Xmcvt9Dep%2B%2F3PYc2fkzh6ulpVUB2X%2FP5b4IfyGp5g0OnuSip%2B01%2BsBINPKxQSp0w01NxUqEEg63CMwp0v5zeVEmxI21gsQRYFKLXEmh01rMtmHiZrRYdYw%2F%2FXgxAY6pgFtNoZ97X2YkiSGyu7xZW54%2FYFjx2IZW6YRfFAJXLSjS8NSQ8wiFu%2Bw8O3XKCv12uEvd9DA4tOyObHf8gOuf6U51mYF0gIwEUbxWiZWWz4LCWAqfUde0%2B7PkvrULAmQGYJfNcwGfkF%2BRpLOSwVbatw%2FWkQ3an4wsRlsKkHFgLmgaSIasfiz0z5bSffUXaVRPfG64nKhOtk%2Fw%2Fl8cF24G8bm2E9WoiIu&X-Amz-Signature=c2a97903ada111af913e3e64576d5e600a31804587fff9cdf277dc67aaa9e22a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2ORP7SU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHH%2BHnnPLh3%2FXWwWnm%2BS6dlpnuv%2FNMq3uyLHcl%2BoAB%2FDAiBW4Mjz55T2MQoKr7Ncjayqq4HKV8J7qnl9JkOmY3YTuiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxSrR7xjhiRHGS4LPKtwD8BKnrmRgZ8ZoP5hy8t70CAO6A%2BrDCcd1O22YOUz5uq5O2EdUvJtO1lKXsCqArLmN49ws6pEy4X61JctqzLAmR8YIFQuNCq9wdHxMJjA7tMbjZ3YwBwFms8lrXYYACkVs2QIK1Z1md9kPSkP%2FDcsS3gNHS97DI%2BTOCk%2Byt6smQZEyAaSGvnjmj6ESUpAXFfMCukJrw9LFrvAWgzaYTbaziXblhBqzBD2yesGPzJMlIkxLzXD6wC%2BVmGfJgQDEIlI6rxAqCKyQIQzoUNeTElojRPlHmjLLPOqUnkY%2FqpZN654cdRsH4p%2F%2BCCDJl9%2BS0Ha1LPRwebtonbEhrGT1wmUswgZxD%2BMblvEWCzZyHgI72cqf7PRGx3TeU4fNuDdoI%2FT%2F4pgIIYKD69BnZX9oNtOoEXSDxsAJU6%2BNvzit5povyVyQMcdl8TH0oB0dqW9PE%2FxKZxa%2FGojUWbH76ZmlKEucPGvzWMD5oxYJ1BRxyDszc6vOn%2FaG8haECechCDNXCWxsVy1991Xmcvt9Dep%2B%2F3PYc2fkzh6ulpVUB2X%2FP5b4IfyGp5g0OnuSip%2B01%2BsBINPKxQSp0w01NxUqEEg63CMwp0v5zeVEmxI21gsQRYFKLXEmh01rMtmHiZrRYdYw%2F%2FXgxAY6pgFtNoZ97X2YkiSGyu7xZW54%2FYFjx2IZW6YRfFAJXLSjS8NSQ8wiFu%2Bw8O3XKCv12uEvd9DA4tOyObHf8gOuf6U51mYF0gIwEUbxWiZWWz4LCWAqfUde0%2B7PkvrULAmQGYJfNcwGfkF%2BRpLOSwVbatw%2FWkQ3an4wsRlsKkHFgLmgaSIasfiz0z5bSffUXaVRPfG64nKhOtk%2Fw%2Fl8cF24G8bm2E9WoiIu&X-Amz-Signature=a70fc8a6e51b9b211007af776298e4bd6361b893ce743baefa0a268a220e909c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2ORP7SU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHH%2BHnnPLh3%2FXWwWnm%2BS6dlpnuv%2FNMq3uyLHcl%2BoAB%2FDAiBW4Mjz55T2MQoKr7Ncjayqq4HKV8J7qnl9JkOmY3YTuiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxSrR7xjhiRHGS4LPKtwD8BKnrmRgZ8ZoP5hy8t70CAO6A%2BrDCcd1O22YOUz5uq5O2EdUvJtO1lKXsCqArLmN49ws6pEy4X61JctqzLAmR8YIFQuNCq9wdHxMJjA7tMbjZ3YwBwFms8lrXYYACkVs2QIK1Z1md9kPSkP%2FDcsS3gNHS97DI%2BTOCk%2Byt6smQZEyAaSGvnjmj6ESUpAXFfMCukJrw9LFrvAWgzaYTbaziXblhBqzBD2yesGPzJMlIkxLzXD6wC%2BVmGfJgQDEIlI6rxAqCKyQIQzoUNeTElojRPlHmjLLPOqUnkY%2FqpZN654cdRsH4p%2F%2BCCDJl9%2BS0Ha1LPRwebtonbEhrGT1wmUswgZxD%2BMblvEWCzZyHgI72cqf7PRGx3TeU4fNuDdoI%2FT%2F4pgIIYKD69BnZX9oNtOoEXSDxsAJU6%2BNvzit5povyVyQMcdl8TH0oB0dqW9PE%2FxKZxa%2FGojUWbH76ZmlKEucPGvzWMD5oxYJ1BRxyDszc6vOn%2FaG8haECechCDNXCWxsVy1991Xmcvt9Dep%2B%2F3PYc2fkzh6ulpVUB2X%2FP5b4IfyGp5g0OnuSip%2B01%2BsBINPKxQSp0w01NxUqEEg63CMwp0v5zeVEmxI21gsQRYFKLXEmh01rMtmHiZrRYdYw%2F%2FXgxAY6pgFtNoZ97X2YkiSGyu7xZW54%2FYFjx2IZW6YRfFAJXLSjS8NSQ8wiFu%2Bw8O3XKCv12uEvd9DA4tOyObHf8gOuf6U51mYF0gIwEUbxWiZWWz4LCWAqfUde0%2B7PkvrULAmQGYJfNcwGfkF%2BRpLOSwVbatw%2FWkQ3an4wsRlsKkHFgLmgaSIasfiz0z5bSffUXaVRPfG64nKhOtk%2Fw%2Fl8cF24G8bm2E9WoiIu&X-Amz-Signature=70b8ccf740179d8b7142ce449df92b99e18d34524b6358af1317992241493c67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2ORP7SU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHH%2BHnnPLh3%2FXWwWnm%2BS6dlpnuv%2FNMq3uyLHcl%2BoAB%2FDAiBW4Mjz55T2MQoKr7Ncjayqq4HKV8J7qnl9JkOmY3YTuiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxSrR7xjhiRHGS4LPKtwD8BKnrmRgZ8ZoP5hy8t70CAO6A%2BrDCcd1O22YOUz5uq5O2EdUvJtO1lKXsCqArLmN49ws6pEy4X61JctqzLAmR8YIFQuNCq9wdHxMJjA7tMbjZ3YwBwFms8lrXYYACkVs2QIK1Z1md9kPSkP%2FDcsS3gNHS97DI%2BTOCk%2Byt6smQZEyAaSGvnjmj6ESUpAXFfMCukJrw9LFrvAWgzaYTbaziXblhBqzBD2yesGPzJMlIkxLzXD6wC%2BVmGfJgQDEIlI6rxAqCKyQIQzoUNeTElojRPlHmjLLPOqUnkY%2FqpZN654cdRsH4p%2F%2BCCDJl9%2BS0Ha1LPRwebtonbEhrGT1wmUswgZxD%2BMblvEWCzZyHgI72cqf7PRGx3TeU4fNuDdoI%2FT%2F4pgIIYKD69BnZX9oNtOoEXSDxsAJU6%2BNvzit5povyVyQMcdl8TH0oB0dqW9PE%2FxKZxa%2FGojUWbH76ZmlKEucPGvzWMD5oxYJ1BRxyDszc6vOn%2FaG8haECechCDNXCWxsVy1991Xmcvt9Dep%2B%2F3PYc2fkzh6ulpVUB2X%2FP5b4IfyGp5g0OnuSip%2B01%2BsBINPKxQSp0w01NxUqEEg63CMwp0v5zeVEmxI21gsQRYFKLXEmh01rMtmHiZrRYdYw%2F%2FXgxAY6pgFtNoZ97X2YkiSGyu7xZW54%2FYFjx2IZW6YRfFAJXLSjS8NSQ8wiFu%2Bw8O3XKCv12uEvd9DA4tOyObHf8gOuf6U51mYF0gIwEUbxWiZWWz4LCWAqfUde0%2B7PkvrULAmQGYJfNcwGfkF%2BRpLOSwVbatw%2FWkQ3an4wsRlsKkHFgLmgaSIasfiz0z5bSffUXaVRPfG64nKhOtk%2Fw%2Fl8cF24G8bm2E9WoiIu&X-Amz-Signature=bda3133fbac9220dbb3585c502e804635e67470e3a6bfe56e8752e6a41f126d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2ORP7SU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHH%2BHnnPLh3%2FXWwWnm%2BS6dlpnuv%2FNMq3uyLHcl%2BoAB%2FDAiBW4Mjz55T2MQoKr7Ncjayqq4HKV8J7qnl9JkOmY3YTuiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxSrR7xjhiRHGS4LPKtwD8BKnrmRgZ8ZoP5hy8t70CAO6A%2BrDCcd1O22YOUz5uq5O2EdUvJtO1lKXsCqArLmN49ws6pEy4X61JctqzLAmR8YIFQuNCq9wdHxMJjA7tMbjZ3YwBwFms8lrXYYACkVs2QIK1Z1md9kPSkP%2FDcsS3gNHS97DI%2BTOCk%2Byt6smQZEyAaSGvnjmj6ESUpAXFfMCukJrw9LFrvAWgzaYTbaziXblhBqzBD2yesGPzJMlIkxLzXD6wC%2BVmGfJgQDEIlI6rxAqCKyQIQzoUNeTElojRPlHmjLLPOqUnkY%2FqpZN654cdRsH4p%2F%2BCCDJl9%2BS0Ha1LPRwebtonbEhrGT1wmUswgZxD%2BMblvEWCzZyHgI72cqf7PRGx3TeU4fNuDdoI%2FT%2F4pgIIYKD69BnZX9oNtOoEXSDxsAJU6%2BNvzit5povyVyQMcdl8TH0oB0dqW9PE%2FxKZxa%2FGojUWbH76ZmlKEucPGvzWMD5oxYJ1BRxyDszc6vOn%2FaG8haECechCDNXCWxsVy1991Xmcvt9Dep%2B%2F3PYc2fkzh6ulpVUB2X%2FP5b4IfyGp5g0OnuSip%2B01%2BsBINPKxQSp0w01NxUqEEg63CMwp0v5zeVEmxI21gsQRYFKLXEmh01rMtmHiZrRYdYw%2F%2FXgxAY6pgFtNoZ97X2YkiSGyu7xZW54%2FYFjx2IZW6YRfFAJXLSjS8NSQ8wiFu%2Bw8O3XKCv12uEvd9DA4tOyObHf8gOuf6U51mYF0gIwEUbxWiZWWz4LCWAqfUde0%2B7PkvrULAmQGYJfNcwGfkF%2BRpLOSwVbatw%2FWkQ3an4wsRlsKkHFgLmgaSIasfiz0z5bSffUXaVRPfG64nKhOtk%2Fw%2Fl8cF24G8bm2E9WoiIu&X-Amz-Signature=5edf3a315b978c30d48650de24c72c5554ee03e2d1b4d817a46ff0b875ae89be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2ORP7SU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHH%2BHnnPLh3%2FXWwWnm%2BS6dlpnuv%2FNMq3uyLHcl%2BoAB%2FDAiBW4Mjz55T2MQoKr7Ncjayqq4HKV8J7qnl9JkOmY3YTuiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxSrR7xjhiRHGS4LPKtwD8BKnrmRgZ8ZoP5hy8t70CAO6A%2BrDCcd1O22YOUz5uq5O2EdUvJtO1lKXsCqArLmN49ws6pEy4X61JctqzLAmR8YIFQuNCq9wdHxMJjA7tMbjZ3YwBwFms8lrXYYACkVs2QIK1Z1md9kPSkP%2FDcsS3gNHS97DI%2BTOCk%2Byt6smQZEyAaSGvnjmj6ESUpAXFfMCukJrw9LFrvAWgzaYTbaziXblhBqzBD2yesGPzJMlIkxLzXD6wC%2BVmGfJgQDEIlI6rxAqCKyQIQzoUNeTElojRPlHmjLLPOqUnkY%2FqpZN654cdRsH4p%2F%2BCCDJl9%2BS0Ha1LPRwebtonbEhrGT1wmUswgZxD%2BMblvEWCzZyHgI72cqf7PRGx3TeU4fNuDdoI%2FT%2F4pgIIYKD69BnZX9oNtOoEXSDxsAJU6%2BNvzit5povyVyQMcdl8TH0oB0dqW9PE%2FxKZxa%2FGojUWbH76ZmlKEucPGvzWMD5oxYJ1BRxyDszc6vOn%2FaG8haECechCDNXCWxsVy1991Xmcvt9Dep%2B%2F3PYc2fkzh6ulpVUB2X%2FP5b4IfyGp5g0OnuSip%2B01%2BsBINPKxQSp0w01NxUqEEg63CMwp0v5zeVEmxI21gsQRYFKLXEmh01rMtmHiZrRYdYw%2F%2FXgxAY6pgFtNoZ97X2YkiSGyu7xZW54%2FYFjx2IZW6YRfFAJXLSjS8NSQ8wiFu%2Bw8O3XKCv12uEvd9DA4tOyObHf8gOuf6U51mYF0gIwEUbxWiZWWz4LCWAqfUde0%2B7PkvrULAmQGYJfNcwGfkF%2BRpLOSwVbatw%2FWkQ3an4wsRlsKkHFgLmgaSIasfiz0z5bSffUXaVRPfG64nKhOtk%2Fw%2Fl8cF24G8bm2E9WoiIu&X-Amz-Signature=69062da84032302424ce00262166ba3da415b3ec2f66d7269676f416aa618617&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2ORP7SU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHH%2BHnnPLh3%2FXWwWnm%2BS6dlpnuv%2FNMq3uyLHcl%2BoAB%2FDAiBW4Mjz55T2MQoKr7Ncjayqq4HKV8J7qnl9JkOmY3YTuiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxSrR7xjhiRHGS4LPKtwD8BKnrmRgZ8ZoP5hy8t70CAO6A%2BrDCcd1O22YOUz5uq5O2EdUvJtO1lKXsCqArLmN49ws6pEy4X61JctqzLAmR8YIFQuNCq9wdHxMJjA7tMbjZ3YwBwFms8lrXYYACkVs2QIK1Z1md9kPSkP%2FDcsS3gNHS97DI%2BTOCk%2Byt6smQZEyAaSGvnjmj6ESUpAXFfMCukJrw9LFrvAWgzaYTbaziXblhBqzBD2yesGPzJMlIkxLzXD6wC%2BVmGfJgQDEIlI6rxAqCKyQIQzoUNeTElojRPlHmjLLPOqUnkY%2FqpZN654cdRsH4p%2F%2BCCDJl9%2BS0Ha1LPRwebtonbEhrGT1wmUswgZxD%2BMblvEWCzZyHgI72cqf7PRGx3TeU4fNuDdoI%2FT%2F4pgIIYKD69BnZX9oNtOoEXSDxsAJU6%2BNvzit5povyVyQMcdl8TH0oB0dqW9PE%2FxKZxa%2FGojUWbH76ZmlKEucPGvzWMD5oxYJ1BRxyDszc6vOn%2FaG8haECechCDNXCWxsVy1991Xmcvt9Dep%2B%2F3PYc2fkzh6ulpVUB2X%2FP5b4IfyGp5g0OnuSip%2B01%2BsBINPKxQSp0w01NxUqEEg63CMwp0v5zeVEmxI21gsQRYFKLXEmh01rMtmHiZrRYdYw%2F%2FXgxAY6pgFtNoZ97X2YkiSGyu7xZW54%2FYFjx2IZW6YRfFAJXLSjS8NSQ8wiFu%2Bw8O3XKCv12uEvd9DA4tOyObHf8gOuf6U51mYF0gIwEUbxWiZWWz4LCWAqfUde0%2B7PkvrULAmQGYJfNcwGfkF%2BRpLOSwVbatw%2FWkQ3an4wsRlsKkHFgLmgaSIasfiz0z5bSffUXaVRPfG64nKhOtk%2Fw%2Fl8cF24G8bm2E9WoiIu&X-Amz-Signature=c2a97903ada111af913e3e64576d5e600a31804587fff9cdf277dc67aaa9e22a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
