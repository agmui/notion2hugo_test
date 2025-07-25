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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NF4QW6F%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIGj0UPS6LDeq12NdgnXKq1XhfhkSDKH7YfbkF94sOSwcAiEAhev%2FwTo3sTiapPAC331VI7T83waPNRSHmI4%2BYIZ4Sx0q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDPL%2FR3mm0GrUhpxuBircAwnO%2BepEjKgp385RO%2Bxm7%2BmaExA3dgcISlu85kI4F3huSavxqcVSsiSBzD314c%2F6CFhfTwiLHS3stvrpWVNbNUtt0q6KrMe7YMTxzkkgMb%2FdLnOxqi%2BGOsFv0QzKnCjWXPBtfWecxcRMTh4U0hk82PYKdmzTxyFq1AyA5IU7zyvBD6q666PkR4Y6LDXR%2FJX6j3g2eLV%2BUyfxnTzHfeWlLNgxP1z06%2FYGaGW3kL9gk4mXo2JAkOm6orDYwf%2FjyVKHEnhUrkoPof63v8PZk3AfXCH0X7giyb3F8ZKwQHUVn7zueAVl%2BQG3y0GeQFunq3%2FPr7P2%2Bj430Y3hjQg2n%2F3%2BKRQRdq%2BF66PJe%2Bk%2FJDkUYkdQ%2FfRQSeKqjBgjRC90UddFseQqnKMCFY0ut6OzVwMkyapFls30m7pTI%2BzEY9QD01JKJbwHvp2pBdKtHSmABUuLb8kAY4cnd2sOOvZw1dZGJMsTbURBYcFdnsowpuwP6DBCjFiWJdgOqBs%2F2zP%2Fr6kTdVSSRkHpK4P4r4rPgVsg4is5VRyB1Fw9a9VUZauZYHS%2B5ft6dh8Hb36u9r98%2B7bnvP41v%2ByvInK9ebjZQl7ozZk2%2FAW3okxbfaL5FAgOPW57iUR4GaNrMA%2FGrDQBMMHnjMQGOqUBgw2vgJ2YsyUegHCiVxAh0eYQ8Rx8vHwpOq%2Flo%2FvcudSwOqrU91H4RBxyUQuohXOlKCbg%2BAQgKWnS6LM6F2n2UpNJxnoZZ8FJLsVC3TIqIFaVEzXRKxrFSeO28A5FtxMTtdXemLY%2BFF8xzVnlF8dP28%2BjTe3HZX%2F7qDb89jdWl2FHWxK6c9s1W3XJ%2BZcfM1UZfY9eGVQWRdO9Hg7nZA3eLCwr5JOj&X-Amz-Signature=d56effa8459ed312422b2c315555118f4544e1fc5f5eed0caf826913308dce1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
