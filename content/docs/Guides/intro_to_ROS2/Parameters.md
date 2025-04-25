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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XZAYJ4A%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGpnhzhBPwVMqCm%2BLDNp09XZtP489B5mCf7kg3S5YhWPAiAkx%2FIPvkZS2xyNZd%2BkkAdaiDjqf72VcSy3%2FO0zZ57z0yr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMWJS7ZCa4IZkDYkZCKtwDaJd4I%2BRC5wna7HiIZSb7wY8VHqI9gT93otFkdDIgSVLtTCPv%2FU5t7tVAoMpgXeiPpO%2FStRpFF%2BQbcFNDvRWFnmu5moFPKGQPnAA499qKlQo0h7Ou6yt4dfF5xxl6O17WHV5XgMKGcuFaCP6UqEYgrPYwQASkGtwgDq2ni%2FtXUCuI9o5eLOgEeS7ck15T5YSoWNCL5lBcmx5d%2Fam%2F1w0jPWtt0turNMhq26e4fdjsiU67IJWbnMousxEFbRJaQNIgEjCvD%2Fj0gneR5BzU%2FxuAdFGcMuVUUb%2Br0etpvgLrEm70WSyF%2B6abJpxemC7Z7h1AvT2rnAxX3uN8A5gHnnhFsXw5H53H4bfpG%2BRvkD3kkWOpnvFCCEhcMGVweUlJv8JC%2FHLL7vdOCJiI%2Bzc7wxeGs2pia8PwflqrGhM4MK8Du%2BEWtkTnlTosddCeu19NVQvx%2B59HXwSGfniRFwvQoH7uWYx7AkNYcg4id1X%2B2b5Y84TOwc%2Bgc%2Blj9LArZPq%2BBtHSh%2BUwpQOVtuvgUj9RlMSLELGVyvT1vJ7F%2Fo%2FSx0xM9KpfnH0eG090tV5uQzRtq0V1kL4n8jgXHCSHRjqhOlycTKwBiA1O3ACCyoIhVBjjTJgGA1WQAsfGy18euCcwn5muwAY6pgFKZWYTWjWO2AM2moRESQNGeHQNm95vH94TvTP7lZgqQeKVuRhkX3fhryUjFeoZynXpbABDw%2Fo8pP3o6%2FgI79QQ120d91x8D7vo1TwvNgdJZuz%2FSd2A7BKTEV2WwRb9WQFmVSsvHbuT6BXuskfKQ1oGl%2FxBae0r7lpO4xoLM%2Bfwhnyzo34Ccn6d0lLukNtgTnX7PMDDy7T4G%2FCQW%2BGNBn3RaAwbci%2F3&X-Amz-Signature=77130c6ab7df332c17e9532d151c16e5d828d36eb7bf2c858abd23dcf495f3c9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
