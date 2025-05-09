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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDKK2UOS%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T081221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdwwGTTpwSpTqV2JkA%2BkyYeZ4VmxjpBpYlIeyQljMKsAiEA36WUJ4gl3vmPZOwA7fXBtgK3wnLNMTnidyHhTI%2BNh6YqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHD1mtwhBGjm%2FspxRyrcA2t6cxgopJfuMd6FY2guPeqOQGvQgjid5kZqJl9KhuR9SfVOIE%2FYKQReMjcxE02DJQV8uHinLVWAakB8CxjbPhng8cF9YRSYzWcZQkg8BliGcbJcQT6U9MallkPjL9QDL7cKnJOxaFu8h44xWfKm8Vc56eVC9RiLARV1sJ5mprCBas0wyLXbSKLgOwKxnLtfwQw4JPWosGeVZ0IbPanEOUSEgydrk%2FOW93phViqYx37JLnRSCBmSHm6MGvRn2m0qiOiC9DGdiqWUN2n9BbcVFDqy5KIvyskYaVw24coyBC7EBRtbRkZep4Ribqf6TSjY6CayN4P%2B%2FAmmmcEi%2F6pCC0RbpVkxOVC6sGjcj5G%2BvKkTQXVRha6Y9%2BNy1eXDNRv8MgwbBCwPQ5%2Be2zXFNrtF7uXsYZXrI9UhjtM5TatXJ7D0oMUmbw6S1XCFC7tztY8SI1Kr8tsb0V%2FLkVEhATr4YpE6crOAo0L0FQEZmBCqoqPIGhSgvqqDA8WJ4aJm127dJH1ZVb1COsCrQ9AYIzFGyvdDA7PLhjo3p4Hz%2B8jFPhJ%2B6D4h0xRTC9uJjPArQdhewpnXwPF7SPxVwA6JBliOuGb%2FtxCf6uaqxyfipl3LJTiXSHBVkiyfYR0QUlOuMKPh9sAGOqUB79ZUlElzj%2F%2Fnb7J1cRf5F0FVnW%2BWkkEWusPmjXgMJnFCvPyS9iYmEfiN6C6xZ8Fg34CUuRIGyxE1zzIyAsXpO0MJjxN4bvBCAPtQBoM2l3nROBZw868v51nCmytE8%2FUu2cu72E6FbOa7kJRhbWusEqHgFJBagahKoiS%2FaP3DtzNFUTr2HH0UFYvlzq%2FqrbsxkrVvI%2B8dlPqH41Y3AM69wiUKQ4aB&X-Amz-Signature=94a1534e5b5227ae1ecbbff98b6b8841c74f38b59dc2d1f5edd80417af1306c2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
