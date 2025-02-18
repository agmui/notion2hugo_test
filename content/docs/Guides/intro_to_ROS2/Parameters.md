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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEQHP4QV%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIF7HdYq4UoNj6wRkwX1xnH%2B7hkr7zfzq7HekQlgPMAlYAiEA8oatMSnC5w7jDaRZuoJp77LqM6BAoo1EMX%2F0p7UcQx8qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP6jbE2Fmo71S%2FNTECrcA6DTerEFpEW1MIQJTTwG%2F9IgwADZULZRSCDjxImIodoh2deOljQ%2F84UO4Gepx7rDVIKwEc%2BNSUuENKVgwlqWwsbqY49jjUX0ItwDk8lO0d6uV%2BK%2Bo9vqCmhD8Gcncor8S3Wcf%2BkelUTPaM5C6gAA9aJRPmmD6P8hRdUZGaikjDVzYlyuaOt3MYRi2a3FrOCCsHmp7zKop9gU6mZzFBlGcRRtbDp6dIX5GUE76x39uBE9tXKZDVN162XeL3SN6t5SFWLLw8EnRSryZGvVZFmnbMA0LT4J6%2Fde4fD9DrzcbHgr1rjHb2pb9PjGpsyZ4Bg6zWocm%2FB%2F9UXFPX8T%2FQiuIPGrh6CEOM1%2BLCNfTl1h2KJ1zeRS0UiGCb32Q9zp1xpA8xrr4HL0c1GhjpMqfunXPSi3xeKys2%2FpL3BbYTR96CqODLFjBd4DQ%2F1IaCuK964P4ADvMXvt2LdBd4qYXt2xBBMp6yg%2Bx%2BosMYOw9jW0tpflheir1CDU1VmQvbVEqLlfy0NLV4%2FlxFkJp7MAATIDA98VlUl6aPctQxOi%2FjVo7BpgTYpimn8ETsQpWcI8kS8UxUmBTLqt8URFPH0fZBy5RkNM7hNcHJbXQcnYg%2BWLXOVbWbI%2Fk%2F7gvdIciDj9MPaa070GOqUBIpwhnjsAwY88neU1jg5TNOeIefpu7YVP7ISQVneEI4ySPyDLOsxjrDN86I%2Fan6YJbPyhYBXprHqoolyx2IdJA5pQ%2FsRD9KZpBw%2BhzijXsT4ozYJJFxZZuYNFX1hxv5tjOK2%2FGge8P9oS8Ce3SaPZ1LhJgoxLIP7tn7IulVAFQFp6oBeWhH9QJgOqk5HOD%2FIHAwZeDXN6LHZe4DSeL%2FdasX8NbMwd&X-Amz-Signature=70cf69012a977f755337263cff2c67670fd377fccc91c1399049cbed44eacf00&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
