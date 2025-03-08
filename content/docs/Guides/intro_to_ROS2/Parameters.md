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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DOQZELB%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T130158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDA39frvkR6xR83nnDLXBIPvgjAITFd2DqifouHjzqH9QIhAPMXFlews9L6bhKZQlAYUaT7n8gi4SAf%2BePAcbrntUN9Kv8DCFkQABoMNjM3NDIzMTgzODA1IgwYkFxiQif12Lx4Dksq3AO88h7y1YlSdzgjj2peXjmhTfzoaQd5qaKFTLgtM2HZRxoX1HTKLxq8%2FOhMuQmgEofRDiSZkyFiEfMUWsJSa0Cw%2B0EimQvFPVBK%2BVsBnHlhkLPsH8AcnS3s9znorHvpajPJfP1nzCKGBGsIgpQYlAodAGvgqqN5bHItAPkmBJMaFlemDPJ8nQR8hsJiDiYTb5h6LS%2FSGsNJ2XDVhau7bq3wGzRljRvxZT2wpPnCtRIzQ1GxxiHZz%2FJJGWl17JL1PWHrzj6k6OGVgt3T2Snk9daii%2FsoxZvl5Sf9yV1LMwYVFB1Pq%2FaPr3GEvlN2CwbM788qJQ%2BlE2JMkNyOxkpPPj2wcTyUgeDbBrLJU5dIBM6tnixBSfHz6CB5ud4ZJ%2FCfXh15jRU0NAKWEDr7OSfy8i5pPTNjIzaLOAaEJr0cG9sIaCxLWCnAUmMq5DBTrjuS5q9h8%2B2HDI%2FpxZyDhtTzzzPsbPgpvsxb1yUdnpb4z11EgnBTava09%2BsCmaKqVifQqZX8Y%2FQRoxUyFVcNNKsMwUfvekFOIml4B16VQLwKo013%2FCpcQYMas4%2FEIr%2FKxCxEhfOiNwnOsS0opmwLBQcdt5rZI2UEgpn5AJSj15b9JMMt2el3QDmxX9d3Xyj4jDDx76%2B%2BBjqkAWsP9skpp1hQJdjpzXaO9x47tFF7bXCMbXceEhe9BikR4kJfgT3HqaZDy5mwUSkT4X7ENMHpS%2FE1vpBvqQIXUdojsMraWDCHk%2Bv%2Bz6xjQEvwYbBLymwg0Y4CRHkYFpT4G1r8d6tB%2BIMGuDWYFgmjkof6cA287HizjPywyyNNtFOBoJz7xuQ3%2BZUhrN%2FXD4Fb9Sli9dRkMzzCGgcQzUX1dKjun88J&X-Amz-Signature=51bf8970d39a995e92f2a7484776d392baa77096163f7a35750ce17f386a181a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
