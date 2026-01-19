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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7ASC4XE%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQddD3CbvPkhuLHla5ozLUpP0Yw%2B4CJE2v1uUsuSRNuAiEA0N2ujgTq%2FFc257gJ8vFvW2ex1WiYRTTFxAE85KzmxQUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA7O0IJp5CV31VpuoSrcA2be7CHjqpVMzSIQbHv%2FHxO4ZV59X2fEcOKBVaArEhRD4JcP5bf80tgq1f2mrhJKzQZZZF5uTTeJwMJntJxP3LuvD5hdjzgP0umRr1JhCchj2OzBldwVmpImjk9esKbvJ3o8HbzYVDWr%2Fo36jcnZhv7ZaiQpGUjuA64zTFy4AsyEsS63xzf5IWtNa%2BZK485nB8zP%2FzTH777HvQDbKp1YHpH596uo86cm6%2BFMt6hN%2BgFBzahSx40RQ9rwX6sp9G%2BJv29JMM1m0dbLPZWGuWJWXMzDJyrge38Vu3wfl16DXgJHebfa5t0B1vXMVdWWXN9hx%2B%2FeOoCPTyFHWBpU87F4JQQl4gQhDeg2z%2FX7zUJKnFbAs8yEAoFzWbyGyjWziccTqewqxc%2Bjlcy7y%2Bnjv8mhtl1sxlmy%2B8YPvuAYIBJrJwxGyUJKlVmMa4%2FXD9ca3oYhUSC0wi0Vid4nlZFlvfAUL6gj3WEMSVq%2FYGqYM7ya4I02K8%2FaFSaHlA3MFT8%2FcPoiZ0xrEMDbnD%2BKH03pkVPpItPdaOnJc4JvKWgK7YW5QiTg5gMlgvKPQrU16yogkFMFpJlxGbQp94Ez2uUXHVr8WYqfAtmaZUPJNkLS945Ck%2BrWPZJ602ysa2JBRqd9MITdtcsGOqUBKIRgknNpjNfEgWGJ5M5VaZCUmrmeWcJfqKHGPSrmhXGrHHGY5QmI9yVEHytsIE74ay0MvTEy2V41enIndJCSrrT8spumD9oWR0Mi1R0yQpO2Mdp8NboPIO7zlpadn3TDcRbA08oBmYaNG8tnT7yX04%2FXnM7VoYTcQQ4ADICN6gKzapJhEisxmxinPh0jSmJjw%2BvIzHdN2AiCIdkpNc%2B9F1EQwHXY&X-Amz-Signature=a692d60016aa404dfa73cff9e9d63ee732afaad6d19e409a0a77d9c813efc172&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7ASC4XE%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQddD3CbvPkhuLHla5ozLUpP0Yw%2B4CJE2v1uUsuSRNuAiEA0N2ujgTq%2FFc257gJ8vFvW2ex1WiYRTTFxAE85KzmxQUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA7O0IJp5CV31VpuoSrcA2be7CHjqpVMzSIQbHv%2FHxO4ZV59X2fEcOKBVaArEhRD4JcP5bf80tgq1f2mrhJKzQZZZF5uTTeJwMJntJxP3LuvD5hdjzgP0umRr1JhCchj2OzBldwVmpImjk9esKbvJ3o8HbzYVDWr%2Fo36jcnZhv7ZaiQpGUjuA64zTFy4AsyEsS63xzf5IWtNa%2BZK485nB8zP%2FzTH777HvQDbKp1YHpH596uo86cm6%2BFMt6hN%2BgFBzahSx40RQ9rwX6sp9G%2BJv29JMM1m0dbLPZWGuWJWXMzDJyrge38Vu3wfl16DXgJHebfa5t0B1vXMVdWWXN9hx%2B%2FeOoCPTyFHWBpU87F4JQQl4gQhDeg2z%2FX7zUJKnFbAs8yEAoFzWbyGyjWziccTqewqxc%2Bjlcy7y%2Bnjv8mhtl1sxlmy%2B8YPvuAYIBJrJwxGyUJKlVmMa4%2FXD9ca3oYhUSC0wi0Vid4nlZFlvfAUL6gj3WEMSVq%2FYGqYM7ya4I02K8%2FaFSaHlA3MFT8%2FcPoiZ0xrEMDbnD%2BKH03pkVPpItPdaOnJc4JvKWgK7YW5QiTg5gMlgvKPQrU16yogkFMFpJlxGbQp94Ez2uUXHVr8WYqfAtmaZUPJNkLS945Ck%2BrWPZJ602ysa2JBRqd9MITdtcsGOqUBKIRgknNpjNfEgWGJ5M5VaZCUmrmeWcJfqKHGPSrmhXGrHHGY5QmI9yVEHytsIE74ay0MvTEy2V41enIndJCSrrT8spumD9oWR0Mi1R0yQpO2Mdp8NboPIO7zlpadn3TDcRbA08oBmYaNG8tnT7yX04%2FXnM7VoYTcQQ4ADICN6gKzapJhEisxmxinPh0jSmJjw%2BvIzHdN2AiCIdkpNc%2B9F1EQwHXY&X-Amz-Signature=74df35c4811c74d4b66bdc38717030a0f79296689c5fd2acd4c9f36e17d6c51d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7ASC4XE%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQddD3CbvPkhuLHla5ozLUpP0Yw%2B4CJE2v1uUsuSRNuAiEA0N2ujgTq%2FFc257gJ8vFvW2ex1WiYRTTFxAE85KzmxQUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA7O0IJp5CV31VpuoSrcA2be7CHjqpVMzSIQbHv%2FHxO4ZV59X2fEcOKBVaArEhRD4JcP5bf80tgq1f2mrhJKzQZZZF5uTTeJwMJntJxP3LuvD5hdjzgP0umRr1JhCchj2OzBldwVmpImjk9esKbvJ3o8HbzYVDWr%2Fo36jcnZhv7ZaiQpGUjuA64zTFy4AsyEsS63xzf5IWtNa%2BZK485nB8zP%2FzTH777HvQDbKp1YHpH596uo86cm6%2BFMt6hN%2BgFBzahSx40RQ9rwX6sp9G%2BJv29JMM1m0dbLPZWGuWJWXMzDJyrge38Vu3wfl16DXgJHebfa5t0B1vXMVdWWXN9hx%2B%2FeOoCPTyFHWBpU87F4JQQl4gQhDeg2z%2FX7zUJKnFbAs8yEAoFzWbyGyjWziccTqewqxc%2Bjlcy7y%2Bnjv8mhtl1sxlmy%2B8YPvuAYIBJrJwxGyUJKlVmMa4%2FXD9ca3oYhUSC0wi0Vid4nlZFlvfAUL6gj3WEMSVq%2FYGqYM7ya4I02K8%2FaFSaHlA3MFT8%2FcPoiZ0xrEMDbnD%2BKH03pkVPpItPdaOnJc4JvKWgK7YW5QiTg5gMlgvKPQrU16yogkFMFpJlxGbQp94Ez2uUXHVr8WYqfAtmaZUPJNkLS945Ck%2BrWPZJ602ysa2JBRqd9MITdtcsGOqUBKIRgknNpjNfEgWGJ5M5VaZCUmrmeWcJfqKHGPSrmhXGrHHGY5QmI9yVEHytsIE74ay0MvTEy2V41enIndJCSrrT8spumD9oWR0Mi1R0yQpO2Mdp8NboPIO7zlpadn3TDcRbA08oBmYaNG8tnT7yX04%2FXnM7VoYTcQQ4ADICN6gKzapJhEisxmxinPh0jSmJjw%2BvIzHdN2AiCIdkpNc%2B9F1EQwHXY&X-Amz-Signature=293a72c822b4b6016bbc892e7b3f7fbb8755a9ededcfe14b9d15b4f613f6375b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7ASC4XE%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQddD3CbvPkhuLHla5ozLUpP0Yw%2B4CJE2v1uUsuSRNuAiEA0N2ujgTq%2FFc257gJ8vFvW2ex1WiYRTTFxAE85KzmxQUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA7O0IJp5CV31VpuoSrcA2be7CHjqpVMzSIQbHv%2FHxO4ZV59X2fEcOKBVaArEhRD4JcP5bf80tgq1f2mrhJKzQZZZF5uTTeJwMJntJxP3LuvD5hdjzgP0umRr1JhCchj2OzBldwVmpImjk9esKbvJ3o8HbzYVDWr%2Fo36jcnZhv7ZaiQpGUjuA64zTFy4AsyEsS63xzf5IWtNa%2BZK485nB8zP%2FzTH777HvQDbKp1YHpH596uo86cm6%2BFMt6hN%2BgFBzahSx40RQ9rwX6sp9G%2BJv29JMM1m0dbLPZWGuWJWXMzDJyrge38Vu3wfl16DXgJHebfa5t0B1vXMVdWWXN9hx%2B%2FeOoCPTyFHWBpU87F4JQQl4gQhDeg2z%2FX7zUJKnFbAs8yEAoFzWbyGyjWziccTqewqxc%2Bjlcy7y%2Bnjv8mhtl1sxlmy%2B8YPvuAYIBJrJwxGyUJKlVmMa4%2FXD9ca3oYhUSC0wi0Vid4nlZFlvfAUL6gj3WEMSVq%2FYGqYM7ya4I02K8%2FaFSaHlA3MFT8%2FcPoiZ0xrEMDbnD%2BKH03pkVPpItPdaOnJc4JvKWgK7YW5QiTg5gMlgvKPQrU16yogkFMFpJlxGbQp94Ez2uUXHVr8WYqfAtmaZUPJNkLS945Ck%2BrWPZJ602ysa2JBRqd9MITdtcsGOqUBKIRgknNpjNfEgWGJ5M5VaZCUmrmeWcJfqKHGPSrmhXGrHHGY5QmI9yVEHytsIE74ay0MvTEy2V41enIndJCSrrT8spumD9oWR0Mi1R0yQpO2Mdp8NboPIO7zlpadn3TDcRbA08oBmYaNG8tnT7yX04%2FXnM7VoYTcQQ4ADICN6gKzapJhEisxmxinPh0jSmJjw%2BvIzHdN2AiCIdkpNc%2B9F1EQwHXY&X-Amz-Signature=2bdbab95d614ca1114facae0b41d43ed6bfa5796ffb99064b6bc02a00724fc6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7ASC4XE%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQddD3CbvPkhuLHla5ozLUpP0Yw%2B4CJE2v1uUsuSRNuAiEA0N2ujgTq%2FFc257gJ8vFvW2ex1WiYRTTFxAE85KzmxQUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA7O0IJp5CV31VpuoSrcA2be7CHjqpVMzSIQbHv%2FHxO4ZV59X2fEcOKBVaArEhRD4JcP5bf80tgq1f2mrhJKzQZZZF5uTTeJwMJntJxP3LuvD5hdjzgP0umRr1JhCchj2OzBldwVmpImjk9esKbvJ3o8HbzYVDWr%2Fo36jcnZhv7ZaiQpGUjuA64zTFy4AsyEsS63xzf5IWtNa%2BZK485nB8zP%2FzTH777HvQDbKp1YHpH596uo86cm6%2BFMt6hN%2BgFBzahSx40RQ9rwX6sp9G%2BJv29JMM1m0dbLPZWGuWJWXMzDJyrge38Vu3wfl16DXgJHebfa5t0B1vXMVdWWXN9hx%2B%2FeOoCPTyFHWBpU87F4JQQl4gQhDeg2z%2FX7zUJKnFbAs8yEAoFzWbyGyjWziccTqewqxc%2Bjlcy7y%2Bnjv8mhtl1sxlmy%2B8YPvuAYIBJrJwxGyUJKlVmMa4%2FXD9ca3oYhUSC0wi0Vid4nlZFlvfAUL6gj3WEMSVq%2FYGqYM7ya4I02K8%2FaFSaHlA3MFT8%2FcPoiZ0xrEMDbnD%2BKH03pkVPpItPdaOnJc4JvKWgK7YW5QiTg5gMlgvKPQrU16yogkFMFpJlxGbQp94Ez2uUXHVr8WYqfAtmaZUPJNkLS945Ck%2BrWPZJ602ysa2JBRqd9MITdtcsGOqUBKIRgknNpjNfEgWGJ5M5VaZCUmrmeWcJfqKHGPSrmhXGrHHGY5QmI9yVEHytsIE74ay0MvTEy2V41enIndJCSrrT8spumD9oWR0Mi1R0yQpO2Mdp8NboPIO7zlpadn3TDcRbA08oBmYaNG8tnT7yX04%2FXnM7VoYTcQQ4ADICN6gKzapJhEisxmxinPh0jSmJjw%2BvIzHdN2AiCIdkpNc%2B9F1EQwHXY&X-Amz-Signature=beeac65e497dc1fe5f8db64df0953c288dafa4230a34ad17e5f7fec853bac42e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7ASC4XE%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQddD3CbvPkhuLHla5ozLUpP0Yw%2B4CJE2v1uUsuSRNuAiEA0N2ujgTq%2FFc257gJ8vFvW2ex1WiYRTTFxAE85KzmxQUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA7O0IJp5CV31VpuoSrcA2be7CHjqpVMzSIQbHv%2FHxO4ZV59X2fEcOKBVaArEhRD4JcP5bf80tgq1f2mrhJKzQZZZF5uTTeJwMJntJxP3LuvD5hdjzgP0umRr1JhCchj2OzBldwVmpImjk9esKbvJ3o8HbzYVDWr%2Fo36jcnZhv7ZaiQpGUjuA64zTFy4AsyEsS63xzf5IWtNa%2BZK485nB8zP%2FzTH777HvQDbKp1YHpH596uo86cm6%2BFMt6hN%2BgFBzahSx40RQ9rwX6sp9G%2BJv29JMM1m0dbLPZWGuWJWXMzDJyrge38Vu3wfl16DXgJHebfa5t0B1vXMVdWWXN9hx%2B%2FeOoCPTyFHWBpU87F4JQQl4gQhDeg2z%2FX7zUJKnFbAs8yEAoFzWbyGyjWziccTqewqxc%2Bjlcy7y%2Bnjv8mhtl1sxlmy%2B8YPvuAYIBJrJwxGyUJKlVmMa4%2FXD9ca3oYhUSC0wi0Vid4nlZFlvfAUL6gj3WEMSVq%2FYGqYM7ya4I02K8%2FaFSaHlA3MFT8%2FcPoiZ0xrEMDbnD%2BKH03pkVPpItPdaOnJc4JvKWgK7YW5QiTg5gMlgvKPQrU16yogkFMFpJlxGbQp94Ez2uUXHVr8WYqfAtmaZUPJNkLS945Ck%2BrWPZJ602ysa2JBRqd9MITdtcsGOqUBKIRgknNpjNfEgWGJ5M5VaZCUmrmeWcJfqKHGPSrmhXGrHHGY5QmI9yVEHytsIE74ay0MvTEy2V41enIndJCSrrT8spumD9oWR0Mi1R0yQpO2Mdp8NboPIO7zlpadn3TDcRbA08oBmYaNG8tnT7yX04%2FXnM7VoYTcQQ4ADICN6gKzapJhEisxmxinPh0jSmJjw%2BvIzHdN2AiCIdkpNc%2B9F1EQwHXY&X-Amz-Signature=b0cb30af0fea214cf842c5d42b82bcc64103f646a09124a819f7baa362a40a12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7ASC4XE%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQddD3CbvPkhuLHla5ozLUpP0Yw%2B4CJE2v1uUsuSRNuAiEA0N2ujgTq%2FFc257gJ8vFvW2ex1WiYRTTFxAE85KzmxQUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA7O0IJp5CV31VpuoSrcA2be7CHjqpVMzSIQbHv%2FHxO4ZV59X2fEcOKBVaArEhRD4JcP5bf80tgq1f2mrhJKzQZZZF5uTTeJwMJntJxP3LuvD5hdjzgP0umRr1JhCchj2OzBldwVmpImjk9esKbvJ3o8HbzYVDWr%2Fo36jcnZhv7ZaiQpGUjuA64zTFy4AsyEsS63xzf5IWtNa%2BZK485nB8zP%2FzTH777HvQDbKp1YHpH596uo86cm6%2BFMt6hN%2BgFBzahSx40RQ9rwX6sp9G%2BJv29JMM1m0dbLPZWGuWJWXMzDJyrge38Vu3wfl16DXgJHebfa5t0B1vXMVdWWXN9hx%2B%2FeOoCPTyFHWBpU87F4JQQl4gQhDeg2z%2FX7zUJKnFbAs8yEAoFzWbyGyjWziccTqewqxc%2Bjlcy7y%2Bnjv8mhtl1sxlmy%2B8YPvuAYIBJrJwxGyUJKlVmMa4%2FXD9ca3oYhUSC0wi0Vid4nlZFlvfAUL6gj3WEMSVq%2FYGqYM7ya4I02K8%2FaFSaHlA3MFT8%2FcPoiZ0xrEMDbnD%2BKH03pkVPpItPdaOnJc4JvKWgK7YW5QiTg5gMlgvKPQrU16yogkFMFpJlxGbQp94Ez2uUXHVr8WYqfAtmaZUPJNkLS945Ck%2BrWPZJ602ysa2JBRqd9MITdtcsGOqUBKIRgknNpjNfEgWGJ5M5VaZCUmrmeWcJfqKHGPSrmhXGrHHGY5QmI9yVEHytsIE74ay0MvTEy2V41enIndJCSrrT8spumD9oWR0Mi1R0yQpO2Mdp8NboPIO7zlpadn3TDcRbA08oBmYaNG8tnT7yX04%2FXnM7VoYTcQQ4ADICN6gKzapJhEisxmxinPh0jSmJjw%2BvIzHdN2AiCIdkpNc%2B9F1EQwHXY&X-Amz-Signature=a42187014e886c5f545f4e213004d43e2b6a62baa6b0bf7f4472930a24ec680f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7ASC4XE%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQddD3CbvPkhuLHla5ozLUpP0Yw%2B4CJE2v1uUsuSRNuAiEA0N2ujgTq%2FFc257gJ8vFvW2ex1WiYRTTFxAE85KzmxQUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA7O0IJp5CV31VpuoSrcA2be7CHjqpVMzSIQbHv%2FHxO4ZV59X2fEcOKBVaArEhRD4JcP5bf80tgq1f2mrhJKzQZZZF5uTTeJwMJntJxP3LuvD5hdjzgP0umRr1JhCchj2OzBldwVmpImjk9esKbvJ3o8HbzYVDWr%2Fo36jcnZhv7ZaiQpGUjuA64zTFy4AsyEsS63xzf5IWtNa%2BZK485nB8zP%2FzTH777HvQDbKp1YHpH596uo86cm6%2BFMt6hN%2BgFBzahSx40RQ9rwX6sp9G%2BJv29JMM1m0dbLPZWGuWJWXMzDJyrge38Vu3wfl16DXgJHebfa5t0B1vXMVdWWXN9hx%2B%2FeOoCPTyFHWBpU87F4JQQl4gQhDeg2z%2FX7zUJKnFbAs8yEAoFzWbyGyjWziccTqewqxc%2Bjlcy7y%2Bnjv8mhtl1sxlmy%2B8YPvuAYIBJrJwxGyUJKlVmMa4%2FXD9ca3oYhUSC0wi0Vid4nlZFlvfAUL6gj3WEMSVq%2FYGqYM7ya4I02K8%2FaFSaHlA3MFT8%2FcPoiZ0xrEMDbnD%2BKH03pkVPpItPdaOnJc4JvKWgK7YW5QiTg5gMlgvKPQrU16yogkFMFpJlxGbQp94Ez2uUXHVr8WYqfAtmaZUPJNkLS945Ck%2BrWPZJ602ysa2JBRqd9MITdtcsGOqUBKIRgknNpjNfEgWGJ5M5VaZCUmrmeWcJfqKHGPSrmhXGrHHGY5QmI9yVEHytsIE74ay0MvTEy2V41enIndJCSrrT8spumD9oWR0Mi1R0yQpO2Mdp8NboPIO7zlpadn3TDcRbA08oBmYaNG8tnT7yX04%2FXnM7VoYTcQQ4ADICN6gKzapJhEisxmxinPh0jSmJjw%2BvIzHdN2AiCIdkpNc%2B9F1EQwHXY&X-Amz-Signature=66c3d45ff680a90d16e0423c68da3be6292352951198ec9254d2dcfbfaa3a5f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7ASC4XE%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQddD3CbvPkhuLHla5ozLUpP0Yw%2B4CJE2v1uUsuSRNuAiEA0N2ujgTq%2FFc257gJ8vFvW2ex1WiYRTTFxAE85KzmxQUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA7O0IJp5CV31VpuoSrcA2be7CHjqpVMzSIQbHv%2FHxO4ZV59X2fEcOKBVaArEhRD4JcP5bf80tgq1f2mrhJKzQZZZF5uTTeJwMJntJxP3LuvD5hdjzgP0umRr1JhCchj2OzBldwVmpImjk9esKbvJ3o8HbzYVDWr%2Fo36jcnZhv7ZaiQpGUjuA64zTFy4AsyEsS63xzf5IWtNa%2BZK485nB8zP%2FzTH777HvQDbKp1YHpH596uo86cm6%2BFMt6hN%2BgFBzahSx40RQ9rwX6sp9G%2BJv29JMM1m0dbLPZWGuWJWXMzDJyrge38Vu3wfl16DXgJHebfa5t0B1vXMVdWWXN9hx%2B%2FeOoCPTyFHWBpU87F4JQQl4gQhDeg2z%2FX7zUJKnFbAs8yEAoFzWbyGyjWziccTqewqxc%2Bjlcy7y%2Bnjv8mhtl1sxlmy%2B8YPvuAYIBJrJwxGyUJKlVmMa4%2FXD9ca3oYhUSC0wi0Vid4nlZFlvfAUL6gj3WEMSVq%2FYGqYM7ya4I02K8%2FaFSaHlA3MFT8%2FcPoiZ0xrEMDbnD%2BKH03pkVPpItPdaOnJc4JvKWgK7YW5QiTg5gMlgvKPQrU16yogkFMFpJlxGbQp94Ez2uUXHVr8WYqfAtmaZUPJNkLS945Ck%2BrWPZJ602ysa2JBRqd9MITdtcsGOqUBKIRgknNpjNfEgWGJ5M5VaZCUmrmeWcJfqKHGPSrmhXGrHHGY5QmI9yVEHytsIE74ay0MvTEy2V41enIndJCSrrT8spumD9oWR0Mi1R0yQpO2Mdp8NboPIO7zlpadn3TDcRbA08oBmYaNG8tnT7yX04%2FXnM7VoYTcQQ4ADICN6gKzapJhEisxmxinPh0jSmJjw%2BvIzHdN2AiCIdkpNc%2B9F1EQwHXY&X-Amz-Signature=db3cd18f411d7f59d749471e099f2657928314b4ba7a8917572df8de1dc1c67d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7ASC4XE%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQddD3CbvPkhuLHla5ozLUpP0Yw%2B4CJE2v1uUsuSRNuAiEA0N2ujgTq%2FFc257gJ8vFvW2ex1WiYRTTFxAE85KzmxQUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA7O0IJp5CV31VpuoSrcA2be7CHjqpVMzSIQbHv%2FHxO4ZV59X2fEcOKBVaArEhRD4JcP5bf80tgq1f2mrhJKzQZZZF5uTTeJwMJntJxP3LuvD5hdjzgP0umRr1JhCchj2OzBldwVmpImjk9esKbvJ3o8HbzYVDWr%2Fo36jcnZhv7ZaiQpGUjuA64zTFy4AsyEsS63xzf5IWtNa%2BZK485nB8zP%2FzTH777HvQDbKp1YHpH596uo86cm6%2BFMt6hN%2BgFBzahSx40RQ9rwX6sp9G%2BJv29JMM1m0dbLPZWGuWJWXMzDJyrge38Vu3wfl16DXgJHebfa5t0B1vXMVdWWXN9hx%2B%2FeOoCPTyFHWBpU87F4JQQl4gQhDeg2z%2FX7zUJKnFbAs8yEAoFzWbyGyjWziccTqewqxc%2Bjlcy7y%2Bnjv8mhtl1sxlmy%2B8YPvuAYIBJrJwxGyUJKlVmMa4%2FXD9ca3oYhUSC0wi0Vid4nlZFlvfAUL6gj3WEMSVq%2FYGqYM7ya4I02K8%2FaFSaHlA3MFT8%2FcPoiZ0xrEMDbnD%2BKH03pkVPpItPdaOnJc4JvKWgK7YW5QiTg5gMlgvKPQrU16yogkFMFpJlxGbQp94Ez2uUXHVr8WYqfAtmaZUPJNkLS945Ck%2BrWPZJ602ysa2JBRqd9MITdtcsGOqUBKIRgknNpjNfEgWGJ5M5VaZCUmrmeWcJfqKHGPSrmhXGrHHGY5QmI9yVEHytsIE74ay0MvTEy2V41enIndJCSrrT8spumD9oWR0Mi1R0yQpO2Mdp8NboPIO7zlpadn3TDcRbA08oBmYaNG8tnT7yX04%2FXnM7VoYTcQQ4ADICN6gKzapJhEisxmxinPh0jSmJjw%2BvIzHdN2AiCIdkpNc%2B9F1EQwHXY&X-Amz-Signature=ccb0ab322a34ed345c2123342f5660cdb4921965200184c2fe99c36a26c608c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7ASC4XE%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQddD3CbvPkhuLHla5ozLUpP0Yw%2B4CJE2v1uUsuSRNuAiEA0N2ujgTq%2FFc257gJ8vFvW2ex1WiYRTTFxAE85KzmxQUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA7O0IJp5CV31VpuoSrcA2be7CHjqpVMzSIQbHv%2FHxO4ZV59X2fEcOKBVaArEhRD4JcP5bf80tgq1f2mrhJKzQZZZF5uTTeJwMJntJxP3LuvD5hdjzgP0umRr1JhCchj2OzBldwVmpImjk9esKbvJ3o8HbzYVDWr%2Fo36jcnZhv7ZaiQpGUjuA64zTFy4AsyEsS63xzf5IWtNa%2BZK485nB8zP%2FzTH777HvQDbKp1YHpH596uo86cm6%2BFMt6hN%2BgFBzahSx40RQ9rwX6sp9G%2BJv29JMM1m0dbLPZWGuWJWXMzDJyrge38Vu3wfl16DXgJHebfa5t0B1vXMVdWWXN9hx%2B%2FeOoCPTyFHWBpU87F4JQQl4gQhDeg2z%2FX7zUJKnFbAs8yEAoFzWbyGyjWziccTqewqxc%2Bjlcy7y%2Bnjv8mhtl1sxlmy%2B8YPvuAYIBJrJwxGyUJKlVmMa4%2FXD9ca3oYhUSC0wi0Vid4nlZFlvfAUL6gj3WEMSVq%2FYGqYM7ya4I02K8%2FaFSaHlA3MFT8%2FcPoiZ0xrEMDbnD%2BKH03pkVPpItPdaOnJc4JvKWgK7YW5QiTg5gMlgvKPQrU16yogkFMFpJlxGbQp94Ez2uUXHVr8WYqfAtmaZUPJNkLS945Ck%2BrWPZJ602ysa2JBRqd9MITdtcsGOqUBKIRgknNpjNfEgWGJ5M5VaZCUmrmeWcJfqKHGPSrmhXGrHHGY5QmI9yVEHytsIE74ay0MvTEy2V41enIndJCSrrT8spumD9oWR0Mi1R0yQpO2Mdp8NboPIO7zlpadn3TDcRbA08oBmYaNG8tnT7yX04%2FXnM7VoYTcQQ4ADICN6gKzapJhEisxmxinPh0jSmJjw%2BvIzHdN2AiCIdkpNc%2B9F1EQwHXY&X-Amz-Signature=45cb2122a37dc8d95eda624bb0aaf1d55ab0c277fb549c9a25432de46e5c416b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7ASC4XE%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQddD3CbvPkhuLHla5ozLUpP0Yw%2B4CJE2v1uUsuSRNuAiEA0N2ujgTq%2FFc257gJ8vFvW2ex1WiYRTTFxAE85KzmxQUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA7O0IJp5CV31VpuoSrcA2be7CHjqpVMzSIQbHv%2FHxO4ZV59X2fEcOKBVaArEhRD4JcP5bf80tgq1f2mrhJKzQZZZF5uTTeJwMJntJxP3LuvD5hdjzgP0umRr1JhCchj2OzBldwVmpImjk9esKbvJ3o8HbzYVDWr%2Fo36jcnZhv7ZaiQpGUjuA64zTFy4AsyEsS63xzf5IWtNa%2BZK485nB8zP%2FzTH777HvQDbKp1YHpH596uo86cm6%2BFMt6hN%2BgFBzahSx40RQ9rwX6sp9G%2BJv29JMM1m0dbLPZWGuWJWXMzDJyrge38Vu3wfl16DXgJHebfa5t0B1vXMVdWWXN9hx%2B%2FeOoCPTyFHWBpU87F4JQQl4gQhDeg2z%2FX7zUJKnFbAs8yEAoFzWbyGyjWziccTqewqxc%2Bjlcy7y%2Bnjv8mhtl1sxlmy%2B8YPvuAYIBJrJwxGyUJKlVmMa4%2FXD9ca3oYhUSC0wi0Vid4nlZFlvfAUL6gj3WEMSVq%2FYGqYM7ya4I02K8%2FaFSaHlA3MFT8%2FcPoiZ0xrEMDbnD%2BKH03pkVPpItPdaOnJc4JvKWgK7YW5QiTg5gMlgvKPQrU16yogkFMFpJlxGbQp94Ez2uUXHVr8WYqfAtmaZUPJNkLS945Ck%2BrWPZJ602ysa2JBRqd9MITdtcsGOqUBKIRgknNpjNfEgWGJ5M5VaZCUmrmeWcJfqKHGPSrmhXGrHHGY5QmI9yVEHytsIE74ay0MvTEy2V41enIndJCSrrT8spumD9oWR0Mi1R0yQpO2Mdp8NboPIO7zlpadn3TDcRbA08oBmYaNG8tnT7yX04%2FXnM7VoYTcQQ4ADICN6gKzapJhEisxmxinPh0jSmJjw%2BvIzHdN2AiCIdkpNc%2B9F1EQwHXY&X-Amz-Signature=0f497e8a7d426a86403910dfde32b88b62b64334dfb3446ede27888d6d535fe8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7ASC4XE%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQddD3CbvPkhuLHla5ozLUpP0Yw%2B4CJE2v1uUsuSRNuAiEA0N2ujgTq%2FFc257gJ8vFvW2ex1WiYRTTFxAE85KzmxQUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA7O0IJp5CV31VpuoSrcA2be7CHjqpVMzSIQbHv%2FHxO4ZV59X2fEcOKBVaArEhRD4JcP5bf80tgq1f2mrhJKzQZZZF5uTTeJwMJntJxP3LuvD5hdjzgP0umRr1JhCchj2OzBldwVmpImjk9esKbvJ3o8HbzYVDWr%2Fo36jcnZhv7ZaiQpGUjuA64zTFy4AsyEsS63xzf5IWtNa%2BZK485nB8zP%2FzTH777HvQDbKp1YHpH596uo86cm6%2BFMt6hN%2BgFBzahSx40RQ9rwX6sp9G%2BJv29JMM1m0dbLPZWGuWJWXMzDJyrge38Vu3wfl16DXgJHebfa5t0B1vXMVdWWXN9hx%2B%2FeOoCPTyFHWBpU87F4JQQl4gQhDeg2z%2FX7zUJKnFbAs8yEAoFzWbyGyjWziccTqewqxc%2Bjlcy7y%2Bnjv8mhtl1sxlmy%2B8YPvuAYIBJrJwxGyUJKlVmMa4%2FXD9ca3oYhUSC0wi0Vid4nlZFlvfAUL6gj3WEMSVq%2FYGqYM7ya4I02K8%2FaFSaHlA3MFT8%2FcPoiZ0xrEMDbnD%2BKH03pkVPpItPdaOnJc4JvKWgK7YW5QiTg5gMlgvKPQrU16yogkFMFpJlxGbQp94Ez2uUXHVr8WYqfAtmaZUPJNkLS945Ck%2BrWPZJ602ysa2JBRqd9MITdtcsGOqUBKIRgknNpjNfEgWGJ5M5VaZCUmrmeWcJfqKHGPSrmhXGrHHGY5QmI9yVEHytsIE74ay0MvTEy2V41enIndJCSrrT8spumD9oWR0Mi1R0yQpO2Mdp8NboPIO7zlpadn3TDcRbA08oBmYaNG8tnT7yX04%2FXnM7VoYTcQQ4ADICN6gKzapJhEisxmxinPh0jSmJjw%2BvIzHdN2AiCIdkpNc%2B9F1EQwHXY&X-Amz-Signature=4ab9bf8c3eb3518b2c6843ee2b99081f4910f41686bfc6bb5218fbbbada3fb36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7ASC4XE%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQddD3CbvPkhuLHla5ozLUpP0Yw%2B4CJE2v1uUsuSRNuAiEA0N2ujgTq%2FFc257gJ8vFvW2ex1WiYRTTFxAE85KzmxQUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA7O0IJp5CV31VpuoSrcA2be7CHjqpVMzSIQbHv%2FHxO4ZV59X2fEcOKBVaArEhRD4JcP5bf80tgq1f2mrhJKzQZZZF5uTTeJwMJntJxP3LuvD5hdjzgP0umRr1JhCchj2OzBldwVmpImjk9esKbvJ3o8HbzYVDWr%2Fo36jcnZhv7ZaiQpGUjuA64zTFy4AsyEsS63xzf5IWtNa%2BZK485nB8zP%2FzTH777HvQDbKp1YHpH596uo86cm6%2BFMt6hN%2BgFBzahSx40RQ9rwX6sp9G%2BJv29JMM1m0dbLPZWGuWJWXMzDJyrge38Vu3wfl16DXgJHebfa5t0B1vXMVdWWXN9hx%2B%2FeOoCPTyFHWBpU87F4JQQl4gQhDeg2z%2FX7zUJKnFbAs8yEAoFzWbyGyjWziccTqewqxc%2Bjlcy7y%2Bnjv8mhtl1sxlmy%2B8YPvuAYIBJrJwxGyUJKlVmMa4%2FXD9ca3oYhUSC0wi0Vid4nlZFlvfAUL6gj3WEMSVq%2FYGqYM7ya4I02K8%2FaFSaHlA3MFT8%2FcPoiZ0xrEMDbnD%2BKH03pkVPpItPdaOnJc4JvKWgK7YW5QiTg5gMlgvKPQrU16yogkFMFpJlxGbQp94Ez2uUXHVr8WYqfAtmaZUPJNkLS945Ck%2BrWPZJ602ysa2JBRqd9MITdtcsGOqUBKIRgknNpjNfEgWGJ5M5VaZCUmrmeWcJfqKHGPSrmhXGrHHGY5QmI9yVEHytsIE74ay0MvTEy2V41enIndJCSrrT8spumD9oWR0Mi1R0yQpO2Mdp8NboPIO7zlpadn3TDcRbA08oBmYaNG8tnT7yX04%2FXnM7VoYTcQQ4ADICN6gKzapJhEisxmxinPh0jSmJjw%2BvIzHdN2AiCIdkpNc%2B9F1EQwHXY&X-Amz-Signature=8a6cc5477f6401d34c4136c2a195413f5d8714bfd23a58a153012ad98ce3a235&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
