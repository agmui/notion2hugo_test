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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMLC5EUV%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDdzU2yxDcl0u1d1AUJ3kYF9n52mgwyFfqIW56lAnbcEgIgeBH7xAVAO9wlyj%2BsFNA%2Bl2GOYGre8puxxIug5qz5oZIq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFlOWoY27A7VaXaT%2BircA7c8r%2B1p5qdPw12G%2BqvobzlL%2Fl7dZzxwLaW4Rfhlr1ScAXSUMSTsNNZZhGF%2Bjk3w13%2B1fVt42KvA3jpOVHz7nxG75SoJGscGF2IcNFCqPyNnq8JM9F946GSRkw8qBcGNF9IxyyJKWRS%2F04Qg3ZWAqHnZKFF3iLd%2BwJ19rwO6T4t%2FFAxNQlpjylXKG06OVU0ZLn5e0e1flrUgX9A9zVqsukA7dYJP6gZGKJcTFgH7lChTeWYMO09SGSgDs6VuTsNobDIPJJzLToHT%2FXnd3nZTqgFM6ebcWvARAnbRmlDA3lxIU%2FaXh4cEYnwR3%2FJ5NO9FcEWr3Dx7RdzpnBKr4ewD%2Bpjw%2BSLSZD45zp5bo6qG3i00apu0L8ufK3nbv5NeA6mBKgb%2B%2Bzmg8kyBiiKFhT5w6BL0mcCF%2BY7N78CyBwjY4LPIkJNwUaRHz7q2P8KqqTDGJbjwZVDo82owzcvqnU1pioaXdCxlq0ZED2G%2BRxLBH4Hys1dCb7fCUMunkEVTPiX0WPiJfLO4mMTAiy4rDY9xSO90HjklA1AzUbHU5ALrOmA8fHb1m1Q1I1Fd0Vew2kJCpmO3iuIFKGh%2BVnxsp%2FYjlyqc5BiJqqffKoak%2FWKuI%2FcOFuzBDdTEmMT20RXdMIP4gMUGOqUBhNC4sha8vsLeE%2BwDITbey3iLz3oSM9ZIm0YIjX13UD4BizcOM11OD5WmvlbV2Y7iU3PtczFNsjKnreoLcW%2FX62Md%2FN0IY3Z173PwkMGt3badhPv8ext61neT19lbz9Gzv25D1iMa3xlhO8pd23mlKlotW58rsk1rs4utzkGPpW8QWxMWfa2wmXLmQ27hM5vRMbhC3aNxroxWCHgHGhEEUw86RS%2B5&X-Amz-Signature=7dcc737b5e99cfac6e3ba2f15f8824d977c049ad24739934f5627ffb8741c5f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMLC5EUV%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDdzU2yxDcl0u1d1AUJ3kYF9n52mgwyFfqIW56lAnbcEgIgeBH7xAVAO9wlyj%2BsFNA%2Bl2GOYGre8puxxIug5qz5oZIq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFlOWoY27A7VaXaT%2BircA7c8r%2B1p5qdPw12G%2BqvobzlL%2Fl7dZzxwLaW4Rfhlr1ScAXSUMSTsNNZZhGF%2Bjk3w13%2B1fVt42KvA3jpOVHz7nxG75SoJGscGF2IcNFCqPyNnq8JM9F946GSRkw8qBcGNF9IxyyJKWRS%2F04Qg3ZWAqHnZKFF3iLd%2BwJ19rwO6T4t%2FFAxNQlpjylXKG06OVU0ZLn5e0e1flrUgX9A9zVqsukA7dYJP6gZGKJcTFgH7lChTeWYMO09SGSgDs6VuTsNobDIPJJzLToHT%2FXnd3nZTqgFM6ebcWvARAnbRmlDA3lxIU%2FaXh4cEYnwR3%2FJ5NO9FcEWr3Dx7RdzpnBKr4ewD%2Bpjw%2BSLSZD45zp5bo6qG3i00apu0L8ufK3nbv5NeA6mBKgb%2B%2Bzmg8kyBiiKFhT5w6BL0mcCF%2BY7N78CyBwjY4LPIkJNwUaRHz7q2P8KqqTDGJbjwZVDo82owzcvqnU1pioaXdCxlq0ZED2G%2BRxLBH4Hys1dCb7fCUMunkEVTPiX0WPiJfLO4mMTAiy4rDY9xSO90HjklA1AzUbHU5ALrOmA8fHb1m1Q1I1Fd0Vew2kJCpmO3iuIFKGh%2BVnxsp%2FYjlyqc5BiJqqffKoak%2FWKuI%2FcOFuzBDdTEmMT20RXdMIP4gMUGOqUBhNC4sha8vsLeE%2BwDITbey3iLz3oSM9ZIm0YIjX13UD4BizcOM11OD5WmvlbV2Y7iU3PtczFNsjKnreoLcW%2FX62Md%2FN0IY3Z173PwkMGt3badhPv8ext61neT19lbz9Gzv25D1iMa3xlhO8pd23mlKlotW58rsk1rs4utzkGPpW8QWxMWfa2wmXLmQ27hM5vRMbhC3aNxroxWCHgHGhEEUw86RS%2B5&X-Amz-Signature=0f05d2e07e48feab5568d3d7afbcc4e12e06a97d8c879313e0ce6eb9830c4560&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMLC5EUV%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDdzU2yxDcl0u1d1AUJ3kYF9n52mgwyFfqIW56lAnbcEgIgeBH7xAVAO9wlyj%2BsFNA%2Bl2GOYGre8puxxIug5qz5oZIq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFlOWoY27A7VaXaT%2BircA7c8r%2B1p5qdPw12G%2BqvobzlL%2Fl7dZzxwLaW4Rfhlr1ScAXSUMSTsNNZZhGF%2Bjk3w13%2B1fVt42KvA3jpOVHz7nxG75SoJGscGF2IcNFCqPyNnq8JM9F946GSRkw8qBcGNF9IxyyJKWRS%2F04Qg3ZWAqHnZKFF3iLd%2BwJ19rwO6T4t%2FFAxNQlpjylXKG06OVU0ZLn5e0e1flrUgX9A9zVqsukA7dYJP6gZGKJcTFgH7lChTeWYMO09SGSgDs6VuTsNobDIPJJzLToHT%2FXnd3nZTqgFM6ebcWvARAnbRmlDA3lxIU%2FaXh4cEYnwR3%2FJ5NO9FcEWr3Dx7RdzpnBKr4ewD%2Bpjw%2BSLSZD45zp5bo6qG3i00apu0L8ufK3nbv5NeA6mBKgb%2B%2Bzmg8kyBiiKFhT5w6BL0mcCF%2BY7N78CyBwjY4LPIkJNwUaRHz7q2P8KqqTDGJbjwZVDo82owzcvqnU1pioaXdCxlq0ZED2G%2BRxLBH4Hys1dCb7fCUMunkEVTPiX0WPiJfLO4mMTAiy4rDY9xSO90HjklA1AzUbHU5ALrOmA8fHb1m1Q1I1Fd0Vew2kJCpmO3iuIFKGh%2BVnxsp%2FYjlyqc5BiJqqffKoak%2FWKuI%2FcOFuzBDdTEmMT20RXdMIP4gMUGOqUBhNC4sha8vsLeE%2BwDITbey3iLz3oSM9ZIm0YIjX13UD4BizcOM11OD5WmvlbV2Y7iU3PtczFNsjKnreoLcW%2FX62Md%2FN0IY3Z173PwkMGt3badhPv8ext61neT19lbz9Gzv25D1iMa3xlhO8pd23mlKlotW58rsk1rs4utzkGPpW8QWxMWfa2wmXLmQ27hM5vRMbhC3aNxroxWCHgHGhEEUw86RS%2B5&X-Amz-Signature=5a227325689de488841cceabe8cbee831edfc01b266f6697de080cc06a482f13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMLC5EUV%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDdzU2yxDcl0u1d1AUJ3kYF9n52mgwyFfqIW56lAnbcEgIgeBH7xAVAO9wlyj%2BsFNA%2Bl2GOYGre8puxxIug5qz5oZIq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFlOWoY27A7VaXaT%2BircA7c8r%2B1p5qdPw12G%2BqvobzlL%2Fl7dZzxwLaW4Rfhlr1ScAXSUMSTsNNZZhGF%2Bjk3w13%2B1fVt42KvA3jpOVHz7nxG75SoJGscGF2IcNFCqPyNnq8JM9F946GSRkw8qBcGNF9IxyyJKWRS%2F04Qg3ZWAqHnZKFF3iLd%2BwJ19rwO6T4t%2FFAxNQlpjylXKG06OVU0ZLn5e0e1flrUgX9A9zVqsukA7dYJP6gZGKJcTFgH7lChTeWYMO09SGSgDs6VuTsNobDIPJJzLToHT%2FXnd3nZTqgFM6ebcWvARAnbRmlDA3lxIU%2FaXh4cEYnwR3%2FJ5NO9FcEWr3Dx7RdzpnBKr4ewD%2Bpjw%2BSLSZD45zp5bo6qG3i00apu0L8ufK3nbv5NeA6mBKgb%2B%2Bzmg8kyBiiKFhT5w6BL0mcCF%2BY7N78CyBwjY4LPIkJNwUaRHz7q2P8KqqTDGJbjwZVDo82owzcvqnU1pioaXdCxlq0ZED2G%2BRxLBH4Hys1dCb7fCUMunkEVTPiX0WPiJfLO4mMTAiy4rDY9xSO90HjklA1AzUbHU5ALrOmA8fHb1m1Q1I1Fd0Vew2kJCpmO3iuIFKGh%2BVnxsp%2FYjlyqc5BiJqqffKoak%2FWKuI%2FcOFuzBDdTEmMT20RXdMIP4gMUGOqUBhNC4sha8vsLeE%2BwDITbey3iLz3oSM9ZIm0YIjX13UD4BizcOM11OD5WmvlbV2Y7iU3PtczFNsjKnreoLcW%2FX62Md%2FN0IY3Z173PwkMGt3badhPv8ext61neT19lbz9Gzv25D1iMa3xlhO8pd23mlKlotW58rsk1rs4utzkGPpW8QWxMWfa2wmXLmQ27hM5vRMbhC3aNxroxWCHgHGhEEUw86RS%2B5&X-Amz-Signature=1bd6c58e3d15cf658278ecb66b427f5d9088c1c47f5b18cf4474377dd907005b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMLC5EUV%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDdzU2yxDcl0u1d1AUJ3kYF9n52mgwyFfqIW56lAnbcEgIgeBH7xAVAO9wlyj%2BsFNA%2Bl2GOYGre8puxxIug5qz5oZIq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFlOWoY27A7VaXaT%2BircA7c8r%2B1p5qdPw12G%2BqvobzlL%2Fl7dZzxwLaW4Rfhlr1ScAXSUMSTsNNZZhGF%2Bjk3w13%2B1fVt42KvA3jpOVHz7nxG75SoJGscGF2IcNFCqPyNnq8JM9F946GSRkw8qBcGNF9IxyyJKWRS%2F04Qg3ZWAqHnZKFF3iLd%2BwJ19rwO6T4t%2FFAxNQlpjylXKG06OVU0ZLn5e0e1flrUgX9A9zVqsukA7dYJP6gZGKJcTFgH7lChTeWYMO09SGSgDs6VuTsNobDIPJJzLToHT%2FXnd3nZTqgFM6ebcWvARAnbRmlDA3lxIU%2FaXh4cEYnwR3%2FJ5NO9FcEWr3Dx7RdzpnBKr4ewD%2Bpjw%2BSLSZD45zp5bo6qG3i00apu0L8ufK3nbv5NeA6mBKgb%2B%2Bzmg8kyBiiKFhT5w6BL0mcCF%2BY7N78CyBwjY4LPIkJNwUaRHz7q2P8KqqTDGJbjwZVDo82owzcvqnU1pioaXdCxlq0ZED2G%2BRxLBH4Hys1dCb7fCUMunkEVTPiX0WPiJfLO4mMTAiy4rDY9xSO90HjklA1AzUbHU5ALrOmA8fHb1m1Q1I1Fd0Vew2kJCpmO3iuIFKGh%2BVnxsp%2FYjlyqc5BiJqqffKoak%2FWKuI%2FcOFuzBDdTEmMT20RXdMIP4gMUGOqUBhNC4sha8vsLeE%2BwDITbey3iLz3oSM9ZIm0YIjX13UD4BizcOM11OD5WmvlbV2Y7iU3PtczFNsjKnreoLcW%2FX62Md%2FN0IY3Z173PwkMGt3badhPv8ext61neT19lbz9Gzv25D1iMa3xlhO8pd23mlKlotW58rsk1rs4utzkGPpW8QWxMWfa2wmXLmQ27hM5vRMbhC3aNxroxWCHgHGhEEUw86RS%2B5&X-Amz-Signature=6fce3d3d9c4d3a5b48d92f2090d6b55924eb83c43c740a7417cba2a50385e779&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMLC5EUV%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDdzU2yxDcl0u1d1AUJ3kYF9n52mgwyFfqIW56lAnbcEgIgeBH7xAVAO9wlyj%2BsFNA%2Bl2GOYGre8puxxIug5qz5oZIq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFlOWoY27A7VaXaT%2BircA7c8r%2B1p5qdPw12G%2BqvobzlL%2Fl7dZzxwLaW4Rfhlr1ScAXSUMSTsNNZZhGF%2Bjk3w13%2B1fVt42KvA3jpOVHz7nxG75SoJGscGF2IcNFCqPyNnq8JM9F946GSRkw8qBcGNF9IxyyJKWRS%2F04Qg3ZWAqHnZKFF3iLd%2BwJ19rwO6T4t%2FFAxNQlpjylXKG06OVU0ZLn5e0e1flrUgX9A9zVqsukA7dYJP6gZGKJcTFgH7lChTeWYMO09SGSgDs6VuTsNobDIPJJzLToHT%2FXnd3nZTqgFM6ebcWvARAnbRmlDA3lxIU%2FaXh4cEYnwR3%2FJ5NO9FcEWr3Dx7RdzpnBKr4ewD%2Bpjw%2BSLSZD45zp5bo6qG3i00apu0L8ufK3nbv5NeA6mBKgb%2B%2Bzmg8kyBiiKFhT5w6BL0mcCF%2BY7N78CyBwjY4LPIkJNwUaRHz7q2P8KqqTDGJbjwZVDo82owzcvqnU1pioaXdCxlq0ZED2G%2BRxLBH4Hys1dCb7fCUMunkEVTPiX0WPiJfLO4mMTAiy4rDY9xSO90HjklA1AzUbHU5ALrOmA8fHb1m1Q1I1Fd0Vew2kJCpmO3iuIFKGh%2BVnxsp%2FYjlyqc5BiJqqffKoak%2FWKuI%2FcOFuzBDdTEmMT20RXdMIP4gMUGOqUBhNC4sha8vsLeE%2BwDITbey3iLz3oSM9ZIm0YIjX13UD4BizcOM11OD5WmvlbV2Y7iU3PtczFNsjKnreoLcW%2FX62Md%2FN0IY3Z173PwkMGt3badhPv8ext61neT19lbz9Gzv25D1iMa3xlhO8pd23mlKlotW58rsk1rs4utzkGPpW8QWxMWfa2wmXLmQ27hM5vRMbhC3aNxroxWCHgHGhEEUw86RS%2B5&X-Amz-Signature=851b111af8110928801eb584662a6bcb3aca4e2d36fa0e8dc323826232caa96c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMLC5EUV%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDdzU2yxDcl0u1d1AUJ3kYF9n52mgwyFfqIW56lAnbcEgIgeBH7xAVAO9wlyj%2BsFNA%2Bl2GOYGre8puxxIug5qz5oZIq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFlOWoY27A7VaXaT%2BircA7c8r%2B1p5qdPw12G%2BqvobzlL%2Fl7dZzxwLaW4Rfhlr1ScAXSUMSTsNNZZhGF%2Bjk3w13%2B1fVt42KvA3jpOVHz7nxG75SoJGscGF2IcNFCqPyNnq8JM9F946GSRkw8qBcGNF9IxyyJKWRS%2F04Qg3ZWAqHnZKFF3iLd%2BwJ19rwO6T4t%2FFAxNQlpjylXKG06OVU0ZLn5e0e1flrUgX9A9zVqsukA7dYJP6gZGKJcTFgH7lChTeWYMO09SGSgDs6VuTsNobDIPJJzLToHT%2FXnd3nZTqgFM6ebcWvARAnbRmlDA3lxIU%2FaXh4cEYnwR3%2FJ5NO9FcEWr3Dx7RdzpnBKr4ewD%2Bpjw%2BSLSZD45zp5bo6qG3i00apu0L8ufK3nbv5NeA6mBKgb%2B%2Bzmg8kyBiiKFhT5w6BL0mcCF%2BY7N78CyBwjY4LPIkJNwUaRHz7q2P8KqqTDGJbjwZVDo82owzcvqnU1pioaXdCxlq0ZED2G%2BRxLBH4Hys1dCb7fCUMunkEVTPiX0WPiJfLO4mMTAiy4rDY9xSO90HjklA1AzUbHU5ALrOmA8fHb1m1Q1I1Fd0Vew2kJCpmO3iuIFKGh%2BVnxsp%2FYjlyqc5BiJqqffKoak%2FWKuI%2FcOFuzBDdTEmMT20RXdMIP4gMUGOqUBhNC4sha8vsLeE%2BwDITbey3iLz3oSM9ZIm0YIjX13UD4BizcOM11OD5WmvlbV2Y7iU3PtczFNsjKnreoLcW%2FX62Md%2FN0IY3Z173PwkMGt3badhPv8ext61neT19lbz9Gzv25D1iMa3xlhO8pd23mlKlotW58rsk1rs4utzkGPpW8QWxMWfa2wmXLmQ27hM5vRMbhC3aNxroxWCHgHGhEEUw86RS%2B5&X-Amz-Signature=fceb4d91e0bc3009a2211afae551e7614714e4c9715cd5014394c026abe5152d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMLC5EUV%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDdzU2yxDcl0u1d1AUJ3kYF9n52mgwyFfqIW56lAnbcEgIgeBH7xAVAO9wlyj%2BsFNA%2Bl2GOYGre8puxxIug5qz5oZIq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFlOWoY27A7VaXaT%2BircA7c8r%2B1p5qdPw12G%2BqvobzlL%2Fl7dZzxwLaW4Rfhlr1ScAXSUMSTsNNZZhGF%2Bjk3w13%2B1fVt42KvA3jpOVHz7nxG75SoJGscGF2IcNFCqPyNnq8JM9F946GSRkw8qBcGNF9IxyyJKWRS%2F04Qg3ZWAqHnZKFF3iLd%2BwJ19rwO6T4t%2FFAxNQlpjylXKG06OVU0ZLn5e0e1flrUgX9A9zVqsukA7dYJP6gZGKJcTFgH7lChTeWYMO09SGSgDs6VuTsNobDIPJJzLToHT%2FXnd3nZTqgFM6ebcWvARAnbRmlDA3lxIU%2FaXh4cEYnwR3%2FJ5NO9FcEWr3Dx7RdzpnBKr4ewD%2Bpjw%2BSLSZD45zp5bo6qG3i00apu0L8ufK3nbv5NeA6mBKgb%2B%2Bzmg8kyBiiKFhT5w6BL0mcCF%2BY7N78CyBwjY4LPIkJNwUaRHz7q2P8KqqTDGJbjwZVDo82owzcvqnU1pioaXdCxlq0ZED2G%2BRxLBH4Hys1dCb7fCUMunkEVTPiX0WPiJfLO4mMTAiy4rDY9xSO90HjklA1AzUbHU5ALrOmA8fHb1m1Q1I1Fd0Vew2kJCpmO3iuIFKGh%2BVnxsp%2FYjlyqc5BiJqqffKoak%2FWKuI%2FcOFuzBDdTEmMT20RXdMIP4gMUGOqUBhNC4sha8vsLeE%2BwDITbey3iLz3oSM9ZIm0YIjX13UD4BizcOM11OD5WmvlbV2Y7iU3PtczFNsjKnreoLcW%2FX62Md%2FN0IY3Z173PwkMGt3badhPv8ext61neT19lbz9Gzv25D1iMa3xlhO8pd23mlKlotW58rsk1rs4utzkGPpW8QWxMWfa2wmXLmQ27hM5vRMbhC3aNxroxWCHgHGhEEUw86RS%2B5&X-Amz-Signature=1c7338611cdb1dccf299023c2b5e7f2b27d2b12a9021d24bd610695c25d9f411&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMLC5EUV%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDdzU2yxDcl0u1d1AUJ3kYF9n52mgwyFfqIW56lAnbcEgIgeBH7xAVAO9wlyj%2BsFNA%2Bl2GOYGre8puxxIug5qz5oZIq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFlOWoY27A7VaXaT%2BircA7c8r%2B1p5qdPw12G%2BqvobzlL%2Fl7dZzxwLaW4Rfhlr1ScAXSUMSTsNNZZhGF%2Bjk3w13%2B1fVt42KvA3jpOVHz7nxG75SoJGscGF2IcNFCqPyNnq8JM9F946GSRkw8qBcGNF9IxyyJKWRS%2F04Qg3ZWAqHnZKFF3iLd%2BwJ19rwO6T4t%2FFAxNQlpjylXKG06OVU0ZLn5e0e1flrUgX9A9zVqsukA7dYJP6gZGKJcTFgH7lChTeWYMO09SGSgDs6VuTsNobDIPJJzLToHT%2FXnd3nZTqgFM6ebcWvARAnbRmlDA3lxIU%2FaXh4cEYnwR3%2FJ5NO9FcEWr3Dx7RdzpnBKr4ewD%2Bpjw%2BSLSZD45zp5bo6qG3i00apu0L8ufK3nbv5NeA6mBKgb%2B%2Bzmg8kyBiiKFhT5w6BL0mcCF%2BY7N78CyBwjY4LPIkJNwUaRHz7q2P8KqqTDGJbjwZVDo82owzcvqnU1pioaXdCxlq0ZED2G%2BRxLBH4Hys1dCb7fCUMunkEVTPiX0WPiJfLO4mMTAiy4rDY9xSO90HjklA1AzUbHU5ALrOmA8fHb1m1Q1I1Fd0Vew2kJCpmO3iuIFKGh%2BVnxsp%2FYjlyqc5BiJqqffKoak%2FWKuI%2FcOFuzBDdTEmMT20RXdMIP4gMUGOqUBhNC4sha8vsLeE%2BwDITbey3iLz3oSM9ZIm0YIjX13UD4BizcOM11OD5WmvlbV2Y7iU3PtczFNsjKnreoLcW%2FX62Md%2FN0IY3Z173PwkMGt3badhPv8ext61neT19lbz9Gzv25D1iMa3xlhO8pd23mlKlotW58rsk1rs4utzkGPpW8QWxMWfa2wmXLmQ27hM5vRMbhC3aNxroxWCHgHGhEEUw86RS%2B5&X-Amz-Signature=8bee8268576415f224dfb1e4dbccfc1b69b634f64153efcfe33efcc883e79b1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMLC5EUV%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDdzU2yxDcl0u1d1AUJ3kYF9n52mgwyFfqIW56lAnbcEgIgeBH7xAVAO9wlyj%2BsFNA%2Bl2GOYGre8puxxIug5qz5oZIq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFlOWoY27A7VaXaT%2BircA7c8r%2B1p5qdPw12G%2BqvobzlL%2Fl7dZzxwLaW4Rfhlr1ScAXSUMSTsNNZZhGF%2Bjk3w13%2B1fVt42KvA3jpOVHz7nxG75SoJGscGF2IcNFCqPyNnq8JM9F946GSRkw8qBcGNF9IxyyJKWRS%2F04Qg3ZWAqHnZKFF3iLd%2BwJ19rwO6T4t%2FFAxNQlpjylXKG06OVU0ZLn5e0e1flrUgX9A9zVqsukA7dYJP6gZGKJcTFgH7lChTeWYMO09SGSgDs6VuTsNobDIPJJzLToHT%2FXnd3nZTqgFM6ebcWvARAnbRmlDA3lxIU%2FaXh4cEYnwR3%2FJ5NO9FcEWr3Dx7RdzpnBKr4ewD%2Bpjw%2BSLSZD45zp5bo6qG3i00apu0L8ufK3nbv5NeA6mBKgb%2B%2Bzmg8kyBiiKFhT5w6BL0mcCF%2BY7N78CyBwjY4LPIkJNwUaRHz7q2P8KqqTDGJbjwZVDo82owzcvqnU1pioaXdCxlq0ZED2G%2BRxLBH4Hys1dCb7fCUMunkEVTPiX0WPiJfLO4mMTAiy4rDY9xSO90HjklA1AzUbHU5ALrOmA8fHb1m1Q1I1Fd0Vew2kJCpmO3iuIFKGh%2BVnxsp%2FYjlyqc5BiJqqffKoak%2FWKuI%2FcOFuzBDdTEmMT20RXdMIP4gMUGOqUBhNC4sha8vsLeE%2BwDITbey3iLz3oSM9ZIm0YIjX13UD4BizcOM11OD5WmvlbV2Y7iU3PtczFNsjKnreoLcW%2FX62Md%2FN0IY3Z173PwkMGt3badhPv8ext61neT19lbz9Gzv25D1iMa3xlhO8pd23mlKlotW58rsk1rs4utzkGPpW8QWxMWfa2wmXLmQ27hM5vRMbhC3aNxroxWCHgHGhEEUw86RS%2B5&X-Amz-Signature=454029aa41a4ab49377cace7602ea220062e3e5fd773eb138e91f5e6f73f9b1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMLC5EUV%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDdzU2yxDcl0u1d1AUJ3kYF9n52mgwyFfqIW56lAnbcEgIgeBH7xAVAO9wlyj%2BsFNA%2Bl2GOYGre8puxxIug5qz5oZIq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFlOWoY27A7VaXaT%2BircA7c8r%2B1p5qdPw12G%2BqvobzlL%2Fl7dZzxwLaW4Rfhlr1ScAXSUMSTsNNZZhGF%2Bjk3w13%2B1fVt42KvA3jpOVHz7nxG75SoJGscGF2IcNFCqPyNnq8JM9F946GSRkw8qBcGNF9IxyyJKWRS%2F04Qg3ZWAqHnZKFF3iLd%2BwJ19rwO6T4t%2FFAxNQlpjylXKG06OVU0ZLn5e0e1flrUgX9A9zVqsukA7dYJP6gZGKJcTFgH7lChTeWYMO09SGSgDs6VuTsNobDIPJJzLToHT%2FXnd3nZTqgFM6ebcWvARAnbRmlDA3lxIU%2FaXh4cEYnwR3%2FJ5NO9FcEWr3Dx7RdzpnBKr4ewD%2Bpjw%2BSLSZD45zp5bo6qG3i00apu0L8ufK3nbv5NeA6mBKgb%2B%2Bzmg8kyBiiKFhT5w6BL0mcCF%2BY7N78CyBwjY4LPIkJNwUaRHz7q2P8KqqTDGJbjwZVDo82owzcvqnU1pioaXdCxlq0ZED2G%2BRxLBH4Hys1dCb7fCUMunkEVTPiX0WPiJfLO4mMTAiy4rDY9xSO90HjklA1AzUbHU5ALrOmA8fHb1m1Q1I1Fd0Vew2kJCpmO3iuIFKGh%2BVnxsp%2FYjlyqc5BiJqqffKoak%2FWKuI%2FcOFuzBDdTEmMT20RXdMIP4gMUGOqUBhNC4sha8vsLeE%2BwDITbey3iLz3oSM9ZIm0YIjX13UD4BizcOM11OD5WmvlbV2Y7iU3PtczFNsjKnreoLcW%2FX62Md%2FN0IY3Z173PwkMGt3badhPv8ext61neT19lbz9Gzv25D1iMa3xlhO8pd23mlKlotW58rsk1rs4utzkGPpW8QWxMWfa2wmXLmQ27hM5vRMbhC3aNxroxWCHgHGhEEUw86RS%2B5&X-Amz-Signature=2494c25f08d03a6a2b3c04a410370c1fccfe0f7fe466570aa80e547aaabac1c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMLC5EUV%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDdzU2yxDcl0u1d1AUJ3kYF9n52mgwyFfqIW56lAnbcEgIgeBH7xAVAO9wlyj%2BsFNA%2Bl2GOYGre8puxxIug5qz5oZIq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFlOWoY27A7VaXaT%2BircA7c8r%2B1p5qdPw12G%2BqvobzlL%2Fl7dZzxwLaW4Rfhlr1ScAXSUMSTsNNZZhGF%2Bjk3w13%2B1fVt42KvA3jpOVHz7nxG75SoJGscGF2IcNFCqPyNnq8JM9F946GSRkw8qBcGNF9IxyyJKWRS%2F04Qg3ZWAqHnZKFF3iLd%2BwJ19rwO6T4t%2FFAxNQlpjylXKG06OVU0ZLn5e0e1flrUgX9A9zVqsukA7dYJP6gZGKJcTFgH7lChTeWYMO09SGSgDs6VuTsNobDIPJJzLToHT%2FXnd3nZTqgFM6ebcWvARAnbRmlDA3lxIU%2FaXh4cEYnwR3%2FJ5NO9FcEWr3Dx7RdzpnBKr4ewD%2Bpjw%2BSLSZD45zp5bo6qG3i00apu0L8ufK3nbv5NeA6mBKgb%2B%2Bzmg8kyBiiKFhT5w6BL0mcCF%2BY7N78CyBwjY4LPIkJNwUaRHz7q2P8KqqTDGJbjwZVDo82owzcvqnU1pioaXdCxlq0ZED2G%2BRxLBH4Hys1dCb7fCUMunkEVTPiX0WPiJfLO4mMTAiy4rDY9xSO90HjklA1AzUbHU5ALrOmA8fHb1m1Q1I1Fd0Vew2kJCpmO3iuIFKGh%2BVnxsp%2FYjlyqc5BiJqqffKoak%2FWKuI%2FcOFuzBDdTEmMT20RXdMIP4gMUGOqUBhNC4sha8vsLeE%2BwDITbey3iLz3oSM9ZIm0YIjX13UD4BizcOM11OD5WmvlbV2Y7iU3PtczFNsjKnreoLcW%2FX62Md%2FN0IY3Z173PwkMGt3badhPv8ext61neT19lbz9Gzv25D1iMa3xlhO8pd23mlKlotW58rsk1rs4utzkGPpW8QWxMWfa2wmXLmQ27hM5vRMbhC3aNxroxWCHgHGhEEUw86RS%2B5&X-Amz-Signature=0027fc5612f7b1eb682a01fa40dd238c46e7cf30452823372eefbccbd223b1b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMLC5EUV%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDdzU2yxDcl0u1d1AUJ3kYF9n52mgwyFfqIW56lAnbcEgIgeBH7xAVAO9wlyj%2BsFNA%2Bl2GOYGre8puxxIug5qz5oZIq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFlOWoY27A7VaXaT%2BircA7c8r%2B1p5qdPw12G%2BqvobzlL%2Fl7dZzxwLaW4Rfhlr1ScAXSUMSTsNNZZhGF%2Bjk3w13%2B1fVt42KvA3jpOVHz7nxG75SoJGscGF2IcNFCqPyNnq8JM9F946GSRkw8qBcGNF9IxyyJKWRS%2F04Qg3ZWAqHnZKFF3iLd%2BwJ19rwO6T4t%2FFAxNQlpjylXKG06OVU0ZLn5e0e1flrUgX9A9zVqsukA7dYJP6gZGKJcTFgH7lChTeWYMO09SGSgDs6VuTsNobDIPJJzLToHT%2FXnd3nZTqgFM6ebcWvARAnbRmlDA3lxIU%2FaXh4cEYnwR3%2FJ5NO9FcEWr3Dx7RdzpnBKr4ewD%2Bpjw%2BSLSZD45zp5bo6qG3i00apu0L8ufK3nbv5NeA6mBKgb%2B%2Bzmg8kyBiiKFhT5w6BL0mcCF%2BY7N78CyBwjY4LPIkJNwUaRHz7q2P8KqqTDGJbjwZVDo82owzcvqnU1pioaXdCxlq0ZED2G%2BRxLBH4Hys1dCb7fCUMunkEVTPiX0WPiJfLO4mMTAiy4rDY9xSO90HjklA1AzUbHU5ALrOmA8fHb1m1Q1I1Fd0Vew2kJCpmO3iuIFKGh%2BVnxsp%2FYjlyqc5BiJqqffKoak%2FWKuI%2FcOFuzBDdTEmMT20RXdMIP4gMUGOqUBhNC4sha8vsLeE%2BwDITbey3iLz3oSM9ZIm0YIjX13UD4BizcOM11OD5WmvlbV2Y7iU3PtczFNsjKnreoLcW%2FX62Md%2FN0IY3Z173PwkMGt3badhPv8ext61neT19lbz9Gzv25D1iMa3xlhO8pd23mlKlotW58rsk1rs4utzkGPpW8QWxMWfa2wmXLmQ27hM5vRMbhC3aNxroxWCHgHGhEEUw86RS%2B5&X-Amz-Signature=2e3e0eb91dcedf46fe317246599be0b0ceef1a365adc060d6dd5fc51da30f573&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMLC5EUV%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDdzU2yxDcl0u1d1AUJ3kYF9n52mgwyFfqIW56lAnbcEgIgeBH7xAVAO9wlyj%2BsFNA%2Bl2GOYGre8puxxIug5qz5oZIq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFlOWoY27A7VaXaT%2BircA7c8r%2B1p5qdPw12G%2BqvobzlL%2Fl7dZzxwLaW4Rfhlr1ScAXSUMSTsNNZZhGF%2Bjk3w13%2B1fVt42KvA3jpOVHz7nxG75SoJGscGF2IcNFCqPyNnq8JM9F946GSRkw8qBcGNF9IxyyJKWRS%2F04Qg3ZWAqHnZKFF3iLd%2BwJ19rwO6T4t%2FFAxNQlpjylXKG06OVU0ZLn5e0e1flrUgX9A9zVqsukA7dYJP6gZGKJcTFgH7lChTeWYMO09SGSgDs6VuTsNobDIPJJzLToHT%2FXnd3nZTqgFM6ebcWvARAnbRmlDA3lxIU%2FaXh4cEYnwR3%2FJ5NO9FcEWr3Dx7RdzpnBKr4ewD%2Bpjw%2BSLSZD45zp5bo6qG3i00apu0L8ufK3nbv5NeA6mBKgb%2B%2Bzmg8kyBiiKFhT5w6BL0mcCF%2BY7N78CyBwjY4LPIkJNwUaRHz7q2P8KqqTDGJbjwZVDo82owzcvqnU1pioaXdCxlq0ZED2G%2BRxLBH4Hys1dCb7fCUMunkEVTPiX0WPiJfLO4mMTAiy4rDY9xSO90HjklA1AzUbHU5ALrOmA8fHb1m1Q1I1Fd0Vew2kJCpmO3iuIFKGh%2BVnxsp%2FYjlyqc5BiJqqffKoak%2FWKuI%2FcOFuzBDdTEmMT20RXdMIP4gMUGOqUBhNC4sha8vsLeE%2BwDITbey3iLz3oSM9ZIm0YIjX13UD4BizcOM11OD5WmvlbV2Y7iU3PtczFNsjKnreoLcW%2FX62Md%2FN0IY3Z173PwkMGt3badhPv8ext61neT19lbz9Gzv25D1iMa3xlhO8pd23mlKlotW58rsk1rs4utzkGPpW8QWxMWfa2wmXLmQ27hM5vRMbhC3aNxroxWCHgHGhEEUw86RS%2B5&X-Amz-Signature=3f9e2acff0330edba6fb29c94eddf02f6c4c41646aba5e029cf0e88323e414e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
