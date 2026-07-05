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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMX4PZPM%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIAoxtvE2%2FCiKoFzXt%2BUFhrT19lb878OlHBYN1TddrPbSAiBWGEySw%2FsTtiEZqA8rLb0Ho8vM%2BxQm2Oa0amTxtIx2xyr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMJcuB%2F3vUhnldTiDGKtwDdogKcYpk%2BrvQIXCWpKdZSJpHnLjEVTF9bc1Ciwssau4n3%2B1uKapy5GF%2BGJVK%2BRyJb%2BXoCWvOqBkowNz3GWGa0UVDuy3OlTejoD8cj5%2BA%2BIJeGLCtHwI7%2FL2b5tS0D7loCqJCubcKQ1wKBTMgnHpcdzClUdJdUsSDZw4ITGbIAHfuAXeUpdMtE4hZeGGjltq1uHLdkybQdbpVWLKk%2BfnZwWL7%2F6YKKaryIN1Qkodgif3DPDFF4t%2Fpxe%2BssItRSDV57Xe%2B4kTNN13UfwAYOBr4%2FjLsHslfhaikuS29rLoCKUlW%2BCP62lO2aMjt2t3OWXP5HywaiulN5evbRhf2YP8U4RmoW4uYZxp22ieNONKX%2F1ld60s9vC3afG4xw8RPn3N7%2B2HlBQjNKRxgMON0oRvT5Cbyky1tmtppJ%2BFupHXQTviXG18j9398Wnze8xBdUNNX3wzDR5v1dKZe6D0J226HYc2u5XXkX06hAdnjb1ffaK9TuhDX%2FQbW23PnLGbB%2Fy3y5byCNzmiU4ELOjGRylMwtXDmTl1slm4P40WMWB0o74W7bgZF%2F%2BQIEfF7xxknbOf%2B99c5o3slpxnsNyqG8ugS6M1o%2Bzjw0ot%2BgK63HWkdgLpBz6eGdpMqbI1gQ1gw39mm0gY6pgF7mkkMJc96ss9ZPVgnuI8bu%2FuA3q3G5r8kFTInzbzoRN4Z%2B7MNRCRHa4gFOJA18BOPvDjiQbxHvUWWz2R%2F8oWqSfmBrVpPe6kdmGIyKswdO7SePmnUsHjvIyCjzWWeaJHQKWInnbtSoOWVQcx6AftJW8Ejv%2BsnnGumT00kxGRxLROWkhHeETA8A6CiNkcGIcKnygiwDByTT1a1RpDGgOo6ScMn5pfN&X-Amz-Signature=b8e35b18d3053a05571a48f12a9373a9f2a70ce24d83712ed4206714eee09d92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV7ROXE7%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDUlrSsHvhIg5snpl5%2BJgPauR%2ByiW1qSj2YuBhL8DVG0wIhALC78zPMxNzxEGBxASlmxZEa1kpy%2BtbITL8IMl0nR9njKv8DCDIQABoMNjM3NDIzMTgzODA1IgzPM1587VpJRgQlw%2BAq3AP14sCmEVzrbI%2BCfdsVUnIEMxfL0Bc91M2ggE37k1sRixyGZOfksbJWCvtpxBHFrgXXQQ1BvFb8l7q3hS1L2Nd6QpY7cljCLIUbZrMfHFZIjqlu53UuwHiQxoVYzCm3FWlEOv%2BPCcp8%2BvTMlvhtqQ9Lpu2TKK84cdq3JuOL%2FxpWVIp1I9e1VsAVfbuM6LF6zNPu51wtHNFO3kuc7qF0jvlHBVnRA9uArdfGxR0zZddcLmoEGPCMHO%2Bus3oFHB8GhWZof2zNIqJasDXYQxxCG4jWVIhO4bBGXIOnqhkli7RkXdnMaD41rIifjrPx%2Bxe8qXoHedUFMvRrV3g7%2BMNOAbMqsRNYJI4YQRik8w9wSrnwnnG8OonqKcPMJBSyNaiBBhdiTX54iOjxV7vG1iGQ1N2UMtN2ZKBnKJjDdYm1fhMilPOOVS2jCYgElF7jYfBvVoNzqJO%2BQTirzFVBVzxsjk2TZEk9HBFxystSQTk2oGPp%2FZA3J8%2BFjflCPCE066ifgsfXZFWTmOrGykhZGTR2dXk48qQpwptE%2BKcWStDp6DENDtR33d21phs6YIKOtEd2iGLe7a1si62hIrjpIHucBQJdHzHt0Z4RhAyX0lBpGweajwgkYZWcXYouaj9XhTCa26bSBjqkAaxq9jJ6Lyc9KJ3N4UxedKBWowzR6gtvbw2EB7W4PSQWPVwGIJQLMf6xR3FDbMU8UPJyWn2HUDeSunW2Iqaf9sdOJvebfediDY4EMxROgmtFN5Yrfn%2FNDciYE4ig7G1RyXtmeJ7KnAU5RRinD%2Bm9XK%2FiGtxW28wpvyisrpb9jmrYOxwH8V%2FQpN7O%2BCbJx%2Fg41OaVNKUeAYWy%2Bg%2Betv00fyzv8mZy&X-Amz-Signature=8baf1a3a5f1142864929df9576efff3b4cab193ce963b9aaddc21b1b4c952cde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV7ROXE7%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDUlrSsHvhIg5snpl5%2BJgPauR%2ByiW1qSj2YuBhL8DVG0wIhALC78zPMxNzxEGBxASlmxZEa1kpy%2BtbITL8IMl0nR9njKv8DCDIQABoMNjM3NDIzMTgzODA1IgzPM1587VpJRgQlw%2BAq3AP14sCmEVzrbI%2BCfdsVUnIEMxfL0Bc91M2ggE37k1sRixyGZOfksbJWCvtpxBHFrgXXQQ1BvFb8l7q3hS1L2Nd6QpY7cljCLIUbZrMfHFZIjqlu53UuwHiQxoVYzCm3FWlEOv%2BPCcp8%2BvTMlvhtqQ9Lpu2TKK84cdq3JuOL%2FxpWVIp1I9e1VsAVfbuM6LF6zNPu51wtHNFO3kuc7qF0jvlHBVnRA9uArdfGxR0zZddcLmoEGPCMHO%2Bus3oFHB8GhWZof2zNIqJasDXYQxxCG4jWVIhO4bBGXIOnqhkli7RkXdnMaD41rIifjrPx%2Bxe8qXoHedUFMvRrV3g7%2BMNOAbMqsRNYJI4YQRik8w9wSrnwnnG8OonqKcPMJBSyNaiBBhdiTX54iOjxV7vG1iGQ1N2UMtN2ZKBnKJjDdYm1fhMilPOOVS2jCYgElF7jYfBvVoNzqJO%2BQTirzFVBVzxsjk2TZEk9HBFxystSQTk2oGPp%2FZA3J8%2BFjflCPCE066ifgsfXZFWTmOrGykhZGTR2dXk48qQpwptE%2BKcWStDp6DENDtR33d21phs6YIKOtEd2iGLe7a1si62hIrjpIHucBQJdHzHt0Z4RhAyX0lBpGweajwgkYZWcXYouaj9XhTCa26bSBjqkAaxq9jJ6Lyc9KJ3N4UxedKBWowzR6gtvbw2EB7W4PSQWPVwGIJQLMf6xR3FDbMU8UPJyWn2HUDeSunW2Iqaf9sdOJvebfediDY4EMxROgmtFN5Yrfn%2FNDciYE4ig7G1RyXtmeJ7KnAU5RRinD%2Bm9XK%2FiGtxW28wpvyisrpb9jmrYOxwH8V%2FQpN7O%2BCbJx%2Fg41OaVNKUeAYWy%2Bg%2Betv00fyzv8mZy&X-Amz-Signature=f7fd242a08b628b73c326ca5b93e5a9e0aff3dcfc3d31f93fa06c0a8ee72ff6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV7ROXE7%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDUlrSsHvhIg5snpl5%2BJgPauR%2ByiW1qSj2YuBhL8DVG0wIhALC78zPMxNzxEGBxASlmxZEa1kpy%2BtbITL8IMl0nR9njKv8DCDIQABoMNjM3NDIzMTgzODA1IgzPM1587VpJRgQlw%2BAq3AP14sCmEVzrbI%2BCfdsVUnIEMxfL0Bc91M2ggE37k1sRixyGZOfksbJWCvtpxBHFrgXXQQ1BvFb8l7q3hS1L2Nd6QpY7cljCLIUbZrMfHFZIjqlu53UuwHiQxoVYzCm3FWlEOv%2BPCcp8%2BvTMlvhtqQ9Lpu2TKK84cdq3JuOL%2FxpWVIp1I9e1VsAVfbuM6LF6zNPu51wtHNFO3kuc7qF0jvlHBVnRA9uArdfGxR0zZddcLmoEGPCMHO%2Bus3oFHB8GhWZof2zNIqJasDXYQxxCG4jWVIhO4bBGXIOnqhkli7RkXdnMaD41rIifjrPx%2Bxe8qXoHedUFMvRrV3g7%2BMNOAbMqsRNYJI4YQRik8w9wSrnwnnG8OonqKcPMJBSyNaiBBhdiTX54iOjxV7vG1iGQ1N2UMtN2ZKBnKJjDdYm1fhMilPOOVS2jCYgElF7jYfBvVoNzqJO%2BQTirzFVBVzxsjk2TZEk9HBFxystSQTk2oGPp%2FZA3J8%2BFjflCPCE066ifgsfXZFWTmOrGykhZGTR2dXk48qQpwptE%2BKcWStDp6DENDtR33d21phs6YIKOtEd2iGLe7a1si62hIrjpIHucBQJdHzHt0Z4RhAyX0lBpGweajwgkYZWcXYouaj9XhTCa26bSBjqkAaxq9jJ6Lyc9KJ3N4UxedKBWowzR6gtvbw2EB7W4PSQWPVwGIJQLMf6xR3FDbMU8UPJyWn2HUDeSunW2Iqaf9sdOJvebfediDY4EMxROgmtFN5Yrfn%2FNDciYE4ig7G1RyXtmeJ7KnAU5RRinD%2Bm9XK%2FiGtxW28wpvyisrpb9jmrYOxwH8V%2FQpN7O%2BCbJx%2Fg41OaVNKUeAYWy%2Bg%2Betv00fyzv8mZy&X-Amz-Signature=734ec4ae154063dc3297b98ae8e9f8d3a234f4576b81cecaa1e55ac0c01e2f63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV7ROXE7%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDUlrSsHvhIg5snpl5%2BJgPauR%2ByiW1qSj2YuBhL8DVG0wIhALC78zPMxNzxEGBxASlmxZEa1kpy%2BtbITL8IMl0nR9njKv8DCDIQABoMNjM3NDIzMTgzODA1IgzPM1587VpJRgQlw%2BAq3AP14sCmEVzrbI%2BCfdsVUnIEMxfL0Bc91M2ggE37k1sRixyGZOfksbJWCvtpxBHFrgXXQQ1BvFb8l7q3hS1L2Nd6QpY7cljCLIUbZrMfHFZIjqlu53UuwHiQxoVYzCm3FWlEOv%2BPCcp8%2BvTMlvhtqQ9Lpu2TKK84cdq3JuOL%2FxpWVIp1I9e1VsAVfbuM6LF6zNPu51wtHNFO3kuc7qF0jvlHBVnRA9uArdfGxR0zZddcLmoEGPCMHO%2Bus3oFHB8GhWZof2zNIqJasDXYQxxCG4jWVIhO4bBGXIOnqhkli7RkXdnMaD41rIifjrPx%2Bxe8qXoHedUFMvRrV3g7%2BMNOAbMqsRNYJI4YQRik8w9wSrnwnnG8OonqKcPMJBSyNaiBBhdiTX54iOjxV7vG1iGQ1N2UMtN2ZKBnKJjDdYm1fhMilPOOVS2jCYgElF7jYfBvVoNzqJO%2BQTirzFVBVzxsjk2TZEk9HBFxystSQTk2oGPp%2FZA3J8%2BFjflCPCE066ifgsfXZFWTmOrGykhZGTR2dXk48qQpwptE%2BKcWStDp6DENDtR33d21phs6YIKOtEd2iGLe7a1si62hIrjpIHucBQJdHzHt0Z4RhAyX0lBpGweajwgkYZWcXYouaj9XhTCa26bSBjqkAaxq9jJ6Lyc9KJ3N4UxedKBWowzR6gtvbw2EB7W4PSQWPVwGIJQLMf6xR3FDbMU8UPJyWn2HUDeSunW2Iqaf9sdOJvebfediDY4EMxROgmtFN5Yrfn%2FNDciYE4ig7G1RyXtmeJ7KnAU5RRinD%2Bm9XK%2FiGtxW28wpvyisrpb9jmrYOxwH8V%2FQpN7O%2BCbJx%2Fg41OaVNKUeAYWy%2Bg%2Betv00fyzv8mZy&X-Amz-Signature=f6bb6f9a29b8cf8e4d38036d3007f7dd1d1cca76bc28bd941d014385f8e76c38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV7ROXE7%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDUlrSsHvhIg5snpl5%2BJgPauR%2ByiW1qSj2YuBhL8DVG0wIhALC78zPMxNzxEGBxASlmxZEa1kpy%2BtbITL8IMl0nR9njKv8DCDIQABoMNjM3NDIzMTgzODA1IgzPM1587VpJRgQlw%2BAq3AP14sCmEVzrbI%2BCfdsVUnIEMxfL0Bc91M2ggE37k1sRixyGZOfksbJWCvtpxBHFrgXXQQ1BvFb8l7q3hS1L2Nd6QpY7cljCLIUbZrMfHFZIjqlu53UuwHiQxoVYzCm3FWlEOv%2BPCcp8%2BvTMlvhtqQ9Lpu2TKK84cdq3JuOL%2FxpWVIp1I9e1VsAVfbuM6LF6zNPu51wtHNFO3kuc7qF0jvlHBVnRA9uArdfGxR0zZddcLmoEGPCMHO%2Bus3oFHB8GhWZof2zNIqJasDXYQxxCG4jWVIhO4bBGXIOnqhkli7RkXdnMaD41rIifjrPx%2Bxe8qXoHedUFMvRrV3g7%2BMNOAbMqsRNYJI4YQRik8w9wSrnwnnG8OonqKcPMJBSyNaiBBhdiTX54iOjxV7vG1iGQ1N2UMtN2ZKBnKJjDdYm1fhMilPOOVS2jCYgElF7jYfBvVoNzqJO%2BQTirzFVBVzxsjk2TZEk9HBFxystSQTk2oGPp%2FZA3J8%2BFjflCPCE066ifgsfXZFWTmOrGykhZGTR2dXk48qQpwptE%2BKcWStDp6DENDtR33d21phs6YIKOtEd2iGLe7a1si62hIrjpIHucBQJdHzHt0Z4RhAyX0lBpGweajwgkYZWcXYouaj9XhTCa26bSBjqkAaxq9jJ6Lyc9KJ3N4UxedKBWowzR6gtvbw2EB7W4PSQWPVwGIJQLMf6xR3FDbMU8UPJyWn2HUDeSunW2Iqaf9sdOJvebfediDY4EMxROgmtFN5Yrfn%2FNDciYE4ig7G1RyXtmeJ7KnAU5RRinD%2Bm9XK%2FiGtxW28wpvyisrpb9jmrYOxwH8V%2FQpN7O%2BCbJx%2Fg41OaVNKUeAYWy%2Bg%2Betv00fyzv8mZy&X-Amz-Signature=1b42909e3aa474c2680a962a881a4db50b89874068db78a96a972fbaacaada96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV7ROXE7%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDUlrSsHvhIg5snpl5%2BJgPauR%2ByiW1qSj2YuBhL8DVG0wIhALC78zPMxNzxEGBxASlmxZEa1kpy%2BtbITL8IMl0nR9njKv8DCDIQABoMNjM3NDIzMTgzODA1IgzPM1587VpJRgQlw%2BAq3AP14sCmEVzrbI%2BCfdsVUnIEMxfL0Bc91M2ggE37k1sRixyGZOfksbJWCvtpxBHFrgXXQQ1BvFb8l7q3hS1L2Nd6QpY7cljCLIUbZrMfHFZIjqlu53UuwHiQxoVYzCm3FWlEOv%2BPCcp8%2BvTMlvhtqQ9Lpu2TKK84cdq3JuOL%2FxpWVIp1I9e1VsAVfbuM6LF6zNPu51wtHNFO3kuc7qF0jvlHBVnRA9uArdfGxR0zZddcLmoEGPCMHO%2Bus3oFHB8GhWZof2zNIqJasDXYQxxCG4jWVIhO4bBGXIOnqhkli7RkXdnMaD41rIifjrPx%2Bxe8qXoHedUFMvRrV3g7%2BMNOAbMqsRNYJI4YQRik8w9wSrnwnnG8OonqKcPMJBSyNaiBBhdiTX54iOjxV7vG1iGQ1N2UMtN2ZKBnKJjDdYm1fhMilPOOVS2jCYgElF7jYfBvVoNzqJO%2BQTirzFVBVzxsjk2TZEk9HBFxystSQTk2oGPp%2FZA3J8%2BFjflCPCE066ifgsfXZFWTmOrGykhZGTR2dXk48qQpwptE%2BKcWStDp6DENDtR33d21phs6YIKOtEd2iGLe7a1si62hIrjpIHucBQJdHzHt0Z4RhAyX0lBpGweajwgkYZWcXYouaj9XhTCa26bSBjqkAaxq9jJ6Lyc9KJ3N4UxedKBWowzR6gtvbw2EB7W4PSQWPVwGIJQLMf6xR3FDbMU8UPJyWn2HUDeSunW2Iqaf9sdOJvebfediDY4EMxROgmtFN5Yrfn%2FNDciYE4ig7G1RyXtmeJ7KnAU5RRinD%2Bm9XK%2FiGtxW28wpvyisrpb9jmrYOxwH8V%2FQpN7O%2BCbJx%2Fg41OaVNKUeAYWy%2Bg%2Betv00fyzv8mZy&X-Amz-Signature=d9f1cb379eb7df6e1ce84134a009f53bc26324418612980722678d3c5eba0752&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV7ROXE7%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDUlrSsHvhIg5snpl5%2BJgPauR%2ByiW1qSj2YuBhL8DVG0wIhALC78zPMxNzxEGBxASlmxZEa1kpy%2BtbITL8IMl0nR9njKv8DCDIQABoMNjM3NDIzMTgzODA1IgzPM1587VpJRgQlw%2BAq3AP14sCmEVzrbI%2BCfdsVUnIEMxfL0Bc91M2ggE37k1sRixyGZOfksbJWCvtpxBHFrgXXQQ1BvFb8l7q3hS1L2Nd6QpY7cljCLIUbZrMfHFZIjqlu53UuwHiQxoVYzCm3FWlEOv%2BPCcp8%2BvTMlvhtqQ9Lpu2TKK84cdq3JuOL%2FxpWVIp1I9e1VsAVfbuM6LF6zNPu51wtHNFO3kuc7qF0jvlHBVnRA9uArdfGxR0zZddcLmoEGPCMHO%2Bus3oFHB8GhWZof2zNIqJasDXYQxxCG4jWVIhO4bBGXIOnqhkli7RkXdnMaD41rIifjrPx%2Bxe8qXoHedUFMvRrV3g7%2BMNOAbMqsRNYJI4YQRik8w9wSrnwnnG8OonqKcPMJBSyNaiBBhdiTX54iOjxV7vG1iGQ1N2UMtN2ZKBnKJjDdYm1fhMilPOOVS2jCYgElF7jYfBvVoNzqJO%2BQTirzFVBVzxsjk2TZEk9HBFxystSQTk2oGPp%2FZA3J8%2BFjflCPCE066ifgsfXZFWTmOrGykhZGTR2dXk48qQpwptE%2BKcWStDp6DENDtR33d21phs6YIKOtEd2iGLe7a1si62hIrjpIHucBQJdHzHt0Z4RhAyX0lBpGweajwgkYZWcXYouaj9XhTCa26bSBjqkAaxq9jJ6Lyc9KJ3N4UxedKBWowzR6gtvbw2EB7W4PSQWPVwGIJQLMf6xR3FDbMU8UPJyWn2HUDeSunW2Iqaf9sdOJvebfediDY4EMxROgmtFN5Yrfn%2FNDciYE4ig7G1RyXtmeJ7KnAU5RRinD%2Bm9XK%2FiGtxW28wpvyisrpb9jmrYOxwH8V%2FQpN7O%2BCbJx%2Fg41OaVNKUeAYWy%2Bg%2Betv00fyzv8mZy&X-Amz-Signature=cc6c7a08aa90935aff01a8a278bd63ce6106e65e5ada08add54034185b8d7f87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV7ROXE7%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDUlrSsHvhIg5snpl5%2BJgPauR%2ByiW1qSj2YuBhL8DVG0wIhALC78zPMxNzxEGBxASlmxZEa1kpy%2BtbITL8IMl0nR9njKv8DCDIQABoMNjM3NDIzMTgzODA1IgzPM1587VpJRgQlw%2BAq3AP14sCmEVzrbI%2BCfdsVUnIEMxfL0Bc91M2ggE37k1sRixyGZOfksbJWCvtpxBHFrgXXQQ1BvFb8l7q3hS1L2Nd6QpY7cljCLIUbZrMfHFZIjqlu53UuwHiQxoVYzCm3FWlEOv%2BPCcp8%2BvTMlvhtqQ9Lpu2TKK84cdq3JuOL%2FxpWVIp1I9e1VsAVfbuM6LF6zNPu51wtHNFO3kuc7qF0jvlHBVnRA9uArdfGxR0zZddcLmoEGPCMHO%2Bus3oFHB8GhWZof2zNIqJasDXYQxxCG4jWVIhO4bBGXIOnqhkli7RkXdnMaD41rIifjrPx%2Bxe8qXoHedUFMvRrV3g7%2BMNOAbMqsRNYJI4YQRik8w9wSrnwnnG8OonqKcPMJBSyNaiBBhdiTX54iOjxV7vG1iGQ1N2UMtN2ZKBnKJjDdYm1fhMilPOOVS2jCYgElF7jYfBvVoNzqJO%2BQTirzFVBVzxsjk2TZEk9HBFxystSQTk2oGPp%2FZA3J8%2BFjflCPCE066ifgsfXZFWTmOrGykhZGTR2dXk48qQpwptE%2BKcWStDp6DENDtR33d21phs6YIKOtEd2iGLe7a1si62hIrjpIHucBQJdHzHt0Z4RhAyX0lBpGweajwgkYZWcXYouaj9XhTCa26bSBjqkAaxq9jJ6Lyc9KJ3N4UxedKBWowzR6gtvbw2EB7W4PSQWPVwGIJQLMf6xR3FDbMU8UPJyWn2HUDeSunW2Iqaf9sdOJvebfediDY4EMxROgmtFN5Yrfn%2FNDciYE4ig7G1RyXtmeJ7KnAU5RRinD%2Bm9XK%2FiGtxW28wpvyisrpb9jmrYOxwH8V%2FQpN7O%2BCbJx%2Fg41OaVNKUeAYWy%2Bg%2Betv00fyzv8mZy&X-Amz-Signature=27d53f6fb56b22a747e82fac9879f14a24dcb09ceb0ca0e3ca5a682e1adc8991&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV7ROXE7%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDUlrSsHvhIg5snpl5%2BJgPauR%2ByiW1qSj2YuBhL8DVG0wIhALC78zPMxNzxEGBxASlmxZEa1kpy%2BtbITL8IMl0nR9njKv8DCDIQABoMNjM3NDIzMTgzODA1IgzPM1587VpJRgQlw%2BAq3AP14sCmEVzrbI%2BCfdsVUnIEMxfL0Bc91M2ggE37k1sRixyGZOfksbJWCvtpxBHFrgXXQQ1BvFb8l7q3hS1L2Nd6QpY7cljCLIUbZrMfHFZIjqlu53UuwHiQxoVYzCm3FWlEOv%2BPCcp8%2BvTMlvhtqQ9Lpu2TKK84cdq3JuOL%2FxpWVIp1I9e1VsAVfbuM6LF6zNPu51wtHNFO3kuc7qF0jvlHBVnRA9uArdfGxR0zZddcLmoEGPCMHO%2Bus3oFHB8GhWZof2zNIqJasDXYQxxCG4jWVIhO4bBGXIOnqhkli7RkXdnMaD41rIifjrPx%2Bxe8qXoHedUFMvRrV3g7%2BMNOAbMqsRNYJI4YQRik8w9wSrnwnnG8OonqKcPMJBSyNaiBBhdiTX54iOjxV7vG1iGQ1N2UMtN2ZKBnKJjDdYm1fhMilPOOVS2jCYgElF7jYfBvVoNzqJO%2BQTirzFVBVzxsjk2TZEk9HBFxystSQTk2oGPp%2FZA3J8%2BFjflCPCE066ifgsfXZFWTmOrGykhZGTR2dXk48qQpwptE%2BKcWStDp6DENDtR33d21phs6YIKOtEd2iGLe7a1si62hIrjpIHucBQJdHzHt0Z4RhAyX0lBpGweajwgkYZWcXYouaj9XhTCa26bSBjqkAaxq9jJ6Lyc9KJ3N4UxedKBWowzR6gtvbw2EB7W4PSQWPVwGIJQLMf6xR3FDbMU8UPJyWn2HUDeSunW2Iqaf9sdOJvebfediDY4EMxROgmtFN5Yrfn%2FNDciYE4ig7G1RyXtmeJ7KnAU5RRinD%2Bm9XK%2FiGtxW28wpvyisrpb9jmrYOxwH8V%2FQpN7O%2BCbJx%2Fg41OaVNKUeAYWy%2Bg%2Betv00fyzv8mZy&X-Amz-Signature=c700ba283ad9fd067ca647a7a506c51390c649c91350a5d749f8fbfaceafe63e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV7ROXE7%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDUlrSsHvhIg5snpl5%2BJgPauR%2ByiW1qSj2YuBhL8DVG0wIhALC78zPMxNzxEGBxASlmxZEa1kpy%2BtbITL8IMl0nR9njKv8DCDIQABoMNjM3NDIzMTgzODA1IgzPM1587VpJRgQlw%2BAq3AP14sCmEVzrbI%2BCfdsVUnIEMxfL0Bc91M2ggE37k1sRixyGZOfksbJWCvtpxBHFrgXXQQ1BvFb8l7q3hS1L2Nd6QpY7cljCLIUbZrMfHFZIjqlu53UuwHiQxoVYzCm3FWlEOv%2BPCcp8%2BvTMlvhtqQ9Lpu2TKK84cdq3JuOL%2FxpWVIp1I9e1VsAVfbuM6LF6zNPu51wtHNFO3kuc7qF0jvlHBVnRA9uArdfGxR0zZddcLmoEGPCMHO%2Bus3oFHB8GhWZof2zNIqJasDXYQxxCG4jWVIhO4bBGXIOnqhkli7RkXdnMaD41rIifjrPx%2Bxe8qXoHedUFMvRrV3g7%2BMNOAbMqsRNYJI4YQRik8w9wSrnwnnG8OonqKcPMJBSyNaiBBhdiTX54iOjxV7vG1iGQ1N2UMtN2ZKBnKJjDdYm1fhMilPOOVS2jCYgElF7jYfBvVoNzqJO%2BQTirzFVBVzxsjk2TZEk9HBFxystSQTk2oGPp%2FZA3J8%2BFjflCPCE066ifgsfXZFWTmOrGykhZGTR2dXk48qQpwptE%2BKcWStDp6DENDtR33d21phs6YIKOtEd2iGLe7a1si62hIrjpIHucBQJdHzHt0Z4RhAyX0lBpGweajwgkYZWcXYouaj9XhTCa26bSBjqkAaxq9jJ6Lyc9KJ3N4UxedKBWowzR6gtvbw2EB7W4PSQWPVwGIJQLMf6xR3FDbMU8UPJyWn2HUDeSunW2Iqaf9sdOJvebfediDY4EMxROgmtFN5Yrfn%2FNDciYE4ig7G1RyXtmeJ7KnAU5RRinD%2Bm9XK%2FiGtxW28wpvyisrpb9jmrYOxwH8V%2FQpN7O%2BCbJx%2Fg41OaVNKUeAYWy%2Bg%2Betv00fyzv8mZy&X-Amz-Signature=f6bb6f9a29b8cf8e4d38036d3007f7dd1d1cca76bc28bd941d014385f8e76c38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
