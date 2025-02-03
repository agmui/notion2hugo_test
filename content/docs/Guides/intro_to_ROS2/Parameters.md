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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2YCZCZ7%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T121340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcrixfFkzCWZlU%2Bm%2B6MdiG%2BuzrWnRQhi4cZSq6d%2BwSPQIgFqIPQXpCjRwXgMDrPQ7vJsRpB%2FsGm95e2fC5kxuMLm8q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDIF9MbMtZ0DR%2BURxxCrcA0GSiDkyvqe7PxGZ46JzBwDoxoLK3x%2BK6d0TaqCjQ3xjWcna5LvmK3Fs6jJpwP2fsiVtLYM2r%2BASx16Jeeo8dgPsybPG03GO1lvHJskw9dmJcllVh83nJO7pL3md3dMz0ReIOJdnXx3KtPyxQNo0lBjr8ckxIHQbRKG2uj1WTXbsdiIZW2yiKukhqTod4OtmcJkKhymPoCCOsK3PRtd935PN3EEce9VXroJFbOHJJpystsmwNGss1%2BSM8AeFo%2BFwBgFfe2LH4RbCRSUTtW5EFN4AU2FOARTpSeHky%2FKEMJgMAUohurud4j8hvpVu1zMM0%2F5Y%2BzZ%2F6Mr5rr0xuhCQ%2FgPouHBJl7QQ%2FWn6TgNRufKyEbJMQPqnNZ0npc6YRC2Lmoss31Swi6Cc5EALX9tMPg0Ti20MyuRRavLYgGCZ%2B6SIZ8dj8yGvUgZIsdaZhtq7aiKKoKsmQ3nDp0Iiq6zcw%2BSu0I9h%2BReAWnirtktT4EO5YewsoRUEry9x%2BiNCVcjV3HXrC1S5t9xE6OYzPnjzS34K8W7P2UsT%2F2aDEvCXqX8U56VZtxq4s0W0zG5QWnVJjudKULA6ex1w2lrkhicN98CWVyxUfnl%2BG9CnqYT24BCGLEGgXey5RVqY3LD%2BMOjUgr0GOqUBRW8gHrEobCcQz8AkbQEX%2BxGmnDlsn%2Bw2ViP%2FpqBoSas34zo6uIHghPldRXPYHOTVInImyldiFS0JimuvLl1uxCz%2B6CHSqB%2BVg5P7d%2B0Niz2c%2BaheZCutNP%2BmBG0nEaQ3%2BLy2pJkLi0DJ6dKcbuiO5ChykmGRThVS6sCHx8j8%2FagApPuLFNoDtt0IsqmtXcxmFhQAM0wdiZiuliz%2BYVUNRJ1OKsy3&X-Amz-Signature=a3983a715c939163b57f00cbffb6f228f7c83bee62dc27cfe8d4bd956a210918&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
