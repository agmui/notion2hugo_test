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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EWIDNYL%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T004343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIDVO3zDVVrlIZLCVDBjK5tzhA3lMvumQypg7%2BYdZn8PBAiA5jdnzq%2FFmPm6tlNAASoGpBKhvVaaerbbnyjR6HOI%2FiSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMirC6wbz%2FlsEaxupyKtwDC4RmALOjUVrn9awSRNm4Y5BvdlvxPRgor8MyE9cskEeCc%2BjjcYoCZXOdSwoL5ijCYKqd0RANjXh9KWqsbYFn3q5dho%2FOqEf4n%2BqQFvi68uIp5m03X0v3X6leprlQ87mc3gsKjWL6%2BPDVamueWc%2FlsoTEUnVUCD7WlOX0N%2BgIfPFrMHgyjUQvHaacyL8tRaM9zLyB7zAi5t%2BB02plUYeNd8sGJ98INAhTXYSAQQKG3xuO0NIncm2nRsY83%2FHGb5BYlfVBxKoYauu%2B7LtCJrNXJxo%2BQ4%2FwqlzVQnbSG7tCPR8QYVXr3E8lsqlYpFaMDJrzMe%2FrR0Cmv2B6KjCP27GPrEH4qnZC0wfCoah%2F57O%2BmMBbGdMHNMUeKZZBI9KiSA29a2Pjx48Y1kIyzQMtkI8e1eEYwHfisg%2FQHwlYSPAi%2FCsb9%2FYRYlHla1hod9D0z%2F563%2Bvu1xSn2qpNwgZdkOJACty1pzrJHiIWVrEhOhIN8qq%2BeZJFAhOIRNBaCMlQ7C9U1i00ZABDwKETUqI80LgZJ%2Bkb2AGOKvmMc2ly8xUXLmdjqAFKYaLfbFPF%2B9LfOuQUfZJyrizvm76nuEnrp3K9PpBEngtp8c4LDP%2BrBvGXUdcVlf%2FBvTjh%2B4L9clEwsYKRwAY6pgGP2miuwzfZl5Hel1J2JXp0R1yktKXLeco2GsaAQbAt0eebp%2BX6TJIaBs2wCGYS1dQKn%2B7l%2FjPMjV917VkLKXGkbIFU1uMJLToLUIw%2Bkgs5OGkIVcoACBgJJJ4OLsogeyVBTg2EjT2y2rtxhpLGnednFhijxIqyPTwMDm7jwT0BF%2FrfDbsimk%2FXBquRptvPKb9jJsjHwzuqm4yMpJ3BfYiAzQU9aSVI&X-Amz-Signature=589c23c894d4d50f8cc969d8bebe1338d4131ce7db5623291a2db59597665fd1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
