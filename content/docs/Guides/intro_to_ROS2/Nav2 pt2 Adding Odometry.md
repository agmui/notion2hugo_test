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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4WR6GJH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBNRisKmAjCQhJqx44gSTA7py2Astxm918uYthq5XwSAiBHYbnbjRotfLRP2DP0KaC8Ba4fc3aoC6DWtPD03%2BMhLiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc7MgzIhzAcNDd5QNKtwDHWwG3CVhxOqdxbOuUuDrTDzIxj8l51tyVngRHq2%2Bue%2FLHaBb6L%2FjJ14MSvPjnDjEZNsSSHdg7H9F0KDevLyJe%2Fg3oQrfGqJz6XvV9pqGhkMuAwoQENbXyE69hFaFkkqPwzTi78r%2BWyyAzm%2BxsBHKsx%2BF5Xcdt4sUB0D9w6%2BDdgnhvdVlYcMTWu9ytMBfIZFMwKAOXBhTsvJI6tXqDSJouotoBfvCXerO%2Bfv3fzHEoWnAri1%2B7qOmF7Ywp2012sQkNorLxsJtteYqfSS%2BUFcLq6iioq5cSYX3TQBur2syCuQqSH31b3PCE0u5tfHQFN0vF3OeO2uhHvztLXu8qlvix21uQwf0y4fQPiwKML9LojWOWdNAgOSPG5cziYz8vgUzkSHVxapbgbDhpMySI%2FPtt0ioNGjxebu1IrTM%2Bd%2BP8RHoAvAXnF9DAE46Y%2Boq%2F3iU5VzPmPPXy1Z5LMkYz6qCBp7jyZa8NMo5rTjk9T5RVbdgKmBJXUg0gJAUrL%2Bf8J9lw6F6Pn5o3s8LVfOtmb6jIN3pHy7Pg3Y69hXI31j6jReyPHLRxArF3a053MjSZWRq2U0Z166hssvtSvPvRxiReahZWRjguwFdp6xl0L2nDk0rHVExAli6GGc02TowxurcxAY6pgHY7PESHH7X947FjDSjfJxSX5SoMMOnCZcelvu6xpJwYaQ6jN1uqgiY%2FeOBVZB4Su%2Bv8%2BVMxNpRFR%2B0qGoFJ8wWaF0tcYyopQFfL7DdeOh8FHspxea47%2B0%2B%2FReDDGGiSKmDqyuukr2tLZX8etGFG%2BDHo6dC%2BqN0Uuc9Kw0cUZ2T4lS9G07CL91a5FRFMC7QosaJZ0L7RQrqgWl9dXludZ0tD4wyjg9B&X-Amz-Signature=d5374d19699150163a2aa96d37e3454d71ecf3cd8bb48db815cdfb25e36e054e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This is often done by measuring how many times the wheels rotate on our robot

First we need to read in our wheel angles and put them into ROS.

Lets make a Node to do this

{{% alert context="info" %}}

<details>
      <summary>Why not ros2_control?</summary>
      This guide is designed to be work with hardware setups commonly found in Robomasters. Where there is a often a Raspberry Pi / Jetson, and a micro controller such as an Arduino / Robomasters type-c boards. Most of the controls code lives on the micro controller so it is more convent for the Robomasters teams to not use `ros2_control` and simply send commands over a serial interface.
  </details>

{{% /alert %}}

# Publishing wheel angles to `/joint_states`

## Creating custom node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4WR6GJH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBNRisKmAjCQhJqx44gSTA7py2Astxm918uYthq5XwSAiBHYbnbjRotfLRP2DP0KaC8Ba4fc3aoC6DWtPD03%2BMhLiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc7MgzIhzAcNDd5QNKtwDHWwG3CVhxOqdxbOuUuDrTDzIxj8l51tyVngRHq2%2Bue%2FLHaBb6L%2FjJ14MSvPjnDjEZNsSSHdg7H9F0KDevLyJe%2Fg3oQrfGqJz6XvV9pqGhkMuAwoQENbXyE69hFaFkkqPwzTi78r%2BWyyAzm%2BxsBHKsx%2BF5Xcdt4sUB0D9w6%2BDdgnhvdVlYcMTWu9ytMBfIZFMwKAOXBhTsvJI6tXqDSJouotoBfvCXerO%2Bfv3fzHEoWnAri1%2B7qOmF7Ywp2012sQkNorLxsJtteYqfSS%2BUFcLq6iioq5cSYX3TQBur2syCuQqSH31b3PCE0u5tfHQFN0vF3OeO2uhHvztLXu8qlvix21uQwf0y4fQPiwKML9LojWOWdNAgOSPG5cziYz8vgUzkSHVxapbgbDhpMySI%2FPtt0ioNGjxebu1IrTM%2Bd%2BP8RHoAvAXnF9DAE46Y%2Boq%2F3iU5VzPmPPXy1Z5LMkYz6qCBp7jyZa8NMo5rTjk9T5RVbdgKmBJXUg0gJAUrL%2Bf8J9lw6F6Pn5o3s8LVfOtmb6jIN3pHy7Pg3Y69hXI31j6jReyPHLRxArF3a053MjSZWRq2U0Z166hssvtSvPvRxiReahZWRjguwFdp6xl0L2nDk0rHVExAli6GGc02TowxurcxAY6pgHY7PESHH7X947FjDSjfJxSX5SoMMOnCZcelvu6xpJwYaQ6jN1uqgiY%2FeOBVZB4Su%2Bv8%2BVMxNpRFR%2B0qGoFJ8wWaF0tcYyopQFfL7DdeOh8FHspxea47%2B0%2B%2FReDDGGiSKmDqyuukr2tLZX8etGFG%2BDHo6dC%2BqN0Uuc9Kw0cUZ2T4lS9G07CL91a5FRFMC7QosaJZ0L7RQrqgWl9dXludZ0tD4wyjg9B&X-Amz-Signature=ab49295c209e8a615e61a3a608cdac944d1d92fe8597128efd8d4031d963a07a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4WR6GJH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBNRisKmAjCQhJqx44gSTA7py2Astxm918uYthq5XwSAiBHYbnbjRotfLRP2DP0KaC8Ba4fc3aoC6DWtPD03%2BMhLiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc7MgzIhzAcNDd5QNKtwDHWwG3CVhxOqdxbOuUuDrTDzIxj8l51tyVngRHq2%2Bue%2FLHaBb6L%2FjJ14MSvPjnDjEZNsSSHdg7H9F0KDevLyJe%2Fg3oQrfGqJz6XvV9pqGhkMuAwoQENbXyE69hFaFkkqPwzTi78r%2BWyyAzm%2BxsBHKsx%2BF5Xcdt4sUB0D9w6%2BDdgnhvdVlYcMTWu9ytMBfIZFMwKAOXBhTsvJI6tXqDSJouotoBfvCXerO%2Bfv3fzHEoWnAri1%2B7qOmF7Ywp2012sQkNorLxsJtteYqfSS%2BUFcLq6iioq5cSYX3TQBur2syCuQqSH31b3PCE0u5tfHQFN0vF3OeO2uhHvztLXu8qlvix21uQwf0y4fQPiwKML9LojWOWdNAgOSPG5cziYz8vgUzkSHVxapbgbDhpMySI%2FPtt0ioNGjxebu1IrTM%2Bd%2BP8RHoAvAXnF9DAE46Y%2Boq%2F3iU5VzPmPPXy1Z5LMkYz6qCBp7jyZa8NMo5rTjk9T5RVbdgKmBJXUg0gJAUrL%2Bf8J9lw6F6Pn5o3s8LVfOtmb6jIN3pHy7Pg3Y69hXI31j6jReyPHLRxArF3a053MjSZWRq2U0Z166hssvtSvPvRxiReahZWRjguwFdp6xl0L2nDk0rHVExAli6GGc02TowxurcxAY6pgHY7PESHH7X947FjDSjfJxSX5SoMMOnCZcelvu6xpJwYaQ6jN1uqgiY%2FeOBVZB4Su%2Bv8%2BVMxNpRFR%2B0qGoFJ8wWaF0tcYyopQFfL7DdeOh8FHspxea47%2B0%2B%2FReDDGGiSKmDqyuukr2tLZX8etGFG%2BDHo6dC%2BqN0Uuc9Kw0cUZ2T4lS9G07CL91a5FRFMC7QosaJZ0L7RQrqgWl9dXludZ0tD4wyjg9B&X-Amz-Signature=1b735357b2064fa8145e4a6055cfbd373ddf5e92db48d468600d6451bfa48409&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4WR6GJH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBNRisKmAjCQhJqx44gSTA7py2Astxm918uYthq5XwSAiBHYbnbjRotfLRP2DP0KaC8Ba4fc3aoC6DWtPD03%2BMhLiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc7MgzIhzAcNDd5QNKtwDHWwG3CVhxOqdxbOuUuDrTDzIxj8l51tyVngRHq2%2Bue%2FLHaBb6L%2FjJ14MSvPjnDjEZNsSSHdg7H9F0KDevLyJe%2Fg3oQrfGqJz6XvV9pqGhkMuAwoQENbXyE69hFaFkkqPwzTi78r%2BWyyAzm%2BxsBHKsx%2BF5Xcdt4sUB0D9w6%2BDdgnhvdVlYcMTWu9ytMBfIZFMwKAOXBhTsvJI6tXqDSJouotoBfvCXerO%2Bfv3fzHEoWnAri1%2B7qOmF7Ywp2012sQkNorLxsJtteYqfSS%2BUFcLq6iioq5cSYX3TQBur2syCuQqSH31b3PCE0u5tfHQFN0vF3OeO2uhHvztLXu8qlvix21uQwf0y4fQPiwKML9LojWOWdNAgOSPG5cziYz8vgUzkSHVxapbgbDhpMySI%2FPtt0ioNGjxebu1IrTM%2Bd%2BP8RHoAvAXnF9DAE46Y%2Boq%2F3iU5VzPmPPXy1Z5LMkYz6qCBp7jyZa8NMo5rTjk9T5RVbdgKmBJXUg0gJAUrL%2Bf8J9lw6F6Pn5o3s8LVfOtmb6jIN3pHy7Pg3Y69hXI31j6jReyPHLRxArF3a053MjSZWRq2U0Z166hssvtSvPvRxiReahZWRjguwFdp6xl0L2nDk0rHVExAli6GGc02TowxurcxAY6pgHY7PESHH7X947FjDSjfJxSX5SoMMOnCZcelvu6xpJwYaQ6jN1uqgiY%2FeOBVZB4Su%2Bv8%2BVMxNpRFR%2B0qGoFJ8wWaF0tcYyopQFfL7DdeOh8FHspxea47%2B0%2B%2FReDDGGiSKmDqyuukr2tLZX8etGFG%2BDHo6dC%2BqN0Uuc9Kw0cUZ2T4lS9G07CL91a5FRFMC7QosaJZ0L7RQrqgWl9dXludZ0tD4wyjg9B&X-Amz-Signature=7d89dcbd9d5cb0e132f4310b3de7ab8c1197a822fdd47947b4cc6a2f9c79a6d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We need to change the publisher topic type from `String` to `sensor_msg/JointState` and where it’s publishing too. Let us also import `JointState` type and some stuff we will use later.

```python
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

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4WR6GJH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBNRisKmAjCQhJqx44gSTA7py2Astxm918uYthq5XwSAiBHYbnbjRotfLRP2DP0KaC8Ba4fc3aoC6DWtPD03%2BMhLiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc7MgzIhzAcNDd5QNKtwDHWwG3CVhxOqdxbOuUuDrTDzIxj8l51tyVngRHq2%2Bue%2FLHaBb6L%2FjJ14MSvPjnDjEZNsSSHdg7H9F0KDevLyJe%2Fg3oQrfGqJz6XvV9pqGhkMuAwoQENbXyE69hFaFkkqPwzTi78r%2BWyyAzm%2BxsBHKsx%2BF5Xcdt4sUB0D9w6%2BDdgnhvdVlYcMTWu9ytMBfIZFMwKAOXBhTsvJI6tXqDSJouotoBfvCXerO%2Bfv3fzHEoWnAri1%2B7qOmF7Ywp2012sQkNorLxsJtteYqfSS%2BUFcLq6iioq5cSYX3TQBur2syCuQqSH31b3PCE0u5tfHQFN0vF3OeO2uhHvztLXu8qlvix21uQwf0y4fQPiwKML9LojWOWdNAgOSPG5cziYz8vgUzkSHVxapbgbDhpMySI%2FPtt0ioNGjxebu1IrTM%2Bd%2BP8RHoAvAXnF9DAE46Y%2Boq%2F3iU5VzPmPPXy1Z5LMkYz6qCBp7jyZa8NMo5rTjk9T5RVbdgKmBJXUg0gJAUrL%2Bf8J9lw6F6Pn5o3s8LVfOtmb6jIN3pHy7Pg3Y69hXI31j6jReyPHLRxArF3a053MjSZWRq2U0Z166hssvtSvPvRxiReahZWRjguwFdp6xl0L2nDk0rHVExAli6GGc02TowxurcxAY6pgHY7PESHH7X947FjDSjfJxSX5SoMMOnCZcelvu6xpJwYaQ6jN1uqgiY%2FeOBVZB4Su%2Bv8%2BVMxNpRFR%2B0qGoFJ8wWaF0tcYyopQFfL7DdeOh8FHspxea47%2B0%2B%2FReDDGGiSKmDqyuukr2tLZX8etGFG%2BDHo6dC%2BqN0Uuc9Kw0cUZ2T4lS9G07CL91a5FRFMC7QosaJZ0L7RQrqgWl9dXludZ0tD4wyjg9B&X-Amz-Signature=bc9c29f3246b934bee61a2110f9116bab1b40621c490196aa4021308de6859bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```python

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
      <summary>Final code:</summary>
      
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
      <summary>What if I don’t have a robot</summary>
      We can fake the wheel values by doing this
  </details>

## Testing my_node

**run:**

```python
ros2 run mbot_pkg my_node
```

**output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4WR6GJH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBNRisKmAjCQhJqx44gSTA7py2Astxm918uYthq5XwSAiBHYbnbjRotfLRP2DP0KaC8Ba4fc3aoC6DWtPD03%2BMhLiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc7MgzIhzAcNDd5QNKtwDHWwG3CVhxOqdxbOuUuDrTDzIxj8l51tyVngRHq2%2Bue%2FLHaBb6L%2FjJ14MSvPjnDjEZNsSSHdg7H9F0KDevLyJe%2Fg3oQrfGqJz6XvV9pqGhkMuAwoQENbXyE69hFaFkkqPwzTi78r%2BWyyAzm%2BxsBHKsx%2BF5Xcdt4sUB0D9w6%2BDdgnhvdVlYcMTWu9ytMBfIZFMwKAOXBhTsvJI6tXqDSJouotoBfvCXerO%2Bfv3fzHEoWnAri1%2B7qOmF7Ywp2012sQkNorLxsJtteYqfSS%2BUFcLq6iioq5cSYX3TQBur2syCuQqSH31b3PCE0u5tfHQFN0vF3OeO2uhHvztLXu8qlvix21uQwf0y4fQPiwKML9LojWOWdNAgOSPG5cziYz8vgUzkSHVxapbgbDhpMySI%2FPtt0ioNGjxebu1IrTM%2Bd%2BP8RHoAvAXnF9DAE46Y%2Boq%2F3iU5VzPmPPXy1Z5LMkYz6qCBp7jyZa8NMo5rTjk9T5RVbdgKmBJXUg0gJAUrL%2Bf8J9lw6F6Pn5o3s8LVfOtmb6jIN3pHy7Pg3Y69hXI31j6jReyPHLRxArF3a053MjSZWRq2U0Z166hssvtSvPvRxiReahZWRjguwFdp6xl0L2nDk0rHVExAli6GGc02TowxurcxAY6pgHY7PESHH7X947FjDSjfJxSX5SoMMOnCZcelvu6xpJwYaQ6jN1uqgiY%2FeOBVZB4Su%2Bv8%2BVMxNpRFR%2B0qGoFJ8wWaF0tcYyopQFfL7DdeOh8FHspxea47%2B0%2B%2FReDDGGiSKmDqyuukr2tLZX8etGFG%2BDHo6dC%2BqN0Uuc9Kw0cUZ2T4lS9G07CL91a5FRFMC7QosaJZ0L7RQrqgWl9dXludZ0tD4wyjg9B&X-Amz-Signature=9980968cec726bb7fcc94946a2c3d0dac8d8b9d27c4d78b4009f52680ac219df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4WR6GJH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBNRisKmAjCQhJqx44gSTA7py2Astxm918uYthq5XwSAiBHYbnbjRotfLRP2DP0KaC8Ba4fc3aoC6DWtPD03%2BMhLiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc7MgzIhzAcNDd5QNKtwDHWwG3CVhxOqdxbOuUuDrTDzIxj8l51tyVngRHq2%2Bue%2FLHaBb6L%2FjJ14MSvPjnDjEZNsSSHdg7H9F0KDevLyJe%2Fg3oQrfGqJz6XvV9pqGhkMuAwoQENbXyE69hFaFkkqPwzTi78r%2BWyyAzm%2BxsBHKsx%2BF5Xcdt4sUB0D9w6%2BDdgnhvdVlYcMTWu9ytMBfIZFMwKAOXBhTsvJI6tXqDSJouotoBfvCXerO%2Bfv3fzHEoWnAri1%2B7qOmF7Ywp2012sQkNorLxsJtteYqfSS%2BUFcLq6iioq5cSYX3TQBur2syCuQqSH31b3PCE0u5tfHQFN0vF3OeO2uhHvztLXu8qlvix21uQwf0y4fQPiwKML9LojWOWdNAgOSPG5cziYz8vgUzkSHVxapbgbDhpMySI%2FPtt0ioNGjxebu1IrTM%2Bd%2BP8RHoAvAXnF9DAE46Y%2Boq%2F3iU5VzPmPPXy1Z5LMkYz6qCBp7jyZa8NMo5rTjk9T5RVbdgKmBJXUg0gJAUrL%2Bf8J9lw6F6Pn5o3s8LVfOtmb6jIN3pHy7Pg3Y69hXI31j6jReyPHLRxArF3a053MjSZWRq2U0Z166hssvtSvPvRxiReahZWRjguwFdp6xl0L2nDk0rHVExAli6GGc02TowxurcxAY6pgHY7PESHH7X947FjDSjfJxSX5SoMMOnCZcelvu6xpJwYaQ6jN1uqgiY%2FeOBVZB4Su%2Bv8%2BVMxNpRFR%2B0qGoFJ8wWaF0tcYyopQFfL7DdeOh8FHspxea47%2B0%2B%2FReDDGGiSKmDqyuukr2tLZX8etGFG%2BDHo6dC%2BqN0Uuc9Kw0cUZ2T4lS9G07CL91a5FRFMC7QosaJZ0L7RQrqgWl9dXludZ0tD4wyjg9B&X-Amz-Signature=164dfdf473acd1024b74892cbfb776d74f4bf9d7767bf69a562f8e6c687b0bd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

comment out `joint_state_publisher_gui_node` in the launch file

```python
return LaunchDescription([
		# joint_state_publisher_gui_node, # debugs urdf joints
		robot_state_publisher_node,
		rviz_node,
])
```

in two different terminals run

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4WR6GJH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBNRisKmAjCQhJqx44gSTA7py2Astxm918uYthq5XwSAiBHYbnbjRotfLRP2DP0KaC8Ba4fc3aoC6DWtPD03%2BMhLiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc7MgzIhzAcNDd5QNKtwDHWwG3CVhxOqdxbOuUuDrTDzIxj8l51tyVngRHq2%2Bue%2FLHaBb6L%2FjJ14MSvPjnDjEZNsSSHdg7H9F0KDevLyJe%2Fg3oQrfGqJz6XvV9pqGhkMuAwoQENbXyE69hFaFkkqPwzTi78r%2BWyyAzm%2BxsBHKsx%2BF5Xcdt4sUB0D9w6%2BDdgnhvdVlYcMTWu9ytMBfIZFMwKAOXBhTsvJI6tXqDSJouotoBfvCXerO%2Bfv3fzHEoWnAri1%2B7qOmF7Ywp2012sQkNorLxsJtteYqfSS%2BUFcLq6iioq5cSYX3TQBur2syCuQqSH31b3PCE0u5tfHQFN0vF3OeO2uhHvztLXu8qlvix21uQwf0y4fQPiwKML9LojWOWdNAgOSPG5cziYz8vgUzkSHVxapbgbDhpMySI%2FPtt0ioNGjxebu1IrTM%2Bd%2BP8RHoAvAXnF9DAE46Y%2Boq%2F3iU5VzPmPPXy1Z5LMkYz6qCBp7jyZa8NMo5rTjk9T5RVbdgKmBJXUg0gJAUrL%2Bf8J9lw6F6Pn5o3s8LVfOtmb6jIN3pHy7Pg3Y69hXI31j6jReyPHLRxArF3a053MjSZWRq2U0Z166hssvtSvPvRxiReahZWRjguwFdp6xl0L2nDk0rHVExAli6GGc02TowxurcxAY6pgHY7PESHH7X947FjDSjfJxSX5SoMMOnCZcelvu6xpJwYaQ6jN1uqgiY%2FeOBVZB4Su%2Bv8%2BVMxNpRFR%2B0qGoFJ8wWaF0tcYyopQFfL7DdeOh8FHspxea47%2B0%2B%2FReDDGGiSKmDqyuukr2tLZX8etGFG%2BDHo6dC%2BqN0Uuc9Kw0cUZ2T4lS9G07CL91a5FRFMC7QosaJZ0L7RQrqgWl9dXludZ0tD4wyjg9B&X-Amz-Signature=704a3755e1ea2799413113663b454fdf4ef0a342b021a1f5567c0c70b3b7e5cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Updating launch file

Lets add `my_node` to the launch file

```python
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4WR6GJH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBNRisKmAjCQhJqx44gSTA7py2Astxm918uYthq5XwSAiBHYbnbjRotfLRP2DP0KaC8Ba4fc3aoC6DWtPD03%2BMhLiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc7MgzIhzAcNDd5QNKtwDHWwG3CVhxOqdxbOuUuDrTDzIxj8l51tyVngRHq2%2Bue%2FLHaBb6L%2FjJ14MSvPjnDjEZNsSSHdg7H9F0KDevLyJe%2Fg3oQrfGqJz6XvV9pqGhkMuAwoQENbXyE69hFaFkkqPwzTi78r%2BWyyAzm%2BxsBHKsx%2BF5Xcdt4sUB0D9w6%2BDdgnhvdVlYcMTWu9ytMBfIZFMwKAOXBhTsvJI6tXqDSJouotoBfvCXerO%2Bfv3fzHEoWnAri1%2B7qOmF7Ywp2012sQkNorLxsJtteYqfSS%2BUFcLq6iioq5cSYX3TQBur2syCuQqSH31b3PCE0u5tfHQFN0vF3OeO2uhHvztLXu8qlvix21uQwf0y4fQPiwKML9LojWOWdNAgOSPG5cziYz8vgUzkSHVxapbgbDhpMySI%2FPtt0ioNGjxebu1IrTM%2Bd%2BP8RHoAvAXnF9DAE46Y%2Boq%2F3iU5VzPmPPXy1Z5LMkYz6qCBp7jyZa8NMo5rTjk9T5RVbdgKmBJXUg0gJAUrL%2Bf8J9lw6F6Pn5o3s8LVfOtmb6jIN3pHy7Pg3Y69hXI31j6jReyPHLRxArF3a053MjSZWRq2U0Z166hssvtSvPvRxiReahZWRjguwFdp6xl0L2nDk0rHVExAli6GGc02TowxurcxAY6pgHY7PESHH7X947FjDSjfJxSX5SoMMOnCZcelvu6xpJwYaQ6jN1uqgiY%2FeOBVZB4Su%2Bv8%2BVMxNpRFR%2B0qGoFJ8wWaF0tcYyopQFfL7DdeOh8FHspxea47%2B0%2B%2FReDDGGiSKmDqyuukr2tLZX8etGFG%2BDHo6dC%2BqN0Uuc9Kw0cUZ2T4lS9G07CL91a5FRFMC7QosaJZ0L7RQrqgWl9dXludZ0tD4wyjg9B&X-Amz-Signature=b41bae8ef84ce40a12de4ba46ab79bc66b449f47ce722dd24fbe91e74eee16a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4WR6GJH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBNRisKmAjCQhJqx44gSTA7py2Astxm918uYthq5XwSAiBHYbnbjRotfLRP2DP0KaC8Ba4fc3aoC6DWtPD03%2BMhLiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc7MgzIhzAcNDd5QNKtwDHWwG3CVhxOqdxbOuUuDrTDzIxj8l51tyVngRHq2%2Bue%2FLHaBb6L%2FjJ14MSvPjnDjEZNsSSHdg7H9F0KDevLyJe%2Fg3oQrfGqJz6XvV9pqGhkMuAwoQENbXyE69hFaFkkqPwzTi78r%2BWyyAzm%2BxsBHKsx%2BF5Xcdt4sUB0D9w6%2BDdgnhvdVlYcMTWu9ytMBfIZFMwKAOXBhTsvJI6tXqDSJouotoBfvCXerO%2Bfv3fzHEoWnAri1%2B7qOmF7Ywp2012sQkNorLxsJtteYqfSS%2BUFcLq6iioq5cSYX3TQBur2syCuQqSH31b3PCE0u5tfHQFN0vF3OeO2uhHvztLXu8qlvix21uQwf0y4fQPiwKML9LojWOWdNAgOSPG5cziYz8vgUzkSHVxapbgbDhpMySI%2FPtt0ioNGjxebu1IrTM%2Bd%2BP8RHoAvAXnF9DAE46Y%2Boq%2F3iU5VzPmPPXy1Z5LMkYz6qCBp7jyZa8NMo5rTjk9T5RVbdgKmBJXUg0gJAUrL%2Bf8J9lw6F6Pn5o3s8LVfOtmb6jIN3pHy7Pg3Y69hXI31j6jReyPHLRxArF3a053MjSZWRq2U0Z166hssvtSvPvRxiReahZWRjguwFdp6xl0L2nDk0rHVExAli6GGc02TowxurcxAY6pgHY7PESHH7X947FjDSjfJxSX5SoMMOnCZcelvu6xpJwYaQ6jN1uqgiY%2FeOBVZB4Su%2Bv8%2BVMxNpRFR%2B0qGoFJ8wWaF0tcYyopQFfL7DdeOh8FHspxea47%2B0%2B%2FReDDGGiSKmDqyuukr2tLZX8etGFG%2BDHo6dC%2BqN0Uuc9Kw0cUZ2T4lS9G07CL91a5FRFMC7QosaJZ0L7RQrqgWl9dXludZ0tD4wyjg9B&X-Amz-Signature=f4b7ee775dec205b2b0f0d2440750a84a42def95c3d4fedff38b2a4e2f858270&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ECQ4SSX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB3KhmJMPTUxpL5CJin3PHc1WpHS3zuLVnU5DORon19vAiEAvFRXou7P7iJv4L0G%2BH1j6x4BpLKZyW2svFfuX0HZnD8qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHnE2ryWFCOKML81KCrcA64e9%2B2sifSl3w%2BgrZzvQeed%2F2CyfHUekp9Iqq6ilozOThuT4WKqIw9MeCJkW%2Frh%2BTs4S1vuIWNAw1HJGvZrJ2ivZ04X44Bqo4Hx88R7cxohBI8tcspjen4%2FxApY2ESuVBriMccdmVVRdZH14DoDoP%2By9r6e5k7YtKyB3noau3M9XvGl%2BKfL9Rp5ujM1%2BFybFEcP9bsD29wEW3g0s9bhTBu7PN%2F1Hyli02eLWAJli4rmcmic0T%2Fi74yXn%2B%2BHKmQrHYCpW8QLf2Bpq0hYlgFGWyjiXXbWW1vfxf9VDvVw4HWxurOlxmfqpyu%2BILliSQtg2%2FBS57R%2BlQt%2F6%2BFjGCVmZBMiYNM9z47AwGJK7uod2nU16MyQY0s4mMHax9DH%2BJhB0klUBEXv7BrcL5L7mJXgQIgY47pwmvBNwb2lj1kO3CA8b2uL5pDIl9KDppTBH3XOacWpXh%2FT0SjWQTJG4J3BNCnX9%2Bv0WsbUf1sDQzVbzfztH6%2FyvgGaJEIxfhdZ4hkPaLgVHPkH8YbFdvI5D9F8zT%2FNZePbKaTR5ngs7zvcfuxaVDBe29%2F1w9BjqV%2BYBb5xiNRwcXdNuDWyeLrXVgGxdupm6x7PRuk68iiKYLZxZwoO2uW81t%2FvrIXySYE4MMzo3MQGOqUBCE6%2FHjyAKWn1DuxJZ3Se1I8cKxr84m2fTL9tpZpCTQJD61s3z0FdQOS6nqecICturEp4E1Lsac4DrGtz%2F0YW4IjkRXYoyoM8ccqMJzwyweZMvFkpiTeiw%2BO7%2Bx%2BiRuZiaim1fGSzz6Z5ybbpT8erbbNYBuHpQiXS3AYNSKdhVEXn7nb7N1BJoKWxtVkqgvxunfxtccIlPPihtodvIqE6Fm6uOYyf&X-Amz-Signature=0e891f1fbdb6a9618acbbb44b675c05a210674c31fee02835c7118424efa8da7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

```python
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

```python
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

```python
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

```python
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YANGQPXI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgRc1Exqi8rLlHlJJ1p5%2FT2ju0lGSeVgaANSFLu0%2FnPgIhAJR88SQDHdrrlzjDxwoBvV4H5FoM1aMgTuCh%2FCjnenoIKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoJcsoiIeSkTgjIaYq3AMX1bXA%2Bwz%2F87CRhU%2FM3hLf1%2BwH11IkHW8AXICBz%2BV3w8%2FoQxuFIZnAKBTUKDlnTHTyLTJobBInYRmZVu4LECT93dfm%2BDWPaF%2FNpvAWLkKeJhtYTK6%2BS2bqzih2QtoNilfF4STv1PaxIAkeo1Ur3MzpMUVTIU%2BSYzWDKRE6DJ9SQdExk6T0P5CroffLOnemCH0UadN7UDMHQ64709NbBOW%2BXnHHvxLDn8%2ByEH5YQ4w%2FanxXsd9MlM6PQDvxV%2BMQJYH7vifTnJ4lBYnHAPosj5932ti6azXR4TRhBQWEohSZFmirNieGcNkZptYXy9S4RJ8KGp0uqEvTjBFGl%2FpdYUI%2BCwC0ugEEdAekTou1Cjdqf9I3dHfKrsNCCf4%2FV1M1TZOnAvshs%2FgTES%2FnoWDDrFHdPI%2FPmspTY%2F45eT%2BTBsxXdzRokq18Or9MesThk5bEhNsaUCDq8NdeFD8J1O1nrUMVxt13TkMtrXcxY9%2F6PGTiIwZ95ZykgbI0R5Kf6OQ1Z2pBk8Ll2xuRGVJDyCaMcAbydiHkRWlQVqmQC87wRsVnTYx%2FtyQjq9pK0MLfX7Tnzb3INdZ75vGgbbFpJw2LutJTcYlsvOZ4ns4WEh2hJyqjotUcJXo31K%2FnYJuQxTCX59zEBjqkATuSPcgusADCGxUvuFtLxKFsyVKZIy1AP9PQKd1A4v5zSet8Bp5qdXCiryvCqvoSWXrcwxPkEaAztTMxFpVVGmcdBwdOgUmtQRcZpbsuCp15%2Fxv%2B9eFa6WIzIfqhKozUQcqq0tedStPhL4uCT%2FnSuxYgwMXYaStsuNCAFyM1ej1Od9dULjKZdAEhkXZiIMrssvrzqKU8n0Jwfp%2BzvLMkiiDUoCAa&X-Amz-Signature=f88b52058a525b6dd66cfeecd283ac9e5e3de55408fd46bd111468c2fc6d3d8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YANGQPXI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgRc1Exqi8rLlHlJJ1p5%2FT2ju0lGSeVgaANSFLu0%2FnPgIhAJR88SQDHdrrlzjDxwoBvV4H5FoM1aMgTuCh%2FCjnenoIKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoJcsoiIeSkTgjIaYq3AMX1bXA%2Bwz%2F87CRhU%2FM3hLf1%2BwH11IkHW8AXICBz%2BV3w8%2FoQxuFIZnAKBTUKDlnTHTyLTJobBInYRmZVu4LECT93dfm%2BDWPaF%2FNpvAWLkKeJhtYTK6%2BS2bqzih2QtoNilfF4STv1PaxIAkeo1Ur3MzpMUVTIU%2BSYzWDKRE6DJ9SQdExk6T0P5CroffLOnemCH0UadN7UDMHQ64709NbBOW%2BXnHHvxLDn8%2ByEH5YQ4w%2FanxXsd9MlM6PQDvxV%2BMQJYH7vifTnJ4lBYnHAPosj5932ti6azXR4TRhBQWEohSZFmirNieGcNkZptYXy9S4RJ8KGp0uqEvTjBFGl%2FpdYUI%2BCwC0ugEEdAekTou1Cjdqf9I3dHfKrsNCCf4%2FV1M1TZOnAvshs%2FgTES%2FnoWDDrFHdPI%2FPmspTY%2F45eT%2BTBsxXdzRokq18Or9MesThk5bEhNsaUCDq8NdeFD8J1O1nrUMVxt13TkMtrXcxY9%2F6PGTiIwZ95ZykgbI0R5Kf6OQ1Z2pBk8Ll2xuRGVJDyCaMcAbydiHkRWlQVqmQC87wRsVnTYx%2FtyQjq9pK0MLfX7Tnzb3INdZ75vGgbbFpJw2LutJTcYlsvOZ4ns4WEh2hJyqjotUcJXo31K%2FnYJuQxTCX59zEBjqkATuSPcgusADCGxUvuFtLxKFsyVKZIy1AP9PQKd1A4v5zSet8Bp5qdXCiryvCqvoSWXrcwxPkEaAztTMxFpVVGmcdBwdOgUmtQRcZpbsuCp15%2Fxv%2B9eFa6WIzIfqhKozUQcqq0tedStPhL4uCT%2FnSuxYgwMXYaStsuNCAFyM1ej1Od9dULjKZdAEhkXZiIMrssvrzqKU8n0Jwfp%2BzvLMkiiDUoCAa&X-Amz-Signature=4d6fcfd5ff61b0abc7e7b520800267942ac5935e2d3be16749c8646879d1397a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YANGQPXI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgRc1Exqi8rLlHlJJ1p5%2FT2ju0lGSeVgaANSFLu0%2FnPgIhAJR88SQDHdrrlzjDxwoBvV4H5FoM1aMgTuCh%2FCjnenoIKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoJcsoiIeSkTgjIaYq3AMX1bXA%2Bwz%2F87CRhU%2FM3hLf1%2BwH11IkHW8AXICBz%2BV3w8%2FoQxuFIZnAKBTUKDlnTHTyLTJobBInYRmZVu4LECT93dfm%2BDWPaF%2FNpvAWLkKeJhtYTK6%2BS2bqzih2QtoNilfF4STv1PaxIAkeo1Ur3MzpMUVTIU%2BSYzWDKRE6DJ9SQdExk6T0P5CroffLOnemCH0UadN7UDMHQ64709NbBOW%2BXnHHvxLDn8%2ByEH5YQ4w%2FanxXsd9MlM6PQDvxV%2BMQJYH7vifTnJ4lBYnHAPosj5932ti6azXR4TRhBQWEohSZFmirNieGcNkZptYXy9S4RJ8KGp0uqEvTjBFGl%2FpdYUI%2BCwC0ugEEdAekTou1Cjdqf9I3dHfKrsNCCf4%2FV1M1TZOnAvshs%2FgTES%2FnoWDDrFHdPI%2FPmspTY%2F45eT%2BTBsxXdzRokq18Or9MesThk5bEhNsaUCDq8NdeFD8J1O1nrUMVxt13TkMtrXcxY9%2F6PGTiIwZ95ZykgbI0R5Kf6OQ1Z2pBk8Ll2xuRGVJDyCaMcAbydiHkRWlQVqmQC87wRsVnTYx%2FtyQjq9pK0MLfX7Tnzb3INdZ75vGgbbFpJw2LutJTcYlsvOZ4ns4WEh2hJyqjotUcJXo31K%2FnYJuQxTCX59zEBjqkATuSPcgusADCGxUvuFtLxKFsyVKZIy1AP9PQKd1A4v5zSet8Bp5qdXCiryvCqvoSWXrcwxPkEaAztTMxFpVVGmcdBwdOgUmtQRcZpbsuCp15%2Fxv%2B9eFa6WIzIfqhKozUQcqq0tedStPhL4uCT%2FnSuxYgwMXYaStsuNCAFyM1ej1Od9dULjKZdAEhkXZiIMrssvrzqKU8n0Jwfp%2BzvLMkiiDUoCAa&X-Amz-Signature=8882ac77b979d3a15bdfdc831a0388123f6b22767a270754092aaeb5609c8da1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```python

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YANGQPXI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgRc1Exqi8rLlHlJJ1p5%2FT2ju0lGSeVgaANSFLu0%2FnPgIhAJR88SQDHdrrlzjDxwoBvV4H5FoM1aMgTuCh%2FCjnenoIKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoJcsoiIeSkTgjIaYq3AMX1bXA%2Bwz%2F87CRhU%2FM3hLf1%2BwH11IkHW8AXICBz%2BV3w8%2FoQxuFIZnAKBTUKDlnTHTyLTJobBInYRmZVu4LECT93dfm%2BDWPaF%2FNpvAWLkKeJhtYTK6%2BS2bqzih2QtoNilfF4STv1PaxIAkeo1Ur3MzpMUVTIU%2BSYzWDKRE6DJ9SQdExk6T0P5CroffLOnemCH0UadN7UDMHQ64709NbBOW%2BXnHHvxLDn8%2ByEH5YQ4w%2FanxXsd9MlM6PQDvxV%2BMQJYH7vifTnJ4lBYnHAPosj5932ti6azXR4TRhBQWEohSZFmirNieGcNkZptYXy9S4RJ8KGp0uqEvTjBFGl%2FpdYUI%2BCwC0ugEEdAekTou1Cjdqf9I3dHfKrsNCCf4%2FV1M1TZOnAvshs%2FgTES%2FnoWDDrFHdPI%2FPmspTY%2F45eT%2BTBsxXdzRokq18Or9MesThk5bEhNsaUCDq8NdeFD8J1O1nrUMVxt13TkMtrXcxY9%2F6PGTiIwZ95ZykgbI0R5Kf6OQ1Z2pBk8Ll2xuRGVJDyCaMcAbydiHkRWlQVqmQC87wRsVnTYx%2FtyQjq9pK0MLfX7Tnzb3INdZ75vGgbbFpJw2LutJTcYlsvOZ4ns4WEh2hJyqjotUcJXo31K%2FnYJuQxTCX59zEBjqkATuSPcgusADCGxUvuFtLxKFsyVKZIy1AP9PQKd1A4v5zSet8Bp5qdXCiryvCqvoSWXrcwxPkEaAztTMxFpVVGmcdBwdOgUmtQRcZpbsuCp15%2Fxv%2B9eFa6WIzIfqhKozUQcqq0tedStPhL4uCT%2FnSuxYgwMXYaStsuNCAFyM1ej1Od9dULjKZdAEhkXZiIMrssvrzqKU8n0Jwfp%2BzvLMkiiDUoCAa&X-Amz-Signature=c3fcb6735c1cfdddb8ac47cb317b4710d65e0aed0bfd5449d6cd2dc766dcf2de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**   | **Type**           |
| ---------- | ------------------ |
| `/cmd_vel` | geometry_msg/Twist |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**  | **Type** |
| --------- | -------- |
| `stamped` | bool     |

{{< /table >}}

#### description:

Lets you drive your robot with your keyboard

publishes geometry_msg/Twist on the `/cmd_vel` topic

{{% /alert %}}

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YANGQPXI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgRc1Exqi8rLlHlJJ1p5%2FT2ju0lGSeVgaANSFLu0%2FnPgIhAJR88SQDHdrrlzjDxwoBvV4H5FoM1aMgTuCh%2FCjnenoIKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoJcsoiIeSkTgjIaYq3AMX1bXA%2Bwz%2F87CRhU%2FM3hLf1%2BwH11IkHW8AXICBz%2BV3w8%2FoQxuFIZnAKBTUKDlnTHTyLTJobBInYRmZVu4LECT93dfm%2BDWPaF%2FNpvAWLkKeJhtYTK6%2BS2bqzih2QtoNilfF4STv1PaxIAkeo1Ur3MzpMUVTIU%2BSYzWDKRE6DJ9SQdExk6T0P5CroffLOnemCH0UadN7UDMHQ64709NbBOW%2BXnHHvxLDn8%2ByEH5YQ4w%2FanxXsd9MlM6PQDvxV%2BMQJYH7vifTnJ4lBYnHAPosj5932ti6azXR4TRhBQWEohSZFmirNieGcNkZptYXy9S4RJ8KGp0uqEvTjBFGl%2FpdYUI%2BCwC0ugEEdAekTou1Cjdqf9I3dHfKrsNCCf4%2FV1M1TZOnAvshs%2FgTES%2FnoWDDrFHdPI%2FPmspTY%2F45eT%2BTBsxXdzRokq18Or9MesThk5bEhNsaUCDq8NdeFD8J1O1nrUMVxt13TkMtrXcxY9%2F6PGTiIwZ95ZykgbI0R5Kf6OQ1Z2pBk8Ll2xuRGVJDyCaMcAbydiHkRWlQVqmQC87wRsVnTYx%2FtyQjq9pK0MLfX7Tnzb3INdZ75vGgbbFpJw2LutJTcYlsvOZ4ns4WEh2hJyqjotUcJXo31K%2FnYJuQxTCX59zEBjqkATuSPcgusADCGxUvuFtLxKFsyVKZIy1AP9PQKd1A4v5zSet8Bp5qdXCiryvCqvoSWXrcwxPkEaAztTMxFpVVGmcdBwdOgUmtQRcZpbsuCp15%2Fxv%2B9eFa6WIzIfqhKozUQcqq0tedStPhL4uCT%2FnSuxYgwMXYaStsuNCAFyM1ej1Od9dULjKZdAEhkXZiIMrssvrzqKU8n0Jwfp%2BzvLMkiiDUoCAa&X-Amz-Signature=f3acfe7480b50186589aee93b712fea3f7b86f0c44e7c1af2a3beee3b968637e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YANGQPXI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgRc1Exqi8rLlHlJJ1p5%2FT2ju0lGSeVgaANSFLu0%2FnPgIhAJR88SQDHdrrlzjDxwoBvV4H5FoM1aMgTuCh%2FCjnenoIKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoJcsoiIeSkTgjIaYq3AMX1bXA%2Bwz%2F87CRhU%2FM3hLf1%2BwH11IkHW8AXICBz%2BV3w8%2FoQxuFIZnAKBTUKDlnTHTyLTJobBInYRmZVu4LECT93dfm%2BDWPaF%2FNpvAWLkKeJhtYTK6%2BS2bqzih2QtoNilfF4STv1PaxIAkeo1Ur3MzpMUVTIU%2BSYzWDKRE6DJ9SQdExk6T0P5CroffLOnemCH0UadN7UDMHQ64709NbBOW%2BXnHHvxLDn8%2ByEH5YQ4w%2FanxXsd9MlM6PQDvxV%2BMQJYH7vifTnJ4lBYnHAPosj5932ti6azXR4TRhBQWEohSZFmirNieGcNkZptYXy9S4RJ8KGp0uqEvTjBFGl%2FpdYUI%2BCwC0ugEEdAekTou1Cjdqf9I3dHfKrsNCCf4%2FV1M1TZOnAvshs%2FgTES%2FnoWDDrFHdPI%2FPmspTY%2F45eT%2BTBsxXdzRokq18Or9MesThk5bEhNsaUCDq8NdeFD8J1O1nrUMVxt13TkMtrXcxY9%2F6PGTiIwZ95ZykgbI0R5Kf6OQ1Z2pBk8Ll2xuRGVJDyCaMcAbydiHkRWlQVqmQC87wRsVnTYx%2FtyQjq9pK0MLfX7Tnzb3INdZ75vGgbbFpJw2LutJTcYlsvOZ4ns4WEh2hJyqjotUcJXo31K%2FnYJuQxTCX59zEBjqkATuSPcgusADCGxUvuFtLxKFsyVKZIy1AP9PQKd1A4v5zSet8Bp5qdXCiryvCqvoSWXrcwxPkEaAztTMxFpVVGmcdBwdOgUmtQRcZpbsuCp15%2Fxv%2B9eFa6WIzIfqhKozUQcqq0tedStPhL4uCT%2FnSuxYgwMXYaStsuNCAFyM1ej1Od9dULjKZdAEhkXZiIMrssvrzqKU8n0Jwfp%2BzvLMkiiDUoCAa&X-Amz-Signature=68f45faef5bef42281dd2c7e3ca9d697ae5e49a531b05e919ae0ad89d647cb4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YANGQPXI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgRc1Exqi8rLlHlJJ1p5%2FT2ju0lGSeVgaANSFLu0%2FnPgIhAJR88SQDHdrrlzjDxwoBvV4H5FoM1aMgTuCh%2FCjnenoIKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoJcsoiIeSkTgjIaYq3AMX1bXA%2Bwz%2F87CRhU%2FM3hLf1%2BwH11IkHW8AXICBz%2BV3w8%2FoQxuFIZnAKBTUKDlnTHTyLTJobBInYRmZVu4LECT93dfm%2BDWPaF%2FNpvAWLkKeJhtYTK6%2BS2bqzih2QtoNilfF4STv1PaxIAkeo1Ur3MzpMUVTIU%2BSYzWDKRE6DJ9SQdExk6T0P5CroffLOnemCH0UadN7UDMHQ64709NbBOW%2BXnHHvxLDn8%2ByEH5YQ4w%2FanxXsd9MlM6PQDvxV%2BMQJYH7vifTnJ4lBYnHAPosj5932ti6azXR4TRhBQWEohSZFmirNieGcNkZptYXy9S4RJ8KGp0uqEvTjBFGl%2FpdYUI%2BCwC0ugEEdAekTou1Cjdqf9I3dHfKrsNCCf4%2FV1M1TZOnAvshs%2FgTES%2FnoWDDrFHdPI%2FPmspTY%2F45eT%2BTBsxXdzRokq18Or9MesThk5bEhNsaUCDq8NdeFD8J1O1nrUMVxt13TkMtrXcxY9%2F6PGTiIwZ95ZykgbI0R5Kf6OQ1Z2pBk8Ll2xuRGVJDyCaMcAbydiHkRWlQVqmQC87wRsVnTYx%2FtyQjq9pK0MLfX7Tnzb3INdZ75vGgbbFpJw2LutJTcYlsvOZ4ns4WEh2hJyqjotUcJXo31K%2FnYJuQxTCX59zEBjqkATuSPcgusADCGxUvuFtLxKFsyVKZIy1AP9PQKd1A4v5zSet8Bp5qdXCiryvCqvoSWXrcwxPkEaAztTMxFpVVGmcdBwdOgUmtQRcZpbsuCp15%2Fxv%2B9eFa6WIzIfqhKozUQcqq0tedStPhL4uCT%2FnSuxYgwMXYaStsuNCAFyM1ej1Od9dULjKZdAEhkXZiIMrssvrzqKU8n0Jwfp%2BzvLMkiiDUoCAa&X-Amz-Signature=3bd362645ab21b172e9022a9f41d21e9684ef2a03682d20630526945c2bbcf15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YANGQPXI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgRc1Exqi8rLlHlJJ1p5%2FT2ju0lGSeVgaANSFLu0%2FnPgIhAJR88SQDHdrrlzjDxwoBvV4H5FoM1aMgTuCh%2FCjnenoIKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoJcsoiIeSkTgjIaYq3AMX1bXA%2Bwz%2F87CRhU%2FM3hLf1%2BwH11IkHW8AXICBz%2BV3w8%2FoQxuFIZnAKBTUKDlnTHTyLTJobBInYRmZVu4LECT93dfm%2BDWPaF%2FNpvAWLkKeJhtYTK6%2BS2bqzih2QtoNilfF4STv1PaxIAkeo1Ur3MzpMUVTIU%2BSYzWDKRE6DJ9SQdExk6T0P5CroffLOnemCH0UadN7UDMHQ64709NbBOW%2BXnHHvxLDn8%2ByEH5YQ4w%2FanxXsd9MlM6PQDvxV%2BMQJYH7vifTnJ4lBYnHAPosj5932ti6azXR4TRhBQWEohSZFmirNieGcNkZptYXy9S4RJ8KGp0uqEvTjBFGl%2FpdYUI%2BCwC0ugEEdAekTou1Cjdqf9I3dHfKrsNCCf4%2FV1M1TZOnAvshs%2FgTES%2FnoWDDrFHdPI%2FPmspTY%2F45eT%2BTBsxXdzRokq18Or9MesThk5bEhNsaUCDq8NdeFD8J1O1nrUMVxt13TkMtrXcxY9%2F6PGTiIwZ95ZykgbI0R5Kf6OQ1Z2pBk8Ll2xuRGVJDyCaMcAbydiHkRWlQVqmQC87wRsVnTYx%2FtyQjq9pK0MLfX7Tnzb3INdZ75vGgbbFpJw2LutJTcYlsvOZ4ns4WEh2hJyqjotUcJXo31K%2FnYJuQxTCX59zEBjqkATuSPcgusADCGxUvuFtLxKFsyVKZIy1AP9PQKd1A4v5zSet8Bp5qdXCiryvCqvoSWXrcwxPkEaAztTMxFpVVGmcdBwdOgUmtQRcZpbsuCp15%2Fxv%2B9eFa6WIzIfqhKozUQcqq0tedStPhL4uCT%2FnSuxYgwMXYaStsuNCAFyM1ej1Od9dULjKZdAEhkXZiIMrssvrzqKU8n0Jwfp%2BzvLMkiiDUoCAa&X-Amz-Signature=619d6e566d39440cfcce959e4f454fe0c4794926633f1bf805f1d27e6435166a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YANGQPXI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgRc1Exqi8rLlHlJJ1p5%2FT2ju0lGSeVgaANSFLu0%2FnPgIhAJR88SQDHdrrlzjDxwoBvV4H5FoM1aMgTuCh%2FCjnenoIKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoJcsoiIeSkTgjIaYq3AMX1bXA%2Bwz%2F87CRhU%2FM3hLf1%2BwH11IkHW8AXICBz%2BV3w8%2FoQxuFIZnAKBTUKDlnTHTyLTJobBInYRmZVu4LECT93dfm%2BDWPaF%2FNpvAWLkKeJhtYTK6%2BS2bqzih2QtoNilfF4STv1PaxIAkeo1Ur3MzpMUVTIU%2BSYzWDKRE6DJ9SQdExk6T0P5CroffLOnemCH0UadN7UDMHQ64709NbBOW%2BXnHHvxLDn8%2ByEH5YQ4w%2FanxXsd9MlM6PQDvxV%2BMQJYH7vifTnJ4lBYnHAPosj5932ti6azXR4TRhBQWEohSZFmirNieGcNkZptYXy9S4RJ8KGp0uqEvTjBFGl%2FpdYUI%2BCwC0ugEEdAekTou1Cjdqf9I3dHfKrsNCCf4%2FV1M1TZOnAvshs%2FgTES%2FnoWDDrFHdPI%2FPmspTY%2F45eT%2BTBsxXdzRokq18Or9MesThk5bEhNsaUCDq8NdeFD8J1O1nrUMVxt13TkMtrXcxY9%2F6PGTiIwZ95ZykgbI0R5Kf6OQ1Z2pBk8Ll2xuRGVJDyCaMcAbydiHkRWlQVqmQC87wRsVnTYx%2FtyQjq9pK0MLfX7Tnzb3INdZ75vGgbbFpJw2LutJTcYlsvOZ4ns4WEh2hJyqjotUcJXo31K%2FnYJuQxTCX59zEBjqkATuSPcgusADCGxUvuFtLxKFsyVKZIy1AP9PQKd1A4v5zSet8Bp5qdXCiryvCqvoSWXrcwxPkEaAztTMxFpVVGmcdBwdOgUmtQRcZpbsuCp15%2Fxv%2B9eFa6WIzIfqhKozUQcqq0tedStPhL4uCT%2FnSuxYgwMXYaStsuNCAFyM1ej1Od9dULjKZdAEhkXZiIMrssvrzqKU8n0Jwfp%2BzvLMkiiDUoCAa&X-Amz-Signature=1124d0cf6cc1948a8f66fc2e4944d2d10d36a8168d21be777d757d78ca5d1c5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```python
       
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
      <summary>Final code</summary>
      
  </details>

For those who are curious ROS does provide a Localization node which does most of the work we did above:

- [integrating localization_node](https://docs.nav2.org/setup_guides/odom/setup_robot_localization.html)
- [official localization node guide](https://docs.ros.org/en/melodic/api/robot_localization/html/index.html)

The `localization_node` is useful for doing sensor fusion when you also have an IMU or GPS to add to the localization.
