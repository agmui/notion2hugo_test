---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-30T06:25:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KRULG7Z%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg7t%2BQN1ttrdhURE6CTmBGnKMD8RpHZd14iG9QgmhXXAIgOSX12U1c7JBswBB4Qa6vBgtx70yIcI2uAS%2F4zYYN0ZEqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOyvre6wYPz%2FUbuhCrcA6fyggEwuU4Iegh%2B8%2F8p7QvhVWFgNTg%2FCHg8SvR08ogEUd4nBohvJg%2FOiP08qG3VQSL2HH%2Br2iuXAfCI7puqZaQgcmwWrOTLjYxSKuxeVEAYY8JWJGlj61JdXJUFAaymFHUqD21n1azy66VaN0xuh1aYkMrtBe69s2yOKG4HbDDIuUih6x6ypM362cktEhCyFLDSERtoZT4DeLvfsB8BHX%2FppaiMDtlMlczHf0%2BZScb%2FgwbQQ1%2FG7i0Fk9qPbavgY%2B%2BZW1AFpuoD%2B%2B2EIBJkUeQA6FqbKXIE%2Fg20J5PAcf7v%2F2yAUjDXAFMMPigPR%2FXezvJS0nXPE9fRk6x9762XR3984cx%2BDCodd8%2BruSd9kSLAs54Xm87r%2B8YZ3gm71u3ej%2Bs3lz3fB9p1xzn7UZmU7cYz29Lq1I8PMe0ycmnANdIejOQ3O5%2FD4lXJGf4T6cUMnjIg41F9SCzHAAUye2Cu3EMy5Ef6mO7X6fGP2mjbZbpJMJjyUsnUzLVUJtm%2B2HtKH24gCDjs0IBpGY09FazWhJKEwLV2lHsirws7ULJ88cRzmRmI%2FUh0f30JeHM1VvJ61n7ZI%2Bte7dAFMi5UP9Ti5WC5cjrcfqLJ2atZMz0uLfruZEjnuStI2Vn5qI8ZMNHBp8QGOqUBCku8NoT3YKyjkOnNXksP0Z2VwHFBQyuHQQnsAbMmWeehe9H%2BRl%2BY7tlrSaVbk9gflnP2ZSrjIF0u8kL5qtj%2BBmNhGP6OhpcDFFozEroS3Ctmcr8mZqhyI1x8FeX3hJOSsL%2FSQQEnkgVU3diqvhyhq81fF2RVMqU6EQmJA4%2FCFV1jeJvbns2W3ujWKb6jpnyEeuIFRUeyrGUt3klsFPcTLpMr4lNt&X-Amz-Signature=7b91510d01d42bcd948f68565135ae933389edd7fa5e4aa8358d024340add700&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KRULG7Z%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg7t%2BQN1ttrdhURE6CTmBGnKMD8RpHZd14iG9QgmhXXAIgOSX12U1c7JBswBB4Qa6vBgtx70yIcI2uAS%2F4zYYN0ZEqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOyvre6wYPz%2FUbuhCrcA6fyggEwuU4Iegh%2B8%2F8p7QvhVWFgNTg%2FCHg8SvR08ogEUd4nBohvJg%2FOiP08qG3VQSL2HH%2Br2iuXAfCI7puqZaQgcmwWrOTLjYxSKuxeVEAYY8JWJGlj61JdXJUFAaymFHUqD21n1azy66VaN0xuh1aYkMrtBe69s2yOKG4HbDDIuUih6x6ypM362cktEhCyFLDSERtoZT4DeLvfsB8BHX%2FppaiMDtlMlczHf0%2BZScb%2FgwbQQ1%2FG7i0Fk9qPbavgY%2B%2BZW1AFpuoD%2B%2B2EIBJkUeQA6FqbKXIE%2Fg20J5PAcf7v%2F2yAUjDXAFMMPigPR%2FXezvJS0nXPE9fRk6x9762XR3984cx%2BDCodd8%2BruSd9kSLAs54Xm87r%2B8YZ3gm71u3ej%2Bs3lz3fB9p1xzn7UZmU7cYz29Lq1I8PMe0ycmnANdIejOQ3O5%2FD4lXJGf4T6cUMnjIg41F9SCzHAAUye2Cu3EMy5Ef6mO7X6fGP2mjbZbpJMJjyUsnUzLVUJtm%2B2HtKH24gCDjs0IBpGY09FazWhJKEwLV2lHsirws7ULJ88cRzmRmI%2FUh0f30JeHM1VvJ61n7ZI%2Bte7dAFMi5UP9Ti5WC5cjrcfqLJ2atZMz0uLfruZEjnuStI2Vn5qI8ZMNHBp8QGOqUBCku8NoT3YKyjkOnNXksP0Z2VwHFBQyuHQQnsAbMmWeehe9H%2BRl%2BY7tlrSaVbk9gflnP2ZSrjIF0u8kL5qtj%2BBmNhGP6OhpcDFFozEroS3Ctmcr8mZqhyI1x8FeX3hJOSsL%2FSQQEnkgVU3diqvhyhq81fF2RVMqU6EQmJA4%2FCFV1jeJvbns2W3ujWKb6jpnyEeuIFRUeyrGUt3klsFPcTLpMr4lNt&X-Amz-Signature=fe6005150f18c2916b7ac915173c42f2c618485260bcb0a4fb86b4546a90794e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KRULG7Z%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg7t%2BQN1ttrdhURE6CTmBGnKMD8RpHZd14iG9QgmhXXAIgOSX12U1c7JBswBB4Qa6vBgtx70yIcI2uAS%2F4zYYN0ZEqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOyvre6wYPz%2FUbuhCrcA6fyggEwuU4Iegh%2B8%2F8p7QvhVWFgNTg%2FCHg8SvR08ogEUd4nBohvJg%2FOiP08qG3VQSL2HH%2Br2iuXAfCI7puqZaQgcmwWrOTLjYxSKuxeVEAYY8JWJGlj61JdXJUFAaymFHUqD21n1azy66VaN0xuh1aYkMrtBe69s2yOKG4HbDDIuUih6x6ypM362cktEhCyFLDSERtoZT4DeLvfsB8BHX%2FppaiMDtlMlczHf0%2BZScb%2FgwbQQ1%2FG7i0Fk9qPbavgY%2B%2BZW1AFpuoD%2B%2B2EIBJkUeQA6FqbKXIE%2Fg20J5PAcf7v%2F2yAUjDXAFMMPigPR%2FXezvJS0nXPE9fRk6x9762XR3984cx%2BDCodd8%2BruSd9kSLAs54Xm87r%2B8YZ3gm71u3ej%2Bs3lz3fB9p1xzn7UZmU7cYz29Lq1I8PMe0ycmnANdIejOQ3O5%2FD4lXJGf4T6cUMnjIg41F9SCzHAAUye2Cu3EMy5Ef6mO7X6fGP2mjbZbpJMJjyUsnUzLVUJtm%2B2HtKH24gCDjs0IBpGY09FazWhJKEwLV2lHsirws7ULJ88cRzmRmI%2FUh0f30JeHM1VvJ61n7ZI%2Bte7dAFMi5UP9Ti5WC5cjrcfqLJ2atZMz0uLfruZEjnuStI2Vn5qI8ZMNHBp8QGOqUBCku8NoT3YKyjkOnNXksP0Z2VwHFBQyuHQQnsAbMmWeehe9H%2BRl%2BY7tlrSaVbk9gflnP2ZSrjIF0u8kL5qtj%2BBmNhGP6OhpcDFFozEroS3Ctmcr8mZqhyI1x8FeX3hJOSsL%2FSQQEnkgVU3diqvhyhq81fF2RVMqU6EQmJA4%2FCFV1jeJvbns2W3ujWKb6jpnyEeuIFRUeyrGUt3klsFPcTLpMr4lNt&X-Amz-Signature=00e6bf593ea7fcb1a33736adfa20002115f37418fdaafc95cd379bc43623d833&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KRULG7Z%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg7t%2BQN1ttrdhURE6CTmBGnKMD8RpHZd14iG9QgmhXXAIgOSX12U1c7JBswBB4Qa6vBgtx70yIcI2uAS%2F4zYYN0ZEqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOyvre6wYPz%2FUbuhCrcA6fyggEwuU4Iegh%2B8%2F8p7QvhVWFgNTg%2FCHg8SvR08ogEUd4nBohvJg%2FOiP08qG3VQSL2HH%2Br2iuXAfCI7puqZaQgcmwWrOTLjYxSKuxeVEAYY8JWJGlj61JdXJUFAaymFHUqD21n1azy66VaN0xuh1aYkMrtBe69s2yOKG4HbDDIuUih6x6ypM362cktEhCyFLDSERtoZT4DeLvfsB8BHX%2FppaiMDtlMlczHf0%2BZScb%2FgwbQQ1%2FG7i0Fk9qPbavgY%2B%2BZW1AFpuoD%2B%2B2EIBJkUeQA6FqbKXIE%2Fg20J5PAcf7v%2F2yAUjDXAFMMPigPR%2FXezvJS0nXPE9fRk6x9762XR3984cx%2BDCodd8%2BruSd9kSLAs54Xm87r%2B8YZ3gm71u3ej%2Bs3lz3fB9p1xzn7UZmU7cYz29Lq1I8PMe0ycmnANdIejOQ3O5%2FD4lXJGf4T6cUMnjIg41F9SCzHAAUye2Cu3EMy5Ef6mO7X6fGP2mjbZbpJMJjyUsnUzLVUJtm%2B2HtKH24gCDjs0IBpGY09FazWhJKEwLV2lHsirws7ULJ88cRzmRmI%2FUh0f30JeHM1VvJ61n7ZI%2Bte7dAFMi5UP9Ti5WC5cjrcfqLJ2atZMz0uLfruZEjnuStI2Vn5qI8ZMNHBp8QGOqUBCku8NoT3YKyjkOnNXksP0Z2VwHFBQyuHQQnsAbMmWeehe9H%2BRl%2BY7tlrSaVbk9gflnP2ZSrjIF0u8kL5qtj%2BBmNhGP6OhpcDFFozEroS3Ctmcr8mZqhyI1x8FeX3hJOSsL%2FSQQEnkgVU3diqvhyhq81fF2RVMqU6EQmJA4%2FCFV1jeJvbns2W3ujWKb6jpnyEeuIFRUeyrGUt3klsFPcTLpMr4lNt&X-Amz-Signature=90dfa25441b5258bd3b3f4d8517f42e13fb28515e9206874344a81d8760934e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KRULG7Z%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg7t%2BQN1ttrdhURE6CTmBGnKMD8RpHZd14iG9QgmhXXAIgOSX12U1c7JBswBB4Qa6vBgtx70yIcI2uAS%2F4zYYN0ZEqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOyvre6wYPz%2FUbuhCrcA6fyggEwuU4Iegh%2B8%2F8p7QvhVWFgNTg%2FCHg8SvR08ogEUd4nBohvJg%2FOiP08qG3VQSL2HH%2Br2iuXAfCI7puqZaQgcmwWrOTLjYxSKuxeVEAYY8JWJGlj61JdXJUFAaymFHUqD21n1azy66VaN0xuh1aYkMrtBe69s2yOKG4HbDDIuUih6x6ypM362cktEhCyFLDSERtoZT4DeLvfsB8BHX%2FppaiMDtlMlczHf0%2BZScb%2FgwbQQ1%2FG7i0Fk9qPbavgY%2B%2BZW1AFpuoD%2B%2B2EIBJkUeQA6FqbKXIE%2Fg20J5PAcf7v%2F2yAUjDXAFMMPigPR%2FXezvJS0nXPE9fRk6x9762XR3984cx%2BDCodd8%2BruSd9kSLAs54Xm87r%2B8YZ3gm71u3ej%2Bs3lz3fB9p1xzn7UZmU7cYz29Lq1I8PMe0ycmnANdIejOQ3O5%2FD4lXJGf4T6cUMnjIg41F9SCzHAAUye2Cu3EMy5Ef6mO7X6fGP2mjbZbpJMJjyUsnUzLVUJtm%2B2HtKH24gCDjs0IBpGY09FazWhJKEwLV2lHsirws7ULJ88cRzmRmI%2FUh0f30JeHM1VvJ61n7ZI%2Bte7dAFMi5UP9Ti5WC5cjrcfqLJ2atZMz0uLfruZEjnuStI2Vn5qI8ZMNHBp8QGOqUBCku8NoT3YKyjkOnNXksP0Z2VwHFBQyuHQQnsAbMmWeehe9H%2BRl%2BY7tlrSaVbk9gflnP2ZSrjIF0u8kL5qtj%2BBmNhGP6OhpcDFFozEroS3Ctmcr8mZqhyI1x8FeX3hJOSsL%2FSQQEnkgVU3diqvhyhq81fF2RVMqU6EQmJA4%2FCFV1jeJvbns2W3ujWKb6jpnyEeuIFRUeyrGUt3klsFPcTLpMr4lNt&X-Amz-Signature=5e22a8c6ade45745236c015054a1d81b90c5591cd4304bdadc68e5db3710cbe3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KRULG7Z%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg7t%2BQN1ttrdhURE6CTmBGnKMD8RpHZd14iG9QgmhXXAIgOSX12U1c7JBswBB4Qa6vBgtx70yIcI2uAS%2F4zYYN0ZEqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOyvre6wYPz%2FUbuhCrcA6fyggEwuU4Iegh%2B8%2F8p7QvhVWFgNTg%2FCHg8SvR08ogEUd4nBohvJg%2FOiP08qG3VQSL2HH%2Br2iuXAfCI7puqZaQgcmwWrOTLjYxSKuxeVEAYY8JWJGlj61JdXJUFAaymFHUqD21n1azy66VaN0xuh1aYkMrtBe69s2yOKG4HbDDIuUih6x6ypM362cktEhCyFLDSERtoZT4DeLvfsB8BHX%2FppaiMDtlMlczHf0%2BZScb%2FgwbQQ1%2FG7i0Fk9qPbavgY%2B%2BZW1AFpuoD%2B%2B2EIBJkUeQA6FqbKXIE%2Fg20J5PAcf7v%2F2yAUjDXAFMMPigPR%2FXezvJS0nXPE9fRk6x9762XR3984cx%2BDCodd8%2BruSd9kSLAs54Xm87r%2B8YZ3gm71u3ej%2Bs3lz3fB9p1xzn7UZmU7cYz29Lq1I8PMe0ycmnANdIejOQ3O5%2FD4lXJGf4T6cUMnjIg41F9SCzHAAUye2Cu3EMy5Ef6mO7X6fGP2mjbZbpJMJjyUsnUzLVUJtm%2B2HtKH24gCDjs0IBpGY09FazWhJKEwLV2lHsirws7ULJ88cRzmRmI%2FUh0f30JeHM1VvJ61n7ZI%2Bte7dAFMi5UP9Ti5WC5cjrcfqLJ2atZMz0uLfruZEjnuStI2Vn5qI8ZMNHBp8QGOqUBCku8NoT3YKyjkOnNXksP0Z2VwHFBQyuHQQnsAbMmWeehe9H%2BRl%2BY7tlrSaVbk9gflnP2ZSrjIF0u8kL5qtj%2BBmNhGP6OhpcDFFozEroS3Ctmcr8mZqhyI1x8FeX3hJOSsL%2FSQQEnkgVU3diqvhyhq81fF2RVMqU6EQmJA4%2FCFV1jeJvbns2W3ujWKb6jpnyEeuIFRUeyrGUt3klsFPcTLpMr4lNt&X-Amz-Signature=dedae46ffa3bcaed29ed32a2c85e2f5ccf016e10b43b89f9dcb6a63c883acb01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KRULG7Z%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg7t%2BQN1ttrdhURE6CTmBGnKMD8RpHZd14iG9QgmhXXAIgOSX12U1c7JBswBB4Qa6vBgtx70yIcI2uAS%2F4zYYN0ZEqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOyvre6wYPz%2FUbuhCrcA6fyggEwuU4Iegh%2B8%2F8p7QvhVWFgNTg%2FCHg8SvR08ogEUd4nBohvJg%2FOiP08qG3VQSL2HH%2Br2iuXAfCI7puqZaQgcmwWrOTLjYxSKuxeVEAYY8JWJGlj61JdXJUFAaymFHUqD21n1azy66VaN0xuh1aYkMrtBe69s2yOKG4HbDDIuUih6x6ypM362cktEhCyFLDSERtoZT4DeLvfsB8BHX%2FppaiMDtlMlczHf0%2BZScb%2FgwbQQ1%2FG7i0Fk9qPbavgY%2B%2BZW1AFpuoD%2B%2B2EIBJkUeQA6FqbKXIE%2Fg20J5PAcf7v%2F2yAUjDXAFMMPigPR%2FXezvJS0nXPE9fRk6x9762XR3984cx%2BDCodd8%2BruSd9kSLAs54Xm87r%2B8YZ3gm71u3ej%2Bs3lz3fB9p1xzn7UZmU7cYz29Lq1I8PMe0ycmnANdIejOQ3O5%2FD4lXJGf4T6cUMnjIg41F9SCzHAAUye2Cu3EMy5Ef6mO7X6fGP2mjbZbpJMJjyUsnUzLVUJtm%2B2HtKH24gCDjs0IBpGY09FazWhJKEwLV2lHsirws7ULJ88cRzmRmI%2FUh0f30JeHM1VvJ61n7ZI%2Bte7dAFMi5UP9Ti5WC5cjrcfqLJ2atZMz0uLfruZEjnuStI2Vn5qI8ZMNHBp8QGOqUBCku8NoT3YKyjkOnNXksP0Z2VwHFBQyuHQQnsAbMmWeehe9H%2BRl%2BY7tlrSaVbk9gflnP2ZSrjIF0u8kL5qtj%2BBmNhGP6OhpcDFFozEroS3Ctmcr8mZqhyI1x8FeX3hJOSsL%2FSQQEnkgVU3diqvhyhq81fF2RVMqU6EQmJA4%2FCFV1jeJvbns2W3ujWKb6jpnyEeuIFRUeyrGUt3klsFPcTLpMr4lNt&X-Amz-Signature=be57dddff6e33c8d9bdf9cf8bbd9134f9b170e7f4402e0acc3c1c3414dd399ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KRULG7Z%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg7t%2BQN1ttrdhURE6CTmBGnKMD8RpHZd14iG9QgmhXXAIgOSX12U1c7JBswBB4Qa6vBgtx70yIcI2uAS%2F4zYYN0ZEqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOyvre6wYPz%2FUbuhCrcA6fyggEwuU4Iegh%2B8%2F8p7QvhVWFgNTg%2FCHg8SvR08ogEUd4nBohvJg%2FOiP08qG3VQSL2HH%2Br2iuXAfCI7puqZaQgcmwWrOTLjYxSKuxeVEAYY8JWJGlj61JdXJUFAaymFHUqD21n1azy66VaN0xuh1aYkMrtBe69s2yOKG4HbDDIuUih6x6ypM362cktEhCyFLDSERtoZT4DeLvfsB8BHX%2FppaiMDtlMlczHf0%2BZScb%2FgwbQQ1%2FG7i0Fk9qPbavgY%2B%2BZW1AFpuoD%2B%2B2EIBJkUeQA6FqbKXIE%2Fg20J5PAcf7v%2F2yAUjDXAFMMPigPR%2FXezvJS0nXPE9fRk6x9762XR3984cx%2BDCodd8%2BruSd9kSLAs54Xm87r%2B8YZ3gm71u3ej%2Bs3lz3fB9p1xzn7UZmU7cYz29Lq1I8PMe0ycmnANdIejOQ3O5%2FD4lXJGf4T6cUMnjIg41F9SCzHAAUye2Cu3EMy5Ef6mO7X6fGP2mjbZbpJMJjyUsnUzLVUJtm%2B2HtKH24gCDjs0IBpGY09FazWhJKEwLV2lHsirws7ULJ88cRzmRmI%2FUh0f30JeHM1VvJ61n7ZI%2Bte7dAFMi5UP9Ti5WC5cjrcfqLJ2atZMz0uLfruZEjnuStI2Vn5qI8ZMNHBp8QGOqUBCku8NoT3YKyjkOnNXksP0Z2VwHFBQyuHQQnsAbMmWeehe9H%2BRl%2BY7tlrSaVbk9gflnP2ZSrjIF0u8kL5qtj%2BBmNhGP6OhpcDFFozEroS3Ctmcr8mZqhyI1x8FeX3hJOSsL%2FSQQEnkgVU3diqvhyhq81fF2RVMqU6EQmJA4%2FCFV1jeJvbns2W3ujWKb6jpnyEeuIFRUeyrGUt3klsFPcTLpMr4lNt&X-Amz-Signature=6f75668b78d55a6179bd6cd64b165d10b4603d186844bfe0e457070ade2e0a10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KRULG7Z%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg7t%2BQN1ttrdhURE6CTmBGnKMD8RpHZd14iG9QgmhXXAIgOSX12U1c7JBswBB4Qa6vBgtx70yIcI2uAS%2F4zYYN0ZEqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOyvre6wYPz%2FUbuhCrcA6fyggEwuU4Iegh%2B8%2F8p7QvhVWFgNTg%2FCHg8SvR08ogEUd4nBohvJg%2FOiP08qG3VQSL2HH%2Br2iuXAfCI7puqZaQgcmwWrOTLjYxSKuxeVEAYY8JWJGlj61JdXJUFAaymFHUqD21n1azy66VaN0xuh1aYkMrtBe69s2yOKG4HbDDIuUih6x6ypM362cktEhCyFLDSERtoZT4DeLvfsB8BHX%2FppaiMDtlMlczHf0%2BZScb%2FgwbQQ1%2FG7i0Fk9qPbavgY%2B%2BZW1AFpuoD%2B%2B2EIBJkUeQA6FqbKXIE%2Fg20J5PAcf7v%2F2yAUjDXAFMMPigPR%2FXezvJS0nXPE9fRk6x9762XR3984cx%2BDCodd8%2BruSd9kSLAs54Xm87r%2B8YZ3gm71u3ej%2Bs3lz3fB9p1xzn7UZmU7cYz29Lq1I8PMe0ycmnANdIejOQ3O5%2FD4lXJGf4T6cUMnjIg41F9SCzHAAUye2Cu3EMy5Ef6mO7X6fGP2mjbZbpJMJjyUsnUzLVUJtm%2B2HtKH24gCDjs0IBpGY09FazWhJKEwLV2lHsirws7ULJ88cRzmRmI%2FUh0f30JeHM1VvJ61n7ZI%2Bte7dAFMi5UP9Ti5WC5cjrcfqLJ2atZMz0uLfruZEjnuStI2Vn5qI8ZMNHBp8QGOqUBCku8NoT3YKyjkOnNXksP0Z2VwHFBQyuHQQnsAbMmWeehe9H%2BRl%2BY7tlrSaVbk9gflnP2ZSrjIF0u8kL5qtj%2BBmNhGP6OhpcDFFozEroS3Ctmcr8mZqhyI1x8FeX3hJOSsL%2FSQQEnkgVU3diqvhyhq81fF2RVMqU6EQmJA4%2FCFV1jeJvbns2W3ujWKb6jpnyEeuIFRUeyrGUt3klsFPcTLpMr4lNt&X-Amz-Signature=42b4e44ab8a1058bd1120927cd08ad3dce07d08ac1ee260fb7b1c46d5a432fc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KRULG7Z%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg7t%2BQN1ttrdhURE6CTmBGnKMD8RpHZd14iG9QgmhXXAIgOSX12U1c7JBswBB4Qa6vBgtx70yIcI2uAS%2F4zYYN0ZEqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOyvre6wYPz%2FUbuhCrcA6fyggEwuU4Iegh%2B8%2F8p7QvhVWFgNTg%2FCHg8SvR08ogEUd4nBohvJg%2FOiP08qG3VQSL2HH%2Br2iuXAfCI7puqZaQgcmwWrOTLjYxSKuxeVEAYY8JWJGlj61JdXJUFAaymFHUqD21n1azy66VaN0xuh1aYkMrtBe69s2yOKG4HbDDIuUih6x6ypM362cktEhCyFLDSERtoZT4DeLvfsB8BHX%2FppaiMDtlMlczHf0%2BZScb%2FgwbQQ1%2FG7i0Fk9qPbavgY%2B%2BZW1AFpuoD%2B%2B2EIBJkUeQA6FqbKXIE%2Fg20J5PAcf7v%2F2yAUjDXAFMMPigPR%2FXezvJS0nXPE9fRk6x9762XR3984cx%2BDCodd8%2BruSd9kSLAs54Xm87r%2B8YZ3gm71u3ej%2Bs3lz3fB9p1xzn7UZmU7cYz29Lq1I8PMe0ycmnANdIejOQ3O5%2FD4lXJGf4T6cUMnjIg41F9SCzHAAUye2Cu3EMy5Ef6mO7X6fGP2mjbZbpJMJjyUsnUzLVUJtm%2B2HtKH24gCDjs0IBpGY09FazWhJKEwLV2lHsirws7ULJ88cRzmRmI%2FUh0f30JeHM1VvJ61n7ZI%2Bte7dAFMi5UP9Ti5WC5cjrcfqLJ2atZMz0uLfruZEjnuStI2Vn5qI8ZMNHBp8QGOqUBCku8NoT3YKyjkOnNXksP0Z2VwHFBQyuHQQnsAbMmWeehe9H%2BRl%2BY7tlrSaVbk9gflnP2ZSrjIF0u8kL5qtj%2BBmNhGP6OhpcDFFozEroS3Ctmcr8mZqhyI1x8FeX3hJOSsL%2FSQQEnkgVU3diqvhyhq81fF2RVMqU6EQmJA4%2FCFV1jeJvbns2W3ujWKb6jpnyEeuIFRUeyrGUt3klsFPcTLpMr4lNt&X-Amz-Signature=801358c4e3b7e3d1f334b2fe24fc5180e54537a1d050ebc025136b765cbe920a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KRULG7Z%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg7t%2BQN1ttrdhURE6CTmBGnKMD8RpHZd14iG9QgmhXXAIgOSX12U1c7JBswBB4Qa6vBgtx70yIcI2uAS%2F4zYYN0ZEqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOyvre6wYPz%2FUbuhCrcA6fyggEwuU4Iegh%2B8%2F8p7QvhVWFgNTg%2FCHg8SvR08ogEUd4nBohvJg%2FOiP08qG3VQSL2HH%2Br2iuXAfCI7puqZaQgcmwWrOTLjYxSKuxeVEAYY8JWJGlj61JdXJUFAaymFHUqD21n1azy66VaN0xuh1aYkMrtBe69s2yOKG4HbDDIuUih6x6ypM362cktEhCyFLDSERtoZT4DeLvfsB8BHX%2FppaiMDtlMlczHf0%2BZScb%2FgwbQQ1%2FG7i0Fk9qPbavgY%2B%2BZW1AFpuoD%2B%2B2EIBJkUeQA6FqbKXIE%2Fg20J5PAcf7v%2F2yAUjDXAFMMPigPR%2FXezvJS0nXPE9fRk6x9762XR3984cx%2BDCodd8%2BruSd9kSLAs54Xm87r%2B8YZ3gm71u3ej%2Bs3lz3fB9p1xzn7UZmU7cYz29Lq1I8PMe0ycmnANdIejOQ3O5%2FD4lXJGf4T6cUMnjIg41F9SCzHAAUye2Cu3EMy5Ef6mO7X6fGP2mjbZbpJMJjyUsnUzLVUJtm%2B2HtKH24gCDjs0IBpGY09FazWhJKEwLV2lHsirws7ULJ88cRzmRmI%2FUh0f30JeHM1VvJ61n7ZI%2Bte7dAFMi5UP9Ti5WC5cjrcfqLJ2atZMz0uLfruZEjnuStI2Vn5qI8ZMNHBp8QGOqUBCku8NoT3YKyjkOnNXksP0Z2VwHFBQyuHQQnsAbMmWeehe9H%2BRl%2BY7tlrSaVbk9gflnP2ZSrjIF0u8kL5qtj%2BBmNhGP6OhpcDFFozEroS3Ctmcr8mZqhyI1x8FeX3hJOSsL%2FSQQEnkgVU3diqvhyhq81fF2RVMqU6EQmJA4%2FCFV1jeJvbns2W3ujWKb6jpnyEeuIFRUeyrGUt3klsFPcTLpMr4lNt&X-Amz-Signature=59e7782e893864ad3c789123d4f67470bb36584275947656095cbb59a8eee25f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KRULG7Z%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg7t%2BQN1ttrdhURE6CTmBGnKMD8RpHZd14iG9QgmhXXAIgOSX12U1c7JBswBB4Qa6vBgtx70yIcI2uAS%2F4zYYN0ZEqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOyvre6wYPz%2FUbuhCrcA6fyggEwuU4Iegh%2B8%2F8p7QvhVWFgNTg%2FCHg8SvR08ogEUd4nBohvJg%2FOiP08qG3VQSL2HH%2Br2iuXAfCI7puqZaQgcmwWrOTLjYxSKuxeVEAYY8JWJGlj61JdXJUFAaymFHUqD21n1azy66VaN0xuh1aYkMrtBe69s2yOKG4HbDDIuUih6x6ypM362cktEhCyFLDSERtoZT4DeLvfsB8BHX%2FppaiMDtlMlczHf0%2BZScb%2FgwbQQ1%2FG7i0Fk9qPbavgY%2B%2BZW1AFpuoD%2B%2B2EIBJkUeQA6FqbKXIE%2Fg20J5PAcf7v%2F2yAUjDXAFMMPigPR%2FXezvJS0nXPE9fRk6x9762XR3984cx%2BDCodd8%2BruSd9kSLAs54Xm87r%2B8YZ3gm71u3ej%2Bs3lz3fB9p1xzn7UZmU7cYz29Lq1I8PMe0ycmnANdIejOQ3O5%2FD4lXJGf4T6cUMnjIg41F9SCzHAAUye2Cu3EMy5Ef6mO7X6fGP2mjbZbpJMJjyUsnUzLVUJtm%2B2HtKH24gCDjs0IBpGY09FazWhJKEwLV2lHsirws7ULJ88cRzmRmI%2FUh0f30JeHM1VvJ61n7ZI%2Bte7dAFMi5UP9Ti5WC5cjrcfqLJ2atZMz0uLfruZEjnuStI2Vn5qI8ZMNHBp8QGOqUBCku8NoT3YKyjkOnNXksP0Z2VwHFBQyuHQQnsAbMmWeehe9H%2BRl%2BY7tlrSaVbk9gflnP2ZSrjIF0u8kL5qtj%2BBmNhGP6OhpcDFFozEroS3Ctmcr8mZqhyI1x8FeX3hJOSsL%2FSQQEnkgVU3diqvhyhq81fF2RVMqU6EQmJA4%2FCFV1jeJvbns2W3ujWKb6jpnyEeuIFRUeyrGUt3klsFPcTLpMr4lNt&X-Amz-Signature=1c9ad2f9f115e175ab1c9b3bc918595d6fea808b2176319ee1d94a25052e57e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KRULG7Z%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg7t%2BQN1ttrdhURE6CTmBGnKMD8RpHZd14iG9QgmhXXAIgOSX12U1c7JBswBB4Qa6vBgtx70yIcI2uAS%2F4zYYN0ZEqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOyvre6wYPz%2FUbuhCrcA6fyggEwuU4Iegh%2B8%2F8p7QvhVWFgNTg%2FCHg8SvR08ogEUd4nBohvJg%2FOiP08qG3VQSL2HH%2Br2iuXAfCI7puqZaQgcmwWrOTLjYxSKuxeVEAYY8JWJGlj61JdXJUFAaymFHUqD21n1azy66VaN0xuh1aYkMrtBe69s2yOKG4HbDDIuUih6x6ypM362cktEhCyFLDSERtoZT4DeLvfsB8BHX%2FppaiMDtlMlczHf0%2BZScb%2FgwbQQ1%2FG7i0Fk9qPbavgY%2B%2BZW1AFpuoD%2B%2B2EIBJkUeQA6FqbKXIE%2Fg20J5PAcf7v%2F2yAUjDXAFMMPigPR%2FXezvJS0nXPE9fRk6x9762XR3984cx%2BDCodd8%2BruSd9kSLAs54Xm87r%2B8YZ3gm71u3ej%2Bs3lz3fB9p1xzn7UZmU7cYz29Lq1I8PMe0ycmnANdIejOQ3O5%2FD4lXJGf4T6cUMnjIg41F9SCzHAAUye2Cu3EMy5Ef6mO7X6fGP2mjbZbpJMJjyUsnUzLVUJtm%2B2HtKH24gCDjs0IBpGY09FazWhJKEwLV2lHsirws7ULJ88cRzmRmI%2FUh0f30JeHM1VvJ61n7ZI%2Bte7dAFMi5UP9Ti5WC5cjrcfqLJ2atZMz0uLfruZEjnuStI2Vn5qI8ZMNHBp8QGOqUBCku8NoT3YKyjkOnNXksP0Z2VwHFBQyuHQQnsAbMmWeehe9H%2BRl%2BY7tlrSaVbk9gflnP2ZSrjIF0u8kL5qtj%2BBmNhGP6OhpcDFFozEroS3Ctmcr8mZqhyI1x8FeX3hJOSsL%2FSQQEnkgVU3diqvhyhq81fF2RVMqU6EQmJA4%2FCFV1jeJvbns2W3ujWKb6jpnyEeuIFRUeyrGUt3klsFPcTLpMr4lNt&X-Amz-Signature=bb6fde1de2737bfc696037ab08cea130efc1bb1a42fa766edeef1bbe67a0eadb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KRULG7Z%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg7t%2BQN1ttrdhURE6CTmBGnKMD8RpHZd14iG9QgmhXXAIgOSX12U1c7JBswBB4Qa6vBgtx70yIcI2uAS%2F4zYYN0ZEqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOyvre6wYPz%2FUbuhCrcA6fyggEwuU4Iegh%2B8%2F8p7QvhVWFgNTg%2FCHg8SvR08ogEUd4nBohvJg%2FOiP08qG3VQSL2HH%2Br2iuXAfCI7puqZaQgcmwWrOTLjYxSKuxeVEAYY8JWJGlj61JdXJUFAaymFHUqD21n1azy66VaN0xuh1aYkMrtBe69s2yOKG4HbDDIuUih6x6ypM362cktEhCyFLDSERtoZT4DeLvfsB8BHX%2FppaiMDtlMlczHf0%2BZScb%2FgwbQQ1%2FG7i0Fk9qPbavgY%2B%2BZW1AFpuoD%2B%2B2EIBJkUeQA6FqbKXIE%2Fg20J5PAcf7v%2F2yAUjDXAFMMPigPR%2FXezvJS0nXPE9fRk6x9762XR3984cx%2BDCodd8%2BruSd9kSLAs54Xm87r%2B8YZ3gm71u3ej%2Bs3lz3fB9p1xzn7UZmU7cYz29Lq1I8PMe0ycmnANdIejOQ3O5%2FD4lXJGf4T6cUMnjIg41F9SCzHAAUye2Cu3EMy5Ef6mO7X6fGP2mjbZbpJMJjyUsnUzLVUJtm%2B2HtKH24gCDjs0IBpGY09FazWhJKEwLV2lHsirws7ULJ88cRzmRmI%2FUh0f30JeHM1VvJ61n7ZI%2Bte7dAFMi5UP9Ti5WC5cjrcfqLJ2atZMz0uLfruZEjnuStI2Vn5qI8ZMNHBp8QGOqUBCku8NoT3YKyjkOnNXksP0Z2VwHFBQyuHQQnsAbMmWeehe9H%2BRl%2BY7tlrSaVbk9gflnP2ZSrjIF0u8kL5qtj%2BBmNhGP6OhpcDFFozEroS3Ctmcr8mZqhyI1x8FeX3hJOSsL%2FSQQEnkgVU3diqvhyhq81fF2RVMqU6EQmJA4%2FCFV1jeJvbns2W3ujWKb6jpnyEeuIFRUeyrGUt3klsFPcTLpMr4lNt&X-Amz-Signature=d0179b5d3387db1e937dcad485a18b0fb4bc4604d7285e666415ad9fbbb6d9c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
