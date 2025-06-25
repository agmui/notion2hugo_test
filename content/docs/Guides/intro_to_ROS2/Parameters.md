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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVMOXAO4%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T210813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCf3TgC968fJ8KnlvcIaSGQiAgTzSE5sKI4aYDZCNMlwAIhAPmjWj20unmB3gKjZiOPhvZoUYqfy9kJC0r14%2BYvqHUPKv8DCE4QABoMNjM3NDIzMTgzODA1IgyK5IXbOqYIQ4x6VOoq3AMhGyoiu%2BNUJjcDueRvDvRE9KiRXfNoUG%2BzTSL7oA3cLCAAPX%2B3xBpIUp2haNpOiYyCh83aBEVbtqwJBDSPdUhGqr%2BzL3irp28kXqkGE8Mc2XagJmZC8CZnhkkZNRCnsu4040lrhmZ5dC7ezKrtvnwexGVb0Y%2F6O90fS8IiPYaqnW9iMt%2BeebKPvcqHU%2FpU2A%2B1BWcPeNqqWAOTgAFJHegU1P5PVLUtYuAVzhTrmgWEMSpVUcZHQQ1%2BcbhrVaZv6LskSyU7m5BTS01GKbGU77AixY8lhufRVj46m4kf5MOmq4L1IgUVk5UHKP5WeUU4xk6oVo7v5hXVLlvSJ3sqpWiaZLRSYCCC4n3SOFk9TEyXeGv2POf4L8p5eh2wWfGpvz%2FAJhW%2Ftl8%2BLXtEA8oIgkgXwITmoTGzC3jitC%2FV0Wika6hnwiiQ4Ps7jx7xLGhLpQv7shBYdTPt81MhFW%2B6KWhbLEcr5uEziJYmnzg0U292Ld0trOimtC7Dw3%2BJgvNWFud4LNuP5Tp8BNAHJ3FOaLpAfbYVoAUaKgd%2F6epuvePcIAkyprfivC4K%2F3h2oBpOdbzJw9xbR9EYtBSJZcpWHpBNaLSITzYxbXc%2Bmn4NGqjk%2FDwNi2h8%2BRncKguIejDGuvHCBjqkAQ%2FB3H98SInOzxYYAEQGYtKE6QSTbY049%2FEOtmbyMJqTqeZyC%2Fk9ymDu2C5rzD35nwdtSULdX2TuDpxg1f1wVyMwMhM4lgUuVRCcgHULjZ6%2FfNMqeW6KjxQAZSJ9xXLr%2BfziyMvS3bFzhKzChDjVGV%2FJdyBOBj2Xb1M2uDVcISy7WacHzNtQtkYsTASt528lPOKfWoOPMD5DHJEDCkrz%2BdvTpbL%2B&X-Amz-Signature=a20fe92bb73301d4702f2f339f2fcfdad500f8845852ae9ecf1f468008c8534d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
