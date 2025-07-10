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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5DPRF7I%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T101022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHXFXpfuLkrMO73DuGokmSwQYbpId0teOCYpT0mATLbAIhAJdoCJDpQsMSNVrwcOJClrVmDHijO5l04z8wLj0pQ5Z9KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOXV2HSJSRVD5UEoAq3ANK7Bwk0TLDZhVaDXWmh8lZ7RJwE1soMIjViDbgHzCx9Jq%2FbBVJ%2FRO73EzN0jAa%2B8m%2BcX3yxjtl9SuGlycip1XcRmXdoYbHoDENJXuvgGV2KsHaD%2B3H6MiFW%2B8hz9jIL92Ag9Jn%2FpSLArU2xpncy3BU5I8a3zmTQ2PQEneX1r15knhlUD18GQhDh13pwCDtmtLWhXQMe2EC0I%2BEc6aBm%2BFZQbL3pH07eL1m21l7GccE%2FK6Ne0KaNgYlIVhI4k3VGdNdr6S0YEzCkz7XUtjYVjPKA%2FzF9rREHJKfEis8t3wBaDZEjHUcvqx8Sor6P%2BTl6uUlID5rm%2FU2YYGqOHzmw6slJ7IFhHZerhwytcaRj%2FrxJ9IDpKz%2Bj24Qlg7GxFKoJJMaU9cjHFv%2FBUh2zu2gw%2FZCLkoxvNXbraVCeCQUAMeGlIXg9WXtyHZXg50P2s1iQWTn1wV%2Br8VouCml9n%2FYGOPnYKQQkCla0nEzudqvYDvnFGi3XF2iE63%2F7cIg1tn3tUTFyFhBMz90pxZaXylv7MbBxHZk0PbWxUO8fIdXK0YpITlDwr0vi534v7fnqS62xzmpSXtaUHhIXCABovw5DNHM%2BaumWaNY50da6L%2BjKOze0RLYszCorKv4gAmA6zD5gb7DBjqkAUnmmFIngeO6K0%2Bv2Xjb4gfREgf27YBu3IZIdF1wjHKByUMUhNRhKK9XcJnrKnG0cPOrMFZvH6YQ6B8saFTfrKFYDSIVU042FJ5%2BpBvYmxVSXd6X8ndyapV%2BAAOFZR8CvJg5vLoSqHxFzNbWZh1B6v6I8IIaSjEe75WEt8UjNW9m%2F9E4Nb0SOTv4eE4mtLPm1Kbv315%2BfoTT5lWzWnqf375fIJOb&X-Amz-Signature=08a2cf5fd7cccfb34661eef00a1273caba600674193f1754afef8bba94051ee8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
