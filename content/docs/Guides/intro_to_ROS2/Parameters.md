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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BCAJMS6%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDgPdfCKjxT%2Bpvd07Hj7m%2FfxD9j4lT74Vb5jakus64adAIhANHZGpKzgLgau8aAea56KsJYtYcqgZBdNyYlaoXkvk4aKv8DCFoQABoMNjM3NDIzMTgzODA1IgzBhJp9TV1%2BtoyrdA0q3APE4g%2B1phDgyxEvXO3qNN17LmsQZ4wRR2o7hPKexYvBH6z%2FLKOtb6FSf3scwreHLFJn8pzRbmeRO8nmGavXghv1Eu3W4siZNNx0R%2F%2B9tsFmOfUYI3XR2Gm8QWACMIKWOQ7Ozajiq7lpgFqG1cK9Xaa%2FoU%2FLoSU0LHWhflqBnIZIOEMIZv8WmxnH0TT6dtFeb1opKcUTZXa57CdeVo5RQkczL4lxT5KQEZYFK8M7aLH1%2BzeTFJRVI8BkOXy1ozX%2FO36n0q%2FNBf0V6YYK4FedjmqULS5newH%2BeG7LzTfFlLOY0%2Fm0SugC8svQRp7hLHDURZhPVFtcLqEKNoEyXH%2BFSNMlyVEpsfFERK1NC%2Fs1EYhvzznMgT6u3nHrmKS4gIkhefIN8jYfxLGWcHNXZ0S9r5cSu7I8GEX3ad0M7Jbn%2FnRdWD7PJRY119ARPi%2B7HsTY3uHE%2B7SCRCR1D2exqi4qnRkCkkY1nveKH5X2jxG8jGIm3wgao24inHxOQo2vzve%2FjfkEEfNmZ9t0rWkaXthNJiku3oPheV5foLao7AyCy81giXRNhsj6avxXTrXMdjU4ZnOUTzuniJVSljyxZbjVaAFUWETlLgJ9eiqADjgKGL8Hcurk6ReS1tnjg7S%2BSTCm7%2FvEBjqkAYgTOyRxUlb8iaL9QT5%2F8nwGuZBpOTyvC08BNT3ax%2BaSeOHCS132rhUoLJCEShwnKXUYdRcS432ofLpxAJckpxsfpQW%2FnOQaforIz2Qry4TPZRt1ULwb0KAe%2F8fpjquf%2BdfZIKxtDOr6%2Fcif%2BjxTx%2BJgzx2YiZ69bmYezhYI2f9il6JcrL7OzrmOWbmbCCk7Yo0fRHkkplYE953%2FU%2F68u5eAtCkU&X-Amz-Signature=c7c0fdfbf72b6e0258adc0bf11a0c1d26160a92900d4c166c1e6a28296eccd0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
