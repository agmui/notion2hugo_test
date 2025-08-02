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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622E6PH6X%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmf1cLL3vi1XXp7rGbTuxSRftbgOtzMmCaSG8eB0GitAIhAJIUY4GGHIBGWyp8GLyXr9XEMX0Vb5UPR5MQELwvwEImKv8DCBYQABoMNjM3NDIzMTgzODA1IgwLfChXRcTiATlCQJkq3AMoz2Ywkg5yFwxfNu48xJexw0%2FKUQQp%2FnB%2BNSRsETYkediyXYrXsY8ksi5nOJlULFxSttLydPcv5fEHeFOI9IytcM0ITjhm0WjRxMZlNgjc389bka5u%2BFR2JKjMzySGIi2rnGS4RY46RhSIggqBlCfsFRVloKJWl0HbFtJQ3jhj3tbg1vHdqTINBosZ9kRv89jHkatou5AgR43FMadMZAgojcibm5CtrByS5Y6vC%2FLGUgNPfnLAxGGnakUsAl%2B0obtLNMxvnH3BlS34YRGPuMDwPYKH4%2BukxEXSWAjaFugYQRUMOA%2BoHDNpHqWMoIurYoAUV5aM3WStxD4mClD6mPwnM0anR%2F9RknxnvSD7ryxRkat86OeWE2ywfQh%2BBGjiT7HUpSQITJiJBbDvaMUmZPlyrtKf2bE1UXZR3AQZQvUacGt%2FncFVHKoG3V17S4NsZ%2B3tyW0UJ4OO1YUDMRVMJHNlSTZlH4F0jdyvvMjSahn4tU786wu5ZC4LFhDK%2FOSlYLsDvIBTNed61yZ1%2BT1ANgK8bGjB1BxwNJziZ1FCZbIuQw9WUsfwLEtJU8XWmZZ2Onk1RraXyG93V8EaosIEDyhmoChtdvfzPA%2FHLgorfEIqDOEQafNZVJnbyYHHYzDxlLjEBjqkAXdTWg2W8r7kTU27SgfTntlCtK%2BHsMoM3NJWd8hhj%2BJoBvFGbaGUKjnqr6yJAhaa2tZJeyYB3OIcJsj9A%2FdmIGeGYzMC18VGWxbWQJwz4cHHlqE7h5aILfc9WTC5b96dA0dCDWyyByUY%2BnRpPnIB4NeoLXyCkuTODpUxJCnao6nr62v23sP3uepnxLFzO117CMLFAEdMgnb%2BoPNXNSC%2BH7X757wu&X-Amz-Signature=dc2238783c631abe0dcd6e71b479a32ccadadba6087e0e74d5dc02f862d25ab6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622E6PH6X%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmf1cLL3vi1XXp7rGbTuxSRftbgOtzMmCaSG8eB0GitAIhAJIUY4GGHIBGWyp8GLyXr9XEMX0Vb5UPR5MQELwvwEImKv8DCBYQABoMNjM3NDIzMTgzODA1IgwLfChXRcTiATlCQJkq3AMoz2Ywkg5yFwxfNu48xJexw0%2FKUQQp%2FnB%2BNSRsETYkediyXYrXsY8ksi5nOJlULFxSttLydPcv5fEHeFOI9IytcM0ITjhm0WjRxMZlNgjc389bka5u%2BFR2JKjMzySGIi2rnGS4RY46RhSIggqBlCfsFRVloKJWl0HbFtJQ3jhj3tbg1vHdqTINBosZ9kRv89jHkatou5AgR43FMadMZAgojcibm5CtrByS5Y6vC%2FLGUgNPfnLAxGGnakUsAl%2B0obtLNMxvnH3BlS34YRGPuMDwPYKH4%2BukxEXSWAjaFugYQRUMOA%2BoHDNpHqWMoIurYoAUV5aM3WStxD4mClD6mPwnM0anR%2F9RknxnvSD7ryxRkat86OeWE2ywfQh%2BBGjiT7HUpSQITJiJBbDvaMUmZPlyrtKf2bE1UXZR3AQZQvUacGt%2FncFVHKoG3V17S4NsZ%2B3tyW0UJ4OO1YUDMRVMJHNlSTZlH4F0jdyvvMjSahn4tU786wu5ZC4LFhDK%2FOSlYLsDvIBTNed61yZ1%2BT1ANgK8bGjB1BxwNJziZ1FCZbIuQw9WUsfwLEtJU8XWmZZ2Onk1RraXyG93V8EaosIEDyhmoChtdvfzPA%2FHLgorfEIqDOEQafNZVJnbyYHHYzDxlLjEBjqkAXdTWg2W8r7kTU27SgfTntlCtK%2BHsMoM3NJWd8hhj%2BJoBvFGbaGUKjnqr6yJAhaa2tZJeyYB3OIcJsj9A%2FdmIGeGYzMC18VGWxbWQJwz4cHHlqE7h5aILfc9WTC5b96dA0dCDWyyByUY%2BnRpPnIB4NeoLXyCkuTODpUxJCnao6nr62v23sP3uepnxLFzO117CMLFAEdMgnb%2BoPNXNSC%2BH7X757wu&X-Amz-Signature=0da8787a239a0b07f0613fac690991ec6387cf97efa87b000f94facb493e843d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622E6PH6X%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmf1cLL3vi1XXp7rGbTuxSRftbgOtzMmCaSG8eB0GitAIhAJIUY4GGHIBGWyp8GLyXr9XEMX0Vb5UPR5MQELwvwEImKv8DCBYQABoMNjM3NDIzMTgzODA1IgwLfChXRcTiATlCQJkq3AMoz2Ywkg5yFwxfNu48xJexw0%2FKUQQp%2FnB%2BNSRsETYkediyXYrXsY8ksi5nOJlULFxSttLydPcv5fEHeFOI9IytcM0ITjhm0WjRxMZlNgjc389bka5u%2BFR2JKjMzySGIi2rnGS4RY46RhSIggqBlCfsFRVloKJWl0HbFtJQ3jhj3tbg1vHdqTINBosZ9kRv89jHkatou5AgR43FMadMZAgojcibm5CtrByS5Y6vC%2FLGUgNPfnLAxGGnakUsAl%2B0obtLNMxvnH3BlS34YRGPuMDwPYKH4%2BukxEXSWAjaFugYQRUMOA%2BoHDNpHqWMoIurYoAUV5aM3WStxD4mClD6mPwnM0anR%2F9RknxnvSD7ryxRkat86OeWE2ywfQh%2BBGjiT7HUpSQITJiJBbDvaMUmZPlyrtKf2bE1UXZR3AQZQvUacGt%2FncFVHKoG3V17S4NsZ%2B3tyW0UJ4OO1YUDMRVMJHNlSTZlH4F0jdyvvMjSahn4tU786wu5ZC4LFhDK%2FOSlYLsDvIBTNed61yZ1%2BT1ANgK8bGjB1BxwNJziZ1FCZbIuQw9WUsfwLEtJU8XWmZZ2Onk1RraXyG93V8EaosIEDyhmoChtdvfzPA%2FHLgorfEIqDOEQafNZVJnbyYHHYzDxlLjEBjqkAXdTWg2W8r7kTU27SgfTntlCtK%2BHsMoM3NJWd8hhj%2BJoBvFGbaGUKjnqr6yJAhaa2tZJeyYB3OIcJsj9A%2FdmIGeGYzMC18VGWxbWQJwz4cHHlqE7h5aILfc9WTC5b96dA0dCDWyyByUY%2BnRpPnIB4NeoLXyCkuTODpUxJCnao6nr62v23sP3uepnxLFzO117CMLFAEdMgnb%2BoPNXNSC%2BH7X757wu&X-Amz-Signature=9abd04eb52f660f6a7624e8d87fbdb7e4790447a8e107b30d6251954a9984f37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622E6PH6X%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmf1cLL3vi1XXp7rGbTuxSRftbgOtzMmCaSG8eB0GitAIhAJIUY4GGHIBGWyp8GLyXr9XEMX0Vb5UPR5MQELwvwEImKv8DCBYQABoMNjM3NDIzMTgzODA1IgwLfChXRcTiATlCQJkq3AMoz2Ywkg5yFwxfNu48xJexw0%2FKUQQp%2FnB%2BNSRsETYkediyXYrXsY8ksi5nOJlULFxSttLydPcv5fEHeFOI9IytcM0ITjhm0WjRxMZlNgjc389bka5u%2BFR2JKjMzySGIi2rnGS4RY46RhSIggqBlCfsFRVloKJWl0HbFtJQ3jhj3tbg1vHdqTINBosZ9kRv89jHkatou5AgR43FMadMZAgojcibm5CtrByS5Y6vC%2FLGUgNPfnLAxGGnakUsAl%2B0obtLNMxvnH3BlS34YRGPuMDwPYKH4%2BukxEXSWAjaFugYQRUMOA%2BoHDNpHqWMoIurYoAUV5aM3WStxD4mClD6mPwnM0anR%2F9RknxnvSD7ryxRkat86OeWE2ywfQh%2BBGjiT7HUpSQITJiJBbDvaMUmZPlyrtKf2bE1UXZR3AQZQvUacGt%2FncFVHKoG3V17S4NsZ%2B3tyW0UJ4OO1YUDMRVMJHNlSTZlH4F0jdyvvMjSahn4tU786wu5ZC4LFhDK%2FOSlYLsDvIBTNed61yZ1%2BT1ANgK8bGjB1BxwNJziZ1FCZbIuQw9WUsfwLEtJU8XWmZZ2Onk1RraXyG93V8EaosIEDyhmoChtdvfzPA%2FHLgorfEIqDOEQafNZVJnbyYHHYzDxlLjEBjqkAXdTWg2W8r7kTU27SgfTntlCtK%2BHsMoM3NJWd8hhj%2BJoBvFGbaGUKjnqr6yJAhaa2tZJeyYB3OIcJsj9A%2FdmIGeGYzMC18VGWxbWQJwz4cHHlqE7h5aILfc9WTC5b96dA0dCDWyyByUY%2BnRpPnIB4NeoLXyCkuTODpUxJCnao6nr62v23sP3uepnxLFzO117CMLFAEdMgnb%2BoPNXNSC%2BH7X757wu&X-Amz-Signature=9148a06a3a2f513652cef118e9e914f1a26e3cb28de133fda571025623c2d163&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622E6PH6X%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmf1cLL3vi1XXp7rGbTuxSRftbgOtzMmCaSG8eB0GitAIhAJIUY4GGHIBGWyp8GLyXr9XEMX0Vb5UPR5MQELwvwEImKv8DCBYQABoMNjM3NDIzMTgzODA1IgwLfChXRcTiATlCQJkq3AMoz2Ywkg5yFwxfNu48xJexw0%2FKUQQp%2FnB%2BNSRsETYkediyXYrXsY8ksi5nOJlULFxSttLydPcv5fEHeFOI9IytcM0ITjhm0WjRxMZlNgjc389bka5u%2BFR2JKjMzySGIi2rnGS4RY46RhSIggqBlCfsFRVloKJWl0HbFtJQ3jhj3tbg1vHdqTINBosZ9kRv89jHkatou5AgR43FMadMZAgojcibm5CtrByS5Y6vC%2FLGUgNPfnLAxGGnakUsAl%2B0obtLNMxvnH3BlS34YRGPuMDwPYKH4%2BukxEXSWAjaFugYQRUMOA%2BoHDNpHqWMoIurYoAUV5aM3WStxD4mClD6mPwnM0anR%2F9RknxnvSD7ryxRkat86OeWE2ywfQh%2BBGjiT7HUpSQITJiJBbDvaMUmZPlyrtKf2bE1UXZR3AQZQvUacGt%2FncFVHKoG3V17S4NsZ%2B3tyW0UJ4OO1YUDMRVMJHNlSTZlH4F0jdyvvMjSahn4tU786wu5ZC4LFhDK%2FOSlYLsDvIBTNed61yZ1%2BT1ANgK8bGjB1BxwNJziZ1FCZbIuQw9WUsfwLEtJU8XWmZZ2Onk1RraXyG93V8EaosIEDyhmoChtdvfzPA%2FHLgorfEIqDOEQafNZVJnbyYHHYzDxlLjEBjqkAXdTWg2W8r7kTU27SgfTntlCtK%2BHsMoM3NJWd8hhj%2BJoBvFGbaGUKjnqr6yJAhaa2tZJeyYB3OIcJsj9A%2FdmIGeGYzMC18VGWxbWQJwz4cHHlqE7h5aILfc9WTC5b96dA0dCDWyyByUY%2BnRpPnIB4NeoLXyCkuTODpUxJCnao6nr62v23sP3uepnxLFzO117CMLFAEdMgnb%2BoPNXNSC%2BH7X757wu&X-Amz-Signature=102f324616e27d4a7b6505e9110a80cd0940ba5d62a5481e41b92bc5f65362bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622E6PH6X%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmf1cLL3vi1XXp7rGbTuxSRftbgOtzMmCaSG8eB0GitAIhAJIUY4GGHIBGWyp8GLyXr9XEMX0Vb5UPR5MQELwvwEImKv8DCBYQABoMNjM3NDIzMTgzODA1IgwLfChXRcTiATlCQJkq3AMoz2Ywkg5yFwxfNu48xJexw0%2FKUQQp%2FnB%2BNSRsETYkediyXYrXsY8ksi5nOJlULFxSttLydPcv5fEHeFOI9IytcM0ITjhm0WjRxMZlNgjc389bka5u%2BFR2JKjMzySGIi2rnGS4RY46RhSIggqBlCfsFRVloKJWl0HbFtJQ3jhj3tbg1vHdqTINBosZ9kRv89jHkatou5AgR43FMadMZAgojcibm5CtrByS5Y6vC%2FLGUgNPfnLAxGGnakUsAl%2B0obtLNMxvnH3BlS34YRGPuMDwPYKH4%2BukxEXSWAjaFugYQRUMOA%2BoHDNpHqWMoIurYoAUV5aM3WStxD4mClD6mPwnM0anR%2F9RknxnvSD7ryxRkat86OeWE2ywfQh%2BBGjiT7HUpSQITJiJBbDvaMUmZPlyrtKf2bE1UXZR3AQZQvUacGt%2FncFVHKoG3V17S4NsZ%2B3tyW0UJ4OO1YUDMRVMJHNlSTZlH4F0jdyvvMjSahn4tU786wu5ZC4LFhDK%2FOSlYLsDvIBTNed61yZ1%2BT1ANgK8bGjB1BxwNJziZ1FCZbIuQw9WUsfwLEtJU8XWmZZ2Onk1RraXyG93V8EaosIEDyhmoChtdvfzPA%2FHLgorfEIqDOEQafNZVJnbyYHHYzDxlLjEBjqkAXdTWg2W8r7kTU27SgfTntlCtK%2BHsMoM3NJWd8hhj%2BJoBvFGbaGUKjnqr6yJAhaa2tZJeyYB3OIcJsj9A%2FdmIGeGYzMC18VGWxbWQJwz4cHHlqE7h5aILfc9WTC5b96dA0dCDWyyByUY%2BnRpPnIB4NeoLXyCkuTODpUxJCnao6nr62v23sP3uepnxLFzO117CMLFAEdMgnb%2BoPNXNSC%2BH7X757wu&X-Amz-Signature=ad77ce8afd7f2cb01829744af2e5d953f01fc4a632b39317287f452dd57cc776&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622E6PH6X%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmf1cLL3vi1XXp7rGbTuxSRftbgOtzMmCaSG8eB0GitAIhAJIUY4GGHIBGWyp8GLyXr9XEMX0Vb5UPR5MQELwvwEImKv8DCBYQABoMNjM3NDIzMTgzODA1IgwLfChXRcTiATlCQJkq3AMoz2Ywkg5yFwxfNu48xJexw0%2FKUQQp%2FnB%2BNSRsETYkediyXYrXsY8ksi5nOJlULFxSttLydPcv5fEHeFOI9IytcM0ITjhm0WjRxMZlNgjc389bka5u%2BFR2JKjMzySGIi2rnGS4RY46RhSIggqBlCfsFRVloKJWl0HbFtJQ3jhj3tbg1vHdqTINBosZ9kRv89jHkatou5AgR43FMadMZAgojcibm5CtrByS5Y6vC%2FLGUgNPfnLAxGGnakUsAl%2B0obtLNMxvnH3BlS34YRGPuMDwPYKH4%2BukxEXSWAjaFugYQRUMOA%2BoHDNpHqWMoIurYoAUV5aM3WStxD4mClD6mPwnM0anR%2F9RknxnvSD7ryxRkat86OeWE2ywfQh%2BBGjiT7HUpSQITJiJBbDvaMUmZPlyrtKf2bE1UXZR3AQZQvUacGt%2FncFVHKoG3V17S4NsZ%2B3tyW0UJ4OO1YUDMRVMJHNlSTZlH4F0jdyvvMjSahn4tU786wu5ZC4LFhDK%2FOSlYLsDvIBTNed61yZ1%2BT1ANgK8bGjB1BxwNJziZ1FCZbIuQw9WUsfwLEtJU8XWmZZ2Onk1RraXyG93V8EaosIEDyhmoChtdvfzPA%2FHLgorfEIqDOEQafNZVJnbyYHHYzDxlLjEBjqkAXdTWg2W8r7kTU27SgfTntlCtK%2BHsMoM3NJWd8hhj%2BJoBvFGbaGUKjnqr6yJAhaa2tZJeyYB3OIcJsj9A%2FdmIGeGYzMC18VGWxbWQJwz4cHHlqE7h5aILfc9WTC5b96dA0dCDWyyByUY%2BnRpPnIB4NeoLXyCkuTODpUxJCnao6nr62v23sP3uepnxLFzO117CMLFAEdMgnb%2BoPNXNSC%2BH7X757wu&X-Amz-Signature=ea8d48f265aaf970789e75951127f2db17016cfccb868fb00138ac27f8642eac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622E6PH6X%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmf1cLL3vi1XXp7rGbTuxSRftbgOtzMmCaSG8eB0GitAIhAJIUY4GGHIBGWyp8GLyXr9XEMX0Vb5UPR5MQELwvwEImKv8DCBYQABoMNjM3NDIzMTgzODA1IgwLfChXRcTiATlCQJkq3AMoz2Ywkg5yFwxfNu48xJexw0%2FKUQQp%2FnB%2BNSRsETYkediyXYrXsY8ksi5nOJlULFxSttLydPcv5fEHeFOI9IytcM0ITjhm0WjRxMZlNgjc389bka5u%2BFR2JKjMzySGIi2rnGS4RY46RhSIggqBlCfsFRVloKJWl0HbFtJQ3jhj3tbg1vHdqTINBosZ9kRv89jHkatou5AgR43FMadMZAgojcibm5CtrByS5Y6vC%2FLGUgNPfnLAxGGnakUsAl%2B0obtLNMxvnH3BlS34YRGPuMDwPYKH4%2BukxEXSWAjaFugYQRUMOA%2BoHDNpHqWMoIurYoAUV5aM3WStxD4mClD6mPwnM0anR%2F9RknxnvSD7ryxRkat86OeWE2ywfQh%2BBGjiT7HUpSQITJiJBbDvaMUmZPlyrtKf2bE1UXZR3AQZQvUacGt%2FncFVHKoG3V17S4NsZ%2B3tyW0UJ4OO1YUDMRVMJHNlSTZlH4F0jdyvvMjSahn4tU786wu5ZC4LFhDK%2FOSlYLsDvIBTNed61yZ1%2BT1ANgK8bGjB1BxwNJziZ1FCZbIuQw9WUsfwLEtJU8XWmZZ2Onk1RraXyG93V8EaosIEDyhmoChtdvfzPA%2FHLgorfEIqDOEQafNZVJnbyYHHYzDxlLjEBjqkAXdTWg2W8r7kTU27SgfTntlCtK%2BHsMoM3NJWd8hhj%2BJoBvFGbaGUKjnqr6yJAhaa2tZJeyYB3OIcJsj9A%2FdmIGeGYzMC18VGWxbWQJwz4cHHlqE7h5aILfc9WTC5b96dA0dCDWyyByUY%2BnRpPnIB4NeoLXyCkuTODpUxJCnao6nr62v23sP3uepnxLFzO117CMLFAEdMgnb%2BoPNXNSC%2BH7X757wu&X-Amz-Signature=cf636bfa9f31869e55e94bb0fa7cb095f174ce96d5ca02d107f00852817f2b54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622E6PH6X%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmf1cLL3vi1XXp7rGbTuxSRftbgOtzMmCaSG8eB0GitAIhAJIUY4GGHIBGWyp8GLyXr9XEMX0Vb5UPR5MQELwvwEImKv8DCBYQABoMNjM3NDIzMTgzODA1IgwLfChXRcTiATlCQJkq3AMoz2Ywkg5yFwxfNu48xJexw0%2FKUQQp%2FnB%2BNSRsETYkediyXYrXsY8ksi5nOJlULFxSttLydPcv5fEHeFOI9IytcM0ITjhm0WjRxMZlNgjc389bka5u%2BFR2JKjMzySGIi2rnGS4RY46RhSIggqBlCfsFRVloKJWl0HbFtJQ3jhj3tbg1vHdqTINBosZ9kRv89jHkatou5AgR43FMadMZAgojcibm5CtrByS5Y6vC%2FLGUgNPfnLAxGGnakUsAl%2B0obtLNMxvnH3BlS34YRGPuMDwPYKH4%2BukxEXSWAjaFugYQRUMOA%2BoHDNpHqWMoIurYoAUV5aM3WStxD4mClD6mPwnM0anR%2F9RknxnvSD7ryxRkat86OeWE2ywfQh%2BBGjiT7HUpSQITJiJBbDvaMUmZPlyrtKf2bE1UXZR3AQZQvUacGt%2FncFVHKoG3V17S4NsZ%2B3tyW0UJ4OO1YUDMRVMJHNlSTZlH4F0jdyvvMjSahn4tU786wu5ZC4LFhDK%2FOSlYLsDvIBTNed61yZ1%2BT1ANgK8bGjB1BxwNJziZ1FCZbIuQw9WUsfwLEtJU8XWmZZ2Onk1RraXyG93V8EaosIEDyhmoChtdvfzPA%2FHLgorfEIqDOEQafNZVJnbyYHHYzDxlLjEBjqkAXdTWg2W8r7kTU27SgfTntlCtK%2BHsMoM3NJWd8hhj%2BJoBvFGbaGUKjnqr6yJAhaa2tZJeyYB3OIcJsj9A%2FdmIGeGYzMC18VGWxbWQJwz4cHHlqE7h5aILfc9WTC5b96dA0dCDWyyByUY%2BnRpPnIB4NeoLXyCkuTODpUxJCnao6nr62v23sP3uepnxLFzO117CMLFAEdMgnb%2BoPNXNSC%2BH7X757wu&X-Amz-Signature=7762830f25362a17a557d8fac3012eebc9e4a7f6f79997550b16bd2996877e3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622E6PH6X%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmf1cLL3vi1XXp7rGbTuxSRftbgOtzMmCaSG8eB0GitAIhAJIUY4GGHIBGWyp8GLyXr9XEMX0Vb5UPR5MQELwvwEImKv8DCBYQABoMNjM3NDIzMTgzODA1IgwLfChXRcTiATlCQJkq3AMoz2Ywkg5yFwxfNu48xJexw0%2FKUQQp%2FnB%2BNSRsETYkediyXYrXsY8ksi5nOJlULFxSttLydPcv5fEHeFOI9IytcM0ITjhm0WjRxMZlNgjc389bka5u%2BFR2JKjMzySGIi2rnGS4RY46RhSIggqBlCfsFRVloKJWl0HbFtJQ3jhj3tbg1vHdqTINBosZ9kRv89jHkatou5AgR43FMadMZAgojcibm5CtrByS5Y6vC%2FLGUgNPfnLAxGGnakUsAl%2B0obtLNMxvnH3BlS34YRGPuMDwPYKH4%2BukxEXSWAjaFugYQRUMOA%2BoHDNpHqWMoIurYoAUV5aM3WStxD4mClD6mPwnM0anR%2F9RknxnvSD7ryxRkat86OeWE2ywfQh%2BBGjiT7HUpSQITJiJBbDvaMUmZPlyrtKf2bE1UXZR3AQZQvUacGt%2FncFVHKoG3V17S4NsZ%2B3tyW0UJ4OO1YUDMRVMJHNlSTZlH4F0jdyvvMjSahn4tU786wu5ZC4LFhDK%2FOSlYLsDvIBTNed61yZ1%2BT1ANgK8bGjB1BxwNJziZ1FCZbIuQw9WUsfwLEtJU8XWmZZ2Onk1RraXyG93V8EaosIEDyhmoChtdvfzPA%2FHLgorfEIqDOEQafNZVJnbyYHHYzDxlLjEBjqkAXdTWg2W8r7kTU27SgfTntlCtK%2BHsMoM3NJWd8hhj%2BJoBvFGbaGUKjnqr6yJAhaa2tZJeyYB3OIcJsj9A%2FdmIGeGYzMC18VGWxbWQJwz4cHHlqE7h5aILfc9WTC5b96dA0dCDWyyByUY%2BnRpPnIB4NeoLXyCkuTODpUxJCnao6nr62v23sP3uepnxLFzO117CMLFAEdMgnb%2BoPNXNSC%2BH7X757wu&X-Amz-Signature=20dabc677c17623fca6e92f7c9f0f85c91621315d7082192054b592a0aeb0b22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622E6PH6X%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmf1cLL3vi1XXp7rGbTuxSRftbgOtzMmCaSG8eB0GitAIhAJIUY4GGHIBGWyp8GLyXr9XEMX0Vb5UPR5MQELwvwEImKv8DCBYQABoMNjM3NDIzMTgzODA1IgwLfChXRcTiATlCQJkq3AMoz2Ywkg5yFwxfNu48xJexw0%2FKUQQp%2FnB%2BNSRsETYkediyXYrXsY8ksi5nOJlULFxSttLydPcv5fEHeFOI9IytcM0ITjhm0WjRxMZlNgjc389bka5u%2BFR2JKjMzySGIi2rnGS4RY46RhSIggqBlCfsFRVloKJWl0HbFtJQ3jhj3tbg1vHdqTINBosZ9kRv89jHkatou5AgR43FMadMZAgojcibm5CtrByS5Y6vC%2FLGUgNPfnLAxGGnakUsAl%2B0obtLNMxvnH3BlS34YRGPuMDwPYKH4%2BukxEXSWAjaFugYQRUMOA%2BoHDNpHqWMoIurYoAUV5aM3WStxD4mClD6mPwnM0anR%2F9RknxnvSD7ryxRkat86OeWE2ywfQh%2BBGjiT7HUpSQITJiJBbDvaMUmZPlyrtKf2bE1UXZR3AQZQvUacGt%2FncFVHKoG3V17S4NsZ%2B3tyW0UJ4OO1YUDMRVMJHNlSTZlH4F0jdyvvMjSahn4tU786wu5ZC4LFhDK%2FOSlYLsDvIBTNed61yZ1%2BT1ANgK8bGjB1BxwNJziZ1FCZbIuQw9WUsfwLEtJU8XWmZZ2Onk1RraXyG93V8EaosIEDyhmoChtdvfzPA%2FHLgorfEIqDOEQafNZVJnbyYHHYzDxlLjEBjqkAXdTWg2W8r7kTU27SgfTntlCtK%2BHsMoM3NJWd8hhj%2BJoBvFGbaGUKjnqr6yJAhaa2tZJeyYB3OIcJsj9A%2FdmIGeGYzMC18VGWxbWQJwz4cHHlqE7h5aILfc9WTC5b96dA0dCDWyyByUY%2BnRpPnIB4NeoLXyCkuTODpUxJCnao6nr62v23sP3uepnxLFzO117CMLFAEdMgnb%2BoPNXNSC%2BH7X757wu&X-Amz-Signature=5c3c2d2c28946266cf6950e1c099c47b638c91cb53c2d54f81028ce4c133974e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622E6PH6X%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmf1cLL3vi1XXp7rGbTuxSRftbgOtzMmCaSG8eB0GitAIhAJIUY4GGHIBGWyp8GLyXr9XEMX0Vb5UPR5MQELwvwEImKv8DCBYQABoMNjM3NDIzMTgzODA1IgwLfChXRcTiATlCQJkq3AMoz2Ywkg5yFwxfNu48xJexw0%2FKUQQp%2FnB%2BNSRsETYkediyXYrXsY8ksi5nOJlULFxSttLydPcv5fEHeFOI9IytcM0ITjhm0WjRxMZlNgjc389bka5u%2BFR2JKjMzySGIi2rnGS4RY46RhSIggqBlCfsFRVloKJWl0HbFtJQ3jhj3tbg1vHdqTINBosZ9kRv89jHkatou5AgR43FMadMZAgojcibm5CtrByS5Y6vC%2FLGUgNPfnLAxGGnakUsAl%2B0obtLNMxvnH3BlS34YRGPuMDwPYKH4%2BukxEXSWAjaFugYQRUMOA%2BoHDNpHqWMoIurYoAUV5aM3WStxD4mClD6mPwnM0anR%2F9RknxnvSD7ryxRkat86OeWE2ywfQh%2BBGjiT7HUpSQITJiJBbDvaMUmZPlyrtKf2bE1UXZR3AQZQvUacGt%2FncFVHKoG3V17S4NsZ%2B3tyW0UJ4OO1YUDMRVMJHNlSTZlH4F0jdyvvMjSahn4tU786wu5ZC4LFhDK%2FOSlYLsDvIBTNed61yZ1%2BT1ANgK8bGjB1BxwNJziZ1FCZbIuQw9WUsfwLEtJU8XWmZZ2Onk1RraXyG93V8EaosIEDyhmoChtdvfzPA%2FHLgorfEIqDOEQafNZVJnbyYHHYzDxlLjEBjqkAXdTWg2W8r7kTU27SgfTntlCtK%2BHsMoM3NJWd8hhj%2BJoBvFGbaGUKjnqr6yJAhaa2tZJeyYB3OIcJsj9A%2FdmIGeGYzMC18VGWxbWQJwz4cHHlqE7h5aILfc9WTC5b96dA0dCDWyyByUY%2BnRpPnIB4NeoLXyCkuTODpUxJCnao6nr62v23sP3uepnxLFzO117CMLFAEdMgnb%2BoPNXNSC%2BH7X757wu&X-Amz-Signature=1d484f5bc0f66c3a9d7abd161580c11ee999f95c11bba53e6bfaab799e45b3c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622E6PH6X%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmf1cLL3vi1XXp7rGbTuxSRftbgOtzMmCaSG8eB0GitAIhAJIUY4GGHIBGWyp8GLyXr9XEMX0Vb5UPR5MQELwvwEImKv8DCBYQABoMNjM3NDIzMTgzODA1IgwLfChXRcTiATlCQJkq3AMoz2Ywkg5yFwxfNu48xJexw0%2FKUQQp%2FnB%2BNSRsETYkediyXYrXsY8ksi5nOJlULFxSttLydPcv5fEHeFOI9IytcM0ITjhm0WjRxMZlNgjc389bka5u%2BFR2JKjMzySGIi2rnGS4RY46RhSIggqBlCfsFRVloKJWl0HbFtJQ3jhj3tbg1vHdqTINBosZ9kRv89jHkatou5AgR43FMadMZAgojcibm5CtrByS5Y6vC%2FLGUgNPfnLAxGGnakUsAl%2B0obtLNMxvnH3BlS34YRGPuMDwPYKH4%2BukxEXSWAjaFugYQRUMOA%2BoHDNpHqWMoIurYoAUV5aM3WStxD4mClD6mPwnM0anR%2F9RknxnvSD7ryxRkat86OeWE2ywfQh%2BBGjiT7HUpSQITJiJBbDvaMUmZPlyrtKf2bE1UXZR3AQZQvUacGt%2FncFVHKoG3V17S4NsZ%2B3tyW0UJ4OO1YUDMRVMJHNlSTZlH4F0jdyvvMjSahn4tU786wu5ZC4LFhDK%2FOSlYLsDvIBTNed61yZ1%2BT1ANgK8bGjB1BxwNJziZ1FCZbIuQw9WUsfwLEtJU8XWmZZ2Onk1RraXyG93V8EaosIEDyhmoChtdvfzPA%2FHLgorfEIqDOEQafNZVJnbyYHHYzDxlLjEBjqkAXdTWg2W8r7kTU27SgfTntlCtK%2BHsMoM3NJWd8hhj%2BJoBvFGbaGUKjnqr6yJAhaa2tZJeyYB3OIcJsj9A%2FdmIGeGYzMC18VGWxbWQJwz4cHHlqE7h5aILfc9WTC5b96dA0dCDWyyByUY%2BnRpPnIB4NeoLXyCkuTODpUxJCnao6nr62v23sP3uepnxLFzO117CMLFAEdMgnb%2BoPNXNSC%2BH7X757wu&X-Amz-Signature=3189eebcb31125f37668166fccbfa632482f4776a34305731a103506992c01f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622E6PH6X%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmf1cLL3vi1XXp7rGbTuxSRftbgOtzMmCaSG8eB0GitAIhAJIUY4GGHIBGWyp8GLyXr9XEMX0Vb5UPR5MQELwvwEImKv8DCBYQABoMNjM3NDIzMTgzODA1IgwLfChXRcTiATlCQJkq3AMoz2Ywkg5yFwxfNu48xJexw0%2FKUQQp%2FnB%2BNSRsETYkediyXYrXsY8ksi5nOJlULFxSttLydPcv5fEHeFOI9IytcM0ITjhm0WjRxMZlNgjc389bka5u%2BFR2JKjMzySGIi2rnGS4RY46RhSIggqBlCfsFRVloKJWl0HbFtJQ3jhj3tbg1vHdqTINBosZ9kRv89jHkatou5AgR43FMadMZAgojcibm5CtrByS5Y6vC%2FLGUgNPfnLAxGGnakUsAl%2B0obtLNMxvnH3BlS34YRGPuMDwPYKH4%2BukxEXSWAjaFugYQRUMOA%2BoHDNpHqWMoIurYoAUV5aM3WStxD4mClD6mPwnM0anR%2F9RknxnvSD7ryxRkat86OeWE2ywfQh%2BBGjiT7HUpSQITJiJBbDvaMUmZPlyrtKf2bE1UXZR3AQZQvUacGt%2FncFVHKoG3V17S4NsZ%2B3tyW0UJ4OO1YUDMRVMJHNlSTZlH4F0jdyvvMjSahn4tU786wu5ZC4LFhDK%2FOSlYLsDvIBTNed61yZ1%2BT1ANgK8bGjB1BxwNJziZ1FCZbIuQw9WUsfwLEtJU8XWmZZ2Onk1RraXyG93V8EaosIEDyhmoChtdvfzPA%2FHLgorfEIqDOEQafNZVJnbyYHHYzDxlLjEBjqkAXdTWg2W8r7kTU27SgfTntlCtK%2BHsMoM3NJWd8hhj%2BJoBvFGbaGUKjnqr6yJAhaa2tZJeyYB3OIcJsj9A%2FdmIGeGYzMC18VGWxbWQJwz4cHHlqE7h5aILfc9WTC5b96dA0dCDWyyByUY%2BnRpPnIB4NeoLXyCkuTODpUxJCnao6nr62v23sP3uepnxLFzO117CMLFAEdMgnb%2BoPNXNSC%2BH7X757wu&X-Amz-Signature=8c073766387185734ea5b760eed3d9c20a78548d104f63098bcfdb44c1b35d8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
