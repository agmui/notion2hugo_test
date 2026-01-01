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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH6ESS77%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCDYhfw5RaQ1wzU5%2Bf8Q%2BqXQqx2ViWW01Et8WZPLJTMWAIgCJZ3%2FwbI6dDxF3m02jfP8cy9E01%2FLG0adDqsQOu8GN8qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVlbGbc06%2FVQHEHzyrcA%2BIPm1qfrIr62FMhXWy2qTLNXLuBiuXhmdyEqcjdZT69k3WOE9NKnEy8fqFz8jWXpTteQAPZqWjA%2BDqot%2BM8HE6FL8SLR2k%2FEU519UFbNXNrGSzVeR69gU488eY%2BA12HG1DF4gEGx6eCbpgFIL9%2Bo2oLgmYpRl8apLW%2B2rsSH8fTpKP%2F4VJry6TLErQrouZArjcZaClCa4pjApa9SCRVq3oGFBkCniEZAU%2F0L7CSsrmQ5ACeObF2uxqZx32ppsX3JVnomfyqfOar%2BlL8PLwz15pebPjLfrKLtPvFZPLJ2MqvUCZqUNwZUcwzptm0IJ7O%2F3wY0hNOYGMz4pKG9a12QRiDgBCdAdAm99Hr5cgzCuVds7l4KhhTyjGLV8MRDwe6SUeKhrYVNF01Jp%2FMXac6zk2inggAT2RV8L68sN3zLAj3Cj3j1x7FAkMfDVYNbggdeB808sGzofa3ExmgXi1AUF4sDMx9NqpUcUHrKTr0vVxErywHdrHcJunFkpDmJzWe3wX%2BVX0YbCFg4KFkJTRBBnxquc46PwvVgpYoi3%2BFXFGSxID0CRS1PgFKxFZdFC%2BH5C%2BpeQwPWGwq8v0W6c9q7v4ylBr34C6xCnqMi7BuzwI4Jfdrn0wed%2BbvJ945MLyh18oGOqUBS0NJVFh3%2FgRcXRAuQNhyxmbrTcgbyZb0jc22Xyo%2FXeQHQLRkLb8vxFUFN1XCWZwncJI8LLGEh9t7%2BZPbYrx59v%2FqdH8HWQ%2FP%2B4%2FZAcAvgqAhyuhrqsjbE3NxFNBq%2Fgh2BWCB6VagYj%2B4pxKUgSghP%2B3CEFASQoUCn5eXC36wJw6efZNnjGaaxRBmW7HfCepS09rnHtwcmKH021OWdGQbVnTqT9EH&X-Amz-Signature=9fdca2fc6f68250db7c0461eeb0fb3430650710c76c03d9190874e2efa0a457e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNLSNBAO%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDvR8I7XFmtRpUyo3ZOgMIanD14G8ZC%2FXZTcYLGOzCp4QIhAMy1cS9vcUQhhGUMKHNmtnOXYWvi9bWZeIBJseC38IXQKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBAMrOz1A1Md8Lj2Mq3AP7CxlCWQpBwwOZ1f9cDSG8MbGTMvBcPSQ18hEWMqHI%2BKxHO0lB8W0f90d8dO2OJP9mwJacLURwb8Q3gpWwe0ihCnfrcFXk%2FbEBlf7p%2FPguMtvFbBO6vPreCETRvLz%2Fg1DxWSjs%2BeRgqVK%2BkN1c%2FbtKhFNT2%2Fopaf9KMeRgjB1Ja7s9SbYAwP7u%2By9CDNrv%2F1iHjYhcSroh5GSiwqk7Fk1vsVQKF0BQzpTg%2BVsoUZETYO62Q29UnHPoLc5WC0MrY5I6B4%2FWSH%2FtEBv9SyS%2BIqKJEfP1jSyB3Oy%2BK8Ci%2BuVl3fw%2FBXgUWs%2B9aGjjMPgdzGoH%2Fn3RLrV7AO0o3i%2Frl6c%2FyE5qUN53qFlqHl%2By9TqZmoW5EM6u3fVilLa9VtvFq0rO7WtYYxmQYp%2FvRI%2FUGc87s3gq4MuZaYB%2B2eslFMV8aD6KZ2orLyykid14aJI57e4YJLX2HGVE72zOhghfUimz9foSl%2BNuW0NSzBvXbJ%2FkJuvFOxmBJ%2BtDY6hwTJ1BtXLz2MPynId%2FfT4hRuoOgeEUA5VGhZlKu7CTHXNPtk81nUei2ZQniJvMPsBf5pHPCBuQ82ce%2BtFoVhjXOL%2FzJkcEH08yl8BO%2FekUjioy2HJuZBphyrZ8hw%2B8B7zSMDC9ptfKBjqkAVmeEyJxgEQ8r4JDZAlOi43nMr99ly52blmGc3RuWi3SvEdQRpqA4kbrPFmlEYGxdWYBrl672v3XkpEHyIsTQo8O%2Ff%2BhpQhQ3uyjQqyzfh7PLny7TxFDhosQoe3GaXsAgCFSzt1KbMR1pKaP1n30Roxj5pqWFYi3Q8PN1dRqoJoZKz%2BN7BeAYf%2Fwy5UnIK4e82olrTBC1beBErJfr%2BHouPf5r9pS&X-Amz-Signature=a9577ade533ed618e8a871dba041a9da70163ec08f7d094b01db2b2aece5b142&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNLSNBAO%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDvR8I7XFmtRpUyo3ZOgMIanD14G8ZC%2FXZTcYLGOzCp4QIhAMy1cS9vcUQhhGUMKHNmtnOXYWvi9bWZeIBJseC38IXQKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBAMrOz1A1Md8Lj2Mq3AP7CxlCWQpBwwOZ1f9cDSG8MbGTMvBcPSQ18hEWMqHI%2BKxHO0lB8W0f90d8dO2OJP9mwJacLURwb8Q3gpWwe0ihCnfrcFXk%2FbEBlf7p%2FPguMtvFbBO6vPreCETRvLz%2Fg1DxWSjs%2BeRgqVK%2BkN1c%2FbtKhFNT2%2Fopaf9KMeRgjB1Ja7s9SbYAwP7u%2By9CDNrv%2F1iHjYhcSroh5GSiwqk7Fk1vsVQKF0BQzpTg%2BVsoUZETYO62Q29UnHPoLc5WC0MrY5I6B4%2FWSH%2FtEBv9SyS%2BIqKJEfP1jSyB3Oy%2BK8Ci%2BuVl3fw%2FBXgUWs%2B9aGjjMPgdzGoH%2Fn3RLrV7AO0o3i%2Frl6c%2FyE5qUN53qFlqHl%2By9TqZmoW5EM6u3fVilLa9VtvFq0rO7WtYYxmQYp%2FvRI%2FUGc87s3gq4MuZaYB%2B2eslFMV8aD6KZ2orLyykid14aJI57e4YJLX2HGVE72zOhghfUimz9foSl%2BNuW0NSzBvXbJ%2FkJuvFOxmBJ%2BtDY6hwTJ1BtXLz2MPynId%2FfT4hRuoOgeEUA5VGhZlKu7CTHXNPtk81nUei2ZQniJvMPsBf5pHPCBuQ82ce%2BtFoVhjXOL%2FzJkcEH08yl8BO%2FekUjioy2HJuZBphyrZ8hw%2B8B7zSMDC9ptfKBjqkAVmeEyJxgEQ8r4JDZAlOi43nMr99ly52blmGc3RuWi3SvEdQRpqA4kbrPFmlEYGxdWYBrl672v3XkpEHyIsTQo8O%2Ff%2BhpQhQ3uyjQqyzfh7PLny7TxFDhosQoe3GaXsAgCFSzt1KbMR1pKaP1n30Roxj5pqWFYi3Q8PN1dRqoJoZKz%2BN7BeAYf%2Fwy5UnIK4e82olrTBC1beBErJfr%2BHouPf5r9pS&X-Amz-Signature=cba0247b22a49aedf38884f70312624b5800077b4256cb6a15c699bd8101d57a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNLSNBAO%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDvR8I7XFmtRpUyo3ZOgMIanD14G8ZC%2FXZTcYLGOzCp4QIhAMy1cS9vcUQhhGUMKHNmtnOXYWvi9bWZeIBJseC38IXQKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBAMrOz1A1Md8Lj2Mq3AP7CxlCWQpBwwOZ1f9cDSG8MbGTMvBcPSQ18hEWMqHI%2BKxHO0lB8W0f90d8dO2OJP9mwJacLURwb8Q3gpWwe0ihCnfrcFXk%2FbEBlf7p%2FPguMtvFbBO6vPreCETRvLz%2Fg1DxWSjs%2BeRgqVK%2BkN1c%2FbtKhFNT2%2Fopaf9KMeRgjB1Ja7s9SbYAwP7u%2By9CDNrv%2F1iHjYhcSroh5GSiwqk7Fk1vsVQKF0BQzpTg%2BVsoUZETYO62Q29UnHPoLc5WC0MrY5I6B4%2FWSH%2FtEBv9SyS%2BIqKJEfP1jSyB3Oy%2BK8Ci%2BuVl3fw%2FBXgUWs%2B9aGjjMPgdzGoH%2Fn3RLrV7AO0o3i%2Frl6c%2FyE5qUN53qFlqHl%2By9TqZmoW5EM6u3fVilLa9VtvFq0rO7WtYYxmQYp%2FvRI%2FUGc87s3gq4MuZaYB%2B2eslFMV8aD6KZ2orLyykid14aJI57e4YJLX2HGVE72zOhghfUimz9foSl%2BNuW0NSzBvXbJ%2FkJuvFOxmBJ%2BtDY6hwTJ1BtXLz2MPynId%2FfT4hRuoOgeEUA5VGhZlKu7CTHXNPtk81nUei2ZQniJvMPsBf5pHPCBuQ82ce%2BtFoVhjXOL%2FzJkcEH08yl8BO%2FekUjioy2HJuZBphyrZ8hw%2B8B7zSMDC9ptfKBjqkAVmeEyJxgEQ8r4JDZAlOi43nMr99ly52blmGc3RuWi3SvEdQRpqA4kbrPFmlEYGxdWYBrl672v3XkpEHyIsTQo8O%2Ff%2BhpQhQ3uyjQqyzfh7PLny7TxFDhosQoe3GaXsAgCFSzt1KbMR1pKaP1n30Roxj5pqWFYi3Q8PN1dRqoJoZKz%2BN7BeAYf%2Fwy5UnIK4e82olrTBC1beBErJfr%2BHouPf5r9pS&X-Amz-Signature=514ad0c30a8f5aa18dc7cde903e9b632334aba85a10051dac83dfe3d3749d44a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNLSNBAO%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDvR8I7XFmtRpUyo3ZOgMIanD14G8ZC%2FXZTcYLGOzCp4QIhAMy1cS9vcUQhhGUMKHNmtnOXYWvi9bWZeIBJseC38IXQKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBAMrOz1A1Md8Lj2Mq3AP7CxlCWQpBwwOZ1f9cDSG8MbGTMvBcPSQ18hEWMqHI%2BKxHO0lB8W0f90d8dO2OJP9mwJacLURwb8Q3gpWwe0ihCnfrcFXk%2FbEBlf7p%2FPguMtvFbBO6vPreCETRvLz%2Fg1DxWSjs%2BeRgqVK%2BkN1c%2FbtKhFNT2%2Fopaf9KMeRgjB1Ja7s9SbYAwP7u%2By9CDNrv%2F1iHjYhcSroh5GSiwqk7Fk1vsVQKF0BQzpTg%2BVsoUZETYO62Q29UnHPoLc5WC0MrY5I6B4%2FWSH%2FtEBv9SyS%2BIqKJEfP1jSyB3Oy%2BK8Ci%2BuVl3fw%2FBXgUWs%2B9aGjjMPgdzGoH%2Fn3RLrV7AO0o3i%2Frl6c%2FyE5qUN53qFlqHl%2By9TqZmoW5EM6u3fVilLa9VtvFq0rO7WtYYxmQYp%2FvRI%2FUGc87s3gq4MuZaYB%2B2eslFMV8aD6KZ2orLyykid14aJI57e4YJLX2HGVE72zOhghfUimz9foSl%2BNuW0NSzBvXbJ%2FkJuvFOxmBJ%2BtDY6hwTJ1BtXLz2MPynId%2FfT4hRuoOgeEUA5VGhZlKu7CTHXNPtk81nUei2ZQniJvMPsBf5pHPCBuQ82ce%2BtFoVhjXOL%2FzJkcEH08yl8BO%2FekUjioy2HJuZBphyrZ8hw%2B8B7zSMDC9ptfKBjqkAVmeEyJxgEQ8r4JDZAlOi43nMr99ly52blmGc3RuWi3SvEdQRpqA4kbrPFmlEYGxdWYBrl672v3XkpEHyIsTQo8O%2Ff%2BhpQhQ3uyjQqyzfh7PLny7TxFDhosQoe3GaXsAgCFSzt1KbMR1pKaP1n30Roxj5pqWFYi3Q8PN1dRqoJoZKz%2BN7BeAYf%2Fwy5UnIK4e82olrTBC1beBErJfr%2BHouPf5r9pS&X-Amz-Signature=1b4445a10abaf0748ccf1f39c8a9dd29940ffc858af78674d8bae4c721aecd48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNLSNBAO%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDvR8I7XFmtRpUyo3ZOgMIanD14G8ZC%2FXZTcYLGOzCp4QIhAMy1cS9vcUQhhGUMKHNmtnOXYWvi9bWZeIBJseC38IXQKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBAMrOz1A1Md8Lj2Mq3AP7CxlCWQpBwwOZ1f9cDSG8MbGTMvBcPSQ18hEWMqHI%2BKxHO0lB8W0f90d8dO2OJP9mwJacLURwb8Q3gpWwe0ihCnfrcFXk%2FbEBlf7p%2FPguMtvFbBO6vPreCETRvLz%2Fg1DxWSjs%2BeRgqVK%2BkN1c%2FbtKhFNT2%2Fopaf9KMeRgjB1Ja7s9SbYAwP7u%2By9CDNrv%2F1iHjYhcSroh5GSiwqk7Fk1vsVQKF0BQzpTg%2BVsoUZETYO62Q29UnHPoLc5WC0MrY5I6B4%2FWSH%2FtEBv9SyS%2BIqKJEfP1jSyB3Oy%2BK8Ci%2BuVl3fw%2FBXgUWs%2B9aGjjMPgdzGoH%2Fn3RLrV7AO0o3i%2Frl6c%2FyE5qUN53qFlqHl%2By9TqZmoW5EM6u3fVilLa9VtvFq0rO7WtYYxmQYp%2FvRI%2FUGc87s3gq4MuZaYB%2B2eslFMV8aD6KZ2orLyykid14aJI57e4YJLX2HGVE72zOhghfUimz9foSl%2BNuW0NSzBvXbJ%2FkJuvFOxmBJ%2BtDY6hwTJ1BtXLz2MPynId%2FfT4hRuoOgeEUA5VGhZlKu7CTHXNPtk81nUei2ZQniJvMPsBf5pHPCBuQ82ce%2BtFoVhjXOL%2FzJkcEH08yl8BO%2FekUjioy2HJuZBphyrZ8hw%2B8B7zSMDC9ptfKBjqkAVmeEyJxgEQ8r4JDZAlOi43nMr99ly52blmGc3RuWi3SvEdQRpqA4kbrPFmlEYGxdWYBrl672v3XkpEHyIsTQo8O%2Ff%2BhpQhQ3uyjQqyzfh7PLny7TxFDhosQoe3GaXsAgCFSzt1KbMR1pKaP1n30Roxj5pqWFYi3Q8PN1dRqoJoZKz%2BN7BeAYf%2Fwy5UnIK4e82olrTBC1beBErJfr%2BHouPf5r9pS&X-Amz-Signature=df0dfb938acd3513fb32ca660dc3b06c305ed5fde1a7a257a01e382b238498f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNLSNBAO%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDvR8I7XFmtRpUyo3ZOgMIanD14G8ZC%2FXZTcYLGOzCp4QIhAMy1cS9vcUQhhGUMKHNmtnOXYWvi9bWZeIBJseC38IXQKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBAMrOz1A1Md8Lj2Mq3AP7CxlCWQpBwwOZ1f9cDSG8MbGTMvBcPSQ18hEWMqHI%2BKxHO0lB8W0f90d8dO2OJP9mwJacLURwb8Q3gpWwe0ihCnfrcFXk%2FbEBlf7p%2FPguMtvFbBO6vPreCETRvLz%2Fg1DxWSjs%2BeRgqVK%2BkN1c%2FbtKhFNT2%2Fopaf9KMeRgjB1Ja7s9SbYAwP7u%2By9CDNrv%2F1iHjYhcSroh5GSiwqk7Fk1vsVQKF0BQzpTg%2BVsoUZETYO62Q29UnHPoLc5WC0MrY5I6B4%2FWSH%2FtEBv9SyS%2BIqKJEfP1jSyB3Oy%2BK8Ci%2BuVl3fw%2FBXgUWs%2B9aGjjMPgdzGoH%2Fn3RLrV7AO0o3i%2Frl6c%2FyE5qUN53qFlqHl%2By9TqZmoW5EM6u3fVilLa9VtvFq0rO7WtYYxmQYp%2FvRI%2FUGc87s3gq4MuZaYB%2B2eslFMV8aD6KZ2orLyykid14aJI57e4YJLX2HGVE72zOhghfUimz9foSl%2BNuW0NSzBvXbJ%2FkJuvFOxmBJ%2BtDY6hwTJ1BtXLz2MPynId%2FfT4hRuoOgeEUA5VGhZlKu7CTHXNPtk81nUei2ZQniJvMPsBf5pHPCBuQ82ce%2BtFoVhjXOL%2FzJkcEH08yl8BO%2FekUjioy2HJuZBphyrZ8hw%2B8B7zSMDC9ptfKBjqkAVmeEyJxgEQ8r4JDZAlOi43nMr99ly52blmGc3RuWi3SvEdQRpqA4kbrPFmlEYGxdWYBrl672v3XkpEHyIsTQo8O%2Ff%2BhpQhQ3uyjQqyzfh7PLny7TxFDhosQoe3GaXsAgCFSzt1KbMR1pKaP1n30Roxj5pqWFYi3Q8PN1dRqoJoZKz%2BN7BeAYf%2Fwy5UnIK4e82olrTBC1beBErJfr%2BHouPf5r9pS&X-Amz-Signature=ea7661f69213c7600d5f780138d4f411ae2f8046a17ad6eda80687c4fe2ce755&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNLSNBAO%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDvR8I7XFmtRpUyo3ZOgMIanD14G8ZC%2FXZTcYLGOzCp4QIhAMy1cS9vcUQhhGUMKHNmtnOXYWvi9bWZeIBJseC38IXQKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBAMrOz1A1Md8Lj2Mq3AP7CxlCWQpBwwOZ1f9cDSG8MbGTMvBcPSQ18hEWMqHI%2BKxHO0lB8W0f90d8dO2OJP9mwJacLURwb8Q3gpWwe0ihCnfrcFXk%2FbEBlf7p%2FPguMtvFbBO6vPreCETRvLz%2Fg1DxWSjs%2BeRgqVK%2BkN1c%2FbtKhFNT2%2Fopaf9KMeRgjB1Ja7s9SbYAwP7u%2By9CDNrv%2F1iHjYhcSroh5GSiwqk7Fk1vsVQKF0BQzpTg%2BVsoUZETYO62Q29UnHPoLc5WC0MrY5I6B4%2FWSH%2FtEBv9SyS%2BIqKJEfP1jSyB3Oy%2BK8Ci%2BuVl3fw%2FBXgUWs%2B9aGjjMPgdzGoH%2Fn3RLrV7AO0o3i%2Frl6c%2FyE5qUN53qFlqHl%2By9TqZmoW5EM6u3fVilLa9VtvFq0rO7WtYYxmQYp%2FvRI%2FUGc87s3gq4MuZaYB%2B2eslFMV8aD6KZ2orLyykid14aJI57e4YJLX2HGVE72zOhghfUimz9foSl%2BNuW0NSzBvXbJ%2FkJuvFOxmBJ%2BtDY6hwTJ1BtXLz2MPynId%2FfT4hRuoOgeEUA5VGhZlKu7CTHXNPtk81nUei2ZQniJvMPsBf5pHPCBuQ82ce%2BtFoVhjXOL%2FzJkcEH08yl8BO%2FekUjioy2HJuZBphyrZ8hw%2B8B7zSMDC9ptfKBjqkAVmeEyJxgEQ8r4JDZAlOi43nMr99ly52blmGc3RuWi3SvEdQRpqA4kbrPFmlEYGxdWYBrl672v3XkpEHyIsTQo8O%2Ff%2BhpQhQ3uyjQqyzfh7PLny7TxFDhosQoe3GaXsAgCFSzt1KbMR1pKaP1n30Roxj5pqWFYi3Q8PN1dRqoJoZKz%2BN7BeAYf%2Fwy5UnIK4e82olrTBC1beBErJfr%2BHouPf5r9pS&X-Amz-Signature=5fb376da2d198a35f8e025681e18234ddb9da1a872e8e097823afe6d23dc6340&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNLSNBAO%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDvR8I7XFmtRpUyo3ZOgMIanD14G8ZC%2FXZTcYLGOzCp4QIhAMy1cS9vcUQhhGUMKHNmtnOXYWvi9bWZeIBJseC38IXQKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBAMrOz1A1Md8Lj2Mq3AP7CxlCWQpBwwOZ1f9cDSG8MbGTMvBcPSQ18hEWMqHI%2BKxHO0lB8W0f90d8dO2OJP9mwJacLURwb8Q3gpWwe0ihCnfrcFXk%2FbEBlf7p%2FPguMtvFbBO6vPreCETRvLz%2Fg1DxWSjs%2BeRgqVK%2BkN1c%2FbtKhFNT2%2Fopaf9KMeRgjB1Ja7s9SbYAwP7u%2By9CDNrv%2F1iHjYhcSroh5GSiwqk7Fk1vsVQKF0BQzpTg%2BVsoUZETYO62Q29UnHPoLc5WC0MrY5I6B4%2FWSH%2FtEBv9SyS%2BIqKJEfP1jSyB3Oy%2BK8Ci%2BuVl3fw%2FBXgUWs%2B9aGjjMPgdzGoH%2Fn3RLrV7AO0o3i%2Frl6c%2FyE5qUN53qFlqHl%2By9TqZmoW5EM6u3fVilLa9VtvFq0rO7WtYYxmQYp%2FvRI%2FUGc87s3gq4MuZaYB%2B2eslFMV8aD6KZ2orLyykid14aJI57e4YJLX2HGVE72zOhghfUimz9foSl%2BNuW0NSzBvXbJ%2FkJuvFOxmBJ%2BtDY6hwTJ1BtXLz2MPynId%2FfT4hRuoOgeEUA5VGhZlKu7CTHXNPtk81nUei2ZQniJvMPsBf5pHPCBuQ82ce%2BtFoVhjXOL%2FzJkcEH08yl8BO%2FekUjioy2HJuZBphyrZ8hw%2B8B7zSMDC9ptfKBjqkAVmeEyJxgEQ8r4JDZAlOi43nMr99ly52blmGc3RuWi3SvEdQRpqA4kbrPFmlEYGxdWYBrl672v3XkpEHyIsTQo8O%2Ff%2BhpQhQ3uyjQqyzfh7PLny7TxFDhosQoe3GaXsAgCFSzt1KbMR1pKaP1n30Roxj5pqWFYi3Q8PN1dRqoJoZKz%2BN7BeAYf%2Fwy5UnIK4e82olrTBC1beBErJfr%2BHouPf5r9pS&X-Amz-Signature=da1ae6a06815c6f966189d5b36862a3519070202eebda2ee35eb03a8839e7f27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNLSNBAO%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDvR8I7XFmtRpUyo3ZOgMIanD14G8ZC%2FXZTcYLGOzCp4QIhAMy1cS9vcUQhhGUMKHNmtnOXYWvi9bWZeIBJseC38IXQKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBAMrOz1A1Md8Lj2Mq3AP7CxlCWQpBwwOZ1f9cDSG8MbGTMvBcPSQ18hEWMqHI%2BKxHO0lB8W0f90d8dO2OJP9mwJacLURwb8Q3gpWwe0ihCnfrcFXk%2FbEBlf7p%2FPguMtvFbBO6vPreCETRvLz%2Fg1DxWSjs%2BeRgqVK%2BkN1c%2FbtKhFNT2%2Fopaf9KMeRgjB1Ja7s9SbYAwP7u%2By9CDNrv%2F1iHjYhcSroh5GSiwqk7Fk1vsVQKF0BQzpTg%2BVsoUZETYO62Q29UnHPoLc5WC0MrY5I6B4%2FWSH%2FtEBv9SyS%2BIqKJEfP1jSyB3Oy%2BK8Ci%2BuVl3fw%2FBXgUWs%2B9aGjjMPgdzGoH%2Fn3RLrV7AO0o3i%2Frl6c%2FyE5qUN53qFlqHl%2By9TqZmoW5EM6u3fVilLa9VtvFq0rO7WtYYxmQYp%2FvRI%2FUGc87s3gq4MuZaYB%2B2eslFMV8aD6KZ2orLyykid14aJI57e4YJLX2HGVE72zOhghfUimz9foSl%2BNuW0NSzBvXbJ%2FkJuvFOxmBJ%2BtDY6hwTJ1BtXLz2MPynId%2FfT4hRuoOgeEUA5VGhZlKu7CTHXNPtk81nUei2ZQniJvMPsBf5pHPCBuQ82ce%2BtFoVhjXOL%2FzJkcEH08yl8BO%2FekUjioy2HJuZBphyrZ8hw%2B8B7zSMDC9ptfKBjqkAVmeEyJxgEQ8r4JDZAlOi43nMr99ly52blmGc3RuWi3SvEdQRpqA4kbrPFmlEYGxdWYBrl672v3XkpEHyIsTQo8O%2Ff%2BhpQhQ3uyjQqyzfh7PLny7TxFDhosQoe3GaXsAgCFSzt1KbMR1pKaP1n30Roxj5pqWFYi3Q8PN1dRqoJoZKz%2BN7BeAYf%2Fwy5UnIK4e82olrTBC1beBErJfr%2BHouPf5r9pS&X-Amz-Signature=849b47efd23519d28cb59393d7d4b856ac4121f4a5b8dd79e86717068826ee9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNLSNBAO%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDvR8I7XFmtRpUyo3ZOgMIanD14G8ZC%2FXZTcYLGOzCp4QIhAMy1cS9vcUQhhGUMKHNmtnOXYWvi9bWZeIBJseC38IXQKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBAMrOz1A1Md8Lj2Mq3AP7CxlCWQpBwwOZ1f9cDSG8MbGTMvBcPSQ18hEWMqHI%2BKxHO0lB8W0f90d8dO2OJP9mwJacLURwb8Q3gpWwe0ihCnfrcFXk%2FbEBlf7p%2FPguMtvFbBO6vPreCETRvLz%2Fg1DxWSjs%2BeRgqVK%2BkN1c%2FbtKhFNT2%2Fopaf9KMeRgjB1Ja7s9SbYAwP7u%2By9CDNrv%2F1iHjYhcSroh5GSiwqk7Fk1vsVQKF0BQzpTg%2BVsoUZETYO62Q29UnHPoLc5WC0MrY5I6B4%2FWSH%2FtEBv9SyS%2BIqKJEfP1jSyB3Oy%2BK8Ci%2BuVl3fw%2FBXgUWs%2B9aGjjMPgdzGoH%2Fn3RLrV7AO0o3i%2Frl6c%2FyE5qUN53qFlqHl%2By9TqZmoW5EM6u3fVilLa9VtvFq0rO7WtYYxmQYp%2FvRI%2FUGc87s3gq4MuZaYB%2B2eslFMV8aD6KZ2orLyykid14aJI57e4YJLX2HGVE72zOhghfUimz9foSl%2BNuW0NSzBvXbJ%2FkJuvFOxmBJ%2BtDY6hwTJ1BtXLz2MPynId%2FfT4hRuoOgeEUA5VGhZlKu7CTHXNPtk81nUei2ZQniJvMPsBf5pHPCBuQ82ce%2BtFoVhjXOL%2FzJkcEH08yl8BO%2FekUjioy2HJuZBphyrZ8hw%2B8B7zSMDC9ptfKBjqkAVmeEyJxgEQ8r4JDZAlOi43nMr99ly52blmGc3RuWi3SvEdQRpqA4kbrPFmlEYGxdWYBrl672v3XkpEHyIsTQo8O%2Ff%2BhpQhQ3uyjQqyzfh7PLny7TxFDhosQoe3GaXsAgCFSzt1KbMR1pKaP1n30Roxj5pqWFYi3Q8PN1dRqoJoZKz%2BN7BeAYf%2Fwy5UnIK4e82olrTBC1beBErJfr%2BHouPf5r9pS&X-Amz-Signature=1b4445a10abaf0748ccf1f39c8a9dd29940ffc858af78674d8bae4c721aecd48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
