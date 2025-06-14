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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466767UGN7R%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T090809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDwoVMjEo4ycIrJfbYTSd5aImtodIL9XQd3w3P9Yqi1kwIhAKXfXi2%2Bvuvq76JogUIjoVxwGjRsovXOOaIMjOoTY2B9Kv8DCCgQABoMNjM3NDIzMTgzODA1IgwFHB4pbgg70tiCmhQq3ANGbgZLabFbyP4oe%2BzFHjroBWNtbMPZ%2FvK3w0lngFmW%2B8ts%2BnmSkwOZrUofenK8BrRUpnH%2Fat8ON5jtcxVp0Xf4eHMAbKLMWNdcF5HNkaGeIf7JrSRPg%2F799Oh95mg2uUIxV%2B4ks%2F6M9z9njFTKXCbHv2r2nAlpE2prUVyL%2B69m%2BCEWyUDZntCj3kELpLxFS1dCxtenoBWy4iWqOJ442LBkP9Biy7xij%2FrNQAo71fNv2aQGc9YoUrDvEmCztyzb4oO7IefJgqB8eqB6JK%2FuIrM86MByuY%2Bs4jSeoMCpB3jYKXEe3r%2FFwxpKRoPGnmTD7MroyyJJ2Mk1dA4qGKQdsEizw8lvT1JQ%2BQ1Mbl%2FbEOfZlGV%2F139hSyn9SXDP3nLpUmC%2FwNYXOKusfDeLUpxx5xPM1Sp0wFbdmtYr%2BdbjqTwYOwNKripJBijtlYmGQcIMjwOFN1ws64wCuURooYs2ZbUQ20zTQ4QROTjnEQVcR0HpVNwmrPKBdw7RfzM%2F0gljxk0A58EzFFvNJld3eb%2BeJutbRE4p2hrjLpJQoGle3lOIpWijC51mqzJ0wGh2KeMYRigGDZrKqu739aIoUtJZiMLBL7Pw3IE93Tku%2BhWqUc%2FtHGravKyk2cxsi3qhoTClvLTCBjqkAeUgTVNlbRcfaCOlZelVR2FZppi64gdI5DiNmoMiEmRzbyFHmLrPy%2Fk5WGGlSb%2FNEuXrkwqErwiQVvciMfZCbKqEhJzHbDPxDG0LX88o4twOS0TdmA7yEQJamQYfuupAxyxHSUJN4l%2FJsIfUsupLv62yFwp2smc%2BJLsRVxKfUEus1j4MBZfrmTZ7qmdaWTx2ydt77pe%2FCR5K7OWPMBib%2Fldd4FW4&X-Amz-Signature=0cf2b4cd0b673d507a671be730e265ef72f5ae64d2426fe34e0506cc5dff6a57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
