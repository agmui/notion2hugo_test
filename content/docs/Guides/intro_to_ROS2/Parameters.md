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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQJGO7EQ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCsLZvCPYATdtQ9ZmT3JMx8dBnY0ICqHYvSL%2Bk%2BQWkXRAIgPUNrtwykrVf0RypaSJGxm3qICqru5n3BkPdo2Y8UlWkqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBgx%2BwuQiL%2BimhuryrcA%2BV%2BdBbt2Yk0sRpr1rxl1h8z09yhip7IuO%2BevGy5biN5XS18VGkbqtGTNJoWWwcGt787psU6Shv4B6KRueAmOiLX%2Bdx76O10NdnOB3YdZXASIl3L6VqQeZUiUreC%2BN9biFPDFno2tsUo8%2Bu0X2YZDoYffBRKtWwW3PFRYOfSWXbPXz2%2F1pR3eFA3a0R5PH%2FLDnY449PFiyeRuVQcKYyk4OEW07QH%2Ba4impwdyDR%2Bz6x3FDjMn1UxQE3qSkm2jYwcmBUKZ4OkBbayuF53X99ZxaaghImW3lKPmEAjoVAl0Yz9LSnyJdon5QqDhkq3UatG86gWR6VGqtAAdILo0ax19%2B%2FjpOVw3zsArWgelFuQLe6dwv94Z1aCg%2BWKY3b08HYBEQH%2FtlL2%2FQpJyBO%2Fw4vK6nZzyklzyfoeBaV3QEC9f53aDBNTyJqxjQ%2F3YlEpS9i5PIEGOho6sCGtdarkzvXVwdkcyfCvCrY6z1DQHkQimjgjNXzDSSN9ooK66I2HkgKYP9C9QbRqVGkvsENsm4SJkKKCwTeaPIFO02%2F0tJxPnkaFOuS71e0QCBszBY1R%2FJ2IgNtTkfuXs2BcX6avuJ1254WZX6jCPAxe45WDAt6zB5VkUuFvyzIKrmZhTgDLML3I278GOqUBn%2F0Ou7PiWwJ00XayRna2eGUMo2g1Z%2FFOxoK5ZVMXzW4z1Chy5B7Dk6RWMMhl8Cg9Ot4dTesm6AbK0XQA52N2GNSVLKRJFjbv61P9TOl9SkxbPVcHIiblhedLigfO6VUTi1tsCfjLjNG7tm88pq9y7FXu3FgCllXF1tTPc%2Fz3b%2FRZdn5ln4%2Bb7qeCxjyhz6CFMzldolpUOS5smxeqF5l6GueQgUe9&X-Amz-Signature=ffa6223875edb4e0acf15c403ef1d1a80525a6602a43527b7ffdec5bcfad3660&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
