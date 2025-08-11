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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FR7GKLC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPizjWQzh%2BdiLTYhS46IVmY21%2FeJF%2F%2Bx7VOMRSB3%2BzNwIgfpoIFgZaiXT67J3uU5yamIzry4T91XhjisOhBBQ2oTMqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqwyz17d%2FaqwZkMlSrcA946noPCJVE6XF71BjhhVOIM8AFdi%2FNMskeClgedZ0N8rk18JEhEnWo7aZDZG05U4HFCdahG9yY%2BNYAHr4mE0akQ%2FLv0TN6wySV530g7jxPvM5yu3hucRqnLKpinue4l42J9wx2ng%2BKIS6GfytrOPm4dlO%2FX4U%2FMZjy46if0fcj%2B7yq0TvOG3r%2FDHvlUSuTExXukP%2Bp%2BDbqahpKqor0h1FCA3uhazXMLjoBv2gyuXB7SV%2BmM9fGUv7NaOS80JToJZ0EzWxiIQZ062C4vWDveJujuWZ4KGDix8JRcs4fIV4aCyEJw%2Fnqy%2FDzUc71W88EHvs12L3Dzvv7YH6WdzZH0InY0fp%2Fb7lzmbcWbqCYmTfL6%2F1gjcSqB5PJbWbDspGlDO3pgkcImVOPhU2w2%2BwUeiiRhiZPiYNEJxPjyaKkUXDQfimN5NCZLReBkonAIVOPUoX6OrqHN5BKDRcCaYCVHfl37unhHgRoD%2FzxLDbJhvUtUyi1m20MJDcqGQjeAWn9heiYqF%2BgzNUl86XnADfAM%2FAm3HrMX%2B8xlMH%2BlC0YTdbCZ3q4WV8RJgSE53Tcs15jQMRiqzRMHZyElJHiFXIguYJSlFM7AYAonzhrWd%2B4KO5s4K50PyXrg3j4z9ONaMIz55sQGOqUBL9yrrBlgkjDx1kI7nkrxsGRiVQGen9fZ0DQwJMOJyEv6JnCFcD1ElpmO3zyYxFzQ7cu2wMEzJcV0lIkdCmRWR8WtJfzEwGsD56ewFjk5FQ6lnk2GbuIY63%2BOkCBO1gd8In5v%2F8m7yEuP0%2FgqeWtaj%2FFTkzBIhEvFaH8QJMjOaDEQ%2BGH8E6rLyAH9%2F7eCODOcritkPMLIw7r3pJ6JCbwy4Ot%2FU0vO&X-Amz-Signature=cfa3f204f5f5a8884cea1461c0c3063653a43561aa3f2f89cfbaf2d011cafdb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FR7GKLC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPizjWQzh%2BdiLTYhS46IVmY21%2FeJF%2F%2Bx7VOMRSB3%2BzNwIgfpoIFgZaiXT67J3uU5yamIzry4T91XhjisOhBBQ2oTMqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqwyz17d%2FaqwZkMlSrcA946noPCJVE6XF71BjhhVOIM8AFdi%2FNMskeClgedZ0N8rk18JEhEnWo7aZDZG05U4HFCdahG9yY%2BNYAHr4mE0akQ%2FLv0TN6wySV530g7jxPvM5yu3hucRqnLKpinue4l42J9wx2ng%2BKIS6GfytrOPm4dlO%2FX4U%2FMZjy46if0fcj%2B7yq0TvOG3r%2FDHvlUSuTExXukP%2Bp%2BDbqahpKqor0h1FCA3uhazXMLjoBv2gyuXB7SV%2BmM9fGUv7NaOS80JToJZ0EzWxiIQZ062C4vWDveJujuWZ4KGDix8JRcs4fIV4aCyEJw%2Fnqy%2FDzUc71W88EHvs12L3Dzvv7YH6WdzZH0InY0fp%2Fb7lzmbcWbqCYmTfL6%2F1gjcSqB5PJbWbDspGlDO3pgkcImVOPhU2w2%2BwUeiiRhiZPiYNEJxPjyaKkUXDQfimN5NCZLReBkonAIVOPUoX6OrqHN5BKDRcCaYCVHfl37unhHgRoD%2FzxLDbJhvUtUyi1m20MJDcqGQjeAWn9heiYqF%2BgzNUl86XnADfAM%2FAm3HrMX%2B8xlMH%2BlC0YTdbCZ3q4WV8RJgSE53Tcs15jQMRiqzRMHZyElJHiFXIguYJSlFM7AYAonzhrWd%2B4KO5s4K50PyXrg3j4z9ONaMIz55sQGOqUBL9yrrBlgkjDx1kI7nkrxsGRiVQGen9fZ0DQwJMOJyEv6JnCFcD1ElpmO3zyYxFzQ7cu2wMEzJcV0lIkdCmRWR8WtJfzEwGsD56ewFjk5FQ6lnk2GbuIY63%2BOkCBO1gd8In5v%2F8m7yEuP0%2FgqeWtaj%2FFTkzBIhEvFaH8QJMjOaDEQ%2BGH8E6rLyAH9%2F7eCODOcritkPMLIw7r3pJ6JCbwy4Ot%2FU0vO&X-Amz-Signature=9058f945c2f2bd775425b5cb620ba0d57520816f202c114cdb781673ced74e8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FR7GKLC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPizjWQzh%2BdiLTYhS46IVmY21%2FeJF%2F%2Bx7VOMRSB3%2BzNwIgfpoIFgZaiXT67J3uU5yamIzry4T91XhjisOhBBQ2oTMqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqwyz17d%2FaqwZkMlSrcA946noPCJVE6XF71BjhhVOIM8AFdi%2FNMskeClgedZ0N8rk18JEhEnWo7aZDZG05U4HFCdahG9yY%2BNYAHr4mE0akQ%2FLv0TN6wySV530g7jxPvM5yu3hucRqnLKpinue4l42J9wx2ng%2BKIS6GfytrOPm4dlO%2FX4U%2FMZjy46if0fcj%2B7yq0TvOG3r%2FDHvlUSuTExXukP%2Bp%2BDbqahpKqor0h1FCA3uhazXMLjoBv2gyuXB7SV%2BmM9fGUv7NaOS80JToJZ0EzWxiIQZ062C4vWDveJujuWZ4KGDix8JRcs4fIV4aCyEJw%2Fnqy%2FDzUc71W88EHvs12L3Dzvv7YH6WdzZH0InY0fp%2Fb7lzmbcWbqCYmTfL6%2F1gjcSqB5PJbWbDspGlDO3pgkcImVOPhU2w2%2BwUeiiRhiZPiYNEJxPjyaKkUXDQfimN5NCZLReBkonAIVOPUoX6OrqHN5BKDRcCaYCVHfl37unhHgRoD%2FzxLDbJhvUtUyi1m20MJDcqGQjeAWn9heiYqF%2BgzNUl86XnADfAM%2FAm3HrMX%2B8xlMH%2BlC0YTdbCZ3q4WV8RJgSE53Tcs15jQMRiqzRMHZyElJHiFXIguYJSlFM7AYAonzhrWd%2B4KO5s4K50PyXrg3j4z9ONaMIz55sQGOqUBL9yrrBlgkjDx1kI7nkrxsGRiVQGen9fZ0DQwJMOJyEv6JnCFcD1ElpmO3zyYxFzQ7cu2wMEzJcV0lIkdCmRWR8WtJfzEwGsD56ewFjk5FQ6lnk2GbuIY63%2BOkCBO1gd8In5v%2F8m7yEuP0%2FgqeWtaj%2FFTkzBIhEvFaH8QJMjOaDEQ%2BGH8E6rLyAH9%2F7eCODOcritkPMLIw7r3pJ6JCbwy4Ot%2FU0vO&X-Amz-Signature=2e64a28e12994f5448dbd91bd0bd8b6f387a32211759d7db9d6a82db73cf1344&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FR7GKLC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPizjWQzh%2BdiLTYhS46IVmY21%2FeJF%2F%2Bx7VOMRSB3%2BzNwIgfpoIFgZaiXT67J3uU5yamIzry4T91XhjisOhBBQ2oTMqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqwyz17d%2FaqwZkMlSrcA946noPCJVE6XF71BjhhVOIM8AFdi%2FNMskeClgedZ0N8rk18JEhEnWo7aZDZG05U4HFCdahG9yY%2BNYAHr4mE0akQ%2FLv0TN6wySV530g7jxPvM5yu3hucRqnLKpinue4l42J9wx2ng%2BKIS6GfytrOPm4dlO%2FX4U%2FMZjy46if0fcj%2B7yq0TvOG3r%2FDHvlUSuTExXukP%2Bp%2BDbqahpKqor0h1FCA3uhazXMLjoBv2gyuXB7SV%2BmM9fGUv7NaOS80JToJZ0EzWxiIQZ062C4vWDveJujuWZ4KGDix8JRcs4fIV4aCyEJw%2Fnqy%2FDzUc71W88EHvs12L3Dzvv7YH6WdzZH0InY0fp%2Fb7lzmbcWbqCYmTfL6%2F1gjcSqB5PJbWbDspGlDO3pgkcImVOPhU2w2%2BwUeiiRhiZPiYNEJxPjyaKkUXDQfimN5NCZLReBkonAIVOPUoX6OrqHN5BKDRcCaYCVHfl37unhHgRoD%2FzxLDbJhvUtUyi1m20MJDcqGQjeAWn9heiYqF%2BgzNUl86XnADfAM%2FAm3HrMX%2B8xlMH%2BlC0YTdbCZ3q4WV8RJgSE53Tcs15jQMRiqzRMHZyElJHiFXIguYJSlFM7AYAonzhrWd%2B4KO5s4K50PyXrg3j4z9ONaMIz55sQGOqUBL9yrrBlgkjDx1kI7nkrxsGRiVQGen9fZ0DQwJMOJyEv6JnCFcD1ElpmO3zyYxFzQ7cu2wMEzJcV0lIkdCmRWR8WtJfzEwGsD56ewFjk5FQ6lnk2GbuIY63%2BOkCBO1gd8In5v%2F8m7yEuP0%2FgqeWtaj%2FFTkzBIhEvFaH8QJMjOaDEQ%2BGH8E6rLyAH9%2F7eCODOcritkPMLIw7r3pJ6JCbwy4Ot%2FU0vO&X-Amz-Signature=2881d4b09d1e602a8a2ff4494d80d74da81977d974bcb7cf1e2ab24e2685cb29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FR7GKLC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPizjWQzh%2BdiLTYhS46IVmY21%2FeJF%2F%2Bx7VOMRSB3%2BzNwIgfpoIFgZaiXT67J3uU5yamIzry4T91XhjisOhBBQ2oTMqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqwyz17d%2FaqwZkMlSrcA946noPCJVE6XF71BjhhVOIM8AFdi%2FNMskeClgedZ0N8rk18JEhEnWo7aZDZG05U4HFCdahG9yY%2BNYAHr4mE0akQ%2FLv0TN6wySV530g7jxPvM5yu3hucRqnLKpinue4l42J9wx2ng%2BKIS6GfytrOPm4dlO%2FX4U%2FMZjy46if0fcj%2B7yq0TvOG3r%2FDHvlUSuTExXukP%2Bp%2BDbqahpKqor0h1FCA3uhazXMLjoBv2gyuXB7SV%2BmM9fGUv7NaOS80JToJZ0EzWxiIQZ062C4vWDveJujuWZ4KGDix8JRcs4fIV4aCyEJw%2Fnqy%2FDzUc71W88EHvs12L3Dzvv7YH6WdzZH0InY0fp%2Fb7lzmbcWbqCYmTfL6%2F1gjcSqB5PJbWbDspGlDO3pgkcImVOPhU2w2%2BwUeiiRhiZPiYNEJxPjyaKkUXDQfimN5NCZLReBkonAIVOPUoX6OrqHN5BKDRcCaYCVHfl37unhHgRoD%2FzxLDbJhvUtUyi1m20MJDcqGQjeAWn9heiYqF%2BgzNUl86XnADfAM%2FAm3HrMX%2B8xlMH%2BlC0YTdbCZ3q4WV8RJgSE53Tcs15jQMRiqzRMHZyElJHiFXIguYJSlFM7AYAonzhrWd%2B4KO5s4K50PyXrg3j4z9ONaMIz55sQGOqUBL9yrrBlgkjDx1kI7nkrxsGRiVQGen9fZ0DQwJMOJyEv6JnCFcD1ElpmO3zyYxFzQ7cu2wMEzJcV0lIkdCmRWR8WtJfzEwGsD56ewFjk5FQ6lnk2GbuIY63%2BOkCBO1gd8In5v%2F8m7yEuP0%2FgqeWtaj%2FFTkzBIhEvFaH8QJMjOaDEQ%2BGH8E6rLyAH9%2F7eCODOcritkPMLIw7r3pJ6JCbwy4Ot%2FU0vO&X-Amz-Signature=3043a51e4059889751c0a88380e6b2558f229bc3ad778038fa84857c3c125932&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FR7GKLC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPizjWQzh%2BdiLTYhS46IVmY21%2FeJF%2F%2Bx7VOMRSB3%2BzNwIgfpoIFgZaiXT67J3uU5yamIzry4T91XhjisOhBBQ2oTMqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqwyz17d%2FaqwZkMlSrcA946noPCJVE6XF71BjhhVOIM8AFdi%2FNMskeClgedZ0N8rk18JEhEnWo7aZDZG05U4HFCdahG9yY%2BNYAHr4mE0akQ%2FLv0TN6wySV530g7jxPvM5yu3hucRqnLKpinue4l42J9wx2ng%2BKIS6GfytrOPm4dlO%2FX4U%2FMZjy46if0fcj%2B7yq0TvOG3r%2FDHvlUSuTExXukP%2Bp%2BDbqahpKqor0h1FCA3uhazXMLjoBv2gyuXB7SV%2BmM9fGUv7NaOS80JToJZ0EzWxiIQZ062C4vWDveJujuWZ4KGDix8JRcs4fIV4aCyEJw%2Fnqy%2FDzUc71W88EHvs12L3Dzvv7YH6WdzZH0InY0fp%2Fb7lzmbcWbqCYmTfL6%2F1gjcSqB5PJbWbDspGlDO3pgkcImVOPhU2w2%2BwUeiiRhiZPiYNEJxPjyaKkUXDQfimN5NCZLReBkonAIVOPUoX6OrqHN5BKDRcCaYCVHfl37unhHgRoD%2FzxLDbJhvUtUyi1m20MJDcqGQjeAWn9heiYqF%2BgzNUl86XnADfAM%2FAm3HrMX%2B8xlMH%2BlC0YTdbCZ3q4WV8RJgSE53Tcs15jQMRiqzRMHZyElJHiFXIguYJSlFM7AYAonzhrWd%2B4KO5s4K50PyXrg3j4z9ONaMIz55sQGOqUBL9yrrBlgkjDx1kI7nkrxsGRiVQGen9fZ0DQwJMOJyEv6JnCFcD1ElpmO3zyYxFzQ7cu2wMEzJcV0lIkdCmRWR8WtJfzEwGsD56ewFjk5FQ6lnk2GbuIY63%2BOkCBO1gd8In5v%2F8m7yEuP0%2FgqeWtaj%2FFTkzBIhEvFaH8QJMjOaDEQ%2BGH8E6rLyAH9%2F7eCODOcritkPMLIw7r3pJ6JCbwy4Ot%2FU0vO&X-Amz-Signature=ea92b25cf38129f7396c9fedfd45b2775893e5a40a65dfb3e6486bf30172e0b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FR7GKLC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPizjWQzh%2BdiLTYhS46IVmY21%2FeJF%2F%2Bx7VOMRSB3%2BzNwIgfpoIFgZaiXT67J3uU5yamIzry4T91XhjisOhBBQ2oTMqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqwyz17d%2FaqwZkMlSrcA946noPCJVE6XF71BjhhVOIM8AFdi%2FNMskeClgedZ0N8rk18JEhEnWo7aZDZG05U4HFCdahG9yY%2BNYAHr4mE0akQ%2FLv0TN6wySV530g7jxPvM5yu3hucRqnLKpinue4l42J9wx2ng%2BKIS6GfytrOPm4dlO%2FX4U%2FMZjy46if0fcj%2B7yq0TvOG3r%2FDHvlUSuTExXukP%2Bp%2BDbqahpKqor0h1FCA3uhazXMLjoBv2gyuXB7SV%2BmM9fGUv7NaOS80JToJZ0EzWxiIQZ062C4vWDveJujuWZ4KGDix8JRcs4fIV4aCyEJw%2Fnqy%2FDzUc71W88EHvs12L3Dzvv7YH6WdzZH0InY0fp%2Fb7lzmbcWbqCYmTfL6%2F1gjcSqB5PJbWbDspGlDO3pgkcImVOPhU2w2%2BwUeiiRhiZPiYNEJxPjyaKkUXDQfimN5NCZLReBkonAIVOPUoX6OrqHN5BKDRcCaYCVHfl37unhHgRoD%2FzxLDbJhvUtUyi1m20MJDcqGQjeAWn9heiYqF%2BgzNUl86XnADfAM%2FAm3HrMX%2B8xlMH%2BlC0YTdbCZ3q4WV8RJgSE53Tcs15jQMRiqzRMHZyElJHiFXIguYJSlFM7AYAonzhrWd%2B4KO5s4K50PyXrg3j4z9ONaMIz55sQGOqUBL9yrrBlgkjDx1kI7nkrxsGRiVQGen9fZ0DQwJMOJyEv6JnCFcD1ElpmO3zyYxFzQ7cu2wMEzJcV0lIkdCmRWR8WtJfzEwGsD56ewFjk5FQ6lnk2GbuIY63%2BOkCBO1gd8In5v%2F8m7yEuP0%2FgqeWtaj%2FFTkzBIhEvFaH8QJMjOaDEQ%2BGH8E6rLyAH9%2F7eCODOcritkPMLIw7r3pJ6JCbwy4Ot%2FU0vO&X-Amz-Signature=42a87bb08de5bee59bcf9cb0641619b230909e6a6885a0af0d794a28f127b667&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FR7GKLC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPizjWQzh%2BdiLTYhS46IVmY21%2FeJF%2F%2Bx7VOMRSB3%2BzNwIgfpoIFgZaiXT67J3uU5yamIzry4T91XhjisOhBBQ2oTMqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqwyz17d%2FaqwZkMlSrcA946noPCJVE6XF71BjhhVOIM8AFdi%2FNMskeClgedZ0N8rk18JEhEnWo7aZDZG05U4HFCdahG9yY%2BNYAHr4mE0akQ%2FLv0TN6wySV530g7jxPvM5yu3hucRqnLKpinue4l42J9wx2ng%2BKIS6GfytrOPm4dlO%2FX4U%2FMZjy46if0fcj%2B7yq0TvOG3r%2FDHvlUSuTExXukP%2Bp%2BDbqahpKqor0h1FCA3uhazXMLjoBv2gyuXB7SV%2BmM9fGUv7NaOS80JToJZ0EzWxiIQZ062C4vWDveJujuWZ4KGDix8JRcs4fIV4aCyEJw%2Fnqy%2FDzUc71W88EHvs12L3Dzvv7YH6WdzZH0InY0fp%2Fb7lzmbcWbqCYmTfL6%2F1gjcSqB5PJbWbDspGlDO3pgkcImVOPhU2w2%2BwUeiiRhiZPiYNEJxPjyaKkUXDQfimN5NCZLReBkonAIVOPUoX6OrqHN5BKDRcCaYCVHfl37unhHgRoD%2FzxLDbJhvUtUyi1m20MJDcqGQjeAWn9heiYqF%2BgzNUl86XnADfAM%2FAm3HrMX%2B8xlMH%2BlC0YTdbCZ3q4WV8RJgSE53Tcs15jQMRiqzRMHZyElJHiFXIguYJSlFM7AYAonzhrWd%2B4KO5s4K50PyXrg3j4z9ONaMIz55sQGOqUBL9yrrBlgkjDx1kI7nkrxsGRiVQGen9fZ0DQwJMOJyEv6JnCFcD1ElpmO3zyYxFzQ7cu2wMEzJcV0lIkdCmRWR8WtJfzEwGsD56ewFjk5FQ6lnk2GbuIY63%2BOkCBO1gd8In5v%2F8m7yEuP0%2FgqeWtaj%2FFTkzBIhEvFaH8QJMjOaDEQ%2BGH8E6rLyAH9%2F7eCODOcritkPMLIw7r3pJ6JCbwy4Ot%2FU0vO&X-Amz-Signature=6c11da34026033168b89ffacc9f14337aa5c042db86e03c079b1616c91912483&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FR7GKLC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPizjWQzh%2BdiLTYhS46IVmY21%2FeJF%2F%2Bx7VOMRSB3%2BzNwIgfpoIFgZaiXT67J3uU5yamIzry4T91XhjisOhBBQ2oTMqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqwyz17d%2FaqwZkMlSrcA946noPCJVE6XF71BjhhVOIM8AFdi%2FNMskeClgedZ0N8rk18JEhEnWo7aZDZG05U4HFCdahG9yY%2BNYAHr4mE0akQ%2FLv0TN6wySV530g7jxPvM5yu3hucRqnLKpinue4l42J9wx2ng%2BKIS6GfytrOPm4dlO%2FX4U%2FMZjy46if0fcj%2B7yq0TvOG3r%2FDHvlUSuTExXukP%2Bp%2BDbqahpKqor0h1FCA3uhazXMLjoBv2gyuXB7SV%2BmM9fGUv7NaOS80JToJZ0EzWxiIQZ062C4vWDveJujuWZ4KGDix8JRcs4fIV4aCyEJw%2Fnqy%2FDzUc71W88EHvs12L3Dzvv7YH6WdzZH0InY0fp%2Fb7lzmbcWbqCYmTfL6%2F1gjcSqB5PJbWbDspGlDO3pgkcImVOPhU2w2%2BwUeiiRhiZPiYNEJxPjyaKkUXDQfimN5NCZLReBkonAIVOPUoX6OrqHN5BKDRcCaYCVHfl37unhHgRoD%2FzxLDbJhvUtUyi1m20MJDcqGQjeAWn9heiYqF%2BgzNUl86XnADfAM%2FAm3HrMX%2B8xlMH%2BlC0YTdbCZ3q4WV8RJgSE53Tcs15jQMRiqzRMHZyElJHiFXIguYJSlFM7AYAonzhrWd%2B4KO5s4K50PyXrg3j4z9ONaMIz55sQGOqUBL9yrrBlgkjDx1kI7nkrxsGRiVQGen9fZ0DQwJMOJyEv6JnCFcD1ElpmO3zyYxFzQ7cu2wMEzJcV0lIkdCmRWR8WtJfzEwGsD56ewFjk5FQ6lnk2GbuIY63%2BOkCBO1gd8In5v%2F8m7yEuP0%2FgqeWtaj%2FFTkzBIhEvFaH8QJMjOaDEQ%2BGH8E6rLyAH9%2F7eCODOcritkPMLIw7r3pJ6JCbwy4Ot%2FU0vO&X-Amz-Signature=bcf1c4f5eff7eea67b795638fc3fe6ec55ec45feddcd90ec99328e919bcfac5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FR7GKLC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPizjWQzh%2BdiLTYhS46IVmY21%2FeJF%2F%2Bx7VOMRSB3%2BzNwIgfpoIFgZaiXT67J3uU5yamIzry4T91XhjisOhBBQ2oTMqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqwyz17d%2FaqwZkMlSrcA946noPCJVE6XF71BjhhVOIM8AFdi%2FNMskeClgedZ0N8rk18JEhEnWo7aZDZG05U4HFCdahG9yY%2BNYAHr4mE0akQ%2FLv0TN6wySV530g7jxPvM5yu3hucRqnLKpinue4l42J9wx2ng%2BKIS6GfytrOPm4dlO%2FX4U%2FMZjy46if0fcj%2B7yq0TvOG3r%2FDHvlUSuTExXukP%2Bp%2BDbqahpKqor0h1FCA3uhazXMLjoBv2gyuXB7SV%2BmM9fGUv7NaOS80JToJZ0EzWxiIQZ062C4vWDveJujuWZ4KGDix8JRcs4fIV4aCyEJw%2Fnqy%2FDzUc71W88EHvs12L3Dzvv7YH6WdzZH0InY0fp%2Fb7lzmbcWbqCYmTfL6%2F1gjcSqB5PJbWbDspGlDO3pgkcImVOPhU2w2%2BwUeiiRhiZPiYNEJxPjyaKkUXDQfimN5NCZLReBkonAIVOPUoX6OrqHN5BKDRcCaYCVHfl37unhHgRoD%2FzxLDbJhvUtUyi1m20MJDcqGQjeAWn9heiYqF%2BgzNUl86XnADfAM%2FAm3HrMX%2B8xlMH%2BlC0YTdbCZ3q4WV8RJgSE53Tcs15jQMRiqzRMHZyElJHiFXIguYJSlFM7AYAonzhrWd%2B4KO5s4K50PyXrg3j4z9ONaMIz55sQGOqUBL9yrrBlgkjDx1kI7nkrxsGRiVQGen9fZ0DQwJMOJyEv6JnCFcD1ElpmO3zyYxFzQ7cu2wMEzJcV0lIkdCmRWR8WtJfzEwGsD56ewFjk5FQ6lnk2GbuIY63%2BOkCBO1gd8In5v%2F8m7yEuP0%2FgqeWtaj%2FFTkzBIhEvFaH8QJMjOaDEQ%2BGH8E6rLyAH9%2F7eCODOcritkPMLIw7r3pJ6JCbwy4Ot%2FU0vO&X-Amz-Signature=6d8896c7a9705b59dc637bb3d81b56492aa43518257f97bbae4847d7a4454bba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FR7GKLC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPizjWQzh%2BdiLTYhS46IVmY21%2FeJF%2F%2Bx7VOMRSB3%2BzNwIgfpoIFgZaiXT67J3uU5yamIzry4T91XhjisOhBBQ2oTMqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqwyz17d%2FaqwZkMlSrcA946noPCJVE6XF71BjhhVOIM8AFdi%2FNMskeClgedZ0N8rk18JEhEnWo7aZDZG05U4HFCdahG9yY%2BNYAHr4mE0akQ%2FLv0TN6wySV530g7jxPvM5yu3hucRqnLKpinue4l42J9wx2ng%2BKIS6GfytrOPm4dlO%2FX4U%2FMZjy46if0fcj%2B7yq0TvOG3r%2FDHvlUSuTExXukP%2Bp%2BDbqahpKqor0h1FCA3uhazXMLjoBv2gyuXB7SV%2BmM9fGUv7NaOS80JToJZ0EzWxiIQZ062C4vWDveJujuWZ4KGDix8JRcs4fIV4aCyEJw%2Fnqy%2FDzUc71W88EHvs12L3Dzvv7YH6WdzZH0InY0fp%2Fb7lzmbcWbqCYmTfL6%2F1gjcSqB5PJbWbDspGlDO3pgkcImVOPhU2w2%2BwUeiiRhiZPiYNEJxPjyaKkUXDQfimN5NCZLReBkonAIVOPUoX6OrqHN5BKDRcCaYCVHfl37unhHgRoD%2FzxLDbJhvUtUyi1m20MJDcqGQjeAWn9heiYqF%2BgzNUl86XnADfAM%2FAm3HrMX%2B8xlMH%2BlC0YTdbCZ3q4WV8RJgSE53Tcs15jQMRiqzRMHZyElJHiFXIguYJSlFM7AYAonzhrWd%2B4KO5s4K50PyXrg3j4z9ONaMIz55sQGOqUBL9yrrBlgkjDx1kI7nkrxsGRiVQGen9fZ0DQwJMOJyEv6JnCFcD1ElpmO3zyYxFzQ7cu2wMEzJcV0lIkdCmRWR8WtJfzEwGsD56ewFjk5FQ6lnk2GbuIY63%2BOkCBO1gd8In5v%2F8m7yEuP0%2FgqeWtaj%2FFTkzBIhEvFaH8QJMjOaDEQ%2BGH8E6rLyAH9%2F7eCODOcritkPMLIw7r3pJ6JCbwy4Ot%2FU0vO&X-Amz-Signature=3ae28475c34317036ba74c584fe8338e68d470280a05604af893da70d1a36acb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FR7GKLC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPizjWQzh%2BdiLTYhS46IVmY21%2FeJF%2F%2Bx7VOMRSB3%2BzNwIgfpoIFgZaiXT67J3uU5yamIzry4T91XhjisOhBBQ2oTMqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqwyz17d%2FaqwZkMlSrcA946noPCJVE6XF71BjhhVOIM8AFdi%2FNMskeClgedZ0N8rk18JEhEnWo7aZDZG05U4HFCdahG9yY%2BNYAHr4mE0akQ%2FLv0TN6wySV530g7jxPvM5yu3hucRqnLKpinue4l42J9wx2ng%2BKIS6GfytrOPm4dlO%2FX4U%2FMZjy46if0fcj%2B7yq0TvOG3r%2FDHvlUSuTExXukP%2Bp%2BDbqahpKqor0h1FCA3uhazXMLjoBv2gyuXB7SV%2BmM9fGUv7NaOS80JToJZ0EzWxiIQZ062C4vWDveJujuWZ4KGDix8JRcs4fIV4aCyEJw%2Fnqy%2FDzUc71W88EHvs12L3Dzvv7YH6WdzZH0InY0fp%2Fb7lzmbcWbqCYmTfL6%2F1gjcSqB5PJbWbDspGlDO3pgkcImVOPhU2w2%2BwUeiiRhiZPiYNEJxPjyaKkUXDQfimN5NCZLReBkonAIVOPUoX6OrqHN5BKDRcCaYCVHfl37unhHgRoD%2FzxLDbJhvUtUyi1m20MJDcqGQjeAWn9heiYqF%2BgzNUl86XnADfAM%2FAm3HrMX%2B8xlMH%2BlC0YTdbCZ3q4WV8RJgSE53Tcs15jQMRiqzRMHZyElJHiFXIguYJSlFM7AYAonzhrWd%2B4KO5s4K50PyXrg3j4z9ONaMIz55sQGOqUBL9yrrBlgkjDx1kI7nkrxsGRiVQGen9fZ0DQwJMOJyEv6JnCFcD1ElpmO3zyYxFzQ7cu2wMEzJcV0lIkdCmRWR8WtJfzEwGsD56ewFjk5FQ6lnk2GbuIY63%2BOkCBO1gd8In5v%2F8m7yEuP0%2FgqeWtaj%2FFTkzBIhEvFaH8QJMjOaDEQ%2BGH8E6rLyAH9%2F7eCODOcritkPMLIw7r3pJ6JCbwy4Ot%2FU0vO&X-Amz-Signature=d6ba8bcfe9ed5fc15ce13ed74a9e702929ac8bd6f5ea686898072c6ae3aff53f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FR7GKLC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPizjWQzh%2BdiLTYhS46IVmY21%2FeJF%2F%2Bx7VOMRSB3%2BzNwIgfpoIFgZaiXT67J3uU5yamIzry4T91XhjisOhBBQ2oTMqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqwyz17d%2FaqwZkMlSrcA946noPCJVE6XF71BjhhVOIM8AFdi%2FNMskeClgedZ0N8rk18JEhEnWo7aZDZG05U4HFCdahG9yY%2BNYAHr4mE0akQ%2FLv0TN6wySV530g7jxPvM5yu3hucRqnLKpinue4l42J9wx2ng%2BKIS6GfytrOPm4dlO%2FX4U%2FMZjy46if0fcj%2B7yq0TvOG3r%2FDHvlUSuTExXukP%2Bp%2BDbqahpKqor0h1FCA3uhazXMLjoBv2gyuXB7SV%2BmM9fGUv7NaOS80JToJZ0EzWxiIQZ062C4vWDveJujuWZ4KGDix8JRcs4fIV4aCyEJw%2Fnqy%2FDzUc71W88EHvs12L3Dzvv7YH6WdzZH0InY0fp%2Fb7lzmbcWbqCYmTfL6%2F1gjcSqB5PJbWbDspGlDO3pgkcImVOPhU2w2%2BwUeiiRhiZPiYNEJxPjyaKkUXDQfimN5NCZLReBkonAIVOPUoX6OrqHN5BKDRcCaYCVHfl37unhHgRoD%2FzxLDbJhvUtUyi1m20MJDcqGQjeAWn9heiYqF%2BgzNUl86XnADfAM%2FAm3HrMX%2B8xlMH%2BlC0YTdbCZ3q4WV8RJgSE53Tcs15jQMRiqzRMHZyElJHiFXIguYJSlFM7AYAonzhrWd%2B4KO5s4K50PyXrg3j4z9ONaMIz55sQGOqUBL9yrrBlgkjDx1kI7nkrxsGRiVQGen9fZ0DQwJMOJyEv6JnCFcD1ElpmO3zyYxFzQ7cu2wMEzJcV0lIkdCmRWR8WtJfzEwGsD56ewFjk5FQ6lnk2GbuIY63%2BOkCBO1gd8In5v%2F8m7yEuP0%2FgqeWtaj%2FFTkzBIhEvFaH8QJMjOaDEQ%2BGH8E6rLyAH9%2F7eCODOcritkPMLIw7r3pJ6JCbwy4Ot%2FU0vO&X-Amz-Signature=512d6bf300f7fe6c70e9eae03f0593259c3a5656e296518a29f2175d15892f40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FR7GKLC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPizjWQzh%2BdiLTYhS46IVmY21%2FeJF%2F%2Bx7VOMRSB3%2BzNwIgfpoIFgZaiXT67J3uU5yamIzry4T91XhjisOhBBQ2oTMqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqwyz17d%2FaqwZkMlSrcA946noPCJVE6XF71BjhhVOIM8AFdi%2FNMskeClgedZ0N8rk18JEhEnWo7aZDZG05U4HFCdahG9yY%2BNYAHr4mE0akQ%2FLv0TN6wySV530g7jxPvM5yu3hucRqnLKpinue4l42J9wx2ng%2BKIS6GfytrOPm4dlO%2FX4U%2FMZjy46if0fcj%2B7yq0TvOG3r%2FDHvlUSuTExXukP%2Bp%2BDbqahpKqor0h1FCA3uhazXMLjoBv2gyuXB7SV%2BmM9fGUv7NaOS80JToJZ0EzWxiIQZ062C4vWDveJujuWZ4KGDix8JRcs4fIV4aCyEJw%2Fnqy%2FDzUc71W88EHvs12L3Dzvv7YH6WdzZH0InY0fp%2Fb7lzmbcWbqCYmTfL6%2F1gjcSqB5PJbWbDspGlDO3pgkcImVOPhU2w2%2BwUeiiRhiZPiYNEJxPjyaKkUXDQfimN5NCZLReBkonAIVOPUoX6OrqHN5BKDRcCaYCVHfl37unhHgRoD%2FzxLDbJhvUtUyi1m20MJDcqGQjeAWn9heiYqF%2BgzNUl86XnADfAM%2FAm3HrMX%2B8xlMH%2BlC0YTdbCZ3q4WV8RJgSE53Tcs15jQMRiqzRMHZyElJHiFXIguYJSlFM7AYAonzhrWd%2B4KO5s4K50PyXrg3j4z9ONaMIz55sQGOqUBL9yrrBlgkjDx1kI7nkrxsGRiVQGen9fZ0DQwJMOJyEv6JnCFcD1ElpmO3zyYxFzQ7cu2wMEzJcV0lIkdCmRWR8WtJfzEwGsD56ewFjk5FQ6lnk2GbuIY63%2BOkCBO1gd8In5v%2F8m7yEuP0%2FgqeWtaj%2FFTkzBIhEvFaH8QJMjOaDEQ%2BGH8E6rLyAH9%2F7eCODOcritkPMLIw7r3pJ6JCbwy4Ot%2FU0vO&X-Amz-Signature=8d24915769d057008ce9938a91ff5956354498d2535d591f5ee4a3dc814f3346&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
