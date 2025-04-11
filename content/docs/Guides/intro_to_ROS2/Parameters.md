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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHLP7SJI%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDdq4uicR2EAWiobi89cMkEq7qdXznvycQ8t8pMAJyUUgIhAJQJxqKZeC7O4FCaoVwU9qpo%2BCQqgbmz7yCRixxQ0Yb3KogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQmv9BZnNDxJDKuHEq3AONqWsDC3deY9yTSlF0MAkcA6NBeYxm9C97GttDcTWpblqp0KGHAexOB2L7O8bjrh8kGEkRNQCxxaTbMfcz3I%2BY3OOdWKu7iaVoUvGporK5UMDw1nrHtqCqc8uJFd09VAeasmY%2Fa8KRFCSfF2T%2BOOkODo3VylxFOsDsCw%2FK2mPFW1pLTxD6%2BElSjI1BnRJlJJHFiYC0sEL5QfPOez8Rgn5Guk%2BRQG8QT8Aer80zvcMRwvVqyAv5MiZj%2BsJJ1LIYCUTjLftR4uE%2FHt2wGUQwqJxSlY3rz1TWIiksb3Qlla0Aw2uCh4Pi%2BSvQ4eXls02FXcPmhmvNgpHN3lSni4Ykadu0PL5MWLsDzy95B%2F%2FbBtKuYb6VI3aA1bvTv%2BVAX2WU02FkVaYYGK%2BLzpb8Mlpz28eQtzm7kUE68rttI28If85H250Dn2bOLJbAjCN2y1aucj4ENu5CaPdOB%2Fc77RUxLj%2FFDjxqXAIF9gGmkBl6vJGI0rkPrnh%2FQA%2BgOWb0BhyIin4xLpPvRg7%2BAibLD%2B2Sz4LNNhr%2FRxPWG6gOKaAgheWpI2F%2Fj9uzoyfooIeObTmeHU8hIortSaXOOJdPHCc7x4qmudRhxR3dSMCYILSfI2IgcDapfM3dpc9yOcFmKDCVmOO%2FBjqkAZZ6D%2BCHEobbvnbNt3hi8yFydCk8wADGNjK9phzLwzex9819S778CLFF%2BVMP7Q6RKXWyeeuW9hyIGS4xJLmM1uTNbUxdmQYwFmvK341T0T6%2FrdFM9lG%2BPgbddRyukrfKZHC8Hz4WRHjTkJ5igS7kXXuGIIZG%2B5HSjuEgaWPIcAfUZcCR1dw6wGEgAr69N95BtMQpKMFB%2FkavJNC8H%2BtKgBSUnXtS&X-Amz-Signature=e9cba6f8f2dd5f1e0d0d9ca0d58a1e4e1fc683a65b183b2a50a476cd78b1c2fe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
