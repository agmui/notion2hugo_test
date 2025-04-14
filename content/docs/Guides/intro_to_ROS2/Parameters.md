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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAT3F5BU%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T041102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeQLzh3lqe1BdsHENolIQ%2B%2BHgGqnFywhWJaqYRJ50vwQIgddKVA1AjywSfopMhxVvTcsxVBPvTLL4x1tvyK8NgZpQqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5%2BELQxM%2FXOT6PqMircAzQ17kfG3xZn%2FefU5F5DjSzgomIZ7Jqn0PA1xH%2F6TFYw50ayUFJaxAkD9fsp30mKlL83ERmr5FjE1wE9NocrXxo7ojZoePHcJVa29Yp92OY7%2FZ%2BYpXa6h7FqJSaUVwwZg8vLyyt9NyWARv0V5PrOUWUFV%2BZWoKuCTWSBheJqj6lJ2Sb%2F5V0HG8kTlUoOZgEjOFMFIUghH5lVDnXo1vG0tzAqJzvLAeBjYSvAWQ%2BtGVlpvh%2Fc96v%2Fbgf8pBIA08QvTHVprq57L2fK3buqJspOei8WmsUAsNdym%2ByMJOFFlKZ2KVg60AT%2F10MCA7s7GXzP0s7Asu5b7rib3udayZFPm6VdObhZJsqcfybCcFrJikLm%2FgWiMkfdx62GrT0HNutk%2Fi6Lfvfah46T%2FLEY4xWay6zALN0n7ctKVssvP8NXRyZQmY%2FrIt1QJW7bZWSfqW2EFjZdBoDyRluly8jy0458nawYUPue7F1SXn0s5T7i4e00jhTI7wcozM0TVdWiipevuMqnQGD%2BtRVXO9FjaPpB6OIUyxvt6IA5Xt72BSpdoEUZDeLfeOM1Q%2B6ZYzTNZDUuWHkHOk87Y4mmiWmsiHN9MKmbHDtGHcOnF6kxd7zC%2FKa6Weg8a0Yr01cCBVLKMPeP8r8GOqUBO7QOsNgDG44t1QAAxoasfzpMbqSON3l%2FcFXKvr9eYmRB2sEvo4dhhf%2FdeSyf805H%2BdebDcmKGwFDJyhbK8gUjtllO4VPGjAO1n%2BmxYOQzO1iH9WfnVToE4XYLXIgb5MTy1%2FWbEusQYzwweawa39Ph9V3p0qexb7Cx4qkS6DS6ttzJGp4MCydU75wefthImxjmvDw4hRm1uTRgYJZVEasuiGLyQIY&X-Amz-Signature=d329ccce364fae02bcf80d1cf0d6a3ca45a77baf18dc9bbcf3dcc3571e1e297b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
