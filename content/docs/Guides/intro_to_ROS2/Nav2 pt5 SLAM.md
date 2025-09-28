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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6H7ZF4C%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCmYDAQ9xlKuRKjYqQVVDTdZ2LF0eg%2BRHGWTFav4C%2FmmgIgBZbUO3yXQ4lZCBfcl0fKDVwj2g1YNJaHniIEKxgk0gMqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMzIe2xChpxev2zPircA6SyvOxPoGxsrjD3cS56v5sliZy18N6BEwn8x4LfDmDpNTkvNBYViTyKm0F%2BGjbW3aXyz1ZnUB2fsbvWTZF5uuP%2BjrmjN9KQYy%2B9RJH8BO0YtVrODdDqYwDE%2F%2F%2BpE6K7Y%2BvXdj5hzNuITS7RmwU6hNaZW1Ml7BwwKq8utPEvtOFI8bsaY3O%2Fe9R5%2BpN1iygg0jtE4TixL%2FpjdGPdn8ZAtczPspwje7f7qdnQcZogIc0btH4hLbqV8poVeJTMtDb2zali6NO2VJqHcqZiB5Qa%2F%2BavXgoml4YnfHjqIUMsGnp746Fl%2BOQREfklXy6lSf9MdrRxYsMIoJ5sK97ce9jv%2B%2Fcg27T7edRISOjjKRJagyX3IlPjq1%2FZz8kXZfUEC6WAq0XYSUmMvSmOy%2BjMe2EgeWQno9u5tYRnED8QRQpIiZvMtSvAf8YPjHigiX40c%2FpLW5Cz3KtufrkSGhaGniUnUdnpOFoiMoN8EFUGxlYYWqA4pQGkhrtKaGYpXfwCT95HdnGd3OumdK%2BFggkPOZ5F6Nwvo%2FZe45pScSZl3vAISByKjvamyWKGY%2B24SMiqg4nygIEZiMTmuJ%2FdfRzo3C0AWk1vI6Xxw316JLf3MrQ1rngWvmv8hmQWuRePznelMKy%2F4cYGOqUBclE%2F3RmPg%2BJZFhYMwf8EdxcQzIXfg%2Fr7Rl%2F0ZmVqy%2BpUazWbgnljJM6KfvTd%2FUrq9WE3hdgVWXldy2aLbmcQlWg2XL71ndQKG%2BfitCe%2FnDEkoZwhGnuOGoNHbjOIilkMegb2EGfQknHdGXScg%2BKtWsN5a4qeFQF1bhCoJf4kwu6%2BjcfH06twoKGyf2ZQ8juozC0DiUwqQfYL9VdpWxcw1Uv%2FSHme&X-Amz-Signature=08180128d6e9c5e5c0c4a0a6e39bcc901bf0ea95e78323260c340396e8526030&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6H7ZF4C%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCmYDAQ9xlKuRKjYqQVVDTdZ2LF0eg%2BRHGWTFav4C%2FmmgIgBZbUO3yXQ4lZCBfcl0fKDVwj2g1YNJaHniIEKxgk0gMqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMzIe2xChpxev2zPircA6SyvOxPoGxsrjD3cS56v5sliZy18N6BEwn8x4LfDmDpNTkvNBYViTyKm0F%2BGjbW3aXyz1ZnUB2fsbvWTZF5uuP%2BjrmjN9KQYy%2B9RJH8BO0YtVrODdDqYwDE%2F%2F%2BpE6K7Y%2BvXdj5hzNuITS7RmwU6hNaZW1Ml7BwwKq8utPEvtOFI8bsaY3O%2Fe9R5%2BpN1iygg0jtE4TixL%2FpjdGPdn8ZAtczPspwje7f7qdnQcZogIc0btH4hLbqV8poVeJTMtDb2zali6NO2VJqHcqZiB5Qa%2F%2BavXgoml4YnfHjqIUMsGnp746Fl%2BOQREfklXy6lSf9MdrRxYsMIoJ5sK97ce9jv%2B%2Fcg27T7edRISOjjKRJagyX3IlPjq1%2FZz8kXZfUEC6WAq0XYSUmMvSmOy%2BjMe2EgeWQno9u5tYRnED8QRQpIiZvMtSvAf8YPjHigiX40c%2FpLW5Cz3KtufrkSGhaGniUnUdnpOFoiMoN8EFUGxlYYWqA4pQGkhrtKaGYpXfwCT95HdnGd3OumdK%2BFggkPOZ5F6Nwvo%2FZe45pScSZl3vAISByKjvamyWKGY%2B24SMiqg4nygIEZiMTmuJ%2FdfRzo3C0AWk1vI6Xxw316JLf3MrQ1rngWvmv8hmQWuRePznelMKy%2F4cYGOqUBclE%2F3RmPg%2BJZFhYMwf8EdxcQzIXfg%2Fr7Rl%2F0ZmVqy%2BpUazWbgnljJM6KfvTd%2FUrq9WE3hdgVWXldy2aLbmcQlWg2XL71ndQKG%2BfitCe%2FnDEkoZwhGnuOGoNHbjOIilkMegb2EGfQknHdGXScg%2BKtWsN5a4qeFQF1bhCoJf4kwu6%2BjcfH06twoKGyf2ZQ8juozC0DiUwqQfYL9VdpWxcw1Uv%2FSHme&X-Amz-Signature=c5ced88b1728ba1837ae963886f7e849e72a960150042d1810b1172f6b6d97d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6H7ZF4C%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCmYDAQ9xlKuRKjYqQVVDTdZ2LF0eg%2BRHGWTFav4C%2FmmgIgBZbUO3yXQ4lZCBfcl0fKDVwj2g1YNJaHniIEKxgk0gMqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMzIe2xChpxev2zPircA6SyvOxPoGxsrjD3cS56v5sliZy18N6BEwn8x4LfDmDpNTkvNBYViTyKm0F%2BGjbW3aXyz1ZnUB2fsbvWTZF5uuP%2BjrmjN9KQYy%2B9RJH8BO0YtVrODdDqYwDE%2F%2F%2BpE6K7Y%2BvXdj5hzNuITS7RmwU6hNaZW1Ml7BwwKq8utPEvtOFI8bsaY3O%2Fe9R5%2BpN1iygg0jtE4TixL%2FpjdGPdn8ZAtczPspwje7f7qdnQcZogIc0btH4hLbqV8poVeJTMtDb2zali6NO2VJqHcqZiB5Qa%2F%2BavXgoml4YnfHjqIUMsGnp746Fl%2BOQREfklXy6lSf9MdrRxYsMIoJ5sK97ce9jv%2B%2Fcg27T7edRISOjjKRJagyX3IlPjq1%2FZz8kXZfUEC6WAq0XYSUmMvSmOy%2BjMe2EgeWQno9u5tYRnED8QRQpIiZvMtSvAf8YPjHigiX40c%2FpLW5Cz3KtufrkSGhaGniUnUdnpOFoiMoN8EFUGxlYYWqA4pQGkhrtKaGYpXfwCT95HdnGd3OumdK%2BFggkPOZ5F6Nwvo%2FZe45pScSZl3vAISByKjvamyWKGY%2B24SMiqg4nygIEZiMTmuJ%2FdfRzo3C0AWk1vI6Xxw316JLf3MrQ1rngWvmv8hmQWuRePznelMKy%2F4cYGOqUBclE%2F3RmPg%2BJZFhYMwf8EdxcQzIXfg%2Fr7Rl%2F0ZmVqy%2BpUazWbgnljJM6KfvTd%2FUrq9WE3hdgVWXldy2aLbmcQlWg2XL71ndQKG%2BfitCe%2FnDEkoZwhGnuOGoNHbjOIilkMegb2EGfQknHdGXScg%2BKtWsN5a4qeFQF1bhCoJf4kwu6%2BjcfH06twoKGyf2ZQ8juozC0DiUwqQfYL9VdpWxcw1Uv%2FSHme&X-Amz-Signature=3f690eef7f1e6c705c389a1f0aa437bb7064bcd0f19169ead97ad0ac42c2c262&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6H7ZF4C%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCmYDAQ9xlKuRKjYqQVVDTdZ2LF0eg%2BRHGWTFav4C%2FmmgIgBZbUO3yXQ4lZCBfcl0fKDVwj2g1YNJaHniIEKxgk0gMqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMzIe2xChpxev2zPircA6SyvOxPoGxsrjD3cS56v5sliZy18N6BEwn8x4LfDmDpNTkvNBYViTyKm0F%2BGjbW3aXyz1ZnUB2fsbvWTZF5uuP%2BjrmjN9KQYy%2B9RJH8BO0YtVrODdDqYwDE%2F%2F%2BpE6K7Y%2BvXdj5hzNuITS7RmwU6hNaZW1Ml7BwwKq8utPEvtOFI8bsaY3O%2Fe9R5%2BpN1iygg0jtE4TixL%2FpjdGPdn8ZAtczPspwje7f7qdnQcZogIc0btH4hLbqV8poVeJTMtDb2zali6NO2VJqHcqZiB5Qa%2F%2BavXgoml4YnfHjqIUMsGnp746Fl%2BOQREfklXy6lSf9MdrRxYsMIoJ5sK97ce9jv%2B%2Fcg27T7edRISOjjKRJagyX3IlPjq1%2FZz8kXZfUEC6WAq0XYSUmMvSmOy%2BjMe2EgeWQno9u5tYRnED8QRQpIiZvMtSvAf8YPjHigiX40c%2FpLW5Cz3KtufrkSGhaGniUnUdnpOFoiMoN8EFUGxlYYWqA4pQGkhrtKaGYpXfwCT95HdnGd3OumdK%2BFggkPOZ5F6Nwvo%2FZe45pScSZl3vAISByKjvamyWKGY%2B24SMiqg4nygIEZiMTmuJ%2FdfRzo3C0AWk1vI6Xxw316JLf3MrQ1rngWvmv8hmQWuRePznelMKy%2F4cYGOqUBclE%2F3RmPg%2BJZFhYMwf8EdxcQzIXfg%2Fr7Rl%2F0ZmVqy%2BpUazWbgnljJM6KfvTd%2FUrq9WE3hdgVWXldy2aLbmcQlWg2XL71ndQKG%2BfitCe%2FnDEkoZwhGnuOGoNHbjOIilkMegb2EGfQknHdGXScg%2BKtWsN5a4qeFQF1bhCoJf4kwu6%2BjcfH06twoKGyf2ZQ8juozC0DiUwqQfYL9VdpWxcw1Uv%2FSHme&X-Amz-Signature=0ec85a4657039caea99bbaef99394a02de036f17d431471deead6aa13776fef0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6H7ZF4C%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCmYDAQ9xlKuRKjYqQVVDTdZ2LF0eg%2BRHGWTFav4C%2FmmgIgBZbUO3yXQ4lZCBfcl0fKDVwj2g1YNJaHniIEKxgk0gMqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMzIe2xChpxev2zPircA6SyvOxPoGxsrjD3cS56v5sliZy18N6BEwn8x4LfDmDpNTkvNBYViTyKm0F%2BGjbW3aXyz1ZnUB2fsbvWTZF5uuP%2BjrmjN9KQYy%2B9RJH8BO0YtVrODdDqYwDE%2F%2F%2BpE6K7Y%2BvXdj5hzNuITS7RmwU6hNaZW1Ml7BwwKq8utPEvtOFI8bsaY3O%2Fe9R5%2BpN1iygg0jtE4TixL%2FpjdGPdn8ZAtczPspwje7f7qdnQcZogIc0btH4hLbqV8poVeJTMtDb2zali6NO2VJqHcqZiB5Qa%2F%2BavXgoml4YnfHjqIUMsGnp746Fl%2BOQREfklXy6lSf9MdrRxYsMIoJ5sK97ce9jv%2B%2Fcg27T7edRISOjjKRJagyX3IlPjq1%2FZz8kXZfUEC6WAq0XYSUmMvSmOy%2BjMe2EgeWQno9u5tYRnED8QRQpIiZvMtSvAf8YPjHigiX40c%2FpLW5Cz3KtufrkSGhaGniUnUdnpOFoiMoN8EFUGxlYYWqA4pQGkhrtKaGYpXfwCT95HdnGd3OumdK%2BFggkPOZ5F6Nwvo%2FZe45pScSZl3vAISByKjvamyWKGY%2B24SMiqg4nygIEZiMTmuJ%2FdfRzo3C0AWk1vI6Xxw316JLf3MrQ1rngWvmv8hmQWuRePznelMKy%2F4cYGOqUBclE%2F3RmPg%2BJZFhYMwf8EdxcQzIXfg%2Fr7Rl%2F0ZmVqy%2BpUazWbgnljJM6KfvTd%2FUrq9WE3hdgVWXldy2aLbmcQlWg2XL71ndQKG%2BfitCe%2FnDEkoZwhGnuOGoNHbjOIilkMegb2EGfQknHdGXScg%2BKtWsN5a4qeFQF1bhCoJf4kwu6%2BjcfH06twoKGyf2ZQ8juozC0DiUwqQfYL9VdpWxcw1Uv%2FSHme&X-Amz-Signature=8f6eeba35133810a355df0fd7de134ef16ec03371626c9e297f033fedd50b7df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6H7ZF4C%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCmYDAQ9xlKuRKjYqQVVDTdZ2LF0eg%2BRHGWTFav4C%2FmmgIgBZbUO3yXQ4lZCBfcl0fKDVwj2g1YNJaHniIEKxgk0gMqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMzIe2xChpxev2zPircA6SyvOxPoGxsrjD3cS56v5sliZy18N6BEwn8x4LfDmDpNTkvNBYViTyKm0F%2BGjbW3aXyz1ZnUB2fsbvWTZF5uuP%2BjrmjN9KQYy%2B9RJH8BO0YtVrODdDqYwDE%2F%2F%2BpE6K7Y%2BvXdj5hzNuITS7RmwU6hNaZW1Ml7BwwKq8utPEvtOFI8bsaY3O%2Fe9R5%2BpN1iygg0jtE4TixL%2FpjdGPdn8ZAtczPspwje7f7qdnQcZogIc0btH4hLbqV8poVeJTMtDb2zali6NO2VJqHcqZiB5Qa%2F%2BavXgoml4YnfHjqIUMsGnp746Fl%2BOQREfklXy6lSf9MdrRxYsMIoJ5sK97ce9jv%2B%2Fcg27T7edRISOjjKRJagyX3IlPjq1%2FZz8kXZfUEC6WAq0XYSUmMvSmOy%2BjMe2EgeWQno9u5tYRnED8QRQpIiZvMtSvAf8YPjHigiX40c%2FpLW5Cz3KtufrkSGhaGniUnUdnpOFoiMoN8EFUGxlYYWqA4pQGkhrtKaGYpXfwCT95HdnGd3OumdK%2BFggkPOZ5F6Nwvo%2FZe45pScSZl3vAISByKjvamyWKGY%2B24SMiqg4nygIEZiMTmuJ%2FdfRzo3C0AWk1vI6Xxw316JLf3MrQ1rngWvmv8hmQWuRePznelMKy%2F4cYGOqUBclE%2F3RmPg%2BJZFhYMwf8EdxcQzIXfg%2Fr7Rl%2F0ZmVqy%2BpUazWbgnljJM6KfvTd%2FUrq9WE3hdgVWXldy2aLbmcQlWg2XL71ndQKG%2BfitCe%2FnDEkoZwhGnuOGoNHbjOIilkMegb2EGfQknHdGXScg%2BKtWsN5a4qeFQF1bhCoJf4kwu6%2BjcfH06twoKGyf2ZQ8juozC0DiUwqQfYL9VdpWxcw1Uv%2FSHme&X-Amz-Signature=7266ea7b9ae7650cd15f2dd309c665c4f3970e5a42263ccb72494a1911190cda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6H7ZF4C%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCmYDAQ9xlKuRKjYqQVVDTdZ2LF0eg%2BRHGWTFav4C%2FmmgIgBZbUO3yXQ4lZCBfcl0fKDVwj2g1YNJaHniIEKxgk0gMqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMzIe2xChpxev2zPircA6SyvOxPoGxsrjD3cS56v5sliZy18N6BEwn8x4LfDmDpNTkvNBYViTyKm0F%2BGjbW3aXyz1ZnUB2fsbvWTZF5uuP%2BjrmjN9KQYy%2B9RJH8BO0YtVrODdDqYwDE%2F%2F%2BpE6K7Y%2BvXdj5hzNuITS7RmwU6hNaZW1Ml7BwwKq8utPEvtOFI8bsaY3O%2Fe9R5%2BpN1iygg0jtE4TixL%2FpjdGPdn8ZAtczPspwje7f7qdnQcZogIc0btH4hLbqV8poVeJTMtDb2zali6NO2VJqHcqZiB5Qa%2F%2BavXgoml4YnfHjqIUMsGnp746Fl%2BOQREfklXy6lSf9MdrRxYsMIoJ5sK97ce9jv%2B%2Fcg27T7edRISOjjKRJagyX3IlPjq1%2FZz8kXZfUEC6WAq0XYSUmMvSmOy%2BjMe2EgeWQno9u5tYRnED8QRQpIiZvMtSvAf8YPjHigiX40c%2FpLW5Cz3KtufrkSGhaGniUnUdnpOFoiMoN8EFUGxlYYWqA4pQGkhrtKaGYpXfwCT95HdnGd3OumdK%2BFggkPOZ5F6Nwvo%2FZe45pScSZl3vAISByKjvamyWKGY%2B24SMiqg4nygIEZiMTmuJ%2FdfRzo3C0AWk1vI6Xxw316JLf3MrQ1rngWvmv8hmQWuRePznelMKy%2F4cYGOqUBclE%2F3RmPg%2BJZFhYMwf8EdxcQzIXfg%2Fr7Rl%2F0ZmVqy%2BpUazWbgnljJM6KfvTd%2FUrq9WE3hdgVWXldy2aLbmcQlWg2XL71ndQKG%2BfitCe%2FnDEkoZwhGnuOGoNHbjOIilkMegb2EGfQknHdGXScg%2BKtWsN5a4qeFQF1bhCoJf4kwu6%2BjcfH06twoKGyf2ZQ8juozC0DiUwqQfYL9VdpWxcw1Uv%2FSHme&X-Amz-Signature=c9c77362795ea34885b84dd0dd90ed31d1c897a3fed315f3b18f473a5aa587b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6H7ZF4C%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCmYDAQ9xlKuRKjYqQVVDTdZ2LF0eg%2BRHGWTFav4C%2FmmgIgBZbUO3yXQ4lZCBfcl0fKDVwj2g1YNJaHniIEKxgk0gMqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMzIe2xChpxev2zPircA6SyvOxPoGxsrjD3cS56v5sliZy18N6BEwn8x4LfDmDpNTkvNBYViTyKm0F%2BGjbW3aXyz1ZnUB2fsbvWTZF5uuP%2BjrmjN9KQYy%2B9RJH8BO0YtVrODdDqYwDE%2F%2F%2BpE6K7Y%2BvXdj5hzNuITS7RmwU6hNaZW1Ml7BwwKq8utPEvtOFI8bsaY3O%2Fe9R5%2BpN1iygg0jtE4TixL%2FpjdGPdn8ZAtczPspwje7f7qdnQcZogIc0btH4hLbqV8poVeJTMtDb2zali6NO2VJqHcqZiB5Qa%2F%2BavXgoml4YnfHjqIUMsGnp746Fl%2BOQREfklXy6lSf9MdrRxYsMIoJ5sK97ce9jv%2B%2Fcg27T7edRISOjjKRJagyX3IlPjq1%2FZz8kXZfUEC6WAq0XYSUmMvSmOy%2BjMe2EgeWQno9u5tYRnED8QRQpIiZvMtSvAf8YPjHigiX40c%2FpLW5Cz3KtufrkSGhaGniUnUdnpOFoiMoN8EFUGxlYYWqA4pQGkhrtKaGYpXfwCT95HdnGd3OumdK%2BFggkPOZ5F6Nwvo%2FZe45pScSZl3vAISByKjvamyWKGY%2B24SMiqg4nygIEZiMTmuJ%2FdfRzo3C0AWk1vI6Xxw316JLf3MrQ1rngWvmv8hmQWuRePznelMKy%2F4cYGOqUBclE%2F3RmPg%2BJZFhYMwf8EdxcQzIXfg%2Fr7Rl%2F0ZmVqy%2BpUazWbgnljJM6KfvTd%2FUrq9WE3hdgVWXldy2aLbmcQlWg2XL71ndQKG%2BfitCe%2FnDEkoZwhGnuOGoNHbjOIilkMegb2EGfQknHdGXScg%2BKtWsN5a4qeFQF1bhCoJf4kwu6%2BjcfH06twoKGyf2ZQ8juozC0DiUwqQfYL9VdpWxcw1Uv%2FSHme&X-Amz-Signature=5afd1a41e07b6be348da7b86a7f2cdc79fa7df0f28e6de6de27966596a4eae09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6H7ZF4C%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCmYDAQ9xlKuRKjYqQVVDTdZ2LF0eg%2BRHGWTFav4C%2FmmgIgBZbUO3yXQ4lZCBfcl0fKDVwj2g1YNJaHniIEKxgk0gMqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMzIe2xChpxev2zPircA6SyvOxPoGxsrjD3cS56v5sliZy18N6BEwn8x4LfDmDpNTkvNBYViTyKm0F%2BGjbW3aXyz1ZnUB2fsbvWTZF5uuP%2BjrmjN9KQYy%2B9RJH8BO0YtVrODdDqYwDE%2F%2F%2BpE6K7Y%2BvXdj5hzNuITS7RmwU6hNaZW1Ml7BwwKq8utPEvtOFI8bsaY3O%2Fe9R5%2BpN1iygg0jtE4TixL%2FpjdGPdn8ZAtczPspwje7f7qdnQcZogIc0btH4hLbqV8poVeJTMtDb2zali6NO2VJqHcqZiB5Qa%2F%2BavXgoml4YnfHjqIUMsGnp746Fl%2BOQREfklXy6lSf9MdrRxYsMIoJ5sK97ce9jv%2B%2Fcg27T7edRISOjjKRJagyX3IlPjq1%2FZz8kXZfUEC6WAq0XYSUmMvSmOy%2BjMe2EgeWQno9u5tYRnED8QRQpIiZvMtSvAf8YPjHigiX40c%2FpLW5Cz3KtufrkSGhaGniUnUdnpOFoiMoN8EFUGxlYYWqA4pQGkhrtKaGYpXfwCT95HdnGd3OumdK%2BFggkPOZ5F6Nwvo%2FZe45pScSZl3vAISByKjvamyWKGY%2B24SMiqg4nygIEZiMTmuJ%2FdfRzo3C0AWk1vI6Xxw316JLf3MrQ1rngWvmv8hmQWuRePznelMKy%2F4cYGOqUBclE%2F3RmPg%2BJZFhYMwf8EdxcQzIXfg%2Fr7Rl%2F0ZmVqy%2BpUazWbgnljJM6KfvTd%2FUrq9WE3hdgVWXldy2aLbmcQlWg2XL71ndQKG%2BfitCe%2FnDEkoZwhGnuOGoNHbjOIilkMegb2EGfQknHdGXScg%2BKtWsN5a4qeFQF1bhCoJf4kwu6%2BjcfH06twoKGyf2ZQ8juozC0DiUwqQfYL9VdpWxcw1Uv%2FSHme&X-Amz-Signature=bea52e30552cb98adc09165c9a6e1f33dc4ceb74faa694350d91f2477919b298&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6H7ZF4C%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCmYDAQ9xlKuRKjYqQVVDTdZ2LF0eg%2BRHGWTFav4C%2FmmgIgBZbUO3yXQ4lZCBfcl0fKDVwj2g1YNJaHniIEKxgk0gMqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMzIe2xChpxev2zPircA6SyvOxPoGxsrjD3cS56v5sliZy18N6BEwn8x4LfDmDpNTkvNBYViTyKm0F%2BGjbW3aXyz1ZnUB2fsbvWTZF5uuP%2BjrmjN9KQYy%2B9RJH8BO0YtVrODdDqYwDE%2F%2F%2BpE6K7Y%2BvXdj5hzNuITS7RmwU6hNaZW1Ml7BwwKq8utPEvtOFI8bsaY3O%2Fe9R5%2BpN1iygg0jtE4TixL%2FpjdGPdn8ZAtczPspwje7f7qdnQcZogIc0btH4hLbqV8poVeJTMtDb2zali6NO2VJqHcqZiB5Qa%2F%2BavXgoml4YnfHjqIUMsGnp746Fl%2BOQREfklXy6lSf9MdrRxYsMIoJ5sK97ce9jv%2B%2Fcg27T7edRISOjjKRJagyX3IlPjq1%2FZz8kXZfUEC6WAq0XYSUmMvSmOy%2BjMe2EgeWQno9u5tYRnED8QRQpIiZvMtSvAf8YPjHigiX40c%2FpLW5Cz3KtufrkSGhaGniUnUdnpOFoiMoN8EFUGxlYYWqA4pQGkhrtKaGYpXfwCT95HdnGd3OumdK%2BFggkPOZ5F6Nwvo%2FZe45pScSZl3vAISByKjvamyWKGY%2B24SMiqg4nygIEZiMTmuJ%2FdfRzo3C0AWk1vI6Xxw316JLf3MrQ1rngWvmv8hmQWuRePznelMKy%2F4cYGOqUBclE%2F3RmPg%2BJZFhYMwf8EdxcQzIXfg%2Fr7Rl%2F0ZmVqy%2BpUazWbgnljJM6KfvTd%2FUrq9WE3hdgVWXldy2aLbmcQlWg2XL71ndQKG%2BfitCe%2FnDEkoZwhGnuOGoNHbjOIilkMegb2EGfQknHdGXScg%2BKtWsN5a4qeFQF1bhCoJf4kwu6%2BjcfH06twoKGyf2ZQ8juozC0DiUwqQfYL9VdpWxcw1Uv%2FSHme&X-Amz-Signature=056dbded57dc2bdd96528af91c0badafe11ad77f1aea1798b6ddceb6aa7ca8dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6H7ZF4C%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCmYDAQ9xlKuRKjYqQVVDTdZ2LF0eg%2BRHGWTFav4C%2FmmgIgBZbUO3yXQ4lZCBfcl0fKDVwj2g1YNJaHniIEKxgk0gMqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMzIe2xChpxev2zPircA6SyvOxPoGxsrjD3cS56v5sliZy18N6BEwn8x4LfDmDpNTkvNBYViTyKm0F%2BGjbW3aXyz1ZnUB2fsbvWTZF5uuP%2BjrmjN9KQYy%2B9RJH8BO0YtVrODdDqYwDE%2F%2F%2BpE6K7Y%2BvXdj5hzNuITS7RmwU6hNaZW1Ml7BwwKq8utPEvtOFI8bsaY3O%2Fe9R5%2BpN1iygg0jtE4TixL%2FpjdGPdn8ZAtczPspwje7f7qdnQcZogIc0btH4hLbqV8poVeJTMtDb2zali6NO2VJqHcqZiB5Qa%2F%2BavXgoml4YnfHjqIUMsGnp746Fl%2BOQREfklXy6lSf9MdrRxYsMIoJ5sK97ce9jv%2B%2Fcg27T7edRISOjjKRJagyX3IlPjq1%2FZz8kXZfUEC6WAq0XYSUmMvSmOy%2BjMe2EgeWQno9u5tYRnED8QRQpIiZvMtSvAf8YPjHigiX40c%2FpLW5Cz3KtufrkSGhaGniUnUdnpOFoiMoN8EFUGxlYYWqA4pQGkhrtKaGYpXfwCT95HdnGd3OumdK%2BFggkPOZ5F6Nwvo%2FZe45pScSZl3vAISByKjvamyWKGY%2B24SMiqg4nygIEZiMTmuJ%2FdfRzo3C0AWk1vI6Xxw316JLf3MrQ1rngWvmv8hmQWuRePznelMKy%2F4cYGOqUBclE%2F3RmPg%2BJZFhYMwf8EdxcQzIXfg%2Fr7Rl%2F0ZmVqy%2BpUazWbgnljJM6KfvTd%2FUrq9WE3hdgVWXldy2aLbmcQlWg2XL71ndQKG%2BfitCe%2FnDEkoZwhGnuOGoNHbjOIilkMegb2EGfQknHdGXScg%2BKtWsN5a4qeFQF1bhCoJf4kwu6%2BjcfH06twoKGyf2ZQ8juozC0DiUwqQfYL9VdpWxcw1Uv%2FSHme&X-Amz-Signature=281283392fc137667fba4966ad42021b553bde4d9bf3951948291ef66ba147e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6H7ZF4C%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCmYDAQ9xlKuRKjYqQVVDTdZ2LF0eg%2BRHGWTFav4C%2FmmgIgBZbUO3yXQ4lZCBfcl0fKDVwj2g1YNJaHniIEKxgk0gMqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMzIe2xChpxev2zPircA6SyvOxPoGxsrjD3cS56v5sliZy18N6BEwn8x4LfDmDpNTkvNBYViTyKm0F%2BGjbW3aXyz1ZnUB2fsbvWTZF5uuP%2BjrmjN9KQYy%2B9RJH8BO0YtVrODdDqYwDE%2F%2F%2BpE6K7Y%2BvXdj5hzNuITS7RmwU6hNaZW1Ml7BwwKq8utPEvtOFI8bsaY3O%2Fe9R5%2BpN1iygg0jtE4TixL%2FpjdGPdn8ZAtczPspwje7f7qdnQcZogIc0btH4hLbqV8poVeJTMtDb2zali6NO2VJqHcqZiB5Qa%2F%2BavXgoml4YnfHjqIUMsGnp746Fl%2BOQREfklXy6lSf9MdrRxYsMIoJ5sK97ce9jv%2B%2Fcg27T7edRISOjjKRJagyX3IlPjq1%2FZz8kXZfUEC6WAq0XYSUmMvSmOy%2BjMe2EgeWQno9u5tYRnED8QRQpIiZvMtSvAf8YPjHigiX40c%2FpLW5Cz3KtufrkSGhaGniUnUdnpOFoiMoN8EFUGxlYYWqA4pQGkhrtKaGYpXfwCT95HdnGd3OumdK%2BFggkPOZ5F6Nwvo%2FZe45pScSZl3vAISByKjvamyWKGY%2B24SMiqg4nygIEZiMTmuJ%2FdfRzo3C0AWk1vI6Xxw316JLf3MrQ1rngWvmv8hmQWuRePznelMKy%2F4cYGOqUBclE%2F3RmPg%2BJZFhYMwf8EdxcQzIXfg%2Fr7Rl%2F0ZmVqy%2BpUazWbgnljJM6KfvTd%2FUrq9WE3hdgVWXldy2aLbmcQlWg2XL71ndQKG%2BfitCe%2FnDEkoZwhGnuOGoNHbjOIilkMegb2EGfQknHdGXScg%2BKtWsN5a4qeFQF1bhCoJf4kwu6%2BjcfH06twoKGyf2ZQ8juozC0DiUwqQfYL9VdpWxcw1Uv%2FSHme&X-Amz-Signature=c2d56714b45a48357634a518fbfadcccc7524d026d4520128bfb9a7535dae350&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6H7ZF4C%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCmYDAQ9xlKuRKjYqQVVDTdZ2LF0eg%2BRHGWTFav4C%2FmmgIgBZbUO3yXQ4lZCBfcl0fKDVwj2g1YNJaHniIEKxgk0gMqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMzIe2xChpxev2zPircA6SyvOxPoGxsrjD3cS56v5sliZy18N6BEwn8x4LfDmDpNTkvNBYViTyKm0F%2BGjbW3aXyz1ZnUB2fsbvWTZF5uuP%2BjrmjN9KQYy%2B9RJH8BO0YtVrODdDqYwDE%2F%2F%2BpE6K7Y%2BvXdj5hzNuITS7RmwU6hNaZW1Ml7BwwKq8utPEvtOFI8bsaY3O%2Fe9R5%2BpN1iygg0jtE4TixL%2FpjdGPdn8ZAtczPspwje7f7qdnQcZogIc0btH4hLbqV8poVeJTMtDb2zali6NO2VJqHcqZiB5Qa%2F%2BavXgoml4YnfHjqIUMsGnp746Fl%2BOQREfklXy6lSf9MdrRxYsMIoJ5sK97ce9jv%2B%2Fcg27T7edRISOjjKRJagyX3IlPjq1%2FZz8kXZfUEC6WAq0XYSUmMvSmOy%2BjMe2EgeWQno9u5tYRnED8QRQpIiZvMtSvAf8YPjHigiX40c%2FpLW5Cz3KtufrkSGhaGniUnUdnpOFoiMoN8EFUGxlYYWqA4pQGkhrtKaGYpXfwCT95HdnGd3OumdK%2BFggkPOZ5F6Nwvo%2FZe45pScSZl3vAISByKjvamyWKGY%2B24SMiqg4nygIEZiMTmuJ%2FdfRzo3C0AWk1vI6Xxw316JLf3MrQ1rngWvmv8hmQWuRePznelMKy%2F4cYGOqUBclE%2F3RmPg%2BJZFhYMwf8EdxcQzIXfg%2Fr7Rl%2F0ZmVqy%2BpUazWbgnljJM6KfvTd%2FUrq9WE3hdgVWXldy2aLbmcQlWg2XL71ndQKG%2BfitCe%2FnDEkoZwhGnuOGoNHbjOIilkMegb2EGfQknHdGXScg%2BKtWsN5a4qeFQF1bhCoJf4kwu6%2BjcfH06twoKGyf2ZQ8juozC0DiUwqQfYL9VdpWxcw1Uv%2FSHme&X-Amz-Signature=07344b5bd6fa74387059a19dec7f6b79b1967c502b79e534481775c98d70ce92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6H7ZF4C%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCmYDAQ9xlKuRKjYqQVVDTdZ2LF0eg%2BRHGWTFav4C%2FmmgIgBZbUO3yXQ4lZCBfcl0fKDVwj2g1YNJaHniIEKxgk0gMqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMzIe2xChpxev2zPircA6SyvOxPoGxsrjD3cS56v5sliZy18N6BEwn8x4LfDmDpNTkvNBYViTyKm0F%2BGjbW3aXyz1ZnUB2fsbvWTZF5uuP%2BjrmjN9KQYy%2B9RJH8BO0YtVrODdDqYwDE%2F%2F%2BpE6K7Y%2BvXdj5hzNuITS7RmwU6hNaZW1Ml7BwwKq8utPEvtOFI8bsaY3O%2Fe9R5%2BpN1iygg0jtE4TixL%2FpjdGPdn8ZAtczPspwje7f7qdnQcZogIc0btH4hLbqV8poVeJTMtDb2zali6NO2VJqHcqZiB5Qa%2F%2BavXgoml4YnfHjqIUMsGnp746Fl%2BOQREfklXy6lSf9MdrRxYsMIoJ5sK97ce9jv%2B%2Fcg27T7edRISOjjKRJagyX3IlPjq1%2FZz8kXZfUEC6WAq0XYSUmMvSmOy%2BjMe2EgeWQno9u5tYRnED8QRQpIiZvMtSvAf8YPjHigiX40c%2FpLW5Cz3KtufrkSGhaGniUnUdnpOFoiMoN8EFUGxlYYWqA4pQGkhrtKaGYpXfwCT95HdnGd3OumdK%2BFggkPOZ5F6Nwvo%2FZe45pScSZl3vAISByKjvamyWKGY%2B24SMiqg4nygIEZiMTmuJ%2FdfRzo3C0AWk1vI6Xxw316JLf3MrQ1rngWvmv8hmQWuRePznelMKy%2F4cYGOqUBclE%2F3RmPg%2BJZFhYMwf8EdxcQzIXfg%2Fr7Rl%2F0ZmVqy%2BpUazWbgnljJM6KfvTd%2FUrq9WE3hdgVWXldy2aLbmcQlWg2XL71ndQKG%2BfitCe%2FnDEkoZwhGnuOGoNHbjOIilkMegb2EGfQknHdGXScg%2BKtWsN5a4qeFQF1bhCoJf4kwu6%2BjcfH06twoKGyf2ZQ8juozC0DiUwqQfYL9VdpWxcw1Uv%2FSHme&X-Amz-Signature=0da58c31e5c6d40c038f30ad4d4363ab6f6468d7376ba28cbe4fbbe36424c628&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
