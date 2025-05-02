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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IAG5H4W%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQC5erbL9E38YWT4lRT0%2BwDsKed2Z%2Bsfto%2BRB9WZBay%2FggIhANI4WyfSY%2FracrcVp4RFn80kgp%2Bdl%2FGDAq23rCKs6nT2KogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkZo5nJhDHPXfdUqEq3APGTJMCuwj6KpxBCDEPnaDiW%2FjnZHKJ0adopA%2FPz498HSdg2GZYWlNmzbnNdPEVwmO3U6ocQ8Q9aYpjCt2jY%2Bx6QCY8i1f2LoTruYodhrsIJBpV3TPc2bAKdLuL1l2ulIanGfB1IJ1wMpHAre1ruacN45Gb6ci6GQJnc8Eghimm4UoZz0Yz1TfHEtVf0DN%2FrkfkC1QXA0m7v3Rq%2B7m8%2F0eM99Tb9rd7POGnmiOUbw7DMYfRbt6D9Isb18KfMb%2FW7%2Fq%2FiH0sEg7sMNXZ%2BEm7q5dKa8itey59SBPVWMb8UI6dz2Hazbnhx0GluEaziDiC0t91oQDUJJSqZcFHRyFZvldPed94J8O7ypM3bINPbUWFETIUKeOrMEMq6znjKk76oNzZHtLu1BUswXJpUi6TW5dKZtFGlB3FHmp12%2B10Y%2FiQ5kISFx2whkCGtPtq%2Fcd5zwZNUmbUEvobgJVT5QS7bqLbsKspNjiZSF9AMiUE3IrcaghQs0D%2BgwWtNLwol9390V6HIre0x4tYj0eG8eTS9KqDXK5djeWxqZSRV5bt9J00BUx7NxiIyLVhc0q%2BveipvRdx%2B3EFbuUS4FX%2BMdlJNQ3lnbXXnblT7hhuelx4NsvVfJJYFpbq6RunS5LvVDCS5dPABjqkAWPw5wlhWpWnzKjxwgCCwDL6oewQ0jnJSVagvzasrfICWNZobm2fR2naag3iD0aPeSg9%2BbRn7deA65DzR0Wb8AOGmTmAQpbdXwEpLI0qOIn53UyAKafqZKCg1XoEzKlyVZTm6DKs0OWYnhkOxIqq2772VrM%2BtxWOHfdwkS9uncXiwl5%2F8gE6bSYXtmxg9G7VMTIGcJ%2BxZpvFBY2P7eLqtxYiAsg1&X-Amz-Signature=12defaef170e7b2bfb82817100233d164e354973d3714106fae15f4c068a89d1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
