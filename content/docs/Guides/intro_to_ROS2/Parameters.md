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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IA5I4YC%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFBYmXpH0LlXnykvarl4%2BDQ9hlJTwpR4x33ZBR7eXPIYAiEAkPbjrBKhveDdsqf%2BZvjxaSBsHGKOkNNu6ZkplCFk064q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDAv8G7LImnGuaVxDSCrcA3rhlQn0XJj7fik11Tlk2aG7%2F9D6%2FcSHW%2B6zKt%2BJgwezSMoHaOoRDHBcopxCfgAPkz71RnnecMFsMywpNTIXdNKnT%2BiK5I1Ezkw1HReaAdrKivhAbfB7%2BAsV1J4xgUGEUbKLNab7a9BE2Aiwv6ggNXg%2FpB%2BgyYX095plrsafRdHDMiGPLPE667XIF3AlCc6wBgj5A3KYGDlIn%2BOnJVDIU8yqeYyCdlvPfxpEatKEKf5DA3GhaEtS9vLB097dJdvq02z3mNpWHGTXGDAZWDPlkv5Wmkt1xxCwcLzuNapZp67VgYAT6e0iX6U0GjJOGLr66K5lsp3Z%2Fl74H0WbVMjr6707lwJgH4GCKg60aAwdI8f31%2BVGj8CWCrSNMJswRt35XSvpnQF%2FHrEhCSpc0dZXZlAnMlzl%2FC81vRoz8YwazGUmH4L09mh29TFoh52HwkWzJQ3tIGbp1Shu6h09L43uxsSdW6srHIdn2gWk8DqznUmXIM2YQWhul%2BId1xi%2F7mcg%2BUd68A3zXhVvrdD75AFqTmqf2SH9l8zh0qLQ2s59HomrtBkqyrlKZyxbdtpeOH2C%2Bmv2uncSuShEBKATL1X5trRWUzspw2AzAk%2FKHWXZE4SDBmOELacy66HcAf%2B7MPiz6cAGOqUBFYlQwd5GTZ28x%2FV0bjGMlt5vx4EvuY2TH5Et9jNRstUB785ZfURFFAVp3okm3er9tnbTgjVei8jFWX0sfJsr4jzhjo8kdreAPktueBvNYMshnZeBPo7BZu1GJhNmBAFcs7KqQo9%2BW8x3tiDs1DnS6cv8x2Ggcu%2BqmLWF7EiVKZfnHDjVITtEZRdM13j%2FZmUnhoMMHe9sOtfOk9HgXMA4%2FL9OcUoU&X-Amz-Signature=5b7f01e3d80459fb30211209754dc07311be4d1832707dd102da01bbe946b076&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
