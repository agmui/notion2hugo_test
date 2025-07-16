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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXRQ6HR4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T141021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCJLsBB1O1E5IOQywoBCUQS60WIs6y%2B1f9yUxUDg%2Bv78wIhAMIJ%2FlK3%2BvikxHBB9aeyrALYyHnL%2B9zOAHxmSZxs8g7oKv8DCFwQABoMNjM3NDIzMTgzODA1Igwgb0fGGaIm%2BUwE%2FTMq3AO2rVa6YhbDsdtgqB1nxtmbf6KL9haAukvlwKgvmByeu3HVBC7duL%2BfqL%2BRgAj3nHHXnQLXOtLq9EW43gY8nzEYTEyn2JN9WbAvwG5IhF3ekB8FhoMMUhDAdF48q65eyz9uqRTOxT5rVpuNyFk72sg8neeNdE%2FI1CdN83Vui6wNAMzwsOTh7kcTzQh2bfsleWTDkLe%2FGNs61%2FqOCcCZltcE0eO2w6RHSpYtrN3zwi7cxRV1%2FIYexGB5Y1YtfjITJ9SdFdCpywpZIyCt5upPP6JW3X%2FJpyd0uyT9HOHokswcWjE5OPkA2SojrI7OY1v6lw2zQ%2BATet8WXjsjTQjNWIQAr5eDUkRFOss0mIosbYIfsR4ReyNleASq6dSxDa%2BTdnL1%2F6NguPkR77PaR91OtdjyGJ35DkzQMAyNg2uVObOUheqQZBKyKf8c%2FPDGACfEOyTU3KZ073oolYrq3F1cVGCCYbacWIWP7Wv5JkmI7hIexZC%2FTNfrTY6mjnL86RsUT0QQh2EzwO4rfjaOs%2F7H89OnAitxk3PNcEub5slLIeH5gJc1o2PTAc6mFghpMjvByK6epClw41YTDpdgdILVnSBnUo3WDLRAMOg9WEzGxxO4ne0NZkB9FJSH2uDy7DCGk97DBjqkAc5ERJzWKNGbJY%2FA4gxAh6HBiJsNTHjXeSS3e3LJ%2FM6RCf1bTtbDcSHnWlfSV2PXsPUaNWBIyYt%2BOVB45Ix%2F%2B4ErE34D%2BUq%2B9M9uunDED3QI391cSnxURwpqXqefvZ693RSUKz3SCUjqXGfo100M%2BKmDyt3r5B8FhmGJlfwmBtL2W%2Bjw%2FlNryplgx%2FOMwYn6dfzPse5NjOeSrmnta%2BhB9Us719DE&X-Amz-Signature=4a72d1416eef0f0787cbe28e837e308d3a0e41b50f9afe6a2c500727f8046f29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
