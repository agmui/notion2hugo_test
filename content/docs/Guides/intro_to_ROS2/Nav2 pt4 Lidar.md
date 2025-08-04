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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7F5Q6C7%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIAruP6emKKQrLByG03qaBsBOvT4TLSyhylRiWNC5DzjvAiAuOhjkA7j3834d1T5PLW9ZxS49KS1FToRdk%2Fc2z2nMFir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMbyQ%2BaM9UivS0jF3RKtwDqzTTMHc1Lw4THjYSAWFLUpy%2Bf8BXMvNBaIxf0H4LiLUyVCjz6R4OTt1z9DmQ7r6%2BSfa6blR50K5Dp32pVL6q41nJ9X8BTWXb17yZv3C2SyBgPBTm4YGvseJrkAAEWDCRS8IBDMcMDSVq8iW8fZJI1GvP7qyf40l7OBjJM1t1IBEIWIpqGj93nacdLchS9jaMkD4UJzfWm7V4CcCsX6UPQr2w70Jek6wt6TAQMELUpP1MyFo46huXrWIyPczDSX8qFM2svu%2BsQRitdpe3%2FD%2BK8fvwXYWcTlfuSj77D03Os7zcWowGF0QXPZyPZTMLjqDqJQhcRrsHKX8f7bWdDOPIJjPz7RffxOkfZRYlT2ENh1rh5QJN3MpF2ErXoaLyw5tHyNAkrrVtFUMxG%2BbpZVOQMAIhw%2F7G5%2FTuHhSapwro35Sa1%2Bh0taf%2B4Q01wll6tn53c3pZghYNAGwtt%2FfgiqTSeFkFUl9eak%2BgA4ook8rQs9hI4a8uA83RNJRZeNKdJSW71z6ous2omTfKhaoVzWd8x23s9S94M%2By%2FLpicKJe0vCeKYhLR0KkX%2FY7vzv7sgfn6wrg8iJIdfzmjnIcwRolqt0pvoHeInugfiYw06ZVrJ1ymilAWIT%2BoAUIjkC4w2LfBxAY6pgHg0XnxFQCuZNNfNbEvPe%2B4ltdEYfs6fZWRS6nJeOMj9Jn0YW7rzMlquOrYReMwBXNv0BtcD1KjCs6KjCngsPJhoQxg85GBb4fqWR5PYbeL2hPml2kZAY9Ga6ROTwhDND5%2FFIWU%2B7v1C9A1DHBkrKGC0HeErPB1PBrscTxcqCXOd3iPkRKfdWTopQURGU3grKcWNoVP3U7dBcMN8Y5tE0XgW1Vh5fri&X-Amz-Signature=64725fa02976e7548b17deff5f4b468af2578b399eace5a1ceb4631c811ce723&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYSXUSY3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQD10%2BXINlwd%2BKpP9FwnBMEZNGgDcWnKyS4kj0y5igUgCAIhAItptqWSYo7Q89AKjk53sSZJ4s79j9Gr2Jm9E2UGwkLjKv8DCEAQABoMNjM3NDIzMTgzODA1IgysgPzDm7Yv0bsAu6Uq3AOSx%2FhsKTG4%2BqWas9aVWp3VOJPGu2qYku3tWX9Q%2Ft6LCM%2Bd63Lywy9mxoBPlAZkgulYOxZ6UHSOtTAx3DAheIkPAyR3sucZpNoPw9AdOxXo6QvmevhCStLQ%2F0FijnOoJMrdD8ujXexWokvV7Rf0OuQwCzUyOSV%2F8AfTm3llKVvm%2F4M8u5EhIDSZUBvYyphRq%2Fx3LxgoZf5KT75LpyKa5XX02ZVOmcS1eoq0vkUzIX4V9xUSyUubfT5mqLKqHpDknbNEtm2aHX50n%2Bhlpy0sgAn%2Bwd6E1btruAVcSOcwsVK6Eei5xyO600KGLsExk8Ri3LkMGvIsX%2B%2BkTlIBB%2FG6Mz8A%2BhXV5EigxtRF%2BDjYSjLT5h5KkYvXrRZkFuelx3Td1c9dTySFYUODiFNzQE2XkGK1G9tdYoKhjaUzN88QClRNuI4hBAnXSpEwCcYJ%2Bl4g34%2B74X5TqadGoHtX576FP1oNW8%2BZYMfUtv2rfMKCTa%2BvKtl5ZLEjsuQbyY%2FVnKTw2jPKgmGSlnJ1nEiQQ4DHLxjjxDJqkzzRur2ooCFRguFUby0H3KeHe47V7GmgNLak0qNpcqajPyE%2BIW55mMaGDVOukhf3Z0ik7ZQTHqvjXWBl2r7cdSV0gDpnrG3ZljCvtsHEBjqkARlquWaVRkZCw9F8kyzsP%2BzzM3H5L2QD9LEbAhKYB1k1iO%2Bnug%2BNH3uJ%2FFHNWMM7z64h5stZkP6ipDkIkN2VOd4nPDvoD7l%2FDcbrS7%2BOdKmIEh5PIan81O0%2BSKJRrxZZgeMPBKQLTFD9tpc107WN2JHwYjnmFberPRaSfHhUsUCWcV6gCoK4wBkb1yJ922DBjbJU4BbiBF3JeIrfgHvquU92uGC9&X-Amz-Signature=6938823710fb29fd48d6467e0a20f56c33f50b40b3a474f3faab60fa11289d64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYSXUSY3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQD10%2BXINlwd%2BKpP9FwnBMEZNGgDcWnKyS4kj0y5igUgCAIhAItptqWSYo7Q89AKjk53sSZJ4s79j9Gr2Jm9E2UGwkLjKv8DCEAQABoMNjM3NDIzMTgzODA1IgysgPzDm7Yv0bsAu6Uq3AOSx%2FhsKTG4%2BqWas9aVWp3VOJPGu2qYku3tWX9Q%2Ft6LCM%2Bd63Lywy9mxoBPlAZkgulYOxZ6UHSOtTAx3DAheIkPAyR3sucZpNoPw9AdOxXo6QvmevhCStLQ%2F0FijnOoJMrdD8ujXexWokvV7Rf0OuQwCzUyOSV%2F8AfTm3llKVvm%2F4M8u5EhIDSZUBvYyphRq%2Fx3LxgoZf5KT75LpyKa5XX02ZVOmcS1eoq0vkUzIX4V9xUSyUubfT5mqLKqHpDknbNEtm2aHX50n%2Bhlpy0sgAn%2Bwd6E1btruAVcSOcwsVK6Eei5xyO600KGLsExk8Ri3LkMGvIsX%2B%2BkTlIBB%2FG6Mz8A%2BhXV5EigxtRF%2BDjYSjLT5h5KkYvXrRZkFuelx3Td1c9dTySFYUODiFNzQE2XkGK1G9tdYoKhjaUzN88QClRNuI4hBAnXSpEwCcYJ%2Bl4g34%2B74X5TqadGoHtX576FP1oNW8%2BZYMfUtv2rfMKCTa%2BvKtl5ZLEjsuQbyY%2FVnKTw2jPKgmGSlnJ1nEiQQ4DHLxjjxDJqkzzRur2ooCFRguFUby0H3KeHe47V7GmgNLak0qNpcqajPyE%2BIW55mMaGDVOukhf3Z0ik7ZQTHqvjXWBl2r7cdSV0gDpnrG3ZljCvtsHEBjqkARlquWaVRkZCw9F8kyzsP%2BzzM3H5L2QD9LEbAhKYB1k1iO%2Bnug%2BNH3uJ%2FFHNWMM7z64h5stZkP6ipDkIkN2VOd4nPDvoD7l%2FDcbrS7%2BOdKmIEh5PIan81O0%2BSKJRrxZZgeMPBKQLTFD9tpc107WN2JHwYjnmFberPRaSfHhUsUCWcV6gCoK4wBkb1yJ922DBjbJU4BbiBF3JeIrfgHvquU92uGC9&X-Amz-Signature=3671461e6f5d4822ac325425c564f8c5448e63359e69cd9c559326b630fb3091&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYSXUSY3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQD10%2BXINlwd%2BKpP9FwnBMEZNGgDcWnKyS4kj0y5igUgCAIhAItptqWSYo7Q89AKjk53sSZJ4s79j9Gr2Jm9E2UGwkLjKv8DCEAQABoMNjM3NDIzMTgzODA1IgysgPzDm7Yv0bsAu6Uq3AOSx%2FhsKTG4%2BqWas9aVWp3VOJPGu2qYku3tWX9Q%2Ft6LCM%2Bd63Lywy9mxoBPlAZkgulYOxZ6UHSOtTAx3DAheIkPAyR3sucZpNoPw9AdOxXo6QvmevhCStLQ%2F0FijnOoJMrdD8ujXexWokvV7Rf0OuQwCzUyOSV%2F8AfTm3llKVvm%2F4M8u5EhIDSZUBvYyphRq%2Fx3LxgoZf5KT75LpyKa5XX02ZVOmcS1eoq0vkUzIX4V9xUSyUubfT5mqLKqHpDknbNEtm2aHX50n%2Bhlpy0sgAn%2Bwd6E1btruAVcSOcwsVK6Eei5xyO600KGLsExk8Ri3LkMGvIsX%2B%2BkTlIBB%2FG6Mz8A%2BhXV5EigxtRF%2BDjYSjLT5h5KkYvXrRZkFuelx3Td1c9dTySFYUODiFNzQE2XkGK1G9tdYoKhjaUzN88QClRNuI4hBAnXSpEwCcYJ%2Bl4g34%2B74X5TqadGoHtX576FP1oNW8%2BZYMfUtv2rfMKCTa%2BvKtl5ZLEjsuQbyY%2FVnKTw2jPKgmGSlnJ1nEiQQ4DHLxjjxDJqkzzRur2ooCFRguFUby0H3KeHe47V7GmgNLak0qNpcqajPyE%2BIW55mMaGDVOukhf3Z0ik7ZQTHqvjXWBl2r7cdSV0gDpnrG3ZljCvtsHEBjqkARlquWaVRkZCw9F8kyzsP%2BzzM3H5L2QD9LEbAhKYB1k1iO%2Bnug%2BNH3uJ%2FFHNWMM7z64h5stZkP6ipDkIkN2VOd4nPDvoD7l%2FDcbrS7%2BOdKmIEh5PIan81O0%2BSKJRrxZZgeMPBKQLTFD9tpc107WN2JHwYjnmFberPRaSfHhUsUCWcV6gCoK4wBkb1yJ922DBjbJU4BbiBF3JeIrfgHvquU92uGC9&X-Amz-Signature=4eee247eb56ada30b0466e512f57fb0cb5e6202e8a689f0db2912926ba6122eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYSXUSY3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQD10%2BXINlwd%2BKpP9FwnBMEZNGgDcWnKyS4kj0y5igUgCAIhAItptqWSYo7Q89AKjk53sSZJ4s79j9Gr2Jm9E2UGwkLjKv8DCEAQABoMNjM3NDIzMTgzODA1IgysgPzDm7Yv0bsAu6Uq3AOSx%2FhsKTG4%2BqWas9aVWp3VOJPGu2qYku3tWX9Q%2Ft6LCM%2Bd63Lywy9mxoBPlAZkgulYOxZ6UHSOtTAx3DAheIkPAyR3sucZpNoPw9AdOxXo6QvmevhCStLQ%2F0FijnOoJMrdD8ujXexWokvV7Rf0OuQwCzUyOSV%2F8AfTm3llKVvm%2F4M8u5EhIDSZUBvYyphRq%2Fx3LxgoZf5KT75LpyKa5XX02ZVOmcS1eoq0vkUzIX4V9xUSyUubfT5mqLKqHpDknbNEtm2aHX50n%2Bhlpy0sgAn%2Bwd6E1btruAVcSOcwsVK6Eei5xyO600KGLsExk8Ri3LkMGvIsX%2B%2BkTlIBB%2FG6Mz8A%2BhXV5EigxtRF%2BDjYSjLT5h5KkYvXrRZkFuelx3Td1c9dTySFYUODiFNzQE2XkGK1G9tdYoKhjaUzN88QClRNuI4hBAnXSpEwCcYJ%2Bl4g34%2B74X5TqadGoHtX576FP1oNW8%2BZYMfUtv2rfMKCTa%2BvKtl5ZLEjsuQbyY%2FVnKTw2jPKgmGSlnJ1nEiQQ4DHLxjjxDJqkzzRur2ooCFRguFUby0H3KeHe47V7GmgNLak0qNpcqajPyE%2BIW55mMaGDVOukhf3Z0ik7ZQTHqvjXWBl2r7cdSV0gDpnrG3ZljCvtsHEBjqkARlquWaVRkZCw9F8kyzsP%2BzzM3H5L2QD9LEbAhKYB1k1iO%2Bnug%2BNH3uJ%2FFHNWMM7z64h5stZkP6ipDkIkN2VOd4nPDvoD7l%2FDcbrS7%2BOdKmIEh5PIan81O0%2BSKJRrxZZgeMPBKQLTFD9tpc107WN2JHwYjnmFberPRaSfHhUsUCWcV6gCoK4wBkb1yJ922DBjbJU4BbiBF3JeIrfgHvquU92uGC9&X-Amz-Signature=d6d47cd5f5d359c27acd5a20456d3de41d20807f5ae8910525aef817ad75f864&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYSXUSY3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQD10%2BXINlwd%2BKpP9FwnBMEZNGgDcWnKyS4kj0y5igUgCAIhAItptqWSYo7Q89AKjk53sSZJ4s79j9Gr2Jm9E2UGwkLjKv8DCEAQABoMNjM3NDIzMTgzODA1IgysgPzDm7Yv0bsAu6Uq3AOSx%2FhsKTG4%2BqWas9aVWp3VOJPGu2qYku3tWX9Q%2Ft6LCM%2Bd63Lywy9mxoBPlAZkgulYOxZ6UHSOtTAx3DAheIkPAyR3sucZpNoPw9AdOxXo6QvmevhCStLQ%2F0FijnOoJMrdD8ujXexWokvV7Rf0OuQwCzUyOSV%2F8AfTm3llKVvm%2F4M8u5EhIDSZUBvYyphRq%2Fx3LxgoZf5KT75LpyKa5XX02ZVOmcS1eoq0vkUzIX4V9xUSyUubfT5mqLKqHpDknbNEtm2aHX50n%2Bhlpy0sgAn%2Bwd6E1btruAVcSOcwsVK6Eei5xyO600KGLsExk8Ri3LkMGvIsX%2B%2BkTlIBB%2FG6Mz8A%2BhXV5EigxtRF%2BDjYSjLT5h5KkYvXrRZkFuelx3Td1c9dTySFYUODiFNzQE2XkGK1G9tdYoKhjaUzN88QClRNuI4hBAnXSpEwCcYJ%2Bl4g34%2B74X5TqadGoHtX576FP1oNW8%2BZYMfUtv2rfMKCTa%2BvKtl5ZLEjsuQbyY%2FVnKTw2jPKgmGSlnJ1nEiQQ4DHLxjjxDJqkzzRur2ooCFRguFUby0H3KeHe47V7GmgNLak0qNpcqajPyE%2BIW55mMaGDVOukhf3Z0ik7ZQTHqvjXWBl2r7cdSV0gDpnrG3ZljCvtsHEBjqkARlquWaVRkZCw9F8kyzsP%2BzzM3H5L2QD9LEbAhKYB1k1iO%2Bnug%2BNH3uJ%2FFHNWMM7z64h5stZkP6ipDkIkN2VOd4nPDvoD7l%2FDcbrS7%2BOdKmIEh5PIan81O0%2BSKJRrxZZgeMPBKQLTFD9tpc107WN2JHwYjnmFberPRaSfHhUsUCWcV6gCoK4wBkb1yJ922DBjbJU4BbiBF3JeIrfgHvquU92uGC9&X-Amz-Signature=36726e8a8d8e81ab914a63e9b9c2845e55acebe8ba79f5c36142b80f1ab75e9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYSXUSY3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQD10%2BXINlwd%2BKpP9FwnBMEZNGgDcWnKyS4kj0y5igUgCAIhAItptqWSYo7Q89AKjk53sSZJ4s79j9Gr2Jm9E2UGwkLjKv8DCEAQABoMNjM3NDIzMTgzODA1IgysgPzDm7Yv0bsAu6Uq3AOSx%2FhsKTG4%2BqWas9aVWp3VOJPGu2qYku3tWX9Q%2Ft6LCM%2Bd63Lywy9mxoBPlAZkgulYOxZ6UHSOtTAx3DAheIkPAyR3sucZpNoPw9AdOxXo6QvmevhCStLQ%2F0FijnOoJMrdD8ujXexWokvV7Rf0OuQwCzUyOSV%2F8AfTm3llKVvm%2F4M8u5EhIDSZUBvYyphRq%2Fx3LxgoZf5KT75LpyKa5XX02ZVOmcS1eoq0vkUzIX4V9xUSyUubfT5mqLKqHpDknbNEtm2aHX50n%2Bhlpy0sgAn%2Bwd6E1btruAVcSOcwsVK6Eei5xyO600KGLsExk8Ri3LkMGvIsX%2B%2BkTlIBB%2FG6Mz8A%2BhXV5EigxtRF%2BDjYSjLT5h5KkYvXrRZkFuelx3Td1c9dTySFYUODiFNzQE2XkGK1G9tdYoKhjaUzN88QClRNuI4hBAnXSpEwCcYJ%2Bl4g34%2B74X5TqadGoHtX576FP1oNW8%2BZYMfUtv2rfMKCTa%2BvKtl5ZLEjsuQbyY%2FVnKTw2jPKgmGSlnJ1nEiQQ4DHLxjjxDJqkzzRur2ooCFRguFUby0H3KeHe47V7GmgNLak0qNpcqajPyE%2BIW55mMaGDVOukhf3Z0ik7ZQTHqvjXWBl2r7cdSV0gDpnrG3ZljCvtsHEBjqkARlquWaVRkZCw9F8kyzsP%2BzzM3H5L2QD9LEbAhKYB1k1iO%2Bnug%2BNH3uJ%2FFHNWMM7z64h5stZkP6ipDkIkN2VOd4nPDvoD7l%2FDcbrS7%2BOdKmIEh5PIan81O0%2BSKJRrxZZgeMPBKQLTFD9tpc107WN2JHwYjnmFberPRaSfHhUsUCWcV6gCoK4wBkb1yJ922DBjbJU4BbiBF3JeIrfgHvquU92uGC9&X-Amz-Signature=3ef205bf75fe99cca51db8fc4a309c161a4c824a29fc16626725c019242cc5b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYSXUSY3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQD10%2BXINlwd%2BKpP9FwnBMEZNGgDcWnKyS4kj0y5igUgCAIhAItptqWSYo7Q89AKjk53sSZJ4s79j9Gr2Jm9E2UGwkLjKv8DCEAQABoMNjM3NDIzMTgzODA1IgysgPzDm7Yv0bsAu6Uq3AOSx%2FhsKTG4%2BqWas9aVWp3VOJPGu2qYku3tWX9Q%2Ft6LCM%2Bd63Lywy9mxoBPlAZkgulYOxZ6UHSOtTAx3DAheIkPAyR3sucZpNoPw9AdOxXo6QvmevhCStLQ%2F0FijnOoJMrdD8ujXexWokvV7Rf0OuQwCzUyOSV%2F8AfTm3llKVvm%2F4M8u5EhIDSZUBvYyphRq%2Fx3LxgoZf5KT75LpyKa5XX02ZVOmcS1eoq0vkUzIX4V9xUSyUubfT5mqLKqHpDknbNEtm2aHX50n%2Bhlpy0sgAn%2Bwd6E1btruAVcSOcwsVK6Eei5xyO600KGLsExk8Ri3LkMGvIsX%2B%2BkTlIBB%2FG6Mz8A%2BhXV5EigxtRF%2BDjYSjLT5h5KkYvXrRZkFuelx3Td1c9dTySFYUODiFNzQE2XkGK1G9tdYoKhjaUzN88QClRNuI4hBAnXSpEwCcYJ%2Bl4g34%2B74X5TqadGoHtX576FP1oNW8%2BZYMfUtv2rfMKCTa%2BvKtl5ZLEjsuQbyY%2FVnKTw2jPKgmGSlnJ1nEiQQ4DHLxjjxDJqkzzRur2ooCFRguFUby0H3KeHe47V7GmgNLak0qNpcqajPyE%2BIW55mMaGDVOukhf3Z0ik7ZQTHqvjXWBl2r7cdSV0gDpnrG3ZljCvtsHEBjqkARlquWaVRkZCw9F8kyzsP%2BzzM3H5L2QD9LEbAhKYB1k1iO%2Bnug%2BNH3uJ%2FFHNWMM7z64h5stZkP6ipDkIkN2VOd4nPDvoD7l%2FDcbrS7%2BOdKmIEh5PIan81O0%2BSKJRrxZZgeMPBKQLTFD9tpc107WN2JHwYjnmFberPRaSfHhUsUCWcV6gCoK4wBkb1yJ922DBjbJU4BbiBF3JeIrfgHvquU92uGC9&X-Amz-Signature=fb70899697ba07da83294ffab60ba42b076fc0a8da42d00efc4d87b9473c54e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYSXUSY3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQD10%2BXINlwd%2BKpP9FwnBMEZNGgDcWnKyS4kj0y5igUgCAIhAItptqWSYo7Q89AKjk53sSZJ4s79j9Gr2Jm9E2UGwkLjKv8DCEAQABoMNjM3NDIzMTgzODA1IgysgPzDm7Yv0bsAu6Uq3AOSx%2FhsKTG4%2BqWas9aVWp3VOJPGu2qYku3tWX9Q%2Ft6LCM%2Bd63Lywy9mxoBPlAZkgulYOxZ6UHSOtTAx3DAheIkPAyR3sucZpNoPw9AdOxXo6QvmevhCStLQ%2F0FijnOoJMrdD8ujXexWokvV7Rf0OuQwCzUyOSV%2F8AfTm3llKVvm%2F4M8u5EhIDSZUBvYyphRq%2Fx3LxgoZf5KT75LpyKa5XX02ZVOmcS1eoq0vkUzIX4V9xUSyUubfT5mqLKqHpDknbNEtm2aHX50n%2Bhlpy0sgAn%2Bwd6E1btruAVcSOcwsVK6Eei5xyO600KGLsExk8Ri3LkMGvIsX%2B%2BkTlIBB%2FG6Mz8A%2BhXV5EigxtRF%2BDjYSjLT5h5KkYvXrRZkFuelx3Td1c9dTySFYUODiFNzQE2XkGK1G9tdYoKhjaUzN88QClRNuI4hBAnXSpEwCcYJ%2Bl4g34%2B74X5TqadGoHtX576FP1oNW8%2BZYMfUtv2rfMKCTa%2BvKtl5ZLEjsuQbyY%2FVnKTw2jPKgmGSlnJ1nEiQQ4DHLxjjxDJqkzzRur2ooCFRguFUby0H3KeHe47V7GmgNLak0qNpcqajPyE%2BIW55mMaGDVOukhf3Z0ik7ZQTHqvjXWBl2r7cdSV0gDpnrG3ZljCvtsHEBjqkARlquWaVRkZCw9F8kyzsP%2BzzM3H5L2QD9LEbAhKYB1k1iO%2Bnug%2BNH3uJ%2FFHNWMM7z64h5stZkP6ipDkIkN2VOd4nPDvoD7l%2FDcbrS7%2BOdKmIEh5PIan81O0%2BSKJRrxZZgeMPBKQLTFD9tpc107WN2JHwYjnmFberPRaSfHhUsUCWcV6gCoK4wBkb1yJ922DBjbJU4BbiBF3JeIrfgHvquU92uGC9&X-Amz-Signature=eefdf490e6e2a022344ca23ac9a61d377318aa1af65cd5bdac987b016f4d26c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYSXUSY3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQD10%2BXINlwd%2BKpP9FwnBMEZNGgDcWnKyS4kj0y5igUgCAIhAItptqWSYo7Q89AKjk53sSZJ4s79j9Gr2Jm9E2UGwkLjKv8DCEAQABoMNjM3NDIzMTgzODA1IgysgPzDm7Yv0bsAu6Uq3AOSx%2FhsKTG4%2BqWas9aVWp3VOJPGu2qYku3tWX9Q%2Ft6LCM%2Bd63Lywy9mxoBPlAZkgulYOxZ6UHSOtTAx3DAheIkPAyR3sucZpNoPw9AdOxXo6QvmevhCStLQ%2F0FijnOoJMrdD8ujXexWokvV7Rf0OuQwCzUyOSV%2F8AfTm3llKVvm%2F4M8u5EhIDSZUBvYyphRq%2Fx3LxgoZf5KT75LpyKa5XX02ZVOmcS1eoq0vkUzIX4V9xUSyUubfT5mqLKqHpDknbNEtm2aHX50n%2Bhlpy0sgAn%2Bwd6E1btruAVcSOcwsVK6Eei5xyO600KGLsExk8Ri3LkMGvIsX%2B%2BkTlIBB%2FG6Mz8A%2BhXV5EigxtRF%2BDjYSjLT5h5KkYvXrRZkFuelx3Td1c9dTySFYUODiFNzQE2XkGK1G9tdYoKhjaUzN88QClRNuI4hBAnXSpEwCcYJ%2Bl4g34%2B74X5TqadGoHtX576FP1oNW8%2BZYMfUtv2rfMKCTa%2BvKtl5ZLEjsuQbyY%2FVnKTw2jPKgmGSlnJ1nEiQQ4DHLxjjxDJqkzzRur2ooCFRguFUby0H3KeHe47V7GmgNLak0qNpcqajPyE%2BIW55mMaGDVOukhf3Z0ik7ZQTHqvjXWBl2r7cdSV0gDpnrG3ZljCvtsHEBjqkARlquWaVRkZCw9F8kyzsP%2BzzM3H5L2QD9LEbAhKYB1k1iO%2Bnug%2BNH3uJ%2FFHNWMM7z64h5stZkP6ipDkIkN2VOd4nPDvoD7l%2FDcbrS7%2BOdKmIEh5PIan81O0%2BSKJRrxZZgeMPBKQLTFD9tpc107WN2JHwYjnmFberPRaSfHhUsUCWcV6gCoK4wBkb1yJ922DBjbJU4BbiBF3JeIrfgHvquU92uGC9&X-Amz-Signature=c73913a13e72466288989ef8deda48ac4d686aa3d4616454cdad53fdf0cf3d13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYSXUSY3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQD10%2BXINlwd%2BKpP9FwnBMEZNGgDcWnKyS4kj0y5igUgCAIhAItptqWSYo7Q89AKjk53sSZJ4s79j9Gr2Jm9E2UGwkLjKv8DCEAQABoMNjM3NDIzMTgzODA1IgysgPzDm7Yv0bsAu6Uq3AOSx%2FhsKTG4%2BqWas9aVWp3VOJPGu2qYku3tWX9Q%2Ft6LCM%2Bd63Lywy9mxoBPlAZkgulYOxZ6UHSOtTAx3DAheIkPAyR3sucZpNoPw9AdOxXo6QvmevhCStLQ%2F0FijnOoJMrdD8ujXexWokvV7Rf0OuQwCzUyOSV%2F8AfTm3llKVvm%2F4M8u5EhIDSZUBvYyphRq%2Fx3LxgoZf5KT75LpyKa5XX02ZVOmcS1eoq0vkUzIX4V9xUSyUubfT5mqLKqHpDknbNEtm2aHX50n%2Bhlpy0sgAn%2Bwd6E1btruAVcSOcwsVK6Eei5xyO600KGLsExk8Ri3LkMGvIsX%2B%2BkTlIBB%2FG6Mz8A%2BhXV5EigxtRF%2BDjYSjLT5h5KkYvXrRZkFuelx3Td1c9dTySFYUODiFNzQE2XkGK1G9tdYoKhjaUzN88QClRNuI4hBAnXSpEwCcYJ%2Bl4g34%2B74X5TqadGoHtX576FP1oNW8%2BZYMfUtv2rfMKCTa%2BvKtl5ZLEjsuQbyY%2FVnKTw2jPKgmGSlnJ1nEiQQ4DHLxjjxDJqkzzRur2ooCFRguFUby0H3KeHe47V7GmgNLak0qNpcqajPyE%2BIW55mMaGDVOukhf3Z0ik7ZQTHqvjXWBl2r7cdSV0gDpnrG3ZljCvtsHEBjqkARlquWaVRkZCw9F8kyzsP%2BzzM3H5L2QD9LEbAhKYB1k1iO%2Bnug%2BNH3uJ%2FFHNWMM7z64h5stZkP6ipDkIkN2VOd4nPDvoD7l%2FDcbrS7%2BOdKmIEh5PIan81O0%2BSKJRrxZZgeMPBKQLTFD9tpc107WN2JHwYjnmFberPRaSfHhUsUCWcV6gCoK4wBkb1yJ922DBjbJU4BbiBF3JeIrfgHvquU92uGC9&X-Amz-Signature=d6d47cd5f5d359c27acd5a20456d3de41d20807f5ae8910525aef817ad75f864&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
