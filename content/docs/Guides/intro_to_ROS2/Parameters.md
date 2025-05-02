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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3MZCD4N%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T121508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIFtA0zCTKwbvVz9q5Sklzvh8l0y73C52YTwLR1aWXthkAiBlGhPSFgEK9IeariE%2F1JMZfXu9VeSa2BrqHsuf9Mt1KyqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnJ9P8bwozDEJR9s2KtwD972iDVyAGUEBjoG5%2BrISoFHVpewS9lDF1oIGs3%2B22VCQKzjAjV3qQt1%2BBKykNfqp0tjHA8J0PMm0lyf%2FBpD06Wm9gtEWxn4X%2BFhVY%2FDoILD0COzu1jSQAk3Z5XYbqmDefUgJjMY5rD96HXMMKZ9n2Zf2fYLPvb4l37mYtWDK5x392B5pQERNPt9AckBYXj4gRTUnq5prhnZrt%2BmDX3SxZvib3EwR%2FSkgIw%2F6I3Dfrrh6NNoSTUnSUwodChziU4DGK%2Fpx5oqSe0vAdEPW0BqQG6icTzXfwKaVWyOuSt0TXAqKh%2BCVhVkOd9rKc6tx4JEyDmKWqX4IwmMRjVw2CkpxrtvLmRCVeHRUoobmVwLxHX1wQdzBcYWmgn6n6X1z1e9yJmQYcMMb5lLbAjo60Hc5%2FqqDxbHhC52sucdtkGa1j9i%2FgfiSBmsVcpdHSk5zNKjaBZh5SWNOkKNYrfWRqhwifrShKQaZeq%2Fuj0w50RfblaYsMM06l5xT5mWZEXU5f04XbmkOtQ11YRPA31TaO8iuCLVDYsWVRBD8Nt9tcbeH%2F%2BmaD5ZLnnsufe%2BDq%2FerHI95NL3Asqgr8TZV5nSM7GdDZGSqHUlxSsfIshXGzmeVkn5U0zPBAzEI%2BAmD4Akw%2F9bSwAY6pgFOxcMOywXQDo2jysMQfdVc%2BdhRytD0T5Xjq09FPTiI58IUIm1QYPMrypMy%2Bo7HPCMfbCwsHiZmTeaudIz86IU9LF%2BMtx2l7SWgpX4klh90efLHsRQs54%2FhjjOoqBZHXZC3ksYMc1htO%2BLJKUGbrBE%2FpdWGOTPqShhL7UefFwgzxHyQehqbsawyt0pb%2B64yZRBDBWYGGZodyoqstW92OaiLRC%2B%2BFJem&X-Amz-Signature=d724da87315b71127155c04cc60d4616e3962170e169c1d0fa9b3340b0974541&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
