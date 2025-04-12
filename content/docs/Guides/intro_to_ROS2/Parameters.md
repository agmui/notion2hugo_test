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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664BIJZN3%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T021658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCICr8noXphpVZfKMg%2B3uMuZK%2BldHrVAnWjGfwVg6eW97hAiEAku4wwSwpybs7Xo6gZ9R7ZEtEjGSvnxwewkScJ3BFvjoqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPe1yGB3E0kWXp7A9ircA%2FcQ5%2Bb3W2gVRkPwLwTpQQsQVWU1vzLhP1XzcAYfNrXPpH56m58lQ%2FTKFwfA%2F5e%2BRO1jNfacOtrjuFeZQktS8LhnDNBP702RJ9pE6qS%2FTORxSqYnrPT%2Fgd0KJKbyuLG0PvvfULEtseqM7ailmwnTpZgloYRFlARPqKN8vQUkwnm7UbB5JOLHVWXvY%2FhZXyf%2F1TSt7r3Yyn3VivGHFW5V7PKMU86vh%2BevdIz41UhrTlNLM3whnE02Al%2Fi8snJsN5pEd1ZLArIRpt6LqsQhn6AQHaTMf7Xl%2FCZkejdm3fn06ex%2FxfXZG2blw9sJkFPCnlzXQct31jL6a8%2FBT6wfAf9LeGWp%2FnJwDx8l6kxq1ixMjCeqpv3DFBYooscc9WSHqT%2FV8V2BE%2F3DhfrPaiEO38s1sCeF4onORJdDfeeBsPiE7TU3b7r%2Fjxxnupc9igNgJKLoOjfKw8UXB7vYHCFv1xOuLmYvpOhS5HxiQ%2FGnHtw3eIDYg1saF75IbtNh67fQeawAR9cvF%2FJwD3hgm6ui1XA5ty6ZjiIvYSZ9N6ws3Xn2PzMR1x8%2FzTN%2B9%2F4fOiyJQ%2FC1pFQDZonzNHyiWPaBbuv90vkCyDmVhKmHRAyfuxqRQ%2FrCECvu4Nwjohk5blWMPeE578GOqUB1Xa3kP9YjJSTFihnD6UtiLNsOUQsyTbuIqxOtvUnHAC%2FxUtlVV4PKVE0%2FnwXcvQvppzZbeEkB%2FzdI%2FCoXYV3wvI%2Fb4a%2FCuLMYpjuNljL%2B2baefDPcLywDhJAnVSY%2BgGfVKanPinon%2FnnmJJslNuXbFOswhW%2FpLdOYxkCkuQoS42Bi6TWcCAaO%2B9Gr256OblkQsvNj7c%2FfKqsIRUDpbR5TnC9z2lV&X-Amz-Signature=22e4781029222a94312ba2d5daa46c73f7c40ad3d5af6250e7744c033d055949&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
