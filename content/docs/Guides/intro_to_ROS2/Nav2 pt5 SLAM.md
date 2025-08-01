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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ2TWOP5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BG%2FC%2FC2vgzHI6lakLJaGLhHGC2SfKO83IPCDAAkjMqAIhAKU9N4Ql6nCeTLrvEnZbBnoku5SnXuifk9eEKcwvO5MbKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQKsM6pDiFCvcq3BIq3APVVLq%2Fd0oqVgzjMYmCWlCjpdFb%2BUBwHCY8dFRnDiAFHJP7V4BILKmJ3heXcpPHyFIoJht8g7oNYbuQeh5SY%2FomKe1F7mA7Yie3iT7%2BD%2FCHB92gKTrdrtjMsytSCCPef2B0yO%2FLAQQhIDBoxPIu6ZhAONnLd9Oj588l78hCoFn3N77DbkID4D0ZV3SMc0XuoJq%2BZjSpgA4iH7vhCy8Yso7zr8G4zP7ei2c%2FD9y4Np45tsO6ji%2BelPOIfK625FoQvfySD0ZAEBDk1aj6UlVM56e%2BUy5Y5eMaJ8kp51fZ%2BVD3lK0%2BJs%2B259gEM77FVzGMw2JGI2YjARJYLLcJBf%2F2tJyuC%2BEPAyus6BjUeG3mjEMxif3eLBi976BQjDrssTa7X7U7iK147RGM%2Fi%2FCaPtzecTq%2FK8ZpTMHx6cAI%2FHMD1yS%2FktbTY8M5e9g2yjGcGnc71xwniOEL9vDXtuqp2c96ixuNfamSBEX%2FNl0mW4QOFtmadFt3hFxwnvIZxKs%2FuGxanTfieOh1kP7tJuCNjjmyCu4d2sF9nm%2BosTMaYddKVIZGd7WQ5fCBKNx0J%2F5ctmqX%2BJdRvJPEDCBHLjZqLDtqL4Sob6%2B%2Fmn2dhHLYOn20Msttq%2FdC7Kp3Ckihg%2B%2FoTD07bTEBjqkAVPYRQhajAhxYaAaWmorVGCo6ilPYpQO08icZaEdoCC98m3veYvw1dY52j3mf8h52cJi6cnzU%2FtyYsK28SbwEHfYJHPchrJ7h9pKetWsZRgkVjR6n1R2p%2FeVskylLZMaCIhNFYj3%2BfD%2BECDONoM8HYeI%2Fdr96WKKAZFA8wiIFF%2BkAtyW2nyWy07%2BJrtYHiPj8tloxhfqn5NiNYBjkc14tDjfgBsV&X-Amz-Signature=481d285cee204e582491b483af2fd4b92e9d9ac513d07d68b2d750feb9f07f45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ2TWOP5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BG%2FC%2FC2vgzHI6lakLJaGLhHGC2SfKO83IPCDAAkjMqAIhAKU9N4Ql6nCeTLrvEnZbBnoku5SnXuifk9eEKcwvO5MbKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQKsM6pDiFCvcq3BIq3APVVLq%2Fd0oqVgzjMYmCWlCjpdFb%2BUBwHCY8dFRnDiAFHJP7V4BILKmJ3heXcpPHyFIoJht8g7oNYbuQeh5SY%2FomKe1F7mA7Yie3iT7%2BD%2FCHB92gKTrdrtjMsytSCCPef2B0yO%2FLAQQhIDBoxPIu6ZhAONnLd9Oj588l78hCoFn3N77DbkID4D0ZV3SMc0XuoJq%2BZjSpgA4iH7vhCy8Yso7zr8G4zP7ei2c%2FD9y4Np45tsO6ji%2BelPOIfK625FoQvfySD0ZAEBDk1aj6UlVM56e%2BUy5Y5eMaJ8kp51fZ%2BVD3lK0%2BJs%2B259gEM77FVzGMw2JGI2YjARJYLLcJBf%2F2tJyuC%2BEPAyus6BjUeG3mjEMxif3eLBi976BQjDrssTa7X7U7iK147RGM%2Fi%2FCaPtzecTq%2FK8ZpTMHx6cAI%2FHMD1yS%2FktbTY8M5e9g2yjGcGnc71xwniOEL9vDXtuqp2c96ixuNfamSBEX%2FNl0mW4QOFtmadFt3hFxwnvIZxKs%2FuGxanTfieOh1kP7tJuCNjjmyCu4d2sF9nm%2BosTMaYddKVIZGd7WQ5fCBKNx0J%2F5ctmqX%2BJdRvJPEDCBHLjZqLDtqL4Sob6%2B%2Fmn2dhHLYOn20Msttq%2FdC7Kp3Ckihg%2B%2FoTD07bTEBjqkAVPYRQhajAhxYaAaWmorVGCo6ilPYpQO08icZaEdoCC98m3veYvw1dY52j3mf8h52cJi6cnzU%2FtyYsK28SbwEHfYJHPchrJ7h9pKetWsZRgkVjR6n1R2p%2FeVskylLZMaCIhNFYj3%2BfD%2BECDONoM8HYeI%2Fdr96WKKAZFA8wiIFF%2BkAtyW2nyWy07%2BJrtYHiPj8tloxhfqn5NiNYBjkc14tDjfgBsV&X-Amz-Signature=6f1422da7a8b1ab2ddb49e773a5e3d377be869349cf7cfc27daa8d4e4990c462&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ2TWOP5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BG%2FC%2FC2vgzHI6lakLJaGLhHGC2SfKO83IPCDAAkjMqAIhAKU9N4Ql6nCeTLrvEnZbBnoku5SnXuifk9eEKcwvO5MbKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQKsM6pDiFCvcq3BIq3APVVLq%2Fd0oqVgzjMYmCWlCjpdFb%2BUBwHCY8dFRnDiAFHJP7V4BILKmJ3heXcpPHyFIoJht8g7oNYbuQeh5SY%2FomKe1F7mA7Yie3iT7%2BD%2FCHB92gKTrdrtjMsytSCCPef2B0yO%2FLAQQhIDBoxPIu6ZhAONnLd9Oj588l78hCoFn3N77DbkID4D0ZV3SMc0XuoJq%2BZjSpgA4iH7vhCy8Yso7zr8G4zP7ei2c%2FD9y4Np45tsO6ji%2BelPOIfK625FoQvfySD0ZAEBDk1aj6UlVM56e%2BUy5Y5eMaJ8kp51fZ%2BVD3lK0%2BJs%2B259gEM77FVzGMw2JGI2YjARJYLLcJBf%2F2tJyuC%2BEPAyus6BjUeG3mjEMxif3eLBi976BQjDrssTa7X7U7iK147RGM%2Fi%2FCaPtzecTq%2FK8ZpTMHx6cAI%2FHMD1yS%2FktbTY8M5e9g2yjGcGnc71xwniOEL9vDXtuqp2c96ixuNfamSBEX%2FNl0mW4QOFtmadFt3hFxwnvIZxKs%2FuGxanTfieOh1kP7tJuCNjjmyCu4d2sF9nm%2BosTMaYddKVIZGd7WQ5fCBKNx0J%2F5ctmqX%2BJdRvJPEDCBHLjZqLDtqL4Sob6%2B%2Fmn2dhHLYOn20Msttq%2FdC7Kp3Ckihg%2B%2FoTD07bTEBjqkAVPYRQhajAhxYaAaWmorVGCo6ilPYpQO08icZaEdoCC98m3veYvw1dY52j3mf8h52cJi6cnzU%2FtyYsK28SbwEHfYJHPchrJ7h9pKetWsZRgkVjR6n1R2p%2FeVskylLZMaCIhNFYj3%2BfD%2BECDONoM8HYeI%2Fdr96WKKAZFA8wiIFF%2BkAtyW2nyWy07%2BJrtYHiPj8tloxhfqn5NiNYBjkc14tDjfgBsV&X-Amz-Signature=0294cc6514a1be8550fffb37218fc788f69d61390fb50420743b9307a709b4d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ2TWOP5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BG%2FC%2FC2vgzHI6lakLJaGLhHGC2SfKO83IPCDAAkjMqAIhAKU9N4Ql6nCeTLrvEnZbBnoku5SnXuifk9eEKcwvO5MbKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQKsM6pDiFCvcq3BIq3APVVLq%2Fd0oqVgzjMYmCWlCjpdFb%2BUBwHCY8dFRnDiAFHJP7V4BILKmJ3heXcpPHyFIoJht8g7oNYbuQeh5SY%2FomKe1F7mA7Yie3iT7%2BD%2FCHB92gKTrdrtjMsytSCCPef2B0yO%2FLAQQhIDBoxPIu6ZhAONnLd9Oj588l78hCoFn3N77DbkID4D0ZV3SMc0XuoJq%2BZjSpgA4iH7vhCy8Yso7zr8G4zP7ei2c%2FD9y4Np45tsO6ji%2BelPOIfK625FoQvfySD0ZAEBDk1aj6UlVM56e%2BUy5Y5eMaJ8kp51fZ%2BVD3lK0%2BJs%2B259gEM77FVzGMw2JGI2YjARJYLLcJBf%2F2tJyuC%2BEPAyus6BjUeG3mjEMxif3eLBi976BQjDrssTa7X7U7iK147RGM%2Fi%2FCaPtzecTq%2FK8ZpTMHx6cAI%2FHMD1yS%2FktbTY8M5e9g2yjGcGnc71xwniOEL9vDXtuqp2c96ixuNfamSBEX%2FNl0mW4QOFtmadFt3hFxwnvIZxKs%2FuGxanTfieOh1kP7tJuCNjjmyCu4d2sF9nm%2BosTMaYddKVIZGd7WQ5fCBKNx0J%2F5ctmqX%2BJdRvJPEDCBHLjZqLDtqL4Sob6%2B%2Fmn2dhHLYOn20Msttq%2FdC7Kp3Ckihg%2B%2FoTD07bTEBjqkAVPYRQhajAhxYaAaWmorVGCo6ilPYpQO08icZaEdoCC98m3veYvw1dY52j3mf8h52cJi6cnzU%2FtyYsK28SbwEHfYJHPchrJ7h9pKetWsZRgkVjR6n1R2p%2FeVskylLZMaCIhNFYj3%2BfD%2BECDONoM8HYeI%2Fdr96WKKAZFA8wiIFF%2BkAtyW2nyWy07%2BJrtYHiPj8tloxhfqn5NiNYBjkc14tDjfgBsV&X-Amz-Signature=148839050dab58e2b94a92442a0d6b39645261429c43c93e69bcf055854bea72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ2TWOP5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BG%2FC%2FC2vgzHI6lakLJaGLhHGC2SfKO83IPCDAAkjMqAIhAKU9N4Ql6nCeTLrvEnZbBnoku5SnXuifk9eEKcwvO5MbKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQKsM6pDiFCvcq3BIq3APVVLq%2Fd0oqVgzjMYmCWlCjpdFb%2BUBwHCY8dFRnDiAFHJP7V4BILKmJ3heXcpPHyFIoJht8g7oNYbuQeh5SY%2FomKe1F7mA7Yie3iT7%2BD%2FCHB92gKTrdrtjMsytSCCPef2B0yO%2FLAQQhIDBoxPIu6ZhAONnLd9Oj588l78hCoFn3N77DbkID4D0ZV3SMc0XuoJq%2BZjSpgA4iH7vhCy8Yso7zr8G4zP7ei2c%2FD9y4Np45tsO6ji%2BelPOIfK625FoQvfySD0ZAEBDk1aj6UlVM56e%2BUy5Y5eMaJ8kp51fZ%2BVD3lK0%2BJs%2B259gEM77FVzGMw2JGI2YjARJYLLcJBf%2F2tJyuC%2BEPAyus6BjUeG3mjEMxif3eLBi976BQjDrssTa7X7U7iK147RGM%2Fi%2FCaPtzecTq%2FK8ZpTMHx6cAI%2FHMD1yS%2FktbTY8M5e9g2yjGcGnc71xwniOEL9vDXtuqp2c96ixuNfamSBEX%2FNl0mW4QOFtmadFt3hFxwnvIZxKs%2FuGxanTfieOh1kP7tJuCNjjmyCu4d2sF9nm%2BosTMaYddKVIZGd7WQ5fCBKNx0J%2F5ctmqX%2BJdRvJPEDCBHLjZqLDtqL4Sob6%2B%2Fmn2dhHLYOn20Msttq%2FdC7Kp3Ckihg%2B%2FoTD07bTEBjqkAVPYRQhajAhxYaAaWmorVGCo6ilPYpQO08icZaEdoCC98m3veYvw1dY52j3mf8h52cJi6cnzU%2FtyYsK28SbwEHfYJHPchrJ7h9pKetWsZRgkVjR6n1R2p%2FeVskylLZMaCIhNFYj3%2BfD%2BECDONoM8HYeI%2Fdr96WKKAZFA8wiIFF%2BkAtyW2nyWy07%2BJrtYHiPj8tloxhfqn5NiNYBjkc14tDjfgBsV&X-Amz-Signature=6bd423ef8ec2e2ba5a63cfa95e4e359be8fb1c0f28f92e1d1cfd8fb262de81d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ2TWOP5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BG%2FC%2FC2vgzHI6lakLJaGLhHGC2SfKO83IPCDAAkjMqAIhAKU9N4Ql6nCeTLrvEnZbBnoku5SnXuifk9eEKcwvO5MbKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQKsM6pDiFCvcq3BIq3APVVLq%2Fd0oqVgzjMYmCWlCjpdFb%2BUBwHCY8dFRnDiAFHJP7V4BILKmJ3heXcpPHyFIoJht8g7oNYbuQeh5SY%2FomKe1F7mA7Yie3iT7%2BD%2FCHB92gKTrdrtjMsytSCCPef2B0yO%2FLAQQhIDBoxPIu6ZhAONnLd9Oj588l78hCoFn3N77DbkID4D0ZV3SMc0XuoJq%2BZjSpgA4iH7vhCy8Yso7zr8G4zP7ei2c%2FD9y4Np45tsO6ji%2BelPOIfK625FoQvfySD0ZAEBDk1aj6UlVM56e%2BUy5Y5eMaJ8kp51fZ%2BVD3lK0%2BJs%2B259gEM77FVzGMw2JGI2YjARJYLLcJBf%2F2tJyuC%2BEPAyus6BjUeG3mjEMxif3eLBi976BQjDrssTa7X7U7iK147RGM%2Fi%2FCaPtzecTq%2FK8ZpTMHx6cAI%2FHMD1yS%2FktbTY8M5e9g2yjGcGnc71xwniOEL9vDXtuqp2c96ixuNfamSBEX%2FNl0mW4QOFtmadFt3hFxwnvIZxKs%2FuGxanTfieOh1kP7tJuCNjjmyCu4d2sF9nm%2BosTMaYddKVIZGd7WQ5fCBKNx0J%2F5ctmqX%2BJdRvJPEDCBHLjZqLDtqL4Sob6%2B%2Fmn2dhHLYOn20Msttq%2FdC7Kp3Ckihg%2B%2FoTD07bTEBjqkAVPYRQhajAhxYaAaWmorVGCo6ilPYpQO08icZaEdoCC98m3veYvw1dY52j3mf8h52cJi6cnzU%2FtyYsK28SbwEHfYJHPchrJ7h9pKetWsZRgkVjR6n1R2p%2FeVskylLZMaCIhNFYj3%2BfD%2BECDONoM8HYeI%2Fdr96WKKAZFA8wiIFF%2BkAtyW2nyWy07%2BJrtYHiPj8tloxhfqn5NiNYBjkc14tDjfgBsV&X-Amz-Signature=562972df42cf36d3e7f2feb00239d49f4bcad772e9831e9286f3a416e5200c9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ2TWOP5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BG%2FC%2FC2vgzHI6lakLJaGLhHGC2SfKO83IPCDAAkjMqAIhAKU9N4Ql6nCeTLrvEnZbBnoku5SnXuifk9eEKcwvO5MbKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQKsM6pDiFCvcq3BIq3APVVLq%2Fd0oqVgzjMYmCWlCjpdFb%2BUBwHCY8dFRnDiAFHJP7V4BILKmJ3heXcpPHyFIoJht8g7oNYbuQeh5SY%2FomKe1F7mA7Yie3iT7%2BD%2FCHB92gKTrdrtjMsytSCCPef2B0yO%2FLAQQhIDBoxPIu6ZhAONnLd9Oj588l78hCoFn3N77DbkID4D0ZV3SMc0XuoJq%2BZjSpgA4iH7vhCy8Yso7zr8G4zP7ei2c%2FD9y4Np45tsO6ji%2BelPOIfK625FoQvfySD0ZAEBDk1aj6UlVM56e%2BUy5Y5eMaJ8kp51fZ%2BVD3lK0%2BJs%2B259gEM77FVzGMw2JGI2YjARJYLLcJBf%2F2tJyuC%2BEPAyus6BjUeG3mjEMxif3eLBi976BQjDrssTa7X7U7iK147RGM%2Fi%2FCaPtzecTq%2FK8ZpTMHx6cAI%2FHMD1yS%2FktbTY8M5e9g2yjGcGnc71xwniOEL9vDXtuqp2c96ixuNfamSBEX%2FNl0mW4QOFtmadFt3hFxwnvIZxKs%2FuGxanTfieOh1kP7tJuCNjjmyCu4d2sF9nm%2BosTMaYddKVIZGd7WQ5fCBKNx0J%2F5ctmqX%2BJdRvJPEDCBHLjZqLDtqL4Sob6%2B%2Fmn2dhHLYOn20Msttq%2FdC7Kp3Ckihg%2B%2FoTD07bTEBjqkAVPYRQhajAhxYaAaWmorVGCo6ilPYpQO08icZaEdoCC98m3veYvw1dY52j3mf8h52cJi6cnzU%2FtyYsK28SbwEHfYJHPchrJ7h9pKetWsZRgkVjR6n1R2p%2FeVskylLZMaCIhNFYj3%2BfD%2BECDONoM8HYeI%2Fdr96WKKAZFA8wiIFF%2BkAtyW2nyWy07%2BJrtYHiPj8tloxhfqn5NiNYBjkc14tDjfgBsV&X-Amz-Signature=fc8c9a3e547cc37e274b65a2706d6ed12953f921b51084abfbf472060e401317&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ2TWOP5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BG%2FC%2FC2vgzHI6lakLJaGLhHGC2SfKO83IPCDAAkjMqAIhAKU9N4Ql6nCeTLrvEnZbBnoku5SnXuifk9eEKcwvO5MbKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQKsM6pDiFCvcq3BIq3APVVLq%2Fd0oqVgzjMYmCWlCjpdFb%2BUBwHCY8dFRnDiAFHJP7V4BILKmJ3heXcpPHyFIoJht8g7oNYbuQeh5SY%2FomKe1F7mA7Yie3iT7%2BD%2FCHB92gKTrdrtjMsytSCCPef2B0yO%2FLAQQhIDBoxPIu6ZhAONnLd9Oj588l78hCoFn3N77DbkID4D0ZV3SMc0XuoJq%2BZjSpgA4iH7vhCy8Yso7zr8G4zP7ei2c%2FD9y4Np45tsO6ji%2BelPOIfK625FoQvfySD0ZAEBDk1aj6UlVM56e%2BUy5Y5eMaJ8kp51fZ%2BVD3lK0%2BJs%2B259gEM77FVzGMw2JGI2YjARJYLLcJBf%2F2tJyuC%2BEPAyus6BjUeG3mjEMxif3eLBi976BQjDrssTa7X7U7iK147RGM%2Fi%2FCaPtzecTq%2FK8ZpTMHx6cAI%2FHMD1yS%2FktbTY8M5e9g2yjGcGnc71xwniOEL9vDXtuqp2c96ixuNfamSBEX%2FNl0mW4QOFtmadFt3hFxwnvIZxKs%2FuGxanTfieOh1kP7tJuCNjjmyCu4d2sF9nm%2BosTMaYddKVIZGd7WQ5fCBKNx0J%2F5ctmqX%2BJdRvJPEDCBHLjZqLDtqL4Sob6%2B%2Fmn2dhHLYOn20Msttq%2FdC7Kp3Ckihg%2B%2FoTD07bTEBjqkAVPYRQhajAhxYaAaWmorVGCo6ilPYpQO08icZaEdoCC98m3veYvw1dY52j3mf8h52cJi6cnzU%2FtyYsK28SbwEHfYJHPchrJ7h9pKetWsZRgkVjR6n1R2p%2FeVskylLZMaCIhNFYj3%2BfD%2BECDONoM8HYeI%2Fdr96WKKAZFA8wiIFF%2BkAtyW2nyWy07%2BJrtYHiPj8tloxhfqn5NiNYBjkc14tDjfgBsV&X-Amz-Signature=3094f978146cc15d65af771dbfbced5529952c1923a3739a11e2885fda009cc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ2TWOP5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BG%2FC%2FC2vgzHI6lakLJaGLhHGC2SfKO83IPCDAAkjMqAIhAKU9N4Ql6nCeTLrvEnZbBnoku5SnXuifk9eEKcwvO5MbKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQKsM6pDiFCvcq3BIq3APVVLq%2Fd0oqVgzjMYmCWlCjpdFb%2BUBwHCY8dFRnDiAFHJP7V4BILKmJ3heXcpPHyFIoJht8g7oNYbuQeh5SY%2FomKe1F7mA7Yie3iT7%2BD%2FCHB92gKTrdrtjMsytSCCPef2B0yO%2FLAQQhIDBoxPIu6ZhAONnLd9Oj588l78hCoFn3N77DbkID4D0ZV3SMc0XuoJq%2BZjSpgA4iH7vhCy8Yso7zr8G4zP7ei2c%2FD9y4Np45tsO6ji%2BelPOIfK625FoQvfySD0ZAEBDk1aj6UlVM56e%2BUy5Y5eMaJ8kp51fZ%2BVD3lK0%2BJs%2B259gEM77FVzGMw2JGI2YjARJYLLcJBf%2F2tJyuC%2BEPAyus6BjUeG3mjEMxif3eLBi976BQjDrssTa7X7U7iK147RGM%2Fi%2FCaPtzecTq%2FK8ZpTMHx6cAI%2FHMD1yS%2FktbTY8M5e9g2yjGcGnc71xwniOEL9vDXtuqp2c96ixuNfamSBEX%2FNl0mW4QOFtmadFt3hFxwnvIZxKs%2FuGxanTfieOh1kP7tJuCNjjmyCu4d2sF9nm%2BosTMaYddKVIZGd7WQ5fCBKNx0J%2F5ctmqX%2BJdRvJPEDCBHLjZqLDtqL4Sob6%2B%2Fmn2dhHLYOn20Msttq%2FdC7Kp3Ckihg%2B%2FoTD07bTEBjqkAVPYRQhajAhxYaAaWmorVGCo6ilPYpQO08icZaEdoCC98m3veYvw1dY52j3mf8h52cJi6cnzU%2FtyYsK28SbwEHfYJHPchrJ7h9pKetWsZRgkVjR6n1R2p%2FeVskylLZMaCIhNFYj3%2BfD%2BECDONoM8HYeI%2Fdr96WKKAZFA8wiIFF%2BkAtyW2nyWy07%2BJrtYHiPj8tloxhfqn5NiNYBjkc14tDjfgBsV&X-Amz-Signature=3023ee7d72d4b83bba3ff966294e13a20482243666c83a2a64a17e85fa677a48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ2TWOP5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BG%2FC%2FC2vgzHI6lakLJaGLhHGC2SfKO83IPCDAAkjMqAIhAKU9N4Ql6nCeTLrvEnZbBnoku5SnXuifk9eEKcwvO5MbKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQKsM6pDiFCvcq3BIq3APVVLq%2Fd0oqVgzjMYmCWlCjpdFb%2BUBwHCY8dFRnDiAFHJP7V4BILKmJ3heXcpPHyFIoJht8g7oNYbuQeh5SY%2FomKe1F7mA7Yie3iT7%2BD%2FCHB92gKTrdrtjMsytSCCPef2B0yO%2FLAQQhIDBoxPIu6ZhAONnLd9Oj588l78hCoFn3N77DbkID4D0ZV3SMc0XuoJq%2BZjSpgA4iH7vhCy8Yso7zr8G4zP7ei2c%2FD9y4Np45tsO6ji%2BelPOIfK625FoQvfySD0ZAEBDk1aj6UlVM56e%2BUy5Y5eMaJ8kp51fZ%2BVD3lK0%2BJs%2B259gEM77FVzGMw2JGI2YjARJYLLcJBf%2F2tJyuC%2BEPAyus6BjUeG3mjEMxif3eLBi976BQjDrssTa7X7U7iK147RGM%2Fi%2FCaPtzecTq%2FK8ZpTMHx6cAI%2FHMD1yS%2FktbTY8M5e9g2yjGcGnc71xwniOEL9vDXtuqp2c96ixuNfamSBEX%2FNl0mW4QOFtmadFt3hFxwnvIZxKs%2FuGxanTfieOh1kP7tJuCNjjmyCu4d2sF9nm%2BosTMaYddKVIZGd7WQ5fCBKNx0J%2F5ctmqX%2BJdRvJPEDCBHLjZqLDtqL4Sob6%2B%2Fmn2dhHLYOn20Msttq%2FdC7Kp3Ckihg%2B%2FoTD07bTEBjqkAVPYRQhajAhxYaAaWmorVGCo6ilPYpQO08icZaEdoCC98m3veYvw1dY52j3mf8h52cJi6cnzU%2FtyYsK28SbwEHfYJHPchrJ7h9pKetWsZRgkVjR6n1R2p%2FeVskylLZMaCIhNFYj3%2BfD%2BECDONoM8HYeI%2Fdr96WKKAZFA8wiIFF%2BkAtyW2nyWy07%2BJrtYHiPj8tloxhfqn5NiNYBjkc14tDjfgBsV&X-Amz-Signature=ab87d0593a686328e8a107a4e8f052057b96ac52209652d80ff2d83e84cd2004&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ2TWOP5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BG%2FC%2FC2vgzHI6lakLJaGLhHGC2SfKO83IPCDAAkjMqAIhAKU9N4Ql6nCeTLrvEnZbBnoku5SnXuifk9eEKcwvO5MbKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQKsM6pDiFCvcq3BIq3APVVLq%2Fd0oqVgzjMYmCWlCjpdFb%2BUBwHCY8dFRnDiAFHJP7V4BILKmJ3heXcpPHyFIoJht8g7oNYbuQeh5SY%2FomKe1F7mA7Yie3iT7%2BD%2FCHB92gKTrdrtjMsytSCCPef2B0yO%2FLAQQhIDBoxPIu6ZhAONnLd9Oj588l78hCoFn3N77DbkID4D0ZV3SMc0XuoJq%2BZjSpgA4iH7vhCy8Yso7zr8G4zP7ei2c%2FD9y4Np45tsO6ji%2BelPOIfK625FoQvfySD0ZAEBDk1aj6UlVM56e%2BUy5Y5eMaJ8kp51fZ%2BVD3lK0%2BJs%2B259gEM77FVzGMw2JGI2YjARJYLLcJBf%2F2tJyuC%2BEPAyus6BjUeG3mjEMxif3eLBi976BQjDrssTa7X7U7iK147RGM%2Fi%2FCaPtzecTq%2FK8ZpTMHx6cAI%2FHMD1yS%2FktbTY8M5e9g2yjGcGnc71xwniOEL9vDXtuqp2c96ixuNfamSBEX%2FNl0mW4QOFtmadFt3hFxwnvIZxKs%2FuGxanTfieOh1kP7tJuCNjjmyCu4d2sF9nm%2BosTMaYddKVIZGd7WQ5fCBKNx0J%2F5ctmqX%2BJdRvJPEDCBHLjZqLDtqL4Sob6%2B%2Fmn2dhHLYOn20Msttq%2FdC7Kp3Ckihg%2B%2FoTD07bTEBjqkAVPYRQhajAhxYaAaWmorVGCo6ilPYpQO08icZaEdoCC98m3veYvw1dY52j3mf8h52cJi6cnzU%2FtyYsK28SbwEHfYJHPchrJ7h9pKetWsZRgkVjR6n1R2p%2FeVskylLZMaCIhNFYj3%2BfD%2BECDONoM8HYeI%2Fdr96WKKAZFA8wiIFF%2BkAtyW2nyWy07%2BJrtYHiPj8tloxhfqn5NiNYBjkc14tDjfgBsV&X-Amz-Signature=36406984eab6231fcd9b631c335ac49ac30361be0fa117d9d1139735c9de3dd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ2TWOP5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BG%2FC%2FC2vgzHI6lakLJaGLhHGC2SfKO83IPCDAAkjMqAIhAKU9N4Ql6nCeTLrvEnZbBnoku5SnXuifk9eEKcwvO5MbKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQKsM6pDiFCvcq3BIq3APVVLq%2Fd0oqVgzjMYmCWlCjpdFb%2BUBwHCY8dFRnDiAFHJP7V4BILKmJ3heXcpPHyFIoJht8g7oNYbuQeh5SY%2FomKe1F7mA7Yie3iT7%2BD%2FCHB92gKTrdrtjMsytSCCPef2B0yO%2FLAQQhIDBoxPIu6ZhAONnLd9Oj588l78hCoFn3N77DbkID4D0ZV3SMc0XuoJq%2BZjSpgA4iH7vhCy8Yso7zr8G4zP7ei2c%2FD9y4Np45tsO6ji%2BelPOIfK625FoQvfySD0ZAEBDk1aj6UlVM56e%2BUy5Y5eMaJ8kp51fZ%2BVD3lK0%2BJs%2B259gEM77FVzGMw2JGI2YjARJYLLcJBf%2F2tJyuC%2BEPAyus6BjUeG3mjEMxif3eLBi976BQjDrssTa7X7U7iK147RGM%2Fi%2FCaPtzecTq%2FK8ZpTMHx6cAI%2FHMD1yS%2FktbTY8M5e9g2yjGcGnc71xwniOEL9vDXtuqp2c96ixuNfamSBEX%2FNl0mW4QOFtmadFt3hFxwnvIZxKs%2FuGxanTfieOh1kP7tJuCNjjmyCu4d2sF9nm%2BosTMaYddKVIZGd7WQ5fCBKNx0J%2F5ctmqX%2BJdRvJPEDCBHLjZqLDtqL4Sob6%2B%2Fmn2dhHLYOn20Msttq%2FdC7Kp3Ckihg%2B%2FoTD07bTEBjqkAVPYRQhajAhxYaAaWmorVGCo6ilPYpQO08icZaEdoCC98m3veYvw1dY52j3mf8h52cJi6cnzU%2FtyYsK28SbwEHfYJHPchrJ7h9pKetWsZRgkVjR6n1R2p%2FeVskylLZMaCIhNFYj3%2BfD%2BECDONoM8HYeI%2Fdr96WKKAZFA8wiIFF%2BkAtyW2nyWy07%2BJrtYHiPj8tloxhfqn5NiNYBjkc14tDjfgBsV&X-Amz-Signature=2957eb26a31ae80b1bca936c49c11dfefb8628a84bdc171690b74756e3b8d75f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ2TWOP5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BG%2FC%2FC2vgzHI6lakLJaGLhHGC2SfKO83IPCDAAkjMqAIhAKU9N4Ql6nCeTLrvEnZbBnoku5SnXuifk9eEKcwvO5MbKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQKsM6pDiFCvcq3BIq3APVVLq%2Fd0oqVgzjMYmCWlCjpdFb%2BUBwHCY8dFRnDiAFHJP7V4BILKmJ3heXcpPHyFIoJht8g7oNYbuQeh5SY%2FomKe1F7mA7Yie3iT7%2BD%2FCHB92gKTrdrtjMsytSCCPef2B0yO%2FLAQQhIDBoxPIu6ZhAONnLd9Oj588l78hCoFn3N77DbkID4D0ZV3SMc0XuoJq%2BZjSpgA4iH7vhCy8Yso7zr8G4zP7ei2c%2FD9y4Np45tsO6ji%2BelPOIfK625FoQvfySD0ZAEBDk1aj6UlVM56e%2BUy5Y5eMaJ8kp51fZ%2BVD3lK0%2BJs%2B259gEM77FVzGMw2JGI2YjARJYLLcJBf%2F2tJyuC%2BEPAyus6BjUeG3mjEMxif3eLBi976BQjDrssTa7X7U7iK147RGM%2Fi%2FCaPtzecTq%2FK8ZpTMHx6cAI%2FHMD1yS%2FktbTY8M5e9g2yjGcGnc71xwniOEL9vDXtuqp2c96ixuNfamSBEX%2FNl0mW4QOFtmadFt3hFxwnvIZxKs%2FuGxanTfieOh1kP7tJuCNjjmyCu4d2sF9nm%2BosTMaYddKVIZGd7WQ5fCBKNx0J%2F5ctmqX%2BJdRvJPEDCBHLjZqLDtqL4Sob6%2B%2Fmn2dhHLYOn20Msttq%2FdC7Kp3Ckihg%2B%2FoTD07bTEBjqkAVPYRQhajAhxYaAaWmorVGCo6ilPYpQO08icZaEdoCC98m3veYvw1dY52j3mf8h52cJi6cnzU%2FtyYsK28SbwEHfYJHPchrJ7h9pKetWsZRgkVjR6n1R2p%2FeVskylLZMaCIhNFYj3%2BfD%2BECDONoM8HYeI%2Fdr96WKKAZFA8wiIFF%2BkAtyW2nyWy07%2BJrtYHiPj8tloxhfqn5NiNYBjkc14tDjfgBsV&X-Amz-Signature=b94797ca8a372a954c8a855e9ac095451bd36e23310090cfb4c3d11d84aeb088&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ2TWOP5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BG%2FC%2FC2vgzHI6lakLJaGLhHGC2SfKO83IPCDAAkjMqAIhAKU9N4Ql6nCeTLrvEnZbBnoku5SnXuifk9eEKcwvO5MbKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQKsM6pDiFCvcq3BIq3APVVLq%2Fd0oqVgzjMYmCWlCjpdFb%2BUBwHCY8dFRnDiAFHJP7V4BILKmJ3heXcpPHyFIoJht8g7oNYbuQeh5SY%2FomKe1F7mA7Yie3iT7%2BD%2FCHB92gKTrdrtjMsytSCCPef2B0yO%2FLAQQhIDBoxPIu6ZhAONnLd9Oj588l78hCoFn3N77DbkID4D0ZV3SMc0XuoJq%2BZjSpgA4iH7vhCy8Yso7zr8G4zP7ei2c%2FD9y4Np45tsO6ji%2BelPOIfK625FoQvfySD0ZAEBDk1aj6UlVM56e%2BUy5Y5eMaJ8kp51fZ%2BVD3lK0%2BJs%2B259gEM77FVzGMw2JGI2YjARJYLLcJBf%2F2tJyuC%2BEPAyus6BjUeG3mjEMxif3eLBi976BQjDrssTa7X7U7iK147RGM%2Fi%2FCaPtzecTq%2FK8ZpTMHx6cAI%2FHMD1yS%2FktbTY8M5e9g2yjGcGnc71xwniOEL9vDXtuqp2c96ixuNfamSBEX%2FNl0mW4QOFtmadFt3hFxwnvIZxKs%2FuGxanTfieOh1kP7tJuCNjjmyCu4d2sF9nm%2BosTMaYddKVIZGd7WQ5fCBKNx0J%2F5ctmqX%2BJdRvJPEDCBHLjZqLDtqL4Sob6%2B%2Fmn2dhHLYOn20Msttq%2FdC7Kp3Ckihg%2B%2FoTD07bTEBjqkAVPYRQhajAhxYaAaWmorVGCo6ilPYpQO08icZaEdoCC98m3veYvw1dY52j3mf8h52cJi6cnzU%2FtyYsK28SbwEHfYJHPchrJ7h9pKetWsZRgkVjR6n1R2p%2FeVskylLZMaCIhNFYj3%2BfD%2BECDONoM8HYeI%2Fdr96WKKAZFA8wiIFF%2BkAtyW2nyWy07%2BJrtYHiPj8tloxhfqn5NiNYBjkc14tDjfgBsV&X-Amz-Signature=53caf137bb6b53b739e310123717ffa87c7940a01cc34f6525dd48b24fa9ca4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
