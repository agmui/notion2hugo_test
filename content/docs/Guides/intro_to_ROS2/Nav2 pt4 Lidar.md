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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEL5G4RS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQD4DgtHcPMHA2p%2Fp3cc8GPsbBWcIkOCVgkKGrBNENmfSAIhANFXZf4kxWM6aJ7xPqK2iSW%2F1FwQlq8WF9PH%2FrZIWwrZKv8DCD8QABoMNjM3NDIzMTgzODA1IgxWpzDSOf5W5PfqLGkq3AO9qlG5MrDgE9%2F61LiViPAIh%2FWUAPtB6EgfVpAxJUpnwTbSlLjckLalibHVNI0sIah59B2ueR4rzwb8Ul01%2BmhY4ePvZs5NTZjxeKBTN5mHKmMnCHi5RhCj9INugMlVlhtzQV9svolKGXwviyg5nJXjYwr0iIv%2B7BA7iKTVx3RKcEgWnOhncvFtvucrWh9p%2Bmod%2FvmKb5RX5SJfyMNTDAu2Pged1525Uf4FTZEybfBo70NbrcDvTEgMPcTEP4BXrj0FDbBS70Bgvd6K4eyaYIChbdjIvwWKS9VjLzDGYYMCuRCa%2BrMM6aaytmNf0iyzaQ1wRfW2ittbmZ1beVjeHYS4rs4bI5o6cAh%2FFhmBWJDzvKzeuENF1xB0E1l52sjSW7MUdc2NWa2G4rRVFj1IGsKgm0U0TepJQ7UHi69suCqotiuzmW3rxs6bCrPJ0vXcRMz9p3JG8AROq986SCIeRhQAO1clvblIZa0GnyASI09QtAxBtSWYn4i%2BoABu9ban1TLTXoKSds54EPBJIONzPMDYOkim3cODYF3htWDa3X1Ksg0eaR7p3NmfuGcniMT1FWDRPupkn95fc8bFC6qFsjrHdDQpuVv%2BbzuvD3JFqI1rXp41tFFbL4IdnQt1YjC5jsHEBjqkAecXgFM7bHskoI%2BBqfTUVHVvXxlF5WdnufDcH9n5kKm4VHsN55ialy9TI8XLkQQVTualvFScZRvOgO9Pp9KIC1rGbhfDsrJmrJxDOfAzihdndM8vNpAtfXiuMAMe75nKbvJZ0lupl6Bg4vkBv89n8hFCcg4Tb%2Fkd47O3DOuS3P2fjveC%2BQq74em1kUlPy5TBRtMOzif4CUwNJkkxCBx9buCT02Q%2F&X-Amz-Signature=9bcfb8186924d9a19414e1aa7721234296cb1095b98a090e763b873a19fd836e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JFBYUQI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIEoxuf9Mi4fe1VaJ3MO6GmG2QIjtoYdhxEqqegROkV1wAiEAslPIPCGtIdLREDpDdLn102PoYkxWAF4j%2Fl%2FdjEaqNjkq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDClv2yWUKJ7A%2Bce%2FuCrcAzIQNB9UXIgcOsWTxNk%2FKt4alEuO1M%2FJBsopH6nCaz3xO5sI9I7DqRDfxnSG6aJ0%2BlbXIeREIAA3ROuxCk0TBPVi85SlhKVDXrCGfVWYkoI76aOMCunhMd6%2Flsas%2BAelZ3m7x3AvDq9DLKQHXHSslbs%2BmdNcOrmpEFtofqG9F9X5dNElKaVVodvhV0v31cyToiWtb%2FRpYyMzNTA6Odmf9hGeax6B1QnL1okQfE45uPgfF%2BSgPPxpK%2ByGA2eSNV70lZdtCOkiS3uxmbn4A0lX%2Fq5E6KmPTtSsRUGDLgy0M%2BqqK9EraPb290EoA4bhP8MIYUFv2kHMNaxQx5CJNZZYkXzAcJ22Qbl5DDJ%2BKEBM9yqzIuJeFfBBbSyvEZkQC19Pbg%2BFdc%2Fxq6aUr2mTVAusGYLf%2BsRPnZuG7SLh%2F864qTpBBFeKPnEKZvHdeiakODD4nzhnFSrzQyAH%2FqXRZQgYRiF%2FsNy3FfSDVMiTRHEVfAFMlTm%2Fg6cnH2XfXqb96893n%2BER%2BGip6PkvOiCHohC89w5OK6t8B4wR6PFhK3EjCrvyvihoE6fY7RQ0GupssBWInKcIdZdT1P2OLaKfgoPR98OVnVc1hyimnDMbhb%2F%2FDURTDwGewf%2BEe70numiyMPuNwcQGOqUBYEA3XlUulFbJMMfILuBFs2JCgixH7smzj3eIa5LDojBLKah111KTWeRLyr3MOWdn5lg5zdMXZJzKg9hMIXwVyDU2ixl2PJQ2xf5FHJgabQ8m9O70i7ZSRLncauVRLVM6bFd53WwUDMKC13Q0kIfg0qL5Jj8PRJpM160tbg7MsdMEjKH35C3gfuzLyAxxH0RBi%2F7Iw4iXp%2F%2BWFTyvuw3c%2FoufbdSE&X-Amz-Signature=1536998e48b007c2849e1b7d89e9cf79422ddd8ed305e01b7d48c3ccf1d659ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JFBYUQI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIEoxuf9Mi4fe1VaJ3MO6GmG2QIjtoYdhxEqqegROkV1wAiEAslPIPCGtIdLREDpDdLn102PoYkxWAF4j%2Fl%2FdjEaqNjkq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDClv2yWUKJ7A%2Bce%2FuCrcAzIQNB9UXIgcOsWTxNk%2FKt4alEuO1M%2FJBsopH6nCaz3xO5sI9I7DqRDfxnSG6aJ0%2BlbXIeREIAA3ROuxCk0TBPVi85SlhKVDXrCGfVWYkoI76aOMCunhMd6%2Flsas%2BAelZ3m7x3AvDq9DLKQHXHSslbs%2BmdNcOrmpEFtofqG9F9X5dNElKaVVodvhV0v31cyToiWtb%2FRpYyMzNTA6Odmf9hGeax6B1QnL1okQfE45uPgfF%2BSgPPxpK%2ByGA2eSNV70lZdtCOkiS3uxmbn4A0lX%2Fq5E6KmPTtSsRUGDLgy0M%2BqqK9EraPb290EoA4bhP8MIYUFv2kHMNaxQx5CJNZZYkXzAcJ22Qbl5DDJ%2BKEBM9yqzIuJeFfBBbSyvEZkQC19Pbg%2BFdc%2Fxq6aUr2mTVAusGYLf%2BsRPnZuG7SLh%2F864qTpBBFeKPnEKZvHdeiakODD4nzhnFSrzQyAH%2FqXRZQgYRiF%2FsNy3FfSDVMiTRHEVfAFMlTm%2Fg6cnH2XfXqb96893n%2BER%2BGip6PkvOiCHohC89w5OK6t8B4wR6PFhK3EjCrvyvihoE6fY7RQ0GupssBWInKcIdZdT1P2OLaKfgoPR98OVnVc1hyimnDMbhb%2F%2FDURTDwGewf%2BEe70numiyMPuNwcQGOqUBYEA3XlUulFbJMMfILuBFs2JCgixH7smzj3eIa5LDojBLKah111KTWeRLyr3MOWdn5lg5zdMXZJzKg9hMIXwVyDU2ixl2PJQ2xf5FHJgabQ8m9O70i7ZSRLncauVRLVM6bFd53WwUDMKC13Q0kIfg0qL5Jj8PRJpM160tbg7MsdMEjKH35C3gfuzLyAxxH0RBi%2F7Iw4iXp%2F%2BWFTyvuw3c%2FoufbdSE&X-Amz-Signature=48b2ccdd647522e50c86e8f927af564b5d7e06fa27b99159c545ed65d16a3db7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JFBYUQI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIEoxuf9Mi4fe1VaJ3MO6GmG2QIjtoYdhxEqqegROkV1wAiEAslPIPCGtIdLREDpDdLn102PoYkxWAF4j%2Fl%2FdjEaqNjkq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDClv2yWUKJ7A%2Bce%2FuCrcAzIQNB9UXIgcOsWTxNk%2FKt4alEuO1M%2FJBsopH6nCaz3xO5sI9I7DqRDfxnSG6aJ0%2BlbXIeREIAA3ROuxCk0TBPVi85SlhKVDXrCGfVWYkoI76aOMCunhMd6%2Flsas%2BAelZ3m7x3AvDq9DLKQHXHSslbs%2BmdNcOrmpEFtofqG9F9X5dNElKaVVodvhV0v31cyToiWtb%2FRpYyMzNTA6Odmf9hGeax6B1QnL1okQfE45uPgfF%2BSgPPxpK%2ByGA2eSNV70lZdtCOkiS3uxmbn4A0lX%2Fq5E6KmPTtSsRUGDLgy0M%2BqqK9EraPb290EoA4bhP8MIYUFv2kHMNaxQx5CJNZZYkXzAcJ22Qbl5DDJ%2BKEBM9yqzIuJeFfBBbSyvEZkQC19Pbg%2BFdc%2Fxq6aUr2mTVAusGYLf%2BsRPnZuG7SLh%2F864qTpBBFeKPnEKZvHdeiakODD4nzhnFSrzQyAH%2FqXRZQgYRiF%2FsNy3FfSDVMiTRHEVfAFMlTm%2Fg6cnH2XfXqb96893n%2BER%2BGip6PkvOiCHohC89w5OK6t8B4wR6PFhK3EjCrvyvihoE6fY7RQ0GupssBWInKcIdZdT1P2OLaKfgoPR98OVnVc1hyimnDMbhb%2F%2FDURTDwGewf%2BEe70numiyMPuNwcQGOqUBYEA3XlUulFbJMMfILuBFs2JCgixH7smzj3eIa5LDojBLKah111KTWeRLyr3MOWdn5lg5zdMXZJzKg9hMIXwVyDU2ixl2PJQ2xf5FHJgabQ8m9O70i7ZSRLncauVRLVM6bFd53WwUDMKC13Q0kIfg0qL5Jj8PRJpM160tbg7MsdMEjKH35C3gfuzLyAxxH0RBi%2F7Iw4iXp%2F%2BWFTyvuw3c%2FoufbdSE&X-Amz-Signature=896e641559b3785c486b04e559834a76e03f049e69a3c3755c16a0d2121f28c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JFBYUQI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIEoxuf9Mi4fe1VaJ3MO6GmG2QIjtoYdhxEqqegROkV1wAiEAslPIPCGtIdLREDpDdLn102PoYkxWAF4j%2Fl%2FdjEaqNjkq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDClv2yWUKJ7A%2Bce%2FuCrcAzIQNB9UXIgcOsWTxNk%2FKt4alEuO1M%2FJBsopH6nCaz3xO5sI9I7DqRDfxnSG6aJ0%2BlbXIeREIAA3ROuxCk0TBPVi85SlhKVDXrCGfVWYkoI76aOMCunhMd6%2Flsas%2BAelZ3m7x3AvDq9DLKQHXHSslbs%2BmdNcOrmpEFtofqG9F9X5dNElKaVVodvhV0v31cyToiWtb%2FRpYyMzNTA6Odmf9hGeax6B1QnL1okQfE45uPgfF%2BSgPPxpK%2ByGA2eSNV70lZdtCOkiS3uxmbn4A0lX%2Fq5E6KmPTtSsRUGDLgy0M%2BqqK9EraPb290EoA4bhP8MIYUFv2kHMNaxQx5CJNZZYkXzAcJ22Qbl5DDJ%2BKEBM9yqzIuJeFfBBbSyvEZkQC19Pbg%2BFdc%2Fxq6aUr2mTVAusGYLf%2BsRPnZuG7SLh%2F864qTpBBFeKPnEKZvHdeiakODD4nzhnFSrzQyAH%2FqXRZQgYRiF%2FsNy3FfSDVMiTRHEVfAFMlTm%2Fg6cnH2XfXqb96893n%2BER%2BGip6PkvOiCHohC89w5OK6t8B4wR6PFhK3EjCrvyvihoE6fY7RQ0GupssBWInKcIdZdT1P2OLaKfgoPR98OVnVc1hyimnDMbhb%2F%2FDURTDwGewf%2BEe70numiyMPuNwcQGOqUBYEA3XlUulFbJMMfILuBFs2JCgixH7smzj3eIa5LDojBLKah111KTWeRLyr3MOWdn5lg5zdMXZJzKg9hMIXwVyDU2ixl2PJQ2xf5FHJgabQ8m9O70i7ZSRLncauVRLVM6bFd53WwUDMKC13Q0kIfg0qL5Jj8PRJpM160tbg7MsdMEjKH35C3gfuzLyAxxH0RBi%2F7Iw4iXp%2F%2BWFTyvuw3c%2FoufbdSE&X-Amz-Signature=dd7c55ceefedea22d0614328897806462ce4820d5471e48aa39db9bd9ffce860&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JFBYUQI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIEoxuf9Mi4fe1VaJ3MO6GmG2QIjtoYdhxEqqegROkV1wAiEAslPIPCGtIdLREDpDdLn102PoYkxWAF4j%2Fl%2FdjEaqNjkq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDClv2yWUKJ7A%2Bce%2FuCrcAzIQNB9UXIgcOsWTxNk%2FKt4alEuO1M%2FJBsopH6nCaz3xO5sI9I7DqRDfxnSG6aJ0%2BlbXIeREIAA3ROuxCk0TBPVi85SlhKVDXrCGfVWYkoI76aOMCunhMd6%2Flsas%2BAelZ3m7x3AvDq9DLKQHXHSslbs%2BmdNcOrmpEFtofqG9F9X5dNElKaVVodvhV0v31cyToiWtb%2FRpYyMzNTA6Odmf9hGeax6B1QnL1okQfE45uPgfF%2BSgPPxpK%2ByGA2eSNV70lZdtCOkiS3uxmbn4A0lX%2Fq5E6KmPTtSsRUGDLgy0M%2BqqK9EraPb290EoA4bhP8MIYUFv2kHMNaxQx5CJNZZYkXzAcJ22Qbl5DDJ%2BKEBM9yqzIuJeFfBBbSyvEZkQC19Pbg%2BFdc%2Fxq6aUr2mTVAusGYLf%2BsRPnZuG7SLh%2F864qTpBBFeKPnEKZvHdeiakODD4nzhnFSrzQyAH%2FqXRZQgYRiF%2FsNy3FfSDVMiTRHEVfAFMlTm%2Fg6cnH2XfXqb96893n%2BER%2BGip6PkvOiCHohC89w5OK6t8B4wR6PFhK3EjCrvyvihoE6fY7RQ0GupssBWInKcIdZdT1P2OLaKfgoPR98OVnVc1hyimnDMbhb%2F%2FDURTDwGewf%2BEe70numiyMPuNwcQGOqUBYEA3XlUulFbJMMfILuBFs2JCgixH7smzj3eIa5LDojBLKah111KTWeRLyr3MOWdn5lg5zdMXZJzKg9hMIXwVyDU2ixl2PJQ2xf5FHJgabQ8m9O70i7ZSRLncauVRLVM6bFd53WwUDMKC13Q0kIfg0qL5Jj8PRJpM160tbg7MsdMEjKH35C3gfuzLyAxxH0RBi%2F7Iw4iXp%2F%2BWFTyvuw3c%2FoufbdSE&X-Amz-Signature=0b03820604cd1cb3048d98cfa025b5308f25283d807528e3668a88d064966920&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JFBYUQI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIEoxuf9Mi4fe1VaJ3MO6GmG2QIjtoYdhxEqqegROkV1wAiEAslPIPCGtIdLREDpDdLn102PoYkxWAF4j%2Fl%2FdjEaqNjkq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDClv2yWUKJ7A%2Bce%2FuCrcAzIQNB9UXIgcOsWTxNk%2FKt4alEuO1M%2FJBsopH6nCaz3xO5sI9I7DqRDfxnSG6aJ0%2BlbXIeREIAA3ROuxCk0TBPVi85SlhKVDXrCGfVWYkoI76aOMCunhMd6%2Flsas%2BAelZ3m7x3AvDq9DLKQHXHSslbs%2BmdNcOrmpEFtofqG9F9X5dNElKaVVodvhV0v31cyToiWtb%2FRpYyMzNTA6Odmf9hGeax6B1QnL1okQfE45uPgfF%2BSgPPxpK%2ByGA2eSNV70lZdtCOkiS3uxmbn4A0lX%2Fq5E6KmPTtSsRUGDLgy0M%2BqqK9EraPb290EoA4bhP8MIYUFv2kHMNaxQx5CJNZZYkXzAcJ22Qbl5DDJ%2BKEBM9yqzIuJeFfBBbSyvEZkQC19Pbg%2BFdc%2Fxq6aUr2mTVAusGYLf%2BsRPnZuG7SLh%2F864qTpBBFeKPnEKZvHdeiakODD4nzhnFSrzQyAH%2FqXRZQgYRiF%2FsNy3FfSDVMiTRHEVfAFMlTm%2Fg6cnH2XfXqb96893n%2BER%2BGip6PkvOiCHohC89w5OK6t8B4wR6PFhK3EjCrvyvihoE6fY7RQ0GupssBWInKcIdZdT1P2OLaKfgoPR98OVnVc1hyimnDMbhb%2F%2FDURTDwGewf%2BEe70numiyMPuNwcQGOqUBYEA3XlUulFbJMMfILuBFs2JCgixH7smzj3eIa5LDojBLKah111KTWeRLyr3MOWdn5lg5zdMXZJzKg9hMIXwVyDU2ixl2PJQ2xf5FHJgabQ8m9O70i7ZSRLncauVRLVM6bFd53WwUDMKC13Q0kIfg0qL5Jj8PRJpM160tbg7MsdMEjKH35C3gfuzLyAxxH0RBi%2F7Iw4iXp%2F%2BWFTyvuw3c%2FoufbdSE&X-Amz-Signature=d168a2d42493189b16cf7dfadc43dd6ca77438d90e69c13c4403f35372044a18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JFBYUQI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIEoxuf9Mi4fe1VaJ3MO6GmG2QIjtoYdhxEqqegROkV1wAiEAslPIPCGtIdLREDpDdLn102PoYkxWAF4j%2Fl%2FdjEaqNjkq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDClv2yWUKJ7A%2Bce%2FuCrcAzIQNB9UXIgcOsWTxNk%2FKt4alEuO1M%2FJBsopH6nCaz3xO5sI9I7DqRDfxnSG6aJ0%2BlbXIeREIAA3ROuxCk0TBPVi85SlhKVDXrCGfVWYkoI76aOMCunhMd6%2Flsas%2BAelZ3m7x3AvDq9DLKQHXHSslbs%2BmdNcOrmpEFtofqG9F9X5dNElKaVVodvhV0v31cyToiWtb%2FRpYyMzNTA6Odmf9hGeax6B1QnL1okQfE45uPgfF%2BSgPPxpK%2ByGA2eSNV70lZdtCOkiS3uxmbn4A0lX%2Fq5E6KmPTtSsRUGDLgy0M%2BqqK9EraPb290EoA4bhP8MIYUFv2kHMNaxQx5CJNZZYkXzAcJ22Qbl5DDJ%2BKEBM9yqzIuJeFfBBbSyvEZkQC19Pbg%2BFdc%2Fxq6aUr2mTVAusGYLf%2BsRPnZuG7SLh%2F864qTpBBFeKPnEKZvHdeiakODD4nzhnFSrzQyAH%2FqXRZQgYRiF%2FsNy3FfSDVMiTRHEVfAFMlTm%2Fg6cnH2XfXqb96893n%2BER%2BGip6PkvOiCHohC89w5OK6t8B4wR6PFhK3EjCrvyvihoE6fY7RQ0GupssBWInKcIdZdT1P2OLaKfgoPR98OVnVc1hyimnDMbhb%2F%2FDURTDwGewf%2BEe70numiyMPuNwcQGOqUBYEA3XlUulFbJMMfILuBFs2JCgixH7smzj3eIa5LDojBLKah111KTWeRLyr3MOWdn5lg5zdMXZJzKg9hMIXwVyDU2ixl2PJQ2xf5FHJgabQ8m9O70i7ZSRLncauVRLVM6bFd53WwUDMKC13Q0kIfg0qL5Jj8PRJpM160tbg7MsdMEjKH35C3gfuzLyAxxH0RBi%2F7Iw4iXp%2F%2BWFTyvuw3c%2FoufbdSE&X-Amz-Signature=82d389c327a252e74c58c36a432690bdd46262ace044b4cdfc2033b3ac798fd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JFBYUQI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIEoxuf9Mi4fe1VaJ3MO6GmG2QIjtoYdhxEqqegROkV1wAiEAslPIPCGtIdLREDpDdLn102PoYkxWAF4j%2Fl%2FdjEaqNjkq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDClv2yWUKJ7A%2Bce%2FuCrcAzIQNB9UXIgcOsWTxNk%2FKt4alEuO1M%2FJBsopH6nCaz3xO5sI9I7DqRDfxnSG6aJ0%2BlbXIeREIAA3ROuxCk0TBPVi85SlhKVDXrCGfVWYkoI76aOMCunhMd6%2Flsas%2BAelZ3m7x3AvDq9DLKQHXHSslbs%2BmdNcOrmpEFtofqG9F9X5dNElKaVVodvhV0v31cyToiWtb%2FRpYyMzNTA6Odmf9hGeax6B1QnL1okQfE45uPgfF%2BSgPPxpK%2ByGA2eSNV70lZdtCOkiS3uxmbn4A0lX%2Fq5E6KmPTtSsRUGDLgy0M%2BqqK9EraPb290EoA4bhP8MIYUFv2kHMNaxQx5CJNZZYkXzAcJ22Qbl5DDJ%2BKEBM9yqzIuJeFfBBbSyvEZkQC19Pbg%2BFdc%2Fxq6aUr2mTVAusGYLf%2BsRPnZuG7SLh%2F864qTpBBFeKPnEKZvHdeiakODD4nzhnFSrzQyAH%2FqXRZQgYRiF%2FsNy3FfSDVMiTRHEVfAFMlTm%2Fg6cnH2XfXqb96893n%2BER%2BGip6PkvOiCHohC89w5OK6t8B4wR6PFhK3EjCrvyvihoE6fY7RQ0GupssBWInKcIdZdT1P2OLaKfgoPR98OVnVc1hyimnDMbhb%2F%2FDURTDwGewf%2BEe70numiyMPuNwcQGOqUBYEA3XlUulFbJMMfILuBFs2JCgixH7smzj3eIa5LDojBLKah111KTWeRLyr3MOWdn5lg5zdMXZJzKg9hMIXwVyDU2ixl2PJQ2xf5FHJgabQ8m9O70i7ZSRLncauVRLVM6bFd53WwUDMKC13Q0kIfg0qL5Jj8PRJpM160tbg7MsdMEjKH35C3gfuzLyAxxH0RBi%2F7Iw4iXp%2F%2BWFTyvuw3c%2FoufbdSE&X-Amz-Signature=3b57d67a79d6e6897bbb9eb1d07d49619b9a3b4ad53d98b0d49088f30552c01e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JFBYUQI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIEoxuf9Mi4fe1VaJ3MO6GmG2QIjtoYdhxEqqegROkV1wAiEAslPIPCGtIdLREDpDdLn102PoYkxWAF4j%2Fl%2FdjEaqNjkq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDClv2yWUKJ7A%2Bce%2FuCrcAzIQNB9UXIgcOsWTxNk%2FKt4alEuO1M%2FJBsopH6nCaz3xO5sI9I7DqRDfxnSG6aJ0%2BlbXIeREIAA3ROuxCk0TBPVi85SlhKVDXrCGfVWYkoI76aOMCunhMd6%2Flsas%2BAelZ3m7x3AvDq9DLKQHXHSslbs%2BmdNcOrmpEFtofqG9F9X5dNElKaVVodvhV0v31cyToiWtb%2FRpYyMzNTA6Odmf9hGeax6B1QnL1okQfE45uPgfF%2BSgPPxpK%2ByGA2eSNV70lZdtCOkiS3uxmbn4A0lX%2Fq5E6KmPTtSsRUGDLgy0M%2BqqK9EraPb290EoA4bhP8MIYUFv2kHMNaxQx5CJNZZYkXzAcJ22Qbl5DDJ%2BKEBM9yqzIuJeFfBBbSyvEZkQC19Pbg%2BFdc%2Fxq6aUr2mTVAusGYLf%2BsRPnZuG7SLh%2F864qTpBBFeKPnEKZvHdeiakODD4nzhnFSrzQyAH%2FqXRZQgYRiF%2FsNy3FfSDVMiTRHEVfAFMlTm%2Fg6cnH2XfXqb96893n%2BER%2BGip6PkvOiCHohC89w5OK6t8B4wR6PFhK3EjCrvyvihoE6fY7RQ0GupssBWInKcIdZdT1P2OLaKfgoPR98OVnVc1hyimnDMbhb%2F%2FDURTDwGewf%2BEe70numiyMPuNwcQGOqUBYEA3XlUulFbJMMfILuBFs2JCgixH7smzj3eIa5LDojBLKah111KTWeRLyr3MOWdn5lg5zdMXZJzKg9hMIXwVyDU2ixl2PJQ2xf5FHJgabQ8m9O70i7ZSRLncauVRLVM6bFd53WwUDMKC13Q0kIfg0qL5Jj8PRJpM160tbg7MsdMEjKH35C3gfuzLyAxxH0RBi%2F7Iw4iXp%2F%2BWFTyvuw3c%2FoufbdSE&X-Amz-Signature=720d20a98ad56e444fd65261ad99f93afd67d7263a4920c2cb260a2228acbb8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JFBYUQI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIEoxuf9Mi4fe1VaJ3MO6GmG2QIjtoYdhxEqqegROkV1wAiEAslPIPCGtIdLREDpDdLn102PoYkxWAF4j%2Fl%2FdjEaqNjkq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDClv2yWUKJ7A%2Bce%2FuCrcAzIQNB9UXIgcOsWTxNk%2FKt4alEuO1M%2FJBsopH6nCaz3xO5sI9I7DqRDfxnSG6aJ0%2BlbXIeREIAA3ROuxCk0TBPVi85SlhKVDXrCGfVWYkoI76aOMCunhMd6%2Flsas%2BAelZ3m7x3AvDq9DLKQHXHSslbs%2BmdNcOrmpEFtofqG9F9X5dNElKaVVodvhV0v31cyToiWtb%2FRpYyMzNTA6Odmf9hGeax6B1QnL1okQfE45uPgfF%2BSgPPxpK%2ByGA2eSNV70lZdtCOkiS3uxmbn4A0lX%2Fq5E6KmPTtSsRUGDLgy0M%2BqqK9EraPb290EoA4bhP8MIYUFv2kHMNaxQx5CJNZZYkXzAcJ22Qbl5DDJ%2BKEBM9yqzIuJeFfBBbSyvEZkQC19Pbg%2BFdc%2Fxq6aUr2mTVAusGYLf%2BsRPnZuG7SLh%2F864qTpBBFeKPnEKZvHdeiakODD4nzhnFSrzQyAH%2FqXRZQgYRiF%2FsNy3FfSDVMiTRHEVfAFMlTm%2Fg6cnH2XfXqb96893n%2BER%2BGip6PkvOiCHohC89w5OK6t8B4wR6PFhK3EjCrvyvihoE6fY7RQ0GupssBWInKcIdZdT1P2OLaKfgoPR98OVnVc1hyimnDMbhb%2F%2FDURTDwGewf%2BEe70numiyMPuNwcQGOqUBYEA3XlUulFbJMMfILuBFs2JCgixH7smzj3eIa5LDojBLKah111KTWeRLyr3MOWdn5lg5zdMXZJzKg9hMIXwVyDU2ixl2PJQ2xf5FHJgabQ8m9O70i7ZSRLncauVRLVM6bFd53WwUDMKC13Q0kIfg0qL5Jj8PRJpM160tbg7MsdMEjKH35C3gfuzLyAxxH0RBi%2F7Iw4iXp%2F%2BWFTyvuw3c%2FoufbdSE&X-Amz-Signature=dd7c55ceefedea22d0614328897806462ce4820d5471e48aa39db9bd9ffce860&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
