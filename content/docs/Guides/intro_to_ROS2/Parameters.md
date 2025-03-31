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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZZBHMBC%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCZ0AGeuEfFvVvIyaexK8w1WQRXWAeYv4d1R9DANHm2kAIgEA9CCFRileR2g3TDZkeKJaNhZfqI9w2mAftOZ5xkibEqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0%2FutZb7XtbPq0%2FdyrcA3kNAP8aKWCsyByMtHRMymrsnQQIg6YhQo9tLNvqz0zEQ0DVmYtI7STmQit16ElHRAl7jY4nGoBXfqUAbtpRi2gn%2Bnt9W2KauJuDpZtYYyECjJnzyI%2FDOj9J6SK3l%2BUK2yKqok0T%2BhUlBIa14BiViladJVc%2B%2BDb3P5ZPwgRLbHI%2FA2MEM23gFN4O9LPhZYTFMJyNQmU1zsLomYhHjNLhZM27eCFdNTiddHX7eMe%2FmSprsroJtau5Q8HzX1t5VdRkfPvuy9wuwR52kFSe4c30EkBXrLxyhpXycE1CRZ4I4K4%2Fz9ksR1yL6%2BS1QjcYTMNlGqyAeWPRynkzsq0ZIrY%2BJcA1Ch8IS1Ja6IlAWsSDVvGHuvVihaxKaWVsq2HgRocQbHVjhuMV0rBhPM%2FYjkfAp0ha7jwOTcnQZlu6L729xY46M6mU2UvC9slxePmUULfqCq1pQ9BrpYPVw7Rswnbp1I5PFbRH4h9mZbs9bGhWoxRty9reutwzKw9RM4g2rGjuJKn8KYTCuP%2Bp227%2F2abuAhUOi99kkFZTBTZ64XniQywCEdTXOLojzJHRqPzVNFUPzvrvsRpS%2F7zEkJxv%2BD0S1hbfXRdCc6%2BzjWxeYbQqTvfLSNIfqbKWWMVWfPV3MP64q78GOqUBNqEAePWwg8Of9YX8DYYgxlmwMz0eyH48ogugBSQBp0eB7kynjMK6CohWAbckAh5HVUnRwtRAFImPAH75OeHr%2F17FPkuuWn3dYaysxdspLHjZfC2AYKpxxEN8fQvzim0vrPrcQHMe8XpEgHG2TvCPWZHjthOa7Fo4i30mwW8qXd85XHp1R%2BWd95OcChqh80wloBJ7L%2FKdya1c%2F82%2FHzxQ39iC3Jo8&X-Amz-Signature=9171535acb668e1ae2a66e801db7335572af0b8cb2e8cdb00642874d9381bc54&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
