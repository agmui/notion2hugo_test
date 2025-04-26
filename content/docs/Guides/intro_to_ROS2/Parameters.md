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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YGFNJZY%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T230737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4xWq6BRQr9Il2m84MGy8hMvnAX%2Ff78xUffw1c63DG9AIhAOu71PsddHwOXHb8sx21gsXOrI7dCtpPJNy7eQV4FOFsKv8DCFAQABoMNjM3NDIzMTgzODA1Igxi5acymGHVym10%2BWUq3APg3m%2FwtdTJqwkezL1ppnlB1eMXNSCqQhoucDguZgsVDthHsvMA4jOjBYPpP7DaeLZwcOcQXWesZXzmRZhddVgXlQC2khm%2FNAaCQngHqd130tZBTqlpSJ84HSE7lHtrWIk5FNEggz8HbkwAsRiuxvzzFc%2B%2FVGZ4TlTJPZ9FMZIYAavod3rItbAcO1YPoOqbD%2B2oRfpUFhOAnAvLzFH1rgbFUDTPDR4iJuiV1tJwO0YMWt2m4T9zrnKMzm%2FqW5Tjnq94Ki%2FNmQz1iBQM6wknq7eFBUg%2Bh1LqE0cOiANLqnqGnwk5hspbY79DHZxGj2odKFtr6jToWUlZZKyhkSFzX8vSLDDQWDI9kEavR6mClTiksH8IhsZJxNDrHSccgYf%2BI9faYavRN6oR%2BByjgrXfJ5NMv%2BIjvL%2Fe9q0JY%2FqGmM8COzPOWXhgJIuFEqOkSzcCb3K98epYPBk2TrkVGbJAq8gbjTxPrkKYg7N5cNV%2FBfG%2FO8HrugcOwQDHHkZBDBVCbVgH8RBAMzEgkNyylsKr%2F57e8iESlLhox4ESf2Chm3uOii4cBnWCNO%2B2qP%2BkhUVj5b48cg1fC6u%2F2bUVN%2FJzMnY86J7yGrEADw%2Fl3pQPkRCTFWD3gtTLv17cGlN4JzCBwLXABjqkASPpiJVUTxNx0SzvEMGbm%2FwGf9UzUnnrqgDp4Yf6pYQXPGFd%2FQCeo%2Fgsi%2F98mIF1L5Y5UbLXAOUCiMV4Q3u9qUV0weafe1HD6hH3ttF9q%2BZU%2Bya86LL%2FYZMHvgDj7SOqzdd%2FjJI0qJJdA8XRPp7Nvc8d2ITTUEG4y1D%2FEocVMoK1DC%2BOc2yr32kvECoBEx5iIaneaguK41a8iL161dCszk9hHBD2&X-Amz-Signature=af196adc8217e6e6eec9d4ab0a32892bc22f5c338c90dd5d5f7d485341e72825&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
