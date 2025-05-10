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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCXVRYS7%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T050826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyB7SlFg06D9BA8dK%2FIEJcEEPZGvzTjXbj9eH7yUV7wAiEAxWxPVYCKypWTbTdXB0I1Ju%2B%2FL9OeQhYVrC1mJ8igS8YqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbHdeZiVimKHR6HLCrcA1AsZwk8EzBLXjb%2FV8eD%2FuumUnaCAYb4lfy5gMqGGN4zB8I7D28pTVpyPcP9%2FnEDwUZrJuIn2SAdevIjWV7dHHnf2yDNPeL6DcwYbPBMn6hQ3UZmPrS31w7bauuUsMZYFmUHAWkAkAlXg9Gh134QZDzfSNxNeQcmGyG%2B4x2hUHxSopMn40R%2BGV5tfZRQVYe2a9ipZ04h%2FQ0QItaZFms%2BvtLN6rVAM5%2BGeV12GMRofg4Km2K73YfYmQSKssjgI8L%2BbEq%2FyAoefH7%2BUecS02b863hK9SfU440FClZHHDFLS25iyYuHpGPG2Ka2p8j0OHuH8ttutU17FhP4nijel%2FxXjZK7gEQvgKFHW16ZQqslUJaC%2B2FEbPEemMsZxU1Iy3amdvl9ZHh83tO8cy1DVn7tnrstWEUD0YfdKy%2Bi1Kiq5iZH0mC9fzAC4ZMwzMOm8isgtRzDAOb8LnBLUb4hAub5V3iqeyh1vgpCTIvfgFaoMUrb8%2BNZwtfVZBM22eXVvbW0eMKm4b8vY6rjQXHM4QhVE5IXaupPhDHyVFluf4f8cDkAW6Wn6mHzkWtaa0lNwjcKP%2FSG9%2B7pLFaXKS7LPMIsx20Mopy5FQ6%2FKMUJR%2FLCSUAn3FSJjUkfWYq7oQ2LMOi6%2B8AGOqUBKyrfMyX9UXZE2MXlXqS4i7tSVD8DaAHXroaV9StBiPK8rIP%2BUxn4nNsp7C9En6na2W3NPY1vS%2Baa0u3kk0%2Fwq8rYSoXA9Wg3deUJau5waA3SswPE%2B%2FrWN6uoOQiQgWC4THUSxyKV%2F9YGGiyUHMNMu9074vX4aErppiVUJ7%2BNL2lpVmP7WnaRVrN209Q6%2BM6C4kn1uh6s%2Fq6Gq%2BIcvwvs22%2Fq4xn%2F&X-Amz-Signature=b2faa5210c4b078ac6b628d6a9718855c59df8d45aa4a9c09b6d8d90505bf77b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
