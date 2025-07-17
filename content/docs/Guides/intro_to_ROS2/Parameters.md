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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMP6V4T4%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDqgwI9xhD1uUdO4SHHjcbCXpyao88TnZhL5S4AKq5U0wIgY0oXUGELn%2BbAEJ2M9QzW345ZWVOufT%2FCUeqqya4Z9Ngq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDF7AJ7URe5oDlWml3yrcA1x0WXxPrRIwZ%2By607KY9ULDS6SEMWsDMdj8dQ5sOEUPvdBueDZunVIbMW%2BGt8ysg3%2FWlFPQZmIeOxNuLEtpyU83Vzr%2BY5aPhWcvQCe6AfhvOHDsVPgsLG3LlPOhcbqtUvQlPqqMngc9qOBrVKvdv4D2yAy7x874Qm3iGLvCc6Kc1%2FNX25t45yWEIdfL8lV76FIsPYa6Ao5xW3nlc53FT%2FOQmey9B4fV8kZhpNvbO9M3TljOx40HeVshWo%2B5XLhVpUcdH48mmgLPnpcOgDv9yuHfbOseaEa8EtUZWH15JXMyysWqXfi%2FBAsjJBuHnAJNTYjmWYnb29G0YQv08BfPUqz1F42B6weDWeiJvvivQqc3rh3Tw%2BAlnK5xnv33kybcQvzAZoXDwQUhqMQwZ6rcDS1HXA0iB4GTH3vDmcxlE67FS%2BEp%2FbKwTxR%2B59mWDnNrwpYQbqQUwo%2BEZpeXyKxCF4hwG7lu%2BuTVOFBhJrJrBp59%2B%2F%2B4L1T%2FsF4Yp0kPsDR1iRZxBEhuQq%2BIoeg26w1VB0JYwZAsIF7kEGsJB%2FfwAABsWm0lGBfy3NL2mfeWF3TagHkZRCo3%2FTVNehLI9%2Bgmq2BpKGlhVcgpmkjpevRry2bmVK200PDJDy4B%2BBCUMK%2BN5cMGOqUBwSFOfqP2r%2FmaH921d6MaWioaoWP%2FGfMlr8XdYrjZ1gYvDg6wDI6l2qLBSynqmlOuvCrZc3UysKVbfI4GFT6lYUNSi53CHpMneBanfxpvLgx7Rq0hOgmZIk1WYzuMy0RycTdML42kkoPjtiRLJLeDxHrd3yyp7%2BaTqQb88aqQ3lWRRoLJ05HhSnEzlF%2BEZYrS3th%2Feccj2WlikP6A8kbN8YJsk4zv&X-Amz-Signature=6e9534984ffd2214527d53ea8a96bcd38b2b43e981c22296091ccaea676ccd10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
