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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXF2E5UO%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKU9fW7gReKe8%2FgEdns%2FYDFiJVl5UJNzUp71kRhVZTuAIgUC%2Bag2c6lraDm4OUDFts%2Bb7xePuYQHo9oTkFwNb%2FaRkqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJW%2BOi8bmkhsF7LFyrcA7oX%2BohhrqvaUxXtvseSKTtmOEh4o91C%2FRmsPrDUdkKVIq811%2Fjb7UrH%2BVwEJ8Z%2Bvuwho3uwiOLxBhZAep4XaQ%2Bc2HO0vRMfZHlg23zQdKt5n%2BXx1oYRQcl9pN2jYS9cij23u%2FWGA%2BJ8NHZkV7yX3U72S7mkq6zz3w%2BXzb38pMmMkEjLfyQpNCK4agGNTa4avkv29OI2rdOR5RnSJS9J07J1XNz%2B3kuDCV0wDAoJwTaDh%2FRCwbvhmaA5TI3pfwXLJi2g8xb%2B1WtWAvIbm%2FBnwhgM5beyKW3zSbU3d4dLEzzZYy12bXy5nVJXJMOzjMx0EIbT0fin%2B7xV5LWPpHvI7EB9hJvxuZEBMIXVv3uq5KOtJTzKxs9MQYNi%2FiB%2FL3U2g19cL%2FAEJN9nVvm8Bx2mRJ%2BkxPhAGi5bXk94ABpuBNJ7DnLbT6SMf4iAislUKSOpFJNqY5SScLlerpLoErykcDYh0pUcI55a8k2AeWk6rRZPB13J2lmywBqVOem9nMeEVTMzp%2FXMKYg5nzazShP6l8yxls3uoJlycQJAdOdlL9j7yE7MzCEDCBRUoQs8gyAP8KhSkc3B3oWAc3kFMmoZUu4OnEdvJpAtW%2Fo7px6RiUWbn2%2FtSxtGkZxKMk1GMLP8l74GOqUBSzyrWC07hF29xr1%2BLrVV3Q99qXC9eOltXSdUs%2BRPkL8gA3h3TmQRAM5oz0bropAcfsX9hvAXkTOn7sK1gf0gt9tCeJWOofQ1PMQkG9VBFnpW75Gwhx4R%2Bb3W6VxEm2LmOMU%2BEoJYXdOas02ShI6xpi7PWka2wQOLHfsnVQhLjQ%2FhyfXfdyCrcXYiq%2BZfJaYoOOp0lBKc7PDjpdgUZRHA5%2B0VRn43&X-Amz-Signature=0037effd83df23db972772206347ee3af451032412cf4514e37201eeac70fa82&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
