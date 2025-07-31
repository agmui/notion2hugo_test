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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TLQ7UDZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPRIEdB0hM4mLy1JZ%2FVrcosq3GjV6yuthQrF4tWelvLAIgEengiNUnTj3NEwnxQEONW3P1Zyu6%2FKuSKrcD%2BzJ2LVMqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNx0Y%2Bhj1ey3qN4WgSrcAzfosMvS7919IZ9OdD1Rq1iQW1zO46p0aZQAVEjDvYTNBqYRsyzSpv9sLUyjXeqv2UcAuYqBMOuce39uvqtVGywa1O6KErVkEMlPMrjDZhjC%2FGvzKwY%2FZaz5r6gZDLABrf891t9YVYAzQAGtViCewEQNytnKCfq5Bfoy3vkNapgwl2YXpqmeeEYUdwvnfGH%2Byp0QO6dRNzdCB%2FjX78qi6aao6l4eky8gMKJ0Lt2qVueRh06uwYgcMDD9bD0Z7cjwzIziqttVIPRUH1tsAeWGYE28CWctHD3XnmTLmo450VYYehLsvgsV82eCxbLsyMHZm0SpncnaQhgHHHZjzeDCz9Xlksf7JZIFS3YYS1WnjJxukqBU8a2wpO9NwTL%2FBFI4E0mci%2Ba5CoofCayyYFG18m%2FQQ57W1LcuSzpkb7ns74hm8Ztq1by7W%2B9IRtL%2FVHCk%2FxM4C5t1bvECaIMiDNRZuifVixWvORXeP6iwY0%2B6oDvZ5R2foFtW35mp5c%2BaE5aaOnWaz9Lh664KV35xlP%2FTyWg5dN680uGK3r4vCPwZUNC7bQHnX3p4LA7gE3xmkpWVhJJyn78JxTAjVvGxcIQDFOJIgJl5VO%2BEnzlT6HYNM6bO7M7AQowM0Hnp8LFMMJ%2BZrMQGOqUB6UK9oqBzp8BmWHiPXDBl8PqBRporncGl2tjAACYqFyA6OpcZzAesAa0OIAP%2BGVRZJVF77phsdzf89pVSWqMnz9Oro0fXPP0wWP799cM3S8q%2B1q4uHG0JX96zi9dXOkiwF6RXvgOprU38pHQzzTrv1PsI0E%2Fd11nxBvt1eduTNTG2uItGN3hTpFfOlZfUzSt8k8pWdHV940A7EzNNlddlPZw9S364&X-Amz-Signature=c216eb256e53e9bd24183f4c020e29ec396eb4a17947a1dd49b3e336488da1fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
