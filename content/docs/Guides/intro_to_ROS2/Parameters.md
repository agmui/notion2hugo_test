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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFFF53IP%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T110156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIE5dn4bB9Q57CPRLSr88bslrTp8DVapS8BCFRlShDuckAiEAhfLEKdUNWvWINkpLbU47YSOlkOsmXilgpKdwT90kMAEq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDH5gT2Sl7113mO7aOSrcA6FVXOwz4WUxZwGIXw7TzNa9th%2Fb1F%2FY5E8hZ9u7wsqlENlUzFQoDwjOM7Cxl%2Br2Q%2B2UczG99JvRdT5I32eTBmnGzpt8sJ49Nk7qNmPR%2BslLoJxqELbQskvBMowtAKfFC94Vcg%2F9lcL6rPsCl85p9X3OEDa77iX1vZA2jyzj%2F9bWMWdTW0N%2BgNlc919VVBfh%2Fo44NXJGDjgA%2BmIemsNPzex9vF8zMEGWRreKT3GGDIcN4U7zw4IXiwsQhUsjS1XlWzj8jt4sSdw2tq9UB%2BEC81QPegfEpalNQRXXEWZ5%2FWA%2FBjBT7YpmmdIC5yCDeRk3WG7tD1%2FC%2F4LZdZLTJddIj0Pub6dzLAt2ondLfUDUMfGwIzzt0%2B32rdXYpzVmDocxssMURr929vaAXZUerthi86Q9lodMjSMKDMdGCWdc7ANmfWDPzPcpgPCPsxxw0TSfSeVEcM6qXW9WfnTkB4qI8okTXCSU8LBgvpmpIvQOLnw2Ui9O%2FvO7R8ByQyLTNfagu6YJHXzdUaoqfBp6bOMukmlTi4sV%2BTW9Xs6nMiPNpRh428k3jFUuz82Y9522ocX9XBkVzJGZe55ZZoDBjuf4YjO1UNugU1%2Fd9Koo2FYeXbUFW4YUsD%2FL6s4c2YQHMK%2BqqMMGOqUBOg7D3N5BvwmkO25WNagD2agXzzHIxWTJPzm4n6tGnZPMaX9U10GwA9Q%2FZ%2FyvBTbkHX5upUGdsuHsK4EMYb4E%2B%2FupjLxhJlWwVgyS4bLrv4cK3UVagPwyBeT0Jl08SJDaxa%2Fwca2wCmX%2ByN6ZXIRpJoI52A6t8OiFwtVokDj91WuVb%2F01I4NXgKtNBexBId7E06NC5tLOLcNR3PdTtJJw%2BJdv4rEg&X-Amz-Signature=03de3e2d25f4145914d6d7170ada3cdd3e5111931111ae34e7923d6c4ff5711d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
