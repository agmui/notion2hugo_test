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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF4HLAJR%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi6I%2F5jM1lIS9Q3bmRjFLvEzJLKuXKERohMPkBxHgEowIhAOPy7ffOVmX1xoKQqHDjVDqYjRBdBBihs62yVOUixFbyKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAkQ2D2O%2FgOcexPnIq3AOUlhWMYo7ITlzFJLMJkDu281mXcZKajmG68fO1mGFo%2Fj%2FcSGE386es8YFfxRCK23zkhxSrUy8CKi%2BAL1nZuIZ8amH3X%2BcaHiMahIaHnR2s1qb2FZrrLD%2B%2FOnCAzME8DYFXhoKDGwEzfaGTvvFn7%2FbXfurP3u6tS1y347fXzrW0VqcoAnttDaIgWZ3orKIEcvlzkj%2BDXLM9xnR2UKRYXq5CLgzDieR3bqQbfK4xRK%2BGgd62dEGb0cCkBhGGXohfCy4jWfY1gRI1lZY6XKS%2BsBBS2dXBFMoEgMXhyhcMubJSplUk8uIGozn9lbMMVdonF8UCbrEOCwipa0S2IDrG7%2F4YcUS2tWgvW47PadY8%2F6GZ%2F1Dnq%2BClWvP47MA9Ah8erLjrPu6ppQWmpVeSUSMy%2BRUuAMXKRQGjSC892WBQyvgD%2F%2FcYdn9oHZuApZObI7tCBotsGzikuQIi5Fwo7H07r5evCLrUHBYOkTqMWGBHTjvKRIDP%2Bbr3dMtOlkbyjcMBPGEfIaxPjFNkjExg1jSIiVlCGmudFxcsA6UYGxicAeuA1OUF7f43NNfprkGZ9YpdWm41n9WKOowFRRw1bIIj9R84JC2cavzrCiMWEVIYlDmdykJwpENghDkwSXZw3zCW1%2BTEBjqkAePptJj9SyBb91MCFrSANdyF1%2F5Q%2F%2FnhLvR8WxUVZVtpe7s%2BoNmutZwMtxZqWOw47IejuJD%2BkC2vOPTm4%2Fe0Pvf%2BqoqrGEekRCiVJWWVC1ZLFoKXvcIzwgsUiiyK6n1mOViJqO6SkLYjJqutXI08Y74nZtytKLBAcxN%2BceNLFWdbgDgF8BLQwbJ%2F%2B8%2BjFV%2Bz5cPMQJul%2Ft3o4BdXGWWATapyd1Cp&X-Amz-Signature=2775ae436228e81c47dc2d37eeb0202a9eadd07e6a41857e389dfd64fb11bc91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF4HLAJR%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi6I%2F5jM1lIS9Q3bmRjFLvEzJLKuXKERohMPkBxHgEowIhAOPy7ffOVmX1xoKQqHDjVDqYjRBdBBihs62yVOUixFbyKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAkQ2D2O%2FgOcexPnIq3AOUlhWMYo7ITlzFJLMJkDu281mXcZKajmG68fO1mGFo%2Fj%2FcSGE386es8YFfxRCK23zkhxSrUy8CKi%2BAL1nZuIZ8amH3X%2BcaHiMahIaHnR2s1qb2FZrrLD%2B%2FOnCAzME8DYFXhoKDGwEzfaGTvvFn7%2FbXfurP3u6tS1y347fXzrW0VqcoAnttDaIgWZ3orKIEcvlzkj%2BDXLM9xnR2UKRYXq5CLgzDieR3bqQbfK4xRK%2BGgd62dEGb0cCkBhGGXohfCy4jWfY1gRI1lZY6XKS%2BsBBS2dXBFMoEgMXhyhcMubJSplUk8uIGozn9lbMMVdonF8UCbrEOCwipa0S2IDrG7%2F4YcUS2tWgvW47PadY8%2F6GZ%2F1Dnq%2BClWvP47MA9Ah8erLjrPu6ppQWmpVeSUSMy%2BRUuAMXKRQGjSC892WBQyvgD%2F%2FcYdn9oHZuApZObI7tCBotsGzikuQIi5Fwo7H07r5evCLrUHBYOkTqMWGBHTjvKRIDP%2Bbr3dMtOlkbyjcMBPGEfIaxPjFNkjExg1jSIiVlCGmudFxcsA6UYGxicAeuA1OUF7f43NNfprkGZ9YpdWm41n9WKOowFRRw1bIIj9R84JC2cavzrCiMWEVIYlDmdykJwpENghDkwSXZw3zCW1%2BTEBjqkAePptJj9SyBb91MCFrSANdyF1%2F5Q%2F%2FnhLvR8WxUVZVtpe7s%2BoNmutZwMtxZqWOw47IejuJD%2BkC2vOPTm4%2Fe0Pvf%2BqoqrGEekRCiVJWWVC1ZLFoKXvcIzwgsUiiyK6n1mOViJqO6SkLYjJqutXI08Y74nZtytKLBAcxN%2BceNLFWdbgDgF8BLQwbJ%2F%2B8%2BjFV%2Bz5cPMQJul%2Ft3o4BdXGWWATapyd1Cp&X-Amz-Signature=e63c4d61e299da8fabeb527ed181e8fa6e3af8adfbd78285c1f4326e8d36ebca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF4HLAJR%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi6I%2F5jM1lIS9Q3bmRjFLvEzJLKuXKERohMPkBxHgEowIhAOPy7ffOVmX1xoKQqHDjVDqYjRBdBBihs62yVOUixFbyKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAkQ2D2O%2FgOcexPnIq3AOUlhWMYo7ITlzFJLMJkDu281mXcZKajmG68fO1mGFo%2Fj%2FcSGE386es8YFfxRCK23zkhxSrUy8CKi%2BAL1nZuIZ8amH3X%2BcaHiMahIaHnR2s1qb2FZrrLD%2B%2FOnCAzME8DYFXhoKDGwEzfaGTvvFn7%2FbXfurP3u6tS1y347fXzrW0VqcoAnttDaIgWZ3orKIEcvlzkj%2BDXLM9xnR2UKRYXq5CLgzDieR3bqQbfK4xRK%2BGgd62dEGb0cCkBhGGXohfCy4jWfY1gRI1lZY6XKS%2BsBBS2dXBFMoEgMXhyhcMubJSplUk8uIGozn9lbMMVdonF8UCbrEOCwipa0S2IDrG7%2F4YcUS2tWgvW47PadY8%2F6GZ%2F1Dnq%2BClWvP47MA9Ah8erLjrPu6ppQWmpVeSUSMy%2BRUuAMXKRQGjSC892WBQyvgD%2F%2FcYdn9oHZuApZObI7tCBotsGzikuQIi5Fwo7H07r5evCLrUHBYOkTqMWGBHTjvKRIDP%2Bbr3dMtOlkbyjcMBPGEfIaxPjFNkjExg1jSIiVlCGmudFxcsA6UYGxicAeuA1OUF7f43NNfprkGZ9YpdWm41n9WKOowFRRw1bIIj9R84JC2cavzrCiMWEVIYlDmdykJwpENghDkwSXZw3zCW1%2BTEBjqkAePptJj9SyBb91MCFrSANdyF1%2F5Q%2F%2FnhLvR8WxUVZVtpe7s%2BoNmutZwMtxZqWOw47IejuJD%2BkC2vOPTm4%2Fe0Pvf%2BqoqrGEekRCiVJWWVC1ZLFoKXvcIzwgsUiiyK6n1mOViJqO6SkLYjJqutXI08Y74nZtytKLBAcxN%2BceNLFWdbgDgF8BLQwbJ%2F%2B8%2BjFV%2Bz5cPMQJul%2Ft3o4BdXGWWATapyd1Cp&X-Amz-Signature=2ec59e8766609267a25b673036daeea9812d9b5fcc3cd6e5805b7418922b1204&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF4HLAJR%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi6I%2F5jM1lIS9Q3bmRjFLvEzJLKuXKERohMPkBxHgEowIhAOPy7ffOVmX1xoKQqHDjVDqYjRBdBBihs62yVOUixFbyKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAkQ2D2O%2FgOcexPnIq3AOUlhWMYo7ITlzFJLMJkDu281mXcZKajmG68fO1mGFo%2Fj%2FcSGE386es8YFfxRCK23zkhxSrUy8CKi%2BAL1nZuIZ8amH3X%2BcaHiMahIaHnR2s1qb2FZrrLD%2B%2FOnCAzME8DYFXhoKDGwEzfaGTvvFn7%2FbXfurP3u6tS1y347fXzrW0VqcoAnttDaIgWZ3orKIEcvlzkj%2BDXLM9xnR2UKRYXq5CLgzDieR3bqQbfK4xRK%2BGgd62dEGb0cCkBhGGXohfCy4jWfY1gRI1lZY6XKS%2BsBBS2dXBFMoEgMXhyhcMubJSplUk8uIGozn9lbMMVdonF8UCbrEOCwipa0S2IDrG7%2F4YcUS2tWgvW47PadY8%2F6GZ%2F1Dnq%2BClWvP47MA9Ah8erLjrPu6ppQWmpVeSUSMy%2BRUuAMXKRQGjSC892WBQyvgD%2F%2FcYdn9oHZuApZObI7tCBotsGzikuQIi5Fwo7H07r5evCLrUHBYOkTqMWGBHTjvKRIDP%2Bbr3dMtOlkbyjcMBPGEfIaxPjFNkjExg1jSIiVlCGmudFxcsA6UYGxicAeuA1OUF7f43NNfprkGZ9YpdWm41n9WKOowFRRw1bIIj9R84JC2cavzrCiMWEVIYlDmdykJwpENghDkwSXZw3zCW1%2BTEBjqkAePptJj9SyBb91MCFrSANdyF1%2F5Q%2F%2FnhLvR8WxUVZVtpe7s%2BoNmutZwMtxZqWOw47IejuJD%2BkC2vOPTm4%2Fe0Pvf%2BqoqrGEekRCiVJWWVC1ZLFoKXvcIzwgsUiiyK6n1mOViJqO6SkLYjJqutXI08Y74nZtytKLBAcxN%2BceNLFWdbgDgF8BLQwbJ%2F%2B8%2BjFV%2Bz5cPMQJul%2Ft3o4BdXGWWATapyd1Cp&X-Amz-Signature=0044bb19f47dae0686f02682a84069360acb7d11753085fc9665cf1c71fd9e9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF4HLAJR%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi6I%2F5jM1lIS9Q3bmRjFLvEzJLKuXKERohMPkBxHgEowIhAOPy7ffOVmX1xoKQqHDjVDqYjRBdBBihs62yVOUixFbyKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAkQ2D2O%2FgOcexPnIq3AOUlhWMYo7ITlzFJLMJkDu281mXcZKajmG68fO1mGFo%2Fj%2FcSGE386es8YFfxRCK23zkhxSrUy8CKi%2BAL1nZuIZ8amH3X%2BcaHiMahIaHnR2s1qb2FZrrLD%2B%2FOnCAzME8DYFXhoKDGwEzfaGTvvFn7%2FbXfurP3u6tS1y347fXzrW0VqcoAnttDaIgWZ3orKIEcvlzkj%2BDXLM9xnR2UKRYXq5CLgzDieR3bqQbfK4xRK%2BGgd62dEGb0cCkBhGGXohfCy4jWfY1gRI1lZY6XKS%2BsBBS2dXBFMoEgMXhyhcMubJSplUk8uIGozn9lbMMVdonF8UCbrEOCwipa0S2IDrG7%2F4YcUS2tWgvW47PadY8%2F6GZ%2F1Dnq%2BClWvP47MA9Ah8erLjrPu6ppQWmpVeSUSMy%2BRUuAMXKRQGjSC892WBQyvgD%2F%2FcYdn9oHZuApZObI7tCBotsGzikuQIi5Fwo7H07r5evCLrUHBYOkTqMWGBHTjvKRIDP%2Bbr3dMtOlkbyjcMBPGEfIaxPjFNkjExg1jSIiVlCGmudFxcsA6UYGxicAeuA1OUF7f43NNfprkGZ9YpdWm41n9WKOowFRRw1bIIj9R84JC2cavzrCiMWEVIYlDmdykJwpENghDkwSXZw3zCW1%2BTEBjqkAePptJj9SyBb91MCFrSANdyF1%2F5Q%2F%2FnhLvR8WxUVZVtpe7s%2BoNmutZwMtxZqWOw47IejuJD%2BkC2vOPTm4%2Fe0Pvf%2BqoqrGEekRCiVJWWVC1ZLFoKXvcIzwgsUiiyK6n1mOViJqO6SkLYjJqutXI08Y74nZtytKLBAcxN%2BceNLFWdbgDgF8BLQwbJ%2F%2B8%2BjFV%2Bz5cPMQJul%2Ft3o4BdXGWWATapyd1Cp&X-Amz-Signature=8ad1a40e2776fb7fc3bb7812491298c37f59a5e9c6d9cabcfb08a8037817f060&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF4HLAJR%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi6I%2F5jM1lIS9Q3bmRjFLvEzJLKuXKERohMPkBxHgEowIhAOPy7ffOVmX1xoKQqHDjVDqYjRBdBBihs62yVOUixFbyKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAkQ2D2O%2FgOcexPnIq3AOUlhWMYo7ITlzFJLMJkDu281mXcZKajmG68fO1mGFo%2Fj%2FcSGE386es8YFfxRCK23zkhxSrUy8CKi%2BAL1nZuIZ8amH3X%2BcaHiMahIaHnR2s1qb2FZrrLD%2B%2FOnCAzME8DYFXhoKDGwEzfaGTvvFn7%2FbXfurP3u6tS1y347fXzrW0VqcoAnttDaIgWZ3orKIEcvlzkj%2BDXLM9xnR2UKRYXq5CLgzDieR3bqQbfK4xRK%2BGgd62dEGb0cCkBhGGXohfCy4jWfY1gRI1lZY6XKS%2BsBBS2dXBFMoEgMXhyhcMubJSplUk8uIGozn9lbMMVdonF8UCbrEOCwipa0S2IDrG7%2F4YcUS2tWgvW47PadY8%2F6GZ%2F1Dnq%2BClWvP47MA9Ah8erLjrPu6ppQWmpVeSUSMy%2BRUuAMXKRQGjSC892WBQyvgD%2F%2FcYdn9oHZuApZObI7tCBotsGzikuQIi5Fwo7H07r5evCLrUHBYOkTqMWGBHTjvKRIDP%2Bbr3dMtOlkbyjcMBPGEfIaxPjFNkjExg1jSIiVlCGmudFxcsA6UYGxicAeuA1OUF7f43NNfprkGZ9YpdWm41n9WKOowFRRw1bIIj9R84JC2cavzrCiMWEVIYlDmdykJwpENghDkwSXZw3zCW1%2BTEBjqkAePptJj9SyBb91MCFrSANdyF1%2F5Q%2F%2FnhLvR8WxUVZVtpe7s%2BoNmutZwMtxZqWOw47IejuJD%2BkC2vOPTm4%2Fe0Pvf%2BqoqrGEekRCiVJWWVC1ZLFoKXvcIzwgsUiiyK6n1mOViJqO6SkLYjJqutXI08Y74nZtytKLBAcxN%2BceNLFWdbgDgF8BLQwbJ%2F%2B8%2BjFV%2Bz5cPMQJul%2Ft3o4BdXGWWATapyd1Cp&X-Amz-Signature=88a758313b73cc26175bc95f7b95bf2651a3c32b232c1259a4b4c93e2f2a37a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF4HLAJR%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi6I%2F5jM1lIS9Q3bmRjFLvEzJLKuXKERohMPkBxHgEowIhAOPy7ffOVmX1xoKQqHDjVDqYjRBdBBihs62yVOUixFbyKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAkQ2D2O%2FgOcexPnIq3AOUlhWMYo7ITlzFJLMJkDu281mXcZKajmG68fO1mGFo%2Fj%2FcSGE386es8YFfxRCK23zkhxSrUy8CKi%2BAL1nZuIZ8amH3X%2BcaHiMahIaHnR2s1qb2FZrrLD%2B%2FOnCAzME8DYFXhoKDGwEzfaGTvvFn7%2FbXfurP3u6tS1y347fXzrW0VqcoAnttDaIgWZ3orKIEcvlzkj%2BDXLM9xnR2UKRYXq5CLgzDieR3bqQbfK4xRK%2BGgd62dEGb0cCkBhGGXohfCy4jWfY1gRI1lZY6XKS%2BsBBS2dXBFMoEgMXhyhcMubJSplUk8uIGozn9lbMMVdonF8UCbrEOCwipa0S2IDrG7%2F4YcUS2tWgvW47PadY8%2F6GZ%2F1Dnq%2BClWvP47MA9Ah8erLjrPu6ppQWmpVeSUSMy%2BRUuAMXKRQGjSC892WBQyvgD%2F%2FcYdn9oHZuApZObI7tCBotsGzikuQIi5Fwo7H07r5evCLrUHBYOkTqMWGBHTjvKRIDP%2Bbr3dMtOlkbyjcMBPGEfIaxPjFNkjExg1jSIiVlCGmudFxcsA6UYGxicAeuA1OUF7f43NNfprkGZ9YpdWm41n9WKOowFRRw1bIIj9R84JC2cavzrCiMWEVIYlDmdykJwpENghDkwSXZw3zCW1%2BTEBjqkAePptJj9SyBb91MCFrSANdyF1%2F5Q%2F%2FnhLvR8WxUVZVtpe7s%2BoNmutZwMtxZqWOw47IejuJD%2BkC2vOPTm4%2Fe0Pvf%2BqoqrGEekRCiVJWWVC1ZLFoKXvcIzwgsUiiyK6n1mOViJqO6SkLYjJqutXI08Y74nZtytKLBAcxN%2BceNLFWdbgDgF8BLQwbJ%2F%2B8%2BjFV%2Bz5cPMQJul%2Ft3o4BdXGWWATapyd1Cp&X-Amz-Signature=434f90d70eeaaddc9ced89f81af1aa8868abf344e4c7a46e9773ca298b447066&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF4HLAJR%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi6I%2F5jM1lIS9Q3bmRjFLvEzJLKuXKERohMPkBxHgEowIhAOPy7ffOVmX1xoKQqHDjVDqYjRBdBBihs62yVOUixFbyKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAkQ2D2O%2FgOcexPnIq3AOUlhWMYo7ITlzFJLMJkDu281mXcZKajmG68fO1mGFo%2Fj%2FcSGE386es8YFfxRCK23zkhxSrUy8CKi%2BAL1nZuIZ8amH3X%2BcaHiMahIaHnR2s1qb2FZrrLD%2B%2FOnCAzME8DYFXhoKDGwEzfaGTvvFn7%2FbXfurP3u6tS1y347fXzrW0VqcoAnttDaIgWZ3orKIEcvlzkj%2BDXLM9xnR2UKRYXq5CLgzDieR3bqQbfK4xRK%2BGgd62dEGb0cCkBhGGXohfCy4jWfY1gRI1lZY6XKS%2BsBBS2dXBFMoEgMXhyhcMubJSplUk8uIGozn9lbMMVdonF8UCbrEOCwipa0S2IDrG7%2F4YcUS2tWgvW47PadY8%2F6GZ%2F1Dnq%2BClWvP47MA9Ah8erLjrPu6ppQWmpVeSUSMy%2BRUuAMXKRQGjSC892WBQyvgD%2F%2FcYdn9oHZuApZObI7tCBotsGzikuQIi5Fwo7H07r5evCLrUHBYOkTqMWGBHTjvKRIDP%2Bbr3dMtOlkbyjcMBPGEfIaxPjFNkjExg1jSIiVlCGmudFxcsA6UYGxicAeuA1OUF7f43NNfprkGZ9YpdWm41n9WKOowFRRw1bIIj9R84JC2cavzrCiMWEVIYlDmdykJwpENghDkwSXZw3zCW1%2BTEBjqkAePptJj9SyBb91MCFrSANdyF1%2F5Q%2F%2FnhLvR8WxUVZVtpe7s%2BoNmutZwMtxZqWOw47IejuJD%2BkC2vOPTm4%2Fe0Pvf%2BqoqrGEekRCiVJWWVC1ZLFoKXvcIzwgsUiiyK6n1mOViJqO6SkLYjJqutXI08Y74nZtytKLBAcxN%2BceNLFWdbgDgF8BLQwbJ%2F%2B8%2BjFV%2Bz5cPMQJul%2Ft3o4BdXGWWATapyd1Cp&X-Amz-Signature=8a7da60fcc7392dd213262f6428ada45007d20ddb49adaa55dfb4a280355fa9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF4HLAJR%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi6I%2F5jM1lIS9Q3bmRjFLvEzJLKuXKERohMPkBxHgEowIhAOPy7ffOVmX1xoKQqHDjVDqYjRBdBBihs62yVOUixFbyKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAkQ2D2O%2FgOcexPnIq3AOUlhWMYo7ITlzFJLMJkDu281mXcZKajmG68fO1mGFo%2Fj%2FcSGE386es8YFfxRCK23zkhxSrUy8CKi%2BAL1nZuIZ8amH3X%2BcaHiMahIaHnR2s1qb2FZrrLD%2B%2FOnCAzME8DYFXhoKDGwEzfaGTvvFn7%2FbXfurP3u6tS1y347fXzrW0VqcoAnttDaIgWZ3orKIEcvlzkj%2BDXLM9xnR2UKRYXq5CLgzDieR3bqQbfK4xRK%2BGgd62dEGb0cCkBhGGXohfCy4jWfY1gRI1lZY6XKS%2BsBBS2dXBFMoEgMXhyhcMubJSplUk8uIGozn9lbMMVdonF8UCbrEOCwipa0S2IDrG7%2F4YcUS2tWgvW47PadY8%2F6GZ%2F1Dnq%2BClWvP47MA9Ah8erLjrPu6ppQWmpVeSUSMy%2BRUuAMXKRQGjSC892WBQyvgD%2F%2FcYdn9oHZuApZObI7tCBotsGzikuQIi5Fwo7H07r5evCLrUHBYOkTqMWGBHTjvKRIDP%2Bbr3dMtOlkbyjcMBPGEfIaxPjFNkjExg1jSIiVlCGmudFxcsA6UYGxicAeuA1OUF7f43NNfprkGZ9YpdWm41n9WKOowFRRw1bIIj9R84JC2cavzrCiMWEVIYlDmdykJwpENghDkwSXZw3zCW1%2BTEBjqkAePptJj9SyBb91MCFrSANdyF1%2F5Q%2F%2FnhLvR8WxUVZVtpe7s%2BoNmutZwMtxZqWOw47IejuJD%2BkC2vOPTm4%2Fe0Pvf%2BqoqrGEekRCiVJWWVC1ZLFoKXvcIzwgsUiiyK6n1mOViJqO6SkLYjJqutXI08Y74nZtytKLBAcxN%2BceNLFWdbgDgF8BLQwbJ%2F%2B8%2BjFV%2Bz5cPMQJul%2Ft3o4BdXGWWATapyd1Cp&X-Amz-Signature=ccfe0be05d3ed746ff4a6209fc29f1f125049acf6f23ff415da6daff08fe75ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF4HLAJR%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi6I%2F5jM1lIS9Q3bmRjFLvEzJLKuXKERohMPkBxHgEowIhAOPy7ffOVmX1xoKQqHDjVDqYjRBdBBihs62yVOUixFbyKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAkQ2D2O%2FgOcexPnIq3AOUlhWMYo7ITlzFJLMJkDu281mXcZKajmG68fO1mGFo%2Fj%2FcSGE386es8YFfxRCK23zkhxSrUy8CKi%2BAL1nZuIZ8amH3X%2BcaHiMahIaHnR2s1qb2FZrrLD%2B%2FOnCAzME8DYFXhoKDGwEzfaGTvvFn7%2FbXfurP3u6tS1y347fXzrW0VqcoAnttDaIgWZ3orKIEcvlzkj%2BDXLM9xnR2UKRYXq5CLgzDieR3bqQbfK4xRK%2BGgd62dEGb0cCkBhGGXohfCy4jWfY1gRI1lZY6XKS%2BsBBS2dXBFMoEgMXhyhcMubJSplUk8uIGozn9lbMMVdonF8UCbrEOCwipa0S2IDrG7%2F4YcUS2tWgvW47PadY8%2F6GZ%2F1Dnq%2BClWvP47MA9Ah8erLjrPu6ppQWmpVeSUSMy%2BRUuAMXKRQGjSC892WBQyvgD%2F%2FcYdn9oHZuApZObI7tCBotsGzikuQIi5Fwo7H07r5evCLrUHBYOkTqMWGBHTjvKRIDP%2Bbr3dMtOlkbyjcMBPGEfIaxPjFNkjExg1jSIiVlCGmudFxcsA6UYGxicAeuA1OUF7f43NNfprkGZ9YpdWm41n9WKOowFRRw1bIIj9R84JC2cavzrCiMWEVIYlDmdykJwpENghDkwSXZw3zCW1%2BTEBjqkAePptJj9SyBb91MCFrSANdyF1%2F5Q%2F%2FnhLvR8WxUVZVtpe7s%2BoNmutZwMtxZqWOw47IejuJD%2BkC2vOPTm4%2Fe0Pvf%2BqoqrGEekRCiVJWWVC1ZLFoKXvcIzwgsUiiyK6n1mOViJqO6SkLYjJqutXI08Y74nZtytKLBAcxN%2BceNLFWdbgDgF8BLQwbJ%2F%2B8%2BjFV%2Bz5cPMQJul%2Ft3o4BdXGWWATapyd1Cp&X-Amz-Signature=d6fc468afb4055ba4e4943bb1a5bfe96da00ecc24d8832d6912c8137560c2813&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF4HLAJR%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi6I%2F5jM1lIS9Q3bmRjFLvEzJLKuXKERohMPkBxHgEowIhAOPy7ffOVmX1xoKQqHDjVDqYjRBdBBihs62yVOUixFbyKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAkQ2D2O%2FgOcexPnIq3AOUlhWMYo7ITlzFJLMJkDu281mXcZKajmG68fO1mGFo%2Fj%2FcSGE386es8YFfxRCK23zkhxSrUy8CKi%2BAL1nZuIZ8amH3X%2BcaHiMahIaHnR2s1qb2FZrrLD%2B%2FOnCAzME8DYFXhoKDGwEzfaGTvvFn7%2FbXfurP3u6tS1y347fXzrW0VqcoAnttDaIgWZ3orKIEcvlzkj%2BDXLM9xnR2UKRYXq5CLgzDieR3bqQbfK4xRK%2BGgd62dEGb0cCkBhGGXohfCy4jWfY1gRI1lZY6XKS%2BsBBS2dXBFMoEgMXhyhcMubJSplUk8uIGozn9lbMMVdonF8UCbrEOCwipa0S2IDrG7%2F4YcUS2tWgvW47PadY8%2F6GZ%2F1Dnq%2BClWvP47MA9Ah8erLjrPu6ppQWmpVeSUSMy%2BRUuAMXKRQGjSC892WBQyvgD%2F%2FcYdn9oHZuApZObI7tCBotsGzikuQIi5Fwo7H07r5evCLrUHBYOkTqMWGBHTjvKRIDP%2Bbr3dMtOlkbyjcMBPGEfIaxPjFNkjExg1jSIiVlCGmudFxcsA6UYGxicAeuA1OUF7f43NNfprkGZ9YpdWm41n9WKOowFRRw1bIIj9R84JC2cavzrCiMWEVIYlDmdykJwpENghDkwSXZw3zCW1%2BTEBjqkAePptJj9SyBb91MCFrSANdyF1%2F5Q%2F%2FnhLvR8WxUVZVtpe7s%2BoNmutZwMtxZqWOw47IejuJD%2BkC2vOPTm4%2Fe0Pvf%2BqoqrGEekRCiVJWWVC1ZLFoKXvcIzwgsUiiyK6n1mOViJqO6SkLYjJqutXI08Y74nZtytKLBAcxN%2BceNLFWdbgDgF8BLQwbJ%2F%2B8%2BjFV%2Bz5cPMQJul%2Ft3o4BdXGWWATapyd1Cp&X-Amz-Signature=9c82695f5f722405fd2e88a96266c4d1e64132b7687c229c8fdc397938f0fc11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF4HLAJR%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi6I%2F5jM1lIS9Q3bmRjFLvEzJLKuXKERohMPkBxHgEowIhAOPy7ffOVmX1xoKQqHDjVDqYjRBdBBihs62yVOUixFbyKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAkQ2D2O%2FgOcexPnIq3AOUlhWMYo7ITlzFJLMJkDu281mXcZKajmG68fO1mGFo%2Fj%2FcSGE386es8YFfxRCK23zkhxSrUy8CKi%2BAL1nZuIZ8amH3X%2BcaHiMahIaHnR2s1qb2FZrrLD%2B%2FOnCAzME8DYFXhoKDGwEzfaGTvvFn7%2FbXfurP3u6tS1y347fXzrW0VqcoAnttDaIgWZ3orKIEcvlzkj%2BDXLM9xnR2UKRYXq5CLgzDieR3bqQbfK4xRK%2BGgd62dEGb0cCkBhGGXohfCy4jWfY1gRI1lZY6XKS%2BsBBS2dXBFMoEgMXhyhcMubJSplUk8uIGozn9lbMMVdonF8UCbrEOCwipa0S2IDrG7%2F4YcUS2tWgvW47PadY8%2F6GZ%2F1Dnq%2BClWvP47MA9Ah8erLjrPu6ppQWmpVeSUSMy%2BRUuAMXKRQGjSC892WBQyvgD%2F%2FcYdn9oHZuApZObI7tCBotsGzikuQIi5Fwo7H07r5evCLrUHBYOkTqMWGBHTjvKRIDP%2Bbr3dMtOlkbyjcMBPGEfIaxPjFNkjExg1jSIiVlCGmudFxcsA6UYGxicAeuA1OUF7f43NNfprkGZ9YpdWm41n9WKOowFRRw1bIIj9R84JC2cavzrCiMWEVIYlDmdykJwpENghDkwSXZw3zCW1%2BTEBjqkAePptJj9SyBb91MCFrSANdyF1%2F5Q%2F%2FnhLvR8WxUVZVtpe7s%2BoNmutZwMtxZqWOw47IejuJD%2BkC2vOPTm4%2Fe0Pvf%2BqoqrGEekRCiVJWWVC1ZLFoKXvcIzwgsUiiyK6n1mOViJqO6SkLYjJqutXI08Y74nZtytKLBAcxN%2BceNLFWdbgDgF8BLQwbJ%2F%2B8%2BjFV%2Bz5cPMQJul%2Ft3o4BdXGWWATapyd1Cp&X-Amz-Signature=0af62f23dd21bf79de264eb58542662efcbd97553e3efe5605e23b2ee4d3e0ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF4HLAJR%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi6I%2F5jM1lIS9Q3bmRjFLvEzJLKuXKERohMPkBxHgEowIhAOPy7ffOVmX1xoKQqHDjVDqYjRBdBBihs62yVOUixFbyKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAkQ2D2O%2FgOcexPnIq3AOUlhWMYo7ITlzFJLMJkDu281mXcZKajmG68fO1mGFo%2Fj%2FcSGE386es8YFfxRCK23zkhxSrUy8CKi%2BAL1nZuIZ8amH3X%2BcaHiMahIaHnR2s1qb2FZrrLD%2B%2FOnCAzME8DYFXhoKDGwEzfaGTvvFn7%2FbXfurP3u6tS1y347fXzrW0VqcoAnttDaIgWZ3orKIEcvlzkj%2BDXLM9xnR2UKRYXq5CLgzDieR3bqQbfK4xRK%2BGgd62dEGb0cCkBhGGXohfCy4jWfY1gRI1lZY6XKS%2BsBBS2dXBFMoEgMXhyhcMubJSplUk8uIGozn9lbMMVdonF8UCbrEOCwipa0S2IDrG7%2F4YcUS2tWgvW47PadY8%2F6GZ%2F1Dnq%2BClWvP47MA9Ah8erLjrPu6ppQWmpVeSUSMy%2BRUuAMXKRQGjSC892WBQyvgD%2F%2FcYdn9oHZuApZObI7tCBotsGzikuQIi5Fwo7H07r5evCLrUHBYOkTqMWGBHTjvKRIDP%2Bbr3dMtOlkbyjcMBPGEfIaxPjFNkjExg1jSIiVlCGmudFxcsA6UYGxicAeuA1OUF7f43NNfprkGZ9YpdWm41n9WKOowFRRw1bIIj9R84JC2cavzrCiMWEVIYlDmdykJwpENghDkwSXZw3zCW1%2BTEBjqkAePptJj9SyBb91MCFrSANdyF1%2F5Q%2F%2FnhLvR8WxUVZVtpe7s%2BoNmutZwMtxZqWOw47IejuJD%2BkC2vOPTm4%2Fe0Pvf%2BqoqrGEekRCiVJWWVC1ZLFoKXvcIzwgsUiiyK6n1mOViJqO6SkLYjJqutXI08Y74nZtytKLBAcxN%2BceNLFWdbgDgF8BLQwbJ%2F%2B8%2BjFV%2Bz5cPMQJul%2Ft3o4BdXGWWATapyd1Cp&X-Amz-Signature=43f08fbc0685b3631dbdfe785e8c1746a83d49d09905fbf1c617209646c35428&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF4HLAJR%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi6I%2F5jM1lIS9Q3bmRjFLvEzJLKuXKERohMPkBxHgEowIhAOPy7ffOVmX1xoKQqHDjVDqYjRBdBBihs62yVOUixFbyKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAkQ2D2O%2FgOcexPnIq3AOUlhWMYo7ITlzFJLMJkDu281mXcZKajmG68fO1mGFo%2Fj%2FcSGE386es8YFfxRCK23zkhxSrUy8CKi%2BAL1nZuIZ8amH3X%2BcaHiMahIaHnR2s1qb2FZrrLD%2B%2FOnCAzME8DYFXhoKDGwEzfaGTvvFn7%2FbXfurP3u6tS1y347fXzrW0VqcoAnttDaIgWZ3orKIEcvlzkj%2BDXLM9xnR2UKRYXq5CLgzDieR3bqQbfK4xRK%2BGgd62dEGb0cCkBhGGXohfCy4jWfY1gRI1lZY6XKS%2BsBBS2dXBFMoEgMXhyhcMubJSplUk8uIGozn9lbMMVdonF8UCbrEOCwipa0S2IDrG7%2F4YcUS2tWgvW47PadY8%2F6GZ%2F1Dnq%2BClWvP47MA9Ah8erLjrPu6ppQWmpVeSUSMy%2BRUuAMXKRQGjSC892WBQyvgD%2F%2FcYdn9oHZuApZObI7tCBotsGzikuQIi5Fwo7H07r5evCLrUHBYOkTqMWGBHTjvKRIDP%2Bbr3dMtOlkbyjcMBPGEfIaxPjFNkjExg1jSIiVlCGmudFxcsA6UYGxicAeuA1OUF7f43NNfprkGZ9YpdWm41n9WKOowFRRw1bIIj9R84JC2cavzrCiMWEVIYlDmdykJwpENghDkwSXZw3zCW1%2BTEBjqkAePptJj9SyBb91MCFrSANdyF1%2F5Q%2F%2FnhLvR8WxUVZVtpe7s%2BoNmutZwMtxZqWOw47IejuJD%2BkC2vOPTm4%2Fe0Pvf%2BqoqrGEekRCiVJWWVC1ZLFoKXvcIzwgsUiiyK6n1mOViJqO6SkLYjJqutXI08Y74nZtytKLBAcxN%2BceNLFWdbgDgF8BLQwbJ%2F%2B8%2BjFV%2Bz5cPMQJul%2Ft3o4BdXGWWATapyd1Cp&X-Amz-Signature=c11843a5f27c455f374bd78e014f8abed70aa50067457f773e664fae91f749fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
