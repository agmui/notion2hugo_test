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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LKFOCXF%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T181009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnpOyxtcgj3%2BdKJ9piDsexGTWIVmu2qbsWFB5QBnNjGgIhAKjw67ZPuQqI57d4K7o%2BzqmbCY9mJhoKFOOwW2xO5D6cKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLil5ukT%2F4m%2BELwUsq3AMJLXB3H5RfCn01VXJrOSWYGIiNR4SHCRYhGHXqRjZDKLOMGl5ZlY11OfFhUxMTe9Fgx2tpaPkcrrVM7v2kFmiXHxnDyfaOB1bsF3IOSWWHyMhT0nIJhp6XYbeqEwOhcCTXUsXiLYU5DloVLOYPvWkgA1NBwvKq1rLW0hWg5IwrXpolTrQBfNcYwEHHlnVuJiFxMxFUa%2BUKFSqMlZOei%2Bq3hywsCkP3SugmVSIUE%2B4oZhIdobbtZ5i5LxmDaEdfliV2ip3qYC9yKmnAgnV1VrU84i7Yhx1EPejMt7EQD0qiN5PkZAcuYhBZKvqDeIXgH6%2F4UfHjG%2BKqfomgyiv2RmrdK%2FK%2FRhOJwKH8YSsWXpxUaErdxfzWDePXL0v9RdzAIBzCdSgAS2OE69MI5zYVer8ngoe4IhZhq0CKkyNG7CwOvd03jH4SfGO2Yxadsm7QM8puMR%2Fj4AlExBGmvx8n6M1GW1YU4xCSAsQodEGn%2BVbzIGw2MOGiE5Ts8J3Lk88eGHv%2BpzX%2BgIoCqDN5eRjS9qPpuNtinJHlW8OkwMju2gc8B8rY%2FWzvr7klBnr%2Bq%2BSFCH1M7lAaZEs13Tt7W46VzKzP82U%2BycKSWp2WPsZj%2B19VBXYbkoFAhUT9Pfd3jTCl9O68BjqkAQP1knoDfbuX%2FUDdxiSZwIjSOotmDnHSobSkW3Emd5JQBvU4GRI90AjyrQ26BH3Q%2BjrWL7g9FXS61pwQUtT1FurynEqfX72lTvijsuGSOUH4UjSKSO1gr1IwoCkqNoDD1tuXHxeIs%2FokzlhVG60MvC8TNP6hVYCjc%2BSzpBSZMTum0n8tF9AC3Vk%2FkUyYvqFNHqoWbIGBhIWLtbCjlmevH4dTMZ%2BV&X-Amz-Signature=d5a666dcfeec3b3c6a5857d9195976e11616d33b32215b50b05398a40d86ba3e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
