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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQMQ6Z34%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDfWZ%2BtQbbWy6IXJgNKyZVXPPzPdUFCWp64D8ea8tOgBwIgdUJuFjoykkh1Qw8VLHnmk%2B2cwgK3Zb3%2F9sDWbhHFrR4qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1kgEukc1DrrqoVdircAy6A8cUD6PxTTgM3SYUx1ogyLWaBBYd%2BWn6g7vPZbb9pZ5jloSWt7fpBONY4Cp79vmdauWx1iXwe68trGsNic7lOp0hEDueUX6RvV%2BzmC0C7GF6z%2FO73vXTugvVru6IIHIxwv8W2A3LRLqqBTA22kohmZXpMkA7fOUAkGTVfGemdlG7MnXsGOF2k%2B6dykNmO6K0RPA10pzlhmTo4Guh3y83mg58IHuKR5s8mXELWmaquWAU70BQBbY8ZwUpsz%2FqrO7%2B9xJq2vw2oMapsW9TXvDovzdIRa95ka%2BdsQc%2ByJk02ba%2FGSVpsMx8Fde7H%2FKuG8QfsmF2IyCuN5H7D9uNfArB5xOi7nBki8YNBYdCpSpMk%2BdzwqZ60ppVVcp4Utb6IiRTPntPWAsSwhgOJl7m51wIhGazJcLOYUaggfrPH%2F8l9vBq20aJ5OemrvHvplE1z580XnZdLegB8dPThup0o57Ph6sH8F%2FU8jpsG0hNMh0gFK%2F2lKrN%2BGn7muVy9rjKgCB%2BXtdvXEyM4ug0rsTT6nvEhsqz83AXFyYHOwObe1%2FuORYa1y%2FwGKwfJpBdE9gMqPTyL6rpsZ17iDwUD1xFjSaMtJLuf6z7NG2epHorvSPI1%2B1wuvIV2WSXABnZuMLWi0MQGOqUBa2A%2BvSxLvGqf2Du8WtbdOCmNyRkGvpS91rcowUvCxl7eqpH9K5ByARdB8CdmB%2FxMEE3Vgw1ZQ5PneWdsGzPAvWiJLO1RLjgyM3wkQnppxTPYkOz4yTnbknYQjWWnc9PsPNKeB6sXmXCZ1dK1WnM63uKHmZTtOe4%2FN7cQceiuwZugR3LyZfVlrhx%2BFSohKNUJkZFjXiWgaHpyPikmuJU2h%2BvmQLgt&X-Amz-Signature=62e56bc4bb3eec2178a7e72b82f841d9a99124b454e5d8c13d6dda2df8bfdde6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
