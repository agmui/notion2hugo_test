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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDTOFJYL%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T042642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDlN%2BrKooqg3hmIJbaYqc5Sn%2FFYdMWsj7Etq4IOe6JdKwIgJovrTLGUl73K6bQoOhFHWllxX51MxfT8Os9Rj3jR2sAqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGKytR%2FM%2FSYmHGXmOircA87T9xht%2BcC%2BFgDaufmXWg3Je9UKJ62FXv%2B%2BQE0rAedj8stOoXoxAY5n9cwIcW6KoIz5uPSRjHJ2aK4TnH51SSkQglwVdyUQBRvK93A9QUqvDk2kPqhTGPF10igEg4sE8hXDfoeDuhjVgDKoxVUWoryr1lc8LVtvEPEMQeQmeKPLQCH%2F0dQaAWSDXLeF9QYc8MEHkjIgZeMgiMnlrBe06sPsm7eBfIA0XFZ%2BBDjfCfNBVOz5H3ruyigxK6HL4lTC%2FAfflSD4KGtJPH4veBSXNcyk%2BUVx8D4XxfoH2g6i8mrDBSjo3I4lldQ78MkfZl%2BULP%2FguG9pH%2F6Z5cSAg50sonhOvc2ASWmrBQNxDHJw71RPKuqHBe4lr1Nqulzej2YsuqBfiY434HLpe0gqaCpl3ao2tHmkUigaQdkrfoSE9K9zy99nJaKBgZ9oA8l6CJadXgpNAtuSciODqevJEM1IBpDxNIsgo0adZfLJmxDrAGdai98H6E2e%2FOPirHahikIYAz6dtNdJUsN7nDWRi121e9Gtb1Yq7DLJCGzZpm4ushsydZmUn1XPQNVfc%2F4AGhupFuynKVTNB4ySZaivImyN6S6WmBkhc5gZj4UKxp%2FnS2A4IK5A1d0Vv%2BhL2OfsML7a7sEGOqUB80ceg5KqOpvxYaQsTNxzBLLA5Jq8ZUxJ96Tm%2FmyXfNVMYQvVinGB0%2FQQdL9xkFVuyUw4fzzrEawJmsnAZc0zqNvJxo8f3Ksr0zrV1HoW1s3lmiwwEULGXdWGLHIKFMpZ7U%2BhHFPZyWhQIfGXTVYCXhegCaqD%2B6Go0zIM0OxYJZbSvfRSUqQgwMU%2Bnem3Z0a0hjsOEnupgyyMg7TXxumlp5%2BTdyg4&X-Amz-Signature=ae4a09e7d3d836810249144959f6145e82e889ebf0368bac1db83ce289adcc48&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
