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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPQQGDUT%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T170712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCqmrwkAW97KU6KzKoMtr%2BRBSZJsRWgx1oRdH%2FadoZ5CAIhAIMZtDUp%2B8oE4WLW%2BjQvWXq8kbudmg7hOBjBcRQB4lzHKv8DCF0QABoMNjM3NDIzMTgzODA1IgznGC%2FTo0z%2BvS%2BEn14q3AMietJ2xobqLGAhROunIoWADyU3ulcz6yIrsufuWYe6ggoGzcX%2BQN9nL9XLD41cl41n3h%2F6YuvNgoWmoz4AujH%2BsDiFspaO4cg1tBAcSdkzfPqT%2FI4bJB%2B4236palpuYjmbtY%2BkqHThSweJ9EBmfUMT5CmbiaPsSqMNQElxvVsRJTm9WnYt4VBeqDSKR%2FwUAVgdLTU3hjO1l34jZgETNJiM7o4pHsG%2FKDbtl83L5csapE7DI4qEWpUc1sP0T9rYaKeFqgi8Q1M8v4x5bTEWzngoPZSEwumH88b%2BfsETu%2BNmk1X3SNjHj915KhjE%2FoXtiELVKbXGhThu7ooH7M%2B%2BBXdVhVtaDXfFeo3UVmu21xszOfzx7Qbr7tLDcrkhrZkRpbj5qRXdSTxR6RRMuTmRGHLpRdDeQt6qv5jGj%2BChUXVjNjmdcU%2BzF0xI1XMmwhehNg%2FtV45gcfjGwHmJpfhdn2in3C9cXkjHcw9BIk%2Bsw6adGKKZk%2F1XkxfZ4O2tymGeMMf5YKIMTiO6dZwfRhWiqp6q8ISxftMEDCoinf%2FLPeL%2FCgpm7mq0ytT8LtR3doEXGeybVNTEHvS%2FL3hn6c2mQ8T0Lh3exUU7I%2BWQIAwiyUA4pl5wdGUidBR%2F7nLxpjDBiPy9BjqkAdDvlCWPE%2Fiu%2BVQG89cHfEjV%2BXDOo4CY42lkQ26laUObFVL0YML7Xx6ig10Agan8oGZ2CcclIqaXu4IiBbGsI7EVDtOXvHlNOnM2aXkspeUJI3QOJkbCAc2%2F3QujFsapc%2BYQB3tA5UBhJulN3r37%2BYOHiTVR1ouS6Frh6PxUYpDsY%2FJpAijiDhkmqlxgmqYwXB9ivW8PnTfaRurJETp3R8rbMFJb&X-Amz-Signature=6f36ec2398dd5fcc66e2558eebbf249f53342d056826b09064ca25fa68ab7bae&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
