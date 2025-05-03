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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA7IXKB2%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIANMh3t0UCU2Agx1RM6ZzukONerg6I%2FLgAxskWyd70B5AiBGDEeaAnbj0o7zHbbxqrxzxFgEuEB7XyzB19fY5WU4WCqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYFWhmDBB%2B9u3BIgxKtwDW3PRIxAfJwOBSgBIhMTLBP96VkzNtkwPzwWhYz2tHjiJlRz6wgKQF%2FrwUi7o9PX7KRgPQvruQAJEUo%2Fr2DIV1oWdJ%2FprcS%2BtRYFdbEb2JlQyLq6plcvnDzG3mWS1TviuAVZQ49x9lKo7WgMJ%2BjJrtDGiyphgrHRyJUa45GSUWeA1WoJF7IxJSydgpCPlNdz7jh8lqGuToxnr4lvtyP%2Bo%2BrffFAqqajdK6Cl3VwHLlmp1PPr%2BvObLjohD%2BGhA5fji1YDGKZWP7ZIYKg2RWzikU9Cd856k%2BKOSDLBgG7VSHa6%2BXOUdixJnc9Xzdxhpe%2BW3tyaiGAn4rUvmxSX77e%2BrBfwmeLsr2FU6UAgxO2oHGZHvu2EkEkt%2BfsScq8xS9tCbFohIWu2f9BXHt%2BEBCXc8GFth3M2iqbsDlc%2Bm78wMZn4kLl4sXcFUBMI5oZXvVYyxNZqUYIU6Bz%2FJd7%2BSBT%2FEQBaoQYsvyBRbzb7a%2FWwch5QfqEv8zIUqOegbq4t0Mn4oZmcgwTmoyrgpymy8o8RHbxeSL4ieNwNeGBIp6ZMxZqIs2SbKY0yOgpW2OO%2FE4rLz2H11%2B%2BnJv%2FIWnJ9MckdgFnwYRGn%2Bn3DXxPFYhUKkvYFLqVVZRt9dquI7OgswlMLZwAY6pgEfbt3376Ysw8HtdM0tkWK5KIsl9e5t9oj0Yl%2F166%2BROcHChlsqsJdOL6bg%2BNITROrbo4CBxnGcbPgKWihhiVlxCeH%2BSSz6NS%2BfnnwUG1NRhKcGpIFKQwzIy4JFRVxycIv3Z9kp4b1T48qaHIVldMU7W1YhKNZ76PXse82LIgFeb3lBXvTV20zVMTRg%2Fcq06kA4UCe08%2Bgzhe4WLLN9y7aTXhH%2FlEcY&X-Amz-Signature=f4822ddcf9df735c6cb7fbf1bc8c7a1e5416b12ecea27c865d0c94c5396de419&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
