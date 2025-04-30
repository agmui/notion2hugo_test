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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP74UGZB%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T070917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDFjF8l4q6h7Kp4BJsOEBz4uXX1MXoCZdhqsWgE8H2bIAIgFcJjlnQl%2FFpntOhso7hIUzTDfkbf12%2BXXP3bEAhiEK4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdkgIA1VWbIOumr5SrcA1v2bEVSOpV5GvJopkNPZR2OIp97Qxq%2B6b8UxDBZJ%2F2lp0FOrU3oz3SNvBOHiYIEfvpXbmkCQ%2Ff5KIpuoD7XEwKFoOoe8E5N3GYY5T7KNnaamDn814GoSjzQQWQuF0Fs8%2F2UBFfAuwn%2FUOKMW%2FinTofkvzL9Wbe0oMryncEUmFr736pLVKDHwPgoaw7IJ6ddY0aE7JTzHh17OG8AF8S9CI1rQ9w7WtBTYpMFpumZ7HUZHvYzeXoPQoF1hgAsuR3W8fuj4%2BjoP6mzRit7hCqNdPpvD7Em8KjxmnnWauk8rgrFDBhj1Poc5%2FpjWpnJ5lgQuAi02erkDimA5qa1UuSem8bp0209la2teTFwmkYX9yVEaHNUspgwR8fEGxBKQMmRHa85aYXisk7eFztbsFJkayiWyEFzxpN2UQ5WWSuBazuIrqxi2hXmFgDcxH0fj671kZZWdX%2BV%2FJXUMlZk3%2FUYpDrIqUlVY8Q%2BF8XA47Zinx5RNVXIyG3IpDervbZdN4hS0tYWZBPXUlM1tcUYi6vz%2FthNnCCvJL22%2Bq4EDO1DDY3QgN8%2F68qvqoFfflRiMItyrER1Lvl6yYeD1RChXc3muKzT1Wx6UiTBjk%2BBoyesG%2BqC9pJckgKKzbSNIXfJMNGXx8AGOqUBmsn%2FKltCn3xS8r4saiuMbRPXs3ao%2Bjuj1XYCQgILx8a%2BuZrfn9BktoBravbrf6GQURmirCmqpzFSHTieqjrG8gCw%2Fa4hDjL4t9ve9x3rNVGQgB98iCQ7fSLk4AsApJ3Iz4tTkLCYTNrhmWN%2FeuwWTHTCtaqwrLZzBp6tKWemVl07Uv0z2ik1zepbHKlZlNz8rvICgeiJjQnwJZ1hG%2BGLWx0pkL8O&X-Amz-Signature=1aa58f9bc5986bf1d535b8dd141c7f41c8a70533de4099b16723e2c40e14a90b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
