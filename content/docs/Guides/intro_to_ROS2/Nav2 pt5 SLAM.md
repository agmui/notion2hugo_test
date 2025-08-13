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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NK6VVBG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqDOYF2UQHM07pxSwpLTmestjAakv1H3lbN%2BBH8wXDWAiBlJeZXk9%2BZ%2Fc8cfuwdB3bNdSarNilf6x0uUlAGxd6NTCr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMHaZKZE7MY%2F8E0DUZKtwDS6dEHXJ%2FAi51aEeHDIg2QPcbQ0Tw3Kp4qjdfhfPiuD3Y9fWoPccOKtBr3at17mCT3AuW%2FG4XIWQR20KOPe9aGolusOi7LnWeIA2isr2TpjPqtpjfVNBlG1DiVDm2fi%2BthmaOygl2WyTrkfr8dn2msgl6TvufVr7y%2BxIkUYQI0oDnkoKXW0edz%2FluYzN0w4q9zVU0V6gn2sI7vXX%2By99VF0DpqcvYvoni%2B0BcrWvqMo3AyGiv4cF9K4gO0cm0zOdaBkEOIVcZ9jRo%2BMFrdDBx80WcNRrt6dDUPHNifNo%2FGGf9mfC5FUsarf7Cy8MeCXhjo1EJ4hLgbo94xrFPw8Lgt%2FvCTMkB776CKb5ylrHEC%2BBSteO4mDIzBls1WRUnmXM5HyJessgvYF1knU0er8V79TY9CH1B%2FvGlCEewZuGlfEN%2FXy1ZQ9xKul1ZMbndGuRExAs4%2Foep9dmqYHWsR7YTqnUqqf38n97K%2Fhs3wElSwWMffdhosiviJsCa4vw6xMkmMfRPhGTkg0CxUNhNo79fNO1PICrwkwGcM4rwF4%2FJp7VhxkICT5ZQngPw%2FwwDFV2ek%2FTZzWyqrD31z%2BRuePESvVhGuNbn6%2BgnvGQR9yLSzcB4rqyekWtw5irz6tcwzOnxxAY6pgGx0LTtR5%2FLJ3dPPomaaL6bFz5O%2BzzZ3Hh9Fh2tN3fLdNBOkKig4SR9nSzTIF5u2zFQTcoyrqWypUQ13cD92%2FA9lkYZ%2B2aR26S7LXbmIJn%2BSZx7B8qj3NaaW0HG7Q2Ilqn%2BGg5kqEcSHeaCeXNsszQpb0g%2Fv8TcPYbrYGh5BMMiAsEhmnwlxtRexJCykYafRhvUXFhxSFD3%2ByKH1Ep%2FhLq0cFKjVHFk&X-Amz-Signature=55def0d9f1e860a909c5aee9c82d4ffb0d570e294fc19ada77efd949b3edf5ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NK6VVBG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqDOYF2UQHM07pxSwpLTmestjAakv1H3lbN%2BBH8wXDWAiBlJeZXk9%2BZ%2Fc8cfuwdB3bNdSarNilf6x0uUlAGxd6NTCr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMHaZKZE7MY%2F8E0DUZKtwDS6dEHXJ%2FAi51aEeHDIg2QPcbQ0Tw3Kp4qjdfhfPiuD3Y9fWoPccOKtBr3at17mCT3AuW%2FG4XIWQR20KOPe9aGolusOi7LnWeIA2isr2TpjPqtpjfVNBlG1DiVDm2fi%2BthmaOygl2WyTrkfr8dn2msgl6TvufVr7y%2BxIkUYQI0oDnkoKXW0edz%2FluYzN0w4q9zVU0V6gn2sI7vXX%2By99VF0DpqcvYvoni%2B0BcrWvqMo3AyGiv4cF9K4gO0cm0zOdaBkEOIVcZ9jRo%2BMFrdDBx80WcNRrt6dDUPHNifNo%2FGGf9mfC5FUsarf7Cy8MeCXhjo1EJ4hLgbo94xrFPw8Lgt%2FvCTMkB776CKb5ylrHEC%2BBSteO4mDIzBls1WRUnmXM5HyJessgvYF1knU0er8V79TY9CH1B%2FvGlCEewZuGlfEN%2FXy1ZQ9xKul1ZMbndGuRExAs4%2Foep9dmqYHWsR7YTqnUqqf38n97K%2Fhs3wElSwWMffdhosiviJsCa4vw6xMkmMfRPhGTkg0CxUNhNo79fNO1PICrwkwGcM4rwF4%2FJp7VhxkICT5ZQngPw%2FwwDFV2ek%2FTZzWyqrD31z%2BRuePESvVhGuNbn6%2BgnvGQR9yLSzcB4rqyekWtw5irz6tcwzOnxxAY6pgGx0LTtR5%2FLJ3dPPomaaL6bFz5O%2BzzZ3Hh9Fh2tN3fLdNBOkKig4SR9nSzTIF5u2zFQTcoyrqWypUQ13cD92%2FA9lkYZ%2B2aR26S7LXbmIJn%2BSZx7B8qj3NaaW0HG7Q2Ilqn%2BGg5kqEcSHeaCeXNsszQpb0g%2Fv8TcPYbrYGh5BMMiAsEhmnwlxtRexJCykYafRhvUXFhxSFD3%2ByKH1Ep%2FhLq0cFKjVHFk&X-Amz-Signature=7d1f3fb607987c7d50513a872f2526756c637019788111d1814b356cb5821ee1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NK6VVBG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqDOYF2UQHM07pxSwpLTmestjAakv1H3lbN%2BBH8wXDWAiBlJeZXk9%2BZ%2Fc8cfuwdB3bNdSarNilf6x0uUlAGxd6NTCr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMHaZKZE7MY%2F8E0DUZKtwDS6dEHXJ%2FAi51aEeHDIg2QPcbQ0Tw3Kp4qjdfhfPiuD3Y9fWoPccOKtBr3at17mCT3AuW%2FG4XIWQR20KOPe9aGolusOi7LnWeIA2isr2TpjPqtpjfVNBlG1DiVDm2fi%2BthmaOygl2WyTrkfr8dn2msgl6TvufVr7y%2BxIkUYQI0oDnkoKXW0edz%2FluYzN0w4q9zVU0V6gn2sI7vXX%2By99VF0DpqcvYvoni%2B0BcrWvqMo3AyGiv4cF9K4gO0cm0zOdaBkEOIVcZ9jRo%2BMFrdDBx80WcNRrt6dDUPHNifNo%2FGGf9mfC5FUsarf7Cy8MeCXhjo1EJ4hLgbo94xrFPw8Lgt%2FvCTMkB776CKb5ylrHEC%2BBSteO4mDIzBls1WRUnmXM5HyJessgvYF1knU0er8V79TY9CH1B%2FvGlCEewZuGlfEN%2FXy1ZQ9xKul1ZMbndGuRExAs4%2Foep9dmqYHWsR7YTqnUqqf38n97K%2Fhs3wElSwWMffdhosiviJsCa4vw6xMkmMfRPhGTkg0CxUNhNo79fNO1PICrwkwGcM4rwF4%2FJp7VhxkICT5ZQngPw%2FwwDFV2ek%2FTZzWyqrD31z%2BRuePESvVhGuNbn6%2BgnvGQR9yLSzcB4rqyekWtw5irz6tcwzOnxxAY6pgGx0LTtR5%2FLJ3dPPomaaL6bFz5O%2BzzZ3Hh9Fh2tN3fLdNBOkKig4SR9nSzTIF5u2zFQTcoyrqWypUQ13cD92%2FA9lkYZ%2B2aR26S7LXbmIJn%2BSZx7B8qj3NaaW0HG7Q2Ilqn%2BGg5kqEcSHeaCeXNsszQpb0g%2Fv8TcPYbrYGh5BMMiAsEhmnwlxtRexJCykYafRhvUXFhxSFD3%2ByKH1Ep%2FhLq0cFKjVHFk&X-Amz-Signature=0cc3a733f3a872e170bccc9804c37e2e1bbe7977f279174188c23ed8d9e96d8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NK6VVBG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqDOYF2UQHM07pxSwpLTmestjAakv1H3lbN%2BBH8wXDWAiBlJeZXk9%2BZ%2Fc8cfuwdB3bNdSarNilf6x0uUlAGxd6NTCr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMHaZKZE7MY%2F8E0DUZKtwDS6dEHXJ%2FAi51aEeHDIg2QPcbQ0Tw3Kp4qjdfhfPiuD3Y9fWoPccOKtBr3at17mCT3AuW%2FG4XIWQR20KOPe9aGolusOi7LnWeIA2isr2TpjPqtpjfVNBlG1DiVDm2fi%2BthmaOygl2WyTrkfr8dn2msgl6TvufVr7y%2BxIkUYQI0oDnkoKXW0edz%2FluYzN0w4q9zVU0V6gn2sI7vXX%2By99VF0DpqcvYvoni%2B0BcrWvqMo3AyGiv4cF9K4gO0cm0zOdaBkEOIVcZ9jRo%2BMFrdDBx80WcNRrt6dDUPHNifNo%2FGGf9mfC5FUsarf7Cy8MeCXhjo1EJ4hLgbo94xrFPw8Lgt%2FvCTMkB776CKb5ylrHEC%2BBSteO4mDIzBls1WRUnmXM5HyJessgvYF1knU0er8V79TY9CH1B%2FvGlCEewZuGlfEN%2FXy1ZQ9xKul1ZMbndGuRExAs4%2Foep9dmqYHWsR7YTqnUqqf38n97K%2Fhs3wElSwWMffdhosiviJsCa4vw6xMkmMfRPhGTkg0CxUNhNo79fNO1PICrwkwGcM4rwF4%2FJp7VhxkICT5ZQngPw%2FwwDFV2ek%2FTZzWyqrD31z%2BRuePESvVhGuNbn6%2BgnvGQR9yLSzcB4rqyekWtw5irz6tcwzOnxxAY6pgGx0LTtR5%2FLJ3dPPomaaL6bFz5O%2BzzZ3Hh9Fh2tN3fLdNBOkKig4SR9nSzTIF5u2zFQTcoyrqWypUQ13cD92%2FA9lkYZ%2B2aR26S7LXbmIJn%2BSZx7B8qj3NaaW0HG7Q2Ilqn%2BGg5kqEcSHeaCeXNsszQpb0g%2Fv8TcPYbrYGh5BMMiAsEhmnwlxtRexJCykYafRhvUXFhxSFD3%2ByKH1Ep%2FhLq0cFKjVHFk&X-Amz-Signature=8099ee980b8b6ea24d0d5515f6c526e85fbdccf76b35023ab705586a96b85842&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NK6VVBG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqDOYF2UQHM07pxSwpLTmestjAakv1H3lbN%2BBH8wXDWAiBlJeZXk9%2BZ%2Fc8cfuwdB3bNdSarNilf6x0uUlAGxd6NTCr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMHaZKZE7MY%2F8E0DUZKtwDS6dEHXJ%2FAi51aEeHDIg2QPcbQ0Tw3Kp4qjdfhfPiuD3Y9fWoPccOKtBr3at17mCT3AuW%2FG4XIWQR20KOPe9aGolusOi7LnWeIA2isr2TpjPqtpjfVNBlG1DiVDm2fi%2BthmaOygl2WyTrkfr8dn2msgl6TvufVr7y%2BxIkUYQI0oDnkoKXW0edz%2FluYzN0w4q9zVU0V6gn2sI7vXX%2By99VF0DpqcvYvoni%2B0BcrWvqMo3AyGiv4cF9K4gO0cm0zOdaBkEOIVcZ9jRo%2BMFrdDBx80WcNRrt6dDUPHNifNo%2FGGf9mfC5FUsarf7Cy8MeCXhjo1EJ4hLgbo94xrFPw8Lgt%2FvCTMkB776CKb5ylrHEC%2BBSteO4mDIzBls1WRUnmXM5HyJessgvYF1knU0er8V79TY9CH1B%2FvGlCEewZuGlfEN%2FXy1ZQ9xKul1ZMbndGuRExAs4%2Foep9dmqYHWsR7YTqnUqqf38n97K%2Fhs3wElSwWMffdhosiviJsCa4vw6xMkmMfRPhGTkg0CxUNhNo79fNO1PICrwkwGcM4rwF4%2FJp7VhxkICT5ZQngPw%2FwwDFV2ek%2FTZzWyqrD31z%2BRuePESvVhGuNbn6%2BgnvGQR9yLSzcB4rqyekWtw5irz6tcwzOnxxAY6pgGx0LTtR5%2FLJ3dPPomaaL6bFz5O%2BzzZ3Hh9Fh2tN3fLdNBOkKig4SR9nSzTIF5u2zFQTcoyrqWypUQ13cD92%2FA9lkYZ%2B2aR26S7LXbmIJn%2BSZx7B8qj3NaaW0HG7Q2Ilqn%2BGg5kqEcSHeaCeXNsszQpb0g%2Fv8TcPYbrYGh5BMMiAsEhmnwlxtRexJCykYafRhvUXFhxSFD3%2ByKH1Ep%2FhLq0cFKjVHFk&X-Amz-Signature=8221208bf607eae099b4d7c88779d86ce64a59ead8d08dccf370db1752fa5577&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NK6VVBG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqDOYF2UQHM07pxSwpLTmestjAakv1H3lbN%2BBH8wXDWAiBlJeZXk9%2BZ%2Fc8cfuwdB3bNdSarNilf6x0uUlAGxd6NTCr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMHaZKZE7MY%2F8E0DUZKtwDS6dEHXJ%2FAi51aEeHDIg2QPcbQ0Tw3Kp4qjdfhfPiuD3Y9fWoPccOKtBr3at17mCT3AuW%2FG4XIWQR20KOPe9aGolusOi7LnWeIA2isr2TpjPqtpjfVNBlG1DiVDm2fi%2BthmaOygl2WyTrkfr8dn2msgl6TvufVr7y%2BxIkUYQI0oDnkoKXW0edz%2FluYzN0w4q9zVU0V6gn2sI7vXX%2By99VF0DpqcvYvoni%2B0BcrWvqMo3AyGiv4cF9K4gO0cm0zOdaBkEOIVcZ9jRo%2BMFrdDBx80WcNRrt6dDUPHNifNo%2FGGf9mfC5FUsarf7Cy8MeCXhjo1EJ4hLgbo94xrFPw8Lgt%2FvCTMkB776CKb5ylrHEC%2BBSteO4mDIzBls1WRUnmXM5HyJessgvYF1knU0er8V79TY9CH1B%2FvGlCEewZuGlfEN%2FXy1ZQ9xKul1ZMbndGuRExAs4%2Foep9dmqYHWsR7YTqnUqqf38n97K%2Fhs3wElSwWMffdhosiviJsCa4vw6xMkmMfRPhGTkg0CxUNhNo79fNO1PICrwkwGcM4rwF4%2FJp7VhxkICT5ZQngPw%2FwwDFV2ek%2FTZzWyqrD31z%2BRuePESvVhGuNbn6%2BgnvGQR9yLSzcB4rqyekWtw5irz6tcwzOnxxAY6pgGx0LTtR5%2FLJ3dPPomaaL6bFz5O%2BzzZ3Hh9Fh2tN3fLdNBOkKig4SR9nSzTIF5u2zFQTcoyrqWypUQ13cD92%2FA9lkYZ%2B2aR26S7LXbmIJn%2BSZx7B8qj3NaaW0HG7Q2Ilqn%2BGg5kqEcSHeaCeXNsszQpb0g%2Fv8TcPYbrYGh5BMMiAsEhmnwlxtRexJCykYafRhvUXFhxSFD3%2ByKH1Ep%2FhLq0cFKjVHFk&X-Amz-Signature=2e49ee58311a71062668d2f18d4d34a78c979ebdcef93c0d35a6a31eac052c71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NK6VVBG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqDOYF2UQHM07pxSwpLTmestjAakv1H3lbN%2BBH8wXDWAiBlJeZXk9%2BZ%2Fc8cfuwdB3bNdSarNilf6x0uUlAGxd6NTCr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMHaZKZE7MY%2F8E0DUZKtwDS6dEHXJ%2FAi51aEeHDIg2QPcbQ0Tw3Kp4qjdfhfPiuD3Y9fWoPccOKtBr3at17mCT3AuW%2FG4XIWQR20KOPe9aGolusOi7LnWeIA2isr2TpjPqtpjfVNBlG1DiVDm2fi%2BthmaOygl2WyTrkfr8dn2msgl6TvufVr7y%2BxIkUYQI0oDnkoKXW0edz%2FluYzN0w4q9zVU0V6gn2sI7vXX%2By99VF0DpqcvYvoni%2B0BcrWvqMo3AyGiv4cF9K4gO0cm0zOdaBkEOIVcZ9jRo%2BMFrdDBx80WcNRrt6dDUPHNifNo%2FGGf9mfC5FUsarf7Cy8MeCXhjo1EJ4hLgbo94xrFPw8Lgt%2FvCTMkB776CKb5ylrHEC%2BBSteO4mDIzBls1WRUnmXM5HyJessgvYF1knU0er8V79TY9CH1B%2FvGlCEewZuGlfEN%2FXy1ZQ9xKul1ZMbndGuRExAs4%2Foep9dmqYHWsR7YTqnUqqf38n97K%2Fhs3wElSwWMffdhosiviJsCa4vw6xMkmMfRPhGTkg0CxUNhNo79fNO1PICrwkwGcM4rwF4%2FJp7VhxkICT5ZQngPw%2FwwDFV2ek%2FTZzWyqrD31z%2BRuePESvVhGuNbn6%2BgnvGQR9yLSzcB4rqyekWtw5irz6tcwzOnxxAY6pgGx0LTtR5%2FLJ3dPPomaaL6bFz5O%2BzzZ3Hh9Fh2tN3fLdNBOkKig4SR9nSzTIF5u2zFQTcoyrqWypUQ13cD92%2FA9lkYZ%2B2aR26S7LXbmIJn%2BSZx7B8qj3NaaW0HG7Q2Ilqn%2BGg5kqEcSHeaCeXNsszQpb0g%2Fv8TcPYbrYGh5BMMiAsEhmnwlxtRexJCykYafRhvUXFhxSFD3%2ByKH1Ep%2FhLq0cFKjVHFk&X-Amz-Signature=cebd3d01aea2ca19b678e06ad46283b94df6ba6f02b5244a721691334360a90c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NK6VVBG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqDOYF2UQHM07pxSwpLTmestjAakv1H3lbN%2BBH8wXDWAiBlJeZXk9%2BZ%2Fc8cfuwdB3bNdSarNilf6x0uUlAGxd6NTCr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMHaZKZE7MY%2F8E0DUZKtwDS6dEHXJ%2FAi51aEeHDIg2QPcbQ0Tw3Kp4qjdfhfPiuD3Y9fWoPccOKtBr3at17mCT3AuW%2FG4XIWQR20KOPe9aGolusOi7LnWeIA2isr2TpjPqtpjfVNBlG1DiVDm2fi%2BthmaOygl2WyTrkfr8dn2msgl6TvufVr7y%2BxIkUYQI0oDnkoKXW0edz%2FluYzN0w4q9zVU0V6gn2sI7vXX%2By99VF0DpqcvYvoni%2B0BcrWvqMo3AyGiv4cF9K4gO0cm0zOdaBkEOIVcZ9jRo%2BMFrdDBx80WcNRrt6dDUPHNifNo%2FGGf9mfC5FUsarf7Cy8MeCXhjo1EJ4hLgbo94xrFPw8Lgt%2FvCTMkB776CKb5ylrHEC%2BBSteO4mDIzBls1WRUnmXM5HyJessgvYF1knU0er8V79TY9CH1B%2FvGlCEewZuGlfEN%2FXy1ZQ9xKul1ZMbndGuRExAs4%2Foep9dmqYHWsR7YTqnUqqf38n97K%2Fhs3wElSwWMffdhosiviJsCa4vw6xMkmMfRPhGTkg0CxUNhNo79fNO1PICrwkwGcM4rwF4%2FJp7VhxkICT5ZQngPw%2FwwDFV2ek%2FTZzWyqrD31z%2BRuePESvVhGuNbn6%2BgnvGQR9yLSzcB4rqyekWtw5irz6tcwzOnxxAY6pgGx0LTtR5%2FLJ3dPPomaaL6bFz5O%2BzzZ3Hh9Fh2tN3fLdNBOkKig4SR9nSzTIF5u2zFQTcoyrqWypUQ13cD92%2FA9lkYZ%2B2aR26S7LXbmIJn%2BSZx7B8qj3NaaW0HG7Q2Ilqn%2BGg5kqEcSHeaCeXNsszQpb0g%2Fv8TcPYbrYGh5BMMiAsEhmnwlxtRexJCykYafRhvUXFhxSFD3%2ByKH1Ep%2FhLq0cFKjVHFk&X-Amz-Signature=81e90c84ebb63b807cb562c241d6bc71ac41bfec4f8428d2779417d6ae1aad62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NK6VVBG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqDOYF2UQHM07pxSwpLTmestjAakv1H3lbN%2BBH8wXDWAiBlJeZXk9%2BZ%2Fc8cfuwdB3bNdSarNilf6x0uUlAGxd6NTCr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMHaZKZE7MY%2F8E0DUZKtwDS6dEHXJ%2FAi51aEeHDIg2QPcbQ0Tw3Kp4qjdfhfPiuD3Y9fWoPccOKtBr3at17mCT3AuW%2FG4XIWQR20KOPe9aGolusOi7LnWeIA2isr2TpjPqtpjfVNBlG1DiVDm2fi%2BthmaOygl2WyTrkfr8dn2msgl6TvufVr7y%2BxIkUYQI0oDnkoKXW0edz%2FluYzN0w4q9zVU0V6gn2sI7vXX%2By99VF0DpqcvYvoni%2B0BcrWvqMo3AyGiv4cF9K4gO0cm0zOdaBkEOIVcZ9jRo%2BMFrdDBx80WcNRrt6dDUPHNifNo%2FGGf9mfC5FUsarf7Cy8MeCXhjo1EJ4hLgbo94xrFPw8Lgt%2FvCTMkB776CKb5ylrHEC%2BBSteO4mDIzBls1WRUnmXM5HyJessgvYF1knU0er8V79TY9CH1B%2FvGlCEewZuGlfEN%2FXy1ZQ9xKul1ZMbndGuRExAs4%2Foep9dmqYHWsR7YTqnUqqf38n97K%2Fhs3wElSwWMffdhosiviJsCa4vw6xMkmMfRPhGTkg0CxUNhNo79fNO1PICrwkwGcM4rwF4%2FJp7VhxkICT5ZQngPw%2FwwDFV2ek%2FTZzWyqrD31z%2BRuePESvVhGuNbn6%2BgnvGQR9yLSzcB4rqyekWtw5irz6tcwzOnxxAY6pgGx0LTtR5%2FLJ3dPPomaaL6bFz5O%2BzzZ3Hh9Fh2tN3fLdNBOkKig4SR9nSzTIF5u2zFQTcoyrqWypUQ13cD92%2FA9lkYZ%2B2aR26S7LXbmIJn%2BSZx7B8qj3NaaW0HG7Q2Ilqn%2BGg5kqEcSHeaCeXNsszQpb0g%2Fv8TcPYbrYGh5BMMiAsEhmnwlxtRexJCykYafRhvUXFhxSFD3%2ByKH1Ep%2FhLq0cFKjVHFk&X-Amz-Signature=57eb344996622d832ebb81ceaf9d3807e6ff7288230edf220f4cb35387025d20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NK6VVBG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqDOYF2UQHM07pxSwpLTmestjAakv1H3lbN%2BBH8wXDWAiBlJeZXk9%2BZ%2Fc8cfuwdB3bNdSarNilf6x0uUlAGxd6NTCr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMHaZKZE7MY%2F8E0DUZKtwDS6dEHXJ%2FAi51aEeHDIg2QPcbQ0Tw3Kp4qjdfhfPiuD3Y9fWoPccOKtBr3at17mCT3AuW%2FG4XIWQR20KOPe9aGolusOi7LnWeIA2isr2TpjPqtpjfVNBlG1DiVDm2fi%2BthmaOygl2WyTrkfr8dn2msgl6TvufVr7y%2BxIkUYQI0oDnkoKXW0edz%2FluYzN0w4q9zVU0V6gn2sI7vXX%2By99VF0DpqcvYvoni%2B0BcrWvqMo3AyGiv4cF9K4gO0cm0zOdaBkEOIVcZ9jRo%2BMFrdDBx80WcNRrt6dDUPHNifNo%2FGGf9mfC5FUsarf7Cy8MeCXhjo1EJ4hLgbo94xrFPw8Lgt%2FvCTMkB776CKb5ylrHEC%2BBSteO4mDIzBls1WRUnmXM5HyJessgvYF1knU0er8V79TY9CH1B%2FvGlCEewZuGlfEN%2FXy1ZQ9xKul1ZMbndGuRExAs4%2Foep9dmqYHWsR7YTqnUqqf38n97K%2Fhs3wElSwWMffdhosiviJsCa4vw6xMkmMfRPhGTkg0CxUNhNo79fNO1PICrwkwGcM4rwF4%2FJp7VhxkICT5ZQngPw%2FwwDFV2ek%2FTZzWyqrD31z%2BRuePESvVhGuNbn6%2BgnvGQR9yLSzcB4rqyekWtw5irz6tcwzOnxxAY6pgGx0LTtR5%2FLJ3dPPomaaL6bFz5O%2BzzZ3Hh9Fh2tN3fLdNBOkKig4SR9nSzTIF5u2zFQTcoyrqWypUQ13cD92%2FA9lkYZ%2B2aR26S7LXbmIJn%2BSZx7B8qj3NaaW0HG7Q2Ilqn%2BGg5kqEcSHeaCeXNsszQpb0g%2Fv8TcPYbrYGh5BMMiAsEhmnwlxtRexJCykYafRhvUXFhxSFD3%2ByKH1Ep%2FhLq0cFKjVHFk&X-Amz-Signature=32315bb0becaaf188b06d265e5fa91395a9cbe1e9933b5334e34ee3a916e0080&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NK6VVBG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqDOYF2UQHM07pxSwpLTmestjAakv1H3lbN%2BBH8wXDWAiBlJeZXk9%2BZ%2Fc8cfuwdB3bNdSarNilf6x0uUlAGxd6NTCr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMHaZKZE7MY%2F8E0DUZKtwDS6dEHXJ%2FAi51aEeHDIg2QPcbQ0Tw3Kp4qjdfhfPiuD3Y9fWoPccOKtBr3at17mCT3AuW%2FG4XIWQR20KOPe9aGolusOi7LnWeIA2isr2TpjPqtpjfVNBlG1DiVDm2fi%2BthmaOygl2WyTrkfr8dn2msgl6TvufVr7y%2BxIkUYQI0oDnkoKXW0edz%2FluYzN0w4q9zVU0V6gn2sI7vXX%2By99VF0DpqcvYvoni%2B0BcrWvqMo3AyGiv4cF9K4gO0cm0zOdaBkEOIVcZ9jRo%2BMFrdDBx80WcNRrt6dDUPHNifNo%2FGGf9mfC5FUsarf7Cy8MeCXhjo1EJ4hLgbo94xrFPw8Lgt%2FvCTMkB776CKb5ylrHEC%2BBSteO4mDIzBls1WRUnmXM5HyJessgvYF1knU0er8V79TY9CH1B%2FvGlCEewZuGlfEN%2FXy1ZQ9xKul1ZMbndGuRExAs4%2Foep9dmqYHWsR7YTqnUqqf38n97K%2Fhs3wElSwWMffdhosiviJsCa4vw6xMkmMfRPhGTkg0CxUNhNo79fNO1PICrwkwGcM4rwF4%2FJp7VhxkICT5ZQngPw%2FwwDFV2ek%2FTZzWyqrD31z%2BRuePESvVhGuNbn6%2BgnvGQR9yLSzcB4rqyekWtw5irz6tcwzOnxxAY6pgGx0LTtR5%2FLJ3dPPomaaL6bFz5O%2BzzZ3Hh9Fh2tN3fLdNBOkKig4SR9nSzTIF5u2zFQTcoyrqWypUQ13cD92%2FA9lkYZ%2B2aR26S7LXbmIJn%2BSZx7B8qj3NaaW0HG7Q2Ilqn%2BGg5kqEcSHeaCeXNsszQpb0g%2Fv8TcPYbrYGh5BMMiAsEhmnwlxtRexJCykYafRhvUXFhxSFD3%2ByKH1Ep%2FhLq0cFKjVHFk&X-Amz-Signature=56006474a57a748705c3b54f12a26bc85879a7bf31048da3d1046280d1197da6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NK6VVBG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqDOYF2UQHM07pxSwpLTmestjAakv1H3lbN%2BBH8wXDWAiBlJeZXk9%2BZ%2Fc8cfuwdB3bNdSarNilf6x0uUlAGxd6NTCr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMHaZKZE7MY%2F8E0DUZKtwDS6dEHXJ%2FAi51aEeHDIg2QPcbQ0Tw3Kp4qjdfhfPiuD3Y9fWoPccOKtBr3at17mCT3AuW%2FG4XIWQR20KOPe9aGolusOi7LnWeIA2isr2TpjPqtpjfVNBlG1DiVDm2fi%2BthmaOygl2WyTrkfr8dn2msgl6TvufVr7y%2BxIkUYQI0oDnkoKXW0edz%2FluYzN0w4q9zVU0V6gn2sI7vXX%2By99VF0DpqcvYvoni%2B0BcrWvqMo3AyGiv4cF9K4gO0cm0zOdaBkEOIVcZ9jRo%2BMFrdDBx80WcNRrt6dDUPHNifNo%2FGGf9mfC5FUsarf7Cy8MeCXhjo1EJ4hLgbo94xrFPw8Lgt%2FvCTMkB776CKb5ylrHEC%2BBSteO4mDIzBls1WRUnmXM5HyJessgvYF1knU0er8V79TY9CH1B%2FvGlCEewZuGlfEN%2FXy1ZQ9xKul1ZMbndGuRExAs4%2Foep9dmqYHWsR7YTqnUqqf38n97K%2Fhs3wElSwWMffdhosiviJsCa4vw6xMkmMfRPhGTkg0CxUNhNo79fNO1PICrwkwGcM4rwF4%2FJp7VhxkICT5ZQngPw%2FwwDFV2ek%2FTZzWyqrD31z%2BRuePESvVhGuNbn6%2BgnvGQR9yLSzcB4rqyekWtw5irz6tcwzOnxxAY6pgGx0LTtR5%2FLJ3dPPomaaL6bFz5O%2BzzZ3Hh9Fh2tN3fLdNBOkKig4SR9nSzTIF5u2zFQTcoyrqWypUQ13cD92%2FA9lkYZ%2B2aR26S7LXbmIJn%2BSZx7B8qj3NaaW0HG7Q2Ilqn%2BGg5kqEcSHeaCeXNsszQpb0g%2Fv8TcPYbrYGh5BMMiAsEhmnwlxtRexJCykYafRhvUXFhxSFD3%2ByKH1Ep%2FhLq0cFKjVHFk&X-Amz-Signature=db22943715f6e0c3022dba1dc74d8e89fec9fa89a09d59474c9257510c4af94c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NK6VVBG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqDOYF2UQHM07pxSwpLTmestjAakv1H3lbN%2BBH8wXDWAiBlJeZXk9%2BZ%2Fc8cfuwdB3bNdSarNilf6x0uUlAGxd6NTCr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMHaZKZE7MY%2F8E0DUZKtwDS6dEHXJ%2FAi51aEeHDIg2QPcbQ0Tw3Kp4qjdfhfPiuD3Y9fWoPccOKtBr3at17mCT3AuW%2FG4XIWQR20KOPe9aGolusOi7LnWeIA2isr2TpjPqtpjfVNBlG1DiVDm2fi%2BthmaOygl2WyTrkfr8dn2msgl6TvufVr7y%2BxIkUYQI0oDnkoKXW0edz%2FluYzN0w4q9zVU0V6gn2sI7vXX%2By99VF0DpqcvYvoni%2B0BcrWvqMo3AyGiv4cF9K4gO0cm0zOdaBkEOIVcZ9jRo%2BMFrdDBx80WcNRrt6dDUPHNifNo%2FGGf9mfC5FUsarf7Cy8MeCXhjo1EJ4hLgbo94xrFPw8Lgt%2FvCTMkB776CKb5ylrHEC%2BBSteO4mDIzBls1WRUnmXM5HyJessgvYF1knU0er8V79TY9CH1B%2FvGlCEewZuGlfEN%2FXy1ZQ9xKul1ZMbndGuRExAs4%2Foep9dmqYHWsR7YTqnUqqf38n97K%2Fhs3wElSwWMffdhosiviJsCa4vw6xMkmMfRPhGTkg0CxUNhNo79fNO1PICrwkwGcM4rwF4%2FJp7VhxkICT5ZQngPw%2FwwDFV2ek%2FTZzWyqrD31z%2BRuePESvVhGuNbn6%2BgnvGQR9yLSzcB4rqyekWtw5irz6tcwzOnxxAY6pgGx0LTtR5%2FLJ3dPPomaaL6bFz5O%2BzzZ3Hh9Fh2tN3fLdNBOkKig4SR9nSzTIF5u2zFQTcoyrqWypUQ13cD92%2FA9lkYZ%2B2aR26S7LXbmIJn%2BSZx7B8qj3NaaW0HG7Q2Ilqn%2BGg5kqEcSHeaCeXNsszQpb0g%2Fv8TcPYbrYGh5BMMiAsEhmnwlxtRexJCykYafRhvUXFhxSFD3%2ByKH1Ep%2FhLq0cFKjVHFk&X-Amz-Signature=b9f2951bbaca8a9a1877e860a7bf33550b9dc56b530f201ef2ec4670a9c69ee8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NK6VVBG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqDOYF2UQHM07pxSwpLTmestjAakv1H3lbN%2BBH8wXDWAiBlJeZXk9%2BZ%2Fc8cfuwdB3bNdSarNilf6x0uUlAGxd6NTCr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMHaZKZE7MY%2F8E0DUZKtwDS6dEHXJ%2FAi51aEeHDIg2QPcbQ0Tw3Kp4qjdfhfPiuD3Y9fWoPccOKtBr3at17mCT3AuW%2FG4XIWQR20KOPe9aGolusOi7LnWeIA2isr2TpjPqtpjfVNBlG1DiVDm2fi%2BthmaOygl2WyTrkfr8dn2msgl6TvufVr7y%2BxIkUYQI0oDnkoKXW0edz%2FluYzN0w4q9zVU0V6gn2sI7vXX%2By99VF0DpqcvYvoni%2B0BcrWvqMo3AyGiv4cF9K4gO0cm0zOdaBkEOIVcZ9jRo%2BMFrdDBx80WcNRrt6dDUPHNifNo%2FGGf9mfC5FUsarf7Cy8MeCXhjo1EJ4hLgbo94xrFPw8Lgt%2FvCTMkB776CKb5ylrHEC%2BBSteO4mDIzBls1WRUnmXM5HyJessgvYF1knU0er8V79TY9CH1B%2FvGlCEewZuGlfEN%2FXy1ZQ9xKul1ZMbndGuRExAs4%2Foep9dmqYHWsR7YTqnUqqf38n97K%2Fhs3wElSwWMffdhosiviJsCa4vw6xMkmMfRPhGTkg0CxUNhNo79fNO1PICrwkwGcM4rwF4%2FJp7VhxkICT5ZQngPw%2FwwDFV2ek%2FTZzWyqrD31z%2BRuePESvVhGuNbn6%2BgnvGQR9yLSzcB4rqyekWtw5irz6tcwzOnxxAY6pgGx0LTtR5%2FLJ3dPPomaaL6bFz5O%2BzzZ3Hh9Fh2tN3fLdNBOkKig4SR9nSzTIF5u2zFQTcoyrqWypUQ13cD92%2FA9lkYZ%2B2aR26S7LXbmIJn%2BSZx7B8qj3NaaW0HG7Q2Ilqn%2BGg5kqEcSHeaCeXNsszQpb0g%2Fv8TcPYbrYGh5BMMiAsEhmnwlxtRexJCykYafRhvUXFhxSFD3%2ByKH1Ep%2FhLq0cFKjVHFk&X-Amz-Signature=c4bae8748341f7f0efa31d683d1e1925b0ca07c8b72d29d54d82b639439e52b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
