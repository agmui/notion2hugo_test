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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJPQQ7JP%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkPKunvz46Bh1hIoucdxQqvjxR6rvBxjmlzkgwYO3JuwIgAbDNR3hpLhkIF6ogmUziDIEKpJfxvFTGh65OWn8lcuYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGscUC0kBHIlvfYIhSrcAwsgq2cMc6EKajo5s7gMMfxMJh1UxOrlVgRVo2u9NGmjQJQCNqLLPAJ9FnBS3wWg1qbkeAhtd6SfleKfK7RwulbmJrA8qjnxzh2KhQZDje2ilyZkHH0UqjIkbqqDOuVZcg1rek5P7lBMlwEF%2BxM%2Fa9SNPBkUeUa6rrL0jzz2apojCVME5GSRfrUWeJp0FoppJbGS7oyUKj%2BQ22iaOEFDdPPtP%2BM6JlksRSAJ78bmA7ku9pk9xk6cSvFNOt%2Ba7Uu%2BfIUg3wsR0xVaCAixBJzJkhMiD%2FjdjlVOSWtskv0zKn2p2wn%2BzHu8J03qEs9z55HDJMeXEe9rixNb0jbkmzRY62iTEi8vrE6owVHBvKzXtPxOgWRsl0SaAElTQdFFp9%2BoRxGxkV5RkZDIWoMXaxYOiNNcLpHqYegPIbS7psIoS3p4oqUrOY3xKiXcfUzXl8Yw8rl88Po4HEXaPgu8ghfnf%2BBrnEMOqMi%2BU2CjBWA9Yvb1QTqtGFuZyWRd0BVRWU91VVVm3qJI5OnU%2BUmc3dUCTKE%2BT0hWRHEfzm%2BkFV7apZxa67OyrzpUc%2BDhpdayNz%2BePzRFuXAS6LWKcp3gUP6SUYkTGMZALcINnf%2BeIPA4DqrTlHSen1jclP0MmSSHMJLV18YGOqUBUXndlFrnhQ%2FSlVh%2FvhzGDDfWd0fnUA5l4b3kBmW8vOTubmS6cTmnZZ4IbriSmkfQ%2BApGiivCDGeCoLd6RdGsMmcxmRuMJFHUiZLygCZbYNxtNvJtg2F4%2BA5sS%2BS9bN%2BmS2xmP55l1ZGwj9xXFzFVeCm0gR685E2JsA%2FKpeKSR9u9FhTFJuk3bVYedXNl7gSUezj6Zb1A0u95R6tP5jkhmC4CLOGC&X-Amz-Signature=71804301153d2d1b7de60d860522f911217586c86a352325f49e8aaa7e9f5e92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PWYFC2P%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMG4I5KlcG0X7WfVqMN5J4Fh%2BH2mQPXvAi%2F2bMgoCAVAiAQChvUQkoECpRrbrSE%2BEOcGIJ8%2BX0sPmtTrsZ5%2BIbExyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD%2F44hc57%2Br4PPVL3KtwDynfcLbM3WrtpmMQ87mplHGKI95MYrx8dsv3oaF3ACzRKKYi9WutbQdMFBRtTKzeAbCeOVggxqE9syfXJqgxcHYFoVUKSStU0zZr%2Beh9afLt6aqPn0EAFBjcatjqowRsskrUP9hiRPf8i%2B0Gyypi2eCxLCnhvGN4xLpzaU0981GN0l%2FzJAIkXPwx6fSMAvO2p4QP3vY3CvGsXdKLGe5xfs9EpG4kpFFb0xRWUv1rqfXPERt0qZckPWkAXy3oIw33U1O7wUIwrP0q9zW0Ifkonx89ClJAmnqyeiqPp1gEJcGLdegrHHg4F2yNEZ22ZgwvP%2Fen1zbKp36wRV4wSCmnD2CN0ffrQ5Xkyc1Iwj1XZFIVyu6DL9qEaZX07on1cEIVpGFpJfLYpF09tSBnTrFWjBkQonExVUBHRzywWyXLqWqDVUPajJMVUNHnqgYc%2FRPicmZNOPuiUjAr8GHxguoDZdEkF99noC9PJJDGcvPXakZCIXMdW%2BEJUJM0JnitkDUvE4yKkVPL6gEhvY4GIuywUx%2BiTZ8jxzuNIz0bebprp6fhglq4CTmXmWwPLRpECB5E2jdi%2FR3iw7g9VeJqYWQWBDJukSl8mXrM4Ksx53n7Zgcx4wkJfSQc5hbh8ojAwsKfXxgY6pgFYk7PF1msx2MlO0nFAJELb9SUIvjrJt4fWazNm1YhdXzSOTmFBmkYgfGD%2FuNidn55Kmfb54jCR4MTF%2Br8gxZiogP3B4u5aU19IQAMSWzGtzdyiRqXNzqMrHKxoXWcpEGN%2BJuJL%2BTQ9qfnmSBtA7cyF9EyHBvnhmgsn4m7jxL3%2BX9OoDmJy3HI006zSJArv4CHeToVuntEWL9kQyrr3EpXw2jtxJuQt&X-Amz-Signature=6473cddc36c343699ec9ce18e57a8c43ec6498f52c3756039a93f322e34d6a79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PWYFC2P%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMG4I5KlcG0X7WfVqMN5J4Fh%2BH2mQPXvAi%2F2bMgoCAVAiAQChvUQkoECpRrbrSE%2BEOcGIJ8%2BX0sPmtTrsZ5%2BIbExyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD%2F44hc57%2Br4PPVL3KtwDynfcLbM3WrtpmMQ87mplHGKI95MYrx8dsv3oaF3ACzRKKYi9WutbQdMFBRtTKzeAbCeOVggxqE9syfXJqgxcHYFoVUKSStU0zZr%2Beh9afLt6aqPn0EAFBjcatjqowRsskrUP9hiRPf8i%2B0Gyypi2eCxLCnhvGN4xLpzaU0981GN0l%2FzJAIkXPwx6fSMAvO2p4QP3vY3CvGsXdKLGe5xfs9EpG4kpFFb0xRWUv1rqfXPERt0qZckPWkAXy3oIw33U1O7wUIwrP0q9zW0Ifkonx89ClJAmnqyeiqPp1gEJcGLdegrHHg4F2yNEZ22ZgwvP%2Fen1zbKp36wRV4wSCmnD2CN0ffrQ5Xkyc1Iwj1XZFIVyu6DL9qEaZX07on1cEIVpGFpJfLYpF09tSBnTrFWjBkQonExVUBHRzywWyXLqWqDVUPajJMVUNHnqgYc%2FRPicmZNOPuiUjAr8GHxguoDZdEkF99noC9PJJDGcvPXakZCIXMdW%2BEJUJM0JnitkDUvE4yKkVPL6gEhvY4GIuywUx%2BiTZ8jxzuNIz0bebprp6fhglq4CTmXmWwPLRpECB5E2jdi%2FR3iw7g9VeJqYWQWBDJukSl8mXrM4Ksx53n7Zgcx4wkJfSQc5hbh8ojAwsKfXxgY6pgFYk7PF1msx2MlO0nFAJELb9SUIvjrJt4fWazNm1YhdXzSOTmFBmkYgfGD%2FuNidn55Kmfb54jCR4MTF%2Br8gxZiogP3B4u5aU19IQAMSWzGtzdyiRqXNzqMrHKxoXWcpEGN%2BJuJL%2BTQ9qfnmSBtA7cyF9EyHBvnhmgsn4m7jxL3%2BX9OoDmJy3HI006zSJArv4CHeToVuntEWL9kQyrr3EpXw2jtxJuQt&X-Amz-Signature=04d2c775fa4bbbe14c4a695cf0ab7f9fad7795907aea0741ab745172c6d78ade&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PWYFC2P%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMG4I5KlcG0X7WfVqMN5J4Fh%2BH2mQPXvAi%2F2bMgoCAVAiAQChvUQkoECpRrbrSE%2BEOcGIJ8%2BX0sPmtTrsZ5%2BIbExyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD%2F44hc57%2Br4PPVL3KtwDynfcLbM3WrtpmMQ87mplHGKI95MYrx8dsv3oaF3ACzRKKYi9WutbQdMFBRtTKzeAbCeOVggxqE9syfXJqgxcHYFoVUKSStU0zZr%2Beh9afLt6aqPn0EAFBjcatjqowRsskrUP9hiRPf8i%2B0Gyypi2eCxLCnhvGN4xLpzaU0981GN0l%2FzJAIkXPwx6fSMAvO2p4QP3vY3CvGsXdKLGe5xfs9EpG4kpFFb0xRWUv1rqfXPERt0qZckPWkAXy3oIw33U1O7wUIwrP0q9zW0Ifkonx89ClJAmnqyeiqPp1gEJcGLdegrHHg4F2yNEZ22ZgwvP%2Fen1zbKp36wRV4wSCmnD2CN0ffrQ5Xkyc1Iwj1XZFIVyu6DL9qEaZX07on1cEIVpGFpJfLYpF09tSBnTrFWjBkQonExVUBHRzywWyXLqWqDVUPajJMVUNHnqgYc%2FRPicmZNOPuiUjAr8GHxguoDZdEkF99noC9PJJDGcvPXakZCIXMdW%2BEJUJM0JnitkDUvE4yKkVPL6gEhvY4GIuywUx%2BiTZ8jxzuNIz0bebprp6fhglq4CTmXmWwPLRpECB5E2jdi%2FR3iw7g9VeJqYWQWBDJukSl8mXrM4Ksx53n7Zgcx4wkJfSQc5hbh8ojAwsKfXxgY6pgFYk7PF1msx2MlO0nFAJELb9SUIvjrJt4fWazNm1YhdXzSOTmFBmkYgfGD%2FuNidn55Kmfb54jCR4MTF%2Br8gxZiogP3B4u5aU19IQAMSWzGtzdyiRqXNzqMrHKxoXWcpEGN%2BJuJL%2BTQ9qfnmSBtA7cyF9EyHBvnhmgsn4m7jxL3%2BX9OoDmJy3HI006zSJArv4CHeToVuntEWL9kQyrr3EpXw2jtxJuQt&X-Amz-Signature=497e1c7285d8aef719f87d03b68b2de74d0770b1ce7b0c7a38b36f1a2678e712&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PWYFC2P%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMG4I5KlcG0X7WfVqMN5J4Fh%2BH2mQPXvAi%2F2bMgoCAVAiAQChvUQkoECpRrbrSE%2BEOcGIJ8%2BX0sPmtTrsZ5%2BIbExyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD%2F44hc57%2Br4PPVL3KtwDynfcLbM3WrtpmMQ87mplHGKI95MYrx8dsv3oaF3ACzRKKYi9WutbQdMFBRtTKzeAbCeOVggxqE9syfXJqgxcHYFoVUKSStU0zZr%2Beh9afLt6aqPn0EAFBjcatjqowRsskrUP9hiRPf8i%2B0Gyypi2eCxLCnhvGN4xLpzaU0981GN0l%2FzJAIkXPwx6fSMAvO2p4QP3vY3CvGsXdKLGe5xfs9EpG4kpFFb0xRWUv1rqfXPERt0qZckPWkAXy3oIw33U1O7wUIwrP0q9zW0Ifkonx89ClJAmnqyeiqPp1gEJcGLdegrHHg4F2yNEZ22ZgwvP%2Fen1zbKp36wRV4wSCmnD2CN0ffrQ5Xkyc1Iwj1XZFIVyu6DL9qEaZX07on1cEIVpGFpJfLYpF09tSBnTrFWjBkQonExVUBHRzywWyXLqWqDVUPajJMVUNHnqgYc%2FRPicmZNOPuiUjAr8GHxguoDZdEkF99noC9PJJDGcvPXakZCIXMdW%2BEJUJM0JnitkDUvE4yKkVPL6gEhvY4GIuywUx%2BiTZ8jxzuNIz0bebprp6fhglq4CTmXmWwPLRpECB5E2jdi%2FR3iw7g9VeJqYWQWBDJukSl8mXrM4Ksx53n7Zgcx4wkJfSQc5hbh8ojAwsKfXxgY6pgFYk7PF1msx2MlO0nFAJELb9SUIvjrJt4fWazNm1YhdXzSOTmFBmkYgfGD%2FuNidn55Kmfb54jCR4MTF%2Br8gxZiogP3B4u5aU19IQAMSWzGtzdyiRqXNzqMrHKxoXWcpEGN%2BJuJL%2BTQ9qfnmSBtA7cyF9EyHBvnhmgsn4m7jxL3%2BX9OoDmJy3HI006zSJArv4CHeToVuntEWL9kQyrr3EpXw2jtxJuQt&X-Amz-Signature=92c0172120daa4a04636698b4df5d3830082fa240ec23c64df5ff68d8fa81729&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PWYFC2P%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMG4I5KlcG0X7WfVqMN5J4Fh%2BH2mQPXvAi%2F2bMgoCAVAiAQChvUQkoECpRrbrSE%2BEOcGIJ8%2BX0sPmtTrsZ5%2BIbExyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD%2F44hc57%2Br4PPVL3KtwDynfcLbM3WrtpmMQ87mplHGKI95MYrx8dsv3oaF3ACzRKKYi9WutbQdMFBRtTKzeAbCeOVggxqE9syfXJqgxcHYFoVUKSStU0zZr%2Beh9afLt6aqPn0EAFBjcatjqowRsskrUP9hiRPf8i%2B0Gyypi2eCxLCnhvGN4xLpzaU0981GN0l%2FzJAIkXPwx6fSMAvO2p4QP3vY3CvGsXdKLGe5xfs9EpG4kpFFb0xRWUv1rqfXPERt0qZckPWkAXy3oIw33U1O7wUIwrP0q9zW0Ifkonx89ClJAmnqyeiqPp1gEJcGLdegrHHg4F2yNEZ22ZgwvP%2Fen1zbKp36wRV4wSCmnD2CN0ffrQ5Xkyc1Iwj1XZFIVyu6DL9qEaZX07on1cEIVpGFpJfLYpF09tSBnTrFWjBkQonExVUBHRzywWyXLqWqDVUPajJMVUNHnqgYc%2FRPicmZNOPuiUjAr8GHxguoDZdEkF99noC9PJJDGcvPXakZCIXMdW%2BEJUJM0JnitkDUvE4yKkVPL6gEhvY4GIuywUx%2BiTZ8jxzuNIz0bebprp6fhglq4CTmXmWwPLRpECB5E2jdi%2FR3iw7g9VeJqYWQWBDJukSl8mXrM4Ksx53n7Zgcx4wkJfSQc5hbh8ojAwsKfXxgY6pgFYk7PF1msx2MlO0nFAJELb9SUIvjrJt4fWazNm1YhdXzSOTmFBmkYgfGD%2FuNidn55Kmfb54jCR4MTF%2Br8gxZiogP3B4u5aU19IQAMSWzGtzdyiRqXNzqMrHKxoXWcpEGN%2BJuJL%2BTQ9qfnmSBtA7cyF9EyHBvnhmgsn4m7jxL3%2BX9OoDmJy3HI006zSJArv4CHeToVuntEWL9kQyrr3EpXw2jtxJuQt&X-Amz-Signature=1c05d935ec88fa31ffdf2e79b281b078274c6f624db1f2b0716bd04853ffef8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PWYFC2P%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMG4I5KlcG0X7WfVqMN5J4Fh%2BH2mQPXvAi%2F2bMgoCAVAiAQChvUQkoECpRrbrSE%2BEOcGIJ8%2BX0sPmtTrsZ5%2BIbExyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD%2F44hc57%2Br4PPVL3KtwDynfcLbM3WrtpmMQ87mplHGKI95MYrx8dsv3oaF3ACzRKKYi9WutbQdMFBRtTKzeAbCeOVggxqE9syfXJqgxcHYFoVUKSStU0zZr%2Beh9afLt6aqPn0EAFBjcatjqowRsskrUP9hiRPf8i%2B0Gyypi2eCxLCnhvGN4xLpzaU0981GN0l%2FzJAIkXPwx6fSMAvO2p4QP3vY3CvGsXdKLGe5xfs9EpG4kpFFb0xRWUv1rqfXPERt0qZckPWkAXy3oIw33U1O7wUIwrP0q9zW0Ifkonx89ClJAmnqyeiqPp1gEJcGLdegrHHg4F2yNEZ22ZgwvP%2Fen1zbKp36wRV4wSCmnD2CN0ffrQ5Xkyc1Iwj1XZFIVyu6DL9qEaZX07on1cEIVpGFpJfLYpF09tSBnTrFWjBkQonExVUBHRzywWyXLqWqDVUPajJMVUNHnqgYc%2FRPicmZNOPuiUjAr8GHxguoDZdEkF99noC9PJJDGcvPXakZCIXMdW%2BEJUJM0JnitkDUvE4yKkVPL6gEhvY4GIuywUx%2BiTZ8jxzuNIz0bebprp6fhglq4CTmXmWwPLRpECB5E2jdi%2FR3iw7g9VeJqYWQWBDJukSl8mXrM4Ksx53n7Zgcx4wkJfSQc5hbh8ojAwsKfXxgY6pgFYk7PF1msx2MlO0nFAJELb9SUIvjrJt4fWazNm1YhdXzSOTmFBmkYgfGD%2FuNidn55Kmfb54jCR4MTF%2Br8gxZiogP3B4u5aU19IQAMSWzGtzdyiRqXNzqMrHKxoXWcpEGN%2BJuJL%2BTQ9qfnmSBtA7cyF9EyHBvnhmgsn4m7jxL3%2BX9OoDmJy3HI006zSJArv4CHeToVuntEWL9kQyrr3EpXw2jtxJuQt&X-Amz-Signature=6fe4f223184b0bbe402246be08b8bd956d4216457657d6d1e3b1a1a6584d3d31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PWYFC2P%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMG4I5KlcG0X7WfVqMN5J4Fh%2BH2mQPXvAi%2F2bMgoCAVAiAQChvUQkoECpRrbrSE%2BEOcGIJ8%2BX0sPmtTrsZ5%2BIbExyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD%2F44hc57%2Br4PPVL3KtwDynfcLbM3WrtpmMQ87mplHGKI95MYrx8dsv3oaF3ACzRKKYi9WutbQdMFBRtTKzeAbCeOVggxqE9syfXJqgxcHYFoVUKSStU0zZr%2Beh9afLt6aqPn0EAFBjcatjqowRsskrUP9hiRPf8i%2B0Gyypi2eCxLCnhvGN4xLpzaU0981GN0l%2FzJAIkXPwx6fSMAvO2p4QP3vY3CvGsXdKLGe5xfs9EpG4kpFFb0xRWUv1rqfXPERt0qZckPWkAXy3oIw33U1O7wUIwrP0q9zW0Ifkonx89ClJAmnqyeiqPp1gEJcGLdegrHHg4F2yNEZ22ZgwvP%2Fen1zbKp36wRV4wSCmnD2CN0ffrQ5Xkyc1Iwj1XZFIVyu6DL9qEaZX07on1cEIVpGFpJfLYpF09tSBnTrFWjBkQonExVUBHRzywWyXLqWqDVUPajJMVUNHnqgYc%2FRPicmZNOPuiUjAr8GHxguoDZdEkF99noC9PJJDGcvPXakZCIXMdW%2BEJUJM0JnitkDUvE4yKkVPL6gEhvY4GIuywUx%2BiTZ8jxzuNIz0bebprp6fhglq4CTmXmWwPLRpECB5E2jdi%2FR3iw7g9VeJqYWQWBDJukSl8mXrM4Ksx53n7Zgcx4wkJfSQc5hbh8ojAwsKfXxgY6pgFYk7PF1msx2MlO0nFAJELb9SUIvjrJt4fWazNm1YhdXzSOTmFBmkYgfGD%2FuNidn55Kmfb54jCR4MTF%2Br8gxZiogP3B4u5aU19IQAMSWzGtzdyiRqXNzqMrHKxoXWcpEGN%2BJuJL%2BTQ9qfnmSBtA7cyF9EyHBvnhmgsn4m7jxL3%2BX9OoDmJy3HI006zSJArv4CHeToVuntEWL9kQyrr3EpXw2jtxJuQt&X-Amz-Signature=6ebaa3b42c2906c28b2a939718913bf63a89809ae9aa68103377c6fdf7c54d39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PWYFC2P%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMG4I5KlcG0X7WfVqMN5J4Fh%2BH2mQPXvAi%2F2bMgoCAVAiAQChvUQkoECpRrbrSE%2BEOcGIJ8%2BX0sPmtTrsZ5%2BIbExyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD%2F44hc57%2Br4PPVL3KtwDynfcLbM3WrtpmMQ87mplHGKI95MYrx8dsv3oaF3ACzRKKYi9WutbQdMFBRtTKzeAbCeOVggxqE9syfXJqgxcHYFoVUKSStU0zZr%2Beh9afLt6aqPn0EAFBjcatjqowRsskrUP9hiRPf8i%2B0Gyypi2eCxLCnhvGN4xLpzaU0981GN0l%2FzJAIkXPwx6fSMAvO2p4QP3vY3CvGsXdKLGe5xfs9EpG4kpFFb0xRWUv1rqfXPERt0qZckPWkAXy3oIw33U1O7wUIwrP0q9zW0Ifkonx89ClJAmnqyeiqPp1gEJcGLdegrHHg4F2yNEZ22ZgwvP%2Fen1zbKp36wRV4wSCmnD2CN0ffrQ5Xkyc1Iwj1XZFIVyu6DL9qEaZX07on1cEIVpGFpJfLYpF09tSBnTrFWjBkQonExVUBHRzywWyXLqWqDVUPajJMVUNHnqgYc%2FRPicmZNOPuiUjAr8GHxguoDZdEkF99noC9PJJDGcvPXakZCIXMdW%2BEJUJM0JnitkDUvE4yKkVPL6gEhvY4GIuywUx%2BiTZ8jxzuNIz0bebprp6fhglq4CTmXmWwPLRpECB5E2jdi%2FR3iw7g9VeJqYWQWBDJukSl8mXrM4Ksx53n7Zgcx4wkJfSQc5hbh8ojAwsKfXxgY6pgFYk7PF1msx2MlO0nFAJELb9SUIvjrJt4fWazNm1YhdXzSOTmFBmkYgfGD%2FuNidn55Kmfb54jCR4MTF%2Br8gxZiogP3B4u5aU19IQAMSWzGtzdyiRqXNzqMrHKxoXWcpEGN%2BJuJL%2BTQ9qfnmSBtA7cyF9EyHBvnhmgsn4m7jxL3%2BX9OoDmJy3HI006zSJArv4CHeToVuntEWL9kQyrr3EpXw2jtxJuQt&X-Amz-Signature=c109def4940a696de3963eb10ac99e9a121d3a26666e1906dbbe479bae6fb301&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PWYFC2P%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMG4I5KlcG0X7WfVqMN5J4Fh%2BH2mQPXvAi%2F2bMgoCAVAiAQChvUQkoECpRrbrSE%2BEOcGIJ8%2BX0sPmtTrsZ5%2BIbExyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD%2F44hc57%2Br4PPVL3KtwDynfcLbM3WrtpmMQ87mplHGKI95MYrx8dsv3oaF3ACzRKKYi9WutbQdMFBRtTKzeAbCeOVggxqE9syfXJqgxcHYFoVUKSStU0zZr%2Beh9afLt6aqPn0EAFBjcatjqowRsskrUP9hiRPf8i%2B0Gyypi2eCxLCnhvGN4xLpzaU0981GN0l%2FzJAIkXPwx6fSMAvO2p4QP3vY3CvGsXdKLGe5xfs9EpG4kpFFb0xRWUv1rqfXPERt0qZckPWkAXy3oIw33U1O7wUIwrP0q9zW0Ifkonx89ClJAmnqyeiqPp1gEJcGLdegrHHg4F2yNEZ22ZgwvP%2Fen1zbKp36wRV4wSCmnD2CN0ffrQ5Xkyc1Iwj1XZFIVyu6DL9qEaZX07on1cEIVpGFpJfLYpF09tSBnTrFWjBkQonExVUBHRzywWyXLqWqDVUPajJMVUNHnqgYc%2FRPicmZNOPuiUjAr8GHxguoDZdEkF99noC9PJJDGcvPXakZCIXMdW%2BEJUJM0JnitkDUvE4yKkVPL6gEhvY4GIuywUx%2BiTZ8jxzuNIz0bebprp6fhglq4CTmXmWwPLRpECB5E2jdi%2FR3iw7g9VeJqYWQWBDJukSl8mXrM4Ksx53n7Zgcx4wkJfSQc5hbh8ojAwsKfXxgY6pgFYk7PF1msx2MlO0nFAJELb9SUIvjrJt4fWazNm1YhdXzSOTmFBmkYgfGD%2FuNidn55Kmfb54jCR4MTF%2Br8gxZiogP3B4u5aU19IQAMSWzGtzdyiRqXNzqMrHKxoXWcpEGN%2BJuJL%2BTQ9qfnmSBtA7cyF9EyHBvnhmgsn4m7jxL3%2BX9OoDmJy3HI006zSJArv4CHeToVuntEWL9kQyrr3EpXw2jtxJuQt&X-Amz-Signature=6c73cd10b75d8fa67fae798868142d44b0bfdece38dca4369a279e794240b292&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PWYFC2P%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMG4I5KlcG0X7WfVqMN5J4Fh%2BH2mQPXvAi%2F2bMgoCAVAiAQChvUQkoECpRrbrSE%2BEOcGIJ8%2BX0sPmtTrsZ5%2BIbExyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD%2F44hc57%2Br4PPVL3KtwDynfcLbM3WrtpmMQ87mplHGKI95MYrx8dsv3oaF3ACzRKKYi9WutbQdMFBRtTKzeAbCeOVggxqE9syfXJqgxcHYFoVUKSStU0zZr%2Beh9afLt6aqPn0EAFBjcatjqowRsskrUP9hiRPf8i%2B0Gyypi2eCxLCnhvGN4xLpzaU0981GN0l%2FzJAIkXPwx6fSMAvO2p4QP3vY3CvGsXdKLGe5xfs9EpG4kpFFb0xRWUv1rqfXPERt0qZckPWkAXy3oIw33U1O7wUIwrP0q9zW0Ifkonx89ClJAmnqyeiqPp1gEJcGLdegrHHg4F2yNEZ22ZgwvP%2Fen1zbKp36wRV4wSCmnD2CN0ffrQ5Xkyc1Iwj1XZFIVyu6DL9qEaZX07on1cEIVpGFpJfLYpF09tSBnTrFWjBkQonExVUBHRzywWyXLqWqDVUPajJMVUNHnqgYc%2FRPicmZNOPuiUjAr8GHxguoDZdEkF99noC9PJJDGcvPXakZCIXMdW%2BEJUJM0JnitkDUvE4yKkVPL6gEhvY4GIuywUx%2BiTZ8jxzuNIz0bebprp6fhglq4CTmXmWwPLRpECB5E2jdi%2FR3iw7g9VeJqYWQWBDJukSl8mXrM4Ksx53n7Zgcx4wkJfSQc5hbh8ojAwsKfXxgY6pgFYk7PF1msx2MlO0nFAJELb9SUIvjrJt4fWazNm1YhdXzSOTmFBmkYgfGD%2FuNidn55Kmfb54jCR4MTF%2Br8gxZiogP3B4u5aU19IQAMSWzGtzdyiRqXNzqMrHKxoXWcpEGN%2BJuJL%2BTQ9qfnmSBtA7cyF9EyHBvnhmgsn4m7jxL3%2BX9OoDmJy3HI006zSJArv4CHeToVuntEWL9kQyrr3EpXw2jtxJuQt&X-Amz-Signature=7327e2ddb009d0bf749a0ccf649b361059152f2052c743aa7a79f426ba1afb22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
