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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD34Q4II%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T080921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCT%2Foz%2B544OUAuoOj%2BbGDhdv2o17KjS3%2FFAgeOKYQHubQIgALdx0pF3uten%2BfTi1D2cZa5vsZ67Y3CrKHy4Gn6vsoIq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDHv%2BTfh%2Fh39%2BmgHdKyrcA9fByZRjx2IKXqmmUWtkc9RixK4KMwLfMuZfbxJoNQxCmKhUbtKq9x%2FBp6J%2F%2Bk%2BM4uGDwJLkVCNTt%2Fuar%2FGZlViaWnOQY8AdaTZJrhpmXEM18TFZ%2Bjp4IJbXdIf5W1dzwEkDY4ObNcUWpA9MP9dH%2F%2FqjiJ%2FU7sxGH%2BDpzHyMCP3oxJfUo0pItRRuir3jWPlo3k%2FReA2k7%2F9TN0va9tytqRLdoixMcspcYRLOwEE9JUXMkTTOK4Tak1Uxw4XUQJAbM%2F4cMJyNYXld691Ebb6K9KkSNIRwk9uYofN7RSkpioSGIoXWF5aQme00Eqr4z6Bju8%2FYPpgUPgMIS0o5sIMKWnlRAnzzan0U%2B2QQhsWnaK7AgY0T82Me1pBT23yZCQCBq0%2B78g%2Bk1Ya2LnD62m1NGe7D8x5fUu27fCPuEW0yNSAlKiTS8dHxj4Di%2B3swjl57O34R2T1XCZuxbr8uSK8xokbKly8Mr2dvuUDUzXaCysghdGCCBBgsXhdlp9KSx%2FJcMH160RCObiyTapEAcZlP0SvMVC8a0MrVJxHpsLIa9Aa6Ep1Q6%2F54bxnRquKA7YN%2FB%2Bxd5KBR4plNznj8Tl8RJG6BZe11H1J45P8nk79N5vpwENgGzIFEhOWAgkPeMMbrtL4GOqUBYi8bWBdy%2FVf1%2Boq6Xcf%2BWAXiixw5Aw%2Fd8UJA0lHty8IaCu3uysDEXIv263n6nBjWluYVKZJ19DDiN75veKiPCl%2BhO6bfEc2v6XWy9QZ8Q2SdbW9MyH1ZJxj5EwqMDr2Uslgo%2B0Z8nc2V5OT%2FAbYW74ZCg8fd9o2JDjlQqWTu%2FhvkrNUlXvDUnYjB4xeuqF8Re0bV4k5IYNXIFSOCAKFEga2x2Q5D&X-Amz-Signature=debf211de6c20c5e5b476bd26e8d519883ed834fd2a6ea9056e48280e4e87830&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
