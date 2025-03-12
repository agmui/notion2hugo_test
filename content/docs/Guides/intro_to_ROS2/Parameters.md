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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EKYH6HX%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIH7gKKAT0INjTkcemWmWRRb4zO2NOXvnNmZC1lMVOQXaAiAFAQbLjkK6nvwxbZc7BHzypgbawqjpnHFPCZD5lFWUYCqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFbjHC1%2FWZenWJyRDKtwD%2FGCwMo6we8%2BAXjQzTCvO%2FmkIHgVmGmcVgk6wxidTDVWn%2FW0rD%2BK5eTPb7nG%2Fp7uZQEO6xHtkU1fecAQcHQ1UxlYtXbx26G17rgNQ6kGeGolwU5J%2BZ5vPdG4%2B1XyjzbSx2E50hoKiGvDMV%2FXMxDgVcJ2n21LsQVqHAN7EVzCVq4gbNtZ4RLQCl%2FyqjLq%2FISta3BfqiILhn3AI5fONLETfNaJAHFgJCbX3fme4lJapNkFKBBAujBj%2FI%2FWWSxmGF3UvZO0ke582qLJImb80C9pLNUBCoCEGsD1uWJKDptpmHEEOqVPfKmiHUlbGZBmeHg0FKQg5mTg%2FqJkQlfzmjvqfMthFJFZRZ3jalxqpet7%2F4PIkehwm31DI7g2uFmMr9Efq%2F4y25BAt2U99oci20h7SRotGrrZZKkKdxBMBm0H5B%2BwQ2LvMOFs0DcXbqrZco9V5hBl8279MMCivLaErFWGKkTgqhKJdfILxmSDQBMTYdlkG7yaowmgGb0pFB2uRzLU3Q8zP%2F31%2F3mMbiJfiHeNiNh4zv3E3b%2BQ6ATzAYM5jrsqur%2BUS4cT3JntsthfCvGocd3N57vd%2BfVfAx5WrSorc7yI5%2BVbauGkGsC3noJQfj5g0ADH7QIs47yHAZEYwuNrEvgY6pgE7emHcBbrkKY8WHrU4pKG5R7XoNPwtRf1gXss%2FR7pkDb6eLOCaS94ZKKNszdOH%2B0rHdjdHUxZ3mGj4e8kXjCk2FzUgA7OtywqoJvTdq4xX3%2BZzSqxdpSTjK94ZtmBvGtZdhKD7ETafqS5uVIziXFTNJmDfUK2NnFzoK3MpMrnr0X28pW22KSiSD2mjnMD1xtSSXPmxo14YFPJacrAo9BTH8AqPL230&X-Amz-Signature=1b625fcc42b3e67d51cb90f48a734513dcbb52ddb9e5959c91378a579398d199&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
