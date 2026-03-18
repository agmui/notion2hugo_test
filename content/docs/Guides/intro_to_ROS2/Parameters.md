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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLMZKHMA%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCimUEEw0FAQ3%2F0Nlf7tyLsj8ZJLLsFvgryjLcj1YkCYAIhAOfw2whpjLeRcDU%2BuIx2roaODugSl7Z0H4ngbyXen9eFKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOpy37UH%2F95CUi%2Fusq3AMjKxpsRpaTyQaiLooIXHdgW%2BK2Ji17Ns2ZTRF%2BLnblhHg%2Fa3KFjvqbry3yzUQlMm8as7HdZpeZdrIiHPhj0TlfYufBXxSPD1hZPh5EwQwWwCo1kreavBr8CVMSeqzVNNG3UiS7iKyseerocutGrBUlWGJ3%2FyFprK1DG4OqL5QRkbuV%2BF98beqBiSIdNW6x19SsaSGm3WNWpa1jB32aVzXYDPmLMZAMbgmssyOSFgYPC8%2F32RCLI%2BLt9u1yW0U%2B3%2FGkDCzhUWvVfiRMTp0GdwMEXK3%2By87ZbUROxoXY4%2FOAwr%2FdhToQnG6WQYLhFmuNQ%2BMIGJneNLTITdaa%2FvOZsQGmlWPo5JMRFdHnSQTo6jlaOsUiPNG3ryT4%2FvxJBYm4WMNXZifdZalVQZYA91RQBzeoQRqihF1xfhmAv3jz5J9kFsA9%2BycJ%2BVLbwo%2BpgUgSFSzte0MnfovBSjY6Ccpuf86eR0hjkLAdAp7Q4w5CK0VM%2FB9b4LDq9D9WM9VndFIXQPApCM5oZmk5INcCnbntCcep1G8pX0e6f2GEeSQXKcPd1%2B5vOV3Er2VijJPcakde11Mmej%2B3cv2bz4vOj0dC1yaoH5JXsYvODMYZTyUJc246fL61TpT1AF7XIiTJmTDT6ufNBjqkAS261WPms5Tt4gBRHdaAMCrVvuoOJ5VyFuA%2F3tp9ghwxvFM29jCdLPbf6fJ8TOjbo61YIE83zkmFnqSf37nAmgYNt6s4V8M7gcx0Qc2rqQIN0VNZWua2EEi91jyinPwNmYLFloUKZy9%2BoD%2FDtnEhZjm0mi1AdZFLUGOQhtTATcu5ncCeXisFBivV9OQ8VRiQFhBNWo3koFrTIumiCb0KontXrBwq&X-Amz-Signature=45c7988b03f75bc3e6c757dea4de918a4a6fdeef555359becaa33251bf8ec29e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
