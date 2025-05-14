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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE67METV%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCICgIyqRZ1LsQ6gtAa3%2B84IAhyYm9ci%2FLe2FEBOpVX2WTAiEA8VlA%2FLpcwfOyvZ7YVR8yP%2FIyZdzhrTm8IGiMPOswW1Iq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDML5S0aKKBal%2BwgDhircA%2B6C%2B0UrMf9DU3gJDPl0UWOADVLIg9W5hrDyumjB84BxggbHDz0II4UCPyYnxGPymIWYoIW8XAFhRJCmD%2BtGPDwzaxX6CkaIRYMVHNyQ7ZNH%2Bxu3oKAOBbIuy2wmaMvQmgKL1dJ6UuMH259v1bXHq8QELN1CapBg2QsEfCsBDhM3In%2Bw7VaRQH3jOLs3k456Y6NfJN8Ye8paF5GHbpICXijP9z6XTtp%2BnBOw88aMlaJn%2BXOIir8ShJVBJ%2FnrDeD0B5T7XpwboQdjfZ%2B2zQkRMpVRYNoSSuVO0u6zcgTTbbKp6mI4iKpo5oUT3LTwUKrQxf2ujbu9aZD5oW1cGfyIAJlwTIJ0rfYJ9gqhfzgGHxivZQ7Y9lbaZXiD75BpoeUMn1%2BonNyb9hDPXUvfuknUwC5NPl4m5Z1JtNt%2Fyq5%2F0nmAlBKCs4u0nG7rq7c2%2BYYeJfGShxeJgTN9dvyV7UYqKsoXzofhRDNGOKfRxZdc8Gq4FEjXwAwaEuDE626hXA8cGQy97dlV9NLh2plmE2hilBDG5xrYOHlbODaVZwo5QO8jO%2F6kV8JcpXR9kosojDl7%2FktwO88trBNMFN4qOby%2FAx50HlU%2BnRFjZg8%2FCjOjmgjEdWjY2HtBeaBekOPJMJnWksEGOqUBecWVdWl8DXQguovwqst%2BpWhoOrlY17Y6iXKlHjTYL8fSOe1Ly4m7dbj8oQEmupN4ygar5BtXwFvqNf2EF9WZ5mCrdsIWGH3jWRb%2FXXvyfBsiIHKBf%2BKvw26yI4U6%2BBRiAmnQ0jFdZ0rhM230AwX50ehmCq9sJHaeZy1WHbYOpi0whvMwW2gi%2Fluv%2Fmn5a368i520c6TLxppSXtsNZyaovmQVpuzl&X-Amz-Signature=bc5e04ac7536d5f382883a194ceb64bc30c6bc598c1c5629ae14fe2d79d90b4e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
