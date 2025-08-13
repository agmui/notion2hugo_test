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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3BAKOFZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEtokBMe5gURd4ftkNgohVsUdddDRT0fOFGgSCK9yAi%2BAiAN69GgBCGhFIBRzVezRAUdwgeD69xMiXfCiaCslHMpXCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMyzZuowFFkb1wiRtLKtwDgCKehHaXxxxYTS7TI24yMdC7bsI08N%2By763TUWvddUrupjiO8JTL3075y4p7o1HvWad0frr8wnejGCFNpQl7b0C9SANIN6AAyZxddfzZz8K3kIEF1vD13h0uuJld90M99xYIjuClH9AIaCipDvVIisfxa1yl7XfPMVj5Yo90bN9i6%2BoEfUAvK72onTOw%2FZ%2Bs6CUpi810d4s6Xhn2Wi9M7T91Kyel%2Bv8NVeK1wm1j1IKzyu33qF8betAGXa%2FSOE%2BUc1hcHpw0k7lFoElymHQJwkMJH7t1V5SPQFyZ5dEJahpTucJ2eaFm0dKOVEVrU1JvU5A6eWeNiEsnmQpnvAztLRUVCgLTJTbwCzDby46Rs%2FfIwATtWmS13bNxMsmFzQlorUXZqYyYg1buxZaW0VLEw4ylSKgtFJku4rRyol2qBAZlma0uxZqCveHIBHIyXTzrrRDPGzJUa7q2e12Vt2vQ%2Bh%2BuR9U5a5CaFdgSrDwbZT7fer%2BJhWZOoXx60RPpH41SyAU%2Fb%2B1Zuh5smB7aIYFaG%2BTAtmPuLsZAZY%2BDV2rtp39WWWMlFlalBCPEFWiDh6KkREDV57dxcyCD8veHdIE6%2F8HWN1l9JGmP3XN%2FlKOdGvHBuCar0PiL4AXJPkcw3vvyxAY6pgGHXdVqreipwVDs7CEekAnuqR3Ur2JsmmEfIOcrl0g2MPxh%2BQBWxLyoVZTO24cD%2FaGZNI6TBIm28avryKBe2%2F%2FJXOMYxINEg0t9kNw98ZokU9GFJZuBHMPfb4UCbwM46ZcJ3caMiFmxzyEC2%2F8rK73zbwaujjXyM4n1cyRid6ArKVb2luXMNOMOIVpeCNUo9IPwcpK2Lf0%2BfQswhqjdLb37qLLR7hf8&X-Amz-Signature=cb580f0dab471d02a173c8b0ce6246cf57e3bd3696285cf811c100852f89a2c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3BAKOFZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEtokBMe5gURd4ftkNgohVsUdddDRT0fOFGgSCK9yAi%2BAiAN69GgBCGhFIBRzVezRAUdwgeD69xMiXfCiaCslHMpXCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMyzZuowFFkb1wiRtLKtwDgCKehHaXxxxYTS7TI24yMdC7bsI08N%2By763TUWvddUrupjiO8JTL3075y4p7o1HvWad0frr8wnejGCFNpQl7b0C9SANIN6AAyZxddfzZz8K3kIEF1vD13h0uuJld90M99xYIjuClH9AIaCipDvVIisfxa1yl7XfPMVj5Yo90bN9i6%2BoEfUAvK72onTOw%2FZ%2Bs6CUpi810d4s6Xhn2Wi9M7T91Kyel%2Bv8NVeK1wm1j1IKzyu33qF8betAGXa%2FSOE%2BUc1hcHpw0k7lFoElymHQJwkMJH7t1V5SPQFyZ5dEJahpTucJ2eaFm0dKOVEVrU1JvU5A6eWeNiEsnmQpnvAztLRUVCgLTJTbwCzDby46Rs%2FfIwATtWmS13bNxMsmFzQlorUXZqYyYg1buxZaW0VLEw4ylSKgtFJku4rRyol2qBAZlma0uxZqCveHIBHIyXTzrrRDPGzJUa7q2e12Vt2vQ%2Bh%2BuR9U5a5CaFdgSrDwbZT7fer%2BJhWZOoXx60RPpH41SyAU%2Fb%2B1Zuh5smB7aIYFaG%2BTAtmPuLsZAZY%2BDV2rtp39WWWMlFlalBCPEFWiDh6KkREDV57dxcyCD8veHdIE6%2F8HWN1l9JGmP3XN%2FlKOdGvHBuCar0PiL4AXJPkcw3vvyxAY6pgGHXdVqreipwVDs7CEekAnuqR3Ur2JsmmEfIOcrl0g2MPxh%2BQBWxLyoVZTO24cD%2FaGZNI6TBIm28avryKBe2%2F%2FJXOMYxINEg0t9kNw98ZokU9GFJZuBHMPfb4UCbwM46ZcJ3caMiFmxzyEC2%2F8rK73zbwaujjXyM4n1cyRid6ArKVb2luXMNOMOIVpeCNUo9IPwcpK2Lf0%2BfQswhqjdLb37qLLR7hf8&X-Amz-Signature=cfa4285e29858120d12841c93cd0d12f28cebc5ee33c3ab4bd6acb07dd0d9819&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3BAKOFZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEtokBMe5gURd4ftkNgohVsUdddDRT0fOFGgSCK9yAi%2BAiAN69GgBCGhFIBRzVezRAUdwgeD69xMiXfCiaCslHMpXCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMyzZuowFFkb1wiRtLKtwDgCKehHaXxxxYTS7TI24yMdC7bsI08N%2By763TUWvddUrupjiO8JTL3075y4p7o1HvWad0frr8wnejGCFNpQl7b0C9SANIN6AAyZxddfzZz8K3kIEF1vD13h0uuJld90M99xYIjuClH9AIaCipDvVIisfxa1yl7XfPMVj5Yo90bN9i6%2BoEfUAvK72onTOw%2FZ%2Bs6CUpi810d4s6Xhn2Wi9M7T91Kyel%2Bv8NVeK1wm1j1IKzyu33qF8betAGXa%2FSOE%2BUc1hcHpw0k7lFoElymHQJwkMJH7t1V5SPQFyZ5dEJahpTucJ2eaFm0dKOVEVrU1JvU5A6eWeNiEsnmQpnvAztLRUVCgLTJTbwCzDby46Rs%2FfIwATtWmS13bNxMsmFzQlorUXZqYyYg1buxZaW0VLEw4ylSKgtFJku4rRyol2qBAZlma0uxZqCveHIBHIyXTzrrRDPGzJUa7q2e12Vt2vQ%2Bh%2BuR9U5a5CaFdgSrDwbZT7fer%2BJhWZOoXx60RPpH41SyAU%2Fb%2B1Zuh5smB7aIYFaG%2BTAtmPuLsZAZY%2BDV2rtp39WWWMlFlalBCPEFWiDh6KkREDV57dxcyCD8veHdIE6%2F8HWN1l9JGmP3XN%2FlKOdGvHBuCar0PiL4AXJPkcw3vvyxAY6pgGHXdVqreipwVDs7CEekAnuqR3Ur2JsmmEfIOcrl0g2MPxh%2BQBWxLyoVZTO24cD%2FaGZNI6TBIm28avryKBe2%2F%2FJXOMYxINEg0t9kNw98ZokU9GFJZuBHMPfb4UCbwM46ZcJ3caMiFmxzyEC2%2F8rK73zbwaujjXyM4n1cyRid6ArKVb2luXMNOMOIVpeCNUo9IPwcpK2Lf0%2BfQswhqjdLb37qLLR7hf8&X-Amz-Signature=25e20988224a665264e292e5599bc0195f6c45b3b3c4d4d6918c3be06827c23e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3BAKOFZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEtokBMe5gURd4ftkNgohVsUdddDRT0fOFGgSCK9yAi%2BAiAN69GgBCGhFIBRzVezRAUdwgeD69xMiXfCiaCslHMpXCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMyzZuowFFkb1wiRtLKtwDgCKehHaXxxxYTS7TI24yMdC7bsI08N%2By763TUWvddUrupjiO8JTL3075y4p7o1HvWad0frr8wnejGCFNpQl7b0C9SANIN6AAyZxddfzZz8K3kIEF1vD13h0uuJld90M99xYIjuClH9AIaCipDvVIisfxa1yl7XfPMVj5Yo90bN9i6%2BoEfUAvK72onTOw%2FZ%2Bs6CUpi810d4s6Xhn2Wi9M7T91Kyel%2Bv8NVeK1wm1j1IKzyu33qF8betAGXa%2FSOE%2BUc1hcHpw0k7lFoElymHQJwkMJH7t1V5SPQFyZ5dEJahpTucJ2eaFm0dKOVEVrU1JvU5A6eWeNiEsnmQpnvAztLRUVCgLTJTbwCzDby46Rs%2FfIwATtWmS13bNxMsmFzQlorUXZqYyYg1buxZaW0VLEw4ylSKgtFJku4rRyol2qBAZlma0uxZqCveHIBHIyXTzrrRDPGzJUa7q2e12Vt2vQ%2Bh%2BuR9U5a5CaFdgSrDwbZT7fer%2BJhWZOoXx60RPpH41SyAU%2Fb%2B1Zuh5smB7aIYFaG%2BTAtmPuLsZAZY%2BDV2rtp39WWWMlFlalBCPEFWiDh6KkREDV57dxcyCD8veHdIE6%2F8HWN1l9JGmP3XN%2FlKOdGvHBuCar0PiL4AXJPkcw3vvyxAY6pgGHXdVqreipwVDs7CEekAnuqR3Ur2JsmmEfIOcrl0g2MPxh%2BQBWxLyoVZTO24cD%2FaGZNI6TBIm28avryKBe2%2F%2FJXOMYxINEg0t9kNw98ZokU9GFJZuBHMPfb4UCbwM46ZcJ3caMiFmxzyEC2%2F8rK73zbwaujjXyM4n1cyRid6ArKVb2luXMNOMOIVpeCNUo9IPwcpK2Lf0%2BfQswhqjdLb37qLLR7hf8&X-Amz-Signature=8c3f79f55f1c384dbc05ced1ea7ca27d5e32e40366679cff8b6e4545736b50a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3BAKOFZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEtokBMe5gURd4ftkNgohVsUdddDRT0fOFGgSCK9yAi%2BAiAN69GgBCGhFIBRzVezRAUdwgeD69xMiXfCiaCslHMpXCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMyzZuowFFkb1wiRtLKtwDgCKehHaXxxxYTS7TI24yMdC7bsI08N%2By763TUWvddUrupjiO8JTL3075y4p7o1HvWad0frr8wnejGCFNpQl7b0C9SANIN6AAyZxddfzZz8K3kIEF1vD13h0uuJld90M99xYIjuClH9AIaCipDvVIisfxa1yl7XfPMVj5Yo90bN9i6%2BoEfUAvK72onTOw%2FZ%2Bs6CUpi810d4s6Xhn2Wi9M7T91Kyel%2Bv8NVeK1wm1j1IKzyu33qF8betAGXa%2FSOE%2BUc1hcHpw0k7lFoElymHQJwkMJH7t1V5SPQFyZ5dEJahpTucJ2eaFm0dKOVEVrU1JvU5A6eWeNiEsnmQpnvAztLRUVCgLTJTbwCzDby46Rs%2FfIwATtWmS13bNxMsmFzQlorUXZqYyYg1buxZaW0VLEw4ylSKgtFJku4rRyol2qBAZlma0uxZqCveHIBHIyXTzrrRDPGzJUa7q2e12Vt2vQ%2Bh%2BuR9U5a5CaFdgSrDwbZT7fer%2BJhWZOoXx60RPpH41SyAU%2Fb%2B1Zuh5smB7aIYFaG%2BTAtmPuLsZAZY%2BDV2rtp39WWWMlFlalBCPEFWiDh6KkREDV57dxcyCD8veHdIE6%2F8HWN1l9JGmP3XN%2FlKOdGvHBuCar0PiL4AXJPkcw3vvyxAY6pgGHXdVqreipwVDs7CEekAnuqR3Ur2JsmmEfIOcrl0g2MPxh%2BQBWxLyoVZTO24cD%2FaGZNI6TBIm28avryKBe2%2F%2FJXOMYxINEg0t9kNw98ZokU9GFJZuBHMPfb4UCbwM46ZcJ3caMiFmxzyEC2%2F8rK73zbwaujjXyM4n1cyRid6ArKVb2luXMNOMOIVpeCNUo9IPwcpK2Lf0%2BfQswhqjdLb37qLLR7hf8&X-Amz-Signature=9083fd4668199cb3f26eb3319d3ff277d41556c3f2bfdb20c868601e5056cbf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3BAKOFZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEtokBMe5gURd4ftkNgohVsUdddDRT0fOFGgSCK9yAi%2BAiAN69GgBCGhFIBRzVezRAUdwgeD69xMiXfCiaCslHMpXCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMyzZuowFFkb1wiRtLKtwDgCKehHaXxxxYTS7TI24yMdC7bsI08N%2By763TUWvddUrupjiO8JTL3075y4p7o1HvWad0frr8wnejGCFNpQl7b0C9SANIN6AAyZxddfzZz8K3kIEF1vD13h0uuJld90M99xYIjuClH9AIaCipDvVIisfxa1yl7XfPMVj5Yo90bN9i6%2BoEfUAvK72onTOw%2FZ%2Bs6CUpi810d4s6Xhn2Wi9M7T91Kyel%2Bv8NVeK1wm1j1IKzyu33qF8betAGXa%2FSOE%2BUc1hcHpw0k7lFoElymHQJwkMJH7t1V5SPQFyZ5dEJahpTucJ2eaFm0dKOVEVrU1JvU5A6eWeNiEsnmQpnvAztLRUVCgLTJTbwCzDby46Rs%2FfIwATtWmS13bNxMsmFzQlorUXZqYyYg1buxZaW0VLEw4ylSKgtFJku4rRyol2qBAZlma0uxZqCveHIBHIyXTzrrRDPGzJUa7q2e12Vt2vQ%2Bh%2BuR9U5a5CaFdgSrDwbZT7fer%2BJhWZOoXx60RPpH41SyAU%2Fb%2B1Zuh5smB7aIYFaG%2BTAtmPuLsZAZY%2BDV2rtp39WWWMlFlalBCPEFWiDh6KkREDV57dxcyCD8veHdIE6%2F8HWN1l9JGmP3XN%2FlKOdGvHBuCar0PiL4AXJPkcw3vvyxAY6pgGHXdVqreipwVDs7CEekAnuqR3Ur2JsmmEfIOcrl0g2MPxh%2BQBWxLyoVZTO24cD%2FaGZNI6TBIm28avryKBe2%2F%2FJXOMYxINEg0t9kNw98ZokU9GFJZuBHMPfb4UCbwM46ZcJ3caMiFmxzyEC2%2F8rK73zbwaujjXyM4n1cyRid6ArKVb2luXMNOMOIVpeCNUo9IPwcpK2Lf0%2BfQswhqjdLb37qLLR7hf8&X-Amz-Signature=aad52124fd429c11a8bce770e66bb57eafcbc596500cdaa4df8b544b53c04857&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3BAKOFZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEtokBMe5gURd4ftkNgohVsUdddDRT0fOFGgSCK9yAi%2BAiAN69GgBCGhFIBRzVezRAUdwgeD69xMiXfCiaCslHMpXCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMyzZuowFFkb1wiRtLKtwDgCKehHaXxxxYTS7TI24yMdC7bsI08N%2By763TUWvddUrupjiO8JTL3075y4p7o1HvWad0frr8wnejGCFNpQl7b0C9SANIN6AAyZxddfzZz8K3kIEF1vD13h0uuJld90M99xYIjuClH9AIaCipDvVIisfxa1yl7XfPMVj5Yo90bN9i6%2BoEfUAvK72onTOw%2FZ%2Bs6CUpi810d4s6Xhn2Wi9M7T91Kyel%2Bv8NVeK1wm1j1IKzyu33qF8betAGXa%2FSOE%2BUc1hcHpw0k7lFoElymHQJwkMJH7t1V5SPQFyZ5dEJahpTucJ2eaFm0dKOVEVrU1JvU5A6eWeNiEsnmQpnvAztLRUVCgLTJTbwCzDby46Rs%2FfIwATtWmS13bNxMsmFzQlorUXZqYyYg1buxZaW0VLEw4ylSKgtFJku4rRyol2qBAZlma0uxZqCveHIBHIyXTzrrRDPGzJUa7q2e12Vt2vQ%2Bh%2BuR9U5a5CaFdgSrDwbZT7fer%2BJhWZOoXx60RPpH41SyAU%2Fb%2B1Zuh5smB7aIYFaG%2BTAtmPuLsZAZY%2BDV2rtp39WWWMlFlalBCPEFWiDh6KkREDV57dxcyCD8veHdIE6%2F8HWN1l9JGmP3XN%2FlKOdGvHBuCar0PiL4AXJPkcw3vvyxAY6pgGHXdVqreipwVDs7CEekAnuqR3Ur2JsmmEfIOcrl0g2MPxh%2BQBWxLyoVZTO24cD%2FaGZNI6TBIm28avryKBe2%2F%2FJXOMYxINEg0t9kNw98ZokU9GFJZuBHMPfb4UCbwM46ZcJ3caMiFmxzyEC2%2F8rK73zbwaujjXyM4n1cyRid6ArKVb2luXMNOMOIVpeCNUo9IPwcpK2Lf0%2BfQswhqjdLb37qLLR7hf8&X-Amz-Signature=6dbfaf9bbaeb522f007fd1db1672c07343a7fa49b90cd527b3b0c3889b5bd7f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3BAKOFZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEtokBMe5gURd4ftkNgohVsUdddDRT0fOFGgSCK9yAi%2BAiAN69GgBCGhFIBRzVezRAUdwgeD69xMiXfCiaCslHMpXCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMyzZuowFFkb1wiRtLKtwDgCKehHaXxxxYTS7TI24yMdC7bsI08N%2By763TUWvddUrupjiO8JTL3075y4p7o1HvWad0frr8wnejGCFNpQl7b0C9SANIN6AAyZxddfzZz8K3kIEF1vD13h0uuJld90M99xYIjuClH9AIaCipDvVIisfxa1yl7XfPMVj5Yo90bN9i6%2BoEfUAvK72onTOw%2FZ%2Bs6CUpi810d4s6Xhn2Wi9M7T91Kyel%2Bv8NVeK1wm1j1IKzyu33qF8betAGXa%2FSOE%2BUc1hcHpw0k7lFoElymHQJwkMJH7t1V5SPQFyZ5dEJahpTucJ2eaFm0dKOVEVrU1JvU5A6eWeNiEsnmQpnvAztLRUVCgLTJTbwCzDby46Rs%2FfIwATtWmS13bNxMsmFzQlorUXZqYyYg1buxZaW0VLEw4ylSKgtFJku4rRyol2qBAZlma0uxZqCveHIBHIyXTzrrRDPGzJUa7q2e12Vt2vQ%2Bh%2BuR9U5a5CaFdgSrDwbZT7fer%2BJhWZOoXx60RPpH41SyAU%2Fb%2B1Zuh5smB7aIYFaG%2BTAtmPuLsZAZY%2BDV2rtp39WWWMlFlalBCPEFWiDh6KkREDV57dxcyCD8veHdIE6%2F8HWN1l9JGmP3XN%2FlKOdGvHBuCar0PiL4AXJPkcw3vvyxAY6pgGHXdVqreipwVDs7CEekAnuqR3Ur2JsmmEfIOcrl0g2MPxh%2BQBWxLyoVZTO24cD%2FaGZNI6TBIm28avryKBe2%2F%2FJXOMYxINEg0t9kNw98ZokU9GFJZuBHMPfb4UCbwM46ZcJ3caMiFmxzyEC2%2F8rK73zbwaujjXyM4n1cyRid6ArKVb2luXMNOMOIVpeCNUo9IPwcpK2Lf0%2BfQswhqjdLb37qLLR7hf8&X-Amz-Signature=e0a26919614c72e99fc742cc0cd92d463a2d22dfcf34938247386578fe2bd8f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3BAKOFZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEtokBMe5gURd4ftkNgohVsUdddDRT0fOFGgSCK9yAi%2BAiAN69GgBCGhFIBRzVezRAUdwgeD69xMiXfCiaCslHMpXCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMyzZuowFFkb1wiRtLKtwDgCKehHaXxxxYTS7TI24yMdC7bsI08N%2By763TUWvddUrupjiO8JTL3075y4p7o1HvWad0frr8wnejGCFNpQl7b0C9SANIN6AAyZxddfzZz8K3kIEF1vD13h0uuJld90M99xYIjuClH9AIaCipDvVIisfxa1yl7XfPMVj5Yo90bN9i6%2BoEfUAvK72onTOw%2FZ%2Bs6CUpi810d4s6Xhn2Wi9M7T91Kyel%2Bv8NVeK1wm1j1IKzyu33qF8betAGXa%2FSOE%2BUc1hcHpw0k7lFoElymHQJwkMJH7t1V5SPQFyZ5dEJahpTucJ2eaFm0dKOVEVrU1JvU5A6eWeNiEsnmQpnvAztLRUVCgLTJTbwCzDby46Rs%2FfIwATtWmS13bNxMsmFzQlorUXZqYyYg1buxZaW0VLEw4ylSKgtFJku4rRyol2qBAZlma0uxZqCveHIBHIyXTzrrRDPGzJUa7q2e12Vt2vQ%2Bh%2BuR9U5a5CaFdgSrDwbZT7fer%2BJhWZOoXx60RPpH41SyAU%2Fb%2B1Zuh5smB7aIYFaG%2BTAtmPuLsZAZY%2BDV2rtp39WWWMlFlalBCPEFWiDh6KkREDV57dxcyCD8veHdIE6%2F8HWN1l9JGmP3XN%2FlKOdGvHBuCar0PiL4AXJPkcw3vvyxAY6pgGHXdVqreipwVDs7CEekAnuqR3Ur2JsmmEfIOcrl0g2MPxh%2BQBWxLyoVZTO24cD%2FaGZNI6TBIm28avryKBe2%2F%2FJXOMYxINEg0t9kNw98ZokU9GFJZuBHMPfb4UCbwM46ZcJ3caMiFmxzyEC2%2F8rK73zbwaujjXyM4n1cyRid6ArKVb2luXMNOMOIVpeCNUo9IPwcpK2Lf0%2BfQswhqjdLb37qLLR7hf8&X-Amz-Signature=56d18faa07bf13e02424d4ce1f755837bbe16dff5be929e37923b9169fcb3f24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3BAKOFZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEtokBMe5gURd4ftkNgohVsUdddDRT0fOFGgSCK9yAi%2BAiAN69GgBCGhFIBRzVezRAUdwgeD69xMiXfCiaCslHMpXCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMyzZuowFFkb1wiRtLKtwDgCKehHaXxxxYTS7TI24yMdC7bsI08N%2By763TUWvddUrupjiO8JTL3075y4p7o1HvWad0frr8wnejGCFNpQl7b0C9SANIN6AAyZxddfzZz8K3kIEF1vD13h0uuJld90M99xYIjuClH9AIaCipDvVIisfxa1yl7XfPMVj5Yo90bN9i6%2BoEfUAvK72onTOw%2FZ%2Bs6CUpi810d4s6Xhn2Wi9M7T91Kyel%2Bv8NVeK1wm1j1IKzyu33qF8betAGXa%2FSOE%2BUc1hcHpw0k7lFoElymHQJwkMJH7t1V5SPQFyZ5dEJahpTucJ2eaFm0dKOVEVrU1JvU5A6eWeNiEsnmQpnvAztLRUVCgLTJTbwCzDby46Rs%2FfIwATtWmS13bNxMsmFzQlorUXZqYyYg1buxZaW0VLEw4ylSKgtFJku4rRyol2qBAZlma0uxZqCveHIBHIyXTzrrRDPGzJUa7q2e12Vt2vQ%2Bh%2BuR9U5a5CaFdgSrDwbZT7fer%2BJhWZOoXx60RPpH41SyAU%2Fb%2B1Zuh5smB7aIYFaG%2BTAtmPuLsZAZY%2BDV2rtp39WWWMlFlalBCPEFWiDh6KkREDV57dxcyCD8veHdIE6%2F8HWN1l9JGmP3XN%2FlKOdGvHBuCar0PiL4AXJPkcw3vvyxAY6pgGHXdVqreipwVDs7CEekAnuqR3Ur2JsmmEfIOcrl0g2MPxh%2BQBWxLyoVZTO24cD%2FaGZNI6TBIm28avryKBe2%2F%2FJXOMYxINEg0t9kNw98ZokU9GFJZuBHMPfb4UCbwM46ZcJ3caMiFmxzyEC2%2F8rK73zbwaujjXyM4n1cyRid6ArKVb2luXMNOMOIVpeCNUo9IPwcpK2Lf0%2BfQswhqjdLb37qLLR7hf8&X-Amz-Signature=ea23e96bc4796b8d4faa96dfa12938805a8f3105bf0796c4a738ae6557702090&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3BAKOFZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEtokBMe5gURd4ftkNgohVsUdddDRT0fOFGgSCK9yAi%2BAiAN69GgBCGhFIBRzVezRAUdwgeD69xMiXfCiaCslHMpXCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMyzZuowFFkb1wiRtLKtwDgCKehHaXxxxYTS7TI24yMdC7bsI08N%2By763TUWvddUrupjiO8JTL3075y4p7o1HvWad0frr8wnejGCFNpQl7b0C9SANIN6AAyZxddfzZz8K3kIEF1vD13h0uuJld90M99xYIjuClH9AIaCipDvVIisfxa1yl7XfPMVj5Yo90bN9i6%2BoEfUAvK72onTOw%2FZ%2Bs6CUpi810d4s6Xhn2Wi9M7T91Kyel%2Bv8NVeK1wm1j1IKzyu33qF8betAGXa%2FSOE%2BUc1hcHpw0k7lFoElymHQJwkMJH7t1V5SPQFyZ5dEJahpTucJ2eaFm0dKOVEVrU1JvU5A6eWeNiEsnmQpnvAztLRUVCgLTJTbwCzDby46Rs%2FfIwATtWmS13bNxMsmFzQlorUXZqYyYg1buxZaW0VLEw4ylSKgtFJku4rRyol2qBAZlma0uxZqCveHIBHIyXTzrrRDPGzJUa7q2e12Vt2vQ%2Bh%2BuR9U5a5CaFdgSrDwbZT7fer%2BJhWZOoXx60RPpH41SyAU%2Fb%2B1Zuh5smB7aIYFaG%2BTAtmPuLsZAZY%2BDV2rtp39WWWMlFlalBCPEFWiDh6KkREDV57dxcyCD8veHdIE6%2F8HWN1l9JGmP3XN%2FlKOdGvHBuCar0PiL4AXJPkcw3vvyxAY6pgGHXdVqreipwVDs7CEekAnuqR3Ur2JsmmEfIOcrl0g2MPxh%2BQBWxLyoVZTO24cD%2FaGZNI6TBIm28avryKBe2%2F%2FJXOMYxINEg0t9kNw98ZokU9GFJZuBHMPfb4UCbwM46ZcJ3caMiFmxzyEC2%2F8rK73zbwaujjXyM4n1cyRid6ArKVb2luXMNOMOIVpeCNUo9IPwcpK2Lf0%2BfQswhqjdLb37qLLR7hf8&X-Amz-Signature=51378de7a1211d008d16719a01d6ac2a741dc7f667814b913c060896588a239e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3BAKOFZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEtokBMe5gURd4ftkNgohVsUdddDRT0fOFGgSCK9yAi%2BAiAN69GgBCGhFIBRzVezRAUdwgeD69xMiXfCiaCslHMpXCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMyzZuowFFkb1wiRtLKtwDgCKehHaXxxxYTS7TI24yMdC7bsI08N%2By763TUWvddUrupjiO8JTL3075y4p7o1HvWad0frr8wnejGCFNpQl7b0C9SANIN6AAyZxddfzZz8K3kIEF1vD13h0uuJld90M99xYIjuClH9AIaCipDvVIisfxa1yl7XfPMVj5Yo90bN9i6%2BoEfUAvK72onTOw%2FZ%2Bs6CUpi810d4s6Xhn2Wi9M7T91Kyel%2Bv8NVeK1wm1j1IKzyu33qF8betAGXa%2FSOE%2BUc1hcHpw0k7lFoElymHQJwkMJH7t1V5SPQFyZ5dEJahpTucJ2eaFm0dKOVEVrU1JvU5A6eWeNiEsnmQpnvAztLRUVCgLTJTbwCzDby46Rs%2FfIwATtWmS13bNxMsmFzQlorUXZqYyYg1buxZaW0VLEw4ylSKgtFJku4rRyol2qBAZlma0uxZqCveHIBHIyXTzrrRDPGzJUa7q2e12Vt2vQ%2Bh%2BuR9U5a5CaFdgSrDwbZT7fer%2BJhWZOoXx60RPpH41SyAU%2Fb%2B1Zuh5smB7aIYFaG%2BTAtmPuLsZAZY%2BDV2rtp39WWWMlFlalBCPEFWiDh6KkREDV57dxcyCD8veHdIE6%2F8HWN1l9JGmP3XN%2FlKOdGvHBuCar0PiL4AXJPkcw3vvyxAY6pgGHXdVqreipwVDs7CEekAnuqR3Ur2JsmmEfIOcrl0g2MPxh%2BQBWxLyoVZTO24cD%2FaGZNI6TBIm28avryKBe2%2F%2FJXOMYxINEg0t9kNw98ZokU9GFJZuBHMPfb4UCbwM46ZcJ3caMiFmxzyEC2%2F8rK73zbwaujjXyM4n1cyRid6ArKVb2luXMNOMOIVpeCNUo9IPwcpK2Lf0%2BfQswhqjdLb37qLLR7hf8&X-Amz-Signature=9e9f23b07e1f553ce3b8b47e845231d028ec769b28f18e6be214a48f16c7fe73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3BAKOFZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEtokBMe5gURd4ftkNgohVsUdddDRT0fOFGgSCK9yAi%2BAiAN69GgBCGhFIBRzVezRAUdwgeD69xMiXfCiaCslHMpXCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMyzZuowFFkb1wiRtLKtwDgCKehHaXxxxYTS7TI24yMdC7bsI08N%2By763TUWvddUrupjiO8JTL3075y4p7o1HvWad0frr8wnejGCFNpQl7b0C9SANIN6AAyZxddfzZz8K3kIEF1vD13h0uuJld90M99xYIjuClH9AIaCipDvVIisfxa1yl7XfPMVj5Yo90bN9i6%2BoEfUAvK72onTOw%2FZ%2Bs6CUpi810d4s6Xhn2Wi9M7T91Kyel%2Bv8NVeK1wm1j1IKzyu33qF8betAGXa%2FSOE%2BUc1hcHpw0k7lFoElymHQJwkMJH7t1V5SPQFyZ5dEJahpTucJ2eaFm0dKOVEVrU1JvU5A6eWeNiEsnmQpnvAztLRUVCgLTJTbwCzDby46Rs%2FfIwATtWmS13bNxMsmFzQlorUXZqYyYg1buxZaW0VLEw4ylSKgtFJku4rRyol2qBAZlma0uxZqCveHIBHIyXTzrrRDPGzJUa7q2e12Vt2vQ%2Bh%2BuR9U5a5CaFdgSrDwbZT7fer%2BJhWZOoXx60RPpH41SyAU%2Fb%2B1Zuh5smB7aIYFaG%2BTAtmPuLsZAZY%2BDV2rtp39WWWMlFlalBCPEFWiDh6KkREDV57dxcyCD8veHdIE6%2F8HWN1l9JGmP3XN%2FlKOdGvHBuCar0PiL4AXJPkcw3vvyxAY6pgGHXdVqreipwVDs7CEekAnuqR3Ur2JsmmEfIOcrl0g2MPxh%2BQBWxLyoVZTO24cD%2FaGZNI6TBIm28avryKBe2%2F%2FJXOMYxINEg0t9kNw98ZokU9GFJZuBHMPfb4UCbwM46ZcJ3caMiFmxzyEC2%2F8rK73zbwaujjXyM4n1cyRid6ArKVb2luXMNOMOIVpeCNUo9IPwcpK2Lf0%2BfQswhqjdLb37qLLR7hf8&X-Amz-Signature=ac524d687e0b4412ed01c47d3d48f4cf8c6126e90d34b006fa1785ecb8df8e2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3BAKOFZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEtokBMe5gURd4ftkNgohVsUdddDRT0fOFGgSCK9yAi%2BAiAN69GgBCGhFIBRzVezRAUdwgeD69xMiXfCiaCslHMpXCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMyzZuowFFkb1wiRtLKtwDgCKehHaXxxxYTS7TI24yMdC7bsI08N%2By763TUWvddUrupjiO8JTL3075y4p7o1HvWad0frr8wnejGCFNpQl7b0C9SANIN6AAyZxddfzZz8K3kIEF1vD13h0uuJld90M99xYIjuClH9AIaCipDvVIisfxa1yl7XfPMVj5Yo90bN9i6%2BoEfUAvK72onTOw%2FZ%2Bs6CUpi810d4s6Xhn2Wi9M7T91Kyel%2Bv8NVeK1wm1j1IKzyu33qF8betAGXa%2FSOE%2BUc1hcHpw0k7lFoElymHQJwkMJH7t1V5SPQFyZ5dEJahpTucJ2eaFm0dKOVEVrU1JvU5A6eWeNiEsnmQpnvAztLRUVCgLTJTbwCzDby46Rs%2FfIwATtWmS13bNxMsmFzQlorUXZqYyYg1buxZaW0VLEw4ylSKgtFJku4rRyol2qBAZlma0uxZqCveHIBHIyXTzrrRDPGzJUa7q2e12Vt2vQ%2Bh%2BuR9U5a5CaFdgSrDwbZT7fer%2BJhWZOoXx60RPpH41SyAU%2Fb%2B1Zuh5smB7aIYFaG%2BTAtmPuLsZAZY%2BDV2rtp39WWWMlFlalBCPEFWiDh6KkREDV57dxcyCD8veHdIE6%2F8HWN1l9JGmP3XN%2FlKOdGvHBuCar0PiL4AXJPkcw3vvyxAY6pgGHXdVqreipwVDs7CEekAnuqR3Ur2JsmmEfIOcrl0g2MPxh%2BQBWxLyoVZTO24cD%2FaGZNI6TBIm28avryKBe2%2F%2FJXOMYxINEg0t9kNw98ZokU9GFJZuBHMPfb4UCbwM46ZcJ3caMiFmxzyEC2%2F8rK73zbwaujjXyM4n1cyRid6ArKVb2luXMNOMOIVpeCNUo9IPwcpK2Lf0%2BfQswhqjdLb37qLLR7hf8&X-Amz-Signature=c8e7b8d6d3b2812136423ff190ff7e62369cf5a8bc92da6873fff84fd8d517d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
