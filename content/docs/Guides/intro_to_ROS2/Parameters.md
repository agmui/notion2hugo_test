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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5EUWKPI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDttOH4S6pBO%2Fmo%2B%2Bqj2YfCi4bVtPJZ9dgAdM1IXAX8vgIgUx8Lr6CF8Al3vO2nrQoHXRcuAzmwS9t2cafENcksFhkqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCiEEjsLl9LrpF3EFircA8Hg6XIRg4airmqmkxu7V1jRJ%2F5pukgB3pPcBc4XlavUg65vgnIZScR9h9grQxc3zB7khjDjvyNR3wfM%2F8vhKYDfFLbanKrBVPRjkfY5AqnjIf%2BoRPwynEJ6JyPx6WHxWUfHXlncRKp48owsFx8TZy6BVB8Y9eP0aoVG2o6Hig9EhCUnQeV7nr5%2FGXbAEU4N9GOlV3tA4zowX1%2B5hDBSd%2B9dAybdoJ0i6hDszZteccX74E%2FtywIrsf3mrIEJy2fYVk2mK76mPBin4a9gzW%2Fe2fOSnr5iiDRcKqMDGrWHICDs%2BtUPhFmIcr7KLO4KEO9v5RMh7u4axr2mJgYQrEKw23gmWJrzo3Do16F%2FuX%2FpmFBHRojdZvNFE%2BonQSofzhRujqkxD5FO2hcn9elrtKsUgeMXuyBRwO9kfuthj71yZwaXYs5B%2FmLWj7MgOAX3PPbBsdjGILj3xJ8CqS%2Ftnm7G9UV27XLaZ2Yn7LZzu1OUd3Q%2Bi11laSsLiANIwNgB5sJoLeDqXIyY%2FRfpuct%2FDLsY%2BDdNUruVm55zePv4TRx9WUXdlHodziKjV7lvG7oCaFsxf1RBgsS2e1s9JVCG8P4PCaGzuSNd7aNP7aVJCBaFnxrdQgqKDzHRmO1qy%2BZ%2FMMrLo8QGOqUBuetuC1Foupd6b5b6iOCVtAlYFmKp4K3nsLMnChIr0U658pHmUE8I7r6SHEE%2BMhNhQRrYcX372YDImnVK%2FAkI2OyZeWbREydcTv0LiA7CdAWzmmePiDNx3mfD2Izq0pmeih79aFxVazcH7IcUisBNhwCl6BPhZGHVRhh53XYYXQNYfBaQdOWUClLwTL5xp9uUyR7NCr2bkwiKjGkCxYWOO0%2BZn5pL&X-Amz-Signature=c81274eec0002af97ae975d0f9239cf50ec544e3990fd8fead9b78e2d07fd7d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
