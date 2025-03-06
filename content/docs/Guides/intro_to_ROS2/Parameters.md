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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GPZXACA%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhpW0Cwq9Y8zpVZ5jtdyUM70Vo9kACW5HhA%2Fe1Sar6fAiBpt3Bp3pNzCTh02cfZBTzS2CqcXwzt3RJJ0gmbUMhXvCr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMYbc6PcN%2F2RRyV6tdKtwDpqAS6xWhAGwelWOWL%2Fdstpf3BRueFSs8aReizWHo9EG2WLOP2RoxdkFMtvrtpzSZ2ERo79mn0fwX6fs7umKNRgow4qL2xRwJuyklzYWdxsIBSgrPDa1k1SKQT8c3N5302ytzSSf1oVYNPTrhboH3ZYmIrgREdnKCDI21hbMY%2FyOIpmoOLjz3VpaN8vqTRg7j8HY8YFpAahvNAKCQwMaXCJ3hNLMCDrQcDrrEKUhQP0XRdtUp%2BmhYwCp9CbqFeyovjb7EzLDemzDAJCPTlOfbC64JlLGtI5MWABck4EaN1WiLydH2T8IjPedsh7eDD6aQilTlUN5AQAe9v7r6MPMpEkpVrFYvJuejs9cK7FxBYbxXaTrzEfjsPtCnqGkoq7OZKSoCVoYNSl4drReBI18EWofRlSgevmUmIXswnPDfveCyC%2FeWQJDHWJJbfAOPfUG9o2MJBFHRY0g3RawDM2c7LFZj1WZAyhtz51IZecJwJIkQAj4L%2BIFKkUuchme%2F0slUFnoQ1e3Y%2FeFtELbNzHhy%2B5HBa1kOrt%2B2P3JbiAPUHFFbkN5kwMKDhREHRciW6Wsa6VK8RGgeo8AbwbhlMWmmPWNSqfTKNIdAF8Q35oV%2Bw%2FXCgdfv5%2Fq%2BoS5KiTgwycmovgY6pgEaO2W5NKNT78kgUtT0wN7%2BZlwMal9afipyQ6HR%2BjWO1ByGe7NYjObFkjcYXtHppb1aR7Q7XmMVXGn5bbYZV6OnWkL60S%2BbzBzkXOj%2FevB2h%2FM%2BSJpB7MvWcd4O4%2F4WKF2z%2BbtBmLn7A14RE07NKH6uzU%2Fzf%2FXzqjx9zPfLXLups1EJl8sLykZq2xYpQ4dORBRizCXWc26xuFLz8vzPFltAuE7Bggcn&X-Amz-Signature=035906e86fa36b90d174b0e0e0c77eb257f37382e6dfe74a170a4efc0303ecd7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
