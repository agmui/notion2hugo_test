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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAL3S5X2%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQC51ORIiNrW8Fnpromlu6TLc3mcdRT8zWDyhsTKQcfsHQIhANC5YsKVB547wt0p1ZihXZsTCzIF4HJPn8GpJlGC8rr3Kv8DCF0QABoMNjM3NDIzMTgzODA1IgxT5fUgOi8cfEPD7kAq3AOP93HPt3vIPyYKyT4cb195BsSlBEsuT7i4K6AV5WzWjm0QBPhrA1ZyRWQGv2BfwiuN2cVMQFpNPJaY62dif6mXO13tXsIQmlcrxbomcuVQw%2BDkADofxNQXrodXQnQ488a1sgCxWxyCpHFsZ1QEg%2Fxgq7jn4oSyRJoaMaldxa2Rw0%2F6ItgMdkmV4N4uLF2%2F9SSNEe7BX5sW4HKg%2Bil8Yon%2BO4TzOzPENMPcZn36BFUHuyVQhjS0M83aalSR7zmdUd41LooaYF6ZUSlG7stA2l917IerXUZgpAxZlXv6cn9WF%2FyFtJJyOvoIwDOq5zuroPfIe58cL0b5Lavx9PXxhrvFwx1qWDWEmjhyV5F9exyIcxzm7fqxV366RYnVOHI5cIC%2B9EimxzEl9ukU9u6Pm1ohXanMBLz5dr65S6vv8GqvIOwrCnMDWdGoww6%2B%2FHamvjD836cSm93ziOxBqDYIrsRr%2FpnKiRF2RAvWbt4KKzGhN072jL5DlcEnKdYGwJilou4RP21lGR5amrf%2FOJUzBABkUIZexdO7rhzlQ%2FMcQKrHii%2F0Xnf%2F%2BLgv0lkjH39NhfRor7kyIPRMVkQTj6ZMYTPFow8kQSC5miU89VAK2UjZftypMDEOHA0DJXrUCDDzt%2FzEBjqkAQ7pV4L8iHPOWFCy8BIfBvqCOK3GvNKhXg5NFpiFZX8NKpqUAiBXhNtJz7DH0vy8FSmTGuvsjrjPFo%2BKeC15XZ08eokcwQhrbPGk5w1%2BCKxtmN9wszBZ7BYn6zmqc3qr6OVqgwit9DDCfAhZcmaV%2BYEod5jixmO2HCmpMUuLAtBwd%2FZrgA4%2B1%2BfrnUKbPcJ8u9Hc%2FbsDSJZtiIDSAfhox0gQDyNu&X-Amz-Signature=1ae3121f01b36f90364f58d754a9c0ba72021b5c353f7536e21e6a760d54f2a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
