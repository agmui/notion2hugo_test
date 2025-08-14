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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJUPATAJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFb4A%2B6WSdcRKBKxL5hKdO%2BP81aUw5qBGIp%2BXEdK6BueAiAWD%2FmoHVOvqxv6p8%2FKdYCaiGnmBhExe1509xBWYndv3Cr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMQeAmsEZE673B5iJeKtwDoNJ0nB%2FSw0HbCdGvD9zVuL33gR%2BMgUk0S2KOcroq%2FXTaoHVLPZCz55pTWRKKDRxGTxytUcAHSLqmxIQ40TsKsaQyOrZcH2TdJfQ1ki5Yykdmt0IwlcHWVz9VcjN9gdqh0prp9vXwYRL2rSBZQ0Tq07b0BrgQeBYRfCAM0o1n81p0WhSgZc1q9d9b0NOhqE9FdMDVnzi30Nq42SyLDdsXbj0fdjqex%2F13sIN3x4mgwpAu%2BUkNZgyuCCXCjxiDbvnSZhNY3GfMa%2BdfmgCMfxBGIXe7BgMLITr8zkfntnHswY9cMGtkNjWAzP6fwCo6LkXzTyKY%2FwIJVZPis%2FiN%2Faa2vLsw3hZiyveKiEw2p7nDLWv4b88UYBCgw6BBOkwwRBZD9wuWH1%2BQcU7ZVGuGlpbNZ86ha2unVfdVkfXwEnLjZq2bqyNg%2Bh8%2FuMqTar5ffkW60OyXuttIknjRWgO%2Bxk%2FjG%2FjpFuk9%2BXGZVT4OD5vzHxDWCyGrevHy8MOfH6LOjMAt3CLcuZOxvNiaMP19ImIY4NphKwWufAl92eahrKzg7cFp90aXT7%2BJfO5XzJo8j%2BvzNDWEQN4B8PoloYvwL4VACjhFrr4FtxFpvi1AcdCRQTET780MNEMXH%2FR1MCYwoYT3xAY6pgGV3LZ4kitr5Lcj327SF%2BHPHqT6YMV9O1wvzWQl4L%2BdOu6XHbe1Hvp9NMaTiRFCEs8JZvpnroleQBcEhzR8I9nSj96Q6GkMa3sOzNUvVsd3Al1KSJVPo1rKErpqQFowYmu7s8f3cVoEHfb%2B%2F%2B7wocGbrqrdZkUu07F7r0lRWBYcakntN04gJbEN1pj8D3szlnAcCDKTubH7NWaQ9K7KqDBExE57qGYB&X-Amz-Signature=8f8fce94af9c1b34042f1126a7822da776e2c8dd9bbf1a6a6d6af47c0d5813ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG2IQWO4%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BDfBEQQ2SwEqEAj2gz3K0AuxgFFTtk%2FFhE8IgkD3s4AiEAwPjUIk3hv2sa%2BW3cehkdBkkljeKwlvwvpdlCrLY%2Bj5kq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDHUyxzM2oUFqyIPa8SrcA8R2oTFPR6W4h0BCjZv0ionrSiuzLuBsp1LaiC1Y6UMWar7yxenNx9LvOhXVSkjmipVF9ry1DgGz5iubbKUoHRMYRSLx47mV1jlhvR9Kll%2BUc9EyIOnSDDeZo5q0nn4gjq53UAqFqDe4%2Bwm%2BaB1oBR8PTRUHLfnFlQMxKJhn2wrfg%2Fsgcf%2BAYdEU%2FKzUXOXT%2Bkk5AkMjyUbco1gchGWVMuVvH4gwWmfWwK%2FBSPT3g65IrvyB2fMtdG7l00WQP3ElpvyciBF%2FrnPLAt%2BYnB%2BjBU%2Bw4T0gc14x%2BYqlkyysizkrtBERk3ayE%2B5UVS%2Fj0jVmgUhKoJjQPaJynKu1yv1tnlwGBQ29RNNPquKvHc42g%2F3ccFir9NhS%2BvDS6GU69b%2FAQMS%2BTlCUif%2BR4GfUS3KcnXqClkd2NEzSgenY%2BfuA85lS6%2B9fs6SEnZtG1nVwK%2FWkwTZTi0ApmAFWt0EHf08R%2FNGRqxxY892COedHt063Udq5lCaM0q5pOxAhx%2Bk8Xw%2BvOo69T372quCFVe2WSAWxfhKGdpxJJ%2FqgnCJMIdvBbQZg6ZGwWE9QWV2%2Fx7enV8dO01Em8TtJVEl6U2LJt7dD46Xw8s93UYJKOlXDbPuZNiPbIeUoest7CqoLk4YhMJuF98QGOqUBkb9Q8Ur647Pgwr1zWRnZ%2BFqUyevJkllV0a0Erix0sWG5xSW%2B8DZt1tciCze6SK%2FGJ3yhX%2BltyhWs%2FXE7nr1rYelT3n3cUUK5Rib1m2Ig%2Feu8rZURO9elSAo1%2FrlKKxkBrf0cDBR%2BY9fb6BVoP6VWV56aU0ImIlClPAvk%2FQukYngA7mcJDR3f0Z0NCBSSx%2BrZQwEuEXojBkslfdKFozxccrg1%2FxxB&X-Amz-Signature=69df1774719adf0de4b552b57be90017f8306d2840367e9bffc2985e108b5ccb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG2IQWO4%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BDfBEQQ2SwEqEAj2gz3K0AuxgFFTtk%2FFhE8IgkD3s4AiEAwPjUIk3hv2sa%2BW3cehkdBkkljeKwlvwvpdlCrLY%2Bj5kq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDHUyxzM2oUFqyIPa8SrcA8R2oTFPR6W4h0BCjZv0ionrSiuzLuBsp1LaiC1Y6UMWar7yxenNx9LvOhXVSkjmipVF9ry1DgGz5iubbKUoHRMYRSLx47mV1jlhvR9Kll%2BUc9EyIOnSDDeZo5q0nn4gjq53UAqFqDe4%2Bwm%2BaB1oBR8PTRUHLfnFlQMxKJhn2wrfg%2Fsgcf%2BAYdEU%2FKzUXOXT%2Bkk5AkMjyUbco1gchGWVMuVvH4gwWmfWwK%2FBSPT3g65IrvyB2fMtdG7l00WQP3ElpvyciBF%2FrnPLAt%2BYnB%2BjBU%2Bw4T0gc14x%2BYqlkyysizkrtBERk3ayE%2B5UVS%2Fj0jVmgUhKoJjQPaJynKu1yv1tnlwGBQ29RNNPquKvHc42g%2F3ccFir9NhS%2BvDS6GU69b%2FAQMS%2BTlCUif%2BR4GfUS3KcnXqClkd2NEzSgenY%2BfuA85lS6%2B9fs6SEnZtG1nVwK%2FWkwTZTi0ApmAFWt0EHf08R%2FNGRqxxY892COedHt063Udq5lCaM0q5pOxAhx%2Bk8Xw%2BvOo69T372quCFVe2WSAWxfhKGdpxJJ%2FqgnCJMIdvBbQZg6ZGwWE9QWV2%2Fx7enV8dO01Em8TtJVEl6U2LJt7dD46Xw8s93UYJKOlXDbPuZNiPbIeUoest7CqoLk4YhMJuF98QGOqUBkb9Q8Ur647Pgwr1zWRnZ%2BFqUyevJkllV0a0Erix0sWG5xSW%2B8DZt1tciCze6SK%2FGJ3yhX%2BltyhWs%2FXE7nr1rYelT3n3cUUK5Rib1m2Ig%2Feu8rZURO9elSAo1%2FrlKKxkBrf0cDBR%2BY9fb6BVoP6VWV56aU0ImIlClPAvk%2FQukYngA7mcJDR3f0Z0NCBSSx%2BrZQwEuEXojBkslfdKFozxccrg1%2FxxB&X-Amz-Signature=53f8d12729da33a2304a9719b9ca7f22dd77ecd58a93d5150501e1b4971404d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG2IQWO4%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BDfBEQQ2SwEqEAj2gz3K0AuxgFFTtk%2FFhE8IgkD3s4AiEAwPjUIk3hv2sa%2BW3cehkdBkkljeKwlvwvpdlCrLY%2Bj5kq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDHUyxzM2oUFqyIPa8SrcA8R2oTFPR6W4h0BCjZv0ionrSiuzLuBsp1LaiC1Y6UMWar7yxenNx9LvOhXVSkjmipVF9ry1DgGz5iubbKUoHRMYRSLx47mV1jlhvR9Kll%2BUc9EyIOnSDDeZo5q0nn4gjq53UAqFqDe4%2Bwm%2BaB1oBR8PTRUHLfnFlQMxKJhn2wrfg%2Fsgcf%2BAYdEU%2FKzUXOXT%2Bkk5AkMjyUbco1gchGWVMuVvH4gwWmfWwK%2FBSPT3g65IrvyB2fMtdG7l00WQP3ElpvyciBF%2FrnPLAt%2BYnB%2BjBU%2Bw4T0gc14x%2BYqlkyysizkrtBERk3ayE%2B5UVS%2Fj0jVmgUhKoJjQPaJynKu1yv1tnlwGBQ29RNNPquKvHc42g%2F3ccFir9NhS%2BvDS6GU69b%2FAQMS%2BTlCUif%2BR4GfUS3KcnXqClkd2NEzSgenY%2BfuA85lS6%2B9fs6SEnZtG1nVwK%2FWkwTZTi0ApmAFWt0EHf08R%2FNGRqxxY892COedHt063Udq5lCaM0q5pOxAhx%2Bk8Xw%2BvOo69T372quCFVe2WSAWxfhKGdpxJJ%2FqgnCJMIdvBbQZg6ZGwWE9QWV2%2Fx7enV8dO01Em8TtJVEl6U2LJt7dD46Xw8s93UYJKOlXDbPuZNiPbIeUoest7CqoLk4YhMJuF98QGOqUBkb9Q8Ur647Pgwr1zWRnZ%2BFqUyevJkllV0a0Erix0sWG5xSW%2B8DZt1tciCze6SK%2FGJ3yhX%2BltyhWs%2FXE7nr1rYelT3n3cUUK5Rib1m2Ig%2Feu8rZURO9elSAo1%2FrlKKxkBrf0cDBR%2BY9fb6BVoP6VWV56aU0ImIlClPAvk%2FQukYngA7mcJDR3f0Z0NCBSSx%2BrZQwEuEXojBkslfdKFozxccrg1%2FxxB&X-Amz-Signature=a2e440d7bafa81b26da93d7ac47603b343d6c8dcd58d6a7f86f4c683c812bf03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG2IQWO4%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BDfBEQQ2SwEqEAj2gz3K0AuxgFFTtk%2FFhE8IgkD3s4AiEAwPjUIk3hv2sa%2BW3cehkdBkkljeKwlvwvpdlCrLY%2Bj5kq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDHUyxzM2oUFqyIPa8SrcA8R2oTFPR6W4h0BCjZv0ionrSiuzLuBsp1LaiC1Y6UMWar7yxenNx9LvOhXVSkjmipVF9ry1DgGz5iubbKUoHRMYRSLx47mV1jlhvR9Kll%2BUc9EyIOnSDDeZo5q0nn4gjq53UAqFqDe4%2Bwm%2BaB1oBR8PTRUHLfnFlQMxKJhn2wrfg%2Fsgcf%2BAYdEU%2FKzUXOXT%2Bkk5AkMjyUbco1gchGWVMuVvH4gwWmfWwK%2FBSPT3g65IrvyB2fMtdG7l00WQP3ElpvyciBF%2FrnPLAt%2BYnB%2BjBU%2Bw4T0gc14x%2BYqlkyysizkrtBERk3ayE%2B5UVS%2Fj0jVmgUhKoJjQPaJynKu1yv1tnlwGBQ29RNNPquKvHc42g%2F3ccFir9NhS%2BvDS6GU69b%2FAQMS%2BTlCUif%2BR4GfUS3KcnXqClkd2NEzSgenY%2BfuA85lS6%2B9fs6SEnZtG1nVwK%2FWkwTZTi0ApmAFWt0EHf08R%2FNGRqxxY892COedHt063Udq5lCaM0q5pOxAhx%2Bk8Xw%2BvOo69T372quCFVe2WSAWxfhKGdpxJJ%2FqgnCJMIdvBbQZg6ZGwWE9QWV2%2Fx7enV8dO01Em8TtJVEl6U2LJt7dD46Xw8s93UYJKOlXDbPuZNiPbIeUoest7CqoLk4YhMJuF98QGOqUBkb9Q8Ur647Pgwr1zWRnZ%2BFqUyevJkllV0a0Erix0sWG5xSW%2B8DZt1tciCze6SK%2FGJ3yhX%2BltyhWs%2FXE7nr1rYelT3n3cUUK5Rib1m2Ig%2Feu8rZURO9elSAo1%2FrlKKxkBrf0cDBR%2BY9fb6BVoP6VWV56aU0ImIlClPAvk%2FQukYngA7mcJDR3f0Z0NCBSSx%2BrZQwEuEXojBkslfdKFozxccrg1%2FxxB&X-Amz-Signature=1250f937babf541a9b9b60d64a582cc41ceae89737c79c9931f648f02ac3030f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG2IQWO4%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BDfBEQQ2SwEqEAj2gz3K0AuxgFFTtk%2FFhE8IgkD3s4AiEAwPjUIk3hv2sa%2BW3cehkdBkkljeKwlvwvpdlCrLY%2Bj5kq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDHUyxzM2oUFqyIPa8SrcA8R2oTFPR6W4h0BCjZv0ionrSiuzLuBsp1LaiC1Y6UMWar7yxenNx9LvOhXVSkjmipVF9ry1DgGz5iubbKUoHRMYRSLx47mV1jlhvR9Kll%2BUc9EyIOnSDDeZo5q0nn4gjq53UAqFqDe4%2Bwm%2BaB1oBR8PTRUHLfnFlQMxKJhn2wrfg%2Fsgcf%2BAYdEU%2FKzUXOXT%2Bkk5AkMjyUbco1gchGWVMuVvH4gwWmfWwK%2FBSPT3g65IrvyB2fMtdG7l00WQP3ElpvyciBF%2FrnPLAt%2BYnB%2BjBU%2Bw4T0gc14x%2BYqlkyysizkrtBERk3ayE%2B5UVS%2Fj0jVmgUhKoJjQPaJynKu1yv1tnlwGBQ29RNNPquKvHc42g%2F3ccFir9NhS%2BvDS6GU69b%2FAQMS%2BTlCUif%2BR4GfUS3KcnXqClkd2NEzSgenY%2BfuA85lS6%2B9fs6SEnZtG1nVwK%2FWkwTZTi0ApmAFWt0EHf08R%2FNGRqxxY892COedHt063Udq5lCaM0q5pOxAhx%2Bk8Xw%2BvOo69T372quCFVe2WSAWxfhKGdpxJJ%2FqgnCJMIdvBbQZg6ZGwWE9QWV2%2Fx7enV8dO01Em8TtJVEl6U2LJt7dD46Xw8s93UYJKOlXDbPuZNiPbIeUoest7CqoLk4YhMJuF98QGOqUBkb9Q8Ur647Pgwr1zWRnZ%2BFqUyevJkllV0a0Erix0sWG5xSW%2B8DZt1tciCze6SK%2FGJ3yhX%2BltyhWs%2FXE7nr1rYelT3n3cUUK5Rib1m2Ig%2Feu8rZURO9elSAo1%2FrlKKxkBrf0cDBR%2BY9fb6BVoP6VWV56aU0ImIlClPAvk%2FQukYngA7mcJDR3f0Z0NCBSSx%2BrZQwEuEXojBkslfdKFozxccrg1%2FxxB&X-Amz-Signature=2d88aa4958440bac7e9d6b48dbb237dcc591efd7fcec57d5c00ddd9fb1195905&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG2IQWO4%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BDfBEQQ2SwEqEAj2gz3K0AuxgFFTtk%2FFhE8IgkD3s4AiEAwPjUIk3hv2sa%2BW3cehkdBkkljeKwlvwvpdlCrLY%2Bj5kq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDHUyxzM2oUFqyIPa8SrcA8R2oTFPR6W4h0BCjZv0ionrSiuzLuBsp1LaiC1Y6UMWar7yxenNx9LvOhXVSkjmipVF9ry1DgGz5iubbKUoHRMYRSLx47mV1jlhvR9Kll%2BUc9EyIOnSDDeZo5q0nn4gjq53UAqFqDe4%2Bwm%2BaB1oBR8PTRUHLfnFlQMxKJhn2wrfg%2Fsgcf%2BAYdEU%2FKzUXOXT%2Bkk5AkMjyUbco1gchGWVMuVvH4gwWmfWwK%2FBSPT3g65IrvyB2fMtdG7l00WQP3ElpvyciBF%2FrnPLAt%2BYnB%2BjBU%2Bw4T0gc14x%2BYqlkyysizkrtBERk3ayE%2B5UVS%2Fj0jVmgUhKoJjQPaJynKu1yv1tnlwGBQ29RNNPquKvHc42g%2F3ccFir9NhS%2BvDS6GU69b%2FAQMS%2BTlCUif%2BR4GfUS3KcnXqClkd2NEzSgenY%2BfuA85lS6%2B9fs6SEnZtG1nVwK%2FWkwTZTi0ApmAFWt0EHf08R%2FNGRqxxY892COedHt063Udq5lCaM0q5pOxAhx%2Bk8Xw%2BvOo69T372quCFVe2WSAWxfhKGdpxJJ%2FqgnCJMIdvBbQZg6ZGwWE9QWV2%2Fx7enV8dO01Em8TtJVEl6U2LJt7dD46Xw8s93UYJKOlXDbPuZNiPbIeUoest7CqoLk4YhMJuF98QGOqUBkb9Q8Ur647Pgwr1zWRnZ%2BFqUyevJkllV0a0Erix0sWG5xSW%2B8DZt1tciCze6SK%2FGJ3yhX%2BltyhWs%2FXE7nr1rYelT3n3cUUK5Rib1m2Ig%2Feu8rZURO9elSAo1%2FrlKKxkBrf0cDBR%2BY9fb6BVoP6VWV56aU0ImIlClPAvk%2FQukYngA7mcJDR3f0Z0NCBSSx%2BrZQwEuEXojBkslfdKFozxccrg1%2FxxB&X-Amz-Signature=aa9c6641843690bbab4c123dfc606e078c65c01df023253585ac56b3ffe1070f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG2IQWO4%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BDfBEQQ2SwEqEAj2gz3K0AuxgFFTtk%2FFhE8IgkD3s4AiEAwPjUIk3hv2sa%2BW3cehkdBkkljeKwlvwvpdlCrLY%2Bj5kq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDHUyxzM2oUFqyIPa8SrcA8R2oTFPR6W4h0BCjZv0ionrSiuzLuBsp1LaiC1Y6UMWar7yxenNx9LvOhXVSkjmipVF9ry1DgGz5iubbKUoHRMYRSLx47mV1jlhvR9Kll%2BUc9EyIOnSDDeZo5q0nn4gjq53UAqFqDe4%2Bwm%2BaB1oBR8PTRUHLfnFlQMxKJhn2wrfg%2Fsgcf%2BAYdEU%2FKzUXOXT%2Bkk5AkMjyUbco1gchGWVMuVvH4gwWmfWwK%2FBSPT3g65IrvyB2fMtdG7l00WQP3ElpvyciBF%2FrnPLAt%2BYnB%2BjBU%2Bw4T0gc14x%2BYqlkyysizkrtBERk3ayE%2B5UVS%2Fj0jVmgUhKoJjQPaJynKu1yv1tnlwGBQ29RNNPquKvHc42g%2F3ccFir9NhS%2BvDS6GU69b%2FAQMS%2BTlCUif%2BR4GfUS3KcnXqClkd2NEzSgenY%2BfuA85lS6%2B9fs6SEnZtG1nVwK%2FWkwTZTi0ApmAFWt0EHf08R%2FNGRqxxY892COedHt063Udq5lCaM0q5pOxAhx%2Bk8Xw%2BvOo69T372quCFVe2WSAWxfhKGdpxJJ%2FqgnCJMIdvBbQZg6ZGwWE9QWV2%2Fx7enV8dO01Em8TtJVEl6U2LJt7dD46Xw8s93UYJKOlXDbPuZNiPbIeUoest7CqoLk4YhMJuF98QGOqUBkb9Q8Ur647Pgwr1zWRnZ%2BFqUyevJkllV0a0Erix0sWG5xSW%2B8DZt1tciCze6SK%2FGJ3yhX%2BltyhWs%2FXE7nr1rYelT3n3cUUK5Rib1m2Ig%2Feu8rZURO9elSAo1%2FrlKKxkBrf0cDBR%2BY9fb6BVoP6VWV56aU0ImIlClPAvk%2FQukYngA7mcJDR3f0Z0NCBSSx%2BrZQwEuEXojBkslfdKFozxccrg1%2FxxB&X-Amz-Signature=3610553bd43ab5453d706c4f882930182271dd84646221eaff641ff23a0ea032&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG2IQWO4%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BDfBEQQ2SwEqEAj2gz3K0AuxgFFTtk%2FFhE8IgkD3s4AiEAwPjUIk3hv2sa%2BW3cehkdBkkljeKwlvwvpdlCrLY%2Bj5kq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDHUyxzM2oUFqyIPa8SrcA8R2oTFPR6W4h0BCjZv0ionrSiuzLuBsp1LaiC1Y6UMWar7yxenNx9LvOhXVSkjmipVF9ry1DgGz5iubbKUoHRMYRSLx47mV1jlhvR9Kll%2BUc9EyIOnSDDeZo5q0nn4gjq53UAqFqDe4%2Bwm%2BaB1oBR8PTRUHLfnFlQMxKJhn2wrfg%2Fsgcf%2BAYdEU%2FKzUXOXT%2Bkk5AkMjyUbco1gchGWVMuVvH4gwWmfWwK%2FBSPT3g65IrvyB2fMtdG7l00WQP3ElpvyciBF%2FrnPLAt%2BYnB%2BjBU%2Bw4T0gc14x%2BYqlkyysizkrtBERk3ayE%2B5UVS%2Fj0jVmgUhKoJjQPaJynKu1yv1tnlwGBQ29RNNPquKvHc42g%2F3ccFir9NhS%2BvDS6GU69b%2FAQMS%2BTlCUif%2BR4GfUS3KcnXqClkd2NEzSgenY%2BfuA85lS6%2B9fs6SEnZtG1nVwK%2FWkwTZTi0ApmAFWt0EHf08R%2FNGRqxxY892COedHt063Udq5lCaM0q5pOxAhx%2Bk8Xw%2BvOo69T372quCFVe2WSAWxfhKGdpxJJ%2FqgnCJMIdvBbQZg6ZGwWE9QWV2%2Fx7enV8dO01Em8TtJVEl6U2LJt7dD46Xw8s93UYJKOlXDbPuZNiPbIeUoest7CqoLk4YhMJuF98QGOqUBkb9Q8Ur647Pgwr1zWRnZ%2BFqUyevJkllV0a0Erix0sWG5xSW%2B8DZt1tciCze6SK%2FGJ3yhX%2BltyhWs%2FXE7nr1rYelT3n3cUUK5Rib1m2Ig%2Feu8rZURO9elSAo1%2FrlKKxkBrf0cDBR%2BY9fb6BVoP6VWV56aU0ImIlClPAvk%2FQukYngA7mcJDR3f0Z0NCBSSx%2BrZQwEuEXojBkslfdKFozxccrg1%2FxxB&X-Amz-Signature=5b5133d004d35139b29a30c63a52a6101955801f4722350076bcbf3e058987dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG2IQWO4%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BDfBEQQ2SwEqEAj2gz3K0AuxgFFTtk%2FFhE8IgkD3s4AiEAwPjUIk3hv2sa%2BW3cehkdBkkljeKwlvwvpdlCrLY%2Bj5kq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDHUyxzM2oUFqyIPa8SrcA8R2oTFPR6W4h0BCjZv0ionrSiuzLuBsp1LaiC1Y6UMWar7yxenNx9LvOhXVSkjmipVF9ry1DgGz5iubbKUoHRMYRSLx47mV1jlhvR9Kll%2BUc9EyIOnSDDeZo5q0nn4gjq53UAqFqDe4%2Bwm%2BaB1oBR8PTRUHLfnFlQMxKJhn2wrfg%2Fsgcf%2BAYdEU%2FKzUXOXT%2Bkk5AkMjyUbco1gchGWVMuVvH4gwWmfWwK%2FBSPT3g65IrvyB2fMtdG7l00WQP3ElpvyciBF%2FrnPLAt%2BYnB%2BjBU%2Bw4T0gc14x%2BYqlkyysizkrtBERk3ayE%2B5UVS%2Fj0jVmgUhKoJjQPaJynKu1yv1tnlwGBQ29RNNPquKvHc42g%2F3ccFir9NhS%2BvDS6GU69b%2FAQMS%2BTlCUif%2BR4GfUS3KcnXqClkd2NEzSgenY%2BfuA85lS6%2B9fs6SEnZtG1nVwK%2FWkwTZTi0ApmAFWt0EHf08R%2FNGRqxxY892COedHt063Udq5lCaM0q5pOxAhx%2Bk8Xw%2BvOo69T372quCFVe2WSAWxfhKGdpxJJ%2FqgnCJMIdvBbQZg6ZGwWE9QWV2%2Fx7enV8dO01Em8TtJVEl6U2LJt7dD46Xw8s93UYJKOlXDbPuZNiPbIeUoest7CqoLk4YhMJuF98QGOqUBkb9Q8Ur647Pgwr1zWRnZ%2BFqUyevJkllV0a0Erix0sWG5xSW%2B8DZt1tciCze6SK%2FGJ3yhX%2BltyhWs%2FXE7nr1rYelT3n3cUUK5Rib1m2Ig%2Feu8rZURO9elSAo1%2FrlKKxkBrf0cDBR%2BY9fb6BVoP6VWV56aU0ImIlClPAvk%2FQukYngA7mcJDR3f0Z0NCBSSx%2BrZQwEuEXojBkslfdKFozxccrg1%2FxxB&X-Amz-Signature=b6c175b2ca4fc79dcb9d61ca112f404c9bd4220d7d0c4493838a78e233f15fdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG2IQWO4%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BDfBEQQ2SwEqEAj2gz3K0AuxgFFTtk%2FFhE8IgkD3s4AiEAwPjUIk3hv2sa%2BW3cehkdBkkljeKwlvwvpdlCrLY%2Bj5kq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDHUyxzM2oUFqyIPa8SrcA8R2oTFPR6W4h0BCjZv0ionrSiuzLuBsp1LaiC1Y6UMWar7yxenNx9LvOhXVSkjmipVF9ry1DgGz5iubbKUoHRMYRSLx47mV1jlhvR9Kll%2BUc9EyIOnSDDeZo5q0nn4gjq53UAqFqDe4%2Bwm%2BaB1oBR8PTRUHLfnFlQMxKJhn2wrfg%2Fsgcf%2BAYdEU%2FKzUXOXT%2Bkk5AkMjyUbco1gchGWVMuVvH4gwWmfWwK%2FBSPT3g65IrvyB2fMtdG7l00WQP3ElpvyciBF%2FrnPLAt%2BYnB%2BjBU%2Bw4T0gc14x%2BYqlkyysizkrtBERk3ayE%2B5UVS%2Fj0jVmgUhKoJjQPaJynKu1yv1tnlwGBQ29RNNPquKvHc42g%2F3ccFir9NhS%2BvDS6GU69b%2FAQMS%2BTlCUif%2BR4GfUS3KcnXqClkd2NEzSgenY%2BfuA85lS6%2B9fs6SEnZtG1nVwK%2FWkwTZTi0ApmAFWt0EHf08R%2FNGRqxxY892COedHt063Udq5lCaM0q5pOxAhx%2Bk8Xw%2BvOo69T372quCFVe2WSAWxfhKGdpxJJ%2FqgnCJMIdvBbQZg6ZGwWE9QWV2%2Fx7enV8dO01Em8TtJVEl6U2LJt7dD46Xw8s93UYJKOlXDbPuZNiPbIeUoest7CqoLk4YhMJuF98QGOqUBkb9Q8Ur647Pgwr1zWRnZ%2BFqUyevJkllV0a0Erix0sWG5xSW%2B8DZt1tciCze6SK%2FGJ3yhX%2BltyhWs%2FXE7nr1rYelT3n3cUUK5Rib1m2Ig%2Feu8rZURO9elSAo1%2FrlKKxkBrf0cDBR%2BY9fb6BVoP6VWV56aU0ImIlClPAvk%2FQukYngA7mcJDR3f0Z0NCBSSx%2BrZQwEuEXojBkslfdKFozxccrg1%2FxxB&X-Amz-Signature=1250f937babf541a9b9b60d64a582cc41ceae89737c79c9931f648f02ac3030f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
