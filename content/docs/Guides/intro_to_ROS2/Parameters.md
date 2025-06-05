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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HFUW5TY%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T061338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDDvvfmZAb34A7iXzaIGkPSq0pbNkMQ%2BUvS7E7BzHhY0AIgICwORyiekOq3mIjQk2cElpZJjcmsqd9fudfG7TmkTLsq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDGgJCGpJEnQZ4fbOYSrcA9tRKi3KznxLVjpAOjQwCLiZsTlpu%2Fjr9I9qPhw5BPXoTBG18KHSqtQ4iGSjw4dw6nMhOaIY0oXfJe2zHZCioJC1u%2F%2FKyxpt9EqZEIGDdtzNgehqlbULW5oVqEmLqcqhnm2dYEGwx14YkkA9oRn5x1xnYl05iKlhn%2FI1YsSM8wwQHeyiDzmtjOESKdCuf%2FtV84qvLBiGv%2F4Z%2B1jUQa5XAx%2BI4QUqpzFvEz1A2BKWjE%2FcB3huwFM4zhbGQuhNaVtubc8VTjSguDF9cfOoK7xqQpZ3XIycRR%2Birw%2F9jxhAY64AibmDx5FDKVD1909Eo50PUXhzaov1XS48mihwBzky03sfrqsMLlbSvEQIccXP%2F42Hq9JLqgFu2b3v%2B7UXnK0siwL6HgOZxDfYX2Zi8ANrRNkN6TCjJTkJpn6pO%2BdRhwyMpceaGR8ILI8%2BiApUohH0Um9CsytjfXmrqR%2Fuoqa3q%2BK%2B0REFjSz%2BhzI3BJUTrWGY3nBaJjSTAWn6YbKMI86PKmv08%2FEuAX6HbtVjU3Col6Xv55u3y8TWwOZis10mSQgA1%2Fk4txRMDb%2FyFoCj8te3AlNznmQqSR1vV8X9zC34iiU903BAwV5%2Beh8VH%2B0TqGfYbnszaxAYarCeIY6nMK%2FlhMIGOqUBJRW6msnx621qZjQbpPNGHWfE5O51SM1XO96NlMw97iJsqooM7WZTyMWwUl1oo1hPfM%2FWuZU3FORSNtEpHswcqyPZQDydNuGM3ULr%2FaZFgosSgJBCdIDLUtKUZSYwNPabDkv%2Fq7VSC13zLh8t8NCsmfIJ9Ry%2BEzmhJLcVw5WVdtOLUgv4I2rD38ylmGcTzHPOLZzwtEKQOcRxm6DwCpd5jx0gEEJb&X-Amz-Signature=d72ac395865b9f60e3f45d597bb555b96a518d7a73a222d336dbcf483e89077c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
