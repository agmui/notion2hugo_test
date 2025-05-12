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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIXDIW7V%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T150944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCICj%2FJLJQ0VYx7VlcnyDlYss6PNYaXYLi4AX9If7zhksaAiAw%2BuQMbNuIF7CnASMNHgwcY2VW%2Bt020uGFx6ZhNZYMVyqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxxG5v%2F0qPAc6k8TnKtwDhlb1%2BTfgnHlZE82kj3u2eFSTx7FIKMKXSLAhUd1HpxiYd5xIWXfJN%2BtZ%2FezxaGACHsNgADde62LUsFaet62acNtinpWhRQHhZJs0Zav9YbLLYiw72hTvA67Wv70Uct0ABuSDKbTdc35lIW5upDTO3QXyhtbxOvRmFKIvSPldGCjp5i427C6MWK7dTxYVc%2FTe7LOxX4PCrcTizFETuEGFau5i33sfPU5kzZeQ%2FvZJw3%2Bub2dIxO1CVmk%2F44bTjuD2ns6gy9Ok99NqN7eWB0renrB5vCmNAta3lhp2PRtdI2arXaizSzsw%2BD2cS7ic%2F9wexLl0otIwCJEAfkT8n7nLQnbtUk08%2BMLqjaJX35fBD5QfHhp3sqhoao57dcjBfu9%2B6Mb1TOhj78jOMbHil93tOC8D0Oc6HwHYF5lQkbOg%2FLgXVpkM%2FvdOdcyZfXK%2FySIWol637Dvwrt%2F5ZKpHYgKDf55tN3ncIsXH2uzO2PhyQGpgHfeNBwKEugO%2Fr79pfLWLV1pDMW5xhiI0diyI4V3HrFbE%2FWnuBpCjFYYIGWlphZ13RJc8vMDPBWy6CxVS7JzdgmUdXn9LOZIeSlMZVbBWT4xfxkRiQZJSt%2BHGXRKNcmFIeOu1uxLSNReyIBEwpJ2IwQY6pgHcFk%2BEVC4HtjhYrKq5jDKS7TOCfsc%2Fp3r5%2BJWODxIRdY7eq%2F1Vw105a342dWUjkjt%2F2Vv0HISEC%2FQKSXChsgaR2veIOmKvW9rZDlPGFUwtQEICia%2B%2F5gs2ZnJke7jEN3qch1pFAao7j7Pn3qDF%2BqYDKMSO5o0BcdSMS1H3jiAPVkSs03l47KXgwCZxOuNA6bpo7AKi6qJgou97PVp1H0woT8XSk8mI&X-Amz-Signature=0187f3b6767ce9e1ef6fc343289f8ed8813490f90f732721b1a6122ff6069cd1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
