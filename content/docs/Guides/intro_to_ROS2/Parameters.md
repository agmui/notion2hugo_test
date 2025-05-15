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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNDU57BU%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T170815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDWsBNcO2abyEh%2FRbwJHFyxVWz6rGiRhrNk4jVITFIgZwIhAIpr65%2FX9wsDhQ5mUKsBAECbZKr5Viy6znsiKNPq%2FHztKv8DCDIQABoMNjM3NDIzMTgzODA1IgwYltF8bNP6NRHdEbgq3ANMOhcrL32XaCZbQjC16rCzMxxipAzLtJB8EEsYcvFrYNPGSF8SIPWULMLFv9Ky1lsOcAooG7AnRUz2zJlA5ZjX2MOabTBMOa%2FQ%2FPX%2BzxT4D6B9NcC4EkkkLeTlZB4nq9ccNeAXxFBN4FrSEWKNbu3hB9lei0zQH529MH0fFwdacAn52Cb9JMUdqpvXz1mDbP7svCNxSNE4p713BMvSy3B%2FKpJAKfnGraMPOwdd0%2BOZkpgxhDKe%2ByWsWplgliZBMl9g1kKy9bkLt012l2aQ0uuoS2djWatrtasejPk0s2v6MyPW2UJX2v8ML5tSY2HSkGoyG1q3g11pARDN%2BhfqI7UhCaP%2Fz2vSSQqlevZFFcoamzK40aFTToVebabK5XtEQuqP9G8FslSULGHerbCMVBE77a3E8I6fsmAxr1mUxQNyu5ylubtxIbwMviEGNUA4FHVtrCPmrj8wb1KXN9IR%2BXhQheQMMq8wOTnZXZjxVyPuaXT%2BlS1vH%2F1QeD5%2FpzzmxJhjoO04Z%2BmrnN3Hyf4HcxJBnuwvqHbx5zb%2B5rzFCY54%2Bmy%2FgpNorIe9b%2FcMcj4rNMi6djn7yD%2B17REdBINiKjlAozuwxLGnMzRz%2BmK6agzp9ieXlox60mZJhTG0NDDDuJjBBjqkAbm9l7uTlN5zx9JRCEF4ViWlOgU7JE7u4HZrk5%2BytCGEHuDFxIJzcbP99uoC3NBmSmic1pgXm0gG2m%2Fhxl4CU3lPfWoFuSi%2BVGnc4v%2FONkRWxLIWgMEGn7hZ1lDq3HAG33R%2BgfNQ1iFWZsOwbgPeXB0q8sq2ZzJyecZS8ubUiT%2BE9aNqksYL6PyENWnocJGkZtJV%2FZ5As4hgbRMWJUM16TLNJ8aF&X-Amz-Signature=97ea4de6e514fe0cd3fe7a97d0b03998ac3284247f4290d6129f6d507b507180&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
