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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTBJETV7%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCICUo133O%2Ba32I7MWaDOQzCx2UwdiTfVIZF2iHgeFv5HdAiAoOnPUuok%2BR%2BZo0T5M2vW3cpuSPMKsf9TIH8pUhB1pRiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF%2FjpKVARu8tu056VKtwDlGojCpdZs9ijqFK%2FNoJ%2FABvtLJBqKnuzTeNch97jL%2Baqg9JxgaHlEpQ8fVE5ze%2Fx9yn36RRNf3%2Fb%2Fz0kPqROqo%2BzTfaye%2Fnax3Ji0Rr3h3eDwUAIucq178IPp4hzmC4tcn2VUE3%2ByOawDeP2OgSeeFNlGFAolrnOM8g%2BDtZumg2ea08irTjBsKOo%2BV1FhhkafnrdZxhr%2BpJ0%2F5BjU%2F0DiC6usZb%2B3Fa5p%2FWlV%2B8nujBCbpdZp4TIl44cDzO0RdqsHzfWVh9NAgjYeKjVFlp1rNAMgsLq7U7a6JcMu1xv3pV0SVdqV4kbMjyI98ASrMWKjrH9fHsnSo3VYWXhg75TALRDADVHor6KjtpB6ekTZu4xdqSj8P5u8tXF02c4s5cXblvRFmgt%2FhCjFdONuky27TwOMsCAdK0c1hvGWaB%2Fa5dMHaAb5BCazsiwR7Z1EEO9QT04k2B1vSBnypTHM3c78EfGDfcoRb2tU4NgmO6exilS5kJQFp6yqnzDi026LgyA5ZSdRweWlagOJY%2FWEHbGcHCFk7nTMABh9TW7jDMEwf%2B%2FgdN%2FtspjHJq1PqxsAfqSQuXAjKM06F7psAqPPBYhA9QGEjhXs5rIY4dz0CwRq60njokONHT5eEFJHPowsOqJxQY6pgGYUCG%2BrZG9scYbUmErr9guQo%2BXottOd3AKMCYFW2H4FMNPhZ9oYKKp9Dn0%2BJsyiFW9fzjd8%2BF0sApVZ%2FmAsyfJYvfWxTCQcpmVsQYYsStCg8d2pQXvKWN4Epogs5ujrH5ovtIlRawe3U4ZmRW%2B%2BI1SC%2FEeonZXiE%2FX27dVK0aRxjsBIUAhCUQ01iuTbESB7IZSPaY4%2FqbdKljaw%2F7P87lj9b7cYeJ2&X-Amz-Signature=39be56c6ab8e2c71286122d0b509599d87649e143f7344b8c3adaf7a3c870106&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVQR6BV7%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDLnA4vCsZcCoCZPwEFMoUMHdfhqjfS%2FtjIJfzi0WBLlAIhAL1hbqaTHiw5eHBHrqJn8oqZbOjXpDiyxErElXPZm0kmKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx190CCyF%2BvGDgn8uoq3AOxfNLOTRKMmWZqI12594wdrKIIYuV7Y%2FuY29ojnREUfSQM9nuRcPyXl0QESCuPM8iqPq47eFQC3QatBwHRn217YWKoqASBfEDqOeX93HVw85s7kzTkExTcBvCuMDr94NnmGar5ahCYwSMVQGUy6ZVqUrYkLu7TfV2zQvIZPUe6DBv4WrvWrn0xSTNTwU02OnRz1WQB9jBjZB8U4wxjGTqViS7KViHkpfMNep%2Bu2jWTni2OvLSeJDztbeDpC1%2BlHLCQbnHtMaP8PELVbFq7wnKKGWe7QHojbQAV1whv8r2jO1qEkuTGUYBY%2B2zO5sQXOO%2B1O0WfB0zuc5tF1zTzEe6O7scRYazCsOM4Hw0pnk2e9RmrfYD5uQI1tRK96LTG7JdH%2Br7sSkSFlN2M84Tio7l4lQMfi3Mtb7bUoR7OIpSC4Gs6zRpImZxMZO30fho8%2FI%2BEVckLYEb7FwWMauMzFmvwa7WyXAlORBAKcpSLaZlxiBqKMA8fv%2BFa5ov4kqzAS2sWxIjb%2F4c0m9b13m4T6HtfLDEDMt91UfjFFhQGsrVu2U54yhULgxdOvikiQIcKjMCF%2B32UA02ch7zZfwnHek3UpIImnulw7WpntfT2RuHMNSNsLpeKreP2XDH4gzC36onFBjqkAUFIa0MFA48RZFypo5eWpBlSJIQDxSITarZrzG%2FdbcC14qZCEUG2SvR9hf1QXVeGoHUubDiGIkwlBTrJL6vzLEyowbTssvEOmLQUrjdx1GR1qmS%2BsU3GbkYMSSX0ABW6p7b4e3qXOIsNNzgiQ6osw2S0O2vgOAQqVo67r73Ok%2FiRdJ3FHcBQN6l4RbgCeMqPZ8pRCtO9wJeEk5qkfAFx3eE13sLT&X-Amz-Signature=b561677bde25c4ea1729562ff7a52ac9e8a8a290b36a98e5fe501582ec69a87e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVQR6BV7%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDLnA4vCsZcCoCZPwEFMoUMHdfhqjfS%2FtjIJfzi0WBLlAIhAL1hbqaTHiw5eHBHrqJn8oqZbOjXpDiyxErElXPZm0kmKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx190CCyF%2BvGDgn8uoq3AOxfNLOTRKMmWZqI12594wdrKIIYuV7Y%2FuY29ojnREUfSQM9nuRcPyXl0QESCuPM8iqPq47eFQC3QatBwHRn217YWKoqASBfEDqOeX93HVw85s7kzTkExTcBvCuMDr94NnmGar5ahCYwSMVQGUy6ZVqUrYkLu7TfV2zQvIZPUe6DBv4WrvWrn0xSTNTwU02OnRz1WQB9jBjZB8U4wxjGTqViS7KViHkpfMNep%2Bu2jWTni2OvLSeJDztbeDpC1%2BlHLCQbnHtMaP8PELVbFq7wnKKGWe7QHojbQAV1whv8r2jO1qEkuTGUYBY%2B2zO5sQXOO%2B1O0WfB0zuc5tF1zTzEe6O7scRYazCsOM4Hw0pnk2e9RmrfYD5uQI1tRK96LTG7JdH%2Br7sSkSFlN2M84Tio7l4lQMfi3Mtb7bUoR7OIpSC4Gs6zRpImZxMZO30fho8%2FI%2BEVckLYEb7FwWMauMzFmvwa7WyXAlORBAKcpSLaZlxiBqKMA8fv%2BFa5ov4kqzAS2sWxIjb%2F4c0m9b13m4T6HtfLDEDMt91UfjFFhQGsrVu2U54yhULgxdOvikiQIcKjMCF%2B32UA02ch7zZfwnHek3UpIImnulw7WpntfT2RuHMNSNsLpeKreP2XDH4gzC36onFBjqkAUFIa0MFA48RZFypo5eWpBlSJIQDxSITarZrzG%2FdbcC14qZCEUG2SvR9hf1QXVeGoHUubDiGIkwlBTrJL6vzLEyowbTssvEOmLQUrjdx1GR1qmS%2BsU3GbkYMSSX0ABW6p7b4e3qXOIsNNzgiQ6osw2S0O2vgOAQqVo67r73Ok%2FiRdJ3FHcBQN6l4RbgCeMqPZ8pRCtO9wJeEk5qkfAFx3eE13sLT&X-Amz-Signature=358e3fc2b18fdc3904d9eeefc75a75d37a8201fb8a8771e3f99d6f551c37ed48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVQR6BV7%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDLnA4vCsZcCoCZPwEFMoUMHdfhqjfS%2FtjIJfzi0WBLlAIhAL1hbqaTHiw5eHBHrqJn8oqZbOjXpDiyxErElXPZm0kmKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx190CCyF%2BvGDgn8uoq3AOxfNLOTRKMmWZqI12594wdrKIIYuV7Y%2FuY29ojnREUfSQM9nuRcPyXl0QESCuPM8iqPq47eFQC3QatBwHRn217YWKoqASBfEDqOeX93HVw85s7kzTkExTcBvCuMDr94NnmGar5ahCYwSMVQGUy6ZVqUrYkLu7TfV2zQvIZPUe6DBv4WrvWrn0xSTNTwU02OnRz1WQB9jBjZB8U4wxjGTqViS7KViHkpfMNep%2Bu2jWTni2OvLSeJDztbeDpC1%2BlHLCQbnHtMaP8PELVbFq7wnKKGWe7QHojbQAV1whv8r2jO1qEkuTGUYBY%2B2zO5sQXOO%2B1O0WfB0zuc5tF1zTzEe6O7scRYazCsOM4Hw0pnk2e9RmrfYD5uQI1tRK96LTG7JdH%2Br7sSkSFlN2M84Tio7l4lQMfi3Mtb7bUoR7OIpSC4Gs6zRpImZxMZO30fho8%2FI%2BEVckLYEb7FwWMauMzFmvwa7WyXAlORBAKcpSLaZlxiBqKMA8fv%2BFa5ov4kqzAS2sWxIjb%2F4c0m9b13m4T6HtfLDEDMt91UfjFFhQGsrVu2U54yhULgxdOvikiQIcKjMCF%2B32UA02ch7zZfwnHek3UpIImnulw7WpntfT2RuHMNSNsLpeKreP2XDH4gzC36onFBjqkAUFIa0MFA48RZFypo5eWpBlSJIQDxSITarZrzG%2FdbcC14qZCEUG2SvR9hf1QXVeGoHUubDiGIkwlBTrJL6vzLEyowbTssvEOmLQUrjdx1GR1qmS%2BsU3GbkYMSSX0ABW6p7b4e3qXOIsNNzgiQ6osw2S0O2vgOAQqVo67r73Ok%2FiRdJ3FHcBQN6l4RbgCeMqPZ8pRCtO9wJeEk5qkfAFx3eE13sLT&X-Amz-Signature=2b116c08048eacd939e3fd16c558f392738eda439ee0f7d53c64cf4d4fa1ba05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVQR6BV7%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDLnA4vCsZcCoCZPwEFMoUMHdfhqjfS%2FtjIJfzi0WBLlAIhAL1hbqaTHiw5eHBHrqJn8oqZbOjXpDiyxErElXPZm0kmKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx190CCyF%2BvGDgn8uoq3AOxfNLOTRKMmWZqI12594wdrKIIYuV7Y%2FuY29ojnREUfSQM9nuRcPyXl0QESCuPM8iqPq47eFQC3QatBwHRn217YWKoqASBfEDqOeX93HVw85s7kzTkExTcBvCuMDr94NnmGar5ahCYwSMVQGUy6ZVqUrYkLu7TfV2zQvIZPUe6DBv4WrvWrn0xSTNTwU02OnRz1WQB9jBjZB8U4wxjGTqViS7KViHkpfMNep%2Bu2jWTni2OvLSeJDztbeDpC1%2BlHLCQbnHtMaP8PELVbFq7wnKKGWe7QHojbQAV1whv8r2jO1qEkuTGUYBY%2B2zO5sQXOO%2B1O0WfB0zuc5tF1zTzEe6O7scRYazCsOM4Hw0pnk2e9RmrfYD5uQI1tRK96LTG7JdH%2Br7sSkSFlN2M84Tio7l4lQMfi3Mtb7bUoR7OIpSC4Gs6zRpImZxMZO30fho8%2FI%2BEVckLYEb7FwWMauMzFmvwa7WyXAlORBAKcpSLaZlxiBqKMA8fv%2BFa5ov4kqzAS2sWxIjb%2F4c0m9b13m4T6HtfLDEDMt91UfjFFhQGsrVu2U54yhULgxdOvikiQIcKjMCF%2B32UA02ch7zZfwnHek3UpIImnulw7WpntfT2RuHMNSNsLpeKreP2XDH4gzC36onFBjqkAUFIa0MFA48RZFypo5eWpBlSJIQDxSITarZrzG%2FdbcC14qZCEUG2SvR9hf1QXVeGoHUubDiGIkwlBTrJL6vzLEyowbTssvEOmLQUrjdx1GR1qmS%2BsU3GbkYMSSX0ABW6p7b4e3qXOIsNNzgiQ6osw2S0O2vgOAQqVo67r73Ok%2FiRdJ3FHcBQN6l4RbgCeMqPZ8pRCtO9wJeEk5qkfAFx3eE13sLT&X-Amz-Signature=c390ad336c914d512d66592f683b41de71f5b9b1bcbab1d6856da45dc1c47a3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVQR6BV7%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDLnA4vCsZcCoCZPwEFMoUMHdfhqjfS%2FtjIJfzi0WBLlAIhAL1hbqaTHiw5eHBHrqJn8oqZbOjXpDiyxErElXPZm0kmKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx190CCyF%2BvGDgn8uoq3AOxfNLOTRKMmWZqI12594wdrKIIYuV7Y%2FuY29ojnREUfSQM9nuRcPyXl0QESCuPM8iqPq47eFQC3QatBwHRn217YWKoqASBfEDqOeX93HVw85s7kzTkExTcBvCuMDr94NnmGar5ahCYwSMVQGUy6ZVqUrYkLu7TfV2zQvIZPUe6DBv4WrvWrn0xSTNTwU02OnRz1WQB9jBjZB8U4wxjGTqViS7KViHkpfMNep%2Bu2jWTni2OvLSeJDztbeDpC1%2BlHLCQbnHtMaP8PELVbFq7wnKKGWe7QHojbQAV1whv8r2jO1qEkuTGUYBY%2B2zO5sQXOO%2B1O0WfB0zuc5tF1zTzEe6O7scRYazCsOM4Hw0pnk2e9RmrfYD5uQI1tRK96LTG7JdH%2Br7sSkSFlN2M84Tio7l4lQMfi3Mtb7bUoR7OIpSC4Gs6zRpImZxMZO30fho8%2FI%2BEVckLYEb7FwWMauMzFmvwa7WyXAlORBAKcpSLaZlxiBqKMA8fv%2BFa5ov4kqzAS2sWxIjb%2F4c0m9b13m4T6HtfLDEDMt91UfjFFhQGsrVu2U54yhULgxdOvikiQIcKjMCF%2B32UA02ch7zZfwnHek3UpIImnulw7WpntfT2RuHMNSNsLpeKreP2XDH4gzC36onFBjqkAUFIa0MFA48RZFypo5eWpBlSJIQDxSITarZrzG%2FdbcC14qZCEUG2SvR9hf1QXVeGoHUubDiGIkwlBTrJL6vzLEyowbTssvEOmLQUrjdx1GR1qmS%2BsU3GbkYMSSX0ABW6p7b4e3qXOIsNNzgiQ6osw2S0O2vgOAQqVo67r73Ok%2FiRdJ3FHcBQN6l4RbgCeMqPZ8pRCtO9wJeEk5qkfAFx3eE13sLT&X-Amz-Signature=37044c6d16a9ff32c8b3592a498bfc26e0bfc93d596c61702e453ebafa06dc3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVQR6BV7%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDLnA4vCsZcCoCZPwEFMoUMHdfhqjfS%2FtjIJfzi0WBLlAIhAL1hbqaTHiw5eHBHrqJn8oqZbOjXpDiyxErElXPZm0kmKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx190CCyF%2BvGDgn8uoq3AOxfNLOTRKMmWZqI12594wdrKIIYuV7Y%2FuY29ojnREUfSQM9nuRcPyXl0QESCuPM8iqPq47eFQC3QatBwHRn217YWKoqASBfEDqOeX93HVw85s7kzTkExTcBvCuMDr94NnmGar5ahCYwSMVQGUy6ZVqUrYkLu7TfV2zQvIZPUe6DBv4WrvWrn0xSTNTwU02OnRz1WQB9jBjZB8U4wxjGTqViS7KViHkpfMNep%2Bu2jWTni2OvLSeJDztbeDpC1%2BlHLCQbnHtMaP8PELVbFq7wnKKGWe7QHojbQAV1whv8r2jO1qEkuTGUYBY%2B2zO5sQXOO%2B1O0WfB0zuc5tF1zTzEe6O7scRYazCsOM4Hw0pnk2e9RmrfYD5uQI1tRK96LTG7JdH%2Br7sSkSFlN2M84Tio7l4lQMfi3Mtb7bUoR7OIpSC4Gs6zRpImZxMZO30fho8%2FI%2BEVckLYEb7FwWMauMzFmvwa7WyXAlORBAKcpSLaZlxiBqKMA8fv%2BFa5ov4kqzAS2sWxIjb%2F4c0m9b13m4T6HtfLDEDMt91UfjFFhQGsrVu2U54yhULgxdOvikiQIcKjMCF%2B32UA02ch7zZfwnHek3UpIImnulw7WpntfT2RuHMNSNsLpeKreP2XDH4gzC36onFBjqkAUFIa0MFA48RZFypo5eWpBlSJIQDxSITarZrzG%2FdbcC14qZCEUG2SvR9hf1QXVeGoHUubDiGIkwlBTrJL6vzLEyowbTssvEOmLQUrjdx1GR1qmS%2BsU3GbkYMSSX0ABW6p7b4e3qXOIsNNzgiQ6osw2S0O2vgOAQqVo67r73Ok%2FiRdJ3FHcBQN6l4RbgCeMqPZ8pRCtO9wJeEk5qkfAFx3eE13sLT&X-Amz-Signature=f7d1e2263261afbbcf55651739735c96f7d03c377039badcea3941b08fad79d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVQR6BV7%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDLnA4vCsZcCoCZPwEFMoUMHdfhqjfS%2FtjIJfzi0WBLlAIhAL1hbqaTHiw5eHBHrqJn8oqZbOjXpDiyxErElXPZm0kmKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx190CCyF%2BvGDgn8uoq3AOxfNLOTRKMmWZqI12594wdrKIIYuV7Y%2FuY29ojnREUfSQM9nuRcPyXl0QESCuPM8iqPq47eFQC3QatBwHRn217YWKoqASBfEDqOeX93HVw85s7kzTkExTcBvCuMDr94NnmGar5ahCYwSMVQGUy6ZVqUrYkLu7TfV2zQvIZPUe6DBv4WrvWrn0xSTNTwU02OnRz1WQB9jBjZB8U4wxjGTqViS7KViHkpfMNep%2Bu2jWTni2OvLSeJDztbeDpC1%2BlHLCQbnHtMaP8PELVbFq7wnKKGWe7QHojbQAV1whv8r2jO1qEkuTGUYBY%2B2zO5sQXOO%2B1O0WfB0zuc5tF1zTzEe6O7scRYazCsOM4Hw0pnk2e9RmrfYD5uQI1tRK96LTG7JdH%2Br7sSkSFlN2M84Tio7l4lQMfi3Mtb7bUoR7OIpSC4Gs6zRpImZxMZO30fho8%2FI%2BEVckLYEb7FwWMauMzFmvwa7WyXAlORBAKcpSLaZlxiBqKMA8fv%2BFa5ov4kqzAS2sWxIjb%2F4c0m9b13m4T6HtfLDEDMt91UfjFFhQGsrVu2U54yhULgxdOvikiQIcKjMCF%2B32UA02ch7zZfwnHek3UpIImnulw7WpntfT2RuHMNSNsLpeKreP2XDH4gzC36onFBjqkAUFIa0MFA48RZFypo5eWpBlSJIQDxSITarZrzG%2FdbcC14qZCEUG2SvR9hf1QXVeGoHUubDiGIkwlBTrJL6vzLEyowbTssvEOmLQUrjdx1GR1qmS%2BsU3GbkYMSSX0ABW6p7b4e3qXOIsNNzgiQ6osw2S0O2vgOAQqVo67r73Ok%2FiRdJ3FHcBQN6l4RbgCeMqPZ8pRCtO9wJeEk5qkfAFx3eE13sLT&X-Amz-Signature=3386b2374a11492f6f52b9ac2c32cca78a933d01e1564c21f5f92b92e54abc9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVQR6BV7%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDLnA4vCsZcCoCZPwEFMoUMHdfhqjfS%2FtjIJfzi0WBLlAIhAL1hbqaTHiw5eHBHrqJn8oqZbOjXpDiyxErElXPZm0kmKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx190CCyF%2BvGDgn8uoq3AOxfNLOTRKMmWZqI12594wdrKIIYuV7Y%2FuY29ojnREUfSQM9nuRcPyXl0QESCuPM8iqPq47eFQC3QatBwHRn217YWKoqASBfEDqOeX93HVw85s7kzTkExTcBvCuMDr94NnmGar5ahCYwSMVQGUy6ZVqUrYkLu7TfV2zQvIZPUe6DBv4WrvWrn0xSTNTwU02OnRz1WQB9jBjZB8U4wxjGTqViS7KViHkpfMNep%2Bu2jWTni2OvLSeJDztbeDpC1%2BlHLCQbnHtMaP8PELVbFq7wnKKGWe7QHojbQAV1whv8r2jO1qEkuTGUYBY%2B2zO5sQXOO%2B1O0WfB0zuc5tF1zTzEe6O7scRYazCsOM4Hw0pnk2e9RmrfYD5uQI1tRK96LTG7JdH%2Br7sSkSFlN2M84Tio7l4lQMfi3Mtb7bUoR7OIpSC4Gs6zRpImZxMZO30fho8%2FI%2BEVckLYEb7FwWMauMzFmvwa7WyXAlORBAKcpSLaZlxiBqKMA8fv%2BFa5ov4kqzAS2sWxIjb%2F4c0m9b13m4T6HtfLDEDMt91UfjFFhQGsrVu2U54yhULgxdOvikiQIcKjMCF%2B32UA02ch7zZfwnHek3UpIImnulw7WpntfT2RuHMNSNsLpeKreP2XDH4gzC36onFBjqkAUFIa0MFA48RZFypo5eWpBlSJIQDxSITarZrzG%2FdbcC14qZCEUG2SvR9hf1QXVeGoHUubDiGIkwlBTrJL6vzLEyowbTssvEOmLQUrjdx1GR1qmS%2BsU3GbkYMSSX0ABW6p7b4e3qXOIsNNzgiQ6osw2S0O2vgOAQqVo67r73Ok%2FiRdJ3FHcBQN6l4RbgCeMqPZ8pRCtO9wJeEk5qkfAFx3eE13sLT&X-Amz-Signature=ccc8125c40045aaf952af8bcf4a10057fef58d398d8833ffc89dbd6055bcc3f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVQR6BV7%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDLnA4vCsZcCoCZPwEFMoUMHdfhqjfS%2FtjIJfzi0WBLlAIhAL1hbqaTHiw5eHBHrqJn8oqZbOjXpDiyxErElXPZm0kmKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx190CCyF%2BvGDgn8uoq3AOxfNLOTRKMmWZqI12594wdrKIIYuV7Y%2FuY29ojnREUfSQM9nuRcPyXl0QESCuPM8iqPq47eFQC3QatBwHRn217YWKoqASBfEDqOeX93HVw85s7kzTkExTcBvCuMDr94NnmGar5ahCYwSMVQGUy6ZVqUrYkLu7TfV2zQvIZPUe6DBv4WrvWrn0xSTNTwU02OnRz1WQB9jBjZB8U4wxjGTqViS7KViHkpfMNep%2Bu2jWTni2OvLSeJDztbeDpC1%2BlHLCQbnHtMaP8PELVbFq7wnKKGWe7QHojbQAV1whv8r2jO1qEkuTGUYBY%2B2zO5sQXOO%2B1O0WfB0zuc5tF1zTzEe6O7scRYazCsOM4Hw0pnk2e9RmrfYD5uQI1tRK96LTG7JdH%2Br7sSkSFlN2M84Tio7l4lQMfi3Mtb7bUoR7OIpSC4Gs6zRpImZxMZO30fho8%2FI%2BEVckLYEb7FwWMauMzFmvwa7WyXAlORBAKcpSLaZlxiBqKMA8fv%2BFa5ov4kqzAS2sWxIjb%2F4c0m9b13m4T6HtfLDEDMt91UfjFFhQGsrVu2U54yhULgxdOvikiQIcKjMCF%2B32UA02ch7zZfwnHek3UpIImnulw7WpntfT2RuHMNSNsLpeKreP2XDH4gzC36onFBjqkAUFIa0MFA48RZFypo5eWpBlSJIQDxSITarZrzG%2FdbcC14qZCEUG2SvR9hf1QXVeGoHUubDiGIkwlBTrJL6vzLEyowbTssvEOmLQUrjdx1GR1qmS%2BsU3GbkYMSSX0ABW6p7b4e3qXOIsNNzgiQ6osw2S0O2vgOAQqVo67r73Ok%2FiRdJ3FHcBQN6l4RbgCeMqPZ8pRCtO9wJeEk5qkfAFx3eE13sLT&X-Amz-Signature=9b1eab9090d411534daeb0e81d68f7ecb545a8417ed4f24a0d286471a46b9fbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVQR6BV7%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDLnA4vCsZcCoCZPwEFMoUMHdfhqjfS%2FtjIJfzi0WBLlAIhAL1hbqaTHiw5eHBHrqJn8oqZbOjXpDiyxErElXPZm0kmKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx190CCyF%2BvGDgn8uoq3AOxfNLOTRKMmWZqI12594wdrKIIYuV7Y%2FuY29ojnREUfSQM9nuRcPyXl0QESCuPM8iqPq47eFQC3QatBwHRn217YWKoqASBfEDqOeX93HVw85s7kzTkExTcBvCuMDr94NnmGar5ahCYwSMVQGUy6ZVqUrYkLu7TfV2zQvIZPUe6DBv4WrvWrn0xSTNTwU02OnRz1WQB9jBjZB8U4wxjGTqViS7KViHkpfMNep%2Bu2jWTni2OvLSeJDztbeDpC1%2BlHLCQbnHtMaP8PELVbFq7wnKKGWe7QHojbQAV1whv8r2jO1qEkuTGUYBY%2B2zO5sQXOO%2B1O0WfB0zuc5tF1zTzEe6O7scRYazCsOM4Hw0pnk2e9RmrfYD5uQI1tRK96LTG7JdH%2Br7sSkSFlN2M84Tio7l4lQMfi3Mtb7bUoR7OIpSC4Gs6zRpImZxMZO30fho8%2FI%2BEVckLYEb7FwWMauMzFmvwa7WyXAlORBAKcpSLaZlxiBqKMA8fv%2BFa5ov4kqzAS2sWxIjb%2F4c0m9b13m4T6HtfLDEDMt91UfjFFhQGsrVu2U54yhULgxdOvikiQIcKjMCF%2B32UA02ch7zZfwnHek3UpIImnulw7WpntfT2RuHMNSNsLpeKreP2XDH4gzC36onFBjqkAUFIa0MFA48RZFypo5eWpBlSJIQDxSITarZrzG%2FdbcC14qZCEUG2SvR9hf1QXVeGoHUubDiGIkwlBTrJL6vzLEyowbTssvEOmLQUrjdx1GR1qmS%2BsU3GbkYMSSX0ABW6p7b4e3qXOIsNNzgiQ6osw2S0O2vgOAQqVo67r73Ok%2FiRdJ3FHcBQN6l4RbgCeMqPZ8pRCtO9wJeEk5qkfAFx3eE13sLT&X-Amz-Signature=c390ad336c914d512d66592f683b41de71f5b9b1bcbab1d6856da45dc1c47a3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
