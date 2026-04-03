---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-08-03T21:37:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-08-03T21:37:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 152
toc: false
icon: ""
---

### What is odometry?

Odometry (odom) is the (x,y) position of where the robot thinks it is on a map

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQWJOS2E%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmFgI%2FfrQSlYCmEqeVCFAnVLPBZ7aJY%2BfQzaSaCK54dAiEA1kJIVuVMzHxyAMSbLHsSi4lk39JKhAWJzAZdprYQYHAq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJAjPNl00Bcgf4TRNircA5gbKexxylCtp%2FakTvYiD0j0oXYBeWKt5Ggr7qj17zPihJGcMisPdFUpMDY%2FkheOOCqbLnJwuw7WiQH%2BM84ryxqS1YNRYWyfRzW8h1zjwLIGRLJCrLmlscXX2SWEWOxfA%2F9hTVgcZnKqX4AsbyFgd8mPSlSMyw94YaA2DVI6IBdg4DppsC%2BU9UiUzjryJEs4R1UGmKCTR%2Ft8ojitc%2Fv2HLq5w%2BH1NcmzFgKGjaTcR0nqeXvA62z79x4qX%2Fbqq5qrA7bjrxkeEhmBEehXS6v8%2BkRPKpOCGQ3sAZKMPqsQLqqWlLJxGux9HxR3zEfz9fFB0FX4UJt%2FLyz4O8JkQKCb7cjtYqrx%2Bwc5nWWMKWe02bMNjd3iiDu1yKc9g1W8tUXtBq8chz5lWPT0l5QOF05EUKBMsDJR1ksc958b8YXd4iG6kJLj5CT42LB%2BwO8HZPCElxUIS%2BV4dgakD8ZSox9kYXFwl73SABMlqqlJaL9ZfToY%2BgcXif8WHJ7Q9a6D2Pox4lv2mX47tmlgGqblxoQ9GK6H42NZU29kHxtDG1BzlgHFjlUFqyhdm3xvE6z7NPnklT8kvkdESb%2FsF%2BmK8ly3YM0Y7sh8CdCRs%2Fh9ezt%2BH3RBw9Q0e127Ad1HyVdiMMrGu84GOqUBOo1IKcMfGg1dFV%2Fn3IQ%2BXtqKWWNaqyx8DgWIg2MWr7Cn4fXKtt7rU%2FCdK2p1v7bEa7D9T%2FW123YqECw8v9Hq8PqyIfMgG5fVpJhd%2FkIBhZK8IC6iBDoeWIjc%2BC4Ci42EKHWoq7Pum5cgBFEjXlay4LAU0k1Kmoe7Bq%2FduBqM5uQNdsiMbDcAbQYV1lvBLlFc46l6zsr0L76F5gqlagExhXQ%2BJlvJ&X-Amz-Signature=f130048d63ee2b43d7aa9a1d31c6b12efebb5f6d3203ef4a14a7f93b032c782f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This is often done by measuring how many times the wheels rotate on our robot

First we need to read in our wheel angles and put them into ROS.

Lets make a Node to do this

{{% alert context="info" %}}

<details>
  <summary>{{< markdownify >}}Why not ros2_control?{{< /markdownify >}}</summary>
  
This guide is designed to be work with hardware setups commonly found in Robomasters. Where there is a often a Raspberry Pi / Jetson, and a micro controller such as an Arduino / Robomasters type-c boards. Most of the controls code lives on the micro controller so it is more convent for the Robomasters teams to not use `ros2_control` and simply send commands over a serial interface.

If you are curious about `ros2_control` Articulate Robotics has a very good guide on it:

[ros2_control guide](https://articulatedrobotics.xyz/tutorials/mobile-robot/applications/ros2_control-concepts)

</details>



{{% /alert %}}

# Publishing wheel angles to `/joint_states`

## Creating custom node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQWJOS2E%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmFgI%2FfrQSlYCmEqeVCFAnVLPBZ7aJY%2BfQzaSaCK54dAiEA1kJIVuVMzHxyAMSbLHsSi4lk39JKhAWJzAZdprYQYHAq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJAjPNl00Bcgf4TRNircA5gbKexxylCtp%2FakTvYiD0j0oXYBeWKt5Ggr7qj17zPihJGcMisPdFUpMDY%2FkheOOCqbLnJwuw7WiQH%2BM84ryxqS1YNRYWyfRzW8h1zjwLIGRLJCrLmlscXX2SWEWOxfA%2F9hTVgcZnKqX4AsbyFgd8mPSlSMyw94YaA2DVI6IBdg4DppsC%2BU9UiUzjryJEs4R1UGmKCTR%2Ft8ojitc%2Fv2HLq5w%2BH1NcmzFgKGjaTcR0nqeXvA62z79x4qX%2Fbqq5qrA7bjrxkeEhmBEehXS6v8%2BkRPKpOCGQ3sAZKMPqsQLqqWlLJxGux9HxR3zEfz9fFB0FX4UJt%2FLyz4O8JkQKCb7cjtYqrx%2Bwc5nWWMKWe02bMNjd3iiDu1yKc9g1W8tUXtBq8chz5lWPT0l5QOF05EUKBMsDJR1ksc958b8YXd4iG6kJLj5CT42LB%2BwO8HZPCElxUIS%2BV4dgakD8ZSox9kYXFwl73SABMlqqlJaL9ZfToY%2BgcXif8WHJ7Q9a6D2Pox4lv2mX47tmlgGqblxoQ9GK6H42NZU29kHxtDG1BzlgHFjlUFqyhdm3xvE6z7NPnklT8kvkdESb%2FsF%2BmK8ly3YM0Y7sh8CdCRs%2Fh9ezt%2BH3RBw9Q0e127Ad1HyVdiMMrGu84GOqUBOo1IKcMfGg1dFV%2Fn3IQ%2BXtqKWWNaqyx8DgWIg2MWr7Cn4fXKtt7rU%2FCdK2p1v7bEa7D9T%2FW123YqECw8v9Hq8PqyIfMgG5fVpJhd%2FkIBhZK8IC6iBDoeWIjc%2BC4Ci42EKHWoq7Pum5cgBFEjXlay4LAU0k1Kmoe7Bq%2FduBqM5uQNdsiMbDcAbQYV1lvBLlFc46l6zsr0L76F5gqlagExhXQ%2BJlvJ&X-Amz-Signature=c65c5d91b56ceb3b0260a2d6ed8f35922fe77bc22b5857001c2b7e93ab67074e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**        | **Type**              |
| --------------- | --------------------- |
| `/joint_states` | sensor_msg/JointState |

{{< /table >}}


#### description:

reads in the physical robot’s wheel angles and publishes them to `/joint_state` 

{{% /alert %}}

There should be a file `mbot_pkg/mbot_pkg/my_node.py`

This is where we are going to create our custom node to read in wheel angles

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQWJOS2E%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmFgI%2FfrQSlYCmEqeVCFAnVLPBZ7aJY%2BfQzaSaCK54dAiEA1kJIVuVMzHxyAMSbLHsSi4lk39JKhAWJzAZdprYQYHAq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJAjPNl00Bcgf4TRNircA5gbKexxylCtp%2FakTvYiD0j0oXYBeWKt5Ggr7qj17zPihJGcMisPdFUpMDY%2FkheOOCqbLnJwuw7WiQH%2BM84ryxqS1YNRYWyfRzW8h1zjwLIGRLJCrLmlscXX2SWEWOxfA%2F9hTVgcZnKqX4AsbyFgd8mPSlSMyw94YaA2DVI6IBdg4DppsC%2BU9UiUzjryJEs4R1UGmKCTR%2Ft8ojitc%2Fv2HLq5w%2BH1NcmzFgKGjaTcR0nqeXvA62z79x4qX%2Fbqq5qrA7bjrxkeEhmBEehXS6v8%2BkRPKpOCGQ3sAZKMPqsQLqqWlLJxGux9HxR3zEfz9fFB0FX4UJt%2FLyz4O8JkQKCb7cjtYqrx%2Bwc5nWWMKWe02bMNjd3iiDu1yKc9g1W8tUXtBq8chz5lWPT0l5QOF05EUKBMsDJR1ksc958b8YXd4iG6kJLj5CT42LB%2BwO8HZPCElxUIS%2BV4dgakD8ZSox9kYXFwl73SABMlqqlJaL9ZfToY%2BgcXif8WHJ7Q9a6D2Pox4lv2mX47tmlgGqblxoQ9GK6H42NZU29kHxtDG1BzlgHFjlUFqyhdm3xvE6z7NPnklT8kvkdESb%2FsF%2BmK8ly3YM0Y7sh8CdCRs%2Fh9ezt%2BH3RBw9Q0e127Ad1HyVdiMMrGu84GOqUBOo1IKcMfGg1dFV%2Fn3IQ%2BXtqKWWNaqyx8DgWIg2MWr7Cn4fXKtt7rU%2FCdK2p1v7bEa7D9T%2FW123YqECw8v9Hq8PqyIfMgG5fVpJhd%2FkIBhZK8IC6iBDoeWIjc%2BC4Ci42EKHWoq7Pum5cgBFEjXlay4LAU0k1Kmoe7Bq%2FduBqM5uQNdsiMbDcAbQYV1lvBLlFc46l6zsr0L76F5gqlagExhXQ%2BJlvJ&X-Amz-Signature=24637e5701b12d5095f77521d47a95168e6f105b95cf4075f78276861e8f6b8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

First we need to **publish** to topic `/joint_states` so I will copy the example publisher code from the[ Publisher and Subscriber guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/):

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'my_topic', 10) # publisher obj
        self.timer = self.create_timer(0.05, self.timer_callback) # calls timer_callback() every 0.5 sec
		
		# gets called every 0.05 seconds
    def timer_callback(self):
        msg = String()                                      # create msg object
        msg.data = 'Hello World'                            # fill it with data
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info('Publishing: ' + msg.data)   # print msg


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

Here is how the basic publisher object works

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQWJOS2E%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmFgI%2FfrQSlYCmEqeVCFAnVLPBZ7aJY%2BfQzaSaCK54dAiEA1kJIVuVMzHxyAMSbLHsSi4lk39JKhAWJzAZdprYQYHAq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJAjPNl00Bcgf4TRNircA5gbKexxylCtp%2FakTvYiD0j0oXYBeWKt5Ggr7qj17zPihJGcMisPdFUpMDY%2FkheOOCqbLnJwuw7WiQH%2BM84ryxqS1YNRYWyfRzW8h1zjwLIGRLJCrLmlscXX2SWEWOxfA%2F9hTVgcZnKqX4AsbyFgd8mPSlSMyw94YaA2DVI6IBdg4DppsC%2BU9UiUzjryJEs4R1UGmKCTR%2Ft8ojitc%2Fv2HLq5w%2BH1NcmzFgKGjaTcR0nqeXvA62z79x4qX%2Fbqq5qrA7bjrxkeEhmBEehXS6v8%2BkRPKpOCGQ3sAZKMPqsQLqqWlLJxGux9HxR3zEfz9fFB0FX4UJt%2FLyz4O8JkQKCb7cjtYqrx%2Bwc5nWWMKWe02bMNjd3iiDu1yKc9g1W8tUXtBq8chz5lWPT0l5QOF05EUKBMsDJR1ksc958b8YXd4iG6kJLj5CT42LB%2BwO8HZPCElxUIS%2BV4dgakD8ZSox9kYXFwl73SABMlqqlJaL9ZfToY%2BgcXif8WHJ7Q9a6D2Pox4lv2mX47tmlgGqblxoQ9GK6H42NZU29kHxtDG1BzlgHFjlUFqyhdm3xvE6z7NPnklT8kvkdESb%2FsF%2BmK8ly3YM0Y7sh8CdCRs%2Fh9ezt%2BH3RBw9Q0e127Ad1HyVdiMMrGu84GOqUBOo1IKcMfGg1dFV%2Fn3IQ%2BXtqKWWNaqyx8DgWIg2MWr7Cn4fXKtt7rU%2FCdK2p1v7bEa7D9T%2FW123YqECw8v9Hq8PqyIfMgG5fVpJhd%2FkIBhZK8IC6iBDoeWIjc%2BC4Ci42EKHWoq7Pum5cgBFEjXlay4LAU0k1Kmoe7Bq%2FduBqM5uQNdsiMbDcAbQYV1lvBLlFc46l6zsr0L76F5gqlagExhXQ%2BJlvJ&X-Amz-Signature=f0eb186f1ce4f4d333ffb737c1c8d32b1900340e252678e96eae09f398ead168&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We need to change the publisher topic type from `String` to `sensor_msg/JointState` and where it’s publishing too. Let us also import `JointState` type and some stuff we will use later.

```python "4-4","5-9","14-14","15-15"
import rclpy
from rclpy.node import Node

from sensor_msgs.msg import JointState
from geometry_msgs.msg import *
from tf2_ros.transform_broadcaster import TransformBroadcaster
from tf_transformations import quaternion_from_euler
from math import cos, sin
from nav_msgs.msg import Odometry, Path

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)
		
		# gets called every 0.05 seconds
    def timer_callback(self):
			...
```

To find out how the `JointState` message is formatted we can run these two commands in two different terminals

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```python
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```bash
ros2 topic echo /joint_states
```

</div>
</div>

**Output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQWJOS2E%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmFgI%2FfrQSlYCmEqeVCFAnVLPBZ7aJY%2BfQzaSaCK54dAiEA1kJIVuVMzHxyAMSbLHsSi4lk39JKhAWJzAZdprYQYHAq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJAjPNl00Bcgf4TRNircA5gbKexxylCtp%2FakTvYiD0j0oXYBeWKt5Ggr7qj17zPihJGcMisPdFUpMDY%2FkheOOCqbLnJwuw7WiQH%2BM84ryxqS1YNRYWyfRzW8h1zjwLIGRLJCrLmlscXX2SWEWOxfA%2F9hTVgcZnKqX4AsbyFgd8mPSlSMyw94YaA2DVI6IBdg4DppsC%2BU9UiUzjryJEs4R1UGmKCTR%2Ft8ojitc%2Fv2HLq5w%2BH1NcmzFgKGjaTcR0nqeXvA62z79x4qX%2Fbqq5qrA7bjrxkeEhmBEehXS6v8%2BkRPKpOCGQ3sAZKMPqsQLqqWlLJxGux9HxR3zEfz9fFB0FX4UJt%2FLyz4O8JkQKCb7cjtYqrx%2Bwc5nWWMKWe02bMNjd3iiDu1yKc9g1W8tUXtBq8chz5lWPT0l5QOF05EUKBMsDJR1ksc958b8YXd4iG6kJLj5CT42LB%2BwO8HZPCElxUIS%2BV4dgakD8ZSox9kYXFwl73SABMlqqlJaL9ZfToY%2BgcXif8WHJ7Q9a6D2Pox4lv2mX47tmlgGqblxoQ9GK6H42NZU29kHxtDG1BzlgHFjlUFqyhdm3xvE6z7NPnklT8kvkdESb%2FsF%2BmK8ly3YM0Y7sh8CdCRs%2Fh9ezt%2BH3RBw9Q0e127Ad1HyVdiMMrGu84GOqUBOo1IKcMfGg1dFV%2Fn3IQ%2BXtqKWWNaqyx8DgWIg2MWr7Cn4fXKtt7rU%2FCdK2p1v7bEa7D9T%2FW123YqECw8v9Hq8PqyIfMgG5fVpJhd%2FkIBhZK8IC6iBDoeWIjc%2BC4Ci42EKHWoq7Pum5cgBFEjXlay4LAU0k1Kmoe7Bq%2FduBqM5uQNdsiMbDcAbQYV1lvBLlFc46l6zsr0L76F5gqlagExhXQ%2BJlvJ&X-Amz-Signature=c69bdb9f75269bf7194d9d45ce412e20ebfeb9ca56089414c7e98f961c2c893c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

the `ros2 topic echo /joint_states` command showed what the `joint_state_publisher_gui_node` is publishing. 

> [**official** ](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)[**`sensor_msg/JointState`**](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)[ **docs**](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)

#### `sensor_msg/JointState` format:

```python
header:
  stamp:
    sec: 1751953191
    nanosec: 173816334
  frame_id: ''
name:
- drivewhl_l_joint
- drivewhl_r_joint
position:
- -0.7640353333530374
- -0.25446900494077296
velocity: []
effort: []
```

we can fill in the fields roughly the same

```python "1-17"

    # gets called every 0.05 seconds
    def timer_callback(self):
        new_left_wheel_th =  # TODO: reading wheel position goes here
        new_right_wheel_th = # TODO: reading wheel position goes here
        current_time = self.get_clock().now().to_msg()
        
        # ============ updating URDF wheel joints ====================
        msg = JointState()                                  # create msg object
        msg.header.stamp = current_time                     # fill it with data
        msg.header.frame_id = ''
        msg.name = ["drivewhl_l_joint","drivewhl_r_joint"]
        msg.position = [new_left_wheel_th, new_right_wheel_th]
        msg.velocity = []
        msg.effort = []
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info(f'Publishing position {new_left_wheel_th}, {new_right_wheel_th}')       # print msg
```

{{% alert context="warning" %}}

## REMEMBER TO GET WHEEL POSITION!!

At this point you would most likely read from your Arduino or from the Raspberry Pi’s GPIO.

if you are in Robomasters this will most likely come from the `RM_Uart` class

{{% /alert %}}

<details>
  <summary>{{< markdownify >}}**Final code:**{{< /markdownify >}}</summary>
  
```python "15-29"
import rclpy
from rclpy.node import Node

from sensor_msgs.msg import JointState


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.5, self.timer_callback) # calls timer_callback() every 0.5 sec

    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()
        new_left_wheel_th =  # TODO: reading wheel position goes here
        new_right_wheel_th = # TODO: reading wheel position goes here

        
        # ============ updating URDF wheel joints ====================
        msg = JointState()                                  # create msg object
        msg.header.stamp = current_time                     # fill it with data
        msg.header.frame_id = ''
        msg.name = ["drivewhl_l_joint","drivewhl_r_joint"]
        msg.position = [new_left_wheel_th, new_right_wheel_th]
        msg.velocity = []
        msg.effort = []
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info(f'Publishing position {new_left_wheel_th}, {new_right_wheel_th}')       # print msg


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

</details>



At this point plug in your robot to you laptop/computer

> lf on WSL here is a guide for [Connecting USB devices](https://learn.microsoft.com/en-us/windows/wsl/connect-usb)

{{% alert context="info" %}}

If you are developing in a dev container you have to forward the USB port into the dev container.

in the file `.devcontainer/devcontainer.json` add this line into the  `runArgs:` array

`"--device=/dev/tty<your device>",` to find what your device is outside of your devcontainer, probably in your WSL shell, run `ls /dev/tty*` to find which tty device to use. If you are not sure unplug and re run the command to see the difference.

you may also need to run `sudo chmod 777 /dev/tty<your device>` to use the device depending on how your hardware is setup

{{% /alert %}}

<details>
  <summary>{{< markdownify >}}What if I don’t have a robot{{< /markdownify >}}</summary>
  
We can fake the wheel values by doing this

```python "6-7","11-11","12-12","19-20"
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle
    
    # gets called every 0.05 seconds    
    def timer_callback(self):
        new_left_wheel_th = self.left_wheel_th+0.01 # faking wheel position
        new_right_wheel_th = self.right_wheel_th+0.02 # faking wheel position

        current_time = self.get_clock().now().to_msg()
        
        ...
        
        # updating wheel position
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th
```

This makes it so we just increment the wheel position every period

</details>



## Testing my_node

**run:**

```python
ros2 run mbot_pkg my_node
```

**output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQWJOS2E%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmFgI%2FfrQSlYCmEqeVCFAnVLPBZ7aJY%2BfQzaSaCK54dAiEA1kJIVuVMzHxyAMSbLHsSi4lk39JKhAWJzAZdprYQYHAq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJAjPNl00Bcgf4TRNircA5gbKexxylCtp%2FakTvYiD0j0oXYBeWKt5Ggr7qj17zPihJGcMisPdFUpMDY%2FkheOOCqbLnJwuw7WiQH%2BM84ryxqS1YNRYWyfRzW8h1zjwLIGRLJCrLmlscXX2SWEWOxfA%2F9hTVgcZnKqX4AsbyFgd8mPSlSMyw94YaA2DVI6IBdg4DppsC%2BU9UiUzjryJEs4R1UGmKCTR%2Ft8ojitc%2Fv2HLq5w%2BH1NcmzFgKGjaTcR0nqeXvA62z79x4qX%2Fbqq5qrA7bjrxkeEhmBEehXS6v8%2BkRPKpOCGQ3sAZKMPqsQLqqWlLJxGux9HxR3zEfz9fFB0FX4UJt%2FLyz4O8JkQKCb7cjtYqrx%2Bwc5nWWMKWe02bMNjd3iiDu1yKc9g1W8tUXtBq8chz5lWPT0l5QOF05EUKBMsDJR1ksc958b8YXd4iG6kJLj5CT42LB%2BwO8HZPCElxUIS%2BV4dgakD8ZSox9kYXFwl73SABMlqqlJaL9ZfToY%2BgcXif8WHJ7Q9a6D2Pox4lv2mX47tmlgGqblxoQ9GK6H42NZU29kHxtDG1BzlgHFjlUFqyhdm3xvE6z7NPnklT8kvkdESb%2FsF%2BmK8ly3YM0Y7sh8CdCRs%2Fh9ezt%2BH3RBw9Q0e127Ad1HyVdiMMrGu84GOqUBOo1IKcMfGg1dFV%2Fn3IQ%2BXtqKWWNaqyx8DgWIg2MWr7Cn4fXKtt7rU%2FCdK2p1v7bEa7D9T%2FW123YqECw8v9Hq8PqyIfMgG5fVpJhd%2FkIBhZK8IC6iBDoeWIjc%2BC4Ci42EKHWoq7Pum5cgBFEjXlay4LAU0k1Kmoe7Bq%2FduBqM5uQNdsiMbDcAbQYV1lvBLlFc46l6zsr0L76F5gqlagExhXQ%2BJlvJ&X-Amz-Signature=c069332568f0820578012c3ba10c9e5ea7d1b0375740c024c3330c13be24c1b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQWJOS2E%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmFgI%2FfrQSlYCmEqeVCFAnVLPBZ7aJY%2BfQzaSaCK54dAiEA1kJIVuVMzHxyAMSbLHsSi4lk39JKhAWJzAZdprYQYHAq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJAjPNl00Bcgf4TRNircA5gbKexxylCtp%2FakTvYiD0j0oXYBeWKt5Ggr7qj17zPihJGcMisPdFUpMDY%2FkheOOCqbLnJwuw7WiQH%2BM84ryxqS1YNRYWyfRzW8h1zjwLIGRLJCrLmlscXX2SWEWOxfA%2F9hTVgcZnKqX4AsbyFgd8mPSlSMyw94YaA2DVI6IBdg4DppsC%2BU9UiUzjryJEs4R1UGmKCTR%2Ft8ojitc%2Fv2HLq5w%2BH1NcmzFgKGjaTcR0nqeXvA62z79x4qX%2Fbqq5qrA7bjrxkeEhmBEehXS6v8%2BkRPKpOCGQ3sAZKMPqsQLqqWlLJxGux9HxR3zEfz9fFB0FX4UJt%2FLyz4O8JkQKCb7cjtYqrx%2Bwc5nWWMKWe02bMNjd3iiDu1yKc9g1W8tUXtBq8chz5lWPT0l5QOF05EUKBMsDJR1ksc958b8YXd4iG6kJLj5CT42LB%2BwO8HZPCElxUIS%2BV4dgakD8ZSox9kYXFwl73SABMlqqlJaL9ZfToY%2BgcXif8WHJ7Q9a6D2Pox4lv2mX47tmlgGqblxoQ9GK6H42NZU29kHxtDG1BzlgHFjlUFqyhdm3xvE6z7NPnklT8kvkdESb%2FsF%2BmK8ly3YM0Y7sh8CdCRs%2Fh9ezt%2BH3RBw9Q0e127Ad1HyVdiMMrGu84GOqUBOo1IKcMfGg1dFV%2Fn3IQ%2BXtqKWWNaqyx8DgWIg2MWr7Cn4fXKtt7rU%2FCdK2p1v7bEa7D9T%2FW123YqECw8v9Hq8PqyIfMgG5fVpJhd%2FkIBhZK8IC6iBDoeWIjc%2BC4Ci42EKHWoq7Pum5cgBFEjXlay4LAU0k1Kmoe7Bq%2FduBqM5uQNdsiMbDcAbQYV1lvBLlFc46l6zsr0L76F5gqlagExhXQ%2BJlvJ&X-Amz-Signature=a9c80fc47b4694a305b9054f773838d8c0b3c947b44697144de573972278cd8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

comment out `joint_state_publisher_gui_node` in the launch file

```python "2-2"
return LaunchDescription([
		# joint_state_publisher_gui_node, # debugs urdf joints
		robot_state_publisher_node,
		rviz_node,
])
```

in two different terminals run

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```bash
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```bash
ros2 run mbot_pkg my_node
```

</div>
</div>

### **rviz result:**

moving the robot should also update the rviz model

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQWJOS2E%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmFgI%2FfrQSlYCmEqeVCFAnVLPBZ7aJY%2BfQzaSaCK54dAiEA1kJIVuVMzHxyAMSbLHsSi4lk39JKhAWJzAZdprYQYHAq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJAjPNl00Bcgf4TRNircA5gbKexxylCtp%2FakTvYiD0j0oXYBeWKt5Ggr7qj17zPihJGcMisPdFUpMDY%2FkheOOCqbLnJwuw7WiQH%2BM84ryxqS1YNRYWyfRzW8h1zjwLIGRLJCrLmlscXX2SWEWOxfA%2F9hTVgcZnKqX4AsbyFgd8mPSlSMyw94YaA2DVI6IBdg4DppsC%2BU9UiUzjryJEs4R1UGmKCTR%2Ft8ojitc%2Fv2HLq5w%2BH1NcmzFgKGjaTcR0nqeXvA62z79x4qX%2Fbqq5qrA7bjrxkeEhmBEehXS6v8%2BkRPKpOCGQ3sAZKMPqsQLqqWlLJxGux9HxR3zEfz9fFB0FX4UJt%2FLyz4O8JkQKCb7cjtYqrx%2Bwc5nWWMKWe02bMNjd3iiDu1yKc9g1W8tUXtBq8chz5lWPT0l5QOF05EUKBMsDJR1ksc958b8YXd4iG6kJLj5CT42LB%2BwO8HZPCElxUIS%2BV4dgakD8ZSox9kYXFwl73SABMlqqlJaL9ZfToY%2BgcXif8WHJ7Q9a6D2Pox4lv2mX47tmlgGqblxoQ9GK6H42NZU29kHxtDG1BzlgHFjlUFqyhdm3xvE6z7NPnklT8kvkdESb%2FsF%2BmK8ly3YM0Y7sh8CdCRs%2Fh9ezt%2BH3RBw9Q0e127Ad1HyVdiMMrGu84GOqUBOo1IKcMfGg1dFV%2Fn3IQ%2BXtqKWWNaqyx8DgWIg2MWr7Cn4fXKtt7rU%2FCdK2p1v7bEa7D9T%2FW123YqECw8v9Hq8PqyIfMgG5fVpJhd%2FkIBhZK8IC6iBDoeWIjc%2BC4Ci42EKHWoq7Pum5cgBFEjXlay4LAU0k1Kmoe7Bq%2FduBqM5uQNdsiMbDcAbQYV1lvBLlFc46l6zsr0L76F5gqlagExhXQ%2BJlvJ&X-Amz-Signature=a24e923f842b73cccbec3ab5b345f86a0eb6ba02e388bdec362841a84b4f32d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Updating launch file

Lets add `my_node` to the launch file

```python "1-2","2-3","4-7","10-11"
		...
		
		# ros2 run mbot_pkg my_node
    my_node = Node( # launches our custom node
        package='mbot_pkg',
        executable='my_node'
    )

    return LaunchDescription([
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz
    ])
```

Now you only need `ros2 launch mbot_pkg display.launch.py` to run the whole setup

# Converting wheel angles to x,y (adding odom frame)

Now that we have the wheel angles lets get the (x, y) of the robot like in the GIF at the top of this guide

we do this though the `odom => base_link` transform

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQWJOS2E%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmFgI%2FfrQSlYCmEqeVCFAnVLPBZ7aJY%2BfQzaSaCK54dAiEA1kJIVuVMzHxyAMSbLHsSi4lk39JKhAWJzAZdprYQYHAq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJAjPNl00Bcgf4TRNircA5gbKexxylCtp%2FakTvYiD0j0oXYBeWKt5Ggr7qj17zPihJGcMisPdFUpMDY%2FkheOOCqbLnJwuw7WiQH%2BM84ryxqS1YNRYWyfRzW8h1zjwLIGRLJCrLmlscXX2SWEWOxfA%2F9hTVgcZnKqX4AsbyFgd8mPSlSMyw94YaA2DVI6IBdg4DppsC%2BU9UiUzjryJEs4R1UGmKCTR%2Ft8ojitc%2Fv2HLq5w%2BH1NcmzFgKGjaTcR0nqeXvA62z79x4qX%2Fbqq5qrA7bjrxkeEhmBEehXS6v8%2BkRPKpOCGQ3sAZKMPqsQLqqWlLJxGux9HxR3zEfz9fFB0FX4UJt%2FLyz4O8JkQKCb7cjtYqrx%2Bwc5nWWMKWe02bMNjd3iiDu1yKc9g1W8tUXtBq8chz5lWPT0l5QOF05EUKBMsDJR1ksc958b8YXd4iG6kJLj5CT42LB%2BwO8HZPCElxUIS%2BV4dgakD8ZSox9kYXFwl73SABMlqqlJaL9ZfToY%2BgcXif8WHJ7Q9a6D2Pox4lv2mX47tmlgGqblxoQ9GK6H42NZU29kHxtDG1BzlgHFjlUFqyhdm3xvE6z7NPnklT8kvkdESb%2FsF%2BmK8ly3YM0Y7sh8CdCRs%2Fh9ezt%2BH3RBw9Q0e127Ad1HyVdiMMrGu84GOqUBOo1IKcMfGg1dFV%2Fn3IQ%2BXtqKWWNaqyx8DgWIg2MWr7Cn4fXKtt7rU%2FCdK2p1v7bEa7D9T%2FW123YqECw8v9Hq8PqyIfMgG5fVpJhd%2FkIBhZK8IC6iBDoeWIjc%2BC4Ci42EKHWoq7Pum5cgBFEjXlay4LAU0k1Kmoe7Bq%2FduBqM5uQNdsiMbDcAbQYV1lvBLlFc46l6zsr0L76F5gqlagExhXQ%2BJlvJ&X-Amz-Signature=5de2a2e4e646e2f1941b028e8120c4fac664b8f2d211800e670625feb247ad65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQWJOS2E%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmFgI%2FfrQSlYCmEqeVCFAnVLPBZ7aJY%2BfQzaSaCK54dAiEA1kJIVuVMzHxyAMSbLHsSi4lk39JKhAWJzAZdprYQYHAq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJAjPNl00Bcgf4TRNircA5gbKexxylCtp%2FakTvYiD0j0oXYBeWKt5Ggr7qj17zPihJGcMisPdFUpMDY%2FkheOOCqbLnJwuw7WiQH%2BM84ryxqS1YNRYWyfRzW8h1zjwLIGRLJCrLmlscXX2SWEWOxfA%2F9hTVgcZnKqX4AsbyFgd8mPSlSMyw94YaA2DVI6IBdg4DppsC%2BU9UiUzjryJEs4R1UGmKCTR%2Ft8ojitc%2Fv2HLq5w%2BH1NcmzFgKGjaTcR0nqeXvA62z79x4qX%2Fbqq5qrA7bjrxkeEhmBEehXS6v8%2BkRPKpOCGQ3sAZKMPqsQLqqWlLJxGux9HxR3zEfz9fFB0FX4UJt%2FLyz4O8JkQKCb7cjtYqrx%2Bwc5nWWMKWe02bMNjd3iiDu1yKc9g1W8tUXtBq8chz5lWPT0l5QOF05EUKBMsDJR1ksc958b8YXd4iG6kJLj5CT42LB%2BwO8HZPCElxUIS%2BV4dgakD8ZSox9kYXFwl73SABMlqqlJaL9ZfToY%2BgcXif8WHJ7Q9a6D2Pox4lv2mX47tmlgGqblxoQ9GK6H42NZU29kHxtDG1BzlgHFjlUFqyhdm3xvE6z7NPnklT8kvkdESb%2FsF%2BmK8ly3YM0Y7sh8CdCRs%2Fh9ezt%2BH3RBw9Q0e127Ad1HyVdiMMrGu84GOqUBOo1IKcMfGg1dFV%2Fn3IQ%2BXtqKWWNaqyx8DgWIg2MWr7Cn4fXKtt7rU%2FCdK2p1v7bEa7D9T%2FW123YqECw8v9Hq8PqyIfMgG5fVpJhd%2FkIBhZK8IC6iBDoeWIjc%2BC4Ci42EKHWoq7Pum5cgBFEjXlay4LAU0k1Kmoe7Bq%2FduBqM5uQNdsiMbDcAbQYV1lvBLlFc46l6zsr0L76F5gqlagExhXQ%2BJlvJ&X-Amz-Signature=55404c65926995c039204955e7b9c9f10efae62805632684757974fc30994cfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKCGJQQE%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2IS%2B58WQ3w%2FW%2BG%2F7C%2F%2FdnfQgv3jvAmUXDiK%2FP0HpW2AiAVJ%2B5W%2FE1oc8h8WcI7RbRpjDUk6PnCW6RRKpBbJn1A2Cr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMT8IxbzbQoirS%2ByRgKtwDYXmWEGwuz9TZ7tDfZlynTjSlr%2F7tBgf4JulL9GHPvlj6P9LClCLYt4OtqVmyIoa5kFfW8RUa1QXBjo2XAo6HCFeqrqp4GW4Xu4ARl1JdjRM7heXGKnNDkiaUZhxawK8YdTH96MLZ%2BWgYXM%2BHUv1r2YuXuC2JbGpioJ98GALSEn1%2BxqUh7WhUqabWZhppvMZnNUxbpDDqdMdwmQ90whSlfNLuJDEmbtgltyB9q3nAut9TvRTGPI2yIhLw5ICN0hQZ36Z5iBw9w75i6xgHqZbbgUHu%2B3cfncr%2BoZQ8mdIz7ZW19x6lXRc8EJmQxAaBmWuYSke6iqh2ZTP4XnHs6%2B3%2FrQwVAKy1gSgyh1JP0N3E2UOWqTFFqumK%2BuHlCZDKOxwFrZNbHyIdU7TF83mf2iXbmGyGXba69Ji%2FOsF1%2FgOjoMNV5DoPGAWWK%2BKBOBQAaZ2xmJ96lXJbm4IDkCJqOhxI8bEaWzvONM3cpRsdLHSCG%2FHKtAUEa8%2BLGT797DBlf6eG%2BCeErvyZ7u0g0WevNPv0S2TyzUMustqb45%2BYlcfWShy8Obk7LtaBBVj8IwURhoIywitwKLibfCrG8By9ZR8G4uMwPtv%2BquMs2iy3S5vU6oMeK%2FoO4lC9a0ghY0kw8cW7zgY6pgFutWGlznZXiTVV5azEuZ%2FWJt9%2BhQVFKr8MUvIRJLfEZGx20GYCz4eSywMkbSfkYwVPlhpyVe0MxNuo7JC6jSIHA9AWMJyRDR6z81KRFsBGFShIAoPjc%2FrYIMnPwwefPLEx26RgwsmdotwkyeQNP4E3xhTQg6WCKieqLUL6VTdPSgTIfw7eY%2F0KIaCcbzsGn4FKX0GuRw8JRiwRwq2QxJjzuGuAMPTU&X-Amz-Signature=821f2ce34e531ec1ba21d3559095a5e17013da2be68c19e29338037e2b12c486&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO:

</details>



But for those who just want the equations/functions I wrote a `calculate_position()` function that converts wheel angles to x,y

`calculate_position()` just takes in:

- current left & right wheel angles
- most recent measured left & right wheel angles
- robot’s rotation (theta)

and returns the (x,y)

add this above the `MinimalPublisher` class

```python
def calculate_position(new_right_wheel_th, right_angle, new_left_wheel_th, left_angle, th):
    """retruns the robots x,y offset given wheel angles

    Args:
        new_right_wheel_th (float): new mesured right wheel angle
        right_angle (float): previous right wheel angle
        new_float_wheel_th (float): new mesured left wheel angle
        left_angle (float): previous left wheel angle
        th (float): robot chassis rotation

    Returns:
        (float, float): x,y offset
    """

    WHEEL_RADIUS = 0.10
    WHEEL_SEPARATION = 0.31+2*0.025 # body + wheel gap (there are 2 wheels)

    # convert rotation to linear distance
    dr = (new_right_wheel_th - right_angle)*WHEEL_RADIUS
    dl = (new_left_wheel_th - left_angle)*WHEEL_RADIUS

    # calcuate movement
    offset = (dr + dl) / 2
    delta_th = (dr - dl) / WHEEL_SEPARATION

    # extract componates
    relative_dx = offset*cos(delta_th)
    relative_dy = offset*sin(delta_th)

    #rotation matrix
    delta_x = relative_dx*cos(th) - relative_dy*sin(th)
    delta_y = relative_dx*sin(th) + relative_dy*cos(th)
    return (delta_x,delta_y,delta_th)

```

Next lets make some variables to store the wheel angle, x, y, and theta (robot rotation)

```python "10-11","12-17"
def calculate_position(new_right_wheel_th, right_angle, new_left_wheel_th, left_angle, th):
   ...

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta


```

```python "9-20","20-23"
 def timer_callback(self):
        new_left_wheel_th =  # TODO: reading wheel position goes here
        new_right_wheel_th = # TODO: reading wheel position goes here
        current_time = self.get_clock().now().to_msg()
        
        # ============ updating URDF wheel joints ====================
				...

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calculate_position(new_right_wheel_th, self.right_wheel_th, new_left_wheel_th, self.left_wheel_th, self.th)

        # update position
        self.x += delta_x
        self.y += delta_y
        self.th += delta_th
        
        self.get_logger().info(f'x: {self.x} y: {self.y}')
        
        # updating wheel position
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th
```

now in `timer_callback()` lets broadcast the `odom => base_link` tf frame

first create a tf broadcaster object

```python "14-14"
 class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta

        self.odom_brodcaster = TransformBroadcaster(self) # obj to broadcasts the odom tf frame
```

Then create a message and put `self.x` and `self.y` inside

```python "6-18","18-19","19-20","20-33"
    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()

				...

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calculate_position(new_right_wheel_th, self.right_wheel_th ,new_left_wheel_th, self.right_wheel_th, self.th)

        # update position
        self.x += delta_x
        self.y += delta_y
        self.th += delta_th
        
        self.get_logger().info(f'x: {self.x} y: {self.y}')
        
        # updating wheel position
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th

        # create and publish transform message
        odom_trans = TransformStamped()
        odom_trans.header.stamp = current_time
        odom_trans.header.frame_id = "odom"
        odom_trans.child_frame_id = "base_link"
        odom_trans.transform.translation.x = self.x
        odom_trans.transform.translation.y = self.y
        odom_trans.transform.translation.z = 0.0
        q = quaternion_from_euler(0, 0, self.th)
        odom_trans.transform.rotation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_brodcaster.sendTransform(odom_trans)

```

## Running code

```bash
ros2 launch mbot_pkg display.launch.py
```

**Result:**

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XONSLAS%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCw%2FCL90aXfNs3gdiVFgZJIaICIvF7gcH%2B2lcbix0tMAiBa5h1PWKwgIX31X9ePgso%2BGJrGk6cQVsd8DA7dXZgGFyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMdV%2F%2B3LT71wEWupbZKtwDIqX4i67f8rC4EBxFk7RBlk%2FaFD2Hk9ERdCpbYF9IvX6%2B5O3lUhVQD0SNnEsv95UY8F6pUoawCpoX%2B5dhI1rwrZieOvC06ULQ2Y7K8GRxFTXVDE0KfGxNxBB6ygdBz1kvQ3igwgogdQzAYRHiEfqhLjhU7QGYhf6u%2BlMBg72cRhDVj63BEjsnU7hgSTHVxhXSu09%2FrMO6PW6ge1h%2F0bTLtU27p9nve3ffcuWGPWQflcHA1YZdFAP3BcKWTTMzoT0anJkF%2FCkRgw6tGgEmy9Ja3fgSFWDMNFkXM5yqptfUi9GsMDICBlzcLJeVj8%2BPCE0BFFNBn%2F3Ad%2Fh4gtngogrTjEmKbzc4TWG0Ksnxy9dNyzZyWE7wrwNdoBkhsiOWYMmyCyxy%2FvTISa2%2BAMN%2FOjhWqzPO%2B8ONEXWVar%2FkYE69gbquDFv10CTIZLAXDXXRuJ%2B5YGfyuMDA%2FNjrrFEOvMjtyETgugkSOIRa2K85QBvwRrbPBIXKa%2BcjXxqg6k3yFnN7ir%2FdWKQ0%2BgZ6LU7UvjsbaryQ2LZiNXZKmYY3FVkoKhup1ftL0xWw6H02KshwlfP%2FWch7TnojfqQPRHe%2FCiygQtpuRyYy9fPbIC%2BtOAWQ696J6ezxy9zyTeXyWt0wqcW7zgY6pgFuYA6TBoth11LMBp5b2Oeu%2FXbWzsoCvIU3yCUzul5dfmUbbjB5hMfdhSVQX8j789OJ5B4cRAwy3Jf5915chXo3EtQM6mEWJx%2FQI1K24as%2BBVbW%2B5ekETJXFlbfXmpIYTSh9BQRqGV87mkOmftxgqIxTyevwjwcnpDxLn6MRNdTjddkP4%2Bkp3NrCjB1ZHQZ2mGZbv4vdEqK7toWPioLil66I1S8e9WG&X-Amz-Signature=b99365f3da67d32f34b1923b8f71b98b610b0fa34d9710f5ee84f81581f4c166&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XONSLAS%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCw%2FCL90aXfNs3gdiVFgZJIaICIvF7gcH%2B2lcbix0tMAiBa5h1PWKwgIX31X9ePgso%2BGJrGk6cQVsd8DA7dXZgGFyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMdV%2F%2B3LT71wEWupbZKtwDIqX4i67f8rC4EBxFk7RBlk%2FaFD2Hk9ERdCpbYF9IvX6%2B5O3lUhVQD0SNnEsv95UY8F6pUoawCpoX%2B5dhI1rwrZieOvC06ULQ2Y7K8GRxFTXVDE0KfGxNxBB6ygdBz1kvQ3igwgogdQzAYRHiEfqhLjhU7QGYhf6u%2BlMBg72cRhDVj63BEjsnU7hgSTHVxhXSu09%2FrMO6PW6ge1h%2F0bTLtU27p9nve3ffcuWGPWQflcHA1YZdFAP3BcKWTTMzoT0anJkF%2FCkRgw6tGgEmy9Ja3fgSFWDMNFkXM5yqptfUi9GsMDICBlzcLJeVj8%2BPCE0BFFNBn%2F3Ad%2Fh4gtngogrTjEmKbzc4TWG0Ksnxy9dNyzZyWE7wrwNdoBkhsiOWYMmyCyxy%2FvTISa2%2BAMN%2FOjhWqzPO%2B8ONEXWVar%2FkYE69gbquDFv10CTIZLAXDXXRuJ%2B5YGfyuMDA%2FNjrrFEOvMjtyETgugkSOIRa2K85QBvwRrbPBIXKa%2BcjXxqg6k3yFnN7ir%2FdWKQ0%2BgZ6LU7UvjsbaryQ2LZiNXZKmYY3FVkoKhup1ftL0xWw6H02KshwlfP%2FWch7TnojfqQPRHe%2FCiygQtpuRyYy9fPbIC%2BtOAWQ696J6ezxy9zyTeXyWt0wqcW7zgY6pgFuYA6TBoth11LMBp5b2Oeu%2FXbWzsoCvIU3yCUzul5dfmUbbjB5hMfdhSVQX8j789OJ5B4cRAwy3Jf5915chXo3EtQM6mEWJx%2FQI1K24as%2BBVbW%2B5ekETJXFlbfXmpIYTSh9BQRqGV87mkOmftxgqIxTyevwjwcnpDxLn6MRNdTjddkP4%2Bkp3NrCjB1ZHQZ2mGZbv4vdEqK7toWPioLil66I1S8e9WG&X-Amz-Signature=2fde44cb5fad0195f421dea5dcf629357b06b0353e7999cbebc19b964730c0a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XONSLAS%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCw%2FCL90aXfNs3gdiVFgZJIaICIvF7gcH%2B2lcbix0tMAiBa5h1PWKwgIX31X9ePgso%2BGJrGk6cQVsd8DA7dXZgGFyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMdV%2F%2B3LT71wEWupbZKtwDIqX4i67f8rC4EBxFk7RBlk%2FaFD2Hk9ERdCpbYF9IvX6%2B5O3lUhVQD0SNnEsv95UY8F6pUoawCpoX%2B5dhI1rwrZieOvC06ULQ2Y7K8GRxFTXVDE0KfGxNxBB6ygdBz1kvQ3igwgogdQzAYRHiEfqhLjhU7QGYhf6u%2BlMBg72cRhDVj63BEjsnU7hgSTHVxhXSu09%2FrMO6PW6ge1h%2F0bTLtU27p9nve3ffcuWGPWQflcHA1YZdFAP3BcKWTTMzoT0anJkF%2FCkRgw6tGgEmy9Ja3fgSFWDMNFkXM5yqptfUi9GsMDICBlzcLJeVj8%2BPCE0BFFNBn%2F3Ad%2Fh4gtngogrTjEmKbzc4TWG0Ksnxy9dNyzZyWE7wrwNdoBkhsiOWYMmyCyxy%2FvTISa2%2BAMN%2FOjhWqzPO%2B8ONEXWVar%2FkYE69gbquDFv10CTIZLAXDXXRuJ%2B5YGfyuMDA%2FNjrrFEOvMjtyETgugkSOIRa2K85QBvwRrbPBIXKa%2BcjXxqg6k3yFnN7ir%2FdWKQ0%2BgZ6LU7UvjsbaryQ2LZiNXZKmYY3FVkoKhup1ftL0xWw6H02KshwlfP%2FWch7TnojfqQPRHe%2FCiygQtpuRyYy9fPbIC%2BtOAWQ696J6ezxy9zyTeXyWt0wqcW7zgY6pgFuYA6TBoth11LMBp5b2Oeu%2FXbWzsoCvIU3yCUzul5dfmUbbjB5hMfdhSVQX8j789OJ5B4cRAwy3Jf5915chXo3EtQM6mEWJx%2FQI1K24as%2BBVbW%2B5ekETJXFlbfXmpIYTSh9BQRqGV87mkOmftxgqIxTyevwjwcnpDxLn6MRNdTjddkP4%2Bkp3NrCjB1ZHQZ2mGZbv4vdEqK7toWPioLil66I1S8e9WG&X-Amz-Signature=56659f674a26467aefc7528b4e0fc1a4b9d05187cba47bda69784e83cc3f09ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```python "18-18","24-25"

class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta

        self.odom_brodcaster = TransformBroadcaster(self)

        self.subscription = self.create_subscription(TwistStamped, 'cmd_vel', self.listener_callback, 10)
    

    def timer_callback(self):
				...

    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'{msg}')
```

Now we just need some way to send drive commands to `/cmd_vel`

This is where we use **`telop_twist_keyboard`**

{{% alert icon=”👾” context="success" %}}

### **New Node** **`telop_twist_keyboard`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XONSLAS%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCw%2FCL90aXfNs3gdiVFgZJIaICIvF7gcH%2B2lcbix0tMAiBa5h1PWKwgIX31X9ePgso%2BGJrGk6cQVsd8DA7dXZgGFyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMdV%2F%2B3LT71wEWupbZKtwDIqX4i67f8rC4EBxFk7RBlk%2FaFD2Hk9ERdCpbYF9IvX6%2B5O3lUhVQD0SNnEsv95UY8F6pUoawCpoX%2B5dhI1rwrZieOvC06ULQ2Y7K8GRxFTXVDE0KfGxNxBB6ygdBz1kvQ3igwgogdQzAYRHiEfqhLjhU7QGYhf6u%2BlMBg72cRhDVj63BEjsnU7hgSTHVxhXSu09%2FrMO6PW6ge1h%2F0bTLtU27p9nve3ffcuWGPWQflcHA1YZdFAP3BcKWTTMzoT0anJkF%2FCkRgw6tGgEmy9Ja3fgSFWDMNFkXM5yqptfUi9GsMDICBlzcLJeVj8%2BPCE0BFFNBn%2F3Ad%2Fh4gtngogrTjEmKbzc4TWG0Ksnxy9dNyzZyWE7wrwNdoBkhsiOWYMmyCyxy%2FvTISa2%2BAMN%2FOjhWqzPO%2B8ONEXWVar%2FkYE69gbquDFv10CTIZLAXDXXRuJ%2B5YGfyuMDA%2FNjrrFEOvMjtyETgugkSOIRa2K85QBvwRrbPBIXKa%2BcjXxqg6k3yFnN7ir%2FdWKQ0%2BgZ6LU7UvjsbaryQ2LZiNXZKmYY3FVkoKhup1ftL0xWw6H02KshwlfP%2FWch7TnojfqQPRHe%2FCiygQtpuRyYy9fPbIC%2BtOAWQ696J6ezxy9zyTeXyWt0wqcW7zgY6pgFuYA6TBoth11LMBp5b2Oeu%2FXbWzsoCvIU3yCUzul5dfmUbbjB5hMfdhSVQX8j789OJ5B4cRAwy3Jf5915chXo3EtQM6mEWJx%2FQI1K24as%2BBVbW%2B5ekETJXFlbfXmpIYTSh9BQRqGV87mkOmftxgqIxTyevwjwcnpDxLn6MRNdTjddkP4%2Bkp3NrCjB1ZHQZ2mGZbv4vdEqK7toWPioLil66I1S8e9WG&X-Amz-Signature=07a8d49eda58b06201540a28c3cb572fb178024ef2e49c8e2f27a42791f8918d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

| **Name**   | **Type**           |
| ---------- | ------------------ |
| `/cmd_vel` | geometry_msg/Twist |

#### Params:

| **Name**  | **Type** |
| --------- | -------- |
| `stamped` | bool     |

#### description:

Lets you drive your robot with your keyboard

publishes geometry_msg/Twist on the `/cmd_vel` topic

{{% /alert %}}

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XONSLAS%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCw%2FCL90aXfNs3gdiVFgZJIaICIvF7gcH%2B2lcbix0tMAiBa5h1PWKwgIX31X9ePgso%2BGJrGk6cQVsd8DA7dXZgGFyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMdV%2F%2B3LT71wEWupbZKtwDIqX4i67f8rC4EBxFk7RBlk%2FaFD2Hk9ERdCpbYF9IvX6%2B5O3lUhVQD0SNnEsv95UY8F6pUoawCpoX%2B5dhI1rwrZieOvC06ULQ2Y7K8GRxFTXVDE0KfGxNxBB6ygdBz1kvQ3igwgogdQzAYRHiEfqhLjhU7QGYhf6u%2BlMBg72cRhDVj63BEjsnU7hgSTHVxhXSu09%2FrMO6PW6ge1h%2F0bTLtU27p9nve3ffcuWGPWQflcHA1YZdFAP3BcKWTTMzoT0anJkF%2FCkRgw6tGgEmy9Ja3fgSFWDMNFkXM5yqptfUi9GsMDICBlzcLJeVj8%2BPCE0BFFNBn%2F3Ad%2Fh4gtngogrTjEmKbzc4TWG0Ksnxy9dNyzZyWE7wrwNdoBkhsiOWYMmyCyxy%2FvTISa2%2BAMN%2FOjhWqzPO%2B8ONEXWVar%2FkYE69gbquDFv10CTIZLAXDXXRuJ%2B5YGfyuMDA%2FNjrrFEOvMjtyETgugkSOIRa2K85QBvwRrbPBIXKa%2BcjXxqg6k3yFnN7ir%2FdWKQ0%2BgZ6LU7UvjsbaryQ2LZiNXZKmYY3FVkoKhup1ftL0xWw6H02KshwlfP%2FWch7TnojfqQPRHe%2FCiygQtpuRyYy9fPbIC%2BtOAWQ696J6ezxy9zyTeXyWt0wqcW7zgY6pgFuYA6TBoth11LMBp5b2Oeu%2FXbWzsoCvIU3yCUzul5dfmUbbjB5hMfdhSVQX8j789OJ5B4cRAwy3Jf5915chXo3EtQM6mEWJx%2FQI1K24as%2BBVbW%2B5ekETJXFlbfXmpIYTSh9BQRqGV87mkOmftxgqIxTyevwjwcnpDxLn6MRNdTjddkP4%2Bkp3NrCjB1ZHQZ2mGZbv4vdEqK7toWPioLil66I1S8e9WG&X-Amz-Signature=bd24671d04fe8f8de63a3203e802b96a5e865ad02367663e3f36472422318edd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XONSLAS%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCw%2FCL90aXfNs3gdiVFgZJIaICIvF7gcH%2B2lcbix0tMAiBa5h1PWKwgIX31X9ePgso%2BGJrGk6cQVsd8DA7dXZgGFyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMdV%2F%2B3LT71wEWupbZKtwDIqX4i67f8rC4EBxFk7RBlk%2FaFD2Hk9ERdCpbYF9IvX6%2B5O3lUhVQD0SNnEsv95UY8F6pUoawCpoX%2B5dhI1rwrZieOvC06ULQ2Y7K8GRxFTXVDE0KfGxNxBB6ygdBz1kvQ3igwgogdQzAYRHiEfqhLjhU7QGYhf6u%2BlMBg72cRhDVj63BEjsnU7hgSTHVxhXSu09%2FrMO6PW6ge1h%2F0bTLtU27p9nve3ffcuWGPWQflcHA1YZdFAP3BcKWTTMzoT0anJkF%2FCkRgw6tGgEmy9Ja3fgSFWDMNFkXM5yqptfUi9GsMDICBlzcLJeVj8%2BPCE0BFFNBn%2F3Ad%2Fh4gtngogrTjEmKbzc4TWG0Ksnxy9dNyzZyWE7wrwNdoBkhsiOWYMmyCyxy%2FvTISa2%2BAMN%2FOjhWqzPO%2B8ONEXWVar%2FkYE69gbquDFv10CTIZLAXDXXRuJ%2B5YGfyuMDA%2FNjrrFEOvMjtyETgugkSOIRa2K85QBvwRrbPBIXKa%2BcjXxqg6k3yFnN7ir%2FdWKQ0%2BgZ6LU7UvjsbaryQ2LZiNXZKmYY3FVkoKhup1ftL0xWw6H02KshwlfP%2FWch7TnojfqQPRHe%2FCiygQtpuRyYy9fPbIC%2BtOAWQ696J6ezxy9zyTeXyWt0wqcW7zgY6pgFuYA6TBoth11LMBp5b2Oeu%2FXbWzsoCvIU3yCUzul5dfmUbbjB5hMfdhSVQX8j789OJ5B4cRAwy3Jf5915chXo3EtQM6mEWJx%2FQI1K24as%2BBVbW%2B5ekETJXFlbfXmpIYTSh9BQRqGV87mkOmftxgqIxTyevwjwcnpDxLn6MRNdTjddkP4%2Bkp3NrCjB1ZHQZ2mGZbv4vdEqK7toWPioLil66I1S8e9WG&X-Amz-Signature=5b16d3a13660c631611acfade326beed4fdfff021bbd625fc875fd5efc0fcfc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XONSLAS%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCw%2FCL90aXfNs3gdiVFgZJIaICIvF7gcH%2B2lcbix0tMAiBa5h1PWKwgIX31X9ePgso%2BGJrGk6cQVsd8DA7dXZgGFyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMdV%2F%2B3LT71wEWupbZKtwDIqX4i67f8rC4EBxFk7RBlk%2FaFD2Hk9ERdCpbYF9IvX6%2B5O3lUhVQD0SNnEsv95UY8F6pUoawCpoX%2B5dhI1rwrZieOvC06ULQ2Y7K8GRxFTXVDE0KfGxNxBB6ygdBz1kvQ3igwgogdQzAYRHiEfqhLjhU7QGYhf6u%2BlMBg72cRhDVj63BEjsnU7hgSTHVxhXSu09%2FrMO6PW6ge1h%2F0bTLtU27p9nve3ffcuWGPWQflcHA1YZdFAP3BcKWTTMzoT0anJkF%2FCkRgw6tGgEmy9Ja3fgSFWDMNFkXM5yqptfUi9GsMDICBlzcLJeVj8%2BPCE0BFFNBn%2F3Ad%2Fh4gtngogrTjEmKbzc4TWG0Ksnxy9dNyzZyWE7wrwNdoBkhsiOWYMmyCyxy%2FvTISa2%2BAMN%2FOjhWqzPO%2B8ONEXWVar%2FkYE69gbquDFv10CTIZLAXDXXRuJ%2B5YGfyuMDA%2FNjrrFEOvMjtyETgugkSOIRa2K85QBvwRrbPBIXKa%2BcjXxqg6k3yFnN7ir%2FdWKQ0%2BgZ6LU7UvjsbaryQ2LZiNXZKmYY3FVkoKhup1ftL0xWw6H02KshwlfP%2FWch7TnojfqQPRHe%2FCiygQtpuRyYy9fPbIC%2BtOAWQ696J6ezxy9zyTeXyWt0wqcW7zgY6pgFuYA6TBoth11LMBp5b2Oeu%2FXbWzsoCvIU3yCUzul5dfmUbbjB5hMfdhSVQX8j789OJ5B4cRAwy3Jf5915chXo3EtQM6mEWJx%2FQI1K24as%2BBVbW%2B5ekETJXFlbfXmpIYTSh9BQRqGV87mkOmftxgqIxTyevwjwcnpDxLn6MRNdTjddkP4%2Bkp3NrCjB1ZHQZ2mGZbv4vdEqK7toWPioLil66I1S8e9WG&X-Amz-Signature=5602d29aa9a4ba7b9c884b7804ad69dd44dc725930f1611bc1c736869bf5b308&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

formatting the print better we can see `TwistStamped` is made of 3 parts

```bash
geometry_msgs.msg.TwistStamped(
	header=std_msgs.msg.Header(stamp=builtin_interfaces.msg.Time(sec=1752445192, nanosec=279741976), frame_id=''),
	twist=geometry_msgs.msg.Twist(
		linear=geometry_msgs.msg.Vector3(x=0.5, y=0.0, z=0.0),
		angular=geometry_msgs.msg.Vector3(x=0.0, y=0.0, z=0.0)
	)
)
```

**TwistStamped:**

- header
- **Twist:**
	- linear
	- angular

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XONSLAS%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCw%2FCL90aXfNs3gdiVFgZJIaICIvF7gcH%2B2lcbix0tMAiBa5h1PWKwgIX31X9ePgso%2BGJrGk6cQVsd8DA7dXZgGFyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMdV%2F%2B3LT71wEWupbZKtwDIqX4i67f8rC4EBxFk7RBlk%2FaFD2Hk9ERdCpbYF9IvX6%2B5O3lUhVQD0SNnEsv95UY8F6pUoawCpoX%2B5dhI1rwrZieOvC06ULQ2Y7K8GRxFTXVDE0KfGxNxBB6ygdBz1kvQ3igwgogdQzAYRHiEfqhLjhU7QGYhf6u%2BlMBg72cRhDVj63BEjsnU7hgSTHVxhXSu09%2FrMO6PW6ge1h%2F0bTLtU27p9nve3ffcuWGPWQflcHA1YZdFAP3BcKWTTMzoT0anJkF%2FCkRgw6tGgEmy9Ja3fgSFWDMNFkXM5yqptfUi9GsMDICBlzcLJeVj8%2BPCE0BFFNBn%2F3Ad%2Fh4gtngogrTjEmKbzc4TWG0Ksnxy9dNyzZyWE7wrwNdoBkhsiOWYMmyCyxy%2FvTISa2%2BAMN%2FOjhWqzPO%2B8ONEXWVar%2FkYE69gbquDFv10CTIZLAXDXXRuJ%2B5YGfyuMDA%2FNjrrFEOvMjtyETgugkSOIRa2K85QBvwRrbPBIXKa%2BcjXxqg6k3yFnN7ir%2FdWKQ0%2BgZ6LU7UvjsbaryQ2LZiNXZKmYY3FVkoKhup1ftL0xWw6H02KshwlfP%2FWch7TnojfqQPRHe%2FCiygQtpuRyYy9fPbIC%2BtOAWQ696J6ezxy9zyTeXyWt0wqcW7zgY6pgFuYA6TBoth11LMBp5b2Oeu%2FXbWzsoCvIU3yCUzul5dfmUbbjB5hMfdhSVQX8j789OJ5B4cRAwy3Jf5915chXo3EtQM6mEWJx%2FQI1K24as%2BBVbW%2B5ekETJXFlbfXmpIYTSh9BQRqGV87mkOmftxgqIxTyevwjwcnpDxLn6MRNdTjddkP4%2Bkp3NrCjB1ZHQZ2mGZbv4vdEqK7toWPioLil66I1S8e9WG&X-Amz-Signature=6fe0f0a449326d2d50622ebaff57ac1aad0db4980dfba645c8ee4b7df5458f48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> [`TwistStamped`](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)[ official docs](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)

In our code we can just use `msg.twist.linear` or `msg.twist.angular` to extract what we need:

```python
    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'from /cmd_vel angular: {msg.twist.angular} linear: {msg.twist.linear}')
        # send msg to robot ...
```

from there the message can be sent to the robot

> Note if you are in Robomasters you will most likely use `RM_Uart` to send to the type-c

# Adding odom topic

The final topic our node needs to publish is the Odometry.

We did just publish that information into `/tf` with the transform broadcaster.

However, Nav2 still needs it on a separate topic called `/odom` with type `nav_msgs/Odometry`

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XONSLAS%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCw%2FCL90aXfNs3gdiVFgZJIaICIvF7gcH%2B2lcbix0tMAiBa5h1PWKwgIX31X9ePgso%2BGJrGk6cQVsd8DA7dXZgGFyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMdV%2F%2B3LT71wEWupbZKtwDIqX4i67f8rC4EBxFk7RBlk%2FaFD2Hk9ERdCpbYF9IvX6%2B5O3lUhVQD0SNnEsv95UY8F6pUoawCpoX%2B5dhI1rwrZieOvC06ULQ2Y7K8GRxFTXVDE0KfGxNxBB6ygdBz1kvQ3igwgogdQzAYRHiEfqhLjhU7QGYhf6u%2BlMBg72cRhDVj63BEjsnU7hgSTHVxhXSu09%2FrMO6PW6ge1h%2F0bTLtU27p9nve3ffcuWGPWQflcHA1YZdFAP3BcKWTTMzoT0anJkF%2FCkRgw6tGgEmy9Ja3fgSFWDMNFkXM5yqptfUi9GsMDICBlzcLJeVj8%2BPCE0BFFNBn%2F3Ad%2Fh4gtngogrTjEmKbzc4TWG0Ksnxy9dNyzZyWE7wrwNdoBkhsiOWYMmyCyxy%2FvTISa2%2BAMN%2FOjhWqzPO%2B8ONEXWVar%2FkYE69gbquDFv10CTIZLAXDXXRuJ%2B5YGfyuMDA%2FNjrrFEOvMjtyETgugkSOIRa2K85QBvwRrbPBIXKa%2BcjXxqg6k3yFnN7ir%2FdWKQ0%2BgZ6LU7UvjsbaryQ2LZiNXZKmYY3FVkoKhup1ftL0xWw6H02KshwlfP%2FWch7TnojfqQPRHe%2FCiygQtpuRyYy9fPbIC%2BtOAWQ696J6ezxy9zyTeXyWt0wqcW7zgY6pgFuYA6TBoth11LMBp5b2Oeu%2FXbWzsoCvIU3yCUzul5dfmUbbjB5hMfdhSVQX8j789OJ5B4cRAwy3Jf5915chXo3EtQM6mEWJx%2FQI1K24as%2BBVbW%2B5ekETJXFlbfXmpIYTSh9BQRqGV87mkOmftxgqIxTyevwjwcnpDxLn6MRNdTjddkP4%2Bkp3NrCjB1ZHQZ2mGZbv4vdEqK7toWPioLil66I1S8e9WG&X-Amz-Signature=352a6f1e18a717717860fabf9aac1863ca7a955c74b0a182fc8c8745eb046811&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Again we just need to make a publisher and fill in the `nav_msgs/Odometry` message format:

```yaml
header:
  stamp:
    sec: 1753330401
    nanosec: 859879019
  frame_id: odom
child_frame_id: base_link
pose:
  pose:
    position:
      x: 0.42549007816038587
      y: 0.20845842868953549
      z: 0.0
    orientation:
      x: 0.0
      y: 0.0
      z: 0.43871361044460205
      w: 0.8986269348348412
  covariance:
  - 0.0
    ...
twist:
  twist:
    linear:
      x: 0.0
      y: 0.0
      z: 0.0
    angular:
      x: 0.0
      y: 0.0
      z: 0.0
  covariance:
  - 0.0
    ...
```

```python "10-10","16-27"
       
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        
        ...

        self.subscription = self.create_subscription(TwistStamped, 'cmd_vel', self.listener_callback, 10) 

        self.odom_publisher = self.create_publisher(Odometry, '/odom', 10)


    def timer_callback(self):
        ...
        
        odom_msg = Odometry()
        odom_msg.header.stamp = current_time
        odom_msg.header.frame_id = 'odom'
        odom_msg.child_frame_id = 'base_link'
        odom_msg.pose.pose.position.x = float(self.x)
        odom_msg.pose.pose.position.y = float(self.y)
        odom_msg.pose.pose.position.z = 0.0
        odom_msg.twist.twist.linear.x = 0.0#float(vx)
        odom_msg.twist.twist.linear.y = 0.0#float(vy)
        odom_msg.twist.twist.angular.z = 0.0
        odom_msg.pose.pose.orientation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_publisher.publish(odom_msg)
```

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
```python
import rclpy
from rclpy.node import Node

from sensor_msgs.msg import JointState
from geometry_msgs.msg import *
from tf2_ros.transform_broadcaster import TransformBroadcaster
from tf_transformations import quaternion_from_euler
from math import cos, sin


def calculate_position(new_right_wheel_th, right_angle, new_left_wheel_th, left_angle, th):
    """retruns the robots x,y offset given wheel angles

    Args:
        new_right_wheel_th (float): new mesured right wheel angle
        right_angle (float): previous right wheel angle
        new_float_wheel_th (float): new mesured left wheel angle
        left_angle (float): previous left wheel angle
        th (float): robot chassis rotation

    Returns:
        (float, float): x,y offset
    """

    WHEEL_RADIUS = 0.10
    WHEEL_SEPARATION = 0.31+2*0.025 # body + wheel gap (there are 2 wheels)

    # convert rotation to linear distance
    dr = (new_right_wheel_th - right_angle)*WHEEL_RADIUS
    dl = (new_left_wheel_th - left_angle)*WHEEL_RADIUS

    # calcuate movement
    offset = (dr + dl) / 2
    delta_th = (dr - dl) / WHEEL_SEPARATION

    # extract componates
    relative_dx = offset*cos(delta_th)
    relative_dy = offset*sin(delta_th)

    #rotation matrix
    delta_x = relative_dx*cos(th) - relative_dy*sin(th)
    delta_y = relative_dx*sin(th) + relative_dy*cos(th)
    return (delta_x,delta_y,delta_th)

class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback) # calls timer_callback() every 0.05 seconds

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta

        self.odom_brodcaster = TransformBroadcaster(self) # broadcasts the odom tf frame

        # call listener_callback() when /cmd_vel topic recives a msg
        self.subscription = self.create_subscription(TwistStamped, 'cmd_vel', self.listener_callback, 10) 
    

    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()
        new_left_wheel_th = self.left_wheel_th+0.01 # reading motor position goes here
        new_right_wheel_th = self.right_wheel_th+0.02 # reading motor position goes here
        
        # ============ updating URDF wheel joints ====================
        msg = JointState()                                  # create msg object
        msg.header.stamp = current_time                     # fill it with data
        msg.header.frame_id = ''
        msg.name = ["drivewhl_l_joint","drivewhl_r_joint"]
        msg.position = [new_left_wheel_th, new_right_wheel_th]
        msg.velocity = []
        msg.effort = []
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info(f'Publishing position {new_left_wheel_th}, {new_right_wheel_th}')       # print msg

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calcuate_position(new_right_wheel_th, self.right_wheel_th ,new_left_wheel_th, self.left_wheel_th, self.th)

        # update position
        self.x += delta_x
        self.y += delta_y
        self.th += delta_th

        # create and publish transform message
        odom_trans = TransformStamped()
        odom_trans.header.stamp = current_time
        odom_trans.header.frame_id = "odom"
        odom_trans.child_frame_id = "base_link"
        odom_trans.transform.translation.x = self.x
        odom_trans.transform.translation.y = self.y
        odom_trans.transform.translation.z = 0.0
        q = quaternion_from_euler(0, 0, self.th) # converts theta to quaternions
        odom_trans.transform.rotation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_brodcaster.sendTransform(odom_trans) # publish transform

        # update left and right wheel positions
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th


    # gets called when /cmd_vel topic recives a msg
    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'from /cmd_vel angular: {msg.twist.angular} linear: {msg.twist.linear}')
        # self.get_logger().info(f'{msg}')


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

</details>



For those who are curious ROS does provide a Localization node which does most of the work we did above:

- [integrating localization_node](https://docs.nav2.org/setup_guides/odom/setup_robot_localization.html)
- [official localization node guide](https://docs.ros.org/en/melodic/api/robot_localization/html/index.html)

The `localization_node` is useful for doing sensor fusion when you also have an IMU or GPS to add to the localization.
