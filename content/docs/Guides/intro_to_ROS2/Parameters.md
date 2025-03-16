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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUJ4C4LM%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T032322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFmJsD5vruxTMjezNlPX0YwQv87X5pyo6gAjVLKDldMZAiEAhAAplHGX4f7KOGlBHyjnCpfhDll5O2EaDgJRSLyjFLEq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDD5QN1uf6JRMBC4tfCrcA3dxUtMQSYyh8b%2F4k8rifVnNbiPWf5mk0rrN6qyI7YSp9ooBLf8onl4Pa5Abx2Rez5kbzV05awbaYeFh8I8ejKyXSCD9eymzPQ3AZO68CDclsCZ3rTjSe80MPMW%2ByMFeRqIQa3QV9DYqkzQYzXkBKfc9cTQzzwPFBINl9zUe0mL4mS45khQzIk7Ery5%2BDdI%2BDm3PUU%2FKsI258jJb32QeHSZ3B69hnoKpIbyv6Ihz%2F70JStxDTlSehl4AbBmcFH0M0ujnnNmapX0G9sCVnxgrsnIYu1ISJLfkd7WjFMS2ARUvGMcXDswoFYqJzHXsFhwRl48nkzhqckNB1jii3V51mkxO5kkhRt7qCjwGh5ICvfsVEg9DeiwcQSQ1xpc8WeudGB6LFK%2B0R9UbnZ%2FR1ad9qaoBnc4LrYlmeRORuO00fgpOu8ouIZnpPjtghfrBFF4dhjHygtAyUUIHbVAuOBzMEfqS6WQf6l4uOZoBL23m1qibMcAIPZ0HC%2F%2B2X%2BjQvtHjBwtZx3DNIjoCmZyCAMXJvJOAejkZR9ybs6cTYIR7aOxY4c5W6OXaojS2rhHy8v%2BV1%2BP%2FOc3qebkI3vGnE%2BfFIUItlEXdglOgyUFhcI8y9qsTzkhU%2BpX0%2BXYN%2BRg3MMyB2L4GOqUBG39CZlGgpXHUE35aVmjzSF6uvkbQoCAa%2FsKdXxLk6J4sk2bMhHbudLOtnrgNdsWbuwYe%2BdWybnWyGEZ0H3Wmo6tDZToJttG%2FocG%2F740wHCIRSo9SsgtZZXlK2BWwpcK70jLIJ0BhO62ujV8g3cNxwoGT6xVc%2BTRQdGdSXxz1qac%2Fsf3RefhH0YEHRxfQOUxEztxF88BCSytOt0%2FGJoXxf9e1aLgq&X-Amz-Signature=20e31e3b979d7ecc7f91a2b371eec76be30f1585808eda6aeae8b4f9a96c08f1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
