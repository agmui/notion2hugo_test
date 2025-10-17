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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMDG5ZHT%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICcm0GY20D0lRusRVW4yVIGKT8H0ZG3ATP15LI56o4fhAiBkaHLdQctKgX6TWVPGtDB3RDBPTNAiO5z%2Fsj35uNbdFCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5NQYMNM86o5mmZX%2BKtwDdFsAnN3JjmFVjHUESzMskcuhwTwHpx8dZD%2F45lAymwGFp77t9GAtg54LsKKn%2FMUoQSGuNoQpLrez0%2B6%2FyEvtxNUxzuIGy2%2B8%2BHCo2semEoJ8GHAYF9McaXCxKwbJIVG959j6kCEd7gFrj5iApj3twWDc19MvfF5qjZbFYG0QDxfBLdAZU%2BzKykVuG4ekrFKz%2BjJ6xkHFOce6PBdurtL8vCj40t1jrNQcCfFLwqqHLsN3ucMeBVsLwaMglNJ7vPpNkxUvuyPP3e3owLVpC4NxB%2BdLEqVYO5tn%2BchZVj4cJBV031%2FHrNE9Tk%2FBxuYRMIzEU9xAzVL9sEkCLTYSxkNDe%2BXtruLipga%2BsywFVUPzKv7%2BxsjKsBzowYTNT9dVO1VB7y%2FiKCrIpyy%2BOR1Ba8CqMoZq5A0K%2FtrXTdRWqIE%2BA0TCJt1YYv2AziCl1KQuLT7Xn9V9pMuGP1A0q44OQPsu%2Fdd%2BaK9h6t3qt%2FG1RQov31iD%2BL%2Fp%2BdUNb5KfHI2AFilCI1IUk70MyVaIsFbZmyKiDnDgmRND%2Bt0%2FZSaeD4OWodYdhlZQtfvN4fL5OHyAiD9A%2BXS%2Ff9AR%2FyX1La5RF6L4455pFz%2BOPve7iDwp2Cz338p2SYzs8rs%2BsZjRejMw7JDGxwY6pgEV3KrDpLVsrbkWI8GWf%2FL9IIxIrjSwZilyXPUOC1R7SIiLvOWdQXuqY2xZF8PRSPmnh%2FuM08EC1AjYJpIHZyiwjTROA54o7oRaJRY1E9%2BHcQQACS9h8KJGXnmglQAFfi%2Bnum%2BNGFXkTZwAW24iLuUMQDpVP2DyM3EBPVxr%2BfXbEt3jyfTlCrmkl2JW%2BQzcH%2F6cf3TBvbpWda%2BaombNCGROtI9kdMgw&X-Amz-Signature=fb735c93770d7d07cf4abfb6da6b21a0ad6307c46f6bb732110f5452ee51393b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMDG5ZHT%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICcm0GY20D0lRusRVW4yVIGKT8H0ZG3ATP15LI56o4fhAiBkaHLdQctKgX6TWVPGtDB3RDBPTNAiO5z%2Fsj35uNbdFCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5NQYMNM86o5mmZX%2BKtwDdFsAnN3JjmFVjHUESzMskcuhwTwHpx8dZD%2F45lAymwGFp77t9GAtg54LsKKn%2FMUoQSGuNoQpLrez0%2B6%2FyEvtxNUxzuIGy2%2B8%2BHCo2semEoJ8GHAYF9McaXCxKwbJIVG959j6kCEd7gFrj5iApj3twWDc19MvfF5qjZbFYG0QDxfBLdAZU%2BzKykVuG4ekrFKz%2BjJ6xkHFOce6PBdurtL8vCj40t1jrNQcCfFLwqqHLsN3ucMeBVsLwaMglNJ7vPpNkxUvuyPP3e3owLVpC4NxB%2BdLEqVYO5tn%2BchZVj4cJBV031%2FHrNE9Tk%2FBxuYRMIzEU9xAzVL9sEkCLTYSxkNDe%2BXtruLipga%2BsywFVUPzKv7%2BxsjKsBzowYTNT9dVO1VB7y%2FiKCrIpyy%2BOR1Ba8CqMoZq5A0K%2FtrXTdRWqIE%2BA0TCJt1YYv2AziCl1KQuLT7Xn9V9pMuGP1A0q44OQPsu%2Fdd%2BaK9h6t3qt%2FG1RQov31iD%2BL%2Fp%2BdUNb5KfHI2AFilCI1IUk70MyVaIsFbZmyKiDnDgmRND%2Bt0%2FZSaeD4OWodYdhlZQtfvN4fL5OHyAiD9A%2BXS%2Ff9AR%2FyX1La5RF6L4455pFz%2BOPve7iDwp2Cz338p2SYzs8rs%2BsZjRejMw7JDGxwY6pgEV3KrDpLVsrbkWI8GWf%2FL9IIxIrjSwZilyXPUOC1R7SIiLvOWdQXuqY2xZF8PRSPmnh%2FuM08EC1AjYJpIHZyiwjTROA54o7oRaJRY1E9%2BHcQQACS9h8KJGXnmglQAFfi%2Bnum%2BNGFXkTZwAW24iLuUMQDpVP2DyM3EBPVxr%2BfXbEt3jyfTlCrmkl2JW%2BQzcH%2F6cf3TBvbpWda%2BaombNCGROtI9kdMgw&X-Amz-Signature=6883d41f7f9e145030cb2f599bef973735a4890737c4554ee1d3c63241f03158&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMDG5ZHT%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICcm0GY20D0lRusRVW4yVIGKT8H0ZG3ATP15LI56o4fhAiBkaHLdQctKgX6TWVPGtDB3RDBPTNAiO5z%2Fsj35uNbdFCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5NQYMNM86o5mmZX%2BKtwDdFsAnN3JjmFVjHUESzMskcuhwTwHpx8dZD%2F45lAymwGFp77t9GAtg54LsKKn%2FMUoQSGuNoQpLrez0%2B6%2FyEvtxNUxzuIGy2%2B8%2BHCo2semEoJ8GHAYF9McaXCxKwbJIVG959j6kCEd7gFrj5iApj3twWDc19MvfF5qjZbFYG0QDxfBLdAZU%2BzKykVuG4ekrFKz%2BjJ6xkHFOce6PBdurtL8vCj40t1jrNQcCfFLwqqHLsN3ucMeBVsLwaMglNJ7vPpNkxUvuyPP3e3owLVpC4NxB%2BdLEqVYO5tn%2BchZVj4cJBV031%2FHrNE9Tk%2FBxuYRMIzEU9xAzVL9sEkCLTYSxkNDe%2BXtruLipga%2BsywFVUPzKv7%2BxsjKsBzowYTNT9dVO1VB7y%2FiKCrIpyy%2BOR1Ba8CqMoZq5A0K%2FtrXTdRWqIE%2BA0TCJt1YYv2AziCl1KQuLT7Xn9V9pMuGP1A0q44OQPsu%2Fdd%2BaK9h6t3qt%2FG1RQov31iD%2BL%2Fp%2BdUNb5KfHI2AFilCI1IUk70MyVaIsFbZmyKiDnDgmRND%2Bt0%2FZSaeD4OWodYdhlZQtfvN4fL5OHyAiD9A%2BXS%2Ff9AR%2FyX1La5RF6L4455pFz%2BOPve7iDwp2Cz338p2SYzs8rs%2BsZjRejMw7JDGxwY6pgEV3KrDpLVsrbkWI8GWf%2FL9IIxIrjSwZilyXPUOC1R7SIiLvOWdQXuqY2xZF8PRSPmnh%2FuM08EC1AjYJpIHZyiwjTROA54o7oRaJRY1E9%2BHcQQACS9h8KJGXnmglQAFfi%2Bnum%2BNGFXkTZwAW24iLuUMQDpVP2DyM3EBPVxr%2BfXbEt3jyfTlCrmkl2JW%2BQzcH%2F6cf3TBvbpWda%2BaombNCGROtI9kdMgw&X-Amz-Signature=febda11382dcf6a93b836c0db6173d5ff7a16e5b328a821baaf80229ac87e0ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMDG5ZHT%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICcm0GY20D0lRusRVW4yVIGKT8H0ZG3ATP15LI56o4fhAiBkaHLdQctKgX6TWVPGtDB3RDBPTNAiO5z%2Fsj35uNbdFCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5NQYMNM86o5mmZX%2BKtwDdFsAnN3JjmFVjHUESzMskcuhwTwHpx8dZD%2F45lAymwGFp77t9GAtg54LsKKn%2FMUoQSGuNoQpLrez0%2B6%2FyEvtxNUxzuIGy2%2B8%2BHCo2semEoJ8GHAYF9McaXCxKwbJIVG959j6kCEd7gFrj5iApj3twWDc19MvfF5qjZbFYG0QDxfBLdAZU%2BzKykVuG4ekrFKz%2BjJ6xkHFOce6PBdurtL8vCj40t1jrNQcCfFLwqqHLsN3ucMeBVsLwaMglNJ7vPpNkxUvuyPP3e3owLVpC4NxB%2BdLEqVYO5tn%2BchZVj4cJBV031%2FHrNE9Tk%2FBxuYRMIzEU9xAzVL9sEkCLTYSxkNDe%2BXtruLipga%2BsywFVUPzKv7%2BxsjKsBzowYTNT9dVO1VB7y%2FiKCrIpyy%2BOR1Ba8CqMoZq5A0K%2FtrXTdRWqIE%2BA0TCJt1YYv2AziCl1KQuLT7Xn9V9pMuGP1A0q44OQPsu%2Fdd%2BaK9h6t3qt%2FG1RQov31iD%2BL%2Fp%2BdUNb5KfHI2AFilCI1IUk70MyVaIsFbZmyKiDnDgmRND%2Bt0%2FZSaeD4OWodYdhlZQtfvN4fL5OHyAiD9A%2BXS%2Ff9AR%2FyX1La5RF6L4455pFz%2BOPve7iDwp2Cz338p2SYzs8rs%2BsZjRejMw7JDGxwY6pgEV3KrDpLVsrbkWI8GWf%2FL9IIxIrjSwZilyXPUOC1R7SIiLvOWdQXuqY2xZF8PRSPmnh%2FuM08EC1AjYJpIHZyiwjTROA54o7oRaJRY1E9%2BHcQQACS9h8KJGXnmglQAFfi%2Bnum%2BNGFXkTZwAW24iLuUMQDpVP2DyM3EBPVxr%2BfXbEt3jyfTlCrmkl2JW%2BQzcH%2F6cf3TBvbpWda%2BaombNCGROtI9kdMgw&X-Amz-Signature=aa628ed6955441239c2e0009847d5375fceead3e2887e2738b98c13fd9c9391f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMDG5ZHT%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICcm0GY20D0lRusRVW4yVIGKT8H0ZG3ATP15LI56o4fhAiBkaHLdQctKgX6TWVPGtDB3RDBPTNAiO5z%2Fsj35uNbdFCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5NQYMNM86o5mmZX%2BKtwDdFsAnN3JjmFVjHUESzMskcuhwTwHpx8dZD%2F45lAymwGFp77t9GAtg54LsKKn%2FMUoQSGuNoQpLrez0%2B6%2FyEvtxNUxzuIGy2%2B8%2BHCo2semEoJ8GHAYF9McaXCxKwbJIVG959j6kCEd7gFrj5iApj3twWDc19MvfF5qjZbFYG0QDxfBLdAZU%2BzKykVuG4ekrFKz%2BjJ6xkHFOce6PBdurtL8vCj40t1jrNQcCfFLwqqHLsN3ucMeBVsLwaMglNJ7vPpNkxUvuyPP3e3owLVpC4NxB%2BdLEqVYO5tn%2BchZVj4cJBV031%2FHrNE9Tk%2FBxuYRMIzEU9xAzVL9sEkCLTYSxkNDe%2BXtruLipga%2BsywFVUPzKv7%2BxsjKsBzowYTNT9dVO1VB7y%2FiKCrIpyy%2BOR1Ba8CqMoZq5A0K%2FtrXTdRWqIE%2BA0TCJt1YYv2AziCl1KQuLT7Xn9V9pMuGP1A0q44OQPsu%2Fdd%2BaK9h6t3qt%2FG1RQov31iD%2BL%2Fp%2BdUNb5KfHI2AFilCI1IUk70MyVaIsFbZmyKiDnDgmRND%2Bt0%2FZSaeD4OWodYdhlZQtfvN4fL5OHyAiD9A%2BXS%2Ff9AR%2FyX1La5RF6L4455pFz%2BOPve7iDwp2Cz338p2SYzs8rs%2BsZjRejMw7JDGxwY6pgEV3KrDpLVsrbkWI8GWf%2FL9IIxIrjSwZilyXPUOC1R7SIiLvOWdQXuqY2xZF8PRSPmnh%2FuM08EC1AjYJpIHZyiwjTROA54o7oRaJRY1E9%2BHcQQACS9h8KJGXnmglQAFfi%2Bnum%2BNGFXkTZwAW24iLuUMQDpVP2DyM3EBPVxr%2BfXbEt3jyfTlCrmkl2JW%2BQzcH%2F6cf3TBvbpWda%2BaombNCGROtI9kdMgw&X-Amz-Signature=0f5bcf550ecb9338bec125c8a719dbf8f397499516db12e978992f5ed6959131&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMDG5ZHT%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICcm0GY20D0lRusRVW4yVIGKT8H0ZG3ATP15LI56o4fhAiBkaHLdQctKgX6TWVPGtDB3RDBPTNAiO5z%2Fsj35uNbdFCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5NQYMNM86o5mmZX%2BKtwDdFsAnN3JjmFVjHUESzMskcuhwTwHpx8dZD%2F45lAymwGFp77t9GAtg54LsKKn%2FMUoQSGuNoQpLrez0%2B6%2FyEvtxNUxzuIGy2%2B8%2BHCo2semEoJ8GHAYF9McaXCxKwbJIVG959j6kCEd7gFrj5iApj3twWDc19MvfF5qjZbFYG0QDxfBLdAZU%2BzKykVuG4ekrFKz%2BjJ6xkHFOce6PBdurtL8vCj40t1jrNQcCfFLwqqHLsN3ucMeBVsLwaMglNJ7vPpNkxUvuyPP3e3owLVpC4NxB%2BdLEqVYO5tn%2BchZVj4cJBV031%2FHrNE9Tk%2FBxuYRMIzEU9xAzVL9sEkCLTYSxkNDe%2BXtruLipga%2BsywFVUPzKv7%2BxsjKsBzowYTNT9dVO1VB7y%2FiKCrIpyy%2BOR1Ba8CqMoZq5A0K%2FtrXTdRWqIE%2BA0TCJt1YYv2AziCl1KQuLT7Xn9V9pMuGP1A0q44OQPsu%2Fdd%2BaK9h6t3qt%2FG1RQov31iD%2BL%2Fp%2BdUNb5KfHI2AFilCI1IUk70MyVaIsFbZmyKiDnDgmRND%2Bt0%2FZSaeD4OWodYdhlZQtfvN4fL5OHyAiD9A%2BXS%2Ff9AR%2FyX1La5RF6L4455pFz%2BOPve7iDwp2Cz338p2SYzs8rs%2BsZjRejMw7JDGxwY6pgEV3KrDpLVsrbkWI8GWf%2FL9IIxIrjSwZilyXPUOC1R7SIiLvOWdQXuqY2xZF8PRSPmnh%2FuM08EC1AjYJpIHZyiwjTROA54o7oRaJRY1E9%2BHcQQACS9h8KJGXnmglQAFfi%2Bnum%2BNGFXkTZwAW24iLuUMQDpVP2DyM3EBPVxr%2BfXbEt3jyfTlCrmkl2JW%2BQzcH%2F6cf3TBvbpWda%2BaombNCGROtI9kdMgw&X-Amz-Signature=88547ea2a86d0121bb1b6805cf338e6b5ce970db372f9180934fc257553ba9e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMDG5ZHT%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICcm0GY20D0lRusRVW4yVIGKT8H0ZG3ATP15LI56o4fhAiBkaHLdQctKgX6TWVPGtDB3RDBPTNAiO5z%2Fsj35uNbdFCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5NQYMNM86o5mmZX%2BKtwDdFsAnN3JjmFVjHUESzMskcuhwTwHpx8dZD%2F45lAymwGFp77t9GAtg54LsKKn%2FMUoQSGuNoQpLrez0%2B6%2FyEvtxNUxzuIGy2%2B8%2BHCo2semEoJ8GHAYF9McaXCxKwbJIVG959j6kCEd7gFrj5iApj3twWDc19MvfF5qjZbFYG0QDxfBLdAZU%2BzKykVuG4ekrFKz%2BjJ6xkHFOce6PBdurtL8vCj40t1jrNQcCfFLwqqHLsN3ucMeBVsLwaMglNJ7vPpNkxUvuyPP3e3owLVpC4NxB%2BdLEqVYO5tn%2BchZVj4cJBV031%2FHrNE9Tk%2FBxuYRMIzEU9xAzVL9sEkCLTYSxkNDe%2BXtruLipga%2BsywFVUPzKv7%2BxsjKsBzowYTNT9dVO1VB7y%2FiKCrIpyy%2BOR1Ba8CqMoZq5A0K%2FtrXTdRWqIE%2BA0TCJt1YYv2AziCl1KQuLT7Xn9V9pMuGP1A0q44OQPsu%2Fdd%2BaK9h6t3qt%2FG1RQov31iD%2BL%2Fp%2BdUNb5KfHI2AFilCI1IUk70MyVaIsFbZmyKiDnDgmRND%2Bt0%2FZSaeD4OWodYdhlZQtfvN4fL5OHyAiD9A%2BXS%2Ff9AR%2FyX1La5RF6L4455pFz%2BOPve7iDwp2Cz338p2SYzs8rs%2BsZjRejMw7JDGxwY6pgEV3KrDpLVsrbkWI8GWf%2FL9IIxIrjSwZilyXPUOC1R7SIiLvOWdQXuqY2xZF8PRSPmnh%2FuM08EC1AjYJpIHZyiwjTROA54o7oRaJRY1E9%2BHcQQACS9h8KJGXnmglQAFfi%2Bnum%2BNGFXkTZwAW24iLuUMQDpVP2DyM3EBPVxr%2BfXbEt3jyfTlCrmkl2JW%2BQzcH%2F6cf3TBvbpWda%2BaombNCGROtI9kdMgw&X-Amz-Signature=37890cf270bbacfe724656c4cbc09ee5c79f015d4cd9040ec9350ee7e6b11a22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMDG5ZHT%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICcm0GY20D0lRusRVW4yVIGKT8H0ZG3ATP15LI56o4fhAiBkaHLdQctKgX6TWVPGtDB3RDBPTNAiO5z%2Fsj35uNbdFCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5NQYMNM86o5mmZX%2BKtwDdFsAnN3JjmFVjHUESzMskcuhwTwHpx8dZD%2F45lAymwGFp77t9GAtg54LsKKn%2FMUoQSGuNoQpLrez0%2B6%2FyEvtxNUxzuIGy2%2B8%2BHCo2semEoJ8GHAYF9McaXCxKwbJIVG959j6kCEd7gFrj5iApj3twWDc19MvfF5qjZbFYG0QDxfBLdAZU%2BzKykVuG4ekrFKz%2BjJ6xkHFOce6PBdurtL8vCj40t1jrNQcCfFLwqqHLsN3ucMeBVsLwaMglNJ7vPpNkxUvuyPP3e3owLVpC4NxB%2BdLEqVYO5tn%2BchZVj4cJBV031%2FHrNE9Tk%2FBxuYRMIzEU9xAzVL9sEkCLTYSxkNDe%2BXtruLipga%2BsywFVUPzKv7%2BxsjKsBzowYTNT9dVO1VB7y%2FiKCrIpyy%2BOR1Ba8CqMoZq5A0K%2FtrXTdRWqIE%2BA0TCJt1YYv2AziCl1KQuLT7Xn9V9pMuGP1A0q44OQPsu%2Fdd%2BaK9h6t3qt%2FG1RQov31iD%2BL%2Fp%2BdUNb5KfHI2AFilCI1IUk70MyVaIsFbZmyKiDnDgmRND%2Bt0%2FZSaeD4OWodYdhlZQtfvN4fL5OHyAiD9A%2BXS%2Ff9AR%2FyX1La5RF6L4455pFz%2BOPve7iDwp2Cz338p2SYzs8rs%2BsZjRejMw7JDGxwY6pgEV3KrDpLVsrbkWI8GWf%2FL9IIxIrjSwZilyXPUOC1R7SIiLvOWdQXuqY2xZF8PRSPmnh%2FuM08EC1AjYJpIHZyiwjTROA54o7oRaJRY1E9%2BHcQQACS9h8KJGXnmglQAFfi%2Bnum%2BNGFXkTZwAW24iLuUMQDpVP2DyM3EBPVxr%2BfXbEt3jyfTlCrmkl2JW%2BQzcH%2F6cf3TBvbpWda%2BaombNCGROtI9kdMgw&X-Amz-Signature=6f2b90e169caed83a3bb08863c21be6af19e6a478dd11bd36d8355aa8dbd0fb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMDG5ZHT%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICcm0GY20D0lRusRVW4yVIGKT8H0ZG3ATP15LI56o4fhAiBkaHLdQctKgX6TWVPGtDB3RDBPTNAiO5z%2Fsj35uNbdFCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5NQYMNM86o5mmZX%2BKtwDdFsAnN3JjmFVjHUESzMskcuhwTwHpx8dZD%2F45lAymwGFp77t9GAtg54LsKKn%2FMUoQSGuNoQpLrez0%2B6%2FyEvtxNUxzuIGy2%2B8%2BHCo2semEoJ8GHAYF9McaXCxKwbJIVG959j6kCEd7gFrj5iApj3twWDc19MvfF5qjZbFYG0QDxfBLdAZU%2BzKykVuG4ekrFKz%2BjJ6xkHFOce6PBdurtL8vCj40t1jrNQcCfFLwqqHLsN3ucMeBVsLwaMglNJ7vPpNkxUvuyPP3e3owLVpC4NxB%2BdLEqVYO5tn%2BchZVj4cJBV031%2FHrNE9Tk%2FBxuYRMIzEU9xAzVL9sEkCLTYSxkNDe%2BXtruLipga%2BsywFVUPzKv7%2BxsjKsBzowYTNT9dVO1VB7y%2FiKCrIpyy%2BOR1Ba8CqMoZq5A0K%2FtrXTdRWqIE%2BA0TCJt1YYv2AziCl1KQuLT7Xn9V9pMuGP1A0q44OQPsu%2Fdd%2BaK9h6t3qt%2FG1RQov31iD%2BL%2Fp%2BdUNb5KfHI2AFilCI1IUk70MyVaIsFbZmyKiDnDgmRND%2Bt0%2FZSaeD4OWodYdhlZQtfvN4fL5OHyAiD9A%2BXS%2Ff9AR%2FyX1La5RF6L4455pFz%2BOPve7iDwp2Cz338p2SYzs8rs%2BsZjRejMw7JDGxwY6pgEV3KrDpLVsrbkWI8GWf%2FL9IIxIrjSwZilyXPUOC1R7SIiLvOWdQXuqY2xZF8PRSPmnh%2FuM08EC1AjYJpIHZyiwjTROA54o7oRaJRY1E9%2BHcQQACS9h8KJGXnmglQAFfi%2Bnum%2BNGFXkTZwAW24iLuUMQDpVP2DyM3EBPVxr%2BfXbEt3jyfTlCrmkl2JW%2BQzcH%2F6cf3TBvbpWda%2BaombNCGROtI9kdMgw&X-Amz-Signature=37df19d089314163317781803b61a67ce4a474e6d088db3ea508bdda32ed37e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMDG5ZHT%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICcm0GY20D0lRusRVW4yVIGKT8H0ZG3ATP15LI56o4fhAiBkaHLdQctKgX6TWVPGtDB3RDBPTNAiO5z%2Fsj35uNbdFCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5NQYMNM86o5mmZX%2BKtwDdFsAnN3JjmFVjHUESzMskcuhwTwHpx8dZD%2F45lAymwGFp77t9GAtg54LsKKn%2FMUoQSGuNoQpLrez0%2B6%2FyEvtxNUxzuIGy2%2B8%2BHCo2semEoJ8GHAYF9McaXCxKwbJIVG959j6kCEd7gFrj5iApj3twWDc19MvfF5qjZbFYG0QDxfBLdAZU%2BzKykVuG4ekrFKz%2BjJ6xkHFOce6PBdurtL8vCj40t1jrNQcCfFLwqqHLsN3ucMeBVsLwaMglNJ7vPpNkxUvuyPP3e3owLVpC4NxB%2BdLEqVYO5tn%2BchZVj4cJBV031%2FHrNE9Tk%2FBxuYRMIzEU9xAzVL9sEkCLTYSxkNDe%2BXtruLipga%2BsywFVUPzKv7%2BxsjKsBzowYTNT9dVO1VB7y%2FiKCrIpyy%2BOR1Ba8CqMoZq5A0K%2FtrXTdRWqIE%2BA0TCJt1YYv2AziCl1KQuLT7Xn9V9pMuGP1A0q44OQPsu%2Fdd%2BaK9h6t3qt%2FG1RQov31iD%2BL%2Fp%2BdUNb5KfHI2AFilCI1IUk70MyVaIsFbZmyKiDnDgmRND%2Bt0%2FZSaeD4OWodYdhlZQtfvN4fL5OHyAiD9A%2BXS%2Ff9AR%2FyX1La5RF6L4455pFz%2BOPve7iDwp2Cz338p2SYzs8rs%2BsZjRejMw7JDGxwY6pgEV3KrDpLVsrbkWI8GWf%2FL9IIxIrjSwZilyXPUOC1R7SIiLvOWdQXuqY2xZF8PRSPmnh%2FuM08EC1AjYJpIHZyiwjTROA54o7oRaJRY1E9%2BHcQQACS9h8KJGXnmglQAFfi%2Bnum%2BNGFXkTZwAW24iLuUMQDpVP2DyM3EBPVxr%2BfXbEt3jyfTlCrmkl2JW%2BQzcH%2F6cf3TBvbpWda%2BaombNCGROtI9kdMgw&X-Amz-Signature=5e0692246c0c34c496a593a36621623f18e33e192261100bef898fad3a09f004&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMDG5ZHT%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICcm0GY20D0lRusRVW4yVIGKT8H0ZG3ATP15LI56o4fhAiBkaHLdQctKgX6TWVPGtDB3RDBPTNAiO5z%2Fsj35uNbdFCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5NQYMNM86o5mmZX%2BKtwDdFsAnN3JjmFVjHUESzMskcuhwTwHpx8dZD%2F45lAymwGFp77t9GAtg54LsKKn%2FMUoQSGuNoQpLrez0%2B6%2FyEvtxNUxzuIGy2%2B8%2BHCo2semEoJ8GHAYF9McaXCxKwbJIVG959j6kCEd7gFrj5iApj3twWDc19MvfF5qjZbFYG0QDxfBLdAZU%2BzKykVuG4ekrFKz%2BjJ6xkHFOce6PBdurtL8vCj40t1jrNQcCfFLwqqHLsN3ucMeBVsLwaMglNJ7vPpNkxUvuyPP3e3owLVpC4NxB%2BdLEqVYO5tn%2BchZVj4cJBV031%2FHrNE9Tk%2FBxuYRMIzEU9xAzVL9sEkCLTYSxkNDe%2BXtruLipga%2BsywFVUPzKv7%2BxsjKsBzowYTNT9dVO1VB7y%2FiKCrIpyy%2BOR1Ba8CqMoZq5A0K%2FtrXTdRWqIE%2BA0TCJt1YYv2AziCl1KQuLT7Xn9V9pMuGP1A0q44OQPsu%2Fdd%2BaK9h6t3qt%2FG1RQov31iD%2BL%2Fp%2BdUNb5KfHI2AFilCI1IUk70MyVaIsFbZmyKiDnDgmRND%2Bt0%2FZSaeD4OWodYdhlZQtfvN4fL5OHyAiD9A%2BXS%2Ff9AR%2FyX1La5RF6L4455pFz%2BOPve7iDwp2Cz338p2SYzs8rs%2BsZjRejMw7JDGxwY6pgEV3KrDpLVsrbkWI8GWf%2FL9IIxIrjSwZilyXPUOC1R7SIiLvOWdQXuqY2xZF8PRSPmnh%2FuM08EC1AjYJpIHZyiwjTROA54o7oRaJRY1E9%2BHcQQACS9h8KJGXnmglQAFfi%2Bnum%2BNGFXkTZwAW24iLuUMQDpVP2DyM3EBPVxr%2BfXbEt3jyfTlCrmkl2JW%2BQzcH%2F6cf3TBvbpWda%2BaombNCGROtI9kdMgw&X-Amz-Signature=e4fb94f8173cb4fef14d1e4dea1071b6996df5933a010501a7f9e42c3dcb022b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMDG5ZHT%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICcm0GY20D0lRusRVW4yVIGKT8H0ZG3ATP15LI56o4fhAiBkaHLdQctKgX6TWVPGtDB3RDBPTNAiO5z%2Fsj35uNbdFCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5NQYMNM86o5mmZX%2BKtwDdFsAnN3JjmFVjHUESzMskcuhwTwHpx8dZD%2F45lAymwGFp77t9GAtg54LsKKn%2FMUoQSGuNoQpLrez0%2B6%2FyEvtxNUxzuIGy2%2B8%2BHCo2semEoJ8GHAYF9McaXCxKwbJIVG959j6kCEd7gFrj5iApj3twWDc19MvfF5qjZbFYG0QDxfBLdAZU%2BzKykVuG4ekrFKz%2BjJ6xkHFOce6PBdurtL8vCj40t1jrNQcCfFLwqqHLsN3ucMeBVsLwaMglNJ7vPpNkxUvuyPP3e3owLVpC4NxB%2BdLEqVYO5tn%2BchZVj4cJBV031%2FHrNE9Tk%2FBxuYRMIzEU9xAzVL9sEkCLTYSxkNDe%2BXtruLipga%2BsywFVUPzKv7%2BxsjKsBzowYTNT9dVO1VB7y%2FiKCrIpyy%2BOR1Ba8CqMoZq5A0K%2FtrXTdRWqIE%2BA0TCJt1YYv2AziCl1KQuLT7Xn9V9pMuGP1A0q44OQPsu%2Fdd%2BaK9h6t3qt%2FG1RQov31iD%2BL%2Fp%2BdUNb5KfHI2AFilCI1IUk70MyVaIsFbZmyKiDnDgmRND%2Bt0%2FZSaeD4OWodYdhlZQtfvN4fL5OHyAiD9A%2BXS%2Ff9AR%2FyX1La5RF6L4455pFz%2BOPve7iDwp2Cz338p2SYzs8rs%2BsZjRejMw7JDGxwY6pgEV3KrDpLVsrbkWI8GWf%2FL9IIxIrjSwZilyXPUOC1R7SIiLvOWdQXuqY2xZF8PRSPmnh%2FuM08EC1AjYJpIHZyiwjTROA54o7oRaJRY1E9%2BHcQQACS9h8KJGXnmglQAFfi%2Bnum%2BNGFXkTZwAW24iLuUMQDpVP2DyM3EBPVxr%2BfXbEt3jyfTlCrmkl2JW%2BQzcH%2F6cf3TBvbpWda%2BaombNCGROtI9kdMgw&X-Amz-Signature=ef2d20ac4086094894debd82fbffced49d8ae8e994d8fe8c47f0e59a00a7d8d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMDG5ZHT%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICcm0GY20D0lRusRVW4yVIGKT8H0ZG3ATP15LI56o4fhAiBkaHLdQctKgX6TWVPGtDB3RDBPTNAiO5z%2Fsj35uNbdFCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5NQYMNM86o5mmZX%2BKtwDdFsAnN3JjmFVjHUESzMskcuhwTwHpx8dZD%2F45lAymwGFp77t9GAtg54LsKKn%2FMUoQSGuNoQpLrez0%2B6%2FyEvtxNUxzuIGy2%2B8%2BHCo2semEoJ8GHAYF9McaXCxKwbJIVG959j6kCEd7gFrj5iApj3twWDc19MvfF5qjZbFYG0QDxfBLdAZU%2BzKykVuG4ekrFKz%2BjJ6xkHFOce6PBdurtL8vCj40t1jrNQcCfFLwqqHLsN3ucMeBVsLwaMglNJ7vPpNkxUvuyPP3e3owLVpC4NxB%2BdLEqVYO5tn%2BchZVj4cJBV031%2FHrNE9Tk%2FBxuYRMIzEU9xAzVL9sEkCLTYSxkNDe%2BXtruLipga%2BsywFVUPzKv7%2BxsjKsBzowYTNT9dVO1VB7y%2FiKCrIpyy%2BOR1Ba8CqMoZq5A0K%2FtrXTdRWqIE%2BA0TCJt1YYv2AziCl1KQuLT7Xn9V9pMuGP1A0q44OQPsu%2Fdd%2BaK9h6t3qt%2FG1RQov31iD%2BL%2Fp%2BdUNb5KfHI2AFilCI1IUk70MyVaIsFbZmyKiDnDgmRND%2Bt0%2FZSaeD4OWodYdhlZQtfvN4fL5OHyAiD9A%2BXS%2Ff9AR%2FyX1La5RF6L4455pFz%2BOPve7iDwp2Cz338p2SYzs8rs%2BsZjRejMw7JDGxwY6pgEV3KrDpLVsrbkWI8GWf%2FL9IIxIrjSwZilyXPUOC1R7SIiLvOWdQXuqY2xZF8PRSPmnh%2FuM08EC1AjYJpIHZyiwjTROA54o7oRaJRY1E9%2BHcQQACS9h8KJGXnmglQAFfi%2Bnum%2BNGFXkTZwAW24iLuUMQDpVP2DyM3EBPVxr%2BfXbEt3jyfTlCrmkl2JW%2BQzcH%2F6cf3TBvbpWda%2BaombNCGROtI9kdMgw&X-Amz-Signature=fb0782f68f6454c555ba21402ed83fbcb6da9916dd4838e6644cbcacf357a608&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMDG5ZHT%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICcm0GY20D0lRusRVW4yVIGKT8H0ZG3ATP15LI56o4fhAiBkaHLdQctKgX6TWVPGtDB3RDBPTNAiO5z%2Fsj35uNbdFCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5NQYMNM86o5mmZX%2BKtwDdFsAnN3JjmFVjHUESzMskcuhwTwHpx8dZD%2F45lAymwGFp77t9GAtg54LsKKn%2FMUoQSGuNoQpLrez0%2B6%2FyEvtxNUxzuIGy2%2B8%2BHCo2semEoJ8GHAYF9McaXCxKwbJIVG959j6kCEd7gFrj5iApj3twWDc19MvfF5qjZbFYG0QDxfBLdAZU%2BzKykVuG4ekrFKz%2BjJ6xkHFOce6PBdurtL8vCj40t1jrNQcCfFLwqqHLsN3ucMeBVsLwaMglNJ7vPpNkxUvuyPP3e3owLVpC4NxB%2BdLEqVYO5tn%2BchZVj4cJBV031%2FHrNE9Tk%2FBxuYRMIzEU9xAzVL9sEkCLTYSxkNDe%2BXtruLipga%2BsywFVUPzKv7%2BxsjKsBzowYTNT9dVO1VB7y%2FiKCrIpyy%2BOR1Ba8CqMoZq5A0K%2FtrXTdRWqIE%2BA0TCJt1YYv2AziCl1KQuLT7Xn9V9pMuGP1A0q44OQPsu%2Fdd%2BaK9h6t3qt%2FG1RQov31iD%2BL%2Fp%2BdUNb5KfHI2AFilCI1IUk70MyVaIsFbZmyKiDnDgmRND%2Bt0%2FZSaeD4OWodYdhlZQtfvN4fL5OHyAiD9A%2BXS%2Ff9AR%2FyX1La5RF6L4455pFz%2BOPve7iDwp2Cz338p2SYzs8rs%2BsZjRejMw7JDGxwY6pgEV3KrDpLVsrbkWI8GWf%2FL9IIxIrjSwZilyXPUOC1R7SIiLvOWdQXuqY2xZF8PRSPmnh%2FuM08EC1AjYJpIHZyiwjTROA54o7oRaJRY1E9%2BHcQQACS9h8KJGXnmglQAFfi%2Bnum%2BNGFXkTZwAW24iLuUMQDpVP2DyM3EBPVxr%2BfXbEt3jyfTlCrmkl2JW%2BQzcH%2F6cf3TBvbpWda%2BaombNCGROtI9kdMgw&X-Amz-Signature=0255ccca9cd90e090f805c9405e98edc18cfaae99268df2c530f63a47959bd32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
