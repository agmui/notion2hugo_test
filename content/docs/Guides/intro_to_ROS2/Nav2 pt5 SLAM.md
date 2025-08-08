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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAXQF2ZH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIB5dMP2yEkPUsDhOvFZxE8i%2B7qJQ5YQtTyHWXaRsKDViAiB9QsHDuEUIrcEBdVWuoB6NlHE07i97%2BdafeHKtw8uyLiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfF3uwGBh2AGHYSbqKtwDzZfU2Bse2oiJxmaAixd6jL%2FxdRQ%2FAW5mQgk9ZJco44B7wjIqasuMgXerfgDBd%2BA8hWWnK2FV9jGfCyEaissUYN1vmD5gyIUBdGRUqC8gMRO37ZWoIFc9oFgsYUh2cYGLPhYmmQh9S4AdDjI8UyDVwWTshdR%2BPrLy4%2BYDBKgNy1fJAEVlhfXUV5uqM9KPO42kgXK6EXPUF3YrgkmgnavWZQKBxNjS69%2FXFot%2FjfuWrY2QV%2BELk0evfDecr%2F2N5cjwOBaiQEk%2FTQFK5%2FE9P5t1%2F%2Fg3AZM2d4pl%2BhmkbTFzka1wSKuyzFZauZgYBOIrq%2BkKjcw%2F2mslBN%2B33OE1jEcBFJWm8g0BUuN9GruJXFGWXz%2BA3s8VJdbCtA2N1lr5Tm3m2k4lbnI7bxT1fWWYrMvLTNXI%2FTTqm7dAIW6HzPvv9F%2BQvWn719QbaDmqwxy1uQNPcxZGpl00VGLUtvCweramiUrX%2B1VFhGvX7GE5QvYADA9EGG79R%2BEFoEVRG6kT6Uxn0XC4IIzJ6S0VfzAYYruyizyGaj9eKVid4yqIP3mzq6c4mD4kaAW338phHyiAaRCjpEMJULXdFM3gMyBHGh9fvubXTjVruahtQ2pl1xhMYKc2q6eyzalOITla5G8wv%2BDZxAY6pgHiYWS6ISLEwGkWRY23ke%2Fs1Ix2XMw6bdVpVxhgE0qHlC6DErn1ns7mSXPU%2Bg7%2BdMOuczMCorgmlyQHjfYgbH3wB4MppHGTydGeu1wAPQVF5TlDjVU4XPFz2iL0e2JhFDFoLvaKZohEnDOm9Uh2Ba3AiW1g%2FkrYQACqqFTTO76crI67iB5bJ20XCAVvu6Ucj0qQHmkGwFcSufzl4GPLpw8mdvjkKh1C&X-Amz-Signature=57722c3c608e5891ebe9f10e617c6fafb84bcba58d80b0b601804c867b8e8497&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAXQF2ZH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIB5dMP2yEkPUsDhOvFZxE8i%2B7qJQ5YQtTyHWXaRsKDViAiB9QsHDuEUIrcEBdVWuoB6NlHE07i97%2BdafeHKtw8uyLiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfF3uwGBh2AGHYSbqKtwDzZfU2Bse2oiJxmaAixd6jL%2FxdRQ%2FAW5mQgk9ZJco44B7wjIqasuMgXerfgDBd%2BA8hWWnK2FV9jGfCyEaissUYN1vmD5gyIUBdGRUqC8gMRO37ZWoIFc9oFgsYUh2cYGLPhYmmQh9S4AdDjI8UyDVwWTshdR%2BPrLy4%2BYDBKgNy1fJAEVlhfXUV5uqM9KPO42kgXK6EXPUF3YrgkmgnavWZQKBxNjS69%2FXFot%2FjfuWrY2QV%2BELk0evfDecr%2F2N5cjwOBaiQEk%2FTQFK5%2FE9P5t1%2F%2Fg3AZM2d4pl%2BhmkbTFzka1wSKuyzFZauZgYBOIrq%2BkKjcw%2F2mslBN%2B33OE1jEcBFJWm8g0BUuN9GruJXFGWXz%2BA3s8VJdbCtA2N1lr5Tm3m2k4lbnI7bxT1fWWYrMvLTNXI%2FTTqm7dAIW6HzPvv9F%2BQvWn719QbaDmqwxy1uQNPcxZGpl00VGLUtvCweramiUrX%2B1VFhGvX7GE5QvYADA9EGG79R%2BEFoEVRG6kT6Uxn0XC4IIzJ6S0VfzAYYruyizyGaj9eKVid4yqIP3mzq6c4mD4kaAW338phHyiAaRCjpEMJULXdFM3gMyBHGh9fvubXTjVruahtQ2pl1xhMYKc2q6eyzalOITla5G8wv%2BDZxAY6pgHiYWS6ISLEwGkWRY23ke%2Fs1Ix2XMw6bdVpVxhgE0qHlC6DErn1ns7mSXPU%2Bg7%2BdMOuczMCorgmlyQHjfYgbH3wB4MppHGTydGeu1wAPQVF5TlDjVU4XPFz2iL0e2JhFDFoLvaKZohEnDOm9Uh2Ba3AiW1g%2FkrYQACqqFTTO76crI67iB5bJ20XCAVvu6Ucj0qQHmkGwFcSufzl4GPLpw8mdvjkKh1C&X-Amz-Signature=786e6983e3aa618b7a9c1e8e0586694a30e2045185bd0ab06bfde2d9307fb310&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAXQF2ZH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIB5dMP2yEkPUsDhOvFZxE8i%2B7qJQ5YQtTyHWXaRsKDViAiB9QsHDuEUIrcEBdVWuoB6NlHE07i97%2BdafeHKtw8uyLiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfF3uwGBh2AGHYSbqKtwDzZfU2Bse2oiJxmaAixd6jL%2FxdRQ%2FAW5mQgk9ZJco44B7wjIqasuMgXerfgDBd%2BA8hWWnK2FV9jGfCyEaissUYN1vmD5gyIUBdGRUqC8gMRO37ZWoIFc9oFgsYUh2cYGLPhYmmQh9S4AdDjI8UyDVwWTshdR%2BPrLy4%2BYDBKgNy1fJAEVlhfXUV5uqM9KPO42kgXK6EXPUF3YrgkmgnavWZQKBxNjS69%2FXFot%2FjfuWrY2QV%2BELk0evfDecr%2F2N5cjwOBaiQEk%2FTQFK5%2FE9P5t1%2F%2Fg3AZM2d4pl%2BhmkbTFzka1wSKuyzFZauZgYBOIrq%2BkKjcw%2F2mslBN%2B33OE1jEcBFJWm8g0BUuN9GruJXFGWXz%2BA3s8VJdbCtA2N1lr5Tm3m2k4lbnI7bxT1fWWYrMvLTNXI%2FTTqm7dAIW6HzPvv9F%2BQvWn719QbaDmqwxy1uQNPcxZGpl00VGLUtvCweramiUrX%2B1VFhGvX7GE5QvYADA9EGG79R%2BEFoEVRG6kT6Uxn0XC4IIzJ6S0VfzAYYruyizyGaj9eKVid4yqIP3mzq6c4mD4kaAW338phHyiAaRCjpEMJULXdFM3gMyBHGh9fvubXTjVruahtQ2pl1xhMYKc2q6eyzalOITla5G8wv%2BDZxAY6pgHiYWS6ISLEwGkWRY23ke%2Fs1Ix2XMw6bdVpVxhgE0qHlC6DErn1ns7mSXPU%2Bg7%2BdMOuczMCorgmlyQHjfYgbH3wB4MppHGTydGeu1wAPQVF5TlDjVU4XPFz2iL0e2JhFDFoLvaKZohEnDOm9Uh2Ba3AiW1g%2FkrYQACqqFTTO76crI67iB5bJ20XCAVvu6Ucj0qQHmkGwFcSufzl4GPLpw8mdvjkKh1C&X-Amz-Signature=d3d9c4089e7709c6290e51fa9eb9170d2ec0a9e84d5eed96657421cde8de2804&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAXQF2ZH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIB5dMP2yEkPUsDhOvFZxE8i%2B7qJQ5YQtTyHWXaRsKDViAiB9QsHDuEUIrcEBdVWuoB6NlHE07i97%2BdafeHKtw8uyLiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfF3uwGBh2AGHYSbqKtwDzZfU2Bse2oiJxmaAixd6jL%2FxdRQ%2FAW5mQgk9ZJco44B7wjIqasuMgXerfgDBd%2BA8hWWnK2FV9jGfCyEaissUYN1vmD5gyIUBdGRUqC8gMRO37ZWoIFc9oFgsYUh2cYGLPhYmmQh9S4AdDjI8UyDVwWTshdR%2BPrLy4%2BYDBKgNy1fJAEVlhfXUV5uqM9KPO42kgXK6EXPUF3YrgkmgnavWZQKBxNjS69%2FXFot%2FjfuWrY2QV%2BELk0evfDecr%2F2N5cjwOBaiQEk%2FTQFK5%2FE9P5t1%2F%2Fg3AZM2d4pl%2BhmkbTFzka1wSKuyzFZauZgYBOIrq%2BkKjcw%2F2mslBN%2B33OE1jEcBFJWm8g0BUuN9GruJXFGWXz%2BA3s8VJdbCtA2N1lr5Tm3m2k4lbnI7bxT1fWWYrMvLTNXI%2FTTqm7dAIW6HzPvv9F%2BQvWn719QbaDmqwxy1uQNPcxZGpl00VGLUtvCweramiUrX%2B1VFhGvX7GE5QvYADA9EGG79R%2BEFoEVRG6kT6Uxn0XC4IIzJ6S0VfzAYYruyizyGaj9eKVid4yqIP3mzq6c4mD4kaAW338phHyiAaRCjpEMJULXdFM3gMyBHGh9fvubXTjVruahtQ2pl1xhMYKc2q6eyzalOITla5G8wv%2BDZxAY6pgHiYWS6ISLEwGkWRY23ke%2Fs1Ix2XMw6bdVpVxhgE0qHlC6DErn1ns7mSXPU%2Bg7%2BdMOuczMCorgmlyQHjfYgbH3wB4MppHGTydGeu1wAPQVF5TlDjVU4XPFz2iL0e2JhFDFoLvaKZohEnDOm9Uh2Ba3AiW1g%2FkrYQACqqFTTO76crI67iB5bJ20XCAVvu6Ucj0qQHmkGwFcSufzl4GPLpw8mdvjkKh1C&X-Amz-Signature=680dcc78a77023e36e5f7c18a0d289009a01c82154be7e493c5ef7be5ff4a8bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAXQF2ZH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIB5dMP2yEkPUsDhOvFZxE8i%2B7qJQ5YQtTyHWXaRsKDViAiB9QsHDuEUIrcEBdVWuoB6NlHE07i97%2BdafeHKtw8uyLiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfF3uwGBh2AGHYSbqKtwDzZfU2Bse2oiJxmaAixd6jL%2FxdRQ%2FAW5mQgk9ZJco44B7wjIqasuMgXerfgDBd%2BA8hWWnK2FV9jGfCyEaissUYN1vmD5gyIUBdGRUqC8gMRO37ZWoIFc9oFgsYUh2cYGLPhYmmQh9S4AdDjI8UyDVwWTshdR%2BPrLy4%2BYDBKgNy1fJAEVlhfXUV5uqM9KPO42kgXK6EXPUF3YrgkmgnavWZQKBxNjS69%2FXFot%2FjfuWrY2QV%2BELk0evfDecr%2F2N5cjwOBaiQEk%2FTQFK5%2FE9P5t1%2F%2Fg3AZM2d4pl%2BhmkbTFzka1wSKuyzFZauZgYBOIrq%2BkKjcw%2F2mslBN%2B33OE1jEcBFJWm8g0BUuN9GruJXFGWXz%2BA3s8VJdbCtA2N1lr5Tm3m2k4lbnI7bxT1fWWYrMvLTNXI%2FTTqm7dAIW6HzPvv9F%2BQvWn719QbaDmqwxy1uQNPcxZGpl00VGLUtvCweramiUrX%2B1VFhGvX7GE5QvYADA9EGG79R%2BEFoEVRG6kT6Uxn0XC4IIzJ6S0VfzAYYruyizyGaj9eKVid4yqIP3mzq6c4mD4kaAW338phHyiAaRCjpEMJULXdFM3gMyBHGh9fvubXTjVruahtQ2pl1xhMYKc2q6eyzalOITla5G8wv%2BDZxAY6pgHiYWS6ISLEwGkWRY23ke%2Fs1Ix2XMw6bdVpVxhgE0qHlC6DErn1ns7mSXPU%2Bg7%2BdMOuczMCorgmlyQHjfYgbH3wB4MppHGTydGeu1wAPQVF5TlDjVU4XPFz2iL0e2JhFDFoLvaKZohEnDOm9Uh2Ba3AiW1g%2FkrYQACqqFTTO76crI67iB5bJ20XCAVvu6Ucj0qQHmkGwFcSufzl4GPLpw8mdvjkKh1C&X-Amz-Signature=482454378d8d73d034f7afae901c150244e6183c291f771f38df30261992bca4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAXQF2ZH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIB5dMP2yEkPUsDhOvFZxE8i%2B7qJQ5YQtTyHWXaRsKDViAiB9QsHDuEUIrcEBdVWuoB6NlHE07i97%2BdafeHKtw8uyLiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfF3uwGBh2AGHYSbqKtwDzZfU2Bse2oiJxmaAixd6jL%2FxdRQ%2FAW5mQgk9ZJco44B7wjIqasuMgXerfgDBd%2BA8hWWnK2FV9jGfCyEaissUYN1vmD5gyIUBdGRUqC8gMRO37ZWoIFc9oFgsYUh2cYGLPhYmmQh9S4AdDjI8UyDVwWTshdR%2BPrLy4%2BYDBKgNy1fJAEVlhfXUV5uqM9KPO42kgXK6EXPUF3YrgkmgnavWZQKBxNjS69%2FXFot%2FjfuWrY2QV%2BELk0evfDecr%2F2N5cjwOBaiQEk%2FTQFK5%2FE9P5t1%2F%2Fg3AZM2d4pl%2BhmkbTFzka1wSKuyzFZauZgYBOIrq%2BkKjcw%2F2mslBN%2B33OE1jEcBFJWm8g0BUuN9GruJXFGWXz%2BA3s8VJdbCtA2N1lr5Tm3m2k4lbnI7bxT1fWWYrMvLTNXI%2FTTqm7dAIW6HzPvv9F%2BQvWn719QbaDmqwxy1uQNPcxZGpl00VGLUtvCweramiUrX%2B1VFhGvX7GE5QvYADA9EGG79R%2BEFoEVRG6kT6Uxn0XC4IIzJ6S0VfzAYYruyizyGaj9eKVid4yqIP3mzq6c4mD4kaAW338phHyiAaRCjpEMJULXdFM3gMyBHGh9fvubXTjVruahtQ2pl1xhMYKc2q6eyzalOITla5G8wv%2BDZxAY6pgHiYWS6ISLEwGkWRY23ke%2Fs1Ix2XMw6bdVpVxhgE0qHlC6DErn1ns7mSXPU%2Bg7%2BdMOuczMCorgmlyQHjfYgbH3wB4MppHGTydGeu1wAPQVF5TlDjVU4XPFz2iL0e2JhFDFoLvaKZohEnDOm9Uh2Ba3AiW1g%2FkrYQACqqFTTO76crI67iB5bJ20XCAVvu6Ucj0qQHmkGwFcSufzl4GPLpw8mdvjkKh1C&X-Amz-Signature=fbc92394f8790407c380380eb59dddc3b2ea1d41fd343b4eb6f11e832148dfab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAXQF2ZH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIB5dMP2yEkPUsDhOvFZxE8i%2B7qJQ5YQtTyHWXaRsKDViAiB9QsHDuEUIrcEBdVWuoB6NlHE07i97%2BdafeHKtw8uyLiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfF3uwGBh2AGHYSbqKtwDzZfU2Bse2oiJxmaAixd6jL%2FxdRQ%2FAW5mQgk9ZJco44B7wjIqasuMgXerfgDBd%2BA8hWWnK2FV9jGfCyEaissUYN1vmD5gyIUBdGRUqC8gMRO37ZWoIFc9oFgsYUh2cYGLPhYmmQh9S4AdDjI8UyDVwWTshdR%2BPrLy4%2BYDBKgNy1fJAEVlhfXUV5uqM9KPO42kgXK6EXPUF3YrgkmgnavWZQKBxNjS69%2FXFot%2FjfuWrY2QV%2BELk0evfDecr%2F2N5cjwOBaiQEk%2FTQFK5%2FE9P5t1%2F%2Fg3AZM2d4pl%2BhmkbTFzka1wSKuyzFZauZgYBOIrq%2BkKjcw%2F2mslBN%2B33OE1jEcBFJWm8g0BUuN9GruJXFGWXz%2BA3s8VJdbCtA2N1lr5Tm3m2k4lbnI7bxT1fWWYrMvLTNXI%2FTTqm7dAIW6HzPvv9F%2BQvWn719QbaDmqwxy1uQNPcxZGpl00VGLUtvCweramiUrX%2B1VFhGvX7GE5QvYADA9EGG79R%2BEFoEVRG6kT6Uxn0XC4IIzJ6S0VfzAYYruyizyGaj9eKVid4yqIP3mzq6c4mD4kaAW338phHyiAaRCjpEMJULXdFM3gMyBHGh9fvubXTjVruahtQ2pl1xhMYKc2q6eyzalOITla5G8wv%2BDZxAY6pgHiYWS6ISLEwGkWRY23ke%2Fs1Ix2XMw6bdVpVxhgE0qHlC6DErn1ns7mSXPU%2Bg7%2BdMOuczMCorgmlyQHjfYgbH3wB4MppHGTydGeu1wAPQVF5TlDjVU4XPFz2iL0e2JhFDFoLvaKZohEnDOm9Uh2Ba3AiW1g%2FkrYQACqqFTTO76crI67iB5bJ20XCAVvu6Ucj0qQHmkGwFcSufzl4GPLpw8mdvjkKh1C&X-Amz-Signature=f7e3db7c7fe60b5d87a00df57a2299380d7b0c032d7ac2e42f5ff2aa1af7c33e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAXQF2ZH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIB5dMP2yEkPUsDhOvFZxE8i%2B7qJQ5YQtTyHWXaRsKDViAiB9QsHDuEUIrcEBdVWuoB6NlHE07i97%2BdafeHKtw8uyLiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfF3uwGBh2AGHYSbqKtwDzZfU2Bse2oiJxmaAixd6jL%2FxdRQ%2FAW5mQgk9ZJco44B7wjIqasuMgXerfgDBd%2BA8hWWnK2FV9jGfCyEaissUYN1vmD5gyIUBdGRUqC8gMRO37ZWoIFc9oFgsYUh2cYGLPhYmmQh9S4AdDjI8UyDVwWTshdR%2BPrLy4%2BYDBKgNy1fJAEVlhfXUV5uqM9KPO42kgXK6EXPUF3YrgkmgnavWZQKBxNjS69%2FXFot%2FjfuWrY2QV%2BELk0evfDecr%2F2N5cjwOBaiQEk%2FTQFK5%2FE9P5t1%2F%2Fg3AZM2d4pl%2BhmkbTFzka1wSKuyzFZauZgYBOIrq%2BkKjcw%2F2mslBN%2B33OE1jEcBFJWm8g0BUuN9GruJXFGWXz%2BA3s8VJdbCtA2N1lr5Tm3m2k4lbnI7bxT1fWWYrMvLTNXI%2FTTqm7dAIW6HzPvv9F%2BQvWn719QbaDmqwxy1uQNPcxZGpl00VGLUtvCweramiUrX%2B1VFhGvX7GE5QvYADA9EGG79R%2BEFoEVRG6kT6Uxn0XC4IIzJ6S0VfzAYYruyizyGaj9eKVid4yqIP3mzq6c4mD4kaAW338phHyiAaRCjpEMJULXdFM3gMyBHGh9fvubXTjVruahtQ2pl1xhMYKc2q6eyzalOITla5G8wv%2BDZxAY6pgHiYWS6ISLEwGkWRY23ke%2Fs1Ix2XMw6bdVpVxhgE0qHlC6DErn1ns7mSXPU%2Bg7%2BdMOuczMCorgmlyQHjfYgbH3wB4MppHGTydGeu1wAPQVF5TlDjVU4XPFz2iL0e2JhFDFoLvaKZohEnDOm9Uh2Ba3AiW1g%2FkrYQACqqFTTO76crI67iB5bJ20XCAVvu6Ucj0qQHmkGwFcSufzl4GPLpw8mdvjkKh1C&X-Amz-Signature=31a0b0169a8eab83cd3568d54d760db5ec289b24febaa76661fbfbecfcd98fea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAXQF2ZH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIB5dMP2yEkPUsDhOvFZxE8i%2B7qJQ5YQtTyHWXaRsKDViAiB9QsHDuEUIrcEBdVWuoB6NlHE07i97%2BdafeHKtw8uyLiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfF3uwGBh2AGHYSbqKtwDzZfU2Bse2oiJxmaAixd6jL%2FxdRQ%2FAW5mQgk9ZJco44B7wjIqasuMgXerfgDBd%2BA8hWWnK2FV9jGfCyEaissUYN1vmD5gyIUBdGRUqC8gMRO37ZWoIFc9oFgsYUh2cYGLPhYmmQh9S4AdDjI8UyDVwWTshdR%2BPrLy4%2BYDBKgNy1fJAEVlhfXUV5uqM9KPO42kgXK6EXPUF3YrgkmgnavWZQKBxNjS69%2FXFot%2FjfuWrY2QV%2BELk0evfDecr%2F2N5cjwOBaiQEk%2FTQFK5%2FE9P5t1%2F%2Fg3AZM2d4pl%2BhmkbTFzka1wSKuyzFZauZgYBOIrq%2BkKjcw%2F2mslBN%2B33OE1jEcBFJWm8g0BUuN9GruJXFGWXz%2BA3s8VJdbCtA2N1lr5Tm3m2k4lbnI7bxT1fWWYrMvLTNXI%2FTTqm7dAIW6HzPvv9F%2BQvWn719QbaDmqwxy1uQNPcxZGpl00VGLUtvCweramiUrX%2B1VFhGvX7GE5QvYADA9EGG79R%2BEFoEVRG6kT6Uxn0XC4IIzJ6S0VfzAYYruyizyGaj9eKVid4yqIP3mzq6c4mD4kaAW338phHyiAaRCjpEMJULXdFM3gMyBHGh9fvubXTjVruahtQ2pl1xhMYKc2q6eyzalOITla5G8wv%2BDZxAY6pgHiYWS6ISLEwGkWRY23ke%2Fs1Ix2XMw6bdVpVxhgE0qHlC6DErn1ns7mSXPU%2Bg7%2BdMOuczMCorgmlyQHjfYgbH3wB4MppHGTydGeu1wAPQVF5TlDjVU4XPFz2iL0e2JhFDFoLvaKZohEnDOm9Uh2Ba3AiW1g%2FkrYQACqqFTTO76crI67iB5bJ20XCAVvu6Ucj0qQHmkGwFcSufzl4GPLpw8mdvjkKh1C&X-Amz-Signature=483066e70e7c496327f82ddfc0f77f560d4ba8b3a07f11160196f3126f9133ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAXQF2ZH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIB5dMP2yEkPUsDhOvFZxE8i%2B7qJQ5YQtTyHWXaRsKDViAiB9QsHDuEUIrcEBdVWuoB6NlHE07i97%2BdafeHKtw8uyLiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfF3uwGBh2AGHYSbqKtwDzZfU2Bse2oiJxmaAixd6jL%2FxdRQ%2FAW5mQgk9ZJco44B7wjIqasuMgXerfgDBd%2BA8hWWnK2FV9jGfCyEaissUYN1vmD5gyIUBdGRUqC8gMRO37ZWoIFc9oFgsYUh2cYGLPhYmmQh9S4AdDjI8UyDVwWTshdR%2BPrLy4%2BYDBKgNy1fJAEVlhfXUV5uqM9KPO42kgXK6EXPUF3YrgkmgnavWZQKBxNjS69%2FXFot%2FjfuWrY2QV%2BELk0evfDecr%2F2N5cjwOBaiQEk%2FTQFK5%2FE9P5t1%2F%2Fg3AZM2d4pl%2BhmkbTFzka1wSKuyzFZauZgYBOIrq%2BkKjcw%2F2mslBN%2B33OE1jEcBFJWm8g0BUuN9GruJXFGWXz%2BA3s8VJdbCtA2N1lr5Tm3m2k4lbnI7bxT1fWWYrMvLTNXI%2FTTqm7dAIW6HzPvv9F%2BQvWn719QbaDmqwxy1uQNPcxZGpl00VGLUtvCweramiUrX%2B1VFhGvX7GE5QvYADA9EGG79R%2BEFoEVRG6kT6Uxn0XC4IIzJ6S0VfzAYYruyizyGaj9eKVid4yqIP3mzq6c4mD4kaAW338phHyiAaRCjpEMJULXdFM3gMyBHGh9fvubXTjVruahtQ2pl1xhMYKc2q6eyzalOITla5G8wv%2BDZxAY6pgHiYWS6ISLEwGkWRY23ke%2Fs1Ix2XMw6bdVpVxhgE0qHlC6DErn1ns7mSXPU%2Bg7%2BdMOuczMCorgmlyQHjfYgbH3wB4MppHGTydGeu1wAPQVF5TlDjVU4XPFz2iL0e2JhFDFoLvaKZohEnDOm9Uh2Ba3AiW1g%2FkrYQACqqFTTO76crI67iB5bJ20XCAVvu6Ucj0qQHmkGwFcSufzl4GPLpw8mdvjkKh1C&X-Amz-Signature=05ff6401d61b4c622fd2c824af9728eb2c9b113642b8ae1c740ae291ffcbc80d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAXQF2ZH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIB5dMP2yEkPUsDhOvFZxE8i%2B7qJQ5YQtTyHWXaRsKDViAiB9QsHDuEUIrcEBdVWuoB6NlHE07i97%2BdafeHKtw8uyLiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfF3uwGBh2AGHYSbqKtwDzZfU2Bse2oiJxmaAixd6jL%2FxdRQ%2FAW5mQgk9ZJco44B7wjIqasuMgXerfgDBd%2BA8hWWnK2FV9jGfCyEaissUYN1vmD5gyIUBdGRUqC8gMRO37ZWoIFc9oFgsYUh2cYGLPhYmmQh9S4AdDjI8UyDVwWTshdR%2BPrLy4%2BYDBKgNy1fJAEVlhfXUV5uqM9KPO42kgXK6EXPUF3YrgkmgnavWZQKBxNjS69%2FXFot%2FjfuWrY2QV%2BELk0evfDecr%2F2N5cjwOBaiQEk%2FTQFK5%2FE9P5t1%2F%2Fg3AZM2d4pl%2BhmkbTFzka1wSKuyzFZauZgYBOIrq%2BkKjcw%2F2mslBN%2B33OE1jEcBFJWm8g0BUuN9GruJXFGWXz%2BA3s8VJdbCtA2N1lr5Tm3m2k4lbnI7bxT1fWWYrMvLTNXI%2FTTqm7dAIW6HzPvv9F%2BQvWn719QbaDmqwxy1uQNPcxZGpl00VGLUtvCweramiUrX%2B1VFhGvX7GE5QvYADA9EGG79R%2BEFoEVRG6kT6Uxn0XC4IIzJ6S0VfzAYYruyizyGaj9eKVid4yqIP3mzq6c4mD4kaAW338phHyiAaRCjpEMJULXdFM3gMyBHGh9fvubXTjVruahtQ2pl1xhMYKc2q6eyzalOITla5G8wv%2BDZxAY6pgHiYWS6ISLEwGkWRY23ke%2Fs1Ix2XMw6bdVpVxhgE0qHlC6DErn1ns7mSXPU%2Bg7%2BdMOuczMCorgmlyQHjfYgbH3wB4MppHGTydGeu1wAPQVF5TlDjVU4XPFz2iL0e2JhFDFoLvaKZohEnDOm9Uh2Ba3AiW1g%2FkrYQACqqFTTO76crI67iB5bJ20XCAVvu6Ucj0qQHmkGwFcSufzl4GPLpw8mdvjkKh1C&X-Amz-Signature=d70710fd16cb2ed8f1e0307a6455fe846a200a6c3a6a3ebeec8c38456c49e2d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAXQF2ZH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIB5dMP2yEkPUsDhOvFZxE8i%2B7qJQ5YQtTyHWXaRsKDViAiB9QsHDuEUIrcEBdVWuoB6NlHE07i97%2BdafeHKtw8uyLiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfF3uwGBh2AGHYSbqKtwDzZfU2Bse2oiJxmaAixd6jL%2FxdRQ%2FAW5mQgk9ZJco44B7wjIqasuMgXerfgDBd%2BA8hWWnK2FV9jGfCyEaissUYN1vmD5gyIUBdGRUqC8gMRO37ZWoIFc9oFgsYUh2cYGLPhYmmQh9S4AdDjI8UyDVwWTshdR%2BPrLy4%2BYDBKgNy1fJAEVlhfXUV5uqM9KPO42kgXK6EXPUF3YrgkmgnavWZQKBxNjS69%2FXFot%2FjfuWrY2QV%2BELk0evfDecr%2F2N5cjwOBaiQEk%2FTQFK5%2FE9P5t1%2F%2Fg3AZM2d4pl%2BhmkbTFzka1wSKuyzFZauZgYBOIrq%2BkKjcw%2F2mslBN%2B33OE1jEcBFJWm8g0BUuN9GruJXFGWXz%2BA3s8VJdbCtA2N1lr5Tm3m2k4lbnI7bxT1fWWYrMvLTNXI%2FTTqm7dAIW6HzPvv9F%2BQvWn719QbaDmqwxy1uQNPcxZGpl00VGLUtvCweramiUrX%2B1VFhGvX7GE5QvYADA9EGG79R%2BEFoEVRG6kT6Uxn0XC4IIzJ6S0VfzAYYruyizyGaj9eKVid4yqIP3mzq6c4mD4kaAW338phHyiAaRCjpEMJULXdFM3gMyBHGh9fvubXTjVruahtQ2pl1xhMYKc2q6eyzalOITla5G8wv%2BDZxAY6pgHiYWS6ISLEwGkWRY23ke%2Fs1Ix2XMw6bdVpVxhgE0qHlC6DErn1ns7mSXPU%2Bg7%2BdMOuczMCorgmlyQHjfYgbH3wB4MppHGTydGeu1wAPQVF5TlDjVU4XPFz2iL0e2JhFDFoLvaKZohEnDOm9Uh2Ba3AiW1g%2FkrYQACqqFTTO76crI67iB5bJ20XCAVvu6Ucj0qQHmkGwFcSufzl4GPLpw8mdvjkKh1C&X-Amz-Signature=9320f683225571fd73996d01ac9024db2170da911e4a3b5a53425dc9142f1cbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAXQF2ZH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIB5dMP2yEkPUsDhOvFZxE8i%2B7qJQ5YQtTyHWXaRsKDViAiB9QsHDuEUIrcEBdVWuoB6NlHE07i97%2BdafeHKtw8uyLiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfF3uwGBh2AGHYSbqKtwDzZfU2Bse2oiJxmaAixd6jL%2FxdRQ%2FAW5mQgk9ZJco44B7wjIqasuMgXerfgDBd%2BA8hWWnK2FV9jGfCyEaissUYN1vmD5gyIUBdGRUqC8gMRO37ZWoIFc9oFgsYUh2cYGLPhYmmQh9S4AdDjI8UyDVwWTshdR%2BPrLy4%2BYDBKgNy1fJAEVlhfXUV5uqM9KPO42kgXK6EXPUF3YrgkmgnavWZQKBxNjS69%2FXFot%2FjfuWrY2QV%2BELk0evfDecr%2F2N5cjwOBaiQEk%2FTQFK5%2FE9P5t1%2F%2Fg3AZM2d4pl%2BhmkbTFzka1wSKuyzFZauZgYBOIrq%2BkKjcw%2F2mslBN%2B33OE1jEcBFJWm8g0BUuN9GruJXFGWXz%2BA3s8VJdbCtA2N1lr5Tm3m2k4lbnI7bxT1fWWYrMvLTNXI%2FTTqm7dAIW6HzPvv9F%2BQvWn719QbaDmqwxy1uQNPcxZGpl00VGLUtvCweramiUrX%2B1VFhGvX7GE5QvYADA9EGG79R%2BEFoEVRG6kT6Uxn0XC4IIzJ6S0VfzAYYruyizyGaj9eKVid4yqIP3mzq6c4mD4kaAW338phHyiAaRCjpEMJULXdFM3gMyBHGh9fvubXTjVruahtQ2pl1xhMYKc2q6eyzalOITla5G8wv%2BDZxAY6pgHiYWS6ISLEwGkWRY23ke%2Fs1Ix2XMw6bdVpVxhgE0qHlC6DErn1ns7mSXPU%2Bg7%2BdMOuczMCorgmlyQHjfYgbH3wB4MppHGTydGeu1wAPQVF5TlDjVU4XPFz2iL0e2JhFDFoLvaKZohEnDOm9Uh2Ba3AiW1g%2FkrYQACqqFTTO76crI67iB5bJ20XCAVvu6Ucj0qQHmkGwFcSufzl4GPLpw8mdvjkKh1C&X-Amz-Signature=bb7b8383adc6b61b6f1776a28e97b9c6f1aab7e596ad034a9dc402960a040c87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAXQF2ZH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIB5dMP2yEkPUsDhOvFZxE8i%2B7qJQ5YQtTyHWXaRsKDViAiB9QsHDuEUIrcEBdVWuoB6NlHE07i97%2BdafeHKtw8uyLiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfF3uwGBh2AGHYSbqKtwDzZfU2Bse2oiJxmaAixd6jL%2FxdRQ%2FAW5mQgk9ZJco44B7wjIqasuMgXerfgDBd%2BA8hWWnK2FV9jGfCyEaissUYN1vmD5gyIUBdGRUqC8gMRO37ZWoIFc9oFgsYUh2cYGLPhYmmQh9S4AdDjI8UyDVwWTshdR%2BPrLy4%2BYDBKgNy1fJAEVlhfXUV5uqM9KPO42kgXK6EXPUF3YrgkmgnavWZQKBxNjS69%2FXFot%2FjfuWrY2QV%2BELk0evfDecr%2F2N5cjwOBaiQEk%2FTQFK5%2FE9P5t1%2F%2Fg3AZM2d4pl%2BhmkbTFzka1wSKuyzFZauZgYBOIrq%2BkKjcw%2F2mslBN%2B33OE1jEcBFJWm8g0BUuN9GruJXFGWXz%2BA3s8VJdbCtA2N1lr5Tm3m2k4lbnI7bxT1fWWYrMvLTNXI%2FTTqm7dAIW6HzPvv9F%2BQvWn719QbaDmqwxy1uQNPcxZGpl00VGLUtvCweramiUrX%2B1VFhGvX7GE5QvYADA9EGG79R%2BEFoEVRG6kT6Uxn0XC4IIzJ6S0VfzAYYruyizyGaj9eKVid4yqIP3mzq6c4mD4kaAW338phHyiAaRCjpEMJULXdFM3gMyBHGh9fvubXTjVruahtQ2pl1xhMYKc2q6eyzalOITla5G8wv%2BDZxAY6pgHiYWS6ISLEwGkWRY23ke%2Fs1Ix2XMw6bdVpVxhgE0qHlC6DErn1ns7mSXPU%2Bg7%2BdMOuczMCorgmlyQHjfYgbH3wB4MppHGTydGeu1wAPQVF5TlDjVU4XPFz2iL0e2JhFDFoLvaKZohEnDOm9Uh2Ba3AiW1g%2FkrYQACqqFTTO76crI67iB5bJ20XCAVvu6Ucj0qQHmkGwFcSufzl4GPLpw8mdvjkKh1C&X-Amz-Signature=aa2ab8f55366c42022e9970daa9ddf57647df46453219317e5f0d83f6fdc42fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
