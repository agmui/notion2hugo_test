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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YP5B4IT%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T131702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDPfz%2BRyerAP%2B9fOEKRr9uJwyJ65UZTPgK8Ooe8qiqBVwIhAOPCW5edFtDAckbv9sPTyKF40r13FFtoY35HDgqKIC4lKv8DCEYQABoMNjM3NDIzMTgzODA1Igz2xcmgkxmHjSxonpcq3APq9y%2BV%2FCOv%2BpkI1jUdxitVcA%2FmKHkZEwy2GVKKXJPybBtt746uoWtHBAU7Qkb2Mx2NIfW2MsM1PRmFelikgc87oMfzI05b3cDhsBtn%2F0beUpHwclTP%2BSdvrzkRLfkLiudQF7CNFoJcfr4T4F83Wn%2BN0Lh4mBHLEjZ7%2BM7tJbY6E4S95%2By1sksEAr%2BrCD%2BJxk%2F%2Bn5RLcqFL6ouueDber%2F%2FNWUJz4ojzdNh0pyNdq4HyxkrRTsC2deNqjLT%2FHCMMdeqOB9Thu8GD3%2B%2FqkYb5wUeuViLmGMc1mi2UWDPqDZHzmwhIpZ5rBl%2F4r2FYsBgJHmVhDc9ZRRd2KlL4T%2F0OncrzgsR7yUDwsIfAnArqaPK5AQckOEAHZvEq7HkAfvcRzjquFly31ylM43f6m2yFFQZU%2B%2BrjvV8d%2F8hxQEgStmmvmnzWLhcvkvmlYom34vqCC3K19EytplxBd%2FZrecvKGtEx55zmiTULFjC51M2SKuGT7Bc4Yb6kxmjqmbpYHAIZJAAjLQ67vHnBz4HCdr5NJESrkfJtpnHkbp2EWT22q2qsUDP5jWahWDUV7JAsChvSv453TkSwv%2BOxAwvGNpp%2B4d9il410Ojh6kesVFchC6jAVwR1QEILn9sZagv3KazDO%2Bfa9BjqkARDhUTypDlcDurtRQtkJGmtGpVbZBCfDyX93RqkfDNupjBCDBPODHEH%2BtWbOgMaUHAGXS0ZGUL5yV9ajEWVChiQeR5OlSocsbCQ6pssZ1oZnMx2g7p0UzYO0fhniVrhqw4JlSPttgtNoy1HrXsLLM4SzCUqWndFi6U%2FpdqNmbRrav0dvWelmXC7rOnXsWUuuCC6DaZndWXrOJGdat8cS5nmrrS%2Bl&X-Amz-Signature=913099d573385906e3f398aca6202019c0661586dedd2d0ae5e3452fa291262d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
