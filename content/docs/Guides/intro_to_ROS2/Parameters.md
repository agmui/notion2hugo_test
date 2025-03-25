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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXT6DK3M%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T003848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGpUD22%2FXMt8Nr9wqUs7ACf599t%2B7aMtTn%2BOGFH0skwNAiBaT3j9XICzCIQ8ZgF%2Fns%2BUuqwy9XsOSGdvN%2Br7S8b9MyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtiDh1hWgBGlnSmLoKtwDsYMLvCmoYzBb%2FpuyVod6BuJPXTUcmxDjKij214lisGcvr2tAhepMLXo7wkQTLLDIiwXIu3%2BLz1O%2Fin3TUGuB%2BWMxDKrdCcPpOh1bK5hdUErDk5kY4nxFObILIlttH%2FFJlj41C9PKbNS8a7Nu78Qn0btSTu%2By369GxVsCk%2BrrdR816utut9iE0d2dNvXQIBcXTCdZlaHGaLa8veictpbQKfH2Iv2JmOrspYHTMidXY8Y1OdBY9C5%2FYBFvECOL0PZdCKO%2F1wTLbGqPqAFJf2HOghAFohV1UWY26hLa%2BrmceQkc5G4xknhZ1mK%2FuvaWgR%2BeJ%2BSJQxNeG1srNbnkH7YIptaBEva5oUcjWuznAfhaEW%2F5r3sb%2BeDvGqqakdbaB8Ny7ByYLgCEWydC0b5Wgf0QFvoJ8MgJdaIMJ7lUzl493D9rb1bV5ci4BtodKsEtJDZq8bEg%2BY7JYIcPWOZax8O%2Bl93qjd6ijqmZz6tVdo6wfef%2FKz%2BKNw7uV6ZhTDOD%2B6rWpLenCEHHfQXL3w%2B6A5fCss2deJsVp84XRPQVixWW5k%2BQ3fRvpMPmKCkqaj%2BiKcYhY2SGxNEIhsrf0M65H7sMcMO8nHMGIEhHO%2FZ5Z%2BFrV%2BHYhNi4A509wKfRqj0w8vCHvwY6pgFp2SNPA%2FNBu2z6Cx8hWgIlMCky3slaWNXfGGhnHjFVkZIb2FgxrpCB8QZDGQF1dnq3ESEPye2%2B8%2FQrrHHjvE1RJuYRFo3pDOWmiVXP143mobmEf72xf4Xw%2F5FXPIXF1xoDpKLz1kbnUaPrK%2Bih4Z1cbyobaEvc8xihIoDMK1zqfGW8CupWGXuXTC8M8nbc03sI6LHHPlEN%2BiYA8ft2kmILz9szm9ZQ&X-Amz-Signature=ff6138f7972f9c3754fc4a9fd67072dbc459a9acf9ef56c43ae932fa2c904e32&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
