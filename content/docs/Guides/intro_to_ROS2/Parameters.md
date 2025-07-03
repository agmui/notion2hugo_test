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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JG4BO4H%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIG16vLDt5Iv%2FfkN%2BFwLbNTIEyHbh1ku1%2Fhh3VwrAWoNDAiAHfAMppgETH%2Fo%2FzfzAJSEuOLVN%2FQyimpIAnYOK6wXf5ir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMSMiXKrLUDkkqUxqZKtwDQWjIJMGUx11c%2FKPt3boFDZ4nQVCtETQTzKdBlD4Qd49JJVKqezSokuyp5laHZhLnCfIM8XJts3bek5rNWCxyF5%2BIodJmdxHPy8MuoaorJdo%2Bhb5qQP%2BJ%2BSKi35M%2B66%2FlZTeqHnMyyBGtEcXpOqKQ5UDUWRsxDadxaboo8bH%2BpJI8%2FYYkuoo08k1pystim%2FZDUaYLh5sFyDxKEUlXT7YKQLBNOjbKMF1PWUCEB3umo5J2FjBxTykaSDRtZGf8forqyE%2BVVS%2Fw%2BjownQlLBra9o4bh5iWiRmKWbsNq9VB%2BJVFV1EV9vM0Boc8Ve79zdj5bEtyQ6x1Iz8ALGICVGxw%2BmRchN30lryJ%2BMyNqvTlNWOLIXTzIxVEIFZxXA2AAj3wVoKEhpHoZrLuNmWw%2BgOVejOQhHAtrw2Dfedgrr4buzEAQhgwgTVYZyHyDvUUb49j6FSEdZ2hueWmm1JUqZx9%2Bk3Nvw%2FAjaOrv0bIAGtsclhu%2Fi9%2BZ7G6KiUfp7ey9f%2FmDFD%2FaUzSUo%2B9vZa6CG4Oub%2Ba3%2Bh7c30wpPoqbWt6z9ThTQ8F2eixJwXhGFczT5WPoSWpywUf8FwAUHY1WTLKpMORDQKr9NKO%2BBGs8IDDo3tCFMwVZcW%2BI%2F%2Bql9AwwyeSbwwY6pgE%2BdD6d0GQymj7KFHBG29f0WBKhMg%2BbBeB7q%2F7kGs1JbVIwUlcbcvpellI8Zee5VtyRlJCjkwhBAXQcfFUtVwsqMUhkZoE81aZ5TQ1TdOyO8Y5iJQTnmeiP0pvgI9iAB77CU7frBHwH9Dwt92AcL6p46Mk2EJUVAc9iV7K0RskgqzxpJ3olbUyzEpC8KW%2BOUghOJLBJvp2bikBH7qMKdSoGjEfboUJM&X-Amz-Signature=ffcb2caf2edd1fe60eebce205e7f575b2995d90e728894ed5854fa18159a30d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
