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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T52YVYK6%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIFo0xtpgz6HeC4gxORg%2FjVh8oaFK4KjVKIoSKcx1FBUiAiEAwhuxp5WE6Mb9kUD1XaVidVv1gtScYZfOLXBsHdQfaQYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJb4CWjm8ZKmY2cFsyrcA2l%2Fm5Q0Fe3hX682gl5H4xI3rN33TkmiasX5uUkRszWrLqndNgjgBzrHXo%2BXLSadskfB3xviomz%2BH2uPUPZ5HSJZzQtpKQFEaQP9MT5lRgtqONE9yDvvC68OuF%2FpOhYYuU3Gv0fDZibD1AKqiQgucFeaPy5pidmrLl7AmVc68vyvlnR3FSilxj5f86DqoFi0TBDfJiucvQSwBDNSPOzRmTWY9CyrrvARzVXU16s7bSV6i88k4ytlUdXqFjObkfMo2h8pyaLzhRBf7GhZRSv74OXvN6CwKr%2BEDm4pDVjX9h0Xlt4UFyxJNrUs4nquH8Fkp8f9KxFHD9wKFqlMJyCWnCHp393EENzJD%2BeW32ROBjuBEr4O030yNFFDpFFl0VwGULeghGc34v8UjE%2B5TDQDfhcC%2FDJ540Ni%2FGZ32GuVGTpDLO8zFQogmyXd1a2OEqQmqagbqn4ejYlitCasBaG5kvDmXqBKticUZwhFQi3yIEzOJN0RDBPbJcKUURUjwVR5Dx8Hfeva5IcjJn9G8cj2o0DWCCL%2BAW1Qw1lPCGkownZ%2FpYT9TQsUBWqOI82r8FF%2BObkToD04ZTUpYj%2Flq%2FIFu4rBE0%2FhWsp89INxf5LpbbnV3Z2tAc4vkvSP9c18MPaj%2BsQGOqUBaWq4Oqal03lj2t4oo7DnD2bzsAUlAzS08qJz6kW3S%2FvIx37XNc3J53PIgudKeOokJNXLrwFehXbS0OpVcLmBzHXnLCphOf8nGyBCFgd7PAmzy2T5QU8rMarvtnhhzlB8mv8eMVJ%2FuqvQRnkW%2Fd9aPCCiHyqiR1x1ZyG3%2FXqvca8dbWCr5vMg537euPBYrK3upXSTdOdkINdzvsmnFkbYueN%2FbPnw&X-Amz-Signature=ace11698d77f864dcb3bc0375c71f3b15b601e2743bfa9d4e68ab58b862cc24d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
