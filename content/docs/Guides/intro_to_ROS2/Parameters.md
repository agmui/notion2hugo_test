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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHNZFJJ6%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T022712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD93Q0aorV8%2FNxpLp6wAzT0T3F7GILtcwxf4JPswfeRmgIhAMrHzH%2B5Fh5DS81mr1spr1YWfjPvnHImc0TxUmV9rMQCKv8DCGsQABoMNjM3NDIzMTgzODA1IgzK9F2AIzIpZb9xbEQq3AOLHPHt4LYPzfe%2FGC0KUAjmSrupHBsvPnRiMKXHdfaYgHVIBaXtJoWB7yt7SDj%2Fw8%2FZecRXfHVDN04qCZofHn0o6oT3f%2FxX1qFAowtMkJjcYxz4NxTyQ8dZrgCX8w%2BIMHCPao7J3aXjr%2FGaUYYK2ny10HlerVEW2HtSI1OflKE0q%2B0j1kF%2B2xozqz7T70tXdmUoL3gavmrVEuUrCAl8OsZpWr1aZlVit9OavHGALPfxIFFiuumS8qR%2BHa0M%2FAtR%2BSA%2FxQ%2BUv8FSlWDR45JszNDI9OcIBC2gduWKgIZLqzq265P7RvL0cO3wR6WPuMgGG%2BpY5DAgd3EMun%2F5ZsRYdzJL9WhllVTsV%2FVs3fSoHuknvR7325aYeoEUhWgcvARVnn%2F3dBsJDZYOvx7YG5RNm1d%2FNr8YQ2YiOnSBt8ZHvDnSJWSZl3zgRR2DajN4yv7Uaa5wF%2B6cGuxEO1JW4wu2Uecbp9875rTXWix3vk3MM8AZTj%2BBKSA%2F8Cd2Ugx%2Bw%2Bj%2FVGmTZw02d%2BL%2BATjwX7loZqObKxmAT1SYwYNcnieUctgjE%2FQ7wRXZSdA1DT9n0aqWExCIyuqiFqEfZ0yui58rFOATD%2BRKJIY6i4dqhBHWMO5c7SPLdj%2FF6bI8PDQH4zDxqPDABjqkAbOObN8XMS%2FyMp1%2FmyeEKWYHlxq7SGPVxTPOTDkKpk2oe6olcOM5uO6fm9Q3ZPxRdx5%2FcxdKXDltVz8T82Kr4Sv4yZ7aCL0Z4cqxdkain6qp%2FNMbJ9Lqv%2FAmSAAd8bexrKN2zDfcY8esj95PAQzlkFJVNR368KOfoSZS0ctILWIo5vH9Ylu9XmbQg9Q4I4pzGwkIu%2BpKcr8uyVEDMjI5DwG1wvPy&X-Amz-Signature=38bc0b6cc06aef21f6d00045303223f34bf2414a5b85feae0c1649d99512527c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
