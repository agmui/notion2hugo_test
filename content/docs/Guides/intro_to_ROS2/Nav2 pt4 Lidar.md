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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXJ6PXLP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDAeB0pJpmMcAXmThxa1snKDu9tW50l677GKActbZfhBAIgMzI7bkbhJZMzzEq0f%2FVyNi5TS%2F2fBg55HmM9LxyLSpoqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMifZmICo%2FuqvHMpPSrcAytU1qIWZZebFGeQKcCz476fsgjFJmgotiuSmKygg%2Fip8tY9lqPmgVPRVN5Yud3PBEknYNO2nFt2YP0g4BEiNLzV5k30upKVItqd5%2FJMI1t8iLzyAI01wkhE%2BV7yVOixIRim10Q49r%2F1Kr2CoUGSbxA2T73picWzdLbh99KR20Mck8Q%2BOsWgruAo73QKb%2BngmHTjlo9sebD5Ox29nFgRWNEwwQ%2Ffd5fsslkaseFBll04L3VMKehl%2BvyeA%2FHgg6gb%2BtA0BBv3iWEbEhM2vsZk6SR9OaNAgHRkVVWYRp0no1Fur0qPoTP%2FoiZcgUtYu99KYMUQy2GomT%2B0m3dRIbkh21RhY%2FT963%2F6tF%2FADsdJKziqJq%2FVIVzkQzJ6%2B4niIpEkGmqoodW1LsGkd4n%2B67%2FK9adOQMs0pj7BuPCc99TMyhUJ35NwWxlUutF2Xw6OmI3ZZjgaHih%2F6%2BnnR%2BXd0vRqypaRkez2xTbtLSN2ZQ%2BFRVbLPP5vntbLo%2B8zGCaV6IyIbbQW5QQ0stl0fuRuQqY%2BwHuUqdr1FHUzdKojEyCiX1nw0LTdpSegpyKnkikchWGkiVqUkIzQ8GrYkTdq1ZQc7Qv%2BEBN%2Fyw%2Bd%2FrPyx6cloMn3PjASh1HKNX44lYPbMOL12sQGOqUB43s8ll7oOXI55WJpMhQMcfzbUeZAnr1reHCHAs%2Bh4r1%2BbCx7Ve41eI6lAODse3%2FpkG1sz9ElrHH1qsZWShAW5K4Jxd%2Fyfj5U2BOoKQJNeSYJacskk9tU7wPidVNjqZKPcjPKuAAsDEpEE7ktPdAD%2BgEexJecFz2Yo0xbeCI92KSjbowLgAwBphjq1tPpNr4Aiwwgz832FPUd9j2lB2roMjB1%2FvxC&X-Amz-Signature=ca005ebad47cc6fd1996fb5af8edcd11f2b7b332df91a052e9e164a5d378aa8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGWFBCQJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIB6Tt9T%2FZ5VsOEZcdPJLpv8qvxTcFHMePjlKXsUwrMpQAiAmSYU%2FgRg5QKxUiIMIB%2FgUAXrpNFdf4%2FHsLcM%2BjynOtSqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIdICi1PkdAXf%2FLOfKtwDP5UvHn7pXzw8vuBAoxoJN2k57g8teehRnpd11oAujcT9svjafii4RdcvggXMyMpFMDhifmrVyNh4n8CxZagDOvDRgqL1Hfu2MU%2FUIXqaba2u%2B%2BTDM9HSwybUlXZ14n7JZE4A4e1Q%2B%2F5IiZwTMkpVc3vlF4y%2FA4huhy62o6pJnvrB%2Bj2r16%2BvCq2V3Oy2gTdFoNKqN7cyyJhKYYx6UMTkoa1vn82L3KwTfPSJTuMj4k%2BtRzqLlpEs5eJyxWF9clHfyx8rQnhQ%2BMBQrhZpeFh8Y3zrqp84ZK28no4I5V%2B4ZiNipRgBYTvZvy2CBvUBbfLyuKzDbRBi5XyofvS9taXWKGNvReyLPMQ1c6Ut2Mi6lNSTSS4GYfxlqhEtLwq0X7CqugrMtcy%2FEzlKd2VFi6oD0nk9%2FaPeuLVMcOlZUXDiyotq2DIEahKwhJh1ITPH6amOKl1Lyg55pZwnt%2FbWlq7G%2BmSwpC0QFqG%2F557jKb%2BXgn9Oala0PwwN6T68BRbSn2Pff9CJLtVRD1I%2BihpysfjwDa8v8ZFpV59%2BLs4jOv07f%2FfARklrifgcdXgd44r0gGhUXS8z56fzy4UbTTGQRovvYXMJgF1lD%2BNyECC5fZb4eQmCtNLxNHC6VD3JU4sw2vXaxAY6pgG6XJRIsMgWLhakjJqvydFyrt5bSBLibCXAqAW7MisPNQ8NvJOnLeGLusAUB1dhMGAkhv6dR%2FCeJ1rT71oqhmiU0wK%2BnwU%2BAWpCD2VbhZTTiPRLrUSt5D%2FCHr3FkfaXUqu5hK1NsKqbXPBEE8XWNET9cBpcMJi%2B%2BuISx5IX7qkY0PntCKY73bebGJ2k6fl3uQcPKdZA2PRzS7M2IXD7dZrgREDCoek9&X-Amz-Signature=311032ecac37a706a75ea42cdf49b67bcce7c034ab7343c0f3fa61d11a9ce788&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGWFBCQJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIB6Tt9T%2FZ5VsOEZcdPJLpv8qvxTcFHMePjlKXsUwrMpQAiAmSYU%2FgRg5QKxUiIMIB%2FgUAXrpNFdf4%2FHsLcM%2BjynOtSqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIdICi1PkdAXf%2FLOfKtwDP5UvHn7pXzw8vuBAoxoJN2k57g8teehRnpd11oAujcT9svjafii4RdcvggXMyMpFMDhifmrVyNh4n8CxZagDOvDRgqL1Hfu2MU%2FUIXqaba2u%2B%2BTDM9HSwybUlXZ14n7JZE4A4e1Q%2B%2F5IiZwTMkpVc3vlF4y%2FA4huhy62o6pJnvrB%2Bj2r16%2BvCq2V3Oy2gTdFoNKqN7cyyJhKYYx6UMTkoa1vn82L3KwTfPSJTuMj4k%2BtRzqLlpEs5eJyxWF9clHfyx8rQnhQ%2BMBQrhZpeFh8Y3zrqp84ZK28no4I5V%2B4ZiNipRgBYTvZvy2CBvUBbfLyuKzDbRBi5XyofvS9taXWKGNvReyLPMQ1c6Ut2Mi6lNSTSS4GYfxlqhEtLwq0X7CqugrMtcy%2FEzlKd2VFi6oD0nk9%2FaPeuLVMcOlZUXDiyotq2DIEahKwhJh1ITPH6amOKl1Lyg55pZwnt%2FbWlq7G%2BmSwpC0QFqG%2F557jKb%2BXgn9Oala0PwwN6T68BRbSn2Pff9CJLtVRD1I%2BihpysfjwDa8v8ZFpV59%2BLs4jOv07f%2FfARklrifgcdXgd44r0gGhUXS8z56fzy4UbTTGQRovvYXMJgF1lD%2BNyECC5fZb4eQmCtNLxNHC6VD3JU4sw2vXaxAY6pgG6XJRIsMgWLhakjJqvydFyrt5bSBLibCXAqAW7MisPNQ8NvJOnLeGLusAUB1dhMGAkhv6dR%2FCeJ1rT71oqhmiU0wK%2BnwU%2BAWpCD2VbhZTTiPRLrUSt5D%2FCHr3FkfaXUqu5hK1NsKqbXPBEE8XWNET9cBpcMJi%2B%2BuISx5IX7qkY0PntCKY73bebGJ2k6fl3uQcPKdZA2PRzS7M2IXD7dZrgREDCoek9&X-Amz-Signature=e5d65ad70661e4e2f10184a3068aafd832be6c3ec24b750fedeb31d3026b7f50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGWFBCQJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIB6Tt9T%2FZ5VsOEZcdPJLpv8qvxTcFHMePjlKXsUwrMpQAiAmSYU%2FgRg5QKxUiIMIB%2FgUAXrpNFdf4%2FHsLcM%2BjynOtSqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIdICi1PkdAXf%2FLOfKtwDP5UvHn7pXzw8vuBAoxoJN2k57g8teehRnpd11oAujcT9svjafii4RdcvggXMyMpFMDhifmrVyNh4n8CxZagDOvDRgqL1Hfu2MU%2FUIXqaba2u%2B%2BTDM9HSwybUlXZ14n7JZE4A4e1Q%2B%2F5IiZwTMkpVc3vlF4y%2FA4huhy62o6pJnvrB%2Bj2r16%2BvCq2V3Oy2gTdFoNKqN7cyyJhKYYx6UMTkoa1vn82L3KwTfPSJTuMj4k%2BtRzqLlpEs5eJyxWF9clHfyx8rQnhQ%2BMBQrhZpeFh8Y3zrqp84ZK28no4I5V%2B4ZiNipRgBYTvZvy2CBvUBbfLyuKzDbRBi5XyofvS9taXWKGNvReyLPMQ1c6Ut2Mi6lNSTSS4GYfxlqhEtLwq0X7CqugrMtcy%2FEzlKd2VFi6oD0nk9%2FaPeuLVMcOlZUXDiyotq2DIEahKwhJh1ITPH6amOKl1Lyg55pZwnt%2FbWlq7G%2BmSwpC0QFqG%2F557jKb%2BXgn9Oala0PwwN6T68BRbSn2Pff9CJLtVRD1I%2BihpysfjwDa8v8ZFpV59%2BLs4jOv07f%2FfARklrifgcdXgd44r0gGhUXS8z56fzy4UbTTGQRovvYXMJgF1lD%2BNyECC5fZb4eQmCtNLxNHC6VD3JU4sw2vXaxAY6pgG6XJRIsMgWLhakjJqvydFyrt5bSBLibCXAqAW7MisPNQ8NvJOnLeGLusAUB1dhMGAkhv6dR%2FCeJ1rT71oqhmiU0wK%2BnwU%2BAWpCD2VbhZTTiPRLrUSt5D%2FCHr3FkfaXUqu5hK1NsKqbXPBEE8XWNET9cBpcMJi%2B%2BuISx5IX7qkY0PntCKY73bebGJ2k6fl3uQcPKdZA2PRzS7M2IXD7dZrgREDCoek9&X-Amz-Signature=15dbb4ddde1929658a5b9219d0f2c70c9564fd856e39a06a2cf49c5ceafea1ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGWFBCQJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIB6Tt9T%2FZ5VsOEZcdPJLpv8qvxTcFHMePjlKXsUwrMpQAiAmSYU%2FgRg5QKxUiIMIB%2FgUAXrpNFdf4%2FHsLcM%2BjynOtSqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIdICi1PkdAXf%2FLOfKtwDP5UvHn7pXzw8vuBAoxoJN2k57g8teehRnpd11oAujcT9svjafii4RdcvggXMyMpFMDhifmrVyNh4n8CxZagDOvDRgqL1Hfu2MU%2FUIXqaba2u%2B%2BTDM9HSwybUlXZ14n7JZE4A4e1Q%2B%2F5IiZwTMkpVc3vlF4y%2FA4huhy62o6pJnvrB%2Bj2r16%2BvCq2V3Oy2gTdFoNKqN7cyyJhKYYx6UMTkoa1vn82L3KwTfPSJTuMj4k%2BtRzqLlpEs5eJyxWF9clHfyx8rQnhQ%2BMBQrhZpeFh8Y3zrqp84ZK28no4I5V%2B4ZiNipRgBYTvZvy2CBvUBbfLyuKzDbRBi5XyofvS9taXWKGNvReyLPMQ1c6Ut2Mi6lNSTSS4GYfxlqhEtLwq0X7CqugrMtcy%2FEzlKd2VFi6oD0nk9%2FaPeuLVMcOlZUXDiyotq2DIEahKwhJh1ITPH6amOKl1Lyg55pZwnt%2FbWlq7G%2BmSwpC0QFqG%2F557jKb%2BXgn9Oala0PwwN6T68BRbSn2Pff9CJLtVRD1I%2BihpysfjwDa8v8ZFpV59%2BLs4jOv07f%2FfARklrifgcdXgd44r0gGhUXS8z56fzy4UbTTGQRovvYXMJgF1lD%2BNyECC5fZb4eQmCtNLxNHC6VD3JU4sw2vXaxAY6pgG6XJRIsMgWLhakjJqvydFyrt5bSBLibCXAqAW7MisPNQ8NvJOnLeGLusAUB1dhMGAkhv6dR%2FCeJ1rT71oqhmiU0wK%2BnwU%2BAWpCD2VbhZTTiPRLrUSt5D%2FCHr3FkfaXUqu5hK1NsKqbXPBEE8XWNET9cBpcMJi%2B%2BuISx5IX7qkY0PntCKY73bebGJ2k6fl3uQcPKdZA2PRzS7M2IXD7dZrgREDCoek9&X-Amz-Signature=7512bbb12fbf5197faf4315ec32790c9c60c765780c2ae825eed521f6727a7d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGWFBCQJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIB6Tt9T%2FZ5VsOEZcdPJLpv8qvxTcFHMePjlKXsUwrMpQAiAmSYU%2FgRg5QKxUiIMIB%2FgUAXrpNFdf4%2FHsLcM%2BjynOtSqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIdICi1PkdAXf%2FLOfKtwDP5UvHn7pXzw8vuBAoxoJN2k57g8teehRnpd11oAujcT9svjafii4RdcvggXMyMpFMDhifmrVyNh4n8CxZagDOvDRgqL1Hfu2MU%2FUIXqaba2u%2B%2BTDM9HSwybUlXZ14n7JZE4A4e1Q%2B%2F5IiZwTMkpVc3vlF4y%2FA4huhy62o6pJnvrB%2Bj2r16%2BvCq2V3Oy2gTdFoNKqN7cyyJhKYYx6UMTkoa1vn82L3KwTfPSJTuMj4k%2BtRzqLlpEs5eJyxWF9clHfyx8rQnhQ%2BMBQrhZpeFh8Y3zrqp84ZK28no4I5V%2B4ZiNipRgBYTvZvy2CBvUBbfLyuKzDbRBi5XyofvS9taXWKGNvReyLPMQ1c6Ut2Mi6lNSTSS4GYfxlqhEtLwq0X7CqugrMtcy%2FEzlKd2VFi6oD0nk9%2FaPeuLVMcOlZUXDiyotq2DIEahKwhJh1ITPH6amOKl1Lyg55pZwnt%2FbWlq7G%2BmSwpC0QFqG%2F557jKb%2BXgn9Oala0PwwN6T68BRbSn2Pff9CJLtVRD1I%2BihpysfjwDa8v8ZFpV59%2BLs4jOv07f%2FfARklrifgcdXgd44r0gGhUXS8z56fzy4UbTTGQRovvYXMJgF1lD%2BNyECC5fZb4eQmCtNLxNHC6VD3JU4sw2vXaxAY6pgG6XJRIsMgWLhakjJqvydFyrt5bSBLibCXAqAW7MisPNQ8NvJOnLeGLusAUB1dhMGAkhv6dR%2FCeJ1rT71oqhmiU0wK%2BnwU%2BAWpCD2VbhZTTiPRLrUSt5D%2FCHr3FkfaXUqu5hK1NsKqbXPBEE8XWNET9cBpcMJi%2B%2BuISx5IX7qkY0PntCKY73bebGJ2k6fl3uQcPKdZA2PRzS7M2IXD7dZrgREDCoek9&X-Amz-Signature=c0b3c082b4f07b72a59b5808f22cde671f518e15220fca36b174e2c2ffb4cb0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGWFBCQJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIB6Tt9T%2FZ5VsOEZcdPJLpv8qvxTcFHMePjlKXsUwrMpQAiAmSYU%2FgRg5QKxUiIMIB%2FgUAXrpNFdf4%2FHsLcM%2BjynOtSqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIdICi1PkdAXf%2FLOfKtwDP5UvHn7pXzw8vuBAoxoJN2k57g8teehRnpd11oAujcT9svjafii4RdcvggXMyMpFMDhifmrVyNh4n8CxZagDOvDRgqL1Hfu2MU%2FUIXqaba2u%2B%2BTDM9HSwybUlXZ14n7JZE4A4e1Q%2B%2F5IiZwTMkpVc3vlF4y%2FA4huhy62o6pJnvrB%2Bj2r16%2BvCq2V3Oy2gTdFoNKqN7cyyJhKYYx6UMTkoa1vn82L3KwTfPSJTuMj4k%2BtRzqLlpEs5eJyxWF9clHfyx8rQnhQ%2BMBQrhZpeFh8Y3zrqp84ZK28no4I5V%2B4ZiNipRgBYTvZvy2CBvUBbfLyuKzDbRBi5XyofvS9taXWKGNvReyLPMQ1c6Ut2Mi6lNSTSS4GYfxlqhEtLwq0X7CqugrMtcy%2FEzlKd2VFi6oD0nk9%2FaPeuLVMcOlZUXDiyotq2DIEahKwhJh1ITPH6amOKl1Lyg55pZwnt%2FbWlq7G%2BmSwpC0QFqG%2F557jKb%2BXgn9Oala0PwwN6T68BRbSn2Pff9CJLtVRD1I%2BihpysfjwDa8v8ZFpV59%2BLs4jOv07f%2FfARklrifgcdXgd44r0gGhUXS8z56fzy4UbTTGQRovvYXMJgF1lD%2BNyECC5fZb4eQmCtNLxNHC6VD3JU4sw2vXaxAY6pgG6XJRIsMgWLhakjJqvydFyrt5bSBLibCXAqAW7MisPNQ8NvJOnLeGLusAUB1dhMGAkhv6dR%2FCeJ1rT71oqhmiU0wK%2BnwU%2BAWpCD2VbhZTTiPRLrUSt5D%2FCHr3FkfaXUqu5hK1NsKqbXPBEE8XWNET9cBpcMJi%2B%2BuISx5IX7qkY0PntCKY73bebGJ2k6fl3uQcPKdZA2PRzS7M2IXD7dZrgREDCoek9&X-Amz-Signature=5587ed68caa8f60636b7b5f93dbf813cac51536bd5aa55531163e667827a1f3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGWFBCQJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIB6Tt9T%2FZ5VsOEZcdPJLpv8qvxTcFHMePjlKXsUwrMpQAiAmSYU%2FgRg5QKxUiIMIB%2FgUAXrpNFdf4%2FHsLcM%2BjynOtSqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIdICi1PkdAXf%2FLOfKtwDP5UvHn7pXzw8vuBAoxoJN2k57g8teehRnpd11oAujcT9svjafii4RdcvggXMyMpFMDhifmrVyNh4n8CxZagDOvDRgqL1Hfu2MU%2FUIXqaba2u%2B%2BTDM9HSwybUlXZ14n7JZE4A4e1Q%2B%2F5IiZwTMkpVc3vlF4y%2FA4huhy62o6pJnvrB%2Bj2r16%2BvCq2V3Oy2gTdFoNKqN7cyyJhKYYx6UMTkoa1vn82L3KwTfPSJTuMj4k%2BtRzqLlpEs5eJyxWF9clHfyx8rQnhQ%2BMBQrhZpeFh8Y3zrqp84ZK28no4I5V%2B4ZiNipRgBYTvZvy2CBvUBbfLyuKzDbRBi5XyofvS9taXWKGNvReyLPMQ1c6Ut2Mi6lNSTSS4GYfxlqhEtLwq0X7CqugrMtcy%2FEzlKd2VFi6oD0nk9%2FaPeuLVMcOlZUXDiyotq2DIEahKwhJh1ITPH6amOKl1Lyg55pZwnt%2FbWlq7G%2BmSwpC0QFqG%2F557jKb%2BXgn9Oala0PwwN6T68BRbSn2Pff9CJLtVRD1I%2BihpysfjwDa8v8ZFpV59%2BLs4jOv07f%2FfARklrifgcdXgd44r0gGhUXS8z56fzy4UbTTGQRovvYXMJgF1lD%2BNyECC5fZb4eQmCtNLxNHC6VD3JU4sw2vXaxAY6pgG6XJRIsMgWLhakjJqvydFyrt5bSBLibCXAqAW7MisPNQ8NvJOnLeGLusAUB1dhMGAkhv6dR%2FCeJ1rT71oqhmiU0wK%2BnwU%2BAWpCD2VbhZTTiPRLrUSt5D%2FCHr3FkfaXUqu5hK1NsKqbXPBEE8XWNET9cBpcMJi%2B%2BuISx5IX7qkY0PntCKY73bebGJ2k6fl3uQcPKdZA2PRzS7M2IXD7dZrgREDCoek9&X-Amz-Signature=83f52a2536e32de5cf75686363c5ed600b2e323f50234961d695cdd6ce49036a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGWFBCQJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIB6Tt9T%2FZ5VsOEZcdPJLpv8qvxTcFHMePjlKXsUwrMpQAiAmSYU%2FgRg5QKxUiIMIB%2FgUAXrpNFdf4%2FHsLcM%2BjynOtSqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIdICi1PkdAXf%2FLOfKtwDP5UvHn7pXzw8vuBAoxoJN2k57g8teehRnpd11oAujcT9svjafii4RdcvggXMyMpFMDhifmrVyNh4n8CxZagDOvDRgqL1Hfu2MU%2FUIXqaba2u%2B%2BTDM9HSwybUlXZ14n7JZE4A4e1Q%2B%2F5IiZwTMkpVc3vlF4y%2FA4huhy62o6pJnvrB%2Bj2r16%2BvCq2V3Oy2gTdFoNKqN7cyyJhKYYx6UMTkoa1vn82L3KwTfPSJTuMj4k%2BtRzqLlpEs5eJyxWF9clHfyx8rQnhQ%2BMBQrhZpeFh8Y3zrqp84ZK28no4I5V%2B4ZiNipRgBYTvZvy2CBvUBbfLyuKzDbRBi5XyofvS9taXWKGNvReyLPMQ1c6Ut2Mi6lNSTSS4GYfxlqhEtLwq0X7CqugrMtcy%2FEzlKd2VFi6oD0nk9%2FaPeuLVMcOlZUXDiyotq2DIEahKwhJh1ITPH6amOKl1Lyg55pZwnt%2FbWlq7G%2BmSwpC0QFqG%2F557jKb%2BXgn9Oala0PwwN6T68BRbSn2Pff9CJLtVRD1I%2BihpysfjwDa8v8ZFpV59%2BLs4jOv07f%2FfARklrifgcdXgd44r0gGhUXS8z56fzy4UbTTGQRovvYXMJgF1lD%2BNyECC5fZb4eQmCtNLxNHC6VD3JU4sw2vXaxAY6pgG6XJRIsMgWLhakjJqvydFyrt5bSBLibCXAqAW7MisPNQ8NvJOnLeGLusAUB1dhMGAkhv6dR%2FCeJ1rT71oqhmiU0wK%2BnwU%2BAWpCD2VbhZTTiPRLrUSt5D%2FCHr3FkfaXUqu5hK1NsKqbXPBEE8XWNET9cBpcMJi%2B%2BuISx5IX7qkY0PntCKY73bebGJ2k6fl3uQcPKdZA2PRzS7M2IXD7dZrgREDCoek9&X-Amz-Signature=977287666b69301d7cbf8e451b31e56c840656c6777d70fcd5a2ef242cf3042e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGWFBCQJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIB6Tt9T%2FZ5VsOEZcdPJLpv8qvxTcFHMePjlKXsUwrMpQAiAmSYU%2FgRg5QKxUiIMIB%2FgUAXrpNFdf4%2FHsLcM%2BjynOtSqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIdICi1PkdAXf%2FLOfKtwDP5UvHn7pXzw8vuBAoxoJN2k57g8teehRnpd11oAujcT9svjafii4RdcvggXMyMpFMDhifmrVyNh4n8CxZagDOvDRgqL1Hfu2MU%2FUIXqaba2u%2B%2BTDM9HSwybUlXZ14n7JZE4A4e1Q%2B%2F5IiZwTMkpVc3vlF4y%2FA4huhy62o6pJnvrB%2Bj2r16%2BvCq2V3Oy2gTdFoNKqN7cyyJhKYYx6UMTkoa1vn82L3KwTfPSJTuMj4k%2BtRzqLlpEs5eJyxWF9clHfyx8rQnhQ%2BMBQrhZpeFh8Y3zrqp84ZK28no4I5V%2B4ZiNipRgBYTvZvy2CBvUBbfLyuKzDbRBi5XyofvS9taXWKGNvReyLPMQ1c6Ut2Mi6lNSTSS4GYfxlqhEtLwq0X7CqugrMtcy%2FEzlKd2VFi6oD0nk9%2FaPeuLVMcOlZUXDiyotq2DIEahKwhJh1ITPH6amOKl1Lyg55pZwnt%2FbWlq7G%2BmSwpC0QFqG%2F557jKb%2BXgn9Oala0PwwN6T68BRbSn2Pff9CJLtVRD1I%2BihpysfjwDa8v8ZFpV59%2BLs4jOv07f%2FfARklrifgcdXgd44r0gGhUXS8z56fzy4UbTTGQRovvYXMJgF1lD%2BNyECC5fZb4eQmCtNLxNHC6VD3JU4sw2vXaxAY6pgG6XJRIsMgWLhakjJqvydFyrt5bSBLibCXAqAW7MisPNQ8NvJOnLeGLusAUB1dhMGAkhv6dR%2FCeJ1rT71oqhmiU0wK%2BnwU%2BAWpCD2VbhZTTiPRLrUSt5D%2FCHr3FkfaXUqu5hK1NsKqbXPBEE8XWNET9cBpcMJi%2B%2BuISx5IX7qkY0PntCKY73bebGJ2k6fl3uQcPKdZA2PRzS7M2IXD7dZrgREDCoek9&X-Amz-Signature=3cef668785d9c4e83656ab5f74761f6c4ec7afd1a1609ce77624ea21a6d05aa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGWFBCQJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIB6Tt9T%2FZ5VsOEZcdPJLpv8qvxTcFHMePjlKXsUwrMpQAiAmSYU%2FgRg5QKxUiIMIB%2FgUAXrpNFdf4%2FHsLcM%2BjynOtSqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIdICi1PkdAXf%2FLOfKtwDP5UvHn7pXzw8vuBAoxoJN2k57g8teehRnpd11oAujcT9svjafii4RdcvggXMyMpFMDhifmrVyNh4n8CxZagDOvDRgqL1Hfu2MU%2FUIXqaba2u%2B%2BTDM9HSwybUlXZ14n7JZE4A4e1Q%2B%2F5IiZwTMkpVc3vlF4y%2FA4huhy62o6pJnvrB%2Bj2r16%2BvCq2V3Oy2gTdFoNKqN7cyyJhKYYx6UMTkoa1vn82L3KwTfPSJTuMj4k%2BtRzqLlpEs5eJyxWF9clHfyx8rQnhQ%2BMBQrhZpeFh8Y3zrqp84ZK28no4I5V%2B4ZiNipRgBYTvZvy2CBvUBbfLyuKzDbRBi5XyofvS9taXWKGNvReyLPMQ1c6Ut2Mi6lNSTSS4GYfxlqhEtLwq0X7CqugrMtcy%2FEzlKd2VFi6oD0nk9%2FaPeuLVMcOlZUXDiyotq2DIEahKwhJh1ITPH6amOKl1Lyg55pZwnt%2FbWlq7G%2BmSwpC0QFqG%2F557jKb%2BXgn9Oala0PwwN6T68BRbSn2Pff9CJLtVRD1I%2BihpysfjwDa8v8ZFpV59%2BLs4jOv07f%2FfARklrifgcdXgd44r0gGhUXS8z56fzy4UbTTGQRovvYXMJgF1lD%2BNyECC5fZb4eQmCtNLxNHC6VD3JU4sw2vXaxAY6pgG6XJRIsMgWLhakjJqvydFyrt5bSBLibCXAqAW7MisPNQ8NvJOnLeGLusAUB1dhMGAkhv6dR%2FCeJ1rT71oqhmiU0wK%2BnwU%2BAWpCD2VbhZTTiPRLrUSt5D%2FCHr3FkfaXUqu5hK1NsKqbXPBEE8XWNET9cBpcMJi%2B%2BuISx5IX7qkY0PntCKY73bebGJ2k6fl3uQcPKdZA2PRzS7M2IXD7dZrgREDCoek9&X-Amz-Signature=7512bbb12fbf5197faf4315ec32790c9c60c765780c2ae825eed521f6727a7d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
