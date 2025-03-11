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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVMKV3P3%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDTloXxsVrOrGiTucwp7YSKSw%2B1AtEG27bdTv6%2FRcsA5wIgHZeu5km4SCnhjnzFEBxWvJSi4zxG80Px7TfPwhI9BzEqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNEs49MXLimw67cEircA4B4DwVdRpzRMDuXNvvDfitv8Ml0yFpVQTpQ0W%2BP4UCdpW3yKpYEaOecVEtLbp5Keo87sumT0j79jgQkt7iPR501RuVDVAP4Si27dNHUStGAHfTO4t5sc2uvxHNzyIO4RGuRaRUViV6wocGTYAV9Ov2EHE%2BgElyzuLNmf9k7uS6%2BnIHJM06gHifkjQhVzGQU8z%2FPToG%2FYVvUkfJ0vvwkN4AOlVVXMW10SYRKkYFF4X6RSIzUMltiLelxj%2BfZGrxJQJGzJ%2FYgGUTn8xOkNAhoT35zl5lHjplV4Aga1FJBCiPdRa5kzF0Pva6ht8SCR2AQzP3%2FQhvr0kv87noZRwaJAG5oB3E%2BpAxaXdU4fPzXkUB3o5RtlSSNva9xdzneLU8H%2FU0Rl2R5yr2arJfaXfedtSxGag8xo6XTC8M8C7pIj4JH9zPBBeUxQrjxPo%2Fm%2FOsVe46GoSTTP9PDi0FrANjkxoTmWy%2FXtLgiOeQPy1KNA%2FYjTSVK2pvJxVlPfhS2c4MKJmGgw4WYdx4Kye55%2FdL%2BBVFz1JCPsstuHmNjGZhh%2FYSGZnWh0i0Uqo91nOmYlfpjR8dOYym6xMQkNWisTApy0BK4uDN7KdeIpzuRf9EPUJ1wjTcPNniE5SCI67%2BvMM6Qwr4GOqUBgHDTzv6ICStSN42QQ9f8tIP7S76579%2FZgowoDAAyOfXly%2Bzmxd3rY%2BnBipJnlMiW1sAbXhujMa4IRDa9TQJKQuLDqseePxk9sRw6CQxGXb6eBS2OBd2ylZunOfUzyvIOxxVbVEfUg4H3eudOewVYPrPnCvCy%2BMw5dvb9fKSugaPITLTtAO8%2FegVPRdr8kMzgQcYPwfCnV7iKFfbiy9CmscidBNK2&X-Amz-Signature=4467a825600f157979679e81870b84f958f7273e8d7563b1144b2c30dac421d9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
