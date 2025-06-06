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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMAI7M4B%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T132307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC8nWnRSs6PO%2BNn5nD%2Fk2aQEWAGAFNTHziXVIgGR5YtwIgXQiVWvu%2B8adWt6RgJQDWJ5dougpBcry7u74fIFyxeEEq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDFaBhyS6m42HNQxhqyrcA5fZtyAYJ1%2Bi87SAdKD9bJAxT6FZ7PrA7V1IAu3Lu%2FF%2BaQfjfZO49KRxducNkAF7lDtjApdxcFV8aW2hiYLhv9e24Q%2FJ%2BHldB%2FDF%2FJsd3UV4WA04M2JMM0NnzUBjFr0qgsqCe6gnthXoW5iqtslPZll%2BB9Bh6ipBr3pJhLKbDTsoNKyt5XCjgNTDsIG%2FTCmCQDxu8yvvJ1mS1b26ioCZb5e1Ns9duXRFDzyizAklHPdoMIsbiIG9MAbu1vtf1h3LXfZCaxXqN7gYnZUmcLqzQGiztBb8MxDdbIYFasWdwfoIUWyYTSClwxYXIZ%2FsEbJKNH7v95chgR4RGNg%2Fpe7NgbIViSBtE78VqSXF5VgKE8%2BsX8QjbU6N3e9SLNBA78kmI%2Bvg6v2FjEMBjXp7YLYSr8hdhY7FbJp%2BF8JxqKYdoMQWFPRv9oY%2FYl7gLBkd0wfT0S3KzRrzGy8GMQtlrej4tFDc3j61AcwgYm0QB2gLqZXWw5h66pRYqja08bj60RAE%2BpviBT2FWzCO1FBu61RPgvg0LJDrFeJDbLtTUH0fI%2BnGr%2BO6BqNEJnit3WvjgtWG53Wo5mTHBM1XA69eZ1%2FgYcSHTAPYQVI5thMniKlzt3%2BLhIhKkTbTO035jBfzMMq9i8IGOqUB%2BWHwvQrfSCX9QJO4jb2NEJd8dk6%2FGpKdIZTQgpFq7ZV0UUR3q2oCk%2FNzU%2BOt61e7kWuAP%2Bz48TE68CbXPZl4fQxi1FqdHT%2F2su%2FvVKjvTnFuS2A8h9eDmZ%2B9y0GQ5sKgZ549INZMT8xH%2BBkHVyBSad9cw9JYqZve%2FpdOc%2FY9UDkc5sCZA5lTA6Xif2OeX8VeLPGVPmAgsaBPwjnqQoF6mjjWSPpv&X-Amz-Signature=d30a35d4742b2b10d7b4996effaaeaddfed78cdd60133dc5eca0b81ed7dc5bba&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
