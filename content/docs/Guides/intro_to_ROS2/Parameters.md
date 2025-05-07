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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFJQBD35%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T140916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzEMir2F9BvNB0NMh0dVUN04nvPGLt4Er897exxr16wgIgUM2x9TBjrso8U2qr%2BETbod%2F%2FX4qHS1k5APVN5pSSbvcq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMuZl2%2Fu05%2BOMy3O7yrcA%2FTb%2F5m4N5cqzJeM2n3VU03P5oxmpcYaFWLpR47WcEtI1lSKepQduDhRAgKlHAgMW4rxnMnuLWYO8741ZdLzZq6dWohoaBA2nwxX83ZmJoWPvK%2F78WI02B8p6t68y9UgjQ%2BzCM1zdcPPt3PsMwozGjechg3a2bFGS7DXyLrCu67Mh%2FEw6yyznfSMod9GgaewBOXRe8Iws3O7WLFzPTLJLsa1f%2Bu9sRnLPx1gQHZWwJUGkCex08sZI%2FcDnHwW2kkYacYkKqRnkcMZ%2BAsgt22jfrSwvT4EYDte6at4%2FGgoJiFnwwN7928ZhEYQE9nSLQiQ%2F8KrXeh4IlX313v06a5bgT7pH641kRYwiZU%2BdzlxIIgkLf8ahNmKtvnPsYNFWf%2Fu7RVkxyDoFPsYdA42QlWGjWYHtFzWgN3Dstxqdfl32AtzcgNYNSkU24M4Mw%2BamqufEJvKjw0d2xLusYda%2BdiTieodnHBAvZRNqQKEBkDUHoKjGQOR89OjSSUCuKAklzuAWQhi2jAbB1IAvTRgpZOtYT1NRCrCfXmm6z23beedb8inRMTWUkdEcXaKK4FS%2FoWNKVb076YTCSZAyVtll4Jegqf%2Bvuw4niaVTnRT5NlgI2tJGNyrd0tjb7nABbhdMOrP7cAGOqUB5nVHpmK8MLJF8MIvQDhbeRP%2BFBAxl7bej8Bkz1fFvtnSVPgQ2iWQHS7rgfxP6zA5m34Vr8zEl%2F%2FUSAzn1nQRVRMJfTzTIYRyZlEiYxNlTor0kHASzCBrSrgz4jKoZiaekx9YGUSW6KiwurxrNod5W%2F9XoTivTPPekU%2FfpJU%2FLImmxpHAnq6kq%2Fc9c1vQJVfOUT%2Bh06fqbWffkOTzyBJxkTdxmqHi&X-Amz-Signature=3be39c8d4860788639aa4bf0082f1ef9a5afa313cb0381e181dee2c20967fdcb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
