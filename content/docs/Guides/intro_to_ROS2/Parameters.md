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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV2F2W3F%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T121442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICcfelmVpbxHPZKeES7uqlLwiFvjkjB5oy9EH2QcEGvVAiEAw30Z2p2cfRzMmNY4vnjAgpPFaqUinO4%2FuqaDe%2ByPkUQqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDInLKIMIHQsxuCEq%2ByrcA9X842%2BZIdOXwxn1HS%2Fnf8MKY3OYxhc0Dwecprw9237VMunpEg8p29IM%2Bc2PdKdyG7bU8Tu6pWskHp%2Bipz9Jw9gnds4FjGHOIYMQbT0LiQ0rU4Gh6Z98qBgEh5yeFgMd9A5dzlUlNDTZHNv1%2FZkZ0tYJ%2BTw7vi%2FHrWMKXKj7EEgYQN4PgwG8rG4LjZms8pFOLJSdxrgbrOUMFJFiWSdlOVsyRtHRGnhDJMdu5D42GOD7tim%2BusANsW4Axo6jGbj57IZ%2F2qGb%2B%2BJbwt2E1ZtMn06SvMM7W760CaagUa%2FgvpGOdg8MiMnt6g4%2BWWdpFwEC2xFeSSvAglREDSqB27blmqXDq79qZdJDXlhTVUHmzK%2FPa0Uy7K0hNfrSpjX49DH2oVxknI4h8o%2B%2BB0edNBE6kVcgUA8HfkCZezDYv2aN4N5XyClkSUPZwHeLggVIBYUo%2BABCivHxQUHQLYwUlSRD%2F7ywxBkB39NRfCPGjgf3CW9BJROcbfIEmdkxYfpX9GrD%2B5rkavnMmXKqHoro0m7hFahzFYLSp8IEEzWLQiyBplkaWxd29uLGWDp1IQtEkdKtjB%2FMyLLzeOKGUwLEXhzX%2FAEhmeNJB4HafRjVUnnKpjajwO8CpPOTRj%2FhCQ%2F3MMrByr4GOqUBEur9Sh5zMS%2Bilq94SdzMuPwy1385skGCqzRCVyt8Nh8Y%2FsT8grrRyaM1KX0OkTjSzaZkYnrCV7jKz52XB5C3KLjBRnafzWoi2VYpTZHgd%2FtnOvt%2F%2Bmr88bmOfX0%2FCJBsj%2FzAnCfqxkwaogrxmQqpqhGtVh2NRxiQ7iEUfOmsclC3ugbjIQZpQM4GSWnP61YUbsA%2FaYEStOckuYFMTyecfl%2FCKWVU&X-Amz-Signature=da679a7d34fdff2cdb86bebcfc89dd31228efcceca11f4bc7b9ae734502d0b96&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
