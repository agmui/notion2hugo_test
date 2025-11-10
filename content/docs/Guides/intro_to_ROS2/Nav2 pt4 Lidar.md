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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J3AY54K%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIG2M7f29tPvtkThz12WbIIlukhBQKKm8hkNGIgu9BLuEAiEAqTdeMYIf0BsIjLaBvd1r42GO3d41D65dZIfUVpqWnxoqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FJWij%2FVdFS1bLXjSrcAwmfzrcZs9tu09MPpwRldYyPH4EPDTIocXwOiTFEEz6LPeQMVlA7h4KxFxknFdgVRvZvzAXPClbGT4Hm3T52WfG7XKeuO7xpzGXpte1MtegYfEfvuAcFCK3B%2BDIjj2x7142RZ6N06TuGZlKudclYuBx%2BVKzoEneeRhMeaFcTa2MlLLUfLg2NpvaWEg41NtK9Zb8%2BlzPV%2BwbQrmFL1r3GAqpVPGGnVf1nqsOxArUagLxlJBEEEw59%2Fg5dbwSMm%2FwXgtkmkekZc%2Bs4tws9QV9sLUGqouQUDpEc664BEfbbFgGH3IfHHKjKzszVHy4CoIbzrqMbkOHgPul9OFp6Cr1uvZoXREQATSiuYU0VL0y1OzNn7hNssE3gOpOxLYFKilJr4e9cbn9V%2FaCRkvvDZSeZcbDG%2FtMVtI0fj0Q9gcNY3ecjaci2dvtcpshSPTcmvwRW5E0JEICyxWdJIrwArZiq1IKVO8uWi%2BrgttzrvWrYyZlGm4%2BWXIXPlrSsqFsib3xlWDd3wy%2FmUImr2TC1YylEc5CLougiGR%2B9z%2FsA5SahFMI7nxXEsPgBNZYuEGbO7WKXBYpCyrihcodoPzi5742Pi%2FV9KGvY%2BI8t60I8M9FGXRhjFi4U3XMtpnsBCD3HMM%2B2xMgGOqUBuf16nNXiYPtSI7wA9%2B5GwYIiuq%2Fj5jRAhnLHKG6LELsgCJypQqmL604zCJifGZ3YFIcu0Gb7PUdJLyWOHJy3C06pLLRR6lhiKx9Bh4bnlvWYQGE5ZdCVABwAOdybUTaivrivAiDISNRyfVM%2FfAKngFNX4d9mTI47pblM4vdMx264WFLK6011KUqGcfWYoiSUmOQm2TIiOJDp0iDsxt961sKAhRvN&X-Amz-Signature=82f3f705fef8515b7a2134d3702786cfc5ec3483e94f69e4ebeae8cdc8f63d6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X52IDHRC%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDRB1bVahPKc1UxXWbZinDxUHWhB5nin9u5dExwuV3vcQIgTYB1DpV09LfMVStRO5hBQ2JwzQD%2FStmtdKfcmgNiyqAqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5%2BrurjOSDuc0ImNSrcAzU7i%2FjpRVKGHu8hQXblfWDzkNb659aqMPIScoeb3Sd4pkGymhq5ipGziHZGYitixV9r5afkm6Buz3J0WcdF0Wn%2BJ1sJB%2B%2FOoYI8lNaPRZBWOiW7V42d1BwBFJrhS99%2B9OjkEQ1DLImgJXPV7rJZTqfH8WAKH4rKSJS2QqcbphS5zJtxbelakxG9LnOrZklMneSeFFBhaKhqxrKWo%2FuwtDcORVOpe9IglVPLdrGCorHfcgJwZ3uGzqUZTgk%2BrExa3v%2BIQNfnJYR67x%2BrwPSpQfnJ1X6kujbuzuG1G4J9Kas8nTfzPYVdhawKOf7Kvk6hweL%2B8iU8nDdOxUxy7YzrcZNQT4vQWOpelENZDzP5MtNfSwg4lh9pdLX13oo47ezkMWsNfqfuX9sIWPiXHOQ3P7Khtss0lxocALb1YneEpjWsrMxlxszcKKivhjTixD%2FyAiSNH7cKWao2NczWhR9S1%2BmM9JljYsDNB6Zt2Y9jnLBeYyB%2BIxl5FJTr%2FHtAOAjsjQnJlT32%2FpYgA9uNTiPtJFe%2BEPeV%2B7cXm8McWCRgc5XXKW9Bpr8GjmIYZMCLG0132QXcHe%2FpoCBBye9rbTz%2Fgpj02yVS%2FQjPeARe55jsjDnBCO6JiKi5opZPs3ebMKK7xMgGOqUB9%2BBhblsjsxK99XOx%2BU0X2sphSLS4ey6MqRY9GRkHsX0vZRhnli5OttXj5a47TS95VoEIv3KnJinLyVVav3KZnS2JnVQJb1u2OMfEmoU7qar18pKTh%2Fgk6hTiaTfV2hfoB1Ig7oEChwyVM7Oz9MUR3N4EgXEehvNZsB%2BN%2F7pAcUyWJPbHsvB3dwawOojfryxqexLBV7xQUeRqsGFbAX8C4gSwShZJ&X-Amz-Signature=e69a0effd352d52c81145b84a54bcc27c889acb32e0ce3834917c3c48624de72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X52IDHRC%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDRB1bVahPKc1UxXWbZinDxUHWhB5nin9u5dExwuV3vcQIgTYB1DpV09LfMVStRO5hBQ2JwzQD%2FStmtdKfcmgNiyqAqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5%2BrurjOSDuc0ImNSrcAzU7i%2FjpRVKGHu8hQXblfWDzkNb659aqMPIScoeb3Sd4pkGymhq5ipGziHZGYitixV9r5afkm6Buz3J0WcdF0Wn%2BJ1sJB%2B%2FOoYI8lNaPRZBWOiW7V42d1BwBFJrhS99%2B9OjkEQ1DLImgJXPV7rJZTqfH8WAKH4rKSJS2QqcbphS5zJtxbelakxG9LnOrZklMneSeFFBhaKhqxrKWo%2FuwtDcORVOpe9IglVPLdrGCorHfcgJwZ3uGzqUZTgk%2BrExa3v%2BIQNfnJYR67x%2BrwPSpQfnJ1X6kujbuzuG1G4J9Kas8nTfzPYVdhawKOf7Kvk6hweL%2B8iU8nDdOxUxy7YzrcZNQT4vQWOpelENZDzP5MtNfSwg4lh9pdLX13oo47ezkMWsNfqfuX9sIWPiXHOQ3P7Khtss0lxocALb1YneEpjWsrMxlxszcKKivhjTixD%2FyAiSNH7cKWao2NczWhR9S1%2BmM9JljYsDNB6Zt2Y9jnLBeYyB%2BIxl5FJTr%2FHtAOAjsjQnJlT32%2FpYgA9uNTiPtJFe%2BEPeV%2B7cXm8McWCRgc5XXKW9Bpr8GjmIYZMCLG0132QXcHe%2FpoCBBye9rbTz%2Fgpj02yVS%2FQjPeARe55jsjDnBCO6JiKi5opZPs3ebMKK7xMgGOqUB9%2BBhblsjsxK99XOx%2BU0X2sphSLS4ey6MqRY9GRkHsX0vZRhnli5OttXj5a47TS95VoEIv3KnJinLyVVav3KZnS2JnVQJb1u2OMfEmoU7qar18pKTh%2Fgk6hTiaTfV2hfoB1Ig7oEChwyVM7Oz9MUR3N4EgXEehvNZsB%2BN%2F7pAcUyWJPbHsvB3dwawOojfryxqexLBV7xQUeRqsGFbAX8C4gSwShZJ&X-Amz-Signature=c56d23185c060223f8508dc3ed5161f7093fd3561c02d85be786ca0ba2c915c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X52IDHRC%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDRB1bVahPKc1UxXWbZinDxUHWhB5nin9u5dExwuV3vcQIgTYB1DpV09LfMVStRO5hBQ2JwzQD%2FStmtdKfcmgNiyqAqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5%2BrurjOSDuc0ImNSrcAzU7i%2FjpRVKGHu8hQXblfWDzkNb659aqMPIScoeb3Sd4pkGymhq5ipGziHZGYitixV9r5afkm6Buz3J0WcdF0Wn%2BJ1sJB%2B%2FOoYI8lNaPRZBWOiW7V42d1BwBFJrhS99%2B9OjkEQ1DLImgJXPV7rJZTqfH8WAKH4rKSJS2QqcbphS5zJtxbelakxG9LnOrZklMneSeFFBhaKhqxrKWo%2FuwtDcORVOpe9IglVPLdrGCorHfcgJwZ3uGzqUZTgk%2BrExa3v%2BIQNfnJYR67x%2BrwPSpQfnJ1X6kujbuzuG1G4J9Kas8nTfzPYVdhawKOf7Kvk6hweL%2B8iU8nDdOxUxy7YzrcZNQT4vQWOpelENZDzP5MtNfSwg4lh9pdLX13oo47ezkMWsNfqfuX9sIWPiXHOQ3P7Khtss0lxocALb1YneEpjWsrMxlxszcKKivhjTixD%2FyAiSNH7cKWao2NczWhR9S1%2BmM9JljYsDNB6Zt2Y9jnLBeYyB%2BIxl5FJTr%2FHtAOAjsjQnJlT32%2FpYgA9uNTiPtJFe%2BEPeV%2B7cXm8McWCRgc5XXKW9Bpr8GjmIYZMCLG0132QXcHe%2FpoCBBye9rbTz%2Fgpj02yVS%2FQjPeARe55jsjDnBCO6JiKi5opZPs3ebMKK7xMgGOqUB9%2BBhblsjsxK99XOx%2BU0X2sphSLS4ey6MqRY9GRkHsX0vZRhnli5OttXj5a47TS95VoEIv3KnJinLyVVav3KZnS2JnVQJb1u2OMfEmoU7qar18pKTh%2Fgk6hTiaTfV2hfoB1Ig7oEChwyVM7Oz9MUR3N4EgXEehvNZsB%2BN%2F7pAcUyWJPbHsvB3dwawOojfryxqexLBV7xQUeRqsGFbAX8C4gSwShZJ&X-Amz-Signature=3b82bf71059612275b154088d09298f7327219706577b233452a52b243f274bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X52IDHRC%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDRB1bVahPKc1UxXWbZinDxUHWhB5nin9u5dExwuV3vcQIgTYB1DpV09LfMVStRO5hBQ2JwzQD%2FStmtdKfcmgNiyqAqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5%2BrurjOSDuc0ImNSrcAzU7i%2FjpRVKGHu8hQXblfWDzkNb659aqMPIScoeb3Sd4pkGymhq5ipGziHZGYitixV9r5afkm6Buz3J0WcdF0Wn%2BJ1sJB%2B%2FOoYI8lNaPRZBWOiW7V42d1BwBFJrhS99%2B9OjkEQ1DLImgJXPV7rJZTqfH8WAKH4rKSJS2QqcbphS5zJtxbelakxG9LnOrZklMneSeFFBhaKhqxrKWo%2FuwtDcORVOpe9IglVPLdrGCorHfcgJwZ3uGzqUZTgk%2BrExa3v%2BIQNfnJYR67x%2BrwPSpQfnJ1X6kujbuzuG1G4J9Kas8nTfzPYVdhawKOf7Kvk6hweL%2B8iU8nDdOxUxy7YzrcZNQT4vQWOpelENZDzP5MtNfSwg4lh9pdLX13oo47ezkMWsNfqfuX9sIWPiXHOQ3P7Khtss0lxocALb1YneEpjWsrMxlxszcKKivhjTixD%2FyAiSNH7cKWao2NczWhR9S1%2BmM9JljYsDNB6Zt2Y9jnLBeYyB%2BIxl5FJTr%2FHtAOAjsjQnJlT32%2FpYgA9uNTiPtJFe%2BEPeV%2B7cXm8McWCRgc5XXKW9Bpr8GjmIYZMCLG0132QXcHe%2FpoCBBye9rbTz%2Fgpj02yVS%2FQjPeARe55jsjDnBCO6JiKi5opZPs3ebMKK7xMgGOqUB9%2BBhblsjsxK99XOx%2BU0X2sphSLS4ey6MqRY9GRkHsX0vZRhnli5OttXj5a47TS95VoEIv3KnJinLyVVav3KZnS2JnVQJb1u2OMfEmoU7qar18pKTh%2Fgk6hTiaTfV2hfoB1Ig7oEChwyVM7Oz9MUR3N4EgXEehvNZsB%2BN%2F7pAcUyWJPbHsvB3dwawOojfryxqexLBV7xQUeRqsGFbAX8C4gSwShZJ&X-Amz-Signature=d47577d3708da46fdf44ed4ff77a94bd00877b3df24ec0985ea0bb97b70e0b15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X52IDHRC%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDRB1bVahPKc1UxXWbZinDxUHWhB5nin9u5dExwuV3vcQIgTYB1DpV09LfMVStRO5hBQ2JwzQD%2FStmtdKfcmgNiyqAqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5%2BrurjOSDuc0ImNSrcAzU7i%2FjpRVKGHu8hQXblfWDzkNb659aqMPIScoeb3Sd4pkGymhq5ipGziHZGYitixV9r5afkm6Buz3J0WcdF0Wn%2BJ1sJB%2B%2FOoYI8lNaPRZBWOiW7V42d1BwBFJrhS99%2B9OjkEQ1DLImgJXPV7rJZTqfH8WAKH4rKSJS2QqcbphS5zJtxbelakxG9LnOrZklMneSeFFBhaKhqxrKWo%2FuwtDcORVOpe9IglVPLdrGCorHfcgJwZ3uGzqUZTgk%2BrExa3v%2BIQNfnJYR67x%2BrwPSpQfnJ1X6kujbuzuG1G4J9Kas8nTfzPYVdhawKOf7Kvk6hweL%2B8iU8nDdOxUxy7YzrcZNQT4vQWOpelENZDzP5MtNfSwg4lh9pdLX13oo47ezkMWsNfqfuX9sIWPiXHOQ3P7Khtss0lxocALb1YneEpjWsrMxlxszcKKivhjTixD%2FyAiSNH7cKWao2NczWhR9S1%2BmM9JljYsDNB6Zt2Y9jnLBeYyB%2BIxl5FJTr%2FHtAOAjsjQnJlT32%2FpYgA9uNTiPtJFe%2BEPeV%2B7cXm8McWCRgc5XXKW9Bpr8GjmIYZMCLG0132QXcHe%2FpoCBBye9rbTz%2Fgpj02yVS%2FQjPeARe55jsjDnBCO6JiKi5opZPs3ebMKK7xMgGOqUB9%2BBhblsjsxK99XOx%2BU0X2sphSLS4ey6MqRY9GRkHsX0vZRhnli5OttXj5a47TS95VoEIv3KnJinLyVVav3KZnS2JnVQJb1u2OMfEmoU7qar18pKTh%2Fgk6hTiaTfV2hfoB1Ig7oEChwyVM7Oz9MUR3N4EgXEehvNZsB%2BN%2F7pAcUyWJPbHsvB3dwawOojfryxqexLBV7xQUeRqsGFbAX8C4gSwShZJ&X-Amz-Signature=dce572f5c570954a3cb8c1efb03cd36d71820606129ab119d53f4d5688096b61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X52IDHRC%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDRB1bVahPKc1UxXWbZinDxUHWhB5nin9u5dExwuV3vcQIgTYB1DpV09LfMVStRO5hBQ2JwzQD%2FStmtdKfcmgNiyqAqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5%2BrurjOSDuc0ImNSrcAzU7i%2FjpRVKGHu8hQXblfWDzkNb659aqMPIScoeb3Sd4pkGymhq5ipGziHZGYitixV9r5afkm6Buz3J0WcdF0Wn%2BJ1sJB%2B%2FOoYI8lNaPRZBWOiW7V42d1BwBFJrhS99%2B9OjkEQ1DLImgJXPV7rJZTqfH8WAKH4rKSJS2QqcbphS5zJtxbelakxG9LnOrZklMneSeFFBhaKhqxrKWo%2FuwtDcORVOpe9IglVPLdrGCorHfcgJwZ3uGzqUZTgk%2BrExa3v%2BIQNfnJYR67x%2BrwPSpQfnJ1X6kujbuzuG1G4J9Kas8nTfzPYVdhawKOf7Kvk6hweL%2B8iU8nDdOxUxy7YzrcZNQT4vQWOpelENZDzP5MtNfSwg4lh9pdLX13oo47ezkMWsNfqfuX9sIWPiXHOQ3P7Khtss0lxocALb1YneEpjWsrMxlxszcKKivhjTixD%2FyAiSNH7cKWao2NczWhR9S1%2BmM9JljYsDNB6Zt2Y9jnLBeYyB%2BIxl5FJTr%2FHtAOAjsjQnJlT32%2FpYgA9uNTiPtJFe%2BEPeV%2B7cXm8McWCRgc5XXKW9Bpr8GjmIYZMCLG0132QXcHe%2FpoCBBye9rbTz%2Fgpj02yVS%2FQjPeARe55jsjDnBCO6JiKi5opZPs3ebMKK7xMgGOqUB9%2BBhblsjsxK99XOx%2BU0X2sphSLS4ey6MqRY9GRkHsX0vZRhnli5OttXj5a47TS95VoEIv3KnJinLyVVav3KZnS2JnVQJb1u2OMfEmoU7qar18pKTh%2Fgk6hTiaTfV2hfoB1Ig7oEChwyVM7Oz9MUR3N4EgXEehvNZsB%2BN%2F7pAcUyWJPbHsvB3dwawOojfryxqexLBV7xQUeRqsGFbAX8C4gSwShZJ&X-Amz-Signature=6f47f444ca4319eb0cb7d046f544f2c091ef27bc5ff7fffbd6fb87ca0440f595&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X52IDHRC%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDRB1bVahPKc1UxXWbZinDxUHWhB5nin9u5dExwuV3vcQIgTYB1DpV09LfMVStRO5hBQ2JwzQD%2FStmtdKfcmgNiyqAqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5%2BrurjOSDuc0ImNSrcAzU7i%2FjpRVKGHu8hQXblfWDzkNb659aqMPIScoeb3Sd4pkGymhq5ipGziHZGYitixV9r5afkm6Buz3J0WcdF0Wn%2BJ1sJB%2B%2FOoYI8lNaPRZBWOiW7V42d1BwBFJrhS99%2B9OjkEQ1DLImgJXPV7rJZTqfH8WAKH4rKSJS2QqcbphS5zJtxbelakxG9LnOrZklMneSeFFBhaKhqxrKWo%2FuwtDcORVOpe9IglVPLdrGCorHfcgJwZ3uGzqUZTgk%2BrExa3v%2BIQNfnJYR67x%2BrwPSpQfnJ1X6kujbuzuG1G4J9Kas8nTfzPYVdhawKOf7Kvk6hweL%2B8iU8nDdOxUxy7YzrcZNQT4vQWOpelENZDzP5MtNfSwg4lh9pdLX13oo47ezkMWsNfqfuX9sIWPiXHOQ3P7Khtss0lxocALb1YneEpjWsrMxlxszcKKivhjTixD%2FyAiSNH7cKWao2NczWhR9S1%2BmM9JljYsDNB6Zt2Y9jnLBeYyB%2BIxl5FJTr%2FHtAOAjsjQnJlT32%2FpYgA9uNTiPtJFe%2BEPeV%2B7cXm8McWCRgc5XXKW9Bpr8GjmIYZMCLG0132QXcHe%2FpoCBBye9rbTz%2Fgpj02yVS%2FQjPeARe55jsjDnBCO6JiKi5opZPs3ebMKK7xMgGOqUB9%2BBhblsjsxK99XOx%2BU0X2sphSLS4ey6MqRY9GRkHsX0vZRhnli5OttXj5a47TS95VoEIv3KnJinLyVVav3KZnS2JnVQJb1u2OMfEmoU7qar18pKTh%2Fgk6hTiaTfV2hfoB1Ig7oEChwyVM7Oz9MUR3N4EgXEehvNZsB%2BN%2F7pAcUyWJPbHsvB3dwawOojfryxqexLBV7xQUeRqsGFbAX8C4gSwShZJ&X-Amz-Signature=e87d2d03774bce6ad23d812396ec4842f5921d38e2befa8d8c64aeb1c9afff59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X52IDHRC%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDRB1bVahPKc1UxXWbZinDxUHWhB5nin9u5dExwuV3vcQIgTYB1DpV09LfMVStRO5hBQ2JwzQD%2FStmtdKfcmgNiyqAqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5%2BrurjOSDuc0ImNSrcAzU7i%2FjpRVKGHu8hQXblfWDzkNb659aqMPIScoeb3Sd4pkGymhq5ipGziHZGYitixV9r5afkm6Buz3J0WcdF0Wn%2BJ1sJB%2B%2FOoYI8lNaPRZBWOiW7V42d1BwBFJrhS99%2B9OjkEQ1DLImgJXPV7rJZTqfH8WAKH4rKSJS2QqcbphS5zJtxbelakxG9LnOrZklMneSeFFBhaKhqxrKWo%2FuwtDcORVOpe9IglVPLdrGCorHfcgJwZ3uGzqUZTgk%2BrExa3v%2BIQNfnJYR67x%2BrwPSpQfnJ1X6kujbuzuG1G4J9Kas8nTfzPYVdhawKOf7Kvk6hweL%2B8iU8nDdOxUxy7YzrcZNQT4vQWOpelENZDzP5MtNfSwg4lh9pdLX13oo47ezkMWsNfqfuX9sIWPiXHOQ3P7Khtss0lxocALb1YneEpjWsrMxlxszcKKivhjTixD%2FyAiSNH7cKWao2NczWhR9S1%2BmM9JljYsDNB6Zt2Y9jnLBeYyB%2BIxl5FJTr%2FHtAOAjsjQnJlT32%2FpYgA9uNTiPtJFe%2BEPeV%2B7cXm8McWCRgc5XXKW9Bpr8GjmIYZMCLG0132QXcHe%2FpoCBBye9rbTz%2Fgpj02yVS%2FQjPeARe55jsjDnBCO6JiKi5opZPs3ebMKK7xMgGOqUB9%2BBhblsjsxK99XOx%2BU0X2sphSLS4ey6MqRY9GRkHsX0vZRhnli5OttXj5a47TS95VoEIv3KnJinLyVVav3KZnS2JnVQJb1u2OMfEmoU7qar18pKTh%2Fgk6hTiaTfV2hfoB1Ig7oEChwyVM7Oz9MUR3N4EgXEehvNZsB%2BN%2F7pAcUyWJPbHsvB3dwawOojfryxqexLBV7xQUeRqsGFbAX8C4gSwShZJ&X-Amz-Signature=55a2a6089c31825dad7c8f1b990a990266747e1a30d98f08e869c1fea118344a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X52IDHRC%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDRB1bVahPKc1UxXWbZinDxUHWhB5nin9u5dExwuV3vcQIgTYB1DpV09LfMVStRO5hBQ2JwzQD%2FStmtdKfcmgNiyqAqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5%2BrurjOSDuc0ImNSrcAzU7i%2FjpRVKGHu8hQXblfWDzkNb659aqMPIScoeb3Sd4pkGymhq5ipGziHZGYitixV9r5afkm6Buz3J0WcdF0Wn%2BJ1sJB%2B%2FOoYI8lNaPRZBWOiW7V42d1BwBFJrhS99%2B9OjkEQ1DLImgJXPV7rJZTqfH8WAKH4rKSJS2QqcbphS5zJtxbelakxG9LnOrZklMneSeFFBhaKhqxrKWo%2FuwtDcORVOpe9IglVPLdrGCorHfcgJwZ3uGzqUZTgk%2BrExa3v%2BIQNfnJYR67x%2BrwPSpQfnJ1X6kujbuzuG1G4J9Kas8nTfzPYVdhawKOf7Kvk6hweL%2B8iU8nDdOxUxy7YzrcZNQT4vQWOpelENZDzP5MtNfSwg4lh9pdLX13oo47ezkMWsNfqfuX9sIWPiXHOQ3P7Khtss0lxocALb1YneEpjWsrMxlxszcKKivhjTixD%2FyAiSNH7cKWao2NczWhR9S1%2BmM9JljYsDNB6Zt2Y9jnLBeYyB%2BIxl5FJTr%2FHtAOAjsjQnJlT32%2FpYgA9uNTiPtJFe%2BEPeV%2B7cXm8McWCRgc5XXKW9Bpr8GjmIYZMCLG0132QXcHe%2FpoCBBye9rbTz%2Fgpj02yVS%2FQjPeARe55jsjDnBCO6JiKi5opZPs3ebMKK7xMgGOqUB9%2BBhblsjsxK99XOx%2BU0X2sphSLS4ey6MqRY9GRkHsX0vZRhnli5OttXj5a47TS95VoEIv3KnJinLyVVav3KZnS2JnVQJb1u2OMfEmoU7qar18pKTh%2Fgk6hTiaTfV2hfoB1Ig7oEChwyVM7Oz9MUR3N4EgXEehvNZsB%2BN%2F7pAcUyWJPbHsvB3dwawOojfryxqexLBV7xQUeRqsGFbAX8C4gSwShZJ&X-Amz-Signature=0e174ddda91e96133d5d6337e6da0a1ddae39336d491b9b2523652fcb8162b03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X52IDHRC%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDRB1bVahPKc1UxXWbZinDxUHWhB5nin9u5dExwuV3vcQIgTYB1DpV09LfMVStRO5hBQ2JwzQD%2FStmtdKfcmgNiyqAqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5%2BrurjOSDuc0ImNSrcAzU7i%2FjpRVKGHu8hQXblfWDzkNb659aqMPIScoeb3Sd4pkGymhq5ipGziHZGYitixV9r5afkm6Buz3J0WcdF0Wn%2BJ1sJB%2B%2FOoYI8lNaPRZBWOiW7V42d1BwBFJrhS99%2B9OjkEQ1DLImgJXPV7rJZTqfH8WAKH4rKSJS2QqcbphS5zJtxbelakxG9LnOrZklMneSeFFBhaKhqxrKWo%2FuwtDcORVOpe9IglVPLdrGCorHfcgJwZ3uGzqUZTgk%2BrExa3v%2BIQNfnJYR67x%2BrwPSpQfnJ1X6kujbuzuG1G4J9Kas8nTfzPYVdhawKOf7Kvk6hweL%2B8iU8nDdOxUxy7YzrcZNQT4vQWOpelENZDzP5MtNfSwg4lh9pdLX13oo47ezkMWsNfqfuX9sIWPiXHOQ3P7Khtss0lxocALb1YneEpjWsrMxlxszcKKivhjTixD%2FyAiSNH7cKWao2NczWhR9S1%2BmM9JljYsDNB6Zt2Y9jnLBeYyB%2BIxl5FJTr%2FHtAOAjsjQnJlT32%2FpYgA9uNTiPtJFe%2BEPeV%2B7cXm8McWCRgc5XXKW9Bpr8GjmIYZMCLG0132QXcHe%2FpoCBBye9rbTz%2Fgpj02yVS%2FQjPeARe55jsjDnBCO6JiKi5opZPs3ebMKK7xMgGOqUB9%2BBhblsjsxK99XOx%2BU0X2sphSLS4ey6MqRY9GRkHsX0vZRhnli5OttXj5a47TS95VoEIv3KnJinLyVVav3KZnS2JnVQJb1u2OMfEmoU7qar18pKTh%2Fgk6hTiaTfV2hfoB1Ig7oEChwyVM7Oz9MUR3N4EgXEehvNZsB%2BN%2F7pAcUyWJPbHsvB3dwawOojfryxqexLBV7xQUeRqsGFbAX8C4gSwShZJ&X-Amz-Signature=d47577d3708da46fdf44ed4ff77a94bd00877b3df24ec0985ea0bb97b70e0b15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
