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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NFHDA5R%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHRUDgR99YHbMR80P%2FIasy5duoJvOFD6n22KGdYnyChsAiAm7LmFUOZW8i1qEiX6lzax4xwkHA7iJ7SUTR%2B4p56EdyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS%2BS%2B86oOGhwJArIUKtwDsb2Wey6qCoG4dM%2BV7WRrDwFC73faqBat762f4X0iVHX%2FhOVGN18NamA7gCEZL%2FmqCuU4cm2cGD9U1Ftv6%2B%2BlBT7bjQw5Jcsj7kG%2BKPax7gyk6Srovn1Kf7%2BaJYAczEJ3Iv8vYsoSc%2FGrisfDVvjeQnHX2LW%2FI%2BLg4hnHtFOJGuO6L3haE%2FAdp4g00sZR3qluxZP5wEVOzlu1RGB2B%2F8VGr2I4Y%2FLTUOVchmYD564ztF2yXjOrvJb%2BJXefVY4URYiyN%2F8XJGyTWcZHrH4rxzPmkNGprqFBdjFum%2BPNE5qEpApWhDOX8V4hj7i8oA%2B9Yk2meFfZjPMMwn2vPkQn3sPhy5uFoJkFjWnhUjWNKgn3Yq7cXpgkYd3%2BKpmqH3m%2F2AqDNp9Ujh9hDFKbZ3D7vkVlpLp%2FgO5mMDQisqx16GtzZc4plxWFGZITdMd1rHKzOtSUQLLTl1z4gN%2Fyx%2BK%2B35I3kyFjEPUwFoBeb%2FpxvEgwHvL6ZtwQMLQcK%2B%2BwIRFqIVhWZZTw49j%2FdCv%2FLaVNcHVTntqtNo4Pmjx990jXQ8GCe8SF0V9DocpOgaiMuYXyOIdWnmoFSgafEG5nBayktsgAs5wBwsUC7UePns%2B%2BB%2BrL7FAGqYUK%2FmUSZRuIVMwiMiSygY6pgHeYgFw25RRxCo7%2B4gjcuihs%2BCQ%2BXU4KTWPcuxOwrfRBTUd7Bj39rmugFXAOdYKebQdLtM1m603zf%2FCc031ARrnBiu5%2Fb0oIbBv%2FOv0Drj3gQ8ki4kd%2FsGo5wsg1%2BGTj6IUaOv2vy7inS0GNrzIH5QMDACyY8vNVEzCOYlnOSwtWOaMnTh4ekbS0BTYAF6t5bIfh9cBvbrU61xRyue4bcvnkIBBoyon&X-Amz-Signature=9e92498087192e88c05adf0ceec4a1150a2f86cfdabf246648d8c77d3463aa22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTHSKGWO%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLCHoxVP605VXKjpqWFvlQ8qzbPduk67yMZ6KIbYHrFwIhAMuWWuNfvqQ%2FIsBiCpK6%2B%2FZ49oODZePMmqxCR8xi4NQTKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx76sGRMbDXFhzS3Dgq3APTOy0HVIfoOVJHQzFUcIbALMkdZqq0RnAMinajtVPdHJmjbYmGITpZPNhaJ3KVbJQLO6xAvR039tPUrJ6XT2C7XzRHLEWw9sProukTRcbxOjQ0pK8E0eF8734DC92dNBK6dv555ZU0Q3jINvWZ5QV0UU7gbYlie5KW1kqzRCQaiJfz0njeKhgPnSKcbc%2FIVjKrQy%2F6%2Fh0SwxOVcOwAZhMC7mITs8QT3U1%2FlYPxuPivZXVmEQ%2B6aSbXfaTm3i%2FXYPWemGhjtpFeOstzwmPbz%2BXOpst0TKI%2BVumAE7ED8exXc8v98KYY0%2FT%2BCG%2FQ3l5hEnX2JfaffFII0IWtMiSf8oBUdgdXZ4M2UmxvCEmRWvPIRQZzRO5V5%2FZaA4I7iHm4NJ%2BqEGC0o8QBBvt76JgSbUCBtArR5i5RtD8r53qAa%2BKIM1%2FLww%2FMmq5%2FxfMCiKps0Se%2BjnFxSZtEVm4zpUQEUQksIK7Wcocaxl%2FO9WTdVXUfnrjCQb2u4Zgn206dB4Xb0G3%2FIGFSfXG5Lk79IoI5JTkrd1iZpWs1DVeto9LH4ErO4S%2Bl%2FU21aw4kGDkFYGtnSAKy5tna3sEEnSiqSczZB%2FfSl%2BzHBeg%2Fr6i0NVILyMYQ5TWKzI9BK47pUnPqkjCsyJLKBjqkAWSSPj4%2F4qLrSli0Dy2P%2B2TRx3Fvma4xJArXo%2B4SiBFTMxMsV0M6Iujb%2BtzsoKEFkj2lK2oVnlaCztcDjIk8HtjISNxWZjWVFM6%2BmBEZyvIOegh%2B%2FL%2BCX54ak1GxUo9LzPB6lE%2FADi6nOkvVwmMDILbmIibZ6d8Puk4bODs1%2FGkUP2PvYhsRATzSBfw%2B%2BlxNOn5mbeeRWc%2Bh1%2FuS0L6hgdPjKVKU&X-Amz-Signature=5982eaff9282feabfe0e275ba643ee3c20d38257c1606dbdef567a039e1903d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTHSKGWO%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLCHoxVP605VXKjpqWFvlQ8qzbPduk67yMZ6KIbYHrFwIhAMuWWuNfvqQ%2FIsBiCpK6%2B%2FZ49oODZePMmqxCR8xi4NQTKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx76sGRMbDXFhzS3Dgq3APTOy0HVIfoOVJHQzFUcIbALMkdZqq0RnAMinajtVPdHJmjbYmGITpZPNhaJ3KVbJQLO6xAvR039tPUrJ6XT2C7XzRHLEWw9sProukTRcbxOjQ0pK8E0eF8734DC92dNBK6dv555ZU0Q3jINvWZ5QV0UU7gbYlie5KW1kqzRCQaiJfz0njeKhgPnSKcbc%2FIVjKrQy%2F6%2Fh0SwxOVcOwAZhMC7mITs8QT3U1%2FlYPxuPivZXVmEQ%2B6aSbXfaTm3i%2FXYPWemGhjtpFeOstzwmPbz%2BXOpst0TKI%2BVumAE7ED8exXc8v98KYY0%2FT%2BCG%2FQ3l5hEnX2JfaffFII0IWtMiSf8oBUdgdXZ4M2UmxvCEmRWvPIRQZzRO5V5%2FZaA4I7iHm4NJ%2BqEGC0o8QBBvt76JgSbUCBtArR5i5RtD8r53qAa%2BKIM1%2FLww%2FMmq5%2FxfMCiKps0Se%2BjnFxSZtEVm4zpUQEUQksIK7Wcocaxl%2FO9WTdVXUfnrjCQb2u4Zgn206dB4Xb0G3%2FIGFSfXG5Lk79IoI5JTkrd1iZpWs1DVeto9LH4ErO4S%2Bl%2FU21aw4kGDkFYGtnSAKy5tna3sEEnSiqSczZB%2FfSl%2BzHBeg%2Fr6i0NVILyMYQ5TWKzI9BK47pUnPqkjCsyJLKBjqkAWSSPj4%2F4qLrSli0Dy2P%2B2TRx3Fvma4xJArXo%2B4SiBFTMxMsV0M6Iujb%2BtzsoKEFkj2lK2oVnlaCztcDjIk8HtjISNxWZjWVFM6%2BmBEZyvIOegh%2B%2FL%2BCX54ak1GxUo9LzPB6lE%2FADi6nOkvVwmMDILbmIibZ6d8Puk4bODs1%2FGkUP2PvYhsRATzSBfw%2B%2BlxNOn5mbeeRWc%2Bh1%2FuS0L6hgdPjKVKU&X-Amz-Signature=72451734e87fbd3a7975b055b2c1d4c04e1ad77bb012e3fb3670bd57c1eabc29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTHSKGWO%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLCHoxVP605VXKjpqWFvlQ8qzbPduk67yMZ6KIbYHrFwIhAMuWWuNfvqQ%2FIsBiCpK6%2B%2FZ49oODZePMmqxCR8xi4NQTKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx76sGRMbDXFhzS3Dgq3APTOy0HVIfoOVJHQzFUcIbALMkdZqq0RnAMinajtVPdHJmjbYmGITpZPNhaJ3KVbJQLO6xAvR039tPUrJ6XT2C7XzRHLEWw9sProukTRcbxOjQ0pK8E0eF8734DC92dNBK6dv555ZU0Q3jINvWZ5QV0UU7gbYlie5KW1kqzRCQaiJfz0njeKhgPnSKcbc%2FIVjKrQy%2F6%2Fh0SwxOVcOwAZhMC7mITs8QT3U1%2FlYPxuPivZXVmEQ%2B6aSbXfaTm3i%2FXYPWemGhjtpFeOstzwmPbz%2BXOpst0TKI%2BVumAE7ED8exXc8v98KYY0%2FT%2BCG%2FQ3l5hEnX2JfaffFII0IWtMiSf8oBUdgdXZ4M2UmxvCEmRWvPIRQZzRO5V5%2FZaA4I7iHm4NJ%2BqEGC0o8QBBvt76JgSbUCBtArR5i5RtD8r53qAa%2BKIM1%2FLww%2FMmq5%2FxfMCiKps0Se%2BjnFxSZtEVm4zpUQEUQksIK7Wcocaxl%2FO9WTdVXUfnrjCQb2u4Zgn206dB4Xb0G3%2FIGFSfXG5Lk79IoI5JTkrd1iZpWs1DVeto9LH4ErO4S%2Bl%2FU21aw4kGDkFYGtnSAKy5tna3sEEnSiqSczZB%2FfSl%2BzHBeg%2Fr6i0NVILyMYQ5TWKzI9BK47pUnPqkjCsyJLKBjqkAWSSPj4%2F4qLrSli0Dy2P%2B2TRx3Fvma4xJArXo%2B4SiBFTMxMsV0M6Iujb%2BtzsoKEFkj2lK2oVnlaCztcDjIk8HtjISNxWZjWVFM6%2BmBEZyvIOegh%2B%2FL%2BCX54ak1GxUo9LzPB6lE%2FADi6nOkvVwmMDILbmIibZ6d8Puk4bODs1%2FGkUP2PvYhsRATzSBfw%2B%2BlxNOn5mbeeRWc%2Bh1%2FuS0L6hgdPjKVKU&X-Amz-Signature=31d3623cc66be42fd72a46cd350ab81ed991a9d1f06ac0912c618c8189a4c34f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTHSKGWO%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLCHoxVP605VXKjpqWFvlQ8qzbPduk67yMZ6KIbYHrFwIhAMuWWuNfvqQ%2FIsBiCpK6%2B%2FZ49oODZePMmqxCR8xi4NQTKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx76sGRMbDXFhzS3Dgq3APTOy0HVIfoOVJHQzFUcIbALMkdZqq0RnAMinajtVPdHJmjbYmGITpZPNhaJ3KVbJQLO6xAvR039tPUrJ6XT2C7XzRHLEWw9sProukTRcbxOjQ0pK8E0eF8734DC92dNBK6dv555ZU0Q3jINvWZ5QV0UU7gbYlie5KW1kqzRCQaiJfz0njeKhgPnSKcbc%2FIVjKrQy%2F6%2Fh0SwxOVcOwAZhMC7mITs8QT3U1%2FlYPxuPivZXVmEQ%2B6aSbXfaTm3i%2FXYPWemGhjtpFeOstzwmPbz%2BXOpst0TKI%2BVumAE7ED8exXc8v98KYY0%2FT%2BCG%2FQ3l5hEnX2JfaffFII0IWtMiSf8oBUdgdXZ4M2UmxvCEmRWvPIRQZzRO5V5%2FZaA4I7iHm4NJ%2BqEGC0o8QBBvt76JgSbUCBtArR5i5RtD8r53qAa%2BKIM1%2FLww%2FMmq5%2FxfMCiKps0Se%2BjnFxSZtEVm4zpUQEUQksIK7Wcocaxl%2FO9WTdVXUfnrjCQb2u4Zgn206dB4Xb0G3%2FIGFSfXG5Lk79IoI5JTkrd1iZpWs1DVeto9LH4ErO4S%2Bl%2FU21aw4kGDkFYGtnSAKy5tna3sEEnSiqSczZB%2FfSl%2BzHBeg%2Fr6i0NVILyMYQ5TWKzI9BK47pUnPqkjCsyJLKBjqkAWSSPj4%2F4qLrSli0Dy2P%2B2TRx3Fvma4xJArXo%2B4SiBFTMxMsV0M6Iujb%2BtzsoKEFkj2lK2oVnlaCztcDjIk8HtjISNxWZjWVFM6%2BmBEZyvIOegh%2B%2FL%2BCX54ak1GxUo9LzPB6lE%2FADi6nOkvVwmMDILbmIibZ6d8Puk4bODs1%2FGkUP2PvYhsRATzSBfw%2B%2BlxNOn5mbeeRWc%2Bh1%2FuS0L6hgdPjKVKU&X-Amz-Signature=e83d7d17924c92fa98b9c31cc52538773767de1cca8d2a5d88df3fed8a2ea701&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTHSKGWO%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLCHoxVP605VXKjpqWFvlQ8qzbPduk67yMZ6KIbYHrFwIhAMuWWuNfvqQ%2FIsBiCpK6%2B%2FZ49oODZePMmqxCR8xi4NQTKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx76sGRMbDXFhzS3Dgq3APTOy0HVIfoOVJHQzFUcIbALMkdZqq0RnAMinajtVPdHJmjbYmGITpZPNhaJ3KVbJQLO6xAvR039tPUrJ6XT2C7XzRHLEWw9sProukTRcbxOjQ0pK8E0eF8734DC92dNBK6dv555ZU0Q3jINvWZ5QV0UU7gbYlie5KW1kqzRCQaiJfz0njeKhgPnSKcbc%2FIVjKrQy%2F6%2Fh0SwxOVcOwAZhMC7mITs8QT3U1%2FlYPxuPivZXVmEQ%2B6aSbXfaTm3i%2FXYPWemGhjtpFeOstzwmPbz%2BXOpst0TKI%2BVumAE7ED8exXc8v98KYY0%2FT%2BCG%2FQ3l5hEnX2JfaffFII0IWtMiSf8oBUdgdXZ4M2UmxvCEmRWvPIRQZzRO5V5%2FZaA4I7iHm4NJ%2BqEGC0o8QBBvt76JgSbUCBtArR5i5RtD8r53qAa%2BKIM1%2FLww%2FMmq5%2FxfMCiKps0Se%2BjnFxSZtEVm4zpUQEUQksIK7Wcocaxl%2FO9WTdVXUfnrjCQb2u4Zgn206dB4Xb0G3%2FIGFSfXG5Lk79IoI5JTkrd1iZpWs1DVeto9LH4ErO4S%2Bl%2FU21aw4kGDkFYGtnSAKy5tna3sEEnSiqSczZB%2FfSl%2BzHBeg%2Fr6i0NVILyMYQ5TWKzI9BK47pUnPqkjCsyJLKBjqkAWSSPj4%2F4qLrSli0Dy2P%2B2TRx3Fvma4xJArXo%2B4SiBFTMxMsV0M6Iujb%2BtzsoKEFkj2lK2oVnlaCztcDjIk8HtjISNxWZjWVFM6%2BmBEZyvIOegh%2B%2FL%2BCX54ak1GxUo9LzPB6lE%2FADi6nOkvVwmMDILbmIibZ6d8Puk4bODs1%2FGkUP2PvYhsRATzSBfw%2B%2BlxNOn5mbeeRWc%2Bh1%2FuS0L6hgdPjKVKU&X-Amz-Signature=a63cce962409533c438ed248457c4010533007d163960cbf6b8ce3432c691eaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTHSKGWO%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLCHoxVP605VXKjpqWFvlQ8qzbPduk67yMZ6KIbYHrFwIhAMuWWuNfvqQ%2FIsBiCpK6%2B%2FZ49oODZePMmqxCR8xi4NQTKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx76sGRMbDXFhzS3Dgq3APTOy0HVIfoOVJHQzFUcIbALMkdZqq0RnAMinajtVPdHJmjbYmGITpZPNhaJ3KVbJQLO6xAvR039tPUrJ6XT2C7XzRHLEWw9sProukTRcbxOjQ0pK8E0eF8734DC92dNBK6dv555ZU0Q3jINvWZ5QV0UU7gbYlie5KW1kqzRCQaiJfz0njeKhgPnSKcbc%2FIVjKrQy%2F6%2Fh0SwxOVcOwAZhMC7mITs8QT3U1%2FlYPxuPivZXVmEQ%2B6aSbXfaTm3i%2FXYPWemGhjtpFeOstzwmPbz%2BXOpst0TKI%2BVumAE7ED8exXc8v98KYY0%2FT%2BCG%2FQ3l5hEnX2JfaffFII0IWtMiSf8oBUdgdXZ4M2UmxvCEmRWvPIRQZzRO5V5%2FZaA4I7iHm4NJ%2BqEGC0o8QBBvt76JgSbUCBtArR5i5RtD8r53qAa%2BKIM1%2FLww%2FMmq5%2FxfMCiKps0Se%2BjnFxSZtEVm4zpUQEUQksIK7Wcocaxl%2FO9WTdVXUfnrjCQb2u4Zgn206dB4Xb0G3%2FIGFSfXG5Lk79IoI5JTkrd1iZpWs1DVeto9LH4ErO4S%2Bl%2FU21aw4kGDkFYGtnSAKy5tna3sEEnSiqSczZB%2FfSl%2BzHBeg%2Fr6i0NVILyMYQ5TWKzI9BK47pUnPqkjCsyJLKBjqkAWSSPj4%2F4qLrSli0Dy2P%2B2TRx3Fvma4xJArXo%2B4SiBFTMxMsV0M6Iujb%2BtzsoKEFkj2lK2oVnlaCztcDjIk8HtjISNxWZjWVFM6%2BmBEZyvIOegh%2B%2FL%2BCX54ak1GxUo9LzPB6lE%2FADi6nOkvVwmMDILbmIibZ6d8Puk4bODs1%2FGkUP2PvYhsRATzSBfw%2B%2BlxNOn5mbeeRWc%2Bh1%2FuS0L6hgdPjKVKU&X-Amz-Signature=14ebad667c4550edb335f9c2580168db62417292e58cc3a282563909a52f3fc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTHSKGWO%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLCHoxVP605VXKjpqWFvlQ8qzbPduk67yMZ6KIbYHrFwIhAMuWWuNfvqQ%2FIsBiCpK6%2B%2FZ49oODZePMmqxCR8xi4NQTKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx76sGRMbDXFhzS3Dgq3APTOy0HVIfoOVJHQzFUcIbALMkdZqq0RnAMinajtVPdHJmjbYmGITpZPNhaJ3KVbJQLO6xAvR039tPUrJ6XT2C7XzRHLEWw9sProukTRcbxOjQ0pK8E0eF8734DC92dNBK6dv555ZU0Q3jINvWZ5QV0UU7gbYlie5KW1kqzRCQaiJfz0njeKhgPnSKcbc%2FIVjKrQy%2F6%2Fh0SwxOVcOwAZhMC7mITs8QT3U1%2FlYPxuPivZXVmEQ%2B6aSbXfaTm3i%2FXYPWemGhjtpFeOstzwmPbz%2BXOpst0TKI%2BVumAE7ED8exXc8v98KYY0%2FT%2BCG%2FQ3l5hEnX2JfaffFII0IWtMiSf8oBUdgdXZ4M2UmxvCEmRWvPIRQZzRO5V5%2FZaA4I7iHm4NJ%2BqEGC0o8QBBvt76JgSbUCBtArR5i5RtD8r53qAa%2BKIM1%2FLww%2FMmq5%2FxfMCiKps0Se%2BjnFxSZtEVm4zpUQEUQksIK7Wcocaxl%2FO9WTdVXUfnrjCQb2u4Zgn206dB4Xb0G3%2FIGFSfXG5Lk79IoI5JTkrd1iZpWs1DVeto9LH4ErO4S%2Bl%2FU21aw4kGDkFYGtnSAKy5tna3sEEnSiqSczZB%2FfSl%2BzHBeg%2Fr6i0NVILyMYQ5TWKzI9BK47pUnPqkjCsyJLKBjqkAWSSPj4%2F4qLrSli0Dy2P%2B2TRx3Fvma4xJArXo%2B4SiBFTMxMsV0M6Iujb%2BtzsoKEFkj2lK2oVnlaCztcDjIk8HtjISNxWZjWVFM6%2BmBEZyvIOegh%2B%2FL%2BCX54ak1GxUo9LzPB6lE%2FADi6nOkvVwmMDILbmIibZ6d8Puk4bODs1%2FGkUP2PvYhsRATzSBfw%2B%2BlxNOn5mbeeRWc%2Bh1%2FuS0L6hgdPjKVKU&X-Amz-Signature=7c9074a6d68e6b9e47d26def9cea32109a2c2637db3d1e20a800d54b04874fdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTHSKGWO%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLCHoxVP605VXKjpqWFvlQ8qzbPduk67yMZ6KIbYHrFwIhAMuWWuNfvqQ%2FIsBiCpK6%2B%2FZ49oODZePMmqxCR8xi4NQTKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx76sGRMbDXFhzS3Dgq3APTOy0HVIfoOVJHQzFUcIbALMkdZqq0RnAMinajtVPdHJmjbYmGITpZPNhaJ3KVbJQLO6xAvR039tPUrJ6XT2C7XzRHLEWw9sProukTRcbxOjQ0pK8E0eF8734DC92dNBK6dv555ZU0Q3jINvWZ5QV0UU7gbYlie5KW1kqzRCQaiJfz0njeKhgPnSKcbc%2FIVjKrQy%2F6%2Fh0SwxOVcOwAZhMC7mITs8QT3U1%2FlYPxuPivZXVmEQ%2B6aSbXfaTm3i%2FXYPWemGhjtpFeOstzwmPbz%2BXOpst0TKI%2BVumAE7ED8exXc8v98KYY0%2FT%2BCG%2FQ3l5hEnX2JfaffFII0IWtMiSf8oBUdgdXZ4M2UmxvCEmRWvPIRQZzRO5V5%2FZaA4I7iHm4NJ%2BqEGC0o8QBBvt76JgSbUCBtArR5i5RtD8r53qAa%2BKIM1%2FLww%2FMmq5%2FxfMCiKps0Se%2BjnFxSZtEVm4zpUQEUQksIK7Wcocaxl%2FO9WTdVXUfnrjCQb2u4Zgn206dB4Xb0G3%2FIGFSfXG5Lk79IoI5JTkrd1iZpWs1DVeto9LH4ErO4S%2Bl%2FU21aw4kGDkFYGtnSAKy5tna3sEEnSiqSczZB%2FfSl%2BzHBeg%2Fr6i0NVILyMYQ5TWKzI9BK47pUnPqkjCsyJLKBjqkAWSSPj4%2F4qLrSli0Dy2P%2B2TRx3Fvma4xJArXo%2B4SiBFTMxMsV0M6Iujb%2BtzsoKEFkj2lK2oVnlaCztcDjIk8HtjISNxWZjWVFM6%2BmBEZyvIOegh%2B%2FL%2BCX54ak1GxUo9LzPB6lE%2FADi6nOkvVwmMDILbmIibZ6d8Puk4bODs1%2FGkUP2PvYhsRATzSBfw%2B%2BlxNOn5mbeeRWc%2Bh1%2FuS0L6hgdPjKVKU&X-Amz-Signature=52e3484c2605ba6655b75a9242987f37a48f7ff95d00d66d67e4398b7d13f98e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTHSKGWO%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLCHoxVP605VXKjpqWFvlQ8qzbPduk67yMZ6KIbYHrFwIhAMuWWuNfvqQ%2FIsBiCpK6%2B%2FZ49oODZePMmqxCR8xi4NQTKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx76sGRMbDXFhzS3Dgq3APTOy0HVIfoOVJHQzFUcIbALMkdZqq0RnAMinajtVPdHJmjbYmGITpZPNhaJ3KVbJQLO6xAvR039tPUrJ6XT2C7XzRHLEWw9sProukTRcbxOjQ0pK8E0eF8734DC92dNBK6dv555ZU0Q3jINvWZ5QV0UU7gbYlie5KW1kqzRCQaiJfz0njeKhgPnSKcbc%2FIVjKrQy%2F6%2Fh0SwxOVcOwAZhMC7mITs8QT3U1%2FlYPxuPivZXVmEQ%2B6aSbXfaTm3i%2FXYPWemGhjtpFeOstzwmPbz%2BXOpst0TKI%2BVumAE7ED8exXc8v98KYY0%2FT%2BCG%2FQ3l5hEnX2JfaffFII0IWtMiSf8oBUdgdXZ4M2UmxvCEmRWvPIRQZzRO5V5%2FZaA4I7iHm4NJ%2BqEGC0o8QBBvt76JgSbUCBtArR5i5RtD8r53qAa%2BKIM1%2FLww%2FMmq5%2FxfMCiKps0Se%2BjnFxSZtEVm4zpUQEUQksIK7Wcocaxl%2FO9WTdVXUfnrjCQb2u4Zgn206dB4Xb0G3%2FIGFSfXG5Lk79IoI5JTkrd1iZpWs1DVeto9LH4ErO4S%2Bl%2FU21aw4kGDkFYGtnSAKy5tna3sEEnSiqSczZB%2FfSl%2BzHBeg%2Fr6i0NVILyMYQ5TWKzI9BK47pUnPqkjCsyJLKBjqkAWSSPj4%2F4qLrSli0Dy2P%2B2TRx3Fvma4xJArXo%2B4SiBFTMxMsV0M6Iujb%2BtzsoKEFkj2lK2oVnlaCztcDjIk8HtjISNxWZjWVFM6%2BmBEZyvIOegh%2B%2FL%2BCX54ak1GxUo9LzPB6lE%2FADi6nOkvVwmMDILbmIibZ6d8Puk4bODs1%2FGkUP2PvYhsRATzSBfw%2B%2BlxNOn5mbeeRWc%2Bh1%2FuS0L6hgdPjKVKU&X-Amz-Signature=c679f1c8f7d322e6e61594d084bd8c8976e7ad12427970be77f0d76368a3035a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTHSKGWO%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLCHoxVP605VXKjpqWFvlQ8qzbPduk67yMZ6KIbYHrFwIhAMuWWuNfvqQ%2FIsBiCpK6%2B%2FZ49oODZePMmqxCR8xi4NQTKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx76sGRMbDXFhzS3Dgq3APTOy0HVIfoOVJHQzFUcIbALMkdZqq0RnAMinajtVPdHJmjbYmGITpZPNhaJ3KVbJQLO6xAvR039tPUrJ6XT2C7XzRHLEWw9sProukTRcbxOjQ0pK8E0eF8734DC92dNBK6dv555ZU0Q3jINvWZ5QV0UU7gbYlie5KW1kqzRCQaiJfz0njeKhgPnSKcbc%2FIVjKrQy%2F6%2Fh0SwxOVcOwAZhMC7mITs8QT3U1%2FlYPxuPivZXVmEQ%2B6aSbXfaTm3i%2FXYPWemGhjtpFeOstzwmPbz%2BXOpst0TKI%2BVumAE7ED8exXc8v98KYY0%2FT%2BCG%2FQ3l5hEnX2JfaffFII0IWtMiSf8oBUdgdXZ4M2UmxvCEmRWvPIRQZzRO5V5%2FZaA4I7iHm4NJ%2BqEGC0o8QBBvt76JgSbUCBtArR5i5RtD8r53qAa%2BKIM1%2FLww%2FMmq5%2FxfMCiKps0Se%2BjnFxSZtEVm4zpUQEUQksIK7Wcocaxl%2FO9WTdVXUfnrjCQb2u4Zgn206dB4Xb0G3%2FIGFSfXG5Lk79IoI5JTkrd1iZpWs1DVeto9LH4ErO4S%2Bl%2FU21aw4kGDkFYGtnSAKy5tna3sEEnSiqSczZB%2FfSl%2BzHBeg%2Fr6i0NVILyMYQ5TWKzI9BK47pUnPqkjCsyJLKBjqkAWSSPj4%2F4qLrSli0Dy2P%2B2TRx3Fvma4xJArXo%2B4SiBFTMxMsV0M6Iujb%2BtzsoKEFkj2lK2oVnlaCztcDjIk8HtjISNxWZjWVFM6%2BmBEZyvIOegh%2B%2FL%2BCX54ak1GxUo9LzPB6lE%2FADi6nOkvVwmMDILbmIibZ6d8Puk4bODs1%2FGkUP2PvYhsRATzSBfw%2B%2BlxNOn5mbeeRWc%2Bh1%2FuS0L6hgdPjKVKU&X-Amz-Signature=e83d7d17924c92fa98b9c31cc52538773767de1cca8d2a5d88df3fed8a2ea701&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
