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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG5Y6WL7%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T131356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCv1YfTuzAjh%2FmBOLK6j6hNhEUVgp0Y%2FkHKnNN7qhEx3gIhAMFRytLE8N1E4Bgi8M88lQeApt9qz6bmU1x7oOTNWbtqKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBRxlSHpb1njR7YY8q3APNQUBznvxYuadK3zePNgIMyHxDRBWkOsMjobr9Dp2k4QEdSIgY1LxyfrC0Om62tkaUG%2BmW%2BHP8kFP%2FmofMIIOQpFkGUJc8Bgr77X8cSGHYGwTy8jxCZ%2F3zP%2B%2BA18nR29w3J8YaOj9J9BREfPdJ6Wp0xEqSHe6SMgd5%2Fdxv%2BTQE7nTU1fz4pNbJQwHWgT5lsEfzTfC6%2FLToaclLx8WV1PuuNEJD02601yw10Lw1PFtKJ0Jyu4%2BsrnXuu6k5mrj6oaNDhhwmNN4kkrmQAZIUeqkXdKgjxPe0oTF1xHlW2UDwwOo%2BVvmfJ%2FlpPpdbwIDBpc9oSrSstDyIbO1nU4MHfMAVlU3tOw10xsbX%2F%2BJz6yRj20vYPKLBGRl4MkiXDIPXpscMQd4rmfqRMBwLp45SK4ZSoXX0lD9m%2BJjbhSyGoL3Q%2B7fOMjgxKvXujGAUj7ekDZi4pAr5VYYYanC%2BYC%2FdrK%2F1nIMeULiocw04NIfdPD9ubrnj1oGs7hi86LRHtEwl4QaUnpFiPQhRVZ8tF9WXG4zXWUNtpV7vsHJ%2BX7XlBRV3x02YYbBA%2FLhjum3p6W3aKOYuVQEx2SuDKm3MIO6YUhN3FXc4sGtx2qnADLm6vIUc5YqnU4NexhMeIvtYxjDmkPO8BjqkAbOKRcYmdwlz20EXs6Lz94lslVZha9KN5qZ3s2isF7e%2Bw%2FVan%2BbU94Hlfz3vCH52mj0TUrAwYEIEeRbVpekvqI6M1qYVX123XdXODWJi6HYZzbE07L0QT4plhw7JA8TBBD1khdJrzfip621X8ZI874f4uoGbq7z7Mcne7rp1pARCK99EKeR9KW3ukiCZlyqr%2BXqHXFOL2IoKdm%2FWoualjEHHFmsD&X-Amz-Signature=2af00cff4395600b9378dd687707296629b2edaaf9c489ce46cf78fbab76b667&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
