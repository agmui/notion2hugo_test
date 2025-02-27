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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U66BG7FC%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T050829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQCYGNqTKL9MY3EmbbRO0d%2BNNFSvjcGwrSRuR6sVPb5DIgIhAJ%2FgpR6c9yPOubnkUXizYgRwF%2FBJ9XCKT1uNUwNNMl07Kv8DCG0QABoMNjM3NDIzMTgzODA1Igx%2B%2BcdSGiD5MTtKhbkq3AMpRHL6xWZMHw%2FtYpvBCBN1R11pfbxpPTSJez7EVumYln3%2FPlI0r2kqobrTIMcVMpsuxRx4atVMthRHs0A%2FhL1WsXfLV2abkwxdxcNM9UXGJ%2FrhEj5%2Bxb3D%2FaZiBA0oqUZOj%2BGXQdcrFGQ0ZNu11g52CsCOGYIEBqVEUfy6U09NgPpwZg4ZiiTi%2F0I9jjxvyQc6PqQ%2B4IKuwO0n7llVEo49UYTl8QOuoTtFt5tRnIYt1h3ma4lMop4lIc6YDyJu0CNyj0JR2JkmeqYGdOzxZ%2BoIdq%2BMHHomigWorhf1zIS0V7moh%2FSta%2FW5n4GMx7i6J3yUZaID%2Bno0%2F%2B8Jqp%2BQRARJs0DgJrbGkkum4BcnOZC4l05UP4dhozsUQfiDZAcoqXzRDMeCaZQlAJBgL6e2m5KTK7NS6pEMtp%2FRND8ctKRS4LPyDY6ptBtHqtkDYl%2F3Cwde0C5la%2BQjw0IWLPg09Hh%2BsqW3FyNW3C9awzmwhcDpvYZY2ZHQKt5LB%2FC4PHcf2JiA7XmIGjLIJPO5vnSLsTC9He4AQ1EWfcQGKdT864t5aRsPgnmH%2FOWRhy2brr3AWWZsQqzACeqdcjbmyOdxGu34nCZwlx%2BogNeRR6t9bxsMtyDrnn5TSx%2BmgS%2FKTDC70P%2B9BjqkAfvQFznWE%2Boat0GtuGj%2Bp%2By8z5GAIr6xaA2bPnE79vyGHgvwhsW4NDkh5%2F5J4VPP%2BPRHnzgF5%2FN9ppruh1OQXjVpX%2FDvJk81%2BLPUTgV44ikFGadTBfCbi5dirlE7M9BbmvqprLhY9ILrGmWpWbNtqV%2FWL3nEpTnpRrxfJKiTOUTnAG7kQ6OWcB8a9zSAEHhZ%2BZNsXORetSpOsRGL2iNpZBDsafhR&X-Amz-Signature=2bdb2c3d7ecef1fa32a1ac3e070ef39b7449a1a3b08f9740ddea2ec9a4c7902c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
