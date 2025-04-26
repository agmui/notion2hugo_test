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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676GS5NNS%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T090814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGxV9%2FnN7jVtswuS5QS3kpYRTufV1B1w77h02B9fbXjlAiEAvwOBqdWvja3c%2FcjVZx%2BqMcGQ3GvckHyka9yqyaU5eYsq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDAYanRskDRHWy5rRrSrcA282JmwYWPVRYeWi41cbBbCkoE%2BNu1JR%2BKBkbiQW%2BxHCSCpF99OPm9PWvScL%2FV7Oz9jRkQFpfOj3lUdfntW8Lqm1TJVtKyMmI0dd7GIVf7jYDLdEpK3eKopbnAnfKsmu3Su5K2Q55ly71n8lx88vfV4rLrZnlF7twhfXEVg7q2gRdBK9JrNFrDuccXQvxF%2FsPmqvFOkbMjcIX40k8C1bxB7IgLTE6xx0bu6bltiwo4E9941D0yb%2FTlLNKWFB57nF79cuQ2SKp0VzE9njsYKh8N%2BlYBqewEW2XeW8IrkMxtxKGcgEpDxixifDY8SyNyx%2FO4Ejc9SGkStr%2BkDAfbCX9yVvDfbp4K33EuQaTp5P3nTdqFd%2BXdWgyLr6GLwuOv7rkKQ5tZOlzR84JL7GKNJJnZiy8mvPQ2FjqH1fkfhSBU3Jgc%2FW09FJJEy0IbnJfBPik9JiqZxoV6C9rUir7tS1MBSiO4n2yTdrpbdwRBMylz%2B8vBMm25jLNC965JdBI3FCjz%2BkcFOoAqtt6almzdIT%2FSzFNyepEQlp%2B5U4HSrlWHfZRtO%2FadBFhXqSMtkJyDd%2F6T%2BV7JWhlLIt9YcmoMgfDDTPVKwf9PGofTHhxLkUW3W0hAuXZztlW1%2FPzvvAMPCDssAGOqUB5FmRzkz7C4Gv2W5pwa%2BDNXANcgL1tOlbl%2B%2BAqrmOWrUbZpBZfTIb2P0v9MjSHO%2Bdy1l%2F6s4f8iZjH7walEpC6lCEUqze4mhb1IQ2y5nNULfzeD7I5bQNYMsu1PPe%2BDHV86wvk42vNmoav5f%2BSvoLwk9GOeQMH5f05qo9XQbcMICN5zNT0Ab8aKBOosyZbsfPWKHu7brKk9ILYfcpD1kuQRHJx2NB&X-Amz-Signature=90a7ee56ec7c0c5d404247cf52cd62acc5c33fb0b74a2521363931a1f4fca747&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
