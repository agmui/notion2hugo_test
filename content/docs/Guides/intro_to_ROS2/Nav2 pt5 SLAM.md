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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXUC7V72%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCERjDeH%2Bqps3Wo%2B%2B0ZfgPVGc5ewRsD%2B%2FBkZxD9Ovr8XgIgHj2x7%2B11uLzChasMkWBeq%2Flyyrdzb97GwHWJb1T3XwcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHwFhFRPAuNuivimircA0p8%2B%2BJaDpgLHuwijkkCF%2BVh4lCFqJ0GVUEVYiHs%2BoFjfJ%2FJnCyYgM55oUdWlezUJjdN1bNpYfQkt1Su55obdmL%2Bm9CFHzuse5fGF3rv4V5r8X%2BE0veFJO19ADzeKBvC4%2FiEXU0ytwwFX5lZE%2FkG2x1Cx1WDx1GG2S6DHTdmeB1KeRcQQOv6ImfAkbgnLW0JQ5c%2Ft1YoPrLl3gf%2BGCyA0tnsImADHcc071Edfod1nW%2Bv7syFBhgmKCCIJIHlK0fTlxfQZsifQHIVcxSxmYa7QUPjQML5QX2uXBUPTQrL82FTUtbadGiBorofUECmB06JkfEqOatle3VOo0QYzIrJX3zscOFvhPK%2B%2FzfWydaA1nAzgSugPR8sTVjsrsjGsR6ujuI4KcIrJsLVH%2Bb4njbb1piuVEUKjr1KUCi%2B%2BYxRYbtesnZ9jgtZSS%2B8QLasaCFfJrpB5KzET3QL72Joak3fM7vG4jGLmck7a%2F2XiHqugmJiJ5fJS39E0nS9olVrtBAlgsZHuDQcgkZuFoSee%2FF2vmQGug1XXqUeecJZ5GS6aSmGi%2FHNSl4VDmtsNyT%2Bt7asIEpKaUAEaCBWP4HNxHI4EwU8V7eyUWBNTVS8wsvHSZH9Jdj4Xy3G%2F2buky8CMKye5cQGOqUBDyM6Jn3EQEweU7YZ0QocLVBBRgp%2B7Eio0t7%2BT8aZuF0zgZmNJN9OqaZe7pJpv%2FVbzaxFMqquP383%2FQ2uwOIikQYzJS4IkunzmB4rx5FbW8D%2BcuchmBgKdiCZH5seSOs5q%2BVFjeh04%2BD5E85NEMB%2FVZlTfFQjRJRNEDeDZRZ5V12i28p60%2FTwLAoX5OmJnxnnbVWAN53IXAR%2B3IuWuEpYkW%2BoX9fS&X-Amz-Signature=0f5b72f3c51eba3998407241a0205294969c19b9e0cac63fea7aa5eb1236c043&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXUC7V72%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCERjDeH%2Bqps3Wo%2B%2B0ZfgPVGc5ewRsD%2B%2FBkZxD9Ovr8XgIgHj2x7%2B11uLzChasMkWBeq%2Flyyrdzb97GwHWJb1T3XwcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHwFhFRPAuNuivimircA0p8%2B%2BJaDpgLHuwijkkCF%2BVh4lCFqJ0GVUEVYiHs%2BoFjfJ%2FJnCyYgM55oUdWlezUJjdN1bNpYfQkt1Su55obdmL%2Bm9CFHzuse5fGF3rv4V5r8X%2BE0veFJO19ADzeKBvC4%2FiEXU0ytwwFX5lZE%2FkG2x1Cx1WDx1GG2S6DHTdmeB1KeRcQQOv6ImfAkbgnLW0JQ5c%2Ft1YoPrLl3gf%2BGCyA0tnsImADHcc071Edfod1nW%2Bv7syFBhgmKCCIJIHlK0fTlxfQZsifQHIVcxSxmYa7QUPjQML5QX2uXBUPTQrL82FTUtbadGiBorofUECmB06JkfEqOatle3VOo0QYzIrJX3zscOFvhPK%2B%2FzfWydaA1nAzgSugPR8sTVjsrsjGsR6ujuI4KcIrJsLVH%2Bb4njbb1piuVEUKjr1KUCi%2B%2BYxRYbtesnZ9jgtZSS%2B8QLasaCFfJrpB5KzET3QL72Joak3fM7vG4jGLmck7a%2F2XiHqugmJiJ5fJS39E0nS9olVrtBAlgsZHuDQcgkZuFoSee%2FF2vmQGug1XXqUeecJZ5GS6aSmGi%2FHNSl4VDmtsNyT%2Bt7asIEpKaUAEaCBWP4HNxHI4EwU8V7eyUWBNTVS8wsvHSZH9Jdj4Xy3G%2F2buky8CMKye5cQGOqUBDyM6Jn3EQEweU7YZ0QocLVBBRgp%2B7Eio0t7%2BT8aZuF0zgZmNJN9OqaZe7pJpv%2FVbzaxFMqquP383%2FQ2uwOIikQYzJS4IkunzmB4rx5FbW8D%2BcuchmBgKdiCZH5seSOs5q%2BVFjeh04%2BD5E85NEMB%2FVZlTfFQjRJRNEDeDZRZ5V12i28p60%2FTwLAoX5OmJnxnnbVWAN53IXAR%2B3IuWuEpYkW%2BoX9fS&X-Amz-Signature=c36b8cce2d385882a8f5fb8a35b22469dfe723d8f8acb33f8689df73edc9e4e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXUC7V72%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCERjDeH%2Bqps3Wo%2B%2B0ZfgPVGc5ewRsD%2B%2FBkZxD9Ovr8XgIgHj2x7%2B11uLzChasMkWBeq%2Flyyrdzb97GwHWJb1T3XwcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHwFhFRPAuNuivimircA0p8%2B%2BJaDpgLHuwijkkCF%2BVh4lCFqJ0GVUEVYiHs%2BoFjfJ%2FJnCyYgM55oUdWlezUJjdN1bNpYfQkt1Su55obdmL%2Bm9CFHzuse5fGF3rv4V5r8X%2BE0veFJO19ADzeKBvC4%2FiEXU0ytwwFX5lZE%2FkG2x1Cx1WDx1GG2S6DHTdmeB1KeRcQQOv6ImfAkbgnLW0JQ5c%2Ft1YoPrLl3gf%2BGCyA0tnsImADHcc071Edfod1nW%2Bv7syFBhgmKCCIJIHlK0fTlxfQZsifQHIVcxSxmYa7QUPjQML5QX2uXBUPTQrL82FTUtbadGiBorofUECmB06JkfEqOatle3VOo0QYzIrJX3zscOFvhPK%2B%2FzfWydaA1nAzgSugPR8sTVjsrsjGsR6ujuI4KcIrJsLVH%2Bb4njbb1piuVEUKjr1KUCi%2B%2BYxRYbtesnZ9jgtZSS%2B8QLasaCFfJrpB5KzET3QL72Joak3fM7vG4jGLmck7a%2F2XiHqugmJiJ5fJS39E0nS9olVrtBAlgsZHuDQcgkZuFoSee%2FF2vmQGug1XXqUeecJZ5GS6aSmGi%2FHNSl4VDmtsNyT%2Bt7asIEpKaUAEaCBWP4HNxHI4EwU8V7eyUWBNTVS8wsvHSZH9Jdj4Xy3G%2F2buky8CMKye5cQGOqUBDyM6Jn3EQEweU7YZ0QocLVBBRgp%2B7Eio0t7%2BT8aZuF0zgZmNJN9OqaZe7pJpv%2FVbzaxFMqquP383%2FQ2uwOIikQYzJS4IkunzmB4rx5FbW8D%2BcuchmBgKdiCZH5seSOs5q%2BVFjeh04%2BD5E85NEMB%2FVZlTfFQjRJRNEDeDZRZ5V12i28p60%2FTwLAoX5OmJnxnnbVWAN53IXAR%2B3IuWuEpYkW%2BoX9fS&X-Amz-Signature=b01f3f717929d8528060317d8af39cb6292ab6ac33dca8c0bc1ea1a216629f34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXUC7V72%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCERjDeH%2Bqps3Wo%2B%2B0ZfgPVGc5ewRsD%2B%2FBkZxD9Ovr8XgIgHj2x7%2B11uLzChasMkWBeq%2Flyyrdzb97GwHWJb1T3XwcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHwFhFRPAuNuivimircA0p8%2B%2BJaDpgLHuwijkkCF%2BVh4lCFqJ0GVUEVYiHs%2BoFjfJ%2FJnCyYgM55oUdWlezUJjdN1bNpYfQkt1Su55obdmL%2Bm9CFHzuse5fGF3rv4V5r8X%2BE0veFJO19ADzeKBvC4%2FiEXU0ytwwFX5lZE%2FkG2x1Cx1WDx1GG2S6DHTdmeB1KeRcQQOv6ImfAkbgnLW0JQ5c%2Ft1YoPrLl3gf%2BGCyA0tnsImADHcc071Edfod1nW%2Bv7syFBhgmKCCIJIHlK0fTlxfQZsifQHIVcxSxmYa7QUPjQML5QX2uXBUPTQrL82FTUtbadGiBorofUECmB06JkfEqOatle3VOo0QYzIrJX3zscOFvhPK%2B%2FzfWydaA1nAzgSugPR8sTVjsrsjGsR6ujuI4KcIrJsLVH%2Bb4njbb1piuVEUKjr1KUCi%2B%2BYxRYbtesnZ9jgtZSS%2B8QLasaCFfJrpB5KzET3QL72Joak3fM7vG4jGLmck7a%2F2XiHqugmJiJ5fJS39E0nS9olVrtBAlgsZHuDQcgkZuFoSee%2FF2vmQGug1XXqUeecJZ5GS6aSmGi%2FHNSl4VDmtsNyT%2Bt7asIEpKaUAEaCBWP4HNxHI4EwU8V7eyUWBNTVS8wsvHSZH9Jdj4Xy3G%2F2buky8CMKye5cQGOqUBDyM6Jn3EQEweU7YZ0QocLVBBRgp%2B7Eio0t7%2BT8aZuF0zgZmNJN9OqaZe7pJpv%2FVbzaxFMqquP383%2FQ2uwOIikQYzJS4IkunzmB4rx5FbW8D%2BcuchmBgKdiCZH5seSOs5q%2BVFjeh04%2BD5E85NEMB%2FVZlTfFQjRJRNEDeDZRZ5V12i28p60%2FTwLAoX5OmJnxnnbVWAN53IXAR%2B3IuWuEpYkW%2BoX9fS&X-Amz-Signature=ba7193fc7d445f8464de6e914b31e6899709f1dcbc4f018b0a2c5e1b81a8d361&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXUC7V72%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCERjDeH%2Bqps3Wo%2B%2B0ZfgPVGc5ewRsD%2B%2FBkZxD9Ovr8XgIgHj2x7%2B11uLzChasMkWBeq%2Flyyrdzb97GwHWJb1T3XwcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHwFhFRPAuNuivimircA0p8%2B%2BJaDpgLHuwijkkCF%2BVh4lCFqJ0GVUEVYiHs%2BoFjfJ%2FJnCyYgM55oUdWlezUJjdN1bNpYfQkt1Su55obdmL%2Bm9CFHzuse5fGF3rv4V5r8X%2BE0veFJO19ADzeKBvC4%2FiEXU0ytwwFX5lZE%2FkG2x1Cx1WDx1GG2S6DHTdmeB1KeRcQQOv6ImfAkbgnLW0JQ5c%2Ft1YoPrLl3gf%2BGCyA0tnsImADHcc071Edfod1nW%2Bv7syFBhgmKCCIJIHlK0fTlxfQZsifQHIVcxSxmYa7QUPjQML5QX2uXBUPTQrL82FTUtbadGiBorofUECmB06JkfEqOatle3VOo0QYzIrJX3zscOFvhPK%2B%2FzfWydaA1nAzgSugPR8sTVjsrsjGsR6ujuI4KcIrJsLVH%2Bb4njbb1piuVEUKjr1KUCi%2B%2BYxRYbtesnZ9jgtZSS%2B8QLasaCFfJrpB5KzET3QL72Joak3fM7vG4jGLmck7a%2F2XiHqugmJiJ5fJS39E0nS9olVrtBAlgsZHuDQcgkZuFoSee%2FF2vmQGug1XXqUeecJZ5GS6aSmGi%2FHNSl4VDmtsNyT%2Bt7asIEpKaUAEaCBWP4HNxHI4EwU8V7eyUWBNTVS8wsvHSZH9Jdj4Xy3G%2F2buky8CMKye5cQGOqUBDyM6Jn3EQEweU7YZ0QocLVBBRgp%2B7Eio0t7%2BT8aZuF0zgZmNJN9OqaZe7pJpv%2FVbzaxFMqquP383%2FQ2uwOIikQYzJS4IkunzmB4rx5FbW8D%2BcuchmBgKdiCZH5seSOs5q%2BVFjeh04%2BD5E85NEMB%2FVZlTfFQjRJRNEDeDZRZ5V12i28p60%2FTwLAoX5OmJnxnnbVWAN53IXAR%2B3IuWuEpYkW%2BoX9fS&X-Amz-Signature=837074f8d3d5a5d84d681d505e21c2983289a9afacd35887e50c3230ced20f34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXUC7V72%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCERjDeH%2Bqps3Wo%2B%2B0ZfgPVGc5ewRsD%2B%2FBkZxD9Ovr8XgIgHj2x7%2B11uLzChasMkWBeq%2Flyyrdzb97GwHWJb1T3XwcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHwFhFRPAuNuivimircA0p8%2B%2BJaDpgLHuwijkkCF%2BVh4lCFqJ0GVUEVYiHs%2BoFjfJ%2FJnCyYgM55oUdWlezUJjdN1bNpYfQkt1Su55obdmL%2Bm9CFHzuse5fGF3rv4V5r8X%2BE0veFJO19ADzeKBvC4%2FiEXU0ytwwFX5lZE%2FkG2x1Cx1WDx1GG2S6DHTdmeB1KeRcQQOv6ImfAkbgnLW0JQ5c%2Ft1YoPrLl3gf%2BGCyA0tnsImADHcc071Edfod1nW%2Bv7syFBhgmKCCIJIHlK0fTlxfQZsifQHIVcxSxmYa7QUPjQML5QX2uXBUPTQrL82FTUtbadGiBorofUECmB06JkfEqOatle3VOo0QYzIrJX3zscOFvhPK%2B%2FzfWydaA1nAzgSugPR8sTVjsrsjGsR6ujuI4KcIrJsLVH%2Bb4njbb1piuVEUKjr1KUCi%2B%2BYxRYbtesnZ9jgtZSS%2B8QLasaCFfJrpB5KzET3QL72Joak3fM7vG4jGLmck7a%2F2XiHqugmJiJ5fJS39E0nS9olVrtBAlgsZHuDQcgkZuFoSee%2FF2vmQGug1XXqUeecJZ5GS6aSmGi%2FHNSl4VDmtsNyT%2Bt7asIEpKaUAEaCBWP4HNxHI4EwU8V7eyUWBNTVS8wsvHSZH9Jdj4Xy3G%2F2buky8CMKye5cQGOqUBDyM6Jn3EQEweU7YZ0QocLVBBRgp%2B7Eio0t7%2BT8aZuF0zgZmNJN9OqaZe7pJpv%2FVbzaxFMqquP383%2FQ2uwOIikQYzJS4IkunzmB4rx5FbW8D%2BcuchmBgKdiCZH5seSOs5q%2BVFjeh04%2BD5E85NEMB%2FVZlTfFQjRJRNEDeDZRZ5V12i28p60%2FTwLAoX5OmJnxnnbVWAN53IXAR%2B3IuWuEpYkW%2BoX9fS&X-Amz-Signature=21b16bc0a30e535e89f32697c67a3520cf58353054f180dde61dc62c2f20827b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXUC7V72%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCERjDeH%2Bqps3Wo%2B%2B0ZfgPVGc5ewRsD%2B%2FBkZxD9Ovr8XgIgHj2x7%2B11uLzChasMkWBeq%2Flyyrdzb97GwHWJb1T3XwcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHwFhFRPAuNuivimircA0p8%2B%2BJaDpgLHuwijkkCF%2BVh4lCFqJ0GVUEVYiHs%2BoFjfJ%2FJnCyYgM55oUdWlezUJjdN1bNpYfQkt1Su55obdmL%2Bm9CFHzuse5fGF3rv4V5r8X%2BE0veFJO19ADzeKBvC4%2FiEXU0ytwwFX5lZE%2FkG2x1Cx1WDx1GG2S6DHTdmeB1KeRcQQOv6ImfAkbgnLW0JQ5c%2Ft1YoPrLl3gf%2BGCyA0tnsImADHcc071Edfod1nW%2Bv7syFBhgmKCCIJIHlK0fTlxfQZsifQHIVcxSxmYa7QUPjQML5QX2uXBUPTQrL82FTUtbadGiBorofUECmB06JkfEqOatle3VOo0QYzIrJX3zscOFvhPK%2B%2FzfWydaA1nAzgSugPR8sTVjsrsjGsR6ujuI4KcIrJsLVH%2Bb4njbb1piuVEUKjr1KUCi%2B%2BYxRYbtesnZ9jgtZSS%2B8QLasaCFfJrpB5KzET3QL72Joak3fM7vG4jGLmck7a%2F2XiHqugmJiJ5fJS39E0nS9olVrtBAlgsZHuDQcgkZuFoSee%2FF2vmQGug1XXqUeecJZ5GS6aSmGi%2FHNSl4VDmtsNyT%2Bt7asIEpKaUAEaCBWP4HNxHI4EwU8V7eyUWBNTVS8wsvHSZH9Jdj4Xy3G%2F2buky8CMKye5cQGOqUBDyM6Jn3EQEweU7YZ0QocLVBBRgp%2B7Eio0t7%2BT8aZuF0zgZmNJN9OqaZe7pJpv%2FVbzaxFMqquP383%2FQ2uwOIikQYzJS4IkunzmB4rx5FbW8D%2BcuchmBgKdiCZH5seSOs5q%2BVFjeh04%2BD5E85NEMB%2FVZlTfFQjRJRNEDeDZRZ5V12i28p60%2FTwLAoX5OmJnxnnbVWAN53IXAR%2B3IuWuEpYkW%2BoX9fS&X-Amz-Signature=754529ff36ab698cfbfee72ae64f0dd439f8689f9e35cdf5b22136785a916652&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXUC7V72%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCERjDeH%2Bqps3Wo%2B%2B0ZfgPVGc5ewRsD%2B%2FBkZxD9Ovr8XgIgHj2x7%2B11uLzChasMkWBeq%2Flyyrdzb97GwHWJb1T3XwcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHwFhFRPAuNuivimircA0p8%2B%2BJaDpgLHuwijkkCF%2BVh4lCFqJ0GVUEVYiHs%2BoFjfJ%2FJnCyYgM55oUdWlezUJjdN1bNpYfQkt1Su55obdmL%2Bm9CFHzuse5fGF3rv4V5r8X%2BE0veFJO19ADzeKBvC4%2FiEXU0ytwwFX5lZE%2FkG2x1Cx1WDx1GG2S6DHTdmeB1KeRcQQOv6ImfAkbgnLW0JQ5c%2Ft1YoPrLl3gf%2BGCyA0tnsImADHcc071Edfod1nW%2Bv7syFBhgmKCCIJIHlK0fTlxfQZsifQHIVcxSxmYa7QUPjQML5QX2uXBUPTQrL82FTUtbadGiBorofUECmB06JkfEqOatle3VOo0QYzIrJX3zscOFvhPK%2B%2FzfWydaA1nAzgSugPR8sTVjsrsjGsR6ujuI4KcIrJsLVH%2Bb4njbb1piuVEUKjr1KUCi%2B%2BYxRYbtesnZ9jgtZSS%2B8QLasaCFfJrpB5KzET3QL72Joak3fM7vG4jGLmck7a%2F2XiHqugmJiJ5fJS39E0nS9olVrtBAlgsZHuDQcgkZuFoSee%2FF2vmQGug1XXqUeecJZ5GS6aSmGi%2FHNSl4VDmtsNyT%2Bt7asIEpKaUAEaCBWP4HNxHI4EwU8V7eyUWBNTVS8wsvHSZH9Jdj4Xy3G%2F2buky8CMKye5cQGOqUBDyM6Jn3EQEweU7YZ0QocLVBBRgp%2B7Eio0t7%2BT8aZuF0zgZmNJN9OqaZe7pJpv%2FVbzaxFMqquP383%2FQ2uwOIikQYzJS4IkunzmB4rx5FbW8D%2BcuchmBgKdiCZH5seSOs5q%2BVFjeh04%2BD5E85NEMB%2FVZlTfFQjRJRNEDeDZRZ5V12i28p60%2FTwLAoX5OmJnxnnbVWAN53IXAR%2B3IuWuEpYkW%2BoX9fS&X-Amz-Signature=6d7749c5bd9852c0d70a071604857000441fa6da706926a077e52af906934c80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXUC7V72%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCERjDeH%2Bqps3Wo%2B%2B0ZfgPVGc5ewRsD%2B%2FBkZxD9Ovr8XgIgHj2x7%2B11uLzChasMkWBeq%2Flyyrdzb97GwHWJb1T3XwcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHwFhFRPAuNuivimircA0p8%2B%2BJaDpgLHuwijkkCF%2BVh4lCFqJ0GVUEVYiHs%2BoFjfJ%2FJnCyYgM55oUdWlezUJjdN1bNpYfQkt1Su55obdmL%2Bm9CFHzuse5fGF3rv4V5r8X%2BE0veFJO19ADzeKBvC4%2FiEXU0ytwwFX5lZE%2FkG2x1Cx1WDx1GG2S6DHTdmeB1KeRcQQOv6ImfAkbgnLW0JQ5c%2Ft1YoPrLl3gf%2BGCyA0tnsImADHcc071Edfod1nW%2Bv7syFBhgmKCCIJIHlK0fTlxfQZsifQHIVcxSxmYa7QUPjQML5QX2uXBUPTQrL82FTUtbadGiBorofUECmB06JkfEqOatle3VOo0QYzIrJX3zscOFvhPK%2B%2FzfWydaA1nAzgSugPR8sTVjsrsjGsR6ujuI4KcIrJsLVH%2Bb4njbb1piuVEUKjr1KUCi%2B%2BYxRYbtesnZ9jgtZSS%2B8QLasaCFfJrpB5KzET3QL72Joak3fM7vG4jGLmck7a%2F2XiHqugmJiJ5fJS39E0nS9olVrtBAlgsZHuDQcgkZuFoSee%2FF2vmQGug1XXqUeecJZ5GS6aSmGi%2FHNSl4VDmtsNyT%2Bt7asIEpKaUAEaCBWP4HNxHI4EwU8V7eyUWBNTVS8wsvHSZH9Jdj4Xy3G%2F2buky8CMKye5cQGOqUBDyM6Jn3EQEweU7YZ0QocLVBBRgp%2B7Eio0t7%2BT8aZuF0zgZmNJN9OqaZe7pJpv%2FVbzaxFMqquP383%2FQ2uwOIikQYzJS4IkunzmB4rx5FbW8D%2BcuchmBgKdiCZH5seSOs5q%2BVFjeh04%2BD5E85NEMB%2FVZlTfFQjRJRNEDeDZRZ5V12i28p60%2FTwLAoX5OmJnxnnbVWAN53IXAR%2B3IuWuEpYkW%2BoX9fS&X-Amz-Signature=064b7768b57cd22a74dd178794dff592720929ab973281c751162db5799e876b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXUC7V72%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCERjDeH%2Bqps3Wo%2B%2B0ZfgPVGc5ewRsD%2B%2FBkZxD9Ovr8XgIgHj2x7%2B11uLzChasMkWBeq%2Flyyrdzb97GwHWJb1T3XwcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHwFhFRPAuNuivimircA0p8%2B%2BJaDpgLHuwijkkCF%2BVh4lCFqJ0GVUEVYiHs%2BoFjfJ%2FJnCyYgM55oUdWlezUJjdN1bNpYfQkt1Su55obdmL%2Bm9CFHzuse5fGF3rv4V5r8X%2BE0veFJO19ADzeKBvC4%2FiEXU0ytwwFX5lZE%2FkG2x1Cx1WDx1GG2S6DHTdmeB1KeRcQQOv6ImfAkbgnLW0JQ5c%2Ft1YoPrLl3gf%2BGCyA0tnsImADHcc071Edfod1nW%2Bv7syFBhgmKCCIJIHlK0fTlxfQZsifQHIVcxSxmYa7QUPjQML5QX2uXBUPTQrL82FTUtbadGiBorofUECmB06JkfEqOatle3VOo0QYzIrJX3zscOFvhPK%2B%2FzfWydaA1nAzgSugPR8sTVjsrsjGsR6ujuI4KcIrJsLVH%2Bb4njbb1piuVEUKjr1KUCi%2B%2BYxRYbtesnZ9jgtZSS%2B8QLasaCFfJrpB5KzET3QL72Joak3fM7vG4jGLmck7a%2F2XiHqugmJiJ5fJS39E0nS9olVrtBAlgsZHuDQcgkZuFoSee%2FF2vmQGug1XXqUeecJZ5GS6aSmGi%2FHNSl4VDmtsNyT%2Bt7asIEpKaUAEaCBWP4HNxHI4EwU8V7eyUWBNTVS8wsvHSZH9Jdj4Xy3G%2F2buky8CMKye5cQGOqUBDyM6Jn3EQEweU7YZ0QocLVBBRgp%2B7Eio0t7%2BT8aZuF0zgZmNJN9OqaZe7pJpv%2FVbzaxFMqquP383%2FQ2uwOIikQYzJS4IkunzmB4rx5FbW8D%2BcuchmBgKdiCZH5seSOs5q%2BVFjeh04%2BD5E85NEMB%2FVZlTfFQjRJRNEDeDZRZ5V12i28p60%2FTwLAoX5OmJnxnnbVWAN53IXAR%2B3IuWuEpYkW%2BoX9fS&X-Amz-Signature=a4cef0686dc33dbb53aae48e815302e4228269592e5b1309e67600d4b7956f4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXUC7V72%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCERjDeH%2Bqps3Wo%2B%2B0ZfgPVGc5ewRsD%2B%2FBkZxD9Ovr8XgIgHj2x7%2B11uLzChasMkWBeq%2Flyyrdzb97GwHWJb1T3XwcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHwFhFRPAuNuivimircA0p8%2B%2BJaDpgLHuwijkkCF%2BVh4lCFqJ0GVUEVYiHs%2BoFjfJ%2FJnCyYgM55oUdWlezUJjdN1bNpYfQkt1Su55obdmL%2Bm9CFHzuse5fGF3rv4V5r8X%2BE0veFJO19ADzeKBvC4%2FiEXU0ytwwFX5lZE%2FkG2x1Cx1WDx1GG2S6DHTdmeB1KeRcQQOv6ImfAkbgnLW0JQ5c%2Ft1YoPrLl3gf%2BGCyA0tnsImADHcc071Edfod1nW%2Bv7syFBhgmKCCIJIHlK0fTlxfQZsifQHIVcxSxmYa7QUPjQML5QX2uXBUPTQrL82FTUtbadGiBorofUECmB06JkfEqOatle3VOo0QYzIrJX3zscOFvhPK%2B%2FzfWydaA1nAzgSugPR8sTVjsrsjGsR6ujuI4KcIrJsLVH%2Bb4njbb1piuVEUKjr1KUCi%2B%2BYxRYbtesnZ9jgtZSS%2B8QLasaCFfJrpB5KzET3QL72Joak3fM7vG4jGLmck7a%2F2XiHqugmJiJ5fJS39E0nS9olVrtBAlgsZHuDQcgkZuFoSee%2FF2vmQGug1XXqUeecJZ5GS6aSmGi%2FHNSl4VDmtsNyT%2Bt7asIEpKaUAEaCBWP4HNxHI4EwU8V7eyUWBNTVS8wsvHSZH9Jdj4Xy3G%2F2buky8CMKye5cQGOqUBDyM6Jn3EQEweU7YZ0QocLVBBRgp%2B7Eio0t7%2BT8aZuF0zgZmNJN9OqaZe7pJpv%2FVbzaxFMqquP383%2FQ2uwOIikQYzJS4IkunzmB4rx5FbW8D%2BcuchmBgKdiCZH5seSOs5q%2BVFjeh04%2BD5E85NEMB%2FVZlTfFQjRJRNEDeDZRZ5V12i28p60%2FTwLAoX5OmJnxnnbVWAN53IXAR%2B3IuWuEpYkW%2BoX9fS&X-Amz-Signature=b9981c4615936d1a404f6c424aa2720cfb88ed337ca1e63682e0688065b8d373&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXUC7V72%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCERjDeH%2Bqps3Wo%2B%2B0ZfgPVGc5ewRsD%2B%2FBkZxD9Ovr8XgIgHj2x7%2B11uLzChasMkWBeq%2Flyyrdzb97GwHWJb1T3XwcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHwFhFRPAuNuivimircA0p8%2B%2BJaDpgLHuwijkkCF%2BVh4lCFqJ0GVUEVYiHs%2BoFjfJ%2FJnCyYgM55oUdWlezUJjdN1bNpYfQkt1Su55obdmL%2Bm9CFHzuse5fGF3rv4V5r8X%2BE0veFJO19ADzeKBvC4%2FiEXU0ytwwFX5lZE%2FkG2x1Cx1WDx1GG2S6DHTdmeB1KeRcQQOv6ImfAkbgnLW0JQ5c%2Ft1YoPrLl3gf%2BGCyA0tnsImADHcc071Edfod1nW%2Bv7syFBhgmKCCIJIHlK0fTlxfQZsifQHIVcxSxmYa7QUPjQML5QX2uXBUPTQrL82FTUtbadGiBorofUECmB06JkfEqOatle3VOo0QYzIrJX3zscOFvhPK%2B%2FzfWydaA1nAzgSugPR8sTVjsrsjGsR6ujuI4KcIrJsLVH%2Bb4njbb1piuVEUKjr1KUCi%2B%2BYxRYbtesnZ9jgtZSS%2B8QLasaCFfJrpB5KzET3QL72Joak3fM7vG4jGLmck7a%2F2XiHqugmJiJ5fJS39E0nS9olVrtBAlgsZHuDQcgkZuFoSee%2FF2vmQGug1XXqUeecJZ5GS6aSmGi%2FHNSl4VDmtsNyT%2Bt7asIEpKaUAEaCBWP4HNxHI4EwU8V7eyUWBNTVS8wsvHSZH9Jdj4Xy3G%2F2buky8CMKye5cQGOqUBDyM6Jn3EQEweU7YZ0QocLVBBRgp%2B7Eio0t7%2BT8aZuF0zgZmNJN9OqaZe7pJpv%2FVbzaxFMqquP383%2FQ2uwOIikQYzJS4IkunzmB4rx5FbW8D%2BcuchmBgKdiCZH5seSOs5q%2BVFjeh04%2BD5E85NEMB%2FVZlTfFQjRJRNEDeDZRZ5V12i28p60%2FTwLAoX5OmJnxnnbVWAN53IXAR%2B3IuWuEpYkW%2BoX9fS&X-Amz-Signature=8d254f438577a80d8da5da9b443241d3a6c7a313c7228a25d705c713a10fdd84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXUC7V72%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCERjDeH%2Bqps3Wo%2B%2B0ZfgPVGc5ewRsD%2B%2FBkZxD9Ovr8XgIgHj2x7%2B11uLzChasMkWBeq%2Flyyrdzb97GwHWJb1T3XwcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHwFhFRPAuNuivimircA0p8%2B%2BJaDpgLHuwijkkCF%2BVh4lCFqJ0GVUEVYiHs%2BoFjfJ%2FJnCyYgM55oUdWlezUJjdN1bNpYfQkt1Su55obdmL%2Bm9CFHzuse5fGF3rv4V5r8X%2BE0veFJO19ADzeKBvC4%2FiEXU0ytwwFX5lZE%2FkG2x1Cx1WDx1GG2S6DHTdmeB1KeRcQQOv6ImfAkbgnLW0JQ5c%2Ft1YoPrLl3gf%2BGCyA0tnsImADHcc071Edfod1nW%2Bv7syFBhgmKCCIJIHlK0fTlxfQZsifQHIVcxSxmYa7QUPjQML5QX2uXBUPTQrL82FTUtbadGiBorofUECmB06JkfEqOatle3VOo0QYzIrJX3zscOFvhPK%2B%2FzfWydaA1nAzgSugPR8sTVjsrsjGsR6ujuI4KcIrJsLVH%2Bb4njbb1piuVEUKjr1KUCi%2B%2BYxRYbtesnZ9jgtZSS%2B8QLasaCFfJrpB5KzET3QL72Joak3fM7vG4jGLmck7a%2F2XiHqugmJiJ5fJS39E0nS9olVrtBAlgsZHuDQcgkZuFoSee%2FF2vmQGug1XXqUeecJZ5GS6aSmGi%2FHNSl4VDmtsNyT%2Bt7asIEpKaUAEaCBWP4HNxHI4EwU8V7eyUWBNTVS8wsvHSZH9Jdj4Xy3G%2F2buky8CMKye5cQGOqUBDyM6Jn3EQEweU7YZ0QocLVBBRgp%2B7Eio0t7%2BT8aZuF0zgZmNJN9OqaZe7pJpv%2FVbzaxFMqquP383%2FQ2uwOIikQYzJS4IkunzmB4rx5FbW8D%2BcuchmBgKdiCZH5seSOs5q%2BVFjeh04%2BD5E85NEMB%2FVZlTfFQjRJRNEDeDZRZ5V12i28p60%2FTwLAoX5OmJnxnnbVWAN53IXAR%2B3IuWuEpYkW%2BoX9fS&X-Amz-Signature=193f5ea716fdbe8d16bae63f5d9e1be7117844bfc08bc174695b32eea0c70dd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXUC7V72%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCERjDeH%2Bqps3Wo%2B%2B0ZfgPVGc5ewRsD%2B%2FBkZxD9Ovr8XgIgHj2x7%2B11uLzChasMkWBeq%2Flyyrdzb97GwHWJb1T3XwcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHwFhFRPAuNuivimircA0p8%2B%2BJaDpgLHuwijkkCF%2BVh4lCFqJ0GVUEVYiHs%2BoFjfJ%2FJnCyYgM55oUdWlezUJjdN1bNpYfQkt1Su55obdmL%2Bm9CFHzuse5fGF3rv4V5r8X%2BE0veFJO19ADzeKBvC4%2FiEXU0ytwwFX5lZE%2FkG2x1Cx1WDx1GG2S6DHTdmeB1KeRcQQOv6ImfAkbgnLW0JQ5c%2Ft1YoPrLl3gf%2BGCyA0tnsImADHcc071Edfod1nW%2Bv7syFBhgmKCCIJIHlK0fTlxfQZsifQHIVcxSxmYa7QUPjQML5QX2uXBUPTQrL82FTUtbadGiBorofUECmB06JkfEqOatle3VOo0QYzIrJX3zscOFvhPK%2B%2FzfWydaA1nAzgSugPR8sTVjsrsjGsR6ujuI4KcIrJsLVH%2Bb4njbb1piuVEUKjr1KUCi%2B%2BYxRYbtesnZ9jgtZSS%2B8QLasaCFfJrpB5KzET3QL72Joak3fM7vG4jGLmck7a%2F2XiHqugmJiJ5fJS39E0nS9olVrtBAlgsZHuDQcgkZuFoSee%2FF2vmQGug1XXqUeecJZ5GS6aSmGi%2FHNSl4VDmtsNyT%2Bt7asIEpKaUAEaCBWP4HNxHI4EwU8V7eyUWBNTVS8wsvHSZH9Jdj4Xy3G%2F2buky8CMKye5cQGOqUBDyM6Jn3EQEweU7YZ0QocLVBBRgp%2B7Eio0t7%2BT8aZuF0zgZmNJN9OqaZe7pJpv%2FVbzaxFMqquP383%2FQ2uwOIikQYzJS4IkunzmB4rx5FbW8D%2BcuchmBgKdiCZH5seSOs5q%2BVFjeh04%2BD5E85NEMB%2FVZlTfFQjRJRNEDeDZRZ5V12i28p60%2FTwLAoX5OmJnxnnbVWAN53IXAR%2B3IuWuEpYkW%2BoX9fS&X-Amz-Signature=8164a67d639424e0e070016818ce1b65531f591ef872b09cb6317fe01655c1ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
