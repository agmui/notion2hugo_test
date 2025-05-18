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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UKVO23P%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T050859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDM2R6Y4n%2FAaqeT3crxmNNc2KTwh%2BO3v%2FT9xswPR1dL5wIhAMI42w6%2B8wT8iyBWWamt9WXYmPH%2FX8PNiS%2F7m0sBKF5BKv8DCGoQABoMNjM3NDIzMTgzODA1Igz7SP6qzroFOVlSOY4q3ANrMc3gBT8y4sx2X4bjezdlbgr0MdO6j34NGULJwEy1EP9THlRrMI93JAxzrg4NbXEWx0A%2FA6cmmXU0sJuDv0TC01AInJQzThYXCobRYBNUnus4PexxkQ2HF8nUgS62oPGp7W3hZPaGOz%2BIufdzAsR%2BoiBj6lGJ1kiwUhg7ibJPt9rTWntTo3y0szQCjOCx%2Fx0obkCvnzgzbTHO1ruQzaUkGjE0biVQDD6cRPrXi6hYI5ihbAK2G6kJqAHm9wKrVGPLvJAFeAkx9bS0BghSrG9QOTtZIbBxz4yn%2FFEJOdZX2lohZRlD9XTd00oK5JilnRLSRpNTkG5bH%2BWLzKnibkawoZrfrFOXMQLAiRIbkl3oqsFGHPjk0MT3%2F%2BfrisFFRRIXTaqo83zusSVLUpWz6CJD1SHq16RHzT8EQ0Nt6VmXN7j5tbz8Emte8m2yWXeXxA0SD2OTl0FkhVazWzlCbh3Jh4E3%2B%2BvTfi56j9F6HMrnKT0oFOgYm63tLL4YhWsSlAu3uSeyH9R0WdnSsLhmZU4i0XVgFNVzg2L9Qabz%2FG2Ua8XKuwla8GnNn%2F0v%2FyMfGeZuTXRb%2FM0SW3l5aR3bB6teZAno14KYeW%2F3tZrp2eDbGdAMBWlOjLG56YY6fjDi16TBBjqkAVeGJrENMFH814qFZxAf4T4ivJ1OgFdQym%2FdFEn16I7%2FqBbXLsP3bQZnbvxvqDn6aYJiusbAUnbQdwNvztrdksvxVIlPPE96z6wfiS6UGiURwYGAem7yTPN40AYFS06Hcya7Qbn%2FL5%2Bft3R3AXzpmal01ede0oVDohYuIHOn5z8OOoXBx9OmK81GFeR4Q2bWiV%2FyvKcDU3SLMAiRSMdAvcVUCQMS&X-Amz-Signature=aef768631c65df1547c9cd399a412060fd694b9c5cf651ff35ef0b557c1dcd64&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
