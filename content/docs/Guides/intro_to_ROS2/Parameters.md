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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M6AJ7YX%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T100933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3r9Pxi%2F8I033Jo7d3d6JxusoI6SEtUQKfXWVdCuoe0AiAqvkheo2wrTQUI48mhLjBWuX0omhDPn2rtLq%2Bkejla6iqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2YcrLHrmm%2FbUU31EKtwD%2FpJ3CR%2FNU4iaAKfIgML%2B9h6RYrn%2BZer%2BvY4wqOmRg5KtkO5NCQjDAS%2FQi51PYfd6dHBfF2Y9T5ELVL90ETzuDHu1rT5nuOcYS%2Bw0OpC6FyLqV4L0v8TPxyvQ26lqZtwLw4KDN63QYWjLPiBMZYtC6jUUF6yUWjvQtIuceVHT82eN6ztkWotpnKyqHJ5Mt%2BV4DgOA07vTB0JcbnwYi4%2FsY9tD3UIlvReXcjRaH%2FfECq%2F7mlbm15s7tAfuIFsNmGXbMURHnpm%2BwcNm8tvj5dZ14dXjiII6K61novJuI5E1R3KyTQoMOWZCkDdRBOXpDZlT%2FiU%2BUKArMl3DulGmprv4Zs6Z9MXcuolUk6zqchl18gs%2BkUZ4jAZjrCc7T9HE0tUqNrhYOl4wJ5h5PsmKEfAmS3mwNsYFaHTcQUbCdPtjVbbSnMqHjEz0YJGrIbdo5w0LUyV4FeqyQRjcgyqkbA%2FhHnIsbKIgyVK7Dr%2BKXyUOzUfSruObZVM0gl7QAaoFRn8n%2BVP54ZtI%2Fo4n%2FS4s7ILPjG%2B73kBegjX4Q0shRY4CWY995DtKl7xDHJCsB6rgwLQYPd1i2YJsxzWq%2Bj8ikUbHwrkRecocaGoNQf0lKjJsJX6IBqli6PeWWfBcLNcwrMSEvwY6pgEYfVlGt6ZFQMTGCn9RETmOdobSZmoFyiJV%2Fy8j0x8VKocGZr3I5gQDC8fj%2BkPzgdo1dOuLGY1W56snt2Nk4G3DX53qTLbp8rQayvsAgPz2xAceWC%2Fp7xSX9G%2FXHwblVQhDeR4J06e5IQ1lxukvQZg2pkcIpazk86NHrtZMhAYib%2B3%2BsR%2BCJlFNdBWDHvdhT9ipKDKBjnYdu5fZ8Lo%2BgqubMiRXJ5dV&X-Amz-Signature=0f3c185513d389592199e4ebb975d0a8726e2d6e611585fd5d9241dd809d62b5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
