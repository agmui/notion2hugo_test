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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QX5HIQV%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIFXobSwjoXDKmAYrOk%2Bk3qgDKucVLCY5Yh2HHDeyoou%2FAiEA5V7%2BQq4a2Qk%2F8WSKBIt9urC%2Bhi%2B%2FqaxAvrEZondMIW4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMFF2QT1rc7gt0B2yrcA7Bdru5b4EU4rDQ8mpjLid6je8JXL53I1lC3q9CyR2W1pukD03zYJo3Y30%2BFZjdi62enyaOUhWf6%2BIOOv0%2BRRiwLqFAofgAPQv6paT5WPSR9EQ95dumjX6gUioetSopHkq6NSD%2B%2BBtos5%2FCcNmBn9Xj5oxYeeCVLLfbJJ8vxYbeYnbF7JRS8sxkmCc0yPkPbDqa2o6%2F%2F1w1PlE9xoT7d6oJI7eqwMu%2FjToQTYh9Rmt1T7KgQhaXCOt0ysKO7SFKe1Csip3dI4dSAYbixfZEQIKuz6PH7NDl92j3cXPzO1JJrIAw6D9HhOOT0bOJkpQzOH8gcXq4bWFP44Uu%2FH7nf9%2FBtTlQ52WFlDs28h6yi2cuNstgSxe5Ah6H9%2FFROQeq2O1or3wWVstpvAsnhch20YLxa9B12hu1vx15Pfv5Xmfi7%2BvF%2FtYqYdEckeCogAAehHbPN21zKXF%2B%2BMqj%2FQoxK0HaesI9tMtTB7YL07BsOeUfXsHb3WIcKx1zisr0ZccFEE6ur43PZIlgIpr4oEGLJawB6PiXw6VJfLciYws%2B1AdUd6ThO4glU7eDS4DlUgaq8XC8JbhM95uTjkWEY3UsLFUEhGWE1OfsrQIj3A9gPb7Tpb4EumLaTxDbWFGwLMLbq580GOqUBqZmJVW%2Bat0EuiERsPweP7WlvXcKetwimr1O6vbzJGbReY9l2QceoczfSHAwjIGZhMGVRDh32AVYksVjvTiPyRjHotvTTVwBjO57UESCG6Y097usharVQyAmoPaj5zq1R0%2FRQenbeIjTdblZVM4T47NWq9Uk4d5AHDtyXQvwAOXhq65RdCbLKygRpBBBDU6gzgafAOk%2FlqrpcP6Ak89jrTwReGe6C&X-Amz-Signature=18bcdf7c464fefc30ff786d04eefcec84a84a2349f00414ec0bf91f7d5a90cbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OJEDBOX%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIG4mcBDN9SHzjxO3rLRmkL6DgztoKMk%2FU7DNPYNVEsCNAiBO3SiF2s5n6%2FpPwcxy6aqFy%2FHNnFwUKVBWXqG88Z5K%2FSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb5Sm%2Bw0JIfGVcIqvKtwDdkVVoWpgTTp5ZzOBKXrXjav8VVTh9OhujETPc2YPgVlz%2Bkib5DEsPTpaBKvhni%2FJY7YMJCgZaQmmfV0w6RvTGc19qN%2Bm6%2FXTLdNnfBfGjdqK%2FfKS3xS52OFpNEhzh9UEld7JkNz7yQGzsTxvTgBpNWrmjs8PPkQ2aWRJZyiu8QFSZhoMeG8r%2B8%2Bk8aDyWnTpYmRpKmbGmGQZcfTZjmbeH4OQcdbnPRmwaWypduwwaRffDhClQoPJmLTeJIuUYNArNtVWeYfHjKI%2FYuX8%2BbUbLFrZOrILTYsaYObE%2F2b2QD6mhEyo3fi9jH%2FXtzGBp8orZR8MxtCA4It3%2FE7Vzxb00BvLP0AU0Qwtcho4rq4juX2qcCNHYmXqB40rZ7vfS2uyjM3FMAJjOu8OwKXYX0WpLNH1gScoQF3tIVmyge4n7PiilRAuCWic7RLfRsKW3YfPnOqoB3lQIJ9eSGaufltf2Px7oITJaL1LJkJc0ycPlu8TFCgHpa1p0dzl8l3IhcTuovV0XkpvwhWRh97%2F9%2Fo6Q7CXZKA5CJAntcnMTUmbpiLrVEAc2HZoQnv0EUGMBTU494GVxd2q6SqAcsiJrC5%2BY2W3mqt%2ByncRqYoDU8MVz37D8Fjwj7BP4lppo5kw1%2BnnzQY6pgHZRuYpczTGmKiajcqczzorqzWfVpmgp7EeeoyINRSHCslnFXkmtSfUrHEwK1aOckKn66vRUcRG3Gm0E7NhmNC2%2Ft3N%2FFypSXZHogm9aUjmmjV1rfNuaNf7iEK4aHxBLySUJe4QAA0YsYbRo1OeOFt1fArxY1IuIvF3oMTHmvq995Q7XOVD58CrVSNT41RKrZ17a%2BEn1IqISfnO77Mr6%2BTbrMypV1I3&X-Amz-Signature=a64aecab6b8621db8c9cb4b3d5e2ab14a682d012f0aadb437cd1019e2b575055&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OJEDBOX%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIG4mcBDN9SHzjxO3rLRmkL6DgztoKMk%2FU7DNPYNVEsCNAiBO3SiF2s5n6%2FpPwcxy6aqFy%2FHNnFwUKVBWXqG88Z5K%2FSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb5Sm%2Bw0JIfGVcIqvKtwDdkVVoWpgTTp5ZzOBKXrXjav8VVTh9OhujETPc2YPgVlz%2Bkib5DEsPTpaBKvhni%2FJY7YMJCgZaQmmfV0w6RvTGc19qN%2Bm6%2FXTLdNnfBfGjdqK%2FfKS3xS52OFpNEhzh9UEld7JkNz7yQGzsTxvTgBpNWrmjs8PPkQ2aWRJZyiu8QFSZhoMeG8r%2B8%2Bk8aDyWnTpYmRpKmbGmGQZcfTZjmbeH4OQcdbnPRmwaWypduwwaRffDhClQoPJmLTeJIuUYNArNtVWeYfHjKI%2FYuX8%2BbUbLFrZOrILTYsaYObE%2F2b2QD6mhEyo3fi9jH%2FXtzGBp8orZR8MxtCA4It3%2FE7Vzxb00BvLP0AU0Qwtcho4rq4juX2qcCNHYmXqB40rZ7vfS2uyjM3FMAJjOu8OwKXYX0WpLNH1gScoQF3tIVmyge4n7PiilRAuCWic7RLfRsKW3YfPnOqoB3lQIJ9eSGaufltf2Px7oITJaL1LJkJc0ycPlu8TFCgHpa1p0dzl8l3IhcTuovV0XkpvwhWRh97%2F9%2Fo6Q7CXZKA5CJAntcnMTUmbpiLrVEAc2HZoQnv0EUGMBTU494GVxd2q6SqAcsiJrC5%2BY2W3mqt%2ByncRqYoDU8MVz37D8Fjwj7BP4lppo5kw1%2BnnzQY6pgHZRuYpczTGmKiajcqczzorqzWfVpmgp7EeeoyINRSHCslnFXkmtSfUrHEwK1aOckKn66vRUcRG3Gm0E7NhmNC2%2Ft3N%2FFypSXZHogm9aUjmmjV1rfNuaNf7iEK4aHxBLySUJe4QAA0YsYbRo1OeOFt1fArxY1IuIvF3oMTHmvq995Q7XOVD58CrVSNT41RKrZ17a%2BEn1IqISfnO77Mr6%2BTbrMypV1I3&X-Amz-Signature=203b8f294318c634f5ae5398573da77be9153d42be50dad76c087cf85996ba88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OJEDBOX%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIG4mcBDN9SHzjxO3rLRmkL6DgztoKMk%2FU7DNPYNVEsCNAiBO3SiF2s5n6%2FpPwcxy6aqFy%2FHNnFwUKVBWXqG88Z5K%2FSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb5Sm%2Bw0JIfGVcIqvKtwDdkVVoWpgTTp5ZzOBKXrXjav8VVTh9OhujETPc2YPgVlz%2Bkib5DEsPTpaBKvhni%2FJY7YMJCgZaQmmfV0w6RvTGc19qN%2Bm6%2FXTLdNnfBfGjdqK%2FfKS3xS52OFpNEhzh9UEld7JkNz7yQGzsTxvTgBpNWrmjs8PPkQ2aWRJZyiu8QFSZhoMeG8r%2B8%2Bk8aDyWnTpYmRpKmbGmGQZcfTZjmbeH4OQcdbnPRmwaWypduwwaRffDhClQoPJmLTeJIuUYNArNtVWeYfHjKI%2FYuX8%2BbUbLFrZOrILTYsaYObE%2F2b2QD6mhEyo3fi9jH%2FXtzGBp8orZR8MxtCA4It3%2FE7Vzxb00BvLP0AU0Qwtcho4rq4juX2qcCNHYmXqB40rZ7vfS2uyjM3FMAJjOu8OwKXYX0WpLNH1gScoQF3tIVmyge4n7PiilRAuCWic7RLfRsKW3YfPnOqoB3lQIJ9eSGaufltf2Px7oITJaL1LJkJc0ycPlu8TFCgHpa1p0dzl8l3IhcTuovV0XkpvwhWRh97%2F9%2Fo6Q7CXZKA5CJAntcnMTUmbpiLrVEAc2HZoQnv0EUGMBTU494GVxd2q6SqAcsiJrC5%2BY2W3mqt%2ByncRqYoDU8MVz37D8Fjwj7BP4lppo5kw1%2BnnzQY6pgHZRuYpczTGmKiajcqczzorqzWfVpmgp7EeeoyINRSHCslnFXkmtSfUrHEwK1aOckKn66vRUcRG3Gm0E7NhmNC2%2Ft3N%2FFypSXZHogm9aUjmmjV1rfNuaNf7iEK4aHxBLySUJe4QAA0YsYbRo1OeOFt1fArxY1IuIvF3oMTHmvq995Q7XOVD58CrVSNT41RKrZ17a%2BEn1IqISfnO77Mr6%2BTbrMypV1I3&X-Amz-Signature=68c3f6eb37121812d10b5aa978446ff9b9d572216858021d64c209927bcc9597&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OJEDBOX%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIG4mcBDN9SHzjxO3rLRmkL6DgztoKMk%2FU7DNPYNVEsCNAiBO3SiF2s5n6%2FpPwcxy6aqFy%2FHNnFwUKVBWXqG88Z5K%2FSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb5Sm%2Bw0JIfGVcIqvKtwDdkVVoWpgTTp5ZzOBKXrXjav8VVTh9OhujETPc2YPgVlz%2Bkib5DEsPTpaBKvhni%2FJY7YMJCgZaQmmfV0w6RvTGc19qN%2Bm6%2FXTLdNnfBfGjdqK%2FfKS3xS52OFpNEhzh9UEld7JkNz7yQGzsTxvTgBpNWrmjs8PPkQ2aWRJZyiu8QFSZhoMeG8r%2B8%2Bk8aDyWnTpYmRpKmbGmGQZcfTZjmbeH4OQcdbnPRmwaWypduwwaRffDhClQoPJmLTeJIuUYNArNtVWeYfHjKI%2FYuX8%2BbUbLFrZOrILTYsaYObE%2F2b2QD6mhEyo3fi9jH%2FXtzGBp8orZR8MxtCA4It3%2FE7Vzxb00BvLP0AU0Qwtcho4rq4juX2qcCNHYmXqB40rZ7vfS2uyjM3FMAJjOu8OwKXYX0WpLNH1gScoQF3tIVmyge4n7PiilRAuCWic7RLfRsKW3YfPnOqoB3lQIJ9eSGaufltf2Px7oITJaL1LJkJc0ycPlu8TFCgHpa1p0dzl8l3IhcTuovV0XkpvwhWRh97%2F9%2Fo6Q7CXZKA5CJAntcnMTUmbpiLrVEAc2HZoQnv0EUGMBTU494GVxd2q6SqAcsiJrC5%2BY2W3mqt%2ByncRqYoDU8MVz37D8Fjwj7BP4lppo5kw1%2BnnzQY6pgHZRuYpczTGmKiajcqczzorqzWfVpmgp7EeeoyINRSHCslnFXkmtSfUrHEwK1aOckKn66vRUcRG3Gm0E7NhmNC2%2Ft3N%2FFypSXZHogm9aUjmmjV1rfNuaNf7iEK4aHxBLySUJe4QAA0YsYbRo1OeOFt1fArxY1IuIvF3oMTHmvq995Q7XOVD58CrVSNT41RKrZ17a%2BEn1IqISfnO77Mr6%2BTbrMypV1I3&X-Amz-Signature=04b6acef321e5599ef9b08db806ce556a71dd0cc3c01a2395f5a9301e5a656a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OJEDBOX%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIG4mcBDN9SHzjxO3rLRmkL6DgztoKMk%2FU7DNPYNVEsCNAiBO3SiF2s5n6%2FpPwcxy6aqFy%2FHNnFwUKVBWXqG88Z5K%2FSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb5Sm%2Bw0JIfGVcIqvKtwDdkVVoWpgTTp5ZzOBKXrXjav8VVTh9OhujETPc2YPgVlz%2Bkib5DEsPTpaBKvhni%2FJY7YMJCgZaQmmfV0w6RvTGc19qN%2Bm6%2FXTLdNnfBfGjdqK%2FfKS3xS52OFpNEhzh9UEld7JkNz7yQGzsTxvTgBpNWrmjs8PPkQ2aWRJZyiu8QFSZhoMeG8r%2B8%2Bk8aDyWnTpYmRpKmbGmGQZcfTZjmbeH4OQcdbnPRmwaWypduwwaRffDhClQoPJmLTeJIuUYNArNtVWeYfHjKI%2FYuX8%2BbUbLFrZOrILTYsaYObE%2F2b2QD6mhEyo3fi9jH%2FXtzGBp8orZR8MxtCA4It3%2FE7Vzxb00BvLP0AU0Qwtcho4rq4juX2qcCNHYmXqB40rZ7vfS2uyjM3FMAJjOu8OwKXYX0WpLNH1gScoQF3tIVmyge4n7PiilRAuCWic7RLfRsKW3YfPnOqoB3lQIJ9eSGaufltf2Px7oITJaL1LJkJc0ycPlu8TFCgHpa1p0dzl8l3IhcTuovV0XkpvwhWRh97%2F9%2Fo6Q7CXZKA5CJAntcnMTUmbpiLrVEAc2HZoQnv0EUGMBTU494GVxd2q6SqAcsiJrC5%2BY2W3mqt%2ByncRqYoDU8MVz37D8Fjwj7BP4lppo5kw1%2BnnzQY6pgHZRuYpczTGmKiajcqczzorqzWfVpmgp7EeeoyINRSHCslnFXkmtSfUrHEwK1aOckKn66vRUcRG3Gm0E7NhmNC2%2Ft3N%2FFypSXZHogm9aUjmmjV1rfNuaNf7iEK4aHxBLySUJe4QAA0YsYbRo1OeOFt1fArxY1IuIvF3oMTHmvq995Q7XOVD58CrVSNT41RKrZ17a%2BEn1IqISfnO77Mr6%2BTbrMypV1I3&X-Amz-Signature=d8c0dcde2cc9042a9a6175eacdfab6dd460de678a0c63adfcf762393c1d9b81a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OJEDBOX%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIG4mcBDN9SHzjxO3rLRmkL6DgztoKMk%2FU7DNPYNVEsCNAiBO3SiF2s5n6%2FpPwcxy6aqFy%2FHNnFwUKVBWXqG88Z5K%2FSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb5Sm%2Bw0JIfGVcIqvKtwDdkVVoWpgTTp5ZzOBKXrXjav8VVTh9OhujETPc2YPgVlz%2Bkib5DEsPTpaBKvhni%2FJY7YMJCgZaQmmfV0w6RvTGc19qN%2Bm6%2FXTLdNnfBfGjdqK%2FfKS3xS52OFpNEhzh9UEld7JkNz7yQGzsTxvTgBpNWrmjs8PPkQ2aWRJZyiu8QFSZhoMeG8r%2B8%2Bk8aDyWnTpYmRpKmbGmGQZcfTZjmbeH4OQcdbnPRmwaWypduwwaRffDhClQoPJmLTeJIuUYNArNtVWeYfHjKI%2FYuX8%2BbUbLFrZOrILTYsaYObE%2F2b2QD6mhEyo3fi9jH%2FXtzGBp8orZR8MxtCA4It3%2FE7Vzxb00BvLP0AU0Qwtcho4rq4juX2qcCNHYmXqB40rZ7vfS2uyjM3FMAJjOu8OwKXYX0WpLNH1gScoQF3tIVmyge4n7PiilRAuCWic7RLfRsKW3YfPnOqoB3lQIJ9eSGaufltf2Px7oITJaL1LJkJc0ycPlu8TFCgHpa1p0dzl8l3IhcTuovV0XkpvwhWRh97%2F9%2Fo6Q7CXZKA5CJAntcnMTUmbpiLrVEAc2HZoQnv0EUGMBTU494GVxd2q6SqAcsiJrC5%2BY2W3mqt%2ByncRqYoDU8MVz37D8Fjwj7BP4lppo5kw1%2BnnzQY6pgHZRuYpczTGmKiajcqczzorqzWfVpmgp7EeeoyINRSHCslnFXkmtSfUrHEwK1aOckKn66vRUcRG3Gm0E7NhmNC2%2Ft3N%2FFypSXZHogm9aUjmmjV1rfNuaNf7iEK4aHxBLySUJe4QAA0YsYbRo1OeOFt1fArxY1IuIvF3oMTHmvq995Q7XOVD58CrVSNT41RKrZ17a%2BEn1IqISfnO77Mr6%2BTbrMypV1I3&X-Amz-Signature=0e37ae10c079d7dc3cbaa3c2a551fe0762f54289bb39c34773a7ae3d3199a5b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OJEDBOX%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIG4mcBDN9SHzjxO3rLRmkL6DgztoKMk%2FU7DNPYNVEsCNAiBO3SiF2s5n6%2FpPwcxy6aqFy%2FHNnFwUKVBWXqG88Z5K%2FSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb5Sm%2Bw0JIfGVcIqvKtwDdkVVoWpgTTp5ZzOBKXrXjav8VVTh9OhujETPc2YPgVlz%2Bkib5DEsPTpaBKvhni%2FJY7YMJCgZaQmmfV0w6RvTGc19qN%2Bm6%2FXTLdNnfBfGjdqK%2FfKS3xS52OFpNEhzh9UEld7JkNz7yQGzsTxvTgBpNWrmjs8PPkQ2aWRJZyiu8QFSZhoMeG8r%2B8%2Bk8aDyWnTpYmRpKmbGmGQZcfTZjmbeH4OQcdbnPRmwaWypduwwaRffDhClQoPJmLTeJIuUYNArNtVWeYfHjKI%2FYuX8%2BbUbLFrZOrILTYsaYObE%2F2b2QD6mhEyo3fi9jH%2FXtzGBp8orZR8MxtCA4It3%2FE7Vzxb00BvLP0AU0Qwtcho4rq4juX2qcCNHYmXqB40rZ7vfS2uyjM3FMAJjOu8OwKXYX0WpLNH1gScoQF3tIVmyge4n7PiilRAuCWic7RLfRsKW3YfPnOqoB3lQIJ9eSGaufltf2Px7oITJaL1LJkJc0ycPlu8TFCgHpa1p0dzl8l3IhcTuovV0XkpvwhWRh97%2F9%2Fo6Q7CXZKA5CJAntcnMTUmbpiLrVEAc2HZoQnv0EUGMBTU494GVxd2q6SqAcsiJrC5%2BY2W3mqt%2ByncRqYoDU8MVz37D8Fjwj7BP4lppo5kw1%2BnnzQY6pgHZRuYpczTGmKiajcqczzorqzWfVpmgp7EeeoyINRSHCslnFXkmtSfUrHEwK1aOckKn66vRUcRG3Gm0E7NhmNC2%2Ft3N%2FFypSXZHogm9aUjmmjV1rfNuaNf7iEK4aHxBLySUJe4QAA0YsYbRo1OeOFt1fArxY1IuIvF3oMTHmvq995Q7XOVD58CrVSNT41RKrZ17a%2BEn1IqISfnO77Mr6%2BTbrMypV1I3&X-Amz-Signature=117349ee283632b282b08e1c768fc3b20678626642e3d33431873a281cd8d099&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OJEDBOX%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIG4mcBDN9SHzjxO3rLRmkL6DgztoKMk%2FU7DNPYNVEsCNAiBO3SiF2s5n6%2FpPwcxy6aqFy%2FHNnFwUKVBWXqG88Z5K%2FSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb5Sm%2Bw0JIfGVcIqvKtwDdkVVoWpgTTp5ZzOBKXrXjav8VVTh9OhujETPc2YPgVlz%2Bkib5DEsPTpaBKvhni%2FJY7YMJCgZaQmmfV0w6RvTGc19qN%2Bm6%2FXTLdNnfBfGjdqK%2FfKS3xS52OFpNEhzh9UEld7JkNz7yQGzsTxvTgBpNWrmjs8PPkQ2aWRJZyiu8QFSZhoMeG8r%2B8%2Bk8aDyWnTpYmRpKmbGmGQZcfTZjmbeH4OQcdbnPRmwaWypduwwaRffDhClQoPJmLTeJIuUYNArNtVWeYfHjKI%2FYuX8%2BbUbLFrZOrILTYsaYObE%2F2b2QD6mhEyo3fi9jH%2FXtzGBp8orZR8MxtCA4It3%2FE7Vzxb00BvLP0AU0Qwtcho4rq4juX2qcCNHYmXqB40rZ7vfS2uyjM3FMAJjOu8OwKXYX0WpLNH1gScoQF3tIVmyge4n7PiilRAuCWic7RLfRsKW3YfPnOqoB3lQIJ9eSGaufltf2Px7oITJaL1LJkJc0ycPlu8TFCgHpa1p0dzl8l3IhcTuovV0XkpvwhWRh97%2F9%2Fo6Q7CXZKA5CJAntcnMTUmbpiLrVEAc2HZoQnv0EUGMBTU494GVxd2q6SqAcsiJrC5%2BY2W3mqt%2ByncRqYoDU8MVz37D8Fjwj7BP4lppo5kw1%2BnnzQY6pgHZRuYpczTGmKiajcqczzorqzWfVpmgp7EeeoyINRSHCslnFXkmtSfUrHEwK1aOckKn66vRUcRG3Gm0E7NhmNC2%2Ft3N%2FFypSXZHogm9aUjmmjV1rfNuaNf7iEK4aHxBLySUJe4QAA0YsYbRo1OeOFt1fArxY1IuIvF3oMTHmvq995Q7XOVD58CrVSNT41RKrZ17a%2BEn1IqISfnO77Mr6%2BTbrMypV1I3&X-Amz-Signature=24703106c18b467040e7cd38e6c92729f0475fa80437c002b4f8c8c162669413&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OJEDBOX%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIG4mcBDN9SHzjxO3rLRmkL6DgztoKMk%2FU7DNPYNVEsCNAiBO3SiF2s5n6%2FpPwcxy6aqFy%2FHNnFwUKVBWXqG88Z5K%2FSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb5Sm%2Bw0JIfGVcIqvKtwDdkVVoWpgTTp5ZzOBKXrXjav8VVTh9OhujETPc2YPgVlz%2Bkib5DEsPTpaBKvhni%2FJY7YMJCgZaQmmfV0w6RvTGc19qN%2Bm6%2FXTLdNnfBfGjdqK%2FfKS3xS52OFpNEhzh9UEld7JkNz7yQGzsTxvTgBpNWrmjs8PPkQ2aWRJZyiu8QFSZhoMeG8r%2B8%2Bk8aDyWnTpYmRpKmbGmGQZcfTZjmbeH4OQcdbnPRmwaWypduwwaRffDhClQoPJmLTeJIuUYNArNtVWeYfHjKI%2FYuX8%2BbUbLFrZOrILTYsaYObE%2F2b2QD6mhEyo3fi9jH%2FXtzGBp8orZR8MxtCA4It3%2FE7Vzxb00BvLP0AU0Qwtcho4rq4juX2qcCNHYmXqB40rZ7vfS2uyjM3FMAJjOu8OwKXYX0WpLNH1gScoQF3tIVmyge4n7PiilRAuCWic7RLfRsKW3YfPnOqoB3lQIJ9eSGaufltf2Px7oITJaL1LJkJc0ycPlu8TFCgHpa1p0dzl8l3IhcTuovV0XkpvwhWRh97%2F9%2Fo6Q7CXZKA5CJAntcnMTUmbpiLrVEAc2HZoQnv0EUGMBTU494GVxd2q6SqAcsiJrC5%2BY2W3mqt%2ByncRqYoDU8MVz37D8Fjwj7BP4lppo5kw1%2BnnzQY6pgHZRuYpczTGmKiajcqczzorqzWfVpmgp7EeeoyINRSHCslnFXkmtSfUrHEwK1aOckKn66vRUcRG3Gm0E7NhmNC2%2Ft3N%2FFypSXZHogm9aUjmmjV1rfNuaNf7iEK4aHxBLySUJe4QAA0YsYbRo1OeOFt1fArxY1IuIvF3oMTHmvq995Q7XOVD58CrVSNT41RKrZ17a%2BEn1IqISfnO77Mr6%2BTbrMypV1I3&X-Amz-Signature=723ac7a9a9a3017e8970b21798e72209ee2443be2420d7bc973cd946fd203ca8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OJEDBOX%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIG4mcBDN9SHzjxO3rLRmkL6DgztoKMk%2FU7DNPYNVEsCNAiBO3SiF2s5n6%2FpPwcxy6aqFy%2FHNnFwUKVBWXqG88Z5K%2FSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb5Sm%2Bw0JIfGVcIqvKtwDdkVVoWpgTTp5ZzOBKXrXjav8VVTh9OhujETPc2YPgVlz%2Bkib5DEsPTpaBKvhni%2FJY7YMJCgZaQmmfV0w6RvTGc19qN%2Bm6%2FXTLdNnfBfGjdqK%2FfKS3xS52OFpNEhzh9UEld7JkNz7yQGzsTxvTgBpNWrmjs8PPkQ2aWRJZyiu8QFSZhoMeG8r%2B8%2Bk8aDyWnTpYmRpKmbGmGQZcfTZjmbeH4OQcdbnPRmwaWypduwwaRffDhClQoPJmLTeJIuUYNArNtVWeYfHjKI%2FYuX8%2BbUbLFrZOrILTYsaYObE%2F2b2QD6mhEyo3fi9jH%2FXtzGBp8orZR8MxtCA4It3%2FE7Vzxb00BvLP0AU0Qwtcho4rq4juX2qcCNHYmXqB40rZ7vfS2uyjM3FMAJjOu8OwKXYX0WpLNH1gScoQF3tIVmyge4n7PiilRAuCWic7RLfRsKW3YfPnOqoB3lQIJ9eSGaufltf2Px7oITJaL1LJkJc0ycPlu8TFCgHpa1p0dzl8l3IhcTuovV0XkpvwhWRh97%2F9%2Fo6Q7CXZKA5CJAntcnMTUmbpiLrVEAc2HZoQnv0EUGMBTU494GVxd2q6SqAcsiJrC5%2BY2W3mqt%2ByncRqYoDU8MVz37D8Fjwj7BP4lppo5kw1%2BnnzQY6pgHZRuYpczTGmKiajcqczzorqzWfVpmgp7EeeoyINRSHCslnFXkmtSfUrHEwK1aOckKn66vRUcRG3Gm0E7NhmNC2%2Ft3N%2FFypSXZHogm9aUjmmjV1rfNuaNf7iEK4aHxBLySUJe4QAA0YsYbRo1OeOFt1fArxY1IuIvF3oMTHmvq995Q7XOVD58CrVSNT41RKrZ17a%2BEn1IqISfnO77Mr6%2BTbrMypV1I3&X-Amz-Signature=04b6acef321e5599ef9b08db806ce556a71dd0cc3c01a2395f5a9301e5a656a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
