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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3D3A46P%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCy2Z%2FNspc05ivtaOnp4UzDSurqbDLWFxs8faoVj4%2BWygIhAJY9tsueA8ccCHjzM9PPwYpBs%2BvE%2B%2F96g%2FoG3nB7eYIkKv8DCEMQABoMNjM3NDIzMTgzODA1IgxGsCJCtYuvDTgR3zAq3ANjCrtGrOWgZ8fahAIUmYH8I6V727hK0g%2F7Wigo%2BHHhIm6C92FIHWfZ%2BdPw5b2HsslPIH6KVUoRkd7J1XEQHsJmvDZ2N2uGt44uWzbJxv8gQaPspyb5Gt9lSNWgk3spdXUKohq%2B54s3yHgs4iPO4sTkeGr054Cb%2FzORQAbqEvJO2Y4i2q7G7yuw20bIic5YGwmdIS3NPzKqcjyjaq6pN3gfDQ5A6gaEt8iEp9vsdyCBs%2BZGBll4kUQSfm6QlM9W4BgC4%2BT%2BGr%2BYj338Bp1ewtDQpO9kzAh4kyTrEsF3CjgYHixYeepEAOHj%2BIXzp%2B0nwmW1UW%2FRpkXGJo7QBESXBo9Mxsl%2BommuxZhSNyi1ao%2BnurB9E8GRtoRE4tw%2BBxGAGnX%2BrivE27DERSi9HeXzdWdxXTBmf8bFpQpP1OEf01p2UzRNuQUnplONDy8e766WmKYVRQtgdcF%2FOC%2BM19ySukdYkh5d9R5Y0UxnblvrpiSjezwyzVSjAOTGUn6iCg%2FLN0WCmErrcxqMXbnhrjATteca9l%2BQU88%2BA0bKPl4lz1j674rKOTnZDHyAiqv5arY65lSFktlRBFqjiS%2FZkuHFpFpMKB8bVuz3war4g%2FeACe%2FFO0oKspexRUKf7tn9cTCEgcLEBjqkAXH3mt4gVoh5MKMm6eDx6TdeJIBb1HjmzdtcaojqwfysQQbZ46MWiUZ%2FdzmwrQe7PjgTVWDrHn7uqK9j29i5%2BXVFA3tHV%2Bv7m5%2B9QKFKYPUXYDv2g8SD%2Fy55Jiksknv4tuMhznzKcv0qYUuuLhCgbm5KyfU7fCrbhoyUXFZ374PinONWBbaKN%2B5h45%2FsELmEtldnlUZmdDFu2Yf0RG0eQCedKWCU&X-Amz-Signature=802057aed6578a31a5b78bc1ce2073556808fff52d7b00c9a5b162f2b873d706&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6P3PDRY%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIFlujOLUkDkb4Gs2xFiUxqbf2%2Bu4ZiKQMxDostNlRxhaAiAy%2FuMv7Mua9smLa4ABhSSTt9wkHSyZk9N7eCbrd%2FucUCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMJknSl4CXcmsuOywRKtwDwzkwSY6wdtQv%2B5pHAhMO5U5Ck1hDc66eUW2HI3QIihIFbIK9bXIFGo9MaHzR8jAkFOex9YNmZ5X%2BSaY75YnGLgkNaT5LdoeOCfQjg7FBz2K7Cc7apONh71vbihuosRHLe8tKEEnFif%2BaJWsIVVRooUtJnfCkO5XxO7vZbF9FwYABA5KjMmQuRB1HTPBwFNJKaaquOr%2Fw0OvdvQyJyOBoyFEQTYD4PkJ%2BUHrsYoO7%2FmzXWhog8QKTLt%2FLIQtRddEuHfvsD7H4SaE8cJmAfSUbUUQjkTu1Iu8PljGCteTYlLNh9Nhsi72bOLP2lfvlIqCWV4%2BPD5yJEt%2BiaoHQVPwtdTAAvBoMB5pLBauIKA5Pvso0WxtH9pULQiEf4iprm0Igry20A7hFmyCdVnwKbGpa%2FcpgYalqmf09O8rN%2BmoYMC00OiV0FyiMqC6pslCfmWojkN9d3573jrVek56442ub%2FPZeUbQf6xqmy%2B1a6%2FHCWfxyxSwHjx49iTdqftas68827HHIBlTL6SRMfMx%2FIiVEol%2FdBMQeZ4ueiwNTf3pIGf9bsABxqew5aM3Ubr4r3GYEeG8skraG24%2FKv3aueVvbdpfCwTXTk6uzoc%2Fz1oqsRWev62sFGSS4b2DgJJEw%2BYDCxAY6pgHS0Vd1hrws9wsHJDTpq6yGY9FXPFIJF3oyAnRj8AI63JxOfPwVGv9RPjGPoBpTnhiSzrmaIq%2FRMvXvt4maXr%2F2WuMkhEkGY1ufpWSbsDQJHnlKT9W9WapYpEILD3ZYEMfPB%2FG0bqqyknGFLkENHDlzOi9dYKkQOBxNtFuiXQgwZWQxARdBal4qPCrnebx6jbDyRH9HysJvY9oPIRU0YpRA0VNYdHLr&X-Amz-Signature=566a8a07b9ab10fc92a4a71d820e93fd5a0d598da6ae212eefcc7d8a0d6db8f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6P3PDRY%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIFlujOLUkDkb4Gs2xFiUxqbf2%2Bu4ZiKQMxDostNlRxhaAiAy%2FuMv7Mua9smLa4ABhSSTt9wkHSyZk9N7eCbrd%2FucUCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMJknSl4CXcmsuOywRKtwDwzkwSY6wdtQv%2B5pHAhMO5U5Ck1hDc66eUW2HI3QIihIFbIK9bXIFGo9MaHzR8jAkFOex9YNmZ5X%2BSaY75YnGLgkNaT5LdoeOCfQjg7FBz2K7Cc7apONh71vbihuosRHLe8tKEEnFif%2BaJWsIVVRooUtJnfCkO5XxO7vZbF9FwYABA5KjMmQuRB1HTPBwFNJKaaquOr%2Fw0OvdvQyJyOBoyFEQTYD4PkJ%2BUHrsYoO7%2FmzXWhog8QKTLt%2FLIQtRddEuHfvsD7H4SaE8cJmAfSUbUUQjkTu1Iu8PljGCteTYlLNh9Nhsi72bOLP2lfvlIqCWV4%2BPD5yJEt%2BiaoHQVPwtdTAAvBoMB5pLBauIKA5Pvso0WxtH9pULQiEf4iprm0Igry20A7hFmyCdVnwKbGpa%2FcpgYalqmf09O8rN%2BmoYMC00OiV0FyiMqC6pslCfmWojkN9d3573jrVek56442ub%2FPZeUbQf6xqmy%2B1a6%2FHCWfxyxSwHjx49iTdqftas68827HHIBlTL6SRMfMx%2FIiVEol%2FdBMQeZ4ueiwNTf3pIGf9bsABxqew5aM3Ubr4r3GYEeG8skraG24%2FKv3aueVvbdpfCwTXTk6uzoc%2Fz1oqsRWev62sFGSS4b2DgJJEw%2BYDCxAY6pgHS0Vd1hrws9wsHJDTpq6yGY9FXPFIJF3oyAnRj8AI63JxOfPwVGv9RPjGPoBpTnhiSzrmaIq%2FRMvXvt4maXr%2F2WuMkhEkGY1ufpWSbsDQJHnlKT9W9WapYpEILD3ZYEMfPB%2FG0bqqyknGFLkENHDlzOi9dYKkQOBxNtFuiXQgwZWQxARdBal4qPCrnebx6jbDyRH9HysJvY9oPIRU0YpRA0VNYdHLr&X-Amz-Signature=fd7f50cf800278013e5e68299292d5e6b9b0ad4f8cb9e777a4a12f085e593bec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6P3PDRY%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIFlujOLUkDkb4Gs2xFiUxqbf2%2Bu4ZiKQMxDostNlRxhaAiAy%2FuMv7Mua9smLa4ABhSSTt9wkHSyZk9N7eCbrd%2FucUCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMJknSl4CXcmsuOywRKtwDwzkwSY6wdtQv%2B5pHAhMO5U5Ck1hDc66eUW2HI3QIihIFbIK9bXIFGo9MaHzR8jAkFOex9YNmZ5X%2BSaY75YnGLgkNaT5LdoeOCfQjg7FBz2K7Cc7apONh71vbihuosRHLe8tKEEnFif%2BaJWsIVVRooUtJnfCkO5XxO7vZbF9FwYABA5KjMmQuRB1HTPBwFNJKaaquOr%2Fw0OvdvQyJyOBoyFEQTYD4PkJ%2BUHrsYoO7%2FmzXWhog8QKTLt%2FLIQtRddEuHfvsD7H4SaE8cJmAfSUbUUQjkTu1Iu8PljGCteTYlLNh9Nhsi72bOLP2lfvlIqCWV4%2BPD5yJEt%2BiaoHQVPwtdTAAvBoMB5pLBauIKA5Pvso0WxtH9pULQiEf4iprm0Igry20A7hFmyCdVnwKbGpa%2FcpgYalqmf09O8rN%2BmoYMC00OiV0FyiMqC6pslCfmWojkN9d3573jrVek56442ub%2FPZeUbQf6xqmy%2B1a6%2FHCWfxyxSwHjx49iTdqftas68827HHIBlTL6SRMfMx%2FIiVEol%2FdBMQeZ4ueiwNTf3pIGf9bsABxqew5aM3Ubr4r3GYEeG8skraG24%2FKv3aueVvbdpfCwTXTk6uzoc%2Fz1oqsRWev62sFGSS4b2DgJJEw%2BYDCxAY6pgHS0Vd1hrws9wsHJDTpq6yGY9FXPFIJF3oyAnRj8AI63JxOfPwVGv9RPjGPoBpTnhiSzrmaIq%2FRMvXvt4maXr%2F2WuMkhEkGY1ufpWSbsDQJHnlKT9W9WapYpEILD3ZYEMfPB%2FG0bqqyknGFLkENHDlzOi9dYKkQOBxNtFuiXQgwZWQxARdBal4qPCrnebx6jbDyRH9HysJvY9oPIRU0YpRA0VNYdHLr&X-Amz-Signature=3df7d301c9f03eb302c2a5ea7cffde74fad804273b40fb73e25a4168fee017ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6P3PDRY%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIFlujOLUkDkb4Gs2xFiUxqbf2%2Bu4ZiKQMxDostNlRxhaAiAy%2FuMv7Mua9smLa4ABhSSTt9wkHSyZk9N7eCbrd%2FucUCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMJknSl4CXcmsuOywRKtwDwzkwSY6wdtQv%2B5pHAhMO5U5Ck1hDc66eUW2HI3QIihIFbIK9bXIFGo9MaHzR8jAkFOex9YNmZ5X%2BSaY75YnGLgkNaT5LdoeOCfQjg7FBz2K7Cc7apONh71vbihuosRHLe8tKEEnFif%2BaJWsIVVRooUtJnfCkO5XxO7vZbF9FwYABA5KjMmQuRB1HTPBwFNJKaaquOr%2Fw0OvdvQyJyOBoyFEQTYD4PkJ%2BUHrsYoO7%2FmzXWhog8QKTLt%2FLIQtRddEuHfvsD7H4SaE8cJmAfSUbUUQjkTu1Iu8PljGCteTYlLNh9Nhsi72bOLP2lfvlIqCWV4%2BPD5yJEt%2BiaoHQVPwtdTAAvBoMB5pLBauIKA5Pvso0WxtH9pULQiEf4iprm0Igry20A7hFmyCdVnwKbGpa%2FcpgYalqmf09O8rN%2BmoYMC00OiV0FyiMqC6pslCfmWojkN9d3573jrVek56442ub%2FPZeUbQf6xqmy%2B1a6%2FHCWfxyxSwHjx49iTdqftas68827HHIBlTL6SRMfMx%2FIiVEol%2FdBMQeZ4ueiwNTf3pIGf9bsABxqew5aM3Ubr4r3GYEeG8skraG24%2FKv3aueVvbdpfCwTXTk6uzoc%2Fz1oqsRWev62sFGSS4b2DgJJEw%2BYDCxAY6pgHS0Vd1hrws9wsHJDTpq6yGY9FXPFIJF3oyAnRj8AI63JxOfPwVGv9RPjGPoBpTnhiSzrmaIq%2FRMvXvt4maXr%2F2WuMkhEkGY1ufpWSbsDQJHnlKT9W9WapYpEILD3ZYEMfPB%2FG0bqqyknGFLkENHDlzOi9dYKkQOBxNtFuiXQgwZWQxARdBal4qPCrnebx6jbDyRH9HysJvY9oPIRU0YpRA0VNYdHLr&X-Amz-Signature=22cf95771a139eb12068fb611d85c5561597366f62b6b3b5f1706593224136e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6P3PDRY%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIFlujOLUkDkb4Gs2xFiUxqbf2%2Bu4ZiKQMxDostNlRxhaAiAy%2FuMv7Mua9smLa4ABhSSTt9wkHSyZk9N7eCbrd%2FucUCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMJknSl4CXcmsuOywRKtwDwzkwSY6wdtQv%2B5pHAhMO5U5Ck1hDc66eUW2HI3QIihIFbIK9bXIFGo9MaHzR8jAkFOex9YNmZ5X%2BSaY75YnGLgkNaT5LdoeOCfQjg7FBz2K7Cc7apONh71vbihuosRHLe8tKEEnFif%2BaJWsIVVRooUtJnfCkO5XxO7vZbF9FwYABA5KjMmQuRB1HTPBwFNJKaaquOr%2Fw0OvdvQyJyOBoyFEQTYD4PkJ%2BUHrsYoO7%2FmzXWhog8QKTLt%2FLIQtRddEuHfvsD7H4SaE8cJmAfSUbUUQjkTu1Iu8PljGCteTYlLNh9Nhsi72bOLP2lfvlIqCWV4%2BPD5yJEt%2BiaoHQVPwtdTAAvBoMB5pLBauIKA5Pvso0WxtH9pULQiEf4iprm0Igry20A7hFmyCdVnwKbGpa%2FcpgYalqmf09O8rN%2BmoYMC00OiV0FyiMqC6pslCfmWojkN9d3573jrVek56442ub%2FPZeUbQf6xqmy%2B1a6%2FHCWfxyxSwHjx49iTdqftas68827HHIBlTL6SRMfMx%2FIiVEol%2FdBMQeZ4ueiwNTf3pIGf9bsABxqew5aM3Ubr4r3GYEeG8skraG24%2FKv3aueVvbdpfCwTXTk6uzoc%2Fz1oqsRWev62sFGSS4b2DgJJEw%2BYDCxAY6pgHS0Vd1hrws9wsHJDTpq6yGY9FXPFIJF3oyAnRj8AI63JxOfPwVGv9RPjGPoBpTnhiSzrmaIq%2FRMvXvt4maXr%2F2WuMkhEkGY1ufpWSbsDQJHnlKT9W9WapYpEILD3ZYEMfPB%2FG0bqqyknGFLkENHDlzOi9dYKkQOBxNtFuiXQgwZWQxARdBal4qPCrnebx6jbDyRH9HysJvY9oPIRU0YpRA0VNYdHLr&X-Amz-Signature=215e43b6ae6f47b955b782fc2283acf4b1f488cf984ffeb1f7fa635ea8fda8d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6P3PDRY%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIFlujOLUkDkb4Gs2xFiUxqbf2%2Bu4ZiKQMxDostNlRxhaAiAy%2FuMv7Mua9smLa4ABhSSTt9wkHSyZk9N7eCbrd%2FucUCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMJknSl4CXcmsuOywRKtwDwzkwSY6wdtQv%2B5pHAhMO5U5Ck1hDc66eUW2HI3QIihIFbIK9bXIFGo9MaHzR8jAkFOex9YNmZ5X%2BSaY75YnGLgkNaT5LdoeOCfQjg7FBz2K7Cc7apONh71vbihuosRHLe8tKEEnFif%2BaJWsIVVRooUtJnfCkO5XxO7vZbF9FwYABA5KjMmQuRB1HTPBwFNJKaaquOr%2Fw0OvdvQyJyOBoyFEQTYD4PkJ%2BUHrsYoO7%2FmzXWhog8QKTLt%2FLIQtRddEuHfvsD7H4SaE8cJmAfSUbUUQjkTu1Iu8PljGCteTYlLNh9Nhsi72bOLP2lfvlIqCWV4%2BPD5yJEt%2BiaoHQVPwtdTAAvBoMB5pLBauIKA5Pvso0WxtH9pULQiEf4iprm0Igry20A7hFmyCdVnwKbGpa%2FcpgYalqmf09O8rN%2BmoYMC00OiV0FyiMqC6pslCfmWojkN9d3573jrVek56442ub%2FPZeUbQf6xqmy%2B1a6%2FHCWfxyxSwHjx49iTdqftas68827HHIBlTL6SRMfMx%2FIiVEol%2FdBMQeZ4ueiwNTf3pIGf9bsABxqew5aM3Ubr4r3GYEeG8skraG24%2FKv3aueVvbdpfCwTXTk6uzoc%2Fz1oqsRWev62sFGSS4b2DgJJEw%2BYDCxAY6pgHS0Vd1hrws9wsHJDTpq6yGY9FXPFIJF3oyAnRj8AI63JxOfPwVGv9RPjGPoBpTnhiSzrmaIq%2FRMvXvt4maXr%2F2WuMkhEkGY1ufpWSbsDQJHnlKT9W9WapYpEILD3ZYEMfPB%2FG0bqqyknGFLkENHDlzOi9dYKkQOBxNtFuiXQgwZWQxARdBal4qPCrnebx6jbDyRH9HysJvY9oPIRU0YpRA0VNYdHLr&X-Amz-Signature=d319737dd3b56575daad8e1c06a13a72f0a7e72ef565c8b1bc50e49e250ea61c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6P3PDRY%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIFlujOLUkDkb4Gs2xFiUxqbf2%2Bu4ZiKQMxDostNlRxhaAiAy%2FuMv7Mua9smLa4ABhSSTt9wkHSyZk9N7eCbrd%2FucUCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMJknSl4CXcmsuOywRKtwDwzkwSY6wdtQv%2B5pHAhMO5U5Ck1hDc66eUW2HI3QIihIFbIK9bXIFGo9MaHzR8jAkFOex9YNmZ5X%2BSaY75YnGLgkNaT5LdoeOCfQjg7FBz2K7Cc7apONh71vbihuosRHLe8tKEEnFif%2BaJWsIVVRooUtJnfCkO5XxO7vZbF9FwYABA5KjMmQuRB1HTPBwFNJKaaquOr%2Fw0OvdvQyJyOBoyFEQTYD4PkJ%2BUHrsYoO7%2FmzXWhog8QKTLt%2FLIQtRddEuHfvsD7H4SaE8cJmAfSUbUUQjkTu1Iu8PljGCteTYlLNh9Nhsi72bOLP2lfvlIqCWV4%2BPD5yJEt%2BiaoHQVPwtdTAAvBoMB5pLBauIKA5Pvso0WxtH9pULQiEf4iprm0Igry20A7hFmyCdVnwKbGpa%2FcpgYalqmf09O8rN%2BmoYMC00OiV0FyiMqC6pslCfmWojkN9d3573jrVek56442ub%2FPZeUbQf6xqmy%2B1a6%2FHCWfxyxSwHjx49iTdqftas68827HHIBlTL6SRMfMx%2FIiVEol%2FdBMQeZ4ueiwNTf3pIGf9bsABxqew5aM3Ubr4r3GYEeG8skraG24%2FKv3aueVvbdpfCwTXTk6uzoc%2Fz1oqsRWev62sFGSS4b2DgJJEw%2BYDCxAY6pgHS0Vd1hrws9wsHJDTpq6yGY9FXPFIJF3oyAnRj8AI63JxOfPwVGv9RPjGPoBpTnhiSzrmaIq%2FRMvXvt4maXr%2F2WuMkhEkGY1ufpWSbsDQJHnlKT9W9WapYpEILD3ZYEMfPB%2FG0bqqyknGFLkENHDlzOi9dYKkQOBxNtFuiXQgwZWQxARdBal4qPCrnebx6jbDyRH9HysJvY9oPIRU0YpRA0VNYdHLr&X-Amz-Signature=83dec960a2a113668460eb84716c9dc4f6d2956fc23ea79dc1fc0ab05ffd64e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6P3PDRY%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIFlujOLUkDkb4Gs2xFiUxqbf2%2Bu4ZiKQMxDostNlRxhaAiAy%2FuMv7Mua9smLa4ABhSSTt9wkHSyZk9N7eCbrd%2FucUCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMJknSl4CXcmsuOywRKtwDwzkwSY6wdtQv%2B5pHAhMO5U5Ck1hDc66eUW2HI3QIihIFbIK9bXIFGo9MaHzR8jAkFOex9YNmZ5X%2BSaY75YnGLgkNaT5LdoeOCfQjg7FBz2K7Cc7apONh71vbihuosRHLe8tKEEnFif%2BaJWsIVVRooUtJnfCkO5XxO7vZbF9FwYABA5KjMmQuRB1HTPBwFNJKaaquOr%2Fw0OvdvQyJyOBoyFEQTYD4PkJ%2BUHrsYoO7%2FmzXWhog8QKTLt%2FLIQtRddEuHfvsD7H4SaE8cJmAfSUbUUQjkTu1Iu8PljGCteTYlLNh9Nhsi72bOLP2lfvlIqCWV4%2BPD5yJEt%2BiaoHQVPwtdTAAvBoMB5pLBauIKA5Pvso0WxtH9pULQiEf4iprm0Igry20A7hFmyCdVnwKbGpa%2FcpgYalqmf09O8rN%2BmoYMC00OiV0FyiMqC6pslCfmWojkN9d3573jrVek56442ub%2FPZeUbQf6xqmy%2B1a6%2FHCWfxyxSwHjx49iTdqftas68827HHIBlTL6SRMfMx%2FIiVEol%2FdBMQeZ4ueiwNTf3pIGf9bsABxqew5aM3Ubr4r3GYEeG8skraG24%2FKv3aueVvbdpfCwTXTk6uzoc%2Fz1oqsRWev62sFGSS4b2DgJJEw%2BYDCxAY6pgHS0Vd1hrws9wsHJDTpq6yGY9FXPFIJF3oyAnRj8AI63JxOfPwVGv9RPjGPoBpTnhiSzrmaIq%2FRMvXvt4maXr%2F2WuMkhEkGY1ufpWSbsDQJHnlKT9W9WapYpEILD3ZYEMfPB%2FG0bqqyknGFLkENHDlzOi9dYKkQOBxNtFuiXQgwZWQxARdBal4qPCrnebx6jbDyRH9HysJvY9oPIRU0YpRA0VNYdHLr&X-Amz-Signature=da198c4a34c319873a7aca149caebaf76f1b990726ed9664982a25c6cab011c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6P3PDRY%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIFlujOLUkDkb4Gs2xFiUxqbf2%2Bu4ZiKQMxDostNlRxhaAiAy%2FuMv7Mua9smLa4ABhSSTt9wkHSyZk9N7eCbrd%2FucUCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMJknSl4CXcmsuOywRKtwDwzkwSY6wdtQv%2B5pHAhMO5U5Ck1hDc66eUW2HI3QIihIFbIK9bXIFGo9MaHzR8jAkFOex9YNmZ5X%2BSaY75YnGLgkNaT5LdoeOCfQjg7FBz2K7Cc7apONh71vbihuosRHLe8tKEEnFif%2BaJWsIVVRooUtJnfCkO5XxO7vZbF9FwYABA5KjMmQuRB1HTPBwFNJKaaquOr%2Fw0OvdvQyJyOBoyFEQTYD4PkJ%2BUHrsYoO7%2FmzXWhog8QKTLt%2FLIQtRddEuHfvsD7H4SaE8cJmAfSUbUUQjkTu1Iu8PljGCteTYlLNh9Nhsi72bOLP2lfvlIqCWV4%2BPD5yJEt%2BiaoHQVPwtdTAAvBoMB5pLBauIKA5Pvso0WxtH9pULQiEf4iprm0Igry20A7hFmyCdVnwKbGpa%2FcpgYalqmf09O8rN%2BmoYMC00OiV0FyiMqC6pslCfmWojkN9d3573jrVek56442ub%2FPZeUbQf6xqmy%2B1a6%2FHCWfxyxSwHjx49iTdqftas68827HHIBlTL6SRMfMx%2FIiVEol%2FdBMQeZ4ueiwNTf3pIGf9bsABxqew5aM3Ubr4r3GYEeG8skraG24%2FKv3aueVvbdpfCwTXTk6uzoc%2Fz1oqsRWev62sFGSS4b2DgJJEw%2BYDCxAY6pgHS0Vd1hrws9wsHJDTpq6yGY9FXPFIJF3oyAnRj8AI63JxOfPwVGv9RPjGPoBpTnhiSzrmaIq%2FRMvXvt4maXr%2F2WuMkhEkGY1ufpWSbsDQJHnlKT9W9WapYpEILD3ZYEMfPB%2FG0bqqyknGFLkENHDlzOi9dYKkQOBxNtFuiXQgwZWQxARdBal4qPCrnebx6jbDyRH9HysJvY9oPIRU0YpRA0VNYdHLr&X-Amz-Signature=ece0999f8a1a0b5fd313da10a9ebd3e2f32018f0495bbdd4a2eb12dc92100d0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6P3PDRY%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIFlujOLUkDkb4Gs2xFiUxqbf2%2Bu4ZiKQMxDostNlRxhaAiAy%2FuMv7Mua9smLa4ABhSSTt9wkHSyZk9N7eCbrd%2FucUCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMJknSl4CXcmsuOywRKtwDwzkwSY6wdtQv%2B5pHAhMO5U5Ck1hDc66eUW2HI3QIihIFbIK9bXIFGo9MaHzR8jAkFOex9YNmZ5X%2BSaY75YnGLgkNaT5LdoeOCfQjg7FBz2K7Cc7apONh71vbihuosRHLe8tKEEnFif%2BaJWsIVVRooUtJnfCkO5XxO7vZbF9FwYABA5KjMmQuRB1HTPBwFNJKaaquOr%2Fw0OvdvQyJyOBoyFEQTYD4PkJ%2BUHrsYoO7%2FmzXWhog8QKTLt%2FLIQtRddEuHfvsD7H4SaE8cJmAfSUbUUQjkTu1Iu8PljGCteTYlLNh9Nhsi72bOLP2lfvlIqCWV4%2BPD5yJEt%2BiaoHQVPwtdTAAvBoMB5pLBauIKA5Pvso0WxtH9pULQiEf4iprm0Igry20A7hFmyCdVnwKbGpa%2FcpgYalqmf09O8rN%2BmoYMC00OiV0FyiMqC6pslCfmWojkN9d3573jrVek56442ub%2FPZeUbQf6xqmy%2B1a6%2FHCWfxyxSwHjx49iTdqftas68827HHIBlTL6SRMfMx%2FIiVEol%2FdBMQeZ4ueiwNTf3pIGf9bsABxqew5aM3Ubr4r3GYEeG8skraG24%2FKv3aueVvbdpfCwTXTk6uzoc%2Fz1oqsRWev62sFGSS4b2DgJJEw%2BYDCxAY6pgHS0Vd1hrws9wsHJDTpq6yGY9FXPFIJF3oyAnRj8AI63JxOfPwVGv9RPjGPoBpTnhiSzrmaIq%2FRMvXvt4maXr%2F2WuMkhEkGY1ufpWSbsDQJHnlKT9W9WapYpEILD3ZYEMfPB%2FG0bqqyknGFLkENHDlzOi9dYKkQOBxNtFuiXQgwZWQxARdBal4qPCrnebx6jbDyRH9HysJvY9oPIRU0YpRA0VNYdHLr&X-Amz-Signature=22cf95771a139eb12068fb611d85c5561597366f62b6b3b5f1706593224136e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
