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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGZDXKAB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGI3KmsBtRbjaKMW68rXXe7nte0p1bYQyCO1mfDEBHovAiBGGGKaa0w1D%2F0npi%2FG2njjmPJz3WrU%2BOwmekKoNjwupyr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMeTWWK%2F7l3qs2pFfCKtwDxKKQzi7ZKQtoblfYk8WWCTESZ31BPe8nqG6U8Pq6ena0nu4eZMXIJsrehIwstNB5skL3ixC0gtffWaoeynw2lq0GHPh0y2A%2BxF4hQhcTe2FWCRz3GyE%2BdPtqdHMQQW4UClB3hzpsI7TfDKui3fWTQIgyHjJnT0xfLOy05jK9tc400KaESpiHmh%2FhW%2BvJNMwMepOQ6i6gji7wCpdnVTm7Fhti6Oo0NCc5Xf%2FNyl1EVyjurMJ1Vfgdt2AZVu%2FpwaRLqQHJUiJP6NiAzGR%2BcdbACkfawzARdjLmQGhA1018sIHG51rEm2zlCBhjzIHrWpfvy7CrROfT%2B80p0KVJF%2BCAGfJkWQLQcT4zG6zXpMSHwb5zmPxx8rQFDZKJxbj64NNkXYHurTFDcUqqHn%2BojpvLT5FdvAQIKWUWk2vDbMuI4truJ1UYVCulTvYeIzOVrL8zLdGTmASlKoKku8SxPUftTK71vHNxSFtNzcfeh2C1I1egSOS3yyFFBFLvHu0M0As56WKSIb9PXyWsulH0rxbl%2BAtSV5jQF9%2FLL2OchFMwzaOf4pa7JLWLfGjSBwlAs%2FgEttJDRkSeplNYWkMD%2F8LpsHENjJLbfgNYvJqlUE2hGxD%2B1W30RfSP6OFnLtkw5vjwxAY6pgFhIm2jzAF4d%2FzreRkA9ch4PeSBr4jS5bVwakZHsifzIJSDjTjDY6Ve1m672U71s5oAs4nOOcgQ%2FBzm2k7fxyd3ovOddhd3dYnCuDAVubLZHEsOy43JGiWg1lxWWUSRrZQLEoSxqic2SK405ImqOyx7Q1DhjtxMq7aX8tZickgCJk%2BMode5534Lr2u3yopfz10Dr43tE4tqY1vaB0wgF5T1j4MUj%2F7s&X-Amz-Signature=51f75e20c666708b5882f41892d6159bcbdb7f8dfc0c93ec3e34965424acbc15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DLX2IE5%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLb2oT1c%2F16wE2jbS7OCorsFdmtg3IjkPdp9ZOBVpy1wIhANMJUNd1u1c9TzsNLt98MyNXiLyAj3fjiuS1Ewi%2BNBYXKv8DCCgQABoMNjM3NDIzMTgzODA1IgwGLg2J48ZriLxm7Ooq3AM83t1Xuam832XcAViezErwZfc2%2BY9XaF%2BOi%2F%2BTfnM0kDC3xUdKdP0XM3joaF2hxwBnyL1AoeBmKnNKfmw7yhKPVc%2BKvQd%2BOqYcyk73fL%2FqpLtN91LG90ewczVnIcA3xzPv1jwHWWAOzidbb3nyAdI5O9yvg6S7hF7Zle1e3pT%2Fk8uimzrgE4I1uT9xkLPU9UsOlWxQgeRgIcSsaaiz62us%2B2F4niKL3UxNvSCRO21ztgBQdLpE5BNtBgljyc%2BmyGoru25qMgb7Q5%2FzlCtllxPGU4ssdYXkj%2FDubXXX%2F4txtU%2FjaYL0J%2BTcdRFZnnEZqG9qiVhdTsB%2F0hvGKTNCV8EvwbyZXWlAkza4mfd1dLgi4n90qS%2FwogitdG3Aj%2FZ3l%2BhFrf9xYtAVHK1ClBR3tSHx0q3hbayPYS9zQw4mUOYSYoZreNcHGj6uXCK713YoqhhYKedaRLkxbG4%2B%2BndVGRpQF8I03oTopmC5hvQzIwy0Ly7EdQliuU1mQFVTwu%2FLJBZhixd7tF%2F15YGHqcNGVxd4mPLQXn9Du4H1e867g9%2BhhhHLrK3vSfwJOKoSTLGUPsIEG6LFkA3m4kQ1e5j4isjdYmzx%2BBxpqNqWonjSr47fNLSy5ajHuTVr7IofQTCs%2BfDEBjqkAd%2BKaiCbC6EjQc5KuelWMtWOKziZKlNP7l5vZm2dTUocBnKtQSmw3OhRSQx6JjO4BYFYxIwOc5YtZRtWvg9bY4e56rVAphhJ1KpAh2jmap9tufycQBkAzVArwxSjTqmO9%2Bst2LfHHJ3IEB5Xlxh64hT0Zw3D%2BtSaNr%2FhMfIlZ%2FEn%2BqO5MCqCs%2FuijkTrq6GqvkBK9oq7XHuFTfxbvRibTyhHgU%2Fe&X-Amz-Signature=94e2f2ad1d82e1972cd1a10a8da5bbe81c6e6711782b985c17ea925d0fc6650b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DLX2IE5%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLb2oT1c%2F16wE2jbS7OCorsFdmtg3IjkPdp9ZOBVpy1wIhANMJUNd1u1c9TzsNLt98MyNXiLyAj3fjiuS1Ewi%2BNBYXKv8DCCgQABoMNjM3NDIzMTgzODA1IgwGLg2J48ZriLxm7Ooq3AM83t1Xuam832XcAViezErwZfc2%2BY9XaF%2BOi%2F%2BTfnM0kDC3xUdKdP0XM3joaF2hxwBnyL1AoeBmKnNKfmw7yhKPVc%2BKvQd%2BOqYcyk73fL%2FqpLtN91LG90ewczVnIcA3xzPv1jwHWWAOzidbb3nyAdI5O9yvg6S7hF7Zle1e3pT%2Fk8uimzrgE4I1uT9xkLPU9UsOlWxQgeRgIcSsaaiz62us%2B2F4niKL3UxNvSCRO21ztgBQdLpE5BNtBgljyc%2BmyGoru25qMgb7Q5%2FzlCtllxPGU4ssdYXkj%2FDubXXX%2F4txtU%2FjaYL0J%2BTcdRFZnnEZqG9qiVhdTsB%2F0hvGKTNCV8EvwbyZXWlAkza4mfd1dLgi4n90qS%2FwogitdG3Aj%2FZ3l%2BhFrf9xYtAVHK1ClBR3tSHx0q3hbayPYS9zQw4mUOYSYoZreNcHGj6uXCK713YoqhhYKedaRLkxbG4%2B%2BndVGRpQF8I03oTopmC5hvQzIwy0Ly7EdQliuU1mQFVTwu%2FLJBZhixd7tF%2F15YGHqcNGVxd4mPLQXn9Du4H1e867g9%2BhhhHLrK3vSfwJOKoSTLGUPsIEG6LFkA3m4kQ1e5j4isjdYmzx%2BBxpqNqWonjSr47fNLSy5ajHuTVr7IofQTCs%2BfDEBjqkAd%2BKaiCbC6EjQc5KuelWMtWOKziZKlNP7l5vZm2dTUocBnKtQSmw3OhRSQx6JjO4BYFYxIwOc5YtZRtWvg9bY4e56rVAphhJ1KpAh2jmap9tufycQBkAzVArwxSjTqmO9%2Bst2LfHHJ3IEB5Xlxh64hT0Zw3D%2BtSaNr%2FhMfIlZ%2FEn%2BqO5MCqCs%2FuijkTrq6GqvkBK9oq7XHuFTfxbvRibTyhHgU%2Fe&X-Amz-Signature=4e41523073c76cc84bad5c486f9537b5783dc4d713849f4e4d152ea76eabbebe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DLX2IE5%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLb2oT1c%2F16wE2jbS7OCorsFdmtg3IjkPdp9ZOBVpy1wIhANMJUNd1u1c9TzsNLt98MyNXiLyAj3fjiuS1Ewi%2BNBYXKv8DCCgQABoMNjM3NDIzMTgzODA1IgwGLg2J48ZriLxm7Ooq3AM83t1Xuam832XcAViezErwZfc2%2BY9XaF%2BOi%2F%2BTfnM0kDC3xUdKdP0XM3joaF2hxwBnyL1AoeBmKnNKfmw7yhKPVc%2BKvQd%2BOqYcyk73fL%2FqpLtN91LG90ewczVnIcA3xzPv1jwHWWAOzidbb3nyAdI5O9yvg6S7hF7Zle1e3pT%2Fk8uimzrgE4I1uT9xkLPU9UsOlWxQgeRgIcSsaaiz62us%2B2F4niKL3UxNvSCRO21ztgBQdLpE5BNtBgljyc%2BmyGoru25qMgb7Q5%2FzlCtllxPGU4ssdYXkj%2FDubXXX%2F4txtU%2FjaYL0J%2BTcdRFZnnEZqG9qiVhdTsB%2F0hvGKTNCV8EvwbyZXWlAkza4mfd1dLgi4n90qS%2FwogitdG3Aj%2FZ3l%2BhFrf9xYtAVHK1ClBR3tSHx0q3hbayPYS9zQw4mUOYSYoZreNcHGj6uXCK713YoqhhYKedaRLkxbG4%2B%2BndVGRpQF8I03oTopmC5hvQzIwy0Ly7EdQliuU1mQFVTwu%2FLJBZhixd7tF%2F15YGHqcNGVxd4mPLQXn9Du4H1e867g9%2BhhhHLrK3vSfwJOKoSTLGUPsIEG6LFkA3m4kQ1e5j4isjdYmzx%2BBxpqNqWonjSr47fNLSy5ajHuTVr7IofQTCs%2BfDEBjqkAd%2BKaiCbC6EjQc5KuelWMtWOKziZKlNP7l5vZm2dTUocBnKtQSmw3OhRSQx6JjO4BYFYxIwOc5YtZRtWvg9bY4e56rVAphhJ1KpAh2jmap9tufycQBkAzVArwxSjTqmO9%2Bst2LfHHJ3IEB5Xlxh64hT0Zw3D%2BtSaNr%2FhMfIlZ%2FEn%2BqO5MCqCs%2FuijkTrq6GqvkBK9oq7XHuFTfxbvRibTyhHgU%2Fe&X-Amz-Signature=e35ad14e61abffd61833cf6cdb28b56e292478ad9e2965072e46e6cfbe2ada32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DLX2IE5%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLb2oT1c%2F16wE2jbS7OCorsFdmtg3IjkPdp9ZOBVpy1wIhANMJUNd1u1c9TzsNLt98MyNXiLyAj3fjiuS1Ewi%2BNBYXKv8DCCgQABoMNjM3NDIzMTgzODA1IgwGLg2J48ZriLxm7Ooq3AM83t1Xuam832XcAViezErwZfc2%2BY9XaF%2BOi%2F%2BTfnM0kDC3xUdKdP0XM3joaF2hxwBnyL1AoeBmKnNKfmw7yhKPVc%2BKvQd%2BOqYcyk73fL%2FqpLtN91LG90ewczVnIcA3xzPv1jwHWWAOzidbb3nyAdI5O9yvg6S7hF7Zle1e3pT%2Fk8uimzrgE4I1uT9xkLPU9UsOlWxQgeRgIcSsaaiz62us%2B2F4niKL3UxNvSCRO21ztgBQdLpE5BNtBgljyc%2BmyGoru25qMgb7Q5%2FzlCtllxPGU4ssdYXkj%2FDubXXX%2F4txtU%2FjaYL0J%2BTcdRFZnnEZqG9qiVhdTsB%2F0hvGKTNCV8EvwbyZXWlAkza4mfd1dLgi4n90qS%2FwogitdG3Aj%2FZ3l%2BhFrf9xYtAVHK1ClBR3tSHx0q3hbayPYS9zQw4mUOYSYoZreNcHGj6uXCK713YoqhhYKedaRLkxbG4%2B%2BndVGRpQF8I03oTopmC5hvQzIwy0Ly7EdQliuU1mQFVTwu%2FLJBZhixd7tF%2F15YGHqcNGVxd4mPLQXn9Du4H1e867g9%2BhhhHLrK3vSfwJOKoSTLGUPsIEG6LFkA3m4kQ1e5j4isjdYmzx%2BBxpqNqWonjSr47fNLSy5ajHuTVr7IofQTCs%2BfDEBjqkAd%2BKaiCbC6EjQc5KuelWMtWOKziZKlNP7l5vZm2dTUocBnKtQSmw3OhRSQx6JjO4BYFYxIwOc5YtZRtWvg9bY4e56rVAphhJ1KpAh2jmap9tufycQBkAzVArwxSjTqmO9%2Bst2LfHHJ3IEB5Xlxh64hT0Zw3D%2BtSaNr%2FhMfIlZ%2FEn%2BqO5MCqCs%2FuijkTrq6GqvkBK9oq7XHuFTfxbvRibTyhHgU%2Fe&X-Amz-Signature=452a0c3f833c610450f6eddad57bba532fdf6235271be80258298467b27aa4b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DLX2IE5%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLb2oT1c%2F16wE2jbS7OCorsFdmtg3IjkPdp9ZOBVpy1wIhANMJUNd1u1c9TzsNLt98MyNXiLyAj3fjiuS1Ewi%2BNBYXKv8DCCgQABoMNjM3NDIzMTgzODA1IgwGLg2J48ZriLxm7Ooq3AM83t1Xuam832XcAViezErwZfc2%2BY9XaF%2BOi%2F%2BTfnM0kDC3xUdKdP0XM3joaF2hxwBnyL1AoeBmKnNKfmw7yhKPVc%2BKvQd%2BOqYcyk73fL%2FqpLtN91LG90ewczVnIcA3xzPv1jwHWWAOzidbb3nyAdI5O9yvg6S7hF7Zle1e3pT%2Fk8uimzrgE4I1uT9xkLPU9UsOlWxQgeRgIcSsaaiz62us%2B2F4niKL3UxNvSCRO21ztgBQdLpE5BNtBgljyc%2BmyGoru25qMgb7Q5%2FzlCtllxPGU4ssdYXkj%2FDubXXX%2F4txtU%2FjaYL0J%2BTcdRFZnnEZqG9qiVhdTsB%2F0hvGKTNCV8EvwbyZXWlAkza4mfd1dLgi4n90qS%2FwogitdG3Aj%2FZ3l%2BhFrf9xYtAVHK1ClBR3tSHx0q3hbayPYS9zQw4mUOYSYoZreNcHGj6uXCK713YoqhhYKedaRLkxbG4%2B%2BndVGRpQF8I03oTopmC5hvQzIwy0Ly7EdQliuU1mQFVTwu%2FLJBZhixd7tF%2F15YGHqcNGVxd4mPLQXn9Du4H1e867g9%2BhhhHLrK3vSfwJOKoSTLGUPsIEG6LFkA3m4kQ1e5j4isjdYmzx%2BBxpqNqWonjSr47fNLSy5ajHuTVr7IofQTCs%2BfDEBjqkAd%2BKaiCbC6EjQc5KuelWMtWOKziZKlNP7l5vZm2dTUocBnKtQSmw3OhRSQx6JjO4BYFYxIwOc5YtZRtWvg9bY4e56rVAphhJ1KpAh2jmap9tufycQBkAzVArwxSjTqmO9%2Bst2LfHHJ3IEB5Xlxh64hT0Zw3D%2BtSaNr%2FhMfIlZ%2FEn%2BqO5MCqCs%2FuijkTrq6GqvkBK9oq7XHuFTfxbvRibTyhHgU%2Fe&X-Amz-Signature=3fc234670e8ac2a034902b715e376d3a2059088a3692418962b440b4c3962b18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DLX2IE5%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLb2oT1c%2F16wE2jbS7OCorsFdmtg3IjkPdp9ZOBVpy1wIhANMJUNd1u1c9TzsNLt98MyNXiLyAj3fjiuS1Ewi%2BNBYXKv8DCCgQABoMNjM3NDIzMTgzODA1IgwGLg2J48ZriLxm7Ooq3AM83t1Xuam832XcAViezErwZfc2%2BY9XaF%2BOi%2F%2BTfnM0kDC3xUdKdP0XM3joaF2hxwBnyL1AoeBmKnNKfmw7yhKPVc%2BKvQd%2BOqYcyk73fL%2FqpLtN91LG90ewczVnIcA3xzPv1jwHWWAOzidbb3nyAdI5O9yvg6S7hF7Zle1e3pT%2Fk8uimzrgE4I1uT9xkLPU9UsOlWxQgeRgIcSsaaiz62us%2B2F4niKL3UxNvSCRO21ztgBQdLpE5BNtBgljyc%2BmyGoru25qMgb7Q5%2FzlCtllxPGU4ssdYXkj%2FDubXXX%2F4txtU%2FjaYL0J%2BTcdRFZnnEZqG9qiVhdTsB%2F0hvGKTNCV8EvwbyZXWlAkza4mfd1dLgi4n90qS%2FwogitdG3Aj%2FZ3l%2BhFrf9xYtAVHK1ClBR3tSHx0q3hbayPYS9zQw4mUOYSYoZreNcHGj6uXCK713YoqhhYKedaRLkxbG4%2B%2BndVGRpQF8I03oTopmC5hvQzIwy0Ly7EdQliuU1mQFVTwu%2FLJBZhixd7tF%2F15YGHqcNGVxd4mPLQXn9Du4H1e867g9%2BhhhHLrK3vSfwJOKoSTLGUPsIEG6LFkA3m4kQ1e5j4isjdYmzx%2BBxpqNqWonjSr47fNLSy5ajHuTVr7IofQTCs%2BfDEBjqkAd%2BKaiCbC6EjQc5KuelWMtWOKziZKlNP7l5vZm2dTUocBnKtQSmw3OhRSQx6JjO4BYFYxIwOc5YtZRtWvg9bY4e56rVAphhJ1KpAh2jmap9tufycQBkAzVArwxSjTqmO9%2Bst2LfHHJ3IEB5Xlxh64hT0Zw3D%2BtSaNr%2FhMfIlZ%2FEn%2BqO5MCqCs%2FuijkTrq6GqvkBK9oq7XHuFTfxbvRibTyhHgU%2Fe&X-Amz-Signature=0f1e0b60e2ebc3859bfbfb74c9829a5376da3fea39310625367139954f9658a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DLX2IE5%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLb2oT1c%2F16wE2jbS7OCorsFdmtg3IjkPdp9ZOBVpy1wIhANMJUNd1u1c9TzsNLt98MyNXiLyAj3fjiuS1Ewi%2BNBYXKv8DCCgQABoMNjM3NDIzMTgzODA1IgwGLg2J48ZriLxm7Ooq3AM83t1Xuam832XcAViezErwZfc2%2BY9XaF%2BOi%2F%2BTfnM0kDC3xUdKdP0XM3joaF2hxwBnyL1AoeBmKnNKfmw7yhKPVc%2BKvQd%2BOqYcyk73fL%2FqpLtN91LG90ewczVnIcA3xzPv1jwHWWAOzidbb3nyAdI5O9yvg6S7hF7Zle1e3pT%2Fk8uimzrgE4I1uT9xkLPU9UsOlWxQgeRgIcSsaaiz62us%2B2F4niKL3UxNvSCRO21ztgBQdLpE5BNtBgljyc%2BmyGoru25qMgb7Q5%2FzlCtllxPGU4ssdYXkj%2FDubXXX%2F4txtU%2FjaYL0J%2BTcdRFZnnEZqG9qiVhdTsB%2F0hvGKTNCV8EvwbyZXWlAkza4mfd1dLgi4n90qS%2FwogitdG3Aj%2FZ3l%2BhFrf9xYtAVHK1ClBR3tSHx0q3hbayPYS9zQw4mUOYSYoZreNcHGj6uXCK713YoqhhYKedaRLkxbG4%2B%2BndVGRpQF8I03oTopmC5hvQzIwy0Ly7EdQliuU1mQFVTwu%2FLJBZhixd7tF%2F15YGHqcNGVxd4mPLQXn9Du4H1e867g9%2BhhhHLrK3vSfwJOKoSTLGUPsIEG6LFkA3m4kQ1e5j4isjdYmzx%2BBxpqNqWonjSr47fNLSy5ajHuTVr7IofQTCs%2BfDEBjqkAd%2BKaiCbC6EjQc5KuelWMtWOKziZKlNP7l5vZm2dTUocBnKtQSmw3OhRSQx6JjO4BYFYxIwOc5YtZRtWvg9bY4e56rVAphhJ1KpAh2jmap9tufycQBkAzVArwxSjTqmO9%2Bst2LfHHJ3IEB5Xlxh64hT0Zw3D%2BtSaNr%2FhMfIlZ%2FEn%2BqO5MCqCs%2FuijkTrq6GqvkBK9oq7XHuFTfxbvRibTyhHgU%2Fe&X-Amz-Signature=705a87e221700366ceea81bb25b6c72f0b2de51092e08618fde038c41ba3bb90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DLX2IE5%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLb2oT1c%2F16wE2jbS7OCorsFdmtg3IjkPdp9ZOBVpy1wIhANMJUNd1u1c9TzsNLt98MyNXiLyAj3fjiuS1Ewi%2BNBYXKv8DCCgQABoMNjM3NDIzMTgzODA1IgwGLg2J48ZriLxm7Ooq3AM83t1Xuam832XcAViezErwZfc2%2BY9XaF%2BOi%2F%2BTfnM0kDC3xUdKdP0XM3joaF2hxwBnyL1AoeBmKnNKfmw7yhKPVc%2BKvQd%2BOqYcyk73fL%2FqpLtN91LG90ewczVnIcA3xzPv1jwHWWAOzidbb3nyAdI5O9yvg6S7hF7Zle1e3pT%2Fk8uimzrgE4I1uT9xkLPU9UsOlWxQgeRgIcSsaaiz62us%2B2F4niKL3UxNvSCRO21ztgBQdLpE5BNtBgljyc%2BmyGoru25qMgb7Q5%2FzlCtllxPGU4ssdYXkj%2FDubXXX%2F4txtU%2FjaYL0J%2BTcdRFZnnEZqG9qiVhdTsB%2F0hvGKTNCV8EvwbyZXWlAkza4mfd1dLgi4n90qS%2FwogitdG3Aj%2FZ3l%2BhFrf9xYtAVHK1ClBR3tSHx0q3hbayPYS9zQw4mUOYSYoZreNcHGj6uXCK713YoqhhYKedaRLkxbG4%2B%2BndVGRpQF8I03oTopmC5hvQzIwy0Ly7EdQliuU1mQFVTwu%2FLJBZhixd7tF%2F15YGHqcNGVxd4mPLQXn9Du4H1e867g9%2BhhhHLrK3vSfwJOKoSTLGUPsIEG6LFkA3m4kQ1e5j4isjdYmzx%2BBxpqNqWonjSr47fNLSy5ajHuTVr7IofQTCs%2BfDEBjqkAd%2BKaiCbC6EjQc5KuelWMtWOKziZKlNP7l5vZm2dTUocBnKtQSmw3OhRSQx6JjO4BYFYxIwOc5YtZRtWvg9bY4e56rVAphhJ1KpAh2jmap9tufycQBkAzVArwxSjTqmO9%2Bst2LfHHJ3IEB5Xlxh64hT0Zw3D%2BtSaNr%2FhMfIlZ%2FEn%2BqO5MCqCs%2FuijkTrq6GqvkBK9oq7XHuFTfxbvRibTyhHgU%2Fe&X-Amz-Signature=f0b81daa15fad393d897bb50b1b6cbf74b8e73cd2b0b2e8b603dd568c1650590&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DLX2IE5%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLb2oT1c%2F16wE2jbS7OCorsFdmtg3IjkPdp9ZOBVpy1wIhANMJUNd1u1c9TzsNLt98MyNXiLyAj3fjiuS1Ewi%2BNBYXKv8DCCgQABoMNjM3NDIzMTgzODA1IgwGLg2J48ZriLxm7Ooq3AM83t1Xuam832XcAViezErwZfc2%2BY9XaF%2BOi%2F%2BTfnM0kDC3xUdKdP0XM3joaF2hxwBnyL1AoeBmKnNKfmw7yhKPVc%2BKvQd%2BOqYcyk73fL%2FqpLtN91LG90ewczVnIcA3xzPv1jwHWWAOzidbb3nyAdI5O9yvg6S7hF7Zle1e3pT%2Fk8uimzrgE4I1uT9xkLPU9UsOlWxQgeRgIcSsaaiz62us%2B2F4niKL3UxNvSCRO21ztgBQdLpE5BNtBgljyc%2BmyGoru25qMgb7Q5%2FzlCtllxPGU4ssdYXkj%2FDubXXX%2F4txtU%2FjaYL0J%2BTcdRFZnnEZqG9qiVhdTsB%2F0hvGKTNCV8EvwbyZXWlAkza4mfd1dLgi4n90qS%2FwogitdG3Aj%2FZ3l%2BhFrf9xYtAVHK1ClBR3tSHx0q3hbayPYS9zQw4mUOYSYoZreNcHGj6uXCK713YoqhhYKedaRLkxbG4%2B%2BndVGRpQF8I03oTopmC5hvQzIwy0Ly7EdQliuU1mQFVTwu%2FLJBZhixd7tF%2F15YGHqcNGVxd4mPLQXn9Du4H1e867g9%2BhhhHLrK3vSfwJOKoSTLGUPsIEG6LFkA3m4kQ1e5j4isjdYmzx%2BBxpqNqWonjSr47fNLSy5ajHuTVr7IofQTCs%2BfDEBjqkAd%2BKaiCbC6EjQc5KuelWMtWOKziZKlNP7l5vZm2dTUocBnKtQSmw3OhRSQx6JjO4BYFYxIwOc5YtZRtWvg9bY4e56rVAphhJ1KpAh2jmap9tufycQBkAzVArwxSjTqmO9%2Bst2LfHHJ3IEB5Xlxh64hT0Zw3D%2BtSaNr%2FhMfIlZ%2FEn%2BqO5MCqCs%2FuijkTrq6GqvkBK9oq7XHuFTfxbvRibTyhHgU%2Fe&X-Amz-Signature=fb764de41b2cacd80ec563d0768f3b5482362f3e3e1737da36049df603793c58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DLX2IE5%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLb2oT1c%2F16wE2jbS7OCorsFdmtg3IjkPdp9ZOBVpy1wIhANMJUNd1u1c9TzsNLt98MyNXiLyAj3fjiuS1Ewi%2BNBYXKv8DCCgQABoMNjM3NDIzMTgzODA1IgwGLg2J48ZriLxm7Ooq3AM83t1Xuam832XcAViezErwZfc2%2BY9XaF%2BOi%2F%2BTfnM0kDC3xUdKdP0XM3joaF2hxwBnyL1AoeBmKnNKfmw7yhKPVc%2BKvQd%2BOqYcyk73fL%2FqpLtN91LG90ewczVnIcA3xzPv1jwHWWAOzidbb3nyAdI5O9yvg6S7hF7Zle1e3pT%2Fk8uimzrgE4I1uT9xkLPU9UsOlWxQgeRgIcSsaaiz62us%2B2F4niKL3UxNvSCRO21ztgBQdLpE5BNtBgljyc%2BmyGoru25qMgb7Q5%2FzlCtllxPGU4ssdYXkj%2FDubXXX%2F4txtU%2FjaYL0J%2BTcdRFZnnEZqG9qiVhdTsB%2F0hvGKTNCV8EvwbyZXWlAkza4mfd1dLgi4n90qS%2FwogitdG3Aj%2FZ3l%2BhFrf9xYtAVHK1ClBR3tSHx0q3hbayPYS9zQw4mUOYSYoZreNcHGj6uXCK713YoqhhYKedaRLkxbG4%2B%2BndVGRpQF8I03oTopmC5hvQzIwy0Ly7EdQliuU1mQFVTwu%2FLJBZhixd7tF%2F15YGHqcNGVxd4mPLQXn9Du4H1e867g9%2BhhhHLrK3vSfwJOKoSTLGUPsIEG6LFkA3m4kQ1e5j4isjdYmzx%2BBxpqNqWonjSr47fNLSy5ajHuTVr7IofQTCs%2BfDEBjqkAd%2BKaiCbC6EjQc5KuelWMtWOKziZKlNP7l5vZm2dTUocBnKtQSmw3OhRSQx6JjO4BYFYxIwOc5YtZRtWvg9bY4e56rVAphhJ1KpAh2jmap9tufycQBkAzVArwxSjTqmO9%2Bst2LfHHJ3IEB5Xlxh64hT0Zw3D%2BtSaNr%2FhMfIlZ%2FEn%2BqO5MCqCs%2FuijkTrq6GqvkBK9oq7XHuFTfxbvRibTyhHgU%2Fe&X-Amz-Signature=452a0c3f833c610450f6eddad57bba532fdf6235271be80258298467b27aa4b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
