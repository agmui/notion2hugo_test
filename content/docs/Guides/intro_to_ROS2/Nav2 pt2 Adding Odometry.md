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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O6P4NNS%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICKrBkcyxOqQFOBKRvgO%2F40HzuNxXJAxe9CVPohBBJUZAiEAy108oSn3BDxTv6aqX%2FABNvd3XWe0bzl7BxzaGjW1XTMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYsYMQOqZ9RGstkRSrcAyce7Fvd6wTSrRIT3O8ItTDmjxBERFHJIbV6ebd6y5c9xHRow13BvlkVR6qexLavF%2BLaStuzAYHOj%2FaPlGRzaTiaN4Q81fXb1cmuxrIV6Mfuf7TV7qDV1gDhb9I5eThA%2F%2BJe1PlkwlFP%2FHMjZijJixwm7VZhbLrnTaUc%2B%2BSA7Lv77GwLthszIjNujDlbZmt50whXWDdXde9mmZ%2FS6ZEk43REfOC%2BmCQw%2BUDpmTduhqQsXitaEw%2BQyHfBEGjELLQFVgwWLqqmIAOFEDyDsCgG0BZEKh2iZwsU1rgVJDQ3F7%2BR%2BYyM%2Bo2qoHHm8GGOUDKanwMM1dVVXZJL2cMv%2FtBxUVpva%2FLXcbUihuZtXaH974tU3vp8tieSevvsXFRqOpTA%2F1izLjBz0TfbPcJLOcVJjGjvYTDeqxfoSKSI9Zy6POcyaAX%2B9PQ5jVvp2KXoYmtXi%2FGxRoCuYOKnZsh5wKAH%2FR3Juwhva8FDWaHTluxIeyDLXQNMg8fcR840zA5XvJuGQ5dszr3MZwe%2FR9VEmmg5zrV4fQx4pBXDG9zOJBycPETQMWiYsALKHgBP2DtiOZHf18MeGxfm5iPEvlRF7vzE7QKMgnDZ%2FH4cNb5rVxPpYjwptQ78y%2BndlsWOz2KkMPTfqtMGOqUB0pWOrSh53BQuyaDNk%2FQh1Z5yAjyLoMrv6cWP3IfEENV0K5JVkBltKvmERrTw5LVdVpMiRw03HqDcaOFFxyNuN6ThCEBWekPmowwoQ2uUHKF7UR%2F2FO8ybv7bbXmL74s0VQIbex1bEzSqetwRbHIzBs5QX%2F6T6m%2BRmNXtSAfG821%2FbBifym9TCQm9NTW29yNjF90o%2FeJHfIOIIycblKWyQBW8o%2Foq&X-Amz-Signature=fbd7fe3fb4c81a6757a99ffe6ededa368b0b4443e96c6842e7fb2adc9bf0fd63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O6P4NNS%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICKrBkcyxOqQFOBKRvgO%2F40HzuNxXJAxe9CVPohBBJUZAiEAy108oSn3BDxTv6aqX%2FABNvd3XWe0bzl7BxzaGjW1XTMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYsYMQOqZ9RGstkRSrcAyce7Fvd6wTSrRIT3O8ItTDmjxBERFHJIbV6ebd6y5c9xHRow13BvlkVR6qexLavF%2BLaStuzAYHOj%2FaPlGRzaTiaN4Q81fXb1cmuxrIV6Mfuf7TV7qDV1gDhb9I5eThA%2F%2BJe1PlkwlFP%2FHMjZijJixwm7VZhbLrnTaUc%2B%2BSA7Lv77GwLthszIjNujDlbZmt50whXWDdXde9mmZ%2FS6ZEk43REfOC%2BmCQw%2BUDpmTduhqQsXitaEw%2BQyHfBEGjELLQFVgwWLqqmIAOFEDyDsCgG0BZEKh2iZwsU1rgVJDQ3F7%2BR%2BYyM%2Bo2qoHHm8GGOUDKanwMM1dVVXZJL2cMv%2FtBxUVpva%2FLXcbUihuZtXaH974tU3vp8tieSevvsXFRqOpTA%2F1izLjBz0TfbPcJLOcVJjGjvYTDeqxfoSKSI9Zy6POcyaAX%2B9PQ5jVvp2KXoYmtXi%2FGxRoCuYOKnZsh5wKAH%2FR3Juwhva8FDWaHTluxIeyDLXQNMg8fcR840zA5XvJuGQ5dszr3MZwe%2FR9VEmmg5zrV4fQx4pBXDG9zOJBycPETQMWiYsALKHgBP2DtiOZHf18MeGxfm5iPEvlRF7vzE7QKMgnDZ%2FH4cNb5rVxPpYjwptQ78y%2BndlsWOz2KkMPTfqtMGOqUB0pWOrSh53BQuyaDNk%2FQh1Z5yAjyLoMrv6cWP3IfEENV0K5JVkBltKvmERrTw5LVdVpMiRw03HqDcaOFFxyNuN6ThCEBWekPmowwoQ2uUHKF7UR%2F2FO8ybv7bbXmL74s0VQIbex1bEzSqetwRbHIzBs5QX%2F6T6m%2BRmNXtSAfG821%2FbBifym9TCQm9NTW29yNjF90o%2FeJHfIOIIycblKWyQBW8o%2Foq&X-Amz-Signature=2b56f71e50eeb42ccbd0e1eb37ae009fe5c6882f160a58ab76e684283a47f0d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O6P4NNS%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICKrBkcyxOqQFOBKRvgO%2F40HzuNxXJAxe9CVPohBBJUZAiEAy108oSn3BDxTv6aqX%2FABNvd3XWe0bzl7BxzaGjW1XTMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYsYMQOqZ9RGstkRSrcAyce7Fvd6wTSrRIT3O8ItTDmjxBERFHJIbV6ebd6y5c9xHRow13BvlkVR6qexLavF%2BLaStuzAYHOj%2FaPlGRzaTiaN4Q81fXb1cmuxrIV6Mfuf7TV7qDV1gDhb9I5eThA%2F%2BJe1PlkwlFP%2FHMjZijJixwm7VZhbLrnTaUc%2B%2BSA7Lv77GwLthszIjNujDlbZmt50whXWDdXde9mmZ%2FS6ZEk43REfOC%2BmCQw%2BUDpmTduhqQsXitaEw%2BQyHfBEGjELLQFVgwWLqqmIAOFEDyDsCgG0BZEKh2iZwsU1rgVJDQ3F7%2BR%2BYyM%2Bo2qoHHm8GGOUDKanwMM1dVVXZJL2cMv%2FtBxUVpva%2FLXcbUihuZtXaH974tU3vp8tieSevvsXFRqOpTA%2F1izLjBz0TfbPcJLOcVJjGjvYTDeqxfoSKSI9Zy6POcyaAX%2B9PQ5jVvp2KXoYmtXi%2FGxRoCuYOKnZsh5wKAH%2FR3Juwhva8FDWaHTluxIeyDLXQNMg8fcR840zA5XvJuGQ5dszr3MZwe%2FR9VEmmg5zrV4fQx4pBXDG9zOJBycPETQMWiYsALKHgBP2DtiOZHf18MeGxfm5iPEvlRF7vzE7QKMgnDZ%2FH4cNb5rVxPpYjwptQ78y%2BndlsWOz2KkMPTfqtMGOqUB0pWOrSh53BQuyaDNk%2FQh1Z5yAjyLoMrv6cWP3IfEENV0K5JVkBltKvmERrTw5LVdVpMiRw03HqDcaOFFxyNuN6ThCEBWekPmowwoQ2uUHKF7UR%2F2FO8ybv7bbXmL74s0VQIbex1bEzSqetwRbHIzBs5QX%2F6T6m%2BRmNXtSAfG821%2FbBifym9TCQm9NTW29yNjF90o%2FeJHfIOIIycblKWyQBW8o%2Foq&X-Amz-Signature=1a838b1bef231c0750bb66bf0fe4dd342f119ce6acdb9de5785d89811d60d139&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O6P4NNS%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICKrBkcyxOqQFOBKRvgO%2F40HzuNxXJAxe9CVPohBBJUZAiEAy108oSn3BDxTv6aqX%2FABNvd3XWe0bzl7BxzaGjW1XTMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYsYMQOqZ9RGstkRSrcAyce7Fvd6wTSrRIT3O8ItTDmjxBERFHJIbV6ebd6y5c9xHRow13BvlkVR6qexLavF%2BLaStuzAYHOj%2FaPlGRzaTiaN4Q81fXb1cmuxrIV6Mfuf7TV7qDV1gDhb9I5eThA%2F%2BJe1PlkwlFP%2FHMjZijJixwm7VZhbLrnTaUc%2B%2BSA7Lv77GwLthszIjNujDlbZmt50whXWDdXde9mmZ%2FS6ZEk43REfOC%2BmCQw%2BUDpmTduhqQsXitaEw%2BQyHfBEGjELLQFVgwWLqqmIAOFEDyDsCgG0BZEKh2iZwsU1rgVJDQ3F7%2BR%2BYyM%2Bo2qoHHm8GGOUDKanwMM1dVVXZJL2cMv%2FtBxUVpva%2FLXcbUihuZtXaH974tU3vp8tieSevvsXFRqOpTA%2F1izLjBz0TfbPcJLOcVJjGjvYTDeqxfoSKSI9Zy6POcyaAX%2B9PQ5jVvp2KXoYmtXi%2FGxRoCuYOKnZsh5wKAH%2FR3Juwhva8FDWaHTluxIeyDLXQNMg8fcR840zA5XvJuGQ5dszr3MZwe%2FR9VEmmg5zrV4fQx4pBXDG9zOJBycPETQMWiYsALKHgBP2DtiOZHf18MeGxfm5iPEvlRF7vzE7QKMgnDZ%2FH4cNb5rVxPpYjwptQ78y%2BndlsWOz2KkMPTfqtMGOqUB0pWOrSh53BQuyaDNk%2FQh1Z5yAjyLoMrv6cWP3IfEENV0K5JVkBltKvmERrTw5LVdVpMiRw03HqDcaOFFxyNuN6ThCEBWekPmowwoQ2uUHKF7UR%2F2FO8ybv7bbXmL74s0VQIbex1bEzSqetwRbHIzBs5QX%2F6T6m%2BRmNXtSAfG821%2FbBifym9TCQm9NTW29yNjF90o%2FeJHfIOIIycblKWyQBW8o%2Foq&X-Amz-Signature=2b66596910c49200d07f841ee2759e7a3b52f5029defff57df9b0daf7d4f0382&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O6P4NNS%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICKrBkcyxOqQFOBKRvgO%2F40HzuNxXJAxe9CVPohBBJUZAiEAy108oSn3BDxTv6aqX%2FABNvd3XWe0bzl7BxzaGjW1XTMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYsYMQOqZ9RGstkRSrcAyce7Fvd6wTSrRIT3O8ItTDmjxBERFHJIbV6ebd6y5c9xHRow13BvlkVR6qexLavF%2BLaStuzAYHOj%2FaPlGRzaTiaN4Q81fXb1cmuxrIV6Mfuf7TV7qDV1gDhb9I5eThA%2F%2BJe1PlkwlFP%2FHMjZijJixwm7VZhbLrnTaUc%2B%2BSA7Lv77GwLthszIjNujDlbZmt50whXWDdXde9mmZ%2FS6ZEk43REfOC%2BmCQw%2BUDpmTduhqQsXitaEw%2BQyHfBEGjELLQFVgwWLqqmIAOFEDyDsCgG0BZEKh2iZwsU1rgVJDQ3F7%2BR%2BYyM%2Bo2qoHHm8GGOUDKanwMM1dVVXZJL2cMv%2FtBxUVpva%2FLXcbUihuZtXaH974tU3vp8tieSevvsXFRqOpTA%2F1izLjBz0TfbPcJLOcVJjGjvYTDeqxfoSKSI9Zy6POcyaAX%2B9PQ5jVvp2KXoYmtXi%2FGxRoCuYOKnZsh5wKAH%2FR3Juwhva8FDWaHTluxIeyDLXQNMg8fcR840zA5XvJuGQ5dszr3MZwe%2FR9VEmmg5zrV4fQx4pBXDG9zOJBycPETQMWiYsALKHgBP2DtiOZHf18MeGxfm5iPEvlRF7vzE7QKMgnDZ%2FH4cNb5rVxPpYjwptQ78y%2BndlsWOz2KkMPTfqtMGOqUB0pWOrSh53BQuyaDNk%2FQh1Z5yAjyLoMrv6cWP3IfEENV0K5JVkBltKvmERrTw5LVdVpMiRw03HqDcaOFFxyNuN6ThCEBWekPmowwoQ2uUHKF7UR%2F2FO8ybv7bbXmL74s0VQIbex1bEzSqetwRbHIzBs5QX%2F6T6m%2BRmNXtSAfG821%2FbBifym9TCQm9NTW29yNjF90o%2FeJHfIOIIycblKWyQBW8o%2Foq&X-Amz-Signature=f4b39a0a5251e9f6314e0323876290fc27feac201f27679a409afacb81fd83da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O6P4NNS%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICKrBkcyxOqQFOBKRvgO%2F40HzuNxXJAxe9CVPohBBJUZAiEAy108oSn3BDxTv6aqX%2FABNvd3XWe0bzl7BxzaGjW1XTMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYsYMQOqZ9RGstkRSrcAyce7Fvd6wTSrRIT3O8ItTDmjxBERFHJIbV6ebd6y5c9xHRow13BvlkVR6qexLavF%2BLaStuzAYHOj%2FaPlGRzaTiaN4Q81fXb1cmuxrIV6Mfuf7TV7qDV1gDhb9I5eThA%2F%2BJe1PlkwlFP%2FHMjZijJixwm7VZhbLrnTaUc%2B%2BSA7Lv77GwLthszIjNujDlbZmt50whXWDdXde9mmZ%2FS6ZEk43REfOC%2BmCQw%2BUDpmTduhqQsXitaEw%2BQyHfBEGjELLQFVgwWLqqmIAOFEDyDsCgG0BZEKh2iZwsU1rgVJDQ3F7%2BR%2BYyM%2Bo2qoHHm8GGOUDKanwMM1dVVXZJL2cMv%2FtBxUVpva%2FLXcbUihuZtXaH974tU3vp8tieSevvsXFRqOpTA%2F1izLjBz0TfbPcJLOcVJjGjvYTDeqxfoSKSI9Zy6POcyaAX%2B9PQ5jVvp2KXoYmtXi%2FGxRoCuYOKnZsh5wKAH%2FR3Juwhva8FDWaHTluxIeyDLXQNMg8fcR840zA5XvJuGQ5dszr3MZwe%2FR9VEmmg5zrV4fQx4pBXDG9zOJBycPETQMWiYsALKHgBP2DtiOZHf18MeGxfm5iPEvlRF7vzE7QKMgnDZ%2FH4cNb5rVxPpYjwptQ78y%2BndlsWOz2KkMPTfqtMGOqUB0pWOrSh53BQuyaDNk%2FQh1Z5yAjyLoMrv6cWP3IfEENV0K5JVkBltKvmERrTw5LVdVpMiRw03HqDcaOFFxyNuN6ThCEBWekPmowwoQ2uUHKF7UR%2F2FO8ybv7bbXmL74s0VQIbex1bEzSqetwRbHIzBs5QX%2F6T6m%2BRmNXtSAfG821%2FbBifym9TCQm9NTW29yNjF90o%2FeJHfIOIIycblKWyQBW8o%2Foq&X-Amz-Signature=8eb07f6f2fdca1864a6236714ce62422e63d9bc1989e252fd79dc6f11ea4fc9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O6P4NNS%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICKrBkcyxOqQFOBKRvgO%2F40HzuNxXJAxe9CVPohBBJUZAiEAy108oSn3BDxTv6aqX%2FABNvd3XWe0bzl7BxzaGjW1XTMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYsYMQOqZ9RGstkRSrcAyce7Fvd6wTSrRIT3O8ItTDmjxBERFHJIbV6ebd6y5c9xHRow13BvlkVR6qexLavF%2BLaStuzAYHOj%2FaPlGRzaTiaN4Q81fXb1cmuxrIV6Mfuf7TV7qDV1gDhb9I5eThA%2F%2BJe1PlkwlFP%2FHMjZijJixwm7VZhbLrnTaUc%2B%2BSA7Lv77GwLthszIjNujDlbZmt50whXWDdXde9mmZ%2FS6ZEk43REfOC%2BmCQw%2BUDpmTduhqQsXitaEw%2BQyHfBEGjELLQFVgwWLqqmIAOFEDyDsCgG0BZEKh2iZwsU1rgVJDQ3F7%2BR%2BYyM%2Bo2qoHHm8GGOUDKanwMM1dVVXZJL2cMv%2FtBxUVpva%2FLXcbUihuZtXaH974tU3vp8tieSevvsXFRqOpTA%2F1izLjBz0TfbPcJLOcVJjGjvYTDeqxfoSKSI9Zy6POcyaAX%2B9PQ5jVvp2KXoYmtXi%2FGxRoCuYOKnZsh5wKAH%2FR3Juwhva8FDWaHTluxIeyDLXQNMg8fcR840zA5XvJuGQ5dszr3MZwe%2FR9VEmmg5zrV4fQx4pBXDG9zOJBycPETQMWiYsALKHgBP2DtiOZHf18MeGxfm5iPEvlRF7vzE7QKMgnDZ%2FH4cNb5rVxPpYjwptQ78y%2BndlsWOz2KkMPTfqtMGOqUB0pWOrSh53BQuyaDNk%2FQh1Z5yAjyLoMrv6cWP3IfEENV0K5JVkBltKvmERrTw5LVdVpMiRw03HqDcaOFFxyNuN6ThCEBWekPmowwoQ2uUHKF7UR%2F2FO8ybv7bbXmL74s0VQIbex1bEzSqetwRbHIzBs5QX%2F6T6m%2BRmNXtSAfG821%2FbBifym9TCQm9NTW29yNjF90o%2FeJHfIOIIycblKWyQBW8o%2Foq&X-Amz-Signature=31d93bd9cd6a511f790eb91263bce579957c6a43a511b98f9ef345e178193470&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O6P4NNS%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICKrBkcyxOqQFOBKRvgO%2F40HzuNxXJAxe9CVPohBBJUZAiEAy108oSn3BDxTv6aqX%2FABNvd3XWe0bzl7BxzaGjW1XTMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYsYMQOqZ9RGstkRSrcAyce7Fvd6wTSrRIT3O8ItTDmjxBERFHJIbV6ebd6y5c9xHRow13BvlkVR6qexLavF%2BLaStuzAYHOj%2FaPlGRzaTiaN4Q81fXb1cmuxrIV6Mfuf7TV7qDV1gDhb9I5eThA%2F%2BJe1PlkwlFP%2FHMjZijJixwm7VZhbLrnTaUc%2B%2BSA7Lv77GwLthszIjNujDlbZmt50whXWDdXde9mmZ%2FS6ZEk43REfOC%2BmCQw%2BUDpmTduhqQsXitaEw%2BQyHfBEGjELLQFVgwWLqqmIAOFEDyDsCgG0BZEKh2iZwsU1rgVJDQ3F7%2BR%2BYyM%2Bo2qoHHm8GGOUDKanwMM1dVVXZJL2cMv%2FtBxUVpva%2FLXcbUihuZtXaH974tU3vp8tieSevvsXFRqOpTA%2F1izLjBz0TfbPcJLOcVJjGjvYTDeqxfoSKSI9Zy6POcyaAX%2B9PQ5jVvp2KXoYmtXi%2FGxRoCuYOKnZsh5wKAH%2FR3Juwhva8FDWaHTluxIeyDLXQNMg8fcR840zA5XvJuGQ5dszr3MZwe%2FR9VEmmg5zrV4fQx4pBXDG9zOJBycPETQMWiYsALKHgBP2DtiOZHf18MeGxfm5iPEvlRF7vzE7QKMgnDZ%2FH4cNb5rVxPpYjwptQ78y%2BndlsWOz2KkMPTfqtMGOqUB0pWOrSh53BQuyaDNk%2FQh1Z5yAjyLoMrv6cWP3IfEENV0K5JVkBltKvmERrTw5LVdVpMiRw03HqDcaOFFxyNuN6ThCEBWekPmowwoQ2uUHKF7UR%2F2FO8ybv7bbXmL74s0VQIbex1bEzSqetwRbHIzBs5QX%2F6T6m%2BRmNXtSAfG821%2FbBifym9TCQm9NTW29yNjF90o%2FeJHfIOIIycblKWyQBW8o%2Foq&X-Amz-Signature=38e444a8f368a46246ceb6aa157b6530446ed95f9c604154f5b5687c48a226c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O6P4NNS%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICKrBkcyxOqQFOBKRvgO%2F40HzuNxXJAxe9CVPohBBJUZAiEAy108oSn3BDxTv6aqX%2FABNvd3XWe0bzl7BxzaGjW1XTMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYsYMQOqZ9RGstkRSrcAyce7Fvd6wTSrRIT3O8ItTDmjxBERFHJIbV6ebd6y5c9xHRow13BvlkVR6qexLavF%2BLaStuzAYHOj%2FaPlGRzaTiaN4Q81fXb1cmuxrIV6Mfuf7TV7qDV1gDhb9I5eThA%2F%2BJe1PlkwlFP%2FHMjZijJixwm7VZhbLrnTaUc%2B%2BSA7Lv77GwLthszIjNujDlbZmt50whXWDdXde9mmZ%2FS6ZEk43REfOC%2BmCQw%2BUDpmTduhqQsXitaEw%2BQyHfBEGjELLQFVgwWLqqmIAOFEDyDsCgG0BZEKh2iZwsU1rgVJDQ3F7%2BR%2BYyM%2Bo2qoHHm8GGOUDKanwMM1dVVXZJL2cMv%2FtBxUVpva%2FLXcbUihuZtXaH974tU3vp8tieSevvsXFRqOpTA%2F1izLjBz0TfbPcJLOcVJjGjvYTDeqxfoSKSI9Zy6POcyaAX%2B9PQ5jVvp2KXoYmtXi%2FGxRoCuYOKnZsh5wKAH%2FR3Juwhva8FDWaHTluxIeyDLXQNMg8fcR840zA5XvJuGQ5dszr3MZwe%2FR9VEmmg5zrV4fQx4pBXDG9zOJBycPETQMWiYsALKHgBP2DtiOZHf18MeGxfm5iPEvlRF7vzE7QKMgnDZ%2FH4cNb5rVxPpYjwptQ78y%2BndlsWOz2KkMPTfqtMGOqUB0pWOrSh53BQuyaDNk%2FQh1Z5yAjyLoMrv6cWP3IfEENV0K5JVkBltKvmERrTw5LVdVpMiRw03HqDcaOFFxyNuN6ThCEBWekPmowwoQ2uUHKF7UR%2F2FO8ybv7bbXmL74s0VQIbex1bEzSqetwRbHIzBs5QX%2F6T6m%2BRmNXtSAfG821%2FbBifym9TCQm9NTW29yNjF90o%2FeJHfIOIIycblKWyQBW8o%2Foq&X-Amz-Signature=1bc908ec038678f22c8b1db90cc2a2d09bf93c80acf1de23414d7309e6ab9953&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O6P4NNS%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICKrBkcyxOqQFOBKRvgO%2F40HzuNxXJAxe9CVPohBBJUZAiEAy108oSn3BDxTv6aqX%2FABNvd3XWe0bzl7BxzaGjW1XTMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYsYMQOqZ9RGstkRSrcAyce7Fvd6wTSrRIT3O8ItTDmjxBERFHJIbV6ebd6y5c9xHRow13BvlkVR6qexLavF%2BLaStuzAYHOj%2FaPlGRzaTiaN4Q81fXb1cmuxrIV6Mfuf7TV7qDV1gDhb9I5eThA%2F%2BJe1PlkwlFP%2FHMjZijJixwm7VZhbLrnTaUc%2B%2BSA7Lv77GwLthszIjNujDlbZmt50whXWDdXde9mmZ%2FS6ZEk43REfOC%2BmCQw%2BUDpmTduhqQsXitaEw%2BQyHfBEGjELLQFVgwWLqqmIAOFEDyDsCgG0BZEKh2iZwsU1rgVJDQ3F7%2BR%2BYyM%2Bo2qoHHm8GGOUDKanwMM1dVVXZJL2cMv%2FtBxUVpva%2FLXcbUihuZtXaH974tU3vp8tieSevvsXFRqOpTA%2F1izLjBz0TfbPcJLOcVJjGjvYTDeqxfoSKSI9Zy6POcyaAX%2B9PQ5jVvp2KXoYmtXi%2FGxRoCuYOKnZsh5wKAH%2FR3Juwhva8FDWaHTluxIeyDLXQNMg8fcR840zA5XvJuGQ5dszr3MZwe%2FR9VEmmg5zrV4fQx4pBXDG9zOJBycPETQMWiYsALKHgBP2DtiOZHf18MeGxfm5iPEvlRF7vzE7QKMgnDZ%2FH4cNb5rVxPpYjwptQ78y%2BndlsWOz2KkMPTfqtMGOqUB0pWOrSh53BQuyaDNk%2FQh1Z5yAjyLoMrv6cWP3IfEENV0K5JVkBltKvmERrTw5LVdVpMiRw03HqDcaOFFxyNuN6ThCEBWekPmowwoQ2uUHKF7UR%2F2FO8ybv7bbXmL74s0VQIbex1bEzSqetwRbHIzBs5QX%2F6T6m%2BRmNXtSAfG821%2FbBifym9TCQm9NTW29yNjF90o%2FeJHfIOIIycblKWyQBW8o%2Foq&X-Amz-Signature=62773cbb8b8402c954801cb9a727cc7d0bc86cf96083ba4ac11a4be5226f8c2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJTCQM73%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2%2B5IOfIAqt4N0zvFYRQA%2BiRneteqR8qLYS14gunu4lwIhAOw8cCSaOy3lNwWcERFqNhjG6sp%2BGyP5JuLSQbYx%2F%2B8rKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysxM3K%2FsgLScj1%2B6wq3AOHyuxXq6c%2BgX27PYzYcqghL4sTjyPOAR33Y78PlOlKBU5QqJTXuKZ1KRuTCgK0fJBfh0lglxLOMU445vhg0qVYpVNsh2oMI2IYC8tC1xW9jtpzX4%2B6eTNu2PHw3qqeeim9xDH95G5Ri1rBVsrbyiUehcFJSYqg1UkfTumcsta%2BuyOY%2B9pmyD%2BJsQ4SpnFOeLdDvPlcvGfTSZYWcCwQ9H8NB3vspapjk8H0o1cllCiW38E4V1OLEodRq6KfgnCIUAVVWPIJF2KJW5zQ9ovFp8xO96pj05wLovXO3R31HvmlVyv5iREF%2FsEoLmxhQhI0oj4iFQeR213wGpZHKUaf9uP1M%2BlrnJ68ZfA6Bdz9C6peQMslcU7Vu9ChFqjRJyuo8%2BbE%2FsnDQm5a%2B68vEM9H1eE3FAcoBbQH9uisnptq2nT4IfrJfRlaA9z2TDoQL2JCBvG9BX8s2DXd6AdXtIG9ZTAbgp%2FyujBGnamSXqHamZQZrpTzfjjd7xWgWDh18KlPKtIj7TOhXjM%2B00ge08TaYRV6ZbejLLWMHkZ%2BCOWKLv2satHmYLrsaYxdEe4FSWBaxRUjB%2FKKv66%2F6DAaZQHyCl%2BIQLI3fML3lzlVi%2FVyp9siMokrCoLO%2FlMjyp%2FJYDCo4qrTBjqkAVMR%2Bzv0kPLSDd6sD2BGyKZpChj9h9W%2BH%2FwUDtzdYtPHhLDcsJKZqjLIaLxfDIyzQyBUsjCSRrmcR4W7O3rL3arsgywsUon%2Bur%2B3FIO%2FtDWBzT4thTbGIeQC8Adrg3wL4i2F4oYoZAgsxisrdS4dA4hU97na6gfmUV1S6df%2FTG5sabG7EU9GxJiok8UUjq4xNS9MNbgXGF00wHDAVmaI45qzo7vo&X-Amz-Signature=891fff5bd76d0bf69d26265a9718a4b6af734aeac101c269cf7820872fcff8c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L4WSATZ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEWjTjX2lK2wSB6kVw%2FIVP7RkJQYG38wnK5u1X1%2FTEu4AiBnMwGUbijM%2FuNxQTqtZtV1kbZzsJfQjNTeQ3IQlYtUDiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9C%2BL0BS%2FM3Elq47tKtwDYrhLBLlngondkeDo6%2BTAeoEebIyfUoE2894eYk%2FCBpVrT2291JHOX62B8ZLNRSF5Qchjv5FicMLcDoMqo9Z%2FiWcshmmFAm6DbcQw54O2C9awvz3lKhca%2BQiZ52%2FNGvdqB8BqDpgXoBLjCbhoOBiUAX9x5fJk4EeAAz0oA7rkXO%2FTjToCsrgNJBRv%2B9JsgdhODf1EAs8U03Jn453PVl1cyrvpf3tUgXqioKBGQ0%2Bpxmma%2BQGHDZDumaXhjwniEt3RTdBvce%2FWDlTc3cvK6r8sM4RkQ25ZsO2uyDdWWdcvoplcyiASoclUW81amNwEb4jJaJMBaSJaDpNH8vqvwSPmgQFyY5F3oHfquovO2Yl5am%2FEIY9QmM6crG8JQQuT5%2BkuFZThcT4KEbHlUHgdmJ7j8TT%2F00gZbK92FvHXr516kTnRlqw6RMl3wpsS1CpRDKzX7L6a15pLMjScl3jFGpk%2F1%2BZnUKKrzdXW8jWz7XC%2F8fkw%2BnIDMsvJ8Bvi0i2eYoXbbdIn4%2FqzPD87b%2BWhJKTA%2FYEC9aZa877oNg8G3ScQxdDzk%2FjrHNPY1sqMw6w09TjRvXox3ArDVxOEpkKcWa9ZJ5iYa1QPD%2FGL0crkXdcaDLNLH5pV%2FBdKdPvhV%2B0wweKq0wY6pgFqXk6kUlFC769C4xLJ6dQharSgm8LPogJRfCsiyHu6KEU3GEPNOjXGdz6QnjBL0wuEGVcrd5v5oiBLV3Mj9S7ESzBUwqeS5DnHZO9Yd5ZGiR7Ens4oEU84ZK5hkKw9Xwg8xHtDzp08TS%2FfQgrrTqEgJKtPrK4daa30AmSGdsYENEGQSOgM5zR%2Fr%2BssCIbrMlT9vSfq4DH%2F%2BNdYLLKN%2BBJkQXwSqFxM&X-Amz-Signature=5d25485a12c065382d10cddf6c2cce521624c153ce3f10333ff882b96fd55e99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L4WSATZ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEWjTjX2lK2wSB6kVw%2FIVP7RkJQYG38wnK5u1X1%2FTEu4AiBnMwGUbijM%2FuNxQTqtZtV1kbZzsJfQjNTeQ3IQlYtUDiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9C%2BL0BS%2FM3Elq47tKtwDYrhLBLlngondkeDo6%2BTAeoEebIyfUoE2894eYk%2FCBpVrT2291JHOX62B8ZLNRSF5Qchjv5FicMLcDoMqo9Z%2FiWcshmmFAm6DbcQw54O2C9awvz3lKhca%2BQiZ52%2FNGvdqB8BqDpgXoBLjCbhoOBiUAX9x5fJk4EeAAz0oA7rkXO%2FTjToCsrgNJBRv%2B9JsgdhODf1EAs8U03Jn453PVl1cyrvpf3tUgXqioKBGQ0%2Bpxmma%2BQGHDZDumaXhjwniEt3RTdBvce%2FWDlTc3cvK6r8sM4RkQ25ZsO2uyDdWWdcvoplcyiASoclUW81amNwEb4jJaJMBaSJaDpNH8vqvwSPmgQFyY5F3oHfquovO2Yl5am%2FEIY9QmM6crG8JQQuT5%2BkuFZThcT4KEbHlUHgdmJ7j8TT%2F00gZbK92FvHXr516kTnRlqw6RMl3wpsS1CpRDKzX7L6a15pLMjScl3jFGpk%2F1%2BZnUKKrzdXW8jWz7XC%2F8fkw%2BnIDMsvJ8Bvi0i2eYoXbbdIn4%2FqzPD87b%2BWhJKTA%2FYEC9aZa877oNg8G3ScQxdDzk%2FjrHNPY1sqMw6w09TjRvXox3ArDVxOEpkKcWa9ZJ5iYa1QPD%2FGL0crkXdcaDLNLH5pV%2FBdKdPvhV%2B0wweKq0wY6pgFqXk6kUlFC769C4xLJ6dQharSgm8LPogJRfCsiyHu6KEU3GEPNOjXGdz6QnjBL0wuEGVcrd5v5oiBLV3Mj9S7ESzBUwqeS5DnHZO9Yd5ZGiR7Ens4oEU84ZK5hkKw9Xwg8xHtDzp08TS%2FfQgrrTqEgJKtPrK4daa30AmSGdsYENEGQSOgM5zR%2Fr%2BssCIbrMlT9vSfq4DH%2F%2BNdYLLKN%2BBJkQXwSqFxM&X-Amz-Signature=e0349e5428c18d3e7067bd7dfef09a25afa7313a23ea334ede2800ed3ee882ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L4WSATZ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEWjTjX2lK2wSB6kVw%2FIVP7RkJQYG38wnK5u1X1%2FTEu4AiBnMwGUbijM%2FuNxQTqtZtV1kbZzsJfQjNTeQ3IQlYtUDiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9C%2BL0BS%2FM3Elq47tKtwDYrhLBLlngondkeDo6%2BTAeoEebIyfUoE2894eYk%2FCBpVrT2291JHOX62B8ZLNRSF5Qchjv5FicMLcDoMqo9Z%2FiWcshmmFAm6DbcQw54O2C9awvz3lKhca%2BQiZ52%2FNGvdqB8BqDpgXoBLjCbhoOBiUAX9x5fJk4EeAAz0oA7rkXO%2FTjToCsrgNJBRv%2B9JsgdhODf1EAs8U03Jn453PVl1cyrvpf3tUgXqioKBGQ0%2Bpxmma%2BQGHDZDumaXhjwniEt3RTdBvce%2FWDlTc3cvK6r8sM4RkQ25ZsO2uyDdWWdcvoplcyiASoclUW81amNwEb4jJaJMBaSJaDpNH8vqvwSPmgQFyY5F3oHfquovO2Yl5am%2FEIY9QmM6crG8JQQuT5%2BkuFZThcT4KEbHlUHgdmJ7j8TT%2F00gZbK92FvHXr516kTnRlqw6RMl3wpsS1CpRDKzX7L6a15pLMjScl3jFGpk%2F1%2BZnUKKrzdXW8jWz7XC%2F8fkw%2BnIDMsvJ8Bvi0i2eYoXbbdIn4%2FqzPD87b%2BWhJKTA%2FYEC9aZa877oNg8G3ScQxdDzk%2FjrHNPY1sqMw6w09TjRvXox3ArDVxOEpkKcWa9ZJ5iYa1QPD%2FGL0crkXdcaDLNLH5pV%2FBdKdPvhV%2B0wweKq0wY6pgFqXk6kUlFC769C4xLJ6dQharSgm8LPogJRfCsiyHu6KEU3GEPNOjXGdz6QnjBL0wuEGVcrd5v5oiBLV3Mj9S7ESzBUwqeS5DnHZO9Yd5ZGiR7Ens4oEU84ZK5hkKw9Xwg8xHtDzp08TS%2FfQgrrTqEgJKtPrK4daa30AmSGdsYENEGQSOgM5zR%2Fr%2BssCIbrMlT9vSfq4DH%2F%2BNdYLLKN%2BBJkQXwSqFxM&X-Amz-Signature=bf38ede4462caa8f54700fd8fe629db06140e5968ad8ea87093bbab56ae257f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L4WSATZ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEWjTjX2lK2wSB6kVw%2FIVP7RkJQYG38wnK5u1X1%2FTEu4AiBnMwGUbijM%2FuNxQTqtZtV1kbZzsJfQjNTeQ3IQlYtUDiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9C%2BL0BS%2FM3Elq47tKtwDYrhLBLlngondkeDo6%2BTAeoEebIyfUoE2894eYk%2FCBpVrT2291JHOX62B8ZLNRSF5Qchjv5FicMLcDoMqo9Z%2FiWcshmmFAm6DbcQw54O2C9awvz3lKhca%2BQiZ52%2FNGvdqB8BqDpgXoBLjCbhoOBiUAX9x5fJk4EeAAz0oA7rkXO%2FTjToCsrgNJBRv%2B9JsgdhODf1EAs8U03Jn453PVl1cyrvpf3tUgXqioKBGQ0%2Bpxmma%2BQGHDZDumaXhjwniEt3RTdBvce%2FWDlTc3cvK6r8sM4RkQ25ZsO2uyDdWWdcvoplcyiASoclUW81amNwEb4jJaJMBaSJaDpNH8vqvwSPmgQFyY5F3oHfquovO2Yl5am%2FEIY9QmM6crG8JQQuT5%2BkuFZThcT4KEbHlUHgdmJ7j8TT%2F00gZbK92FvHXr516kTnRlqw6RMl3wpsS1CpRDKzX7L6a15pLMjScl3jFGpk%2F1%2BZnUKKrzdXW8jWz7XC%2F8fkw%2BnIDMsvJ8Bvi0i2eYoXbbdIn4%2FqzPD87b%2BWhJKTA%2FYEC9aZa877oNg8G3ScQxdDzk%2FjrHNPY1sqMw6w09TjRvXox3ArDVxOEpkKcWa9ZJ5iYa1QPD%2FGL0crkXdcaDLNLH5pV%2FBdKdPvhV%2B0wweKq0wY6pgFqXk6kUlFC769C4xLJ6dQharSgm8LPogJRfCsiyHu6KEU3GEPNOjXGdz6QnjBL0wuEGVcrd5v5oiBLV3Mj9S7ESzBUwqeS5DnHZO9Yd5ZGiR7Ens4oEU84ZK5hkKw9Xwg8xHtDzp08TS%2FfQgrrTqEgJKtPrK4daa30AmSGdsYENEGQSOgM5zR%2Fr%2BssCIbrMlT9vSfq4DH%2F%2BNdYLLKN%2BBJkQXwSqFxM&X-Amz-Signature=52b3d2f233f7040c66e6e685a65a956655139096cc3a21af7fc0d4bf4c4ec98d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L4WSATZ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEWjTjX2lK2wSB6kVw%2FIVP7RkJQYG38wnK5u1X1%2FTEu4AiBnMwGUbijM%2FuNxQTqtZtV1kbZzsJfQjNTeQ3IQlYtUDiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9C%2BL0BS%2FM3Elq47tKtwDYrhLBLlngondkeDo6%2BTAeoEebIyfUoE2894eYk%2FCBpVrT2291JHOX62B8ZLNRSF5Qchjv5FicMLcDoMqo9Z%2FiWcshmmFAm6DbcQw54O2C9awvz3lKhca%2BQiZ52%2FNGvdqB8BqDpgXoBLjCbhoOBiUAX9x5fJk4EeAAz0oA7rkXO%2FTjToCsrgNJBRv%2B9JsgdhODf1EAs8U03Jn453PVl1cyrvpf3tUgXqioKBGQ0%2Bpxmma%2BQGHDZDumaXhjwniEt3RTdBvce%2FWDlTc3cvK6r8sM4RkQ25ZsO2uyDdWWdcvoplcyiASoclUW81amNwEb4jJaJMBaSJaDpNH8vqvwSPmgQFyY5F3oHfquovO2Yl5am%2FEIY9QmM6crG8JQQuT5%2BkuFZThcT4KEbHlUHgdmJ7j8TT%2F00gZbK92FvHXr516kTnRlqw6RMl3wpsS1CpRDKzX7L6a15pLMjScl3jFGpk%2F1%2BZnUKKrzdXW8jWz7XC%2F8fkw%2BnIDMsvJ8Bvi0i2eYoXbbdIn4%2FqzPD87b%2BWhJKTA%2FYEC9aZa877oNg8G3ScQxdDzk%2FjrHNPY1sqMw6w09TjRvXox3ArDVxOEpkKcWa9ZJ5iYa1QPD%2FGL0crkXdcaDLNLH5pV%2FBdKdPvhV%2B0wweKq0wY6pgFqXk6kUlFC769C4xLJ6dQharSgm8LPogJRfCsiyHu6KEU3GEPNOjXGdz6QnjBL0wuEGVcrd5v5oiBLV3Mj9S7ESzBUwqeS5DnHZO9Yd5ZGiR7Ens4oEU84ZK5hkKw9Xwg8xHtDzp08TS%2FfQgrrTqEgJKtPrK4daa30AmSGdsYENEGQSOgM5zR%2Fr%2BssCIbrMlT9vSfq4DH%2F%2BNdYLLKN%2BBJkQXwSqFxM&X-Amz-Signature=72035d674a42aae26e79d442de5416ecddb004e6d6f06235730d17b15d15bd12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L4WSATZ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEWjTjX2lK2wSB6kVw%2FIVP7RkJQYG38wnK5u1X1%2FTEu4AiBnMwGUbijM%2FuNxQTqtZtV1kbZzsJfQjNTeQ3IQlYtUDiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9C%2BL0BS%2FM3Elq47tKtwDYrhLBLlngondkeDo6%2BTAeoEebIyfUoE2894eYk%2FCBpVrT2291JHOX62B8ZLNRSF5Qchjv5FicMLcDoMqo9Z%2FiWcshmmFAm6DbcQw54O2C9awvz3lKhca%2BQiZ52%2FNGvdqB8BqDpgXoBLjCbhoOBiUAX9x5fJk4EeAAz0oA7rkXO%2FTjToCsrgNJBRv%2B9JsgdhODf1EAs8U03Jn453PVl1cyrvpf3tUgXqioKBGQ0%2Bpxmma%2BQGHDZDumaXhjwniEt3RTdBvce%2FWDlTc3cvK6r8sM4RkQ25ZsO2uyDdWWdcvoplcyiASoclUW81amNwEb4jJaJMBaSJaDpNH8vqvwSPmgQFyY5F3oHfquovO2Yl5am%2FEIY9QmM6crG8JQQuT5%2BkuFZThcT4KEbHlUHgdmJ7j8TT%2F00gZbK92FvHXr516kTnRlqw6RMl3wpsS1CpRDKzX7L6a15pLMjScl3jFGpk%2F1%2BZnUKKrzdXW8jWz7XC%2F8fkw%2BnIDMsvJ8Bvi0i2eYoXbbdIn4%2FqzPD87b%2BWhJKTA%2FYEC9aZa877oNg8G3ScQxdDzk%2FjrHNPY1sqMw6w09TjRvXox3ArDVxOEpkKcWa9ZJ5iYa1QPD%2FGL0crkXdcaDLNLH5pV%2FBdKdPvhV%2B0wweKq0wY6pgFqXk6kUlFC769C4xLJ6dQharSgm8LPogJRfCsiyHu6KEU3GEPNOjXGdz6QnjBL0wuEGVcrd5v5oiBLV3Mj9S7ESzBUwqeS5DnHZO9Yd5ZGiR7Ens4oEU84ZK5hkKw9Xwg8xHtDzp08TS%2FfQgrrTqEgJKtPrK4daa30AmSGdsYENEGQSOgM5zR%2Fr%2BssCIbrMlT9vSfq4DH%2F%2BNdYLLKN%2BBJkQXwSqFxM&X-Amz-Signature=5933ec30b9695c5f184700144620f1008cde31ec6ee3e5e3ccf245da15b613b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L4WSATZ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEWjTjX2lK2wSB6kVw%2FIVP7RkJQYG38wnK5u1X1%2FTEu4AiBnMwGUbijM%2FuNxQTqtZtV1kbZzsJfQjNTeQ3IQlYtUDiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9C%2BL0BS%2FM3Elq47tKtwDYrhLBLlngondkeDo6%2BTAeoEebIyfUoE2894eYk%2FCBpVrT2291JHOX62B8ZLNRSF5Qchjv5FicMLcDoMqo9Z%2FiWcshmmFAm6DbcQw54O2C9awvz3lKhca%2BQiZ52%2FNGvdqB8BqDpgXoBLjCbhoOBiUAX9x5fJk4EeAAz0oA7rkXO%2FTjToCsrgNJBRv%2B9JsgdhODf1EAs8U03Jn453PVl1cyrvpf3tUgXqioKBGQ0%2Bpxmma%2BQGHDZDumaXhjwniEt3RTdBvce%2FWDlTc3cvK6r8sM4RkQ25ZsO2uyDdWWdcvoplcyiASoclUW81amNwEb4jJaJMBaSJaDpNH8vqvwSPmgQFyY5F3oHfquovO2Yl5am%2FEIY9QmM6crG8JQQuT5%2BkuFZThcT4KEbHlUHgdmJ7j8TT%2F00gZbK92FvHXr516kTnRlqw6RMl3wpsS1CpRDKzX7L6a15pLMjScl3jFGpk%2F1%2BZnUKKrzdXW8jWz7XC%2F8fkw%2BnIDMsvJ8Bvi0i2eYoXbbdIn4%2FqzPD87b%2BWhJKTA%2FYEC9aZa877oNg8G3ScQxdDzk%2FjrHNPY1sqMw6w09TjRvXox3ArDVxOEpkKcWa9ZJ5iYa1QPD%2FGL0crkXdcaDLNLH5pV%2FBdKdPvhV%2B0wweKq0wY6pgFqXk6kUlFC769C4xLJ6dQharSgm8LPogJRfCsiyHu6KEU3GEPNOjXGdz6QnjBL0wuEGVcrd5v5oiBLV3Mj9S7ESzBUwqeS5DnHZO9Yd5ZGiR7Ens4oEU84ZK5hkKw9Xwg8xHtDzp08TS%2FfQgrrTqEgJKtPrK4daa30AmSGdsYENEGQSOgM5zR%2Fr%2BssCIbrMlT9vSfq4DH%2F%2BNdYLLKN%2BBJkQXwSqFxM&X-Amz-Signature=a18a2c0fa8729f374b01ec082c554e2033f5ca6a06518de5220f72c229547ba0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L4WSATZ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEWjTjX2lK2wSB6kVw%2FIVP7RkJQYG38wnK5u1X1%2FTEu4AiBnMwGUbijM%2FuNxQTqtZtV1kbZzsJfQjNTeQ3IQlYtUDiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9C%2BL0BS%2FM3Elq47tKtwDYrhLBLlngondkeDo6%2BTAeoEebIyfUoE2894eYk%2FCBpVrT2291JHOX62B8ZLNRSF5Qchjv5FicMLcDoMqo9Z%2FiWcshmmFAm6DbcQw54O2C9awvz3lKhca%2BQiZ52%2FNGvdqB8BqDpgXoBLjCbhoOBiUAX9x5fJk4EeAAz0oA7rkXO%2FTjToCsrgNJBRv%2B9JsgdhODf1EAs8U03Jn453PVl1cyrvpf3tUgXqioKBGQ0%2Bpxmma%2BQGHDZDumaXhjwniEt3RTdBvce%2FWDlTc3cvK6r8sM4RkQ25ZsO2uyDdWWdcvoplcyiASoclUW81amNwEb4jJaJMBaSJaDpNH8vqvwSPmgQFyY5F3oHfquovO2Yl5am%2FEIY9QmM6crG8JQQuT5%2BkuFZThcT4KEbHlUHgdmJ7j8TT%2F00gZbK92FvHXr516kTnRlqw6RMl3wpsS1CpRDKzX7L6a15pLMjScl3jFGpk%2F1%2BZnUKKrzdXW8jWz7XC%2F8fkw%2BnIDMsvJ8Bvi0i2eYoXbbdIn4%2FqzPD87b%2BWhJKTA%2FYEC9aZa877oNg8G3ScQxdDzk%2FjrHNPY1sqMw6w09TjRvXox3ArDVxOEpkKcWa9ZJ5iYa1QPD%2FGL0crkXdcaDLNLH5pV%2FBdKdPvhV%2B0wweKq0wY6pgFqXk6kUlFC769C4xLJ6dQharSgm8LPogJRfCsiyHu6KEU3GEPNOjXGdz6QnjBL0wuEGVcrd5v5oiBLV3Mj9S7ESzBUwqeS5DnHZO9Yd5ZGiR7Ens4oEU84ZK5hkKw9Xwg8xHtDzp08TS%2FfQgrrTqEgJKtPrK4daa30AmSGdsYENEGQSOgM5zR%2Fr%2BssCIbrMlT9vSfq4DH%2F%2BNdYLLKN%2BBJkQXwSqFxM&X-Amz-Signature=f483ac83fdebb4335cb7d6afcd96fd8366c514a2e27d80884d67e39a51746a55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L4WSATZ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEWjTjX2lK2wSB6kVw%2FIVP7RkJQYG38wnK5u1X1%2FTEu4AiBnMwGUbijM%2FuNxQTqtZtV1kbZzsJfQjNTeQ3IQlYtUDiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9C%2BL0BS%2FM3Elq47tKtwDYrhLBLlngondkeDo6%2BTAeoEebIyfUoE2894eYk%2FCBpVrT2291JHOX62B8ZLNRSF5Qchjv5FicMLcDoMqo9Z%2FiWcshmmFAm6DbcQw54O2C9awvz3lKhca%2BQiZ52%2FNGvdqB8BqDpgXoBLjCbhoOBiUAX9x5fJk4EeAAz0oA7rkXO%2FTjToCsrgNJBRv%2B9JsgdhODf1EAs8U03Jn453PVl1cyrvpf3tUgXqioKBGQ0%2Bpxmma%2BQGHDZDumaXhjwniEt3RTdBvce%2FWDlTc3cvK6r8sM4RkQ25ZsO2uyDdWWdcvoplcyiASoclUW81amNwEb4jJaJMBaSJaDpNH8vqvwSPmgQFyY5F3oHfquovO2Yl5am%2FEIY9QmM6crG8JQQuT5%2BkuFZThcT4KEbHlUHgdmJ7j8TT%2F00gZbK92FvHXr516kTnRlqw6RMl3wpsS1CpRDKzX7L6a15pLMjScl3jFGpk%2F1%2BZnUKKrzdXW8jWz7XC%2F8fkw%2BnIDMsvJ8Bvi0i2eYoXbbdIn4%2FqzPD87b%2BWhJKTA%2FYEC9aZa877oNg8G3ScQxdDzk%2FjrHNPY1sqMw6w09TjRvXox3ArDVxOEpkKcWa9ZJ5iYa1QPD%2FGL0crkXdcaDLNLH5pV%2FBdKdPvhV%2B0wweKq0wY6pgFqXk6kUlFC769C4xLJ6dQharSgm8LPogJRfCsiyHu6KEU3GEPNOjXGdz6QnjBL0wuEGVcrd5v5oiBLV3Mj9S7ESzBUwqeS5DnHZO9Yd5ZGiR7Ens4oEU84ZK5hkKw9Xwg8xHtDzp08TS%2FfQgrrTqEgJKtPrK4daa30AmSGdsYENEGQSOgM5zR%2Fr%2BssCIbrMlT9vSfq4DH%2F%2BNdYLLKN%2BBJkQXwSqFxM&X-Amz-Signature=21ce52242f4aae160164d0d1c476b030bc5bc19a027403d8013769519a3cb41a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
