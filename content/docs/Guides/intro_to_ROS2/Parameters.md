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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U2IXNH2%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAAswI2ibe%2Fvr5I6fC9xsu%2BUuix9cq7VZJkWQKK6%2FXmwIgQDtEyxRpJl5vVQpVFk9JTi8DdQ2k88JPd7SW9X5q1JEqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI0A1M1iHINJ4OHZfSrcAxUaMIjNjRIs5R%2BXI%2BkdMbPYoK1Sm2T7CGCXEnzpUPe5wwNsNUvZAS7n9w09a0IsCeBnwQgKMqE%2FJrttb0QSkiiAU7s%2BwlRrZN5iG4AbH%2FfeDIktLKR6%2FrwriWkTG%2BUVZSyuzSNJZNGEzrVV4MOhqZDbM49GOYFipXiwW%2B2%2Fl3C%2Fr%2BO1bk3GNhcE5CQNcpcriJHAqSwIW4Qt6SAhsX5cAaBk8FR5adSX1JtdY7%2BHjiV%2FNLdhGE8hME0rTkW8487KtukCEfU1RYz0BdJKncdyC5KuGm6kHf4k17X2GDBTpiayl68%2F6IZPcreYArRWJBHr7NKUyeNrmuA1CK4aYJg%2ByinvaBqKuARNHc46D7jvyYN%2Bol71t%2BEgC%2F8S%2FUtBFNuCPCkFKG0kqlIsCRJgqOwM12ePr%2FoS%2F0hOaBR3ZlFbQ%2BzYk6aiK4taz88Mm68e%2Bv7rlGwD7OTm7jXZzMEXoArmIGLrc9VWxSzEw0OXHuC1VP9xZnHffkjkkRpXyCOmhA8glAN33Ry9fF%2F5glHHwqA%2B8LmarnWJvGRJy8DstytsvjiwsWkdBb2QZ6ucI5nR3LI4SWKApp50G%2BUm09TWVcZwtyCK1RS7%2BFzjq%2BUpe7gV23OBXmuBAEIuZL14hGj%2BMPn2y74GOqUBG2Pf7LgovK3EEnUwMZTnZXK4JHy3tJ8hxazQI4VD8uBqQ%2FfvsTM9WLDcuqz1zubbaGjSgBTbV23NS0lArxOBEMF%2FPGlrRLHc%2FD65c5iP5T%2F786w0t37zs5vwb%2FxDoBvOujgLzMeehIwmwL%2FI7W9x0hWOuxJ2%2FJtOWaiucJPDEN%2F0mCw8TX24amH7VHQwlPjOD0LJXmPTAK9uS8Jem6w7TyWJahRz&X-Amz-Signature=20b0ec2f252bceaf09a8879bddb22d466e61d77e222d06578dee59863d100173&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
