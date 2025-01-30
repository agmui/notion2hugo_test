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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKYFNZRO%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPfju5zE5mOyCMwu9j0qhzVDG0Hz4W%2BtV%2Bq0dCaRG8mwIgWlWqNjIxU%2Bf0P92i7cTZadcnh%2FDCnFz1x0Ngfmm7bR4qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxL1vEia9Fvjl9X7yrcAynZaeqT%2BLen0j2nc0NTTI%2FNl3dzrmY%2F0vtl0PRpGN%2FdrvOA7mGhc%2BxDUwGQmQ5ALAqRSBBFtDCDXwg3Nysxg1LLNEgs%2BDjzM7Ahc95FmmFTNAkfEqt8%2FwunHvy7X%2BLjgUEMRxNjcCYakMg7jFd%2BPEEhHinOFItpjMu8I1xA2bYVWapM3GPoci9vTd7hyQHfOkimBDfY1BB8sz8pHipwavlBM%2FEjL7pcuPCX49G9BQ8XsBgOI%2FmrBNIGs4WhR2%2FeiWwMnnPFEU%2BYiFz%2BKyySfAb4jxfrWHphvAzVKHibpXGHyLycKq80R%2BFZiEZIOGOZeZPdpjbazvOmp%2Fw6wpZRMNr1GRLA5lK7fA%2BJ3W554mlfwR9FAq4A0uBFwvHg405ruHU8wM0oShyo%2BqJplVfOTwulgNAPD9AqHcOEgt4RuG3cXAf921y%2FWCNfhjUclsqZ6apeBI23hWuYv%2FR7marfPj1KAQ3uupV3ayLFWRWjU3cpYNyn47IcHNj%2FktGclepsmAiMQK%2FAomgh0KrtIHnapz9aNLosOJlnH4Ry4mRZoC%2BRh%2FBa4kQMf2hln8f0lzRAFAMe6EOVjLpz08cgl3ZL2dsoCJsqUFSa7fKX88O8hsll%2FoK%2FCCy45eJxhPAQMOSq7bwGOqUBYUHnQhpqYyGHm3dmtIz%2FLAOPbinZiKR6%2FZeAft%2Bgt5oBoZYv18BD02l%2Bqnc6Aor6yQQPQiN2BXuP%2BkT2GRXglky1vy374MNKakTTY3UXsBqEHo9bFOQBHO6TZ%2FE9M5Wi89r100fVraZnTVNLwkbcnjF9mXl%2BENHrFWCMPWEbKj4MTK7GhORGP%2BkslZur%2BeSHddzsKNNCXb%2FwfwvcYd79x%2FCGas%2BL&X-Amz-Signature=97eee0d35eefc7f4f0b06949d55b700484cfa834a7f5994c3cc9a71e057d3ea3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
