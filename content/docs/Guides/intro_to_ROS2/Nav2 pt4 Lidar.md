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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2UT43BT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIB2gNVmVosjpuHPC%2BBwfJNoBaudKJg7WAnv9Zo9tU3Y8AiEAmIuMl%2BcpRF62qGRdwEMBEY2wk4eWkHhATXbb9WcUM2cq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDPTrHykdKo5BCkXpyircA8Wxhjvhi%2BMNDh%2F4gJSvkgHvAOrjEkvFaPmMmkd35H4yM9QAd8SbQSeeWEw%2B8D819GSXNgA%2FzGcgeSX61mGAzTy7506yXHG4pWFIFlJk0Kr6lbAOJ0o9EePsz2ulTY1KlRmeOEEx1b0pZUFr55ikEQH6g8K972J6zB0pG1SeMJparx9T2cncZzuRK21x5BeNhiXjMy%2BxvKBfjE%2FntqhIc2MCzJlqydefDJJZT0Hqxv5CFG%2B%2FrApTCbGJmaHvODHG7BcrngmTPqR8lcqudhIrFekhsmGT9AhGmBW8bZytUzW9g5zZpcMKZA%2BLN1SyO6QPBgf1u6N4ZxTAJcJn8wjex%2Bcs5cixvEm9eOYY0D9c8dXH%2BWXlgepO44j1VQSfcEXl%2BKgkzDQMIia%2BJT0wTvDKXefVkPr5a%2BwLDCtO6VaneyM%2FSGKrr3RLHgjdkd78NUT58EvbP62IFBtlH446FHeAaHvuOvx81FGIfADjdpzS92cYvTB5cSTuj9s4UWUHXsSDsC7rGXY3AZqA%2FsQyuEE%2BzgGN%2F21IXnOKZZHmxJtMHanZdxCvrPCK17rQ2cBil3aGdOloV5AoMBIfuOJy36Yi7ogjL%2F2qMV9bjVtS29IjEzEiPXAZqVMr4zh6z0xnMMLa%2FcQGOqUBclRBKY%2BZvjhxs4prmJApHZltgw%2BDXyLCVqZn6vkzyg69RTGhzi1j%2Bl9RKXy32Ojr74KEn%2Ft4wvbjT6cm1ac8GZwHvzROvy7uAULR5S2B5QVQ11wXAMd0pvtBkx53TVL%2BlCkC9aJEU7anovgH5M4ydLFgOc7kvXGABziyAlwEWJfdsap5NvIKEmGMTqDVKYVSMQ8jtnaXIobQO3Nfs1vcxgxSAV9W&X-Amz-Signature=66aeddf0cd2dcade229ccaddc4cc78a99a2b1cf0d61c391c944d209bf2edc013&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOQJSLTO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCtBPuYG6%2Ff0v5q616Ao7bMzhskuEupYjN2xFoUgg5SXAIhAPd%2BmpzVlVgFWG9vKli2W4F1hbCacfL9tV0P%2FqjZsC9cKv8DCGIQABoMNjM3NDIzMTgzODA1Igxg0ZPviljlyO8%2FlOIq3APCDw2YEZTTsmGZTh1pVW0kzhxxiZwwad4VXMXfWVtFl64iz7iHxMu2%2BoA7AGCc8Rl1ZPuKJ6uSfi6LZSy7rAeiBdNAsdkfjuabLQMSw%2Fg9pbW1vcBe2BbD77t2h5RUlJRPYooyj2eEFy3vXKKNpdhLcbraev1cKOOEzS8JCmD4PHsVI4sej%2FpH8II1%2FfPMtCNS3QFv4vf9FYH3JzSD0Xm3uFjb%2ByTztRv4LQqy15262eqPOx866jn32rkYaO8G9KFjCb2s0EXIQJprfI7dYJUxtEeGIg8JOSIJRyosyhSEfayHQFZrzGBbRRl3XolS8vDFL7Ro7vQcGqIheslssGAAZGmyBWDCDeTvweg3Qq%2FYvklc97NOAgvhj%2BwHjZqmc8is1OA8UH8HvVeZZ%2F6G19k1sD69lxCElm8zhlCgM7Qiz%2Flx8vnvyCyDui7IpojgIcLdhTkomzgohzKtRrdoTcEjD07mqIWjuAy9ido4B2YSu%2BAGd0S6H11JYoUi1TZDaD6prfanqTjmUdPJqREt5qynqDfflSLuiRV0UfZQINFDLRrb9Sa6gAA8OgOpe68FuuF%2BODlZXs6ayRHMk9vgrnHnRjJKWET2EQlfl9RfIxQwiUJHQjQVGqNgHJc47jDd2v3EBjqkAQzs%2FT5SdG%2BTietYnO4e2nnPxaVjlB1EX0xkPyeDzkZhdVfA6hPFyGgGS6NqQFyXMmB2HbpLGGfP5P6Q%2FHdUwcrMU2wG0hEfLVkeJPFAniYD0bkRTtXYh8005qw76nknMJqmxv66Nzqv%2FiXRY%2FQ2CUaeOkJMwfT%2FHoHlXoRPFfmQmNZ0Lcq2U8U2uGOPOztC7d3O09LlTC5K6cIt2PeKBXOS3nCl&X-Amz-Signature=bda319f2d14f42e143676aa1abd12e7acb5609ed01f104c461e2f124b134ac05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOQJSLTO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCtBPuYG6%2Ff0v5q616Ao7bMzhskuEupYjN2xFoUgg5SXAIhAPd%2BmpzVlVgFWG9vKli2W4F1hbCacfL9tV0P%2FqjZsC9cKv8DCGIQABoMNjM3NDIzMTgzODA1Igxg0ZPviljlyO8%2FlOIq3APCDw2YEZTTsmGZTh1pVW0kzhxxiZwwad4VXMXfWVtFl64iz7iHxMu2%2BoA7AGCc8Rl1ZPuKJ6uSfi6LZSy7rAeiBdNAsdkfjuabLQMSw%2Fg9pbW1vcBe2BbD77t2h5RUlJRPYooyj2eEFy3vXKKNpdhLcbraev1cKOOEzS8JCmD4PHsVI4sej%2FpH8II1%2FfPMtCNS3QFv4vf9FYH3JzSD0Xm3uFjb%2ByTztRv4LQqy15262eqPOx866jn32rkYaO8G9KFjCb2s0EXIQJprfI7dYJUxtEeGIg8JOSIJRyosyhSEfayHQFZrzGBbRRl3XolS8vDFL7Ro7vQcGqIheslssGAAZGmyBWDCDeTvweg3Qq%2FYvklc97NOAgvhj%2BwHjZqmc8is1OA8UH8HvVeZZ%2F6G19k1sD69lxCElm8zhlCgM7Qiz%2Flx8vnvyCyDui7IpojgIcLdhTkomzgohzKtRrdoTcEjD07mqIWjuAy9ido4B2YSu%2BAGd0S6H11JYoUi1TZDaD6prfanqTjmUdPJqREt5qynqDfflSLuiRV0UfZQINFDLRrb9Sa6gAA8OgOpe68FuuF%2BODlZXs6ayRHMk9vgrnHnRjJKWET2EQlfl9RfIxQwiUJHQjQVGqNgHJc47jDd2v3EBjqkAQzs%2FT5SdG%2BTietYnO4e2nnPxaVjlB1EX0xkPyeDzkZhdVfA6hPFyGgGS6NqQFyXMmB2HbpLGGfP5P6Q%2FHdUwcrMU2wG0hEfLVkeJPFAniYD0bkRTtXYh8005qw76nknMJqmxv66Nzqv%2FiXRY%2FQ2CUaeOkJMwfT%2FHoHlXoRPFfmQmNZ0Lcq2U8U2uGOPOztC7d3O09LlTC5K6cIt2PeKBXOS3nCl&X-Amz-Signature=911e869e85e97e13c87ddacc598ace63656ae737936bd51e310501f41f45a602&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOQJSLTO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCtBPuYG6%2Ff0v5q616Ao7bMzhskuEupYjN2xFoUgg5SXAIhAPd%2BmpzVlVgFWG9vKli2W4F1hbCacfL9tV0P%2FqjZsC9cKv8DCGIQABoMNjM3NDIzMTgzODA1Igxg0ZPviljlyO8%2FlOIq3APCDw2YEZTTsmGZTh1pVW0kzhxxiZwwad4VXMXfWVtFl64iz7iHxMu2%2BoA7AGCc8Rl1ZPuKJ6uSfi6LZSy7rAeiBdNAsdkfjuabLQMSw%2Fg9pbW1vcBe2BbD77t2h5RUlJRPYooyj2eEFy3vXKKNpdhLcbraev1cKOOEzS8JCmD4PHsVI4sej%2FpH8II1%2FfPMtCNS3QFv4vf9FYH3JzSD0Xm3uFjb%2ByTztRv4LQqy15262eqPOx866jn32rkYaO8G9KFjCb2s0EXIQJprfI7dYJUxtEeGIg8JOSIJRyosyhSEfayHQFZrzGBbRRl3XolS8vDFL7Ro7vQcGqIheslssGAAZGmyBWDCDeTvweg3Qq%2FYvklc97NOAgvhj%2BwHjZqmc8is1OA8UH8HvVeZZ%2F6G19k1sD69lxCElm8zhlCgM7Qiz%2Flx8vnvyCyDui7IpojgIcLdhTkomzgohzKtRrdoTcEjD07mqIWjuAy9ido4B2YSu%2BAGd0S6H11JYoUi1TZDaD6prfanqTjmUdPJqREt5qynqDfflSLuiRV0UfZQINFDLRrb9Sa6gAA8OgOpe68FuuF%2BODlZXs6ayRHMk9vgrnHnRjJKWET2EQlfl9RfIxQwiUJHQjQVGqNgHJc47jDd2v3EBjqkAQzs%2FT5SdG%2BTietYnO4e2nnPxaVjlB1EX0xkPyeDzkZhdVfA6hPFyGgGS6NqQFyXMmB2HbpLGGfP5P6Q%2FHdUwcrMU2wG0hEfLVkeJPFAniYD0bkRTtXYh8005qw76nknMJqmxv66Nzqv%2FiXRY%2FQ2CUaeOkJMwfT%2FHoHlXoRPFfmQmNZ0Lcq2U8U2uGOPOztC7d3O09LlTC5K6cIt2PeKBXOS3nCl&X-Amz-Signature=bbec9008322882ccfc867546e0621c7092bb34877561c18be90b13b96fd32475&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOQJSLTO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCtBPuYG6%2Ff0v5q616Ao7bMzhskuEupYjN2xFoUgg5SXAIhAPd%2BmpzVlVgFWG9vKli2W4F1hbCacfL9tV0P%2FqjZsC9cKv8DCGIQABoMNjM3NDIzMTgzODA1Igxg0ZPviljlyO8%2FlOIq3APCDw2YEZTTsmGZTh1pVW0kzhxxiZwwad4VXMXfWVtFl64iz7iHxMu2%2BoA7AGCc8Rl1ZPuKJ6uSfi6LZSy7rAeiBdNAsdkfjuabLQMSw%2Fg9pbW1vcBe2BbD77t2h5RUlJRPYooyj2eEFy3vXKKNpdhLcbraev1cKOOEzS8JCmD4PHsVI4sej%2FpH8II1%2FfPMtCNS3QFv4vf9FYH3JzSD0Xm3uFjb%2ByTztRv4LQqy15262eqPOx866jn32rkYaO8G9KFjCb2s0EXIQJprfI7dYJUxtEeGIg8JOSIJRyosyhSEfayHQFZrzGBbRRl3XolS8vDFL7Ro7vQcGqIheslssGAAZGmyBWDCDeTvweg3Qq%2FYvklc97NOAgvhj%2BwHjZqmc8is1OA8UH8HvVeZZ%2F6G19k1sD69lxCElm8zhlCgM7Qiz%2Flx8vnvyCyDui7IpojgIcLdhTkomzgohzKtRrdoTcEjD07mqIWjuAy9ido4B2YSu%2BAGd0S6H11JYoUi1TZDaD6prfanqTjmUdPJqREt5qynqDfflSLuiRV0UfZQINFDLRrb9Sa6gAA8OgOpe68FuuF%2BODlZXs6ayRHMk9vgrnHnRjJKWET2EQlfl9RfIxQwiUJHQjQVGqNgHJc47jDd2v3EBjqkAQzs%2FT5SdG%2BTietYnO4e2nnPxaVjlB1EX0xkPyeDzkZhdVfA6hPFyGgGS6NqQFyXMmB2HbpLGGfP5P6Q%2FHdUwcrMU2wG0hEfLVkeJPFAniYD0bkRTtXYh8005qw76nknMJqmxv66Nzqv%2FiXRY%2FQ2CUaeOkJMwfT%2FHoHlXoRPFfmQmNZ0Lcq2U8U2uGOPOztC7d3O09LlTC5K6cIt2PeKBXOS3nCl&X-Amz-Signature=289a22b54d37101599bb425fd7bd4c8766fb400481e35ce77450aaba5f313c9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOQJSLTO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCtBPuYG6%2Ff0v5q616Ao7bMzhskuEupYjN2xFoUgg5SXAIhAPd%2BmpzVlVgFWG9vKli2W4F1hbCacfL9tV0P%2FqjZsC9cKv8DCGIQABoMNjM3NDIzMTgzODA1Igxg0ZPviljlyO8%2FlOIq3APCDw2YEZTTsmGZTh1pVW0kzhxxiZwwad4VXMXfWVtFl64iz7iHxMu2%2BoA7AGCc8Rl1ZPuKJ6uSfi6LZSy7rAeiBdNAsdkfjuabLQMSw%2Fg9pbW1vcBe2BbD77t2h5RUlJRPYooyj2eEFy3vXKKNpdhLcbraev1cKOOEzS8JCmD4PHsVI4sej%2FpH8II1%2FfPMtCNS3QFv4vf9FYH3JzSD0Xm3uFjb%2ByTztRv4LQqy15262eqPOx866jn32rkYaO8G9KFjCb2s0EXIQJprfI7dYJUxtEeGIg8JOSIJRyosyhSEfayHQFZrzGBbRRl3XolS8vDFL7Ro7vQcGqIheslssGAAZGmyBWDCDeTvweg3Qq%2FYvklc97NOAgvhj%2BwHjZqmc8is1OA8UH8HvVeZZ%2F6G19k1sD69lxCElm8zhlCgM7Qiz%2Flx8vnvyCyDui7IpojgIcLdhTkomzgohzKtRrdoTcEjD07mqIWjuAy9ido4B2YSu%2BAGd0S6H11JYoUi1TZDaD6prfanqTjmUdPJqREt5qynqDfflSLuiRV0UfZQINFDLRrb9Sa6gAA8OgOpe68FuuF%2BODlZXs6ayRHMk9vgrnHnRjJKWET2EQlfl9RfIxQwiUJHQjQVGqNgHJc47jDd2v3EBjqkAQzs%2FT5SdG%2BTietYnO4e2nnPxaVjlB1EX0xkPyeDzkZhdVfA6hPFyGgGS6NqQFyXMmB2HbpLGGfP5P6Q%2FHdUwcrMU2wG0hEfLVkeJPFAniYD0bkRTtXYh8005qw76nknMJqmxv66Nzqv%2FiXRY%2FQ2CUaeOkJMwfT%2FHoHlXoRPFfmQmNZ0Lcq2U8U2uGOPOztC7d3O09LlTC5K6cIt2PeKBXOS3nCl&X-Amz-Signature=fcd40cffc2af02110b34a6600dea826a077ff15564d7bf06280ec82c1c6bea37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOQJSLTO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCtBPuYG6%2Ff0v5q616Ao7bMzhskuEupYjN2xFoUgg5SXAIhAPd%2BmpzVlVgFWG9vKli2W4F1hbCacfL9tV0P%2FqjZsC9cKv8DCGIQABoMNjM3NDIzMTgzODA1Igxg0ZPviljlyO8%2FlOIq3APCDw2YEZTTsmGZTh1pVW0kzhxxiZwwad4VXMXfWVtFl64iz7iHxMu2%2BoA7AGCc8Rl1ZPuKJ6uSfi6LZSy7rAeiBdNAsdkfjuabLQMSw%2Fg9pbW1vcBe2BbD77t2h5RUlJRPYooyj2eEFy3vXKKNpdhLcbraev1cKOOEzS8JCmD4PHsVI4sej%2FpH8II1%2FfPMtCNS3QFv4vf9FYH3JzSD0Xm3uFjb%2ByTztRv4LQqy15262eqPOx866jn32rkYaO8G9KFjCb2s0EXIQJprfI7dYJUxtEeGIg8JOSIJRyosyhSEfayHQFZrzGBbRRl3XolS8vDFL7Ro7vQcGqIheslssGAAZGmyBWDCDeTvweg3Qq%2FYvklc97NOAgvhj%2BwHjZqmc8is1OA8UH8HvVeZZ%2F6G19k1sD69lxCElm8zhlCgM7Qiz%2Flx8vnvyCyDui7IpojgIcLdhTkomzgohzKtRrdoTcEjD07mqIWjuAy9ido4B2YSu%2BAGd0S6H11JYoUi1TZDaD6prfanqTjmUdPJqREt5qynqDfflSLuiRV0UfZQINFDLRrb9Sa6gAA8OgOpe68FuuF%2BODlZXs6ayRHMk9vgrnHnRjJKWET2EQlfl9RfIxQwiUJHQjQVGqNgHJc47jDd2v3EBjqkAQzs%2FT5SdG%2BTietYnO4e2nnPxaVjlB1EX0xkPyeDzkZhdVfA6hPFyGgGS6NqQFyXMmB2HbpLGGfP5P6Q%2FHdUwcrMU2wG0hEfLVkeJPFAniYD0bkRTtXYh8005qw76nknMJqmxv66Nzqv%2FiXRY%2FQ2CUaeOkJMwfT%2FHoHlXoRPFfmQmNZ0Lcq2U8U2uGOPOztC7d3O09LlTC5K6cIt2PeKBXOS3nCl&X-Amz-Signature=b1f76fd505f46d03bb93ae4cb312d2e5fa7e28fc74f5431072b0bf0d80d0c97a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOQJSLTO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCtBPuYG6%2Ff0v5q616Ao7bMzhskuEupYjN2xFoUgg5SXAIhAPd%2BmpzVlVgFWG9vKli2W4F1hbCacfL9tV0P%2FqjZsC9cKv8DCGIQABoMNjM3NDIzMTgzODA1Igxg0ZPviljlyO8%2FlOIq3APCDw2YEZTTsmGZTh1pVW0kzhxxiZwwad4VXMXfWVtFl64iz7iHxMu2%2BoA7AGCc8Rl1ZPuKJ6uSfi6LZSy7rAeiBdNAsdkfjuabLQMSw%2Fg9pbW1vcBe2BbD77t2h5RUlJRPYooyj2eEFy3vXKKNpdhLcbraev1cKOOEzS8JCmD4PHsVI4sej%2FpH8II1%2FfPMtCNS3QFv4vf9FYH3JzSD0Xm3uFjb%2ByTztRv4LQqy15262eqPOx866jn32rkYaO8G9KFjCb2s0EXIQJprfI7dYJUxtEeGIg8JOSIJRyosyhSEfayHQFZrzGBbRRl3XolS8vDFL7Ro7vQcGqIheslssGAAZGmyBWDCDeTvweg3Qq%2FYvklc97NOAgvhj%2BwHjZqmc8is1OA8UH8HvVeZZ%2F6G19k1sD69lxCElm8zhlCgM7Qiz%2Flx8vnvyCyDui7IpojgIcLdhTkomzgohzKtRrdoTcEjD07mqIWjuAy9ido4B2YSu%2BAGd0S6H11JYoUi1TZDaD6prfanqTjmUdPJqREt5qynqDfflSLuiRV0UfZQINFDLRrb9Sa6gAA8OgOpe68FuuF%2BODlZXs6ayRHMk9vgrnHnRjJKWET2EQlfl9RfIxQwiUJHQjQVGqNgHJc47jDd2v3EBjqkAQzs%2FT5SdG%2BTietYnO4e2nnPxaVjlB1EX0xkPyeDzkZhdVfA6hPFyGgGS6NqQFyXMmB2HbpLGGfP5P6Q%2FHdUwcrMU2wG0hEfLVkeJPFAniYD0bkRTtXYh8005qw76nknMJqmxv66Nzqv%2FiXRY%2FQ2CUaeOkJMwfT%2FHoHlXoRPFfmQmNZ0Lcq2U8U2uGOPOztC7d3O09LlTC5K6cIt2PeKBXOS3nCl&X-Amz-Signature=683ec52a67465fbb547cf879b2319758368d2452251f3fe9702b19eb7fc2e33d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOQJSLTO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCtBPuYG6%2Ff0v5q616Ao7bMzhskuEupYjN2xFoUgg5SXAIhAPd%2BmpzVlVgFWG9vKli2W4F1hbCacfL9tV0P%2FqjZsC9cKv8DCGIQABoMNjM3NDIzMTgzODA1Igxg0ZPviljlyO8%2FlOIq3APCDw2YEZTTsmGZTh1pVW0kzhxxiZwwad4VXMXfWVtFl64iz7iHxMu2%2BoA7AGCc8Rl1ZPuKJ6uSfi6LZSy7rAeiBdNAsdkfjuabLQMSw%2Fg9pbW1vcBe2BbD77t2h5RUlJRPYooyj2eEFy3vXKKNpdhLcbraev1cKOOEzS8JCmD4PHsVI4sej%2FpH8II1%2FfPMtCNS3QFv4vf9FYH3JzSD0Xm3uFjb%2ByTztRv4LQqy15262eqPOx866jn32rkYaO8G9KFjCb2s0EXIQJprfI7dYJUxtEeGIg8JOSIJRyosyhSEfayHQFZrzGBbRRl3XolS8vDFL7Ro7vQcGqIheslssGAAZGmyBWDCDeTvweg3Qq%2FYvklc97NOAgvhj%2BwHjZqmc8is1OA8UH8HvVeZZ%2F6G19k1sD69lxCElm8zhlCgM7Qiz%2Flx8vnvyCyDui7IpojgIcLdhTkomzgohzKtRrdoTcEjD07mqIWjuAy9ido4B2YSu%2BAGd0S6H11JYoUi1TZDaD6prfanqTjmUdPJqREt5qynqDfflSLuiRV0UfZQINFDLRrb9Sa6gAA8OgOpe68FuuF%2BODlZXs6ayRHMk9vgrnHnRjJKWET2EQlfl9RfIxQwiUJHQjQVGqNgHJc47jDd2v3EBjqkAQzs%2FT5SdG%2BTietYnO4e2nnPxaVjlB1EX0xkPyeDzkZhdVfA6hPFyGgGS6NqQFyXMmB2HbpLGGfP5P6Q%2FHdUwcrMU2wG0hEfLVkeJPFAniYD0bkRTtXYh8005qw76nknMJqmxv66Nzqv%2FiXRY%2FQ2CUaeOkJMwfT%2FHoHlXoRPFfmQmNZ0Lcq2U8U2uGOPOztC7d3O09LlTC5K6cIt2PeKBXOS3nCl&X-Amz-Signature=398e3a293485c0792fdcfd03a7d006c794d6d017d3f1931e2d6a91dee020c62d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOQJSLTO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCtBPuYG6%2Ff0v5q616Ao7bMzhskuEupYjN2xFoUgg5SXAIhAPd%2BmpzVlVgFWG9vKli2W4F1hbCacfL9tV0P%2FqjZsC9cKv8DCGIQABoMNjM3NDIzMTgzODA1Igxg0ZPviljlyO8%2FlOIq3APCDw2YEZTTsmGZTh1pVW0kzhxxiZwwad4VXMXfWVtFl64iz7iHxMu2%2BoA7AGCc8Rl1ZPuKJ6uSfi6LZSy7rAeiBdNAsdkfjuabLQMSw%2Fg9pbW1vcBe2BbD77t2h5RUlJRPYooyj2eEFy3vXKKNpdhLcbraev1cKOOEzS8JCmD4PHsVI4sej%2FpH8II1%2FfPMtCNS3QFv4vf9FYH3JzSD0Xm3uFjb%2ByTztRv4LQqy15262eqPOx866jn32rkYaO8G9KFjCb2s0EXIQJprfI7dYJUxtEeGIg8JOSIJRyosyhSEfayHQFZrzGBbRRl3XolS8vDFL7Ro7vQcGqIheslssGAAZGmyBWDCDeTvweg3Qq%2FYvklc97NOAgvhj%2BwHjZqmc8is1OA8UH8HvVeZZ%2F6G19k1sD69lxCElm8zhlCgM7Qiz%2Flx8vnvyCyDui7IpojgIcLdhTkomzgohzKtRrdoTcEjD07mqIWjuAy9ido4B2YSu%2BAGd0S6H11JYoUi1TZDaD6prfanqTjmUdPJqREt5qynqDfflSLuiRV0UfZQINFDLRrb9Sa6gAA8OgOpe68FuuF%2BODlZXs6ayRHMk9vgrnHnRjJKWET2EQlfl9RfIxQwiUJHQjQVGqNgHJc47jDd2v3EBjqkAQzs%2FT5SdG%2BTietYnO4e2nnPxaVjlB1EX0xkPyeDzkZhdVfA6hPFyGgGS6NqQFyXMmB2HbpLGGfP5P6Q%2FHdUwcrMU2wG0hEfLVkeJPFAniYD0bkRTtXYh8005qw76nknMJqmxv66Nzqv%2FiXRY%2FQ2CUaeOkJMwfT%2FHoHlXoRPFfmQmNZ0Lcq2U8U2uGOPOztC7d3O09LlTC5K6cIt2PeKBXOS3nCl&X-Amz-Signature=66d63669ae3470211ebc4018990075f8218c24783617fd7eaf142db04af11c6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOQJSLTO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCtBPuYG6%2Ff0v5q616Ao7bMzhskuEupYjN2xFoUgg5SXAIhAPd%2BmpzVlVgFWG9vKli2W4F1hbCacfL9tV0P%2FqjZsC9cKv8DCGIQABoMNjM3NDIzMTgzODA1Igxg0ZPviljlyO8%2FlOIq3APCDw2YEZTTsmGZTh1pVW0kzhxxiZwwad4VXMXfWVtFl64iz7iHxMu2%2BoA7AGCc8Rl1ZPuKJ6uSfi6LZSy7rAeiBdNAsdkfjuabLQMSw%2Fg9pbW1vcBe2BbD77t2h5RUlJRPYooyj2eEFy3vXKKNpdhLcbraev1cKOOEzS8JCmD4PHsVI4sej%2FpH8II1%2FfPMtCNS3QFv4vf9FYH3JzSD0Xm3uFjb%2ByTztRv4LQqy15262eqPOx866jn32rkYaO8G9KFjCb2s0EXIQJprfI7dYJUxtEeGIg8JOSIJRyosyhSEfayHQFZrzGBbRRl3XolS8vDFL7Ro7vQcGqIheslssGAAZGmyBWDCDeTvweg3Qq%2FYvklc97NOAgvhj%2BwHjZqmc8is1OA8UH8HvVeZZ%2F6G19k1sD69lxCElm8zhlCgM7Qiz%2Flx8vnvyCyDui7IpojgIcLdhTkomzgohzKtRrdoTcEjD07mqIWjuAy9ido4B2YSu%2BAGd0S6H11JYoUi1TZDaD6prfanqTjmUdPJqREt5qynqDfflSLuiRV0UfZQINFDLRrb9Sa6gAA8OgOpe68FuuF%2BODlZXs6ayRHMk9vgrnHnRjJKWET2EQlfl9RfIxQwiUJHQjQVGqNgHJc47jDd2v3EBjqkAQzs%2FT5SdG%2BTietYnO4e2nnPxaVjlB1EX0xkPyeDzkZhdVfA6hPFyGgGS6NqQFyXMmB2HbpLGGfP5P6Q%2FHdUwcrMU2wG0hEfLVkeJPFAniYD0bkRTtXYh8005qw76nknMJqmxv66Nzqv%2FiXRY%2FQ2CUaeOkJMwfT%2FHoHlXoRPFfmQmNZ0Lcq2U8U2uGOPOztC7d3O09LlTC5K6cIt2PeKBXOS3nCl&X-Amz-Signature=2b63cd32d486edd190208e24cad44ef57c1e3e389b0acaf59dd0b60c41b93a1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
