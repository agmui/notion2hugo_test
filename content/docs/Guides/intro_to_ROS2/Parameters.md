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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTGB3QJ3%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T200854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHidkn%2FdifxTn4lP82c6WaXX%2B8Fw7U8oVf%2FyfLguAV%2FpAiEAoGkxPFbWVzmnoKETD%2FOTMLYhJ4WYrqs19VrKGHgt2qUq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDJ4BwK58p%2FuGIRu2pSrcA9qgK5WfVHJ78u5XHyqGrMz59xjKBznczDiwUL4oIBfK0eUb7cXYMlCOAHztXrvMvrlpDJfAhNwqGbMKvzOavyWScIpi5USOP9zHJP%2B8egbNrgf9BSmMVhyN25iLsI62%2BDL0XYxWpCzhkt9ye36Ez%2FRHRKAXjM82ZlJVO%2F4z2Fyh5XumDtcEq577enItkNeThl5x6qj%2BmFTR8NWiK%2F4uDxVhtB1u1Iy2ecH7DbqXK6mWtLYud5ZvXG%2BfJWsWA2P1A5QI0plSI2SbxwaRaQgGQQMzH60rS84xDwswHcP%2Byzwu2qInFJKII2HZ1Vu5bvbremPMusY6Tu2LOMq4OtrgCCMU7H%2F9Jy27FlvcAq7iXDs08xsLCZBOpiCy5RxWpuRwoFiqhiJodvUIHKaIDvSE2lQpiawlnfn1Q%2F4A%2Fl1lDjGQULEDTRw6w5sAJClBMpAsLmzJ19EyAf13j4ySZhrep03Au7H1K6SbHyMrqazdMaCbr6NuCtyFxSLgcu8N1JxHvdYExeavVOPKfGsfJD7p3WdlJa6n3ms%2F%2FQzvLaw9srtAZWYVe8nszRabca42I%2BeDjAGwx6ayquzHXqMV%2BzbAIkHXKNiE3MJ%2FLem%2FHOJzEIq7lAUwgiBhhQyF7BSsMP3wgr4GOqUBf4PWNwkPuyfqQ7fn5ZFQ%2FfylL6WBvUN%2BYq4DfqHLgt9yYOAHxYB3H7MZzmXMcHa2WW8B8MMY%2Fsu9E7XLrojKS90Og3K4vrJXexh5MZhIBJXiYeV97fMQigFF%2FN4x1zKbBLMPKHJuVCG0VDV1HqtoZ28zvJhXZsM9ZUg62ckAlRIsbl7lFIMInNPgzFyc2kjAscDGtYqKzDij38sjHTxdApfTeQZf&X-Amz-Signature=effb0decb0c5ce12db8c18472b5f40de48ac2f7af93600df1bca6b0021696b81&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
