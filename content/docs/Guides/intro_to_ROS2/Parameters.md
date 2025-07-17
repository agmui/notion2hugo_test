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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q64WAQTI%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T161131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQChFazoO89m%2F0nEDWZAZmWgSCghPIc6RFDm9MohmAobHwIgdNPnmaBuZVe96AHNf2JcvGO5Emkg6xV%2Fmo1PZhWInNYq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDL5C6fk%2FhniYfSp4LCrcAxGl8Umu61cvfeweipnNFTCefvuY7qnx2%2BbYhtYqerCyz9JqNL5Hp3IlZowGM1SserrKO4UgiGAC2yQlTLAltQH3ZLwHQr85XOGHLpidtm21sOBpqGSlEzC1%2B49BfNdbDWk1Od1Z5%2BEh3yyud6AaMCDQNzIcZgKSbcIChq0%2BH%2FzZFp8Tx9xPjdtgN%2BGR8L%2BxNuOCb3fKGPb5PqgnIA6oZnJ2zZ844ee6FfXunxPY%2B%2Bh78Tr1wOR%2BePRPkRniJv2dbg4HkAUA%2FLsoheXtu52rj%2B0ezS1j3LQcfbHLRGIlKB630aD4batN7olIPDs68yW%2FQQClCL2%2BXz9emIhMFrrSLKkfXljg3BioRgX2zmmtrs6nlYcMDu6Tc0gVH1QvXz2dfzclvZcV%2FNRfnIzEoZhTbFT9oiDwxmeGNrKMZcWF78gpgI1h5NjtvYltBP0P72dfSg3lVTMZXILUfFlyAvZhBWEfeeoQl0bwpehLs%2F4glKO6ok2XS9kEVy6E5LwlYIbObwD0XWld6NnNUx8o8%2FavWbaFxeq%2B38W4Ts6xLhRr2RqD%2FB553Msgzwwr220%2F9sPwxYz87HduxuFO3pMhaHcRcHaiC9uHIFESBgdzfOvZxmx8OzELz2FE7qXuVh71MOW%2B5MMGOqUBuTxz1QYhBZkzlhxmUNmvxLJ0lKlSP2vBLxdjPI9zuJMSpBW1lbEJvYikLBYwrBw%2F9urM23llIGoz10URjqGIxfJsaXOec0whVTF1bvR%2FtkSU4Uyh6qbcMWxhQKc2qjfCY3NpVXiBCP01TtM8CDQESOaIU1q2eQ8vwE%2BZ8PZIma%2BHFWM%2BOHf5AzzV%2BPwGQMonskNeNt43bGERniiY%2FeC%2B4Htw1sem&X-Amz-Signature=8eaed320bf0e3c562724901db6ea4e16e08b3728df7c956465f47b5b468353a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
