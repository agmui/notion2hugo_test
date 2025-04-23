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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXVBKMQE%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCMkczfu4oqGuaHpVjVdRUrG1g%2FthYs6Nw4wgQNctqcQQIhAL3LkwN%2FUI5RumC3v5XuwJPuTaBD5JmRr4XLqYDyTolYKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJ77CiaDlCA6xCzloq3APHjAvAnhxPzwR1ecI%2F2uC68bK1kKB%2BGhYQFdabKNoLC%2BxxOoRFLEq%2Fz%2FLx1WXtp%2FpuijNhUFk0Fp5d583PnLAmgrg8%2FJvSMWf6VDF7auhucRDuN9nzkbx0VnhXjl20MCkUqxPBIMOHGKqS8brXDSpKKezp4HXVugrQGik3EHcpRGdt5A2CjKdcNIZ8Cg3MLNJ1Ov%2FGGTnTcixIAYp5pc7Whgzh7CcoiN7lVZgDaOO4PE189prFkcmlk08zLHcNtfd9Dp4Z1Zhi9GE8Jgtr6%2FM7YwA%2B%2F9QhnSrwDy0piPrHu56EioBVkpRb64niuctanlrgFO7IM6QjUBLwHGAuPxV5dtgIb0x%2FHuSsSgKXu2CJoDDru8Q%2BQPvPmapprnCjC%2BqDWx0CRp5duqeACqmlvwhP1n4K4uYoBhVgTPt0ERpgi6yH2LcMXDcKaaZsHNCvxa4PPORpmB81h3OkJx6%2BWLiJ69jQVev%2B156%2BYlRNUVnoBT%2BhZ%2Fn%2FnGIPSkHA1vRwbzG4WmfvbR%2B8Gj%2F78Itcg0HPU3C78u0Rjhle3U9QftI3X8ZHUN1vEkOnvYGFfMmvjjmA7muBEBHdxnPhv43%2FR%2Ben%2FFZ9DQxmTTjgyNogeYbEB95BQEsjJ4eW8GtyqjDHxqXABjqkAS2xXartwdj0Ue19Kqqwqe%2FkABKjyaG7OALO0CvuL6nsZe5wB8Lj2RH1WgSOAmFQCDu4tx9Y4zLgHcKmwKgIBYcdHoah0hu2vmpGlgunQiLugaVIg%2BNZsDVlq9RYiikeMP2DUmbADlUmV6FUZNzHBSLloBlTSne%2FJEke2tc1LUhDw7%2BCfRFDuumYo34BUa57ma5LZLBbt3%2BNwvP8Ta69KPKITjRL&X-Amz-Signature=61bbc5a884975f52d3072059b4ac9242817788299db92a4b713a768690b11b71&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
