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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KCDETN4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIBWq%2BHww6dAAt5dvqUlThu8yR%2B9x46x6hCktpnu2HI9xAiEAifk3OvodjUkf%2BdQGwycFV82QJKvQah0t%2F9h2%2FOxcZ10qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGYz3IgkO5bx11jeLyrcA97cPs%2BP1JTZeneS9CzLBPODtMin3KGxPF2ZWGvARMWBSiCMPUwLOG%2B5CtpjmZHcF0wK3ZWNvEoqZ3Gct5gwU0235vsxchFdgd9s1E%2Fs2k%2BJ7MNVHr58gbkvgevVlAF8%2FWtf5rWwcdL6whU%2BOv5yULEEZ3VNSc73tPKxEXgs%2FTN8eyG2rZc0UT4kIFYTsbyXXchF6as89z5RnwBNSao8tmtVtF8oRF8e9PsrqViYA2T46KBVpuAJs%2FEcYLeG9ot8nCgY3J3518D0KlBjQwGKCWDuvUzzLL2TpplJEzNUmsvPHIoCKPSohv5lASq%2FX5u4eRv%2FKnupRLenaG%2Bhhjq6wVjkxQeC%2Fm5DFHqnZ9zwPA05NJGSIpoQs4GvEDkDMGMbnedru8DwUnu%2Fzt9LuD7rll1kbs%2Bd84nTLHDTdYGdJ8Lx4cFe8ZPN7yS4KRSshf4nPjoC0SJ64ZZZ0zoC75q4JuxPz29BDry8ZkuLEPuJmJpv6Fx7MQvkrZOZ5fMj46cXqtqspzeF6rM84kFr%2FFJl%2FdVwRbiZpp73tp7h8lxzy2BlXcl71W5fQCQ0GtUvspxuEmE%2BpKez3tTPTmBPbGaKIOSygVXDD2NBsWODyhFKWNGv%2FIWZFR%2B1ewp6P9ZBMI%2F61cQGOqUBhPtA6Twp4kacvl9mE3LUixMr8%2BUEF%2F%2FijUJZMQidQTH2ed1of4SFD9zrL0rU47RogKdZX2A33r1POdBp%2FoKX39Dg%2F3uHfiETXZDMzB5f2KzTdOUBlJXLEgUabGeJGItIIxMKqYOZvx6BowcbshFYXsbpppCoUJAx%2BppgI5Wdchvy8HIJlx%2Bc9ePuaBdTqRGzZx%2FUOTMjUDf8WcEx4nzcOBjNtQex&X-Amz-Signature=b7b9ab285904b941024c8c470d586e4021b9c20362e7f381067c34f812c9bbfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZFOG2VC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQC2oZg5ASuPdNQyQxo3wfQldbn1AFEH47KI321k%2BwaR4gIhAIqSelfhqXHHjHhliFTTmIW400FBw3mpqSC9c5kspW1AKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzljf3OekmY6H9n2eIq3AMapC4UJ%2BjiPP4qtQQ6lbXsNniVcjBjWg5UF0%2FCivtBeFv92cZDjDSSs7hfI%2BbW1jkVRFGXENEMa8VwHCWCqjTo2gPCyypMpMazMjYPI5u%2FyzAoblCBMpem5W7yxDdyWK%2Fpo5dalaUTCJdEFDb3RyHTuLNeTTXPXJRi6hlgKi5dyfAbKuzETe19BEfI%2BThCvD81Zqixh%2FUJwSKtvoj7gvNXhzAkWacksOmW8ejLi%2BmFLbOjxQH6g%2FqUnl%2Flk4J1ovnLGb0GRanYVmmm1Vu0ijxzslNVTF95LXq2NiLOtzfnZE34BRKoaldGiMCIHDsnXmC7ghrmQtAiIBnIBTtfY8bJq0AUUd2oyHU%2BNScVrYCTgyWs2MaDHY%2Bir1VE3Vt8QlybdY8770LPUz0n%2FTT0uW89k8xGpUHwb6atUIjzOEXntuCqeW9cKisvJL%2BVkM4RNxDui57GFL%2FmizgxAtCD2LHUxFio%2FwiyuWueTBbaIVqjC0aTqbXzCCxcWT4G1od2mLchKL1SWv%2FzxHt4hPaNUVtK%2BBDhRScPKPhTWJf6krgjoZDHMfSdYQtIt%2BZrBfmmNjNvQLfwmDFt4mQd%2BRsXZyn9NU2xOCPFVhXklx6bQh3dmm5m0ftgMPlY%2BrChczD0%2BtXEBjqkASu5HBJRcNMPO9UbNT0o5bkWBUIgBhy3KJ4Cjpph9JlAL3Y9mYjhukqjQ2aJW4BMEPDo9m4QK30i2JnAG%2FfGnoVvtzeXmuc%2B7BxDIySI%2B88T30qD1gsZ3sPquD7nx8zcuVenR8pjKx6kDXd1apoKLy8FbqC8cPId%2F%2Bd4R4%2Fw%2FHZItXQ2hbrjPPgQs5NENdCSSTB0BPcGOkujlk6cK7msxFYHGUK%2F&X-Amz-Signature=46fed8290e1076212d1ef1d0da80c7d75f77a8fecfb331c5b049646f895205a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZFOG2VC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQC2oZg5ASuPdNQyQxo3wfQldbn1AFEH47KI321k%2BwaR4gIhAIqSelfhqXHHjHhliFTTmIW400FBw3mpqSC9c5kspW1AKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzljf3OekmY6H9n2eIq3AMapC4UJ%2BjiPP4qtQQ6lbXsNniVcjBjWg5UF0%2FCivtBeFv92cZDjDSSs7hfI%2BbW1jkVRFGXENEMa8VwHCWCqjTo2gPCyypMpMazMjYPI5u%2FyzAoblCBMpem5W7yxDdyWK%2Fpo5dalaUTCJdEFDb3RyHTuLNeTTXPXJRi6hlgKi5dyfAbKuzETe19BEfI%2BThCvD81Zqixh%2FUJwSKtvoj7gvNXhzAkWacksOmW8ejLi%2BmFLbOjxQH6g%2FqUnl%2Flk4J1ovnLGb0GRanYVmmm1Vu0ijxzslNVTF95LXq2NiLOtzfnZE34BRKoaldGiMCIHDsnXmC7ghrmQtAiIBnIBTtfY8bJq0AUUd2oyHU%2BNScVrYCTgyWs2MaDHY%2Bir1VE3Vt8QlybdY8770LPUz0n%2FTT0uW89k8xGpUHwb6atUIjzOEXntuCqeW9cKisvJL%2BVkM4RNxDui57GFL%2FmizgxAtCD2LHUxFio%2FwiyuWueTBbaIVqjC0aTqbXzCCxcWT4G1od2mLchKL1SWv%2FzxHt4hPaNUVtK%2BBDhRScPKPhTWJf6krgjoZDHMfSdYQtIt%2BZrBfmmNjNvQLfwmDFt4mQd%2BRsXZyn9NU2xOCPFVhXklx6bQh3dmm5m0ftgMPlY%2BrChczD0%2BtXEBjqkASu5HBJRcNMPO9UbNT0o5bkWBUIgBhy3KJ4Cjpph9JlAL3Y9mYjhukqjQ2aJW4BMEPDo9m4QK30i2JnAG%2FfGnoVvtzeXmuc%2B7BxDIySI%2B88T30qD1gsZ3sPquD7nx8zcuVenR8pjKx6kDXd1apoKLy8FbqC8cPId%2F%2Bd4R4%2Fw%2FHZItXQ2hbrjPPgQs5NENdCSSTB0BPcGOkujlk6cK7msxFYHGUK%2F&X-Amz-Signature=7f30371292280c7d5a591b1c50171dfeb1ed3e9be8d37de09444c94ffd2daade&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZFOG2VC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQC2oZg5ASuPdNQyQxo3wfQldbn1AFEH47KI321k%2BwaR4gIhAIqSelfhqXHHjHhliFTTmIW400FBw3mpqSC9c5kspW1AKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzljf3OekmY6H9n2eIq3AMapC4UJ%2BjiPP4qtQQ6lbXsNniVcjBjWg5UF0%2FCivtBeFv92cZDjDSSs7hfI%2BbW1jkVRFGXENEMa8VwHCWCqjTo2gPCyypMpMazMjYPI5u%2FyzAoblCBMpem5W7yxDdyWK%2Fpo5dalaUTCJdEFDb3RyHTuLNeTTXPXJRi6hlgKi5dyfAbKuzETe19BEfI%2BThCvD81Zqixh%2FUJwSKtvoj7gvNXhzAkWacksOmW8ejLi%2BmFLbOjxQH6g%2FqUnl%2Flk4J1ovnLGb0GRanYVmmm1Vu0ijxzslNVTF95LXq2NiLOtzfnZE34BRKoaldGiMCIHDsnXmC7ghrmQtAiIBnIBTtfY8bJq0AUUd2oyHU%2BNScVrYCTgyWs2MaDHY%2Bir1VE3Vt8QlybdY8770LPUz0n%2FTT0uW89k8xGpUHwb6atUIjzOEXntuCqeW9cKisvJL%2BVkM4RNxDui57GFL%2FmizgxAtCD2LHUxFio%2FwiyuWueTBbaIVqjC0aTqbXzCCxcWT4G1od2mLchKL1SWv%2FzxHt4hPaNUVtK%2BBDhRScPKPhTWJf6krgjoZDHMfSdYQtIt%2BZrBfmmNjNvQLfwmDFt4mQd%2BRsXZyn9NU2xOCPFVhXklx6bQh3dmm5m0ftgMPlY%2BrChczD0%2BtXEBjqkASu5HBJRcNMPO9UbNT0o5bkWBUIgBhy3KJ4Cjpph9JlAL3Y9mYjhukqjQ2aJW4BMEPDo9m4QK30i2JnAG%2FfGnoVvtzeXmuc%2B7BxDIySI%2B88T30qD1gsZ3sPquD7nx8zcuVenR8pjKx6kDXd1apoKLy8FbqC8cPId%2F%2Bd4R4%2Fw%2FHZItXQ2hbrjPPgQs5NENdCSSTB0BPcGOkujlk6cK7msxFYHGUK%2F&X-Amz-Signature=7411213ddb06783404f36905e264b42843ef6e106a4389c830d26168ff14215e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZFOG2VC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQC2oZg5ASuPdNQyQxo3wfQldbn1AFEH47KI321k%2BwaR4gIhAIqSelfhqXHHjHhliFTTmIW400FBw3mpqSC9c5kspW1AKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzljf3OekmY6H9n2eIq3AMapC4UJ%2BjiPP4qtQQ6lbXsNniVcjBjWg5UF0%2FCivtBeFv92cZDjDSSs7hfI%2BbW1jkVRFGXENEMa8VwHCWCqjTo2gPCyypMpMazMjYPI5u%2FyzAoblCBMpem5W7yxDdyWK%2Fpo5dalaUTCJdEFDb3RyHTuLNeTTXPXJRi6hlgKi5dyfAbKuzETe19BEfI%2BThCvD81Zqixh%2FUJwSKtvoj7gvNXhzAkWacksOmW8ejLi%2BmFLbOjxQH6g%2FqUnl%2Flk4J1ovnLGb0GRanYVmmm1Vu0ijxzslNVTF95LXq2NiLOtzfnZE34BRKoaldGiMCIHDsnXmC7ghrmQtAiIBnIBTtfY8bJq0AUUd2oyHU%2BNScVrYCTgyWs2MaDHY%2Bir1VE3Vt8QlybdY8770LPUz0n%2FTT0uW89k8xGpUHwb6atUIjzOEXntuCqeW9cKisvJL%2BVkM4RNxDui57GFL%2FmizgxAtCD2LHUxFio%2FwiyuWueTBbaIVqjC0aTqbXzCCxcWT4G1od2mLchKL1SWv%2FzxHt4hPaNUVtK%2BBDhRScPKPhTWJf6krgjoZDHMfSdYQtIt%2BZrBfmmNjNvQLfwmDFt4mQd%2BRsXZyn9NU2xOCPFVhXklx6bQh3dmm5m0ftgMPlY%2BrChczD0%2BtXEBjqkASu5HBJRcNMPO9UbNT0o5bkWBUIgBhy3KJ4Cjpph9JlAL3Y9mYjhukqjQ2aJW4BMEPDo9m4QK30i2JnAG%2FfGnoVvtzeXmuc%2B7BxDIySI%2B88T30qD1gsZ3sPquD7nx8zcuVenR8pjKx6kDXd1apoKLy8FbqC8cPId%2F%2Bd4R4%2Fw%2FHZItXQ2hbrjPPgQs5NENdCSSTB0BPcGOkujlk6cK7msxFYHGUK%2F&X-Amz-Signature=da4f0279ba6546f8f4e2981435526e0973e05d102f923cd49b54c7a788effda9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZFOG2VC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQC2oZg5ASuPdNQyQxo3wfQldbn1AFEH47KI321k%2BwaR4gIhAIqSelfhqXHHjHhliFTTmIW400FBw3mpqSC9c5kspW1AKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzljf3OekmY6H9n2eIq3AMapC4UJ%2BjiPP4qtQQ6lbXsNniVcjBjWg5UF0%2FCivtBeFv92cZDjDSSs7hfI%2BbW1jkVRFGXENEMa8VwHCWCqjTo2gPCyypMpMazMjYPI5u%2FyzAoblCBMpem5W7yxDdyWK%2Fpo5dalaUTCJdEFDb3RyHTuLNeTTXPXJRi6hlgKi5dyfAbKuzETe19BEfI%2BThCvD81Zqixh%2FUJwSKtvoj7gvNXhzAkWacksOmW8ejLi%2BmFLbOjxQH6g%2FqUnl%2Flk4J1ovnLGb0GRanYVmmm1Vu0ijxzslNVTF95LXq2NiLOtzfnZE34BRKoaldGiMCIHDsnXmC7ghrmQtAiIBnIBTtfY8bJq0AUUd2oyHU%2BNScVrYCTgyWs2MaDHY%2Bir1VE3Vt8QlybdY8770LPUz0n%2FTT0uW89k8xGpUHwb6atUIjzOEXntuCqeW9cKisvJL%2BVkM4RNxDui57GFL%2FmizgxAtCD2LHUxFio%2FwiyuWueTBbaIVqjC0aTqbXzCCxcWT4G1od2mLchKL1SWv%2FzxHt4hPaNUVtK%2BBDhRScPKPhTWJf6krgjoZDHMfSdYQtIt%2BZrBfmmNjNvQLfwmDFt4mQd%2BRsXZyn9NU2xOCPFVhXklx6bQh3dmm5m0ftgMPlY%2BrChczD0%2BtXEBjqkASu5HBJRcNMPO9UbNT0o5bkWBUIgBhy3KJ4Cjpph9JlAL3Y9mYjhukqjQ2aJW4BMEPDo9m4QK30i2JnAG%2FfGnoVvtzeXmuc%2B7BxDIySI%2B88T30qD1gsZ3sPquD7nx8zcuVenR8pjKx6kDXd1apoKLy8FbqC8cPId%2F%2Bd4R4%2Fw%2FHZItXQ2hbrjPPgQs5NENdCSSTB0BPcGOkujlk6cK7msxFYHGUK%2F&X-Amz-Signature=16ba0c53183606a87c24a12885eef8bce130b8616e50426aea5110d6f193679b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZFOG2VC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQC2oZg5ASuPdNQyQxo3wfQldbn1AFEH47KI321k%2BwaR4gIhAIqSelfhqXHHjHhliFTTmIW400FBw3mpqSC9c5kspW1AKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzljf3OekmY6H9n2eIq3AMapC4UJ%2BjiPP4qtQQ6lbXsNniVcjBjWg5UF0%2FCivtBeFv92cZDjDSSs7hfI%2BbW1jkVRFGXENEMa8VwHCWCqjTo2gPCyypMpMazMjYPI5u%2FyzAoblCBMpem5W7yxDdyWK%2Fpo5dalaUTCJdEFDb3RyHTuLNeTTXPXJRi6hlgKi5dyfAbKuzETe19BEfI%2BThCvD81Zqixh%2FUJwSKtvoj7gvNXhzAkWacksOmW8ejLi%2BmFLbOjxQH6g%2FqUnl%2Flk4J1ovnLGb0GRanYVmmm1Vu0ijxzslNVTF95LXq2NiLOtzfnZE34BRKoaldGiMCIHDsnXmC7ghrmQtAiIBnIBTtfY8bJq0AUUd2oyHU%2BNScVrYCTgyWs2MaDHY%2Bir1VE3Vt8QlybdY8770LPUz0n%2FTT0uW89k8xGpUHwb6atUIjzOEXntuCqeW9cKisvJL%2BVkM4RNxDui57GFL%2FmizgxAtCD2LHUxFio%2FwiyuWueTBbaIVqjC0aTqbXzCCxcWT4G1od2mLchKL1SWv%2FzxHt4hPaNUVtK%2BBDhRScPKPhTWJf6krgjoZDHMfSdYQtIt%2BZrBfmmNjNvQLfwmDFt4mQd%2BRsXZyn9NU2xOCPFVhXklx6bQh3dmm5m0ftgMPlY%2BrChczD0%2BtXEBjqkASu5HBJRcNMPO9UbNT0o5bkWBUIgBhy3KJ4Cjpph9JlAL3Y9mYjhukqjQ2aJW4BMEPDo9m4QK30i2JnAG%2FfGnoVvtzeXmuc%2B7BxDIySI%2B88T30qD1gsZ3sPquD7nx8zcuVenR8pjKx6kDXd1apoKLy8FbqC8cPId%2F%2Bd4R4%2Fw%2FHZItXQ2hbrjPPgQs5NENdCSSTB0BPcGOkujlk6cK7msxFYHGUK%2F&X-Amz-Signature=838907f6f7db81d93c55c8d6c4e21e52c741fdad5b4c807c24f413893849e811&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZFOG2VC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQC2oZg5ASuPdNQyQxo3wfQldbn1AFEH47KI321k%2BwaR4gIhAIqSelfhqXHHjHhliFTTmIW400FBw3mpqSC9c5kspW1AKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzljf3OekmY6H9n2eIq3AMapC4UJ%2BjiPP4qtQQ6lbXsNniVcjBjWg5UF0%2FCivtBeFv92cZDjDSSs7hfI%2BbW1jkVRFGXENEMa8VwHCWCqjTo2gPCyypMpMazMjYPI5u%2FyzAoblCBMpem5W7yxDdyWK%2Fpo5dalaUTCJdEFDb3RyHTuLNeTTXPXJRi6hlgKi5dyfAbKuzETe19BEfI%2BThCvD81Zqixh%2FUJwSKtvoj7gvNXhzAkWacksOmW8ejLi%2BmFLbOjxQH6g%2FqUnl%2Flk4J1ovnLGb0GRanYVmmm1Vu0ijxzslNVTF95LXq2NiLOtzfnZE34BRKoaldGiMCIHDsnXmC7ghrmQtAiIBnIBTtfY8bJq0AUUd2oyHU%2BNScVrYCTgyWs2MaDHY%2Bir1VE3Vt8QlybdY8770LPUz0n%2FTT0uW89k8xGpUHwb6atUIjzOEXntuCqeW9cKisvJL%2BVkM4RNxDui57GFL%2FmizgxAtCD2LHUxFio%2FwiyuWueTBbaIVqjC0aTqbXzCCxcWT4G1od2mLchKL1SWv%2FzxHt4hPaNUVtK%2BBDhRScPKPhTWJf6krgjoZDHMfSdYQtIt%2BZrBfmmNjNvQLfwmDFt4mQd%2BRsXZyn9NU2xOCPFVhXklx6bQh3dmm5m0ftgMPlY%2BrChczD0%2BtXEBjqkASu5HBJRcNMPO9UbNT0o5bkWBUIgBhy3KJ4Cjpph9JlAL3Y9mYjhukqjQ2aJW4BMEPDo9m4QK30i2JnAG%2FfGnoVvtzeXmuc%2B7BxDIySI%2B88T30qD1gsZ3sPquD7nx8zcuVenR8pjKx6kDXd1apoKLy8FbqC8cPId%2F%2Bd4R4%2Fw%2FHZItXQ2hbrjPPgQs5NENdCSSTB0BPcGOkujlk6cK7msxFYHGUK%2F&X-Amz-Signature=53e7064e78710d4257cda0394110ebd6c0d363e66743eb1aca00d7fc8d1fbaf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZFOG2VC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQC2oZg5ASuPdNQyQxo3wfQldbn1AFEH47KI321k%2BwaR4gIhAIqSelfhqXHHjHhliFTTmIW400FBw3mpqSC9c5kspW1AKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzljf3OekmY6H9n2eIq3AMapC4UJ%2BjiPP4qtQQ6lbXsNniVcjBjWg5UF0%2FCivtBeFv92cZDjDSSs7hfI%2BbW1jkVRFGXENEMa8VwHCWCqjTo2gPCyypMpMazMjYPI5u%2FyzAoblCBMpem5W7yxDdyWK%2Fpo5dalaUTCJdEFDb3RyHTuLNeTTXPXJRi6hlgKi5dyfAbKuzETe19BEfI%2BThCvD81Zqixh%2FUJwSKtvoj7gvNXhzAkWacksOmW8ejLi%2BmFLbOjxQH6g%2FqUnl%2Flk4J1ovnLGb0GRanYVmmm1Vu0ijxzslNVTF95LXq2NiLOtzfnZE34BRKoaldGiMCIHDsnXmC7ghrmQtAiIBnIBTtfY8bJq0AUUd2oyHU%2BNScVrYCTgyWs2MaDHY%2Bir1VE3Vt8QlybdY8770LPUz0n%2FTT0uW89k8xGpUHwb6atUIjzOEXntuCqeW9cKisvJL%2BVkM4RNxDui57GFL%2FmizgxAtCD2LHUxFio%2FwiyuWueTBbaIVqjC0aTqbXzCCxcWT4G1od2mLchKL1SWv%2FzxHt4hPaNUVtK%2BBDhRScPKPhTWJf6krgjoZDHMfSdYQtIt%2BZrBfmmNjNvQLfwmDFt4mQd%2BRsXZyn9NU2xOCPFVhXklx6bQh3dmm5m0ftgMPlY%2BrChczD0%2BtXEBjqkASu5HBJRcNMPO9UbNT0o5bkWBUIgBhy3KJ4Cjpph9JlAL3Y9mYjhukqjQ2aJW4BMEPDo9m4QK30i2JnAG%2FfGnoVvtzeXmuc%2B7BxDIySI%2B88T30qD1gsZ3sPquD7nx8zcuVenR8pjKx6kDXd1apoKLy8FbqC8cPId%2F%2Bd4R4%2Fw%2FHZItXQ2hbrjPPgQs5NENdCSSTB0BPcGOkujlk6cK7msxFYHGUK%2F&X-Amz-Signature=4d205e556df952c0c827b80ed1a45e36a52384789a1ab33bd8c44a9cf0aa9687&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZFOG2VC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQC2oZg5ASuPdNQyQxo3wfQldbn1AFEH47KI321k%2BwaR4gIhAIqSelfhqXHHjHhliFTTmIW400FBw3mpqSC9c5kspW1AKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzljf3OekmY6H9n2eIq3AMapC4UJ%2BjiPP4qtQQ6lbXsNniVcjBjWg5UF0%2FCivtBeFv92cZDjDSSs7hfI%2BbW1jkVRFGXENEMa8VwHCWCqjTo2gPCyypMpMazMjYPI5u%2FyzAoblCBMpem5W7yxDdyWK%2Fpo5dalaUTCJdEFDb3RyHTuLNeTTXPXJRi6hlgKi5dyfAbKuzETe19BEfI%2BThCvD81Zqixh%2FUJwSKtvoj7gvNXhzAkWacksOmW8ejLi%2BmFLbOjxQH6g%2FqUnl%2Flk4J1ovnLGb0GRanYVmmm1Vu0ijxzslNVTF95LXq2NiLOtzfnZE34BRKoaldGiMCIHDsnXmC7ghrmQtAiIBnIBTtfY8bJq0AUUd2oyHU%2BNScVrYCTgyWs2MaDHY%2Bir1VE3Vt8QlybdY8770LPUz0n%2FTT0uW89k8xGpUHwb6atUIjzOEXntuCqeW9cKisvJL%2BVkM4RNxDui57GFL%2FmizgxAtCD2LHUxFio%2FwiyuWueTBbaIVqjC0aTqbXzCCxcWT4G1od2mLchKL1SWv%2FzxHt4hPaNUVtK%2BBDhRScPKPhTWJf6krgjoZDHMfSdYQtIt%2BZrBfmmNjNvQLfwmDFt4mQd%2BRsXZyn9NU2xOCPFVhXklx6bQh3dmm5m0ftgMPlY%2BrChczD0%2BtXEBjqkASu5HBJRcNMPO9UbNT0o5bkWBUIgBhy3KJ4Cjpph9JlAL3Y9mYjhukqjQ2aJW4BMEPDo9m4QK30i2JnAG%2FfGnoVvtzeXmuc%2B7BxDIySI%2B88T30qD1gsZ3sPquD7nx8zcuVenR8pjKx6kDXd1apoKLy8FbqC8cPId%2F%2Bd4R4%2Fw%2FHZItXQ2hbrjPPgQs5NENdCSSTB0BPcGOkujlk6cK7msxFYHGUK%2F&X-Amz-Signature=2c9b5a4a2c4f92913da67afd64fe1dfe1bab1fda64a8e9a68c195b4d24d7892f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZFOG2VC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQC2oZg5ASuPdNQyQxo3wfQldbn1AFEH47KI321k%2BwaR4gIhAIqSelfhqXHHjHhliFTTmIW400FBw3mpqSC9c5kspW1AKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzljf3OekmY6H9n2eIq3AMapC4UJ%2BjiPP4qtQQ6lbXsNniVcjBjWg5UF0%2FCivtBeFv92cZDjDSSs7hfI%2BbW1jkVRFGXENEMa8VwHCWCqjTo2gPCyypMpMazMjYPI5u%2FyzAoblCBMpem5W7yxDdyWK%2Fpo5dalaUTCJdEFDb3RyHTuLNeTTXPXJRi6hlgKi5dyfAbKuzETe19BEfI%2BThCvD81Zqixh%2FUJwSKtvoj7gvNXhzAkWacksOmW8ejLi%2BmFLbOjxQH6g%2FqUnl%2Flk4J1ovnLGb0GRanYVmmm1Vu0ijxzslNVTF95LXq2NiLOtzfnZE34BRKoaldGiMCIHDsnXmC7ghrmQtAiIBnIBTtfY8bJq0AUUd2oyHU%2BNScVrYCTgyWs2MaDHY%2Bir1VE3Vt8QlybdY8770LPUz0n%2FTT0uW89k8xGpUHwb6atUIjzOEXntuCqeW9cKisvJL%2BVkM4RNxDui57GFL%2FmizgxAtCD2LHUxFio%2FwiyuWueTBbaIVqjC0aTqbXzCCxcWT4G1od2mLchKL1SWv%2FzxHt4hPaNUVtK%2BBDhRScPKPhTWJf6krgjoZDHMfSdYQtIt%2BZrBfmmNjNvQLfwmDFt4mQd%2BRsXZyn9NU2xOCPFVhXklx6bQh3dmm5m0ftgMPlY%2BrChczD0%2BtXEBjqkASu5HBJRcNMPO9UbNT0o5bkWBUIgBhy3KJ4Cjpph9JlAL3Y9mYjhukqjQ2aJW4BMEPDo9m4QK30i2JnAG%2FfGnoVvtzeXmuc%2B7BxDIySI%2B88T30qD1gsZ3sPquD7nx8zcuVenR8pjKx6kDXd1apoKLy8FbqC8cPId%2F%2Bd4R4%2Fw%2FHZItXQ2hbrjPPgQs5NENdCSSTB0BPcGOkujlk6cK7msxFYHGUK%2F&X-Amz-Signature=da4f0279ba6546f8f4e2981435526e0973e05d102f923cd49b54c7a788effda9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
