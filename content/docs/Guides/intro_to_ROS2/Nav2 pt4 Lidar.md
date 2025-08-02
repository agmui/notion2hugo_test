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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2NVZOKH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBfAL9ZIX0HuKRe8n6uqDyt%2BoVMrHy1ns778DJwf0d7RAiAUJHDgh%2B%2Bn6EBeRo4O7raZDofPvlZqQIeC5W60RbuZwyr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMqW%2BJ0%2BRKotvWFWEfKtwDGo%2BI060adp5bzK1DMZCRGTlAuK9GTeN2orROlR%2Fc1ePQmK9n9d887dyeSV%2FG8K4kLzjcw8JGa25qo2KVWD8rDx%2FafLtgh%2Fyudc6cbL5cw5z6bfFJTmxVm%2FH0N8cqxKvUWSFbz1uFRZoagncNs4tLRf42mw%2FeVexgvuEGDnJPzzBSZ%2Fxx3f8EnIOrbypbli2ThQIIWMxdYBTNtQCWiJab59cY1TmLtjM6tWdadxe2b%2F3RHrzwC6mVlXu5DtwRJo54OOAuQV51G7U%2Bp7GLYYdduVXoNSFStbnfAiPLQmecPTy55ZDEUPWOmcHVh2mxxxsyOi7PYvABGYkZ5rzl3JebpMgCDIdqvQDXbMqDiIJ1WoiGcTvAnbLpMmh1lZg%2FQbrWZ8XeqgbVFhIfFp1bx3nXIG4aCNYXkNcJZHfgB4WkGxttDKyIiXqU7hZsG4lFGKw%2BVYMiYbpqPxw%2Bb3bb%2BmTcajqvD2%2BtC22xiwgKQx3JekcknEb9rtF8Njy9qCGZIztmKNQOEXRaBfQNlzKVfy40nbX4LOyNWGxgHuJHK%2FkQHe49xXTVnH2i47a9AzByCfNkDT1iu3F0fJZ3ikYkrjZOqgYsU%2Fbo6DcgBPg0qx0svjDMSc5aFT2PyLSMAIIwlZ65xAY6pgHXq9M0Rnut78rxnX2CsXDUqpGgg8wSbBTVCL3v5rMIuNnu%2BXksp9w7US3k%2BAq3FFdkS6TWBNZ3m2yNQsQ4c0FJiRLX9qBuyyq8gB85WBvvdZU2VrxdR8ZsGq3ZWcXJP9jlobutHXcs%2BoqkbGhGg1hoORZRsFWt1A%2FGMc%2F9vLd5GdH31tHLjWLtU8s1OyiNyAGv0nwj0RCc7tG4pQDyajlztBRwYIKe&X-Amz-Signature=4c2b871f39daaf40ce20c75629368999ce7d7c04f67cc0e97287c49983ee74df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEUYJQ67%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTZE9pXliVucVLTXTvTldiqss9VHzWMmpGYNxyyAJ9ngIhAOPT3mfwEJsMtsN6CueJgce2brsC0o4xcBXqM7CiB0yRKv8DCBsQABoMNjM3NDIzMTgzODA1IgzoRitx4I6ImdrgtFgq3APUgmLHjljTWOcChdyNPsrMoIq6EMZsVyCuN8xX2fXN16y%2FbbDM%2BUZ2DBZ66koPz60pWqwpSelrkdvA2uR5ubd1gbBmar8CKQjvN4yMYxpkIyvYZL1819ZTPlp%2FJ3nU%2Fg7ckjxzVzi0vCdFcTRWm3X1fSIwSJSJP%2BEyUw3xVi4yIDsnKXLw9AS%2F%2BHb0VpNVRMPBY42MlxXxosSSluptLmpMJRHakLBzW%2FvTZ8qkDzLGnS%2Bs51HW27yCrUDwP7jCaCdbfg%2FXuWzfvn%2Bj67Y5dmYuOrzqkmLtRf7yJMLxpS0bzXr%2BSkpRPJq%2FAYwtQzXKZqBwwGvfrUJ%2BuK2AwcXXli52SFhDZGChH7ug%2BtQCUwqvaYh8yZkZyWmRDD0IiQ8BBWq6Wuzccq0nHfV9C4m7sFn46bTKW4HpNlwNTQQoXbAOOpmSKyt8XpE5QpLVxhCzCAeKnI6cPtBa3PAgV9yuagTTUXD4zZ4cB9a4nZmN3fRbtC5jCF5RYSZrSf3lDHmNSEGUCWgQraGQvg0wYh6HjeCCkAzpW2XF8yFbBf3Rd9oWabwBg0pDIh6hG88ka38bsJbOyVn7wRJhMQ%2FC%2Bt7xdj1c%2F7l9qznkUC%2Bo4GoV6HjsUmLY1H%2FQfYO68aIhijCLnrnEBjqkAbZaz1JOAWg1jXtsHBzzPekkWVtM1g4IOy%2Bng7SWC2OIb3TFCMz8LpWZYdVw7kxYUpDcykv41YD91Y9F6wN8Jkx0%2Fr%2F7PemXQUNoRbYJgbP1T%2Fynjv4RQ%2FpF6uoG9I3bHg3SysbQtcy9U3iizwzDsVVfB7vfEHJik08X8iRCtWEiHvCvEVanzLkWONiCLVPImNlP%2BXWMcC2jUzpEcaHWE41T0XV7&X-Amz-Signature=bdb474863319c7ad6b7be4067cf9647efe2e8a9ae7487f8508abca700640168b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEUYJQ67%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTZE9pXliVucVLTXTvTldiqss9VHzWMmpGYNxyyAJ9ngIhAOPT3mfwEJsMtsN6CueJgce2brsC0o4xcBXqM7CiB0yRKv8DCBsQABoMNjM3NDIzMTgzODA1IgzoRitx4I6ImdrgtFgq3APUgmLHjljTWOcChdyNPsrMoIq6EMZsVyCuN8xX2fXN16y%2FbbDM%2BUZ2DBZ66koPz60pWqwpSelrkdvA2uR5ubd1gbBmar8CKQjvN4yMYxpkIyvYZL1819ZTPlp%2FJ3nU%2Fg7ckjxzVzi0vCdFcTRWm3X1fSIwSJSJP%2BEyUw3xVi4yIDsnKXLw9AS%2F%2BHb0VpNVRMPBY42MlxXxosSSluptLmpMJRHakLBzW%2FvTZ8qkDzLGnS%2Bs51HW27yCrUDwP7jCaCdbfg%2FXuWzfvn%2Bj67Y5dmYuOrzqkmLtRf7yJMLxpS0bzXr%2BSkpRPJq%2FAYwtQzXKZqBwwGvfrUJ%2BuK2AwcXXli52SFhDZGChH7ug%2BtQCUwqvaYh8yZkZyWmRDD0IiQ8BBWq6Wuzccq0nHfV9C4m7sFn46bTKW4HpNlwNTQQoXbAOOpmSKyt8XpE5QpLVxhCzCAeKnI6cPtBa3PAgV9yuagTTUXD4zZ4cB9a4nZmN3fRbtC5jCF5RYSZrSf3lDHmNSEGUCWgQraGQvg0wYh6HjeCCkAzpW2XF8yFbBf3Rd9oWabwBg0pDIh6hG88ka38bsJbOyVn7wRJhMQ%2FC%2Bt7xdj1c%2F7l9qznkUC%2Bo4GoV6HjsUmLY1H%2FQfYO68aIhijCLnrnEBjqkAbZaz1JOAWg1jXtsHBzzPekkWVtM1g4IOy%2Bng7SWC2OIb3TFCMz8LpWZYdVw7kxYUpDcykv41YD91Y9F6wN8Jkx0%2Fr%2F7PemXQUNoRbYJgbP1T%2Fynjv4RQ%2FpF6uoG9I3bHg3SysbQtcy9U3iizwzDsVVfB7vfEHJik08X8iRCtWEiHvCvEVanzLkWONiCLVPImNlP%2BXWMcC2jUzpEcaHWE41T0XV7&X-Amz-Signature=62adbd63513a369e7fefd1159343ccb5e7792d4b76fb99a2975441aee7b9a793&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEUYJQ67%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTZE9pXliVucVLTXTvTldiqss9VHzWMmpGYNxyyAJ9ngIhAOPT3mfwEJsMtsN6CueJgce2brsC0o4xcBXqM7CiB0yRKv8DCBsQABoMNjM3NDIzMTgzODA1IgzoRitx4I6ImdrgtFgq3APUgmLHjljTWOcChdyNPsrMoIq6EMZsVyCuN8xX2fXN16y%2FbbDM%2BUZ2DBZ66koPz60pWqwpSelrkdvA2uR5ubd1gbBmar8CKQjvN4yMYxpkIyvYZL1819ZTPlp%2FJ3nU%2Fg7ckjxzVzi0vCdFcTRWm3X1fSIwSJSJP%2BEyUw3xVi4yIDsnKXLw9AS%2F%2BHb0VpNVRMPBY42MlxXxosSSluptLmpMJRHakLBzW%2FvTZ8qkDzLGnS%2Bs51HW27yCrUDwP7jCaCdbfg%2FXuWzfvn%2Bj67Y5dmYuOrzqkmLtRf7yJMLxpS0bzXr%2BSkpRPJq%2FAYwtQzXKZqBwwGvfrUJ%2BuK2AwcXXli52SFhDZGChH7ug%2BtQCUwqvaYh8yZkZyWmRDD0IiQ8BBWq6Wuzccq0nHfV9C4m7sFn46bTKW4HpNlwNTQQoXbAOOpmSKyt8XpE5QpLVxhCzCAeKnI6cPtBa3PAgV9yuagTTUXD4zZ4cB9a4nZmN3fRbtC5jCF5RYSZrSf3lDHmNSEGUCWgQraGQvg0wYh6HjeCCkAzpW2XF8yFbBf3Rd9oWabwBg0pDIh6hG88ka38bsJbOyVn7wRJhMQ%2FC%2Bt7xdj1c%2F7l9qznkUC%2Bo4GoV6HjsUmLY1H%2FQfYO68aIhijCLnrnEBjqkAbZaz1JOAWg1jXtsHBzzPekkWVtM1g4IOy%2Bng7SWC2OIb3TFCMz8LpWZYdVw7kxYUpDcykv41YD91Y9F6wN8Jkx0%2Fr%2F7PemXQUNoRbYJgbP1T%2Fynjv4RQ%2FpF6uoG9I3bHg3SysbQtcy9U3iizwzDsVVfB7vfEHJik08X8iRCtWEiHvCvEVanzLkWONiCLVPImNlP%2BXWMcC2jUzpEcaHWE41T0XV7&X-Amz-Signature=b46e31d51408b60fa10495c5a546689493f73a9b1474ae083fdff6e22086c990&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEUYJQ67%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTZE9pXliVucVLTXTvTldiqss9VHzWMmpGYNxyyAJ9ngIhAOPT3mfwEJsMtsN6CueJgce2brsC0o4xcBXqM7CiB0yRKv8DCBsQABoMNjM3NDIzMTgzODA1IgzoRitx4I6ImdrgtFgq3APUgmLHjljTWOcChdyNPsrMoIq6EMZsVyCuN8xX2fXN16y%2FbbDM%2BUZ2DBZ66koPz60pWqwpSelrkdvA2uR5ubd1gbBmar8CKQjvN4yMYxpkIyvYZL1819ZTPlp%2FJ3nU%2Fg7ckjxzVzi0vCdFcTRWm3X1fSIwSJSJP%2BEyUw3xVi4yIDsnKXLw9AS%2F%2BHb0VpNVRMPBY42MlxXxosSSluptLmpMJRHakLBzW%2FvTZ8qkDzLGnS%2Bs51HW27yCrUDwP7jCaCdbfg%2FXuWzfvn%2Bj67Y5dmYuOrzqkmLtRf7yJMLxpS0bzXr%2BSkpRPJq%2FAYwtQzXKZqBwwGvfrUJ%2BuK2AwcXXli52SFhDZGChH7ug%2BtQCUwqvaYh8yZkZyWmRDD0IiQ8BBWq6Wuzccq0nHfV9C4m7sFn46bTKW4HpNlwNTQQoXbAOOpmSKyt8XpE5QpLVxhCzCAeKnI6cPtBa3PAgV9yuagTTUXD4zZ4cB9a4nZmN3fRbtC5jCF5RYSZrSf3lDHmNSEGUCWgQraGQvg0wYh6HjeCCkAzpW2XF8yFbBf3Rd9oWabwBg0pDIh6hG88ka38bsJbOyVn7wRJhMQ%2FC%2Bt7xdj1c%2F7l9qznkUC%2Bo4GoV6HjsUmLY1H%2FQfYO68aIhijCLnrnEBjqkAbZaz1JOAWg1jXtsHBzzPekkWVtM1g4IOy%2Bng7SWC2OIb3TFCMz8LpWZYdVw7kxYUpDcykv41YD91Y9F6wN8Jkx0%2Fr%2F7PemXQUNoRbYJgbP1T%2Fynjv4RQ%2FpF6uoG9I3bHg3SysbQtcy9U3iizwzDsVVfB7vfEHJik08X8iRCtWEiHvCvEVanzLkWONiCLVPImNlP%2BXWMcC2jUzpEcaHWE41T0XV7&X-Amz-Signature=b567538414d6486cab0f730f82b83a6e29f57e4e6bd34fda3f2a24a406c6fc1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEUYJQ67%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTZE9pXliVucVLTXTvTldiqss9VHzWMmpGYNxyyAJ9ngIhAOPT3mfwEJsMtsN6CueJgce2brsC0o4xcBXqM7CiB0yRKv8DCBsQABoMNjM3NDIzMTgzODA1IgzoRitx4I6ImdrgtFgq3APUgmLHjljTWOcChdyNPsrMoIq6EMZsVyCuN8xX2fXN16y%2FbbDM%2BUZ2DBZ66koPz60pWqwpSelrkdvA2uR5ubd1gbBmar8CKQjvN4yMYxpkIyvYZL1819ZTPlp%2FJ3nU%2Fg7ckjxzVzi0vCdFcTRWm3X1fSIwSJSJP%2BEyUw3xVi4yIDsnKXLw9AS%2F%2BHb0VpNVRMPBY42MlxXxosSSluptLmpMJRHakLBzW%2FvTZ8qkDzLGnS%2Bs51HW27yCrUDwP7jCaCdbfg%2FXuWzfvn%2Bj67Y5dmYuOrzqkmLtRf7yJMLxpS0bzXr%2BSkpRPJq%2FAYwtQzXKZqBwwGvfrUJ%2BuK2AwcXXli52SFhDZGChH7ug%2BtQCUwqvaYh8yZkZyWmRDD0IiQ8BBWq6Wuzccq0nHfV9C4m7sFn46bTKW4HpNlwNTQQoXbAOOpmSKyt8XpE5QpLVxhCzCAeKnI6cPtBa3PAgV9yuagTTUXD4zZ4cB9a4nZmN3fRbtC5jCF5RYSZrSf3lDHmNSEGUCWgQraGQvg0wYh6HjeCCkAzpW2XF8yFbBf3Rd9oWabwBg0pDIh6hG88ka38bsJbOyVn7wRJhMQ%2FC%2Bt7xdj1c%2F7l9qznkUC%2Bo4GoV6HjsUmLY1H%2FQfYO68aIhijCLnrnEBjqkAbZaz1JOAWg1jXtsHBzzPekkWVtM1g4IOy%2Bng7SWC2OIb3TFCMz8LpWZYdVw7kxYUpDcykv41YD91Y9F6wN8Jkx0%2Fr%2F7PemXQUNoRbYJgbP1T%2Fynjv4RQ%2FpF6uoG9I3bHg3SysbQtcy9U3iizwzDsVVfB7vfEHJik08X8iRCtWEiHvCvEVanzLkWONiCLVPImNlP%2BXWMcC2jUzpEcaHWE41T0XV7&X-Amz-Signature=68a58cc644bb1b70fe802b711c636ef49691c807200589386bf28b7a0171d1d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEUYJQ67%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTZE9pXliVucVLTXTvTldiqss9VHzWMmpGYNxyyAJ9ngIhAOPT3mfwEJsMtsN6CueJgce2brsC0o4xcBXqM7CiB0yRKv8DCBsQABoMNjM3NDIzMTgzODA1IgzoRitx4I6ImdrgtFgq3APUgmLHjljTWOcChdyNPsrMoIq6EMZsVyCuN8xX2fXN16y%2FbbDM%2BUZ2DBZ66koPz60pWqwpSelrkdvA2uR5ubd1gbBmar8CKQjvN4yMYxpkIyvYZL1819ZTPlp%2FJ3nU%2Fg7ckjxzVzi0vCdFcTRWm3X1fSIwSJSJP%2BEyUw3xVi4yIDsnKXLw9AS%2F%2BHb0VpNVRMPBY42MlxXxosSSluptLmpMJRHakLBzW%2FvTZ8qkDzLGnS%2Bs51HW27yCrUDwP7jCaCdbfg%2FXuWzfvn%2Bj67Y5dmYuOrzqkmLtRf7yJMLxpS0bzXr%2BSkpRPJq%2FAYwtQzXKZqBwwGvfrUJ%2BuK2AwcXXli52SFhDZGChH7ug%2BtQCUwqvaYh8yZkZyWmRDD0IiQ8BBWq6Wuzccq0nHfV9C4m7sFn46bTKW4HpNlwNTQQoXbAOOpmSKyt8XpE5QpLVxhCzCAeKnI6cPtBa3PAgV9yuagTTUXD4zZ4cB9a4nZmN3fRbtC5jCF5RYSZrSf3lDHmNSEGUCWgQraGQvg0wYh6HjeCCkAzpW2XF8yFbBf3Rd9oWabwBg0pDIh6hG88ka38bsJbOyVn7wRJhMQ%2FC%2Bt7xdj1c%2F7l9qznkUC%2Bo4GoV6HjsUmLY1H%2FQfYO68aIhijCLnrnEBjqkAbZaz1JOAWg1jXtsHBzzPekkWVtM1g4IOy%2Bng7SWC2OIb3TFCMz8LpWZYdVw7kxYUpDcykv41YD91Y9F6wN8Jkx0%2Fr%2F7PemXQUNoRbYJgbP1T%2Fynjv4RQ%2FpF6uoG9I3bHg3SysbQtcy9U3iizwzDsVVfB7vfEHJik08X8iRCtWEiHvCvEVanzLkWONiCLVPImNlP%2BXWMcC2jUzpEcaHWE41T0XV7&X-Amz-Signature=c5b65865b09fc15d56f1beb35918e4dfecdf9b7e6dff9e33dee2d1cc294d219b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEUYJQ67%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTZE9pXliVucVLTXTvTldiqss9VHzWMmpGYNxyyAJ9ngIhAOPT3mfwEJsMtsN6CueJgce2brsC0o4xcBXqM7CiB0yRKv8DCBsQABoMNjM3NDIzMTgzODA1IgzoRitx4I6ImdrgtFgq3APUgmLHjljTWOcChdyNPsrMoIq6EMZsVyCuN8xX2fXN16y%2FbbDM%2BUZ2DBZ66koPz60pWqwpSelrkdvA2uR5ubd1gbBmar8CKQjvN4yMYxpkIyvYZL1819ZTPlp%2FJ3nU%2Fg7ckjxzVzi0vCdFcTRWm3X1fSIwSJSJP%2BEyUw3xVi4yIDsnKXLw9AS%2F%2BHb0VpNVRMPBY42MlxXxosSSluptLmpMJRHakLBzW%2FvTZ8qkDzLGnS%2Bs51HW27yCrUDwP7jCaCdbfg%2FXuWzfvn%2Bj67Y5dmYuOrzqkmLtRf7yJMLxpS0bzXr%2BSkpRPJq%2FAYwtQzXKZqBwwGvfrUJ%2BuK2AwcXXli52SFhDZGChH7ug%2BtQCUwqvaYh8yZkZyWmRDD0IiQ8BBWq6Wuzccq0nHfV9C4m7sFn46bTKW4HpNlwNTQQoXbAOOpmSKyt8XpE5QpLVxhCzCAeKnI6cPtBa3PAgV9yuagTTUXD4zZ4cB9a4nZmN3fRbtC5jCF5RYSZrSf3lDHmNSEGUCWgQraGQvg0wYh6HjeCCkAzpW2XF8yFbBf3Rd9oWabwBg0pDIh6hG88ka38bsJbOyVn7wRJhMQ%2FC%2Bt7xdj1c%2F7l9qznkUC%2Bo4GoV6HjsUmLY1H%2FQfYO68aIhijCLnrnEBjqkAbZaz1JOAWg1jXtsHBzzPekkWVtM1g4IOy%2Bng7SWC2OIb3TFCMz8LpWZYdVw7kxYUpDcykv41YD91Y9F6wN8Jkx0%2Fr%2F7PemXQUNoRbYJgbP1T%2Fynjv4RQ%2FpF6uoG9I3bHg3SysbQtcy9U3iizwzDsVVfB7vfEHJik08X8iRCtWEiHvCvEVanzLkWONiCLVPImNlP%2BXWMcC2jUzpEcaHWE41T0XV7&X-Amz-Signature=6eb0b65b3c076ce9f48e301c21fed1b08f058a87e8a3b22a1cba6b89c37c7210&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEUYJQ67%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTZE9pXliVucVLTXTvTldiqss9VHzWMmpGYNxyyAJ9ngIhAOPT3mfwEJsMtsN6CueJgce2brsC0o4xcBXqM7CiB0yRKv8DCBsQABoMNjM3NDIzMTgzODA1IgzoRitx4I6ImdrgtFgq3APUgmLHjljTWOcChdyNPsrMoIq6EMZsVyCuN8xX2fXN16y%2FbbDM%2BUZ2DBZ66koPz60pWqwpSelrkdvA2uR5ubd1gbBmar8CKQjvN4yMYxpkIyvYZL1819ZTPlp%2FJ3nU%2Fg7ckjxzVzi0vCdFcTRWm3X1fSIwSJSJP%2BEyUw3xVi4yIDsnKXLw9AS%2F%2BHb0VpNVRMPBY42MlxXxosSSluptLmpMJRHakLBzW%2FvTZ8qkDzLGnS%2Bs51HW27yCrUDwP7jCaCdbfg%2FXuWzfvn%2Bj67Y5dmYuOrzqkmLtRf7yJMLxpS0bzXr%2BSkpRPJq%2FAYwtQzXKZqBwwGvfrUJ%2BuK2AwcXXli52SFhDZGChH7ug%2BtQCUwqvaYh8yZkZyWmRDD0IiQ8BBWq6Wuzccq0nHfV9C4m7sFn46bTKW4HpNlwNTQQoXbAOOpmSKyt8XpE5QpLVxhCzCAeKnI6cPtBa3PAgV9yuagTTUXD4zZ4cB9a4nZmN3fRbtC5jCF5RYSZrSf3lDHmNSEGUCWgQraGQvg0wYh6HjeCCkAzpW2XF8yFbBf3Rd9oWabwBg0pDIh6hG88ka38bsJbOyVn7wRJhMQ%2FC%2Bt7xdj1c%2F7l9qznkUC%2Bo4GoV6HjsUmLY1H%2FQfYO68aIhijCLnrnEBjqkAbZaz1JOAWg1jXtsHBzzPekkWVtM1g4IOy%2Bng7SWC2OIb3TFCMz8LpWZYdVw7kxYUpDcykv41YD91Y9F6wN8Jkx0%2Fr%2F7PemXQUNoRbYJgbP1T%2Fynjv4RQ%2FpF6uoG9I3bHg3SysbQtcy9U3iizwzDsVVfB7vfEHJik08X8iRCtWEiHvCvEVanzLkWONiCLVPImNlP%2BXWMcC2jUzpEcaHWE41T0XV7&X-Amz-Signature=ebce5b760709c15b33fbf6c646533471502d9c2527afae96889aff65ac5f5944&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEUYJQ67%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTZE9pXliVucVLTXTvTldiqss9VHzWMmpGYNxyyAJ9ngIhAOPT3mfwEJsMtsN6CueJgce2brsC0o4xcBXqM7CiB0yRKv8DCBsQABoMNjM3NDIzMTgzODA1IgzoRitx4I6ImdrgtFgq3APUgmLHjljTWOcChdyNPsrMoIq6EMZsVyCuN8xX2fXN16y%2FbbDM%2BUZ2DBZ66koPz60pWqwpSelrkdvA2uR5ubd1gbBmar8CKQjvN4yMYxpkIyvYZL1819ZTPlp%2FJ3nU%2Fg7ckjxzVzi0vCdFcTRWm3X1fSIwSJSJP%2BEyUw3xVi4yIDsnKXLw9AS%2F%2BHb0VpNVRMPBY42MlxXxosSSluptLmpMJRHakLBzW%2FvTZ8qkDzLGnS%2Bs51HW27yCrUDwP7jCaCdbfg%2FXuWzfvn%2Bj67Y5dmYuOrzqkmLtRf7yJMLxpS0bzXr%2BSkpRPJq%2FAYwtQzXKZqBwwGvfrUJ%2BuK2AwcXXli52SFhDZGChH7ug%2BtQCUwqvaYh8yZkZyWmRDD0IiQ8BBWq6Wuzccq0nHfV9C4m7sFn46bTKW4HpNlwNTQQoXbAOOpmSKyt8XpE5QpLVxhCzCAeKnI6cPtBa3PAgV9yuagTTUXD4zZ4cB9a4nZmN3fRbtC5jCF5RYSZrSf3lDHmNSEGUCWgQraGQvg0wYh6HjeCCkAzpW2XF8yFbBf3Rd9oWabwBg0pDIh6hG88ka38bsJbOyVn7wRJhMQ%2FC%2Bt7xdj1c%2F7l9qznkUC%2Bo4GoV6HjsUmLY1H%2FQfYO68aIhijCLnrnEBjqkAbZaz1JOAWg1jXtsHBzzPekkWVtM1g4IOy%2Bng7SWC2OIb3TFCMz8LpWZYdVw7kxYUpDcykv41YD91Y9F6wN8Jkx0%2Fr%2F7PemXQUNoRbYJgbP1T%2Fynjv4RQ%2FpF6uoG9I3bHg3SysbQtcy9U3iizwzDsVVfB7vfEHJik08X8iRCtWEiHvCvEVanzLkWONiCLVPImNlP%2BXWMcC2jUzpEcaHWE41T0XV7&X-Amz-Signature=b57d28998f60fae11e2ee6883e945e7a83d1b2ab38b1e5e84ac3407baf3a324e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEUYJQ67%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTZE9pXliVucVLTXTvTldiqss9VHzWMmpGYNxyyAJ9ngIhAOPT3mfwEJsMtsN6CueJgce2brsC0o4xcBXqM7CiB0yRKv8DCBsQABoMNjM3NDIzMTgzODA1IgzoRitx4I6ImdrgtFgq3APUgmLHjljTWOcChdyNPsrMoIq6EMZsVyCuN8xX2fXN16y%2FbbDM%2BUZ2DBZ66koPz60pWqwpSelrkdvA2uR5ubd1gbBmar8CKQjvN4yMYxpkIyvYZL1819ZTPlp%2FJ3nU%2Fg7ckjxzVzi0vCdFcTRWm3X1fSIwSJSJP%2BEyUw3xVi4yIDsnKXLw9AS%2F%2BHb0VpNVRMPBY42MlxXxosSSluptLmpMJRHakLBzW%2FvTZ8qkDzLGnS%2Bs51HW27yCrUDwP7jCaCdbfg%2FXuWzfvn%2Bj67Y5dmYuOrzqkmLtRf7yJMLxpS0bzXr%2BSkpRPJq%2FAYwtQzXKZqBwwGvfrUJ%2BuK2AwcXXli52SFhDZGChH7ug%2BtQCUwqvaYh8yZkZyWmRDD0IiQ8BBWq6Wuzccq0nHfV9C4m7sFn46bTKW4HpNlwNTQQoXbAOOpmSKyt8XpE5QpLVxhCzCAeKnI6cPtBa3PAgV9yuagTTUXD4zZ4cB9a4nZmN3fRbtC5jCF5RYSZrSf3lDHmNSEGUCWgQraGQvg0wYh6HjeCCkAzpW2XF8yFbBf3Rd9oWabwBg0pDIh6hG88ka38bsJbOyVn7wRJhMQ%2FC%2Bt7xdj1c%2F7l9qznkUC%2Bo4GoV6HjsUmLY1H%2FQfYO68aIhijCLnrnEBjqkAbZaz1JOAWg1jXtsHBzzPekkWVtM1g4IOy%2Bng7SWC2OIb3TFCMz8LpWZYdVw7kxYUpDcykv41YD91Y9F6wN8Jkx0%2Fr%2F7PemXQUNoRbYJgbP1T%2Fynjv4RQ%2FpF6uoG9I3bHg3SysbQtcy9U3iizwzDsVVfB7vfEHJik08X8iRCtWEiHvCvEVanzLkWONiCLVPImNlP%2BXWMcC2jUzpEcaHWE41T0XV7&X-Amz-Signature=b567538414d6486cab0f730f82b83a6e29f57e4e6bd34fda3f2a24a406c6fc1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
