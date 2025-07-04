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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2V4I3DC%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T051244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIAdt8jlAbaDaREkihAsHfl3dyMQ%2FDbEeMlMyZrgwgpwmAiEAvnVWpZuvJImA5y%2Fd5cD7q7viKz6oXouNoWfcQxy5QVYq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDGECUyXv7fUqjAcu1ircA1jIxnRPErD9xMkE6XcJzFSl%2FmVrDJN70BXaQ94WUlwRdAYhoCta%2BMBSAPSfqlflJuU7Ieh5VKN0ycGmNWlox%2Fz45iqOPkAfe8pkP39eYrYzkg8l4xf%2F%2BWvJiOkNLkUXEX%2BHHQOBShcjMcE8G%2B36Sx0ysF%2BzW503j8%2BGDebf0lZicGnsM85pM9oHAXvZh8jl4w0tbbsGrJGrFqZumqCUBu4ex8PikUeXL39Wi1CiBeauPF%2F0gnoU1BEVZ8EB4LAo%2Fhkd0gE%2BybdQ1I8SRT2LtuAJHG%2BQ4U8AbCMKrJ4S2n5u8WW2e3O%2FgEKktDfnuciopgDpPn6f6rJ8rKZEKEawMrv4qM%2BzrjSfVb%2BVuiyQ0LrzUB4jiFVx%2Be3MTU8lEaa7nFvgZBMJhBf61d6uIFDmzAdQKAEw3IQs8iZ5SilBJCmGOAX9o9u0ji8mxDCvsRuMHVbop2bV9Em5FhbWqZTzDqFbhYN7G93sieDufyI4a%2BIyiSgaX3pkATdH9c7UmrgGxNoDHjQHALAg7WWAt0ZvXGuAltNGUV9PaP5eWmFs4ho%2B57WKZFgDlJTBhHETikx2L4c9dkt5ikIHTtX5BXkU2b%2Fcz372%2FbLjlw4w1KknyaRej3eKFaNlLoofx4%2B%2BML22ncMGOqUBNwQveuCS%2FdtYobM3h6%2BVTy2Vl9RCQ2%2FF9G7Gwmu8%2BmlpQFB9SQPz9LNkYOamZzlCAYRaigBG7AEiMm%2Fi9eSeSGOhj6oQDQfogcqXSMzTu2swqntAlnb4Rngg6v0CvaGb%2FEej22NjhV%2Fju%2F4JUEoF6TqB3gg8tA3HA8hhNsooc1gd16%2FSkNbG5kyn6dhrPH9lvaJYN8xp8VliXGwU%2FbRBl72t8oG6&X-Amz-Signature=9d363625a52a08d86ce678ad91e5756bedb62ac6499d0123e8584bc9f8775e55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
