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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWEBIBVW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDOflfEQEQCgPJAAyIVGOCbP9OmNqoMJqVLq59rvaqcrgIhAOIadAFULfmK59unXNf6Uh97dtxVBU0uyG%2FhPWTxIYkjKv8DCGcQABoMNjM3NDIzMTgzODA1IgysyRQLRIi4cGOUYJUq3APWUOmP9VJ2cYJBivp0tX%2ByERJSFN99SYX52YpcKSCgPBRnpmJH7aiU7q1%2FNAVY3SD7tdrADf7gKfshh4tgOX%2FlEw7g3a9yES988wkDByHCksvnHNJBwyqRRWC7rf%2FVmrzUVCM5Mptw0zWjamviHAKBBOIVjQrcGkXQGFyYTFnEFDBwTkJ06xXx9s%2BGreRUPx8fm8YL75brw58zdtVcnUzuAIRZTtoDzuo940IkgX%2BkIQcbWkIZZTu0i6b32GF7f%2BsKhY8%2FALkLlENeSoREx8mVnNW4aRnAtbip6e6ELHTb5zQCfAjj6234XDtpMglKNQQ7AfWuNKBT3jgzUjodPdo3lJxumBZyAD22MWN8iy9lolHN%2Bb67lR86tS7yzsVNARdheclbpTBhwShGUVhf0bNWopw0hacmtAcRqRU2OXQFjiGK71rMGGXBDUZph1WZ3ZxQ7jdsg7tLiITuDSOjgcTyKHna%2FzgVc7C2ZhAvyn1SsCBYK7N0Wt%2B1oMNU7eg4a8vHVKd0U4DZ9tn5%2FA7UXJJ2AfoMMpq7XTRGO%2BSmWfjhSzgLmxE9lqtFCQ1mzQraJaimIzi%2BchaYRBMzFr1KH0FJG%2B0BXlJFyxF%2Bii4qH6Ld6%2B5sII56T9QdsQMTCTCI2P7EBjqkATF33pRo8a7Q40uQhvwODZj0X06lDwa0EoXnSj%2Fs9yUcCU6RDjBYW6N%2Fli5Hb%2FnAf0tUcD64arCfpwslGVb%2FYQZJllwwITBI3lfzh%2F5tngve4PLrDMNdrgMKxv2c5bBPonS0kBtjqmtQVZ%2FEXqTLwxbdLUzQpMlcQqGNh2I9Z0gJlQCh%2Bg%2FogqhhydMRWXRap3pL7QBOs2xwcvdp%2FNyR58gSvLpQ&X-Amz-Signature=09b00484d4d4963de6b537cdcfb60d6e8a1c19a154c63974ca6d1cbd9ff7887c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWEBIBVW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDOflfEQEQCgPJAAyIVGOCbP9OmNqoMJqVLq59rvaqcrgIhAOIadAFULfmK59unXNf6Uh97dtxVBU0uyG%2FhPWTxIYkjKv8DCGcQABoMNjM3NDIzMTgzODA1IgysyRQLRIi4cGOUYJUq3APWUOmP9VJ2cYJBivp0tX%2ByERJSFN99SYX52YpcKSCgPBRnpmJH7aiU7q1%2FNAVY3SD7tdrADf7gKfshh4tgOX%2FlEw7g3a9yES988wkDByHCksvnHNJBwyqRRWC7rf%2FVmrzUVCM5Mptw0zWjamviHAKBBOIVjQrcGkXQGFyYTFnEFDBwTkJ06xXx9s%2BGreRUPx8fm8YL75brw58zdtVcnUzuAIRZTtoDzuo940IkgX%2BkIQcbWkIZZTu0i6b32GF7f%2BsKhY8%2FALkLlENeSoREx8mVnNW4aRnAtbip6e6ELHTb5zQCfAjj6234XDtpMglKNQQ7AfWuNKBT3jgzUjodPdo3lJxumBZyAD22MWN8iy9lolHN%2Bb67lR86tS7yzsVNARdheclbpTBhwShGUVhf0bNWopw0hacmtAcRqRU2OXQFjiGK71rMGGXBDUZph1WZ3ZxQ7jdsg7tLiITuDSOjgcTyKHna%2FzgVc7C2ZhAvyn1SsCBYK7N0Wt%2B1oMNU7eg4a8vHVKd0U4DZ9tn5%2FA7UXJJ2AfoMMpq7XTRGO%2BSmWfjhSzgLmxE9lqtFCQ1mzQraJaimIzi%2BchaYRBMzFr1KH0FJG%2B0BXlJFyxF%2Bii4qH6Ld6%2B5sII56T9QdsQMTCTCI2P7EBjqkATF33pRo8a7Q40uQhvwODZj0X06lDwa0EoXnSj%2Fs9yUcCU6RDjBYW6N%2Fli5Hb%2FnAf0tUcD64arCfpwslGVb%2FYQZJllwwITBI3lfzh%2F5tngve4PLrDMNdrgMKxv2c5bBPonS0kBtjqmtQVZ%2FEXqTLwxbdLUzQpMlcQqGNh2I9Z0gJlQCh%2Bg%2FogqhhydMRWXRap3pL7QBOs2xwcvdp%2FNyR58gSvLpQ&X-Amz-Signature=4f3ac81453a95423abb6bf19b2025445d235116e06a34bada56fc398db5b010d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWEBIBVW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDOflfEQEQCgPJAAyIVGOCbP9OmNqoMJqVLq59rvaqcrgIhAOIadAFULfmK59unXNf6Uh97dtxVBU0uyG%2FhPWTxIYkjKv8DCGcQABoMNjM3NDIzMTgzODA1IgysyRQLRIi4cGOUYJUq3APWUOmP9VJ2cYJBivp0tX%2ByERJSFN99SYX52YpcKSCgPBRnpmJH7aiU7q1%2FNAVY3SD7tdrADf7gKfshh4tgOX%2FlEw7g3a9yES988wkDByHCksvnHNJBwyqRRWC7rf%2FVmrzUVCM5Mptw0zWjamviHAKBBOIVjQrcGkXQGFyYTFnEFDBwTkJ06xXx9s%2BGreRUPx8fm8YL75brw58zdtVcnUzuAIRZTtoDzuo940IkgX%2BkIQcbWkIZZTu0i6b32GF7f%2BsKhY8%2FALkLlENeSoREx8mVnNW4aRnAtbip6e6ELHTb5zQCfAjj6234XDtpMglKNQQ7AfWuNKBT3jgzUjodPdo3lJxumBZyAD22MWN8iy9lolHN%2Bb67lR86tS7yzsVNARdheclbpTBhwShGUVhf0bNWopw0hacmtAcRqRU2OXQFjiGK71rMGGXBDUZph1WZ3ZxQ7jdsg7tLiITuDSOjgcTyKHna%2FzgVc7C2ZhAvyn1SsCBYK7N0Wt%2B1oMNU7eg4a8vHVKd0U4DZ9tn5%2FA7UXJJ2AfoMMpq7XTRGO%2BSmWfjhSzgLmxE9lqtFCQ1mzQraJaimIzi%2BchaYRBMzFr1KH0FJG%2B0BXlJFyxF%2Bii4qH6Ld6%2B5sII56T9QdsQMTCTCI2P7EBjqkATF33pRo8a7Q40uQhvwODZj0X06lDwa0EoXnSj%2Fs9yUcCU6RDjBYW6N%2Fli5Hb%2FnAf0tUcD64arCfpwslGVb%2FYQZJllwwITBI3lfzh%2F5tngve4PLrDMNdrgMKxv2c5bBPonS0kBtjqmtQVZ%2FEXqTLwxbdLUzQpMlcQqGNh2I9Z0gJlQCh%2Bg%2FogqhhydMRWXRap3pL7QBOs2xwcvdp%2FNyR58gSvLpQ&X-Amz-Signature=89d438254cc6a64b3fe5f2873e6e1c695c031254071ba53bfa44041cee5e490c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWEBIBVW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDOflfEQEQCgPJAAyIVGOCbP9OmNqoMJqVLq59rvaqcrgIhAOIadAFULfmK59unXNf6Uh97dtxVBU0uyG%2FhPWTxIYkjKv8DCGcQABoMNjM3NDIzMTgzODA1IgysyRQLRIi4cGOUYJUq3APWUOmP9VJ2cYJBivp0tX%2ByERJSFN99SYX52YpcKSCgPBRnpmJH7aiU7q1%2FNAVY3SD7tdrADf7gKfshh4tgOX%2FlEw7g3a9yES988wkDByHCksvnHNJBwyqRRWC7rf%2FVmrzUVCM5Mptw0zWjamviHAKBBOIVjQrcGkXQGFyYTFnEFDBwTkJ06xXx9s%2BGreRUPx8fm8YL75brw58zdtVcnUzuAIRZTtoDzuo940IkgX%2BkIQcbWkIZZTu0i6b32GF7f%2BsKhY8%2FALkLlENeSoREx8mVnNW4aRnAtbip6e6ELHTb5zQCfAjj6234XDtpMglKNQQ7AfWuNKBT3jgzUjodPdo3lJxumBZyAD22MWN8iy9lolHN%2Bb67lR86tS7yzsVNARdheclbpTBhwShGUVhf0bNWopw0hacmtAcRqRU2OXQFjiGK71rMGGXBDUZph1WZ3ZxQ7jdsg7tLiITuDSOjgcTyKHna%2FzgVc7C2ZhAvyn1SsCBYK7N0Wt%2B1oMNU7eg4a8vHVKd0U4DZ9tn5%2FA7UXJJ2AfoMMpq7XTRGO%2BSmWfjhSzgLmxE9lqtFCQ1mzQraJaimIzi%2BchaYRBMzFr1KH0FJG%2B0BXlJFyxF%2Bii4qH6Ld6%2B5sII56T9QdsQMTCTCI2P7EBjqkATF33pRo8a7Q40uQhvwODZj0X06lDwa0EoXnSj%2Fs9yUcCU6RDjBYW6N%2Fli5Hb%2FnAf0tUcD64arCfpwslGVb%2FYQZJllwwITBI3lfzh%2F5tngve4PLrDMNdrgMKxv2c5bBPonS0kBtjqmtQVZ%2FEXqTLwxbdLUzQpMlcQqGNh2I9Z0gJlQCh%2Bg%2FogqhhydMRWXRap3pL7QBOs2xwcvdp%2FNyR58gSvLpQ&X-Amz-Signature=0aed85a867808796d64d219bc8169e49d104b7edcec4a14bbc33fdce8db341ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWEBIBVW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDOflfEQEQCgPJAAyIVGOCbP9OmNqoMJqVLq59rvaqcrgIhAOIadAFULfmK59unXNf6Uh97dtxVBU0uyG%2FhPWTxIYkjKv8DCGcQABoMNjM3NDIzMTgzODA1IgysyRQLRIi4cGOUYJUq3APWUOmP9VJ2cYJBivp0tX%2ByERJSFN99SYX52YpcKSCgPBRnpmJH7aiU7q1%2FNAVY3SD7tdrADf7gKfshh4tgOX%2FlEw7g3a9yES988wkDByHCksvnHNJBwyqRRWC7rf%2FVmrzUVCM5Mptw0zWjamviHAKBBOIVjQrcGkXQGFyYTFnEFDBwTkJ06xXx9s%2BGreRUPx8fm8YL75brw58zdtVcnUzuAIRZTtoDzuo940IkgX%2BkIQcbWkIZZTu0i6b32GF7f%2BsKhY8%2FALkLlENeSoREx8mVnNW4aRnAtbip6e6ELHTb5zQCfAjj6234XDtpMglKNQQ7AfWuNKBT3jgzUjodPdo3lJxumBZyAD22MWN8iy9lolHN%2Bb67lR86tS7yzsVNARdheclbpTBhwShGUVhf0bNWopw0hacmtAcRqRU2OXQFjiGK71rMGGXBDUZph1WZ3ZxQ7jdsg7tLiITuDSOjgcTyKHna%2FzgVc7C2ZhAvyn1SsCBYK7N0Wt%2B1oMNU7eg4a8vHVKd0U4DZ9tn5%2FA7UXJJ2AfoMMpq7XTRGO%2BSmWfjhSzgLmxE9lqtFCQ1mzQraJaimIzi%2BchaYRBMzFr1KH0FJG%2B0BXlJFyxF%2Bii4qH6Ld6%2B5sII56T9QdsQMTCTCI2P7EBjqkATF33pRo8a7Q40uQhvwODZj0X06lDwa0EoXnSj%2Fs9yUcCU6RDjBYW6N%2Fli5Hb%2FnAf0tUcD64arCfpwslGVb%2FYQZJllwwITBI3lfzh%2F5tngve4PLrDMNdrgMKxv2c5bBPonS0kBtjqmtQVZ%2FEXqTLwxbdLUzQpMlcQqGNh2I9Z0gJlQCh%2Bg%2FogqhhydMRWXRap3pL7QBOs2xwcvdp%2FNyR58gSvLpQ&X-Amz-Signature=4a999724e03d8bb038313d2860664f3144a371ddc518601845a45adcb4eb6cba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWEBIBVW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDOflfEQEQCgPJAAyIVGOCbP9OmNqoMJqVLq59rvaqcrgIhAOIadAFULfmK59unXNf6Uh97dtxVBU0uyG%2FhPWTxIYkjKv8DCGcQABoMNjM3NDIzMTgzODA1IgysyRQLRIi4cGOUYJUq3APWUOmP9VJ2cYJBivp0tX%2ByERJSFN99SYX52YpcKSCgPBRnpmJH7aiU7q1%2FNAVY3SD7tdrADf7gKfshh4tgOX%2FlEw7g3a9yES988wkDByHCksvnHNJBwyqRRWC7rf%2FVmrzUVCM5Mptw0zWjamviHAKBBOIVjQrcGkXQGFyYTFnEFDBwTkJ06xXx9s%2BGreRUPx8fm8YL75brw58zdtVcnUzuAIRZTtoDzuo940IkgX%2BkIQcbWkIZZTu0i6b32GF7f%2BsKhY8%2FALkLlENeSoREx8mVnNW4aRnAtbip6e6ELHTb5zQCfAjj6234XDtpMglKNQQ7AfWuNKBT3jgzUjodPdo3lJxumBZyAD22MWN8iy9lolHN%2Bb67lR86tS7yzsVNARdheclbpTBhwShGUVhf0bNWopw0hacmtAcRqRU2OXQFjiGK71rMGGXBDUZph1WZ3ZxQ7jdsg7tLiITuDSOjgcTyKHna%2FzgVc7C2ZhAvyn1SsCBYK7N0Wt%2B1oMNU7eg4a8vHVKd0U4DZ9tn5%2FA7UXJJ2AfoMMpq7XTRGO%2BSmWfjhSzgLmxE9lqtFCQ1mzQraJaimIzi%2BchaYRBMzFr1KH0FJG%2B0BXlJFyxF%2Bii4qH6Ld6%2B5sII56T9QdsQMTCTCI2P7EBjqkATF33pRo8a7Q40uQhvwODZj0X06lDwa0EoXnSj%2Fs9yUcCU6RDjBYW6N%2Fli5Hb%2FnAf0tUcD64arCfpwslGVb%2FYQZJllwwITBI3lfzh%2F5tngve4PLrDMNdrgMKxv2c5bBPonS0kBtjqmtQVZ%2FEXqTLwxbdLUzQpMlcQqGNh2I9Z0gJlQCh%2Bg%2FogqhhydMRWXRap3pL7QBOs2xwcvdp%2FNyR58gSvLpQ&X-Amz-Signature=a89fbb84a1b7e9e5bbf43246c2a3891cffb836b8b64c7ef17bd7fbe478cd400c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWEBIBVW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDOflfEQEQCgPJAAyIVGOCbP9OmNqoMJqVLq59rvaqcrgIhAOIadAFULfmK59unXNf6Uh97dtxVBU0uyG%2FhPWTxIYkjKv8DCGcQABoMNjM3NDIzMTgzODA1IgysyRQLRIi4cGOUYJUq3APWUOmP9VJ2cYJBivp0tX%2ByERJSFN99SYX52YpcKSCgPBRnpmJH7aiU7q1%2FNAVY3SD7tdrADf7gKfshh4tgOX%2FlEw7g3a9yES988wkDByHCksvnHNJBwyqRRWC7rf%2FVmrzUVCM5Mptw0zWjamviHAKBBOIVjQrcGkXQGFyYTFnEFDBwTkJ06xXx9s%2BGreRUPx8fm8YL75brw58zdtVcnUzuAIRZTtoDzuo940IkgX%2BkIQcbWkIZZTu0i6b32GF7f%2BsKhY8%2FALkLlENeSoREx8mVnNW4aRnAtbip6e6ELHTb5zQCfAjj6234XDtpMglKNQQ7AfWuNKBT3jgzUjodPdo3lJxumBZyAD22MWN8iy9lolHN%2Bb67lR86tS7yzsVNARdheclbpTBhwShGUVhf0bNWopw0hacmtAcRqRU2OXQFjiGK71rMGGXBDUZph1WZ3ZxQ7jdsg7tLiITuDSOjgcTyKHna%2FzgVc7C2ZhAvyn1SsCBYK7N0Wt%2B1oMNU7eg4a8vHVKd0U4DZ9tn5%2FA7UXJJ2AfoMMpq7XTRGO%2BSmWfjhSzgLmxE9lqtFCQ1mzQraJaimIzi%2BchaYRBMzFr1KH0FJG%2B0BXlJFyxF%2Bii4qH6Ld6%2B5sII56T9QdsQMTCTCI2P7EBjqkATF33pRo8a7Q40uQhvwODZj0X06lDwa0EoXnSj%2Fs9yUcCU6RDjBYW6N%2Fli5Hb%2FnAf0tUcD64arCfpwslGVb%2FYQZJllwwITBI3lfzh%2F5tngve4PLrDMNdrgMKxv2c5bBPonS0kBtjqmtQVZ%2FEXqTLwxbdLUzQpMlcQqGNh2I9Z0gJlQCh%2Bg%2FogqhhydMRWXRap3pL7QBOs2xwcvdp%2FNyR58gSvLpQ&X-Amz-Signature=618c84913916676439424028232cab9c6b9ef7ac2b206789656a65057edb1cbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWEBIBVW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDOflfEQEQCgPJAAyIVGOCbP9OmNqoMJqVLq59rvaqcrgIhAOIadAFULfmK59unXNf6Uh97dtxVBU0uyG%2FhPWTxIYkjKv8DCGcQABoMNjM3NDIzMTgzODA1IgysyRQLRIi4cGOUYJUq3APWUOmP9VJ2cYJBivp0tX%2ByERJSFN99SYX52YpcKSCgPBRnpmJH7aiU7q1%2FNAVY3SD7tdrADf7gKfshh4tgOX%2FlEw7g3a9yES988wkDByHCksvnHNJBwyqRRWC7rf%2FVmrzUVCM5Mptw0zWjamviHAKBBOIVjQrcGkXQGFyYTFnEFDBwTkJ06xXx9s%2BGreRUPx8fm8YL75brw58zdtVcnUzuAIRZTtoDzuo940IkgX%2BkIQcbWkIZZTu0i6b32GF7f%2BsKhY8%2FALkLlENeSoREx8mVnNW4aRnAtbip6e6ELHTb5zQCfAjj6234XDtpMglKNQQ7AfWuNKBT3jgzUjodPdo3lJxumBZyAD22MWN8iy9lolHN%2Bb67lR86tS7yzsVNARdheclbpTBhwShGUVhf0bNWopw0hacmtAcRqRU2OXQFjiGK71rMGGXBDUZph1WZ3ZxQ7jdsg7tLiITuDSOjgcTyKHna%2FzgVc7C2ZhAvyn1SsCBYK7N0Wt%2B1oMNU7eg4a8vHVKd0U4DZ9tn5%2FA7UXJJ2AfoMMpq7XTRGO%2BSmWfjhSzgLmxE9lqtFCQ1mzQraJaimIzi%2BchaYRBMzFr1KH0FJG%2B0BXlJFyxF%2Bii4qH6Ld6%2B5sII56T9QdsQMTCTCI2P7EBjqkATF33pRo8a7Q40uQhvwODZj0X06lDwa0EoXnSj%2Fs9yUcCU6RDjBYW6N%2Fli5Hb%2FnAf0tUcD64arCfpwslGVb%2FYQZJllwwITBI3lfzh%2F5tngve4PLrDMNdrgMKxv2c5bBPonS0kBtjqmtQVZ%2FEXqTLwxbdLUzQpMlcQqGNh2I9Z0gJlQCh%2Bg%2FogqhhydMRWXRap3pL7QBOs2xwcvdp%2FNyR58gSvLpQ&X-Amz-Signature=0de1f8a685b4788ba0ecd4843c881047cafba0d2ec8be6aa3bfed6d73483da2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWEBIBVW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDOflfEQEQCgPJAAyIVGOCbP9OmNqoMJqVLq59rvaqcrgIhAOIadAFULfmK59unXNf6Uh97dtxVBU0uyG%2FhPWTxIYkjKv8DCGcQABoMNjM3NDIzMTgzODA1IgysyRQLRIi4cGOUYJUq3APWUOmP9VJ2cYJBivp0tX%2ByERJSFN99SYX52YpcKSCgPBRnpmJH7aiU7q1%2FNAVY3SD7tdrADf7gKfshh4tgOX%2FlEw7g3a9yES988wkDByHCksvnHNJBwyqRRWC7rf%2FVmrzUVCM5Mptw0zWjamviHAKBBOIVjQrcGkXQGFyYTFnEFDBwTkJ06xXx9s%2BGreRUPx8fm8YL75brw58zdtVcnUzuAIRZTtoDzuo940IkgX%2BkIQcbWkIZZTu0i6b32GF7f%2BsKhY8%2FALkLlENeSoREx8mVnNW4aRnAtbip6e6ELHTb5zQCfAjj6234XDtpMglKNQQ7AfWuNKBT3jgzUjodPdo3lJxumBZyAD22MWN8iy9lolHN%2Bb67lR86tS7yzsVNARdheclbpTBhwShGUVhf0bNWopw0hacmtAcRqRU2OXQFjiGK71rMGGXBDUZph1WZ3ZxQ7jdsg7tLiITuDSOjgcTyKHna%2FzgVc7C2ZhAvyn1SsCBYK7N0Wt%2B1oMNU7eg4a8vHVKd0U4DZ9tn5%2FA7UXJJ2AfoMMpq7XTRGO%2BSmWfjhSzgLmxE9lqtFCQ1mzQraJaimIzi%2BchaYRBMzFr1KH0FJG%2B0BXlJFyxF%2Bii4qH6Ld6%2B5sII56T9QdsQMTCTCI2P7EBjqkATF33pRo8a7Q40uQhvwODZj0X06lDwa0EoXnSj%2Fs9yUcCU6RDjBYW6N%2Fli5Hb%2FnAf0tUcD64arCfpwslGVb%2FYQZJllwwITBI3lfzh%2F5tngve4PLrDMNdrgMKxv2c5bBPonS0kBtjqmtQVZ%2FEXqTLwxbdLUzQpMlcQqGNh2I9Z0gJlQCh%2Bg%2FogqhhydMRWXRap3pL7QBOs2xwcvdp%2FNyR58gSvLpQ&X-Amz-Signature=2a47a2a1a9d5b739fda89467b899a76fb0d0959c9679277dc2abff66750726d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWEBIBVW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDOflfEQEQCgPJAAyIVGOCbP9OmNqoMJqVLq59rvaqcrgIhAOIadAFULfmK59unXNf6Uh97dtxVBU0uyG%2FhPWTxIYkjKv8DCGcQABoMNjM3NDIzMTgzODA1IgysyRQLRIi4cGOUYJUq3APWUOmP9VJ2cYJBivp0tX%2ByERJSFN99SYX52YpcKSCgPBRnpmJH7aiU7q1%2FNAVY3SD7tdrADf7gKfshh4tgOX%2FlEw7g3a9yES988wkDByHCksvnHNJBwyqRRWC7rf%2FVmrzUVCM5Mptw0zWjamviHAKBBOIVjQrcGkXQGFyYTFnEFDBwTkJ06xXx9s%2BGreRUPx8fm8YL75brw58zdtVcnUzuAIRZTtoDzuo940IkgX%2BkIQcbWkIZZTu0i6b32GF7f%2BsKhY8%2FALkLlENeSoREx8mVnNW4aRnAtbip6e6ELHTb5zQCfAjj6234XDtpMglKNQQ7AfWuNKBT3jgzUjodPdo3lJxumBZyAD22MWN8iy9lolHN%2Bb67lR86tS7yzsVNARdheclbpTBhwShGUVhf0bNWopw0hacmtAcRqRU2OXQFjiGK71rMGGXBDUZph1WZ3ZxQ7jdsg7tLiITuDSOjgcTyKHna%2FzgVc7C2ZhAvyn1SsCBYK7N0Wt%2B1oMNU7eg4a8vHVKd0U4DZ9tn5%2FA7UXJJ2AfoMMpq7XTRGO%2BSmWfjhSzgLmxE9lqtFCQ1mzQraJaimIzi%2BchaYRBMzFr1KH0FJG%2B0BXlJFyxF%2Bii4qH6Ld6%2B5sII56T9QdsQMTCTCI2P7EBjqkATF33pRo8a7Q40uQhvwODZj0X06lDwa0EoXnSj%2Fs9yUcCU6RDjBYW6N%2Fli5Hb%2FnAf0tUcD64arCfpwslGVb%2FYQZJllwwITBI3lfzh%2F5tngve4PLrDMNdrgMKxv2c5bBPonS0kBtjqmtQVZ%2FEXqTLwxbdLUzQpMlcQqGNh2I9Z0gJlQCh%2Bg%2FogqhhydMRWXRap3pL7QBOs2xwcvdp%2FNyR58gSvLpQ&X-Amz-Signature=34836a33fa0d1f2ce11557bfd1b55195edee1a1e3938c6684e6778c6427a5a0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWEBIBVW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDOflfEQEQCgPJAAyIVGOCbP9OmNqoMJqVLq59rvaqcrgIhAOIadAFULfmK59unXNf6Uh97dtxVBU0uyG%2FhPWTxIYkjKv8DCGcQABoMNjM3NDIzMTgzODA1IgysyRQLRIi4cGOUYJUq3APWUOmP9VJ2cYJBivp0tX%2ByERJSFN99SYX52YpcKSCgPBRnpmJH7aiU7q1%2FNAVY3SD7tdrADf7gKfshh4tgOX%2FlEw7g3a9yES988wkDByHCksvnHNJBwyqRRWC7rf%2FVmrzUVCM5Mptw0zWjamviHAKBBOIVjQrcGkXQGFyYTFnEFDBwTkJ06xXx9s%2BGreRUPx8fm8YL75brw58zdtVcnUzuAIRZTtoDzuo940IkgX%2BkIQcbWkIZZTu0i6b32GF7f%2BsKhY8%2FALkLlENeSoREx8mVnNW4aRnAtbip6e6ELHTb5zQCfAjj6234XDtpMglKNQQ7AfWuNKBT3jgzUjodPdo3lJxumBZyAD22MWN8iy9lolHN%2Bb67lR86tS7yzsVNARdheclbpTBhwShGUVhf0bNWopw0hacmtAcRqRU2OXQFjiGK71rMGGXBDUZph1WZ3ZxQ7jdsg7tLiITuDSOjgcTyKHna%2FzgVc7C2ZhAvyn1SsCBYK7N0Wt%2B1oMNU7eg4a8vHVKd0U4DZ9tn5%2FA7UXJJ2AfoMMpq7XTRGO%2BSmWfjhSzgLmxE9lqtFCQ1mzQraJaimIzi%2BchaYRBMzFr1KH0FJG%2B0BXlJFyxF%2Bii4qH6Ld6%2B5sII56T9QdsQMTCTCI2P7EBjqkATF33pRo8a7Q40uQhvwODZj0X06lDwa0EoXnSj%2Fs9yUcCU6RDjBYW6N%2Fli5Hb%2FnAf0tUcD64arCfpwslGVb%2FYQZJllwwITBI3lfzh%2F5tngve4PLrDMNdrgMKxv2c5bBPonS0kBtjqmtQVZ%2FEXqTLwxbdLUzQpMlcQqGNh2I9Z0gJlQCh%2Bg%2FogqhhydMRWXRap3pL7QBOs2xwcvdp%2FNyR58gSvLpQ&X-Amz-Signature=6f21d57710baceed0a6201c0020d740d0a86cc9d526eb51387df5b41a1925195&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWEBIBVW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDOflfEQEQCgPJAAyIVGOCbP9OmNqoMJqVLq59rvaqcrgIhAOIadAFULfmK59unXNf6Uh97dtxVBU0uyG%2FhPWTxIYkjKv8DCGcQABoMNjM3NDIzMTgzODA1IgysyRQLRIi4cGOUYJUq3APWUOmP9VJ2cYJBivp0tX%2ByERJSFN99SYX52YpcKSCgPBRnpmJH7aiU7q1%2FNAVY3SD7tdrADf7gKfshh4tgOX%2FlEw7g3a9yES988wkDByHCksvnHNJBwyqRRWC7rf%2FVmrzUVCM5Mptw0zWjamviHAKBBOIVjQrcGkXQGFyYTFnEFDBwTkJ06xXx9s%2BGreRUPx8fm8YL75brw58zdtVcnUzuAIRZTtoDzuo940IkgX%2BkIQcbWkIZZTu0i6b32GF7f%2BsKhY8%2FALkLlENeSoREx8mVnNW4aRnAtbip6e6ELHTb5zQCfAjj6234XDtpMglKNQQ7AfWuNKBT3jgzUjodPdo3lJxumBZyAD22MWN8iy9lolHN%2Bb67lR86tS7yzsVNARdheclbpTBhwShGUVhf0bNWopw0hacmtAcRqRU2OXQFjiGK71rMGGXBDUZph1WZ3ZxQ7jdsg7tLiITuDSOjgcTyKHna%2FzgVc7C2ZhAvyn1SsCBYK7N0Wt%2B1oMNU7eg4a8vHVKd0U4DZ9tn5%2FA7UXJJ2AfoMMpq7XTRGO%2BSmWfjhSzgLmxE9lqtFCQ1mzQraJaimIzi%2BchaYRBMzFr1KH0FJG%2B0BXlJFyxF%2Bii4qH6Ld6%2B5sII56T9QdsQMTCTCI2P7EBjqkATF33pRo8a7Q40uQhvwODZj0X06lDwa0EoXnSj%2Fs9yUcCU6RDjBYW6N%2Fli5Hb%2FnAf0tUcD64arCfpwslGVb%2FYQZJllwwITBI3lfzh%2F5tngve4PLrDMNdrgMKxv2c5bBPonS0kBtjqmtQVZ%2FEXqTLwxbdLUzQpMlcQqGNh2I9Z0gJlQCh%2Bg%2FogqhhydMRWXRap3pL7QBOs2xwcvdp%2FNyR58gSvLpQ&X-Amz-Signature=f89108e4b27175ca3b8b2731dd2940d080110aef971a50172c87fd8b4e2bafd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWEBIBVW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDOflfEQEQCgPJAAyIVGOCbP9OmNqoMJqVLq59rvaqcrgIhAOIadAFULfmK59unXNf6Uh97dtxVBU0uyG%2FhPWTxIYkjKv8DCGcQABoMNjM3NDIzMTgzODA1IgysyRQLRIi4cGOUYJUq3APWUOmP9VJ2cYJBivp0tX%2ByERJSFN99SYX52YpcKSCgPBRnpmJH7aiU7q1%2FNAVY3SD7tdrADf7gKfshh4tgOX%2FlEw7g3a9yES988wkDByHCksvnHNJBwyqRRWC7rf%2FVmrzUVCM5Mptw0zWjamviHAKBBOIVjQrcGkXQGFyYTFnEFDBwTkJ06xXx9s%2BGreRUPx8fm8YL75brw58zdtVcnUzuAIRZTtoDzuo940IkgX%2BkIQcbWkIZZTu0i6b32GF7f%2BsKhY8%2FALkLlENeSoREx8mVnNW4aRnAtbip6e6ELHTb5zQCfAjj6234XDtpMglKNQQ7AfWuNKBT3jgzUjodPdo3lJxumBZyAD22MWN8iy9lolHN%2Bb67lR86tS7yzsVNARdheclbpTBhwShGUVhf0bNWopw0hacmtAcRqRU2OXQFjiGK71rMGGXBDUZph1WZ3ZxQ7jdsg7tLiITuDSOjgcTyKHna%2FzgVc7C2ZhAvyn1SsCBYK7N0Wt%2B1oMNU7eg4a8vHVKd0U4DZ9tn5%2FA7UXJJ2AfoMMpq7XTRGO%2BSmWfjhSzgLmxE9lqtFCQ1mzQraJaimIzi%2BchaYRBMzFr1KH0FJG%2B0BXlJFyxF%2Bii4qH6Ld6%2B5sII56T9QdsQMTCTCI2P7EBjqkATF33pRo8a7Q40uQhvwODZj0X06lDwa0EoXnSj%2Fs9yUcCU6RDjBYW6N%2Fli5Hb%2FnAf0tUcD64arCfpwslGVb%2FYQZJllwwITBI3lfzh%2F5tngve4PLrDMNdrgMKxv2c5bBPonS0kBtjqmtQVZ%2FEXqTLwxbdLUzQpMlcQqGNh2I9Z0gJlQCh%2Bg%2FogqhhydMRWXRap3pL7QBOs2xwcvdp%2FNyR58gSvLpQ&X-Amz-Signature=642f90479423d202fe456bbd960df73ac556fa9334801c5402327b29005242f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWEBIBVW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDOflfEQEQCgPJAAyIVGOCbP9OmNqoMJqVLq59rvaqcrgIhAOIadAFULfmK59unXNf6Uh97dtxVBU0uyG%2FhPWTxIYkjKv8DCGcQABoMNjM3NDIzMTgzODA1IgysyRQLRIi4cGOUYJUq3APWUOmP9VJ2cYJBivp0tX%2ByERJSFN99SYX52YpcKSCgPBRnpmJH7aiU7q1%2FNAVY3SD7tdrADf7gKfshh4tgOX%2FlEw7g3a9yES988wkDByHCksvnHNJBwyqRRWC7rf%2FVmrzUVCM5Mptw0zWjamviHAKBBOIVjQrcGkXQGFyYTFnEFDBwTkJ06xXx9s%2BGreRUPx8fm8YL75brw58zdtVcnUzuAIRZTtoDzuo940IkgX%2BkIQcbWkIZZTu0i6b32GF7f%2BsKhY8%2FALkLlENeSoREx8mVnNW4aRnAtbip6e6ELHTb5zQCfAjj6234XDtpMglKNQQ7AfWuNKBT3jgzUjodPdo3lJxumBZyAD22MWN8iy9lolHN%2Bb67lR86tS7yzsVNARdheclbpTBhwShGUVhf0bNWopw0hacmtAcRqRU2OXQFjiGK71rMGGXBDUZph1WZ3ZxQ7jdsg7tLiITuDSOjgcTyKHna%2FzgVc7C2ZhAvyn1SsCBYK7N0Wt%2B1oMNU7eg4a8vHVKd0U4DZ9tn5%2FA7UXJJ2AfoMMpq7XTRGO%2BSmWfjhSzgLmxE9lqtFCQ1mzQraJaimIzi%2BchaYRBMzFr1KH0FJG%2B0BXlJFyxF%2Bii4qH6Ld6%2B5sII56T9QdsQMTCTCI2P7EBjqkATF33pRo8a7Q40uQhvwODZj0X06lDwa0EoXnSj%2Fs9yUcCU6RDjBYW6N%2Fli5Hb%2FnAf0tUcD64arCfpwslGVb%2FYQZJllwwITBI3lfzh%2F5tngve4PLrDMNdrgMKxv2c5bBPonS0kBtjqmtQVZ%2FEXqTLwxbdLUzQpMlcQqGNh2I9Z0gJlQCh%2Bg%2FogqhhydMRWXRap3pL7QBOs2xwcvdp%2FNyR58gSvLpQ&X-Amz-Signature=431cbaa8f459f9d93930f4edd08150cbb04a55211d8e43f2aaacb9fed7553f37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
