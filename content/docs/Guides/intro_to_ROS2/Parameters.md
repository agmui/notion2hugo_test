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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KTW5A6H%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T050816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCiurSVLfAV8C0p1MM8KKeJZNCYIXpVN5RDF9Vu8ZwD5AIgMMWMkrsR%2FM31L%2FuzyPJCii1dV24T3oGqBr8A0%2FKHxLIqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMsA3boasCpwq7ubsCrcA4zwkdd0%2BIMUuqgEdBuWBAouFtvoOviNXkw831i4iftuBQiEfdiRrBckFxtM6IC6aysXeidZzxMuFfZN%2BQOqQs%2FlYNDyHi7LqFUui3Ib1Yy5z1gcDDDkFd2RCrFuLoXdIE4JvG7of%2FmlBtATXx4nX2Tuxg9UxVYIH0Y59R2%2FtHckKY8aVTljmy7DZp68cpLvE7ML8yPqEI2KD8rzPGJdklJX80VTSanTJYN%2FhvM9OJ6iCqkPO6U5nPiVPrFiUoBkXbi3qwcwRxh5AN6%2FGg4O9Df8leNXGtB6GOyZTagOHgpuHNvKfgW%2BJcdootnFN%2BN3OIstR7TEbu%2FqR6K6TF%2B8Fs6vjGmYCSaHbIXbo4NnM%2Bx1XadxAKQ%2FFATntfw%2F4qM%2FcTfmK0zkcNu59PkMsQ46z30mTtKcZnYpvQCFufjJ1QmpzY4NmOk%2FmO9etJ27mcwQLEmrubm0r2YSXXpACvsM1FHPq9leLXE3zTx0N1Fp%2Fs8J%2Bbbr4k4nmpbn8Dcyoum5ZfVWF0Mose7hUQ6FqZIq6FufFASxpdpN7D8RdEumi3hOYkCToL7K3vyxH%2FlGPEmXfLS%2BJvBDpGcW8gMr4hOS%2Fosfg9INBmaJYvntAf66BFp6kX45RBohZPxLX4JfMOTT578GOqUB3ZpPpb57MTwkbjSyi6Ix42XnUdsQzl1ctc0UiRVw2PO1XMG1WR7xPwT0t%2FEEj4XO8DG%2BVt538tstHs9Us%2FZN4nFumhHyyZpI86t27dVgTxAfR%2Futq%2F5Kl9YsbYMQqgm3HVA5Lk3IAWex0yj1mtg9hjhpYFmnHsy2BweZ1tzEgFKtkTLWuFj7W1bmoqWnVhy5Y3iPTMYm%2BRF5YhUGmnW6pk8FSnxR&X-Amz-Signature=07dbb8f26a3e37c823d6d0a021043b44b246b48fd5efc8ecab5ba17ab7fdddff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
