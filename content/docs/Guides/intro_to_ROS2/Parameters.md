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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IVA24JT%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHoBgS8kLvG7D6Dt0QkCnMxMvq9bL7Fb23Dv7CznrOdbAiAGv%2FJ5HkuDzSPzB9Bo0H6PfovpfGoSPyVBRQeCszHUNCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBRL5wSOt0Q7KUyqIKtwDJaKLgxuNtX19mo3IDrFOVLVdwgx3ZDenzVEOKWQE%2BPgnYXXFcQjoUGfAXxu0eYqfD8BGvGd92KrY%2B%2FCGeqvY2e%2Fnwbeium9z1awjqoVuB4BkbBqXvIRNaWqf%2FmLIWN4v6ryti3ObrB4lnri2Z3Yqw2WmME2UZpOpRK7N9LGVkOurXM3%2BqSAS8Rk%2FZEenXDtuqg0spGWWHNKF0mGzB3hfVuFCkFtEYzpRHw3nqstQfoQ%2FelcabljxjH%2BPN%2BGGw58wAzUGphUBuR1lUPZLCs8M9YQkMzUKUEQhRLddMjJOq%2FbAlexA%2F%2BWvbOpWarcTuMaib%2B%2BODYAbmKrP1jiq0RLUiqRSCjBqvYVeO4JqXa28zqY9%2BYj68jtf08fBAEx%2BZYYsie3L2igUXJxItRUVMtWErwMQMMtA0C82vaEarhVjNq0FCn1eBjIjhk6z6yQVd07DmSo3FZmjq2KNvhtBj5f9BXiSc6Rqzu2%2F9niEIKd%2F4IHNWnsMhrkdI1cV02yMeI0f5jB0rpyCJOMcoa4M7jAHTag4ncT3GQ7rQz8f%2FO5qMxDK7llNprA%2BNYrb%2FTH7ttxjwLXV85snUB%2FAMYDlYi6W7HmnD706Rj6cLxsELh6LfgtdZHn%2FcmSKeAyHLzsw1cGnxAY6pgEAlzBZf4yanQ3hGWA1R4GVQVJ5n54yvdL5ccmsJxt%2BIbp1x3WK3g6EB3UErpGQ3KCyQ5i2aL4P7LxYCZHsV44wf%2BlHNy8mltYS1%2BMp8ijE9qbV2rbybUtveRGmvppWhC0NWruCCGehLGH5ZoOTf3Kfl53ZkXN9Plvsp5lZhwBHE3z8whcXwBlrLonfELstH8uJToU7ju5dR87wUdE8v837f2k6AMWG&X-Amz-Signature=ec8cd7e4d4fe3e732cb113e9089eb6cee909295dc39eb278cccaad01ad4374bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
