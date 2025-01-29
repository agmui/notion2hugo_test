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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXM52V6P%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD754PlP9WtxULD%2B6QA%2BS6k7AHG9YQwxZ2exbzUvcPchAIhAOSm8elh4empGIjvLQsqd2QDVTwx%2B%2B1YQMlCNmRy3Zb3KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXYOgx%2BVUfjIpsgUAq3AM3icmGXY44W8twpLtolGKN%2FSNn6%2FGmO0ZbUALyFOM59%2BoNoYULEtDD9FJhpwP48eVlcBG2O%2BZeuIgdfpKE0%2FoOJ%2F6Ofz1fzutTy73qIq%2BJ5GItMGHUuJtVBUqYjq6gi5P5tjCKxfObhCUCymU0PGxukTno3Y64NCx7RT%2FkPvfTXOZeuHtBgE223lwy0l7oJy26D6LbSekbvgAjID6G8emvvH5xYv7EDbZHig0CE3a7ljIO1YT4yz4uGr5Shemzkt1DKl5%2FKbCvygI9H8VR%2B8L%2FVMoMM1LD09XtZgGVy8NENizVKoOKp%2BwnIFUQpsdrWB2cMe%2FH%2BEBFL2yCt8IrRN0yLGjQ0nRpgI6IMs8VIUqSabWu3UGm2JclYrveFoVJ%2FTf2I3KqBdMLRM6b9yPv12cOCyQ453G2%2FDygS44SHKW9NlSdpgO7LnYPAfnnbd3t6RbHxeZHbvdX8Q3pc8iEX%2F%2BMT%2FVm98CyXEAOuZstHBKcngYMOaH806hunNtUfbWJacj%2FK1LafbQjpluZEuLhEEgbkzXynvyX4d8P8vWeVSRO%2FHC98fT0K0s5NMTlDBd7DLgdDqZCPITafRvdVWiqq8Qedez6pJwXGsI2E7%2BMIq0A1o3ei7PTpUizOjFIAzCIgei8BjqkAZThEz%2FM38I0N95DbbxHAKpqSrSSsUjlVH6O%2BAGgTfAygO%2Bb2CBEaG2nYWwDY2x3HVpNlyfUHhL%2BgC%2BkU2hdQIduaOFzdvFkKYtDkp1zSa2yw6XB3MaHfbjFfWU80tFAZ5rdsKwcwujwoBPw9M3MvznRF0Hc4pJ4jn8Iu1qe6mF8joK6o4quU5HdYQTBdAIQMVKcFbYSoW%2Bck1kVKnrAlL1IJhrz&X-Amz-Signature=86ed936eef2598c7ed18eea637464a137ff592c5ad58c8809c267c1a69c67c77&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
