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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMCJDMBH%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDKcVL%2BbhiRdQsTUY7MpSE4ReZaUIAaLGEwCG9Ev1f4XAIgD5%2Bl4ZhX3yXaR9wmngSSbxcK9or53VxqXbmx0T7pFywqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpHX%2BiSa2Ns704dIircAzvGf7dYyGYFr%2BOGlEWc3tV%2BcZKTlLoq3TvxrF1xveVJCzuvfxGIzQYlyX5MoKl7XMyJE9ZEieUnAyc7wJu6EeTfEWpeobuk6%2FCYam%2BxCjrVO%2FfsVrp24fnEzu%2BcA7INqmCfh%2FQGN9qHFtLKQniCbQuZNwYYN8pbCx76FVGTpXlYz%2Bzfe9x3zt9gL7Sm8qM%2FOC3uUEjYtL1cKpYR%2BpisVPRkskD2S61fRs4W7CPYkc66UjqyTHUEpt1%2BkBjFkbgwmbPtbDKUYunYBGjYZUtzqohMOqs4oQybU5WjKBUZiWbn16%2BZsZ92NhNoHxBWxtkDtf%2FsHu8W3%2BiKbYcGi%2FVDzVeLlCW7jbVSveVF83ODheiXylMyX3R4rS7RSLDZgbhT8lzd4T7a%2BXLFdrIhmW3tT383KNuc18eKutWyO0OPqKiLEhvsXFm%2Fi%2B2T96AdHMX3APIsI7BMdxqb8SYuyXV3eyqbcOvURIXhEyhAMaIEFqaUjDiDtaXoFWhdaoP%2FMDE1qqmxXWKJTvQ3RtrAvj1lxxb27kNhh%2Bw7tZwjeHcjnbuB0TDziXcCgA52eUbN5phtmY7HHsEIDUY%2BXd6sbAsXTSbmk3f%2FJGRdd0kNWMcxkT%2B445qmBOt%2FzWgZAeYGMMzU7ckGOqUBbLELu6OppZdKixIfChhaajOtemIidsDtoojk7pHJ4NnHYwmrnw97H7PePtplxon62v%2BTe39EriWPpJGU9F0as2IDbcnkew9Iq0lJi6O6B%2Bf%2BzTue3x6N1wlWX0uS3B3bQ1ndM1rW2uo8v41FmfYPz03qwVHCaylMNeFYcxCQFUbtNiFIgRgFMjKJccM1XWjCgLv3DhMVsCofkq7BKQehNBCl0VhH&X-Amz-Signature=b682950352e7804067afbf20fc84cf20621e85d79da02d86d90f2e355d87bc67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AE63VSP%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDei3B8WgbHw8d4uRZWKWmQH8Kzn8uPjO%2BN3LGfyoxj9QIhAI%2FGNWYu8cdjYlD4%2FAL5DVpU2kXBa8fBUqfmUl3L91NrKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz13cwbnNzQUJN5vfYq3ANYETi%2FnDowNJUbjhQ17XYan7FW%2FrkEWDEhCPAmP3gMhrsH3FP%2BcTZatQ%2B6bPa9iq1y8hR7IM27scBHrYk5p8eZVa9gAbVE1o0eBQ2UckR95JB2kjAhU33n1Jy0w5esT%2B%2BuTpOxbFzPxzLzK95sqJY6GAw6F%2FjEM3l%2B0w4hEVFx14N27YE0VedWyKJ8Jw32VIdYiN4CVnan212zl63crpy%2FuQzlHDFkL7Hmz2HZgyOgHhlbZ%2FLt1FAZvBcjW412hZR4DRlKEM8EkVsuMotONX%2BHWepNjagf03HJN8Pz7CrzDy2kyE8dEqjurvVnUg2DPJwXjjQLyScmKULg%2B7e9zxkj%2BcIUa3yvL1zn1txMeviaqG0JpCu2Ch4zGpLeo4fApZjL7TwQ74vriJOPqkBQKZ52FTRUhYDBBwzLDlrpfc7Sv1TF9piyaHFh%2Bo5XnK2Fn%2B%2FrIphu%2FQFhse%2BUd6aet%2FmizgWcixu4OQ4t6kQSQlsR6q6kHBgpxJjIFeETCR%2BIslF86KNLJm7Q0CXqlFQX61MOenOJYeQGCNOLJhOqbxaKdKSHfB4B1BpioBMvnD5F4rOAkX4tJQQPiJpU%2FJ%2FC9R9GRlmeDXxQPFAbPvy3%2FJLzfSpV45SwQ17%2FB46kaTCO1e3JBjqkAa1fu%2FrnoKTgFp6HF8HLvsiOKoNeTq7yEhDAsi%2F5cPoSNcczw8GtmuZ88eaJOgLswyHNAnua4mXrA7wXl5mIMUshJklNjyJ3oaCaiyTLmf64eQ9d23mUX7mZDMLFWaHc%2FLoIYpAZ2mcg1rGwx3VBMtJ1Wxo7NpGx7C0j9xFDQ2JLexMp%2FSnKO5pvQibp8efiXYRvZ1XLFUPtuI2%2BRonVuNZW8lBd&X-Amz-Signature=12f64a85044090f76fe94e22093b325f4a92bc60758d10d28076520a3b53f300&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AE63VSP%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDei3B8WgbHw8d4uRZWKWmQH8Kzn8uPjO%2BN3LGfyoxj9QIhAI%2FGNWYu8cdjYlD4%2FAL5DVpU2kXBa8fBUqfmUl3L91NrKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz13cwbnNzQUJN5vfYq3ANYETi%2FnDowNJUbjhQ17XYan7FW%2FrkEWDEhCPAmP3gMhrsH3FP%2BcTZatQ%2B6bPa9iq1y8hR7IM27scBHrYk5p8eZVa9gAbVE1o0eBQ2UckR95JB2kjAhU33n1Jy0w5esT%2B%2BuTpOxbFzPxzLzK95sqJY6GAw6F%2FjEM3l%2B0w4hEVFx14N27YE0VedWyKJ8Jw32VIdYiN4CVnan212zl63crpy%2FuQzlHDFkL7Hmz2HZgyOgHhlbZ%2FLt1FAZvBcjW412hZR4DRlKEM8EkVsuMotONX%2BHWepNjagf03HJN8Pz7CrzDy2kyE8dEqjurvVnUg2DPJwXjjQLyScmKULg%2B7e9zxkj%2BcIUa3yvL1zn1txMeviaqG0JpCu2Ch4zGpLeo4fApZjL7TwQ74vriJOPqkBQKZ52FTRUhYDBBwzLDlrpfc7Sv1TF9piyaHFh%2Bo5XnK2Fn%2B%2FrIphu%2FQFhse%2BUd6aet%2FmizgWcixu4OQ4t6kQSQlsR6q6kHBgpxJjIFeETCR%2BIslF86KNLJm7Q0CXqlFQX61MOenOJYeQGCNOLJhOqbxaKdKSHfB4B1BpioBMvnD5F4rOAkX4tJQQPiJpU%2FJ%2FC9R9GRlmeDXxQPFAbPvy3%2FJLzfSpV45SwQ17%2FB46kaTCO1e3JBjqkAa1fu%2FrnoKTgFp6HF8HLvsiOKoNeTq7yEhDAsi%2F5cPoSNcczw8GtmuZ88eaJOgLswyHNAnua4mXrA7wXl5mIMUshJklNjyJ3oaCaiyTLmf64eQ9d23mUX7mZDMLFWaHc%2FLoIYpAZ2mcg1rGwx3VBMtJ1Wxo7NpGx7C0j9xFDQ2JLexMp%2FSnKO5pvQibp8efiXYRvZ1XLFUPtuI2%2BRonVuNZW8lBd&X-Amz-Signature=87cb300e2c9e4825374afbad7eb088f4dab28bcf105f067d68aed45592cda9e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AE63VSP%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDei3B8WgbHw8d4uRZWKWmQH8Kzn8uPjO%2BN3LGfyoxj9QIhAI%2FGNWYu8cdjYlD4%2FAL5DVpU2kXBa8fBUqfmUl3L91NrKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz13cwbnNzQUJN5vfYq3ANYETi%2FnDowNJUbjhQ17XYan7FW%2FrkEWDEhCPAmP3gMhrsH3FP%2BcTZatQ%2B6bPa9iq1y8hR7IM27scBHrYk5p8eZVa9gAbVE1o0eBQ2UckR95JB2kjAhU33n1Jy0w5esT%2B%2BuTpOxbFzPxzLzK95sqJY6GAw6F%2FjEM3l%2B0w4hEVFx14N27YE0VedWyKJ8Jw32VIdYiN4CVnan212zl63crpy%2FuQzlHDFkL7Hmz2HZgyOgHhlbZ%2FLt1FAZvBcjW412hZR4DRlKEM8EkVsuMotONX%2BHWepNjagf03HJN8Pz7CrzDy2kyE8dEqjurvVnUg2DPJwXjjQLyScmKULg%2B7e9zxkj%2BcIUa3yvL1zn1txMeviaqG0JpCu2Ch4zGpLeo4fApZjL7TwQ74vriJOPqkBQKZ52FTRUhYDBBwzLDlrpfc7Sv1TF9piyaHFh%2Bo5XnK2Fn%2B%2FrIphu%2FQFhse%2BUd6aet%2FmizgWcixu4OQ4t6kQSQlsR6q6kHBgpxJjIFeETCR%2BIslF86KNLJm7Q0CXqlFQX61MOenOJYeQGCNOLJhOqbxaKdKSHfB4B1BpioBMvnD5F4rOAkX4tJQQPiJpU%2FJ%2FC9R9GRlmeDXxQPFAbPvy3%2FJLzfSpV45SwQ17%2FB46kaTCO1e3JBjqkAa1fu%2FrnoKTgFp6HF8HLvsiOKoNeTq7yEhDAsi%2F5cPoSNcczw8GtmuZ88eaJOgLswyHNAnua4mXrA7wXl5mIMUshJklNjyJ3oaCaiyTLmf64eQ9d23mUX7mZDMLFWaHc%2FLoIYpAZ2mcg1rGwx3VBMtJ1Wxo7NpGx7C0j9xFDQ2JLexMp%2FSnKO5pvQibp8efiXYRvZ1XLFUPtuI2%2BRonVuNZW8lBd&X-Amz-Signature=97e3d96de8097c4ed80e0287f6f16d8636850b9a17b0613dd4e75467bab6a556&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AE63VSP%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDei3B8WgbHw8d4uRZWKWmQH8Kzn8uPjO%2BN3LGfyoxj9QIhAI%2FGNWYu8cdjYlD4%2FAL5DVpU2kXBa8fBUqfmUl3L91NrKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz13cwbnNzQUJN5vfYq3ANYETi%2FnDowNJUbjhQ17XYan7FW%2FrkEWDEhCPAmP3gMhrsH3FP%2BcTZatQ%2B6bPa9iq1y8hR7IM27scBHrYk5p8eZVa9gAbVE1o0eBQ2UckR95JB2kjAhU33n1Jy0w5esT%2B%2BuTpOxbFzPxzLzK95sqJY6GAw6F%2FjEM3l%2B0w4hEVFx14N27YE0VedWyKJ8Jw32VIdYiN4CVnan212zl63crpy%2FuQzlHDFkL7Hmz2HZgyOgHhlbZ%2FLt1FAZvBcjW412hZR4DRlKEM8EkVsuMotONX%2BHWepNjagf03HJN8Pz7CrzDy2kyE8dEqjurvVnUg2DPJwXjjQLyScmKULg%2B7e9zxkj%2BcIUa3yvL1zn1txMeviaqG0JpCu2Ch4zGpLeo4fApZjL7TwQ74vriJOPqkBQKZ52FTRUhYDBBwzLDlrpfc7Sv1TF9piyaHFh%2Bo5XnK2Fn%2B%2FrIphu%2FQFhse%2BUd6aet%2FmizgWcixu4OQ4t6kQSQlsR6q6kHBgpxJjIFeETCR%2BIslF86KNLJm7Q0CXqlFQX61MOenOJYeQGCNOLJhOqbxaKdKSHfB4B1BpioBMvnD5F4rOAkX4tJQQPiJpU%2FJ%2FC9R9GRlmeDXxQPFAbPvy3%2FJLzfSpV45SwQ17%2FB46kaTCO1e3JBjqkAa1fu%2FrnoKTgFp6HF8HLvsiOKoNeTq7yEhDAsi%2F5cPoSNcczw8GtmuZ88eaJOgLswyHNAnua4mXrA7wXl5mIMUshJklNjyJ3oaCaiyTLmf64eQ9d23mUX7mZDMLFWaHc%2FLoIYpAZ2mcg1rGwx3VBMtJ1Wxo7NpGx7C0j9xFDQ2JLexMp%2FSnKO5pvQibp8efiXYRvZ1XLFUPtuI2%2BRonVuNZW8lBd&X-Amz-Signature=b57b858030f2bc2a8e0d4bff5d8f72f4bb0b7e7d11531d1a6d40a0dd65797c78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AE63VSP%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDei3B8WgbHw8d4uRZWKWmQH8Kzn8uPjO%2BN3LGfyoxj9QIhAI%2FGNWYu8cdjYlD4%2FAL5DVpU2kXBa8fBUqfmUl3L91NrKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz13cwbnNzQUJN5vfYq3ANYETi%2FnDowNJUbjhQ17XYan7FW%2FrkEWDEhCPAmP3gMhrsH3FP%2BcTZatQ%2B6bPa9iq1y8hR7IM27scBHrYk5p8eZVa9gAbVE1o0eBQ2UckR95JB2kjAhU33n1Jy0w5esT%2B%2BuTpOxbFzPxzLzK95sqJY6GAw6F%2FjEM3l%2B0w4hEVFx14N27YE0VedWyKJ8Jw32VIdYiN4CVnan212zl63crpy%2FuQzlHDFkL7Hmz2HZgyOgHhlbZ%2FLt1FAZvBcjW412hZR4DRlKEM8EkVsuMotONX%2BHWepNjagf03HJN8Pz7CrzDy2kyE8dEqjurvVnUg2DPJwXjjQLyScmKULg%2B7e9zxkj%2BcIUa3yvL1zn1txMeviaqG0JpCu2Ch4zGpLeo4fApZjL7TwQ74vriJOPqkBQKZ52FTRUhYDBBwzLDlrpfc7Sv1TF9piyaHFh%2Bo5XnK2Fn%2B%2FrIphu%2FQFhse%2BUd6aet%2FmizgWcixu4OQ4t6kQSQlsR6q6kHBgpxJjIFeETCR%2BIslF86KNLJm7Q0CXqlFQX61MOenOJYeQGCNOLJhOqbxaKdKSHfB4B1BpioBMvnD5F4rOAkX4tJQQPiJpU%2FJ%2FC9R9GRlmeDXxQPFAbPvy3%2FJLzfSpV45SwQ17%2FB46kaTCO1e3JBjqkAa1fu%2FrnoKTgFp6HF8HLvsiOKoNeTq7yEhDAsi%2F5cPoSNcczw8GtmuZ88eaJOgLswyHNAnua4mXrA7wXl5mIMUshJklNjyJ3oaCaiyTLmf64eQ9d23mUX7mZDMLFWaHc%2FLoIYpAZ2mcg1rGwx3VBMtJ1Wxo7NpGx7C0j9xFDQ2JLexMp%2FSnKO5pvQibp8efiXYRvZ1XLFUPtuI2%2BRonVuNZW8lBd&X-Amz-Signature=f951b694a76a1e28c8526efcfd3cb034ede5fefc8bae648050b066606a4219bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AE63VSP%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDei3B8WgbHw8d4uRZWKWmQH8Kzn8uPjO%2BN3LGfyoxj9QIhAI%2FGNWYu8cdjYlD4%2FAL5DVpU2kXBa8fBUqfmUl3L91NrKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz13cwbnNzQUJN5vfYq3ANYETi%2FnDowNJUbjhQ17XYan7FW%2FrkEWDEhCPAmP3gMhrsH3FP%2BcTZatQ%2B6bPa9iq1y8hR7IM27scBHrYk5p8eZVa9gAbVE1o0eBQ2UckR95JB2kjAhU33n1Jy0w5esT%2B%2BuTpOxbFzPxzLzK95sqJY6GAw6F%2FjEM3l%2B0w4hEVFx14N27YE0VedWyKJ8Jw32VIdYiN4CVnan212zl63crpy%2FuQzlHDFkL7Hmz2HZgyOgHhlbZ%2FLt1FAZvBcjW412hZR4DRlKEM8EkVsuMotONX%2BHWepNjagf03HJN8Pz7CrzDy2kyE8dEqjurvVnUg2DPJwXjjQLyScmKULg%2B7e9zxkj%2BcIUa3yvL1zn1txMeviaqG0JpCu2Ch4zGpLeo4fApZjL7TwQ74vriJOPqkBQKZ52FTRUhYDBBwzLDlrpfc7Sv1TF9piyaHFh%2Bo5XnK2Fn%2B%2FrIphu%2FQFhse%2BUd6aet%2FmizgWcixu4OQ4t6kQSQlsR6q6kHBgpxJjIFeETCR%2BIslF86KNLJm7Q0CXqlFQX61MOenOJYeQGCNOLJhOqbxaKdKSHfB4B1BpioBMvnD5F4rOAkX4tJQQPiJpU%2FJ%2FC9R9GRlmeDXxQPFAbPvy3%2FJLzfSpV45SwQ17%2FB46kaTCO1e3JBjqkAa1fu%2FrnoKTgFp6HF8HLvsiOKoNeTq7yEhDAsi%2F5cPoSNcczw8GtmuZ88eaJOgLswyHNAnua4mXrA7wXl5mIMUshJklNjyJ3oaCaiyTLmf64eQ9d23mUX7mZDMLFWaHc%2FLoIYpAZ2mcg1rGwx3VBMtJ1Wxo7NpGx7C0j9xFDQ2JLexMp%2FSnKO5pvQibp8efiXYRvZ1XLFUPtuI2%2BRonVuNZW8lBd&X-Amz-Signature=f2d776e15f207190db242356927695591496f2c8f2f1795db69b7e2b6ee1134f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AE63VSP%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDei3B8WgbHw8d4uRZWKWmQH8Kzn8uPjO%2BN3LGfyoxj9QIhAI%2FGNWYu8cdjYlD4%2FAL5DVpU2kXBa8fBUqfmUl3L91NrKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz13cwbnNzQUJN5vfYq3ANYETi%2FnDowNJUbjhQ17XYan7FW%2FrkEWDEhCPAmP3gMhrsH3FP%2BcTZatQ%2B6bPa9iq1y8hR7IM27scBHrYk5p8eZVa9gAbVE1o0eBQ2UckR95JB2kjAhU33n1Jy0w5esT%2B%2BuTpOxbFzPxzLzK95sqJY6GAw6F%2FjEM3l%2B0w4hEVFx14N27YE0VedWyKJ8Jw32VIdYiN4CVnan212zl63crpy%2FuQzlHDFkL7Hmz2HZgyOgHhlbZ%2FLt1FAZvBcjW412hZR4DRlKEM8EkVsuMotONX%2BHWepNjagf03HJN8Pz7CrzDy2kyE8dEqjurvVnUg2DPJwXjjQLyScmKULg%2B7e9zxkj%2BcIUa3yvL1zn1txMeviaqG0JpCu2Ch4zGpLeo4fApZjL7TwQ74vriJOPqkBQKZ52FTRUhYDBBwzLDlrpfc7Sv1TF9piyaHFh%2Bo5XnK2Fn%2B%2FrIphu%2FQFhse%2BUd6aet%2FmizgWcixu4OQ4t6kQSQlsR6q6kHBgpxJjIFeETCR%2BIslF86KNLJm7Q0CXqlFQX61MOenOJYeQGCNOLJhOqbxaKdKSHfB4B1BpioBMvnD5F4rOAkX4tJQQPiJpU%2FJ%2FC9R9GRlmeDXxQPFAbPvy3%2FJLzfSpV45SwQ17%2FB46kaTCO1e3JBjqkAa1fu%2FrnoKTgFp6HF8HLvsiOKoNeTq7yEhDAsi%2F5cPoSNcczw8GtmuZ88eaJOgLswyHNAnua4mXrA7wXl5mIMUshJklNjyJ3oaCaiyTLmf64eQ9d23mUX7mZDMLFWaHc%2FLoIYpAZ2mcg1rGwx3VBMtJ1Wxo7NpGx7C0j9xFDQ2JLexMp%2FSnKO5pvQibp8efiXYRvZ1XLFUPtuI2%2BRonVuNZW8lBd&X-Amz-Signature=23695fcfcfa53d4235cc9790fc5d1745fc4d7ff1dd43a85b5c303fd304f729ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AE63VSP%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDei3B8WgbHw8d4uRZWKWmQH8Kzn8uPjO%2BN3LGfyoxj9QIhAI%2FGNWYu8cdjYlD4%2FAL5DVpU2kXBa8fBUqfmUl3L91NrKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz13cwbnNzQUJN5vfYq3ANYETi%2FnDowNJUbjhQ17XYan7FW%2FrkEWDEhCPAmP3gMhrsH3FP%2BcTZatQ%2B6bPa9iq1y8hR7IM27scBHrYk5p8eZVa9gAbVE1o0eBQ2UckR95JB2kjAhU33n1Jy0w5esT%2B%2BuTpOxbFzPxzLzK95sqJY6GAw6F%2FjEM3l%2B0w4hEVFx14N27YE0VedWyKJ8Jw32VIdYiN4CVnan212zl63crpy%2FuQzlHDFkL7Hmz2HZgyOgHhlbZ%2FLt1FAZvBcjW412hZR4DRlKEM8EkVsuMotONX%2BHWepNjagf03HJN8Pz7CrzDy2kyE8dEqjurvVnUg2DPJwXjjQLyScmKULg%2B7e9zxkj%2BcIUa3yvL1zn1txMeviaqG0JpCu2Ch4zGpLeo4fApZjL7TwQ74vriJOPqkBQKZ52FTRUhYDBBwzLDlrpfc7Sv1TF9piyaHFh%2Bo5XnK2Fn%2B%2FrIphu%2FQFhse%2BUd6aet%2FmizgWcixu4OQ4t6kQSQlsR6q6kHBgpxJjIFeETCR%2BIslF86KNLJm7Q0CXqlFQX61MOenOJYeQGCNOLJhOqbxaKdKSHfB4B1BpioBMvnD5F4rOAkX4tJQQPiJpU%2FJ%2FC9R9GRlmeDXxQPFAbPvy3%2FJLzfSpV45SwQ17%2FB46kaTCO1e3JBjqkAa1fu%2FrnoKTgFp6HF8HLvsiOKoNeTq7yEhDAsi%2F5cPoSNcczw8GtmuZ88eaJOgLswyHNAnua4mXrA7wXl5mIMUshJklNjyJ3oaCaiyTLmf64eQ9d23mUX7mZDMLFWaHc%2FLoIYpAZ2mcg1rGwx3VBMtJ1Wxo7NpGx7C0j9xFDQ2JLexMp%2FSnKO5pvQibp8efiXYRvZ1XLFUPtuI2%2BRonVuNZW8lBd&X-Amz-Signature=6832abbd3c6d409e68fef07641ce6fd4a3e03a32b6dcd3639d0fd042ba274020&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AE63VSP%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDei3B8WgbHw8d4uRZWKWmQH8Kzn8uPjO%2BN3LGfyoxj9QIhAI%2FGNWYu8cdjYlD4%2FAL5DVpU2kXBa8fBUqfmUl3L91NrKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz13cwbnNzQUJN5vfYq3ANYETi%2FnDowNJUbjhQ17XYan7FW%2FrkEWDEhCPAmP3gMhrsH3FP%2BcTZatQ%2B6bPa9iq1y8hR7IM27scBHrYk5p8eZVa9gAbVE1o0eBQ2UckR95JB2kjAhU33n1Jy0w5esT%2B%2BuTpOxbFzPxzLzK95sqJY6GAw6F%2FjEM3l%2B0w4hEVFx14N27YE0VedWyKJ8Jw32VIdYiN4CVnan212zl63crpy%2FuQzlHDFkL7Hmz2HZgyOgHhlbZ%2FLt1FAZvBcjW412hZR4DRlKEM8EkVsuMotONX%2BHWepNjagf03HJN8Pz7CrzDy2kyE8dEqjurvVnUg2DPJwXjjQLyScmKULg%2B7e9zxkj%2BcIUa3yvL1zn1txMeviaqG0JpCu2Ch4zGpLeo4fApZjL7TwQ74vriJOPqkBQKZ52FTRUhYDBBwzLDlrpfc7Sv1TF9piyaHFh%2Bo5XnK2Fn%2B%2FrIphu%2FQFhse%2BUd6aet%2FmizgWcixu4OQ4t6kQSQlsR6q6kHBgpxJjIFeETCR%2BIslF86KNLJm7Q0CXqlFQX61MOenOJYeQGCNOLJhOqbxaKdKSHfB4B1BpioBMvnD5F4rOAkX4tJQQPiJpU%2FJ%2FC9R9GRlmeDXxQPFAbPvy3%2FJLzfSpV45SwQ17%2FB46kaTCO1e3JBjqkAa1fu%2FrnoKTgFp6HF8HLvsiOKoNeTq7yEhDAsi%2F5cPoSNcczw8GtmuZ88eaJOgLswyHNAnua4mXrA7wXl5mIMUshJklNjyJ3oaCaiyTLmf64eQ9d23mUX7mZDMLFWaHc%2FLoIYpAZ2mcg1rGwx3VBMtJ1Wxo7NpGx7C0j9xFDQ2JLexMp%2FSnKO5pvQibp8efiXYRvZ1XLFUPtuI2%2BRonVuNZW8lBd&X-Amz-Signature=fd26d638d6baf66dc70685d37f19e7c3438a6999d1775cbcbe0b72f9fa6b518c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AE63VSP%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDei3B8WgbHw8d4uRZWKWmQH8Kzn8uPjO%2BN3LGfyoxj9QIhAI%2FGNWYu8cdjYlD4%2FAL5DVpU2kXBa8fBUqfmUl3L91NrKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz13cwbnNzQUJN5vfYq3ANYETi%2FnDowNJUbjhQ17XYan7FW%2FrkEWDEhCPAmP3gMhrsH3FP%2BcTZatQ%2B6bPa9iq1y8hR7IM27scBHrYk5p8eZVa9gAbVE1o0eBQ2UckR95JB2kjAhU33n1Jy0w5esT%2B%2BuTpOxbFzPxzLzK95sqJY6GAw6F%2FjEM3l%2B0w4hEVFx14N27YE0VedWyKJ8Jw32VIdYiN4CVnan212zl63crpy%2FuQzlHDFkL7Hmz2HZgyOgHhlbZ%2FLt1FAZvBcjW412hZR4DRlKEM8EkVsuMotONX%2BHWepNjagf03HJN8Pz7CrzDy2kyE8dEqjurvVnUg2DPJwXjjQLyScmKULg%2B7e9zxkj%2BcIUa3yvL1zn1txMeviaqG0JpCu2Ch4zGpLeo4fApZjL7TwQ74vriJOPqkBQKZ52FTRUhYDBBwzLDlrpfc7Sv1TF9piyaHFh%2Bo5XnK2Fn%2B%2FrIphu%2FQFhse%2BUd6aet%2FmizgWcixu4OQ4t6kQSQlsR6q6kHBgpxJjIFeETCR%2BIslF86KNLJm7Q0CXqlFQX61MOenOJYeQGCNOLJhOqbxaKdKSHfB4B1BpioBMvnD5F4rOAkX4tJQQPiJpU%2FJ%2FC9R9GRlmeDXxQPFAbPvy3%2FJLzfSpV45SwQ17%2FB46kaTCO1e3JBjqkAa1fu%2FrnoKTgFp6HF8HLvsiOKoNeTq7yEhDAsi%2F5cPoSNcczw8GtmuZ88eaJOgLswyHNAnua4mXrA7wXl5mIMUshJklNjyJ3oaCaiyTLmf64eQ9d23mUX7mZDMLFWaHc%2FLoIYpAZ2mcg1rGwx3VBMtJ1Wxo7NpGx7C0j9xFDQ2JLexMp%2FSnKO5pvQibp8efiXYRvZ1XLFUPtuI2%2BRonVuNZW8lBd&X-Amz-Signature=b722560c3ed5ce50273fd98add986c248ca2116efd089c8e86eb20f9e1bcef74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
