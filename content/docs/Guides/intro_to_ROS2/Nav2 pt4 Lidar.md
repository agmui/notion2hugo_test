---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-07-30T06:25:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV6JUC2V%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBYIiGrf3idjnzpZUZarqFXQ6Ds4erlwSejk3X5shuSZAiEAlTJ2fd%2ByVlNbi0oH%2Brra5REEWGHBEPYc4v3iC%2FKTAkoqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDK3LyQ5DUUgTBc9dCrcA3JWDdJyVMvDjhJGSDUsBgHLPeecvyIAIYmD7PCiiB3%2FGrJ6GKfgQmFQV6f%2F86cZCA3SVZ%2FUaAbxVNc%2B5xVpfCVhUi1a6tUGDGOe5XBqXPhn5UxqGuWdnR36dHtXR3BlDglnLQUkgrErdQsx4yV9nfNZmAupxbLB%2FRDnINs60WHYeJSwQSqzfnGX7UzeBKNG3cmasHU0XlzV%2FImMykkIcsgFV6OHk5YkoIwuWLyyMtzmSjUx31xYbit8NB%2BKLqlJxNI15mIPLa6r%2BnYXFohs7XnQb8eKKfMM501SFzrq9jS2H1Qqz%2Fs4oYve4FPrA%2FUkCXWM%2BAJ3mvxFkeDVuWMzo64CHhW7udahy0s2%2F1UIVFhat%2FjoHPiSqfWrLI8FoFVtjH2sk4xYPCVH0rQxBc2uUe%2Bf1xJX7QG6g0ezDfmakLospobMJ1BXXi0UxySNFeimBPQho5E9L%2BqTKoMM4qI%2BUjnJwpo7FMkpNIAxr%2F1Xu5EXyJRcq%2B8lgQoV8IbufMg8oMskNmHzWRZF5u37fQCL%2FmTOIyl0T7bG0X3g50AJhN1%2Fp%2BioV14mcRh4chKm4gEvz8zWfL%2B1T26bqoemlk08NIfFNuCpwOzfXuenv65ieMyfIBpyp3%2FMfXoFrvIOMOOdqsQGOqUBS3apghCGQgWEqpfaHMEVP89hC2HzvNhu%2F0niU6acvX21xWO27usEw0o2EYUbVUuMw8irmuax5mhbgR74N%2Fa%2BeD8AZ2mKBf%2FtBm%2Bwg%2FiWVuymP0HD0TMleZ6jAGgij%2FBYp8TyUObxEBVh4uwPEVufovWh2CubzRQFTzdeVtrCXJpJcxWJupbNm8k2HRfQ38WOKKYqCBQQ6xviAMQPT5nTj3NWVG9a&X-Amz-Signature=8baab81156fb32950fc59474fc2d27e9ceaf0f5a789d4d3786770783318401b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV6JUC2V%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBYIiGrf3idjnzpZUZarqFXQ6Ds4erlwSejk3X5shuSZAiEAlTJ2fd%2ByVlNbi0oH%2Brra5REEWGHBEPYc4v3iC%2FKTAkoqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDK3LyQ5DUUgTBc9dCrcA3JWDdJyVMvDjhJGSDUsBgHLPeecvyIAIYmD7PCiiB3%2FGrJ6GKfgQmFQV6f%2F86cZCA3SVZ%2FUaAbxVNc%2B5xVpfCVhUi1a6tUGDGOe5XBqXPhn5UxqGuWdnR36dHtXR3BlDglnLQUkgrErdQsx4yV9nfNZmAupxbLB%2FRDnINs60WHYeJSwQSqzfnGX7UzeBKNG3cmasHU0XlzV%2FImMykkIcsgFV6OHk5YkoIwuWLyyMtzmSjUx31xYbit8NB%2BKLqlJxNI15mIPLa6r%2BnYXFohs7XnQb8eKKfMM501SFzrq9jS2H1Qqz%2Fs4oYve4FPrA%2FUkCXWM%2BAJ3mvxFkeDVuWMzo64CHhW7udahy0s2%2F1UIVFhat%2FjoHPiSqfWrLI8FoFVtjH2sk4xYPCVH0rQxBc2uUe%2Bf1xJX7QG6g0ezDfmakLospobMJ1BXXi0UxySNFeimBPQho5E9L%2BqTKoMM4qI%2BUjnJwpo7FMkpNIAxr%2F1Xu5EXyJRcq%2B8lgQoV8IbufMg8oMskNmHzWRZF5u37fQCL%2FmTOIyl0T7bG0X3g50AJhN1%2Fp%2BioV14mcRh4chKm4gEvz8zWfL%2B1T26bqoemlk08NIfFNuCpwOzfXuenv65ieMyfIBpyp3%2FMfXoFrvIOMOOdqsQGOqUBS3apghCGQgWEqpfaHMEVP89hC2HzvNhu%2F0niU6acvX21xWO27usEw0o2EYUbVUuMw8irmuax5mhbgR74N%2Fa%2BeD8AZ2mKBf%2FtBm%2Bwg%2FiWVuymP0HD0TMleZ6jAGgij%2FBYp8TyUObxEBVh4uwPEVufovWh2CubzRQFTzdeVtrCXJpJcxWJupbNm8k2HRfQ38WOKKYqCBQQ6xviAMQPT5nTj3NWVG9a&X-Amz-Signature=d4ed933f6dc6c6a0aedfc136ba1acf7ba6c209ec4bb2a80e015c8b43e816df2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV6JUC2V%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBYIiGrf3idjnzpZUZarqFXQ6Ds4erlwSejk3X5shuSZAiEAlTJ2fd%2ByVlNbi0oH%2Brra5REEWGHBEPYc4v3iC%2FKTAkoqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDK3LyQ5DUUgTBc9dCrcA3JWDdJyVMvDjhJGSDUsBgHLPeecvyIAIYmD7PCiiB3%2FGrJ6GKfgQmFQV6f%2F86cZCA3SVZ%2FUaAbxVNc%2B5xVpfCVhUi1a6tUGDGOe5XBqXPhn5UxqGuWdnR36dHtXR3BlDglnLQUkgrErdQsx4yV9nfNZmAupxbLB%2FRDnINs60WHYeJSwQSqzfnGX7UzeBKNG3cmasHU0XlzV%2FImMykkIcsgFV6OHk5YkoIwuWLyyMtzmSjUx31xYbit8NB%2BKLqlJxNI15mIPLa6r%2BnYXFohs7XnQb8eKKfMM501SFzrq9jS2H1Qqz%2Fs4oYve4FPrA%2FUkCXWM%2BAJ3mvxFkeDVuWMzo64CHhW7udahy0s2%2F1UIVFhat%2FjoHPiSqfWrLI8FoFVtjH2sk4xYPCVH0rQxBc2uUe%2Bf1xJX7QG6g0ezDfmakLospobMJ1BXXi0UxySNFeimBPQho5E9L%2BqTKoMM4qI%2BUjnJwpo7FMkpNIAxr%2F1Xu5EXyJRcq%2B8lgQoV8IbufMg8oMskNmHzWRZF5u37fQCL%2FmTOIyl0T7bG0X3g50AJhN1%2Fp%2BioV14mcRh4chKm4gEvz8zWfL%2B1T26bqoemlk08NIfFNuCpwOzfXuenv65ieMyfIBpyp3%2FMfXoFrvIOMOOdqsQGOqUBS3apghCGQgWEqpfaHMEVP89hC2HzvNhu%2F0niU6acvX21xWO27usEw0o2EYUbVUuMw8irmuax5mhbgR74N%2Fa%2BeD8AZ2mKBf%2FtBm%2Bwg%2FiWVuymP0HD0TMleZ6jAGgij%2FBYp8TyUObxEBVh4uwPEVufovWh2CubzRQFTzdeVtrCXJpJcxWJupbNm8k2HRfQ38WOKKYqCBQQ6xviAMQPT5nTj3NWVG9a&X-Amz-Signature=fe9522943aef20a5aff741726664d617c436ec9025a0ebfa01abf4f7f3485f6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV6JUC2V%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBYIiGrf3idjnzpZUZarqFXQ6Ds4erlwSejk3X5shuSZAiEAlTJ2fd%2ByVlNbi0oH%2Brra5REEWGHBEPYc4v3iC%2FKTAkoqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDK3LyQ5DUUgTBc9dCrcA3JWDdJyVMvDjhJGSDUsBgHLPeecvyIAIYmD7PCiiB3%2FGrJ6GKfgQmFQV6f%2F86cZCA3SVZ%2FUaAbxVNc%2B5xVpfCVhUi1a6tUGDGOe5XBqXPhn5UxqGuWdnR36dHtXR3BlDglnLQUkgrErdQsx4yV9nfNZmAupxbLB%2FRDnINs60WHYeJSwQSqzfnGX7UzeBKNG3cmasHU0XlzV%2FImMykkIcsgFV6OHk5YkoIwuWLyyMtzmSjUx31xYbit8NB%2BKLqlJxNI15mIPLa6r%2BnYXFohs7XnQb8eKKfMM501SFzrq9jS2H1Qqz%2Fs4oYve4FPrA%2FUkCXWM%2BAJ3mvxFkeDVuWMzo64CHhW7udahy0s2%2F1UIVFhat%2FjoHPiSqfWrLI8FoFVtjH2sk4xYPCVH0rQxBc2uUe%2Bf1xJX7QG6g0ezDfmakLospobMJ1BXXi0UxySNFeimBPQho5E9L%2BqTKoMM4qI%2BUjnJwpo7FMkpNIAxr%2F1Xu5EXyJRcq%2B8lgQoV8IbufMg8oMskNmHzWRZF5u37fQCL%2FmTOIyl0T7bG0X3g50AJhN1%2Fp%2BioV14mcRh4chKm4gEvz8zWfL%2B1T26bqoemlk08NIfFNuCpwOzfXuenv65ieMyfIBpyp3%2FMfXoFrvIOMOOdqsQGOqUBS3apghCGQgWEqpfaHMEVP89hC2HzvNhu%2F0niU6acvX21xWO27usEw0o2EYUbVUuMw8irmuax5mhbgR74N%2Fa%2BeD8AZ2mKBf%2FtBm%2Bwg%2FiWVuymP0HD0TMleZ6jAGgij%2FBYp8TyUObxEBVh4uwPEVufovWh2CubzRQFTzdeVtrCXJpJcxWJupbNm8k2HRfQ38WOKKYqCBQQ6xviAMQPT5nTj3NWVG9a&X-Amz-Signature=367538df2686889d68a6de50941091534ca7bd813473a7c4cf9f1e6f1dec0355&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV6JUC2V%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBYIiGrf3idjnzpZUZarqFXQ6Ds4erlwSejk3X5shuSZAiEAlTJ2fd%2ByVlNbi0oH%2Brra5REEWGHBEPYc4v3iC%2FKTAkoqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDK3LyQ5DUUgTBc9dCrcA3JWDdJyVMvDjhJGSDUsBgHLPeecvyIAIYmD7PCiiB3%2FGrJ6GKfgQmFQV6f%2F86cZCA3SVZ%2FUaAbxVNc%2B5xVpfCVhUi1a6tUGDGOe5XBqXPhn5UxqGuWdnR36dHtXR3BlDglnLQUkgrErdQsx4yV9nfNZmAupxbLB%2FRDnINs60WHYeJSwQSqzfnGX7UzeBKNG3cmasHU0XlzV%2FImMykkIcsgFV6OHk5YkoIwuWLyyMtzmSjUx31xYbit8NB%2BKLqlJxNI15mIPLa6r%2BnYXFohs7XnQb8eKKfMM501SFzrq9jS2H1Qqz%2Fs4oYve4FPrA%2FUkCXWM%2BAJ3mvxFkeDVuWMzo64CHhW7udahy0s2%2F1UIVFhat%2FjoHPiSqfWrLI8FoFVtjH2sk4xYPCVH0rQxBc2uUe%2Bf1xJX7QG6g0ezDfmakLospobMJ1BXXi0UxySNFeimBPQho5E9L%2BqTKoMM4qI%2BUjnJwpo7FMkpNIAxr%2F1Xu5EXyJRcq%2B8lgQoV8IbufMg8oMskNmHzWRZF5u37fQCL%2FmTOIyl0T7bG0X3g50AJhN1%2Fp%2BioV14mcRh4chKm4gEvz8zWfL%2B1T26bqoemlk08NIfFNuCpwOzfXuenv65ieMyfIBpyp3%2FMfXoFrvIOMOOdqsQGOqUBS3apghCGQgWEqpfaHMEVP89hC2HzvNhu%2F0niU6acvX21xWO27usEw0o2EYUbVUuMw8irmuax5mhbgR74N%2Fa%2BeD8AZ2mKBf%2FtBm%2Bwg%2FiWVuymP0HD0TMleZ6jAGgij%2FBYp8TyUObxEBVh4uwPEVufovWh2CubzRQFTzdeVtrCXJpJcxWJupbNm8k2HRfQ38WOKKYqCBQQ6xviAMQPT5nTj3NWVG9a&X-Amz-Signature=127fc8351b04174a8ec2fc1ce90d7a6081760d92ff539719a346e170b16dca8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV6JUC2V%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBYIiGrf3idjnzpZUZarqFXQ6Ds4erlwSejk3X5shuSZAiEAlTJ2fd%2ByVlNbi0oH%2Brra5REEWGHBEPYc4v3iC%2FKTAkoqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDK3LyQ5DUUgTBc9dCrcA3JWDdJyVMvDjhJGSDUsBgHLPeecvyIAIYmD7PCiiB3%2FGrJ6GKfgQmFQV6f%2F86cZCA3SVZ%2FUaAbxVNc%2B5xVpfCVhUi1a6tUGDGOe5XBqXPhn5UxqGuWdnR36dHtXR3BlDglnLQUkgrErdQsx4yV9nfNZmAupxbLB%2FRDnINs60WHYeJSwQSqzfnGX7UzeBKNG3cmasHU0XlzV%2FImMykkIcsgFV6OHk5YkoIwuWLyyMtzmSjUx31xYbit8NB%2BKLqlJxNI15mIPLa6r%2BnYXFohs7XnQb8eKKfMM501SFzrq9jS2H1Qqz%2Fs4oYve4FPrA%2FUkCXWM%2BAJ3mvxFkeDVuWMzo64CHhW7udahy0s2%2F1UIVFhat%2FjoHPiSqfWrLI8FoFVtjH2sk4xYPCVH0rQxBc2uUe%2Bf1xJX7QG6g0ezDfmakLospobMJ1BXXi0UxySNFeimBPQho5E9L%2BqTKoMM4qI%2BUjnJwpo7FMkpNIAxr%2F1Xu5EXyJRcq%2B8lgQoV8IbufMg8oMskNmHzWRZF5u37fQCL%2FmTOIyl0T7bG0X3g50AJhN1%2Fp%2BioV14mcRh4chKm4gEvz8zWfL%2B1T26bqoemlk08NIfFNuCpwOzfXuenv65ieMyfIBpyp3%2FMfXoFrvIOMOOdqsQGOqUBS3apghCGQgWEqpfaHMEVP89hC2HzvNhu%2F0niU6acvX21xWO27usEw0o2EYUbVUuMw8irmuax5mhbgR74N%2Fa%2BeD8AZ2mKBf%2FtBm%2Bwg%2FiWVuymP0HD0TMleZ6jAGgij%2FBYp8TyUObxEBVh4uwPEVufovWh2CubzRQFTzdeVtrCXJpJcxWJupbNm8k2HRfQ38WOKKYqCBQQ6xviAMQPT5nTj3NWVG9a&X-Amz-Signature=c7b39c238e0cb0e8985dca6724e2543185de6f391b02dad34d20e7eba17a646e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV6JUC2V%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBYIiGrf3idjnzpZUZarqFXQ6Ds4erlwSejk3X5shuSZAiEAlTJ2fd%2ByVlNbi0oH%2Brra5REEWGHBEPYc4v3iC%2FKTAkoqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDK3LyQ5DUUgTBc9dCrcA3JWDdJyVMvDjhJGSDUsBgHLPeecvyIAIYmD7PCiiB3%2FGrJ6GKfgQmFQV6f%2F86cZCA3SVZ%2FUaAbxVNc%2B5xVpfCVhUi1a6tUGDGOe5XBqXPhn5UxqGuWdnR36dHtXR3BlDglnLQUkgrErdQsx4yV9nfNZmAupxbLB%2FRDnINs60WHYeJSwQSqzfnGX7UzeBKNG3cmasHU0XlzV%2FImMykkIcsgFV6OHk5YkoIwuWLyyMtzmSjUx31xYbit8NB%2BKLqlJxNI15mIPLa6r%2BnYXFohs7XnQb8eKKfMM501SFzrq9jS2H1Qqz%2Fs4oYve4FPrA%2FUkCXWM%2BAJ3mvxFkeDVuWMzo64CHhW7udahy0s2%2F1UIVFhat%2FjoHPiSqfWrLI8FoFVtjH2sk4xYPCVH0rQxBc2uUe%2Bf1xJX7QG6g0ezDfmakLospobMJ1BXXi0UxySNFeimBPQho5E9L%2BqTKoMM4qI%2BUjnJwpo7FMkpNIAxr%2F1Xu5EXyJRcq%2B8lgQoV8IbufMg8oMskNmHzWRZF5u37fQCL%2FmTOIyl0T7bG0X3g50AJhN1%2Fp%2BioV14mcRh4chKm4gEvz8zWfL%2B1T26bqoemlk08NIfFNuCpwOzfXuenv65ieMyfIBpyp3%2FMfXoFrvIOMOOdqsQGOqUBS3apghCGQgWEqpfaHMEVP89hC2HzvNhu%2F0niU6acvX21xWO27usEw0o2EYUbVUuMw8irmuax5mhbgR74N%2Fa%2BeD8AZ2mKBf%2FtBm%2Bwg%2FiWVuymP0HD0TMleZ6jAGgij%2FBYp8TyUObxEBVh4uwPEVufovWh2CubzRQFTzdeVtrCXJpJcxWJupbNm8k2HRfQ38WOKKYqCBQQ6xviAMQPT5nTj3NWVG9a&X-Amz-Signature=4f819f04a2f398de05269fb95c694282667d08f5af389de0285b71647d92a6e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV6JUC2V%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBYIiGrf3idjnzpZUZarqFXQ6Ds4erlwSejk3X5shuSZAiEAlTJ2fd%2ByVlNbi0oH%2Brra5REEWGHBEPYc4v3iC%2FKTAkoqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDK3LyQ5DUUgTBc9dCrcA3JWDdJyVMvDjhJGSDUsBgHLPeecvyIAIYmD7PCiiB3%2FGrJ6GKfgQmFQV6f%2F86cZCA3SVZ%2FUaAbxVNc%2B5xVpfCVhUi1a6tUGDGOe5XBqXPhn5UxqGuWdnR36dHtXR3BlDglnLQUkgrErdQsx4yV9nfNZmAupxbLB%2FRDnINs60WHYeJSwQSqzfnGX7UzeBKNG3cmasHU0XlzV%2FImMykkIcsgFV6OHk5YkoIwuWLyyMtzmSjUx31xYbit8NB%2BKLqlJxNI15mIPLa6r%2BnYXFohs7XnQb8eKKfMM501SFzrq9jS2H1Qqz%2Fs4oYve4FPrA%2FUkCXWM%2BAJ3mvxFkeDVuWMzo64CHhW7udahy0s2%2F1UIVFhat%2FjoHPiSqfWrLI8FoFVtjH2sk4xYPCVH0rQxBc2uUe%2Bf1xJX7QG6g0ezDfmakLospobMJ1BXXi0UxySNFeimBPQho5E9L%2BqTKoMM4qI%2BUjnJwpo7FMkpNIAxr%2F1Xu5EXyJRcq%2B8lgQoV8IbufMg8oMskNmHzWRZF5u37fQCL%2FmTOIyl0T7bG0X3g50AJhN1%2Fp%2BioV14mcRh4chKm4gEvz8zWfL%2B1T26bqoemlk08NIfFNuCpwOzfXuenv65ieMyfIBpyp3%2FMfXoFrvIOMOOdqsQGOqUBS3apghCGQgWEqpfaHMEVP89hC2HzvNhu%2F0niU6acvX21xWO27usEw0o2EYUbVUuMw8irmuax5mhbgR74N%2Fa%2BeD8AZ2mKBf%2FtBm%2Bwg%2FiWVuymP0HD0TMleZ6jAGgij%2FBYp8TyUObxEBVh4uwPEVufovWh2CubzRQFTzdeVtrCXJpJcxWJupbNm8k2HRfQ38WOKKYqCBQQ6xviAMQPT5nTj3NWVG9a&X-Amz-Signature=d662bc33e70586bc2f8e0bd3fe8cfe4570e4e2896f1bf48a54c9d85c34a2d114&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV6JUC2V%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBYIiGrf3idjnzpZUZarqFXQ6Ds4erlwSejk3X5shuSZAiEAlTJ2fd%2ByVlNbi0oH%2Brra5REEWGHBEPYc4v3iC%2FKTAkoqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDK3LyQ5DUUgTBc9dCrcA3JWDdJyVMvDjhJGSDUsBgHLPeecvyIAIYmD7PCiiB3%2FGrJ6GKfgQmFQV6f%2F86cZCA3SVZ%2FUaAbxVNc%2B5xVpfCVhUi1a6tUGDGOe5XBqXPhn5UxqGuWdnR36dHtXR3BlDglnLQUkgrErdQsx4yV9nfNZmAupxbLB%2FRDnINs60WHYeJSwQSqzfnGX7UzeBKNG3cmasHU0XlzV%2FImMykkIcsgFV6OHk5YkoIwuWLyyMtzmSjUx31xYbit8NB%2BKLqlJxNI15mIPLa6r%2BnYXFohs7XnQb8eKKfMM501SFzrq9jS2H1Qqz%2Fs4oYve4FPrA%2FUkCXWM%2BAJ3mvxFkeDVuWMzo64CHhW7udahy0s2%2F1UIVFhat%2FjoHPiSqfWrLI8FoFVtjH2sk4xYPCVH0rQxBc2uUe%2Bf1xJX7QG6g0ezDfmakLospobMJ1BXXi0UxySNFeimBPQho5E9L%2BqTKoMM4qI%2BUjnJwpo7FMkpNIAxr%2F1Xu5EXyJRcq%2B8lgQoV8IbufMg8oMskNmHzWRZF5u37fQCL%2FmTOIyl0T7bG0X3g50AJhN1%2Fp%2BioV14mcRh4chKm4gEvz8zWfL%2B1T26bqoemlk08NIfFNuCpwOzfXuenv65ieMyfIBpyp3%2FMfXoFrvIOMOOdqsQGOqUBS3apghCGQgWEqpfaHMEVP89hC2HzvNhu%2F0niU6acvX21xWO27usEw0o2EYUbVUuMw8irmuax5mhbgR74N%2Fa%2BeD8AZ2mKBf%2FtBm%2Bwg%2FiWVuymP0HD0TMleZ6jAGgij%2FBYp8TyUObxEBVh4uwPEVufovWh2CubzRQFTzdeVtrCXJpJcxWJupbNm8k2HRfQ38WOKKYqCBQQ6xviAMQPT5nTj3NWVG9a&X-Amz-Signature=27ede008151f7d7c098891e76f30a2928413be62656754fd81ef982e5c7bedfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO: rviz img

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

TODO: add rviz section

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV6JUC2V%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBYIiGrf3idjnzpZUZarqFXQ6Ds4erlwSejk3X5shuSZAiEAlTJ2fd%2ByVlNbi0oH%2Brra5REEWGHBEPYc4v3iC%2FKTAkoqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDK3LyQ5DUUgTBc9dCrcA3JWDdJyVMvDjhJGSDUsBgHLPeecvyIAIYmD7PCiiB3%2FGrJ6GKfgQmFQV6f%2F86cZCA3SVZ%2FUaAbxVNc%2B5xVpfCVhUi1a6tUGDGOe5XBqXPhn5UxqGuWdnR36dHtXR3BlDglnLQUkgrErdQsx4yV9nfNZmAupxbLB%2FRDnINs60WHYeJSwQSqzfnGX7UzeBKNG3cmasHU0XlzV%2FImMykkIcsgFV6OHk5YkoIwuWLyyMtzmSjUx31xYbit8NB%2BKLqlJxNI15mIPLa6r%2BnYXFohs7XnQb8eKKfMM501SFzrq9jS2H1Qqz%2Fs4oYve4FPrA%2FUkCXWM%2BAJ3mvxFkeDVuWMzo64CHhW7udahy0s2%2F1UIVFhat%2FjoHPiSqfWrLI8FoFVtjH2sk4xYPCVH0rQxBc2uUe%2Bf1xJX7QG6g0ezDfmakLospobMJ1BXXi0UxySNFeimBPQho5E9L%2BqTKoMM4qI%2BUjnJwpo7FMkpNIAxr%2F1Xu5EXyJRcq%2B8lgQoV8IbufMg8oMskNmHzWRZF5u37fQCL%2FmTOIyl0T7bG0X3g50AJhN1%2Fp%2BioV14mcRh4chKm4gEvz8zWfL%2B1T26bqoemlk08NIfFNuCpwOzfXuenv65ieMyfIBpyp3%2FMfXoFrvIOMOOdqsQGOqUBS3apghCGQgWEqpfaHMEVP89hC2HzvNhu%2F0niU6acvX21xWO27usEw0o2EYUbVUuMw8irmuax5mhbgR74N%2Fa%2BeD8AZ2mKBf%2FtBm%2Bwg%2FiWVuymP0HD0TMleZ6jAGgij%2FBYp8TyUObxEBVh4uwPEVufovWh2CubzRQFTzdeVtrCXJpJcxWJupbNm8k2HRfQ38WOKKYqCBQQ6xviAMQPT5nTj3NWVG9a&X-Amz-Signature=985009db359ccab68564512585a74be1da04790a3114cb130e5cd7bfcdf4ca75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
