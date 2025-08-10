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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXOTC4AS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNyYRyxM52gF7OFMRhL8lgqhJd7VkhDThNwaLCpMP8lQIgWTHZ7IWSvb5EDq98gVHBIMHE5dFvDk6ZAGh%2FdeGfNMQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjN8Wew1qO3sCB7RCrcA6XE%2BiGX7jAkn6nkeWNbhsZbEh9gnYaScLbrw2nWN4qk29iV75Q3K%2Bi%2B9d6ocXbSnHAJZx6TucZyJ0wxe%2Ff5Co0mqoVcSWLQz7hRnfhzdsBaCwfDa%2B7OPhr4K52oMY%2B1VampVgU3pmvH7VSuvIiiC3s5miadKvRmHvJpWe1SQnSKJmNn6TZVTAqFxFXEIexjwpYKb6yFNGsTTgGwaVjfiDEGpWhHAnxJ5eoF%2B2q3Pdj4U%2FpXDblrEkbdP7wsr2w1m6pk6CISc7exirq70YjqxjkWaopnO8BwXi0V06K6o76AGM3M7WcVV3TgVdH4D1rkOwNG2d3rDv4fsGmq%2BIUfPMiR%2F%2BeistPS%2BHLpSuo%2F05gPNHKuLnQUsxjV5PZDfpUOhzLl1jWcf5vIlLf3x04fCFnXYalQF4ZJPjDyeegIBUO3v1fDJSBqewpn53W2lJoQzQhetK%2BDy%2BGJtE06sj0D6K2hoZdNKe1wrKR31AOmCJIQ%2FfS584EHRuSHmbaTd6gSt%2BItFBrg%2Bf5WgFRPfu6Jh5T21Q7XFnQbGyhc5sfFeUmEKn27LWGSrnNEL1JVyhc4eV%2B0nY0Ni4s5%2BVQwjbs4KE1uENfNYnOGKy2zJ6o1RqXP1Lc2Jg3egBsXMSwVMMW648QGOqUBBZWpWtHcsPBX%2Fgs41HYm3wa5xRYiV246lu9DIGyAEtT23%2F2G70xGFLrug6ssfEInOMabPFpjjnXy8W%2FTs9pyZOSyDwihhPTZMwVix59eOtL2MCwWJXfMgvKIuzBJ0xQVTXPKJGvwKQGqXScjJheyCLAZd3Oyfefo7ToPiD7cyhtyPVcha0bmJMa8iT3rFVcsV6Cevvc7XkGwkWkYizarLmVtRlwD&X-Amz-Signature=b5ae17efcacf5b06dfd2e1a02b762c9545567977ba7d6388bcaab7b876156ac9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUOFLYUM%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFr8Jls%2FGEX4n1UwDOSmTusOwijMkrCvOKmZVj6Va21%2BAiBK8KKaYUGzaIRfzzE%2FG49uplEKo1Ro8azveNHBg9BXyyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJw8Es8qlOxBCpHitKtwDESaqTnaPRgspd26AtYUhb9SG%2FfJRtry4QH7CsQsUzJZNQyD9XJiLneM3PiX3BIwR%2FtqiXEGLsFKZ9J9MuJa%2F0W7TNQx2Cm0ae4M4d014PTGYGIpuw9P2glCYhlla5rfxZvVAw4J048Q3NTKc1nSRXUJN8jXPliHQ7uP91YTmt2DGsw2UTAlxKef0Pv9SkJwMSjBjRnIkEpxNry10OAsitKKEMMO9Ux66hau0Ff8NRCCZrGN4trGN9sIz5MIW4hWjJZb3uMjX7L31UvoEdlLtwSQLCczRop0BODfT0hS4b2L%2F5hOxIxc9iXzduQzpKmcqwLe7imx3HVhLsKRlSFboR6ChUe0KEXMX3KKnCKsiyiyVh5sUMWyiDMdxqZ2xZ%2FDb%2FiMOd%2Fg2607%2BEHsJPKw23n45SFzoMH%2FOcGka1CLt91d0ML%2FLK4eI2u94IAjqjb%2BeXzJLMY2ey6Gq%2FcVwal3CvCWHjNxFB9Yq7Dkr7g2wOqSMjXR%2FESZe6eCEzsv4jApSEx4B0GnRpev3gIw3YSstEPAhGzBdEQ6IhIOC9Lu4yku3wjppxc%2B6I8q4GU%2BzynL%2BLGySvG2mt7u4lkK5SBz1poWYVU95KDNYcJF0byH9g%2Fjd4MXvDo4%2B26q0fckw0brjxAY6pgHgNexb51eK2KZMmoqy9jKOG9f6BvWxn2nPE4W7CJqav8sLUCZMRyBNTMdRcF9yfw1pQr1iDImmExE%2Fb4%2FRrh9chtZfgNJbtxJRbQtVThxgFPAmBVHtHmTzsbmDj923kaeQQdanRlxw5twpaPxl6%2FeW4uCKAtUY3pVsdys%2F0UBanrpLvQ9d4LpxounJIMZEQwW%2Bllw0MbXlAcAkgGrOHh4TVp8MZV9e&X-Amz-Signature=6bebdeea61d1dc316b73a95c64959657f582fd4881312efa2977f13381dd4e53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUOFLYUM%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFr8Jls%2FGEX4n1UwDOSmTusOwijMkrCvOKmZVj6Va21%2BAiBK8KKaYUGzaIRfzzE%2FG49uplEKo1Ro8azveNHBg9BXyyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJw8Es8qlOxBCpHitKtwDESaqTnaPRgspd26AtYUhb9SG%2FfJRtry4QH7CsQsUzJZNQyD9XJiLneM3PiX3BIwR%2FtqiXEGLsFKZ9J9MuJa%2F0W7TNQx2Cm0ae4M4d014PTGYGIpuw9P2glCYhlla5rfxZvVAw4J048Q3NTKc1nSRXUJN8jXPliHQ7uP91YTmt2DGsw2UTAlxKef0Pv9SkJwMSjBjRnIkEpxNry10OAsitKKEMMO9Ux66hau0Ff8NRCCZrGN4trGN9sIz5MIW4hWjJZb3uMjX7L31UvoEdlLtwSQLCczRop0BODfT0hS4b2L%2F5hOxIxc9iXzduQzpKmcqwLe7imx3HVhLsKRlSFboR6ChUe0KEXMX3KKnCKsiyiyVh5sUMWyiDMdxqZ2xZ%2FDb%2FiMOd%2Fg2607%2BEHsJPKw23n45SFzoMH%2FOcGka1CLt91d0ML%2FLK4eI2u94IAjqjb%2BeXzJLMY2ey6Gq%2FcVwal3CvCWHjNxFB9Yq7Dkr7g2wOqSMjXR%2FESZe6eCEzsv4jApSEx4B0GnRpev3gIw3YSstEPAhGzBdEQ6IhIOC9Lu4yku3wjppxc%2B6I8q4GU%2BzynL%2BLGySvG2mt7u4lkK5SBz1poWYVU95KDNYcJF0byH9g%2Fjd4MXvDo4%2B26q0fckw0brjxAY6pgHgNexb51eK2KZMmoqy9jKOG9f6BvWxn2nPE4W7CJqav8sLUCZMRyBNTMdRcF9yfw1pQr1iDImmExE%2Fb4%2FRrh9chtZfgNJbtxJRbQtVThxgFPAmBVHtHmTzsbmDj923kaeQQdanRlxw5twpaPxl6%2FeW4uCKAtUY3pVsdys%2F0UBanrpLvQ9d4LpxounJIMZEQwW%2Bllw0MbXlAcAkgGrOHh4TVp8MZV9e&X-Amz-Signature=68c4d6d42f75d8f1c3f6b59033ffa09af859c6cf90def01790cd3d0c5cd557e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUOFLYUM%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFr8Jls%2FGEX4n1UwDOSmTusOwijMkrCvOKmZVj6Va21%2BAiBK8KKaYUGzaIRfzzE%2FG49uplEKo1Ro8azveNHBg9BXyyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJw8Es8qlOxBCpHitKtwDESaqTnaPRgspd26AtYUhb9SG%2FfJRtry4QH7CsQsUzJZNQyD9XJiLneM3PiX3BIwR%2FtqiXEGLsFKZ9J9MuJa%2F0W7TNQx2Cm0ae4M4d014PTGYGIpuw9P2glCYhlla5rfxZvVAw4J048Q3NTKc1nSRXUJN8jXPliHQ7uP91YTmt2DGsw2UTAlxKef0Pv9SkJwMSjBjRnIkEpxNry10OAsitKKEMMO9Ux66hau0Ff8NRCCZrGN4trGN9sIz5MIW4hWjJZb3uMjX7L31UvoEdlLtwSQLCczRop0BODfT0hS4b2L%2F5hOxIxc9iXzduQzpKmcqwLe7imx3HVhLsKRlSFboR6ChUe0KEXMX3KKnCKsiyiyVh5sUMWyiDMdxqZ2xZ%2FDb%2FiMOd%2Fg2607%2BEHsJPKw23n45SFzoMH%2FOcGka1CLt91d0ML%2FLK4eI2u94IAjqjb%2BeXzJLMY2ey6Gq%2FcVwal3CvCWHjNxFB9Yq7Dkr7g2wOqSMjXR%2FESZe6eCEzsv4jApSEx4B0GnRpev3gIw3YSstEPAhGzBdEQ6IhIOC9Lu4yku3wjppxc%2B6I8q4GU%2BzynL%2BLGySvG2mt7u4lkK5SBz1poWYVU95KDNYcJF0byH9g%2Fjd4MXvDo4%2B26q0fckw0brjxAY6pgHgNexb51eK2KZMmoqy9jKOG9f6BvWxn2nPE4W7CJqav8sLUCZMRyBNTMdRcF9yfw1pQr1iDImmExE%2Fb4%2FRrh9chtZfgNJbtxJRbQtVThxgFPAmBVHtHmTzsbmDj923kaeQQdanRlxw5twpaPxl6%2FeW4uCKAtUY3pVsdys%2F0UBanrpLvQ9d4LpxounJIMZEQwW%2Bllw0MbXlAcAkgGrOHh4TVp8MZV9e&X-Amz-Signature=f4547ae60dcab75062312f51a71f7ea74bb3608e2ac7a2f39372162812ca5b42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUOFLYUM%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFr8Jls%2FGEX4n1UwDOSmTusOwijMkrCvOKmZVj6Va21%2BAiBK8KKaYUGzaIRfzzE%2FG49uplEKo1Ro8azveNHBg9BXyyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJw8Es8qlOxBCpHitKtwDESaqTnaPRgspd26AtYUhb9SG%2FfJRtry4QH7CsQsUzJZNQyD9XJiLneM3PiX3BIwR%2FtqiXEGLsFKZ9J9MuJa%2F0W7TNQx2Cm0ae4M4d014PTGYGIpuw9P2glCYhlla5rfxZvVAw4J048Q3NTKc1nSRXUJN8jXPliHQ7uP91YTmt2DGsw2UTAlxKef0Pv9SkJwMSjBjRnIkEpxNry10OAsitKKEMMO9Ux66hau0Ff8NRCCZrGN4trGN9sIz5MIW4hWjJZb3uMjX7L31UvoEdlLtwSQLCczRop0BODfT0hS4b2L%2F5hOxIxc9iXzduQzpKmcqwLe7imx3HVhLsKRlSFboR6ChUe0KEXMX3KKnCKsiyiyVh5sUMWyiDMdxqZ2xZ%2FDb%2FiMOd%2Fg2607%2BEHsJPKw23n45SFzoMH%2FOcGka1CLt91d0ML%2FLK4eI2u94IAjqjb%2BeXzJLMY2ey6Gq%2FcVwal3CvCWHjNxFB9Yq7Dkr7g2wOqSMjXR%2FESZe6eCEzsv4jApSEx4B0GnRpev3gIw3YSstEPAhGzBdEQ6IhIOC9Lu4yku3wjppxc%2B6I8q4GU%2BzynL%2BLGySvG2mt7u4lkK5SBz1poWYVU95KDNYcJF0byH9g%2Fjd4MXvDo4%2B26q0fckw0brjxAY6pgHgNexb51eK2KZMmoqy9jKOG9f6BvWxn2nPE4W7CJqav8sLUCZMRyBNTMdRcF9yfw1pQr1iDImmExE%2Fb4%2FRrh9chtZfgNJbtxJRbQtVThxgFPAmBVHtHmTzsbmDj923kaeQQdanRlxw5twpaPxl6%2FeW4uCKAtUY3pVsdys%2F0UBanrpLvQ9d4LpxounJIMZEQwW%2Bllw0MbXlAcAkgGrOHh4TVp8MZV9e&X-Amz-Signature=937d83ab0ca644177a1a8b3d66f6f6905f2e4e7d9afd8a0947105603b991f838&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUOFLYUM%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFr8Jls%2FGEX4n1UwDOSmTusOwijMkrCvOKmZVj6Va21%2BAiBK8KKaYUGzaIRfzzE%2FG49uplEKo1Ro8azveNHBg9BXyyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJw8Es8qlOxBCpHitKtwDESaqTnaPRgspd26AtYUhb9SG%2FfJRtry4QH7CsQsUzJZNQyD9XJiLneM3PiX3BIwR%2FtqiXEGLsFKZ9J9MuJa%2F0W7TNQx2Cm0ae4M4d014PTGYGIpuw9P2glCYhlla5rfxZvVAw4J048Q3NTKc1nSRXUJN8jXPliHQ7uP91YTmt2DGsw2UTAlxKef0Pv9SkJwMSjBjRnIkEpxNry10OAsitKKEMMO9Ux66hau0Ff8NRCCZrGN4trGN9sIz5MIW4hWjJZb3uMjX7L31UvoEdlLtwSQLCczRop0BODfT0hS4b2L%2F5hOxIxc9iXzduQzpKmcqwLe7imx3HVhLsKRlSFboR6ChUe0KEXMX3KKnCKsiyiyVh5sUMWyiDMdxqZ2xZ%2FDb%2FiMOd%2Fg2607%2BEHsJPKw23n45SFzoMH%2FOcGka1CLt91d0ML%2FLK4eI2u94IAjqjb%2BeXzJLMY2ey6Gq%2FcVwal3CvCWHjNxFB9Yq7Dkr7g2wOqSMjXR%2FESZe6eCEzsv4jApSEx4B0GnRpev3gIw3YSstEPAhGzBdEQ6IhIOC9Lu4yku3wjppxc%2B6I8q4GU%2BzynL%2BLGySvG2mt7u4lkK5SBz1poWYVU95KDNYcJF0byH9g%2Fjd4MXvDo4%2B26q0fckw0brjxAY6pgHgNexb51eK2KZMmoqy9jKOG9f6BvWxn2nPE4W7CJqav8sLUCZMRyBNTMdRcF9yfw1pQr1iDImmExE%2Fb4%2FRrh9chtZfgNJbtxJRbQtVThxgFPAmBVHtHmTzsbmDj923kaeQQdanRlxw5twpaPxl6%2FeW4uCKAtUY3pVsdys%2F0UBanrpLvQ9d4LpxounJIMZEQwW%2Bllw0MbXlAcAkgGrOHh4TVp8MZV9e&X-Amz-Signature=b84d92ac6be268c4c83bbb2aa964134f955b9c3e3964e5a716400197d246682d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUOFLYUM%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFr8Jls%2FGEX4n1UwDOSmTusOwijMkrCvOKmZVj6Va21%2BAiBK8KKaYUGzaIRfzzE%2FG49uplEKo1Ro8azveNHBg9BXyyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJw8Es8qlOxBCpHitKtwDESaqTnaPRgspd26AtYUhb9SG%2FfJRtry4QH7CsQsUzJZNQyD9XJiLneM3PiX3BIwR%2FtqiXEGLsFKZ9J9MuJa%2F0W7TNQx2Cm0ae4M4d014PTGYGIpuw9P2glCYhlla5rfxZvVAw4J048Q3NTKc1nSRXUJN8jXPliHQ7uP91YTmt2DGsw2UTAlxKef0Pv9SkJwMSjBjRnIkEpxNry10OAsitKKEMMO9Ux66hau0Ff8NRCCZrGN4trGN9sIz5MIW4hWjJZb3uMjX7L31UvoEdlLtwSQLCczRop0BODfT0hS4b2L%2F5hOxIxc9iXzduQzpKmcqwLe7imx3HVhLsKRlSFboR6ChUe0KEXMX3KKnCKsiyiyVh5sUMWyiDMdxqZ2xZ%2FDb%2FiMOd%2Fg2607%2BEHsJPKw23n45SFzoMH%2FOcGka1CLt91d0ML%2FLK4eI2u94IAjqjb%2BeXzJLMY2ey6Gq%2FcVwal3CvCWHjNxFB9Yq7Dkr7g2wOqSMjXR%2FESZe6eCEzsv4jApSEx4B0GnRpev3gIw3YSstEPAhGzBdEQ6IhIOC9Lu4yku3wjppxc%2B6I8q4GU%2BzynL%2BLGySvG2mt7u4lkK5SBz1poWYVU95KDNYcJF0byH9g%2Fjd4MXvDo4%2B26q0fckw0brjxAY6pgHgNexb51eK2KZMmoqy9jKOG9f6BvWxn2nPE4W7CJqav8sLUCZMRyBNTMdRcF9yfw1pQr1iDImmExE%2Fb4%2FRrh9chtZfgNJbtxJRbQtVThxgFPAmBVHtHmTzsbmDj923kaeQQdanRlxw5twpaPxl6%2FeW4uCKAtUY3pVsdys%2F0UBanrpLvQ9d4LpxounJIMZEQwW%2Bllw0MbXlAcAkgGrOHh4TVp8MZV9e&X-Amz-Signature=2ff6662b2dc981d3a2d56908d9848913b6a2c9343f5544b894fd861df14f6ffa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUOFLYUM%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFr8Jls%2FGEX4n1UwDOSmTusOwijMkrCvOKmZVj6Va21%2BAiBK8KKaYUGzaIRfzzE%2FG49uplEKo1Ro8azveNHBg9BXyyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJw8Es8qlOxBCpHitKtwDESaqTnaPRgspd26AtYUhb9SG%2FfJRtry4QH7CsQsUzJZNQyD9XJiLneM3PiX3BIwR%2FtqiXEGLsFKZ9J9MuJa%2F0W7TNQx2Cm0ae4M4d014PTGYGIpuw9P2glCYhlla5rfxZvVAw4J048Q3NTKc1nSRXUJN8jXPliHQ7uP91YTmt2DGsw2UTAlxKef0Pv9SkJwMSjBjRnIkEpxNry10OAsitKKEMMO9Ux66hau0Ff8NRCCZrGN4trGN9sIz5MIW4hWjJZb3uMjX7L31UvoEdlLtwSQLCczRop0BODfT0hS4b2L%2F5hOxIxc9iXzduQzpKmcqwLe7imx3HVhLsKRlSFboR6ChUe0KEXMX3KKnCKsiyiyVh5sUMWyiDMdxqZ2xZ%2FDb%2FiMOd%2Fg2607%2BEHsJPKw23n45SFzoMH%2FOcGka1CLt91d0ML%2FLK4eI2u94IAjqjb%2BeXzJLMY2ey6Gq%2FcVwal3CvCWHjNxFB9Yq7Dkr7g2wOqSMjXR%2FESZe6eCEzsv4jApSEx4B0GnRpev3gIw3YSstEPAhGzBdEQ6IhIOC9Lu4yku3wjppxc%2B6I8q4GU%2BzynL%2BLGySvG2mt7u4lkK5SBz1poWYVU95KDNYcJF0byH9g%2Fjd4MXvDo4%2B26q0fckw0brjxAY6pgHgNexb51eK2KZMmoqy9jKOG9f6BvWxn2nPE4W7CJqav8sLUCZMRyBNTMdRcF9yfw1pQr1iDImmExE%2Fb4%2FRrh9chtZfgNJbtxJRbQtVThxgFPAmBVHtHmTzsbmDj923kaeQQdanRlxw5twpaPxl6%2FeW4uCKAtUY3pVsdys%2F0UBanrpLvQ9d4LpxounJIMZEQwW%2Bllw0MbXlAcAkgGrOHh4TVp8MZV9e&X-Amz-Signature=066235bc232f19c979d7f4015df5180f3aa62a25b2b3a88c4ce9efb6cd22bbd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUOFLYUM%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFr8Jls%2FGEX4n1UwDOSmTusOwijMkrCvOKmZVj6Va21%2BAiBK8KKaYUGzaIRfzzE%2FG49uplEKo1Ro8azveNHBg9BXyyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJw8Es8qlOxBCpHitKtwDESaqTnaPRgspd26AtYUhb9SG%2FfJRtry4QH7CsQsUzJZNQyD9XJiLneM3PiX3BIwR%2FtqiXEGLsFKZ9J9MuJa%2F0W7TNQx2Cm0ae4M4d014PTGYGIpuw9P2glCYhlla5rfxZvVAw4J048Q3NTKc1nSRXUJN8jXPliHQ7uP91YTmt2DGsw2UTAlxKef0Pv9SkJwMSjBjRnIkEpxNry10OAsitKKEMMO9Ux66hau0Ff8NRCCZrGN4trGN9sIz5MIW4hWjJZb3uMjX7L31UvoEdlLtwSQLCczRop0BODfT0hS4b2L%2F5hOxIxc9iXzduQzpKmcqwLe7imx3HVhLsKRlSFboR6ChUe0KEXMX3KKnCKsiyiyVh5sUMWyiDMdxqZ2xZ%2FDb%2FiMOd%2Fg2607%2BEHsJPKw23n45SFzoMH%2FOcGka1CLt91d0ML%2FLK4eI2u94IAjqjb%2BeXzJLMY2ey6Gq%2FcVwal3CvCWHjNxFB9Yq7Dkr7g2wOqSMjXR%2FESZe6eCEzsv4jApSEx4B0GnRpev3gIw3YSstEPAhGzBdEQ6IhIOC9Lu4yku3wjppxc%2B6I8q4GU%2BzynL%2BLGySvG2mt7u4lkK5SBz1poWYVU95KDNYcJF0byH9g%2Fjd4MXvDo4%2B26q0fckw0brjxAY6pgHgNexb51eK2KZMmoqy9jKOG9f6BvWxn2nPE4W7CJqav8sLUCZMRyBNTMdRcF9yfw1pQr1iDImmExE%2Fb4%2FRrh9chtZfgNJbtxJRbQtVThxgFPAmBVHtHmTzsbmDj923kaeQQdanRlxw5twpaPxl6%2FeW4uCKAtUY3pVsdys%2F0UBanrpLvQ9d4LpxounJIMZEQwW%2Bllw0MbXlAcAkgGrOHh4TVp8MZV9e&X-Amz-Signature=706c59eaf913382933703b328f118e033e7ad98a37dffaa1ccf8f3c9a3fe9f6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUOFLYUM%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFr8Jls%2FGEX4n1UwDOSmTusOwijMkrCvOKmZVj6Va21%2BAiBK8KKaYUGzaIRfzzE%2FG49uplEKo1Ro8azveNHBg9BXyyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJw8Es8qlOxBCpHitKtwDESaqTnaPRgspd26AtYUhb9SG%2FfJRtry4QH7CsQsUzJZNQyD9XJiLneM3PiX3BIwR%2FtqiXEGLsFKZ9J9MuJa%2F0W7TNQx2Cm0ae4M4d014PTGYGIpuw9P2glCYhlla5rfxZvVAw4J048Q3NTKc1nSRXUJN8jXPliHQ7uP91YTmt2DGsw2UTAlxKef0Pv9SkJwMSjBjRnIkEpxNry10OAsitKKEMMO9Ux66hau0Ff8NRCCZrGN4trGN9sIz5MIW4hWjJZb3uMjX7L31UvoEdlLtwSQLCczRop0BODfT0hS4b2L%2F5hOxIxc9iXzduQzpKmcqwLe7imx3HVhLsKRlSFboR6ChUe0KEXMX3KKnCKsiyiyVh5sUMWyiDMdxqZ2xZ%2FDb%2FiMOd%2Fg2607%2BEHsJPKw23n45SFzoMH%2FOcGka1CLt91d0ML%2FLK4eI2u94IAjqjb%2BeXzJLMY2ey6Gq%2FcVwal3CvCWHjNxFB9Yq7Dkr7g2wOqSMjXR%2FESZe6eCEzsv4jApSEx4B0GnRpev3gIw3YSstEPAhGzBdEQ6IhIOC9Lu4yku3wjppxc%2B6I8q4GU%2BzynL%2BLGySvG2mt7u4lkK5SBz1poWYVU95KDNYcJF0byH9g%2Fjd4MXvDo4%2B26q0fckw0brjxAY6pgHgNexb51eK2KZMmoqy9jKOG9f6BvWxn2nPE4W7CJqav8sLUCZMRyBNTMdRcF9yfw1pQr1iDImmExE%2Fb4%2FRrh9chtZfgNJbtxJRbQtVThxgFPAmBVHtHmTzsbmDj923kaeQQdanRlxw5twpaPxl6%2FeW4uCKAtUY3pVsdys%2F0UBanrpLvQ9d4LpxounJIMZEQwW%2Bllw0MbXlAcAkgGrOHh4TVp8MZV9e&X-Amz-Signature=da4ba7c645dc86f450cb0798793bd0816d30fb832723e33bd334db567bc7eb1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUOFLYUM%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFr8Jls%2FGEX4n1UwDOSmTusOwijMkrCvOKmZVj6Va21%2BAiBK8KKaYUGzaIRfzzE%2FG49uplEKo1Ro8azveNHBg9BXyyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJw8Es8qlOxBCpHitKtwDESaqTnaPRgspd26AtYUhb9SG%2FfJRtry4QH7CsQsUzJZNQyD9XJiLneM3PiX3BIwR%2FtqiXEGLsFKZ9J9MuJa%2F0W7TNQx2Cm0ae4M4d014PTGYGIpuw9P2glCYhlla5rfxZvVAw4J048Q3NTKc1nSRXUJN8jXPliHQ7uP91YTmt2DGsw2UTAlxKef0Pv9SkJwMSjBjRnIkEpxNry10OAsitKKEMMO9Ux66hau0Ff8NRCCZrGN4trGN9sIz5MIW4hWjJZb3uMjX7L31UvoEdlLtwSQLCczRop0BODfT0hS4b2L%2F5hOxIxc9iXzduQzpKmcqwLe7imx3HVhLsKRlSFboR6ChUe0KEXMX3KKnCKsiyiyVh5sUMWyiDMdxqZ2xZ%2FDb%2FiMOd%2Fg2607%2BEHsJPKw23n45SFzoMH%2FOcGka1CLt91d0ML%2FLK4eI2u94IAjqjb%2BeXzJLMY2ey6Gq%2FcVwal3CvCWHjNxFB9Yq7Dkr7g2wOqSMjXR%2FESZe6eCEzsv4jApSEx4B0GnRpev3gIw3YSstEPAhGzBdEQ6IhIOC9Lu4yku3wjppxc%2B6I8q4GU%2BzynL%2BLGySvG2mt7u4lkK5SBz1poWYVU95KDNYcJF0byH9g%2Fjd4MXvDo4%2B26q0fckw0brjxAY6pgHgNexb51eK2KZMmoqy9jKOG9f6BvWxn2nPE4W7CJqav8sLUCZMRyBNTMdRcF9yfw1pQr1iDImmExE%2Fb4%2FRrh9chtZfgNJbtxJRbQtVThxgFPAmBVHtHmTzsbmDj923kaeQQdanRlxw5twpaPxl6%2FeW4uCKAtUY3pVsdys%2F0UBanrpLvQ9d4LpxounJIMZEQwW%2Bllw0MbXlAcAkgGrOHh4TVp8MZV9e&X-Amz-Signature=937d83ab0ca644177a1a8b3d66f6f6905f2e4e7d9afd8a0947105603b991f838&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
