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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HUQTGH6%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T220845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCWtZJa8Bveg4ZBagbCVFetrnzjT0Wj0mnLoOnnL10kygIgZ12s1icndpcI2M5%2F8Ya4PyI8TdX%2BF%2B%2BsWgmOz6ng2tYq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDFZKx5dRYV1epGWZpSrcA6dU52KrJCkYCuEXxGMaOtiLvKYWI4o%2BDKfX%2BVFNjlG8yxtmwR6s%2B%2FqzTBRmR3pZEp70IPa5JDmRdonD0DSoRw%2FAHJBc16a8TUv12HEtBao5qEpLsZJ0c0291iu%2B%2BdYCMQCv1V%2F%2Bbx2mfMos19bVSRR2xROaSBKWwC5HPsjtmOJh0R9LZ83eyU3Lofao3hG%2B1qdPPAejdNZ%2BETfxMk92hvKnpDZDG8rs1nNCID6y2sd1nT4%2FGA4ojyuuxkT%2FpkLqIjr%2F2bgSUXuAWBTdkKERAA%2BrYxUU4TmxcnU0RCpfcE7Wg8RSEVrZ2fb4Nt7yuojvgXrFB0fuWYZgFj5O8q7xZRGb%2FsAiv8BEj1UfgQiIGeGBwj9opGR2DXv7uxzTxIyIxqUQVmBXVtkL76QDrGrlLoOjS3XK4PDaobxBjeaxU%2FrpA7TwnyKGIrhD60Zc6XvxqECORoFlwooSX1zljhlg5nswEfLtZKOFJEyCaKePXbcxxxapW4jj7ffEzC%2F6ecCLWpua9jBZoTuj413h9WN4Jysc0YXvCZWTX9sJz0rvPHSm%2B2WEvP7RUzPZdHv7vBY8pQGJSIgZDXxV7ZVj5eSwoLnTVY2wRBSOGJv%2F%2BEmkZWYbJnBYqmuyHHSGNPU%2FMJXpsMMGOqUBtkZh61O8iGqAMKmX9r9xDJZLnJLEyOQya5jXFIXPOJWawniqj82hN4cJVMskjmmGuPOiuozlo7337qTfoy4%2BD4sMT7op4Y%2FQtdj%2Buu8b3KNsW1XDjpLXcU%2Ff9nU4XI5HyIlmeDZQpoiN19S%2BDM6R%2FIopkXS3Hfb8kELLDgn1Oq0a9qKq4tfsgY2x1YiPwqjzu5E8TOygLDOCjAgSep50d9cPWtny&X-Amz-Signature=3208bfc8ca2b301c0f385b2ff45dd390c4793a719df22042eaa00320640e8f4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
