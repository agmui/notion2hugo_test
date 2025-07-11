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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFP6S6GT%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T071210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDSkATGBp%2F%2BMeqbkkpuDCr9Pay3RgNfB32MQFoEg%2BUvQIhAK0ju0v5hMl2GrutB007xLXj2AQmHVX5B1t8i%2FRqvyFNKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXIk4WcJrXPxJD0XIq3AML4YfTFkKb35MRoKHkhqA%2Fog48wRe7Vjff9EHyyzYNd1UnmB0jgMDzsZ179v39fH9A3h%2F5pm%2BYCnpG8BvAScI6np%2FPNSCuZWhUCvdfz8P3J9R%2BPaODyv5KZxekMUuh%2FLF2Snuz6mCaX8Wjc0dHCFp18nb7SmoKNBdRgUsKANVgntwVR%2Fj3BPDgycB17uG0LtmFCiCgBJIPnTvqzdBIzPzZZPar2rVNJD0qQvyPtUpaU%2FJJb2xU9%2BgKE%2B%2FTnD6o5u3jxRmq32%2BdqrUoKWRAf9KHoUEo5zKTYysyWb9FOnJE9A%2BWQZ7YsrxEDKlM%2BqQ5ErHPL5ovryzzB%2BFtTX43%2FrXl7F9wHrBsQgCCf2JT23vdjEaNeBM7pMsyvgVWUvzy9gxc1v%2FmrlYFTnR98w%2Fn4rYAZYXsxmuUq3bGLzpz9iwqkOoPQG%2FadoC0VwaVNysuhKJ4YuIjvHoYDxShIOdoEQV8aBSo8ikBY%2Bu6bw%2B1xAWO0uEF0ykMPH6U2rul3xssZumeNjZQ7yHDDAfoOjy8xTkL3HE8pYminLYBeYEmnhbrHqCsGv2f7PW85sqgBo%2FqzFzjc7qE8dffgR2xU%2B6J4pNzz9IVs2inNJX0FgkATbVn000OASCeLOVIhZqlwTCv0sLDBjqkAQ1gcs3hAfpK1EHjgPooSEKbxqb2YJquG747XXotxNCAz39CmeS%2BZG5hvdA37cJBet8E0UXI64rIPd%2BBNqvMUqu8Rp7cPT67SMdZnww7k72yk4zbr7JlbzhT4%2Bod2lbYYNhbeHf9TBq%2BGc9KKjYMy%2Bq0tQnoczVrb8YBc320fZkYERDpVn4UHXqrU%2FYtTJSZgE9T5WWIyijBvV1Tt1sqNVooHIm4&X-Amz-Signature=009533577de6fcadeb767a82e6709e6f16576dd203edcc3969cbea670fbcfcc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
