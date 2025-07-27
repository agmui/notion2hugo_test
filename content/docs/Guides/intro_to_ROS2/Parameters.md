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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOLFAOWV%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIB5M41BW9COvzydrGb%2FBi5Gy4D3rS%2F685Ef7FwICWBQRAiEA0MyesYDKCKSRhA4MsmObmuGtfy0BPLjY9QE1OM%2BeUXAq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHSS7WTS4N1swnN8JyrcA3KzhGcNb2I12OgCt43Bd2%2BEaHI22pVRHPB5C246qAz6w717TneMi3MpssYyLNlUkshxGEdhmqXyO3Me9e30YEdZ0BO%2FJOC0deiEghZhCsaiBAK4vBMHMYLEAj4rQyzYzxixR%2FZrHqsBGaV05ArwwDWp6l5la6TmQPHLoSfEO5zjA7y5RlsMaqDX5lLVITzfUFphdAe0sK7%2FsovsEuIkt874Eql7IGo6h5hoRio7dn3C7S6jumpnh0W8g0TVR7MHFy7QgB0YqI9my6%2BwY%2FN1KwNjvhNanquzgI9Zb%2BHa7BX4nt%2FTEu8OlH3NrRz6zJNAm4UWRCaaVTmYzxl4VxpvPSw776B3CYBJiMGb9Vb35lshjYW80sh0ojiLNvqV1bcgUGOOrGheeMmox1quFwj2VULRtcW89KAiE9Y2Q0t1iABFj%2FcGrepOJ2EqflbhtwxzXHFEFU08YaGtKS0xmSSjHXL2M5AXoj4QgUIMMj2a9%2F8%2BG8Iz%2F3xwWcUWJHcwo%2BzFYxf6BH2EG7pkAzOK6z1oOS%2BIYekkyC7yqufdNYH5qw6JIidP1Wbs0fdjwPDSDU53LVOnI1Oft2n8HpLaH54jvc8FEoGaomTfRDMrTzWYKNFg35mzBJ4qJ5E8IKARMNTXl8QGOqUB%2FkNSGIcz2wDaXFgBMvyWIXlPWTJNjRoVBLgf1Zy1k4%2BShRVSzTPL%2FH3TJ%2FCVWSjQ0k4Bj4u3XQKqPTSfDU0VQ9k06U8fK%2Fiaud%2BfllppXRnNfIv3PQji0gvvz%2B1zZ95IFcwgoEANqA3ow6TVxXY5SXrnZhW92ddjtnYrMgAiIXcBHa%2B9ib%2BA8mC9ZvFECkKFzkKU9N7Sv9YAgAAPmpuMB%2BZvuw9i&X-Amz-Signature=444acbd795a8b282b59e93295c38801480d395bd066fbd1845b38503e1c024df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
