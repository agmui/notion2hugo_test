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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMQOIEVT%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T070736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDtZTZD3g%2FopJg7GES8HhLNKnqszndpLMrwUpoohJujVgIhAPlvkZRq4FxT2nDMtqYBRbUMhtDL3Xq7YGqdjLMqJ7KVKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfFXix6T7WLguvzO0q3ANFHjEgFbzT9cZ2U%2FGiXjprElJy4GPPVEBs3jLBHE%2FOvi8hwUQe6%2FX1n8ojO2I7TwQhASTdLZ50YsJdWWnwrx78UFiBR53w%2Fk4J1mibuzo8dF9po5pGY3DFI49Lhi9of7YtXF0vSHl8CcB497pINVjBK1FzD7dTCZkM9nDPmsMWAuKM99OrLVi586g3UmErn65wOAPM6g%2B2gqrtmmOgVBKlaRvug69Bohs%2BfVdwHnDmE%2FTFzXOmCAIuOzA1lg3esEMXGZky%2FGL%2Bwdgz2nief9bi64QC7ZcI8HMbFPn1q9JRMpCHsvN4doooUBWq2Bzjs%2FrvSqPSNEXCGuAskGicMQ8hTGO2ldnV44o%2FYr%2B6huilI2D%2BNza2SeS3qnWNJx1s8nEcKDOJ3TS1O5SNMaD38%2BZa027f3aDtGznaFj9RzcEV5oDbAXCkTzBJYGNd8A4KvpsJZzkdAwTH57fJf8xjoxjDR3NRnqf5U%2BkZ5MF%2Fa9Ra3VfZMAugnk0fx%2B9u0TfvDx0XBi8j%2BLe4zFBmzOMGFIInGAW0ZrbA3%2BeQLoXkQxkMqbuYuW8vednF3A%2BLqNKxOKgf%2F3kUGoy9KDLX%2FJIHvFFto0kRsTc3xsoRIkJaa5kt0jcaAOmttNo3a%2Fh4VzDxkee8BjqkAZMBUQvULW6wj2fFQyOW04jaIBzUUjIXUAg1IR%2BvV5eVpR%2FF%2FpveRJ61tHnlJGyJ7dFsOYjJaFjh1L2RqMHgOrqjtEJjYykmb%2BuJaqnj9QHEpI5Ykf8iQ2gghEowfdE610ai30zEvjYtqaWzBRQi1AczY19eno%2FTI2BHHEl2GzhEG3rZKl2zTgy%2FqvnCajsYoM8J5jHzhAslUqKnNuJM0SzXgc1T&X-Amz-Signature=6fa20865324a69f998e704d272ea655199103ea123d8615bc0d84e2337158290&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
