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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7HGWT7J%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T100800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQD%2BCBZP3E016nDc4N9y6oeJO%2FvZR%2FrIgA0wxl%2Ba69DNmgIhAO7drXqpnQYaCMKQw%2F2L8LuY%2BH6RDdqunfBbwbckts2jKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDys8YWLx9OHCkh5oq3ANPdwekFo8uJlVWUA31F%2Bw3KXlFOq%2FJ1fUHRxVihSkNONBLuyV4OrGkNPnFa7FedNXrrmI%2FxS6qFSSynEAOTy5%2BQajBPNnNXxS72G0GOO%2B4MYEFRUuBDeeKrdH9I9EIl9X2q%2FJECdbXJqmDy42wwRJfk6azhY6BE0ud0x%2Fe6P3bhvEnPR4bAnLCWTcNE3c0qwyy4MfbUN7PsYRF9sw%2FnUXvTDyLzlGCj9aCaRnRpt2qiPQy7iCurMFN60tM9PvV9d6geJBFVZuXIYGuryZPZBw28r4AbS6FP2Qv2VyHJqjHCQuxeCjQZd4jRFI6jFqRlRxRTEDgwDppO8tEuc%2FE22lqUNFrAEJtjHacke%2BhLzwIK5OkI0f3dOUJnYMFcpz7MfzHiOQRWDGL77DrIRO0tdbjNxJQ4eXHk9m8tqOqy0HA0GSlkXJ2TZKecYcYS%2By2OuyrlgMEDCJuvLKNHVVfBroWXGfHKG5gU33Te6A37fH7yWhYC%2BdK1epQQP8BiaI03sD6EwL0hokA%2B6N75mL9bGwX9SlkEhLZnrOeRoA0xa5cEnBgH7sQl9jhnQqptHeUCp4CvbYY797nV4Vhln4t8GI%2BeIiY%2FzKzb1Gk96q7X5aCrNECY5F8p670zgV8ozDuo5LABjqkAYmwxWSFdtbWkkXho5KoD5WvCU%2BPHQR02gMC4yCKEbR2ruMSpUQ5ov4xqLoQQB3fT3LeydfngKDuczC1eAZXNymJc2NUvRlp%2BmddZ5T1DW9Xyy4iOr82jnG0m17Rp8yMs3exMoDDJfXC54W2jiAZ2HrgryNrSmx5UOSefyGyfht%2B5O77iwW%2Bt3q6nwaAXUoCRf1MJZc7O5dtC29i2hTdEpBiZu8J&X-Amz-Signature=32e4755d36bbff0ff1c9536f1c6cafbbb111c01089ea09140294196a08e7cc80&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
