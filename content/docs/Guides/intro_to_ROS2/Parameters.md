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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF37EKPL%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIEBWx2HfFC%2B3XuQ%2FrE1%2BZ2LmiRk6%2BuPXtZeyeIuHRBuuAiB7bTQ%2FN6TMBzs%2B%2BngDYG%2FMAvoi9cJfH0h9hUDcq0NVqir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMOmBK6zjfyfDUQiyqKtwD9dl7D4m7JQoHGAQkmRch6AMWAyjARt8F72c0D2yCtKspY2%2BE%2BNOs3RaA2xbpbHTNXWtfsDFLS4I%2B5AeoO8GnKdrk0xhEIsSQGhWE0Q4pR6M1Bq3sDrmQhRpHmPXhf5mLsgABloyB2aQztmz4tspoJEZirXOEPWyMU6hLq960RxbU25o0ztzTXDdSiAyBbZqDUJ4XN3Qx8X%2Bp7YsNGKlinG2M1Cw08sRNg4XggZn5J5URjiDfBnhkGwwbL7Yck6Lu2jmlknlQsA24GgZlQHGV1Tw0DqUvi8AP51wCPJHapioXWRNRfruVvaLtFi49qg3NTXrK97Zj%2F1x5Wi2jBW42PAGTjEUHcYLbnt%2BISb%2FRKiMb6C8xYqTzceyCcfNdwxJiSd%2FypSWrgH8K1A%2BTKKH5QVOlhxqElnoNMVBVxHvy4%2F%2BCOK3r4qljNYSHV0vw8gLSznyVSu26ziN7k451LwbKeOG3008%2B9GdUMHEG6SeFQ3PPVjcO9zRcefjxtqWy28CuMMVYYWzbvvyrczEnkohSrFeq0zHHba3MPHZLh1tkYK6UXzwsaXUzvIUJ0n4WR2kqANaeUiCaQkajjYwRLHen5F3Skyf0Ry0Fx2Dqc2%2FhCALZySPsMwyz9pLUFrYw3KP6xAY6pgFERjnLv%2F3Z0YUzLdwoClkPkHs1Ivgq9il7Vq3mPZaUgJkxfeR36qgkFy3TgK%2Bvr6s%2FlBgachFhm8uZE7vj621aPZkCqWkLRpf%2FNV7s79ioLOfy1JO94pcO%2F8PM5Q9rcclrWq%2FYXgVJOAZm%2BC%2FwzxBDMtHBk255FmioriJ1OJsHVBH49%2BAZXYJWZDDyWV%2Bp9iW2hGMyzT2p3HP1RM9Eo5BiwvCCuPIj&X-Amz-Signature=2cb53efe6dc3f7fcc686e4b0b628b684e2a4a8bdbb70e2e69fcad19788c6d6f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
