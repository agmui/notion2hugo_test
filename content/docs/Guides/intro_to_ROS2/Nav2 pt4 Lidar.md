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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEWKGKYK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1Z6mfF2mSsoY1HYsJWGrTOJsronqHkffFAMyN%2B9hBLgIhAImpJUoRo%2BfMhB39vkglmxgXBC3oD3%2FckVN5aIRV11DQKv8DCCoQABoMNjM3NDIzMTgzODA1IgyTYnysL14fN1GRF3Iq3AMFcnN27NP3DMdejeS%2B3KBsKGQ8%2FOQqPPVaCPkcyxuH4OwuE3rl5Um%2FbDGI7DVUqzGZVPsBmh4Ugy9dBaO8h0XZmTvYNq1EazuKiAmzoRNEazuagpykndz4ozx7acCdFlWNMn27VBJszasuGRfsXJwWITk%2FpsBwzz7Wu7PfB2U7zdPduO3XQcalC9nmg4kjFC7OZKirpw8wGWuGIv60eb8wKSKkW8%2FHtKlfSrQe8Nx40pldDIDmgPZFg1RjjHuIcyfFkoSDgdz8VxHnVSThbJfktAscx6FxSWF3Qc%2BVKdTPJ%2F3e9%2Fp%2BvcGy57amEHSmLF8qXVpb9OJh%2B7iigCYCNgZ5nIIW0V7wQzDW79xFPWTNxecqpTNjhIuxfze1v8BfoUvja922wE%2FeP0xvFQD8tjuhkw770MFSpEq98fRlSehR9LvtcUjGnRcuJNwmbYJF4jsO71iFYDMnLSc86qztjrLVyNoGyECa06KQ8W5M9PndxJgCaLf9Ww1QA4ere6AUVQ0zbSuq4hs6bKhhBU04kM4%2BSGXXE3%2BSU%2BtG9LR%2Fm8HyCyDnQKTYFOlDUTlbWVzoq%2BBGqehRp3Jq0i2a2MzkEsZYU4elLR4gJWS6oUsEH1HyNWU%2B6XDT7iR4sXTUTDD4x7zEBjqkAYXlT4aOHTJfia0lj%2BQXH%2FT3BqEB83zTKSVSXOoG%2BgtO4wq52QmPRwofoeoPDgO2xZ8kdpvaph%2FpS9RjLp7TS33xa8gK8WiKeOen1DeosBBv9fbLGEmHt61GGhvzpvafF9dF%2FN%2Fn%2BEGxfAtqju%2FhTwWDa0CsZMTPZRN10%2FxBkiC239baPo2h4BofpfCqDWxNMpb56ZGqaUZFdCPnXpvRji4xEM6u&X-Amz-Signature=9ed9336df5fb71be11f344881496c282e9125bcd527c8bddcfacda2eea4bff66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QG72CD7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiWt677IMBqb0PRGDpJ3NOBUSLK8KsJre8YJQFuQe1SwIgCPtL5fUY0mh8BHhDBDfDk5sqcJBHQd9OJZ77Ku0ie54q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDIB9IRWGcN9Kw59CxCrcA0zjKsk4nxfxLF2Int48T9FpgXOWLT4n106CoxT1dfWaECpZ7TzzgYf6uOsgm5gqyPWD0eKRleqyKJSai2LtE%2FGf10DuPdtiXTUctED4KhVuuywC1RMOdyp2xKJTeSUUGaKHHMF5p2yWyYtixSnBcSBAMJqQOnJ0ZI6C%2FLHOecqgxg8giBDOAZPJSgu4p6ZMGVHQVAZef0txX9XCMC3%2FClJdSkbL%2F0ZcbqxZdrl0J0GsYR2jFMWZKsNDYs1BqS5mrfvhJhFCPEsFwMCSjTiGtQVJeg3GrvUM2Rz3Td3D0I0PKvlnmc9g6ZPQxG3G9bly6NBKsa0rasIkBqW%2BhzHb2f14wEv7dw8gSEWNOpnSTHpIs0Ghz5e8RcN3U5H%2FKUJDCWqTlEzotk88dDvByjGFVGPUaMzECvNJI%2BkUWeszFgxjdh2glZfGHTWDbP3xD05BjWvEwhuk0D0nqbXixR29gc4EgoIJEzZsoE55V6dRnm840HqJDQhh%2BwVj8BD4o0enCJxYTyOcG34r03c50QpslySKfwea5o9J%2FjS5aJFZuEhAYIdXh2sFN0tPp1OvmHkq5YZ%2BVpA%2BAmUCkG5HUV2VqqKLTB8TsTHIZw09KjYb9D2KIFsZXwBSIqeRaV3EMLm6vMQGOqUB3Q3rhaO7X8KU3jzk9GHC7jSNMUSGlWpuFxq1EdqcxxnKOcjHC2BOhyjvPB3%2Fn9exbQo4D2VuMrcPydpaCU%2Fu0ah39Cqt379Uv49tn5mGBSxfV1WasVIbWvQNXDtp9AGaGS3wYObiAv2qdLlUjUySBPdRKXcOPX6lMLyQqjWlrD3tnLv0wEGjFkJvygMC275a28835GG%2FVxBw13K45dhqIJnCfssJ&X-Amz-Signature=0d9542a0d215fc8f372f1cf80fdf6170f08a3f76705692ed14caebe563af1ae4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QG72CD7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiWt677IMBqb0PRGDpJ3NOBUSLK8KsJre8YJQFuQe1SwIgCPtL5fUY0mh8BHhDBDfDk5sqcJBHQd9OJZ77Ku0ie54q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDIB9IRWGcN9Kw59CxCrcA0zjKsk4nxfxLF2Int48T9FpgXOWLT4n106CoxT1dfWaECpZ7TzzgYf6uOsgm5gqyPWD0eKRleqyKJSai2LtE%2FGf10DuPdtiXTUctED4KhVuuywC1RMOdyp2xKJTeSUUGaKHHMF5p2yWyYtixSnBcSBAMJqQOnJ0ZI6C%2FLHOecqgxg8giBDOAZPJSgu4p6ZMGVHQVAZef0txX9XCMC3%2FClJdSkbL%2F0ZcbqxZdrl0J0GsYR2jFMWZKsNDYs1BqS5mrfvhJhFCPEsFwMCSjTiGtQVJeg3GrvUM2Rz3Td3D0I0PKvlnmc9g6ZPQxG3G9bly6NBKsa0rasIkBqW%2BhzHb2f14wEv7dw8gSEWNOpnSTHpIs0Ghz5e8RcN3U5H%2FKUJDCWqTlEzotk88dDvByjGFVGPUaMzECvNJI%2BkUWeszFgxjdh2glZfGHTWDbP3xD05BjWvEwhuk0D0nqbXixR29gc4EgoIJEzZsoE55V6dRnm840HqJDQhh%2BwVj8BD4o0enCJxYTyOcG34r03c50QpslySKfwea5o9J%2FjS5aJFZuEhAYIdXh2sFN0tPp1OvmHkq5YZ%2BVpA%2BAmUCkG5HUV2VqqKLTB8TsTHIZw09KjYb9D2KIFsZXwBSIqeRaV3EMLm6vMQGOqUB3Q3rhaO7X8KU3jzk9GHC7jSNMUSGlWpuFxq1EdqcxxnKOcjHC2BOhyjvPB3%2Fn9exbQo4D2VuMrcPydpaCU%2Fu0ah39Cqt379Uv49tn5mGBSxfV1WasVIbWvQNXDtp9AGaGS3wYObiAv2qdLlUjUySBPdRKXcOPX6lMLyQqjWlrD3tnLv0wEGjFkJvygMC275a28835GG%2FVxBw13K45dhqIJnCfssJ&X-Amz-Signature=1ba1ff498afc5adf26d5ddcbfdb86f3c548cea7253ce084598444e965116dc6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QG72CD7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiWt677IMBqb0PRGDpJ3NOBUSLK8KsJre8YJQFuQe1SwIgCPtL5fUY0mh8BHhDBDfDk5sqcJBHQd9OJZ77Ku0ie54q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDIB9IRWGcN9Kw59CxCrcA0zjKsk4nxfxLF2Int48T9FpgXOWLT4n106CoxT1dfWaECpZ7TzzgYf6uOsgm5gqyPWD0eKRleqyKJSai2LtE%2FGf10DuPdtiXTUctED4KhVuuywC1RMOdyp2xKJTeSUUGaKHHMF5p2yWyYtixSnBcSBAMJqQOnJ0ZI6C%2FLHOecqgxg8giBDOAZPJSgu4p6ZMGVHQVAZef0txX9XCMC3%2FClJdSkbL%2F0ZcbqxZdrl0J0GsYR2jFMWZKsNDYs1BqS5mrfvhJhFCPEsFwMCSjTiGtQVJeg3GrvUM2Rz3Td3D0I0PKvlnmc9g6ZPQxG3G9bly6NBKsa0rasIkBqW%2BhzHb2f14wEv7dw8gSEWNOpnSTHpIs0Ghz5e8RcN3U5H%2FKUJDCWqTlEzotk88dDvByjGFVGPUaMzECvNJI%2BkUWeszFgxjdh2glZfGHTWDbP3xD05BjWvEwhuk0D0nqbXixR29gc4EgoIJEzZsoE55V6dRnm840HqJDQhh%2BwVj8BD4o0enCJxYTyOcG34r03c50QpslySKfwea5o9J%2FjS5aJFZuEhAYIdXh2sFN0tPp1OvmHkq5YZ%2BVpA%2BAmUCkG5HUV2VqqKLTB8TsTHIZw09KjYb9D2KIFsZXwBSIqeRaV3EMLm6vMQGOqUB3Q3rhaO7X8KU3jzk9GHC7jSNMUSGlWpuFxq1EdqcxxnKOcjHC2BOhyjvPB3%2Fn9exbQo4D2VuMrcPydpaCU%2Fu0ah39Cqt379Uv49tn5mGBSxfV1WasVIbWvQNXDtp9AGaGS3wYObiAv2qdLlUjUySBPdRKXcOPX6lMLyQqjWlrD3tnLv0wEGjFkJvygMC275a28835GG%2FVxBw13K45dhqIJnCfssJ&X-Amz-Signature=68cb70945321025ab27fa81cc986ac06967358278d70849d6099894a64dfd8bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QG72CD7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiWt677IMBqb0PRGDpJ3NOBUSLK8KsJre8YJQFuQe1SwIgCPtL5fUY0mh8BHhDBDfDk5sqcJBHQd9OJZ77Ku0ie54q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDIB9IRWGcN9Kw59CxCrcA0zjKsk4nxfxLF2Int48T9FpgXOWLT4n106CoxT1dfWaECpZ7TzzgYf6uOsgm5gqyPWD0eKRleqyKJSai2LtE%2FGf10DuPdtiXTUctED4KhVuuywC1RMOdyp2xKJTeSUUGaKHHMF5p2yWyYtixSnBcSBAMJqQOnJ0ZI6C%2FLHOecqgxg8giBDOAZPJSgu4p6ZMGVHQVAZef0txX9XCMC3%2FClJdSkbL%2F0ZcbqxZdrl0J0GsYR2jFMWZKsNDYs1BqS5mrfvhJhFCPEsFwMCSjTiGtQVJeg3GrvUM2Rz3Td3D0I0PKvlnmc9g6ZPQxG3G9bly6NBKsa0rasIkBqW%2BhzHb2f14wEv7dw8gSEWNOpnSTHpIs0Ghz5e8RcN3U5H%2FKUJDCWqTlEzotk88dDvByjGFVGPUaMzECvNJI%2BkUWeszFgxjdh2glZfGHTWDbP3xD05BjWvEwhuk0D0nqbXixR29gc4EgoIJEzZsoE55V6dRnm840HqJDQhh%2BwVj8BD4o0enCJxYTyOcG34r03c50QpslySKfwea5o9J%2FjS5aJFZuEhAYIdXh2sFN0tPp1OvmHkq5YZ%2BVpA%2BAmUCkG5HUV2VqqKLTB8TsTHIZw09KjYb9D2KIFsZXwBSIqeRaV3EMLm6vMQGOqUB3Q3rhaO7X8KU3jzk9GHC7jSNMUSGlWpuFxq1EdqcxxnKOcjHC2BOhyjvPB3%2Fn9exbQo4D2VuMrcPydpaCU%2Fu0ah39Cqt379Uv49tn5mGBSxfV1WasVIbWvQNXDtp9AGaGS3wYObiAv2qdLlUjUySBPdRKXcOPX6lMLyQqjWlrD3tnLv0wEGjFkJvygMC275a28835GG%2FVxBw13K45dhqIJnCfssJ&X-Amz-Signature=71ec6aa216b057db4dc154a9a020ff4a8a4eb7df1e97b78a5466e26bd17bb4b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QG72CD7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiWt677IMBqb0PRGDpJ3NOBUSLK8KsJre8YJQFuQe1SwIgCPtL5fUY0mh8BHhDBDfDk5sqcJBHQd9OJZ77Ku0ie54q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDIB9IRWGcN9Kw59CxCrcA0zjKsk4nxfxLF2Int48T9FpgXOWLT4n106CoxT1dfWaECpZ7TzzgYf6uOsgm5gqyPWD0eKRleqyKJSai2LtE%2FGf10DuPdtiXTUctED4KhVuuywC1RMOdyp2xKJTeSUUGaKHHMF5p2yWyYtixSnBcSBAMJqQOnJ0ZI6C%2FLHOecqgxg8giBDOAZPJSgu4p6ZMGVHQVAZef0txX9XCMC3%2FClJdSkbL%2F0ZcbqxZdrl0J0GsYR2jFMWZKsNDYs1BqS5mrfvhJhFCPEsFwMCSjTiGtQVJeg3GrvUM2Rz3Td3D0I0PKvlnmc9g6ZPQxG3G9bly6NBKsa0rasIkBqW%2BhzHb2f14wEv7dw8gSEWNOpnSTHpIs0Ghz5e8RcN3U5H%2FKUJDCWqTlEzotk88dDvByjGFVGPUaMzECvNJI%2BkUWeszFgxjdh2glZfGHTWDbP3xD05BjWvEwhuk0D0nqbXixR29gc4EgoIJEzZsoE55V6dRnm840HqJDQhh%2BwVj8BD4o0enCJxYTyOcG34r03c50QpslySKfwea5o9J%2FjS5aJFZuEhAYIdXh2sFN0tPp1OvmHkq5YZ%2BVpA%2BAmUCkG5HUV2VqqKLTB8TsTHIZw09KjYb9D2KIFsZXwBSIqeRaV3EMLm6vMQGOqUB3Q3rhaO7X8KU3jzk9GHC7jSNMUSGlWpuFxq1EdqcxxnKOcjHC2BOhyjvPB3%2Fn9exbQo4D2VuMrcPydpaCU%2Fu0ah39Cqt379Uv49tn5mGBSxfV1WasVIbWvQNXDtp9AGaGS3wYObiAv2qdLlUjUySBPdRKXcOPX6lMLyQqjWlrD3tnLv0wEGjFkJvygMC275a28835GG%2FVxBw13K45dhqIJnCfssJ&X-Amz-Signature=68cdb3aa71f0264dd167e57b6adf065f88397dcb9137870c3cfa0d1187006356&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QG72CD7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiWt677IMBqb0PRGDpJ3NOBUSLK8KsJre8YJQFuQe1SwIgCPtL5fUY0mh8BHhDBDfDk5sqcJBHQd9OJZ77Ku0ie54q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDIB9IRWGcN9Kw59CxCrcA0zjKsk4nxfxLF2Int48T9FpgXOWLT4n106CoxT1dfWaECpZ7TzzgYf6uOsgm5gqyPWD0eKRleqyKJSai2LtE%2FGf10DuPdtiXTUctED4KhVuuywC1RMOdyp2xKJTeSUUGaKHHMF5p2yWyYtixSnBcSBAMJqQOnJ0ZI6C%2FLHOecqgxg8giBDOAZPJSgu4p6ZMGVHQVAZef0txX9XCMC3%2FClJdSkbL%2F0ZcbqxZdrl0J0GsYR2jFMWZKsNDYs1BqS5mrfvhJhFCPEsFwMCSjTiGtQVJeg3GrvUM2Rz3Td3D0I0PKvlnmc9g6ZPQxG3G9bly6NBKsa0rasIkBqW%2BhzHb2f14wEv7dw8gSEWNOpnSTHpIs0Ghz5e8RcN3U5H%2FKUJDCWqTlEzotk88dDvByjGFVGPUaMzECvNJI%2BkUWeszFgxjdh2glZfGHTWDbP3xD05BjWvEwhuk0D0nqbXixR29gc4EgoIJEzZsoE55V6dRnm840HqJDQhh%2BwVj8BD4o0enCJxYTyOcG34r03c50QpslySKfwea5o9J%2FjS5aJFZuEhAYIdXh2sFN0tPp1OvmHkq5YZ%2BVpA%2BAmUCkG5HUV2VqqKLTB8TsTHIZw09KjYb9D2KIFsZXwBSIqeRaV3EMLm6vMQGOqUB3Q3rhaO7X8KU3jzk9GHC7jSNMUSGlWpuFxq1EdqcxxnKOcjHC2BOhyjvPB3%2Fn9exbQo4D2VuMrcPydpaCU%2Fu0ah39Cqt379Uv49tn5mGBSxfV1WasVIbWvQNXDtp9AGaGS3wYObiAv2qdLlUjUySBPdRKXcOPX6lMLyQqjWlrD3tnLv0wEGjFkJvygMC275a28835GG%2FVxBw13K45dhqIJnCfssJ&X-Amz-Signature=ee3d42043ac4e675204cc1a3333b74e5ae9d7e6d8a847990c1876e42f110c415&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QG72CD7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiWt677IMBqb0PRGDpJ3NOBUSLK8KsJre8YJQFuQe1SwIgCPtL5fUY0mh8BHhDBDfDk5sqcJBHQd9OJZ77Ku0ie54q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDIB9IRWGcN9Kw59CxCrcA0zjKsk4nxfxLF2Int48T9FpgXOWLT4n106CoxT1dfWaECpZ7TzzgYf6uOsgm5gqyPWD0eKRleqyKJSai2LtE%2FGf10DuPdtiXTUctED4KhVuuywC1RMOdyp2xKJTeSUUGaKHHMF5p2yWyYtixSnBcSBAMJqQOnJ0ZI6C%2FLHOecqgxg8giBDOAZPJSgu4p6ZMGVHQVAZef0txX9XCMC3%2FClJdSkbL%2F0ZcbqxZdrl0J0GsYR2jFMWZKsNDYs1BqS5mrfvhJhFCPEsFwMCSjTiGtQVJeg3GrvUM2Rz3Td3D0I0PKvlnmc9g6ZPQxG3G9bly6NBKsa0rasIkBqW%2BhzHb2f14wEv7dw8gSEWNOpnSTHpIs0Ghz5e8RcN3U5H%2FKUJDCWqTlEzotk88dDvByjGFVGPUaMzECvNJI%2BkUWeszFgxjdh2glZfGHTWDbP3xD05BjWvEwhuk0D0nqbXixR29gc4EgoIJEzZsoE55V6dRnm840HqJDQhh%2BwVj8BD4o0enCJxYTyOcG34r03c50QpslySKfwea5o9J%2FjS5aJFZuEhAYIdXh2sFN0tPp1OvmHkq5YZ%2BVpA%2BAmUCkG5HUV2VqqKLTB8TsTHIZw09KjYb9D2KIFsZXwBSIqeRaV3EMLm6vMQGOqUB3Q3rhaO7X8KU3jzk9GHC7jSNMUSGlWpuFxq1EdqcxxnKOcjHC2BOhyjvPB3%2Fn9exbQo4D2VuMrcPydpaCU%2Fu0ah39Cqt379Uv49tn5mGBSxfV1WasVIbWvQNXDtp9AGaGS3wYObiAv2qdLlUjUySBPdRKXcOPX6lMLyQqjWlrD3tnLv0wEGjFkJvygMC275a28835GG%2FVxBw13K45dhqIJnCfssJ&X-Amz-Signature=c8fe59f50abd5b9ef9af917d785c4fa96d3d6b3e4bc36c13eff0d8b2abd23a1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QG72CD7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiWt677IMBqb0PRGDpJ3NOBUSLK8KsJre8YJQFuQe1SwIgCPtL5fUY0mh8BHhDBDfDk5sqcJBHQd9OJZ77Ku0ie54q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDIB9IRWGcN9Kw59CxCrcA0zjKsk4nxfxLF2Int48T9FpgXOWLT4n106CoxT1dfWaECpZ7TzzgYf6uOsgm5gqyPWD0eKRleqyKJSai2LtE%2FGf10DuPdtiXTUctED4KhVuuywC1RMOdyp2xKJTeSUUGaKHHMF5p2yWyYtixSnBcSBAMJqQOnJ0ZI6C%2FLHOecqgxg8giBDOAZPJSgu4p6ZMGVHQVAZef0txX9XCMC3%2FClJdSkbL%2F0ZcbqxZdrl0J0GsYR2jFMWZKsNDYs1BqS5mrfvhJhFCPEsFwMCSjTiGtQVJeg3GrvUM2Rz3Td3D0I0PKvlnmc9g6ZPQxG3G9bly6NBKsa0rasIkBqW%2BhzHb2f14wEv7dw8gSEWNOpnSTHpIs0Ghz5e8RcN3U5H%2FKUJDCWqTlEzotk88dDvByjGFVGPUaMzECvNJI%2BkUWeszFgxjdh2glZfGHTWDbP3xD05BjWvEwhuk0D0nqbXixR29gc4EgoIJEzZsoE55V6dRnm840HqJDQhh%2BwVj8BD4o0enCJxYTyOcG34r03c50QpslySKfwea5o9J%2FjS5aJFZuEhAYIdXh2sFN0tPp1OvmHkq5YZ%2BVpA%2BAmUCkG5HUV2VqqKLTB8TsTHIZw09KjYb9D2KIFsZXwBSIqeRaV3EMLm6vMQGOqUB3Q3rhaO7X8KU3jzk9GHC7jSNMUSGlWpuFxq1EdqcxxnKOcjHC2BOhyjvPB3%2Fn9exbQo4D2VuMrcPydpaCU%2Fu0ah39Cqt379Uv49tn5mGBSxfV1WasVIbWvQNXDtp9AGaGS3wYObiAv2qdLlUjUySBPdRKXcOPX6lMLyQqjWlrD3tnLv0wEGjFkJvygMC275a28835GG%2FVxBw13K45dhqIJnCfssJ&X-Amz-Signature=36bf9298c8828ba05296e2ab4e961719d67d3a7181dee6c66e6ac01131d9421d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QG72CD7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiWt677IMBqb0PRGDpJ3NOBUSLK8KsJre8YJQFuQe1SwIgCPtL5fUY0mh8BHhDBDfDk5sqcJBHQd9OJZ77Ku0ie54q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDIB9IRWGcN9Kw59CxCrcA0zjKsk4nxfxLF2Int48T9FpgXOWLT4n106CoxT1dfWaECpZ7TzzgYf6uOsgm5gqyPWD0eKRleqyKJSai2LtE%2FGf10DuPdtiXTUctED4KhVuuywC1RMOdyp2xKJTeSUUGaKHHMF5p2yWyYtixSnBcSBAMJqQOnJ0ZI6C%2FLHOecqgxg8giBDOAZPJSgu4p6ZMGVHQVAZef0txX9XCMC3%2FClJdSkbL%2F0ZcbqxZdrl0J0GsYR2jFMWZKsNDYs1BqS5mrfvhJhFCPEsFwMCSjTiGtQVJeg3GrvUM2Rz3Td3D0I0PKvlnmc9g6ZPQxG3G9bly6NBKsa0rasIkBqW%2BhzHb2f14wEv7dw8gSEWNOpnSTHpIs0Ghz5e8RcN3U5H%2FKUJDCWqTlEzotk88dDvByjGFVGPUaMzECvNJI%2BkUWeszFgxjdh2glZfGHTWDbP3xD05BjWvEwhuk0D0nqbXixR29gc4EgoIJEzZsoE55V6dRnm840HqJDQhh%2BwVj8BD4o0enCJxYTyOcG34r03c50QpslySKfwea5o9J%2FjS5aJFZuEhAYIdXh2sFN0tPp1OvmHkq5YZ%2BVpA%2BAmUCkG5HUV2VqqKLTB8TsTHIZw09KjYb9D2KIFsZXwBSIqeRaV3EMLm6vMQGOqUB3Q3rhaO7X8KU3jzk9GHC7jSNMUSGlWpuFxq1EdqcxxnKOcjHC2BOhyjvPB3%2Fn9exbQo4D2VuMrcPydpaCU%2Fu0ah39Cqt379Uv49tn5mGBSxfV1WasVIbWvQNXDtp9AGaGS3wYObiAv2qdLlUjUySBPdRKXcOPX6lMLyQqjWlrD3tnLv0wEGjFkJvygMC275a28835GG%2FVxBw13K45dhqIJnCfssJ&X-Amz-Signature=92a354b2e86c3dd565111209d0109cadde8e1dfe1687309ceef39562616c2306&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QG72CD7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiWt677IMBqb0PRGDpJ3NOBUSLK8KsJre8YJQFuQe1SwIgCPtL5fUY0mh8BHhDBDfDk5sqcJBHQd9OJZ77Ku0ie54q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDIB9IRWGcN9Kw59CxCrcA0zjKsk4nxfxLF2Int48T9FpgXOWLT4n106CoxT1dfWaECpZ7TzzgYf6uOsgm5gqyPWD0eKRleqyKJSai2LtE%2FGf10DuPdtiXTUctED4KhVuuywC1RMOdyp2xKJTeSUUGaKHHMF5p2yWyYtixSnBcSBAMJqQOnJ0ZI6C%2FLHOecqgxg8giBDOAZPJSgu4p6ZMGVHQVAZef0txX9XCMC3%2FClJdSkbL%2F0ZcbqxZdrl0J0GsYR2jFMWZKsNDYs1BqS5mrfvhJhFCPEsFwMCSjTiGtQVJeg3GrvUM2Rz3Td3D0I0PKvlnmc9g6ZPQxG3G9bly6NBKsa0rasIkBqW%2BhzHb2f14wEv7dw8gSEWNOpnSTHpIs0Ghz5e8RcN3U5H%2FKUJDCWqTlEzotk88dDvByjGFVGPUaMzECvNJI%2BkUWeszFgxjdh2glZfGHTWDbP3xD05BjWvEwhuk0D0nqbXixR29gc4EgoIJEzZsoE55V6dRnm840HqJDQhh%2BwVj8BD4o0enCJxYTyOcG34r03c50QpslySKfwea5o9J%2FjS5aJFZuEhAYIdXh2sFN0tPp1OvmHkq5YZ%2BVpA%2BAmUCkG5HUV2VqqKLTB8TsTHIZw09KjYb9D2KIFsZXwBSIqeRaV3EMLm6vMQGOqUB3Q3rhaO7X8KU3jzk9GHC7jSNMUSGlWpuFxq1EdqcxxnKOcjHC2BOhyjvPB3%2Fn9exbQo4D2VuMrcPydpaCU%2Fu0ah39Cqt379Uv49tn5mGBSxfV1WasVIbWvQNXDtp9AGaGS3wYObiAv2qdLlUjUySBPdRKXcOPX6lMLyQqjWlrD3tnLv0wEGjFkJvygMC275a28835GG%2FVxBw13K45dhqIJnCfssJ&X-Amz-Signature=71ec6aa216b057db4dc154a9a020ff4a8a4eb7df1e97b78a5466e26bd17bb4b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
