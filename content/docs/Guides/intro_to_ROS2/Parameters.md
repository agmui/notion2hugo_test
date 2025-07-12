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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7GC3WYE%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T160943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGcknIwW86lXkD1LuvWZpXNXP990J4pR664pEBe7YH3SAiB2G%2B1KHnU2v8t8%2BoeU%2BV3wjMEMdH6Q9sO2VFBblmnCWiqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWricQbYp2ZaBzXWvKtwDtSzidocm5wDdVJrqi%2BwSoqWsSUvbW%2FhifaBNPFDrefpLZIIFJhECwP8J1jq8vyDUpI81IJ7sZsLCQOWx2gI2J2%2FArCZkqFhPXnIzEeOWeZ%2FEzAXWyURSrk1%2BOdo6690WYT%2F6jHASH0tQKy%2B61tJRZtp0RnsB9dNWv4ik4R2%2FBHDdU%2FaYME9pG%2BiUe28LmuJlM9Wh6BSMUw6DJtz0CU3wC5c3l3%2FKDTZK8HKVu4nLJ8sAK0kIZgwvv9EganLp0y7g5ZccXZQOilkjYIj9g7Xg%2B1qyiket2k5sn%2BAiQMTdxGomx%2FlYq9vCgvUw0ZMFEnKUDscYIhI%2FeaRacVEcoE4ev2jhFHdSiG3yfcAA6NUjIhKvzK8Cx9SMyasihQWOcd4LUZ7urZBOZygM4Tbo8cR3txaYwMOu78voi%2BWasEciJR7mW3ClSPViauTYf1TV4mXd%2F6R%2BAEk1KPpLKpd1iCKlv%2BbG9AYJ6upK%2Banc2IKpj25x3AbA4EffgD7zuP%2BJOI5wkDHcNwcrwQCmoMel4JcjC3T6XxMYYtRk9DQw7gLbU5RFyC9D1lw9%2FEijI4WkzU3auBwFOWk1OmIHOtMRLQ2GAou8ceRGC6YNr7F4mQ%2FYBTkldwVovS4iq%2BOaXH4wk%2F3IwwY6pgH9kWK94MDIxLr1GdtCUzuVpoOCQy%2Bz%2FYIh%2BmaVVF5jGw8bzOw7F5zjOG7FR9YcCaOqHOBFAoQyrJNt4FTIafCxyyJQ2WUuLhGFq9SeCe%2Flfds0tx19ALwz3bFgmmzY0FIXQ%2BROA%2BgJlAeIpgR8dt0hgTZRyWTm5FjRoIdohLktp2jkgn8dDKISRHitwHLZcffoL%2BXh8hhmgbY4XsrNREs%2F3tjFj30t&X-Amz-Signature=083e2f2b679c16f55259b39fe622e265ec9f569cff07a17192139274bacd78ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
