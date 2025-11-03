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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K6SXQZU%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFnUAIhV2meYaoKJWSTvUJF2Xu%2FqTbORyzrRhwLadXXAiARxLi3c7GSx%2BuJewyogBmhdo3DZT6Eb3p6yM7YFcHZISr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMp6W0%2BIdosbrbzuBrKtwDIht3Qz7ZAm5oXzuNvlSKEgAWvQCqG1KGySeExFS%2Bj%2FfHDKQ5uamTRP54LMJHSLI8pm%2F2XESCg9atxpgVIvK2UI06jNBX%2B%2FMu%2FgSCMSVAsrm4oo20R6nKQgCzVTF%2FRUBcybXOcE3eJqJkbr1f1wAUgdeIl%2FcOO%2FSEWuNf6iufeDSpPFhYpAPygb%2Fy064WSAfyQk4igmvH5TCsPzB0nplDydDiCmS6ulDdzA7AKI%2ByToApuwyqAsZKhYBJkOuAXQeFgGrRtaHmjpDDnfOynvZe%2BTJ8Tm%2Fb4Mt6wRbgBArmNLNlQVioy4AhkLm4mzQQnITwJLXrh9FPDbTGoMs%2BJwJOoCamR%2F2f78oj4%2Fxd0FkltXxFwGzPMPLHdBXrNBA71bZSJ4sOAdDuGO3WIeCZjOCNfzPkom%2BeoNlYQypr%2FRltTe5nN2JoYkWaiiHcBu1lT1KqAPLiXEBR1tOssWhzzMBjPfPrEi9Qz940eyw%2FSdPbGUH2EHC62vFetd80QnJ%2BsnI1FGWVGWyeSpki57EurE4d2B0usDpGWvzrGagkFMFbCMAAGUxFSy8L54fR8LBuvtAaFvq9W6uKGD2I1nTW8A7U3d355tx3AJr7V1WAM77icbFFSZTLAHiLt1brUgMwnIqgyAY6pgEc2htTHMM8IR6C4twROItRfdBmdzEa1fuzQX3SyEybt5Uofph8AF751Ngy3D3VXe9odOj4QvNr15Q8%2BzPqPgi3AVZvq9GmzlSCMPJhUMuw7ni6cF4D1sW6Lmf%2FnOGA4flyCFBYOKzxbLxVBrJPpx23xQvPaHnwa5ELVkR2g831wnefZuuskn%2BoHXQ0Pn4Qsi4LtlGlMszAkz9SL24UdkUU9%2FI1ORcv&X-Amz-Signature=d7bb6e08d8a877733d9e3655ac8bc221b3eb1d7c6b6d403ee8a6e1bd3c8989b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7QUNNOE%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyoFfq42LYESuJm1%2FbBIyYcnoKm5ZRQ8lS020wLZ%2B0oAiBGUXvXwvm8r1R9BTSddNwAWoEG4XawCvle2PDZTn5mDCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMZ5k%2BjidC6qiy6XJFKtwDv8gAJsb8X7%2BprrE592Dvy92qrFFZnM%2BOyi1lT2TQ%2BlQgjHQ%2Fe89SUcU6r1tBCUKE9yFz8SkyNyQYq5LPfHIsZvU%2Bl%2FmnIWOlmMtRVzfFAIfSkX9VqebzK8yYMjZxCKrx2Lr8TgnYqPm2VAHvS173RQ010DVNclPbhRCaaQdKWi5PeY3eS5m9RAIMwHM93WYJXc%2FJPJS72og3wW2RmBrJOevofMlPNiI5w438NxdxIICAyFCWHFKexo7scMJ%2FwAwFocVnRu9f5bBxQKxEcITlLB8WKwuELVqtGasSTP0eoTEkRS9XDEHnINCLBWSITYb569SeapcMXWxvFFepRj6vTCTVnpIWe4bHkxSvJv2lJwl4%2BwZeTMpsi3vmIodwqHQ0IQ8DJ8PJ21sT8Pb3bq5E6dlsizP%2B4gOEkLvkEVZN98e1hSgUmh%2BGrFxyeTbs%2FsLr1lZ7l6Lrk1PntwQS5VRz25u7T%2BR90N8kOlWfqKf%2BrHKyiCBxE7i%2FM05Vbje0LsLv3OEp9%2B6NNHi2ZLf1SKQyJ5vcy9Z3w%2Bxokggsp4pmr5j5sMnt02eqtdtRx%2FxnFkabe7jKJjWl5sOGxncSh9hLHQMtw9YgKcDrKwGUBaaTo5fTCFgZoGgIhjjpYcwwnYigyAY6pgGcsRRZ1FGNDy4KfpzoUkyswJrFN4GAtA5lMah6JWqsnkD69ucrlIpPaSeiwHWM6J9SM%2F%2B0ob13whzChAIGY0aVXfwCWux%2Be4FLZJY2Y3jUadUrR2b1ewBpNV6TPoKuXYEJK2yEtvbOfDyUj3dd9DIgVviugtCmIxW0JTid7QWmxl%2F2zlwx3xnpbN%2FNA1GlquY%2FtNTHr2JZOgjCGqXFOl3AybKF8HnT&X-Amz-Signature=adbebb4b9a8eda7a369cc2233f021a945367c32ba6874338ab6585ddbf375244&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7QUNNOE%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyoFfq42LYESuJm1%2FbBIyYcnoKm5ZRQ8lS020wLZ%2B0oAiBGUXvXwvm8r1R9BTSddNwAWoEG4XawCvle2PDZTn5mDCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMZ5k%2BjidC6qiy6XJFKtwDv8gAJsb8X7%2BprrE592Dvy92qrFFZnM%2BOyi1lT2TQ%2BlQgjHQ%2Fe89SUcU6r1tBCUKE9yFz8SkyNyQYq5LPfHIsZvU%2Bl%2FmnIWOlmMtRVzfFAIfSkX9VqebzK8yYMjZxCKrx2Lr8TgnYqPm2VAHvS173RQ010DVNclPbhRCaaQdKWi5PeY3eS5m9RAIMwHM93WYJXc%2FJPJS72og3wW2RmBrJOevofMlPNiI5w438NxdxIICAyFCWHFKexo7scMJ%2FwAwFocVnRu9f5bBxQKxEcITlLB8WKwuELVqtGasSTP0eoTEkRS9XDEHnINCLBWSITYb569SeapcMXWxvFFepRj6vTCTVnpIWe4bHkxSvJv2lJwl4%2BwZeTMpsi3vmIodwqHQ0IQ8DJ8PJ21sT8Pb3bq5E6dlsizP%2B4gOEkLvkEVZN98e1hSgUmh%2BGrFxyeTbs%2FsLr1lZ7l6Lrk1PntwQS5VRz25u7T%2BR90N8kOlWfqKf%2BrHKyiCBxE7i%2FM05Vbje0LsLv3OEp9%2B6NNHi2ZLf1SKQyJ5vcy9Z3w%2Bxokggsp4pmr5j5sMnt02eqtdtRx%2FxnFkabe7jKJjWl5sOGxncSh9hLHQMtw9YgKcDrKwGUBaaTo5fTCFgZoGgIhjjpYcwwnYigyAY6pgGcsRRZ1FGNDy4KfpzoUkyswJrFN4GAtA5lMah6JWqsnkD69ucrlIpPaSeiwHWM6J9SM%2F%2B0ob13whzChAIGY0aVXfwCWux%2Be4FLZJY2Y3jUadUrR2b1ewBpNV6TPoKuXYEJK2yEtvbOfDyUj3dd9DIgVviugtCmIxW0JTid7QWmxl%2F2zlwx3xnpbN%2FNA1GlquY%2FtNTHr2JZOgjCGqXFOl3AybKF8HnT&X-Amz-Signature=3662ee4464bed0bce2a2a64eb027e83252a2e9200b41701844e4df045e27329c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7QUNNOE%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyoFfq42LYESuJm1%2FbBIyYcnoKm5ZRQ8lS020wLZ%2B0oAiBGUXvXwvm8r1R9BTSddNwAWoEG4XawCvle2PDZTn5mDCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMZ5k%2BjidC6qiy6XJFKtwDv8gAJsb8X7%2BprrE592Dvy92qrFFZnM%2BOyi1lT2TQ%2BlQgjHQ%2Fe89SUcU6r1tBCUKE9yFz8SkyNyQYq5LPfHIsZvU%2Bl%2FmnIWOlmMtRVzfFAIfSkX9VqebzK8yYMjZxCKrx2Lr8TgnYqPm2VAHvS173RQ010DVNclPbhRCaaQdKWi5PeY3eS5m9RAIMwHM93WYJXc%2FJPJS72og3wW2RmBrJOevofMlPNiI5w438NxdxIICAyFCWHFKexo7scMJ%2FwAwFocVnRu9f5bBxQKxEcITlLB8WKwuELVqtGasSTP0eoTEkRS9XDEHnINCLBWSITYb569SeapcMXWxvFFepRj6vTCTVnpIWe4bHkxSvJv2lJwl4%2BwZeTMpsi3vmIodwqHQ0IQ8DJ8PJ21sT8Pb3bq5E6dlsizP%2B4gOEkLvkEVZN98e1hSgUmh%2BGrFxyeTbs%2FsLr1lZ7l6Lrk1PntwQS5VRz25u7T%2BR90N8kOlWfqKf%2BrHKyiCBxE7i%2FM05Vbje0LsLv3OEp9%2B6NNHi2ZLf1SKQyJ5vcy9Z3w%2Bxokggsp4pmr5j5sMnt02eqtdtRx%2FxnFkabe7jKJjWl5sOGxncSh9hLHQMtw9YgKcDrKwGUBaaTo5fTCFgZoGgIhjjpYcwwnYigyAY6pgGcsRRZ1FGNDy4KfpzoUkyswJrFN4GAtA5lMah6JWqsnkD69ucrlIpPaSeiwHWM6J9SM%2F%2B0ob13whzChAIGY0aVXfwCWux%2Be4FLZJY2Y3jUadUrR2b1ewBpNV6TPoKuXYEJK2yEtvbOfDyUj3dd9DIgVviugtCmIxW0JTid7QWmxl%2F2zlwx3xnpbN%2FNA1GlquY%2FtNTHr2JZOgjCGqXFOl3AybKF8HnT&X-Amz-Signature=2df52a2194aae11cf5f33c3aa41d2124e3b5c654ca9648165d2404d4c0b95d24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7QUNNOE%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyoFfq42LYESuJm1%2FbBIyYcnoKm5ZRQ8lS020wLZ%2B0oAiBGUXvXwvm8r1R9BTSddNwAWoEG4XawCvle2PDZTn5mDCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMZ5k%2BjidC6qiy6XJFKtwDv8gAJsb8X7%2BprrE592Dvy92qrFFZnM%2BOyi1lT2TQ%2BlQgjHQ%2Fe89SUcU6r1tBCUKE9yFz8SkyNyQYq5LPfHIsZvU%2Bl%2FmnIWOlmMtRVzfFAIfSkX9VqebzK8yYMjZxCKrx2Lr8TgnYqPm2VAHvS173RQ010DVNclPbhRCaaQdKWi5PeY3eS5m9RAIMwHM93WYJXc%2FJPJS72og3wW2RmBrJOevofMlPNiI5w438NxdxIICAyFCWHFKexo7scMJ%2FwAwFocVnRu9f5bBxQKxEcITlLB8WKwuELVqtGasSTP0eoTEkRS9XDEHnINCLBWSITYb569SeapcMXWxvFFepRj6vTCTVnpIWe4bHkxSvJv2lJwl4%2BwZeTMpsi3vmIodwqHQ0IQ8DJ8PJ21sT8Pb3bq5E6dlsizP%2B4gOEkLvkEVZN98e1hSgUmh%2BGrFxyeTbs%2FsLr1lZ7l6Lrk1PntwQS5VRz25u7T%2BR90N8kOlWfqKf%2BrHKyiCBxE7i%2FM05Vbje0LsLv3OEp9%2B6NNHi2ZLf1SKQyJ5vcy9Z3w%2Bxokggsp4pmr5j5sMnt02eqtdtRx%2FxnFkabe7jKJjWl5sOGxncSh9hLHQMtw9YgKcDrKwGUBaaTo5fTCFgZoGgIhjjpYcwwnYigyAY6pgGcsRRZ1FGNDy4KfpzoUkyswJrFN4GAtA5lMah6JWqsnkD69ucrlIpPaSeiwHWM6J9SM%2F%2B0ob13whzChAIGY0aVXfwCWux%2Be4FLZJY2Y3jUadUrR2b1ewBpNV6TPoKuXYEJK2yEtvbOfDyUj3dd9DIgVviugtCmIxW0JTid7QWmxl%2F2zlwx3xnpbN%2FNA1GlquY%2FtNTHr2JZOgjCGqXFOl3AybKF8HnT&X-Amz-Signature=2ffedb61b929ac79b3ab529805075bc92bbea335705cee4ccaf6c107ffe97c1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7QUNNOE%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyoFfq42LYESuJm1%2FbBIyYcnoKm5ZRQ8lS020wLZ%2B0oAiBGUXvXwvm8r1R9BTSddNwAWoEG4XawCvle2PDZTn5mDCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMZ5k%2BjidC6qiy6XJFKtwDv8gAJsb8X7%2BprrE592Dvy92qrFFZnM%2BOyi1lT2TQ%2BlQgjHQ%2Fe89SUcU6r1tBCUKE9yFz8SkyNyQYq5LPfHIsZvU%2Bl%2FmnIWOlmMtRVzfFAIfSkX9VqebzK8yYMjZxCKrx2Lr8TgnYqPm2VAHvS173RQ010DVNclPbhRCaaQdKWi5PeY3eS5m9RAIMwHM93WYJXc%2FJPJS72og3wW2RmBrJOevofMlPNiI5w438NxdxIICAyFCWHFKexo7scMJ%2FwAwFocVnRu9f5bBxQKxEcITlLB8WKwuELVqtGasSTP0eoTEkRS9XDEHnINCLBWSITYb569SeapcMXWxvFFepRj6vTCTVnpIWe4bHkxSvJv2lJwl4%2BwZeTMpsi3vmIodwqHQ0IQ8DJ8PJ21sT8Pb3bq5E6dlsizP%2B4gOEkLvkEVZN98e1hSgUmh%2BGrFxyeTbs%2FsLr1lZ7l6Lrk1PntwQS5VRz25u7T%2BR90N8kOlWfqKf%2BrHKyiCBxE7i%2FM05Vbje0LsLv3OEp9%2B6NNHi2ZLf1SKQyJ5vcy9Z3w%2Bxokggsp4pmr5j5sMnt02eqtdtRx%2FxnFkabe7jKJjWl5sOGxncSh9hLHQMtw9YgKcDrKwGUBaaTo5fTCFgZoGgIhjjpYcwwnYigyAY6pgGcsRRZ1FGNDy4KfpzoUkyswJrFN4GAtA5lMah6JWqsnkD69ucrlIpPaSeiwHWM6J9SM%2F%2B0ob13whzChAIGY0aVXfwCWux%2Be4FLZJY2Y3jUadUrR2b1ewBpNV6TPoKuXYEJK2yEtvbOfDyUj3dd9DIgVviugtCmIxW0JTid7QWmxl%2F2zlwx3xnpbN%2FNA1GlquY%2FtNTHr2JZOgjCGqXFOl3AybKF8HnT&X-Amz-Signature=66adf89be793cb3533ac89c0ef743b0a2c2f732b26cff6a8d64cd55507cb3e3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7QUNNOE%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyoFfq42LYESuJm1%2FbBIyYcnoKm5ZRQ8lS020wLZ%2B0oAiBGUXvXwvm8r1R9BTSddNwAWoEG4XawCvle2PDZTn5mDCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMZ5k%2BjidC6qiy6XJFKtwDv8gAJsb8X7%2BprrE592Dvy92qrFFZnM%2BOyi1lT2TQ%2BlQgjHQ%2Fe89SUcU6r1tBCUKE9yFz8SkyNyQYq5LPfHIsZvU%2Bl%2FmnIWOlmMtRVzfFAIfSkX9VqebzK8yYMjZxCKrx2Lr8TgnYqPm2VAHvS173RQ010DVNclPbhRCaaQdKWi5PeY3eS5m9RAIMwHM93WYJXc%2FJPJS72og3wW2RmBrJOevofMlPNiI5w438NxdxIICAyFCWHFKexo7scMJ%2FwAwFocVnRu9f5bBxQKxEcITlLB8WKwuELVqtGasSTP0eoTEkRS9XDEHnINCLBWSITYb569SeapcMXWxvFFepRj6vTCTVnpIWe4bHkxSvJv2lJwl4%2BwZeTMpsi3vmIodwqHQ0IQ8DJ8PJ21sT8Pb3bq5E6dlsizP%2B4gOEkLvkEVZN98e1hSgUmh%2BGrFxyeTbs%2FsLr1lZ7l6Lrk1PntwQS5VRz25u7T%2BR90N8kOlWfqKf%2BrHKyiCBxE7i%2FM05Vbje0LsLv3OEp9%2B6NNHi2ZLf1SKQyJ5vcy9Z3w%2Bxokggsp4pmr5j5sMnt02eqtdtRx%2FxnFkabe7jKJjWl5sOGxncSh9hLHQMtw9YgKcDrKwGUBaaTo5fTCFgZoGgIhjjpYcwwnYigyAY6pgGcsRRZ1FGNDy4KfpzoUkyswJrFN4GAtA5lMah6JWqsnkD69ucrlIpPaSeiwHWM6J9SM%2F%2B0ob13whzChAIGY0aVXfwCWux%2Be4FLZJY2Y3jUadUrR2b1ewBpNV6TPoKuXYEJK2yEtvbOfDyUj3dd9DIgVviugtCmIxW0JTid7QWmxl%2F2zlwx3xnpbN%2FNA1GlquY%2FtNTHr2JZOgjCGqXFOl3AybKF8HnT&X-Amz-Signature=ed4fdce27682b3881b4f5c9ac21f14cb431e3a99bf8448fad1be42a073e40535&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7QUNNOE%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyoFfq42LYESuJm1%2FbBIyYcnoKm5ZRQ8lS020wLZ%2B0oAiBGUXvXwvm8r1R9BTSddNwAWoEG4XawCvle2PDZTn5mDCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMZ5k%2BjidC6qiy6XJFKtwDv8gAJsb8X7%2BprrE592Dvy92qrFFZnM%2BOyi1lT2TQ%2BlQgjHQ%2Fe89SUcU6r1tBCUKE9yFz8SkyNyQYq5LPfHIsZvU%2Bl%2FmnIWOlmMtRVzfFAIfSkX9VqebzK8yYMjZxCKrx2Lr8TgnYqPm2VAHvS173RQ010DVNclPbhRCaaQdKWi5PeY3eS5m9RAIMwHM93WYJXc%2FJPJS72og3wW2RmBrJOevofMlPNiI5w438NxdxIICAyFCWHFKexo7scMJ%2FwAwFocVnRu9f5bBxQKxEcITlLB8WKwuELVqtGasSTP0eoTEkRS9XDEHnINCLBWSITYb569SeapcMXWxvFFepRj6vTCTVnpIWe4bHkxSvJv2lJwl4%2BwZeTMpsi3vmIodwqHQ0IQ8DJ8PJ21sT8Pb3bq5E6dlsizP%2B4gOEkLvkEVZN98e1hSgUmh%2BGrFxyeTbs%2FsLr1lZ7l6Lrk1PntwQS5VRz25u7T%2BR90N8kOlWfqKf%2BrHKyiCBxE7i%2FM05Vbje0LsLv3OEp9%2B6NNHi2ZLf1SKQyJ5vcy9Z3w%2Bxokggsp4pmr5j5sMnt02eqtdtRx%2FxnFkabe7jKJjWl5sOGxncSh9hLHQMtw9YgKcDrKwGUBaaTo5fTCFgZoGgIhjjpYcwwnYigyAY6pgGcsRRZ1FGNDy4KfpzoUkyswJrFN4GAtA5lMah6JWqsnkD69ucrlIpPaSeiwHWM6J9SM%2F%2B0ob13whzChAIGY0aVXfwCWux%2Be4FLZJY2Y3jUadUrR2b1ewBpNV6TPoKuXYEJK2yEtvbOfDyUj3dd9DIgVviugtCmIxW0JTid7QWmxl%2F2zlwx3xnpbN%2FNA1GlquY%2FtNTHr2JZOgjCGqXFOl3AybKF8HnT&X-Amz-Signature=7fc39c6f2d3032de6e95442e6eee2960955490ef029b76cc6587da4328c395df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7QUNNOE%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyoFfq42LYESuJm1%2FbBIyYcnoKm5ZRQ8lS020wLZ%2B0oAiBGUXvXwvm8r1R9BTSddNwAWoEG4XawCvle2PDZTn5mDCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMZ5k%2BjidC6qiy6XJFKtwDv8gAJsb8X7%2BprrE592Dvy92qrFFZnM%2BOyi1lT2TQ%2BlQgjHQ%2Fe89SUcU6r1tBCUKE9yFz8SkyNyQYq5LPfHIsZvU%2Bl%2FmnIWOlmMtRVzfFAIfSkX9VqebzK8yYMjZxCKrx2Lr8TgnYqPm2VAHvS173RQ010DVNclPbhRCaaQdKWi5PeY3eS5m9RAIMwHM93WYJXc%2FJPJS72og3wW2RmBrJOevofMlPNiI5w438NxdxIICAyFCWHFKexo7scMJ%2FwAwFocVnRu9f5bBxQKxEcITlLB8WKwuELVqtGasSTP0eoTEkRS9XDEHnINCLBWSITYb569SeapcMXWxvFFepRj6vTCTVnpIWe4bHkxSvJv2lJwl4%2BwZeTMpsi3vmIodwqHQ0IQ8DJ8PJ21sT8Pb3bq5E6dlsizP%2B4gOEkLvkEVZN98e1hSgUmh%2BGrFxyeTbs%2FsLr1lZ7l6Lrk1PntwQS5VRz25u7T%2BR90N8kOlWfqKf%2BrHKyiCBxE7i%2FM05Vbje0LsLv3OEp9%2B6NNHi2ZLf1SKQyJ5vcy9Z3w%2Bxokggsp4pmr5j5sMnt02eqtdtRx%2FxnFkabe7jKJjWl5sOGxncSh9hLHQMtw9YgKcDrKwGUBaaTo5fTCFgZoGgIhjjpYcwwnYigyAY6pgGcsRRZ1FGNDy4KfpzoUkyswJrFN4GAtA5lMah6JWqsnkD69ucrlIpPaSeiwHWM6J9SM%2F%2B0ob13whzChAIGY0aVXfwCWux%2Be4FLZJY2Y3jUadUrR2b1ewBpNV6TPoKuXYEJK2yEtvbOfDyUj3dd9DIgVviugtCmIxW0JTid7QWmxl%2F2zlwx3xnpbN%2FNA1GlquY%2FtNTHr2JZOgjCGqXFOl3AybKF8HnT&X-Amz-Signature=f55b87b1831fcd9757dc813a0face53dd9128d059b39f3b448aa3b4f29130cc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7QUNNOE%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyoFfq42LYESuJm1%2FbBIyYcnoKm5ZRQ8lS020wLZ%2B0oAiBGUXvXwvm8r1R9BTSddNwAWoEG4XawCvle2PDZTn5mDCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMZ5k%2BjidC6qiy6XJFKtwDv8gAJsb8X7%2BprrE592Dvy92qrFFZnM%2BOyi1lT2TQ%2BlQgjHQ%2Fe89SUcU6r1tBCUKE9yFz8SkyNyQYq5LPfHIsZvU%2Bl%2FmnIWOlmMtRVzfFAIfSkX9VqebzK8yYMjZxCKrx2Lr8TgnYqPm2VAHvS173RQ010DVNclPbhRCaaQdKWi5PeY3eS5m9RAIMwHM93WYJXc%2FJPJS72og3wW2RmBrJOevofMlPNiI5w438NxdxIICAyFCWHFKexo7scMJ%2FwAwFocVnRu9f5bBxQKxEcITlLB8WKwuELVqtGasSTP0eoTEkRS9XDEHnINCLBWSITYb569SeapcMXWxvFFepRj6vTCTVnpIWe4bHkxSvJv2lJwl4%2BwZeTMpsi3vmIodwqHQ0IQ8DJ8PJ21sT8Pb3bq5E6dlsizP%2B4gOEkLvkEVZN98e1hSgUmh%2BGrFxyeTbs%2FsLr1lZ7l6Lrk1PntwQS5VRz25u7T%2BR90N8kOlWfqKf%2BrHKyiCBxE7i%2FM05Vbje0LsLv3OEp9%2B6NNHi2ZLf1SKQyJ5vcy9Z3w%2Bxokggsp4pmr5j5sMnt02eqtdtRx%2FxnFkabe7jKJjWl5sOGxncSh9hLHQMtw9YgKcDrKwGUBaaTo5fTCFgZoGgIhjjpYcwwnYigyAY6pgGcsRRZ1FGNDy4KfpzoUkyswJrFN4GAtA5lMah6JWqsnkD69ucrlIpPaSeiwHWM6J9SM%2F%2B0ob13whzChAIGY0aVXfwCWux%2Be4FLZJY2Y3jUadUrR2b1ewBpNV6TPoKuXYEJK2yEtvbOfDyUj3dd9DIgVviugtCmIxW0JTid7QWmxl%2F2zlwx3xnpbN%2FNA1GlquY%2FtNTHr2JZOgjCGqXFOl3AybKF8HnT&X-Amz-Signature=f99ee2bfe95f3ba30f0408547180132cad4cea055c469f21f85b85a3d0a9d87d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7QUNNOE%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyoFfq42LYESuJm1%2FbBIyYcnoKm5ZRQ8lS020wLZ%2B0oAiBGUXvXwvm8r1R9BTSddNwAWoEG4XawCvle2PDZTn5mDCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMZ5k%2BjidC6qiy6XJFKtwDv8gAJsb8X7%2BprrE592Dvy92qrFFZnM%2BOyi1lT2TQ%2BlQgjHQ%2Fe89SUcU6r1tBCUKE9yFz8SkyNyQYq5LPfHIsZvU%2Bl%2FmnIWOlmMtRVzfFAIfSkX9VqebzK8yYMjZxCKrx2Lr8TgnYqPm2VAHvS173RQ010DVNclPbhRCaaQdKWi5PeY3eS5m9RAIMwHM93WYJXc%2FJPJS72og3wW2RmBrJOevofMlPNiI5w438NxdxIICAyFCWHFKexo7scMJ%2FwAwFocVnRu9f5bBxQKxEcITlLB8WKwuELVqtGasSTP0eoTEkRS9XDEHnINCLBWSITYb569SeapcMXWxvFFepRj6vTCTVnpIWe4bHkxSvJv2lJwl4%2BwZeTMpsi3vmIodwqHQ0IQ8DJ8PJ21sT8Pb3bq5E6dlsizP%2B4gOEkLvkEVZN98e1hSgUmh%2BGrFxyeTbs%2FsLr1lZ7l6Lrk1PntwQS5VRz25u7T%2BR90N8kOlWfqKf%2BrHKyiCBxE7i%2FM05Vbje0LsLv3OEp9%2B6NNHi2ZLf1SKQyJ5vcy9Z3w%2Bxokggsp4pmr5j5sMnt02eqtdtRx%2FxnFkabe7jKJjWl5sOGxncSh9hLHQMtw9YgKcDrKwGUBaaTo5fTCFgZoGgIhjjpYcwwnYigyAY6pgGcsRRZ1FGNDy4KfpzoUkyswJrFN4GAtA5lMah6JWqsnkD69ucrlIpPaSeiwHWM6J9SM%2F%2B0ob13whzChAIGY0aVXfwCWux%2Be4FLZJY2Y3jUadUrR2b1ewBpNV6TPoKuXYEJK2yEtvbOfDyUj3dd9DIgVviugtCmIxW0JTid7QWmxl%2F2zlwx3xnpbN%2FNA1GlquY%2FtNTHr2JZOgjCGqXFOl3AybKF8HnT&X-Amz-Signature=2ffedb61b929ac79b3ab529805075bc92bbea335705cee4ccaf6c107ffe97c1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
