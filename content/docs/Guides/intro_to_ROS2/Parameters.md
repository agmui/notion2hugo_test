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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJZJTBN6%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T220932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQCgF6zly6h%2FNvyy15mbzm4PVbdJKiYXn6o%2B4v0YY%2Brk%2FAIhAILu6CtB%2B1oD0%2FMjyfpX9m3y4yOzp4sl561xazwB1Q7mKv8DCE4QABoMNjM3NDIzMTgzODA1IgzAJaAVHkg6ydiiW88q3AO0l%2BThIoixxk40Fq8cTXhSBHVM9sBtb7jgrDkHGiFiDFgDvxwSF5cdkmOh%2BGzZQVOFze%2BSOqzORVBh6AcxGOyxfGi2WevlyAe0N5nyJpg%2BvfEku9AR%2BpAZYTFnQZmj5bkHmCBzx1moKu%2BcLimMjFhuKnveWOeeIJOicRevn9ZxoLCzintNSRBvhbgI8qLNfW2yRbeDpyYB1yGREctBvW0zYknT3%2FGm5cp6J5AhLb4e%2FiCMWHnXgAHo1GfU4FakXXn9tK3j5pJl8VRVYY2owvw4xHdJYRo8pyV70rMAly7vz502Md6kBaB7dzwQzKxwoW3w0bOyWBbhRBC70vWfqMfBK%2FmelMCJkEOjhSPjutavA70UaIkjAlszJnu1xKmenfok2QgujVTGiWmbBTlkz%2BnwawYwmT3EHKrAHaTE8alTjOcZdxLwXWvzLkTm0eXQD7LQJ0lwhXeuMhanxl%2BCBSeGP2j1LdGSt8J5Y1foTLLNXEKNV7MkKr8umqkf%2F9zQRXWbSlONUrrP2Qs7eG1Kz%2FFKocY2xQ18jViqQafQ8k73G21igCb8lGCAatHTr0MGCEURAHGQMi1L%2Fm2RIPE3Eu473F%2FzKxeTxA9s%2FSUZgDdH4ao0IH55KImBSdXI7DDQ9trDBjqkAeL%2FyvpYTZqFdbJL8QbYkh2VwSd1okxYkfVo8C1WQV%2Ftvalu760hLw11aNin5cDfb2bQAjU3f%2Fb0MykbpO%2FqpuFRZ3tKmuTUKGDfR3QjIEbNAaT9dGwdQdQXyXWvx%2BoAqfMEMG5kOZfBpRN3Y4UBgWIlfWb3GLwqQG3nxjIXK07VY3iK1RfyNo5qAuMFY4rKGFbhY316nTNXOYaP%2B1oVOwcNLLCk&X-Amz-Signature=db0ca09279bf68c32e045fd04c753cc4b764c980a727401d617a8319956ed80d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
