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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635CFLHW6%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T070940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFvDvn1Dbxv8MI8Bla5DxI2pK4%2FPMulQ%2FjOEoIe6F1JAIhAO1WyLiDZl%2B8sGSJUt8Sa8LChOuXMeYW10VxWTS2S4O8KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJp0CHgCOcS%2BUBDqAq3AMP6gp4L8ZwG7MARlN5Xaa%2FAfnZGqdqNUpb7pRVnYSvGDowBKjXk%2B8soWCmbgJn2wKbXpkaQLPNt%2BfgZv8U19u3mfYyXE70RoFR88kDFyNwfbqSLF7flfBOgoC9kos1eZICVLwYjbRJNm46SrO%2F34ysjEzJrXlcyzVlP4igG3WSgajGfZR7vCmi7EJBfrZXs52oRzx0UIzQsj7%2B4HAt0q5PlSfFuFJbqcga2IMxuH1h4%2FSslBBj77YMhdDDOn%2FrT84Ri4vRu4StmzX5BIxhrfOVKtwhUzG5zrICkRvoJj%2FLmxvvinI5u3CwhWe%2BHMRLxc%2F%2B2Zlrf6RrBpxcFUpifYqYM%2BuyxiuGIKi0QwzZr%2FR2nnRkAKYXTBEV3%2BMsNAHAIQvbBev6qFaoeVVnC2jEm4zTjbu4PIC5BXX6c2mw3Q7WPzadKWoSNC6zzC93iIMBB3v1QJqpH5dUy8ZoUtwreQNtAh%2BL3jzvwI5K7qZcg7teuZkdXGBUb0YotOc7kUY6MeU9jn6dYnoX7E0%2FfmRyarO38N%2FSM%2BdBFf6dWOC8Gczet1F9k0%2B3fRBm4nuDvhcCmDxnOz6UBA6Arx1j4OsgHqSZbV%2Fu8DK%2F%2F83TLQv6%2FHYV3X1JlbDhyeTyoFcOdDCqxrDBBjqkAW3tmhJyhWvuMs1CMjp0ogqNcWCnNniqjdai4hzjA40U126EZEYpHIOQPfXXB%2FdxZ11MeM%2FD1crjqVvK9%2B7sQAmY8%2BWZdf1Lf%2BXekUc0gkVs3t%2Bu8ttdmhAQedYAf%2Ft7gFO37XJPfLdQhQ9LAHHU%2BmsSLqXGQqxwvm%2FxQkJppDJiGd3OU1fIwVh4BgbgazHxz%2FRPjTfSVaEvNzkNsrCC1fbHD9Vy&X-Amz-Signature=edb85f8206e796b0c6b4af7a977b0a3d9b22c009ff3e5a1b36dc81d77fc1295d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
