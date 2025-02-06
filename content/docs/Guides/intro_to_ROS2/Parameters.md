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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667GPHXPO%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T121402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCoz9LxKUm1P9THMrFWfvDEHLhYF0SJHWxCZlNDaPvpUAIgIB6TNcFVFIur8l0M8sn%2BdYAneowx%2BRqtxqMZDUcib1kq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOuzkzqXbjaBnQeCcircAwS4LRwb7IoUxRffDe8GMn9cbtz8oEoyJ4hZhavWNr7JFbEhhdap9S4PJhuN6Z0HzfD9Q0QooDiaLOW43pBMLXZMml1U15lbAAMezro1vlHqU3nKQ8ltD20dKPmCcGNcFT6W5AeGMmotqASr93P7oqdu5bGFIJKD1nEn2yd3VwAZ0dfS1ouUCCkXvW0WRz57hOIvf9jTAX9lInBBG2Yu26qG2azEGX3tP9qQ%2B6IswubDkPcU7U%2BSf7J5AkhSuL6Z4yMJ8gzNK6QLvzSpOXfFSJWh6sJdoF0a33uRGwkIDoq96jfHjQ4yjXw4Oj537hAl34vE9ohSSzMChH2A%2B%2BJfep%2BFQIv2afNws9KxUhdpMzKN9VuIWnx85kMnrVeGqXErgxqqipbdtR7gglIgR8%2B8hYhYHwG1CiMYlOEArnY32ZLMfRUyCAdKIPKlED7WuGQwKu4vYgTJi%2B4tSiEpO1bMLdK6Yrvd2gc4BBMl6woGtDm%2FF%2BSXoQINV3MdhmzZkwFWoJwksBv7tD9DdrEetS8iTKTkhmjZe5PHwDXAAih0%2BsUPbJOmStgyzErYNnjtLlkHDlUUe8G8Xijku5IDQoqiq6qBNq8qxEKsc%2FWttFpIwDFsMEI1ruVj1AhMMHklMNDFkr0GOqUBM9rOeDteba3WdLtd%2ByGYecCyIfSBpac4uDz24%2BcYM4FGvJHH0HaYG6wJ0jVnia7lGVphw%2B47PB5AQYHx98FrKtjBlW9N%2BqoZXaKyYTyJYBV1cODjQSqg4vxb1FkOO6oWq9bdEL2B5woD97ELJ6oPL8d6EDgdIDcQPU9u6zgrZtkvt8oFn3jEp6ai%2BzvZ%2F8kX5Q2D3DuTUCAxP36exSCF63HHNlZj&X-Amz-Signature=4ba392f948b04d3e877b4f6a2b4602c87029d96e264f62817cab2dc36755c8d0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
