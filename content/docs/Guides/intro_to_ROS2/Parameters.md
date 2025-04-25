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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EU3KQQN%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T121511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2F%2B2qRACziL5cMXltu0naMPNiEjTMGIkwpW32vH4oVUwIgBGvsYzutnZqmzdqztvwqXFzKI2VhywtRfRgdyIacjy8q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDKIw%2BFTAfs8Vo2gnLircAxZNEC6rXmsxI3x8aellqcYPEOcbtM%2BKIPOvQ6FcncGCxX6Ncr1%2BUGa7RHn6fvToat2BB4RJBnCl%2FaBvc67CLzEaw476IzAjsFR6ZSqkLnJ8ZSb8vrc1Ay1brX%2B2yq42uWXdKVTOWKay0fQozAxnb%2F3cWJq3h84FI7Hs53lMJDKkdbOc3PwJ%2Fj9r8pYOqOBfFgkGFzUTTcOo4xekdUG1IJyBqwc384ms8OFpb6WM4zIp19RZzItIRNmU0iaKMMoCnDgIzVOjkhQuBUtRIDZjJXaqqTmOcktutURUhL0kHYTKrDJ5jCOBu24WP0aDXIhTxpVCVnI26iXgL%2F742mdxVK1QMi5YlH155rxmJnllV5b1VhETy2Rcbq903ooHBAg5D2nLBFwytASbSK4pA3GKSI7mhyHaGtNx9wCDD2q17GIc%2FPe83JsyfnBgzDfOxZbj%2FOU1UEREgeceE2ZtqBo6E2XsBOB8nZWLYAPk1rglS3VETXngQ9MXuskoMZtQ01al87uMf2aSZPzECZXSw1UdoKyUvXvVjVZy7AsRKK%2Bh6qe9CsRlur6plri%2BZQPjiB518IVUZMEG8gXIpVxVEJqQaKcUkcDyQu28%2BROYDJlak%2FJ5CgwGELjMxFEw3P%2BTMOrjrcAGOqUBXee0rTQzb2Tml2jvDl6PB0xw4SNmplVTlo6WACN8ZdyO5owG3tA%2BoaPZTTLbo1x6ssilLEV7lGympIPrLK7b9dsQUznTM8OgBGM33eqj%2BsvGpJORDvLz6WWydQqr4DVbFTm0P8cO5KlMJCJs9Eseyeol5JwOoFT4joXuxkoI6gN7CWYiEtMUG7P1hs8iBJcSS2ZhxFXsatA9Gq45NcE9uMxZQSYs&X-Amz-Signature=cbf8ee42926b247a70a92151806afc852534a498e217429b5ce7a45596c32532&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
