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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X43UNXEW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDg%2BdYMP5CS%2FUwhkFf1rtioCF26Ozm7HcwVo7KkBk%2B1NAIgDbLD%2BMORG5OuJmOe1jq%2Fe3H6hH9UttXzQYxgPIN%2FIXIqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2FuzQEOm%2F2KGVOBlSrcA6r%2BB5zVa94xbBjeBgRWx7KgILBnRAnMZz7bWrzw6c7FBuVCY0DTLM5Nenkg8c0G6AJlYjuoeKyIjZ10%2BTHxaQCPSWffz8gQ3I%2Fd521mrQX0i1aRMuSQilZAi%2BypA7uE8MqWh2F%2F1KFd32Uu2b8eJfY7X8CxtLyMNj7%2Bp%2FQj978emV33xEKvPKrw4oxFxu2pFzZpvl1NtsMj3uC2zHDyFoxMDzmd6PULwq4sMzYYPRrSaPVgUIeP32Ii4n%2FfC4K6YMm9N0NqBFeTBOY1dHl1vD4p%2FOf55oxKIGXEv6TD1tHwgdzeKm4NxLAt2gAfLClCmOX55D4EwjMGOKVZJFxKqGQd9NenbcTwikx410%2BFdvN0IORximagwcv2fh43DVychP84nqrRrmm%2BhApI%2BpoDAD1d3MesEX0S7cHAikok8ioRCzqPyEtDhIyAdxjMbfhDi5fh8peQZVkhMXsNFpc2edcLJUjBQn1pzdF8pA6Ndyw3SucoYeLDs4Gj9eB1P2pD71PpXXdfMyIqt17KFGKeGbDOaHVmYW7ZjCHyVe3HP3mSBBBZ7VHimW0R%2FBt5gzXEnF%2BWfINpmDg0d09ij6UjRRUbzXhBn31vbFWS9sm9NEutHNFujj%2BDxnuTk59oMLXE28QGOqUBI17j6pYZMIn9iodbZ7L7p0wjODjHyPhNs6IyQUH5Q44jAdp4h05stUA%2BIbfN6QNuM%2BGp%2BgogkLaO2RY2ye1pe2JoyizZXH%2FBtYUp3%2FxTYIQ3t5YQ9P74%2BzNPy%2BEBlH0qd1FFcVNhMPrNfI%2FAd56qOfVFtIv3n3n%2F2s0yR7BlDYxvWOC59leVs8MihOnznxtJwsDfDPkc%2BZtFmhgILXJJxGH9ml8F&X-Amz-Signature=181c029830709924645c229279f0ed4679bd08b2018a5578691bed0d182dd3d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SGHBXRQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD%2BolBqLX08SpxVBWkYzsDpGRylkOuf5Ij67v5B2bYNtgIgWx1jzDtR3tuop5zNRxdV2bch0PUI1AvmMKO56%2BIkjgIqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPVZcB4vqnXP3p7O1CrcA4YIj77vUlQdlIZz%2FIsHzltPd3qHZTi2sK%2Fa5Zg8j3FFVe%2FSjL%2BoLtF0D%2B7gCvbIuF9lzXjkhG31IzHGTlokZKp9OBgYole81Ra42SRxTv%2FRtdL386tcV30YRKXZHlVVsnzUDqSkiKTZMYL%2F4o75umjZvEfJztuIfLWZcAX5DDsx6z%2FVYEOATudmbSwDUDXZqjbzqr6wQWaGSkCMYjhNYE9bi71Exl9vZgqyF9WwmvYzh0kHOlJUwYWVVfTQjC2sGxOx%2FkbEml%2B1OgVIEMNqIVaMCYhgn9viOCAKkz%2BPoDt6a24%2FTolAMZBoWRDAxMP11vMZkRTJEmbq7xey%2BsykFDAfDhSymlr7zBWY%2Fegzqr%2BXcpu8ecPvWboKeJagXsLFGIjmnlMuu3bzuLVIiyIMNAPABOypnU4L%2Bxq%2BP5pPZ%2Fn4%2FOZkbpIydi3yGKZcboDBHP1a%2BTd1Pc9VLE1B3fOJWnEq1zu72R%2BxYcHeBT0xo4j5I%2BdH51iEgH0MXBzwUUIGsR9zx%2Fsw1SDw7GEY96BcjUd82VRZFJJ52qTB%2F5bG6z86j6%2FRmjnFPf%2Fw0urL9kLVM4xLSgN9xKcvoj%2FhD90bWB%2FhL%2BrGpu3gsMcdj9Vaah3V%2FCp1GBdxuFpe5OFrMIrF28QGOqUBPXLRcwNXaaXo%2FpcPLXyNvqIFuZ5jyuFeCLiaQ3xZwpi3PaIkGpK12jTMlzVs37%2FjXpNkUaxTn1lxFceCH2h9SxH32EUtsXUcPBz7i%2BDnLV7iLolre5j3SXJCO1gSLUEXBqK8qNFce%2FkBK5cRA4ByrHAEEyOoNthtSG6YhhI9yWD6ZGpLbeF7%2F7wgLm%2F%2F4gdeDPes3kf7yS8LaCB9VVfr89snKwra&X-Amz-Signature=4f381cf61fbd5f9ff934d6e721bb52c92f247e8a5dd361d58342387244f3f4af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SGHBXRQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD%2BolBqLX08SpxVBWkYzsDpGRylkOuf5Ij67v5B2bYNtgIgWx1jzDtR3tuop5zNRxdV2bch0PUI1AvmMKO56%2BIkjgIqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPVZcB4vqnXP3p7O1CrcA4YIj77vUlQdlIZz%2FIsHzltPd3qHZTi2sK%2Fa5Zg8j3FFVe%2FSjL%2BoLtF0D%2B7gCvbIuF9lzXjkhG31IzHGTlokZKp9OBgYole81Ra42SRxTv%2FRtdL386tcV30YRKXZHlVVsnzUDqSkiKTZMYL%2F4o75umjZvEfJztuIfLWZcAX5DDsx6z%2FVYEOATudmbSwDUDXZqjbzqr6wQWaGSkCMYjhNYE9bi71Exl9vZgqyF9WwmvYzh0kHOlJUwYWVVfTQjC2sGxOx%2FkbEml%2B1OgVIEMNqIVaMCYhgn9viOCAKkz%2BPoDt6a24%2FTolAMZBoWRDAxMP11vMZkRTJEmbq7xey%2BsykFDAfDhSymlr7zBWY%2Fegzqr%2BXcpu8ecPvWboKeJagXsLFGIjmnlMuu3bzuLVIiyIMNAPABOypnU4L%2Bxq%2BP5pPZ%2Fn4%2FOZkbpIydi3yGKZcboDBHP1a%2BTd1Pc9VLE1B3fOJWnEq1zu72R%2BxYcHeBT0xo4j5I%2BdH51iEgH0MXBzwUUIGsR9zx%2Fsw1SDw7GEY96BcjUd82VRZFJJ52qTB%2F5bG6z86j6%2FRmjnFPf%2Fw0urL9kLVM4xLSgN9xKcvoj%2FhD90bWB%2FhL%2BrGpu3gsMcdj9Vaah3V%2FCp1GBdxuFpe5OFrMIrF28QGOqUBPXLRcwNXaaXo%2FpcPLXyNvqIFuZ5jyuFeCLiaQ3xZwpi3PaIkGpK12jTMlzVs37%2FjXpNkUaxTn1lxFceCH2h9SxH32EUtsXUcPBz7i%2BDnLV7iLolre5j3SXJCO1gSLUEXBqK8qNFce%2FkBK5cRA4ByrHAEEyOoNthtSG6YhhI9yWD6ZGpLbeF7%2F7wgLm%2F%2F4gdeDPes3kf7yS8LaCB9VVfr89snKwra&X-Amz-Signature=bac9f7abd6fa0635b7f80e3e9c4227e1685d14177095cae1958e4497a7148872&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SGHBXRQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD%2BolBqLX08SpxVBWkYzsDpGRylkOuf5Ij67v5B2bYNtgIgWx1jzDtR3tuop5zNRxdV2bch0PUI1AvmMKO56%2BIkjgIqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPVZcB4vqnXP3p7O1CrcA4YIj77vUlQdlIZz%2FIsHzltPd3qHZTi2sK%2Fa5Zg8j3FFVe%2FSjL%2BoLtF0D%2B7gCvbIuF9lzXjkhG31IzHGTlokZKp9OBgYole81Ra42SRxTv%2FRtdL386tcV30YRKXZHlVVsnzUDqSkiKTZMYL%2F4o75umjZvEfJztuIfLWZcAX5DDsx6z%2FVYEOATudmbSwDUDXZqjbzqr6wQWaGSkCMYjhNYE9bi71Exl9vZgqyF9WwmvYzh0kHOlJUwYWVVfTQjC2sGxOx%2FkbEml%2B1OgVIEMNqIVaMCYhgn9viOCAKkz%2BPoDt6a24%2FTolAMZBoWRDAxMP11vMZkRTJEmbq7xey%2BsykFDAfDhSymlr7zBWY%2Fegzqr%2BXcpu8ecPvWboKeJagXsLFGIjmnlMuu3bzuLVIiyIMNAPABOypnU4L%2Bxq%2BP5pPZ%2Fn4%2FOZkbpIydi3yGKZcboDBHP1a%2BTd1Pc9VLE1B3fOJWnEq1zu72R%2BxYcHeBT0xo4j5I%2BdH51iEgH0MXBzwUUIGsR9zx%2Fsw1SDw7GEY96BcjUd82VRZFJJ52qTB%2F5bG6z86j6%2FRmjnFPf%2Fw0urL9kLVM4xLSgN9xKcvoj%2FhD90bWB%2FhL%2BrGpu3gsMcdj9Vaah3V%2FCp1GBdxuFpe5OFrMIrF28QGOqUBPXLRcwNXaaXo%2FpcPLXyNvqIFuZ5jyuFeCLiaQ3xZwpi3PaIkGpK12jTMlzVs37%2FjXpNkUaxTn1lxFceCH2h9SxH32EUtsXUcPBz7i%2BDnLV7iLolre5j3SXJCO1gSLUEXBqK8qNFce%2FkBK5cRA4ByrHAEEyOoNthtSG6YhhI9yWD6ZGpLbeF7%2F7wgLm%2F%2F4gdeDPes3kf7yS8LaCB9VVfr89snKwra&X-Amz-Signature=909403d14bf49c7267bb743f945ded14aad095625c594825e20cd571b608344d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SGHBXRQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD%2BolBqLX08SpxVBWkYzsDpGRylkOuf5Ij67v5B2bYNtgIgWx1jzDtR3tuop5zNRxdV2bch0PUI1AvmMKO56%2BIkjgIqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPVZcB4vqnXP3p7O1CrcA4YIj77vUlQdlIZz%2FIsHzltPd3qHZTi2sK%2Fa5Zg8j3FFVe%2FSjL%2BoLtF0D%2B7gCvbIuF9lzXjkhG31IzHGTlokZKp9OBgYole81Ra42SRxTv%2FRtdL386tcV30YRKXZHlVVsnzUDqSkiKTZMYL%2F4o75umjZvEfJztuIfLWZcAX5DDsx6z%2FVYEOATudmbSwDUDXZqjbzqr6wQWaGSkCMYjhNYE9bi71Exl9vZgqyF9WwmvYzh0kHOlJUwYWVVfTQjC2sGxOx%2FkbEml%2B1OgVIEMNqIVaMCYhgn9viOCAKkz%2BPoDt6a24%2FTolAMZBoWRDAxMP11vMZkRTJEmbq7xey%2BsykFDAfDhSymlr7zBWY%2Fegzqr%2BXcpu8ecPvWboKeJagXsLFGIjmnlMuu3bzuLVIiyIMNAPABOypnU4L%2Bxq%2BP5pPZ%2Fn4%2FOZkbpIydi3yGKZcboDBHP1a%2BTd1Pc9VLE1B3fOJWnEq1zu72R%2BxYcHeBT0xo4j5I%2BdH51iEgH0MXBzwUUIGsR9zx%2Fsw1SDw7GEY96BcjUd82VRZFJJ52qTB%2F5bG6z86j6%2FRmjnFPf%2Fw0urL9kLVM4xLSgN9xKcvoj%2FhD90bWB%2FhL%2BrGpu3gsMcdj9Vaah3V%2FCp1GBdxuFpe5OFrMIrF28QGOqUBPXLRcwNXaaXo%2FpcPLXyNvqIFuZ5jyuFeCLiaQ3xZwpi3PaIkGpK12jTMlzVs37%2FjXpNkUaxTn1lxFceCH2h9SxH32EUtsXUcPBz7i%2BDnLV7iLolre5j3SXJCO1gSLUEXBqK8qNFce%2FkBK5cRA4ByrHAEEyOoNthtSG6YhhI9yWD6ZGpLbeF7%2F7wgLm%2F%2F4gdeDPes3kf7yS8LaCB9VVfr89snKwra&X-Amz-Signature=b96e3e98c7c494daf7355d71441ef230e444bed50c5570fed49f98665745211b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SGHBXRQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD%2BolBqLX08SpxVBWkYzsDpGRylkOuf5Ij67v5B2bYNtgIgWx1jzDtR3tuop5zNRxdV2bch0PUI1AvmMKO56%2BIkjgIqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPVZcB4vqnXP3p7O1CrcA4YIj77vUlQdlIZz%2FIsHzltPd3qHZTi2sK%2Fa5Zg8j3FFVe%2FSjL%2BoLtF0D%2B7gCvbIuF9lzXjkhG31IzHGTlokZKp9OBgYole81Ra42SRxTv%2FRtdL386tcV30YRKXZHlVVsnzUDqSkiKTZMYL%2F4o75umjZvEfJztuIfLWZcAX5DDsx6z%2FVYEOATudmbSwDUDXZqjbzqr6wQWaGSkCMYjhNYE9bi71Exl9vZgqyF9WwmvYzh0kHOlJUwYWVVfTQjC2sGxOx%2FkbEml%2B1OgVIEMNqIVaMCYhgn9viOCAKkz%2BPoDt6a24%2FTolAMZBoWRDAxMP11vMZkRTJEmbq7xey%2BsykFDAfDhSymlr7zBWY%2Fegzqr%2BXcpu8ecPvWboKeJagXsLFGIjmnlMuu3bzuLVIiyIMNAPABOypnU4L%2Bxq%2BP5pPZ%2Fn4%2FOZkbpIydi3yGKZcboDBHP1a%2BTd1Pc9VLE1B3fOJWnEq1zu72R%2BxYcHeBT0xo4j5I%2BdH51iEgH0MXBzwUUIGsR9zx%2Fsw1SDw7GEY96BcjUd82VRZFJJ52qTB%2F5bG6z86j6%2FRmjnFPf%2Fw0urL9kLVM4xLSgN9xKcvoj%2FhD90bWB%2FhL%2BrGpu3gsMcdj9Vaah3V%2FCp1GBdxuFpe5OFrMIrF28QGOqUBPXLRcwNXaaXo%2FpcPLXyNvqIFuZ5jyuFeCLiaQ3xZwpi3PaIkGpK12jTMlzVs37%2FjXpNkUaxTn1lxFceCH2h9SxH32EUtsXUcPBz7i%2BDnLV7iLolre5j3SXJCO1gSLUEXBqK8qNFce%2FkBK5cRA4ByrHAEEyOoNthtSG6YhhI9yWD6ZGpLbeF7%2F7wgLm%2F%2F4gdeDPes3kf7yS8LaCB9VVfr89snKwra&X-Amz-Signature=49022c03b02f767e4210f92382b239beea30ad6ffc6cc44de364b8d373c85a10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SGHBXRQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD%2BolBqLX08SpxVBWkYzsDpGRylkOuf5Ij67v5B2bYNtgIgWx1jzDtR3tuop5zNRxdV2bch0PUI1AvmMKO56%2BIkjgIqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPVZcB4vqnXP3p7O1CrcA4YIj77vUlQdlIZz%2FIsHzltPd3qHZTi2sK%2Fa5Zg8j3FFVe%2FSjL%2BoLtF0D%2B7gCvbIuF9lzXjkhG31IzHGTlokZKp9OBgYole81Ra42SRxTv%2FRtdL386tcV30YRKXZHlVVsnzUDqSkiKTZMYL%2F4o75umjZvEfJztuIfLWZcAX5DDsx6z%2FVYEOATudmbSwDUDXZqjbzqr6wQWaGSkCMYjhNYE9bi71Exl9vZgqyF9WwmvYzh0kHOlJUwYWVVfTQjC2sGxOx%2FkbEml%2B1OgVIEMNqIVaMCYhgn9viOCAKkz%2BPoDt6a24%2FTolAMZBoWRDAxMP11vMZkRTJEmbq7xey%2BsykFDAfDhSymlr7zBWY%2Fegzqr%2BXcpu8ecPvWboKeJagXsLFGIjmnlMuu3bzuLVIiyIMNAPABOypnU4L%2Bxq%2BP5pPZ%2Fn4%2FOZkbpIydi3yGKZcboDBHP1a%2BTd1Pc9VLE1B3fOJWnEq1zu72R%2BxYcHeBT0xo4j5I%2BdH51iEgH0MXBzwUUIGsR9zx%2Fsw1SDw7GEY96BcjUd82VRZFJJ52qTB%2F5bG6z86j6%2FRmjnFPf%2Fw0urL9kLVM4xLSgN9xKcvoj%2FhD90bWB%2FhL%2BrGpu3gsMcdj9Vaah3V%2FCp1GBdxuFpe5OFrMIrF28QGOqUBPXLRcwNXaaXo%2FpcPLXyNvqIFuZ5jyuFeCLiaQ3xZwpi3PaIkGpK12jTMlzVs37%2FjXpNkUaxTn1lxFceCH2h9SxH32EUtsXUcPBz7i%2BDnLV7iLolre5j3SXJCO1gSLUEXBqK8qNFce%2FkBK5cRA4ByrHAEEyOoNthtSG6YhhI9yWD6ZGpLbeF7%2F7wgLm%2F%2F4gdeDPes3kf7yS8LaCB9VVfr89snKwra&X-Amz-Signature=415b37f3edd012a87e8812141ee815af4a3f38b20dc86cd522d029e6df4eb77d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SGHBXRQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD%2BolBqLX08SpxVBWkYzsDpGRylkOuf5Ij67v5B2bYNtgIgWx1jzDtR3tuop5zNRxdV2bch0PUI1AvmMKO56%2BIkjgIqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPVZcB4vqnXP3p7O1CrcA4YIj77vUlQdlIZz%2FIsHzltPd3qHZTi2sK%2Fa5Zg8j3FFVe%2FSjL%2BoLtF0D%2B7gCvbIuF9lzXjkhG31IzHGTlokZKp9OBgYole81Ra42SRxTv%2FRtdL386tcV30YRKXZHlVVsnzUDqSkiKTZMYL%2F4o75umjZvEfJztuIfLWZcAX5DDsx6z%2FVYEOATudmbSwDUDXZqjbzqr6wQWaGSkCMYjhNYE9bi71Exl9vZgqyF9WwmvYzh0kHOlJUwYWVVfTQjC2sGxOx%2FkbEml%2B1OgVIEMNqIVaMCYhgn9viOCAKkz%2BPoDt6a24%2FTolAMZBoWRDAxMP11vMZkRTJEmbq7xey%2BsykFDAfDhSymlr7zBWY%2Fegzqr%2BXcpu8ecPvWboKeJagXsLFGIjmnlMuu3bzuLVIiyIMNAPABOypnU4L%2Bxq%2BP5pPZ%2Fn4%2FOZkbpIydi3yGKZcboDBHP1a%2BTd1Pc9VLE1B3fOJWnEq1zu72R%2BxYcHeBT0xo4j5I%2BdH51iEgH0MXBzwUUIGsR9zx%2Fsw1SDw7GEY96BcjUd82VRZFJJ52qTB%2F5bG6z86j6%2FRmjnFPf%2Fw0urL9kLVM4xLSgN9xKcvoj%2FhD90bWB%2FhL%2BrGpu3gsMcdj9Vaah3V%2FCp1GBdxuFpe5OFrMIrF28QGOqUBPXLRcwNXaaXo%2FpcPLXyNvqIFuZ5jyuFeCLiaQ3xZwpi3PaIkGpK12jTMlzVs37%2FjXpNkUaxTn1lxFceCH2h9SxH32EUtsXUcPBz7i%2BDnLV7iLolre5j3SXJCO1gSLUEXBqK8qNFce%2FkBK5cRA4ByrHAEEyOoNthtSG6YhhI9yWD6ZGpLbeF7%2F7wgLm%2F%2F4gdeDPes3kf7yS8LaCB9VVfr89snKwra&X-Amz-Signature=4f5e101a0b86f4e6a983dc9cc4ee49cb2d81db1d2640b07f2a1a409bc3db2f3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SGHBXRQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD%2BolBqLX08SpxVBWkYzsDpGRylkOuf5Ij67v5B2bYNtgIgWx1jzDtR3tuop5zNRxdV2bch0PUI1AvmMKO56%2BIkjgIqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPVZcB4vqnXP3p7O1CrcA4YIj77vUlQdlIZz%2FIsHzltPd3qHZTi2sK%2Fa5Zg8j3FFVe%2FSjL%2BoLtF0D%2B7gCvbIuF9lzXjkhG31IzHGTlokZKp9OBgYole81Ra42SRxTv%2FRtdL386tcV30YRKXZHlVVsnzUDqSkiKTZMYL%2F4o75umjZvEfJztuIfLWZcAX5DDsx6z%2FVYEOATudmbSwDUDXZqjbzqr6wQWaGSkCMYjhNYE9bi71Exl9vZgqyF9WwmvYzh0kHOlJUwYWVVfTQjC2sGxOx%2FkbEml%2B1OgVIEMNqIVaMCYhgn9viOCAKkz%2BPoDt6a24%2FTolAMZBoWRDAxMP11vMZkRTJEmbq7xey%2BsykFDAfDhSymlr7zBWY%2Fegzqr%2BXcpu8ecPvWboKeJagXsLFGIjmnlMuu3bzuLVIiyIMNAPABOypnU4L%2Bxq%2BP5pPZ%2Fn4%2FOZkbpIydi3yGKZcboDBHP1a%2BTd1Pc9VLE1B3fOJWnEq1zu72R%2BxYcHeBT0xo4j5I%2BdH51iEgH0MXBzwUUIGsR9zx%2Fsw1SDw7GEY96BcjUd82VRZFJJ52qTB%2F5bG6z86j6%2FRmjnFPf%2Fw0urL9kLVM4xLSgN9xKcvoj%2FhD90bWB%2FhL%2BrGpu3gsMcdj9Vaah3V%2FCp1GBdxuFpe5OFrMIrF28QGOqUBPXLRcwNXaaXo%2FpcPLXyNvqIFuZ5jyuFeCLiaQ3xZwpi3PaIkGpK12jTMlzVs37%2FjXpNkUaxTn1lxFceCH2h9SxH32EUtsXUcPBz7i%2BDnLV7iLolre5j3SXJCO1gSLUEXBqK8qNFce%2FkBK5cRA4ByrHAEEyOoNthtSG6YhhI9yWD6ZGpLbeF7%2F7wgLm%2F%2F4gdeDPes3kf7yS8LaCB9VVfr89snKwra&X-Amz-Signature=3ac5895f1cb51e48b1563d09595ec7fb783f02f033cf5bba4cba0a713e261af3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SGHBXRQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD%2BolBqLX08SpxVBWkYzsDpGRylkOuf5Ij67v5B2bYNtgIgWx1jzDtR3tuop5zNRxdV2bch0PUI1AvmMKO56%2BIkjgIqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPVZcB4vqnXP3p7O1CrcA4YIj77vUlQdlIZz%2FIsHzltPd3qHZTi2sK%2Fa5Zg8j3FFVe%2FSjL%2BoLtF0D%2B7gCvbIuF9lzXjkhG31IzHGTlokZKp9OBgYole81Ra42SRxTv%2FRtdL386tcV30YRKXZHlVVsnzUDqSkiKTZMYL%2F4o75umjZvEfJztuIfLWZcAX5DDsx6z%2FVYEOATudmbSwDUDXZqjbzqr6wQWaGSkCMYjhNYE9bi71Exl9vZgqyF9WwmvYzh0kHOlJUwYWVVfTQjC2sGxOx%2FkbEml%2B1OgVIEMNqIVaMCYhgn9viOCAKkz%2BPoDt6a24%2FTolAMZBoWRDAxMP11vMZkRTJEmbq7xey%2BsykFDAfDhSymlr7zBWY%2Fegzqr%2BXcpu8ecPvWboKeJagXsLFGIjmnlMuu3bzuLVIiyIMNAPABOypnU4L%2Bxq%2BP5pPZ%2Fn4%2FOZkbpIydi3yGKZcboDBHP1a%2BTd1Pc9VLE1B3fOJWnEq1zu72R%2BxYcHeBT0xo4j5I%2BdH51iEgH0MXBzwUUIGsR9zx%2Fsw1SDw7GEY96BcjUd82VRZFJJ52qTB%2F5bG6z86j6%2FRmjnFPf%2Fw0urL9kLVM4xLSgN9xKcvoj%2FhD90bWB%2FhL%2BrGpu3gsMcdj9Vaah3V%2FCp1GBdxuFpe5OFrMIrF28QGOqUBPXLRcwNXaaXo%2FpcPLXyNvqIFuZ5jyuFeCLiaQ3xZwpi3PaIkGpK12jTMlzVs37%2FjXpNkUaxTn1lxFceCH2h9SxH32EUtsXUcPBz7i%2BDnLV7iLolre5j3SXJCO1gSLUEXBqK8qNFce%2FkBK5cRA4ByrHAEEyOoNthtSG6YhhI9yWD6ZGpLbeF7%2F7wgLm%2F%2F4gdeDPes3kf7yS8LaCB9VVfr89snKwra&X-Amz-Signature=6b2fbee9e8f5a20c52d6a9770738bb0d877c3d55adc1dc57eaf27b5dd387bb0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SGHBXRQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD%2BolBqLX08SpxVBWkYzsDpGRylkOuf5Ij67v5B2bYNtgIgWx1jzDtR3tuop5zNRxdV2bch0PUI1AvmMKO56%2BIkjgIqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPVZcB4vqnXP3p7O1CrcA4YIj77vUlQdlIZz%2FIsHzltPd3qHZTi2sK%2Fa5Zg8j3FFVe%2FSjL%2BoLtF0D%2B7gCvbIuF9lzXjkhG31IzHGTlokZKp9OBgYole81Ra42SRxTv%2FRtdL386tcV30YRKXZHlVVsnzUDqSkiKTZMYL%2F4o75umjZvEfJztuIfLWZcAX5DDsx6z%2FVYEOATudmbSwDUDXZqjbzqr6wQWaGSkCMYjhNYE9bi71Exl9vZgqyF9WwmvYzh0kHOlJUwYWVVfTQjC2sGxOx%2FkbEml%2B1OgVIEMNqIVaMCYhgn9viOCAKkz%2BPoDt6a24%2FTolAMZBoWRDAxMP11vMZkRTJEmbq7xey%2BsykFDAfDhSymlr7zBWY%2Fegzqr%2BXcpu8ecPvWboKeJagXsLFGIjmnlMuu3bzuLVIiyIMNAPABOypnU4L%2Bxq%2BP5pPZ%2Fn4%2FOZkbpIydi3yGKZcboDBHP1a%2BTd1Pc9VLE1B3fOJWnEq1zu72R%2BxYcHeBT0xo4j5I%2BdH51iEgH0MXBzwUUIGsR9zx%2Fsw1SDw7GEY96BcjUd82VRZFJJ52qTB%2F5bG6z86j6%2FRmjnFPf%2Fw0urL9kLVM4xLSgN9xKcvoj%2FhD90bWB%2FhL%2BrGpu3gsMcdj9Vaah3V%2FCp1GBdxuFpe5OFrMIrF28QGOqUBPXLRcwNXaaXo%2FpcPLXyNvqIFuZ5jyuFeCLiaQ3xZwpi3PaIkGpK12jTMlzVs37%2FjXpNkUaxTn1lxFceCH2h9SxH32EUtsXUcPBz7i%2BDnLV7iLolre5j3SXJCO1gSLUEXBqK8qNFce%2FkBK5cRA4ByrHAEEyOoNthtSG6YhhI9yWD6ZGpLbeF7%2F7wgLm%2F%2F4gdeDPes3kf7yS8LaCB9VVfr89snKwra&X-Amz-Signature=b96e3e98c7c494daf7355d71441ef230e444bed50c5570fed49f98665745211b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
