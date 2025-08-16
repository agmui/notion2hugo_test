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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSTK7K55%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFLtk9K0AJc1r73K95B%2BaKltjmddo354XI9z%2B3tp010kAiEA7cCTGmbaj5jFJhe2OeHusalOTz%2Bcwc6K2%2BzfhMR9zlkq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOujnyF7pS%2FqM2sv0CrcAzKQnt0e4qWB7TkBzetguHZjL7i1U4VXu3J%2Bj7bgFtI0hyhueVtIROt2tJ1kHGjXi7W7LPaX1t%2F278ESC11pY3VBC6n7bgHUIgbs2bPm89Us0R0icpW0JxH6%2BZ9b1dCVLgXHr4OGpajb3nXlQLOe04SLxYVwbkQMmP2wx7GvOhiZ5gMiENPQGi57vbXnuu2SFdvoVSX5zYv6vZCl%2B5%2Fh%2BhFJwfdL%2BUXyf0sjBwZJxWUMtop%2BSeo8tpezznTlVgeoXInQ50Jit4fqaFd4mdeyiMRVYri6nKAhW8r6sqFHWF495gVPF0S%2B71rZ3C1in9MFFNDjxjnuA9mDYBOGWE5yXZrUIQMLOWOvf2j5UNgvVBXT71xZhI9DSewWOET%2FLAElSAfps6hbPJ9qaGrkFyNQnyPa7rm%2BB0AizGZJ5LHzK2uZG9wKJnhuvTd1OqKvbSJjW6EjlOKaQDkiTbHh766e1PRJLTZzrXSoOcXBC9Ft3DfquR6JLBTi0B1wzMuEUivBvX%2BTGCgE%2BYigt7n7i4%2B%2F%2F1GmlMj%2BCeO4Hv6ZrYsgTEbHO8xsvimnUQ6JLa786LJEdgpgCcyfyLFmrgaEbytt8qSw5QC9KKjUV4M4LpNIgQLeWjwUjWhRXOgB9R9%2FMP73gMUGOqUBPWpM4%2FJSRc5nAs2QZXSvVm4vr5oUx9cFU0V2cxDwNsfdm%2BZs1oQUBZijKJsSy0lJ2xWUS8OU921eqHxcuw8pSNqkBVa0E%2BHkR6f%2BIkCEHeW0tPc0h8xdO9kvB77V6VY4FtA4rR6qiqATJheRIJSXdjNTS0vAeBb%2FzGJapLq76l0nqkuEROlmAFHhQ4O0Xkj7bOfDJyzfEqOPRGuc0KexHXemFG8U&X-Amz-Signature=f57d7c64fed6cd93784f2c3fdc4ea9c5c921acfb594e6ff7ddf1d113ae2f8a5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSTK7K55%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFLtk9K0AJc1r73K95B%2BaKltjmddo354XI9z%2B3tp010kAiEA7cCTGmbaj5jFJhe2OeHusalOTz%2Bcwc6K2%2BzfhMR9zlkq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOujnyF7pS%2FqM2sv0CrcAzKQnt0e4qWB7TkBzetguHZjL7i1U4VXu3J%2Bj7bgFtI0hyhueVtIROt2tJ1kHGjXi7W7LPaX1t%2F278ESC11pY3VBC6n7bgHUIgbs2bPm89Us0R0icpW0JxH6%2BZ9b1dCVLgXHr4OGpajb3nXlQLOe04SLxYVwbkQMmP2wx7GvOhiZ5gMiENPQGi57vbXnuu2SFdvoVSX5zYv6vZCl%2B5%2Fh%2BhFJwfdL%2BUXyf0sjBwZJxWUMtop%2BSeo8tpezznTlVgeoXInQ50Jit4fqaFd4mdeyiMRVYri6nKAhW8r6sqFHWF495gVPF0S%2B71rZ3C1in9MFFNDjxjnuA9mDYBOGWE5yXZrUIQMLOWOvf2j5UNgvVBXT71xZhI9DSewWOET%2FLAElSAfps6hbPJ9qaGrkFyNQnyPa7rm%2BB0AizGZJ5LHzK2uZG9wKJnhuvTd1OqKvbSJjW6EjlOKaQDkiTbHh766e1PRJLTZzrXSoOcXBC9Ft3DfquR6JLBTi0B1wzMuEUivBvX%2BTGCgE%2BYigt7n7i4%2B%2F%2F1GmlMj%2BCeO4Hv6ZrYsgTEbHO8xsvimnUQ6JLa786LJEdgpgCcyfyLFmrgaEbytt8qSw5QC9KKjUV4M4LpNIgQLeWjwUjWhRXOgB9R9%2FMP73gMUGOqUBPWpM4%2FJSRc5nAs2QZXSvVm4vr5oUx9cFU0V2cxDwNsfdm%2BZs1oQUBZijKJsSy0lJ2xWUS8OU921eqHxcuw8pSNqkBVa0E%2BHkR6f%2BIkCEHeW0tPc0h8xdO9kvB77V6VY4FtA4rR6qiqATJheRIJSXdjNTS0vAeBb%2FzGJapLq76l0nqkuEROlmAFHhQ4O0Xkj7bOfDJyzfEqOPRGuc0KexHXemFG8U&X-Amz-Signature=cf6103661932ffa1a0a0ed8ba0fd1c7764593423fce557ee90ca6189a76d259c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSTK7K55%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFLtk9K0AJc1r73K95B%2BaKltjmddo354XI9z%2B3tp010kAiEA7cCTGmbaj5jFJhe2OeHusalOTz%2Bcwc6K2%2BzfhMR9zlkq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOujnyF7pS%2FqM2sv0CrcAzKQnt0e4qWB7TkBzetguHZjL7i1U4VXu3J%2Bj7bgFtI0hyhueVtIROt2tJ1kHGjXi7W7LPaX1t%2F278ESC11pY3VBC6n7bgHUIgbs2bPm89Us0R0icpW0JxH6%2BZ9b1dCVLgXHr4OGpajb3nXlQLOe04SLxYVwbkQMmP2wx7GvOhiZ5gMiENPQGi57vbXnuu2SFdvoVSX5zYv6vZCl%2B5%2Fh%2BhFJwfdL%2BUXyf0sjBwZJxWUMtop%2BSeo8tpezznTlVgeoXInQ50Jit4fqaFd4mdeyiMRVYri6nKAhW8r6sqFHWF495gVPF0S%2B71rZ3C1in9MFFNDjxjnuA9mDYBOGWE5yXZrUIQMLOWOvf2j5UNgvVBXT71xZhI9DSewWOET%2FLAElSAfps6hbPJ9qaGrkFyNQnyPa7rm%2BB0AizGZJ5LHzK2uZG9wKJnhuvTd1OqKvbSJjW6EjlOKaQDkiTbHh766e1PRJLTZzrXSoOcXBC9Ft3DfquR6JLBTi0B1wzMuEUivBvX%2BTGCgE%2BYigt7n7i4%2B%2F%2F1GmlMj%2BCeO4Hv6ZrYsgTEbHO8xsvimnUQ6JLa786LJEdgpgCcyfyLFmrgaEbytt8qSw5QC9KKjUV4M4LpNIgQLeWjwUjWhRXOgB9R9%2FMP73gMUGOqUBPWpM4%2FJSRc5nAs2QZXSvVm4vr5oUx9cFU0V2cxDwNsfdm%2BZs1oQUBZijKJsSy0lJ2xWUS8OU921eqHxcuw8pSNqkBVa0E%2BHkR6f%2BIkCEHeW0tPc0h8xdO9kvB77V6VY4FtA4rR6qiqATJheRIJSXdjNTS0vAeBb%2FzGJapLq76l0nqkuEROlmAFHhQ4O0Xkj7bOfDJyzfEqOPRGuc0KexHXemFG8U&X-Amz-Signature=963e116ae065bb735881c4e81ccb0fa528842bd4772f456476660e0718bd0fba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSTK7K55%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFLtk9K0AJc1r73K95B%2BaKltjmddo354XI9z%2B3tp010kAiEA7cCTGmbaj5jFJhe2OeHusalOTz%2Bcwc6K2%2BzfhMR9zlkq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOujnyF7pS%2FqM2sv0CrcAzKQnt0e4qWB7TkBzetguHZjL7i1U4VXu3J%2Bj7bgFtI0hyhueVtIROt2tJ1kHGjXi7W7LPaX1t%2F278ESC11pY3VBC6n7bgHUIgbs2bPm89Us0R0icpW0JxH6%2BZ9b1dCVLgXHr4OGpajb3nXlQLOe04SLxYVwbkQMmP2wx7GvOhiZ5gMiENPQGi57vbXnuu2SFdvoVSX5zYv6vZCl%2B5%2Fh%2BhFJwfdL%2BUXyf0sjBwZJxWUMtop%2BSeo8tpezznTlVgeoXInQ50Jit4fqaFd4mdeyiMRVYri6nKAhW8r6sqFHWF495gVPF0S%2B71rZ3C1in9MFFNDjxjnuA9mDYBOGWE5yXZrUIQMLOWOvf2j5UNgvVBXT71xZhI9DSewWOET%2FLAElSAfps6hbPJ9qaGrkFyNQnyPa7rm%2BB0AizGZJ5LHzK2uZG9wKJnhuvTd1OqKvbSJjW6EjlOKaQDkiTbHh766e1PRJLTZzrXSoOcXBC9Ft3DfquR6JLBTi0B1wzMuEUivBvX%2BTGCgE%2BYigt7n7i4%2B%2F%2F1GmlMj%2BCeO4Hv6ZrYsgTEbHO8xsvimnUQ6JLa786LJEdgpgCcyfyLFmrgaEbytt8qSw5QC9KKjUV4M4LpNIgQLeWjwUjWhRXOgB9R9%2FMP73gMUGOqUBPWpM4%2FJSRc5nAs2QZXSvVm4vr5oUx9cFU0V2cxDwNsfdm%2BZs1oQUBZijKJsSy0lJ2xWUS8OU921eqHxcuw8pSNqkBVa0E%2BHkR6f%2BIkCEHeW0tPc0h8xdO9kvB77V6VY4FtA4rR6qiqATJheRIJSXdjNTS0vAeBb%2FzGJapLq76l0nqkuEROlmAFHhQ4O0Xkj7bOfDJyzfEqOPRGuc0KexHXemFG8U&X-Amz-Signature=20286b831bdee86051a723f47dbc3c7d6b15f40d13261501efa968253f2f9486&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSTK7K55%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFLtk9K0AJc1r73K95B%2BaKltjmddo354XI9z%2B3tp010kAiEA7cCTGmbaj5jFJhe2OeHusalOTz%2Bcwc6K2%2BzfhMR9zlkq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOujnyF7pS%2FqM2sv0CrcAzKQnt0e4qWB7TkBzetguHZjL7i1U4VXu3J%2Bj7bgFtI0hyhueVtIROt2tJ1kHGjXi7W7LPaX1t%2F278ESC11pY3VBC6n7bgHUIgbs2bPm89Us0R0icpW0JxH6%2BZ9b1dCVLgXHr4OGpajb3nXlQLOe04SLxYVwbkQMmP2wx7GvOhiZ5gMiENPQGi57vbXnuu2SFdvoVSX5zYv6vZCl%2B5%2Fh%2BhFJwfdL%2BUXyf0sjBwZJxWUMtop%2BSeo8tpezznTlVgeoXInQ50Jit4fqaFd4mdeyiMRVYri6nKAhW8r6sqFHWF495gVPF0S%2B71rZ3C1in9MFFNDjxjnuA9mDYBOGWE5yXZrUIQMLOWOvf2j5UNgvVBXT71xZhI9DSewWOET%2FLAElSAfps6hbPJ9qaGrkFyNQnyPa7rm%2BB0AizGZJ5LHzK2uZG9wKJnhuvTd1OqKvbSJjW6EjlOKaQDkiTbHh766e1PRJLTZzrXSoOcXBC9Ft3DfquR6JLBTi0B1wzMuEUivBvX%2BTGCgE%2BYigt7n7i4%2B%2F%2F1GmlMj%2BCeO4Hv6ZrYsgTEbHO8xsvimnUQ6JLa786LJEdgpgCcyfyLFmrgaEbytt8qSw5QC9KKjUV4M4LpNIgQLeWjwUjWhRXOgB9R9%2FMP73gMUGOqUBPWpM4%2FJSRc5nAs2QZXSvVm4vr5oUx9cFU0V2cxDwNsfdm%2BZs1oQUBZijKJsSy0lJ2xWUS8OU921eqHxcuw8pSNqkBVa0E%2BHkR6f%2BIkCEHeW0tPc0h8xdO9kvB77V6VY4FtA4rR6qiqATJheRIJSXdjNTS0vAeBb%2FzGJapLq76l0nqkuEROlmAFHhQ4O0Xkj7bOfDJyzfEqOPRGuc0KexHXemFG8U&X-Amz-Signature=8874c65be1001bfb088cb03364eba4a17a8a3af108b2c3a47d3c73bce41bd604&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSTK7K55%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFLtk9K0AJc1r73K95B%2BaKltjmddo354XI9z%2B3tp010kAiEA7cCTGmbaj5jFJhe2OeHusalOTz%2Bcwc6K2%2BzfhMR9zlkq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOujnyF7pS%2FqM2sv0CrcAzKQnt0e4qWB7TkBzetguHZjL7i1U4VXu3J%2Bj7bgFtI0hyhueVtIROt2tJ1kHGjXi7W7LPaX1t%2F278ESC11pY3VBC6n7bgHUIgbs2bPm89Us0R0icpW0JxH6%2BZ9b1dCVLgXHr4OGpajb3nXlQLOe04SLxYVwbkQMmP2wx7GvOhiZ5gMiENPQGi57vbXnuu2SFdvoVSX5zYv6vZCl%2B5%2Fh%2BhFJwfdL%2BUXyf0sjBwZJxWUMtop%2BSeo8tpezznTlVgeoXInQ50Jit4fqaFd4mdeyiMRVYri6nKAhW8r6sqFHWF495gVPF0S%2B71rZ3C1in9MFFNDjxjnuA9mDYBOGWE5yXZrUIQMLOWOvf2j5UNgvVBXT71xZhI9DSewWOET%2FLAElSAfps6hbPJ9qaGrkFyNQnyPa7rm%2BB0AizGZJ5LHzK2uZG9wKJnhuvTd1OqKvbSJjW6EjlOKaQDkiTbHh766e1PRJLTZzrXSoOcXBC9Ft3DfquR6JLBTi0B1wzMuEUivBvX%2BTGCgE%2BYigt7n7i4%2B%2F%2F1GmlMj%2BCeO4Hv6ZrYsgTEbHO8xsvimnUQ6JLa786LJEdgpgCcyfyLFmrgaEbytt8qSw5QC9KKjUV4M4LpNIgQLeWjwUjWhRXOgB9R9%2FMP73gMUGOqUBPWpM4%2FJSRc5nAs2QZXSvVm4vr5oUx9cFU0V2cxDwNsfdm%2BZs1oQUBZijKJsSy0lJ2xWUS8OU921eqHxcuw8pSNqkBVa0E%2BHkR6f%2BIkCEHeW0tPc0h8xdO9kvB77V6VY4FtA4rR6qiqATJheRIJSXdjNTS0vAeBb%2FzGJapLq76l0nqkuEROlmAFHhQ4O0Xkj7bOfDJyzfEqOPRGuc0KexHXemFG8U&X-Amz-Signature=bab65a0b68cd48ab792f50c418c257017edd96045237ef6eae02e3c038745400&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSTK7K55%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFLtk9K0AJc1r73K95B%2BaKltjmddo354XI9z%2B3tp010kAiEA7cCTGmbaj5jFJhe2OeHusalOTz%2Bcwc6K2%2BzfhMR9zlkq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOujnyF7pS%2FqM2sv0CrcAzKQnt0e4qWB7TkBzetguHZjL7i1U4VXu3J%2Bj7bgFtI0hyhueVtIROt2tJ1kHGjXi7W7LPaX1t%2F278ESC11pY3VBC6n7bgHUIgbs2bPm89Us0R0icpW0JxH6%2BZ9b1dCVLgXHr4OGpajb3nXlQLOe04SLxYVwbkQMmP2wx7GvOhiZ5gMiENPQGi57vbXnuu2SFdvoVSX5zYv6vZCl%2B5%2Fh%2BhFJwfdL%2BUXyf0sjBwZJxWUMtop%2BSeo8tpezznTlVgeoXInQ50Jit4fqaFd4mdeyiMRVYri6nKAhW8r6sqFHWF495gVPF0S%2B71rZ3C1in9MFFNDjxjnuA9mDYBOGWE5yXZrUIQMLOWOvf2j5UNgvVBXT71xZhI9DSewWOET%2FLAElSAfps6hbPJ9qaGrkFyNQnyPa7rm%2BB0AizGZJ5LHzK2uZG9wKJnhuvTd1OqKvbSJjW6EjlOKaQDkiTbHh766e1PRJLTZzrXSoOcXBC9Ft3DfquR6JLBTi0B1wzMuEUivBvX%2BTGCgE%2BYigt7n7i4%2B%2F%2F1GmlMj%2BCeO4Hv6ZrYsgTEbHO8xsvimnUQ6JLa786LJEdgpgCcyfyLFmrgaEbytt8qSw5QC9KKjUV4M4LpNIgQLeWjwUjWhRXOgB9R9%2FMP73gMUGOqUBPWpM4%2FJSRc5nAs2QZXSvVm4vr5oUx9cFU0V2cxDwNsfdm%2BZs1oQUBZijKJsSy0lJ2xWUS8OU921eqHxcuw8pSNqkBVa0E%2BHkR6f%2BIkCEHeW0tPc0h8xdO9kvB77V6VY4FtA4rR6qiqATJheRIJSXdjNTS0vAeBb%2FzGJapLq76l0nqkuEROlmAFHhQ4O0Xkj7bOfDJyzfEqOPRGuc0KexHXemFG8U&X-Amz-Signature=ed9191d599e03360d14be81efc32522edf3bc0f31c0d4ecf8bf24cea706afa37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSTK7K55%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFLtk9K0AJc1r73K95B%2BaKltjmddo354XI9z%2B3tp010kAiEA7cCTGmbaj5jFJhe2OeHusalOTz%2Bcwc6K2%2BzfhMR9zlkq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOujnyF7pS%2FqM2sv0CrcAzKQnt0e4qWB7TkBzetguHZjL7i1U4VXu3J%2Bj7bgFtI0hyhueVtIROt2tJ1kHGjXi7W7LPaX1t%2F278ESC11pY3VBC6n7bgHUIgbs2bPm89Us0R0icpW0JxH6%2BZ9b1dCVLgXHr4OGpajb3nXlQLOe04SLxYVwbkQMmP2wx7GvOhiZ5gMiENPQGi57vbXnuu2SFdvoVSX5zYv6vZCl%2B5%2Fh%2BhFJwfdL%2BUXyf0sjBwZJxWUMtop%2BSeo8tpezznTlVgeoXInQ50Jit4fqaFd4mdeyiMRVYri6nKAhW8r6sqFHWF495gVPF0S%2B71rZ3C1in9MFFNDjxjnuA9mDYBOGWE5yXZrUIQMLOWOvf2j5UNgvVBXT71xZhI9DSewWOET%2FLAElSAfps6hbPJ9qaGrkFyNQnyPa7rm%2BB0AizGZJ5LHzK2uZG9wKJnhuvTd1OqKvbSJjW6EjlOKaQDkiTbHh766e1PRJLTZzrXSoOcXBC9Ft3DfquR6JLBTi0B1wzMuEUivBvX%2BTGCgE%2BYigt7n7i4%2B%2F%2F1GmlMj%2BCeO4Hv6ZrYsgTEbHO8xsvimnUQ6JLa786LJEdgpgCcyfyLFmrgaEbytt8qSw5QC9KKjUV4M4LpNIgQLeWjwUjWhRXOgB9R9%2FMP73gMUGOqUBPWpM4%2FJSRc5nAs2QZXSvVm4vr5oUx9cFU0V2cxDwNsfdm%2BZs1oQUBZijKJsSy0lJ2xWUS8OU921eqHxcuw8pSNqkBVa0E%2BHkR6f%2BIkCEHeW0tPc0h8xdO9kvB77V6VY4FtA4rR6qiqATJheRIJSXdjNTS0vAeBb%2FzGJapLq76l0nqkuEROlmAFHhQ4O0Xkj7bOfDJyzfEqOPRGuc0KexHXemFG8U&X-Amz-Signature=43914631a65fb65fcb25c7a38154fd9ada36050274952b5a2eba6451af715bbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSTK7K55%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFLtk9K0AJc1r73K95B%2BaKltjmddo354XI9z%2B3tp010kAiEA7cCTGmbaj5jFJhe2OeHusalOTz%2Bcwc6K2%2BzfhMR9zlkq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOujnyF7pS%2FqM2sv0CrcAzKQnt0e4qWB7TkBzetguHZjL7i1U4VXu3J%2Bj7bgFtI0hyhueVtIROt2tJ1kHGjXi7W7LPaX1t%2F278ESC11pY3VBC6n7bgHUIgbs2bPm89Us0R0icpW0JxH6%2BZ9b1dCVLgXHr4OGpajb3nXlQLOe04SLxYVwbkQMmP2wx7GvOhiZ5gMiENPQGi57vbXnuu2SFdvoVSX5zYv6vZCl%2B5%2Fh%2BhFJwfdL%2BUXyf0sjBwZJxWUMtop%2BSeo8tpezznTlVgeoXInQ50Jit4fqaFd4mdeyiMRVYri6nKAhW8r6sqFHWF495gVPF0S%2B71rZ3C1in9MFFNDjxjnuA9mDYBOGWE5yXZrUIQMLOWOvf2j5UNgvVBXT71xZhI9DSewWOET%2FLAElSAfps6hbPJ9qaGrkFyNQnyPa7rm%2BB0AizGZJ5LHzK2uZG9wKJnhuvTd1OqKvbSJjW6EjlOKaQDkiTbHh766e1PRJLTZzrXSoOcXBC9Ft3DfquR6JLBTi0B1wzMuEUivBvX%2BTGCgE%2BYigt7n7i4%2B%2F%2F1GmlMj%2BCeO4Hv6ZrYsgTEbHO8xsvimnUQ6JLa786LJEdgpgCcyfyLFmrgaEbytt8qSw5QC9KKjUV4M4LpNIgQLeWjwUjWhRXOgB9R9%2FMP73gMUGOqUBPWpM4%2FJSRc5nAs2QZXSvVm4vr5oUx9cFU0V2cxDwNsfdm%2BZs1oQUBZijKJsSy0lJ2xWUS8OU921eqHxcuw8pSNqkBVa0E%2BHkR6f%2BIkCEHeW0tPc0h8xdO9kvB77V6VY4FtA4rR6qiqATJheRIJSXdjNTS0vAeBb%2FzGJapLq76l0nqkuEROlmAFHhQ4O0Xkj7bOfDJyzfEqOPRGuc0KexHXemFG8U&X-Amz-Signature=2e90601cf1a0d3f646ee0e2e52e08002eac53a6050859c20b83689298fdef88b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSTK7K55%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFLtk9K0AJc1r73K95B%2BaKltjmddo354XI9z%2B3tp010kAiEA7cCTGmbaj5jFJhe2OeHusalOTz%2Bcwc6K2%2BzfhMR9zlkq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOujnyF7pS%2FqM2sv0CrcAzKQnt0e4qWB7TkBzetguHZjL7i1U4VXu3J%2Bj7bgFtI0hyhueVtIROt2tJ1kHGjXi7W7LPaX1t%2F278ESC11pY3VBC6n7bgHUIgbs2bPm89Us0R0icpW0JxH6%2BZ9b1dCVLgXHr4OGpajb3nXlQLOe04SLxYVwbkQMmP2wx7GvOhiZ5gMiENPQGi57vbXnuu2SFdvoVSX5zYv6vZCl%2B5%2Fh%2BhFJwfdL%2BUXyf0sjBwZJxWUMtop%2BSeo8tpezznTlVgeoXInQ50Jit4fqaFd4mdeyiMRVYri6nKAhW8r6sqFHWF495gVPF0S%2B71rZ3C1in9MFFNDjxjnuA9mDYBOGWE5yXZrUIQMLOWOvf2j5UNgvVBXT71xZhI9DSewWOET%2FLAElSAfps6hbPJ9qaGrkFyNQnyPa7rm%2BB0AizGZJ5LHzK2uZG9wKJnhuvTd1OqKvbSJjW6EjlOKaQDkiTbHh766e1PRJLTZzrXSoOcXBC9Ft3DfquR6JLBTi0B1wzMuEUivBvX%2BTGCgE%2BYigt7n7i4%2B%2F%2F1GmlMj%2BCeO4Hv6ZrYsgTEbHO8xsvimnUQ6JLa786LJEdgpgCcyfyLFmrgaEbytt8qSw5QC9KKjUV4M4LpNIgQLeWjwUjWhRXOgB9R9%2FMP73gMUGOqUBPWpM4%2FJSRc5nAs2QZXSvVm4vr5oUx9cFU0V2cxDwNsfdm%2BZs1oQUBZijKJsSy0lJ2xWUS8OU921eqHxcuw8pSNqkBVa0E%2BHkR6f%2BIkCEHeW0tPc0h8xdO9kvB77V6VY4FtA4rR6qiqATJheRIJSXdjNTS0vAeBb%2FzGJapLq76l0nqkuEROlmAFHhQ4O0Xkj7bOfDJyzfEqOPRGuc0KexHXemFG8U&X-Amz-Signature=e9da924621508ca79e12fe22bb6ca3bd5b0ffd698d4e9e421f80c4bd3f69a19e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635ANQP3T%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIEsMlRpb9S8yrlyxPQjPrm52gCU0Rrw1ZNtKQNICLKciAiA2If9HTN5c0DC4b1Ao410ImY478VGkiTEwxgcd4kvZnCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM3TtkVW8mL%2FgmxZwOKtwDMUEjrKPP1AQGmSJzZxkq7kkAE66TOdWfSC8MfI%2Fp1Nz48EjG2fE5PtDULuNQo1SM5KQJSwE9tYZGrJxS%2BDh7AgK4MH9kC9VVPoUL4GX%2Fdb%2BFj2RyTTQr6JuTFA1Vr5dML6GF814iIeOUMrP12cCsT472q9AanfB8mQgnqvbJHWzZIIVyySKArNNDb1DglTkhHbBt7qpzIYEp4rN%2BuugglZHXQ%2FLziYQjx64sh0CyoVmBmUB41gTUd7PN7IfFSirTWBMscqe142z7h6kN3RIfzsMmFvY2weXqqOEUIs%2FIRC2C7Jrs95CWCjyMNqlHh8gozzeP0HDEPRYCl2n4W9%2BgYa0MKaNr%2BCiS6BhNlv6WQOlf7ad5TSdMNDJoaIMlDV08b3D0yGZ7HmQFXV5YJgBHGEw8uPqmYuQEcXGaKRmfljfWgiCSzuqXcpEJLymXhYdrKqDek3dWiRmE9G2AVkzk%2Fj2G166TX97uvK4GvV8r%2BK8zlLgzxaiuILeFIPxUgmqyObdmeT21CX38B3XfByX62gcLl%2FytBhI56RXDtGFtROuU4mb2PnnLLB1puH4p0AR%2Fh7sORZni%2BSKWUsCBX3fyBddaAjZA6tDQD4CTf34B085juyAn8PKFJB9Zq78wwveAxQY6pgGzlUMBgDWWW%2FHvbcsoAa9oE9MAJiWqh9h8%2FhgMXGqf%2F8u9ddGSMlxusw09Mg4DRWTIwt6aSTLwgcFjpK5OwnzS9wLX7VZXoApCd97YwjP7EHB%2FRf0PCjbtVvbVM2YL6x%2BOGUe15evmJJoab0%2BCbcaFESkowxZjgo%2BdqeRkaolBnWJ0oy8%2BWwREC%2FxNH3%2BPZss37GB9gut%2BE8hqpkvEqEKGlziQJUrH&X-Amz-Signature=8a3a4086f2600373a03167b8fe1f63fda959f607b5e0126798ba84f4e701e536&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV5ESWAN%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQD%2FM2KALh7oqI16pU8f1f3oFyu7Hno4nF5w8yCdW9t30AIhAJ1jwQo8WhwS1EOtw9qOV2QVSMV4wAf1XQ4Fw%2BaSY%2BaRKv8DCHEQABoMNjM3NDIzMTgzODA1IgybN5HBR%2FlCUchBJnAq3APU4CWPYVWJqMSDY5vBAkSAatYdDVQWQ1ahxXAQ2tBO3SOGomdjDzZlrxM9EKUJNh3mAL3hUrhXp2DJ0347d%2FWspoW3whlItBKe2pG%2BVhnxYTSwp5MvqMnhZrko44%2FMwQTniaMzI2bc7afYlJpIQ6Kznw5S3bLydIwhBq%2Bizlc8wfbamqbAdhn9Ycv9IsP%2FiChWXb5IyU1fgU5D1avOyrASMlb6JY7%2FennrjtZC7dw8vl5hfp5qw7WmSp%2BqymEdPA%2FSk689Qbw1EPGTIUjJ7EVnwrsjZC4suNFC6Rq%2BTnBS8pI2BVYp2uldJCL6yTnd2CB9%2BtbgtMZM6u6iqQol6RNxC%2F3vrSf4p0JLuOGj2rK30s%2BohWP4iAAW0rWMbo2amRGKcX4Z4%2FxZDVPJUR0gAYuQ4kFCVNhZOO%2BTf%2Fk4%2ByVUfA8UqD3SaOS8xxtYntIkFrAqZ%2BUP26lliL2LTgFQkE7UifGGIYQkPUsCuh5Y78gNUM6rsYuHAtriWQqxOEfnnEdBqdJjvDOwlYR3q%2BpZur31FFzqKueY3QqLKOIN%2Bn2UQP4i4oR0UyIYXhrf490e7%2BmhYskRJzCNA2Zm%2FsYpxx1XIwK4ftKMgFeeyyp%2BpRTjxEyGuMVb8owkA4udvDCj%2BYDFBjqkAbxhcrk9CZ%2B%2FwNmDTsKBLbquHKwg7wZNSMMFBfmHXRdTnUotRdw9y1nqwWRlHE6afW1YzSgnk%2FRNiXSTBWb8d%2BNAc4JBhr9TPQbLf921B81CiPR7zbOmyEq0mGrL%2BEOGDR8e1on8KeGY117EX6pofrK8yyqKzJOHzEvsF0qx%2FHTIO2jDRLf1PPcclw%2BwHno72f37Qfp0StbMZXjR9EW4sie3nSSX&X-Amz-Signature=48e7446a02289b08e3cfd60ef064e0c58eb3f9b1fee5e483276da527db855386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV5ESWAN%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQD%2FM2KALh7oqI16pU8f1f3oFyu7Hno4nF5w8yCdW9t30AIhAJ1jwQo8WhwS1EOtw9qOV2QVSMV4wAf1XQ4Fw%2BaSY%2BaRKv8DCHEQABoMNjM3NDIzMTgzODA1IgybN5HBR%2FlCUchBJnAq3APU4CWPYVWJqMSDY5vBAkSAatYdDVQWQ1ahxXAQ2tBO3SOGomdjDzZlrxM9EKUJNh3mAL3hUrhXp2DJ0347d%2FWspoW3whlItBKe2pG%2BVhnxYTSwp5MvqMnhZrko44%2FMwQTniaMzI2bc7afYlJpIQ6Kznw5S3bLydIwhBq%2Bizlc8wfbamqbAdhn9Ycv9IsP%2FiChWXb5IyU1fgU5D1avOyrASMlb6JY7%2FennrjtZC7dw8vl5hfp5qw7WmSp%2BqymEdPA%2FSk689Qbw1EPGTIUjJ7EVnwrsjZC4suNFC6Rq%2BTnBS8pI2BVYp2uldJCL6yTnd2CB9%2BtbgtMZM6u6iqQol6RNxC%2F3vrSf4p0JLuOGj2rK30s%2BohWP4iAAW0rWMbo2amRGKcX4Z4%2FxZDVPJUR0gAYuQ4kFCVNhZOO%2BTf%2Fk4%2ByVUfA8UqD3SaOS8xxtYntIkFrAqZ%2BUP26lliL2LTgFQkE7UifGGIYQkPUsCuh5Y78gNUM6rsYuHAtriWQqxOEfnnEdBqdJjvDOwlYR3q%2BpZur31FFzqKueY3QqLKOIN%2Bn2UQP4i4oR0UyIYXhrf490e7%2BmhYskRJzCNA2Zm%2FsYpxx1XIwK4ftKMgFeeyyp%2BpRTjxEyGuMVb8owkA4udvDCj%2BYDFBjqkAbxhcrk9CZ%2B%2FwNmDTsKBLbquHKwg7wZNSMMFBfmHXRdTnUotRdw9y1nqwWRlHE6afW1YzSgnk%2FRNiXSTBWb8d%2BNAc4JBhr9TPQbLf921B81CiPR7zbOmyEq0mGrL%2BEOGDR8e1on8KeGY117EX6pofrK8yyqKzJOHzEvsF0qx%2FHTIO2jDRLf1PPcclw%2BwHno72f37Qfp0StbMZXjR9EW4sie3nSSX&X-Amz-Signature=7e4048805dac15b3a55b29c70e8be92b6388ff988a8caacbadb8713612fbdda3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV5ESWAN%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQD%2FM2KALh7oqI16pU8f1f3oFyu7Hno4nF5w8yCdW9t30AIhAJ1jwQo8WhwS1EOtw9qOV2QVSMV4wAf1XQ4Fw%2BaSY%2BaRKv8DCHEQABoMNjM3NDIzMTgzODA1IgybN5HBR%2FlCUchBJnAq3APU4CWPYVWJqMSDY5vBAkSAatYdDVQWQ1ahxXAQ2tBO3SOGomdjDzZlrxM9EKUJNh3mAL3hUrhXp2DJ0347d%2FWspoW3whlItBKe2pG%2BVhnxYTSwp5MvqMnhZrko44%2FMwQTniaMzI2bc7afYlJpIQ6Kznw5S3bLydIwhBq%2Bizlc8wfbamqbAdhn9Ycv9IsP%2FiChWXb5IyU1fgU5D1avOyrASMlb6JY7%2FennrjtZC7dw8vl5hfp5qw7WmSp%2BqymEdPA%2FSk689Qbw1EPGTIUjJ7EVnwrsjZC4suNFC6Rq%2BTnBS8pI2BVYp2uldJCL6yTnd2CB9%2BtbgtMZM6u6iqQol6RNxC%2F3vrSf4p0JLuOGj2rK30s%2BohWP4iAAW0rWMbo2amRGKcX4Z4%2FxZDVPJUR0gAYuQ4kFCVNhZOO%2BTf%2Fk4%2ByVUfA8UqD3SaOS8xxtYntIkFrAqZ%2BUP26lliL2LTgFQkE7UifGGIYQkPUsCuh5Y78gNUM6rsYuHAtriWQqxOEfnnEdBqdJjvDOwlYR3q%2BpZur31FFzqKueY3QqLKOIN%2Bn2UQP4i4oR0UyIYXhrf490e7%2BmhYskRJzCNA2Zm%2FsYpxx1XIwK4ftKMgFeeyyp%2BpRTjxEyGuMVb8owkA4udvDCj%2BYDFBjqkAbxhcrk9CZ%2B%2FwNmDTsKBLbquHKwg7wZNSMMFBfmHXRdTnUotRdw9y1nqwWRlHE6afW1YzSgnk%2FRNiXSTBWb8d%2BNAc4JBhr9TPQbLf921B81CiPR7zbOmyEq0mGrL%2BEOGDR8e1on8KeGY117EX6pofrK8yyqKzJOHzEvsF0qx%2FHTIO2jDRLf1PPcclw%2BwHno72f37Qfp0StbMZXjR9EW4sie3nSSX&X-Amz-Signature=1610ebf3b0f0efad23c8708908c0055372460d9ceb4a36306d41619126317f2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV5ESWAN%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQD%2FM2KALh7oqI16pU8f1f3oFyu7Hno4nF5w8yCdW9t30AIhAJ1jwQo8WhwS1EOtw9qOV2QVSMV4wAf1XQ4Fw%2BaSY%2BaRKv8DCHEQABoMNjM3NDIzMTgzODA1IgybN5HBR%2FlCUchBJnAq3APU4CWPYVWJqMSDY5vBAkSAatYdDVQWQ1ahxXAQ2tBO3SOGomdjDzZlrxM9EKUJNh3mAL3hUrhXp2DJ0347d%2FWspoW3whlItBKe2pG%2BVhnxYTSwp5MvqMnhZrko44%2FMwQTniaMzI2bc7afYlJpIQ6Kznw5S3bLydIwhBq%2Bizlc8wfbamqbAdhn9Ycv9IsP%2FiChWXb5IyU1fgU5D1avOyrASMlb6JY7%2FennrjtZC7dw8vl5hfp5qw7WmSp%2BqymEdPA%2FSk689Qbw1EPGTIUjJ7EVnwrsjZC4suNFC6Rq%2BTnBS8pI2BVYp2uldJCL6yTnd2CB9%2BtbgtMZM6u6iqQol6RNxC%2F3vrSf4p0JLuOGj2rK30s%2BohWP4iAAW0rWMbo2amRGKcX4Z4%2FxZDVPJUR0gAYuQ4kFCVNhZOO%2BTf%2Fk4%2ByVUfA8UqD3SaOS8xxtYntIkFrAqZ%2BUP26lliL2LTgFQkE7UifGGIYQkPUsCuh5Y78gNUM6rsYuHAtriWQqxOEfnnEdBqdJjvDOwlYR3q%2BpZur31FFzqKueY3QqLKOIN%2Bn2UQP4i4oR0UyIYXhrf490e7%2BmhYskRJzCNA2Zm%2FsYpxx1XIwK4ftKMgFeeyyp%2BpRTjxEyGuMVb8owkA4udvDCj%2BYDFBjqkAbxhcrk9CZ%2B%2FwNmDTsKBLbquHKwg7wZNSMMFBfmHXRdTnUotRdw9y1nqwWRlHE6afW1YzSgnk%2FRNiXSTBWb8d%2BNAc4JBhr9TPQbLf921B81CiPR7zbOmyEq0mGrL%2BEOGDR8e1on8KeGY117EX6pofrK8yyqKzJOHzEvsF0qx%2FHTIO2jDRLf1PPcclw%2BwHno72f37Qfp0StbMZXjR9EW4sie3nSSX&X-Amz-Signature=f65915fcddab4d29ac8ae9bf812710ee3bfcb17232b9e5c5491fd127afe0970c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV5ESWAN%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQD%2FM2KALh7oqI16pU8f1f3oFyu7Hno4nF5w8yCdW9t30AIhAJ1jwQo8WhwS1EOtw9qOV2QVSMV4wAf1XQ4Fw%2BaSY%2BaRKv8DCHEQABoMNjM3NDIzMTgzODA1IgybN5HBR%2FlCUchBJnAq3APU4CWPYVWJqMSDY5vBAkSAatYdDVQWQ1ahxXAQ2tBO3SOGomdjDzZlrxM9EKUJNh3mAL3hUrhXp2DJ0347d%2FWspoW3whlItBKe2pG%2BVhnxYTSwp5MvqMnhZrko44%2FMwQTniaMzI2bc7afYlJpIQ6Kznw5S3bLydIwhBq%2Bizlc8wfbamqbAdhn9Ycv9IsP%2FiChWXb5IyU1fgU5D1avOyrASMlb6JY7%2FennrjtZC7dw8vl5hfp5qw7WmSp%2BqymEdPA%2FSk689Qbw1EPGTIUjJ7EVnwrsjZC4suNFC6Rq%2BTnBS8pI2BVYp2uldJCL6yTnd2CB9%2BtbgtMZM6u6iqQol6RNxC%2F3vrSf4p0JLuOGj2rK30s%2BohWP4iAAW0rWMbo2amRGKcX4Z4%2FxZDVPJUR0gAYuQ4kFCVNhZOO%2BTf%2Fk4%2ByVUfA8UqD3SaOS8xxtYntIkFrAqZ%2BUP26lliL2LTgFQkE7UifGGIYQkPUsCuh5Y78gNUM6rsYuHAtriWQqxOEfnnEdBqdJjvDOwlYR3q%2BpZur31FFzqKueY3QqLKOIN%2Bn2UQP4i4oR0UyIYXhrf490e7%2BmhYskRJzCNA2Zm%2FsYpxx1XIwK4ftKMgFeeyyp%2BpRTjxEyGuMVb8owkA4udvDCj%2BYDFBjqkAbxhcrk9CZ%2B%2FwNmDTsKBLbquHKwg7wZNSMMFBfmHXRdTnUotRdw9y1nqwWRlHE6afW1YzSgnk%2FRNiXSTBWb8d%2BNAc4JBhr9TPQbLf921B81CiPR7zbOmyEq0mGrL%2BEOGDR8e1on8KeGY117EX6pofrK8yyqKzJOHzEvsF0qx%2FHTIO2jDRLf1PPcclw%2BwHno72f37Qfp0StbMZXjR9EW4sie3nSSX&X-Amz-Signature=6329b9c8da21182d0ca5bebb622a587fb996ee7a99efd87c912c8ba9e8e26c18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV5ESWAN%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQD%2FM2KALh7oqI16pU8f1f3oFyu7Hno4nF5w8yCdW9t30AIhAJ1jwQo8WhwS1EOtw9qOV2QVSMV4wAf1XQ4Fw%2BaSY%2BaRKv8DCHEQABoMNjM3NDIzMTgzODA1IgybN5HBR%2FlCUchBJnAq3APU4CWPYVWJqMSDY5vBAkSAatYdDVQWQ1ahxXAQ2tBO3SOGomdjDzZlrxM9EKUJNh3mAL3hUrhXp2DJ0347d%2FWspoW3whlItBKe2pG%2BVhnxYTSwp5MvqMnhZrko44%2FMwQTniaMzI2bc7afYlJpIQ6Kznw5S3bLydIwhBq%2Bizlc8wfbamqbAdhn9Ycv9IsP%2FiChWXb5IyU1fgU5D1avOyrASMlb6JY7%2FennrjtZC7dw8vl5hfp5qw7WmSp%2BqymEdPA%2FSk689Qbw1EPGTIUjJ7EVnwrsjZC4suNFC6Rq%2BTnBS8pI2BVYp2uldJCL6yTnd2CB9%2BtbgtMZM6u6iqQol6RNxC%2F3vrSf4p0JLuOGj2rK30s%2BohWP4iAAW0rWMbo2amRGKcX4Z4%2FxZDVPJUR0gAYuQ4kFCVNhZOO%2BTf%2Fk4%2ByVUfA8UqD3SaOS8xxtYntIkFrAqZ%2BUP26lliL2LTgFQkE7UifGGIYQkPUsCuh5Y78gNUM6rsYuHAtriWQqxOEfnnEdBqdJjvDOwlYR3q%2BpZur31FFzqKueY3QqLKOIN%2Bn2UQP4i4oR0UyIYXhrf490e7%2BmhYskRJzCNA2Zm%2FsYpxx1XIwK4ftKMgFeeyyp%2BpRTjxEyGuMVb8owkA4udvDCj%2BYDFBjqkAbxhcrk9CZ%2B%2FwNmDTsKBLbquHKwg7wZNSMMFBfmHXRdTnUotRdw9y1nqwWRlHE6afW1YzSgnk%2FRNiXSTBWb8d%2BNAc4JBhr9TPQbLf921B81CiPR7zbOmyEq0mGrL%2BEOGDR8e1on8KeGY117EX6pofrK8yyqKzJOHzEvsF0qx%2FHTIO2jDRLf1PPcclw%2BwHno72f37Qfp0StbMZXjR9EW4sie3nSSX&X-Amz-Signature=fdca56a30ae3d88c6638e8606c8fca8ff8f58d2eed7f92cabcbc47bd37be8dd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV5ESWAN%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQD%2FM2KALh7oqI16pU8f1f3oFyu7Hno4nF5w8yCdW9t30AIhAJ1jwQo8WhwS1EOtw9qOV2QVSMV4wAf1XQ4Fw%2BaSY%2BaRKv8DCHEQABoMNjM3NDIzMTgzODA1IgybN5HBR%2FlCUchBJnAq3APU4CWPYVWJqMSDY5vBAkSAatYdDVQWQ1ahxXAQ2tBO3SOGomdjDzZlrxM9EKUJNh3mAL3hUrhXp2DJ0347d%2FWspoW3whlItBKe2pG%2BVhnxYTSwp5MvqMnhZrko44%2FMwQTniaMzI2bc7afYlJpIQ6Kznw5S3bLydIwhBq%2Bizlc8wfbamqbAdhn9Ycv9IsP%2FiChWXb5IyU1fgU5D1avOyrASMlb6JY7%2FennrjtZC7dw8vl5hfp5qw7WmSp%2BqymEdPA%2FSk689Qbw1EPGTIUjJ7EVnwrsjZC4suNFC6Rq%2BTnBS8pI2BVYp2uldJCL6yTnd2CB9%2BtbgtMZM6u6iqQol6RNxC%2F3vrSf4p0JLuOGj2rK30s%2BohWP4iAAW0rWMbo2amRGKcX4Z4%2FxZDVPJUR0gAYuQ4kFCVNhZOO%2BTf%2Fk4%2ByVUfA8UqD3SaOS8xxtYntIkFrAqZ%2BUP26lliL2LTgFQkE7UifGGIYQkPUsCuh5Y78gNUM6rsYuHAtriWQqxOEfnnEdBqdJjvDOwlYR3q%2BpZur31FFzqKueY3QqLKOIN%2Bn2UQP4i4oR0UyIYXhrf490e7%2BmhYskRJzCNA2Zm%2FsYpxx1XIwK4ftKMgFeeyyp%2BpRTjxEyGuMVb8owkA4udvDCj%2BYDFBjqkAbxhcrk9CZ%2B%2FwNmDTsKBLbquHKwg7wZNSMMFBfmHXRdTnUotRdw9y1nqwWRlHE6afW1YzSgnk%2FRNiXSTBWb8d%2BNAc4JBhr9TPQbLf921B81CiPR7zbOmyEq0mGrL%2BEOGDR8e1on8KeGY117EX6pofrK8yyqKzJOHzEvsF0qx%2FHTIO2jDRLf1PPcclw%2BwHno72f37Qfp0StbMZXjR9EW4sie3nSSX&X-Amz-Signature=6544654c6ae1a9d77ce6967cefaf3308e8ab882826bca5252b42365f805dc611&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV5ESWAN%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQD%2FM2KALh7oqI16pU8f1f3oFyu7Hno4nF5w8yCdW9t30AIhAJ1jwQo8WhwS1EOtw9qOV2QVSMV4wAf1XQ4Fw%2BaSY%2BaRKv8DCHEQABoMNjM3NDIzMTgzODA1IgybN5HBR%2FlCUchBJnAq3APU4CWPYVWJqMSDY5vBAkSAatYdDVQWQ1ahxXAQ2tBO3SOGomdjDzZlrxM9EKUJNh3mAL3hUrhXp2DJ0347d%2FWspoW3whlItBKe2pG%2BVhnxYTSwp5MvqMnhZrko44%2FMwQTniaMzI2bc7afYlJpIQ6Kznw5S3bLydIwhBq%2Bizlc8wfbamqbAdhn9Ycv9IsP%2FiChWXb5IyU1fgU5D1avOyrASMlb6JY7%2FennrjtZC7dw8vl5hfp5qw7WmSp%2BqymEdPA%2FSk689Qbw1EPGTIUjJ7EVnwrsjZC4suNFC6Rq%2BTnBS8pI2BVYp2uldJCL6yTnd2CB9%2BtbgtMZM6u6iqQol6RNxC%2F3vrSf4p0JLuOGj2rK30s%2BohWP4iAAW0rWMbo2amRGKcX4Z4%2FxZDVPJUR0gAYuQ4kFCVNhZOO%2BTf%2Fk4%2ByVUfA8UqD3SaOS8xxtYntIkFrAqZ%2BUP26lliL2LTgFQkE7UifGGIYQkPUsCuh5Y78gNUM6rsYuHAtriWQqxOEfnnEdBqdJjvDOwlYR3q%2BpZur31FFzqKueY3QqLKOIN%2Bn2UQP4i4oR0UyIYXhrf490e7%2BmhYskRJzCNA2Zm%2FsYpxx1XIwK4ftKMgFeeyyp%2BpRTjxEyGuMVb8owkA4udvDCj%2BYDFBjqkAbxhcrk9CZ%2B%2FwNmDTsKBLbquHKwg7wZNSMMFBfmHXRdTnUotRdw9y1nqwWRlHE6afW1YzSgnk%2FRNiXSTBWb8d%2BNAc4JBhr9TPQbLf921B81CiPR7zbOmyEq0mGrL%2BEOGDR8e1on8KeGY117EX6pofrK8yyqKzJOHzEvsF0qx%2FHTIO2jDRLf1PPcclw%2BwHno72f37Qfp0StbMZXjR9EW4sie3nSSX&X-Amz-Signature=61510cdc50e4038dea2d6e060c545ec44ecaad32dd363c99df7b3772b4de3cd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV5ESWAN%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQD%2FM2KALh7oqI16pU8f1f3oFyu7Hno4nF5w8yCdW9t30AIhAJ1jwQo8WhwS1EOtw9qOV2QVSMV4wAf1XQ4Fw%2BaSY%2BaRKv8DCHEQABoMNjM3NDIzMTgzODA1IgybN5HBR%2FlCUchBJnAq3APU4CWPYVWJqMSDY5vBAkSAatYdDVQWQ1ahxXAQ2tBO3SOGomdjDzZlrxM9EKUJNh3mAL3hUrhXp2DJ0347d%2FWspoW3whlItBKe2pG%2BVhnxYTSwp5MvqMnhZrko44%2FMwQTniaMzI2bc7afYlJpIQ6Kznw5S3bLydIwhBq%2Bizlc8wfbamqbAdhn9Ycv9IsP%2FiChWXb5IyU1fgU5D1avOyrASMlb6JY7%2FennrjtZC7dw8vl5hfp5qw7WmSp%2BqymEdPA%2FSk689Qbw1EPGTIUjJ7EVnwrsjZC4suNFC6Rq%2BTnBS8pI2BVYp2uldJCL6yTnd2CB9%2BtbgtMZM6u6iqQol6RNxC%2F3vrSf4p0JLuOGj2rK30s%2BohWP4iAAW0rWMbo2amRGKcX4Z4%2FxZDVPJUR0gAYuQ4kFCVNhZOO%2BTf%2Fk4%2ByVUfA8UqD3SaOS8xxtYntIkFrAqZ%2BUP26lliL2LTgFQkE7UifGGIYQkPUsCuh5Y78gNUM6rsYuHAtriWQqxOEfnnEdBqdJjvDOwlYR3q%2BpZur31FFzqKueY3QqLKOIN%2Bn2UQP4i4oR0UyIYXhrf490e7%2BmhYskRJzCNA2Zm%2FsYpxx1XIwK4ftKMgFeeyyp%2BpRTjxEyGuMVb8owkA4udvDCj%2BYDFBjqkAbxhcrk9CZ%2B%2FwNmDTsKBLbquHKwg7wZNSMMFBfmHXRdTnUotRdw9y1nqwWRlHE6afW1YzSgnk%2FRNiXSTBWb8d%2BNAc4JBhr9TPQbLf921B81CiPR7zbOmyEq0mGrL%2BEOGDR8e1on8KeGY117EX6pofrK8yyqKzJOHzEvsF0qx%2FHTIO2jDRLf1PPcclw%2BwHno72f37Qfp0StbMZXjR9EW4sie3nSSX&X-Amz-Signature=11949b74c4e07ecc25f39cfec3ca52aaf31aacdb54cc07cb208d0fbac4be245e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
