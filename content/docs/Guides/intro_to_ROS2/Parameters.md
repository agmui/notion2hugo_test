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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN55MC3B%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T220748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBrBbTpPlUvCP%2BuH6Sferd0i14xYzlBXcWwhpoFn42HAIgKF1KTAqsxZpIKWamYDHMgPWgTD5%2FqmAjnDIuTxlhTW8q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDJnScQOWCSyL3YmSFCrcA3fBfBcXc3LkNrwCuK2ZjKZheKSTOO3OqeFUj4Y%2B9AeJnCcNZud%2FQfSJ%2Bf8aVB1W1iuMinzaBS%2FDRDan2qH9aaVL53Kfao%2BJ2upb2h0%2FcfQ10yXwp%2BSvelhHU7kS94k4Me8kb4g9O5QjM6Q2kL3dZsnOG7eMK2z7ciLNXTEQpWHHpy4zuE271vWKCMuxqYGcq9VbCw8PJxULlEaWdncSmnslVkVStkiIwUPQinlyP3%2BALeSlDGIMp%2FOJcKEbkWl%2ByOSrbKXdGN%2Fcma8VuPWeyuShIc3pq7lkctj59l1WuXnxUqlA%2F%2FzbG4YPEJ9vmN%2BvcNCNas%2FpSu6devQWufwEGL9i1XoJpvofHbzSgB4ao8m%2BRzhaA9f9GGgyho66TDamFhZC%2B1CxRULF7347ShIc94sJeCEodoOWxeHMQ1JhHxAcfFrOI182I10FeZili7Q9UcYapuUVIRobHtgamBmhiVz9YOSWOlC%2BYbk2KQ%2BIfy8wtOLP3Dc0lf9dDMBpbTUmVpabOtQ3k%2FAa0wnKMC4JNk1bxFow5lz%2F7uBzBbv8M8HVZzTuu6NzpOTqIGzBNN0VrlMqRHqb6uf8I4lvMwkrJXiUYGVlRy6%2Bqb4bj630h%2Fjafn0VtYF2ZUFr7onmMLjdlr8GOqUBBy8SO3w1FL%2BCi0EcCPTDrd%2F0zdYHVEEfK1P5Q3dYCnRe2yj04iN8gf7hdtB6GRwLllPdfMnhO7ZbjT8u7Ee6ZiMXJ43A60xjq4QxeK6wMH7al5pt%2F%2BbyPWw707K%2FnJufptoeQ%2Bq5BrTFAZdb2ypsPCRkElHxKdYgVb%2Bja9ZuAF17Zwl75xv4%2BFtjwSbKk0QWGGVkMYBVKyG5xdois%2BOejZ%2BgiOpd&X-Amz-Signature=69acb4755f87e9f743ab40117ac7fe174a158347883b9b7013bd9e52c8c0c980&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
