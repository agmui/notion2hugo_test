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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MYADJYD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCRn%2BnbVZsXQcJ4hc9CUoyhzIGtrUlZO78J46h3d01YJwIhAOWPl6I%2FraoM9c7iNx6Sa3FMxWgIGS1AG51Qu4oNmR19Kv8DCGUQABoMNjM3NDIzMTgzODA1IgwCBDhnHGq35CVpnZkq3ANMWWMyth4JCUMlxjEUQfMQjbiWBPByCI3eODcYA%2F8YMHHUjN%2FYusRM%2FHhcT6tkjk5xG41rnssBu3xzmKFg5hWcAweif54Ai0lei8X7%2BHIi8Ugiada4EckKHaWAoAsfGJdwtnaf%2BOD6Eihm13ZFl%2FYcFraA0v7AI5ItLiP1OZC1CBuqggqgDIxOB5%2BQ0T%2B7sCL6PXsyJn%2BeizJko8zCEtrwHc5AoXOrYo8P0Cro1LoGkKRLwZQ6ju3JQPLu22WRgCYFfHhp2uQ8KiKSQ7M9no%2B1coQgR%2BwsKiJiUcUq3FTp4FQ1VS%2FbpMfQzKne%2BV0JTCLImJIXl25I%2BlDRmSl66QUI8vfysdqhnZT5TdqmpPLANa7sj25k37LVRDd5dUb50ZXnn2I78IrOOj7ul8f2aXoh5WR50J5nvB7jmnuEF0q4YsXTwlgQXhG6prR5n5jNaI2fP1gYN3TWVh3nHoeXWsfEn00Jwq%2Bgsxr9hjjGvjM7q%2F8eMh0BEwLrOXko3c%2FnDY9NtnCSsO78CxvEqzc5egMS2OG2zDoUdJKhNxrPRbItJGFmK9WvX0%2F00LPMQL3Z89LmlYPWTSBDTLwjW7zEov8%2B8oAq3erwqhVf2czrM0tXRTUvadVcLGmQT9ut%2BjD9vMnEBjqkAVYfl0426LeIruH3vL4qylw6xNozrRFcsFKe4XZ7NhMVM1BvZVCkvfJfT4i0MnJroExO1iprV0AYrf12WqAKOddJZH4JUkI1RpTAJFA7nrRoNEj8OBBrSPnVZgA7n%2FnTkUlgywQotGbxZqZWfTnlf8N0F3KK8Gv2wNtIMchv%2FolPiZ3NkIrkGUPI6HRPDQEfm3i9G1KxmDsgVRZyZ8i%2F41K55AsZ&X-Amz-Signature=2a0865ab02bdd72be38808b21587fa782b1ee1d7dc596784117376754908706a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VE3VH6O%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCCI19NbZhURbffDVZtCubkV3mp6w3fVEuHu0tfaDnRjAIgPEZhSxrUVdhmyqWfQAxOHPfh0d0oX7dKY2Q2qAazMnsq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDINBja7TPyIufFTUnCrcA6PirYWljDQN0AWzl7gjzEdVK4wef5%2FBg0j4P7WyPELPlNd3R88zgMMRYVoAyvHcesun9G34xwEIPTPftv7KcrK69jZPPyikAyrql2NFtrjxksJ%2Fp4%2Fe6rjvfqpLzq7v0A7IiLenA%2F4DdeFSl9J7Z8qb76G9tOdCvEEFrgZFqrQs5fF9PY%2BstUegCq6MU%2B8h8%2BWw1DS6RzsDpIYrtT6ZwuQCHMGRyKqkzdm6VkHYmmxHNh9OLJQxDZSpjzCcHzW3LJGV4K2RQ1WFs9CRda7eaiJ7RM515CFSJbSmAiQbcWR78K5kv2BZEb%2FzAusTJgMoq8RnEZc4LzKb%2FJK4kLtjhOa4ur6kRbX91p1jn%2FQWOhy2IFHUQupdYDi1%2F%2BXGdIZAxVAb2EPK7PmFl%2Bu%2B6%2FrHPhuhq8P%2BD%2FTCuA4CSd%2Fd%2B4YzzIzgFHeD5TEyHGQooAUQqpn6C5%2BH1Rr5bMIUV8NlAlouvE%2Fa1BiHAUAmRaBp6GJuVfILKQJBmLSLUObvjvdoqw2Zh6fx3D65LfcrBRrTFbXcJ7vynAOsrkjVCs%2FP2v81MQvGpdBjn8qREDYhcJbueb%2BiITiPsK%2FtLKJDbEBtFao4n8pbzE0FoShHEXw%2BWufGoECBTX0u0oTLx92kMO%2B7ycQGOqUB95S%2FuDGfgJsUyJDstoR6Cbd9B4jFsqEjT9%2BUWDFCeVhfOyPtWy%2Bla9Q0H7ewJffUgIL3mcYVLn7WYi8NBo6VWZE4mSbFXvMvPHEO5ch%2BwdNxD2T9e8ROBD5B37k7qa5dEXPDRAKED18jN8Ui6Avo1y7uIqtfAyLh59l1JwUIipYr1S1gwXlPhTnb%2F%2FwoWszE0LOGyJSqqNJqrZ5Vr8JTYRARNK%2FW&X-Amz-Signature=d80699bef4a4af61935b37b6b9c393cf13df63353742a8f4998f0ca358b9859b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VE3VH6O%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCCI19NbZhURbffDVZtCubkV3mp6w3fVEuHu0tfaDnRjAIgPEZhSxrUVdhmyqWfQAxOHPfh0d0oX7dKY2Q2qAazMnsq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDINBja7TPyIufFTUnCrcA6PirYWljDQN0AWzl7gjzEdVK4wef5%2FBg0j4P7WyPELPlNd3R88zgMMRYVoAyvHcesun9G34xwEIPTPftv7KcrK69jZPPyikAyrql2NFtrjxksJ%2Fp4%2Fe6rjvfqpLzq7v0A7IiLenA%2F4DdeFSl9J7Z8qb76G9tOdCvEEFrgZFqrQs5fF9PY%2BstUegCq6MU%2B8h8%2BWw1DS6RzsDpIYrtT6ZwuQCHMGRyKqkzdm6VkHYmmxHNh9OLJQxDZSpjzCcHzW3LJGV4K2RQ1WFs9CRda7eaiJ7RM515CFSJbSmAiQbcWR78K5kv2BZEb%2FzAusTJgMoq8RnEZc4LzKb%2FJK4kLtjhOa4ur6kRbX91p1jn%2FQWOhy2IFHUQupdYDi1%2F%2BXGdIZAxVAb2EPK7PmFl%2Bu%2B6%2FrHPhuhq8P%2BD%2FTCuA4CSd%2Fd%2B4YzzIzgFHeD5TEyHGQooAUQqpn6C5%2BH1Rr5bMIUV8NlAlouvE%2Fa1BiHAUAmRaBp6GJuVfILKQJBmLSLUObvjvdoqw2Zh6fx3D65LfcrBRrTFbXcJ7vynAOsrkjVCs%2FP2v81MQvGpdBjn8qREDYhcJbueb%2BiITiPsK%2FtLKJDbEBtFao4n8pbzE0FoShHEXw%2BWufGoECBTX0u0oTLx92kMO%2B7ycQGOqUB95S%2FuDGfgJsUyJDstoR6Cbd9B4jFsqEjT9%2BUWDFCeVhfOyPtWy%2Bla9Q0H7ewJffUgIL3mcYVLn7WYi8NBo6VWZE4mSbFXvMvPHEO5ch%2BwdNxD2T9e8ROBD5B37k7qa5dEXPDRAKED18jN8Ui6Avo1y7uIqtfAyLh59l1JwUIipYr1S1gwXlPhTnb%2F%2FwoWszE0LOGyJSqqNJqrZ5Vr8JTYRARNK%2FW&X-Amz-Signature=f20ea583a8e84408b422240a268a010c1b8797cc055794b9a7f2606854a0f8c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VE3VH6O%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCCI19NbZhURbffDVZtCubkV3mp6w3fVEuHu0tfaDnRjAIgPEZhSxrUVdhmyqWfQAxOHPfh0d0oX7dKY2Q2qAazMnsq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDINBja7TPyIufFTUnCrcA6PirYWljDQN0AWzl7gjzEdVK4wef5%2FBg0j4P7WyPELPlNd3R88zgMMRYVoAyvHcesun9G34xwEIPTPftv7KcrK69jZPPyikAyrql2NFtrjxksJ%2Fp4%2Fe6rjvfqpLzq7v0A7IiLenA%2F4DdeFSl9J7Z8qb76G9tOdCvEEFrgZFqrQs5fF9PY%2BstUegCq6MU%2B8h8%2BWw1DS6RzsDpIYrtT6ZwuQCHMGRyKqkzdm6VkHYmmxHNh9OLJQxDZSpjzCcHzW3LJGV4K2RQ1WFs9CRda7eaiJ7RM515CFSJbSmAiQbcWR78K5kv2BZEb%2FzAusTJgMoq8RnEZc4LzKb%2FJK4kLtjhOa4ur6kRbX91p1jn%2FQWOhy2IFHUQupdYDi1%2F%2BXGdIZAxVAb2EPK7PmFl%2Bu%2B6%2FrHPhuhq8P%2BD%2FTCuA4CSd%2Fd%2B4YzzIzgFHeD5TEyHGQooAUQqpn6C5%2BH1Rr5bMIUV8NlAlouvE%2Fa1BiHAUAmRaBp6GJuVfILKQJBmLSLUObvjvdoqw2Zh6fx3D65LfcrBRrTFbXcJ7vynAOsrkjVCs%2FP2v81MQvGpdBjn8qREDYhcJbueb%2BiITiPsK%2FtLKJDbEBtFao4n8pbzE0FoShHEXw%2BWufGoECBTX0u0oTLx92kMO%2B7ycQGOqUB95S%2FuDGfgJsUyJDstoR6Cbd9B4jFsqEjT9%2BUWDFCeVhfOyPtWy%2Bla9Q0H7ewJffUgIL3mcYVLn7WYi8NBo6VWZE4mSbFXvMvPHEO5ch%2BwdNxD2T9e8ROBD5B37k7qa5dEXPDRAKED18jN8Ui6Avo1y7uIqtfAyLh59l1JwUIipYr1S1gwXlPhTnb%2F%2FwoWszE0LOGyJSqqNJqrZ5Vr8JTYRARNK%2FW&X-Amz-Signature=638fcff1399ef7ad5ac5c791c876b420a50fc58c04d416b190df9ff09670923a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VE3VH6O%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCCI19NbZhURbffDVZtCubkV3mp6w3fVEuHu0tfaDnRjAIgPEZhSxrUVdhmyqWfQAxOHPfh0d0oX7dKY2Q2qAazMnsq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDINBja7TPyIufFTUnCrcA6PirYWljDQN0AWzl7gjzEdVK4wef5%2FBg0j4P7WyPELPlNd3R88zgMMRYVoAyvHcesun9G34xwEIPTPftv7KcrK69jZPPyikAyrql2NFtrjxksJ%2Fp4%2Fe6rjvfqpLzq7v0A7IiLenA%2F4DdeFSl9J7Z8qb76G9tOdCvEEFrgZFqrQs5fF9PY%2BstUegCq6MU%2B8h8%2BWw1DS6RzsDpIYrtT6ZwuQCHMGRyKqkzdm6VkHYmmxHNh9OLJQxDZSpjzCcHzW3LJGV4K2RQ1WFs9CRda7eaiJ7RM515CFSJbSmAiQbcWR78K5kv2BZEb%2FzAusTJgMoq8RnEZc4LzKb%2FJK4kLtjhOa4ur6kRbX91p1jn%2FQWOhy2IFHUQupdYDi1%2F%2BXGdIZAxVAb2EPK7PmFl%2Bu%2B6%2FrHPhuhq8P%2BD%2FTCuA4CSd%2Fd%2B4YzzIzgFHeD5TEyHGQooAUQqpn6C5%2BH1Rr5bMIUV8NlAlouvE%2Fa1BiHAUAmRaBp6GJuVfILKQJBmLSLUObvjvdoqw2Zh6fx3D65LfcrBRrTFbXcJ7vynAOsrkjVCs%2FP2v81MQvGpdBjn8qREDYhcJbueb%2BiITiPsK%2FtLKJDbEBtFao4n8pbzE0FoShHEXw%2BWufGoECBTX0u0oTLx92kMO%2B7ycQGOqUB95S%2FuDGfgJsUyJDstoR6Cbd9B4jFsqEjT9%2BUWDFCeVhfOyPtWy%2Bla9Q0H7ewJffUgIL3mcYVLn7WYi8NBo6VWZE4mSbFXvMvPHEO5ch%2BwdNxD2T9e8ROBD5B37k7qa5dEXPDRAKED18jN8Ui6Avo1y7uIqtfAyLh59l1JwUIipYr1S1gwXlPhTnb%2F%2FwoWszE0LOGyJSqqNJqrZ5Vr8JTYRARNK%2FW&X-Amz-Signature=ab2fa3c34f6e240788be92e81d44873ff73de8dbf0fca972abdb7ba01f3e71ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VE3VH6O%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCCI19NbZhURbffDVZtCubkV3mp6w3fVEuHu0tfaDnRjAIgPEZhSxrUVdhmyqWfQAxOHPfh0d0oX7dKY2Q2qAazMnsq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDINBja7TPyIufFTUnCrcA6PirYWljDQN0AWzl7gjzEdVK4wef5%2FBg0j4P7WyPELPlNd3R88zgMMRYVoAyvHcesun9G34xwEIPTPftv7KcrK69jZPPyikAyrql2NFtrjxksJ%2Fp4%2Fe6rjvfqpLzq7v0A7IiLenA%2F4DdeFSl9J7Z8qb76G9tOdCvEEFrgZFqrQs5fF9PY%2BstUegCq6MU%2B8h8%2BWw1DS6RzsDpIYrtT6ZwuQCHMGRyKqkzdm6VkHYmmxHNh9OLJQxDZSpjzCcHzW3LJGV4K2RQ1WFs9CRda7eaiJ7RM515CFSJbSmAiQbcWR78K5kv2BZEb%2FzAusTJgMoq8RnEZc4LzKb%2FJK4kLtjhOa4ur6kRbX91p1jn%2FQWOhy2IFHUQupdYDi1%2F%2BXGdIZAxVAb2EPK7PmFl%2Bu%2B6%2FrHPhuhq8P%2BD%2FTCuA4CSd%2Fd%2B4YzzIzgFHeD5TEyHGQooAUQqpn6C5%2BH1Rr5bMIUV8NlAlouvE%2Fa1BiHAUAmRaBp6GJuVfILKQJBmLSLUObvjvdoqw2Zh6fx3D65LfcrBRrTFbXcJ7vynAOsrkjVCs%2FP2v81MQvGpdBjn8qREDYhcJbueb%2BiITiPsK%2FtLKJDbEBtFao4n8pbzE0FoShHEXw%2BWufGoECBTX0u0oTLx92kMO%2B7ycQGOqUB95S%2FuDGfgJsUyJDstoR6Cbd9B4jFsqEjT9%2BUWDFCeVhfOyPtWy%2Bla9Q0H7ewJffUgIL3mcYVLn7WYi8NBo6VWZE4mSbFXvMvPHEO5ch%2BwdNxD2T9e8ROBD5B37k7qa5dEXPDRAKED18jN8Ui6Avo1y7uIqtfAyLh59l1JwUIipYr1S1gwXlPhTnb%2F%2FwoWszE0LOGyJSqqNJqrZ5Vr8JTYRARNK%2FW&X-Amz-Signature=0726fc1b2c4c41a05fe8571d37b232815ea272393cf550dae80e5ab8fbb69654&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VE3VH6O%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCCI19NbZhURbffDVZtCubkV3mp6w3fVEuHu0tfaDnRjAIgPEZhSxrUVdhmyqWfQAxOHPfh0d0oX7dKY2Q2qAazMnsq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDINBja7TPyIufFTUnCrcA6PirYWljDQN0AWzl7gjzEdVK4wef5%2FBg0j4P7WyPELPlNd3R88zgMMRYVoAyvHcesun9G34xwEIPTPftv7KcrK69jZPPyikAyrql2NFtrjxksJ%2Fp4%2Fe6rjvfqpLzq7v0A7IiLenA%2F4DdeFSl9J7Z8qb76G9tOdCvEEFrgZFqrQs5fF9PY%2BstUegCq6MU%2B8h8%2BWw1DS6RzsDpIYrtT6ZwuQCHMGRyKqkzdm6VkHYmmxHNh9OLJQxDZSpjzCcHzW3LJGV4K2RQ1WFs9CRda7eaiJ7RM515CFSJbSmAiQbcWR78K5kv2BZEb%2FzAusTJgMoq8RnEZc4LzKb%2FJK4kLtjhOa4ur6kRbX91p1jn%2FQWOhy2IFHUQupdYDi1%2F%2BXGdIZAxVAb2EPK7PmFl%2Bu%2B6%2FrHPhuhq8P%2BD%2FTCuA4CSd%2Fd%2B4YzzIzgFHeD5TEyHGQooAUQqpn6C5%2BH1Rr5bMIUV8NlAlouvE%2Fa1BiHAUAmRaBp6GJuVfILKQJBmLSLUObvjvdoqw2Zh6fx3D65LfcrBRrTFbXcJ7vynAOsrkjVCs%2FP2v81MQvGpdBjn8qREDYhcJbueb%2BiITiPsK%2FtLKJDbEBtFao4n8pbzE0FoShHEXw%2BWufGoECBTX0u0oTLx92kMO%2B7ycQGOqUB95S%2FuDGfgJsUyJDstoR6Cbd9B4jFsqEjT9%2BUWDFCeVhfOyPtWy%2Bla9Q0H7ewJffUgIL3mcYVLn7WYi8NBo6VWZE4mSbFXvMvPHEO5ch%2BwdNxD2T9e8ROBD5B37k7qa5dEXPDRAKED18jN8Ui6Avo1y7uIqtfAyLh59l1JwUIipYr1S1gwXlPhTnb%2F%2FwoWszE0LOGyJSqqNJqrZ5Vr8JTYRARNK%2FW&X-Amz-Signature=1e814e58b61077fa725a1194ea83e759101de9d6dd33dc077b212821984af9da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VE3VH6O%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCCI19NbZhURbffDVZtCubkV3mp6w3fVEuHu0tfaDnRjAIgPEZhSxrUVdhmyqWfQAxOHPfh0d0oX7dKY2Q2qAazMnsq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDINBja7TPyIufFTUnCrcA6PirYWljDQN0AWzl7gjzEdVK4wef5%2FBg0j4P7WyPELPlNd3R88zgMMRYVoAyvHcesun9G34xwEIPTPftv7KcrK69jZPPyikAyrql2NFtrjxksJ%2Fp4%2Fe6rjvfqpLzq7v0A7IiLenA%2F4DdeFSl9J7Z8qb76G9tOdCvEEFrgZFqrQs5fF9PY%2BstUegCq6MU%2B8h8%2BWw1DS6RzsDpIYrtT6ZwuQCHMGRyKqkzdm6VkHYmmxHNh9OLJQxDZSpjzCcHzW3LJGV4K2RQ1WFs9CRda7eaiJ7RM515CFSJbSmAiQbcWR78K5kv2BZEb%2FzAusTJgMoq8RnEZc4LzKb%2FJK4kLtjhOa4ur6kRbX91p1jn%2FQWOhy2IFHUQupdYDi1%2F%2BXGdIZAxVAb2EPK7PmFl%2Bu%2B6%2FrHPhuhq8P%2BD%2FTCuA4CSd%2Fd%2B4YzzIzgFHeD5TEyHGQooAUQqpn6C5%2BH1Rr5bMIUV8NlAlouvE%2Fa1BiHAUAmRaBp6GJuVfILKQJBmLSLUObvjvdoqw2Zh6fx3D65LfcrBRrTFbXcJ7vynAOsrkjVCs%2FP2v81MQvGpdBjn8qREDYhcJbueb%2BiITiPsK%2FtLKJDbEBtFao4n8pbzE0FoShHEXw%2BWufGoECBTX0u0oTLx92kMO%2B7ycQGOqUB95S%2FuDGfgJsUyJDstoR6Cbd9B4jFsqEjT9%2BUWDFCeVhfOyPtWy%2Bla9Q0H7ewJffUgIL3mcYVLn7WYi8NBo6VWZE4mSbFXvMvPHEO5ch%2BwdNxD2T9e8ROBD5B37k7qa5dEXPDRAKED18jN8Ui6Avo1y7uIqtfAyLh59l1JwUIipYr1S1gwXlPhTnb%2F%2FwoWszE0LOGyJSqqNJqrZ5Vr8JTYRARNK%2FW&X-Amz-Signature=469b8d4808c2a87c9b5be1055b49d935caa88029a2f28e1512f34e514b471552&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VE3VH6O%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCCI19NbZhURbffDVZtCubkV3mp6w3fVEuHu0tfaDnRjAIgPEZhSxrUVdhmyqWfQAxOHPfh0d0oX7dKY2Q2qAazMnsq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDINBja7TPyIufFTUnCrcA6PirYWljDQN0AWzl7gjzEdVK4wef5%2FBg0j4P7WyPELPlNd3R88zgMMRYVoAyvHcesun9G34xwEIPTPftv7KcrK69jZPPyikAyrql2NFtrjxksJ%2Fp4%2Fe6rjvfqpLzq7v0A7IiLenA%2F4DdeFSl9J7Z8qb76G9tOdCvEEFrgZFqrQs5fF9PY%2BstUegCq6MU%2B8h8%2BWw1DS6RzsDpIYrtT6ZwuQCHMGRyKqkzdm6VkHYmmxHNh9OLJQxDZSpjzCcHzW3LJGV4K2RQ1WFs9CRda7eaiJ7RM515CFSJbSmAiQbcWR78K5kv2BZEb%2FzAusTJgMoq8RnEZc4LzKb%2FJK4kLtjhOa4ur6kRbX91p1jn%2FQWOhy2IFHUQupdYDi1%2F%2BXGdIZAxVAb2EPK7PmFl%2Bu%2B6%2FrHPhuhq8P%2BD%2FTCuA4CSd%2Fd%2B4YzzIzgFHeD5TEyHGQooAUQqpn6C5%2BH1Rr5bMIUV8NlAlouvE%2Fa1BiHAUAmRaBp6GJuVfILKQJBmLSLUObvjvdoqw2Zh6fx3D65LfcrBRrTFbXcJ7vynAOsrkjVCs%2FP2v81MQvGpdBjn8qREDYhcJbueb%2BiITiPsK%2FtLKJDbEBtFao4n8pbzE0FoShHEXw%2BWufGoECBTX0u0oTLx92kMO%2B7ycQGOqUB95S%2FuDGfgJsUyJDstoR6Cbd9B4jFsqEjT9%2BUWDFCeVhfOyPtWy%2Bla9Q0H7ewJffUgIL3mcYVLn7WYi8NBo6VWZE4mSbFXvMvPHEO5ch%2BwdNxD2T9e8ROBD5B37k7qa5dEXPDRAKED18jN8Ui6Avo1y7uIqtfAyLh59l1JwUIipYr1S1gwXlPhTnb%2F%2FwoWszE0LOGyJSqqNJqrZ5Vr8JTYRARNK%2FW&X-Amz-Signature=584e62bbecd774ba136224113d563bd89a835d35ec7ffbc7d996dde6b08fd4da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VE3VH6O%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCCI19NbZhURbffDVZtCubkV3mp6w3fVEuHu0tfaDnRjAIgPEZhSxrUVdhmyqWfQAxOHPfh0d0oX7dKY2Q2qAazMnsq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDINBja7TPyIufFTUnCrcA6PirYWljDQN0AWzl7gjzEdVK4wef5%2FBg0j4P7WyPELPlNd3R88zgMMRYVoAyvHcesun9G34xwEIPTPftv7KcrK69jZPPyikAyrql2NFtrjxksJ%2Fp4%2Fe6rjvfqpLzq7v0A7IiLenA%2F4DdeFSl9J7Z8qb76G9tOdCvEEFrgZFqrQs5fF9PY%2BstUegCq6MU%2B8h8%2BWw1DS6RzsDpIYrtT6ZwuQCHMGRyKqkzdm6VkHYmmxHNh9OLJQxDZSpjzCcHzW3LJGV4K2RQ1WFs9CRda7eaiJ7RM515CFSJbSmAiQbcWR78K5kv2BZEb%2FzAusTJgMoq8RnEZc4LzKb%2FJK4kLtjhOa4ur6kRbX91p1jn%2FQWOhy2IFHUQupdYDi1%2F%2BXGdIZAxVAb2EPK7PmFl%2Bu%2B6%2FrHPhuhq8P%2BD%2FTCuA4CSd%2Fd%2B4YzzIzgFHeD5TEyHGQooAUQqpn6C5%2BH1Rr5bMIUV8NlAlouvE%2Fa1BiHAUAmRaBp6GJuVfILKQJBmLSLUObvjvdoqw2Zh6fx3D65LfcrBRrTFbXcJ7vynAOsrkjVCs%2FP2v81MQvGpdBjn8qREDYhcJbueb%2BiITiPsK%2FtLKJDbEBtFao4n8pbzE0FoShHEXw%2BWufGoECBTX0u0oTLx92kMO%2B7ycQGOqUB95S%2FuDGfgJsUyJDstoR6Cbd9B4jFsqEjT9%2BUWDFCeVhfOyPtWy%2Bla9Q0H7ewJffUgIL3mcYVLn7WYi8NBo6VWZE4mSbFXvMvPHEO5ch%2BwdNxD2T9e8ROBD5B37k7qa5dEXPDRAKED18jN8Ui6Avo1y7uIqtfAyLh59l1JwUIipYr1S1gwXlPhTnb%2F%2FwoWszE0LOGyJSqqNJqrZ5Vr8JTYRARNK%2FW&X-Amz-Signature=76af8ddf8e4524349ce6071eeb9b7848b78a86109eff89e358f18bcc2992bdf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VE3VH6O%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCCI19NbZhURbffDVZtCubkV3mp6w3fVEuHu0tfaDnRjAIgPEZhSxrUVdhmyqWfQAxOHPfh0d0oX7dKY2Q2qAazMnsq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDINBja7TPyIufFTUnCrcA6PirYWljDQN0AWzl7gjzEdVK4wef5%2FBg0j4P7WyPELPlNd3R88zgMMRYVoAyvHcesun9G34xwEIPTPftv7KcrK69jZPPyikAyrql2NFtrjxksJ%2Fp4%2Fe6rjvfqpLzq7v0A7IiLenA%2F4DdeFSl9J7Z8qb76G9tOdCvEEFrgZFqrQs5fF9PY%2BstUegCq6MU%2B8h8%2BWw1DS6RzsDpIYrtT6ZwuQCHMGRyKqkzdm6VkHYmmxHNh9OLJQxDZSpjzCcHzW3LJGV4K2RQ1WFs9CRda7eaiJ7RM515CFSJbSmAiQbcWR78K5kv2BZEb%2FzAusTJgMoq8RnEZc4LzKb%2FJK4kLtjhOa4ur6kRbX91p1jn%2FQWOhy2IFHUQupdYDi1%2F%2BXGdIZAxVAb2EPK7PmFl%2Bu%2B6%2FrHPhuhq8P%2BD%2FTCuA4CSd%2Fd%2B4YzzIzgFHeD5TEyHGQooAUQqpn6C5%2BH1Rr5bMIUV8NlAlouvE%2Fa1BiHAUAmRaBp6GJuVfILKQJBmLSLUObvjvdoqw2Zh6fx3D65LfcrBRrTFbXcJ7vynAOsrkjVCs%2FP2v81MQvGpdBjn8qREDYhcJbueb%2BiITiPsK%2FtLKJDbEBtFao4n8pbzE0FoShHEXw%2BWufGoECBTX0u0oTLx92kMO%2B7ycQGOqUB95S%2FuDGfgJsUyJDstoR6Cbd9B4jFsqEjT9%2BUWDFCeVhfOyPtWy%2Bla9Q0H7ewJffUgIL3mcYVLn7WYi8NBo6VWZE4mSbFXvMvPHEO5ch%2BwdNxD2T9e8ROBD5B37k7qa5dEXPDRAKED18jN8Ui6Avo1y7uIqtfAyLh59l1JwUIipYr1S1gwXlPhTnb%2F%2FwoWszE0LOGyJSqqNJqrZ5Vr8JTYRARNK%2FW&X-Amz-Signature=ab2fa3c34f6e240788be92e81d44873ff73de8dbf0fca972abdb7ba01f3e71ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
