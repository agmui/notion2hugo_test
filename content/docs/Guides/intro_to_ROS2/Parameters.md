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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZER4OGWN%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T003718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIHC6w9iNZqxrwqPUZXGFdjIR1Y28wf%2F0UzdVUO47nuVkAiBJAfXVNMXz7n7p0aYTSwM9xHKHDTPra250eUe4veZFlSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxxMfJiqGUWtInbLtKtwDXJXgDHMCgONFeLKLVPwXaLxRxpGlAwqvqhYKbqCW1ygoB6hbb70UGmlHOpN%2BuqlrWxBxIFp%2BQPshUqnAAn7k6hGahSieSMdlKl2LfBZtJiUkaOU8HjgPALW9a8n0Hx8iJiH%2BB6C23Uqa533g3fkj8RfCdUfLGskqA5WZNx0cU7v9AQ3B9oOZOEFwwhl6hCVD1KxjhsXeHzi3tUXVz1DAx%2BNx%2FmAc3Mw9f0i%2Fr%2B7R4Yz2ek97apVHrT%2FMVFCaR%2Bsp12m6T%2BQZ9aQDlV9IxBess%2F4D%2Bffe2P6CQKvOa2Bn%2BIdTP5nDpxAb9oIR6rkobpeaH44vA%2BdCZXP6IE7tWakd%2B5iRPISX6VyLY0YyiLY30UVOIqm6RQp4VvwiN8WuegFve6mKyceUYocv%2BrS7DZd7QWxNhY55ydjoxg9Cv4plCljndeS6qx9Q7gg2R6ZdBtBbbSQaTyrHze9mBZX2kSg8AZ9aMU8%2FnCvqs507efhqnnmz%2BwkXmcZwx7L7d4ltLu3AxG4awGfx2tUIVz3NJRdnOyU0c0eFJbsNJc%2FFk9iqMi1vYxs7bbQSDdJRlsfGV9mbtfbvVl165SCuN4MWx4GBWK5qKU4fBUUum9YR6Z4J%2BUY8U4OcKlt3%2BbQFz2gwuvf3vgY6pgHU89QHsACwhkvqqVBlxMTMd3dCb9m1vWpF2SwNdZzR5RjfdnwXel3NEfcaYIv5WWfFHKPnU78l2piiYE2n0fqGmwWZLMhZfRtK867Gl%2FsVdv3ILN6A5Q2EC5sm%2B8uzth%2Bo5ooGwwK0NODut8DnNrXHJlH0vkU3X3DQSbkFyGBJeODpKD8Wnwj2geJGVd0tUkGBP0CbMxOkAeAgjivt5v%2BmUTCZ9JpX&X-Amz-Signature=011cac85e6577c75ebfe9dad942d1dec1413509184b84c545196cccfa71964f9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
