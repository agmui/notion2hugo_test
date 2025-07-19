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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNPWUPD6%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T230854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXTJ6XD5QPT%2FvXOoRV0LCs7np1zdUT4JjYFn4pq8IvlgIhAIU3%2BuTkofOFOc5UcoR7wjpqC150a3dJ0bKi5CITlwxdKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9ucWxZW5NYBK1UVwq3ANcSPZa6YtLRbhVekC6XfS74v4qtJoydVTKgOxqLUGqnNwWWyDZ0yGSTjKK9OqkQseCi07L%2BjLLhQKW%2F%2F0nodAwpvk6nci9Z1IS4TiuinQ78RxS%2FSoeVsQAPtrUsAjV351Oe0pLkiDcukfvpTOEA7amjiWBG%2F6s0IOprOIcrFdQZpEulqHKJfT0JA7siVQ9wq%2BJwoNb4gkiXdwyhai3xfVPquWsdajqUXn5Khm%2BvXuXdwfHkz6LxEjm%2Fba5CvtbzZdlKZTlUFF8N2HTLeO%2FW6yMoXomwFmgJt8FlMIQheRrEFPM9%2B0dNYN48XmORtot%2BpkCD8%2FQZ7yjlGYGyyi2daoXibw8nBgBS%2BhQezlsBcB2rFw%2BH4yyt4JnbK17jiOdU%2FJckuMpWZ1x1GbAqyfhXs%2BBl3Qh49JuoSWI7lzhxrWTmB6%2BZdTTeSHChnojRZTy9j0Y4bIdWVbRQHKXwep2TnWRtFnFM0pOPOEP38Zft9n5ObgL04KU9f9xcZfedoJM4plyi7Vpcdn%2BbaJrrs14KYAA4BP7XXO6gEJnHROM8Mhdbtv8pjlNj9t08GUPk%2Fl2Bh1FQzuelVH7ffIXVjf86Xu540ysAhovbPu4x4vVEnqXa8b5O1kuOd074jnZZzC39e%2FDBjqkAcTEAoEvmt4QJc4tsqXtRF%2Fj%2FH5YIaCfsV0wdKiipNCYhaIxvuK1pCOalSZ4%2FXVrOLq36S40IZrAohAywodR0y0zG2aLLSPxXLJp%2FSV41nvcIW35S5IAwXWuB23nEjPT2lSOkhOYhhSJt2p98jY5tv784EYgdZkdm%2F1UWxAmlGFKPXfIVS2skJHffIs3MRn8H0CKfYxG4%2BuaPPOUUqd0DjyJgv9f&X-Amz-Signature=b224f7bde48d67b5cdecd8d2e59fe037b94a9829e80e57d989397c51ca69285f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
