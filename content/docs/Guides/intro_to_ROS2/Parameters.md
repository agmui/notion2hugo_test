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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5CTRYZA%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T140756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCCSDdS52%2F2YIswaaoVMQmGl91qlhVJbq01W1nQPFcbQIhAIShMf1dAU8Y6p3I410jWIlrQR8kHLO7JiaZEBJ8gtiJKv8DCC4QABoMNjM3NDIzMTgzODA1IgympT%2B5i9jZk2kK57wq3APsErhEppomTTBHDcO59MwqjqkKM7x6jh80uSbURmi6Mbcsi5jTiWvPzIPkob6SVtNIpW6D0njzXKrLj5zusjtYz0t43tDCYf4cZkvz5qsouTa8%2FMXZfnThY2L10imc81V9MAtp%2FK%2Bk02XKZd8FlJqmwTiS0hBRCg8Tx5768OZrxmAg6hUeKoXrPUA9iplPqc0SDBfNDHdj3weN7OjKrsu%2FFk75%2FsZ%2BQdOob4%2F0VnhAn2KG1uxV1DDTXk0fiiepBm%2FtWzjbCBg64fMv5JocKoNnmrOwEPyr7uaSPhiriFHjUB2%2BlGak5BnvBpRksQ%2B2S0vC4uppdqWRg9VSXb0569G%2FL1%2B9ztgMl2VEfgeVyERyhEJacCMrSarm%2FAADj%2Bm64LMtITY6yRFqQ4j13%2F%2B2SHnH0z5mNGzZH6%2BpxwbpcH8SAVP%2FBK4Td8EdwgwJhBxd4FWxz96ZLav5ASdUCiLSi4Hesfjsl5fJMT6pBg5QmgyY6nweGlIcsKDibEX5XEB1mF2pLFkjwxXmw97GC7J4Fb1BAwVhM64DAfvUCp6GOnJKdJHM7H%2FIgWjIyYSoMVKzig6JmNPrYB6EugJy2L%2FCC%2BQOKpVQzq1E6DJLy%2FDRmYwfAtLpkVcmtNoklE%2BNEjCw1vG9BjqkAdcA0oIC%2FboO0j%2Fu8k1rowu2s8er4iVcLm1HYN4U%2BegKJASB9F%2BwAiZk6ieCZs92QltQsrClWhIviWWVd60YxPwjlDGJTMoaz9tg%2FgGvvaYFKehETLeTkKnfMbfBqbYbVAb0LwnNShsZWKGg%2BRF4zpUbPiNWv77HUCzyx9ormJKdOoobAH5gQxUx%2B3wrr3FJq7EDaKoULhCMz3VQNmbZUvCkcdje&X-Amz-Signature=b5c934064be4f321bc2aa8d03d47c95f221184c5620889c38d536fe7237ff08f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
