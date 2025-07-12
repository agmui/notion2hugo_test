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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F3RNYPZ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T090851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIASZczo3YgxZODJoYor6hFRpAxswePM4xdEyRtq%2B0c4OAiEAn0y4QKJfXTPT9CB6EQuBvECeYqSj3fQXPwYmHe1QgQsqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPj3a%2BN8qmjjApMCRircA0%2FC66FZOq%2BF7sQYBon8tX7qaAi%2BZLT3CNSgN%2FaxHSvqXL%2FXQQUnHx%2F8C0YNfkdlGtcD9M24yJ%2BLPQWq%2FFtCeG%2B8kd5Vqwd%2FWaeaX0v4XXWc70hjngSQFCOPlfLGc%2BrP9kWfYq2CRs3FAzml7W9G14w7gtR7Dq1yOoQtUy82YhIr1A1igWH0pIyYz8ZTNHipvOpH1%2BqbO1JYF3M99al1R%2FlmtKR7zdgEYZqx7gDFe6Wezug5M4kISEEm43XPCSZHdm7K%2BkXTDcmXw60QAUtVTOLSBuRoJRKjdqELw0vl1gmh0Jgfgh%2FTjmIhhTCzYdjm3lunPaFjSenW8gWGCxbq%2FPK53d4FwTOU4dt4u2TavEFsph71LmwniJMuz%2BztMURpbgP93C7loXwvXO7w1mK0k1iM0j9IDJ6lqOgAHhvLL4EIW6sQP3RS4CUsGyDQ4az0lJ8XJpnR6C2T4IAIRH1CH%2BCixo0wBfy3JnhquPRv2QW6DVNHHwPmk6m36FgVASnUFE50K7muj8PWHD6JIAdSQ4kvznIkER2LWI%2FNGlTkCejck2eu0T6RPUvwEHqr1UOAF1ngrZFatOVdOQIDrNEkGekGlk1Rk6ZQvVv0vvInpRNX2L4UYMsAAg8b9HbXMK2iyMMGOqUBWPj2k%2BeRFhhJAXj53zfqp7XfY5W2tCVzPqR5cxUy5c1zAZbCGieiqJSft779zuP89zH%2BU3yYlXDh79rSB56zPvhzNDUGGqb2XlL4tqlc0lpg5ztGWOoFsMotJdYmWx3L75LWjcLWJx6RQZ%2FSPNMsQmpQYuDZs%2BWuZQqLEjx9HuP7BOpx3MMAn%2F121lxv54WImUvItDHAJ3544CKtPLFc6%2FpXGKM5&X-Amz-Signature=b046813a50947fc8361dc591d6df5a27549e244694da42aa9bbeefeba8d3abe3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
