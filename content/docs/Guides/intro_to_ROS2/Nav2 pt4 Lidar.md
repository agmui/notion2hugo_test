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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRAX45E7%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNpitbnVEF6KvUBzzK%2FU4LPIC%2FNHPFamyRppi5q6gs3AIgGESKKO32vypyaE9x3F2J1kuZXsGVFIb8nV%2FfFBzuGnEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK3Nu0eIuAR0yxgXVSrcA%2FR8GLKGLDxYsmZs0K56ZOyVT37qWmHxjSC8gsqo0CSALkF7B7%2F5t3AffEW495p%2BXVXXN9%2FNuk97RUbkWHK%2Be1PpW2N5mgVAZebIFjKMJkxLC6dOV3xq2CGlJpbs%2Bg2d4g%2FalVVrMbEqYdfXVPIQZMx6%2FoLFItqIHOa2do7BHsVVi6y1scSMIythBPWP7d0ynb35tqsVkzt9uwNR%2Bc%2B%2BiLNaJlJcVyAXcf28a2eMhrzKcuCQQ7nOjVPHey1vgfttmVYseJwPA4dciQJjD7qPPYkiLQooSAAOPnCnxjuTGLgQF1ti%2FXdfW3pKr%2BL%2Bc4N6qnllxNKGCrbfTm5spIrSLRROp3VKa9mVg6U4elQ9hHbTz0vptnTkrM8tANgiETuqf0Goxm8JldDnrcIj4qQayMeMen91ZGIPQHNi%2F15x8O7H6zenxcsIcC4Ia%2B1QEW%2F80%2FshJU8XS1DviPMhrJdFaVobtQcVGZCcfXUAq%2FpOoqDoNFspsj0hmKl95HC01tm3hd6aBYtsECbslCpXfG0wHKOxX%2F6eFRO%2FY5q4D0tyK9K57Vzkq1Z%2BWVM%2FeY%2BpjM7GO7q8tz3W1Jhx0F1OYj%2BqokZp3dg96GGtBkMYEdby0E0dbZkgUUvlQeSCeKrwMMmWjMcGOqUB6K29O0d8yWWO9Y6%2BTf29BzD7GLpaskYbD6SL7r1%2F%2Fhxadw5wGVPUjY%2FIC36Qq9tFdMvqzusn7pTO3v10dNXVVdF9U1oNxyh0YpAOY%2BZ2sx0Nml02RgJmK5ff%2Fq8DFv6%2BByaT%2Fl1Dx%2BmH07ezZ03haRsVjo5W8H4XxmKO2xalO15imCPaBnat69pebjQbrisSzWkTxCW6hFymL%2FyvYQrvdaBvfbvC&X-Amz-Signature=8962b4ee8be5f3f97731049f412ca0e02c9c4e17b9efc08aef3f5fed3781b220&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N3GGEWO%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHV8ndrvpMeNJ%2B1cBBoYvaKHKjqs2MpdfXn59JVv3wfPAiEAqAzGpKd%2BgudRZ09uhf9AsHGIXrOTXjo9YCZZkm2MnIoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOiN1Ln9U3kyiD0yCrcAxqPjwWhpzZTHpR57tAly77O6HVUMzR%2BdyVCPDypGGFBRBmgFqeEFAQa%2BO%2BXsoflpn38ShMiCeWppv8fKuevb4Ca5UnEEka%2BdTLDkDS9PlfbJvEBbtZ1%2BkRKfjAc5660NnbtVYlOOh9Jzdjick4peDw5StWTEeNom4m%2B2EC%2FuDDy8uT4f4jwn3DWPq6ZFeSI9SoZRDQ%2BJfmpoKiUe5h1ApUmmVG48pkrf7Th4M02G5cP13uJVzUQ4EmPJkZBv82eBHkR3CQk6Ix7Hyn6vf2ijUiJFrc9onBkPh7fFK7t7k9zwFt3mr7P7YGDy2T5uz3tnOK2raZmd4yIczX2dB7nvkycLgVA6idiDdaqy%2BIP4JCcl91MCuUlObbaIfRPAhPn1oUZsSSzMHaQN79rXPKAufGHfRP6hxPSI9sTl%2BwS8NsvTbZ2joqDV7B%2FlRFISNH19T3HdKU5YFsqm5aI8p8rVp7l2IXmTq%2Bc7os5O75U9bB9wAeYQoGTY9xMo%2BXXRgeXr2iB99LspOg0BvBRIcxEzQBbs5ZeNT7OG30P3Zrhb9kdclMqUDkZWIRRGOqwYexRusu5AzyxBzgjy3lwqrsnVSQdK0Wr3MZkecnd4OhtnL6XwEcoUcGeYIgjCMJDMNeVjMcGOqUBqd3XUSuwJpmu81jDqbT1WhzBriI3RsIadrVa%2FEMybElXY5eyYRXm4ZMmYhQfe3G2AimlVY0LfKu%2B0RrG76BosGRQyuIG3o4Z0hxrAADpFWf2lsnXmMqq8pYqVcLPqPViBA2N0boZEjuzQz9twADMT%2FPniGuz4pEE1hYRiYtvCC3%2BA4iENtnKDf2%2F1I3RRw2nSBuyE3tIUI9Nqqi%2FgH8nEWWxWVA5&X-Amz-Signature=067f4baa2eb2e5a140da62baf54ef9b1939bacb9a030df845942f7baf0839540&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N3GGEWO%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHV8ndrvpMeNJ%2B1cBBoYvaKHKjqs2MpdfXn59JVv3wfPAiEAqAzGpKd%2BgudRZ09uhf9AsHGIXrOTXjo9YCZZkm2MnIoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOiN1Ln9U3kyiD0yCrcAxqPjwWhpzZTHpR57tAly77O6HVUMzR%2BdyVCPDypGGFBRBmgFqeEFAQa%2BO%2BXsoflpn38ShMiCeWppv8fKuevb4Ca5UnEEka%2BdTLDkDS9PlfbJvEBbtZ1%2BkRKfjAc5660NnbtVYlOOh9Jzdjick4peDw5StWTEeNom4m%2B2EC%2FuDDy8uT4f4jwn3DWPq6ZFeSI9SoZRDQ%2BJfmpoKiUe5h1ApUmmVG48pkrf7Th4M02G5cP13uJVzUQ4EmPJkZBv82eBHkR3CQk6Ix7Hyn6vf2ijUiJFrc9onBkPh7fFK7t7k9zwFt3mr7P7YGDy2T5uz3tnOK2raZmd4yIczX2dB7nvkycLgVA6idiDdaqy%2BIP4JCcl91MCuUlObbaIfRPAhPn1oUZsSSzMHaQN79rXPKAufGHfRP6hxPSI9sTl%2BwS8NsvTbZ2joqDV7B%2FlRFISNH19T3HdKU5YFsqm5aI8p8rVp7l2IXmTq%2Bc7os5O75U9bB9wAeYQoGTY9xMo%2BXXRgeXr2iB99LspOg0BvBRIcxEzQBbs5ZeNT7OG30P3Zrhb9kdclMqUDkZWIRRGOqwYexRusu5AzyxBzgjy3lwqrsnVSQdK0Wr3MZkecnd4OhtnL6XwEcoUcGeYIgjCMJDMNeVjMcGOqUBqd3XUSuwJpmu81jDqbT1WhzBriI3RsIadrVa%2FEMybElXY5eyYRXm4ZMmYhQfe3G2AimlVY0LfKu%2B0RrG76BosGRQyuIG3o4Z0hxrAADpFWf2lsnXmMqq8pYqVcLPqPViBA2N0boZEjuzQz9twADMT%2FPniGuz4pEE1hYRiYtvCC3%2BA4iENtnKDf2%2F1I3RRw2nSBuyE3tIUI9Nqqi%2FgH8nEWWxWVA5&X-Amz-Signature=8e90fa14cd706f3e64d761825dd59fbe9b0ce4052cbb1cadcf5be6756414ccb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N3GGEWO%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHV8ndrvpMeNJ%2B1cBBoYvaKHKjqs2MpdfXn59JVv3wfPAiEAqAzGpKd%2BgudRZ09uhf9AsHGIXrOTXjo9YCZZkm2MnIoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOiN1Ln9U3kyiD0yCrcAxqPjwWhpzZTHpR57tAly77O6HVUMzR%2BdyVCPDypGGFBRBmgFqeEFAQa%2BO%2BXsoflpn38ShMiCeWppv8fKuevb4Ca5UnEEka%2BdTLDkDS9PlfbJvEBbtZ1%2BkRKfjAc5660NnbtVYlOOh9Jzdjick4peDw5StWTEeNom4m%2B2EC%2FuDDy8uT4f4jwn3DWPq6ZFeSI9SoZRDQ%2BJfmpoKiUe5h1ApUmmVG48pkrf7Th4M02G5cP13uJVzUQ4EmPJkZBv82eBHkR3CQk6Ix7Hyn6vf2ijUiJFrc9onBkPh7fFK7t7k9zwFt3mr7P7YGDy2T5uz3tnOK2raZmd4yIczX2dB7nvkycLgVA6idiDdaqy%2BIP4JCcl91MCuUlObbaIfRPAhPn1oUZsSSzMHaQN79rXPKAufGHfRP6hxPSI9sTl%2BwS8NsvTbZ2joqDV7B%2FlRFISNH19T3HdKU5YFsqm5aI8p8rVp7l2IXmTq%2Bc7os5O75U9bB9wAeYQoGTY9xMo%2BXXRgeXr2iB99LspOg0BvBRIcxEzQBbs5ZeNT7OG30P3Zrhb9kdclMqUDkZWIRRGOqwYexRusu5AzyxBzgjy3lwqrsnVSQdK0Wr3MZkecnd4OhtnL6XwEcoUcGeYIgjCMJDMNeVjMcGOqUBqd3XUSuwJpmu81jDqbT1WhzBriI3RsIadrVa%2FEMybElXY5eyYRXm4ZMmYhQfe3G2AimlVY0LfKu%2B0RrG76BosGRQyuIG3o4Z0hxrAADpFWf2lsnXmMqq8pYqVcLPqPViBA2N0boZEjuzQz9twADMT%2FPniGuz4pEE1hYRiYtvCC3%2BA4iENtnKDf2%2F1I3RRw2nSBuyE3tIUI9Nqqi%2FgH8nEWWxWVA5&X-Amz-Signature=f8d98a934eec09f00a44f081f44247bff33b95039e445dec0cb2df6363a7b9bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N3GGEWO%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHV8ndrvpMeNJ%2B1cBBoYvaKHKjqs2MpdfXn59JVv3wfPAiEAqAzGpKd%2BgudRZ09uhf9AsHGIXrOTXjo9YCZZkm2MnIoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOiN1Ln9U3kyiD0yCrcAxqPjwWhpzZTHpR57tAly77O6HVUMzR%2BdyVCPDypGGFBRBmgFqeEFAQa%2BO%2BXsoflpn38ShMiCeWppv8fKuevb4Ca5UnEEka%2BdTLDkDS9PlfbJvEBbtZ1%2BkRKfjAc5660NnbtVYlOOh9Jzdjick4peDw5StWTEeNom4m%2B2EC%2FuDDy8uT4f4jwn3DWPq6ZFeSI9SoZRDQ%2BJfmpoKiUe5h1ApUmmVG48pkrf7Th4M02G5cP13uJVzUQ4EmPJkZBv82eBHkR3CQk6Ix7Hyn6vf2ijUiJFrc9onBkPh7fFK7t7k9zwFt3mr7P7YGDy2T5uz3tnOK2raZmd4yIczX2dB7nvkycLgVA6idiDdaqy%2BIP4JCcl91MCuUlObbaIfRPAhPn1oUZsSSzMHaQN79rXPKAufGHfRP6hxPSI9sTl%2BwS8NsvTbZ2joqDV7B%2FlRFISNH19T3HdKU5YFsqm5aI8p8rVp7l2IXmTq%2Bc7os5O75U9bB9wAeYQoGTY9xMo%2BXXRgeXr2iB99LspOg0BvBRIcxEzQBbs5ZeNT7OG30P3Zrhb9kdclMqUDkZWIRRGOqwYexRusu5AzyxBzgjy3lwqrsnVSQdK0Wr3MZkecnd4OhtnL6XwEcoUcGeYIgjCMJDMNeVjMcGOqUBqd3XUSuwJpmu81jDqbT1WhzBriI3RsIadrVa%2FEMybElXY5eyYRXm4ZMmYhQfe3G2AimlVY0LfKu%2B0RrG76BosGRQyuIG3o4Z0hxrAADpFWf2lsnXmMqq8pYqVcLPqPViBA2N0boZEjuzQz9twADMT%2FPniGuz4pEE1hYRiYtvCC3%2BA4iENtnKDf2%2F1I3RRw2nSBuyE3tIUI9Nqqi%2FgH8nEWWxWVA5&X-Amz-Signature=d154e4f75c5772db83f4b93ed3ece859ee6822c429cdd36bacdfeb34e9829e0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N3GGEWO%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHV8ndrvpMeNJ%2B1cBBoYvaKHKjqs2MpdfXn59JVv3wfPAiEAqAzGpKd%2BgudRZ09uhf9AsHGIXrOTXjo9YCZZkm2MnIoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOiN1Ln9U3kyiD0yCrcAxqPjwWhpzZTHpR57tAly77O6HVUMzR%2BdyVCPDypGGFBRBmgFqeEFAQa%2BO%2BXsoflpn38ShMiCeWppv8fKuevb4Ca5UnEEka%2BdTLDkDS9PlfbJvEBbtZ1%2BkRKfjAc5660NnbtVYlOOh9Jzdjick4peDw5StWTEeNom4m%2B2EC%2FuDDy8uT4f4jwn3DWPq6ZFeSI9SoZRDQ%2BJfmpoKiUe5h1ApUmmVG48pkrf7Th4M02G5cP13uJVzUQ4EmPJkZBv82eBHkR3CQk6Ix7Hyn6vf2ijUiJFrc9onBkPh7fFK7t7k9zwFt3mr7P7YGDy2T5uz3tnOK2raZmd4yIczX2dB7nvkycLgVA6idiDdaqy%2BIP4JCcl91MCuUlObbaIfRPAhPn1oUZsSSzMHaQN79rXPKAufGHfRP6hxPSI9sTl%2BwS8NsvTbZ2joqDV7B%2FlRFISNH19T3HdKU5YFsqm5aI8p8rVp7l2IXmTq%2Bc7os5O75U9bB9wAeYQoGTY9xMo%2BXXRgeXr2iB99LspOg0BvBRIcxEzQBbs5ZeNT7OG30P3Zrhb9kdclMqUDkZWIRRGOqwYexRusu5AzyxBzgjy3lwqrsnVSQdK0Wr3MZkecnd4OhtnL6XwEcoUcGeYIgjCMJDMNeVjMcGOqUBqd3XUSuwJpmu81jDqbT1WhzBriI3RsIadrVa%2FEMybElXY5eyYRXm4ZMmYhQfe3G2AimlVY0LfKu%2B0RrG76BosGRQyuIG3o4Z0hxrAADpFWf2lsnXmMqq8pYqVcLPqPViBA2N0boZEjuzQz9twADMT%2FPniGuz4pEE1hYRiYtvCC3%2BA4iENtnKDf2%2F1I3RRw2nSBuyE3tIUI9Nqqi%2FgH8nEWWxWVA5&X-Amz-Signature=d40125f46aeae40f7bd886c5a2427812d8de9210ac692657447b2cd6063886bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N3GGEWO%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHV8ndrvpMeNJ%2B1cBBoYvaKHKjqs2MpdfXn59JVv3wfPAiEAqAzGpKd%2BgudRZ09uhf9AsHGIXrOTXjo9YCZZkm2MnIoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOiN1Ln9U3kyiD0yCrcAxqPjwWhpzZTHpR57tAly77O6HVUMzR%2BdyVCPDypGGFBRBmgFqeEFAQa%2BO%2BXsoflpn38ShMiCeWppv8fKuevb4Ca5UnEEka%2BdTLDkDS9PlfbJvEBbtZ1%2BkRKfjAc5660NnbtVYlOOh9Jzdjick4peDw5StWTEeNom4m%2B2EC%2FuDDy8uT4f4jwn3DWPq6ZFeSI9SoZRDQ%2BJfmpoKiUe5h1ApUmmVG48pkrf7Th4M02G5cP13uJVzUQ4EmPJkZBv82eBHkR3CQk6Ix7Hyn6vf2ijUiJFrc9onBkPh7fFK7t7k9zwFt3mr7P7YGDy2T5uz3tnOK2raZmd4yIczX2dB7nvkycLgVA6idiDdaqy%2BIP4JCcl91MCuUlObbaIfRPAhPn1oUZsSSzMHaQN79rXPKAufGHfRP6hxPSI9sTl%2BwS8NsvTbZ2joqDV7B%2FlRFISNH19T3HdKU5YFsqm5aI8p8rVp7l2IXmTq%2Bc7os5O75U9bB9wAeYQoGTY9xMo%2BXXRgeXr2iB99LspOg0BvBRIcxEzQBbs5ZeNT7OG30P3Zrhb9kdclMqUDkZWIRRGOqwYexRusu5AzyxBzgjy3lwqrsnVSQdK0Wr3MZkecnd4OhtnL6XwEcoUcGeYIgjCMJDMNeVjMcGOqUBqd3XUSuwJpmu81jDqbT1WhzBriI3RsIadrVa%2FEMybElXY5eyYRXm4ZMmYhQfe3G2AimlVY0LfKu%2B0RrG76BosGRQyuIG3o4Z0hxrAADpFWf2lsnXmMqq8pYqVcLPqPViBA2N0boZEjuzQz9twADMT%2FPniGuz4pEE1hYRiYtvCC3%2BA4iENtnKDf2%2F1I3RRw2nSBuyE3tIUI9Nqqi%2FgH8nEWWxWVA5&X-Amz-Signature=fb5f8c286e9c85d5ecd72804c186dbc57aa50914765100922cd9bbd9ee7a2c33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N3GGEWO%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHV8ndrvpMeNJ%2B1cBBoYvaKHKjqs2MpdfXn59JVv3wfPAiEAqAzGpKd%2BgudRZ09uhf9AsHGIXrOTXjo9YCZZkm2MnIoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOiN1Ln9U3kyiD0yCrcAxqPjwWhpzZTHpR57tAly77O6HVUMzR%2BdyVCPDypGGFBRBmgFqeEFAQa%2BO%2BXsoflpn38ShMiCeWppv8fKuevb4Ca5UnEEka%2BdTLDkDS9PlfbJvEBbtZ1%2BkRKfjAc5660NnbtVYlOOh9Jzdjick4peDw5StWTEeNom4m%2B2EC%2FuDDy8uT4f4jwn3DWPq6ZFeSI9SoZRDQ%2BJfmpoKiUe5h1ApUmmVG48pkrf7Th4M02G5cP13uJVzUQ4EmPJkZBv82eBHkR3CQk6Ix7Hyn6vf2ijUiJFrc9onBkPh7fFK7t7k9zwFt3mr7P7YGDy2T5uz3tnOK2raZmd4yIczX2dB7nvkycLgVA6idiDdaqy%2BIP4JCcl91MCuUlObbaIfRPAhPn1oUZsSSzMHaQN79rXPKAufGHfRP6hxPSI9sTl%2BwS8NsvTbZ2joqDV7B%2FlRFISNH19T3HdKU5YFsqm5aI8p8rVp7l2IXmTq%2Bc7os5O75U9bB9wAeYQoGTY9xMo%2BXXRgeXr2iB99LspOg0BvBRIcxEzQBbs5ZeNT7OG30P3Zrhb9kdclMqUDkZWIRRGOqwYexRusu5AzyxBzgjy3lwqrsnVSQdK0Wr3MZkecnd4OhtnL6XwEcoUcGeYIgjCMJDMNeVjMcGOqUBqd3XUSuwJpmu81jDqbT1WhzBriI3RsIadrVa%2FEMybElXY5eyYRXm4ZMmYhQfe3G2AimlVY0LfKu%2B0RrG76BosGRQyuIG3o4Z0hxrAADpFWf2lsnXmMqq8pYqVcLPqPViBA2N0boZEjuzQz9twADMT%2FPniGuz4pEE1hYRiYtvCC3%2BA4iENtnKDf2%2F1I3RRw2nSBuyE3tIUI9Nqqi%2FgH8nEWWxWVA5&X-Amz-Signature=ea602c2e42f0368eeee785921d7e5fbcb1de369c6ae9fa685d8d985f9b8e1968&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N3GGEWO%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHV8ndrvpMeNJ%2B1cBBoYvaKHKjqs2MpdfXn59JVv3wfPAiEAqAzGpKd%2BgudRZ09uhf9AsHGIXrOTXjo9YCZZkm2MnIoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOiN1Ln9U3kyiD0yCrcAxqPjwWhpzZTHpR57tAly77O6HVUMzR%2BdyVCPDypGGFBRBmgFqeEFAQa%2BO%2BXsoflpn38ShMiCeWppv8fKuevb4Ca5UnEEka%2BdTLDkDS9PlfbJvEBbtZ1%2BkRKfjAc5660NnbtVYlOOh9Jzdjick4peDw5StWTEeNom4m%2B2EC%2FuDDy8uT4f4jwn3DWPq6ZFeSI9SoZRDQ%2BJfmpoKiUe5h1ApUmmVG48pkrf7Th4M02G5cP13uJVzUQ4EmPJkZBv82eBHkR3CQk6Ix7Hyn6vf2ijUiJFrc9onBkPh7fFK7t7k9zwFt3mr7P7YGDy2T5uz3tnOK2raZmd4yIczX2dB7nvkycLgVA6idiDdaqy%2BIP4JCcl91MCuUlObbaIfRPAhPn1oUZsSSzMHaQN79rXPKAufGHfRP6hxPSI9sTl%2BwS8NsvTbZ2joqDV7B%2FlRFISNH19T3HdKU5YFsqm5aI8p8rVp7l2IXmTq%2Bc7os5O75U9bB9wAeYQoGTY9xMo%2BXXRgeXr2iB99LspOg0BvBRIcxEzQBbs5ZeNT7OG30P3Zrhb9kdclMqUDkZWIRRGOqwYexRusu5AzyxBzgjy3lwqrsnVSQdK0Wr3MZkecnd4OhtnL6XwEcoUcGeYIgjCMJDMNeVjMcGOqUBqd3XUSuwJpmu81jDqbT1WhzBriI3RsIadrVa%2FEMybElXY5eyYRXm4ZMmYhQfe3G2AimlVY0LfKu%2B0RrG76BosGRQyuIG3o4Z0hxrAADpFWf2lsnXmMqq8pYqVcLPqPViBA2N0boZEjuzQz9twADMT%2FPniGuz4pEE1hYRiYtvCC3%2BA4iENtnKDf2%2F1I3RRw2nSBuyE3tIUI9Nqqi%2FgH8nEWWxWVA5&X-Amz-Signature=3b73fd6cca1f592e3b375301f32bc6c78663acb80d8bfa364d437ebd9cf00527&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N3GGEWO%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHV8ndrvpMeNJ%2B1cBBoYvaKHKjqs2MpdfXn59JVv3wfPAiEAqAzGpKd%2BgudRZ09uhf9AsHGIXrOTXjo9YCZZkm2MnIoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOiN1Ln9U3kyiD0yCrcAxqPjwWhpzZTHpR57tAly77O6HVUMzR%2BdyVCPDypGGFBRBmgFqeEFAQa%2BO%2BXsoflpn38ShMiCeWppv8fKuevb4Ca5UnEEka%2BdTLDkDS9PlfbJvEBbtZ1%2BkRKfjAc5660NnbtVYlOOh9Jzdjick4peDw5StWTEeNom4m%2B2EC%2FuDDy8uT4f4jwn3DWPq6ZFeSI9SoZRDQ%2BJfmpoKiUe5h1ApUmmVG48pkrf7Th4M02G5cP13uJVzUQ4EmPJkZBv82eBHkR3CQk6Ix7Hyn6vf2ijUiJFrc9onBkPh7fFK7t7k9zwFt3mr7P7YGDy2T5uz3tnOK2raZmd4yIczX2dB7nvkycLgVA6idiDdaqy%2BIP4JCcl91MCuUlObbaIfRPAhPn1oUZsSSzMHaQN79rXPKAufGHfRP6hxPSI9sTl%2BwS8NsvTbZ2joqDV7B%2FlRFISNH19T3HdKU5YFsqm5aI8p8rVp7l2IXmTq%2Bc7os5O75U9bB9wAeYQoGTY9xMo%2BXXRgeXr2iB99LspOg0BvBRIcxEzQBbs5ZeNT7OG30P3Zrhb9kdclMqUDkZWIRRGOqwYexRusu5AzyxBzgjy3lwqrsnVSQdK0Wr3MZkecnd4OhtnL6XwEcoUcGeYIgjCMJDMNeVjMcGOqUBqd3XUSuwJpmu81jDqbT1WhzBriI3RsIadrVa%2FEMybElXY5eyYRXm4ZMmYhQfe3G2AimlVY0LfKu%2B0RrG76BosGRQyuIG3o4Z0hxrAADpFWf2lsnXmMqq8pYqVcLPqPViBA2N0boZEjuzQz9twADMT%2FPniGuz4pEE1hYRiYtvCC3%2BA4iENtnKDf2%2F1I3RRw2nSBuyE3tIUI9Nqqi%2FgH8nEWWxWVA5&X-Amz-Signature=edd08d182be611a0c79f475a5adbcd13c8bfb80d469686bd0a7d763a78c0f31a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N3GGEWO%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHV8ndrvpMeNJ%2B1cBBoYvaKHKjqs2MpdfXn59JVv3wfPAiEAqAzGpKd%2BgudRZ09uhf9AsHGIXrOTXjo9YCZZkm2MnIoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOiN1Ln9U3kyiD0yCrcAxqPjwWhpzZTHpR57tAly77O6HVUMzR%2BdyVCPDypGGFBRBmgFqeEFAQa%2BO%2BXsoflpn38ShMiCeWppv8fKuevb4Ca5UnEEka%2BdTLDkDS9PlfbJvEBbtZ1%2BkRKfjAc5660NnbtVYlOOh9Jzdjick4peDw5StWTEeNom4m%2B2EC%2FuDDy8uT4f4jwn3DWPq6ZFeSI9SoZRDQ%2BJfmpoKiUe5h1ApUmmVG48pkrf7Th4M02G5cP13uJVzUQ4EmPJkZBv82eBHkR3CQk6Ix7Hyn6vf2ijUiJFrc9onBkPh7fFK7t7k9zwFt3mr7P7YGDy2T5uz3tnOK2raZmd4yIczX2dB7nvkycLgVA6idiDdaqy%2BIP4JCcl91MCuUlObbaIfRPAhPn1oUZsSSzMHaQN79rXPKAufGHfRP6hxPSI9sTl%2BwS8NsvTbZ2joqDV7B%2FlRFISNH19T3HdKU5YFsqm5aI8p8rVp7l2IXmTq%2Bc7os5O75U9bB9wAeYQoGTY9xMo%2BXXRgeXr2iB99LspOg0BvBRIcxEzQBbs5ZeNT7OG30P3Zrhb9kdclMqUDkZWIRRGOqwYexRusu5AzyxBzgjy3lwqrsnVSQdK0Wr3MZkecnd4OhtnL6XwEcoUcGeYIgjCMJDMNeVjMcGOqUBqd3XUSuwJpmu81jDqbT1WhzBriI3RsIadrVa%2FEMybElXY5eyYRXm4ZMmYhQfe3G2AimlVY0LfKu%2B0RrG76BosGRQyuIG3o4Z0hxrAADpFWf2lsnXmMqq8pYqVcLPqPViBA2N0boZEjuzQz9twADMT%2FPniGuz4pEE1hYRiYtvCC3%2BA4iENtnKDf2%2F1I3RRw2nSBuyE3tIUI9Nqqi%2FgH8nEWWxWVA5&X-Amz-Signature=d154e4f75c5772db83f4b93ed3ece859ee6822c429cdd36bacdfeb34e9829e0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
