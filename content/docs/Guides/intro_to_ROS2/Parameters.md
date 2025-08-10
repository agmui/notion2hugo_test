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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R54X5EK6%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJwWI3MR0VNU%2Bc23J9nEGa0LOlJ58WEwcrb9M5w9%2Fi7AiBrC2WCf281TgbWsTyizCJNcmWuSWuCqJ6U5zhuMX14KiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd%2BFLgccRQXAsu3MyKtwDQwMDWxvlyfMHAvhAyoYzCtSuSVEeLNoJL%2FCaBrXyWLVaytnhNqClW43YdPFXMeWK1hy5Tvh7lijtF%2Fpnenbu8PDhaqGoXfFDltiGWNrGtq1t9Kl7bu%2FjChyaRRxBu%2Bq%2F7Pn3sCwfN8KUACaryqQQBcvHpBeQb%2FnZDc2vEQtU35XALx7ro%2BfFrJdDohBxfaIq7ApVT1AL78ooZAC%2FaWBV1FgY3fCbiKNPBk41DB74YbqCBO0Sfg1h95snWE2M%2FaI3jWbQ1jaCbimIGQ5opmzuzHb8dI2PN%2BQ7P5mPnGDJ8gLwJUMaZp0khx41bf%2BYVB%2BXjdYqVtBIjm%2Fw1jwaaeVEdYfZKgHX9ZXEFuDv7NApjK8zSnQHJpGmFYegSgZ0x%2BIHsEu3gEq%2FRhXyqsvJNA5equ5JvQ9ROYSfNTaESpLI9YcEXrxwyCkZrrtcE3f7G5A%2BkFE14fxU37ya78GISs%2Bs7%2FO6UmcJ7HMYtJ2JDXaLpT%2FyS91LZP8%2FsjJMP6k%2FhyXoeacXAxZJ0HQkIdygxv5FN4zsGe08bOaPtYmqIOpOFl1TYfvtJpd7%2FyR69hJ4PdUEu9k%2BtoFn7zcn2hy8pEGhbQlw0hOz5xj5S3KqTaatwvireT4ZVpOt4znORSMw477ixAY6pgE1SHRKl8qkNQdHAQpzSY8KxjOnlNSY4IsDr6l8vQ5G00ayGb5wRJrUqKr5KwZ%2FJrkQ5v34lXZ0TyWozr97oKmpkrktpxb5YlKnRYKnKRoS5fzmnFaG4aauNKTLZ5W4ksvI1jZ%2FSHKUYTD16oPaQSQaqsvZYZ1xGefizIOf4FQtkTExSdMq2jmWm%2F7TzG3rdDiBH5A4mtZp4jaefiNDAO8ErWdl3e3Z&X-Amz-Signature=0ea56194eab4ee856255e6505efcf5e6dd349d8d60383bc2abc11bb30d130af9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
