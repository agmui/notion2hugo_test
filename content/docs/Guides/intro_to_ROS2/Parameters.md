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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUB4PFSM%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T041051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCICWC0nMECZIptLSD8Etj7eWGbkvPgoPIstJgT4yq0BmQAiEAhn6jDelY82VLwb3iQwOmihwYndz9SHQ0pomhxjV5Y3IqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3vWJC%2FDQeh8UFFBCrcA7m%2FOpJk9T%2F%2FjhgwAkOkpxd6TA09ljcKya1SsiqfLeMXWaSTQbaer1Wubkdfwp5uJaE7INPgi%2FfalSGDb2cZm2zKEM%2BqF2FowQbL9JszUfLm6Yx4OGPDNnnH%2BQUvZ%2Fl6%2FeyqDjfS5XmyTck%2F72EetGg3ANBxXlGTS0g4jP6dRT27ai56F8mtKX%2FWekUqha5zeP%2BYvPmG3oyX9E%2BZeZdf9UML%2Frxv35hJIk3hvWEHurhqu5e6owVs5AmnOMF4vP6CrbqYWna8Hq6%2Bdgv6WDAzW1tzYJsPbTsUpZMoLDRCOpXSP2nWVEamw8rDMKlgDHi3UEZn5LLkaovlPpAIRQlLTsvu7tSSO9CBD%2BOLYKSWNjI4OoWNTUtx%2BHrWnTLoTfug2tyYXiN%2BCYKBRA2jYt%2FEkaamvQXKvT%2BYB3VlzeG1IXEB3fdB7mkysr6WRIWjPvVCspiaizgCKhzaZthr1QQ10NEEqYv7FDrB%2B5sZqaK0IwrwOGPoxTgovY%2BjnLN4cFy3lM5tFPkgdaQDEfPiLarqj90o2SeMEqvdwcUw7eYrD9JbiCzVCnWq6fz0dYRrdJ39cPpofOaj6o3eG8O9KQ0sFQFFOyJ9We1lMOBNb2R%2Fk5syTaJ9afyi8hAQ2ztLMMWVqL8GOqUB9E40KCTIf%2B2pGCT8CIvHqORrX8oiPv9hml%2BbkdyJRhMQTHyVbCNT%2FVFmO933KCGBQS5NELbTkxZR5E4cvP3%2Buoccdusg%2FawANPD7twtzxv7W3fzdln%2BbHSybk1447fQonFPSnam4K3f4SOY8Vp8WRQjUoXKwJaQsDL3LDtk1PVz8FVBdQH71mdVPvICijN03JhGDZsD6jlsvzlSTzxlVzMclOFxa&X-Amz-Signature=3c96a703420a4334af8102fa2e9084d2420c4d84896c1de89729f7c7b5a8e936&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
