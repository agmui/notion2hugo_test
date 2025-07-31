---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-07-30T06:25:00.000Z"
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

```xml

  <link name="lidar_link">
    <inertial>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <mass value="0.125"/>
      <inertia ixx="0.001" ixy="0" ixz="0" iyy="0.001" iyz="0" izz="0.001" />
    </inertial>

    <collision>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </collision>

    <visual>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </visual>

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEZKKOAD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T231003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJl6pLKoS%2FOObxPWqgzGCHkEZowT3lgFT6eJTUFEY03AIgAWYqjftWEqIWlpLuoKQnyFISoKropJ3aurVl5MAAiWsqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2FmU3cyfzaJiv62BCrcA0wxweInNz4nkdExByACxhIhjJlc7Bna6dcF2op%2B1z8dm8NB3sNMiuW2k6UVWEHC8IanoBw%2FSUZmuQfHBfwJBQsdf7W2MGLR8xBWHwo0ypUVrIwuraiSACHP4PPGrSgR%2BfMNWhRHAtCoir298RupCQIdBDbzKqry85P6c53oFsJ3BdEJGT2PolOZn8LjM78FkVtTl48FBJhkRstu6qV0yzXbebMpoCWDLwJTFfkDJCq0pSfzV8oAN8XUHF%2BQr7n%2F5%2Byq9P5weU6pUYKdnI6P5fOXm9RzWdCDWLHz0iAHCb%2B26vp7xWuasRe4Msw7KhWZZ7TTejKI3yxVoNQeEthcxPig3Fzc5%2FTIqXpSgQHUKjrFzSZSIOmxjztjj47JyD%2FbTNxxmBtseRXYIVhZ85G%2FbjN79qJJjf7t2tOMHkod6UyFBGXiyYm0hqXLQS8Sis%2Fd3PZ4WZ1YZTywhLUJZxmySx9RMMzCmMdz1%2BL4PbvN9XaGOwOx5yNhKLcr2qh8Zbg6I3ysY%2FW8xgEqDus2%2Ba0zOKWFV3m%2FRUCejrEAmUQ9p0aRgf4xLAsy8u21NVxUnmOiarNw1cLlm%2Ft4KSre8A2hJuq%2BA6OoNIQjYNPntOZywoc73upGkkdmbldG3ND5MKXMr8QGOqUBCMzx6yUVIBu6Ec6hSUsJfRVJGyrwl1YtZzwwrpS19O3dbh5won6YmDzd2G%2FnAxnDNe5PmxiWZMS5ADfo%2BQB%2BF9fZYpW1NeKX%2BP7jcUOMpWpM9NMOGkXzllX8fE1rudXOyftVKebgbTyHVaGqsxk4d9Nq9yfntfGVYI7bMo0pJcA%2FBboYGYnilkgzTqdBFT%2BiB2c9Ivt2LKQlOof3o6YFtP%2FC501r&X-Amz-Signature=8a4791a767b3fa603ac037b095f013f5d2c607933f2e7a8e151afc58047e0153&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEZKKOAD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T231003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJl6pLKoS%2FOObxPWqgzGCHkEZowT3lgFT6eJTUFEY03AIgAWYqjftWEqIWlpLuoKQnyFISoKropJ3aurVl5MAAiWsqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2FmU3cyfzaJiv62BCrcA0wxweInNz4nkdExByACxhIhjJlc7Bna6dcF2op%2B1z8dm8NB3sNMiuW2k6UVWEHC8IanoBw%2FSUZmuQfHBfwJBQsdf7W2MGLR8xBWHwo0ypUVrIwuraiSACHP4PPGrSgR%2BfMNWhRHAtCoir298RupCQIdBDbzKqry85P6c53oFsJ3BdEJGT2PolOZn8LjM78FkVtTl48FBJhkRstu6qV0yzXbebMpoCWDLwJTFfkDJCq0pSfzV8oAN8XUHF%2BQr7n%2F5%2Byq9P5weU6pUYKdnI6P5fOXm9RzWdCDWLHz0iAHCb%2B26vp7xWuasRe4Msw7KhWZZ7TTejKI3yxVoNQeEthcxPig3Fzc5%2FTIqXpSgQHUKjrFzSZSIOmxjztjj47JyD%2FbTNxxmBtseRXYIVhZ85G%2FbjN79qJJjf7t2tOMHkod6UyFBGXiyYm0hqXLQS8Sis%2Fd3PZ4WZ1YZTywhLUJZxmySx9RMMzCmMdz1%2BL4PbvN9XaGOwOx5yNhKLcr2qh8Zbg6I3ysY%2FW8xgEqDus2%2Ba0zOKWFV3m%2FRUCejrEAmUQ9p0aRgf4xLAsy8u21NVxUnmOiarNw1cLlm%2Ft4KSre8A2hJuq%2BA6OoNIQjYNPntOZywoc73upGkkdmbldG3ND5MKXMr8QGOqUBCMzx6yUVIBu6Ec6hSUsJfRVJGyrwl1YtZzwwrpS19O3dbh5won6YmDzd2G%2FnAxnDNe5PmxiWZMS5ADfo%2BQB%2BF9fZYpW1NeKX%2BP7jcUOMpWpM9NMOGkXzllX8fE1rudXOyftVKebgbTyHVaGqsxk4d9Nq9yfntfGVYI7bMo0pJcA%2FBboYGYnilkgzTqdBFT%2BiB2c9Ivt2LKQlOof3o6YFtP%2FC501r&X-Amz-Signature=b86148403750ba3e29d6ee7564b65192cf11fad693b5e0a72209cc5002a3c82a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEZKKOAD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T231003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJl6pLKoS%2FOObxPWqgzGCHkEZowT3lgFT6eJTUFEY03AIgAWYqjftWEqIWlpLuoKQnyFISoKropJ3aurVl5MAAiWsqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2FmU3cyfzaJiv62BCrcA0wxweInNz4nkdExByACxhIhjJlc7Bna6dcF2op%2B1z8dm8NB3sNMiuW2k6UVWEHC8IanoBw%2FSUZmuQfHBfwJBQsdf7W2MGLR8xBWHwo0ypUVrIwuraiSACHP4PPGrSgR%2BfMNWhRHAtCoir298RupCQIdBDbzKqry85P6c53oFsJ3BdEJGT2PolOZn8LjM78FkVtTl48FBJhkRstu6qV0yzXbebMpoCWDLwJTFfkDJCq0pSfzV8oAN8XUHF%2BQr7n%2F5%2Byq9P5weU6pUYKdnI6P5fOXm9RzWdCDWLHz0iAHCb%2B26vp7xWuasRe4Msw7KhWZZ7TTejKI3yxVoNQeEthcxPig3Fzc5%2FTIqXpSgQHUKjrFzSZSIOmxjztjj47JyD%2FbTNxxmBtseRXYIVhZ85G%2FbjN79qJJjf7t2tOMHkod6UyFBGXiyYm0hqXLQS8Sis%2Fd3PZ4WZ1YZTywhLUJZxmySx9RMMzCmMdz1%2BL4PbvN9XaGOwOx5yNhKLcr2qh8Zbg6I3ysY%2FW8xgEqDus2%2Ba0zOKWFV3m%2FRUCejrEAmUQ9p0aRgf4xLAsy8u21NVxUnmOiarNw1cLlm%2Ft4KSre8A2hJuq%2BA6OoNIQjYNPntOZywoc73upGkkdmbldG3ND5MKXMr8QGOqUBCMzx6yUVIBu6Ec6hSUsJfRVJGyrwl1YtZzwwrpS19O3dbh5won6YmDzd2G%2FnAxnDNe5PmxiWZMS5ADfo%2BQB%2BF9fZYpW1NeKX%2BP7jcUOMpWpM9NMOGkXzllX8fE1rudXOyftVKebgbTyHVaGqsxk4d9Nq9yfntfGVYI7bMo0pJcA%2FBboYGYnilkgzTqdBFT%2BiB2c9Ivt2LKQlOof3o6YFtP%2FC501r&X-Amz-Signature=498db38d6434832840bb57135acd6956f273457993b7e199f7d6139b49ed8be8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEZKKOAD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T231003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJl6pLKoS%2FOObxPWqgzGCHkEZowT3lgFT6eJTUFEY03AIgAWYqjftWEqIWlpLuoKQnyFISoKropJ3aurVl5MAAiWsqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2FmU3cyfzaJiv62BCrcA0wxweInNz4nkdExByACxhIhjJlc7Bna6dcF2op%2B1z8dm8NB3sNMiuW2k6UVWEHC8IanoBw%2FSUZmuQfHBfwJBQsdf7W2MGLR8xBWHwo0ypUVrIwuraiSACHP4PPGrSgR%2BfMNWhRHAtCoir298RupCQIdBDbzKqry85P6c53oFsJ3BdEJGT2PolOZn8LjM78FkVtTl48FBJhkRstu6qV0yzXbebMpoCWDLwJTFfkDJCq0pSfzV8oAN8XUHF%2BQr7n%2F5%2Byq9P5weU6pUYKdnI6P5fOXm9RzWdCDWLHz0iAHCb%2B26vp7xWuasRe4Msw7KhWZZ7TTejKI3yxVoNQeEthcxPig3Fzc5%2FTIqXpSgQHUKjrFzSZSIOmxjztjj47JyD%2FbTNxxmBtseRXYIVhZ85G%2FbjN79qJJjf7t2tOMHkod6UyFBGXiyYm0hqXLQS8Sis%2Fd3PZ4WZ1YZTywhLUJZxmySx9RMMzCmMdz1%2BL4PbvN9XaGOwOx5yNhKLcr2qh8Zbg6I3ysY%2FW8xgEqDus2%2Ba0zOKWFV3m%2FRUCejrEAmUQ9p0aRgf4xLAsy8u21NVxUnmOiarNw1cLlm%2Ft4KSre8A2hJuq%2BA6OoNIQjYNPntOZywoc73upGkkdmbldG3ND5MKXMr8QGOqUBCMzx6yUVIBu6Ec6hSUsJfRVJGyrwl1YtZzwwrpS19O3dbh5won6YmDzd2G%2FnAxnDNe5PmxiWZMS5ADfo%2BQB%2BF9fZYpW1NeKX%2BP7jcUOMpWpM9NMOGkXzllX8fE1rudXOyftVKebgbTyHVaGqsxk4d9Nq9yfntfGVYI7bMo0pJcA%2FBboYGYnilkgzTqdBFT%2BiB2c9Ivt2LKQlOof3o6YFtP%2FC501r&X-Amz-Signature=a937abcf4a30ab6607af599b01e894cff704a0d3328ffb730795e12c579117a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEZKKOAD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T231003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJl6pLKoS%2FOObxPWqgzGCHkEZowT3lgFT6eJTUFEY03AIgAWYqjftWEqIWlpLuoKQnyFISoKropJ3aurVl5MAAiWsqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2FmU3cyfzaJiv62BCrcA0wxweInNz4nkdExByACxhIhjJlc7Bna6dcF2op%2B1z8dm8NB3sNMiuW2k6UVWEHC8IanoBw%2FSUZmuQfHBfwJBQsdf7W2MGLR8xBWHwo0ypUVrIwuraiSACHP4PPGrSgR%2BfMNWhRHAtCoir298RupCQIdBDbzKqry85P6c53oFsJ3BdEJGT2PolOZn8LjM78FkVtTl48FBJhkRstu6qV0yzXbebMpoCWDLwJTFfkDJCq0pSfzV8oAN8XUHF%2BQr7n%2F5%2Byq9P5weU6pUYKdnI6P5fOXm9RzWdCDWLHz0iAHCb%2B26vp7xWuasRe4Msw7KhWZZ7TTejKI3yxVoNQeEthcxPig3Fzc5%2FTIqXpSgQHUKjrFzSZSIOmxjztjj47JyD%2FbTNxxmBtseRXYIVhZ85G%2FbjN79qJJjf7t2tOMHkod6UyFBGXiyYm0hqXLQS8Sis%2Fd3PZ4WZ1YZTywhLUJZxmySx9RMMzCmMdz1%2BL4PbvN9XaGOwOx5yNhKLcr2qh8Zbg6I3ysY%2FW8xgEqDus2%2Ba0zOKWFV3m%2FRUCejrEAmUQ9p0aRgf4xLAsy8u21NVxUnmOiarNw1cLlm%2Ft4KSre8A2hJuq%2BA6OoNIQjYNPntOZywoc73upGkkdmbldG3ND5MKXMr8QGOqUBCMzx6yUVIBu6Ec6hSUsJfRVJGyrwl1YtZzwwrpS19O3dbh5won6YmDzd2G%2FnAxnDNe5PmxiWZMS5ADfo%2BQB%2BF9fZYpW1NeKX%2BP7jcUOMpWpM9NMOGkXzllX8fE1rudXOyftVKebgbTyHVaGqsxk4d9Nq9yfntfGVYI7bMo0pJcA%2FBboYGYnilkgzTqdBFT%2BiB2c9Ivt2LKQlOof3o6YFtP%2FC501r&X-Amz-Signature=ff0729e1f145a883f5dc6c834c1f44e9493359bab5e707763752c737367ef7ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEZKKOAD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T231003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJl6pLKoS%2FOObxPWqgzGCHkEZowT3lgFT6eJTUFEY03AIgAWYqjftWEqIWlpLuoKQnyFISoKropJ3aurVl5MAAiWsqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2FmU3cyfzaJiv62BCrcA0wxweInNz4nkdExByACxhIhjJlc7Bna6dcF2op%2B1z8dm8NB3sNMiuW2k6UVWEHC8IanoBw%2FSUZmuQfHBfwJBQsdf7W2MGLR8xBWHwo0ypUVrIwuraiSACHP4PPGrSgR%2BfMNWhRHAtCoir298RupCQIdBDbzKqry85P6c53oFsJ3BdEJGT2PolOZn8LjM78FkVtTl48FBJhkRstu6qV0yzXbebMpoCWDLwJTFfkDJCq0pSfzV8oAN8XUHF%2BQr7n%2F5%2Byq9P5weU6pUYKdnI6P5fOXm9RzWdCDWLHz0iAHCb%2B26vp7xWuasRe4Msw7KhWZZ7TTejKI3yxVoNQeEthcxPig3Fzc5%2FTIqXpSgQHUKjrFzSZSIOmxjztjj47JyD%2FbTNxxmBtseRXYIVhZ85G%2FbjN79qJJjf7t2tOMHkod6UyFBGXiyYm0hqXLQS8Sis%2Fd3PZ4WZ1YZTywhLUJZxmySx9RMMzCmMdz1%2BL4PbvN9XaGOwOx5yNhKLcr2qh8Zbg6I3ysY%2FW8xgEqDus2%2Ba0zOKWFV3m%2FRUCejrEAmUQ9p0aRgf4xLAsy8u21NVxUnmOiarNw1cLlm%2Ft4KSre8A2hJuq%2BA6OoNIQjYNPntOZywoc73upGkkdmbldG3ND5MKXMr8QGOqUBCMzx6yUVIBu6Ec6hSUsJfRVJGyrwl1YtZzwwrpS19O3dbh5won6YmDzd2G%2FnAxnDNe5PmxiWZMS5ADfo%2BQB%2BF9fZYpW1NeKX%2BP7jcUOMpWpM9NMOGkXzllX8fE1rudXOyftVKebgbTyHVaGqsxk4d9Nq9yfntfGVYI7bMo0pJcA%2FBboYGYnilkgzTqdBFT%2BiB2c9Ivt2LKQlOof3o6YFtP%2FC501r&X-Amz-Signature=78af1bc909f9a93f6bce36393a3201e6fc9d1c04c1c4207cec71b4f327af037b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEZKKOAD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T231003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJl6pLKoS%2FOObxPWqgzGCHkEZowT3lgFT6eJTUFEY03AIgAWYqjftWEqIWlpLuoKQnyFISoKropJ3aurVl5MAAiWsqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2FmU3cyfzaJiv62BCrcA0wxweInNz4nkdExByACxhIhjJlc7Bna6dcF2op%2B1z8dm8NB3sNMiuW2k6UVWEHC8IanoBw%2FSUZmuQfHBfwJBQsdf7W2MGLR8xBWHwo0ypUVrIwuraiSACHP4PPGrSgR%2BfMNWhRHAtCoir298RupCQIdBDbzKqry85P6c53oFsJ3BdEJGT2PolOZn8LjM78FkVtTl48FBJhkRstu6qV0yzXbebMpoCWDLwJTFfkDJCq0pSfzV8oAN8XUHF%2BQr7n%2F5%2Byq9P5weU6pUYKdnI6P5fOXm9RzWdCDWLHz0iAHCb%2B26vp7xWuasRe4Msw7KhWZZ7TTejKI3yxVoNQeEthcxPig3Fzc5%2FTIqXpSgQHUKjrFzSZSIOmxjztjj47JyD%2FbTNxxmBtseRXYIVhZ85G%2FbjN79qJJjf7t2tOMHkod6UyFBGXiyYm0hqXLQS8Sis%2Fd3PZ4WZ1YZTywhLUJZxmySx9RMMzCmMdz1%2BL4PbvN9XaGOwOx5yNhKLcr2qh8Zbg6I3ysY%2FW8xgEqDus2%2Ba0zOKWFV3m%2FRUCejrEAmUQ9p0aRgf4xLAsy8u21NVxUnmOiarNw1cLlm%2Ft4KSre8A2hJuq%2BA6OoNIQjYNPntOZywoc73upGkkdmbldG3ND5MKXMr8QGOqUBCMzx6yUVIBu6Ec6hSUsJfRVJGyrwl1YtZzwwrpS19O3dbh5won6YmDzd2G%2FnAxnDNe5PmxiWZMS5ADfo%2BQB%2BF9fZYpW1NeKX%2BP7jcUOMpWpM9NMOGkXzllX8fE1rudXOyftVKebgbTyHVaGqsxk4d9Nq9yfntfGVYI7bMo0pJcA%2FBboYGYnilkgzTqdBFT%2BiB2c9Ivt2LKQlOof3o6YFtP%2FC501r&X-Amz-Signature=e703ee338cece1d302c7fa6f76b8c3e90deba9d15010a214a6ea7226cac0fb44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEZKKOAD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T231003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJl6pLKoS%2FOObxPWqgzGCHkEZowT3lgFT6eJTUFEY03AIgAWYqjftWEqIWlpLuoKQnyFISoKropJ3aurVl5MAAiWsqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2FmU3cyfzaJiv62BCrcA0wxweInNz4nkdExByACxhIhjJlc7Bna6dcF2op%2B1z8dm8NB3sNMiuW2k6UVWEHC8IanoBw%2FSUZmuQfHBfwJBQsdf7W2MGLR8xBWHwo0ypUVrIwuraiSACHP4PPGrSgR%2BfMNWhRHAtCoir298RupCQIdBDbzKqry85P6c53oFsJ3BdEJGT2PolOZn8LjM78FkVtTl48FBJhkRstu6qV0yzXbebMpoCWDLwJTFfkDJCq0pSfzV8oAN8XUHF%2BQr7n%2F5%2Byq9P5weU6pUYKdnI6P5fOXm9RzWdCDWLHz0iAHCb%2B26vp7xWuasRe4Msw7KhWZZ7TTejKI3yxVoNQeEthcxPig3Fzc5%2FTIqXpSgQHUKjrFzSZSIOmxjztjj47JyD%2FbTNxxmBtseRXYIVhZ85G%2FbjN79qJJjf7t2tOMHkod6UyFBGXiyYm0hqXLQS8Sis%2Fd3PZ4WZ1YZTywhLUJZxmySx9RMMzCmMdz1%2BL4PbvN9XaGOwOx5yNhKLcr2qh8Zbg6I3ysY%2FW8xgEqDus2%2Ba0zOKWFV3m%2FRUCejrEAmUQ9p0aRgf4xLAsy8u21NVxUnmOiarNw1cLlm%2Ft4KSre8A2hJuq%2BA6OoNIQjYNPntOZywoc73upGkkdmbldG3ND5MKXMr8QGOqUBCMzx6yUVIBu6Ec6hSUsJfRVJGyrwl1YtZzwwrpS19O3dbh5won6YmDzd2G%2FnAxnDNe5PmxiWZMS5ADfo%2BQB%2BF9fZYpW1NeKX%2BP7jcUOMpWpM9NMOGkXzllX8fE1rudXOyftVKebgbTyHVaGqsxk4d9Nq9yfntfGVYI7bMo0pJcA%2FBboYGYnilkgzTqdBFT%2BiB2c9Ivt2LKQlOof3o6YFtP%2FC501r&X-Amz-Signature=fe2582f8f6fa0181414007729fd111dc6d19c1502089fceb778f13852b13b0c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: get official docs link

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEZKKOAD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T231003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJl6pLKoS%2FOObxPWqgzGCHkEZowT3lgFT6eJTUFEY03AIgAWYqjftWEqIWlpLuoKQnyFISoKropJ3aurVl5MAAiWsqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2FmU3cyfzaJiv62BCrcA0wxweInNz4nkdExByACxhIhjJlc7Bna6dcF2op%2B1z8dm8NB3sNMiuW2k6UVWEHC8IanoBw%2FSUZmuQfHBfwJBQsdf7W2MGLR8xBWHwo0ypUVrIwuraiSACHP4PPGrSgR%2BfMNWhRHAtCoir298RupCQIdBDbzKqry85P6c53oFsJ3BdEJGT2PolOZn8LjM78FkVtTl48FBJhkRstu6qV0yzXbebMpoCWDLwJTFfkDJCq0pSfzV8oAN8XUHF%2BQr7n%2F5%2Byq9P5weU6pUYKdnI6P5fOXm9RzWdCDWLHz0iAHCb%2B26vp7xWuasRe4Msw7KhWZZ7TTejKI3yxVoNQeEthcxPig3Fzc5%2FTIqXpSgQHUKjrFzSZSIOmxjztjj47JyD%2FbTNxxmBtseRXYIVhZ85G%2FbjN79qJJjf7t2tOMHkod6UyFBGXiyYm0hqXLQS8Sis%2Fd3PZ4WZ1YZTywhLUJZxmySx9RMMzCmMdz1%2BL4PbvN9XaGOwOx5yNhKLcr2qh8Zbg6I3ysY%2FW8xgEqDus2%2Ba0zOKWFV3m%2FRUCejrEAmUQ9p0aRgf4xLAsy8u21NVxUnmOiarNw1cLlm%2Ft4KSre8A2hJuq%2BA6OoNIQjYNPntOZywoc73upGkkdmbldG3ND5MKXMr8QGOqUBCMzx6yUVIBu6Ec6hSUsJfRVJGyrwl1YtZzwwrpS19O3dbh5won6YmDzd2G%2FnAxnDNe5PmxiWZMS5ADfo%2BQB%2BF9fZYpW1NeKX%2BP7jcUOMpWpM9NMOGkXzllX8fE1rudXOyftVKebgbTyHVaGqsxk4d9Nq9yfntfGVYI7bMo0pJcA%2FBboYGYnilkgzTqdBFT%2BiB2c9Ivt2LKQlOof3o6YFtP%2FC501r&X-Amz-Signature=37e0ee308ae76e06bf6d38faa013dec8719381955b1edf5a7718b49514ce3e4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO: rviz img

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

TODO: add rviz section

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEZKKOAD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T231003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJl6pLKoS%2FOObxPWqgzGCHkEZowT3lgFT6eJTUFEY03AIgAWYqjftWEqIWlpLuoKQnyFISoKropJ3aurVl5MAAiWsqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2FmU3cyfzaJiv62BCrcA0wxweInNz4nkdExByACxhIhjJlc7Bna6dcF2op%2B1z8dm8NB3sNMiuW2k6UVWEHC8IanoBw%2FSUZmuQfHBfwJBQsdf7W2MGLR8xBWHwo0ypUVrIwuraiSACHP4PPGrSgR%2BfMNWhRHAtCoir298RupCQIdBDbzKqry85P6c53oFsJ3BdEJGT2PolOZn8LjM78FkVtTl48FBJhkRstu6qV0yzXbebMpoCWDLwJTFfkDJCq0pSfzV8oAN8XUHF%2BQr7n%2F5%2Byq9P5weU6pUYKdnI6P5fOXm9RzWdCDWLHz0iAHCb%2B26vp7xWuasRe4Msw7KhWZZ7TTejKI3yxVoNQeEthcxPig3Fzc5%2FTIqXpSgQHUKjrFzSZSIOmxjztjj47JyD%2FbTNxxmBtseRXYIVhZ85G%2FbjN79qJJjf7t2tOMHkod6UyFBGXiyYm0hqXLQS8Sis%2Fd3PZ4WZ1YZTywhLUJZxmySx9RMMzCmMdz1%2BL4PbvN9XaGOwOx5yNhKLcr2qh8Zbg6I3ysY%2FW8xgEqDus2%2Ba0zOKWFV3m%2FRUCejrEAmUQ9p0aRgf4xLAsy8u21NVxUnmOiarNw1cLlm%2Ft4KSre8A2hJuq%2BA6OoNIQjYNPntOZywoc73upGkkdmbldG3ND5MKXMr8QGOqUBCMzx6yUVIBu6Ec6hSUsJfRVJGyrwl1YtZzwwrpS19O3dbh5won6YmDzd2G%2FnAxnDNe5PmxiWZMS5ADfo%2BQB%2BF9fZYpW1NeKX%2BP7jcUOMpWpM9NMOGkXzllX8fE1rudXOyftVKebgbTyHVaGqsxk4d9Nq9yfntfGVYI7bMo0pJcA%2FBboYGYnilkgzTqdBFT%2BiB2c9Ivt2LKQlOof3o6YFtP%2FC501r&X-Amz-Signature=d9d008a2257b468ff94f5091c241708c76875fd4e60d41a9da872bb878be93bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
