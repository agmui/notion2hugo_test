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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M5SVIN6%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDRHUzXQI2ng2yn0vQ3ddENAfDPo%2Fc6xFxYkBphflhbmgIhALaCPm%2BnH9gxV08GaKso8kPwn%2FNE2DqqMvWcEhC3W2GyKv8DCDIQABoMNjM3NDIzMTgzODA1Igzh4s7qq8uo9Z9imCIq3AOFpYjymdrJ9RbWkI7uaKTLGV3CWBuGNuNdYpoUXd%2B9UsaEUBcDt76uzml3k%2FWR0NCNc80dhMok2OlUntO5DquhPW%2FnjPu3ZHBcuU3%2F60OsfzCHdJXTLiPgiEO1f%2FOQ8KFx%2BoxWF30qcXqUYSshUl8I29nRDEBmlWehLzNsbPILAxZBS7xrdXjAvbqeYENQH3jBHDPhQ9WNkXQRNdl9%2B2KraFooTLlrzMqk3yWYkFG1CMe5bvac8mz3tS0sWBsVDopo9Li1OKP%2FLPw5r%2FFCcQi8LMj2%2FelITw614b6%2B2EPB6NtcBbkrnDeVuscKYmWOA9SUTU5dL2jY9RnXRGW9QvlzVpxa033guG06ipeMpBfCgm6AOumPhxAE%2FGgB%2FrUO8Z9S2u12Lf7qgkukqQsC99cdoiV6EIuafM%2BofR4NsRSUNlwlzumpY1LA7oO2sfKos5q1qPCljpPaMqY1rtUTg3EYB5uuo9TURqo%2BIw2SbcRDtJVq7iZb%2BuvCUh9KUXkQFpaoFygwf20JSU0jXkgfyEe%2BdPuMvnyHbQRiTpLbT6UeuJ8ourxIjv5TOCta4KYB50HafLH2Odd1qs%2B2c88AgOasgAuPDXMv4GvF2DHPDDAsSSfPWC%2FHT%2Bbwu6VHLDDfsInJBjqkAfKoBQCirCucBAEDg2xHasHeujwgq4A0y0w7n%2B%2B8XEg6JFmQqbd7%2Beu%2ByMYwI95zoGmPpxd4JpeEF7vuIc5tLVyb7gi2mw50TceMNbzUqoYgzshbqsxrWdXq5B%2FngZnSr9jUciKcpdviemcNFjsVCyNopqsEWLL9mbdatDoeBiEmDQqfPY9V%2FDKerIqvy6qYDA1T0UxOnfA2m3F0llymN1H6dNXU&X-Amz-Signature=0e33849c2a6ff7e1e4639d151d04011e18594709074367813899024dbe4b5c09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M5SVIN6%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDRHUzXQI2ng2yn0vQ3ddENAfDPo%2Fc6xFxYkBphflhbmgIhALaCPm%2BnH9gxV08GaKso8kPwn%2FNE2DqqMvWcEhC3W2GyKv8DCDIQABoMNjM3NDIzMTgzODA1Igzh4s7qq8uo9Z9imCIq3AOFpYjymdrJ9RbWkI7uaKTLGV3CWBuGNuNdYpoUXd%2B9UsaEUBcDt76uzml3k%2FWR0NCNc80dhMok2OlUntO5DquhPW%2FnjPu3ZHBcuU3%2F60OsfzCHdJXTLiPgiEO1f%2FOQ8KFx%2BoxWF30qcXqUYSshUl8I29nRDEBmlWehLzNsbPILAxZBS7xrdXjAvbqeYENQH3jBHDPhQ9WNkXQRNdl9%2B2KraFooTLlrzMqk3yWYkFG1CMe5bvac8mz3tS0sWBsVDopo9Li1OKP%2FLPw5r%2FFCcQi8LMj2%2FelITw614b6%2B2EPB6NtcBbkrnDeVuscKYmWOA9SUTU5dL2jY9RnXRGW9QvlzVpxa033guG06ipeMpBfCgm6AOumPhxAE%2FGgB%2FrUO8Z9S2u12Lf7qgkukqQsC99cdoiV6EIuafM%2BofR4NsRSUNlwlzumpY1LA7oO2sfKos5q1qPCljpPaMqY1rtUTg3EYB5uuo9TURqo%2BIw2SbcRDtJVq7iZb%2BuvCUh9KUXkQFpaoFygwf20JSU0jXkgfyEe%2BdPuMvnyHbQRiTpLbT6UeuJ8ourxIjv5TOCta4KYB50HafLH2Odd1qs%2B2c88AgOasgAuPDXMv4GvF2DHPDDAsSSfPWC%2FHT%2Bbwu6VHLDDfsInJBjqkAfKoBQCirCucBAEDg2xHasHeujwgq4A0y0w7n%2B%2B8XEg6JFmQqbd7%2Beu%2ByMYwI95zoGmPpxd4JpeEF7vuIc5tLVyb7gi2mw50TceMNbzUqoYgzshbqsxrWdXq5B%2FngZnSr9jUciKcpdviemcNFjsVCyNopqsEWLL9mbdatDoeBiEmDQqfPY9V%2FDKerIqvy6qYDA1T0UxOnfA2m3F0llymN1H6dNXU&X-Amz-Signature=608cb8ee88bbcae39883cd26faa2037ad38de235e1fc42faee68d2bfa30b794d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M5SVIN6%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDRHUzXQI2ng2yn0vQ3ddENAfDPo%2Fc6xFxYkBphflhbmgIhALaCPm%2BnH9gxV08GaKso8kPwn%2FNE2DqqMvWcEhC3W2GyKv8DCDIQABoMNjM3NDIzMTgzODA1Igzh4s7qq8uo9Z9imCIq3AOFpYjymdrJ9RbWkI7uaKTLGV3CWBuGNuNdYpoUXd%2B9UsaEUBcDt76uzml3k%2FWR0NCNc80dhMok2OlUntO5DquhPW%2FnjPu3ZHBcuU3%2F60OsfzCHdJXTLiPgiEO1f%2FOQ8KFx%2BoxWF30qcXqUYSshUl8I29nRDEBmlWehLzNsbPILAxZBS7xrdXjAvbqeYENQH3jBHDPhQ9WNkXQRNdl9%2B2KraFooTLlrzMqk3yWYkFG1CMe5bvac8mz3tS0sWBsVDopo9Li1OKP%2FLPw5r%2FFCcQi8LMj2%2FelITw614b6%2B2EPB6NtcBbkrnDeVuscKYmWOA9SUTU5dL2jY9RnXRGW9QvlzVpxa033guG06ipeMpBfCgm6AOumPhxAE%2FGgB%2FrUO8Z9S2u12Lf7qgkukqQsC99cdoiV6EIuafM%2BofR4NsRSUNlwlzumpY1LA7oO2sfKos5q1qPCljpPaMqY1rtUTg3EYB5uuo9TURqo%2BIw2SbcRDtJVq7iZb%2BuvCUh9KUXkQFpaoFygwf20JSU0jXkgfyEe%2BdPuMvnyHbQRiTpLbT6UeuJ8ourxIjv5TOCta4KYB50HafLH2Odd1qs%2B2c88AgOasgAuPDXMv4GvF2DHPDDAsSSfPWC%2FHT%2Bbwu6VHLDDfsInJBjqkAfKoBQCirCucBAEDg2xHasHeujwgq4A0y0w7n%2B%2B8XEg6JFmQqbd7%2Beu%2ByMYwI95zoGmPpxd4JpeEF7vuIc5tLVyb7gi2mw50TceMNbzUqoYgzshbqsxrWdXq5B%2FngZnSr9jUciKcpdviemcNFjsVCyNopqsEWLL9mbdatDoeBiEmDQqfPY9V%2FDKerIqvy6qYDA1T0UxOnfA2m3F0llymN1H6dNXU&X-Amz-Signature=300ca973fdc96c96a7cecc1f3369cd9dbc8c57b474f45ab8c53bc7c21f1692de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M5SVIN6%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDRHUzXQI2ng2yn0vQ3ddENAfDPo%2Fc6xFxYkBphflhbmgIhALaCPm%2BnH9gxV08GaKso8kPwn%2FNE2DqqMvWcEhC3W2GyKv8DCDIQABoMNjM3NDIzMTgzODA1Igzh4s7qq8uo9Z9imCIq3AOFpYjymdrJ9RbWkI7uaKTLGV3CWBuGNuNdYpoUXd%2B9UsaEUBcDt76uzml3k%2FWR0NCNc80dhMok2OlUntO5DquhPW%2FnjPu3ZHBcuU3%2F60OsfzCHdJXTLiPgiEO1f%2FOQ8KFx%2BoxWF30qcXqUYSshUl8I29nRDEBmlWehLzNsbPILAxZBS7xrdXjAvbqeYENQH3jBHDPhQ9WNkXQRNdl9%2B2KraFooTLlrzMqk3yWYkFG1CMe5bvac8mz3tS0sWBsVDopo9Li1OKP%2FLPw5r%2FFCcQi8LMj2%2FelITw614b6%2B2EPB6NtcBbkrnDeVuscKYmWOA9SUTU5dL2jY9RnXRGW9QvlzVpxa033guG06ipeMpBfCgm6AOumPhxAE%2FGgB%2FrUO8Z9S2u12Lf7qgkukqQsC99cdoiV6EIuafM%2BofR4NsRSUNlwlzumpY1LA7oO2sfKos5q1qPCljpPaMqY1rtUTg3EYB5uuo9TURqo%2BIw2SbcRDtJVq7iZb%2BuvCUh9KUXkQFpaoFygwf20JSU0jXkgfyEe%2BdPuMvnyHbQRiTpLbT6UeuJ8ourxIjv5TOCta4KYB50HafLH2Odd1qs%2B2c88AgOasgAuPDXMv4GvF2DHPDDAsSSfPWC%2FHT%2Bbwu6VHLDDfsInJBjqkAfKoBQCirCucBAEDg2xHasHeujwgq4A0y0w7n%2B%2B8XEg6JFmQqbd7%2Beu%2ByMYwI95zoGmPpxd4JpeEF7vuIc5tLVyb7gi2mw50TceMNbzUqoYgzshbqsxrWdXq5B%2FngZnSr9jUciKcpdviemcNFjsVCyNopqsEWLL9mbdatDoeBiEmDQqfPY9V%2FDKerIqvy6qYDA1T0UxOnfA2m3F0llymN1H6dNXU&X-Amz-Signature=90244694f1e356e8f13085bfe145befd3f334581e649743dee300227a9192a57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M5SVIN6%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDRHUzXQI2ng2yn0vQ3ddENAfDPo%2Fc6xFxYkBphflhbmgIhALaCPm%2BnH9gxV08GaKso8kPwn%2FNE2DqqMvWcEhC3W2GyKv8DCDIQABoMNjM3NDIzMTgzODA1Igzh4s7qq8uo9Z9imCIq3AOFpYjymdrJ9RbWkI7uaKTLGV3CWBuGNuNdYpoUXd%2B9UsaEUBcDt76uzml3k%2FWR0NCNc80dhMok2OlUntO5DquhPW%2FnjPu3ZHBcuU3%2F60OsfzCHdJXTLiPgiEO1f%2FOQ8KFx%2BoxWF30qcXqUYSshUl8I29nRDEBmlWehLzNsbPILAxZBS7xrdXjAvbqeYENQH3jBHDPhQ9WNkXQRNdl9%2B2KraFooTLlrzMqk3yWYkFG1CMe5bvac8mz3tS0sWBsVDopo9Li1OKP%2FLPw5r%2FFCcQi8LMj2%2FelITw614b6%2B2EPB6NtcBbkrnDeVuscKYmWOA9SUTU5dL2jY9RnXRGW9QvlzVpxa033guG06ipeMpBfCgm6AOumPhxAE%2FGgB%2FrUO8Z9S2u12Lf7qgkukqQsC99cdoiV6EIuafM%2BofR4NsRSUNlwlzumpY1LA7oO2sfKos5q1qPCljpPaMqY1rtUTg3EYB5uuo9TURqo%2BIw2SbcRDtJVq7iZb%2BuvCUh9KUXkQFpaoFygwf20JSU0jXkgfyEe%2BdPuMvnyHbQRiTpLbT6UeuJ8ourxIjv5TOCta4KYB50HafLH2Odd1qs%2B2c88AgOasgAuPDXMv4GvF2DHPDDAsSSfPWC%2FHT%2Bbwu6VHLDDfsInJBjqkAfKoBQCirCucBAEDg2xHasHeujwgq4A0y0w7n%2B%2B8XEg6JFmQqbd7%2Beu%2ByMYwI95zoGmPpxd4JpeEF7vuIc5tLVyb7gi2mw50TceMNbzUqoYgzshbqsxrWdXq5B%2FngZnSr9jUciKcpdviemcNFjsVCyNopqsEWLL9mbdatDoeBiEmDQqfPY9V%2FDKerIqvy6qYDA1T0UxOnfA2m3F0llymN1H6dNXU&X-Amz-Signature=0a621315cd1b587b450c1051c70538c30435e9eee97dbf953ff5616b37fe936c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M5SVIN6%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDRHUzXQI2ng2yn0vQ3ddENAfDPo%2Fc6xFxYkBphflhbmgIhALaCPm%2BnH9gxV08GaKso8kPwn%2FNE2DqqMvWcEhC3W2GyKv8DCDIQABoMNjM3NDIzMTgzODA1Igzh4s7qq8uo9Z9imCIq3AOFpYjymdrJ9RbWkI7uaKTLGV3CWBuGNuNdYpoUXd%2B9UsaEUBcDt76uzml3k%2FWR0NCNc80dhMok2OlUntO5DquhPW%2FnjPu3ZHBcuU3%2F60OsfzCHdJXTLiPgiEO1f%2FOQ8KFx%2BoxWF30qcXqUYSshUl8I29nRDEBmlWehLzNsbPILAxZBS7xrdXjAvbqeYENQH3jBHDPhQ9WNkXQRNdl9%2B2KraFooTLlrzMqk3yWYkFG1CMe5bvac8mz3tS0sWBsVDopo9Li1OKP%2FLPw5r%2FFCcQi8LMj2%2FelITw614b6%2B2EPB6NtcBbkrnDeVuscKYmWOA9SUTU5dL2jY9RnXRGW9QvlzVpxa033guG06ipeMpBfCgm6AOumPhxAE%2FGgB%2FrUO8Z9S2u12Lf7qgkukqQsC99cdoiV6EIuafM%2BofR4NsRSUNlwlzumpY1LA7oO2sfKos5q1qPCljpPaMqY1rtUTg3EYB5uuo9TURqo%2BIw2SbcRDtJVq7iZb%2BuvCUh9KUXkQFpaoFygwf20JSU0jXkgfyEe%2BdPuMvnyHbQRiTpLbT6UeuJ8ourxIjv5TOCta4KYB50HafLH2Odd1qs%2B2c88AgOasgAuPDXMv4GvF2DHPDDAsSSfPWC%2FHT%2Bbwu6VHLDDfsInJBjqkAfKoBQCirCucBAEDg2xHasHeujwgq4A0y0w7n%2B%2B8XEg6JFmQqbd7%2Beu%2ByMYwI95zoGmPpxd4JpeEF7vuIc5tLVyb7gi2mw50TceMNbzUqoYgzshbqsxrWdXq5B%2FngZnSr9jUciKcpdviemcNFjsVCyNopqsEWLL9mbdatDoeBiEmDQqfPY9V%2FDKerIqvy6qYDA1T0UxOnfA2m3F0llymN1H6dNXU&X-Amz-Signature=968d115387f059410f5cf0786e70e844b3f8bca31309be56eba7e3f6ad2fe9f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M5SVIN6%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDRHUzXQI2ng2yn0vQ3ddENAfDPo%2Fc6xFxYkBphflhbmgIhALaCPm%2BnH9gxV08GaKso8kPwn%2FNE2DqqMvWcEhC3W2GyKv8DCDIQABoMNjM3NDIzMTgzODA1Igzh4s7qq8uo9Z9imCIq3AOFpYjymdrJ9RbWkI7uaKTLGV3CWBuGNuNdYpoUXd%2B9UsaEUBcDt76uzml3k%2FWR0NCNc80dhMok2OlUntO5DquhPW%2FnjPu3ZHBcuU3%2F60OsfzCHdJXTLiPgiEO1f%2FOQ8KFx%2BoxWF30qcXqUYSshUl8I29nRDEBmlWehLzNsbPILAxZBS7xrdXjAvbqeYENQH3jBHDPhQ9WNkXQRNdl9%2B2KraFooTLlrzMqk3yWYkFG1CMe5bvac8mz3tS0sWBsVDopo9Li1OKP%2FLPw5r%2FFCcQi8LMj2%2FelITw614b6%2B2EPB6NtcBbkrnDeVuscKYmWOA9SUTU5dL2jY9RnXRGW9QvlzVpxa033guG06ipeMpBfCgm6AOumPhxAE%2FGgB%2FrUO8Z9S2u12Lf7qgkukqQsC99cdoiV6EIuafM%2BofR4NsRSUNlwlzumpY1LA7oO2sfKos5q1qPCljpPaMqY1rtUTg3EYB5uuo9TURqo%2BIw2SbcRDtJVq7iZb%2BuvCUh9KUXkQFpaoFygwf20JSU0jXkgfyEe%2BdPuMvnyHbQRiTpLbT6UeuJ8ourxIjv5TOCta4KYB50HafLH2Odd1qs%2B2c88AgOasgAuPDXMv4GvF2DHPDDAsSSfPWC%2FHT%2Bbwu6VHLDDfsInJBjqkAfKoBQCirCucBAEDg2xHasHeujwgq4A0y0w7n%2B%2B8XEg6JFmQqbd7%2Beu%2ByMYwI95zoGmPpxd4JpeEF7vuIc5tLVyb7gi2mw50TceMNbzUqoYgzshbqsxrWdXq5B%2FngZnSr9jUciKcpdviemcNFjsVCyNopqsEWLL9mbdatDoeBiEmDQqfPY9V%2FDKerIqvy6qYDA1T0UxOnfA2m3F0llymN1H6dNXU&X-Amz-Signature=77fd51cd622e5626057d52534df67896337e8286552bb3a1c21d120bbee40830&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M5SVIN6%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDRHUzXQI2ng2yn0vQ3ddENAfDPo%2Fc6xFxYkBphflhbmgIhALaCPm%2BnH9gxV08GaKso8kPwn%2FNE2DqqMvWcEhC3W2GyKv8DCDIQABoMNjM3NDIzMTgzODA1Igzh4s7qq8uo9Z9imCIq3AOFpYjymdrJ9RbWkI7uaKTLGV3CWBuGNuNdYpoUXd%2B9UsaEUBcDt76uzml3k%2FWR0NCNc80dhMok2OlUntO5DquhPW%2FnjPu3ZHBcuU3%2F60OsfzCHdJXTLiPgiEO1f%2FOQ8KFx%2BoxWF30qcXqUYSshUl8I29nRDEBmlWehLzNsbPILAxZBS7xrdXjAvbqeYENQH3jBHDPhQ9WNkXQRNdl9%2B2KraFooTLlrzMqk3yWYkFG1CMe5bvac8mz3tS0sWBsVDopo9Li1OKP%2FLPw5r%2FFCcQi8LMj2%2FelITw614b6%2B2EPB6NtcBbkrnDeVuscKYmWOA9SUTU5dL2jY9RnXRGW9QvlzVpxa033guG06ipeMpBfCgm6AOumPhxAE%2FGgB%2FrUO8Z9S2u12Lf7qgkukqQsC99cdoiV6EIuafM%2BofR4NsRSUNlwlzumpY1LA7oO2sfKos5q1qPCljpPaMqY1rtUTg3EYB5uuo9TURqo%2BIw2SbcRDtJVq7iZb%2BuvCUh9KUXkQFpaoFygwf20JSU0jXkgfyEe%2BdPuMvnyHbQRiTpLbT6UeuJ8ourxIjv5TOCta4KYB50HafLH2Odd1qs%2B2c88AgOasgAuPDXMv4GvF2DHPDDAsSSfPWC%2FHT%2Bbwu6VHLDDfsInJBjqkAfKoBQCirCucBAEDg2xHasHeujwgq4A0y0w7n%2B%2B8XEg6JFmQqbd7%2Beu%2ByMYwI95zoGmPpxd4JpeEF7vuIc5tLVyb7gi2mw50TceMNbzUqoYgzshbqsxrWdXq5B%2FngZnSr9jUciKcpdviemcNFjsVCyNopqsEWLL9mbdatDoeBiEmDQqfPY9V%2FDKerIqvy6qYDA1T0UxOnfA2m3F0llymN1H6dNXU&X-Amz-Signature=34a7a7ca02483aeba57eca769b123f9aac367da54aaa2431db63cd321fe93463&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M5SVIN6%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDRHUzXQI2ng2yn0vQ3ddENAfDPo%2Fc6xFxYkBphflhbmgIhALaCPm%2BnH9gxV08GaKso8kPwn%2FNE2DqqMvWcEhC3W2GyKv8DCDIQABoMNjM3NDIzMTgzODA1Igzh4s7qq8uo9Z9imCIq3AOFpYjymdrJ9RbWkI7uaKTLGV3CWBuGNuNdYpoUXd%2B9UsaEUBcDt76uzml3k%2FWR0NCNc80dhMok2OlUntO5DquhPW%2FnjPu3ZHBcuU3%2F60OsfzCHdJXTLiPgiEO1f%2FOQ8KFx%2BoxWF30qcXqUYSshUl8I29nRDEBmlWehLzNsbPILAxZBS7xrdXjAvbqeYENQH3jBHDPhQ9WNkXQRNdl9%2B2KraFooTLlrzMqk3yWYkFG1CMe5bvac8mz3tS0sWBsVDopo9Li1OKP%2FLPw5r%2FFCcQi8LMj2%2FelITw614b6%2B2EPB6NtcBbkrnDeVuscKYmWOA9SUTU5dL2jY9RnXRGW9QvlzVpxa033guG06ipeMpBfCgm6AOumPhxAE%2FGgB%2FrUO8Z9S2u12Lf7qgkukqQsC99cdoiV6EIuafM%2BofR4NsRSUNlwlzumpY1LA7oO2sfKos5q1qPCljpPaMqY1rtUTg3EYB5uuo9TURqo%2BIw2SbcRDtJVq7iZb%2BuvCUh9KUXkQFpaoFygwf20JSU0jXkgfyEe%2BdPuMvnyHbQRiTpLbT6UeuJ8ourxIjv5TOCta4KYB50HafLH2Odd1qs%2B2c88AgOasgAuPDXMv4GvF2DHPDDAsSSfPWC%2FHT%2Bbwu6VHLDDfsInJBjqkAfKoBQCirCucBAEDg2xHasHeujwgq4A0y0w7n%2B%2B8XEg6JFmQqbd7%2Beu%2ByMYwI95zoGmPpxd4JpeEF7vuIc5tLVyb7gi2mw50TceMNbzUqoYgzshbqsxrWdXq5B%2FngZnSr9jUciKcpdviemcNFjsVCyNopqsEWLL9mbdatDoeBiEmDQqfPY9V%2FDKerIqvy6qYDA1T0UxOnfA2m3F0llymN1H6dNXU&X-Amz-Signature=e80e47d8b850ca86967f380966987daee737339d3df586e61858cf69c110e3a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M5SVIN6%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDRHUzXQI2ng2yn0vQ3ddENAfDPo%2Fc6xFxYkBphflhbmgIhALaCPm%2BnH9gxV08GaKso8kPwn%2FNE2DqqMvWcEhC3W2GyKv8DCDIQABoMNjM3NDIzMTgzODA1Igzh4s7qq8uo9Z9imCIq3AOFpYjymdrJ9RbWkI7uaKTLGV3CWBuGNuNdYpoUXd%2B9UsaEUBcDt76uzml3k%2FWR0NCNc80dhMok2OlUntO5DquhPW%2FnjPu3ZHBcuU3%2F60OsfzCHdJXTLiPgiEO1f%2FOQ8KFx%2BoxWF30qcXqUYSshUl8I29nRDEBmlWehLzNsbPILAxZBS7xrdXjAvbqeYENQH3jBHDPhQ9WNkXQRNdl9%2B2KraFooTLlrzMqk3yWYkFG1CMe5bvac8mz3tS0sWBsVDopo9Li1OKP%2FLPw5r%2FFCcQi8LMj2%2FelITw614b6%2B2EPB6NtcBbkrnDeVuscKYmWOA9SUTU5dL2jY9RnXRGW9QvlzVpxa033guG06ipeMpBfCgm6AOumPhxAE%2FGgB%2FrUO8Z9S2u12Lf7qgkukqQsC99cdoiV6EIuafM%2BofR4NsRSUNlwlzumpY1LA7oO2sfKos5q1qPCljpPaMqY1rtUTg3EYB5uuo9TURqo%2BIw2SbcRDtJVq7iZb%2BuvCUh9KUXkQFpaoFygwf20JSU0jXkgfyEe%2BdPuMvnyHbQRiTpLbT6UeuJ8ourxIjv5TOCta4KYB50HafLH2Odd1qs%2B2c88AgOasgAuPDXMv4GvF2DHPDDAsSSfPWC%2FHT%2Bbwu6VHLDDfsInJBjqkAfKoBQCirCucBAEDg2xHasHeujwgq4A0y0w7n%2B%2B8XEg6JFmQqbd7%2Beu%2ByMYwI95zoGmPpxd4JpeEF7vuIc5tLVyb7gi2mw50TceMNbzUqoYgzshbqsxrWdXq5B%2FngZnSr9jUciKcpdviemcNFjsVCyNopqsEWLL9mbdatDoeBiEmDQqfPY9V%2FDKerIqvy6qYDA1T0UxOnfA2m3F0llymN1H6dNXU&X-Amz-Signature=74862faf712cb9e3a54f739cab7d56c64e85e0f14ddac5418b86a96ee7b44103&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M5SVIN6%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDRHUzXQI2ng2yn0vQ3ddENAfDPo%2Fc6xFxYkBphflhbmgIhALaCPm%2BnH9gxV08GaKso8kPwn%2FNE2DqqMvWcEhC3W2GyKv8DCDIQABoMNjM3NDIzMTgzODA1Igzh4s7qq8uo9Z9imCIq3AOFpYjymdrJ9RbWkI7uaKTLGV3CWBuGNuNdYpoUXd%2B9UsaEUBcDt76uzml3k%2FWR0NCNc80dhMok2OlUntO5DquhPW%2FnjPu3ZHBcuU3%2F60OsfzCHdJXTLiPgiEO1f%2FOQ8KFx%2BoxWF30qcXqUYSshUl8I29nRDEBmlWehLzNsbPILAxZBS7xrdXjAvbqeYENQH3jBHDPhQ9WNkXQRNdl9%2B2KraFooTLlrzMqk3yWYkFG1CMe5bvac8mz3tS0sWBsVDopo9Li1OKP%2FLPw5r%2FFCcQi8LMj2%2FelITw614b6%2B2EPB6NtcBbkrnDeVuscKYmWOA9SUTU5dL2jY9RnXRGW9QvlzVpxa033guG06ipeMpBfCgm6AOumPhxAE%2FGgB%2FrUO8Z9S2u12Lf7qgkukqQsC99cdoiV6EIuafM%2BofR4NsRSUNlwlzumpY1LA7oO2sfKos5q1qPCljpPaMqY1rtUTg3EYB5uuo9TURqo%2BIw2SbcRDtJVq7iZb%2BuvCUh9KUXkQFpaoFygwf20JSU0jXkgfyEe%2BdPuMvnyHbQRiTpLbT6UeuJ8ourxIjv5TOCta4KYB50HafLH2Odd1qs%2B2c88AgOasgAuPDXMv4GvF2DHPDDAsSSfPWC%2FHT%2Bbwu6VHLDDfsInJBjqkAfKoBQCirCucBAEDg2xHasHeujwgq4A0y0w7n%2B%2B8XEg6JFmQqbd7%2Beu%2ByMYwI95zoGmPpxd4JpeEF7vuIc5tLVyb7gi2mw50TceMNbzUqoYgzshbqsxrWdXq5B%2FngZnSr9jUciKcpdviemcNFjsVCyNopqsEWLL9mbdatDoeBiEmDQqfPY9V%2FDKerIqvy6qYDA1T0UxOnfA2m3F0llymN1H6dNXU&X-Amz-Signature=442330e65096f3834dd89650fc03bcebd4f695db8c628b3a2eed0a174e9f660a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M5SVIN6%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDRHUzXQI2ng2yn0vQ3ddENAfDPo%2Fc6xFxYkBphflhbmgIhALaCPm%2BnH9gxV08GaKso8kPwn%2FNE2DqqMvWcEhC3W2GyKv8DCDIQABoMNjM3NDIzMTgzODA1Igzh4s7qq8uo9Z9imCIq3AOFpYjymdrJ9RbWkI7uaKTLGV3CWBuGNuNdYpoUXd%2B9UsaEUBcDt76uzml3k%2FWR0NCNc80dhMok2OlUntO5DquhPW%2FnjPu3ZHBcuU3%2F60OsfzCHdJXTLiPgiEO1f%2FOQ8KFx%2BoxWF30qcXqUYSshUl8I29nRDEBmlWehLzNsbPILAxZBS7xrdXjAvbqeYENQH3jBHDPhQ9WNkXQRNdl9%2B2KraFooTLlrzMqk3yWYkFG1CMe5bvac8mz3tS0sWBsVDopo9Li1OKP%2FLPw5r%2FFCcQi8LMj2%2FelITw614b6%2B2EPB6NtcBbkrnDeVuscKYmWOA9SUTU5dL2jY9RnXRGW9QvlzVpxa033guG06ipeMpBfCgm6AOumPhxAE%2FGgB%2FrUO8Z9S2u12Lf7qgkukqQsC99cdoiV6EIuafM%2BofR4NsRSUNlwlzumpY1LA7oO2sfKos5q1qPCljpPaMqY1rtUTg3EYB5uuo9TURqo%2BIw2SbcRDtJVq7iZb%2BuvCUh9KUXkQFpaoFygwf20JSU0jXkgfyEe%2BdPuMvnyHbQRiTpLbT6UeuJ8ourxIjv5TOCta4KYB50HafLH2Odd1qs%2B2c88AgOasgAuPDXMv4GvF2DHPDDAsSSfPWC%2FHT%2Bbwu6VHLDDfsInJBjqkAfKoBQCirCucBAEDg2xHasHeujwgq4A0y0w7n%2B%2B8XEg6JFmQqbd7%2Beu%2ByMYwI95zoGmPpxd4JpeEF7vuIc5tLVyb7gi2mw50TceMNbzUqoYgzshbqsxrWdXq5B%2FngZnSr9jUciKcpdviemcNFjsVCyNopqsEWLL9mbdatDoeBiEmDQqfPY9V%2FDKerIqvy6qYDA1T0UxOnfA2m3F0llymN1H6dNXU&X-Amz-Signature=6c78849f91889bf8bbeea5c43b3a1eea017c42fd3cfbc3647d79960e8d13a416&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M5SVIN6%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDRHUzXQI2ng2yn0vQ3ddENAfDPo%2Fc6xFxYkBphflhbmgIhALaCPm%2BnH9gxV08GaKso8kPwn%2FNE2DqqMvWcEhC3W2GyKv8DCDIQABoMNjM3NDIzMTgzODA1Igzh4s7qq8uo9Z9imCIq3AOFpYjymdrJ9RbWkI7uaKTLGV3CWBuGNuNdYpoUXd%2B9UsaEUBcDt76uzml3k%2FWR0NCNc80dhMok2OlUntO5DquhPW%2FnjPu3ZHBcuU3%2F60OsfzCHdJXTLiPgiEO1f%2FOQ8KFx%2BoxWF30qcXqUYSshUl8I29nRDEBmlWehLzNsbPILAxZBS7xrdXjAvbqeYENQH3jBHDPhQ9WNkXQRNdl9%2B2KraFooTLlrzMqk3yWYkFG1CMe5bvac8mz3tS0sWBsVDopo9Li1OKP%2FLPw5r%2FFCcQi8LMj2%2FelITw614b6%2B2EPB6NtcBbkrnDeVuscKYmWOA9SUTU5dL2jY9RnXRGW9QvlzVpxa033guG06ipeMpBfCgm6AOumPhxAE%2FGgB%2FrUO8Z9S2u12Lf7qgkukqQsC99cdoiV6EIuafM%2BofR4NsRSUNlwlzumpY1LA7oO2sfKos5q1qPCljpPaMqY1rtUTg3EYB5uuo9TURqo%2BIw2SbcRDtJVq7iZb%2BuvCUh9KUXkQFpaoFygwf20JSU0jXkgfyEe%2BdPuMvnyHbQRiTpLbT6UeuJ8ourxIjv5TOCta4KYB50HafLH2Odd1qs%2B2c88AgOasgAuPDXMv4GvF2DHPDDAsSSfPWC%2FHT%2Bbwu6VHLDDfsInJBjqkAfKoBQCirCucBAEDg2xHasHeujwgq4A0y0w7n%2B%2B8XEg6JFmQqbd7%2Beu%2ByMYwI95zoGmPpxd4JpeEF7vuIc5tLVyb7gi2mw50TceMNbzUqoYgzshbqsxrWdXq5B%2FngZnSr9jUciKcpdviemcNFjsVCyNopqsEWLL9mbdatDoeBiEmDQqfPY9V%2FDKerIqvy6qYDA1T0UxOnfA2m3F0llymN1H6dNXU&X-Amz-Signature=71eb25e2548253949a5b16607df0cc7593fad7d699d767c7059c90ec78fd560d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M5SVIN6%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDRHUzXQI2ng2yn0vQ3ddENAfDPo%2Fc6xFxYkBphflhbmgIhALaCPm%2BnH9gxV08GaKso8kPwn%2FNE2DqqMvWcEhC3W2GyKv8DCDIQABoMNjM3NDIzMTgzODA1Igzh4s7qq8uo9Z9imCIq3AOFpYjymdrJ9RbWkI7uaKTLGV3CWBuGNuNdYpoUXd%2B9UsaEUBcDt76uzml3k%2FWR0NCNc80dhMok2OlUntO5DquhPW%2FnjPu3ZHBcuU3%2F60OsfzCHdJXTLiPgiEO1f%2FOQ8KFx%2BoxWF30qcXqUYSshUl8I29nRDEBmlWehLzNsbPILAxZBS7xrdXjAvbqeYENQH3jBHDPhQ9WNkXQRNdl9%2B2KraFooTLlrzMqk3yWYkFG1CMe5bvac8mz3tS0sWBsVDopo9Li1OKP%2FLPw5r%2FFCcQi8LMj2%2FelITw614b6%2B2EPB6NtcBbkrnDeVuscKYmWOA9SUTU5dL2jY9RnXRGW9QvlzVpxa033guG06ipeMpBfCgm6AOumPhxAE%2FGgB%2FrUO8Z9S2u12Lf7qgkukqQsC99cdoiV6EIuafM%2BofR4NsRSUNlwlzumpY1LA7oO2sfKos5q1qPCljpPaMqY1rtUTg3EYB5uuo9TURqo%2BIw2SbcRDtJVq7iZb%2BuvCUh9KUXkQFpaoFygwf20JSU0jXkgfyEe%2BdPuMvnyHbQRiTpLbT6UeuJ8ourxIjv5TOCta4KYB50HafLH2Odd1qs%2B2c88AgOasgAuPDXMv4GvF2DHPDDAsSSfPWC%2FHT%2Bbwu6VHLDDfsInJBjqkAfKoBQCirCucBAEDg2xHasHeujwgq4A0y0w7n%2B%2B8XEg6JFmQqbd7%2Beu%2ByMYwI95zoGmPpxd4JpeEF7vuIc5tLVyb7gi2mw50TceMNbzUqoYgzshbqsxrWdXq5B%2FngZnSr9jUciKcpdviemcNFjsVCyNopqsEWLL9mbdatDoeBiEmDQqfPY9V%2FDKerIqvy6qYDA1T0UxOnfA2m3F0llymN1H6dNXU&X-Amz-Signature=5681fabe659d3c4227169635240f2a0952b936c8215824f7d68d07fb88ace6ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
