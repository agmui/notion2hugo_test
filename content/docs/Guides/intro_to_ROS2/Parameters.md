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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUF7SC37%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T033343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIAdJIEme%2BoL9ucwPNtrDZTkgXjBL5ThAr4e%2FQHLXBKFaAiB3Z2EWnUE9tRRTNQePpuzyE5iZb2IZ8vojKUY7qqJ0DyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoW8j6l88g6Js4Nz2KtwDhYlfrPWKher0Od0xjWrI%2Bog04cs%2B6TBv6Eyct9AOKpGu6CjVhBGlcYOHW5z1uiKZLHtx3G6d1HAz1PAiB%2B2JJ5dsRhp42bOHAweg38XRz387ARxTK64MMGTIMNv33sF2Nt5PfYzSsFWPuXffb5CcCHCmpn%2Bbeq4XaU6cQetHAE3ai71v1KnmCF%2BW3DTk8QKkerw9XdFZ72ub3qIjum%2FiSha8Dnwx7stGimzEztYw3lsGx5k2SLB5xPBXTP7FFYc7k%2FJR78V1onDiUPUoAwVxUveZjQ8o8oAh133tiAtt0fO8HapBX8oRDIPGJ5pKJBm9wmFJo7WQnG3Fe%2FTrq6CMCFne6f%2F466b3BFdBhwo5MzPCBhZqhU8%2FSR5SPQitbO8ZHyAuoZVTDJhKLzE4YbmAIvZWppLeDgwHJ%2FWVsYFCnQRjiHZKBdJFe27xNZfd2PhsDpKnEDJ0JFfm6JVpWedj%2FGAVGLkeCHKHe4XEBZlhTDhoOXSvgC0gCMGhg3bVjJ%2BHGYYTIL%2BcMhAmX5Nx9V0G7BUp3eemU9XKTMUqz6kwbcpyG2%2F1gczDD4CX1wCZii1NLf76gy4g0%2FgaFj6Ne2UdA3eKxJu2qtZuwIyxFOOxDDeH6YyJJhP8zjZIS7UwttuVwAY6pgHGQgGkmoEZknLZz3fKE3B67c2PT%2BRfUusVIcGumrJmAWE9dcabkta59FgUuvXSjc6V7yZGZEYUrZpBDEca8PUrAWLknaVJkzlSteINPm22h5zpffbCWDE0eA201zEaiiPdO%2Bvwn0q07DzaXB7DOst4KEGZBX2QsSK3uU9z6bp4VBm8oeEnLRQLpsdtnB7mehZEIVMUpT5SWE19PWBIQ2g%2B%2FHTyiUzb&X-Amz-Signature=1b76b02f6343e2388c322aeacbe00f0edce731f046eb92e94cc544735e18ac76&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
