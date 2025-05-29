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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG37RS3W%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXW6bWI0Z28hzfRbN3BUUDrinROc%2B4%2FbVwC44EkZW7iAiBDepr5ai1XpafXPbhvYuA1slrqrb5VPwH5u20ih12cEyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbrKmKRdQpKq8VlZOKtwDblwKk4aowG%2FZ7yMYmOmqMRxdmKFASXxfRKLyWOmBSoz%2BPD9K2OzAJJp7F9id8M6FqFG%2Fuk4ik%2BvFs5PV4nyslT3l7b7PMG0tJr2rijSqEPR4HK7hvMU56BOJcr%2FBt8uk2kUSu%2Bse2pgtlirkEaDPhGG0Ro0dVZgfGGtjybVemCmLsR0QwGFezUEa2AOSe30TMfrdG7BEI%2Bd8SyTy02NpKZ2Xp8LgEREFzcR2u6R0BbQIFpYnhi1qU28f%2BXspvpAgOvXkjjrfWTEP%2BRx%2BOYKY%2BiwEBLpqL0s11wkjWgMp7qmG4sz7mbOXkzjRq%2BxJNT2OiKdTvvFNbLL%2Fqe2xuGaTZGtLntKGQ5RDrJkfOrq3fiSY2dkoChq8HUhcLhzaxZ9%2FY7LnnqZmOlwfRNr4YlkxJ3nl1S9QXzP817EUmbBm25AIaYddHK10rqhTEZ5tZQ7cW4jfnS0xplfOZwNAI2UNA%2BMakpAmZFKGtXdiqZZTB0yCk9usppjan3SgSoZxkVCXDHHM9kp0J7BB5v0evYKXUiuy8UNzJrkCbU4AdkSlAgCPOel5JHiaZBiKpzIA9l4Z179JvHAOxs4OCceRo94DS8Bz3SrRGjQZZN5BzB3UrEuFgqFX5NFW%2BWeQ5qgw79vgwQY6pgE762aP81%2FxecMuNNZfwcHtozD0hHv%2BZieccng8qMdUBGUX%2F5iNflUiY%2BYd6KezB1RZEqeyObCqrWwYIBGPfmslIQvt8aGGNAuuKoQMvqWgigPiscVine56Mvh57JQCdtqcgFY%2BIaaJgl8f07FB3jt%2BkeNg8liskRP%2BTt%2BjTONeVPqhQUu6%2BEHMHQu6mTUCvDQbNe6s1qh3XCJzksV%2BKB%2FHf3V6yXIk&X-Amz-Signature=c32fd7eb6311618fe7a94affe96947f529a292dc721ad0f77f7ae2c830066a09&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
