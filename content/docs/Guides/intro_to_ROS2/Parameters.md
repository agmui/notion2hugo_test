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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QO2DANS%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T131843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIAgL41LbXzEs1fic4JiybDyF2cc5h5x5USas5hDE6LomAiEAlp0WmeGtgFda%2B0KYJCTjeoh1dI0saGAnCDpg7wctgsMq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDD51GAw1oeTzXHRSqyrcAxQbqGnk7TYzPm13NZBfvHSt64a4SYlNukNWgt3ikRLWShXJAV6CgMBSsS0KmU9iVPrsmO6cSgeS28Z0z%2Bh%2B6A79PWVNLLeR3mInPc%2BZ7UP9S4gKPc8wFU%2F8N5efl3Hd%2B3LRatmd1pcP%2BiUGdc9ey4CWa8pYoJ%2BMb46xJUrpxfVf4zQ%2BW%2BNQLevBi%2F43e0NEfTVXfGZChLToWvF135CxHhGgQFYfp9Xd8ki6cRzBhftbGvnb2fYpILlzUljX5Btoa%2BDzNQA71FCn7Q4w1YaAqy%2F79V9FEmGvEl70z1AudV7QcOG24M7hYB7W5TRCe8BslDLthKOa1WJv9eZnUrgOth3vYTVFtUsLBcC27j4M2vBpMDvJBkHFbQCwYq6UPDIBNShagEoCza8i4u%2BR0noRrlud7AVzxd2gVp2d0Gxwxnu7%2FYcdG9cFGMRjqHtXYnUAHCwpzue1rTGYMVidqsuzIvDj0BPYZvfP2elAuPZws5FGtSNYp2aX436bA1B2QBYx30a3042iClQrU4wHHCQiFJSI9UbAAO0lTg1TQI7ZbQWyFRUQQCVZScofw9Vbuw0jlKfUsaJxCCJJ%2FmNa99EzRTYf11IZ8tHde8pm6Q0EFJbaAGTS4iHrGwlK%2BXhxMML%2F6r4GOqUBRyR%2FIyAdwSA6LuKx8RrGINLytAa3SvP%2F%2BNdfFIlcLKqUcE7337wc%2Bct51rtod6Db70B6LfM%2FIUB2jVdHNZE2l%2BIRKFlJeVJuy%2B6G9IWxvZ8hAQgMwkPJrjGgiNj%2F6iPOpr2MTD4WvB9%2FhLZerRIE5KsULkgBuyf7NfVIczLC8boHVlWrShGqjCT9dw20LRZLcszFCNfvMGyPlytJ%2BXiBsROOpElw&X-Amz-Signature=9d5a960708295817399b43f987fa9119fef53554471d53c17f979b43ee6e1005&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
