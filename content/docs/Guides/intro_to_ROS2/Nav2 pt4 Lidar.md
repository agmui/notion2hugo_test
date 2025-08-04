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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZTILCSW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIHLpjkz%2B2WIoNEbmFhOgGu%2FuwotrBVxU%2F%2FPRVP8Byy2TAiEAkvZjfGIi3av50thefqbUqpnffWOVuPISY0x9m%2FvXmV0q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDKVFVy0wzbMgGBRZUCrcA7udTLNdvZO74w%2FmZ%2BCF82nUb9zAUkh4W9Nj8eE1dM%2FNRFdMsUs777Xc89r79WLUKqJnOpk4YDvKvPnjepJpOBv%2BS4%2Fc6Fc80cmMFdlhhmcz%2Bz4bg9yjJCOl5x%2BwiIGNM2aHDahhP9oBZjmaRx6mi6S46MB0uNrFi81bqEo%2F7zBdNSI5Zk4dmHh6faokQ%2FfOq4XwHx4CTeFACFQ4pSUQEelW%2FToKMrUsK4kmt2JbVbYTOU6tFBsO5ff95rypA71z%2FdGn1meBNvmrb03z3XBLHbrQ4rRw8diHitvQdFto5%2BvNPAxD5a3%2F60XPFptny3Rd07%2FjBfFdwVVX7BMrfSZ90mlEmf%2BUClNSFpBzQ46xATiIr79w%2FtcPpeL9ZTZV9CkVEruJ45Y3jutqrTSsu0KQto11cTON4rpbuRcbxNxTqvxOEo9VPwLdscm9yE78C86KfFuX4qT%2BIkrBYA2241iQJJ4BAkpKkr4Qs8ttk03cHJzY70gWZu7nbqm3rX6pf4wiQPVTecL1Hy0vRsSonNrCcVx38PVJKdaD%2BcTzRzPF%2B3L1G5BLYmWW3mANydzlZutrxECjknOkIJhlvDk8pO55la7nZlkVbTbDFjFSKcrZEuYkgRFdHFvdyA%2FOMMwmMPORw8QGOqUBfWscBH49v6esinbuNk6565Q7VroL7DF6o1Su9DHA7P88EdtVknLYsydktNctTTAdCAdD4c0VNTrCLAS6FUqVarbQvXcu2wAdGkSPxLB1RKIRoHeDE5YA9rwhg8m9NjhNlz2ObBAXX8KCZdWkyW6163LMHwRbnHgSJnEkdKZ30YPIhJUSxgCJVPkFr2%2BviENcvHphpg7n%2BuYKZMY5R9brqu4ZbY29&X-Amz-Signature=7ca588e6b653758915ac4a8b4e01033b371aad36d486e142d0ded253b8bdc6d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WWQZQBL%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIHL16xNmvG%2Bc6Ur%2BGFDtEDglrb9horfllyg7vn%2B4ICssAiEAzhQtDTU3WddMdiOfZcNXRWtwjpA2JcCnT9slyRAgh1wq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDJi49u5CvsrhpwwoGircAwoiqV1VpFstcsIyFv8T5yHZUejL85v43T%2BJwc6qqQr1CrS83mC6kFOTgvQmfrD2ugzo14grROh%2BwTZnNIVvDNTVmN%2BiNGE9mdR8l38RxjveRbS3D8xZvbKsLVN22EbIZ4BXf4rrB63dHvGXY%2FscbPKfxJ3ycJTmpkh7XjGav%2FuSIfs6olJQIs%2BZuxnCIPra59DEzpTJwgnXGtkgdqB8WuDGB2xaBqFEPEQVxp5GOD%2FSlUmlvPnw3xwy3VwN5%2B4bspciz3fJ4YN3bhdpYmb6J%2BZVhXffXSOUEJVBypBP3Q7Cvd6t0C2lVprzvJflM3XOv3dlpMn74mvE%2Ftb6js1PBFZKJTv8AvEeUVqrhZpAKPqToB7GDQdKXwqVmEkhL9oRjtTK1XdX%2F0oOPIU5z9CPBpdD%2B9UQBtKDSKUK75inGbVTtu05tN2tOarRYg9uaZDfo9jVoAXzcr56Qpjo3Nk3uXUmDzCno19Rf5W18ztiAeyw2PwRaszhlYOIZ%2Boj5lYnNVlgY2FlaAQ%2B7wiDAkrTKbdaCtwJuUF09B3WwcppgNluO1yhDovqzWQDI3%2BT1QPSWyFaliTmb3a5x2ssHtqK%2BI7%2FQ49d4n%2FZL11YGbygHOwq8bdIxrfjyr3GDGFwMJCTw8QGOqUBp0VX1b5UoGwtZu961YbtVUq%2FRWAZc1AHNAo1mttsBTpZyGn%2F8kZsfBi5IKaUnPsOWTJmwqaSnn1VwpfqIUUmmEKZDif%2FgNncBR6o8%2BmiYGds3O7ncjs4VLvdSYJpmnhw%2F0iTs4MEtU95AFd7pcvheM6QcMa3KfnOgqrHvuXau7URROr5k8jZaMoWpdfBQhIO4rGWkWPjWLqBIcejxRKwzNXyt%2Bmi&X-Amz-Signature=50bffe122c5bf625cd2b2177fc753b9e4f4982e5b039457689582a26f1f88ae4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WWQZQBL%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIHL16xNmvG%2Bc6Ur%2BGFDtEDglrb9horfllyg7vn%2B4ICssAiEAzhQtDTU3WddMdiOfZcNXRWtwjpA2JcCnT9slyRAgh1wq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDJi49u5CvsrhpwwoGircAwoiqV1VpFstcsIyFv8T5yHZUejL85v43T%2BJwc6qqQr1CrS83mC6kFOTgvQmfrD2ugzo14grROh%2BwTZnNIVvDNTVmN%2BiNGE9mdR8l38RxjveRbS3D8xZvbKsLVN22EbIZ4BXf4rrB63dHvGXY%2FscbPKfxJ3ycJTmpkh7XjGav%2FuSIfs6olJQIs%2BZuxnCIPra59DEzpTJwgnXGtkgdqB8WuDGB2xaBqFEPEQVxp5GOD%2FSlUmlvPnw3xwy3VwN5%2B4bspciz3fJ4YN3bhdpYmb6J%2BZVhXffXSOUEJVBypBP3Q7Cvd6t0C2lVprzvJflM3XOv3dlpMn74mvE%2Ftb6js1PBFZKJTv8AvEeUVqrhZpAKPqToB7GDQdKXwqVmEkhL9oRjtTK1XdX%2F0oOPIU5z9CPBpdD%2B9UQBtKDSKUK75inGbVTtu05tN2tOarRYg9uaZDfo9jVoAXzcr56Qpjo3Nk3uXUmDzCno19Rf5W18ztiAeyw2PwRaszhlYOIZ%2Boj5lYnNVlgY2FlaAQ%2B7wiDAkrTKbdaCtwJuUF09B3WwcppgNluO1yhDovqzWQDI3%2BT1QPSWyFaliTmb3a5x2ssHtqK%2BI7%2FQ49d4n%2FZL11YGbygHOwq8bdIxrfjyr3GDGFwMJCTw8QGOqUBp0VX1b5UoGwtZu961YbtVUq%2FRWAZc1AHNAo1mttsBTpZyGn%2F8kZsfBi5IKaUnPsOWTJmwqaSnn1VwpfqIUUmmEKZDif%2FgNncBR6o8%2BmiYGds3O7ncjs4VLvdSYJpmnhw%2F0iTs4MEtU95AFd7pcvheM6QcMa3KfnOgqrHvuXau7URROr5k8jZaMoWpdfBQhIO4rGWkWPjWLqBIcejxRKwzNXyt%2Bmi&X-Amz-Signature=c679b2140891087b200543d58e5e2efe16891521ae8e9fbff1dddba5673b4e22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WWQZQBL%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIHL16xNmvG%2Bc6Ur%2BGFDtEDglrb9horfllyg7vn%2B4ICssAiEAzhQtDTU3WddMdiOfZcNXRWtwjpA2JcCnT9slyRAgh1wq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDJi49u5CvsrhpwwoGircAwoiqV1VpFstcsIyFv8T5yHZUejL85v43T%2BJwc6qqQr1CrS83mC6kFOTgvQmfrD2ugzo14grROh%2BwTZnNIVvDNTVmN%2BiNGE9mdR8l38RxjveRbS3D8xZvbKsLVN22EbIZ4BXf4rrB63dHvGXY%2FscbPKfxJ3ycJTmpkh7XjGav%2FuSIfs6olJQIs%2BZuxnCIPra59DEzpTJwgnXGtkgdqB8WuDGB2xaBqFEPEQVxp5GOD%2FSlUmlvPnw3xwy3VwN5%2B4bspciz3fJ4YN3bhdpYmb6J%2BZVhXffXSOUEJVBypBP3Q7Cvd6t0C2lVprzvJflM3XOv3dlpMn74mvE%2Ftb6js1PBFZKJTv8AvEeUVqrhZpAKPqToB7GDQdKXwqVmEkhL9oRjtTK1XdX%2F0oOPIU5z9CPBpdD%2B9UQBtKDSKUK75inGbVTtu05tN2tOarRYg9uaZDfo9jVoAXzcr56Qpjo3Nk3uXUmDzCno19Rf5W18ztiAeyw2PwRaszhlYOIZ%2Boj5lYnNVlgY2FlaAQ%2B7wiDAkrTKbdaCtwJuUF09B3WwcppgNluO1yhDovqzWQDI3%2BT1QPSWyFaliTmb3a5x2ssHtqK%2BI7%2FQ49d4n%2FZL11YGbygHOwq8bdIxrfjyr3GDGFwMJCTw8QGOqUBp0VX1b5UoGwtZu961YbtVUq%2FRWAZc1AHNAo1mttsBTpZyGn%2F8kZsfBi5IKaUnPsOWTJmwqaSnn1VwpfqIUUmmEKZDif%2FgNncBR6o8%2BmiYGds3O7ncjs4VLvdSYJpmnhw%2F0iTs4MEtU95AFd7pcvheM6QcMa3KfnOgqrHvuXau7URROr5k8jZaMoWpdfBQhIO4rGWkWPjWLqBIcejxRKwzNXyt%2Bmi&X-Amz-Signature=e2477b044433311148915c5f40944eac185f0dd219909f517e8773d1639ca148&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WWQZQBL%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIHL16xNmvG%2Bc6Ur%2BGFDtEDglrb9horfllyg7vn%2B4ICssAiEAzhQtDTU3WddMdiOfZcNXRWtwjpA2JcCnT9slyRAgh1wq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDJi49u5CvsrhpwwoGircAwoiqV1VpFstcsIyFv8T5yHZUejL85v43T%2BJwc6qqQr1CrS83mC6kFOTgvQmfrD2ugzo14grROh%2BwTZnNIVvDNTVmN%2BiNGE9mdR8l38RxjveRbS3D8xZvbKsLVN22EbIZ4BXf4rrB63dHvGXY%2FscbPKfxJ3ycJTmpkh7XjGav%2FuSIfs6olJQIs%2BZuxnCIPra59DEzpTJwgnXGtkgdqB8WuDGB2xaBqFEPEQVxp5GOD%2FSlUmlvPnw3xwy3VwN5%2B4bspciz3fJ4YN3bhdpYmb6J%2BZVhXffXSOUEJVBypBP3Q7Cvd6t0C2lVprzvJflM3XOv3dlpMn74mvE%2Ftb6js1PBFZKJTv8AvEeUVqrhZpAKPqToB7GDQdKXwqVmEkhL9oRjtTK1XdX%2F0oOPIU5z9CPBpdD%2B9UQBtKDSKUK75inGbVTtu05tN2tOarRYg9uaZDfo9jVoAXzcr56Qpjo3Nk3uXUmDzCno19Rf5W18ztiAeyw2PwRaszhlYOIZ%2Boj5lYnNVlgY2FlaAQ%2B7wiDAkrTKbdaCtwJuUF09B3WwcppgNluO1yhDovqzWQDI3%2BT1QPSWyFaliTmb3a5x2ssHtqK%2BI7%2FQ49d4n%2FZL11YGbygHOwq8bdIxrfjyr3GDGFwMJCTw8QGOqUBp0VX1b5UoGwtZu961YbtVUq%2FRWAZc1AHNAo1mttsBTpZyGn%2F8kZsfBi5IKaUnPsOWTJmwqaSnn1VwpfqIUUmmEKZDif%2FgNncBR6o8%2BmiYGds3O7ncjs4VLvdSYJpmnhw%2F0iTs4MEtU95AFd7pcvheM6QcMa3KfnOgqrHvuXau7URROr5k8jZaMoWpdfBQhIO4rGWkWPjWLqBIcejxRKwzNXyt%2Bmi&X-Amz-Signature=1047d0c6f0c6290f03695669c552c78aa228be8576dc1e69f4e22460044cd473&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WWQZQBL%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIHL16xNmvG%2Bc6Ur%2BGFDtEDglrb9horfllyg7vn%2B4ICssAiEAzhQtDTU3WddMdiOfZcNXRWtwjpA2JcCnT9slyRAgh1wq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDJi49u5CvsrhpwwoGircAwoiqV1VpFstcsIyFv8T5yHZUejL85v43T%2BJwc6qqQr1CrS83mC6kFOTgvQmfrD2ugzo14grROh%2BwTZnNIVvDNTVmN%2BiNGE9mdR8l38RxjveRbS3D8xZvbKsLVN22EbIZ4BXf4rrB63dHvGXY%2FscbPKfxJ3ycJTmpkh7XjGav%2FuSIfs6olJQIs%2BZuxnCIPra59DEzpTJwgnXGtkgdqB8WuDGB2xaBqFEPEQVxp5GOD%2FSlUmlvPnw3xwy3VwN5%2B4bspciz3fJ4YN3bhdpYmb6J%2BZVhXffXSOUEJVBypBP3Q7Cvd6t0C2lVprzvJflM3XOv3dlpMn74mvE%2Ftb6js1PBFZKJTv8AvEeUVqrhZpAKPqToB7GDQdKXwqVmEkhL9oRjtTK1XdX%2F0oOPIU5z9CPBpdD%2B9UQBtKDSKUK75inGbVTtu05tN2tOarRYg9uaZDfo9jVoAXzcr56Qpjo3Nk3uXUmDzCno19Rf5W18ztiAeyw2PwRaszhlYOIZ%2Boj5lYnNVlgY2FlaAQ%2B7wiDAkrTKbdaCtwJuUF09B3WwcppgNluO1yhDovqzWQDI3%2BT1QPSWyFaliTmb3a5x2ssHtqK%2BI7%2FQ49d4n%2FZL11YGbygHOwq8bdIxrfjyr3GDGFwMJCTw8QGOqUBp0VX1b5UoGwtZu961YbtVUq%2FRWAZc1AHNAo1mttsBTpZyGn%2F8kZsfBi5IKaUnPsOWTJmwqaSnn1VwpfqIUUmmEKZDif%2FgNncBR6o8%2BmiYGds3O7ncjs4VLvdSYJpmnhw%2F0iTs4MEtU95AFd7pcvheM6QcMa3KfnOgqrHvuXau7URROr5k8jZaMoWpdfBQhIO4rGWkWPjWLqBIcejxRKwzNXyt%2Bmi&X-Amz-Signature=e99c059ee19034e878e2f77299d2eb07770f71fcc6d6ca8d3dd7e3a46b8db21e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WWQZQBL%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIHL16xNmvG%2Bc6Ur%2BGFDtEDglrb9horfllyg7vn%2B4ICssAiEAzhQtDTU3WddMdiOfZcNXRWtwjpA2JcCnT9slyRAgh1wq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDJi49u5CvsrhpwwoGircAwoiqV1VpFstcsIyFv8T5yHZUejL85v43T%2BJwc6qqQr1CrS83mC6kFOTgvQmfrD2ugzo14grROh%2BwTZnNIVvDNTVmN%2BiNGE9mdR8l38RxjveRbS3D8xZvbKsLVN22EbIZ4BXf4rrB63dHvGXY%2FscbPKfxJ3ycJTmpkh7XjGav%2FuSIfs6olJQIs%2BZuxnCIPra59DEzpTJwgnXGtkgdqB8WuDGB2xaBqFEPEQVxp5GOD%2FSlUmlvPnw3xwy3VwN5%2B4bspciz3fJ4YN3bhdpYmb6J%2BZVhXffXSOUEJVBypBP3Q7Cvd6t0C2lVprzvJflM3XOv3dlpMn74mvE%2Ftb6js1PBFZKJTv8AvEeUVqrhZpAKPqToB7GDQdKXwqVmEkhL9oRjtTK1XdX%2F0oOPIU5z9CPBpdD%2B9UQBtKDSKUK75inGbVTtu05tN2tOarRYg9uaZDfo9jVoAXzcr56Qpjo3Nk3uXUmDzCno19Rf5W18ztiAeyw2PwRaszhlYOIZ%2Boj5lYnNVlgY2FlaAQ%2B7wiDAkrTKbdaCtwJuUF09B3WwcppgNluO1yhDovqzWQDI3%2BT1QPSWyFaliTmb3a5x2ssHtqK%2BI7%2FQ49d4n%2FZL11YGbygHOwq8bdIxrfjyr3GDGFwMJCTw8QGOqUBp0VX1b5UoGwtZu961YbtVUq%2FRWAZc1AHNAo1mttsBTpZyGn%2F8kZsfBi5IKaUnPsOWTJmwqaSnn1VwpfqIUUmmEKZDif%2FgNncBR6o8%2BmiYGds3O7ncjs4VLvdSYJpmnhw%2F0iTs4MEtU95AFd7pcvheM6QcMa3KfnOgqrHvuXau7URROr5k8jZaMoWpdfBQhIO4rGWkWPjWLqBIcejxRKwzNXyt%2Bmi&X-Amz-Signature=d01cf9386223a05071cd0a74af7089da7450db069b32df5aaeb5c27c9b57db01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WWQZQBL%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIHL16xNmvG%2Bc6Ur%2BGFDtEDglrb9horfllyg7vn%2B4ICssAiEAzhQtDTU3WddMdiOfZcNXRWtwjpA2JcCnT9slyRAgh1wq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDJi49u5CvsrhpwwoGircAwoiqV1VpFstcsIyFv8T5yHZUejL85v43T%2BJwc6qqQr1CrS83mC6kFOTgvQmfrD2ugzo14grROh%2BwTZnNIVvDNTVmN%2BiNGE9mdR8l38RxjveRbS3D8xZvbKsLVN22EbIZ4BXf4rrB63dHvGXY%2FscbPKfxJ3ycJTmpkh7XjGav%2FuSIfs6olJQIs%2BZuxnCIPra59DEzpTJwgnXGtkgdqB8WuDGB2xaBqFEPEQVxp5GOD%2FSlUmlvPnw3xwy3VwN5%2B4bspciz3fJ4YN3bhdpYmb6J%2BZVhXffXSOUEJVBypBP3Q7Cvd6t0C2lVprzvJflM3XOv3dlpMn74mvE%2Ftb6js1PBFZKJTv8AvEeUVqrhZpAKPqToB7GDQdKXwqVmEkhL9oRjtTK1XdX%2F0oOPIU5z9CPBpdD%2B9UQBtKDSKUK75inGbVTtu05tN2tOarRYg9uaZDfo9jVoAXzcr56Qpjo3Nk3uXUmDzCno19Rf5W18ztiAeyw2PwRaszhlYOIZ%2Boj5lYnNVlgY2FlaAQ%2B7wiDAkrTKbdaCtwJuUF09B3WwcppgNluO1yhDovqzWQDI3%2BT1QPSWyFaliTmb3a5x2ssHtqK%2BI7%2FQ49d4n%2FZL11YGbygHOwq8bdIxrfjyr3GDGFwMJCTw8QGOqUBp0VX1b5UoGwtZu961YbtVUq%2FRWAZc1AHNAo1mttsBTpZyGn%2F8kZsfBi5IKaUnPsOWTJmwqaSnn1VwpfqIUUmmEKZDif%2FgNncBR6o8%2BmiYGds3O7ncjs4VLvdSYJpmnhw%2F0iTs4MEtU95AFd7pcvheM6QcMa3KfnOgqrHvuXau7URROr5k8jZaMoWpdfBQhIO4rGWkWPjWLqBIcejxRKwzNXyt%2Bmi&X-Amz-Signature=e62b2efc77c4bfa4845a79a1a8bd56af01ddc3d20e77b79cd874447ede85d984&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WWQZQBL%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIHL16xNmvG%2Bc6Ur%2BGFDtEDglrb9horfllyg7vn%2B4ICssAiEAzhQtDTU3WddMdiOfZcNXRWtwjpA2JcCnT9slyRAgh1wq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDJi49u5CvsrhpwwoGircAwoiqV1VpFstcsIyFv8T5yHZUejL85v43T%2BJwc6qqQr1CrS83mC6kFOTgvQmfrD2ugzo14grROh%2BwTZnNIVvDNTVmN%2BiNGE9mdR8l38RxjveRbS3D8xZvbKsLVN22EbIZ4BXf4rrB63dHvGXY%2FscbPKfxJ3ycJTmpkh7XjGav%2FuSIfs6olJQIs%2BZuxnCIPra59DEzpTJwgnXGtkgdqB8WuDGB2xaBqFEPEQVxp5GOD%2FSlUmlvPnw3xwy3VwN5%2B4bspciz3fJ4YN3bhdpYmb6J%2BZVhXffXSOUEJVBypBP3Q7Cvd6t0C2lVprzvJflM3XOv3dlpMn74mvE%2Ftb6js1PBFZKJTv8AvEeUVqrhZpAKPqToB7GDQdKXwqVmEkhL9oRjtTK1XdX%2F0oOPIU5z9CPBpdD%2B9UQBtKDSKUK75inGbVTtu05tN2tOarRYg9uaZDfo9jVoAXzcr56Qpjo3Nk3uXUmDzCno19Rf5W18ztiAeyw2PwRaszhlYOIZ%2Boj5lYnNVlgY2FlaAQ%2B7wiDAkrTKbdaCtwJuUF09B3WwcppgNluO1yhDovqzWQDI3%2BT1QPSWyFaliTmb3a5x2ssHtqK%2BI7%2FQ49d4n%2FZL11YGbygHOwq8bdIxrfjyr3GDGFwMJCTw8QGOqUBp0VX1b5UoGwtZu961YbtVUq%2FRWAZc1AHNAo1mttsBTpZyGn%2F8kZsfBi5IKaUnPsOWTJmwqaSnn1VwpfqIUUmmEKZDif%2FgNncBR6o8%2BmiYGds3O7ncjs4VLvdSYJpmnhw%2F0iTs4MEtU95AFd7pcvheM6QcMa3KfnOgqrHvuXau7URROr5k8jZaMoWpdfBQhIO4rGWkWPjWLqBIcejxRKwzNXyt%2Bmi&X-Amz-Signature=6cfde4a454bd52585d8930e3cfb1c9c506af40e7591f3ef34d95045345dde738&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WWQZQBL%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIHL16xNmvG%2Bc6Ur%2BGFDtEDglrb9horfllyg7vn%2B4ICssAiEAzhQtDTU3WddMdiOfZcNXRWtwjpA2JcCnT9slyRAgh1wq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDJi49u5CvsrhpwwoGircAwoiqV1VpFstcsIyFv8T5yHZUejL85v43T%2BJwc6qqQr1CrS83mC6kFOTgvQmfrD2ugzo14grROh%2BwTZnNIVvDNTVmN%2BiNGE9mdR8l38RxjveRbS3D8xZvbKsLVN22EbIZ4BXf4rrB63dHvGXY%2FscbPKfxJ3ycJTmpkh7XjGav%2FuSIfs6olJQIs%2BZuxnCIPra59DEzpTJwgnXGtkgdqB8WuDGB2xaBqFEPEQVxp5GOD%2FSlUmlvPnw3xwy3VwN5%2B4bspciz3fJ4YN3bhdpYmb6J%2BZVhXffXSOUEJVBypBP3Q7Cvd6t0C2lVprzvJflM3XOv3dlpMn74mvE%2Ftb6js1PBFZKJTv8AvEeUVqrhZpAKPqToB7GDQdKXwqVmEkhL9oRjtTK1XdX%2F0oOPIU5z9CPBpdD%2B9UQBtKDSKUK75inGbVTtu05tN2tOarRYg9uaZDfo9jVoAXzcr56Qpjo3Nk3uXUmDzCno19Rf5W18ztiAeyw2PwRaszhlYOIZ%2Boj5lYnNVlgY2FlaAQ%2B7wiDAkrTKbdaCtwJuUF09B3WwcppgNluO1yhDovqzWQDI3%2BT1QPSWyFaliTmb3a5x2ssHtqK%2BI7%2FQ49d4n%2FZL11YGbygHOwq8bdIxrfjyr3GDGFwMJCTw8QGOqUBp0VX1b5UoGwtZu961YbtVUq%2FRWAZc1AHNAo1mttsBTpZyGn%2F8kZsfBi5IKaUnPsOWTJmwqaSnn1VwpfqIUUmmEKZDif%2FgNncBR6o8%2BmiYGds3O7ncjs4VLvdSYJpmnhw%2F0iTs4MEtU95AFd7pcvheM6QcMa3KfnOgqrHvuXau7URROr5k8jZaMoWpdfBQhIO4rGWkWPjWLqBIcejxRKwzNXyt%2Bmi&X-Amz-Signature=ce89d8a0cec40c0c44cf3fb7368556584ba87eb78b3cb327b36ed42ff9e3c516&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WWQZQBL%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIHL16xNmvG%2Bc6Ur%2BGFDtEDglrb9horfllyg7vn%2B4ICssAiEAzhQtDTU3WddMdiOfZcNXRWtwjpA2JcCnT9slyRAgh1wq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDJi49u5CvsrhpwwoGircAwoiqV1VpFstcsIyFv8T5yHZUejL85v43T%2BJwc6qqQr1CrS83mC6kFOTgvQmfrD2ugzo14grROh%2BwTZnNIVvDNTVmN%2BiNGE9mdR8l38RxjveRbS3D8xZvbKsLVN22EbIZ4BXf4rrB63dHvGXY%2FscbPKfxJ3ycJTmpkh7XjGav%2FuSIfs6olJQIs%2BZuxnCIPra59DEzpTJwgnXGtkgdqB8WuDGB2xaBqFEPEQVxp5GOD%2FSlUmlvPnw3xwy3VwN5%2B4bspciz3fJ4YN3bhdpYmb6J%2BZVhXffXSOUEJVBypBP3Q7Cvd6t0C2lVprzvJflM3XOv3dlpMn74mvE%2Ftb6js1PBFZKJTv8AvEeUVqrhZpAKPqToB7GDQdKXwqVmEkhL9oRjtTK1XdX%2F0oOPIU5z9CPBpdD%2B9UQBtKDSKUK75inGbVTtu05tN2tOarRYg9uaZDfo9jVoAXzcr56Qpjo3Nk3uXUmDzCno19Rf5W18ztiAeyw2PwRaszhlYOIZ%2Boj5lYnNVlgY2FlaAQ%2B7wiDAkrTKbdaCtwJuUF09B3WwcppgNluO1yhDovqzWQDI3%2BT1QPSWyFaliTmb3a5x2ssHtqK%2BI7%2FQ49d4n%2FZL11YGbygHOwq8bdIxrfjyr3GDGFwMJCTw8QGOqUBp0VX1b5UoGwtZu961YbtVUq%2FRWAZc1AHNAo1mttsBTpZyGn%2F8kZsfBi5IKaUnPsOWTJmwqaSnn1VwpfqIUUmmEKZDif%2FgNncBR6o8%2BmiYGds3O7ncjs4VLvdSYJpmnhw%2F0iTs4MEtU95AFd7pcvheM6QcMa3KfnOgqrHvuXau7URROr5k8jZaMoWpdfBQhIO4rGWkWPjWLqBIcejxRKwzNXyt%2Bmi&X-Amz-Signature=1047d0c6f0c6290f03695669c552c78aa228be8576dc1e69f4e22460044cd473&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
