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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE5I7XIA%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T081307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSh0DuscqNURCHrgHHGj0wmCTA7G8jW313uqTN90l5WgIhAP0QAOAaou1R4PaKtSZ9cuOgAhCMTqNdFARmVeeOxgR9KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxn9Boaha21FDgeAfEq3AOpRJmuA0xVya0kt9c%2BXU7UfNKocGes67GV1arl%2FZUDeo8olsCzD3cxt6HYaIxuNyD6e3octW7xGBE0cWkvjixDvtN23VMnlB2qmASb2v0o0kf%2FCq%2B8oidFusm%2FsVFD%2FHfi5u2XeZ975tnV3JZbgImLI33XV8EeJAHB4Um3MBAKSyRPI8xTLNaDYj3PMfvlnEHGO%2F33D4GALjDb56GrhpxZnbsnZ37T5yOvL09xADgjkAa9LMUMhS%2F20j3MMyqmV9LiMqi2cdiBi0HpZhItCGd0%2B95yT9p8FMe4QVIbByoVAY5NRW1tmlUzOZapWBT3gLEVzBny%2BAl4pKlEdcLMqrTZaUGH%2FmQUOPr4T8GjRkwVDnYhbZ6sEZ34%2BQ6cT%2FA2IXwDShcoA6m9YwF%2BJUY%2BtUptbBwn9YYbTSos%2FLW0XgkI049P65RGCXtlB1fB9dSWobtcXEcpqBNYZOADNwIbeh8l91PXEY%2BC6bd17scqaekkIhtyL0Inhj2yWHvJFWol0GX5%2BSmEdTL3rkenlzhM3kyjucLf53mYllG6daO%2F3xKueHVpL1szo7QNCpTFz5ynli5kheJ3dRwtOk5RmJbx90RDcEtzHxokKY5z%2FleXslRBhWEyuNQ0hnPokZ2ITjDSorjDBjqkASTm9Yk5dzRiQgNmPtO1xU82u%2F5p9wsfba%2FZfkaf7QZ24r2%2BJbwFnMySkBXFQDY6xp%2BX5867I%2BsNgYnOC%2FcDsVXuJYtQPZSrhu9FlCDQ7%2FxKr9TcygpPz2N5C%2BnVFVkjWstM1zotAq4bF2iJpMHWYpZ79tbLIitM8dmjBSiMqZQSoIc%2Bs3Ovpo6peyU9Zd9tfC%2B%2BXq9BK1ayz2FmVJh2%2Fv8dHXaH&X-Amz-Signature=62c03296b922dedfe85aa57cd2653cd671f72b8688e221d007b308dff92eeccc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
