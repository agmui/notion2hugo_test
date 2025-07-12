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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNONWZXW%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T121451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJjcBBxfVBH8Nl0lCv2EduMcVfVS3d7pdYQsJlDbO70QIhAMTP4J30VKvgonUiAmybhMQNcv1V8elKqfwLuAHZMnucKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8W5QoBUdgz9AQ9y0q3AOIENlZvHDOJXbuNSymqu%2Bv%2B0AUw6kIBtXSinCaI8NlokJSh9fgzV2P1aa5e7VKZsTkTSpzpcQYAKdeKJivgSnM9Wxm2Ng7HG%2F4MYpPc70xiss1OYHwOLFFFkfM%2BMLB2s%2FeShUJ3%2Be6P3FOGbOt%2B%2B85n71%2FFYyel%2BY6GZSGXRcRqt22Xktc5pTw9LLJbXTEYOeH9zp%2B%2Bg4zW%2BOK26EL%2FZ7kFKGvG%2F%2B9r89q3kYVE3gSN3Jh72q6kS8UGJHmPloYkA9yrYr5DdryDuBtybMFl4ArYGDfOPmcmMk18Uk0dy3EY6wEoypgITGSv6Bzt5m0nz679LEXZssPDuoK2Aiave86%2Be4uJVyS0zTVvBdytJ4pWUhdKqcc5djlqkomO7UwUoMLgFqV%2BJPp9lPG32GMImpGNxLhfRla70FB8XPZXnM%2BlLGzd8YeuBicxvLtmm3uryrWO03tPFsyhxMc5Lyhy7wctpNjfgXfKa0Tn6oxCqPFKeISjjk1AGmW49ZnOzhLwESrFwwLmiu3nekeVDbjReo5jF8k6lE3Uj3Yn6x%2FmXrawHT5vDq9q8G0VT00MW8buO7tdTd5EWXqe7DfC4NPE4QE20FeJFGFVcFMM%2BzF23mxUew34tAiZtBMqd6UTzCr%2FcjDBjqkAUgURmOBv2RDTfzYauh8Idy2p%2BImbraa%2Bex%2Bdr1YGz7%2BPTIdl3cM49YoTMMiExfcmNGIJ9wUUeCqJPbzR2PZoAMOJafsFZqJ9kTtoyMlmXQqb1e6I2oeb9zJYkw12ULZb2BxFG%2FH%2B2hYDStkMGlQG%2BDkwISHfKjGa3naLGisU8%2FyVIoRxbWQMdn0A9yRzPFrfieSA41m9xtkQzkARblMRc1AlZ%2B%2F&X-Amz-Signature=52f2c016feec16e8bb146735db87bc21e109b1fb2c671d4a3c58f2d6c17dffc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
