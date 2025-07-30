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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGFSKSP2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICWRxO%2BG4NAd0s6FSka3aDWMFiewcOUNBlwvp9%2BRfglKAiB0YU4a1RLQFYru1rqypfUpEHk%2BZnlqOTYd3J9gLswfPyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1cS5FtowutNLnYjcKtwDtwYx%2Fc3v%2BXORiqCtWg5%2F%2FlBTjRdNKIYiJMMrcPr%2BOEKdrAnBHEVUcEm%2Bz66KM3ci8ytKukS9yv16hTPzW1jLGx43BflcFpshhLbi7iUmbYNpMMAAZ3Bpmp4h%2Fc0NFIJ2MNdQYcON5VXXZISn2WkTTYaA%2B9jGwpX8wXseFiy%2FudQ0rvybLmdLYD6gmdEEfJBhgkJ3M9aw9iYixnaNhIIUCtID6%2B6rZ2ygvEx1wm5jw%2Bq8yfp22vzp7lmOzR%2Fop3IwZ5oHpqUikmJ27%2FKuZLxN7Q85ETwLQ%2FldYw9mTZ9i6WDb%2F8stZQqEp0h%2B2YPSb0uhxvI8rOqpKbcvvy9MTN9np2V0NUXKPoyUURVfVd2OUU%2B91xVg811yqIuVrR66DEfVIMPe3%2BhrPjF9vBBeQ0RGq%2Fs2e12PxzoV%2FEennzAr%2FeSZLOX46tnPqvtB1Z3Bg7uGjciy8%2FAKCjeAOQLK1r9H76pLe%2BmhpXLDkoCfewnOIYZd5D6D08hCqwExV7vW41PQHjyTR2g9hc%2FZvT0lFTjHq0yYuJLE2R%2FXs73BrTeNS4dKkt0755ANKIfMrzJzVOyrcZkTw6rIin6z01cKCpO3iOOES167ubZPbPPr%2BQ9auRNp3y9BXol5KkcibFIwydqmxAY6pgEjcwp%2BndU6m%2F5UpxtC1AuysMhf75GwwsaMTl5HbruEb%2F1KXKY9QXWeU9l8FBy0j3q5Z91V6o1dAljc1E40cdY8gMdTg5p7rqT%2FkrigkYJEDwDHhDM8pUzh6Ni%2BkagWn4ANx2IGdmaLiljXR5zFUjIpEqjYU%2Bh9QG%2FNzK37XMnDVJF9tq%2FcFhLHgC3GXAAT%2FX%2Fqal0n1Zguw56tUOdxnZz3A6FSzgns&X-Amz-Signature=101d2910a5ff3bfd9461050bfdd531d93f2b1cefcaf0eb008bf6c514ecbeec69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
