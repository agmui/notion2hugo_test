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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTML4NDZ%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T150932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIBwyF6c2yxCIP%2FqLQ%2FJT7HXCRv45i8A0zigeglWWTeWtAiEA%2B9XGMa0Nq8iXO8%2Bia60sIfuNyzdEE3TAdqdI3ArFs1Qq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDIIQWAgkp9HI6WJAmircA6l36UdVWB6%2F%2BUgp5CndoQgHCFJ7nrSzxffTtM0gbPBdvJKn3Vcz1hlRosno5PzaY6%2FQ4VW5EcDwqnD1XUS2svv2g9e5IeiEKoxkYVRv5yuPzPYQx2cqpc%2BQg73CJExEh2knVwpx0oVJQ6956blihBr46wauhtWf1Bcuk5ZZAIijS200B9rEbbH82KyEqiNqi9hGauRfyjkUz0dd3rDrt%2FTipIy1glkbJ2167vX88hLu%2BMVyRFEu1DuZRbgUiIpdj7CMsnKBrStb0WGTML2gfdzx0O8%2B65ThWf3lqTVZhK8GPmRQ7X%2FtvByymLujHh6BN3Ot5TN03HpROPb6hnaIwno7lP7kHiw5svmIzu%2F46eWdQ6aMpiQx20xXq%2BSslyrAI8UyfHdBN5Xa4%2FFxIBGHu5eBnATwqrfiSDBt7vWzX2Un7YnlL4qoJD3DGd3udXQ4YLW4ryyoWvlctor65j3B6XHigly13oCSTf8iJDY6e%2FlHGcvIvJe5Y%2Fvs2WkQmV5qjLSm2jXOxUJsDHKsnZne8GME2f78uLymEtISkpUns4gV605OnEdk7LB1jP95QndDB0j8walPoUFOe5cSQ%2Fy9dz%2BdeYFqs%2Fasm%2BgrvkLQ%2FV%2FCFvwqtQ%2B5SHIK232RMKOqsMIGOqUBU888%2FM4a8JRPXbROcgObQ1DgGHbbgXJEs6buuGA1ybG%2FKJMBZSQ9qpHCJ3saeviQDyrs0IIN9eKSG5HJNliFVC0VVXzIKx6JYLUYQMek0BEiLFX%2BgTZ3daxE2HsQzN%2B5F2na1CvXfe%2F2Tz5OO39oSnQcdFmE0lMnGjI%2BF1J5D2Lb9lFTstmneJw7yZtQFMbKG4zwNguS57npxE28CudReGOHzJbk&X-Amz-Signature=ac030ff8d31ecca4f1d91e284a3a8341bbab43e9aadedc7eafb7dd5acd4dee16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
