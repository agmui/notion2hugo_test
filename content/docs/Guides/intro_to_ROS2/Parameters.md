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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFGWSDYO%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIECfSemip%2FMdm46QJEuVDtrH8G4DjJZ9EQf9C0flGCJYAiBTcM35DsxchhBdYMjYJMjf9SNc1D%2BRzowvZfwEQIUDASqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA6MYHqbH99OVicbvKtwDXv5iocg4INIzO8RMsxqJyR4%2BXuXBv8gmcWlVwkFfRdRm5Eue2zoT5vrYRuaK5YcFHEHkYynrodE9T%2FOOpgCIfTbMH9I5j6PY0TbkvA5Lvzn1e3JDxtwfEu%2FrfOrRjdwpAOvSsJuIWJo%2BaGEnNtiul%2BiLfFKgel0lqFcTT2oZzCi%2BY7mbuHOyvvis%2Fcy3Vd%2FJbbGOxCS4ZhFqAg9uMn8ikWMcvju1MeZHC9nWeM5qXDLzO29ud%2FIVsmKANmOsRByGm4l5UG9T0Lvhh61kafTygGqGltcojr7xFDOfz1h1eL5UAElovl7n7t8bbDZ7xN5xFWBPb%2FgQ41tjgIwF0Kq70FpU7RIqXaqWl7eF9Vi2gpIx4jkHhEErDgYY2%2BhGkeb2aHPkVaCW1fIJl%2BdfXjz9EOD2aqSa033ZiXIPzbpeaJTGwk5QxYArEFMCVDFOGmxRK3WAWP%2Fqp6jnxk4%2BMuYIIAAL7XCqS21uVLWeW81qPcOqfqEZH6J3yfZTITN1ah5DGVGs%2BG%2FKkj4zWgpA7T4oVAYN16ggYzjQ%2F28Nc4UyfrE2VcMANAwkCc4CuXXRfmj%2FAhY48c7Lt7gKbOdKO%2FqamXMWgNftqEiVkhdH9aa0UvF7KEqtMNxp1Rkzz%2B0w9uqJxQY6pgF1ezIg%2BssXxCkIUtpUE5o4LgxzGRMqTG6AssSIG%2BEdqxk6Bo6SsosuzF4eM0v%2BLuB1LhW%2BqifPFw0U5yv5JMsTWx8vphMo8j01QHNOiVFwkE1CR%2FpSabXdeSGNKliyknTjzZxTZGikDfg79t5otFLC6UOOvH3KDjmJfYTueDqDqeGwH2yYqC8wV0fb3b57eN7H6ftIPeyN6fWEzXDt539XRPSepXxL&X-Amz-Signature=e8cd2261fa0c930629cb23194b6b07399873a291249f13d219b0d76297e29952&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
