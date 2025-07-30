---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-30T06:25:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM7ACSYP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdlAFhMnj9mCSBFuPuuNo6dkKQbRI%2FcsqEdmXFGI9CnwIgbkCm9HToxXGjWIwMMLiP%2FsnyEV1MuTsu%2FOkGIXrkLs0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2B2foMbOoJv1tDFECrcA2EPZ5mK56Bof8v6JTteOdrYNnvxxRai2mEQzxrsl2qXxwCHTbpPjYqp9DH%2Bu40O77uje9b%2BC6RXxH1ybndCEJLImFXAdZ6WU%2F8Yp8ikseNi6ZUFI6COaZRD5OVf2nJZvqjaDLwxmoajFmkhMZfXE7MTWXBP1AQJfrLV141oqkXZ1s1mWhdDnrAs6VPNzhowFBTLSH6Cw4jzjQvxLdKSotl%2FnRlqW7L89zm4ld0LPswi%2FWy5mz5v1e3mf1OVAx%2BVptzLQSaBP3qSKc%2FVddKnj0cXT%2BT98oIK91qy3%2BUOflXJH3PtIGnYH4vtblRPxC0Lihwo1HTrvPWQUqrzyZnvESGGg9vJ8HC7xeZIrCmwHYeK%2F%2B9ohzplF7auAk4F%2FoWuDNZrxFpKGYAKKUGOd9OhjISurxFKKMphKFV%2BdVgDA5gqf6EPCWihOuUP0fqODMUe1pXhUc4m143r06cvG%2BtUtyALAIVzieS%2BknwstF5AYY2CxSKIMREn5ukYG4LtfRcGUAqxiSVtTJg6Ibdt2z3svibxNk0rfZTS6GyogYZFJM%2BVHu3UsGWdXW9udAKl439ASKWVB%2Bf0xvJ6gp%2Fdl%2FswCTJV23cvJMAL3SvQ2RuUC2kDyGr1nePjw1j8sVXHMLvapsQGOqUBrm3XzOlRPJ1LLTKOc80ZGoLOGzwhVPRFRsccqmqIm2Hf7YICPhyd%2FSZpgu1rAp6WWCoDJCg%2F%2BTX4qaaMiyZ2JecewpTE4idA5ZstdN7STfYttEXDwBpeb3Y5PYsR16TJfi%2BxkISNZJm9BgOdCbwMLwhZYoU9ibdQPD3JZsq1TUrhJxLcVB2zBFujnvDvdq8DieYLuVYOYCoxexh0e%2FKH9%2BPbJVhn&X-Amz-Signature=8b479a18b23a404173426c3d35a2ef34e40a093c257aa84e10bbbe1f48485900&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM7ACSYP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdlAFhMnj9mCSBFuPuuNo6dkKQbRI%2FcsqEdmXFGI9CnwIgbkCm9HToxXGjWIwMMLiP%2FsnyEV1MuTsu%2FOkGIXrkLs0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2B2foMbOoJv1tDFECrcA2EPZ5mK56Bof8v6JTteOdrYNnvxxRai2mEQzxrsl2qXxwCHTbpPjYqp9DH%2Bu40O77uje9b%2BC6RXxH1ybndCEJLImFXAdZ6WU%2F8Yp8ikseNi6ZUFI6COaZRD5OVf2nJZvqjaDLwxmoajFmkhMZfXE7MTWXBP1AQJfrLV141oqkXZ1s1mWhdDnrAs6VPNzhowFBTLSH6Cw4jzjQvxLdKSotl%2FnRlqW7L89zm4ld0LPswi%2FWy5mz5v1e3mf1OVAx%2BVptzLQSaBP3qSKc%2FVddKnj0cXT%2BT98oIK91qy3%2BUOflXJH3PtIGnYH4vtblRPxC0Lihwo1HTrvPWQUqrzyZnvESGGg9vJ8HC7xeZIrCmwHYeK%2F%2B9ohzplF7auAk4F%2FoWuDNZrxFpKGYAKKUGOd9OhjISurxFKKMphKFV%2BdVgDA5gqf6EPCWihOuUP0fqODMUe1pXhUc4m143r06cvG%2BtUtyALAIVzieS%2BknwstF5AYY2CxSKIMREn5ukYG4LtfRcGUAqxiSVtTJg6Ibdt2z3svibxNk0rfZTS6GyogYZFJM%2BVHu3UsGWdXW9udAKl439ASKWVB%2Bf0xvJ6gp%2Fdl%2FswCTJV23cvJMAL3SvQ2RuUC2kDyGr1nePjw1j8sVXHMLvapsQGOqUBrm3XzOlRPJ1LLTKOc80ZGoLOGzwhVPRFRsccqmqIm2Hf7YICPhyd%2FSZpgu1rAp6WWCoDJCg%2F%2BTX4qaaMiyZ2JecewpTE4idA5ZstdN7STfYttEXDwBpeb3Y5PYsR16TJfi%2BxkISNZJm9BgOdCbwMLwhZYoU9ibdQPD3JZsq1TUrhJxLcVB2zBFujnvDvdq8DieYLuVYOYCoxexh0e%2FKH9%2BPbJVhn&X-Amz-Signature=b6482d6aa2b9595518f3d4c6959d593dc035513da919b9b7bd265d7493c64e8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM7ACSYP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdlAFhMnj9mCSBFuPuuNo6dkKQbRI%2FcsqEdmXFGI9CnwIgbkCm9HToxXGjWIwMMLiP%2FsnyEV1MuTsu%2FOkGIXrkLs0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2B2foMbOoJv1tDFECrcA2EPZ5mK56Bof8v6JTteOdrYNnvxxRai2mEQzxrsl2qXxwCHTbpPjYqp9DH%2Bu40O77uje9b%2BC6RXxH1ybndCEJLImFXAdZ6WU%2F8Yp8ikseNi6ZUFI6COaZRD5OVf2nJZvqjaDLwxmoajFmkhMZfXE7MTWXBP1AQJfrLV141oqkXZ1s1mWhdDnrAs6VPNzhowFBTLSH6Cw4jzjQvxLdKSotl%2FnRlqW7L89zm4ld0LPswi%2FWy5mz5v1e3mf1OVAx%2BVptzLQSaBP3qSKc%2FVddKnj0cXT%2BT98oIK91qy3%2BUOflXJH3PtIGnYH4vtblRPxC0Lihwo1HTrvPWQUqrzyZnvESGGg9vJ8HC7xeZIrCmwHYeK%2F%2B9ohzplF7auAk4F%2FoWuDNZrxFpKGYAKKUGOd9OhjISurxFKKMphKFV%2BdVgDA5gqf6EPCWihOuUP0fqODMUe1pXhUc4m143r06cvG%2BtUtyALAIVzieS%2BknwstF5AYY2CxSKIMREn5ukYG4LtfRcGUAqxiSVtTJg6Ibdt2z3svibxNk0rfZTS6GyogYZFJM%2BVHu3UsGWdXW9udAKl439ASKWVB%2Bf0xvJ6gp%2Fdl%2FswCTJV23cvJMAL3SvQ2RuUC2kDyGr1nePjw1j8sVXHMLvapsQGOqUBrm3XzOlRPJ1LLTKOc80ZGoLOGzwhVPRFRsccqmqIm2Hf7YICPhyd%2FSZpgu1rAp6WWCoDJCg%2F%2BTX4qaaMiyZ2JecewpTE4idA5ZstdN7STfYttEXDwBpeb3Y5PYsR16TJfi%2BxkISNZJm9BgOdCbwMLwhZYoU9ibdQPD3JZsq1TUrhJxLcVB2zBFujnvDvdq8DieYLuVYOYCoxexh0e%2FKH9%2BPbJVhn&X-Amz-Signature=9f47814c99ca45f7673140302d48fd290daeae01f2cec18e980e59994cded013&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM7ACSYP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdlAFhMnj9mCSBFuPuuNo6dkKQbRI%2FcsqEdmXFGI9CnwIgbkCm9HToxXGjWIwMMLiP%2FsnyEV1MuTsu%2FOkGIXrkLs0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2B2foMbOoJv1tDFECrcA2EPZ5mK56Bof8v6JTteOdrYNnvxxRai2mEQzxrsl2qXxwCHTbpPjYqp9DH%2Bu40O77uje9b%2BC6RXxH1ybndCEJLImFXAdZ6WU%2F8Yp8ikseNi6ZUFI6COaZRD5OVf2nJZvqjaDLwxmoajFmkhMZfXE7MTWXBP1AQJfrLV141oqkXZ1s1mWhdDnrAs6VPNzhowFBTLSH6Cw4jzjQvxLdKSotl%2FnRlqW7L89zm4ld0LPswi%2FWy5mz5v1e3mf1OVAx%2BVptzLQSaBP3qSKc%2FVddKnj0cXT%2BT98oIK91qy3%2BUOflXJH3PtIGnYH4vtblRPxC0Lihwo1HTrvPWQUqrzyZnvESGGg9vJ8HC7xeZIrCmwHYeK%2F%2B9ohzplF7auAk4F%2FoWuDNZrxFpKGYAKKUGOd9OhjISurxFKKMphKFV%2BdVgDA5gqf6EPCWihOuUP0fqODMUe1pXhUc4m143r06cvG%2BtUtyALAIVzieS%2BknwstF5AYY2CxSKIMREn5ukYG4LtfRcGUAqxiSVtTJg6Ibdt2z3svibxNk0rfZTS6GyogYZFJM%2BVHu3UsGWdXW9udAKl439ASKWVB%2Bf0xvJ6gp%2Fdl%2FswCTJV23cvJMAL3SvQ2RuUC2kDyGr1nePjw1j8sVXHMLvapsQGOqUBrm3XzOlRPJ1LLTKOc80ZGoLOGzwhVPRFRsccqmqIm2Hf7YICPhyd%2FSZpgu1rAp6WWCoDJCg%2F%2BTX4qaaMiyZ2JecewpTE4idA5ZstdN7STfYttEXDwBpeb3Y5PYsR16TJfi%2BxkISNZJm9BgOdCbwMLwhZYoU9ibdQPD3JZsq1TUrhJxLcVB2zBFujnvDvdq8DieYLuVYOYCoxexh0e%2FKH9%2BPbJVhn&X-Amz-Signature=38d6f0bb1a180aeb1fd28caee7d1204ea2dbe0092111ab3e551a103bc2355624&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM7ACSYP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdlAFhMnj9mCSBFuPuuNo6dkKQbRI%2FcsqEdmXFGI9CnwIgbkCm9HToxXGjWIwMMLiP%2FsnyEV1MuTsu%2FOkGIXrkLs0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2B2foMbOoJv1tDFECrcA2EPZ5mK56Bof8v6JTteOdrYNnvxxRai2mEQzxrsl2qXxwCHTbpPjYqp9DH%2Bu40O77uje9b%2BC6RXxH1ybndCEJLImFXAdZ6WU%2F8Yp8ikseNi6ZUFI6COaZRD5OVf2nJZvqjaDLwxmoajFmkhMZfXE7MTWXBP1AQJfrLV141oqkXZ1s1mWhdDnrAs6VPNzhowFBTLSH6Cw4jzjQvxLdKSotl%2FnRlqW7L89zm4ld0LPswi%2FWy5mz5v1e3mf1OVAx%2BVptzLQSaBP3qSKc%2FVddKnj0cXT%2BT98oIK91qy3%2BUOflXJH3PtIGnYH4vtblRPxC0Lihwo1HTrvPWQUqrzyZnvESGGg9vJ8HC7xeZIrCmwHYeK%2F%2B9ohzplF7auAk4F%2FoWuDNZrxFpKGYAKKUGOd9OhjISurxFKKMphKFV%2BdVgDA5gqf6EPCWihOuUP0fqODMUe1pXhUc4m143r06cvG%2BtUtyALAIVzieS%2BknwstF5AYY2CxSKIMREn5ukYG4LtfRcGUAqxiSVtTJg6Ibdt2z3svibxNk0rfZTS6GyogYZFJM%2BVHu3UsGWdXW9udAKl439ASKWVB%2Bf0xvJ6gp%2Fdl%2FswCTJV23cvJMAL3SvQ2RuUC2kDyGr1nePjw1j8sVXHMLvapsQGOqUBrm3XzOlRPJ1LLTKOc80ZGoLOGzwhVPRFRsccqmqIm2Hf7YICPhyd%2FSZpgu1rAp6WWCoDJCg%2F%2BTX4qaaMiyZ2JecewpTE4idA5ZstdN7STfYttEXDwBpeb3Y5PYsR16TJfi%2BxkISNZJm9BgOdCbwMLwhZYoU9ibdQPD3JZsq1TUrhJxLcVB2zBFujnvDvdq8DieYLuVYOYCoxexh0e%2FKH9%2BPbJVhn&X-Amz-Signature=2f50e68c23e8cc7667f96b2cd1321dbd6a3baf10200522b24fa16c010306d8da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM7ACSYP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdlAFhMnj9mCSBFuPuuNo6dkKQbRI%2FcsqEdmXFGI9CnwIgbkCm9HToxXGjWIwMMLiP%2FsnyEV1MuTsu%2FOkGIXrkLs0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2B2foMbOoJv1tDFECrcA2EPZ5mK56Bof8v6JTteOdrYNnvxxRai2mEQzxrsl2qXxwCHTbpPjYqp9DH%2Bu40O77uje9b%2BC6RXxH1ybndCEJLImFXAdZ6WU%2F8Yp8ikseNi6ZUFI6COaZRD5OVf2nJZvqjaDLwxmoajFmkhMZfXE7MTWXBP1AQJfrLV141oqkXZ1s1mWhdDnrAs6VPNzhowFBTLSH6Cw4jzjQvxLdKSotl%2FnRlqW7L89zm4ld0LPswi%2FWy5mz5v1e3mf1OVAx%2BVptzLQSaBP3qSKc%2FVddKnj0cXT%2BT98oIK91qy3%2BUOflXJH3PtIGnYH4vtblRPxC0Lihwo1HTrvPWQUqrzyZnvESGGg9vJ8HC7xeZIrCmwHYeK%2F%2B9ohzplF7auAk4F%2FoWuDNZrxFpKGYAKKUGOd9OhjISurxFKKMphKFV%2BdVgDA5gqf6EPCWihOuUP0fqODMUe1pXhUc4m143r06cvG%2BtUtyALAIVzieS%2BknwstF5AYY2CxSKIMREn5ukYG4LtfRcGUAqxiSVtTJg6Ibdt2z3svibxNk0rfZTS6GyogYZFJM%2BVHu3UsGWdXW9udAKl439ASKWVB%2Bf0xvJ6gp%2Fdl%2FswCTJV23cvJMAL3SvQ2RuUC2kDyGr1nePjw1j8sVXHMLvapsQGOqUBrm3XzOlRPJ1LLTKOc80ZGoLOGzwhVPRFRsccqmqIm2Hf7YICPhyd%2FSZpgu1rAp6WWCoDJCg%2F%2BTX4qaaMiyZ2JecewpTE4idA5ZstdN7STfYttEXDwBpeb3Y5PYsR16TJfi%2BxkISNZJm9BgOdCbwMLwhZYoU9ibdQPD3JZsq1TUrhJxLcVB2zBFujnvDvdq8DieYLuVYOYCoxexh0e%2FKH9%2BPbJVhn&X-Amz-Signature=c1dcacc73ef4569e047586a626bf94aefe29673b318b61a6c34ed861cef9448e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM7ACSYP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdlAFhMnj9mCSBFuPuuNo6dkKQbRI%2FcsqEdmXFGI9CnwIgbkCm9HToxXGjWIwMMLiP%2FsnyEV1MuTsu%2FOkGIXrkLs0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2B2foMbOoJv1tDFECrcA2EPZ5mK56Bof8v6JTteOdrYNnvxxRai2mEQzxrsl2qXxwCHTbpPjYqp9DH%2Bu40O77uje9b%2BC6RXxH1ybndCEJLImFXAdZ6WU%2F8Yp8ikseNi6ZUFI6COaZRD5OVf2nJZvqjaDLwxmoajFmkhMZfXE7MTWXBP1AQJfrLV141oqkXZ1s1mWhdDnrAs6VPNzhowFBTLSH6Cw4jzjQvxLdKSotl%2FnRlqW7L89zm4ld0LPswi%2FWy5mz5v1e3mf1OVAx%2BVptzLQSaBP3qSKc%2FVddKnj0cXT%2BT98oIK91qy3%2BUOflXJH3PtIGnYH4vtblRPxC0Lihwo1HTrvPWQUqrzyZnvESGGg9vJ8HC7xeZIrCmwHYeK%2F%2B9ohzplF7auAk4F%2FoWuDNZrxFpKGYAKKUGOd9OhjISurxFKKMphKFV%2BdVgDA5gqf6EPCWihOuUP0fqODMUe1pXhUc4m143r06cvG%2BtUtyALAIVzieS%2BknwstF5AYY2CxSKIMREn5ukYG4LtfRcGUAqxiSVtTJg6Ibdt2z3svibxNk0rfZTS6GyogYZFJM%2BVHu3UsGWdXW9udAKl439ASKWVB%2Bf0xvJ6gp%2Fdl%2FswCTJV23cvJMAL3SvQ2RuUC2kDyGr1nePjw1j8sVXHMLvapsQGOqUBrm3XzOlRPJ1LLTKOc80ZGoLOGzwhVPRFRsccqmqIm2Hf7YICPhyd%2FSZpgu1rAp6WWCoDJCg%2F%2BTX4qaaMiyZ2JecewpTE4idA5ZstdN7STfYttEXDwBpeb3Y5PYsR16TJfi%2BxkISNZJm9BgOdCbwMLwhZYoU9ibdQPD3JZsq1TUrhJxLcVB2zBFujnvDvdq8DieYLuVYOYCoxexh0e%2FKH9%2BPbJVhn&X-Amz-Signature=13e4c73494a8655b81dcc617b913711f4b8cb79f4e7d6c92791708d6b0aa1625&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM7ACSYP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdlAFhMnj9mCSBFuPuuNo6dkKQbRI%2FcsqEdmXFGI9CnwIgbkCm9HToxXGjWIwMMLiP%2FsnyEV1MuTsu%2FOkGIXrkLs0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2B2foMbOoJv1tDFECrcA2EPZ5mK56Bof8v6JTteOdrYNnvxxRai2mEQzxrsl2qXxwCHTbpPjYqp9DH%2Bu40O77uje9b%2BC6RXxH1ybndCEJLImFXAdZ6WU%2F8Yp8ikseNi6ZUFI6COaZRD5OVf2nJZvqjaDLwxmoajFmkhMZfXE7MTWXBP1AQJfrLV141oqkXZ1s1mWhdDnrAs6VPNzhowFBTLSH6Cw4jzjQvxLdKSotl%2FnRlqW7L89zm4ld0LPswi%2FWy5mz5v1e3mf1OVAx%2BVptzLQSaBP3qSKc%2FVddKnj0cXT%2BT98oIK91qy3%2BUOflXJH3PtIGnYH4vtblRPxC0Lihwo1HTrvPWQUqrzyZnvESGGg9vJ8HC7xeZIrCmwHYeK%2F%2B9ohzplF7auAk4F%2FoWuDNZrxFpKGYAKKUGOd9OhjISurxFKKMphKFV%2BdVgDA5gqf6EPCWihOuUP0fqODMUe1pXhUc4m143r06cvG%2BtUtyALAIVzieS%2BknwstF5AYY2CxSKIMREn5ukYG4LtfRcGUAqxiSVtTJg6Ibdt2z3svibxNk0rfZTS6GyogYZFJM%2BVHu3UsGWdXW9udAKl439ASKWVB%2Bf0xvJ6gp%2Fdl%2FswCTJV23cvJMAL3SvQ2RuUC2kDyGr1nePjw1j8sVXHMLvapsQGOqUBrm3XzOlRPJ1LLTKOc80ZGoLOGzwhVPRFRsccqmqIm2Hf7YICPhyd%2FSZpgu1rAp6WWCoDJCg%2F%2BTX4qaaMiyZ2JecewpTE4idA5ZstdN7STfYttEXDwBpeb3Y5PYsR16TJfi%2BxkISNZJm9BgOdCbwMLwhZYoU9ibdQPD3JZsq1TUrhJxLcVB2zBFujnvDvdq8DieYLuVYOYCoxexh0e%2FKH9%2BPbJVhn&X-Amz-Signature=dcd2958f80123e5ef2a10b5c4aa2b2c40874dd25b45563d80c27a70eb068b126&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM7ACSYP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdlAFhMnj9mCSBFuPuuNo6dkKQbRI%2FcsqEdmXFGI9CnwIgbkCm9HToxXGjWIwMMLiP%2FsnyEV1MuTsu%2FOkGIXrkLs0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2B2foMbOoJv1tDFECrcA2EPZ5mK56Bof8v6JTteOdrYNnvxxRai2mEQzxrsl2qXxwCHTbpPjYqp9DH%2Bu40O77uje9b%2BC6RXxH1ybndCEJLImFXAdZ6WU%2F8Yp8ikseNi6ZUFI6COaZRD5OVf2nJZvqjaDLwxmoajFmkhMZfXE7MTWXBP1AQJfrLV141oqkXZ1s1mWhdDnrAs6VPNzhowFBTLSH6Cw4jzjQvxLdKSotl%2FnRlqW7L89zm4ld0LPswi%2FWy5mz5v1e3mf1OVAx%2BVptzLQSaBP3qSKc%2FVddKnj0cXT%2BT98oIK91qy3%2BUOflXJH3PtIGnYH4vtblRPxC0Lihwo1HTrvPWQUqrzyZnvESGGg9vJ8HC7xeZIrCmwHYeK%2F%2B9ohzplF7auAk4F%2FoWuDNZrxFpKGYAKKUGOd9OhjISurxFKKMphKFV%2BdVgDA5gqf6EPCWihOuUP0fqODMUe1pXhUc4m143r06cvG%2BtUtyALAIVzieS%2BknwstF5AYY2CxSKIMREn5ukYG4LtfRcGUAqxiSVtTJg6Ibdt2z3svibxNk0rfZTS6GyogYZFJM%2BVHu3UsGWdXW9udAKl439ASKWVB%2Bf0xvJ6gp%2Fdl%2FswCTJV23cvJMAL3SvQ2RuUC2kDyGr1nePjw1j8sVXHMLvapsQGOqUBrm3XzOlRPJ1LLTKOc80ZGoLOGzwhVPRFRsccqmqIm2Hf7YICPhyd%2FSZpgu1rAp6WWCoDJCg%2F%2BTX4qaaMiyZ2JecewpTE4idA5ZstdN7STfYttEXDwBpeb3Y5PYsR16TJfi%2BxkISNZJm9BgOdCbwMLwhZYoU9ibdQPD3JZsq1TUrhJxLcVB2zBFujnvDvdq8DieYLuVYOYCoxexh0e%2FKH9%2BPbJVhn&X-Amz-Signature=10cc4d51586e40d6dc640231579233269ae91d80d41a3877988e2977b621f4b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM7ACSYP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdlAFhMnj9mCSBFuPuuNo6dkKQbRI%2FcsqEdmXFGI9CnwIgbkCm9HToxXGjWIwMMLiP%2FsnyEV1MuTsu%2FOkGIXrkLs0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2B2foMbOoJv1tDFECrcA2EPZ5mK56Bof8v6JTteOdrYNnvxxRai2mEQzxrsl2qXxwCHTbpPjYqp9DH%2Bu40O77uje9b%2BC6RXxH1ybndCEJLImFXAdZ6WU%2F8Yp8ikseNi6ZUFI6COaZRD5OVf2nJZvqjaDLwxmoajFmkhMZfXE7MTWXBP1AQJfrLV141oqkXZ1s1mWhdDnrAs6VPNzhowFBTLSH6Cw4jzjQvxLdKSotl%2FnRlqW7L89zm4ld0LPswi%2FWy5mz5v1e3mf1OVAx%2BVptzLQSaBP3qSKc%2FVddKnj0cXT%2BT98oIK91qy3%2BUOflXJH3PtIGnYH4vtblRPxC0Lihwo1HTrvPWQUqrzyZnvESGGg9vJ8HC7xeZIrCmwHYeK%2F%2B9ohzplF7auAk4F%2FoWuDNZrxFpKGYAKKUGOd9OhjISurxFKKMphKFV%2BdVgDA5gqf6EPCWihOuUP0fqODMUe1pXhUc4m143r06cvG%2BtUtyALAIVzieS%2BknwstF5AYY2CxSKIMREn5ukYG4LtfRcGUAqxiSVtTJg6Ibdt2z3svibxNk0rfZTS6GyogYZFJM%2BVHu3UsGWdXW9udAKl439ASKWVB%2Bf0xvJ6gp%2Fdl%2FswCTJV23cvJMAL3SvQ2RuUC2kDyGr1nePjw1j8sVXHMLvapsQGOqUBrm3XzOlRPJ1LLTKOc80ZGoLOGzwhVPRFRsccqmqIm2Hf7YICPhyd%2FSZpgu1rAp6WWCoDJCg%2F%2BTX4qaaMiyZ2JecewpTE4idA5ZstdN7STfYttEXDwBpeb3Y5PYsR16TJfi%2BxkISNZJm9BgOdCbwMLwhZYoU9ibdQPD3JZsq1TUrhJxLcVB2zBFujnvDvdq8DieYLuVYOYCoxexh0e%2FKH9%2BPbJVhn&X-Amz-Signature=eb7df3f925457c507ba986c5c836fce156dbf66b25526b5cc13ab7a06e38b432&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM7ACSYP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdlAFhMnj9mCSBFuPuuNo6dkKQbRI%2FcsqEdmXFGI9CnwIgbkCm9HToxXGjWIwMMLiP%2FsnyEV1MuTsu%2FOkGIXrkLs0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2B2foMbOoJv1tDFECrcA2EPZ5mK56Bof8v6JTteOdrYNnvxxRai2mEQzxrsl2qXxwCHTbpPjYqp9DH%2Bu40O77uje9b%2BC6RXxH1ybndCEJLImFXAdZ6WU%2F8Yp8ikseNi6ZUFI6COaZRD5OVf2nJZvqjaDLwxmoajFmkhMZfXE7MTWXBP1AQJfrLV141oqkXZ1s1mWhdDnrAs6VPNzhowFBTLSH6Cw4jzjQvxLdKSotl%2FnRlqW7L89zm4ld0LPswi%2FWy5mz5v1e3mf1OVAx%2BVptzLQSaBP3qSKc%2FVddKnj0cXT%2BT98oIK91qy3%2BUOflXJH3PtIGnYH4vtblRPxC0Lihwo1HTrvPWQUqrzyZnvESGGg9vJ8HC7xeZIrCmwHYeK%2F%2B9ohzplF7auAk4F%2FoWuDNZrxFpKGYAKKUGOd9OhjISurxFKKMphKFV%2BdVgDA5gqf6EPCWihOuUP0fqODMUe1pXhUc4m143r06cvG%2BtUtyALAIVzieS%2BknwstF5AYY2CxSKIMREn5ukYG4LtfRcGUAqxiSVtTJg6Ibdt2z3svibxNk0rfZTS6GyogYZFJM%2BVHu3UsGWdXW9udAKl439ASKWVB%2Bf0xvJ6gp%2Fdl%2FswCTJV23cvJMAL3SvQ2RuUC2kDyGr1nePjw1j8sVXHMLvapsQGOqUBrm3XzOlRPJ1LLTKOc80ZGoLOGzwhVPRFRsccqmqIm2Hf7YICPhyd%2FSZpgu1rAp6WWCoDJCg%2F%2BTX4qaaMiyZ2JecewpTE4idA5ZstdN7STfYttEXDwBpeb3Y5PYsR16TJfi%2BxkISNZJm9BgOdCbwMLwhZYoU9ibdQPD3JZsq1TUrhJxLcVB2zBFujnvDvdq8DieYLuVYOYCoxexh0e%2FKH9%2BPbJVhn&X-Amz-Signature=19f5e0162edf203a27ed8c3a535a555898e5ccfea618f96833d3dbab82538f8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM7ACSYP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdlAFhMnj9mCSBFuPuuNo6dkKQbRI%2FcsqEdmXFGI9CnwIgbkCm9HToxXGjWIwMMLiP%2FsnyEV1MuTsu%2FOkGIXrkLs0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2B2foMbOoJv1tDFECrcA2EPZ5mK56Bof8v6JTteOdrYNnvxxRai2mEQzxrsl2qXxwCHTbpPjYqp9DH%2Bu40O77uje9b%2BC6RXxH1ybndCEJLImFXAdZ6WU%2F8Yp8ikseNi6ZUFI6COaZRD5OVf2nJZvqjaDLwxmoajFmkhMZfXE7MTWXBP1AQJfrLV141oqkXZ1s1mWhdDnrAs6VPNzhowFBTLSH6Cw4jzjQvxLdKSotl%2FnRlqW7L89zm4ld0LPswi%2FWy5mz5v1e3mf1OVAx%2BVptzLQSaBP3qSKc%2FVddKnj0cXT%2BT98oIK91qy3%2BUOflXJH3PtIGnYH4vtblRPxC0Lihwo1HTrvPWQUqrzyZnvESGGg9vJ8HC7xeZIrCmwHYeK%2F%2B9ohzplF7auAk4F%2FoWuDNZrxFpKGYAKKUGOd9OhjISurxFKKMphKFV%2BdVgDA5gqf6EPCWihOuUP0fqODMUe1pXhUc4m143r06cvG%2BtUtyALAIVzieS%2BknwstF5AYY2CxSKIMREn5ukYG4LtfRcGUAqxiSVtTJg6Ibdt2z3svibxNk0rfZTS6GyogYZFJM%2BVHu3UsGWdXW9udAKl439ASKWVB%2Bf0xvJ6gp%2Fdl%2FswCTJV23cvJMAL3SvQ2RuUC2kDyGr1nePjw1j8sVXHMLvapsQGOqUBrm3XzOlRPJ1LLTKOc80ZGoLOGzwhVPRFRsccqmqIm2Hf7YICPhyd%2FSZpgu1rAp6WWCoDJCg%2F%2BTX4qaaMiyZ2JecewpTE4idA5ZstdN7STfYttEXDwBpeb3Y5PYsR16TJfi%2BxkISNZJm9BgOdCbwMLwhZYoU9ibdQPD3JZsq1TUrhJxLcVB2zBFujnvDvdq8DieYLuVYOYCoxexh0e%2FKH9%2BPbJVhn&X-Amz-Signature=a25ffdd99a2571fa732254fd6474bf09725fc982c3c0803df11cc9d74bf1b3cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM7ACSYP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdlAFhMnj9mCSBFuPuuNo6dkKQbRI%2FcsqEdmXFGI9CnwIgbkCm9HToxXGjWIwMMLiP%2FsnyEV1MuTsu%2FOkGIXrkLs0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2B2foMbOoJv1tDFECrcA2EPZ5mK56Bof8v6JTteOdrYNnvxxRai2mEQzxrsl2qXxwCHTbpPjYqp9DH%2Bu40O77uje9b%2BC6RXxH1ybndCEJLImFXAdZ6WU%2F8Yp8ikseNi6ZUFI6COaZRD5OVf2nJZvqjaDLwxmoajFmkhMZfXE7MTWXBP1AQJfrLV141oqkXZ1s1mWhdDnrAs6VPNzhowFBTLSH6Cw4jzjQvxLdKSotl%2FnRlqW7L89zm4ld0LPswi%2FWy5mz5v1e3mf1OVAx%2BVptzLQSaBP3qSKc%2FVddKnj0cXT%2BT98oIK91qy3%2BUOflXJH3PtIGnYH4vtblRPxC0Lihwo1HTrvPWQUqrzyZnvESGGg9vJ8HC7xeZIrCmwHYeK%2F%2B9ohzplF7auAk4F%2FoWuDNZrxFpKGYAKKUGOd9OhjISurxFKKMphKFV%2BdVgDA5gqf6EPCWihOuUP0fqODMUe1pXhUc4m143r06cvG%2BtUtyALAIVzieS%2BknwstF5AYY2CxSKIMREn5ukYG4LtfRcGUAqxiSVtTJg6Ibdt2z3svibxNk0rfZTS6GyogYZFJM%2BVHu3UsGWdXW9udAKl439ASKWVB%2Bf0xvJ6gp%2Fdl%2FswCTJV23cvJMAL3SvQ2RuUC2kDyGr1nePjw1j8sVXHMLvapsQGOqUBrm3XzOlRPJ1LLTKOc80ZGoLOGzwhVPRFRsccqmqIm2Hf7YICPhyd%2FSZpgu1rAp6WWCoDJCg%2F%2BTX4qaaMiyZ2JecewpTE4idA5ZstdN7STfYttEXDwBpeb3Y5PYsR16TJfi%2BxkISNZJm9BgOdCbwMLwhZYoU9ibdQPD3JZsq1TUrhJxLcVB2zBFujnvDvdq8DieYLuVYOYCoxexh0e%2FKH9%2BPbJVhn&X-Amz-Signature=357fbdfc8352e40573829360b38d4204bb5786bc4dc479e27591e63d1763ee26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM7ACSYP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdlAFhMnj9mCSBFuPuuNo6dkKQbRI%2FcsqEdmXFGI9CnwIgbkCm9HToxXGjWIwMMLiP%2FsnyEV1MuTsu%2FOkGIXrkLs0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2B2foMbOoJv1tDFECrcA2EPZ5mK56Bof8v6JTteOdrYNnvxxRai2mEQzxrsl2qXxwCHTbpPjYqp9DH%2Bu40O77uje9b%2BC6RXxH1ybndCEJLImFXAdZ6WU%2F8Yp8ikseNi6ZUFI6COaZRD5OVf2nJZvqjaDLwxmoajFmkhMZfXE7MTWXBP1AQJfrLV141oqkXZ1s1mWhdDnrAs6VPNzhowFBTLSH6Cw4jzjQvxLdKSotl%2FnRlqW7L89zm4ld0LPswi%2FWy5mz5v1e3mf1OVAx%2BVptzLQSaBP3qSKc%2FVddKnj0cXT%2BT98oIK91qy3%2BUOflXJH3PtIGnYH4vtblRPxC0Lihwo1HTrvPWQUqrzyZnvESGGg9vJ8HC7xeZIrCmwHYeK%2F%2B9ohzplF7auAk4F%2FoWuDNZrxFpKGYAKKUGOd9OhjISurxFKKMphKFV%2BdVgDA5gqf6EPCWihOuUP0fqODMUe1pXhUc4m143r06cvG%2BtUtyALAIVzieS%2BknwstF5AYY2CxSKIMREn5ukYG4LtfRcGUAqxiSVtTJg6Ibdt2z3svibxNk0rfZTS6GyogYZFJM%2BVHu3UsGWdXW9udAKl439ASKWVB%2Bf0xvJ6gp%2Fdl%2FswCTJV23cvJMAL3SvQ2RuUC2kDyGr1nePjw1j8sVXHMLvapsQGOqUBrm3XzOlRPJ1LLTKOc80ZGoLOGzwhVPRFRsccqmqIm2Hf7YICPhyd%2FSZpgu1rAp6WWCoDJCg%2F%2BTX4qaaMiyZ2JecewpTE4idA5ZstdN7STfYttEXDwBpeb3Y5PYsR16TJfi%2BxkISNZJm9BgOdCbwMLwhZYoU9ibdQPD3JZsq1TUrhJxLcVB2zBFujnvDvdq8DieYLuVYOYCoxexh0e%2FKH9%2BPbJVhn&X-Amz-Signature=69ea9facf78e56b91e2521fd3aa48013c6b0761872a192d875d73da645ef6ac3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
