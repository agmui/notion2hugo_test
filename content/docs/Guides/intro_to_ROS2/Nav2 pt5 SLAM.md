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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKXI7OBL%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgb0TBLrTmnwsVbie1qwfhSPjj0%2Fqml%2Fc7DTu266AfygIgO9NP7eQQQdBnVyjHcwNfQfyWEwX6ZxggN2VKwn3wxz0qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4R9iuMN5pdbHo0fSrcAxmP7cn1lfJc91NAUil0dNv5M%2F2cWrlddAH3YCLnNWy0Hy5gfLA4MwlyrN%2FQVfNZ5XQjmSIcdo2imBNY6Qu0XKKLFiMFFEwV%2B3fgo4unvjIMudibcAUtfWTfyzYqOdiqru2Luixh%2BV3Ow9lNIMx%2FWGlNfQ4nOge4anMpDpYM54XK4Jph9%2F%2FN9Fy5shEP%2BVDr%2FEwvQMcruXHVaeZXXoqLrq%2BWDbwwBDZd5GCxvvNq1xIPEEvo2I%2BJkO%2FowY11p8a0nGgXXduywv1lw%2BmTEe5czbRDZRQwhG58l1MEZUxuW27oAG8cU2cWsjDLDBg848GKocqptarEo37TfXafW%2Bzd11%2FcoW6TEKq58ER1ugw7ebO9DQAvsCK18aZxOeaTFVH%2BEPS%2Bev7ZbypApO%2BgybcIuPKoyD0Su5nkMmSlftbfwhUTD1aUmNK%2FszyafxeMdI%2Fo8aU0uT38MpnQFzllC3%2BkbBHykLnS1%2FrCjHO9WxBqYCoR68ASsMKBYd%2Bd6mz1ugWZ62EKTtKm0q7Q3W5HnL%2BXmagDD5w2iTdNtLdAWj%2F9I%2FTgNUEsL3ynhoo540tLfuA8jNWI6SfN%2FeBOGkQU%2Bdb73xKbu%2Fs%2ByEv%2FKWAxMvOTiP6CRowY1hcNzarcPpx0MMupo8kGOqUB%2FjFWYMfyTPeJDUpiV71%2F70LdqPVEGpmhpaBE9aZvOmnNDLGeuacIcnU%2B16VUiEKvfiPmOukD5pvYzph%2B9EMD1WCd3TAr00w58v70vO5YQtaVn0g6PV9%2BaolI7kVtf8Hm8FhkVYLTCSZVk6mHVUM0XPEmtN57mABk3MeSzBtySvl8TWoW11tf1akJZ8oHhYnd%2FDWsmllJpCYBL%2F7F1fs9SgXfXE7m&X-Amz-Signature=05c833bd2037e79083aeed90fa6c8bd0fbcf8398f8de21b7fc8c088b8c689ad0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKXI7OBL%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgb0TBLrTmnwsVbie1qwfhSPjj0%2Fqml%2Fc7DTu266AfygIgO9NP7eQQQdBnVyjHcwNfQfyWEwX6ZxggN2VKwn3wxz0qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4R9iuMN5pdbHo0fSrcAxmP7cn1lfJc91NAUil0dNv5M%2F2cWrlddAH3YCLnNWy0Hy5gfLA4MwlyrN%2FQVfNZ5XQjmSIcdo2imBNY6Qu0XKKLFiMFFEwV%2B3fgo4unvjIMudibcAUtfWTfyzYqOdiqru2Luixh%2BV3Ow9lNIMx%2FWGlNfQ4nOge4anMpDpYM54XK4Jph9%2F%2FN9Fy5shEP%2BVDr%2FEwvQMcruXHVaeZXXoqLrq%2BWDbwwBDZd5GCxvvNq1xIPEEvo2I%2BJkO%2FowY11p8a0nGgXXduywv1lw%2BmTEe5czbRDZRQwhG58l1MEZUxuW27oAG8cU2cWsjDLDBg848GKocqptarEo37TfXafW%2Bzd11%2FcoW6TEKq58ER1ugw7ebO9DQAvsCK18aZxOeaTFVH%2BEPS%2Bev7ZbypApO%2BgybcIuPKoyD0Su5nkMmSlftbfwhUTD1aUmNK%2FszyafxeMdI%2Fo8aU0uT38MpnQFzllC3%2BkbBHykLnS1%2FrCjHO9WxBqYCoR68ASsMKBYd%2Bd6mz1ugWZ62EKTtKm0q7Q3W5HnL%2BXmagDD5w2iTdNtLdAWj%2F9I%2FTgNUEsL3ynhoo540tLfuA8jNWI6SfN%2FeBOGkQU%2Bdb73xKbu%2Fs%2ByEv%2FKWAxMvOTiP6CRowY1hcNzarcPpx0MMupo8kGOqUB%2FjFWYMfyTPeJDUpiV71%2F70LdqPVEGpmhpaBE9aZvOmnNDLGeuacIcnU%2B16VUiEKvfiPmOukD5pvYzph%2B9EMD1WCd3TAr00w58v70vO5YQtaVn0g6PV9%2BaolI7kVtf8Hm8FhkVYLTCSZVk6mHVUM0XPEmtN57mABk3MeSzBtySvl8TWoW11tf1akJZ8oHhYnd%2FDWsmllJpCYBL%2F7F1fs9SgXfXE7m&X-Amz-Signature=e83e0e94b7283fd6a6bd2301072eab2eac1e1ff0f51f96972854e5fc5b8af324&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKXI7OBL%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgb0TBLrTmnwsVbie1qwfhSPjj0%2Fqml%2Fc7DTu266AfygIgO9NP7eQQQdBnVyjHcwNfQfyWEwX6ZxggN2VKwn3wxz0qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4R9iuMN5pdbHo0fSrcAxmP7cn1lfJc91NAUil0dNv5M%2F2cWrlddAH3YCLnNWy0Hy5gfLA4MwlyrN%2FQVfNZ5XQjmSIcdo2imBNY6Qu0XKKLFiMFFEwV%2B3fgo4unvjIMudibcAUtfWTfyzYqOdiqru2Luixh%2BV3Ow9lNIMx%2FWGlNfQ4nOge4anMpDpYM54XK4Jph9%2F%2FN9Fy5shEP%2BVDr%2FEwvQMcruXHVaeZXXoqLrq%2BWDbwwBDZd5GCxvvNq1xIPEEvo2I%2BJkO%2FowY11p8a0nGgXXduywv1lw%2BmTEe5czbRDZRQwhG58l1MEZUxuW27oAG8cU2cWsjDLDBg848GKocqptarEo37TfXafW%2Bzd11%2FcoW6TEKq58ER1ugw7ebO9DQAvsCK18aZxOeaTFVH%2BEPS%2Bev7ZbypApO%2BgybcIuPKoyD0Su5nkMmSlftbfwhUTD1aUmNK%2FszyafxeMdI%2Fo8aU0uT38MpnQFzllC3%2BkbBHykLnS1%2FrCjHO9WxBqYCoR68ASsMKBYd%2Bd6mz1ugWZ62EKTtKm0q7Q3W5HnL%2BXmagDD5w2iTdNtLdAWj%2F9I%2FTgNUEsL3ynhoo540tLfuA8jNWI6SfN%2FeBOGkQU%2Bdb73xKbu%2Fs%2ByEv%2FKWAxMvOTiP6CRowY1hcNzarcPpx0MMupo8kGOqUB%2FjFWYMfyTPeJDUpiV71%2F70LdqPVEGpmhpaBE9aZvOmnNDLGeuacIcnU%2B16VUiEKvfiPmOukD5pvYzph%2B9EMD1WCd3TAr00w58v70vO5YQtaVn0g6PV9%2BaolI7kVtf8Hm8FhkVYLTCSZVk6mHVUM0XPEmtN57mABk3MeSzBtySvl8TWoW11tf1akJZ8oHhYnd%2FDWsmllJpCYBL%2F7F1fs9SgXfXE7m&X-Amz-Signature=a5bf818bfcd6e3d168773fd3ff9ea2ba69889973e6dad5f555924c4a86d8c066&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKXI7OBL%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgb0TBLrTmnwsVbie1qwfhSPjj0%2Fqml%2Fc7DTu266AfygIgO9NP7eQQQdBnVyjHcwNfQfyWEwX6ZxggN2VKwn3wxz0qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4R9iuMN5pdbHo0fSrcAxmP7cn1lfJc91NAUil0dNv5M%2F2cWrlddAH3YCLnNWy0Hy5gfLA4MwlyrN%2FQVfNZ5XQjmSIcdo2imBNY6Qu0XKKLFiMFFEwV%2B3fgo4unvjIMudibcAUtfWTfyzYqOdiqru2Luixh%2BV3Ow9lNIMx%2FWGlNfQ4nOge4anMpDpYM54XK4Jph9%2F%2FN9Fy5shEP%2BVDr%2FEwvQMcruXHVaeZXXoqLrq%2BWDbwwBDZd5GCxvvNq1xIPEEvo2I%2BJkO%2FowY11p8a0nGgXXduywv1lw%2BmTEe5czbRDZRQwhG58l1MEZUxuW27oAG8cU2cWsjDLDBg848GKocqptarEo37TfXafW%2Bzd11%2FcoW6TEKq58ER1ugw7ebO9DQAvsCK18aZxOeaTFVH%2BEPS%2Bev7ZbypApO%2BgybcIuPKoyD0Su5nkMmSlftbfwhUTD1aUmNK%2FszyafxeMdI%2Fo8aU0uT38MpnQFzllC3%2BkbBHykLnS1%2FrCjHO9WxBqYCoR68ASsMKBYd%2Bd6mz1ugWZ62EKTtKm0q7Q3W5HnL%2BXmagDD5w2iTdNtLdAWj%2F9I%2FTgNUEsL3ynhoo540tLfuA8jNWI6SfN%2FeBOGkQU%2Bdb73xKbu%2Fs%2ByEv%2FKWAxMvOTiP6CRowY1hcNzarcPpx0MMupo8kGOqUB%2FjFWYMfyTPeJDUpiV71%2F70LdqPVEGpmhpaBE9aZvOmnNDLGeuacIcnU%2B16VUiEKvfiPmOukD5pvYzph%2B9EMD1WCd3TAr00w58v70vO5YQtaVn0g6PV9%2BaolI7kVtf8Hm8FhkVYLTCSZVk6mHVUM0XPEmtN57mABk3MeSzBtySvl8TWoW11tf1akJZ8oHhYnd%2FDWsmllJpCYBL%2F7F1fs9SgXfXE7m&X-Amz-Signature=10f8f7214bf1f65694ced3ee54262d488a194703ff3dc492c564402cbfec53cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKXI7OBL%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgb0TBLrTmnwsVbie1qwfhSPjj0%2Fqml%2Fc7DTu266AfygIgO9NP7eQQQdBnVyjHcwNfQfyWEwX6ZxggN2VKwn3wxz0qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4R9iuMN5pdbHo0fSrcAxmP7cn1lfJc91NAUil0dNv5M%2F2cWrlddAH3YCLnNWy0Hy5gfLA4MwlyrN%2FQVfNZ5XQjmSIcdo2imBNY6Qu0XKKLFiMFFEwV%2B3fgo4unvjIMudibcAUtfWTfyzYqOdiqru2Luixh%2BV3Ow9lNIMx%2FWGlNfQ4nOge4anMpDpYM54XK4Jph9%2F%2FN9Fy5shEP%2BVDr%2FEwvQMcruXHVaeZXXoqLrq%2BWDbwwBDZd5GCxvvNq1xIPEEvo2I%2BJkO%2FowY11p8a0nGgXXduywv1lw%2BmTEe5czbRDZRQwhG58l1MEZUxuW27oAG8cU2cWsjDLDBg848GKocqptarEo37TfXafW%2Bzd11%2FcoW6TEKq58ER1ugw7ebO9DQAvsCK18aZxOeaTFVH%2BEPS%2Bev7ZbypApO%2BgybcIuPKoyD0Su5nkMmSlftbfwhUTD1aUmNK%2FszyafxeMdI%2Fo8aU0uT38MpnQFzllC3%2BkbBHykLnS1%2FrCjHO9WxBqYCoR68ASsMKBYd%2Bd6mz1ugWZ62EKTtKm0q7Q3W5HnL%2BXmagDD5w2iTdNtLdAWj%2F9I%2FTgNUEsL3ynhoo540tLfuA8jNWI6SfN%2FeBOGkQU%2Bdb73xKbu%2Fs%2ByEv%2FKWAxMvOTiP6CRowY1hcNzarcPpx0MMupo8kGOqUB%2FjFWYMfyTPeJDUpiV71%2F70LdqPVEGpmhpaBE9aZvOmnNDLGeuacIcnU%2B16VUiEKvfiPmOukD5pvYzph%2B9EMD1WCd3TAr00w58v70vO5YQtaVn0g6PV9%2BaolI7kVtf8Hm8FhkVYLTCSZVk6mHVUM0XPEmtN57mABk3MeSzBtySvl8TWoW11tf1akJZ8oHhYnd%2FDWsmllJpCYBL%2F7F1fs9SgXfXE7m&X-Amz-Signature=4bcea2537fbf09f026b68585f930a64c22759549d33e70534b8dedf8d8be0e48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKXI7OBL%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgb0TBLrTmnwsVbie1qwfhSPjj0%2Fqml%2Fc7DTu266AfygIgO9NP7eQQQdBnVyjHcwNfQfyWEwX6ZxggN2VKwn3wxz0qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4R9iuMN5pdbHo0fSrcAxmP7cn1lfJc91NAUil0dNv5M%2F2cWrlddAH3YCLnNWy0Hy5gfLA4MwlyrN%2FQVfNZ5XQjmSIcdo2imBNY6Qu0XKKLFiMFFEwV%2B3fgo4unvjIMudibcAUtfWTfyzYqOdiqru2Luixh%2BV3Ow9lNIMx%2FWGlNfQ4nOge4anMpDpYM54XK4Jph9%2F%2FN9Fy5shEP%2BVDr%2FEwvQMcruXHVaeZXXoqLrq%2BWDbwwBDZd5GCxvvNq1xIPEEvo2I%2BJkO%2FowY11p8a0nGgXXduywv1lw%2BmTEe5czbRDZRQwhG58l1MEZUxuW27oAG8cU2cWsjDLDBg848GKocqptarEo37TfXafW%2Bzd11%2FcoW6TEKq58ER1ugw7ebO9DQAvsCK18aZxOeaTFVH%2BEPS%2Bev7ZbypApO%2BgybcIuPKoyD0Su5nkMmSlftbfwhUTD1aUmNK%2FszyafxeMdI%2Fo8aU0uT38MpnQFzllC3%2BkbBHykLnS1%2FrCjHO9WxBqYCoR68ASsMKBYd%2Bd6mz1ugWZ62EKTtKm0q7Q3W5HnL%2BXmagDD5w2iTdNtLdAWj%2F9I%2FTgNUEsL3ynhoo540tLfuA8jNWI6SfN%2FeBOGkQU%2Bdb73xKbu%2Fs%2ByEv%2FKWAxMvOTiP6CRowY1hcNzarcPpx0MMupo8kGOqUB%2FjFWYMfyTPeJDUpiV71%2F70LdqPVEGpmhpaBE9aZvOmnNDLGeuacIcnU%2B16VUiEKvfiPmOukD5pvYzph%2B9EMD1WCd3TAr00w58v70vO5YQtaVn0g6PV9%2BaolI7kVtf8Hm8FhkVYLTCSZVk6mHVUM0XPEmtN57mABk3MeSzBtySvl8TWoW11tf1akJZ8oHhYnd%2FDWsmllJpCYBL%2F7F1fs9SgXfXE7m&X-Amz-Signature=80755d06c5c6a19aca2cfe0d63ae78e964b62f652b9c5e22140746386071845b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKXI7OBL%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgb0TBLrTmnwsVbie1qwfhSPjj0%2Fqml%2Fc7DTu266AfygIgO9NP7eQQQdBnVyjHcwNfQfyWEwX6ZxggN2VKwn3wxz0qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4R9iuMN5pdbHo0fSrcAxmP7cn1lfJc91NAUil0dNv5M%2F2cWrlddAH3YCLnNWy0Hy5gfLA4MwlyrN%2FQVfNZ5XQjmSIcdo2imBNY6Qu0XKKLFiMFFEwV%2B3fgo4unvjIMudibcAUtfWTfyzYqOdiqru2Luixh%2BV3Ow9lNIMx%2FWGlNfQ4nOge4anMpDpYM54XK4Jph9%2F%2FN9Fy5shEP%2BVDr%2FEwvQMcruXHVaeZXXoqLrq%2BWDbwwBDZd5GCxvvNq1xIPEEvo2I%2BJkO%2FowY11p8a0nGgXXduywv1lw%2BmTEe5czbRDZRQwhG58l1MEZUxuW27oAG8cU2cWsjDLDBg848GKocqptarEo37TfXafW%2Bzd11%2FcoW6TEKq58ER1ugw7ebO9DQAvsCK18aZxOeaTFVH%2BEPS%2Bev7ZbypApO%2BgybcIuPKoyD0Su5nkMmSlftbfwhUTD1aUmNK%2FszyafxeMdI%2Fo8aU0uT38MpnQFzllC3%2BkbBHykLnS1%2FrCjHO9WxBqYCoR68ASsMKBYd%2Bd6mz1ugWZ62EKTtKm0q7Q3W5HnL%2BXmagDD5w2iTdNtLdAWj%2F9I%2FTgNUEsL3ynhoo540tLfuA8jNWI6SfN%2FeBOGkQU%2Bdb73xKbu%2Fs%2ByEv%2FKWAxMvOTiP6CRowY1hcNzarcPpx0MMupo8kGOqUB%2FjFWYMfyTPeJDUpiV71%2F70LdqPVEGpmhpaBE9aZvOmnNDLGeuacIcnU%2B16VUiEKvfiPmOukD5pvYzph%2B9EMD1WCd3TAr00w58v70vO5YQtaVn0g6PV9%2BaolI7kVtf8Hm8FhkVYLTCSZVk6mHVUM0XPEmtN57mABk3MeSzBtySvl8TWoW11tf1akJZ8oHhYnd%2FDWsmllJpCYBL%2F7F1fs9SgXfXE7m&X-Amz-Signature=fa31b34b47535a21a65cc86b89b5bbfadb5c149aa9d31f4690ffe84e9a49dc31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKXI7OBL%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgb0TBLrTmnwsVbie1qwfhSPjj0%2Fqml%2Fc7DTu266AfygIgO9NP7eQQQdBnVyjHcwNfQfyWEwX6ZxggN2VKwn3wxz0qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4R9iuMN5pdbHo0fSrcAxmP7cn1lfJc91NAUil0dNv5M%2F2cWrlddAH3YCLnNWy0Hy5gfLA4MwlyrN%2FQVfNZ5XQjmSIcdo2imBNY6Qu0XKKLFiMFFEwV%2B3fgo4unvjIMudibcAUtfWTfyzYqOdiqru2Luixh%2BV3Ow9lNIMx%2FWGlNfQ4nOge4anMpDpYM54XK4Jph9%2F%2FN9Fy5shEP%2BVDr%2FEwvQMcruXHVaeZXXoqLrq%2BWDbwwBDZd5GCxvvNq1xIPEEvo2I%2BJkO%2FowY11p8a0nGgXXduywv1lw%2BmTEe5czbRDZRQwhG58l1MEZUxuW27oAG8cU2cWsjDLDBg848GKocqptarEo37TfXafW%2Bzd11%2FcoW6TEKq58ER1ugw7ebO9DQAvsCK18aZxOeaTFVH%2BEPS%2Bev7ZbypApO%2BgybcIuPKoyD0Su5nkMmSlftbfwhUTD1aUmNK%2FszyafxeMdI%2Fo8aU0uT38MpnQFzllC3%2BkbBHykLnS1%2FrCjHO9WxBqYCoR68ASsMKBYd%2Bd6mz1ugWZ62EKTtKm0q7Q3W5HnL%2BXmagDD5w2iTdNtLdAWj%2F9I%2FTgNUEsL3ynhoo540tLfuA8jNWI6SfN%2FeBOGkQU%2Bdb73xKbu%2Fs%2ByEv%2FKWAxMvOTiP6CRowY1hcNzarcPpx0MMupo8kGOqUB%2FjFWYMfyTPeJDUpiV71%2F70LdqPVEGpmhpaBE9aZvOmnNDLGeuacIcnU%2B16VUiEKvfiPmOukD5pvYzph%2B9EMD1WCd3TAr00w58v70vO5YQtaVn0g6PV9%2BaolI7kVtf8Hm8FhkVYLTCSZVk6mHVUM0XPEmtN57mABk3MeSzBtySvl8TWoW11tf1akJZ8oHhYnd%2FDWsmllJpCYBL%2F7F1fs9SgXfXE7m&X-Amz-Signature=51490d4704b8efcadedf741f7d3ff543c30b02c6e87809757ed3f00277527b39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKXI7OBL%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgb0TBLrTmnwsVbie1qwfhSPjj0%2Fqml%2Fc7DTu266AfygIgO9NP7eQQQdBnVyjHcwNfQfyWEwX6ZxggN2VKwn3wxz0qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4R9iuMN5pdbHo0fSrcAxmP7cn1lfJc91NAUil0dNv5M%2F2cWrlddAH3YCLnNWy0Hy5gfLA4MwlyrN%2FQVfNZ5XQjmSIcdo2imBNY6Qu0XKKLFiMFFEwV%2B3fgo4unvjIMudibcAUtfWTfyzYqOdiqru2Luixh%2BV3Ow9lNIMx%2FWGlNfQ4nOge4anMpDpYM54XK4Jph9%2F%2FN9Fy5shEP%2BVDr%2FEwvQMcruXHVaeZXXoqLrq%2BWDbwwBDZd5GCxvvNq1xIPEEvo2I%2BJkO%2FowY11p8a0nGgXXduywv1lw%2BmTEe5czbRDZRQwhG58l1MEZUxuW27oAG8cU2cWsjDLDBg848GKocqptarEo37TfXafW%2Bzd11%2FcoW6TEKq58ER1ugw7ebO9DQAvsCK18aZxOeaTFVH%2BEPS%2Bev7ZbypApO%2BgybcIuPKoyD0Su5nkMmSlftbfwhUTD1aUmNK%2FszyafxeMdI%2Fo8aU0uT38MpnQFzllC3%2BkbBHykLnS1%2FrCjHO9WxBqYCoR68ASsMKBYd%2Bd6mz1ugWZ62EKTtKm0q7Q3W5HnL%2BXmagDD5w2iTdNtLdAWj%2F9I%2FTgNUEsL3ynhoo540tLfuA8jNWI6SfN%2FeBOGkQU%2Bdb73xKbu%2Fs%2ByEv%2FKWAxMvOTiP6CRowY1hcNzarcPpx0MMupo8kGOqUB%2FjFWYMfyTPeJDUpiV71%2F70LdqPVEGpmhpaBE9aZvOmnNDLGeuacIcnU%2B16VUiEKvfiPmOukD5pvYzph%2B9EMD1WCd3TAr00w58v70vO5YQtaVn0g6PV9%2BaolI7kVtf8Hm8FhkVYLTCSZVk6mHVUM0XPEmtN57mABk3MeSzBtySvl8TWoW11tf1akJZ8oHhYnd%2FDWsmllJpCYBL%2F7F1fs9SgXfXE7m&X-Amz-Signature=befede5167840c7b6bb01125967a2702f90083cbbe32f90a3c1953bb139337aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKXI7OBL%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgb0TBLrTmnwsVbie1qwfhSPjj0%2Fqml%2Fc7DTu266AfygIgO9NP7eQQQdBnVyjHcwNfQfyWEwX6ZxggN2VKwn3wxz0qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4R9iuMN5pdbHo0fSrcAxmP7cn1lfJc91NAUil0dNv5M%2F2cWrlddAH3YCLnNWy0Hy5gfLA4MwlyrN%2FQVfNZ5XQjmSIcdo2imBNY6Qu0XKKLFiMFFEwV%2B3fgo4unvjIMudibcAUtfWTfyzYqOdiqru2Luixh%2BV3Ow9lNIMx%2FWGlNfQ4nOge4anMpDpYM54XK4Jph9%2F%2FN9Fy5shEP%2BVDr%2FEwvQMcruXHVaeZXXoqLrq%2BWDbwwBDZd5GCxvvNq1xIPEEvo2I%2BJkO%2FowY11p8a0nGgXXduywv1lw%2BmTEe5czbRDZRQwhG58l1MEZUxuW27oAG8cU2cWsjDLDBg848GKocqptarEo37TfXafW%2Bzd11%2FcoW6TEKq58ER1ugw7ebO9DQAvsCK18aZxOeaTFVH%2BEPS%2Bev7ZbypApO%2BgybcIuPKoyD0Su5nkMmSlftbfwhUTD1aUmNK%2FszyafxeMdI%2Fo8aU0uT38MpnQFzllC3%2BkbBHykLnS1%2FrCjHO9WxBqYCoR68ASsMKBYd%2Bd6mz1ugWZ62EKTtKm0q7Q3W5HnL%2BXmagDD5w2iTdNtLdAWj%2F9I%2FTgNUEsL3ynhoo540tLfuA8jNWI6SfN%2FeBOGkQU%2Bdb73xKbu%2Fs%2ByEv%2FKWAxMvOTiP6CRowY1hcNzarcPpx0MMupo8kGOqUB%2FjFWYMfyTPeJDUpiV71%2F70LdqPVEGpmhpaBE9aZvOmnNDLGeuacIcnU%2B16VUiEKvfiPmOukD5pvYzph%2B9EMD1WCd3TAr00w58v70vO5YQtaVn0g6PV9%2BaolI7kVtf8Hm8FhkVYLTCSZVk6mHVUM0XPEmtN57mABk3MeSzBtySvl8TWoW11tf1akJZ8oHhYnd%2FDWsmllJpCYBL%2F7F1fs9SgXfXE7m&X-Amz-Signature=a6f59f3ff967a9bddedbacb4d27e91f2e54c765248aaf051f360c5752e10d5e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKXI7OBL%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgb0TBLrTmnwsVbie1qwfhSPjj0%2Fqml%2Fc7DTu266AfygIgO9NP7eQQQdBnVyjHcwNfQfyWEwX6ZxggN2VKwn3wxz0qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4R9iuMN5pdbHo0fSrcAxmP7cn1lfJc91NAUil0dNv5M%2F2cWrlddAH3YCLnNWy0Hy5gfLA4MwlyrN%2FQVfNZ5XQjmSIcdo2imBNY6Qu0XKKLFiMFFEwV%2B3fgo4unvjIMudibcAUtfWTfyzYqOdiqru2Luixh%2BV3Ow9lNIMx%2FWGlNfQ4nOge4anMpDpYM54XK4Jph9%2F%2FN9Fy5shEP%2BVDr%2FEwvQMcruXHVaeZXXoqLrq%2BWDbwwBDZd5GCxvvNq1xIPEEvo2I%2BJkO%2FowY11p8a0nGgXXduywv1lw%2BmTEe5czbRDZRQwhG58l1MEZUxuW27oAG8cU2cWsjDLDBg848GKocqptarEo37TfXafW%2Bzd11%2FcoW6TEKq58ER1ugw7ebO9DQAvsCK18aZxOeaTFVH%2BEPS%2Bev7ZbypApO%2BgybcIuPKoyD0Su5nkMmSlftbfwhUTD1aUmNK%2FszyafxeMdI%2Fo8aU0uT38MpnQFzllC3%2BkbBHykLnS1%2FrCjHO9WxBqYCoR68ASsMKBYd%2Bd6mz1ugWZ62EKTtKm0q7Q3W5HnL%2BXmagDD5w2iTdNtLdAWj%2F9I%2FTgNUEsL3ynhoo540tLfuA8jNWI6SfN%2FeBOGkQU%2Bdb73xKbu%2Fs%2ByEv%2FKWAxMvOTiP6CRowY1hcNzarcPpx0MMupo8kGOqUB%2FjFWYMfyTPeJDUpiV71%2F70LdqPVEGpmhpaBE9aZvOmnNDLGeuacIcnU%2B16VUiEKvfiPmOukD5pvYzph%2B9EMD1WCd3TAr00w58v70vO5YQtaVn0g6PV9%2BaolI7kVtf8Hm8FhkVYLTCSZVk6mHVUM0XPEmtN57mABk3MeSzBtySvl8TWoW11tf1akJZ8oHhYnd%2FDWsmllJpCYBL%2F7F1fs9SgXfXE7m&X-Amz-Signature=db2e76ce0e75baad5383a8a77e711582a5234fa8b9750afcc05646dd4f2151c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKXI7OBL%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgb0TBLrTmnwsVbie1qwfhSPjj0%2Fqml%2Fc7DTu266AfygIgO9NP7eQQQdBnVyjHcwNfQfyWEwX6ZxggN2VKwn3wxz0qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4R9iuMN5pdbHo0fSrcAxmP7cn1lfJc91NAUil0dNv5M%2F2cWrlddAH3YCLnNWy0Hy5gfLA4MwlyrN%2FQVfNZ5XQjmSIcdo2imBNY6Qu0XKKLFiMFFEwV%2B3fgo4unvjIMudibcAUtfWTfyzYqOdiqru2Luixh%2BV3Ow9lNIMx%2FWGlNfQ4nOge4anMpDpYM54XK4Jph9%2F%2FN9Fy5shEP%2BVDr%2FEwvQMcruXHVaeZXXoqLrq%2BWDbwwBDZd5GCxvvNq1xIPEEvo2I%2BJkO%2FowY11p8a0nGgXXduywv1lw%2BmTEe5czbRDZRQwhG58l1MEZUxuW27oAG8cU2cWsjDLDBg848GKocqptarEo37TfXafW%2Bzd11%2FcoW6TEKq58ER1ugw7ebO9DQAvsCK18aZxOeaTFVH%2BEPS%2Bev7ZbypApO%2BgybcIuPKoyD0Su5nkMmSlftbfwhUTD1aUmNK%2FszyafxeMdI%2Fo8aU0uT38MpnQFzllC3%2BkbBHykLnS1%2FrCjHO9WxBqYCoR68ASsMKBYd%2Bd6mz1ugWZ62EKTtKm0q7Q3W5HnL%2BXmagDD5w2iTdNtLdAWj%2F9I%2FTgNUEsL3ynhoo540tLfuA8jNWI6SfN%2FeBOGkQU%2Bdb73xKbu%2Fs%2ByEv%2FKWAxMvOTiP6CRowY1hcNzarcPpx0MMupo8kGOqUB%2FjFWYMfyTPeJDUpiV71%2F70LdqPVEGpmhpaBE9aZvOmnNDLGeuacIcnU%2B16VUiEKvfiPmOukD5pvYzph%2B9EMD1WCd3TAr00w58v70vO5YQtaVn0g6PV9%2BaolI7kVtf8Hm8FhkVYLTCSZVk6mHVUM0XPEmtN57mABk3MeSzBtySvl8TWoW11tf1akJZ8oHhYnd%2FDWsmllJpCYBL%2F7F1fs9SgXfXE7m&X-Amz-Signature=55519a1430ca540efce904da07b0ceb53e8bbe48d3467249df4ba5035dcf66e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKXI7OBL%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgb0TBLrTmnwsVbie1qwfhSPjj0%2Fqml%2Fc7DTu266AfygIgO9NP7eQQQdBnVyjHcwNfQfyWEwX6ZxggN2VKwn3wxz0qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4R9iuMN5pdbHo0fSrcAxmP7cn1lfJc91NAUil0dNv5M%2F2cWrlddAH3YCLnNWy0Hy5gfLA4MwlyrN%2FQVfNZ5XQjmSIcdo2imBNY6Qu0XKKLFiMFFEwV%2B3fgo4unvjIMudibcAUtfWTfyzYqOdiqru2Luixh%2BV3Ow9lNIMx%2FWGlNfQ4nOge4anMpDpYM54XK4Jph9%2F%2FN9Fy5shEP%2BVDr%2FEwvQMcruXHVaeZXXoqLrq%2BWDbwwBDZd5GCxvvNq1xIPEEvo2I%2BJkO%2FowY11p8a0nGgXXduywv1lw%2BmTEe5czbRDZRQwhG58l1MEZUxuW27oAG8cU2cWsjDLDBg848GKocqptarEo37TfXafW%2Bzd11%2FcoW6TEKq58ER1ugw7ebO9DQAvsCK18aZxOeaTFVH%2BEPS%2Bev7ZbypApO%2BgybcIuPKoyD0Su5nkMmSlftbfwhUTD1aUmNK%2FszyafxeMdI%2Fo8aU0uT38MpnQFzllC3%2BkbBHykLnS1%2FrCjHO9WxBqYCoR68ASsMKBYd%2Bd6mz1ugWZ62EKTtKm0q7Q3W5HnL%2BXmagDD5w2iTdNtLdAWj%2F9I%2FTgNUEsL3ynhoo540tLfuA8jNWI6SfN%2FeBOGkQU%2Bdb73xKbu%2Fs%2ByEv%2FKWAxMvOTiP6CRowY1hcNzarcPpx0MMupo8kGOqUB%2FjFWYMfyTPeJDUpiV71%2F70LdqPVEGpmhpaBE9aZvOmnNDLGeuacIcnU%2B16VUiEKvfiPmOukD5pvYzph%2B9EMD1WCd3TAr00w58v70vO5YQtaVn0g6PV9%2BaolI7kVtf8Hm8FhkVYLTCSZVk6mHVUM0XPEmtN57mABk3MeSzBtySvl8TWoW11tf1akJZ8oHhYnd%2FDWsmllJpCYBL%2F7F1fs9SgXfXE7m&X-Amz-Signature=274af6459609c6c4992f0c672cb9be2f5283c76634f80e87ef7ebf352f699345&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKXI7OBL%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgb0TBLrTmnwsVbie1qwfhSPjj0%2Fqml%2Fc7DTu266AfygIgO9NP7eQQQdBnVyjHcwNfQfyWEwX6ZxggN2VKwn3wxz0qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4R9iuMN5pdbHo0fSrcAxmP7cn1lfJc91NAUil0dNv5M%2F2cWrlddAH3YCLnNWy0Hy5gfLA4MwlyrN%2FQVfNZ5XQjmSIcdo2imBNY6Qu0XKKLFiMFFEwV%2B3fgo4unvjIMudibcAUtfWTfyzYqOdiqru2Luixh%2BV3Ow9lNIMx%2FWGlNfQ4nOge4anMpDpYM54XK4Jph9%2F%2FN9Fy5shEP%2BVDr%2FEwvQMcruXHVaeZXXoqLrq%2BWDbwwBDZd5GCxvvNq1xIPEEvo2I%2BJkO%2FowY11p8a0nGgXXduywv1lw%2BmTEe5czbRDZRQwhG58l1MEZUxuW27oAG8cU2cWsjDLDBg848GKocqptarEo37TfXafW%2Bzd11%2FcoW6TEKq58ER1ugw7ebO9DQAvsCK18aZxOeaTFVH%2BEPS%2Bev7ZbypApO%2BgybcIuPKoyD0Su5nkMmSlftbfwhUTD1aUmNK%2FszyafxeMdI%2Fo8aU0uT38MpnQFzllC3%2BkbBHykLnS1%2FrCjHO9WxBqYCoR68ASsMKBYd%2Bd6mz1ugWZ62EKTtKm0q7Q3W5HnL%2BXmagDD5w2iTdNtLdAWj%2F9I%2FTgNUEsL3ynhoo540tLfuA8jNWI6SfN%2FeBOGkQU%2Bdb73xKbu%2Fs%2ByEv%2FKWAxMvOTiP6CRowY1hcNzarcPpx0MMupo8kGOqUB%2FjFWYMfyTPeJDUpiV71%2F70LdqPVEGpmhpaBE9aZvOmnNDLGeuacIcnU%2B16VUiEKvfiPmOukD5pvYzph%2B9EMD1WCd3TAr00w58v70vO5YQtaVn0g6PV9%2BaolI7kVtf8Hm8FhkVYLTCSZVk6mHVUM0XPEmtN57mABk3MeSzBtySvl8TWoW11tf1akJZ8oHhYnd%2FDWsmllJpCYBL%2F7F1fs9SgXfXE7m&X-Amz-Signature=a787c6c048a9d866ddf3b28f9470fe3a6b7f5596637acb7595604d9abf053785&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
