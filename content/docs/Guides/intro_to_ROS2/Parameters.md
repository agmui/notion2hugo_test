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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTZDPUXT%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T100831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIH%2FI8KXHveMK0wue2%2BkL6YYKExsWt4XJxmc6Vn8ovSjqAiEAm38t1UgWQwU96ikXf6riWvBQElOOsjcQfFG6cWY%2B1rYqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPnWofmJ%2BExJKSBx4CrcA9lcIcwqT8mYejamd2E3UavVey19wC58BWM6NjgGJKH3R8GRzGkVLZaLf8%2FXUwBjukJ9o%2FzIg8iOF30u7Fz60rM6UZWrhdNrhturL5yTAFRkaOslr98rAfm8hvwphbqi3FoXNVLv0cVTpKyEONwOPQoOO%2BBwgnqYlcTnJOQW1YPppBd%2F1g3qXzkcliKd%2BsU%2F1jTc8QsgYMhgS14EHIho2xUE5FB8tvebnn8F4ueq17aFGB72afa%2FuN5aBPD9wN1yGc9RwcN%2FpOE9wralDhmnXEYkTveMDVvWVmnbvKl845ovNHZl0F3yhbvo%2FZGyoqqil2xbTyeIajKQMRz6mE%2FXQqDQ%2Bg0yvlh4VZwjcTpMioHK0B0Vq1OuXIVYzgCv2RjqB7MdvEQXjJG2jZ0BNEsgN7MBFiDcsDvp%2FHHFnk3yXSLUTci1KQ5Hsk9gi5fs564OxCyEwd%2F7lvhq7kIBg9sIPeVuYIX1iWMglocVd2IIZjxdyz54fg%2BH9jVZ9MLw4hNBUbzkRQc%2FVdpIClonE%2BObOoYFATz4bDujmX3TVeIITwxdj7TF6We8IB4Qa%2BQ%2FTLkshnzsyzByAYg5jtwRDgB79QG0XI%2FzDlHVNPDiH8ca2g6kodZ8Yl5yRMDEjog0MInr28AGOqUBtPy%2BaGNLMubVSB%2BuTeviK2tQ3QtQZESqudy3eTSEoXPrqKAcC2ZNapGODlAo22pt64OOT%2F2cz1YqRX67c%2F9qdJfqHrYM9EzW12UcBxsCCw6jQ0tzh5ZIDngxg9JYDSC%2Bsv2TbyjB8gON7CoFCpty8MWvxoR4qinG%2B0MV5pw%2B37PanBs4DARBX2%2BqFbnL6JJIZfELhkGd3lNvTI2sS4I4mrZrSp%2Bm&X-Amz-Signature=05911484d204bf8dca297c73fc31310356f48bded29e50e468c23292acb471f2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
