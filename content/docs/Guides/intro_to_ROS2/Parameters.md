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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLMIZJOQ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T132150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDqsc9YRbjiuQDbxgJLfYJl7UVqg3I3DntEyt2HG7AjwgIhAO8EG484atBCd9bRIr8ykZsiJXsPT%2BeJJ98So8ggy9p1Kv8DCC0QABoMNjM3NDIzMTgzODA1IgygkQWqGHEhOEFI04sq3AMij6YqiIDIk1iBj4gcp58R%2BURUcnQenDPanUchlYtqo2db1UuyvwFBMbYVF1YskzqQl%2FGl1N914quNZO5VUXioM1v4T6qgTC9ZKU787IGKXx%2B9X%2B7oo3mzu4PwxIq6QOsayRefK0D3mo7R4oqUXYZhtCKmuAteyaHX3YQrECpwOjX3HNeqqjdf0zU5fj7qhZLxycq4bhL5xvyvaQu%2BmBqv7tG94maSBl4AHlCtFCK%2FUpPABUD5RwqitEb93ydkWe2BlNdqDoHMq2yeu3f6Oo7huipok9%2FNKRtudi%2BmUJlTpN7xTuqZo1nm%2BEUc7I2aEIoENlXPHtQjiCbZDPx8NPAOV4OuesQSQA1vzwCwSE2GsHera%2BDToHlXoQDuAmS2Fnp7rVVbCgeQYs6khWOyoMvRj%2BBDeIhkJwYR0XknZRZNq%2Fjz1ZsvXmtKxFnapHWHa1X5ZybKkdlx2NrZiq3tcmzUkh3bXEqWlG72dM1dfsQTwRXZ5ssu9y8bHOue%2BLM1ng8aqczOjkb0Z4FQm8Be2eL9xb6UxZLUQdsl4baJ36wGioWtA0qd9KnmODnr7CdzoJsE%2FeAg27AP7g34wDu0Ure5hFUVvmyDMJRFrjW8ljP9mXVHhk4yR23OT%2BM7UDDiuZfBBjqkAVNvLaGWJaWNI6Rtuo6TzqsBzvLR1W41bVFwu3i%2BUMnUeAvr7cmH83C7cDhprHUsIXkNO%2FubKDu3YkOT3KgC2rzJMu18ZvMAqIzzCMpa%2FMVO7G5qECcO4ZQ67jsOA7X5Hcqjldsf0xGmGMjuQ%2BQPkcsqQ5ijRsvs0JdMkx22N6nP8bxCfGPYVfV5RAa4nQBXpV90mjSLnf7xi7r7nQoA0E%2FnGt98&X-Amz-Signature=d708944012d42e215fcfbe1cc8f844f35f2bcc70c4ea46621e80dfa3217ab944&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
