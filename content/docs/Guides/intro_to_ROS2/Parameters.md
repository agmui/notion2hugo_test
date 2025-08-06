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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZGJ4TBQ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCICU7Z%2BgkjgC26ijSIRcQlP9S7p5%2B3Bk0KPQFlnYjLXiRAiBzO6D6k2IrWBgv4QJMtJVhnL8DiVw%2FDXKeuAAclDnT3yr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM2NquU9X3j%2FJdsU1xKtwDGkA06StAD0tdSE%2F3fSMBXI5zMsSGWcKcn9iFeEOLOE%2BhUDGRbspJ%2BRDKf2tyVvW1eVxc03PeGja6LINloqzeCAWt%2Bzoe6Af7nVYYBnJryiBU1rKRlsnJdQhgBcNuWaQsJwba6S30vwin5k8NDJzS4HeEHnRdGe6K4ggv1h78uyWbhIfG4P20UDb8j18iFuM6d%2Bg1u5T%2BvKWDIFtjJeHLnWSuNtGWqcDKGEn186BeYw%2BBeiTKk%2Fn8e52KQ%2FmCXgxdFZ3QUn%2FUZdy2nriw%2F8CBq7gdHfKDLgpyUWra4xUGVAhepgKuYAXenl%2BlYrKfkx%2FxtAq9APADShbQTqclZEe1jpkslVZ6FWFs%2FB8DOcKkUkyH6s6i8Fdz9NXYgTedL5dCNJ1uEoOxCzkoCWWTkEw4cMv44e1HcuTDeeK6l02Xk%2FWCyUlXGHk%2B0awsDxWSG7nGoaDlxyEyHoF%2FuGgtoF4NiTcUXl6xvs0pykvRVS49miizhUY7bus855EZgdkgaN9OvZrD9fEaC3U8hPSK70bxekr0qbe0DthdU5KDE2x8g4mGrPPEU1iPUh02VbJ5ntY7Z7r%2BR70lUDYltaaS%2BjBWSo0oisKBtRhmxbGOf2edfuwJSZujout1acpydFMw6erOxAY6pgG0tuQ2P7QPjm1npu4ZEZ8tsUbnK%2B%2Bv1xHwyg%2ByG5k88YTJmAbv4xLna2yd0gqeIrkOgAnHS%2B2z%2BTLEiOGQl2OUEPLEKC7XnWgI8NrMTqHBr5Op5EVdVcetS63q%2BqhkZ76jdxUaAjkqmrIWE4ylbLIgctuozJ5wRhvo9v%2Fkp34Wb43x4%2FpwIk%2F72ODEvOEyoW6bZ7ipgGpVOWQUMwRwoHfkcQwldj%2FK&X-Amz-Signature=3579cd84236ccc199bd167c7837a5f7282028019d1ab886e548388abb136b5ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
