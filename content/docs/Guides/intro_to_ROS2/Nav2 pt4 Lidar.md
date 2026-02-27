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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVDI3LV5%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCwYrLvkZhoOG1eCouU6drrMO0xxmVl3eo5PubhMSLj1QIgLQahGyaxFCtFDuz8A3bnu1IxMuVZU1L560SuIMhbK8cq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDIsMY0BjjrDSFLDpJircAw9zv9NrMUnfU%2Bt%2FztCxqM8%2Bk3%2BuqIrFOv0ts9Xlx%2FyVOYadxR8iwfG9OfZj%2F0E1N%2BA255XYNGTNj98PKcmMecKmkF6pjucBka6qeJ1iL6MfXZb78Jy4KA0lWiCMO52ZFk2FGjHD1mJesy08r48gPyL6QVT5y8KZhbhTK8ENvCtaDp5SCD7Is%2BXIePDVRDiPIr9Sqv4vKMoJQiXho%2FEZ1LYFKkL2hzbaf%2BwXYOwYqiuqquHjyD8DJURdGZ%2FjmcZcuDS915msfB2dAjP08tS8stUWpV1Kn9roalirl3nQbtOlQ0jcuFTijo0es1aWCt%2B%2BWvHoKhU5MgmnmH8GYRH89zJh1lrMpRI8ji8YE51%2BGGN4xMSRI%2F8q%2FgWTJzk9dDK2sScN3pJL8l5RW7KoqETBJR5ZEPL%2B1KBniyuLxYje1ekVBq2MHZyLUxWQhsdUd2%2BR5VjBj%2BtXDTcDhjxC7O9WaWxb%2FdOcbNJwYHg0FKmr1zMh83ksxVjZNmtTjS5LZcfs%2BVyDBp5ehz%2BJf1K8Sm%2Fd9kmbCahOLeUIbdwTGPoZaPR9581M0eG5CLxsY3gMVEDZTGe83t8Np2glSuxc27J3kByNPj4EZozeNluSY7dQ47t0C%2BDljfYKOvxoNkxHMNzZg80GOqUB3b2dcV7Fv2FWATwXsFdOo%2FDXYoTP9ATNJeYRnAh10FEeH4jnTqgy9s7Vbnzsyin%2Bz%2FnAwTYyoBvQj9uodE0RzXHPbNexRHCbT0mDy6ugnN2qpi75SuYw6pZfaR206ssvr6j5867xLYb4mQ5LiLf%2F1QrtXQMHm%2BfIAOl9%2FfINNuTza48dXvURWLOhYwLs9FCCHbkvOXNtncaX6Lw3Sv%2BeZtq58DZc&X-Amz-Signature=d159c2cd9cfd173094e36ffd8245b58add7070dced9197bc833e6c10b298dff0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RIK2KBW%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDkuFKlos471i473cNmLltrRFj1h6WMb0akMwfSYB0GnQIgflEeGthTyWWsvfcJkgTKGTU7iet23prjSwVJ%2B4FSosoq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDHxT2ueVpeOga%2Ff5wSrcA3vCVo6N6PGVuyXIYreSmABxYtzbFYi5bcBsfxA80k9sK1vECBmvy2X27%2F0dLUi607pmcnplvucmxEdD5cO3rs6uh51efKKD%2BjtAJt12lZ%2BWFDL1%2Fnx1EPyOTd8JCq0%2BiUO1IGO54p05J0JSPifwvgF2DYlzHzTTL3SpmTN51TrJvVicmfRzR4yvgJGZ4LN3gr4cWm9elftv93Ch9rWlzGDaNm5oYzlxK%2BjAQWJ3xzraDTMQOwF6PPz0xlm%2FTzL0y9KxFoz5TaSeA4%2Fkl6lfl%2Be9DPZQRmPfFwKhWdfUubnMSFxN0iK7hDvIEfQQASo%2FYXnwz2bVXNY04inNtVfNvVGZwopNEgborisYucL9H3nSqDaqb1gDreH57nppGwYQ8dCg0jCPAl3OYm1cB%2BZYiGeI9QifxwzOQF85gdKoX2LyP3VMbOvIdVXn6XYxBPn%2BGmFpmgAfZfjtd5HQckZi%2BB5HdE68yvN%2B%2F0m63Bl2c1T%2BTKFoWyP8IxOh4wPDAXTbCcxesoSdylKlJel%2FJsayNYSKVZL%2BLQpDdfCp7S50GFdR3NpBf8NQ4oAmGH50%2BpOXf4R1dt1ezCUMq8f2dEoprp4UP3nPZ6n3v6ZEA6OmLNI%2FSPL9wPXU3AEqDz0HMLvag80GOqUBrm1Ad0gPnRBf7DBZSlcCJNwFTQJ60OF5yme99swwMtRru7kKxqANfzf0khe43W9XpkXoCzcpIYq5RMvrGdjZcs7IeBJLbTcBk4fTSnPHxT%2B2U6yAa992WrmfZoGumpptLEPOgzCoXfw591%2BRY3lVs4Y%2FvfzCexjfJPM7IRT%2B5KgqAZQccWlzMBVuOL%2Fw7fX8UQNQ2eCOcCjjukA2wCK0x2JcCACA&X-Amz-Signature=3b42070b6fafc982f4fbb2ec9c33058133b6f1515c72e06fe1695934c5ff81cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RIK2KBW%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDkuFKlos471i473cNmLltrRFj1h6WMb0akMwfSYB0GnQIgflEeGthTyWWsvfcJkgTKGTU7iet23prjSwVJ%2B4FSosoq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDHxT2ueVpeOga%2Ff5wSrcA3vCVo6N6PGVuyXIYreSmABxYtzbFYi5bcBsfxA80k9sK1vECBmvy2X27%2F0dLUi607pmcnplvucmxEdD5cO3rs6uh51efKKD%2BjtAJt12lZ%2BWFDL1%2Fnx1EPyOTd8JCq0%2BiUO1IGO54p05J0JSPifwvgF2DYlzHzTTL3SpmTN51TrJvVicmfRzR4yvgJGZ4LN3gr4cWm9elftv93Ch9rWlzGDaNm5oYzlxK%2BjAQWJ3xzraDTMQOwF6PPz0xlm%2FTzL0y9KxFoz5TaSeA4%2Fkl6lfl%2Be9DPZQRmPfFwKhWdfUubnMSFxN0iK7hDvIEfQQASo%2FYXnwz2bVXNY04inNtVfNvVGZwopNEgborisYucL9H3nSqDaqb1gDreH57nppGwYQ8dCg0jCPAl3OYm1cB%2BZYiGeI9QifxwzOQF85gdKoX2LyP3VMbOvIdVXn6XYxBPn%2BGmFpmgAfZfjtd5HQckZi%2BB5HdE68yvN%2B%2F0m63Bl2c1T%2BTKFoWyP8IxOh4wPDAXTbCcxesoSdylKlJel%2FJsayNYSKVZL%2BLQpDdfCp7S50GFdR3NpBf8NQ4oAmGH50%2BpOXf4R1dt1ezCUMq8f2dEoprp4UP3nPZ6n3v6ZEA6OmLNI%2FSPL9wPXU3AEqDz0HMLvag80GOqUBrm1Ad0gPnRBf7DBZSlcCJNwFTQJ60OF5yme99swwMtRru7kKxqANfzf0khe43W9XpkXoCzcpIYq5RMvrGdjZcs7IeBJLbTcBk4fTSnPHxT%2B2U6yAa992WrmfZoGumpptLEPOgzCoXfw591%2BRY3lVs4Y%2FvfzCexjfJPM7IRT%2B5KgqAZQccWlzMBVuOL%2Fw7fX8UQNQ2eCOcCjjukA2wCK0x2JcCACA&X-Amz-Signature=91646e05bda81bbb8d78df92354e96f7dc4460356d796cdb1c0dec5041614b67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RIK2KBW%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDkuFKlos471i473cNmLltrRFj1h6WMb0akMwfSYB0GnQIgflEeGthTyWWsvfcJkgTKGTU7iet23prjSwVJ%2B4FSosoq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDHxT2ueVpeOga%2Ff5wSrcA3vCVo6N6PGVuyXIYreSmABxYtzbFYi5bcBsfxA80k9sK1vECBmvy2X27%2F0dLUi607pmcnplvucmxEdD5cO3rs6uh51efKKD%2BjtAJt12lZ%2BWFDL1%2Fnx1EPyOTd8JCq0%2BiUO1IGO54p05J0JSPifwvgF2DYlzHzTTL3SpmTN51TrJvVicmfRzR4yvgJGZ4LN3gr4cWm9elftv93Ch9rWlzGDaNm5oYzlxK%2BjAQWJ3xzraDTMQOwF6PPz0xlm%2FTzL0y9KxFoz5TaSeA4%2Fkl6lfl%2Be9DPZQRmPfFwKhWdfUubnMSFxN0iK7hDvIEfQQASo%2FYXnwz2bVXNY04inNtVfNvVGZwopNEgborisYucL9H3nSqDaqb1gDreH57nppGwYQ8dCg0jCPAl3OYm1cB%2BZYiGeI9QifxwzOQF85gdKoX2LyP3VMbOvIdVXn6XYxBPn%2BGmFpmgAfZfjtd5HQckZi%2BB5HdE68yvN%2B%2F0m63Bl2c1T%2BTKFoWyP8IxOh4wPDAXTbCcxesoSdylKlJel%2FJsayNYSKVZL%2BLQpDdfCp7S50GFdR3NpBf8NQ4oAmGH50%2BpOXf4R1dt1ezCUMq8f2dEoprp4UP3nPZ6n3v6ZEA6OmLNI%2FSPL9wPXU3AEqDz0HMLvag80GOqUBrm1Ad0gPnRBf7DBZSlcCJNwFTQJ60OF5yme99swwMtRru7kKxqANfzf0khe43W9XpkXoCzcpIYq5RMvrGdjZcs7IeBJLbTcBk4fTSnPHxT%2B2U6yAa992WrmfZoGumpptLEPOgzCoXfw591%2BRY3lVs4Y%2FvfzCexjfJPM7IRT%2B5KgqAZQccWlzMBVuOL%2Fw7fX8UQNQ2eCOcCjjukA2wCK0x2JcCACA&X-Amz-Signature=78b154bc6abcfb698f376fc0a97a40b0611f404a486424e4daf76565bc6975d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RIK2KBW%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDkuFKlos471i473cNmLltrRFj1h6WMb0akMwfSYB0GnQIgflEeGthTyWWsvfcJkgTKGTU7iet23prjSwVJ%2B4FSosoq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDHxT2ueVpeOga%2Ff5wSrcA3vCVo6N6PGVuyXIYreSmABxYtzbFYi5bcBsfxA80k9sK1vECBmvy2X27%2F0dLUi607pmcnplvucmxEdD5cO3rs6uh51efKKD%2BjtAJt12lZ%2BWFDL1%2Fnx1EPyOTd8JCq0%2BiUO1IGO54p05J0JSPifwvgF2DYlzHzTTL3SpmTN51TrJvVicmfRzR4yvgJGZ4LN3gr4cWm9elftv93Ch9rWlzGDaNm5oYzlxK%2BjAQWJ3xzraDTMQOwF6PPz0xlm%2FTzL0y9KxFoz5TaSeA4%2Fkl6lfl%2Be9DPZQRmPfFwKhWdfUubnMSFxN0iK7hDvIEfQQASo%2FYXnwz2bVXNY04inNtVfNvVGZwopNEgborisYucL9H3nSqDaqb1gDreH57nppGwYQ8dCg0jCPAl3OYm1cB%2BZYiGeI9QifxwzOQF85gdKoX2LyP3VMbOvIdVXn6XYxBPn%2BGmFpmgAfZfjtd5HQckZi%2BB5HdE68yvN%2B%2F0m63Bl2c1T%2BTKFoWyP8IxOh4wPDAXTbCcxesoSdylKlJel%2FJsayNYSKVZL%2BLQpDdfCp7S50GFdR3NpBf8NQ4oAmGH50%2BpOXf4R1dt1ezCUMq8f2dEoprp4UP3nPZ6n3v6ZEA6OmLNI%2FSPL9wPXU3AEqDz0HMLvag80GOqUBrm1Ad0gPnRBf7DBZSlcCJNwFTQJ60OF5yme99swwMtRru7kKxqANfzf0khe43W9XpkXoCzcpIYq5RMvrGdjZcs7IeBJLbTcBk4fTSnPHxT%2B2U6yAa992WrmfZoGumpptLEPOgzCoXfw591%2BRY3lVs4Y%2FvfzCexjfJPM7IRT%2B5KgqAZQccWlzMBVuOL%2Fw7fX8UQNQ2eCOcCjjukA2wCK0x2JcCACA&X-Amz-Signature=ab11ba1b3daa32363df87dd8734e34aea09273c8684eecb7e5c0abbf6b4017f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RIK2KBW%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDkuFKlos471i473cNmLltrRFj1h6WMb0akMwfSYB0GnQIgflEeGthTyWWsvfcJkgTKGTU7iet23prjSwVJ%2B4FSosoq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDHxT2ueVpeOga%2Ff5wSrcA3vCVo6N6PGVuyXIYreSmABxYtzbFYi5bcBsfxA80k9sK1vECBmvy2X27%2F0dLUi607pmcnplvucmxEdD5cO3rs6uh51efKKD%2BjtAJt12lZ%2BWFDL1%2Fnx1EPyOTd8JCq0%2BiUO1IGO54p05J0JSPifwvgF2DYlzHzTTL3SpmTN51TrJvVicmfRzR4yvgJGZ4LN3gr4cWm9elftv93Ch9rWlzGDaNm5oYzlxK%2BjAQWJ3xzraDTMQOwF6PPz0xlm%2FTzL0y9KxFoz5TaSeA4%2Fkl6lfl%2Be9DPZQRmPfFwKhWdfUubnMSFxN0iK7hDvIEfQQASo%2FYXnwz2bVXNY04inNtVfNvVGZwopNEgborisYucL9H3nSqDaqb1gDreH57nppGwYQ8dCg0jCPAl3OYm1cB%2BZYiGeI9QifxwzOQF85gdKoX2LyP3VMbOvIdVXn6XYxBPn%2BGmFpmgAfZfjtd5HQckZi%2BB5HdE68yvN%2B%2F0m63Bl2c1T%2BTKFoWyP8IxOh4wPDAXTbCcxesoSdylKlJel%2FJsayNYSKVZL%2BLQpDdfCp7S50GFdR3NpBf8NQ4oAmGH50%2BpOXf4R1dt1ezCUMq8f2dEoprp4UP3nPZ6n3v6ZEA6OmLNI%2FSPL9wPXU3AEqDz0HMLvag80GOqUBrm1Ad0gPnRBf7DBZSlcCJNwFTQJ60OF5yme99swwMtRru7kKxqANfzf0khe43W9XpkXoCzcpIYq5RMvrGdjZcs7IeBJLbTcBk4fTSnPHxT%2B2U6yAa992WrmfZoGumpptLEPOgzCoXfw591%2BRY3lVs4Y%2FvfzCexjfJPM7IRT%2B5KgqAZQccWlzMBVuOL%2Fw7fX8UQNQ2eCOcCjjukA2wCK0x2JcCACA&X-Amz-Signature=3f2d9580c2b6b7851355a4c36ad5a0d7555b146491428b127bcc7e04b75bbd42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RIK2KBW%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDkuFKlos471i473cNmLltrRFj1h6WMb0akMwfSYB0GnQIgflEeGthTyWWsvfcJkgTKGTU7iet23prjSwVJ%2B4FSosoq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDHxT2ueVpeOga%2Ff5wSrcA3vCVo6N6PGVuyXIYreSmABxYtzbFYi5bcBsfxA80k9sK1vECBmvy2X27%2F0dLUi607pmcnplvucmxEdD5cO3rs6uh51efKKD%2BjtAJt12lZ%2BWFDL1%2Fnx1EPyOTd8JCq0%2BiUO1IGO54p05J0JSPifwvgF2DYlzHzTTL3SpmTN51TrJvVicmfRzR4yvgJGZ4LN3gr4cWm9elftv93Ch9rWlzGDaNm5oYzlxK%2BjAQWJ3xzraDTMQOwF6PPz0xlm%2FTzL0y9KxFoz5TaSeA4%2Fkl6lfl%2Be9DPZQRmPfFwKhWdfUubnMSFxN0iK7hDvIEfQQASo%2FYXnwz2bVXNY04inNtVfNvVGZwopNEgborisYucL9H3nSqDaqb1gDreH57nppGwYQ8dCg0jCPAl3OYm1cB%2BZYiGeI9QifxwzOQF85gdKoX2LyP3VMbOvIdVXn6XYxBPn%2BGmFpmgAfZfjtd5HQckZi%2BB5HdE68yvN%2B%2F0m63Bl2c1T%2BTKFoWyP8IxOh4wPDAXTbCcxesoSdylKlJel%2FJsayNYSKVZL%2BLQpDdfCp7S50GFdR3NpBf8NQ4oAmGH50%2BpOXf4R1dt1ezCUMq8f2dEoprp4UP3nPZ6n3v6ZEA6OmLNI%2FSPL9wPXU3AEqDz0HMLvag80GOqUBrm1Ad0gPnRBf7DBZSlcCJNwFTQJ60OF5yme99swwMtRru7kKxqANfzf0khe43W9XpkXoCzcpIYq5RMvrGdjZcs7IeBJLbTcBk4fTSnPHxT%2B2U6yAa992WrmfZoGumpptLEPOgzCoXfw591%2BRY3lVs4Y%2FvfzCexjfJPM7IRT%2B5KgqAZQccWlzMBVuOL%2Fw7fX8UQNQ2eCOcCjjukA2wCK0x2JcCACA&X-Amz-Signature=ec7907bbbc0d77000fa134a9971b57b6547bcb5116fb4b4e4bc9f98f855076bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RIK2KBW%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDkuFKlos471i473cNmLltrRFj1h6WMb0akMwfSYB0GnQIgflEeGthTyWWsvfcJkgTKGTU7iet23prjSwVJ%2B4FSosoq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDHxT2ueVpeOga%2Ff5wSrcA3vCVo6N6PGVuyXIYreSmABxYtzbFYi5bcBsfxA80k9sK1vECBmvy2X27%2F0dLUi607pmcnplvucmxEdD5cO3rs6uh51efKKD%2BjtAJt12lZ%2BWFDL1%2Fnx1EPyOTd8JCq0%2BiUO1IGO54p05J0JSPifwvgF2DYlzHzTTL3SpmTN51TrJvVicmfRzR4yvgJGZ4LN3gr4cWm9elftv93Ch9rWlzGDaNm5oYzlxK%2BjAQWJ3xzraDTMQOwF6PPz0xlm%2FTzL0y9KxFoz5TaSeA4%2Fkl6lfl%2Be9DPZQRmPfFwKhWdfUubnMSFxN0iK7hDvIEfQQASo%2FYXnwz2bVXNY04inNtVfNvVGZwopNEgborisYucL9H3nSqDaqb1gDreH57nppGwYQ8dCg0jCPAl3OYm1cB%2BZYiGeI9QifxwzOQF85gdKoX2LyP3VMbOvIdVXn6XYxBPn%2BGmFpmgAfZfjtd5HQckZi%2BB5HdE68yvN%2B%2F0m63Bl2c1T%2BTKFoWyP8IxOh4wPDAXTbCcxesoSdylKlJel%2FJsayNYSKVZL%2BLQpDdfCp7S50GFdR3NpBf8NQ4oAmGH50%2BpOXf4R1dt1ezCUMq8f2dEoprp4UP3nPZ6n3v6ZEA6OmLNI%2FSPL9wPXU3AEqDz0HMLvag80GOqUBrm1Ad0gPnRBf7DBZSlcCJNwFTQJ60OF5yme99swwMtRru7kKxqANfzf0khe43W9XpkXoCzcpIYq5RMvrGdjZcs7IeBJLbTcBk4fTSnPHxT%2B2U6yAa992WrmfZoGumpptLEPOgzCoXfw591%2BRY3lVs4Y%2FvfzCexjfJPM7IRT%2B5KgqAZQccWlzMBVuOL%2Fw7fX8UQNQ2eCOcCjjukA2wCK0x2JcCACA&X-Amz-Signature=6ebedaa25cbb9a7259f2235d7d2261843c5ea78bdad38e3e5cdd2abc1b4c0420&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RIK2KBW%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDkuFKlos471i473cNmLltrRFj1h6WMb0akMwfSYB0GnQIgflEeGthTyWWsvfcJkgTKGTU7iet23prjSwVJ%2B4FSosoq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDHxT2ueVpeOga%2Ff5wSrcA3vCVo6N6PGVuyXIYreSmABxYtzbFYi5bcBsfxA80k9sK1vECBmvy2X27%2F0dLUi607pmcnplvucmxEdD5cO3rs6uh51efKKD%2BjtAJt12lZ%2BWFDL1%2Fnx1EPyOTd8JCq0%2BiUO1IGO54p05J0JSPifwvgF2DYlzHzTTL3SpmTN51TrJvVicmfRzR4yvgJGZ4LN3gr4cWm9elftv93Ch9rWlzGDaNm5oYzlxK%2BjAQWJ3xzraDTMQOwF6PPz0xlm%2FTzL0y9KxFoz5TaSeA4%2Fkl6lfl%2Be9DPZQRmPfFwKhWdfUubnMSFxN0iK7hDvIEfQQASo%2FYXnwz2bVXNY04inNtVfNvVGZwopNEgborisYucL9H3nSqDaqb1gDreH57nppGwYQ8dCg0jCPAl3OYm1cB%2BZYiGeI9QifxwzOQF85gdKoX2LyP3VMbOvIdVXn6XYxBPn%2BGmFpmgAfZfjtd5HQckZi%2BB5HdE68yvN%2B%2F0m63Bl2c1T%2BTKFoWyP8IxOh4wPDAXTbCcxesoSdylKlJel%2FJsayNYSKVZL%2BLQpDdfCp7S50GFdR3NpBf8NQ4oAmGH50%2BpOXf4R1dt1ezCUMq8f2dEoprp4UP3nPZ6n3v6ZEA6OmLNI%2FSPL9wPXU3AEqDz0HMLvag80GOqUBrm1Ad0gPnRBf7DBZSlcCJNwFTQJ60OF5yme99swwMtRru7kKxqANfzf0khe43W9XpkXoCzcpIYq5RMvrGdjZcs7IeBJLbTcBk4fTSnPHxT%2B2U6yAa992WrmfZoGumpptLEPOgzCoXfw591%2BRY3lVs4Y%2FvfzCexjfJPM7IRT%2B5KgqAZQccWlzMBVuOL%2Fw7fX8UQNQ2eCOcCjjukA2wCK0x2JcCACA&X-Amz-Signature=bb4af0c1f1519f309ebc208cb99a80a56e5d90e6e0bdd46df574e648b671358b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RIK2KBW%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDkuFKlos471i473cNmLltrRFj1h6WMb0akMwfSYB0GnQIgflEeGthTyWWsvfcJkgTKGTU7iet23prjSwVJ%2B4FSosoq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDHxT2ueVpeOga%2Ff5wSrcA3vCVo6N6PGVuyXIYreSmABxYtzbFYi5bcBsfxA80k9sK1vECBmvy2X27%2F0dLUi607pmcnplvucmxEdD5cO3rs6uh51efKKD%2BjtAJt12lZ%2BWFDL1%2Fnx1EPyOTd8JCq0%2BiUO1IGO54p05J0JSPifwvgF2DYlzHzTTL3SpmTN51TrJvVicmfRzR4yvgJGZ4LN3gr4cWm9elftv93Ch9rWlzGDaNm5oYzlxK%2BjAQWJ3xzraDTMQOwF6PPz0xlm%2FTzL0y9KxFoz5TaSeA4%2Fkl6lfl%2Be9DPZQRmPfFwKhWdfUubnMSFxN0iK7hDvIEfQQASo%2FYXnwz2bVXNY04inNtVfNvVGZwopNEgborisYucL9H3nSqDaqb1gDreH57nppGwYQ8dCg0jCPAl3OYm1cB%2BZYiGeI9QifxwzOQF85gdKoX2LyP3VMbOvIdVXn6XYxBPn%2BGmFpmgAfZfjtd5HQckZi%2BB5HdE68yvN%2B%2F0m63Bl2c1T%2BTKFoWyP8IxOh4wPDAXTbCcxesoSdylKlJel%2FJsayNYSKVZL%2BLQpDdfCp7S50GFdR3NpBf8NQ4oAmGH50%2BpOXf4R1dt1ezCUMq8f2dEoprp4UP3nPZ6n3v6ZEA6OmLNI%2FSPL9wPXU3AEqDz0HMLvag80GOqUBrm1Ad0gPnRBf7DBZSlcCJNwFTQJ60OF5yme99swwMtRru7kKxqANfzf0khe43W9XpkXoCzcpIYq5RMvrGdjZcs7IeBJLbTcBk4fTSnPHxT%2B2U6yAa992WrmfZoGumpptLEPOgzCoXfw591%2BRY3lVs4Y%2FvfzCexjfJPM7IRT%2B5KgqAZQccWlzMBVuOL%2Fw7fX8UQNQ2eCOcCjjukA2wCK0x2JcCACA&X-Amz-Signature=d5d070dae3881498416572073c9c78fe3c0850be248579bb61372ddd4e6ed98f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RIK2KBW%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDkuFKlos471i473cNmLltrRFj1h6WMb0akMwfSYB0GnQIgflEeGthTyWWsvfcJkgTKGTU7iet23prjSwVJ%2B4FSosoq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDHxT2ueVpeOga%2Ff5wSrcA3vCVo6N6PGVuyXIYreSmABxYtzbFYi5bcBsfxA80k9sK1vECBmvy2X27%2F0dLUi607pmcnplvucmxEdD5cO3rs6uh51efKKD%2BjtAJt12lZ%2BWFDL1%2Fnx1EPyOTd8JCq0%2BiUO1IGO54p05J0JSPifwvgF2DYlzHzTTL3SpmTN51TrJvVicmfRzR4yvgJGZ4LN3gr4cWm9elftv93Ch9rWlzGDaNm5oYzlxK%2BjAQWJ3xzraDTMQOwF6PPz0xlm%2FTzL0y9KxFoz5TaSeA4%2Fkl6lfl%2Be9DPZQRmPfFwKhWdfUubnMSFxN0iK7hDvIEfQQASo%2FYXnwz2bVXNY04inNtVfNvVGZwopNEgborisYucL9H3nSqDaqb1gDreH57nppGwYQ8dCg0jCPAl3OYm1cB%2BZYiGeI9QifxwzOQF85gdKoX2LyP3VMbOvIdVXn6XYxBPn%2BGmFpmgAfZfjtd5HQckZi%2BB5HdE68yvN%2B%2F0m63Bl2c1T%2BTKFoWyP8IxOh4wPDAXTbCcxesoSdylKlJel%2FJsayNYSKVZL%2BLQpDdfCp7S50GFdR3NpBf8NQ4oAmGH50%2BpOXf4R1dt1ezCUMq8f2dEoprp4UP3nPZ6n3v6ZEA6OmLNI%2FSPL9wPXU3AEqDz0HMLvag80GOqUBrm1Ad0gPnRBf7DBZSlcCJNwFTQJ60OF5yme99swwMtRru7kKxqANfzf0khe43W9XpkXoCzcpIYq5RMvrGdjZcs7IeBJLbTcBk4fTSnPHxT%2B2U6yAa992WrmfZoGumpptLEPOgzCoXfw591%2BRY3lVs4Y%2FvfzCexjfJPM7IRT%2B5KgqAZQccWlzMBVuOL%2Fw7fX8UQNQ2eCOcCjjukA2wCK0x2JcCACA&X-Amz-Signature=ab11ba1b3daa32363df87dd8734e34aea09273c8684eecb7e5c0abbf6b4017f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
