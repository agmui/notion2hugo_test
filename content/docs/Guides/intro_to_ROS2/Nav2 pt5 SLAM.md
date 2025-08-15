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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLQ2KB43%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIG2R7I8KdW7Tw8YWMq6xyRsSg6DbFU1TArj2EJeDUuRtAiEAjA%2BeW8cM6b%2FrwU5zPJTV3enRetD8qJ%2FDa19rusdIVXgq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDIJl0uSzYq2ICe7QWSrcA1aB5I7RzbJ%2Fa9KocV9PYUJs7TwCmdHjlq%2F0DrKnyX9AnKWO8zCIW94RM2sIQXJLaML%2B9eWxEdZ3cYAz2VfObjFSgDJVEgB30fAJTeuRZSATZL7VJuyFy4PaLhApjMYZNsfDTZZrw%2BUGhpQb3SCrcuavKFNAUsb58CsHGmlIrHkwoDPTSX1g4F6sG2JvDxJaP6k8zp8gCtVjhmsLtDS1fnAWpwJwsQzcph2yUNb7ypQ4uR4qmXuJjSpW19V1KI3t2m4rd9IgKZQ6jPMbGC5bjmzQcd3YcfGJpl%2Bvug%2FX%2BCQCYW5d2oEnW3eMMVKk5OIHjGaCw4ApgxH8Qmevzgx%2FLwWRuPZ5TSNfhl80%2B7mLHdorxHjmNqdBEp5C0d0weDoq%2Fgf1cS%2Bizim%2BR5YbfhxKCYYUDYGiZql5ny3R05HpacfkJcsSuMEm590k%2FOaYJaGF5TxWpuRdvAadWw2KbLpsIf76LOBcCArAq4Uj8y9b2wsrqobW7Pg3DOD%2BDJdolEGfEikNu10GnyIL2vzDg%2FrNRxOkby3XgYgY6ARKAh0biByLNauUPQBWPyWn0g58J0V5yXZErOxU%2F%2B0fY91nUHNdAG1tPLHd72rvfHHX1rByf3ylDb2MJ5ptiw70JI4sMPa2%2FMQGOqUBXpWyVJ3e%2BJCz467HXBerexUHG9NyY05sYafo4DELFVLjryjAPjvSNYQ%2FkA1ayJXRqbhKdIS1S%2Fz8M2hL%2BChJfDI3zNQde3iU87oOwIhjxyk0nx8%2FhZTTmGHysczOrsS7gjs6vS7lSb5fWleaKiTMtmCBUo0DhainVhHOG%2BSgxYYq%2F85k1iZl7Hlix%2FuoC0CkZR4885gh97SvdqwcbO2aSOPQk7ax&X-Amz-Signature=bce93afd08a025742a7cef8d5a6d951404ddc418b31955490e589ba294bd3071&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLQ2KB43%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIG2R7I8KdW7Tw8YWMq6xyRsSg6DbFU1TArj2EJeDUuRtAiEAjA%2BeW8cM6b%2FrwU5zPJTV3enRetD8qJ%2FDa19rusdIVXgq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDIJl0uSzYq2ICe7QWSrcA1aB5I7RzbJ%2Fa9KocV9PYUJs7TwCmdHjlq%2F0DrKnyX9AnKWO8zCIW94RM2sIQXJLaML%2B9eWxEdZ3cYAz2VfObjFSgDJVEgB30fAJTeuRZSATZL7VJuyFy4PaLhApjMYZNsfDTZZrw%2BUGhpQb3SCrcuavKFNAUsb58CsHGmlIrHkwoDPTSX1g4F6sG2JvDxJaP6k8zp8gCtVjhmsLtDS1fnAWpwJwsQzcph2yUNb7ypQ4uR4qmXuJjSpW19V1KI3t2m4rd9IgKZQ6jPMbGC5bjmzQcd3YcfGJpl%2Bvug%2FX%2BCQCYW5d2oEnW3eMMVKk5OIHjGaCw4ApgxH8Qmevzgx%2FLwWRuPZ5TSNfhl80%2B7mLHdorxHjmNqdBEp5C0d0weDoq%2Fgf1cS%2Bizim%2BR5YbfhxKCYYUDYGiZql5ny3R05HpacfkJcsSuMEm590k%2FOaYJaGF5TxWpuRdvAadWw2KbLpsIf76LOBcCArAq4Uj8y9b2wsrqobW7Pg3DOD%2BDJdolEGfEikNu10GnyIL2vzDg%2FrNRxOkby3XgYgY6ARKAh0biByLNauUPQBWPyWn0g58J0V5yXZErOxU%2F%2B0fY91nUHNdAG1tPLHd72rvfHHX1rByf3ylDb2MJ5ptiw70JI4sMPa2%2FMQGOqUBXpWyVJ3e%2BJCz467HXBerexUHG9NyY05sYafo4DELFVLjryjAPjvSNYQ%2FkA1ayJXRqbhKdIS1S%2Fz8M2hL%2BChJfDI3zNQde3iU87oOwIhjxyk0nx8%2FhZTTmGHysczOrsS7gjs6vS7lSb5fWleaKiTMtmCBUo0DhainVhHOG%2BSgxYYq%2F85k1iZl7Hlix%2FuoC0CkZR4885gh97SvdqwcbO2aSOPQk7ax&X-Amz-Signature=c4fe32acdcb41fea638bf7e52d4e4295c3463aa25e5e238ba168ca9105ab91a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLQ2KB43%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIG2R7I8KdW7Tw8YWMq6xyRsSg6DbFU1TArj2EJeDUuRtAiEAjA%2BeW8cM6b%2FrwU5zPJTV3enRetD8qJ%2FDa19rusdIVXgq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDIJl0uSzYq2ICe7QWSrcA1aB5I7RzbJ%2Fa9KocV9PYUJs7TwCmdHjlq%2F0DrKnyX9AnKWO8zCIW94RM2sIQXJLaML%2B9eWxEdZ3cYAz2VfObjFSgDJVEgB30fAJTeuRZSATZL7VJuyFy4PaLhApjMYZNsfDTZZrw%2BUGhpQb3SCrcuavKFNAUsb58CsHGmlIrHkwoDPTSX1g4F6sG2JvDxJaP6k8zp8gCtVjhmsLtDS1fnAWpwJwsQzcph2yUNb7ypQ4uR4qmXuJjSpW19V1KI3t2m4rd9IgKZQ6jPMbGC5bjmzQcd3YcfGJpl%2Bvug%2FX%2BCQCYW5d2oEnW3eMMVKk5OIHjGaCw4ApgxH8Qmevzgx%2FLwWRuPZ5TSNfhl80%2B7mLHdorxHjmNqdBEp5C0d0weDoq%2Fgf1cS%2Bizim%2BR5YbfhxKCYYUDYGiZql5ny3R05HpacfkJcsSuMEm590k%2FOaYJaGF5TxWpuRdvAadWw2KbLpsIf76LOBcCArAq4Uj8y9b2wsrqobW7Pg3DOD%2BDJdolEGfEikNu10GnyIL2vzDg%2FrNRxOkby3XgYgY6ARKAh0biByLNauUPQBWPyWn0g58J0V5yXZErOxU%2F%2B0fY91nUHNdAG1tPLHd72rvfHHX1rByf3ylDb2MJ5ptiw70JI4sMPa2%2FMQGOqUBXpWyVJ3e%2BJCz467HXBerexUHG9NyY05sYafo4DELFVLjryjAPjvSNYQ%2FkA1ayJXRqbhKdIS1S%2Fz8M2hL%2BChJfDI3zNQde3iU87oOwIhjxyk0nx8%2FhZTTmGHysczOrsS7gjs6vS7lSb5fWleaKiTMtmCBUo0DhainVhHOG%2BSgxYYq%2F85k1iZl7Hlix%2FuoC0CkZR4885gh97SvdqwcbO2aSOPQk7ax&X-Amz-Signature=00c3dc0f21c1ad543bd2362dc3d01235cad661ae87fbf3593ab767ad48f7ba51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLQ2KB43%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIG2R7I8KdW7Tw8YWMq6xyRsSg6DbFU1TArj2EJeDUuRtAiEAjA%2BeW8cM6b%2FrwU5zPJTV3enRetD8qJ%2FDa19rusdIVXgq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDIJl0uSzYq2ICe7QWSrcA1aB5I7RzbJ%2Fa9KocV9PYUJs7TwCmdHjlq%2F0DrKnyX9AnKWO8zCIW94RM2sIQXJLaML%2B9eWxEdZ3cYAz2VfObjFSgDJVEgB30fAJTeuRZSATZL7VJuyFy4PaLhApjMYZNsfDTZZrw%2BUGhpQb3SCrcuavKFNAUsb58CsHGmlIrHkwoDPTSX1g4F6sG2JvDxJaP6k8zp8gCtVjhmsLtDS1fnAWpwJwsQzcph2yUNb7ypQ4uR4qmXuJjSpW19V1KI3t2m4rd9IgKZQ6jPMbGC5bjmzQcd3YcfGJpl%2Bvug%2FX%2BCQCYW5d2oEnW3eMMVKk5OIHjGaCw4ApgxH8Qmevzgx%2FLwWRuPZ5TSNfhl80%2B7mLHdorxHjmNqdBEp5C0d0weDoq%2Fgf1cS%2Bizim%2BR5YbfhxKCYYUDYGiZql5ny3R05HpacfkJcsSuMEm590k%2FOaYJaGF5TxWpuRdvAadWw2KbLpsIf76LOBcCArAq4Uj8y9b2wsrqobW7Pg3DOD%2BDJdolEGfEikNu10GnyIL2vzDg%2FrNRxOkby3XgYgY6ARKAh0biByLNauUPQBWPyWn0g58J0V5yXZErOxU%2F%2B0fY91nUHNdAG1tPLHd72rvfHHX1rByf3ylDb2MJ5ptiw70JI4sMPa2%2FMQGOqUBXpWyVJ3e%2BJCz467HXBerexUHG9NyY05sYafo4DELFVLjryjAPjvSNYQ%2FkA1ayJXRqbhKdIS1S%2Fz8M2hL%2BChJfDI3zNQde3iU87oOwIhjxyk0nx8%2FhZTTmGHysczOrsS7gjs6vS7lSb5fWleaKiTMtmCBUo0DhainVhHOG%2BSgxYYq%2F85k1iZl7Hlix%2FuoC0CkZR4885gh97SvdqwcbO2aSOPQk7ax&X-Amz-Signature=7c6f801324bc2b4066d7744233258bfdec4982f9cd53f7c9334d3c51f09a7dc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLQ2KB43%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIG2R7I8KdW7Tw8YWMq6xyRsSg6DbFU1TArj2EJeDUuRtAiEAjA%2BeW8cM6b%2FrwU5zPJTV3enRetD8qJ%2FDa19rusdIVXgq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDIJl0uSzYq2ICe7QWSrcA1aB5I7RzbJ%2Fa9KocV9PYUJs7TwCmdHjlq%2F0DrKnyX9AnKWO8zCIW94RM2sIQXJLaML%2B9eWxEdZ3cYAz2VfObjFSgDJVEgB30fAJTeuRZSATZL7VJuyFy4PaLhApjMYZNsfDTZZrw%2BUGhpQb3SCrcuavKFNAUsb58CsHGmlIrHkwoDPTSX1g4F6sG2JvDxJaP6k8zp8gCtVjhmsLtDS1fnAWpwJwsQzcph2yUNb7ypQ4uR4qmXuJjSpW19V1KI3t2m4rd9IgKZQ6jPMbGC5bjmzQcd3YcfGJpl%2Bvug%2FX%2BCQCYW5d2oEnW3eMMVKk5OIHjGaCw4ApgxH8Qmevzgx%2FLwWRuPZ5TSNfhl80%2B7mLHdorxHjmNqdBEp5C0d0weDoq%2Fgf1cS%2Bizim%2BR5YbfhxKCYYUDYGiZql5ny3R05HpacfkJcsSuMEm590k%2FOaYJaGF5TxWpuRdvAadWw2KbLpsIf76LOBcCArAq4Uj8y9b2wsrqobW7Pg3DOD%2BDJdolEGfEikNu10GnyIL2vzDg%2FrNRxOkby3XgYgY6ARKAh0biByLNauUPQBWPyWn0g58J0V5yXZErOxU%2F%2B0fY91nUHNdAG1tPLHd72rvfHHX1rByf3ylDb2MJ5ptiw70JI4sMPa2%2FMQGOqUBXpWyVJ3e%2BJCz467HXBerexUHG9NyY05sYafo4DELFVLjryjAPjvSNYQ%2FkA1ayJXRqbhKdIS1S%2Fz8M2hL%2BChJfDI3zNQde3iU87oOwIhjxyk0nx8%2FhZTTmGHysczOrsS7gjs6vS7lSb5fWleaKiTMtmCBUo0DhainVhHOG%2BSgxYYq%2F85k1iZl7Hlix%2FuoC0CkZR4885gh97SvdqwcbO2aSOPQk7ax&X-Amz-Signature=1e20ddf65ca462b5fb7208c870beb278c9f7309527ad01ff484008ba47b214db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLQ2KB43%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIG2R7I8KdW7Tw8YWMq6xyRsSg6DbFU1TArj2EJeDUuRtAiEAjA%2BeW8cM6b%2FrwU5zPJTV3enRetD8qJ%2FDa19rusdIVXgq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDIJl0uSzYq2ICe7QWSrcA1aB5I7RzbJ%2Fa9KocV9PYUJs7TwCmdHjlq%2F0DrKnyX9AnKWO8zCIW94RM2sIQXJLaML%2B9eWxEdZ3cYAz2VfObjFSgDJVEgB30fAJTeuRZSATZL7VJuyFy4PaLhApjMYZNsfDTZZrw%2BUGhpQb3SCrcuavKFNAUsb58CsHGmlIrHkwoDPTSX1g4F6sG2JvDxJaP6k8zp8gCtVjhmsLtDS1fnAWpwJwsQzcph2yUNb7ypQ4uR4qmXuJjSpW19V1KI3t2m4rd9IgKZQ6jPMbGC5bjmzQcd3YcfGJpl%2Bvug%2FX%2BCQCYW5d2oEnW3eMMVKk5OIHjGaCw4ApgxH8Qmevzgx%2FLwWRuPZ5TSNfhl80%2B7mLHdorxHjmNqdBEp5C0d0weDoq%2Fgf1cS%2Bizim%2BR5YbfhxKCYYUDYGiZql5ny3R05HpacfkJcsSuMEm590k%2FOaYJaGF5TxWpuRdvAadWw2KbLpsIf76LOBcCArAq4Uj8y9b2wsrqobW7Pg3DOD%2BDJdolEGfEikNu10GnyIL2vzDg%2FrNRxOkby3XgYgY6ARKAh0biByLNauUPQBWPyWn0g58J0V5yXZErOxU%2F%2B0fY91nUHNdAG1tPLHd72rvfHHX1rByf3ylDb2MJ5ptiw70JI4sMPa2%2FMQGOqUBXpWyVJ3e%2BJCz467HXBerexUHG9NyY05sYafo4DELFVLjryjAPjvSNYQ%2FkA1ayJXRqbhKdIS1S%2Fz8M2hL%2BChJfDI3zNQde3iU87oOwIhjxyk0nx8%2FhZTTmGHysczOrsS7gjs6vS7lSb5fWleaKiTMtmCBUo0DhainVhHOG%2BSgxYYq%2F85k1iZl7Hlix%2FuoC0CkZR4885gh97SvdqwcbO2aSOPQk7ax&X-Amz-Signature=a95b424b383892ced57819a9a56d4f79d82a7f3545bc7438e7d38f2bc5514e31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLQ2KB43%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIG2R7I8KdW7Tw8YWMq6xyRsSg6DbFU1TArj2EJeDUuRtAiEAjA%2BeW8cM6b%2FrwU5zPJTV3enRetD8qJ%2FDa19rusdIVXgq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDIJl0uSzYq2ICe7QWSrcA1aB5I7RzbJ%2Fa9KocV9PYUJs7TwCmdHjlq%2F0DrKnyX9AnKWO8zCIW94RM2sIQXJLaML%2B9eWxEdZ3cYAz2VfObjFSgDJVEgB30fAJTeuRZSATZL7VJuyFy4PaLhApjMYZNsfDTZZrw%2BUGhpQb3SCrcuavKFNAUsb58CsHGmlIrHkwoDPTSX1g4F6sG2JvDxJaP6k8zp8gCtVjhmsLtDS1fnAWpwJwsQzcph2yUNb7ypQ4uR4qmXuJjSpW19V1KI3t2m4rd9IgKZQ6jPMbGC5bjmzQcd3YcfGJpl%2Bvug%2FX%2BCQCYW5d2oEnW3eMMVKk5OIHjGaCw4ApgxH8Qmevzgx%2FLwWRuPZ5TSNfhl80%2B7mLHdorxHjmNqdBEp5C0d0weDoq%2Fgf1cS%2Bizim%2BR5YbfhxKCYYUDYGiZql5ny3R05HpacfkJcsSuMEm590k%2FOaYJaGF5TxWpuRdvAadWw2KbLpsIf76LOBcCArAq4Uj8y9b2wsrqobW7Pg3DOD%2BDJdolEGfEikNu10GnyIL2vzDg%2FrNRxOkby3XgYgY6ARKAh0biByLNauUPQBWPyWn0g58J0V5yXZErOxU%2F%2B0fY91nUHNdAG1tPLHd72rvfHHX1rByf3ylDb2MJ5ptiw70JI4sMPa2%2FMQGOqUBXpWyVJ3e%2BJCz467HXBerexUHG9NyY05sYafo4DELFVLjryjAPjvSNYQ%2FkA1ayJXRqbhKdIS1S%2Fz8M2hL%2BChJfDI3zNQde3iU87oOwIhjxyk0nx8%2FhZTTmGHysczOrsS7gjs6vS7lSb5fWleaKiTMtmCBUo0DhainVhHOG%2BSgxYYq%2F85k1iZl7Hlix%2FuoC0CkZR4885gh97SvdqwcbO2aSOPQk7ax&X-Amz-Signature=e43ffb85dffaa1e22ee059a2cc488473dbe99da45ae246f6e44ac240af6fa227&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLQ2KB43%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIG2R7I8KdW7Tw8YWMq6xyRsSg6DbFU1TArj2EJeDUuRtAiEAjA%2BeW8cM6b%2FrwU5zPJTV3enRetD8qJ%2FDa19rusdIVXgq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDIJl0uSzYq2ICe7QWSrcA1aB5I7RzbJ%2Fa9KocV9PYUJs7TwCmdHjlq%2F0DrKnyX9AnKWO8zCIW94RM2sIQXJLaML%2B9eWxEdZ3cYAz2VfObjFSgDJVEgB30fAJTeuRZSATZL7VJuyFy4PaLhApjMYZNsfDTZZrw%2BUGhpQb3SCrcuavKFNAUsb58CsHGmlIrHkwoDPTSX1g4F6sG2JvDxJaP6k8zp8gCtVjhmsLtDS1fnAWpwJwsQzcph2yUNb7ypQ4uR4qmXuJjSpW19V1KI3t2m4rd9IgKZQ6jPMbGC5bjmzQcd3YcfGJpl%2Bvug%2FX%2BCQCYW5d2oEnW3eMMVKk5OIHjGaCw4ApgxH8Qmevzgx%2FLwWRuPZ5TSNfhl80%2B7mLHdorxHjmNqdBEp5C0d0weDoq%2Fgf1cS%2Bizim%2BR5YbfhxKCYYUDYGiZql5ny3R05HpacfkJcsSuMEm590k%2FOaYJaGF5TxWpuRdvAadWw2KbLpsIf76LOBcCArAq4Uj8y9b2wsrqobW7Pg3DOD%2BDJdolEGfEikNu10GnyIL2vzDg%2FrNRxOkby3XgYgY6ARKAh0biByLNauUPQBWPyWn0g58J0V5yXZErOxU%2F%2B0fY91nUHNdAG1tPLHd72rvfHHX1rByf3ylDb2MJ5ptiw70JI4sMPa2%2FMQGOqUBXpWyVJ3e%2BJCz467HXBerexUHG9NyY05sYafo4DELFVLjryjAPjvSNYQ%2FkA1ayJXRqbhKdIS1S%2Fz8M2hL%2BChJfDI3zNQde3iU87oOwIhjxyk0nx8%2FhZTTmGHysczOrsS7gjs6vS7lSb5fWleaKiTMtmCBUo0DhainVhHOG%2BSgxYYq%2F85k1iZl7Hlix%2FuoC0CkZR4885gh97SvdqwcbO2aSOPQk7ax&X-Amz-Signature=41b637bbe217e3a5e6128103d4d2e09cbba337c4f0c0c9dfc92b66c5f44a840c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLQ2KB43%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIG2R7I8KdW7Tw8YWMq6xyRsSg6DbFU1TArj2EJeDUuRtAiEAjA%2BeW8cM6b%2FrwU5zPJTV3enRetD8qJ%2FDa19rusdIVXgq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDIJl0uSzYq2ICe7QWSrcA1aB5I7RzbJ%2Fa9KocV9PYUJs7TwCmdHjlq%2F0DrKnyX9AnKWO8zCIW94RM2sIQXJLaML%2B9eWxEdZ3cYAz2VfObjFSgDJVEgB30fAJTeuRZSATZL7VJuyFy4PaLhApjMYZNsfDTZZrw%2BUGhpQb3SCrcuavKFNAUsb58CsHGmlIrHkwoDPTSX1g4F6sG2JvDxJaP6k8zp8gCtVjhmsLtDS1fnAWpwJwsQzcph2yUNb7ypQ4uR4qmXuJjSpW19V1KI3t2m4rd9IgKZQ6jPMbGC5bjmzQcd3YcfGJpl%2Bvug%2FX%2BCQCYW5d2oEnW3eMMVKk5OIHjGaCw4ApgxH8Qmevzgx%2FLwWRuPZ5TSNfhl80%2B7mLHdorxHjmNqdBEp5C0d0weDoq%2Fgf1cS%2Bizim%2BR5YbfhxKCYYUDYGiZql5ny3R05HpacfkJcsSuMEm590k%2FOaYJaGF5TxWpuRdvAadWw2KbLpsIf76LOBcCArAq4Uj8y9b2wsrqobW7Pg3DOD%2BDJdolEGfEikNu10GnyIL2vzDg%2FrNRxOkby3XgYgY6ARKAh0biByLNauUPQBWPyWn0g58J0V5yXZErOxU%2F%2B0fY91nUHNdAG1tPLHd72rvfHHX1rByf3ylDb2MJ5ptiw70JI4sMPa2%2FMQGOqUBXpWyVJ3e%2BJCz467HXBerexUHG9NyY05sYafo4DELFVLjryjAPjvSNYQ%2FkA1ayJXRqbhKdIS1S%2Fz8M2hL%2BChJfDI3zNQde3iU87oOwIhjxyk0nx8%2FhZTTmGHysczOrsS7gjs6vS7lSb5fWleaKiTMtmCBUo0DhainVhHOG%2BSgxYYq%2F85k1iZl7Hlix%2FuoC0CkZR4885gh97SvdqwcbO2aSOPQk7ax&X-Amz-Signature=600a88bbe0fc1a54eb1285c830666b6f47f998fc3e01298544d5386d174f3cb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLQ2KB43%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIG2R7I8KdW7Tw8YWMq6xyRsSg6DbFU1TArj2EJeDUuRtAiEAjA%2BeW8cM6b%2FrwU5zPJTV3enRetD8qJ%2FDa19rusdIVXgq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDIJl0uSzYq2ICe7QWSrcA1aB5I7RzbJ%2Fa9KocV9PYUJs7TwCmdHjlq%2F0DrKnyX9AnKWO8zCIW94RM2sIQXJLaML%2B9eWxEdZ3cYAz2VfObjFSgDJVEgB30fAJTeuRZSATZL7VJuyFy4PaLhApjMYZNsfDTZZrw%2BUGhpQb3SCrcuavKFNAUsb58CsHGmlIrHkwoDPTSX1g4F6sG2JvDxJaP6k8zp8gCtVjhmsLtDS1fnAWpwJwsQzcph2yUNb7ypQ4uR4qmXuJjSpW19V1KI3t2m4rd9IgKZQ6jPMbGC5bjmzQcd3YcfGJpl%2Bvug%2FX%2BCQCYW5d2oEnW3eMMVKk5OIHjGaCw4ApgxH8Qmevzgx%2FLwWRuPZ5TSNfhl80%2B7mLHdorxHjmNqdBEp5C0d0weDoq%2Fgf1cS%2Bizim%2BR5YbfhxKCYYUDYGiZql5ny3R05HpacfkJcsSuMEm590k%2FOaYJaGF5TxWpuRdvAadWw2KbLpsIf76LOBcCArAq4Uj8y9b2wsrqobW7Pg3DOD%2BDJdolEGfEikNu10GnyIL2vzDg%2FrNRxOkby3XgYgY6ARKAh0biByLNauUPQBWPyWn0g58J0V5yXZErOxU%2F%2B0fY91nUHNdAG1tPLHd72rvfHHX1rByf3ylDb2MJ5ptiw70JI4sMPa2%2FMQGOqUBXpWyVJ3e%2BJCz467HXBerexUHG9NyY05sYafo4DELFVLjryjAPjvSNYQ%2FkA1ayJXRqbhKdIS1S%2Fz8M2hL%2BChJfDI3zNQde3iU87oOwIhjxyk0nx8%2FhZTTmGHysczOrsS7gjs6vS7lSb5fWleaKiTMtmCBUo0DhainVhHOG%2BSgxYYq%2F85k1iZl7Hlix%2FuoC0CkZR4885gh97SvdqwcbO2aSOPQk7ax&X-Amz-Signature=e0ee25989ebe80bfc8457dde3f9d69a732f741b4f04295c6fdcb480dd39536e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLQ2KB43%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIG2R7I8KdW7Tw8YWMq6xyRsSg6DbFU1TArj2EJeDUuRtAiEAjA%2BeW8cM6b%2FrwU5zPJTV3enRetD8qJ%2FDa19rusdIVXgq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDIJl0uSzYq2ICe7QWSrcA1aB5I7RzbJ%2Fa9KocV9PYUJs7TwCmdHjlq%2F0DrKnyX9AnKWO8zCIW94RM2sIQXJLaML%2B9eWxEdZ3cYAz2VfObjFSgDJVEgB30fAJTeuRZSATZL7VJuyFy4PaLhApjMYZNsfDTZZrw%2BUGhpQb3SCrcuavKFNAUsb58CsHGmlIrHkwoDPTSX1g4F6sG2JvDxJaP6k8zp8gCtVjhmsLtDS1fnAWpwJwsQzcph2yUNb7ypQ4uR4qmXuJjSpW19V1KI3t2m4rd9IgKZQ6jPMbGC5bjmzQcd3YcfGJpl%2Bvug%2FX%2BCQCYW5d2oEnW3eMMVKk5OIHjGaCw4ApgxH8Qmevzgx%2FLwWRuPZ5TSNfhl80%2B7mLHdorxHjmNqdBEp5C0d0weDoq%2Fgf1cS%2Bizim%2BR5YbfhxKCYYUDYGiZql5ny3R05HpacfkJcsSuMEm590k%2FOaYJaGF5TxWpuRdvAadWw2KbLpsIf76LOBcCArAq4Uj8y9b2wsrqobW7Pg3DOD%2BDJdolEGfEikNu10GnyIL2vzDg%2FrNRxOkby3XgYgY6ARKAh0biByLNauUPQBWPyWn0g58J0V5yXZErOxU%2F%2B0fY91nUHNdAG1tPLHd72rvfHHX1rByf3ylDb2MJ5ptiw70JI4sMPa2%2FMQGOqUBXpWyVJ3e%2BJCz467HXBerexUHG9NyY05sYafo4DELFVLjryjAPjvSNYQ%2FkA1ayJXRqbhKdIS1S%2Fz8M2hL%2BChJfDI3zNQde3iU87oOwIhjxyk0nx8%2FhZTTmGHysczOrsS7gjs6vS7lSb5fWleaKiTMtmCBUo0DhainVhHOG%2BSgxYYq%2F85k1iZl7Hlix%2FuoC0CkZR4885gh97SvdqwcbO2aSOPQk7ax&X-Amz-Signature=41b46476fe6e49a17c193cd9a2e2d252362ffd82dc0610f560d3beeb78431160&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLQ2KB43%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIG2R7I8KdW7Tw8YWMq6xyRsSg6DbFU1TArj2EJeDUuRtAiEAjA%2BeW8cM6b%2FrwU5zPJTV3enRetD8qJ%2FDa19rusdIVXgq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDIJl0uSzYq2ICe7QWSrcA1aB5I7RzbJ%2Fa9KocV9PYUJs7TwCmdHjlq%2F0DrKnyX9AnKWO8zCIW94RM2sIQXJLaML%2B9eWxEdZ3cYAz2VfObjFSgDJVEgB30fAJTeuRZSATZL7VJuyFy4PaLhApjMYZNsfDTZZrw%2BUGhpQb3SCrcuavKFNAUsb58CsHGmlIrHkwoDPTSX1g4F6sG2JvDxJaP6k8zp8gCtVjhmsLtDS1fnAWpwJwsQzcph2yUNb7ypQ4uR4qmXuJjSpW19V1KI3t2m4rd9IgKZQ6jPMbGC5bjmzQcd3YcfGJpl%2Bvug%2FX%2BCQCYW5d2oEnW3eMMVKk5OIHjGaCw4ApgxH8Qmevzgx%2FLwWRuPZ5TSNfhl80%2B7mLHdorxHjmNqdBEp5C0d0weDoq%2Fgf1cS%2Bizim%2BR5YbfhxKCYYUDYGiZql5ny3R05HpacfkJcsSuMEm590k%2FOaYJaGF5TxWpuRdvAadWw2KbLpsIf76LOBcCArAq4Uj8y9b2wsrqobW7Pg3DOD%2BDJdolEGfEikNu10GnyIL2vzDg%2FrNRxOkby3XgYgY6ARKAh0biByLNauUPQBWPyWn0g58J0V5yXZErOxU%2F%2B0fY91nUHNdAG1tPLHd72rvfHHX1rByf3ylDb2MJ5ptiw70JI4sMPa2%2FMQGOqUBXpWyVJ3e%2BJCz467HXBerexUHG9NyY05sYafo4DELFVLjryjAPjvSNYQ%2FkA1ayJXRqbhKdIS1S%2Fz8M2hL%2BChJfDI3zNQde3iU87oOwIhjxyk0nx8%2FhZTTmGHysczOrsS7gjs6vS7lSb5fWleaKiTMtmCBUo0DhainVhHOG%2BSgxYYq%2F85k1iZl7Hlix%2FuoC0CkZR4885gh97SvdqwcbO2aSOPQk7ax&X-Amz-Signature=7bc4e92dc3aee2ca2fafa74043eee0b272cd2cfa05c83f7d21067a2a051280e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLQ2KB43%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIG2R7I8KdW7Tw8YWMq6xyRsSg6DbFU1TArj2EJeDUuRtAiEAjA%2BeW8cM6b%2FrwU5zPJTV3enRetD8qJ%2FDa19rusdIVXgq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDIJl0uSzYq2ICe7QWSrcA1aB5I7RzbJ%2Fa9KocV9PYUJs7TwCmdHjlq%2F0DrKnyX9AnKWO8zCIW94RM2sIQXJLaML%2B9eWxEdZ3cYAz2VfObjFSgDJVEgB30fAJTeuRZSATZL7VJuyFy4PaLhApjMYZNsfDTZZrw%2BUGhpQb3SCrcuavKFNAUsb58CsHGmlIrHkwoDPTSX1g4F6sG2JvDxJaP6k8zp8gCtVjhmsLtDS1fnAWpwJwsQzcph2yUNb7ypQ4uR4qmXuJjSpW19V1KI3t2m4rd9IgKZQ6jPMbGC5bjmzQcd3YcfGJpl%2Bvug%2FX%2BCQCYW5d2oEnW3eMMVKk5OIHjGaCw4ApgxH8Qmevzgx%2FLwWRuPZ5TSNfhl80%2B7mLHdorxHjmNqdBEp5C0d0weDoq%2Fgf1cS%2Bizim%2BR5YbfhxKCYYUDYGiZql5ny3R05HpacfkJcsSuMEm590k%2FOaYJaGF5TxWpuRdvAadWw2KbLpsIf76LOBcCArAq4Uj8y9b2wsrqobW7Pg3DOD%2BDJdolEGfEikNu10GnyIL2vzDg%2FrNRxOkby3XgYgY6ARKAh0biByLNauUPQBWPyWn0g58J0V5yXZErOxU%2F%2B0fY91nUHNdAG1tPLHd72rvfHHX1rByf3ylDb2MJ5ptiw70JI4sMPa2%2FMQGOqUBXpWyVJ3e%2BJCz467HXBerexUHG9NyY05sYafo4DELFVLjryjAPjvSNYQ%2FkA1ayJXRqbhKdIS1S%2Fz8M2hL%2BChJfDI3zNQde3iU87oOwIhjxyk0nx8%2FhZTTmGHysczOrsS7gjs6vS7lSb5fWleaKiTMtmCBUo0DhainVhHOG%2BSgxYYq%2F85k1iZl7Hlix%2FuoC0CkZR4885gh97SvdqwcbO2aSOPQk7ax&X-Amz-Signature=ed3c647f683d7d979bd94a99da611470bd20be9ee08f0a0f268a1e666b25c519&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLQ2KB43%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIG2R7I8KdW7Tw8YWMq6xyRsSg6DbFU1TArj2EJeDUuRtAiEAjA%2BeW8cM6b%2FrwU5zPJTV3enRetD8qJ%2FDa19rusdIVXgq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDIJl0uSzYq2ICe7QWSrcA1aB5I7RzbJ%2Fa9KocV9PYUJs7TwCmdHjlq%2F0DrKnyX9AnKWO8zCIW94RM2sIQXJLaML%2B9eWxEdZ3cYAz2VfObjFSgDJVEgB30fAJTeuRZSATZL7VJuyFy4PaLhApjMYZNsfDTZZrw%2BUGhpQb3SCrcuavKFNAUsb58CsHGmlIrHkwoDPTSX1g4F6sG2JvDxJaP6k8zp8gCtVjhmsLtDS1fnAWpwJwsQzcph2yUNb7ypQ4uR4qmXuJjSpW19V1KI3t2m4rd9IgKZQ6jPMbGC5bjmzQcd3YcfGJpl%2Bvug%2FX%2BCQCYW5d2oEnW3eMMVKk5OIHjGaCw4ApgxH8Qmevzgx%2FLwWRuPZ5TSNfhl80%2B7mLHdorxHjmNqdBEp5C0d0weDoq%2Fgf1cS%2Bizim%2BR5YbfhxKCYYUDYGiZql5ny3R05HpacfkJcsSuMEm590k%2FOaYJaGF5TxWpuRdvAadWw2KbLpsIf76LOBcCArAq4Uj8y9b2wsrqobW7Pg3DOD%2BDJdolEGfEikNu10GnyIL2vzDg%2FrNRxOkby3XgYgY6ARKAh0biByLNauUPQBWPyWn0g58J0V5yXZErOxU%2F%2B0fY91nUHNdAG1tPLHd72rvfHHX1rByf3ylDb2MJ5ptiw70JI4sMPa2%2FMQGOqUBXpWyVJ3e%2BJCz467HXBerexUHG9NyY05sYafo4DELFVLjryjAPjvSNYQ%2FkA1ayJXRqbhKdIS1S%2Fz8M2hL%2BChJfDI3zNQde3iU87oOwIhjxyk0nx8%2FhZTTmGHysczOrsS7gjs6vS7lSb5fWleaKiTMtmCBUo0DhainVhHOG%2BSgxYYq%2F85k1iZl7Hlix%2FuoC0CkZR4885gh97SvdqwcbO2aSOPQk7ax&X-Amz-Signature=be0ba0690a5756258848c67c516ff2d4c92a2bfa57d2521034431d1776561c1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
