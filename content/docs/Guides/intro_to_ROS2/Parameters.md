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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2N5V5VS%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKVZxV0Hf%2FmhBJs3YV3ZjUB7t92hfn2gTsusChziQu%2BAiB4JSfpzw%2BVCh6XeeRyF9djH81Wnxm%2B1hllB58QRXjcOSqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMchtv%2FD8rk34rraVLKtwDC0E6od8EReBPajZYujT85z%2Bs7%2FcDRzZnOUyxOV66n5K%2FD%2FFGNRxZAQ31HhpAjPl3lwB7Au3hcFiww9dqUnPk6DGGmnKx7Yn3FGVa8JieaEcXJWzoCtnk3ucESMLvU34bOSWDZeCjcHCCi9nD%2Fkpn9oesFXK93nilbSfz8WblYGu49ej7ysh86FQyb8puYdAjzCnuQK1z1b7Pp%2BF3z47DqDPvc2n1CRUqh3sHG45v8LipMLaT8hnEwA%2BZAe1yYIQ53zeAIdAfep2NU04oDrM1CyRIU%2F1WvlJtcbcQ3zO%2B3JnBV1%2Fs1oTSq1Gq6ogQKjyKv5j8ZnavV40rXvI3WQPNdASgQV2TOru4KXSxomdRPd49Y2TOYK9AJOAhblTZORAZqwazL9487oCIGrMFsgflXsuTokUk5CEni4LQXEvkupmZ553NR%2FfHL51xDvGGwsPEO1xrkHfeUfm50YG0A0ywn9eV0x8raCaOPj%2BYhp517bP4jBTHRwYfO6qUy2YS00v2XhnemqsMdTu8jMAvNvOE7b9CKHDLJqxbRZea6Rx6hj4eWlLghsf5VTUCp3EIYy6wlr7gHYOM1%2FuNYI5CH7r%2BWF%2BYjgpnNQ7LNfoHo6hZu5z91PycUwghY%2F3ZeBcw7dDdvQY6pgGj%2BZTAFOvGbHzJtrxA9ZCevHgZ%2BkjAJRLmItvwjSreYClFzpbjaYWEZfBVrb8PSxfQGGFjNCTv3M8sD60ygVd6ejR8uH%2BlcdfurKINp%2FVqqnYa4O2fQZfTmLmpBwcKqvtIiunTGdMLzHMFuMMBuD8z%2BNGPJqN%2B29MzK7HkndRJWRCnGjfHbwuoBxMbA5BtXqbmJoiV0eiMqxEb0YXc9%2BVnybk5kFvo&X-Amz-Signature=35604286b4f3ece8fc36dceb29dc08b78733bdbf67a284fd038d29e6943b48d1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
