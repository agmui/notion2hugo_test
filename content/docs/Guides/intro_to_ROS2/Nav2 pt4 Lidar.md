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
  <summary>{{< markdownify >}}What is Lidar?{{< /markdownify >}}</summary>
  
Lidar (light detection and ranging) is using lases to determine how far objects are.

TODO

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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SW3QBGR%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCktaQTgopZXbvhMf6o09kxAd0iZT9BNU6aUG6DSLsY2QIgWjqJjQnffaK7n0foqCrGJvBpjXK0pR54x1T6oOlk7pUqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAs9pCQe2Fj4dcyB7ircAyDtfoe3%2FKB0RLQ16EQaOc%2F4VaP3idEGnsHq%2BMN4KTYDoFDnSvXqFRArfujIeUOb%2BYezT%2BtD7BRPbOWnsEf1sylVyuqeVpAE88jHNae8txBuvvR45jcGj66u%2BCUArcN9PSh5R7ULHv5MlYFkdyF4hkRx7ZIf6dEcatoPT4gKp8XIHAo4riZsAZGuNyIrnAOj44McrvXajp0subBAt9bLpTtsuN8YtCbrxbs40%2B4UMScQajj0kQF96m6%2FcgdHxVURSCJj1mUyyDETA4Iw8oVatdOlWG8vrxzlyy%2FHgz3JsvKZb55GR0LUWbluEvx%2BmDe%2BQgTQQWdQpm98s2ALhKwkKP%2F0vZ2W58ofIpKV19YMeHQz%2BD3i%2BntYdL6GpbhMN7O5r59oGAoaW5ajwaEfGVI3mopxlOSEmnEsNYLsNKDQPkbuIp5Cvr0Vr81xuClHArL0Wx0LMERznKj%2BwX5FP4tdzbBCveiD%2BiwaXx%2BuQQ%2BQz6BSuHHhJCiAl3dBqOk8jrUiZBFg%2BMmlvg30yoJ%2Bv5JEh36fAwylZScJpTfmPMCCpPjvJcp8NsT%2B4SfV%2F75Y4MG8Q3Q7KwK9zo9vi9rTOIjc3c6wvSixVr8uGVe7E4aUfadYnuzp1s0I68r%2Fmj0DMIHE8sUGOqUBWuu3vF3YF2PEo5nmzXjOH28i%2F0xnXErao8Nww7rsmdLgwwnSKLnQN%2B0v8HrgqM8s1Q4xscrBIf7PVWQKpPZhmE6XY0Nivb9NZe0MpNrHAF8Jm7BefWbb%2BjuqfTrg9KH0JgZyxs3DMVMYDAr5YtW937lCUs2VDntPsMhHDCmML8jRH4rou%2BYh7fRbhiBtZXI2ayxmDtVUrf6GVZOwaZg7VEvbIqUs&X-Amz-Signature=74b55f11e44eab10f673462375d35bc3377180ec1e966b842fc61f8a0ed70ee6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLPPTVFV%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGtv5H0dXnDFeZAZP%2BIoL90gekkbbt7uCAkNCaCiEpB0AiEAzYlyKq7e1b1vdw%2BbBNuHGULKESpXBuHEtoBevNE7a40qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNi9Cs9OU7vDXEkz2SrcA8QC60pq11KVjmVPF8%2B0fjB4g3lnMZz%2BIrPkA%2Bl%2BWA0qEa9tWGh1CI4z0pfT7NK1oCmih3EoMkCgMrRcmwntYklE5Q7TUuRANxpsjEeDLvy14pDZhhpUHim9kjFUaEbMJR7pETN6wlhsvmgC48STTLbiwBLLUDbkvE%2BlQ0hVPkt70cJt%2FVZKQfCmaFRa2FXXRQxTG9gN2qBQdBEwHoezXjdOmh621PlpyBRWCJmrX6DN24iN2qIMWuSwTRn2IsXR61uwFoqR0rR13EG%2BoGrFmG7mi3E53HpJwjZFJeTv1mtCeKhwcVaOxX7WNhrLrUaaWz9UdwltmLSI5%2Bpg3GxxG7G17Vm923isC4iplhQRJIZa7E24wBvm227diaA5T9Epvvi8dof4BTUvbbNfP7PQLPGJO09NuXuB1e6kCwfOkEOKwe%2FFR4kcRitM0AbPat8coQmxdR7v7JtgAN1mhdBcmRFTMS4DGsy56PcUHyt7cZdo08rNhJFN3eOwBS%2FtDfQfrr%2BANl7EzckUdjCvrDfGQanrBlMSE66A%2FPqkjx67bEDXi3vjkYug%2FsTGVNB6x5Sye7QVFFms8SuRPxtc2ko1YotoekOs7o6%2FgV3V%2F4HpoYZz0sF9PMwQBGcRiXUUMOLD8sUGOqUBq066jj%2BWsohcLQ3t8Vr62unX5vtWmexHbiNpDkJMc9N0yH%2Fr5zRMJnIotZ5aNGiFHdtcrF2gm6GpPLZWrOUtCaMDUFCjAgB%2FHntYg0K9LfNVas504c1g79VQSlIflzy2N5FVg6kvONLpwU02XpVMTu8tUIN06vKMHgscGyn8emYc9GDvGbmQ1FTI8z5hPTGxIIFF2LeQtz2XTy2Tav3cNz5XomeT&X-Amz-Signature=34a9176f7416f1a87fdc136992bd8b704ad305136cba056b81a2d994464876d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLPPTVFV%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGtv5H0dXnDFeZAZP%2BIoL90gekkbbt7uCAkNCaCiEpB0AiEAzYlyKq7e1b1vdw%2BbBNuHGULKESpXBuHEtoBevNE7a40qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNi9Cs9OU7vDXEkz2SrcA8QC60pq11KVjmVPF8%2B0fjB4g3lnMZz%2BIrPkA%2Bl%2BWA0qEa9tWGh1CI4z0pfT7NK1oCmih3EoMkCgMrRcmwntYklE5Q7TUuRANxpsjEeDLvy14pDZhhpUHim9kjFUaEbMJR7pETN6wlhsvmgC48STTLbiwBLLUDbkvE%2BlQ0hVPkt70cJt%2FVZKQfCmaFRa2FXXRQxTG9gN2qBQdBEwHoezXjdOmh621PlpyBRWCJmrX6DN24iN2qIMWuSwTRn2IsXR61uwFoqR0rR13EG%2BoGrFmG7mi3E53HpJwjZFJeTv1mtCeKhwcVaOxX7WNhrLrUaaWz9UdwltmLSI5%2Bpg3GxxG7G17Vm923isC4iplhQRJIZa7E24wBvm227diaA5T9Epvvi8dof4BTUvbbNfP7PQLPGJO09NuXuB1e6kCwfOkEOKwe%2FFR4kcRitM0AbPat8coQmxdR7v7JtgAN1mhdBcmRFTMS4DGsy56PcUHyt7cZdo08rNhJFN3eOwBS%2FtDfQfrr%2BANl7EzckUdjCvrDfGQanrBlMSE66A%2FPqkjx67bEDXi3vjkYug%2FsTGVNB6x5Sye7QVFFms8SuRPxtc2ko1YotoekOs7o6%2FgV3V%2F4HpoYZz0sF9PMwQBGcRiXUUMOLD8sUGOqUBq066jj%2BWsohcLQ3t8Vr62unX5vtWmexHbiNpDkJMc9N0yH%2Fr5zRMJnIotZ5aNGiFHdtcrF2gm6GpPLZWrOUtCaMDUFCjAgB%2FHntYg0K9LfNVas504c1g79VQSlIflzy2N5FVg6kvONLpwU02XpVMTu8tUIN06vKMHgscGyn8emYc9GDvGbmQ1FTI8z5hPTGxIIFF2LeQtz2XTy2Tav3cNz5XomeT&X-Amz-Signature=ab5834c6f2a31071d43c40ca5e0d8e11cfde3d291e9af3991a230b19ac955baf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLPPTVFV%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGtv5H0dXnDFeZAZP%2BIoL90gekkbbt7uCAkNCaCiEpB0AiEAzYlyKq7e1b1vdw%2BbBNuHGULKESpXBuHEtoBevNE7a40qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNi9Cs9OU7vDXEkz2SrcA8QC60pq11KVjmVPF8%2B0fjB4g3lnMZz%2BIrPkA%2Bl%2BWA0qEa9tWGh1CI4z0pfT7NK1oCmih3EoMkCgMrRcmwntYklE5Q7TUuRANxpsjEeDLvy14pDZhhpUHim9kjFUaEbMJR7pETN6wlhsvmgC48STTLbiwBLLUDbkvE%2BlQ0hVPkt70cJt%2FVZKQfCmaFRa2FXXRQxTG9gN2qBQdBEwHoezXjdOmh621PlpyBRWCJmrX6DN24iN2qIMWuSwTRn2IsXR61uwFoqR0rR13EG%2BoGrFmG7mi3E53HpJwjZFJeTv1mtCeKhwcVaOxX7WNhrLrUaaWz9UdwltmLSI5%2Bpg3GxxG7G17Vm923isC4iplhQRJIZa7E24wBvm227diaA5T9Epvvi8dof4BTUvbbNfP7PQLPGJO09NuXuB1e6kCwfOkEOKwe%2FFR4kcRitM0AbPat8coQmxdR7v7JtgAN1mhdBcmRFTMS4DGsy56PcUHyt7cZdo08rNhJFN3eOwBS%2FtDfQfrr%2BANl7EzckUdjCvrDfGQanrBlMSE66A%2FPqkjx67bEDXi3vjkYug%2FsTGVNB6x5Sye7QVFFms8SuRPxtc2ko1YotoekOs7o6%2FgV3V%2F4HpoYZz0sF9PMwQBGcRiXUUMOLD8sUGOqUBq066jj%2BWsohcLQ3t8Vr62unX5vtWmexHbiNpDkJMc9N0yH%2Fr5zRMJnIotZ5aNGiFHdtcrF2gm6GpPLZWrOUtCaMDUFCjAgB%2FHntYg0K9LfNVas504c1g79VQSlIflzy2N5FVg6kvONLpwU02XpVMTu8tUIN06vKMHgscGyn8emYc9GDvGbmQ1FTI8z5hPTGxIIFF2LeQtz2XTy2Tav3cNz5XomeT&X-Amz-Signature=82087adea24b854cb46a8f3fce980ec4d00336ef473c3f32dff6000596ee9c88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLPPTVFV%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGtv5H0dXnDFeZAZP%2BIoL90gekkbbt7uCAkNCaCiEpB0AiEAzYlyKq7e1b1vdw%2BbBNuHGULKESpXBuHEtoBevNE7a40qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNi9Cs9OU7vDXEkz2SrcA8QC60pq11KVjmVPF8%2B0fjB4g3lnMZz%2BIrPkA%2Bl%2BWA0qEa9tWGh1CI4z0pfT7NK1oCmih3EoMkCgMrRcmwntYklE5Q7TUuRANxpsjEeDLvy14pDZhhpUHim9kjFUaEbMJR7pETN6wlhsvmgC48STTLbiwBLLUDbkvE%2BlQ0hVPkt70cJt%2FVZKQfCmaFRa2FXXRQxTG9gN2qBQdBEwHoezXjdOmh621PlpyBRWCJmrX6DN24iN2qIMWuSwTRn2IsXR61uwFoqR0rR13EG%2BoGrFmG7mi3E53HpJwjZFJeTv1mtCeKhwcVaOxX7WNhrLrUaaWz9UdwltmLSI5%2Bpg3GxxG7G17Vm923isC4iplhQRJIZa7E24wBvm227diaA5T9Epvvi8dof4BTUvbbNfP7PQLPGJO09NuXuB1e6kCwfOkEOKwe%2FFR4kcRitM0AbPat8coQmxdR7v7JtgAN1mhdBcmRFTMS4DGsy56PcUHyt7cZdo08rNhJFN3eOwBS%2FtDfQfrr%2BANl7EzckUdjCvrDfGQanrBlMSE66A%2FPqkjx67bEDXi3vjkYug%2FsTGVNB6x5Sye7QVFFms8SuRPxtc2ko1YotoekOs7o6%2FgV3V%2F4HpoYZz0sF9PMwQBGcRiXUUMOLD8sUGOqUBq066jj%2BWsohcLQ3t8Vr62unX5vtWmexHbiNpDkJMc9N0yH%2Fr5zRMJnIotZ5aNGiFHdtcrF2gm6GpPLZWrOUtCaMDUFCjAgB%2FHntYg0K9LfNVas504c1g79VQSlIflzy2N5FVg6kvONLpwU02XpVMTu8tUIN06vKMHgscGyn8emYc9GDvGbmQ1FTI8z5hPTGxIIFF2LeQtz2XTy2Tav3cNz5XomeT&X-Amz-Signature=c188f0c015cb2adbff5c8340b7bd8d735df7746b6d918e27ed3a4696f155e7aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLPPTVFV%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGtv5H0dXnDFeZAZP%2BIoL90gekkbbt7uCAkNCaCiEpB0AiEAzYlyKq7e1b1vdw%2BbBNuHGULKESpXBuHEtoBevNE7a40qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNi9Cs9OU7vDXEkz2SrcA8QC60pq11KVjmVPF8%2B0fjB4g3lnMZz%2BIrPkA%2Bl%2BWA0qEa9tWGh1CI4z0pfT7NK1oCmih3EoMkCgMrRcmwntYklE5Q7TUuRANxpsjEeDLvy14pDZhhpUHim9kjFUaEbMJR7pETN6wlhsvmgC48STTLbiwBLLUDbkvE%2BlQ0hVPkt70cJt%2FVZKQfCmaFRa2FXXRQxTG9gN2qBQdBEwHoezXjdOmh621PlpyBRWCJmrX6DN24iN2qIMWuSwTRn2IsXR61uwFoqR0rR13EG%2BoGrFmG7mi3E53HpJwjZFJeTv1mtCeKhwcVaOxX7WNhrLrUaaWz9UdwltmLSI5%2Bpg3GxxG7G17Vm923isC4iplhQRJIZa7E24wBvm227diaA5T9Epvvi8dof4BTUvbbNfP7PQLPGJO09NuXuB1e6kCwfOkEOKwe%2FFR4kcRitM0AbPat8coQmxdR7v7JtgAN1mhdBcmRFTMS4DGsy56PcUHyt7cZdo08rNhJFN3eOwBS%2FtDfQfrr%2BANl7EzckUdjCvrDfGQanrBlMSE66A%2FPqkjx67bEDXi3vjkYug%2FsTGVNB6x5Sye7QVFFms8SuRPxtc2ko1YotoekOs7o6%2FgV3V%2F4HpoYZz0sF9PMwQBGcRiXUUMOLD8sUGOqUBq066jj%2BWsohcLQ3t8Vr62unX5vtWmexHbiNpDkJMc9N0yH%2Fr5zRMJnIotZ5aNGiFHdtcrF2gm6GpPLZWrOUtCaMDUFCjAgB%2FHntYg0K9LfNVas504c1g79VQSlIflzy2N5FVg6kvONLpwU02XpVMTu8tUIN06vKMHgscGyn8emYc9GDvGbmQ1FTI8z5hPTGxIIFF2LeQtz2XTy2Tav3cNz5XomeT&X-Amz-Signature=fe14b45aff99e994284e86f36c0145793fce05f7b4016977b6d8cd082f5dfdea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLPPTVFV%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGtv5H0dXnDFeZAZP%2BIoL90gekkbbt7uCAkNCaCiEpB0AiEAzYlyKq7e1b1vdw%2BbBNuHGULKESpXBuHEtoBevNE7a40qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNi9Cs9OU7vDXEkz2SrcA8QC60pq11KVjmVPF8%2B0fjB4g3lnMZz%2BIrPkA%2Bl%2BWA0qEa9tWGh1CI4z0pfT7NK1oCmih3EoMkCgMrRcmwntYklE5Q7TUuRANxpsjEeDLvy14pDZhhpUHim9kjFUaEbMJR7pETN6wlhsvmgC48STTLbiwBLLUDbkvE%2BlQ0hVPkt70cJt%2FVZKQfCmaFRa2FXXRQxTG9gN2qBQdBEwHoezXjdOmh621PlpyBRWCJmrX6DN24iN2qIMWuSwTRn2IsXR61uwFoqR0rR13EG%2BoGrFmG7mi3E53HpJwjZFJeTv1mtCeKhwcVaOxX7WNhrLrUaaWz9UdwltmLSI5%2Bpg3GxxG7G17Vm923isC4iplhQRJIZa7E24wBvm227diaA5T9Epvvi8dof4BTUvbbNfP7PQLPGJO09NuXuB1e6kCwfOkEOKwe%2FFR4kcRitM0AbPat8coQmxdR7v7JtgAN1mhdBcmRFTMS4DGsy56PcUHyt7cZdo08rNhJFN3eOwBS%2FtDfQfrr%2BANl7EzckUdjCvrDfGQanrBlMSE66A%2FPqkjx67bEDXi3vjkYug%2FsTGVNB6x5Sye7QVFFms8SuRPxtc2ko1YotoekOs7o6%2FgV3V%2F4HpoYZz0sF9PMwQBGcRiXUUMOLD8sUGOqUBq066jj%2BWsohcLQ3t8Vr62unX5vtWmexHbiNpDkJMc9N0yH%2Fr5zRMJnIotZ5aNGiFHdtcrF2gm6GpPLZWrOUtCaMDUFCjAgB%2FHntYg0K9LfNVas504c1g79VQSlIflzy2N5FVg6kvONLpwU02XpVMTu8tUIN06vKMHgscGyn8emYc9GDvGbmQ1FTI8z5hPTGxIIFF2LeQtz2XTy2Tav3cNz5XomeT&X-Amz-Signature=6afe05ff7b6919b64df5faada445cb6120d5bd0876672b489e68e4eda92d1a4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLPPTVFV%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGtv5H0dXnDFeZAZP%2BIoL90gekkbbt7uCAkNCaCiEpB0AiEAzYlyKq7e1b1vdw%2BbBNuHGULKESpXBuHEtoBevNE7a40qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNi9Cs9OU7vDXEkz2SrcA8QC60pq11KVjmVPF8%2B0fjB4g3lnMZz%2BIrPkA%2Bl%2BWA0qEa9tWGh1CI4z0pfT7NK1oCmih3EoMkCgMrRcmwntYklE5Q7TUuRANxpsjEeDLvy14pDZhhpUHim9kjFUaEbMJR7pETN6wlhsvmgC48STTLbiwBLLUDbkvE%2BlQ0hVPkt70cJt%2FVZKQfCmaFRa2FXXRQxTG9gN2qBQdBEwHoezXjdOmh621PlpyBRWCJmrX6DN24iN2qIMWuSwTRn2IsXR61uwFoqR0rR13EG%2BoGrFmG7mi3E53HpJwjZFJeTv1mtCeKhwcVaOxX7WNhrLrUaaWz9UdwltmLSI5%2Bpg3GxxG7G17Vm923isC4iplhQRJIZa7E24wBvm227diaA5T9Epvvi8dof4BTUvbbNfP7PQLPGJO09NuXuB1e6kCwfOkEOKwe%2FFR4kcRitM0AbPat8coQmxdR7v7JtgAN1mhdBcmRFTMS4DGsy56PcUHyt7cZdo08rNhJFN3eOwBS%2FtDfQfrr%2BANl7EzckUdjCvrDfGQanrBlMSE66A%2FPqkjx67bEDXi3vjkYug%2FsTGVNB6x5Sye7QVFFms8SuRPxtc2ko1YotoekOs7o6%2FgV3V%2F4HpoYZz0sF9PMwQBGcRiXUUMOLD8sUGOqUBq066jj%2BWsohcLQ3t8Vr62unX5vtWmexHbiNpDkJMc9N0yH%2Fr5zRMJnIotZ5aNGiFHdtcrF2gm6GpPLZWrOUtCaMDUFCjAgB%2FHntYg0K9LfNVas504c1g79VQSlIflzy2N5FVg6kvONLpwU02XpVMTu8tUIN06vKMHgscGyn8emYc9GDvGbmQ1FTI8z5hPTGxIIFF2LeQtz2XTy2Tav3cNz5XomeT&X-Amz-Signature=e690a75c2222320745ed45e8049f1721e0031afaf7ffca326e076fe1c4682abc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLPPTVFV%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGtv5H0dXnDFeZAZP%2BIoL90gekkbbt7uCAkNCaCiEpB0AiEAzYlyKq7e1b1vdw%2BbBNuHGULKESpXBuHEtoBevNE7a40qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNi9Cs9OU7vDXEkz2SrcA8QC60pq11KVjmVPF8%2B0fjB4g3lnMZz%2BIrPkA%2Bl%2BWA0qEa9tWGh1CI4z0pfT7NK1oCmih3EoMkCgMrRcmwntYklE5Q7TUuRANxpsjEeDLvy14pDZhhpUHim9kjFUaEbMJR7pETN6wlhsvmgC48STTLbiwBLLUDbkvE%2BlQ0hVPkt70cJt%2FVZKQfCmaFRa2FXXRQxTG9gN2qBQdBEwHoezXjdOmh621PlpyBRWCJmrX6DN24iN2qIMWuSwTRn2IsXR61uwFoqR0rR13EG%2BoGrFmG7mi3E53HpJwjZFJeTv1mtCeKhwcVaOxX7WNhrLrUaaWz9UdwltmLSI5%2Bpg3GxxG7G17Vm923isC4iplhQRJIZa7E24wBvm227diaA5T9Epvvi8dof4BTUvbbNfP7PQLPGJO09NuXuB1e6kCwfOkEOKwe%2FFR4kcRitM0AbPat8coQmxdR7v7JtgAN1mhdBcmRFTMS4DGsy56PcUHyt7cZdo08rNhJFN3eOwBS%2FtDfQfrr%2BANl7EzckUdjCvrDfGQanrBlMSE66A%2FPqkjx67bEDXi3vjkYug%2FsTGVNB6x5Sye7QVFFms8SuRPxtc2ko1YotoekOs7o6%2FgV3V%2F4HpoYZz0sF9PMwQBGcRiXUUMOLD8sUGOqUBq066jj%2BWsohcLQ3t8Vr62unX5vtWmexHbiNpDkJMc9N0yH%2Fr5zRMJnIotZ5aNGiFHdtcrF2gm6GpPLZWrOUtCaMDUFCjAgB%2FHntYg0K9LfNVas504c1g79VQSlIflzy2N5FVg6kvONLpwU02XpVMTu8tUIN06vKMHgscGyn8emYc9GDvGbmQ1FTI8z5hPTGxIIFF2LeQtz2XTy2Tav3cNz5XomeT&X-Amz-Signature=7df3764189dee7a5603cde1bea427ad5a2f8e54102ffb65212a5bdfac4b4fddb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}


#### Params:

| **Name**          | **Type**             |
| ----------------- | -------------------- |
| `serial_port`     | string               |
| `serial_baudrate` | int (model specific) |
| `frame_id`        | string               |
| `scan_mode`       | string               |

#### description:

publishes the `/scan` topic for RPLIDAR products

[official docs link](https://github.com/Slamtec/rplidar_ros/tree/ros2#slamtec-lidar-ros2-package)

{{% /alert %}}

Remember to disable gazebo nodes for physical setup

```python "5-5","10-13"

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
  <summary>{{< markdownify >}}Finding Lidar USB port:{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLPPTVFV%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGtv5H0dXnDFeZAZP%2BIoL90gekkbbt7uCAkNCaCiEpB0AiEAzYlyKq7e1b1vdw%2BbBNuHGULKESpXBuHEtoBevNE7a40qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNi9Cs9OU7vDXEkz2SrcA8QC60pq11KVjmVPF8%2B0fjB4g3lnMZz%2BIrPkA%2Bl%2BWA0qEa9tWGh1CI4z0pfT7NK1oCmih3EoMkCgMrRcmwntYklE5Q7TUuRANxpsjEeDLvy14pDZhhpUHim9kjFUaEbMJR7pETN6wlhsvmgC48STTLbiwBLLUDbkvE%2BlQ0hVPkt70cJt%2FVZKQfCmaFRa2FXXRQxTG9gN2qBQdBEwHoezXjdOmh621PlpyBRWCJmrX6DN24iN2qIMWuSwTRn2IsXR61uwFoqR0rR13EG%2BoGrFmG7mi3E53HpJwjZFJeTv1mtCeKhwcVaOxX7WNhrLrUaaWz9UdwltmLSI5%2Bpg3GxxG7G17Vm923isC4iplhQRJIZa7E24wBvm227diaA5T9Epvvi8dof4BTUvbbNfP7PQLPGJO09NuXuB1e6kCwfOkEOKwe%2FFR4kcRitM0AbPat8coQmxdR7v7JtgAN1mhdBcmRFTMS4DGsy56PcUHyt7cZdo08rNhJFN3eOwBS%2FtDfQfrr%2BANl7EzckUdjCvrDfGQanrBlMSE66A%2FPqkjx67bEDXi3vjkYug%2FsTGVNB6x5Sye7QVFFms8SuRPxtc2ko1YotoekOs7o6%2FgV3V%2F4HpoYZz0sF9PMwQBGcRiXUUMOLD8sUGOqUBq066jj%2BWsohcLQ3t8Vr62unX5vtWmexHbiNpDkJMc9N0yH%2Fr5zRMJnIotZ5aNGiFHdtcrF2gm6GpPLZWrOUtCaMDUFCjAgB%2FHntYg0K9LfNVas504c1g79VQSlIflzy2N5FVg6kvONLpwU02XpVMTu8tUIN06vKMHgscGyn8emYc9GDvGbmQ1FTI8z5hPTGxIIFF2LeQtz2XTy2Tav3cNz5XomeT&X-Amz-Signature=5df34fd32d603642f44cc0c9a5b47f9659d9bebc6f708c5262e9be040a2d297d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLPPTVFV%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGtv5H0dXnDFeZAZP%2BIoL90gekkbbt7uCAkNCaCiEpB0AiEAzYlyKq7e1b1vdw%2BbBNuHGULKESpXBuHEtoBevNE7a40qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNi9Cs9OU7vDXEkz2SrcA8QC60pq11KVjmVPF8%2B0fjB4g3lnMZz%2BIrPkA%2Bl%2BWA0qEa9tWGh1CI4z0pfT7NK1oCmih3EoMkCgMrRcmwntYklE5Q7TUuRANxpsjEeDLvy14pDZhhpUHim9kjFUaEbMJR7pETN6wlhsvmgC48STTLbiwBLLUDbkvE%2BlQ0hVPkt70cJt%2FVZKQfCmaFRa2FXXRQxTG9gN2qBQdBEwHoezXjdOmh621PlpyBRWCJmrX6DN24iN2qIMWuSwTRn2IsXR61uwFoqR0rR13EG%2BoGrFmG7mi3E53HpJwjZFJeTv1mtCeKhwcVaOxX7WNhrLrUaaWz9UdwltmLSI5%2Bpg3GxxG7G17Vm923isC4iplhQRJIZa7E24wBvm227diaA5T9Epvvi8dof4BTUvbbNfP7PQLPGJO09NuXuB1e6kCwfOkEOKwe%2FFR4kcRitM0AbPat8coQmxdR7v7JtgAN1mhdBcmRFTMS4DGsy56PcUHyt7cZdo08rNhJFN3eOwBS%2FtDfQfrr%2BANl7EzckUdjCvrDfGQanrBlMSE66A%2FPqkjx67bEDXi3vjkYug%2FsTGVNB6x5Sye7QVFFms8SuRPxtc2ko1YotoekOs7o6%2FgV3V%2F4HpoYZz0sF9PMwQBGcRiXUUMOLD8sUGOqUBq066jj%2BWsohcLQ3t8Vr62unX5vtWmexHbiNpDkJMc9N0yH%2Fr5zRMJnIotZ5aNGiFHdtcrF2gm6GpPLZWrOUtCaMDUFCjAgB%2FHntYg0K9LfNVas504c1g79VQSlIflzy2N5FVg6kvONLpwU02XpVMTu8tUIN06vKMHgscGyn8emYc9GDvGbmQ1FTI8z5hPTGxIIFF2LeQtz2XTy2Tav3cNz5XomeT&X-Amz-Signature=c188f0c015cb2adbff5c8340b7bd8d735df7746b6d918e27ed3a4696f155e7aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Adding RPLidar to launch

idk tell them to look at the launch file to see which exact prams to put in

```python "5-14","30-30"

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
