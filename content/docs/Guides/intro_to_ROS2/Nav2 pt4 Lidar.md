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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWZEKHUP%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIHVT0e6ZaZFO2cVFNDH3xgl8Y3P0NpqGedYzeWOKe89HAiEAuInTVZzfTXjBrir5dXVkRKRIT4FHn7vY3T9AYaPdGtAq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDGzDEpTrVLzwWhsBxircAwOIQDO6a05F%2FhvZwoDXZ41P256OSwDM%2B70t7iVq8ROMvEquC7PVwJp%2FXtsLiiW%2Fm5FQkPnragn7OWFvEaMtnWPQ9mOXtZD7jntuuWhujIVIqir5DIag2rFZBVZNAPtG2FOsLQOykN7wVfOnt0u34XfaCrZKSphs9j4RhcSN9OXQSAjVsTmqO5dUAyBprq4kNiS3gVQYWFJ4Ngj1s69kVDH92A%2BpZ77ZZpNY1fUdOMRoENxquyM8Vl1BrG0qyrV%2FY28uKipogyhogXASHCKJZ%2F0t%2B3buSI6Je5uw8LEICnw1kmxiEyuvb5g2pCdRb%2Bfff2Yl5Mf%2FfeoaiW23jfgmDjVWEOHNSZ0o6PV5mFs%2BAkf%2Be04eVIIrC1%2FXc2RUctXpmSUxglXbc6KfcL4pvBv8CuLn31I6S5ybrXXBubZt7bJCLEIiisZT5NDoUwsadsCycPmDiQ9Yamw88vLvtsO5Utc6b5Xa4D0iZIDsuQhm2ovXYrYEtSCupj%2B2HqqAAULbQfxboDxICcb4weov9wS%2FFV5Plf5x6%2BYW4NIu%2FbdXGORO2u5YosJczsjs8wnYS42JnR57Lys0zW5c0AqV1dO3ae3xrTz%2FgYj2HeuMUBV7XrG9ZFUaIugqhm%2B6xtDsMMK64coGOqUBJJF1o7IRWADMQkaG98bsmX3CPi6JHxm%2BSm4xGn2sONklyu9GFUl8krgGidT3iP1l4mCVA1pa00HhlxxqG%2BkOqzieYFyvYkeWfA2ZElt59FCs4kfy%2FzL3xAEKhnYN50ZH2yJLa7dQKZRBDwmNjPoJrU7VyHZC8OpvTQljt7pOMcZrNhmpMQo9FYbnmKA%2BqGtfGk%2BSIhcTZtdcGgpVdj1hyJ%2BugXXe&X-Amz-Signature=d2fb8dee3488a1a3d238ccd78fbb5339fc22cf172edf92c40411378102a1ef1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBN4UBL5%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCID4C9O5HOmh3nGgJjWYcoBYpmh%2FZg9Xx9CBqdASPLSWMAiBkMoru5nGcrIHKE8gykeYLKoCX5ujw3rkbcK0K1XTogSr%2FAwgKEAAaDDYzNzQyMzE4MzgwNSIMc%2FxwWbtyKxgy0zCrKtwDmkdHnFn6pr45k8s9F6tsruTyFoCW%2FppLHgeSTUdzGGIodkHPSB8i6uZDO2i7iewKzZA8VvhgUA9e1kJc9PSAeynlW8wph2SnvATxONnDxr4KBEOKnQfm%2FJRKYLelOMT%2BPfO3v7wRvd5Cb6ThIIuAvp%2FDVM27GQqlEzAH1sW7JDSSEFvdzdCEzvsoY%2By%2F687YaI%2B1isAKwMpiLxvk6LB4oj2vyFahn%2FwIyuW%2BBD%2Fgh1O4ddPs3qMpe4an%2FYHSlKrgfS26eNtsE%2Bv6h2ADnvmEeqj3%2FmwSQsgzVo2th%2BD%2F4IjglSEKbi7ccIU%2Fw0I83crvMqWh5TQbz7L3SKavz%2BkEgF2poGICrNEJkMGmsdlMLAefSUD9vAdNWBqsadcL3YrunCksFPSyuFMUJf4iz2VZjiw6f%2F0Q2J%2FiYkqHZncg48UNgU6WJjWPujssyDWrdS1R%2Bcc0I8XERG4DiunvJQZBbck7eQtsMgdsC%2FTKSIBucSDTdo34V9T8SfNjkHTefXFaoEBZ%2BayYx2%2B1fD6hMPFa1LqZl5AP97cCZhPnhQngddglYxgpQrFuXm91DndZnF7m59AE2OGG99n5Q37B1jzS0zAZhr6wD4nG8wPjq0k%2BCLJQ9XTvgeauQpWvKBkwys7hygY6pgH%2BaShvrJDnoKOpfEZbnMOqK8H5cwXjlci7odr6eiVgJYwUq8dxp7oj25yodgwgqT%2FB0BrLjCxzAcBNJY1IK3agMVO0GKAGjHPpkOGhwT6Qp%2BqVxnjFG4v%2BeK5KPdqvBppDIXbBa%2BKccKMoa1DroVTDuj5cQEQdId0GnfYXxuTVPqQRg8fFVb0wgXWOZTcF%2B6U3wFOguWhF5Og2Sh0tqrGdA6xtpMco&X-Amz-Signature=02c3e81f282127292e698c40c781933f5f01758119d1b8f7dfae760af5ce21c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBN4UBL5%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCID4C9O5HOmh3nGgJjWYcoBYpmh%2FZg9Xx9CBqdASPLSWMAiBkMoru5nGcrIHKE8gykeYLKoCX5ujw3rkbcK0K1XTogSr%2FAwgKEAAaDDYzNzQyMzE4MzgwNSIMc%2FxwWbtyKxgy0zCrKtwDmkdHnFn6pr45k8s9F6tsruTyFoCW%2FppLHgeSTUdzGGIodkHPSB8i6uZDO2i7iewKzZA8VvhgUA9e1kJc9PSAeynlW8wph2SnvATxONnDxr4KBEOKnQfm%2FJRKYLelOMT%2BPfO3v7wRvd5Cb6ThIIuAvp%2FDVM27GQqlEzAH1sW7JDSSEFvdzdCEzvsoY%2By%2F687YaI%2B1isAKwMpiLxvk6LB4oj2vyFahn%2FwIyuW%2BBD%2Fgh1O4ddPs3qMpe4an%2FYHSlKrgfS26eNtsE%2Bv6h2ADnvmEeqj3%2FmwSQsgzVo2th%2BD%2F4IjglSEKbi7ccIU%2Fw0I83crvMqWh5TQbz7L3SKavz%2BkEgF2poGICrNEJkMGmsdlMLAefSUD9vAdNWBqsadcL3YrunCksFPSyuFMUJf4iz2VZjiw6f%2F0Q2J%2FiYkqHZncg48UNgU6WJjWPujssyDWrdS1R%2Bcc0I8XERG4DiunvJQZBbck7eQtsMgdsC%2FTKSIBucSDTdo34V9T8SfNjkHTefXFaoEBZ%2BayYx2%2B1fD6hMPFa1LqZl5AP97cCZhPnhQngddglYxgpQrFuXm91DndZnF7m59AE2OGG99n5Q37B1jzS0zAZhr6wD4nG8wPjq0k%2BCLJQ9XTvgeauQpWvKBkwys7hygY6pgH%2BaShvrJDnoKOpfEZbnMOqK8H5cwXjlci7odr6eiVgJYwUq8dxp7oj25yodgwgqT%2FB0BrLjCxzAcBNJY1IK3agMVO0GKAGjHPpkOGhwT6Qp%2BqVxnjFG4v%2BeK5KPdqvBppDIXbBa%2BKccKMoa1DroVTDuj5cQEQdId0GnfYXxuTVPqQRg8fFVb0wgXWOZTcF%2B6U3wFOguWhF5Og2Sh0tqrGdA6xtpMco&X-Amz-Signature=d226ffdeb6e38379ff41a4013aaf468048341bfc4cdf6d5cdcef8a22b2ae9fda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBN4UBL5%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCID4C9O5HOmh3nGgJjWYcoBYpmh%2FZg9Xx9CBqdASPLSWMAiBkMoru5nGcrIHKE8gykeYLKoCX5ujw3rkbcK0K1XTogSr%2FAwgKEAAaDDYzNzQyMzE4MzgwNSIMc%2FxwWbtyKxgy0zCrKtwDmkdHnFn6pr45k8s9F6tsruTyFoCW%2FppLHgeSTUdzGGIodkHPSB8i6uZDO2i7iewKzZA8VvhgUA9e1kJc9PSAeynlW8wph2SnvATxONnDxr4KBEOKnQfm%2FJRKYLelOMT%2BPfO3v7wRvd5Cb6ThIIuAvp%2FDVM27GQqlEzAH1sW7JDSSEFvdzdCEzvsoY%2By%2F687YaI%2B1isAKwMpiLxvk6LB4oj2vyFahn%2FwIyuW%2BBD%2Fgh1O4ddPs3qMpe4an%2FYHSlKrgfS26eNtsE%2Bv6h2ADnvmEeqj3%2FmwSQsgzVo2th%2BD%2F4IjglSEKbi7ccIU%2Fw0I83crvMqWh5TQbz7L3SKavz%2BkEgF2poGICrNEJkMGmsdlMLAefSUD9vAdNWBqsadcL3YrunCksFPSyuFMUJf4iz2VZjiw6f%2F0Q2J%2FiYkqHZncg48UNgU6WJjWPujssyDWrdS1R%2Bcc0I8XERG4DiunvJQZBbck7eQtsMgdsC%2FTKSIBucSDTdo34V9T8SfNjkHTefXFaoEBZ%2BayYx2%2B1fD6hMPFa1LqZl5AP97cCZhPnhQngddglYxgpQrFuXm91DndZnF7m59AE2OGG99n5Q37B1jzS0zAZhr6wD4nG8wPjq0k%2BCLJQ9XTvgeauQpWvKBkwys7hygY6pgH%2BaShvrJDnoKOpfEZbnMOqK8H5cwXjlci7odr6eiVgJYwUq8dxp7oj25yodgwgqT%2FB0BrLjCxzAcBNJY1IK3agMVO0GKAGjHPpkOGhwT6Qp%2BqVxnjFG4v%2BeK5KPdqvBppDIXbBa%2BKccKMoa1DroVTDuj5cQEQdId0GnfYXxuTVPqQRg8fFVb0wgXWOZTcF%2B6U3wFOguWhF5Og2Sh0tqrGdA6xtpMco&X-Amz-Signature=4fd389d9b659bfa14c2bf03a7047fd508d008f0e3b80104594d25a19c853decb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBN4UBL5%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCID4C9O5HOmh3nGgJjWYcoBYpmh%2FZg9Xx9CBqdASPLSWMAiBkMoru5nGcrIHKE8gykeYLKoCX5ujw3rkbcK0K1XTogSr%2FAwgKEAAaDDYzNzQyMzE4MzgwNSIMc%2FxwWbtyKxgy0zCrKtwDmkdHnFn6pr45k8s9F6tsruTyFoCW%2FppLHgeSTUdzGGIodkHPSB8i6uZDO2i7iewKzZA8VvhgUA9e1kJc9PSAeynlW8wph2SnvATxONnDxr4KBEOKnQfm%2FJRKYLelOMT%2BPfO3v7wRvd5Cb6ThIIuAvp%2FDVM27GQqlEzAH1sW7JDSSEFvdzdCEzvsoY%2By%2F687YaI%2B1isAKwMpiLxvk6LB4oj2vyFahn%2FwIyuW%2BBD%2Fgh1O4ddPs3qMpe4an%2FYHSlKrgfS26eNtsE%2Bv6h2ADnvmEeqj3%2FmwSQsgzVo2th%2BD%2F4IjglSEKbi7ccIU%2Fw0I83crvMqWh5TQbz7L3SKavz%2BkEgF2poGICrNEJkMGmsdlMLAefSUD9vAdNWBqsadcL3YrunCksFPSyuFMUJf4iz2VZjiw6f%2F0Q2J%2FiYkqHZncg48UNgU6WJjWPujssyDWrdS1R%2Bcc0I8XERG4DiunvJQZBbck7eQtsMgdsC%2FTKSIBucSDTdo34V9T8SfNjkHTefXFaoEBZ%2BayYx2%2B1fD6hMPFa1LqZl5AP97cCZhPnhQngddglYxgpQrFuXm91DndZnF7m59AE2OGG99n5Q37B1jzS0zAZhr6wD4nG8wPjq0k%2BCLJQ9XTvgeauQpWvKBkwys7hygY6pgH%2BaShvrJDnoKOpfEZbnMOqK8H5cwXjlci7odr6eiVgJYwUq8dxp7oj25yodgwgqT%2FB0BrLjCxzAcBNJY1IK3agMVO0GKAGjHPpkOGhwT6Qp%2BqVxnjFG4v%2BeK5KPdqvBppDIXbBa%2BKccKMoa1DroVTDuj5cQEQdId0GnfYXxuTVPqQRg8fFVb0wgXWOZTcF%2B6U3wFOguWhF5Og2Sh0tqrGdA6xtpMco&X-Amz-Signature=fa898e8dfd4721022a117b5acb0cf1d4b8dcf2c52b0ee2f87099ef0c1bc8c1be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBN4UBL5%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCID4C9O5HOmh3nGgJjWYcoBYpmh%2FZg9Xx9CBqdASPLSWMAiBkMoru5nGcrIHKE8gykeYLKoCX5ujw3rkbcK0K1XTogSr%2FAwgKEAAaDDYzNzQyMzE4MzgwNSIMc%2FxwWbtyKxgy0zCrKtwDmkdHnFn6pr45k8s9F6tsruTyFoCW%2FppLHgeSTUdzGGIodkHPSB8i6uZDO2i7iewKzZA8VvhgUA9e1kJc9PSAeynlW8wph2SnvATxONnDxr4KBEOKnQfm%2FJRKYLelOMT%2BPfO3v7wRvd5Cb6ThIIuAvp%2FDVM27GQqlEzAH1sW7JDSSEFvdzdCEzvsoY%2By%2F687YaI%2B1isAKwMpiLxvk6LB4oj2vyFahn%2FwIyuW%2BBD%2Fgh1O4ddPs3qMpe4an%2FYHSlKrgfS26eNtsE%2Bv6h2ADnvmEeqj3%2FmwSQsgzVo2th%2BD%2F4IjglSEKbi7ccIU%2Fw0I83crvMqWh5TQbz7L3SKavz%2BkEgF2poGICrNEJkMGmsdlMLAefSUD9vAdNWBqsadcL3YrunCksFPSyuFMUJf4iz2VZjiw6f%2F0Q2J%2FiYkqHZncg48UNgU6WJjWPujssyDWrdS1R%2Bcc0I8XERG4DiunvJQZBbck7eQtsMgdsC%2FTKSIBucSDTdo34V9T8SfNjkHTefXFaoEBZ%2BayYx2%2B1fD6hMPFa1LqZl5AP97cCZhPnhQngddglYxgpQrFuXm91DndZnF7m59AE2OGG99n5Q37B1jzS0zAZhr6wD4nG8wPjq0k%2BCLJQ9XTvgeauQpWvKBkwys7hygY6pgH%2BaShvrJDnoKOpfEZbnMOqK8H5cwXjlci7odr6eiVgJYwUq8dxp7oj25yodgwgqT%2FB0BrLjCxzAcBNJY1IK3agMVO0GKAGjHPpkOGhwT6Qp%2BqVxnjFG4v%2BeK5KPdqvBppDIXbBa%2BKccKMoa1DroVTDuj5cQEQdId0GnfYXxuTVPqQRg8fFVb0wgXWOZTcF%2B6U3wFOguWhF5Og2Sh0tqrGdA6xtpMco&X-Amz-Signature=5f09eb13036b53e40bcd4c1c537bb5d2bd86663f3dd0d0903429e492fd9b16a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBN4UBL5%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCID4C9O5HOmh3nGgJjWYcoBYpmh%2FZg9Xx9CBqdASPLSWMAiBkMoru5nGcrIHKE8gykeYLKoCX5ujw3rkbcK0K1XTogSr%2FAwgKEAAaDDYzNzQyMzE4MzgwNSIMc%2FxwWbtyKxgy0zCrKtwDmkdHnFn6pr45k8s9F6tsruTyFoCW%2FppLHgeSTUdzGGIodkHPSB8i6uZDO2i7iewKzZA8VvhgUA9e1kJc9PSAeynlW8wph2SnvATxONnDxr4KBEOKnQfm%2FJRKYLelOMT%2BPfO3v7wRvd5Cb6ThIIuAvp%2FDVM27GQqlEzAH1sW7JDSSEFvdzdCEzvsoY%2By%2F687YaI%2B1isAKwMpiLxvk6LB4oj2vyFahn%2FwIyuW%2BBD%2Fgh1O4ddPs3qMpe4an%2FYHSlKrgfS26eNtsE%2Bv6h2ADnvmEeqj3%2FmwSQsgzVo2th%2BD%2F4IjglSEKbi7ccIU%2Fw0I83crvMqWh5TQbz7L3SKavz%2BkEgF2poGICrNEJkMGmsdlMLAefSUD9vAdNWBqsadcL3YrunCksFPSyuFMUJf4iz2VZjiw6f%2F0Q2J%2FiYkqHZncg48UNgU6WJjWPujssyDWrdS1R%2Bcc0I8XERG4DiunvJQZBbck7eQtsMgdsC%2FTKSIBucSDTdo34V9T8SfNjkHTefXFaoEBZ%2BayYx2%2B1fD6hMPFa1LqZl5AP97cCZhPnhQngddglYxgpQrFuXm91DndZnF7m59AE2OGG99n5Q37B1jzS0zAZhr6wD4nG8wPjq0k%2BCLJQ9XTvgeauQpWvKBkwys7hygY6pgH%2BaShvrJDnoKOpfEZbnMOqK8H5cwXjlci7odr6eiVgJYwUq8dxp7oj25yodgwgqT%2FB0BrLjCxzAcBNJY1IK3agMVO0GKAGjHPpkOGhwT6Qp%2BqVxnjFG4v%2BeK5KPdqvBppDIXbBa%2BKccKMoa1DroVTDuj5cQEQdId0GnfYXxuTVPqQRg8fFVb0wgXWOZTcF%2B6U3wFOguWhF5Og2Sh0tqrGdA6xtpMco&X-Amz-Signature=9a72cd09cff1fe207a2d5150d23ce5adddb8373bb91f624aca5d838cf54962cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBN4UBL5%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCID4C9O5HOmh3nGgJjWYcoBYpmh%2FZg9Xx9CBqdASPLSWMAiBkMoru5nGcrIHKE8gykeYLKoCX5ujw3rkbcK0K1XTogSr%2FAwgKEAAaDDYzNzQyMzE4MzgwNSIMc%2FxwWbtyKxgy0zCrKtwDmkdHnFn6pr45k8s9F6tsruTyFoCW%2FppLHgeSTUdzGGIodkHPSB8i6uZDO2i7iewKzZA8VvhgUA9e1kJc9PSAeynlW8wph2SnvATxONnDxr4KBEOKnQfm%2FJRKYLelOMT%2BPfO3v7wRvd5Cb6ThIIuAvp%2FDVM27GQqlEzAH1sW7JDSSEFvdzdCEzvsoY%2By%2F687YaI%2B1isAKwMpiLxvk6LB4oj2vyFahn%2FwIyuW%2BBD%2Fgh1O4ddPs3qMpe4an%2FYHSlKrgfS26eNtsE%2Bv6h2ADnvmEeqj3%2FmwSQsgzVo2th%2BD%2F4IjglSEKbi7ccIU%2Fw0I83crvMqWh5TQbz7L3SKavz%2BkEgF2poGICrNEJkMGmsdlMLAefSUD9vAdNWBqsadcL3YrunCksFPSyuFMUJf4iz2VZjiw6f%2F0Q2J%2FiYkqHZncg48UNgU6WJjWPujssyDWrdS1R%2Bcc0I8XERG4DiunvJQZBbck7eQtsMgdsC%2FTKSIBucSDTdo34V9T8SfNjkHTefXFaoEBZ%2BayYx2%2B1fD6hMPFa1LqZl5AP97cCZhPnhQngddglYxgpQrFuXm91DndZnF7m59AE2OGG99n5Q37B1jzS0zAZhr6wD4nG8wPjq0k%2BCLJQ9XTvgeauQpWvKBkwys7hygY6pgH%2BaShvrJDnoKOpfEZbnMOqK8H5cwXjlci7odr6eiVgJYwUq8dxp7oj25yodgwgqT%2FB0BrLjCxzAcBNJY1IK3agMVO0GKAGjHPpkOGhwT6Qp%2BqVxnjFG4v%2BeK5KPdqvBppDIXbBa%2BKccKMoa1DroVTDuj5cQEQdId0GnfYXxuTVPqQRg8fFVb0wgXWOZTcF%2B6U3wFOguWhF5Og2Sh0tqrGdA6xtpMco&X-Amz-Signature=c61a484738230c38c93bb1088993c78ef3db6206e632f3e52323d4773097585a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBN4UBL5%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCID4C9O5HOmh3nGgJjWYcoBYpmh%2FZg9Xx9CBqdASPLSWMAiBkMoru5nGcrIHKE8gykeYLKoCX5ujw3rkbcK0K1XTogSr%2FAwgKEAAaDDYzNzQyMzE4MzgwNSIMc%2FxwWbtyKxgy0zCrKtwDmkdHnFn6pr45k8s9F6tsruTyFoCW%2FppLHgeSTUdzGGIodkHPSB8i6uZDO2i7iewKzZA8VvhgUA9e1kJc9PSAeynlW8wph2SnvATxONnDxr4KBEOKnQfm%2FJRKYLelOMT%2BPfO3v7wRvd5Cb6ThIIuAvp%2FDVM27GQqlEzAH1sW7JDSSEFvdzdCEzvsoY%2By%2F687YaI%2B1isAKwMpiLxvk6LB4oj2vyFahn%2FwIyuW%2BBD%2Fgh1O4ddPs3qMpe4an%2FYHSlKrgfS26eNtsE%2Bv6h2ADnvmEeqj3%2FmwSQsgzVo2th%2BD%2F4IjglSEKbi7ccIU%2Fw0I83crvMqWh5TQbz7L3SKavz%2BkEgF2poGICrNEJkMGmsdlMLAefSUD9vAdNWBqsadcL3YrunCksFPSyuFMUJf4iz2VZjiw6f%2F0Q2J%2FiYkqHZncg48UNgU6WJjWPujssyDWrdS1R%2Bcc0I8XERG4DiunvJQZBbck7eQtsMgdsC%2FTKSIBucSDTdo34V9T8SfNjkHTefXFaoEBZ%2BayYx2%2B1fD6hMPFa1LqZl5AP97cCZhPnhQngddglYxgpQrFuXm91DndZnF7m59AE2OGG99n5Q37B1jzS0zAZhr6wD4nG8wPjq0k%2BCLJQ9XTvgeauQpWvKBkwys7hygY6pgH%2BaShvrJDnoKOpfEZbnMOqK8H5cwXjlci7odr6eiVgJYwUq8dxp7oj25yodgwgqT%2FB0BrLjCxzAcBNJY1IK3agMVO0GKAGjHPpkOGhwT6Qp%2BqVxnjFG4v%2BeK5KPdqvBppDIXbBa%2BKccKMoa1DroVTDuj5cQEQdId0GnfYXxuTVPqQRg8fFVb0wgXWOZTcF%2B6U3wFOguWhF5Og2Sh0tqrGdA6xtpMco&X-Amz-Signature=db424f0de940479619f77ec5c73fc1212ad395e142f28bfa2f81e5a0af2474db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBN4UBL5%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCID4C9O5HOmh3nGgJjWYcoBYpmh%2FZg9Xx9CBqdASPLSWMAiBkMoru5nGcrIHKE8gykeYLKoCX5ujw3rkbcK0K1XTogSr%2FAwgKEAAaDDYzNzQyMzE4MzgwNSIMc%2FxwWbtyKxgy0zCrKtwDmkdHnFn6pr45k8s9F6tsruTyFoCW%2FppLHgeSTUdzGGIodkHPSB8i6uZDO2i7iewKzZA8VvhgUA9e1kJc9PSAeynlW8wph2SnvATxONnDxr4KBEOKnQfm%2FJRKYLelOMT%2BPfO3v7wRvd5Cb6ThIIuAvp%2FDVM27GQqlEzAH1sW7JDSSEFvdzdCEzvsoY%2By%2F687YaI%2B1isAKwMpiLxvk6LB4oj2vyFahn%2FwIyuW%2BBD%2Fgh1O4ddPs3qMpe4an%2FYHSlKrgfS26eNtsE%2Bv6h2ADnvmEeqj3%2FmwSQsgzVo2th%2BD%2F4IjglSEKbi7ccIU%2Fw0I83crvMqWh5TQbz7L3SKavz%2BkEgF2poGICrNEJkMGmsdlMLAefSUD9vAdNWBqsadcL3YrunCksFPSyuFMUJf4iz2VZjiw6f%2F0Q2J%2FiYkqHZncg48UNgU6WJjWPujssyDWrdS1R%2Bcc0I8XERG4DiunvJQZBbck7eQtsMgdsC%2FTKSIBucSDTdo34V9T8SfNjkHTefXFaoEBZ%2BayYx2%2B1fD6hMPFa1LqZl5AP97cCZhPnhQngddglYxgpQrFuXm91DndZnF7m59AE2OGG99n5Q37B1jzS0zAZhr6wD4nG8wPjq0k%2BCLJQ9XTvgeauQpWvKBkwys7hygY6pgH%2BaShvrJDnoKOpfEZbnMOqK8H5cwXjlci7odr6eiVgJYwUq8dxp7oj25yodgwgqT%2FB0BrLjCxzAcBNJY1IK3agMVO0GKAGjHPpkOGhwT6Qp%2BqVxnjFG4v%2BeK5KPdqvBppDIXbBa%2BKccKMoa1DroVTDuj5cQEQdId0GnfYXxuTVPqQRg8fFVb0wgXWOZTcF%2B6U3wFOguWhF5Og2Sh0tqrGdA6xtpMco&X-Amz-Signature=4af587cde4a53e1ab3bffbb2ce397a60295a790d01742146ce395afc8a772d24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBN4UBL5%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCID4C9O5HOmh3nGgJjWYcoBYpmh%2FZg9Xx9CBqdASPLSWMAiBkMoru5nGcrIHKE8gykeYLKoCX5ujw3rkbcK0K1XTogSr%2FAwgKEAAaDDYzNzQyMzE4MzgwNSIMc%2FxwWbtyKxgy0zCrKtwDmkdHnFn6pr45k8s9F6tsruTyFoCW%2FppLHgeSTUdzGGIodkHPSB8i6uZDO2i7iewKzZA8VvhgUA9e1kJc9PSAeynlW8wph2SnvATxONnDxr4KBEOKnQfm%2FJRKYLelOMT%2BPfO3v7wRvd5Cb6ThIIuAvp%2FDVM27GQqlEzAH1sW7JDSSEFvdzdCEzvsoY%2By%2F687YaI%2B1isAKwMpiLxvk6LB4oj2vyFahn%2FwIyuW%2BBD%2Fgh1O4ddPs3qMpe4an%2FYHSlKrgfS26eNtsE%2Bv6h2ADnvmEeqj3%2FmwSQsgzVo2th%2BD%2F4IjglSEKbi7ccIU%2Fw0I83crvMqWh5TQbz7L3SKavz%2BkEgF2poGICrNEJkMGmsdlMLAefSUD9vAdNWBqsadcL3YrunCksFPSyuFMUJf4iz2VZjiw6f%2F0Q2J%2FiYkqHZncg48UNgU6WJjWPujssyDWrdS1R%2Bcc0I8XERG4DiunvJQZBbck7eQtsMgdsC%2FTKSIBucSDTdo34V9T8SfNjkHTefXFaoEBZ%2BayYx2%2B1fD6hMPFa1LqZl5AP97cCZhPnhQngddglYxgpQrFuXm91DndZnF7m59AE2OGG99n5Q37B1jzS0zAZhr6wD4nG8wPjq0k%2BCLJQ9XTvgeauQpWvKBkwys7hygY6pgH%2BaShvrJDnoKOpfEZbnMOqK8H5cwXjlci7odr6eiVgJYwUq8dxp7oj25yodgwgqT%2FB0BrLjCxzAcBNJY1IK3agMVO0GKAGjHPpkOGhwT6Qp%2BqVxnjFG4v%2BeK5KPdqvBppDIXbBa%2BKccKMoa1DroVTDuj5cQEQdId0GnfYXxuTVPqQRg8fFVb0wgXWOZTcF%2B6U3wFOguWhF5Og2Sh0tqrGdA6xtpMco&X-Amz-Signature=fa898e8dfd4721022a117b5acb0cf1d4b8dcf2c52b0ee2f87099ef0c1bc8c1be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
