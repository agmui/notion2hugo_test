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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSXSGUUX%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T034344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIAdOSFKz0dlp%2FHAC7uyQbVH7lw4CL9kFeGZWBKHPU0j%2BAiAvV3YW%2B6DDyMCqwUjdxhIJAzYvC5xEWjmL2V5BIlIOoSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMBgNkcnqVa0aI1qtdKtwDgSja5efKnIzeowPc5VwXrXw6GA1lOTdpHMnDzBxjeadM9w%2FOBK3tGF%2BLR9Lt1jyl6NmQaanFPnAPbrPaKYSibezCRalWH4yUn7iCX8A0A0CHROTXozhLfmvzOmbffJTnMeCAY7cw8dR0jD0%2FdCM%2B1aPfqlfkvvhB6bCXqYphtCLbNndmHRM3S8n3XUgvGTaVcR3H9ODnoO%2FGCMrLLosVdqLiaNkxJi%2BS2SjEC5A8U8QbosdAYPh1%2Fpiz%2Bx88LYfIPGpYzEDgn6rDXpZP%2BJsXwq4RisJqivqEuYRppKxJ4n%2FTW9sibtyrU%2Bk7uNId%2FrYdteFjiihLchE%2B89Sdu8Zwqjjt229tHOwejpEwMNyOLcbnucupoJNLQvbOZDxqj24GdANcBk4Q6w9vR3NRG9VVNw9AZF6Z8f5uR5gXytp0AEtOGEmgn6yrqx9RtC7%2FzoLSvYM8AdKIsguSISNyc0d6jDs2b0uEQBJAnX4SL53xuY1TMSWz8eTPYEn%2FAJrS5lRnV0Yu80yWOBqnO%2FPMMJ4oW%2BUJ2posQBeQXK%2Buml6YerTakxeX%2FYZXyw98e0cJ1rDsHWCRGr%2FS1w9Kpv%2Fl5ZlyJhzOlDR2I5x1%2F4NLcsTYIFwf7mWPaxsWOfQTBzIwgMPtwgY6pgEH%2FnDkYuQxPVxOr4D%2FH5pXzu2n0vBT7lEtynSVzMNm7zgjHrhiiTd5DTAQkhFmFfzuBhUUwljeTNIANSYPXZWdBQx0ldQWaJ3BFMhWWqu%2B9RdpnfEobf7jVDlg9rhhpkv5NtaHOavvai0gYFmvImo8jJo8P7GevXJtkCcXOaEg4e%2Fn3f7kprDw%2FC4XhsurFa36y7H%2FOxRyBEcfYAVqZ%2FTBOFxcxE%2Bt&X-Amz-Signature=226db758e342c72f6840e055202782cd88301cf413ce4ac9dd6937327a97921d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
