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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW3MKJOE%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T090754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRziVxHvtXj7%2Fle%2Bcu3TUUJfKbvmxfOkRC4cTWmueHFAiEA8pSfuRT8N6MKymAnGbe7Ay8PB6XS%2Bh%2BN1TU3y7tuFb4qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAr8gH%2FwjBP%2B%2FRgEgircAx4uhG1GBry3PHTGAPI1JKS8DVKYm8KMZfA7H6FlEpEKqgV19LK1YXHHu3FeFMMa1DtA%2F1s80%2F%2FI%2B2%2F0NLzVNCh3tQKWyrMPB5zZnf776TYf139e9nIQejA%2BPEb4t%2FJl4yNJIE0On%2FsOm6twfDK7%2FCGqtJqxhDKv5mQxcodEewxZip4eAEATgcxmG75W6jP0IhHyHfozLtNC8Tv4wfJKo%2F6vfhByVvW8o%2Bhjt6PGgUohYQYx79DTvQ9TlAaZOCrLsFzgOTCupJbnUOAJYM891wfAbDxxu4SOkcg73rWkf1zPExjbRPOCqwLh%2FyE6Y2RgPlp6Z2Avl%2BzfmzoEfRvA5sMvQzgt%2BE3qVj3IuRo1CUs03EuSZK3dSfuEG3hlFi0Ec3fr%2FcDWIAAm%2FbDyJMcYzzLTonxXpbA%2FjPhj39ghKABkEkFy7Qd70RbipiJvkYXxsi8DvjGAVacnbzaS2KCB8F5afLlfihIdmbLlieKSs2ltiaHPh6bTBSexLJxHHyC%2Fea2d%2BEaKwpg6EQ5JTqcoeBZJcUpI6gMv0RB4rruBY%2Bd%2BPTpnq816s0dRh56VcK3OE690JuOTc4p3eFVKtKys87Dqpvl%2BbIxyj1zm%2FCGKxKtFCqPEE%2Baqtp3njWKMMJac8rwGOqUBi3SYO6BpQM9DqW1iAGroc%2BRW5xuvmDF1phd4snGRI5ioiSJVJ%2BQgCfXgfqFKe7WIc3GmYdoNqIzYzW2wQykOqxrHEI7ITWBlB%2Bjf%2FC29z%2BOeLx4P40UyiHv1KNEpdbIvMbERVKrAwsvMOLSrZKQmEhk3VhxiJ1wJgED9YCYeRGJYbDxnb22aDRfJjoktbNy3dgMLKucE%2Fu6Du9lqST0PBkKNkyYf&X-Amz-Signature=7416d82579245f6136cd22bad4327bb280ba7905580f7fc743fc340c29704f66&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
