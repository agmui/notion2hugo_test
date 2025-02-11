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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635WMNFUK%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T061058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvYbBysB%2BWNeVUPoJtgHroyCmrKqrWbn3p03J7CFpKxgIhAKH2dJEa9UkMMC%2BYNp41aHZqx6rQTqCHeuEgRA5T3OCmKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9Pv%2BuGbUJM4QJnvcq3AM9Iqa7iC74mlcBcyoxaSEh%2Fc%2Bdc0ovWgLfkdphN%2B9%2FE3x6NEi%2FyjVJtsEtYlflNXR6guV%2BjdE9OLJZUgbmZtGWKcErxVzWDDh8z8lYpI%2BF%2Bu6gLcT%2BADQv8tBy0GO%2BMSbGMPTfrdVqr4SO5aXAFBk%2Bgf8I55NNJApos9ER8oGlow1geUfo7MJzt1WaeJPhyNRn5TZRX20qy7c7W5LEBMUhDt6iQJN1NSSMWkCOezi6E2RVSGq%2F9yJNBTtO3k%2BAkJ1TuN4Zrdktrm0%2BfDYTP6ICWx3%2BjcJbvOVnCcyaXiJ7MjHvzawLuAW5uui6k5V8BPeqjEYM2wdTyO%2B2nvgZCA5y%2BUr30DZDL28AfeNVD7h9RVvhc5iBP1UqjxrUdYjoDUVkIC4B5x4zdAiEOll%2BriWQMKbkISjItCp%2BGjj0FIYovJUCNFUE0F7t1rw2NYnQ3QxEaq8jlatf4wd%2FL%2BSY2xtiwqhGHI0YylfX9uto4tn9W%2FIowONUGzQm3o3mpuDCdxwrcj4CYcLtEAOd7bMiCsKl5DG3HUqVfR1XoO4BksCnP7YXvLsiPjj%2FMH3SMep1ys5AmsksnTXDHz8zjhcurHvfZTpFFdXqvLz7zEXhUnfHxJSbe2FOl4T3z%2FCs5jDgyau9BjqkAZ9HNIHmNYG5MDqginMjWtssus0wQo9SQtjWeIy1rupxLa5iAdc2Mys6CFIfZylPkhUcV3i6C9L4jZKXoMA5dlLYfdd9n8umY%2F7TuhGXYRWO3xinhEZZNLAxYyA1OFa7grA2%2BbYtzRkb0v4XkMCr%2FJV1ED4mFBcZfYmw1%2FWJdXjVJ1NxWu6aSGHU6U4ZpO8ce9KvAavF90RYCoYJOT%2BAf3Ndh0xY&X-Amz-Signature=d0432916795266e6b9d309041b7005b5f4e71ec426d8a26c47e039c3a79a6b48&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
