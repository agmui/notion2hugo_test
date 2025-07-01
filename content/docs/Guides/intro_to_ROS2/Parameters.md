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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAQV2WUU%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T005038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHILG5FZKay1d%2BPxEFy%2BoQ0oCfxtWAKPFpCkE5%2BQEMmFAiEAkLVhEB47pOLla4k0ZPwt5w2BIVdQkqfC2I8cAZDn95IqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETlSwMnzJc5n4dk5SrcAxOwaBJ1J3EeRpNd6kEvE%2Bhxx57SmaTvDlUqym4sGefi%2FfABi3hO4dxtoWEYUXXs2g0s43KGuuvLGYLmi6%2F1TYPQbjzD82VJz%2FmhUGqmRLbDecWbMUGpaRvaf5JW9UQAgpxtx7Mn%2F8ytz1oL3%2FNtbgrGg6FF2D65qdzztNISz9xaN9qfIbQiTnV6JPABRWxLy%2B4PSgepIlM5svq%2Fk9nkzQ8hmHbZG16Rr7TI1yEZhW1PfuI65pEe7m2oXBBk2PZUko%2FhoBy24t74U73HzEh6Ocs7M6bpds16MOeD18ZDduvyYAUoJRNKaJYjBsYKtND8jpnBzl2LT8XKaWD9rfdxaL9WZLc0NS3X6RbFboneswCO00feWmYQd69fUoqEk3LyyRza0%2BbkFrPFX0BZvNFfSax7cK5MOvBMhMYIn1FlFRsCT8N9H7fYtCu8JE0bvN%2Bophtm5Se7Q36Q0wksGesvP%2BAE6twKizn0upHA4CZoxp515TLo7HkftSFh3r521iGzf5VVITBA%2FilIkS8mxei2jB%2Fvq%2FOTwk%2FIo7fnjLHMlguaIFu55dop1RUSj7xwbnxvc59wE1vEYFSKOTILIJtLfe7tl9P8vtHrJ%2F%2FKIbgo6B9ywZcvoGKnMMkJABm9MJ%2FMjMMGOqUBIe3xdUt3Bhfsenw%2Frkk4kGBq8E%2BXUQgSictDNNX5X8ns5kYCOtlNs8AM4mRJ7%2FQXaPZJnkki4IpuDGmwwiIhW9vBzMocax60%2FOYu5cPuB4zxk5Kmpo3OONPeWB0z%2FRZgkqZhKEd4qpYwKkt9neJvAOnp7M1kruwTdfR%2FHBdZGJDpYbtFSLvH%2FDx0QqqrrtFyY6s8R2cvPwwhl9D%2FIXCln8z7vg9u&X-Amz-Signature=02ec885675683253f4290cf209df0a5cf519e18f19cacd19f3f05029e4b37107&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
