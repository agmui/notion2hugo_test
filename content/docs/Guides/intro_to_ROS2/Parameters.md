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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633TCNWVI%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T042754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIneuYUFKSvwlHbWaH%2Ft67lEA64YcWkQteRkwsnBXqowIgFj1KUTnHDOKRgKjIAkZz8oAGKYy5%2FcAKTWzPozJT%2Bg4qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOV%2BD7w8xzOzLKJQeCrcA7vghCD5bqeRbZXLqyyANvKc2BCChCuJYc6lbnydxa7hFBbOVCF%2BblijbDtjXu%2BbYrnFAinETUnc9BMpbKXcyerxQq3AT6SC85nzTKs%2Bqi8QhyVHmI4e8Uzm1OegKn4BEc8YzdRTj3xJSe6YoH%2B1b0FhcFweP7MOMFEAgtx6bMzhIQJUKtelXOC0D9lwVMH33ki9bUdS51kVCd2sxIihxmdfUqTelxjZeDycFcjAw0rXOFRyeQ2oI6S%2FfkNI%2BEQv7jMiHt5HJ8K7NKySa6zFK9xgsd9FuSyw4udyX8gHxCCSnRzmvZrjKZ%2FNTs7twzhLQh1LceuioISYgN1l9I4GL3xPY5lnRLM25qsWY0rKTyK0skZ9hzWHnbHPc4jYuWB8c6g592htN0Ys%2BLyLS83lamUtFDkzbmeEJR38f8dZJIbLdSSIR5uBgjPUpwenwk%2BjBvjLUQuj5nC4KlUjoFyrnhqndil6FenZ8MPNlO9QZ4WZPc4BagAJseaVhi4%2F74lNedmHbs0gdqzPtjr7KPa7CPMgaM8y5D3lXbGE2yTjDy7DyYc06ZB1XD0U1NdcnSfXUdGO8fa014Lvlf9zDzU8nBFzhCXxiq8SPRuTRm5%2FJXS%2F6EgotCHUS4YkrjwkMNLYzMMGOqUBEgd8UKmnFGGCQ39qA2tZ2Y99u3zkl%2F3yIWwTWTxgwsY0Yonx%2Fc9prsXg0alJjdo8S%2FMZV12Rn3gLtncUtnsUENEbXcHG4xcOON6%2FHMSm0J%2BWibKuxYsC4HrdnjSzvtfwrGC7OON8NlD%2FWQnDwc6s96hiutkJtdd8mQykdIrtlwaOzNmkKmrJX29DX%2BAMT1PbpsxR9FVl22edn0OZxfsXRfO%2FaqUl&X-Amz-Signature=10ff4085b9f2d2a238a3fe8601b4ef949bf01b895cfe553f8d4da35089a4e777&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
