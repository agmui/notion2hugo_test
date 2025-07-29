---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-07-29T16:07:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-07-29T16:07:00.000Z"
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

```xml

  <link name="lidar_link">
    <inertial>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <mass value="0.125"/>
      <inertia ixx="0.001" ixy="0" ixz="0" iyy="0.001" iyz="0" izz="0.001" />
    </inertial>

    <collision>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </collision>

    <visual>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </visual>

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKQTLTW%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDaz9fiIeRnp8Lh5yEN5uBlCIPcEOxaashmjDtj9gjeoAiBfQ%2FdbvkyMN04g5v5x6VnMl1nkvzHfEyUqGjFhg8X9xCqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb5W6EIrZsLHmfqJrKtwDbxYZI3tBavZcTVdP3K5rNgSQipvKYPbtE6sUNimTLIO8HPXIQzBcxNZjZ0f1n0f0NmiiQCPTHjGLjMrqmELNNVJC0LYXJG4yjgno5a1bi1oaFZVQ2MT%2BKCwYlx%2F17rQxTEbzeAT4YTU1C4tJq%2F%2BlvikbFUIG%2BksA69A%2Bxl1ooeP49XtObxpUFCe7zlxIliPdZJWTPTdSZgcGNc8naVNVWxWZ5JSje%2Fm8U9WRAHJfC%2FCBQp0SRZH5lSgC5whhd54NyJzGeKJsUodWqgMKwQ1QOVVahsBn2ILi%2Bsw0yho5pWuiX2%2BUNP5ewGW8AU2PqYOdqRCBL2jwvF5oXspNc1ixLkuLn5YDKZHRRNvudMTasv8fPUn%2BrnsGVauve9lTFkm%2B%2BrORB3OjCqzF1Jnd8H92AGFOq2IYKiPoyNLKclN6Zke23RFit%2Bx5dfwuZAegiuUYZKq0k6mozR37HaJ7AnGOLru1U4vt3w6f9OhsnCwUBlRzJIMaYrWs9zAaYKnZg6mwgHP3AWmJtrir945Y8bxHO6pULlcdDcnO2LwgolwvkdbYyPtkls4JB9a2GsenjRXX5cGJdQdwNNf5ORxJOIiAjfN%2FRKX8tq5HkfpDjLLmBk40KL3Q%2FRykmpQsP6kw6P6jxAY6pgE1xCgMNBJvP%2BuSCS3JOrCZZoLbWAS2WTQEgjdtlhrP4Q%2FcYIY07mVBN3GIBi1FDVic4hNAcVEIyQa1a0FbZ4Bpm99FFd%2BldH6%2BYqDqXk91XBfygsgPp%2BodRrKTJeQuLhrTjZ5eLqytuohKB70JG4ZP0%2B6kkLYZf57%2BL6AIC09IOV1duVRC%2BeKwFEqdxh7N3CA61oFfy2J5rmFxy3g0%2BYRTTHWILF8U&X-Amz-Signature=6b79e14c0d70cea10fcd30d7831bd31bfbbd2d4df0ac9893b5d0a4ab3c58d472&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKQTLTW%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDaz9fiIeRnp8Lh5yEN5uBlCIPcEOxaashmjDtj9gjeoAiBfQ%2FdbvkyMN04g5v5x6VnMl1nkvzHfEyUqGjFhg8X9xCqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb5W6EIrZsLHmfqJrKtwDbxYZI3tBavZcTVdP3K5rNgSQipvKYPbtE6sUNimTLIO8HPXIQzBcxNZjZ0f1n0f0NmiiQCPTHjGLjMrqmELNNVJC0LYXJG4yjgno5a1bi1oaFZVQ2MT%2BKCwYlx%2F17rQxTEbzeAT4YTU1C4tJq%2F%2BlvikbFUIG%2BksA69A%2Bxl1ooeP49XtObxpUFCe7zlxIliPdZJWTPTdSZgcGNc8naVNVWxWZ5JSje%2Fm8U9WRAHJfC%2FCBQp0SRZH5lSgC5whhd54NyJzGeKJsUodWqgMKwQ1QOVVahsBn2ILi%2Bsw0yho5pWuiX2%2BUNP5ewGW8AU2PqYOdqRCBL2jwvF5oXspNc1ixLkuLn5YDKZHRRNvudMTasv8fPUn%2BrnsGVauve9lTFkm%2B%2BrORB3OjCqzF1Jnd8H92AGFOq2IYKiPoyNLKclN6Zke23RFit%2Bx5dfwuZAegiuUYZKq0k6mozR37HaJ7AnGOLru1U4vt3w6f9OhsnCwUBlRzJIMaYrWs9zAaYKnZg6mwgHP3AWmJtrir945Y8bxHO6pULlcdDcnO2LwgolwvkdbYyPtkls4JB9a2GsenjRXX5cGJdQdwNNf5ORxJOIiAjfN%2FRKX8tq5HkfpDjLLmBk40KL3Q%2FRykmpQsP6kw6P6jxAY6pgE1xCgMNBJvP%2BuSCS3JOrCZZoLbWAS2WTQEgjdtlhrP4Q%2FcYIY07mVBN3GIBi1FDVic4hNAcVEIyQa1a0FbZ4Bpm99FFd%2BldH6%2BYqDqXk91XBfygsgPp%2BodRrKTJeQuLhrTjZ5eLqytuohKB70JG4ZP0%2B6kkLYZf57%2BL6AIC09IOV1duVRC%2BeKwFEqdxh7N3CA61oFfy2J5rmFxy3g0%2BYRTTHWILF8U&X-Amz-Signature=4c39f0dca7357b4119fa02180e9da5e6a42b82ad977821a03ddf9d46d6d5fb5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKQTLTW%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDaz9fiIeRnp8Lh5yEN5uBlCIPcEOxaashmjDtj9gjeoAiBfQ%2FdbvkyMN04g5v5x6VnMl1nkvzHfEyUqGjFhg8X9xCqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb5W6EIrZsLHmfqJrKtwDbxYZI3tBavZcTVdP3K5rNgSQipvKYPbtE6sUNimTLIO8HPXIQzBcxNZjZ0f1n0f0NmiiQCPTHjGLjMrqmELNNVJC0LYXJG4yjgno5a1bi1oaFZVQ2MT%2BKCwYlx%2F17rQxTEbzeAT4YTU1C4tJq%2F%2BlvikbFUIG%2BksA69A%2Bxl1ooeP49XtObxpUFCe7zlxIliPdZJWTPTdSZgcGNc8naVNVWxWZ5JSje%2Fm8U9WRAHJfC%2FCBQp0SRZH5lSgC5whhd54NyJzGeKJsUodWqgMKwQ1QOVVahsBn2ILi%2Bsw0yho5pWuiX2%2BUNP5ewGW8AU2PqYOdqRCBL2jwvF5oXspNc1ixLkuLn5YDKZHRRNvudMTasv8fPUn%2BrnsGVauve9lTFkm%2B%2BrORB3OjCqzF1Jnd8H92AGFOq2IYKiPoyNLKclN6Zke23RFit%2Bx5dfwuZAegiuUYZKq0k6mozR37HaJ7AnGOLru1U4vt3w6f9OhsnCwUBlRzJIMaYrWs9zAaYKnZg6mwgHP3AWmJtrir945Y8bxHO6pULlcdDcnO2LwgolwvkdbYyPtkls4JB9a2GsenjRXX5cGJdQdwNNf5ORxJOIiAjfN%2FRKX8tq5HkfpDjLLmBk40KL3Q%2FRykmpQsP6kw6P6jxAY6pgE1xCgMNBJvP%2BuSCS3JOrCZZoLbWAS2WTQEgjdtlhrP4Q%2FcYIY07mVBN3GIBi1FDVic4hNAcVEIyQa1a0FbZ4Bpm99FFd%2BldH6%2BYqDqXk91XBfygsgPp%2BodRrKTJeQuLhrTjZ5eLqytuohKB70JG4ZP0%2B6kkLYZf57%2BL6AIC09IOV1duVRC%2BeKwFEqdxh7N3CA61oFfy2J5rmFxy3g0%2BYRTTHWILF8U&X-Amz-Signature=45a4c672e7a38e1c637ae42c4dd2ccef80ba0c207101ac0012abc8d0a1b5c9f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKQTLTW%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDaz9fiIeRnp8Lh5yEN5uBlCIPcEOxaashmjDtj9gjeoAiBfQ%2FdbvkyMN04g5v5x6VnMl1nkvzHfEyUqGjFhg8X9xCqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb5W6EIrZsLHmfqJrKtwDbxYZI3tBavZcTVdP3K5rNgSQipvKYPbtE6sUNimTLIO8HPXIQzBcxNZjZ0f1n0f0NmiiQCPTHjGLjMrqmELNNVJC0LYXJG4yjgno5a1bi1oaFZVQ2MT%2BKCwYlx%2F17rQxTEbzeAT4YTU1C4tJq%2F%2BlvikbFUIG%2BksA69A%2Bxl1ooeP49XtObxpUFCe7zlxIliPdZJWTPTdSZgcGNc8naVNVWxWZ5JSje%2Fm8U9WRAHJfC%2FCBQp0SRZH5lSgC5whhd54NyJzGeKJsUodWqgMKwQ1QOVVahsBn2ILi%2Bsw0yho5pWuiX2%2BUNP5ewGW8AU2PqYOdqRCBL2jwvF5oXspNc1ixLkuLn5YDKZHRRNvudMTasv8fPUn%2BrnsGVauve9lTFkm%2B%2BrORB3OjCqzF1Jnd8H92AGFOq2IYKiPoyNLKclN6Zke23RFit%2Bx5dfwuZAegiuUYZKq0k6mozR37HaJ7AnGOLru1U4vt3w6f9OhsnCwUBlRzJIMaYrWs9zAaYKnZg6mwgHP3AWmJtrir945Y8bxHO6pULlcdDcnO2LwgolwvkdbYyPtkls4JB9a2GsenjRXX5cGJdQdwNNf5ORxJOIiAjfN%2FRKX8tq5HkfpDjLLmBk40KL3Q%2FRykmpQsP6kw6P6jxAY6pgE1xCgMNBJvP%2BuSCS3JOrCZZoLbWAS2WTQEgjdtlhrP4Q%2FcYIY07mVBN3GIBi1FDVic4hNAcVEIyQa1a0FbZ4Bpm99FFd%2BldH6%2BYqDqXk91XBfygsgPp%2BodRrKTJeQuLhrTjZ5eLqytuohKB70JG4ZP0%2B6kkLYZf57%2BL6AIC09IOV1duVRC%2BeKwFEqdxh7N3CA61oFfy2J5rmFxy3g0%2BYRTTHWILF8U&X-Amz-Signature=69c9f5a4b3cf61778f122c0a23722b1a0ad178831ce9ae00d8f9e32f2784caee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKQTLTW%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDaz9fiIeRnp8Lh5yEN5uBlCIPcEOxaashmjDtj9gjeoAiBfQ%2FdbvkyMN04g5v5x6VnMl1nkvzHfEyUqGjFhg8X9xCqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb5W6EIrZsLHmfqJrKtwDbxYZI3tBavZcTVdP3K5rNgSQipvKYPbtE6sUNimTLIO8HPXIQzBcxNZjZ0f1n0f0NmiiQCPTHjGLjMrqmELNNVJC0LYXJG4yjgno5a1bi1oaFZVQ2MT%2BKCwYlx%2F17rQxTEbzeAT4YTU1C4tJq%2F%2BlvikbFUIG%2BksA69A%2Bxl1ooeP49XtObxpUFCe7zlxIliPdZJWTPTdSZgcGNc8naVNVWxWZ5JSje%2Fm8U9WRAHJfC%2FCBQp0SRZH5lSgC5whhd54NyJzGeKJsUodWqgMKwQ1QOVVahsBn2ILi%2Bsw0yho5pWuiX2%2BUNP5ewGW8AU2PqYOdqRCBL2jwvF5oXspNc1ixLkuLn5YDKZHRRNvudMTasv8fPUn%2BrnsGVauve9lTFkm%2B%2BrORB3OjCqzF1Jnd8H92AGFOq2IYKiPoyNLKclN6Zke23RFit%2Bx5dfwuZAegiuUYZKq0k6mozR37HaJ7AnGOLru1U4vt3w6f9OhsnCwUBlRzJIMaYrWs9zAaYKnZg6mwgHP3AWmJtrir945Y8bxHO6pULlcdDcnO2LwgolwvkdbYyPtkls4JB9a2GsenjRXX5cGJdQdwNNf5ORxJOIiAjfN%2FRKX8tq5HkfpDjLLmBk40KL3Q%2FRykmpQsP6kw6P6jxAY6pgE1xCgMNBJvP%2BuSCS3JOrCZZoLbWAS2WTQEgjdtlhrP4Q%2FcYIY07mVBN3GIBi1FDVic4hNAcVEIyQa1a0FbZ4Bpm99FFd%2BldH6%2BYqDqXk91XBfygsgPp%2BodRrKTJeQuLhrTjZ5eLqytuohKB70JG4ZP0%2B6kkLYZf57%2BL6AIC09IOV1duVRC%2BeKwFEqdxh7N3CA61oFfy2J5rmFxy3g0%2BYRTTHWILF8U&X-Amz-Signature=3dd7e3828abbbe1e9c5151644b8bafaeb4e2dc9663419b370811e489638ef2f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKQTLTW%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDaz9fiIeRnp8Lh5yEN5uBlCIPcEOxaashmjDtj9gjeoAiBfQ%2FdbvkyMN04g5v5x6VnMl1nkvzHfEyUqGjFhg8X9xCqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb5W6EIrZsLHmfqJrKtwDbxYZI3tBavZcTVdP3K5rNgSQipvKYPbtE6sUNimTLIO8HPXIQzBcxNZjZ0f1n0f0NmiiQCPTHjGLjMrqmELNNVJC0LYXJG4yjgno5a1bi1oaFZVQ2MT%2BKCwYlx%2F17rQxTEbzeAT4YTU1C4tJq%2F%2BlvikbFUIG%2BksA69A%2Bxl1ooeP49XtObxpUFCe7zlxIliPdZJWTPTdSZgcGNc8naVNVWxWZ5JSje%2Fm8U9WRAHJfC%2FCBQp0SRZH5lSgC5whhd54NyJzGeKJsUodWqgMKwQ1QOVVahsBn2ILi%2Bsw0yho5pWuiX2%2BUNP5ewGW8AU2PqYOdqRCBL2jwvF5oXspNc1ixLkuLn5YDKZHRRNvudMTasv8fPUn%2BrnsGVauve9lTFkm%2B%2BrORB3OjCqzF1Jnd8H92AGFOq2IYKiPoyNLKclN6Zke23RFit%2Bx5dfwuZAegiuUYZKq0k6mozR37HaJ7AnGOLru1U4vt3w6f9OhsnCwUBlRzJIMaYrWs9zAaYKnZg6mwgHP3AWmJtrir945Y8bxHO6pULlcdDcnO2LwgolwvkdbYyPtkls4JB9a2GsenjRXX5cGJdQdwNNf5ORxJOIiAjfN%2FRKX8tq5HkfpDjLLmBk40KL3Q%2FRykmpQsP6kw6P6jxAY6pgE1xCgMNBJvP%2BuSCS3JOrCZZoLbWAS2WTQEgjdtlhrP4Q%2FcYIY07mVBN3GIBi1FDVic4hNAcVEIyQa1a0FbZ4Bpm99FFd%2BldH6%2BYqDqXk91XBfygsgPp%2BodRrKTJeQuLhrTjZ5eLqytuohKB70JG4ZP0%2B6kkLYZf57%2BL6AIC09IOV1duVRC%2BeKwFEqdxh7N3CA61oFfy2J5rmFxy3g0%2BYRTTHWILF8U&X-Amz-Signature=ba79c63275a474665906c2cbdf20a808351dac3fac2e5bf99ab9a9abe340665e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKQTLTW%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDaz9fiIeRnp8Lh5yEN5uBlCIPcEOxaashmjDtj9gjeoAiBfQ%2FdbvkyMN04g5v5x6VnMl1nkvzHfEyUqGjFhg8X9xCqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb5W6EIrZsLHmfqJrKtwDbxYZI3tBavZcTVdP3K5rNgSQipvKYPbtE6sUNimTLIO8HPXIQzBcxNZjZ0f1n0f0NmiiQCPTHjGLjMrqmELNNVJC0LYXJG4yjgno5a1bi1oaFZVQ2MT%2BKCwYlx%2F17rQxTEbzeAT4YTU1C4tJq%2F%2BlvikbFUIG%2BksA69A%2Bxl1ooeP49XtObxpUFCe7zlxIliPdZJWTPTdSZgcGNc8naVNVWxWZ5JSje%2Fm8U9WRAHJfC%2FCBQp0SRZH5lSgC5whhd54NyJzGeKJsUodWqgMKwQ1QOVVahsBn2ILi%2Bsw0yho5pWuiX2%2BUNP5ewGW8AU2PqYOdqRCBL2jwvF5oXspNc1ixLkuLn5YDKZHRRNvudMTasv8fPUn%2BrnsGVauve9lTFkm%2B%2BrORB3OjCqzF1Jnd8H92AGFOq2IYKiPoyNLKclN6Zke23RFit%2Bx5dfwuZAegiuUYZKq0k6mozR37HaJ7AnGOLru1U4vt3w6f9OhsnCwUBlRzJIMaYrWs9zAaYKnZg6mwgHP3AWmJtrir945Y8bxHO6pULlcdDcnO2LwgolwvkdbYyPtkls4JB9a2GsenjRXX5cGJdQdwNNf5ORxJOIiAjfN%2FRKX8tq5HkfpDjLLmBk40KL3Q%2FRykmpQsP6kw6P6jxAY6pgE1xCgMNBJvP%2BuSCS3JOrCZZoLbWAS2WTQEgjdtlhrP4Q%2FcYIY07mVBN3GIBi1FDVic4hNAcVEIyQa1a0FbZ4Bpm99FFd%2BldH6%2BYqDqXk91XBfygsgPp%2BodRrKTJeQuLhrTjZ5eLqytuohKB70JG4ZP0%2B6kkLYZf57%2BL6AIC09IOV1duVRC%2BeKwFEqdxh7N3CA61oFfy2J5rmFxy3g0%2BYRTTHWILF8U&X-Amz-Signature=88c13d65037cf1a777cce7ccca301afd5073b094f0bf4bb01192bc790156b818&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKQTLTW%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDaz9fiIeRnp8Lh5yEN5uBlCIPcEOxaashmjDtj9gjeoAiBfQ%2FdbvkyMN04g5v5x6VnMl1nkvzHfEyUqGjFhg8X9xCqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb5W6EIrZsLHmfqJrKtwDbxYZI3tBavZcTVdP3K5rNgSQipvKYPbtE6sUNimTLIO8HPXIQzBcxNZjZ0f1n0f0NmiiQCPTHjGLjMrqmELNNVJC0LYXJG4yjgno5a1bi1oaFZVQ2MT%2BKCwYlx%2F17rQxTEbzeAT4YTU1C4tJq%2F%2BlvikbFUIG%2BksA69A%2Bxl1ooeP49XtObxpUFCe7zlxIliPdZJWTPTdSZgcGNc8naVNVWxWZ5JSje%2Fm8U9WRAHJfC%2FCBQp0SRZH5lSgC5whhd54NyJzGeKJsUodWqgMKwQ1QOVVahsBn2ILi%2Bsw0yho5pWuiX2%2BUNP5ewGW8AU2PqYOdqRCBL2jwvF5oXspNc1ixLkuLn5YDKZHRRNvudMTasv8fPUn%2BrnsGVauve9lTFkm%2B%2BrORB3OjCqzF1Jnd8H92AGFOq2IYKiPoyNLKclN6Zke23RFit%2Bx5dfwuZAegiuUYZKq0k6mozR37HaJ7AnGOLru1U4vt3w6f9OhsnCwUBlRzJIMaYrWs9zAaYKnZg6mwgHP3AWmJtrir945Y8bxHO6pULlcdDcnO2LwgolwvkdbYyPtkls4JB9a2GsenjRXX5cGJdQdwNNf5ORxJOIiAjfN%2FRKX8tq5HkfpDjLLmBk40KL3Q%2FRykmpQsP6kw6P6jxAY6pgE1xCgMNBJvP%2BuSCS3JOrCZZoLbWAS2WTQEgjdtlhrP4Q%2FcYIY07mVBN3GIBi1FDVic4hNAcVEIyQa1a0FbZ4Bpm99FFd%2BldH6%2BYqDqXk91XBfygsgPp%2BodRrKTJeQuLhrTjZ5eLqytuohKB70JG4ZP0%2B6kkLYZf57%2BL6AIC09IOV1duVRC%2BeKwFEqdxh7N3CA61oFfy2J5rmFxy3g0%2BYRTTHWILF8U&X-Amz-Signature=02aa0641527b1b5263486e861219d32ceaec9f9823d1275e8a4758e58b50a16c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: get official docs link

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKQTLTW%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDaz9fiIeRnp8Lh5yEN5uBlCIPcEOxaashmjDtj9gjeoAiBfQ%2FdbvkyMN04g5v5x6VnMl1nkvzHfEyUqGjFhg8X9xCqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb5W6EIrZsLHmfqJrKtwDbxYZI3tBavZcTVdP3K5rNgSQipvKYPbtE6sUNimTLIO8HPXIQzBcxNZjZ0f1n0f0NmiiQCPTHjGLjMrqmELNNVJC0LYXJG4yjgno5a1bi1oaFZVQ2MT%2BKCwYlx%2F17rQxTEbzeAT4YTU1C4tJq%2F%2BlvikbFUIG%2BksA69A%2Bxl1ooeP49XtObxpUFCe7zlxIliPdZJWTPTdSZgcGNc8naVNVWxWZ5JSje%2Fm8U9WRAHJfC%2FCBQp0SRZH5lSgC5whhd54NyJzGeKJsUodWqgMKwQ1QOVVahsBn2ILi%2Bsw0yho5pWuiX2%2BUNP5ewGW8AU2PqYOdqRCBL2jwvF5oXspNc1ixLkuLn5YDKZHRRNvudMTasv8fPUn%2BrnsGVauve9lTFkm%2B%2BrORB3OjCqzF1Jnd8H92AGFOq2IYKiPoyNLKclN6Zke23RFit%2Bx5dfwuZAegiuUYZKq0k6mozR37HaJ7AnGOLru1U4vt3w6f9OhsnCwUBlRzJIMaYrWs9zAaYKnZg6mwgHP3AWmJtrir945Y8bxHO6pULlcdDcnO2LwgolwvkdbYyPtkls4JB9a2GsenjRXX5cGJdQdwNNf5ORxJOIiAjfN%2FRKX8tq5HkfpDjLLmBk40KL3Q%2FRykmpQsP6kw6P6jxAY6pgE1xCgMNBJvP%2BuSCS3JOrCZZoLbWAS2WTQEgjdtlhrP4Q%2FcYIY07mVBN3GIBi1FDVic4hNAcVEIyQa1a0FbZ4Bpm99FFd%2BldH6%2BYqDqXk91XBfygsgPp%2BodRrKTJeQuLhrTjZ5eLqytuohKB70JG4ZP0%2B6kkLYZf57%2BL6AIC09IOV1duVRC%2BeKwFEqdxh7N3CA61oFfy2J5rmFxy3g0%2BYRTTHWILF8U&X-Amz-Signature=717d44094fc3045c034b767a101b6f392c6cfc753f5baf47e4dbd987037b88f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO: rviz img

## adding to launch

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

TODO: add rviz section

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKQTLTW%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDaz9fiIeRnp8Lh5yEN5uBlCIPcEOxaashmjDtj9gjeoAiBfQ%2FdbvkyMN04g5v5x6VnMl1nkvzHfEyUqGjFhg8X9xCqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb5W6EIrZsLHmfqJrKtwDbxYZI3tBavZcTVdP3K5rNgSQipvKYPbtE6sUNimTLIO8HPXIQzBcxNZjZ0f1n0f0NmiiQCPTHjGLjMrqmELNNVJC0LYXJG4yjgno5a1bi1oaFZVQ2MT%2BKCwYlx%2F17rQxTEbzeAT4YTU1C4tJq%2F%2BlvikbFUIG%2BksA69A%2Bxl1ooeP49XtObxpUFCe7zlxIliPdZJWTPTdSZgcGNc8naVNVWxWZ5JSje%2Fm8U9WRAHJfC%2FCBQp0SRZH5lSgC5whhd54NyJzGeKJsUodWqgMKwQ1QOVVahsBn2ILi%2Bsw0yho5pWuiX2%2BUNP5ewGW8AU2PqYOdqRCBL2jwvF5oXspNc1ixLkuLn5YDKZHRRNvudMTasv8fPUn%2BrnsGVauve9lTFkm%2B%2BrORB3OjCqzF1Jnd8H92AGFOq2IYKiPoyNLKclN6Zke23RFit%2Bx5dfwuZAegiuUYZKq0k6mozR37HaJ7AnGOLru1U4vt3w6f9OhsnCwUBlRzJIMaYrWs9zAaYKnZg6mwgHP3AWmJtrir945Y8bxHO6pULlcdDcnO2LwgolwvkdbYyPtkls4JB9a2GsenjRXX5cGJdQdwNNf5ORxJOIiAjfN%2FRKX8tq5HkfpDjLLmBk40KL3Q%2FRykmpQsP6kw6P6jxAY6pgE1xCgMNBJvP%2BuSCS3JOrCZZoLbWAS2WTQEgjdtlhrP4Q%2FcYIY07mVBN3GIBi1FDVic4hNAcVEIyQa1a0FbZ4Bpm99FFd%2BldH6%2BYqDqXk91XBfygsgPp%2BodRrKTJeQuLhrTjZ5eLqytuohKB70JG4ZP0%2B6kkLYZf57%2BL6AIC09IOV1duVRC%2BeKwFEqdxh7N3CA61oFfy2J5rmFxy3g0%2BYRTTHWILF8U&X-Amz-Signature=d82086ffaf26032ef657e80180895ad720c01f200b8d4b5039db515f912c19c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
