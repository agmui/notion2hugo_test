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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CSU6MHO%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T042424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCxhVxnQTcYCYRgynXEs9YjShyemfzNY4eiUEpKuCeCmQIhALz5aR1uHqAMQB5ho3KImhgFH3X55QWcOyWh3ICaprdOKv8DCGkQABoMNjM3NDIzMTgzODA1IgzSlE2%2BNqyLIbNhacMq3ANQpdXU%2BNsUFmXw8%2FVrpSE4MnWpgnUES11CcnU0uhwCKyV%2BgPKz5lqqpi32GU4q%2B5EgPaEWlAeRTUIt%2B4gXMfuJ4TcMd0%2FVPpLUc5EnMtRx4lVNnpkLSH8GJoZNpqB0Yf9hjeVg0Z5tRYFuv4oBXgAQA2%2BXEAHWCOhlPfuWY6%2BV0y5zsmkmiY2B8KyGhfxjG0bqo5KE33J6RJys4H7LaJ%2F%2FRwBeBhnm2LZJe1CJrJq1GdoSUdiaC784KyFvhJxxucyVH6R33jfzLf1BN9dJ6gARnIy8LDMt%2FvpChiwqKYEv4fgGWh5ly74R6JS%2FdQ5ttrMCwnQDPUFivgbQFNmV2Ee%2FoYNq1hfBAkGyOVGGNtt3r1giudV3Xw5751%2Fa6ZTT%2FSp2SA10XWoEzTIKbzin4SLKeHWncyDajKUtj504xG3k2ZixWJVrRDIHObxgRbAKiph9VffyvtTj273IT1lcttzuuru3s71psbFR%2B8Ffg6kusC4tDIYZ7%2FcwuwVc60XhlSoK0fKIjdOuBzfOT0avBlRVVG1bpytuftTN%2FGpRohFZrjAA0Oy3z46A%2F224Y3k3WDGJAkHtVqEkR6bN7%2BTArOkazRTASjFMogEvFspzamYeyXw9Su7JW35PUscvoTDykqzDBjqkAdMOInLXRKeJMJdUY61GLytMn9T2bCDjS9Ux8psqjAtBR3xVKJ%2FVJEPGjm9rYJP%2F0xiDU1KKrj4Mn2brZ2%2Bv2sjmMuPqHXLtQQw%2Bl7MkI27RS90ii9T2q5dV%2Fh%2BH6Ihcp%2BDstk5RQZIs4Ec9S8en3lk%2Bup8svSYg5Q7T7g6peposgFWpbpMcbpCDO8FhLv5bj%2BUL6ywkaA8PbJ23Q%2FAp6mqeYB60&X-Amz-Signature=b06b789cfbba2c0085532904db294b243f5dde0d9a3feb8e2ab24773e4ebfe6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
