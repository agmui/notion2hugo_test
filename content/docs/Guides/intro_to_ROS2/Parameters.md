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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3JFEVCM%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T140851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIF%2FL%2BlTkg7ZNqLQ0LXf6YIu%2Bz3ekT4Rvilf5APkNaNECAiAtTsRLQ8OQormlRI%2B9B3G3pEfx9%2BzSPk2H3JOCqjAlKCqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw0xF8CFld3p8G9ITKtwDd4S0pzjKucIDzGfALk6mS7IvxzmYTxu8S1Jvbd9gGer2ViWHUx0RtkqATIdwmJo0tkZX65eFIxbj7QZiCDA1Qjo4xausn%2BCgW4iATbwwPqeLKsD4FgDyttSXY7tPH3ghjHkS9YOqM8moexklpQLf8yGoIphzcM9UsbLuhBDr%2Be9fzSgzpH0p9PyTL5sRBQiASG4mux19%2Bujb76jSBmOOcqLhQIgYp%2BcX53NenbUXLzu8txD0eGMrP48suFYVSmp8CapThUxQRAblVvR5aVtFAuT8028ZhR0Ffc2VqZ1LdwZeAc4O9YxcWD6ePSKJ8B3LEpipxb9a0Lz4UHq9ub%2BgVfSu2%2F1Oqm%2F5Mx%2FwXVUVHY4N0RiXGCN5qCJZRvekHiLxRp0%2FAdGUXDiz4qCeRuEGEkDuu44%2BWGRw6a7%2FLZ7N%2FMB%2FNxhli40NWh%2BoJjZrsjU860QPIi5SaWqmPgU4EgMcvBbMO7IsUKRDD5uzMLbDz29x1L4tU71jTe0MOtm%2FjxjagJusu96Byj74AHKNyQaVY0zF1xpy%2FM73bGecoBBGdcK3N8OCnD5KaNqZ49VMBKup3nJRb5amTskUBfRkQq5pSZyVbylAgABAfzJ3cB7SdLVczzvA058gdq1O6v0wvvHBwQY6pgFhWiPAWQec6RGR%2BWgVdzgN1MkqfrhOtJhX7XbwXrH9HN%2F7d2IDxwpSPYur3%2F9PWErsjzQ27YoYUqCmeATWdpiBHoEy6KoNL1JG55W7n%2F3z2LGx6Dtn8eLF7lKyubJCt9QzQ2YvVYfRNsKdjOh0MbKuSPoemDbSbaxY5R3FdVUJOt5WYHt7HLCeZUcn6ATX3oGph47w2%2FYPIqkiC7ONjHQbTUn8TfiB&X-Amz-Signature=8fd59821269ce04a993d2773e64fb076ad82616604862f6f5aa079d368412d56&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
