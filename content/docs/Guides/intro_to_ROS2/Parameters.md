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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RMIYGB3%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIA%2Bm9WqTvlp9q1prPc%2FULSRJ0%2BX7seT6vXmeCcFCYN3qAiBMaWRRGuQKtJSSUJFO%2F86kZazShyDU12kDaCyUrmTo4SqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs8UfUVqgnUg8ZfguKtwDatDhlCDY8afQzKn7k9b6AqV8Glk1%2BNlBETBG382vKO68HoI7Z5JgSkXJpPcer5kANv86t35wHdBu6Hn%2FXVI7nA2hcqqcrRAZQ0VALf5om3mGfcDufehWz%2BIKUQuhQpcJ4oO%2B21Wh94W%2BMvCx2mqMhMgDrib4FTnCCcTGBZMSDwX7gZoqdQTa6gS8F9xOSjI5FFTvP1ixEbhr4hEs%2FxzB5ADKkrLUaXxLegUTcQ82%2Fa7kA7wrrLm%2FVWsxwfumBdOL%2FbCPx4hSU0Ey1ojZ%2FE2rEAFKSZggEOnzdPKlvKTVJ8Bu2w2SKg96wDCI%2BJB0rBGF%2BuR%2FbxB4DtY4OLQyJmkRorAvfo4hh596SFFZjCqc26D0SgGNbitQitIBHpRP3e43hpurUtblaKEzAbggJRbvsIRDgVxwmZXYDEuAFBVnr9k6MK8Mg5%2Fc1i6fOiw3LMftXBOiKPLBoRNskL5Ph3JUs%2BwkYXHyYND76S%2B6PycPdTO%2FbF%2BtmSz1bXhe7dY8iHN4qyuVOvyYttvRFuZkI%2FfJZWS8xTohTghHYakJpk%2FCESzXhzY5G25XwvH1LDuwhnZ6AZPyqV2fRMLNgTbAQl42uLN337jvK%2B%2FCuynSFPUpWXSne08XbT7IKZH9acwwk6G5wQY6pgHIcc4zdmgcCDRVboVm2b2CMxvQsciCZtqzf4H5KsKuMbwXu8D26OPkW3nP3K2Vt2NB4zrMUzEC%2F%2BaloIAQLmvq7PkDkKS%2Ba3U%2FPgJImwYUMSap95aLAgArUm7kyyxFRo2QP5jp7F3DbphGYesAOQRSSn7vIHfg2nmpOJyjgisxSYNhPYGJI4kZLS38aDCp%2FkJr6ExVJYgfhXNv4OJSggm%2F%2FxG8Cskr&X-Amz-Signature=6e27d862b3c1c5f595f64b8e824465f34ced39a4388b2c4750fb1123dc1def49&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
