---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-08-02T10:06:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-08-02T10:06:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQYMEC74%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVE2W%2B7%2BaCaBX05wNDzA562BznNAGrREBMfqKYCn6%2BngIhAJh3tew%2BRw29QdejJ7Vav2A82KQIquWVxWZSyprm7DNxKv8DCCQQABoMNjM3NDIzMTgzODA1IgxfTpiAEXp9knYQZgIq3AO6BWIDljV99OVjiF5PseyJwBkoOvuG78lcHZTUeN41r2eeVwGAES%2F6PJTycqE9MifFTYEnkgoA%2BKwrM7kMvZHDt9%2B42LjvJMbT%2FxwGEXacv%2F%2Fp4eA2%2BpHXWOZLloAnIm2O7MKI%2FZpsXY8ylMwJ97rWilzgeIDBvskSAdhMLcyst1I3iGgIupXSLPLPU9JXWsVM2iTI6%2BWhlBsY%2BIEgR5Vb2XDo4NnBd39IbPuXjo4PN7YamRoiUM3j5ogmESA78egELNdQtkjuATdcYAwLK6SYJTk%2B4ZzGLoLqQFQFs9JtleNXZ3Q3%2BMmtx%2Fm5GfNWBwrq5UnUjd3St7mb40JTLz3YWrUQcDL4bJbRik%2FBvZj7rf9lTNj6hAqLd%2FT6HMg4VEBCDwH%2FJI4V1EutMh3DD3X4XGUqBUKTPRmDGV5w%2BLrYolcpSumhJkTBtwk3sgtqHqcnxcnSSg7CLURTmIyIYgCgQ1Uv4nOnRwKdTWgI695m%2FVP3CZbr%2FyV%2BjFwoZ%2BvcMU2T6omc3vo5Xf5bZU4hoTSnhaRGaOY2c6i4rbZiI%2B70gndcNlzSgjZoKnpTO8ePRVLHTB9oFGaswmipDmpP5PkFvvsNWoe8roq8TnmmjY0ZVu8STkH7URBAtwD6LjDVpLvEBjqkAWjeRIqXuBAaBnlzyrNB%2FMviTRL477kMMIWU9EB7tppzAX9wxiI7NbduF9kX50LEU2Zk9Pu%2BLn3LPPwyKfticVORKAUB%2B3t8V178QP%2FpIFyFyW%2BhejEK%2B6RUNPEo2knCKCL8uUm7s2YH%2FN1nn1B1H%2Bv23wyGUrrfRQ20bJaxy5uwTWr%2BqNvgeicn4dJDLY43YXJCKugs%2FM7sNFZ6PBxT%2BXiztsxJ&X-Amz-Signature=2ef7c9499039e1775ccd2300babbd9af589db49f6d994ddf86a0dd32f8e61c50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNLHX3GV%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1EZtskjGwgvP7gYiErKN6Had7zBzPsydjtm9vE2grTgIhALvcwsfvt%2FjpIbhRJxMYY1%2BbPOStXsS6WufBd5fNv0ygKv8DCCQQABoMNjM3NDIzMTgzODA1IgzLEOs%2FsQNvl9cxzUwq3AOEYLKt08xICaSXbn%2BTXcrgCp26NjjHpwG7D7c63eR%2FZm14q1shThIPUzTdoijt3LveyQDdJqYmF%2BYjxkx3YO7VDpmRMHlDpNBCWxsYofwwUb7X%2F0wBWFbXQIeVVziLjwsFUct7xzhOWNPPiNC312pLplOj24lElvV6tDVf4AOciapZdqKaJ1vbR3LjuXp02RUAS408sm9u%2BIPal3FlbS%2FSnGpCAllcA8%2F8OWSekCz4U5AthnnDzDhfjNyBKeB4rG1KwzM2koxbnb1FrFDY%2FJpOyLBTOCKUvYNlekvFj8bjht8d4nt3%2F0Cwzlu%2FYilh3NiuDUKY%2Fp7171r6yABSeg4WVAwTS4gcUs9Gqf2KSs3Gcwx%2F1O7JuhRW7bUFlKMaVkiKt5UAUVsW4RqsGHKNbG%2FjskkReMsI%2BXnnoB%2BThWtr7HkofHaJG63ny07DfLkdRkjWSnJqmyp%2B93Pau%2Bt2vw5viL%2BzJ%2Fqv1BYsRVKxdynV5wSCSdTeKoE%2BTmxhCt6%2BTLyx2RFHhTCZvmf%2BuUiCpViCQyCblDe9dYwe95gf8C6is5lrZLwEakTB%2FVSn2bzeEshHeTzhEIJJ8DrI3SBwQVP7xds9ysczQHwh%2Fa06Rif0Fwx%2F5vlegFPF2rh6ljDJn7vEBjqkAaucKkMLXHBrpozjcHtYMmF%2FQzz7S2LTmKm2zw2AC3dKdx9ur%2BTxPeKC4J7Ece5TrHf66mYmtsD9EJDoOt6MH1bePaeqagnJzXUNka66NcHk2n6PwSUieKlWJwWbejAL4xvq19dd3%2FXx%2FP1cha6knqfKhaDzg3jlPQglPqApE5FzgbbILCyrYiWiXvHCPpZhmoS1BVGW8of5iln2XvjJ3MhxYHkq&X-Amz-Signature=8de53d6c5916802a42f91f3bd4084bbc3e9890948874f46d8b4f6f8494f42ce4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNLHX3GV%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1EZtskjGwgvP7gYiErKN6Had7zBzPsydjtm9vE2grTgIhALvcwsfvt%2FjpIbhRJxMYY1%2BbPOStXsS6WufBd5fNv0ygKv8DCCQQABoMNjM3NDIzMTgzODA1IgzLEOs%2FsQNvl9cxzUwq3AOEYLKt08xICaSXbn%2BTXcrgCp26NjjHpwG7D7c63eR%2FZm14q1shThIPUzTdoijt3LveyQDdJqYmF%2BYjxkx3YO7VDpmRMHlDpNBCWxsYofwwUb7X%2F0wBWFbXQIeVVziLjwsFUct7xzhOWNPPiNC312pLplOj24lElvV6tDVf4AOciapZdqKaJ1vbR3LjuXp02RUAS408sm9u%2BIPal3FlbS%2FSnGpCAllcA8%2F8OWSekCz4U5AthnnDzDhfjNyBKeB4rG1KwzM2koxbnb1FrFDY%2FJpOyLBTOCKUvYNlekvFj8bjht8d4nt3%2F0Cwzlu%2FYilh3NiuDUKY%2Fp7171r6yABSeg4WVAwTS4gcUs9Gqf2KSs3Gcwx%2F1O7JuhRW7bUFlKMaVkiKt5UAUVsW4RqsGHKNbG%2FjskkReMsI%2BXnnoB%2BThWtr7HkofHaJG63ny07DfLkdRkjWSnJqmyp%2B93Pau%2Bt2vw5viL%2BzJ%2Fqv1BYsRVKxdynV5wSCSdTeKoE%2BTmxhCt6%2BTLyx2RFHhTCZvmf%2BuUiCpViCQyCblDe9dYwe95gf8C6is5lrZLwEakTB%2FVSn2bzeEshHeTzhEIJJ8DrI3SBwQVP7xds9ysczQHwh%2Fa06Rif0Fwx%2F5vlegFPF2rh6ljDJn7vEBjqkAaucKkMLXHBrpozjcHtYMmF%2FQzz7S2LTmKm2zw2AC3dKdx9ur%2BTxPeKC4J7Ece5TrHf66mYmtsD9EJDoOt6MH1bePaeqagnJzXUNka66NcHk2n6PwSUieKlWJwWbejAL4xvq19dd3%2FXx%2FP1cha6knqfKhaDzg3jlPQglPqApE5FzgbbILCyrYiWiXvHCPpZhmoS1BVGW8of5iln2XvjJ3MhxYHkq&X-Amz-Signature=45fefee9afe172954ce2f688d6848496c136caf2f02df29fc75ddc29e3812b27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNLHX3GV%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1EZtskjGwgvP7gYiErKN6Had7zBzPsydjtm9vE2grTgIhALvcwsfvt%2FjpIbhRJxMYY1%2BbPOStXsS6WufBd5fNv0ygKv8DCCQQABoMNjM3NDIzMTgzODA1IgzLEOs%2FsQNvl9cxzUwq3AOEYLKt08xICaSXbn%2BTXcrgCp26NjjHpwG7D7c63eR%2FZm14q1shThIPUzTdoijt3LveyQDdJqYmF%2BYjxkx3YO7VDpmRMHlDpNBCWxsYofwwUb7X%2F0wBWFbXQIeVVziLjwsFUct7xzhOWNPPiNC312pLplOj24lElvV6tDVf4AOciapZdqKaJ1vbR3LjuXp02RUAS408sm9u%2BIPal3FlbS%2FSnGpCAllcA8%2F8OWSekCz4U5AthnnDzDhfjNyBKeB4rG1KwzM2koxbnb1FrFDY%2FJpOyLBTOCKUvYNlekvFj8bjht8d4nt3%2F0Cwzlu%2FYilh3NiuDUKY%2Fp7171r6yABSeg4WVAwTS4gcUs9Gqf2KSs3Gcwx%2F1O7JuhRW7bUFlKMaVkiKt5UAUVsW4RqsGHKNbG%2FjskkReMsI%2BXnnoB%2BThWtr7HkofHaJG63ny07DfLkdRkjWSnJqmyp%2B93Pau%2Bt2vw5viL%2BzJ%2Fqv1BYsRVKxdynV5wSCSdTeKoE%2BTmxhCt6%2BTLyx2RFHhTCZvmf%2BuUiCpViCQyCblDe9dYwe95gf8C6is5lrZLwEakTB%2FVSn2bzeEshHeTzhEIJJ8DrI3SBwQVP7xds9ysczQHwh%2Fa06Rif0Fwx%2F5vlegFPF2rh6ljDJn7vEBjqkAaucKkMLXHBrpozjcHtYMmF%2FQzz7S2LTmKm2zw2AC3dKdx9ur%2BTxPeKC4J7Ece5TrHf66mYmtsD9EJDoOt6MH1bePaeqagnJzXUNka66NcHk2n6PwSUieKlWJwWbejAL4xvq19dd3%2FXx%2FP1cha6knqfKhaDzg3jlPQglPqApE5FzgbbILCyrYiWiXvHCPpZhmoS1BVGW8of5iln2XvjJ3MhxYHkq&X-Amz-Signature=47b72889463e7ae623a0daaffd7aab6352d845275e37937a5e0f609ca8d5ba17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNLHX3GV%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1EZtskjGwgvP7gYiErKN6Had7zBzPsydjtm9vE2grTgIhALvcwsfvt%2FjpIbhRJxMYY1%2BbPOStXsS6WufBd5fNv0ygKv8DCCQQABoMNjM3NDIzMTgzODA1IgzLEOs%2FsQNvl9cxzUwq3AOEYLKt08xICaSXbn%2BTXcrgCp26NjjHpwG7D7c63eR%2FZm14q1shThIPUzTdoijt3LveyQDdJqYmF%2BYjxkx3YO7VDpmRMHlDpNBCWxsYofwwUb7X%2F0wBWFbXQIeVVziLjwsFUct7xzhOWNPPiNC312pLplOj24lElvV6tDVf4AOciapZdqKaJ1vbR3LjuXp02RUAS408sm9u%2BIPal3FlbS%2FSnGpCAllcA8%2F8OWSekCz4U5AthnnDzDhfjNyBKeB4rG1KwzM2koxbnb1FrFDY%2FJpOyLBTOCKUvYNlekvFj8bjht8d4nt3%2F0Cwzlu%2FYilh3NiuDUKY%2Fp7171r6yABSeg4WVAwTS4gcUs9Gqf2KSs3Gcwx%2F1O7JuhRW7bUFlKMaVkiKt5UAUVsW4RqsGHKNbG%2FjskkReMsI%2BXnnoB%2BThWtr7HkofHaJG63ny07DfLkdRkjWSnJqmyp%2B93Pau%2Bt2vw5viL%2BzJ%2Fqv1BYsRVKxdynV5wSCSdTeKoE%2BTmxhCt6%2BTLyx2RFHhTCZvmf%2BuUiCpViCQyCblDe9dYwe95gf8C6is5lrZLwEakTB%2FVSn2bzeEshHeTzhEIJJ8DrI3SBwQVP7xds9ysczQHwh%2Fa06Rif0Fwx%2F5vlegFPF2rh6ljDJn7vEBjqkAaucKkMLXHBrpozjcHtYMmF%2FQzz7S2LTmKm2zw2AC3dKdx9ur%2BTxPeKC4J7Ece5TrHf66mYmtsD9EJDoOt6MH1bePaeqagnJzXUNka66NcHk2n6PwSUieKlWJwWbejAL4xvq19dd3%2FXx%2FP1cha6knqfKhaDzg3jlPQglPqApE5FzgbbILCyrYiWiXvHCPpZhmoS1BVGW8of5iln2XvjJ3MhxYHkq&X-Amz-Signature=a55e799bdfd49d3832a9c09d47f0106a25633cec1a4c950252f27a0cfa6e50b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNLHX3GV%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1EZtskjGwgvP7gYiErKN6Had7zBzPsydjtm9vE2grTgIhALvcwsfvt%2FjpIbhRJxMYY1%2BbPOStXsS6WufBd5fNv0ygKv8DCCQQABoMNjM3NDIzMTgzODA1IgzLEOs%2FsQNvl9cxzUwq3AOEYLKt08xICaSXbn%2BTXcrgCp26NjjHpwG7D7c63eR%2FZm14q1shThIPUzTdoijt3LveyQDdJqYmF%2BYjxkx3YO7VDpmRMHlDpNBCWxsYofwwUb7X%2F0wBWFbXQIeVVziLjwsFUct7xzhOWNPPiNC312pLplOj24lElvV6tDVf4AOciapZdqKaJ1vbR3LjuXp02RUAS408sm9u%2BIPal3FlbS%2FSnGpCAllcA8%2F8OWSekCz4U5AthnnDzDhfjNyBKeB4rG1KwzM2koxbnb1FrFDY%2FJpOyLBTOCKUvYNlekvFj8bjht8d4nt3%2F0Cwzlu%2FYilh3NiuDUKY%2Fp7171r6yABSeg4WVAwTS4gcUs9Gqf2KSs3Gcwx%2F1O7JuhRW7bUFlKMaVkiKt5UAUVsW4RqsGHKNbG%2FjskkReMsI%2BXnnoB%2BThWtr7HkofHaJG63ny07DfLkdRkjWSnJqmyp%2B93Pau%2Bt2vw5viL%2BzJ%2Fqv1BYsRVKxdynV5wSCSdTeKoE%2BTmxhCt6%2BTLyx2RFHhTCZvmf%2BuUiCpViCQyCblDe9dYwe95gf8C6is5lrZLwEakTB%2FVSn2bzeEshHeTzhEIJJ8DrI3SBwQVP7xds9ysczQHwh%2Fa06Rif0Fwx%2F5vlegFPF2rh6ljDJn7vEBjqkAaucKkMLXHBrpozjcHtYMmF%2FQzz7S2LTmKm2zw2AC3dKdx9ur%2BTxPeKC4J7Ece5TrHf66mYmtsD9EJDoOt6MH1bePaeqagnJzXUNka66NcHk2n6PwSUieKlWJwWbejAL4xvq19dd3%2FXx%2FP1cha6knqfKhaDzg3jlPQglPqApE5FzgbbILCyrYiWiXvHCPpZhmoS1BVGW8of5iln2XvjJ3MhxYHkq&X-Amz-Signature=7f173f1e3284b754232f38fc35b1feac26beb06952287b59600b4e35f6746190&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNLHX3GV%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1EZtskjGwgvP7gYiErKN6Had7zBzPsydjtm9vE2grTgIhALvcwsfvt%2FjpIbhRJxMYY1%2BbPOStXsS6WufBd5fNv0ygKv8DCCQQABoMNjM3NDIzMTgzODA1IgzLEOs%2FsQNvl9cxzUwq3AOEYLKt08xICaSXbn%2BTXcrgCp26NjjHpwG7D7c63eR%2FZm14q1shThIPUzTdoijt3LveyQDdJqYmF%2BYjxkx3YO7VDpmRMHlDpNBCWxsYofwwUb7X%2F0wBWFbXQIeVVziLjwsFUct7xzhOWNPPiNC312pLplOj24lElvV6tDVf4AOciapZdqKaJ1vbR3LjuXp02RUAS408sm9u%2BIPal3FlbS%2FSnGpCAllcA8%2F8OWSekCz4U5AthnnDzDhfjNyBKeB4rG1KwzM2koxbnb1FrFDY%2FJpOyLBTOCKUvYNlekvFj8bjht8d4nt3%2F0Cwzlu%2FYilh3NiuDUKY%2Fp7171r6yABSeg4WVAwTS4gcUs9Gqf2KSs3Gcwx%2F1O7JuhRW7bUFlKMaVkiKt5UAUVsW4RqsGHKNbG%2FjskkReMsI%2BXnnoB%2BThWtr7HkofHaJG63ny07DfLkdRkjWSnJqmyp%2B93Pau%2Bt2vw5viL%2BzJ%2Fqv1BYsRVKxdynV5wSCSdTeKoE%2BTmxhCt6%2BTLyx2RFHhTCZvmf%2BuUiCpViCQyCblDe9dYwe95gf8C6is5lrZLwEakTB%2FVSn2bzeEshHeTzhEIJJ8DrI3SBwQVP7xds9ysczQHwh%2Fa06Rif0Fwx%2F5vlegFPF2rh6ljDJn7vEBjqkAaucKkMLXHBrpozjcHtYMmF%2FQzz7S2LTmKm2zw2AC3dKdx9ur%2BTxPeKC4J7Ece5TrHf66mYmtsD9EJDoOt6MH1bePaeqagnJzXUNka66NcHk2n6PwSUieKlWJwWbejAL4xvq19dd3%2FXx%2FP1cha6knqfKhaDzg3jlPQglPqApE5FzgbbILCyrYiWiXvHCPpZhmoS1BVGW8of5iln2XvjJ3MhxYHkq&X-Amz-Signature=49d799d672bdabd4ab8c7db65475b1e05b59363906ed4ff529868747a6c2016a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNLHX3GV%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1EZtskjGwgvP7gYiErKN6Had7zBzPsydjtm9vE2grTgIhALvcwsfvt%2FjpIbhRJxMYY1%2BbPOStXsS6WufBd5fNv0ygKv8DCCQQABoMNjM3NDIzMTgzODA1IgzLEOs%2FsQNvl9cxzUwq3AOEYLKt08xICaSXbn%2BTXcrgCp26NjjHpwG7D7c63eR%2FZm14q1shThIPUzTdoijt3LveyQDdJqYmF%2BYjxkx3YO7VDpmRMHlDpNBCWxsYofwwUb7X%2F0wBWFbXQIeVVziLjwsFUct7xzhOWNPPiNC312pLplOj24lElvV6tDVf4AOciapZdqKaJ1vbR3LjuXp02RUAS408sm9u%2BIPal3FlbS%2FSnGpCAllcA8%2F8OWSekCz4U5AthnnDzDhfjNyBKeB4rG1KwzM2koxbnb1FrFDY%2FJpOyLBTOCKUvYNlekvFj8bjht8d4nt3%2F0Cwzlu%2FYilh3NiuDUKY%2Fp7171r6yABSeg4WVAwTS4gcUs9Gqf2KSs3Gcwx%2F1O7JuhRW7bUFlKMaVkiKt5UAUVsW4RqsGHKNbG%2FjskkReMsI%2BXnnoB%2BThWtr7HkofHaJG63ny07DfLkdRkjWSnJqmyp%2B93Pau%2Bt2vw5viL%2BzJ%2Fqv1BYsRVKxdynV5wSCSdTeKoE%2BTmxhCt6%2BTLyx2RFHhTCZvmf%2BuUiCpViCQyCblDe9dYwe95gf8C6is5lrZLwEakTB%2FVSn2bzeEshHeTzhEIJJ8DrI3SBwQVP7xds9ysczQHwh%2Fa06Rif0Fwx%2F5vlegFPF2rh6ljDJn7vEBjqkAaucKkMLXHBrpozjcHtYMmF%2FQzz7S2LTmKm2zw2AC3dKdx9ur%2BTxPeKC4J7Ece5TrHf66mYmtsD9EJDoOt6MH1bePaeqagnJzXUNka66NcHk2n6PwSUieKlWJwWbejAL4xvq19dd3%2FXx%2FP1cha6knqfKhaDzg3jlPQglPqApE5FzgbbILCyrYiWiXvHCPpZhmoS1BVGW8of5iln2XvjJ3MhxYHkq&X-Amz-Signature=4502d980cd5799f537b9642215e783a792e4e1b91ad49fd3e6ef916e50ec0836&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNLHX3GV%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1EZtskjGwgvP7gYiErKN6Had7zBzPsydjtm9vE2grTgIhALvcwsfvt%2FjpIbhRJxMYY1%2BbPOStXsS6WufBd5fNv0ygKv8DCCQQABoMNjM3NDIzMTgzODA1IgzLEOs%2FsQNvl9cxzUwq3AOEYLKt08xICaSXbn%2BTXcrgCp26NjjHpwG7D7c63eR%2FZm14q1shThIPUzTdoijt3LveyQDdJqYmF%2BYjxkx3YO7VDpmRMHlDpNBCWxsYofwwUb7X%2F0wBWFbXQIeVVziLjwsFUct7xzhOWNPPiNC312pLplOj24lElvV6tDVf4AOciapZdqKaJ1vbR3LjuXp02RUAS408sm9u%2BIPal3FlbS%2FSnGpCAllcA8%2F8OWSekCz4U5AthnnDzDhfjNyBKeB4rG1KwzM2koxbnb1FrFDY%2FJpOyLBTOCKUvYNlekvFj8bjht8d4nt3%2F0Cwzlu%2FYilh3NiuDUKY%2Fp7171r6yABSeg4WVAwTS4gcUs9Gqf2KSs3Gcwx%2F1O7JuhRW7bUFlKMaVkiKt5UAUVsW4RqsGHKNbG%2FjskkReMsI%2BXnnoB%2BThWtr7HkofHaJG63ny07DfLkdRkjWSnJqmyp%2B93Pau%2Bt2vw5viL%2BzJ%2Fqv1BYsRVKxdynV5wSCSdTeKoE%2BTmxhCt6%2BTLyx2RFHhTCZvmf%2BuUiCpViCQyCblDe9dYwe95gf8C6is5lrZLwEakTB%2FVSn2bzeEshHeTzhEIJJ8DrI3SBwQVP7xds9ysczQHwh%2Fa06Rif0Fwx%2F5vlegFPF2rh6ljDJn7vEBjqkAaucKkMLXHBrpozjcHtYMmF%2FQzz7S2LTmKm2zw2AC3dKdx9ur%2BTxPeKC4J7Ece5TrHf66mYmtsD9EJDoOt6MH1bePaeqagnJzXUNka66NcHk2n6PwSUieKlWJwWbejAL4xvq19dd3%2FXx%2FP1cha6knqfKhaDzg3jlPQglPqApE5FzgbbILCyrYiWiXvHCPpZhmoS1BVGW8of5iln2XvjJ3MhxYHkq&X-Amz-Signature=1c2d7789e6070ee2c3e238a82ca1b9c06128090eb855e0ddde7415977c0a1f00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNLHX3GV%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1EZtskjGwgvP7gYiErKN6Had7zBzPsydjtm9vE2grTgIhALvcwsfvt%2FjpIbhRJxMYY1%2BbPOStXsS6WufBd5fNv0ygKv8DCCQQABoMNjM3NDIzMTgzODA1IgzLEOs%2FsQNvl9cxzUwq3AOEYLKt08xICaSXbn%2BTXcrgCp26NjjHpwG7D7c63eR%2FZm14q1shThIPUzTdoijt3LveyQDdJqYmF%2BYjxkx3YO7VDpmRMHlDpNBCWxsYofwwUb7X%2F0wBWFbXQIeVVziLjwsFUct7xzhOWNPPiNC312pLplOj24lElvV6tDVf4AOciapZdqKaJ1vbR3LjuXp02RUAS408sm9u%2BIPal3FlbS%2FSnGpCAllcA8%2F8OWSekCz4U5AthnnDzDhfjNyBKeB4rG1KwzM2koxbnb1FrFDY%2FJpOyLBTOCKUvYNlekvFj8bjht8d4nt3%2F0Cwzlu%2FYilh3NiuDUKY%2Fp7171r6yABSeg4WVAwTS4gcUs9Gqf2KSs3Gcwx%2F1O7JuhRW7bUFlKMaVkiKt5UAUVsW4RqsGHKNbG%2FjskkReMsI%2BXnnoB%2BThWtr7HkofHaJG63ny07DfLkdRkjWSnJqmyp%2B93Pau%2Bt2vw5viL%2BzJ%2Fqv1BYsRVKxdynV5wSCSdTeKoE%2BTmxhCt6%2BTLyx2RFHhTCZvmf%2BuUiCpViCQyCblDe9dYwe95gf8C6is5lrZLwEakTB%2FVSn2bzeEshHeTzhEIJJ8DrI3SBwQVP7xds9ysczQHwh%2Fa06Rif0Fwx%2F5vlegFPF2rh6ljDJn7vEBjqkAaucKkMLXHBrpozjcHtYMmF%2FQzz7S2LTmKm2zw2AC3dKdx9ur%2BTxPeKC4J7Ece5TrHf66mYmtsD9EJDoOt6MH1bePaeqagnJzXUNka66NcHk2n6PwSUieKlWJwWbejAL4xvq19dd3%2FXx%2FP1cha6knqfKhaDzg3jlPQglPqApE5FzgbbILCyrYiWiXvHCPpZhmoS1BVGW8of5iln2XvjJ3MhxYHkq&X-Amz-Signature=b3f2660d28b91f5f84f59c8f4354a3abecebbb46ec77eab614c6f5ce748dbdae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNLHX3GV%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1EZtskjGwgvP7gYiErKN6Had7zBzPsydjtm9vE2grTgIhALvcwsfvt%2FjpIbhRJxMYY1%2BbPOStXsS6WufBd5fNv0ygKv8DCCQQABoMNjM3NDIzMTgzODA1IgzLEOs%2FsQNvl9cxzUwq3AOEYLKt08xICaSXbn%2BTXcrgCp26NjjHpwG7D7c63eR%2FZm14q1shThIPUzTdoijt3LveyQDdJqYmF%2BYjxkx3YO7VDpmRMHlDpNBCWxsYofwwUb7X%2F0wBWFbXQIeVVziLjwsFUct7xzhOWNPPiNC312pLplOj24lElvV6tDVf4AOciapZdqKaJ1vbR3LjuXp02RUAS408sm9u%2BIPal3FlbS%2FSnGpCAllcA8%2F8OWSekCz4U5AthnnDzDhfjNyBKeB4rG1KwzM2koxbnb1FrFDY%2FJpOyLBTOCKUvYNlekvFj8bjht8d4nt3%2F0Cwzlu%2FYilh3NiuDUKY%2Fp7171r6yABSeg4WVAwTS4gcUs9Gqf2KSs3Gcwx%2F1O7JuhRW7bUFlKMaVkiKt5UAUVsW4RqsGHKNbG%2FjskkReMsI%2BXnnoB%2BThWtr7HkofHaJG63ny07DfLkdRkjWSnJqmyp%2B93Pau%2Bt2vw5viL%2BzJ%2Fqv1BYsRVKxdynV5wSCSdTeKoE%2BTmxhCt6%2BTLyx2RFHhTCZvmf%2BuUiCpViCQyCblDe9dYwe95gf8C6is5lrZLwEakTB%2FVSn2bzeEshHeTzhEIJJ8DrI3SBwQVP7xds9ysczQHwh%2Fa06Rif0Fwx%2F5vlegFPF2rh6ljDJn7vEBjqkAaucKkMLXHBrpozjcHtYMmF%2FQzz7S2LTmKm2zw2AC3dKdx9ur%2BTxPeKC4J7Ece5TrHf66mYmtsD9EJDoOt6MH1bePaeqagnJzXUNka66NcHk2n6PwSUieKlWJwWbejAL4xvq19dd3%2FXx%2FP1cha6knqfKhaDzg3jlPQglPqApE5FzgbbILCyrYiWiXvHCPpZhmoS1BVGW8of5iln2XvjJ3MhxYHkq&X-Amz-Signature=a55e799bdfd49d3832a9c09d47f0106a25633cec1a4c950252f27a0cfa6e50b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
