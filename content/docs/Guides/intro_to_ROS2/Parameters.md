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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLWIRRMR%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHL0fwhVcdY2ABtZliR6cSlElFRH0PnHWJfbdQH1CgdcAiAdTRvn9uBfxtpMZgKYeBPQs%2FBWOIkslPq0zTW3r9URMSr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMJgmdUUlDQzeq9l3yKtwDLbl9%2BBti8rWl7wwBROq6YZh%2Bb9yZ23Rznu2K223AaLXeGdFUJylTIIb5tA3rd5DAsmT2L08UMQNJ1Kx8yf1NkW2vjAINhWeOA2rhG7qpjxbCNNldiEqRfw%2BnBmX%2BqTFoOBm%2BgZBO4Xra7myagK1gDbHXv97tkxJHz9N%2F7EHO0zXdB7Txas9olFiPWbOGim5CN%2BjYfUitQXxgUMG4UZwmjuAsVnM%2FSKpQHRHvFcmswpuStELgSdsnMY6e%2FCHLkpuV5Su7NmpVEMFj7egivi5NTAAKpRhbkb7YEveC8yR10rApszaUVkrRSdRRAX3QKB0791sW9sGc4SQR9f04sj8LswB6B3V0qYthZ8e0x9oC5UdgXSk%2BFbaxEYyN85hTrcp2ARU1LzkwQt6qXK%2B%2BeGcFGIDZaHIROsgcccYnqmHgr16DnXpeatITDVPPumm5MI7dTPthHmS8vtvbaBFJW%2BdKng9J16Dzi%2Fk2AFEgOx4iKRopsU5fKm95egWpo5jebSIjewwBmfNERt%2FeLE2%2BUyoJJQyU6%2FYHWTeD%2FDaYih5o9Nsjt%2Fi3MrRbGoRFF7Th22iNt4BgQmu8A%2BUZtvvlcYBOb4VfdTztIBdOnBNG4WGzWKiJ2wsg1tV0B6g%2FMUswosSLvwY6pgFa7CV01ke8W%2B3nUfbMDqERbVK%2BBJMVfgbMCgsO0ihItClc7gfEcfbW7%2B5rF7hdTMYUM7IViEhLO9qHHOJ0KzFoRxGaY6jroB2XmtIzAgIYZmRPRVU5LcwKeWJr1yzpemfZfdTcqVeX0lW4H0pQzijiX%2FNlGMb%2BNFkQckWxpBqVosk3DpwmLgsBBFQFDcIHpWTP8jMjaE4beolWsMzrJ1yihwAN6Dq8&X-Amz-Signature=bec5029237fd0e728e19ff610144ca3b23200c522f9b26ebde9ba3e8ecd43c7f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
