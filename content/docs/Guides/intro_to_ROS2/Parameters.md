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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DSK2Y6N%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T150833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCkd1IUGKT55IwmwT%2FgoHUu2nA3bCg2tJlHIzVdpEFAVAIhAMwqQ0%2Fk611frXsAbpSBZWYLVqLhBEu%2F0zeSIq0vmD2DKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypxuoIqHBUzfKjHcgq3APLQxA8WXanenyU1fMSyXXnMtnempbiQci%2Bi3K4i5QTbdf%2FicYtPo3YonM%2BrQb6e%2Fq%2BDaiMt76bNLJMRDm6s7bVFHttwmtu7gvFSlaaMgVUHemjqIri%2Bqqs5Wj76b5xJwH6yNoIz35ms0v%2BlKoV9mGWvUXFdXF2o21PhWvqvL%2BPN6MF41fiAPOGiQ9nAhQIM8iH8tpZe%2B7iWfuf44sj0PkpDhVbOa1IJvrU9KsiyXFONfNlcONxp82KxOIQsrDfVRL6e3qpKnJbqxjaHk0MtGYva8vGCaBoAfOa6vQhkphvs1UTswfu6Je8A5KFtnef8urwCZbiqwS0hAxWqgChRsBynvvvhOOj68CvuX%2Fppj0RICqblXUDrHowJiBnxfKeDsX0S5PNAt5%2FOsXsUpQjQrNmXcOrzV%2FdEECF1h6%2FnrjSkB4pGRI%2B3tase3v7VaG9Kr205YcbPH8Dg1g05GbQSm1TJSd80AlmoHsKlY93IdZHkDA4oXam75ByR1uECygM9jl84E7O8%2FjOjhXYf7hWwytTXokx32FBbO0z0xrw6qlXcGPTwmpFm6HuhcKkgq5JmVlaRCwxX4lO4j286PHdeYkq1nY4w88%2FAl2Jwk9ZO37Dw0h63Y3gsrhByAvHgTDZ%2B%2FW%2BBjqkAQCrocY5Xl7l%2BQqVpoM4qd2IDLRQKAwaRW53ZJIr9K%2Fcrno2q4nb4WhhNVSLi9Deu20ENAFzHePYq47pU126tLQ1sHWVZCww%2F78BbfXmpJqHexFsV9VDhlEsALYFY8fmMUxxGTx1qHXPaCL7YJqY8vgeghDKnB5KgrMYs5zHK%2FybPHrFBT8XWgl7rtxEtheM%2BpPGYHxFVFdQnuqBuBp1%2B9ArcT%2Fp&X-Amz-Signature=bf62f2963bb85205a4ef6cbf19b5236f4c701d0b382d25628c0ad17c43095682&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
