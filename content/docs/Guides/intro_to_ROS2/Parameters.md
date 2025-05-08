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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CCQL2VP%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T210802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIByJm0FuDTt4%2FnnT16Rb7JvB9bKPI9qleavAga6jlC6xAiEArwEEqkl52IxL%2FTxlIhPbNn8JUgK3RCHpKSUDBRXZIDcq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDJWPd2xb9ctsyR41ircAzFiu1HGmUU2t7WqcwfLZnxaTyga%2Bg%2BPwmuyX0hGJuEF0%2BtKcFBTNQ1D46oS81618BhVjHHYP6kwMYfgOFLIY%2F6vmRdTa%2Bg4qrNKfCQP6Y1gYsT9UL6WFTCy3yU19wJra10KJLM9HDTIc%2BJfhvv71LFNrh5hmboL706eUccNbRyC6MlgDbi6yjFK7RJICpveoFyRTsZo1heI5yfcsWJh1xYR%2FCy%2BFIA04PvsQ5jXidzvWt3Secp76dwTh4lLuUYttzL7gj8BMZq0FpYO7W9dEO4VOSYkD4ncKsOpSIbBJJ%2FKOprwEX338a7cDXjxBvpPD9%2FCc%2BQpvvG17K2YhVQg1zb1ZGNq11hWSjg30v3mZoaK32Smkh5dRozweRseFRhCX3wP01Vx9u3sGhj3M2B4elgxIWw17hkFpr5aU7gsnHiP6optt2Ov5SBcfvJDjg%2FyMTLbsGbv5TYGy%2FbREmbMS%2BdyQOGa9i8iX5S2vNwFAUKY4bQujUde14FZAwxITItGfgr6L5sVRJNR5N6jwqIGyOsvNIVfY2wsHq5Rc3ZqUHxlkSIb%2FUxT%2FAkllH629Tvw3JmQIHkFnoNfG8OADOXnvWQx4TwP4fgsZM0hO7vOyC9AojKSM9Ff8QzV7YQYMMyx9MAGOqUBZdmjTriZeGK%2BapiRubIQ5ytearD0VaC0O1JJmOLXIE7DUfCHb6H0dnBb%2FhHQXHqS08p7rdUQXvlffCIPcQWq%2BQJ%2BqsTuYZlY2WcR8ZCuukK90NGEZszbf38ek7amsTuoR%2BWEFdV3zWK9LKdC6a6%2BBA2FqCloRK7rTH10XAd%2Bkbo0ymdPIg7fKKZSqs%2FJ9aTdvzapi6%2Bq1KnbqpVBd2l1cJJdWfGf&X-Amz-Signature=18ebcf2b9ae7d5ee635b6c65b98e8a70f0ee9419e5e8077e41422757d9a32d70&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
