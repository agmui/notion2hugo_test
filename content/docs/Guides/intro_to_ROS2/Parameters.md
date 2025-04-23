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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6UJ2XOW%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQD028ka1aO%2FgcI1JH%2FxzrZb0gFQRhW2hbqQH%2FDNZgcj0wIgFInuMlS4TG8UM7oMxDilfphP2kVaAABe6yLkiRd8EaYqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCjf1t75yUJjcgB6jircA%2Fxez7XaA5U2XZF3BU3cR0JdRaMK5Egp%2B8hEhJUHJqIXMLEk1yTEH6lz1WBMAUPn2qEEk2RBhzmfRM2u96jkBsroKY7LfwwnslrTRFIePObxi9qBt9UZN5I4tWOX6Yc%2Ff6s6LEzas8AYMDxhYo%2BUzFeOClkyvnnoMHSK3mkN6zaIQbkhyqSaBiXZm0HaMfIKENFRIfcm2k1QMgEj2QdDuiZJC%2F5aHM0nwtfC382P77H%2BdB5tuFfQULtMyGOZB%2FXAvxUE%2BI%2B3W3rdSIrr%2BtCYM0e1sQkbx28%2B3UVsIrXe9suWHz2HjGgKUDaXbw5Zc6%2BVSw3VVhzKLejrsOhhMqTyKsiM%2FxYkLr5CBBYJI4%2Bw79Xxr6haWEkcVLJhnQE2sjtoS3hMuPeL92AimIEGjR1iEApOmZ4mKxgQbMBauU00Zou8apotDV2rz7w90mSTJXrrnjPx44tgyxiyl%2Bw%2BAY%2BddpFQuz5cH%2FpWda5ri9MznT6pLC7CXaH%2F5LSejUwy%2BHIVBRiY%2F75%2FrJlRQ2mjlgsP6SeHrJ7NkyaMPypKr37dNEE9vF9bUBD534wgxG3a3sMvypP%2B18RZ55BCZta6FGTng6%2F9%2FP9zWpKHe6LZv8KdCle1038fC%2F5N%2F5jCBg2AMOXGpcAGOqUBKOa1woKvi4hZciXqwsTbSZkbBdnZ7axG8KJw6zEd2BoBqi9FPFXnfJeScqERl1b3WbFHoEwk4yOm9P%2BN%2Bz0hxINgiXz9Q8jd%2Bie1GUfcIbuoss4LuLr25p%2BEDVkRO1v%2BR%2BQxs5OaMH0BIOanFINBI6Oy95jrSd7mCdeZD%2Bngr6qMDyo9xsPMLFpJiRUuju7BAJSqimcoxHhGYghmvrPwXnwEMa%2B6&X-Amz-Signature=1ed41724d504f15eda4df2b7af322c11a6107325dce7ccd3fb5a3433e893d889&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
