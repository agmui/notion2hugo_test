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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3T6W5L2%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T031949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUCr3G7oTZMlLhCRfFTvdmm9Ji3jByPVx8GaXfL7LCPAiEA5s57t%2Bgz1EHsSEgXihb40lPfD3qocjnbe2DoVrcg50oqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAuS%2FeF34QPmI7%2BqqyrcA07Hm4QKBfycTcrl5%2Fa3ENUatbd26AYHewC%2F2DZFxSB1kVAzKEU3rTuQaMURBVddQvpPCrx60juGZCn1sUmgiAhKojp%2FLPKNmStKDlzxwpmdG8tsm%2B7ycnXTpy8xBNqwqxf06w4x1%2FUb8BwgCHds0TT9GwnDfQcqe5VpWP%2Fzdhla74csGA6ipaqan0ABUzZU4B7AlXjhaOqY3G9s4y4GwcU45Gl2uNSDQdXb4lvLg9WUtjRzlzsblG8wcRIdJ4TNaGrgC4gMe6NU6tymc86a7WSDC6n1yxGO8LyjVm0moEBiYkLHvqLeH4Ueh6nEaY%2BV8wB2wyOe7S1CXd9N%2FwrljYT0N6yw%2Br1%2F1UAUcdZmRF59EKLvl5uSapLpbvjr%2BUNOym%2F%2Bl4cUyjOXnzHX4u6xwzRklyzD%2FFlh9cEfkpQxHTeNSojublFAj5nAKYpvLls5RrPjdjMPTYnlZNRMw%2FYDd%2BmV7Y5tiex6nRDqBMClgPTF4p7sOgRZrB54auNzhaLRgKEGt1hqr2mOnTs6koKtU1mVXqJ%2F%2B1DjpA40RVH7fMj213NZyZ4rB5CSIpVtO808csrIjKH%2FrahpFhQwVtyegmXIHkx%2FdWL092%2FIuPQeGWlhIozfjCV8DQ3sKC5FMIGuzr4GOqUBJ762zvhyasoGJIziO%2BEbEcDhvcmZvU5TuGjRv%2BYyGkCuEDbVgw8QY8ffEL%2BRpt%2BmnPrkzHW5KAilR3pkOSSuPrS1gLBUwrAnP9fvXZDabBHEfVpz9G%2FUAOFrzSFMwJ9sgkiNalOoiAdoeH%2BF74ltpYYY27GEuWowt0q9OJYo%2BJ740E3UUqgX0hlfuMwhLx%2BRtUDyXAuXA9J0MUK1LhmAEL5hUKbL&X-Amz-Signature=a000ce7f6dce06a4288f70dfa631435f197e2d1558961ae6cd27c560e6b89885&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
