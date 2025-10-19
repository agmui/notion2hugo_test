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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUWONLQT%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDci4hKqyUZBkkTgcqXNUL%2B5LJrskK2FHLVlPvpolk%2BZwIhAJ3rpmEt%2Bq5OGQGGBFVULIIowZHlHEdyrPBo6OdEfZo9KogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzM%2B4M3qGohNETVF8oq3AO8xzionOVNCPgggzOlvjjjmm4sps3i33x%2BIJHa4f%2FLb44C5bUb2lyJzut2kr8Q04CQL1fJQQtv7SPIgQCno7CWcFXPAd4xSJLcUK9rio35eg6agKskjr1EXbfaLb28WRMSmpiRb0w16vQ8%2Bqg%2F%2FlwtXEqkZHy4q7%2BMjA5bQK1Ky7paq3s5XViL8oyI3ebxqb9urwPyENJ1s72g3obmqW58Wu8GwjZdIGgAs%2BOpMRYIufHzbwkZY7W77sLETVeJ7aIePez7cElPorCebydMtdGiPFW2IB35rIWW%2FHvBFDeJacJVcqCwcOwujEpYzgDFtywkkYEFCpx6eUpxk0C9ugJDSV6UTZ7rC5icxKbKdbHKbSgnm0RLTcF%2FI5s2ZXLT%2FMWKaQDofr8cggRVts%2FVbWwqKUDXsEJtjsj4FkDtvKbZhq6cKxWCqN8Ojl8VWT0SNuo2ZXUboiUm7YGx9z2lWpI5TPeWTr95Z0kMFUJ%2FLi%2Fbij2g5yftwcVcLIx3UDdb25HQZ5VXS4zlPvyt8S5V76Xur%2B%2BAtWnevu197XNFB%2Fo6whyv8fw%2FfdA7zTtMhR%2B5ImTyxPXdYXhQFQURmLN0fPa7BkVc1HFfxsz8BdsNpoKHEaaF3HKbmqcENZqEHDCa3s%2FHBjqkAVUA2XBE%2Fzg4Ozi9afoCttxnr%2BkSf7%2FUAwvdK1qhrDnY6Tm3AKeGaCAvZJwQedZ89pvZiWPkFNulF0UUL7ZM4pybNmzdLQamn%2BDDkr7mFdtogfqKsd6Xkb5rJQNdJyLdHeIM9Bc%2FyH4t%2BBXGS%2BxKZ0DUYDQ0i3wdWBHHrfBS%2BDQG0VKOYhcq6KzpLh2PM6UE65Dfu8yh3XgaDiV7CpSNTESIeaFI&X-Amz-Signature=ce1d2604d26089728ca725e2bd6c313b4126f27ac0e1738019083607a0307242&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
