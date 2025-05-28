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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBHR52W5%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC13SE%2FMuy5WO%2FjWaKWpH9rvrmvjPljNROR%2FBuz%2FYphSQIgZp8uiRuuqrQyd4UX%2FENmueGaTkhFKEbU%2B5QFt4erBnEq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDLsh56FmGGg2EWqsEircA%2BBtvMKOpxonqlf0lVIa5dmF2VQ3kI2NEPu0dAGPbaJ%2FI%2FCrIYeKvuAVDy9nJPANz7%2Fzid8HGyOx%2BHpe7hJweplWXy9TldyvotAqFvSdjnTOppbZgN9pTQybpuUdT3zHCg7%2FCXF3gGvHfbS3VR3T9%2B1oEdLKbpN83sJlfmhydflLO84cmpiK5rJeyxsLJrYBYKAteDkrmmIaZBYi5afvAUdxjFW05pCJPN1F5QmODEuf1i2Sz7H4Sd4f1XvsUHOR3ty7js4AVSRw5zLuSIVEnbX7TWAE6DmccldnuiZeSSAMekjXfeZynJqHeiKiu9xdMXF53ozCypm1qYDo6KDZuAfZ40joKNqTGjV4jmFMrHtaQRu%2BYva2eg%2BOHFvpazHHPiUyVoSAMAwSMaL52KGoUw3QcE9%2FofsmY52F4nbiZzmMDpZ1%2F2Gieb2sCaBKWQb5ojrHEYa1RZJxIiEwhofSLrbiGqivKLAu8ZIRnB1iedf5iHuCjzoqTcKkCfhNfhEn6DxdYGqFk16XHcpsPlmeVzqQz%2F3gXG%2Fdfz1y7FrHQNaU2%2BlUuX%2Bj6mDbtLhWebjdNlDU4MjltYK8oPdgCfKixa0%2BrLDS%2F%2Fc89ws6j6OR7c1Y8uQSOzp1Jcpusw6XMNj43MEGOqUBlA6fvzTtguCkmUQho3oBAwmTtoQGQzrkVEPQOfW2XaOoZ6yqqmhGZjfWIu3FjpdrgzwTn%2BjtcO872WCR8Dd%2BnR%2Bww%2B9cZuCxvvUDij1b8mYmZlKeDugCC1X%2FlIEiTcmev67rrCH1eD6SPt0yyV4xus3oNRKRqtt%2BlIKCIfn3Li5Rbs0uAXCmAeVi8fEexV3iYEdeKsoEkjeSzyixCh%2FbuIo9dwJM&X-Amz-Signature=fa2f6f1fc2fef01046a23b04ddcb95fcd1c31b5161f10aef0cddc4d94732d07f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
