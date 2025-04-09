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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YHDECJT%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T132107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQC3rILzCnVdJo1v1qhMZqv%2FsWHXKeOKLB12UhKu31tAfwIhAIrFj%2F0RhpcwDitLL0yP%2BcEadWcd5zk6mywlGxrZ05SPKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzi9fPXWdRI%2FLYKy88q3ANgaAWoRu2SP59FxX3mOhXcW1r2LeZfgiiBsMI1dwIUoQATf5mLAYbbhjxK7LEhUPJBSDSLGyXQENaF%2BbGivZKwI6agjGkgTm0XxrOicvT47ng4u6ON8k%2BqPsN35Cq7bxK7wUUZp7mIL%2Bvso0cI9noPftXSj45yLR%2BO%2FcvTYLBfvdT9dPD5gVR6A0ZGC8oVM2%2BLH9bc903VbaJRbzBdX6uO3zlUXhXU0RW7VwHB5%2FDJrFrsyEFe8VeEeMBb23n8x0V1XG%2By6082RAo5NSU0CqvNIOA7l%2B101n%2FZGAYeDuaNu%2BT0dadj0kaWtqkBpa74lfek1j%2BUbo%2F2bTaUSL91UykXUBWumxKlu5VimE4Vr6kcVP94mkqU6YTGRWv28NLhnT4HJX1j7jPYB7ItGkAfEKrJ6qW0bk4OzoQFSZ0GLSlpJTgMh2jLOMQ6cWqa%2B7Q4F%2FjtpYX2P6ARNx2Cu3o9ycMXlkR7dqR3GC%2F%2F8TDQPWsGyk%2ByxFfYPWQrOfsdRf1CEPhoPMnwSd5KTdjsI7II4yv6OTahf%2BJpl60xLatgxb9VKG8NGh4v%2BXxaA3JbSmJ8Gx2DoLxeG8jYP0R3A4OBMnJkTra49tRhefyxRTfsMw%2BNkcr50Ftq4nNWJc%2BSWjDz5Nm%2FBjqkAQihCLEG%2FKbF%2FMwemiOMKUrqu1clgCBxYvjkHpzSWitsMIUCrFP4YG%2FmmCXMJXL0EQFYfNz%2BfwAHRbcxOe6A5bdYhaoSWHQ0P0ubGsAKXg0AiQg3W6EMQrAv%2BUeWeY8jXHOZNgloWVqiQvM9Msh5UIaS86yqrfF0PLtsrGdJPvtrtaE79M09QG3A9VgdDAYbeUZy9AmPkzjmDjvOE6bgGl6ufTsZ&X-Amz-Signature=5bb07dbe43876b78ee38173b2ee62109391ab6a2557cc1325bb6f6814b323190&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
