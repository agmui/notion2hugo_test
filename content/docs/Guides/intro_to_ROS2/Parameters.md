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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYMTTGAK%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T061101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQCjF3cfJ1tSDZ5h7ueGRD%2FUuqtmFDX4nR7g0%2FmXfdUm6AIgQjk7J45tB4LRpTxQq8miiZsFNaanEAbs7T8XW3g2IiwqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFE2RK4k%2FSO0p%2Br5SrcA4EZNlQF%2BIm2ZIPuhWIPMw9rzqOcw4FyArMT%2FHX%2FK4RNhZJzBbFws5WgPiGDxlO8z9NiSZZvdRLv8Uw9iYu8VO86da3cr9UGw%2FVqED2ClAdfA%2B1nvn6GlAbYWgNITE7goEwsh9vK3tCivMFAHz4h76RGVdVGhj7Phrl8Vr4HYULDF4PhEyyGa5MREm%2Fz3eNwnWiP9xxHse5rl%2FE1u9%2FOPnLT5%2BLuJj3WWCqnwA8WgunJPkRzP45YpHtME4eqQoLcBBx%2Fzyq%2BQJWD6elB70JkDqJ2jd%2B3TaOB3oszZEl5BnyxMDz7rJY20vFYwrULN%2BLWjvBh8QMY%2BIzajBj39rqND3O065D7wwEzXmZlqth%2BVcBZi%2FjcIgOv0PykG4dHwwPfTtQFYyXsBLfBWtykfvr2sYjgiFCoMEn%2FkCPbHDF6SPZvo9rpQLAc1phY8MdxptEjVQCHOKEV9%2B7iF4DM%2FRVh3MfZ6BxXVn0aJYmpkWY62v8%2F%2FoU4CYOar6yiyauwO7tjcXJpOk9Rt8qPHG1Fh0HJgfS8x0fd%2F6gOTDj9YwiAH7DakAs8%2BnI5N6Fmh8bBHH3mhj%2FXBWKQe4D2OHMB%2BndF2ZVZZiciXAHIhNQWfjTDi4pHAlAB4Bims82a1IdTML2rxcEGOqUBK%2FV%2BKs8W6iSPlz83SmrRiM49IFWKO%2Buj%2FCYmhathITzIUk2c7C3uyjBPlrxFY0qiIgH4GCkmy%2B%2BAI9EGzjr1pJ%2F0%2FzheRuQ5wZiCxXYyxWDoF2aESiiGjlVT76UVwUHMb48xajmt7B2hhUEYYw40YkYqXlfWI0JlW2ZU1HMUGpMSWu92bsaQJsghCSj2LcjVU8o4cRfb2u53Px8mGM6s%2FD3J6k1Y&X-Amz-Signature=e8668fb23e59d7f4cc0df2028e0e49b778c42867d630c3509843fde08e23d6be&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
