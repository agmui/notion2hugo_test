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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VXQOGVB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWwdBmRHC0g6dTf7EF5tu9PhrJCdjVYBxk1OJ3lIGeXQIhAPLv7IqOhTgI6OgymDoLwgmfcX3C1kG4a6Y7i6x3JZWNKv8DCDMQABoMNjM3NDIzMTgzODA1Igy28nc%2FpaoeqOSpvyUq3AN2oS3TA8mQPPAhbBjFAZW6rrTN72nZv3S0WH8u0nAdphsqJAgzcREbCMV0JvRKNmUq04G7xTXbRjAMAxaOgc8G6zvtgeDsl8jbxbf21sFucBKmfcmrBRkKYpsdK4a4TE6MNfJpIQXo5h90WsFhVcDELZ0Sy2tczWmL5cnPNyxm2e4hUvrBtdlNoWah0i5dC%2FANOCqvu%2FD7mXPHYmeDj9Hmh8X%2BjbPe1uOOtwFwVVPdJ7B9n4aMZO3zHPImcM%2BU3IWai%2BRKirHo2ntSvR5uGdneNZB1hilkiQyW1bkkM6D9KO4W2cxpQRCvzetly1ADfDNmh8ihtwyNNl%2BCzAywECmGRzyujp1HCidxdMLpOeLiw8onhqGkG9HYz%2BkH8Ba5RcDhF%2BXVPqMO7jyNSCRmfaPZGWSNNDdJOgRv5VLZCbIqq6OFKtJgdNPH22SCAjSyDmW9mRQNe8W6%2FWExHXhW9pYigKjc9gH5LwFbuPT%2BVYzSNAYyL0nBO%2BLMA%2FON3SlpgNIoCwSJoTZQMFdW05hv1MEKc7TlQlwjrwNVsVZPMdx%2B3TDX0IVp3h9I33zfqb7iLMR28OvayUGohYYFlcbhLF2IWZxerA70roNGrNze5DfR98bE1c3UBtLdkQ0SkzCOoPPEBjqkAbMtbYwtxNsg8qpojM4hb9hUcWl07LszI961Up%2FQCOUPbNNvsJDD6F91HNsUJG9MrQ8lse%2FZPEKUMPRkfjiNtbCCHh8rTjhD5YIx9adm3IY0q6O9ErbYEofC1wvkKsCOCJ%2BlAzYfGKmKMr%2BuqDtnGIkxPHannMGDl4T%2FNJxF%2BsR7UK9K18CvN5%2BXJJ0DuXzvlSlbRNvk94Ni%2BQCZUiXC6KJJ%2BNd%2F&X-Amz-Signature=300524edc2efa5701e196373b7f55884fa5e831d4f07177f0dac36f1118fdee8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SOJL5HG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxzythJD4x2Fc914n%2Fo8Xa6UwHRlCfVraALHkuUu859QIhAN7vkFHY1EwAegjvSA%2F6VAG5XunKj0v9htf1kVTA8XzBKv8DCDMQABoMNjM3NDIzMTgzODA1IgwOE1jSoYzl%2FMp2LqEq3AMicHiotLhIYZt29VFXAYmxUrtA9XgjG9%2Fr1wvPduc0DCh6HGBlm39UbuJJDqxy3gv2JnaUAWrJyO9FwyY6upyNIFWQg8gsRrR8ryJRwRF844BWbapOjS5q9%2Bv0lYq8mGuWwKObLTKrMec6FZMpj8Lip0V7LGyNHYxU6yiI6A7%2B1h1g1v7fpzLj41WF3BSoYYBwqwrf%2FucTk2R71i5A%2B0pU2KESmrIZqKGm4JOLI2wqQrBlPHUBjBjHROSxiuKmKS84h9Y45WcNHg0Sybl0DuapJSZjNADBMXAy2diGSge6eslkh7oTXhXikfcMDAwkb7T1N1Y3zVYvpTS5Xg%2BDrKnGfFN7bHTrQHdPH9v6Pyr4QTzFrASXqeGDTOEFhlFMzDrch%2BJ2xbj%2FvQY77ys7j4qtcO8gb2X6LVAz9OTjR3m13RSkLu%2BlBZ6PImyE%2FiymG6qfwbz8DtVYbJJQhDOpb5Cut6r6fhKdO%2FFr%2BGRP1jjf8nVIKnm%2FFWhve1xw44KOH86Ni%2FCZN%2BZUT4pYtNEHUU23Q2ZSUPtsVKuWlzbmzqkeKs20p82ps8bbqILgMFVE8reTAA5I9lEJHYgRYfY6%2BTn1GSmqZmfNu4W6ejLY87AA1ncgw3SD7KFocKk8JDD2n%2FPEBjqkAX0fJQ23zRcZu8S2SZDFje5Gjz85CrqdAF53ap4AEmsK9soe4pA0lZftHSLUVbGccd7sDAXMBS6AjjWzQ49y1AxMnj87OVMEXV%2F%2BNU0dsKznwrZzDeW1fil2raRNtqM%2B7AaqEXHaze1qenejSaUsoAlimb1VN2JpqWEJWd05ExuzQxEM%2BCwsCB2Eu7pUKvlPm2IQrMvyiLXvSOISR6K5e2M%2BTVEK&X-Amz-Signature=4986ec549846182f10ac0e69c0271d3c485266b6e7cda0419b5b84d19f80a8c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SOJL5HG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxzythJD4x2Fc914n%2Fo8Xa6UwHRlCfVraALHkuUu859QIhAN7vkFHY1EwAegjvSA%2F6VAG5XunKj0v9htf1kVTA8XzBKv8DCDMQABoMNjM3NDIzMTgzODA1IgwOE1jSoYzl%2FMp2LqEq3AMicHiotLhIYZt29VFXAYmxUrtA9XgjG9%2Fr1wvPduc0DCh6HGBlm39UbuJJDqxy3gv2JnaUAWrJyO9FwyY6upyNIFWQg8gsRrR8ryJRwRF844BWbapOjS5q9%2Bv0lYq8mGuWwKObLTKrMec6FZMpj8Lip0V7LGyNHYxU6yiI6A7%2B1h1g1v7fpzLj41WF3BSoYYBwqwrf%2FucTk2R71i5A%2B0pU2KESmrIZqKGm4JOLI2wqQrBlPHUBjBjHROSxiuKmKS84h9Y45WcNHg0Sybl0DuapJSZjNADBMXAy2diGSge6eslkh7oTXhXikfcMDAwkb7T1N1Y3zVYvpTS5Xg%2BDrKnGfFN7bHTrQHdPH9v6Pyr4QTzFrASXqeGDTOEFhlFMzDrch%2BJ2xbj%2FvQY77ys7j4qtcO8gb2X6LVAz9OTjR3m13RSkLu%2BlBZ6PImyE%2FiymG6qfwbz8DtVYbJJQhDOpb5Cut6r6fhKdO%2FFr%2BGRP1jjf8nVIKnm%2FFWhve1xw44KOH86Ni%2FCZN%2BZUT4pYtNEHUU23Q2ZSUPtsVKuWlzbmzqkeKs20p82ps8bbqILgMFVE8reTAA5I9lEJHYgRYfY6%2BTn1GSmqZmfNu4W6ejLY87AA1ncgw3SD7KFocKk8JDD2n%2FPEBjqkAX0fJQ23zRcZu8S2SZDFje5Gjz85CrqdAF53ap4AEmsK9soe4pA0lZftHSLUVbGccd7sDAXMBS6AjjWzQ49y1AxMnj87OVMEXV%2F%2BNU0dsKznwrZzDeW1fil2raRNtqM%2B7AaqEXHaze1qenejSaUsoAlimb1VN2JpqWEJWd05ExuzQxEM%2BCwsCB2Eu7pUKvlPm2IQrMvyiLXvSOISR6K5e2M%2BTVEK&X-Amz-Signature=b038278dcb47ef21d86679b7b216fbfc8332362c11bc74d72db1b6e0af62fb93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SOJL5HG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxzythJD4x2Fc914n%2Fo8Xa6UwHRlCfVraALHkuUu859QIhAN7vkFHY1EwAegjvSA%2F6VAG5XunKj0v9htf1kVTA8XzBKv8DCDMQABoMNjM3NDIzMTgzODA1IgwOE1jSoYzl%2FMp2LqEq3AMicHiotLhIYZt29VFXAYmxUrtA9XgjG9%2Fr1wvPduc0DCh6HGBlm39UbuJJDqxy3gv2JnaUAWrJyO9FwyY6upyNIFWQg8gsRrR8ryJRwRF844BWbapOjS5q9%2Bv0lYq8mGuWwKObLTKrMec6FZMpj8Lip0V7LGyNHYxU6yiI6A7%2B1h1g1v7fpzLj41WF3BSoYYBwqwrf%2FucTk2R71i5A%2B0pU2KESmrIZqKGm4JOLI2wqQrBlPHUBjBjHROSxiuKmKS84h9Y45WcNHg0Sybl0DuapJSZjNADBMXAy2diGSge6eslkh7oTXhXikfcMDAwkb7T1N1Y3zVYvpTS5Xg%2BDrKnGfFN7bHTrQHdPH9v6Pyr4QTzFrASXqeGDTOEFhlFMzDrch%2BJ2xbj%2FvQY77ys7j4qtcO8gb2X6LVAz9OTjR3m13RSkLu%2BlBZ6PImyE%2FiymG6qfwbz8DtVYbJJQhDOpb5Cut6r6fhKdO%2FFr%2BGRP1jjf8nVIKnm%2FFWhve1xw44KOH86Ni%2FCZN%2BZUT4pYtNEHUU23Q2ZSUPtsVKuWlzbmzqkeKs20p82ps8bbqILgMFVE8reTAA5I9lEJHYgRYfY6%2BTn1GSmqZmfNu4W6ejLY87AA1ncgw3SD7KFocKk8JDD2n%2FPEBjqkAX0fJQ23zRcZu8S2SZDFje5Gjz85CrqdAF53ap4AEmsK9soe4pA0lZftHSLUVbGccd7sDAXMBS6AjjWzQ49y1AxMnj87OVMEXV%2F%2BNU0dsKznwrZzDeW1fil2raRNtqM%2B7AaqEXHaze1qenejSaUsoAlimb1VN2JpqWEJWd05ExuzQxEM%2BCwsCB2Eu7pUKvlPm2IQrMvyiLXvSOISR6K5e2M%2BTVEK&X-Amz-Signature=b9f2e969c461ca6af0f498a60f8c4309c195a95dfd4a76088462ffd278ecbc6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SOJL5HG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxzythJD4x2Fc914n%2Fo8Xa6UwHRlCfVraALHkuUu859QIhAN7vkFHY1EwAegjvSA%2F6VAG5XunKj0v9htf1kVTA8XzBKv8DCDMQABoMNjM3NDIzMTgzODA1IgwOE1jSoYzl%2FMp2LqEq3AMicHiotLhIYZt29VFXAYmxUrtA9XgjG9%2Fr1wvPduc0DCh6HGBlm39UbuJJDqxy3gv2JnaUAWrJyO9FwyY6upyNIFWQg8gsRrR8ryJRwRF844BWbapOjS5q9%2Bv0lYq8mGuWwKObLTKrMec6FZMpj8Lip0V7LGyNHYxU6yiI6A7%2B1h1g1v7fpzLj41WF3BSoYYBwqwrf%2FucTk2R71i5A%2B0pU2KESmrIZqKGm4JOLI2wqQrBlPHUBjBjHROSxiuKmKS84h9Y45WcNHg0Sybl0DuapJSZjNADBMXAy2diGSge6eslkh7oTXhXikfcMDAwkb7T1N1Y3zVYvpTS5Xg%2BDrKnGfFN7bHTrQHdPH9v6Pyr4QTzFrASXqeGDTOEFhlFMzDrch%2BJ2xbj%2FvQY77ys7j4qtcO8gb2X6LVAz9OTjR3m13RSkLu%2BlBZ6PImyE%2FiymG6qfwbz8DtVYbJJQhDOpb5Cut6r6fhKdO%2FFr%2BGRP1jjf8nVIKnm%2FFWhve1xw44KOH86Ni%2FCZN%2BZUT4pYtNEHUU23Q2ZSUPtsVKuWlzbmzqkeKs20p82ps8bbqILgMFVE8reTAA5I9lEJHYgRYfY6%2BTn1GSmqZmfNu4W6ejLY87AA1ncgw3SD7KFocKk8JDD2n%2FPEBjqkAX0fJQ23zRcZu8S2SZDFje5Gjz85CrqdAF53ap4AEmsK9soe4pA0lZftHSLUVbGccd7sDAXMBS6AjjWzQ49y1AxMnj87OVMEXV%2F%2BNU0dsKznwrZzDeW1fil2raRNtqM%2B7AaqEXHaze1qenejSaUsoAlimb1VN2JpqWEJWd05ExuzQxEM%2BCwsCB2Eu7pUKvlPm2IQrMvyiLXvSOISR6K5e2M%2BTVEK&X-Amz-Signature=4307b0350c3bbbb78782c9371ce159e05d445398213a3abff830a45574778de9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SOJL5HG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxzythJD4x2Fc914n%2Fo8Xa6UwHRlCfVraALHkuUu859QIhAN7vkFHY1EwAegjvSA%2F6VAG5XunKj0v9htf1kVTA8XzBKv8DCDMQABoMNjM3NDIzMTgzODA1IgwOE1jSoYzl%2FMp2LqEq3AMicHiotLhIYZt29VFXAYmxUrtA9XgjG9%2Fr1wvPduc0DCh6HGBlm39UbuJJDqxy3gv2JnaUAWrJyO9FwyY6upyNIFWQg8gsRrR8ryJRwRF844BWbapOjS5q9%2Bv0lYq8mGuWwKObLTKrMec6FZMpj8Lip0V7LGyNHYxU6yiI6A7%2B1h1g1v7fpzLj41WF3BSoYYBwqwrf%2FucTk2R71i5A%2B0pU2KESmrIZqKGm4JOLI2wqQrBlPHUBjBjHROSxiuKmKS84h9Y45WcNHg0Sybl0DuapJSZjNADBMXAy2diGSge6eslkh7oTXhXikfcMDAwkb7T1N1Y3zVYvpTS5Xg%2BDrKnGfFN7bHTrQHdPH9v6Pyr4QTzFrASXqeGDTOEFhlFMzDrch%2BJ2xbj%2FvQY77ys7j4qtcO8gb2X6LVAz9OTjR3m13RSkLu%2BlBZ6PImyE%2FiymG6qfwbz8DtVYbJJQhDOpb5Cut6r6fhKdO%2FFr%2BGRP1jjf8nVIKnm%2FFWhve1xw44KOH86Ni%2FCZN%2BZUT4pYtNEHUU23Q2ZSUPtsVKuWlzbmzqkeKs20p82ps8bbqILgMFVE8reTAA5I9lEJHYgRYfY6%2BTn1GSmqZmfNu4W6ejLY87AA1ncgw3SD7KFocKk8JDD2n%2FPEBjqkAX0fJQ23zRcZu8S2SZDFje5Gjz85CrqdAF53ap4AEmsK9soe4pA0lZftHSLUVbGccd7sDAXMBS6AjjWzQ49y1AxMnj87OVMEXV%2F%2BNU0dsKznwrZzDeW1fil2raRNtqM%2B7AaqEXHaze1qenejSaUsoAlimb1VN2JpqWEJWd05ExuzQxEM%2BCwsCB2Eu7pUKvlPm2IQrMvyiLXvSOISR6K5e2M%2BTVEK&X-Amz-Signature=0ac0d806327ab0cf9e39eb15431be187f05d03aeb7e25192bda30ce00ec29fd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SOJL5HG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxzythJD4x2Fc914n%2Fo8Xa6UwHRlCfVraALHkuUu859QIhAN7vkFHY1EwAegjvSA%2F6VAG5XunKj0v9htf1kVTA8XzBKv8DCDMQABoMNjM3NDIzMTgzODA1IgwOE1jSoYzl%2FMp2LqEq3AMicHiotLhIYZt29VFXAYmxUrtA9XgjG9%2Fr1wvPduc0DCh6HGBlm39UbuJJDqxy3gv2JnaUAWrJyO9FwyY6upyNIFWQg8gsRrR8ryJRwRF844BWbapOjS5q9%2Bv0lYq8mGuWwKObLTKrMec6FZMpj8Lip0V7LGyNHYxU6yiI6A7%2B1h1g1v7fpzLj41WF3BSoYYBwqwrf%2FucTk2R71i5A%2B0pU2KESmrIZqKGm4JOLI2wqQrBlPHUBjBjHROSxiuKmKS84h9Y45WcNHg0Sybl0DuapJSZjNADBMXAy2diGSge6eslkh7oTXhXikfcMDAwkb7T1N1Y3zVYvpTS5Xg%2BDrKnGfFN7bHTrQHdPH9v6Pyr4QTzFrASXqeGDTOEFhlFMzDrch%2BJ2xbj%2FvQY77ys7j4qtcO8gb2X6LVAz9OTjR3m13RSkLu%2BlBZ6PImyE%2FiymG6qfwbz8DtVYbJJQhDOpb5Cut6r6fhKdO%2FFr%2BGRP1jjf8nVIKnm%2FFWhve1xw44KOH86Ni%2FCZN%2BZUT4pYtNEHUU23Q2ZSUPtsVKuWlzbmzqkeKs20p82ps8bbqILgMFVE8reTAA5I9lEJHYgRYfY6%2BTn1GSmqZmfNu4W6ejLY87AA1ncgw3SD7KFocKk8JDD2n%2FPEBjqkAX0fJQ23zRcZu8S2SZDFje5Gjz85CrqdAF53ap4AEmsK9soe4pA0lZftHSLUVbGccd7sDAXMBS6AjjWzQ49y1AxMnj87OVMEXV%2F%2BNU0dsKznwrZzDeW1fil2raRNtqM%2B7AaqEXHaze1qenejSaUsoAlimb1VN2JpqWEJWd05ExuzQxEM%2BCwsCB2Eu7pUKvlPm2IQrMvyiLXvSOISR6K5e2M%2BTVEK&X-Amz-Signature=737df198c665090548b679803a924530b6c28de00e5da159402606e2b94a28b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SOJL5HG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxzythJD4x2Fc914n%2Fo8Xa6UwHRlCfVraALHkuUu859QIhAN7vkFHY1EwAegjvSA%2F6VAG5XunKj0v9htf1kVTA8XzBKv8DCDMQABoMNjM3NDIzMTgzODA1IgwOE1jSoYzl%2FMp2LqEq3AMicHiotLhIYZt29VFXAYmxUrtA9XgjG9%2Fr1wvPduc0DCh6HGBlm39UbuJJDqxy3gv2JnaUAWrJyO9FwyY6upyNIFWQg8gsRrR8ryJRwRF844BWbapOjS5q9%2Bv0lYq8mGuWwKObLTKrMec6FZMpj8Lip0V7LGyNHYxU6yiI6A7%2B1h1g1v7fpzLj41WF3BSoYYBwqwrf%2FucTk2R71i5A%2B0pU2KESmrIZqKGm4JOLI2wqQrBlPHUBjBjHROSxiuKmKS84h9Y45WcNHg0Sybl0DuapJSZjNADBMXAy2diGSge6eslkh7oTXhXikfcMDAwkb7T1N1Y3zVYvpTS5Xg%2BDrKnGfFN7bHTrQHdPH9v6Pyr4QTzFrASXqeGDTOEFhlFMzDrch%2BJ2xbj%2FvQY77ys7j4qtcO8gb2X6LVAz9OTjR3m13RSkLu%2BlBZ6PImyE%2FiymG6qfwbz8DtVYbJJQhDOpb5Cut6r6fhKdO%2FFr%2BGRP1jjf8nVIKnm%2FFWhve1xw44KOH86Ni%2FCZN%2BZUT4pYtNEHUU23Q2ZSUPtsVKuWlzbmzqkeKs20p82ps8bbqILgMFVE8reTAA5I9lEJHYgRYfY6%2BTn1GSmqZmfNu4W6ejLY87AA1ncgw3SD7KFocKk8JDD2n%2FPEBjqkAX0fJQ23zRcZu8S2SZDFje5Gjz85CrqdAF53ap4AEmsK9soe4pA0lZftHSLUVbGccd7sDAXMBS6AjjWzQ49y1AxMnj87OVMEXV%2F%2BNU0dsKznwrZzDeW1fil2raRNtqM%2B7AaqEXHaze1qenejSaUsoAlimb1VN2JpqWEJWd05ExuzQxEM%2BCwsCB2Eu7pUKvlPm2IQrMvyiLXvSOISR6K5e2M%2BTVEK&X-Amz-Signature=f9917e875e144a5daa0386c1452ddf013cb5bb5342d8ac1d65f39b47b0e71446&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SOJL5HG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxzythJD4x2Fc914n%2Fo8Xa6UwHRlCfVraALHkuUu859QIhAN7vkFHY1EwAegjvSA%2F6VAG5XunKj0v9htf1kVTA8XzBKv8DCDMQABoMNjM3NDIzMTgzODA1IgwOE1jSoYzl%2FMp2LqEq3AMicHiotLhIYZt29VFXAYmxUrtA9XgjG9%2Fr1wvPduc0DCh6HGBlm39UbuJJDqxy3gv2JnaUAWrJyO9FwyY6upyNIFWQg8gsRrR8ryJRwRF844BWbapOjS5q9%2Bv0lYq8mGuWwKObLTKrMec6FZMpj8Lip0V7LGyNHYxU6yiI6A7%2B1h1g1v7fpzLj41WF3BSoYYBwqwrf%2FucTk2R71i5A%2B0pU2KESmrIZqKGm4JOLI2wqQrBlPHUBjBjHROSxiuKmKS84h9Y45WcNHg0Sybl0DuapJSZjNADBMXAy2diGSge6eslkh7oTXhXikfcMDAwkb7T1N1Y3zVYvpTS5Xg%2BDrKnGfFN7bHTrQHdPH9v6Pyr4QTzFrASXqeGDTOEFhlFMzDrch%2BJ2xbj%2FvQY77ys7j4qtcO8gb2X6LVAz9OTjR3m13RSkLu%2BlBZ6PImyE%2FiymG6qfwbz8DtVYbJJQhDOpb5Cut6r6fhKdO%2FFr%2BGRP1jjf8nVIKnm%2FFWhve1xw44KOH86Ni%2FCZN%2BZUT4pYtNEHUU23Q2ZSUPtsVKuWlzbmzqkeKs20p82ps8bbqILgMFVE8reTAA5I9lEJHYgRYfY6%2BTn1GSmqZmfNu4W6ejLY87AA1ncgw3SD7KFocKk8JDD2n%2FPEBjqkAX0fJQ23zRcZu8S2SZDFje5Gjz85CrqdAF53ap4AEmsK9soe4pA0lZftHSLUVbGccd7sDAXMBS6AjjWzQ49y1AxMnj87OVMEXV%2F%2BNU0dsKznwrZzDeW1fil2raRNtqM%2B7AaqEXHaze1qenejSaUsoAlimb1VN2JpqWEJWd05ExuzQxEM%2BCwsCB2Eu7pUKvlPm2IQrMvyiLXvSOISR6K5e2M%2BTVEK&X-Amz-Signature=4634564644aa66827e257cd1a7bcbc5f1fb97c878d9adbcbd0ba472296e1a0c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SOJL5HG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxzythJD4x2Fc914n%2Fo8Xa6UwHRlCfVraALHkuUu859QIhAN7vkFHY1EwAegjvSA%2F6VAG5XunKj0v9htf1kVTA8XzBKv8DCDMQABoMNjM3NDIzMTgzODA1IgwOE1jSoYzl%2FMp2LqEq3AMicHiotLhIYZt29VFXAYmxUrtA9XgjG9%2Fr1wvPduc0DCh6HGBlm39UbuJJDqxy3gv2JnaUAWrJyO9FwyY6upyNIFWQg8gsRrR8ryJRwRF844BWbapOjS5q9%2Bv0lYq8mGuWwKObLTKrMec6FZMpj8Lip0V7LGyNHYxU6yiI6A7%2B1h1g1v7fpzLj41WF3BSoYYBwqwrf%2FucTk2R71i5A%2B0pU2KESmrIZqKGm4JOLI2wqQrBlPHUBjBjHROSxiuKmKS84h9Y45WcNHg0Sybl0DuapJSZjNADBMXAy2diGSge6eslkh7oTXhXikfcMDAwkb7T1N1Y3zVYvpTS5Xg%2BDrKnGfFN7bHTrQHdPH9v6Pyr4QTzFrASXqeGDTOEFhlFMzDrch%2BJ2xbj%2FvQY77ys7j4qtcO8gb2X6LVAz9OTjR3m13RSkLu%2BlBZ6PImyE%2FiymG6qfwbz8DtVYbJJQhDOpb5Cut6r6fhKdO%2FFr%2BGRP1jjf8nVIKnm%2FFWhve1xw44KOH86Ni%2FCZN%2BZUT4pYtNEHUU23Q2ZSUPtsVKuWlzbmzqkeKs20p82ps8bbqILgMFVE8reTAA5I9lEJHYgRYfY6%2BTn1GSmqZmfNu4W6ejLY87AA1ncgw3SD7KFocKk8JDD2n%2FPEBjqkAX0fJQ23zRcZu8S2SZDFje5Gjz85CrqdAF53ap4AEmsK9soe4pA0lZftHSLUVbGccd7sDAXMBS6AjjWzQ49y1AxMnj87OVMEXV%2F%2BNU0dsKznwrZzDeW1fil2raRNtqM%2B7AaqEXHaze1qenejSaUsoAlimb1VN2JpqWEJWd05ExuzQxEM%2BCwsCB2Eu7pUKvlPm2IQrMvyiLXvSOISR6K5e2M%2BTVEK&X-Amz-Signature=eb4803088dd537cca61bb966e8ba18ac4acce63222df2ebe4aea920672f7d2dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SOJL5HG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxzythJD4x2Fc914n%2Fo8Xa6UwHRlCfVraALHkuUu859QIhAN7vkFHY1EwAegjvSA%2F6VAG5XunKj0v9htf1kVTA8XzBKv8DCDMQABoMNjM3NDIzMTgzODA1IgwOE1jSoYzl%2FMp2LqEq3AMicHiotLhIYZt29VFXAYmxUrtA9XgjG9%2Fr1wvPduc0DCh6HGBlm39UbuJJDqxy3gv2JnaUAWrJyO9FwyY6upyNIFWQg8gsRrR8ryJRwRF844BWbapOjS5q9%2Bv0lYq8mGuWwKObLTKrMec6FZMpj8Lip0V7LGyNHYxU6yiI6A7%2B1h1g1v7fpzLj41WF3BSoYYBwqwrf%2FucTk2R71i5A%2B0pU2KESmrIZqKGm4JOLI2wqQrBlPHUBjBjHROSxiuKmKS84h9Y45WcNHg0Sybl0DuapJSZjNADBMXAy2diGSge6eslkh7oTXhXikfcMDAwkb7T1N1Y3zVYvpTS5Xg%2BDrKnGfFN7bHTrQHdPH9v6Pyr4QTzFrASXqeGDTOEFhlFMzDrch%2BJ2xbj%2FvQY77ys7j4qtcO8gb2X6LVAz9OTjR3m13RSkLu%2BlBZ6PImyE%2FiymG6qfwbz8DtVYbJJQhDOpb5Cut6r6fhKdO%2FFr%2BGRP1jjf8nVIKnm%2FFWhve1xw44KOH86Ni%2FCZN%2BZUT4pYtNEHUU23Q2ZSUPtsVKuWlzbmzqkeKs20p82ps8bbqILgMFVE8reTAA5I9lEJHYgRYfY6%2BTn1GSmqZmfNu4W6ejLY87AA1ncgw3SD7KFocKk8JDD2n%2FPEBjqkAX0fJQ23zRcZu8S2SZDFje5Gjz85CrqdAF53ap4AEmsK9soe4pA0lZftHSLUVbGccd7sDAXMBS6AjjWzQ49y1AxMnj87OVMEXV%2F%2BNU0dsKznwrZzDeW1fil2raRNtqM%2B7AaqEXHaze1qenejSaUsoAlimb1VN2JpqWEJWd05ExuzQxEM%2BCwsCB2Eu7pUKvlPm2IQrMvyiLXvSOISR6K5e2M%2BTVEK&X-Amz-Signature=4307b0350c3bbbb78782c9371ce159e05d445398213a3abff830a45574778de9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
