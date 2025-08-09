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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DOHQYGT%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8I9EjntE2o6mqN%2FKA0ySMCY7R76vhcTBKTdZbtHc4tAiAGsgsjsI8YL5F%2F9yzetpaKwcNMd6mpq7oMSW0chtGyDCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BchHXv42iVwCKMXmKtwDP6t90k8fZPdMi4ioA09Kb14QzKmJKuyABWZJcVm7EKy%2FTkBkSk5%2FEB4ilpEhrwRDhDFmdgQ0ggy5M3w4EZwCd7TaGtfkClyqzpvYzSHCu4TMboCy0beDd%2BDa2tHQSyMl81eK%2Bhc0sxjygV4vJ2XBxDpTnKiGej9ghy5Wnp7tWzGSnAZpp%2BEPV5ZxDBbDiDcebCajyq26XSL5U2a3%2B5mTCu%2FFrrhzxeRd97StHAZ8ENXuUzHByUItQcfpsM36cT6Dm%2F6aT6NGKypg3yDwghIV%2B3ad101g9jmG4xZtptc2JA9mOM1ODa5ajDfiS0xzOcnCNAju0RXlbGLD8gJwv5AowWnEpohxDTUJRFXaM%2F6vNlQ4USxjLO3vKflAfWsY1Z6Ltc6uOBVIPDa9SJA7I7Faj0qb4LeQm0HU3ZpEx98aKWGLx63cKUJq2op95Z%2FsO1S%2FUFBRU3Z8tuIntSdLVDnK331CHUsiiHCqxlWerJSQwus4zuqxOKeue2TuUGzf0v9G0%2BxKugBmA5LSrJdNFBHDU0KuQeBYUpQVdhxA1HbGKAYHPuBLnV2oML9oCiONEirdgV0e3Z%2BbEr7KMF%2Bk2Pm00hZN%2FDateM0RcrSer9bH2DUug9jmP92fNVgKy4Uwg4vfxAY6pgGK%2BXomq6rTARfYag7MUhSUNawSQEsE1QZLnOqZN6J%2BU5D0xn5fOGyikk8FL3BPzIE7uN%2B2OCfjVCEQnSmrLPh1WAnYwytI9km2jtHU%2FJzfnZbt4z2htQQi0heZ%2F7KxnXazLLiTWkMioI%2FypaBGtrzVWPUMPSCVHBb%2FI%2FJQ%2FnW24DGXEIl4kIt3qXNmyyIDxAKL%2BCAV9%2B0WkBaS3ysqT1jQ7bYxnZn2&X-Amz-Signature=a85883fe821fcd6645b7bacd35e2b0e67f63f5d164be44c8f6579f87bf2907c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBYPIOVX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyo2HIwvI0c%2BN3cnJ5Wit8YubUWid6iEW%2FpDQPM2C0OQIgXxxvGWuAOWmjx5xHHYxJ4E8LR7TDVUQMRfiGQX7QexoqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6dQFQPKbboucyCxSrcAxgUEs%2BjVl9E1D2qbgmYe3ja8AibIMn%2FILX%2Bne9AuDFJKlQJsd2GaNp62V9gLVp14kH2JbiPnidr%2FmSj9XPGBjTFXdJ6OHZrjfCiAb0A7JWi9Tg9OqmQwGvQndRi1LNgN4tr5ITJppPTGedKq%2BNxxRCmRvALyDedgnSgIoKvaZxl%2BVz3vStgwiPM0X%2FYjjAOHjCWxqbeNF9KW2d9lIYLg99bR6EB3nXoYLwZY38%2BRRGhja8CoZfm%2FL%2FaRmSxh8pE7CIwu9C%2BSMDS9EGSbMgcxy0lLQgEiqGT0kJKsP4%2FD2AEQMqHdzJu7iuMvIvhza7SmPlxwd%2B8LHKNh%2BpFqMSy99BRmCgHtdOjuESutYX5mAVAxsCmwq3Ayafhxy8Zu2iqYm16RD245aZbYx%2FVfDWeyGD2I1h0XDChWjMcjzP0SaK9w%2Bud8is%2FCXe%2F8C7MwtzHONRFArtDIH1qB1k86Qym7wrT6YeGU1V8nDiOJXJI08XN1Id7oak4cFWPmt%2FVcO093gQOrDtqUzgywg38%2FSvxyq3A%2BGatSBrLtfCghn%2Fjme%2FY3N2Qp5HPxsp3SZlq8cOUtwQqHcwa1v7U3%2FmMUOs12jZL88jXAwcZjrye1rcqv6YBaguVlgPLzgQRX9xjMIaL38QGOqUBqUqsVQUxubKsGuseWrserM4zBPYR63kRVGgqa5uCXaxVX%2FyAMROM7yDFaWzppqRvI76%2FWt16L32%2BMSrITaxalHNLNeYwNlEdtx9lNlQSYVKSGSXXPvgNSFFeUp8tfaromfMcNHQLoSdsGVqdjj7fiZCcdxUperE0bxTkZf26z1OqAmqmfICcI75k%2FQCAZBi4IZ5v3BvtOaok04cxCpcmuMW2xjSG&X-Amz-Signature=0214919050119dd0eba7734507a12c085d2413da7a4f1829f93ccb56a151d3f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBYPIOVX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyo2HIwvI0c%2BN3cnJ5Wit8YubUWid6iEW%2FpDQPM2C0OQIgXxxvGWuAOWmjx5xHHYxJ4E8LR7TDVUQMRfiGQX7QexoqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6dQFQPKbboucyCxSrcAxgUEs%2BjVl9E1D2qbgmYe3ja8AibIMn%2FILX%2Bne9AuDFJKlQJsd2GaNp62V9gLVp14kH2JbiPnidr%2FmSj9XPGBjTFXdJ6OHZrjfCiAb0A7JWi9Tg9OqmQwGvQndRi1LNgN4tr5ITJppPTGedKq%2BNxxRCmRvALyDedgnSgIoKvaZxl%2BVz3vStgwiPM0X%2FYjjAOHjCWxqbeNF9KW2d9lIYLg99bR6EB3nXoYLwZY38%2BRRGhja8CoZfm%2FL%2FaRmSxh8pE7CIwu9C%2BSMDS9EGSbMgcxy0lLQgEiqGT0kJKsP4%2FD2AEQMqHdzJu7iuMvIvhza7SmPlxwd%2B8LHKNh%2BpFqMSy99BRmCgHtdOjuESutYX5mAVAxsCmwq3Ayafhxy8Zu2iqYm16RD245aZbYx%2FVfDWeyGD2I1h0XDChWjMcjzP0SaK9w%2Bud8is%2FCXe%2F8C7MwtzHONRFArtDIH1qB1k86Qym7wrT6YeGU1V8nDiOJXJI08XN1Id7oak4cFWPmt%2FVcO093gQOrDtqUzgywg38%2FSvxyq3A%2BGatSBrLtfCghn%2Fjme%2FY3N2Qp5HPxsp3SZlq8cOUtwQqHcwa1v7U3%2FmMUOs12jZL88jXAwcZjrye1rcqv6YBaguVlgPLzgQRX9xjMIaL38QGOqUBqUqsVQUxubKsGuseWrserM4zBPYR63kRVGgqa5uCXaxVX%2FyAMROM7yDFaWzppqRvI76%2FWt16L32%2BMSrITaxalHNLNeYwNlEdtx9lNlQSYVKSGSXXPvgNSFFeUp8tfaromfMcNHQLoSdsGVqdjj7fiZCcdxUperE0bxTkZf26z1OqAmqmfICcI75k%2FQCAZBi4IZ5v3BvtOaok04cxCpcmuMW2xjSG&X-Amz-Signature=6c547236e36b7495c579757672eca6e741c6070e8af00999f9f29441fbb816c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBYPIOVX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyo2HIwvI0c%2BN3cnJ5Wit8YubUWid6iEW%2FpDQPM2C0OQIgXxxvGWuAOWmjx5xHHYxJ4E8LR7TDVUQMRfiGQX7QexoqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6dQFQPKbboucyCxSrcAxgUEs%2BjVl9E1D2qbgmYe3ja8AibIMn%2FILX%2Bne9AuDFJKlQJsd2GaNp62V9gLVp14kH2JbiPnidr%2FmSj9XPGBjTFXdJ6OHZrjfCiAb0A7JWi9Tg9OqmQwGvQndRi1LNgN4tr5ITJppPTGedKq%2BNxxRCmRvALyDedgnSgIoKvaZxl%2BVz3vStgwiPM0X%2FYjjAOHjCWxqbeNF9KW2d9lIYLg99bR6EB3nXoYLwZY38%2BRRGhja8CoZfm%2FL%2FaRmSxh8pE7CIwu9C%2BSMDS9EGSbMgcxy0lLQgEiqGT0kJKsP4%2FD2AEQMqHdzJu7iuMvIvhza7SmPlxwd%2B8LHKNh%2BpFqMSy99BRmCgHtdOjuESutYX5mAVAxsCmwq3Ayafhxy8Zu2iqYm16RD245aZbYx%2FVfDWeyGD2I1h0XDChWjMcjzP0SaK9w%2Bud8is%2FCXe%2F8C7MwtzHONRFArtDIH1qB1k86Qym7wrT6YeGU1V8nDiOJXJI08XN1Id7oak4cFWPmt%2FVcO093gQOrDtqUzgywg38%2FSvxyq3A%2BGatSBrLtfCghn%2Fjme%2FY3N2Qp5HPxsp3SZlq8cOUtwQqHcwa1v7U3%2FmMUOs12jZL88jXAwcZjrye1rcqv6YBaguVlgPLzgQRX9xjMIaL38QGOqUBqUqsVQUxubKsGuseWrserM4zBPYR63kRVGgqa5uCXaxVX%2FyAMROM7yDFaWzppqRvI76%2FWt16L32%2BMSrITaxalHNLNeYwNlEdtx9lNlQSYVKSGSXXPvgNSFFeUp8tfaromfMcNHQLoSdsGVqdjj7fiZCcdxUperE0bxTkZf26z1OqAmqmfICcI75k%2FQCAZBi4IZ5v3BvtOaok04cxCpcmuMW2xjSG&X-Amz-Signature=842e72122641fa042b1aadedb94b3dce146c6195fc46f373a4995523a08cef74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBYPIOVX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyo2HIwvI0c%2BN3cnJ5Wit8YubUWid6iEW%2FpDQPM2C0OQIgXxxvGWuAOWmjx5xHHYxJ4E8LR7TDVUQMRfiGQX7QexoqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6dQFQPKbboucyCxSrcAxgUEs%2BjVl9E1D2qbgmYe3ja8AibIMn%2FILX%2Bne9AuDFJKlQJsd2GaNp62V9gLVp14kH2JbiPnidr%2FmSj9XPGBjTFXdJ6OHZrjfCiAb0A7JWi9Tg9OqmQwGvQndRi1LNgN4tr5ITJppPTGedKq%2BNxxRCmRvALyDedgnSgIoKvaZxl%2BVz3vStgwiPM0X%2FYjjAOHjCWxqbeNF9KW2d9lIYLg99bR6EB3nXoYLwZY38%2BRRGhja8CoZfm%2FL%2FaRmSxh8pE7CIwu9C%2BSMDS9EGSbMgcxy0lLQgEiqGT0kJKsP4%2FD2AEQMqHdzJu7iuMvIvhza7SmPlxwd%2B8LHKNh%2BpFqMSy99BRmCgHtdOjuESutYX5mAVAxsCmwq3Ayafhxy8Zu2iqYm16RD245aZbYx%2FVfDWeyGD2I1h0XDChWjMcjzP0SaK9w%2Bud8is%2FCXe%2F8C7MwtzHONRFArtDIH1qB1k86Qym7wrT6YeGU1V8nDiOJXJI08XN1Id7oak4cFWPmt%2FVcO093gQOrDtqUzgywg38%2FSvxyq3A%2BGatSBrLtfCghn%2Fjme%2FY3N2Qp5HPxsp3SZlq8cOUtwQqHcwa1v7U3%2FmMUOs12jZL88jXAwcZjrye1rcqv6YBaguVlgPLzgQRX9xjMIaL38QGOqUBqUqsVQUxubKsGuseWrserM4zBPYR63kRVGgqa5uCXaxVX%2FyAMROM7yDFaWzppqRvI76%2FWt16L32%2BMSrITaxalHNLNeYwNlEdtx9lNlQSYVKSGSXXPvgNSFFeUp8tfaromfMcNHQLoSdsGVqdjj7fiZCcdxUperE0bxTkZf26z1OqAmqmfICcI75k%2FQCAZBi4IZ5v3BvtOaok04cxCpcmuMW2xjSG&X-Amz-Signature=6739d0e377d53a4d2b3c784c75c9fdb1ff3f6ce03b9fae631d3a6258811b0af6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBYPIOVX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyo2HIwvI0c%2BN3cnJ5Wit8YubUWid6iEW%2FpDQPM2C0OQIgXxxvGWuAOWmjx5xHHYxJ4E8LR7TDVUQMRfiGQX7QexoqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6dQFQPKbboucyCxSrcAxgUEs%2BjVl9E1D2qbgmYe3ja8AibIMn%2FILX%2Bne9AuDFJKlQJsd2GaNp62V9gLVp14kH2JbiPnidr%2FmSj9XPGBjTFXdJ6OHZrjfCiAb0A7JWi9Tg9OqmQwGvQndRi1LNgN4tr5ITJppPTGedKq%2BNxxRCmRvALyDedgnSgIoKvaZxl%2BVz3vStgwiPM0X%2FYjjAOHjCWxqbeNF9KW2d9lIYLg99bR6EB3nXoYLwZY38%2BRRGhja8CoZfm%2FL%2FaRmSxh8pE7CIwu9C%2BSMDS9EGSbMgcxy0lLQgEiqGT0kJKsP4%2FD2AEQMqHdzJu7iuMvIvhza7SmPlxwd%2B8LHKNh%2BpFqMSy99BRmCgHtdOjuESutYX5mAVAxsCmwq3Ayafhxy8Zu2iqYm16RD245aZbYx%2FVfDWeyGD2I1h0XDChWjMcjzP0SaK9w%2Bud8is%2FCXe%2F8C7MwtzHONRFArtDIH1qB1k86Qym7wrT6YeGU1V8nDiOJXJI08XN1Id7oak4cFWPmt%2FVcO093gQOrDtqUzgywg38%2FSvxyq3A%2BGatSBrLtfCghn%2Fjme%2FY3N2Qp5HPxsp3SZlq8cOUtwQqHcwa1v7U3%2FmMUOs12jZL88jXAwcZjrye1rcqv6YBaguVlgPLzgQRX9xjMIaL38QGOqUBqUqsVQUxubKsGuseWrserM4zBPYR63kRVGgqa5uCXaxVX%2FyAMROM7yDFaWzppqRvI76%2FWt16L32%2BMSrITaxalHNLNeYwNlEdtx9lNlQSYVKSGSXXPvgNSFFeUp8tfaromfMcNHQLoSdsGVqdjj7fiZCcdxUperE0bxTkZf26z1OqAmqmfICcI75k%2FQCAZBi4IZ5v3BvtOaok04cxCpcmuMW2xjSG&X-Amz-Signature=f3173cf4c02abc7abad1a046e14c07576fd51b7ce9e9e40e27d38b64b193c820&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBYPIOVX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyo2HIwvI0c%2BN3cnJ5Wit8YubUWid6iEW%2FpDQPM2C0OQIgXxxvGWuAOWmjx5xHHYxJ4E8LR7TDVUQMRfiGQX7QexoqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6dQFQPKbboucyCxSrcAxgUEs%2BjVl9E1D2qbgmYe3ja8AibIMn%2FILX%2Bne9AuDFJKlQJsd2GaNp62V9gLVp14kH2JbiPnidr%2FmSj9XPGBjTFXdJ6OHZrjfCiAb0A7JWi9Tg9OqmQwGvQndRi1LNgN4tr5ITJppPTGedKq%2BNxxRCmRvALyDedgnSgIoKvaZxl%2BVz3vStgwiPM0X%2FYjjAOHjCWxqbeNF9KW2d9lIYLg99bR6EB3nXoYLwZY38%2BRRGhja8CoZfm%2FL%2FaRmSxh8pE7CIwu9C%2BSMDS9EGSbMgcxy0lLQgEiqGT0kJKsP4%2FD2AEQMqHdzJu7iuMvIvhza7SmPlxwd%2B8LHKNh%2BpFqMSy99BRmCgHtdOjuESutYX5mAVAxsCmwq3Ayafhxy8Zu2iqYm16RD245aZbYx%2FVfDWeyGD2I1h0XDChWjMcjzP0SaK9w%2Bud8is%2FCXe%2F8C7MwtzHONRFArtDIH1qB1k86Qym7wrT6YeGU1V8nDiOJXJI08XN1Id7oak4cFWPmt%2FVcO093gQOrDtqUzgywg38%2FSvxyq3A%2BGatSBrLtfCghn%2Fjme%2FY3N2Qp5HPxsp3SZlq8cOUtwQqHcwa1v7U3%2FmMUOs12jZL88jXAwcZjrye1rcqv6YBaguVlgPLzgQRX9xjMIaL38QGOqUBqUqsVQUxubKsGuseWrserM4zBPYR63kRVGgqa5uCXaxVX%2FyAMROM7yDFaWzppqRvI76%2FWt16L32%2BMSrITaxalHNLNeYwNlEdtx9lNlQSYVKSGSXXPvgNSFFeUp8tfaromfMcNHQLoSdsGVqdjj7fiZCcdxUperE0bxTkZf26z1OqAmqmfICcI75k%2FQCAZBi4IZ5v3BvtOaok04cxCpcmuMW2xjSG&X-Amz-Signature=5106ed3c364f1e92154d4f22b21c883b0aca76434b98ebc72b874836807fb294&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBYPIOVX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyo2HIwvI0c%2BN3cnJ5Wit8YubUWid6iEW%2FpDQPM2C0OQIgXxxvGWuAOWmjx5xHHYxJ4E8LR7TDVUQMRfiGQX7QexoqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6dQFQPKbboucyCxSrcAxgUEs%2BjVl9E1D2qbgmYe3ja8AibIMn%2FILX%2Bne9AuDFJKlQJsd2GaNp62V9gLVp14kH2JbiPnidr%2FmSj9XPGBjTFXdJ6OHZrjfCiAb0A7JWi9Tg9OqmQwGvQndRi1LNgN4tr5ITJppPTGedKq%2BNxxRCmRvALyDedgnSgIoKvaZxl%2BVz3vStgwiPM0X%2FYjjAOHjCWxqbeNF9KW2d9lIYLg99bR6EB3nXoYLwZY38%2BRRGhja8CoZfm%2FL%2FaRmSxh8pE7CIwu9C%2BSMDS9EGSbMgcxy0lLQgEiqGT0kJKsP4%2FD2AEQMqHdzJu7iuMvIvhza7SmPlxwd%2B8LHKNh%2BpFqMSy99BRmCgHtdOjuESutYX5mAVAxsCmwq3Ayafhxy8Zu2iqYm16RD245aZbYx%2FVfDWeyGD2I1h0XDChWjMcjzP0SaK9w%2Bud8is%2FCXe%2F8C7MwtzHONRFArtDIH1qB1k86Qym7wrT6YeGU1V8nDiOJXJI08XN1Id7oak4cFWPmt%2FVcO093gQOrDtqUzgywg38%2FSvxyq3A%2BGatSBrLtfCghn%2Fjme%2FY3N2Qp5HPxsp3SZlq8cOUtwQqHcwa1v7U3%2FmMUOs12jZL88jXAwcZjrye1rcqv6YBaguVlgPLzgQRX9xjMIaL38QGOqUBqUqsVQUxubKsGuseWrserM4zBPYR63kRVGgqa5uCXaxVX%2FyAMROM7yDFaWzppqRvI76%2FWt16L32%2BMSrITaxalHNLNeYwNlEdtx9lNlQSYVKSGSXXPvgNSFFeUp8tfaromfMcNHQLoSdsGVqdjj7fiZCcdxUperE0bxTkZf26z1OqAmqmfICcI75k%2FQCAZBi4IZ5v3BvtOaok04cxCpcmuMW2xjSG&X-Amz-Signature=494c40328ebf35a5b790849241d4bdeb94e4c5c5a9dc8c831749b77943d0fb44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBYPIOVX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyo2HIwvI0c%2BN3cnJ5Wit8YubUWid6iEW%2FpDQPM2C0OQIgXxxvGWuAOWmjx5xHHYxJ4E8LR7TDVUQMRfiGQX7QexoqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6dQFQPKbboucyCxSrcAxgUEs%2BjVl9E1D2qbgmYe3ja8AibIMn%2FILX%2Bne9AuDFJKlQJsd2GaNp62V9gLVp14kH2JbiPnidr%2FmSj9XPGBjTFXdJ6OHZrjfCiAb0A7JWi9Tg9OqmQwGvQndRi1LNgN4tr5ITJppPTGedKq%2BNxxRCmRvALyDedgnSgIoKvaZxl%2BVz3vStgwiPM0X%2FYjjAOHjCWxqbeNF9KW2d9lIYLg99bR6EB3nXoYLwZY38%2BRRGhja8CoZfm%2FL%2FaRmSxh8pE7CIwu9C%2BSMDS9EGSbMgcxy0lLQgEiqGT0kJKsP4%2FD2AEQMqHdzJu7iuMvIvhza7SmPlxwd%2B8LHKNh%2BpFqMSy99BRmCgHtdOjuESutYX5mAVAxsCmwq3Ayafhxy8Zu2iqYm16RD245aZbYx%2FVfDWeyGD2I1h0XDChWjMcjzP0SaK9w%2Bud8is%2FCXe%2F8C7MwtzHONRFArtDIH1qB1k86Qym7wrT6YeGU1V8nDiOJXJI08XN1Id7oak4cFWPmt%2FVcO093gQOrDtqUzgywg38%2FSvxyq3A%2BGatSBrLtfCghn%2Fjme%2FY3N2Qp5HPxsp3SZlq8cOUtwQqHcwa1v7U3%2FmMUOs12jZL88jXAwcZjrye1rcqv6YBaguVlgPLzgQRX9xjMIaL38QGOqUBqUqsVQUxubKsGuseWrserM4zBPYR63kRVGgqa5uCXaxVX%2FyAMROM7yDFaWzppqRvI76%2FWt16L32%2BMSrITaxalHNLNeYwNlEdtx9lNlQSYVKSGSXXPvgNSFFeUp8tfaromfMcNHQLoSdsGVqdjj7fiZCcdxUperE0bxTkZf26z1OqAmqmfICcI75k%2FQCAZBi4IZ5v3BvtOaok04cxCpcmuMW2xjSG&X-Amz-Signature=1a4f7dbbc6dbb8c9188e477f8e5c1e18ebd4044d293baa4a1bbc19decd1de81e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBYPIOVX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyo2HIwvI0c%2BN3cnJ5Wit8YubUWid6iEW%2FpDQPM2C0OQIgXxxvGWuAOWmjx5xHHYxJ4E8LR7TDVUQMRfiGQX7QexoqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6dQFQPKbboucyCxSrcAxgUEs%2BjVl9E1D2qbgmYe3ja8AibIMn%2FILX%2Bne9AuDFJKlQJsd2GaNp62V9gLVp14kH2JbiPnidr%2FmSj9XPGBjTFXdJ6OHZrjfCiAb0A7JWi9Tg9OqmQwGvQndRi1LNgN4tr5ITJppPTGedKq%2BNxxRCmRvALyDedgnSgIoKvaZxl%2BVz3vStgwiPM0X%2FYjjAOHjCWxqbeNF9KW2d9lIYLg99bR6EB3nXoYLwZY38%2BRRGhja8CoZfm%2FL%2FaRmSxh8pE7CIwu9C%2BSMDS9EGSbMgcxy0lLQgEiqGT0kJKsP4%2FD2AEQMqHdzJu7iuMvIvhza7SmPlxwd%2B8LHKNh%2BpFqMSy99BRmCgHtdOjuESutYX5mAVAxsCmwq3Ayafhxy8Zu2iqYm16RD245aZbYx%2FVfDWeyGD2I1h0XDChWjMcjzP0SaK9w%2Bud8is%2FCXe%2F8C7MwtzHONRFArtDIH1qB1k86Qym7wrT6YeGU1V8nDiOJXJI08XN1Id7oak4cFWPmt%2FVcO093gQOrDtqUzgywg38%2FSvxyq3A%2BGatSBrLtfCghn%2Fjme%2FY3N2Qp5HPxsp3SZlq8cOUtwQqHcwa1v7U3%2FmMUOs12jZL88jXAwcZjrye1rcqv6YBaguVlgPLzgQRX9xjMIaL38QGOqUBqUqsVQUxubKsGuseWrserM4zBPYR63kRVGgqa5uCXaxVX%2FyAMROM7yDFaWzppqRvI76%2FWt16L32%2BMSrITaxalHNLNeYwNlEdtx9lNlQSYVKSGSXXPvgNSFFeUp8tfaromfMcNHQLoSdsGVqdjj7fiZCcdxUperE0bxTkZf26z1OqAmqmfICcI75k%2FQCAZBi4IZ5v3BvtOaok04cxCpcmuMW2xjSG&X-Amz-Signature=0fcf9bf6ad5f273b2aea04f93ee756fd0d24a202816c65e6b5eb053c10706a4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBYPIOVX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyo2HIwvI0c%2BN3cnJ5Wit8YubUWid6iEW%2FpDQPM2C0OQIgXxxvGWuAOWmjx5xHHYxJ4E8LR7TDVUQMRfiGQX7QexoqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6dQFQPKbboucyCxSrcAxgUEs%2BjVl9E1D2qbgmYe3ja8AibIMn%2FILX%2Bne9AuDFJKlQJsd2GaNp62V9gLVp14kH2JbiPnidr%2FmSj9XPGBjTFXdJ6OHZrjfCiAb0A7JWi9Tg9OqmQwGvQndRi1LNgN4tr5ITJppPTGedKq%2BNxxRCmRvALyDedgnSgIoKvaZxl%2BVz3vStgwiPM0X%2FYjjAOHjCWxqbeNF9KW2d9lIYLg99bR6EB3nXoYLwZY38%2BRRGhja8CoZfm%2FL%2FaRmSxh8pE7CIwu9C%2BSMDS9EGSbMgcxy0lLQgEiqGT0kJKsP4%2FD2AEQMqHdzJu7iuMvIvhza7SmPlxwd%2B8LHKNh%2BpFqMSy99BRmCgHtdOjuESutYX5mAVAxsCmwq3Ayafhxy8Zu2iqYm16RD245aZbYx%2FVfDWeyGD2I1h0XDChWjMcjzP0SaK9w%2Bud8is%2FCXe%2F8C7MwtzHONRFArtDIH1qB1k86Qym7wrT6YeGU1V8nDiOJXJI08XN1Id7oak4cFWPmt%2FVcO093gQOrDtqUzgywg38%2FSvxyq3A%2BGatSBrLtfCghn%2Fjme%2FY3N2Qp5HPxsp3SZlq8cOUtwQqHcwa1v7U3%2FmMUOs12jZL88jXAwcZjrye1rcqv6YBaguVlgPLzgQRX9xjMIaL38QGOqUBqUqsVQUxubKsGuseWrserM4zBPYR63kRVGgqa5uCXaxVX%2FyAMROM7yDFaWzppqRvI76%2FWt16L32%2BMSrITaxalHNLNeYwNlEdtx9lNlQSYVKSGSXXPvgNSFFeUp8tfaromfMcNHQLoSdsGVqdjj7fiZCcdxUperE0bxTkZf26z1OqAmqmfICcI75k%2FQCAZBi4IZ5v3BvtOaok04cxCpcmuMW2xjSG&X-Amz-Signature=43b0876b1a1032bf7d62cce9270ec5ac501a7058542082c069cb17f2bf0b28b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
