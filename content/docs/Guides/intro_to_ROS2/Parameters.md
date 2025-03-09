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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LTRMITG%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T130218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDxBoYrc0BjZcODE9heDNrpQezCJxQV4zb7xrKLFvIJ0gIgfVKLAWi3I8N4lIfmZoXSsBZlIETrg4RyX0qEy3ZxNuQq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIDsIs7ZFUzJSSxb0CrcA0Drw2CiKqNc4LIyFTGxUxorN1JoDkHsnEWag%2Fe7ZsXt87O6%2Fk0jeybuUwQcTri1bcZl4ivonoOcF2W2QdbGGDu22qMCBY9rnArCtnWXvLgb36Ri7G8TeeNHC90Arz3%2FgUiHKsvOZY1n2m83gjQUeY89UrxKKjrEQe6G4btGbu4Pi4Y5oOE6gtOYlJvz0OwwNiJTB7vccePRD9v1iddLMllEK8lzw9pMrG0KwecYdaG7o4PTOqy%2F5bhNnkpAqaxGlg0nQ92bKA%2BQCjZgLz8FPpWEC3Kt1BB7SoRhmInOjmKvhe9hl%2FlvJzmg%2BoEx3Dh%2F1AvCWY80FUqMNg8HBFaDDAPgbUT1D4zftx0iof1NtEHtj%2FkrSpB%2BgJ%2BUqCyIcSW9TecwMD%2F2PWZSXQMRiyNYIEU9WZDqMy11i9%2FgaB%2FUpK2E3Qxo2VyUrXmU6yfK%2Bg53ozQwlMuS42dmJk0262ZjHX5rrqahjYQ%2Fp39DTWRTq5r0oxuF2h46fZL57iMYFUYvtAOF4TWf5sidbMMal%2Bic27i3FTeBqDyoEG3H1GXneNmRcaLo6uI7jewyk3PpdmmriEUd1Dbn5DfwN%2BXNIj0rLKg3Svi1euqlFzt4t7tzK3pH5KWCLo8FDqgOxSGAMNqKtr4GOqUBwrxXcrSG2A7FLwnzRvwhiM5bEd68fXOjLOviEOdeB1J3hqR9nCl9Zdo0uhi4A7yevx8wah3oT7BfKdmnPbEfW1f0YWl4zaHUXhbideXR%2FYvcULDLS8I2QS%2BuDUXngHFvR3sonz9op%2BfeVMYQW1Wn4MJoDfZ27M67zO9iH91U76QlP1WEnwg3HZdUF5JwnyZMp2EL1dPSZgEpoGoFMvLSJbIaNXEP&X-Amz-Signature=888e6a8717cc664ecd58c4ea594388b281c643bcd0c5500ebbf2d6bd840b72c7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
