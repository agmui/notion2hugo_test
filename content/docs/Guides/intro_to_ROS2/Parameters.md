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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKS6C4HC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo%2BzsxaRgMJGrh758rk7LNfF9hUdIp%2FzDsXxrZuA0yLAIgZqJgELUtbRQkRhRwQqenqwldAxWIvCFEsYZURPjLYXkq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJw0guxgMV7vEzUCvCrcAw%2FfyQRJpfPDxulEo1%2FXMe6VSWMhOq2JgVpDXUMEa%2BvDzG24DDbeQWGQLTDjD%2FCVf8KPykbilB8T90LgmekH5ZmsWYwXdd8OCc9JCxhWF%2FPc%2Fjxz5JouvbXk2fo0aTgh9kcE707VJRrcE1tvmGo087CHC3u1YqzeRTWLk%2BBfEj3Y2disFtt2Y2GmkLhmv1E0ku%2F9kTssZjU%2BvF0v2AdlwgLQgrUFIGqItE6%2F8ET9ITTWTwsSmMc%2BePO5iusQbWYmwJWDiN6LFyzAuKlk%2FyguXvMgEOVeuIKiAkAxT97syIddzsMb46Wzo0f3J8veqLhX9%2F4CA5eFeRzfFjswObfl6TdEaE3ZmaBzWO%2FCzVEg1a%2FZ84y60aedhmZRWuduottW6nktPUtVZfNgbRY%2FXehZtu6Q8WPuXFzoT4hUi18G6jBxSNUa6K8sTZzOqNRrJ9yAw0HW7eS%2BFBvjUuVSSSXIe9AB3wHNfYhTzgvJL9nIRPOA1LO5sLP2U0rz%2F5N886Tn5rWr0N3PW8JZjOW5Kl80x9kF%2Fj3qfy76BdMdEhoxBTq%2BMNFzP2rw7EClGt0WMQxD2s8rD7gmqNE%2BqAKeXN9OfDAKeJgCTo%2Bg%2BJU7f%2BN%2FMMXSDoyUow%2B8CUYdDq0ZMPzZvsQGOqUBneOk9xsVga5bywmG2liKrc7VnL8XhA9Iua07htQGPgKgKJKzXmfreluoFfHFeN26Eh33XiTjmbbBtauI3VIsGiSU3bNHQUMQUXR%2BrR7bZk68IJ8HQ2Jb8ungokQ1FTEd126ENRdBof7Md4N%2BjwQq9pye3gIdAYV9zsGBU4j7xPE1Ll0s1JRAo3VFYgkpvJXhOtRyEO0Ct3U0KvNxS8%2B1FIovZ%2BGy&X-Amz-Signature=357b289c256c6a4db66737aa0bf3f8f7e2880ba0b9cec21928b42115e2af1e8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
