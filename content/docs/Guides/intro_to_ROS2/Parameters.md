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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5HU64D6%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDNnzO6yRHBxBUN9DajuevvB%2FzYqyfYKZQbB79UmGOOaAIgI2DKnt5MRHdH8h5kksDV0sp3YhG6fxFW9bHaV62hbT0q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDGqPCTnO9HyaF9IN%2BCrcA3%2BFAJBaXufem8f1I7aeQzbP3sUhXfzDNYURyXkwUFjEpU1tsgKRweQDm9Dw9olfX0fZYjm20vPfwKskFfE5mIVMv%2FppLAOLxFQmCH7g1nDtSPoaGaEHL44AX3WbyPFBxuVmbaARfXAH6yWfKUs80o2RRyJCTDired7sAs80hz1IJnFiOslW0l%2FXKt6DqGKiXjdYuI2XCqtgCca%2BzcOtMFJjyqNR2u0eGOH06SaWc8jPLpwr02A4cs0aqCPHdOUCNxE6QhkHLruUM1o0oG5VeORs0%2FalbyaCCcqJLhHtOf2WEwsCZsOC784G22dKRhU5KyEpg%2FjWf6kYxuv4uwInkSqP0DW1yYTJlqdpgwH925Ox60H1pf0odRfd7NnzMIZM4ACXwc9q83NIaxY9elbZxjkQjlGBI005GHpJcY9O6RpbYh%2By35OE2NrVqT%2F3Q5aCQ0VzTsAKWiRTitG7XimPb25x%2Ble7CGcETMF2ZgqvsCD89R0nkcxr%2BjMd1ITgKaRKiVr5lGFbs0ydSbZFo%2BTPH4tvUlWT8mp8orT2KELTlHmnnpMs%2FmJV%2Bjk5rUsEk3UUHYl%2F%2BLrTeUpjJIoLG8kiOGuktWnuN5Jketv0hsvCBgLsEgyr%2FEjX2VyQ3QLbMK7K%2B8QGOqUBtv%2BFJ3X83J0cQ8pQ%2B2KUTOli%2FS0uBXqX%2B8IiJYafFyVI57ewlFOEOAV582mT4SKV31gKiQtXBe2F%2BMe1Q9NsfFcUflIgZE69eAKJSJVnWhEbDg4uhfMyeFgXve5hMm2vuFRIBLP5fsDJOvymoVyUAReMjjJTlxb0E3fq9%2FfG9%2B6U5RWsAHaG%2FCCOCJEuwLA2weuSE3mxNaKXuMQ2hkvRMNGWk%2FNb&X-Amz-Signature=d593a3419c744d330412f074a1d0c1959ce6dc40e50364929e64bda3e3636b1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
