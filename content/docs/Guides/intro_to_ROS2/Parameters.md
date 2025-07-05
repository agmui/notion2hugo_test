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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHLSZNU5%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T033824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIC6E%2BQH2hftRpwZW%2BLn32RicuznlE%2BZjrpzkzUqsjxOyAiEAwgKcKIidHQNTKHaPA%2FRxj1RoH%2BW%2Bx3sb6o8SKEG81TMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDOKUlnXp7EYEEFSL%2FircA1bbyouCY0W%2Bds9U1HioBmRWfj%2FV%2B%2FZgQmYwGU1J0%2Fs%2ByjsjKuNL4UoQi62PPrxyY53vUiygwmrijpXOcx%2FuXAKm7fs6MOCuGasbjeHmrP9ZrHTMmAt3GNa29KwVJATIrQ7jOntbf2Yl7IxSzMctLTkcihq3eYN6q73zjB6OYi%2FFSwdOkZ6tBzYRXBd5UQCFUCQNDpXvfxeKyvXjRJl2e2JMbKmO4TSYiltr13%2BvGYwBURfA0AcZRmtJdjiP0KleY4isHAutzntRaRNX2ee2NbLUWx5M5P%2FLCbQBGgz%2BieUeRQKVYtRi0prL3gCKv9KK4xF%2BQRN2Ml%2Fdq6uFjWRbjDH667zxLSc0JkRu56SVJaDtoNJ9dFYA7Cc2UlwPtFOAp0i8poLoJIHUce56507%2Bes1rmG6b4z3uCHPEd9UvVxX%2Bv3yVDM8OLM%2F1TtDUy71b5Txu6K8yKoV8s9%2FnwyJYvC2Wg%2FqXgw0xjwBEgQ0y6hOjBL3%2F7MjsSaTIwOaCCzfnt8%2FAfVJyWjHlkheepY30OE2T%2BZByBmxLukgy1Gdkru3OsoDhZN2KEDeVILuk%2FL1WAjy%2FiL3zaKnIl0y%2Fnnyd9RBZ4z03btHQs7jEN9ufqzbm6mG48CC%2Bfokrw6J5MN2CosMGOqUBvRKeZ%2Bwhhmv0bnmwDd4%2FrJ9rlNH%2FRnnMOPkorjKBqEXs9AueHLTKg8XgxZhohOjt3jJc6UOGgl7A65puDT%2BhsqLUIe66uHOfdHCTpjvmxAAFcpoY0yUrpk7I6WKX5OFIDbktef1XyEB6G1USg7NfwLrjxkJTyMcDfEtBpgPf20aniwYUxCsO7j534T5OPx3eDiLJbHCpTonzM2gT45j00DEJnWn8&X-Amz-Signature=cbc637d03a493c86e1739186d9ef140d73c8593c506bf18644916f606171c789&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
