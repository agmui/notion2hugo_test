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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSPZQUUY%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqi8jKLtYPVOAehzDGtAsf9%2BhkI1ZktNIZcj%2FOEgJdqAIgQVA5jl3PbpUqQQ60VG%2BizcMwfpLZFaqjhxNOJ%2Fm223UqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFX6IyjaGImJBaw47yrcA1kEhfoxsmYlYR5Nqyt0yTxaKduDFhaV7UhI65SKkdmNpJM%2BwxNB84NpyyGp%2B1tFsr5VlqdOgiZBT%2Bk1VMOb3oPzchPSiQlr1ni0q1NgrgnPIyKhgqogK4qgLWN%2BPidW8FiXRPU64RSKxHx5DKHoZzOMnuYskg2bprbpwIiKArAmrBsLx%2F%2BH2YpVq%2FkrQbV6jaiCBZ3zDiQD96RH2owUtIqm1H%2BQu%2Bw5ng6DCYMeDvFPe9KjVrcEYboy39pivMSPBMcoRjzUKpG5IW73DpHU49Lj4jnwaRa0t2yfjycNknMJ3h7lgjYT5FfbKn%2FnbvQ7sgKWDWmaeyAy6bwysK6AOmPMledwEQWRuIpUQn%2Bz1yABxaY5vY1NVy9fRGQt6ECFArfx3Jh1%2Fh9UIeHNuZMrKmq7jM%2FNKPUNco%2FcIVBAkzMHPuMh5KFvxg3hz0XdS2dhYvF5c%2FFvRy2OodKmJoCDcEvyzHHrFN6g4AWbZRt1rtJpA7FqxGVXZLKqZ6Qviiwyv3Z6E4fox351naKcw8nh0LpOFTlmjCXnedm6ubIaDB5L1BjvWio8qGilzI8ytC7e2rz5d0rkFG4JYDF%2FXS14jfVEwHSw9mQceKAJ68flq8Au%2F9Wc1qxqL6Eapm%2FNMM7kq70GOqUBTUnMVzvoT0xFZd93YdvrORXlaitCgdvWfOA3KeuLjWX8tHJf6WarA5Q5S0a8aYdZ2cBf88zgFJMj6S5UW5DiZ9zcE6wNZLo3ANP2DUT64ZH51uHp0%2BO1iK%2BZRYCUrf50IxZyGIhM6fEJLausRibQMLtGKbqfvQ6ga6CZabYNM6XnzNIg3svK4Ys%2Fv%2B4SZTQcnvjp2p7HgOd4y8ElWLn5pC5%2BVBkV&X-Amz-Signature=189cab7fcdbea527a992eabef8fe7faf37c331a3e052fc0f9f9a384f8fd6de54&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
