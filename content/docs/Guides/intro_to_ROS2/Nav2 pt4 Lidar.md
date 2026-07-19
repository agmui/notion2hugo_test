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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVJXBDI7%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKI7DJhsguTyqIooDV9b544HYONho6zo3bxIJXwZFgBgIhALj9GOKIQNhLiuz5Fjg8HRiKydQLC0M3EG8HyyLSalu6KogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOvCzQ%2B9S3zF487lcq3AMp%2BV9oPoKMof0trItOjmnJaqbYnaWEuXrjVT%2BPXo1AQjhzmlI2FwM%2FOLvA8Ix5ynH1jGKDcUxYZmBP9oVY4x%2FSqUCBbZUvwyD7AhxuNTzr%2FyFzXx%2Bft4wAc58H%2FsfLcSwKDv8CYfFMX9SOO%2BcVLx73VsiJv5lHY65dctpfSXVYFwhFWqbVRuMyrMKfbs6dqwLQQ2L9iU%2FBtUhOUN4RFOM5fzh0FHSZ%2B8bA1zKi63y3B3hcJC4po9nMMPI1aI6n8Z41JwWiETDz76pgZu4zQs0SipoOjVUQpWFa6EEeiSfLyqGuMvkaTCm%2BU4g2NuXUfVNJK35OQypML8hWZQqOY145Rkap0%2FOfwFKfl9ypraXI8myBkozWsPq9TEpjhPChX4rQ4GxYv0%2B1ckokKasQ4heELiggL5mFuJSgncxdBolxqU3FgwVhPNJght14%2BqtFWf1QfiejDjK8BjJiX6CVFDgYGFCZ6CwxbA5pnxeiF2e3h4HSeeHNt1zKNpVrnhWT0p3Ip64vKBNsCwPnnb0EKqJT2IQESGNhzFPUtqPxtn5V6Q1vRzKyBHffg%2B1HIkblVnIk1a%2FI%2FMWcL3MOu2xrUFP%2FPdh6MJt4Xljlisv8J35nQe3FVbLl%2Bksm%2FjlWijCb2fDSBjqkAZbBsLwYelzGEcsDcxg0sdYb9muwHQialy8kEyI%2FQtrfPo0FHidZ5Jl4EmJ1dWQIikCxg28l0%2FH8jctnIJViUD9BV3AvQzQZ%2FnHvWKLTpY8Mer1BTRm9eq3fh%2BxuWvy1DIMeAFgRqzwmNwgvugd3xHrviG95WQjG%2FpEDSKnWm9AhM9yrSd3Ti8f92ylXB0NBavufnta2asy4P8zVT%2F7%2BeXIaCSJX&X-Amz-Signature=38f1cb3884481e513488201f91387d61fb3b2c7471e2b301f55bcd408f9fdb4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U42N6U6B%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBNlqIxtueTHSmSy8kHrs0KqrF1Xe0ixwmWXCqoAGNgwIgU0po7iERn2B5tn2i59CTFSeCkmt3KSMBdMnicPAeJXkqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPMg7FoaxcezgRLfACrcA52Jl5kTNt6d7TJGEi5BQfxHMpZ4ol5mwJb5QiYHIz4XKGllQYQVnL4plqZ%2F5ISvHgoqzXHeo3OREzN3oQvlG1GgtJRL9ME91CdjvdCQac2TrTX0Liaa9ntj4z%2BbysMhzq7FqmhoxpyX4ESh3zvH5Sb7aWJUXLcuKOk95V%2FAPLsMB%2FfH2pJmUtTt14MFuZWPnYnvfzVesVVWCAcy5P5JvJ1NX%2FOSUtTyBAkMhzaw6Z8KlvK2qJEYcO2gI%2BtdnXsJtbdvBgbtjnZpuH3QBi%2FLu3qPZNb0PoExqjnIUh4%2FiQwohqjGsbUVyMe87HMaJ7XLp96tzpf9FP0Cu7CQHdH%2BrZFM%2BINBgPH8dzPGi3NGY4a0jcxvG7NUO7%2BTiOjILTh850N3nQo1ML4e0OMC88xuWpK%2FkTSXXrD5mXWbbDDQzAcBZz5ooTnPB8uDM319MtZcckDvp%2FqyZDp6J4v0CmruZm1NXGlB6ueUrFacGWhVTTjGBc4PGjPxhS%2F%2FK88UuNjorsLcF%2Fx0ZXZ2HOOKPppyhOTkO5uhHFRKclnh4krGHpXiQ%2Fl7p1PJHGtDX4Je6i%2FOBZCAhMYtVH4aiSCGTV1urbjSHSDkv0SF1PF%2FTLtfIsy%2Bj30aXO7lM4j9iZxHMPPV8NIGOqUBEmlhQm28%2FuInguKhgcB6YmJH1Gger4VgAdfHUSoONXKy%2FiR%2BOtM7RYVNvlzBnMeD%2BBrcKN8l5bkqKXFHXCxIIWqTcU9RTyjRULsX4hkie%2BkdOiVD6qv%2BO2E2b7FwLKHDIFqdgLQtHmBUSZXaUbi%2FtNvhjh5HH4wk5NX1gWn1gRPg4iOvbcoxWOcfvcgpWNruuIUV3tWiXwiU7xyL%2FSX9BCqHUjkj&X-Amz-Signature=9629c6136b9a82b79c924318e6cd7b908f88f4d7cb42f4afd23582b6a629ef7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U42N6U6B%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBNlqIxtueTHSmSy8kHrs0KqrF1Xe0ixwmWXCqoAGNgwIgU0po7iERn2B5tn2i59CTFSeCkmt3KSMBdMnicPAeJXkqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPMg7FoaxcezgRLfACrcA52Jl5kTNt6d7TJGEi5BQfxHMpZ4ol5mwJb5QiYHIz4XKGllQYQVnL4plqZ%2F5ISvHgoqzXHeo3OREzN3oQvlG1GgtJRL9ME91CdjvdCQac2TrTX0Liaa9ntj4z%2BbysMhzq7FqmhoxpyX4ESh3zvH5Sb7aWJUXLcuKOk95V%2FAPLsMB%2FfH2pJmUtTt14MFuZWPnYnvfzVesVVWCAcy5P5JvJ1NX%2FOSUtTyBAkMhzaw6Z8KlvK2qJEYcO2gI%2BtdnXsJtbdvBgbtjnZpuH3QBi%2FLu3qPZNb0PoExqjnIUh4%2FiQwohqjGsbUVyMe87HMaJ7XLp96tzpf9FP0Cu7CQHdH%2BrZFM%2BINBgPH8dzPGi3NGY4a0jcxvG7NUO7%2BTiOjILTh850N3nQo1ML4e0OMC88xuWpK%2FkTSXXrD5mXWbbDDQzAcBZz5ooTnPB8uDM319MtZcckDvp%2FqyZDp6J4v0CmruZm1NXGlB6ueUrFacGWhVTTjGBc4PGjPxhS%2F%2FK88UuNjorsLcF%2Fx0ZXZ2HOOKPppyhOTkO5uhHFRKclnh4krGHpXiQ%2Fl7p1PJHGtDX4Je6i%2FOBZCAhMYtVH4aiSCGTV1urbjSHSDkv0SF1PF%2FTLtfIsy%2Bj30aXO7lM4j9iZxHMPPV8NIGOqUBEmlhQm28%2FuInguKhgcB6YmJH1Gger4VgAdfHUSoONXKy%2FiR%2BOtM7RYVNvlzBnMeD%2BBrcKN8l5bkqKXFHXCxIIWqTcU9RTyjRULsX4hkie%2BkdOiVD6qv%2BO2E2b7FwLKHDIFqdgLQtHmBUSZXaUbi%2FtNvhjh5HH4wk5NX1gWn1gRPg4iOvbcoxWOcfvcgpWNruuIUV3tWiXwiU7xyL%2FSX9BCqHUjkj&X-Amz-Signature=6829773b39f37c2a4aa5910524ee3f24725f3b6999f370affb309406f45b55b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U42N6U6B%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBNlqIxtueTHSmSy8kHrs0KqrF1Xe0ixwmWXCqoAGNgwIgU0po7iERn2B5tn2i59CTFSeCkmt3KSMBdMnicPAeJXkqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPMg7FoaxcezgRLfACrcA52Jl5kTNt6d7TJGEi5BQfxHMpZ4ol5mwJb5QiYHIz4XKGllQYQVnL4plqZ%2F5ISvHgoqzXHeo3OREzN3oQvlG1GgtJRL9ME91CdjvdCQac2TrTX0Liaa9ntj4z%2BbysMhzq7FqmhoxpyX4ESh3zvH5Sb7aWJUXLcuKOk95V%2FAPLsMB%2FfH2pJmUtTt14MFuZWPnYnvfzVesVVWCAcy5P5JvJ1NX%2FOSUtTyBAkMhzaw6Z8KlvK2qJEYcO2gI%2BtdnXsJtbdvBgbtjnZpuH3QBi%2FLu3qPZNb0PoExqjnIUh4%2FiQwohqjGsbUVyMe87HMaJ7XLp96tzpf9FP0Cu7CQHdH%2BrZFM%2BINBgPH8dzPGi3NGY4a0jcxvG7NUO7%2BTiOjILTh850N3nQo1ML4e0OMC88xuWpK%2FkTSXXrD5mXWbbDDQzAcBZz5ooTnPB8uDM319MtZcckDvp%2FqyZDp6J4v0CmruZm1NXGlB6ueUrFacGWhVTTjGBc4PGjPxhS%2F%2FK88UuNjorsLcF%2Fx0ZXZ2HOOKPppyhOTkO5uhHFRKclnh4krGHpXiQ%2Fl7p1PJHGtDX4Je6i%2FOBZCAhMYtVH4aiSCGTV1urbjSHSDkv0SF1PF%2FTLtfIsy%2Bj30aXO7lM4j9iZxHMPPV8NIGOqUBEmlhQm28%2FuInguKhgcB6YmJH1Gger4VgAdfHUSoONXKy%2FiR%2BOtM7RYVNvlzBnMeD%2BBrcKN8l5bkqKXFHXCxIIWqTcU9RTyjRULsX4hkie%2BkdOiVD6qv%2BO2E2b7FwLKHDIFqdgLQtHmBUSZXaUbi%2FtNvhjh5HH4wk5NX1gWn1gRPg4iOvbcoxWOcfvcgpWNruuIUV3tWiXwiU7xyL%2FSX9BCqHUjkj&X-Amz-Signature=b79090e3492be5fe3cb5acc286c34166020cc5a505f8eabb805e66614c4fee16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U42N6U6B%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBNlqIxtueTHSmSy8kHrs0KqrF1Xe0ixwmWXCqoAGNgwIgU0po7iERn2B5tn2i59CTFSeCkmt3KSMBdMnicPAeJXkqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPMg7FoaxcezgRLfACrcA52Jl5kTNt6d7TJGEi5BQfxHMpZ4ol5mwJb5QiYHIz4XKGllQYQVnL4plqZ%2F5ISvHgoqzXHeo3OREzN3oQvlG1GgtJRL9ME91CdjvdCQac2TrTX0Liaa9ntj4z%2BbysMhzq7FqmhoxpyX4ESh3zvH5Sb7aWJUXLcuKOk95V%2FAPLsMB%2FfH2pJmUtTt14MFuZWPnYnvfzVesVVWCAcy5P5JvJ1NX%2FOSUtTyBAkMhzaw6Z8KlvK2qJEYcO2gI%2BtdnXsJtbdvBgbtjnZpuH3QBi%2FLu3qPZNb0PoExqjnIUh4%2FiQwohqjGsbUVyMe87HMaJ7XLp96tzpf9FP0Cu7CQHdH%2BrZFM%2BINBgPH8dzPGi3NGY4a0jcxvG7NUO7%2BTiOjILTh850N3nQo1ML4e0OMC88xuWpK%2FkTSXXrD5mXWbbDDQzAcBZz5ooTnPB8uDM319MtZcckDvp%2FqyZDp6J4v0CmruZm1NXGlB6ueUrFacGWhVTTjGBc4PGjPxhS%2F%2FK88UuNjorsLcF%2Fx0ZXZ2HOOKPppyhOTkO5uhHFRKclnh4krGHpXiQ%2Fl7p1PJHGtDX4Je6i%2FOBZCAhMYtVH4aiSCGTV1urbjSHSDkv0SF1PF%2FTLtfIsy%2Bj30aXO7lM4j9iZxHMPPV8NIGOqUBEmlhQm28%2FuInguKhgcB6YmJH1Gger4VgAdfHUSoONXKy%2FiR%2BOtM7RYVNvlzBnMeD%2BBrcKN8l5bkqKXFHXCxIIWqTcU9RTyjRULsX4hkie%2BkdOiVD6qv%2BO2E2b7FwLKHDIFqdgLQtHmBUSZXaUbi%2FtNvhjh5HH4wk5NX1gWn1gRPg4iOvbcoxWOcfvcgpWNruuIUV3tWiXwiU7xyL%2FSX9BCqHUjkj&X-Amz-Signature=9d235e7510e4e68bdf592315092580269f3babcc471531900141593ff08d92db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U42N6U6B%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBNlqIxtueTHSmSy8kHrs0KqrF1Xe0ixwmWXCqoAGNgwIgU0po7iERn2B5tn2i59CTFSeCkmt3KSMBdMnicPAeJXkqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPMg7FoaxcezgRLfACrcA52Jl5kTNt6d7TJGEi5BQfxHMpZ4ol5mwJb5QiYHIz4XKGllQYQVnL4plqZ%2F5ISvHgoqzXHeo3OREzN3oQvlG1GgtJRL9ME91CdjvdCQac2TrTX0Liaa9ntj4z%2BbysMhzq7FqmhoxpyX4ESh3zvH5Sb7aWJUXLcuKOk95V%2FAPLsMB%2FfH2pJmUtTt14MFuZWPnYnvfzVesVVWCAcy5P5JvJ1NX%2FOSUtTyBAkMhzaw6Z8KlvK2qJEYcO2gI%2BtdnXsJtbdvBgbtjnZpuH3QBi%2FLu3qPZNb0PoExqjnIUh4%2FiQwohqjGsbUVyMe87HMaJ7XLp96tzpf9FP0Cu7CQHdH%2BrZFM%2BINBgPH8dzPGi3NGY4a0jcxvG7NUO7%2BTiOjILTh850N3nQo1ML4e0OMC88xuWpK%2FkTSXXrD5mXWbbDDQzAcBZz5ooTnPB8uDM319MtZcckDvp%2FqyZDp6J4v0CmruZm1NXGlB6ueUrFacGWhVTTjGBc4PGjPxhS%2F%2FK88UuNjorsLcF%2Fx0ZXZ2HOOKPppyhOTkO5uhHFRKclnh4krGHpXiQ%2Fl7p1PJHGtDX4Je6i%2FOBZCAhMYtVH4aiSCGTV1urbjSHSDkv0SF1PF%2FTLtfIsy%2Bj30aXO7lM4j9iZxHMPPV8NIGOqUBEmlhQm28%2FuInguKhgcB6YmJH1Gger4VgAdfHUSoONXKy%2FiR%2BOtM7RYVNvlzBnMeD%2BBrcKN8l5bkqKXFHXCxIIWqTcU9RTyjRULsX4hkie%2BkdOiVD6qv%2BO2E2b7FwLKHDIFqdgLQtHmBUSZXaUbi%2FtNvhjh5HH4wk5NX1gWn1gRPg4iOvbcoxWOcfvcgpWNruuIUV3tWiXwiU7xyL%2FSX9BCqHUjkj&X-Amz-Signature=b3dbaa280f934c7afbde1bec1dd16d0c6f0bdb4dfac8e710fa76971f1b3cdbb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U42N6U6B%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBNlqIxtueTHSmSy8kHrs0KqrF1Xe0ixwmWXCqoAGNgwIgU0po7iERn2B5tn2i59CTFSeCkmt3KSMBdMnicPAeJXkqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPMg7FoaxcezgRLfACrcA52Jl5kTNt6d7TJGEi5BQfxHMpZ4ol5mwJb5QiYHIz4XKGllQYQVnL4plqZ%2F5ISvHgoqzXHeo3OREzN3oQvlG1GgtJRL9ME91CdjvdCQac2TrTX0Liaa9ntj4z%2BbysMhzq7FqmhoxpyX4ESh3zvH5Sb7aWJUXLcuKOk95V%2FAPLsMB%2FfH2pJmUtTt14MFuZWPnYnvfzVesVVWCAcy5P5JvJ1NX%2FOSUtTyBAkMhzaw6Z8KlvK2qJEYcO2gI%2BtdnXsJtbdvBgbtjnZpuH3QBi%2FLu3qPZNb0PoExqjnIUh4%2FiQwohqjGsbUVyMe87HMaJ7XLp96tzpf9FP0Cu7CQHdH%2BrZFM%2BINBgPH8dzPGi3NGY4a0jcxvG7NUO7%2BTiOjILTh850N3nQo1ML4e0OMC88xuWpK%2FkTSXXrD5mXWbbDDQzAcBZz5ooTnPB8uDM319MtZcckDvp%2FqyZDp6J4v0CmruZm1NXGlB6ueUrFacGWhVTTjGBc4PGjPxhS%2F%2FK88UuNjorsLcF%2Fx0ZXZ2HOOKPppyhOTkO5uhHFRKclnh4krGHpXiQ%2Fl7p1PJHGtDX4Je6i%2FOBZCAhMYtVH4aiSCGTV1urbjSHSDkv0SF1PF%2FTLtfIsy%2Bj30aXO7lM4j9iZxHMPPV8NIGOqUBEmlhQm28%2FuInguKhgcB6YmJH1Gger4VgAdfHUSoONXKy%2FiR%2BOtM7RYVNvlzBnMeD%2BBrcKN8l5bkqKXFHXCxIIWqTcU9RTyjRULsX4hkie%2BkdOiVD6qv%2BO2E2b7FwLKHDIFqdgLQtHmBUSZXaUbi%2FtNvhjh5HH4wk5NX1gWn1gRPg4iOvbcoxWOcfvcgpWNruuIUV3tWiXwiU7xyL%2FSX9BCqHUjkj&X-Amz-Signature=d31dd08c088acad6f1109a1169896d062526f42aea0e7f8c28c34121e709029c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U42N6U6B%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBNlqIxtueTHSmSy8kHrs0KqrF1Xe0ixwmWXCqoAGNgwIgU0po7iERn2B5tn2i59CTFSeCkmt3KSMBdMnicPAeJXkqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPMg7FoaxcezgRLfACrcA52Jl5kTNt6d7TJGEi5BQfxHMpZ4ol5mwJb5QiYHIz4XKGllQYQVnL4plqZ%2F5ISvHgoqzXHeo3OREzN3oQvlG1GgtJRL9ME91CdjvdCQac2TrTX0Liaa9ntj4z%2BbysMhzq7FqmhoxpyX4ESh3zvH5Sb7aWJUXLcuKOk95V%2FAPLsMB%2FfH2pJmUtTt14MFuZWPnYnvfzVesVVWCAcy5P5JvJ1NX%2FOSUtTyBAkMhzaw6Z8KlvK2qJEYcO2gI%2BtdnXsJtbdvBgbtjnZpuH3QBi%2FLu3qPZNb0PoExqjnIUh4%2FiQwohqjGsbUVyMe87HMaJ7XLp96tzpf9FP0Cu7CQHdH%2BrZFM%2BINBgPH8dzPGi3NGY4a0jcxvG7NUO7%2BTiOjILTh850N3nQo1ML4e0OMC88xuWpK%2FkTSXXrD5mXWbbDDQzAcBZz5ooTnPB8uDM319MtZcckDvp%2FqyZDp6J4v0CmruZm1NXGlB6ueUrFacGWhVTTjGBc4PGjPxhS%2F%2FK88UuNjorsLcF%2Fx0ZXZ2HOOKPppyhOTkO5uhHFRKclnh4krGHpXiQ%2Fl7p1PJHGtDX4Je6i%2FOBZCAhMYtVH4aiSCGTV1urbjSHSDkv0SF1PF%2FTLtfIsy%2Bj30aXO7lM4j9iZxHMPPV8NIGOqUBEmlhQm28%2FuInguKhgcB6YmJH1Gger4VgAdfHUSoONXKy%2FiR%2BOtM7RYVNvlzBnMeD%2BBrcKN8l5bkqKXFHXCxIIWqTcU9RTyjRULsX4hkie%2BkdOiVD6qv%2BO2E2b7FwLKHDIFqdgLQtHmBUSZXaUbi%2FtNvhjh5HH4wk5NX1gWn1gRPg4iOvbcoxWOcfvcgpWNruuIUV3tWiXwiU7xyL%2FSX9BCqHUjkj&X-Amz-Signature=76a80e313bfaa600827afb54b2a2b5d2cf11cf4459396c6a480576e4742e0840&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U42N6U6B%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBNlqIxtueTHSmSy8kHrs0KqrF1Xe0ixwmWXCqoAGNgwIgU0po7iERn2B5tn2i59CTFSeCkmt3KSMBdMnicPAeJXkqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPMg7FoaxcezgRLfACrcA52Jl5kTNt6d7TJGEi5BQfxHMpZ4ol5mwJb5QiYHIz4XKGllQYQVnL4plqZ%2F5ISvHgoqzXHeo3OREzN3oQvlG1GgtJRL9ME91CdjvdCQac2TrTX0Liaa9ntj4z%2BbysMhzq7FqmhoxpyX4ESh3zvH5Sb7aWJUXLcuKOk95V%2FAPLsMB%2FfH2pJmUtTt14MFuZWPnYnvfzVesVVWCAcy5P5JvJ1NX%2FOSUtTyBAkMhzaw6Z8KlvK2qJEYcO2gI%2BtdnXsJtbdvBgbtjnZpuH3QBi%2FLu3qPZNb0PoExqjnIUh4%2FiQwohqjGsbUVyMe87HMaJ7XLp96tzpf9FP0Cu7CQHdH%2BrZFM%2BINBgPH8dzPGi3NGY4a0jcxvG7NUO7%2BTiOjILTh850N3nQo1ML4e0OMC88xuWpK%2FkTSXXrD5mXWbbDDQzAcBZz5ooTnPB8uDM319MtZcckDvp%2FqyZDp6J4v0CmruZm1NXGlB6ueUrFacGWhVTTjGBc4PGjPxhS%2F%2FK88UuNjorsLcF%2Fx0ZXZ2HOOKPppyhOTkO5uhHFRKclnh4krGHpXiQ%2Fl7p1PJHGtDX4Je6i%2FOBZCAhMYtVH4aiSCGTV1urbjSHSDkv0SF1PF%2FTLtfIsy%2Bj30aXO7lM4j9iZxHMPPV8NIGOqUBEmlhQm28%2FuInguKhgcB6YmJH1Gger4VgAdfHUSoONXKy%2FiR%2BOtM7RYVNvlzBnMeD%2BBrcKN8l5bkqKXFHXCxIIWqTcU9RTyjRULsX4hkie%2BkdOiVD6qv%2BO2E2b7FwLKHDIFqdgLQtHmBUSZXaUbi%2FtNvhjh5HH4wk5NX1gWn1gRPg4iOvbcoxWOcfvcgpWNruuIUV3tWiXwiU7xyL%2FSX9BCqHUjkj&X-Amz-Signature=365409cce3ae0051e22a92b3db2ab33299dac28693fa8ab2de9eeaad3001951e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U42N6U6B%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBNlqIxtueTHSmSy8kHrs0KqrF1Xe0ixwmWXCqoAGNgwIgU0po7iERn2B5tn2i59CTFSeCkmt3KSMBdMnicPAeJXkqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPMg7FoaxcezgRLfACrcA52Jl5kTNt6d7TJGEi5BQfxHMpZ4ol5mwJb5QiYHIz4XKGllQYQVnL4plqZ%2F5ISvHgoqzXHeo3OREzN3oQvlG1GgtJRL9ME91CdjvdCQac2TrTX0Liaa9ntj4z%2BbysMhzq7FqmhoxpyX4ESh3zvH5Sb7aWJUXLcuKOk95V%2FAPLsMB%2FfH2pJmUtTt14MFuZWPnYnvfzVesVVWCAcy5P5JvJ1NX%2FOSUtTyBAkMhzaw6Z8KlvK2qJEYcO2gI%2BtdnXsJtbdvBgbtjnZpuH3QBi%2FLu3qPZNb0PoExqjnIUh4%2FiQwohqjGsbUVyMe87HMaJ7XLp96tzpf9FP0Cu7CQHdH%2BrZFM%2BINBgPH8dzPGi3NGY4a0jcxvG7NUO7%2BTiOjILTh850N3nQo1ML4e0OMC88xuWpK%2FkTSXXrD5mXWbbDDQzAcBZz5ooTnPB8uDM319MtZcckDvp%2FqyZDp6J4v0CmruZm1NXGlB6ueUrFacGWhVTTjGBc4PGjPxhS%2F%2FK88UuNjorsLcF%2Fx0ZXZ2HOOKPppyhOTkO5uhHFRKclnh4krGHpXiQ%2Fl7p1PJHGtDX4Je6i%2FOBZCAhMYtVH4aiSCGTV1urbjSHSDkv0SF1PF%2FTLtfIsy%2Bj30aXO7lM4j9iZxHMPPV8NIGOqUBEmlhQm28%2FuInguKhgcB6YmJH1Gger4VgAdfHUSoONXKy%2FiR%2BOtM7RYVNvlzBnMeD%2BBrcKN8l5bkqKXFHXCxIIWqTcU9RTyjRULsX4hkie%2BkdOiVD6qv%2BO2E2b7FwLKHDIFqdgLQtHmBUSZXaUbi%2FtNvhjh5HH4wk5NX1gWn1gRPg4iOvbcoxWOcfvcgpWNruuIUV3tWiXwiU7xyL%2FSX9BCqHUjkj&X-Amz-Signature=12af772c452137afa6c429865fd532a1a053a96869acb35f67e8ff4bed27d0c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U42N6U6B%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBNlqIxtueTHSmSy8kHrs0KqrF1Xe0ixwmWXCqoAGNgwIgU0po7iERn2B5tn2i59CTFSeCkmt3KSMBdMnicPAeJXkqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPMg7FoaxcezgRLfACrcA52Jl5kTNt6d7TJGEi5BQfxHMpZ4ol5mwJb5QiYHIz4XKGllQYQVnL4plqZ%2F5ISvHgoqzXHeo3OREzN3oQvlG1GgtJRL9ME91CdjvdCQac2TrTX0Liaa9ntj4z%2BbysMhzq7FqmhoxpyX4ESh3zvH5Sb7aWJUXLcuKOk95V%2FAPLsMB%2FfH2pJmUtTt14MFuZWPnYnvfzVesVVWCAcy5P5JvJ1NX%2FOSUtTyBAkMhzaw6Z8KlvK2qJEYcO2gI%2BtdnXsJtbdvBgbtjnZpuH3QBi%2FLu3qPZNb0PoExqjnIUh4%2FiQwohqjGsbUVyMe87HMaJ7XLp96tzpf9FP0Cu7CQHdH%2BrZFM%2BINBgPH8dzPGi3NGY4a0jcxvG7NUO7%2BTiOjILTh850N3nQo1ML4e0OMC88xuWpK%2FkTSXXrD5mXWbbDDQzAcBZz5ooTnPB8uDM319MtZcckDvp%2FqyZDp6J4v0CmruZm1NXGlB6ueUrFacGWhVTTjGBc4PGjPxhS%2F%2FK88UuNjorsLcF%2Fx0ZXZ2HOOKPppyhOTkO5uhHFRKclnh4krGHpXiQ%2Fl7p1PJHGtDX4Je6i%2FOBZCAhMYtVH4aiSCGTV1urbjSHSDkv0SF1PF%2FTLtfIsy%2Bj30aXO7lM4j9iZxHMPPV8NIGOqUBEmlhQm28%2FuInguKhgcB6YmJH1Gger4VgAdfHUSoONXKy%2FiR%2BOtM7RYVNvlzBnMeD%2BBrcKN8l5bkqKXFHXCxIIWqTcU9RTyjRULsX4hkie%2BkdOiVD6qv%2BO2E2b7FwLKHDIFqdgLQtHmBUSZXaUbi%2FtNvhjh5HH4wk5NX1gWn1gRPg4iOvbcoxWOcfvcgpWNruuIUV3tWiXwiU7xyL%2FSX9BCqHUjkj&X-Amz-Signature=6d054faae0c0349a365c442462821f85a0bcacc62560a31cd86f5b0dd5798a4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
