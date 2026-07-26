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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLJR3FOW%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDX0e3o%2FgtaqGZKYq8ELpJu4HVyfhJhX2TGYeN%2BcCZzEwIhAPJcgY%2Fbiw9tm8cojSyyY70X%2F1b%2Fdmq6WHjPo%2FNfgaIgKv8DCCwQABoMNjM3NDIzMTgzODA1IgwloySlATE3uiypmS4q3AN8XBKQ2m42vBcvG5qfnI5DziZQYgEWoJSu8KQbTMPK0qNOlH3kX%2FjClxFAh2GnBfog13PCOgocF5qIaeUGU5zsIIsS%2Fksf4CqI9zN7Y5hPqSGJooO23xG34aQEsWQAuMNltmPRo03ZyzVs5MeuqrHEH113HOpPrHxs7jmtl%2Fj7bEdzjCNtGmr90GZto%2FWPn2I9gPdC8wksgO00k4BUbHagi1gbHrsZI24JBMPEJ%2BywyiuEdSpxPLyMXcyWSJ4B%2Bg2dspkQVAKtZdQ11BQUAqrx%2FumyhSNOlq%2FrFHZgGkMb%2Fnw8omxm81t3daAIjO28apm816iyMRU4M3AGiMOZ3hwZNgLhg9HaUivdeKo6okXY9nCGXOo%2BZerw4%2FS25Iw20o2zywd05MocwmOBX%2FNDUOSmqwKrGg2hSlfBZAUDX%2FewIEulWY69bY28haP%2BpZfJ6wMe5Ss2ulGmEkDa%2FA6HzWPwS3NyuynVQHO5pJsX0tSe%2FWrMS4N6M%2FEi1wGfCADQKaJuYBgPP7%2Fh6bWeDirxFq%2FApehAqIjd83R6l27B2hXIk4%2B0fa%2BM28%2FvQoiSsnIBms%2BWAahL00arCsq%2BnP3j1cEoIpDisYR1O7Rde2xsxW4WywBRgVI9E%2F1QGopKDDCf55XTBjqkAcbHgk6PiGELgboWfVLQ97QtonhhxQ1smhQe6pMHSUiVNv4J7qU4Hmp%2FdEqP3hEw0IQ8PuULH6MOi7kFyok2VJlZ%2FCYw5e6IIYL784iYXznGmU3v6ebD6iJca8o4o3TQjxcH2JbY4oNCOinuKI%2FRTrLGainBx%2BAk%2Fpii2ZsiL1TXghPcHgEdWyDHgVCkhzy6fYRNslFit0tXN6qjzJGlIg0BhEtA&X-Amz-Signature=c4f018fce1051c234664ed33c6a1b7610ada48ea4f9df58e98d48a0485bcfb03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLJR3FOW%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDX0e3o%2FgtaqGZKYq8ELpJu4HVyfhJhX2TGYeN%2BcCZzEwIhAPJcgY%2Fbiw9tm8cojSyyY70X%2F1b%2Fdmq6WHjPo%2FNfgaIgKv8DCCwQABoMNjM3NDIzMTgzODA1IgwloySlATE3uiypmS4q3AN8XBKQ2m42vBcvG5qfnI5DziZQYgEWoJSu8KQbTMPK0qNOlH3kX%2FjClxFAh2GnBfog13PCOgocF5qIaeUGU5zsIIsS%2Fksf4CqI9zN7Y5hPqSGJooO23xG34aQEsWQAuMNltmPRo03ZyzVs5MeuqrHEH113HOpPrHxs7jmtl%2Fj7bEdzjCNtGmr90GZto%2FWPn2I9gPdC8wksgO00k4BUbHagi1gbHrsZI24JBMPEJ%2BywyiuEdSpxPLyMXcyWSJ4B%2Bg2dspkQVAKtZdQ11BQUAqrx%2FumyhSNOlq%2FrFHZgGkMb%2Fnw8omxm81t3daAIjO28apm816iyMRU4M3AGiMOZ3hwZNgLhg9HaUivdeKo6okXY9nCGXOo%2BZerw4%2FS25Iw20o2zywd05MocwmOBX%2FNDUOSmqwKrGg2hSlfBZAUDX%2FewIEulWY69bY28haP%2BpZfJ6wMe5Ss2ulGmEkDa%2FA6HzWPwS3NyuynVQHO5pJsX0tSe%2FWrMS4N6M%2FEi1wGfCADQKaJuYBgPP7%2Fh6bWeDirxFq%2FApehAqIjd83R6l27B2hXIk4%2B0fa%2BM28%2FvQoiSsnIBms%2BWAahL00arCsq%2BnP3j1cEoIpDisYR1O7Rde2xsxW4WywBRgVI9E%2F1QGopKDDCf55XTBjqkAcbHgk6PiGELgboWfVLQ97QtonhhxQ1smhQe6pMHSUiVNv4J7qU4Hmp%2FdEqP3hEw0IQ8PuULH6MOi7kFyok2VJlZ%2FCYw5e6IIYL784iYXznGmU3v6ebD6iJca8o4o3TQjxcH2JbY4oNCOinuKI%2FRTrLGainBx%2BAk%2Fpii2ZsiL1TXghPcHgEdWyDHgVCkhzy6fYRNslFit0tXN6qjzJGlIg0BhEtA&X-Amz-Signature=6372b26def022f843492731fd6f63144efe9e1dfd5b5e360ce4a2bae2ee06f31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLJR3FOW%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDX0e3o%2FgtaqGZKYq8ELpJu4HVyfhJhX2TGYeN%2BcCZzEwIhAPJcgY%2Fbiw9tm8cojSyyY70X%2F1b%2Fdmq6WHjPo%2FNfgaIgKv8DCCwQABoMNjM3NDIzMTgzODA1IgwloySlATE3uiypmS4q3AN8XBKQ2m42vBcvG5qfnI5DziZQYgEWoJSu8KQbTMPK0qNOlH3kX%2FjClxFAh2GnBfog13PCOgocF5qIaeUGU5zsIIsS%2Fksf4CqI9zN7Y5hPqSGJooO23xG34aQEsWQAuMNltmPRo03ZyzVs5MeuqrHEH113HOpPrHxs7jmtl%2Fj7bEdzjCNtGmr90GZto%2FWPn2I9gPdC8wksgO00k4BUbHagi1gbHrsZI24JBMPEJ%2BywyiuEdSpxPLyMXcyWSJ4B%2Bg2dspkQVAKtZdQ11BQUAqrx%2FumyhSNOlq%2FrFHZgGkMb%2Fnw8omxm81t3daAIjO28apm816iyMRU4M3AGiMOZ3hwZNgLhg9HaUivdeKo6okXY9nCGXOo%2BZerw4%2FS25Iw20o2zywd05MocwmOBX%2FNDUOSmqwKrGg2hSlfBZAUDX%2FewIEulWY69bY28haP%2BpZfJ6wMe5Ss2ulGmEkDa%2FA6HzWPwS3NyuynVQHO5pJsX0tSe%2FWrMS4N6M%2FEi1wGfCADQKaJuYBgPP7%2Fh6bWeDirxFq%2FApehAqIjd83R6l27B2hXIk4%2B0fa%2BM28%2FvQoiSsnIBms%2BWAahL00arCsq%2BnP3j1cEoIpDisYR1O7Rde2xsxW4WywBRgVI9E%2F1QGopKDDCf55XTBjqkAcbHgk6PiGELgboWfVLQ97QtonhhxQ1smhQe6pMHSUiVNv4J7qU4Hmp%2FdEqP3hEw0IQ8PuULH6MOi7kFyok2VJlZ%2FCYw5e6IIYL784iYXznGmU3v6ebD6iJca8o4o3TQjxcH2JbY4oNCOinuKI%2FRTrLGainBx%2BAk%2Fpii2ZsiL1TXghPcHgEdWyDHgVCkhzy6fYRNslFit0tXN6qjzJGlIg0BhEtA&X-Amz-Signature=621c644bcbc87d98d2d2c10d2ff2b6036ecd2c6bca140639c2670cdc9f08e498&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLJR3FOW%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDX0e3o%2FgtaqGZKYq8ELpJu4HVyfhJhX2TGYeN%2BcCZzEwIhAPJcgY%2Fbiw9tm8cojSyyY70X%2F1b%2Fdmq6WHjPo%2FNfgaIgKv8DCCwQABoMNjM3NDIzMTgzODA1IgwloySlATE3uiypmS4q3AN8XBKQ2m42vBcvG5qfnI5DziZQYgEWoJSu8KQbTMPK0qNOlH3kX%2FjClxFAh2GnBfog13PCOgocF5qIaeUGU5zsIIsS%2Fksf4CqI9zN7Y5hPqSGJooO23xG34aQEsWQAuMNltmPRo03ZyzVs5MeuqrHEH113HOpPrHxs7jmtl%2Fj7bEdzjCNtGmr90GZto%2FWPn2I9gPdC8wksgO00k4BUbHagi1gbHrsZI24JBMPEJ%2BywyiuEdSpxPLyMXcyWSJ4B%2Bg2dspkQVAKtZdQ11BQUAqrx%2FumyhSNOlq%2FrFHZgGkMb%2Fnw8omxm81t3daAIjO28apm816iyMRU4M3AGiMOZ3hwZNgLhg9HaUivdeKo6okXY9nCGXOo%2BZerw4%2FS25Iw20o2zywd05MocwmOBX%2FNDUOSmqwKrGg2hSlfBZAUDX%2FewIEulWY69bY28haP%2BpZfJ6wMe5Ss2ulGmEkDa%2FA6HzWPwS3NyuynVQHO5pJsX0tSe%2FWrMS4N6M%2FEi1wGfCADQKaJuYBgPP7%2Fh6bWeDirxFq%2FApehAqIjd83R6l27B2hXIk4%2B0fa%2BM28%2FvQoiSsnIBms%2BWAahL00arCsq%2BnP3j1cEoIpDisYR1O7Rde2xsxW4WywBRgVI9E%2F1QGopKDDCf55XTBjqkAcbHgk6PiGELgboWfVLQ97QtonhhxQ1smhQe6pMHSUiVNv4J7qU4Hmp%2FdEqP3hEw0IQ8PuULH6MOi7kFyok2VJlZ%2FCYw5e6IIYL784iYXznGmU3v6ebD6iJca8o4o3TQjxcH2JbY4oNCOinuKI%2FRTrLGainBx%2BAk%2Fpii2ZsiL1TXghPcHgEdWyDHgVCkhzy6fYRNslFit0tXN6qjzJGlIg0BhEtA&X-Amz-Signature=fc8a968c44dc8ecd5d24985e79225938dfba0ac1aaa0cd17f99596295cff21af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLJR3FOW%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDX0e3o%2FgtaqGZKYq8ELpJu4HVyfhJhX2TGYeN%2BcCZzEwIhAPJcgY%2Fbiw9tm8cojSyyY70X%2F1b%2Fdmq6WHjPo%2FNfgaIgKv8DCCwQABoMNjM3NDIzMTgzODA1IgwloySlATE3uiypmS4q3AN8XBKQ2m42vBcvG5qfnI5DziZQYgEWoJSu8KQbTMPK0qNOlH3kX%2FjClxFAh2GnBfog13PCOgocF5qIaeUGU5zsIIsS%2Fksf4CqI9zN7Y5hPqSGJooO23xG34aQEsWQAuMNltmPRo03ZyzVs5MeuqrHEH113HOpPrHxs7jmtl%2Fj7bEdzjCNtGmr90GZto%2FWPn2I9gPdC8wksgO00k4BUbHagi1gbHrsZI24JBMPEJ%2BywyiuEdSpxPLyMXcyWSJ4B%2Bg2dspkQVAKtZdQ11BQUAqrx%2FumyhSNOlq%2FrFHZgGkMb%2Fnw8omxm81t3daAIjO28apm816iyMRU4M3AGiMOZ3hwZNgLhg9HaUivdeKo6okXY9nCGXOo%2BZerw4%2FS25Iw20o2zywd05MocwmOBX%2FNDUOSmqwKrGg2hSlfBZAUDX%2FewIEulWY69bY28haP%2BpZfJ6wMe5Ss2ulGmEkDa%2FA6HzWPwS3NyuynVQHO5pJsX0tSe%2FWrMS4N6M%2FEi1wGfCADQKaJuYBgPP7%2Fh6bWeDirxFq%2FApehAqIjd83R6l27B2hXIk4%2B0fa%2BM28%2FvQoiSsnIBms%2BWAahL00arCsq%2BnP3j1cEoIpDisYR1O7Rde2xsxW4WywBRgVI9E%2F1QGopKDDCf55XTBjqkAcbHgk6PiGELgboWfVLQ97QtonhhxQ1smhQe6pMHSUiVNv4J7qU4Hmp%2FdEqP3hEw0IQ8PuULH6MOi7kFyok2VJlZ%2FCYw5e6IIYL784iYXznGmU3v6ebD6iJca8o4o3TQjxcH2JbY4oNCOinuKI%2FRTrLGainBx%2BAk%2Fpii2ZsiL1TXghPcHgEdWyDHgVCkhzy6fYRNslFit0tXN6qjzJGlIg0BhEtA&X-Amz-Signature=c1e3daa3b6bafb6cdc1ffadbc81c2dc717a03667310e7142e4a4898139e1208b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLJR3FOW%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDX0e3o%2FgtaqGZKYq8ELpJu4HVyfhJhX2TGYeN%2BcCZzEwIhAPJcgY%2Fbiw9tm8cojSyyY70X%2F1b%2Fdmq6WHjPo%2FNfgaIgKv8DCCwQABoMNjM3NDIzMTgzODA1IgwloySlATE3uiypmS4q3AN8XBKQ2m42vBcvG5qfnI5DziZQYgEWoJSu8KQbTMPK0qNOlH3kX%2FjClxFAh2GnBfog13PCOgocF5qIaeUGU5zsIIsS%2Fksf4CqI9zN7Y5hPqSGJooO23xG34aQEsWQAuMNltmPRo03ZyzVs5MeuqrHEH113HOpPrHxs7jmtl%2Fj7bEdzjCNtGmr90GZto%2FWPn2I9gPdC8wksgO00k4BUbHagi1gbHrsZI24JBMPEJ%2BywyiuEdSpxPLyMXcyWSJ4B%2Bg2dspkQVAKtZdQ11BQUAqrx%2FumyhSNOlq%2FrFHZgGkMb%2Fnw8omxm81t3daAIjO28apm816iyMRU4M3AGiMOZ3hwZNgLhg9HaUivdeKo6okXY9nCGXOo%2BZerw4%2FS25Iw20o2zywd05MocwmOBX%2FNDUOSmqwKrGg2hSlfBZAUDX%2FewIEulWY69bY28haP%2BpZfJ6wMe5Ss2ulGmEkDa%2FA6HzWPwS3NyuynVQHO5pJsX0tSe%2FWrMS4N6M%2FEi1wGfCADQKaJuYBgPP7%2Fh6bWeDirxFq%2FApehAqIjd83R6l27B2hXIk4%2B0fa%2BM28%2FvQoiSsnIBms%2BWAahL00arCsq%2BnP3j1cEoIpDisYR1O7Rde2xsxW4WywBRgVI9E%2F1QGopKDDCf55XTBjqkAcbHgk6PiGELgboWfVLQ97QtonhhxQ1smhQe6pMHSUiVNv4J7qU4Hmp%2FdEqP3hEw0IQ8PuULH6MOi7kFyok2VJlZ%2FCYw5e6IIYL784iYXznGmU3v6ebD6iJca8o4o3TQjxcH2JbY4oNCOinuKI%2FRTrLGainBx%2BAk%2Fpii2ZsiL1TXghPcHgEdWyDHgVCkhzy6fYRNslFit0tXN6qjzJGlIg0BhEtA&X-Amz-Signature=f8513fb8db3810cd5e7e5b556b796407de2540433f08a60fdbae436218c06377&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLJR3FOW%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDX0e3o%2FgtaqGZKYq8ELpJu4HVyfhJhX2TGYeN%2BcCZzEwIhAPJcgY%2Fbiw9tm8cojSyyY70X%2F1b%2Fdmq6WHjPo%2FNfgaIgKv8DCCwQABoMNjM3NDIzMTgzODA1IgwloySlATE3uiypmS4q3AN8XBKQ2m42vBcvG5qfnI5DziZQYgEWoJSu8KQbTMPK0qNOlH3kX%2FjClxFAh2GnBfog13PCOgocF5qIaeUGU5zsIIsS%2Fksf4CqI9zN7Y5hPqSGJooO23xG34aQEsWQAuMNltmPRo03ZyzVs5MeuqrHEH113HOpPrHxs7jmtl%2Fj7bEdzjCNtGmr90GZto%2FWPn2I9gPdC8wksgO00k4BUbHagi1gbHrsZI24JBMPEJ%2BywyiuEdSpxPLyMXcyWSJ4B%2Bg2dspkQVAKtZdQ11BQUAqrx%2FumyhSNOlq%2FrFHZgGkMb%2Fnw8omxm81t3daAIjO28apm816iyMRU4M3AGiMOZ3hwZNgLhg9HaUivdeKo6okXY9nCGXOo%2BZerw4%2FS25Iw20o2zywd05MocwmOBX%2FNDUOSmqwKrGg2hSlfBZAUDX%2FewIEulWY69bY28haP%2BpZfJ6wMe5Ss2ulGmEkDa%2FA6HzWPwS3NyuynVQHO5pJsX0tSe%2FWrMS4N6M%2FEi1wGfCADQKaJuYBgPP7%2Fh6bWeDirxFq%2FApehAqIjd83R6l27B2hXIk4%2B0fa%2BM28%2FvQoiSsnIBms%2BWAahL00arCsq%2BnP3j1cEoIpDisYR1O7Rde2xsxW4WywBRgVI9E%2F1QGopKDDCf55XTBjqkAcbHgk6PiGELgboWfVLQ97QtonhhxQ1smhQe6pMHSUiVNv4J7qU4Hmp%2FdEqP3hEw0IQ8PuULH6MOi7kFyok2VJlZ%2FCYw5e6IIYL784iYXznGmU3v6ebD6iJca8o4o3TQjxcH2JbY4oNCOinuKI%2FRTrLGainBx%2BAk%2Fpii2ZsiL1TXghPcHgEdWyDHgVCkhzy6fYRNslFit0tXN6qjzJGlIg0BhEtA&X-Amz-Signature=2a7ebd08d2154669a5920b23199465e1454bf59c171ddf3c44e3f363574046f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLJR3FOW%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDX0e3o%2FgtaqGZKYq8ELpJu4HVyfhJhX2TGYeN%2BcCZzEwIhAPJcgY%2Fbiw9tm8cojSyyY70X%2F1b%2Fdmq6WHjPo%2FNfgaIgKv8DCCwQABoMNjM3NDIzMTgzODA1IgwloySlATE3uiypmS4q3AN8XBKQ2m42vBcvG5qfnI5DziZQYgEWoJSu8KQbTMPK0qNOlH3kX%2FjClxFAh2GnBfog13PCOgocF5qIaeUGU5zsIIsS%2Fksf4CqI9zN7Y5hPqSGJooO23xG34aQEsWQAuMNltmPRo03ZyzVs5MeuqrHEH113HOpPrHxs7jmtl%2Fj7bEdzjCNtGmr90GZto%2FWPn2I9gPdC8wksgO00k4BUbHagi1gbHrsZI24JBMPEJ%2BywyiuEdSpxPLyMXcyWSJ4B%2Bg2dspkQVAKtZdQ11BQUAqrx%2FumyhSNOlq%2FrFHZgGkMb%2Fnw8omxm81t3daAIjO28apm816iyMRU4M3AGiMOZ3hwZNgLhg9HaUivdeKo6okXY9nCGXOo%2BZerw4%2FS25Iw20o2zywd05MocwmOBX%2FNDUOSmqwKrGg2hSlfBZAUDX%2FewIEulWY69bY28haP%2BpZfJ6wMe5Ss2ulGmEkDa%2FA6HzWPwS3NyuynVQHO5pJsX0tSe%2FWrMS4N6M%2FEi1wGfCADQKaJuYBgPP7%2Fh6bWeDirxFq%2FApehAqIjd83R6l27B2hXIk4%2B0fa%2BM28%2FvQoiSsnIBms%2BWAahL00arCsq%2BnP3j1cEoIpDisYR1O7Rde2xsxW4WywBRgVI9E%2F1QGopKDDCf55XTBjqkAcbHgk6PiGELgboWfVLQ97QtonhhxQ1smhQe6pMHSUiVNv4J7qU4Hmp%2FdEqP3hEw0IQ8PuULH6MOi7kFyok2VJlZ%2FCYw5e6IIYL784iYXznGmU3v6ebD6iJca8o4o3TQjxcH2JbY4oNCOinuKI%2FRTrLGainBx%2BAk%2Fpii2ZsiL1TXghPcHgEdWyDHgVCkhzy6fYRNslFit0tXN6qjzJGlIg0BhEtA&X-Amz-Signature=873ea5ac72fb8c9ba542133ad6be89b5b71e398717fb8a476f95fb4a95f28dd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLJR3FOW%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDX0e3o%2FgtaqGZKYq8ELpJu4HVyfhJhX2TGYeN%2BcCZzEwIhAPJcgY%2Fbiw9tm8cojSyyY70X%2F1b%2Fdmq6WHjPo%2FNfgaIgKv8DCCwQABoMNjM3NDIzMTgzODA1IgwloySlATE3uiypmS4q3AN8XBKQ2m42vBcvG5qfnI5DziZQYgEWoJSu8KQbTMPK0qNOlH3kX%2FjClxFAh2GnBfog13PCOgocF5qIaeUGU5zsIIsS%2Fksf4CqI9zN7Y5hPqSGJooO23xG34aQEsWQAuMNltmPRo03ZyzVs5MeuqrHEH113HOpPrHxs7jmtl%2Fj7bEdzjCNtGmr90GZto%2FWPn2I9gPdC8wksgO00k4BUbHagi1gbHrsZI24JBMPEJ%2BywyiuEdSpxPLyMXcyWSJ4B%2Bg2dspkQVAKtZdQ11BQUAqrx%2FumyhSNOlq%2FrFHZgGkMb%2Fnw8omxm81t3daAIjO28apm816iyMRU4M3AGiMOZ3hwZNgLhg9HaUivdeKo6okXY9nCGXOo%2BZerw4%2FS25Iw20o2zywd05MocwmOBX%2FNDUOSmqwKrGg2hSlfBZAUDX%2FewIEulWY69bY28haP%2BpZfJ6wMe5Ss2ulGmEkDa%2FA6HzWPwS3NyuynVQHO5pJsX0tSe%2FWrMS4N6M%2FEi1wGfCADQKaJuYBgPP7%2Fh6bWeDirxFq%2FApehAqIjd83R6l27B2hXIk4%2B0fa%2BM28%2FvQoiSsnIBms%2BWAahL00arCsq%2BnP3j1cEoIpDisYR1O7Rde2xsxW4WywBRgVI9E%2F1QGopKDDCf55XTBjqkAcbHgk6PiGELgboWfVLQ97QtonhhxQ1smhQe6pMHSUiVNv4J7qU4Hmp%2FdEqP3hEw0IQ8PuULH6MOi7kFyok2VJlZ%2FCYw5e6IIYL784iYXznGmU3v6ebD6iJca8o4o3TQjxcH2JbY4oNCOinuKI%2FRTrLGainBx%2BAk%2Fpii2ZsiL1TXghPcHgEdWyDHgVCkhzy6fYRNslFit0tXN6qjzJGlIg0BhEtA&X-Amz-Signature=f1e4a19ee92c3ef8616fd42285423bce78bdee9706f1adb27a6bd6be848acbac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLJR3FOW%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDX0e3o%2FgtaqGZKYq8ELpJu4HVyfhJhX2TGYeN%2BcCZzEwIhAPJcgY%2Fbiw9tm8cojSyyY70X%2F1b%2Fdmq6WHjPo%2FNfgaIgKv8DCCwQABoMNjM3NDIzMTgzODA1IgwloySlATE3uiypmS4q3AN8XBKQ2m42vBcvG5qfnI5DziZQYgEWoJSu8KQbTMPK0qNOlH3kX%2FjClxFAh2GnBfog13PCOgocF5qIaeUGU5zsIIsS%2Fksf4CqI9zN7Y5hPqSGJooO23xG34aQEsWQAuMNltmPRo03ZyzVs5MeuqrHEH113HOpPrHxs7jmtl%2Fj7bEdzjCNtGmr90GZto%2FWPn2I9gPdC8wksgO00k4BUbHagi1gbHrsZI24JBMPEJ%2BywyiuEdSpxPLyMXcyWSJ4B%2Bg2dspkQVAKtZdQ11BQUAqrx%2FumyhSNOlq%2FrFHZgGkMb%2Fnw8omxm81t3daAIjO28apm816iyMRU4M3AGiMOZ3hwZNgLhg9HaUivdeKo6okXY9nCGXOo%2BZerw4%2FS25Iw20o2zywd05MocwmOBX%2FNDUOSmqwKrGg2hSlfBZAUDX%2FewIEulWY69bY28haP%2BpZfJ6wMe5Ss2ulGmEkDa%2FA6HzWPwS3NyuynVQHO5pJsX0tSe%2FWrMS4N6M%2FEi1wGfCADQKaJuYBgPP7%2Fh6bWeDirxFq%2FApehAqIjd83R6l27B2hXIk4%2B0fa%2BM28%2FvQoiSsnIBms%2BWAahL00arCsq%2BnP3j1cEoIpDisYR1O7Rde2xsxW4WywBRgVI9E%2F1QGopKDDCf55XTBjqkAcbHgk6PiGELgboWfVLQ97QtonhhxQ1smhQe6pMHSUiVNv4J7qU4Hmp%2FdEqP3hEw0IQ8PuULH6MOi7kFyok2VJlZ%2FCYw5e6IIYL784iYXznGmU3v6ebD6iJca8o4o3TQjxcH2JbY4oNCOinuKI%2FRTrLGainBx%2BAk%2Fpii2ZsiL1TXghPcHgEdWyDHgVCkhzy6fYRNslFit0tXN6qjzJGlIg0BhEtA&X-Amz-Signature=91fa40f3f7877913baa91795cf266ff46d403c5d7292522c45930b7cf056ad4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLJR3FOW%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDX0e3o%2FgtaqGZKYq8ELpJu4HVyfhJhX2TGYeN%2BcCZzEwIhAPJcgY%2Fbiw9tm8cojSyyY70X%2F1b%2Fdmq6WHjPo%2FNfgaIgKv8DCCwQABoMNjM3NDIzMTgzODA1IgwloySlATE3uiypmS4q3AN8XBKQ2m42vBcvG5qfnI5DziZQYgEWoJSu8KQbTMPK0qNOlH3kX%2FjClxFAh2GnBfog13PCOgocF5qIaeUGU5zsIIsS%2Fksf4CqI9zN7Y5hPqSGJooO23xG34aQEsWQAuMNltmPRo03ZyzVs5MeuqrHEH113HOpPrHxs7jmtl%2Fj7bEdzjCNtGmr90GZto%2FWPn2I9gPdC8wksgO00k4BUbHagi1gbHrsZI24JBMPEJ%2BywyiuEdSpxPLyMXcyWSJ4B%2Bg2dspkQVAKtZdQ11BQUAqrx%2FumyhSNOlq%2FrFHZgGkMb%2Fnw8omxm81t3daAIjO28apm816iyMRU4M3AGiMOZ3hwZNgLhg9HaUivdeKo6okXY9nCGXOo%2BZerw4%2FS25Iw20o2zywd05MocwmOBX%2FNDUOSmqwKrGg2hSlfBZAUDX%2FewIEulWY69bY28haP%2BpZfJ6wMe5Ss2ulGmEkDa%2FA6HzWPwS3NyuynVQHO5pJsX0tSe%2FWrMS4N6M%2FEi1wGfCADQKaJuYBgPP7%2Fh6bWeDirxFq%2FApehAqIjd83R6l27B2hXIk4%2B0fa%2BM28%2FvQoiSsnIBms%2BWAahL00arCsq%2BnP3j1cEoIpDisYR1O7Rde2xsxW4WywBRgVI9E%2F1QGopKDDCf55XTBjqkAcbHgk6PiGELgboWfVLQ97QtonhhxQ1smhQe6pMHSUiVNv4J7qU4Hmp%2FdEqP3hEw0IQ8PuULH6MOi7kFyok2VJlZ%2FCYw5e6IIYL784iYXznGmU3v6ebD6iJca8o4o3TQjxcH2JbY4oNCOinuKI%2FRTrLGainBx%2BAk%2Fpii2ZsiL1TXghPcHgEdWyDHgVCkhzy6fYRNslFit0tXN6qjzJGlIg0BhEtA&X-Amz-Signature=743a37cfa6d978fe22bffe09ce630d3df541bf6880619ec1c1e4cd53fabae802&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLJR3FOW%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDX0e3o%2FgtaqGZKYq8ELpJu4HVyfhJhX2TGYeN%2BcCZzEwIhAPJcgY%2Fbiw9tm8cojSyyY70X%2F1b%2Fdmq6WHjPo%2FNfgaIgKv8DCCwQABoMNjM3NDIzMTgzODA1IgwloySlATE3uiypmS4q3AN8XBKQ2m42vBcvG5qfnI5DziZQYgEWoJSu8KQbTMPK0qNOlH3kX%2FjClxFAh2GnBfog13PCOgocF5qIaeUGU5zsIIsS%2Fksf4CqI9zN7Y5hPqSGJooO23xG34aQEsWQAuMNltmPRo03ZyzVs5MeuqrHEH113HOpPrHxs7jmtl%2Fj7bEdzjCNtGmr90GZto%2FWPn2I9gPdC8wksgO00k4BUbHagi1gbHrsZI24JBMPEJ%2BywyiuEdSpxPLyMXcyWSJ4B%2Bg2dspkQVAKtZdQ11BQUAqrx%2FumyhSNOlq%2FrFHZgGkMb%2Fnw8omxm81t3daAIjO28apm816iyMRU4M3AGiMOZ3hwZNgLhg9HaUivdeKo6okXY9nCGXOo%2BZerw4%2FS25Iw20o2zywd05MocwmOBX%2FNDUOSmqwKrGg2hSlfBZAUDX%2FewIEulWY69bY28haP%2BpZfJ6wMe5Ss2ulGmEkDa%2FA6HzWPwS3NyuynVQHO5pJsX0tSe%2FWrMS4N6M%2FEi1wGfCADQKaJuYBgPP7%2Fh6bWeDirxFq%2FApehAqIjd83R6l27B2hXIk4%2B0fa%2BM28%2FvQoiSsnIBms%2BWAahL00arCsq%2BnP3j1cEoIpDisYR1O7Rde2xsxW4WywBRgVI9E%2F1QGopKDDCf55XTBjqkAcbHgk6PiGELgboWfVLQ97QtonhhxQ1smhQe6pMHSUiVNv4J7qU4Hmp%2FdEqP3hEw0IQ8PuULH6MOi7kFyok2VJlZ%2FCYw5e6IIYL784iYXznGmU3v6ebD6iJca8o4o3TQjxcH2JbY4oNCOinuKI%2FRTrLGainBx%2BAk%2Fpii2ZsiL1TXghPcHgEdWyDHgVCkhzy6fYRNslFit0tXN6qjzJGlIg0BhEtA&X-Amz-Signature=6a9dcfbc8c1aab78f236e6955d4f24046676c3692f746d9c1bca39500f0d0a25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLJR3FOW%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDX0e3o%2FgtaqGZKYq8ELpJu4HVyfhJhX2TGYeN%2BcCZzEwIhAPJcgY%2Fbiw9tm8cojSyyY70X%2F1b%2Fdmq6WHjPo%2FNfgaIgKv8DCCwQABoMNjM3NDIzMTgzODA1IgwloySlATE3uiypmS4q3AN8XBKQ2m42vBcvG5qfnI5DziZQYgEWoJSu8KQbTMPK0qNOlH3kX%2FjClxFAh2GnBfog13PCOgocF5qIaeUGU5zsIIsS%2Fksf4CqI9zN7Y5hPqSGJooO23xG34aQEsWQAuMNltmPRo03ZyzVs5MeuqrHEH113HOpPrHxs7jmtl%2Fj7bEdzjCNtGmr90GZto%2FWPn2I9gPdC8wksgO00k4BUbHagi1gbHrsZI24JBMPEJ%2BywyiuEdSpxPLyMXcyWSJ4B%2Bg2dspkQVAKtZdQ11BQUAqrx%2FumyhSNOlq%2FrFHZgGkMb%2Fnw8omxm81t3daAIjO28apm816iyMRU4M3AGiMOZ3hwZNgLhg9HaUivdeKo6okXY9nCGXOo%2BZerw4%2FS25Iw20o2zywd05MocwmOBX%2FNDUOSmqwKrGg2hSlfBZAUDX%2FewIEulWY69bY28haP%2BpZfJ6wMe5Ss2ulGmEkDa%2FA6HzWPwS3NyuynVQHO5pJsX0tSe%2FWrMS4N6M%2FEi1wGfCADQKaJuYBgPP7%2Fh6bWeDirxFq%2FApehAqIjd83R6l27B2hXIk4%2B0fa%2BM28%2FvQoiSsnIBms%2BWAahL00arCsq%2BnP3j1cEoIpDisYR1O7Rde2xsxW4WywBRgVI9E%2F1QGopKDDCf55XTBjqkAcbHgk6PiGELgboWfVLQ97QtonhhxQ1smhQe6pMHSUiVNv4J7qU4Hmp%2FdEqP3hEw0IQ8PuULH6MOi7kFyok2VJlZ%2FCYw5e6IIYL784iYXznGmU3v6ebD6iJca8o4o3TQjxcH2JbY4oNCOinuKI%2FRTrLGainBx%2BAk%2Fpii2ZsiL1TXghPcHgEdWyDHgVCkhzy6fYRNslFit0tXN6qjzJGlIg0BhEtA&X-Amz-Signature=cb30fe31e0e8d620313c9dbdff015b1785fc9e9c0566bfdffa6a3488d7a8b74d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLJR3FOW%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDX0e3o%2FgtaqGZKYq8ELpJu4HVyfhJhX2TGYeN%2BcCZzEwIhAPJcgY%2Fbiw9tm8cojSyyY70X%2F1b%2Fdmq6WHjPo%2FNfgaIgKv8DCCwQABoMNjM3NDIzMTgzODA1IgwloySlATE3uiypmS4q3AN8XBKQ2m42vBcvG5qfnI5DziZQYgEWoJSu8KQbTMPK0qNOlH3kX%2FjClxFAh2GnBfog13PCOgocF5qIaeUGU5zsIIsS%2Fksf4CqI9zN7Y5hPqSGJooO23xG34aQEsWQAuMNltmPRo03ZyzVs5MeuqrHEH113HOpPrHxs7jmtl%2Fj7bEdzjCNtGmr90GZto%2FWPn2I9gPdC8wksgO00k4BUbHagi1gbHrsZI24JBMPEJ%2BywyiuEdSpxPLyMXcyWSJ4B%2Bg2dspkQVAKtZdQ11BQUAqrx%2FumyhSNOlq%2FrFHZgGkMb%2Fnw8omxm81t3daAIjO28apm816iyMRU4M3AGiMOZ3hwZNgLhg9HaUivdeKo6okXY9nCGXOo%2BZerw4%2FS25Iw20o2zywd05MocwmOBX%2FNDUOSmqwKrGg2hSlfBZAUDX%2FewIEulWY69bY28haP%2BpZfJ6wMe5Ss2ulGmEkDa%2FA6HzWPwS3NyuynVQHO5pJsX0tSe%2FWrMS4N6M%2FEi1wGfCADQKaJuYBgPP7%2Fh6bWeDirxFq%2FApehAqIjd83R6l27B2hXIk4%2B0fa%2BM28%2FvQoiSsnIBms%2BWAahL00arCsq%2BnP3j1cEoIpDisYR1O7Rde2xsxW4WywBRgVI9E%2F1QGopKDDCf55XTBjqkAcbHgk6PiGELgboWfVLQ97QtonhhxQ1smhQe6pMHSUiVNv4J7qU4Hmp%2FdEqP3hEw0IQ8PuULH6MOi7kFyok2VJlZ%2FCYw5e6IIYL784iYXznGmU3v6ebD6iJca8o4o3TQjxcH2JbY4oNCOinuKI%2FRTrLGainBx%2BAk%2Fpii2ZsiL1TXghPcHgEdWyDHgVCkhzy6fYRNslFit0tXN6qjzJGlIg0BhEtA&X-Amz-Signature=cd10e1573b9d9c3b12ecd6e0e770ff631e3ebda08c896b46ef45694aeff786a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
