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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLZN72FZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDPRrQRjXtBnQ7E2hMV9nLBNtq34JI0lGS7scMDNpaMvQIgCgEWmloY3ZkkllOaapqve0pRNQQjTLUy0YokqGMuWGoq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDMG8rxvRBeVa%2BAywuircA%2FvgDCke1kayK0HhLs4FcSORQvvXVYRO5O6oMEU%2FkeVfr%2B4po16MYb%2F9sGdcysD%2BW3Efk9oqgrO3naXOcpj2oeMZQZ73VCv52wt7MYXXmdqYCPDxwubgku%2FghrSOSHiAiAPUYirb3HHPnj%2FdSK8fTXZ7VUX3h3HBiwafNXjBmCqsiwDDtlN628lIjM%2BREYXad%2F9ghtgIoM8eZ%2Bd1KOdUM7V4fJ6JjevEjyaWUC%2FXn%2FOQir9bGjfDVQe4090bxVNwSKUODxbHnsTBw6JrciNslC2zWxL7eUwzw5l8bEst6CXkIwHXD1qiFS6c2kz2WDFEa6kssMza0jDn1SjXu05Sv5byLLEkJNibKqkX3y0UlGg9JPZZKdUg0dfh6ddGsmd9w0LBFPWsP9HsQDQAy5dP2iOmEhaFg48n1tY%2FI6lcl3QDh364DXHVzWFlWiG6ddvW3wRY6ebl%2FJtT9veK8hH7DW7LtH5c2KsY9h0XV3nstci0irFpAJsRu3iJ4kq4317zzAQMbndPbKsX73S8C0zQXJJGg6Y43uN5xg2qhJWMe5W1EbQMHYoV%2F4%2BgGgrf%2BGxhm%2B6BLKXFwtNwhIVFEJorD3KMaln23PNv0VfAtgV6s0SqKO3BaC5QpxtbbUUlMKODyMQGOqUB%2FXDoF658JEBDmGevp6%2FXDjgc7mAwsC1FZSNDHboEh8xi7lSUs0G%2Bv3bsAps4RoDCRC4uTlhdhzTEFSnKJbb%2BXh%2BvcbH6YrVyHBgXXaZz0lQ8Be%2Fiq%2FPHBNV5u5uZn%2Bq7mJR%2BrhkPziAbTFeZt8qxGFFl8v2k0p6QlGDLQKeZMVnDx9AYXjVSdmsj%2FGYDbFeXnGNmOaAUuy7H0med%2FPbhvkf1I%2Fy6&X-Amz-Signature=c7105b6d2fd2a9e3faf9e3ac456844ec7384b0bc71bdfb14d8c77b916d568b5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T45MEZT4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCZsQDGaqBmhGl75eSUVjQDikpqu4Qk4IsPeHiXeMrs%2BQIhAP%2B8Dq5DM4mckOU51c%2Fn1Gha41neYF1vD4xGEHIztILCKv8DCF4QABoMNjM3NDIzMTgzODA1IgzOrj3dc50LO%2Fkghz0q3AOmIzJ%2Fl8aSCBynsPE%2FOMj9xTgKXxYfE6gxHIlAX0uqWW7aMbyGLK1vcakjqT7k8qpwyGlPcbCPoDqODROCHi7pHVnSspXkrw57NZu%2Fi3ILPxtXteFIO0H4%2BAv0sObKmVycPjpif%2BzUtnmdslruD4%2BMH9anSjrpyj6wp4d8g4I36Ya%2B0QxqjwNe17zRx4CXhRkEgVo3%2BCphLVV8ISf9uHX3EH%2B5Glf1Mekwr1ulECbIVMX6oCSJFJ3al56yN1Y8RuJQYraBCzCTCcnz5uNy4FD53yA62GU52ELMPnYiCcmyt0dQD22BCD1G9%2FpcDnt%2FiWochTSK%2BWx8W9IT%2FGYa43YH7a252H3qrLikMgtGKsbXVYb03WHgVlDe6oDv6PzGZhQ%2BdGKbLqQil%2B546pip83KsZznR%2F6lCypVG0F3hz%2BsvDbteTNaI0szJ2K7GCRShP0wPBTg%2Fyv4JUcpteHExAV0Uz%2BD7wyLISeGd0DIVXBRCoTfEq1iA5X62dUrmGzhPm%2BjFgamMOK2rkyT99i47b2ziX%2BKJCqAxraz40exOTiGgs7xL0vmJ6iRQr%2BsC5JLMbuXPA6qxVg5L8ZXWvjX54p9XWIjsqeTHXzjYUPvOOy8dsHHVba4McwCL2WCXyzDvg8jEBjqkAdP4QKzv0X3jwULe047M%2FZsFvm0kesqZrCYBx2cif5ghBrxe0B4iTk83rgabsYy9CP4OEwCk4R79iNaWhOJtni51X8ONe53HirtmPU1r7XPbuEhpXYdwI7edje%2F9y1BGJSoqVyT2L7iQcdv1xSrSj5Df1q0yBAtAJ9N06trdZZ2bVtZ5Bk7Jzu79hiAudS3KudJfg0ZL9sE%2FIFf%2BVEEwAWxc6Wd7&X-Amz-Signature=0d975b493a22fcad96ec56b3b8ba7760605a2d2cd2823f9203141c4114323234&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T45MEZT4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCZsQDGaqBmhGl75eSUVjQDikpqu4Qk4IsPeHiXeMrs%2BQIhAP%2B8Dq5DM4mckOU51c%2Fn1Gha41neYF1vD4xGEHIztILCKv8DCF4QABoMNjM3NDIzMTgzODA1IgzOrj3dc50LO%2Fkghz0q3AOmIzJ%2Fl8aSCBynsPE%2FOMj9xTgKXxYfE6gxHIlAX0uqWW7aMbyGLK1vcakjqT7k8qpwyGlPcbCPoDqODROCHi7pHVnSspXkrw57NZu%2Fi3ILPxtXteFIO0H4%2BAv0sObKmVycPjpif%2BzUtnmdslruD4%2BMH9anSjrpyj6wp4d8g4I36Ya%2B0QxqjwNe17zRx4CXhRkEgVo3%2BCphLVV8ISf9uHX3EH%2B5Glf1Mekwr1ulECbIVMX6oCSJFJ3al56yN1Y8RuJQYraBCzCTCcnz5uNy4FD53yA62GU52ELMPnYiCcmyt0dQD22BCD1G9%2FpcDnt%2FiWochTSK%2BWx8W9IT%2FGYa43YH7a252H3qrLikMgtGKsbXVYb03WHgVlDe6oDv6PzGZhQ%2BdGKbLqQil%2B546pip83KsZznR%2F6lCypVG0F3hz%2BsvDbteTNaI0szJ2K7GCRShP0wPBTg%2Fyv4JUcpteHExAV0Uz%2BD7wyLISeGd0DIVXBRCoTfEq1iA5X62dUrmGzhPm%2BjFgamMOK2rkyT99i47b2ziX%2BKJCqAxraz40exOTiGgs7xL0vmJ6iRQr%2BsC5JLMbuXPA6qxVg5L8ZXWvjX54p9XWIjsqeTHXzjYUPvOOy8dsHHVba4McwCL2WCXyzDvg8jEBjqkAdP4QKzv0X3jwULe047M%2FZsFvm0kesqZrCYBx2cif5ghBrxe0B4iTk83rgabsYy9CP4OEwCk4R79iNaWhOJtni51X8ONe53HirtmPU1r7XPbuEhpXYdwI7edje%2F9y1BGJSoqVyT2L7iQcdv1xSrSj5Df1q0yBAtAJ9N06trdZZ2bVtZ5Bk7Jzu79hiAudS3KudJfg0ZL9sE%2FIFf%2BVEEwAWxc6Wd7&X-Amz-Signature=96aae51962a49969f2135223286942a506a7829320869f74c196f15da3696e9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T45MEZT4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCZsQDGaqBmhGl75eSUVjQDikpqu4Qk4IsPeHiXeMrs%2BQIhAP%2B8Dq5DM4mckOU51c%2Fn1Gha41neYF1vD4xGEHIztILCKv8DCF4QABoMNjM3NDIzMTgzODA1IgzOrj3dc50LO%2Fkghz0q3AOmIzJ%2Fl8aSCBynsPE%2FOMj9xTgKXxYfE6gxHIlAX0uqWW7aMbyGLK1vcakjqT7k8qpwyGlPcbCPoDqODROCHi7pHVnSspXkrw57NZu%2Fi3ILPxtXteFIO0H4%2BAv0sObKmVycPjpif%2BzUtnmdslruD4%2BMH9anSjrpyj6wp4d8g4I36Ya%2B0QxqjwNe17zRx4CXhRkEgVo3%2BCphLVV8ISf9uHX3EH%2B5Glf1Mekwr1ulECbIVMX6oCSJFJ3al56yN1Y8RuJQYraBCzCTCcnz5uNy4FD53yA62GU52ELMPnYiCcmyt0dQD22BCD1G9%2FpcDnt%2FiWochTSK%2BWx8W9IT%2FGYa43YH7a252H3qrLikMgtGKsbXVYb03WHgVlDe6oDv6PzGZhQ%2BdGKbLqQil%2B546pip83KsZznR%2F6lCypVG0F3hz%2BsvDbteTNaI0szJ2K7GCRShP0wPBTg%2Fyv4JUcpteHExAV0Uz%2BD7wyLISeGd0DIVXBRCoTfEq1iA5X62dUrmGzhPm%2BjFgamMOK2rkyT99i47b2ziX%2BKJCqAxraz40exOTiGgs7xL0vmJ6iRQr%2BsC5JLMbuXPA6qxVg5L8ZXWvjX54p9XWIjsqeTHXzjYUPvOOy8dsHHVba4McwCL2WCXyzDvg8jEBjqkAdP4QKzv0X3jwULe047M%2FZsFvm0kesqZrCYBx2cif5ghBrxe0B4iTk83rgabsYy9CP4OEwCk4R79iNaWhOJtni51X8ONe53HirtmPU1r7XPbuEhpXYdwI7edje%2F9y1BGJSoqVyT2L7iQcdv1xSrSj5Df1q0yBAtAJ9N06trdZZ2bVtZ5Bk7Jzu79hiAudS3KudJfg0ZL9sE%2FIFf%2BVEEwAWxc6Wd7&X-Amz-Signature=7481d485ce90a64f718559e10b65956c50e4aa9a8dfb3b296708bacfdccc58a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T45MEZT4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCZsQDGaqBmhGl75eSUVjQDikpqu4Qk4IsPeHiXeMrs%2BQIhAP%2B8Dq5DM4mckOU51c%2Fn1Gha41neYF1vD4xGEHIztILCKv8DCF4QABoMNjM3NDIzMTgzODA1IgzOrj3dc50LO%2Fkghz0q3AOmIzJ%2Fl8aSCBynsPE%2FOMj9xTgKXxYfE6gxHIlAX0uqWW7aMbyGLK1vcakjqT7k8qpwyGlPcbCPoDqODROCHi7pHVnSspXkrw57NZu%2Fi3ILPxtXteFIO0H4%2BAv0sObKmVycPjpif%2BzUtnmdslruD4%2BMH9anSjrpyj6wp4d8g4I36Ya%2B0QxqjwNe17zRx4CXhRkEgVo3%2BCphLVV8ISf9uHX3EH%2B5Glf1Mekwr1ulECbIVMX6oCSJFJ3al56yN1Y8RuJQYraBCzCTCcnz5uNy4FD53yA62GU52ELMPnYiCcmyt0dQD22BCD1G9%2FpcDnt%2FiWochTSK%2BWx8W9IT%2FGYa43YH7a252H3qrLikMgtGKsbXVYb03WHgVlDe6oDv6PzGZhQ%2BdGKbLqQil%2B546pip83KsZznR%2F6lCypVG0F3hz%2BsvDbteTNaI0szJ2K7GCRShP0wPBTg%2Fyv4JUcpteHExAV0Uz%2BD7wyLISeGd0DIVXBRCoTfEq1iA5X62dUrmGzhPm%2BjFgamMOK2rkyT99i47b2ziX%2BKJCqAxraz40exOTiGgs7xL0vmJ6iRQr%2BsC5JLMbuXPA6qxVg5L8ZXWvjX54p9XWIjsqeTHXzjYUPvOOy8dsHHVba4McwCL2WCXyzDvg8jEBjqkAdP4QKzv0X3jwULe047M%2FZsFvm0kesqZrCYBx2cif5ghBrxe0B4iTk83rgabsYy9CP4OEwCk4R79iNaWhOJtni51X8ONe53HirtmPU1r7XPbuEhpXYdwI7edje%2F9y1BGJSoqVyT2L7iQcdv1xSrSj5Df1q0yBAtAJ9N06trdZZ2bVtZ5Bk7Jzu79hiAudS3KudJfg0ZL9sE%2FIFf%2BVEEwAWxc6Wd7&X-Amz-Signature=6c853bd42daad0369f962a64e6152e7a703c6d92f156d2897792d69288b24f8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T45MEZT4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCZsQDGaqBmhGl75eSUVjQDikpqu4Qk4IsPeHiXeMrs%2BQIhAP%2B8Dq5DM4mckOU51c%2Fn1Gha41neYF1vD4xGEHIztILCKv8DCF4QABoMNjM3NDIzMTgzODA1IgzOrj3dc50LO%2Fkghz0q3AOmIzJ%2Fl8aSCBynsPE%2FOMj9xTgKXxYfE6gxHIlAX0uqWW7aMbyGLK1vcakjqT7k8qpwyGlPcbCPoDqODROCHi7pHVnSspXkrw57NZu%2Fi3ILPxtXteFIO0H4%2BAv0sObKmVycPjpif%2BzUtnmdslruD4%2BMH9anSjrpyj6wp4d8g4I36Ya%2B0QxqjwNe17zRx4CXhRkEgVo3%2BCphLVV8ISf9uHX3EH%2B5Glf1Mekwr1ulECbIVMX6oCSJFJ3al56yN1Y8RuJQYraBCzCTCcnz5uNy4FD53yA62GU52ELMPnYiCcmyt0dQD22BCD1G9%2FpcDnt%2FiWochTSK%2BWx8W9IT%2FGYa43YH7a252H3qrLikMgtGKsbXVYb03WHgVlDe6oDv6PzGZhQ%2BdGKbLqQil%2B546pip83KsZznR%2F6lCypVG0F3hz%2BsvDbteTNaI0szJ2K7GCRShP0wPBTg%2Fyv4JUcpteHExAV0Uz%2BD7wyLISeGd0DIVXBRCoTfEq1iA5X62dUrmGzhPm%2BjFgamMOK2rkyT99i47b2ziX%2BKJCqAxraz40exOTiGgs7xL0vmJ6iRQr%2BsC5JLMbuXPA6qxVg5L8ZXWvjX54p9XWIjsqeTHXzjYUPvOOy8dsHHVba4McwCL2WCXyzDvg8jEBjqkAdP4QKzv0X3jwULe047M%2FZsFvm0kesqZrCYBx2cif5ghBrxe0B4iTk83rgabsYy9CP4OEwCk4R79iNaWhOJtni51X8ONe53HirtmPU1r7XPbuEhpXYdwI7edje%2F9y1BGJSoqVyT2L7iQcdv1xSrSj5Df1q0yBAtAJ9N06trdZZ2bVtZ5Bk7Jzu79hiAudS3KudJfg0ZL9sE%2FIFf%2BVEEwAWxc6Wd7&X-Amz-Signature=8fa54e6968afee58c057eba24017847f12b3932c74e9152d61bfb13adf8564b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T45MEZT4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCZsQDGaqBmhGl75eSUVjQDikpqu4Qk4IsPeHiXeMrs%2BQIhAP%2B8Dq5DM4mckOU51c%2Fn1Gha41neYF1vD4xGEHIztILCKv8DCF4QABoMNjM3NDIzMTgzODA1IgzOrj3dc50LO%2Fkghz0q3AOmIzJ%2Fl8aSCBynsPE%2FOMj9xTgKXxYfE6gxHIlAX0uqWW7aMbyGLK1vcakjqT7k8qpwyGlPcbCPoDqODROCHi7pHVnSspXkrw57NZu%2Fi3ILPxtXteFIO0H4%2BAv0sObKmVycPjpif%2BzUtnmdslruD4%2BMH9anSjrpyj6wp4d8g4I36Ya%2B0QxqjwNe17zRx4CXhRkEgVo3%2BCphLVV8ISf9uHX3EH%2B5Glf1Mekwr1ulECbIVMX6oCSJFJ3al56yN1Y8RuJQYraBCzCTCcnz5uNy4FD53yA62GU52ELMPnYiCcmyt0dQD22BCD1G9%2FpcDnt%2FiWochTSK%2BWx8W9IT%2FGYa43YH7a252H3qrLikMgtGKsbXVYb03WHgVlDe6oDv6PzGZhQ%2BdGKbLqQil%2B546pip83KsZznR%2F6lCypVG0F3hz%2BsvDbteTNaI0szJ2K7GCRShP0wPBTg%2Fyv4JUcpteHExAV0Uz%2BD7wyLISeGd0DIVXBRCoTfEq1iA5X62dUrmGzhPm%2BjFgamMOK2rkyT99i47b2ziX%2BKJCqAxraz40exOTiGgs7xL0vmJ6iRQr%2BsC5JLMbuXPA6qxVg5L8ZXWvjX54p9XWIjsqeTHXzjYUPvOOy8dsHHVba4McwCL2WCXyzDvg8jEBjqkAdP4QKzv0X3jwULe047M%2FZsFvm0kesqZrCYBx2cif5ghBrxe0B4iTk83rgabsYy9CP4OEwCk4R79iNaWhOJtni51X8ONe53HirtmPU1r7XPbuEhpXYdwI7edje%2F9y1BGJSoqVyT2L7iQcdv1xSrSj5Df1q0yBAtAJ9N06trdZZ2bVtZ5Bk7Jzu79hiAudS3KudJfg0ZL9sE%2FIFf%2BVEEwAWxc6Wd7&X-Amz-Signature=e841a702f2d1d8a2290005f3a111b45280da2885f184606e38cda41e5a13ba05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T45MEZT4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCZsQDGaqBmhGl75eSUVjQDikpqu4Qk4IsPeHiXeMrs%2BQIhAP%2B8Dq5DM4mckOU51c%2Fn1Gha41neYF1vD4xGEHIztILCKv8DCF4QABoMNjM3NDIzMTgzODA1IgzOrj3dc50LO%2Fkghz0q3AOmIzJ%2Fl8aSCBynsPE%2FOMj9xTgKXxYfE6gxHIlAX0uqWW7aMbyGLK1vcakjqT7k8qpwyGlPcbCPoDqODROCHi7pHVnSspXkrw57NZu%2Fi3ILPxtXteFIO0H4%2BAv0sObKmVycPjpif%2BzUtnmdslruD4%2BMH9anSjrpyj6wp4d8g4I36Ya%2B0QxqjwNe17zRx4CXhRkEgVo3%2BCphLVV8ISf9uHX3EH%2B5Glf1Mekwr1ulECbIVMX6oCSJFJ3al56yN1Y8RuJQYraBCzCTCcnz5uNy4FD53yA62GU52ELMPnYiCcmyt0dQD22BCD1G9%2FpcDnt%2FiWochTSK%2BWx8W9IT%2FGYa43YH7a252H3qrLikMgtGKsbXVYb03WHgVlDe6oDv6PzGZhQ%2BdGKbLqQil%2B546pip83KsZznR%2F6lCypVG0F3hz%2BsvDbteTNaI0szJ2K7GCRShP0wPBTg%2Fyv4JUcpteHExAV0Uz%2BD7wyLISeGd0DIVXBRCoTfEq1iA5X62dUrmGzhPm%2BjFgamMOK2rkyT99i47b2ziX%2BKJCqAxraz40exOTiGgs7xL0vmJ6iRQr%2BsC5JLMbuXPA6qxVg5L8ZXWvjX54p9XWIjsqeTHXzjYUPvOOy8dsHHVba4McwCL2WCXyzDvg8jEBjqkAdP4QKzv0X3jwULe047M%2FZsFvm0kesqZrCYBx2cif5ghBrxe0B4iTk83rgabsYy9CP4OEwCk4R79iNaWhOJtni51X8ONe53HirtmPU1r7XPbuEhpXYdwI7edje%2F9y1BGJSoqVyT2L7iQcdv1xSrSj5Df1q0yBAtAJ9N06trdZZ2bVtZ5Bk7Jzu79hiAudS3KudJfg0ZL9sE%2FIFf%2BVEEwAWxc6Wd7&X-Amz-Signature=7e596b233f0a711d7baff8980dad036669a8414aec9a94f0dc30bb985a64d6f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T45MEZT4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCZsQDGaqBmhGl75eSUVjQDikpqu4Qk4IsPeHiXeMrs%2BQIhAP%2B8Dq5DM4mckOU51c%2Fn1Gha41neYF1vD4xGEHIztILCKv8DCF4QABoMNjM3NDIzMTgzODA1IgzOrj3dc50LO%2Fkghz0q3AOmIzJ%2Fl8aSCBynsPE%2FOMj9xTgKXxYfE6gxHIlAX0uqWW7aMbyGLK1vcakjqT7k8qpwyGlPcbCPoDqODROCHi7pHVnSspXkrw57NZu%2Fi3ILPxtXteFIO0H4%2BAv0sObKmVycPjpif%2BzUtnmdslruD4%2BMH9anSjrpyj6wp4d8g4I36Ya%2B0QxqjwNe17zRx4CXhRkEgVo3%2BCphLVV8ISf9uHX3EH%2B5Glf1Mekwr1ulECbIVMX6oCSJFJ3al56yN1Y8RuJQYraBCzCTCcnz5uNy4FD53yA62GU52ELMPnYiCcmyt0dQD22BCD1G9%2FpcDnt%2FiWochTSK%2BWx8W9IT%2FGYa43YH7a252H3qrLikMgtGKsbXVYb03WHgVlDe6oDv6PzGZhQ%2BdGKbLqQil%2B546pip83KsZznR%2F6lCypVG0F3hz%2BsvDbteTNaI0szJ2K7GCRShP0wPBTg%2Fyv4JUcpteHExAV0Uz%2BD7wyLISeGd0DIVXBRCoTfEq1iA5X62dUrmGzhPm%2BjFgamMOK2rkyT99i47b2ziX%2BKJCqAxraz40exOTiGgs7xL0vmJ6iRQr%2BsC5JLMbuXPA6qxVg5L8ZXWvjX54p9XWIjsqeTHXzjYUPvOOy8dsHHVba4McwCL2WCXyzDvg8jEBjqkAdP4QKzv0X3jwULe047M%2FZsFvm0kesqZrCYBx2cif5ghBrxe0B4iTk83rgabsYy9CP4OEwCk4R79iNaWhOJtni51X8ONe53HirtmPU1r7XPbuEhpXYdwI7edje%2F9y1BGJSoqVyT2L7iQcdv1xSrSj5Df1q0yBAtAJ9N06trdZZ2bVtZ5Bk7Jzu79hiAudS3KudJfg0ZL9sE%2FIFf%2BVEEwAWxc6Wd7&X-Amz-Signature=806b16efcbfcda30f5d3751169b5f39351993384a2e270ff035c9df534fbe91c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T45MEZT4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCZsQDGaqBmhGl75eSUVjQDikpqu4Qk4IsPeHiXeMrs%2BQIhAP%2B8Dq5DM4mckOU51c%2Fn1Gha41neYF1vD4xGEHIztILCKv8DCF4QABoMNjM3NDIzMTgzODA1IgzOrj3dc50LO%2Fkghz0q3AOmIzJ%2Fl8aSCBynsPE%2FOMj9xTgKXxYfE6gxHIlAX0uqWW7aMbyGLK1vcakjqT7k8qpwyGlPcbCPoDqODROCHi7pHVnSspXkrw57NZu%2Fi3ILPxtXteFIO0H4%2BAv0sObKmVycPjpif%2BzUtnmdslruD4%2BMH9anSjrpyj6wp4d8g4I36Ya%2B0QxqjwNe17zRx4CXhRkEgVo3%2BCphLVV8ISf9uHX3EH%2B5Glf1Mekwr1ulECbIVMX6oCSJFJ3al56yN1Y8RuJQYraBCzCTCcnz5uNy4FD53yA62GU52ELMPnYiCcmyt0dQD22BCD1G9%2FpcDnt%2FiWochTSK%2BWx8W9IT%2FGYa43YH7a252H3qrLikMgtGKsbXVYb03WHgVlDe6oDv6PzGZhQ%2BdGKbLqQil%2B546pip83KsZznR%2F6lCypVG0F3hz%2BsvDbteTNaI0szJ2K7GCRShP0wPBTg%2Fyv4JUcpteHExAV0Uz%2BD7wyLISeGd0DIVXBRCoTfEq1iA5X62dUrmGzhPm%2BjFgamMOK2rkyT99i47b2ziX%2BKJCqAxraz40exOTiGgs7xL0vmJ6iRQr%2BsC5JLMbuXPA6qxVg5L8ZXWvjX54p9XWIjsqeTHXzjYUPvOOy8dsHHVba4McwCL2WCXyzDvg8jEBjqkAdP4QKzv0X3jwULe047M%2FZsFvm0kesqZrCYBx2cif5ghBrxe0B4iTk83rgabsYy9CP4OEwCk4R79iNaWhOJtni51X8ONe53HirtmPU1r7XPbuEhpXYdwI7edje%2F9y1BGJSoqVyT2L7iQcdv1xSrSj5Df1q0yBAtAJ9N06trdZZ2bVtZ5Bk7Jzu79hiAudS3KudJfg0ZL9sE%2FIFf%2BVEEwAWxc6Wd7&X-Amz-Signature=2b61d650d9423878dafdd50f10c48ee75b35e04f414b56359f1f3903affc7897&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T45MEZT4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCZsQDGaqBmhGl75eSUVjQDikpqu4Qk4IsPeHiXeMrs%2BQIhAP%2B8Dq5DM4mckOU51c%2Fn1Gha41neYF1vD4xGEHIztILCKv8DCF4QABoMNjM3NDIzMTgzODA1IgzOrj3dc50LO%2Fkghz0q3AOmIzJ%2Fl8aSCBynsPE%2FOMj9xTgKXxYfE6gxHIlAX0uqWW7aMbyGLK1vcakjqT7k8qpwyGlPcbCPoDqODROCHi7pHVnSspXkrw57NZu%2Fi3ILPxtXteFIO0H4%2BAv0sObKmVycPjpif%2BzUtnmdslruD4%2BMH9anSjrpyj6wp4d8g4I36Ya%2B0QxqjwNe17zRx4CXhRkEgVo3%2BCphLVV8ISf9uHX3EH%2B5Glf1Mekwr1ulECbIVMX6oCSJFJ3al56yN1Y8RuJQYraBCzCTCcnz5uNy4FD53yA62GU52ELMPnYiCcmyt0dQD22BCD1G9%2FpcDnt%2FiWochTSK%2BWx8W9IT%2FGYa43YH7a252H3qrLikMgtGKsbXVYb03WHgVlDe6oDv6PzGZhQ%2BdGKbLqQil%2B546pip83KsZznR%2F6lCypVG0F3hz%2BsvDbteTNaI0szJ2K7GCRShP0wPBTg%2Fyv4JUcpteHExAV0Uz%2BD7wyLISeGd0DIVXBRCoTfEq1iA5X62dUrmGzhPm%2BjFgamMOK2rkyT99i47b2ziX%2BKJCqAxraz40exOTiGgs7xL0vmJ6iRQr%2BsC5JLMbuXPA6qxVg5L8ZXWvjX54p9XWIjsqeTHXzjYUPvOOy8dsHHVba4McwCL2WCXyzDvg8jEBjqkAdP4QKzv0X3jwULe047M%2FZsFvm0kesqZrCYBx2cif5ghBrxe0B4iTk83rgabsYy9CP4OEwCk4R79iNaWhOJtni51X8ONe53HirtmPU1r7XPbuEhpXYdwI7edje%2F9y1BGJSoqVyT2L7iQcdv1xSrSj5Df1q0yBAtAJ9N06trdZZ2bVtZ5Bk7Jzu79hiAudS3KudJfg0ZL9sE%2FIFf%2BVEEwAWxc6Wd7&X-Amz-Signature=6c853bd42daad0369f962a64e6152e7a703c6d92f156d2897792d69288b24f8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
