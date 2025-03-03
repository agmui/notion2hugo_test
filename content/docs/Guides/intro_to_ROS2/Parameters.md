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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHN5QEVU%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T050910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApQ3GztundaXOxDBujsxwlITu8Pm1%2FTOOzlVl3LcTWvAiEA2dMOwNL%2FdBZ9%2BmI%2F6lHeLyg68r%2ByNu9U2xtV%2BIM6BRMqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhuQ9DNZhYPnM9ADSrcA8YTIhmzc%2B5frwkcUGgBkE0lLXiX0EwdwA1hkk8UfPk2CvSv9iSBMTB%2Fa%2FzxUaYU1dWYBYvZgkVeEPNOKpBiN%2Bzl6jYvoLCU1c16PQ1ADd2a%2FAiiqPhNsv0jZjJ380JzljQDvXGCkD4fTHUzSS%2FoKu%2FP3RVSTRO96sf0eROXNgf2CGw67FGe4b46izurYwDEXhWRKe3p%2FPQffxt3J4RFVuXf2jl15xDnPC7RWY8%2FDyiavlL%2FUc47NVyOpvWzkKAZF%2BuXBp5onuqRbOYe%2FwFbiHjuXixVOFbLiQs3AHVL%2FG6zXPDlEvW5FDlH2EFdRyiHZ%2FygcnfnWovQsW2%2FCOO8210jmDDHR3KID3%2Fh4iOIsjZKHPhsjkO5d%2Fz56izU46IDQBH1Vq6HzygbHfD%2Bc8KDOigPGJsdJOMzwUHIE1UzQGVdHz1t5GJegp%2BXJvnsLFzf5UuG0J1ZI2H%2FRaBFU624hut21jaclUcL%2FokXY0IJdD55pBTYD%2F7i3rSUkdZIln1glGMvs6ucJCfQ6IRGeymd7VVA3BxdVbt1TALlxVg4HjfycVk7K4T6BYXcOF79e4OTHXHduYmqTSn9Jy4WroUAbaDLE%2FcMGomm4w%2FwzOd6ZiNjMCyZcIhg3XCitDQOMJ3ZlL4GOqUBttI0fRVKKhUr17VuV0zdCsJGqhgO8wJ%2F2%2FyiyDtkgIGRXk3QbR%2BIIhP7%2FbhZNNMAzj%2FMqhCCM4tl1avT7cwPet2cLYWDi0JzOjhW3zQhUvoPHj3nM%2F6F3XmLUdieRv5gTVLeZlbKMY7BF01sI1vCwHqt0VI1MjE5nGtJ2yq7A%2BCo79NjxQ25tFQjp2G%2BTnReFm0RCmsRu33%2FXta3PUf27wBP1JnT&X-Amz-Signature=657e312d86621fad3988b8e154730cd165dc86c3f47de98c4e9b3ff8edd5bbf6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
