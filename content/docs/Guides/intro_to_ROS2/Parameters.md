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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJV3JIJE%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T170758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCu0KW956bruXxgwkKSqxOyZecM9VXhrOs%2BAycnSUhCJAIhAMpb3nPInq7naQkvQlSn3AlLU%2FiJH0S0hIQPXYCRroUXKv8DCBoQABoMNjM3NDIzMTgzODA1Igxo%2FFWII13vMqTd8Usq3APb%2BEaRUeyhrhcXj6rqWdc2faMpqsypFqsGkBx8TfY7H%2FYjvKJtJQgl7i%2Bd%2BNJa7gRunsdY8ndTx8bX8T9UofEAiaF0%2FY7JMnZJ9cqc5fTySd8Lsa1muupYqFIeZgAs7uWLJJR2S19WT%2FPX8VJgIgy3ME%2BIcjES07S8teoLyKoAdLSEq6qRg7mN8pmm5lanr7y1oGB0exVSSBcrVT1d2e0LDUu3kWUZKxaE6PYiaW58O%2FfvMjqJEh4iG9wIvej3ELKi7eS7F9z8tryPGrgrWdnm0LcAUq6rrsQEWrqmFOkFbUgdMYiqp47IqFSVxXlgMP4ilyywFjFWY%2BWnObhCUuWF43%2BzYP8HsHN9fE2mwA6tSJKpOlH4sdvrC8LSzGb0LX%2FpeN0lzsG%2BfFU1I6MTEdBdeTxCWGUDgn%2B3nJKKaNzLrxgnDzjs7WUt8BjeDcu7LxcVbAraFkXnSXBSALAMN9ZnrI2ymP%2BNgIju1KSgws3lC%2BMLEpBAxvZpmiwAld3KQPF7VinAAtoiAXiEHmthrdinkhm8bJMgTvs6EbxygAghC1DGysYfRMa4aENVyWm49cJearEqQwrz0EdlVKyPMk2oY4kDNJ0Iwgw479KH06eMWY5dzCBXHyGu6uIifzDw%2BfS%2FBjqkAa3Hrg%2FhyxV%2BbqzZ4p%2FvduveRlo5CLdlxtjq7Y0yeXRCN52BuYACv21ZHTUlI2%2FIWCM%2F%2FgGoI9FfBZW7RoFntfgwNomqDGZMUnF9268Tf6La%2FJ2tc9WmZRmAvRP7Qz247SVi2BXdiJDFtZ8yd4fUCo3lGH6CM3NvBR3SSuFaOU5K0vWzePQ8oxOrCnYUusYZopZqjyJOG10MCG%2F6aNv89vMR5v0A&X-Amz-Signature=5d8bf3f46fbd20917fb2ec272b5517d96d29f7a8bd8c332e8cc63e8dc1b91160&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
