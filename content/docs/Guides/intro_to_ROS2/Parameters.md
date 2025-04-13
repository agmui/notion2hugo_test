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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YCJZATT%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T131706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDczAG2k%2BTlIxht1nnPuh85ARtBqI5QfJB%2F0c5bgkS%2BLwIgc6ge2GSGzZJbnIVPgvLvG1hlxt4LTKP3dsko%2FMcxn4UqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVQls%2FsPhK0Au6ZFCrcAzvpD2eJkItHU8gxrePKWp7rX3QUOw7rlxXkfj%2BV1KxgRW1nH9bT79iNgFkuzIvLGPg98wiVluBXubg75JHPyDfBPz9Z8rpxDInpHqZCVnqw%2B%2FyrEDThAOYlPsxB9KTbFtOfgDIri7eqWqIwAqi3pDNMdBy1JPVeOXVWUHPGY%2FPDbNQAGWq22r7RQT8j43aIEbKQKMxjHtzTuwMmifISWHIHEGbNT6iqPXZdW%2FF220Ko39dsI%2FcDPMZRtPLaOLZzDm3rlN2Qj6nxb3g0vWQHNGlpWQ1VbFcDILfAMykNBcPVEuquG6awhlUHQGVhtHx2V1oJR5Eix7G0sjwnfiv3b0D1gXICfTQ3%2Fd1YO7m62whRScXgQQzZReiDRltmSzrCcA2e4y8bE3SkcsaEm4%2BAzdsGOiQPfM2siIC0YN7gchNS9uuw4Ri67pVpdv1Wli9y%2BDFLlyMLARPGlC%2FiwyMMXw9OSMijT7Cik%2Bf4adCJb8aJttEQygYKpGC2T7w%2BN%2FxcR3x0DHi0BVKEjaPYCWPnxfyuYzCTf0wCchgJLzKexAoPhS9t56GrM5Pl6J7FU4WL35xxCE6N6gYZnJ74GsZHIy4sDaAXKS7nczqmyKQ0Dko%2B%2BaNc3D3nff%2F%2BY%2BWmMJC%2B7r8GOqUBc43yQtMR4faydEza%2B2QnOM89V0KVnqEHmOIbVNSqq4F2VF%2BcDFdQEpW4kn2%2BMghk%2Fyn7i4p76jh8auOi3cqowOk7%2BIAKVhAlBrAmvIvoxt4QRbirKgy%2BNyIZEwJNPgyfGEBFAFK207H1Dke2%2Bd8CotdKh1FZK9yCp6VhUI11oaxNnHzylwT9mUHRdRbgdA4uAr9439HYwIIPSXik2XxgQyX5jO47&X-Amz-Signature=9390a97c278e340f2c6c83527d16cff5548d1b64bfc78c0ef0a0896a2fc36794&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
