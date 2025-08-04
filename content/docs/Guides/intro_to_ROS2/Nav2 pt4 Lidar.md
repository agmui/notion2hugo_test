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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XER4DBM5%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T092013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQD40T7yyomgS2%2FcgMsoKRAh4DDY36S4KVsxy0p9IrmVmQIhAM0EdhQDzatCIH%2FqENJ5FdWTxdl%2FZgT6prS69APWNXKfKv8DCEEQABoMNjM3NDIzMTgzODA1Igz2qjlULNSSA8Zzr1Uq3AN%2F9Q9euh470sRoL%2FiN0qHtaWWtdsgVqkyUwT%2F9bEhwYUBkKMxoTTn1DFNWCo1TqD7gvaPT%2FnCPVMj8yP10B0%2FMaTwCFjdmSOHJh7mW2AN1QnLtMMbXXyUVcinSvqT7Mo9%2FlDPNXdD7H9RH7FUBXy1wB60wnY4jqHY6ihrgHgDcDw45i7m%2B%2Fq3x%2FHgzWaC6nFvJ2U3kRpj1ndOBon1gJSjmkJ%2FZTEx6WTzjyMMGB7h4YIbfIvIvcvb29M8IkQpnYfkU0SrSKJWXlG%2FMR963USFebJqknduMGbWQak2B9qwn%2F48Oo7TnLnW2rnnbkUEGUfIq1sERQi%2F2SnshiUR97PjmNG%2BFt3o2j4W%2F7%2Fukw2wOpt5cUONMr3d252rqKT%2BLoF2K0N8p9SHVLXbj2ONvLTa5o7ZSnLlkNHPHr5i4qL1uMPZLB%2BBk55OjxzOL%2BOb02ge5kuO6gfbIXxJceD%2BK5bE%2BWfFI%2BJ65ONLlTkHhadYJacKSVK5AhZwL2%2B56YGTE98fzQoJf%2FfrNW23eGHeplm9SmKUS20YujeMl%2F%2Fa2yq6EDTuld0%2F8PIsegst%2FdBqn7EINj%2F1yL0%2BFW8Rq%2BNixoZZTzsu8xtVCE1nRzYwgRQW5WCTj8BLp%2F6VR9BO%2B4zCk3MHEBjqkAQ2TVRXhkpLZV0NVJVdwS8AI0p%2B%2Fub1ucZWc9yWPW%2BBy2KFfWCkjq7SEnqUN73h1xjc8ea%2Bzm%2F3A7jgxw2mLLOK4s%2FxAsuyibpJ2uvMtTwJyPouVJFKNP2cY1bbNvZM5E%2BwR%2B0VftjvDhc9%2B0c7TmvrFqisGWo4zS6%2FHy%2BIU96MpkOVYLDXYQ48duAIofnP9kjyrDvHGhWeWfi40EnEhtjU1k05E&X-Amz-Signature=c6bb9ed81f15223c43a3ea62a44d9791d9bbc56a50664d2ff41c3c6465e27323&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC32OPXE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T092000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIFJWE9BaDoxAW%2FxtHWHSIoNZ%2Bl%2FNpdM8zl8USj3jPIHYAiEAoA7hZbe89ALZjd4eT9RVO0sznDAjLja5zVu1JVW9OXMq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDDaI33hMAi1SuYXSDCrcA9IuNSsTHz52pDjiEW3iDQAwH8ZIsjr98M2N%2FMsaJq4S93cw7w81UhlR7IXSrVzOjP7iX2acQsCpRSVFxdwbUnLthpuPSdSYAoynbMlf8eJZZOXP7YzCP%2FAMXQKGkXcxCvDOFdQX2rwwpoZ4HKFPHAGyYod5sIOpQwsBoq97wJodyc2Av8c90UDuLDwzHDey8zMmBlcAIMRuHvl6E4uscywTupb22mUSEpoXVPlR%2FcRGzjtRpIf6efQeQrNcBybJi0muEjF2LiBxyGgi%2F9mkv2u0hjaOzvvfo8AjYiLQeua7jX2n83YPvc%2FG8rDmtUAi4A%2FM7RcfARQJFAXSUgHNmPJdpY3CMvhsHnA%2F3VEqxc%2BU5z5CqIgE98xYxIblnrqP8tjRoG5pKKFKZdFCOnSkzKyt1aW%2BSaecheSgTbXyvRb0F0tTMJ1o%2BqSJo%2FGO8%2Bpj5fM3pNRw2drBldq2ULtHhOhvJmkJitF22k5%2FroMIiAry%2FESfoBKOvlbQNv4TbQW1dIquKZ3E8aawo7W3i92EaTiAx%2FZwS01suzbjEY%2FOiiZrVmebCbEMxaSfT9MMkopoQL67zSs6m8plMEv2ettzI72160ZKb5bjfAUqTrD4W5e6xvJO8LsUc1hjGE5wMIrdwcQGOqUBJPJUT7eQG6mjwJsQmHe%2BB2jed8lSVDAIP7IqBxJzXQQitvMC7cJBP4sYxZo2TGPzfN%2Fa%2BQ2L74WusCllFjJGIhOcqUIDx%2B1lUJ4FyVxTNGjb2TAJrTmAvKFSZTnKui6OkaXGMzb7ezGoR2RAvhU1eiX0eAOzUCBvu0YsiQ%2BkpSJtMUdzvdCG8t%2BcjoXT71GJ3xKo%2F%2B2XPmNI3IVZJgB7WVKjLMsz&X-Amz-Signature=203db8a91758d985d7f9590f97d6e97ca949329d3b287c850b98c0ead9c298d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC32OPXE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T092000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIFJWE9BaDoxAW%2FxtHWHSIoNZ%2Bl%2FNpdM8zl8USj3jPIHYAiEAoA7hZbe89ALZjd4eT9RVO0sznDAjLja5zVu1JVW9OXMq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDDaI33hMAi1SuYXSDCrcA9IuNSsTHz52pDjiEW3iDQAwH8ZIsjr98M2N%2FMsaJq4S93cw7w81UhlR7IXSrVzOjP7iX2acQsCpRSVFxdwbUnLthpuPSdSYAoynbMlf8eJZZOXP7YzCP%2FAMXQKGkXcxCvDOFdQX2rwwpoZ4HKFPHAGyYod5sIOpQwsBoq97wJodyc2Av8c90UDuLDwzHDey8zMmBlcAIMRuHvl6E4uscywTupb22mUSEpoXVPlR%2FcRGzjtRpIf6efQeQrNcBybJi0muEjF2LiBxyGgi%2F9mkv2u0hjaOzvvfo8AjYiLQeua7jX2n83YPvc%2FG8rDmtUAi4A%2FM7RcfARQJFAXSUgHNmPJdpY3CMvhsHnA%2F3VEqxc%2BU5z5CqIgE98xYxIblnrqP8tjRoG5pKKFKZdFCOnSkzKyt1aW%2BSaecheSgTbXyvRb0F0tTMJ1o%2BqSJo%2FGO8%2Bpj5fM3pNRw2drBldq2ULtHhOhvJmkJitF22k5%2FroMIiAry%2FESfoBKOvlbQNv4TbQW1dIquKZ3E8aawo7W3i92EaTiAx%2FZwS01suzbjEY%2FOiiZrVmebCbEMxaSfT9MMkopoQL67zSs6m8plMEv2ettzI72160ZKb5bjfAUqTrD4W5e6xvJO8LsUc1hjGE5wMIrdwcQGOqUBJPJUT7eQG6mjwJsQmHe%2BB2jed8lSVDAIP7IqBxJzXQQitvMC7cJBP4sYxZo2TGPzfN%2Fa%2BQ2L74WusCllFjJGIhOcqUIDx%2B1lUJ4FyVxTNGjb2TAJrTmAvKFSZTnKui6OkaXGMzb7ezGoR2RAvhU1eiX0eAOzUCBvu0YsiQ%2BkpSJtMUdzvdCG8t%2BcjoXT71GJ3xKo%2F%2B2XPmNI3IVZJgB7WVKjLMsz&X-Amz-Signature=faa263cc51fd2f05bbe3b97c81724dc799da93210644c441df0caaf0c108e5c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC32OPXE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T092000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIFJWE9BaDoxAW%2FxtHWHSIoNZ%2Bl%2FNpdM8zl8USj3jPIHYAiEAoA7hZbe89ALZjd4eT9RVO0sznDAjLja5zVu1JVW9OXMq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDDaI33hMAi1SuYXSDCrcA9IuNSsTHz52pDjiEW3iDQAwH8ZIsjr98M2N%2FMsaJq4S93cw7w81UhlR7IXSrVzOjP7iX2acQsCpRSVFxdwbUnLthpuPSdSYAoynbMlf8eJZZOXP7YzCP%2FAMXQKGkXcxCvDOFdQX2rwwpoZ4HKFPHAGyYod5sIOpQwsBoq97wJodyc2Av8c90UDuLDwzHDey8zMmBlcAIMRuHvl6E4uscywTupb22mUSEpoXVPlR%2FcRGzjtRpIf6efQeQrNcBybJi0muEjF2LiBxyGgi%2F9mkv2u0hjaOzvvfo8AjYiLQeua7jX2n83YPvc%2FG8rDmtUAi4A%2FM7RcfARQJFAXSUgHNmPJdpY3CMvhsHnA%2F3VEqxc%2BU5z5CqIgE98xYxIblnrqP8tjRoG5pKKFKZdFCOnSkzKyt1aW%2BSaecheSgTbXyvRb0F0tTMJ1o%2BqSJo%2FGO8%2Bpj5fM3pNRw2drBldq2ULtHhOhvJmkJitF22k5%2FroMIiAry%2FESfoBKOvlbQNv4TbQW1dIquKZ3E8aawo7W3i92EaTiAx%2FZwS01suzbjEY%2FOiiZrVmebCbEMxaSfT9MMkopoQL67zSs6m8plMEv2ettzI72160ZKb5bjfAUqTrD4W5e6xvJO8LsUc1hjGE5wMIrdwcQGOqUBJPJUT7eQG6mjwJsQmHe%2BB2jed8lSVDAIP7IqBxJzXQQitvMC7cJBP4sYxZo2TGPzfN%2Fa%2BQ2L74WusCllFjJGIhOcqUIDx%2B1lUJ4FyVxTNGjb2TAJrTmAvKFSZTnKui6OkaXGMzb7ezGoR2RAvhU1eiX0eAOzUCBvu0YsiQ%2BkpSJtMUdzvdCG8t%2BcjoXT71GJ3xKo%2F%2B2XPmNI3IVZJgB7WVKjLMsz&X-Amz-Signature=0c7361c07c17465f8ef89b1d0c4a7640a6dfb62172c7a327a64b0687ef52fa3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC32OPXE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T092000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIFJWE9BaDoxAW%2FxtHWHSIoNZ%2Bl%2FNpdM8zl8USj3jPIHYAiEAoA7hZbe89ALZjd4eT9RVO0sznDAjLja5zVu1JVW9OXMq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDDaI33hMAi1SuYXSDCrcA9IuNSsTHz52pDjiEW3iDQAwH8ZIsjr98M2N%2FMsaJq4S93cw7w81UhlR7IXSrVzOjP7iX2acQsCpRSVFxdwbUnLthpuPSdSYAoynbMlf8eJZZOXP7YzCP%2FAMXQKGkXcxCvDOFdQX2rwwpoZ4HKFPHAGyYod5sIOpQwsBoq97wJodyc2Av8c90UDuLDwzHDey8zMmBlcAIMRuHvl6E4uscywTupb22mUSEpoXVPlR%2FcRGzjtRpIf6efQeQrNcBybJi0muEjF2LiBxyGgi%2F9mkv2u0hjaOzvvfo8AjYiLQeua7jX2n83YPvc%2FG8rDmtUAi4A%2FM7RcfARQJFAXSUgHNmPJdpY3CMvhsHnA%2F3VEqxc%2BU5z5CqIgE98xYxIblnrqP8tjRoG5pKKFKZdFCOnSkzKyt1aW%2BSaecheSgTbXyvRb0F0tTMJ1o%2BqSJo%2FGO8%2Bpj5fM3pNRw2drBldq2ULtHhOhvJmkJitF22k5%2FroMIiAry%2FESfoBKOvlbQNv4TbQW1dIquKZ3E8aawo7W3i92EaTiAx%2FZwS01suzbjEY%2FOiiZrVmebCbEMxaSfT9MMkopoQL67zSs6m8plMEv2ettzI72160ZKb5bjfAUqTrD4W5e6xvJO8LsUc1hjGE5wMIrdwcQGOqUBJPJUT7eQG6mjwJsQmHe%2BB2jed8lSVDAIP7IqBxJzXQQitvMC7cJBP4sYxZo2TGPzfN%2Fa%2BQ2L74WusCllFjJGIhOcqUIDx%2B1lUJ4FyVxTNGjb2TAJrTmAvKFSZTnKui6OkaXGMzb7ezGoR2RAvhU1eiX0eAOzUCBvu0YsiQ%2BkpSJtMUdzvdCG8t%2BcjoXT71GJ3xKo%2F%2B2XPmNI3IVZJgB7WVKjLMsz&X-Amz-Signature=d74247a727807d1a1c74e315bc097c65a3f4e901110598e6ebe474c1462769d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC32OPXE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T092000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIFJWE9BaDoxAW%2FxtHWHSIoNZ%2Bl%2FNpdM8zl8USj3jPIHYAiEAoA7hZbe89ALZjd4eT9RVO0sznDAjLja5zVu1JVW9OXMq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDDaI33hMAi1SuYXSDCrcA9IuNSsTHz52pDjiEW3iDQAwH8ZIsjr98M2N%2FMsaJq4S93cw7w81UhlR7IXSrVzOjP7iX2acQsCpRSVFxdwbUnLthpuPSdSYAoynbMlf8eJZZOXP7YzCP%2FAMXQKGkXcxCvDOFdQX2rwwpoZ4HKFPHAGyYod5sIOpQwsBoq97wJodyc2Av8c90UDuLDwzHDey8zMmBlcAIMRuHvl6E4uscywTupb22mUSEpoXVPlR%2FcRGzjtRpIf6efQeQrNcBybJi0muEjF2LiBxyGgi%2F9mkv2u0hjaOzvvfo8AjYiLQeua7jX2n83YPvc%2FG8rDmtUAi4A%2FM7RcfARQJFAXSUgHNmPJdpY3CMvhsHnA%2F3VEqxc%2BU5z5CqIgE98xYxIblnrqP8tjRoG5pKKFKZdFCOnSkzKyt1aW%2BSaecheSgTbXyvRb0F0tTMJ1o%2BqSJo%2FGO8%2Bpj5fM3pNRw2drBldq2ULtHhOhvJmkJitF22k5%2FroMIiAry%2FESfoBKOvlbQNv4TbQW1dIquKZ3E8aawo7W3i92EaTiAx%2FZwS01suzbjEY%2FOiiZrVmebCbEMxaSfT9MMkopoQL67zSs6m8plMEv2ettzI72160ZKb5bjfAUqTrD4W5e6xvJO8LsUc1hjGE5wMIrdwcQGOqUBJPJUT7eQG6mjwJsQmHe%2BB2jed8lSVDAIP7IqBxJzXQQitvMC7cJBP4sYxZo2TGPzfN%2Fa%2BQ2L74WusCllFjJGIhOcqUIDx%2B1lUJ4FyVxTNGjb2TAJrTmAvKFSZTnKui6OkaXGMzb7ezGoR2RAvhU1eiX0eAOzUCBvu0YsiQ%2BkpSJtMUdzvdCG8t%2BcjoXT71GJ3xKo%2F%2B2XPmNI3IVZJgB7WVKjLMsz&X-Amz-Signature=27e10929ad1ddd1278e2881f5ea4f6d342372b78cc7d2ce9520a2fbaa2a2a9bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC32OPXE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T092000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIFJWE9BaDoxAW%2FxtHWHSIoNZ%2Bl%2FNpdM8zl8USj3jPIHYAiEAoA7hZbe89ALZjd4eT9RVO0sznDAjLja5zVu1JVW9OXMq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDDaI33hMAi1SuYXSDCrcA9IuNSsTHz52pDjiEW3iDQAwH8ZIsjr98M2N%2FMsaJq4S93cw7w81UhlR7IXSrVzOjP7iX2acQsCpRSVFxdwbUnLthpuPSdSYAoynbMlf8eJZZOXP7YzCP%2FAMXQKGkXcxCvDOFdQX2rwwpoZ4HKFPHAGyYod5sIOpQwsBoq97wJodyc2Av8c90UDuLDwzHDey8zMmBlcAIMRuHvl6E4uscywTupb22mUSEpoXVPlR%2FcRGzjtRpIf6efQeQrNcBybJi0muEjF2LiBxyGgi%2F9mkv2u0hjaOzvvfo8AjYiLQeua7jX2n83YPvc%2FG8rDmtUAi4A%2FM7RcfARQJFAXSUgHNmPJdpY3CMvhsHnA%2F3VEqxc%2BU5z5CqIgE98xYxIblnrqP8tjRoG5pKKFKZdFCOnSkzKyt1aW%2BSaecheSgTbXyvRb0F0tTMJ1o%2BqSJo%2FGO8%2Bpj5fM3pNRw2drBldq2ULtHhOhvJmkJitF22k5%2FroMIiAry%2FESfoBKOvlbQNv4TbQW1dIquKZ3E8aawo7W3i92EaTiAx%2FZwS01suzbjEY%2FOiiZrVmebCbEMxaSfT9MMkopoQL67zSs6m8plMEv2ettzI72160ZKb5bjfAUqTrD4W5e6xvJO8LsUc1hjGE5wMIrdwcQGOqUBJPJUT7eQG6mjwJsQmHe%2BB2jed8lSVDAIP7IqBxJzXQQitvMC7cJBP4sYxZo2TGPzfN%2Fa%2BQ2L74WusCllFjJGIhOcqUIDx%2B1lUJ4FyVxTNGjb2TAJrTmAvKFSZTnKui6OkaXGMzb7ezGoR2RAvhU1eiX0eAOzUCBvu0YsiQ%2BkpSJtMUdzvdCG8t%2BcjoXT71GJ3xKo%2F%2B2XPmNI3IVZJgB7WVKjLMsz&X-Amz-Signature=a90b213fc24992b2ee5af3cd346e2a5811e209b40c3f51b891eeda6de590d0b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC32OPXE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T092000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIFJWE9BaDoxAW%2FxtHWHSIoNZ%2Bl%2FNpdM8zl8USj3jPIHYAiEAoA7hZbe89ALZjd4eT9RVO0sznDAjLja5zVu1JVW9OXMq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDDaI33hMAi1SuYXSDCrcA9IuNSsTHz52pDjiEW3iDQAwH8ZIsjr98M2N%2FMsaJq4S93cw7w81UhlR7IXSrVzOjP7iX2acQsCpRSVFxdwbUnLthpuPSdSYAoynbMlf8eJZZOXP7YzCP%2FAMXQKGkXcxCvDOFdQX2rwwpoZ4HKFPHAGyYod5sIOpQwsBoq97wJodyc2Av8c90UDuLDwzHDey8zMmBlcAIMRuHvl6E4uscywTupb22mUSEpoXVPlR%2FcRGzjtRpIf6efQeQrNcBybJi0muEjF2LiBxyGgi%2F9mkv2u0hjaOzvvfo8AjYiLQeua7jX2n83YPvc%2FG8rDmtUAi4A%2FM7RcfARQJFAXSUgHNmPJdpY3CMvhsHnA%2F3VEqxc%2BU5z5CqIgE98xYxIblnrqP8tjRoG5pKKFKZdFCOnSkzKyt1aW%2BSaecheSgTbXyvRb0F0tTMJ1o%2BqSJo%2FGO8%2Bpj5fM3pNRw2drBldq2ULtHhOhvJmkJitF22k5%2FroMIiAry%2FESfoBKOvlbQNv4TbQW1dIquKZ3E8aawo7W3i92EaTiAx%2FZwS01suzbjEY%2FOiiZrVmebCbEMxaSfT9MMkopoQL67zSs6m8plMEv2ettzI72160ZKb5bjfAUqTrD4W5e6xvJO8LsUc1hjGE5wMIrdwcQGOqUBJPJUT7eQG6mjwJsQmHe%2BB2jed8lSVDAIP7IqBxJzXQQitvMC7cJBP4sYxZo2TGPzfN%2Fa%2BQ2L74WusCllFjJGIhOcqUIDx%2B1lUJ4FyVxTNGjb2TAJrTmAvKFSZTnKui6OkaXGMzb7ezGoR2RAvhU1eiX0eAOzUCBvu0YsiQ%2BkpSJtMUdzvdCG8t%2BcjoXT71GJ3xKo%2F%2B2XPmNI3IVZJgB7WVKjLMsz&X-Amz-Signature=7f9214fd98bcfe10b46ffb4469f285b0147fc985bd3748ae7e186a4b4bbaae3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC32OPXE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T092000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIFJWE9BaDoxAW%2FxtHWHSIoNZ%2Bl%2FNpdM8zl8USj3jPIHYAiEAoA7hZbe89ALZjd4eT9RVO0sznDAjLja5zVu1JVW9OXMq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDDaI33hMAi1SuYXSDCrcA9IuNSsTHz52pDjiEW3iDQAwH8ZIsjr98M2N%2FMsaJq4S93cw7w81UhlR7IXSrVzOjP7iX2acQsCpRSVFxdwbUnLthpuPSdSYAoynbMlf8eJZZOXP7YzCP%2FAMXQKGkXcxCvDOFdQX2rwwpoZ4HKFPHAGyYod5sIOpQwsBoq97wJodyc2Av8c90UDuLDwzHDey8zMmBlcAIMRuHvl6E4uscywTupb22mUSEpoXVPlR%2FcRGzjtRpIf6efQeQrNcBybJi0muEjF2LiBxyGgi%2F9mkv2u0hjaOzvvfo8AjYiLQeua7jX2n83YPvc%2FG8rDmtUAi4A%2FM7RcfARQJFAXSUgHNmPJdpY3CMvhsHnA%2F3VEqxc%2BU5z5CqIgE98xYxIblnrqP8tjRoG5pKKFKZdFCOnSkzKyt1aW%2BSaecheSgTbXyvRb0F0tTMJ1o%2BqSJo%2FGO8%2Bpj5fM3pNRw2drBldq2ULtHhOhvJmkJitF22k5%2FroMIiAry%2FESfoBKOvlbQNv4TbQW1dIquKZ3E8aawo7W3i92EaTiAx%2FZwS01suzbjEY%2FOiiZrVmebCbEMxaSfT9MMkopoQL67zSs6m8plMEv2ettzI72160ZKb5bjfAUqTrD4W5e6xvJO8LsUc1hjGE5wMIrdwcQGOqUBJPJUT7eQG6mjwJsQmHe%2BB2jed8lSVDAIP7IqBxJzXQQitvMC7cJBP4sYxZo2TGPzfN%2Fa%2BQ2L74WusCllFjJGIhOcqUIDx%2B1lUJ4FyVxTNGjb2TAJrTmAvKFSZTnKui6OkaXGMzb7ezGoR2RAvhU1eiX0eAOzUCBvu0YsiQ%2BkpSJtMUdzvdCG8t%2BcjoXT71GJ3xKo%2F%2B2XPmNI3IVZJgB7WVKjLMsz&X-Amz-Signature=7461087833dc449cdfe35dee950badc921e109836ab90cb1126127cd25165060&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC32OPXE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T092000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIFJWE9BaDoxAW%2FxtHWHSIoNZ%2Bl%2FNpdM8zl8USj3jPIHYAiEAoA7hZbe89ALZjd4eT9RVO0sznDAjLja5zVu1JVW9OXMq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDDaI33hMAi1SuYXSDCrcA9IuNSsTHz52pDjiEW3iDQAwH8ZIsjr98M2N%2FMsaJq4S93cw7w81UhlR7IXSrVzOjP7iX2acQsCpRSVFxdwbUnLthpuPSdSYAoynbMlf8eJZZOXP7YzCP%2FAMXQKGkXcxCvDOFdQX2rwwpoZ4HKFPHAGyYod5sIOpQwsBoq97wJodyc2Av8c90UDuLDwzHDey8zMmBlcAIMRuHvl6E4uscywTupb22mUSEpoXVPlR%2FcRGzjtRpIf6efQeQrNcBybJi0muEjF2LiBxyGgi%2F9mkv2u0hjaOzvvfo8AjYiLQeua7jX2n83YPvc%2FG8rDmtUAi4A%2FM7RcfARQJFAXSUgHNmPJdpY3CMvhsHnA%2F3VEqxc%2BU5z5CqIgE98xYxIblnrqP8tjRoG5pKKFKZdFCOnSkzKyt1aW%2BSaecheSgTbXyvRb0F0tTMJ1o%2BqSJo%2FGO8%2Bpj5fM3pNRw2drBldq2ULtHhOhvJmkJitF22k5%2FroMIiAry%2FESfoBKOvlbQNv4TbQW1dIquKZ3E8aawo7W3i92EaTiAx%2FZwS01suzbjEY%2FOiiZrVmebCbEMxaSfT9MMkopoQL67zSs6m8plMEv2ettzI72160ZKb5bjfAUqTrD4W5e6xvJO8LsUc1hjGE5wMIrdwcQGOqUBJPJUT7eQG6mjwJsQmHe%2BB2jed8lSVDAIP7IqBxJzXQQitvMC7cJBP4sYxZo2TGPzfN%2Fa%2BQ2L74WusCllFjJGIhOcqUIDx%2B1lUJ4FyVxTNGjb2TAJrTmAvKFSZTnKui6OkaXGMzb7ezGoR2RAvhU1eiX0eAOzUCBvu0YsiQ%2BkpSJtMUdzvdCG8t%2BcjoXT71GJ3xKo%2F%2B2XPmNI3IVZJgB7WVKjLMsz&X-Amz-Signature=db4e644ab685e67e4426d545314734bd6fa4e43718dddaf35630cfad1cff873f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC32OPXE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T092000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIFJWE9BaDoxAW%2FxtHWHSIoNZ%2Bl%2FNpdM8zl8USj3jPIHYAiEAoA7hZbe89ALZjd4eT9RVO0sznDAjLja5zVu1JVW9OXMq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDDaI33hMAi1SuYXSDCrcA9IuNSsTHz52pDjiEW3iDQAwH8ZIsjr98M2N%2FMsaJq4S93cw7w81UhlR7IXSrVzOjP7iX2acQsCpRSVFxdwbUnLthpuPSdSYAoynbMlf8eJZZOXP7YzCP%2FAMXQKGkXcxCvDOFdQX2rwwpoZ4HKFPHAGyYod5sIOpQwsBoq97wJodyc2Av8c90UDuLDwzHDey8zMmBlcAIMRuHvl6E4uscywTupb22mUSEpoXVPlR%2FcRGzjtRpIf6efQeQrNcBybJi0muEjF2LiBxyGgi%2F9mkv2u0hjaOzvvfo8AjYiLQeua7jX2n83YPvc%2FG8rDmtUAi4A%2FM7RcfARQJFAXSUgHNmPJdpY3CMvhsHnA%2F3VEqxc%2BU5z5CqIgE98xYxIblnrqP8tjRoG5pKKFKZdFCOnSkzKyt1aW%2BSaecheSgTbXyvRb0F0tTMJ1o%2BqSJo%2FGO8%2Bpj5fM3pNRw2drBldq2ULtHhOhvJmkJitF22k5%2FroMIiAry%2FESfoBKOvlbQNv4TbQW1dIquKZ3E8aawo7W3i92EaTiAx%2FZwS01suzbjEY%2FOiiZrVmebCbEMxaSfT9MMkopoQL67zSs6m8plMEv2ettzI72160ZKb5bjfAUqTrD4W5e6xvJO8LsUc1hjGE5wMIrdwcQGOqUBJPJUT7eQG6mjwJsQmHe%2BB2jed8lSVDAIP7IqBxJzXQQitvMC7cJBP4sYxZo2TGPzfN%2Fa%2BQ2L74WusCllFjJGIhOcqUIDx%2B1lUJ4FyVxTNGjb2TAJrTmAvKFSZTnKui6OkaXGMzb7ezGoR2RAvhU1eiX0eAOzUCBvu0YsiQ%2BkpSJtMUdzvdCG8t%2BcjoXT71GJ3xKo%2F%2B2XPmNI3IVZJgB7WVKjLMsz&X-Amz-Signature=d74247a727807d1a1c74e315bc097c65a3f4e901110598e6ebe474c1462769d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
