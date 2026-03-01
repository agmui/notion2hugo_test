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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4SWBZTR%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiein%2FQ0pcuDlHGoj14u%2F9sWtLuDqDASpziLFIQQ3A5wIgSQZbEcv6idfk1r2xostAEZm%2FKznHJcbLxL00yM8buGcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDN1BUittYxPg605vZircA0wgC6qUQBT8Ngz%2BOxvt%2BzaHZ5ULq0WisHgpVfx52SRFpzCQ2kY8zkuRnNL%2BFo%2B7OyJw9j1tlqN08Up5Dn4B8CkkEzpDJfVm6BQAfP8WiD2W1o6SlRoxTbQ65CqWcRNJcGt2SmVrGTFCoC15TgkTNdlpjl6deyXiQQ7wlsKbo5Lt17pMNI055XJT3S8VM%2FNeno49qU3BzJhw4l3IJ8BRtg5ZFYHvcDACWiuW2z1Jp0wnilbZAS6RR2F0ViSE6pT8xWWdHS3WS7F1C6NFgI6kVXGgc8J4oifPcweQr3O8rYdmt0Ea3B%2FuayAd1YlPH0IEaetpabrm4WhrppYLjQTYaWFyxpsY7070%2FF1avUwM9APHORbDmXxa%2FTFloA4QbQZCBZThkJjpsCl6m5cuoYMy8fLOLtZlxOhXfC9phgbx8QuD6t13c7TvCCvAArIG1BRjFueTa5CSBQ%2BKgjtJtbjys6uyArQUmPl9SxTbLAZBxjI%2Fm2dchyLnMGO8YtNIrCx4l%2FbqmsX95u8ZbfXz3ZD3px25XyrjvdQ4RflBd7nzux18vJU5PXf9Z0QrlOL99tDYCNS4FmeEbL7BrD1HjzgUGjF9ZEeb0BXTU9PVjrllvS2qzmWZI7wUvYQywpqlMOKujs0GOqUB7iYmOisGD63w91iD3CFSoQS8XslqJYvKiJSGISyg2gs%2F6h3RshFnf0DFs%2FGVUGc785crLxDsueovP%2BXOgC7XlhyiHxLjG4tsvdK2%2BLqqUsWGmYDczpyF85AvAvPqUwi0cmp6rR86wVYyXk0swBpHsZ1KicHQ7d%2B9zZ0CjaWnsxpBkHf2BaomxYrHmWbIVWWguYE%2FO0mt1dykqG0rik3Sx9djaLcd&X-Amz-Signature=7c55bcd4e0e05bae13b7fb0d989c1ccc9dd00c3b7de1bc13695f4d3dcf8f58c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4SWBZTR%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiein%2FQ0pcuDlHGoj14u%2F9sWtLuDqDASpziLFIQQ3A5wIgSQZbEcv6idfk1r2xostAEZm%2FKznHJcbLxL00yM8buGcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDN1BUittYxPg605vZircA0wgC6qUQBT8Ngz%2BOxvt%2BzaHZ5ULq0WisHgpVfx52SRFpzCQ2kY8zkuRnNL%2BFo%2B7OyJw9j1tlqN08Up5Dn4B8CkkEzpDJfVm6BQAfP8WiD2W1o6SlRoxTbQ65CqWcRNJcGt2SmVrGTFCoC15TgkTNdlpjl6deyXiQQ7wlsKbo5Lt17pMNI055XJT3S8VM%2FNeno49qU3BzJhw4l3IJ8BRtg5ZFYHvcDACWiuW2z1Jp0wnilbZAS6RR2F0ViSE6pT8xWWdHS3WS7F1C6NFgI6kVXGgc8J4oifPcweQr3O8rYdmt0Ea3B%2FuayAd1YlPH0IEaetpabrm4WhrppYLjQTYaWFyxpsY7070%2FF1avUwM9APHORbDmXxa%2FTFloA4QbQZCBZThkJjpsCl6m5cuoYMy8fLOLtZlxOhXfC9phgbx8QuD6t13c7TvCCvAArIG1BRjFueTa5CSBQ%2BKgjtJtbjys6uyArQUmPl9SxTbLAZBxjI%2Fm2dchyLnMGO8YtNIrCx4l%2FbqmsX95u8ZbfXz3ZD3px25XyrjvdQ4RflBd7nzux18vJU5PXf9Z0QrlOL99tDYCNS4FmeEbL7BrD1HjzgUGjF9ZEeb0BXTU9PVjrllvS2qzmWZI7wUvYQywpqlMOKujs0GOqUB7iYmOisGD63w91iD3CFSoQS8XslqJYvKiJSGISyg2gs%2F6h3RshFnf0DFs%2FGVUGc785crLxDsueovP%2BXOgC7XlhyiHxLjG4tsvdK2%2BLqqUsWGmYDczpyF85AvAvPqUwi0cmp6rR86wVYyXk0swBpHsZ1KicHQ7d%2B9zZ0CjaWnsxpBkHf2BaomxYrHmWbIVWWguYE%2FO0mt1dykqG0rik3Sx9djaLcd&X-Amz-Signature=e5b2b161c29b9362c86fdaec933b91c04a05de087d7943c66740a88c4ee30341&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4SWBZTR%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiein%2FQ0pcuDlHGoj14u%2F9sWtLuDqDASpziLFIQQ3A5wIgSQZbEcv6idfk1r2xostAEZm%2FKznHJcbLxL00yM8buGcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDN1BUittYxPg605vZircA0wgC6qUQBT8Ngz%2BOxvt%2BzaHZ5ULq0WisHgpVfx52SRFpzCQ2kY8zkuRnNL%2BFo%2B7OyJw9j1tlqN08Up5Dn4B8CkkEzpDJfVm6BQAfP8WiD2W1o6SlRoxTbQ65CqWcRNJcGt2SmVrGTFCoC15TgkTNdlpjl6deyXiQQ7wlsKbo5Lt17pMNI055XJT3S8VM%2FNeno49qU3BzJhw4l3IJ8BRtg5ZFYHvcDACWiuW2z1Jp0wnilbZAS6RR2F0ViSE6pT8xWWdHS3WS7F1C6NFgI6kVXGgc8J4oifPcweQr3O8rYdmt0Ea3B%2FuayAd1YlPH0IEaetpabrm4WhrppYLjQTYaWFyxpsY7070%2FF1avUwM9APHORbDmXxa%2FTFloA4QbQZCBZThkJjpsCl6m5cuoYMy8fLOLtZlxOhXfC9phgbx8QuD6t13c7TvCCvAArIG1BRjFueTa5CSBQ%2BKgjtJtbjys6uyArQUmPl9SxTbLAZBxjI%2Fm2dchyLnMGO8YtNIrCx4l%2FbqmsX95u8ZbfXz3ZD3px25XyrjvdQ4RflBd7nzux18vJU5PXf9Z0QrlOL99tDYCNS4FmeEbL7BrD1HjzgUGjF9ZEeb0BXTU9PVjrllvS2qzmWZI7wUvYQywpqlMOKujs0GOqUB7iYmOisGD63w91iD3CFSoQS8XslqJYvKiJSGISyg2gs%2F6h3RshFnf0DFs%2FGVUGc785crLxDsueovP%2BXOgC7XlhyiHxLjG4tsvdK2%2BLqqUsWGmYDczpyF85AvAvPqUwi0cmp6rR86wVYyXk0swBpHsZ1KicHQ7d%2B9zZ0CjaWnsxpBkHf2BaomxYrHmWbIVWWguYE%2FO0mt1dykqG0rik3Sx9djaLcd&X-Amz-Signature=dfa5e4c8ad512cd239ce46fad919d49455290a91067ec396f94719b28a501424&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4SWBZTR%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiein%2FQ0pcuDlHGoj14u%2F9sWtLuDqDASpziLFIQQ3A5wIgSQZbEcv6idfk1r2xostAEZm%2FKznHJcbLxL00yM8buGcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDN1BUittYxPg605vZircA0wgC6qUQBT8Ngz%2BOxvt%2BzaHZ5ULq0WisHgpVfx52SRFpzCQ2kY8zkuRnNL%2BFo%2B7OyJw9j1tlqN08Up5Dn4B8CkkEzpDJfVm6BQAfP8WiD2W1o6SlRoxTbQ65CqWcRNJcGt2SmVrGTFCoC15TgkTNdlpjl6deyXiQQ7wlsKbo5Lt17pMNI055XJT3S8VM%2FNeno49qU3BzJhw4l3IJ8BRtg5ZFYHvcDACWiuW2z1Jp0wnilbZAS6RR2F0ViSE6pT8xWWdHS3WS7F1C6NFgI6kVXGgc8J4oifPcweQr3O8rYdmt0Ea3B%2FuayAd1YlPH0IEaetpabrm4WhrppYLjQTYaWFyxpsY7070%2FF1avUwM9APHORbDmXxa%2FTFloA4QbQZCBZThkJjpsCl6m5cuoYMy8fLOLtZlxOhXfC9phgbx8QuD6t13c7TvCCvAArIG1BRjFueTa5CSBQ%2BKgjtJtbjys6uyArQUmPl9SxTbLAZBxjI%2Fm2dchyLnMGO8YtNIrCx4l%2FbqmsX95u8ZbfXz3ZD3px25XyrjvdQ4RflBd7nzux18vJU5PXf9Z0QrlOL99tDYCNS4FmeEbL7BrD1HjzgUGjF9ZEeb0BXTU9PVjrllvS2qzmWZI7wUvYQywpqlMOKujs0GOqUB7iYmOisGD63w91iD3CFSoQS8XslqJYvKiJSGISyg2gs%2F6h3RshFnf0DFs%2FGVUGc785crLxDsueovP%2BXOgC7XlhyiHxLjG4tsvdK2%2BLqqUsWGmYDczpyF85AvAvPqUwi0cmp6rR86wVYyXk0swBpHsZ1KicHQ7d%2B9zZ0CjaWnsxpBkHf2BaomxYrHmWbIVWWguYE%2FO0mt1dykqG0rik3Sx9djaLcd&X-Amz-Signature=64448d5a2bc18efd27f34b9eb5b0fb427e915be44e716c897f4f4432dac16acd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4SWBZTR%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiein%2FQ0pcuDlHGoj14u%2F9sWtLuDqDASpziLFIQQ3A5wIgSQZbEcv6idfk1r2xostAEZm%2FKznHJcbLxL00yM8buGcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDN1BUittYxPg605vZircA0wgC6qUQBT8Ngz%2BOxvt%2BzaHZ5ULq0WisHgpVfx52SRFpzCQ2kY8zkuRnNL%2BFo%2B7OyJw9j1tlqN08Up5Dn4B8CkkEzpDJfVm6BQAfP8WiD2W1o6SlRoxTbQ65CqWcRNJcGt2SmVrGTFCoC15TgkTNdlpjl6deyXiQQ7wlsKbo5Lt17pMNI055XJT3S8VM%2FNeno49qU3BzJhw4l3IJ8BRtg5ZFYHvcDACWiuW2z1Jp0wnilbZAS6RR2F0ViSE6pT8xWWdHS3WS7F1C6NFgI6kVXGgc8J4oifPcweQr3O8rYdmt0Ea3B%2FuayAd1YlPH0IEaetpabrm4WhrppYLjQTYaWFyxpsY7070%2FF1avUwM9APHORbDmXxa%2FTFloA4QbQZCBZThkJjpsCl6m5cuoYMy8fLOLtZlxOhXfC9phgbx8QuD6t13c7TvCCvAArIG1BRjFueTa5CSBQ%2BKgjtJtbjys6uyArQUmPl9SxTbLAZBxjI%2Fm2dchyLnMGO8YtNIrCx4l%2FbqmsX95u8ZbfXz3ZD3px25XyrjvdQ4RflBd7nzux18vJU5PXf9Z0QrlOL99tDYCNS4FmeEbL7BrD1HjzgUGjF9ZEeb0BXTU9PVjrllvS2qzmWZI7wUvYQywpqlMOKujs0GOqUB7iYmOisGD63w91iD3CFSoQS8XslqJYvKiJSGISyg2gs%2F6h3RshFnf0DFs%2FGVUGc785crLxDsueovP%2BXOgC7XlhyiHxLjG4tsvdK2%2BLqqUsWGmYDczpyF85AvAvPqUwi0cmp6rR86wVYyXk0swBpHsZ1KicHQ7d%2B9zZ0CjaWnsxpBkHf2BaomxYrHmWbIVWWguYE%2FO0mt1dykqG0rik3Sx9djaLcd&X-Amz-Signature=e4775519d5d02f0509bd3df5cd4f5747d373e8c452f04cafec1de46657fbd070&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4SWBZTR%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiein%2FQ0pcuDlHGoj14u%2F9sWtLuDqDASpziLFIQQ3A5wIgSQZbEcv6idfk1r2xostAEZm%2FKznHJcbLxL00yM8buGcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDN1BUittYxPg605vZircA0wgC6qUQBT8Ngz%2BOxvt%2BzaHZ5ULq0WisHgpVfx52SRFpzCQ2kY8zkuRnNL%2BFo%2B7OyJw9j1tlqN08Up5Dn4B8CkkEzpDJfVm6BQAfP8WiD2W1o6SlRoxTbQ65CqWcRNJcGt2SmVrGTFCoC15TgkTNdlpjl6deyXiQQ7wlsKbo5Lt17pMNI055XJT3S8VM%2FNeno49qU3BzJhw4l3IJ8BRtg5ZFYHvcDACWiuW2z1Jp0wnilbZAS6RR2F0ViSE6pT8xWWdHS3WS7F1C6NFgI6kVXGgc8J4oifPcweQr3O8rYdmt0Ea3B%2FuayAd1YlPH0IEaetpabrm4WhrppYLjQTYaWFyxpsY7070%2FF1avUwM9APHORbDmXxa%2FTFloA4QbQZCBZThkJjpsCl6m5cuoYMy8fLOLtZlxOhXfC9phgbx8QuD6t13c7TvCCvAArIG1BRjFueTa5CSBQ%2BKgjtJtbjys6uyArQUmPl9SxTbLAZBxjI%2Fm2dchyLnMGO8YtNIrCx4l%2FbqmsX95u8ZbfXz3ZD3px25XyrjvdQ4RflBd7nzux18vJU5PXf9Z0QrlOL99tDYCNS4FmeEbL7BrD1HjzgUGjF9ZEeb0BXTU9PVjrllvS2qzmWZI7wUvYQywpqlMOKujs0GOqUB7iYmOisGD63w91iD3CFSoQS8XslqJYvKiJSGISyg2gs%2F6h3RshFnf0DFs%2FGVUGc785crLxDsueovP%2BXOgC7XlhyiHxLjG4tsvdK2%2BLqqUsWGmYDczpyF85AvAvPqUwi0cmp6rR86wVYyXk0swBpHsZ1KicHQ7d%2B9zZ0CjaWnsxpBkHf2BaomxYrHmWbIVWWguYE%2FO0mt1dykqG0rik3Sx9djaLcd&X-Amz-Signature=129bc985cf606a80eb5651c8cf951a4319dc06da1e98de6ab0d58003132c3841&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4SWBZTR%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiein%2FQ0pcuDlHGoj14u%2F9sWtLuDqDASpziLFIQQ3A5wIgSQZbEcv6idfk1r2xostAEZm%2FKznHJcbLxL00yM8buGcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDN1BUittYxPg605vZircA0wgC6qUQBT8Ngz%2BOxvt%2BzaHZ5ULq0WisHgpVfx52SRFpzCQ2kY8zkuRnNL%2BFo%2B7OyJw9j1tlqN08Up5Dn4B8CkkEzpDJfVm6BQAfP8WiD2W1o6SlRoxTbQ65CqWcRNJcGt2SmVrGTFCoC15TgkTNdlpjl6deyXiQQ7wlsKbo5Lt17pMNI055XJT3S8VM%2FNeno49qU3BzJhw4l3IJ8BRtg5ZFYHvcDACWiuW2z1Jp0wnilbZAS6RR2F0ViSE6pT8xWWdHS3WS7F1C6NFgI6kVXGgc8J4oifPcweQr3O8rYdmt0Ea3B%2FuayAd1YlPH0IEaetpabrm4WhrppYLjQTYaWFyxpsY7070%2FF1avUwM9APHORbDmXxa%2FTFloA4QbQZCBZThkJjpsCl6m5cuoYMy8fLOLtZlxOhXfC9phgbx8QuD6t13c7TvCCvAArIG1BRjFueTa5CSBQ%2BKgjtJtbjys6uyArQUmPl9SxTbLAZBxjI%2Fm2dchyLnMGO8YtNIrCx4l%2FbqmsX95u8ZbfXz3ZD3px25XyrjvdQ4RflBd7nzux18vJU5PXf9Z0QrlOL99tDYCNS4FmeEbL7BrD1HjzgUGjF9ZEeb0BXTU9PVjrllvS2qzmWZI7wUvYQywpqlMOKujs0GOqUB7iYmOisGD63w91iD3CFSoQS8XslqJYvKiJSGISyg2gs%2F6h3RshFnf0DFs%2FGVUGc785crLxDsueovP%2BXOgC7XlhyiHxLjG4tsvdK2%2BLqqUsWGmYDczpyF85AvAvPqUwi0cmp6rR86wVYyXk0swBpHsZ1KicHQ7d%2B9zZ0CjaWnsxpBkHf2BaomxYrHmWbIVWWguYE%2FO0mt1dykqG0rik3Sx9djaLcd&X-Amz-Signature=5c224cca209898a750eac3b4a4ba610a1e6970439cfdc99f11de951692821763&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4SWBZTR%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiein%2FQ0pcuDlHGoj14u%2F9sWtLuDqDASpziLFIQQ3A5wIgSQZbEcv6idfk1r2xostAEZm%2FKznHJcbLxL00yM8buGcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDN1BUittYxPg605vZircA0wgC6qUQBT8Ngz%2BOxvt%2BzaHZ5ULq0WisHgpVfx52SRFpzCQ2kY8zkuRnNL%2BFo%2B7OyJw9j1tlqN08Up5Dn4B8CkkEzpDJfVm6BQAfP8WiD2W1o6SlRoxTbQ65CqWcRNJcGt2SmVrGTFCoC15TgkTNdlpjl6deyXiQQ7wlsKbo5Lt17pMNI055XJT3S8VM%2FNeno49qU3BzJhw4l3IJ8BRtg5ZFYHvcDACWiuW2z1Jp0wnilbZAS6RR2F0ViSE6pT8xWWdHS3WS7F1C6NFgI6kVXGgc8J4oifPcweQr3O8rYdmt0Ea3B%2FuayAd1YlPH0IEaetpabrm4WhrppYLjQTYaWFyxpsY7070%2FF1avUwM9APHORbDmXxa%2FTFloA4QbQZCBZThkJjpsCl6m5cuoYMy8fLOLtZlxOhXfC9phgbx8QuD6t13c7TvCCvAArIG1BRjFueTa5CSBQ%2BKgjtJtbjys6uyArQUmPl9SxTbLAZBxjI%2Fm2dchyLnMGO8YtNIrCx4l%2FbqmsX95u8ZbfXz3ZD3px25XyrjvdQ4RflBd7nzux18vJU5PXf9Z0QrlOL99tDYCNS4FmeEbL7BrD1HjzgUGjF9ZEeb0BXTU9PVjrllvS2qzmWZI7wUvYQywpqlMOKujs0GOqUB7iYmOisGD63w91iD3CFSoQS8XslqJYvKiJSGISyg2gs%2F6h3RshFnf0DFs%2FGVUGc785crLxDsueovP%2BXOgC7XlhyiHxLjG4tsvdK2%2BLqqUsWGmYDczpyF85AvAvPqUwi0cmp6rR86wVYyXk0swBpHsZ1KicHQ7d%2B9zZ0CjaWnsxpBkHf2BaomxYrHmWbIVWWguYE%2FO0mt1dykqG0rik3Sx9djaLcd&X-Amz-Signature=862f695ff473d5906e20a7a18106bdd4af4eac865f8122dfa48a4f6d929154fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4SWBZTR%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiein%2FQ0pcuDlHGoj14u%2F9sWtLuDqDASpziLFIQQ3A5wIgSQZbEcv6idfk1r2xostAEZm%2FKznHJcbLxL00yM8buGcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDN1BUittYxPg605vZircA0wgC6qUQBT8Ngz%2BOxvt%2BzaHZ5ULq0WisHgpVfx52SRFpzCQ2kY8zkuRnNL%2BFo%2B7OyJw9j1tlqN08Up5Dn4B8CkkEzpDJfVm6BQAfP8WiD2W1o6SlRoxTbQ65CqWcRNJcGt2SmVrGTFCoC15TgkTNdlpjl6deyXiQQ7wlsKbo5Lt17pMNI055XJT3S8VM%2FNeno49qU3BzJhw4l3IJ8BRtg5ZFYHvcDACWiuW2z1Jp0wnilbZAS6RR2F0ViSE6pT8xWWdHS3WS7F1C6NFgI6kVXGgc8J4oifPcweQr3O8rYdmt0Ea3B%2FuayAd1YlPH0IEaetpabrm4WhrppYLjQTYaWFyxpsY7070%2FF1avUwM9APHORbDmXxa%2FTFloA4QbQZCBZThkJjpsCl6m5cuoYMy8fLOLtZlxOhXfC9phgbx8QuD6t13c7TvCCvAArIG1BRjFueTa5CSBQ%2BKgjtJtbjys6uyArQUmPl9SxTbLAZBxjI%2Fm2dchyLnMGO8YtNIrCx4l%2FbqmsX95u8ZbfXz3ZD3px25XyrjvdQ4RflBd7nzux18vJU5PXf9Z0QrlOL99tDYCNS4FmeEbL7BrD1HjzgUGjF9ZEeb0BXTU9PVjrllvS2qzmWZI7wUvYQywpqlMOKujs0GOqUB7iYmOisGD63w91iD3CFSoQS8XslqJYvKiJSGISyg2gs%2F6h3RshFnf0DFs%2FGVUGc785crLxDsueovP%2BXOgC7XlhyiHxLjG4tsvdK2%2BLqqUsWGmYDczpyF85AvAvPqUwi0cmp6rR86wVYyXk0swBpHsZ1KicHQ7d%2B9zZ0CjaWnsxpBkHf2BaomxYrHmWbIVWWguYE%2FO0mt1dykqG0rik3Sx9djaLcd&X-Amz-Signature=d6f9417920fcd87c5bc8b7af8902f5fcbbe2320bc1b54accc82b7c16c9dfc180&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4SWBZTR%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiein%2FQ0pcuDlHGoj14u%2F9sWtLuDqDASpziLFIQQ3A5wIgSQZbEcv6idfk1r2xostAEZm%2FKznHJcbLxL00yM8buGcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDN1BUittYxPg605vZircA0wgC6qUQBT8Ngz%2BOxvt%2BzaHZ5ULq0WisHgpVfx52SRFpzCQ2kY8zkuRnNL%2BFo%2B7OyJw9j1tlqN08Up5Dn4B8CkkEzpDJfVm6BQAfP8WiD2W1o6SlRoxTbQ65CqWcRNJcGt2SmVrGTFCoC15TgkTNdlpjl6deyXiQQ7wlsKbo5Lt17pMNI055XJT3S8VM%2FNeno49qU3BzJhw4l3IJ8BRtg5ZFYHvcDACWiuW2z1Jp0wnilbZAS6RR2F0ViSE6pT8xWWdHS3WS7F1C6NFgI6kVXGgc8J4oifPcweQr3O8rYdmt0Ea3B%2FuayAd1YlPH0IEaetpabrm4WhrppYLjQTYaWFyxpsY7070%2FF1avUwM9APHORbDmXxa%2FTFloA4QbQZCBZThkJjpsCl6m5cuoYMy8fLOLtZlxOhXfC9phgbx8QuD6t13c7TvCCvAArIG1BRjFueTa5CSBQ%2BKgjtJtbjys6uyArQUmPl9SxTbLAZBxjI%2Fm2dchyLnMGO8YtNIrCx4l%2FbqmsX95u8ZbfXz3ZD3px25XyrjvdQ4RflBd7nzux18vJU5PXf9Z0QrlOL99tDYCNS4FmeEbL7BrD1HjzgUGjF9ZEeb0BXTU9PVjrllvS2qzmWZI7wUvYQywpqlMOKujs0GOqUB7iYmOisGD63w91iD3CFSoQS8XslqJYvKiJSGISyg2gs%2F6h3RshFnf0DFs%2FGVUGc785crLxDsueovP%2BXOgC7XlhyiHxLjG4tsvdK2%2BLqqUsWGmYDczpyF85AvAvPqUwi0cmp6rR86wVYyXk0swBpHsZ1KicHQ7d%2B9zZ0CjaWnsxpBkHf2BaomxYrHmWbIVWWguYE%2FO0mt1dykqG0rik3Sx9djaLcd&X-Amz-Signature=8cbb2cbd2d50c20630744c6aaf2e095dd98ee92e8b6bfd32315912ea0821e09a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO6WAFJ2%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHZvsXOsq9f6qgh54WFZe7JDvVBXYDd5KsgcLE3DwXjvAiACOBClY%2BydsczjLgekleQ6kVlTcuyWRzf4HjcPA1zHvCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMz39kglgk1XUEtiqxKtwDjMSriAvoS1I1cnyw43ADEGrTnVcXMd4%2B3XggIubHPZuMNpkmyIzd9Bi0Ns3Vt3aoA2BjP3tibU1yL3ZQYigM69PcYiBycwq4C8O6V0clQDrqnyN0D1Gg1%2BGFs2tQrzXnp4iznTVOLsTyKGbcUST2mb9W7kIVMbt0hFqlr%2BBvlYsbQneACW7SW9%2BZTdsixa6hNYnY34jV2Eaeaftp24FctwfFjb95nP5wCLnDzKRH6FHhvo8EFcdJrpgZdS0wkekoWP68OQi9Gf2ciWhVmKGKivxlMe8ZMr8juakL438mKDcAIbh8zwxakY%2B7hC9%2FxbrOxQC6zbSKyhLm48BTaLwX2s78JOSE3VC2UZrHdrjKwYF60P5V12x1P5VyQYQCYGXg00JEZrBkPpsGvN9k72iM0KSt2Q%2BQxQOQIhLAWTfxUFpTBpik06vEGuOkpj%2FQmmNGYmJUSp6iiHy%2Fxy4ETfzD20AOpPhyng%2Fm6G7%2FJ1BabTpSc8VEDFEtBiTs4Qf3%2BYyXNVp2cEVJI0435RkM0YnXaTwIHPrOyho4XUIa%2FuLjuX8PjrdqVd3oox19C8OVyjAcvXwt7MWYkd6uKYisHx5Eq9mVy5TCQwRDK6YNdVKPg7HBSY3EUrylDStm1%2F4wpq%2BOzQY6pgGXmUTmtnqZFo0FVXwB06v%2FykJnGzII1ecbqfBjoUZAa3rVxDQb%2FXLVI5OeFkLezGIzLFTky3zlAIcN0p8ydoi1SRY32XD61s22ECQW0plIK7pH8Fmfz%2BRA5%2BOEKCqNI29E4PY6KLOs7N%2BZGkC3A3jp%2FYiZC93WkzxuGjbKDZRtbpGMsYLFonfyK7E80Aermi%2BoiIhv1u4kLzl2GxcZC1KSoVZ148Wi&X-Amz-Signature=4c430b8d0ab3641b5883ea2b2f0d094c9b7c509108d96839b7f5030da9a969f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLDE4AEW%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB9zm7U4CNPiEW23YRwu3%2F2VYD%2B9tka%2BYbQpeN3n40uwIgAmAV%2BgNXSi%2BZznnuu1igq2vWn27Jbgy526wpwbQa0UAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDImngKv2WGSQqNdnQCrcA5eFSuH2C5H3gTnP%2FGqhNR8FuzQDqRynmE2yA1qrkvHJmjpGhDy%2FanNnNaEe9sxV5fZyqEGccLyqwPrZ4GypVQeco9CPR4cyZ6mMNdwVwYhd13pM0LqmZRo%2F2nbKIlPlXxJJJUHXFCNyJjanSeo8KkeVnXVGkgFUXWkZ2%2BJip%2BZnuDN2hqHhkqVtCLHK9q%2Fx2faEqikEtlDNvSq4rplv0i7fdTygd20aGiCraJ8gBoVdyB%2BXe3JTW%2FYlb71KEGlO58Tg2S3IahLSCRSkbT7CosCUElMBCZRbnD%2F7mq3o2uS5SPvQDFL6yFzozh9G5wBcgrMavD5HQcbDDJVMDMLCSAGJd89JWfkYDzFRtfhGyv%2Bhu%2BZDD%2BZ2PwkDtlYq%2F%2Fmhx9J2N5ht3xUt2jUreUloht%2BM1LnvJ24cEKgvzNbbKCdtYEV9SJJoBz4cxAlSH5dXuenw%2Bvl1l2JTYkpvvjTFt656F%2FvRr6KFlewb8W0Qjf0y5Jha5K6HvLyysLLjjp27RRifuA8pRlLvNlZdrNZHDZjlHO5I36PecpaVQ6wztQgD2YqRiNZX%2FHa2Xomn3FkDjpi0%2B2dOvOeJb7SgIXqelspJOvF3TN%2FsT2PQKRdW%2FHUA0S60Ri8T4nHligtNMOqujs0GOqUB0DOYvbXiKgJ1HGEvNkUeEyT8W7NER5ru5nRpnoPgttKv3G2bv0yUPYFxFPBX2zoljI8rtHiEnluC4whwOCZjz1ecckOW6GDIeASaUUCGGnhnUIxjQsZ12Kwb9itXFNPzvBllIqEeCcSvRQ3ZCNa2fm%2FjcBtQpBdVAPNujPIBGodlwbuMH1CmRfQFRu2J3zkRKcwfJHPc%2FcNsAFaD2uNApFD2nVEH&X-Amz-Signature=d0c94ff5750c26feee2d1a78254a0efab677d7048e4b39939f7b66839e103106&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLDE4AEW%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB9zm7U4CNPiEW23YRwu3%2F2VYD%2B9tka%2BYbQpeN3n40uwIgAmAV%2BgNXSi%2BZznnuu1igq2vWn27Jbgy526wpwbQa0UAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDImngKv2WGSQqNdnQCrcA5eFSuH2C5H3gTnP%2FGqhNR8FuzQDqRynmE2yA1qrkvHJmjpGhDy%2FanNnNaEe9sxV5fZyqEGccLyqwPrZ4GypVQeco9CPR4cyZ6mMNdwVwYhd13pM0LqmZRo%2F2nbKIlPlXxJJJUHXFCNyJjanSeo8KkeVnXVGkgFUXWkZ2%2BJip%2BZnuDN2hqHhkqVtCLHK9q%2Fx2faEqikEtlDNvSq4rplv0i7fdTygd20aGiCraJ8gBoVdyB%2BXe3JTW%2FYlb71KEGlO58Tg2S3IahLSCRSkbT7CosCUElMBCZRbnD%2F7mq3o2uS5SPvQDFL6yFzozh9G5wBcgrMavD5HQcbDDJVMDMLCSAGJd89JWfkYDzFRtfhGyv%2Bhu%2BZDD%2BZ2PwkDtlYq%2F%2Fmhx9J2N5ht3xUt2jUreUloht%2BM1LnvJ24cEKgvzNbbKCdtYEV9SJJoBz4cxAlSH5dXuenw%2Bvl1l2JTYkpvvjTFt656F%2FvRr6KFlewb8W0Qjf0y5Jha5K6HvLyysLLjjp27RRifuA8pRlLvNlZdrNZHDZjlHO5I36PecpaVQ6wztQgD2YqRiNZX%2FHa2Xomn3FkDjpi0%2B2dOvOeJb7SgIXqelspJOvF3TN%2FsT2PQKRdW%2FHUA0S60Ri8T4nHligtNMOqujs0GOqUB0DOYvbXiKgJ1HGEvNkUeEyT8W7NER5ru5nRpnoPgttKv3G2bv0yUPYFxFPBX2zoljI8rtHiEnluC4whwOCZjz1ecckOW6GDIeASaUUCGGnhnUIxjQsZ12Kwb9itXFNPzvBllIqEeCcSvRQ3ZCNa2fm%2FjcBtQpBdVAPNujPIBGodlwbuMH1CmRfQFRu2J3zkRKcwfJHPc%2FcNsAFaD2uNApFD2nVEH&X-Amz-Signature=1a22b34d5b66bd644a93e35cf00d5e3c8bb99a721b4155dbfa3217a53f53b1d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLDE4AEW%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB9zm7U4CNPiEW23YRwu3%2F2VYD%2B9tka%2BYbQpeN3n40uwIgAmAV%2BgNXSi%2BZznnuu1igq2vWn27Jbgy526wpwbQa0UAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDImngKv2WGSQqNdnQCrcA5eFSuH2C5H3gTnP%2FGqhNR8FuzQDqRynmE2yA1qrkvHJmjpGhDy%2FanNnNaEe9sxV5fZyqEGccLyqwPrZ4GypVQeco9CPR4cyZ6mMNdwVwYhd13pM0LqmZRo%2F2nbKIlPlXxJJJUHXFCNyJjanSeo8KkeVnXVGkgFUXWkZ2%2BJip%2BZnuDN2hqHhkqVtCLHK9q%2Fx2faEqikEtlDNvSq4rplv0i7fdTygd20aGiCraJ8gBoVdyB%2BXe3JTW%2FYlb71KEGlO58Tg2S3IahLSCRSkbT7CosCUElMBCZRbnD%2F7mq3o2uS5SPvQDFL6yFzozh9G5wBcgrMavD5HQcbDDJVMDMLCSAGJd89JWfkYDzFRtfhGyv%2Bhu%2BZDD%2BZ2PwkDtlYq%2F%2Fmhx9J2N5ht3xUt2jUreUloht%2BM1LnvJ24cEKgvzNbbKCdtYEV9SJJoBz4cxAlSH5dXuenw%2Bvl1l2JTYkpvvjTFt656F%2FvRr6KFlewb8W0Qjf0y5Jha5K6HvLyysLLjjp27RRifuA8pRlLvNlZdrNZHDZjlHO5I36PecpaVQ6wztQgD2YqRiNZX%2FHa2Xomn3FkDjpi0%2B2dOvOeJb7SgIXqelspJOvF3TN%2FsT2PQKRdW%2FHUA0S60Ri8T4nHligtNMOqujs0GOqUB0DOYvbXiKgJ1HGEvNkUeEyT8W7NER5ru5nRpnoPgttKv3G2bv0yUPYFxFPBX2zoljI8rtHiEnluC4whwOCZjz1ecckOW6GDIeASaUUCGGnhnUIxjQsZ12Kwb9itXFNPzvBllIqEeCcSvRQ3ZCNa2fm%2FjcBtQpBdVAPNujPIBGodlwbuMH1CmRfQFRu2J3zkRKcwfJHPc%2FcNsAFaD2uNApFD2nVEH&X-Amz-Signature=8a25af8fc29d982078b5e683c9044c689841be3277b712030a50e5043ca98b68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLDE4AEW%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB9zm7U4CNPiEW23YRwu3%2F2VYD%2B9tka%2BYbQpeN3n40uwIgAmAV%2BgNXSi%2BZznnuu1igq2vWn27Jbgy526wpwbQa0UAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDImngKv2WGSQqNdnQCrcA5eFSuH2C5H3gTnP%2FGqhNR8FuzQDqRynmE2yA1qrkvHJmjpGhDy%2FanNnNaEe9sxV5fZyqEGccLyqwPrZ4GypVQeco9CPR4cyZ6mMNdwVwYhd13pM0LqmZRo%2F2nbKIlPlXxJJJUHXFCNyJjanSeo8KkeVnXVGkgFUXWkZ2%2BJip%2BZnuDN2hqHhkqVtCLHK9q%2Fx2faEqikEtlDNvSq4rplv0i7fdTygd20aGiCraJ8gBoVdyB%2BXe3JTW%2FYlb71KEGlO58Tg2S3IahLSCRSkbT7CosCUElMBCZRbnD%2F7mq3o2uS5SPvQDFL6yFzozh9G5wBcgrMavD5HQcbDDJVMDMLCSAGJd89JWfkYDzFRtfhGyv%2Bhu%2BZDD%2BZ2PwkDtlYq%2F%2Fmhx9J2N5ht3xUt2jUreUloht%2BM1LnvJ24cEKgvzNbbKCdtYEV9SJJoBz4cxAlSH5dXuenw%2Bvl1l2JTYkpvvjTFt656F%2FvRr6KFlewb8W0Qjf0y5Jha5K6HvLyysLLjjp27RRifuA8pRlLvNlZdrNZHDZjlHO5I36PecpaVQ6wztQgD2YqRiNZX%2FHa2Xomn3FkDjpi0%2B2dOvOeJb7SgIXqelspJOvF3TN%2FsT2PQKRdW%2FHUA0S60Ri8T4nHligtNMOqujs0GOqUB0DOYvbXiKgJ1HGEvNkUeEyT8W7NER5ru5nRpnoPgttKv3G2bv0yUPYFxFPBX2zoljI8rtHiEnluC4whwOCZjz1ecckOW6GDIeASaUUCGGnhnUIxjQsZ12Kwb9itXFNPzvBllIqEeCcSvRQ3ZCNa2fm%2FjcBtQpBdVAPNujPIBGodlwbuMH1CmRfQFRu2J3zkRKcwfJHPc%2FcNsAFaD2uNApFD2nVEH&X-Amz-Signature=50be792416d199532fb7be614c4617d5bb1568a107ffea2e163a13f8b044c9b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLDE4AEW%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB9zm7U4CNPiEW23YRwu3%2F2VYD%2B9tka%2BYbQpeN3n40uwIgAmAV%2BgNXSi%2BZznnuu1igq2vWn27Jbgy526wpwbQa0UAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDImngKv2WGSQqNdnQCrcA5eFSuH2C5H3gTnP%2FGqhNR8FuzQDqRynmE2yA1qrkvHJmjpGhDy%2FanNnNaEe9sxV5fZyqEGccLyqwPrZ4GypVQeco9CPR4cyZ6mMNdwVwYhd13pM0LqmZRo%2F2nbKIlPlXxJJJUHXFCNyJjanSeo8KkeVnXVGkgFUXWkZ2%2BJip%2BZnuDN2hqHhkqVtCLHK9q%2Fx2faEqikEtlDNvSq4rplv0i7fdTygd20aGiCraJ8gBoVdyB%2BXe3JTW%2FYlb71KEGlO58Tg2S3IahLSCRSkbT7CosCUElMBCZRbnD%2F7mq3o2uS5SPvQDFL6yFzozh9G5wBcgrMavD5HQcbDDJVMDMLCSAGJd89JWfkYDzFRtfhGyv%2Bhu%2BZDD%2BZ2PwkDtlYq%2F%2Fmhx9J2N5ht3xUt2jUreUloht%2BM1LnvJ24cEKgvzNbbKCdtYEV9SJJoBz4cxAlSH5dXuenw%2Bvl1l2JTYkpvvjTFt656F%2FvRr6KFlewb8W0Qjf0y5Jha5K6HvLyysLLjjp27RRifuA8pRlLvNlZdrNZHDZjlHO5I36PecpaVQ6wztQgD2YqRiNZX%2FHa2Xomn3FkDjpi0%2B2dOvOeJb7SgIXqelspJOvF3TN%2FsT2PQKRdW%2FHUA0S60Ri8T4nHligtNMOqujs0GOqUB0DOYvbXiKgJ1HGEvNkUeEyT8W7NER5ru5nRpnoPgttKv3G2bv0yUPYFxFPBX2zoljI8rtHiEnluC4whwOCZjz1ecckOW6GDIeASaUUCGGnhnUIxjQsZ12Kwb9itXFNPzvBllIqEeCcSvRQ3ZCNa2fm%2FjcBtQpBdVAPNujPIBGodlwbuMH1CmRfQFRu2J3zkRKcwfJHPc%2FcNsAFaD2uNApFD2nVEH&X-Amz-Signature=9d0135bee6e1740150323bae19bf2944b8096011f492c352ed976f78a6d311d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLDE4AEW%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB9zm7U4CNPiEW23YRwu3%2F2VYD%2B9tka%2BYbQpeN3n40uwIgAmAV%2BgNXSi%2BZznnuu1igq2vWn27Jbgy526wpwbQa0UAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDImngKv2WGSQqNdnQCrcA5eFSuH2C5H3gTnP%2FGqhNR8FuzQDqRynmE2yA1qrkvHJmjpGhDy%2FanNnNaEe9sxV5fZyqEGccLyqwPrZ4GypVQeco9CPR4cyZ6mMNdwVwYhd13pM0LqmZRo%2F2nbKIlPlXxJJJUHXFCNyJjanSeo8KkeVnXVGkgFUXWkZ2%2BJip%2BZnuDN2hqHhkqVtCLHK9q%2Fx2faEqikEtlDNvSq4rplv0i7fdTygd20aGiCraJ8gBoVdyB%2BXe3JTW%2FYlb71KEGlO58Tg2S3IahLSCRSkbT7CosCUElMBCZRbnD%2F7mq3o2uS5SPvQDFL6yFzozh9G5wBcgrMavD5HQcbDDJVMDMLCSAGJd89JWfkYDzFRtfhGyv%2Bhu%2BZDD%2BZ2PwkDtlYq%2F%2Fmhx9J2N5ht3xUt2jUreUloht%2BM1LnvJ24cEKgvzNbbKCdtYEV9SJJoBz4cxAlSH5dXuenw%2Bvl1l2JTYkpvvjTFt656F%2FvRr6KFlewb8W0Qjf0y5Jha5K6HvLyysLLjjp27RRifuA8pRlLvNlZdrNZHDZjlHO5I36PecpaVQ6wztQgD2YqRiNZX%2FHa2Xomn3FkDjpi0%2B2dOvOeJb7SgIXqelspJOvF3TN%2FsT2PQKRdW%2FHUA0S60Ri8T4nHligtNMOqujs0GOqUB0DOYvbXiKgJ1HGEvNkUeEyT8W7NER5ru5nRpnoPgttKv3G2bv0yUPYFxFPBX2zoljI8rtHiEnluC4whwOCZjz1ecckOW6GDIeASaUUCGGnhnUIxjQsZ12Kwb9itXFNPzvBllIqEeCcSvRQ3ZCNa2fm%2FjcBtQpBdVAPNujPIBGodlwbuMH1CmRfQFRu2J3zkRKcwfJHPc%2FcNsAFaD2uNApFD2nVEH&X-Amz-Signature=19c10c1f2179abd2e7b950c1c5460f7aa903c575db366c56ef0c95bdab33358e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLDE4AEW%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB9zm7U4CNPiEW23YRwu3%2F2VYD%2B9tka%2BYbQpeN3n40uwIgAmAV%2BgNXSi%2BZznnuu1igq2vWn27Jbgy526wpwbQa0UAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDImngKv2WGSQqNdnQCrcA5eFSuH2C5H3gTnP%2FGqhNR8FuzQDqRynmE2yA1qrkvHJmjpGhDy%2FanNnNaEe9sxV5fZyqEGccLyqwPrZ4GypVQeco9CPR4cyZ6mMNdwVwYhd13pM0LqmZRo%2F2nbKIlPlXxJJJUHXFCNyJjanSeo8KkeVnXVGkgFUXWkZ2%2BJip%2BZnuDN2hqHhkqVtCLHK9q%2Fx2faEqikEtlDNvSq4rplv0i7fdTygd20aGiCraJ8gBoVdyB%2BXe3JTW%2FYlb71KEGlO58Tg2S3IahLSCRSkbT7CosCUElMBCZRbnD%2F7mq3o2uS5SPvQDFL6yFzozh9G5wBcgrMavD5HQcbDDJVMDMLCSAGJd89JWfkYDzFRtfhGyv%2Bhu%2BZDD%2BZ2PwkDtlYq%2F%2Fmhx9J2N5ht3xUt2jUreUloht%2BM1LnvJ24cEKgvzNbbKCdtYEV9SJJoBz4cxAlSH5dXuenw%2Bvl1l2JTYkpvvjTFt656F%2FvRr6KFlewb8W0Qjf0y5Jha5K6HvLyysLLjjp27RRifuA8pRlLvNlZdrNZHDZjlHO5I36PecpaVQ6wztQgD2YqRiNZX%2FHa2Xomn3FkDjpi0%2B2dOvOeJb7SgIXqelspJOvF3TN%2FsT2PQKRdW%2FHUA0S60Ri8T4nHligtNMOqujs0GOqUB0DOYvbXiKgJ1HGEvNkUeEyT8W7NER5ru5nRpnoPgttKv3G2bv0yUPYFxFPBX2zoljI8rtHiEnluC4whwOCZjz1ecckOW6GDIeASaUUCGGnhnUIxjQsZ12Kwb9itXFNPzvBllIqEeCcSvRQ3ZCNa2fm%2FjcBtQpBdVAPNujPIBGodlwbuMH1CmRfQFRu2J3zkRKcwfJHPc%2FcNsAFaD2uNApFD2nVEH&X-Amz-Signature=e1566180ef38c780dfd4a55474a987d3cebccd6e4442ea90d5738129f4c17570&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLDE4AEW%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB9zm7U4CNPiEW23YRwu3%2F2VYD%2B9tka%2BYbQpeN3n40uwIgAmAV%2BgNXSi%2BZznnuu1igq2vWn27Jbgy526wpwbQa0UAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDImngKv2WGSQqNdnQCrcA5eFSuH2C5H3gTnP%2FGqhNR8FuzQDqRynmE2yA1qrkvHJmjpGhDy%2FanNnNaEe9sxV5fZyqEGccLyqwPrZ4GypVQeco9CPR4cyZ6mMNdwVwYhd13pM0LqmZRo%2F2nbKIlPlXxJJJUHXFCNyJjanSeo8KkeVnXVGkgFUXWkZ2%2BJip%2BZnuDN2hqHhkqVtCLHK9q%2Fx2faEqikEtlDNvSq4rplv0i7fdTygd20aGiCraJ8gBoVdyB%2BXe3JTW%2FYlb71KEGlO58Tg2S3IahLSCRSkbT7CosCUElMBCZRbnD%2F7mq3o2uS5SPvQDFL6yFzozh9G5wBcgrMavD5HQcbDDJVMDMLCSAGJd89JWfkYDzFRtfhGyv%2Bhu%2BZDD%2BZ2PwkDtlYq%2F%2Fmhx9J2N5ht3xUt2jUreUloht%2BM1LnvJ24cEKgvzNbbKCdtYEV9SJJoBz4cxAlSH5dXuenw%2Bvl1l2JTYkpvvjTFt656F%2FvRr6KFlewb8W0Qjf0y5Jha5K6HvLyysLLjjp27RRifuA8pRlLvNlZdrNZHDZjlHO5I36PecpaVQ6wztQgD2YqRiNZX%2FHa2Xomn3FkDjpi0%2B2dOvOeJb7SgIXqelspJOvF3TN%2FsT2PQKRdW%2FHUA0S60Ri8T4nHligtNMOqujs0GOqUB0DOYvbXiKgJ1HGEvNkUeEyT8W7NER5ru5nRpnoPgttKv3G2bv0yUPYFxFPBX2zoljI8rtHiEnluC4whwOCZjz1ecckOW6GDIeASaUUCGGnhnUIxjQsZ12Kwb9itXFNPzvBllIqEeCcSvRQ3ZCNa2fm%2FjcBtQpBdVAPNujPIBGodlwbuMH1CmRfQFRu2J3zkRKcwfJHPc%2FcNsAFaD2uNApFD2nVEH&X-Amz-Signature=1f6045ab2e064fa1dcc8c038e7bc0b5b309a16ad8805ebc2b32e05f30d3ce34c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLDE4AEW%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB9zm7U4CNPiEW23YRwu3%2F2VYD%2B9tka%2BYbQpeN3n40uwIgAmAV%2BgNXSi%2BZznnuu1igq2vWn27Jbgy526wpwbQa0UAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDImngKv2WGSQqNdnQCrcA5eFSuH2C5H3gTnP%2FGqhNR8FuzQDqRynmE2yA1qrkvHJmjpGhDy%2FanNnNaEe9sxV5fZyqEGccLyqwPrZ4GypVQeco9CPR4cyZ6mMNdwVwYhd13pM0LqmZRo%2F2nbKIlPlXxJJJUHXFCNyJjanSeo8KkeVnXVGkgFUXWkZ2%2BJip%2BZnuDN2hqHhkqVtCLHK9q%2Fx2faEqikEtlDNvSq4rplv0i7fdTygd20aGiCraJ8gBoVdyB%2BXe3JTW%2FYlb71KEGlO58Tg2S3IahLSCRSkbT7CosCUElMBCZRbnD%2F7mq3o2uS5SPvQDFL6yFzozh9G5wBcgrMavD5HQcbDDJVMDMLCSAGJd89JWfkYDzFRtfhGyv%2Bhu%2BZDD%2BZ2PwkDtlYq%2F%2Fmhx9J2N5ht3xUt2jUreUloht%2BM1LnvJ24cEKgvzNbbKCdtYEV9SJJoBz4cxAlSH5dXuenw%2Bvl1l2JTYkpvvjTFt656F%2FvRr6KFlewb8W0Qjf0y5Jha5K6HvLyysLLjjp27RRifuA8pRlLvNlZdrNZHDZjlHO5I36PecpaVQ6wztQgD2YqRiNZX%2FHa2Xomn3FkDjpi0%2B2dOvOeJb7SgIXqelspJOvF3TN%2FsT2PQKRdW%2FHUA0S60Ri8T4nHligtNMOqujs0GOqUB0DOYvbXiKgJ1HGEvNkUeEyT8W7NER5ru5nRpnoPgttKv3G2bv0yUPYFxFPBX2zoljI8rtHiEnluC4whwOCZjz1ecckOW6GDIeASaUUCGGnhnUIxjQsZ12Kwb9itXFNPzvBllIqEeCcSvRQ3ZCNa2fm%2FjcBtQpBdVAPNujPIBGodlwbuMH1CmRfQFRu2J3zkRKcwfJHPc%2FcNsAFaD2uNApFD2nVEH&X-Amz-Signature=d19601896a4f1800e64a08b2eafd27ec48b4be4ab9b4b161d395bd1082cf2b43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
