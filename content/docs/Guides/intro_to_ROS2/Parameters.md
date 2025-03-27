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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNRE2TOE%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T161019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDorBk8fRJNygXTVVZ4KUnzfDTTxwLkx0zMZsBR%2BjxpwIgP6evdoAYeuI%2Fvikv8zY5dBGJi3oZKRYJXsTgqM%2Fy6%2Fwq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDJTQ5ZDFQ6NgBpYOjSrcAw%2BUEQDYtwZrFWDnB1J4H8tuhE5%2BtDGM0EfJIBb%2FEoOSLRPY883lM%2FgrMj8LjFjklFe5f0LmicdhTRRC2i1LGomoTIkjgxjA6tgVENLYmd4kTESj11pfaHJNPDmE8lW0zy2ZIBz8ebI6yokfvp3is1wLebAoM1R3spI8Jla5xSlPYwhxIDq9fxlNXN0oIkELXabq2pfoQm7gIh50WSoU20DxKLUJofIdBhf2jIfE2%2FQNzLQ1CqX0%2FMEtVvG%2B4yd69EMlUmxj1qHNTn%2B7KqxFo0m20nxJMxesD6U4CmwKn0wPBoCR8%2Bn1VCrNe4HrHwOK2yOu4JjcEfN4X2x2cD0HC8I2%2FhVTL%2BNk4zuBTV%2B%2Fh%2FK%2F4SWWwBmhlQkvqMaIWmFyJX9Tn3pRFIDYBxq73ny2Un%2Fj4s%2Ba0ZMFXzv3bEaVl%2BOwrDKNbrgdu4bn2GrhlRtU8k%2FaB%2FJWwd33FjC3V7e%2BTWm%2BVV%2BGsI%2FgYG9t%2B2FiY6VTq5FllyDbxbsC13NMLpRAlRlRWgvUi8WIa5j5KoUzI8WN2oXfRK3nnM6Xnz7mHqr%2B6M%2BZCpI2KpAVTo3gCJrdByncfI%2B3FNxjdiTLgkN4oNK%2FSMg1%2BVfzLWB9ZN594P7SixRpGjwRNeIFhaBdMLzqlb8GOqUBFqFI2Pw7K1SkOaRHTcOFKN3iTyvqdV5OQrlwqcnDi5MA1xEaGZ2MVVzon35lRZDbkDtY38aEAWUfb6OCq1R5H%2BhkidSCDMIRRFd8QCOm9vE9FBQYXU3M6Ovl6PqkJA9rifBj%2FF%2BUWyX5sKjLhewGHDG1T4TIG5fN79AKYIDyb%2FbSUNilMpoJCRUqD5F2EvYnaSietqpnruPRcW%2BBNvfI9egXAhCr&X-Amz-Signature=55920b47eb3896ab59c0cb4bbf610c8dfaec43c9ae34df193ef8c2ed2c7593a7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
