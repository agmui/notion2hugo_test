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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNTCGEN7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIA99CUsqurFW4AaW7UkcwYA%2FXaqkFbqFXJz6kpVDleDMAiAKJhXo9ts1NIo9w1NWa5cAwaDpH5lc7Vg07%2F4VNOj33Sr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMBU4xaQwsCao3XL6QKtwD684hRFwZrud52xbc%2F46cfvGEIZxZ68TJrZ9vBqHMrii1GYXes1H3XF9owPVpyD3evKnrG%2FnkEQsQswSTI52EWDe8UmuWg%2FES1Qn0AB8bxA7p8LnZ%2BjHleGQ%2BTsiwljKicoupCSL8wnshLcH0ImunmU4%2FdQP4bkYNXm4%2Br%2Fx870K4xGwaXUqrb3TJkBFdj9aKd3Und4s82PgttMrJHTF0G9oOq1HO36hVNuul0xvvUW31PDvLBmJ8LYyNmZ1czkLFsDTxA8diC5coCoQbi%2FOAs%2FcTbUd4MEqwo9KtcKWo2sfKXGJwnFsVtVN3HtL%2Bh%2F2KLPeQY1MHzUuPbPNgRN2JI9%2Bup%2F8tQU0UeYJUV0GTM3Lw1H3kw%2Frkdgg2MJ7CN0%2FvNqBLX0Ly6spOoXN67yG8%2BR%2BKhH%2BgafmzlFKaDX%2FBajNdlN8jUgSmMevucs4dIsE%2FRUNP2nhofM3Q%2BQQUYOt8GkIBPs2ztUQNF8f4RwCSDTPwGRZpZ1%2FsmQT3JestFl4bDOOAjOMFMTz742NMF1K9Ca40oF0a4%2F%2B%2Fz%2B5z5a35HtsgZeXvtHo7K1VYb%2F5h6CQV8pdE%2FMmKuAoFVl%2BJzlpcPITEyBGOZ7OLOglB79ooRLEpzIsXtoBd8x5AX8Ew19r9xAY6pgF2Wg12Dk3oavt3Oo2FikK36OZkT7C16Sz3GUblfdK56M%2FNftgIMHZAXeiG5yOuLyHCdv9Y940g8yuQklZrQc3OaZG6eE8gbrBodDuSF2N5evrgKtg75kjk%2FLxgzQX%2FU6s2u%2FJuLqpQ%2BrQDHPzhyOh9ggcLsJ3etsMMCbst4Yeh7u3gTvxS1n1W76dDfULthRa7ywRgoRtb5%2F408ZUZMZ10HS4u3419&X-Amz-Signature=faa2325767be9a07d99b551c940ec10ad28b0c9376234d826dd3862debbe3d6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNTCGEN7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIA99CUsqurFW4AaW7UkcwYA%2FXaqkFbqFXJz6kpVDleDMAiAKJhXo9ts1NIo9w1NWa5cAwaDpH5lc7Vg07%2F4VNOj33Sr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMBU4xaQwsCao3XL6QKtwD684hRFwZrud52xbc%2F46cfvGEIZxZ68TJrZ9vBqHMrii1GYXes1H3XF9owPVpyD3evKnrG%2FnkEQsQswSTI52EWDe8UmuWg%2FES1Qn0AB8bxA7p8LnZ%2BjHleGQ%2BTsiwljKicoupCSL8wnshLcH0ImunmU4%2FdQP4bkYNXm4%2Br%2Fx870K4xGwaXUqrb3TJkBFdj9aKd3Und4s82PgttMrJHTF0G9oOq1HO36hVNuul0xvvUW31PDvLBmJ8LYyNmZ1czkLFsDTxA8diC5coCoQbi%2FOAs%2FcTbUd4MEqwo9KtcKWo2sfKXGJwnFsVtVN3HtL%2Bh%2F2KLPeQY1MHzUuPbPNgRN2JI9%2Bup%2F8tQU0UeYJUV0GTM3Lw1H3kw%2Frkdgg2MJ7CN0%2FvNqBLX0Ly6spOoXN67yG8%2BR%2BKhH%2BgafmzlFKaDX%2FBajNdlN8jUgSmMevucs4dIsE%2FRUNP2nhofM3Q%2BQQUYOt8GkIBPs2ztUQNF8f4RwCSDTPwGRZpZ1%2FsmQT3JestFl4bDOOAjOMFMTz742NMF1K9Ca40oF0a4%2F%2B%2Fz%2B5z5a35HtsgZeXvtHo7K1VYb%2F5h6CQV8pdE%2FMmKuAoFVl%2BJzlpcPITEyBGOZ7OLOglB79ooRLEpzIsXtoBd8x5AX8Ew19r9xAY6pgF2Wg12Dk3oavt3Oo2FikK36OZkT7C16Sz3GUblfdK56M%2FNftgIMHZAXeiG5yOuLyHCdv9Y940g8yuQklZrQc3OaZG6eE8gbrBodDuSF2N5evrgKtg75kjk%2FLxgzQX%2FU6s2u%2FJuLqpQ%2BrQDHPzhyOh9ggcLsJ3etsMMCbst4Yeh7u3gTvxS1n1W76dDfULthRa7ywRgoRtb5%2F408ZUZMZ10HS4u3419&X-Amz-Signature=d05c1672d2b3f3996638c99579430e951229ad2abf917592b21cdecfddd24426&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNTCGEN7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIA99CUsqurFW4AaW7UkcwYA%2FXaqkFbqFXJz6kpVDleDMAiAKJhXo9ts1NIo9w1NWa5cAwaDpH5lc7Vg07%2F4VNOj33Sr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMBU4xaQwsCao3XL6QKtwD684hRFwZrud52xbc%2F46cfvGEIZxZ68TJrZ9vBqHMrii1GYXes1H3XF9owPVpyD3evKnrG%2FnkEQsQswSTI52EWDe8UmuWg%2FES1Qn0AB8bxA7p8LnZ%2BjHleGQ%2BTsiwljKicoupCSL8wnshLcH0ImunmU4%2FdQP4bkYNXm4%2Br%2Fx870K4xGwaXUqrb3TJkBFdj9aKd3Und4s82PgttMrJHTF0G9oOq1HO36hVNuul0xvvUW31PDvLBmJ8LYyNmZ1czkLFsDTxA8diC5coCoQbi%2FOAs%2FcTbUd4MEqwo9KtcKWo2sfKXGJwnFsVtVN3HtL%2Bh%2F2KLPeQY1MHzUuPbPNgRN2JI9%2Bup%2F8tQU0UeYJUV0GTM3Lw1H3kw%2Frkdgg2MJ7CN0%2FvNqBLX0Ly6spOoXN67yG8%2BR%2BKhH%2BgafmzlFKaDX%2FBajNdlN8jUgSmMevucs4dIsE%2FRUNP2nhofM3Q%2BQQUYOt8GkIBPs2ztUQNF8f4RwCSDTPwGRZpZ1%2FsmQT3JestFl4bDOOAjOMFMTz742NMF1K9Ca40oF0a4%2F%2B%2Fz%2B5z5a35HtsgZeXvtHo7K1VYb%2F5h6CQV8pdE%2FMmKuAoFVl%2BJzlpcPITEyBGOZ7OLOglB79ooRLEpzIsXtoBd8x5AX8Ew19r9xAY6pgF2Wg12Dk3oavt3Oo2FikK36OZkT7C16Sz3GUblfdK56M%2FNftgIMHZAXeiG5yOuLyHCdv9Y940g8yuQklZrQc3OaZG6eE8gbrBodDuSF2N5evrgKtg75kjk%2FLxgzQX%2FU6s2u%2FJuLqpQ%2BrQDHPzhyOh9ggcLsJ3etsMMCbst4Yeh7u3gTvxS1n1W76dDfULthRa7ywRgoRtb5%2F408ZUZMZ10HS4u3419&X-Amz-Signature=f3fe8b304c83cd026417dbc54a96b4f3c78975ccee0e24d39ee47030ead933c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNTCGEN7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIA99CUsqurFW4AaW7UkcwYA%2FXaqkFbqFXJz6kpVDleDMAiAKJhXo9ts1NIo9w1NWa5cAwaDpH5lc7Vg07%2F4VNOj33Sr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMBU4xaQwsCao3XL6QKtwD684hRFwZrud52xbc%2F46cfvGEIZxZ68TJrZ9vBqHMrii1GYXes1H3XF9owPVpyD3evKnrG%2FnkEQsQswSTI52EWDe8UmuWg%2FES1Qn0AB8bxA7p8LnZ%2BjHleGQ%2BTsiwljKicoupCSL8wnshLcH0ImunmU4%2FdQP4bkYNXm4%2Br%2Fx870K4xGwaXUqrb3TJkBFdj9aKd3Und4s82PgttMrJHTF0G9oOq1HO36hVNuul0xvvUW31PDvLBmJ8LYyNmZ1czkLFsDTxA8diC5coCoQbi%2FOAs%2FcTbUd4MEqwo9KtcKWo2sfKXGJwnFsVtVN3HtL%2Bh%2F2KLPeQY1MHzUuPbPNgRN2JI9%2Bup%2F8tQU0UeYJUV0GTM3Lw1H3kw%2Frkdgg2MJ7CN0%2FvNqBLX0Ly6spOoXN67yG8%2BR%2BKhH%2BgafmzlFKaDX%2FBajNdlN8jUgSmMevucs4dIsE%2FRUNP2nhofM3Q%2BQQUYOt8GkIBPs2ztUQNF8f4RwCSDTPwGRZpZ1%2FsmQT3JestFl4bDOOAjOMFMTz742NMF1K9Ca40oF0a4%2F%2B%2Fz%2B5z5a35HtsgZeXvtHo7K1VYb%2F5h6CQV8pdE%2FMmKuAoFVl%2BJzlpcPITEyBGOZ7OLOglB79ooRLEpzIsXtoBd8x5AX8Ew19r9xAY6pgF2Wg12Dk3oavt3Oo2FikK36OZkT7C16Sz3GUblfdK56M%2FNftgIMHZAXeiG5yOuLyHCdv9Y940g8yuQklZrQc3OaZG6eE8gbrBodDuSF2N5evrgKtg75kjk%2FLxgzQX%2FU6s2u%2FJuLqpQ%2BrQDHPzhyOh9ggcLsJ3etsMMCbst4Yeh7u3gTvxS1n1W76dDfULthRa7ywRgoRtb5%2F408ZUZMZ10HS4u3419&X-Amz-Signature=5812025b6e01461b268f64211e22d082c1d6126d36151db83ac19dc931753546&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNTCGEN7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIA99CUsqurFW4AaW7UkcwYA%2FXaqkFbqFXJz6kpVDleDMAiAKJhXo9ts1NIo9w1NWa5cAwaDpH5lc7Vg07%2F4VNOj33Sr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMBU4xaQwsCao3XL6QKtwD684hRFwZrud52xbc%2F46cfvGEIZxZ68TJrZ9vBqHMrii1GYXes1H3XF9owPVpyD3evKnrG%2FnkEQsQswSTI52EWDe8UmuWg%2FES1Qn0AB8bxA7p8LnZ%2BjHleGQ%2BTsiwljKicoupCSL8wnshLcH0ImunmU4%2FdQP4bkYNXm4%2Br%2Fx870K4xGwaXUqrb3TJkBFdj9aKd3Und4s82PgttMrJHTF0G9oOq1HO36hVNuul0xvvUW31PDvLBmJ8LYyNmZ1czkLFsDTxA8diC5coCoQbi%2FOAs%2FcTbUd4MEqwo9KtcKWo2sfKXGJwnFsVtVN3HtL%2Bh%2F2KLPeQY1MHzUuPbPNgRN2JI9%2Bup%2F8tQU0UeYJUV0GTM3Lw1H3kw%2Frkdgg2MJ7CN0%2FvNqBLX0Ly6spOoXN67yG8%2BR%2BKhH%2BgafmzlFKaDX%2FBajNdlN8jUgSmMevucs4dIsE%2FRUNP2nhofM3Q%2BQQUYOt8GkIBPs2ztUQNF8f4RwCSDTPwGRZpZ1%2FsmQT3JestFl4bDOOAjOMFMTz742NMF1K9Ca40oF0a4%2F%2B%2Fz%2B5z5a35HtsgZeXvtHo7K1VYb%2F5h6CQV8pdE%2FMmKuAoFVl%2BJzlpcPITEyBGOZ7OLOglB79ooRLEpzIsXtoBd8x5AX8Ew19r9xAY6pgF2Wg12Dk3oavt3Oo2FikK36OZkT7C16Sz3GUblfdK56M%2FNftgIMHZAXeiG5yOuLyHCdv9Y940g8yuQklZrQc3OaZG6eE8gbrBodDuSF2N5evrgKtg75kjk%2FLxgzQX%2FU6s2u%2FJuLqpQ%2BrQDHPzhyOh9ggcLsJ3etsMMCbst4Yeh7u3gTvxS1n1W76dDfULthRa7ywRgoRtb5%2F408ZUZMZ10HS4u3419&X-Amz-Signature=a84be803077b99252217313ffc329076fa0688fb2c86e25f0fa8d3d67898ad64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNTCGEN7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIA99CUsqurFW4AaW7UkcwYA%2FXaqkFbqFXJz6kpVDleDMAiAKJhXo9ts1NIo9w1NWa5cAwaDpH5lc7Vg07%2F4VNOj33Sr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMBU4xaQwsCao3XL6QKtwD684hRFwZrud52xbc%2F46cfvGEIZxZ68TJrZ9vBqHMrii1GYXes1H3XF9owPVpyD3evKnrG%2FnkEQsQswSTI52EWDe8UmuWg%2FES1Qn0AB8bxA7p8LnZ%2BjHleGQ%2BTsiwljKicoupCSL8wnshLcH0ImunmU4%2FdQP4bkYNXm4%2Br%2Fx870K4xGwaXUqrb3TJkBFdj9aKd3Und4s82PgttMrJHTF0G9oOq1HO36hVNuul0xvvUW31PDvLBmJ8LYyNmZ1czkLFsDTxA8diC5coCoQbi%2FOAs%2FcTbUd4MEqwo9KtcKWo2sfKXGJwnFsVtVN3HtL%2Bh%2F2KLPeQY1MHzUuPbPNgRN2JI9%2Bup%2F8tQU0UeYJUV0GTM3Lw1H3kw%2Frkdgg2MJ7CN0%2FvNqBLX0Ly6spOoXN67yG8%2BR%2BKhH%2BgafmzlFKaDX%2FBajNdlN8jUgSmMevucs4dIsE%2FRUNP2nhofM3Q%2BQQUYOt8GkIBPs2ztUQNF8f4RwCSDTPwGRZpZ1%2FsmQT3JestFl4bDOOAjOMFMTz742NMF1K9Ca40oF0a4%2F%2B%2Fz%2B5z5a35HtsgZeXvtHo7K1VYb%2F5h6CQV8pdE%2FMmKuAoFVl%2BJzlpcPITEyBGOZ7OLOglB79ooRLEpzIsXtoBd8x5AX8Ew19r9xAY6pgF2Wg12Dk3oavt3Oo2FikK36OZkT7C16Sz3GUblfdK56M%2FNftgIMHZAXeiG5yOuLyHCdv9Y940g8yuQklZrQc3OaZG6eE8gbrBodDuSF2N5evrgKtg75kjk%2FLxgzQX%2FU6s2u%2FJuLqpQ%2BrQDHPzhyOh9ggcLsJ3etsMMCbst4Yeh7u3gTvxS1n1W76dDfULthRa7ywRgoRtb5%2F408ZUZMZ10HS4u3419&X-Amz-Signature=cf1c634fbc736b7acea523458609a4d2555c652919fb23c62e98b08a420b74b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNTCGEN7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIA99CUsqurFW4AaW7UkcwYA%2FXaqkFbqFXJz6kpVDleDMAiAKJhXo9ts1NIo9w1NWa5cAwaDpH5lc7Vg07%2F4VNOj33Sr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMBU4xaQwsCao3XL6QKtwD684hRFwZrud52xbc%2F46cfvGEIZxZ68TJrZ9vBqHMrii1GYXes1H3XF9owPVpyD3evKnrG%2FnkEQsQswSTI52EWDe8UmuWg%2FES1Qn0AB8bxA7p8LnZ%2BjHleGQ%2BTsiwljKicoupCSL8wnshLcH0ImunmU4%2FdQP4bkYNXm4%2Br%2Fx870K4xGwaXUqrb3TJkBFdj9aKd3Und4s82PgttMrJHTF0G9oOq1HO36hVNuul0xvvUW31PDvLBmJ8LYyNmZ1czkLFsDTxA8diC5coCoQbi%2FOAs%2FcTbUd4MEqwo9KtcKWo2sfKXGJwnFsVtVN3HtL%2Bh%2F2KLPeQY1MHzUuPbPNgRN2JI9%2Bup%2F8tQU0UeYJUV0GTM3Lw1H3kw%2Frkdgg2MJ7CN0%2FvNqBLX0Ly6spOoXN67yG8%2BR%2BKhH%2BgafmzlFKaDX%2FBajNdlN8jUgSmMevucs4dIsE%2FRUNP2nhofM3Q%2BQQUYOt8GkIBPs2ztUQNF8f4RwCSDTPwGRZpZ1%2FsmQT3JestFl4bDOOAjOMFMTz742NMF1K9Ca40oF0a4%2F%2B%2Fz%2B5z5a35HtsgZeXvtHo7K1VYb%2F5h6CQV8pdE%2FMmKuAoFVl%2BJzlpcPITEyBGOZ7OLOglB79ooRLEpzIsXtoBd8x5AX8Ew19r9xAY6pgF2Wg12Dk3oavt3Oo2FikK36OZkT7C16Sz3GUblfdK56M%2FNftgIMHZAXeiG5yOuLyHCdv9Y940g8yuQklZrQc3OaZG6eE8gbrBodDuSF2N5evrgKtg75kjk%2FLxgzQX%2FU6s2u%2FJuLqpQ%2BrQDHPzhyOh9ggcLsJ3etsMMCbst4Yeh7u3gTvxS1n1W76dDfULthRa7ywRgoRtb5%2F408ZUZMZ10HS4u3419&X-Amz-Signature=f87c6aa8173b44238a2c684f404323741846866c1838212538d725229df46be4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNTCGEN7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIA99CUsqurFW4AaW7UkcwYA%2FXaqkFbqFXJz6kpVDleDMAiAKJhXo9ts1NIo9w1NWa5cAwaDpH5lc7Vg07%2F4VNOj33Sr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMBU4xaQwsCao3XL6QKtwD684hRFwZrud52xbc%2F46cfvGEIZxZ68TJrZ9vBqHMrii1GYXes1H3XF9owPVpyD3evKnrG%2FnkEQsQswSTI52EWDe8UmuWg%2FES1Qn0AB8bxA7p8LnZ%2BjHleGQ%2BTsiwljKicoupCSL8wnshLcH0ImunmU4%2FdQP4bkYNXm4%2Br%2Fx870K4xGwaXUqrb3TJkBFdj9aKd3Und4s82PgttMrJHTF0G9oOq1HO36hVNuul0xvvUW31PDvLBmJ8LYyNmZ1czkLFsDTxA8diC5coCoQbi%2FOAs%2FcTbUd4MEqwo9KtcKWo2sfKXGJwnFsVtVN3HtL%2Bh%2F2KLPeQY1MHzUuPbPNgRN2JI9%2Bup%2F8tQU0UeYJUV0GTM3Lw1H3kw%2Frkdgg2MJ7CN0%2FvNqBLX0Ly6spOoXN67yG8%2BR%2BKhH%2BgafmzlFKaDX%2FBajNdlN8jUgSmMevucs4dIsE%2FRUNP2nhofM3Q%2BQQUYOt8GkIBPs2ztUQNF8f4RwCSDTPwGRZpZ1%2FsmQT3JestFl4bDOOAjOMFMTz742NMF1K9Ca40oF0a4%2F%2B%2Fz%2B5z5a35HtsgZeXvtHo7K1VYb%2F5h6CQV8pdE%2FMmKuAoFVl%2BJzlpcPITEyBGOZ7OLOglB79ooRLEpzIsXtoBd8x5AX8Ew19r9xAY6pgF2Wg12Dk3oavt3Oo2FikK36OZkT7C16Sz3GUblfdK56M%2FNftgIMHZAXeiG5yOuLyHCdv9Y940g8yuQklZrQc3OaZG6eE8gbrBodDuSF2N5evrgKtg75kjk%2FLxgzQX%2FU6s2u%2FJuLqpQ%2BrQDHPzhyOh9ggcLsJ3etsMMCbst4Yeh7u3gTvxS1n1W76dDfULthRa7ywRgoRtb5%2F408ZUZMZ10HS4u3419&X-Amz-Signature=56c6cfa62f614d54dc1f946d0212a89c9a59bf018f9af85f800acc48c453b093&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNTCGEN7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIA99CUsqurFW4AaW7UkcwYA%2FXaqkFbqFXJz6kpVDleDMAiAKJhXo9ts1NIo9w1NWa5cAwaDpH5lc7Vg07%2F4VNOj33Sr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMBU4xaQwsCao3XL6QKtwD684hRFwZrud52xbc%2F46cfvGEIZxZ68TJrZ9vBqHMrii1GYXes1H3XF9owPVpyD3evKnrG%2FnkEQsQswSTI52EWDe8UmuWg%2FES1Qn0AB8bxA7p8LnZ%2BjHleGQ%2BTsiwljKicoupCSL8wnshLcH0ImunmU4%2FdQP4bkYNXm4%2Br%2Fx870K4xGwaXUqrb3TJkBFdj9aKd3Und4s82PgttMrJHTF0G9oOq1HO36hVNuul0xvvUW31PDvLBmJ8LYyNmZ1czkLFsDTxA8diC5coCoQbi%2FOAs%2FcTbUd4MEqwo9KtcKWo2sfKXGJwnFsVtVN3HtL%2Bh%2F2KLPeQY1MHzUuPbPNgRN2JI9%2Bup%2F8tQU0UeYJUV0GTM3Lw1H3kw%2Frkdgg2MJ7CN0%2FvNqBLX0Ly6spOoXN67yG8%2BR%2BKhH%2BgafmzlFKaDX%2FBajNdlN8jUgSmMevucs4dIsE%2FRUNP2nhofM3Q%2BQQUYOt8GkIBPs2ztUQNF8f4RwCSDTPwGRZpZ1%2FsmQT3JestFl4bDOOAjOMFMTz742NMF1K9Ca40oF0a4%2F%2B%2Fz%2B5z5a35HtsgZeXvtHo7K1VYb%2F5h6CQV8pdE%2FMmKuAoFVl%2BJzlpcPITEyBGOZ7OLOglB79ooRLEpzIsXtoBd8x5AX8Ew19r9xAY6pgF2Wg12Dk3oavt3Oo2FikK36OZkT7C16Sz3GUblfdK56M%2FNftgIMHZAXeiG5yOuLyHCdv9Y940g8yuQklZrQc3OaZG6eE8gbrBodDuSF2N5evrgKtg75kjk%2FLxgzQX%2FU6s2u%2FJuLqpQ%2BrQDHPzhyOh9ggcLsJ3etsMMCbst4Yeh7u3gTvxS1n1W76dDfULthRa7ywRgoRtb5%2F408ZUZMZ10HS4u3419&X-Amz-Signature=0585adf22f2926cdfb38ef5761e1581ad659554e383af25f9eb98327ca6c8a5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNTCGEN7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIA99CUsqurFW4AaW7UkcwYA%2FXaqkFbqFXJz6kpVDleDMAiAKJhXo9ts1NIo9w1NWa5cAwaDpH5lc7Vg07%2F4VNOj33Sr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMBU4xaQwsCao3XL6QKtwD684hRFwZrud52xbc%2F46cfvGEIZxZ68TJrZ9vBqHMrii1GYXes1H3XF9owPVpyD3evKnrG%2FnkEQsQswSTI52EWDe8UmuWg%2FES1Qn0AB8bxA7p8LnZ%2BjHleGQ%2BTsiwljKicoupCSL8wnshLcH0ImunmU4%2FdQP4bkYNXm4%2Br%2Fx870K4xGwaXUqrb3TJkBFdj9aKd3Und4s82PgttMrJHTF0G9oOq1HO36hVNuul0xvvUW31PDvLBmJ8LYyNmZ1czkLFsDTxA8diC5coCoQbi%2FOAs%2FcTbUd4MEqwo9KtcKWo2sfKXGJwnFsVtVN3HtL%2Bh%2F2KLPeQY1MHzUuPbPNgRN2JI9%2Bup%2F8tQU0UeYJUV0GTM3Lw1H3kw%2Frkdgg2MJ7CN0%2FvNqBLX0Ly6spOoXN67yG8%2BR%2BKhH%2BgafmzlFKaDX%2FBajNdlN8jUgSmMevucs4dIsE%2FRUNP2nhofM3Q%2BQQUYOt8GkIBPs2ztUQNF8f4RwCSDTPwGRZpZ1%2FsmQT3JestFl4bDOOAjOMFMTz742NMF1K9Ca40oF0a4%2F%2B%2Fz%2B5z5a35HtsgZeXvtHo7K1VYb%2F5h6CQV8pdE%2FMmKuAoFVl%2BJzlpcPITEyBGOZ7OLOglB79ooRLEpzIsXtoBd8x5AX8Ew19r9xAY6pgF2Wg12Dk3oavt3Oo2FikK36OZkT7C16Sz3GUblfdK56M%2FNftgIMHZAXeiG5yOuLyHCdv9Y940g8yuQklZrQc3OaZG6eE8gbrBodDuSF2N5evrgKtg75kjk%2FLxgzQX%2FU6s2u%2FJuLqpQ%2BrQDHPzhyOh9ggcLsJ3etsMMCbst4Yeh7u3gTvxS1n1W76dDfULthRa7ywRgoRtb5%2F408ZUZMZ10HS4u3419&X-Amz-Signature=0855f275b6fc4d584dfd941568363986eef019816aed81bdce4c901a9ddb307f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNTCGEN7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIA99CUsqurFW4AaW7UkcwYA%2FXaqkFbqFXJz6kpVDleDMAiAKJhXo9ts1NIo9w1NWa5cAwaDpH5lc7Vg07%2F4VNOj33Sr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMBU4xaQwsCao3XL6QKtwD684hRFwZrud52xbc%2F46cfvGEIZxZ68TJrZ9vBqHMrii1GYXes1H3XF9owPVpyD3evKnrG%2FnkEQsQswSTI52EWDe8UmuWg%2FES1Qn0AB8bxA7p8LnZ%2BjHleGQ%2BTsiwljKicoupCSL8wnshLcH0ImunmU4%2FdQP4bkYNXm4%2Br%2Fx870K4xGwaXUqrb3TJkBFdj9aKd3Und4s82PgttMrJHTF0G9oOq1HO36hVNuul0xvvUW31PDvLBmJ8LYyNmZ1czkLFsDTxA8diC5coCoQbi%2FOAs%2FcTbUd4MEqwo9KtcKWo2sfKXGJwnFsVtVN3HtL%2Bh%2F2KLPeQY1MHzUuPbPNgRN2JI9%2Bup%2F8tQU0UeYJUV0GTM3Lw1H3kw%2Frkdgg2MJ7CN0%2FvNqBLX0Ly6spOoXN67yG8%2BR%2BKhH%2BgafmzlFKaDX%2FBajNdlN8jUgSmMevucs4dIsE%2FRUNP2nhofM3Q%2BQQUYOt8GkIBPs2ztUQNF8f4RwCSDTPwGRZpZ1%2FsmQT3JestFl4bDOOAjOMFMTz742NMF1K9Ca40oF0a4%2F%2B%2Fz%2B5z5a35HtsgZeXvtHo7K1VYb%2F5h6CQV8pdE%2FMmKuAoFVl%2BJzlpcPITEyBGOZ7OLOglB79ooRLEpzIsXtoBd8x5AX8Ew19r9xAY6pgF2Wg12Dk3oavt3Oo2FikK36OZkT7C16Sz3GUblfdK56M%2FNftgIMHZAXeiG5yOuLyHCdv9Y940g8yuQklZrQc3OaZG6eE8gbrBodDuSF2N5evrgKtg75kjk%2FLxgzQX%2FU6s2u%2FJuLqpQ%2BrQDHPzhyOh9ggcLsJ3etsMMCbst4Yeh7u3gTvxS1n1W76dDfULthRa7ywRgoRtb5%2F408ZUZMZ10HS4u3419&X-Amz-Signature=8329685366b68eceede50e7a47aea95ccb7bc6d3f2fd16fb6b7e4a1c48ce9f27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNTCGEN7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIA99CUsqurFW4AaW7UkcwYA%2FXaqkFbqFXJz6kpVDleDMAiAKJhXo9ts1NIo9w1NWa5cAwaDpH5lc7Vg07%2F4VNOj33Sr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMBU4xaQwsCao3XL6QKtwD684hRFwZrud52xbc%2F46cfvGEIZxZ68TJrZ9vBqHMrii1GYXes1H3XF9owPVpyD3evKnrG%2FnkEQsQswSTI52EWDe8UmuWg%2FES1Qn0AB8bxA7p8LnZ%2BjHleGQ%2BTsiwljKicoupCSL8wnshLcH0ImunmU4%2FdQP4bkYNXm4%2Br%2Fx870K4xGwaXUqrb3TJkBFdj9aKd3Und4s82PgttMrJHTF0G9oOq1HO36hVNuul0xvvUW31PDvLBmJ8LYyNmZ1czkLFsDTxA8diC5coCoQbi%2FOAs%2FcTbUd4MEqwo9KtcKWo2sfKXGJwnFsVtVN3HtL%2Bh%2F2KLPeQY1MHzUuPbPNgRN2JI9%2Bup%2F8tQU0UeYJUV0GTM3Lw1H3kw%2Frkdgg2MJ7CN0%2FvNqBLX0Ly6spOoXN67yG8%2BR%2BKhH%2BgafmzlFKaDX%2FBajNdlN8jUgSmMevucs4dIsE%2FRUNP2nhofM3Q%2BQQUYOt8GkIBPs2ztUQNF8f4RwCSDTPwGRZpZ1%2FsmQT3JestFl4bDOOAjOMFMTz742NMF1K9Ca40oF0a4%2F%2B%2Fz%2B5z5a35HtsgZeXvtHo7K1VYb%2F5h6CQV8pdE%2FMmKuAoFVl%2BJzlpcPITEyBGOZ7OLOglB79ooRLEpzIsXtoBd8x5AX8Ew19r9xAY6pgF2Wg12Dk3oavt3Oo2FikK36OZkT7C16Sz3GUblfdK56M%2FNftgIMHZAXeiG5yOuLyHCdv9Y940g8yuQklZrQc3OaZG6eE8gbrBodDuSF2N5evrgKtg75kjk%2FLxgzQX%2FU6s2u%2FJuLqpQ%2BrQDHPzhyOh9ggcLsJ3etsMMCbst4Yeh7u3gTvxS1n1W76dDfULthRa7ywRgoRtb5%2F408ZUZMZ10HS4u3419&X-Amz-Signature=38e36e7b2ee50f59e5882b6841390d9601b577c50e5e49baf8a1f8662338c0b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNTCGEN7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIA99CUsqurFW4AaW7UkcwYA%2FXaqkFbqFXJz6kpVDleDMAiAKJhXo9ts1NIo9w1NWa5cAwaDpH5lc7Vg07%2F4VNOj33Sr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMBU4xaQwsCao3XL6QKtwD684hRFwZrud52xbc%2F46cfvGEIZxZ68TJrZ9vBqHMrii1GYXes1H3XF9owPVpyD3evKnrG%2FnkEQsQswSTI52EWDe8UmuWg%2FES1Qn0AB8bxA7p8LnZ%2BjHleGQ%2BTsiwljKicoupCSL8wnshLcH0ImunmU4%2FdQP4bkYNXm4%2Br%2Fx870K4xGwaXUqrb3TJkBFdj9aKd3Und4s82PgttMrJHTF0G9oOq1HO36hVNuul0xvvUW31PDvLBmJ8LYyNmZ1czkLFsDTxA8diC5coCoQbi%2FOAs%2FcTbUd4MEqwo9KtcKWo2sfKXGJwnFsVtVN3HtL%2Bh%2F2KLPeQY1MHzUuPbPNgRN2JI9%2Bup%2F8tQU0UeYJUV0GTM3Lw1H3kw%2Frkdgg2MJ7CN0%2FvNqBLX0Ly6spOoXN67yG8%2BR%2BKhH%2BgafmzlFKaDX%2FBajNdlN8jUgSmMevucs4dIsE%2FRUNP2nhofM3Q%2BQQUYOt8GkIBPs2ztUQNF8f4RwCSDTPwGRZpZ1%2FsmQT3JestFl4bDOOAjOMFMTz742NMF1K9Ca40oF0a4%2F%2B%2Fz%2B5z5a35HtsgZeXvtHo7K1VYb%2F5h6CQV8pdE%2FMmKuAoFVl%2BJzlpcPITEyBGOZ7OLOglB79ooRLEpzIsXtoBd8x5AX8Ew19r9xAY6pgF2Wg12Dk3oavt3Oo2FikK36OZkT7C16Sz3GUblfdK56M%2FNftgIMHZAXeiG5yOuLyHCdv9Y940g8yuQklZrQc3OaZG6eE8gbrBodDuSF2N5evrgKtg75kjk%2FLxgzQX%2FU6s2u%2FJuLqpQ%2BrQDHPzhyOh9ggcLsJ3etsMMCbst4Yeh7u3gTvxS1n1W76dDfULthRa7ywRgoRtb5%2F408ZUZMZ10HS4u3419&X-Amz-Signature=b6d7fed217cdced2ee92fadbe85bc3b8d065682e44fbacc939c091d71275bd3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNTCGEN7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIA99CUsqurFW4AaW7UkcwYA%2FXaqkFbqFXJz6kpVDleDMAiAKJhXo9ts1NIo9w1NWa5cAwaDpH5lc7Vg07%2F4VNOj33Sr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMBU4xaQwsCao3XL6QKtwD684hRFwZrud52xbc%2F46cfvGEIZxZ68TJrZ9vBqHMrii1GYXes1H3XF9owPVpyD3evKnrG%2FnkEQsQswSTI52EWDe8UmuWg%2FES1Qn0AB8bxA7p8LnZ%2BjHleGQ%2BTsiwljKicoupCSL8wnshLcH0ImunmU4%2FdQP4bkYNXm4%2Br%2Fx870K4xGwaXUqrb3TJkBFdj9aKd3Und4s82PgttMrJHTF0G9oOq1HO36hVNuul0xvvUW31PDvLBmJ8LYyNmZ1czkLFsDTxA8diC5coCoQbi%2FOAs%2FcTbUd4MEqwo9KtcKWo2sfKXGJwnFsVtVN3HtL%2Bh%2F2KLPeQY1MHzUuPbPNgRN2JI9%2Bup%2F8tQU0UeYJUV0GTM3Lw1H3kw%2Frkdgg2MJ7CN0%2FvNqBLX0Ly6spOoXN67yG8%2BR%2BKhH%2BgafmzlFKaDX%2FBajNdlN8jUgSmMevucs4dIsE%2FRUNP2nhofM3Q%2BQQUYOt8GkIBPs2ztUQNF8f4RwCSDTPwGRZpZ1%2FsmQT3JestFl4bDOOAjOMFMTz742NMF1K9Ca40oF0a4%2F%2B%2Fz%2B5z5a35HtsgZeXvtHo7K1VYb%2F5h6CQV8pdE%2FMmKuAoFVl%2BJzlpcPITEyBGOZ7OLOglB79ooRLEpzIsXtoBd8x5AX8Ew19r9xAY6pgF2Wg12Dk3oavt3Oo2FikK36OZkT7C16Sz3GUblfdK56M%2FNftgIMHZAXeiG5yOuLyHCdv9Y940g8yuQklZrQc3OaZG6eE8gbrBodDuSF2N5evrgKtg75kjk%2FLxgzQX%2FU6s2u%2FJuLqpQ%2BrQDHPzhyOh9ggcLsJ3etsMMCbst4Yeh7u3gTvxS1n1W76dDfULthRa7ywRgoRtb5%2F408ZUZMZ10HS4u3419&X-Amz-Signature=476abcdf6c3e642b4f98cc0bcc8f9b1b2cc77912e7433cef78afd936d8a3e52a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
