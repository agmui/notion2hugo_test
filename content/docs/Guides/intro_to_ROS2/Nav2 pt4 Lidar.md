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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCDNTDBC%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE0UH34mX0bCnMyz%2BE2PNg5CcdpGKXC7RmBDUZT0FmZxAiEA2zx3WYIgG7B8KF%2F1ZiUjwS%2BDtI5%2FAF23nJz%2FQo8oYWAqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwBcs9YCzYq1vsBGyrcA3zgtjAjtz3%2BFTrmOaMxRyKibWneAnRzaPiF6%2BOTGYp35m%2BGPm0ezKjZtqNSyVNgNgfPrBQ%2FAtXDFg78e4N2C0AuG%2B%2FD6em%2FGL2aSXKhJRoWXw0AeK8kGdr83%2F1j0iUyfdVw%2BoTFjYty488EyA0OUIADuQlHEaED67oBI1JAtmbhLEPYe0N%2BAsYzSAH9NdF9vFTrsbvwFOn9Vl4RC0YJFc034BZQd4WkZ%2Fr19yLW6L0RL%2FQCoVD0Ew48tUMZfRPRiTIGtdlilkEQh4frla1TMlg7ghq8ubkE1c7U6NvQNxcxt4YBJlGCEIb1gtFl%2FfOE1e6yxxOD1Igvr3X2TXIuMq4bSWrZIYot3bQ0%2BppIlx1%2Bx25m5LYlyXkdM5RknnqTyoO2QcxCoutwyR7sQXUMxh1KgEDBo2iMpOtnFCWhx1sHv5El5VRYcBgOVlNOIU0gsZ5OxLBsFQ8ixpBnZJuFUxCYUpFUomGuYVvj907icZF6N%2Bubritb0CEfOfcDPHAM6EJ%2BziyRC9cRZxLhvGXzYABDH%2Feh0KUYEYoFzty%2FH%2FhEO%2FIHOFw96bv%2FIGD4vi50hEwxmvd%2FGwcJ6R1C4mN%2BuW%2FRnkbwtDQwiw1qJszlPgysEZMbnYPliU%2Bi0G%2BTMOq%2FmNEGOqUBUgkXPTONi2a2R4267H47v390INeE%2B4QxAYa6dhXLb4o8ueZIv2Ub%2FWF4sYT0ufP3ALu%2BwrG4n2m1AbLbVU9ATs7swXwViHtPc0VEodkII%2By56idNsmDlb4ZMItPszfWB57MLV0HqhWvp5Q%2F1hx6jI1ALGvYbmC7Zqh29sSE%2B%2BwQhU3ejxBvw99WlWXGW5xEQZm50t%2Fii6erqD%2FFYNYXSM%2Bf2IyhT&X-Amz-Signature=0fb76065abea34db476ed7d3990a3a14f5d5a67fe133bf2109597a4cb88269e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI5YSHYZ%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0qeqSXnyM6qy7xmbMNd62gv82z8JcOGuS2o2D7jfc%2BQIgeCyd1JyTE0ravpSfKAvATzk%2FC7pwncRLpSGgbkjGBnUqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYkCpbrY7YT9ZdzQSrcA%2FOUC78gSQ4a9E6bE6EI5Ijq5Y21QTQmtN8DcTe5UNbnWl4SO06ADTaTF0w%2FvCPfjgp7qEH7%2F1WtDutp1f5RspvYP8A%2B%2FJA3RUh3h0rMMh32EAqzFb5eHVnjjYwyyKbbgvjgF8c6JScz7kVmNyyGoXqVIwNEXTfK4sB%2FvbevVDpV7XRe%2BowcmUHUU0Bi2AwuZwPPGbcDhnz7lQQEQSbN09M%2FUHt9bQu6qz9FGAz7I7aA9O3F6aOVG2py3fHsMFeV8gPLoroUlbVS%2FjYfVggudiNFS5IIZvWtxRNYC5xb6cCU21VFMMciVlfir4z5yPMcxMf4ppytMKdLijs6Ce49c4llh%2F%2Bp4DR24b6fdTpA67cffdbEgLdR7%2B6I9vfmytlPScSlmMwocCnP7GHM9YPdp%2Bvy0fhb%2FRYfnhRaQlD%2FMUWHjWz22QWH8PIIfyMgHndM0vNKfgUHM%2BrU267elCkV9fdCqBQav4hkxYVKHXR3kXpIicwa62Ifh9wSgN4GPH7Wk7l3KN5fwDwj3tuVBl3ndmKXGXiZc2j8T3rqMKWAVLmjtJej5QJ5C7LoXMk7O9j4O9OzCC%2BGe7%2Bxe8FFfQ1RFbRwGE8lwWHI2PDfpMh8yU5cTUGkWAmrRXVjTQIzMI3BmNEGOqUBJh3L36bJ4abaPV5pbDA91F4waznFM5Z760uFsNFvfQlnqF%2B%2Bqw9UZAI8xl%2FvNonpzTaFSBHr17Y7CzTiZ9OiSG%2BYoaUBp%2F5G5clzlry8vLOKR16t7TkQ%2FkFNlMjMdGJZTRououa5fZvGbC1MBmHv45827ORz91vDyVh79LyPJW3MfwvxfAhQZoZLYpPB88DFqqWCDBgoAv4W%2FwkHjpSl3dL%2FjLnP&X-Amz-Signature=7942c6f259b19cfa6efadd38e61300a5fd8aabe57bfabfde2661bcef95dfdfcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI5YSHYZ%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0qeqSXnyM6qy7xmbMNd62gv82z8JcOGuS2o2D7jfc%2BQIgeCyd1JyTE0ravpSfKAvATzk%2FC7pwncRLpSGgbkjGBnUqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYkCpbrY7YT9ZdzQSrcA%2FOUC78gSQ4a9E6bE6EI5Ijq5Y21QTQmtN8DcTe5UNbnWl4SO06ADTaTF0w%2FvCPfjgp7qEH7%2F1WtDutp1f5RspvYP8A%2B%2FJA3RUh3h0rMMh32EAqzFb5eHVnjjYwyyKbbgvjgF8c6JScz7kVmNyyGoXqVIwNEXTfK4sB%2FvbevVDpV7XRe%2BowcmUHUU0Bi2AwuZwPPGbcDhnz7lQQEQSbN09M%2FUHt9bQu6qz9FGAz7I7aA9O3F6aOVG2py3fHsMFeV8gPLoroUlbVS%2FjYfVggudiNFS5IIZvWtxRNYC5xb6cCU21VFMMciVlfir4z5yPMcxMf4ppytMKdLijs6Ce49c4llh%2F%2Bp4DR24b6fdTpA67cffdbEgLdR7%2B6I9vfmytlPScSlmMwocCnP7GHM9YPdp%2Bvy0fhb%2FRYfnhRaQlD%2FMUWHjWz22QWH8PIIfyMgHndM0vNKfgUHM%2BrU267elCkV9fdCqBQav4hkxYVKHXR3kXpIicwa62Ifh9wSgN4GPH7Wk7l3KN5fwDwj3tuVBl3ndmKXGXiZc2j8T3rqMKWAVLmjtJej5QJ5C7LoXMk7O9j4O9OzCC%2BGe7%2Bxe8FFfQ1RFbRwGE8lwWHI2PDfpMh8yU5cTUGkWAmrRXVjTQIzMI3BmNEGOqUBJh3L36bJ4abaPV5pbDA91F4waznFM5Z760uFsNFvfQlnqF%2B%2Bqw9UZAI8xl%2FvNonpzTaFSBHr17Y7CzTiZ9OiSG%2BYoaUBp%2F5G5clzlry8vLOKR16t7TkQ%2FkFNlMjMdGJZTRououa5fZvGbC1MBmHv45827ORz91vDyVh79LyPJW3MfwvxfAhQZoZLYpPB88DFqqWCDBgoAv4W%2FwkHjpSl3dL%2FjLnP&X-Amz-Signature=bc91671b6c99d76fd4a6912c140739597e5f7893522580fa194cf5e68555a311&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI5YSHYZ%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0qeqSXnyM6qy7xmbMNd62gv82z8JcOGuS2o2D7jfc%2BQIgeCyd1JyTE0ravpSfKAvATzk%2FC7pwncRLpSGgbkjGBnUqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYkCpbrY7YT9ZdzQSrcA%2FOUC78gSQ4a9E6bE6EI5Ijq5Y21QTQmtN8DcTe5UNbnWl4SO06ADTaTF0w%2FvCPfjgp7qEH7%2F1WtDutp1f5RspvYP8A%2B%2FJA3RUh3h0rMMh32EAqzFb5eHVnjjYwyyKbbgvjgF8c6JScz7kVmNyyGoXqVIwNEXTfK4sB%2FvbevVDpV7XRe%2BowcmUHUU0Bi2AwuZwPPGbcDhnz7lQQEQSbN09M%2FUHt9bQu6qz9FGAz7I7aA9O3F6aOVG2py3fHsMFeV8gPLoroUlbVS%2FjYfVggudiNFS5IIZvWtxRNYC5xb6cCU21VFMMciVlfir4z5yPMcxMf4ppytMKdLijs6Ce49c4llh%2F%2Bp4DR24b6fdTpA67cffdbEgLdR7%2B6I9vfmytlPScSlmMwocCnP7GHM9YPdp%2Bvy0fhb%2FRYfnhRaQlD%2FMUWHjWz22QWH8PIIfyMgHndM0vNKfgUHM%2BrU267elCkV9fdCqBQav4hkxYVKHXR3kXpIicwa62Ifh9wSgN4GPH7Wk7l3KN5fwDwj3tuVBl3ndmKXGXiZc2j8T3rqMKWAVLmjtJej5QJ5C7LoXMk7O9j4O9OzCC%2BGe7%2Bxe8FFfQ1RFbRwGE8lwWHI2PDfpMh8yU5cTUGkWAmrRXVjTQIzMI3BmNEGOqUBJh3L36bJ4abaPV5pbDA91F4waznFM5Z760uFsNFvfQlnqF%2B%2Bqw9UZAI8xl%2FvNonpzTaFSBHr17Y7CzTiZ9OiSG%2BYoaUBp%2F5G5clzlry8vLOKR16t7TkQ%2FkFNlMjMdGJZTRououa5fZvGbC1MBmHv45827ORz91vDyVh79LyPJW3MfwvxfAhQZoZLYpPB88DFqqWCDBgoAv4W%2FwkHjpSl3dL%2FjLnP&X-Amz-Signature=be1c7affd04dc8b082276ff4b3750bb57ff1fe817d8477b0576989744fe90098&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI5YSHYZ%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0qeqSXnyM6qy7xmbMNd62gv82z8JcOGuS2o2D7jfc%2BQIgeCyd1JyTE0ravpSfKAvATzk%2FC7pwncRLpSGgbkjGBnUqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYkCpbrY7YT9ZdzQSrcA%2FOUC78gSQ4a9E6bE6EI5Ijq5Y21QTQmtN8DcTe5UNbnWl4SO06ADTaTF0w%2FvCPfjgp7qEH7%2F1WtDutp1f5RspvYP8A%2B%2FJA3RUh3h0rMMh32EAqzFb5eHVnjjYwyyKbbgvjgF8c6JScz7kVmNyyGoXqVIwNEXTfK4sB%2FvbevVDpV7XRe%2BowcmUHUU0Bi2AwuZwPPGbcDhnz7lQQEQSbN09M%2FUHt9bQu6qz9FGAz7I7aA9O3F6aOVG2py3fHsMFeV8gPLoroUlbVS%2FjYfVggudiNFS5IIZvWtxRNYC5xb6cCU21VFMMciVlfir4z5yPMcxMf4ppytMKdLijs6Ce49c4llh%2F%2Bp4DR24b6fdTpA67cffdbEgLdR7%2B6I9vfmytlPScSlmMwocCnP7GHM9YPdp%2Bvy0fhb%2FRYfnhRaQlD%2FMUWHjWz22QWH8PIIfyMgHndM0vNKfgUHM%2BrU267elCkV9fdCqBQav4hkxYVKHXR3kXpIicwa62Ifh9wSgN4GPH7Wk7l3KN5fwDwj3tuVBl3ndmKXGXiZc2j8T3rqMKWAVLmjtJej5QJ5C7LoXMk7O9j4O9OzCC%2BGe7%2Bxe8FFfQ1RFbRwGE8lwWHI2PDfpMh8yU5cTUGkWAmrRXVjTQIzMI3BmNEGOqUBJh3L36bJ4abaPV5pbDA91F4waznFM5Z760uFsNFvfQlnqF%2B%2Bqw9UZAI8xl%2FvNonpzTaFSBHr17Y7CzTiZ9OiSG%2BYoaUBp%2F5G5clzlry8vLOKR16t7TkQ%2FkFNlMjMdGJZTRououa5fZvGbC1MBmHv45827ORz91vDyVh79LyPJW3MfwvxfAhQZoZLYpPB88DFqqWCDBgoAv4W%2FwkHjpSl3dL%2FjLnP&X-Amz-Signature=cf7a1315304fea23aa1e9a2cdb6a357d3fb9f87a8dd58e3f842e01ffbc4d2611&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI5YSHYZ%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0qeqSXnyM6qy7xmbMNd62gv82z8JcOGuS2o2D7jfc%2BQIgeCyd1JyTE0ravpSfKAvATzk%2FC7pwncRLpSGgbkjGBnUqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYkCpbrY7YT9ZdzQSrcA%2FOUC78gSQ4a9E6bE6EI5Ijq5Y21QTQmtN8DcTe5UNbnWl4SO06ADTaTF0w%2FvCPfjgp7qEH7%2F1WtDutp1f5RspvYP8A%2B%2FJA3RUh3h0rMMh32EAqzFb5eHVnjjYwyyKbbgvjgF8c6JScz7kVmNyyGoXqVIwNEXTfK4sB%2FvbevVDpV7XRe%2BowcmUHUU0Bi2AwuZwPPGbcDhnz7lQQEQSbN09M%2FUHt9bQu6qz9FGAz7I7aA9O3F6aOVG2py3fHsMFeV8gPLoroUlbVS%2FjYfVggudiNFS5IIZvWtxRNYC5xb6cCU21VFMMciVlfir4z5yPMcxMf4ppytMKdLijs6Ce49c4llh%2F%2Bp4DR24b6fdTpA67cffdbEgLdR7%2B6I9vfmytlPScSlmMwocCnP7GHM9YPdp%2Bvy0fhb%2FRYfnhRaQlD%2FMUWHjWz22QWH8PIIfyMgHndM0vNKfgUHM%2BrU267elCkV9fdCqBQav4hkxYVKHXR3kXpIicwa62Ifh9wSgN4GPH7Wk7l3KN5fwDwj3tuVBl3ndmKXGXiZc2j8T3rqMKWAVLmjtJej5QJ5C7LoXMk7O9j4O9OzCC%2BGe7%2Bxe8FFfQ1RFbRwGE8lwWHI2PDfpMh8yU5cTUGkWAmrRXVjTQIzMI3BmNEGOqUBJh3L36bJ4abaPV5pbDA91F4waznFM5Z760uFsNFvfQlnqF%2B%2Bqw9UZAI8xl%2FvNonpzTaFSBHr17Y7CzTiZ9OiSG%2BYoaUBp%2F5G5clzlry8vLOKR16t7TkQ%2FkFNlMjMdGJZTRououa5fZvGbC1MBmHv45827ORz91vDyVh79LyPJW3MfwvxfAhQZoZLYpPB88DFqqWCDBgoAv4W%2FwkHjpSl3dL%2FjLnP&X-Amz-Signature=155c2b9a65b51470930f2fd7e9d8b379b3700f1c2d2d91469ebe3c963aac49c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI5YSHYZ%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0qeqSXnyM6qy7xmbMNd62gv82z8JcOGuS2o2D7jfc%2BQIgeCyd1JyTE0ravpSfKAvATzk%2FC7pwncRLpSGgbkjGBnUqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYkCpbrY7YT9ZdzQSrcA%2FOUC78gSQ4a9E6bE6EI5Ijq5Y21QTQmtN8DcTe5UNbnWl4SO06ADTaTF0w%2FvCPfjgp7qEH7%2F1WtDutp1f5RspvYP8A%2B%2FJA3RUh3h0rMMh32EAqzFb5eHVnjjYwyyKbbgvjgF8c6JScz7kVmNyyGoXqVIwNEXTfK4sB%2FvbevVDpV7XRe%2BowcmUHUU0Bi2AwuZwPPGbcDhnz7lQQEQSbN09M%2FUHt9bQu6qz9FGAz7I7aA9O3F6aOVG2py3fHsMFeV8gPLoroUlbVS%2FjYfVggudiNFS5IIZvWtxRNYC5xb6cCU21VFMMciVlfir4z5yPMcxMf4ppytMKdLijs6Ce49c4llh%2F%2Bp4DR24b6fdTpA67cffdbEgLdR7%2B6I9vfmytlPScSlmMwocCnP7GHM9YPdp%2Bvy0fhb%2FRYfnhRaQlD%2FMUWHjWz22QWH8PIIfyMgHndM0vNKfgUHM%2BrU267elCkV9fdCqBQav4hkxYVKHXR3kXpIicwa62Ifh9wSgN4GPH7Wk7l3KN5fwDwj3tuVBl3ndmKXGXiZc2j8T3rqMKWAVLmjtJej5QJ5C7LoXMk7O9j4O9OzCC%2BGe7%2Bxe8FFfQ1RFbRwGE8lwWHI2PDfpMh8yU5cTUGkWAmrRXVjTQIzMI3BmNEGOqUBJh3L36bJ4abaPV5pbDA91F4waznFM5Z760uFsNFvfQlnqF%2B%2Bqw9UZAI8xl%2FvNonpzTaFSBHr17Y7CzTiZ9OiSG%2BYoaUBp%2F5G5clzlry8vLOKR16t7TkQ%2FkFNlMjMdGJZTRououa5fZvGbC1MBmHv45827ORz91vDyVh79LyPJW3MfwvxfAhQZoZLYpPB88DFqqWCDBgoAv4W%2FwkHjpSl3dL%2FjLnP&X-Amz-Signature=bbc8546e3d812649385bec1e619ff09191ff3ead1786c2af92f7319fbe1673d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI5YSHYZ%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0qeqSXnyM6qy7xmbMNd62gv82z8JcOGuS2o2D7jfc%2BQIgeCyd1JyTE0ravpSfKAvATzk%2FC7pwncRLpSGgbkjGBnUqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYkCpbrY7YT9ZdzQSrcA%2FOUC78gSQ4a9E6bE6EI5Ijq5Y21QTQmtN8DcTe5UNbnWl4SO06ADTaTF0w%2FvCPfjgp7qEH7%2F1WtDutp1f5RspvYP8A%2B%2FJA3RUh3h0rMMh32EAqzFb5eHVnjjYwyyKbbgvjgF8c6JScz7kVmNyyGoXqVIwNEXTfK4sB%2FvbevVDpV7XRe%2BowcmUHUU0Bi2AwuZwPPGbcDhnz7lQQEQSbN09M%2FUHt9bQu6qz9FGAz7I7aA9O3F6aOVG2py3fHsMFeV8gPLoroUlbVS%2FjYfVggudiNFS5IIZvWtxRNYC5xb6cCU21VFMMciVlfir4z5yPMcxMf4ppytMKdLijs6Ce49c4llh%2F%2Bp4DR24b6fdTpA67cffdbEgLdR7%2B6I9vfmytlPScSlmMwocCnP7GHM9YPdp%2Bvy0fhb%2FRYfnhRaQlD%2FMUWHjWz22QWH8PIIfyMgHndM0vNKfgUHM%2BrU267elCkV9fdCqBQav4hkxYVKHXR3kXpIicwa62Ifh9wSgN4GPH7Wk7l3KN5fwDwj3tuVBl3ndmKXGXiZc2j8T3rqMKWAVLmjtJej5QJ5C7LoXMk7O9j4O9OzCC%2BGe7%2Bxe8FFfQ1RFbRwGE8lwWHI2PDfpMh8yU5cTUGkWAmrRXVjTQIzMI3BmNEGOqUBJh3L36bJ4abaPV5pbDA91F4waznFM5Z760uFsNFvfQlnqF%2B%2Bqw9UZAI8xl%2FvNonpzTaFSBHr17Y7CzTiZ9OiSG%2BYoaUBp%2F5G5clzlry8vLOKR16t7TkQ%2FkFNlMjMdGJZTRououa5fZvGbC1MBmHv45827ORz91vDyVh79LyPJW3MfwvxfAhQZoZLYpPB88DFqqWCDBgoAv4W%2FwkHjpSl3dL%2FjLnP&X-Amz-Signature=9eee3d9dc76960757d0a4681b18d921b3b9e79ef039df23d15eb1f15ab595ed0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI5YSHYZ%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0qeqSXnyM6qy7xmbMNd62gv82z8JcOGuS2o2D7jfc%2BQIgeCyd1JyTE0ravpSfKAvATzk%2FC7pwncRLpSGgbkjGBnUqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYkCpbrY7YT9ZdzQSrcA%2FOUC78gSQ4a9E6bE6EI5Ijq5Y21QTQmtN8DcTe5UNbnWl4SO06ADTaTF0w%2FvCPfjgp7qEH7%2F1WtDutp1f5RspvYP8A%2B%2FJA3RUh3h0rMMh32EAqzFb5eHVnjjYwyyKbbgvjgF8c6JScz7kVmNyyGoXqVIwNEXTfK4sB%2FvbevVDpV7XRe%2BowcmUHUU0Bi2AwuZwPPGbcDhnz7lQQEQSbN09M%2FUHt9bQu6qz9FGAz7I7aA9O3F6aOVG2py3fHsMFeV8gPLoroUlbVS%2FjYfVggudiNFS5IIZvWtxRNYC5xb6cCU21VFMMciVlfir4z5yPMcxMf4ppytMKdLijs6Ce49c4llh%2F%2Bp4DR24b6fdTpA67cffdbEgLdR7%2B6I9vfmytlPScSlmMwocCnP7GHM9YPdp%2Bvy0fhb%2FRYfnhRaQlD%2FMUWHjWz22QWH8PIIfyMgHndM0vNKfgUHM%2BrU267elCkV9fdCqBQav4hkxYVKHXR3kXpIicwa62Ifh9wSgN4GPH7Wk7l3KN5fwDwj3tuVBl3ndmKXGXiZc2j8T3rqMKWAVLmjtJej5QJ5C7LoXMk7O9j4O9OzCC%2BGe7%2Bxe8FFfQ1RFbRwGE8lwWHI2PDfpMh8yU5cTUGkWAmrRXVjTQIzMI3BmNEGOqUBJh3L36bJ4abaPV5pbDA91F4waznFM5Z760uFsNFvfQlnqF%2B%2Bqw9UZAI8xl%2FvNonpzTaFSBHr17Y7CzTiZ9OiSG%2BYoaUBp%2F5G5clzlry8vLOKR16t7TkQ%2FkFNlMjMdGJZTRououa5fZvGbC1MBmHv45827ORz91vDyVh79LyPJW3MfwvxfAhQZoZLYpPB88DFqqWCDBgoAv4W%2FwkHjpSl3dL%2FjLnP&X-Amz-Signature=addf3066d951fbd2cabfe4fe9838037cda5577f3117617b70c570bf55884c89c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI5YSHYZ%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0qeqSXnyM6qy7xmbMNd62gv82z8JcOGuS2o2D7jfc%2BQIgeCyd1JyTE0ravpSfKAvATzk%2FC7pwncRLpSGgbkjGBnUqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYkCpbrY7YT9ZdzQSrcA%2FOUC78gSQ4a9E6bE6EI5Ijq5Y21QTQmtN8DcTe5UNbnWl4SO06ADTaTF0w%2FvCPfjgp7qEH7%2F1WtDutp1f5RspvYP8A%2B%2FJA3RUh3h0rMMh32EAqzFb5eHVnjjYwyyKbbgvjgF8c6JScz7kVmNyyGoXqVIwNEXTfK4sB%2FvbevVDpV7XRe%2BowcmUHUU0Bi2AwuZwPPGbcDhnz7lQQEQSbN09M%2FUHt9bQu6qz9FGAz7I7aA9O3F6aOVG2py3fHsMFeV8gPLoroUlbVS%2FjYfVggudiNFS5IIZvWtxRNYC5xb6cCU21VFMMciVlfir4z5yPMcxMf4ppytMKdLijs6Ce49c4llh%2F%2Bp4DR24b6fdTpA67cffdbEgLdR7%2B6I9vfmytlPScSlmMwocCnP7GHM9YPdp%2Bvy0fhb%2FRYfnhRaQlD%2FMUWHjWz22QWH8PIIfyMgHndM0vNKfgUHM%2BrU267elCkV9fdCqBQav4hkxYVKHXR3kXpIicwa62Ifh9wSgN4GPH7Wk7l3KN5fwDwj3tuVBl3ndmKXGXiZc2j8T3rqMKWAVLmjtJej5QJ5C7LoXMk7O9j4O9OzCC%2BGe7%2Bxe8FFfQ1RFbRwGE8lwWHI2PDfpMh8yU5cTUGkWAmrRXVjTQIzMI3BmNEGOqUBJh3L36bJ4abaPV5pbDA91F4waznFM5Z760uFsNFvfQlnqF%2B%2Bqw9UZAI8xl%2FvNonpzTaFSBHr17Y7CzTiZ9OiSG%2BYoaUBp%2F5G5clzlry8vLOKR16t7TkQ%2FkFNlMjMdGJZTRououa5fZvGbC1MBmHv45827ORz91vDyVh79LyPJW3MfwvxfAhQZoZLYpPB88DFqqWCDBgoAv4W%2FwkHjpSl3dL%2FjLnP&X-Amz-Signature=4992507b393dfd8979e8382ee893b82d6e985f017473a0aa68d6b48bce65150f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI5YSHYZ%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0qeqSXnyM6qy7xmbMNd62gv82z8JcOGuS2o2D7jfc%2BQIgeCyd1JyTE0ravpSfKAvATzk%2FC7pwncRLpSGgbkjGBnUqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYkCpbrY7YT9ZdzQSrcA%2FOUC78gSQ4a9E6bE6EI5Ijq5Y21QTQmtN8DcTe5UNbnWl4SO06ADTaTF0w%2FvCPfjgp7qEH7%2F1WtDutp1f5RspvYP8A%2B%2FJA3RUh3h0rMMh32EAqzFb5eHVnjjYwyyKbbgvjgF8c6JScz7kVmNyyGoXqVIwNEXTfK4sB%2FvbevVDpV7XRe%2BowcmUHUU0Bi2AwuZwPPGbcDhnz7lQQEQSbN09M%2FUHt9bQu6qz9FGAz7I7aA9O3F6aOVG2py3fHsMFeV8gPLoroUlbVS%2FjYfVggudiNFS5IIZvWtxRNYC5xb6cCU21VFMMciVlfir4z5yPMcxMf4ppytMKdLijs6Ce49c4llh%2F%2Bp4DR24b6fdTpA67cffdbEgLdR7%2B6I9vfmytlPScSlmMwocCnP7GHM9YPdp%2Bvy0fhb%2FRYfnhRaQlD%2FMUWHjWz22QWH8PIIfyMgHndM0vNKfgUHM%2BrU267elCkV9fdCqBQav4hkxYVKHXR3kXpIicwa62Ifh9wSgN4GPH7Wk7l3KN5fwDwj3tuVBl3ndmKXGXiZc2j8T3rqMKWAVLmjtJej5QJ5C7LoXMk7O9j4O9OzCC%2BGe7%2Bxe8FFfQ1RFbRwGE8lwWHI2PDfpMh8yU5cTUGkWAmrRXVjTQIzMI3BmNEGOqUBJh3L36bJ4abaPV5pbDA91F4waznFM5Z760uFsNFvfQlnqF%2B%2Bqw9UZAI8xl%2FvNonpzTaFSBHr17Y7CzTiZ9OiSG%2BYoaUBp%2F5G5clzlry8vLOKR16t7TkQ%2FkFNlMjMdGJZTRououa5fZvGbC1MBmHv45827ORz91vDyVh79LyPJW3MfwvxfAhQZoZLYpPB88DFqqWCDBgoAv4W%2FwkHjpSl3dL%2FjLnP&X-Amz-Signature=cf7a1315304fea23aa1e9a2cdb6a357d3fb9f87a8dd58e3f842e01ffbc4d2611&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
