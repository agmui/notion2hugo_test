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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKMGZ5H3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXROxK%2F%2FJGe2ThF4%2FDwmXjepSH0Ihp0B0izAYWR4jhaAIhAKg3C1%2FyFXq1GpeRAm5EVLIqYAFzS54AvmJNPxoDN6DJKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzu65Cnc3PkUjySN3Iq3APaxD%2B%2Ff%2BEYyLcecpPHUdhUmHHe8rJ4DLbbb7V0Pnpos%2BZbNetF0PIUDNiv7AQmdzNKzn0Gop5d94dYIVcFNv894djpTfRIwdSefYh06jLGjzHLlwvZ87xTxvg8qGbJe5psRTB5%2FBy5PFcgIYORzJHj0QBCQ0NNcOAomMNzwgu%2BBgTXNOqS%2B8GCg4mE6pp6yllJi3AKOkeIx8FlWufZZttPbTZc%2FnuiMC1RUIcip6SyVgCSkmf9pDRKiqJuFx%2FtnP9d2GQN43tC80Rbgl1ksgy2cguD3SMS0EbpfIvh2jFqyVUTyegqoucxRVEmA%2FfK3FyRV9q9Xr2cR1PT9hqLjpFCntJRToEJXtQf2b6id6Afj8TEb3Cvxi%2BhBdK%2FExIR5wxJN4bEM4FsV6PF9PKG9ZHnOpbGlseCWNO7qSTyJvwC5Tsw199Y7lF5hU3MkOKgP9wI6dMR6uPt0fMYRCOy%2B9WGK2vJGlzMOJeDvr5yT4R82CL0BTIuQ4fTs6bQ2KjS1m1IKGbNHUturMshEtObFwLGC0CY1SqqsjDmNAT0IV5LxYPEnfN3Af9Si%2BMVWYHCMrgbqhvR6%2B3Ryp%2FDfsBeTEeH8UXgp%2FJGzqIAGCb3ksbQn%2BYu5rNS0LP0UsYCjDDOst%2FEBjqkAZCOtB%2B8Q8XHE4SPbOZi3oFQuBzkvE8kR%2FGc3QbiqSdUFUhMBjz839PtY%2BEYVeCJBGLRXeSRUS2QEfES79FOJfwliZuZtjL2uiIhP858I32VbU7GxAG8NNrnz0U82t2G9IiThZXKAHRq1zmsZL%2BmYCmXfKRA51vBftI8mIWDnhyuJwqRMy5RWL3LMEHJ6K6V7hEqJbI9dECl3BRyXbE8gfuKRNHG&X-Amz-Signature=f1658c854fa3a4542671f76927719a78610bb5b2c72575e737a9d51620b2b0a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIRQIZSJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKtf3Lw7vdK24O%2BQ8ssMe0RI98K0xjWrQOYS%2FbxQYhngIgIIYdTOAplhm0lc78AToihbhlHzE6%2BQw1ggGfYxEbABoqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfeiAz%2Fy7NMgVq%2B7yrcA76kAuES5OXdNVx%2B0tWTJwKgLeqF%2Fr%2BVmLdkZ2hwZnOaHDBNyVgznvKeYVqVRatlAAh%2BWvqAnH%2BpEcl6IOJL%2BszVUEHCiBZH2hMe6iJCZpCmCN1QT%2BC6Pz%2B5AG8NCKvc39UP8j1u1NRa1MButZGXlofcmTaCR8RNEUA8ZnrIHdbum4T4QcZ1IMgAsoDZhy92nQEagsnC6bbBNclqz3Hw5RnDEO8eXUDKNLMBu%2FIMfVYJMi%2FvEgoue2c5gYV%2B6zBh4FzCRvbKAoIMQhesahQQF8Dg6hGuAr%2BJb%2FxlmCvQG2nNhbWkYNgaUO4nvedTIaYrUbJNOS6zG%2B5PT9REIDHyemoNak2uq0uLe4wFy6%2BfAoHE2y0taUuVkvYSDhf6sA0VdyLePLp9wzehLjDYGhxO%2Bb%2BEtirpbMtBb1Nm83%2BjEDQGdLO%2F8a0cv9%2BYppiSZimoSXIWafULQo%2BzolkKUOtgjXUynyJbbQ%2BPcfUWqGmLUc4fHUKxx0R0L8ypLpaQp0EkNL56p8F9V0lUer7o2sLJuCDLxKpvejuoJZl6JlChB6n0spJiegZsdinl1TeE0mk80VJB7bwzB%2Fe9lVJI8SP8dnEBdxoU19Hx%2BJLuD3kQoz9jbXYSEeLh9gykptfFMMSy38QGOqUB5G%2BMUBls8kAKtqorgNeL4Jah9lxV7BvS8bKeJYO%2BLc5HJ2MnDWeKsN66kMYhH52N0S6%2FVzSoN54UtfHpIOFpuzcI%2B1jWFCxwhSt9CxDuYdC5cdFBpvENXFuTZZbfO7NaScw0hGOhlmY3XBEZHM%2FaIooAcxCQtL%2BbDAXEyepQLjPzB2DX1q7KIHB9bHHbiaQYHW3erO52i%2BAvKMWaob8S83M3EoKd&X-Amz-Signature=461771bcdc504442641b5263ab92452632d6c5a2170dda9503a6e1ce21d36626&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIRQIZSJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKtf3Lw7vdK24O%2BQ8ssMe0RI98K0xjWrQOYS%2FbxQYhngIgIIYdTOAplhm0lc78AToihbhlHzE6%2BQw1ggGfYxEbABoqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfeiAz%2Fy7NMgVq%2B7yrcA76kAuES5OXdNVx%2B0tWTJwKgLeqF%2Fr%2BVmLdkZ2hwZnOaHDBNyVgznvKeYVqVRatlAAh%2BWvqAnH%2BpEcl6IOJL%2BszVUEHCiBZH2hMe6iJCZpCmCN1QT%2BC6Pz%2B5AG8NCKvc39UP8j1u1NRa1MButZGXlofcmTaCR8RNEUA8ZnrIHdbum4T4QcZ1IMgAsoDZhy92nQEagsnC6bbBNclqz3Hw5RnDEO8eXUDKNLMBu%2FIMfVYJMi%2FvEgoue2c5gYV%2B6zBh4FzCRvbKAoIMQhesahQQF8Dg6hGuAr%2BJb%2FxlmCvQG2nNhbWkYNgaUO4nvedTIaYrUbJNOS6zG%2B5PT9REIDHyemoNak2uq0uLe4wFy6%2BfAoHE2y0taUuVkvYSDhf6sA0VdyLePLp9wzehLjDYGhxO%2Bb%2BEtirpbMtBb1Nm83%2BjEDQGdLO%2F8a0cv9%2BYppiSZimoSXIWafULQo%2BzolkKUOtgjXUynyJbbQ%2BPcfUWqGmLUc4fHUKxx0R0L8ypLpaQp0EkNL56p8F9V0lUer7o2sLJuCDLxKpvejuoJZl6JlChB6n0spJiegZsdinl1TeE0mk80VJB7bwzB%2Fe9lVJI8SP8dnEBdxoU19Hx%2BJLuD3kQoz9jbXYSEeLh9gykptfFMMSy38QGOqUB5G%2BMUBls8kAKtqorgNeL4Jah9lxV7BvS8bKeJYO%2BLc5HJ2MnDWeKsN66kMYhH52N0S6%2FVzSoN54UtfHpIOFpuzcI%2B1jWFCxwhSt9CxDuYdC5cdFBpvENXFuTZZbfO7NaScw0hGOhlmY3XBEZHM%2FaIooAcxCQtL%2BbDAXEyepQLjPzB2DX1q7KIHB9bHHbiaQYHW3erO52i%2BAvKMWaob8S83M3EoKd&X-Amz-Signature=b709589674393b6ca732e5dda66623345b40ada52e08e2c42358cb36dac296ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIRQIZSJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKtf3Lw7vdK24O%2BQ8ssMe0RI98K0xjWrQOYS%2FbxQYhngIgIIYdTOAplhm0lc78AToihbhlHzE6%2BQw1ggGfYxEbABoqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfeiAz%2Fy7NMgVq%2B7yrcA76kAuES5OXdNVx%2B0tWTJwKgLeqF%2Fr%2BVmLdkZ2hwZnOaHDBNyVgznvKeYVqVRatlAAh%2BWvqAnH%2BpEcl6IOJL%2BszVUEHCiBZH2hMe6iJCZpCmCN1QT%2BC6Pz%2B5AG8NCKvc39UP8j1u1NRa1MButZGXlofcmTaCR8RNEUA8ZnrIHdbum4T4QcZ1IMgAsoDZhy92nQEagsnC6bbBNclqz3Hw5RnDEO8eXUDKNLMBu%2FIMfVYJMi%2FvEgoue2c5gYV%2B6zBh4FzCRvbKAoIMQhesahQQF8Dg6hGuAr%2BJb%2FxlmCvQG2nNhbWkYNgaUO4nvedTIaYrUbJNOS6zG%2B5PT9REIDHyemoNak2uq0uLe4wFy6%2BfAoHE2y0taUuVkvYSDhf6sA0VdyLePLp9wzehLjDYGhxO%2Bb%2BEtirpbMtBb1Nm83%2BjEDQGdLO%2F8a0cv9%2BYppiSZimoSXIWafULQo%2BzolkKUOtgjXUynyJbbQ%2BPcfUWqGmLUc4fHUKxx0R0L8ypLpaQp0EkNL56p8F9V0lUer7o2sLJuCDLxKpvejuoJZl6JlChB6n0spJiegZsdinl1TeE0mk80VJB7bwzB%2Fe9lVJI8SP8dnEBdxoU19Hx%2BJLuD3kQoz9jbXYSEeLh9gykptfFMMSy38QGOqUB5G%2BMUBls8kAKtqorgNeL4Jah9lxV7BvS8bKeJYO%2BLc5HJ2MnDWeKsN66kMYhH52N0S6%2FVzSoN54UtfHpIOFpuzcI%2B1jWFCxwhSt9CxDuYdC5cdFBpvENXFuTZZbfO7NaScw0hGOhlmY3XBEZHM%2FaIooAcxCQtL%2BbDAXEyepQLjPzB2DX1q7KIHB9bHHbiaQYHW3erO52i%2BAvKMWaob8S83M3EoKd&X-Amz-Signature=1e828f722e0de516a10e40f722c2b1e87bbede1c79ef6e9a0df8c2632e7f9822&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIRQIZSJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKtf3Lw7vdK24O%2BQ8ssMe0RI98K0xjWrQOYS%2FbxQYhngIgIIYdTOAplhm0lc78AToihbhlHzE6%2BQw1ggGfYxEbABoqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfeiAz%2Fy7NMgVq%2B7yrcA76kAuES5OXdNVx%2B0tWTJwKgLeqF%2Fr%2BVmLdkZ2hwZnOaHDBNyVgznvKeYVqVRatlAAh%2BWvqAnH%2BpEcl6IOJL%2BszVUEHCiBZH2hMe6iJCZpCmCN1QT%2BC6Pz%2B5AG8NCKvc39UP8j1u1NRa1MButZGXlofcmTaCR8RNEUA8ZnrIHdbum4T4QcZ1IMgAsoDZhy92nQEagsnC6bbBNclqz3Hw5RnDEO8eXUDKNLMBu%2FIMfVYJMi%2FvEgoue2c5gYV%2B6zBh4FzCRvbKAoIMQhesahQQF8Dg6hGuAr%2BJb%2FxlmCvQG2nNhbWkYNgaUO4nvedTIaYrUbJNOS6zG%2B5PT9REIDHyemoNak2uq0uLe4wFy6%2BfAoHE2y0taUuVkvYSDhf6sA0VdyLePLp9wzehLjDYGhxO%2Bb%2BEtirpbMtBb1Nm83%2BjEDQGdLO%2F8a0cv9%2BYppiSZimoSXIWafULQo%2BzolkKUOtgjXUynyJbbQ%2BPcfUWqGmLUc4fHUKxx0R0L8ypLpaQp0EkNL56p8F9V0lUer7o2sLJuCDLxKpvejuoJZl6JlChB6n0spJiegZsdinl1TeE0mk80VJB7bwzB%2Fe9lVJI8SP8dnEBdxoU19Hx%2BJLuD3kQoz9jbXYSEeLh9gykptfFMMSy38QGOqUB5G%2BMUBls8kAKtqorgNeL4Jah9lxV7BvS8bKeJYO%2BLc5HJ2MnDWeKsN66kMYhH52N0S6%2FVzSoN54UtfHpIOFpuzcI%2B1jWFCxwhSt9CxDuYdC5cdFBpvENXFuTZZbfO7NaScw0hGOhlmY3XBEZHM%2FaIooAcxCQtL%2BbDAXEyepQLjPzB2DX1q7KIHB9bHHbiaQYHW3erO52i%2BAvKMWaob8S83M3EoKd&X-Amz-Signature=302107aba0e515c74e2a841bb976837f406163876b2ae1ea291df2a030a72e0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIRQIZSJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKtf3Lw7vdK24O%2BQ8ssMe0RI98K0xjWrQOYS%2FbxQYhngIgIIYdTOAplhm0lc78AToihbhlHzE6%2BQw1ggGfYxEbABoqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfeiAz%2Fy7NMgVq%2B7yrcA76kAuES5OXdNVx%2B0tWTJwKgLeqF%2Fr%2BVmLdkZ2hwZnOaHDBNyVgznvKeYVqVRatlAAh%2BWvqAnH%2BpEcl6IOJL%2BszVUEHCiBZH2hMe6iJCZpCmCN1QT%2BC6Pz%2B5AG8NCKvc39UP8j1u1NRa1MButZGXlofcmTaCR8RNEUA8ZnrIHdbum4T4QcZ1IMgAsoDZhy92nQEagsnC6bbBNclqz3Hw5RnDEO8eXUDKNLMBu%2FIMfVYJMi%2FvEgoue2c5gYV%2B6zBh4FzCRvbKAoIMQhesahQQF8Dg6hGuAr%2BJb%2FxlmCvQG2nNhbWkYNgaUO4nvedTIaYrUbJNOS6zG%2B5PT9REIDHyemoNak2uq0uLe4wFy6%2BfAoHE2y0taUuVkvYSDhf6sA0VdyLePLp9wzehLjDYGhxO%2Bb%2BEtirpbMtBb1Nm83%2BjEDQGdLO%2F8a0cv9%2BYppiSZimoSXIWafULQo%2BzolkKUOtgjXUynyJbbQ%2BPcfUWqGmLUc4fHUKxx0R0L8ypLpaQp0EkNL56p8F9V0lUer7o2sLJuCDLxKpvejuoJZl6JlChB6n0spJiegZsdinl1TeE0mk80VJB7bwzB%2Fe9lVJI8SP8dnEBdxoU19Hx%2BJLuD3kQoz9jbXYSEeLh9gykptfFMMSy38QGOqUB5G%2BMUBls8kAKtqorgNeL4Jah9lxV7BvS8bKeJYO%2BLc5HJ2MnDWeKsN66kMYhH52N0S6%2FVzSoN54UtfHpIOFpuzcI%2B1jWFCxwhSt9CxDuYdC5cdFBpvENXFuTZZbfO7NaScw0hGOhlmY3XBEZHM%2FaIooAcxCQtL%2BbDAXEyepQLjPzB2DX1q7KIHB9bHHbiaQYHW3erO52i%2BAvKMWaob8S83M3EoKd&X-Amz-Signature=07b519ab4b02eb21d332ae3466131fc59be139aba33855a1ff3c8a9aaddcfd04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIRQIZSJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKtf3Lw7vdK24O%2BQ8ssMe0RI98K0xjWrQOYS%2FbxQYhngIgIIYdTOAplhm0lc78AToihbhlHzE6%2BQw1ggGfYxEbABoqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfeiAz%2Fy7NMgVq%2B7yrcA76kAuES5OXdNVx%2B0tWTJwKgLeqF%2Fr%2BVmLdkZ2hwZnOaHDBNyVgznvKeYVqVRatlAAh%2BWvqAnH%2BpEcl6IOJL%2BszVUEHCiBZH2hMe6iJCZpCmCN1QT%2BC6Pz%2B5AG8NCKvc39UP8j1u1NRa1MButZGXlofcmTaCR8RNEUA8ZnrIHdbum4T4QcZ1IMgAsoDZhy92nQEagsnC6bbBNclqz3Hw5RnDEO8eXUDKNLMBu%2FIMfVYJMi%2FvEgoue2c5gYV%2B6zBh4FzCRvbKAoIMQhesahQQF8Dg6hGuAr%2BJb%2FxlmCvQG2nNhbWkYNgaUO4nvedTIaYrUbJNOS6zG%2B5PT9REIDHyemoNak2uq0uLe4wFy6%2BfAoHE2y0taUuVkvYSDhf6sA0VdyLePLp9wzehLjDYGhxO%2Bb%2BEtirpbMtBb1Nm83%2BjEDQGdLO%2F8a0cv9%2BYppiSZimoSXIWafULQo%2BzolkKUOtgjXUynyJbbQ%2BPcfUWqGmLUc4fHUKxx0R0L8ypLpaQp0EkNL56p8F9V0lUer7o2sLJuCDLxKpvejuoJZl6JlChB6n0spJiegZsdinl1TeE0mk80VJB7bwzB%2Fe9lVJI8SP8dnEBdxoU19Hx%2BJLuD3kQoz9jbXYSEeLh9gykptfFMMSy38QGOqUB5G%2BMUBls8kAKtqorgNeL4Jah9lxV7BvS8bKeJYO%2BLc5HJ2MnDWeKsN66kMYhH52N0S6%2FVzSoN54UtfHpIOFpuzcI%2B1jWFCxwhSt9CxDuYdC5cdFBpvENXFuTZZbfO7NaScw0hGOhlmY3XBEZHM%2FaIooAcxCQtL%2BbDAXEyepQLjPzB2DX1q7KIHB9bHHbiaQYHW3erO52i%2BAvKMWaob8S83M3EoKd&X-Amz-Signature=08a16ad50a7eb4ae77298a91d733bb236a675c3f12ce267796109b157f3f5fc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIRQIZSJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKtf3Lw7vdK24O%2BQ8ssMe0RI98K0xjWrQOYS%2FbxQYhngIgIIYdTOAplhm0lc78AToihbhlHzE6%2BQw1ggGfYxEbABoqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfeiAz%2Fy7NMgVq%2B7yrcA76kAuES5OXdNVx%2B0tWTJwKgLeqF%2Fr%2BVmLdkZ2hwZnOaHDBNyVgznvKeYVqVRatlAAh%2BWvqAnH%2BpEcl6IOJL%2BszVUEHCiBZH2hMe6iJCZpCmCN1QT%2BC6Pz%2B5AG8NCKvc39UP8j1u1NRa1MButZGXlofcmTaCR8RNEUA8ZnrIHdbum4T4QcZ1IMgAsoDZhy92nQEagsnC6bbBNclqz3Hw5RnDEO8eXUDKNLMBu%2FIMfVYJMi%2FvEgoue2c5gYV%2B6zBh4FzCRvbKAoIMQhesahQQF8Dg6hGuAr%2BJb%2FxlmCvQG2nNhbWkYNgaUO4nvedTIaYrUbJNOS6zG%2B5PT9REIDHyemoNak2uq0uLe4wFy6%2BfAoHE2y0taUuVkvYSDhf6sA0VdyLePLp9wzehLjDYGhxO%2Bb%2BEtirpbMtBb1Nm83%2BjEDQGdLO%2F8a0cv9%2BYppiSZimoSXIWafULQo%2BzolkKUOtgjXUynyJbbQ%2BPcfUWqGmLUc4fHUKxx0R0L8ypLpaQp0EkNL56p8F9V0lUer7o2sLJuCDLxKpvejuoJZl6JlChB6n0spJiegZsdinl1TeE0mk80VJB7bwzB%2Fe9lVJI8SP8dnEBdxoU19Hx%2BJLuD3kQoz9jbXYSEeLh9gykptfFMMSy38QGOqUB5G%2BMUBls8kAKtqorgNeL4Jah9lxV7BvS8bKeJYO%2BLc5HJ2MnDWeKsN66kMYhH52N0S6%2FVzSoN54UtfHpIOFpuzcI%2B1jWFCxwhSt9CxDuYdC5cdFBpvENXFuTZZbfO7NaScw0hGOhlmY3XBEZHM%2FaIooAcxCQtL%2BbDAXEyepQLjPzB2DX1q7KIHB9bHHbiaQYHW3erO52i%2BAvKMWaob8S83M3EoKd&X-Amz-Signature=44fb03412a0b2c25b0d47562067891a56d41f75547614e4e70171d780a60429c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIRQIZSJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKtf3Lw7vdK24O%2BQ8ssMe0RI98K0xjWrQOYS%2FbxQYhngIgIIYdTOAplhm0lc78AToihbhlHzE6%2BQw1ggGfYxEbABoqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfeiAz%2Fy7NMgVq%2B7yrcA76kAuES5OXdNVx%2B0tWTJwKgLeqF%2Fr%2BVmLdkZ2hwZnOaHDBNyVgznvKeYVqVRatlAAh%2BWvqAnH%2BpEcl6IOJL%2BszVUEHCiBZH2hMe6iJCZpCmCN1QT%2BC6Pz%2B5AG8NCKvc39UP8j1u1NRa1MButZGXlofcmTaCR8RNEUA8ZnrIHdbum4T4QcZ1IMgAsoDZhy92nQEagsnC6bbBNclqz3Hw5RnDEO8eXUDKNLMBu%2FIMfVYJMi%2FvEgoue2c5gYV%2B6zBh4FzCRvbKAoIMQhesahQQF8Dg6hGuAr%2BJb%2FxlmCvQG2nNhbWkYNgaUO4nvedTIaYrUbJNOS6zG%2B5PT9REIDHyemoNak2uq0uLe4wFy6%2BfAoHE2y0taUuVkvYSDhf6sA0VdyLePLp9wzehLjDYGhxO%2Bb%2BEtirpbMtBb1Nm83%2BjEDQGdLO%2F8a0cv9%2BYppiSZimoSXIWafULQo%2BzolkKUOtgjXUynyJbbQ%2BPcfUWqGmLUc4fHUKxx0R0L8ypLpaQp0EkNL56p8F9V0lUer7o2sLJuCDLxKpvejuoJZl6JlChB6n0spJiegZsdinl1TeE0mk80VJB7bwzB%2Fe9lVJI8SP8dnEBdxoU19Hx%2BJLuD3kQoz9jbXYSEeLh9gykptfFMMSy38QGOqUB5G%2BMUBls8kAKtqorgNeL4Jah9lxV7BvS8bKeJYO%2BLc5HJ2MnDWeKsN66kMYhH52N0S6%2FVzSoN54UtfHpIOFpuzcI%2B1jWFCxwhSt9CxDuYdC5cdFBpvENXFuTZZbfO7NaScw0hGOhlmY3XBEZHM%2FaIooAcxCQtL%2BbDAXEyepQLjPzB2DX1q7KIHB9bHHbiaQYHW3erO52i%2BAvKMWaob8S83M3EoKd&X-Amz-Signature=529c9f148a9845ea2984310b3aca564c3008f705ea5a14b94308b1489583ba3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIRQIZSJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKtf3Lw7vdK24O%2BQ8ssMe0RI98K0xjWrQOYS%2FbxQYhngIgIIYdTOAplhm0lc78AToihbhlHzE6%2BQw1ggGfYxEbABoqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfeiAz%2Fy7NMgVq%2B7yrcA76kAuES5OXdNVx%2B0tWTJwKgLeqF%2Fr%2BVmLdkZ2hwZnOaHDBNyVgznvKeYVqVRatlAAh%2BWvqAnH%2BpEcl6IOJL%2BszVUEHCiBZH2hMe6iJCZpCmCN1QT%2BC6Pz%2B5AG8NCKvc39UP8j1u1NRa1MButZGXlofcmTaCR8RNEUA8ZnrIHdbum4T4QcZ1IMgAsoDZhy92nQEagsnC6bbBNclqz3Hw5RnDEO8eXUDKNLMBu%2FIMfVYJMi%2FvEgoue2c5gYV%2B6zBh4FzCRvbKAoIMQhesahQQF8Dg6hGuAr%2BJb%2FxlmCvQG2nNhbWkYNgaUO4nvedTIaYrUbJNOS6zG%2B5PT9REIDHyemoNak2uq0uLe4wFy6%2BfAoHE2y0taUuVkvYSDhf6sA0VdyLePLp9wzehLjDYGhxO%2Bb%2BEtirpbMtBb1Nm83%2BjEDQGdLO%2F8a0cv9%2BYppiSZimoSXIWafULQo%2BzolkKUOtgjXUynyJbbQ%2BPcfUWqGmLUc4fHUKxx0R0L8ypLpaQp0EkNL56p8F9V0lUer7o2sLJuCDLxKpvejuoJZl6JlChB6n0spJiegZsdinl1TeE0mk80VJB7bwzB%2Fe9lVJI8SP8dnEBdxoU19Hx%2BJLuD3kQoz9jbXYSEeLh9gykptfFMMSy38QGOqUB5G%2BMUBls8kAKtqorgNeL4Jah9lxV7BvS8bKeJYO%2BLc5HJ2MnDWeKsN66kMYhH52N0S6%2FVzSoN54UtfHpIOFpuzcI%2B1jWFCxwhSt9CxDuYdC5cdFBpvENXFuTZZbfO7NaScw0hGOhlmY3XBEZHM%2FaIooAcxCQtL%2BbDAXEyepQLjPzB2DX1q7KIHB9bHHbiaQYHW3erO52i%2BAvKMWaob8S83M3EoKd&X-Amz-Signature=7283064c2ad15b6fca4747b865075c3665c776b7cf21ed00906e9af9381b545d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIRQIZSJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKtf3Lw7vdK24O%2BQ8ssMe0RI98K0xjWrQOYS%2FbxQYhngIgIIYdTOAplhm0lc78AToihbhlHzE6%2BQw1ggGfYxEbABoqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfeiAz%2Fy7NMgVq%2B7yrcA76kAuES5OXdNVx%2B0tWTJwKgLeqF%2Fr%2BVmLdkZ2hwZnOaHDBNyVgznvKeYVqVRatlAAh%2BWvqAnH%2BpEcl6IOJL%2BszVUEHCiBZH2hMe6iJCZpCmCN1QT%2BC6Pz%2B5AG8NCKvc39UP8j1u1NRa1MButZGXlofcmTaCR8RNEUA8ZnrIHdbum4T4QcZ1IMgAsoDZhy92nQEagsnC6bbBNclqz3Hw5RnDEO8eXUDKNLMBu%2FIMfVYJMi%2FvEgoue2c5gYV%2B6zBh4FzCRvbKAoIMQhesahQQF8Dg6hGuAr%2BJb%2FxlmCvQG2nNhbWkYNgaUO4nvedTIaYrUbJNOS6zG%2B5PT9REIDHyemoNak2uq0uLe4wFy6%2BfAoHE2y0taUuVkvYSDhf6sA0VdyLePLp9wzehLjDYGhxO%2Bb%2BEtirpbMtBb1Nm83%2BjEDQGdLO%2F8a0cv9%2BYppiSZimoSXIWafULQo%2BzolkKUOtgjXUynyJbbQ%2BPcfUWqGmLUc4fHUKxx0R0L8ypLpaQp0EkNL56p8F9V0lUer7o2sLJuCDLxKpvejuoJZl6JlChB6n0spJiegZsdinl1TeE0mk80VJB7bwzB%2Fe9lVJI8SP8dnEBdxoU19Hx%2BJLuD3kQoz9jbXYSEeLh9gykptfFMMSy38QGOqUB5G%2BMUBls8kAKtqorgNeL4Jah9lxV7BvS8bKeJYO%2BLc5HJ2MnDWeKsN66kMYhH52N0S6%2FVzSoN54UtfHpIOFpuzcI%2B1jWFCxwhSt9CxDuYdC5cdFBpvENXFuTZZbfO7NaScw0hGOhlmY3XBEZHM%2FaIooAcxCQtL%2BbDAXEyepQLjPzB2DX1q7KIHB9bHHbiaQYHW3erO52i%2BAvKMWaob8S83M3EoKd&X-Amz-Signature=e113846f91bbed853feb95563ab6edceb6c76b33127ad7bc9d9d0afef1cb5742&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
