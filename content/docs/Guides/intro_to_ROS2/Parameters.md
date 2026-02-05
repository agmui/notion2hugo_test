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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH7HSAUA%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIHCAttTC84mXHt%2B8Vz8GdDF3X3zMA8%2B4Qrix6Qn2lONNAiEA59QSQZcP7eyTmNhLX0Z4zvNTeTw3eCTbDJPMOhL%2Fw6gq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDFVYAft10Kzrs%2FQTCircA5ILF%2BOQe2geBxRZy0%2FcLj3lBUiWjioum%2Ful1IBNDgsToZVniNF%2F8HyXxbl369V9xqUFyilmoBZanU%2B1zu6VHIkJaSSkm7AL7fgVj2T8lLiZNbcGWC%2BiOGExAAndYrcvOCIFZb2RXtC5op8g7WXJB1yU0ha32FbLDCiLhclseevMLa8j6xia1JEyw2CuxP86xQh3f8vemZtt0Z3FccTYPHCCkvdhuqt6TsU2747q1qiLdr2CF2DXxxEqFFbqSGITUiiAPMNJfCft7P%2Fu%2BoR1b7LOSBHQtCUgCpghUw%2FOAK4CuhsbtkERxFMmknV%2Fy%2BdgnErqGr9PM75fCY1bUTnI1zSfsPjKTLv6Q8CkOgcxcaZxRP26OPIgBcUm0ftyOxWppthDaub8TbjtLUqH17b0yP8MfnBpEWQkJzsTyamfYNe0Vu7eCoVzT8krjDjmAQ%2FQLkjkq%2BBlacTo8fJB%2FPsbcGAK0cix4g97whIIIHFORVthyFYUOFpZTINaAZ1%2FovK58Uqx%2Bv8huTmm%2Ff0HYr8gyAbEcqQDz%2F2nCwCHqNSkkAfFvAPRXw%2FDfOk0QDgtbDOIja0pmBokbpY6QjQ2EJyCi14pEDxAOzjHKw%2F38LCR4Whg3Q1jAXSOWriidBmqMMHOj8wGOqUBFZZUaPTfByq9oExZLTVP6rpAugv%2FpjgANGaCk7bK5iFsh4eLb6er0ZdGtqpndlsIs2KLPDvoBB6R3LzSQ7ACGdI3BwFxADmNkE7ft7EIK5j%2B58qHloXPzsq%2BkUkMbCh99NczVQFdTAUyWpLkIZptSl%2BUthbLaPDVKf%2Bj%2B1SyjmSd6GI2%2BrNJqDqhCZ9vYiNpYkn0HqlxGA%2BxJHDA76jEGQnqrfkl&X-Amz-Signature=f73c81fc0c47500188841a51fac645cdf170819ac65fd17bfa750fac7dbc0751&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
