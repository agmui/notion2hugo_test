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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YMYJBDN%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T190218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwTmejncph18fh7whORouPpvegHM%2B54S865CyDCoKWSwIhAIKiNa9gbzANsp8mLjRy6PIkIj3rk%2FsLyeiKXsiRw6gBKv8DCBsQABoMNjM3NDIzMTgzODA1IgxMhrym2U%2BFOLVYR4kq3AOdTWuaY88WGmt5gm9aICokQDuF9107yX854zh2maJn9MoHZFvjVEJUEc81oZltgumTtdbcNgWavU6J4lGNe6EHHBFvJId6rWN6UjTIgPdaqrEk%2FIltFnyS%2FiuTJSE%2FEawddlVItO6BVCnWq0gaBEVcL8vdw1xi7rU7R818GjGpEAb2Lg9ndzG6lDr0fAB6s1HsE2PJOuqEiZRNtSNgt3O85ll9%2F9%2FfmXRua6ox9XOM3kpZx25%2BTqMrJZDmZCs6gG52XXWjHbT3YnB%2Bcft2aQclDNYs%2BitmuG48X0jfBHiq6yV06IR3twqXKX7XSGqrysu%2B%2F%2BP16gtW7dnD%2BV38SJcjsF5%2BuzAUEErEaXqRTypiEkM8MO1HmyPo0FmUOwj%2FN%2BWSg%2BwWv4jfor59gPx1QmQb%2FuCpeNCUuV3EY4AajoMMxSv864I6VKW6xFtXSWGUEFMG0jnpktkvIftULf2mYunMdNZnZHTfmFnvJ02g97niu1WEqNrG3Myar2%2BOzBSdceYaVxrv4yfEdPn2SoPS%2FcrpkOpRGDOA6WiNEQk8VTgihmrXWaYVEmcGgB%2B8Bq01MpeLgsNSehyOLtFc1HupbVpq3VcUEeAdltCww6qKDykACdSm0E93rtMOc8%2BHwDCp44u%2FBjqkAc40En4n2rCaI0%2BNu6v%2FDi9GAXVX6i6D3dP%2BgmmgVqVChVWZHRquQH1jJ3qdbcx0Oi4eXT%2FPtHmkcdgByGtAOe1Sq9BOWixUC%2Bp56wzDoX6hDwwTv0GtRaFmsxPypKUkM0uhz%2BTtXHcpq%2F%2F%2BBNJSVRRn%2B2rzFB%2BpTuv4%2FsVBsWFFKaUBilg821jgKSEmNg0hQLErJQUaAQrWQXS0vEHB1h32eBno&X-Amz-Signature=7395052920704188a32ad3affe1d53321fb6fd2a49fb9f286ce7aeb9aed09328&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
