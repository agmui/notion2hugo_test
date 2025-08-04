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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPFJ6AHL%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCzZ1yJI6Ls6MP5amwO4Y9IStfXECetsvgKB7MfoRURCAIgIfQedPdjVkAgpIghLONEQ57hTt1yDaBlDyzq18vvrzEq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDEzDS9%2BKrZZs%2F2orvircAyX3xIo%2FM%2FoUFuTPWKTBktFV2zwypN3ud2Ayl3ZCoKmnv%2F1RNnXeHNHUwqwR%2FPG2l6hbisDZKzzb9ri2o6xFQhI8DCZ8csVP5taJMH%2F2OsXieIXD3kgvCqcJDwvQ%2BPnFB7%2FvDDHS28q2goQe3vZ8sr28utvxMW5oLyHHOGCL9SXA9B3l5OIU0z7dfwv69MY5Kuh087aigpcB7xg7YQBYqU1UlyEroAkvlSWbzimEcDWXI68Del5ozfJnoLJ66PB%2BMg6L1lqt2iaeqdgB79gBUH1gGGwpNmIBmext1VyoUB0%2Bzcf89swvp7SVAbrbSONGdnlQhFpood8H7JpIQH%2FtdFaHbGpdGAQtiDoW2FZu0%2BoqGJTbjt3iCYkmEEoxlRj8ucTZbvwJ6Pm7sIvcfYeL0pC7cXJP%2BPgdbNK5UGQLylhICoQ2VyrqYOFMmJ89wxtiIpnY56bxhUpgbYK8k49A35eLB9nk8XwyA3o0TKZIZMWGkfum9tR4Kw4q%2BgfwtHKQ3ql%2B%2BA%2F8Axrvy%2B0JXaCKJQf2EGzM3on4PFbeIz%2BrOPR%2FbhtBjYjrPnZ11LEGFWc8X1oirqqdrRq%2F6RYh7oAp7lEiFb5S9IQ8%2BrJVfqptInFh2VEGVRfBLT15B%2FtvMI7pwMQGOqUBYWyk0f0WiatO7skdtL8Y9c4MrZpCH1TKsgHIRkijpb1RgZRBQJNKHIM%2BJPn9MoQR%2Ft1ntJSCoSleyhg4hFyjJ%2FnCZ0J4i2GzFmqnw6aXmHJp5Jsg4gt1m23TG1nUQHMqrA6e1SIvfLzQQMx92qELhR6iJRkm0Qw6GUem%2FynWrKtCS3VOhoXsKN0PplfLbPvne1aTD0%2FplDE98ih%2BgK7w1Cl4kdMe&X-Amz-Signature=225f399300b23234a77d122512c1eaeea4b52483f1a6fdfc76621b9a53e2e876&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOKFRQ2W%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHouwuzC2%2Brhlf1qGx8izTA9PqM9fYAm%2BKpef3VPMuFBAiEAv8CgSFiHaJPOUaEYws%2F1nu7N65KkHUD%2FTL6dv%2BCNUw0q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDM1FJeEGAJ%2F%2F5rQtSSrcA4bNqGwHMQvEviRVytqWP7am%2Fen%2Bhjklzjwt6zPswEmWoc5anUxvuVGTlZ%2FX1VP978p9Mec9aAnD7wVecvLZ%2FtE%2Fqctd7%2B5Pt%2FcfPlMI7jEA35cWLBnVLK5kW9GYlswU6tiUPqpMFTZsaKUTJQzv7eZrguUBIACuTj8B97UkUAJybr8WspXPRs3mzeE4pzSSWd7%2FGOxwsd0lo%2FBzj0CLCdlxokTEQdsiAtXFkBig8fRcwuxq%2B%2BMrp7AZMye0TyqLKC4AO9i%2FkrMTkTAMc7Radh4aIRV7QqqUpZSX5uErj5CsrWYrN%2BFRiwgXZSiy2KYQfdit9ErvbNIXN2e1Afq28vBU%2BcG2SlzjWw4DUDlM8iCc4G3WWHexPTPprK%2FXcqMBGbQpI2Qea36xu%2F2n2RHyXTLuFu5%2F0FeYnIL%2BGLnJrh67G7vf4DvnCaMC5No%2FvpMm7FjWXPwuhNu%2FTryfUXg9CH8RBFdH94vWnDhsz%2B5VgDl5QEJGxPMAftTIHjImlMXW0rdppUoEydoFvau%2BOxi0DsFZ9tAgKj1GEzxFGwqlyX3V8%2BSGMWgA4bNS8AKTpG0bM%2BFveypQI%2FoYD3kcw3HYiwC%2B9l3TjWA3AK7KcXbnJqB89RLK6LDCnyTLnpYGMPjpwMQGOqUBpNWNy9JYR1Glk63Aj6bQW%2FhVwGIKSfwHBI4Skth7xPAUOEDAGkXT9occhin1BGUFiFGWwVDkdbC1fE3PVy8PEiSHMOTrNmQNehdYlsPhHXEd%2Fw1Cqh9clz%2B8OFIVMczx3t9JfPTQmDBLMaXsAPJAD4dQWeUUk6m1jqKOwMFKmHSdYwsZ5JMC2g5bNSIJmaNlZhQSnWqr4Uw%2BEwqTUrlPav7LxTJE&X-Amz-Signature=9ad2d6862d2f46e187a6565835d8987536a32cee902f492145de153c85f1ce2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOKFRQ2W%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHouwuzC2%2Brhlf1qGx8izTA9PqM9fYAm%2BKpef3VPMuFBAiEAv8CgSFiHaJPOUaEYws%2F1nu7N65KkHUD%2FTL6dv%2BCNUw0q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDM1FJeEGAJ%2F%2F5rQtSSrcA4bNqGwHMQvEviRVytqWP7am%2Fen%2Bhjklzjwt6zPswEmWoc5anUxvuVGTlZ%2FX1VP978p9Mec9aAnD7wVecvLZ%2FtE%2Fqctd7%2B5Pt%2FcfPlMI7jEA35cWLBnVLK5kW9GYlswU6tiUPqpMFTZsaKUTJQzv7eZrguUBIACuTj8B97UkUAJybr8WspXPRs3mzeE4pzSSWd7%2FGOxwsd0lo%2FBzj0CLCdlxokTEQdsiAtXFkBig8fRcwuxq%2B%2BMrp7AZMye0TyqLKC4AO9i%2FkrMTkTAMc7Radh4aIRV7QqqUpZSX5uErj5CsrWYrN%2BFRiwgXZSiy2KYQfdit9ErvbNIXN2e1Afq28vBU%2BcG2SlzjWw4DUDlM8iCc4G3WWHexPTPprK%2FXcqMBGbQpI2Qea36xu%2F2n2RHyXTLuFu5%2F0FeYnIL%2BGLnJrh67G7vf4DvnCaMC5No%2FvpMm7FjWXPwuhNu%2FTryfUXg9CH8RBFdH94vWnDhsz%2B5VgDl5QEJGxPMAftTIHjImlMXW0rdppUoEydoFvau%2BOxi0DsFZ9tAgKj1GEzxFGwqlyX3V8%2BSGMWgA4bNS8AKTpG0bM%2BFveypQI%2FoYD3kcw3HYiwC%2B9l3TjWA3AK7KcXbnJqB89RLK6LDCnyTLnpYGMPjpwMQGOqUBpNWNy9JYR1Glk63Aj6bQW%2FhVwGIKSfwHBI4Skth7xPAUOEDAGkXT9occhin1BGUFiFGWwVDkdbC1fE3PVy8PEiSHMOTrNmQNehdYlsPhHXEd%2Fw1Cqh9clz%2B8OFIVMczx3t9JfPTQmDBLMaXsAPJAD4dQWeUUk6m1jqKOwMFKmHSdYwsZ5JMC2g5bNSIJmaNlZhQSnWqr4Uw%2BEwqTUrlPav7LxTJE&X-Amz-Signature=e5e26047d3b8175ed22c4fb4e8e797415e4aedc6ba1da13c03fdf146373bed45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOKFRQ2W%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHouwuzC2%2Brhlf1qGx8izTA9PqM9fYAm%2BKpef3VPMuFBAiEAv8CgSFiHaJPOUaEYws%2F1nu7N65KkHUD%2FTL6dv%2BCNUw0q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDM1FJeEGAJ%2F%2F5rQtSSrcA4bNqGwHMQvEviRVytqWP7am%2Fen%2Bhjklzjwt6zPswEmWoc5anUxvuVGTlZ%2FX1VP978p9Mec9aAnD7wVecvLZ%2FtE%2Fqctd7%2B5Pt%2FcfPlMI7jEA35cWLBnVLK5kW9GYlswU6tiUPqpMFTZsaKUTJQzv7eZrguUBIACuTj8B97UkUAJybr8WspXPRs3mzeE4pzSSWd7%2FGOxwsd0lo%2FBzj0CLCdlxokTEQdsiAtXFkBig8fRcwuxq%2B%2BMrp7AZMye0TyqLKC4AO9i%2FkrMTkTAMc7Radh4aIRV7QqqUpZSX5uErj5CsrWYrN%2BFRiwgXZSiy2KYQfdit9ErvbNIXN2e1Afq28vBU%2BcG2SlzjWw4DUDlM8iCc4G3WWHexPTPprK%2FXcqMBGbQpI2Qea36xu%2F2n2RHyXTLuFu5%2F0FeYnIL%2BGLnJrh67G7vf4DvnCaMC5No%2FvpMm7FjWXPwuhNu%2FTryfUXg9CH8RBFdH94vWnDhsz%2B5VgDl5QEJGxPMAftTIHjImlMXW0rdppUoEydoFvau%2BOxi0DsFZ9tAgKj1GEzxFGwqlyX3V8%2BSGMWgA4bNS8AKTpG0bM%2BFveypQI%2FoYD3kcw3HYiwC%2B9l3TjWA3AK7KcXbnJqB89RLK6LDCnyTLnpYGMPjpwMQGOqUBpNWNy9JYR1Glk63Aj6bQW%2FhVwGIKSfwHBI4Skth7xPAUOEDAGkXT9occhin1BGUFiFGWwVDkdbC1fE3PVy8PEiSHMOTrNmQNehdYlsPhHXEd%2Fw1Cqh9clz%2B8OFIVMczx3t9JfPTQmDBLMaXsAPJAD4dQWeUUk6m1jqKOwMFKmHSdYwsZ5JMC2g5bNSIJmaNlZhQSnWqr4Uw%2BEwqTUrlPav7LxTJE&X-Amz-Signature=aca32d6ad904f1444325a8ec6c699b04ff9c3b749d5db7225352460a5f6401fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOKFRQ2W%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHouwuzC2%2Brhlf1qGx8izTA9PqM9fYAm%2BKpef3VPMuFBAiEAv8CgSFiHaJPOUaEYws%2F1nu7N65KkHUD%2FTL6dv%2BCNUw0q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDM1FJeEGAJ%2F%2F5rQtSSrcA4bNqGwHMQvEviRVytqWP7am%2Fen%2Bhjklzjwt6zPswEmWoc5anUxvuVGTlZ%2FX1VP978p9Mec9aAnD7wVecvLZ%2FtE%2Fqctd7%2B5Pt%2FcfPlMI7jEA35cWLBnVLK5kW9GYlswU6tiUPqpMFTZsaKUTJQzv7eZrguUBIACuTj8B97UkUAJybr8WspXPRs3mzeE4pzSSWd7%2FGOxwsd0lo%2FBzj0CLCdlxokTEQdsiAtXFkBig8fRcwuxq%2B%2BMrp7AZMye0TyqLKC4AO9i%2FkrMTkTAMc7Radh4aIRV7QqqUpZSX5uErj5CsrWYrN%2BFRiwgXZSiy2KYQfdit9ErvbNIXN2e1Afq28vBU%2BcG2SlzjWw4DUDlM8iCc4G3WWHexPTPprK%2FXcqMBGbQpI2Qea36xu%2F2n2RHyXTLuFu5%2F0FeYnIL%2BGLnJrh67G7vf4DvnCaMC5No%2FvpMm7FjWXPwuhNu%2FTryfUXg9CH8RBFdH94vWnDhsz%2B5VgDl5QEJGxPMAftTIHjImlMXW0rdppUoEydoFvau%2BOxi0DsFZ9tAgKj1GEzxFGwqlyX3V8%2BSGMWgA4bNS8AKTpG0bM%2BFveypQI%2FoYD3kcw3HYiwC%2B9l3TjWA3AK7KcXbnJqB89RLK6LDCnyTLnpYGMPjpwMQGOqUBpNWNy9JYR1Glk63Aj6bQW%2FhVwGIKSfwHBI4Skth7xPAUOEDAGkXT9occhin1BGUFiFGWwVDkdbC1fE3PVy8PEiSHMOTrNmQNehdYlsPhHXEd%2Fw1Cqh9clz%2B8OFIVMczx3t9JfPTQmDBLMaXsAPJAD4dQWeUUk6m1jqKOwMFKmHSdYwsZ5JMC2g5bNSIJmaNlZhQSnWqr4Uw%2BEwqTUrlPav7LxTJE&X-Amz-Signature=5f346cfd9e224ad1d6d290abe07e6385c15bcbdbefaa721b8633703dcab3b37f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOKFRQ2W%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHouwuzC2%2Brhlf1qGx8izTA9PqM9fYAm%2BKpef3VPMuFBAiEAv8CgSFiHaJPOUaEYws%2F1nu7N65KkHUD%2FTL6dv%2BCNUw0q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDM1FJeEGAJ%2F%2F5rQtSSrcA4bNqGwHMQvEviRVytqWP7am%2Fen%2Bhjklzjwt6zPswEmWoc5anUxvuVGTlZ%2FX1VP978p9Mec9aAnD7wVecvLZ%2FtE%2Fqctd7%2B5Pt%2FcfPlMI7jEA35cWLBnVLK5kW9GYlswU6tiUPqpMFTZsaKUTJQzv7eZrguUBIACuTj8B97UkUAJybr8WspXPRs3mzeE4pzSSWd7%2FGOxwsd0lo%2FBzj0CLCdlxokTEQdsiAtXFkBig8fRcwuxq%2B%2BMrp7AZMye0TyqLKC4AO9i%2FkrMTkTAMc7Radh4aIRV7QqqUpZSX5uErj5CsrWYrN%2BFRiwgXZSiy2KYQfdit9ErvbNIXN2e1Afq28vBU%2BcG2SlzjWw4DUDlM8iCc4G3WWHexPTPprK%2FXcqMBGbQpI2Qea36xu%2F2n2RHyXTLuFu5%2F0FeYnIL%2BGLnJrh67G7vf4DvnCaMC5No%2FvpMm7FjWXPwuhNu%2FTryfUXg9CH8RBFdH94vWnDhsz%2B5VgDl5QEJGxPMAftTIHjImlMXW0rdppUoEydoFvau%2BOxi0DsFZ9tAgKj1GEzxFGwqlyX3V8%2BSGMWgA4bNS8AKTpG0bM%2BFveypQI%2FoYD3kcw3HYiwC%2B9l3TjWA3AK7KcXbnJqB89RLK6LDCnyTLnpYGMPjpwMQGOqUBpNWNy9JYR1Glk63Aj6bQW%2FhVwGIKSfwHBI4Skth7xPAUOEDAGkXT9occhin1BGUFiFGWwVDkdbC1fE3PVy8PEiSHMOTrNmQNehdYlsPhHXEd%2Fw1Cqh9clz%2B8OFIVMczx3t9JfPTQmDBLMaXsAPJAD4dQWeUUk6m1jqKOwMFKmHSdYwsZ5JMC2g5bNSIJmaNlZhQSnWqr4Uw%2BEwqTUrlPav7LxTJE&X-Amz-Signature=6bdd353044407b1356ab6019b053705a0d78d547fe6b3126afbacd95ac3a1fa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOKFRQ2W%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHouwuzC2%2Brhlf1qGx8izTA9PqM9fYAm%2BKpef3VPMuFBAiEAv8CgSFiHaJPOUaEYws%2F1nu7N65KkHUD%2FTL6dv%2BCNUw0q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDM1FJeEGAJ%2F%2F5rQtSSrcA4bNqGwHMQvEviRVytqWP7am%2Fen%2Bhjklzjwt6zPswEmWoc5anUxvuVGTlZ%2FX1VP978p9Mec9aAnD7wVecvLZ%2FtE%2Fqctd7%2B5Pt%2FcfPlMI7jEA35cWLBnVLK5kW9GYlswU6tiUPqpMFTZsaKUTJQzv7eZrguUBIACuTj8B97UkUAJybr8WspXPRs3mzeE4pzSSWd7%2FGOxwsd0lo%2FBzj0CLCdlxokTEQdsiAtXFkBig8fRcwuxq%2B%2BMrp7AZMye0TyqLKC4AO9i%2FkrMTkTAMc7Radh4aIRV7QqqUpZSX5uErj5CsrWYrN%2BFRiwgXZSiy2KYQfdit9ErvbNIXN2e1Afq28vBU%2BcG2SlzjWw4DUDlM8iCc4G3WWHexPTPprK%2FXcqMBGbQpI2Qea36xu%2F2n2RHyXTLuFu5%2F0FeYnIL%2BGLnJrh67G7vf4DvnCaMC5No%2FvpMm7FjWXPwuhNu%2FTryfUXg9CH8RBFdH94vWnDhsz%2B5VgDl5QEJGxPMAftTIHjImlMXW0rdppUoEydoFvau%2BOxi0DsFZ9tAgKj1GEzxFGwqlyX3V8%2BSGMWgA4bNS8AKTpG0bM%2BFveypQI%2FoYD3kcw3HYiwC%2B9l3TjWA3AK7KcXbnJqB89RLK6LDCnyTLnpYGMPjpwMQGOqUBpNWNy9JYR1Glk63Aj6bQW%2FhVwGIKSfwHBI4Skth7xPAUOEDAGkXT9occhin1BGUFiFGWwVDkdbC1fE3PVy8PEiSHMOTrNmQNehdYlsPhHXEd%2Fw1Cqh9clz%2B8OFIVMczx3t9JfPTQmDBLMaXsAPJAD4dQWeUUk6m1jqKOwMFKmHSdYwsZ5JMC2g5bNSIJmaNlZhQSnWqr4Uw%2BEwqTUrlPav7LxTJE&X-Amz-Signature=5085548fc0d7dd106ec2ce43b988f66ab5af733616066fe8c3f7098fe4c71de0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOKFRQ2W%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHouwuzC2%2Brhlf1qGx8izTA9PqM9fYAm%2BKpef3VPMuFBAiEAv8CgSFiHaJPOUaEYws%2F1nu7N65KkHUD%2FTL6dv%2BCNUw0q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDM1FJeEGAJ%2F%2F5rQtSSrcA4bNqGwHMQvEviRVytqWP7am%2Fen%2Bhjklzjwt6zPswEmWoc5anUxvuVGTlZ%2FX1VP978p9Mec9aAnD7wVecvLZ%2FtE%2Fqctd7%2B5Pt%2FcfPlMI7jEA35cWLBnVLK5kW9GYlswU6tiUPqpMFTZsaKUTJQzv7eZrguUBIACuTj8B97UkUAJybr8WspXPRs3mzeE4pzSSWd7%2FGOxwsd0lo%2FBzj0CLCdlxokTEQdsiAtXFkBig8fRcwuxq%2B%2BMrp7AZMye0TyqLKC4AO9i%2FkrMTkTAMc7Radh4aIRV7QqqUpZSX5uErj5CsrWYrN%2BFRiwgXZSiy2KYQfdit9ErvbNIXN2e1Afq28vBU%2BcG2SlzjWw4DUDlM8iCc4G3WWHexPTPprK%2FXcqMBGbQpI2Qea36xu%2F2n2RHyXTLuFu5%2F0FeYnIL%2BGLnJrh67G7vf4DvnCaMC5No%2FvpMm7FjWXPwuhNu%2FTryfUXg9CH8RBFdH94vWnDhsz%2B5VgDl5QEJGxPMAftTIHjImlMXW0rdppUoEydoFvau%2BOxi0DsFZ9tAgKj1GEzxFGwqlyX3V8%2BSGMWgA4bNS8AKTpG0bM%2BFveypQI%2FoYD3kcw3HYiwC%2B9l3TjWA3AK7KcXbnJqB89RLK6LDCnyTLnpYGMPjpwMQGOqUBpNWNy9JYR1Glk63Aj6bQW%2FhVwGIKSfwHBI4Skth7xPAUOEDAGkXT9occhin1BGUFiFGWwVDkdbC1fE3PVy8PEiSHMOTrNmQNehdYlsPhHXEd%2Fw1Cqh9clz%2B8OFIVMczx3t9JfPTQmDBLMaXsAPJAD4dQWeUUk6m1jqKOwMFKmHSdYwsZ5JMC2g5bNSIJmaNlZhQSnWqr4Uw%2BEwqTUrlPav7LxTJE&X-Amz-Signature=5a8f8d24990c2af07cc6d0e6c47d46bc1e467e92aed670fe4bebd9976a48cf68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOKFRQ2W%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHouwuzC2%2Brhlf1qGx8izTA9PqM9fYAm%2BKpef3VPMuFBAiEAv8CgSFiHaJPOUaEYws%2F1nu7N65KkHUD%2FTL6dv%2BCNUw0q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDM1FJeEGAJ%2F%2F5rQtSSrcA4bNqGwHMQvEviRVytqWP7am%2Fen%2Bhjklzjwt6zPswEmWoc5anUxvuVGTlZ%2FX1VP978p9Mec9aAnD7wVecvLZ%2FtE%2Fqctd7%2B5Pt%2FcfPlMI7jEA35cWLBnVLK5kW9GYlswU6tiUPqpMFTZsaKUTJQzv7eZrguUBIACuTj8B97UkUAJybr8WspXPRs3mzeE4pzSSWd7%2FGOxwsd0lo%2FBzj0CLCdlxokTEQdsiAtXFkBig8fRcwuxq%2B%2BMrp7AZMye0TyqLKC4AO9i%2FkrMTkTAMc7Radh4aIRV7QqqUpZSX5uErj5CsrWYrN%2BFRiwgXZSiy2KYQfdit9ErvbNIXN2e1Afq28vBU%2BcG2SlzjWw4DUDlM8iCc4G3WWHexPTPprK%2FXcqMBGbQpI2Qea36xu%2F2n2RHyXTLuFu5%2F0FeYnIL%2BGLnJrh67G7vf4DvnCaMC5No%2FvpMm7FjWXPwuhNu%2FTryfUXg9CH8RBFdH94vWnDhsz%2B5VgDl5QEJGxPMAftTIHjImlMXW0rdppUoEydoFvau%2BOxi0DsFZ9tAgKj1GEzxFGwqlyX3V8%2BSGMWgA4bNS8AKTpG0bM%2BFveypQI%2FoYD3kcw3HYiwC%2B9l3TjWA3AK7KcXbnJqB89RLK6LDCnyTLnpYGMPjpwMQGOqUBpNWNy9JYR1Glk63Aj6bQW%2FhVwGIKSfwHBI4Skth7xPAUOEDAGkXT9occhin1BGUFiFGWwVDkdbC1fE3PVy8PEiSHMOTrNmQNehdYlsPhHXEd%2Fw1Cqh9clz%2B8OFIVMczx3t9JfPTQmDBLMaXsAPJAD4dQWeUUk6m1jqKOwMFKmHSdYwsZ5JMC2g5bNSIJmaNlZhQSnWqr4Uw%2BEwqTUrlPav7LxTJE&X-Amz-Signature=da9796f24d972b7a258228807658d9cb7c3883fde8d9cac232109d0ed3489a2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOKFRQ2W%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHouwuzC2%2Brhlf1qGx8izTA9PqM9fYAm%2BKpef3VPMuFBAiEAv8CgSFiHaJPOUaEYws%2F1nu7N65KkHUD%2FTL6dv%2BCNUw0q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDM1FJeEGAJ%2F%2F5rQtSSrcA4bNqGwHMQvEviRVytqWP7am%2Fen%2Bhjklzjwt6zPswEmWoc5anUxvuVGTlZ%2FX1VP978p9Mec9aAnD7wVecvLZ%2FtE%2Fqctd7%2B5Pt%2FcfPlMI7jEA35cWLBnVLK5kW9GYlswU6tiUPqpMFTZsaKUTJQzv7eZrguUBIACuTj8B97UkUAJybr8WspXPRs3mzeE4pzSSWd7%2FGOxwsd0lo%2FBzj0CLCdlxokTEQdsiAtXFkBig8fRcwuxq%2B%2BMrp7AZMye0TyqLKC4AO9i%2FkrMTkTAMc7Radh4aIRV7QqqUpZSX5uErj5CsrWYrN%2BFRiwgXZSiy2KYQfdit9ErvbNIXN2e1Afq28vBU%2BcG2SlzjWw4DUDlM8iCc4G3WWHexPTPprK%2FXcqMBGbQpI2Qea36xu%2F2n2RHyXTLuFu5%2F0FeYnIL%2BGLnJrh67G7vf4DvnCaMC5No%2FvpMm7FjWXPwuhNu%2FTryfUXg9CH8RBFdH94vWnDhsz%2B5VgDl5QEJGxPMAftTIHjImlMXW0rdppUoEydoFvau%2BOxi0DsFZ9tAgKj1GEzxFGwqlyX3V8%2BSGMWgA4bNS8AKTpG0bM%2BFveypQI%2FoYD3kcw3HYiwC%2B9l3TjWA3AK7KcXbnJqB89RLK6LDCnyTLnpYGMPjpwMQGOqUBpNWNy9JYR1Glk63Aj6bQW%2FhVwGIKSfwHBI4Skth7xPAUOEDAGkXT9occhin1BGUFiFGWwVDkdbC1fE3PVy8PEiSHMOTrNmQNehdYlsPhHXEd%2Fw1Cqh9clz%2B8OFIVMczx3t9JfPTQmDBLMaXsAPJAD4dQWeUUk6m1jqKOwMFKmHSdYwsZ5JMC2g5bNSIJmaNlZhQSnWqr4Uw%2BEwqTUrlPav7LxTJE&X-Amz-Signature=85f72269dfb0ad8a57f70879e30146091e0138c441977005c0476dd91bfaae65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOKFRQ2W%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHouwuzC2%2Brhlf1qGx8izTA9PqM9fYAm%2BKpef3VPMuFBAiEAv8CgSFiHaJPOUaEYws%2F1nu7N65KkHUD%2FTL6dv%2BCNUw0q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDM1FJeEGAJ%2F%2F5rQtSSrcA4bNqGwHMQvEviRVytqWP7am%2Fen%2Bhjklzjwt6zPswEmWoc5anUxvuVGTlZ%2FX1VP978p9Mec9aAnD7wVecvLZ%2FtE%2Fqctd7%2B5Pt%2FcfPlMI7jEA35cWLBnVLK5kW9GYlswU6tiUPqpMFTZsaKUTJQzv7eZrguUBIACuTj8B97UkUAJybr8WspXPRs3mzeE4pzSSWd7%2FGOxwsd0lo%2FBzj0CLCdlxokTEQdsiAtXFkBig8fRcwuxq%2B%2BMrp7AZMye0TyqLKC4AO9i%2FkrMTkTAMc7Radh4aIRV7QqqUpZSX5uErj5CsrWYrN%2BFRiwgXZSiy2KYQfdit9ErvbNIXN2e1Afq28vBU%2BcG2SlzjWw4DUDlM8iCc4G3WWHexPTPprK%2FXcqMBGbQpI2Qea36xu%2F2n2RHyXTLuFu5%2F0FeYnIL%2BGLnJrh67G7vf4DvnCaMC5No%2FvpMm7FjWXPwuhNu%2FTryfUXg9CH8RBFdH94vWnDhsz%2B5VgDl5QEJGxPMAftTIHjImlMXW0rdppUoEydoFvau%2BOxi0DsFZ9tAgKj1GEzxFGwqlyX3V8%2BSGMWgA4bNS8AKTpG0bM%2BFveypQI%2FoYD3kcw3HYiwC%2B9l3TjWA3AK7KcXbnJqB89RLK6LDCnyTLnpYGMPjpwMQGOqUBpNWNy9JYR1Glk63Aj6bQW%2FhVwGIKSfwHBI4Skth7xPAUOEDAGkXT9occhin1BGUFiFGWwVDkdbC1fE3PVy8PEiSHMOTrNmQNehdYlsPhHXEd%2Fw1Cqh9clz%2B8OFIVMczx3t9JfPTQmDBLMaXsAPJAD4dQWeUUk6m1jqKOwMFKmHSdYwsZ5JMC2g5bNSIJmaNlZhQSnWqr4Uw%2BEwqTUrlPav7LxTJE&X-Amz-Signature=5f346cfd9e224ad1d6d290abe07e6385c15bcbdbefaa721b8633703dcab3b37f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
