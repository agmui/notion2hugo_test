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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFK6SRFU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChrRUiehIFuP6tFfZ0496eRMUXOxHNUNSfGOgTje0pAwIgJW1ntl3%2FkZROknIL1e4lOJSAKVR9N0RzMmUFLOkETd8qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2Fmf7qURstUXRiDvSrcA7kUQP7qcqgFpWUgcmzPW%2BdOyQhXLSmkNHBkGKcN2WG98xJpFq9j%2BeCkPeCeXjL9bTgQADYzh8jxYkY4lo8JdvaepcTtTwnyZoNIueo8%2F9y7O8A55srQ19HQudA%2BG%2BVoreIEM3V8wyxkeGDH8dHxiBY5NrxKWaWp7N1vM91ytZ3rKhLLvON7bLapgtXCuMBkH07WFTRzMnL%2B8LOTiVIxHAtfjbhtZOCnVm19phq%2B5vZrv00czg4D%2FVpaBfz%2BEeEYJ%2FxszJqXGxsFiiuYG6V%2B0BPG3VoDMidjQJrcGAki6Dp4cYR5VWC19EITECHg6Aj%2B0F5YCplyExsWW7Z0BCvMJ4y9Q%2BSJgTtEW6o3pBw4VlVXtSZgwNV4djm7D0vbUqKt4E%2F52CFcHGP5Jd4%2Fj4hX1I%2FwPucZfhBV%2FR5w55BfMTpJFz4qoYhZgjknr1i0yVX%2FY%2Bu27u9iC%2BhGRaIJOY5PqLXD24H2sdkLT4k3dkNiWZ%2BY7V6h4gLMA7vxzBLDRoL9roz0S8jcH%2F%2BlPkqKIx603%2F3EWtTjTIow7V8u9TMg7r68YeOu%2FHZglZ5Iz%2F4AvNOMQcOIXdq0t%2B0%2BIYPs49obvZb1Tv1eGzObIFfooJ9BKyHOxU49z9aQqUiMqhypMOuy38QGOqUBUutmxhugPT%2FPJkpuQd990v2EblDdsNya2Vjp%2FtOi8xJZk1KG50NyhJo9PfgyUQRC7%2FZ67uxg1%2Bmn8xmmrb0ARo3dCbPra1Dgyu6c%2BEjijNogdkZRbxdHkSkk161uAeS%2Fl03xtiYlK7GxDL2YDrUwR8HHcTW7MNYqy1O7MSAwhZYQGvAmPhyjaL1zNVeozQ3Qy0Vz3nqxBIxIorpvpRNHsb%2B3fgmf&X-Amz-Signature=ec0042923fef986855afd476e7c60b2c0c13dea03aabdf388a0202dc1dc6af8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWEPFUEN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMcNpO%2FwYlh4hdH%2BM%2Bn0kAerUNqrPSR5%2B4anHx9XPUwAiEAok5w3zlet7D4LP76bkCTyuj%2FyApB5WtBmRBLV4IrfIQqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNrTN03%2BOjEipoI%2FQCrcA2mxm3iPVHUhCQGM%2BjMgvEBe%2FyhrjcTpWVYL%2BGQx5VZs2V25lpClppbKX7%2BqwodauaAKJ86e2HsvSYWhkUJvh2gJg%2FO%2FM9oA7eKBCyi09kV%2BugLjrB5WctWyZn7m12eeYDlZwwaG9ynE9NkKPI%2F5SOQNmKsWuU7Tn%2FXr4%2B8iylqsR4y%2BBdUMdIohw1pCQLx7VxLX46JG8%2F4esKu9KG6wYfMvOz9hLUbXo0Ve6JFZUT0MpbneYtqEOBA5cKB%2F3cW38m13AQbTKVkyGSINnPkgtEPkI3GmDB5wN5TyLo7IWLXtwi5EwgSfvYY3%2BOTwyap3zjrK7VDMj1DlqZs542nFvNAD4BVeO7oR5NnWh3wMeCMkKwh7GXDt7kJtpsMVufkylnUmoJD5Jj9SllaOo7ZbAcpksM3lpG%2F5VKfO38pHIJ2DurXf8IuIf0Ong89Kyjn%2Bu64uZK%2F%2F7AZa6VnMslk4phXXAnnn7vdyyXro5vDV87JIQ4zxlkYwjNHu6BJu%2B6WkAebX1n%2FZA7qgUATjkr68NZrYJRLMKNh9O24U19FsgyDbXB%2F0NjONqUFJikq9YeNnm4bn%2Buyxcx%2FQBNju%2Bj6FLpldlD0xBE2hk8D3UINtjWf%2BdSNoAaHvz4LHRtkMMJaz38QGOqUByKak5An3vZDwgePsVgzAJe1a%2B3QAgyYACIW1ACDf1kweL9zET5GH2ipymJQXNPU%2Fl%2BP7%2FIqCTedhEJD81pmZtDrjbt%2Fbo20oKO4nno3JDSS1uRjfKCD90mwBcMzHtY53VeStoSocFx%2BSsSI75PPj81d%2BzKizSyx3RG8ROzG2wEfpdZ7BvTgg2Tf%2ByBEdX2%2BMuYyzD1mN9JP3mfuYAJfhe8tKbpJm&X-Amz-Signature=327e62f19635445435eb8b180324af2b2e898ae07505b59efc0e8db673dd567a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWEPFUEN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMcNpO%2FwYlh4hdH%2BM%2Bn0kAerUNqrPSR5%2B4anHx9XPUwAiEAok5w3zlet7D4LP76bkCTyuj%2FyApB5WtBmRBLV4IrfIQqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNrTN03%2BOjEipoI%2FQCrcA2mxm3iPVHUhCQGM%2BjMgvEBe%2FyhrjcTpWVYL%2BGQx5VZs2V25lpClppbKX7%2BqwodauaAKJ86e2HsvSYWhkUJvh2gJg%2FO%2FM9oA7eKBCyi09kV%2BugLjrB5WctWyZn7m12eeYDlZwwaG9ynE9NkKPI%2F5SOQNmKsWuU7Tn%2FXr4%2B8iylqsR4y%2BBdUMdIohw1pCQLx7VxLX46JG8%2F4esKu9KG6wYfMvOz9hLUbXo0Ve6JFZUT0MpbneYtqEOBA5cKB%2F3cW38m13AQbTKVkyGSINnPkgtEPkI3GmDB5wN5TyLo7IWLXtwi5EwgSfvYY3%2BOTwyap3zjrK7VDMj1DlqZs542nFvNAD4BVeO7oR5NnWh3wMeCMkKwh7GXDt7kJtpsMVufkylnUmoJD5Jj9SllaOo7ZbAcpksM3lpG%2F5VKfO38pHIJ2DurXf8IuIf0Ong89Kyjn%2Bu64uZK%2F%2F7AZa6VnMslk4phXXAnnn7vdyyXro5vDV87JIQ4zxlkYwjNHu6BJu%2B6WkAebX1n%2FZA7qgUATjkr68NZrYJRLMKNh9O24U19FsgyDbXB%2F0NjONqUFJikq9YeNnm4bn%2Buyxcx%2FQBNju%2Bj6FLpldlD0xBE2hk8D3UINtjWf%2BdSNoAaHvz4LHRtkMMJaz38QGOqUByKak5An3vZDwgePsVgzAJe1a%2B3QAgyYACIW1ACDf1kweL9zET5GH2ipymJQXNPU%2Fl%2BP7%2FIqCTedhEJD81pmZtDrjbt%2Fbo20oKO4nno3JDSS1uRjfKCD90mwBcMzHtY53VeStoSocFx%2BSsSI75PPj81d%2BzKizSyx3RG8ROzG2wEfpdZ7BvTgg2Tf%2ByBEdX2%2BMuYyzD1mN9JP3mfuYAJfhe8tKbpJm&X-Amz-Signature=ed651a98dc1474a177e4b193d83c2a904b65f16cd9d424cb308e230f4d4848c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWEPFUEN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMcNpO%2FwYlh4hdH%2BM%2Bn0kAerUNqrPSR5%2B4anHx9XPUwAiEAok5w3zlet7D4LP76bkCTyuj%2FyApB5WtBmRBLV4IrfIQqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNrTN03%2BOjEipoI%2FQCrcA2mxm3iPVHUhCQGM%2BjMgvEBe%2FyhrjcTpWVYL%2BGQx5VZs2V25lpClppbKX7%2BqwodauaAKJ86e2HsvSYWhkUJvh2gJg%2FO%2FM9oA7eKBCyi09kV%2BugLjrB5WctWyZn7m12eeYDlZwwaG9ynE9NkKPI%2F5SOQNmKsWuU7Tn%2FXr4%2B8iylqsR4y%2BBdUMdIohw1pCQLx7VxLX46JG8%2F4esKu9KG6wYfMvOz9hLUbXo0Ve6JFZUT0MpbneYtqEOBA5cKB%2F3cW38m13AQbTKVkyGSINnPkgtEPkI3GmDB5wN5TyLo7IWLXtwi5EwgSfvYY3%2BOTwyap3zjrK7VDMj1DlqZs542nFvNAD4BVeO7oR5NnWh3wMeCMkKwh7GXDt7kJtpsMVufkylnUmoJD5Jj9SllaOo7ZbAcpksM3lpG%2F5VKfO38pHIJ2DurXf8IuIf0Ong89Kyjn%2Bu64uZK%2F%2F7AZa6VnMslk4phXXAnnn7vdyyXro5vDV87JIQ4zxlkYwjNHu6BJu%2B6WkAebX1n%2FZA7qgUATjkr68NZrYJRLMKNh9O24U19FsgyDbXB%2F0NjONqUFJikq9YeNnm4bn%2Buyxcx%2FQBNju%2Bj6FLpldlD0xBE2hk8D3UINtjWf%2BdSNoAaHvz4LHRtkMMJaz38QGOqUByKak5An3vZDwgePsVgzAJe1a%2B3QAgyYACIW1ACDf1kweL9zET5GH2ipymJQXNPU%2Fl%2BP7%2FIqCTedhEJD81pmZtDrjbt%2Fbo20oKO4nno3JDSS1uRjfKCD90mwBcMzHtY53VeStoSocFx%2BSsSI75PPj81d%2BzKizSyx3RG8ROzG2wEfpdZ7BvTgg2Tf%2ByBEdX2%2BMuYyzD1mN9JP3mfuYAJfhe8tKbpJm&X-Amz-Signature=a931570990f2f07536e54c13a39a5a3a0f36fc9e5002c0a45359dab37875ef9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWEPFUEN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMcNpO%2FwYlh4hdH%2BM%2Bn0kAerUNqrPSR5%2B4anHx9XPUwAiEAok5w3zlet7D4LP76bkCTyuj%2FyApB5WtBmRBLV4IrfIQqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNrTN03%2BOjEipoI%2FQCrcA2mxm3iPVHUhCQGM%2BjMgvEBe%2FyhrjcTpWVYL%2BGQx5VZs2V25lpClppbKX7%2BqwodauaAKJ86e2HsvSYWhkUJvh2gJg%2FO%2FM9oA7eKBCyi09kV%2BugLjrB5WctWyZn7m12eeYDlZwwaG9ynE9NkKPI%2F5SOQNmKsWuU7Tn%2FXr4%2B8iylqsR4y%2BBdUMdIohw1pCQLx7VxLX46JG8%2F4esKu9KG6wYfMvOz9hLUbXo0Ve6JFZUT0MpbneYtqEOBA5cKB%2F3cW38m13AQbTKVkyGSINnPkgtEPkI3GmDB5wN5TyLo7IWLXtwi5EwgSfvYY3%2BOTwyap3zjrK7VDMj1DlqZs542nFvNAD4BVeO7oR5NnWh3wMeCMkKwh7GXDt7kJtpsMVufkylnUmoJD5Jj9SllaOo7ZbAcpksM3lpG%2F5VKfO38pHIJ2DurXf8IuIf0Ong89Kyjn%2Bu64uZK%2F%2F7AZa6VnMslk4phXXAnnn7vdyyXro5vDV87JIQ4zxlkYwjNHu6BJu%2B6WkAebX1n%2FZA7qgUATjkr68NZrYJRLMKNh9O24U19FsgyDbXB%2F0NjONqUFJikq9YeNnm4bn%2Buyxcx%2FQBNju%2Bj6FLpldlD0xBE2hk8D3UINtjWf%2BdSNoAaHvz4LHRtkMMJaz38QGOqUByKak5An3vZDwgePsVgzAJe1a%2B3QAgyYACIW1ACDf1kweL9zET5GH2ipymJQXNPU%2Fl%2BP7%2FIqCTedhEJD81pmZtDrjbt%2Fbo20oKO4nno3JDSS1uRjfKCD90mwBcMzHtY53VeStoSocFx%2BSsSI75PPj81d%2BzKizSyx3RG8ROzG2wEfpdZ7BvTgg2Tf%2ByBEdX2%2BMuYyzD1mN9JP3mfuYAJfhe8tKbpJm&X-Amz-Signature=61b8ea2f1de35f5d6d0c648b201389d4a25efa3c410fac41295d743d6b3a1dd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWEPFUEN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMcNpO%2FwYlh4hdH%2BM%2Bn0kAerUNqrPSR5%2B4anHx9XPUwAiEAok5w3zlet7D4LP76bkCTyuj%2FyApB5WtBmRBLV4IrfIQqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNrTN03%2BOjEipoI%2FQCrcA2mxm3iPVHUhCQGM%2BjMgvEBe%2FyhrjcTpWVYL%2BGQx5VZs2V25lpClppbKX7%2BqwodauaAKJ86e2HsvSYWhkUJvh2gJg%2FO%2FM9oA7eKBCyi09kV%2BugLjrB5WctWyZn7m12eeYDlZwwaG9ynE9NkKPI%2F5SOQNmKsWuU7Tn%2FXr4%2B8iylqsR4y%2BBdUMdIohw1pCQLx7VxLX46JG8%2F4esKu9KG6wYfMvOz9hLUbXo0Ve6JFZUT0MpbneYtqEOBA5cKB%2F3cW38m13AQbTKVkyGSINnPkgtEPkI3GmDB5wN5TyLo7IWLXtwi5EwgSfvYY3%2BOTwyap3zjrK7VDMj1DlqZs542nFvNAD4BVeO7oR5NnWh3wMeCMkKwh7GXDt7kJtpsMVufkylnUmoJD5Jj9SllaOo7ZbAcpksM3lpG%2F5VKfO38pHIJ2DurXf8IuIf0Ong89Kyjn%2Bu64uZK%2F%2F7AZa6VnMslk4phXXAnnn7vdyyXro5vDV87JIQ4zxlkYwjNHu6BJu%2B6WkAebX1n%2FZA7qgUATjkr68NZrYJRLMKNh9O24U19FsgyDbXB%2F0NjONqUFJikq9YeNnm4bn%2Buyxcx%2FQBNju%2Bj6FLpldlD0xBE2hk8D3UINtjWf%2BdSNoAaHvz4LHRtkMMJaz38QGOqUByKak5An3vZDwgePsVgzAJe1a%2B3QAgyYACIW1ACDf1kweL9zET5GH2ipymJQXNPU%2Fl%2BP7%2FIqCTedhEJD81pmZtDrjbt%2Fbo20oKO4nno3JDSS1uRjfKCD90mwBcMzHtY53VeStoSocFx%2BSsSI75PPj81d%2BzKizSyx3RG8ROzG2wEfpdZ7BvTgg2Tf%2ByBEdX2%2BMuYyzD1mN9JP3mfuYAJfhe8tKbpJm&X-Amz-Signature=bb8689307171b64cd857f682ce79690e7be4da98d5af9847e55e09d3cc8846ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWEPFUEN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMcNpO%2FwYlh4hdH%2BM%2Bn0kAerUNqrPSR5%2B4anHx9XPUwAiEAok5w3zlet7D4LP76bkCTyuj%2FyApB5WtBmRBLV4IrfIQqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNrTN03%2BOjEipoI%2FQCrcA2mxm3iPVHUhCQGM%2BjMgvEBe%2FyhrjcTpWVYL%2BGQx5VZs2V25lpClppbKX7%2BqwodauaAKJ86e2HsvSYWhkUJvh2gJg%2FO%2FM9oA7eKBCyi09kV%2BugLjrB5WctWyZn7m12eeYDlZwwaG9ynE9NkKPI%2F5SOQNmKsWuU7Tn%2FXr4%2B8iylqsR4y%2BBdUMdIohw1pCQLx7VxLX46JG8%2F4esKu9KG6wYfMvOz9hLUbXo0Ve6JFZUT0MpbneYtqEOBA5cKB%2F3cW38m13AQbTKVkyGSINnPkgtEPkI3GmDB5wN5TyLo7IWLXtwi5EwgSfvYY3%2BOTwyap3zjrK7VDMj1DlqZs542nFvNAD4BVeO7oR5NnWh3wMeCMkKwh7GXDt7kJtpsMVufkylnUmoJD5Jj9SllaOo7ZbAcpksM3lpG%2F5VKfO38pHIJ2DurXf8IuIf0Ong89Kyjn%2Bu64uZK%2F%2F7AZa6VnMslk4phXXAnnn7vdyyXro5vDV87JIQ4zxlkYwjNHu6BJu%2B6WkAebX1n%2FZA7qgUATjkr68NZrYJRLMKNh9O24U19FsgyDbXB%2F0NjONqUFJikq9YeNnm4bn%2Buyxcx%2FQBNju%2Bj6FLpldlD0xBE2hk8D3UINtjWf%2BdSNoAaHvz4LHRtkMMJaz38QGOqUByKak5An3vZDwgePsVgzAJe1a%2B3QAgyYACIW1ACDf1kweL9zET5GH2ipymJQXNPU%2Fl%2BP7%2FIqCTedhEJD81pmZtDrjbt%2Fbo20oKO4nno3JDSS1uRjfKCD90mwBcMzHtY53VeStoSocFx%2BSsSI75PPj81d%2BzKizSyx3RG8ROzG2wEfpdZ7BvTgg2Tf%2ByBEdX2%2BMuYyzD1mN9JP3mfuYAJfhe8tKbpJm&X-Amz-Signature=22fc67431646df6c80464b12a5d45588fbd248b2d31bf186bc91954fd623a1f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWEPFUEN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMcNpO%2FwYlh4hdH%2BM%2Bn0kAerUNqrPSR5%2B4anHx9XPUwAiEAok5w3zlet7D4LP76bkCTyuj%2FyApB5WtBmRBLV4IrfIQqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNrTN03%2BOjEipoI%2FQCrcA2mxm3iPVHUhCQGM%2BjMgvEBe%2FyhrjcTpWVYL%2BGQx5VZs2V25lpClppbKX7%2BqwodauaAKJ86e2HsvSYWhkUJvh2gJg%2FO%2FM9oA7eKBCyi09kV%2BugLjrB5WctWyZn7m12eeYDlZwwaG9ynE9NkKPI%2F5SOQNmKsWuU7Tn%2FXr4%2B8iylqsR4y%2BBdUMdIohw1pCQLx7VxLX46JG8%2F4esKu9KG6wYfMvOz9hLUbXo0Ve6JFZUT0MpbneYtqEOBA5cKB%2F3cW38m13AQbTKVkyGSINnPkgtEPkI3GmDB5wN5TyLo7IWLXtwi5EwgSfvYY3%2BOTwyap3zjrK7VDMj1DlqZs542nFvNAD4BVeO7oR5NnWh3wMeCMkKwh7GXDt7kJtpsMVufkylnUmoJD5Jj9SllaOo7ZbAcpksM3lpG%2F5VKfO38pHIJ2DurXf8IuIf0Ong89Kyjn%2Bu64uZK%2F%2F7AZa6VnMslk4phXXAnnn7vdyyXro5vDV87JIQ4zxlkYwjNHu6BJu%2B6WkAebX1n%2FZA7qgUATjkr68NZrYJRLMKNh9O24U19FsgyDbXB%2F0NjONqUFJikq9YeNnm4bn%2Buyxcx%2FQBNju%2Bj6FLpldlD0xBE2hk8D3UINtjWf%2BdSNoAaHvz4LHRtkMMJaz38QGOqUByKak5An3vZDwgePsVgzAJe1a%2B3QAgyYACIW1ACDf1kweL9zET5GH2ipymJQXNPU%2Fl%2BP7%2FIqCTedhEJD81pmZtDrjbt%2Fbo20oKO4nno3JDSS1uRjfKCD90mwBcMzHtY53VeStoSocFx%2BSsSI75PPj81d%2BzKizSyx3RG8ROzG2wEfpdZ7BvTgg2Tf%2ByBEdX2%2BMuYyzD1mN9JP3mfuYAJfhe8tKbpJm&X-Amz-Signature=93ed9fb407d5e31986307cf9881dbe15c8c7362dcafe8171d1dfb993a4bcd71b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWEPFUEN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMcNpO%2FwYlh4hdH%2BM%2Bn0kAerUNqrPSR5%2B4anHx9XPUwAiEAok5w3zlet7D4LP76bkCTyuj%2FyApB5WtBmRBLV4IrfIQqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNrTN03%2BOjEipoI%2FQCrcA2mxm3iPVHUhCQGM%2BjMgvEBe%2FyhrjcTpWVYL%2BGQx5VZs2V25lpClppbKX7%2BqwodauaAKJ86e2HsvSYWhkUJvh2gJg%2FO%2FM9oA7eKBCyi09kV%2BugLjrB5WctWyZn7m12eeYDlZwwaG9ynE9NkKPI%2F5SOQNmKsWuU7Tn%2FXr4%2B8iylqsR4y%2BBdUMdIohw1pCQLx7VxLX46JG8%2F4esKu9KG6wYfMvOz9hLUbXo0Ve6JFZUT0MpbneYtqEOBA5cKB%2F3cW38m13AQbTKVkyGSINnPkgtEPkI3GmDB5wN5TyLo7IWLXtwi5EwgSfvYY3%2BOTwyap3zjrK7VDMj1DlqZs542nFvNAD4BVeO7oR5NnWh3wMeCMkKwh7GXDt7kJtpsMVufkylnUmoJD5Jj9SllaOo7ZbAcpksM3lpG%2F5VKfO38pHIJ2DurXf8IuIf0Ong89Kyjn%2Bu64uZK%2F%2F7AZa6VnMslk4phXXAnnn7vdyyXro5vDV87JIQ4zxlkYwjNHu6BJu%2B6WkAebX1n%2FZA7qgUATjkr68NZrYJRLMKNh9O24U19FsgyDbXB%2F0NjONqUFJikq9YeNnm4bn%2Buyxcx%2FQBNju%2Bj6FLpldlD0xBE2hk8D3UINtjWf%2BdSNoAaHvz4LHRtkMMJaz38QGOqUByKak5An3vZDwgePsVgzAJe1a%2B3QAgyYACIW1ACDf1kweL9zET5GH2ipymJQXNPU%2Fl%2BP7%2FIqCTedhEJD81pmZtDrjbt%2Fbo20oKO4nno3JDSS1uRjfKCD90mwBcMzHtY53VeStoSocFx%2BSsSI75PPj81d%2BzKizSyx3RG8ROzG2wEfpdZ7BvTgg2Tf%2ByBEdX2%2BMuYyzD1mN9JP3mfuYAJfhe8tKbpJm&X-Amz-Signature=6ebb009d5cfd934771738684047312fbc196d469b00f5f0ac73a6c2c195f66c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWEPFUEN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMcNpO%2FwYlh4hdH%2BM%2Bn0kAerUNqrPSR5%2B4anHx9XPUwAiEAok5w3zlet7D4LP76bkCTyuj%2FyApB5WtBmRBLV4IrfIQqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNrTN03%2BOjEipoI%2FQCrcA2mxm3iPVHUhCQGM%2BjMgvEBe%2FyhrjcTpWVYL%2BGQx5VZs2V25lpClppbKX7%2BqwodauaAKJ86e2HsvSYWhkUJvh2gJg%2FO%2FM9oA7eKBCyi09kV%2BugLjrB5WctWyZn7m12eeYDlZwwaG9ynE9NkKPI%2F5SOQNmKsWuU7Tn%2FXr4%2B8iylqsR4y%2BBdUMdIohw1pCQLx7VxLX46JG8%2F4esKu9KG6wYfMvOz9hLUbXo0Ve6JFZUT0MpbneYtqEOBA5cKB%2F3cW38m13AQbTKVkyGSINnPkgtEPkI3GmDB5wN5TyLo7IWLXtwi5EwgSfvYY3%2BOTwyap3zjrK7VDMj1DlqZs542nFvNAD4BVeO7oR5NnWh3wMeCMkKwh7GXDt7kJtpsMVufkylnUmoJD5Jj9SllaOo7ZbAcpksM3lpG%2F5VKfO38pHIJ2DurXf8IuIf0Ong89Kyjn%2Bu64uZK%2F%2F7AZa6VnMslk4phXXAnnn7vdyyXro5vDV87JIQ4zxlkYwjNHu6BJu%2B6WkAebX1n%2FZA7qgUATjkr68NZrYJRLMKNh9O24U19FsgyDbXB%2F0NjONqUFJikq9YeNnm4bn%2Buyxcx%2FQBNju%2Bj6FLpldlD0xBE2hk8D3UINtjWf%2BdSNoAaHvz4LHRtkMMJaz38QGOqUByKak5An3vZDwgePsVgzAJe1a%2B3QAgyYACIW1ACDf1kweL9zET5GH2ipymJQXNPU%2Fl%2BP7%2FIqCTedhEJD81pmZtDrjbt%2Fbo20oKO4nno3JDSS1uRjfKCD90mwBcMzHtY53VeStoSocFx%2BSsSI75PPj81d%2BzKizSyx3RG8ROzG2wEfpdZ7BvTgg2Tf%2ByBEdX2%2BMuYyzD1mN9JP3mfuYAJfhe8tKbpJm&X-Amz-Signature=532216540ac5d3e73a473f7df6afe6ee6a8fd6172c4d7bb9afe3c96baaab31c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWEPFUEN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMcNpO%2FwYlh4hdH%2BM%2Bn0kAerUNqrPSR5%2B4anHx9XPUwAiEAok5w3zlet7D4LP76bkCTyuj%2FyApB5WtBmRBLV4IrfIQqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNrTN03%2BOjEipoI%2FQCrcA2mxm3iPVHUhCQGM%2BjMgvEBe%2FyhrjcTpWVYL%2BGQx5VZs2V25lpClppbKX7%2BqwodauaAKJ86e2HsvSYWhkUJvh2gJg%2FO%2FM9oA7eKBCyi09kV%2BugLjrB5WctWyZn7m12eeYDlZwwaG9ynE9NkKPI%2F5SOQNmKsWuU7Tn%2FXr4%2B8iylqsR4y%2BBdUMdIohw1pCQLx7VxLX46JG8%2F4esKu9KG6wYfMvOz9hLUbXo0Ve6JFZUT0MpbneYtqEOBA5cKB%2F3cW38m13AQbTKVkyGSINnPkgtEPkI3GmDB5wN5TyLo7IWLXtwi5EwgSfvYY3%2BOTwyap3zjrK7VDMj1DlqZs542nFvNAD4BVeO7oR5NnWh3wMeCMkKwh7GXDt7kJtpsMVufkylnUmoJD5Jj9SllaOo7ZbAcpksM3lpG%2F5VKfO38pHIJ2DurXf8IuIf0Ong89Kyjn%2Bu64uZK%2F%2F7AZa6VnMslk4phXXAnnn7vdyyXro5vDV87JIQ4zxlkYwjNHu6BJu%2B6WkAebX1n%2FZA7qgUATjkr68NZrYJRLMKNh9O24U19FsgyDbXB%2F0NjONqUFJikq9YeNnm4bn%2Buyxcx%2FQBNju%2Bj6FLpldlD0xBE2hk8D3UINtjWf%2BdSNoAaHvz4LHRtkMMJaz38QGOqUByKak5An3vZDwgePsVgzAJe1a%2B3QAgyYACIW1ACDf1kweL9zET5GH2ipymJQXNPU%2Fl%2BP7%2FIqCTedhEJD81pmZtDrjbt%2Fbo20oKO4nno3JDSS1uRjfKCD90mwBcMzHtY53VeStoSocFx%2BSsSI75PPj81d%2BzKizSyx3RG8ROzG2wEfpdZ7BvTgg2Tf%2ByBEdX2%2BMuYyzD1mN9JP3mfuYAJfhe8tKbpJm&X-Amz-Signature=61b8ea2f1de35f5d6d0c648b201389d4a25efa3c410fac41295d743d6b3a1dd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
