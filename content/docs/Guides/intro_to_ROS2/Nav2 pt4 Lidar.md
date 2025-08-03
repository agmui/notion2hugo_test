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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676WC36UN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnqPaj93Yjc5r6Oo6BX8xVZLy2388KxgUK0Zc8DLme3wIhAMQtC%2Fey%2FAOc4Q%2FXxRr7F2Ij0iCWLapo%2FKXNQTVKMCqYKv8DCDQQABoMNjM3NDIzMTgzODA1IgwVCg8yjrGsfRjgjd8q3AO%2B9lnQpt0xGX2FDHXdz96YKJlbOBNNLQnbbGo5gB%2FvryYMM%2BR9SfvtC5TGXt%2B4iWBgS4etYEDqOmn%2BjqTiVJrYQ7BISy7%2FEtgmjbItPDG41ZyXM46poaN83POgfd40hpkzvIDmWOG%2BSNEwvgr1fyb8KWyqmQe%2B2coLuJKi3KzSiAddwKcosF%2BUdGtMfykzKYkpZRh8mnj%2BQaIExtALNk%2FADCz4FIdDaLbZWkGqGX6irhalAsYpN9Pq9Sa4ZtuzaTddh0VoZ6tJlCdrtz9LsaqN19ZgffvZOgnCE8ozsbhwPlw0xcqghzo44gLX1fOOCU4sn%2Fjn6Odl1paHei7c4FUa7%2FVUa9orAlm5RPbQG%2BYoDHzyk%2FJCjJGemM9NTmhKtFMycHfyAEydZD02wGROGSHJFE1C9ztCoh5QLKFvXxyKzUbYLqP7tJ6VFTf5eY6RmmW9KSMPjRep1LC0RHpNWglcpW%2BZJ4FTiua%2B56n8XRZ0PywiIlV%2Bl6%2FM9HiXzwIaCvYmjljUs7OTuPNpKZIM8qBIrnUsxbEF3Kstn0GxbxrpAQbu9HExJLrAQtNLvOqMcnnyA1Lc%2BAfIJmL70UXjQYELeaG4rMykEuis9Mo4YufmTveRuWc1HXHofcZ1DDCI2b7EBjqkATNrlcpA4mzOSYq%2B%2F5k9eQf1te5%2F4K%2BnNJWO6nrvUPrPceg%2BkMjYKG9aFuAgS4iWPOiypdAjd1hGbC%2FGcotaImag21XUYEPkI3rfIWqCHOZXAe%2BKaneSLj4GWhLd3IvVu4PRpvX6Tx0P8KsfMlz4pHhNzxjBdBRHlS3WeYE96ZdXNNLREUKHYyhsBgQ%2FNPMxl03YRwbsYtD83GxN0FxTeKAShE5%2F&X-Amz-Signature=e12da9af52de3e51c4733e12dfec16e8f46f7333738acda4005603f0885e841f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624LYDKQI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDB%2BK%2BnOnNcwSnhX3zQpvDIrFxIaPOP13MY2EyLmnYR0AiAvzPFPeer1MZR5vRe4gt3OKVikBjnj2Vs7GsSVv8pGBCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMyo0Js6zlMcSs5UB%2BKtwDQ8w438q%2FfH2kfy1g2mIeLMB%2B%2FN5kpHgec%2BQ9HlDtJZPRaPnVKiyTc2sduAhSS0pskLFlPaMHKhH4X4y6GD3JwLbmQfbAYsN7XtT%2F%2FH5c1UWYWYd5VpY2W80Uzu25tqCi2AI3z%2BRFutbkMnKv3PpmAhTcgO%2Ffl%2Fw01D5efd7KwgPvjIy1BPHKCuS9YqRDFfBWvmPTX8T2Ft6QU%2Fsg5yWuCpR%2BA336ewDg1ROtEuoXqF8hwlECN28%2F1h8Y%2BEbSP2GWZ0Dg8tB5q3Bt3MdRNp5MQ%2FcdqljEllqeWag5DFKm6HH7Y0nGC6%2BA8EL4Ff%2FtNEE3BvEHinaGH69nej8Y0fLT1YJnVj6iPAkqjnTmSq%2FWahQZ3MtNlQQStgRmWxOat3s4WSmcB1%2B43Ckxe5PX4PiltGUhG%2BaNFcXc%2F7pF8MBBBHHK%2ByeQpJkv8p5y6M6CEHsHPPIVbZS7oT59%2FjTSLRMiTtm6jbBAjWzloc0XBUNhpm0K9H9A%2B5Yn6qEeYX%2Bj%2Fese3VYcfGndqpq%2Ff1pdq353CDQ0aThbsKAlYQI%2BUCX89ZhKNdUaoGrFh%2FuA3a5tDLvRGtLlv01ABiMymQyxTWX2g1gHy5FRhSEM8MFn6RkDDdbeFQzQJpLrLCmzGqMwzNm%2BxAY6pgFTmc6%2BYUruWj1fWKEJC69W2cwGVcGqrirglEbH2tULRXQzYp3zba6eAFE10l6qUMOWqsVCVSHHeN51pXLXwY0GU7Zd4sZFH288Hz%2B%2FC%2BPsccuUiiGAiLS3h2DkbCf8uUz7myNDkUW2PQGcpFkmIkOUxqd3%2BsOLqNs1xg44tjBqOwkEZqQqzd0Wa2z%2BmvfhW501cwVhBfSNnj%2Fg8Psrs77A8qJUY4kb&X-Amz-Signature=2d9b1608a002f248a6968c6f8144a7f2402658160134f54cf6b73bdb6955efa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624LYDKQI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDB%2BK%2BnOnNcwSnhX3zQpvDIrFxIaPOP13MY2EyLmnYR0AiAvzPFPeer1MZR5vRe4gt3OKVikBjnj2Vs7GsSVv8pGBCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMyo0Js6zlMcSs5UB%2BKtwDQ8w438q%2FfH2kfy1g2mIeLMB%2B%2FN5kpHgec%2BQ9HlDtJZPRaPnVKiyTc2sduAhSS0pskLFlPaMHKhH4X4y6GD3JwLbmQfbAYsN7XtT%2F%2FH5c1UWYWYd5VpY2W80Uzu25tqCi2AI3z%2BRFutbkMnKv3PpmAhTcgO%2Ffl%2Fw01D5efd7KwgPvjIy1BPHKCuS9YqRDFfBWvmPTX8T2Ft6QU%2Fsg5yWuCpR%2BA336ewDg1ROtEuoXqF8hwlECN28%2F1h8Y%2BEbSP2GWZ0Dg8tB5q3Bt3MdRNp5MQ%2FcdqljEllqeWag5DFKm6HH7Y0nGC6%2BA8EL4Ff%2FtNEE3BvEHinaGH69nej8Y0fLT1YJnVj6iPAkqjnTmSq%2FWahQZ3MtNlQQStgRmWxOat3s4WSmcB1%2B43Ckxe5PX4PiltGUhG%2BaNFcXc%2F7pF8MBBBHHK%2ByeQpJkv8p5y6M6CEHsHPPIVbZS7oT59%2FjTSLRMiTtm6jbBAjWzloc0XBUNhpm0K9H9A%2B5Yn6qEeYX%2Bj%2Fese3VYcfGndqpq%2Ff1pdq353CDQ0aThbsKAlYQI%2BUCX89ZhKNdUaoGrFh%2FuA3a5tDLvRGtLlv01ABiMymQyxTWX2g1gHy5FRhSEM8MFn6RkDDdbeFQzQJpLrLCmzGqMwzNm%2BxAY6pgFTmc6%2BYUruWj1fWKEJC69W2cwGVcGqrirglEbH2tULRXQzYp3zba6eAFE10l6qUMOWqsVCVSHHeN51pXLXwY0GU7Zd4sZFH288Hz%2B%2FC%2BPsccuUiiGAiLS3h2DkbCf8uUz7myNDkUW2PQGcpFkmIkOUxqd3%2BsOLqNs1xg44tjBqOwkEZqQqzd0Wa2z%2BmvfhW501cwVhBfSNnj%2Fg8Psrs77A8qJUY4kb&X-Amz-Signature=e0be7757fefeb39a8a8bc0a61b68cb9d4f397adfe03dd7e9fd2d486bac2615d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624LYDKQI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDB%2BK%2BnOnNcwSnhX3zQpvDIrFxIaPOP13MY2EyLmnYR0AiAvzPFPeer1MZR5vRe4gt3OKVikBjnj2Vs7GsSVv8pGBCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMyo0Js6zlMcSs5UB%2BKtwDQ8w438q%2FfH2kfy1g2mIeLMB%2B%2FN5kpHgec%2BQ9HlDtJZPRaPnVKiyTc2sduAhSS0pskLFlPaMHKhH4X4y6GD3JwLbmQfbAYsN7XtT%2F%2FH5c1UWYWYd5VpY2W80Uzu25tqCi2AI3z%2BRFutbkMnKv3PpmAhTcgO%2Ffl%2Fw01D5efd7KwgPvjIy1BPHKCuS9YqRDFfBWvmPTX8T2Ft6QU%2Fsg5yWuCpR%2BA336ewDg1ROtEuoXqF8hwlECN28%2F1h8Y%2BEbSP2GWZ0Dg8tB5q3Bt3MdRNp5MQ%2FcdqljEllqeWag5DFKm6HH7Y0nGC6%2BA8EL4Ff%2FtNEE3BvEHinaGH69nej8Y0fLT1YJnVj6iPAkqjnTmSq%2FWahQZ3MtNlQQStgRmWxOat3s4WSmcB1%2B43Ckxe5PX4PiltGUhG%2BaNFcXc%2F7pF8MBBBHHK%2ByeQpJkv8p5y6M6CEHsHPPIVbZS7oT59%2FjTSLRMiTtm6jbBAjWzloc0XBUNhpm0K9H9A%2B5Yn6qEeYX%2Bj%2Fese3VYcfGndqpq%2Ff1pdq353CDQ0aThbsKAlYQI%2BUCX89ZhKNdUaoGrFh%2FuA3a5tDLvRGtLlv01ABiMymQyxTWX2g1gHy5FRhSEM8MFn6RkDDdbeFQzQJpLrLCmzGqMwzNm%2BxAY6pgFTmc6%2BYUruWj1fWKEJC69W2cwGVcGqrirglEbH2tULRXQzYp3zba6eAFE10l6qUMOWqsVCVSHHeN51pXLXwY0GU7Zd4sZFH288Hz%2B%2FC%2BPsccuUiiGAiLS3h2DkbCf8uUz7myNDkUW2PQGcpFkmIkOUxqd3%2BsOLqNs1xg44tjBqOwkEZqQqzd0Wa2z%2BmvfhW501cwVhBfSNnj%2Fg8Psrs77A8qJUY4kb&X-Amz-Signature=05d0f3813693819ca72b3372128d52afba91a0cf96ae7c5d5c25fc73fccef408&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624LYDKQI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDB%2BK%2BnOnNcwSnhX3zQpvDIrFxIaPOP13MY2EyLmnYR0AiAvzPFPeer1MZR5vRe4gt3OKVikBjnj2Vs7GsSVv8pGBCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMyo0Js6zlMcSs5UB%2BKtwDQ8w438q%2FfH2kfy1g2mIeLMB%2B%2FN5kpHgec%2BQ9HlDtJZPRaPnVKiyTc2sduAhSS0pskLFlPaMHKhH4X4y6GD3JwLbmQfbAYsN7XtT%2F%2FH5c1UWYWYd5VpY2W80Uzu25tqCi2AI3z%2BRFutbkMnKv3PpmAhTcgO%2Ffl%2Fw01D5efd7KwgPvjIy1BPHKCuS9YqRDFfBWvmPTX8T2Ft6QU%2Fsg5yWuCpR%2BA336ewDg1ROtEuoXqF8hwlECN28%2F1h8Y%2BEbSP2GWZ0Dg8tB5q3Bt3MdRNp5MQ%2FcdqljEllqeWag5DFKm6HH7Y0nGC6%2BA8EL4Ff%2FtNEE3BvEHinaGH69nej8Y0fLT1YJnVj6iPAkqjnTmSq%2FWahQZ3MtNlQQStgRmWxOat3s4WSmcB1%2B43Ckxe5PX4PiltGUhG%2BaNFcXc%2F7pF8MBBBHHK%2ByeQpJkv8p5y6M6CEHsHPPIVbZS7oT59%2FjTSLRMiTtm6jbBAjWzloc0XBUNhpm0K9H9A%2B5Yn6qEeYX%2Bj%2Fese3VYcfGndqpq%2Ff1pdq353CDQ0aThbsKAlYQI%2BUCX89ZhKNdUaoGrFh%2FuA3a5tDLvRGtLlv01ABiMymQyxTWX2g1gHy5FRhSEM8MFn6RkDDdbeFQzQJpLrLCmzGqMwzNm%2BxAY6pgFTmc6%2BYUruWj1fWKEJC69W2cwGVcGqrirglEbH2tULRXQzYp3zba6eAFE10l6qUMOWqsVCVSHHeN51pXLXwY0GU7Zd4sZFH288Hz%2B%2FC%2BPsccuUiiGAiLS3h2DkbCf8uUz7myNDkUW2PQGcpFkmIkOUxqd3%2BsOLqNs1xg44tjBqOwkEZqQqzd0Wa2z%2BmvfhW501cwVhBfSNnj%2Fg8Psrs77A8qJUY4kb&X-Amz-Signature=a5f5e068da44b93154b57af10587be0c0ff01efebac760a600d1f4ed5a099dbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624LYDKQI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDB%2BK%2BnOnNcwSnhX3zQpvDIrFxIaPOP13MY2EyLmnYR0AiAvzPFPeer1MZR5vRe4gt3OKVikBjnj2Vs7GsSVv8pGBCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMyo0Js6zlMcSs5UB%2BKtwDQ8w438q%2FfH2kfy1g2mIeLMB%2B%2FN5kpHgec%2BQ9HlDtJZPRaPnVKiyTc2sduAhSS0pskLFlPaMHKhH4X4y6GD3JwLbmQfbAYsN7XtT%2F%2FH5c1UWYWYd5VpY2W80Uzu25tqCi2AI3z%2BRFutbkMnKv3PpmAhTcgO%2Ffl%2Fw01D5efd7KwgPvjIy1BPHKCuS9YqRDFfBWvmPTX8T2Ft6QU%2Fsg5yWuCpR%2BA336ewDg1ROtEuoXqF8hwlECN28%2F1h8Y%2BEbSP2GWZ0Dg8tB5q3Bt3MdRNp5MQ%2FcdqljEllqeWag5DFKm6HH7Y0nGC6%2BA8EL4Ff%2FtNEE3BvEHinaGH69nej8Y0fLT1YJnVj6iPAkqjnTmSq%2FWahQZ3MtNlQQStgRmWxOat3s4WSmcB1%2B43Ckxe5PX4PiltGUhG%2BaNFcXc%2F7pF8MBBBHHK%2ByeQpJkv8p5y6M6CEHsHPPIVbZS7oT59%2FjTSLRMiTtm6jbBAjWzloc0XBUNhpm0K9H9A%2B5Yn6qEeYX%2Bj%2Fese3VYcfGndqpq%2Ff1pdq353CDQ0aThbsKAlYQI%2BUCX89ZhKNdUaoGrFh%2FuA3a5tDLvRGtLlv01ABiMymQyxTWX2g1gHy5FRhSEM8MFn6RkDDdbeFQzQJpLrLCmzGqMwzNm%2BxAY6pgFTmc6%2BYUruWj1fWKEJC69W2cwGVcGqrirglEbH2tULRXQzYp3zba6eAFE10l6qUMOWqsVCVSHHeN51pXLXwY0GU7Zd4sZFH288Hz%2B%2FC%2BPsccuUiiGAiLS3h2DkbCf8uUz7myNDkUW2PQGcpFkmIkOUxqd3%2BsOLqNs1xg44tjBqOwkEZqQqzd0Wa2z%2BmvfhW501cwVhBfSNnj%2Fg8Psrs77A8qJUY4kb&X-Amz-Signature=69b76d487b30239921a35b91c0043134ba8e7f900d6100867d7241ee72b9b3af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624LYDKQI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDB%2BK%2BnOnNcwSnhX3zQpvDIrFxIaPOP13MY2EyLmnYR0AiAvzPFPeer1MZR5vRe4gt3OKVikBjnj2Vs7GsSVv8pGBCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMyo0Js6zlMcSs5UB%2BKtwDQ8w438q%2FfH2kfy1g2mIeLMB%2B%2FN5kpHgec%2BQ9HlDtJZPRaPnVKiyTc2sduAhSS0pskLFlPaMHKhH4X4y6GD3JwLbmQfbAYsN7XtT%2F%2FH5c1UWYWYd5VpY2W80Uzu25tqCi2AI3z%2BRFutbkMnKv3PpmAhTcgO%2Ffl%2Fw01D5efd7KwgPvjIy1BPHKCuS9YqRDFfBWvmPTX8T2Ft6QU%2Fsg5yWuCpR%2BA336ewDg1ROtEuoXqF8hwlECN28%2F1h8Y%2BEbSP2GWZ0Dg8tB5q3Bt3MdRNp5MQ%2FcdqljEllqeWag5DFKm6HH7Y0nGC6%2BA8EL4Ff%2FtNEE3BvEHinaGH69nej8Y0fLT1YJnVj6iPAkqjnTmSq%2FWahQZ3MtNlQQStgRmWxOat3s4WSmcB1%2B43Ckxe5PX4PiltGUhG%2BaNFcXc%2F7pF8MBBBHHK%2ByeQpJkv8p5y6M6CEHsHPPIVbZS7oT59%2FjTSLRMiTtm6jbBAjWzloc0XBUNhpm0K9H9A%2B5Yn6qEeYX%2Bj%2Fese3VYcfGndqpq%2Ff1pdq353CDQ0aThbsKAlYQI%2BUCX89ZhKNdUaoGrFh%2FuA3a5tDLvRGtLlv01ABiMymQyxTWX2g1gHy5FRhSEM8MFn6RkDDdbeFQzQJpLrLCmzGqMwzNm%2BxAY6pgFTmc6%2BYUruWj1fWKEJC69W2cwGVcGqrirglEbH2tULRXQzYp3zba6eAFE10l6qUMOWqsVCVSHHeN51pXLXwY0GU7Zd4sZFH288Hz%2B%2FC%2BPsccuUiiGAiLS3h2DkbCf8uUz7myNDkUW2PQGcpFkmIkOUxqd3%2BsOLqNs1xg44tjBqOwkEZqQqzd0Wa2z%2BmvfhW501cwVhBfSNnj%2Fg8Psrs77A8qJUY4kb&X-Amz-Signature=e41fad5275fa257f736311ca34e2bc89ef30c24ee90cf6b3063f1f85eeadcd36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624LYDKQI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDB%2BK%2BnOnNcwSnhX3zQpvDIrFxIaPOP13MY2EyLmnYR0AiAvzPFPeer1MZR5vRe4gt3OKVikBjnj2Vs7GsSVv8pGBCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMyo0Js6zlMcSs5UB%2BKtwDQ8w438q%2FfH2kfy1g2mIeLMB%2B%2FN5kpHgec%2BQ9HlDtJZPRaPnVKiyTc2sduAhSS0pskLFlPaMHKhH4X4y6GD3JwLbmQfbAYsN7XtT%2F%2FH5c1UWYWYd5VpY2W80Uzu25tqCi2AI3z%2BRFutbkMnKv3PpmAhTcgO%2Ffl%2Fw01D5efd7KwgPvjIy1BPHKCuS9YqRDFfBWvmPTX8T2Ft6QU%2Fsg5yWuCpR%2BA336ewDg1ROtEuoXqF8hwlECN28%2F1h8Y%2BEbSP2GWZ0Dg8tB5q3Bt3MdRNp5MQ%2FcdqljEllqeWag5DFKm6HH7Y0nGC6%2BA8EL4Ff%2FtNEE3BvEHinaGH69nej8Y0fLT1YJnVj6iPAkqjnTmSq%2FWahQZ3MtNlQQStgRmWxOat3s4WSmcB1%2B43Ckxe5PX4PiltGUhG%2BaNFcXc%2F7pF8MBBBHHK%2ByeQpJkv8p5y6M6CEHsHPPIVbZS7oT59%2FjTSLRMiTtm6jbBAjWzloc0XBUNhpm0K9H9A%2B5Yn6qEeYX%2Bj%2Fese3VYcfGndqpq%2Ff1pdq353CDQ0aThbsKAlYQI%2BUCX89ZhKNdUaoGrFh%2FuA3a5tDLvRGtLlv01ABiMymQyxTWX2g1gHy5FRhSEM8MFn6RkDDdbeFQzQJpLrLCmzGqMwzNm%2BxAY6pgFTmc6%2BYUruWj1fWKEJC69W2cwGVcGqrirglEbH2tULRXQzYp3zba6eAFE10l6qUMOWqsVCVSHHeN51pXLXwY0GU7Zd4sZFH288Hz%2B%2FC%2BPsccuUiiGAiLS3h2DkbCf8uUz7myNDkUW2PQGcpFkmIkOUxqd3%2BsOLqNs1xg44tjBqOwkEZqQqzd0Wa2z%2BmvfhW501cwVhBfSNnj%2Fg8Psrs77A8qJUY4kb&X-Amz-Signature=bec156f755981dea77834cae99fc4bd4fb443ce1b4075045e75eaa03314b4a80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624LYDKQI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDB%2BK%2BnOnNcwSnhX3zQpvDIrFxIaPOP13MY2EyLmnYR0AiAvzPFPeer1MZR5vRe4gt3OKVikBjnj2Vs7GsSVv8pGBCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMyo0Js6zlMcSs5UB%2BKtwDQ8w438q%2FfH2kfy1g2mIeLMB%2B%2FN5kpHgec%2BQ9HlDtJZPRaPnVKiyTc2sduAhSS0pskLFlPaMHKhH4X4y6GD3JwLbmQfbAYsN7XtT%2F%2FH5c1UWYWYd5VpY2W80Uzu25tqCi2AI3z%2BRFutbkMnKv3PpmAhTcgO%2Ffl%2Fw01D5efd7KwgPvjIy1BPHKCuS9YqRDFfBWvmPTX8T2Ft6QU%2Fsg5yWuCpR%2BA336ewDg1ROtEuoXqF8hwlECN28%2F1h8Y%2BEbSP2GWZ0Dg8tB5q3Bt3MdRNp5MQ%2FcdqljEllqeWag5DFKm6HH7Y0nGC6%2BA8EL4Ff%2FtNEE3BvEHinaGH69nej8Y0fLT1YJnVj6iPAkqjnTmSq%2FWahQZ3MtNlQQStgRmWxOat3s4WSmcB1%2B43Ckxe5PX4PiltGUhG%2BaNFcXc%2F7pF8MBBBHHK%2ByeQpJkv8p5y6M6CEHsHPPIVbZS7oT59%2FjTSLRMiTtm6jbBAjWzloc0XBUNhpm0K9H9A%2B5Yn6qEeYX%2Bj%2Fese3VYcfGndqpq%2Ff1pdq353CDQ0aThbsKAlYQI%2BUCX89ZhKNdUaoGrFh%2FuA3a5tDLvRGtLlv01ABiMymQyxTWX2g1gHy5FRhSEM8MFn6RkDDdbeFQzQJpLrLCmzGqMwzNm%2BxAY6pgFTmc6%2BYUruWj1fWKEJC69W2cwGVcGqrirglEbH2tULRXQzYp3zba6eAFE10l6qUMOWqsVCVSHHeN51pXLXwY0GU7Zd4sZFH288Hz%2B%2FC%2BPsccuUiiGAiLS3h2DkbCf8uUz7myNDkUW2PQGcpFkmIkOUxqd3%2BsOLqNs1xg44tjBqOwkEZqQqzd0Wa2z%2BmvfhW501cwVhBfSNnj%2Fg8Psrs77A8qJUY4kb&X-Amz-Signature=de4b6e1279f2a33ac7e70d57906ace90062761bcfa8872412c54bcf572907426&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624LYDKQI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDB%2BK%2BnOnNcwSnhX3zQpvDIrFxIaPOP13MY2EyLmnYR0AiAvzPFPeer1MZR5vRe4gt3OKVikBjnj2Vs7GsSVv8pGBCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMyo0Js6zlMcSs5UB%2BKtwDQ8w438q%2FfH2kfy1g2mIeLMB%2B%2FN5kpHgec%2BQ9HlDtJZPRaPnVKiyTc2sduAhSS0pskLFlPaMHKhH4X4y6GD3JwLbmQfbAYsN7XtT%2F%2FH5c1UWYWYd5VpY2W80Uzu25tqCi2AI3z%2BRFutbkMnKv3PpmAhTcgO%2Ffl%2Fw01D5efd7KwgPvjIy1BPHKCuS9YqRDFfBWvmPTX8T2Ft6QU%2Fsg5yWuCpR%2BA336ewDg1ROtEuoXqF8hwlECN28%2F1h8Y%2BEbSP2GWZ0Dg8tB5q3Bt3MdRNp5MQ%2FcdqljEllqeWag5DFKm6HH7Y0nGC6%2BA8EL4Ff%2FtNEE3BvEHinaGH69nej8Y0fLT1YJnVj6iPAkqjnTmSq%2FWahQZ3MtNlQQStgRmWxOat3s4WSmcB1%2B43Ckxe5PX4PiltGUhG%2BaNFcXc%2F7pF8MBBBHHK%2ByeQpJkv8p5y6M6CEHsHPPIVbZS7oT59%2FjTSLRMiTtm6jbBAjWzloc0XBUNhpm0K9H9A%2B5Yn6qEeYX%2Bj%2Fese3VYcfGndqpq%2Ff1pdq353CDQ0aThbsKAlYQI%2BUCX89ZhKNdUaoGrFh%2FuA3a5tDLvRGtLlv01ABiMymQyxTWX2g1gHy5FRhSEM8MFn6RkDDdbeFQzQJpLrLCmzGqMwzNm%2BxAY6pgFTmc6%2BYUruWj1fWKEJC69W2cwGVcGqrirglEbH2tULRXQzYp3zba6eAFE10l6qUMOWqsVCVSHHeN51pXLXwY0GU7Zd4sZFH288Hz%2B%2FC%2BPsccuUiiGAiLS3h2DkbCf8uUz7myNDkUW2PQGcpFkmIkOUxqd3%2BsOLqNs1xg44tjBqOwkEZqQqzd0Wa2z%2BmvfhW501cwVhBfSNnj%2Fg8Psrs77A8qJUY4kb&X-Amz-Signature=70a46affa16eca337faf899179b13d3719cd350170e2063f897f2cc0eec3fc97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624LYDKQI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDB%2BK%2BnOnNcwSnhX3zQpvDIrFxIaPOP13MY2EyLmnYR0AiAvzPFPeer1MZR5vRe4gt3OKVikBjnj2Vs7GsSVv8pGBCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMyo0Js6zlMcSs5UB%2BKtwDQ8w438q%2FfH2kfy1g2mIeLMB%2B%2FN5kpHgec%2BQ9HlDtJZPRaPnVKiyTc2sduAhSS0pskLFlPaMHKhH4X4y6GD3JwLbmQfbAYsN7XtT%2F%2FH5c1UWYWYd5VpY2W80Uzu25tqCi2AI3z%2BRFutbkMnKv3PpmAhTcgO%2Ffl%2Fw01D5efd7KwgPvjIy1BPHKCuS9YqRDFfBWvmPTX8T2Ft6QU%2Fsg5yWuCpR%2BA336ewDg1ROtEuoXqF8hwlECN28%2F1h8Y%2BEbSP2GWZ0Dg8tB5q3Bt3MdRNp5MQ%2FcdqljEllqeWag5DFKm6HH7Y0nGC6%2BA8EL4Ff%2FtNEE3BvEHinaGH69nej8Y0fLT1YJnVj6iPAkqjnTmSq%2FWahQZ3MtNlQQStgRmWxOat3s4WSmcB1%2B43Ckxe5PX4PiltGUhG%2BaNFcXc%2F7pF8MBBBHHK%2ByeQpJkv8p5y6M6CEHsHPPIVbZS7oT59%2FjTSLRMiTtm6jbBAjWzloc0XBUNhpm0K9H9A%2B5Yn6qEeYX%2Bj%2Fese3VYcfGndqpq%2Ff1pdq353CDQ0aThbsKAlYQI%2BUCX89ZhKNdUaoGrFh%2FuA3a5tDLvRGtLlv01ABiMymQyxTWX2g1gHy5FRhSEM8MFn6RkDDdbeFQzQJpLrLCmzGqMwzNm%2BxAY6pgFTmc6%2BYUruWj1fWKEJC69W2cwGVcGqrirglEbH2tULRXQzYp3zba6eAFE10l6qUMOWqsVCVSHHeN51pXLXwY0GU7Zd4sZFH288Hz%2B%2FC%2BPsccuUiiGAiLS3h2DkbCf8uUz7myNDkUW2PQGcpFkmIkOUxqd3%2BsOLqNs1xg44tjBqOwkEZqQqzd0Wa2z%2BmvfhW501cwVhBfSNnj%2Fg8Psrs77A8qJUY4kb&X-Amz-Signature=a5f5e068da44b93154b57af10587be0c0ff01efebac760a600d1f4ed5a099dbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
