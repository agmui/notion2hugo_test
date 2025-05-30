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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBT4FVN3%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T121539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHYBrPb54FITjdd2bFRDnWHTNg1Xs2VBxI2hk5UwJ1fHAiEA%2FVRJXkjEt%2F0Xxwj%2Bzg%2Bts9J9oT%2FFrDl8csBEEFqDVDIqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgSj2X556BDvWJlaCrcA7Bv6K1mpDSTi5MVFZJZyZRE9ltRfha8Twdh9EWlw%2FYhTLFKbX2BslsRyNROmA4aVon2r5rZbAMnGLuYvSzQA0ievZV%2BwE04hmBR6Kiqw%2BBwk1o9KTyWLZsLAImyh0vz4gMxO0iyL0Z%2FIwBB3F4LY3NbCIwbk2WlmcdheXiBEvaD9t3P66v%2BiaLYWMB2CjtRm8Ymecmov0zs60q7bYdpad3q1RZgz4%2FcjRqQuFN3KXpUcRBRzdDzKcOZle%2FG6z%2BEe7oFAQU%2FqtiAUH5jqOcg%2BnpsZi4bfhhBIwwkSL%2BSVMiJh40z%2FFKPrgYYVO46lE4GsMxaalhSEqoUmnyIrXsbteHfUg%2FHcoXAbC2OErw7Z6AfMwwEDfqxOaH%2Fv0GcVpJLAH0Kl03pd3dfuKpFL0rh0DKJv8nIr2BEzBlzWaDADrvVyqoGZt8Yy6l1J8mcS5WdO0KxpMlpmx6rvM9dbp1y94bkP8cOF%2BaThuqFNad1pqvi3SOV66Ub90Xb4rtMuOVSPHOHHhJrcjuPvjBo1Lk%2BC5FcIpRt3ysMLAmu5Ry7kUGfFF9GEQPDUsw1M23wJX8idTfn6EJ%2ButqRL%2Fl4ubAWbenut1SG8Vnc%2B6fO45jtUyO5tCM8A3KLOtGM2UJ2MN%2BO5sEGOqUBp43JZR99iWVBEajUo0QL9pHK1v%2BTYbFgXsOTC8ftuSOWfUMqRYNr0IxGkQMNlpr%2FLKLBPP%2BcnQB7oUtRC4MBJRT4MwBmW0nv5oN9zY%2BBlf3gTHAu2rLfFhjOQg5CRq3bQ%2BVdw1431WVORDFR6XkET%2Fbgpl1Ri9HoDgdlPDs5EjwZEyPALupX0CEutzFDweUAaroeYBjoQI5eSpxLIgiMdrrdw3z8&X-Amz-Signature=74a32042b1f92c80aac5d8f6e8e780aa15ea07fab1970a3fe22c4f08fd97aa5e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
