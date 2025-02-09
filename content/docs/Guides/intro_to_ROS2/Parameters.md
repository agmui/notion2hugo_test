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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SKOKKR3%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T060940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICllgTdt84GmRX6llrVEdcuRLcUsHzw0GRKXTuKanwedAiAJ%2FQnf83wHFD9Nay9hY64Jr2UuLVM7kpmZbj4m3O%2BL7yqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5agWBebm6aeK7r2DKtwDMrSPmmLxRxZf7nFPVjNdKEu%2Fm6%2FDs2C33d8NKTaPWYe8UcaACMOpJlDMi4xpgZl8DkhUAy62j9iiaIBKmmzN8xFF0tLIHfF3WpJhRt58hpxhWxTAi6pFt6RVK46gq4MdsDhrv%2BBzxJfN7npQ7O3DhbZUd%2B9DtqiIrFJn%2B7592j9TQAjHlBZ1ETUrfgKyplGn6LAzmW%2Bjrsuqw5l02qK2BnsmnEvOsHy3i6kXkepoiJ0EaTXL6yEeoNEEs26G5Fw6TZYWxclVO9fYxxepWaGgDfZqduw%2B3fvXC3LzvfwQelBZfv1PA8wvpEIdk15lZojqKPPmwsBRWPnsV4%2BwH367PPKZ04A%2FhEKi1ikcpZvPqFjnhhS9gE3i10U8QktYzbS%2B9wVeSK%2BtsRz5BCYlR8XeScVUjXUXESbyyV%2BcrK6v8ZwhhBsWvT96147sheAvJb6867sqHHnJnZRIfaMF%2FlimTj4eEHeJLZTnjrOgWePW6vh6M2OPqYmxO35icL5ZvwlUS4k4h%2B6jZzBdYGT11Z3jHqgJrm1M7LmqOAzbmEmUsIQdRgcdLS7gSOS%2F8GtDu9uM%2BrNDfit3DNwd%2FvlVG9gTIInxmX4hE3Fk0sM0bJY%2FFsFWlqF7Qb1eUo1twLUw1b6gvQY6pgHJ2g1Lc3hkOodCA1CLfXphxqArB9V5oxXx5isb3Z6W1Imx4ELoFBB3XlCsimpspVHUEt1DqAxzwUE2bKlV1rO75kIHgKR2v0AN1%2BBBL0y8cBwl1xkiKVbZPD%2B5kUGoUbAkBk%2F6RDHMEEobPYD%2BddFFBLlckrEavb1HAJRLFFE%2Fo7YoGXUxF1649VwGjOulZT%2BcyEbKxFurf6HPBgTtqO7AxLQCM0uD&X-Amz-Signature=8450db88d80b93ed3efdc9bf7ca794f9ed665477f444239d8695097c98af4c0b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
