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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FOO3UHB%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIEdpxPKQhsFQ22qA%2B5knPx4zycfmDaiFsjy7ddswmcJZAiA%2FuQkrLZDjWYsN5VlgWCbJN7oBW4w4lqXbGrfZcMUJECr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM7yb8uf46gAlZOUvfKtwDChyAXx26jskxwfwseC3KbWrJ4QzdHziKljBes0obqNFL6IGXMLAJM27z%2B88M4lK4behfyE7ND44HyiZuj59PDXRyI9DpOdGkjbqPEHAOPNZ%2BvhoThnmtmS76JzS6kwjyOefksgxyWflJrWoNFbKHNlxZxIbF5whufW%2BYQWs5Exe5op3Ikqw%2B%2FAr6lT9ZJVwqUM5EqigDVg5pnJ4gOucGJ3fuhf0RIr6%2FZ4XDh3Y5TD4vD7O0ETg%2B5D4XXrhkj40OgVkJ%2B6YM%2FuLfxwzNZQk27G3gQ1hFoKpgM607K46JCpyrR%2BDaOpkEYWyiiCCAvVRy0W8mcspZo4q42GaMIyCNussyyRy6%2FI%2FCUV4Pw2Bk9MlN%2BE1hoQZwxHYjFYXPMkM%2BTbejLgs68081N0Mlbi%2Fzu4Rk0tGf3%2BK3%2FLkhmz8Q5Tse9qeRK3hQ12Uw19NMRkTBN4%2FhI%2BW6wctBY61lb%2FSLypLCXViDEdWwwU65gQdggnxuZ%2Bsw0fTp27SUel32rrAc7lEfJMJrVtg5HRFZOl%2FxfXdt0QL0N6TUGWYVKm6RFD0n764SrX8BO1bEd6P%2BtnLAIG7drHUSCk8uar0q8enLTpMOaj8WbiLKHLHqK8L%2F8lGwEl8lyCfpsIUitpgwhduDzQY6pgF30tzRoOwPvgSsYdCegOIx441GPBU6XWjTNV%2FgS89wmgpwumycUUO7fgjUn3FIeWHtN0WXzQaAUMRwLRrqkVsUsFXBY7mvy3fHMerBwZ7odcRhoQ7qMQ%2FczVLLDrPUzuABg26nDW5ozbsiNjdBaGRbtiSAJNl%2BlyO%2BGgzGPHfT22PIOcha97%2FBpAFvR1xIgEPjYMsczVCZaYqOq69Q%2Fl6L%2BD2I8ZPe&X-Amz-Signature=a78ff75063afe8fab760cfcc61f547f4647baa0bde06d89ad1156bae63afb86d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FOO3UHB%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIEdpxPKQhsFQ22qA%2B5knPx4zycfmDaiFsjy7ddswmcJZAiA%2FuQkrLZDjWYsN5VlgWCbJN7oBW4w4lqXbGrfZcMUJECr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM7yb8uf46gAlZOUvfKtwDChyAXx26jskxwfwseC3KbWrJ4QzdHziKljBes0obqNFL6IGXMLAJM27z%2B88M4lK4behfyE7ND44HyiZuj59PDXRyI9DpOdGkjbqPEHAOPNZ%2BvhoThnmtmS76JzS6kwjyOefksgxyWflJrWoNFbKHNlxZxIbF5whufW%2BYQWs5Exe5op3Ikqw%2B%2FAr6lT9ZJVwqUM5EqigDVg5pnJ4gOucGJ3fuhf0RIr6%2FZ4XDh3Y5TD4vD7O0ETg%2B5D4XXrhkj40OgVkJ%2B6YM%2FuLfxwzNZQk27G3gQ1hFoKpgM607K46JCpyrR%2BDaOpkEYWyiiCCAvVRy0W8mcspZo4q42GaMIyCNussyyRy6%2FI%2FCUV4Pw2Bk9MlN%2BE1hoQZwxHYjFYXPMkM%2BTbejLgs68081N0Mlbi%2Fzu4Rk0tGf3%2BK3%2FLkhmz8Q5Tse9qeRK3hQ12Uw19NMRkTBN4%2FhI%2BW6wctBY61lb%2FSLypLCXViDEdWwwU65gQdggnxuZ%2Bsw0fTp27SUel32rrAc7lEfJMJrVtg5HRFZOl%2FxfXdt0QL0N6TUGWYVKm6RFD0n764SrX8BO1bEd6P%2BtnLAIG7drHUSCk8uar0q8enLTpMOaj8WbiLKHLHqK8L%2F8lGwEl8lyCfpsIUitpgwhduDzQY6pgF30tzRoOwPvgSsYdCegOIx441GPBU6XWjTNV%2FgS89wmgpwumycUUO7fgjUn3FIeWHtN0WXzQaAUMRwLRrqkVsUsFXBY7mvy3fHMerBwZ7odcRhoQ7qMQ%2FczVLLDrPUzuABg26nDW5ozbsiNjdBaGRbtiSAJNl%2BlyO%2BGgzGPHfT22PIOcha97%2FBpAFvR1xIgEPjYMsczVCZaYqOq69Q%2Fl6L%2BD2I8ZPe&X-Amz-Signature=aff936c48c1eb6dd00676a319bb731eea9bf291e9be9bb1eec3e738cd9635840&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FOO3UHB%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIEdpxPKQhsFQ22qA%2B5knPx4zycfmDaiFsjy7ddswmcJZAiA%2FuQkrLZDjWYsN5VlgWCbJN7oBW4w4lqXbGrfZcMUJECr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM7yb8uf46gAlZOUvfKtwDChyAXx26jskxwfwseC3KbWrJ4QzdHziKljBes0obqNFL6IGXMLAJM27z%2B88M4lK4behfyE7ND44HyiZuj59PDXRyI9DpOdGkjbqPEHAOPNZ%2BvhoThnmtmS76JzS6kwjyOefksgxyWflJrWoNFbKHNlxZxIbF5whufW%2BYQWs5Exe5op3Ikqw%2B%2FAr6lT9ZJVwqUM5EqigDVg5pnJ4gOucGJ3fuhf0RIr6%2FZ4XDh3Y5TD4vD7O0ETg%2B5D4XXrhkj40OgVkJ%2B6YM%2FuLfxwzNZQk27G3gQ1hFoKpgM607K46JCpyrR%2BDaOpkEYWyiiCCAvVRy0W8mcspZo4q42GaMIyCNussyyRy6%2FI%2FCUV4Pw2Bk9MlN%2BE1hoQZwxHYjFYXPMkM%2BTbejLgs68081N0Mlbi%2Fzu4Rk0tGf3%2BK3%2FLkhmz8Q5Tse9qeRK3hQ12Uw19NMRkTBN4%2FhI%2BW6wctBY61lb%2FSLypLCXViDEdWwwU65gQdggnxuZ%2Bsw0fTp27SUel32rrAc7lEfJMJrVtg5HRFZOl%2FxfXdt0QL0N6TUGWYVKm6RFD0n764SrX8BO1bEd6P%2BtnLAIG7drHUSCk8uar0q8enLTpMOaj8WbiLKHLHqK8L%2F8lGwEl8lyCfpsIUitpgwhduDzQY6pgF30tzRoOwPvgSsYdCegOIx441GPBU6XWjTNV%2FgS89wmgpwumycUUO7fgjUn3FIeWHtN0WXzQaAUMRwLRrqkVsUsFXBY7mvy3fHMerBwZ7odcRhoQ7qMQ%2FczVLLDrPUzuABg26nDW5ozbsiNjdBaGRbtiSAJNl%2BlyO%2BGgzGPHfT22PIOcha97%2FBpAFvR1xIgEPjYMsczVCZaYqOq69Q%2Fl6L%2BD2I8ZPe&X-Amz-Signature=3a580fc81206a21bec34b91d3c62d0d6d92cd24c8671815d024e57029f23f4b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FOO3UHB%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIEdpxPKQhsFQ22qA%2B5knPx4zycfmDaiFsjy7ddswmcJZAiA%2FuQkrLZDjWYsN5VlgWCbJN7oBW4w4lqXbGrfZcMUJECr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM7yb8uf46gAlZOUvfKtwDChyAXx26jskxwfwseC3KbWrJ4QzdHziKljBes0obqNFL6IGXMLAJM27z%2B88M4lK4behfyE7ND44HyiZuj59PDXRyI9DpOdGkjbqPEHAOPNZ%2BvhoThnmtmS76JzS6kwjyOefksgxyWflJrWoNFbKHNlxZxIbF5whufW%2BYQWs5Exe5op3Ikqw%2B%2FAr6lT9ZJVwqUM5EqigDVg5pnJ4gOucGJ3fuhf0RIr6%2FZ4XDh3Y5TD4vD7O0ETg%2B5D4XXrhkj40OgVkJ%2B6YM%2FuLfxwzNZQk27G3gQ1hFoKpgM607K46JCpyrR%2BDaOpkEYWyiiCCAvVRy0W8mcspZo4q42GaMIyCNussyyRy6%2FI%2FCUV4Pw2Bk9MlN%2BE1hoQZwxHYjFYXPMkM%2BTbejLgs68081N0Mlbi%2Fzu4Rk0tGf3%2BK3%2FLkhmz8Q5Tse9qeRK3hQ12Uw19NMRkTBN4%2FhI%2BW6wctBY61lb%2FSLypLCXViDEdWwwU65gQdggnxuZ%2Bsw0fTp27SUel32rrAc7lEfJMJrVtg5HRFZOl%2FxfXdt0QL0N6TUGWYVKm6RFD0n764SrX8BO1bEd6P%2BtnLAIG7drHUSCk8uar0q8enLTpMOaj8WbiLKHLHqK8L%2F8lGwEl8lyCfpsIUitpgwhduDzQY6pgF30tzRoOwPvgSsYdCegOIx441GPBU6XWjTNV%2FgS89wmgpwumycUUO7fgjUn3FIeWHtN0WXzQaAUMRwLRrqkVsUsFXBY7mvy3fHMerBwZ7odcRhoQ7qMQ%2FczVLLDrPUzuABg26nDW5ozbsiNjdBaGRbtiSAJNl%2BlyO%2BGgzGPHfT22PIOcha97%2FBpAFvR1xIgEPjYMsczVCZaYqOq69Q%2Fl6L%2BD2I8ZPe&X-Amz-Signature=167c4accf16a2904117943426409fc3ec71048f0665c29328b21c61eb8e5a162&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FOO3UHB%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIEdpxPKQhsFQ22qA%2B5knPx4zycfmDaiFsjy7ddswmcJZAiA%2FuQkrLZDjWYsN5VlgWCbJN7oBW4w4lqXbGrfZcMUJECr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM7yb8uf46gAlZOUvfKtwDChyAXx26jskxwfwseC3KbWrJ4QzdHziKljBes0obqNFL6IGXMLAJM27z%2B88M4lK4behfyE7ND44HyiZuj59PDXRyI9DpOdGkjbqPEHAOPNZ%2BvhoThnmtmS76JzS6kwjyOefksgxyWflJrWoNFbKHNlxZxIbF5whufW%2BYQWs5Exe5op3Ikqw%2B%2FAr6lT9ZJVwqUM5EqigDVg5pnJ4gOucGJ3fuhf0RIr6%2FZ4XDh3Y5TD4vD7O0ETg%2B5D4XXrhkj40OgVkJ%2B6YM%2FuLfxwzNZQk27G3gQ1hFoKpgM607K46JCpyrR%2BDaOpkEYWyiiCCAvVRy0W8mcspZo4q42GaMIyCNussyyRy6%2FI%2FCUV4Pw2Bk9MlN%2BE1hoQZwxHYjFYXPMkM%2BTbejLgs68081N0Mlbi%2Fzu4Rk0tGf3%2BK3%2FLkhmz8Q5Tse9qeRK3hQ12Uw19NMRkTBN4%2FhI%2BW6wctBY61lb%2FSLypLCXViDEdWwwU65gQdggnxuZ%2Bsw0fTp27SUel32rrAc7lEfJMJrVtg5HRFZOl%2FxfXdt0QL0N6TUGWYVKm6RFD0n764SrX8BO1bEd6P%2BtnLAIG7drHUSCk8uar0q8enLTpMOaj8WbiLKHLHqK8L%2F8lGwEl8lyCfpsIUitpgwhduDzQY6pgF30tzRoOwPvgSsYdCegOIx441GPBU6XWjTNV%2FgS89wmgpwumycUUO7fgjUn3FIeWHtN0WXzQaAUMRwLRrqkVsUsFXBY7mvy3fHMerBwZ7odcRhoQ7qMQ%2FczVLLDrPUzuABg26nDW5ozbsiNjdBaGRbtiSAJNl%2BlyO%2BGgzGPHfT22PIOcha97%2FBpAFvR1xIgEPjYMsczVCZaYqOq69Q%2Fl6L%2BD2I8ZPe&X-Amz-Signature=6d8b7a6191aa82bba1a1d1ca40ed36ebaff2abbdfb72123ac2ecf2f7aeb88f3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FOO3UHB%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIEdpxPKQhsFQ22qA%2B5knPx4zycfmDaiFsjy7ddswmcJZAiA%2FuQkrLZDjWYsN5VlgWCbJN7oBW4w4lqXbGrfZcMUJECr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM7yb8uf46gAlZOUvfKtwDChyAXx26jskxwfwseC3KbWrJ4QzdHziKljBes0obqNFL6IGXMLAJM27z%2B88M4lK4behfyE7ND44HyiZuj59PDXRyI9DpOdGkjbqPEHAOPNZ%2BvhoThnmtmS76JzS6kwjyOefksgxyWflJrWoNFbKHNlxZxIbF5whufW%2BYQWs5Exe5op3Ikqw%2B%2FAr6lT9ZJVwqUM5EqigDVg5pnJ4gOucGJ3fuhf0RIr6%2FZ4XDh3Y5TD4vD7O0ETg%2B5D4XXrhkj40OgVkJ%2B6YM%2FuLfxwzNZQk27G3gQ1hFoKpgM607K46JCpyrR%2BDaOpkEYWyiiCCAvVRy0W8mcspZo4q42GaMIyCNussyyRy6%2FI%2FCUV4Pw2Bk9MlN%2BE1hoQZwxHYjFYXPMkM%2BTbejLgs68081N0Mlbi%2Fzu4Rk0tGf3%2BK3%2FLkhmz8Q5Tse9qeRK3hQ12Uw19NMRkTBN4%2FhI%2BW6wctBY61lb%2FSLypLCXViDEdWwwU65gQdggnxuZ%2Bsw0fTp27SUel32rrAc7lEfJMJrVtg5HRFZOl%2FxfXdt0QL0N6TUGWYVKm6RFD0n764SrX8BO1bEd6P%2BtnLAIG7drHUSCk8uar0q8enLTpMOaj8WbiLKHLHqK8L%2F8lGwEl8lyCfpsIUitpgwhduDzQY6pgF30tzRoOwPvgSsYdCegOIx441GPBU6XWjTNV%2FgS89wmgpwumycUUO7fgjUn3FIeWHtN0WXzQaAUMRwLRrqkVsUsFXBY7mvy3fHMerBwZ7odcRhoQ7qMQ%2FczVLLDrPUzuABg26nDW5ozbsiNjdBaGRbtiSAJNl%2BlyO%2BGgzGPHfT22PIOcha97%2FBpAFvR1xIgEPjYMsczVCZaYqOq69Q%2Fl6L%2BD2I8ZPe&X-Amz-Signature=bbfaeb0b1f568e2154866bed0ae0e4f3a07169ae353663a948d290b32bac2134&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FOO3UHB%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIEdpxPKQhsFQ22qA%2B5knPx4zycfmDaiFsjy7ddswmcJZAiA%2FuQkrLZDjWYsN5VlgWCbJN7oBW4w4lqXbGrfZcMUJECr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM7yb8uf46gAlZOUvfKtwDChyAXx26jskxwfwseC3KbWrJ4QzdHziKljBes0obqNFL6IGXMLAJM27z%2B88M4lK4behfyE7ND44HyiZuj59PDXRyI9DpOdGkjbqPEHAOPNZ%2BvhoThnmtmS76JzS6kwjyOefksgxyWflJrWoNFbKHNlxZxIbF5whufW%2BYQWs5Exe5op3Ikqw%2B%2FAr6lT9ZJVwqUM5EqigDVg5pnJ4gOucGJ3fuhf0RIr6%2FZ4XDh3Y5TD4vD7O0ETg%2B5D4XXrhkj40OgVkJ%2B6YM%2FuLfxwzNZQk27G3gQ1hFoKpgM607K46JCpyrR%2BDaOpkEYWyiiCCAvVRy0W8mcspZo4q42GaMIyCNussyyRy6%2FI%2FCUV4Pw2Bk9MlN%2BE1hoQZwxHYjFYXPMkM%2BTbejLgs68081N0Mlbi%2Fzu4Rk0tGf3%2BK3%2FLkhmz8Q5Tse9qeRK3hQ12Uw19NMRkTBN4%2FhI%2BW6wctBY61lb%2FSLypLCXViDEdWwwU65gQdggnxuZ%2Bsw0fTp27SUel32rrAc7lEfJMJrVtg5HRFZOl%2FxfXdt0QL0N6TUGWYVKm6RFD0n764SrX8BO1bEd6P%2BtnLAIG7drHUSCk8uar0q8enLTpMOaj8WbiLKHLHqK8L%2F8lGwEl8lyCfpsIUitpgwhduDzQY6pgF30tzRoOwPvgSsYdCegOIx441GPBU6XWjTNV%2FgS89wmgpwumycUUO7fgjUn3FIeWHtN0WXzQaAUMRwLRrqkVsUsFXBY7mvy3fHMerBwZ7odcRhoQ7qMQ%2FczVLLDrPUzuABg26nDW5ozbsiNjdBaGRbtiSAJNl%2BlyO%2BGgzGPHfT22PIOcha97%2FBpAFvR1xIgEPjYMsczVCZaYqOq69Q%2Fl6L%2BD2I8ZPe&X-Amz-Signature=6bfa31afe04a22d8196fe2427e1880e5f5a8689c2d5a39d759bdd5f20ff9df94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FOO3UHB%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIEdpxPKQhsFQ22qA%2B5knPx4zycfmDaiFsjy7ddswmcJZAiA%2FuQkrLZDjWYsN5VlgWCbJN7oBW4w4lqXbGrfZcMUJECr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM7yb8uf46gAlZOUvfKtwDChyAXx26jskxwfwseC3KbWrJ4QzdHziKljBes0obqNFL6IGXMLAJM27z%2B88M4lK4behfyE7ND44HyiZuj59PDXRyI9DpOdGkjbqPEHAOPNZ%2BvhoThnmtmS76JzS6kwjyOefksgxyWflJrWoNFbKHNlxZxIbF5whufW%2BYQWs5Exe5op3Ikqw%2B%2FAr6lT9ZJVwqUM5EqigDVg5pnJ4gOucGJ3fuhf0RIr6%2FZ4XDh3Y5TD4vD7O0ETg%2B5D4XXrhkj40OgVkJ%2B6YM%2FuLfxwzNZQk27G3gQ1hFoKpgM607K46JCpyrR%2BDaOpkEYWyiiCCAvVRy0W8mcspZo4q42GaMIyCNussyyRy6%2FI%2FCUV4Pw2Bk9MlN%2BE1hoQZwxHYjFYXPMkM%2BTbejLgs68081N0Mlbi%2Fzu4Rk0tGf3%2BK3%2FLkhmz8Q5Tse9qeRK3hQ12Uw19NMRkTBN4%2FhI%2BW6wctBY61lb%2FSLypLCXViDEdWwwU65gQdggnxuZ%2Bsw0fTp27SUel32rrAc7lEfJMJrVtg5HRFZOl%2FxfXdt0QL0N6TUGWYVKm6RFD0n764SrX8BO1bEd6P%2BtnLAIG7drHUSCk8uar0q8enLTpMOaj8WbiLKHLHqK8L%2F8lGwEl8lyCfpsIUitpgwhduDzQY6pgF30tzRoOwPvgSsYdCegOIx441GPBU6XWjTNV%2FgS89wmgpwumycUUO7fgjUn3FIeWHtN0WXzQaAUMRwLRrqkVsUsFXBY7mvy3fHMerBwZ7odcRhoQ7qMQ%2FczVLLDrPUzuABg26nDW5ozbsiNjdBaGRbtiSAJNl%2BlyO%2BGgzGPHfT22PIOcha97%2FBpAFvR1xIgEPjYMsczVCZaYqOq69Q%2Fl6L%2BD2I8ZPe&X-Amz-Signature=f436ed644e258565fec17e692604d076b727ed326eb865b730d7c4ba8d7f827b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FOO3UHB%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIEdpxPKQhsFQ22qA%2B5knPx4zycfmDaiFsjy7ddswmcJZAiA%2FuQkrLZDjWYsN5VlgWCbJN7oBW4w4lqXbGrfZcMUJECr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM7yb8uf46gAlZOUvfKtwDChyAXx26jskxwfwseC3KbWrJ4QzdHziKljBes0obqNFL6IGXMLAJM27z%2B88M4lK4behfyE7ND44HyiZuj59PDXRyI9DpOdGkjbqPEHAOPNZ%2BvhoThnmtmS76JzS6kwjyOefksgxyWflJrWoNFbKHNlxZxIbF5whufW%2BYQWs5Exe5op3Ikqw%2B%2FAr6lT9ZJVwqUM5EqigDVg5pnJ4gOucGJ3fuhf0RIr6%2FZ4XDh3Y5TD4vD7O0ETg%2B5D4XXrhkj40OgVkJ%2B6YM%2FuLfxwzNZQk27G3gQ1hFoKpgM607K46JCpyrR%2BDaOpkEYWyiiCCAvVRy0W8mcspZo4q42GaMIyCNussyyRy6%2FI%2FCUV4Pw2Bk9MlN%2BE1hoQZwxHYjFYXPMkM%2BTbejLgs68081N0Mlbi%2Fzu4Rk0tGf3%2BK3%2FLkhmz8Q5Tse9qeRK3hQ12Uw19NMRkTBN4%2FhI%2BW6wctBY61lb%2FSLypLCXViDEdWwwU65gQdggnxuZ%2Bsw0fTp27SUel32rrAc7lEfJMJrVtg5HRFZOl%2FxfXdt0QL0N6TUGWYVKm6RFD0n764SrX8BO1bEd6P%2BtnLAIG7drHUSCk8uar0q8enLTpMOaj8WbiLKHLHqK8L%2F8lGwEl8lyCfpsIUitpgwhduDzQY6pgF30tzRoOwPvgSsYdCegOIx441GPBU6XWjTNV%2FgS89wmgpwumycUUO7fgjUn3FIeWHtN0WXzQaAUMRwLRrqkVsUsFXBY7mvy3fHMerBwZ7odcRhoQ7qMQ%2FczVLLDrPUzuABg26nDW5ozbsiNjdBaGRbtiSAJNl%2BlyO%2BGgzGPHfT22PIOcha97%2FBpAFvR1xIgEPjYMsczVCZaYqOq69Q%2Fl6L%2BD2I8ZPe&X-Amz-Signature=b9ad03276072e94d1c844e697e8917f982743c53107e42802028f3d0357aa5f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FOO3UHB%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIEdpxPKQhsFQ22qA%2B5knPx4zycfmDaiFsjy7ddswmcJZAiA%2FuQkrLZDjWYsN5VlgWCbJN7oBW4w4lqXbGrfZcMUJECr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM7yb8uf46gAlZOUvfKtwDChyAXx26jskxwfwseC3KbWrJ4QzdHziKljBes0obqNFL6IGXMLAJM27z%2B88M4lK4behfyE7ND44HyiZuj59PDXRyI9DpOdGkjbqPEHAOPNZ%2BvhoThnmtmS76JzS6kwjyOefksgxyWflJrWoNFbKHNlxZxIbF5whufW%2BYQWs5Exe5op3Ikqw%2B%2FAr6lT9ZJVwqUM5EqigDVg5pnJ4gOucGJ3fuhf0RIr6%2FZ4XDh3Y5TD4vD7O0ETg%2B5D4XXrhkj40OgVkJ%2B6YM%2FuLfxwzNZQk27G3gQ1hFoKpgM607K46JCpyrR%2BDaOpkEYWyiiCCAvVRy0W8mcspZo4q42GaMIyCNussyyRy6%2FI%2FCUV4Pw2Bk9MlN%2BE1hoQZwxHYjFYXPMkM%2BTbejLgs68081N0Mlbi%2Fzu4Rk0tGf3%2BK3%2FLkhmz8Q5Tse9qeRK3hQ12Uw19NMRkTBN4%2FhI%2BW6wctBY61lb%2FSLypLCXViDEdWwwU65gQdggnxuZ%2Bsw0fTp27SUel32rrAc7lEfJMJrVtg5HRFZOl%2FxfXdt0QL0N6TUGWYVKm6RFD0n764SrX8BO1bEd6P%2BtnLAIG7drHUSCk8uar0q8enLTpMOaj8WbiLKHLHqK8L%2F8lGwEl8lyCfpsIUitpgwhduDzQY6pgF30tzRoOwPvgSsYdCegOIx441GPBU6XWjTNV%2FgS89wmgpwumycUUO7fgjUn3FIeWHtN0WXzQaAUMRwLRrqkVsUsFXBY7mvy3fHMerBwZ7odcRhoQ7qMQ%2FczVLLDrPUzuABg26nDW5ozbsiNjdBaGRbtiSAJNl%2BlyO%2BGgzGPHfT22PIOcha97%2FBpAFvR1xIgEPjYMsczVCZaYqOq69Q%2Fl6L%2BD2I8ZPe&X-Amz-Signature=a307d975c45df2dab91e2583876866faad890088148951cbf0159d16ffc271b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FOO3UHB%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIEdpxPKQhsFQ22qA%2B5knPx4zycfmDaiFsjy7ddswmcJZAiA%2FuQkrLZDjWYsN5VlgWCbJN7oBW4w4lqXbGrfZcMUJECr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM7yb8uf46gAlZOUvfKtwDChyAXx26jskxwfwseC3KbWrJ4QzdHziKljBes0obqNFL6IGXMLAJM27z%2B88M4lK4behfyE7ND44HyiZuj59PDXRyI9DpOdGkjbqPEHAOPNZ%2BvhoThnmtmS76JzS6kwjyOefksgxyWflJrWoNFbKHNlxZxIbF5whufW%2BYQWs5Exe5op3Ikqw%2B%2FAr6lT9ZJVwqUM5EqigDVg5pnJ4gOucGJ3fuhf0RIr6%2FZ4XDh3Y5TD4vD7O0ETg%2B5D4XXrhkj40OgVkJ%2B6YM%2FuLfxwzNZQk27G3gQ1hFoKpgM607K46JCpyrR%2BDaOpkEYWyiiCCAvVRy0W8mcspZo4q42GaMIyCNussyyRy6%2FI%2FCUV4Pw2Bk9MlN%2BE1hoQZwxHYjFYXPMkM%2BTbejLgs68081N0Mlbi%2Fzu4Rk0tGf3%2BK3%2FLkhmz8Q5Tse9qeRK3hQ12Uw19NMRkTBN4%2FhI%2BW6wctBY61lb%2FSLypLCXViDEdWwwU65gQdggnxuZ%2Bsw0fTp27SUel32rrAc7lEfJMJrVtg5HRFZOl%2FxfXdt0QL0N6TUGWYVKm6RFD0n764SrX8BO1bEd6P%2BtnLAIG7drHUSCk8uar0q8enLTpMOaj8WbiLKHLHqK8L%2F8lGwEl8lyCfpsIUitpgwhduDzQY6pgF30tzRoOwPvgSsYdCegOIx441GPBU6XWjTNV%2FgS89wmgpwumycUUO7fgjUn3FIeWHtN0WXzQaAUMRwLRrqkVsUsFXBY7mvy3fHMerBwZ7odcRhoQ7qMQ%2FczVLLDrPUzuABg26nDW5ozbsiNjdBaGRbtiSAJNl%2BlyO%2BGgzGPHfT22PIOcha97%2FBpAFvR1xIgEPjYMsczVCZaYqOq69Q%2Fl6L%2BD2I8ZPe&X-Amz-Signature=0912ea9fff6ec4efccfef37aa70654d8cf66daf4f3482c99ac0ae46d6139dcb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FOO3UHB%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIEdpxPKQhsFQ22qA%2B5knPx4zycfmDaiFsjy7ddswmcJZAiA%2FuQkrLZDjWYsN5VlgWCbJN7oBW4w4lqXbGrfZcMUJECr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM7yb8uf46gAlZOUvfKtwDChyAXx26jskxwfwseC3KbWrJ4QzdHziKljBes0obqNFL6IGXMLAJM27z%2B88M4lK4behfyE7ND44HyiZuj59PDXRyI9DpOdGkjbqPEHAOPNZ%2BvhoThnmtmS76JzS6kwjyOefksgxyWflJrWoNFbKHNlxZxIbF5whufW%2BYQWs5Exe5op3Ikqw%2B%2FAr6lT9ZJVwqUM5EqigDVg5pnJ4gOucGJ3fuhf0RIr6%2FZ4XDh3Y5TD4vD7O0ETg%2B5D4XXrhkj40OgVkJ%2B6YM%2FuLfxwzNZQk27G3gQ1hFoKpgM607K46JCpyrR%2BDaOpkEYWyiiCCAvVRy0W8mcspZo4q42GaMIyCNussyyRy6%2FI%2FCUV4Pw2Bk9MlN%2BE1hoQZwxHYjFYXPMkM%2BTbejLgs68081N0Mlbi%2Fzu4Rk0tGf3%2BK3%2FLkhmz8Q5Tse9qeRK3hQ12Uw19NMRkTBN4%2FhI%2BW6wctBY61lb%2FSLypLCXViDEdWwwU65gQdggnxuZ%2Bsw0fTp27SUel32rrAc7lEfJMJrVtg5HRFZOl%2FxfXdt0QL0N6TUGWYVKm6RFD0n764SrX8BO1bEd6P%2BtnLAIG7drHUSCk8uar0q8enLTpMOaj8WbiLKHLHqK8L%2F8lGwEl8lyCfpsIUitpgwhduDzQY6pgF30tzRoOwPvgSsYdCegOIx441GPBU6XWjTNV%2FgS89wmgpwumycUUO7fgjUn3FIeWHtN0WXzQaAUMRwLRrqkVsUsFXBY7mvy3fHMerBwZ7odcRhoQ7qMQ%2FczVLLDrPUzuABg26nDW5ozbsiNjdBaGRbtiSAJNl%2BlyO%2BGgzGPHfT22PIOcha97%2FBpAFvR1xIgEPjYMsczVCZaYqOq69Q%2Fl6L%2BD2I8ZPe&X-Amz-Signature=503f84fcd80a671c04734afd4af64925b764ad64157faa7342d0a7b93595359b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FOO3UHB%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIEdpxPKQhsFQ22qA%2B5knPx4zycfmDaiFsjy7ddswmcJZAiA%2FuQkrLZDjWYsN5VlgWCbJN7oBW4w4lqXbGrfZcMUJECr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM7yb8uf46gAlZOUvfKtwDChyAXx26jskxwfwseC3KbWrJ4QzdHziKljBes0obqNFL6IGXMLAJM27z%2B88M4lK4behfyE7ND44HyiZuj59PDXRyI9DpOdGkjbqPEHAOPNZ%2BvhoThnmtmS76JzS6kwjyOefksgxyWflJrWoNFbKHNlxZxIbF5whufW%2BYQWs5Exe5op3Ikqw%2B%2FAr6lT9ZJVwqUM5EqigDVg5pnJ4gOucGJ3fuhf0RIr6%2FZ4XDh3Y5TD4vD7O0ETg%2B5D4XXrhkj40OgVkJ%2B6YM%2FuLfxwzNZQk27G3gQ1hFoKpgM607K46JCpyrR%2BDaOpkEYWyiiCCAvVRy0W8mcspZo4q42GaMIyCNussyyRy6%2FI%2FCUV4Pw2Bk9MlN%2BE1hoQZwxHYjFYXPMkM%2BTbejLgs68081N0Mlbi%2Fzu4Rk0tGf3%2BK3%2FLkhmz8Q5Tse9qeRK3hQ12Uw19NMRkTBN4%2FhI%2BW6wctBY61lb%2FSLypLCXViDEdWwwU65gQdggnxuZ%2Bsw0fTp27SUel32rrAc7lEfJMJrVtg5HRFZOl%2FxfXdt0QL0N6TUGWYVKm6RFD0n764SrX8BO1bEd6P%2BtnLAIG7drHUSCk8uar0q8enLTpMOaj8WbiLKHLHqK8L%2F8lGwEl8lyCfpsIUitpgwhduDzQY6pgF30tzRoOwPvgSsYdCegOIx441GPBU6XWjTNV%2FgS89wmgpwumycUUO7fgjUn3FIeWHtN0WXzQaAUMRwLRrqkVsUsFXBY7mvy3fHMerBwZ7odcRhoQ7qMQ%2FczVLLDrPUzuABg26nDW5ozbsiNjdBaGRbtiSAJNl%2BlyO%2BGgzGPHfT22PIOcha97%2FBpAFvR1xIgEPjYMsczVCZaYqOq69Q%2Fl6L%2BD2I8ZPe&X-Amz-Signature=4c51f6e31b241985a640e22b72dc3e47e7ec805ceea60f439fa95529076f2e48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FOO3UHB%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIEdpxPKQhsFQ22qA%2B5knPx4zycfmDaiFsjy7ddswmcJZAiA%2FuQkrLZDjWYsN5VlgWCbJN7oBW4w4lqXbGrfZcMUJECr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM7yb8uf46gAlZOUvfKtwDChyAXx26jskxwfwseC3KbWrJ4QzdHziKljBes0obqNFL6IGXMLAJM27z%2B88M4lK4behfyE7ND44HyiZuj59PDXRyI9DpOdGkjbqPEHAOPNZ%2BvhoThnmtmS76JzS6kwjyOefksgxyWflJrWoNFbKHNlxZxIbF5whufW%2BYQWs5Exe5op3Ikqw%2B%2FAr6lT9ZJVwqUM5EqigDVg5pnJ4gOucGJ3fuhf0RIr6%2FZ4XDh3Y5TD4vD7O0ETg%2B5D4XXrhkj40OgVkJ%2B6YM%2FuLfxwzNZQk27G3gQ1hFoKpgM607K46JCpyrR%2BDaOpkEYWyiiCCAvVRy0W8mcspZo4q42GaMIyCNussyyRy6%2FI%2FCUV4Pw2Bk9MlN%2BE1hoQZwxHYjFYXPMkM%2BTbejLgs68081N0Mlbi%2Fzu4Rk0tGf3%2BK3%2FLkhmz8Q5Tse9qeRK3hQ12Uw19NMRkTBN4%2FhI%2BW6wctBY61lb%2FSLypLCXViDEdWwwU65gQdggnxuZ%2Bsw0fTp27SUel32rrAc7lEfJMJrVtg5HRFZOl%2FxfXdt0QL0N6TUGWYVKm6RFD0n764SrX8BO1bEd6P%2BtnLAIG7drHUSCk8uar0q8enLTpMOaj8WbiLKHLHqK8L%2F8lGwEl8lyCfpsIUitpgwhduDzQY6pgF30tzRoOwPvgSsYdCegOIx441GPBU6XWjTNV%2FgS89wmgpwumycUUO7fgjUn3FIeWHtN0WXzQaAUMRwLRrqkVsUsFXBY7mvy3fHMerBwZ7odcRhoQ7qMQ%2FczVLLDrPUzuABg26nDW5ozbsiNjdBaGRbtiSAJNl%2BlyO%2BGgzGPHfT22PIOcha97%2FBpAFvR1xIgEPjYMsczVCZaYqOq69Q%2Fl6L%2BD2I8ZPe&X-Amz-Signature=fa2c9012f8a035fcdc82ed55c472fae61597d5e9308b897e018f45413abd6f4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
