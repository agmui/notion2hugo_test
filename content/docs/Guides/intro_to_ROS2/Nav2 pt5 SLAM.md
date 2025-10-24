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
  <summary>{{< markdownify >}}What is slam?{{< /markdownify >}}</summary>
  
TODO:

ROS has a package called `slam_toolbox` where …

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633GZNDJN%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBjzlm4K%2BVbe9xPjwMnPgBzsve7JZjZLBa7GgjIMD%2FLAiEA%2BsHFWUg%2F%2B%2B7QeHT23uhovdFUWGDp9Eol2tq0Xy7WGjsq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDJKwilbFRrOrS32mgCrcA%2F4qyOlqhjvpanURfgy6FwqhwU8Z4xgzSpS5gNFru%2FFqFQ1JUMRENQXt5bX%2B6UemiWwLBERR8enlPuTrrP4mA1XNiZyi7MojbPC66wkFKXtBLGGX1FxY8m%2BfoxPtrZUl3ngh1FMSbQhiOi5hdVzDs%2BE%2B0%2FlQ09cMM74pduo3LT76TKedS%2Bg7W1LGFEt6%2F%2FeLx8kITTABru46GDdMnXMszuoOkyXJJFivIut87BZL4H6zjkEIajeo%2BoZ3E%2Bu1BqSHqyG3CBz3JKoWeWhsjzXVLhOoG6Tq7biEWA1ZwRrZ7H1L1sE2ayItTzC25xVS8XWgcba%2BEyxzDmSa%2FdIH67%2B%2FGrWclgHt7MadgG4jyUKGeU5LYJxwLNolppEkuc4EoOPlJ%2BP%2Bj5TXgRvpwa66QNzYsf0UISSgczuOh7rVR%2F7MlvSMApzL%2BlncUjzlsB4VCl%2Bv4TE2%2FLNevwLMkFVYeAboz8SlWazsBokkLu09x53cv74SvsW%2BVazJ1Kk6VTL8JDr9gZKBxP1fPxe92RNAXP9Tdvc104zccFxdab46mPUWsGt0bXbx997e9RJ7MvZEvpflog%2BP37nLRRxgdlVutcQrd2gfgMhYqhpNq8Oo5fTVz9G7LBw%2FttFf1pn%2Bol95MMWf68cGOqUBRxMnjOm1SHT%2F0N0%2FQPVmCbMv1fhN7WkcHDldxuVv%2FwjuSH3yq4FvxQJQq6GVYQM6ZihNEHVbLb1dx3MRqqmP6myZAbk%2FKboOJNLHV2ywmjjwIxhxcY4ZhmHl0TKDwkAT3BejJp2tWkZhJd68YGTHgfuHDbMtZJEXHOaWbmiGuANK7shuCaGTFI2LKmCNKvKGNB%2B%2Fws9%2B7D22rs94OsV8eS8vg5AY&X-Amz-Signature=68b89309865d8ac3bd3697121e5e1165683c74f6b5775390238050043fc5145c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}


#### Outputs:

| **Name** | **Type**               |
| -------- | ---------------------- |
| `/tf`    | map ⇒ odom             |
| `/map`   | nav_msgs/OccupancyGrid |

#### Params:

| **Name**           | **Type** |
| ------------------ | -------- |
| `slam_params_file` | file     |
| `use_sim_time`     | bool     |

#### description:

Given a `/scan` from a Lidar it outputs a map

{{% /alert %}}

# Simulating SLAM in Gazebo

To run slam just run the node: `ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true`

Remember to turn on Gazebo again:

```python "4-4","9-12","14-14"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633GZNDJN%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBjzlm4K%2BVbe9xPjwMnPgBzsve7JZjZLBa7GgjIMD%2FLAiEA%2BsHFWUg%2F%2B%2B7QeHT23uhovdFUWGDp9Eol2tq0Xy7WGjsq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDJKwilbFRrOrS32mgCrcA%2F4qyOlqhjvpanURfgy6FwqhwU8Z4xgzSpS5gNFru%2FFqFQ1JUMRENQXt5bX%2B6UemiWwLBERR8enlPuTrrP4mA1XNiZyi7MojbPC66wkFKXtBLGGX1FxY8m%2BfoxPtrZUl3ngh1FMSbQhiOi5hdVzDs%2BE%2B0%2FlQ09cMM74pduo3LT76TKedS%2Bg7W1LGFEt6%2F%2FeLx8kITTABru46GDdMnXMszuoOkyXJJFivIut87BZL4H6zjkEIajeo%2BoZ3E%2Bu1BqSHqyG3CBz3JKoWeWhsjzXVLhOoG6Tq7biEWA1ZwRrZ7H1L1sE2ayItTzC25xVS8XWgcba%2BEyxzDmSa%2FdIH67%2B%2FGrWclgHt7MadgG4jyUKGeU5LYJxwLNolppEkuc4EoOPlJ%2BP%2Bj5TXgRvpwa66QNzYsf0UISSgczuOh7rVR%2F7MlvSMApzL%2BlncUjzlsB4VCl%2Bv4TE2%2FLNevwLMkFVYeAboz8SlWazsBokkLu09x53cv74SvsW%2BVazJ1Kk6VTL8JDr9gZKBxP1fPxe92RNAXP9Tdvc104zccFxdab46mPUWsGt0bXbx997e9RJ7MvZEvpflog%2BP37nLRRxgdlVutcQrd2gfgMhYqhpNq8Oo5fTVz9G7LBw%2FttFf1pn%2Bol95MMWf68cGOqUBRxMnjOm1SHT%2F0N0%2FQPVmCbMv1fhN7WkcHDldxuVv%2FwjuSH3yq4FvxQJQq6GVYQM6ZihNEHVbLb1dx3MRqqmP6myZAbk%2FKboOJNLHV2ywmjjwIxhxcY4ZhmHl0TKDwkAT3BejJp2tWkZhJd68YGTHgfuHDbMtZJEXHOaWbmiGuANK7shuCaGTFI2LKmCNKvKGNB%2B%2Fws9%2B7D22rs94OsV8eS8vg5AY&X-Amz-Signature=7aa45904aaa55701fa4f755ad675235dc595d2fc343c530863bd20e8cec1b91e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633GZNDJN%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBjzlm4K%2BVbe9xPjwMnPgBzsve7JZjZLBa7GgjIMD%2FLAiEA%2BsHFWUg%2F%2B%2B7QeHT23uhovdFUWGDp9Eol2tq0Xy7WGjsq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDJKwilbFRrOrS32mgCrcA%2F4qyOlqhjvpanURfgy6FwqhwU8Z4xgzSpS5gNFru%2FFqFQ1JUMRENQXt5bX%2B6UemiWwLBERR8enlPuTrrP4mA1XNiZyi7MojbPC66wkFKXtBLGGX1FxY8m%2BfoxPtrZUl3ngh1FMSbQhiOi5hdVzDs%2BE%2B0%2FlQ09cMM74pduo3LT76TKedS%2Bg7W1LGFEt6%2F%2FeLx8kITTABru46GDdMnXMszuoOkyXJJFivIut87BZL4H6zjkEIajeo%2BoZ3E%2Bu1BqSHqyG3CBz3JKoWeWhsjzXVLhOoG6Tq7biEWA1ZwRrZ7H1L1sE2ayItTzC25xVS8XWgcba%2BEyxzDmSa%2FdIH67%2B%2FGrWclgHt7MadgG4jyUKGeU5LYJxwLNolppEkuc4EoOPlJ%2BP%2Bj5TXgRvpwa66QNzYsf0UISSgczuOh7rVR%2F7MlvSMApzL%2BlncUjzlsB4VCl%2Bv4TE2%2FLNevwLMkFVYeAboz8SlWazsBokkLu09x53cv74SvsW%2BVazJ1Kk6VTL8JDr9gZKBxP1fPxe92RNAXP9Tdvc104zccFxdab46mPUWsGt0bXbx997e9RJ7MvZEvpflog%2BP37nLRRxgdlVutcQrd2gfgMhYqhpNq8Oo5fTVz9G7LBw%2FttFf1pn%2Bol95MMWf68cGOqUBRxMnjOm1SHT%2F0N0%2FQPVmCbMv1fhN7WkcHDldxuVv%2FwjuSH3yq4FvxQJQq6GVYQM6ZihNEHVbLb1dx3MRqqmP6myZAbk%2FKboOJNLHV2ywmjjwIxhxcY4ZhmHl0TKDwkAT3BejJp2tWkZhJd68YGTHgfuHDbMtZJEXHOaWbmiGuANK7shuCaGTFI2LKmCNKvKGNB%2B%2Fws9%2B7D22rs94OsV8eS8vg5AY&X-Amz-Signature=e4ba0b4db48164d289f554a2963c276712ad9c03d408dcaefd5842af6a775379&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633GZNDJN%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBjzlm4K%2BVbe9xPjwMnPgBzsve7JZjZLBa7GgjIMD%2FLAiEA%2BsHFWUg%2F%2B%2B7QeHT23uhovdFUWGDp9Eol2tq0Xy7WGjsq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDJKwilbFRrOrS32mgCrcA%2F4qyOlqhjvpanURfgy6FwqhwU8Z4xgzSpS5gNFru%2FFqFQ1JUMRENQXt5bX%2B6UemiWwLBERR8enlPuTrrP4mA1XNiZyi7MojbPC66wkFKXtBLGGX1FxY8m%2BfoxPtrZUl3ngh1FMSbQhiOi5hdVzDs%2BE%2B0%2FlQ09cMM74pduo3LT76TKedS%2Bg7W1LGFEt6%2F%2FeLx8kITTABru46GDdMnXMszuoOkyXJJFivIut87BZL4H6zjkEIajeo%2BoZ3E%2Bu1BqSHqyG3CBz3JKoWeWhsjzXVLhOoG6Tq7biEWA1ZwRrZ7H1L1sE2ayItTzC25xVS8XWgcba%2BEyxzDmSa%2FdIH67%2B%2FGrWclgHt7MadgG4jyUKGeU5LYJxwLNolppEkuc4EoOPlJ%2BP%2Bj5TXgRvpwa66QNzYsf0UISSgczuOh7rVR%2F7MlvSMApzL%2BlncUjzlsB4VCl%2Bv4TE2%2FLNevwLMkFVYeAboz8SlWazsBokkLu09x53cv74SvsW%2BVazJ1Kk6VTL8JDr9gZKBxP1fPxe92RNAXP9Tdvc104zccFxdab46mPUWsGt0bXbx997e9RJ7MvZEvpflog%2BP37nLRRxgdlVutcQrd2gfgMhYqhpNq8Oo5fTVz9G7LBw%2FttFf1pn%2Bol95MMWf68cGOqUBRxMnjOm1SHT%2F0N0%2FQPVmCbMv1fhN7WkcHDldxuVv%2FwjuSH3yq4FvxQJQq6GVYQM6ZihNEHVbLb1dx3MRqqmP6myZAbk%2FKboOJNLHV2ywmjjwIxhxcY4ZhmHl0TKDwkAT3BejJp2tWkZhJd68YGTHgfuHDbMtZJEXHOaWbmiGuANK7shuCaGTFI2LKmCNKvKGNB%2B%2Fws9%2B7D22rs94OsV8eS8vg5AY&X-Amz-Signature=3233cc2438dee7df5b1591f6440fd24574170722321e41bf1fe0616e1bc10487&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633GZNDJN%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBjzlm4K%2BVbe9xPjwMnPgBzsve7JZjZLBa7GgjIMD%2FLAiEA%2BsHFWUg%2F%2B%2B7QeHT23uhovdFUWGDp9Eol2tq0Xy7WGjsq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDJKwilbFRrOrS32mgCrcA%2F4qyOlqhjvpanURfgy6FwqhwU8Z4xgzSpS5gNFru%2FFqFQ1JUMRENQXt5bX%2B6UemiWwLBERR8enlPuTrrP4mA1XNiZyi7MojbPC66wkFKXtBLGGX1FxY8m%2BfoxPtrZUl3ngh1FMSbQhiOi5hdVzDs%2BE%2B0%2FlQ09cMM74pduo3LT76TKedS%2Bg7W1LGFEt6%2F%2FeLx8kITTABru46GDdMnXMszuoOkyXJJFivIut87BZL4H6zjkEIajeo%2BoZ3E%2Bu1BqSHqyG3CBz3JKoWeWhsjzXVLhOoG6Tq7biEWA1ZwRrZ7H1L1sE2ayItTzC25xVS8XWgcba%2BEyxzDmSa%2FdIH67%2B%2FGrWclgHt7MadgG4jyUKGeU5LYJxwLNolppEkuc4EoOPlJ%2BP%2Bj5TXgRvpwa66QNzYsf0UISSgczuOh7rVR%2F7MlvSMApzL%2BlncUjzlsB4VCl%2Bv4TE2%2FLNevwLMkFVYeAboz8SlWazsBokkLu09x53cv74SvsW%2BVazJ1Kk6VTL8JDr9gZKBxP1fPxe92RNAXP9Tdvc104zccFxdab46mPUWsGt0bXbx997e9RJ7MvZEvpflog%2BP37nLRRxgdlVutcQrd2gfgMhYqhpNq8Oo5fTVz9G7LBw%2FttFf1pn%2Bol95MMWf68cGOqUBRxMnjOm1SHT%2F0N0%2FQPVmCbMv1fhN7WkcHDldxuVv%2FwjuSH3yq4FvxQJQq6GVYQM6ZihNEHVbLb1dx3MRqqmP6myZAbk%2FKboOJNLHV2ywmjjwIxhxcY4ZhmHl0TKDwkAT3BejJp2tWkZhJd68YGTHgfuHDbMtZJEXHOaWbmiGuANK7shuCaGTFI2LKmCNKvKGNB%2B%2Fws9%2B7D22rs94OsV8eS8vg5AY&X-Amz-Signature=14ce1825e6be46e1c57e969b8c5ed0a10f741b20c0d82259458c058df5e66eaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633GZNDJN%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBjzlm4K%2BVbe9xPjwMnPgBzsve7JZjZLBa7GgjIMD%2FLAiEA%2BsHFWUg%2F%2B%2B7QeHT23uhovdFUWGDp9Eol2tq0Xy7WGjsq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDJKwilbFRrOrS32mgCrcA%2F4qyOlqhjvpanURfgy6FwqhwU8Z4xgzSpS5gNFru%2FFqFQ1JUMRENQXt5bX%2B6UemiWwLBERR8enlPuTrrP4mA1XNiZyi7MojbPC66wkFKXtBLGGX1FxY8m%2BfoxPtrZUl3ngh1FMSbQhiOi5hdVzDs%2BE%2B0%2FlQ09cMM74pduo3LT76TKedS%2Bg7W1LGFEt6%2F%2FeLx8kITTABru46GDdMnXMszuoOkyXJJFivIut87BZL4H6zjkEIajeo%2BoZ3E%2Bu1BqSHqyG3CBz3JKoWeWhsjzXVLhOoG6Tq7biEWA1ZwRrZ7H1L1sE2ayItTzC25xVS8XWgcba%2BEyxzDmSa%2FdIH67%2B%2FGrWclgHt7MadgG4jyUKGeU5LYJxwLNolppEkuc4EoOPlJ%2BP%2Bj5TXgRvpwa66QNzYsf0UISSgczuOh7rVR%2F7MlvSMApzL%2BlncUjzlsB4VCl%2Bv4TE2%2FLNevwLMkFVYeAboz8SlWazsBokkLu09x53cv74SvsW%2BVazJ1Kk6VTL8JDr9gZKBxP1fPxe92RNAXP9Tdvc104zccFxdab46mPUWsGt0bXbx997e9RJ7MvZEvpflog%2BP37nLRRxgdlVutcQrd2gfgMhYqhpNq8Oo5fTVz9G7LBw%2FttFf1pn%2Bol95MMWf68cGOqUBRxMnjOm1SHT%2F0N0%2FQPVmCbMv1fhN7WkcHDldxuVv%2FwjuSH3yq4FvxQJQq6GVYQM6ZihNEHVbLb1dx3MRqqmP6myZAbk%2FKboOJNLHV2ywmjjwIxhxcY4ZhmHl0TKDwkAT3BejJp2tWkZhJd68YGTHgfuHDbMtZJEXHOaWbmiGuANK7shuCaGTFI2LKmCNKvKGNB%2B%2Fws9%2B7D22rs94OsV8eS8vg5AY&X-Amz-Signature=e20328c5b77f4ff97f6eb7a034153461a64b4d0a1a9acc0f7c63942c85868023&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633GZNDJN%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBjzlm4K%2BVbe9xPjwMnPgBzsve7JZjZLBa7GgjIMD%2FLAiEA%2BsHFWUg%2F%2B%2B7QeHT23uhovdFUWGDp9Eol2tq0Xy7WGjsq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDJKwilbFRrOrS32mgCrcA%2F4qyOlqhjvpanURfgy6FwqhwU8Z4xgzSpS5gNFru%2FFqFQ1JUMRENQXt5bX%2B6UemiWwLBERR8enlPuTrrP4mA1XNiZyi7MojbPC66wkFKXtBLGGX1FxY8m%2BfoxPtrZUl3ngh1FMSbQhiOi5hdVzDs%2BE%2B0%2FlQ09cMM74pduo3LT76TKedS%2Bg7W1LGFEt6%2F%2FeLx8kITTABru46GDdMnXMszuoOkyXJJFivIut87BZL4H6zjkEIajeo%2BoZ3E%2Bu1BqSHqyG3CBz3JKoWeWhsjzXVLhOoG6Tq7biEWA1ZwRrZ7H1L1sE2ayItTzC25xVS8XWgcba%2BEyxzDmSa%2FdIH67%2B%2FGrWclgHt7MadgG4jyUKGeU5LYJxwLNolppEkuc4EoOPlJ%2BP%2Bj5TXgRvpwa66QNzYsf0UISSgczuOh7rVR%2F7MlvSMApzL%2BlncUjzlsB4VCl%2Bv4TE2%2FLNevwLMkFVYeAboz8SlWazsBokkLu09x53cv74SvsW%2BVazJ1Kk6VTL8JDr9gZKBxP1fPxe92RNAXP9Tdvc104zccFxdab46mPUWsGt0bXbx997e9RJ7MvZEvpflog%2BP37nLRRxgdlVutcQrd2gfgMhYqhpNq8Oo5fTVz9G7LBw%2FttFf1pn%2Bol95MMWf68cGOqUBRxMnjOm1SHT%2F0N0%2FQPVmCbMv1fhN7WkcHDldxuVv%2FwjuSH3yq4FvxQJQq6GVYQM6ZihNEHVbLb1dx3MRqqmP6myZAbk%2FKboOJNLHV2ywmjjwIxhxcY4ZhmHl0TKDwkAT3BejJp2tWkZhJd68YGTHgfuHDbMtZJEXHOaWbmiGuANK7shuCaGTFI2LKmCNKvKGNB%2B%2Fws9%2B7D22rs94OsV8eS8vg5AY&X-Amz-Signature=5fd234c9398fd683cebe78fa7b729ed1a8baf9baf5ae161c3e61cf8514a39abb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to turn off Gazebo again:

```python "4-4","9-12","14-14"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633GZNDJN%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBjzlm4K%2BVbe9xPjwMnPgBzsve7JZjZLBa7GgjIMD%2FLAiEA%2BsHFWUg%2F%2B%2B7QeHT23uhovdFUWGDp9Eol2tq0Xy7WGjsq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDJKwilbFRrOrS32mgCrcA%2F4qyOlqhjvpanURfgy6FwqhwU8Z4xgzSpS5gNFru%2FFqFQ1JUMRENQXt5bX%2B6UemiWwLBERR8enlPuTrrP4mA1XNiZyi7MojbPC66wkFKXtBLGGX1FxY8m%2BfoxPtrZUl3ngh1FMSbQhiOi5hdVzDs%2BE%2B0%2FlQ09cMM74pduo3LT76TKedS%2Bg7W1LGFEt6%2F%2FeLx8kITTABru46GDdMnXMszuoOkyXJJFivIut87BZL4H6zjkEIajeo%2BoZ3E%2Bu1BqSHqyG3CBz3JKoWeWhsjzXVLhOoG6Tq7biEWA1ZwRrZ7H1L1sE2ayItTzC25xVS8XWgcba%2BEyxzDmSa%2FdIH67%2B%2FGrWclgHt7MadgG4jyUKGeU5LYJxwLNolppEkuc4EoOPlJ%2BP%2Bj5TXgRvpwa66QNzYsf0UISSgczuOh7rVR%2F7MlvSMApzL%2BlncUjzlsB4VCl%2Bv4TE2%2FLNevwLMkFVYeAboz8SlWazsBokkLu09x53cv74SvsW%2BVazJ1Kk6VTL8JDr9gZKBxP1fPxe92RNAXP9Tdvc104zccFxdab46mPUWsGt0bXbx997e9RJ7MvZEvpflog%2BP37nLRRxgdlVutcQrd2gfgMhYqhpNq8Oo5fTVz9G7LBw%2FttFf1pn%2Bol95MMWf68cGOqUBRxMnjOm1SHT%2F0N0%2FQPVmCbMv1fhN7WkcHDldxuVv%2FwjuSH3yq4FvxQJQq6GVYQM6ZihNEHVbLb1dx3MRqqmP6myZAbk%2FKboOJNLHV2ywmjjwIxhxcY4ZhmHl0TKDwkAT3BejJp2tWkZhJd68YGTHgfuHDbMtZJEXHOaWbmiGuANK7shuCaGTFI2LKmCNKvKGNB%2B%2Fws9%2B7D22rs94OsV8eS8vg5AY&X-Amz-Signature=b6145df42356c0ab8f2f2daa971a2042905a447be2ef08a6c37660e9f38d7ba5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633GZNDJN%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBjzlm4K%2BVbe9xPjwMnPgBzsve7JZjZLBa7GgjIMD%2FLAiEA%2BsHFWUg%2F%2B%2B7QeHT23uhovdFUWGDp9Eol2tq0Xy7WGjsq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDJKwilbFRrOrS32mgCrcA%2F4qyOlqhjvpanURfgy6FwqhwU8Z4xgzSpS5gNFru%2FFqFQ1JUMRENQXt5bX%2B6UemiWwLBERR8enlPuTrrP4mA1XNiZyi7MojbPC66wkFKXtBLGGX1FxY8m%2BfoxPtrZUl3ngh1FMSbQhiOi5hdVzDs%2BE%2B0%2FlQ09cMM74pduo3LT76TKedS%2Bg7W1LGFEt6%2F%2FeLx8kITTABru46GDdMnXMszuoOkyXJJFivIut87BZL4H6zjkEIajeo%2BoZ3E%2Bu1BqSHqyG3CBz3JKoWeWhsjzXVLhOoG6Tq7biEWA1ZwRrZ7H1L1sE2ayItTzC25xVS8XWgcba%2BEyxzDmSa%2FdIH67%2B%2FGrWclgHt7MadgG4jyUKGeU5LYJxwLNolppEkuc4EoOPlJ%2BP%2Bj5TXgRvpwa66QNzYsf0UISSgczuOh7rVR%2F7MlvSMApzL%2BlncUjzlsB4VCl%2Bv4TE2%2FLNevwLMkFVYeAboz8SlWazsBokkLu09x53cv74SvsW%2BVazJ1Kk6VTL8JDr9gZKBxP1fPxe92RNAXP9Tdvc104zccFxdab46mPUWsGt0bXbx997e9RJ7MvZEvpflog%2BP37nLRRxgdlVutcQrd2gfgMhYqhpNq8Oo5fTVz9G7LBw%2FttFf1pn%2Bol95MMWf68cGOqUBRxMnjOm1SHT%2F0N0%2FQPVmCbMv1fhN7WkcHDldxuVv%2FwjuSH3yq4FvxQJQq6GVYQM6ZihNEHVbLb1dx3MRqqmP6myZAbk%2FKboOJNLHV2ywmjjwIxhxcY4ZhmHl0TKDwkAT3BejJp2tWkZhJd68YGTHgfuHDbMtZJEXHOaWbmiGuANK7shuCaGTFI2LKmCNKvKGNB%2B%2Fws9%2B7D22rs94OsV8eS8vg5AY&X-Amz-Signature=64b3ac13f6c13efb07676451d06e427fe1ad7d01f9a7309596fe149351b2fba5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

```python "9-9","13-20","38-38"

   
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633GZNDJN%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBjzlm4K%2BVbe9xPjwMnPgBzsve7JZjZLBa7GgjIMD%2FLAiEA%2BsHFWUg%2F%2B%2B7QeHT23uhovdFUWGDp9Eol2tq0Xy7WGjsq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDJKwilbFRrOrS32mgCrcA%2F4qyOlqhjvpanURfgy6FwqhwU8Z4xgzSpS5gNFru%2FFqFQ1JUMRENQXt5bX%2B6UemiWwLBERR8enlPuTrrP4mA1XNiZyi7MojbPC66wkFKXtBLGGX1FxY8m%2BfoxPtrZUl3ngh1FMSbQhiOi5hdVzDs%2BE%2B0%2FlQ09cMM74pduo3LT76TKedS%2Bg7W1LGFEt6%2F%2FeLx8kITTABru46GDdMnXMszuoOkyXJJFivIut87BZL4H6zjkEIajeo%2BoZ3E%2Bu1BqSHqyG3CBz3JKoWeWhsjzXVLhOoG6Tq7biEWA1ZwRrZ7H1L1sE2ayItTzC25xVS8XWgcba%2BEyxzDmSa%2FdIH67%2B%2FGrWclgHt7MadgG4jyUKGeU5LYJxwLNolppEkuc4EoOPlJ%2BP%2Bj5TXgRvpwa66QNzYsf0UISSgczuOh7rVR%2F7MlvSMApzL%2BlncUjzlsB4VCl%2Bv4TE2%2FLNevwLMkFVYeAboz8SlWazsBokkLu09x53cv74SvsW%2BVazJ1Kk6VTL8JDr9gZKBxP1fPxe92RNAXP9Tdvc104zccFxdab46mPUWsGt0bXbx997e9RJ7MvZEvpflog%2BP37nLRRxgdlVutcQrd2gfgMhYqhpNq8Oo5fTVz9G7LBw%2FttFf1pn%2Bol95MMWf68cGOqUBRxMnjOm1SHT%2F0N0%2FQPVmCbMv1fhN7WkcHDldxuVv%2FwjuSH3yq4FvxQJQq6GVYQM6ZihNEHVbLb1dx3MRqqmP6myZAbk%2FKboOJNLHV2ywmjjwIxhxcY4ZhmHl0TKDwkAT3BejJp2tWkZhJd68YGTHgfuHDbMtZJEXHOaWbmiGuANK7shuCaGTFI2LKmCNKvKGNB%2B%2Fws9%2B7D22rs94OsV8eS8vg5AY&X-Amz-Signature=8f33302476a9ef4171cef8f7529bc61c558ab726809fff62c4c8a7cdc7b8913a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633GZNDJN%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBjzlm4K%2BVbe9xPjwMnPgBzsve7JZjZLBa7GgjIMD%2FLAiEA%2BsHFWUg%2F%2B%2B7QeHT23uhovdFUWGDp9Eol2tq0Xy7WGjsq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDJKwilbFRrOrS32mgCrcA%2F4qyOlqhjvpanURfgy6FwqhwU8Z4xgzSpS5gNFru%2FFqFQ1JUMRENQXt5bX%2B6UemiWwLBERR8enlPuTrrP4mA1XNiZyi7MojbPC66wkFKXtBLGGX1FxY8m%2BfoxPtrZUl3ngh1FMSbQhiOi5hdVzDs%2BE%2B0%2FlQ09cMM74pduo3LT76TKedS%2Bg7W1LGFEt6%2F%2FeLx8kITTABru46GDdMnXMszuoOkyXJJFivIut87BZL4H6zjkEIajeo%2BoZ3E%2Bu1BqSHqyG3CBz3JKoWeWhsjzXVLhOoG6Tq7biEWA1ZwRrZ7H1L1sE2ayItTzC25xVS8XWgcba%2BEyxzDmSa%2FdIH67%2B%2FGrWclgHt7MadgG4jyUKGeU5LYJxwLNolppEkuc4EoOPlJ%2BP%2Bj5TXgRvpwa66QNzYsf0UISSgczuOh7rVR%2F7MlvSMApzL%2BlncUjzlsB4VCl%2Bv4TE2%2FLNevwLMkFVYeAboz8SlWazsBokkLu09x53cv74SvsW%2BVazJ1Kk6VTL8JDr9gZKBxP1fPxe92RNAXP9Tdvc104zccFxdab46mPUWsGt0bXbx997e9RJ7MvZEvpflog%2BP37nLRRxgdlVutcQrd2gfgMhYqhpNq8Oo5fTVz9G7LBw%2FttFf1pn%2Bol95MMWf68cGOqUBRxMnjOm1SHT%2F0N0%2FQPVmCbMv1fhN7WkcHDldxuVv%2FwjuSH3yq4FvxQJQq6GVYQM6ZihNEHVbLb1dx3MRqqmP6myZAbk%2FKboOJNLHV2ywmjjwIxhxcY4ZhmHl0TKDwkAT3BejJp2tWkZhJd68YGTHgfuHDbMtZJEXHOaWbmiGuANK7shuCaGTFI2LKmCNKvKGNB%2B%2Fws9%2B7D22rs94OsV8eS8vg5AY&X-Amz-Signature=7b4c5644a89d5365bbe5076f620dbbb031df23fda3c9ac604b15bda3a98d9c8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633GZNDJN%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBjzlm4K%2BVbe9xPjwMnPgBzsve7JZjZLBa7GgjIMD%2FLAiEA%2BsHFWUg%2F%2B%2B7QeHT23uhovdFUWGDp9Eol2tq0Xy7WGjsq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDJKwilbFRrOrS32mgCrcA%2F4qyOlqhjvpanURfgy6FwqhwU8Z4xgzSpS5gNFru%2FFqFQ1JUMRENQXt5bX%2B6UemiWwLBERR8enlPuTrrP4mA1XNiZyi7MojbPC66wkFKXtBLGGX1FxY8m%2BfoxPtrZUl3ngh1FMSbQhiOi5hdVzDs%2BE%2B0%2FlQ09cMM74pduo3LT76TKedS%2Bg7W1LGFEt6%2F%2FeLx8kITTABru46GDdMnXMszuoOkyXJJFivIut87BZL4H6zjkEIajeo%2BoZ3E%2Bu1BqSHqyG3CBz3JKoWeWhsjzXVLhOoG6Tq7biEWA1ZwRrZ7H1L1sE2ayItTzC25xVS8XWgcba%2BEyxzDmSa%2FdIH67%2B%2FGrWclgHt7MadgG4jyUKGeU5LYJxwLNolppEkuc4EoOPlJ%2BP%2Bj5TXgRvpwa66QNzYsf0UISSgczuOh7rVR%2F7MlvSMApzL%2BlncUjzlsB4VCl%2Bv4TE2%2FLNevwLMkFVYeAboz8SlWazsBokkLu09x53cv74SvsW%2BVazJ1Kk6VTL8JDr9gZKBxP1fPxe92RNAXP9Tdvc104zccFxdab46mPUWsGt0bXbx997e9RJ7MvZEvpflog%2BP37nLRRxgdlVutcQrd2gfgMhYqhpNq8Oo5fTVz9G7LBw%2FttFf1pn%2Bol95MMWf68cGOqUBRxMnjOm1SHT%2F0N0%2FQPVmCbMv1fhN7WkcHDldxuVv%2FwjuSH3yq4FvxQJQq6GVYQM6ZihNEHVbLb1dx3MRqqmP6myZAbk%2FKboOJNLHV2ywmjjwIxhxcY4ZhmHl0TKDwkAT3BejJp2tWkZhJd68YGTHgfuHDbMtZJEXHOaWbmiGuANK7shuCaGTFI2LKmCNKvKGNB%2B%2Fws9%2B7D22rs94OsV8eS8vg5AY&X-Amz-Signature=b30d66bbe666af68b80fc58021bd1841fd0cb353ad7cbbbddbc8dbb49f6dec92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633GZNDJN%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBjzlm4K%2BVbe9xPjwMnPgBzsve7JZjZLBa7GgjIMD%2FLAiEA%2BsHFWUg%2F%2B%2B7QeHT23uhovdFUWGDp9Eol2tq0Xy7WGjsq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDJKwilbFRrOrS32mgCrcA%2F4qyOlqhjvpanURfgy6FwqhwU8Z4xgzSpS5gNFru%2FFqFQ1JUMRENQXt5bX%2B6UemiWwLBERR8enlPuTrrP4mA1XNiZyi7MojbPC66wkFKXtBLGGX1FxY8m%2BfoxPtrZUl3ngh1FMSbQhiOi5hdVzDs%2BE%2B0%2FlQ09cMM74pduo3LT76TKedS%2Bg7W1LGFEt6%2F%2FeLx8kITTABru46GDdMnXMszuoOkyXJJFivIut87BZL4H6zjkEIajeo%2BoZ3E%2Bu1BqSHqyG3CBz3JKoWeWhsjzXVLhOoG6Tq7biEWA1ZwRrZ7H1L1sE2ayItTzC25xVS8XWgcba%2BEyxzDmSa%2FdIH67%2B%2FGrWclgHt7MadgG4jyUKGeU5LYJxwLNolppEkuc4EoOPlJ%2BP%2Bj5TXgRvpwa66QNzYsf0UISSgczuOh7rVR%2F7MlvSMApzL%2BlncUjzlsB4VCl%2Bv4TE2%2FLNevwLMkFVYeAboz8SlWazsBokkLu09x53cv74SvsW%2BVazJ1Kk6VTL8JDr9gZKBxP1fPxe92RNAXP9Tdvc104zccFxdab46mPUWsGt0bXbx997e9RJ7MvZEvpflog%2BP37nLRRxgdlVutcQrd2gfgMhYqhpNq8Oo5fTVz9G7LBw%2FttFf1pn%2Bol95MMWf68cGOqUBRxMnjOm1SHT%2F0N0%2FQPVmCbMv1fhN7WkcHDldxuVv%2FwjuSH3yq4FvxQJQq6GVYQM6ZihNEHVbLb1dx3MRqqmP6myZAbk%2FKboOJNLHV2ywmjjwIxhxcY4ZhmHl0TKDwkAT3BejJp2tWkZhJd68YGTHgfuHDbMtZJEXHOaWbmiGuANK7shuCaGTFI2LKmCNKvKGNB%2B%2Fws9%2B7D22rs94OsV8eS8vg5AY&X-Amz-Signature=d0c6fc7c6f156baf42caa15fa3abbbd0532e6a6133b0c38ec262b1112d77fac6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored the 4 generated files

```yaml "18-19","24-24"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633GZNDJN%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBjzlm4K%2BVbe9xPjwMnPgBzsve7JZjZLBa7GgjIMD%2FLAiEA%2BsHFWUg%2F%2B%2B7QeHT23uhovdFUWGDp9Eol2tq0Xy7WGjsq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDJKwilbFRrOrS32mgCrcA%2F4qyOlqhjvpanURfgy6FwqhwU8Z4xgzSpS5gNFru%2FFqFQ1JUMRENQXt5bX%2B6UemiWwLBERR8enlPuTrrP4mA1XNiZyi7MojbPC66wkFKXtBLGGX1FxY8m%2BfoxPtrZUl3ngh1FMSbQhiOi5hdVzDs%2BE%2B0%2FlQ09cMM74pduo3LT76TKedS%2Bg7W1LGFEt6%2F%2FeLx8kITTABru46GDdMnXMszuoOkyXJJFivIut87BZL4H6zjkEIajeo%2BoZ3E%2Bu1BqSHqyG3CBz3JKoWeWhsjzXVLhOoG6Tq7biEWA1ZwRrZ7H1L1sE2ayItTzC25xVS8XWgcba%2BEyxzDmSa%2FdIH67%2B%2FGrWclgHt7MadgG4jyUKGeU5LYJxwLNolppEkuc4EoOPlJ%2BP%2Bj5TXgRvpwa66QNzYsf0UISSgczuOh7rVR%2F7MlvSMApzL%2BlncUjzlsB4VCl%2Bv4TE2%2FLNevwLMkFVYeAboz8SlWazsBokkLu09x53cv74SvsW%2BVazJ1Kk6VTL8JDr9gZKBxP1fPxe92RNAXP9Tdvc104zccFxdab46mPUWsGt0bXbx997e9RJ7MvZEvpflog%2BP37nLRRxgdlVutcQrd2gfgMhYqhpNq8Oo5fTVz9G7LBw%2FttFf1pn%2Bol95MMWf68cGOqUBRxMnjOm1SHT%2F0N0%2FQPVmCbMv1fhN7WkcHDldxuVv%2FwjuSH3yq4FvxQJQq6GVYQM6ZihNEHVbLb1dx3MRqqmP6myZAbk%2FKboOJNLHV2ywmjjwIxhxcY4ZhmHl0TKDwkAT3BejJp2tWkZhJd68YGTHgfuHDbMtZJEXHOaWbmiGuANK7shuCaGTFI2LKmCNKvKGNB%2B%2Fws9%2B7D22rs94OsV8eS8vg5AY&X-Amz-Signature=a073f0168577b114167e67804387a5e447daf662b311b826d6873215a67f11f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
