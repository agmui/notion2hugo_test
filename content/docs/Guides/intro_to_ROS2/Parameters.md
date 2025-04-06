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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REOKRXN7%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T070728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIOfitasOSELKLV0o4R6ESNbur1RqQYNgk1i9TVBK%2BmwIgGF%2Fl3LoSWCMsMSmEUPlXJaOUkH4Gd%2FpweXMkCpknJ3wq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDJH%2BhC97BKhXc1SMECrcA5QilwkfY3dc4XCHO9Vl%2BlVbDXI6fgMO9H%2B29clrYNlHCewLONG%2B%2BjaY6JjT8cWCVTVH9xO1vJBjMhC%2BZt6u05tCxHp4gzKpB7JH4mpO%2Fj3ufnzDxtXf4pFgLYtzgwKvXZhS2Nie04g8pVVfECUpPj94eKd5PV2xfCfSyCtAxh9g4LqAkp6ELdJXvLVX5iHmJp1kpq21N0Pjy8kxlohY9VAZtzx4AFAxP2AltplL1GkxlfzGJ0QYobfCGJliRpjPwisVtICt811GuXE7AWkL7wBQ%2Bo2quNa2tpmTOUAk2fKDEMmiigJmRC3MZKT1ZwNpOhmBtc%2F3nX1wy2sJBOr8cGKddQT%2FN1usqVNYyVEvYu%2FKDCJ9tBsNlxnmwVg%2BTUyIem2RvY4aQKzUIyNMShuVNjeF8mGm7CdoMMRTBGDi0PiiLW3zWwWlpBxuPSwhWZVgqy7%2Fuvftz%2BDiXFL9V4nwlB3IqXshyjKOJ33nb%2B20qUFKUaUId%2Bn6O2Gyu75H1BoCFEI%2BAZFxq223zMqLIv1miOrHyQIYbUbPdjk2ltctEbFzsGDATZyJoPj67jKWpKA97icEOWDGy46KDou%2BGGsYtt5bVHAR3K5aH8ApuiyEkagNYr4pMJJK9ftVlYk5MLjAyL8GOqUBCaD6CNFjDqvOn4RZD8k9LE%2FnfaMfDHr%2FcB1UMu5tznOdiJDKQu8GOm2%2FRF7TldSaLmdbknmYX8q5eh%2BZ54l6X4NxIqIuVnqEwLXW9PEYNLi3p1TGkvpdFgZw0mHkxgmcaMG9ADJtEWUI6EebLi8VgmHPw%2FmNoKQm8UI4T2GSBK3gYdWcwTOc1cYHZWQaCArgAn%2FBMEuwLE40GiV%2FFK8ciy4MYNAT&X-Amz-Signature=fdc37e3dd2a15fe8d68ae68b868d89d6e5fd228d79cf6d60b8f780fa934570c8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
