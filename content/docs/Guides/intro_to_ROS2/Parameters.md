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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVOS2SJH%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T230949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIE%2BgmrmEb5fzl9Bm4stWA0aw7PZjoHeIl6Ci8ni5E%2B1IAiAye89MYM7xbCORyIvG58A7ygNBjqAxA64y%2BOMYQX9YeCqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY9mYLxNBoDcrnsuHKtwD9D4Ng8NJvXwoi%2Bo4YN1vXFlCBp1CIvp8Z85J%2BQRP0g6sPZF3STD8VrFguP8gIaBZUi5O6QsR2BWIDLVnwjr%2BqvETFuQlTcZQ%2FHKZOjEyqtumlGnzC1OGhI6S7PI8zF%2BNMvFgT6F6uyMdxNka4oljLCtxF7l7M%2FymQIexN0XJ4xOEmzdIm%2BzT%2BaFYICD8%2FvQPAVisGdrk6XfP%2B3JNeDUxkQwUIjdMMeKNbJPxaCRfGRwor86a9LqfSdMfF8At9Yr5sdvmT2RHbwEsIzLBdEc06LwFYNm4L3S6YCIKgnikUG7%2BLO4t73lzDiV2AK%2B3QwFtiH6z2SSt5dRclnb%2FZsLJrwPPRUd17bXgRIIqfXlWIBOWS3gnE%2FVWVF99Ng6z%2FoiS9EXTH4V2O%2FWl07Ux%2BWFeB8uyHv6WGbZsGeKmu6bo8Yhrhc9PFLnDQae1SYKhPDbgUsJVNYIYVwGEQVbRPCIoL89h8vhohbRfZq0%2FTAG0cOx07wfoZeUzFDgGu7eF%2BuXeayevuFhtC24PMovbYzMAywdH5NYC0qryh3FERKFdTLquprDQSEU0MgAuzypLhYeVAOfE8wizIQoSJMFwcFFz%2FRweZVLKv%2BfUVtaYOtv08b6Z941lnlOrjVqTWXown%2FvlwwY6pgEmziXj3LVp6BbnlPMOVupbk920g91f7AcSJKv6tiVOjh4A%2FGxfttxxehv6UYnr9CtPifmXvv7NKHY0fQtXwmF9iD2%2FiouUZ%2FWxkz5gNH1swieTeV1eZ3a9aSrZh%2BQdFnzmIht99qB4Oo%2BusIpN8dO4h73CVbd%2FrpWjcFanxqH9SiuBewiVhUa7t%2Bc%2FovwEomDzEp%2FjAeLuhimgcfrMFGVe4DmeZ2hS&X-Amz-Signature=77e0da8cc1f69821821138ba441dab621bb3888e7cbb86e3b5512f3863ae5893&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
