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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ3ZQRYH%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T220116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxVgwRUZB748G1E8R3WIbrQT2WH%2Fw2r4YmbOeZ5VrsHgIgWrSPzJf4tGoJx6cuNvg%2Beuck7yjvY8BvOU%2FVanecYCQq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDPE94I%2B4MSHXEePdqSrcAzTIXoPKBTwl07C4Vm5h%2BCiFEbqlCE4f%2B75L%2BlsoanZtdQRARKEaeu1b%2BfguIxb2%2B5TEBhdVhpbgSIm%2FVqMD2Ey66pcuxipxnYB0nSY1NEFq5q74zfBgl63Zce7M2F7roh2lTeYv54Ow0vk1A7B9drX2IybJs%2Fu8Gy%2ByIrnjkL7teBcCp4Xq7oPwJeO3cypWO0YgXdcrU1pkdQboNJadcGL8JlrY5%2BvKy1X074v9lfGfdoCYkeWCIBhALm2V3jXZ%2Fcly7oNW315HVQDGGi81sCTYoc5dWno2yup%2FmX%2FD%2BOl4PQamzb6H6DFtE4tDXumnOvR2RvaCd6w%2B4RiKuWEWBj8IclazYJlD%2FUX8dwBG7AWv3m31LtG88XgSEnGZxPcjjCLsT95P6b7zcC%2BANn73oH8841kAUhy9uC6Vd8nY4j%2FDEUlewKeHPd%2FuMRPatWeSTCdRdzPGC2kNhT1Shmh9IPU48dXXOjpPHkeq3VoTga2ZY2ZFtrtp2Ik9A4DGRYhiS5ezw3v%2F9fpmjQiT2ois1szk3Vgc7oARQvY6ZXHCPoKoREqgyJPt4%2BM%2B8EOMdo4jLWIaOsns%2Ftm1cJxt7DTm0azycGJ6w1Je0XguFSjJR0Deheve0iKkubvpcp8ZMPb93L4GOqUBb9uUDs1UdcKTUkWUmrgXwUZeH2zxswU4Qhz8%2Bp%2FBn7XfKZ0uVypz2s1eKKtd%2BahYL5wxN2vZ9sgA9WSItXQZYPpR%2BIjsAqElg8yfKhN9t6vokYka6FtunEiNRZpj47pD7Kv22pQ9Jf91Y78LF%2Fy69JN5jAlieGlfoiyOCXlz67s0K4RNAgN6Fno70OWXhSLM%2BSjmeOnp%2FkdDXhYolvbqfBJsRP7Z&X-Amz-Signature=db69f470fdcda069e83a537d501b65b722eb68cdd27b398c4e9d8a9cd3aecdb1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
