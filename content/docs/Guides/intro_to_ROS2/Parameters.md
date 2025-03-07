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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG6GWHCT%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T081112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7fJjbeQuU1r0t3IrFQTjIX1hrR7V5wlPjSTBOZmwvMAIhAKmLw4FljiXbWsWb8jZ%2Byl3Ho6YHHsnAZi6yT0q%2B8TOIKv8DCEEQABoMNjM3NDIzMTgzODA1Igx7aeNHL7mWe985fKoq3AOmAOXjzkPOMYv0o8dx90ykrmEPFPBs4p1w0noVvxA456fBkC36VpDs9D4d3yosiSuoWSzc%2FD9JnPCzXl589pHmaU5o9r5%2F%2B8on1hXY7AF%2ByHFn1LqMDEE5%2F%2BC7fYSBSUZWHGevhe092rJ9zkL5KMZEcTnaL31OtJ7Zl3h60EVqplsWvM6N2TZQrhfx9Fs4EbGrLfj90PiOrcTtZgbHZiAJ983%2FhWsoPCLcCoLoLb6UVJZkVDN0vvYbKIlPzVrCFP6nsBa28imN5XjkixaFV168zX0pfLygWj%2BHHit7kmp6uwWEwpIArinqGI0XLXK3c6laWrIRGWwL1eBXqVtXYtoLp2IvWUHDURhKcGwBPlHMWR2qTIfm5j1ZfxPRJSJjCLT8oz%2BIexn%2FQsKxKNvVloRUA4V2PeNWGBOab8TPdR3dh6At1oNaaTbnTo4LCOmMQTU11RETQPpHdHtxgbui0SgQmqsLUhzBpIxl3KeCjdC5Kn0j11SmuzVVFSvUSthvqdDfnGognPv32qJ%2BsK2WHKSbdf%2B4Y%2Bh81TN6eEUAL0hqZJIlbGV%2Fzojn7M6V1WSKDW761ZOkXw0dQu07D5sr55LZJmFElqX9JPwvIkUy24sYLe9Nb%2BApTWqz0zfjozCkyKq%2BBjqkAZfJVJsomLqTbWDZm3Af75OYLtVbUO8rP1kGKJSSGxwnCWtRm9%2Fo8qpKVj6VO0R3y8yW85H%2FEb8YMugSuEn2tuFp8F%2BxIUy07ZJ0qFCWAfWDFRNQsfSugmqvaoF%2FuldIaTTnf5x6kSl8ogZqcjvmIDh02qJ8yaxPCI0%2B%2BcaZL7FbNWhIWkrB21W0EkKDdpvOrk%2Fu02Q3j434asEI7OYGSL8MNRaT&X-Amz-Signature=bece209c5047bcf18b311e6962af54c84f8602fe55614a8eca55a3e5fb74aac1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
