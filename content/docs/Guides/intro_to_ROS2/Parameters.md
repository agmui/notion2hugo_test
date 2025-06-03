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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WWWMW5F%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDBrZumMaLhqmpgabpnO%2FqWqWBFa%2Fbfaj2R8NF%2FEvvEEgIgamqB%2FrGosEvHTpuzm4zbzzUM5yPpDK%2BpfDuvJVsq0OUq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDNmDDrwtUnszf5t5tCrcAzZTzVa2gixTEPAXPVi%2Fagx%2Bqfy10dRXxYnXFgyHaczLNu50KctU1CLx3SVCMjsWlUdf6QWUJLrP7vrRcm86bb4RGcf2Xs%2Bqiv4jR9vk1WGYkXfX0z%2BZOtzOhMeth5TNfBwFul3aJvJ7YAecvqzcRQvT1mkYNHXeUFqLk7R6pNWxZXYZbkefDxpU04Xo%2FfkGwkymd1RJKPB8AaksIBThDBmLxAg2bb6fCnGA4531ytwwKzetlgRF6N9cimlEvFjYyzBi52Uve0HophR7PCDR3DIROh5e%2BqZsCTkNiGwtrj84A2VXW0Wiczr%2FvZ2rRa2S%2BdL4Fw6I72xa9XH%2FhZrFu5vyBQ9edOPigRzP%2BtPTGwH7%2BCLsWHz7vHW6HguXKFwBG9M8Lsc6ZpfKJKYNAwuDeSBMYiw93197GIromsTvdh98fCC3ieX6cl0ExpoTEqDWgGvb56L%2FTBCm33bHYH3ADzYIm7psgcOBbDL3IL9KfH53qHUeozTyiyVaSj3n78CgkuMc00kJZYs4IVnm13YTeTHnzp5p2jt9HUlQjhwCQP2Y7nm4M%2FAqP5nGWlS0NKkBh7YqY9JxRJhWv9GfBMzS0s0sZBpe%2FYmyFGq0BNp1MUZSde400Q5UEi4ENRWHMNSF%2FcEGOqUBsCKGdTZlpeOnya19EiO5U8V2dEffAxNyX1g8v6A3%2B0AnFl%2FyQCbEcHM69jsapB4xHcVHMOq25M94e9ny%2FuGer1b2DjNBZmXdYIahXiN56oM3ON7eyotp7WcUhH2U%2FTTJFXoO1lpMopZPCxsQ0CY7xsUH1WAquEFT07%2BcncbcUJmWGvajRIR%2BoUSUc3CR3XRX7gsJyEWsr4l6uwQF7oJrfp%2BnUbHb&X-Amz-Signature=408f2a7b4f34a320263e5551eaace199c84b3f7136bd8ea09d16ac326ac80437&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
