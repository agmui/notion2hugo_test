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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM7XJMVQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCgTmIthgSHGPOdzobFkAZ6uvhxjud2%2FDAzQVTQIoWXXgIgMzvAuUD9%2ByEJ%2F2IPDW7EksdPrAs33hQnpdLLH61nVpMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE37hdsUC10vNd2gXircAzMLmtWV53zhAfLd%2BouRpiyoK8sBdJh%2BX5aVDPH71QL8sGa5CBocHMWqPm66rwh2ZSiX7Uncu9Pwq%2FfzChcnfVoKw3HneAq4%2BEm2BcbbiZNOHqQ8IZ7x6EDHx65rACGhpp%2FdtgBPEgbq95oZ%2BDkndFg06d5P4KeAhfcP7wNLsHBGlKTIrnvSA9OvMibzIuwR7auA2E7TQnJC%2FDZri4F2BcwP9E8Vj9MJmt0cRt%2FMN8fc6B1r5TVGEZjHDCEzwBOb8J68B0A5qGF%2FiZYIwk%2F9dWzctXFC0bI4b%2F9xqF1M6gyu%2BlP51gvY5r63wf%2F7U3e%2FduwUCJ%2BRESI%2BL2WbA8JKHKScboU%2FYl3i7h7nvbbPsFKxBmZvedMSvhbS9UNgpndiFodcULQt79Vx0mCtQgAk6E6i8XYVQWDhV%2BF6xZeLl60IqNqA%2BVCBulf6F4Z6Dq2JXxmBlJS%2F4ly%2BPnLp%2F1DGyblIXgN8h8Dwam8yjk9gB3DGGCDA0cO6A%2FcodhneMBtybrGVC1Y6pu5VmRVMcnZPqiXFrBd6NP6EsiK6F%2FLNlM%2BpXG1SUay4l4Xh6tmerNhMrErPUE7jhBszi8LBe9lQdgBpZgu5RN0%2FFo9Rkcu16CC45aPIKH87GUjTS9ZsMMfE28QGOqUBg%2BfZsWUG3yDBj%2FlAE2G61Xas5BoIjgk7pbsX64FvuFC0ffORG5%2Bp1pCXdQ9cQ4y7UW1EBYIl%2Fnms7QU%2BWmKcaMi0r25gmQUKi8wuocAYKvf7bV%2Fs6yu3%2Fc9UoB%2B2PEI%2FSfqH4jV3vWf71NMSw8i%2BLehaHZAppfP65Ameuw3FR80tjcnzeOxqjs9QTUV0JO21BsiY1DVa6QCXEBj2r3pGhzl9ufz%2F&X-Amz-Signature=2b7e2c0d978ce6c20dd9524a4304987fcf19bb6f96b8e9fef909d6507cc7ea86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
