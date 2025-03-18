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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RME2XFHJ%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T081123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB1bLk4qNocXfF9vw5Nri3BN907cOdmTCj72%2Bt3LGeJwIhAPjTeCfL4H6nwQXRGocr%2FOMxjEWkXadboBdG4R8Ut0bVKv8DCFgQABoMNjM3NDIzMTgzODA1IgyJJ41lGS%2FOF94Me1cq3AOuKpPrhvVFIgs9dBYnM0RMVxbP%2BDdQhbZaV0CbMxDSddsTuLYpwNZuB7AEC6gt1STcaaziVWvHCqAlvzVvNqXY%2BYNvzjPufyO3S6goBVXUv4pPpKyAnqp7udIYEfvCTf5ySS0x85tV5z6hEm%2F1VyvubQdIMEF3Myo49VqvO3ds6Am0QOrHZmLmBIILje8GtxqAwCbNiM7GUzvefKM1%2B2b9SC%2F%2FHgFgulKX%2Bx28lZ3DeCzImymQ73ya%2FpEOWz%2Bhueiq5XjOSVt85Pzv3MJfZ39yxeICW3isSbUWi0eX%2B9zsvX8t3t0xOlLGWBIFdFfWUMjhTkE8IJKitr0V5l4UF3VcrtnvVEqHluXkLdhP9RU%2BMx7ZCL25ehiIKgfYdn6WaCwQFHFFp%2BzV5w55bK0YpCP9wfDzDMDBT7yL7NYTuxUB%2Bpm7d8ANgJcFdQD2NKScC5Y1gmCqag4JiUXtOXTK4mD7x9yzklkfUmC9XE70e1psXhZkkGyj1rOdaMu3lb3F12DCGueRlTumtQ3ag1mSCq00%2FuDrMpj1u4ithaBEeZAPs3TO9zics%2FNCJQ95o1MqCDwVZTZkztzV7RdJMXWe0WcKBia46ML7ehWDvJ8OT5Pgr%2BYobZ1upVYX6Z0%2BaTCjt%2BS%2BBjqkAV2ODPB8IT0ewNFj429j2RTUZctJVDOvdvEVY3drA%2BNGJtfwTm%2BaaXz3DtyBrerhTo6CE2hU8zndUyOJXkEMsidUiXb2Q%2F4sxnYXIE9dIF6tvgXgKLwwk3AyXh5M8RRck7oyBMgEJvu%2BBosPJuw4PMqXI9ppwG8pkzaXxgfeja1FryeWpGnUK8JVCeaCL%2Ba7uoui%2B%2Fje4Y0rgAjXpmo9hq9pYybN&X-Amz-Signature=c5c189771e2b25cb644c666dab2eeb346d88b6d474bf8c1a4f1b8e7ab59e14e4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
