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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7ZNL7DO%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T160811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIGcW9HIK4aftXYMsb5NAMmj32IJ51eS1N4TlzF%2FkjlYPAiEAs6auGO4fmYZmJVhDuF%2Fqc6RCN4yZeKl8Y3KzJqPTSkMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBP%2FJTC8gZuCBqO0ircA6iAwT4UL1%2BKX1G0EKZ3dPijdU%2B5hZEp%2FGQ0O2WUJ9KSGNVULeY3i6FqBf0axk7ILyAcsKqYCR6813BtYUsu0ib8Z81875QvTgCKJyu0mD%2FL7DKOX6myevxH0rv71BB38mOOFiRR7eHJ6Dci5oUd0XYuBEIdOcAFwyZ8UB4UtqyRqf%2BBO2KCC2RIJ%2BWZ7Oc%2B8uLKoH%2FKKFdOYEEul9vDyduKhNCqNgkc6SAZ23V8%2FYbS7ZLV4j0rifiXidjHxXrJp3GF855L%2BgHQ0uPL22cOg7jjqF3IOrRy%2BvLnLOqzBX80S6TtoLPCZY9OB0W8mMzD6a3Wcuc7sBJP7f50uedyaOR%2BETrzSFZqombK6khetNysO9UiB7uaorFmAoAWcLsynto%2FqYr4fCKXolkgQmwZ8uRMBYz2gDwYL7hnTV6wf3sz0iCl0SuVRNusnfcIbMBaRGZm7q%2FrVR6%2FWftBTx%2B2SUg2Gc9LE09mJarS8tzw3blMqjjExUz%2Blg5jjzDGx2FA8NdgAzNi1QFN96uy%2B%2FJ0bI9GH8ZUwIjdvaxbuNqstQzhDXS3VJfn2ZPzqZ6oJswNF3jgKjvtBMML4h3asFAdTJCmVXsTNds16nsMwBtF2RIlKsjPZbkyzjqbULAjMJ%2FN%2F74GOqUBo7R9ngHnOIhb4uTuxi6F%2Fy1TkwvcTEMuD%2B7wFVSe3SIhYabn3zXwDE2D9hXMNQ1DDylyZG5ekD7XxLxseWyogp%2B%2B8Y6msJsGQ3vOOj0YSZfsJSNxq7fdqZnw%2FwB6xXrFzQcp5HNpkmf7YoGoZ23vj237M0S1eEJq1IizB9MNsG2%2BuAZYrXz3PM1%2B%2B4KNi98lFvFr00PWQ88b%2FTPr4ugAfc3cJMpn&X-Amz-Signature=0131d3bdfe16409d9f470440122a2bb838da45ddf91b8badbe465def66e12614&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
