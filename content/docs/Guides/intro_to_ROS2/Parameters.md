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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BA4VW3C%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T220803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1XROuzuBEjIFeT6L7JLvGWQoa4aa5qpam%2FFZnpVanyAiA%2FtUO9yyhNDoy0fICnEGDs5oDUV58l3mnXrzCodXSs7ir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMMca0417eYiNdBNwhKtwDa6C3eLEAt3RIS4OSpVBDBtFRmrKuJvxNK7WXZtf8aq5WkQJJfpFkmftY4oKJNXhxp2kToRzJH9XB%2BbIcBi6zTTls8%2FXecWTRyarTplnd%2BS6hhsSX5Q1c%2Fh%2FPLDxilLsrHEgyXRRW3Brg9gYQS3zy8mjO2nI7GqTj1oOrL0K0hc3xLyxVJyPrATL9k4iYsaVkjrNnfZifQhThuwK8cnXML3m6FYUMdWK4%2FyaWwkQt9fYR4Gud%2BrcTkjn%2BP0juevPpF46vIVth81v4%2F8IJz31EjsjiPWx1t28%2BFN3vXYOR1wM9BWuDDsYSm9wM0M1PZeoTZi2DYgD2lf6em63OC7MBgw1tIhEf1Zz8tn%2BHyyZsvSnt6u7LrGczTYvPjgiDurQpzUuCMkqIjhFlTCGDFowpTLwrEbTjFhvmMaxRIzetNUw0dGfob0KA9TtaIj4UILJ1p7oMAsWWsNRZ8lPIlqY4rCTL66wHR4Wljwl%2BSgwoPcpXia3xf%2B1YskAnvxZYRVREZSADNYzglrzYpbhcUtlPvNpLCKpUkmsgIrEzrVOd90TbmbdDOWTmN4DEWWILZkHqCoNkxUO%2BlieFnkmJtETHsqbNmYwJGBT75aIb0wsMg8wTT4VX%2F8M%2BVv4GlfQwxpiLwAY6pgEgqSirc3CLGAVue7t6Q2Fw9cWJMuJpGiFbkTnHEn0wOkDZsFXmdDO%2Bl%2FBAPAfNfuv4Vznvgd4UGp5JsHVIQ1J1YnGnUF9Fp5yQjwythoaV0fC5brqv3sPgFUsbSKpICbTy4brytoQStNXwMD4HQ1Rd0G2fyXM%2BQ2aHHKSJluf%2FBPFzWIDyBHRbEYVME0qYpZIf7Ad59KCvNQC3hCPnoezztrgmSvDm&X-Amz-Signature=6459bbd5901ee6af232946f21ad7499f41a9736031b1f0483c612f37615b4da5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
