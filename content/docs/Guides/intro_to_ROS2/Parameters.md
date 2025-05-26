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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4MTBS4Q%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIDPkfFJvZqnRwuAmct0DsNg5hHkOUMxIrZ1jYKnh9bdgAiEAkk8e5oL4%2BpqXcP6H1XvzoofkYzx5G6GKwQuortQmK3wq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDI6qWlH3%2BWW5sF3RtCrcA5IKfFA4%2BRuWk3c68DB%2B8nuF8qFDIXbSACoo1lTX5pufKHi6LeFkLGB%2B0Uw%2BdxS5%2BWHBC7b8O%2B5%2Fdu6AlP8bgfffSQac%2BMpe22FsMDuztC4gKm%2B0OjI0bcHRUKzUPcdLxBT0zAS9w90%2F7pOwHE8qyD6npRm8CwabiUg8bLMM7S8CaRZA71JcxaD0Rkmu8lZkJMEadFRJrBf1D8xsGrmXLJItIO1rsH8E8cnf8sfHoMzZnIWW0p6zqJyRvwlIEZ7cswv4AFLxsFFI1ip6oJzJ3wXq0wAHO03KaEieTXbD%2FniSD%2BrqL8DpB5O7Qzh%2F0X%2FCw11Xp2Ox%2FE5sQM%2Bzws%2BVFv32D%2FC1Y8kVuJYrGqzBQ1xXsVlj6Wgtv%2FwOp227mbi7lCKfRgQGT6EisjwkHLr9MSj3%2FHl9Vs9j64vO3mdVOFD2IEGA7iW%2FP1QV9lLjeokHyXWqCm%2Bi51LfFRJHXx%2FWaXUKgDhyX6IbknyW%2FXZB6dHV6fmSiPtyPmXGQcUQhezSSgAOpf%2F1HLehtpKOftrcYiOYN28Rl6igBfpf43nuOftqvBZHpMVkREHJ8tS6IeYpWfjq29V3MyQ6WKd1vUlPfpBNyJRkw1ZQ2WCDPKlYDl7TzXETAW31kvdrGaTPMKzX0MEGOqUBcrdXehL7iAzDifdxk7%2FOPOGPzMNOZBkulqqs3I1m%2FYB6W414bth31txX9Qyp71F%2FHUb0F%2BpRnOqFQnW3A28ENdoEczkB6BVqvf5ADIo25onZl7%2FfR4nt00zxq2ALEcPPcAup25emAnL8mZb0lsELiMUNireowyQSYYd5ltWpVrBY675Pg6aotZmQ8ckR4STl9K%2FJXU22U7tk0eMjTgtiPm7IwtXR&X-Amz-Signature=1bfd5fc1d99efeea2db4db47adf7b1ad6f264062eea4e605dcea7a027cf6e467&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
