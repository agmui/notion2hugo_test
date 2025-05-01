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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B22OWGX%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQC%2FdwU8SO13W23CRrXBebNnAkk5JOsnQqu1joBY4qqzlQIhAKUqWE1pfcQIexHq8ArdsIkEyKweaaygAeimahhyI0qdKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrtNfbco6oOEtdlh8q3ANJaDq401%2FeR%2Bf%2B3QX0V%2FJUPyMDsAGto8sgpF5hCCCosqzQIECjNFIQJ%2BgdHyEwx5dzJFYHAg%2FR05Y1uSzb8lLm0rGT%2BJqkqTSUFYjDJa39%2Ff8UqHE5imqm30AuWYsongmYNw9%2F2u9N1xQODR98TpquS0c2jToGxy33Vpj3ZWzDyL%2BpiQsqibV9B37WvV6tq4JCidX39%2BzYqEJWBdQBJ6sS%2BxWPzN02sssaikcU71F8tMw%2FILSWC1OgcXYgvPypHQCrM5Gzd7EDTAa7zj57DqCAYzNevvpwbZU%2FTfSGoftexXGDRMqaZSQFt5LVpnGrzE5Ngn8Xm82xKh9NYEADSlgUjfrYxhduGRatP2plBbt6geChB%2BWET5dqJQQmdlE5IDtTfyJGPr3A04VKADIvBZSWWzK8qTF2L09XG5VYdL%2BOcmFDHswjcxt%2BRT5bap%2BMAfTr7uppyeSeJAXYScfCsgOHRX%2BYVzLVBMaPQiNJm6c3rgbsrf4OodETahTX7jeCvhxHNXgVDOM1JsAbBqnGui%2FDDJfgaIaEGcpsqaVNaph9KFdcckHOz1Vwh3A1glvqN2ZIwdH6gZMr3sl3sg%2BEv9pNK6HqpUWx6h%2BJYeqi56rkHNtckhyRimhg5JIa%2FTCips7ABjqkAQhKpH7rxMWwQcaf7hArbLRGpVIfbJiIpgl%2Bp33yzurDTJwX2KIQjFjkFHoWe1f50dHWQPethHtoPldbBL2G8IX9sUzvpfqcxQ7cnR67%2BhR80so7CYKzHlsWGRPsMBpOOZIRIShDnP5spr0SUCsCcEjPNL7cKRJNcsCgoLFWIxTjySPR11bFJUmkVA55PnaN0zy%2BbHbK71n1Sf9tMRIX82UBxsDV&X-Amz-Signature=0e82396f44d8b0ac6ce5bd55fff0eefa4d2057f26dcfff8931f25fa8825bbe8a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
