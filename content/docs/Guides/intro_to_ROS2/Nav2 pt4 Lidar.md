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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJLIPHZA%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIHPGxC6vZddaozaGvAc8Bs9HJ0156qJuwabb%2FWeLlp%2BtAiAgBWoh2v%2BRWhVkJoEtWjmm6GLUdHT2UtNWmA6dBvzpQCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzK9Niu61MJpbPDEeKtwD4BXL846GNtxyc680g4Ppais57SeNmRzzkmnni4w8PSoKqCEeogercXP7kXzWHZaq2S0LO3BTWgwBps5gAIuLm81%2BDpc9r1vzZKM4JmTy1f6WctTfmHGbWPayT7pvZeVzmRCFp42Zu%2F2kAO%2BfcHtVajxCF6v%2B52%2FiMo64wxH7oDOR7NB94TpT7fOG4Bx136hpToITje%2B29PvFHx3pdPP5wNztHbpNp5hBvsNWihFfvLfrxQ844iqYFE1igFJFlgl7ZP6gJNiLB3d6oHBIBDnG6AOkNOdCloDj7asqbNwKaHQx6T9prPrbMLRM44djctNJh2l%2BkhTX9%2BMEsqgSOr%2BzpvJZskqTmpV5VjGo06sTnfHaFDSaalgBHo9gPo0rrXa8lNs8N9qxATMvaBfqP51W2BaA%2BK1375t2M3rqnnWOBPCz0YdBEIbr5dbody3fHb6O%2B9hhpncfne2E14kA%2FjI4O5GXt4sCXU4UmCCqceo2oiaQI4u%2BRQmmVr1VN0abXHiIZoCyA4Dp0nMczjswU7HwJGYG2VyM0n02AKbsAQ7gvmHHx4UjGOkNdKf6RyYdFDy9bKgQd3z0S0m0JUdBJwFcvbxhVcWfR8g63%2F4fXOB979ytq6dWAyYzmCu9lgYwio7WxwY6pgE3yf0JHVMmqVo8eJ7T507DhlAF%2F1WtublBa8YWwMdnRUBXwsbfn9qVhN8ZHR%2FRKzsLw3j1lmPFImCOvBvOyvRBRj9E7JjzGrjQz%2FdcG8zEYqvfbtAeKhw5aMDbEbOP5j7kwEFUuK%2Ft3INI%2FL%2BZ%2FYwzBrydI3tUwzjM7EIg3MLuHLSI63alsss2phUeG7pbnXQjPFD73kuEJjDrnE3A5oyg2vW2KQYU&X-Amz-Signature=b9bdec9cef81427a0e02fc00d6f9903e4f0f99a21b834b65611e3284a59e1b28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7FAMXH5%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCJXhJzthRnbK48umChGVUVIO8Aos3y%2BB4%2FWYR37MCWNQIhAIjiyHdtziPEgAwVguQyWzIVZ1%2Bs%2BS64zFf7WjzVjuKMKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvJgrY0YEz4FNhdfwq3AM00jygb7A6l4UfnD48v95S5HX6DGDMnPYSz51U0kerg9pHoAhsCgKWihxR4oPfRnfZRmyhiw9Z%2B%2BWBJ383RobEUT5YUEOpTQ2VovijH04kEVjJGsWPvfe%2FesO8p9KQ1Mh4rfQk%2BXiD1Gwq22Vq6v7HsLAU1QbyPEAnFefaK5Woc4mUd04IWSdHSbOc%2FqH%2FKfyWUan2wg0h5IUJbT9X1IBAdh6agvyyQZVm4AJYtmTD7uvR1JOJXN7MJmGQH05Lfni32I3XF66oXEx5MmkexxRg8rHOidbUoLoeiWNbcjp6rMCltpN2yIh2vBhtxn2XRoCCI%2Bn3qtB6jTOcddvRb1xMj3glVqcp%2B9hEu4l097OEcyEd1ym66yt2z09%2Fv40fx79rNHSwF7aUA9HSH8nszweIr2VtMyd48p0bDCKfB9IPxZ8rTk3DoTvh%2FwZLefVB0WXv9qJ4Jq2v4D1JxfyDXpwNlfVZpQ4Q58nUNYOMWgR%2Fg9aToYMngC8BN%2FNXn8Q4htgBbMkdmofAIEdq5aSsAPEWAxdToWnLQqyJEQ4TOpnk91EAqQE66PGw3cVXuoyODu4ENq9lYQSvEp2D5D1goNcoPfc2RAUeZ11EGbMwSf9e%2BGoz0a6SM5KiBgzkBzCkj9bHBjqkAc2osbFvZa3SBNgPU0pwHqEskrng%2Bf4jyG1VbdTcDrxq9CntW5pePCZZEIzXtjwbYv7HR%2BoZgG0NJfvfEawwzi5nN6MhnmB4whmKEpfVY%2Bpgc7tPPqRFmMv2uZU%2F5%2FA3R%2BuszhlePcy59G%2Bnxre7DTMOBVEDnVUj1SOX7x54QBw0I9pQvf5G%2Bqgn70sgHcrty%2BnXsdL6q8dPTjtKgIpE2vkTQSaT&X-Amz-Signature=18839114e645b342d39523b196b7972b71eef44f1b6468ed772f7ef0c4f44ddf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7FAMXH5%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCJXhJzthRnbK48umChGVUVIO8Aos3y%2BB4%2FWYR37MCWNQIhAIjiyHdtziPEgAwVguQyWzIVZ1%2Bs%2BS64zFf7WjzVjuKMKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvJgrY0YEz4FNhdfwq3AM00jygb7A6l4UfnD48v95S5HX6DGDMnPYSz51U0kerg9pHoAhsCgKWihxR4oPfRnfZRmyhiw9Z%2B%2BWBJ383RobEUT5YUEOpTQ2VovijH04kEVjJGsWPvfe%2FesO8p9KQ1Mh4rfQk%2BXiD1Gwq22Vq6v7HsLAU1QbyPEAnFefaK5Woc4mUd04IWSdHSbOc%2FqH%2FKfyWUan2wg0h5IUJbT9X1IBAdh6agvyyQZVm4AJYtmTD7uvR1JOJXN7MJmGQH05Lfni32I3XF66oXEx5MmkexxRg8rHOidbUoLoeiWNbcjp6rMCltpN2yIh2vBhtxn2XRoCCI%2Bn3qtB6jTOcddvRb1xMj3glVqcp%2B9hEu4l097OEcyEd1ym66yt2z09%2Fv40fx79rNHSwF7aUA9HSH8nszweIr2VtMyd48p0bDCKfB9IPxZ8rTk3DoTvh%2FwZLefVB0WXv9qJ4Jq2v4D1JxfyDXpwNlfVZpQ4Q58nUNYOMWgR%2Fg9aToYMngC8BN%2FNXn8Q4htgBbMkdmofAIEdq5aSsAPEWAxdToWnLQqyJEQ4TOpnk91EAqQE66PGw3cVXuoyODu4ENq9lYQSvEp2D5D1goNcoPfc2RAUeZ11EGbMwSf9e%2BGoz0a6SM5KiBgzkBzCkj9bHBjqkAc2osbFvZa3SBNgPU0pwHqEskrng%2Bf4jyG1VbdTcDrxq9CntW5pePCZZEIzXtjwbYv7HR%2BoZgG0NJfvfEawwzi5nN6MhnmB4whmKEpfVY%2Bpgc7tPPqRFmMv2uZU%2F5%2FA3R%2BuszhlePcy59G%2Bnxre7DTMOBVEDnVUj1SOX7x54QBw0I9pQvf5G%2Bqgn70sgHcrty%2BnXsdL6q8dPTjtKgIpE2vkTQSaT&X-Amz-Signature=62b5edb31906df7dc0a647f8e948a2460d825baa8129d223eda4bea297a79b8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7FAMXH5%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCJXhJzthRnbK48umChGVUVIO8Aos3y%2BB4%2FWYR37MCWNQIhAIjiyHdtziPEgAwVguQyWzIVZ1%2Bs%2BS64zFf7WjzVjuKMKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvJgrY0YEz4FNhdfwq3AM00jygb7A6l4UfnD48v95S5HX6DGDMnPYSz51U0kerg9pHoAhsCgKWihxR4oPfRnfZRmyhiw9Z%2B%2BWBJ383RobEUT5YUEOpTQ2VovijH04kEVjJGsWPvfe%2FesO8p9KQ1Mh4rfQk%2BXiD1Gwq22Vq6v7HsLAU1QbyPEAnFefaK5Woc4mUd04IWSdHSbOc%2FqH%2FKfyWUan2wg0h5IUJbT9X1IBAdh6agvyyQZVm4AJYtmTD7uvR1JOJXN7MJmGQH05Lfni32I3XF66oXEx5MmkexxRg8rHOidbUoLoeiWNbcjp6rMCltpN2yIh2vBhtxn2XRoCCI%2Bn3qtB6jTOcddvRb1xMj3glVqcp%2B9hEu4l097OEcyEd1ym66yt2z09%2Fv40fx79rNHSwF7aUA9HSH8nszweIr2VtMyd48p0bDCKfB9IPxZ8rTk3DoTvh%2FwZLefVB0WXv9qJ4Jq2v4D1JxfyDXpwNlfVZpQ4Q58nUNYOMWgR%2Fg9aToYMngC8BN%2FNXn8Q4htgBbMkdmofAIEdq5aSsAPEWAxdToWnLQqyJEQ4TOpnk91EAqQE66PGw3cVXuoyODu4ENq9lYQSvEp2D5D1goNcoPfc2RAUeZ11EGbMwSf9e%2BGoz0a6SM5KiBgzkBzCkj9bHBjqkAc2osbFvZa3SBNgPU0pwHqEskrng%2Bf4jyG1VbdTcDrxq9CntW5pePCZZEIzXtjwbYv7HR%2BoZgG0NJfvfEawwzi5nN6MhnmB4whmKEpfVY%2Bpgc7tPPqRFmMv2uZU%2F5%2FA3R%2BuszhlePcy59G%2Bnxre7DTMOBVEDnVUj1SOX7x54QBw0I9pQvf5G%2Bqgn70sgHcrty%2BnXsdL6q8dPTjtKgIpE2vkTQSaT&X-Amz-Signature=267918aef24dce65cf7ac452c9d69a547794c570ffc29a19a3cdfc3bc51244be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7FAMXH5%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCJXhJzthRnbK48umChGVUVIO8Aos3y%2BB4%2FWYR37MCWNQIhAIjiyHdtziPEgAwVguQyWzIVZ1%2Bs%2BS64zFf7WjzVjuKMKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvJgrY0YEz4FNhdfwq3AM00jygb7A6l4UfnD48v95S5HX6DGDMnPYSz51U0kerg9pHoAhsCgKWihxR4oPfRnfZRmyhiw9Z%2B%2BWBJ383RobEUT5YUEOpTQ2VovijH04kEVjJGsWPvfe%2FesO8p9KQ1Mh4rfQk%2BXiD1Gwq22Vq6v7HsLAU1QbyPEAnFefaK5Woc4mUd04IWSdHSbOc%2FqH%2FKfyWUan2wg0h5IUJbT9X1IBAdh6agvyyQZVm4AJYtmTD7uvR1JOJXN7MJmGQH05Lfni32I3XF66oXEx5MmkexxRg8rHOidbUoLoeiWNbcjp6rMCltpN2yIh2vBhtxn2XRoCCI%2Bn3qtB6jTOcddvRb1xMj3glVqcp%2B9hEu4l097OEcyEd1ym66yt2z09%2Fv40fx79rNHSwF7aUA9HSH8nszweIr2VtMyd48p0bDCKfB9IPxZ8rTk3DoTvh%2FwZLefVB0WXv9qJ4Jq2v4D1JxfyDXpwNlfVZpQ4Q58nUNYOMWgR%2Fg9aToYMngC8BN%2FNXn8Q4htgBbMkdmofAIEdq5aSsAPEWAxdToWnLQqyJEQ4TOpnk91EAqQE66PGw3cVXuoyODu4ENq9lYQSvEp2D5D1goNcoPfc2RAUeZ11EGbMwSf9e%2BGoz0a6SM5KiBgzkBzCkj9bHBjqkAc2osbFvZa3SBNgPU0pwHqEskrng%2Bf4jyG1VbdTcDrxq9CntW5pePCZZEIzXtjwbYv7HR%2BoZgG0NJfvfEawwzi5nN6MhnmB4whmKEpfVY%2Bpgc7tPPqRFmMv2uZU%2F5%2FA3R%2BuszhlePcy59G%2Bnxre7DTMOBVEDnVUj1SOX7x54QBw0I9pQvf5G%2Bqgn70sgHcrty%2BnXsdL6q8dPTjtKgIpE2vkTQSaT&X-Amz-Signature=c5f87fe7e0518acab401659714ec86def6811363c6a9003073a6857bfab5ff24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7FAMXH5%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCJXhJzthRnbK48umChGVUVIO8Aos3y%2BB4%2FWYR37MCWNQIhAIjiyHdtziPEgAwVguQyWzIVZ1%2Bs%2BS64zFf7WjzVjuKMKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvJgrY0YEz4FNhdfwq3AM00jygb7A6l4UfnD48v95S5HX6DGDMnPYSz51U0kerg9pHoAhsCgKWihxR4oPfRnfZRmyhiw9Z%2B%2BWBJ383RobEUT5YUEOpTQ2VovijH04kEVjJGsWPvfe%2FesO8p9KQ1Mh4rfQk%2BXiD1Gwq22Vq6v7HsLAU1QbyPEAnFefaK5Woc4mUd04IWSdHSbOc%2FqH%2FKfyWUan2wg0h5IUJbT9X1IBAdh6agvyyQZVm4AJYtmTD7uvR1JOJXN7MJmGQH05Lfni32I3XF66oXEx5MmkexxRg8rHOidbUoLoeiWNbcjp6rMCltpN2yIh2vBhtxn2XRoCCI%2Bn3qtB6jTOcddvRb1xMj3glVqcp%2B9hEu4l097OEcyEd1ym66yt2z09%2Fv40fx79rNHSwF7aUA9HSH8nszweIr2VtMyd48p0bDCKfB9IPxZ8rTk3DoTvh%2FwZLefVB0WXv9qJ4Jq2v4D1JxfyDXpwNlfVZpQ4Q58nUNYOMWgR%2Fg9aToYMngC8BN%2FNXn8Q4htgBbMkdmofAIEdq5aSsAPEWAxdToWnLQqyJEQ4TOpnk91EAqQE66PGw3cVXuoyODu4ENq9lYQSvEp2D5D1goNcoPfc2RAUeZ11EGbMwSf9e%2BGoz0a6SM5KiBgzkBzCkj9bHBjqkAc2osbFvZa3SBNgPU0pwHqEskrng%2Bf4jyG1VbdTcDrxq9CntW5pePCZZEIzXtjwbYv7HR%2BoZgG0NJfvfEawwzi5nN6MhnmB4whmKEpfVY%2Bpgc7tPPqRFmMv2uZU%2F5%2FA3R%2BuszhlePcy59G%2Bnxre7DTMOBVEDnVUj1SOX7x54QBw0I9pQvf5G%2Bqgn70sgHcrty%2BnXsdL6q8dPTjtKgIpE2vkTQSaT&X-Amz-Signature=6445d8a2a9b8dcbfbef43061ba819fb3eb60b00dbf4aa5c828ae7a03251e5766&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7FAMXH5%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCJXhJzthRnbK48umChGVUVIO8Aos3y%2BB4%2FWYR37MCWNQIhAIjiyHdtziPEgAwVguQyWzIVZ1%2Bs%2BS64zFf7WjzVjuKMKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvJgrY0YEz4FNhdfwq3AM00jygb7A6l4UfnD48v95S5HX6DGDMnPYSz51U0kerg9pHoAhsCgKWihxR4oPfRnfZRmyhiw9Z%2B%2BWBJ383RobEUT5YUEOpTQ2VovijH04kEVjJGsWPvfe%2FesO8p9KQ1Mh4rfQk%2BXiD1Gwq22Vq6v7HsLAU1QbyPEAnFefaK5Woc4mUd04IWSdHSbOc%2FqH%2FKfyWUan2wg0h5IUJbT9X1IBAdh6agvyyQZVm4AJYtmTD7uvR1JOJXN7MJmGQH05Lfni32I3XF66oXEx5MmkexxRg8rHOidbUoLoeiWNbcjp6rMCltpN2yIh2vBhtxn2XRoCCI%2Bn3qtB6jTOcddvRb1xMj3glVqcp%2B9hEu4l097OEcyEd1ym66yt2z09%2Fv40fx79rNHSwF7aUA9HSH8nszweIr2VtMyd48p0bDCKfB9IPxZ8rTk3DoTvh%2FwZLefVB0WXv9qJ4Jq2v4D1JxfyDXpwNlfVZpQ4Q58nUNYOMWgR%2Fg9aToYMngC8BN%2FNXn8Q4htgBbMkdmofAIEdq5aSsAPEWAxdToWnLQqyJEQ4TOpnk91EAqQE66PGw3cVXuoyODu4ENq9lYQSvEp2D5D1goNcoPfc2RAUeZ11EGbMwSf9e%2BGoz0a6SM5KiBgzkBzCkj9bHBjqkAc2osbFvZa3SBNgPU0pwHqEskrng%2Bf4jyG1VbdTcDrxq9CntW5pePCZZEIzXtjwbYv7HR%2BoZgG0NJfvfEawwzi5nN6MhnmB4whmKEpfVY%2Bpgc7tPPqRFmMv2uZU%2F5%2FA3R%2BuszhlePcy59G%2Bnxre7DTMOBVEDnVUj1SOX7x54QBw0I9pQvf5G%2Bqgn70sgHcrty%2BnXsdL6q8dPTjtKgIpE2vkTQSaT&X-Amz-Signature=0f170bfbcff8e1cd244d14b02bc3d1a9f8e403f5b8dacf34889e6218fe9d29ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7FAMXH5%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCJXhJzthRnbK48umChGVUVIO8Aos3y%2BB4%2FWYR37MCWNQIhAIjiyHdtziPEgAwVguQyWzIVZ1%2Bs%2BS64zFf7WjzVjuKMKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvJgrY0YEz4FNhdfwq3AM00jygb7A6l4UfnD48v95S5HX6DGDMnPYSz51U0kerg9pHoAhsCgKWihxR4oPfRnfZRmyhiw9Z%2B%2BWBJ383RobEUT5YUEOpTQ2VovijH04kEVjJGsWPvfe%2FesO8p9KQ1Mh4rfQk%2BXiD1Gwq22Vq6v7HsLAU1QbyPEAnFefaK5Woc4mUd04IWSdHSbOc%2FqH%2FKfyWUan2wg0h5IUJbT9X1IBAdh6agvyyQZVm4AJYtmTD7uvR1JOJXN7MJmGQH05Lfni32I3XF66oXEx5MmkexxRg8rHOidbUoLoeiWNbcjp6rMCltpN2yIh2vBhtxn2XRoCCI%2Bn3qtB6jTOcddvRb1xMj3glVqcp%2B9hEu4l097OEcyEd1ym66yt2z09%2Fv40fx79rNHSwF7aUA9HSH8nszweIr2VtMyd48p0bDCKfB9IPxZ8rTk3DoTvh%2FwZLefVB0WXv9qJ4Jq2v4D1JxfyDXpwNlfVZpQ4Q58nUNYOMWgR%2Fg9aToYMngC8BN%2FNXn8Q4htgBbMkdmofAIEdq5aSsAPEWAxdToWnLQqyJEQ4TOpnk91EAqQE66PGw3cVXuoyODu4ENq9lYQSvEp2D5D1goNcoPfc2RAUeZ11EGbMwSf9e%2BGoz0a6SM5KiBgzkBzCkj9bHBjqkAc2osbFvZa3SBNgPU0pwHqEskrng%2Bf4jyG1VbdTcDrxq9CntW5pePCZZEIzXtjwbYv7HR%2BoZgG0NJfvfEawwzi5nN6MhnmB4whmKEpfVY%2Bpgc7tPPqRFmMv2uZU%2F5%2FA3R%2BuszhlePcy59G%2Bnxre7DTMOBVEDnVUj1SOX7x54QBw0I9pQvf5G%2Bqgn70sgHcrty%2BnXsdL6q8dPTjtKgIpE2vkTQSaT&X-Amz-Signature=f7ba06deb2ff3a6f7e593cc43188cd43f63aee00ccb9265c999a402db3752992&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7FAMXH5%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCJXhJzthRnbK48umChGVUVIO8Aos3y%2BB4%2FWYR37MCWNQIhAIjiyHdtziPEgAwVguQyWzIVZ1%2Bs%2BS64zFf7WjzVjuKMKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvJgrY0YEz4FNhdfwq3AM00jygb7A6l4UfnD48v95S5HX6DGDMnPYSz51U0kerg9pHoAhsCgKWihxR4oPfRnfZRmyhiw9Z%2B%2BWBJ383RobEUT5YUEOpTQ2VovijH04kEVjJGsWPvfe%2FesO8p9KQ1Mh4rfQk%2BXiD1Gwq22Vq6v7HsLAU1QbyPEAnFefaK5Woc4mUd04IWSdHSbOc%2FqH%2FKfyWUan2wg0h5IUJbT9X1IBAdh6agvyyQZVm4AJYtmTD7uvR1JOJXN7MJmGQH05Lfni32I3XF66oXEx5MmkexxRg8rHOidbUoLoeiWNbcjp6rMCltpN2yIh2vBhtxn2XRoCCI%2Bn3qtB6jTOcddvRb1xMj3glVqcp%2B9hEu4l097OEcyEd1ym66yt2z09%2Fv40fx79rNHSwF7aUA9HSH8nszweIr2VtMyd48p0bDCKfB9IPxZ8rTk3DoTvh%2FwZLefVB0WXv9qJ4Jq2v4D1JxfyDXpwNlfVZpQ4Q58nUNYOMWgR%2Fg9aToYMngC8BN%2FNXn8Q4htgBbMkdmofAIEdq5aSsAPEWAxdToWnLQqyJEQ4TOpnk91EAqQE66PGw3cVXuoyODu4ENq9lYQSvEp2D5D1goNcoPfc2RAUeZ11EGbMwSf9e%2BGoz0a6SM5KiBgzkBzCkj9bHBjqkAc2osbFvZa3SBNgPU0pwHqEskrng%2Bf4jyG1VbdTcDrxq9CntW5pePCZZEIzXtjwbYv7HR%2BoZgG0NJfvfEawwzi5nN6MhnmB4whmKEpfVY%2Bpgc7tPPqRFmMv2uZU%2F5%2FA3R%2BuszhlePcy59G%2Bnxre7DTMOBVEDnVUj1SOX7x54QBw0I9pQvf5G%2Bqgn70sgHcrty%2BnXsdL6q8dPTjtKgIpE2vkTQSaT&X-Amz-Signature=ec43087ee25cef3f67ec6990f6b939dfea7addf0de0cb5ef3f9d8b8cd825528f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7FAMXH5%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCJXhJzthRnbK48umChGVUVIO8Aos3y%2BB4%2FWYR37MCWNQIhAIjiyHdtziPEgAwVguQyWzIVZ1%2Bs%2BS64zFf7WjzVjuKMKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvJgrY0YEz4FNhdfwq3AM00jygb7A6l4UfnD48v95S5HX6DGDMnPYSz51U0kerg9pHoAhsCgKWihxR4oPfRnfZRmyhiw9Z%2B%2BWBJ383RobEUT5YUEOpTQ2VovijH04kEVjJGsWPvfe%2FesO8p9KQ1Mh4rfQk%2BXiD1Gwq22Vq6v7HsLAU1QbyPEAnFefaK5Woc4mUd04IWSdHSbOc%2FqH%2FKfyWUan2wg0h5IUJbT9X1IBAdh6agvyyQZVm4AJYtmTD7uvR1JOJXN7MJmGQH05Lfni32I3XF66oXEx5MmkexxRg8rHOidbUoLoeiWNbcjp6rMCltpN2yIh2vBhtxn2XRoCCI%2Bn3qtB6jTOcddvRb1xMj3glVqcp%2B9hEu4l097OEcyEd1ym66yt2z09%2Fv40fx79rNHSwF7aUA9HSH8nszweIr2VtMyd48p0bDCKfB9IPxZ8rTk3DoTvh%2FwZLefVB0WXv9qJ4Jq2v4D1JxfyDXpwNlfVZpQ4Q58nUNYOMWgR%2Fg9aToYMngC8BN%2FNXn8Q4htgBbMkdmofAIEdq5aSsAPEWAxdToWnLQqyJEQ4TOpnk91EAqQE66PGw3cVXuoyODu4ENq9lYQSvEp2D5D1goNcoPfc2RAUeZ11EGbMwSf9e%2BGoz0a6SM5KiBgzkBzCkj9bHBjqkAc2osbFvZa3SBNgPU0pwHqEskrng%2Bf4jyG1VbdTcDrxq9CntW5pePCZZEIzXtjwbYv7HR%2BoZgG0NJfvfEawwzi5nN6MhnmB4whmKEpfVY%2Bpgc7tPPqRFmMv2uZU%2F5%2FA3R%2BuszhlePcy59G%2Bnxre7DTMOBVEDnVUj1SOX7x54QBw0I9pQvf5G%2Bqgn70sgHcrty%2BnXsdL6q8dPTjtKgIpE2vkTQSaT&X-Amz-Signature=e303a113846b985afa76850d3121c10b2ea0d4afc2e7c9e846289ebf7c4a794b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7FAMXH5%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCJXhJzthRnbK48umChGVUVIO8Aos3y%2BB4%2FWYR37MCWNQIhAIjiyHdtziPEgAwVguQyWzIVZ1%2Bs%2BS64zFf7WjzVjuKMKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvJgrY0YEz4FNhdfwq3AM00jygb7A6l4UfnD48v95S5HX6DGDMnPYSz51U0kerg9pHoAhsCgKWihxR4oPfRnfZRmyhiw9Z%2B%2BWBJ383RobEUT5YUEOpTQ2VovijH04kEVjJGsWPvfe%2FesO8p9KQ1Mh4rfQk%2BXiD1Gwq22Vq6v7HsLAU1QbyPEAnFefaK5Woc4mUd04IWSdHSbOc%2FqH%2FKfyWUan2wg0h5IUJbT9X1IBAdh6agvyyQZVm4AJYtmTD7uvR1JOJXN7MJmGQH05Lfni32I3XF66oXEx5MmkexxRg8rHOidbUoLoeiWNbcjp6rMCltpN2yIh2vBhtxn2XRoCCI%2Bn3qtB6jTOcddvRb1xMj3glVqcp%2B9hEu4l097OEcyEd1ym66yt2z09%2Fv40fx79rNHSwF7aUA9HSH8nszweIr2VtMyd48p0bDCKfB9IPxZ8rTk3DoTvh%2FwZLefVB0WXv9qJ4Jq2v4D1JxfyDXpwNlfVZpQ4Q58nUNYOMWgR%2Fg9aToYMngC8BN%2FNXn8Q4htgBbMkdmofAIEdq5aSsAPEWAxdToWnLQqyJEQ4TOpnk91EAqQE66PGw3cVXuoyODu4ENq9lYQSvEp2D5D1goNcoPfc2RAUeZ11EGbMwSf9e%2BGoz0a6SM5KiBgzkBzCkj9bHBjqkAc2osbFvZa3SBNgPU0pwHqEskrng%2Bf4jyG1VbdTcDrxq9CntW5pePCZZEIzXtjwbYv7HR%2BoZgG0NJfvfEawwzi5nN6MhnmB4whmKEpfVY%2Bpgc7tPPqRFmMv2uZU%2F5%2FA3R%2BuszhlePcy59G%2Bnxre7DTMOBVEDnVUj1SOX7x54QBw0I9pQvf5G%2Bqgn70sgHcrty%2BnXsdL6q8dPTjtKgIpE2vkTQSaT&X-Amz-Signature=00b7e802573253c3430311fe525925ba8618ebeae7a0ae9701b85e8f4928b331&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
