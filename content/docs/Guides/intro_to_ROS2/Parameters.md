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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662223ICPH%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T004435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQJEfmt7yu6yO1J5xNcoagHq6MyCqI7Q6nUbNdeoqHrQIgYk0xH9Wggnx4hQ6Atnh3CsoroTpLmKlXHHG2otuEP%2BcqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP2jK5eCrCIuWeoRRSrcA86qBIsPYUkTGBw68Z3tZYbociWOJUHZc2XBWiRSGX%2BUn7HwzSj9%2FbE%2FG3LzaVaQFQeOe%2FZAbF62DBs2p6IUxgOoNGD8d87lHiEEEzr4fz8EZW%2FWlVBHvXABurIT4rjouEZMAle2qnBgfzuq4chxyuDtethQNENIfwwE77P2WcUqMAvxx8PcjSiQqI0bsTOVWZ0boJMQU8ziT1P2gYOusnv0FtOM6OHLmIGGkWWnrexucT5RmksbAfs9QblNflh5XLIohFX%2BiYAKSjj7cHVId1DXSCPxhTa4vGPFjtAlI6BAboNA%2BKpliD9lRxipGdO0nEue9b2gKeyhFZ5iFVd29zqHdxzzRr4mhLdB%2BulKZLpyQChWp8%2B7sRYBr7erw4gsLyoBahNQ%2BuhbZAo7MlObKJzXnthHhUUGjDuFqsSFcCLld%2FC2MnLnRFPbfi1vwssIEI42HsdgMgK%2Fg9mYE1xY0BJEIIhqfxy4oyMmqahwxoe9omHFlzf6eaZmu8APxE9mzo24igtOaNVC0cGVVHkzydq6McVcRF8%2Fjc6UOGI0DOqXmMeBHj%2BWShd1LBjidBAPu4uMFIRxqq4W976yQWSTru6xZK3pGcxvTfOdkAhotqqCjGc8ueMf8OqZ77QhMLOztsMGOqUB2FuvU49masM94TWHfPRHrpquW4p29PRn%2BJXsZyrPvdMIwvz4y6owT1I8zZWuIHbeDKhdgvGEghULdKT74Gm04CdhJsVp87Mz5v%2FvMlwJFMy6%2B7L2Ndlema6LtcJad4Fqh4fML30tSSIAs3AgyuTkkC1JUb1hAafCI%2B1wBTEnEPIbl%2BKTfXx39PXMF4Zn5g2xJx6BYrPnkWSUxy5iri8RFJRs5JHW&X-Amz-Signature=d2770b6303f33c999112b35ba1a89bfe0d7f6469cb6d16c040213bd4f330536b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
