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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ7YJQZN%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T020917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjRCiCUSBE2lHs09%2B%2B3XARjk4G6o8hg8WXPZLUfDi8JgIgf%2BWIOYgsPjrucBYKPQT%2FPNd3EDTfwGZfsyZHrlfAGz0qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEHNAAx%2BtfTbPFQkxyrcA3xnigaN66Ctdpp8qMSucWvatXBvmBM4cnrR1LzjPEt6bHBHecyzk00s6l9P%2Fff0V5X3jEEOlObhqRhB0YntpT8JSLU5ZlQSogo4Fs66%2BfrScUd2J%2FLdFu5chDaL9Hj8tkJcSlplxyaENvoBiOykn8AS6auzHYmPJIiITv3xwGZpt%2Bx9LlKJgbfCv2KRsFw8z1Ehjuu6OeCaQrCbKgu2WbjMgKOXUnYvAPZJakh%2FaCwy%2FgMXLSWW4%2F%2FdKo8cJZTmxteiNFpgxPp9hj9YQkB6Tlysr6UcfNKgWG7qlobINWqtzK5U8oFXOUdv0WQzx4qt85WJEeBIFmz6IUGTvx1XFA0NMQtdHihVFUteW7VEH55L4Muh35YQ2Z6tbBpbAs3R7E1Df2HHCdHjB%2FFdui6SVABVp0IJf3I4d43ss0IuZJ6SBoghVOrFz9dWB7BV7w9OompJ9HaEjyfbPWNoJsB3U0P%2BXQ7Qwc3WMa7jDxzh42ITpySHr6kGrRXLVB%2Fz3eT7jsjdzPFRzwWtrjt%2FNam6MlTvQiKXtQTgr7pR4RK92e56ysM%2BqVuPG0gAFGAfmYIdeUZ6F41UZOKochSdDujmsZFnvo54g4HpgeeDcKhuaxGp3gHGnV1z1xs4OI7UML6Ytb0GOqUBh%2FuB4CLHEAqusZMpIr8XJ1zIauXwYjm8WDl000jTbcAQ4sEcB6KmkeOvP%2FUOVY9%2BXzSRzjOk1NVmkIk6I%2BNYltCdOH6CqXSKX2LmSi4%2FhnxaiHJH5va1QeoeCSI8uosezOUM6sQX3wxXgXbMqpsVriWxdcmFpBDycz%2F1VuCtHemSJ%2FFaWw%2BVL1MCPtZQFa5amipywQ8gq%2FfpqDcoDVEivi6ck2Be&X-Amz-Signature=a01c95f3aa60c97948415f7ef02ca4692f04d76d56a895b3f5440f9f4b090ee1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
