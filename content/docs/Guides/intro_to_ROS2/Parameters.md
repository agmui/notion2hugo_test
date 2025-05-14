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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7PRNM2G%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T181136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDb2J5aX9mm3y%2FjURPU6LloK8ojx91uZlMj41dcKSF8DAIhAJwnMoj8ybEse2cdF5W1mSB%2BpAjFswPeTam3dWYuFMscKv8DCBoQABoMNjM3NDIzMTgzODA1IgzpjBsj46ypYZBNWQMq3AMgTwxL2xF7XHI7ur1lkWBqBhmVJzK6JC1DXm3weo3iihwW%2BpD0uXc5FEIEGaHJhSEO%2BVlSdSIBT5lOZVFBfgfnJ1sMZ1k1SRkvKUxWuioAyvtfkOG1lx2w%2BpChRYSuVDQ7FDbazT86C9u4TR78poznt2ErZFEz3UdXY6pShdBeXOifIQng9yg%2FmUYSNm0EgT%2BQlP7CUXTwEff2%2FeuYoJpscybcGRi9ucrdWuMuJLpyCtbV8qoXOQe%2Fp23JriK1D5FNZAqAdrRuAlHOJCJ4O951pbGkiH8UDi%2BeowyItBM8sDptraKXad%2B2a92ADEa4%2BSX9ZqjZNiRpfWJpObF1ckJ7JOVmh6AcgmkCJP5PTn55WmF8EZJATExULuN3%2B1AOsPJxK8Dbjy2Evyp3FT3aCG6RITwVRsm%2Bg0PimdbTrE21U36uYUqGVAF%2BvS1%2BW3A%2BtjvH2NgmdqUBjcjScc6gH%2B6X9xNgSLNCqTAHXP6Bs8PI5IC%2Bzm8fGql1%2FSTwSgTMJ8yGMl8BL49WFqecSJM%2Bp9FxbRLG95x7EWcnTz1lhlvHvn%2BjRBUrw0FVTJopEJaKZ8m3oF1w9iQ0G0GFx1xG3UmybJ7HaSexzT6sL0khaoyNbtEjyZcJ%2BfcJCzFiuzCGo5PBBjqkAbORUPPjqs5RAdp5DI2ODvnQyLe6CirQwDhmRG2gskjXsso%2B%2Fen0yNyEDe8ubZjpWNYWoi%2FAWh3Rl99HSul8iUVpqNOz2X3wYHvv2p4kqWZ0Ts6aRO8D%2F%2Fe5YtliHuzSpolChA2tBXNN3dQpaQDbo3O1VE6FccI7AAXux47X5HFqm4JozDeKglaEQeIHz435mlWLhnwKZqGY4grr2Ds6Io4Jsiyp&X-Amz-Signature=176769c0d1e2345851a84ac9a2a0e18f7e87ca6e451e1da374770d551b22e6a9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
