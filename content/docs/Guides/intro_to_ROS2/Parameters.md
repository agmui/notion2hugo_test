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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUSROTGW%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIG0gExB%2FNTjZBxRsYFHNrBVjXpm%2F6k54bHocXzONBhkyAiA3wDcSvwYhdzruO5rjYLq52q0aEmPGzGPBuEP1xDS7syqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcYIxUTKf9REuNlzEKtwDwC9QjzTECygd%2FbGApkR2rWf%2BnE0g9VW7s0WqfRdgDawUdGz0993T1ImFHqlsxOJ9IMnhXyYo8Ix6ZtaIrsSuaULZHTJGS1nOMYVSx7piMJ6qLN5oSObIe4aHZ5hFa9m1aIK3VVBqkJUW8Gg78fPDkugNtzcAYI7pzlc0wox38ofQjrbYnEekCdErI6EiEkiI3o0eH3r20lFxa9Nc1iOl2fFsRldOE9Xq36jUpb81X8kccSVlfTB%2BMxRVxeWe3nmZJ4DVsuodfWi%2BG%2FoE6zKUxhs6Xv8if99%2FjEw%2BksVr5mE6tetA6TCIOTWY0ELdg3VMLGmnadNFXbUEt9QuTl2TJGNkwCw2W%2Bl31e4x7sAFGxKyorfJlosqukr1djn0CGHToCAsxlsUnEzivi9OGDlHR6tEJXMs%2BfOno0WyuLBjewFl6fv3y%2BsZUd54O5DnZVDHhgWr5BXPH81zcjO0oNu%2Bhx6Z0442TlkgKl%2BoHY%2FfEb0v7pF6hub5kt0Hwa8gQoinI5PU3qvfcJtPGd9psGIS2b%2BBM5qsXjlGAgcrg9rkex4b6FQX1IoM81ryPly6juQrXiskL7jTN5k4dT4pmiBgYGNFNcZ6u5sgqc%2BU5dTBCqFFaxl%2BITwqyltE7%2FQwwrGixAY6pgFvZuaVbF49o1jonGWdEpYDK1YUr2iHyOJNR%2BkSwcKFPfawlpyut74CHFhlITEzP0FnIc0h3k%2Bawjhb1dZhlnvPOHZsB07VCIOvOiLQu1w9wnEz45UQs1H70k7chy3TXs9qVEE2gT58fyczzRBf5lU9v004N5%2BMcO3Jami1upjpT%2FFlHuJj1tgd%2Bt2eTgbO9izsWBwAGxPhs%2BqgaQ6Lcxyig5HRoA%2BX&X-Amz-Signature=f9e4d3546bd505ef4b68fe5d4b69427bcd3efcf59be566d918915fe499ae7214&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
