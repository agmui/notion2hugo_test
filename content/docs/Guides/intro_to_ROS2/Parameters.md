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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFYB5DI4%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T024837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4NpCdLlke5d7grCad2LgNetOZlU5UCVNAHa42dYIO8AiBT74RbECIx5fAKcMHfudtS9L0gIcYVMNDlO5mG9eFeGyqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNSPmEYfPbHdjwWjAKtwDJkan6fRU52QOF4mQi%2FmpvSqUoa5%2FJq63q%2B%2BXadupJjzqTaf65CW5UDOdBWvbVs7SNmIF6PHoqNdny5te4YYAmsEduxS4hlVWyjmFjSHJoa%2FpcA5RxgqYT0RgJ2lZqsp%2FoyaDUSrwEajVF5jX90eNGdxzZ%2FQfQ67tw4wkMC%2B758n9agZRSbgueIhqzrY8jZBRIX9ZetDfUE2m%2FdEtQBn4Uh0GqmaYX5MonDj%2FuBCRoQx25FIAZJPRBMlmMhtY06cWBOGR9c9tpQKiUOL7X1hBJonv5dhQrqSyN9WprFcVBiUHq%2B2iB7xJMqHv3ryeWYOkUQHQhAuZprxKoOm1uxXhrPcIGFbXUP8DRxeYzy8fRB%2FxjGI0CcN0tN9sCowRaMRocGkZ5Kolf47J3qLpiE7fPKZV8QpOZoi8BCYVane5Om6JnfhSpuu6V81JyZpqAzPZwcYJDFPgrQ2yboMsAVVDLoqbhPAhKHdUhzCmhc0eA38T%2BTswKik2YGOSmbfOrnQQqJ2NDopwYQFRuwq%2BgksHa%2F95n2dh6%2BMEFUdQqZqCiaXHxXD%2BpaI1GdGamQVl1wnlOvt40Xh%2FoBG3iqDcHy8abFLuGsOMKH0P9hwJl1tlAlfRqLlXT5zCUmzsxNswy4fdwgY6pgF9k%2F8kwUI%2FejwzqNjyB0TOtInMEXN%2Fnu1Fxb0THcPA2SNAygT%2FjG30BXA54l0Aq9Qgi3dB2zNuGapIBfFyD4ytezTl%2B4GrleY7LKCDjj8qiHQ5xiejXFjPD7EFyL0gJJrs0Yfulcz8Awah0xKqAKNjNxW1QNyquKWDUb%2FMRN0wheKxMPyJBhWkyrHKCTeK0n01ByuiUQO1694kYv66jzeYFr05T0c1&X-Amz-Signature=da708edf73148c3e00115d059e9464bccb2c2c56ff67fa67e962d2a484ae7cf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
