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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYG32F4M%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T021915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmYkeJoK6b%2BQbeLA53yQCFc8gh1%2BUu1tL%2Fwv%2FWGajybAiEA%2BjWs2d6IBwTomNGMPvuLzXp5y0bDrWswb3%2F5R9BaE10q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDLvFxU%2F9p1S0gCLTtSrcA96g9VCeeILXUqch12U23jHH20F6h%2BbeFuc9VNZ86PDwib6N0EUgPIUORwKRwsPGl5%2BzCMm6TbRzGeNkCFfu7T3bBmseWn7Sgr3kJDzxKIuSzLLnMbD6lcof94Ehg4Uo%2FJgivWb7VqIDyXeQlIc2%2F0i3CGgWjAh8%2FwefpmGRttj3Q8v1fCQ%2BlRr7VqdEoqSGhTKG1ybR7b%2BT1IpPUUVWbAXUppiYFf8KTIt3%2FExwBCXvivAIr9gbLWmhULAMzKL0onXPVsk927QXp%2FtWpPu8%2B5PabMh5lLlx9k3hp%2BOOFE1MNJg2amAqJOO2Jr9yhhOIHgaUO0IsyS4ss5TfB11452icY7Bh6N73%2B9%2F21R44vSOazHpld3dr5USm10MLzF8iISs3C1BciJbit5fNgY%2FF7sCgJ%2Bt9vLVTS1aBISoEelySDBGW94gRuJ1%2Fwi1SgWxo8foL9P8nvzapOG9pb38lqxfPh95zYnMDXJIOlJCzSZu84okZmvrcHsdE3fp5CY4GDsZ4RCkW67hIXo4ulooh3MG5%2B8P67s6MDF0zuu4uaCRREbNZETGwMllm0OYZSEi6OAwUTBoFOFvk4ZkFGfdLtnOmG75FMlHwKAbR%2BPWe7HA28V1gdx6dUiZLbiBMMMX2l78GOqUB6hi6Fy3wyHHLzjLJDfulP%2FmCKubUvmx4zUrT50A1Kd6g4uEraXoDZadD%2B6%2FGpHZTniGu9s7XMbGLA7F2j%2Fxf3Qb70Dh9BvckpaS6az4zr5EH2pLhbvrUWbDR9tkcSJqwLKm4OGg1ZF0xScWAJ%2FOZ8Q37BPnHGiI6aSQgTwHc3nFB1R1MXTXoCd%2F1%2FaNBseSDFBYqmSAziqkQDOdi8lZTj1b4CSCQ&X-Amz-Signature=517cedf4cec1dd407ef7ebcbe00def8fb84aa7705154f3e00096a7d925d3a44b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
