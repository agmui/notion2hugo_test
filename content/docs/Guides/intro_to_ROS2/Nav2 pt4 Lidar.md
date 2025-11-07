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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLZBXWN2%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhMHzg3sxIMBlnQUwTJg20cy4ysRDVgb8k%2BHmfXvtdzAiEA4Pnd4I%2BTr2YX6u%2F6PGiaB0e0K%2FMXfbnvaX3ScnvDunQqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGVstAWdQyuba4TsaSrcA2TEmnRyxI0%2F%2F8fVuu07kclQabvxMlxLyCa5BaC3ImmlOK5BND5Z8R30dPQutqaPwXTMi10cjsUHJokDCijIpfqXPsBHSJc8EHlaP7yz4mJzOshEeHAgoBv91PI9817AjhWoGSdGa4NKzzeONpWXnTi%2FRJqf981s2y9MTmeJ4R65HN3Ofc%2Ff%2FXCFYOgmcTaWRx7Q1bwb66kNMYyJOPQGeBghA4ptLIzV1tn6S7rmejawf5a87GbVFXCpI7j0LCa2geo4pGC%2BLDFBnEmuxGNokbZM7%2FDf7Hcb8bx4SCpgzBSeiPudUSb07tzEs2N5009gU%2FHhCswwGfOtWtYavh8wYHzSB%2B8UWdaAjjncy9GoDHLLAqZe94EfIi83V3GYQtnoamG%2BTJghuvWE5ZJcCOBrauQ1cdg3O6LOhcK45R%2BmXj49rqXtXJflA7SQilnyxY75BGhYKe0s3XJ2O2ojUrGM4sLCDoR09Zs6%2BIiJaT8LYWrcDZDEKi0ofZ%2BWXa74CTMN4GPUbHI4US8%2BbjS9ZiXtPEpjx0065vrn%2FN9suxcklVTqfxwy3jVPSNdB8rrzgFRX214V0gQ%2BxW9Ylx58zeTleQl7UJsfquYuu1ZJKrs0hTT2XHek9jKKi%2BnS8iDyMPeWtcgGOqUBS88%2Fc3rlrEtkDaTw5axkUXCyzmIHccBXS5cBshO0w5C1rCNlUOom89fUwZWoUEf51NbtXXza78ru5ees0sMAJM8TwKTfOBTtweOdnW6n4WqNln5aHbMHQ95pXEbxMq%2FW9g818gJqzX7CXxct6EP49SpvYSlsTxVSiN1NGRbNM%2F30pdDEDhH2Q0LHVAAmRQi8z9tJ2x1UVHEEQOute9CbHjb14yog&X-Amz-Signature=b1ce9fc99b324c3080384a3e9d11f4075944411586882f9e0b2a1a348d761d23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E7UE4WY%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBqQu029zS4p1SzbMLMV1nsdbaOrV7mxH82K61qg6lqAiBr%2F6O4xlsVzAT37NGQdejJf2%2BG3aSQBqXmQOYUyVFK5SqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM17zH%2BUq%2B6afyVKcvKtwDMMmOSZhqTt713C2Ydnn%2B9bdGm9tmz7fS6QFclXZNghaKsvWLnXMh9zGuSvC8Wt4pRBe3BspXLjIq3wXTYf%2Fp%2BLixg9AZAj%2F54lDu6cKQ776Q7liJ4rqzTkTmayZIdliT3E%2Fqx3Mx%2BxYm1xYtd10Ky%2BeuR%2BwGch%2Buku6d8hV47oR9av1vyAvWgqYP79NrHtF1sAdXuBhkzcGvE%2BEtL7FvMr6InBOHRR5HvATw%2FEfDqB4AmDmvpVImDBV%2BLA2uOXOFElczaf3Dpnp%2FZfeASxHZURvWuVWxgpfBOCMy0Gkfnr7cDRyZhieU6%2FQF6Ij5rCbYrvQ1soYzvcHhkiwlxCD2z%2FzpOote1JpdUir9rE5aMx%2FviqVCHAgRvPhzZtzQ4oxu8AAJrnKU2GUrYquDDNd9ysesFvhE1mykMIQ61F2ff0HLYCxdmBxNT6mgq6QQ9xc32ItuzG15NxPbvnGw60nE4n9zSf8elMMA38knckkdys9UqC8cF8dPC8q3hKn9qHdbrLE%2F%2F1jySifJXmcVVBEWDw1mScFtIm%2Bbjtg1T6%2BHqoPlGacti0PUHtPf%2BdN1CLgPNr5IBr3gfHXeIslznPtoLXr1rpDBMNIQla8QCKcctulkHg1B%2Fz1%2BaaKZEBcwlZe1yAY6pgFcnzml89xBVEtbBovf8UIHSJxjXSIHsSxh8ECbGYRWG9G115ks3xiuy8e8D8hoizQgjFeLfUV2xaE39OyfMjMdBwA%2FRL9zZCwhVfWoJ55TqGCQ%2FBFtRw9j8bYFUxQvh3z2K%2BfiRYlvAWqd1Vg9t6XcG6ZXgwK%2BROU0HB%2B4Aa0BVADSAf5HrQXNzwkEi3vBW%2B3Y33ftx7XWpb6wF3Q4hLw3zyrqM2Mm&X-Amz-Signature=9d60374bcc0176f951913568f84c84feface1e217fea3e9fd7728c50ebc37c79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E7UE4WY%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBqQu029zS4p1SzbMLMV1nsdbaOrV7mxH82K61qg6lqAiBr%2F6O4xlsVzAT37NGQdejJf2%2BG3aSQBqXmQOYUyVFK5SqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM17zH%2BUq%2B6afyVKcvKtwDMMmOSZhqTt713C2Ydnn%2B9bdGm9tmz7fS6QFclXZNghaKsvWLnXMh9zGuSvC8Wt4pRBe3BspXLjIq3wXTYf%2Fp%2BLixg9AZAj%2F54lDu6cKQ776Q7liJ4rqzTkTmayZIdliT3E%2Fqx3Mx%2BxYm1xYtd10Ky%2BeuR%2BwGch%2Buku6d8hV47oR9av1vyAvWgqYP79NrHtF1sAdXuBhkzcGvE%2BEtL7FvMr6InBOHRR5HvATw%2FEfDqB4AmDmvpVImDBV%2BLA2uOXOFElczaf3Dpnp%2FZfeASxHZURvWuVWxgpfBOCMy0Gkfnr7cDRyZhieU6%2FQF6Ij5rCbYrvQ1soYzvcHhkiwlxCD2z%2FzpOote1JpdUir9rE5aMx%2FviqVCHAgRvPhzZtzQ4oxu8AAJrnKU2GUrYquDDNd9ysesFvhE1mykMIQ61F2ff0HLYCxdmBxNT6mgq6QQ9xc32ItuzG15NxPbvnGw60nE4n9zSf8elMMA38knckkdys9UqC8cF8dPC8q3hKn9qHdbrLE%2F%2F1jySifJXmcVVBEWDw1mScFtIm%2Bbjtg1T6%2BHqoPlGacti0PUHtPf%2BdN1CLgPNr5IBr3gfHXeIslznPtoLXr1rpDBMNIQla8QCKcctulkHg1B%2Fz1%2BaaKZEBcwlZe1yAY6pgFcnzml89xBVEtbBovf8UIHSJxjXSIHsSxh8ECbGYRWG9G115ks3xiuy8e8D8hoizQgjFeLfUV2xaE39OyfMjMdBwA%2FRL9zZCwhVfWoJ55TqGCQ%2FBFtRw9j8bYFUxQvh3z2K%2BfiRYlvAWqd1Vg9t6XcG6ZXgwK%2BROU0HB%2B4Aa0BVADSAf5HrQXNzwkEi3vBW%2B3Y33ftx7XWpb6wF3Q4hLw3zyrqM2Mm&X-Amz-Signature=e7fdea19c8a91d4c955888c3afd21d6bdfde5b31ce59842ac8d3ad87b1afc556&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E7UE4WY%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBqQu029zS4p1SzbMLMV1nsdbaOrV7mxH82K61qg6lqAiBr%2F6O4xlsVzAT37NGQdejJf2%2BG3aSQBqXmQOYUyVFK5SqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM17zH%2BUq%2B6afyVKcvKtwDMMmOSZhqTt713C2Ydnn%2B9bdGm9tmz7fS6QFclXZNghaKsvWLnXMh9zGuSvC8Wt4pRBe3BspXLjIq3wXTYf%2Fp%2BLixg9AZAj%2F54lDu6cKQ776Q7liJ4rqzTkTmayZIdliT3E%2Fqx3Mx%2BxYm1xYtd10Ky%2BeuR%2BwGch%2Buku6d8hV47oR9av1vyAvWgqYP79NrHtF1sAdXuBhkzcGvE%2BEtL7FvMr6InBOHRR5HvATw%2FEfDqB4AmDmvpVImDBV%2BLA2uOXOFElczaf3Dpnp%2FZfeASxHZURvWuVWxgpfBOCMy0Gkfnr7cDRyZhieU6%2FQF6Ij5rCbYrvQ1soYzvcHhkiwlxCD2z%2FzpOote1JpdUir9rE5aMx%2FviqVCHAgRvPhzZtzQ4oxu8AAJrnKU2GUrYquDDNd9ysesFvhE1mykMIQ61F2ff0HLYCxdmBxNT6mgq6QQ9xc32ItuzG15NxPbvnGw60nE4n9zSf8elMMA38knckkdys9UqC8cF8dPC8q3hKn9qHdbrLE%2F%2F1jySifJXmcVVBEWDw1mScFtIm%2Bbjtg1T6%2BHqoPlGacti0PUHtPf%2BdN1CLgPNr5IBr3gfHXeIslznPtoLXr1rpDBMNIQla8QCKcctulkHg1B%2Fz1%2BaaKZEBcwlZe1yAY6pgFcnzml89xBVEtbBovf8UIHSJxjXSIHsSxh8ECbGYRWG9G115ks3xiuy8e8D8hoizQgjFeLfUV2xaE39OyfMjMdBwA%2FRL9zZCwhVfWoJ55TqGCQ%2FBFtRw9j8bYFUxQvh3z2K%2BfiRYlvAWqd1Vg9t6XcG6ZXgwK%2BROU0HB%2B4Aa0BVADSAf5HrQXNzwkEi3vBW%2B3Y33ftx7XWpb6wF3Q4hLw3zyrqM2Mm&X-Amz-Signature=ea902f52225c1c951c24bbc1d166e1f953a4ebe839f72f77ad339f2cf6681b6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E7UE4WY%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBqQu029zS4p1SzbMLMV1nsdbaOrV7mxH82K61qg6lqAiBr%2F6O4xlsVzAT37NGQdejJf2%2BG3aSQBqXmQOYUyVFK5SqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM17zH%2BUq%2B6afyVKcvKtwDMMmOSZhqTt713C2Ydnn%2B9bdGm9tmz7fS6QFclXZNghaKsvWLnXMh9zGuSvC8Wt4pRBe3BspXLjIq3wXTYf%2Fp%2BLixg9AZAj%2F54lDu6cKQ776Q7liJ4rqzTkTmayZIdliT3E%2Fqx3Mx%2BxYm1xYtd10Ky%2BeuR%2BwGch%2Buku6d8hV47oR9av1vyAvWgqYP79NrHtF1sAdXuBhkzcGvE%2BEtL7FvMr6InBOHRR5HvATw%2FEfDqB4AmDmvpVImDBV%2BLA2uOXOFElczaf3Dpnp%2FZfeASxHZURvWuVWxgpfBOCMy0Gkfnr7cDRyZhieU6%2FQF6Ij5rCbYrvQ1soYzvcHhkiwlxCD2z%2FzpOote1JpdUir9rE5aMx%2FviqVCHAgRvPhzZtzQ4oxu8AAJrnKU2GUrYquDDNd9ysesFvhE1mykMIQ61F2ff0HLYCxdmBxNT6mgq6QQ9xc32ItuzG15NxPbvnGw60nE4n9zSf8elMMA38knckkdys9UqC8cF8dPC8q3hKn9qHdbrLE%2F%2F1jySifJXmcVVBEWDw1mScFtIm%2Bbjtg1T6%2BHqoPlGacti0PUHtPf%2BdN1CLgPNr5IBr3gfHXeIslznPtoLXr1rpDBMNIQla8QCKcctulkHg1B%2Fz1%2BaaKZEBcwlZe1yAY6pgFcnzml89xBVEtbBovf8UIHSJxjXSIHsSxh8ECbGYRWG9G115ks3xiuy8e8D8hoizQgjFeLfUV2xaE39OyfMjMdBwA%2FRL9zZCwhVfWoJ55TqGCQ%2FBFtRw9j8bYFUxQvh3z2K%2BfiRYlvAWqd1Vg9t6XcG6ZXgwK%2BROU0HB%2B4Aa0BVADSAf5HrQXNzwkEi3vBW%2B3Y33ftx7XWpb6wF3Q4hLw3zyrqM2Mm&X-Amz-Signature=fb2f89a78c9776feaabadafc6c513504531b987e751abdf2b8b735c31b68e519&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E7UE4WY%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBqQu029zS4p1SzbMLMV1nsdbaOrV7mxH82K61qg6lqAiBr%2F6O4xlsVzAT37NGQdejJf2%2BG3aSQBqXmQOYUyVFK5SqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM17zH%2BUq%2B6afyVKcvKtwDMMmOSZhqTt713C2Ydnn%2B9bdGm9tmz7fS6QFclXZNghaKsvWLnXMh9zGuSvC8Wt4pRBe3BspXLjIq3wXTYf%2Fp%2BLixg9AZAj%2F54lDu6cKQ776Q7liJ4rqzTkTmayZIdliT3E%2Fqx3Mx%2BxYm1xYtd10Ky%2BeuR%2BwGch%2Buku6d8hV47oR9av1vyAvWgqYP79NrHtF1sAdXuBhkzcGvE%2BEtL7FvMr6InBOHRR5HvATw%2FEfDqB4AmDmvpVImDBV%2BLA2uOXOFElczaf3Dpnp%2FZfeASxHZURvWuVWxgpfBOCMy0Gkfnr7cDRyZhieU6%2FQF6Ij5rCbYrvQ1soYzvcHhkiwlxCD2z%2FzpOote1JpdUir9rE5aMx%2FviqVCHAgRvPhzZtzQ4oxu8AAJrnKU2GUrYquDDNd9ysesFvhE1mykMIQ61F2ff0HLYCxdmBxNT6mgq6QQ9xc32ItuzG15NxPbvnGw60nE4n9zSf8elMMA38knckkdys9UqC8cF8dPC8q3hKn9qHdbrLE%2F%2F1jySifJXmcVVBEWDw1mScFtIm%2Bbjtg1T6%2BHqoPlGacti0PUHtPf%2BdN1CLgPNr5IBr3gfHXeIslznPtoLXr1rpDBMNIQla8QCKcctulkHg1B%2Fz1%2BaaKZEBcwlZe1yAY6pgFcnzml89xBVEtbBovf8UIHSJxjXSIHsSxh8ECbGYRWG9G115ks3xiuy8e8D8hoizQgjFeLfUV2xaE39OyfMjMdBwA%2FRL9zZCwhVfWoJ55TqGCQ%2FBFtRw9j8bYFUxQvh3z2K%2BfiRYlvAWqd1Vg9t6XcG6ZXgwK%2BROU0HB%2B4Aa0BVADSAf5HrQXNzwkEi3vBW%2B3Y33ftx7XWpb6wF3Q4hLw3zyrqM2Mm&X-Amz-Signature=1a800ec765663b173c8685b48b687ed96eb8b883240c6364ce7404957a540900&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E7UE4WY%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBqQu029zS4p1SzbMLMV1nsdbaOrV7mxH82K61qg6lqAiBr%2F6O4xlsVzAT37NGQdejJf2%2BG3aSQBqXmQOYUyVFK5SqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM17zH%2BUq%2B6afyVKcvKtwDMMmOSZhqTt713C2Ydnn%2B9bdGm9tmz7fS6QFclXZNghaKsvWLnXMh9zGuSvC8Wt4pRBe3BspXLjIq3wXTYf%2Fp%2BLixg9AZAj%2F54lDu6cKQ776Q7liJ4rqzTkTmayZIdliT3E%2Fqx3Mx%2BxYm1xYtd10Ky%2BeuR%2BwGch%2Buku6d8hV47oR9av1vyAvWgqYP79NrHtF1sAdXuBhkzcGvE%2BEtL7FvMr6InBOHRR5HvATw%2FEfDqB4AmDmvpVImDBV%2BLA2uOXOFElczaf3Dpnp%2FZfeASxHZURvWuVWxgpfBOCMy0Gkfnr7cDRyZhieU6%2FQF6Ij5rCbYrvQ1soYzvcHhkiwlxCD2z%2FzpOote1JpdUir9rE5aMx%2FviqVCHAgRvPhzZtzQ4oxu8AAJrnKU2GUrYquDDNd9ysesFvhE1mykMIQ61F2ff0HLYCxdmBxNT6mgq6QQ9xc32ItuzG15NxPbvnGw60nE4n9zSf8elMMA38knckkdys9UqC8cF8dPC8q3hKn9qHdbrLE%2F%2F1jySifJXmcVVBEWDw1mScFtIm%2Bbjtg1T6%2BHqoPlGacti0PUHtPf%2BdN1CLgPNr5IBr3gfHXeIslznPtoLXr1rpDBMNIQla8QCKcctulkHg1B%2Fz1%2BaaKZEBcwlZe1yAY6pgFcnzml89xBVEtbBovf8UIHSJxjXSIHsSxh8ECbGYRWG9G115ks3xiuy8e8D8hoizQgjFeLfUV2xaE39OyfMjMdBwA%2FRL9zZCwhVfWoJ55TqGCQ%2FBFtRw9j8bYFUxQvh3z2K%2BfiRYlvAWqd1Vg9t6XcG6ZXgwK%2BROU0HB%2B4Aa0BVADSAf5HrQXNzwkEi3vBW%2B3Y33ftx7XWpb6wF3Q4hLw3zyrqM2Mm&X-Amz-Signature=74361d3952e546992ef8f3d54a1264e22c6e282f5a2e571115d84a3d77cd673c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E7UE4WY%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBqQu029zS4p1SzbMLMV1nsdbaOrV7mxH82K61qg6lqAiBr%2F6O4xlsVzAT37NGQdejJf2%2BG3aSQBqXmQOYUyVFK5SqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM17zH%2BUq%2B6afyVKcvKtwDMMmOSZhqTt713C2Ydnn%2B9bdGm9tmz7fS6QFclXZNghaKsvWLnXMh9zGuSvC8Wt4pRBe3BspXLjIq3wXTYf%2Fp%2BLixg9AZAj%2F54lDu6cKQ776Q7liJ4rqzTkTmayZIdliT3E%2Fqx3Mx%2BxYm1xYtd10Ky%2BeuR%2BwGch%2Buku6d8hV47oR9av1vyAvWgqYP79NrHtF1sAdXuBhkzcGvE%2BEtL7FvMr6InBOHRR5HvATw%2FEfDqB4AmDmvpVImDBV%2BLA2uOXOFElczaf3Dpnp%2FZfeASxHZURvWuVWxgpfBOCMy0Gkfnr7cDRyZhieU6%2FQF6Ij5rCbYrvQ1soYzvcHhkiwlxCD2z%2FzpOote1JpdUir9rE5aMx%2FviqVCHAgRvPhzZtzQ4oxu8AAJrnKU2GUrYquDDNd9ysesFvhE1mykMIQ61F2ff0HLYCxdmBxNT6mgq6QQ9xc32ItuzG15NxPbvnGw60nE4n9zSf8elMMA38knckkdys9UqC8cF8dPC8q3hKn9qHdbrLE%2F%2F1jySifJXmcVVBEWDw1mScFtIm%2Bbjtg1T6%2BHqoPlGacti0PUHtPf%2BdN1CLgPNr5IBr3gfHXeIslznPtoLXr1rpDBMNIQla8QCKcctulkHg1B%2Fz1%2BaaKZEBcwlZe1yAY6pgFcnzml89xBVEtbBovf8UIHSJxjXSIHsSxh8ECbGYRWG9G115ks3xiuy8e8D8hoizQgjFeLfUV2xaE39OyfMjMdBwA%2FRL9zZCwhVfWoJ55TqGCQ%2FBFtRw9j8bYFUxQvh3z2K%2BfiRYlvAWqd1Vg9t6XcG6ZXgwK%2BROU0HB%2B4Aa0BVADSAf5HrQXNzwkEi3vBW%2B3Y33ftx7XWpb6wF3Q4hLw3zyrqM2Mm&X-Amz-Signature=c23e60744163eb98425482e13084ff48bc06057f6a192ad392be169c556adb34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E7UE4WY%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBqQu029zS4p1SzbMLMV1nsdbaOrV7mxH82K61qg6lqAiBr%2F6O4xlsVzAT37NGQdejJf2%2BG3aSQBqXmQOYUyVFK5SqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM17zH%2BUq%2B6afyVKcvKtwDMMmOSZhqTt713C2Ydnn%2B9bdGm9tmz7fS6QFclXZNghaKsvWLnXMh9zGuSvC8Wt4pRBe3BspXLjIq3wXTYf%2Fp%2BLixg9AZAj%2F54lDu6cKQ776Q7liJ4rqzTkTmayZIdliT3E%2Fqx3Mx%2BxYm1xYtd10Ky%2BeuR%2BwGch%2Buku6d8hV47oR9av1vyAvWgqYP79NrHtF1sAdXuBhkzcGvE%2BEtL7FvMr6InBOHRR5HvATw%2FEfDqB4AmDmvpVImDBV%2BLA2uOXOFElczaf3Dpnp%2FZfeASxHZURvWuVWxgpfBOCMy0Gkfnr7cDRyZhieU6%2FQF6Ij5rCbYrvQ1soYzvcHhkiwlxCD2z%2FzpOote1JpdUir9rE5aMx%2FviqVCHAgRvPhzZtzQ4oxu8AAJrnKU2GUrYquDDNd9ysesFvhE1mykMIQ61F2ff0HLYCxdmBxNT6mgq6QQ9xc32ItuzG15NxPbvnGw60nE4n9zSf8elMMA38knckkdys9UqC8cF8dPC8q3hKn9qHdbrLE%2F%2F1jySifJXmcVVBEWDw1mScFtIm%2Bbjtg1T6%2BHqoPlGacti0PUHtPf%2BdN1CLgPNr5IBr3gfHXeIslznPtoLXr1rpDBMNIQla8QCKcctulkHg1B%2Fz1%2BaaKZEBcwlZe1yAY6pgFcnzml89xBVEtbBovf8UIHSJxjXSIHsSxh8ECbGYRWG9G115ks3xiuy8e8D8hoizQgjFeLfUV2xaE39OyfMjMdBwA%2FRL9zZCwhVfWoJ55TqGCQ%2FBFtRw9j8bYFUxQvh3z2K%2BfiRYlvAWqd1Vg9t6XcG6ZXgwK%2BROU0HB%2B4Aa0BVADSAf5HrQXNzwkEi3vBW%2B3Y33ftx7XWpb6wF3Q4hLw3zyrqM2Mm&X-Amz-Signature=2adf0f1df6b44f9ac7f074163d4cbed56a3b7c7e05b2fba5f027010da5766c45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E7UE4WY%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBqQu029zS4p1SzbMLMV1nsdbaOrV7mxH82K61qg6lqAiBr%2F6O4xlsVzAT37NGQdejJf2%2BG3aSQBqXmQOYUyVFK5SqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM17zH%2BUq%2B6afyVKcvKtwDMMmOSZhqTt713C2Ydnn%2B9bdGm9tmz7fS6QFclXZNghaKsvWLnXMh9zGuSvC8Wt4pRBe3BspXLjIq3wXTYf%2Fp%2BLixg9AZAj%2F54lDu6cKQ776Q7liJ4rqzTkTmayZIdliT3E%2Fqx3Mx%2BxYm1xYtd10Ky%2BeuR%2BwGch%2Buku6d8hV47oR9av1vyAvWgqYP79NrHtF1sAdXuBhkzcGvE%2BEtL7FvMr6InBOHRR5HvATw%2FEfDqB4AmDmvpVImDBV%2BLA2uOXOFElczaf3Dpnp%2FZfeASxHZURvWuVWxgpfBOCMy0Gkfnr7cDRyZhieU6%2FQF6Ij5rCbYrvQ1soYzvcHhkiwlxCD2z%2FzpOote1JpdUir9rE5aMx%2FviqVCHAgRvPhzZtzQ4oxu8AAJrnKU2GUrYquDDNd9ysesFvhE1mykMIQ61F2ff0HLYCxdmBxNT6mgq6QQ9xc32ItuzG15NxPbvnGw60nE4n9zSf8elMMA38knckkdys9UqC8cF8dPC8q3hKn9qHdbrLE%2F%2F1jySifJXmcVVBEWDw1mScFtIm%2Bbjtg1T6%2BHqoPlGacti0PUHtPf%2BdN1CLgPNr5IBr3gfHXeIslznPtoLXr1rpDBMNIQla8QCKcctulkHg1B%2Fz1%2BaaKZEBcwlZe1yAY6pgFcnzml89xBVEtbBovf8UIHSJxjXSIHsSxh8ECbGYRWG9G115ks3xiuy8e8D8hoizQgjFeLfUV2xaE39OyfMjMdBwA%2FRL9zZCwhVfWoJ55TqGCQ%2FBFtRw9j8bYFUxQvh3z2K%2BfiRYlvAWqd1Vg9t6XcG6ZXgwK%2BROU0HB%2B4Aa0BVADSAf5HrQXNzwkEi3vBW%2B3Y33ftx7XWpb6wF3Q4hLw3zyrqM2Mm&X-Amz-Signature=12f98a5dffc8985d456ac06d5fc3fa320ea6ec7c15db770df0f4c28d7d8a502f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E7UE4WY%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBqQu029zS4p1SzbMLMV1nsdbaOrV7mxH82K61qg6lqAiBr%2F6O4xlsVzAT37NGQdejJf2%2BG3aSQBqXmQOYUyVFK5SqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM17zH%2BUq%2B6afyVKcvKtwDMMmOSZhqTt713C2Ydnn%2B9bdGm9tmz7fS6QFclXZNghaKsvWLnXMh9zGuSvC8Wt4pRBe3BspXLjIq3wXTYf%2Fp%2BLixg9AZAj%2F54lDu6cKQ776Q7liJ4rqzTkTmayZIdliT3E%2Fqx3Mx%2BxYm1xYtd10Ky%2BeuR%2BwGch%2Buku6d8hV47oR9av1vyAvWgqYP79NrHtF1sAdXuBhkzcGvE%2BEtL7FvMr6InBOHRR5HvATw%2FEfDqB4AmDmvpVImDBV%2BLA2uOXOFElczaf3Dpnp%2FZfeASxHZURvWuVWxgpfBOCMy0Gkfnr7cDRyZhieU6%2FQF6Ij5rCbYrvQ1soYzvcHhkiwlxCD2z%2FzpOote1JpdUir9rE5aMx%2FviqVCHAgRvPhzZtzQ4oxu8AAJrnKU2GUrYquDDNd9ysesFvhE1mykMIQ61F2ff0HLYCxdmBxNT6mgq6QQ9xc32ItuzG15NxPbvnGw60nE4n9zSf8elMMA38knckkdys9UqC8cF8dPC8q3hKn9qHdbrLE%2F%2F1jySifJXmcVVBEWDw1mScFtIm%2Bbjtg1T6%2BHqoPlGacti0PUHtPf%2BdN1CLgPNr5IBr3gfHXeIslznPtoLXr1rpDBMNIQla8QCKcctulkHg1B%2Fz1%2BaaKZEBcwlZe1yAY6pgFcnzml89xBVEtbBovf8UIHSJxjXSIHsSxh8ECbGYRWG9G115ks3xiuy8e8D8hoizQgjFeLfUV2xaE39OyfMjMdBwA%2FRL9zZCwhVfWoJ55TqGCQ%2FBFtRw9j8bYFUxQvh3z2K%2BfiRYlvAWqd1Vg9t6XcG6ZXgwK%2BROU0HB%2B4Aa0BVADSAf5HrQXNzwkEi3vBW%2B3Y33ftx7XWpb6wF3Q4hLw3zyrqM2Mm&X-Amz-Signature=fb2f89a78c9776feaabadafc6c513504531b987e751abdf2b8b735c31b68e519&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
