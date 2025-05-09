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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF55TR23%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T121509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAG6rojJ%2BcBiW1yECZcCL8ygw8CDf4E1cguROOXG8UcAAiAT5iY2wnJIwZjhkDYFs28yPa4kWynOGq2BcLRJGRalcSqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM72wwmVmZxZYLggoyKtwDjiNMgPMHv8bNtowiNKgAh9QcWOH1sdMPHfNRvsvNuUMYUUg5t2lMRgzIcRALckKeT6J8jYUgWDTL84HQAtTm4CTWHijK6P1aHWICDW2g0uZYA7sMX8Uuv2jhN4VLlEVDjyb7lSPmIHkvDO44A%2BY7y7kPGJr4IoU6cjFKRsbAY9S%2FERmPaKChcG6q4Nw9XLvOwqy0tV85AsMrB7Pn0jL5KRBVGo9pz2x60qlcsryU7XPGriGesQHn8clxHZP2wR4KRZ7z1Y1iFAwKBGFgHLWkC2%2FeaKxMkDts%2BBDolFPr0Z9qKmBBIZD%2F4LubrjAVYUVlBbMkVjd%2FW0dugrHqTQplpQupI7GEJh2fMPQJtHDnv5XiqvBzskUzmgFR285aq1NmAgIBm%2Fv5usRajl6P36%2BDAKBcscLI7wIoaETmyFpDU3w2iJdgh%2B4OV6RyBpReGuisoZ6guAfd7Ly3otgUjEPrYpuge%2BmfENKhz61iqeW%2BifraWvvjcTe7uSCvK97Lzb0%2FDzldjdD8tO4K8d0QIp%2BtR%2FxmDEeRw3%2BGWTT64O7HvxM7Hpzh7wK5DJwWrZsD%2FA5zx1ADYjQHw6VJpOtKaDKIheA73H%2BzJ8UOIhIn%2BsnZ10nhR9ldnZt1z2inGIQw2NX3wAY6pgHdnaxFYyiaMGwFbofuviJ5RCsL01J12vqSTkY1w2jkHOCPyuYMwK0vvSiqSN3Uu184L2j7KHWInQKzNPqWq0MYp293dsgmBPJm4io%2BA9LF4mVK80LQvtXHJse0WFETBXfZMYbcPbmpvNRQVhAnATxS19ARHpWw4D%2FwBOFxme8GoSdYJKw78M81xNOXyhEuDT4uQ2YcFIjSmH7CS5sWa8sHNBYLtL4R&X-Amz-Signature=a77f3087035dcc0681ee6d279fb7851c203df34263e2e9efb3786af3aa4ff89f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
