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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FBGO4KL%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T121511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFc%2BtZlI0lyx87i%2Br%2FB%2FR%2F4MOaj%2B%2FXOzwhk7K3kawJ3OAiAfaZ%2FSg3J8WS4WqalQbsLwyxoeXSv%2B0EQlPfGPhkz7NiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVT1U5%2BrDWRzaT9GNKtwDMu4F4tLQsGOH7Wvvz9xY8YQGx5mPijePzfPC9Ow4agJb4973AvP5pNLKc5rdinQvsejAnWwnYqJlb28bCtRQ%2BcaLwvE4II2yEHBLB%2BiR6ITh89DqoPEw2xXyubgfzq7gkRkihT25Pn7nvj1EstdNmI5wUlGu2bFX%2FfDa0cRFMghKQN1vQfeMoOw73EAFwu3N%2B3v2qGSnsOemra3hLJp7iO86oRmJ8aoffKMWJiGtrlHGce1nOBadarBPpfSciT4iqsEDEjoT5pH4hyaMibdSZL5W0gxXbeRthVYnHAuZYvraBPRt1ZpUsKsVmiMRUCiyZFizcG7LT%2FUsUNpWykJ7mLKzVtH4GtxBYfpCShJ0dMyS4tzavdVApGTg4%2FEtwNWBLbW8gzd5rSz1nj0cdEVxxqYV7aHqha1kTIKvjymya20Xuy9kXZbuX9DEyBekYW1bwh6OonhkBU7dS3j7o2oMWiLlXejO8uAXFF7pZopvcvwgpzTXo6mL27E%2FK1GcsQIRQjM9WGH9jR814MT5R74HoPvPFK1hH7fHjFYeD9DSG4OUZz4JLRz0Xt9E1IMCmXIpT2g0BkVXBN89aUGSPq28lr0hL4D1SdQjP5t%2BLISu3mXL9PCObsXmw9npKfgwzujtwwY6pgH2deFDwno5LHSHKZJVB78QIsmnnxU87px4LbsoKQIg0oK0BLREzy0Tafl8ZjWCR8g%2BzYMCwNSRNhj4BXotoEMIAPVh%2BiQJ6mRUzH3zvPDvFb4VvtRiJeBUIPFuMgoujBEFXnocgltnHbTJj9Rshbe%2F9nilvf84GrrHhD4xVDdU4DaVHz60PhxUUFUgRGC73ofpH5TAasdKMErSofLCAXiLVQq9Fnop&X-Amz-Signature=fb82d8519f6514f38a374badd603a6831acde683b978960e43dfa15c6c746856&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
