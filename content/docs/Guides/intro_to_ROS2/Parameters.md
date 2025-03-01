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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA6ARVPE%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T081000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCdoAOUAzzZI3RUsPPkOX7DUN8RjWRlMzqecd8rO%2FZZIgIhAOnUbWcNVMJKGhXUb3pjAstbFDw7i%2BqnOR6gA9YaymyOKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrTFrzkfjc6cNRF1wq3APLIW8qaMeCJnFkGPClcq%2FZ%2FIZaMZ0bIkxviNLiOXbZI3qMdR1j98DjwuukpqDLHYpf6zJh6wzfmffCisWadEkMQiFY3CJiXcyHTHcHhqrbFYGp%2F5bjLQlSdJ%2BwF4jaQBWJZ0sinGE63CnZ514eHNWhSO3%2FkymY5KRPF8ZkYlwTMjvKBaTdkK0nmeWNQjZQwKdVRhovyDdNKtII7xYHgFQifcvdeMj765FnIfGrVywerWbVJVQ2vNmiojWWGUQseCeXxnabYF15zgOFETEiQMM9r%2BL6Fzk9XQMvFZL4N2QRnJmfZFqRE%2FDPoffc5%2B7Lx5XLm2kQBNQnc6q0fMHgZo4t8l%2F%2BFEhoYO8AFBO3yBojB7PgHyfQ5SNVEtK3hTPeImwOK5CDOwHsN9zNHmF5fl3l4HtW2KUfdSU%2B3O9bqXQeDpE4izeCOB%2FhQ0RZWLsL0TwL4I84prDz9qglTYYwx5hVst1N9o2RapPxP2VVS%2BVM7fDWrKjwInN3lbfNTibrQQkw6Ge3wh6xwG1TCKQKIeJAywnpl%2F8doEtYPumFJ9ArlHO%2F0XAu3eIG0Vo%2FM5C0pWSPLQKhcNE5mIU9HF0xanaxz8fIhctGoFiPbp87eyAVLK828fUNhTbVaEykxTDRkIq%2BBjqkAereEvfrIFAclOIFQzwS36Le6rLgkHnp9xzkVt0Ri%2FHKzIgD7nTCKyIaDrwXaWf7iWY3Fm4NtYcnV3aq1Ntfe1VGJRszEhCddfBR%2FEpbc18NuEo2cN3vty5iWJ4Et1YEPdyQXx1VMwyXSeKiMD%2BA%2BI4KcUanooJmxaJohqMBMk2DvBG7KYivo699jrvCk3srFr5ltujhroTNr5nXIu5lNJHjhCf%2B&X-Amz-Signature=8289cdc0a25f5bf2fe8253471f2db755fa8bfd187f8e867be9aaec0b2aa000c2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
