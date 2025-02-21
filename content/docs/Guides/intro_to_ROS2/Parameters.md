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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C25ME6B%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T100823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDi0hTM6pX92H%2B%2FDVLqYaStJmE1cjpzPnyPLxQ%2BJ1KHmAiARd%2B%2Bp8QrqfINJtTFJIrcLxdAqmWam%2FhV3nMtKFBocoCqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7uBOoSBeWEXJj5y1KtwDpn4mW3bq2aWuwO4EU3gVoSLPmazLMp5PuqjukxU4wSRhB5y7vgwwmFxbUCcgl5UAr8hyNX3ykye16Xl%2By%2BHALO%2BbXk59%2FxcaMWI9W0%2F2v6IST8MxXjIVj60tiZW2uGnHq%2Bi%2BhJWrooiINvb5WPuy077JYV3ZtmEHO66XaLLu9VqmIsRop%2FgDv%2FSJpDa5wCjdsbTU598XhDGKACW3yn5lRxnULWmtsvWnTgRd6QkyZQ0pnAg%2BORrWYThY2hyl%2BEf2SYwZhqQwo1FuBv%2Be6hbU1ZzHP0OxFvC5UXX0lvRdyoICTTYxz%2FSYWQwih%2BSLcY2w%2FfgyRq4aboiuHqUKRZUxW%2FUtqjEp%2BGnRmp5L%2B6G5ONqLrrIUnjwmk5WTbTtpZ9%2FEFCcUI7Vummpc7OxnRlPKiPQrhWrYBKFnupBaid8pLln7fChMdtDLARP2AMm95MvZnKexdvcvs%2FOiUEjj9d4QQdu0V43WAjxw1%2Fd8ehECRIIzaV1Udr8OcuU4ONILS6FF1Fb71dLSQHvTqR7BEkrIDsJIf%2Bj%2FRKfQKs05NU56gmzcLwaTNNBIR32tl%2F8dO4GIw2vfL6%2FZu5kiva0spOUaaOtwNDwC2xuvkP7pfMQctLx3I4wU5RuukMySE18wkprhvQY6pgFd8NJWlOj2J2flezOowgc9rztNVdLWHrN9LdGIvIJkRlwNm0%2B3Lk2fWsKlyAzYkjr%2BMXuhEtTRn0cIBcjZvQxqLH0%2B%2B8SerJ0by8Ywj86hGC4QlTHiov%2BmTrtBLgk%2FoG5%2FGv%2BMVVA3EN2A9iMzP%2Fi4BQQBFOE3LTn8O06Mljv2bn1aYjfWwufiCI5IfXQmOim3xiGWPJ2BkAiBZNgKujkuFD4mGy8k&X-Amz-Signature=a30863fdd90390d664a3145c70feaf58290d0c1920169cf701226a511b1456ea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
