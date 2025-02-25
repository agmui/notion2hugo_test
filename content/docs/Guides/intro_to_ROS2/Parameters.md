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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFDSFOFB%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDqptWIzcDdWHNN%2B%2F0Ufq2pD%2F2ep7%2F0ncDOHKxNutKQ3AIhALu%2Bug1eL2giGbs2T04kgo7Ryy2l8ik3FEOSPt%2FwzYjKKv8DCE0QABoMNjM3NDIzMTgzODA1Igx2P9o1zxfa9naR0hUq3ANn3urJXWWCmR0TnCQ1gADc%2BLCwc6BYpVSJq2Dim1L2ypJRSZkeTHHXdXtyv0zkMhmy90%2BHbRxwP9KpAmPJLvv7LSCMwdEBLZILZDWIysLcHEabFiQbLDVXVIk8TImvWdpCp8%2FVHDHU9db7gNJpnhhSlHGY78M5YtFcVX834btoFb5UEMd5MB80ItRWcs%2F9q7DWdd2y1SfEwQg8tnWlMGU6qGh9P5FQncZXQQBVhwa3GuOozMfV9hBKVljA6x60OkXmEt6IHAxDfOwmQrCa68OXT02RhBm3VBFNvyeXn5btpF%2BMvK4Sw3JMZ4LIZNpAOySmIIk%2FkJGMZ1VS7ydpdiNFiW40Stt5w8ktnOFYyB3kwMtmLjmLbd5SVzJnNyWHKbSu8rcErPETjhWEGxLGs8JFOi5LOmWukm5YQMySGu9xyRwFPfXMK%2BhTRYSrfMEytHapeiaSxgbPDBL20s4hMVZrLSkv1BEe3qVG%2Bu%2FuMgBg6NMElbKp623Uz58%2BW4XOJrGartmihPlYAtlLvt4AJ0jC0hMz3vmUeECECploodqxIr2WLfZvXgXSjCFncdfTqXy66lXEkRgSQio8MwdTKdAzsvooNMuJ5fPzUBE9HI4%2BB2izb2oHHGaW4GhW6jCvx%2Fi9BjqkAZ9hCaqf1OSk0O%2BdS8mPtHmkJIro7xTZ4EQfPbf5e6QWRJGefpi4agyUa%2BmD7sGJCiYHKxUOGVnnXnoYqipzF37iOpAC68yDLsBsV9kVje5LJLfvLo7IF8KZ8MbQu8lWNTKqMIfM5TOKUJlhYTEnx3JfMILI8im7X4a%2Bdk9Iw5Hh2xyEUrO%2BYsoaN%2Fwgg9KiK%2FViUbPb%2BVtet7XQp4vZT3BzAbAN&X-Amz-Signature=6243e0682cbc6500bdabae7006d767200a7df82b3f1f08501de7282c25d1fefd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
