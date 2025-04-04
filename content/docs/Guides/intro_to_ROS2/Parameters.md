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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6OYZZDT%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6ZQ3GypYNu4pflWghQiAhTABXBe1chvHRZzpxreg25gIgPUfAmYNeOR9d49a5avxNohK3qFoVUMQiu7DZTRoYkzUq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDJgUQvrv8fnNZo9pwCrcA3Smwj4uj4D8wkurSTnuFdOc3%2Fw32DDjy6NV11EmBnrRD11tWaRJR%2BFX%2BO2BMC7cD%2Bz1M5pkXlvBXMXvaCEsdkUpWDB9T8O4P%2Fa1vp1ye1xjlWXN8EkiNPhif18GsoaQyU5xCw3gk3lbu%2F39D8t6FAbW90f54udPT015dOkGWhimtha%2B2VaeqxB0mZhC%2BOgttaMXoOaNXI0HqILZvxsOFZ8QsDDLIYrKsOns0SEtdG0cZRQ1HCnBF6NrNucH3KPQ2Ggl%2Fetiwc1BB7NorjB8VDJtynrkwLmjlL1DXgg0IOCnjsIjbwR6p1qyyd4A31SXDLyqPlk%2BaFCYh8Q4b9kToDgRIVoNwUU4%2FQb%2FzK5r5lnZy2OmLeWTwYBP7nNiul4Iwlxrh0YT4dRLGkIbBG3h%2BCbNUL67bOQ9fdVSSJlmOSWWs5tcC6GF%2B71HE4CL6vv1mE2fc6bg1CjbrXnsX67Agyoi%2BHwqJiKvor3o%2BoseXHBJt9XBjhqppfAbQmhNJInioLFI9iSHbOZAukiP9TJhJduLZ5OWYuEmJ1jSZTKAxat%2FrH88BV6uw5PnjuCxJArcIYfH0CiA87TH6%2FoKhr35W0XpmwRyimTJKwcB3JYtgIi4JVnGlt1y4DqNingjMJ6Iwb8GOqUBD1godqaaBfR%2F6%2FMXIrU5zvP6rMEk4APPV8YZSou9ec%2BeXN%2F6qSHGigJEtriZhbb5vgUyCuET1L0U5iBPMy10gEKopI4HK%2FeF1NoTTOeWMjy1pFeK76WLSD7ozW%2FCIgxRpu1duUmT6JcEMO%2Fg4B7q9ntnEuN6FsXxIJ%2BOo%2BiQF10TDvELjPs92zFxw0r30b3TwtNE0n634L8UqKmvfCDzTu6bQIi6&X-Amz-Signature=e9502ca8311b8d55b94cd2207f89bb011477ef20b633ab84a959e4d46a715706&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
