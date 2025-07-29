---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-07-29T01:28:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-07-29T01:28:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KBQT55K%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDG957b%2FgrFfPgp5ldmaHSv%2FDZg%2Be5tnC69PNpr1b1d7wIhAM%2Bv3E9MHZejlXfYiFn3PPEpi9DF2ROw5a%2BJDM0gGDgQKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGZrt9MqmnLx267Coq3ANb%2B5y0mr0fu73FUd4pdpv662%2BBEjgZS%2Fy8KFkiwJ67v5uE3ct7r8Mv3TDM%2B4sPdAGlWbwQonaVoI7lpNrQrWIX2ati5KCeqwGazCNMQbd4qwIcz%2BQnk%2FjzGQ7DzHliVUoUqLN9yuGTcAzWkU6u2A0nmI7m9jVHUOGzeErg%2Bj6FPfiOlTeKmUJvZuCV1zHclp%2F2%2BBd2Q6try3QYjPDhyLIjtFbd%2BcY5%2B%2BZ7GxSRjv7zY0QWMgPMeTVn8v0dgNB0N6WjREWuB5aNSEUHvInHwSt0%2BOoaDZpM3i83aNoKMyw7Nh01uHn2%2FNl9sJbD%2BJLGvY1iVMJOCI39sfnY7W3QhlZLFn959ruIDfxDDReJaXsCLUusj8IG8OvtFNk8IVz7U8gtHVGrwZl7ulVnDTYA8FCVvNviMOrrEjyIoysQNqM5oM2xKcK8VIBTZdHQV4keGzhSrKGv4CHGEJse14dH2kmdA4wFgDn6QO6uSbkXJzK50UnbnS7DT0v%2BokAqqs7qLhoAh6lQZwPTniKFxRQyOuALGXGJ2CxomuqBCf%2B0e5zaBjBb%2Bs9AplMW529yp7oAYPlBRawcwN0I8kLPAJlw2mFTpHbZL%2BlYcePXZBul41Rr4RGN1MjfVrmNk4iPyDCasaLEBjqkAcSQLSVqxM6ejwXBBQGEZ1%2Bg1vr5PT2tLELZTi7FM0mwLNtrpu976Sk6SqW13M%2BdMKu%2BT5drPQvAH3KC6zprUr6n4Xf9PSNJZwmLwuYNEYt%2Fo5YTFqUcqsMrchB%2B4wzvVMrDFzNAmvCx4VhYmFW3cDVaJhkdXK7RqabduFxlt%2FCjSr%2BvYA1thgWtHOTfTdhJrRXk68C319tsy9JrqDAMrJ8P%2FdUB&X-Amz-Signature=730a37338d634cd36f9bb6a9dac551394bb8b830f4ed430bf054635eecd43fb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KBQT55K%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDG957b%2FgrFfPgp5ldmaHSv%2FDZg%2Be5tnC69PNpr1b1d7wIhAM%2Bv3E9MHZejlXfYiFn3PPEpi9DF2ROw5a%2BJDM0gGDgQKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGZrt9MqmnLx267Coq3ANb%2B5y0mr0fu73FUd4pdpv662%2BBEjgZS%2Fy8KFkiwJ67v5uE3ct7r8Mv3TDM%2B4sPdAGlWbwQonaVoI7lpNrQrWIX2ati5KCeqwGazCNMQbd4qwIcz%2BQnk%2FjzGQ7DzHliVUoUqLN9yuGTcAzWkU6u2A0nmI7m9jVHUOGzeErg%2Bj6FPfiOlTeKmUJvZuCV1zHclp%2F2%2BBd2Q6try3QYjPDhyLIjtFbd%2BcY5%2B%2BZ7GxSRjv7zY0QWMgPMeTVn8v0dgNB0N6WjREWuB5aNSEUHvInHwSt0%2BOoaDZpM3i83aNoKMyw7Nh01uHn2%2FNl9sJbD%2BJLGvY1iVMJOCI39sfnY7W3QhlZLFn959ruIDfxDDReJaXsCLUusj8IG8OvtFNk8IVz7U8gtHVGrwZl7ulVnDTYA8FCVvNviMOrrEjyIoysQNqM5oM2xKcK8VIBTZdHQV4keGzhSrKGv4CHGEJse14dH2kmdA4wFgDn6QO6uSbkXJzK50UnbnS7DT0v%2BokAqqs7qLhoAh6lQZwPTniKFxRQyOuALGXGJ2CxomuqBCf%2B0e5zaBjBb%2Bs9AplMW529yp7oAYPlBRawcwN0I8kLPAJlw2mFTpHbZL%2BlYcePXZBul41Rr4RGN1MjfVrmNk4iPyDCasaLEBjqkAcSQLSVqxM6ejwXBBQGEZ1%2Bg1vr5PT2tLELZTi7FM0mwLNtrpu976Sk6SqW13M%2BdMKu%2BT5drPQvAH3KC6zprUr6n4Xf9PSNJZwmLwuYNEYt%2Fo5YTFqUcqsMrchB%2B4wzvVMrDFzNAmvCx4VhYmFW3cDVaJhkdXK7RqabduFxlt%2FCjSr%2BvYA1thgWtHOTfTdhJrRXk68C319tsy9JrqDAMrJ8P%2FdUB&X-Amz-Signature=f4a628a8b193fd57a0e6d03276e7166fbb2c82c1a2c1b68fe357aef864c2b472&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KBQT55K%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDG957b%2FgrFfPgp5ldmaHSv%2FDZg%2Be5tnC69PNpr1b1d7wIhAM%2Bv3E9MHZejlXfYiFn3PPEpi9DF2ROw5a%2BJDM0gGDgQKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGZrt9MqmnLx267Coq3ANb%2B5y0mr0fu73FUd4pdpv662%2BBEjgZS%2Fy8KFkiwJ67v5uE3ct7r8Mv3TDM%2B4sPdAGlWbwQonaVoI7lpNrQrWIX2ati5KCeqwGazCNMQbd4qwIcz%2BQnk%2FjzGQ7DzHliVUoUqLN9yuGTcAzWkU6u2A0nmI7m9jVHUOGzeErg%2Bj6FPfiOlTeKmUJvZuCV1zHclp%2F2%2BBd2Q6try3QYjPDhyLIjtFbd%2BcY5%2B%2BZ7GxSRjv7zY0QWMgPMeTVn8v0dgNB0N6WjREWuB5aNSEUHvInHwSt0%2BOoaDZpM3i83aNoKMyw7Nh01uHn2%2FNl9sJbD%2BJLGvY1iVMJOCI39sfnY7W3QhlZLFn959ruIDfxDDReJaXsCLUusj8IG8OvtFNk8IVz7U8gtHVGrwZl7ulVnDTYA8FCVvNviMOrrEjyIoysQNqM5oM2xKcK8VIBTZdHQV4keGzhSrKGv4CHGEJse14dH2kmdA4wFgDn6QO6uSbkXJzK50UnbnS7DT0v%2BokAqqs7qLhoAh6lQZwPTniKFxRQyOuALGXGJ2CxomuqBCf%2B0e5zaBjBb%2Bs9AplMW529yp7oAYPlBRawcwN0I8kLPAJlw2mFTpHbZL%2BlYcePXZBul41Rr4RGN1MjfVrmNk4iPyDCasaLEBjqkAcSQLSVqxM6ejwXBBQGEZ1%2Bg1vr5PT2tLELZTi7FM0mwLNtrpu976Sk6SqW13M%2BdMKu%2BT5drPQvAH3KC6zprUr6n4Xf9PSNJZwmLwuYNEYt%2Fo5YTFqUcqsMrchB%2B4wzvVMrDFzNAmvCx4VhYmFW3cDVaJhkdXK7RqabduFxlt%2FCjSr%2BvYA1thgWtHOTfTdhJrRXk68C319tsy9JrqDAMrJ8P%2FdUB&X-Amz-Signature=413b10a75451a67181062d3d47d744d71c4ffdd30610f94d52c985a166c20a90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KBQT55K%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDG957b%2FgrFfPgp5ldmaHSv%2FDZg%2Be5tnC69PNpr1b1d7wIhAM%2Bv3E9MHZejlXfYiFn3PPEpi9DF2ROw5a%2BJDM0gGDgQKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGZrt9MqmnLx267Coq3ANb%2B5y0mr0fu73FUd4pdpv662%2BBEjgZS%2Fy8KFkiwJ67v5uE3ct7r8Mv3TDM%2B4sPdAGlWbwQonaVoI7lpNrQrWIX2ati5KCeqwGazCNMQbd4qwIcz%2BQnk%2FjzGQ7DzHliVUoUqLN9yuGTcAzWkU6u2A0nmI7m9jVHUOGzeErg%2Bj6FPfiOlTeKmUJvZuCV1zHclp%2F2%2BBd2Q6try3QYjPDhyLIjtFbd%2BcY5%2B%2BZ7GxSRjv7zY0QWMgPMeTVn8v0dgNB0N6WjREWuB5aNSEUHvInHwSt0%2BOoaDZpM3i83aNoKMyw7Nh01uHn2%2FNl9sJbD%2BJLGvY1iVMJOCI39sfnY7W3QhlZLFn959ruIDfxDDReJaXsCLUusj8IG8OvtFNk8IVz7U8gtHVGrwZl7ulVnDTYA8FCVvNviMOrrEjyIoysQNqM5oM2xKcK8VIBTZdHQV4keGzhSrKGv4CHGEJse14dH2kmdA4wFgDn6QO6uSbkXJzK50UnbnS7DT0v%2BokAqqs7qLhoAh6lQZwPTniKFxRQyOuALGXGJ2CxomuqBCf%2B0e5zaBjBb%2Bs9AplMW529yp7oAYPlBRawcwN0I8kLPAJlw2mFTpHbZL%2BlYcePXZBul41Rr4RGN1MjfVrmNk4iPyDCasaLEBjqkAcSQLSVqxM6ejwXBBQGEZ1%2Bg1vr5PT2tLELZTi7FM0mwLNtrpu976Sk6SqW13M%2BdMKu%2BT5drPQvAH3KC6zprUr6n4Xf9PSNJZwmLwuYNEYt%2Fo5YTFqUcqsMrchB%2B4wzvVMrDFzNAmvCx4VhYmFW3cDVaJhkdXK7RqabduFxlt%2FCjSr%2BvYA1thgWtHOTfTdhJrRXk68C319tsy9JrqDAMrJ8P%2FdUB&X-Amz-Signature=0f5fceeca6bf5456fd2cac2fdb288ff425be8ac80bec52537b985728c68948c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KBQT55K%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDG957b%2FgrFfPgp5ldmaHSv%2FDZg%2Be5tnC69PNpr1b1d7wIhAM%2Bv3E9MHZejlXfYiFn3PPEpi9DF2ROw5a%2BJDM0gGDgQKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGZrt9MqmnLx267Coq3ANb%2B5y0mr0fu73FUd4pdpv662%2BBEjgZS%2Fy8KFkiwJ67v5uE3ct7r8Mv3TDM%2B4sPdAGlWbwQonaVoI7lpNrQrWIX2ati5KCeqwGazCNMQbd4qwIcz%2BQnk%2FjzGQ7DzHliVUoUqLN9yuGTcAzWkU6u2A0nmI7m9jVHUOGzeErg%2Bj6FPfiOlTeKmUJvZuCV1zHclp%2F2%2BBd2Q6try3QYjPDhyLIjtFbd%2BcY5%2B%2BZ7GxSRjv7zY0QWMgPMeTVn8v0dgNB0N6WjREWuB5aNSEUHvInHwSt0%2BOoaDZpM3i83aNoKMyw7Nh01uHn2%2FNl9sJbD%2BJLGvY1iVMJOCI39sfnY7W3QhlZLFn959ruIDfxDDReJaXsCLUusj8IG8OvtFNk8IVz7U8gtHVGrwZl7ulVnDTYA8FCVvNviMOrrEjyIoysQNqM5oM2xKcK8VIBTZdHQV4keGzhSrKGv4CHGEJse14dH2kmdA4wFgDn6QO6uSbkXJzK50UnbnS7DT0v%2BokAqqs7qLhoAh6lQZwPTniKFxRQyOuALGXGJ2CxomuqBCf%2B0e5zaBjBb%2Bs9AplMW529yp7oAYPlBRawcwN0I8kLPAJlw2mFTpHbZL%2BlYcePXZBul41Rr4RGN1MjfVrmNk4iPyDCasaLEBjqkAcSQLSVqxM6ejwXBBQGEZ1%2Bg1vr5PT2tLELZTi7FM0mwLNtrpu976Sk6SqW13M%2BdMKu%2BT5drPQvAH3KC6zprUr6n4Xf9PSNJZwmLwuYNEYt%2Fo5YTFqUcqsMrchB%2B4wzvVMrDFzNAmvCx4VhYmFW3cDVaJhkdXK7RqabduFxlt%2FCjSr%2BvYA1thgWtHOTfTdhJrRXk68C319tsy9JrqDAMrJ8P%2FdUB&X-Amz-Signature=c604865b10e070e61db7b583d57d6b4242f551472deb005d77af60ed9092c478&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KBQT55K%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDG957b%2FgrFfPgp5ldmaHSv%2FDZg%2Be5tnC69PNpr1b1d7wIhAM%2Bv3E9MHZejlXfYiFn3PPEpi9DF2ROw5a%2BJDM0gGDgQKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGZrt9MqmnLx267Coq3ANb%2B5y0mr0fu73FUd4pdpv662%2BBEjgZS%2Fy8KFkiwJ67v5uE3ct7r8Mv3TDM%2B4sPdAGlWbwQonaVoI7lpNrQrWIX2ati5KCeqwGazCNMQbd4qwIcz%2BQnk%2FjzGQ7DzHliVUoUqLN9yuGTcAzWkU6u2A0nmI7m9jVHUOGzeErg%2Bj6FPfiOlTeKmUJvZuCV1zHclp%2F2%2BBd2Q6try3QYjPDhyLIjtFbd%2BcY5%2B%2BZ7GxSRjv7zY0QWMgPMeTVn8v0dgNB0N6WjREWuB5aNSEUHvInHwSt0%2BOoaDZpM3i83aNoKMyw7Nh01uHn2%2FNl9sJbD%2BJLGvY1iVMJOCI39sfnY7W3QhlZLFn959ruIDfxDDReJaXsCLUusj8IG8OvtFNk8IVz7U8gtHVGrwZl7ulVnDTYA8FCVvNviMOrrEjyIoysQNqM5oM2xKcK8VIBTZdHQV4keGzhSrKGv4CHGEJse14dH2kmdA4wFgDn6QO6uSbkXJzK50UnbnS7DT0v%2BokAqqs7qLhoAh6lQZwPTniKFxRQyOuALGXGJ2CxomuqBCf%2B0e5zaBjBb%2Bs9AplMW529yp7oAYPlBRawcwN0I8kLPAJlw2mFTpHbZL%2BlYcePXZBul41Rr4RGN1MjfVrmNk4iPyDCasaLEBjqkAcSQLSVqxM6ejwXBBQGEZ1%2Bg1vr5PT2tLELZTi7FM0mwLNtrpu976Sk6SqW13M%2BdMKu%2BT5drPQvAH3KC6zprUr6n4Xf9PSNJZwmLwuYNEYt%2Fo5YTFqUcqsMrchB%2B4wzvVMrDFzNAmvCx4VhYmFW3cDVaJhkdXK7RqabduFxlt%2FCjSr%2BvYA1thgWtHOTfTdhJrRXk68C319tsy9JrqDAMrJ8P%2FdUB&X-Amz-Signature=b3fcae302e545dc603ea20c2d0458022f06024ccf01725d0fe11e7d8dd0b476a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KBQT55K%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDG957b%2FgrFfPgp5ldmaHSv%2FDZg%2Be5tnC69PNpr1b1d7wIhAM%2Bv3E9MHZejlXfYiFn3PPEpi9DF2ROw5a%2BJDM0gGDgQKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGZrt9MqmnLx267Coq3ANb%2B5y0mr0fu73FUd4pdpv662%2BBEjgZS%2Fy8KFkiwJ67v5uE3ct7r8Mv3TDM%2B4sPdAGlWbwQonaVoI7lpNrQrWIX2ati5KCeqwGazCNMQbd4qwIcz%2BQnk%2FjzGQ7DzHliVUoUqLN9yuGTcAzWkU6u2A0nmI7m9jVHUOGzeErg%2Bj6FPfiOlTeKmUJvZuCV1zHclp%2F2%2BBd2Q6try3QYjPDhyLIjtFbd%2BcY5%2B%2BZ7GxSRjv7zY0QWMgPMeTVn8v0dgNB0N6WjREWuB5aNSEUHvInHwSt0%2BOoaDZpM3i83aNoKMyw7Nh01uHn2%2FNl9sJbD%2BJLGvY1iVMJOCI39sfnY7W3QhlZLFn959ruIDfxDDReJaXsCLUusj8IG8OvtFNk8IVz7U8gtHVGrwZl7ulVnDTYA8FCVvNviMOrrEjyIoysQNqM5oM2xKcK8VIBTZdHQV4keGzhSrKGv4CHGEJse14dH2kmdA4wFgDn6QO6uSbkXJzK50UnbnS7DT0v%2BokAqqs7qLhoAh6lQZwPTniKFxRQyOuALGXGJ2CxomuqBCf%2B0e5zaBjBb%2Bs9AplMW529yp7oAYPlBRawcwN0I8kLPAJlw2mFTpHbZL%2BlYcePXZBul41Rr4RGN1MjfVrmNk4iPyDCasaLEBjqkAcSQLSVqxM6ejwXBBQGEZ1%2Bg1vr5PT2tLELZTi7FM0mwLNtrpu976Sk6SqW13M%2BdMKu%2BT5drPQvAH3KC6zprUr6n4Xf9PSNJZwmLwuYNEYt%2Fo5YTFqUcqsMrchB%2B4wzvVMrDFzNAmvCx4VhYmFW3cDVaJhkdXK7RqabduFxlt%2FCjSr%2BvYA1thgWtHOTfTdhJrRXk68C319tsy9JrqDAMrJ8P%2FdUB&X-Amz-Signature=5f8dff02e994c45fafa15fb99074c4af85b660b07fa6276b9857e30865a3d41c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KBQT55K%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDG957b%2FgrFfPgp5ldmaHSv%2FDZg%2Be5tnC69PNpr1b1d7wIhAM%2Bv3E9MHZejlXfYiFn3PPEpi9DF2ROw5a%2BJDM0gGDgQKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGZrt9MqmnLx267Coq3ANb%2B5y0mr0fu73FUd4pdpv662%2BBEjgZS%2Fy8KFkiwJ67v5uE3ct7r8Mv3TDM%2B4sPdAGlWbwQonaVoI7lpNrQrWIX2ati5KCeqwGazCNMQbd4qwIcz%2BQnk%2FjzGQ7DzHliVUoUqLN9yuGTcAzWkU6u2A0nmI7m9jVHUOGzeErg%2Bj6FPfiOlTeKmUJvZuCV1zHclp%2F2%2BBd2Q6try3QYjPDhyLIjtFbd%2BcY5%2B%2BZ7GxSRjv7zY0QWMgPMeTVn8v0dgNB0N6WjREWuB5aNSEUHvInHwSt0%2BOoaDZpM3i83aNoKMyw7Nh01uHn2%2FNl9sJbD%2BJLGvY1iVMJOCI39sfnY7W3QhlZLFn959ruIDfxDDReJaXsCLUusj8IG8OvtFNk8IVz7U8gtHVGrwZl7ulVnDTYA8FCVvNviMOrrEjyIoysQNqM5oM2xKcK8VIBTZdHQV4keGzhSrKGv4CHGEJse14dH2kmdA4wFgDn6QO6uSbkXJzK50UnbnS7DT0v%2BokAqqs7qLhoAh6lQZwPTniKFxRQyOuALGXGJ2CxomuqBCf%2B0e5zaBjBb%2Bs9AplMW529yp7oAYPlBRawcwN0I8kLPAJlw2mFTpHbZL%2BlYcePXZBul41Rr4RGN1MjfVrmNk4iPyDCasaLEBjqkAcSQLSVqxM6ejwXBBQGEZ1%2Bg1vr5PT2tLELZTi7FM0mwLNtrpu976Sk6SqW13M%2BdMKu%2BT5drPQvAH3KC6zprUr6n4Xf9PSNJZwmLwuYNEYt%2Fo5YTFqUcqsMrchB%2B4wzvVMrDFzNAmvCx4VhYmFW3cDVaJhkdXK7RqabduFxlt%2FCjSr%2BvYA1thgWtHOTfTdhJrRXk68C319tsy9JrqDAMrJ8P%2FdUB&X-Amz-Signature=64904fa0d47937fc04560ed578fa68be87ee90496104940ac213e98ab35644b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KBQT55K%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDG957b%2FgrFfPgp5ldmaHSv%2FDZg%2Be5tnC69PNpr1b1d7wIhAM%2Bv3E9MHZejlXfYiFn3PPEpi9DF2ROw5a%2BJDM0gGDgQKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGZrt9MqmnLx267Coq3ANb%2B5y0mr0fu73FUd4pdpv662%2BBEjgZS%2Fy8KFkiwJ67v5uE3ct7r8Mv3TDM%2B4sPdAGlWbwQonaVoI7lpNrQrWIX2ati5KCeqwGazCNMQbd4qwIcz%2BQnk%2FjzGQ7DzHliVUoUqLN9yuGTcAzWkU6u2A0nmI7m9jVHUOGzeErg%2Bj6FPfiOlTeKmUJvZuCV1zHclp%2F2%2BBd2Q6try3QYjPDhyLIjtFbd%2BcY5%2B%2BZ7GxSRjv7zY0QWMgPMeTVn8v0dgNB0N6WjREWuB5aNSEUHvInHwSt0%2BOoaDZpM3i83aNoKMyw7Nh01uHn2%2FNl9sJbD%2BJLGvY1iVMJOCI39sfnY7W3QhlZLFn959ruIDfxDDReJaXsCLUusj8IG8OvtFNk8IVz7U8gtHVGrwZl7ulVnDTYA8FCVvNviMOrrEjyIoysQNqM5oM2xKcK8VIBTZdHQV4keGzhSrKGv4CHGEJse14dH2kmdA4wFgDn6QO6uSbkXJzK50UnbnS7DT0v%2BokAqqs7qLhoAh6lQZwPTniKFxRQyOuALGXGJ2CxomuqBCf%2B0e5zaBjBb%2Bs9AplMW529yp7oAYPlBRawcwN0I8kLPAJlw2mFTpHbZL%2BlYcePXZBul41Rr4RGN1MjfVrmNk4iPyDCasaLEBjqkAcSQLSVqxM6ejwXBBQGEZ1%2Bg1vr5PT2tLELZTi7FM0mwLNtrpu976Sk6SqW13M%2BdMKu%2BT5drPQvAH3KC6zprUr6n4Xf9PSNJZwmLwuYNEYt%2Fo5YTFqUcqsMrchB%2B4wzvVMrDFzNAmvCx4VhYmFW3cDVaJhkdXK7RqabduFxlt%2FCjSr%2BvYA1thgWtHOTfTdhJrRXk68C319tsy9JrqDAMrJ8P%2FdUB&X-Amz-Signature=1921539a74de776e91841fb25b1140cce8824c8226ee9de01a17dd139953edfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KBQT55K%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDG957b%2FgrFfPgp5ldmaHSv%2FDZg%2Be5tnC69PNpr1b1d7wIhAM%2Bv3E9MHZejlXfYiFn3PPEpi9DF2ROw5a%2BJDM0gGDgQKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGZrt9MqmnLx267Coq3ANb%2B5y0mr0fu73FUd4pdpv662%2BBEjgZS%2Fy8KFkiwJ67v5uE3ct7r8Mv3TDM%2B4sPdAGlWbwQonaVoI7lpNrQrWIX2ati5KCeqwGazCNMQbd4qwIcz%2BQnk%2FjzGQ7DzHliVUoUqLN9yuGTcAzWkU6u2A0nmI7m9jVHUOGzeErg%2Bj6FPfiOlTeKmUJvZuCV1zHclp%2F2%2BBd2Q6try3QYjPDhyLIjtFbd%2BcY5%2B%2BZ7GxSRjv7zY0QWMgPMeTVn8v0dgNB0N6WjREWuB5aNSEUHvInHwSt0%2BOoaDZpM3i83aNoKMyw7Nh01uHn2%2FNl9sJbD%2BJLGvY1iVMJOCI39sfnY7W3QhlZLFn959ruIDfxDDReJaXsCLUusj8IG8OvtFNk8IVz7U8gtHVGrwZl7ulVnDTYA8FCVvNviMOrrEjyIoysQNqM5oM2xKcK8VIBTZdHQV4keGzhSrKGv4CHGEJse14dH2kmdA4wFgDn6QO6uSbkXJzK50UnbnS7DT0v%2BokAqqs7qLhoAh6lQZwPTniKFxRQyOuALGXGJ2CxomuqBCf%2B0e5zaBjBb%2Bs9AplMW529yp7oAYPlBRawcwN0I8kLPAJlw2mFTpHbZL%2BlYcePXZBul41Rr4RGN1MjfVrmNk4iPyDCasaLEBjqkAcSQLSVqxM6ejwXBBQGEZ1%2Bg1vr5PT2tLELZTi7FM0mwLNtrpu976Sk6SqW13M%2BdMKu%2BT5drPQvAH3KC6zprUr6n4Xf9PSNJZwmLwuYNEYt%2Fo5YTFqUcqsMrchB%2B4wzvVMrDFzNAmvCx4VhYmFW3cDVaJhkdXK7RqabduFxlt%2FCjSr%2BvYA1thgWtHOTfTdhJrRXk68C319tsy9JrqDAMrJ8P%2FdUB&X-Amz-Signature=eb13945ca5619d88f3e63ea6c2111c019300b0a04df4128574127fa200234e99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
