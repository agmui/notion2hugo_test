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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ULRZA6J%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIBcv%2F78R2eb5XLH7snqmUpbpvl8ZIQBjSui66tjZwwYyAiEA%2BSS7DNYwyWkBFv4xdUNhSDxnJ7FKOkY5tesdIHV94c8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDFrxq%2FzI9z65AlazaSrcA5%2FB7R4WaXfHa2B0ZX6o7AqHp0W8sYF6dLvNEva0MObvp0r20zliDSMPBGY4UFzi%2B3FAyF9XTXPwaqGr4uKW6mgsQLwOIN2mM%2BeoM7zGFmNZwBUKo3hMpFxgmNBpBdIsZNvzZZhC0O5GQ9WD25Rx2zYyLTNWkMk17mtQT8Zz%2FLMPmMf%2FVIPfg1wHP7lyFT96c6IqoQERnWVrRkS%2F%2BvVt3dmcUISN0s6dZ%2Bzk1rkfmflF1jIdeCjVmtg6Y%2FEuXQHU8spbhLErr4Oc5a4vX9vYPWuwOiB0f%2FZPCbYEnQLfFUY1Fk1XkHIReVYERAPHhIyIO2Jclesxcs7JVl4t12BHRDZeTtDLh8lVeXDrhLoeSbnOC1GRcgPg1GumbyWbDUpDi%2BSpQoBQ6eswZlci%2Bk5gQAqzg1oBr%2FKTK6vjyvP%2BWYrgV7LUvUIOvmj2wEuzlono%2BdxVgFOmUvmi%2FHQi6dRbY001fa9DsD46NCJ5TMBizEqRKrDBpCc21Q%2Fc3jnIh%2Fm17GBAxlMzpGrFu4oKBhRG59O3TQkzuu%2Bk%2BWym8VLpbIwSOq9FaSlJ8cCasPuoza6WYVgNbE5bNXRDHPPvqHcMp6zCeKJ7c2insothyGD0dr1MPhtiyrKflg8GdmB9MOn4w8QGOqUBxdHQDQuox5j12SNnoBptYb9UXnbcPdrCLbIHnn%2F3QTnw0ZWH%2Bb7rhiXjg6YzP529n1ppbQVRSDo9jGxAvk6dCAjAtw%2F5gbVkTMA3Wbtjnb8ML2YuNTH4hbDC%2F2d49%2FC%2F%2F6LlhYfZCQ3h1NjDqMFrJKP2W7ndyDI7vMfi8e66hWrrcRG3aDyuAy4eS4BbQSA9MnwyKKzR37qH7FCZXsn%2BHv%2B%2Bul5D&X-Amz-Signature=b75314e6db1ada4c6b38a3c7122649fef9947ba558e311f9a13227733b7c77cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIVOACFD%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQC36MjSUEa1lL2zJDX8h%2BqPUpQobDChtAU0guMiD3ToxgIgakJEsmMHE%2BnUDvNBIGcW0UalVPqkhboYtxuYP6CWXU4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDL3YOS9NjcZrtBoIEyrcAy3ZqzwrEOPUMdglFob9F2RD2Wv%2F5om7u8mESesRQOXAEv15Ai7qXLzEQVEBH3Jqi2CdkCcWb6tUY0cBJ9g7hLLRtGtPnXPeXJxPDSvkZ1%2BmPF2KkdCh1HlxQFNqWKsB7HuP2X%2FdfeoI1yxUcaKo8LCPjHeAj45xaV%2BrLSjYljvwOHMbO0X0NhDofNzqRdLRJcWfx1WhUmM2EEghYNLrA5jsxpSfWZU38GbjHWwFRR7pumjJ1LFa4oYRx64t4Ji6dFLSHVcJHdLvEwcD7pYfZqIqhfHCJffVOUn2cQzbaiy%2BtYucXp2Xp8QL8KnENRevp%2BQ7aYFgjISfY%2F5TDMiXeBcv2i4wewMX7X9YvGHWQYwm%2FgEE2Nyhc2ckBxYTAhJJsSKF%2Bnu8OnjMtnYgBgSjcVuhsyCfgnVniOkB%2Biq22VPSDHIlheAwmgF%2BuwzP%2FdSKm1iX6CvBMpsCH6mKo43ttb3VMsa2bSmivN7lYMod1b%2BQwy%2BE%2Fs1mZ0%2Ba3tnkbXDcHBLkr%2FGw8jpS%2BDhzbErzEG1PVoQNbHX9xSEuzD4jr13mZKbt%2BDUnkvinIOhSbRgw4O%2FP1K3mi1lnE2nqmNC8BUey%2BBV2Wn3ZW1wb8dTc5VxOZmsBlSEzaRFvpgyxMOb4w8QGOqUBha5ko2IK9gJ4ODLXts044%2FaT2ZCoFQsjCqgAKpC0f2BcHn1lvHGLrbvop1SnUlTQ2HvLV%2FCyJyOnhoHiDH5QMHrpWTuhAuMFsigr%2FWltVFj6kGxPTSbcvjaEUFMAU8P6aURnVZGbbnppGA%2FDkxiL1FvBQiKL64LFDBXLqZH8eWi1BoiyHaxddxpM7r2oI%2FZqJve%2Fpy1UcGneVLRUCk5VicfHFtX3&X-Amz-Signature=1f589721c9f85d6ad31bf37dac61aad70de1c39873bbd54e516b444a0eb2693c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIVOACFD%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQC36MjSUEa1lL2zJDX8h%2BqPUpQobDChtAU0guMiD3ToxgIgakJEsmMHE%2BnUDvNBIGcW0UalVPqkhboYtxuYP6CWXU4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDL3YOS9NjcZrtBoIEyrcAy3ZqzwrEOPUMdglFob9F2RD2Wv%2F5om7u8mESesRQOXAEv15Ai7qXLzEQVEBH3Jqi2CdkCcWb6tUY0cBJ9g7hLLRtGtPnXPeXJxPDSvkZ1%2BmPF2KkdCh1HlxQFNqWKsB7HuP2X%2FdfeoI1yxUcaKo8LCPjHeAj45xaV%2BrLSjYljvwOHMbO0X0NhDofNzqRdLRJcWfx1WhUmM2EEghYNLrA5jsxpSfWZU38GbjHWwFRR7pumjJ1LFa4oYRx64t4Ji6dFLSHVcJHdLvEwcD7pYfZqIqhfHCJffVOUn2cQzbaiy%2BtYucXp2Xp8QL8KnENRevp%2BQ7aYFgjISfY%2F5TDMiXeBcv2i4wewMX7X9YvGHWQYwm%2FgEE2Nyhc2ckBxYTAhJJsSKF%2Bnu8OnjMtnYgBgSjcVuhsyCfgnVniOkB%2Biq22VPSDHIlheAwmgF%2BuwzP%2FdSKm1iX6CvBMpsCH6mKo43ttb3VMsa2bSmivN7lYMod1b%2BQwy%2BE%2Fs1mZ0%2Ba3tnkbXDcHBLkr%2FGw8jpS%2BDhzbErzEG1PVoQNbHX9xSEuzD4jr13mZKbt%2BDUnkvinIOhSbRgw4O%2FP1K3mi1lnE2nqmNC8BUey%2BBV2Wn3ZW1wb8dTc5VxOZmsBlSEzaRFvpgyxMOb4w8QGOqUBha5ko2IK9gJ4ODLXts044%2FaT2ZCoFQsjCqgAKpC0f2BcHn1lvHGLrbvop1SnUlTQ2HvLV%2FCyJyOnhoHiDH5QMHrpWTuhAuMFsigr%2FWltVFj6kGxPTSbcvjaEUFMAU8P6aURnVZGbbnppGA%2FDkxiL1FvBQiKL64LFDBXLqZH8eWi1BoiyHaxddxpM7r2oI%2FZqJve%2Fpy1UcGneVLRUCk5VicfHFtX3&X-Amz-Signature=5ab26372662da3f62c7e165e81adeede726438ca8309d259f07b8be7c2920001&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIVOACFD%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQC36MjSUEa1lL2zJDX8h%2BqPUpQobDChtAU0guMiD3ToxgIgakJEsmMHE%2BnUDvNBIGcW0UalVPqkhboYtxuYP6CWXU4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDL3YOS9NjcZrtBoIEyrcAy3ZqzwrEOPUMdglFob9F2RD2Wv%2F5om7u8mESesRQOXAEv15Ai7qXLzEQVEBH3Jqi2CdkCcWb6tUY0cBJ9g7hLLRtGtPnXPeXJxPDSvkZ1%2BmPF2KkdCh1HlxQFNqWKsB7HuP2X%2FdfeoI1yxUcaKo8LCPjHeAj45xaV%2BrLSjYljvwOHMbO0X0NhDofNzqRdLRJcWfx1WhUmM2EEghYNLrA5jsxpSfWZU38GbjHWwFRR7pumjJ1LFa4oYRx64t4Ji6dFLSHVcJHdLvEwcD7pYfZqIqhfHCJffVOUn2cQzbaiy%2BtYucXp2Xp8QL8KnENRevp%2BQ7aYFgjISfY%2F5TDMiXeBcv2i4wewMX7X9YvGHWQYwm%2FgEE2Nyhc2ckBxYTAhJJsSKF%2Bnu8OnjMtnYgBgSjcVuhsyCfgnVniOkB%2Biq22VPSDHIlheAwmgF%2BuwzP%2FdSKm1iX6CvBMpsCH6mKo43ttb3VMsa2bSmivN7lYMod1b%2BQwy%2BE%2Fs1mZ0%2Ba3tnkbXDcHBLkr%2FGw8jpS%2BDhzbErzEG1PVoQNbHX9xSEuzD4jr13mZKbt%2BDUnkvinIOhSbRgw4O%2FP1K3mi1lnE2nqmNC8BUey%2BBV2Wn3ZW1wb8dTc5VxOZmsBlSEzaRFvpgyxMOb4w8QGOqUBha5ko2IK9gJ4ODLXts044%2FaT2ZCoFQsjCqgAKpC0f2BcHn1lvHGLrbvop1SnUlTQ2HvLV%2FCyJyOnhoHiDH5QMHrpWTuhAuMFsigr%2FWltVFj6kGxPTSbcvjaEUFMAU8P6aURnVZGbbnppGA%2FDkxiL1FvBQiKL64LFDBXLqZH8eWi1BoiyHaxddxpM7r2oI%2FZqJve%2Fpy1UcGneVLRUCk5VicfHFtX3&X-Amz-Signature=f17a984ae4c3da6523ad63f16355f98272882faa8d0fba1dffab15ef90316787&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIVOACFD%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQC36MjSUEa1lL2zJDX8h%2BqPUpQobDChtAU0guMiD3ToxgIgakJEsmMHE%2BnUDvNBIGcW0UalVPqkhboYtxuYP6CWXU4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDL3YOS9NjcZrtBoIEyrcAy3ZqzwrEOPUMdglFob9F2RD2Wv%2F5om7u8mESesRQOXAEv15Ai7qXLzEQVEBH3Jqi2CdkCcWb6tUY0cBJ9g7hLLRtGtPnXPeXJxPDSvkZ1%2BmPF2KkdCh1HlxQFNqWKsB7HuP2X%2FdfeoI1yxUcaKo8LCPjHeAj45xaV%2BrLSjYljvwOHMbO0X0NhDofNzqRdLRJcWfx1WhUmM2EEghYNLrA5jsxpSfWZU38GbjHWwFRR7pumjJ1LFa4oYRx64t4Ji6dFLSHVcJHdLvEwcD7pYfZqIqhfHCJffVOUn2cQzbaiy%2BtYucXp2Xp8QL8KnENRevp%2BQ7aYFgjISfY%2F5TDMiXeBcv2i4wewMX7X9YvGHWQYwm%2FgEE2Nyhc2ckBxYTAhJJsSKF%2Bnu8OnjMtnYgBgSjcVuhsyCfgnVniOkB%2Biq22VPSDHIlheAwmgF%2BuwzP%2FdSKm1iX6CvBMpsCH6mKo43ttb3VMsa2bSmivN7lYMod1b%2BQwy%2BE%2Fs1mZ0%2Ba3tnkbXDcHBLkr%2FGw8jpS%2BDhzbErzEG1PVoQNbHX9xSEuzD4jr13mZKbt%2BDUnkvinIOhSbRgw4O%2FP1K3mi1lnE2nqmNC8BUey%2BBV2Wn3ZW1wb8dTc5VxOZmsBlSEzaRFvpgyxMOb4w8QGOqUBha5ko2IK9gJ4ODLXts044%2FaT2ZCoFQsjCqgAKpC0f2BcHn1lvHGLrbvop1SnUlTQ2HvLV%2FCyJyOnhoHiDH5QMHrpWTuhAuMFsigr%2FWltVFj6kGxPTSbcvjaEUFMAU8P6aURnVZGbbnppGA%2FDkxiL1FvBQiKL64LFDBXLqZH8eWi1BoiyHaxddxpM7r2oI%2FZqJve%2Fpy1UcGneVLRUCk5VicfHFtX3&X-Amz-Signature=545927648eaaade4825121e53c6235d4c1f022784a29194ca83127226da8542f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIVOACFD%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQC36MjSUEa1lL2zJDX8h%2BqPUpQobDChtAU0guMiD3ToxgIgakJEsmMHE%2BnUDvNBIGcW0UalVPqkhboYtxuYP6CWXU4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDL3YOS9NjcZrtBoIEyrcAy3ZqzwrEOPUMdglFob9F2RD2Wv%2F5om7u8mESesRQOXAEv15Ai7qXLzEQVEBH3Jqi2CdkCcWb6tUY0cBJ9g7hLLRtGtPnXPeXJxPDSvkZ1%2BmPF2KkdCh1HlxQFNqWKsB7HuP2X%2FdfeoI1yxUcaKo8LCPjHeAj45xaV%2BrLSjYljvwOHMbO0X0NhDofNzqRdLRJcWfx1WhUmM2EEghYNLrA5jsxpSfWZU38GbjHWwFRR7pumjJ1LFa4oYRx64t4Ji6dFLSHVcJHdLvEwcD7pYfZqIqhfHCJffVOUn2cQzbaiy%2BtYucXp2Xp8QL8KnENRevp%2BQ7aYFgjISfY%2F5TDMiXeBcv2i4wewMX7X9YvGHWQYwm%2FgEE2Nyhc2ckBxYTAhJJsSKF%2Bnu8OnjMtnYgBgSjcVuhsyCfgnVniOkB%2Biq22VPSDHIlheAwmgF%2BuwzP%2FdSKm1iX6CvBMpsCH6mKo43ttb3VMsa2bSmivN7lYMod1b%2BQwy%2BE%2Fs1mZ0%2Ba3tnkbXDcHBLkr%2FGw8jpS%2BDhzbErzEG1PVoQNbHX9xSEuzD4jr13mZKbt%2BDUnkvinIOhSbRgw4O%2FP1K3mi1lnE2nqmNC8BUey%2BBV2Wn3ZW1wb8dTc5VxOZmsBlSEzaRFvpgyxMOb4w8QGOqUBha5ko2IK9gJ4ODLXts044%2FaT2ZCoFQsjCqgAKpC0f2BcHn1lvHGLrbvop1SnUlTQ2HvLV%2FCyJyOnhoHiDH5QMHrpWTuhAuMFsigr%2FWltVFj6kGxPTSbcvjaEUFMAU8P6aURnVZGbbnppGA%2FDkxiL1FvBQiKL64LFDBXLqZH8eWi1BoiyHaxddxpM7r2oI%2FZqJve%2Fpy1UcGneVLRUCk5VicfHFtX3&X-Amz-Signature=db11d8f6b508adbe935bd4a32ec2c1cfe45391fb136bb94a9982ea7b84842e10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIVOACFD%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQC36MjSUEa1lL2zJDX8h%2BqPUpQobDChtAU0guMiD3ToxgIgakJEsmMHE%2BnUDvNBIGcW0UalVPqkhboYtxuYP6CWXU4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDL3YOS9NjcZrtBoIEyrcAy3ZqzwrEOPUMdglFob9F2RD2Wv%2F5om7u8mESesRQOXAEv15Ai7qXLzEQVEBH3Jqi2CdkCcWb6tUY0cBJ9g7hLLRtGtPnXPeXJxPDSvkZ1%2BmPF2KkdCh1HlxQFNqWKsB7HuP2X%2FdfeoI1yxUcaKo8LCPjHeAj45xaV%2BrLSjYljvwOHMbO0X0NhDofNzqRdLRJcWfx1WhUmM2EEghYNLrA5jsxpSfWZU38GbjHWwFRR7pumjJ1LFa4oYRx64t4Ji6dFLSHVcJHdLvEwcD7pYfZqIqhfHCJffVOUn2cQzbaiy%2BtYucXp2Xp8QL8KnENRevp%2BQ7aYFgjISfY%2F5TDMiXeBcv2i4wewMX7X9YvGHWQYwm%2FgEE2Nyhc2ckBxYTAhJJsSKF%2Bnu8OnjMtnYgBgSjcVuhsyCfgnVniOkB%2Biq22VPSDHIlheAwmgF%2BuwzP%2FdSKm1iX6CvBMpsCH6mKo43ttb3VMsa2bSmivN7lYMod1b%2BQwy%2BE%2Fs1mZ0%2Ba3tnkbXDcHBLkr%2FGw8jpS%2BDhzbErzEG1PVoQNbHX9xSEuzD4jr13mZKbt%2BDUnkvinIOhSbRgw4O%2FP1K3mi1lnE2nqmNC8BUey%2BBV2Wn3ZW1wb8dTc5VxOZmsBlSEzaRFvpgyxMOb4w8QGOqUBha5ko2IK9gJ4ODLXts044%2FaT2ZCoFQsjCqgAKpC0f2BcHn1lvHGLrbvop1SnUlTQ2HvLV%2FCyJyOnhoHiDH5QMHrpWTuhAuMFsigr%2FWltVFj6kGxPTSbcvjaEUFMAU8P6aURnVZGbbnppGA%2FDkxiL1FvBQiKL64LFDBXLqZH8eWi1BoiyHaxddxpM7r2oI%2FZqJve%2Fpy1UcGneVLRUCk5VicfHFtX3&X-Amz-Signature=6b878428662107002fbd8996b16cfd9ecfa353f2a59a09537873807485e8b529&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIVOACFD%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQC36MjSUEa1lL2zJDX8h%2BqPUpQobDChtAU0guMiD3ToxgIgakJEsmMHE%2BnUDvNBIGcW0UalVPqkhboYtxuYP6CWXU4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDL3YOS9NjcZrtBoIEyrcAy3ZqzwrEOPUMdglFob9F2RD2Wv%2F5om7u8mESesRQOXAEv15Ai7qXLzEQVEBH3Jqi2CdkCcWb6tUY0cBJ9g7hLLRtGtPnXPeXJxPDSvkZ1%2BmPF2KkdCh1HlxQFNqWKsB7HuP2X%2FdfeoI1yxUcaKo8LCPjHeAj45xaV%2BrLSjYljvwOHMbO0X0NhDofNzqRdLRJcWfx1WhUmM2EEghYNLrA5jsxpSfWZU38GbjHWwFRR7pumjJ1LFa4oYRx64t4Ji6dFLSHVcJHdLvEwcD7pYfZqIqhfHCJffVOUn2cQzbaiy%2BtYucXp2Xp8QL8KnENRevp%2BQ7aYFgjISfY%2F5TDMiXeBcv2i4wewMX7X9YvGHWQYwm%2FgEE2Nyhc2ckBxYTAhJJsSKF%2Bnu8OnjMtnYgBgSjcVuhsyCfgnVniOkB%2Biq22VPSDHIlheAwmgF%2BuwzP%2FdSKm1iX6CvBMpsCH6mKo43ttb3VMsa2bSmivN7lYMod1b%2BQwy%2BE%2Fs1mZ0%2Ba3tnkbXDcHBLkr%2FGw8jpS%2BDhzbErzEG1PVoQNbHX9xSEuzD4jr13mZKbt%2BDUnkvinIOhSbRgw4O%2FP1K3mi1lnE2nqmNC8BUey%2BBV2Wn3ZW1wb8dTc5VxOZmsBlSEzaRFvpgyxMOb4w8QGOqUBha5ko2IK9gJ4ODLXts044%2FaT2ZCoFQsjCqgAKpC0f2BcHn1lvHGLrbvop1SnUlTQ2HvLV%2FCyJyOnhoHiDH5QMHrpWTuhAuMFsigr%2FWltVFj6kGxPTSbcvjaEUFMAU8P6aURnVZGbbnppGA%2FDkxiL1FvBQiKL64LFDBXLqZH8eWi1BoiyHaxddxpM7r2oI%2FZqJve%2Fpy1UcGneVLRUCk5VicfHFtX3&X-Amz-Signature=f191bf865ad1d1c56bf7dd4fc2bbed6572d8386803c04c2fded2c9408e304117&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIVOACFD%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQC36MjSUEa1lL2zJDX8h%2BqPUpQobDChtAU0guMiD3ToxgIgakJEsmMHE%2BnUDvNBIGcW0UalVPqkhboYtxuYP6CWXU4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDL3YOS9NjcZrtBoIEyrcAy3ZqzwrEOPUMdglFob9F2RD2Wv%2F5om7u8mESesRQOXAEv15Ai7qXLzEQVEBH3Jqi2CdkCcWb6tUY0cBJ9g7hLLRtGtPnXPeXJxPDSvkZ1%2BmPF2KkdCh1HlxQFNqWKsB7HuP2X%2FdfeoI1yxUcaKo8LCPjHeAj45xaV%2BrLSjYljvwOHMbO0X0NhDofNzqRdLRJcWfx1WhUmM2EEghYNLrA5jsxpSfWZU38GbjHWwFRR7pumjJ1LFa4oYRx64t4Ji6dFLSHVcJHdLvEwcD7pYfZqIqhfHCJffVOUn2cQzbaiy%2BtYucXp2Xp8QL8KnENRevp%2BQ7aYFgjISfY%2F5TDMiXeBcv2i4wewMX7X9YvGHWQYwm%2FgEE2Nyhc2ckBxYTAhJJsSKF%2Bnu8OnjMtnYgBgSjcVuhsyCfgnVniOkB%2Biq22VPSDHIlheAwmgF%2BuwzP%2FdSKm1iX6CvBMpsCH6mKo43ttb3VMsa2bSmivN7lYMod1b%2BQwy%2BE%2Fs1mZ0%2Ba3tnkbXDcHBLkr%2FGw8jpS%2BDhzbErzEG1PVoQNbHX9xSEuzD4jr13mZKbt%2BDUnkvinIOhSbRgw4O%2FP1K3mi1lnE2nqmNC8BUey%2BBV2Wn3ZW1wb8dTc5VxOZmsBlSEzaRFvpgyxMOb4w8QGOqUBha5ko2IK9gJ4ODLXts044%2FaT2ZCoFQsjCqgAKpC0f2BcHn1lvHGLrbvop1SnUlTQ2HvLV%2FCyJyOnhoHiDH5QMHrpWTuhAuMFsigr%2FWltVFj6kGxPTSbcvjaEUFMAU8P6aURnVZGbbnppGA%2FDkxiL1FvBQiKL64LFDBXLqZH8eWi1BoiyHaxddxpM7r2oI%2FZqJve%2Fpy1UcGneVLRUCk5VicfHFtX3&X-Amz-Signature=dc9d8eee5066e387d7262800c2eca04a6251e9f4a8b53b7772951bcaf04e2402&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIVOACFD%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQC36MjSUEa1lL2zJDX8h%2BqPUpQobDChtAU0guMiD3ToxgIgakJEsmMHE%2BnUDvNBIGcW0UalVPqkhboYtxuYP6CWXU4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDL3YOS9NjcZrtBoIEyrcAy3ZqzwrEOPUMdglFob9F2RD2Wv%2F5om7u8mESesRQOXAEv15Ai7qXLzEQVEBH3Jqi2CdkCcWb6tUY0cBJ9g7hLLRtGtPnXPeXJxPDSvkZ1%2BmPF2KkdCh1HlxQFNqWKsB7HuP2X%2FdfeoI1yxUcaKo8LCPjHeAj45xaV%2BrLSjYljvwOHMbO0X0NhDofNzqRdLRJcWfx1WhUmM2EEghYNLrA5jsxpSfWZU38GbjHWwFRR7pumjJ1LFa4oYRx64t4Ji6dFLSHVcJHdLvEwcD7pYfZqIqhfHCJffVOUn2cQzbaiy%2BtYucXp2Xp8QL8KnENRevp%2BQ7aYFgjISfY%2F5TDMiXeBcv2i4wewMX7X9YvGHWQYwm%2FgEE2Nyhc2ckBxYTAhJJsSKF%2Bnu8OnjMtnYgBgSjcVuhsyCfgnVniOkB%2Biq22VPSDHIlheAwmgF%2BuwzP%2FdSKm1iX6CvBMpsCH6mKo43ttb3VMsa2bSmivN7lYMod1b%2BQwy%2BE%2Fs1mZ0%2Ba3tnkbXDcHBLkr%2FGw8jpS%2BDhzbErzEG1PVoQNbHX9xSEuzD4jr13mZKbt%2BDUnkvinIOhSbRgw4O%2FP1K3mi1lnE2nqmNC8BUey%2BBV2Wn3ZW1wb8dTc5VxOZmsBlSEzaRFvpgyxMOb4w8QGOqUBha5ko2IK9gJ4ODLXts044%2FaT2ZCoFQsjCqgAKpC0f2BcHn1lvHGLrbvop1SnUlTQ2HvLV%2FCyJyOnhoHiDH5QMHrpWTuhAuMFsigr%2FWltVFj6kGxPTSbcvjaEUFMAU8P6aURnVZGbbnppGA%2FDkxiL1FvBQiKL64LFDBXLqZH8eWi1BoiyHaxddxpM7r2oI%2FZqJve%2Fpy1UcGneVLRUCk5VicfHFtX3&X-Amz-Signature=9805edc9f52a83cf0aee348bc02b45062a66c5d76d427a3cf6a9cf6bf8344fdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIVOACFD%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQC36MjSUEa1lL2zJDX8h%2BqPUpQobDChtAU0guMiD3ToxgIgakJEsmMHE%2BnUDvNBIGcW0UalVPqkhboYtxuYP6CWXU4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDL3YOS9NjcZrtBoIEyrcAy3ZqzwrEOPUMdglFob9F2RD2Wv%2F5om7u8mESesRQOXAEv15Ai7qXLzEQVEBH3Jqi2CdkCcWb6tUY0cBJ9g7hLLRtGtPnXPeXJxPDSvkZ1%2BmPF2KkdCh1HlxQFNqWKsB7HuP2X%2FdfeoI1yxUcaKo8LCPjHeAj45xaV%2BrLSjYljvwOHMbO0X0NhDofNzqRdLRJcWfx1WhUmM2EEghYNLrA5jsxpSfWZU38GbjHWwFRR7pumjJ1LFa4oYRx64t4Ji6dFLSHVcJHdLvEwcD7pYfZqIqhfHCJffVOUn2cQzbaiy%2BtYucXp2Xp8QL8KnENRevp%2BQ7aYFgjISfY%2F5TDMiXeBcv2i4wewMX7X9YvGHWQYwm%2FgEE2Nyhc2ckBxYTAhJJsSKF%2Bnu8OnjMtnYgBgSjcVuhsyCfgnVniOkB%2Biq22VPSDHIlheAwmgF%2BuwzP%2FdSKm1iX6CvBMpsCH6mKo43ttb3VMsa2bSmivN7lYMod1b%2BQwy%2BE%2Fs1mZ0%2Ba3tnkbXDcHBLkr%2FGw8jpS%2BDhzbErzEG1PVoQNbHX9xSEuzD4jr13mZKbt%2BDUnkvinIOhSbRgw4O%2FP1K3mi1lnE2nqmNC8BUey%2BBV2Wn3ZW1wb8dTc5VxOZmsBlSEzaRFvpgyxMOb4w8QGOqUBha5ko2IK9gJ4ODLXts044%2FaT2ZCoFQsjCqgAKpC0f2BcHn1lvHGLrbvop1SnUlTQ2HvLV%2FCyJyOnhoHiDH5QMHrpWTuhAuMFsigr%2FWltVFj6kGxPTSbcvjaEUFMAU8P6aURnVZGbbnppGA%2FDkxiL1FvBQiKL64LFDBXLqZH8eWi1BoiyHaxddxpM7r2oI%2FZqJve%2Fpy1UcGneVLRUCk5VicfHFtX3&X-Amz-Signature=545927648eaaade4825121e53c6235d4c1f022784a29194ca83127226da8542f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
