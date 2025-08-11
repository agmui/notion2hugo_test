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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7WRVAAT%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFEh2SbavFoGdKMpdZTb1V0sUkfiugf16Mt4UePZFEjQIgMXT6CCrf6IIK2DFfm8DGEQb5ONoSslDCsBhHQdZcHnUqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCoty6AQTTARIO794SrcAzessYy2rZ9MkWXlHR7pFXIA4juUB5%2BaNNI6hjP6LNJjojits09%2BZ2DJbcwfs0JEEACJ%2FQUiTZr%2BrMtM7BgMweWBRBu3GV4MxW3NBiPoRyzC7dmONtQBpzjSiETgTyuE4IgorLIcvlDthP%2FboGcxd10ZuTEDS6bReOhKPOIcBpJRF7bRiCDXL6Vqq7lJuM7QyanWm2Uv0%2FfW2XzUr9rBmdoS9C8fjHQWB%2FZvmslnuA%2Fi%2FHvTfspGpLv08B3s46DFn7Floyu0cLTcPeLbg7gOKYpfn%2Foyq9ihYoj3X9bjeEFFhdizknaRanKtuqVSwW6z1vlUjYnKBGACcx5awUNlxG8v6HkPX9vySgS3ioR0CJe%2BZgFGAvK92urINVBBzaoF2g69DXBguo%2B%2FgKyGbtA%2BWhogZzAEOpsH8OriO1jmNbH9DuOOQX6KbkGv5kUxRdT82DHXlZ2xu%2BRyT0JxlvFbIR1nPIaxbHwf2zE0xM1uue4TMqCjRC7WU%2B1Q1kscaFogb5%2F0FGAVq%2Fss%2BWgKied25mJc04exs1FXsmav7R4fMaJpsvEirgdmx3DVG8oQuJahBvEZd7NZX2qYmH5cTlix1hPnLcrxkBpGTggWsIYwFKvjuccgjTZUIdVwyVepMJWi6MQGOqUBOi7cgY%2BUjEJ9Pskb8o7Sz2h8%2FXsuAgrnLvbzbP756a1DajCMjVuYFA7tjDtrS6eQPd9bIY0fH22GtM70d%2BiuXbZFwhzkBZI8ujLj5njskOcpHlylDqs%2Bp%2BuAS6nB3mMwe1aFtv6UPgAcFarkRaCmoIVut%2BxeR7a2kt6kZe7dNrghf0T5Np8WqgZHv%2Bt3uUDWW4C4dXWemVcIfF%2Fw7CMvLCfb6EyW&X-Amz-Signature=e4f3d99dc539fdc3af90377b77715a9d1f08de52c12f8440cf5c0be9aefe7445&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD56VJ2J%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcBg2bq1mkWi%2FAQTVh2UT7cFyQYTZRMY14ZTApEZUTZAiB%2F95jDD1jMU1%2F3sAljmME4DZW%2BbLR3EaV8NqxJGhxrKCqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFNDiC5HyFMn%2BK2q6KtwD%2Fv4ovrzl89WP4IvLzRMsWXDCTTydEcjSD3QrBbZMM%2FrstzZBCT5eV7nEQ2oBu%2BUBkh28cr7qc5FjwBKgxb%2BTcrIl7L%2F4FP9oiPGYWCxWzof3Q4XTGq%2F%2BElGwr0Aj6E409Yr3zpIkawWWqhuSRHulxQF8aVsvpUdKFrb5uvTdW5XMMvex0LV6D%2FC0nln65Q8wHLPNY0LCRdWTxHyPU3sNfTjmgi%2BG4%2ByLsQbFYr0hWM141V2%2FnZVCkHSIHvfj2LaTaAYKdeLmCH01RAuTtl0iGMa2CB8tb2GIECtXFN23yXE6ngFpvRB5xMCA1TTwmmgygECaTne%2B24MyNz5L7RYF5i0pzh%2BDRKJlfzhoZ2mtiX0FvgCSwXwXaMFPffpjkKIMS914nKuJfCQAMMReN2VN%2BZOLXRBMXTVsntSHK2VCAvNjDy%2Bp%2BG2pbXf2QlV%2FDMY%2F9ZBe0yY6XMbzA7rMOjk5SwlYWTejs9C3r6lLC1LJRE6gjsHzQo79imMrrg%2BlVs03BXJ9kGaJ4nzYBuJ4XdLXJ6hml4pBKL1dBsTyTEZ9ockNf06XgUddB0wvB09zcDWKbqhVTy%2BAvByfdTRXIw%2BRkmIpmx1K4vJc1U9Tvg7kUljP9vdP%2FOHKFnHAdPgw86DoxAY6pgG2co5EVr71uBBSMsE1%2B9fHR%2FKaM2F7k4w%2FOu4SqyOOvLSmezgazc2nSt%2FkhJ1AA95cZ7PVtBP6Q5kJBQWe6PwvQMh13stCyjWLuLeB7Q6P9%2B3t9q13M%2F5Hv0aCuPJjX4VzLRoN6xb4LK4YvKebwS1jo9vUHLgOeBa3fmLelJqY4Jco5rtQJqYwIHfPuAc5vpJT36heevkFcTctGTfb9i4%2F0YM2MQQk&X-Amz-Signature=8618cb99f2cafd23e683644a8c33a4fb032e4900d91d469e60b09b8a4333f666&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD56VJ2J%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcBg2bq1mkWi%2FAQTVh2UT7cFyQYTZRMY14ZTApEZUTZAiB%2F95jDD1jMU1%2F3sAljmME4DZW%2BbLR3EaV8NqxJGhxrKCqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFNDiC5HyFMn%2BK2q6KtwD%2Fv4ovrzl89WP4IvLzRMsWXDCTTydEcjSD3QrBbZMM%2FrstzZBCT5eV7nEQ2oBu%2BUBkh28cr7qc5FjwBKgxb%2BTcrIl7L%2F4FP9oiPGYWCxWzof3Q4XTGq%2F%2BElGwr0Aj6E409Yr3zpIkawWWqhuSRHulxQF8aVsvpUdKFrb5uvTdW5XMMvex0LV6D%2FC0nln65Q8wHLPNY0LCRdWTxHyPU3sNfTjmgi%2BG4%2ByLsQbFYr0hWM141V2%2FnZVCkHSIHvfj2LaTaAYKdeLmCH01RAuTtl0iGMa2CB8tb2GIECtXFN23yXE6ngFpvRB5xMCA1TTwmmgygECaTne%2B24MyNz5L7RYF5i0pzh%2BDRKJlfzhoZ2mtiX0FvgCSwXwXaMFPffpjkKIMS914nKuJfCQAMMReN2VN%2BZOLXRBMXTVsntSHK2VCAvNjDy%2Bp%2BG2pbXf2QlV%2FDMY%2F9ZBe0yY6XMbzA7rMOjk5SwlYWTejs9C3r6lLC1LJRE6gjsHzQo79imMrrg%2BlVs03BXJ9kGaJ4nzYBuJ4XdLXJ6hml4pBKL1dBsTyTEZ9ockNf06XgUddB0wvB09zcDWKbqhVTy%2BAvByfdTRXIw%2BRkmIpmx1K4vJc1U9Tvg7kUljP9vdP%2FOHKFnHAdPgw86DoxAY6pgG2co5EVr71uBBSMsE1%2B9fHR%2FKaM2F7k4w%2FOu4SqyOOvLSmezgazc2nSt%2FkhJ1AA95cZ7PVtBP6Q5kJBQWe6PwvQMh13stCyjWLuLeB7Q6P9%2B3t9q13M%2F5Hv0aCuPJjX4VzLRoN6xb4LK4YvKebwS1jo9vUHLgOeBa3fmLelJqY4Jco5rtQJqYwIHfPuAc5vpJT36heevkFcTctGTfb9i4%2F0YM2MQQk&X-Amz-Signature=cbbc1841b181bf53cdf1377d3725305d75e92969f36f11a2cff306b6f93c6fe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD56VJ2J%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcBg2bq1mkWi%2FAQTVh2UT7cFyQYTZRMY14ZTApEZUTZAiB%2F95jDD1jMU1%2F3sAljmME4DZW%2BbLR3EaV8NqxJGhxrKCqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFNDiC5HyFMn%2BK2q6KtwD%2Fv4ovrzl89WP4IvLzRMsWXDCTTydEcjSD3QrBbZMM%2FrstzZBCT5eV7nEQ2oBu%2BUBkh28cr7qc5FjwBKgxb%2BTcrIl7L%2F4FP9oiPGYWCxWzof3Q4XTGq%2F%2BElGwr0Aj6E409Yr3zpIkawWWqhuSRHulxQF8aVsvpUdKFrb5uvTdW5XMMvex0LV6D%2FC0nln65Q8wHLPNY0LCRdWTxHyPU3sNfTjmgi%2BG4%2ByLsQbFYr0hWM141V2%2FnZVCkHSIHvfj2LaTaAYKdeLmCH01RAuTtl0iGMa2CB8tb2GIECtXFN23yXE6ngFpvRB5xMCA1TTwmmgygECaTne%2B24MyNz5L7RYF5i0pzh%2BDRKJlfzhoZ2mtiX0FvgCSwXwXaMFPffpjkKIMS914nKuJfCQAMMReN2VN%2BZOLXRBMXTVsntSHK2VCAvNjDy%2Bp%2BG2pbXf2QlV%2FDMY%2F9ZBe0yY6XMbzA7rMOjk5SwlYWTejs9C3r6lLC1LJRE6gjsHzQo79imMrrg%2BlVs03BXJ9kGaJ4nzYBuJ4XdLXJ6hml4pBKL1dBsTyTEZ9ockNf06XgUddB0wvB09zcDWKbqhVTy%2BAvByfdTRXIw%2BRkmIpmx1K4vJc1U9Tvg7kUljP9vdP%2FOHKFnHAdPgw86DoxAY6pgG2co5EVr71uBBSMsE1%2B9fHR%2FKaM2F7k4w%2FOu4SqyOOvLSmezgazc2nSt%2FkhJ1AA95cZ7PVtBP6Q5kJBQWe6PwvQMh13stCyjWLuLeB7Q6P9%2B3t9q13M%2F5Hv0aCuPJjX4VzLRoN6xb4LK4YvKebwS1jo9vUHLgOeBa3fmLelJqY4Jco5rtQJqYwIHfPuAc5vpJT36heevkFcTctGTfb9i4%2F0YM2MQQk&X-Amz-Signature=67b1faae170a03be4f5cf491df9378b74f710ff279db274111edcc275ba98866&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD56VJ2J%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcBg2bq1mkWi%2FAQTVh2UT7cFyQYTZRMY14ZTApEZUTZAiB%2F95jDD1jMU1%2F3sAljmME4DZW%2BbLR3EaV8NqxJGhxrKCqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFNDiC5HyFMn%2BK2q6KtwD%2Fv4ovrzl89WP4IvLzRMsWXDCTTydEcjSD3QrBbZMM%2FrstzZBCT5eV7nEQ2oBu%2BUBkh28cr7qc5FjwBKgxb%2BTcrIl7L%2F4FP9oiPGYWCxWzof3Q4XTGq%2F%2BElGwr0Aj6E409Yr3zpIkawWWqhuSRHulxQF8aVsvpUdKFrb5uvTdW5XMMvex0LV6D%2FC0nln65Q8wHLPNY0LCRdWTxHyPU3sNfTjmgi%2BG4%2ByLsQbFYr0hWM141V2%2FnZVCkHSIHvfj2LaTaAYKdeLmCH01RAuTtl0iGMa2CB8tb2GIECtXFN23yXE6ngFpvRB5xMCA1TTwmmgygECaTne%2B24MyNz5L7RYF5i0pzh%2BDRKJlfzhoZ2mtiX0FvgCSwXwXaMFPffpjkKIMS914nKuJfCQAMMReN2VN%2BZOLXRBMXTVsntSHK2VCAvNjDy%2Bp%2BG2pbXf2QlV%2FDMY%2F9ZBe0yY6XMbzA7rMOjk5SwlYWTejs9C3r6lLC1LJRE6gjsHzQo79imMrrg%2BlVs03BXJ9kGaJ4nzYBuJ4XdLXJ6hml4pBKL1dBsTyTEZ9ockNf06XgUddB0wvB09zcDWKbqhVTy%2BAvByfdTRXIw%2BRkmIpmx1K4vJc1U9Tvg7kUljP9vdP%2FOHKFnHAdPgw86DoxAY6pgG2co5EVr71uBBSMsE1%2B9fHR%2FKaM2F7k4w%2FOu4SqyOOvLSmezgazc2nSt%2FkhJ1AA95cZ7PVtBP6Q5kJBQWe6PwvQMh13stCyjWLuLeB7Q6P9%2B3t9q13M%2F5Hv0aCuPJjX4VzLRoN6xb4LK4YvKebwS1jo9vUHLgOeBa3fmLelJqY4Jco5rtQJqYwIHfPuAc5vpJT36heevkFcTctGTfb9i4%2F0YM2MQQk&X-Amz-Signature=436798054cace5de06e2aef9ae1069db630f9dc0346f5447ee45a23fc5fdd27e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD56VJ2J%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcBg2bq1mkWi%2FAQTVh2UT7cFyQYTZRMY14ZTApEZUTZAiB%2F95jDD1jMU1%2F3sAljmME4DZW%2BbLR3EaV8NqxJGhxrKCqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFNDiC5HyFMn%2BK2q6KtwD%2Fv4ovrzl89WP4IvLzRMsWXDCTTydEcjSD3QrBbZMM%2FrstzZBCT5eV7nEQ2oBu%2BUBkh28cr7qc5FjwBKgxb%2BTcrIl7L%2F4FP9oiPGYWCxWzof3Q4XTGq%2F%2BElGwr0Aj6E409Yr3zpIkawWWqhuSRHulxQF8aVsvpUdKFrb5uvTdW5XMMvex0LV6D%2FC0nln65Q8wHLPNY0LCRdWTxHyPU3sNfTjmgi%2BG4%2ByLsQbFYr0hWM141V2%2FnZVCkHSIHvfj2LaTaAYKdeLmCH01RAuTtl0iGMa2CB8tb2GIECtXFN23yXE6ngFpvRB5xMCA1TTwmmgygECaTne%2B24MyNz5L7RYF5i0pzh%2BDRKJlfzhoZ2mtiX0FvgCSwXwXaMFPffpjkKIMS914nKuJfCQAMMReN2VN%2BZOLXRBMXTVsntSHK2VCAvNjDy%2Bp%2BG2pbXf2QlV%2FDMY%2F9ZBe0yY6XMbzA7rMOjk5SwlYWTejs9C3r6lLC1LJRE6gjsHzQo79imMrrg%2BlVs03BXJ9kGaJ4nzYBuJ4XdLXJ6hml4pBKL1dBsTyTEZ9ockNf06XgUddB0wvB09zcDWKbqhVTy%2BAvByfdTRXIw%2BRkmIpmx1K4vJc1U9Tvg7kUljP9vdP%2FOHKFnHAdPgw86DoxAY6pgG2co5EVr71uBBSMsE1%2B9fHR%2FKaM2F7k4w%2FOu4SqyOOvLSmezgazc2nSt%2FkhJ1AA95cZ7PVtBP6Q5kJBQWe6PwvQMh13stCyjWLuLeB7Q6P9%2B3t9q13M%2F5Hv0aCuPJjX4VzLRoN6xb4LK4YvKebwS1jo9vUHLgOeBa3fmLelJqY4Jco5rtQJqYwIHfPuAc5vpJT36heevkFcTctGTfb9i4%2F0YM2MQQk&X-Amz-Signature=cd41871fc202af644b6c4a76f679a48bd2c8226ad1351b74968341adc48d7c78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD56VJ2J%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcBg2bq1mkWi%2FAQTVh2UT7cFyQYTZRMY14ZTApEZUTZAiB%2F95jDD1jMU1%2F3sAljmME4DZW%2BbLR3EaV8NqxJGhxrKCqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFNDiC5HyFMn%2BK2q6KtwD%2Fv4ovrzl89WP4IvLzRMsWXDCTTydEcjSD3QrBbZMM%2FrstzZBCT5eV7nEQ2oBu%2BUBkh28cr7qc5FjwBKgxb%2BTcrIl7L%2F4FP9oiPGYWCxWzof3Q4XTGq%2F%2BElGwr0Aj6E409Yr3zpIkawWWqhuSRHulxQF8aVsvpUdKFrb5uvTdW5XMMvex0LV6D%2FC0nln65Q8wHLPNY0LCRdWTxHyPU3sNfTjmgi%2BG4%2ByLsQbFYr0hWM141V2%2FnZVCkHSIHvfj2LaTaAYKdeLmCH01RAuTtl0iGMa2CB8tb2GIECtXFN23yXE6ngFpvRB5xMCA1TTwmmgygECaTne%2B24MyNz5L7RYF5i0pzh%2BDRKJlfzhoZ2mtiX0FvgCSwXwXaMFPffpjkKIMS914nKuJfCQAMMReN2VN%2BZOLXRBMXTVsntSHK2VCAvNjDy%2Bp%2BG2pbXf2QlV%2FDMY%2F9ZBe0yY6XMbzA7rMOjk5SwlYWTejs9C3r6lLC1LJRE6gjsHzQo79imMrrg%2BlVs03BXJ9kGaJ4nzYBuJ4XdLXJ6hml4pBKL1dBsTyTEZ9ockNf06XgUddB0wvB09zcDWKbqhVTy%2BAvByfdTRXIw%2BRkmIpmx1K4vJc1U9Tvg7kUljP9vdP%2FOHKFnHAdPgw86DoxAY6pgG2co5EVr71uBBSMsE1%2B9fHR%2FKaM2F7k4w%2FOu4SqyOOvLSmezgazc2nSt%2FkhJ1AA95cZ7PVtBP6Q5kJBQWe6PwvQMh13stCyjWLuLeB7Q6P9%2B3t9q13M%2F5Hv0aCuPJjX4VzLRoN6xb4LK4YvKebwS1jo9vUHLgOeBa3fmLelJqY4Jco5rtQJqYwIHfPuAc5vpJT36heevkFcTctGTfb9i4%2F0YM2MQQk&X-Amz-Signature=1a059fea1a167c61185fe2dda6ac0a22f75ad58203825dbe91f53627c9299d94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD56VJ2J%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcBg2bq1mkWi%2FAQTVh2UT7cFyQYTZRMY14ZTApEZUTZAiB%2F95jDD1jMU1%2F3sAljmME4DZW%2BbLR3EaV8NqxJGhxrKCqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFNDiC5HyFMn%2BK2q6KtwD%2Fv4ovrzl89WP4IvLzRMsWXDCTTydEcjSD3QrBbZMM%2FrstzZBCT5eV7nEQ2oBu%2BUBkh28cr7qc5FjwBKgxb%2BTcrIl7L%2F4FP9oiPGYWCxWzof3Q4XTGq%2F%2BElGwr0Aj6E409Yr3zpIkawWWqhuSRHulxQF8aVsvpUdKFrb5uvTdW5XMMvex0LV6D%2FC0nln65Q8wHLPNY0LCRdWTxHyPU3sNfTjmgi%2BG4%2ByLsQbFYr0hWM141V2%2FnZVCkHSIHvfj2LaTaAYKdeLmCH01RAuTtl0iGMa2CB8tb2GIECtXFN23yXE6ngFpvRB5xMCA1TTwmmgygECaTne%2B24MyNz5L7RYF5i0pzh%2BDRKJlfzhoZ2mtiX0FvgCSwXwXaMFPffpjkKIMS914nKuJfCQAMMReN2VN%2BZOLXRBMXTVsntSHK2VCAvNjDy%2Bp%2BG2pbXf2QlV%2FDMY%2F9ZBe0yY6XMbzA7rMOjk5SwlYWTejs9C3r6lLC1LJRE6gjsHzQo79imMrrg%2BlVs03BXJ9kGaJ4nzYBuJ4XdLXJ6hml4pBKL1dBsTyTEZ9ockNf06XgUddB0wvB09zcDWKbqhVTy%2BAvByfdTRXIw%2BRkmIpmx1K4vJc1U9Tvg7kUljP9vdP%2FOHKFnHAdPgw86DoxAY6pgG2co5EVr71uBBSMsE1%2B9fHR%2FKaM2F7k4w%2FOu4SqyOOvLSmezgazc2nSt%2FkhJ1AA95cZ7PVtBP6Q5kJBQWe6PwvQMh13stCyjWLuLeB7Q6P9%2B3t9q13M%2F5Hv0aCuPJjX4VzLRoN6xb4LK4YvKebwS1jo9vUHLgOeBa3fmLelJqY4Jco5rtQJqYwIHfPuAc5vpJT36heevkFcTctGTfb9i4%2F0YM2MQQk&X-Amz-Signature=62ac9a784bf19104bb310d5af089bddc97479e92e5205e8ce5a227ebaae48755&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD56VJ2J%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcBg2bq1mkWi%2FAQTVh2UT7cFyQYTZRMY14ZTApEZUTZAiB%2F95jDD1jMU1%2F3sAljmME4DZW%2BbLR3EaV8NqxJGhxrKCqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFNDiC5HyFMn%2BK2q6KtwD%2Fv4ovrzl89WP4IvLzRMsWXDCTTydEcjSD3QrBbZMM%2FrstzZBCT5eV7nEQ2oBu%2BUBkh28cr7qc5FjwBKgxb%2BTcrIl7L%2F4FP9oiPGYWCxWzof3Q4XTGq%2F%2BElGwr0Aj6E409Yr3zpIkawWWqhuSRHulxQF8aVsvpUdKFrb5uvTdW5XMMvex0LV6D%2FC0nln65Q8wHLPNY0LCRdWTxHyPU3sNfTjmgi%2BG4%2ByLsQbFYr0hWM141V2%2FnZVCkHSIHvfj2LaTaAYKdeLmCH01RAuTtl0iGMa2CB8tb2GIECtXFN23yXE6ngFpvRB5xMCA1TTwmmgygECaTne%2B24MyNz5L7RYF5i0pzh%2BDRKJlfzhoZ2mtiX0FvgCSwXwXaMFPffpjkKIMS914nKuJfCQAMMReN2VN%2BZOLXRBMXTVsntSHK2VCAvNjDy%2Bp%2BG2pbXf2QlV%2FDMY%2F9ZBe0yY6XMbzA7rMOjk5SwlYWTejs9C3r6lLC1LJRE6gjsHzQo79imMrrg%2BlVs03BXJ9kGaJ4nzYBuJ4XdLXJ6hml4pBKL1dBsTyTEZ9ockNf06XgUddB0wvB09zcDWKbqhVTy%2BAvByfdTRXIw%2BRkmIpmx1K4vJc1U9Tvg7kUljP9vdP%2FOHKFnHAdPgw86DoxAY6pgG2co5EVr71uBBSMsE1%2B9fHR%2FKaM2F7k4w%2FOu4SqyOOvLSmezgazc2nSt%2FkhJ1AA95cZ7PVtBP6Q5kJBQWe6PwvQMh13stCyjWLuLeB7Q6P9%2B3t9q13M%2F5Hv0aCuPJjX4VzLRoN6xb4LK4YvKebwS1jo9vUHLgOeBa3fmLelJqY4Jco5rtQJqYwIHfPuAc5vpJT36heevkFcTctGTfb9i4%2F0YM2MQQk&X-Amz-Signature=fd856abe1bae4d0742f6467a136d4bdf1021b0c5fc27fdfac876af9117e21efc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD56VJ2J%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcBg2bq1mkWi%2FAQTVh2UT7cFyQYTZRMY14ZTApEZUTZAiB%2F95jDD1jMU1%2F3sAljmME4DZW%2BbLR3EaV8NqxJGhxrKCqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFNDiC5HyFMn%2BK2q6KtwD%2Fv4ovrzl89WP4IvLzRMsWXDCTTydEcjSD3QrBbZMM%2FrstzZBCT5eV7nEQ2oBu%2BUBkh28cr7qc5FjwBKgxb%2BTcrIl7L%2F4FP9oiPGYWCxWzof3Q4XTGq%2F%2BElGwr0Aj6E409Yr3zpIkawWWqhuSRHulxQF8aVsvpUdKFrb5uvTdW5XMMvex0LV6D%2FC0nln65Q8wHLPNY0LCRdWTxHyPU3sNfTjmgi%2BG4%2ByLsQbFYr0hWM141V2%2FnZVCkHSIHvfj2LaTaAYKdeLmCH01RAuTtl0iGMa2CB8tb2GIECtXFN23yXE6ngFpvRB5xMCA1TTwmmgygECaTne%2B24MyNz5L7RYF5i0pzh%2BDRKJlfzhoZ2mtiX0FvgCSwXwXaMFPffpjkKIMS914nKuJfCQAMMReN2VN%2BZOLXRBMXTVsntSHK2VCAvNjDy%2Bp%2BG2pbXf2QlV%2FDMY%2F9ZBe0yY6XMbzA7rMOjk5SwlYWTejs9C3r6lLC1LJRE6gjsHzQo79imMrrg%2BlVs03BXJ9kGaJ4nzYBuJ4XdLXJ6hml4pBKL1dBsTyTEZ9ockNf06XgUddB0wvB09zcDWKbqhVTy%2BAvByfdTRXIw%2BRkmIpmx1K4vJc1U9Tvg7kUljP9vdP%2FOHKFnHAdPgw86DoxAY6pgG2co5EVr71uBBSMsE1%2B9fHR%2FKaM2F7k4w%2FOu4SqyOOvLSmezgazc2nSt%2FkhJ1AA95cZ7PVtBP6Q5kJBQWe6PwvQMh13stCyjWLuLeB7Q6P9%2B3t9q13M%2F5Hv0aCuPJjX4VzLRoN6xb4LK4YvKebwS1jo9vUHLgOeBa3fmLelJqY4Jco5rtQJqYwIHfPuAc5vpJT36heevkFcTctGTfb9i4%2F0YM2MQQk&X-Amz-Signature=48ea251e5873405aed99996dcb17dda41a50af8666b48b163ff0432860792a87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD56VJ2J%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcBg2bq1mkWi%2FAQTVh2UT7cFyQYTZRMY14ZTApEZUTZAiB%2F95jDD1jMU1%2F3sAljmME4DZW%2BbLR3EaV8NqxJGhxrKCqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFNDiC5HyFMn%2BK2q6KtwD%2Fv4ovrzl89WP4IvLzRMsWXDCTTydEcjSD3QrBbZMM%2FrstzZBCT5eV7nEQ2oBu%2BUBkh28cr7qc5FjwBKgxb%2BTcrIl7L%2F4FP9oiPGYWCxWzof3Q4XTGq%2F%2BElGwr0Aj6E409Yr3zpIkawWWqhuSRHulxQF8aVsvpUdKFrb5uvTdW5XMMvex0LV6D%2FC0nln65Q8wHLPNY0LCRdWTxHyPU3sNfTjmgi%2BG4%2ByLsQbFYr0hWM141V2%2FnZVCkHSIHvfj2LaTaAYKdeLmCH01RAuTtl0iGMa2CB8tb2GIECtXFN23yXE6ngFpvRB5xMCA1TTwmmgygECaTne%2B24MyNz5L7RYF5i0pzh%2BDRKJlfzhoZ2mtiX0FvgCSwXwXaMFPffpjkKIMS914nKuJfCQAMMReN2VN%2BZOLXRBMXTVsntSHK2VCAvNjDy%2Bp%2BG2pbXf2QlV%2FDMY%2F9ZBe0yY6XMbzA7rMOjk5SwlYWTejs9C3r6lLC1LJRE6gjsHzQo79imMrrg%2BlVs03BXJ9kGaJ4nzYBuJ4XdLXJ6hml4pBKL1dBsTyTEZ9ockNf06XgUddB0wvB09zcDWKbqhVTy%2BAvByfdTRXIw%2BRkmIpmx1K4vJc1U9Tvg7kUljP9vdP%2FOHKFnHAdPgw86DoxAY6pgG2co5EVr71uBBSMsE1%2B9fHR%2FKaM2F7k4w%2FOu4SqyOOvLSmezgazc2nSt%2FkhJ1AA95cZ7PVtBP6Q5kJBQWe6PwvQMh13stCyjWLuLeB7Q6P9%2B3t9q13M%2F5Hv0aCuPJjX4VzLRoN6xb4LK4YvKebwS1jo9vUHLgOeBa3fmLelJqY4Jco5rtQJqYwIHfPuAc5vpJT36heevkFcTctGTfb9i4%2F0YM2MQQk&X-Amz-Signature=436798054cace5de06e2aef9ae1069db630f9dc0346f5447ee45a23fc5fdd27e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
