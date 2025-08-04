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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKKM6NYN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCENbXDw1WTUR4elWDfNMcL57pf6rkps1eETxKpbbQ8LQIgFHqzTlizUdpNDHXHeA%2FCFESV4vYqYuzkUojZ9yj4mK8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDMwuNSOk37CTGjHZ1SrcAwJBvom%2BeLCCfCXDtASdCVXXQv%2Bgfu68MhUxI%2FstmeHC20IEFQXPT50JfIkO3rNjkydgaxtUY8o4VVqfWLznzHAhMP%2FyA8PIQZaJ8Q8MgQpgQEgWmlli43oOQPBZ%2Blqb0EBVGOLTBmrY48tBs4%2BKV2xFMJ9cKybQsYauklUWUWJlwVmhjFXzEdZ%2BtiiHygHy619%2BUlK99pP50qFYsjv4oRTi%2BP3XgYZNLNfrQhY1d%2BZrOMBGn2gSt3lfD50F8w5A4Fv%2FkBs1FB4zMI78gnItZ2GFN6JREgEIZga6dyxl0M00%2FrKp%2BpBQnb6GGvuuCVXaFfTg4KY22VnQEZSA%2B74WUIGcrs9AwuQv0gD6Nzw51iXD8fiqrwT9sc38n6m%2FJrSdQeeGl%2BRp%2BRi3BqEACUYp6kQ%2FfaHMWjtlTNTm1k%2B1E6BPxb1Z1an18%2FPzTUyw2%2Fwk7P8P1Ngq7WXUg9TE2KqZt7wXc6Hff6DFcNJS62QjhSyJW2QoMv0nXa23lM9S%2BgHjnhwgah%2FRYpzW7%2F4gvxBcqxyQHARmAzoqjzCX9yZlGihyxXmYewUENmUyQQVnmL4OKyBZHsA8s3wRpnuavNzK1wkPxVjPIF7hOyX2kruTI1Xq%2FOZzo%2FMWV1iy5E00MKqmwsQGOqUBqIXlBCHfA5QshJM8a135VakyJngonnK8Swlwl6163T%2FOg5BK6XGlwMApS5Fzcz2aBTKXpbMGt0ZBoQu8YJrEm62Nx8G%2F1rfhtYHfoV%2FfX69IbBgNydhvjA3S4ZbTTiS6UhsIiFj1Uz3h7Yndd0dAV1nnpTSX56z3UtU4c4EZrVLJc8zrsZYyIvfl7RCmaCVealRJzY4Z7LYsuQLp%2BECubW5PiBBe&X-Amz-Signature=593db3b3650c0486e728feb7aa5dc0d9f9e98f9a19128aa6311048629ccc6a33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZFZSMJ6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIENlrGBqJnRUHIs1c%2F%2FWW%2FfCqVXLdk%2Fh1e63470gEJYoAiEA3NiO29THVtxIkb6jJRXV81nhpUkIj1M5LQRn%2BqFR%2FKAq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDMdzdPIQKGk93KkfdyrcAxlFf8tsZyp5O8vpdvlvwDo%2B1wDc5wC%2FQbf%2BQrMxJ84Alg8DDfm4kuM7wo1Jq7IkVSoZR4LSsmiIuEZsADCR2Bv%2BN%2Ba2DjBPtvqBGrC6%2FF%2F2Gt1IH1er0XYIpuBpvdJBLjfiv7Z%2BH%2Fu8Qbzq81k5%2B7qZZ%2FMqaRnYppmY2sh359neyj708YPDEolb7ZDz%2B2g%2FBKYRaCvwH%2BgIuGgCExDhXIAkzgd8oZQghJKTPF184z1VYn2McfbXNMIfy4VuMFv8RKmD93cJlDC9sxTtNGQ8hC%2B3CC6l1Qllb5Frrcj9UaybXJmg9IFr9vM9Ip9%2BRNgm4Pei3tvRFwstASTTKZ%2BXim%2FVwyJ%2BAeIlbTBhzlM2zLtET2pPN3b6ksKt1ZEPKcAB5qs5Y5%2B7ykooyirjhg1vDZN9Rh0%2BJSENxPjb%2ByiuMegoGd3DKgmiXDt3MJ%2FcKIHQtup8EtQ2mdSGlJZBRz2ZCHGVk2CsYiV98Hi4VtB9L1Pe5RlFRiDkL2JPRcsX3J8xz0VPgag0%2Bs6BXe2Zvzfj3%2FL60d4bEl%2FiFwvrhk5R8BaDvUh9yddEiuBUJ5nvy1gZhE5d1VWaSX14dodYtaQwDOjuG9LAVxFMR0g%2Byo8W%2F%2BDS3OC8b4mo7u9ZRX9RMNCmwsQGOqUBjc9QiMSoG93fifNdZf%2F9rnxy1Q3Hhx%2BcxRFkcaLwQ%2Fjfle0YXssZSvDWrcfiJJ04bhNyc3KoeUoiHGrL%2B8tOsUj%2B%2FKiKhKRwBn9UvsfsHIbr3BOeB0rmmJbJEfDQtP2mcvKVERYKPDbycWIxLR7xzZmTQghUB6nOgKteMKH%2Bj2x1jvhPoKFexq2iMW88%2FRP5id3%2BI5nLxebCBuCSwWwnehDzPzbw&X-Amz-Signature=ade56f8bd0a1828024c655c65204dae1ae44b1aa87a111c434d4125a8debe40d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZFZSMJ6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIENlrGBqJnRUHIs1c%2F%2FWW%2FfCqVXLdk%2Fh1e63470gEJYoAiEA3NiO29THVtxIkb6jJRXV81nhpUkIj1M5LQRn%2BqFR%2FKAq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDMdzdPIQKGk93KkfdyrcAxlFf8tsZyp5O8vpdvlvwDo%2B1wDc5wC%2FQbf%2BQrMxJ84Alg8DDfm4kuM7wo1Jq7IkVSoZR4LSsmiIuEZsADCR2Bv%2BN%2Ba2DjBPtvqBGrC6%2FF%2F2Gt1IH1er0XYIpuBpvdJBLjfiv7Z%2BH%2Fu8Qbzq81k5%2B7qZZ%2FMqaRnYppmY2sh359neyj708YPDEolb7ZDz%2B2g%2FBKYRaCvwH%2BgIuGgCExDhXIAkzgd8oZQghJKTPF184z1VYn2McfbXNMIfy4VuMFv8RKmD93cJlDC9sxTtNGQ8hC%2B3CC6l1Qllb5Frrcj9UaybXJmg9IFr9vM9Ip9%2BRNgm4Pei3tvRFwstASTTKZ%2BXim%2FVwyJ%2BAeIlbTBhzlM2zLtET2pPN3b6ksKt1ZEPKcAB5qs5Y5%2B7ykooyirjhg1vDZN9Rh0%2BJSENxPjb%2ByiuMegoGd3DKgmiXDt3MJ%2FcKIHQtup8EtQ2mdSGlJZBRz2ZCHGVk2CsYiV98Hi4VtB9L1Pe5RlFRiDkL2JPRcsX3J8xz0VPgag0%2Bs6BXe2Zvzfj3%2FL60d4bEl%2FiFwvrhk5R8BaDvUh9yddEiuBUJ5nvy1gZhE5d1VWaSX14dodYtaQwDOjuG9LAVxFMR0g%2Byo8W%2F%2BDS3OC8b4mo7u9ZRX9RMNCmwsQGOqUBjc9QiMSoG93fifNdZf%2F9rnxy1Q3Hhx%2BcxRFkcaLwQ%2Fjfle0YXssZSvDWrcfiJJ04bhNyc3KoeUoiHGrL%2B8tOsUj%2B%2FKiKhKRwBn9UvsfsHIbr3BOeB0rmmJbJEfDQtP2mcvKVERYKPDbycWIxLR7xzZmTQghUB6nOgKteMKH%2Bj2x1jvhPoKFexq2iMW88%2FRP5id3%2BI5nLxebCBuCSwWwnehDzPzbw&X-Amz-Signature=556d5a92cb092e16c36c39cb648c76ef1a8a22ba6435969aff35fab1eb576fbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZFZSMJ6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIENlrGBqJnRUHIs1c%2F%2FWW%2FfCqVXLdk%2Fh1e63470gEJYoAiEA3NiO29THVtxIkb6jJRXV81nhpUkIj1M5LQRn%2BqFR%2FKAq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDMdzdPIQKGk93KkfdyrcAxlFf8tsZyp5O8vpdvlvwDo%2B1wDc5wC%2FQbf%2BQrMxJ84Alg8DDfm4kuM7wo1Jq7IkVSoZR4LSsmiIuEZsADCR2Bv%2BN%2Ba2DjBPtvqBGrC6%2FF%2F2Gt1IH1er0XYIpuBpvdJBLjfiv7Z%2BH%2Fu8Qbzq81k5%2B7qZZ%2FMqaRnYppmY2sh359neyj708YPDEolb7ZDz%2B2g%2FBKYRaCvwH%2BgIuGgCExDhXIAkzgd8oZQghJKTPF184z1VYn2McfbXNMIfy4VuMFv8RKmD93cJlDC9sxTtNGQ8hC%2B3CC6l1Qllb5Frrcj9UaybXJmg9IFr9vM9Ip9%2BRNgm4Pei3tvRFwstASTTKZ%2BXim%2FVwyJ%2BAeIlbTBhzlM2zLtET2pPN3b6ksKt1ZEPKcAB5qs5Y5%2B7ykooyirjhg1vDZN9Rh0%2BJSENxPjb%2ByiuMegoGd3DKgmiXDt3MJ%2FcKIHQtup8EtQ2mdSGlJZBRz2ZCHGVk2CsYiV98Hi4VtB9L1Pe5RlFRiDkL2JPRcsX3J8xz0VPgag0%2Bs6BXe2Zvzfj3%2FL60d4bEl%2FiFwvrhk5R8BaDvUh9yddEiuBUJ5nvy1gZhE5d1VWaSX14dodYtaQwDOjuG9LAVxFMR0g%2Byo8W%2F%2BDS3OC8b4mo7u9ZRX9RMNCmwsQGOqUBjc9QiMSoG93fifNdZf%2F9rnxy1Q3Hhx%2BcxRFkcaLwQ%2Fjfle0YXssZSvDWrcfiJJ04bhNyc3KoeUoiHGrL%2B8tOsUj%2B%2FKiKhKRwBn9UvsfsHIbr3BOeB0rmmJbJEfDQtP2mcvKVERYKPDbycWIxLR7xzZmTQghUB6nOgKteMKH%2Bj2x1jvhPoKFexq2iMW88%2FRP5id3%2BI5nLxebCBuCSwWwnehDzPzbw&X-Amz-Signature=d9ff9d837c7efe3a78533ee08ef0b3eaf7d8e1bb719d3ba958e201e8c51d004f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZFZSMJ6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIENlrGBqJnRUHIs1c%2F%2FWW%2FfCqVXLdk%2Fh1e63470gEJYoAiEA3NiO29THVtxIkb6jJRXV81nhpUkIj1M5LQRn%2BqFR%2FKAq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDMdzdPIQKGk93KkfdyrcAxlFf8tsZyp5O8vpdvlvwDo%2B1wDc5wC%2FQbf%2BQrMxJ84Alg8DDfm4kuM7wo1Jq7IkVSoZR4LSsmiIuEZsADCR2Bv%2BN%2Ba2DjBPtvqBGrC6%2FF%2F2Gt1IH1er0XYIpuBpvdJBLjfiv7Z%2BH%2Fu8Qbzq81k5%2B7qZZ%2FMqaRnYppmY2sh359neyj708YPDEolb7ZDz%2B2g%2FBKYRaCvwH%2BgIuGgCExDhXIAkzgd8oZQghJKTPF184z1VYn2McfbXNMIfy4VuMFv8RKmD93cJlDC9sxTtNGQ8hC%2B3CC6l1Qllb5Frrcj9UaybXJmg9IFr9vM9Ip9%2BRNgm4Pei3tvRFwstASTTKZ%2BXim%2FVwyJ%2BAeIlbTBhzlM2zLtET2pPN3b6ksKt1ZEPKcAB5qs5Y5%2B7ykooyirjhg1vDZN9Rh0%2BJSENxPjb%2ByiuMegoGd3DKgmiXDt3MJ%2FcKIHQtup8EtQ2mdSGlJZBRz2ZCHGVk2CsYiV98Hi4VtB9L1Pe5RlFRiDkL2JPRcsX3J8xz0VPgag0%2Bs6BXe2Zvzfj3%2FL60d4bEl%2FiFwvrhk5R8BaDvUh9yddEiuBUJ5nvy1gZhE5d1VWaSX14dodYtaQwDOjuG9LAVxFMR0g%2Byo8W%2F%2BDS3OC8b4mo7u9ZRX9RMNCmwsQGOqUBjc9QiMSoG93fifNdZf%2F9rnxy1Q3Hhx%2BcxRFkcaLwQ%2Fjfle0YXssZSvDWrcfiJJ04bhNyc3KoeUoiHGrL%2B8tOsUj%2B%2FKiKhKRwBn9UvsfsHIbr3BOeB0rmmJbJEfDQtP2mcvKVERYKPDbycWIxLR7xzZmTQghUB6nOgKteMKH%2Bj2x1jvhPoKFexq2iMW88%2FRP5id3%2BI5nLxebCBuCSwWwnehDzPzbw&X-Amz-Signature=56934a33e8c73366722ebff0c3e981b274db3d1b11e3a53f4feba65d762f916f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZFZSMJ6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIENlrGBqJnRUHIs1c%2F%2FWW%2FfCqVXLdk%2Fh1e63470gEJYoAiEA3NiO29THVtxIkb6jJRXV81nhpUkIj1M5LQRn%2BqFR%2FKAq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDMdzdPIQKGk93KkfdyrcAxlFf8tsZyp5O8vpdvlvwDo%2B1wDc5wC%2FQbf%2BQrMxJ84Alg8DDfm4kuM7wo1Jq7IkVSoZR4LSsmiIuEZsADCR2Bv%2BN%2Ba2DjBPtvqBGrC6%2FF%2F2Gt1IH1er0XYIpuBpvdJBLjfiv7Z%2BH%2Fu8Qbzq81k5%2B7qZZ%2FMqaRnYppmY2sh359neyj708YPDEolb7ZDz%2B2g%2FBKYRaCvwH%2BgIuGgCExDhXIAkzgd8oZQghJKTPF184z1VYn2McfbXNMIfy4VuMFv8RKmD93cJlDC9sxTtNGQ8hC%2B3CC6l1Qllb5Frrcj9UaybXJmg9IFr9vM9Ip9%2BRNgm4Pei3tvRFwstASTTKZ%2BXim%2FVwyJ%2BAeIlbTBhzlM2zLtET2pPN3b6ksKt1ZEPKcAB5qs5Y5%2B7ykooyirjhg1vDZN9Rh0%2BJSENxPjb%2ByiuMegoGd3DKgmiXDt3MJ%2FcKIHQtup8EtQ2mdSGlJZBRz2ZCHGVk2CsYiV98Hi4VtB9L1Pe5RlFRiDkL2JPRcsX3J8xz0VPgag0%2Bs6BXe2Zvzfj3%2FL60d4bEl%2FiFwvrhk5R8BaDvUh9yddEiuBUJ5nvy1gZhE5d1VWaSX14dodYtaQwDOjuG9LAVxFMR0g%2Byo8W%2F%2BDS3OC8b4mo7u9ZRX9RMNCmwsQGOqUBjc9QiMSoG93fifNdZf%2F9rnxy1Q3Hhx%2BcxRFkcaLwQ%2Fjfle0YXssZSvDWrcfiJJ04bhNyc3KoeUoiHGrL%2B8tOsUj%2B%2FKiKhKRwBn9UvsfsHIbr3BOeB0rmmJbJEfDQtP2mcvKVERYKPDbycWIxLR7xzZmTQghUB6nOgKteMKH%2Bj2x1jvhPoKFexq2iMW88%2FRP5id3%2BI5nLxebCBuCSwWwnehDzPzbw&X-Amz-Signature=0d3fac08fa2f03fc7eae2f9f0961bddbb301e825d977bc427933dd9b5c6af6b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZFZSMJ6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIENlrGBqJnRUHIs1c%2F%2FWW%2FfCqVXLdk%2Fh1e63470gEJYoAiEA3NiO29THVtxIkb6jJRXV81nhpUkIj1M5LQRn%2BqFR%2FKAq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDMdzdPIQKGk93KkfdyrcAxlFf8tsZyp5O8vpdvlvwDo%2B1wDc5wC%2FQbf%2BQrMxJ84Alg8DDfm4kuM7wo1Jq7IkVSoZR4LSsmiIuEZsADCR2Bv%2BN%2Ba2DjBPtvqBGrC6%2FF%2F2Gt1IH1er0XYIpuBpvdJBLjfiv7Z%2BH%2Fu8Qbzq81k5%2B7qZZ%2FMqaRnYppmY2sh359neyj708YPDEolb7ZDz%2B2g%2FBKYRaCvwH%2BgIuGgCExDhXIAkzgd8oZQghJKTPF184z1VYn2McfbXNMIfy4VuMFv8RKmD93cJlDC9sxTtNGQ8hC%2B3CC6l1Qllb5Frrcj9UaybXJmg9IFr9vM9Ip9%2BRNgm4Pei3tvRFwstASTTKZ%2BXim%2FVwyJ%2BAeIlbTBhzlM2zLtET2pPN3b6ksKt1ZEPKcAB5qs5Y5%2B7ykooyirjhg1vDZN9Rh0%2BJSENxPjb%2ByiuMegoGd3DKgmiXDt3MJ%2FcKIHQtup8EtQ2mdSGlJZBRz2ZCHGVk2CsYiV98Hi4VtB9L1Pe5RlFRiDkL2JPRcsX3J8xz0VPgag0%2Bs6BXe2Zvzfj3%2FL60d4bEl%2FiFwvrhk5R8BaDvUh9yddEiuBUJ5nvy1gZhE5d1VWaSX14dodYtaQwDOjuG9LAVxFMR0g%2Byo8W%2F%2BDS3OC8b4mo7u9ZRX9RMNCmwsQGOqUBjc9QiMSoG93fifNdZf%2F9rnxy1Q3Hhx%2BcxRFkcaLwQ%2Fjfle0YXssZSvDWrcfiJJ04bhNyc3KoeUoiHGrL%2B8tOsUj%2B%2FKiKhKRwBn9UvsfsHIbr3BOeB0rmmJbJEfDQtP2mcvKVERYKPDbycWIxLR7xzZmTQghUB6nOgKteMKH%2Bj2x1jvhPoKFexq2iMW88%2FRP5id3%2BI5nLxebCBuCSwWwnehDzPzbw&X-Amz-Signature=b046eb5a8621b408fa281e26ef46dba855da330cca5706bc5fc3335c14a22448&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZFZSMJ6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIENlrGBqJnRUHIs1c%2F%2FWW%2FfCqVXLdk%2Fh1e63470gEJYoAiEA3NiO29THVtxIkb6jJRXV81nhpUkIj1M5LQRn%2BqFR%2FKAq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDMdzdPIQKGk93KkfdyrcAxlFf8tsZyp5O8vpdvlvwDo%2B1wDc5wC%2FQbf%2BQrMxJ84Alg8DDfm4kuM7wo1Jq7IkVSoZR4LSsmiIuEZsADCR2Bv%2BN%2Ba2DjBPtvqBGrC6%2FF%2F2Gt1IH1er0XYIpuBpvdJBLjfiv7Z%2BH%2Fu8Qbzq81k5%2B7qZZ%2FMqaRnYppmY2sh359neyj708YPDEolb7ZDz%2B2g%2FBKYRaCvwH%2BgIuGgCExDhXIAkzgd8oZQghJKTPF184z1VYn2McfbXNMIfy4VuMFv8RKmD93cJlDC9sxTtNGQ8hC%2B3CC6l1Qllb5Frrcj9UaybXJmg9IFr9vM9Ip9%2BRNgm4Pei3tvRFwstASTTKZ%2BXim%2FVwyJ%2BAeIlbTBhzlM2zLtET2pPN3b6ksKt1ZEPKcAB5qs5Y5%2B7ykooyirjhg1vDZN9Rh0%2BJSENxPjb%2ByiuMegoGd3DKgmiXDt3MJ%2FcKIHQtup8EtQ2mdSGlJZBRz2ZCHGVk2CsYiV98Hi4VtB9L1Pe5RlFRiDkL2JPRcsX3J8xz0VPgag0%2Bs6BXe2Zvzfj3%2FL60d4bEl%2FiFwvrhk5R8BaDvUh9yddEiuBUJ5nvy1gZhE5d1VWaSX14dodYtaQwDOjuG9LAVxFMR0g%2Byo8W%2F%2BDS3OC8b4mo7u9ZRX9RMNCmwsQGOqUBjc9QiMSoG93fifNdZf%2F9rnxy1Q3Hhx%2BcxRFkcaLwQ%2Fjfle0YXssZSvDWrcfiJJ04bhNyc3KoeUoiHGrL%2B8tOsUj%2B%2FKiKhKRwBn9UvsfsHIbr3BOeB0rmmJbJEfDQtP2mcvKVERYKPDbycWIxLR7xzZmTQghUB6nOgKteMKH%2Bj2x1jvhPoKFexq2iMW88%2FRP5id3%2BI5nLxebCBuCSwWwnehDzPzbw&X-Amz-Signature=c1527428c880a63d687422cfed192774ad28eed22fc7e864e87b4d072d274705&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZFZSMJ6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIENlrGBqJnRUHIs1c%2F%2FWW%2FfCqVXLdk%2Fh1e63470gEJYoAiEA3NiO29THVtxIkb6jJRXV81nhpUkIj1M5LQRn%2BqFR%2FKAq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDMdzdPIQKGk93KkfdyrcAxlFf8tsZyp5O8vpdvlvwDo%2B1wDc5wC%2FQbf%2BQrMxJ84Alg8DDfm4kuM7wo1Jq7IkVSoZR4LSsmiIuEZsADCR2Bv%2BN%2Ba2DjBPtvqBGrC6%2FF%2F2Gt1IH1er0XYIpuBpvdJBLjfiv7Z%2BH%2Fu8Qbzq81k5%2B7qZZ%2FMqaRnYppmY2sh359neyj708YPDEolb7ZDz%2B2g%2FBKYRaCvwH%2BgIuGgCExDhXIAkzgd8oZQghJKTPF184z1VYn2McfbXNMIfy4VuMFv8RKmD93cJlDC9sxTtNGQ8hC%2B3CC6l1Qllb5Frrcj9UaybXJmg9IFr9vM9Ip9%2BRNgm4Pei3tvRFwstASTTKZ%2BXim%2FVwyJ%2BAeIlbTBhzlM2zLtET2pPN3b6ksKt1ZEPKcAB5qs5Y5%2B7ykooyirjhg1vDZN9Rh0%2BJSENxPjb%2ByiuMegoGd3DKgmiXDt3MJ%2FcKIHQtup8EtQ2mdSGlJZBRz2ZCHGVk2CsYiV98Hi4VtB9L1Pe5RlFRiDkL2JPRcsX3J8xz0VPgag0%2Bs6BXe2Zvzfj3%2FL60d4bEl%2FiFwvrhk5R8BaDvUh9yddEiuBUJ5nvy1gZhE5d1VWaSX14dodYtaQwDOjuG9LAVxFMR0g%2Byo8W%2F%2BDS3OC8b4mo7u9ZRX9RMNCmwsQGOqUBjc9QiMSoG93fifNdZf%2F9rnxy1Q3Hhx%2BcxRFkcaLwQ%2Fjfle0YXssZSvDWrcfiJJ04bhNyc3KoeUoiHGrL%2B8tOsUj%2B%2FKiKhKRwBn9UvsfsHIbr3BOeB0rmmJbJEfDQtP2mcvKVERYKPDbycWIxLR7xzZmTQghUB6nOgKteMKH%2Bj2x1jvhPoKFexq2iMW88%2FRP5id3%2BI5nLxebCBuCSwWwnehDzPzbw&X-Amz-Signature=853f58e46ad89b33c9c9a7747a2c3ae1141950942c48495ea0d00e41f36f70e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZFZSMJ6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIENlrGBqJnRUHIs1c%2F%2FWW%2FfCqVXLdk%2Fh1e63470gEJYoAiEA3NiO29THVtxIkb6jJRXV81nhpUkIj1M5LQRn%2BqFR%2FKAq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDMdzdPIQKGk93KkfdyrcAxlFf8tsZyp5O8vpdvlvwDo%2B1wDc5wC%2FQbf%2BQrMxJ84Alg8DDfm4kuM7wo1Jq7IkVSoZR4LSsmiIuEZsADCR2Bv%2BN%2Ba2DjBPtvqBGrC6%2FF%2F2Gt1IH1er0XYIpuBpvdJBLjfiv7Z%2BH%2Fu8Qbzq81k5%2B7qZZ%2FMqaRnYppmY2sh359neyj708YPDEolb7ZDz%2B2g%2FBKYRaCvwH%2BgIuGgCExDhXIAkzgd8oZQghJKTPF184z1VYn2McfbXNMIfy4VuMFv8RKmD93cJlDC9sxTtNGQ8hC%2B3CC6l1Qllb5Frrcj9UaybXJmg9IFr9vM9Ip9%2BRNgm4Pei3tvRFwstASTTKZ%2BXim%2FVwyJ%2BAeIlbTBhzlM2zLtET2pPN3b6ksKt1ZEPKcAB5qs5Y5%2B7ykooyirjhg1vDZN9Rh0%2BJSENxPjb%2ByiuMegoGd3DKgmiXDt3MJ%2FcKIHQtup8EtQ2mdSGlJZBRz2ZCHGVk2CsYiV98Hi4VtB9L1Pe5RlFRiDkL2JPRcsX3J8xz0VPgag0%2Bs6BXe2Zvzfj3%2FL60d4bEl%2FiFwvrhk5R8BaDvUh9yddEiuBUJ5nvy1gZhE5d1VWaSX14dodYtaQwDOjuG9LAVxFMR0g%2Byo8W%2F%2BDS3OC8b4mo7u9ZRX9RMNCmwsQGOqUBjc9QiMSoG93fifNdZf%2F9rnxy1Q3Hhx%2BcxRFkcaLwQ%2Fjfle0YXssZSvDWrcfiJJ04bhNyc3KoeUoiHGrL%2B8tOsUj%2B%2FKiKhKRwBn9UvsfsHIbr3BOeB0rmmJbJEfDQtP2mcvKVERYKPDbycWIxLR7xzZmTQghUB6nOgKteMKH%2Bj2x1jvhPoKFexq2iMW88%2FRP5id3%2BI5nLxebCBuCSwWwnehDzPzbw&X-Amz-Signature=c3c220e3e1cdd163f2d76055d466d789b0c95011c9cd627a34327164cbb5615e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZFZSMJ6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIENlrGBqJnRUHIs1c%2F%2FWW%2FfCqVXLdk%2Fh1e63470gEJYoAiEA3NiO29THVtxIkb6jJRXV81nhpUkIj1M5LQRn%2BqFR%2FKAq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDMdzdPIQKGk93KkfdyrcAxlFf8tsZyp5O8vpdvlvwDo%2B1wDc5wC%2FQbf%2BQrMxJ84Alg8DDfm4kuM7wo1Jq7IkVSoZR4LSsmiIuEZsADCR2Bv%2BN%2Ba2DjBPtvqBGrC6%2FF%2F2Gt1IH1er0XYIpuBpvdJBLjfiv7Z%2BH%2Fu8Qbzq81k5%2B7qZZ%2FMqaRnYppmY2sh359neyj708YPDEolb7ZDz%2B2g%2FBKYRaCvwH%2BgIuGgCExDhXIAkzgd8oZQghJKTPF184z1VYn2McfbXNMIfy4VuMFv8RKmD93cJlDC9sxTtNGQ8hC%2B3CC6l1Qllb5Frrcj9UaybXJmg9IFr9vM9Ip9%2BRNgm4Pei3tvRFwstASTTKZ%2BXim%2FVwyJ%2BAeIlbTBhzlM2zLtET2pPN3b6ksKt1ZEPKcAB5qs5Y5%2B7ykooyirjhg1vDZN9Rh0%2BJSENxPjb%2ByiuMegoGd3DKgmiXDt3MJ%2FcKIHQtup8EtQ2mdSGlJZBRz2ZCHGVk2CsYiV98Hi4VtB9L1Pe5RlFRiDkL2JPRcsX3J8xz0VPgag0%2Bs6BXe2Zvzfj3%2FL60d4bEl%2FiFwvrhk5R8BaDvUh9yddEiuBUJ5nvy1gZhE5d1VWaSX14dodYtaQwDOjuG9LAVxFMR0g%2Byo8W%2F%2BDS3OC8b4mo7u9ZRX9RMNCmwsQGOqUBjc9QiMSoG93fifNdZf%2F9rnxy1Q3Hhx%2BcxRFkcaLwQ%2Fjfle0YXssZSvDWrcfiJJ04bhNyc3KoeUoiHGrL%2B8tOsUj%2B%2FKiKhKRwBn9UvsfsHIbr3BOeB0rmmJbJEfDQtP2mcvKVERYKPDbycWIxLR7xzZmTQghUB6nOgKteMKH%2Bj2x1jvhPoKFexq2iMW88%2FRP5id3%2BI5nLxebCBuCSwWwnehDzPzbw&X-Amz-Signature=56934a33e8c73366722ebff0c3e981b274db3d1b11e3a53f4feba65d762f916f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
