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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWYGAPZ2%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T024027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWlX4GMGhy6%2B4ETH0EJ1yl0ZjG%2FinWFzEmdUe36I75XAiEAyeLspJdn1r%2BTY9v30Vsoff8yWSCutqGLRII3aCdrwM8qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCXrT7HBqgf%2FStXLZCrcA9IlspFXJbJsocSSRz4sTsMf8t%2F7DKj9zqUp77LQobAN9XzmLmz2RXLs%2FgXY7J1IZ1yOBf3YmhV5ZE2eHZT8rVjbGH8%2BDb3kPuOiqJ04hVEvaTLmXsm1Qg5WNyRmWefkBb6YYwU7V2vZfisDosBwMSNQcutFmblRBDEIACOlv6dcDHl944pMfwJirOPHXhRNhBL1yALxovgr5T6vtFnTU4362nHPLlND2sIRSxTlejKILFM8WX41R5SgITFWKQI%2Bb%2BcsXROS%2BvZViY24Lij5UN3F9mwfX%2BR88SbvY2MEDALXh9Ah8S0p6Z%2FwIUMN%2B7ATHV4JyfwMaIpKYU5p4iBd1TPLVTEWaUFmd2BOxAMRqUrIEFUdbExxAa5twQxK%2F%2FhryrmO3p6u4vYOoOfqUrI9G6XuFzz5I1hCsCaqyONA5dmxSOQtl0%2FOY4O6r1g%2FFxuiWTfdLKxzTkDfcAz%2BgzQ0YDJ3ZgOP1InEdCvNbdbyIjC%2BqcoMCIJ4SmEpIRDCs%2FcYT6ZNGfPvKuwxiE9pcbOTPCEKVVTpkbAZDLLGHB4elUiwuLDQdjHUS3gcs5h5CUTJ0yyQeDIycUODxRQFT0UMedXqhrD2ckdgRDHM%2FMDQGtgPqRLQYjzSNcJrL6qPMLmgnsIGOqUBJCKNTDwN1o9rd%2B%2B2PZ7MQ4umbxpuBI1qfq9%2FbFFziBpqvNcWCgO%2Fqw7G%2Bo%2F7kFgutu4G3iqnibTuLvNBRr%2BUXZQmy1CTEL0w8i6magsf7WaZIxfow1IeWqz7ppdFeTKFdP1aCfCnIj27XGY%2BurG5dykw63DaqSbb57wuv4nNLJSKQ2Fm4HJDaGy6RWGecLoasF%2BGzmJ%2BrEe8kVrCZYC3jocKeWwb&X-Amz-Signature=bc41b8525051b302b7a33b6a5d9b7b56371541a87c5abc3e16c0297739b2d56c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
