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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWXUO2GJ%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEKJdmEYSv3MOH%2B5Nu0wAqlea0jpZjXANLMx5RQgRmLDAiEA8AZavhqF4sBJ0fuN4wRjNJbJpVDw7wnZISp5ijit0FIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDLPQXjdHPLDCjxXuQSrcA5D6diiLee8IPB7bSru0sy34zgUKoXX41MGRNVYcKdI2BLqI5qRqG8P%2FzLaLEbJ8AFYeqxVxBnh%2FI3m9qJ2uG1wlAdWDij%2FPPs4%2FMxmyO8qap5Bd0R5%2BWWEI6SvGzkepzMo2%2FXgOpxlaK93tkcNdtLZZMSQ81vG0kE1eVFT9mRJcIiS8yql2jqcwSXOCLuVTcLpQRjtEieb5NFWkruWSolBLOLi1o9OzOpv3trDlNM2urdoz%2Ba5DDDh80HAXWklyhM%2BPHofgydsga3lYdLklrP9behPFiM%2FZhqPqU59FcofEqpT4vAqJN5Zripi41qqqP4JhZ26KRITSkE1beHJQLWFf1nRkTeADFPikqJIOPke29IPI2CziLpYnD7hE9oXQChqazSEU%2B1mwxjmyO%2Fxl4CFSij7BUN4OIwB5LlPooTuKMuxagCA4R%2FXFtJNNuyN3s5tcpCkaGFEBF4Z5NYASqRnZEmOGaq8FZzWLl9qfSYvhBo52Y2j0M4kjneK%2FL%2BZeYazqn5CwDsj4yDpxsAcnkrSKxqNfL4ZQRnHTyqei7P8QNB92x3Gvslbyx8wfIla0yv7JOqZlzKVkfhDdHDx0Ga918tz5BTSBRF62eYNv5poRxgEa7N8xhoRfzKr9MKDMztQGOqUBRT%2FnvqCXeUBsfm28Uu9DPHeLjsS%2BDIlWldYgjAfI0DF8vxV0UH7qhtVqJCRbrjgJadJGsI8Z%2FW01FEV6Zjo9XGMtEbRv6rDF%2BEHtK2YhqSHgSz3WE6dkB6gBPihAKqzRm2IV0n3zCpHi4o0SbENQxzMgkDIiChQiBRUytd13uTQBY6rlrhph6yiwWGOwb2ZX4jxUosST48agltIgVHpOoT62rWLK&X-Amz-Signature=6e7cab02b599de16930e39ce9e91cdbba49a92943a541747b7a125f396b96fca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KGYFTJO%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7oDkKIphgCnCCOthx2121FtAeLfF4pPQnjLiVc4h26AIgZD%2BblLZ4NMvQCxbvQjAR%2BcaIxm8YMo8bL%2Bxe%2BsdXbrwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIFERmanWrSQCJxUnSrcAycxHYMRfFhImU2N8oqP86fDCfLFEdq11NiQqs6BklQugfwgJBMkAxePdh0KB9IugkPQky19y8fCGUPlMi8ucw8SeE%2Frvf7hbaTf06LzHwswNJzCFdKO%2FmJ9tluXIpsIPURawBHe6ULR6TKjgrYncYHhTqZtZYXb%2BrKipMA9PXTZV0kB8erd6zJlh6M913T1Q%2BJ6c0i4seLP%2Fj5khI7faurRxI461vQmRB0NSDAee7YchlceTbas1My%2BI6K4XCS9Tcr5hU65PvL3Q98zB%2BZ81oxfj4x6QEBARl0Snp0E3aIrN9eFyEGF7qs6IW%2BEMh3CLsSizBfSIp2k2JPy8TaDJXH94iJSrpjW3hTmmEi0YQfYovTcJQhPsHcnN481w6RK7qYxlq%2BQRQbR%2FvxMh6QLiwocq9XV%2BzJM4AECNd%2FyKATBenkQteg%2By8kXfNG8djt2WeKQ1aUrrJRyUNCLnL2ojrh05zcLd%2BOtCI3ptduKWs3DyB2px%2FwYR6IpjlIgqj49WUHr4dNGISQ%2BMTdR9z9nxrPGGWfyeukW0wOqIq7RF%2FKbxsXP1t0pG8RFRl1nqJvWIgQ0AScgjeMsu76rStRzBwm4QwccrJcU9j%2B%2Bk0Jzd1PSZZVHphwaAyuEDTVOMMnLztQGOqUBu7WKBvnx7mbyEbbAEu%2B6dEwl7T01Bn6og%2BqmNQXamBUXa8%2B0VPsxaB%2BQS2Ki%2FWOp3uhjvpWcwqek9jE4PRPT3xAYDKZQGQE6sdIJ5Bx9LRvjib5Qz8ezhOKuf6OMvgP6WOP9OP0WPLeUyg7aRIhOSnnnr8ybhpMsRZRO7WbAAUAH42VOE%2BjApH6xTkNVOKPSjk8B2AlGbcV6w78hcMecPnWR%2B%2FSm&X-Amz-Signature=94537a66c5b62199e02262504b85c689d39ed16403ac6b6c52bfc8cb4bf7f67b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KGYFTJO%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7oDkKIphgCnCCOthx2121FtAeLfF4pPQnjLiVc4h26AIgZD%2BblLZ4NMvQCxbvQjAR%2BcaIxm8YMo8bL%2Bxe%2BsdXbrwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIFERmanWrSQCJxUnSrcAycxHYMRfFhImU2N8oqP86fDCfLFEdq11NiQqs6BklQugfwgJBMkAxePdh0KB9IugkPQky19y8fCGUPlMi8ucw8SeE%2Frvf7hbaTf06LzHwswNJzCFdKO%2FmJ9tluXIpsIPURawBHe6ULR6TKjgrYncYHhTqZtZYXb%2BrKipMA9PXTZV0kB8erd6zJlh6M913T1Q%2BJ6c0i4seLP%2Fj5khI7faurRxI461vQmRB0NSDAee7YchlceTbas1My%2BI6K4XCS9Tcr5hU65PvL3Q98zB%2BZ81oxfj4x6QEBARl0Snp0E3aIrN9eFyEGF7qs6IW%2BEMh3CLsSizBfSIp2k2JPy8TaDJXH94iJSrpjW3hTmmEi0YQfYovTcJQhPsHcnN481w6RK7qYxlq%2BQRQbR%2FvxMh6QLiwocq9XV%2BzJM4AECNd%2FyKATBenkQteg%2By8kXfNG8djt2WeKQ1aUrrJRyUNCLnL2ojrh05zcLd%2BOtCI3ptduKWs3DyB2px%2FwYR6IpjlIgqj49WUHr4dNGISQ%2BMTdR9z9nxrPGGWfyeukW0wOqIq7RF%2FKbxsXP1t0pG8RFRl1nqJvWIgQ0AScgjeMsu76rStRzBwm4QwccrJcU9j%2B%2Bk0Jzd1PSZZVHphwaAyuEDTVOMMnLztQGOqUBu7WKBvnx7mbyEbbAEu%2B6dEwl7T01Bn6og%2BqmNQXamBUXa8%2B0VPsxaB%2BQS2Ki%2FWOp3uhjvpWcwqek9jE4PRPT3xAYDKZQGQE6sdIJ5Bx9LRvjib5Qz8ezhOKuf6OMvgP6WOP9OP0WPLeUyg7aRIhOSnnnr8ybhpMsRZRO7WbAAUAH42VOE%2BjApH6xTkNVOKPSjk8B2AlGbcV6w78hcMecPnWR%2B%2FSm&X-Amz-Signature=68ada5442c21d194df1ceacb99e91e86a4e8aa305cd89cee5cdbe326c68b1028&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KGYFTJO%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7oDkKIphgCnCCOthx2121FtAeLfF4pPQnjLiVc4h26AIgZD%2BblLZ4NMvQCxbvQjAR%2BcaIxm8YMo8bL%2Bxe%2BsdXbrwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIFERmanWrSQCJxUnSrcAycxHYMRfFhImU2N8oqP86fDCfLFEdq11NiQqs6BklQugfwgJBMkAxePdh0KB9IugkPQky19y8fCGUPlMi8ucw8SeE%2Frvf7hbaTf06LzHwswNJzCFdKO%2FmJ9tluXIpsIPURawBHe6ULR6TKjgrYncYHhTqZtZYXb%2BrKipMA9PXTZV0kB8erd6zJlh6M913T1Q%2BJ6c0i4seLP%2Fj5khI7faurRxI461vQmRB0NSDAee7YchlceTbas1My%2BI6K4XCS9Tcr5hU65PvL3Q98zB%2BZ81oxfj4x6QEBARl0Snp0E3aIrN9eFyEGF7qs6IW%2BEMh3CLsSizBfSIp2k2JPy8TaDJXH94iJSrpjW3hTmmEi0YQfYovTcJQhPsHcnN481w6RK7qYxlq%2BQRQbR%2FvxMh6QLiwocq9XV%2BzJM4AECNd%2FyKATBenkQteg%2By8kXfNG8djt2WeKQ1aUrrJRyUNCLnL2ojrh05zcLd%2BOtCI3ptduKWs3DyB2px%2FwYR6IpjlIgqj49WUHr4dNGISQ%2BMTdR9z9nxrPGGWfyeukW0wOqIq7RF%2FKbxsXP1t0pG8RFRl1nqJvWIgQ0AScgjeMsu76rStRzBwm4QwccrJcU9j%2B%2Bk0Jzd1PSZZVHphwaAyuEDTVOMMnLztQGOqUBu7WKBvnx7mbyEbbAEu%2B6dEwl7T01Bn6og%2BqmNQXamBUXa8%2B0VPsxaB%2BQS2Ki%2FWOp3uhjvpWcwqek9jE4PRPT3xAYDKZQGQE6sdIJ5Bx9LRvjib5Qz8ezhOKuf6OMvgP6WOP9OP0WPLeUyg7aRIhOSnnnr8ybhpMsRZRO7WbAAUAH42VOE%2BjApH6xTkNVOKPSjk8B2AlGbcV6w78hcMecPnWR%2B%2FSm&X-Amz-Signature=1e7ddd5c0d92a3cd32b364d288395e8fc66f9c62534f2481e94cefe7474d763d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KGYFTJO%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7oDkKIphgCnCCOthx2121FtAeLfF4pPQnjLiVc4h26AIgZD%2BblLZ4NMvQCxbvQjAR%2BcaIxm8YMo8bL%2Bxe%2BsdXbrwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIFERmanWrSQCJxUnSrcAycxHYMRfFhImU2N8oqP86fDCfLFEdq11NiQqs6BklQugfwgJBMkAxePdh0KB9IugkPQky19y8fCGUPlMi8ucw8SeE%2Frvf7hbaTf06LzHwswNJzCFdKO%2FmJ9tluXIpsIPURawBHe6ULR6TKjgrYncYHhTqZtZYXb%2BrKipMA9PXTZV0kB8erd6zJlh6M913T1Q%2BJ6c0i4seLP%2Fj5khI7faurRxI461vQmRB0NSDAee7YchlceTbas1My%2BI6K4XCS9Tcr5hU65PvL3Q98zB%2BZ81oxfj4x6QEBARl0Snp0E3aIrN9eFyEGF7qs6IW%2BEMh3CLsSizBfSIp2k2JPy8TaDJXH94iJSrpjW3hTmmEi0YQfYovTcJQhPsHcnN481w6RK7qYxlq%2BQRQbR%2FvxMh6QLiwocq9XV%2BzJM4AECNd%2FyKATBenkQteg%2By8kXfNG8djt2WeKQ1aUrrJRyUNCLnL2ojrh05zcLd%2BOtCI3ptduKWs3DyB2px%2FwYR6IpjlIgqj49WUHr4dNGISQ%2BMTdR9z9nxrPGGWfyeukW0wOqIq7RF%2FKbxsXP1t0pG8RFRl1nqJvWIgQ0AScgjeMsu76rStRzBwm4QwccrJcU9j%2B%2Bk0Jzd1PSZZVHphwaAyuEDTVOMMnLztQGOqUBu7WKBvnx7mbyEbbAEu%2B6dEwl7T01Bn6og%2BqmNQXamBUXa8%2B0VPsxaB%2BQS2Ki%2FWOp3uhjvpWcwqek9jE4PRPT3xAYDKZQGQE6sdIJ5Bx9LRvjib5Qz8ezhOKuf6OMvgP6WOP9OP0WPLeUyg7aRIhOSnnnr8ybhpMsRZRO7WbAAUAH42VOE%2BjApH6xTkNVOKPSjk8B2AlGbcV6w78hcMecPnWR%2B%2FSm&X-Amz-Signature=eb54d0f33e58e60c9a36e1f27d4a571fc3c02447d1dfe0a5233581934a9282f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KGYFTJO%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7oDkKIphgCnCCOthx2121FtAeLfF4pPQnjLiVc4h26AIgZD%2BblLZ4NMvQCxbvQjAR%2BcaIxm8YMo8bL%2Bxe%2BsdXbrwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIFERmanWrSQCJxUnSrcAycxHYMRfFhImU2N8oqP86fDCfLFEdq11NiQqs6BklQugfwgJBMkAxePdh0KB9IugkPQky19y8fCGUPlMi8ucw8SeE%2Frvf7hbaTf06LzHwswNJzCFdKO%2FmJ9tluXIpsIPURawBHe6ULR6TKjgrYncYHhTqZtZYXb%2BrKipMA9PXTZV0kB8erd6zJlh6M913T1Q%2BJ6c0i4seLP%2Fj5khI7faurRxI461vQmRB0NSDAee7YchlceTbas1My%2BI6K4XCS9Tcr5hU65PvL3Q98zB%2BZ81oxfj4x6QEBARl0Snp0E3aIrN9eFyEGF7qs6IW%2BEMh3CLsSizBfSIp2k2JPy8TaDJXH94iJSrpjW3hTmmEi0YQfYovTcJQhPsHcnN481w6RK7qYxlq%2BQRQbR%2FvxMh6QLiwocq9XV%2BzJM4AECNd%2FyKATBenkQteg%2By8kXfNG8djt2WeKQ1aUrrJRyUNCLnL2ojrh05zcLd%2BOtCI3ptduKWs3DyB2px%2FwYR6IpjlIgqj49WUHr4dNGISQ%2BMTdR9z9nxrPGGWfyeukW0wOqIq7RF%2FKbxsXP1t0pG8RFRl1nqJvWIgQ0AScgjeMsu76rStRzBwm4QwccrJcU9j%2B%2Bk0Jzd1PSZZVHphwaAyuEDTVOMMnLztQGOqUBu7WKBvnx7mbyEbbAEu%2B6dEwl7T01Bn6og%2BqmNQXamBUXa8%2B0VPsxaB%2BQS2Ki%2FWOp3uhjvpWcwqek9jE4PRPT3xAYDKZQGQE6sdIJ5Bx9LRvjib5Qz8ezhOKuf6OMvgP6WOP9OP0WPLeUyg7aRIhOSnnnr8ybhpMsRZRO7WbAAUAH42VOE%2BjApH6xTkNVOKPSjk8B2AlGbcV6w78hcMecPnWR%2B%2FSm&X-Amz-Signature=f840fa28c14ae16c6aab41dcf83073d9038c3b127821ff0377e2241ac70c53cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KGYFTJO%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7oDkKIphgCnCCOthx2121FtAeLfF4pPQnjLiVc4h26AIgZD%2BblLZ4NMvQCxbvQjAR%2BcaIxm8YMo8bL%2Bxe%2BsdXbrwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIFERmanWrSQCJxUnSrcAycxHYMRfFhImU2N8oqP86fDCfLFEdq11NiQqs6BklQugfwgJBMkAxePdh0KB9IugkPQky19y8fCGUPlMi8ucw8SeE%2Frvf7hbaTf06LzHwswNJzCFdKO%2FmJ9tluXIpsIPURawBHe6ULR6TKjgrYncYHhTqZtZYXb%2BrKipMA9PXTZV0kB8erd6zJlh6M913T1Q%2BJ6c0i4seLP%2Fj5khI7faurRxI461vQmRB0NSDAee7YchlceTbas1My%2BI6K4XCS9Tcr5hU65PvL3Q98zB%2BZ81oxfj4x6QEBARl0Snp0E3aIrN9eFyEGF7qs6IW%2BEMh3CLsSizBfSIp2k2JPy8TaDJXH94iJSrpjW3hTmmEi0YQfYovTcJQhPsHcnN481w6RK7qYxlq%2BQRQbR%2FvxMh6QLiwocq9XV%2BzJM4AECNd%2FyKATBenkQteg%2By8kXfNG8djt2WeKQ1aUrrJRyUNCLnL2ojrh05zcLd%2BOtCI3ptduKWs3DyB2px%2FwYR6IpjlIgqj49WUHr4dNGISQ%2BMTdR9z9nxrPGGWfyeukW0wOqIq7RF%2FKbxsXP1t0pG8RFRl1nqJvWIgQ0AScgjeMsu76rStRzBwm4QwccrJcU9j%2B%2Bk0Jzd1PSZZVHphwaAyuEDTVOMMnLztQGOqUBu7WKBvnx7mbyEbbAEu%2B6dEwl7T01Bn6og%2BqmNQXamBUXa8%2B0VPsxaB%2BQS2Ki%2FWOp3uhjvpWcwqek9jE4PRPT3xAYDKZQGQE6sdIJ5Bx9LRvjib5Qz8ezhOKuf6OMvgP6WOP9OP0WPLeUyg7aRIhOSnnnr8ybhpMsRZRO7WbAAUAH42VOE%2BjApH6xTkNVOKPSjk8B2AlGbcV6w78hcMecPnWR%2B%2FSm&X-Amz-Signature=599214ebbc7f02eb54496b0868e92b45582a32af5e0e40f6ba732481a795103d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KGYFTJO%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7oDkKIphgCnCCOthx2121FtAeLfF4pPQnjLiVc4h26AIgZD%2BblLZ4NMvQCxbvQjAR%2BcaIxm8YMo8bL%2Bxe%2BsdXbrwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIFERmanWrSQCJxUnSrcAycxHYMRfFhImU2N8oqP86fDCfLFEdq11NiQqs6BklQugfwgJBMkAxePdh0KB9IugkPQky19y8fCGUPlMi8ucw8SeE%2Frvf7hbaTf06LzHwswNJzCFdKO%2FmJ9tluXIpsIPURawBHe6ULR6TKjgrYncYHhTqZtZYXb%2BrKipMA9PXTZV0kB8erd6zJlh6M913T1Q%2BJ6c0i4seLP%2Fj5khI7faurRxI461vQmRB0NSDAee7YchlceTbas1My%2BI6K4XCS9Tcr5hU65PvL3Q98zB%2BZ81oxfj4x6QEBARl0Snp0E3aIrN9eFyEGF7qs6IW%2BEMh3CLsSizBfSIp2k2JPy8TaDJXH94iJSrpjW3hTmmEi0YQfYovTcJQhPsHcnN481w6RK7qYxlq%2BQRQbR%2FvxMh6QLiwocq9XV%2BzJM4AECNd%2FyKATBenkQteg%2By8kXfNG8djt2WeKQ1aUrrJRyUNCLnL2ojrh05zcLd%2BOtCI3ptduKWs3DyB2px%2FwYR6IpjlIgqj49WUHr4dNGISQ%2BMTdR9z9nxrPGGWfyeukW0wOqIq7RF%2FKbxsXP1t0pG8RFRl1nqJvWIgQ0AScgjeMsu76rStRzBwm4QwccrJcU9j%2B%2Bk0Jzd1PSZZVHphwaAyuEDTVOMMnLztQGOqUBu7WKBvnx7mbyEbbAEu%2B6dEwl7T01Bn6og%2BqmNQXamBUXa8%2B0VPsxaB%2BQS2Ki%2FWOp3uhjvpWcwqek9jE4PRPT3xAYDKZQGQE6sdIJ5Bx9LRvjib5Qz8ezhOKuf6OMvgP6WOP9OP0WPLeUyg7aRIhOSnnnr8ybhpMsRZRO7WbAAUAH42VOE%2BjApH6xTkNVOKPSjk8B2AlGbcV6w78hcMecPnWR%2B%2FSm&X-Amz-Signature=218eae7a8a913f1e8af17601764ff4a9167a55cd9fece58fd133e084da03f3be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KGYFTJO%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7oDkKIphgCnCCOthx2121FtAeLfF4pPQnjLiVc4h26AIgZD%2BblLZ4NMvQCxbvQjAR%2BcaIxm8YMo8bL%2Bxe%2BsdXbrwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIFERmanWrSQCJxUnSrcAycxHYMRfFhImU2N8oqP86fDCfLFEdq11NiQqs6BklQugfwgJBMkAxePdh0KB9IugkPQky19y8fCGUPlMi8ucw8SeE%2Frvf7hbaTf06LzHwswNJzCFdKO%2FmJ9tluXIpsIPURawBHe6ULR6TKjgrYncYHhTqZtZYXb%2BrKipMA9PXTZV0kB8erd6zJlh6M913T1Q%2BJ6c0i4seLP%2Fj5khI7faurRxI461vQmRB0NSDAee7YchlceTbas1My%2BI6K4XCS9Tcr5hU65PvL3Q98zB%2BZ81oxfj4x6QEBARl0Snp0E3aIrN9eFyEGF7qs6IW%2BEMh3CLsSizBfSIp2k2JPy8TaDJXH94iJSrpjW3hTmmEi0YQfYovTcJQhPsHcnN481w6RK7qYxlq%2BQRQbR%2FvxMh6QLiwocq9XV%2BzJM4AECNd%2FyKATBenkQteg%2By8kXfNG8djt2WeKQ1aUrrJRyUNCLnL2ojrh05zcLd%2BOtCI3ptduKWs3DyB2px%2FwYR6IpjlIgqj49WUHr4dNGISQ%2BMTdR9z9nxrPGGWfyeukW0wOqIq7RF%2FKbxsXP1t0pG8RFRl1nqJvWIgQ0AScgjeMsu76rStRzBwm4QwccrJcU9j%2B%2Bk0Jzd1PSZZVHphwaAyuEDTVOMMnLztQGOqUBu7WKBvnx7mbyEbbAEu%2B6dEwl7T01Bn6og%2BqmNQXamBUXa8%2B0VPsxaB%2BQS2Ki%2FWOp3uhjvpWcwqek9jE4PRPT3xAYDKZQGQE6sdIJ5Bx9LRvjib5Qz8ezhOKuf6OMvgP6WOP9OP0WPLeUyg7aRIhOSnnnr8ybhpMsRZRO7WbAAUAH42VOE%2BjApH6xTkNVOKPSjk8B2AlGbcV6w78hcMecPnWR%2B%2FSm&X-Amz-Signature=8ee472e915b118ecef02fe2c9cc2b32c255ca94bcd5a9656b3581d286d1b63c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KGYFTJO%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7oDkKIphgCnCCOthx2121FtAeLfF4pPQnjLiVc4h26AIgZD%2BblLZ4NMvQCxbvQjAR%2BcaIxm8YMo8bL%2Bxe%2BsdXbrwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIFERmanWrSQCJxUnSrcAycxHYMRfFhImU2N8oqP86fDCfLFEdq11NiQqs6BklQugfwgJBMkAxePdh0KB9IugkPQky19y8fCGUPlMi8ucw8SeE%2Frvf7hbaTf06LzHwswNJzCFdKO%2FmJ9tluXIpsIPURawBHe6ULR6TKjgrYncYHhTqZtZYXb%2BrKipMA9PXTZV0kB8erd6zJlh6M913T1Q%2BJ6c0i4seLP%2Fj5khI7faurRxI461vQmRB0NSDAee7YchlceTbas1My%2BI6K4XCS9Tcr5hU65PvL3Q98zB%2BZ81oxfj4x6QEBARl0Snp0E3aIrN9eFyEGF7qs6IW%2BEMh3CLsSizBfSIp2k2JPy8TaDJXH94iJSrpjW3hTmmEi0YQfYovTcJQhPsHcnN481w6RK7qYxlq%2BQRQbR%2FvxMh6QLiwocq9XV%2BzJM4AECNd%2FyKATBenkQteg%2By8kXfNG8djt2WeKQ1aUrrJRyUNCLnL2ojrh05zcLd%2BOtCI3ptduKWs3DyB2px%2FwYR6IpjlIgqj49WUHr4dNGISQ%2BMTdR9z9nxrPGGWfyeukW0wOqIq7RF%2FKbxsXP1t0pG8RFRl1nqJvWIgQ0AScgjeMsu76rStRzBwm4QwccrJcU9j%2B%2Bk0Jzd1PSZZVHphwaAyuEDTVOMMnLztQGOqUBu7WKBvnx7mbyEbbAEu%2B6dEwl7T01Bn6og%2BqmNQXamBUXa8%2B0VPsxaB%2BQS2Ki%2FWOp3uhjvpWcwqek9jE4PRPT3xAYDKZQGQE6sdIJ5Bx9LRvjib5Qz8ezhOKuf6OMvgP6WOP9OP0WPLeUyg7aRIhOSnnnr8ybhpMsRZRO7WbAAUAH42VOE%2BjApH6xTkNVOKPSjk8B2AlGbcV6w78hcMecPnWR%2B%2FSm&X-Amz-Signature=9fcf177b4853198ff71dc966f57e22d8f6a31b1580511502831daed1526c2554&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KGYFTJO%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7oDkKIphgCnCCOthx2121FtAeLfF4pPQnjLiVc4h26AIgZD%2BblLZ4NMvQCxbvQjAR%2BcaIxm8YMo8bL%2Bxe%2BsdXbrwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIFERmanWrSQCJxUnSrcAycxHYMRfFhImU2N8oqP86fDCfLFEdq11NiQqs6BklQugfwgJBMkAxePdh0KB9IugkPQky19y8fCGUPlMi8ucw8SeE%2Frvf7hbaTf06LzHwswNJzCFdKO%2FmJ9tluXIpsIPURawBHe6ULR6TKjgrYncYHhTqZtZYXb%2BrKipMA9PXTZV0kB8erd6zJlh6M913T1Q%2BJ6c0i4seLP%2Fj5khI7faurRxI461vQmRB0NSDAee7YchlceTbas1My%2BI6K4XCS9Tcr5hU65PvL3Q98zB%2BZ81oxfj4x6QEBARl0Snp0E3aIrN9eFyEGF7qs6IW%2BEMh3CLsSizBfSIp2k2JPy8TaDJXH94iJSrpjW3hTmmEi0YQfYovTcJQhPsHcnN481w6RK7qYxlq%2BQRQbR%2FvxMh6QLiwocq9XV%2BzJM4AECNd%2FyKATBenkQteg%2By8kXfNG8djt2WeKQ1aUrrJRyUNCLnL2ojrh05zcLd%2BOtCI3ptduKWs3DyB2px%2FwYR6IpjlIgqj49WUHr4dNGISQ%2BMTdR9z9nxrPGGWfyeukW0wOqIq7RF%2FKbxsXP1t0pG8RFRl1nqJvWIgQ0AScgjeMsu76rStRzBwm4QwccrJcU9j%2B%2Bk0Jzd1PSZZVHphwaAyuEDTVOMMnLztQGOqUBu7WKBvnx7mbyEbbAEu%2B6dEwl7T01Bn6og%2BqmNQXamBUXa8%2B0VPsxaB%2BQS2Ki%2FWOp3uhjvpWcwqek9jE4PRPT3xAYDKZQGQE6sdIJ5Bx9LRvjib5Qz8ezhOKuf6OMvgP6WOP9OP0WPLeUyg7aRIhOSnnnr8ybhpMsRZRO7WbAAUAH42VOE%2BjApH6xTkNVOKPSjk8B2AlGbcV6w78hcMecPnWR%2B%2FSm&X-Amz-Signature=eb54d0f33e58e60c9a36e1f27d4a571fc3c02447d1dfe0a5233581934a9282f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
