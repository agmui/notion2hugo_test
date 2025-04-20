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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3R6DBAD%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T110145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCSCnU8a7TWmMNapDsQqRf3Fcajxd91LAQk7GaF3u5ueAIhAJOS8eB0TzjmyS%2FIQx3Ca0%2BzD5jfTyyglnNPyqGkD2MNKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyg2%2F9Zd3%2BBlZhEE8wq3AOnwdHlbNQOFTJC6njKhUvR7WkNdOiG9w3Cg5ACgXA%2B4EY%2FmqhDwXjVwZsSW5YH4HjZQR%2FyEeyEbFnK9WEWkIwULD58Sc9fpcRopqBgWmYbCb1TrI%2FBwv5vZCilHtK3Za3G6fezLrQdscFVCvVWHynetPMJSEnOdEBekBYL89XP9vvsiqWmS0WMHmjOH%2Fac%2BYWxReOWobTdsquM9ldDvnRekyeloWWqR1tnuhQ%2FWWCuJqWcfI%2B9ELNfM%2F97DLmXawWWrDh9K51%2FLV5o%2FgiJiG%2B6%2B3NL4DWdOhdQSryO%2Fz2rCuUMAvK4klm7%2BbHRhbFGF%2F%2FYzh%2B0vp1Iu6XWxhJ8D08wWxtV2UgAdiSC1Opy8RYqHaqdaCLvLk8yRCdFB9byWb4d25TrkfsQTGFZexZABFDQzkO3Ed%2BwPWqND8q0EJ2SyWZBFTlxpFsUNSWhxCOSDoKZ7WwLt8uoitsmZpJq14ia1dgOC%2BEB18WJcDwRBrjyyMXy7gZDs4K0YLcewGBBH5KSbTdyn9SNIFYp62P1Z7%2F4NU86dM6U0kDQ7FThT2bAJZU%2BbcvIN%2By66ZPJHaDaUOW86uWdTvJykCkM2vkgG1yiTNDh%2FGSSJRKyp45YxspFRdQGwCRwlTLBZDRlTjDq%2BpLABjqkAczxnvlZ4RqlDc9JBpJIayCaBHog2HBtBL6IjXc45b7z%2BsS3FmgQbU5OZYeHMX52EZlPM2GlNaBGdVZPNd9RijSjGBXOIe6MHe%2FLn9LynmyfUYfbfptmjXwnLZQh5tgTgj9l2i7HUNWglTp5Tr8E%2Bw17yNGz%2FJQAuyXvkYtieMaYi9TOGfQCg62c0a%2FLaiCnzAn%2BoMD5PBlfEbydGplS9Ao2Y5K8&X-Amz-Signature=6537e936c0c7ea44595b5341e7bf9f4e0f34fdae30d63a42b5a8f2ff31975ce6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
