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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VATOSZ6J%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T230813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQC8ETYERMaVVKppdqAYZyqt5ifMiAsM15Av7bN%2B9H%2BMAwIgTn%2FPcclwVHHzve8%2BeI0kmRdFMNUa6Cghv3VtN32nJe4qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhxL7cx5qAZHtfszircA9NmmnY5PjoOtkhorkjr3OlqdMH3GjoIGL7mzJjaEWGU7DpAzDngpm6GzclF1ldBZo1ww2fv%2BuRBA8xzhhx1y8URd98K2gT6epAFSW%2BXlD4cLUNC5ZIUVFSjKZJYQxqu6OoXMZlxGEvdMtH%2FUatC4GJUifKcp1SXZDIA7pOD5PX6j9UWMxwMAmJpErfLDzIQzJXkAuP9b8HYSQVrQQB5A4Si4iIxoLhX7i%2BbD2TJLBMjmUhwBoAfXbgu5EQ%2FPCypkKcfeF2rmGS2EpNTHsu1yBlws42g4n0g8dlxm954VTwEamaULuqMXXWsdVtc%2BwzJZaaF3MxFsbzI4ybKkZYMnfgJY3%2F7L4j%2B4ty6OfS9iqF6yQ7%2B8G5SRRfPFjVH0Cp%2B1oVfvXrZke%2B5PVUMoO66tmsFuh6w0TDwvtM8oOraS%2FG5dbv%2FFW64QVyNZqnXs%2FZ2pXFKDRE1w6cTMVZYULzKMPi3hpQXVa1cEk4MhYeIybBwHTy%2Fc10x9V1cORXR56NW1jDufnMRA3XnSmHWGcO5VjmmFHVY8zZT8YMDghgQHaItPovM1gtlY9UbIUi0aaEXYPThOurXYz0Ou%2FfdxN1uGEJke3OgFiiwjZMhJZwt5t2yEa%2FRa%2BIkRCeMSsWJMLmiyL4GOqUB18VTJ9KyQOhXRCLCQ6atAl6C0YW37d641k8fiBKR4ahVN3uS1Xpuvm46x9eqlX402OFSFIzUoMcUgT5vYy%2BTedNeGjVzETHrMUyHOZxrx7qNE%2BZ2Hzjvns5S1Ktf%2Bglt4NUd9w2gT%2BdDc7Uw9L03O1efp4YQozb86oFFt8AuQelHqR1337GT5WfPk3Ig9Dt3bkIk%2B2zYSOCcfV7On%2FS7NAvCkPMZ&X-Amz-Signature=e3f6ba045a4e6d4a23cf27e868d54b51b1365406f0092a0d77c8f917e43a4de5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
