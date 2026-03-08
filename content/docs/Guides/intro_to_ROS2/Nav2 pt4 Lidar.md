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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO2OE57O%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIFySHi5A%2BgGWukj1P2%2BMT5PuKwl4WpzW2reD1g4%2BlbHHAiEAhCZF19NAFDuWZT7%2BOvyytFnPxFty8PfqWks8SXHwq3Iq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDC9vbOzCK5Z0chlRSSrcAyPjn3vX1enO9U2p1BxRQ2x%2B%2BmukBffSivqNr%2FiFlkj6Hr0LEkuhP3eFyzPZx1EBTLWyV8pgqWqfUPpJ9tAkWwOrz%2BIHscX8spGDK4nSOaunnuA7CrTXt2rYMjcM1%2BPPn8iAbWiXFxibPtAU%2F77n5rdloG1Q%2B2rEtchqQXEgdJI7tq9PUEwbm3aXLiJmshn5%2BMSPQisDJxST5cSD%2FyGJYwGngSC64UNX%2Bp%2F02S1f2inyXkHbkjmGVdbqhW58PzmZRvmV9xnw6HEUKOJQxNxRk47CBThge0eS0U1JrG0F3omejvlqx3SVTCdl7b09hDnBiHoNAgCn%2FtMCAW9U0hSBs0QScoYGdJaxz%2F1KidsmyVsOgyJlmLG6GY0z3Cyp7X4mCewpn9irtvgWvyQzF5IZcJ4KsaK0%2Fkj3BjpkfIJdNq4X8i0ljTqPwnz641K9ZQjS1n95qfawJUQXSWdEawgzsPMgWyQnHhPZlo7WcRFkl1rMJg0qiGcPZ%2F1dCxACwmFuKvCPFTvXagPCtyv%2F64kZ9Ro%2BI1hqc0bixJxVroU0otImm2PIzUf9BbTf6PYMHlJwZPIAMUQf6uitKKtSwRes9kihj4bsCEb3QS%2BIfQufod1j0OF0Rg8FK%2FiyT43kMIWes80GOqUBdjUW7BqK%2B2gFc8OfZvOcYLmpZ0KmSMGY%2FP05I0BVXB4Oaug9vwrOyofoloMtIGrzrnxPTtYOW0ZoiMtZKL2rCCjN5UF4YxYMbxknjUW0Lzje9Hi1AWBOEmH5WMnbXQ8G8LzVsT0tRozJnSliczJmQM9t8L8b65JGhdBTnSFHTFj8kd7%2FwcaYFArhqxm4V5VRGRWNrWpjzIXdKvvvdQTUYWzSHq31&X-Amz-Signature=213f2e7c19fdd3d4f6b3c8a6b3a4291bb512e48744585ffcf243518fc32467e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PYP5IZP%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDjDGCMU9jB6Nh1IXv1Ggjrj58U1Ykvb9zBKxZ7zs3rTgIgWiEx9kHRLIGrvd10PDryifrGI2rhUf8%2FzcGt%2B2ByV3wq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDJfpUf4SDfSZEW0fbCrcAxd66zfeyAOzFJ14eF6a5d7Bkm8EeYCmpNaFXbnGvHUW5%2BvR3i36mtu6UkGpn3tiw6vmRKI4LpfHlDgiMWKChAezEI07ispJwi0cY1B%2F6e%2FQwaum6fG3wP4%2BR31yTJirErPzfMz50oQ%2FUBcQNS6uTcfBrliflhbh%2FommsddEu9rjdc4Gok1Y6bKoD3V%2FSel3R8vI33B8eWlm2lKx3TgAyr4YDXtWIdjXeJzj5kfKdyysDg4FSENcZej%2F0amYD1Blg%2BF%2BpnVG2HtXMbZgNy3izT%2FZ8x3C9vQtD%2BH5jmxQrBLIxF4TPZ7vloMY9cjZzdoC4sl2TBPvjjI3dZfo0ffzz5RAMr77ZcLDavWlchH3l1pw5yXvlLJJYJthJssksveAwF1jrokcC5%2F%2BDjjDJ6yY%2FFwCc0ft34eSCj%2F3gz6OvsMZdsifhbOOJBaADOMdankizLzDkW7%2FUresEaVmqRZGt%2B06PclL39sGLH5fRLrYVhLuhdxJ5jSqLtaYcOmkE4b6utspbVISmqXl7NM7a8dcxh5TgZNT5ewTqGMT2gSCFHPbh2GfJMaDgZaoK%2FrTftj3aKFg8YWHPap6%2B0THsHWy8hCsVcZV1dLI%2BgB0jq2jtBQ1%2FrTaIQbYLBcabYcYMNWds80GOqUBhxuzbsJl1OUYMX72EOOGP7LuDeT2UFtz2vQJ%2BL3llCM61qbQjUihOLXOOfD6zrZGgmt%2FcCAfZb5Kr1BPGe49vMAHSwtWQkjZyJhFTfK2ZVUeOBvX6c47zsT9dqoAUAaSweDtiYa5M4shw0bttY%2FAPbViKGodWkhD75KQ86rWXScuopAi1Bxh%2B%2FAqixcUN%2FlI1FnVaA5vD6z5NUCfDfONRtKvEY%2F%2F&X-Amz-Signature=43ae461b4b1c8b8357c4ccb2b1463bf56b93ce705ce08e27e63b8ad8436365ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PYP5IZP%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDjDGCMU9jB6Nh1IXv1Ggjrj58U1Ykvb9zBKxZ7zs3rTgIgWiEx9kHRLIGrvd10PDryifrGI2rhUf8%2FzcGt%2B2ByV3wq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDJfpUf4SDfSZEW0fbCrcAxd66zfeyAOzFJ14eF6a5d7Bkm8EeYCmpNaFXbnGvHUW5%2BvR3i36mtu6UkGpn3tiw6vmRKI4LpfHlDgiMWKChAezEI07ispJwi0cY1B%2F6e%2FQwaum6fG3wP4%2BR31yTJirErPzfMz50oQ%2FUBcQNS6uTcfBrliflhbh%2FommsddEu9rjdc4Gok1Y6bKoD3V%2FSel3R8vI33B8eWlm2lKx3TgAyr4YDXtWIdjXeJzj5kfKdyysDg4FSENcZej%2F0amYD1Blg%2BF%2BpnVG2HtXMbZgNy3izT%2FZ8x3C9vQtD%2BH5jmxQrBLIxF4TPZ7vloMY9cjZzdoC4sl2TBPvjjI3dZfo0ffzz5RAMr77ZcLDavWlchH3l1pw5yXvlLJJYJthJssksveAwF1jrokcC5%2F%2BDjjDJ6yY%2FFwCc0ft34eSCj%2F3gz6OvsMZdsifhbOOJBaADOMdankizLzDkW7%2FUresEaVmqRZGt%2B06PclL39sGLH5fRLrYVhLuhdxJ5jSqLtaYcOmkE4b6utspbVISmqXl7NM7a8dcxh5TgZNT5ewTqGMT2gSCFHPbh2GfJMaDgZaoK%2FrTftj3aKFg8YWHPap6%2B0THsHWy8hCsVcZV1dLI%2BgB0jq2jtBQ1%2FrTaIQbYLBcabYcYMNWds80GOqUBhxuzbsJl1OUYMX72EOOGP7LuDeT2UFtz2vQJ%2BL3llCM61qbQjUihOLXOOfD6zrZGgmt%2FcCAfZb5Kr1BPGe49vMAHSwtWQkjZyJhFTfK2ZVUeOBvX6c47zsT9dqoAUAaSweDtiYa5M4shw0bttY%2FAPbViKGodWkhD75KQ86rWXScuopAi1Bxh%2B%2FAqixcUN%2FlI1FnVaA5vD6z5NUCfDfONRtKvEY%2F%2F&X-Amz-Signature=625ee2b5b86e178c2cc40f383782d56707c16f593c550afe3e68875b2c6e3ad0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PYP5IZP%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDjDGCMU9jB6Nh1IXv1Ggjrj58U1Ykvb9zBKxZ7zs3rTgIgWiEx9kHRLIGrvd10PDryifrGI2rhUf8%2FzcGt%2B2ByV3wq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDJfpUf4SDfSZEW0fbCrcAxd66zfeyAOzFJ14eF6a5d7Bkm8EeYCmpNaFXbnGvHUW5%2BvR3i36mtu6UkGpn3tiw6vmRKI4LpfHlDgiMWKChAezEI07ispJwi0cY1B%2F6e%2FQwaum6fG3wP4%2BR31yTJirErPzfMz50oQ%2FUBcQNS6uTcfBrliflhbh%2FommsddEu9rjdc4Gok1Y6bKoD3V%2FSel3R8vI33B8eWlm2lKx3TgAyr4YDXtWIdjXeJzj5kfKdyysDg4FSENcZej%2F0amYD1Blg%2BF%2BpnVG2HtXMbZgNy3izT%2FZ8x3C9vQtD%2BH5jmxQrBLIxF4TPZ7vloMY9cjZzdoC4sl2TBPvjjI3dZfo0ffzz5RAMr77ZcLDavWlchH3l1pw5yXvlLJJYJthJssksveAwF1jrokcC5%2F%2BDjjDJ6yY%2FFwCc0ft34eSCj%2F3gz6OvsMZdsifhbOOJBaADOMdankizLzDkW7%2FUresEaVmqRZGt%2B06PclL39sGLH5fRLrYVhLuhdxJ5jSqLtaYcOmkE4b6utspbVISmqXl7NM7a8dcxh5TgZNT5ewTqGMT2gSCFHPbh2GfJMaDgZaoK%2FrTftj3aKFg8YWHPap6%2B0THsHWy8hCsVcZV1dLI%2BgB0jq2jtBQ1%2FrTaIQbYLBcabYcYMNWds80GOqUBhxuzbsJl1OUYMX72EOOGP7LuDeT2UFtz2vQJ%2BL3llCM61qbQjUihOLXOOfD6zrZGgmt%2FcCAfZb5Kr1BPGe49vMAHSwtWQkjZyJhFTfK2ZVUeOBvX6c47zsT9dqoAUAaSweDtiYa5M4shw0bttY%2FAPbViKGodWkhD75KQ86rWXScuopAi1Bxh%2B%2FAqixcUN%2FlI1FnVaA5vD6z5NUCfDfONRtKvEY%2F%2F&X-Amz-Signature=bca8b908f1700d935fd4510b753d07580a654226978207bc5fb8db2481d76e0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PYP5IZP%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDjDGCMU9jB6Nh1IXv1Ggjrj58U1Ykvb9zBKxZ7zs3rTgIgWiEx9kHRLIGrvd10PDryifrGI2rhUf8%2FzcGt%2B2ByV3wq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDJfpUf4SDfSZEW0fbCrcAxd66zfeyAOzFJ14eF6a5d7Bkm8EeYCmpNaFXbnGvHUW5%2BvR3i36mtu6UkGpn3tiw6vmRKI4LpfHlDgiMWKChAezEI07ispJwi0cY1B%2F6e%2FQwaum6fG3wP4%2BR31yTJirErPzfMz50oQ%2FUBcQNS6uTcfBrliflhbh%2FommsddEu9rjdc4Gok1Y6bKoD3V%2FSel3R8vI33B8eWlm2lKx3TgAyr4YDXtWIdjXeJzj5kfKdyysDg4FSENcZej%2F0amYD1Blg%2BF%2BpnVG2HtXMbZgNy3izT%2FZ8x3C9vQtD%2BH5jmxQrBLIxF4TPZ7vloMY9cjZzdoC4sl2TBPvjjI3dZfo0ffzz5RAMr77ZcLDavWlchH3l1pw5yXvlLJJYJthJssksveAwF1jrokcC5%2F%2BDjjDJ6yY%2FFwCc0ft34eSCj%2F3gz6OvsMZdsifhbOOJBaADOMdankizLzDkW7%2FUresEaVmqRZGt%2B06PclL39sGLH5fRLrYVhLuhdxJ5jSqLtaYcOmkE4b6utspbVISmqXl7NM7a8dcxh5TgZNT5ewTqGMT2gSCFHPbh2GfJMaDgZaoK%2FrTftj3aKFg8YWHPap6%2B0THsHWy8hCsVcZV1dLI%2BgB0jq2jtBQ1%2FrTaIQbYLBcabYcYMNWds80GOqUBhxuzbsJl1OUYMX72EOOGP7LuDeT2UFtz2vQJ%2BL3llCM61qbQjUihOLXOOfD6zrZGgmt%2FcCAfZb5Kr1BPGe49vMAHSwtWQkjZyJhFTfK2ZVUeOBvX6c47zsT9dqoAUAaSweDtiYa5M4shw0bttY%2FAPbViKGodWkhD75KQ86rWXScuopAi1Bxh%2B%2FAqixcUN%2FlI1FnVaA5vD6z5NUCfDfONRtKvEY%2F%2F&X-Amz-Signature=843569ce8a540e3c24b1097cee5682b8b6047d66c0c4fede5c1e79f2603c0746&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PYP5IZP%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDjDGCMU9jB6Nh1IXv1Ggjrj58U1Ykvb9zBKxZ7zs3rTgIgWiEx9kHRLIGrvd10PDryifrGI2rhUf8%2FzcGt%2B2ByV3wq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDJfpUf4SDfSZEW0fbCrcAxd66zfeyAOzFJ14eF6a5d7Bkm8EeYCmpNaFXbnGvHUW5%2BvR3i36mtu6UkGpn3tiw6vmRKI4LpfHlDgiMWKChAezEI07ispJwi0cY1B%2F6e%2FQwaum6fG3wP4%2BR31yTJirErPzfMz50oQ%2FUBcQNS6uTcfBrliflhbh%2FommsddEu9rjdc4Gok1Y6bKoD3V%2FSel3R8vI33B8eWlm2lKx3TgAyr4YDXtWIdjXeJzj5kfKdyysDg4FSENcZej%2F0amYD1Blg%2BF%2BpnVG2HtXMbZgNy3izT%2FZ8x3C9vQtD%2BH5jmxQrBLIxF4TPZ7vloMY9cjZzdoC4sl2TBPvjjI3dZfo0ffzz5RAMr77ZcLDavWlchH3l1pw5yXvlLJJYJthJssksveAwF1jrokcC5%2F%2BDjjDJ6yY%2FFwCc0ft34eSCj%2F3gz6OvsMZdsifhbOOJBaADOMdankizLzDkW7%2FUresEaVmqRZGt%2B06PclL39sGLH5fRLrYVhLuhdxJ5jSqLtaYcOmkE4b6utspbVISmqXl7NM7a8dcxh5TgZNT5ewTqGMT2gSCFHPbh2GfJMaDgZaoK%2FrTftj3aKFg8YWHPap6%2B0THsHWy8hCsVcZV1dLI%2BgB0jq2jtBQ1%2FrTaIQbYLBcabYcYMNWds80GOqUBhxuzbsJl1OUYMX72EOOGP7LuDeT2UFtz2vQJ%2BL3llCM61qbQjUihOLXOOfD6zrZGgmt%2FcCAfZb5Kr1BPGe49vMAHSwtWQkjZyJhFTfK2ZVUeOBvX6c47zsT9dqoAUAaSweDtiYa5M4shw0bttY%2FAPbViKGodWkhD75KQ86rWXScuopAi1Bxh%2B%2FAqixcUN%2FlI1FnVaA5vD6z5NUCfDfONRtKvEY%2F%2F&X-Amz-Signature=201a5a60733137560bd4af8a2926fc0db0c248c4f2d7a4c878bd2b3bd22c9744&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PYP5IZP%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDjDGCMU9jB6Nh1IXv1Ggjrj58U1Ykvb9zBKxZ7zs3rTgIgWiEx9kHRLIGrvd10PDryifrGI2rhUf8%2FzcGt%2B2ByV3wq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDJfpUf4SDfSZEW0fbCrcAxd66zfeyAOzFJ14eF6a5d7Bkm8EeYCmpNaFXbnGvHUW5%2BvR3i36mtu6UkGpn3tiw6vmRKI4LpfHlDgiMWKChAezEI07ispJwi0cY1B%2F6e%2FQwaum6fG3wP4%2BR31yTJirErPzfMz50oQ%2FUBcQNS6uTcfBrliflhbh%2FommsddEu9rjdc4Gok1Y6bKoD3V%2FSel3R8vI33B8eWlm2lKx3TgAyr4YDXtWIdjXeJzj5kfKdyysDg4FSENcZej%2F0amYD1Blg%2BF%2BpnVG2HtXMbZgNy3izT%2FZ8x3C9vQtD%2BH5jmxQrBLIxF4TPZ7vloMY9cjZzdoC4sl2TBPvjjI3dZfo0ffzz5RAMr77ZcLDavWlchH3l1pw5yXvlLJJYJthJssksveAwF1jrokcC5%2F%2BDjjDJ6yY%2FFwCc0ft34eSCj%2F3gz6OvsMZdsifhbOOJBaADOMdankizLzDkW7%2FUresEaVmqRZGt%2B06PclL39sGLH5fRLrYVhLuhdxJ5jSqLtaYcOmkE4b6utspbVISmqXl7NM7a8dcxh5TgZNT5ewTqGMT2gSCFHPbh2GfJMaDgZaoK%2FrTftj3aKFg8YWHPap6%2B0THsHWy8hCsVcZV1dLI%2BgB0jq2jtBQ1%2FrTaIQbYLBcabYcYMNWds80GOqUBhxuzbsJl1OUYMX72EOOGP7LuDeT2UFtz2vQJ%2BL3llCM61qbQjUihOLXOOfD6zrZGgmt%2FcCAfZb5Kr1BPGe49vMAHSwtWQkjZyJhFTfK2ZVUeOBvX6c47zsT9dqoAUAaSweDtiYa5M4shw0bttY%2FAPbViKGodWkhD75KQ86rWXScuopAi1Bxh%2B%2FAqixcUN%2FlI1FnVaA5vD6z5NUCfDfONRtKvEY%2F%2F&X-Amz-Signature=2206033093f3b35c3e6306f2b9993e0d24e97d0b0a67b65705d4fa2150a5be5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PYP5IZP%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDjDGCMU9jB6Nh1IXv1Ggjrj58U1Ykvb9zBKxZ7zs3rTgIgWiEx9kHRLIGrvd10PDryifrGI2rhUf8%2FzcGt%2B2ByV3wq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDJfpUf4SDfSZEW0fbCrcAxd66zfeyAOzFJ14eF6a5d7Bkm8EeYCmpNaFXbnGvHUW5%2BvR3i36mtu6UkGpn3tiw6vmRKI4LpfHlDgiMWKChAezEI07ispJwi0cY1B%2F6e%2FQwaum6fG3wP4%2BR31yTJirErPzfMz50oQ%2FUBcQNS6uTcfBrliflhbh%2FommsddEu9rjdc4Gok1Y6bKoD3V%2FSel3R8vI33B8eWlm2lKx3TgAyr4YDXtWIdjXeJzj5kfKdyysDg4FSENcZej%2F0amYD1Blg%2BF%2BpnVG2HtXMbZgNy3izT%2FZ8x3C9vQtD%2BH5jmxQrBLIxF4TPZ7vloMY9cjZzdoC4sl2TBPvjjI3dZfo0ffzz5RAMr77ZcLDavWlchH3l1pw5yXvlLJJYJthJssksveAwF1jrokcC5%2F%2BDjjDJ6yY%2FFwCc0ft34eSCj%2F3gz6OvsMZdsifhbOOJBaADOMdankizLzDkW7%2FUresEaVmqRZGt%2B06PclL39sGLH5fRLrYVhLuhdxJ5jSqLtaYcOmkE4b6utspbVISmqXl7NM7a8dcxh5TgZNT5ewTqGMT2gSCFHPbh2GfJMaDgZaoK%2FrTftj3aKFg8YWHPap6%2B0THsHWy8hCsVcZV1dLI%2BgB0jq2jtBQ1%2FrTaIQbYLBcabYcYMNWds80GOqUBhxuzbsJl1OUYMX72EOOGP7LuDeT2UFtz2vQJ%2BL3llCM61qbQjUihOLXOOfD6zrZGgmt%2FcCAfZb5Kr1BPGe49vMAHSwtWQkjZyJhFTfK2ZVUeOBvX6c47zsT9dqoAUAaSweDtiYa5M4shw0bttY%2FAPbViKGodWkhD75KQ86rWXScuopAi1Bxh%2B%2FAqixcUN%2FlI1FnVaA5vD6z5NUCfDfONRtKvEY%2F%2F&X-Amz-Signature=482a6f7c933771d54ae6ca6de4a64f79f72b2b6e1e3027abbb798290cd94e070&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PYP5IZP%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDjDGCMU9jB6Nh1IXv1Ggjrj58U1Ykvb9zBKxZ7zs3rTgIgWiEx9kHRLIGrvd10PDryifrGI2rhUf8%2FzcGt%2B2ByV3wq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDJfpUf4SDfSZEW0fbCrcAxd66zfeyAOzFJ14eF6a5d7Bkm8EeYCmpNaFXbnGvHUW5%2BvR3i36mtu6UkGpn3tiw6vmRKI4LpfHlDgiMWKChAezEI07ispJwi0cY1B%2F6e%2FQwaum6fG3wP4%2BR31yTJirErPzfMz50oQ%2FUBcQNS6uTcfBrliflhbh%2FommsddEu9rjdc4Gok1Y6bKoD3V%2FSel3R8vI33B8eWlm2lKx3TgAyr4YDXtWIdjXeJzj5kfKdyysDg4FSENcZej%2F0amYD1Blg%2BF%2BpnVG2HtXMbZgNy3izT%2FZ8x3C9vQtD%2BH5jmxQrBLIxF4TPZ7vloMY9cjZzdoC4sl2TBPvjjI3dZfo0ffzz5RAMr77ZcLDavWlchH3l1pw5yXvlLJJYJthJssksveAwF1jrokcC5%2F%2BDjjDJ6yY%2FFwCc0ft34eSCj%2F3gz6OvsMZdsifhbOOJBaADOMdankizLzDkW7%2FUresEaVmqRZGt%2B06PclL39sGLH5fRLrYVhLuhdxJ5jSqLtaYcOmkE4b6utspbVISmqXl7NM7a8dcxh5TgZNT5ewTqGMT2gSCFHPbh2GfJMaDgZaoK%2FrTftj3aKFg8YWHPap6%2B0THsHWy8hCsVcZV1dLI%2BgB0jq2jtBQ1%2FrTaIQbYLBcabYcYMNWds80GOqUBhxuzbsJl1OUYMX72EOOGP7LuDeT2UFtz2vQJ%2BL3llCM61qbQjUihOLXOOfD6zrZGgmt%2FcCAfZb5Kr1BPGe49vMAHSwtWQkjZyJhFTfK2ZVUeOBvX6c47zsT9dqoAUAaSweDtiYa5M4shw0bttY%2FAPbViKGodWkhD75KQ86rWXScuopAi1Bxh%2B%2FAqixcUN%2FlI1FnVaA5vD6z5NUCfDfONRtKvEY%2F%2F&X-Amz-Signature=75860d11a305786b058d63e5e866b2ad554c4999fd82e693b733f0e9f21e9dd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PYP5IZP%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDjDGCMU9jB6Nh1IXv1Ggjrj58U1Ykvb9zBKxZ7zs3rTgIgWiEx9kHRLIGrvd10PDryifrGI2rhUf8%2FzcGt%2B2ByV3wq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDJfpUf4SDfSZEW0fbCrcAxd66zfeyAOzFJ14eF6a5d7Bkm8EeYCmpNaFXbnGvHUW5%2BvR3i36mtu6UkGpn3tiw6vmRKI4LpfHlDgiMWKChAezEI07ispJwi0cY1B%2F6e%2FQwaum6fG3wP4%2BR31yTJirErPzfMz50oQ%2FUBcQNS6uTcfBrliflhbh%2FommsddEu9rjdc4Gok1Y6bKoD3V%2FSel3R8vI33B8eWlm2lKx3TgAyr4YDXtWIdjXeJzj5kfKdyysDg4FSENcZej%2F0amYD1Blg%2BF%2BpnVG2HtXMbZgNy3izT%2FZ8x3C9vQtD%2BH5jmxQrBLIxF4TPZ7vloMY9cjZzdoC4sl2TBPvjjI3dZfo0ffzz5RAMr77ZcLDavWlchH3l1pw5yXvlLJJYJthJssksveAwF1jrokcC5%2F%2BDjjDJ6yY%2FFwCc0ft34eSCj%2F3gz6OvsMZdsifhbOOJBaADOMdankizLzDkW7%2FUresEaVmqRZGt%2B06PclL39sGLH5fRLrYVhLuhdxJ5jSqLtaYcOmkE4b6utspbVISmqXl7NM7a8dcxh5TgZNT5ewTqGMT2gSCFHPbh2GfJMaDgZaoK%2FrTftj3aKFg8YWHPap6%2B0THsHWy8hCsVcZV1dLI%2BgB0jq2jtBQ1%2FrTaIQbYLBcabYcYMNWds80GOqUBhxuzbsJl1OUYMX72EOOGP7LuDeT2UFtz2vQJ%2BL3llCM61qbQjUihOLXOOfD6zrZGgmt%2FcCAfZb5Kr1BPGe49vMAHSwtWQkjZyJhFTfK2ZVUeOBvX6c47zsT9dqoAUAaSweDtiYa5M4shw0bttY%2FAPbViKGodWkhD75KQ86rWXScuopAi1Bxh%2B%2FAqixcUN%2FlI1FnVaA5vD6z5NUCfDfONRtKvEY%2F%2F&X-Amz-Signature=5af870431fbfc4717e35727d5d0fb750314a802d98129ef9d83fc1d9e3c8928b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PYP5IZP%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDjDGCMU9jB6Nh1IXv1Ggjrj58U1Ykvb9zBKxZ7zs3rTgIgWiEx9kHRLIGrvd10PDryifrGI2rhUf8%2FzcGt%2B2ByV3wq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDJfpUf4SDfSZEW0fbCrcAxd66zfeyAOzFJ14eF6a5d7Bkm8EeYCmpNaFXbnGvHUW5%2BvR3i36mtu6UkGpn3tiw6vmRKI4LpfHlDgiMWKChAezEI07ispJwi0cY1B%2F6e%2FQwaum6fG3wP4%2BR31yTJirErPzfMz50oQ%2FUBcQNS6uTcfBrliflhbh%2FommsddEu9rjdc4Gok1Y6bKoD3V%2FSel3R8vI33B8eWlm2lKx3TgAyr4YDXtWIdjXeJzj5kfKdyysDg4FSENcZej%2F0amYD1Blg%2BF%2BpnVG2HtXMbZgNy3izT%2FZ8x3C9vQtD%2BH5jmxQrBLIxF4TPZ7vloMY9cjZzdoC4sl2TBPvjjI3dZfo0ffzz5RAMr77ZcLDavWlchH3l1pw5yXvlLJJYJthJssksveAwF1jrokcC5%2F%2BDjjDJ6yY%2FFwCc0ft34eSCj%2F3gz6OvsMZdsifhbOOJBaADOMdankizLzDkW7%2FUresEaVmqRZGt%2B06PclL39sGLH5fRLrYVhLuhdxJ5jSqLtaYcOmkE4b6utspbVISmqXl7NM7a8dcxh5TgZNT5ewTqGMT2gSCFHPbh2GfJMaDgZaoK%2FrTftj3aKFg8YWHPap6%2B0THsHWy8hCsVcZV1dLI%2BgB0jq2jtBQ1%2FrTaIQbYLBcabYcYMNWds80GOqUBhxuzbsJl1OUYMX72EOOGP7LuDeT2UFtz2vQJ%2BL3llCM61qbQjUihOLXOOfD6zrZGgmt%2FcCAfZb5Kr1BPGe49vMAHSwtWQkjZyJhFTfK2ZVUeOBvX6c47zsT9dqoAUAaSweDtiYa5M4shw0bttY%2FAPbViKGodWkhD75KQ86rWXScuopAi1Bxh%2B%2FAqixcUN%2FlI1FnVaA5vD6z5NUCfDfONRtKvEY%2F%2F&X-Amz-Signature=843569ce8a540e3c24b1097cee5682b8b6047d66c0c4fede5c1e79f2603c0746&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
