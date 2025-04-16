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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNXB4GJJ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T050921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICY4imOlQLfxg2YdkQfb2vs478SLS%2BxMbjk9SOqH1wL1AiEAt%2FxmOhitIBJcJ9somGGEbDXiJ3m5%2BAElI0KD3tqWxkoq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDJRTgndIFwrEu9oibCrcA8GPNoLZYyp%2F4Q%2BhOyqEcauzXJ8Wg8GQD7adcjeQ7my9GtNID7FzfMSsP%2FXp%2FA20F2JBdFyY67cXLrhDPwcKf1xTqM7OGfjPCz58JrxA8aMKcUN4O8kohEuzxksGneYQ4By4XbrVDjmsPHQOn2kM9IDC6eoG6QCFt3lFsPMSIqQs8Va0WnLVYEVEetm%2FYgka7biuhG3JrbzlomYKmpvPM76diBOhaXr0FS2fHrneGF8Vd2z%2BwUnUndKyv%2BWOKdZMzk%2FM2HrANb37Y8DhVqqs%2Bm%2B7pNfqIrknjQyqK69D7%2B1rbaietmrFamJnZ%2F5l1PqruYzQerfBWfF8Hmodi0I68%2FpOLbtQOMdlNaxF9EMfM5ozUT9lUzGWfGwSIY2JnMWNvcEMuyX2UUR80%2BRRjI7jdb1P%2FUD5Pvs53mb%2FnrdebM6gn%2FttxfUGAahuISj%2FdO4fO7%2BCQzDIb8dijr6jdGFs%2BvLAx77WqAmvj3O0tW8X9v%2BlFvFsN7JVKMePH6G5KGU8zYj4fG6qTAM3sj9kosCjS3NHTnXeWDULxVDuO0LaGeb6qHHxJPszDgUeLqR7eMIpIki4yNHIPDPbV8Jr%2Bi7H%2FeuwNGZjUUNOx2IFiTfHi434spCZRQ6TJmg2o%2B9ZMLPx%2FL8GOqUBhALY0c6z%2BG%2BLkAnsW2HKVqXezZAJBxXsk193CPd2jp9pQbGJFxzm33cBSPeG3O5JvH25%2B03QKNOJd81G3CfzkW9JzZPMAWVImxEO1peHeble%2BEnPxte1zML3GGFAZ4VzqfD3isbv1bBy1KLBDqKBRKZbtpRo6%2FkcpxsmshIcK789dzS%2FWCwAQvoLKQVstwN2qTbhmUK4rbMLuxMvvV0b%2BxEGpJ3o&X-Amz-Signature=84fbe506c58e0a194941b70ebfe77104d961753a304eeeb6167f3d6a150a385d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
