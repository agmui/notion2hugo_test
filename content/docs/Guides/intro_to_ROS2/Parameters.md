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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2UC5K3L%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T003448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYFIAl5CXtjAmqCWtqLuCi8YYFTZv4k%2BH2WfzMGopudQIgE8N%2BvQYneT0wan8fP2%2BZi3Pkpfnnl1V%2FJg9zfzw6MBsqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2Bjwg21z7LhTWCztCrcAx%2FSQFJm0DGm0aJipqkLT9OEAt%2Bxc0DqhV8XI9MZOrPnavpspGWVlR5v4Y34%2BxKDPIQlkjXNAmsJ0EM5fDl7zZ8eJMdGiOfhqIy30TJUpGISFBqD%2BNn37ynUHLe1vEOe%2FRuCOzGfC26QymKfXqr1qaoT%2BRbbWiArWmOSiggTfepycZ97xDraRro%2B50ZCVGmSF6ejpabDjwNeGrejJGlGimNmlH4HzQjOWTj6bBom8ERf8MoVpqeQk6h7MfEwqcbBlX9o1jFbinTGT9xHA66WNmeziIlm6plELMa2MR7uGeEAPpzzU5c8mPMzxKHng6eS0AkiQYvBVCqFyd8bq45IzqIEe%2Fsp%2B%2FKeeUworCYfnmzVtxvImqX8cDpD1yhhjTOXURLiQ9FJz07v5qqs7atwv8NwP5C24xewyt6B8zIiLSv9AF%2FuSYpxrBM5DtCfh06h%2Foq7Z0%2B%2FkQ1kgiLG9Qo7xwHRJcdSNynlf1ItppTtmUJ26mVElwCZQ45y4wu5bq7DTOpNG%2FOl65cZxKGUMpDIGuooms3%2FJiJhdMja66nGn5pGQzZAOj9q9PF5Y%2Bv%2BXt4iN3ETSgueLxMKnAZslvuW8eFJcncro7EeCJJf25v435f9q4LA6CFa26tkrA%2BBMN3F6rwGOqUBnz1NuHoyNrrQID%2FHF2KCWe3ZjULVXb8ioM6XUfyCtlhpsJDvIhp12BGBRIoY0TYG%2BueLwrSZcWuqbJMKY7C7MmuFD9GgPXRPJX0OoUuFX3ki05lt2o%2F69sEWjXL5%2BP95KWPxz0o%2BnWd%2Fkmv2g9KmGvz6Voqv90ev15Uc0zbP3FjPE5%2BAJLR1DnGjksJuONtu3cCWr7demTM1wFAw15rSQM3Bi9q6&X-Amz-Signature=2236c742170606b58238141d3eea22c09216400415622e450b56f881671664f1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
