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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663535OP5U%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T070910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTB1Q%2FVkPfYXD3I%2BZGeFk9ayBOLl7h%2BuZTmniH582%2B%2BAiEAqwhBZ1kg6s9W%2BbHj6e3gjY6OBKHyPVVrYc1ev8tWil0qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAj1Mj%2FJX2uiemFNIircA97A%2BIp0%2FqUjrKBg0nln4m0KMOUgOc3gVoY6ObpH4%2B0F7CnfwsG0QyIGH2EOeIkaOLbbil5PyEVZPYZvUMR8Gd2uxXtB9bw%2Bl8yhYOQlnv0qF9cO%2B7biEFZxtHS4%2F3EBC7kZRoQPeGxSR26xg3s9xOiThKBI%2BCC62cqKY%2BxV4k%2Fi6jAJwYa55qbz6XUBeVQ8oToGfvRqZJrLLn%2BHIQvrsTWQ%2BEM0RSL1BtKXyV0%2BlQ0OK6jnHRQhy1OlCF%2BXY26bZ4tZynQi%2F5RAbj1dOQEqhnn0CfFPtxcKD81FwpS7C6nz1PVjjEaKtNAycruECxwNHLYUFmzRwemu0Msq4PtJJE9YASyrZEj4ochmymAIcAIFEHLMJZgmgTXJploD8G4IMoFLV6Ki3ksdaVmCQtTYuDMzzbQSfUzl4y9P%2FYd6hAW9TJ%2F3QtWiuW5OyiaWK3yA1%2F3jMnem0Tup2wVpRrAQVP9CTfNHvg70%2BeQRCCvDIPd%2BJyzG4MIDFn9wvTGbrLDEu6HQjU%2F8JU8a92YnxP1cdIys22bD0mlt92OMScBxTh8kSQRfPVNnJlHWPLlM%2FboEjRcM2q7aot%2BL%2BnB0rjXDqvPtZzCSufgz9fzkclXvXwsxjoCKY7zqnD6x64RhMMrjg78GOqUBWPd9PCRr2%2FgbzvUq0UEG3YU4XMvfD1kLT7A59BuKVrQHDa1dYvfif6xXz2imXcjhus%2BJPa6lHCGEUoSWojfXudKxxVBsycI9LNV2Hmorf3faToR7XR4Bixd3Q%2BP%2FmvvBru85n9pVkS8A6zXK6fnR4ZsQqJch6dpMYxajzYi7RBe0L9iF1ORW64CkWB12lZBxy75s8IBpuW3cq8KuxUeQPlXNbZHD&X-Amz-Signature=96670bb99f9a494ad09c4ca3c8d16c4c1fb6960c5737c29823f796c9ac79ac16&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
