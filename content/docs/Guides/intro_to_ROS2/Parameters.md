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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5R7UUIJ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T061429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCxGFIVuBQNzP0b1ypISgjCXX9ExmxKIVKSOY24uEjoSAIgJCZzrZLBw5aG89KK8xgVi8zVg750Au0ofLAj5m0BhSUqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkqMg8B0N3kD%2FkyoSrcA9GmaKbLkTEbxXwHzmbl3Qt9%2BCy%2FbjShacBFxM6Jnp4Mdz2RCxvydAT9CB8yYYBpYshXiV673kziZqQWyiGxmSkck4QNzQZd1aR0cTmFx%2B5sFFHAmnVrQNcZs2ZBOEzCl44JKbCfWkpv7SgkAbkV%2FU0al7wsChgnrD8mVuwcqVj%2B3CNfSCIaooP5Q8H4zYxiA%2F9mgGJQOhfk99kVgytAZB5GpYXmTPRnZ3ic3JObAXZ5rMOP%2FfGClheTAUkG07wYbSuOYPAszNFEkqiY99r%2B%2FYPFqK4fyrmgwN11D5CJ6d0UJOxKRmFjP332R69Jzd1sBX58lltTGk7MjZV0uz0nl7bOjv1CWQa%2FP%2FGs%2F7WRmCtrb2jHH40XLAHVKh4UkBguOv6OX2U9Y4LpQI4zMshIvmkR%2FIpPCkf4159BcohRvGj%2Fhvb0DC%2FnFS4JqBs13fj%2BNqssBPTzA5NGGioVggzrzNZ4rA4Wm%2Fw4JsTdAmnAxCVOV75vLPvTEoajKFNUUEdGviHD6d61yKTo2zM%2BBmu%2FCqqDOmItaZnAIF22Rxtlh%2B0SX9TcGr3EwZbVzpo87xl0MTSu1vkYBvYGi8By5o1aBElpC9CY4Fvo9h8fHNCvijBG0MYKKrIKYzf15BKVMP6v48IGOqUBeagzRqyx8aafEPt5YsGbbeOxkpz42q%2FyQscAupQUuEP9oz7JTUxUaBOXqJsg72G2wK7oq9yvaYFRetsbAsXf2PXz9emmRselfyo1cgKVvKwxyhluiauu3FcLREl90pyX6zIobqRpEa%2B4JVGIm3yhW5e%2Bzqj5uRd0lmJjy4D4EZkvGuDf3oTaBWsnbetm%2BBfKpNBgKVzDHf2Mh7meIDLylRGoovY6&X-Amz-Signature=756af097fe47815e3851e8cc9830a3ddee0dfc25f9735eeaa96c8aeb20c7bb48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
