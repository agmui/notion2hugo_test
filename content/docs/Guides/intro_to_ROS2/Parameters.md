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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623IXSJ6Z%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T121702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQC8rLK1MHjx%2BXgi0zeY8WQnivIjm9rd7%2FBI5mRQLZCu6gIhAJqCM%2FuBMWQP5j3wp3wOXrNiVr5o0oAPB868XAyLnVv8Kv8DCBQQABoMNjM3NDIzMTgzODA1IgylUovQDg9CfUhwKEoq3AOeROx0jVWCycincBAujbGsMq8syb5C3PXAgaJWFMBUi4ecKiqWyp8rYwynPuEcfJxctwLMedUYWviIp3oYeugUVHafm53uTjKzPXpDfEBbj7wGHuy9SuqQvkum6YVCQ50n0w35pLyzGCAToP%2Fdcz1WaTJJkIq7vlcVB2248QMlMyGr2de6S7lNGiEsWh7fUr4ski17QA%2FHttJQVTSdgzfJbFTVy4TsU%2Fu2DnswzBdJAgtofsKZrWrPKVyBlKD6cqSF15F624vzqtrfxxtW2DFXZqAkSxjglXLNO5NfzAD7yIG7DFbCbpd08l7wrrX2%2BQU5vquGQjuEjzf0bW3ZOWXB6VUoIuM7w4tTJVAkkZC%2FUjRRgvwZ3bAFhPhCDPXylchl9bnIP4y8sJF5o5XT6McTURBhVquI%2Fh%2FU0KfnDJNwFFGIVcYRagxqTHNPI9ZdUil1DtUJXzG4m8D6h%2BZQvzbfm8CIwcGSxysrNIo%2FeLkeeOM1ZZ%2FGlBpV%2BT6bq9RWRT1XRbZvKXq0P1RJr22%2Bl7OFVI%2FD9Olvxdf4GncU21OxBOHqOMkrNXaZcsx3H7i8PauvHcm%2Bc7A7mqJVE4jM5dKXk8gaD7pkK1q8cplQTeG0ZjiFg5%2BYxWuZldWl0TCM9OTCBjqkAXyTrHSRVIiMbMSeeh3A7nNKeMvDjTNN7CHSS55rQNAIt7aG%2BTUoF6YkFpiQBlFGX2%2FdmnNL2av5rO5rJYvJtVmNdbJtwfkqmFTDOzs4KPCGc72NU9BUubYnIKQVs4l8uk1XAhXigUiwaAb%2FItLWzntPCd50sAN1XiIeQZShKPR0Zf98zK0Vb6l2JQyPe3XLuYdNas%2BJmeaaAknfUT45t0FBhT6O&X-Amz-Signature=df963000f86278f29ca01879f103820b3109d0148a802ecddd68f8209c5f64ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
