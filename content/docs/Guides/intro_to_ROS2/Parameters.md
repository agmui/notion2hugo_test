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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS5YOV7C%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQC9sdNm2ZqfAEmyuOYKyZJde%2FyIAuUKPt3N6jm1HcP5PQIhAPGNmNgYhjXGgoS1sOQd0R5ruZbAQNQAkI9VObcNqC5RKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy41plYN3TvUqDWoC8q3AOMJGR45sLXJpnsyMWu%2FHJnlEKdgXhD8V%2Bgxfkr1rXGJlJTD6Md1ItrpwypyA%2BaUOolZzj3Ww8jgBS1nU2Ylak5%2FY8iEQ2wbqnrJlzVvm6lwK%2FQbfw8%2B8d2GjOOz3KBFgOT5PrWiXgWf0EyqZeSsqImNypBL7P2ErdIng1vPhaU2UQtZVJttpQ0JxoOYR1lejwPSXdaeuJw4CwXB4ZmL6Q4%2B429Yg1cjm9nmWd%2BA%2F%2Fw5nvJLTkv41An0emprOglXaeHg3fS50uHjJn3s2EwrEcMnwMUsE2Rsg7W%2FLFM2IlPtiLMSvdbuiaf2mIasF1wvV69H9AC8fgWZa3Ub9aS1nHHROLuYMm22g3bMLSLjHzp1fkmVnV8SHlGaQmyQKXBRZZVtA8zGPEPnKusLA6rNA7xkvNe4UBfTRJCEMJswmsM633OObYms6%2BAE8jktVkVkMqKGw%2Ft9Lb5KMKwyQvc5OnRH6f1j8P6Qobb05ML6I%2F2SRr4b%2Fp2pQWsFwuD7jceHcYiz4hsUUvDDEqwJr3cYE350fNqo0nB0SRhSvCjzWvSlzGrIocsALpJOqkR0XkDG51RIBZXcsZiZShPEqj3i7AveN3CbypvWJC4Eu6OGHYhTZv0PcoD5zTTQMliWzDm%2B%2Bm%2FBjqkAZKcpRfHILeMLjrDC8WZLCJbKLCqYhQaep8wml3VGAzE1jBvbcXBFGTlNiOzZY%2F6mPvrj1NCjcOvOheyGnkAIpZd8tRB7%2FsuBJU6NLNC9vJf2xc4hSlC%2FTjtuzHH2vxXADLg6VfhoRg2n5qBFsd7cu9itt7dVDRfdjjb6CiUu8XC0a9tEFH%2FGSVe3utJNXPZ7qy54I%2BIo1XI5Rki4I5pCvY%2FsWsv&X-Amz-Signature=9a5f701e394c996c814060ed8b49cb8feabc745d05b358892bfc01e8eb4fb581&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
