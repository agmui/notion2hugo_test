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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPEBBO2J%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T091723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvisTQwf6eut%2BE7ymYn1pnxgGI0rreUtn3S9ifbWcelAIhANGAu49tG8Is8KWeApTEjAgkH%2BlP8EUyrca5zdn1E4R3KogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxt6GHCGm%2FUxeXYsW8q3APYfu3hk4rSwEz6UlXgCKjm0BtIljXl0ik3xRf4EkC%2B%2BeJu9WqP%2FirlM4Omrwg8y9BkLYzCWf4LPpLWOZYWwsuJLyams7GhmDPsSw%2BkdJYzqxkTjH%2BFI7pKqDbdJlM38BccqiuCU9RLJsiaHe1EnsX16lTr5lZrS9IpLmkpIC6E307srbd7gJVnhgIgC%2B4luVy%2FIFKkRQEccCPeFeN%2F3PruXq4fJ22MAdVu%2FrKCVg3vzfHpBFcjxCSzsOcK2UpoiQoDLn0VM8eaOdtFByQ3L%2BAV8nyoEJ30UXx9vS2zz5GMCJHzXa%2FHAKXKifNUTss6a8kvwNwtreU8NlqV7llH%2BqZWtq2ESgjnhx8XPq99Llca7AhFLWA%2F6%2B7uFhzmrhXCWwsj5Q1%2BFSC7yMp6mLKkrhVxaHN79NrmAhNF1Mb4TUloiB07nkaWKgt3Xmox2rF%2B9GRJMx8JD9qzZZdcueUWv1Umuras2sxa5o7LUhKZ35NeI3BKP4ZdFi5pvlkSsQETfIkk0E1y46cJBWlDBpqR%2BNFyylunmgZS4XAqq4vMM6GMOfaKKJS6%2F9ZW4szcBnqeGbRZBFErOd9%2FnlgXfZXHGzasjSD%2BMuq%2BSxAUehf9Hp9fh8QodENgaHepVmQwWjDwkvfDBjqkARdO8g0GyJJWKU2FjPo9nBM14MjbMjQTmve3DD%2BJmQeJKjUU20E%2BrnAYI0CNZQspMJcJkgxLJKUUkX1aZCIfYV3BK%2F%2FcuMPqH%2F6sIe%2FtA5r09Nanx7b1EXXwK0qtjXnIQPE%2BWU3CnivFSMN2BCOMi%2Fu736i40ftecvA7QbZB6l%2B1IiMn23hBqoDlbhku4kqEQB%2BUQG2KcFekk5uZlGCZoatz98Cu&X-Amz-Signature=073019989b4610b2fc90453747d5a7882fe2dc4c5d57ab506f3416b7fdcf660b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
