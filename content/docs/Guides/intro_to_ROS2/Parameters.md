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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDBNAZKI%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T081033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIGWvsJBFtmvNPzZQUHU4iD3S2iOHohE%2BqY71s370UPo6AiB9nuouicqigU6r2aYXPAbfpWc8%2BlwB0B1zcdQku9Ks9Sr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMt5cVPKkUmo6SyDZ4KtwDnkW%2BQYxrDF7KLB13EIgYjtkodGXnCNmBjJLNjmjZq7OaOjme4twYWPgFccaZ74DIaJtZ1UzWTTKiqDJntrPBSE9R3IH4Oyos4K86OSNSHWO%2BTsg4z2xJrj9zAO2XybvuK22zZAg9t8EaYdiQrnm58wa821kRrJk8FCENGMEPibUeCvMJi0esZ9zrZSq2oRH82YulG21Nm1Up5OskGp2KnGkgMe6MDJCy50lq7ElomkQBw8cqcwkONntFbo6dwWCVWO54OqrWeylaFjyJ97i2gcC1a2oXF%2BqsY193QLaI7JxIEp%2BUNwCSElHs7ZSo0yuGpytXCn4rQXYefvUpZeV9Otj0jAOhn%2FZfvfHFg%2F15rYCNlNYqz56RPXQ%2FncaXsjiqlSW8Rbshqu4VC0wz7NKzJy%2BvlSsvxa%2F9g%2FCzxmwp156z8fBWtuDxtkUZ1Y6xeAyX3pOzLgj7PpL1QwseTcZbO5LUwHuqhDotAL1PmwYmJqnTVezaoyW2t4XGtT%2FnHwSvez9wIpDE7fNPmQoPYOcgp%2BwCyaw8HoZNQ%2Ffgw7e4s92QPC2GwKqpUE4hi%2BlAnsRvxWQvrF9jaZ%2BedE%2Fh2Pkcld3ACmESYwq0b%2BWRSH5kM34G2Uxuku%2Bp2JQa5LEwgeq7vQY6pgFOB7eGeMT18qEeguV0fPv4KByA7V%2Bn%2FTwEKkvqmPe%2BAov4A%2BKhhbYF8GO%2BHAt5BIKXJS%2Bp2DMSzSSOgMl%2F6YGy2JrTp20VE64LA2JUkR27OgLOUobghAlxNRRFha66zcNLZySCrN%2BjlD5sMH7EPSvm3Gc7EoLK%2Bw%2BRNTnpdNF6fyfUmx8xS4V7hQ2KmUqzm%2FfCfEEDM7h8zvO9o7%2B3jTSfsf1BZIlD&X-Amz-Signature=bc15f9cc005d58758558ad95c9a0418c8dc6718cbd61c6c0c422ce130110eab7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
