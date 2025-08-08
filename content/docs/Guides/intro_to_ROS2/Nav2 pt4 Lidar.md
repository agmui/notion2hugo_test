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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677WFJY4L%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIDcx%2FuHMGiCZOxl1y5EflOETuSmhQsNu%2BWX%2BlIMRsi%2FMAiEA6SkDnfZkMnJkAmdz8v2kLnGJJHZX8o3S16mXi85qa5IqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmedHK09sAoGxiovSrcA5A6%2BXSUqr5bQ%2FhB5tJBD3yl9U8aAafS72LTqmMCEJehTU8LxYftEt7E4gdtfsD1fuN3gm2CAueKQB6iLCorZTcOMKfVbfp1v846v%2FIj69K0XA0C2G4FqTcyYsCoixR7bbFM6doNVyckRSMCZAsG8GfFnFd%2F%2FG21Htnh3UjLkAVfw4Ppbl8UDvyU1K8hq0dxCfLcOaiPIT6IHtJt5QU4owkzRXU5JstKUOoL3KbLxfXrMRl8GmFAB0uzIBmUEcvk2vTPaP953jplGmJD65o4uw802OwfEH2n8I24kU962NssD2YpYVYbFMJ%2FisT%2FgVKoV2XvC2xOuHwjzdGTrhtSCCz4EKlHil8HP%2FFyZ%2FADAIPlfL%2B1TnjpAu5iaC7Fd%2FXF8GH3PJl4YBDAIKsEsfl%2BvaZFdMgQHV2S8KG4i%2BeBWhCnM%2FpWkxGLOpjamCakNpWXXeUygzZqLbdCReATjE%2F2qlOiWlQX0ql70ApgNDCBtA7Gl5usnStXB%2B%2BzNq3r1Cp0STjYJAyq6ZWTYKalTEpAiItvslviuxeYNhSshM6wlSAquTBO8bKVih2clVBwO95MwpO0mpajjQxTXPqjI%2FXI7JlctX2Xg0eWCDnMgv0nrtUTXqujePl2WJ5wDC47MPDS1cQGOqUBkeAWYbqvXcclE4Rs9pa7UydrEbUb8fzJb22ClIiSgTv29dCb%2BYgVTAyJK5zHd5f%2F10EPCdOICpJYHogcIz67Hx%2F6ROD10KfDiUFC2qujOLfPCc5QnnRajTrnfQCDW2SelqQmwAORo8ZaUe1%2Fn4MzMFD4WgLlRu5I%2BRjZ90UazGvy5c1xEyEK3T1TtMMpBlAF%2Fd%2FSylSKhdoaomocpTdoQdpUs0cj&X-Amz-Signature=c09b7409c99023645481d90a60285d8c0e75577ddb92c9e34cd75ada8ef4d86e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3Q6ECAE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIET7zhGEji0JSLPNdKMDrCvqj41EKIiNJgpE7Ha3FZhaAiBsKwgBVpvh%2BgqdtJssW%2BDn4YknQPp2RQYKGCwrBfD9wSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz47NKToINibMZny%2BKtwDQ%2BeApiqB3b11snnm7%2BJONBwPcsE0QKx8ekAjuFtSxmuBYyXURQJbxPmiPdw5zqXw3%2FOvK%2FRGbnyVMi9vOklRD9g%2FCOStYlyWUiLDP3GpWTDxUUdqfaGJMYKW5fQkTFN0g1WxnCgSo3%2BpsmVBnqbGs%2Bd3kSSilzfMQ25eii5OC%2BkcSagW4I6goHoZvtb5qx3FXi3bIHAo4NdvXUdzSlnOSZSFKfxaGglJ99ugH2TyKNAsQFYATu1uGY6zYb7PvRwBwmNAcROeYO7vAkdY9yoPaaqwZbQ4M9xkFd%2FqFRHS8E2SryUcdzdtvUXZLry4JgXMB%2BtzhG2KTGQhppzTAvOUEBa%2FhvoQFqT9OKxmFlpOLmZJefhVQmlAE3qeOswnHJsjB19GmiiDwpfxRyM7C7VMqVKH4a3g6bE75S3sqGBLYaoF5w2XgAfbQCoYvENhbiIHsu9Aq1eFW8TobZmgHnDLs47XTxUTvcvokOjL86uCkm4XrMrEPk3RIplz16MXmW8M599kWWvSCeP2wusGnhV07I4dTd215UIK%2Fm%2BL%2FdOFUIOIKGS%2BWcP2b74IQgg%2F6%2BRy5HoiXIavGF4XBNuGkbxnYNMbym3mlwPst%2Bd6ZPjJUORA9S%2BYBXlvH5H3B%2F4wzdPVxAY6pgHdRZNWS8fgnN62Ha%2FSOcrvU83hZ8f1VgOnIbzKE5272t3EaYt85iqsdZ9OgfUxmizMk9pEI09rkyJUAqsTV0KsLozbB%2Bpug%2FEXxJ%2F0s4kuejpzhTxe6oRr2vHYGVwg1k65Ks%2FvzNJmrCigtMEMWiIOd8UGW%2FJ7%2Fc6RyRpbYVDcUAkE6K%2Fd1ULd28GN527485XV%2Fa%2FUZdeau0Dj9mgkCZmGcB%2FPSCWi&X-Amz-Signature=9605309cacab71e8de90580f2068f27fc895f0af311888cf20cedf328920267d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3Q6ECAE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIET7zhGEji0JSLPNdKMDrCvqj41EKIiNJgpE7Ha3FZhaAiBsKwgBVpvh%2BgqdtJssW%2BDn4YknQPp2RQYKGCwrBfD9wSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz47NKToINibMZny%2BKtwDQ%2BeApiqB3b11snnm7%2BJONBwPcsE0QKx8ekAjuFtSxmuBYyXURQJbxPmiPdw5zqXw3%2FOvK%2FRGbnyVMi9vOklRD9g%2FCOStYlyWUiLDP3GpWTDxUUdqfaGJMYKW5fQkTFN0g1WxnCgSo3%2BpsmVBnqbGs%2Bd3kSSilzfMQ25eii5OC%2BkcSagW4I6goHoZvtb5qx3FXi3bIHAo4NdvXUdzSlnOSZSFKfxaGglJ99ugH2TyKNAsQFYATu1uGY6zYb7PvRwBwmNAcROeYO7vAkdY9yoPaaqwZbQ4M9xkFd%2FqFRHS8E2SryUcdzdtvUXZLry4JgXMB%2BtzhG2KTGQhppzTAvOUEBa%2FhvoQFqT9OKxmFlpOLmZJefhVQmlAE3qeOswnHJsjB19GmiiDwpfxRyM7C7VMqVKH4a3g6bE75S3sqGBLYaoF5w2XgAfbQCoYvENhbiIHsu9Aq1eFW8TobZmgHnDLs47XTxUTvcvokOjL86uCkm4XrMrEPk3RIplz16MXmW8M599kWWvSCeP2wusGnhV07I4dTd215UIK%2Fm%2BL%2FdOFUIOIKGS%2BWcP2b74IQgg%2F6%2BRy5HoiXIavGF4XBNuGkbxnYNMbym3mlwPst%2Bd6ZPjJUORA9S%2BYBXlvH5H3B%2F4wzdPVxAY6pgHdRZNWS8fgnN62Ha%2FSOcrvU83hZ8f1VgOnIbzKE5272t3EaYt85iqsdZ9OgfUxmizMk9pEI09rkyJUAqsTV0KsLozbB%2Bpug%2FEXxJ%2F0s4kuejpzhTxe6oRr2vHYGVwg1k65Ks%2FvzNJmrCigtMEMWiIOd8UGW%2FJ7%2Fc6RyRpbYVDcUAkE6K%2Fd1ULd28GN527485XV%2Fa%2FUZdeau0Dj9mgkCZmGcB%2FPSCWi&X-Amz-Signature=9df4feb2e0edf1a28e3218997e9f3acb6fb84cb28970ab75008c9626e133116a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3Q6ECAE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIET7zhGEji0JSLPNdKMDrCvqj41EKIiNJgpE7Ha3FZhaAiBsKwgBVpvh%2BgqdtJssW%2BDn4YknQPp2RQYKGCwrBfD9wSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz47NKToINibMZny%2BKtwDQ%2BeApiqB3b11snnm7%2BJONBwPcsE0QKx8ekAjuFtSxmuBYyXURQJbxPmiPdw5zqXw3%2FOvK%2FRGbnyVMi9vOklRD9g%2FCOStYlyWUiLDP3GpWTDxUUdqfaGJMYKW5fQkTFN0g1WxnCgSo3%2BpsmVBnqbGs%2Bd3kSSilzfMQ25eii5OC%2BkcSagW4I6goHoZvtb5qx3FXi3bIHAo4NdvXUdzSlnOSZSFKfxaGglJ99ugH2TyKNAsQFYATu1uGY6zYb7PvRwBwmNAcROeYO7vAkdY9yoPaaqwZbQ4M9xkFd%2FqFRHS8E2SryUcdzdtvUXZLry4JgXMB%2BtzhG2KTGQhppzTAvOUEBa%2FhvoQFqT9OKxmFlpOLmZJefhVQmlAE3qeOswnHJsjB19GmiiDwpfxRyM7C7VMqVKH4a3g6bE75S3sqGBLYaoF5w2XgAfbQCoYvENhbiIHsu9Aq1eFW8TobZmgHnDLs47XTxUTvcvokOjL86uCkm4XrMrEPk3RIplz16MXmW8M599kWWvSCeP2wusGnhV07I4dTd215UIK%2Fm%2BL%2FdOFUIOIKGS%2BWcP2b74IQgg%2F6%2BRy5HoiXIavGF4XBNuGkbxnYNMbym3mlwPst%2Bd6ZPjJUORA9S%2BYBXlvH5H3B%2F4wzdPVxAY6pgHdRZNWS8fgnN62Ha%2FSOcrvU83hZ8f1VgOnIbzKE5272t3EaYt85iqsdZ9OgfUxmizMk9pEI09rkyJUAqsTV0KsLozbB%2Bpug%2FEXxJ%2F0s4kuejpzhTxe6oRr2vHYGVwg1k65Ks%2FvzNJmrCigtMEMWiIOd8UGW%2FJ7%2Fc6RyRpbYVDcUAkE6K%2Fd1ULd28GN527485XV%2Fa%2FUZdeau0Dj9mgkCZmGcB%2FPSCWi&X-Amz-Signature=4458bfcde148fbbe7e7dd24d8a3aa5eb5624f33170d9bb296951e3fae8a0841c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3Q6ECAE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIET7zhGEji0JSLPNdKMDrCvqj41EKIiNJgpE7Ha3FZhaAiBsKwgBVpvh%2BgqdtJssW%2BDn4YknQPp2RQYKGCwrBfD9wSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz47NKToINibMZny%2BKtwDQ%2BeApiqB3b11snnm7%2BJONBwPcsE0QKx8ekAjuFtSxmuBYyXURQJbxPmiPdw5zqXw3%2FOvK%2FRGbnyVMi9vOklRD9g%2FCOStYlyWUiLDP3GpWTDxUUdqfaGJMYKW5fQkTFN0g1WxnCgSo3%2BpsmVBnqbGs%2Bd3kSSilzfMQ25eii5OC%2BkcSagW4I6goHoZvtb5qx3FXi3bIHAo4NdvXUdzSlnOSZSFKfxaGglJ99ugH2TyKNAsQFYATu1uGY6zYb7PvRwBwmNAcROeYO7vAkdY9yoPaaqwZbQ4M9xkFd%2FqFRHS8E2SryUcdzdtvUXZLry4JgXMB%2BtzhG2KTGQhppzTAvOUEBa%2FhvoQFqT9OKxmFlpOLmZJefhVQmlAE3qeOswnHJsjB19GmiiDwpfxRyM7C7VMqVKH4a3g6bE75S3sqGBLYaoF5w2XgAfbQCoYvENhbiIHsu9Aq1eFW8TobZmgHnDLs47XTxUTvcvokOjL86uCkm4XrMrEPk3RIplz16MXmW8M599kWWvSCeP2wusGnhV07I4dTd215UIK%2Fm%2BL%2FdOFUIOIKGS%2BWcP2b74IQgg%2F6%2BRy5HoiXIavGF4XBNuGkbxnYNMbym3mlwPst%2Bd6ZPjJUORA9S%2BYBXlvH5H3B%2F4wzdPVxAY6pgHdRZNWS8fgnN62Ha%2FSOcrvU83hZ8f1VgOnIbzKE5272t3EaYt85iqsdZ9OgfUxmizMk9pEI09rkyJUAqsTV0KsLozbB%2Bpug%2FEXxJ%2F0s4kuejpzhTxe6oRr2vHYGVwg1k65Ks%2FvzNJmrCigtMEMWiIOd8UGW%2FJ7%2Fc6RyRpbYVDcUAkE6K%2Fd1ULd28GN527485XV%2Fa%2FUZdeau0Dj9mgkCZmGcB%2FPSCWi&X-Amz-Signature=507bdf1ffb44861bff856b66fc496c180b4f1c94c90a44cc53fb7db47b99b33f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3Q6ECAE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIET7zhGEji0JSLPNdKMDrCvqj41EKIiNJgpE7Ha3FZhaAiBsKwgBVpvh%2BgqdtJssW%2BDn4YknQPp2RQYKGCwrBfD9wSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz47NKToINibMZny%2BKtwDQ%2BeApiqB3b11snnm7%2BJONBwPcsE0QKx8ekAjuFtSxmuBYyXURQJbxPmiPdw5zqXw3%2FOvK%2FRGbnyVMi9vOklRD9g%2FCOStYlyWUiLDP3GpWTDxUUdqfaGJMYKW5fQkTFN0g1WxnCgSo3%2BpsmVBnqbGs%2Bd3kSSilzfMQ25eii5OC%2BkcSagW4I6goHoZvtb5qx3FXi3bIHAo4NdvXUdzSlnOSZSFKfxaGglJ99ugH2TyKNAsQFYATu1uGY6zYb7PvRwBwmNAcROeYO7vAkdY9yoPaaqwZbQ4M9xkFd%2FqFRHS8E2SryUcdzdtvUXZLry4JgXMB%2BtzhG2KTGQhppzTAvOUEBa%2FhvoQFqT9OKxmFlpOLmZJefhVQmlAE3qeOswnHJsjB19GmiiDwpfxRyM7C7VMqVKH4a3g6bE75S3sqGBLYaoF5w2XgAfbQCoYvENhbiIHsu9Aq1eFW8TobZmgHnDLs47XTxUTvcvokOjL86uCkm4XrMrEPk3RIplz16MXmW8M599kWWvSCeP2wusGnhV07I4dTd215UIK%2Fm%2BL%2FdOFUIOIKGS%2BWcP2b74IQgg%2F6%2BRy5HoiXIavGF4XBNuGkbxnYNMbym3mlwPst%2Bd6ZPjJUORA9S%2BYBXlvH5H3B%2F4wzdPVxAY6pgHdRZNWS8fgnN62Ha%2FSOcrvU83hZ8f1VgOnIbzKE5272t3EaYt85iqsdZ9OgfUxmizMk9pEI09rkyJUAqsTV0KsLozbB%2Bpug%2FEXxJ%2F0s4kuejpzhTxe6oRr2vHYGVwg1k65Ks%2FvzNJmrCigtMEMWiIOd8UGW%2FJ7%2Fc6RyRpbYVDcUAkE6K%2Fd1ULd28GN527485XV%2Fa%2FUZdeau0Dj9mgkCZmGcB%2FPSCWi&X-Amz-Signature=3f0ef72dc9236389e98cda289aba0ff56192aa4d0df85018fdc2bb06bf52db05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3Q6ECAE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIET7zhGEji0JSLPNdKMDrCvqj41EKIiNJgpE7Ha3FZhaAiBsKwgBVpvh%2BgqdtJssW%2BDn4YknQPp2RQYKGCwrBfD9wSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz47NKToINibMZny%2BKtwDQ%2BeApiqB3b11snnm7%2BJONBwPcsE0QKx8ekAjuFtSxmuBYyXURQJbxPmiPdw5zqXw3%2FOvK%2FRGbnyVMi9vOklRD9g%2FCOStYlyWUiLDP3GpWTDxUUdqfaGJMYKW5fQkTFN0g1WxnCgSo3%2BpsmVBnqbGs%2Bd3kSSilzfMQ25eii5OC%2BkcSagW4I6goHoZvtb5qx3FXi3bIHAo4NdvXUdzSlnOSZSFKfxaGglJ99ugH2TyKNAsQFYATu1uGY6zYb7PvRwBwmNAcROeYO7vAkdY9yoPaaqwZbQ4M9xkFd%2FqFRHS8E2SryUcdzdtvUXZLry4JgXMB%2BtzhG2KTGQhppzTAvOUEBa%2FhvoQFqT9OKxmFlpOLmZJefhVQmlAE3qeOswnHJsjB19GmiiDwpfxRyM7C7VMqVKH4a3g6bE75S3sqGBLYaoF5w2XgAfbQCoYvENhbiIHsu9Aq1eFW8TobZmgHnDLs47XTxUTvcvokOjL86uCkm4XrMrEPk3RIplz16MXmW8M599kWWvSCeP2wusGnhV07I4dTd215UIK%2Fm%2BL%2FdOFUIOIKGS%2BWcP2b74IQgg%2F6%2BRy5HoiXIavGF4XBNuGkbxnYNMbym3mlwPst%2Bd6ZPjJUORA9S%2BYBXlvH5H3B%2F4wzdPVxAY6pgHdRZNWS8fgnN62Ha%2FSOcrvU83hZ8f1VgOnIbzKE5272t3EaYt85iqsdZ9OgfUxmizMk9pEI09rkyJUAqsTV0KsLozbB%2Bpug%2FEXxJ%2F0s4kuejpzhTxe6oRr2vHYGVwg1k65Ks%2FvzNJmrCigtMEMWiIOd8UGW%2FJ7%2Fc6RyRpbYVDcUAkE6K%2Fd1ULd28GN527485XV%2Fa%2FUZdeau0Dj9mgkCZmGcB%2FPSCWi&X-Amz-Signature=a035e7b64d2ca7cadc796350730788489299fef9af01d943fc5a4e707f7815c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3Q6ECAE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIET7zhGEji0JSLPNdKMDrCvqj41EKIiNJgpE7Ha3FZhaAiBsKwgBVpvh%2BgqdtJssW%2BDn4YknQPp2RQYKGCwrBfD9wSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz47NKToINibMZny%2BKtwDQ%2BeApiqB3b11snnm7%2BJONBwPcsE0QKx8ekAjuFtSxmuBYyXURQJbxPmiPdw5zqXw3%2FOvK%2FRGbnyVMi9vOklRD9g%2FCOStYlyWUiLDP3GpWTDxUUdqfaGJMYKW5fQkTFN0g1WxnCgSo3%2BpsmVBnqbGs%2Bd3kSSilzfMQ25eii5OC%2BkcSagW4I6goHoZvtb5qx3FXi3bIHAo4NdvXUdzSlnOSZSFKfxaGglJ99ugH2TyKNAsQFYATu1uGY6zYb7PvRwBwmNAcROeYO7vAkdY9yoPaaqwZbQ4M9xkFd%2FqFRHS8E2SryUcdzdtvUXZLry4JgXMB%2BtzhG2KTGQhppzTAvOUEBa%2FhvoQFqT9OKxmFlpOLmZJefhVQmlAE3qeOswnHJsjB19GmiiDwpfxRyM7C7VMqVKH4a3g6bE75S3sqGBLYaoF5w2XgAfbQCoYvENhbiIHsu9Aq1eFW8TobZmgHnDLs47XTxUTvcvokOjL86uCkm4XrMrEPk3RIplz16MXmW8M599kWWvSCeP2wusGnhV07I4dTd215UIK%2Fm%2BL%2FdOFUIOIKGS%2BWcP2b74IQgg%2F6%2BRy5HoiXIavGF4XBNuGkbxnYNMbym3mlwPst%2Bd6ZPjJUORA9S%2BYBXlvH5H3B%2F4wzdPVxAY6pgHdRZNWS8fgnN62Ha%2FSOcrvU83hZ8f1VgOnIbzKE5272t3EaYt85iqsdZ9OgfUxmizMk9pEI09rkyJUAqsTV0KsLozbB%2Bpug%2FEXxJ%2F0s4kuejpzhTxe6oRr2vHYGVwg1k65Ks%2FvzNJmrCigtMEMWiIOd8UGW%2FJ7%2Fc6RyRpbYVDcUAkE6K%2Fd1ULd28GN527485XV%2Fa%2FUZdeau0Dj9mgkCZmGcB%2FPSCWi&X-Amz-Signature=5bd5fa981383d0aadfe701eeaf95f98be08c1c5391c96613086f0c987ff210cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3Q6ECAE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIET7zhGEji0JSLPNdKMDrCvqj41EKIiNJgpE7Ha3FZhaAiBsKwgBVpvh%2BgqdtJssW%2BDn4YknQPp2RQYKGCwrBfD9wSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz47NKToINibMZny%2BKtwDQ%2BeApiqB3b11snnm7%2BJONBwPcsE0QKx8ekAjuFtSxmuBYyXURQJbxPmiPdw5zqXw3%2FOvK%2FRGbnyVMi9vOklRD9g%2FCOStYlyWUiLDP3GpWTDxUUdqfaGJMYKW5fQkTFN0g1WxnCgSo3%2BpsmVBnqbGs%2Bd3kSSilzfMQ25eii5OC%2BkcSagW4I6goHoZvtb5qx3FXi3bIHAo4NdvXUdzSlnOSZSFKfxaGglJ99ugH2TyKNAsQFYATu1uGY6zYb7PvRwBwmNAcROeYO7vAkdY9yoPaaqwZbQ4M9xkFd%2FqFRHS8E2SryUcdzdtvUXZLry4JgXMB%2BtzhG2KTGQhppzTAvOUEBa%2FhvoQFqT9OKxmFlpOLmZJefhVQmlAE3qeOswnHJsjB19GmiiDwpfxRyM7C7VMqVKH4a3g6bE75S3sqGBLYaoF5w2XgAfbQCoYvENhbiIHsu9Aq1eFW8TobZmgHnDLs47XTxUTvcvokOjL86uCkm4XrMrEPk3RIplz16MXmW8M599kWWvSCeP2wusGnhV07I4dTd215UIK%2Fm%2BL%2FdOFUIOIKGS%2BWcP2b74IQgg%2F6%2BRy5HoiXIavGF4XBNuGkbxnYNMbym3mlwPst%2Bd6ZPjJUORA9S%2BYBXlvH5H3B%2F4wzdPVxAY6pgHdRZNWS8fgnN62Ha%2FSOcrvU83hZ8f1VgOnIbzKE5272t3EaYt85iqsdZ9OgfUxmizMk9pEI09rkyJUAqsTV0KsLozbB%2Bpug%2FEXxJ%2F0s4kuejpzhTxe6oRr2vHYGVwg1k65Ks%2FvzNJmrCigtMEMWiIOd8UGW%2FJ7%2Fc6RyRpbYVDcUAkE6K%2Fd1ULd28GN527485XV%2Fa%2FUZdeau0Dj9mgkCZmGcB%2FPSCWi&X-Amz-Signature=1cecba893803ebf55a0c34dbcad1e53bc6ce022e66389feb75a44bf7da14140f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3Q6ECAE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIET7zhGEji0JSLPNdKMDrCvqj41EKIiNJgpE7Ha3FZhaAiBsKwgBVpvh%2BgqdtJssW%2BDn4YknQPp2RQYKGCwrBfD9wSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz47NKToINibMZny%2BKtwDQ%2BeApiqB3b11snnm7%2BJONBwPcsE0QKx8ekAjuFtSxmuBYyXURQJbxPmiPdw5zqXw3%2FOvK%2FRGbnyVMi9vOklRD9g%2FCOStYlyWUiLDP3GpWTDxUUdqfaGJMYKW5fQkTFN0g1WxnCgSo3%2BpsmVBnqbGs%2Bd3kSSilzfMQ25eii5OC%2BkcSagW4I6goHoZvtb5qx3FXi3bIHAo4NdvXUdzSlnOSZSFKfxaGglJ99ugH2TyKNAsQFYATu1uGY6zYb7PvRwBwmNAcROeYO7vAkdY9yoPaaqwZbQ4M9xkFd%2FqFRHS8E2SryUcdzdtvUXZLry4JgXMB%2BtzhG2KTGQhppzTAvOUEBa%2FhvoQFqT9OKxmFlpOLmZJefhVQmlAE3qeOswnHJsjB19GmiiDwpfxRyM7C7VMqVKH4a3g6bE75S3sqGBLYaoF5w2XgAfbQCoYvENhbiIHsu9Aq1eFW8TobZmgHnDLs47XTxUTvcvokOjL86uCkm4XrMrEPk3RIplz16MXmW8M599kWWvSCeP2wusGnhV07I4dTd215UIK%2Fm%2BL%2FdOFUIOIKGS%2BWcP2b74IQgg%2F6%2BRy5HoiXIavGF4XBNuGkbxnYNMbym3mlwPst%2Bd6ZPjJUORA9S%2BYBXlvH5H3B%2F4wzdPVxAY6pgHdRZNWS8fgnN62Ha%2FSOcrvU83hZ8f1VgOnIbzKE5272t3EaYt85iqsdZ9OgfUxmizMk9pEI09rkyJUAqsTV0KsLozbB%2Bpug%2FEXxJ%2F0s4kuejpzhTxe6oRr2vHYGVwg1k65Ks%2FvzNJmrCigtMEMWiIOd8UGW%2FJ7%2Fc6RyRpbYVDcUAkE6K%2Fd1ULd28GN527485XV%2Fa%2FUZdeau0Dj9mgkCZmGcB%2FPSCWi&X-Amz-Signature=2500e4a1348997ead738c2c8a8efd91a6315a451f0c4c3a54fe26d938a2cfa6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3Q6ECAE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIET7zhGEji0JSLPNdKMDrCvqj41EKIiNJgpE7Ha3FZhaAiBsKwgBVpvh%2BgqdtJssW%2BDn4YknQPp2RQYKGCwrBfD9wSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz47NKToINibMZny%2BKtwDQ%2BeApiqB3b11snnm7%2BJONBwPcsE0QKx8ekAjuFtSxmuBYyXURQJbxPmiPdw5zqXw3%2FOvK%2FRGbnyVMi9vOklRD9g%2FCOStYlyWUiLDP3GpWTDxUUdqfaGJMYKW5fQkTFN0g1WxnCgSo3%2BpsmVBnqbGs%2Bd3kSSilzfMQ25eii5OC%2BkcSagW4I6goHoZvtb5qx3FXi3bIHAo4NdvXUdzSlnOSZSFKfxaGglJ99ugH2TyKNAsQFYATu1uGY6zYb7PvRwBwmNAcROeYO7vAkdY9yoPaaqwZbQ4M9xkFd%2FqFRHS8E2SryUcdzdtvUXZLry4JgXMB%2BtzhG2KTGQhppzTAvOUEBa%2FhvoQFqT9OKxmFlpOLmZJefhVQmlAE3qeOswnHJsjB19GmiiDwpfxRyM7C7VMqVKH4a3g6bE75S3sqGBLYaoF5w2XgAfbQCoYvENhbiIHsu9Aq1eFW8TobZmgHnDLs47XTxUTvcvokOjL86uCkm4XrMrEPk3RIplz16MXmW8M599kWWvSCeP2wusGnhV07I4dTd215UIK%2Fm%2BL%2FdOFUIOIKGS%2BWcP2b74IQgg%2F6%2BRy5HoiXIavGF4XBNuGkbxnYNMbym3mlwPst%2Bd6ZPjJUORA9S%2BYBXlvH5H3B%2F4wzdPVxAY6pgHdRZNWS8fgnN62Ha%2FSOcrvU83hZ8f1VgOnIbzKE5272t3EaYt85iqsdZ9OgfUxmizMk9pEI09rkyJUAqsTV0KsLozbB%2Bpug%2FEXxJ%2F0s4kuejpzhTxe6oRr2vHYGVwg1k65Ks%2FvzNJmrCigtMEMWiIOd8UGW%2FJ7%2Fc6RyRpbYVDcUAkE6K%2Fd1ULd28GN527485XV%2Fa%2FUZdeau0Dj9mgkCZmGcB%2FPSCWi&X-Amz-Signature=c1ebc8c697691d4acc3e1547c0202f74f72891d5deee173d5020df4ff2cd3650&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
