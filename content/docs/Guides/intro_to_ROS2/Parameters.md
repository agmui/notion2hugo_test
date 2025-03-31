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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STVXDYQD%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T181122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCccS4W9MADUht8KnOfDq4yfesRgujJBA0mvcXSJLnmOwIhAIaNKWVazl6FAqHaS6I9FtMpT%2BCMfiNOMCt75kNSxwv2KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FlV4dcV5xXjTPmN0q3AOqt27wRpJDHgjnuIjQLiZBzJNpa8Kulv9WyyfWKglzb4QiQBW276Ty9iws9IT7G7k4szD4cq6Gr6XTv6%2BZ336f%2BLro2Y17hiI%2FVasvHGo5B1GfJV3eIrAAos8ETtRupRxT5%2FUx7Whj2Gt8Sj9lBfnGnHy27oQv1hhUFs0HAxVqzjeyDDwcuBzeCwbSB1v2j6l3veN1W6ByJzQQisuHrUX%2BXIegIgsZt4a2AHoQAweXbZqvcibWyRth1J%2B%2Fb7tuQzK2RCXDwrbfE3jwUEYEOJ1LwWndaOLJFC1wne%2FWG2sdAcIPz5%2Fklbca66TVwcMvHuuDaPKgcZp%2FXBgA8hmyoqo%2FKm9YJ%2BAgMK0xhnFxsmKzdImwnYjGIFGJRDUx%2BB9%2FiPebShrD0D%2FVx%2BInkVHFyXcsOW%2FIsGyZC1SQXfouplPZ6Gn7UDb266AIB1qbRp6kTYBnnAYfcFmzdy%2FU1BmBSTIFYfAspg8RPNADniCG3YFXckX7wHlWFty01KkKvw2M1acHnt0bjCftwHyqtP7FEYG%2Bbij34VyhpcFMii%2FqTF7tHocZCT92lTZPpmk77BeyVYperRqpidi2n0m4khGEhcZFsALKGvXDtwdL%2BMIQpjN2gCMUGt5BsdvqovxX4TCBnau%2FBjqkAT3%2BJnLaRyXjIdmqzy4cmUOVqz5cQcF53HIZeCck8W1ua1xgGYQrJ12cZs7vt0ytK4RohpYd11A515n0HKyxKKW31ZbpeP3ZNcXpf13lwEPF0ckUdL34BARYBscyHHh1zogJDOc6zeMI7QqyDb1zpHWBdUG7IKa0O%2FXIwv%2Bqqu5RniTB8FSz%2F31TifqZ4yoy4V2dHd2kNd992R%2FHtdzsQ%2FQe1780&X-Amz-Signature=a78f8de29d888e12bc3766f40832f0fcb55068b6c48f9b65653661a0787ae52c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
