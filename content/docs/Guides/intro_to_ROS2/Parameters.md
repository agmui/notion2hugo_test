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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643OROK4X%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T190915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQC9xz2JUlfzYhQ1GYw7%2Fc4z1NDJo%2FrzmVmhsMMm5U6yFQIgabZKCOA5NufyBebOajfOxkNnkdqBg2EJz49xbM%2BIfxgq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDHPK6o06wGwlSZJLLSrcAyNxjg6J0IOI1PxtH2N4%2BOMsMsUN9Si8gVXQIXnMLAWbVGbDGwjEmNaxz1heYLWeIz6dihHKe8rMbbCKTtztWZJBhIjpWHrKa6zF59euYQRLooXtG46A0ppM6xwYBDOxxsR1obEKWmz5%2BpC1S2XjwktNT8JElNx8N0nhtOvd9usJmxJwhEfJiZwq6yvjQuKrGgJebGmZiZm27FO%2FNq02pkIvjwHMv5ZvbWYh7fqIemUxxxBZUMd91DJpHRAZ65ub8anPGfQzdKBzChIjYfSY4CH0uZ2Hu2ZSQn8aYh7GWofPZN78EcllMXAwb21P0n6jLtsg4naLYUU%2FOMHkNMXvrML4ReQ88FinraY7pYHt72NVcZuYbtyBsthB03NNJ9c5Bu3PUGukAjC07XylpZDtIY7VZzIFmsUN%2Formk%2FiBxKYr5ys86a0%2FKr4hJ3%2FADu2sQaX52uUy4zHQXuAVFFF8t3m%2BUg8vMqGucvB0SAJyxdTx%2F8s3zvG615lLRRmbm06hh6e0cZKFyG4CG5QTkKbuOCvgICBQZsJFC%2BpLAJoEszMoWg%2Fu9jFikhtJMEOqwsrX85Th4DVHMEJJFXca2nuIfv3Z99115MXZ2fzkZ%2FH0%2FyyibuqATUnBuEtk3denMIik1cMGOqUBQaoaqmefqqDNEEcekIMXAMCh5h4dAKd%2F3zXHAvM4RuLlo0Y9YDGBaXZtgbmZ1GnU5xkjBCCCqYYoHSOIWeRAE6uFuEGDaOR24BeO0gN8dQhnMhp65EQEcjGLrtBcx1hIlLjhcKvUOSyITi%2B1U%2FyzJMKs0QmcpE%2BOFe7YtML%2BdLGVjt6Oi7qRmjxxO5pQ6jtF9vjTsjM0QaT26W57Xb%2B475eoF91y&X-Amz-Signature=976f4cb442311d306bd57dbe9215d835b98a72c072fadea01a010e2fd02f9dec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
