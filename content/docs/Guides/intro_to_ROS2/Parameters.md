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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OO7RRUT%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDvgKY1LIO6tTTFoqWX1mBgQRS9NiHyTedMYn85LSoOewIhAK9bpRoXV9Y1Db7fW8x%2FeoWlM44egZUg7eknNSKW%2BszpKv8DCEIQABoMNjM3NDIzMTgzODA1IgxoKlret8QVp3VCrAIq3ANtRFfBWgv4LOiR%2FPoNmQWU0u21WBKwxlDqPq2XhIAIgs5tI%2F0XPkHdK30Gf9Q8rgJGQ7ngD8uHVtP8FQgJt0l0vjv4onObr3vKcc8JmhoSIOHcPNpR%2FmF4ln1Y0yiSAkDt7XLS8rHCarm04Mt0UGABvIOZ71nj9REXiCvv2GLJiqRElfak7h97RN9RYvxf%2FMVZng2dKJeiwfElLnXPte0JNT8ZXzkRB7LVmzxWyBNFM55W66uTpVcJhcyvFYnFb%2BsOvCUhssT6tqkiNl8%2Bn2OkBspkGZ7f2wF1nJTVJTdXaHA9v9qPl1jVp0cxeo8J3F5IpPdthtyPN%2BkMQo0HG2Igh8qioOutw4RrK7%2F%2BwZVdKXICfQTJYWaxC3tXNezhSRoA7SKBAa9W%2BgxElUTrxn316PCMOWn6RHh8RYJfphoAtKQgv8OoUT8R6KAKFsC2ofjCGLvlfswt4wM4Wn6olZgut55upObSTYI9Tz6b7bc0cq8noPtNFkGLC1dLdNy3lLONDlmMHPcxhOt5aTDqo6QfR%2BnD2XUwuzdJADzANGUSeU6Dch%2FY%2Fwqmb8ES1UlUkrg75p8hwfEJetINKfWRJwT3lhuZ2V%2BCJ25C5mq2ldlvR8jl0b00JfIf%2FroQTzDEjY3EBjqkARw4ua5DtssO3rkBUZKHSDmSZVtgAbSxF%2F2lZq2KZmqMDs%2BkqHau33BfQxzFVme21WKQ7b1Rap5keJ57PimsIoh0CP5Uf62rzQlqZj0%2FcxmnJaAnp5kJwMk%2BsZEgt4Mw6zrBBhwgwEssT8v9cWk9BxNa7C8JtWr%2BCJMYW7T71c1afY23F%2FDADjc%2FMEUbg18uyHjf%2B%2FamWPXnXU1T02EyHVGiAxdm&X-Amz-Signature=52a10a9b4ce0a3bba1268722b4299ffc104100d23865b423c3f8c77741f3593d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
