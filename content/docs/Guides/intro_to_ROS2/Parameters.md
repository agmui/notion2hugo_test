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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTG5WQFH%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T200829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDyeTQSuLubaZ6FSiQYGInfa7Ez8do%2BpaJalq%2BH7yI%2F1wIgJUjokqIRFE3f9pdyeeSCtexl7t1lGA%2F4rbfMyj%2FnMecqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3kn76NmL%2FXfqUZaircA6J8bONc4cRxdQByg9NuO8anizKs%2FFRE15%2BNKsWDOdu91tUFhZG%2BinrORgREAaWBpevwaGmyi4o2X2L9HuIlJBqBR7DrUx0Kh71r6FcrYr3fsnIPPG9SaK4arF2WRRFVlB%2BSYrqg81zHHwNENVLlwR6fgmgyikgOId18jd3b6oSMCD%2BgesEIXEnbW8m0AsoXVlm6GGd0IuCrRDD5G6siA%2F3ko8vpPeTRgaD%2F7qe1GKjxpJZlimMJ22CLDLIMpagwdxheD6Zp0g4Qh3SY8Ek6RgJkOReU3MzXyVFC0T3VdaZwn2iAjt2tVjAPOB5IcHoa5DnCwDuypTbczdk5YY8Ap%2FlRAtZgtXihOPzxGNJOep6D0owPaiRdT2%2FJrK6SWCU0nchs2hPS4r1tSYeA%2FmSZnKCZGpMKIuwD4dpzxsn%2BDWZpMxE5u27o2gAbZ8p0RXLed2U5UKWNBv37%2FtKHpICHYnGcOOpMR1TxQa0HR8CCn%2BsRgDXArMbI9g3co7Fwoa0MWWB6AlVwtuUWUn6pGCiSNHvHaaH0hhVHKAprbwb2QsibO8QzA%2BMH4Z3qcqepwyAhwfrnaS19snObG55wETKftm6Wztf0x6CtEMWX24020faOlbwP9C4L98Rxp46tMNva2cAGOqUBkqcAUNnOg0TZFbdIk0oNp07%2BLpdEDjfyPDBFPAj%2FGsbHWAMTra1bcmFKYil%2BrcQu7Y2bYzNHEuqXF557oYbVJ9xhEzekK4ME38FzRuQGciybY0v1l8rvEulNaePecV%2FHxyC3PhB8s2iYgaWwiDlJqVJizl%2FeH9IUSAa%2FRb0GllvH%2Bc3YrXwzgUBjxldQndAA27BnsudK6%2B%2FyR98NBP%2B5K9pWMMHb&X-Amz-Signature=3c19ee8e23f22c61bda2c1bd53bb2641c8535f5506a9ebbbe5df3d843daa57fb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
