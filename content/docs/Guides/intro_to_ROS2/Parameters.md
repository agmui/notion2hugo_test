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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQCQAXSF%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T140751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZa2QXHxKkRFen4sZx%2FqB0%2FtZZng6IetKpS4AYvGNUMgIgHKspA7l5EhAg5FoVc%2F%2BzVpFRgw7KAbWs0dSOe92wS9YqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE8YN3QDOSA1iLQU4SrcA77Y7LhwQHZz2hhaxph9vY2M4dGqLbCtWc2lpQEDAo7LG1se7b7QZ81PRcqJD3gYvCaqfjb8r9OBax%2BGNV3yHXlb6mubFwqR7WU6BMzmDoGfipYyFyw6pnjlTh%2FEpZRP9nxS9eWJiR9OjpJ26gvmf1GpjQEcGwAGybo%2FXZ%2BUVdL6Do5RQqlJsyDdadQQIYzGMkfinApeS30rBOO%2Fzip5uwDuIXRbrdtlLOS7ba2Dc5YJbjT8P39yRv1oRixPs5OladDBZYr2rWSS%2BtygT0lsJwc5V%2FyciIxBuZlK7oiYaUwqcXReh40p1BPZXZWdWEuSn2M%2BPxiM4k5q%2FcOOS2zeDVsLw6jtc1nPeK8W%2BN9T%2B7xGVgS6z6SAZsjkl5XRoYK12%2Fsj8xYWsORSV9bgPQ2Q5aC%2Fh1lfKUMKXnjUJ8PM3Ym5dVBi1FrviVl2l6nI1wA6%2FOKzdVtMMyraz7DDIbMyKI8ziaZxoCQyW48Dgtx%2BjArDI2sJD%2B5uIfLoybA7k3JJm0GvMaJ2rI1AeUBUy%2BoDBKUPR0gqwqrJRpHVCUPn4SWR0jhIfWU9exW3PzVLipB%2BDjFpP%2FgOrYgq4OA%2B8e7zW%2Bj74K7SDkFAWNLiRUvSrG0jjmPqwFjNtvYQYZRAMJyEqL0GOqUBLeavEL3ZJunPxiz0rLN7lwnWobbhOWUdrkafyWX3EAOd0XTRzkQo3oqrjGr0zriY%2Bxe4H7zWc2vkL4ipfa59dTY6G3Qf7mMdClDIS7bwq1R0yCrWsQkYhuVOr5UTKkUbiESgHF2gIaa0%2BKuk0dGwfmHg%2FySCJza1fJUQPRK7mw53rk%2Fk4QRZCevJ%2B5YK7xWdbdoXh%2B1mD%2FSfpxrHDVdo6XU5ZNQX&X-Amz-Signature=9b9e0f2844e14c6132f89b423d96783f8fba5e65f8acc268a9da3a958fb3d8ab&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
