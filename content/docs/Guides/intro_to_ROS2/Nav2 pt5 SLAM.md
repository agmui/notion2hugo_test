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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRYHXVMN%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCA0Teckl2Vrh4qYNjhvaS%2BWknOxmWWgW3F4OFTiP%2BU5QIgWSbntzy%2FArDz6x%2FCGMrjPn5AOiTbQRUt5ltP85dkR9sqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFsSkIY7hyOYAhmJyrcA63wA%2BlBcgDLb0neBA6fT2B6Qq%2BW%2FnG1FRTcLnusWhhR4npF0U2sZ79DHaVLr55mB7Oi9NT0e4P2lx%2Fvyx%2FdbfJH24XpJtfZRnm%2FSAd89IwCRzAd2E9fM1NSiubDRIgqEtAKVxIGSmP6D%2Bmw7eMUOxPcRxLfaMiAQzc7prxAW5ZtHS42c%2FSZOjAkGRWUq0L5%2BJI2gXiQBICI8CbHIA2XWOkGpwTQ6m8WgLEZE9Ae%2BBn3gQFuO4gtlBIJ3u5TW6ITWI7p4fFbcoawGPX%2Fc2ehjSwFhyL9%2FnyNXwlehMnaIiw04ZndwQljwAMEzQvjiqAhIdbDXYiKBlpWxdZwz%2FjBbeje1plIDK8194k%2BBmGt4KAx6dJHtcGjg%2FAD1zJY%2Bpznd2yutsmfWFLcypczKjlr15Fw1jJl69b6%2Fb6Huw9jddHZ3VPpMvpMVLCg71vTkGMkHHbDfucqgD7nDvSkRqiW6Pf4k3cAUEPMNhA79TfXPxz75zi08qvYieH59OMpkPWKKWGLq9BKmSNdl3vNz2F7s9kKqTHGrLukXGWkqyRJjj59FeRTIxZBLXqB%2B6g4sGo2k5gnmg2Q6ZJeIMx1XaaLuO%2Fcdq3tuCn4Hvlf%2FBQ5orgpKToloAwXkkrylki1MOOezsUGOqUBKW5f%2ByTtD0Q6SCgZ8wv3sWTkf1%2FRItt4EzrphWK2h7GkHKub2%2Fynq4%2FxMOU%2FGuhFjAYhR36ArdkP5YQc2ZCcd6PnNgmX6GsLykyDZvT35Ay96QXFUjxmEROrcnF54zBueMQ5iLv6383QsejpxsdzzJ6FMZ2x7k34I8t8pShDsULie9nBCmW0rjKmn7gl1UDj68P2dSSlLUynJvfU690hFK5Hy4aE&X-Amz-Signature=1a9ff1a5732708437dea5e6b3a5e0c24ca8cbb949dce2ab876892ae1ada9b428&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRYHXVMN%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCA0Teckl2Vrh4qYNjhvaS%2BWknOxmWWgW3F4OFTiP%2BU5QIgWSbntzy%2FArDz6x%2FCGMrjPn5AOiTbQRUt5ltP85dkR9sqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFsSkIY7hyOYAhmJyrcA63wA%2BlBcgDLb0neBA6fT2B6Qq%2BW%2FnG1FRTcLnusWhhR4npF0U2sZ79DHaVLr55mB7Oi9NT0e4P2lx%2Fvyx%2FdbfJH24XpJtfZRnm%2FSAd89IwCRzAd2E9fM1NSiubDRIgqEtAKVxIGSmP6D%2Bmw7eMUOxPcRxLfaMiAQzc7prxAW5ZtHS42c%2FSZOjAkGRWUq0L5%2BJI2gXiQBICI8CbHIA2XWOkGpwTQ6m8WgLEZE9Ae%2BBn3gQFuO4gtlBIJ3u5TW6ITWI7p4fFbcoawGPX%2Fc2ehjSwFhyL9%2FnyNXwlehMnaIiw04ZndwQljwAMEzQvjiqAhIdbDXYiKBlpWxdZwz%2FjBbeje1plIDK8194k%2BBmGt4KAx6dJHtcGjg%2FAD1zJY%2Bpznd2yutsmfWFLcypczKjlr15Fw1jJl69b6%2Fb6Huw9jddHZ3VPpMvpMVLCg71vTkGMkHHbDfucqgD7nDvSkRqiW6Pf4k3cAUEPMNhA79TfXPxz75zi08qvYieH59OMpkPWKKWGLq9BKmSNdl3vNz2F7s9kKqTHGrLukXGWkqyRJjj59FeRTIxZBLXqB%2B6g4sGo2k5gnmg2Q6ZJeIMx1XaaLuO%2Fcdq3tuCn4Hvlf%2FBQ5orgpKToloAwXkkrylki1MOOezsUGOqUBKW5f%2ByTtD0Q6SCgZ8wv3sWTkf1%2FRItt4EzrphWK2h7GkHKub2%2Fynq4%2FxMOU%2FGuhFjAYhR36ArdkP5YQc2ZCcd6PnNgmX6GsLykyDZvT35Ay96QXFUjxmEROrcnF54zBueMQ5iLv6383QsejpxsdzzJ6FMZ2x7k34I8t8pShDsULie9nBCmW0rjKmn7gl1UDj68P2dSSlLUynJvfU690hFK5Hy4aE&X-Amz-Signature=8d53a5637d56f032e2bbffa3d4127a4895b1de8d7afcba6405c2b37c40827c4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRYHXVMN%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCA0Teckl2Vrh4qYNjhvaS%2BWknOxmWWgW3F4OFTiP%2BU5QIgWSbntzy%2FArDz6x%2FCGMrjPn5AOiTbQRUt5ltP85dkR9sqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFsSkIY7hyOYAhmJyrcA63wA%2BlBcgDLb0neBA6fT2B6Qq%2BW%2FnG1FRTcLnusWhhR4npF0U2sZ79DHaVLr55mB7Oi9NT0e4P2lx%2Fvyx%2FdbfJH24XpJtfZRnm%2FSAd89IwCRzAd2E9fM1NSiubDRIgqEtAKVxIGSmP6D%2Bmw7eMUOxPcRxLfaMiAQzc7prxAW5ZtHS42c%2FSZOjAkGRWUq0L5%2BJI2gXiQBICI8CbHIA2XWOkGpwTQ6m8WgLEZE9Ae%2BBn3gQFuO4gtlBIJ3u5TW6ITWI7p4fFbcoawGPX%2Fc2ehjSwFhyL9%2FnyNXwlehMnaIiw04ZndwQljwAMEzQvjiqAhIdbDXYiKBlpWxdZwz%2FjBbeje1plIDK8194k%2BBmGt4KAx6dJHtcGjg%2FAD1zJY%2Bpznd2yutsmfWFLcypczKjlr15Fw1jJl69b6%2Fb6Huw9jddHZ3VPpMvpMVLCg71vTkGMkHHbDfucqgD7nDvSkRqiW6Pf4k3cAUEPMNhA79TfXPxz75zi08qvYieH59OMpkPWKKWGLq9BKmSNdl3vNz2F7s9kKqTHGrLukXGWkqyRJjj59FeRTIxZBLXqB%2B6g4sGo2k5gnmg2Q6ZJeIMx1XaaLuO%2Fcdq3tuCn4Hvlf%2FBQ5orgpKToloAwXkkrylki1MOOezsUGOqUBKW5f%2ByTtD0Q6SCgZ8wv3sWTkf1%2FRItt4EzrphWK2h7GkHKub2%2Fynq4%2FxMOU%2FGuhFjAYhR36ArdkP5YQc2ZCcd6PnNgmX6GsLykyDZvT35Ay96QXFUjxmEROrcnF54zBueMQ5iLv6383QsejpxsdzzJ6FMZ2x7k34I8t8pShDsULie9nBCmW0rjKmn7gl1UDj68P2dSSlLUynJvfU690hFK5Hy4aE&X-Amz-Signature=920e46edc4738a022bc3c8821675ec200ab1f984efc853a4571716dd099e814b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRYHXVMN%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCA0Teckl2Vrh4qYNjhvaS%2BWknOxmWWgW3F4OFTiP%2BU5QIgWSbntzy%2FArDz6x%2FCGMrjPn5AOiTbQRUt5ltP85dkR9sqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFsSkIY7hyOYAhmJyrcA63wA%2BlBcgDLb0neBA6fT2B6Qq%2BW%2FnG1FRTcLnusWhhR4npF0U2sZ79DHaVLr55mB7Oi9NT0e4P2lx%2Fvyx%2FdbfJH24XpJtfZRnm%2FSAd89IwCRzAd2E9fM1NSiubDRIgqEtAKVxIGSmP6D%2Bmw7eMUOxPcRxLfaMiAQzc7prxAW5ZtHS42c%2FSZOjAkGRWUq0L5%2BJI2gXiQBICI8CbHIA2XWOkGpwTQ6m8WgLEZE9Ae%2BBn3gQFuO4gtlBIJ3u5TW6ITWI7p4fFbcoawGPX%2Fc2ehjSwFhyL9%2FnyNXwlehMnaIiw04ZndwQljwAMEzQvjiqAhIdbDXYiKBlpWxdZwz%2FjBbeje1plIDK8194k%2BBmGt4KAx6dJHtcGjg%2FAD1zJY%2Bpznd2yutsmfWFLcypczKjlr15Fw1jJl69b6%2Fb6Huw9jddHZ3VPpMvpMVLCg71vTkGMkHHbDfucqgD7nDvSkRqiW6Pf4k3cAUEPMNhA79TfXPxz75zi08qvYieH59OMpkPWKKWGLq9BKmSNdl3vNz2F7s9kKqTHGrLukXGWkqyRJjj59FeRTIxZBLXqB%2B6g4sGo2k5gnmg2Q6ZJeIMx1XaaLuO%2Fcdq3tuCn4Hvlf%2FBQ5orgpKToloAwXkkrylki1MOOezsUGOqUBKW5f%2ByTtD0Q6SCgZ8wv3sWTkf1%2FRItt4EzrphWK2h7GkHKub2%2Fynq4%2FxMOU%2FGuhFjAYhR36ArdkP5YQc2ZCcd6PnNgmX6GsLykyDZvT35Ay96QXFUjxmEROrcnF54zBueMQ5iLv6383QsejpxsdzzJ6FMZ2x7k34I8t8pShDsULie9nBCmW0rjKmn7gl1UDj68P2dSSlLUynJvfU690hFK5Hy4aE&X-Amz-Signature=427d3deb6b17066ac52758251542ba6c37bb654193220b2982e3e77fb914d17d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRYHXVMN%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCA0Teckl2Vrh4qYNjhvaS%2BWknOxmWWgW3F4OFTiP%2BU5QIgWSbntzy%2FArDz6x%2FCGMrjPn5AOiTbQRUt5ltP85dkR9sqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFsSkIY7hyOYAhmJyrcA63wA%2BlBcgDLb0neBA6fT2B6Qq%2BW%2FnG1FRTcLnusWhhR4npF0U2sZ79DHaVLr55mB7Oi9NT0e4P2lx%2Fvyx%2FdbfJH24XpJtfZRnm%2FSAd89IwCRzAd2E9fM1NSiubDRIgqEtAKVxIGSmP6D%2Bmw7eMUOxPcRxLfaMiAQzc7prxAW5ZtHS42c%2FSZOjAkGRWUq0L5%2BJI2gXiQBICI8CbHIA2XWOkGpwTQ6m8WgLEZE9Ae%2BBn3gQFuO4gtlBIJ3u5TW6ITWI7p4fFbcoawGPX%2Fc2ehjSwFhyL9%2FnyNXwlehMnaIiw04ZndwQljwAMEzQvjiqAhIdbDXYiKBlpWxdZwz%2FjBbeje1plIDK8194k%2BBmGt4KAx6dJHtcGjg%2FAD1zJY%2Bpznd2yutsmfWFLcypczKjlr15Fw1jJl69b6%2Fb6Huw9jddHZ3VPpMvpMVLCg71vTkGMkHHbDfucqgD7nDvSkRqiW6Pf4k3cAUEPMNhA79TfXPxz75zi08qvYieH59OMpkPWKKWGLq9BKmSNdl3vNz2F7s9kKqTHGrLukXGWkqyRJjj59FeRTIxZBLXqB%2B6g4sGo2k5gnmg2Q6ZJeIMx1XaaLuO%2Fcdq3tuCn4Hvlf%2FBQ5orgpKToloAwXkkrylki1MOOezsUGOqUBKW5f%2ByTtD0Q6SCgZ8wv3sWTkf1%2FRItt4EzrphWK2h7GkHKub2%2Fynq4%2FxMOU%2FGuhFjAYhR36ArdkP5YQc2ZCcd6PnNgmX6GsLykyDZvT35Ay96QXFUjxmEROrcnF54zBueMQ5iLv6383QsejpxsdzzJ6FMZ2x7k34I8t8pShDsULie9nBCmW0rjKmn7gl1UDj68P2dSSlLUynJvfU690hFK5Hy4aE&X-Amz-Signature=fa331a19ca0f5e27de73bea38589eb60ec2331829a8aaafe91c525ced0c179ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRYHXVMN%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCA0Teckl2Vrh4qYNjhvaS%2BWknOxmWWgW3F4OFTiP%2BU5QIgWSbntzy%2FArDz6x%2FCGMrjPn5AOiTbQRUt5ltP85dkR9sqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFsSkIY7hyOYAhmJyrcA63wA%2BlBcgDLb0neBA6fT2B6Qq%2BW%2FnG1FRTcLnusWhhR4npF0U2sZ79DHaVLr55mB7Oi9NT0e4P2lx%2Fvyx%2FdbfJH24XpJtfZRnm%2FSAd89IwCRzAd2E9fM1NSiubDRIgqEtAKVxIGSmP6D%2Bmw7eMUOxPcRxLfaMiAQzc7prxAW5ZtHS42c%2FSZOjAkGRWUq0L5%2BJI2gXiQBICI8CbHIA2XWOkGpwTQ6m8WgLEZE9Ae%2BBn3gQFuO4gtlBIJ3u5TW6ITWI7p4fFbcoawGPX%2Fc2ehjSwFhyL9%2FnyNXwlehMnaIiw04ZndwQljwAMEzQvjiqAhIdbDXYiKBlpWxdZwz%2FjBbeje1plIDK8194k%2BBmGt4KAx6dJHtcGjg%2FAD1zJY%2Bpznd2yutsmfWFLcypczKjlr15Fw1jJl69b6%2Fb6Huw9jddHZ3VPpMvpMVLCg71vTkGMkHHbDfucqgD7nDvSkRqiW6Pf4k3cAUEPMNhA79TfXPxz75zi08qvYieH59OMpkPWKKWGLq9BKmSNdl3vNz2F7s9kKqTHGrLukXGWkqyRJjj59FeRTIxZBLXqB%2B6g4sGo2k5gnmg2Q6ZJeIMx1XaaLuO%2Fcdq3tuCn4Hvlf%2FBQ5orgpKToloAwXkkrylki1MOOezsUGOqUBKW5f%2ByTtD0Q6SCgZ8wv3sWTkf1%2FRItt4EzrphWK2h7GkHKub2%2Fynq4%2FxMOU%2FGuhFjAYhR36ArdkP5YQc2ZCcd6PnNgmX6GsLykyDZvT35Ay96QXFUjxmEROrcnF54zBueMQ5iLv6383QsejpxsdzzJ6FMZ2x7k34I8t8pShDsULie9nBCmW0rjKmn7gl1UDj68P2dSSlLUynJvfU690hFK5Hy4aE&X-Amz-Signature=e9568f1790975f97a03fd9cb2a486ee29f38d459c6abbd331266baffd3ba4eb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRYHXVMN%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCA0Teckl2Vrh4qYNjhvaS%2BWknOxmWWgW3F4OFTiP%2BU5QIgWSbntzy%2FArDz6x%2FCGMrjPn5AOiTbQRUt5ltP85dkR9sqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFsSkIY7hyOYAhmJyrcA63wA%2BlBcgDLb0neBA6fT2B6Qq%2BW%2FnG1FRTcLnusWhhR4npF0U2sZ79DHaVLr55mB7Oi9NT0e4P2lx%2Fvyx%2FdbfJH24XpJtfZRnm%2FSAd89IwCRzAd2E9fM1NSiubDRIgqEtAKVxIGSmP6D%2Bmw7eMUOxPcRxLfaMiAQzc7prxAW5ZtHS42c%2FSZOjAkGRWUq0L5%2BJI2gXiQBICI8CbHIA2XWOkGpwTQ6m8WgLEZE9Ae%2BBn3gQFuO4gtlBIJ3u5TW6ITWI7p4fFbcoawGPX%2Fc2ehjSwFhyL9%2FnyNXwlehMnaIiw04ZndwQljwAMEzQvjiqAhIdbDXYiKBlpWxdZwz%2FjBbeje1plIDK8194k%2BBmGt4KAx6dJHtcGjg%2FAD1zJY%2Bpznd2yutsmfWFLcypczKjlr15Fw1jJl69b6%2Fb6Huw9jddHZ3VPpMvpMVLCg71vTkGMkHHbDfucqgD7nDvSkRqiW6Pf4k3cAUEPMNhA79TfXPxz75zi08qvYieH59OMpkPWKKWGLq9BKmSNdl3vNz2F7s9kKqTHGrLukXGWkqyRJjj59FeRTIxZBLXqB%2B6g4sGo2k5gnmg2Q6ZJeIMx1XaaLuO%2Fcdq3tuCn4Hvlf%2FBQ5orgpKToloAwXkkrylki1MOOezsUGOqUBKW5f%2ByTtD0Q6SCgZ8wv3sWTkf1%2FRItt4EzrphWK2h7GkHKub2%2Fynq4%2FxMOU%2FGuhFjAYhR36ArdkP5YQc2ZCcd6PnNgmX6GsLykyDZvT35Ay96QXFUjxmEROrcnF54zBueMQ5iLv6383QsejpxsdzzJ6FMZ2x7k34I8t8pShDsULie9nBCmW0rjKmn7gl1UDj68P2dSSlLUynJvfU690hFK5Hy4aE&X-Amz-Signature=fc785221d6dc9130922573ce58f6282252b2b9ae4e428a33499a567e610976fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRYHXVMN%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCA0Teckl2Vrh4qYNjhvaS%2BWknOxmWWgW3F4OFTiP%2BU5QIgWSbntzy%2FArDz6x%2FCGMrjPn5AOiTbQRUt5ltP85dkR9sqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFsSkIY7hyOYAhmJyrcA63wA%2BlBcgDLb0neBA6fT2B6Qq%2BW%2FnG1FRTcLnusWhhR4npF0U2sZ79DHaVLr55mB7Oi9NT0e4P2lx%2Fvyx%2FdbfJH24XpJtfZRnm%2FSAd89IwCRzAd2E9fM1NSiubDRIgqEtAKVxIGSmP6D%2Bmw7eMUOxPcRxLfaMiAQzc7prxAW5ZtHS42c%2FSZOjAkGRWUq0L5%2BJI2gXiQBICI8CbHIA2XWOkGpwTQ6m8WgLEZE9Ae%2BBn3gQFuO4gtlBIJ3u5TW6ITWI7p4fFbcoawGPX%2Fc2ehjSwFhyL9%2FnyNXwlehMnaIiw04ZndwQljwAMEzQvjiqAhIdbDXYiKBlpWxdZwz%2FjBbeje1plIDK8194k%2BBmGt4KAx6dJHtcGjg%2FAD1zJY%2Bpznd2yutsmfWFLcypczKjlr15Fw1jJl69b6%2Fb6Huw9jddHZ3VPpMvpMVLCg71vTkGMkHHbDfucqgD7nDvSkRqiW6Pf4k3cAUEPMNhA79TfXPxz75zi08qvYieH59OMpkPWKKWGLq9BKmSNdl3vNz2F7s9kKqTHGrLukXGWkqyRJjj59FeRTIxZBLXqB%2B6g4sGo2k5gnmg2Q6ZJeIMx1XaaLuO%2Fcdq3tuCn4Hvlf%2FBQ5orgpKToloAwXkkrylki1MOOezsUGOqUBKW5f%2ByTtD0Q6SCgZ8wv3sWTkf1%2FRItt4EzrphWK2h7GkHKub2%2Fynq4%2FxMOU%2FGuhFjAYhR36ArdkP5YQc2ZCcd6PnNgmX6GsLykyDZvT35Ay96QXFUjxmEROrcnF54zBueMQ5iLv6383QsejpxsdzzJ6FMZ2x7k34I8t8pShDsULie9nBCmW0rjKmn7gl1UDj68P2dSSlLUynJvfU690hFK5Hy4aE&X-Amz-Signature=2120b0cc1634716c57817f6deef2e91a4668c3885ed36bf58076a4de610545eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRYHXVMN%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCA0Teckl2Vrh4qYNjhvaS%2BWknOxmWWgW3F4OFTiP%2BU5QIgWSbntzy%2FArDz6x%2FCGMrjPn5AOiTbQRUt5ltP85dkR9sqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFsSkIY7hyOYAhmJyrcA63wA%2BlBcgDLb0neBA6fT2B6Qq%2BW%2FnG1FRTcLnusWhhR4npF0U2sZ79DHaVLr55mB7Oi9NT0e4P2lx%2Fvyx%2FdbfJH24XpJtfZRnm%2FSAd89IwCRzAd2E9fM1NSiubDRIgqEtAKVxIGSmP6D%2Bmw7eMUOxPcRxLfaMiAQzc7prxAW5ZtHS42c%2FSZOjAkGRWUq0L5%2BJI2gXiQBICI8CbHIA2XWOkGpwTQ6m8WgLEZE9Ae%2BBn3gQFuO4gtlBIJ3u5TW6ITWI7p4fFbcoawGPX%2Fc2ehjSwFhyL9%2FnyNXwlehMnaIiw04ZndwQljwAMEzQvjiqAhIdbDXYiKBlpWxdZwz%2FjBbeje1plIDK8194k%2BBmGt4KAx6dJHtcGjg%2FAD1zJY%2Bpznd2yutsmfWFLcypczKjlr15Fw1jJl69b6%2Fb6Huw9jddHZ3VPpMvpMVLCg71vTkGMkHHbDfucqgD7nDvSkRqiW6Pf4k3cAUEPMNhA79TfXPxz75zi08qvYieH59OMpkPWKKWGLq9BKmSNdl3vNz2F7s9kKqTHGrLukXGWkqyRJjj59FeRTIxZBLXqB%2B6g4sGo2k5gnmg2Q6ZJeIMx1XaaLuO%2Fcdq3tuCn4Hvlf%2FBQ5orgpKToloAwXkkrylki1MOOezsUGOqUBKW5f%2ByTtD0Q6SCgZ8wv3sWTkf1%2FRItt4EzrphWK2h7GkHKub2%2Fynq4%2FxMOU%2FGuhFjAYhR36ArdkP5YQc2ZCcd6PnNgmX6GsLykyDZvT35Ay96QXFUjxmEROrcnF54zBueMQ5iLv6383QsejpxsdzzJ6FMZ2x7k34I8t8pShDsULie9nBCmW0rjKmn7gl1UDj68P2dSSlLUynJvfU690hFK5Hy4aE&X-Amz-Signature=c35786756ca23e2715d5fd6127ac92ced68a7043826a6ada3899a7389ce5f137&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRYHXVMN%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCA0Teckl2Vrh4qYNjhvaS%2BWknOxmWWgW3F4OFTiP%2BU5QIgWSbntzy%2FArDz6x%2FCGMrjPn5AOiTbQRUt5ltP85dkR9sqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFsSkIY7hyOYAhmJyrcA63wA%2BlBcgDLb0neBA6fT2B6Qq%2BW%2FnG1FRTcLnusWhhR4npF0U2sZ79DHaVLr55mB7Oi9NT0e4P2lx%2Fvyx%2FdbfJH24XpJtfZRnm%2FSAd89IwCRzAd2E9fM1NSiubDRIgqEtAKVxIGSmP6D%2Bmw7eMUOxPcRxLfaMiAQzc7prxAW5ZtHS42c%2FSZOjAkGRWUq0L5%2BJI2gXiQBICI8CbHIA2XWOkGpwTQ6m8WgLEZE9Ae%2BBn3gQFuO4gtlBIJ3u5TW6ITWI7p4fFbcoawGPX%2Fc2ehjSwFhyL9%2FnyNXwlehMnaIiw04ZndwQljwAMEzQvjiqAhIdbDXYiKBlpWxdZwz%2FjBbeje1plIDK8194k%2BBmGt4KAx6dJHtcGjg%2FAD1zJY%2Bpznd2yutsmfWFLcypczKjlr15Fw1jJl69b6%2Fb6Huw9jddHZ3VPpMvpMVLCg71vTkGMkHHbDfucqgD7nDvSkRqiW6Pf4k3cAUEPMNhA79TfXPxz75zi08qvYieH59OMpkPWKKWGLq9BKmSNdl3vNz2F7s9kKqTHGrLukXGWkqyRJjj59FeRTIxZBLXqB%2B6g4sGo2k5gnmg2Q6ZJeIMx1XaaLuO%2Fcdq3tuCn4Hvlf%2FBQ5orgpKToloAwXkkrylki1MOOezsUGOqUBKW5f%2ByTtD0Q6SCgZ8wv3sWTkf1%2FRItt4EzrphWK2h7GkHKub2%2Fynq4%2FxMOU%2FGuhFjAYhR36ArdkP5YQc2ZCcd6PnNgmX6GsLykyDZvT35Ay96QXFUjxmEROrcnF54zBueMQ5iLv6383QsejpxsdzzJ6FMZ2x7k34I8t8pShDsULie9nBCmW0rjKmn7gl1UDj68P2dSSlLUynJvfU690hFK5Hy4aE&X-Amz-Signature=1c542ef3dc2d254c02f80de4fa453c50f437b73e1ecf3aa2080513c79a130c26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRYHXVMN%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCA0Teckl2Vrh4qYNjhvaS%2BWknOxmWWgW3F4OFTiP%2BU5QIgWSbntzy%2FArDz6x%2FCGMrjPn5AOiTbQRUt5ltP85dkR9sqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFsSkIY7hyOYAhmJyrcA63wA%2BlBcgDLb0neBA6fT2B6Qq%2BW%2FnG1FRTcLnusWhhR4npF0U2sZ79DHaVLr55mB7Oi9NT0e4P2lx%2Fvyx%2FdbfJH24XpJtfZRnm%2FSAd89IwCRzAd2E9fM1NSiubDRIgqEtAKVxIGSmP6D%2Bmw7eMUOxPcRxLfaMiAQzc7prxAW5ZtHS42c%2FSZOjAkGRWUq0L5%2BJI2gXiQBICI8CbHIA2XWOkGpwTQ6m8WgLEZE9Ae%2BBn3gQFuO4gtlBIJ3u5TW6ITWI7p4fFbcoawGPX%2Fc2ehjSwFhyL9%2FnyNXwlehMnaIiw04ZndwQljwAMEzQvjiqAhIdbDXYiKBlpWxdZwz%2FjBbeje1plIDK8194k%2BBmGt4KAx6dJHtcGjg%2FAD1zJY%2Bpznd2yutsmfWFLcypczKjlr15Fw1jJl69b6%2Fb6Huw9jddHZ3VPpMvpMVLCg71vTkGMkHHbDfucqgD7nDvSkRqiW6Pf4k3cAUEPMNhA79TfXPxz75zi08qvYieH59OMpkPWKKWGLq9BKmSNdl3vNz2F7s9kKqTHGrLukXGWkqyRJjj59FeRTIxZBLXqB%2B6g4sGo2k5gnmg2Q6ZJeIMx1XaaLuO%2Fcdq3tuCn4Hvlf%2FBQ5orgpKToloAwXkkrylki1MOOezsUGOqUBKW5f%2ByTtD0Q6SCgZ8wv3sWTkf1%2FRItt4EzrphWK2h7GkHKub2%2Fynq4%2FxMOU%2FGuhFjAYhR36ArdkP5YQc2ZCcd6PnNgmX6GsLykyDZvT35Ay96QXFUjxmEROrcnF54zBueMQ5iLv6383QsejpxsdzzJ6FMZ2x7k34I8t8pShDsULie9nBCmW0rjKmn7gl1UDj68P2dSSlLUynJvfU690hFK5Hy4aE&X-Amz-Signature=60639778f00bce9bef5824ce6298fe5c2f5f07f35e6e795bcffa6dbc5953ad0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRYHXVMN%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCA0Teckl2Vrh4qYNjhvaS%2BWknOxmWWgW3F4OFTiP%2BU5QIgWSbntzy%2FArDz6x%2FCGMrjPn5AOiTbQRUt5ltP85dkR9sqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFsSkIY7hyOYAhmJyrcA63wA%2BlBcgDLb0neBA6fT2B6Qq%2BW%2FnG1FRTcLnusWhhR4npF0U2sZ79DHaVLr55mB7Oi9NT0e4P2lx%2Fvyx%2FdbfJH24XpJtfZRnm%2FSAd89IwCRzAd2E9fM1NSiubDRIgqEtAKVxIGSmP6D%2Bmw7eMUOxPcRxLfaMiAQzc7prxAW5ZtHS42c%2FSZOjAkGRWUq0L5%2BJI2gXiQBICI8CbHIA2XWOkGpwTQ6m8WgLEZE9Ae%2BBn3gQFuO4gtlBIJ3u5TW6ITWI7p4fFbcoawGPX%2Fc2ehjSwFhyL9%2FnyNXwlehMnaIiw04ZndwQljwAMEzQvjiqAhIdbDXYiKBlpWxdZwz%2FjBbeje1plIDK8194k%2BBmGt4KAx6dJHtcGjg%2FAD1zJY%2Bpznd2yutsmfWFLcypczKjlr15Fw1jJl69b6%2Fb6Huw9jddHZ3VPpMvpMVLCg71vTkGMkHHbDfucqgD7nDvSkRqiW6Pf4k3cAUEPMNhA79TfXPxz75zi08qvYieH59OMpkPWKKWGLq9BKmSNdl3vNz2F7s9kKqTHGrLukXGWkqyRJjj59FeRTIxZBLXqB%2B6g4sGo2k5gnmg2Q6ZJeIMx1XaaLuO%2Fcdq3tuCn4Hvlf%2FBQ5orgpKToloAwXkkrylki1MOOezsUGOqUBKW5f%2ByTtD0Q6SCgZ8wv3sWTkf1%2FRItt4EzrphWK2h7GkHKub2%2Fynq4%2FxMOU%2FGuhFjAYhR36ArdkP5YQc2ZCcd6PnNgmX6GsLykyDZvT35Ay96QXFUjxmEROrcnF54zBueMQ5iLv6383QsejpxsdzzJ6FMZ2x7k34I8t8pShDsULie9nBCmW0rjKmn7gl1UDj68P2dSSlLUynJvfU690hFK5Hy4aE&X-Amz-Signature=7c70836f491e7520dee1c6f3a2854913475682d3b5076b82fc5691949d02e14f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRYHXVMN%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCA0Teckl2Vrh4qYNjhvaS%2BWknOxmWWgW3F4OFTiP%2BU5QIgWSbntzy%2FArDz6x%2FCGMrjPn5AOiTbQRUt5ltP85dkR9sqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFsSkIY7hyOYAhmJyrcA63wA%2BlBcgDLb0neBA6fT2B6Qq%2BW%2FnG1FRTcLnusWhhR4npF0U2sZ79DHaVLr55mB7Oi9NT0e4P2lx%2Fvyx%2FdbfJH24XpJtfZRnm%2FSAd89IwCRzAd2E9fM1NSiubDRIgqEtAKVxIGSmP6D%2Bmw7eMUOxPcRxLfaMiAQzc7prxAW5ZtHS42c%2FSZOjAkGRWUq0L5%2BJI2gXiQBICI8CbHIA2XWOkGpwTQ6m8WgLEZE9Ae%2BBn3gQFuO4gtlBIJ3u5TW6ITWI7p4fFbcoawGPX%2Fc2ehjSwFhyL9%2FnyNXwlehMnaIiw04ZndwQljwAMEzQvjiqAhIdbDXYiKBlpWxdZwz%2FjBbeje1plIDK8194k%2BBmGt4KAx6dJHtcGjg%2FAD1zJY%2Bpznd2yutsmfWFLcypczKjlr15Fw1jJl69b6%2Fb6Huw9jddHZ3VPpMvpMVLCg71vTkGMkHHbDfucqgD7nDvSkRqiW6Pf4k3cAUEPMNhA79TfXPxz75zi08qvYieH59OMpkPWKKWGLq9BKmSNdl3vNz2F7s9kKqTHGrLukXGWkqyRJjj59FeRTIxZBLXqB%2B6g4sGo2k5gnmg2Q6ZJeIMx1XaaLuO%2Fcdq3tuCn4Hvlf%2FBQ5orgpKToloAwXkkrylki1MOOezsUGOqUBKW5f%2ByTtD0Q6SCgZ8wv3sWTkf1%2FRItt4EzrphWK2h7GkHKub2%2Fynq4%2FxMOU%2FGuhFjAYhR36ArdkP5YQc2ZCcd6PnNgmX6GsLykyDZvT35Ay96QXFUjxmEROrcnF54zBueMQ5iLv6383QsejpxsdzzJ6FMZ2x7k34I8t8pShDsULie9nBCmW0rjKmn7gl1UDj68P2dSSlLUynJvfU690hFK5Hy4aE&X-Amz-Signature=7d94b8238b8ac63e8f6cb8fca32f0c2b1eeebbe6b42cce997bca1eda6f5f8c25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRYHXVMN%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCA0Teckl2Vrh4qYNjhvaS%2BWknOxmWWgW3F4OFTiP%2BU5QIgWSbntzy%2FArDz6x%2FCGMrjPn5AOiTbQRUt5ltP85dkR9sqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFsSkIY7hyOYAhmJyrcA63wA%2BlBcgDLb0neBA6fT2B6Qq%2BW%2FnG1FRTcLnusWhhR4npF0U2sZ79DHaVLr55mB7Oi9NT0e4P2lx%2Fvyx%2FdbfJH24XpJtfZRnm%2FSAd89IwCRzAd2E9fM1NSiubDRIgqEtAKVxIGSmP6D%2Bmw7eMUOxPcRxLfaMiAQzc7prxAW5ZtHS42c%2FSZOjAkGRWUq0L5%2BJI2gXiQBICI8CbHIA2XWOkGpwTQ6m8WgLEZE9Ae%2BBn3gQFuO4gtlBIJ3u5TW6ITWI7p4fFbcoawGPX%2Fc2ehjSwFhyL9%2FnyNXwlehMnaIiw04ZndwQljwAMEzQvjiqAhIdbDXYiKBlpWxdZwz%2FjBbeje1plIDK8194k%2BBmGt4KAx6dJHtcGjg%2FAD1zJY%2Bpznd2yutsmfWFLcypczKjlr15Fw1jJl69b6%2Fb6Huw9jddHZ3VPpMvpMVLCg71vTkGMkHHbDfucqgD7nDvSkRqiW6Pf4k3cAUEPMNhA79TfXPxz75zi08qvYieH59OMpkPWKKWGLq9BKmSNdl3vNz2F7s9kKqTHGrLukXGWkqyRJjj59FeRTIxZBLXqB%2B6g4sGo2k5gnmg2Q6ZJeIMx1XaaLuO%2Fcdq3tuCn4Hvlf%2FBQ5orgpKToloAwXkkrylki1MOOezsUGOqUBKW5f%2ByTtD0Q6SCgZ8wv3sWTkf1%2FRItt4EzrphWK2h7GkHKub2%2Fynq4%2FxMOU%2FGuhFjAYhR36ArdkP5YQc2ZCcd6PnNgmX6GsLykyDZvT35Ay96QXFUjxmEROrcnF54zBueMQ5iLv6383QsejpxsdzzJ6FMZ2x7k34I8t8pShDsULie9nBCmW0rjKmn7gl1UDj68P2dSSlLUynJvfU690hFK5Hy4aE&X-Amz-Signature=9bba19f041967fc2c3b75dcd21f210197c8ff626fa1f48bcfc0f673247f33bf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
