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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMF2QRX5%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIEDGiAFgSVsXFuRXRVDxMwIk5ge%2FbB7HulILnY8kZR87Ah8HTKB701P%2FQNiZ7jydYT5GKnKQXYL5abvsdiFeMpe6KogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyjqhXCMRXVYaaZDkq3AOxeWVsFfDNV8EBJVK7v1JpmInwuFJMEAtPe5sagYWF3B%2FBtTbLpmgKfN5L8sJFJMiykP4C82rh0TJjNbFpnw6yzjKE6PF%2Bfr9SW25QaAIuXqVzNBdkYXtc%2FGlrSyHbuwp3NnThslZiGINjo1VTnDIHeLYY0NDuP4zaOBRMysWcM2sHfwVnAUEeZSSsDg0W1JeR0i%2FppNXyPms%2B65l6W%2F1tS7UdGzeep7kjtQHYri47RaYRDDp5%2B5TpCFyfaawOXSpmgtx3G%2B8fkGFsxAsqwPrn%2BD2QPGnBHWQhM9vD0DpP1Wq2nkNCGKNO6fGJv6knz%2F4OMdjX4eaPB4TqI6fTCFY%2F0nBykLwq2If%2F077qYKGlLpE%2Fgb3Yh4dk%2FWAEjfxeqrhmvUL4%2FbTSI%2BAZnpNi62XxnyncOCtZ2I1Cwg810X0OAWp3uRSaq%2FB20ncn9kh9gBrZHIDHXlAX3meB76PrSpL3SNnUCrreJWceldQsBmUay%2FVSIEVqwCyIL4aKx1EFgepjPJj3qFnUdRZ3IMf1xnwDK1%2BfyNceFj5QyohMRDHg9tus%2FUgfv%2Fm8IF3dgetAlW4eQUreMA98gy4CjgO5LKzLgjMArZsBS0hnWag48a9%2BB8wqsaPPw8rd1qhD9zD3ktK%2BBjqnAciJV4lnTkod4zXr7v0YBoPVzUKeftP9VGHUD1M2T9GMMS9PB4jZZCo8vfuMxT%2BqL04cBzUfCxWWlX%2FbrLfKZEckgiSyJflr%2FFVxXgqkqf4MxIBvkOeO9a0neMYALk57h526HN5kAAkxWdR4zY57kBqJzbcqT%2F%2BKFAuMU%2FhgiBt%2FZ2ZxGd24Mt%2B1zIPqetlisboSBsUGMA2X1fNTLXC22m6ZExMEsolD&X-Amz-Signature=ff676b85f4e223d96703a02963e5b1aaf4d42b5969aeda8a750b6597215c418b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
