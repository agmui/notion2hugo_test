---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-07-30T06:25:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXZ54KQA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDukUeNG5OGtJJfHTH32wxN%2FgaToISx6oN7Gvzyq6H%2BWAIhALtKuUbcMpxGwbfUMs76y6jf8TR8bkVRJrwBZv4e6wcJKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzvu4uNTyitcMrwwwoq3APAt7DNXXNOFJYeq407ALt6FhdxUsQkWz0UY%2FrftJGli1drz3sCuA2SB5iu3g7eZ0QS5jRESvVONM56Pi5gDY8ONR0WldybSSMrfOhBV5P%2FGBy1aP5Ay7VTTNYJsnoKlecilVnmu%2B9xxAlTjFxDPoMAaNSbQPdjnoFmRNbR%2FAdsz5on4wi9q4sYQ%2BmHyEyQAqUYhiJEvNUCgsOHB8PsSM1ZnbGOPNcCfZSzSv0ZnJEFrlRSIVqXcjYRdOLErbv%2FeI%2FS4%2BC21t3aE1TjHQ9aztG8zUTQEMoQMFiuNiTRJKpFE8k%2FhiHsDVu75L%2FAOVeWNWL%2F6jq4tmH1ZG4O18sa6WGiklh8UvgkswLkRrF4Tpn8MM5QfKuEin51EvowZNiRcfDZe2jFlpNv05cY9sEiTtVtrAUFfq6U13YqxfZ3hrnVdq3iOSGWMIzJ7sbPZfEpJPyo%2BHm4HC9OY0LlporMgtlVaLI%2F%2BLf6B2crm3SIasBUi98laN5CJJNvNY5ykSj1Qs3fkDHfvNs7dWxYK2Q53t0ozICcx0LfRaAZKEWhy8A6zAwHfSOtK8a5POSrgCyU9ttxqPoQAQsfDJinPSbjTA7qNW5MGRpLpoRLNE960faa%2FaP%2FLg1ZukmfjuipvTCRga%2FEBjqkAetf3Kl3Rr4OEUdaIP%2FoPyn%2FdpUQEJa4pZnSvbfEPnI790wZ0gU3orc6zu4bE8Xy2pvlTiRDgvaS351fzJAb9h2ZtEapWm4aglfjC%2BC6p31VuoA3Q%2FPraBf0ZnGZsu%2B2jXMAxWYpwIdNg%2BjKXF8Q1w6LkSXzKRcigsYe4rUWf%2BtRFmLJuGkzgfvlZuEqDH9adw1SAQQdoY90GSI1c1cr70ru6%2BxR&X-Amz-Signature=f32b9978d96b9c02156a008e09866ef72c1c3ff9d70540a36db7d79126bb284d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXZ54KQA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDukUeNG5OGtJJfHTH32wxN%2FgaToISx6oN7Gvzyq6H%2BWAIhALtKuUbcMpxGwbfUMs76y6jf8TR8bkVRJrwBZv4e6wcJKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzvu4uNTyitcMrwwwoq3APAt7DNXXNOFJYeq407ALt6FhdxUsQkWz0UY%2FrftJGli1drz3sCuA2SB5iu3g7eZ0QS5jRESvVONM56Pi5gDY8ONR0WldybSSMrfOhBV5P%2FGBy1aP5Ay7VTTNYJsnoKlecilVnmu%2B9xxAlTjFxDPoMAaNSbQPdjnoFmRNbR%2FAdsz5on4wi9q4sYQ%2BmHyEyQAqUYhiJEvNUCgsOHB8PsSM1ZnbGOPNcCfZSzSv0ZnJEFrlRSIVqXcjYRdOLErbv%2FeI%2FS4%2BC21t3aE1TjHQ9aztG8zUTQEMoQMFiuNiTRJKpFE8k%2FhiHsDVu75L%2FAOVeWNWL%2F6jq4tmH1ZG4O18sa6WGiklh8UvgkswLkRrF4Tpn8MM5QfKuEin51EvowZNiRcfDZe2jFlpNv05cY9sEiTtVtrAUFfq6U13YqxfZ3hrnVdq3iOSGWMIzJ7sbPZfEpJPyo%2BHm4HC9OY0LlporMgtlVaLI%2F%2BLf6B2crm3SIasBUi98laN5CJJNvNY5ykSj1Qs3fkDHfvNs7dWxYK2Q53t0ozICcx0LfRaAZKEWhy8A6zAwHfSOtK8a5POSrgCyU9ttxqPoQAQsfDJinPSbjTA7qNW5MGRpLpoRLNE960faa%2FaP%2FLg1ZukmfjuipvTCRga%2FEBjqkAetf3Kl3Rr4OEUdaIP%2FoPyn%2FdpUQEJa4pZnSvbfEPnI790wZ0gU3orc6zu4bE8Xy2pvlTiRDgvaS351fzJAb9h2ZtEapWm4aglfjC%2BC6p31VuoA3Q%2FPraBf0ZnGZsu%2B2jXMAxWYpwIdNg%2BjKXF8Q1w6LkSXzKRcigsYe4rUWf%2BtRFmLJuGkzgfvlZuEqDH9adw1SAQQdoY90GSI1c1cr70ru6%2BxR&X-Amz-Signature=9753302bb2f0040239b89cff4fc93bb4779782469d548be8b75440f8f7e8866e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXZ54KQA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDukUeNG5OGtJJfHTH32wxN%2FgaToISx6oN7Gvzyq6H%2BWAIhALtKuUbcMpxGwbfUMs76y6jf8TR8bkVRJrwBZv4e6wcJKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzvu4uNTyitcMrwwwoq3APAt7DNXXNOFJYeq407ALt6FhdxUsQkWz0UY%2FrftJGli1drz3sCuA2SB5iu3g7eZ0QS5jRESvVONM56Pi5gDY8ONR0WldybSSMrfOhBV5P%2FGBy1aP5Ay7VTTNYJsnoKlecilVnmu%2B9xxAlTjFxDPoMAaNSbQPdjnoFmRNbR%2FAdsz5on4wi9q4sYQ%2BmHyEyQAqUYhiJEvNUCgsOHB8PsSM1ZnbGOPNcCfZSzSv0ZnJEFrlRSIVqXcjYRdOLErbv%2FeI%2FS4%2BC21t3aE1TjHQ9aztG8zUTQEMoQMFiuNiTRJKpFE8k%2FhiHsDVu75L%2FAOVeWNWL%2F6jq4tmH1ZG4O18sa6WGiklh8UvgkswLkRrF4Tpn8MM5QfKuEin51EvowZNiRcfDZe2jFlpNv05cY9sEiTtVtrAUFfq6U13YqxfZ3hrnVdq3iOSGWMIzJ7sbPZfEpJPyo%2BHm4HC9OY0LlporMgtlVaLI%2F%2BLf6B2crm3SIasBUi98laN5CJJNvNY5ykSj1Qs3fkDHfvNs7dWxYK2Q53t0ozICcx0LfRaAZKEWhy8A6zAwHfSOtK8a5POSrgCyU9ttxqPoQAQsfDJinPSbjTA7qNW5MGRpLpoRLNE960faa%2FaP%2FLg1ZukmfjuipvTCRga%2FEBjqkAetf3Kl3Rr4OEUdaIP%2FoPyn%2FdpUQEJa4pZnSvbfEPnI790wZ0gU3orc6zu4bE8Xy2pvlTiRDgvaS351fzJAb9h2ZtEapWm4aglfjC%2BC6p31VuoA3Q%2FPraBf0ZnGZsu%2B2jXMAxWYpwIdNg%2BjKXF8Q1w6LkSXzKRcigsYe4rUWf%2BtRFmLJuGkzgfvlZuEqDH9adw1SAQQdoY90GSI1c1cr70ru6%2BxR&X-Amz-Signature=e1398335158a7f1ea31c13ebde342cea0f5432511a467e5a07f7a6daf53af9c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXZ54KQA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDukUeNG5OGtJJfHTH32wxN%2FgaToISx6oN7Gvzyq6H%2BWAIhALtKuUbcMpxGwbfUMs76y6jf8TR8bkVRJrwBZv4e6wcJKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzvu4uNTyitcMrwwwoq3APAt7DNXXNOFJYeq407ALt6FhdxUsQkWz0UY%2FrftJGli1drz3sCuA2SB5iu3g7eZ0QS5jRESvVONM56Pi5gDY8ONR0WldybSSMrfOhBV5P%2FGBy1aP5Ay7VTTNYJsnoKlecilVnmu%2B9xxAlTjFxDPoMAaNSbQPdjnoFmRNbR%2FAdsz5on4wi9q4sYQ%2BmHyEyQAqUYhiJEvNUCgsOHB8PsSM1ZnbGOPNcCfZSzSv0ZnJEFrlRSIVqXcjYRdOLErbv%2FeI%2FS4%2BC21t3aE1TjHQ9aztG8zUTQEMoQMFiuNiTRJKpFE8k%2FhiHsDVu75L%2FAOVeWNWL%2F6jq4tmH1ZG4O18sa6WGiklh8UvgkswLkRrF4Tpn8MM5QfKuEin51EvowZNiRcfDZe2jFlpNv05cY9sEiTtVtrAUFfq6U13YqxfZ3hrnVdq3iOSGWMIzJ7sbPZfEpJPyo%2BHm4HC9OY0LlporMgtlVaLI%2F%2BLf6B2crm3SIasBUi98laN5CJJNvNY5ykSj1Qs3fkDHfvNs7dWxYK2Q53t0ozICcx0LfRaAZKEWhy8A6zAwHfSOtK8a5POSrgCyU9ttxqPoQAQsfDJinPSbjTA7qNW5MGRpLpoRLNE960faa%2FaP%2FLg1ZukmfjuipvTCRga%2FEBjqkAetf3Kl3Rr4OEUdaIP%2FoPyn%2FdpUQEJa4pZnSvbfEPnI790wZ0gU3orc6zu4bE8Xy2pvlTiRDgvaS351fzJAb9h2ZtEapWm4aglfjC%2BC6p31VuoA3Q%2FPraBf0ZnGZsu%2B2jXMAxWYpwIdNg%2BjKXF8Q1w6LkSXzKRcigsYe4rUWf%2BtRFmLJuGkzgfvlZuEqDH9adw1SAQQdoY90GSI1c1cr70ru6%2BxR&X-Amz-Signature=ae93898ccf5cdceb0c90e1d478564124c8f95567def79b989f330ee66b5a2644&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXZ54KQA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDukUeNG5OGtJJfHTH32wxN%2FgaToISx6oN7Gvzyq6H%2BWAIhALtKuUbcMpxGwbfUMs76y6jf8TR8bkVRJrwBZv4e6wcJKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzvu4uNTyitcMrwwwoq3APAt7DNXXNOFJYeq407ALt6FhdxUsQkWz0UY%2FrftJGli1drz3sCuA2SB5iu3g7eZ0QS5jRESvVONM56Pi5gDY8ONR0WldybSSMrfOhBV5P%2FGBy1aP5Ay7VTTNYJsnoKlecilVnmu%2B9xxAlTjFxDPoMAaNSbQPdjnoFmRNbR%2FAdsz5on4wi9q4sYQ%2BmHyEyQAqUYhiJEvNUCgsOHB8PsSM1ZnbGOPNcCfZSzSv0ZnJEFrlRSIVqXcjYRdOLErbv%2FeI%2FS4%2BC21t3aE1TjHQ9aztG8zUTQEMoQMFiuNiTRJKpFE8k%2FhiHsDVu75L%2FAOVeWNWL%2F6jq4tmH1ZG4O18sa6WGiklh8UvgkswLkRrF4Tpn8MM5QfKuEin51EvowZNiRcfDZe2jFlpNv05cY9sEiTtVtrAUFfq6U13YqxfZ3hrnVdq3iOSGWMIzJ7sbPZfEpJPyo%2BHm4HC9OY0LlporMgtlVaLI%2F%2BLf6B2crm3SIasBUi98laN5CJJNvNY5ykSj1Qs3fkDHfvNs7dWxYK2Q53t0ozICcx0LfRaAZKEWhy8A6zAwHfSOtK8a5POSrgCyU9ttxqPoQAQsfDJinPSbjTA7qNW5MGRpLpoRLNE960faa%2FaP%2FLg1ZukmfjuipvTCRga%2FEBjqkAetf3Kl3Rr4OEUdaIP%2FoPyn%2FdpUQEJa4pZnSvbfEPnI790wZ0gU3orc6zu4bE8Xy2pvlTiRDgvaS351fzJAb9h2ZtEapWm4aglfjC%2BC6p31VuoA3Q%2FPraBf0ZnGZsu%2B2jXMAxWYpwIdNg%2BjKXF8Q1w6LkSXzKRcigsYe4rUWf%2BtRFmLJuGkzgfvlZuEqDH9adw1SAQQdoY90GSI1c1cr70ru6%2BxR&X-Amz-Signature=0b466a339546ffa761f7aae1c228d5ad69f60d6aedb91bb014739a851906813a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXZ54KQA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDukUeNG5OGtJJfHTH32wxN%2FgaToISx6oN7Gvzyq6H%2BWAIhALtKuUbcMpxGwbfUMs76y6jf8TR8bkVRJrwBZv4e6wcJKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzvu4uNTyitcMrwwwoq3APAt7DNXXNOFJYeq407ALt6FhdxUsQkWz0UY%2FrftJGli1drz3sCuA2SB5iu3g7eZ0QS5jRESvVONM56Pi5gDY8ONR0WldybSSMrfOhBV5P%2FGBy1aP5Ay7VTTNYJsnoKlecilVnmu%2B9xxAlTjFxDPoMAaNSbQPdjnoFmRNbR%2FAdsz5on4wi9q4sYQ%2BmHyEyQAqUYhiJEvNUCgsOHB8PsSM1ZnbGOPNcCfZSzSv0ZnJEFrlRSIVqXcjYRdOLErbv%2FeI%2FS4%2BC21t3aE1TjHQ9aztG8zUTQEMoQMFiuNiTRJKpFE8k%2FhiHsDVu75L%2FAOVeWNWL%2F6jq4tmH1ZG4O18sa6WGiklh8UvgkswLkRrF4Tpn8MM5QfKuEin51EvowZNiRcfDZe2jFlpNv05cY9sEiTtVtrAUFfq6U13YqxfZ3hrnVdq3iOSGWMIzJ7sbPZfEpJPyo%2BHm4HC9OY0LlporMgtlVaLI%2F%2BLf6B2crm3SIasBUi98laN5CJJNvNY5ykSj1Qs3fkDHfvNs7dWxYK2Q53t0ozICcx0LfRaAZKEWhy8A6zAwHfSOtK8a5POSrgCyU9ttxqPoQAQsfDJinPSbjTA7qNW5MGRpLpoRLNE960faa%2FaP%2FLg1ZukmfjuipvTCRga%2FEBjqkAetf3Kl3Rr4OEUdaIP%2FoPyn%2FdpUQEJa4pZnSvbfEPnI790wZ0gU3orc6zu4bE8Xy2pvlTiRDgvaS351fzJAb9h2ZtEapWm4aglfjC%2BC6p31VuoA3Q%2FPraBf0ZnGZsu%2B2jXMAxWYpwIdNg%2BjKXF8Q1w6LkSXzKRcigsYe4rUWf%2BtRFmLJuGkzgfvlZuEqDH9adw1SAQQdoY90GSI1c1cr70ru6%2BxR&X-Amz-Signature=448bf65b77a1105b3d8da055302bd7b106c4812fbf175280d7d9633b39796a19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXZ54KQA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDukUeNG5OGtJJfHTH32wxN%2FgaToISx6oN7Gvzyq6H%2BWAIhALtKuUbcMpxGwbfUMs76y6jf8TR8bkVRJrwBZv4e6wcJKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzvu4uNTyitcMrwwwoq3APAt7DNXXNOFJYeq407ALt6FhdxUsQkWz0UY%2FrftJGli1drz3sCuA2SB5iu3g7eZ0QS5jRESvVONM56Pi5gDY8ONR0WldybSSMrfOhBV5P%2FGBy1aP5Ay7VTTNYJsnoKlecilVnmu%2B9xxAlTjFxDPoMAaNSbQPdjnoFmRNbR%2FAdsz5on4wi9q4sYQ%2BmHyEyQAqUYhiJEvNUCgsOHB8PsSM1ZnbGOPNcCfZSzSv0ZnJEFrlRSIVqXcjYRdOLErbv%2FeI%2FS4%2BC21t3aE1TjHQ9aztG8zUTQEMoQMFiuNiTRJKpFE8k%2FhiHsDVu75L%2FAOVeWNWL%2F6jq4tmH1ZG4O18sa6WGiklh8UvgkswLkRrF4Tpn8MM5QfKuEin51EvowZNiRcfDZe2jFlpNv05cY9sEiTtVtrAUFfq6U13YqxfZ3hrnVdq3iOSGWMIzJ7sbPZfEpJPyo%2BHm4HC9OY0LlporMgtlVaLI%2F%2BLf6B2crm3SIasBUi98laN5CJJNvNY5ykSj1Qs3fkDHfvNs7dWxYK2Q53t0ozICcx0LfRaAZKEWhy8A6zAwHfSOtK8a5POSrgCyU9ttxqPoQAQsfDJinPSbjTA7qNW5MGRpLpoRLNE960faa%2FaP%2FLg1ZukmfjuipvTCRga%2FEBjqkAetf3Kl3Rr4OEUdaIP%2FoPyn%2FdpUQEJa4pZnSvbfEPnI790wZ0gU3orc6zu4bE8Xy2pvlTiRDgvaS351fzJAb9h2ZtEapWm4aglfjC%2BC6p31VuoA3Q%2FPraBf0ZnGZsu%2B2jXMAxWYpwIdNg%2BjKXF8Q1w6LkSXzKRcigsYe4rUWf%2BtRFmLJuGkzgfvlZuEqDH9adw1SAQQdoY90GSI1c1cr70ru6%2BxR&X-Amz-Signature=0b9e40dd10d65eb6d8136b53f0713643b879412d818967e4cc0c06ca34f45070&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXZ54KQA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDukUeNG5OGtJJfHTH32wxN%2FgaToISx6oN7Gvzyq6H%2BWAIhALtKuUbcMpxGwbfUMs76y6jf8TR8bkVRJrwBZv4e6wcJKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzvu4uNTyitcMrwwwoq3APAt7DNXXNOFJYeq407ALt6FhdxUsQkWz0UY%2FrftJGli1drz3sCuA2SB5iu3g7eZ0QS5jRESvVONM56Pi5gDY8ONR0WldybSSMrfOhBV5P%2FGBy1aP5Ay7VTTNYJsnoKlecilVnmu%2B9xxAlTjFxDPoMAaNSbQPdjnoFmRNbR%2FAdsz5on4wi9q4sYQ%2BmHyEyQAqUYhiJEvNUCgsOHB8PsSM1ZnbGOPNcCfZSzSv0ZnJEFrlRSIVqXcjYRdOLErbv%2FeI%2FS4%2BC21t3aE1TjHQ9aztG8zUTQEMoQMFiuNiTRJKpFE8k%2FhiHsDVu75L%2FAOVeWNWL%2F6jq4tmH1ZG4O18sa6WGiklh8UvgkswLkRrF4Tpn8MM5QfKuEin51EvowZNiRcfDZe2jFlpNv05cY9sEiTtVtrAUFfq6U13YqxfZ3hrnVdq3iOSGWMIzJ7sbPZfEpJPyo%2BHm4HC9OY0LlporMgtlVaLI%2F%2BLf6B2crm3SIasBUi98laN5CJJNvNY5ykSj1Qs3fkDHfvNs7dWxYK2Q53t0ozICcx0LfRaAZKEWhy8A6zAwHfSOtK8a5POSrgCyU9ttxqPoQAQsfDJinPSbjTA7qNW5MGRpLpoRLNE960faa%2FaP%2FLg1ZukmfjuipvTCRga%2FEBjqkAetf3Kl3Rr4OEUdaIP%2FoPyn%2FdpUQEJa4pZnSvbfEPnI790wZ0gU3orc6zu4bE8Xy2pvlTiRDgvaS351fzJAb9h2ZtEapWm4aglfjC%2BC6p31VuoA3Q%2FPraBf0ZnGZsu%2B2jXMAxWYpwIdNg%2BjKXF8Q1w6LkSXzKRcigsYe4rUWf%2BtRFmLJuGkzgfvlZuEqDH9adw1SAQQdoY90GSI1c1cr70ru6%2BxR&X-Amz-Signature=b8e456e34b4f7d24b2a32cf2f0bb82ae62fbbe5bba5fad8d05dff8846dbf84e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXZ54KQA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDukUeNG5OGtJJfHTH32wxN%2FgaToISx6oN7Gvzyq6H%2BWAIhALtKuUbcMpxGwbfUMs76y6jf8TR8bkVRJrwBZv4e6wcJKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzvu4uNTyitcMrwwwoq3APAt7DNXXNOFJYeq407ALt6FhdxUsQkWz0UY%2FrftJGli1drz3sCuA2SB5iu3g7eZ0QS5jRESvVONM56Pi5gDY8ONR0WldybSSMrfOhBV5P%2FGBy1aP5Ay7VTTNYJsnoKlecilVnmu%2B9xxAlTjFxDPoMAaNSbQPdjnoFmRNbR%2FAdsz5on4wi9q4sYQ%2BmHyEyQAqUYhiJEvNUCgsOHB8PsSM1ZnbGOPNcCfZSzSv0ZnJEFrlRSIVqXcjYRdOLErbv%2FeI%2FS4%2BC21t3aE1TjHQ9aztG8zUTQEMoQMFiuNiTRJKpFE8k%2FhiHsDVu75L%2FAOVeWNWL%2F6jq4tmH1ZG4O18sa6WGiklh8UvgkswLkRrF4Tpn8MM5QfKuEin51EvowZNiRcfDZe2jFlpNv05cY9sEiTtVtrAUFfq6U13YqxfZ3hrnVdq3iOSGWMIzJ7sbPZfEpJPyo%2BHm4HC9OY0LlporMgtlVaLI%2F%2BLf6B2crm3SIasBUi98laN5CJJNvNY5ykSj1Qs3fkDHfvNs7dWxYK2Q53t0ozICcx0LfRaAZKEWhy8A6zAwHfSOtK8a5POSrgCyU9ttxqPoQAQsfDJinPSbjTA7qNW5MGRpLpoRLNE960faa%2FaP%2FLg1ZukmfjuipvTCRga%2FEBjqkAetf3Kl3Rr4OEUdaIP%2FoPyn%2FdpUQEJa4pZnSvbfEPnI790wZ0gU3orc6zu4bE8Xy2pvlTiRDgvaS351fzJAb9h2ZtEapWm4aglfjC%2BC6p31VuoA3Q%2FPraBf0ZnGZsu%2B2jXMAxWYpwIdNg%2BjKXF8Q1w6LkSXzKRcigsYe4rUWf%2BtRFmLJuGkzgfvlZuEqDH9adw1SAQQdoY90GSI1c1cr70ru6%2BxR&X-Amz-Signature=b3ecee60a585069c2ab0e7b9b8cda08c3546b8033f7ea9834bc76a4a2e60798b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO: rviz img

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

TODO: add rviz section

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXZ54KQA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDukUeNG5OGtJJfHTH32wxN%2FgaToISx6oN7Gvzyq6H%2BWAIhALtKuUbcMpxGwbfUMs76y6jf8TR8bkVRJrwBZv4e6wcJKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzvu4uNTyitcMrwwwoq3APAt7DNXXNOFJYeq407ALt6FhdxUsQkWz0UY%2FrftJGli1drz3sCuA2SB5iu3g7eZ0QS5jRESvVONM56Pi5gDY8ONR0WldybSSMrfOhBV5P%2FGBy1aP5Ay7VTTNYJsnoKlecilVnmu%2B9xxAlTjFxDPoMAaNSbQPdjnoFmRNbR%2FAdsz5on4wi9q4sYQ%2BmHyEyQAqUYhiJEvNUCgsOHB8PsSM1ZnbGOPNcCfZSzSv0ZnJEFrlRSIVqXcjYRdOLErbv%2FeI%2FS4%2BC21t3aE1TjHQ9aztG8zUTQEMoQMFiuNiTRJKpFE8k%2FhiHsDVu75L%2FAOVeWNWL%2F6jq4tmH1ZG4O18sa6WGiklh8UvgkswLkRrF4Tpn8MM5QfKuEin51EvowZNiRcfDZe2jFlpNv05cY9sEiTtVtrAUFfq6U13YqxfZ3hrnVdq3iOSGWMIzJ7sbPZfEpJPyo%2BHm4HC9OY0LlporMgtlVaLI%2F%2BLf6B2crm3SIasBUi98laN5CJJNvNY5ykSj1Qs3fkDHfvNs7dWxYK2Q53t0ozICcx0LfRaAZKEWhy8A6zAwHfSOtK8a5POSrgCyU9ttxqPoQAQsfDJinPSbjTA7qNW5MGRpLpoRLNE960faa%2FaP%2FLg1ZukmfjuipvTCRga%2FEBjqkAetf3Kl3Rr4OEUdaIP%2FoPyn%2FdpUQEJa4pZnSvbfEPnI790wZ0gU3orc6zu4bE8Xy2pvlTiRDgvaS351fzJAb9h2ZtEapWm4aglfjC%2BC6p31VuoA3Q%2FPraBf0ZnGZsu%2B2jXMAxWYpwIdNg%2BjKXF8Q1w6LkSXzKRcigsYe4rUWf%2BtRFmLJuGkzgfvlZuEqDH9adw1SAQQdoY90GSI1c1cr70ru6%2BxR&X-Amz-Signature=1aaa911114ba9537745449f1421cfa12cc7a14a26ef76c54082211a75945096d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
