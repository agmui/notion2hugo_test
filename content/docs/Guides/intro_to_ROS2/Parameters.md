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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AJYDWEB%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T210839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIEz4tMywL6ZY89eFqKcvfi%2BX9PEHX5R2%2BSKFltSn246nAiARf%2BD0HZAcqchkR2mdRfnEFEO50Te6%2FjQT7NjDbpGuEyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYvRdZb2X9u%2BUOs1EKtwDu5a1bcInuEQZdioru3GxvbkXpqgmRIH5NNmElcf7OWXNqsFt79Lz0gief9DF3VIffp4fkIFC8l45PYTIm3tNzc0TvHoSoiFSCchKk83pwz5I%2BvMjLdDzi9GPGD73oLONleCNPDviiZ65gtcftFYG00lE7jL6TLDwJbgcFAqMSyIwzqgIM4WbVE5ICVw4IMnLH39iemrgnA21eQF2c712cCTB%2F3Q%2Fc%2FOBCdESti7ItlnVAlyR%2Fl0Dy%2FLwbJJE9L6A7bDbYIEAhd1HoQv8u3WZUt2h1Q3tUjbucyHnXi43129vCw3VVRoiOPzekKrUjNU%2B1qrX1Nq6%2BNWuTOhxtr3YeZ1AOansg0pWDs6fyFGEsyzrAXnWDVdsrvREapktxBLk2TGtVAcM1YUEvUaNjZ9%2BSZzxlWOvduY9A3PljqViC2E8YkyBTdRIykjW6STw%2BE5CHcP6cVqiM5rINsQADiE9LU5v7BXj%2FCj5DriVX%2FgQP8rdJrEQtWX9nHZpb95kka8cvVg%2BA9xLJYHHXuEVD4OM3BORq%2B%2BxJ2rijUYiPTVLYdOF9ik7MZbmfvxEaM9Q4R8H1sCaiwenF62cEOPAi4mLJrgcssHEQXX6O9K%2BvHauEowsPEWZCtgqcWaGwqUw4pP4wQY6pgFU3NJamfZZo4kclY7Ts7V1QQ5Ga1Moyfmqgilpzp4%2FylXDC787D4rSqfumR9Ngs4b2jL44WkYVFH3d%2Flm7StY0QNRUTU88rCE88le%2Byrw7IDoDJdvY1qtL6I%2Bc9cNCzKMza7iN4woc1mLh7Laf%2BfywUi6xeZS1Ohs8RPd0AlyG708V4PYA0upU97a%2FBhgKAxuH4ntcw1wlnXeHmwxkC%2FdyuZW48cJJ&X-Amz-Signature=5931eb69131f5e862ed8c1891c609602038fc9d992cca95dd5a7626f44c5c382&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
