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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPMITF4L%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCmgw533gi3jjSKSjpHcjtfN5mFCySCkYjwjuNRyZGwPgIhANSYKxVnNS3stTXbhl90dC1eYEl1FdSUBRlvt3G9gP3QKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmjWNqAfPKMIdjp60q3ANcrfmi54x%2FcxRjIXDl2EqRqKKxYcS%2Bk6WGjraFjS416iciIN7jhUuPZtAd3rznTi6lT7jP1qSL8ZT0YzDAxBr8js48BztJ%2BxQXHYJfUvDWZvdPvwGrW5xtM4S7fQK87iPsqCpdlFNTVKYcBr3gWYzEhrI%2Fh3DqRBlDtRxJX4KL1gjpRFQRcfALCseZXhmFEEbO8zS0%2FbouoBCvezmBcXsPGZSn23IeBQ7Zd0IBMLK1AqiK%2BTP9J%2BwUkaG4ii1LQjaVF5UMGKKf39wph1JOTTO7GmPDGhVk3b5Mk82QSc%2B8FkVgPMBHhM0qBO2Cilyy2%2F1BLLStnciKmZ0mgmexZiioa2i6njxQApxrzg2YYpVBpmrQ7m%2BSt9XRWtvg%2FD8XxUiq4xsOrXb%2FfHQfvYkeofwNpe0dE9Q5LN7bgSotEJ4qXadgTdh1L66hO4SfBvmD7otpQ%2FPEkaWyqKJWi9OGZ1abo1kP8Ekn0YsTmpS8aaQeJD93awKxvOMT9n3UR2Rf0B5RK3qREZFcl1V4zSyZeRbBzzHww09aQ%2BRjyGTxy4k0XVD82h8uMD%2BlG8PPgyz%2FpKL8oODumsSWnGqZi2TcFQ9VdrwfD3zHiowRPfpgaQvyTuwFYjPaWeyZUW5pSjC1ktnEBjqkAVti1J%2F8P1V9gwTVJbdQOMToND3qA0y2VZ0JlYEXbSIlpxC9PeAultiiIzPU9KG%2BoYsFKfnCdVCtrYk%2BhVmlwVA%2BeoNoznOBlKvseF3200CdSqtU8kJ1VfCDSfgkRFyTxqhnLNr5nuLt9zenOSEGB8VGQ2kMIGjn1lbRreTWfu46D0NEkdd0bvCbO%2Fxs%2FlQk7RWaBMix51SZoOp2EaScptgHKO2z&X-Amz-Signature=cf0a101c4e33ab4ef5229b00331a4639df3c4acb1797012582bdc6c898621ea1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
