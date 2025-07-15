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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSDKFLJE%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQD%2FQcIhFRxKBzm3rh6xsBCkY23hHarVYD9irgzyazFHaAIgbXGJOC8gN4S6qnjWyNlRXPvPdZj63aAHLpSVLnXrtxQq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDO7%2F%2FyvE7mZ%2B8Mpa3SrcA3ya9gXKDm3syxgVSX5oYJosqt5CCFJU9guwxJghVpVfNOYY1G80GbqCCB6TnDOCOnu5yx8pBj1uyz0iHFIbSbM0OFAbUZ0b1T3mWyhYrD0s%2B%2B5TcdvUY9Eq5tfi59Tr9gYTpxGouTaK3ZoCmT5yBC1%2Bqd4bmsFjacCqwTeh0wjKfUZBnA8QqWVzD0CEfAmuvBv19hhYccInG9Z1Qaf6E8hlUcSxLxmDT8RxkoDK5lI%2F4NMrdrYg5NleCxMhm3wDxpOVw5YNs46UFcvxx3DHdLNXWplOewiS5LaOAOq%2BshbNqoB3BiPD%2BpuGbq2Ecky%2BMLSAdGCZ3zJqgiEohQXx26Q4ZOrHozs2Gd8cg7hvUlCZrbQaEujaoz%2BTZwykbsEaGoKPSqeJ2V0qql1fwgTXFdlALtcz5VWvN1rGtnWy1WywtmEUxsQgwc%2Fofo4iURPv3W4HhCh9lh6oc1TbPB4xsOOV%2B6ghpWwCuVqg3x4F%2Bwzkj9FKA22BRuWKlWcteEEBF6v%2FnGxrCnd9J%2FXciTTsPeTWQEM4Y8CRD4rj5fpgxuWr83c%2Bk%2Fwx3pGJE89I0icIjngv8FfvABxwlj5fe%2FCVmwizlWSvXMwdHnXyFxEEdRttOvU%2BeFjb5pFH0%2F76MJn22sMGOqUBicecHi3I1aghEW7Kz7CeIf8Q4ZOwp0C3bZDQFOZGEL8AHSOMJMlJL24orNVMj8rX%2FxL9AYYaUGreYEmP%2FVjjg4jT9lqimpzwHLo0IySbp3LmbvNcrdFXD7%2FO%2BZBOdt%2FoGehqGxpP8G%2F%2FT0hLaYtcOoa2KCw9q0D8kmQWROJRgnSzW8TgJzXXIpRJxuSrq2WjrjZj1tsRcNIMxaLAhh2%2BKViWPXGW&X-Amz-Signature=fbf2935bd174dffab1641318e9e61ddd3a35808c66f7ae0db966bf815b281785&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
