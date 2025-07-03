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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTSK3AUP%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T150949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQClwX4zcGpvKcQCjJQQSck5HgE37q624XFlK86ZG5lv8QIhAMYe%2F8JmyGU9OTixqIjSSJyTOwVVTEcphW8Zkynpp3LxKv8DCBgQABoMNjM3NDIzMTgzODA1Igx0n%2B4pXTbJR81zDdkq3AOZf3U%2Blb%2BarCyMbK4XoNaaLTcYKoqFaMe9KtF%2B5p4uNO4jCTl6TmW%2FuINhNGbAtaUp3JaMypxO3MVbqxG6xe9FUeJ%2FD0LklTRLdvWKzIZJXftefF6nfWOOBD%2BDbbFrGIwv7eddql3pKhJO5%2FyJYm4i8OYdsJwYp0MkCjgkjl2WYTxtFIJM9KIBPF9kmbd0NSDpGnKf4g32xP043QtQ2G3ey6Vi8ows7BshfC9DlT3oSYI25YCxxlVwnJeH52qGxjSILIf%2FcDdrzZ4yAR9fzkmp%2BZQ4aPGNjaObAsiXnjvgjyBVjYHD9ufOxXEPI%2BE3n%2B%2FhnKheG4DnVZU4gTedHH3tyCaEmlBKeC8UPk4n5UBzn39wcbhcVT9h%2FOAKMzCmbgxJluSX4mRy5BxjtIzXyhHcpVb9d9zQhhxeE%2BZCdDpnurXcGlLtQpOOz21bA8vMjga9%2Fxn1ju39%2FnEg7WjSn1nUJhwRuAl16BhpuP2l7uL83IWlF1FpVo2FGSZDIF7vcADdBCobUt1sdOprlRjTKm8z%2FYXKyr8s%2B3wQo64LQcNMeUdVsOCALWnAWt%2F3ftwBIn%2BI7toLOvcOyY9azzXQbItgEWXMK6fb2Fy9ZPo6oCShgdVDVbwXoWxpwCiVwzCuuZrDBjqkAYlOmMqdYMzSmD8hx%2F%2FaorGBOWYN829I3wKWiPeADzFoKfzfgqm9FyBxBoIEgSaTaS4gyXmpHJWdVDwL9iVo9N84TGOLgIwsDWlGwCgyAVRRvbDdRey%2BoIWe163ngOIpGOs%2B0JMxJiDVd%2FME04bAuQhksEj7BbPYphjrRzy0VKd3G1gV1GMpUHgtcXsCp20WTSJh3fd%2F57Wso7BgyWeu90Y%2BlOMZ&X-Amz-Signature=e53fcc2b02a872510c1b9d1b25309b6e18b47ea94ee1f5b1277e7752686628c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
