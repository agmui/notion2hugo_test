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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466737ZJ3SK%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCICS%2FCpsAxvFeS0iA9YPDYItQ4jB9XAcnf5Ft1ScwZv1FAiAPXgzkoJyEHFtq6b6pvT5C9Cm9jsxLlNItzezFC0%2FfUCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnQr%2BSjtSzCJTXej%2FKtwD8u3NB3FqOPB1DLGaYcRYztOoRU6qmCAdpljCKqrutnbsiQDAWqK6igmJi6LavkIPHYxCW%2Fbcphd1%2FqrEDL2ExVRO%2FItnQhZRIaKRES9ahQxk5lN7Z6m3ruZ0Jv3kftpyZoB3oPH7KrqEoNLA5PyKnrQhPwXkhLHbOpzXnSP9g%2FSC45IqB2rr3Q82pWi4MHcnPzCfktGpnFPXLFMhq670GiCDQu5w0H%2FG0UJFECwyHiv68nrzVgkpZWs4HahQJZB5QFTPGR22KZ6dxOMH0jMTsczpEfZBk5QTUUvesfnWAgTIPMlAAgH30mgQtaXbA04wLyMMxoIS%2BnVF9tcy24jFAdJogqQYGDIjkUfSlfAb0%2FyjkelgTpU%2BlaLQNT5clmXQBdtbymFEZrpmPk%2FhDJjdYekqzl5ZP6ITyvJJtrxVuS%2FU1L6agrjPU%2B%2BDJ1B3WxruiOCvVBK7gK2MYRCK2GToAYko2NByJtSgCJHgfS7lYrl7BmVFow1WxJADOkATUxiJzxNrn4C%2Bxrfpo0Vz3bz5jk%2FdUrrbXUW%2BGMiRuODHx5p6Jk5XEP%2FYD2s%2BA8u6ti5QNVDJYHmEzsGiHAZk5v7StsXQGXUwctTSPAoRKifjO%2FjACkgEwpbDfsSb9zkwoa3bxwY6pgEVNbj5cozWC2WdSoxTkWfSfxVPBQCUHtTjagvHeyHT%2F9UWCQk9s%2B%2ByS4ePmXx3MJUIUZHoTngOEmsqOx5N3n4jSt4kdRxd3gYnD1kagqsnVOJ18Wb%2BrC8JQ5rEteRRyN47O0OLm6iJ7D5Vyl10Zq7I5NJ4%2B8zZwnuptT%2FHAlZxjc6XMPTvEimBt8vIxqAVemT0OkN32tlYekjwZRDjWr6cDbUz6Syi&X-Amz-Signature=b28be0046ece053926278eada09a0ef611c902fb68cbfc047ebe92350135c98f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UAWFMWL%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCID%2FOc8LHTiuYQhuOZPl9KZcloUsJuw5D3RNXa39Hd%2FU9AiEAqvccFdxmYivepXZ2ZIi5uTO%2BFCG0pAab3S7acZWMZI4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKp%2FFkVI55bhPePJgircAzfRoYIBnOcUgwkZTy%2FMvVga6vBr6LWSx161LVvI6q8aFmLEZHUseHbPsU4AIihdcZ4FgiFJ1TLqaNeo0jp3EVHEF8J8E6B0lFmQUHZtRgYvm1f3Wp38NSRqpbTwc8mhlKFj7SoTMNHG8rFSJyo4%2B%2Ft%2BNqqtbG9g%2ByFiIJQ53YewerG8iMfPTf5tAtrCb%2B04s9TVEHa7DNqTflnwZnXNCQ%2F77CfI7poNbatzaXT%2B%2FdbE95sJBrkp3Y%2F%2FM4VpOYc2eTCvMqJth402X%2FP%2FDHhjpEV0hzD7lB8DB0Xh79HS3D2LeUE9HQO%2B6%2FFAyLjUERGTdK4If5zIxYttq8rAOZ3oLFPsT0qX9llkr7L7K%2B5ON%2BRSeTI%2FflSEbgW5crB5uG3q%2FnwX2FUacQqKxGoaIDd4LC8m3GmOC5wg2djg6ve7bWxvpDCcKclENrAUepHt%2Fmkd8J0BMvYTh6ph%2BGYuAAqAHjlZAyC6aumLY0U5VIF%2BXjLaeiZ17E4J8McS88R5WsFGF1KZ69t8tpWtIZuvAD0pYW8H0qm4Mvkg5bC1nkz3vXIoT30ropbedP%2BTceAtXYpOUlXMnKn%2FS2UvBqNIMgVphak67WAaTqXIZYe1rUzHYUj%2BgyleT0JL8OgJrw0dMJ%2Bt28cGOqUBNzzJNt9xGZCsXbi0a%2BSz6ibuq6jdhGPOWNQrYBsufVfn1ecVWJZem1A7DBv%2FdN8MM7LPycj03hP0uCR8KIXKxiIjtlrv5AJ%2B07mLB6ZBJoldmFCpMnf9b9ozuwJ1KJRIHh3f2ngyYbtuSuiPxAE0Vh4MsxjLkEB3pc38PclHBB6ScEsGSACFA%2Fn%2FNNNPZl5A9HUhnjS%2F%2B6RN55%2BXTi2n2I6I2lKn&X-Amz-Signature=6ef9fb8ee4fac3720139c7cd261de68bac87a2016276e75a77ad420a7259d1fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UAWFMWL%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCID%2FOc8LHTiuYQhuOZPl9KZcloUsJuw5D3RNXa39Hd%2FU9AiEAqvccFdxmYivepXZ2ZIi5uTO%2BFCG0pAab3S7acZWMZI4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKp%2FFkVI55bhPePJgircAzfRoYIBnOcUgwkZTy%2FMvVga6vBr6LWSx161LVvI6q8aFmLEZHUseHbPsU4AIihdcZ4FgiFJ1TLqaNeo0jp3EVHEF8J8E6B0lFmQUHZtRgYvm1f3Wp38NSRqpbTwc8mhlKFj7SoTMNHG8rFSJyo4%2B%2Ft%2BNqqtbG9g%2ByFiIJQ53YewerG8iMfPTf5tAtrCb%2B04s9TVEHa7DNqTflnwZnXNCQ%2F77CfI7poNbatzaXT%2B%2FdbE95sJBrkp3Y%2F%2FM4VpOYc2eTCvMqJth402X%2FP%2FDHhjpEV0hzD7lB8DB0Xh79HS3D2LeUE9HQO%2B6%2FFAyLjUERGTdK4If5zIxYttq8rAOZ3oLFPsT0qX9llkr7L7K%2B5ON%2BRSeTI%2FflSEbgW5crB5uG3q%2FnwX2FUacQqKxGoaIDd4LC8m3GmOC5wg2djg6ve7bWxvpDCcKclENrAUepHt%2Fmkd8J0BMvYTh6ph%2BGYuAAqAHjlZAyC6aumLY0U5VIF%2BXjLaeiZ17E4J8McS88R5WsFGF1KZ69t8tpWtIZuvAD0pYW8H0qm4Mvkg5bC1nkz3vXIoT30ropbedP%2BTceAtXYpOUlXMnKn%2FS2UvBqNIMgVphak67WAaTqXIZYe1rUzHYUj%2BgyleT0JL8OgJrw0dMJ%2Bt28cGOqUBNzzJNt9xGZCsXbi0a%2BSz6ibuq6jdhGPOWNQrYBsufVfn1ecVWJZem1A7DBv%2FdN8MM7LPycj03hP0uCR8KIXKxiIjtlrv5AJ%2B07mLB6ZBJoldmFCpMnf9b9ozuwJ1KJRIHh3f2ngyYbtuSuiPxAE0Vh4MsxjLkEB3pc38PclHBB6ScEsGSACFA%2Fn%2FNNNPZl5A9HUhnjS%2F%2B6RN55%2BXTi2n2I6I2lKn&X-Amz-Signature=dba6022c7838e3b8d12c5a494ffa6064855f61395801375e4460c1c75ac51a50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UAWFMWL%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCID%2FOc8LHTiuYQhuOZPl9KZcloUsJuw5D3RNXa39Hd%2FU9AiEAqvccFdxmYivepXZ2ZIi5uTO%2BFCG0pAab3S7acZWMZI4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKp%2FFkVI55bhPePJgircAzfRoYIBnOcUgwkZTy%2FMvVga6vBr6LWSx161LVvI6q8aFmLEZHUseHbPsU4AIihdcZ4FgiFJ1TLqaNeo0jp3EVHEF8J8E6B0lFmQUHZtRgYvm1f3Wp38NSRqpbTwc8mhlKFj7SoTMNHG8rFSJyo4%2B%2Ft%2BNqqtbG9g%2ByFiIJQ53YewerG8iMfPTf5tAtrCb%2B04s9TVEHa7DNqTflnwZnXNCQ%2F77CfI7poNbatzaXT%2B%2FdbE95sJBrkp3Y%2F%2FM4VpOYc2eTCvMqJth402X%2FP%2FDHhjpEV0hzD7lB8DB0Xh79HS3D2LeUE9HQO%2B6%2FFAyLjUERGTdK4If5zIxYttq8rAOZ3oLFPsT0qX9llkr7L7K%2B5ON%2BRSeTI%2FflSEbgW5crB5uG3q%2FnwX2FUacQqKxGoaIDd4LC8m3GmOC5wg2djg6ve7bWxvpDCcKclENrAUepHt%2Fmkd8J0BMvYTh6ph%2BGYuAAqAHjlZAyC6aumLY0U5VIF%2BXjLaeiZ17E4J8McS88R5WsFGF1KZ69t8tpWtIZuvAD0pYW8H0qm4Mvkg5bC1nkz3vXIoT30ropbedP%2BTceAtXYpOUlXMnKn%2FS2UvBqNIMgVphak67WAaTqXIZYe1rUzHYUj%2BgyleT0JL8OgJrw0dMJ%2Bt28cGOqUBNzzJNt9xGZCsXbi0a%2BSz6ibuq6jdhGPOWNQrYBsufVfn1ecVWJZem1A7DBv%2FdN8MM7LPycj03hP0uCR8KIXKxiIjtlrv5AJ%2B07mLB6ZBJoldmFCpMnf9b9ozuwJ1KJRIHh3f2ngyYbtuSuiPxAE0Vh4MsxjLkEB3pc38PclHBB6ScEsGSACFA%2Fn%2FNNNPZl5A9HUhnjS%2F%2B6RN55%2BXTi2n2I6I2lKn&X-Amz-Signature=8706fde9b0d03547a6b9884e036f2266a8690ad8e7d8128fc9b6b82d058f4ef2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UAWFMWL%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCID%2FOc8LHTiuYQhuOZPl9KZcloUsJuw5D3RNXa39Hd%2FU9AiEAqvccFdxmYivepXZ2ZIi5uTO%2BFCG0pAab3S7acZWMZI4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKp%2FFkVI55bhPePJgircAzfRoYIBnOcUgwkZTy%2FMvVga6vBr6LWSx161LVvI6q8aFmLEZHUseHbPsU4AIihdcZ4FgiFJ1TLqaNeo0jp3EVHEF8J8E6B0lFmQUHZtRgYvm1f3Wp38NSRqpbTwc8mhlKFj7SoTMNHG8rFSJyo4%2B%2Ft%2BNqqtbG9g%2ByFiIJQ53YewerG8iMfPTf5tAtrCb%2B04s9TVEHa7DNqTflnwZnXNCQ%2F77CfI7poNbatzaXT%2B%2FdbE95sJBrkp3Y%2F%2FM4VpOYc2eTCvMqJth402X%2FP%2FDHhjpEV0hzD7lB8DB0Xh79HS3D2LeUE9HQO%2B6%2FFAyLjUERGTdK4If5zIxYttq8rAOZ3oLFPsT0qX9llkr7L7K%2B5ON%2BRSeTI%2FflSEbgW5crB5uG3q%2FnwX2FUacQqKxGoaIDd4LC8m3GmOC5wg2djg6ve7bWxvpDCcKclENrAUepHt%2Fmkd8J0BMvYTh6ph%2BGYuAAqAHjlZAyC6aumLY0U5VIF%2BXjLaeiZ17E4J8McS88R5WsFGF1KZ69t8tpWtIZuvAD0pYW8H0qm4Mvkg5bC1nkz3vXIoT30ropbedP%2BTceAtXYpOUlXMnKn%2FS2UvBqNIMgVphak67WAaTqXIZYe1rUzHYUj%2BgyleT0JL8OgJrw0dMJ%2Bt28cGOqUBNzzJNt9xGZCsXbi0a%2BSz6ibuq6jdhGPOWNQrYBsufVfn1ecVWJZem1A7DBv%2FdN8MM7LPycj03hP0uCR8KIXKxiIjtlrv5AJ%2B07mLB6ZBJoldmFCpMnf9b9ozuwJ1KJRIHh3f2ngyYbtuSuiPxAE0Vh4MsxjLkEB3pc38PclHBB6ScEsGSACFA%2Fn%2FNNNPZl5A9HUhnjS%2F%2B6RN55%2BXTi2n2I6I2lKn&X-Amz-Signature=8711325d4036aa9e6a853cc9a5a1617df08c20725c49dd1dc88800536ef1872c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UAWFMWL%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCID%2FOc8LHTiuYQhuOZPl9KZcloUsJuw5D3RNXa39Hd%2FU9AiEAqvccFdxmYivepXZ2ZIi5uTO%2BFCG0pAab3S7acZWMZI4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKp%2FFkVI55bhPePJgircAzfRoYIBnOcUgwkZTy%2FMvVga6vBr6LWSx161LVvI6q8aFmLEZHUseHbPsU4AIihdcZ4FgiFJ1TLqaNeo0jp3EVHEF8J8E6B0lFmQUHZtRgYvm1f3Wp38NSRqpbTwc8mhlKFj7SoTMNHG8rFSJyo4%2B%2Ft%2BNqqtbG9g%2ByFiIJQ53YewerG8iMfPTf5tAtrCb%2B04s9TVEHa7DNqTflnwZnXNCQ%2F77CfI7poNbatzaXT%2B%2FdbE95sJBrkp3Y%2F%2FM4VpOYc2eTCvMqJth402X%2FP%2FDHhjpEV0hzD7lB8DB0Xh79HS3D2LeUE9HQO%2B6%2FFAyLjUERGTdK4If5zIxYttq8rAOZ3oLFPsT0qX9llkr7L7K%2B5ON%2BRSeTI%2FflSEbgW5crB5uG3q%2FnwX2FUacQqKxGoaIDd4LC8m3GmOC5wg2djg6ve7bWxvpDCcKclENrAUepHt%2Fmkd8J0BMvYTh6ph%2BGYuAAqAHjlZAyC6aumLY0U5VIF%2BXjLaeiZ17E4J8McS88R5WsFGF1KZ69t8tpWtIZuvAD0pYW8H0qm4Mvkg5bC1nkz3vXIoT30ropbedP%2BTceAtXYpOUlXMnKn%2FS2UvBqNIMgVphak67WAaTqXIZYe1rUzHYUj%2BgyleT0JL8OgJrw0dMJ%2Bt28cGOqUBNzzJNt9xGZCsXbi0a%2BSz6ibuq6jdhGPOWNQrYBsufVfn1ecVWJZem1A7DBv%2FdN8MM7LPycj03hP0uCR8KIXKxiIjtlrv5AJ%2B07mLB6ZBJoldmFCpMnf9b9ozuwJ1KJRIHh3f2ngyYbtuSuiPxAE0Vh4MsxjLkEB3pc38PclHBB6ScEsGSACFA%2Fn%2FNNNPZl5A9HUhnjS%2F%2B6RN55%2BXTi2n2I6I2lKn&X-Amz-Signature=0c03d5797b365d60f7a234c80a6a852faf3eebfe53d4f442ac5dde3ef33f1e0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UAWFMWL%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCID%2FOc8LHTiuYQhuOZPl9KZcloUsJuw5D3RNXa39Hd%2FU9AiEAqvccFdxmYivepXZ2ZIi5uTO%2BFCG0pAab3S7acZWMZI4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKp%2FFkVI55bhPePJgircAzfRoYIBnOcUgwkZTy%2FMvVga6vBr6LWSx161LVvI6q8aFmLEZHUseHbPsU4AIihdcZ4FgiFJ1TLqaNeo0jp3EVHEF8J8E6B0lFmQUHZtRgYvm1f3Wp38NSRqpbTwc8mhlKFj7SoTMNHG8rFSJyo4%2B%2Ft%2BNqqtbG9g%2ByFiIJQ53YewerG8iMfPTf5tAtrCb%2B04s9TVEHa7DNqTflnwZnXNCQ%2F77CfI7poNbatzaXT%2B%2FdbE95sJBrkp3Y%2F%2FM4VpOYc2eTCvMqJth402X%2FP%2FDHhjpEV0hzD7lB8DB0Xh79HS3D2LeUE9HQO%2B6%2FFAyLjUERGTdK4If5zIxYttq8rAOZ3oLFPsT0qX9llkr7L7K%2B5ON%2BRSeTI%2FflSEbgW5crB5uG3q%2FnwX2FUacQqKxGoaIDd4LC8m3GmOC5wg2djg6ve7bWxvpDCcKclENrAUepHt%2Fmkd8J0BMvYTh6ph%2BGYuAAqAHjlZAyC6aumLY0U5VIF%2BXjLaeiZ17E4J8McS88R5WsFGF1KZ69t8tpWtIZuvAD0pYW8H0qm4Mvkg5bC1nkz3vXIoT30ropbedP%2BTceAtXYpOUlXMnKn%2FS2UvBqNIMgVphak67WAaTqXIZYe1rUzHYUj%2BgyleT0JL8OgJrw0dMJ%2Bt28cGOqUBNzzJNt9xGZCsXbi0a%2BSz6ibuq6jdhGPOWNQrYBsufVfn1ecVWJZem1A7DBv%2FdN8MM7LPycj03hP0uCR8KIXKxiIjtlrv5AJ%2B07mLB6ZBJoldmFCpMnf9b9ozuwJ1KJRIHh3f2ngyYbtuSuiPxAE0Vh4MsxjLkEB3pc38PclHBB6ScEsGSACFA%2Fn%2FNNNPZl5A9HUhnjS%2F%2B6RN55%2BXTi2n2I6I2lKn&X-Amz-Signature=4d30c544ab5dbb6bf9b56cd42efe406f26b4fdeb257796dcfeed874e1889fc36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UAWFMWL%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCID%2FOc8LHTiuYQhuOZPl9KZcloUsJuw5D3RNXa39Hd%2FU9AiEAqvccFdxmYivepXZ2ZIi5uTO%2BFCG0pAab3S7acZWMZI4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKp%2FFkVI55bhPePJgircAzfRoYIBnOcUgwkZTy%2FMvVga6vBr6LWSx161LVvI6q8aFmLEZHUseHbPsU4AIihdcZ4FgiFJ1TLqaNeo0jp3EVHEF8J8E6B0lFmQUHZtRgYvm1f3Wp38NSRqpbTwc8mhlKFj7SoTMNHG8rFSJyo4%2B%2Ft%2BNqqtbG9g%2ByFiIJQ53YewerG8iMfPTf5tAtrCb%2B04s9TVEHa7DNqTflnwZnXNCQ%2F77CfI7poNbatzaXT%2B%2FdbE95sJBrkp3Y%2F%2FM4VpOYc2eTCvMqJth402X%2FP%2FDHhjpEV0hzD7lB8DB0Xh79HS3D2LeUE9HQO%2B6%2FFAyLjUERGTdK4If5zIxYttq8rAOZ3oLFPsT0qX9llkr7L7K%2B5ON%2BRSeTI%2FflSEbgW5crB5uG3q%2FnwX2FUacQqKxGoaIDd4LC8m3GmOC5wg2djg6ve7bWxvpDCcKclENrAUepHt%2Fmkd8J0BMvYTh6ph%2BGYuAAqAHjlZAyC6aumLY0U5VIF%2BXjLaeiZ17E4J8McS88R5WsFGF1KZ69t8tpWtIZuvAD0pYW8H0qm4Mvkg5bC1nkz3vXIoT30ropbedP%2BTceAtXYpOUlXMnKn%2FS2UvBqNIMgVphak67WAaTqXIZYe1rUzHYUj%2BgyleT0JL8OgJrw0dMJ%2Bt28cGOqUBNzzJNt9xGZCsXbi0a%2BSz6ibuq6jdhGPOWNQrYBsufVfn1ecVWJZem1A7DBv%2FdN8MM7LPycj03hP0uCR8KIXKxiIjtlrv5AJ%2B07mLB6ZBJoldmFCpMnf9b9ozuwJ1KJRIHh3f2ngyYbtuSuiPxAE0Vh4MsxjLkEB3pc38PclHBB6ScEsGSACFA%2Fn%2FNNNPZl5A9HUhnjS%2F%2B6RN55%2BXTi2n2I6I2lKn&X-Amz-Signature=b96f04decff82ef08853350f819cd86281831d56bc093000767f87065e1bdc93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UAWFMWL%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCID%2FOc8LHTiuYQhuOZPl9KZcloUsJuw5D3RNXa39Hd%2FU9AiEAqvccFdxmYivepXZ2ZIi5uTO%2BFCG0pAab3S7acZWMZI4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKp%2FFkVI55bhPePJgircAzfRoYIBnOcUgwkZTy%2FMvVga6vBr6LWSx161LVvI6q8aFmLEZHUseHbPsU4AIihdcZ4FgiFJ1TLqaNeo0jp3EVHEF8J8E6B0lFmQUHZtRgYvm1f3Wp38NSRqpbTwc8mhlKFj7SoTMNHG8rFSJyo4%2B%2Ft%2BNqqtbG9g%2ByFiIJQ53YewerG8iMfPTf5tAtrCb%2B04s9TVEHa7DNqTflnwZnXNCQ%2F77CfI7poNbatzaXT%2B%2FdbE95sJBrkp3Y%2F%2FM4VpOYc2eTCvMqJth402X%2FP%2FDHhjpEV0hzD7lB8DB0Xh79HS3D2LeUE9HQO%2B6%2FFAyLjUERGTdK4If5zIxYttq8rAOZ3oLFPsT0qX9llkr7L7K%2B5ON%2BRSeTI%2FflSEbgW5crB5uG3q%2FnwX2FUacQqKxGoaIDd4LC8m3GmOC5wg2djg6ve7bWxvpDCcKclENrAUepHt%2Fmkd8J0BMvYTh6ph%2BGYuAAqAHjlZAyC6aumLY0U5VIF%2BXjLaeiZ17E4J8McS88R5WsFGF1KZ69t8tpWtIZuvAD0pYW8H0qm4Mvkg5bC1nkz3vXIoT30ropbedP%2BTceAtXYpOUlXMnKn%2FS2UvBqNIMgVphak67WAaTqXIZYe1rUzHYUj%2BgyleT0JL8OgJrw0dMJ%2Bt28cGOqUBNzzJNt9xGZCsXbi0a%2BSz6ibuq6jdhGPOWNQrYBsufVfn1ecVWJZem1A7DBv%2FdN8MM7LPycj03hP0uCR8KIXKxiIjtlrv5AJ%2B07mLB6ZBJoldmFCpMnf9b9ozuwJ1KJRIHh3f2ngyYbtuSuiPxAE0Vh4MsxjLkEB3pc38PclHBB6ScEsGSACFA%2Fn%2FNNNPZl5A9HUhnjS%2F%2B6RN55%2BXTi2n2I6I2lKn&X-Amz-Signature=8a43e2f63d728dcfff46d2f8ecbb92f97a3652b53af469048f8e9b8ba8cc9458&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UAWFMWL%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCID%2FOc8LHTiuYQhuOZPl9KZcloUsJuw5D3RNXa39Hd%2FU9AiEAqvccFdxmYivepXZ2ZIi5uTO%2BFCG0pAab3S7acZWMZI4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKp%2FFkVI55bhPePJgircAzfRoYIBnOcUgwkZTy%2FMvVga6vBr6LWSx161LVvI6q8aFmLEZHUseHbPsU4AIihdcZ4FgiFJ1TLqaNeo0jp3EVHEF8J8E6B0lFmQUHZtRgYvm1f3Wp38NSRqpbTwc8mhlKFj7SoTMNHG8rFSJyo4%2B%2Ft%2BNqqtbG9g%2ByFiIJQ53YewerG8iMfPTf5tAtrCb%2B04s9TVEHa7DNqTflnwZnXNCQ%2F77CfI7poNbatzaXT%2B%2FdbE95sJBrkp3Y%2F%2FM4VpOYc2eTCvMqJth402X%2FP%2FDHhjpEV0hzD7lB8DB0Xh79HS3D2LeUE9HQO%2B6%2FFAyLjUERGTdK4If5zIxYttq8rAOZ3oLFPsT0qX9llkr7L7K%2B5ON%2BRSeTI%2FflSEbgW5crB5uG3q%2FnwX2FUacQqKxGoaIDd4LC8m3GmOC5wg2djg6ve7bWxvpDCcKclENrAUepHt%2Fmkd8J0BMvYTh6ph%2BGYuAAqAHjlZAyC6aumLY0U5VIF%2BXjLaeiZ17E4J8McS88R5WsFGF1KZ69t8tpWtIZuvAD0pYW8H0qm4Mvkg5bC1nkz3vXIoT30ropbedP%2BTceAtXYpOUlXMnKn%2FS2UvBqNIMgVphak67WAaTqXIZYe1rUzHYUj%2BgyleT0JL8OgJrw0dMJ%2Bt28cGOqUBNzzJNt9xGZCsXbi0a%2BSz6ibuq6jdhGPOWNQrYBsufVfn1ecVWJZem1A7DBv%2FdN8MM7LPycj03hP0uCR8KIXKxiIjtlrv5AJ%2B07mLB6ZBJoldmFCpMnf9b9ozuwJ1KJRIHh3f2ngyYbtuSuiPxAE0Vh4MsxjLkEB3pc38PclHBB6ScEsGSACFA%2Fn%2FNNNPZl5A9HUhnjS%2F%2B6RN55%2BXTi2n2I6I2lKn&X-Amz-Signature=00ccb54d08a52842b25863c40915a8ad1a02c7130c2b27c0908fdb995a3dec02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UAWFMWL%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCID%2FOc8LHTiuYQhuOZPl9KZcloUsJuw5D3RNXa39Hd%2FU9AiEAqvccFdxmYivepXZ2ZIi5uTO%2BFCG0pAab3S7acZWMZI4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKp%2FFkVI55bhPePJgircAzfRoYIBnOcUgwkZTy%2FMvVga6vBr6LWSx161LVvI6q8aFmLEZHUseHbPsU4AIihdcZ4FgiFJ1TLqaNeo0jp3EVHEF8J8E6B0lFmQUHZtRgYvm1f3Wp38NSRqpbTwc8mhlKFj7SoTMNHG8rFSJyo4%2B%2Ft%2BNqqtbG9g%2ByFiIJQ53YewerG8iMfPTf5tAtrCb%2B04s9TVEHa7DNqTflnwZnXNCQ%2F77CfI7poNbatzaXT%2B%2FdbE95sJBrkp3Y%2F%2FM4VpOYc2eTCvMqJth402X%2FP%2FDHhjpEV0hzD7lB8DB0Xh79HS3D2LeUE9HQO%2B6%2FFAyLjUERGTdK4If5zIxYttq8rAOZ3oLFPsT0qX9llkr7L7K%2B5ON%2BRSeTI%2FflSEbgW5crB5uG3q%2FnwX2FUacQqKxGoaIDd4LC8m3GmOC5wg2djg6ve7bWxvpDCcKclENrAUepHt%2Fmkd8J0BMvYTh6ph%2BGYuAAqAHjlZAyC6aumLY0U5VIF%2BXjLaeiZ17E4J8McS88R5WsFGF1KZ69t8tpWtIZuvAD0pYW8H0qm4Mvkg5bC1nkz3vXIoT30ropbedP%2BTceAtXYpOUlXMnKn%2FS2UvBqNIMgVphak67WAaTqXIZYe1rUzHYUj%2BgyleT0JL8OgJrw0dMJ%2Bt28cGOqUBNzzJNt9xGZCsXbi0a%2BSz6ibuq6jdhGPOWNQrYBsufVfn1ecVWJZem1A7DBv%2FdN8MM7LPycj03hP0uCR8KIXKxiIjtlrv5AJ%2B07mLB6ZBJoldmFCpMnf9b9ozuwJ1KJRIHh3f2ngyYbtuSuiPxAE0Vh4MsxjLkEB3pc38PclHBB6ScEsGSACFA%2Fn%2FNNNPZl5A9HUhnjS%2F%2B6RN55%2BXTi2n2I6I2lKn&X-Amz-Signature=8711325d4036aa9e6a853cc9a5a1617df08c20725c49dd1dc88800536ef1872c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
