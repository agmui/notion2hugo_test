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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQIOMGXX%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T170208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfFD8ynzjFUio5a%2BEfQXKuVymDwbI9xni%2B%2F7FBDO%2BBKAiEAyhH7Wn%2F5WtEj2SU6eI7bKBXFIvLMvxsSzvG7uW9CS1AqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK8n4uQNncckcCZ52yrcA%2FXESWszFEU1HsulT1pyAMnVRhhJGjIhUOG447LN4JTLYzUMGCuQk0Y%2B9ch%2FTcINr7Ev6hyC5FQFKT4orDdABqClsJ8mjy%2BFdQkHXVkDROj3C0SyYo6sEZHQk46f9JJVk8m6TzFZnt6FaRice%2FHDjw8fbsC%2B3ZaFIECYoeHsI8JzX%2B%2BXg4B2EojK5emPJpHCQHBltG8dsq%2BcTVH4vhKRtn%2BnWmaHGEElFVuvWiDeA5G48%2BZW1q%2Fwuorfbx7wCGFMcujAzYNB%2BHKeYHuRSy91A8htMX7LKM7QyQ1DUJhbe6gJ2AtzmoonjcaAQEDrXCr6TaGfGy%2F%2BPWL%2BvEQxOqQ6Z0g9fk3OAG7cP4bNepuS7uPsAzfrWaxHX8BIYnK1n8m0tZXczt%2FTGwbBbFgaRafFrlSybJpS8SLgrVaF2qbKIxapgBPmIPsufmEHF4CRRZEvdexjzlXDedW5Hh16pKNNbkD6KIZcssXjWS%2B36Iijp6ILbuKEs1nqzIF4NZgHYJdxYW77JFT0vIdFHfM4o%2B2SUltL6dAJ1bbjP0GMb3hTrjc0g1uhnGkJYFno7%2FC7ddL6GVm2mIDskdhjKFC3mU2%2FSqhGm38oM0KNsIDE%2BCFTzogxedRW9IcDGns8WT7sMOjtgL8GOqUBS7XlOEc2npAfUNeuAhKhPaZrYnbZuYHAKCBQ6dblS8Db%2FtK7LIYVPn8yusFrNEtLyp1r4Ac4qSuDSXFnEvYB6ZaGqZymLmuK%2Fa4qTqG4cn%2FFEAZysnQx2srbl6bPlhX9yh3E%2FGYMGlBt7aVhyuyz5jOkqxqkrjxnxllJcfDd3ee520KTOUlzLnJ%2FuPptv4yL%2BJ9sLzgUB69scATa%2FNdsBgGGjvTl&X-Amz-Signature=958c846d2b31aa494c62afbefdee4cc15e63730ca52b5a64a4b48ae3e0d0205f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
