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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQELQ5YN%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T160922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfcWrMivqQrmE3ZorJJu0LtqTY%2F9cJnJCvV2R%2FiA1ThAiEA9kV5pWVCpSYThuRg6Bjw2JwHdE5j%2BTOJlSlknta6s%2BgqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMsiaWRRFVHxZ%2FVZkSrcAybxNX6PBF4Y56YLYn1GUNx7qGIgoJX7c2b6LKGSRjIifZpxC8kiUUpnbR%2F%2BWFwrifgUysIdlHlwkM7ypOU88J7OyGnnDXFIM6Vv6tSVr9S%2FctnVQIHYPEJ9C10VSrUdKOp09L1JKuj2ynLRFxf9eEctmOLb1uqVsRxUwdJJ0Z2h99tQComMbWGe%2FA%2FtyPpLTV%2FuGR8eXbml0gbMB%2BTWU9hfvx4K2PwfcT4N8rMsft5C1daW1hyIG6%2F4n8i01Kg8OBesXPuaVqtvrSydSjRA6u4h%2Fmd1d6KMSJR%2FunI1sLVsE5lDOpDvAatZm2QjRWWzmZhHLSUlmpXkSYJlakPy59aaACBJoE00qZQ%2FsiE1%2FDwEx1ILc1MY1hBgdQ4tZiN7ZdWB6kk0BTNWZlJxLC7ImuBAaDSxLe%2Bkp%2BhagsPE2R5eniCVWwL9kSY0hqV6gpYTRoxghCSOG7FroHS8%2BfNFgHA4RKi4j%2FhSs%2BAvLwFU8sw7izdbWOoPCTQfJRVvnJIbXAag8HD5RsAJbIIbKLDT5no9GxsjVWCgApMA0qi39kBATVfoyzgowwYnsYXIFcoqYNcpdlmn%2FG4LKJxFifkfVW2wJh7xz%2FRZLysGW9AndaM2EIs50JnJKpOYZ9DqMIyF6bwGOqUB86kpk6tBKa9hyFaPN3OBLx1pU0AXeL8IJxVQ1iyj33sOiMUDwABVUsG4UxLcAkZBr3HemN8kiPqUhrog%2B3L4tN1Mw50VU1pS2%2F2zkA4rJs41u6RpFgzvwwtiQtMz0xpahG7EaPzDwY8g6jK63Jkrmfunz0S9Yg0jjzrqBZORMZPJO2PHFtVZcyqL9Z7NjHA%2BZeACf79V7xx%2F0H%2BtHkxVUivuDzye&X-Amz-Signature=d2fe8fbed4f962a91f4cf200174bd526cb3a43b9788ae0bfa748fc140e223bb3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
