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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAOKKHO7%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAR7%2BPFbwV%2BjVYhE6SQ1%2B%2BtWWzKfS22eLtM1LjjpLRlKAiAHs7oVmbT9pfjWsNNlDX3VkPbUTJq6OiL5MBTNocqRXSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoE2%2B9mm%2FGQN1WMbPKtwDqetCCf%2BLaHBzIqLoIw%2B15SJx5%2FzO3sYQThcMEFy%2FwXhOm4a4pc%2B6uCQbpMeNAzqUz3sVQye6Sxvg%2BNUMfMjRU5yUivcEmVnLzrtmLvq%2FV8aO0INPe%2F%2Fe1soLxB6VJFq3ObB2BAxppJaf5MMaNCaVOj13qDFr51D826sJRq1zzmNpq5wgMxs00R9oGAKrq%2BpkX07kXi837zGJsnQ11PWn6kaVd0vQch%2FO0wrHBuGReUxAGW%2B2qNpW8WXqUvFPMxqwZMCJYQ8cn%2BhkZrGlouX7N1f6C9XiTgMlZuW48d9FL6Xz%2F6LYVPCuscfxsRw1DvplfAc2BTSD8wcz3%2BZsE%2BClAzi3K%2Fix2htaiispPVDh%2Bd4rbdAD6XKaglIqaV%2BS65r%2BE%2FYS3ADMl2IbBQtRqyxHswpZ6cXTuTTwnX7XrMT8RTE9w1N8%2BdglOOtpFlhRxOu1FeMkLY2%2FLuYx2TMVF4RFNO%2FAh2kUU8QPAmVAsinJgX23YkUC%2FDaEF%2FIUyalmaO90wzCLFwlyZ0qhHnNHlcYCVi5AZwFDRVIUV7jhEMjte8IAf8%2BasCEvkrgwO6su%2BYyIpVz5IUqFYpYq37Juxl5vRqjFiMS%2FZUfT8aa9sxHTtssP6SRmxoXV4RrFd9MwvbOLwAY6pgF9Ur2bwcwRp%2FAudqfRjdje8BfxEpeKJBcz0otkuC8X4N4OCQzjji7ID1o7Rg4swCbT3nYPb5uiNtnFeT%2F3W%2Fp3ARWXxNzeBnbqNf34B5K6zMyn8kT8A9%2B52phbTZwCJXvRXOtZATrSESD89e9gwMmngntGOgKBAtrwGwp%2Bru9kXk6zQtTY02YTgT3JXrps%2B5p%2B5KiRBviUGIZeh1dEIy1zLp8TbEDa&X-Amz-Signature=0ebbf2e623e0a33dca11d5f9cb79d4adff2876a5e58aa3b3b18d342d4aa9df70&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
