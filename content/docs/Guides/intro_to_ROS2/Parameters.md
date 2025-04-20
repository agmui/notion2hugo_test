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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2XFR5WZ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQC%2B9v7p1ZVnOptCmIDyDI8qdjdvluAfIeqdwzmB%2Bb3cjAIhAJqCTRRnsymjDcaT63rONczceoR5tzYz2CykpxMDz2fhKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpVOkJ0xGFK9UcXqIq3AMcx7oBuF1sjn5WDuNMQW9nA4FoWjTWFQNcZnWLqYpAQn61lgr9nJbuQR7z0kh2%2BovlfjugEW2jdhT5amQi7Em2gyAZlnl9x9MQIVTODp%2BMlVdeZdKIFNhKKNOgrH2wlajCHmhx8kyaDyK7OxU9Rl6F0H8o4x%2B83DxzdVrf4HpaXtuBQRH%2Fu8LcsUj0XsEHDANd1uN3F%2B%2B68l41njKzgshASN4X8hw69nXhe6FJ0fgP27sQZNn%2FkQcUA%2BWVnXBiMdTL5TeueKEjYmICNZnezU5Mp5a984c9IZlmoaiJyni0exwBYpMv90%2FF6VaLZVbk967YKI7z5Yy5xrUX4oHdbja9GcPt35FXWmxPQgoawDuOwSo4La8hbIguOXck5R0ny0WmJQagCNapVte2wDcaYnxNrJs0KcqLaH0KnaJFh0N7LdyyhXucos88bmdHjAcmUWh9b3nwvqbfwXKeOU%2FagRxfAiqn20b5UquQh23FA1fo6oEZcS5bDUNOWPCyrQjdySOycIaCzE2Uuf1QatyDboS06yPskJtrc9mId4WFnurafgSdkNxmyDd7ZRy2V0MUQloEm55QI2UQoevZacR9ewTi908Tg3CE5mTVg09Gg8wAe1WGGTo96o78D90%2ByjDh5ZTABjqkATwFPY2rVIgcx0wcSmCuoWqxsZlumNcp%2FVXcbqkoN18D8O%2B09fAljDF1B%2FY%2Bptx74oISJBnIT8rvyHEO6qPccyCZJuQa5w%2ByMyhyKkyq5YA6LdZdzz2fH6%2B%2FOsSZX7ZXyIgweKqjA6g%2FdGDcZsBU5ueW%2BMOZ2qe4oAxXLIuYtghbANEjFk%2B%2BAG1THjnwLtW9hcXh4JTaPIhbEN6vFFtVKPVdYgB%2F&X-Amz-Signature=d536d12fffa1c8a6e1f6a7367c4a55caa0af58e9d719ee455469ee3247702568&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
