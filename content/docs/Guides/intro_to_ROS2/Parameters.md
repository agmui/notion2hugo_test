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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BWRNSOQ%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDLU%2BLTlkGVUUC0I8jSmH7Ns3sY7XhJQ4iDYtjLZTUPkgIhAONOP8CGRnWNuCFzAa2H9R2TomCw4K7jFEA9SlwYAgO0Kv8DCEMQABoMNjM3NDIzMTgzODA1IgzaVlZFxb9kstYgRUcq3AN5dG0fj8eek0rVJrnAYMIw5Ud3ZFj00bpwqPLazI0KbJg%2F4UcjO5aN246B2eP1GxyMs9%2BcTlJjmAYlnCXDT3cPiQBv%2FSSq%2FEeU%2BpsFzx9Qz9Qvi%2B%2BPRCQqOOXmq6tRDChrc8CYOYq143%2FzRbzlGyfGDwXWKX517O73W3f%2BbySpRpV7CsIo0t0QAFsHMxFa6dDAfR6%2FXOptKVaDOU%2F95QZj65uQR7U%2Faag4nfANph%2FNEq%2BQ8aMbGzz5ElGeqY8pmACVb9i%2F0AmRXo6W9Q%2BfsZq32bMYLY9qKEVVGaBNvoBFc%2FTWbZIy7siAlDd929M%2F2qjT5ooFq9LF6F28kJoBnmJbNTKSfwKfsoz6rn%2BI19M7t3UmJt8Rso%2FQb%2FqZ5VsXQUyh3cO2yUqrYjrLWJLqOQ6VNl0BvsoKjZW3B1li5cNyO5vkoY0OqnEBSxA6yFMyCfvbU3LUVqKR%2F5MyikwCDF4o6sczhAK3PM2%2BGgbd1IKnu3bEr1roVKJ5NIR4NLAzy4%2Fh8dBm8qZow2gGJKvl0vUUbtO13F7b3c9NpxKZHIGR15r4mxuTEqrNuqkdzIN2V4unyUhnZEz2gm3XrSYzSLv0U8VTW1kZ7T46KGZDvZRqDmg3FmgtgK78yGdOajCHsLrCBjqkAbEE9%2F3FEbP5TvR6A5dD6sdibUXoymWbZGd7xdLbHYdpUppDjMwKhdm88Leo%2FhfYTS3JWeOSSwNQt2YG%2F74DOmL6%2Ft8gF4zZQLqwlylXx17YrmSn9PrwOqcPGVqMOuq%2FMppLA01xFoWTkyZXLJrLxbYcfW6QFTVjIulwuM4Wg3TIZ2O2X8jNWS5kvTTJYZkuj%2FeZiNQF%2BDz7Vhgk%2FMIFnrjpBWTv&X-Amz-Signature=7b9bbbf8bf1d685fe6ccb3b09c0305cbdb67937b4d3f0b345d4597f2f8c2ab77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
