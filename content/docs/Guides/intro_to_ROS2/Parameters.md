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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZNUGP2S%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T080907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGpnBmW4AqX2ZLt0JeC3fkGvPKDwBVD2o0RlrRIsRF3AiEAvZJuDoqf7iFAIgFAHZjO2%2FMgVCSNLB1dB06vZHLt%2BtMqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLQJZlDwwClGS3FrUSrcA56DlAMjEBUE1pWdEzmqLmGL68dFaCt%2FwG2Zc%2FjBl3b1JcuA9Tx1RJ%2BcL77fDUPluTlbsOe43fRB8w11alhrRZg%2BVPC24hB8wG1IwnGETlfoNdPSidpWBwuHo6Bejva6UF8PO2KDcDzkuiaSlQPujx%2BX79Lh5I%2F1wlcAJVfvueI3x8IO33D%2BzrQQ%2F3xn%2BDRz5ZyUrgJ4miokp%2BWz2OkmSR2PWFLVespwYAaPGSgM%2F%2FTSdfb%2F0mXRX%2B3QVteRZpIZuJ7ifPCm%2F7oK8J6tnxiH7WG9Mh9cfBGa0jd%2FCuKE%2F8O10Oc7MsTnSq9MUTMaigeWGzc%2FW6FlBkypmYKIbEbWi25%2F3phTfyuTN4DkF262nelrxh4b0mB56IqBKn3I5y0fk4GzkuT0S9R9lfn7WJF5S5gP%2Fz17kAxp0aITCnUzivHgZt%2BxWW%2Fpd596%2Ffx5gP9IcZ9klQLJDK9PPTz5CGaqufmMezXCTqZibp7rOxsfDSWuyC8X%2BwYTS52sv%2BvFrRUlgEelm3P8lmfxI2rGnhURhrP143halxVAU0PqS3H4w5x3q6cVpsV%2BaxQ1FUpTiJ8flIPHoMkAZQk43R3UkNThcFy3r36T1LlunhxBhdKc0YF2vcVRjoO2%2FaP2SAgDMJHH5b0GOqUBeCfo7gRJ1729742USY%2BgqG%2B2uK92xpmrSs9e%2BFyyq87qmYaEJSAMeA6eCfKDilGAUvkJAdR6iRHDCfxnNFD4ZAC6qIY%2Buj9VBHDmvzKjO4gsaq%2F0%2FvGJ2LNtilQzr8NeDu7e1gz00nNhuuMiSPpMvY9dyX75iJyfU1wfv3riczB2NAWsDSwkaUz%2BlXnx5r5P8z9awJ8aLzdVluUVrpxm6Ao4Dqcv&X-Amz-Signature=31782e9dff9092ec62f5bebf12bbd5cc659293f899b7ee547cd790463ff4c355&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
