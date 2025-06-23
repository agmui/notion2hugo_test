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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJN6DJV%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T150946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQC2VTu7gBJi0vWoqszv9Lj4HF61ZW4uD8EGf3lx0t6KoQIhAMslLZTv9ODprkYBEuFORUFp6L670GWhizMN8ky4eLOEKv8DCBQQABoMNjM3NDIzMTgzODA1IgxVW1IXlstE%2BmsVib8q3AP1vX3t%2Fal3J%2FbqEANKwAZs1TKK3xfg6FT6Q05V5nabXjDIxsiZ6c327vlz1Pf6pLXWiFsT%2BHlEUOzVLfkILskQKeS%2FZHYW9jvc6OG105E4ED%2FCJF1Qfh8SIye3kokXuppP1QlqsG7Ef1klSlmsT5BCTohnPElRTS9P6bKDhCwIwcXNaWZScdK97ntDK2Jstz%2FrjWgBQ%2FhJU%2BXUF6gc%2FSsFj9miqKFLjyu7%2BP2uPc093Pg5fARxk%2F5KewQKCrK0HrUFZLR1LUQbDhBlVTv2O8uMeYa9CvqJE4KjSBvcbJxx64dD8kXnqmLU00zBMW%2FyhzJmBok89QPD6Oka33jc9RSBDHhs%2BOFO2KEj06yTD2zms86jAV94sDMSDqC6f0YufQJR1iEumNxAFbUiYIDei78grnotJaNrXJp4yDlorPRRiQVZHBZnsO2BwkcaqxMaQRDZJu3gvMiwKDRlf2zvtUdflcSDMR64XwPG4hU%2BOcy7jZsaccIcsr9YzmYrwtRqrNoLZu1gbnJah1Qpszp5YK4clWiqquCNY6JOPChsPhSQ7GzCUcue8Gx2osfPsB9N06D6nibPIoK02L4JpnYAwTwA%2FFTG6MRKRlCT7KTteGi71Xr0PYp%2BV6nr03fl%2BTDH8%2BTCBjqkAdin6IiSO2iyzatuNzSRhRmS3Yqy1Hgpmw3wW2CzaRWM%2BdL8CBloERlNqqzT1VsaXZcYB6Lk3ZX%2F2RnW6%2Buagg5JWbWdZTWL1Op6LT9UwD2ZQKLw1n1kuw2R5cqBquarp1Z4foE7IvdKBAzy7vDo21%2Fqcg2Uizi1SjZtyGi7PcuXkNm8PY8wbudaM34zMNVXAXPY3YaqigXnRhYhUvmFbFov6Ujj&X-Amz-Signature=2429983ced5fe4ea5d35dce463335938094c93d70fcca53be1ee02a1510f2ae7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
