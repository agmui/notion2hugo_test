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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFJ2YYEZ%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T131701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIBVtOcvwFMeTdKxw710GAO8QtiG1n5M%2FzH828exVQ15wAiAxXxkYYh0Q%2FUnwsULca%2B6n3wr6dnrcBsZvi5%2FMeTMKtyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMHl4fo%2FC6uGFZT6u1KtwDmKtnNG3AM45kdlDeKCyY3KagcSMLS4z7zDof1zRwD3uSBRFj0zJSlLH1yvsJVYxfHqKqKwcXuXNg8a9I%2B0poOHrZZ0NAOH5EaLJfwAiEPLhHlI8TRkED598HYBZxqbnS2to5Ntz2DopwvnDLGfqOoB3LUnvvtqh6SfRN3TKt9HV4kwCGPxBZv3jmXchvkOxIlkZWj2Kt8ltAjxkalAnQbsuK0NpL0zNY35W7hbLNwL9X76ub8TcfK0QbYSaB0umhzRgn6O2uA2KHCrtNgi6%2BM3VXbhXSXRcwe6v%2FAHU%2FwZvn39iUJRHlH%2BArM44kjbUq0Io6iL1YwMVWlp4hXHPPrFhx2IA1qbYJLCiboY4IxMPWhAR3dKeeCmB76Sf7ovew6NDKVyYk8T01TbDc9pwkaUwusge4RAikcpBh1TM3mBBrP2VnO7q4YjZKIDRSCuTMi10FXvzzz%2FsIsGYQCCBsbKKKuXKuQf%2BcDaAJJdet%2Fmjfr2BcHyi56n07hjo4Vanh4TtBXLQ%2Fzqb0akREXZUQ%2BrhwpjOXfxnitB03zbTe3jGht%2B7sfs0r41jvw5PipzG183Pkudozm1gtX5yk4CAwseq%2B8NrkwxVff5sGSmak4ubEXpYlo%2BGqCXlblEMw6If8vQY6pgGU0hF8BP7HRdIwUVeu%2FEJCRscsGtcMFhN341oXvRqNr9degSA6R%2FtPZLaXaDjEFF8PU9synbFXuzVJxFfiLzsM%2BZBFSu0%2F6vozDO0%2Bk5P1oUdf75yuoZ%2BkplbBFepUAgvjgxIKApOZXytvjX6quyN173aTuUgKGgrlhlVCgpQs0xYh2UzgfzQ16L50iGRQWKxeMzwukTBN%2B6RTA0xojcVc%2F9t7k7Ll&X-Amz-Signature=1bc33ed5ea895706999ac79e5c17107354684dec413b436532c121b45c73c3fe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
