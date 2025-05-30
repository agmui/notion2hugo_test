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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBGC4GOS%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZjpPe8e40SEfSlCZSgUGRAPX6lD2y9h5%2FIyB5I1l%2FCwIhAOqVOegkOWlVlqhbuI%2Fi3PCefzOilnfxQeJUfk2vY73oKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7S4QpaM4di%2FcbZNMq3APsmGBLkcplWN73pPnwXKgGx%2F4dyXu%2B7P%2FbIsj7GcATSMMRNp5sy3RLMTdpVWgvKV7yHwCZTQz1qg0cZar7pvkEfp2zdhxbwNKLymYti3hplFF0Li1QBj5XIMz1ofsy3kZNmlRQeWFJ3XtbewOME%2BFNJXtcC17AwNZMto8SzWGWeLRdrvlxj8ug9WckHxSRo93bNK67M2FyJxgdMuX0dD8KOS28tOOqptHdW%2FZpiYY1d8%2BCtQAJ%2BC2Cbaf2n27%2BiccXp08kO8oBSSRAmN9Ks%2FoPdM4aivctLIKbLbKDXw2hNZdaV4x99AI%2Fq3KZyU%2FQ7cay%2FYOsfF7itN0o10ssuS661zxLd%2BPusFhDUW7BelwZsG8M%2Bets82wA6g5qw%2FwEKem9uBzewgl9LdtiOputpJuQveq2BPdTsr561N8AWFacieEgqyQ6qxJp5ETxChWH2DCWIJ2BTtIlLLlQNqWatCdKBdkqsbwvy44Ou1wqgXQFta3z7ZeyyEkU0%2FQodUy%2FCY5tA%2FiQmgOBcELqRGg%2Fz20I%2FIDQbBgqFhVkImQn0deWNixXO%2FyUaIr5NvwGiAlk2HulU%2FjFVoGYK6V9XT4WwNGOArzjLl5TfpCwmUnVtrod0bhMDfjkvBPdx2gWzzDAy%2BjBBjqkATHP4HAmtBuclUHZbeQfc%2B04aceXVBZMO69rZXAxbDf4%2BU0e1nJLzk3T9NGec4b899Tx2TKEuhx%2FoTOL2s1KsCGMTEr%2BM2JdduAdUzWRBzrTnjhF1O4eBJA9pki11yuQ1L6RCT0tWPydroElKffBVKNY8UJ45wV3oTeAC7dPowS8Dq8zjIUZUNLXyebsFg4e0uDzK%2BUNhLeEdDHThlXX6aZEGOAS&X-Amz-Signature=f915af3e06ec5ea5d39572ebfca96677e448571792635b9835ec9381fa279114&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
