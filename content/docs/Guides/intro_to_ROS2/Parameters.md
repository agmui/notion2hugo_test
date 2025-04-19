---
sys:
  pageId: "43f56b25-3325-48d7-83c7-092220799f37"
  createdTime: "2024-08-21T00:39:00.000Z"
  lastEditedTime: "2024-09-02T12:58:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Parameters.md"
title: "Parameters"
date: "2024-09-02T12:58:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 144
toc: false
icon: ""
---

Creating ROS nodes is nice but sometimes we want to have configurable settings for our nodes.

This is where Parameters come in.

For example, say we have a camera on our robot and we want to set how zoomed in it is. We would create a ROS node and ideally, we could have that node take a parameter that asks for how zoomed in the camera should be.

Later when we go run the node we can just input it into the command line saving us from manually changing it in the code.

Let's create a simple ROS node that takes in a string as its input:

import the ROS libraries and create a class called `MinimalParam`

```python
import rclpy
from rclpy.node import Node

class MinimalParam(Node):
```

In the constructor, we call the parent classes constructor and create a timer object.

Then to declare a parameter we run `self.declare_parameter()` which takes in the parameter name and a default argument

```python
    def __init__(self):
        super().__init__("minimal_param_node")

        self.declare_parameter("my_parameter", "world")

        self.timer = self.create_timer(1, self.timer_callback)
```

```python
    def timer_callback(self):
        my_param = self.get_parameter("my_parameter").get_parameter_value().string_value

        self.get_logger().info("Hello " + my_param)

        my_new_param = rclpy.parameter.Parameter("my_parameter", rclpy.Parameter.Type.STRING, "world")
        all_new_parameters = [my_new_param]
        self.set_parameters(all_new_parameters)

```

```python
rclpy.init()

node = MinimalParam()
rclpy.spin(node)

node.destroy_node()
rclpy.shutdown()
```

## Solution

```python
import rclpy
from rclpy.node import Node

class MinimalParam(Node):
    def __init__(self):
        super().__init__("minimal_param_node")

        self.declare_parameter("my_parameter", "world")

        self.timer = self.create_timer(1, self.timer_callback)

    def timer_callback(self):
        my_param = self.get_parameter("my_parameter").get_parameter_value().string_value

        self.get_logger().info("Hello " + my_param)

        my_new_param = rclpy.parameter.Parameter("my_parameter", rclpy.Parameter.Type.STRING, "world")
        all_new_parameters = [my_new_param]
        self.set_parameters(all_new_parameters)

rclpy.init()

node = MinimalParam()
rclpy.spin(node)

node.destroy_node()
rclpy.shutdown()

```

To run:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCVAIWIS%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T070735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtwunXcsdYVfGqgHMPV59%2FQc85gasPLNziBVDwsH0CGQIgQawJnlVtIsM9Z8QT25ct%2FntW994rGFjNNo4bNDCXry4qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMs1jbs7Uqd0jpvwmSrcA9UYggbTPuiPxnGpQXzs5dP0InXj0jyBWhaEDRWosCR46kvC21YbrdzX4MjucAi%2BxSYr3Z6kiA%2BY91pyScHA%2By3Rqta7nfNeRK%2BuEtf8dm%2FJ97rZGHlW0v38nfiQUvna7ygmeeXg70Mt4SmjzxnGqVhxUayISsbdmcd8QdbJoA0plqCsolRtFUJWk%2B7wpzmbJH%2B93j8sh89tP%2FCqKijTuRijedoNJkq2zGFnvJRjOFCts8SrFjV9RqYPIT6UfluOUCu20ds%2BmfN%2FhfJ4%2BR6Oy%2ByXoipX2o%2FhEnn7X0GD%2B9JqfuUPH%2BrDDJBtv0L1w3whX67nKvuQteNFSPGdEGcx%2FUP39MaKm9VMYt1S%2BZCHwrlm%2BRsc1%2FEAXio6Hp0BaWIZedCUwufI6x5t9tj0Qr0%2F%2BHsTkICWvWLNXdKxpr78yYMe2Z5Bz2wUh6XaqqpI%2B81fgPhB5RxLdsTjLROwnnKvHcNt%2F7kFpPGVrgaOv1MYLyeRPHaIZKr3XShoZZzBu2PwiiZ6dp%2BUf2q%2F7Rm7RepgQZsHqLSPXe6wMsWDT9y3JR92xeTwiDzj9Yg8sOqxMLA2WwGW5wIxP64RCJpcqqvqDhHoQTncaGmIrcO6wi6pR3eDFr0vMOVEgLxB8CIRMIX8jMAGOqUBMzdv%2FKyWMHWSnDEB8KM10Yoe8dBA%2FjpxuyjhBnVGKYuDGZrffCU67galnKVy5j7pY7p1v40auNtJp47tt%2B2TXltNc7xqOXhgGl3rtZPo0PcFSrNONw6iPR6kb161mWkRc64%2FeYRn6Zib1V7UyRrR%2BAFOZIdssNwnk1IXDruiSPvjEtuWsuJgLLL8S%2Boi7erCc30WHm%2BzWFPCso2kofp89s1oIgJJ&X-Amz-Signature=dc463f07d4c0b06f837180e4eb95ec07eb470f9cf69253122cb7dee6374bb192&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
