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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OAQWY3Q%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIEaTwkeVLn3Uq3ugnp9pukxv2XlwA2CsAWpc5the2M%2B0AiAEhxv4n9TLsi5XwxTp32rAWcQD6g5xZvyCf698PiNLfyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMXJtHIlQz2IZGSaIoKtwDOpog7iJyfl2cwSL0nQojuyZ2OCScQU2R4m%2Be2%2Fi69LuZn%2BG7okhIIw9DluycT5UkqEUh0BcedqAawMd51xle9G%2B%2FcJm01CiGRPhh%2BEMaXa7FkgjogX9EzTNBxnKxSCFqHOl214%2Bs1ot685gytK06gYPEhGLAhX5XOIF3g0FC3ZfgVftoA%2BJu1DfVjBokZ%2B7SzbylxlG5%2FdjRTz%2FJqxuryjCzfR8ghoa1n5uXSPWCh1Axvaj7PyD9%2BRYEDe2Kdtu%2BQl%2BNyFGDCFog60Hh1eoSqihk%2FHwnhjoAl55gADKOeWD%2FfBaKBIfOsp4GQPJmMi5WDYjgP6upDbI55WUaOmk8xDfMr%2FxYr0PHO46WdZiIafE5iilRbSC8XU7Dg4lPMW4jU3UOeIoxty5szTSxdvfRorF34tMVBIJbcKJGSwW2mKtn3ZENSX2DhGIpvvvcXd6MCZ4eg6d%2FcY%2Fi9Y0b1u4IIaJR9y%2FLI06M1d%2BXAbgEla9lr3ecb%2FWJ0qcNv%2B7sBg%2FscHtYMPSFlTbOyue86gdsPiMroq9luZ9GJzZU7XC1bzQTWeZImq5Kkq%2FBfnUv1CXxJBr%2BcYOZvJm0oVraaeMAxdZGsllYuW79Ho2dIcHnU7%2B5Zl3hHHfQCy47mXcwz8DqvgY6pgGp1xeGrTUtgT9RbroC7Q0zakpoPphsQSiKY2iZLnB4FamTSrumB4jhwKupBePc8jXiR%2Fyya%2B3gLUPCailA4w4KZ%2Bm%2FS6pv5kWFfggDf1gh%2Fx6RulCTkyTAUXB3PAwPTeVRHXTHQ%2BYAWnA1Z0i2934Iqz7fxDolRWVkYeN9FgkWw9R%2BkZEc%2F1qvQmdyWISt5gYf8IvL8GJ56noqj6FbmYKHz%2BdIOFQ0&X-Amz-Signature=ca2531a719aebab1e5991430b4c90460df284095819b53f53675b4edc79665ee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
