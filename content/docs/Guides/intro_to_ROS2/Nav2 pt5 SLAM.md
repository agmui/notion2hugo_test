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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGYXDY5J%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCID%2FPa7JPtxReNci8t82E3e32q6XcbxCn%2B%2FtoZNBGPYzVAiEA86ozFcSqxmmBTk4UtIQfcSorxAqPqTw6%2FLCqYhW1Gf8q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDDYaI%2Bx8ik8m2fi%2FIircA7OwjiA7fCb9c0cCoCGufVnTW5QtyqFlUUSsFyis80asE%2FbOhrIYZmQ0OLbdOBa0GEkVp6avrGRSqIn0Bmz6XIGFK%2Bp9P7YCIfF6wJljUgYn1h52i6rcpPUIDcp3KYre2Ikbsh3gUrbhH8W1gjv0HhzHx0WF%2FlhUX1noLmtvRuoAtRzGDu%2BQh40JQ61SVm3294W1Fd2t9E%2FNuuPAK5enI9C7SaBK9EpvwKDBWW5kb0%2F1604y7TWTODnVBSHy4OAEFsHcyxSVs2iwyRMJXJDlajJy3JpS%2Br8dzhIEJYbWVl2%2BVFhzS8pe7%2BxMLTxPXB%2FAfrtjAGT0Wuxs0%2FShs9WFv9J%2BvCvZFt5JV3mDpl7Bsp8jkWdfyaWz8EK%2BPQtEXdtF1nUDWoNAhKKS5wHWLWqT17f2db4t7JegrgPUnSOtGim2S7D9gY6GxiE1nWFOkRsAN2R7pqCyqwynprvRauFTvCqqu5Tbkl%2Bk89uSOjEdSL6M5i0MhVUnGmHAayITCAZmyxA%2BhQKayko5UtN1CarGjL8GTgRX42AkmN%2BKdIoEgcBtPyMT2fSZQUOlPZR5IfA9PhfaFARivySVzTpJr5R3A2IdaDwKduy876qoqqnIzFXliVmKifFdK%2BIAWFYEMOXC%2BMQGOqUBAAxQOQMv%2BxVvDBpUWXFJlOlbLpf%2Bk4Fa%2BecLUJXynedDFlz9ljvqYNQ4EA7sEOp2lEnLGSCM9K4zVCm0G6KIczbj%2FarNDN8nPmc%2FbcajsYwRUWS6aLi98DdIqDzd6i1ZYQ6X%2BQ%2BO65HcfM8BPu0Wa82NroXBj2HFSqhYDMQmyoq7Bwzwji1rmq8BJhLhOhB3vcOws3B%2FFeDlLXghu4Rx5eLbwCGi&X-Amz-Signature=68a6ff5821cd0bf19a2caab373c0e79b207c5a7b373ac83ef538c8ef6832ef9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGYXDY5J%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCID%2FPa7JPtxReNci8t82E3e32q6XcbxCn%2B%2FtoZNBGPYzVAiEA86ozFcSqxmmBTk4UtIQfcSorxAqPqTw6%2FLCqYhW1Gf8q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDDYaI%2Bx8ik8m2fi%2FIircA7OwjiA7fCb9c0cCoCGufVnTW5QtyqFlUUSsFyis80asE%2FbOhrIYZmQ0OLbdOBa0GEkVp6avrGRSqIn0Bmz6XIGFK%2Bp9P7YCIfF6wJljUgYn1h52i6rcpPUIDcp3KYre2Ikbsh3gUrbhH8W1gjv0HhzHx0WF%2FlhUX1noLmtvRuoAtRzGDu%2BQh40JQ61SVm3294W1Fd2t9E%2FNuuPAK5enI9C7SaBK9EpvwKDBWW5kb0%2F1604y7TWTODnVBSHy4OAEFsHcyxSVs2iwyRMJXJDlajJy3JpS%2Br8dzhIEJYbWVl2%2BVFhzS8pe7%2BxMLTxPXB%2FAfrtjAGT0Wuxs0%2FShs9WFv9J%2BvCvZFt5JV3mDpl7Bsp8jkWdfyaWz8EK%2BPQtEXdtF1nUDWoNAhKKS5wHWLWqT17f2db4t7JegrgPUnSOtGim2S7D9gY6GxiE1nWFOkRsAN2R7pqCyqwynprvRauFTvCqqu5Tbkl%2Bk89uSOjEdSL6M5i0MhVUnGmHAayITCAZmyxA%2BhQKayko5UtN1CarGjL8GTgRX42AkmN%2BKdIoEgcBtPyMT2fSZQUOlPZR5IfA9PhfaFARivySVzTpJr5R3A2IdaDwKduy876qoqqnIzFXliVmKifFdK%2BIAWFYEMOXC%2BMQGOqUBAAxQOQMv%2BxVvDBpUWXFJlOlbLpf%2Bk4Fa%2BecLUJXynedDFlz9ljvqYNQ4EA7sEOp2lEnLGSCM9K4zVCm0G6KIczbj%2FarNDN8nPmc%2FbcajsYwRUWS6aLi98DdIqDzd6i1ZYQ6X%2BQ%2BO65HcfM8BPu0Wa82NroXBj2HFSqhYDMQmyoq7Bwzwji1rmq8BJhLhOhB3vcOws3B%2FFeDlLXghu4Rx5eLbwCGi&X-Amz-Signature=06f14bae5ae4ff17542a322fbbdadf440fe5f6497c63bb5e22c6ae3e589d8511&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGYXDY5J%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCID%2FPa7JPtxReNci8t82E3e32q6XcbxCn%2B%2FtoZNBGPYzVAiEA86ozFcSqxmmBTk4UtIQfcSorxAqPqTw6%2FLCqYhW1Gf8q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDDYaI%2Bx8ik8m2fi%2FIircA7OwjiA7fCb9c0cCoCGufVnTW5QtyqFlUUSsFyis80asE%2FbOhrIYZmQ0OLbdOBa0GEkVp6avrGRSqIn0Bmz6XIGFK%2Bp9P7YCIfF6wJljUgYn1h52i6rcpPUIDcp3KYre2Ikbsh3gUrbhH8W1gjv0HhzHx0WF%2FlhUX1noLmtvRuoAtRzGDu%2BQh40JQ61SVm3294W1Fd2t9E%2FNuuPAK5enI9C7SaBK9EpvwKDBWW5kb0%2F1604y7TWTODnVBSHy4OAEFsHcyxSVs2iwyRMJXJDlajJy3JpS%2Br8dzhIEJYbWVl2%2BVFhzS8pe7%2BxMLTxPXB%2FAfrtjAGT0Wuxs0%2FShs9WFv9J%2BvCvZFt5JV3mDpl7Bsp8jkWdfyaWz8EK%2BPQtEXdtF1nUDWoNAhKKS5wHWLWqT17f2db4t7JegrgPUnSOtGim2S7D9gY6GxiE1nWFOkRsAN2R7pqCyqwynprvRauFTvCqqu5Tbkl%2Bk89uSOjEdSL6M5i0MhVUnGmHAayITCAZmyxA%2BhQKayko5UtN1CarGjL8GTgRX42AkmN%2BKdIoEgcBtPyMT2fSZQUOlPZR5IfA9PhfaFARivySVzTpJr5R3A2IdaDwKduy876qoqqnIzFXliVmKifFdK%2BIAWFYEMOXC%2BMQGOqUBAAxQOQMv%2BxVvDBpUWXFJlOlbLpf%2Bk4Fa%2BecLUJXynedDFlz9ljvqYNQ4EA7sEOp2lEnLGSCM9K4zVCm0G6KIczbj%2FarNDN8nPmc%2FbcajsYwRUWS6aLi98DdIqDzd6i1ZYQ6X%2BQ%2BO65HcfM8BPu0Wa82NroXBj2HFSqhYDMQmyoq7Bwzwji1rmq8BJhLhOhB3vcOws3B%2FFeDlLXghu4Rx5eLbwCGi&X-Amz-Signature=c16f09e35460cc3c66d59b19fd89374bfe35532639bd664db6234cb8955bd2f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGYXDY5J%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCID%2FPa7JPtxReNci8t82E3e32q6XcbxCn%2B%2FtoZNBGPYzVAiEA86ozFcSqxmmBTk4UtIQfcSorxAqPqTw6%2FLCqYhW1Gf8q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDDYaI%2Bx8ik8m2fi%2FIircA7OwjiA7fCb9c0cCoCGufVnTW5QtyqFlUUSsFyis80asE%2FbOhrIYZmQ0OLbdOBa0GEkVp6avrGRSqIn0Bmz6XIGFK%2Bp9P7YCIfF6wJljUgYn1h52i6rcpPUIDcp3KYre2Ikbsh3gUrbhH8W1gjv0HhzHx0WF%2FlhUX1noLmtvRuoAtRzGDu%2BQh40JQ61SVm3294W1Fd2t9E%2FNuuPAK5enI9C7SaBK9EpvwKDBWW5kb0%2F1604y7TWTODnVBSHy4OAEFsHcyxSVs2iwyRMJXJDlajJy3JpS%2Br8dzhIEJYbWVl2%2BVFhzS8pe7%2BxMLTxPXB%2FAfrtjAGT0Wuxs0%2FShs9WFv9J%2BvCvZFt5JV3mDpl7Bsp8jkWdfyaWz8EK%2BPQtEXdtF1nUDWoNAhKKS5wHWLWqT17f2db4t7JegrgPUnSOtGim2S7D9gY6GxiE1nWFOkRsAN2R7pqCyqwynprvRauFTvCqqu5Tbkl%2Bk89uSOjEdSL6M5i0MhVUnGmHAayITCAZmyxA%2BhQKayko5UtN1CarGjL8GTgRX42AkmN%2BKdIoEgcBtPyMT2fSZQUOlPZR5IfA9PhfaFARivySVzTpJr5R3A2IdaDwKduy876qoqqnIzFXliVmKifFdK%2BIAWFYEMOXC%2BMQGOqUBAAxQOQMv%2BxVvDBpUWXFJlOlbLpf%2Bk4Fa%2BecLUJXynedDFlz9ljvqYNQ4EA7sEOp2lEnLGSCM9K4zVCm0G6KIczbj%2FarNDN8nPmc%2FbcajsYwRUWS6aLi98DdIqDzd6i1ZYQ6X%2BQ%2BO65HcfM8BPu0Wa82NroXBj2HFSqhYDMQmyoq7Bwzwji1rmq8BJhLhOhB3vcOws3B%2FFeDlLXghu4Rx5eLbwCGi&X-Amz-Signature=eb29f9dff9f3d2b0c5d7abf2cf1932ced0486e4db392bddd4e27d47742620354&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGYXDY5J%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCID%2FPa7JPtxReNci8t82E3e32q6XcbxCn%2B%2FtoZNBGPYzVAiEA86ozFcSqxmmBTk4UtIQfcSorxAqPqTw6%2FLCqYhW1Gf8q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDDYaI%2Bx8ik8m2fi%2FIircA7OwjiA7fCb9c0cCoCGufVnTW5QtyqFlUUSsFyis80asE%2FbOhrIYZmQ0OLbdOBa0GEkVp6avrGRSqIn0Bmz6XIGFK%2Bp9P7YCIfF6wJljUgYn1h52i6rcpPUIDcp3KYre2Ikbsh3gUrbhH8W1gjv0HhzHx0WF%2FlhUX1noLmtvRuoAtRzGDu%2BQh40JQ61SVm3294W1Fd2t9E%2FNuuPAK5enI9C7SaBK9EpvwKDBWW5kb0%2F1604y7TWTODnVBSHy4OAEFsHcyxSVs2iwyRMJXJDlajJy3JpS%2Br8dzhIEJYbWVl2%2BVFhzS8pe7%2BxMLTxPXB%2FAfrtjAGT0Wuxs0%2FShs9WFv9J%2BvCvZFt5JV3mDpl7Bsp8jkWdfyaWz8EK%2BPQtEXdtF1nUDWoNAhKKS5wHWLWqT17f2db4t7JegrgPUnSOtGim2S7D9gY6GxiE1nWFOkRsAN2R7pqCyqwynprvRauFTvCqqu5Tbkl%2Bk89uSOjEdSL6M5i0MhVUnGmHAayITCAZmyxA%2BhQKayko5UtN1CarGjL8GTgRX42AkmN%2BKdIoEgcBtPyMT2fSZQUOlPZR5IfA9PhfaFARivySVzTpJr5R3A2IdaDwKduy876qoqqnIzFXliVmKifFdK%2BIAWFYEMOXC%2BMQGOqUBAAxQOQMv%2BxVvDBpUWXFJlOlbLpf%2Bk4Fa%2BecLUJXynedDFlz9ljvqYNQ4EA7sEOp2lEnLGSCM9K4zVCm0G6KIczbj%2FarNDN8nPmc%2FbcajsYwRUWS6aLi98DdIqDzd6i1ZYQ6X%2BQ%2BO65HcfM8BPu0Wa82NroXBj2HFSqhYDMQmyoq7Bwzwji1rmq8BJhLhOhB3vcOws3B%2FFeDlLXghu4Rx5eLbwCGi&X-Amz-Signature=7cee598fa2e0075122d8aa5f3b6501ae95ab7e1ca211e657590d6b448cae7ab7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGYXDY5J%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCID%2FPa7JPtxReNci8t82E3e32q6XcbxCn%2B%2FtoZNBGPYzVAiEA86ozFcSqxmmBTk4UtIQfcSorxAqPqTw6%2FLCqYhW1Gf8q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDDYaI%2Bx8ik8m2fi%2FIircA7OwjiA7fCb9c0cCoCGufVnTW5QtyqFlUUSsFyis80asE%2FbOhrIYZmQ0OLbdOBa0GEkVp6avrGRSqIn0Bmz6XIGFK%2Bp9P7YCIfF6wJljUgYn1h52i6rcpPUIDcp3KYre2Ikbsh3gUrbhH8W1gjv0HhzHx0WF%2FlhUX1noLmtvRuoAtRzGDu%2BQh40JQ61SVm3294W1Fd2t9E%2FNuuPAK5enI9C7SaBK9EpvwKDBWW5kb0%2F1604y7TWTODnVBSHy4OAEFsHcyxSVs2iwyRMJXJDlajJy3JpS%2Br8dzhIEJYbWVl2%2BVFhzS8pe7%2BxMLTxPXB%2FAfrtjAGT0Wuxs0%2FShs9WFv9J%2BvCvZFt5JV3mDpl7Bsp8jkWdfyaWz8EK%2BPQtEXdtF1nUDWoNAhKKS5wHWLWqT17f2db4t7JegrgPUnSOtGim2S7D9gY6GxiE1nWFOkRsAN2R7pqCyqwynprvRauFTvCqqu5Tbkl%2Bk89uSOjEdSL6M5i0MhVUnGmHAayITCAZmyxA%2BhQKayko5UtN1CarGjL8GTgRX42AkmN%2BKdIoEgcBtPyMT2fSZQUOlPZR5IfA9PhfaFARivySVzTpJr5R3A2IdaDwKduy876qoqqnIzFXliVmKifFdK%2BIAWFYEMOXC%2BMQGOqUBAAxQOQMv%2BxVvDBpUWXFJlOlbLpf%2Bk4Fa%2BecLUJXynedDFlz9ljvqYNQ4EA7sEOp2lEnLGSCM9K4zVCm0G6KIczbj%2FarNDN8nPmc%2FbcajsYwRUWS6aLi98DdIqDzd6i1ZYQ6X%2BQ%2BO65HcfM8BPu0Wa82NroXBj2HFSqhYDMQmyoq7Bwzwji1rmq8BJhLhOhB3vcOws3B%2FFeDlLXghu4Rx5eLbwCGi&X-Amz-Signature=3b552d9dc861ddf903924ced6e038893e8b798a9e9d07fd1ce298ed5372bec82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGYXDY5J%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCID%2FPa7JPtxReNci8t82E3e32q6XcbxCn%2B%2FtoZNBGPYzVAiEA86ozFcSqxmmBTk4UtIQfcSorxAqPqTw6%2FLCqYhW1Gf8q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDDYaI%2Bx8ik8m2fi%2FIircA7OwjiA7fCb9c0cCoCGufVnTW5QtyqFlUUSsFyis80asE%2FbOhrIYZmQ0OLbdOBa0GEkVp6avrGRSqIn0Bmz6XIGFK%2Bp9P7YCIfF6wJljUgYn1h52i6rcpPUIDcp3KYre2Ikbsh3gUrbhH8W1gjv0HhzHx0WF%2FlhUX1noLmtvRuoAtRzGDu%2BQh40JQ61SVm3294W1Fd2t9E%2FNuuPAK5enI9C7SaBK9EpvwKDBWW5kb0%2F1604y7TWTODnVBSHy4OAEFsHcyxSVs2iwyRMJXJDlajJy3JpS%2Br8dzhIEJYbWVl2%2BVFhzS8pe7%2BxMLTxPXB%2FAfrtjAGT0Wuxs0%2FShs9WFv9J%2BvCvZFt5JV3mDpl7Bsp8jkWdfyaWz8EK%2BPQtEXdtF1nUDWoNAhKKS5wHWLWqT17f2db4t7JegrgPUnSOtGim2S7D9gY6GxiE1nWFOkRsAN2R7pqCyqwynprvRauFTvCqqu5Tbkl%2Bk89uSOjEdSL6M5i0MhVUnGmHAayITCAZmyxA%2BhQKayko5UtN1CarGjL8GTgRX42AkmN%2BKdIoEgcBtPyMT2fSZQUOlPZR5IfA9PhfaFARivySVzTpJr5R3A2IdaDwKduy876qoqqnIzFXliVmKifFdK%2BIAWFYEMOXC%2BMQGOqUBAAxQOQMv%2BxVvDBpUWXFJlOlbLpf%2Bk4Fa%2BecLUJXynedDFlz9ljvqYNQ4EA7sEOp2lEnLGSCM9K4zVCm0G6KIczbj%2FarNDN8nPmc%2FbcajsYwRUWS6aLi98DdIqDzd6i1ZYQ6X%2BQ%2BO65HcfM8BPu0Wa82NroXBj2HFSqhYDMQmyoq7Bwzwji1rmq8BJhLhOhB3vcOws3B%2FFeDlLXghu4Rx5eLbwCGi&X-Amz-Signature=42a44fe7c7f650a1e0d5e468e4040461ff6125cd9e0a57b8f971864bbdba5f2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGYXDY5J%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCID%2FPa7JPtxReNci8t82E3e32q6XcbxCn%2B%2FtoZNBGPYzVAiEA86ozFcSqxmmBTk4UtIQfcSorxAqPqTw6%2FLCqYhW1Gf8q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDDYaI%2Bx8ik8m2fi%2FIircA7OwjiA7fCb9c0cCoCGufVnTW5QtyqFlUUSsFyis80asE%2FbOhrIYZmQ0OLbdOBa0GEkVp6avrGRSqIn0Bmz6XIGFK%2Bp9P7YCIfF6wJljUgYn1h52i6rcpPUIDcp3KYre2Ikbsh3gUrbhH8W1gjv0HhzHx0WF%2FlhUX1noLmtvRuoAtRzGDu%2BQh40JQ61SVm3294W1Fd2t9E%2FNuuPAK5enI9C7SaBK9EpvwKDBWW5kb0%2F1604y7TWTODnVBSHy4OAEFsHcyxSVs2iwyRMJXJDlajJy3JpS%2Br8dzhIEJYbWVl2%2BVFhzS8pe7%2BxMLTxPXB%2FAfrtjAGT0Wuxs0%2FShs9WFv9J%2BvCvZFt5JV3mDpl7Bsp8jkWdfyaWz8EK%2BPQtEXdtF1nUDWoNAhKKS5wHWLWqT17f2db4t7JegrgPUnSOtGim2S7D9gY6GxiE1nWFOkRsAN2R7pqCyqwynprvRauFTvCqqu5Tbkl%2Bk89uSOjEdSL6M5i0MhVUnGmHAayITCAZmyxA%2BhQKayko5UtN1CarGjL8GTgRX42AkmN%2BKdIoEgcBtPyMT2fSZQUOlPZR5IfA9PhfaFARivySVzTpJr5R3A2IdaDwKduy876qoqqnIzFXliVmKifFdK%2BIAWFYEMOXC%2BMQGOqUBAAxQOQMv%2BxVvDBpUWXFJlOlbLpf%2Bk4Fa%2BecLUJXynedDFlz9ljvqYNQ4EA7sEOp2lEnLGSCM9K4zVCm0G6KIczbj%2FarNDN8nPmc%2FbcajsYwRUWS6aLi98DdIqDzd6i1ZYQ6X%2BQ%2BO65HcfM8BPu0Wa82NroXBj2HFSqhYDMQmyoq7Bwzwji1rmq8BJhLhOhB3vcOws3B%2FFeDlLXghu4Rx5eLbwCGi&X-Amz-Signature=53c13d6ad06f63b4e9bfbb6b059ccab18761fadc7db398fa99ae7338ff93030c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGYXDY5J%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCID%2FPa7JPtxReNci8t82E3e32q6XcbxCn%2B%2FtoZNBGPYzVAiEA86ozFcSqxmmBTk4UtIQfcSorxAqPqTw6%2FLCqYhW1Gf8q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDDYaI%2Bx8ik8m2fi%2FIircA7OwjiA7fCb9c0cCoCGufVnTW5QtyqFlUUSsFyis80asE%2FbOhrIYZmQ0OLbdOBa0GEkVp6avrGRSqIn0Bmz6XIGFK%2Bp9P7YCIfF6wJljUgYn1h52i6rcpPUIDcp3KYre2Ikbsh3gUrbhH8W1gjv0HhzHx0WF%2FlhUX1noLmtvRuoAtRzGDu%2BQh40JQ61SVm3294W1Fd2t9E%2FNuuPAK5enI9C7SaBK9EpvwKDBWW5kb0%2F1604y7TWTODnVBSHy4OAEFsHcyxSVs2iwyRMJXJDlajJy3JpS%2Br8dzhIEJYbWVl2%2BVFhzS8pe7%2BxMLTxPXB%2FAfrtjAGT0Wuxs0%2FShs9WFv9J%2BvCvZFt5JV3mDpl7Bsp8jkWdfyaWz8EK%2BPQtEXdtF1nUDWoNAhKKS5wHWLWqT17f2db4t7JegrgPUnSOtGim2S7D9gY6GxiE1nWFOkRsAN2R7pqCyqwynprvRauFTvCqqu5Tbkl%2Bk89uSOjEdSL6M5i0MhVUnGmHAayITCAZmyxA%2BhQKayko5UtN1CarGjL8GTgRX42AkmN%2BKdIoEgcBtPyMT2fSZQUOlPZR5IfA9PhfaFARivySVzTpJr5R3A2IdaDwKduy876qoqqnIzFXliVmKifFdK%2BIAWFYEMOXC%2BMQGOqUBAAxQOQMv%2BxVvDBpUWXFJlOlbLpf%2Bk4Fa%2BecLUJXynedDFlz9ljvqYNQ4EA7sEOp2lEnLGSCM9K4zVCm0G6KIczbj%2FarNDN8nPmc%2FbcajsYwRUWS6aLi98DdIqDzd6i1ZYQ6X%2BQ%2BO65HcfM8BPu0Wa82NroXBj2HFSqhYDMQmyoq7Bwzwji1rmq8BJhLhOhB3vcOws3B%2FFeDlLXghu4Rx5eLbwCGi&X-Amz-Signature=6b26481dfa6dfc6613e4c751a817ad131d4590ca79f5c4ef7c595f38346eaa3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGYXDY5J%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCID%2FPa7JPtxReNci8t82E3e32q6XcbxCn%2B%2FtoZNBGPYzVAiEA86ozFcSqxmmBTk4UtIQfcSorxAqPqTw6%2FLCqYhW1Gf8q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDDYaI%2Bx8ik8m2fi%2FIircA7OwjiA7fCb9c0cCoCGufVnTW5QtyqFlUUSsFyis80asE%2FbOhrIYZmQ0OLbdOBa0GEkVp6avrGRSqIn0Bmz6XIGFK%2Bp9P7YCIfF6wJljUgYn1h52i6rcpPUIDcp3KYre2Ikbsh3gUrbhH8W1gjv0HhzHx0WF%2FlhUX1noLmtvRuoAtRzGDu%2BQh40JQ61SVm3294W1Fd2t9E%2FNuuPAK5enI9C7SaBK9EpvwKDBWW5kb0%2F1604y7TWTODnVBSHy4OAEFsHcyxSVs2iwyRMJXJDlajJy3JpS%2Br8dzhIEJYbWVl2%2BVFhzS8pe7%2BxMLTxPXB%2FAfrtjAGT0Wuxs0%2FShs9WFv9J%2BvCvZFt5JV3mDpl7Bsp8jkWdfyaWz8EK%2BPQtEXdtF1nUDWoNAhKKS5wHWLWqT17f2db4t7JegrgPUnSOtGim2S7D9gY6GxiE1nWFOkRsAN2R7pqCyqwynprvRauFTvCqqu5Tbkl%2Bk89uSOjEdSL6M5i0MhVUnGmHAayITCAZmyxA%2BhQKayko5UtN1CarGjL8GTgRX42AkmN%2BKdIoEgcBtPyMT2fSZQUOlPZR5IfA9PhfaFARivySVzTpJr5R3A2IdaDwKduy876qoqqnIzFXliVmKifFdK%2BIAWFYEMOXC%2BMQGOqUBAAxQOQMv%2BxVvDBpUWXFJlOlbLpf%2Bk4Fa%2BecLUJXynedDFlz9ljvqYNQ4EA7sEOp2lEnLGSCM9K4zVCm0G6KIczbj%2FarNDN8nPmc%2FbcajsYwRUWS6aLi98DdIqDzd6i1ZYQ6X%2BQ%2BO65HcfM8BPu0Wa82NroXBj2HFSqhYDMQmyoq7Bwzwji1rmq8BJhLhOhB3vcOws3B%2FFeDlLXghu4Rx5eLbwCGi&X-Amz-Signature=ef4f6c7147272a58d1395505f18e289d8ab685b0a386a2c36879f7f780cf08d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGYXDY5J%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCID%2FPa7JPtxReNci8t82E3e32q6XcbxCn%2B%2FtoZNBGPYzVAiEA86ozFcSqxmmBTk4UtIQfcSorxAqPqTw6%2FLCqYhW1Gf8q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDDYaI%2Bx8ik8m2fi%2FIircA7OwjiA7fCb9c0cCoCGufVnTW5QtyqFlUUSsFyis80asE%2FbOhrIYZmQ0OLbdOBa0GEkVp6avrGRSqIn0Bmz6XIGFK%2Bp9P7YCIfF6wJljUgYn1h52i6rcpPUIDcp3KYre2Ikbsh3gUrbhH8W1gjv0HhzHx0WF%2FlhUX1noLmtvRuoAtRzGDu%2BQh40JQ61SVm3294W1Fd2t9E%2FNuuPAK5enI9C7SaBK9EpvwKDBWW5kb0%2F1604y7TWTODnVBSHy4OAEFsHcyxSVs2iwyRMJXJDlajJy3JpS%2Br8dzhIEJYbWVl2%2BVFhzS8pe7%2BxMLTxPXB%2FAfrtjAGT0Wuxs0%2FShs9WFv9J%2BvCvZFt5JV3mDpl7Bsp8jkWdfyaWz8EK%2BPQtEXdtF1nUDWoNAhKKS5wHWLWqT17f2db4t7JegrgPUnSOtGim2S7D9gY6GxiE1nWFOkRsAN2R7pqCyqwynprvRauFTvCqqu5Tbkl%2Bk89uSOjEdSL6M5i0MhVUnGmHAayITCAZmyxA%2BhQKayko5UtN1CarGjL8GTgRX42AkmN%2BKdIoEgcBtPyMT2fSZQUOlPZR5IfA9PhfaFARivySVzTpJr5R3A2IdaDwKduy876qoqqnIzFXliVmKifFdK%2BIAWFYEMOXC%2BMQGOqUBAAxQOQMv%2BxVvDBpUWXFJlOlbLpf%2Bk4Fa%2BecLUJXynedDFlz9ljvqYNQ4EA7sEOp2lEnLGSCM9K4zVCm0G6KIczbj%2FarNDN8nPmc%2FbcajsYwRUWS6aLi98DdIqDzd6i1ZYQ6X%2BQ%2BO65HcfM8BPu0Wa82NroXBj2HFSqhYDMQmyoq7Bwzwji1rmq8BJhLhOhB3vcOws3B%2FFeDlLXghu4Rx5eLbwCGi&X-Amz-Signature=5c163c9e5745ec41d3dc16889450d3b78b4abc53229d05020c04d0744a1d88ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGYXDY5J%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCID%2FPa7JPtxReNci8t82E3e32q6XcbxCn%2B%2FtoZNBGPYzVAiEA86ozFcSqxmmBTk4UtIQfcSorxAqPqTw6%2FLCqYhW1Gf8q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDDYaI%2Bx8ik8m2fi%2FIircA7OwjiA7fCb9c0cCoCGufVnTW5QtyqFlUUSsFyis80asE%2FbOhrIYZmQ0OLbdOBa0GEkVp6avrGRSqIn0Bmz6XIGFK%2Bp9P7YCIfF6wJljUgYn1h52i6rcpPUIDcp3KYre2Ikbsh3gUrbhH8W1gjv0HhzHx0WF%2FlhUX1noLmtvRuoAtRzGDu%2BQh40JQ61SVm3294W1Fd2t9E%2FNuuPAK5enI9C7SaBK9EpvwKDBWW5kb0%2F1604y7TWTODnVBSHy4OAEFsHcyxSVs2iwyRMJXJDlajJy3JpS%2Br8dzhIEJYbWVl2%2BVFhzS8pe7%2BxMLTxPXB%2FAfrtjAGT0Wuxs0%2FShs9WFv9J%2BvCvZFt5JV3mDpl7Bsp8jkWdfyaWz8EK%2BPQtEXdtF1nUDWoNAhKKS5wHWLWqT17f2db4t7JegrgPUnSOtGim2S7D9gY6GxiE1nWFOkRsAN2R7pqCyqwynprvRauFTvCqqu5Tbkl%2Bk89uSOjEdSL6M5i0MhVUnGmHAayITCAZmyxA%2BhQKayko5UtN1CarGjL8GTgRX42AkmN%2BKdIoEgcBtPyMT2fSZQUOlPZR5IfA9PhfaFARivySVzTpJr5R3A2IdaDwKduy876qoqqnIzFXliVmKifFdK%2BIAWFYEMOXC%2BMQGOqUBAAxQOQMv%2BxVvDBpUWXFJlOlbLpf%2Bk4Fa%2BecLUJXynedDFlz9ljvqYNQ4EA7sEOp2lEnLGSCM9K4zVCm0G6KIczbj%2FarNDN8nPmc%2FbcajsYwRUWS6aLi98DdIqDzd6i1ZYQ6X%2BQ%2BO65HcfM8BPu0Wa82NroXBj2HFSqhYDMQmyoq7Bwzwji1rmq8BJhLhOhB3vcOws3B%2FFeDlLXghu4Rx5eLbwCGi&X-Amz-Signature=791715ddb32a7496cab5c2201237eaef062c7afd4e0c424aaf0da12faa0d85d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGYXDY5J%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCID%2FPa7JPtxReNci8t82E3e32q6XcbxCn%2B%2FtoZNBGPYzVAiEA86ozFcSqxmmBTk4UtIQfcSorxAqPqTw6%2FLCqYhW1Gf8q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDDYaI%2Bx8ik8m2fi%2FIircA7OwjiA7fCb9c0cCoCGufVnTW5QtyqFlUUSsFyis80asE%2FbOhrIYZmQ0OLbdOBa0GEkVp6avrGRSqIn0Bmz6XIGFK%2Bp9P7YCIfF6wJljUgYn1h52i6rcpPUIDcp3KYre2Ikbsh3gUrbhH8W1gjv0HhzHx0WF%2FlhUX1noLmtvRuoAtRzGDu%2BQh40JQ61SVm3294W1Fd2t9E%2FNuuPAK5enI9C7SaBK9EpvwKDBWW5kb0%2F1604y7TWTODnVBSHy4OAEFsHcyxSVs2iwyRMJXJDlajJy3JpS%2Br8dzhIEJYbWVl2%2BVFhzS8pe7%2BxMLTxPXB%2FAfrtjAGT0Wuxs0%2FShs9WFv9J%2BvCvZFt5JV3mDpl7Bsp8jkWdfyaWz8EK%2BPQtEXdtF1nUDWoNAhKKS5wHWLWqT17f2db4t7JegrgPUnSOtGim2S7D9gY6GxiE1nWFOkRsAN2R7pqCyqwynprvRauFTvCqqu5Tbkl%2Bk89uSOjEdSL6M5i0MhVUnGmHAayITCAZmyxA%2BhQKayko5UtN1CarGjL8GTgRX42AkmN%2BKdIoEgcBtPyMT2fSZQUOlPZR5IfA9PhfaFARivySVzTpJr5R3A2IdaDwKduy876qoqqnIzFXliVmKifFdK%2BIAWFYEMOXC%2BMQGOqUBAAxQOQMv%2BxVvDBpUWXFJlOlbLpf%2Bk4Fa%2BecLUJXynedDFlz9ljvqYNQ4EA7sEOp2lEnLGSCM9K4zVCm0G6KIczbj%2FarNDN8nPmc%2FbcajsYwRUWS6aLi98DdIqDzd6i1ZYQ6X%2BQ%2BO65HcfM8BPu0Wa82NroXBj2HFSqhYDMQmyoq7Bwzwji1rmq8BJhLhOhB3vcOws3B%2FFeDlLXghu4Rx5eLbwCGi&X-Amz-Signature=53341b8ba04a2c51a18f634651e23502c33abc4dad24400a5f8395019dc6214d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGYXDY5J%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCID%2FPa7JPtxReNci8t82E3e32q6XcbxCn%2B%2FtoZNBGPYzVAiEA86ozFcSqxmmBTk4UtIQfcSorxAqPqTw6%2FLCqYhW1Gf8q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDDYaI%2Bx8ik8m2fi%2FIircA7OwjiA7fCb9c0cCoCGufVnTW5QtyqFlUUSsFyis80asE%2FbOhrIYZmQ0OLbdOBa0GEkVp6avrGRSqIn0Bmz6XIGFK%2Bp9P7YCIfF6wJljUgYn1h52i6rcpPUIDcp3KYre2Ikbsh3gUrbhH8W1gjv0HhzHx0WF%2FlhUX1noLmtvRuoAtRzGDu%2BQh40JQ61SVm3294W1Fd2t9E%2FNuuPAK5enI9C7SaBK9EpvwKDBWW5kb0%2F1604y7TWTODnVBSHy4OAEFsHcyxSVs2iwyRMJXJDlajJy3JpS%2Br8dzhIEJYbWVl2%2BVFhzS8pe7%2BxMLTxPXB%2FAfrtjAGT0Wuxs0%2FShs9WFv9J%2BvCvZFt5JV3mDpl7Bsp8jkWdfyaWz8EK%2BPQtEXdtF1nUDWoNAhKKS5wHWLWqT17f2db4t7JegrgPUnSOtGim2S7D9gY6GxiE1nWFOkRsAN2R7pqCyqwynprvRauFTvCqqu5Tbkl%2Bk89uSOjEdSL6M5i0MhVUnGmHAayITCAZmyxA%2BhQKayko5UtN1CarGjL8GTgRX42AkmN%2BKdIoEgcBtPyMT2fSZQUOlPZR5IfA9PhfaFARivySVzTpJr5R3A2IdaDwKduy876qoqqnIzFXliVmKifFdK%2BIAWFYEMOXC%2BMQGOqUBAAxQOQMv%2BxVvDBpUWXFJlOlbLpf%2Bk4Fa%2BecLUJXynedDFlz9ljvqYNQ4EA7sEOp2lEnLGSCM9K4zVCm0G6KIczbj%2FarNDN8nPmc%2FbcajsYwRUWS6aLi98DdIqDzd6i1ZYQ6X%2BQ%2BO65HcfM8BPu0Wa82NroXBj2HFSqhYDMQmyoq7Bwzwji1rmq8BJhLhOhB3vcOws3B%2FFeDlLXghu4Rx5eLbwCGi&X-Amz-Signature=ec28c2a6ccc1cbb8214ed0a827b5504a91fc5defcadf0af7cca7de97f0354cec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
