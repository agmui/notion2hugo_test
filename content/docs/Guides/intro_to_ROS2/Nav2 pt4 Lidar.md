---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-07-29T01:28:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-07-29T01:28:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3M43IWG%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCtypV%2F1Z3dlhQQsfpyopdKcyrPgkChw%2BbbsTCIXKAhhgIgXfn1H0pKZf45cPEEYUXjIWMBk2CUoAE%2Be3IH9yM2Y6IqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2Fr3PbEqRvUEeLUFyrcA%2BQNCNHo8mH%2BO%2Bfmgk9NbZyvQr1S6RoElIPwOZxXLof2dpzQeh7Y4ycZJsF0y6U8yr1gd568yDr%2FwPdumsqSb2O1PLNd9s3Pc59xeAI4%2Fgj9%2BhJ1oG%2B2xwwYnjDyizvPhJaasLxVJnBVO6305yKRn1b8VtZ8OsyuB%2FLvQzSqsE25Te3urt6EpdHnO3WG%2BLmaAy42Fb4h9zOIpv8gaWQc5TQ9mpwAKBolkhMFoeL%2Fjbeo28QPVSxQrWGG3TFtdbKyeJ0S3TTSFUS2jYGp%2Bic4M4gOzAwgPU9Q%2FxnE7LTdO2XmoDk7dxnBWnsoPSv1PpLGq6uTHS0pKkDvgeFrjTFwqEmQD0NBghl%2BAjdeCrvfttP1eY7oiyLiV29RpDfkqVP3ks7zvIWh%2FJtYX7n5FoHzEQcxCt9NrLv1LcZa7ZxkAdL3HHSqLI%2BD27qoduGptHrTW5Gso8aK5fMgkfv5J655DalsTaW6hXlX%2FOEg0CgSu1jWFN65Ujx3LRuHcXLBqLjqPbPyE4W3nTZdMTbFT29DvbXkDEwthkpBVYPGa5NWx8zsY4eaOCwSsS1JI%2FcHBfMvsNJV95PPUYo3TcqekxOkpcFuu8Ot0Vmp1zLmVYK9kT3QJb8E%2Fey9Z9G1g8yhMKW1ocQGOqUB7kD4tf2RWU1NIvK%2BvgaKS1QLnoJ10K3LbmUW34ls3EIorNGDPv9i8vCuxSuJ6rcg3%2FFwfDMmof04anIqawFgD7grc%2Fu6eHTGUgJzaGoqmB%2FCsNYUjS3%2ByEPqEVyd1sNeXhhx96k28eNVBw63KLjHO5GddP%2FdIkg1dvMBY5LZ%2B1egQM8%2Be87nUqZ6%2BSBCII9HE0NJ1KdObOUL6IOphsHA8epusrkd&X-Amz-Signature=e53d8ad5bb1f8e9ae5b58cbfe025beff3486079338109858fdb059975c1022ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3M43IWG%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCtypV%2F1Z3dlhQQsfpyopdKcyrPgkChw%2BbbsTCIXKAhhgIgXfn1H0pKZf45cPEEYUXjIWMBk2CUoAE%2Be3IH9yM2Y6IqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2Fr3PbEqRvUEeLUFyrcA%2BQNCNHo8mH%2BO%2Bfmgk9NbZyvQr1S6RoElIPwOZxXLof2dpzQeh7Y4ycZJsF0y6U8yr1gd568yDr%2FwPdumsqSb2O1PLNd9s3Pc59xeAI4%2Fgj9%2BhJ1oG%2B2xwwYnjDyizvPhJaasLxVJnBVO6305yKRn1b8VtZ8OsyuB%2FLvQzSqsE25Te3urt6EpdHnO3WG%2BLmaAy42Fb4h9zOIpv8gaWQc5TQ9mpwAKBolkhMFoeL%2Fjbeo28QPVSxQrWGG3TFtdbKyeJ0S3TTSFUS2jYGp%2Bic4M4gOzAwgPU9Q%2FxnE7LTdO2XmoDk7dxnBWnsoPSv1PpLGq6uTHS0pKkDvgeFrjTFwqEmQD0NBghl%2BAjdeCrvfttP1eY7oiyLiV29RpDfkqVP3ks7zvIWh%2FJtYX7n5FoHzEQcxCt9NrLv1LcZa7ZxkAdL3HHSqLI%2BD27qoduGptHrTW5Gso8aK5fMgkfv5J655DalsTaW6hXlX%2FOEg0CgSu1jWFN65Ujx3LRuHcXLBqLjqPbPyE4W3nTZdMTbFT29DvbXkDEwthkpBVYPGa5NWx8zsY4eaOCwSsS1JI%2FcHBfMvsNJV95PPUYo3TcqekxOkpcFuu8Ot0Vmp1zLmVYK9kT3QJb8E%2Fey9Z9G1g8yhMKW1ocQGOqUB7kD4tf2RWU1NIvK%2BvgaKS1QLnoJ10K3LbmUW34ls3EIorNGDPv9i8vCuxSuJ6rcg3%2FFwfDMmof04anIqawFgD7grc%2Fu6eHTGUgJzaGoqmB%2FCsNYUjS3%2ByEPqEVyd1sNeXhhx96k28eNVBw63KLjHO5GddP%2FdIkg1dvMBY5LZ%2B1egQM8%2Be87nUqZ6%2BSBCII9HE0NJ1KdObOUL6IOphsHA8epusrkd&X-Amz-Signature=252467bef5f64df2c597b11a435dfcad86395463547edc885d2b2a3e1dcd077d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3M43IWG%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCtypV%2F1Z3dlhQQsfpyopdKcyrPgkChw%2BbbsTCIXKAhhgIgXfn1H0pKZf45cPEEYUXjIWMBk2CUoAE%2Be3IH9yM2Y6IqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2Fr3PbEqRvUEeLUFyrcA%2BQNCNHo8mH%2BO%2Bfmgk9NbZyvQr1S6RoElIPwOZxXLof2dpzQeh7Y4ycZJsF0y6U8yr1gd568yDr%2FwPdumsqSb2O1PLNd9s3Pc59xeAI4%2Fgj9%2BhJ1oG%2B2xwwYnjDyizvPhJaasLxVJnBVO6305yKRn1b8VtZ8OsyuB%2FLvQzSqsE25Te3urt6EpdHnO3WG%2BLmaAy42Fb4h9zOIpv8gaWQc5TQ9mpwAKBolkhMFoeL%2Fjbeo28QPVSxQrWGG3TFtdbKyeJ0S3TTSFUS2jYGp%2Bic4M4gOzAwgPU9Q%2FxnE7LTdO2XmoDk7dxnBWnsoPSv1PpLGq6uTHS0pKkDvgeFrjTFwqEmQD0NBghl%2BAjdeCrvfttP1eY7oiyLiV29RpDfkqVP3ks7zvIWh%2FJtYX7n5FoHzEQcxCt9NrLv1LcZa7ZxkAdL3HHSqLI%2BD27qoduGptHrTW5Gso8aK5fMgkfv5J655DalsTaW6hXlX%2FOEg0CgSu1jWFN65Ujx3LRuHcXLBqLjqPbPyE4W3nTZdMTbFT29DvbXkDEwthkpBVYPGa5NWx8zsY4eaOCwSsS1JI%2FcHBfMvsNJV95PPUYo3TcqekxOkpcFuu8Ot0Vmp1zLmVYK9kT3QJb8E%2Fey9Z9G1g8yhMKW1ocQGOqUB7kD4tf2RWU1NIvK%2BvgaKS1QLnoJ10K3LbmUW34ls3EIorNGDPv9i8vCuxSuJ6rcg3%2FFwfDMmof04anIqawFgD7grc%2Fu6eHTGUgJzaGoqmB%2FCsNYUjS3%2ByEPqEVyd1sNeXhhx96k28eNVBw63KLjHO5GddP%2FdIkg1dvMBY5LZ%2B1egQM8%2Be87nUqZ6%2BSBCII9HE0NJ1KdObOUL6IOphsHA8epusrkd&X-Amz-Signature=f8b513f584c6d83182e8b40ee3f51fcd1d514d9dcd8e136d1b708c2b7e2c2d56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3M43IWG%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCtypV%2F1Z3dlhQQsfpyopdKcyrPgkChw%2BbbsTCIXKAhhgIgXfn1H0pKZf45cPEEYUXjIWMBk2CUoAE%2Be3IH9yM2Y6IqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2Fr3PbEqRvUEeLUFyrcA%2BQNCNHo8mH%2BO%2Bfmgk9NbZyvQr1S6RoElIPwOZxXLof2dpzQeh7Y4ycZJsF0y6U8yr1gd568yDr%2FwPdumsqSb2O1PLNd9s3Pc59xeAI4%2Fgj9%2BhJ1oG%2B2xwwYnjDyizvPhJaasLxVJnBVO6305yKRn1b8VtZ8OsyuB%2FLvQzSqsE25Te3urt6EpdHnO3WG%2BLmaAy42Fb4h9zOIpv8gaWQc5TQ9mpwAKBolkhMFoeL%2Fjbeo28QPVSxQrWGG3TFtdbKyeJ0S3TTSFUS2jYGp%2Bic4M4gOzAwgPU9Q%2FxnE7LTdO2XmoDk7dxnBWnsoPSv1PpLGq6uTHS0pKkDvgeFrjTFwqEmQD0NBghl%2BAjdeCrvfttP1eY7oiyLiV29RpDfkqVP3ks7zvIWh%2FJtYX7n5FoHzEQcxCt9NrLv1LcZa7ZxkAdL3HHSqLI%2BD27qoduGptHrTW5Gso8aK5fMgkfv5J655DalsTaW6hXlX%2FOEg0CgSu1jWFN65Ujx3LRuHcXLBqLjqPbPyE4W3nTZdMTbFT29DvbXkDEwthkpBVYPGa5NWx8zsY4eaOCwSsS1JI%2FcHBfMvsNJV95PPUYo3TcqekxOkpcFuu8Ot0Vmp1zLmVYK9kT3QJb8E%2Fey9Z9G1g8yhMKW1ocQGOqUB7kD4tf2RWU1NIvK%2BvgaKS1QLnoJ10K3LbmUW34ls3EIorNGDPv9i8vCuxSuJ6rcg3%2FFwfDMmof04anIqawFgD7grc%2Fu6eHTGUgJzaGoqmB%2FCsNYUjS3%2ByEPqEVyd1sNeXhhx96k28eNVBw63KLjHO5GddP%2FdIkg1dvMBY5LZ%2B1egQM8%2Be87nUqZ6%2BSBCII9HE0NJ1KdObOUL6IOphsHA8epusrkd&X-Amz-Signature=638623b63a9befcf9dcf916d3f377c1ce3ee9bc990e061fc1efcc65afd7e5370&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3M43IWG%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCtypV%2F1Z3dlhQQsfpyopdKcyrPgkChw%2BbbsTCIXKAhhgIgXfn1H0pKZf45cPEEYUXjIWMBk2CUoAE%2Be3IH9yM2Y6IqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2Fr3PbEqRvUEeLUFyrcA%2BQNCNHo8mH%2BO%2Bfmgk9NbZyvQr1S6RoElIPwOZxXLof2dpzQeh7Y4ycZJsF0y6U8yr1gd568yDr%2FwPdumsqSb2O1PLNd9s3Pc59xeAI4%2Fgj9%2BhJ1oG%2B2xwwYnjDyizvPhJaasLxVJnBVO6305yKRn1b8VtZ8OsyuB%2FLvQzSqsE25Te3urt6EpdHnO3WG%2BLmaAy42Fb4h9zOIpv8gaWQc5TQ9mpwAKBolkhMFoeL%2Fjbeo28QPVSxQrWGG3TFtdbKyeJ0S3TTSFUS2jYGp%2Bic4M4gOzAwgPU9Q%2FxnE7LTdO2XmoDk7dxnBWnsoPSv1PpLGq6uTHS0pKkDvgeFrjTFwqEmQD0NBghl%2BAjdeCrvfttP1eY7oiyLiV29RpDfkqVP3ks7zvIWh%2FJtYX7n5FoHzEQcxCt9NrLv1LcZa7ZxkAdL3HHSqLI%2BD27qoduGptHrTW5Gso8aK5fMgkfv5J655DalsTaW6hXlX%2FOEg0CgSu1jWFN65Ujx3LRuHcXLBqLjqPbPyE4W3nTZdMTbFT29DvbXkDEwthkpBVYPGa5NWx8zsY4eaOCwSsS1JI%2FcHBfMvsNJV95PPUYo3TcqekxOkpcFuu8Ot0Vmp1zLmVYK9kT3QJb8E%2Fey9Z9G1g8yhMKW1ocQGOqUB7kD4tf2RWU1NIvK%2BvgaKS1QLnoJ10K3LbmUW34ls3EIorNGDPv9i8vCuxSuJ6rcg3%2FFwfDMmof04anIqawFgD7grc%2Fu6eHTGUgJzaGoqmB%2FCsNYUjS3%2ByEPqEVyd1sNeXhhx96k28eNVBw63KLjHO5GddP%2FdIkg1dvMBY5LZ%2B1egQM8%2Be87nUqZ6%2BSBCII9HE0NJ1KdObOUL6IOphsHA8epusrkd&X-Amz-Signature=2f9d5fab9a0dc093cf281f2078a94281c0e4240be845249a4778a86d892367a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3M43IWG%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCtypV%2F1Z3dlhQQsfpyopdKcyrPgkChw%2BbbsTCIXKAhhgIgXfn1H0pKZf45cPEEYUXjIWMBk2CUoAE%2Be3IH9yM2Y6IqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2Fr3PbEqRvUEeLUFyrcA%2BQNCNHo8mH%2BO%2Bfmgk9NbZyvQr1S6RoElIPwOZxXLof2dpzQeh7Y4ycZJsF0y6U8yr1gd568yDr%2FwPdumsqSb2O1PLNd9s3Pc59xeAI4%2Fgj9%2BhJ1oG%2B2xwwYnjDyizvPhJaasLxVJnBVO6305yKRn1b8VtZ8OsyuB%2FLvQzSqsE25Te3urt6EpdHnO3WG%2BLmaAy42Fb4h9zOIpv8gaWQc5TQ9mpwAKBolkhMFoeL%2Fjbeo28QPVSxQrWGG3TFtdbKyeJ0S3TTSFUS2jYGp%2Bic4M4gOzAwgPU9Q%2FxnE7LTdO2XmoDk7dxnBWnsoPSv1PpLGq6uTHS0pKkDvgeFrjTFwqEmQD0NBghl%2BAjdeCrvfttP1eY7oiyLiV29RpDfkqVP3ks7zvIWh%2FJtYX7n5FoHzEQcxCt9NrLv1LcZa7ZxkAdL3HHSqLI%2BD27qoduGptHrTW5Gso8aK5fMgkfv5J655DalsTaW6hXlX%2FOEg0CgSu1jWFN65Ujx3LRuHcXLBqLjqPbPyE4W3nTZdMTbFT29DvbXkDEwthkpBVYPGa5NWx8zsY4eaOCwSsS1JI%2FcHBfMvsNJV95PPUYo3TcqekxOkpcFuu8Ot0Vmp1zLmVYK9kT3QJb8E%2Fey9Z9G1g8yhMKW1ocQGOqUB7kD4tf2RWU1NIvK%2BvgaKS1QLnoJ10K3LbmUW34ls3EIorNGDPv9i8vCuxSuJ6rcg3%2FFwfDMmof04anIqawFgD7grc%2Fu6eHTGUgJzaGoqmB%2FCsNYUjS3%2ByEPqEVyd1sNeXhhx96k28eNVBw63KLjHO5GddP%2FdIkg1dvMBY5LZ%2B1egQM8%2Be87nUqZ6%2BSBCII9HE0NJ1KdObOUL6IOphsHA8epusrkd&X-Amz-Signature=fc6a29964498673e15e272c248fa31d3392333726d97310a42ddfbc58a2da288&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3M43IWG%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCtypV%2F1Z3dlhQQsfpyopdKcyrPgkChw%2BbbsTCIXKAhhgIgXfn1H0pKZf45cPEEYUXjIWMBk2CUoAE%2Be3IH9yM2Y6IqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2Fr3PbEqRvUEeLUFyrcA%2BQNCNHo8mH%2BO%2Bfmgk9NbZyvQr1S6RoElIPwOZxXLof2dpzQeh7Y4ycZJsF0y6U8yr1gd568yDr%2FwPdumsqSb2O1PLNd9s3Pc59xeAI4%2Fgj9%2BhJ1oG%2B2xwwYnjDyizvPhJaasLxVJnBVO6305yKRn1b8VtZ8OsyuB%2FLvQzSqsE25Te3urt6EpdHnO3WG%2BLmaAy42Fb4h9zOIpv8gaWQc5TQ9mpwAKBolkhMFoeL%2Fjbeo28QPVSxQrWGG3TFtdbKyeJ0S3TTSFUS2jYGp%2Bic4M4gOzAwgPU9Q%2FxnE7LTdO2XmoDk7dxnBWnsoPSv1PpLGq6uTHS0pKkDvgeFrjTFwqEmQD0NBghl%2BAjdeCrvfttP1eY7oiyLiV29RpDfkqVP3ks7zvIWh%2FJtYX7n5FoHzEQcxCt9NrLv1LcZa7ZxkAdL3HHSqLI%2BD27qoduGptHrTW5Gso8aK5fMgkfv5J655DalsTaW6hXlX%2FOEg0CgSu1jWFN65Ujx3LRuHcXLBqLjqPbPyE4W3nTZdMTbFT29DvbXkDEwthkpBVYPGa5NWx8zsY4eaOCwSsS1JI%2FcHBfMvsNJV95PPUYo3TcqekxOkpcFuu8Ot0Vmp1zLmVYK9kT3QJb8E%2Fey9Z9G1g8yhMKW1ocQGOqUB7kD4tf2RWU1NIvK%2BvgaKS1QLnoJ10K3LbmUW34ls3EIorNGDPv9i8vCuxSuJ6rcg3%2FFwfDMmof04anIqawFgD7grc%2Fu6eHTGUgJzaGoqmB%2FCsNYUjS3%2ByEPqEVyd1sNeXhhx96k28eNVBw63KLjHO5GddP%2FdIkg1dvMBY5LZ%2B1egQM8%2Be87nUqZ6%2BSBCII9HE0NJ1KdObOUL6IOphsHA8epusrkd&X-Amz-Signature=05b114bb88793b1c970798d36b94b39ddca485054b440789b9bbb5920ae1fe5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3M43IWG%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCtypV%2F1Z3dlhQQsfpyopdKcyrPgkChw%2BbbsTCIXKAhhgIgXfn1H0pKZf45cPEEYUXjIWMBk2CUoAE%2Be3IH9yM2Y6IqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2Fr3PbEqRvUEeLUFyrcA%2BQNCNHo8mH%2BO%2Bfmgk9NbZyvQr1S6RoElIPwOZxXLof2dpzQeh7Y4ycZJsF0y6U8yr1gd568yDr%2FwPdumsqSb2O1PLNd9s3Pc59xeAI4%2Fgj9%2BhJ1oG%2B2xwwYnjDyizvPhJaasLxVJnBVO6305yKRn1b8VtZ8OsyuB%2FLvQzSqsE25Te3urt6EpdHnO3WG%2BLmaAy42Fb4h9zOIpv8gaWQc5TQ9mpwAKBolkhMFoeL%2Fjbeo28QPVSxQrWGG3TFtdbKyeJ0S3TTSFUS2jYGp%2Bic4M4gOzAwgPU9Q%2FxnE7LTdO2XmoDk7dxnBWnsoPSv1PpLGq6uTHS0pKkDvgeFrjTFwqEmQD0NBghl%2BAjdeCrvfttP1eY7oiyLiV29RpDfkqVP3ks7zvIWh%2FJtYX7n5FoHzEQcxCt9NrLv1LcZa7ZxkAdL3HHSqLI%2BD27qoduGptHrTW5Gso8aK5fMgkfv5J655DalsTaW6hXlX%2FOEg0CgSu1jWFN65Ujx3LRuHcXLBqLjqPbPyE4W3nTZdMTbFT29DvbXkDEwthkpBVYPGa5NWx8zsY4eaOCwSsS1JI%2FcHBfMvsNJV95PPUYo3TcqekxOkpcFuu8Ot0Vmp1zLmVYK9kT3QJb8E%2Fey9Z9G1g8yhMKW1ocQGOqUB7kD4tf2RWU1NIvK%2BvgaKS1QLnoJ10K3LbmUW34ls3EIorNGDPv9i8vCuxSuJ6rcg3%2FFwfDMmof04anIqawFgD7grc%2Fu6eHTGUgJzaGoqmB%2FCsNYUjS3%2ByEPqEVyd1sNeXhhx96k28eNVBw63KLjHO5GddP%2FdIkg1dvMBY5LZ%2B1egQM8%2Be87nUqZ6%2BSBCII9HE0NJ1KdObOUL6IOphsHA8epusrkd&X-Amz-Signature=c7ec8bbd39de7c97a18e90de254d84032e04e52d04d0d455fcaf8bc52ec5235a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3M43IWG%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCtypV%2F1Z3dlhQQsfpyopdKcyrPgkChw%2BbbsTCIXKAhhgIgXfn1H0pKZf45cPEEYUXjIWMBk2CUoAE%2Be3IH9yM2Y6IqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2Fr3PbEqRvUEeLUFyrcA%2BQNCNHo8mH%2BO%2Bfmgk9NbZyvQr1S6RoElIPwOZxXLof2dpzQeh7Y4ycZJsF0y6U8yr1gd568yDr%2FwPdumsqSb2O1PLNd9s3Pc59xeAI4%2Fgj9%2BhJ1oG%2B2xwwYnjDyizvPhJaasLxVJnBVO6305yKRn1b8VtZ8OsyuB%2FLvQzSqsE25Te3urt6EpdHnO3WG%2BLmaAy42Fb4h9zOIpv8gaWQc5TQ9mpwAKBolkhMFoeL%2Fjbeo28QPVSxQrWGG3TFtdbKyeJ0S3TTSFUS2jYGp%2Bic4M4gOzAwgPU9Q%2FxnE7LTdO2XmoDk7dxnBWnsoPSv1PpLGq6uTHS0pKkDvgeFrjTFwqEmQD0NBghl%2BAjdeCrvfttP1eY7oiyLiV29RpDfkqVP3ks7zvIWh%2FJtYX7n5FoHzEQcxCt9NrLv1LcZa7ZxkAdL3HHSqLI%2BD27qoduGptHrTW5Gso8aK5fMgkfv5J655DalsTaW6hXlX%2FOEg0CgSu1jWFN65Ujx3LRuHcXLBqLjqPbPyE4W3nTZdMTbFT29DvbXkDEwthkpBVYPGa5NWx8zsY4eaOCwSsS1JI%2FcHBfMvsNJV95PPUYo3TcqekxOkpcFuu8Ot0Vmp1zLmVYK9kT3QJb8E%2Fey9Z9G1g8yhMKW1ocQGOqUB7kD4tf2RWU1NIvK%2BvgaKS1QLnoJ10K3LbmUW34ls3EIorNGDPv9i8vCuxSuJ6rcg3%2FFwfDMmof04anIqawFgD7grc%2Fu6eHTGUgJzaGoqmB%2FCsNYUjS3%2ByEPqEVyd1sNeXhhx96k28eNVBw63KLjHO5GddP%2FdIkg1dvMBY5LZ%2B1egQM8%2Be87nUqZ6%2BSBCII9HE0NJ1KdObOUL6IOphsHA8epusrkd&X-Amz-Signature=43823f61ccc1e9b9d74610fc963d29fb4cafbbb502b79dfa9468cfab20d7d094&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO: rviz img

## adding to launch

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3M43IWG%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCtypV%2F1Z3dlhQQsfpyopdKcyrPgkChw%2BbbsTCIXKAhhgIgXfn1H0pKZf45cPEEYUXjIWMBk2CUoAE%2Be3IH9yM2Y6IqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2Fr3PbEqRvUEeLUFyrcA%2BQNCNHo8mH%2BO%2Bfmgk9NbZyvQr1S6RoElIPwOZxXLof2dpzQeh7Y4ycZJsF0y6U8yr1gd568yDr%2FwPdumsqSb2O1PLNd9s3Pc59xeAI4%2Fgj9%2BhJ1oG%2B2xwwYnjDyizvPhJaasLxVJnBVO6305yKRn1b8VtZ8OsyuB%2FLvQzSqsE25Te3urt6EpdHnO3WG%2BLmaAy42Fb4h9zOIpv8gaWQc5TQ9mpwAKBolkhMFoeL%2Fjbeo28QPVSxQrWGG3TFtdbKyeJ0S3TTSFUS2jYGp%2Bic4M4gOzAwgPU9Q%2FxnE7LTdO2XmoDk7dxnBWnsoPSv1PpLGq6uTHS0pKkDvgeFrjTFwqEmQD0NBghl%2BAjdeCrvfttP1eY7oiyLiV29RpDfkqVP3ks7zvIWh%2FJtYX7n5FoHzEQcxCt9NrLv1LcZa7ZxkAdL3HHSqLI%2BD27qoduGptHrTW5Gso8aK5fMgkfv5J655DalsTaW6hXlX%2FOEg0CgSu1jWFN65Ujx3LRuHcXLBqLjqPbPyE4W3nTZdMTbFT29DvbXkDEwthkpBVYPGa5NWx8zsY4eaOCwSsS1JI%2FcHBfMvsNJV95PPUYo3TcqekxOkpcFuu8Ot0Vmp1zLmVYK9kT3QJb8E%2Fey9Z9G1g8yhMKW1ocQGOqUB7kD4tf2RWU1NIvK%2BvgaKS1QLnoJ10K3LbmUW34ls3EIorNGDPv9i8vCuxSuJ6rcg3%2FFwfDMmof04anIqawFgD7grc%2Fu6eHTGUgJzaGoqmB%2FCsNYUjS3%2ByEPqEVyd1sNeXhhx96k28eNVBw63KLjHO5GddP%2FdIkg1dvMBY5LZ%2B1egQM8%2Be87nUqZ6%2BSBCII9HE0NJ1KdObOUL6IOphsHA8epusrkd&X-Amz-Signature=7846a4cc2350f07cf482c460e6b0fc49b91d8160ee56cf9fe848e16b9499b235&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
