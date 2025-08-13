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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OTCT6RA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOzdwh9KTPt5AxQWA99%2BSEyCRUqyPjqcHGddtNoIOXLAiEA%2BTUDUChUWQrOkLXLO2AYNWkOXhS32LGVRo6qFzjNztwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDF%2BV62InrjevZouzryrcA6tm%2FjuKm%2FUvvyz4eI1ziEG0CQ5S8wu7tq4oEDHPdBRGO3R8XEouikC3YG8EPLBa5E%2BUt0rCOQcLy3ha9EoC7MEs176utKL5i1FMUi4%2Bglq1gz2KRFcFeRq%2FZGr2e3r37fxoew5HiijuYTMOzv9WhXX4e0zK5hWJ%2ByqTRnkA2ND8c%2BJ4MXFzamA6R5g09%2B2RnjCdM17yDSKiN1qwEHcaEN4nQ3Z3NuTgf1VHGBJr1oWw8frgP3NVTenrbQFK4bo4n7Up0G%2FUvJCCtn0haQDhWbETRCi7YG5tqSX5xFiNgGcc5DHad9YLVl2UWVMUDCqqMjVWbUzECePdd%2FID8LH6TQckzndRP4FDX2YBAFexZdmNDaL2%2FXEQjz2%2FAg9WPXCVbz01hEbuiE0WaAlWTNu3MtDRnxoeowT0iWvvk%2FNpJtUGmgiLay53QHfZKZioRRiTOiXpbMdBdiIueC3pHVX14AA2ujHMkdaQMHp9KIsYWfngi3pPzg1rI96Holl%2FcWGz9%2BrdWMKPx5zujaiJ0z5fBvPkkXK4lSQjO91KnQ8uYlR8ctbJRucR3PS4gfjABxRhnd7QGWQwC8E7q0I6zXqG%2FiWnE0Cz%2FLFPoAxMErUOVkkFizePfLzIMc7d%2FPAXMKSG8MQGOqUB8vppoxzNe2xgmHlONwCI4MYCWa7orjM4B%2FjDgmpaeTuIpoLDM5qKpmHUc0fEgViU2zbUsny3J114j%2BkPp1JUjtE4X6j6TOabI%2FUj90h4K6hzA5GkDGc%2F1B1LO3jn6KaMGs3I8LjlxoY72KyYb%2BiqX2gG9xBqesRcSKGJJp0Jqmnt%2F8xUuY8o2ZD%2FheEn0vRiEeXBBM4eOg5L3V2lN3n8B6k09Pep&X-Amz-Signature=74dc0a197abcbcd7c0465a200e1d557f6915a5a4ea6573e398423c76fe69101d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWM45HV7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkZ1OIf9EgiyJuftvyepB%2BhlHLwxDEsSEIMV3cMEMjEwIhAMmeQ9kdHyxMh34K9BkqP%2F%2FYUv18CR8Zen0VguxCNDw%2BKv8DCCQQABoMNjM3NDIzMTgzODA1IgwYc6z%2B6iqdzgYfZlUq3ANPxQVC2P1XEUt1L7r9A%2FAZtpqyTPLdAbGYo4RSiXiXKxaFpYZfrRIuQjJfk78AF2uIq7n%2B5vzSKD6TOUKXJm9lb0hbVKKjLIqSyrE2jQlsOWeLWMq0yBy4DwTIVVg29TQtH5BV%2FV0Eq%2FAIQ6XWK0S0%2F%2BvoUeLB%2B6HL7iQDXJEl2ldxyRE86I1fAWADYL6A2CDB7gTf4nSBsPCMEejU%2Frxk54m6X%2FW1yBRR0JhxC4gclMo1ShpUusCGGXiVDfUZsxkd9s7Wcrt%2BnNDfyEIf7P7wzW2LV%2F5LACUSi4EQZhVO3VKuFuc9HQtOx6QsdJYS4UVSGgx3Dl9WbpIF6mju44o2ykAhoxUkEQw8Nn9kWpd9ikrognzQhJsOlCbNNiUihdDnZujQ%2BymdWe5eKrUt32LSwrZo88S9nQfpFL1pwXlDmghavWmLjIKTePwXF4omDzSIcySTrSV22DzRSdWlhB1WUnkqcwoKajOsRf%2FcF5nUUF0OR95pDM4AFfZTvpjZY3LtkQ5JY51gt4a2O74UHG2zo9A7zov7x7fb5rxC2fKD5UU1kY04%2FIJJcP6fVG1HOXzmVFTK4R8qEsBjrj0XWvxumxIA5P058gs%2BiLS%2F3GKOZQD2Qhl5oESUW%2BD93zDthfDEBjqkAWUx8AfqeSayG4Bt%2FYw50socePh33KogG1cM5Ad%2F2G4HVJui%2FGPIp4%2BD%2FHZZoc9AZ%2FBvFu6F%2FjyzWcnDoxddVIsAPxN0XuvxZgD2gMdkNntSyP0feTnaMylLn0TKCgTQCVw%2BZFLcLNC%2Bpn1RMgcxtQpEwNvESmFw%2BDugnPqPTHMnk6tz%2BGQsTYaPEt1W9j3UccXbMGARu4mA0GXs2b1UB7HMS8rh&X-Amz-Signature=ecb3435c2a42977dc7f55e31f0c25de04c1ba50ba6ad441501d091f06ff25b24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWM45HV7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkZ1OIf9EgiyJuftvyepB%2BhlHLwxDEsSEIMV3cMEMjEwIhAMmeQ9kdHyxMh34K9BkqP%2F%2FYUv18CR8Zen0VguxCNDw%2BKv8DCCQQABoMNjM3NDIzMTgzODA1IgwYc6z%2B6iqdzgYfZlUq3ANPxQVC2P1XEUt1L7r9A%2FAZtpqyTPLdAbGYo4RSiXiXKxaFpYZfrRIuQjJfk78AF2uIq7n%2B5vzSKD6TOUKXJm9lb0hbVKKjLIqSyrE2jQlsOWeLWMq0yBy4DwTIVVg29TQtH5BV%2FV0Eq%2FAIQ6XWK0S0%2F%2BvoUeLB%2B6HL7iQDXJEl2ldxyRE86I1fAWADYL6A2CDB7gTf4nSBsPCMEejU%2Frxk54m6X%2FW1yBRR0JhxC4gclMo1ShpUusCGGXiVDfUZsxkd9s7Wcrt%2BnNDfyEIf7P7wzW2LV%2F5LACUSi4EQZhVO3VKuFuc9HQtOx6QsdJYS4UVSGgx3Dl9WbpIF6mju44o2ykAhoxUkEQw8Nn9kWpd9ikrognzQhJsOlCbNNiUihdDnZujQ%2BymdWe5eKrUt32LSwrZo88S9nQfpFL1pwXlDmghavWmLjIKTePwXF4omDzSIcySTrSV22DzRSdWlhB1WUnkqcwoKajOsRf%2FcF5nUUF0OR95pDM4AFfZTvpjZY3LtkQ5JY51gt4a2O74UHG2zo9A7zov7x7fb5rxC2fKD5UU1kY04%2FIJJcP6fVG1HOXzmVFTK4R8qEsBjrj0XWvxumxIA5P058gs%2BiLS%2F3GKOZQD2Qhl5oESUW%2BD93zDthfDEBjqkAWUx8AfqeSayG4Bt%2FYw50socePh33KogG1cM5Ad%2F2G4HVJui%2FGPIp4%2BD%2FHZZoc9AZ%2FBvFu6F%2FjyzWcnDoxddVIsAPxN0XuvxZgD2gMdkNntSyP0feTnaMylLn0TKCgTQCVw%2BZFLcLNC%2Bpn1RMgcxtQpEwNvESmFw%2BDugnPqPTHMnk6tz%2BGQsTYaPEt1W9j3UccXbMGARu4mA0GXs2b1UB7HMS8rh&X-Amz-Signature=552d1b1e0cb9664ce49bedfd8fd658d5ed4603ecafd37b364d2c3ce8dfd9c0ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWM45HV7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkZ1OIf9EgiyJuftvyepB%2BhlHLwxDEsSEIMV3cMEMjEwIhAMmeQ9kdHyxMh34K9BkqP%2F%2FYUv18CR8Zen0VguxCNDw%2BKv8DCCQQABoMNjM3NDIzMTgzODA1IgwYc6z%2B6iqdzgYfZlUq3ANPxQVC2P1XEUt1L7r9A%2FAZtpqyTPLdAbGYo4RSiXiXKxaFpYZfrRIuQjJfk78AF2uIq7n%2B5vzSKD6TOUKXJm9lb0hbVKKjLIqSyrE2jQlsOWeLWMq0yBy4DwTIVVg29TQtH5BV%2FV0Eq%2FAIQ6XWK0S0%2F%2BvoUeLB%2B6HL7iQDXJEl2ldxyRE86I1fAWADYL6A2CDB7gTf4nSBsPCMEejU%2Frxk54m6X%2FW1yBRR0JhxC4gclMo1ShpUusCGGXiVDfUZsxkd9s7Wcrt%2BnNDfyEIf7P7wzW2LV%2F5LACUSi4EQZhVO3VKuFuc9HQtOx6QsdJYS4UVSGgx3Dl9WbpIF6mju44o2ykAhoxUkEQw8Nn9kWpd9ikrognzQhJsOlCbNNiUihdDnZujQ%2BymdWe5eKrUt32LSwrZo88S9nQfpFL1pwXlDmghavWmLjIKTePwXF4omDzSIcySTrSV22DzRSdWlhB1WUnkqcwoKajOsRf%2FcF5nUUF0OR95pDM4AFfZTvpjZY3LtkQ5JY51gt4a2O74UHG2zo9A7zov7x7fb5rxC2fKD5UU1kY04%2FIJJcP6fVG1HOXzmVFTK4R8qEsBjrj0XWvxumxIA5P058gs%2BiLS%2F3GKOZQD2Qhl5oESUW%2BD93zDthfDEBjqkAWUx8AfqeSayG4Bt%2FYw50socePh33KogG1cM5Ad%2F2G4HVJui%2FGPIp4%2BD%2FHZZoc9AZ%2FBvFu6F%2FjyzWcnDoxddVIsAPxN0XuvxZgD2gMdkNntSyP0feTnaMylLn0TKCgTQCVw%2BZFLcLNC%2Bpn1RMgcxtQpEwNvESmFw%2BDugnPqPTHMnk6tz%2BGQsTYaPEt1W9j3UccXbMGARu4mA0GXs2b1UB7HMS8rh&X-Amz-Signature=a17bed6d210304d26366c188b22b8ea48d3cc3cf943fcc5145db54376e50f74f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWM45HV7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkZ1OIf9EgiyJuftvyepB%2BhlHLwxDEsSEIMV3cMEMjEwIhAMmeQ9kdHyxMh34K9BkqP%2F%2FYUv18CR8Zen0VguxCNDw%2BKv8DCCQQABoMNjM3NDIzMTgzODA1IgwYc6z%2B6iqdzgYfZlUq3ANPxQVC2P1XEUt1L7r9A%2FAZtpqyTPLdAbGYo4RSiXiXKxaFpYZfrRIuQjJfk78AF2uIq7n%2B5vzSKD6TOUKXJm9lb0hbVKKjLIqSyrE2jQlsOWeLWMq0yBy4DwTIVVg29TQtH5BV%2FV0Eq%2FAIQ6XWK0S0%2F%2BvoUeLB%2B6HL7iQDXJEl2ldxyRE86I1fAWADYL6A2CDB7gTf4nSBsPCMEejU%2Frxk54m6X%2FW1yBRR0JhxC4gclMo1ShpUusCGGXiVDfUZsxkd9s7Wcrt%2BnNDfyEIf7P7wzW2LV%2F5LACUSi4EQZhVO3VKuFuc9HQtOx6QsdJYS4UVSGgx3Dl9WbpIF6mju44o2ykAhoxUkEQw8Nn9kWpd9ikrognzQhJsOlCbNNiUihdDnZujQ%2BymdWe5eKrUt32LSwrZo88S9nQfpFL1pwXlDmghavWmLjIKTePwXF4omDzSIcySTrSV22DzRSdWlhB1WUnkqcwoKajOsRf%2FcF5nUUF0OR95pDM4AFfZTvpjZY3LtkQ5JY51gt4a2O74UHG2zo9A7zov7x7fb5rxC2fKD5UU1kY04%2FIJJcP6fVG1HOXzmVFTK4R8qEsBjrj0XWvxumxIA5P058gs%2BiLS%2F3GKOZQD2Qhl5oESUW%2BD93zDthfDEBjqkAWUx8AfqeSayG4Bt%2FYw50socePh33KogG1cM5Ad%2F2G4HVJui%2FGPIp4%2BD%2FHZZoc9AZ%2FBvFu6F%2FjyzWcnDoxddVIsAPxN0XuvxZgD2gMdkNntSyP0feTnaMylLn0TKCgTQCVw%2BZFLcLNC%2Bpn1RMgcxtQpEwNvESmFw%2BDugnPqPTHMnk6tz%2BGQsTYaPEt1W9j3UccXbMGARu4mA0GXs2b1UB7HMS8rh&X-Amz-Signature=5265544affe7a105a33e6cff1f9d22312304cb8566facb8799df33c9d257090a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWM45HV7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkZ1OIf9EgiyJuftvyepB%2BhlHLwxDEsSEIMV3cMEMjEwIhAMmeQ9kdHyxMh34K9BkqP%2F%2FYUv18CR8Zen0VguxCNDw%2BKv8DCCQQABoMNjM3NDIzMTgzODA1IgwYc6z%2B6iqdzgYfZlUq3ANPxQVC2P1XEUt1L7r9A%2FAZtpqyTPLdAbGYo4RSiXiXKxaFpYZfrRIuQjJfk78AF2uIq7n%2B5vzSKD6TOUKXJm9lb0hbVKKjLIqSyrE2jQlsOWeLWMq0yBy4DwTIVVg29TQtH5BV%2FV0Eq%2FAIQ6XWK0S0%2F%2BvoUeLB%2B6HL7iQDXJEl2ldxyRE86I1fAWADYL6A2CDB7gTf4nSBsPCMEejU%2Frxk54m6X%2FW1yBRR0JhxC4gclMo1ShpUusCGGXiVDfUZsxkd9s7Wcrt%2BnNDfyEIf7P7wzW2LV%2F5LACUSi4EQZhVO3VKuFuc9HQtOx6QsdJYS4UVSGgx3Dl9WbpIF6mju44o2ykAhoxUkEQw8Nn9kWpd9ikrognzQhJsOlCbNNiUihdDnZujQ%2BymdWe5eKrUt32LSwrZo88S9nQfpFL1pwXlDmghavWmLjIKTePwXF4omDzSIcySTrSV22DzRSdWlhB1WUnkqcwoKajOsRf%2FcF5nUUF0OR95pDM4AFfZTvpjZY3LtkQ5JY51gt4a2O74UHG2zo9A7zov7x7fb5rxC2fKD5UU1kY04%2FIJJcP6fVG1HOXzmVFTK4R8qEsBjrj0XWvxumxIA5P058gs%2BiLS%2F3GKOZQD2Qhl5oESUW%2BD93zDthfDEBjqkAWUx8AfqeSayG4Bt%2FYw50socePh33KogG1cM5Ad%2F2G4HVJui%2FGPIp4%2BD%2FHZZoc9AZ%2FBvFu6F%2FjyzWcnDoxddVIsAPxN0XuvxZgD2gMdkNntSyP0feTnaMylLn0TKCgTQCVw%2BZFLcLNC%2Bpn1RMgcxtQpEwNvESmFw%2BDugnPqPTHMnk6tz%2BGQsTYaPEt1W9j3UccXbMGARu4mA0GXs2b1UB7HMS8rh&X-Amz-Signature=7a63cd4938f78a75ce12312408a2a40851c1e04c402e3f5c13575dce22f74aa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWM45HV7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkZ1OIf9EgiyJuftvyepB%2BhlHLwxDEsSEIMV3cMEMjEwIhAMmeQ9kdHyxMh34K9BkqP%2F%2FYUv18CR8Zen0VguxCNDw%2BKv8DCCQQABoMNjM3NDIzMTgzODA1IgwYc6z%2B6iqdzgYfZlUq3ANPxQVC2P1XEUt1L7r9A%2FAZtpqyTPLdAbGYo4RSiXiXKxaFpYZfrRIuQjJfk78AF2uIq7n%2B5vzSKD6TOUKXJm9lb0hbVKKjLIqSyrE2jQlsOWeLWMq0yBy4DwTIVVg29TQtH5BV%2FV0Eq%2FAIQ6XWK0S0%2F%2BvoUeLB%2B6HL7iQDXJEl2ldxyRE86I1fAWADYL6A2CDB7gTf4nSBsPCMEejU%2Frxk54m6X%2FW1yBRR0JhxC4gclMo1ShpUusCGGXiVDfUZsxkd9s7Wcrt%2BnNDfyEIf7P7wzW2LV%2F5LACUSi4EQZhVO3VKuFuc9HQtOx6QsdJYS4UVSGgx3Dl9WbpIF6mju44o2ykAhoxUkEQw8Nn9kWpd9ikrognzQhJsOlCbNNiUihdDnZujQ%2BymdWe5eKrUt32LSwrZo88S9nQfpFL1pwXlDmghavWmLjIKTePwXF4omDzSIcySTrSV22DzRSdWlhB1WUnkqcwoKajOsRf%2FcF5nUUF0OR95pDM4AFfZTvpjZY3LtkQ5JY51gt4a2O74UHG2zo9A7zov7x7fb5rxC2fKD5UU1kY04%2FIJJcP6fVG1HOXzmVFTK4R8qEsBjrj0XWvxumxIA5P058gs%2BiLS%2F3GKOZQD2Qhl5oESUW%2BD93zDthfDEBjqkAWUx8AfqeSayG4Bt%2FYw50socePh33KogG1cM5Ad%2F2G4HVJui%2FGPIp4%2BD%2FHZZoc9AZ%2FBvFu6F%2FjyzWcnDoxddVIsAPxN0XuvxZgD2gMdkNntSyP0feTnaMylLn0TKCgTQCVw%2BZFLcLNC%2Bpn1RMgcxtQpEwNvESmFw%2BDugnPqPTHMnk6tz%2BGQsTYaPEt1W9j3UccXbMGARu4mA0GXs2b1UB7HMS8rh&X-Amz-Signature=4774a01455b7512a930c7e7d8843179405f8ad188bebcbaae3e840efe8f7d1fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWM45HV7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkZ1OIf9EgiyJuftvyepB%2BhlHLwxDEsSEIMV3cMEMjEwIhAMmeQ9kdHyxMh34K9BkqP%2F%2FYUv18CR8Zen0VguxCNDw%2BKv8DCCQQABoMNjM3NDIzMTgzODA1IgwYc6z%2B6iqdzgYfZlUq3ANPxQVC2P1XEUt1L7r9A%2FAZtpqyTPLdAbGYo4RSiXiXKxaFpYZfrRIuQjJfk78AF2uIq7n%2B5vzSKD6TOUKXJm9lb0hbVKKjLIqSyrE2jQlsOWeLWMq0yBy4DwTIVVg29TQtH5BV%2FV0Eq%2FAIQ6XWK0S0%2F%2BvoUeLB%2B6HL7iQDXJEl2ldxyRE86I1fAWADYL6A2CDB7gTf4nSBsPCMEejU%2Frxk54m6X%2FW1yBRR0JhxC4gclMo1ShpUusCGGXiVDfUZsxkd9s7Wcrt%2BnNDfyEIf7P7wzW2LV%2F5LACUSi4EQZhVO3VKuFuc9HQtOx6QsdJYS4UVSGgx3Dl9WbpIF6mju44o2ykAhoxUkEQw8Nn9kWpd9ikrognzQhJsOlCbNNiUihdDnZujQ%2BymdWe5eKrUt32LSwrZo88S9nQfpFL1pwXlDmghavWmLjIKTePwXF4omDzSIcySTrSV22DzRSdWlhB1WUnkqcwoKajOsRf%2FcF5nUUF0OR95pDM4AFfZTvpjZY3LtkQ5JY51gt4a2O74UHG2zo9A7zov7x7fb5rxC2fKD5UU1kY04%2FIJJcP6fVG1HOXzmVFTK4R8qEsBjrj0XWvxumxIA5P058gs%2BiLS%2F3GKOZQD2Qhl5oESUW%2BD93zDthfDEBjqkAWUx8AfqeSayG4Bt%2FYw50socePh33KogG1cM5Ad%2F2G4HVJui%2FGPIp4%2BD%2FHZZoc9AZ%2FBvFu6F%2FjyzWcnDoxddVIsAPxN0XuvxZgD2gMdkNntSyP0feTnaMylLn0TKCgTQCVw%2BZFLcLNC%2Bpn1RMgcxtQpEwNvESmFw%2BDugnPqPTHMnk6tz%2BGQsTYaPEt1W9j3UccXbMGARu4mA0GXs2b1UB7HMS8rh&X-Amz-Signature=ee704840df138be1658a56519551e7520930218a199fbff6965b1fb320cd0d45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWM45HV7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkZ1OIf9EgiyJuftvyepB%2BhlHLwxDEsSEIMV3cMEMjEwIhAMmeQ9kdHyxMh34K9BkqP%2F%2FYUv18CR8Zen0VguxCNDw%2BKv8DCCQQABoMNjM3NDIzMTgzODA1IgwYc6z%2B6iqdzgYfZlUq3ANPxQVC2P1XEUt1L7r9A%2FAZtpqyTPLdAbGYo4RSiXiXKxaFpYZfrRIuQjJfk78AF2uIq7n%2B5vzSKD6TOUKXJm9lb0hbVKKjLIqSyrE2jQlsOWeLWMq0yBy4DwTIVVg29TQtH5BV%2FV0Eq%2FAIQ6XWK0S0%2F%2BvoUeLB%2B6HL7iQDXJEl2ldxyRE86I1fAWADYL6A2CDB7gTf4nSBsPCMEejU%2Frxk54m6X%2FW1yBRR0JhxC4gclMo1ShpUusCGGXiVDfUZsxkd9s7Wcrt%2BnNDfyEIf7P7wzW2LV%2F5LACUSi4EQZhVO3VKuFuc9HQtOx6QsdJYS4UVSGgx3Dl9WbpIF6mju44o2ykAhoxUkEQw8Nn9kWpd9ikrognzQhJsOlCbNNiUihdDnZujQ%2BymdWe5eKrUt32LSwrZo88S9nQfpFL1pwXlDmghavWmLjIKTePwXF4omDzSIcySTrSV22DzRSdWlhB1WUnkqcwoKajOsRf%2FcF5nUUF0OR95pDM4AFfZTvpjZY3LtkQ5JY51gt4a2O74UHG2zo9A7zov7x7fb5rxC2fKD5UU1kY04%2FIJJcP6fVG1HOXzmVFTK4R8qEsBjrj0XWvxumxIA5P058gs%2BiLS%2F3GKOZQD2Qhl5oESUW%2BD93zDthfDEBjqkAWUx8AfqeSayG4Bt%2FYw50socePh33KogG1cM5Ad%2F2G4HVJui%2FGPIp4%2BD%2FHZZoc9AZ%2FBvFu6F%2FjyzWcnDoxddVIsAPxN0XuvxZgD2gMdkNntSyP0feTnaMylLn0TKCgTQCVw%2BZFLcLNC%2Bpn1RMgcxtQpEwNvESmFw%2BDugnPqPTHMnk6tz%2BGQsTYaPEt1W9j3UccXbMGARu4mA0GXs2b1UB7HMS8rh&X-Amz-Signature=d5947c68663b8f92abd951ac83a094291719790615905aa4cf7ff219a7851d50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWM45HV7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkZ1OIf9EgiyJuftvyepB%2BhlHLwxDEsSEIMV3cMEMjEwIhAMmeQ9kdHyxMh34K9BkqP%2F%2FYUv18CR8Zen0VguxCNDw%2BKv8DCCQQABoMNjM3NDIzMTgzODA1IgwYc6z%2B6iqdzgYfZlUq3ANPxQVC2P1XEUt1L7r9A%2FAZtpqyTPLdAbGYo4RSiXiXKxaFpYZfrRIuQjJfk78AF2uIq7n%2B5vzSKD6TOUKXJm9lb0hbVKKjLIqSyrE2jQlsOWeLWMq0yBy4DwTIVVg29TQtH5BV%2FV0Eq%2FAIQ6XWK0S0%2F%2BvoUeLB%2B6HL7iQDXJEl2ldxyRE86I1fAWADYL6A2CDB7gTf4nSBsPCMEejU%2Frxk54m6X%2FW1yBRR0JhxC4gclMo1ShpUusCGGXiVDfUZsxkd9s7Wcrt%2BnNDfyEIf7P7wzW2LV%2F5LACUSi4EQZhVO3VKuFuc9HQtOx6QsdJYS4UVSGgx3Dl9WbpIF6mju44o2ykAhoxUkEQw8Nn9kWpd9ikrognzQhJsOlCbNNiUihdDnZujQ%2BymdWe5eKrUt32LSwrZo88S9nQfpFL1pwXlDmghavWmLjIKTePwXF4omDzSIcySTrSV22DzRSdWlhB1WUnkqcwoKajOsRf%2FcF5nUUF0OR95pDM4AFfZTvpjZY3LtkQ5JY51gt4a2O74UHG2zo9A7zov7x7fb5rxC2fKD5UU1kY04%2FIJJcP6fVG1HOXzmVFTK4R8qEsBjrj0XWvxumxIA5P058gs%2BiLS%2F3GKOZQD2Qhl5oESUW%2BD93zDthfDEBjqkAWUx8AfqeSayG4Bt%2FYw50socePh33KogG1cM5Ad%2F2G4HVJui%2FGPIp4%2BD%2FHZZoc9AZ%2FBvFu6F%2FjyzWcnDoxddVIsAPxN0XuvxZgD2gMdkNntSyP0feTnaMylLn0TKCgTQCVw%2BZFLcLNC%2Bpn1RMgcxtQpEwNvESmFw%2BDugnPqPTHMnk6tz%2BGQsTYaPEt1W9j3UccXbMGARu4mA0GXs2b1UB7HMS8rh&X-Amz-Signature=69c25659ff57eeef34c784fd63d28d9f8e57a751c44ef9338e04e38616ef1f6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWM45HV7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkZ1OIf9EgiyJuftvyepB%2BhlHLwxDEsSEIMV3cMEMjEwIhAMmeQ9kdHyxMh34K9BkqP%2F%2FYUv18CR8Zen0VguxCNDw%2BKv8DCCQQABoMNjM3NDIzMTgzODA1IgwYc6z%2B6iqdzgYfZlUq3ANPxQVC2P1XEUt1L7r9A%2FAZtpqyTPLdAbGYo4RSiXiXKxaFpYZfrRIuQjJfk78AF2uIq7n%2B5vzSKD6TOUKXJm9lb0hbVKKjLIqSyrE2jQlsOWeLWMq0yBy4DwTIVVg29TQtH5BV%2FV0Eq%2FAIQ6XWK0S0%2F%2BvoUeLB%2B6HL7iQDXJEl2ldxyRE86I1fAWADYL6A2CDB7gTf4nSBsPCMEejU%2Frxk54m6X%2FW1yBRR0JhxC4gclMo1ShpUusCGGXiVDfUZsxkd9s7Wcrt%2BnNDfyEIf7P7wzW2LV%2F5LACUSi4EQZhVO3VKuFuc9HQtOx6QsdJYS4UVSGgx3Dl9WbpIF6mju44o2ykAhoxUkEQw8Nn9kWpd9ikrognzQhJsOlCbNNiUihdDnZujQ%2BymdWe5eKrUt32LSwrZo88S9nQfpFL1pwXlDmghavWmLjIKTePwXF4omDzSIcySTrSV22DzRSdWlhB1WUnkqcwoKajOsRf%2FcF5nUUF0OR95pDM4AFfZTvpjZY3LtkQ5JY51gt4a2O74UHG2zo9A7zov7x7fb5rxC2fKD5UU1kY04%2FIJJcP6fVG1HOXzmVFTK4R8qEsBjrj0XWvxumxIA5P058gs%2BiLS%2F3GKOZQD2Qhl5oESUW%2BD93zDthfDEBjqkAWUx8AfqeSayG4Bt%2FYw50socePh33KogG1cM5Ad%2F2G4HVJui%2FGPIp4%2BD%2FHZZoc9AZ%2FBvFu6F%2FjyzWcnDoxddVIsAPxN0XuvxZgD2gMdkNntSyP0feTnaMylLn0TKCgTQCVw%2BZFLcLNC%2Bpn1RMgcxtQpEwNvESmFw%2BDugnPqPTHMnk6tz%2BGQsTYaPEt1W9j3UccXbMGARu4mA0GXs2b1UB7HMS8rh&X-Amz-Signature=5265544affe7a105a33e6cff1f9d22312304cb8566facb8799df33c9d257090a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
