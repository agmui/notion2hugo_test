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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KXT5XET%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwNFPX2gAhDRifmjFxSnBU3%2FT%2BOrj%2FajnuYTP6PWmGpAiEA4KHgMhPc00j8S%2BEG7Buk9LV2D%2FERqvVbWcG14bdFBcgqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5snu%2FgpFF2hfVsuyrcA2Fs5F2fewIm%2BXiIV934V5BwojESWao6%2BrtRULIiuz2%2Bv68LaNRAidLL4nEfraOSBV5SZ44tIaDdRQWkxoyb%2BnN681Nr9mc66qN4pLajxo4XoaHU2dTWRXWAaW9kOAxJlMb26b80hByZCsEDNJYyBMlgVZ%2BMvRDPX2C2odgjKJvmABKTP4nRhvBTMoO7d8CKMLZiaZiaedh0y4fN1jxumQuK1Awb7EhbFSnz5N92OzF%2FXAyoS55Uzm3r6%2FPrt%2FZQp9Ni8wXdwd2q8RP21dR1fTxIsAcU0E6DBAizIi%2FTvnkxXFTNfLKAFda9oCOtqJy2%2FqThW47L%2BH1k9YzfGXcv2vZawm2ZYLAyXjsNwodaisynR7dPVG%2FvIdvJg8nLBTG5xJfI9ZGNIBY5Y8399k7KOqYA5W6rCtkIkEaqpCi3985MDgkvISQU5MUU7KtqSIAikBJVug8gHMjx9MFlTeJSBHt6dR9spl0SuA9Gw9FeaT76YqyLMooOcQlD79T9QWb0b12JUzV2%2BIQ7Ho0QNG6NHOkWoAEPCF%2BFfB8sCnpcJWLc7AINI2XIfv4d5%2B68TsWQXHMxbZt%2FHz55GWHeEjnFqcdOZUjpan0n1iQLK268x1J1C7ttOlpzaZ83jP20MNOy38QGOqUBVqzUOyIn7Vu6y9yvYLijuIbjEQ2QajRidoW7erq2lGu%2BH1yd9DaAkE39Odyo0rOaxe9lK59x12%2BwHRMnVuC52JqPP150Ku6YwpYlyQtQFB4MODXDB8WQ02fBNoFMb758Abob%2FkXOuJjh%2FNGM6vkHJKGXiC%2F8E9x9rQCmxKM4nWN7cytvKflo7Ul%2Bwooz3ES%2FTvdlrjvX9uDTBo3E71O%2FMMZv0Zqq&X-Amz-Signature=605abbd7a4fe424a8d73f18faeaa8b3c273cfdb1344540a570c201a42df7f7a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KXT5XET%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwNFPX2gAhDRifmjFxSnBU3%2FT%2BOrj%2FajnuYTP6PWmGpAiEA4KHgMhPc00j8S%2BEG7Buk9LV2D%2FERqvVbWcG14bdFBcgqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5snu%2FgpFF2hfVsuyrcA2Fs5F2fewIm%2BXiIV934V5BwojESWao6%2BrtRULIiuz2%2Bv68LaNRAidLL4nEfraOSBV5SZ44tIaDdRQWkxoyb%2BnN681Nr9mc66qN4pLajxo4XoaHU2dTWRXWAaW9kOAxJlMb26b80hByZCsEDNJYyBMlgVZ%2BMvRDPX2C2odgjKJvmABKTP4nRhvBTMoO7d8CKMLZiaZiaedh0y4fN1jxumQuK1Awb7EhbFSnz5N92OzF%2FXAyoS55Uzm3r6%2FPrt%2FZQp9Ni8wXdwd2q8RP21dR1fTxIsAcU0E6DBAizIi%2FTvnkxXFTNfLKAFda9oCOtqJy2%2FqThW47L%2BH1k9YzfGXcv2vZawm2ZYLAyXjsNwodaisynR7dPVG%2FvIdvJg8nLBTG5xJfI9ZGNIBY5Y8399k7KOqYA5W6rCtkIkEaqpCi3985MDgkvISQU5MUU7KtqSIAikBJVug8gHMjx9MFlTeJSBHt6dR9spl0SuA9Gw9FeaT76YqyLMooOcQlD79T9QWb0b12JUzV2%2BIQ7Ho0QNG6NHOkWoAEPCF%2BFfB8sCnpcJWLc7AINI2XIfv4d5%2B68TsWQXHMxbZt%2FHz55GWHeEjnFqcdOZUjpan0n1iQLK268x1J1C7ttOlpzaZ83jP20MNOy38QGOqUBVqzUOyIn7Vu6y9yvYLijuIbjEQ2QajRidoW7erq2lGu%2BH1yd9DaAkE39Odyo0rOaxe9lK59x12%2BwHRMnVuC52JqPP150Ku6YwpYlyQtQFB4MODXDB8WQ02fBNoFMb758Abob%2FkXOuJjh%2FNGM6vkHJKGXiC%2F8E9x9rQCmxKM4nWN7cytvKflo7Ul%2Bwooz3ES%2FTvdlrjvX9uDTBo3E71O%2FMMZv0Zqq&X-Amz-Signature=6d85c7d0c3686eb1f5312f6e7be879f4b020b266e9a84cdbbf36794240c7fe78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KXT5XET%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwNFPX2gAhDRifmjFxSnBU3%2FT%2BOrj%2FajnuYTP6PWmGpAiEA4KHgMhPc00j8S%2BEG7Buk9LV2D%2FERqvVbWcG14bdFBcgqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5snu%2FgpFF2hfVsuyrcA2Fs5F2fewIm%2BXiIV934V5BwojESWao6%2BrtRULIiuz2%2Bv68LaNRAidLL4nEfraOSBV5SZ44tIaDdRQWkxoyb%2BnN681Nr9mc66qN4pLajxo4XoaHU2dTWRXWAaW9kOAxJlMb26b80hByZCsEDNJYyBMlgVZ%2BMvRDPX2C2odgjKJvmABKTP4nRhvBTMoO7d8CKMLZiaZiaedh0y4fN1jxumQuK1Awb7EhbFSnz5N92OzF%2FXAyoS55Uzm3r6%2FPrt%2FZQp9Ni8wXdwd2q8RP21dR1fTxIsAcU0E6DBAizIi%2FTvnkxXFTNfLKAFda9oCOtqJy2%2FqThW47L%2BH1k9YzfGXcv2vZawm2ZYLAyXjsNwodaisynR7dPVG%2FvIdvJg8nLBTG5xJfI9ZGNIBY5Y8399k7KOqYA5W6rCtkIkEaqpCi3985MDgkvISQU5MUU7KtqSIAikBJVug8gHMjx9MFlTeJSBHt6dR9spl0SuA9Gw9FeaT76YqyLMooOcQlD79T9QWb0b12JUzV2%2BIQ7Ho0QNG6NHOkWoAEPCF%2BFfB8sCnpcJWLc7AINI2XIfv4d5%2B68TsWQXHMxbZt%2FHz55GWHeEjnFqcdOZUjpan0n1iQLK268x1J1C7ttOlpzaZ83jP20MNOy38QGOqUBVqzUOyIn7Vu6y9yvYLijuIbjEQ2QajRidoW7erq2lGu%2BH1yd9DaAkE39Odyo0rOaxe9lK59x12%2BwHRMnVuC52JqPP150Ku6YwpYlyQtQFB4MODXDB8WQ02fBNoFMb758Abob%2FkXOuJjh%2FNGM6vkHJKGXiC%2F8E9x9rQCmxKM4nWN7cytvKflo7Ul%2Bwooz3ES%2FTvdlrjvX9uDTBo3E71O%2FMMZv0Zqq&X-Amz-Signature=019656218884efe878b352d1b63e73de64acfb2793ee9c2d34faa0d3cddc71c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KXT5XET%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwNFPX2gAhDRifmjFxSnBU3%2FT%2BOrj%2FajnuYTP6PWmGpAiEA4KHgMhPc00j8S%2BEG7Buk9LV2D%2FERqvVbWcG14bdFBcgqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5snu%2FgpFF2hfVsuyrcA2Fs5F2fewIm%2BXiIV934V5BwojESWao6%2BrtRULIiuz2%2Bv68LaNRAidLL4nEfraOSBV5SZ44tIaDdRQWkxoyb%2BnN681Nr9mc66qN4pLajxo4XoaHU2dTWRXWAaW9kOAxJlMb26b80hByZCsEDNJYyBMlgVZ%2BMvRDPX2C2odgjKJvmABKTP4nRhvBTMoO7d8CKMLZiaZiaedh0y4fN1jxumQuK1Awb7EhbFSnz5N92OzF%2FXAyoS55Uzm3r6%2FPrt%2FZQp9Ni8wXdwd2q8RP21dR1fTxIsAcU0E6DBAizIi%2FTvnkxXFTNfLKAFda9oCOtqJy2%2FqThW47L%2BH1k9YzfGXcv2vZawm2ZYLAyXjsNwodaisynR7dPVG%2FvIdvJg8nLBTG5xJfI9ZGNIBY5Y8399k7KOqYA5W6rCtkIkEaqpCi3985MDgkvISQU5MUU7KtqSIAikBJVug8gHMjx9MFlTeJSBHt6dR9spl0SuA9Gw9FeaT76YqyLMooOcQlD79T9QWb0b12JUzV2%2BIQ7Ho0QNG6NHOkWoAEPCF%2BFfB8sCnpcJWLc7AINI2XIfv4d5%2B68TsWQXHMxbZt%2FHz55GWHeEjnFqcdOZUjpan0n1iQLK268x1J1C7ttOlpzaZ83jP20MNOy38QGOqUBVqzUOyIn7Vu6y9yvYLijuIbjEQ2QajRidoW7erq2lGu%2BH1yd9DaAkE39Odyo0rOaxe9lK59x12%2BwHRMnVuC52JqPP150Ku6YwpYlyQtQFB4MODXDB8WQ02fBNoFMb758Abob%2FkXOuJjh%2FNGM6vkHJKGXiC%2F8E9x9rQCmxKM4nWN7cytvKflo7Ul%2Bwooz3ES%2FTvdlrjvX9uDTBo3E71O%2FMMZv0Zqq&X-Amz-Signature=a6410d91e5946cdbe905f3d103c92b8d8d51715acf9f67a9156eea26e7dc03ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KXT5XET%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwNFPX2gAhDRifmjFxSnBU3%2FT%2BOrj%2FajnuYTP6PWmGpAiEA4KHgMhPc00j8S%2BEG7Buk9LV2D%2FERqvVbWcG14bdFBcgqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5snu%2FgpFF2hfVsuyrcA2Fs5F2fewIm%2BXiIV934V5BwojESWao6%2BrtRULIiuz2%2Bv68LaNRAidLL4nEfraOSBV5SZ44tIaDdRQWkxoyb%2BnN681Nr9mc66qN4pLajxo4XoaHU2dTWRXWAaW9kOAxJlMb26b80hByZCsEDNJYyBMlgVZ%2BMvRDPX2C2odgjKJvmABKTP4nRhvBTMoO7d8CKMLZiaZiaedh0y4fN1jxumQuK1Awb7EhbFSnz5N92OzF%2FXAyoS55Uzm3r6%2FPrt%2FZQp9Ni8wXdwd2q8RP21dR1fTxIsAcU0E6DBAizIi%2FTvnkxXFTNfLKAFda9oCOtqJy2%2FqThW47L%2BH1k9YzfGXcv2vZawm2ZYLAyXjsNwodaisynR7dPVG%2FvIdvJg8nLBTG5xJfI9ZGNIBY5Y8399k7KOqYA5W6rCtkIkEaqpCi3985MDgkvISQU5MUU7KtqSIAikBJVug8gHMjx9MFlTeJSBHt6dR9spl0SuA9Gw9FeaT76YqyLMooOcQlD79T9QWb0b12JUzV2%2BIQ7Ho0QNG6NHOkWoAEPCF%2BFfB8sCnpcJWLc7AINI2XIfv4d5%2B68TsWQXHMxbZt%2FHz55GWHeEjnFqcdOZUjpan0n1iQLK268x1J1C7ttOlpzaZ83jP20MNOy38QGOqUBVqzUOyIn7Vu6y9yvYLijuIbjEQ2QajRidoW7erq2lGu%2BH1yd9DaAkE39Odyo0rOaxe9lK59x12%2BwHRMnVuC52JqPP150Ku6YwpYlyQtQFB4MODXDB8WQ02fBNoFMb758Abob%2FkXOuJjh%2FNGM6vkHJKGXiC%2F8E9x9rQCmxKM4nWN7cytvKflo7Ul%2Bwooz3ES%2FTvdlrjvX9uDTBo3E71O%2FMMZv0Zqq&X-Amz-Signature=2c8b6e47e52923f2b50f46b2f49f5c1616e2d272fda28d7e4dac249c0a3ccd2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KXT5XET%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwNFPX2gAhDRifmjFxSnBU3%2FT%2BOrj%2FajnuYTP6PWmGpAiEA4KHgMhPc00j8S%2BEG7Buk9LV2D%2FERqvVbWcG14bdFBcgqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5snu%2FgpFF2hfVsuyrcA2Fs5F2fewIm%2BXiIV934V5BwojESWao6%2BrtRULIiuz2%2Bv68LaNRAidLL4nEfraOSBV5SZ44tIaDdRQWkxoyb%2BnN681Nr9mc66qN4pLajxo4XoaHU2dTWRXWAaW9kOAxJlMb26b80hByZCsEDNJYyBMlgVZ%2BMvRDPX2C2odgjKJvmABKTP4nRhvBTMoO7d8CKMLZiaZiaedh0y4fN1jxumQuK1Awb7EhbFSnz5N92OzF%2FXAyoS55Uzm3r6%2FPrt%2FZQp9Ni8wXdwd2q8RP21dR1fTxIsAcU0E6DBAizIi%2FTvnkxXFTNfLKAFda9oCOtqJy2%2FqThW47L%2BH1k9YzfGXcv2vZawm2ZYLAyXjsNwodaisynR7dPVG%2FvIdvJg8nLBTG5xJfI9ZGNIBY5Y8399k7KOqYA5W6rCtkIkEaqpCi3985MDgkvISQU5MUU7KtqSIAikBJVug8gHMjx9MFlTeJSBHt6dR9spl0SuA9Gw9FeaT76YqyLMooOcQlD79T9QWb0b12JUzV2%2BIQ7Ho0QNG6NHOkWoAEPCF%2BFfB8sCnpcJWLc7AINI2XIfv4d5%2B68TsWQXHMxbZt%2FHz55GWHeEjnFqcdOZUjpan0n1iQLK268x1J1C7ttOlpzaZ83jP20MNOy38QGOqUBVqzUOyIn7Vu6y9yvYLijuIbjEQ2QajRidoW7erq2lGu%2BH1yd9DaAkE39Odyo0rOaxe9lK59x12%2BwHRMnVuC52JqPP150Ku6YwpYlyQtQFB4MODXDB8WQ02fBNoFMb758Abob%2FkXOuJjh%2FNGM6vkHJKGXiC%2F8E9x9rQCmxKM4nWN7cytvKflo7Ul%2Bwooz3ES%2FTvdlrjvX9uDTBo3E71O%2FMMZv0Zqq&X-Amz-Signature=a98b8cff70a2ee493ed939ff98c68347753c740377c112b89d614aa6c1f6e4ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KXT5XET%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwNFPX2gAhDRifmjFxSnBU3%2FT%2BOrj%2FajnuYTP6PWmGpAiEA4KHgMhPc00j8S%2BEG7Buk9LV2D%2FERqvVbWcG14bdFBcgqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5snu%2FgpFF2hfVsuyrcA2Fs5F2fewIm%2BXiIV934V5BwojESWao6%2BrtRULIiuz2%2Bv68LaNRAidLL4nEfraOSBV5SZ44tIaDdRQWkxoyb%2BnN681Nr9mc66qN4pLajxo4XoaHU2dTWRXWAaW9kOAxJlMb26b80hByZCsEDNJYyBMlgVZ%2BMvRDPX2C2odgjKJvmABKTP4nRhvBTMoO7d8CKMLZiaZiaedh0y4fN1jxumQuK1Awb7EhbFSnz5N92OzF%2FXAyoS55Uzm3r6%2FPrt%2FZQp9Ni8wXdwd2q8RP21dR1fTxIsAcU0E6DBAizIi%2FTvnkxXFTNfLKAFda9oCOtqJy2%2FqThW47L%2BH1k9YzfGXcv2vZawm2ZYLAyXjsNwodaisynR7dPVG%2FvIdvJg8nLBTG5xJfI9ZGNIBY5Y8399k7KOqYA5W6rCtkIkEaqpCi3985MDgkvISQU5MUU7KtqSIAikBJVug8gHMjx9MFlTeJSBHt6dR9spl0SuA9Gw9FeaT76YqyLMooOcQlD79T9QWb0b12JUzV2%2BIQ7Ho0QNG6NHOkWoAEPCF%2BFfB8sCnpcJWLc7AINI2XIfv4d5%2B68TsWQXHMxbZt%2FHz55GWHeEjnFqcdOZUjpan0n1iQLK268x1J1C7ttOlpzaZ83jP20MNOy38QGOqUBVqzUOyIn7Vu6y9yvYLijuIbjEQ2QajRidoW7erq2lGu%2BH1yd9DaAkE39Odyo0rOaxe9lK59x12%2BwHRMnVuC52JqPP150Ku6YwpYlyQtQFB4MODXDB8WQ02fBNoFMb758Abob%2FkXOuJjh%2FNGM6vkHJKGXiC%2F8E9x9rQCmxKM4nWN7cytvKflo7Ul%2Bwooz3ES%2FTvdlrjvX9uDTBo3E71O%2FMMZv0Zqq&X-Amz-Signature=e1007e0e45d1175f86ef1fd1e9aa88508c3783fd6a84bab3c8edf9cba10d326e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KXT5XET%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwNFPX2gAhDRifmjFxSnBU3%2FT%2BOrj%2FajnuYTP6PWmGpAiEA4KHgMhPc00j8S%2BEG7Buk9LV2D%2FERqvVbWcG14bdFBcgqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5snu%2FgpFF2hfVsuyrcA2Fs5F2fewIm%2BXiIV934V5BwojESWao6%2BrtRULIiuz2%2Bv68LaNRAidLL4nEfraOSBV5SZ44tIaDdRQWkxoyb%2BnN681Nr9mc66qN4pLajxo4XoaHU2dTWRXWAaW9kOAxJlMb26b80hByZCsEDNJYyBMlgVZ%2BMvRDPX2C2odgjKJvmABKTP4nRhvBTMoO7d8CKMLZiaZiaedh0y4fN1jxumQuK1Awb7EhbFSnz5N92OzF%2FXAyoS55Uzm3r6%2FPrt%2FZQp9Ni8wXdwd2q8RP21dR1fTxIsAcU0E6DBAizIi%2FTvnkxXFTNfLKAFda9oCOtqJy2%2FqThW47L%2BH1k9YzfGXcv2vZawm2ZYLAyXjsNwodaisynR7dPVG%2FvIdvJg8nLBTG5xJfI9ZGNIBY5Y8399k7KOqYA5W6rCtkIkEaqpCi3985MDgkvISQU5MUU7KtqSIAikBJVug8gHMjx9MFlTeJSBHt6dR9spl0SuA9Gw9FeaT76YqyLMooOcQlD79T9QWb0b12JUzV2%2BIQ7Ho0QNG6NHOkWoAEPCF%2BFfB8sCnpcJWLc7AINI2XIfv4d5%2B68TsWQXHMxbZt%2FHz55GWHeEjnFqcdOZUjpan0n1iQLK268x1J1C7ttOlpzaZ83jP20MNOy38QGOqUBVqzUOyIn7Vu6y9yvYLijuIbjEQ2QajRidoW7erq2lGu%2BH1yd9DaAkE39Odyo0rOaxe9lK59x12%2BwHRMnVuC52JqPP150Ku6YwpYlyQtQFB4MODXDB8WQ02fBNoFMb758Abob%2FkXOuJjh%2FNGM6vkHJKGXiC%2F8E9x9rQCmxKM4nWN7cytvKflo7Ul%2Bwooz3ES%2FTvdlrjvX9uDTBo3E71O%2FMMZv0Zqq&X-Amz-Signature=9173d28296a310c12516ec6c824c96aee9b200750d8d2da66e79a70b29ac8291&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KXT5XET%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwNFPX2gAhDRifmjFxSnBU3%2FT%2BOrj%2FajnuYTP6PWmGpAiEA4KHgMhPc00j8S%2BEG7Buk9LV2D%2FERqvVbWcG14bdFBcgqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5snu%2FgpFF2hfVsuyrcA2Fs5F2fewIm%2BXiIV934V5BwojESWao6%2BrtRULIiuz2%2Bv68LaNRAidLL4nEfraOSBV5SZ44tIaDdRQWkxoyb%2BnN681Nr9mc66qN4pLajxo4XoaHU2dTWRXWAaW9kOAxJlMb26b80hByZCsEDNJYyBMlgVZ%2BMvRDPX2C2odgjKJvmABKTP4nRhvBTMoO7d8CKMLZiaZiaedh0y4fN1jxumQuK1Awb7EhbFSnz5N92OzF%2FXAyoS55Uzm3r6%2FPrt%2FZQp9Ni8wXdwd2q8RP21dR1fTxIsAcU0E6DBAizIi%2FTvnkxXFTNfLKAFda9oCOtqJy2%2FqThW47L%2BH1k9YzfGXcv2vZawm2ZYLAyXjsNwodaisynR7dPVG%2FvIdvJg8nLBTG5xJfI9ZGNIBY5Y8399k7KOqYA5W6rCtkIkEaqpCi3985MDgkvISQU5MUU7KtqSIAikBJVug8gHMjx9MFlTeJSBHt6dR9spl0SuA9Gw9FeaT76YqyLMooOcQlD79T9QWb0b12JUzV2%2BIQ7Ho0QNG6NHOkWoAEPCF%2BFfB8sCnpcJWLc7AINI2XIfv4d5%2B68TsWQXHMxbZt%2FHz55GWHeEjnFqcdOZUjpan0n1iQLK268x1J1C7ttOlpzaZ83jP20MNOy38QGOqUBVqzUOyIn7Vu6y9yvYLijuIbjEQ2QajRidoW7erq2lGu%2BH1yd9DaAkE39Odyo0rOaxe9lK59x12%2BwHRMnVuC52JqPP150Ku6YwpYlyQtQFB4MODXDB8WQ02fBNoFMb758Abob%2FkXOuJjh%2FNGM6vkHJKGXiC%2F8E9x9rQCmxKM4nWN7cytvKflo7Ul%2Bwooz3ES%2FTvdlrjvX9uDTBo3E71O%2FMMZv0Zqq&X-Amz-Signature=a561bec1a89eb21b503eb64de0819c5dc5505fa51788579d3524e8dc37e1871d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KXT5XET%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwNFPX2gAhDRifmjFxSnBU3%2FT%2BOrj%2FajnuYTP6PWmGpAiEA4KHgMhPc00j8S%2BEG7Buk9LV2D%2FERqvVbWcG14bdFBcgqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5snu%2FgpFF2hfVsuyrcA2Fs5F2fewIm%2BXiIV934V5BwojESWao6%2BrtRULIiuz2%2Bv68LaNRAidLL4nEfraOSBV5SZ44tIaDdRQWkxoyb%2BnN681Nr9mc66qN4pLajxo4XoaHU2dTWRXWAaW9kOAxJlMb26b80hByZCsEDNJYyBMlgVZ%2BMvRDPX2C2odgjKJvmABKTP4nRhvBTMoO7d8CKMLZiaZiaedh0y4fN1jxumQuK1Awb7EhbFSnz5N92OzF%2FXAyoS55Uzm3r6%2FPrt%2FZQp9Ni8wXdwd2q8RP21dR1fTxIsAcU0E6DBAizIi%2FTvnkxXFTNfLKAFda9oCOtqJy2%2FqThW47L%2BH1k9YzfGXcv2vZawm2ZYLAyXjsNwodaisynR7dPVG%2FvIdvJg8nLBTG5xJfI9ZGNIBY5Y8399k7KOqYA5W6rCtkIkEaqpCi3985MDgkvISQU5MUU7KtqSIAikBJVug8gHMjx9MFlTeJSBHt6dR9spl0SuA9Gw9FeaT76YqyLMooOcQlD79T9QWb0b12JUzV2%2BIQ7Ho0QNG6NHOkWoAEPCF%2BFfB8sCnpcJWLc7AINI2XIfv4d5%2B68TsWQXHMxbZt%2FHz55GWHeEjnFqcdOZUjpan0n1iQLK268x1J1C7ttOlpzaZ83jP20MNOy38QGOqUBVqzUOyIn7Vu6y9yvYLijuIbjEQ2QajRidoW7erq2lGu%2BH1yd9DaAkE39Odyo0rOaxe9lK59x12%2BwHRMnVuC52JqPP150Ku6YwpYlyQtQFB4MODXDB8WQ02fBNoFMb758Abob%2FkXOuJjh%2FNGM6vkHJKGXiC%2F8E9x9rQCmxKM4nWN7cytvKflo7Ul%2Bwooz3ES%2FTvdlrjvX9uDTBo3E71O%2FMMZv0Zqq&X-Amz-Signature=2e3168a10984920edb3230cecf9fd3c309a82acd7ca29b5f75d7405b072e30ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KXT5XET%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwNFPX2gAhDRifmjFxSnBU3%2FT%2BOrj%2FajnuYTP6PWmGpAiEA4KHgMhPc00j8S%2BEG7Buk9LV2D%2FERqvVbWcG14bdFBcgqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5snu%2FgpFF2hfVsuyrcA2Fs5F2fewIm%2BXiIV934V5BwojESWao6%2BrtRULIiuz2%2Bv68LaNRAidLL4nEfraOSBV5SZ44tIaDdRQWkxoyb%2BnN681Nr9mc66qN4pLajxo4XoaHU2dTWRXWAaW9kOAxJlMb26b80hByZCsEDNJYyBMlgVZ%2BMvRDPX2C2odgjKJvmABKTP4nRhvBTMoO7d8CKMLZiaZiaedh0y4fN1jxumQuK1Awb7EhbFSnz5N92OzF%2FXAyoS55Uzm3r6%2FPrt%2FZQp9Ni8wXdwd2q8RP21dR1fTxIsAcU0E6DBAizIi%2FTvnkxXFTNfLKAFda9oCOtqJy2%2FqThW47L%2BH1k9YzfGXcv2vZawm2ZYLAyXjsNwodaisynR7dPVG%2FvIdvJg8nLBTG5xJfI9ZGNIBY5Y8399k7KOqYA5W6rCtkIkEaqpCi3985MDgkvISQU5MUU7KtqSIAikBJVug8gHMjx9MFlTeJSBHt6dR9spl0SuA9Gw9FeaT76YqyLMooOcQlD79T9QWb0b12JUzV2%2BIQ7Ho0QNG6NHOkWoAEPCF%2BFfB8sCnpcJWLc7AINI2XIfv4d5%2B68TsWQXHMxbZt%2FHz55GWHeEjnFqcdOZUjpan0n1iQLK268x1J1C7ttOlpzaZ83jP20MNOy38QGOqUBVqzUOyIn7Vu6y9yvYLijuIbjEQ2QajRidoW7erq2lGu%2BH1yd9DaAkE39Odyo0rOaxe9lK59x12%2BwHRMnVuC52JqPP150Ku6YwpYlyQtQFB4MODXDB8WQ02fBNoFMb758Abob%2FkXOuJjh%2FNGM6vkHJKGXiC%2F8E9x9rQCmxKM4nWN7cytvKflo7Ul%2Bwooz3ES%2FTvdlrjvX9uDTBo3E71O%2FMMZv0Zqq&X-Amz-Signature=eb2c111ec2070c456c6edfa63d86b100c685b0c18312f2c685076c84d41a3924&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KXT5XET%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwNFPX2gAhDRifmjFxSnBU3%2FT%2BOrj%2FajnuYTP6PWmGpAiEA4KHgMhPc00j8S%2BEG7Buk9LV2D%2FERqvVbWcG14bdFBcgqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5snu%2FgpFF2hfVsuyrcA2Fs5F2fewIm%2BXiIV934V5BwojESWao6%2BrtRULIiuz2%2Bv68LaNRAidLL4nEfraOSBV5SZ44tIaDdRQWkxoyb%2BnN681Nr9mc66qN4pLajxo4XoaHU2dTWRXWAaW9kOAxJlMb26b80hByZCsEDNJYyBMlgVZ%2BMvRDPX2C2odgjKJvmABKTP4nRhvBTMoO7d8CKMLZiaZiaedh0y4fN1jxumQuK1Awb7EhbFSnz5N92OzF%2FXAyoS55Uzm3r6%2FPrt%2FZQp9Ni8wXdwd2q8RP21dR1fTxIsAcU0E6DBAizIi%2FTvnkxXFTNfLKAFda9oCOtqJy2%2FqThW47L%2BH1k9YzfGXcv2vZawm2ZYLAyXjsNwodaisynR7dPVG%2FvIdvJg8nLBTG5xJfI9ZGNIBY5Y8399k7KOqYA5W6rCtkIkEaqpCi3985MDgkvISQU5MUU7KtqSIAikBJVug8gHMjx9MFlTeJSBHt6dR9spl0SuA9Gw9FeaT76YqyLMooOcQlD79T9QWb0b12JUzV2%2BIQ7Ho0QNG6NHOkWoAEPCF%2BFfB8sCnpcJWLc7AINI2XIfv4d5%2B68TsWQXHMxbZt%2FHz55GWHeEjnFqcdOZUjpan0n1iQLK268x1J1C7ttOlpzaZ83jP20MNOy38QGOqUBVqzUOyIn7Vu6y9yvYLijuIbjEQ2QajRidoW7erq2lGu%2BH1yd9DaAkE39Odyo0rOaxe9lK59x12%2BwHRMnVuC52JqPP150Ku6YwpYlyQtQFB4MODXDB8WQ02fBNoFMb758Abob%2FkXOuJjh%2FNGM6vkHJKGXiC%2F8E9x9rQCmxKM4nWN7cytvKflo7Ul%2Bwooz3ES%2FTvdlrjvX9uDTBo3E71O%2FMMZv0Zqq&X-Amz-Signature=a74ecbf98ddc40fbb45d1b96f96e30c0db64c0af21704dd13fb32f286277ea20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KXT5XET%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwNFPX2gAhDRifmjFxSnBU3%2FT%2BOrj%2FajnuYTP6PWmGpAiEA4KHgMhPc00j8S%2BEG7Buk9LV2D%2FERqvVbWcG14bdFBcgqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5snu%2FgpFF2hfVsuyrcA2Fs5F2fewIm%2BXiIV934V5BwojESWao6%2BrtRULIiuz2%2Bv68LaNRAidLL4nEfraOSBV5SZ44tIaDdRQWkxoyb%2BnN681Nr9mc66qN4pLajxo4XoaHU2dTWRXWAaW9kOAxJlMb26b80hByZCsEDNJYyBMlgVZ%2BMvRDPX2C2odgjKJvmABKTP4nRhvBTMoO7d8CKMLZiaZiaedh0y4fN1jxumQuK1Awb7EhbFSnz5N92OzF%2FXAyoS55Uzm3r6%2FPrt%2FZQp9Ni8wXdwd2q8RP21dR1fTxIsAcU0E6DBAizIi%2FTvnkxXFTNfLKAFda9oCOtqJy2%2FqThW47L%2BH1k9YzfGXcv2vZawm2ZYLAyXjsNwodaisynR7dPVG%2FvIdvJg8nLBTG5xJfI9ZGNIBY5Y8399k7KOqYA5W6rCtkIkEaqpCi3985MDgkvISQU5MUU7KtqSIAikBJVug8gHMjx9MFlTeJSBHt6dR9spl0SuA9Gw9FeaT76YqyLMooOcQlD79T9QWb0b12JUzV2%2BIQ7Ho0QNG6NHOkWoAEPCF%2BFfB8sCnpcJWLc7AINI2XIfv4d5%2B68TsWQXHMxbZt%2FHz55GWHeEjnFqcdOZUjpan0n1iQLK268x1J1C7ttOlpzaZ83jP20MNOy38QGOqUBVqzUOyIn7Vu6y9yvYLijuIbjEQ2QajRidoW7erq2lGu%2BH1yd9DaAkE39Odyo0rOaxe9lK59x12%2BwHRMnVuC52JqPP150Ku6YwpYlyQtQFB4MODXDB8WQ02fBNoFMb758Abob%2FkXOuJjh%2FNGM6vkHJKGXiC%2F8E9x9rQCmxKM4nWN7cytvKflo7Ul%2Bwooz3ES%2FTvdlrjvX9uDTBo3E71O%2FMMZv0Zqq&X-Amz-Signature=73f040b0a0c0f04f95231595ac325e9182dfd47a06ff3c6d37f90f19d13e1cde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KXT5XET%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwNFPX2gAhDRifmjFxSnBU3%2FT%2BOrj%2FajnuYTP6PWmGpAiEA4KHgMhPc00j8S%2BEG7Buk9LV2D%2FERqvVbWcG14bdFBcgqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5snu%2FgpFF2hfVsuyrcA2Fs5F2fewIm%2BXiIV934V5BwojESWao6%2BrtRULIiuz2%2Bv68LaNRAidLL4nEfraOSBV5SZ44tIaDdRQWkxoyb%2BnN681Nr9mc66qN4pLajxo4XoaHU2dTWRXWAaW9kOAxJlMb26b80hByZCsEDNJYyBMlgVZ%2BMvRDPX2C2odgjKJvmABKTP4nRhvBTMoO7d8CKMLZiaZiaedh0y4fN1jxumQuK1Awb7EhbFSnz5N92OzF%2FXAyoS55Uzm3r6%2FPrt%2FZQp9Ni8wXdwd2q8RP21dR1fTxIsAcU0E6DBAizIi%2FTvnkxXFTNfLKAFda9oCOtqJy2%2FqThW47L%2BH1k9YzfGXcv2vZawm2ZYLAyXjsNwodaisynR7dPVG%2FvIdvJg8nLBTG5xJfI9ZGNIBY5Y8399k7KOqYA5W6rCtkIkEaqpCi3985MDgkvISQU5MUU7KtqSIAikBJVug8gHMjx9MFlTeJSBHt6dR9spl0SuA9Gw9FeaT76YqyLMooOcQlD79T9QWb0b12JUzV2%2BIQ7Ho0QNG6NHOkWoAEPCF%2BFfB8sCnpcJWLc7AINI2XIfv4d5%2B68TsWQXHMxbZt%2FHz55GWHeEjnFqcdOZUjpan0n1iQLK268x1J1C7ttOlpzaZ83jP20MNOy38QGOqUBVqzUOyIn7Vu6y9yvYLijuIbjEQ2QajRidoW7erq2lGu%2BH1yd9DaAkE39Odyo0rOaxe9lK59x12%2BwHRMnVuC52JqPP150Ku6YwpYlyQtQFB4MODXDB8WQ02fBNoFMb758Abob%2FkXOuJjh%2FNGM6vkHJKGXiC%2F8E9x9rQCmxKM4nWN7cytvKflo7Ul%2Bwooz3ES%2FTvdlrjvX9uDTBo3E71O%2FMMZv0Zqq&X-Amz-Signature=40baa3a773b8a10613567675e03da4760de314b009e0aa51eb58033b6cde286b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
