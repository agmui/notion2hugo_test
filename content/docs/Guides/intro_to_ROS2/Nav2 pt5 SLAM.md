---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-08-02T09:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-08-02T09:48:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 155
toc: false
icon: ""
---

[Good video explaining slam](https://www.youtube.com/watch?v=ZaiA3hWaRzE&t=979s)

[https://www.youtube.com/watch?v=saVZtgPyyJQ](https://www.youtube.com/watch?v=saVZtgPyyJQ)

<details>
      <summary>What is slam?</summary>
      TODO:
  </details>

ROS has a package for SLAM called `slam toolbox`.

If you have a Lidar and Odometry it is able to scan and map the room out.

---

## Install

```bash
sudo apt install ros-$ROS_DISTRO-slam-toolbox
```

{{% alert icon=”👾” context="success" %}}

### **New Node** **`online_async_launch`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ2TAD4R%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDrJuTLoGCK6%2FKPq0tvb%2Buzx9lrprxRjNW7bY9%2FXCuxAAiEA3TDHKam%2FYsnXhfL7XRjKgJHV%2BqshzW%2F2GDVESynM2aQq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDI2bW2YZg0xrTiDFfCrcAwL1XAm6TbzgACXwzgzOl0yUpf2DgD9bIr%2BgHtpnDVDnfSQDym9HMojxQkJcQNn2BYU3FGZWzapy2pWb%2BfE38ikyyD8AaDXDlhqYcbVwTIVvPMtsmQQM3mkC1LQgN10cKgFuB70GvBlq8OTqZrmDpMWtES3IJFM78hmyEvBW%2BsE6Xm0uE1iLX312xa7JvoO7Cq9yYUHxgPtxGvoS%2BIu7xes67ucjxz1t8r%2F8U%2Bp%2BMcTgXbhsZAL4%2FWA274fbsDkGftoY7NLNLY%2B3aXJuve4IFc4Kbjb61ntHp1wAGr7XewKczsEAnX9BehCWywHqj1yr8scAtMxniB5MIGQpminKALGg8SwvjJrV3QoHE4TRbDja57PiPDHQCJ%2FoxnMXAlA2LYqxn7jBrAINhaVmHyls3cdT%2FEURo4bo%2FDenvhywhhp5tEC4Blj2WPEm9%2BHzPywvsEFMyKSFUeY848CGCUX48go%2FBUw7HUSI96cM43FpwXdkEbrkdv3wHjf7aB3EvGK40bjMgco8RN21s4M7Du4Kch%2BRa0fS5Kh1opKZ6rAmjiJX2otcnc3r93Q6%2FaE42d9zvbPiFCuZMzfouUKdaEcmlLXihIxQXNfVE6mZNT0p9DK7Zx4Y%2FjQVE%2BrM4QhoMOKx8sQGOqUBh86ipRcipNyP5Opp5hgOdl8PmmkqEEE32CXkbiW5DznsW7L7FPbiGK2qVVTexmzOLAwk7qu3Ptpc6VoCzhdASXKCRnUDm5zLpmIHhWnml7r3AUxvyDX5iRx8f7VUmFS3YVb7XjgxjuMa%2Bl%2B5izhTj1v1xCgwfbXGwo%2BP1%2B9NnlYMObtw%2Fhzbn4pNILmhhd1sQ1V29vto5lSqzr9PNCJ7RydphHt%2B&X-Amz-Signature=a3084cb783ec5bc2c8732d5ff2d942cbff3501101786bb4be2facd27b8da973e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**               |
| -------- | ---------------------- |
| `/tf`    | map ⇒ odom             |
| `/map`   | nav_msgs/OccupancyGrid |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**           | **Type** |
| ------------------ | -------- |
| `slam_params_file` | file     |
| `use_sim_time`     | bool     |

{{< /table >}}

#### description:

Given a `/scan` from a Lidar it outputs a map

{{% /alert %}}

# Simulating SLAM in Gazebo

To run slam just run the node: `ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true`

Remember to turn on Gazebo again:

```python
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        # my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        gz_server,
        ros_gz_bridge,
        spawn_entity,
        
        # lidar_node # lidar for physical setup 
    ])
```

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

To know if `slam_toolbox` ran correctly, in logs wait for “Registering sensor”

### Viewing scanned SLAM map

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ2TAD4R%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDrJuTLoGCK6%2FKPq0tvb%2Buzx9lrprxRjNW7bY9%2FXCuxAAiEA3TDHKam%2FYsnXhfL7XRjKgJHV%2BqshzW%2F2GDVESynM2aQq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDI2bW2YZg0xrTiDFfCrcAwL1XAm6TbzgACXwzgzOl0yUpf2DgD9bIr%2BgHtpnDVDnfSQDym9HMojxQkJcQNn2BYU3FGZWzapy2pWb%2BfE38ikyyD8AaDXDlhqYcbVwTIVvPMtsmQQM3mkC1LQgN10cKgFuB70GvBlq8OTqZrmDpMWtES3IJFM78hmyEvBW%2BsE6Xm0uE1iLX312xa7JvoO7Cq9yYUHxgPtxGvoS%2BIu7xes67ucjxz1t8r%2F8U%2Bp%2BMcTgXbhsZAL4%2FWA274fbsDkGftoY7NLNLY%2B3aXJuve4IFc4Kbjb61ntHp1wAGr7XewKczsEAnX9BehCWywHqj1yr8scAtMxniB5MIGQpminKALGg8SwvjJrV3QoHE4TRbDja57PiPDHQCJ%2FoxnMXAlA2LYqxn7jBrAINhaVmHyls3cdT%2FEURo4bo%2FDenvhywhhp5tEC4Blj2WPEm9%2BHzPywvsEFMyKSFUeY848CGCUX48go%2FBUw7HUSI96cM43FpwXdkEbrkdv3wHjf7aB3EvGK40bjMgco8RN21s4M7Du4Kch%2BRa0fS5Kh1opKZ6rAmjiJX2otcnc3r93Q6%2FaE42d9zvbPiFCuZMzfouUKdaEcmlLXihIxQXNfVE6mZNT0p9DK7Zx4Y%2FjQVE%2BrM4QhoMOKx8sQGOqUBh86ipRcipNyP5Opp5hgOdl8PmmkqEEE32CXkbiW5DznsW7L7FPbiGK2qVVTexmzOLAwk7qu3Ptpc6VoCzhdASXKCRnUDm5zLpmIHhWnml7r3AUxvyDX5iRx8f7VUmFS3YVb7XjgxjuMa%2Bl%2B5izhTj1v1xCgwfbXGwo%2BP1%2B9NnlYMObtw%2Fhzbn4pNILmhhd1sQ1V29vto5lSqzr9PNCJ7RydphHt%2B&X-Amz-Signature=1ecf57c527aac1f21fdea889095015a56dbf452321577649382e701f5d7d653a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ2TAD4R%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDrJuTLoGCK6%2FKPq0tvb%2Buzx9lrprxRjNW7bY9%2FXCuxAAiEA3TDHKam%2FYsnXhfL7XRjKgJHV%2BqshzW%2F2GDVESynM2aQq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDI2bW2YZg0xrTiDFfCrcAwL1XAm6TbzgACXwzgzOl0yUpf2DgD9bIr%2BgHtpnDVDnfSQDym9HMojxQkJcQNn2BYU3FGZWzapy2pWb%2BfE38ikyyD8AaDXDlhqYcbVwTIVvPMtsmQQM3mkC1LQgN10cKgFuB70GvBlq8OTqZrmDpMWtES3IJFM78hmyEvBW%2BsE6Xm0uE1iLX312xa7JvoO7Cq9yYUHxgPtxGvoS%2BIu7xes67ucjxz1t8r%2F8U%2Bp%2BMcTgXbhsZAL4%2FWA274fbsDkGftoY7NLNLY%2B3aXJuve4IFc4Kbjb61ntHp1wAGr7XewKczsEAnX9BehCWywHqj1yr8scAtMxniB5MIGQpminKALGg8SwvjJrV3QoHE4TRbDja57PiPDHQCJ%2FoxnMXAlA2LYqxn7jBrAINhaVmHyls3cdT%2FEURo4bo%2FDenvhywhhp5tEC4Blj2WPEm9%2BHzPywvsEFMyKSFUeY848CGCUX48go%2FBUw7HUSI96cM43FpwXdkEbrkdv3wHjf7aB3EvGK40bjMgco8RN21s4M7Du4Kch%2BRa0fS5Kh1opKZ6rAmjiJX2otcnc3r93Q6%2FaE42d9zvbPiFCuZMzfouUKdaEcmlLXihIxQXNfVE6mZNT0p9DK7Zx4Y%2FjQVE%2BrM4QhoMOKx8sQGOqUBh86ipRcipNyP5Opp5hgOdl8PmmkqEEE32CXkbiW5DznsW7L7FPbiGK2qVVTexmzOLAwk7qu3Ptpc6VoCzhdASXKCRnUDm5zLpmIHhWnml7r3AUxvyDX5iRx8f7VUmFS3YVb7XjgxjuMa%2Bl%2B5izhTj1v1xCgwfbXGwo%2BP1%2B9NnlYMObtw%2Fhzbn4pNILmhhd1sQ1V29vto5lSqzr9PNCJ7RydphHt%2B&X-Amz-Signature=de5bb45641b90a75525e0f35b6eb24b0eb9ed8f5eb6aa13cbd716919c28da99b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ2TAD4R%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDrJuTLoGCK6%2FKPq0tvb%2Buzx9lrprxRjNW7bY9%2FXCuxAAiEA3TDHKam%2FYsnXhfL7XRjKgJHV%2BqshzW%2F2GDVESynM2aQq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDI2bW2YZg0xrTiDFfCrcAwL1XAm6TbzgACXwzgzOl0yUpf2DgD9bIr%2BgHtpnDVDnfSQDym9HMojxQkJcQNn2BYU3FGZWzapy2pWb%2BfE38ikyyD8AaDXDlhqYcbVwTIVvPMtsmQQM3mkC1LQgN10cKgFuB70GvBlq8OTqZrmDpMWtES3IJFM78hmyEvBW%2BsE6Xm0uE1iLX312xa7JvoO7Cq9yYUHxgPtxGvoS%2BIu7xes67ucjxz1t8r%2F8U%2Bp%2BMcTgXbhsZAL4%2FWA274fbsDkGftoY7NLNLY%2B3aXJuve4IFc4Kbjb61ntHp1wAGr7XewKczsEAnX9BehCWywHqj1yr8scAtMxniB5MIGQpminKALGg8SwvjJrV3QoHE4TRbDja57PiPDHQCJ%2FoxnMXAlA2LYqxn7jBrAINhaVmHyls3cdT%2FEURo4bo%2FDenvhywhhp5tEC4Blj2WPEm9%2BHzPywvsEFMyKSFUeY848CGCUX48go%2FBUw7HUSI96cM43FpwXdkEbrkdv3wHjf7aB3EvGK40bjMgco8RN21s4M7Du4Kch%2BRa0fS5Kh1opKZ6rAmjiJX2otcnc3r93Q6%2FaE42d9zvbPiFCuZMzfouUKdaEcmlLXihIxQXNfVE6mZNT0p9DK7Zx4Y%2FjQVE%2BrM4QhoMOKx8sQGOqUBh86ipRcipNyP5Opp5hgOdl8PmmkqEEE32CXkbiW5DznsW7L7FPbiGK2qVVTexmzOLAwk7qu3Ptpc6VoCzhdASXKCRnUDm5zLpmIHhWnml7r3AUxvyDX5iRx8f7VUmFS3YVb7XjgxjuMa%2Bl%2B5izhTj1v1xCgwfbXGwo%2BP1%2B9NnlYMObtw%2Fhzbn4pNILmhhd1sQ1V29vto5lSqzr9PNCJ7RydphHt%2B&X-Amz-Signature=20cd0addebf0425c175dc53ca9c56637cb7fba4ac43539acfeb7bb5c60b58a21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ2TAD4R%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDrJuTLoGCK6%2FKPq0tvb%2Buzx9lrprxRjNW7bY9%2FXCuxAAiEA3TDHKam%2FYsnXhfL7XRjKgJHV%2BqshzW%2F2GDVESynM2aQq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDI2bW2YZg0xrTiDFfCrcAwL1XAm6TbzgACXwzgzOl0yUpf2DgD9bIr%2BgHtpnDVDnfSQDym9HMojxQkJcQNn2BYU3FGZWzapy2pWb%2BfE38ikyyD8AaDXDlhqYcbVwTIVvPMtsmQQM3mkC1LQgN10cKgFuB70GvBlq8OTqZrmDpMWtES3IJFM78hmyEvBW%2BsE6Xm0uE1iLX312xa7JvoO7Cq9yYUHxgPtxGvoS%2BIu7xes67ucjxz1t8r%2F8U%2Bp%2BMcTgXbhsZAL4%2FWA274fbsDkGftoY7NLNLY%2B3aXJuve4IFc4Kbjb61ntHp1wAGr7XewKczsEAnX9BehCWywHqj1yr8scAtMxniB5MIGQpminKALGg8SwvjJrV3QoHE4TRbDja57PiPDHQCJ%2FoxnMXAlA2LYqxn7jBrAINhaVmHyls3cdT%2FEURo4bo%2FDenvhywhhp5tEC4Blj2WPEm9%2BHzPywvsEFMyKSFUeY848CGCUX48go%2FBUw7HUSI96cM43FpwXdkEbrkdv3wHjf7aB3EvGK40bjMgco8RN21s4M7Du4Kch%2BRa0fS5Kh1opKZ6rAmjiJX2otcnc3r93Q6%2FaE42d9zvbPiFCuZMzfouUKdaEcmlLXihIxQXNfVE6mZNT0p9DK7Zx4Y%2FjQVE%2BrM4QhoMOKx8sQGOqUBh86ipRcipNyP5Opp5hgOdl8PmmkqEEE32CXkbiW5DznsW7L7FPbiGK2qVVTexmzOLAwk7qu3Ptpc6VoCzhdASXKCRnUDm5zLpmIHhWnml7r3AUxvyDX5iRx8f7VUmFS3YVb7XjgxjuMa%2Bl%2B5izhTj1v1xCgwfbXGwo%2BP1%2B9NnlYMObtw%2Fhzbn4pNILmhhd1sQ1V29vto5lSqzr9PNCJ7RydphHt%2B&X-Amz-Signature=4f2657810fb98c8bf6326ce53ba47c8db48e9e629bc1b4fec2cea4ecb8d6dbfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ2TAD4R%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDrJuTLoGCK6%2FKPq0tvb%2Buzx9lrprxRjNW7bY9%2FXCuxAAiEA3TDHKam%2FYsnXhfL7XRjKgJHV%2BqshzW%2F2GDVESynM2aQq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDI2bW2YZg0xrTiDFfCrcAwL1XAm6TbzgACXwzgzOl0yUpf2DgD9bIr%2BgHtpnDVDnfSQDym9HMojxQkJcQNn2BYU3FGZWzapy2pWb%2BfE38ikyyD8AaDXDlhqYcbVwTIVvPMtsmQQM3mkC1LQgN10cKgFuB70GvBlq8OTqZrmDpMWtES3IJFM78hmyEvBW%2BsE6Xm0uE1iLX312xa7JvoO7Cq9yYUHxgPtxGvoS%2BIu7xes67ucjxz1t8r%2F8U%2Bp%2BMcTgXbhsZAL4%2FWA274fbsDkGftoY7NLNLY%2B3aXJuve4IFc4Kbjb61ntHp1wAGr7XewKczsEAnX9BehCWywHqj1yr8scAtMxniB5MIGQpminKALGg8SwvjJrV3QoHE4TRbDja57PiPDHQCJ%2FoxnMXAlA2LYqxn7jBrAINhaVmHyls3cdT%2FEURo4bo%2FDenvhywhhp5tEC4Blj2WPEm9%2BHzPywvsEFMyKSFUeY848CGCUX48go%2FBUw7HUSI96cM43FpwXdkEbrkdv3wHjf7aB3EvGK40bjMgco8RN21s4M7Du4Kch%2BRa0fS5Kh1opKZ6rAmjiJX2otcnc3r93Q6%2FaE42d9zvbPiFCuZMzfouUKdaEcmlLXihIxQXNfVE6mZNT0p9DK7Zx4Y%2FjQVE%2BrM4QhoMOKx8sQGOqUBh86ipRcipNyP5Opp5hgOdl8PmmkqEEE32CXkbiW5DznsW7L7FPbiGK2qVVTexmzOLAwk7qu3Ptpc6VoCzhdASXKCRnUDm5zLpmIHhWnml7r3AUxvyDX5iRx8f7VUmFS3YVb7XjgxjuMa%2Bl%2B5izhTj1v1xCgwfbXGwo%2BP1%2B9NnlYMObtw%2Fhzbn4pNILmhhd1sQ1V29vto5lSqzr9PNCJ7RydphHt%2B&X-Amz-Signature=9d0d7c08df42af476e2c22d1e77b70dc4f8e05fcbad70c566c0c2b1fc114e5a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ2TAD4R%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDrJuTLoGCK6%2FKPq0tvb%2Buzx9lrprxRjNW7bY9%2FXCuxAAiEA3TDHKam%2FYsnXhfL7XRjKgJHV%2BqshzW%2F2GDVESynM2aQq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDI2bW2YZg0xrTiDFfCrcAwL1XAm6TbzgACXwzgzOl0yUpf2DgD9bIr%2BgHtpnDVDnfSQDym9HMojxQkJcQNn2BYU3FGZWzapy2pWb%2BfE38ikyyD8AaDXDlhqYcbVwTIVvPMtsmQQM3mkC1LQgN10cKgFuB70GvBlq8OTqZrmDpMWtES3IJFM78hmyEvBW%2BsE6Xm0uE1iLX312xa7JvoO7Cq9yYUHxgPtxGvoS%2BIu7xes67ucjxz1t8r%2F8U%2Bp%2BMcTgXbhsZAL4%2FWA274fbsDkGftoY7NLNLY%2B3aXJuve4IFc4Kbjb61ntHp1wAGr7XewKczsEAnX9BehCWywHqj1yr8scAtMxniB5MIGQpminKALGg8SwvjJrV3QoHE4TRbDja57PiPDHQCJ%2FoxnMXAlA2LYqxn7jBrAINhaVmHyls3cdT%2FEURo4bo%2FDenvhywhhp5tEC4Blj2WPEm9%2BHzPywvsEFMyKSFUeY848CGCUX48go%2FBUw7HUSI96cM43FpwXdkEbrkdv3wHjf7aB3EvGK40bjMgco8RN21s4M7Du4Kch%2BRa0fS5Kh1opKZ6rAmjiJX2otcnc3r93Q6%2FaE42d9zvbPiFCuZMzfouUKdaEcmlLXihIxQXNfVE6mZNT0p9DK7Zx4Y%2FjQVE%2BrM4QhoMOKx8sQGOqUBh86ipRcipNyP5Opp5hgOdl8PmmkqEEE32CXkbiW5DznsW7L7FPbiGK2qVVTexmzOLAwk7qu3Ptpc6VoCzhdASXKCRnUDm5zLpmIHhWnml7r3AUxvyDX5iRx8f7VUmFS3YVb7XjgxjuMa%2Bl%2B5izhTj1v1xCgwfbXGwo%2BP1%2B9NnlYMObtw%2Fhzbn4pNILmhhd1sQ1V29vto5lSqzr9PNCJ7RydphHt%2B&X-Amz-Signature=33ace92d75d9996656ec3d9e305b60417b1014c3b36b0ecc94fd868568f4c3d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to turn off Gazebo again:

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
        
        lidar_node # lidar for physical setup 
    ])
```

in 3 different terminals run:

```xml
ros2 launch mbot_pkg display.launch.py
```

```xml
ros2 launch slam_toolbox online_async_launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

drive around with `teleop_twist_keyboard` to scan more of the map

## Adding `slam_toolbox` to launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ2TAD4R%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDrJuTLoGCK6%2FKPq0tvb%2Buzx9lrprxRjNW7bY9%2FXCuxAAiEA3TDHKam%2FYsnXhfL7XRjKgJHV%2BqshzW%2F2GDVESynM2aQq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDI2bW2YZg0xrTiDFfCrcAwL1XAm6TbzgACXwzgzOl0yUpf2DgD9bIr%2BgHtpnDVDnfSQDym9HMojxQkJcQNn2BYU3FGZWzapy2pWb%2BfE38ikyyD8AaDXDlhqYcbVwTIVvPMtsmQQM3mkC1LQgN10cKgFuB70GvBlq8OTqZrmDpMWtES3IJFM78hmyEvBW%2BsE6Xm0uE1iLX312xa7JvoO7Cq9yYUHxgPtxGvoS%2BIu7xes67ucjxz1t8r%2F8U%2Bp%2BMcTgXbhsZAL4%2FWA274fbsDkGftoY7NLNLY%2B3aXJuve4IFc4Kbjb61ntHp1wAGr7XewKczsEAnX9BehCWywHqj1yr8scAtMxniB5MIGQpminKALGg8SwvjJrV3QoHE4TRbDja57PiPDHQCJ%2FoxnMXAlA2LYqxn7jBrAINhaVmHyls3cdT%2FEURo4bo%2FDenvhywhhp5tEC4Blj2WPEm9%2BHzPywvsEFMyKSFUeY848CGCUX48go%2FBUw7HUSI96cM43FpwXdkEbrkdv3wHjf7aB3EvGK40bjMgco8RN21s4M7Du4Kch%2BRa0fS5Kh1opKZ6rAmjiJX2otcnc3r93Q6%2FaE42d9zvbPiFCuZMzfouUKdaEcmlLXihIxQXNfVE6mZNT0p9DK7Zx4Y%2FjQVE%2BrM4QhoMOKx8sQGOqUBh86ipRcipNyP5Opp5hgOdl8PmmkqEEE32CXkbiW5DznsW7L7FPbiGK2qVVTexmzOLAwk7qu3Ptpc6VoCzhdASXKCRnUDm5zLpmIHhWnml7r3AUxvyDX5iRx8f7VUmFS3YVb7XjgxjuMa%2Bl%2B5izhTj1v1xCgwfbXGwo%2BP1%2B9NnlYMObtw%2Fhzbn4pNILmhhd1sQ1V29vto5lSqzr9PNCJ7RydphHt%2B&X-Amz-Signature=e46f185a2c6d9673c99cfa89831eeaf72cde27e2d9f9b53f6ce8dd999557d5c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ2TAD4R%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDrJuTLoGCK6%2FKPq0tvb%2Buzx9lrprxRjNW7bY9%2FXCuxAAiEA3TDHKam%2FYsnXhfL7XRjKgJHV%2BqshzW%2F2GDVESynM2aQq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDI2bW2YZg0xrTiDFfCrcAwL1XAm6TbzgACXwzgzOl0yUpf2DgD9bIr%2BgHtpnDVDnfSQDym9HMojxQkJcQNn2BYU3FGZWzapy2pWb%2BfE38ikyyD8AaDXDlhqYcbVwTIVvPMtsmQQM3mkC1LQgN10cKgFuB70GvBlq8OTqZrmDpMWtES3IJFM78hmyEvBW%2BsE6Xm0uE1iLX312xa7JvoO7Cq9yYUHxgPtxGvoS%2BIu7xes67ucjxz1t8r%2F8U%2Bp%2BMcTgXbhsZAL4%2FWA274fbsDkGftoY7NLNLY%2B3aXJuve4IFc4Kbjb61ntHp1wAGr7XewKczsEAnX9BehCWywHqj1yr8scAtMxniB5MIGQpminKALGg8SwvjJrV3QoHE4TRbDja57PiPDHQCJ%2FoxnMXAlA2LYqxn7jBrAINhaVmHyls3cdT%2FEURo4bo%2FDenvhywhhp5tEC4Blj2WPEm9%2BHzPywvsEFMyKSFUeY848CGCUX48go%2FBUw7HUSI96cM43FpwXdkEbrkdv3wHjf7aB3EvGK40bjMgco8RN21s4M7Du4Kch%2BRa0fS5Kh1opKZ6rAmjiJX2otcnc3r93Q6%2FaE42d9zvbPiFCuZMzfouUKdaEcmlLXihIxQXNfVE6mZNT0p9DK7Zx4Y%2FjQVE%2BrM4QhoMOKx8sQGOqUBh86ipRcipNyP5Opp5hgOdl8PmmkqEEE32CXkbiW5DznsW7L7FPbiGK2qVVTexmzOLAwk7qu3Ptpc6VoCzhdASXKCRnUDm5zLpmIHhWnml7r3AUxvyDX5iRx8f7VUmFS3YVb7XjgxjuMa%2Bl%2B5izhTj1v1xCgwfbXGwo%2BP1%2B9NnlYMObtw%2Fhzbn4pNILmhhd1sQ1V29vto5lSqzr9PNCJ7RydphHt%2B&X-Amz-Signature=0fbd8a338dab287a328f725da723cba7aa311d8a3bc7da32aa2109bbf4a93e57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

```python

   
def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config
    bridge_config_path = os.path.join(pkg_share, 'config', 'bridge_config.yaml') # gets location of gazebo config
    world_path = os.path.join(pkg_share, 'world', 'my_world.sdf') # gets the gazebo world file
    slam_yaml_path = os.path.join(pkg_share, 'config', 'slam.yaml') # gets the slam config file
    
    ...
    
    slam_toolbox_node = IncludeLaunchDescription(
        PythonLaunchDescriptionSource([
            FindPackageShare("slam_toolbox"), '/launch', '/online_async_launch.py']),
        launch_arguments={
            'slam_params_file': slam_yaml_path,
            'use_sim_time': LaunchConfiguration('use_sim_time'),
        }.items()
    )
    
    
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
        
        slam_toolbox_node #  providing the map => odom transform.
    ])
```

# Saving map

`slam_toolbox` also has the feature where you can pre scan a map and save it to load it again.

Press on Panels → Add New Panel

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ2TAD4R%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDrJuTLoGCK6%2FKPq0tvb%2Buzx9lrprxRjNW7bY9%2FXCuxAAiEA3TDHKam%2FYsnXhfL7XRjKgJHV%2BqshzW%2F2GDVESynM2aQq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDI2bW2YZg0xrTiDFfCrcAwL1XAm6TbzgACXwzgzOl0yUpf2DgD9bIr%2BgHtpnDVDnfSQDym9HMojxQkJcQNn2BYU3FGZWzapy2pWb%2BfE38ikyyD8AaDXDlhqYcbVwTIVvPMtsmQQM3mkC1LQgN10cKgFuB70GvBlq8OTqZrmDpMWtES3IJFM78hmyEvBW%2BsE6Xm0uE1iLX312xa7JvoO7Cq9yYUHxgPtxGvoS%2BIu7xes67ucjxz1t8r%2F8U%2Bp%2BMcTgXbhsZAL4%2FWA274fbsDkGftoY7NLNLY%2B3aXJuve4IFc4Kbjb61ntHp1wAGr7XewKczsEAnX9BehCWywHqj1yr8scAtMxniB5MIGQpminKALGg8SwvjJrV3QoHE4TRbDja57PiPDHQCJ%2FoxnMXAlA2LYqxn7jBrAINhaVmHyls3cdT%2FEURo4bo%2FDenvhywhhp5tEC4Blj2WPEm9%2BHzPywvsEFMyKSFUeY848CGCUX48go%2FBUw7HUSI96cM43FpwXdkEbrkdv3wHjf7aB3EvGK40bjMgco8RN21s4M7Du4Kch%2BRa0fS5Kh1opKZ6rAmjiJX2otcnc3r93Q6%2FaE42d9zvbPiFCuZMzfouUKdaEcmlLXihIxQXNfVE6mZNT0p9DK7Zx4Y%2FjQVE%2BrM4QhoMOKx8sQGOqUBh86ipRcipNyP5Opp5hgOdl8PmmkqEEE32CXkbiW5DznsW7L7FPbiGK2qVVTexmzOLAwk7qu3Ptpc6VoCzhdASXKCRnUDm5zLpmIHhWnml7r3AUxvyDX5iRx8f7VUmFS3YVb7XjgxjuMa%2Bl%2B5izhTj1v1xCgwfbXGwo%2BP1%2B9NnlYMObtw%2Fhzbn4pNILmhhd1sQ1V29vto5lSqzr9PNCJ7RydphHt%2B&X-Amz-Signature=0c93382e06af3dd2ebd5ac0f637c55977292da8907c5c031aec2815026af2b8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ2TAD4R%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDrJuTLoGCK6%2FKPq0tvb%2Buzx9lrprxRjNW7bY9%2FXCuxAAiEA3TDHKam%2FYsnXhfL7XRjKgJHV%2BqshzW%2F2GDVESynM2aQq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDI2bW2YZg0xrTiDFfCrcAwL1XAm6TbzgACXwzgzOl0yUpf2DgD9bIr%2BgHtpnDVDnfSQDym9HMojxQkJcQNn2BYU3FGZWzapy2pWb%2BfE38ikyyD8AaDXDlhqYcbVwTIVvPMtsmQQM3mkC1LQgN10cKgFuB70GvBlq8OTqZrmDpMWtES3IJFM78hmyEvBW%2BsE6Xm0uE1iLX312xa7JvoO7Cq9yYUHxgPtxGvoS%2BIu7xes67ucjxz1t8r%2F8U%2Bp%2BMcTgXbhsZAL4%2FWA274fbsDkGftoY7NLNLY%2B3aXJuve4IFc4Kbjb61ntHp1wAGr7XewKczsEAnX9BehCWywHqj1yr8scAtMxniB5MIGQpminKALGg8SwvjJrV3QoHE4TRbDja57PiPDHQCJ%2FoxnMXAlA2LYqxn7jBrAINhaVmHyls3cdT%2FEURo4bo%2FDenvhywhhp5tEC4Blj2WPEm9%2BHzPywvsEFMyKSFUeY848CGCUX48go%2FBUw7HUSI96cM43FpwXdkEbrkdv3wHjf7aB3EvGK40bjMgco8RN21s4M7Du4Kch%2BRa0fS5Kh1opKZ6rAmjiJX2otcnc3r93Q6%2FaE42d9zvbPiFCuZMzfouUKdaEcmlLXihIxQXNfVE6mZNT0p9DK7Zx4Y%2FjQVE%2BrM4QhoMOKx8sQGOqUBh86ipRcipNyP5Opp5hgOdl8PmmkqEEE32CXkbiW5DznsW7L7FPbiGK2qVVTexmzOLAwk7qu3Ptpc6VoCzhdASXKCRnUDm5zLpmIHhWnml7r3AUxvyDX5iRx8f7VUmFS3YVb7XjgxjuMa%2Bl%2B5izhTj1v1xCgwfbXGwo%2BP1%2B9NnlYMObtw%2Fhzbn4pNILmhhd1sQ1V29vto5lSqzr9PNCJ7RydphHt%2B&X-Amz-Signature=e165aebb7b478eb09f77f4f27703187b7be2b3e4d7c2ac5d4bacb5dec79ef11a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ2TAD4R%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDrJuTLoGCK6%2FKPq0tvb%2Buzx9lrprxRjNW7bY9%2FXCuxAAiEA3TDHKam%2FYsnXhfL7XRjKgJHV%2BqshzW%2F2GDVESynM2aQq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDI2bW2YZg0xrTiDFfCrcAwL1XAm6TbzgACXwzgzOl0yUpf2DgD9bIr%2BgHtpnDVDnfSQDym9HMojxQkJcQNn2BYU3FGZWzapy2pWb%2BfE38ikyyD8AaDXDlhqYcbVwTIVvPMtsmQQM3mkC1LQgN10cKgFuB70GvBlq8OTqZrmDpMWtES3IJFM78hmyEvBW%2BsE6Xm0uE1iLX312xa7JvoO7Cq9yYUHxgPtxGvoS%2BIu7xes67ucjxz1t8r%2F8U%2Bp%2BMcTgXbhsZAL4%2FWA274fbsDkGftoY7NLNLY%2B3aXJuve4IFc4Kbjb61ntHp1wAGr7XewKczsEAnX9BehCWywHqj1yr8scAtMxniB5MIGQpminKALGg8SwvjJrV3QoHE4TRbDja57PiPDHQCJ%2FoxnMXAlA2LYqxn7jBrAINhaVmHyls3cdT%2FEURo4bo%2FDenvhywhhp5tEC4Blj2WPEm9%2BHzPywvsEFMyKSFUeY848CGCUX48go%2FBUw7HUSI96cM43FpwXdkEbrkdv3wHjf7aB3EvGK40bjMgco8RN21s4M7Du4Kch%2BRa0fS5Kh1opKZ6rAmjiJX2otcnc3r93Q6%2FaE42d9zvbPiFCuZMzfouUKdaEcmlLXihIxQXNfVE6mZNT0p9DK7Zx4Y%2FjQVE%2BrM4QhoMOKx8sQGOqUBh86ipRcipNyP5Opp5hgOdl8PmmkqEEE32CXkbiW5DznsW7L7FPbiGK2qVVTexmzOLAwk7qu3Ptpc6VoCzhdASXKCRnUDm5zLpmIHhWnml7r3AUxvyDX5iRx8f7VUmFS3YVb7XjgxjuMa%2Bl%2B5izhTj1v1xCgwfbXGwo%2BP1%2B9NnlYMObtw%2Fhzbn4pNILmhhd1sQ1V29vto5lSqzr9PNCJ7RydphHt%2B&X-Amz-Signature=70a2f034b33255c8c51525fbe7213417537080a07a781fe8ad20b0fec28ec6ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ2TAD4R%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDrJuTLoGCK6%2FKPq0tvb%2Buzx9lrprxRjNW7bY9%2FXCuxAAiEA3TDHKam%2FYsnXhfL7XRjKgJHV%2BqshzW%2F2GDVESynM2aQq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDI2bW2YZg0xrTiDFfCrcAwL1XAm6TbzgACXwzgzOl0yUpf2DgD9bIr%2BgHtpnDVDnfSQDym9HMojxQkJcQNn2BYU3FGZWzapy2pWb%2BfE38ikyyD8AaDXDlhqYcbVwTIVvPMtsmQQM3mkC1LQgN10cKgFuB70GvBlq8OTqZrmDpMWtES3IJFM78hmyEvBW%2BsE6Xm0uE1iLX312xa7JvoO7Cq9yYUHxgPtxGvoS%2BIu7xes67ucjxz1t8r%2F8U%2Bp%2BMcTgXbhsZAL4%2FWA274fbsDkGftoY7NLNLY%2B3aXJuve4IFc4Kbjb61ntHp1wAGr7XewKczsEAnX9BehCWywHqj1yr8scAtMxniB5MIGQpminKALGg8SwvjJrV3QoHE4TRbDja57PiPDHQCJ%2FoxnMXAlA2LYqxn7jBrAINhaVmHyls3cdT%2FEURo4bo%2FDenvhywhhp5tEC4Blj2WPEm9%2BHzPywvsEFMyKSFUeY848CGCUX48go%2FBUw7HUSI96cM43FpwXdkEbrkdv3wHjf7aB3EvGK40bjMgco8RN21s4M7Du4Kch%2BRa0fS5Kh1opKZ6rAmjiJX2otcnc3r93Q6%2FaE42d9zvbPiFCuZMzfouUKdaEcmlLXihIxQXNfVE6mZNT0p9DK7Zx4Y%2FjQVE%2BrM4QhoMOKx8sQGOqUBh86ipRcipNyP5Opp5hgOdl8PmmkqEEE32CXkbiW5DznsW7L7FPbiGK2qVVTexmzOLAwk7qu3Ptpc6VoCzhdASXKCRnUDm5zLpmIHhWnml7r3AUxvyDX5iRx8f7VUmFS3YVb7XjgxjuMa%2Bl%2B5izhTj1v1xCgwfbXGwo%2BP1%2B9NnlYMObtw%2Fhzbn4pNILmhhd1sQ1V29vto5lSqzr9PNCJ7RydphHt%2B&X-Amz-Signature=9fade9ca875b7ceeae2d07be40958e99036db12e4a4828012a3505e79f2dd5bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored the 4 generated files

```yaml
slam_toolbox:
  ros__parameters:

    # Plugin params
    solver_plugin: solver_plugins::CeresSolver
    ceres_linear_solver: SPARSE_NORMAL_CHOLESKY
    ceres_preconditioner: SCHUR_JACOBI
    ceres_trust_strategy: LEVENBERG_MARQUARDT
    ceres_dogleg_type: TRADITIONAL_DOGLEG
    ceres_loss_function: None

    # ROS Parameters
    odom_frame: odom
    map_frame: map
    base_frame: base_footprint
    scan_topic: /scan
    use_map_saver: true
    # mode: mapping 
    mode: localization 

    # if you'd like to immediately start continuing a map at a given pose
    # or at the dock, but they are mutually exclusive, if pose is given
    # will use pose
    map_file_name: /path/to/map/test # NOTE: no file extension
    # map_start_pose: [0.0, 0.0, 0.0]
    # map_start_at_dock: true

    debug_logging: false
```

Running the launch file again you will see your map preload into rviz

```yaml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ2TAD4R%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDrJuTLoGCK6%2FKPq0tvb%2Buzx9lrprxRjNW7bY9%2FXCuxAAiEA3TDHKam%2FYsnXhfL7XRjKgJHV%2BqshzW%2F2GDVESynM2aQq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDI2bW2YZg0xrTiDFfCrcAwL1XAm6TbzgACXwzgzOl0yUpf2DgD9bIr%2BgHtpnDVDnfSQDym9HMojxQkJcQNn2BYU3FGZWzapy2pWb%2BfE38ikyyD8AaDXDlhqYcbVwTIVvPMtsmQQM3mkC1LQgN10cKgFuB70GvBlq8OTqZrmDpMWtES3IJFM78hmyEvBW%2BsE6Xm0uE1iLX312xa7JvoO7Cq9yYUHxgPtxGvoS%2BIu7xes67ucjxz1t8r%2F8U%2Bp%2BMcTgXbhsZAL4%2FWA274fbsDkGftoY7NLNLY%2B3aXJuve4IFc4Kbjb61ntHp1wAGr7XewKczsEAnX9BehCWywHqj1yr8scAtMxniB5MIGQpminKALGg8SwvjJrV3QoHE4TRbDja57PiPDHQCJ%2FoxnMXAlA2LYqxn7jBrAINhaVmHyls3cdT%2FEURo4bo%2FDenvhywhhp5tEC4Blj2WPEm9%2BHzPywvsEFMyKSFUeY848CGCUX48go%2FBUw7HUSI96cM43FpwXdkEbrkdv3wHjf7aB3EvGK40bjMgco8RN21s4M7Du4Kch%2BRa0fS5Kh1opKZ6rAmjiJX2otcnc3r93Q6%2FaE42d9zvbPiFCuZMzfouUKdaEcmlLXihIxQXNfVE6mZNT0p9DK7Zx4Y%2FjQVE%2BrM4QhoMOKx8sQGOqUBh86ipRcipNyP5Opp5hgOdl8PmmkqEEE32CXkbiW5DznsW7L7FPbiGK2qVVTexmzOLAwk7qu3Ptpc6VoCzhdASXKCRnUDm5zLpmIHhWnml7r3AUxvyDX5iRx8f7VUmFS3YVb7XjgxjuMa%2Bl%2B5izhTj1v1xCgwfbXGwo%2BP1%2B9NnlYMObtw%2Fhzbn4pNILmhhd1sQ1V29vto5lSqzr9PNCJ7RydphHt%2B&X-Amz-Signature=31cd7aef8ad061ebd7c4de68de299cb55400c115424582f7edf9cb479da15668&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
